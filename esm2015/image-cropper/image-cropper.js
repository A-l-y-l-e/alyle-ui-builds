import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2, HostListener, OnDestroy, NgZone } from '@angular/core';
import { LyTheme2, mergeDeep, LY_COMMON_STYLES, ThemeVariables, st2c, ThemeRef, StyleCollection, LyClasses, StyleTemplate } from '@alyle/ui';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
const STYLE_PRIORITY = -2;
export const STYLES = (theme, ref) => {
    const cropper = ref.selectorsOf(STYLES);
    return {
        $name: LyImageCropper.и,
        $priority: STYLE_PRIORITY,
        root: () => (className) => `${className}{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;overflow:hidden;position:relative;justify-content:center;align-items:center;}${st2c(((theme.cropper
            && theme.cropper.root
            && (theme.cropper.root instanceof StyleCollection
                ? theme.cropper.root.setTransformer(fn => fn(cropper))
                : theme.cropper.root(cropper)))), `${className}`)}`,
        imgContainer: (className) => `${className}{cursor:move;position:absolute;top:0;left:0;}${className} > canvas{pointer-events:none;}`,
        area: (className) => `${className}{pointer-events:none;box-shadow:0 0 0 20000px rgba(0, 0, 0, 0.4);margin:auto;}${st2c((LY_COMMON_STYLES.fill), `${className}`)}${st2c((LY_COMMON_STYLES.fill), `${className}:before,${className}:after`)}${className}:before,${className}:after{content:'';}${className}:before{width:0;height:0;margin:auto;border-radius:50%;background:#fff;border:solid 2px rgb(255, 255, 255);}${className}:after{border:solid 2px rgb(255, 255, 255);}`,
        defaultContent: (className) => `${className}{display:flex;align-items:center;justify-content:center;}${st2c((LY_COMMON_STYLES.fill), `${className},${className} > input`)}${className} *:not(input){pointer-events:none;}${className} > input{background:transparent;opacity:0;width:100%;height:100%;}`
    };
};
/** Image output */
export var ImgResolution;
(function (ImgResolution) {
    /** Resizing & cropping */
    ImgResolution[ImgResolution["Default"] = 0] = "Default";
    /** Only cropping */
    ImgResolution[ImgResolution["OriginalImage"] = 1] = "OriginalImage";
})(ImgResolution || (ImgResolution = {}));
/** Image output */
export var ImgCropperError;
(function (ImgCropperError) {
    /** The loaded image exceeds the size limit set. */
    ImgCropperError[ImgCropperError["Size"] = 0] = "Size";
    /** The file loaded is not image. */
    ImgCropperError[ImgCropperError["Type"] = 1] = "Type";
    /** When the image has not been loaded. */
    ImgCropperError[ImgCropperError["Other"] = 2] = "Other";
})(ImgCropperError || (ImgCropperError = {}));
const CONFIG_DEFAULT = {
    width: 250,
    height: 200,
    output: ImgResolution.Default,
    antiAliased: true
};
let LyImageCropper = class LyImageCropper {
    constructor(_renderer, theme, elementRef, cd, _ngZone) {
        this._renderer = _renderer;
        this.theme = theme;
        this.elementRef = elementRef;
        this.cd = cd;
        this._ngZone = _ngZone;
        /**
         * styles
         * @docs-private
         */
        this.classes = this.theme.addStyleSheet(STYLES);
        this._imgRect = {};
        this._listeners = new Set();
        this.scaleChange = new EventEmitter();
        /** On loaded new image */
        this.loaded = new EventEmitter();
        /** On crop new image */
        this.cropped = new EventEmitter();
        /** Emit an error when the loaded image is not valid */
        this.error = new EventEmitter();
        this._renderer.addClass(elementRef.nativeElement, this.classes.root);
    }
    get config() {
        return this._config;
    }
    set config(val) {
        this._config = mergeDeep({}, CONFIG_DEFAULT, val);
        const maxFileSize = this._config.maxFileSize;
        if (maxFileSize) {
            this.maxFileSize = maxFileSize;
        }
    }
    /** Set scale */
    get scale() {
        return this._scale;
    }
    set scale(val) {
        this.setScale(val);
    }
    /** Get min scale */
    get minScale() {
        return this._minScale;
    }
    ngOnDestroy() {
        this._listeners.forEach(listen => listen.unsubscribe());
        this._listeners.clear();
    }
    _imgLoaded(imgElement) {
        if (imgElement) {
            this._img = imgElement;
            const canvas = this._imgCanvas.nativeElement;
            canvas.width = imgElement.width;
            canvas.height = imgElement.height;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imgElement, 0, 0);
            /** set min scale */
            this._updateMinScale(canvas);
        }
    }
    _setStylesForContImg(values) {
        const newStyles = {};
        if (values.x !== void 0 && values.y !== void 0) {
            const rootRect = this._rootRect();
            const x = rootRect.width / 2 - (values.x);
            const y = rootRect.height / 2 - (values.y);
            this._imgRect.x = (values.x);
            this._imgRect.y = (values.y);
            this._imgRect.xc = (x);
            this._imgRect.yc = (y);
        }
        newStyles.transform = `translate3d(${(this._imgRect.x)}px,${(this._imgRect.y)}px, 0)`;
        newStyles.transform += `scale(${this._scal3Fix})`;
        newStyles.transformOrigin = `${this._imgRect.xc}px ${this._imgRect.yc}px 0`;
        newStyles['-webkit-transform'] = newStyles.transform;
        newStyles['-webkit-transform-origin'] = newStyles.transformOrigin;
        for (const key in newStyles) {
            if (newStyles.hasOwnProperty(key)) {
                this._renderer.setStyle(this._imgContainer.nativeElement, key, newStyles[key]);
            }
        }
    }
    _resize$() {
        if (this.isLoaded) {
            this.updatePosition();
        }
    }
    selectInputEvent(img) {
        const _img = img.target;
        if (_img.files && _img.files.length !== 1) {
            return;
        }
        const fileSize = _img.files[0].size;
        const fileName = _img.value.replace(/.*(\/|\\)/, '');
        if (this.maxFileSize && fileSize > this.maxFileSize) {
            const cropEvent = {
                name: fileName,
                type: _img.files[0].type,
                size: fileSize,
                error: ImgCropperError.Size
            };
            this.clean();
            this.error.emit(cropEvent);
            return;
        }
        const readFile = new Observable(obs => {
            const reader = new FileReader();
            reader.onerror = err => obs.error(err);
            reader.onabort = err => obs.error(err);
            reader.onload = (ev) => setTimeout(() => {
                obs.next(ev);
                obs.complete();
            }, 1);
            return reader.readAsDataURL(_img.files[0]);
        })
            .subscribe({
            next: (loadEvent) => {
                const originalImageUrl = loadEvent.target.result;
                // Set type
                if (!this.config.type) {
                    this._defaultType = _img.files[0].type;
                }
                // set name
                this._fileName = fileName;
                // set file size
                this._sizeInBytes = _img.files[0].size;
                this.setImageUrl(originalImageUrl);
                this.cd.markForCheck();
                this._listeners.delete(readFile);
            },
            error: () => {
                const cropEvent = {
                    name: fileName,
                    size: fileSize,
                    error: ImgCropperError.Other,
                    errorMsg: 'The File could not be loaded.'
                };
                this.clean();
                this.error.emit(cropEvent);
                this._listeners.delete(readFile);
                this.ngOnDestroy();
            }
        });
        this._listeners.add(readFile);
    }
    /** Set the size of the image, the values can be 0 between 1, where 1 is the original size */
    setScale(size, noAutoCrop) {
        // fix min scale
        const newSize = size >= this.minScale && size <= 1 ? size : this.minScale;
        // check
        const changed = size != null && size !== this.scale && newSize !== this.scale;
        this._scale = size;
        if (!changed) {
            return;
        }
        this._scal3Fix = newSize;
        if (this.isLoaded) {
            if (changed) {
                const originPosition = Object.assign({}, this._imgRect);
                this.offset = {
                    x: originPosition.x,
                    y: originPosition.y,
                    left: originPosition.xc,
                    top: originPosition.yc
                };
                this._setStylesForContImg({});
                this._move({
                    srcEvent: {},
                    deltaX: 0,
                    deltaY: 0
                });
            }
            else {
                return;
            }
        }
        else if (this.minScale) {
            this._setStylesForContImg(Object.assign({}, this._getCenterPoints()));
        }
        else {
            return;
        }
        this.scaleChange.emit(size);
        if (!noAutoCrop) {
            this._cropIfAutoCrop();
        }
    }
    _getCenterPoints() {
        const root = this.elementRef.nativeElement;
        const img = this._imgCanvas.nativeElement;
        const x = (root.offsetWidth - (img.width)) / 2;
        const y = (root.offsetHeight - (img.height)) / 2;
        return {
            x,
            y
        };
    }
    /**
     * Ajustar a la pantalla
     */
    fitToScreen() {
        const container = this.elementRef.nativeElement;
        const min = {
            width: container.offsetWidth,
            height: container.offsetHeight
        };
        const { width, height } = this._img;
        const minScale = {
            width: min.width / width,
            height: min.height / height
        };
        const result = Math.max(minScale.width, minScale.height);
        this.setScale(result);
    }
    fit() {
        this.setScale(this.minScale);
    }
    _moveStart() {
        this.offset = {
            x: this._imgRect.x,
            y: this._imgRect.y,
            left: this._imgRect.xc,
            top: this._imgRect.yc
        };
    }
    _move(event) {
        let x, y;
        const canvas = this._imgCanvas.nativeElement;
        const scaleFix = this._scal3Fix;
        const config = this.config;
        const startP = this.offset;
        if (!scaleFix || !startP) {
            return;
        }
        const isMinScaleY = canvas.height * scaleFix < config.height && config.extraZoomOut;
        const isMinScaleX = canvas.width * scaleFix < config.width && config.extraZoomOut;
        const limitLeft = (config.width / 2 / scaleFix) >= startP.left - (event.deltaX / scaleFix);
        const limitRight = (config.width / 2 / scaleFix) + (canvas.width) - (startP.left - (event.deltaX / scaleFix)) <= config.width / scaleFix;
        const limitTop = ((config.height / 2 / scaleFix) >= (startP.top - (event.deltaY / scaleFix)));
        const limitBottom = (((config.height / 2 / scaleFix) + (canvas.height) - (startP.top - (event.deltaY / scaleFix))) <= (config.height / scaleFix));
        // Limit for left
        if ((limitLeft && !isMinScaleX) || (!limitLeft && isMinScaleX)) {
            x = startP.x + (startP.left) - (config.width / 2 / scaleFix);
        }
        // Limit for right
        if ((limitRight && !isMinScaleX) || (!limitRight && isMinScaleX)) {
            x = startP.x + (startP.left) + (config.width / 2 / scaleFix) - canvas.width;
        }
        // Limit for top
        if ((limitTop && !isMinScaleY) || (!limitTop && isMinScaleY)) {
            y = startP.y + (startP.top) - (config.height / 2 / scaleFix);
        }
        // Limit for bottom
        if ((limitBottom && !isMinScaleY) || (!limitBottom && isMinScaleY)) {
            y = startP.y + (startP.top) + (config.height / 2 / scaleFix) - canvas.height;
        }
        // When press shiftKey, deprecated
        // if (event.srcEvent && event.srcEvent.shiftKey) {
        //   if (Math.abs(event.deltaX) === Math.max(Math.abs(event.deltaX), Math.abs(event.deltaY))) {
        //     y = this.offset.top;
        //   } else {
        //     x = this.offset.left;
        //   }
        // }
        if (x === void 0) {
            x = (event.deltaX / scaleFix) + (startP.x);
        }
        if (y === void 0) {
            y = (event.deltaY / scaleFix) + (startP.y);
        }
        this._setStylesForContImg({
            x, y
        });
    }
    updatePosition(x, y) {
        const hostRect = this._rootRect();
        const croppingContainerRect = this._areaCropperRect();
        if (x === undefined && y === undefined) {
            x = this._imgRect.xc;
            y = this._imgRect.yc;
        }
        x = (croppingContainerRect.left - hostRect.left) - (x - (this.config.width / 2));
        y = (croppingContainerRect.top - hostRect.top) - (y - (this.config.height / 2));
        this._setStylesForContImg({
            x, y
        });
    }
    _slideEnd() {
        this._cropIfAutoCrop();
    }
    _cropIfAutoCrop() {
        if (this.config.autoCrop) {
            this.crop();
        }
    }
    /**+ */
    zoomIn() {
        const scale = this._scal3Fix + .05;
        if (scale > 0 && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.setScale(1);
        }
    }
    /** Clean the img cropper */
    clean() {
        if (this.isLoaded) {
            this._imgRect = {};
            this.offset = undefined;
            this.scale = undefined;
            this._scal3Fix = undefined;
            this._rotation = 0;
            this._minScale = undefined;
            this._isLoadedImg = false;
            this.isLoaded = false;
            this.isCropped = false;
            this._originalImgBase64 = undefined;
            const canvas = this._imgCanvas.nativeElement;
            canvas.width = 0;
            canvas.height = 0;
            this.cd.markForCheck();
        }
    }
    /**- */
    zoomOut() {
        const scale = this._scal3Fix - .05;
        if (scale > this.minScale && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.fit();
        }
    }
    center() {
        const newStyles = Object.assign({}, this._getCenterPoints());
        this._setStylesForContImg(newStyles);
        this._cropIfAutoCrop();
    }
    /**
     * Load Image from URL
     * @param src URL
     * @param fn function that will be called before emit the event loaded
     */
    setImageUrl(src, fn) {
        this.clean();
        this._originalImgBase64 = src;
        src = normalizeSVG(src);
        const img = createHtmlImg(src);
        const fileSize = this._sizeInBytes;
        const fileName = this._fileName;
        const defaultType = this._defaultType;
        const cropEvent = {
            name: fileName,
            type: defaultType,
            originalDataURL: src
        };
        if (fileSize) {
            cropEvent.size = fileSize;
        }
        const loadListen = new Observable(obs => {
            img.onerror = err => obs.error(err);
            img.onabort = err => obs.error(err);
            img.onload = () => {
                obs.next(null);
                obs.complete();
            };
        })
            .subscribe({
            next: () => {
                this._imgLoaded(img);
                cropEvent.width = img.width;
                cropEvent.height = img.height;
                this._isLoadedImg = true;
                this.cd.markForCheck();
                this._ngZone
                    .onStable
                    .pipe(take(1))
                    .subscribe(() => setTimeout(() => this._ngZone.run(() => {
                    this._updateMinScale(this._imgCanvas.nativeElement);
                    this.isLoaded = false;
                    if (fn) {
                        fn();
                    }
                    else {
                        this.setScale(this.minScale, true);
                    }
                    this.loaded.emit(cropEvent);
                    this.isLoaded = true;
                    this._cropIfAutoCrop();
                    this.cd.markForCheck();
                }), 0));
                this._listeners.delete(loadListen);
                this.ngOnDestroy();
            },
            error: () => {
                cropEvent.error = ImgCropperError.Type;
                this.error.emit(cropEvent);
                this._listeners.delete(loadListen);
                this.ngOnDestroy();
            }
        });
        this._listeners.add(loadListen);
        // clear
        this._sizeInBytes = null;
        this._fileName = null;
        this._defaultType = undefined;
    }
    rotate(degrees) {
        const validDegrees = this._rotation = convertToValidDegrees(degrees);
        const degreesRad = validDegrees * Math.PI / 180;
        const canvas = this._imgCanvas.nativeElement;
        const canvasClon = createCanvasImg(canvas);
        const ctx = canvas.getContext('2d');
        // clear
        ctx.clearRect(0, 0, canvasClon.width, canvasClon.height);
        // rotate canvas image
        const transform = `rotate(${validDegrees}deg) scale(${1 / this._scal3Fix})`;
        const transformOrigin = `${this._imgRect.xc}px ${this._imgRect.yc}px 0`;
        canvas.style.transform = transform;
        canvas.style.webkitTransform = transform;
        canvas.style.transformOrigin = transformOrigin;
        canvas.style.webkitTransformOrigin = transformOrigin;
        const { left, top } = canvas.getBoundingClientRect();
        // save rect
        const canvasRect = canvas.getBoundingClientRect();
        // remove rotate styles
        canvas.removeAttribute('style');
        // set w & h
        const w = canvasRect.width;
        const h = canvasRect.height;
        ctx.canvas.width = w;
        ctx.canvas.height = h;
        // clear
        ctx.clearRect(0, 0, w, h);
        // translate and rotate
        ctx.translate(w / 2, h / 2);
        ctx.rotate(degreesRad);
        ctx.drawImage(canvasClon, -canvasClon.width / 2, -canvasClon.height / 2);
        // Update min scale
        this._updateMinScale(canvas);
        // set the minimum scale, only if necessary
        if (this.scale < this.minScale) {
            this.setScale(0, true);
        } //                ↑ no AutoCrop
        const rootRect = this._rootRect();
        this._setStylesForContImg({
            x: (left - rootRect.left),
            y: (top - rootRect.top)
        });
        // keep image inside the frame
        const originPosition = Object.assign({}, this._imgRect);
        this.offset = {
            x: originPosition.x,
            y: originPosition.y,
            left: originPosition.xc,
            top: originPosition.yc
        };
        this._setStylesForContImg({});
        this._move({
            srcEvent: {},
            deltaX: 0,
            deltaY: 0
        });
        this._cropIfAutoCrop();
    }
    _updateMinScale(canvas) {
        const config = this.config;
        this._minScale = (config.extraZoomOut ? Math.min : Math.max)(config.width / canvas.width, config.height / canvas.height);
    }
    imageSmoothingQuality(img, config, quality) {
        /** Calculate total number of steps needed */
        let numSteps = Math.ceil(Math.log(Math.max(img.width, img.height) / Math.max(config.width, config.height)) / Math.log(2)) - 1;
        numSteps = numSteps <= 0 ? 0 : numSteps;
        /**Array steps */
        const steps = Array.from(Array(numSteps).keys());
        /** Context */
        const octx = img.getContext('2d');
        const q = (Math.pow((quality * 10), numSteps)) / (Math.pow(10, numSteps));
        const fileType = this._defaultType;
        /** If Steps => imageSmoothingQuality */
        if (numSteps) {
            /** Set size */
            const w = img.width * quality;
            const h = img.height * quality;
            /** Only the new img is shown. */
            if (fileType === 'image/png' || fileType === 'image/svg+xml') {
                octx.globalCompositeOperation = 'copy';
            }
            /** Steps */
            steps.forEach(() => {
                octx.drawImage(img, 0, 0, w, h);
            });
        }
        /**
         * Step final
         * Resizing & cropping image
         */
        const oc = document.createElement('canvas'), ctx = oc.getContext('2d');
        oc.width = config.width;
        oc.height = config.height;
        ctx.drawImage(img, 0, 0, img.width * q, img.height * q, 0, 0, oc.width, oc.height);
        return oc;
    }
    /**
     * Crop Image
     * Resizing & cropping image
     */
    crop(config) {
        const newConfig = config ? mergeDeep({}, this.config || CONFIG_DEFAULT, config) : this.config;
        const cropEvent = this._imgCrop(newConfig);
        this.cd.markForCheck();
        return cropEvent;
    }
    /**
     * @docs-private
     */
    _imgCrop(myConfig) {
        const canvasElement = document.createElement('canvas');
        const imgRect = this._imgRect;
        const scaleFix = this._scal3Fix;
        const left = imgRect.xc - (myConfig.width / 2 / scaleFix);
        const top = imgRect.yc - (myConfig.height / 2 / scaleFix);
        const config = {
            width: myConfig.width,
            height: myConfig.height
        };
        canvasElement.width = config.width / scaleFix;
        canvasElement.height = config.height / scaleFix;
        const ctx = canvasElement.getContext('2d');
        if (myConfig.fill) {
            ctx.fillStyle = myConfig.fill;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        ctx.drawImage(this._imgCanvas.nativeElement, -(left), -(top));
        let result = canvasElement;
        const antiAliasedQ = myConfig.antiAliased ? .5 : 1;
        if (myConfig.output === 0) {
            result = this.imageSmoothingQuality(result, config, antiAliasedQ);
        }
        else if (typeof myConfig.output === 'object') {
            result = this.imageSmoothingQuality(result, myConfig.output, antiAliasedQ);
        }
        let url;
        if (myConfig.type) {
            url = result.toDataURL(`${myConfig.type}`);
        }
        else {
            url = result.toDataURL(this._defaultType);
        }
        const cropEvent = {
            dataURL: url,
            type: this._defaultType || myConfig.type,
            name: this._fileName,
            width: config.width,
            height: config.height,
            originalDataURL: this._originalImgBase64,
            scale: this._scal3Fix,
            rotation: this._rotation,
            position: {
                x: this._imgRect.xc,
                y: this._imgRect.yc
            }
        };
        this.isCropped = true;
        this.cropped.emit(cropEvent);
        return cropEvent;
    }
    _rootRect() {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }
    _areaCropperRect() {
        return this._croppingContainer.nativeElement.getBoundingClientRect();
    }
};
LyImageCropper.и = 'LyImageCropper';
LyImageCropper.ctorParameters = () => [
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
tslib_1.__decorate([
    ViewChild('_imgContainer', { static: true })
], LyImageCropper.prototype, "_imgContainer", void 0);
tslib_1.__decorate([
    ViewChild('_area', { static: false })
], LyImageCropper.prototype, "_croppingContainer", void 0);
tslib_1.__decorate([
    ViewChild('_imgCanvas', { static: true })
], LyImageCropper.prototype, "_imgCanvas", void 0);
tslib_1.__decorate([
    Input()
], LyImageCropper.prototype, "config", null);
tslib_1.__decorate([
    Input()
], LyImageCropper.prototype, "scale", null);
tslib_1.__decorate([
    Input()
], LyImageCropper.prototype, "maxFileSize", void 0);
tslib_1.__decorate([
    Output()
], LyImageCropper.prototype, "scaleChange", void 0);
tslib_1.__decorate([
    Output()
], LyImageCropper.prototype, "loaded", void 0);
tslib_1.__decorate([
    Output()
], LyImageCropper.prototype, "cropped", void 0);
tslib_1.__decorate([
    Output()
], LyImageCropper.prototype, "error", void 0);
tslib_1.__decorate([
    HostListener('window:resize')
], LyImageCropper.prototype, "_resize$", null);
LyImageCropper = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        preserveWhitespaces: false,
        selector: 'ly-img-cropper, ly-image-cropper',
        template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart()\"\n(slide)=\"_move($event)\"\n(slideend)=\"_slideEnd()\">\n  <canvas #_imgCanvas></canvas>\n</div>\n<div #_area *ngIf=\"_isLoadedImg; else content\" [className]=\"classes.area\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.defaultContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
    })
], LyImageCropper);
export { LyImageCropper };
/**
 * convertToValidDegrees(45) === 90
 * convertToValidDegrees(40) === 0
 * convertToValidDegrees(100) === 90
 * @docs-private
 */
function convertToValidDegrees(num) {
    const val360 = limitNum(num, 360);
    const val90 = limitNum(val360.result, 90);
    const sign = Math.sign(num);
    if (val90.result >= (90 / 2)) {
        return 90 * (val90.parts + 1) * sign;
    }
    else {
        return 90 * val90.parts * sign;
    }
}
/**
 * demo:
 * limitNum(450, 360) === 90
 * @docs-private
 */
function limitNum(num, num2) {
    const numAbs = Math.abs(num);
    const parts = Math.floor(numAbs / num2);
    let result;
    if (parts) {
        result = numAbs - (num2 * parts);
    }
    else {
        result = num;
    }
    if (numAbs !== num) {
        result *= -1;
    }
    return {
        result,
        parts
    };
}
/**
 * @docs-private
 */
function createCanvasImg(img) {
    // create a new canvas
    const newCanvas = document.createElement('canvas');
    const context = newCanvas.getContext('2d');
    // set dimensions
    newCanvas.width = img.width;
    newCanvas.height = img.height;
    // apply the old canvas to the new one
    context.drawImage(img, 0, 0);
    // return the new canvas
    return newCanvas;
}
const DATA_IMAGE_SVG_PREFIX = 'data:image/svg+xml;base64,';
function normalizeSVG(dataURL) {
    if (window.atob && isSvgImage(dataURL)) {
        const len = dataURL.length / 5;
        const text = window.atob(dataURL.replace(DATA_IMAGE_SVG_PREFIX, ''));
        const span = document.createElement('span');
        span.innerHTML = text;
        const svg = span.querySelector('svg');
        span.setAttribute('style', 'display:none');
        document.body.appendChild(span);
        const width = parseFloat(getComputedStyle(svg).width) || 1;
        const height = parseFloat(getComputedStyle(svg).height) || 1;
        const max = Math.max(width, height);
        svg.setAttribute('width', `${len / (width / max)}px`);
        svg.setAttribute('height', `${len / (height / max)}px`);
        const result = DATA_IMAGE_SVG_PREFIX + window.btoa(span.innerHTML);
        document.body.removeChild(span);
        return result;
    }
    return dataURL;
}
function isSvgImage(dataUrl) {
    return dataUrl.startsWith(DATA_IMAGE_SVG_PREFIX);
}
function createHtmlImg(src) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    return img;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9pbWFnZS1jcm9wcGVyLyIsInNvdXJjZXMiOlsiaW1hZ2UtY3JvcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsSUFBSSxFQUNKLFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFZdEMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFMUIsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBK0MsRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN2RixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLE9BQU87UUFDTCxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDdkIsU0FBUyxFQUFFLGNBQWM7UUFDekIsSUFBSSxFQUFFLEdBQUksRUFBRSxDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLG1MQUFtTCxJQUFJLENBQUMsQ0FDbE8sQ0FBQyxLQUFLLENBQUMsT0FBTztlQUNULEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtlQUNsQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxZQUFZ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RXBDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsTUFBTSxNQUFNLEdBQUcscUJBQXFCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxPQUFlO0lBQ2pDLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxHQUFXO0lBQ2hDLE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDeEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDOUIsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDZCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtZXJnZURlZXAsXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBzdDJjLFxuICBUaGVtZVJlZixcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5SW1hZ2VDcm9wcGVyVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBJbWFnZSBDcm9wcGVyIENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUltYWdlQ3JvcHBlclZhcmlhYmxlcyB7XG4gIGNyb3BwZXI/OiBMeUltYWdlQ3JvcHBlclRoZW1lO1xufVxuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5SW1hZ2VDcm9wcGVyVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IGNyb3BwZXIgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgcmV0dXJuIHtcbiAgICAkbmFtZTogTHlJbWFnZUNyb3BwZXIu0LgsXG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtkaXNwbGF5OmZsZXg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO30ke3N0MmMoKFxuICAgICAgICAgICh0aGVtZS5jcm9wcGVyXG4gICAgICAgICAgICAmJiB0aGVtZS5jcm9wcGVyLnJvb3RcbiAgICAgICAgICAgICYmICh0aGVtZS5jcm9wcGVyLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5jcm9wcGVyLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oY3JvcHBlcikpXG4gICAgICAgICAgICAgIDogdGhlbWUuY3JvcHBlci5yb290KGNyb3BwZXIpKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9YCxcbiAgICBpbWdDb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtjdXJzb3I6bW92ZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7fSR7Y2xhc3NOYW1lfSA+IGNhbnZhc3twb2ludGVyLWV2ZW50czpub25lO31gLFxuICAgIGFyZWE6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb2ludGVyLWV2ZW50czpub25lO2JveC1zaGFkb3c6MCAwIDAgMjAwMDBweCByZ2JhKDAsIDAsIDAsIDAuNCk7bWFyZ2luOmF1dG87fSR7c3QyYygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfWApfSR7c3QyYygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfTpiZWZvcmUsJHtjbGFzc05hbWV9OmFmdGVyYCl9JHtjbGFzc05hbWV9OmJlZm9yZSwke2NsYXNzTmFtZX06YWZ0ZXJ7Y29udGVudDonJzt9JHtjbGFzc05hbWV9OmJlZm9yZXt3aWR0aDowO2hlaWdodDowO21hcmdpbjphdXRvO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6I2ZmZjtib3JkZXI6c29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KTt9JHtjbGFzc05hbWV9OmFmdGVye2JvcmRlcjpzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpO31gLFxuICAgIGRlZmF1bHRDb250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO30ke3N0MmMoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX0sJHtjbGFzc05hbWV9ID4gaW5wdXRgKX0ke2NsYXNzTmFtZX0gKjpub3QoaW5wdXQpe3BvaW50ZXItZXZlbnRzOm5vbmU7fSR7Y2xhc3NOYW1lfSA+IGlucHV0e2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7b3BhY2l0eTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7fWBcbiAgfTtcbn07XG4vKiogSW1hZ2UgQ3JvcHBlciBDb25maWcgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckNvbmZpZyB7XG4gIC8qKiBDcm9wcGVyIGFyZWEgd2lkdGggKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqIENyb3BwZXIgYXJlYSBoZWlnaHQgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBJZiB0aGlzIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmV3IGltYWdlIHdpbGwgYmUgYXV0b21hdGljYWxseSBkZWZpbmVkLiAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKiogQmFja2dyb3VuZCBjb2xvciggZGVmYXVsdDogbnVsbCksIGlmIGlzIG51bGwgaW4gcG5nIGlzIHRyYW5zcGFyZW50IGJ1dCBub3QgaW4ganBnLiAqL1xuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIFNldCBhbnRpLWFsaWFzZWQoIGRlZmF1bHQ6IHRydWUpICovXG4gIGFudGlBbGlhc2VkPzogYm9vbGVhbjtcbiAgYXV0b0Nyb3A/OiBib29sZWFuO1xuICBvdXRwdXQ/OiBJbWdPdXRwdXQgfCBJbWdSZXNvbHV0aW9uO1xuICAvKipcbiAgICogWm9vbSBvdXQgdW50aWwgdGhlIGVudGlyZSBpbWFnZSBmaXRzIGludG8gdGhlIGNyb3BwaW5nIGFyZWEuXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBleHRyYVpvb21PdXQ/OiBib29sZWFuO1xuICAvKipcbiAgICogRW1pdCBldmVudCBgZXJyb3JgIGlmIHRoZSBmaWxlIHNpemUgaW4gYnl0ZXMgZm9yIHRoZSBsaW1pdC5cbiAgICogTm90ZTogSXQgb25seSB3b3JrcyB3aGVuIHRoZSBpbWFnZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBgPGlucHV0PmAgZXZlbnQuXG4gICAqL1xuICBtYXhGaWxlU2l6ZT86IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nT3V0cHV0IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbi8qKiBJbWFnZSBvdXRwdXQgKi9cbmV4cG9ydCBlbnVtIEltZ1Jlc29sdXRpb24ge1xuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xuICBEZWZhdWx0LFxuICAvKiogT25seSBjcm9wcGluZyAqL1xuICBPcmlnaW5hbEltYWdlXG59XG5cbi8qKiBJbWFnZSBvdXRwdXQgKi9cbmV4cG9ydCBlbnVtIEltZ0Nyb3BwZXJFcnJvciB7XG4gIC8qKiBUaGUgbG9hZGVkIGltYWdlIGV4Y2VlZHMgdGhlIHNpemUgbGltaXQgc2V0LiAqL1xuICBTaXplLFxuICAvKiogVGhlIGZpbGUgbG9hZGVkIGlzIG5vdCBpbWFnZS4gKi9cbiAgVHlwZSxcbiAgLyoqIFdoZW4gdGhlIGltYWdlIGhhcyBub3QgYmVlbiBsb2FkZWQuICovXG4gIE90aGVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckV2ZW50IHtcbiAgLyoqIENyb3BwZWQgaW1hZ2UgZGF0YSBVUkwgKi9cbiAgZGF0YVVSTD86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIEZpbGV0eXBlICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiBPcmlnaW5hbCBJbWFnZSBkYXRhIFVSTCAqL1xuICBvcmlnaW5hbERhdGFVUkw/OiBzdHJpbmc7XG4gIHNjYWxlPzogbnVtYmVyO1xuICAvKiogQ3VycmVudCByb3RhdGlvbiBpbiBkZWdyZWVzICovXG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICAvKiogU2l6ZSBvZiB0aGUgaW1hZ2UgaW4gYnl0ZXMgKi9cbiAgc2l6ZT86IG51bWJlcjtcbiAgcG9zaXRpb24/OiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckVycm9yRXZlbnQgZXh0ZW5kcyBJbWdDcm9wcGVyRXZlbnQge1xuICAvKiogVHlwZSBvZiBlcnJvciAqL1xuICBlcnJvcjogSW1nQ3JvcHBlckVycm9yO1xuICBlcnJvck1zZz86IHN0cmluZztcbn1cblxuY29uc3QgQ09ORklHX0RFRkFVTFQgPSA8SW1nQ3JvcHBlckNvbmZpZz57XG4gIHdpZHRoOiAyNTAsXG4gIGhlaWdodDogMjAwLFxuICBvdXRwdXQ6IEltZ1Jlc29sdXRpb24uRGVmYXVsdCxcbiAgYW50aUFsaWFzZWQ6IHRydWVcbn07XG5cbmludGVyZmFjZSBJbWdSZWN0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHhjOiBudW1iZXI7XG4gIHljOiBudW1iZXI7XG4gIC8qKiB0cmFuc2Zvcm0gd2l0aCAqL1xuICB3dDogbnVtYmVyO1xuICBodDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ2x5LWltZy1jcm9wcGVyLCBseS1pbWFnZS1jcm9wcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdpbWFnZS1jcm9wcGVyLmh0bWwnXG4gfSlcbmV4cG9ydCBjbGFzcyBMeUltYWdlQ3JvcHBlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeUltYWdlQ3JvcHBlcic7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBfb3JpZ2luYWxJbWdCYXNlNjQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKiBPcmlnaW5hbCBpbWFnZSAqL1xuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHByaXZhdGUgb2Zmc2V0Pzoge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIGxlZnQ6IG51bWJlclxuICAgIHRvcDogbnVtYmVyXG4gIH07XG4gIHByaXZhdGUgX3NjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9zY2FsM0ZpeD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluU2NhbGU/OiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbmZpZzogSW1nQ3JvcHBlckNvbmZpZztcbiAgcHJpdmF0ZSBfaW1nUmVjdDogSW1nUmVjdCA9IHt9IGFzIGFueTtcbiAgcHJpdmF0ZSBfcm90YXRpb246IG51bWJlcjtcbiAgcHJpdmF0ZSBfbGlzdGVuZXJzID0gbmV3IFNldDxTdWJzY3JpcHRpb24+KCk7XG4gIHByaXZhdGUgX3NpemVJbkJ5dGVzOiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGVuIGlzIGxvYWRlZCBpbWFnZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9pc0xvYWRlZEltZzogYm9vbGVhbjtcblxuICAvKiogV2hlbiBpcyBsb2FkZWQgaW1hZ2UgJiByZWFkeSBmb3IgY3JvcCAqL1xuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgaXNDcm9wcGVkOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBfaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfYXJlYScsIHsgc3RhdGljOiBmYWxzZSB9KSBfY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19pbWdDYW52YXMnLCB7IHN0YXRpYzogdHJ1ZSB9KSBfaW1nQ2FudmFzOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcbiAgQElucHV0KClcbiAgZ2V0IGNvbmZpZygpOiBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gbWVyZ2VEZWVwKHt9LCBDT05GSUdfREVGQVVMVCwgdmFsKTtcbiAgICBjb25zdCBtYXhGaWxlU2l6ZSA9IHRoaXMuX2NvbmZpZy5tYXhGaWxlU2l6ZTtcbiAgICBpZiAobWF4RmlsZVNpemUpIHtcbiAgICAgIHRoaXMubWF4RmlsZVNpemUgPSBtYXhGaWxlU2l6ZTtcbiAgICB9XG4gIH1cbiAgLyoqIFNldCBzY2FsZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gIH1cbiAgc2V0IHNjYWxlKHZhbDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRTY2FsZSh2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXQgZXZlbnQgYGVycm9yYCBpZiB0aGUgZmlsZSBzaXplIGZvciB0aGUgbGltaXQuXG4gICAqIE5vdGU6IEl0IG9ubHkgd29ya3Mgd2hlbiB0aGUgaW1hZ2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgYDxpbnB1dD5gIGV2ZW50LlxuICAgKi9cbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IG51bWJlcjtcblxuICAvKiogR2V0IG1pbiBzY2FsZSAqL1xuICBnZXQgbWluU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2NhbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgLyoqIE9uIGxvYWRlZCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogT24gY3JvcCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNyb3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIEVtaXQgYW4gZXJyb3Igd2hlbiB0aGUgbG9hZGVkIGltYWdlIGlzIG5vdCB2YWxpZCAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFcnJvckV2ZW50PigpO1xuXG4gIHByaXZhdGUgX2RlZmF1bHRUeXBlPzogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW4gPT4gbGlzdGVuLnVuc3Vic2NyaWJlKCkpO1xuICAgIHRoaXMuX2xpc3RlbmVycy5jbGVhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW1nTG9hZGVkKGltZ0VsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBpZiAoaW1nRWxlbWVudCkge1xuICAgICAgdGhpcy5faW1nID0gaW1nRWxlbWVudDtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgY2FudmFzLndpZHRoID0gaW1nRWxlbWVudC53aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWdFbGVtZW50LmhlaWdodDtcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nRWxlbWVudCwgMCwgMCk7XG5cbiAgICAgIC8qKiBzZXQgbWluIHNjYWxlICovXG4gICAgICB0aGlzLl91cGRhdGVNaW5TY2FsZShjYW52YXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFN0eWxlc0ZvckNvbnRJbWcodmFsdWVzOiB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcbiAgfSkge1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHsgfSBhcyBhbnk7XG4gICAgaWYgKHZhbHVlcy54ICE9PSB2b2lkIDAgJiYgdmFsdWVzLnkgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3Qgcm9vdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgICAgY29uc3QgeCA9IHJvb3RSZWN0LndpZHRoIC8gMiAtICh2YWx1ZXMueCk7XG4gICAgICBjb25zdCB5ID0gcm9vdFJlY3QuaGVpZ2h0IC8gMiAtICh2YWx1ZXMueSk7XG5cbiAgICAgIHRoaXMuX2ltZ1JlY3QueCA9ICh2YWx1ZXMueCk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnkgPSAodmFsdWVzLnkpO1xuICAgICAgdGhpcy5faW1nUmVjdC54YyA9ICh4KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueWMgPSAoeSk7XG5cbiAgICB9XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkeyh0aGlzLl9pbWdSZWN0LngpfXB4LCR7KHRoaXMuX2ltZ1JlY3QueSl9cHgsIDApYDtcbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtICs9IGBzY2FsZSgke3RoaXMuX3NjYWwzRml4fSlgO1xuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm1PcmlnaW4gPSBgJHt0aGlzLl9pbWdSZWN0LnhjfXB4ICR7dGhpcy5faW1nUmVjdC55Y31weCAwYDtcbiAgICBuZXdTdHlsZXNbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBuZXdTdHlsZXMudHJhbnNmb3JtO1xuICAgIG5ld1N0eWxlc1snLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJ10gPSBuZXdTdHlsZXMudHJhbnNmb3JtT3JpZ2luO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1N0eWxlcykge1xuICAgICAgaWYgKG5ld1N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCBrZXksIG5ld1N0eWxlc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJykgX3Jlc2l6ZSQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RJbnB1dEV2ZW50KGltZzogRXZlbnQpIHtcbiAgICBjb25zdCBfaW1nID0gaW1nLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChfaW1nLmZpbGVzICYmIF9pbWcuZmlsZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVTaXplID0gX2ltZy5maWxlcyFbMF0uc2l6ZTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IF9pbWcudmFsdWUucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpO1xuXG4gICAgaWYgKHRoaXMubWF4RmlsZVNpemUgJiYgZmlsZVNpemUgPiB0aGlzLm1heEZpbGVTaXplKSB7XG4gICAgICBjb25zdCBjcm9wRXZlbnQ6IEltZ0Nyb3BwZXJFcnJvckV2ZW50ID0ge1xuICAgICAgICBuYW1lOiBmaWxlTmFtZSxcbiAgICAgICAgdHlwZTogX2ltZy5maWxlcyFbMF0udHlwZSxcbiAgICAgICAgc2l6ZTogZmlsZVNpemUsXG4gICAgICAgIGVycm9yOiBJbWdDcm9wcGVyRXJyb3IuU2l6ZVxuICAgICAgfTtcbiAgICAgIHRoaXMuY2xlYW4oKTtcbiAgICAgIHRoaXMuZXJyb3IuZW1pdChjcm9wRXZlbnQgYXMgSW1nQ3JvcHBlckVycm9yRXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlYWRGaWxlID0gbmV3IE9ic2VydmFibGU8UHJvZ3Jlc3NFdmVudD4ob2JzID0+IHtcblxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlcnIgPT4gb2JzLmVycm9yKGVycik7XG4gICAgICByZWFkZXIub25hYm9ydCA9IGVyciA9PiBvYnMuZXJyb3IoZXJyKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXYpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvYnMubmV4dChldik7XG4gICAgICAgIG9icy5jb21wbGV0ZSgpO1xuICAgICAgfSwgMSk7XG5cbiAgICAgIHJldHVybiByZWFkZXIucmVhZEFzRGF0YVVSTChfaW1nLmZpbGVzIVswXSk7XG4gICAgfSlcbiAgICAuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChsb2FkRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZVVybCA9IChsb2FkRXZlbnQudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdCBhcyBzdHJpbmc7XG4gICAgICAgIC8vIFNldCB0eXBlXG4gICAgICAgIGlmICghdGhpcy5jb25maWcudHlwZSkge1xuICAgICAgICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gX2ltZy5maWxlcyFbMF0udHlwZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgbmFtZVxuICAgICAgICB0aGlzLl9maWxlTmFtZSA9IGZpbGVOYW1lO1xuICAgICAgICAvLyBzZXQgZmlsZSBzaXplXG4gICAgICAgIHRoaXMuX3NpemVJbkJ5dGVzID0gX2ltZy5maWxlcyFbMF0uc2l6ZTtcblxuICAgICAgICB0aGlzLnNldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xuXG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5kZWxldGUocmVhZEZpbGUpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckVycm9yRXZlbnQgPSB7XG4gICAgICAgICAgbmFtZTogZmlsZU5hbWUsXG4gICAgICAgICAgc2l6ZTogZmlsZVNpemUsXG4gICAgICAgICAgZXJyb3I6IEltZ0Nyb3BwZXJFcnJvci5PdGhlcixcbiAgICAgICAgICBlcnJvck1zZzogJ1RoZSBGaWxlIGNvdWxkIG5vdCBiZSBsb2FkZWQuJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsZWFuKCk7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdChjcm9wRXZlbnQgYXMgSW1nQ3JvcHBlckVycm9yRXZlbnQpO1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMuZGVsZXRlKHJlYWRGaWxlKTtcbiAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fbGlzdGVuZXJzLmFkZChyZWFkRmlsZSk7XG5cbiAgfVxuXG4gIC8qKiBTZXQgdGhlIHNpemUgb2YgdGhlIGltYWdlLCB0aGUgdmFsdWVzIGNhbiBiZSAwIGJldHdlZW4gMSwgd2hlcmUgMSBpcyB0aGUgb3JpZ2luYWwgc2l6ZSAqL1xuICBzZXRTY2FsZShzaXplPzogbnVtYmVyLCBub0F1dG9Dcm9wPzogYm9vbGVhbikge1xuICAgIC8vIGZpeCBtaW4gc2NhbGVcbiAgICBjb25zdCBuZXdTaXplID0gc2l6ZSEgPj0gdGhpcy5taW5TY2FsZSEgJiYgc2l6ZSEgPD0gMSA/IHNpemUgOiB0aGlzLm1pblNjYWxlO1xuXG4gICAgLy8gY2hlY2tcbiAgICBjb25zdCBjaGFuZ2VkID0gc2l6ZSAhPSBudWxsICYmIHNpemUgIT09IHRoaXMuc2NhbGUgJiYgbmV3U2l6ZSAhPT0gdGhpcy5zY2FsZTtcbiAgICB0aGlzLl9zY2FsZSA9IHNpemU7XG4gICAgaWYgKCFjaGFuZ2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NjYWwzRml4ID0gbmV3U2l6ZTtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luUG9zaXRpb24gPSB7Li4udGhpcy5faW1nUmVjdH07XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICAgIHg6IG9yaWdpblBvc2l0aW9uLngsXG4gICAgICAgICAgeTogb3JpZ2luUG9zaXRpb24ueSxcbiAgICAgICAgICBsZWZ0OiBvcmlnaW5Qb3NpdGlvbi54YyxcbiAgICAgICAgICB0b3A6IG9yaWdpblBvc2l0aW9uLnljXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe30pO1xuICAgICAgICB0aGlzLl9tb3ZlKHtcbiAgICAgICAgICBzcmNFdmVudDoge30sXG4gICAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICAgIGRlbHRhWTogMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubWluU2NhbGUpIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICAuLi50aGlzLl9nZXRDZW50ZXJQb2ludHMoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlQ2hhbmdlLmVtaXQoc2l6ZSk7XG4gICAgaWYgKCFub0F1dG9Dcm9wKSB7XG4gICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2VudGVyUG9pbnRzKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBpbWcgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB4ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSAoaW1nLndpZHRoKSkgLyAyO1xuICAgIGNvbnN0IHkgPSAocm9vdC5vZmZzZXRIZWlnaHQgLSAoaW1nLmhlaWdodCkpIC8gMjtcbiAgICByZXR1cm4ge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFqdXN0YXIgYSBsYSBwYW50YWxsYVxuICAgKi9cbiAgZml0VG9TY3JlZW4oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgbWluID0ge1xuICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyLm9mZnNldEhlaWdodFxuICAgIH07XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9pbWc7XG4gICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gd2lkdGgsXG4gICAgICBoZWlnaHQ6IG1pbi5oZWlnaHQgLyBoZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpO1xuICAgIHRoaXMuc2V0U2NhbGUocmVzdWx0KTtcbiAgfVxuXG4gIGZpdCgpIHtcbiAgICB0aGlzLnNldFNjYWxlKHRoaXMubWluU2NhbGUpO1xuICB9XG5cbiAgX21vdmVTdGFydCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgIHg6IHRoaXMuX2ltZ1JlY3QueCxcbiAgICAgIHk6IHRoaXMuX2ltZ1JlY3QueSxcbiAgICAgIGxlZnQ6IHRoaXMuX2ltZ1JlY3QueGMsXG4gICAgICB0b3A6IHRoaXMuX2ltZ1JlY3QueWNcbiAgICB9O1xuICB9XG4gIF9tb3ZlKGV2ZW50OiB7IHNyY0V2ZW50Pzoge307IGRlbHRhWDogYW55OyBkZWx0YVk6IGFueTsgfSkge1xuICAgIGxldCB4OiBudW1iZXIgfCB1bmRlZmluZWQsIHk6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWwzRml4O1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IHN0YXJ0UCA9IHRoaXMub2Zmc2V0O1xuICAgIGlmICghc2NhbGVGaXggfHwgIXN0YXJ0UCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTWluU2NhbGVZID0gY2FudmFzLmhlaWdodCAqIHNjYWxlRml4IDwgY29uZmlnLmhlaWdodCAmJiBjb25maWcuZXh0cmFab29tT3V0O1xuICAgIGNvbnN0IGlzTWluU2NhbGVYID0gY2FudmFzLndpZHRoICogc2NhbGVGaXggPCBjb25maWcud2lkdGggJiYgY29uZmlnLmV4dHJhWm9vbU91dDtcblxuICAgIGNvbnN0IGxpbWl0TGVmdCA9IChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpID49IHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KTtcbiAgICBjb25zdCBsaW1pdFJpZ2h0ID0gKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCkgKyAoY2FudmFzLndpZHRoKSAtIChzdGFydFAubGVmdCAtIChldmVudC5kZWx0YVggLyBzY2FsZUZpeCkpIDw9IGNvbmZpZy53aWR0aCAvIHNjYWxlRml4O1xuICAgIGNvbnN0IGxpbWl0VG9wID0gKChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KSA+PSAoc3RhcnRQLnRvcCAtIChldmVudC5kZWx0YVkgLyBzY2FsZUZpeCkpKTtcbiAgICBjb25zdCBsaW1pdEJvdHRvbSA9ICgoKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpICsgKGNhbnZhcy5oZWlnaHQpIC0gKHN0YXJ0UC50b3AgLSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpKSkgPD0gKGNvbmZpZy5oZWlnaHQgLyBzY2FsZUZpeCkpO1xuXG4gICAgLy8gTGltaXQgZm9yIGxlZnRcbiAgICBpZiAoKGxpbWl0TGVmdCAmJiAhaXNNaW5TY2FsZVgpIHx8ICghbGltaXRMZWZ0ICYmIGlzTWluU2NhbGVYKSkge1xuICAgICAgeCA9IHN0YXJ0UC54ICsgKHN0YXJ0UC5sZWZ0KSAtIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIH1cblxuICAgIC8vIExpbWl0IGZvciByaWdodFxuICAgIGlmICgobGltaXRSaWdodCAmJiAhaXNNaW5TY2FsZVgpIHx8ICghbGltaXRSaWdodCAmJiBpc01pblNjYWxlWCkpIHtcbiAgICAgIHggPSBzdGFydFAueCArIChzdGFydFAubGVmdCkgKyAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSAtIGNhbnZhcy53aWR0aDtcbiAgICB9XG5cbiAgICAvLyBMaW1pdCBmb3IgdG9wXG4gICAgaWYgKChsaW1pdFRvcCAmJiAhaXNNaW5TY2FsZVkpIHx8ICghbGltaXRUb3AgJiYgaXNNaW5TY2FsZVkpKSB7XG4gICAgICB5ID0gc3RhcnRQLnkgKyAoc3RhcnRQLnRvcCkgLSAoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgfVxuXG4gICAgLy8gTGltaXQgZm9yIGJvdHRvbVxuICAgIGlmICgobGltaXRCb3R0b20gJiYgIWlzTWluU2NhbGVZKSB8fCAoIWxpbWl0Qm90dG9tICYmIGlzTWluU2NhbGVZKSkge1xuICAgICAgeSA9IHN0YXJ0UC55ICsgKHN0YXJ0UC50b3ApICsgKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpIC0gY2FudmFzLmhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHByZXNzIHNoaWZ0S2V5LCBkZXByZWNhdGVkXG4gICAgLy8gaWYgKGV2ZW50LnNyY0V2ZW50ICYmIGV2ZW50LnNyY0V2ZW50LnNoaWZ0S2V5KSB7XG4gICAgLy8gICBpZiAoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA9PT0gTWF0aC5tYXgoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSwgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSkpIHtcbiAgICAvLyAgICAgeSA9IHRoaXMub2Zmc2V0LnRvcDtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHggPSB0aGlzLm9mZnNldC5sZWZ0O1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGlmICh4ID09PSB2b2lkIDApIHsgeCA9IChldmVudC5kZWx0YVggLyBzY2FsZUZpeCkgKyAoc3RhcnRQLngpOyB9XG4gICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSArIChzdGFydFAueSk7IH1cbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgIHgsIHlcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKHg/OiBudW1iZXIsIHk/OiBudW1iZXIpIHtcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgY29uc3QgY3JvcHBpbmdDb250YWluZXJSZWN0ID0gdGhpcy5fYXJlYUNyb3BwZXJSZWN0KCk7XG4gICAgaWYgKHggPT09IHVuZGVmaW5lZCAmJiB5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHggPSB0aGlzLl9pbWdSZWN0LnhjO1xuICAgICAgeSA9IHRoaXMuX2ltZ1JlY3QueWM7XG4gICAgfVxuICAgIHggPSAoY3JvcHBpbmdDb250YWluZXJSZWN0LmxlZnQgLSBob3N0UmVjdC5sZWZ0KSAtICh4ISAtICh0aGlzLmNvbmZpZy53aWR0aCAvIDIpKTtcbiAgICB5ID0gKGNyb3BwaW5nQ29udGFpbmVyUmVjdC50b3AgLSBob3N0UmVjdC50b3ApIC0gKHkhIC0gKHRoaXMuY29uZmlnLmhlaWdodCAvIDIpKTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgIHgsIHlcbiAgICB9KTtcbiAgfVxuXG4gIF9zbGlkZUVuZCgpIHtcbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JvcElmQXV0b0Nyb3AoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmF1dG9Dcm9wKSB7XG4gICAgICB0aGlzLmNyb3AoKTtcbiAgICB9XG4gIH1cblxuICAvKiorICovXG4gIHpvb21JbigpIHtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuX3NjYWwzRml4ISArIC4wNTtcbiAgICBpZiAoc2NhbGUgPiAwICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNjYWxlKDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhbiB0aGUgaW1nIGNyb3BwZXIgKi9cbiAgY2xlYW4oKSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIHRoaXMuX2ltZ1JlY3QgPSB7IH0gYXMgYW55O1xuICAgICAgdGhpcy5vZmZzZXQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkIGFzIGFueTtcbiAgICAgIHRoaXMuX3NjYWwzRml4ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm90YXRpb24gPSAwO1xuICAgICAgdGhpcy5fbWluU2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9pc0xvYWRlZEltZyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0ID0gdW5kZWZpbmVkO1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjYW52YXMud2lkdGggPSAwO1xuICAgICAgY2FudmFzLmhlaWdodCA9IDA7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKi0gKi9cbiAgem9vbU91dCgpIHtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuX3NjYWwzRml4ISAtIC4wNTtcbiAgICBpZiAoc2NhbGUgPiB0aGlzLm1pblNjYWxlISAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXQoKTtcbiAgICB9XG4gIH1cbiAgY2VudGVyKCkge1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgIC4uLnRoaXMuX2dldENlbnRlclBvaW50cygpXG4gICAgfTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKG5ld1N0eWxlcyk7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4vKipcbiAqIExvYWQgSW1hZ2UgZnJvbSBVUkxcbiAqIEBwYXJhbSBzcmMgVVJMXG4gKiBAcGFyYW0gZm4gZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgZW1pdCB0aGUgZXZlbnQgbG9hZGVkXG4gKi9cbiAgc2V0SW1hZ2VVcmwoc3JjOiBzdHJpbmcsIGZuPzogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuY2xlYW4oKTtcbiAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IHNyYztcbiAgICBzcmMgPSBub3JtYWxpemVTVkcoc3JjKTtcblxuICAgIGNvbnN0IGltZyA9IGNyZWF0ZUh0bWxJbWcoc3JjKTtcbiAgICBjb25zdCBmaWxlU2l6ZSA9IHRoaXMuX3NpemVJbkJ5dGVzO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gdGhpcy5fZmlsZU5hbWU7XG4gICAgY29uc3QgZGVmYXVsdFR5cGUgPSB0aGlzLl9kZWZhdWx0VHlwZTtcblxuICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckV2ZW50ID0ge1xuICAgICAgbmFtZTogZmlsZU5hbWUsXG4gICAgICB0eXBlOiBkZWZhdWx0VHlwZSxcbiAgICAgIG9yaWdpbmFsRGF0YVVSTDogc3JjXG4gICAgfTtcblxuICAgIGlmIChmaWxlU2l6ZSkge1xuICAgICAgY3JvcEV2ZW50LnNpemUgPSBmaWxlU2l6ZTtcbiAgICB9XG4gICAgY29uc3QgbG9hZExpc3RlbiA9IG5ldyBPYnNlcnZhYmxlPHZvaWQ+KG9icyA9PiB7XG5cbiAgICAgIGltZy5vbmVycm9yID0gZXJyID0+IG9icy5lcnJvcihlcnIpO1xuICAgICAgaW1nLm9uYWJvcnQgPSBlcnIgPT4gb2JzLmVycm9yKGVycik7XG4gICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBvYnMubmV4dChudWxsISk7XG4gICAgICAgIG9icy5jb21wbGV0ZSgpO1xuICAgICAgfTtcbiAgICB9KVxuICAgIC5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pbWdMb2FkZWQoaW1nKTtcbiAgICAgICAgY3JvcEV2ZW50LndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICBjcm9wRXZlbnQuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgdGhpcy5faXNMb2FkZWRJbWcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICAgIHRoaXMuX25nWm9uZVxuICAgICAgICAgIC5vblN0YWJsZVxuICAgICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG5cbiAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTWluU2NhbGUodGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjYWxlKHRoaXMubWluU2NhbGUsIHRydWUpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgIH0pLCAwKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLmRlbGV0ZShsb2FkTGlzdGVuKTtcbiAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgIChjcm9wRXZlbnQgYXMgSW1nQ3JvcHBlckVycm9yRXZlbnQpLmVycm9yID0gSW1nQ3JvcHBlckVycm9yLlR5cGU7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdChjcm9wRXZlbnQgYXMgSW1nQ3JvcHBlckVycm9yRXZlbnQpO1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMuZGVsZXRlKGxvYWRMaXN0ZW4pO1xuICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9saXN0ZW5lcnMuYWRkKGxvYWRMaXN0ZW4pO1xuXG4gICAgLy8gY2xlYXJcbiAgICB0aGlzLl9zaXplSW5CeXRlcyA9IG51bGw7XG4gICAgdGhpcy5fZmlsZU5hbWUgPSBudWxsO1xuICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcm90YXRlKGRlZ3JlZXM6IG51bWJlcikge1xuICAgIGNvbnN0IHZhbGlkRGVncmVlcyA9IHRoaXMuX3JvdGF0aW9uID0gY29udmVydFRvVmFsaWREZWdyZWVzKGRlZ3JlZXMpO1xuICAgIGNvbnN0IGRlZ3JlZXNSYWQgPSB2YWxpZERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNhbnZhc0Nsb24gPSBjcmVhdGVDYW52YXNJbWcoY2FudmFzKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICAvLyBjbGVhclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzQ2xvbi53aWR0aCwgY2FudmFzQ2xvbi5oZWlnaHQpO1xuXG4gICAgLy8gcm90YXRlIGNhbnZhcyBpbWFnZVxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGUoJHt2YWxpZERlZ3JlZXN9ZGVnKSBzY2FsZSgkezEgLyB0aGlzLl9zY2FsM0ZpeCF9KWA7XG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luID0gYCR7dGhpcy5faW1nUmVjdC54Y31weCAke3RoaXMuX2ltZ1JlY3QueWN9cHggMGA7XG4gICAgY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICBjYW52YXMuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIGNhbnZhcy5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSB0cmFuc2Zvcm1PcmlnaW47XG4gICAgY2FudmFzLnN0eWxlLndlYmtpdFRyYW5zZm9ybU9yaWdpbiA9IHRyYW5zZm9ybU9yaWdpbjtcblxuICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcblxuICAgIC8vIHNhdmUgcmVjdFxuICAgIGNvbnN0IGNhbnZhc1JlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyByZW1vdmUgcm90YXRlIHN0eWxlc1xuICAgIGNhbnZhcy5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAvLyBzZXQgdyAmIGhcbiAgICBjb25zdCB3ID0gY2FudmFzUmVjdC53aWR0aDtcbiAgICBjb25zdCBoID0gY2FudmFzUmVjdC5oZWlnaHQ7XG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IHc7XG4gICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgLy8gY2xlYXJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuXG4gICAgLy8gdHJhbnNsYXRlIGFuZCByb3RhdGVcbiAgICBjdHgudHJhbnNsYXRlKHcgLyAyLCBoIC8gMik7XG4gICAgY3R4LnJvdGF0ZShkZWdyZWVzUmFkKTtcbiAgICBjdHguZHJhd0ltYWdlKGNhbnZhc0Nsb24sIC1jYW52YXNDbG9uLndpZHRoIC8gMiwgLWNhbnZhc0Nsb24uaGVpZ2h0IC8gMik7XG5cbiAgICAvLyBVcGRhdGUgbWluIHNjYWxlXG4gICAgdGhpcy5fdXBkYXRlTWluU2NhbGUoY2FudmFzKTtcblxuICAgIC8vIHNldCB0aGUgbWluaW11bSBzY2FsZSwgb25seSBpZiBuZWNlc3NhcnlcbiAgICBpZiAodGhpcy5zY2FsZSEgPCB0aGlzLm1pblNjYWxlISkge1xuICAgICAgdGhpcy5zZXRTY2FsZSgwLCB0cnVlKTtcbiAgICB9IC8vICAgICAgICAgICAgICAgIOKGkSBubyBBdXRvQ3JvcFxuXG4gICAgY29uc3Qgcm9vdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuXG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4OiAobGVmdCAtIHJvb3RSZWN0LmxlZnQpLFxuICAgICAgeTogKHRvcCAtIHJvb3RSZWN0LnRvcClcbiAgICB9KTtcblxuICAgIC8vIGtlZXAgaW1hZ2UgaW5zaWRlIHRoZSBmcmFtZVxuICAgIGNvbnN0IG9yaWdpblBvc2l0aW9uID0gey4uLnRoaXMuX2ltZ1JlY3R9O1xuICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgeDogb3JpZ2luUG9zaXRpb24ueCxcbiAgICAgIHk6IG9yaWdpblBvc2l0aW9uLnksXG4gICAgICBsZWZ0OiBvcmlnaW5Qb3NpdGlvbi54YyxcbiAgICAgIHRvcDogb3JpZ2luUG9zaXRpb24ueWNcbiAgICB9O1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe30pO1xuICAgIHRoaXMuX21vdmUoe1xuICAgICAgc3JjRXZlbnQ6IHt9LFxuICAgICAgZGVsdGFYOiAwLFxuICAgICAgZGVsdGFZOiAwXG4gICAgfSk7XG5cbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTWluU2NhbGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIHRoaXMuX21pblNjYWxlID0gKGNvbmZpZy5leHRyYVpvb21PdXQgPyBNYXRoLm1pbiA6IE1hdGgubWF4KShcbiAgICAgIGNvbmZpZy53aWR0aCAvIGNhbnZhcy53aWR0aCxcbiAgICAgIGNvbmZpZy5oZWlnaHQgLyBjYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIHByaXZhdGUgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KGltZzogSFRNTENhbnZhc0VsZW1lbnQsIGNvbmZpZywgcXVhbGl0eTogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIC8qKiBDYWxjdWxhdGUgdG90YWwgbnVtYmVyIG9mIHN0ZXBzIG5lZWRlZCAqL1xuICAgIGxldCAgbnVtU3RlcHMgPSBNYXRoLmNlaWwoTWF0aC5sb2coTWF0aC5tYXgoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KSAvIE1hdGgubWF4KGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodCkpIC8gTWF0aC5sb2coMikpIC0gMTtcbiAgICBudW1TdGVwcyA9IG51bVN0ZXBzIDw9IDAgPyAwIDogbnVtU3RlcHM7XG5cbiAgICAvKipBcnJheSBzdGVwcyAqL1xuICAgIGNvbnN0IHN0ZXBzID0gQXJyYXkuZnJvbShBcnJheShudW1TdGVwcykua2V5cygpKTtcblxuICAgIC8qKiBDb250ZXh0ICovXG4gICAgY29uc3Qgb2N0eCA9IGltZy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIGNvbnN0IHEgPSAoKHF1YWxpdHkgKiAxMCkgKiogbnVtU3RlcHMpIC8gKDEwICoqIG51bVN0ZXBzKTtcbiAgICBjb25zdCBmaWxlVHlwZSA9IHRoaXMuX2RlZmF1bHRUeXBlO1xuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cbiAgICBpZiAobnVtU3RlcHMpIHtcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cbiAgICAgIGlmIChmaWxlVHlwZSA9PT0gJ2ltYWdlL3BuZycgfHwgZmlsZVR5cGUgPT09ICdpbWFnZS9zdmcreG1sJykge1xuICAgICAgICBvY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcbiAgICAgIH1cblxuICAgICAgLyoqIFN0ZXBzICovXG4gICAgICAoc3RlcHMgYXMgQXJyYXk8bnVtYmVyPikuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcbiAgICAgICAgICAwLCAwLFxuICAgICAgICAgIHcsIGhcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0ZXAgZmluYWxcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAgICovXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpITtcbiAgICBvYy53aWR0aCA9IGNvbmZpZy53aWR0aDtcbiAgICBvYy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0O1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLFxuICAgICAgMCwgMCxcbiAgICAgIGltZy53aWR0aCAqIHEsIGltZy5oZWlnaHQgKiBxLFxuICAgICAgMCwgMCxcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcbiAgICApO1xuICAgIHJldHVybiBvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIEltYWdlXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICovXG4gIGNyb3AoY29uZmlnPzogSW1nQ3JvcHBlckNvbmZpZyk6IEltZ0Nyb3BwZXJFdmVudCB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnID8gbWVyZ2VEZWVwKHt9LCB0aGlzLmNvbmZpZyB8fCBDT05GSUdfREVGQVVMVCwgY29uZmlnKSA6IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHRoaXMuX2ltZ0Nyb3AobmV3Q29uZmlnKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfaW1nQ3JvcChteUNvbmZpZzogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3QgaW1nUmVjdCA9IHRoaXMuX2ltZ1JlY3QhO1xuICAgIGNvbnN0IHNjYWxlRml4ID0gdGhpcy5fc2NhbDNGaXghO1xuICAgIGNvbnN0IGxlZnQgPSBpbWdSZWN0LnhjIC0gKG15Q29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KTtcbiAgICBjb25zdCB0b3AgPSBpbWdSZWN0LnljIC0gKG15Q29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgd2lkdGg6IG15Q29uZmlnLndpZHRoLFxuICAgICAgaGVpZ2h0OiBteUNvbmZpZy5oZWlnaHRcbiAgICB9O1xuICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSBjb25maWcud2lkdGggLyBzY2FsZUZpeDtcbiAgICBjYW52YXNFbGVtZW50LmhlaWdodCA9IGNvbmZpZy5oZWlnaHQgLyBzY2FsZUZpeDtcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJykhO1xuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgfVxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAtKGxlZnQpLCAtKHRvcCksXG4gICAgKTtcbiAgICBsZXQgcmVzdWx0ID0gY2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBhbnRpQWxpYXNlZFEgPSBteUNvbmZpZy5hbnRpQWxpYXNlZCA/IC41IDogMTtcbiAgICBpZiAobXlDb25maWcub3V0cHV0ID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIGNvbmZpZywgYW50aUFsaWFzZWRRKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBteUNvbmZpZy5vdXRwdXQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIG15Q29uZmlnLm91dHB1dCwgYW50aUFsaWFzZWRRKTtcbiAgICB9XG4gICAgbGV0IHVybDtcbiAgICBpZiAobXlDb25maWcudHlwZSkge1xuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTChgJHtteUNvbmZpZy50eXBlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKHRoaXMuX2RlZmF1bHRUeXBlKTtcbiAgICB9XG4gICAgY29uc3QgY3JvcEV2ZW50OiBJbWdDcm9wcGVyRXZlbnQgPSB7XG4gICAgICBkYXRhVVJMOiB1cmwsXG4gICAgICB0eXBlOiB0aGlzLl9kZWZhdWx0VHlwZSB8fCBteUNvbmZpZy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWUsXG4gICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0LFxuICAgICAgb3JpZ2luYWxEYXRhVVJMOiB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCxcbiAgICAgIHNjYWxlOiB0aGlzLl9zY2FsM0ZpeCxcbiAgICAgIHJvdGF0aW9uOiB0aGlzLl9yb3RhdGlvbixcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IHRoaXMuX2ltZ1JlY3QueGMsXG4gICAgICAgIHk6IHRoaXMuX2ltZ1JlY3QueWNcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5pc0Nyb3BwZWQgPSB0cnVlO1xuICAgIHRoaXMuY3JvcHBlZC5lbWl0KGNyb3BFdmVudCk7XG4gICAgcmV0dXJuIGNyb3BFdmVudDtcbiAgfVxuXG4gIHByaXZhdGUgX3Jvb3RSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfYXJlYUNyb3BwZXJSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cblxufVxuXG4vKipcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyg0NSkgPT09IDkwXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoNDApID09PSAwXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoMTAwKSA9PT0gOTBcbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY29udmVydFRvVmFsaWREZWdyZWVzKG51bTogbnVtYmVyKSB7XG4gIGNvbnN0IHZhbDM2MCA9IGxpbWl0TnVtKG51bSwgMzYwKTtcbiAgY29uc3QgdmFsOTAgPSBsaW1pdE51bSh2YWwzNjAucmVzdWx0LCA5MCk7XG4gIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24obnVtKTtcbiAgaWYgKHZhbDkwLnJlc3VsdCA+PSAoOTAgLyAyKSkge1xuICAgIHJldHVybiA5MCAqICh2YWw5MC5wYXJ0cyArIDEpICogc2lnbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gOTAgKiB2YWw5MC5wYXJ0cyAqIHNpZ247XG4gIH1cbn1cblxuLyoqXG4gKiBkZW1vOlxuICogbGltaXROdW0oNDUwLCAzNjApID09PSA5MFxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsaW1pdE51bShudW06IG51bWJlciwgbnVtMjogbnVtYmVyKSB7XG4gIGNvbnN0IG51bUFicyA9IE1hdGguYWJzKG51bSk7XG4gIGNvbnN0IHBhcnRzID0gTWF0aC5mbG9vcihudW1BYnMgLyBudW0yKTtcbiAgbGV0IHJlc3VsdDogbnVtYmVyO1xuICBpZiAocGFydHMpIHtcbiAgICByZXN1bHQgPSBudW1BYnMgLSAobnVtMiAqIHBhcnRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBudW07XG4gIH1cbiAgaWYgKG51bUFicyAhPT0gbnVtKSB7XG4gICAgcmVzdWx0ICo9IC0xO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzdWx0LFxuICAgIHBhcnRzXG4gIH07XG59XG5cbi8qKlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDYW52YXNJbWcoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQpIHtcblxuICAvLyBjcmVhdGUgYSBuZXcgY2FudmFzXG4gIGNvbnN0IG5ld0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjb250ZXh0ID0gbmV3Q2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gIC8vIHNldCBkaW1lbnNpb25zXG4gIG5ld0NhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgbmV3Q2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG5cbiAgLy8gYXBwbHkgdGhlIG9sZCBjYW52YXMgdG8gdGhlIG5ldyBvbmVcbiAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcblxuICAvLyByZXR1cm4gdGhlIG5ldyBjYW52YXNcbiAgcmV0dXJuIG5ld0NhbnZhcztcbn1cblxuXG5jb25zdCBEQVRBX0lNQUdFX1NWR19QUkVGSVggPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnO1xuXG5mdW5jdGlvbiBub3JtYWxpemVTVkcoZGF0YVVSTDogc3RyaW5nKSB7XG4gIGlmICh3aW5kb3cuYXRvYiAmJiBpc1N2Z0ltYWdlKGRhdGFVUkwpKSB7XG4gICAgY29uc3QgbGVuID0gZGF0YVVSTC5sZW5ndGggLyA1O1xuICAgIGNvbnN0IHRleHQgPSB3aW5kb3cuYXRvYihkYXRhVVJMLnJlcGxhY2UoREFUQV9JTUFHRV9TVkdfUFJFRklYLCAnJykpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIGNvbnN0IHN2ZyA9IHNwYW4ucXVlcnlTZWxlY3Rvcignc3ZnJykhO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGNvbnN0IHdpZHRoID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKHN2Zykud2lkdGghKSB8fCAxO1xuICAgIGNvbnN0IGhlaWdodCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShzdmcpLmhlaWdodCEpIHx8IDE7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCk7XG5cbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke2xlbiAvICh3aWR0aCAvIG1heCl9cHhgKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHtsZW4gLyAoaGVpZ2h0IC8gbWF4KX1weGApO1xuICAgIGNvbnN0IHJlc3VsdCA9IERBVEFfSU1BR0VfU1ZHX1BSRUZJWCArIHdpbmRvdy5idG9hKHNwYW4uaW5uZXJIVE1MKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNwYW4pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGFVUkw7XG59XG5cbmZ1bmN0aW9uIGlzU3ZnSW1hZ2UoZGF0YVVybDogc3RyaW5nKSB7XG4gIHJldHVybiBkYXRhVXJsLnN0YXJ0c1dpdGgoREFUQV9JTUFHRV9TVkdfUFJFRklYKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSHRtbEltZyhzcmM6IHN0cmluZykge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gIGltZy5zcmMgPSBzcmM7XG4gIHJldHVybiBpbWc7XG59XG4iXX0=