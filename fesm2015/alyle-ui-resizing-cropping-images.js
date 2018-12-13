import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2, NgZone, HostListener, NgModule } from '@angular/core';
import { LyTheme2, mergeDeep, LY_COMMON_STYLES, LyHammerGestureConfig } from '@alyle/ui';
import { take } from 'rxjs/operators';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = ({
    root: {
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer: {
        cursor: 'move',
        position: 'absolute',
        top: 0,
        left: 0,
        '& > canvas': {
            // width: '100%',
            // height: '100%',
            pointerEvents: 'none',
        }
    },
    croppingContainer: {
        position: 'absolute',
        pointerEvents: 'none',
        boxShadow: '0 0 0 20000px rgba(0, 0, 0, 0.4)',
        '&:before, &:after': Object.assign({}, LY_COMMON_STYLES.fill, { content: `''` }),
        '&:before': {
            width: 0,
            height: 0,
            margin: 'auto',
            borderRadius: '50%',
            background: '#fff',
            border: 'solid 2px rgb(255, 255, 255)'
        },
        '&:after': {
            border: 'solid 2px rgb(255, 255, 255)'
        }
    },
    croppContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&, & > input': LY_COMMON_STYLES.fill,
        '& *:not(input)': {
            pointerEvents: 'none'
        },
        '& > input': {
            background: 'transparent',
            opacity: 0,
            width: '100%',
            height: '100%'
        }
    }
});
/** @enum {number} */
const ImgResolution = {
    /** Resizing & cropping */
    Default: 0,
    /** Only cropping */
    OriginalImage: 1,
};
ImgResolution[ImgResolution.Default] = 'Default';
ImgResolution[ImgResolution.OriginalImage] = 'OriginalImage';
/** @type {?} */
const CONFIG_DEFAULT = (/** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImgResolution.Default,
    antiAliased: true
}));
class LyResizingCroppingImages {
    /**
     * @param {?} _renderer
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} cd
     * @param {?} _ngZone
     */
    constructor(_renderer, theme, elementRef, cd, _ngZone) {
        this._renderer = _renderer;
        this.theme = theme;
        this.elementRef = elementRef;
        this.cd = cd;
        this._ngZone = _ngZone;
        /**
         * styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this._imgRect = (/** @type {?} */ ({}));
        this.scaleChange = new EventEmitter();
        /**
         * On loaded new image
         */
        this.loaded = new EventEmitter();
        /**
         * On crop new image
         */
        this.cropped = new EventEmitter();
        /**
         * Emit an error when the loaded image is not valid
         */
        this.error = new EventEmitter();
        this._renderer.addClass(elementRef.nativeElement, this.classes.root);
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set config(val) {
        this._config = mergeDeep({}, CONFIG_DEFAULT, val);
    }
    /**
     * Set scale
     * @return {?}
     */
    get scale() {
        return this._scale;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set scale(val) {
        this.setScale(val);
    }
    /**
     * Get min scale
     * @return {?}
     */
    get minScale() {
        return this._minScale;
    }
    /**
     * @param {?} imgElement
     * @return {?}
     */
    _imgLoaded(imgElement) {
        if (imgElement) {
            this._img = imgElement;
            /** @type {?} */
            const canvas = this._imgCanvas.nativeElement;
            canvas.width = imgElement.width;
            canvas.height = imgElement.height;
            /** @type {?} */
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imgElement, 0, 0);
            /**
             * set zoom scale
             * @type {?}
             */
            const minScale = {
                width: this.config.width / canvas.width,
                height: this.config.height / canvas.height
            };
            this._minScale = Math.max(minScale.width, minScale.height);
        }
    }
    /**
     * @param {?} values
     * @return {?}
     */
    _setStylesForContImg(values) {
        /** @type {?} */
        const newStyles = (/** @type {?} */ ({}));
        /** @type {?} */
        const rootRect = this._rootRect();
        if (values.x !== void 0 && values.y !== void 0) {
            /** @type {?} */
            const x = rootRect.width / 2 - (values.x);
            /** @type {?} */
            const y = rootRect.height / 2 - (values.y);
            this._imgRect.x = (values.x);
            this._imgRect.y = (values.y);
            this._imgRect.xc = (x);
            this._imgRect.yc = (y);
        }
        newStyles.transform = `translate3d(${(this._imgRect.x)}px,${(this._imgRect.y)}px, 0)`;
        newStyles.transform += `scale(${this._scal3Fix})`;
        newStyles.transformOrigin = `${this._imgRect.xc}px ${this._imgRect.yc}px 0`;
        for (const key in newStyles) {
            if (newStyles.hasOwnProperty(key)) {
                this._renderer.setStyle(this._imgContainer.nativeElement, key, newStyles[key]);
            }
        }
    }
    /**
     * @return {?}
     */
    resize$() {
        if (this.isLoaded) {
            this.updatePosition();
        }
    }
    /**
     * @param {?} img
     * @return {?}
     */
    selectInputEvent(img) {
        /** @type {?} */
        const _img = (/** @type {?} */ (img.target));
        if (_img.files.length !== 1) {
            return;
        }
        /** @type {?} */
        const fileReader = new FileReader();
        this._fileName = _img.value.replace(/.*(\/|\\)/, '');
        fileReader.addEventListener('loadend', (loadEvent) => {
            /** @type {?} */
            const originalImageUrl = (/** @type {?} */ (((/** @type {?} */ (loadEvent.target))).result));
            this.setImageUrl(originalImageUrl);
            /** Set type */
            if (!this.config.type) {
                this._defaultType = _img.files[0].type;
            }
            this.cd.markForCheck();
        });
        fileReader.readAsDataURL(_img.files[0]);
    }
    /**
     * Set the size of the image, the values can be 0 between 1, where 1 is the original size
     * @param {?} size
     * @param {?=} noAutoCrop
     * @return {?}
     */
    setScale(size, noAutoCrop) {
        // fix min scale
        /** @type {?} */
        const newSize = size >= this.minScale && size <= 1 ? size : this.minScale;
        // check
        /** @type {?} */
        const changed = size != null && size !== this.scale && newSize !== this.scale;
        this._scale = size;
        if (!changed) {
            return;
        }
        this._scal3Fix = newSize;
        if (this.isLoaded) {
            if (changed) {
                /** @type {?} */
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
    /**
     * @return {?}
     */
    _getCenterPoints() {
        /** @type {?} */
        const root = (/** @type {?} */ (this.elementRef.nativeElement));
        /** @type {?} */
        const img = this._imgCanvas.nativeElement;
        /** @type {?} */
        const x = (root.offsetWidth - (img.width)) / 2;
        /** @type {?} */
        const y = (root.offsetHeight - (img.height)) / 2;
        return {
            x,
            y
        };
    }
    /**
     * Ajustar a la pantalla
     * @return {?}
     */
    fitToScreen() {
        /** @type {?} */
        const container = (/** @type {?} */ (this.elementRef.nativeElement));
        /** @type {?} */
        const min = {
            width: container.offsetWidth,
            height: container.offsetHeight
        };
        const { width, height } = this._img;
        /** @type {?} */
        const minScale = {
            width: min.width / width,
            height: min.height / height
        };
        /** @type {?} */
        const result = Math.max(minScale.width, minScale.height);
        this.setScale(result);
    }
    /**
     * @return {?}
     */
    fit() {
        this.setScale(this.minScale);
    }
    /**
     * @return {?}
     */
    _moveStart() {
        this.offset = {
            x: this._imgRect.x,
            y: this._imgRect.y,
            left: this._imgRect.xc,
            top: this._imgRect.yc
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _move(event) {
        /** @type {?} */
        let x;
        /** @type {?} */
        let y;
        /** @type {?} */
        const canvas = this._imgCanvas.nativeElement;
        /** @type {?} */
        const scaleFix = this._scal3Fix;
        /** @type {?} */
        const config = this.config;
        /** @type {?} */
        const startP = this.offset;
        // Limit for left
        if ((config.width / 2 / scaleFix) >= startP.left - (event.deltaX / scaleFix)) {
            x = startP.x + (startP.left) - (config.width / 2 / scaleFix);
        }
        // // Limit for top
        if ((config.height / 2 / scaleFix) >= (startP.top - (event.deltaY / scaleFix))) {
            y = startP.y + (startP.top) - (config.width / 2 / scaleFix);
        }
        // // Limit for right
        if ((config.width / 2 / scaleFix) + (canvas.width) - (startP.left - (event.deltaX / scaleFix)) <= config.width / scaleFix) {
            x = startP.x + (startP.left) + (config.width / 2 / scaleFix) - canvas.width;
        }
        // // Limit for bottom
        if (((config.height / 2 / scaleFix) + (canvas.height) - (startP.top - (event.deltaY / scaleFix))) <= (config.height / scaleFix)) {
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
            x = (event.deltaX / scaleFix) + (this.offset.x);
        }
        if (y === void 0) {
            y = (event.deltaY / scaleFix) + (this.offset.y);
        }
        this._setStylesForContImg({
            x, y
        });
    }
    /**
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    updatePosition(x, y) {
        /** @type {?} */
        const hostRect = this._rootRect();
        /** @type {?} */
        const croppingContainerRect = this._areaCropperRect();
        if (x === void 0 && y === void 0) {
            x = this._imgRect.xc;
            y = this._imgRect.yc;
        }
        x = (croppingContainerRect.x - hostRect.x) - (x - (this.config.width / 2));
        y = (croppingContainerRect.y - hostRect.y) - (y - (this.config.height / 2));
        this._setStylesForContImg({
            x, y
        });
    }
    /**
     * @return {?}
     */
    _slideEnd() {
        this._cropIfAutoCrop();
    }
    /**
     * @return {?}
     */
    _cropIfAutoCrop() {
        if (this.config.autoCrop) {
            this.crop();
        }
    }
    /**
     * +
     * @return {?}
     */
    zoomIn() {
        /** @type {?} */
        const scale = this._scal3Fix + .05;
        if (scale > 0 && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.setScale(1);
        }
    }
    /**
     * Clean the img cropper
     * @return {?}
     */
    clean() {
        if (this.isLoaded) {
            this._imgRect = (/** @type {?} */ ({}));
            this.offset = null;
            this.scale = null;
            this._scal3Fix = null;
            this._rotation = 0;
            this._minScale = null;
            this._defaultType = null;
            this._isLoadedImg = undefined;
            this.isLoaded = null;
            this.isCropped = undefined;
            this._originalImgBase64 = undefined;
            /** @type {?} */
            const canvas = this._imgCanvas.nativeElement;
            canvas.width = 0;
            canvas.height = 0;
            this.cd.markForCheck();
        }
    }
    /**
     * -
     * @return {?}
     */
    zoomOut() {
        /** @type {?} */
        const scale = this._scal3Fix - .05;
        if (scale > this.minScale && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.fit();
        }
    }
    /**
     * @return {?}
     */
    center() {
        /** @type {?} */
        const newStyles = Object.assign({}, this._getCenterPoints());
        this._setStylesForContImg(newStyles);
        this._cropIfAutoCrop();
    }
    /**
     * Load Image from URL
     * @param {?} src URL
     * @param {?=} fn function that will be called before emit the event loaded
     * @return {?}
     */
    setImageUrl(src, fn) {
        this.clean();
        this._originalImgBase64 = src;
        /** @type {?} */
        const img = new Image;
        img.crossOrigin = 'anonymous';
        /** @type {?} */
        const cropEvent = {
            name: this._fileName,
            type: this._defaultType,
            dataURL: null,
            base64: null,
            width: null,
            height: null,
            scale: null,
            originalDataURL: src,
            rotation: null,
            position: null
        };
        img.src = src;
        img.addEventListener('error', () => {
            this.error.emit(cropEvent);
        });
        img.addEventListener('load', () => {
            this._imgLoaded(img);
            cropEvent.width = img.width;
            cropEvent.height = img.height;
            this._isLoadedImg = true;
            this.cd.markForCheck();
            this._ngZone
                .onStable
                .pipe(take(1))
                .subscribe(() => this._ngZone.run(() => {
                this.isLoaded = null;
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
            }));
        });
    }
    /**
     * @param {?} degrees
     * @return {?}
     */
    rotate(degrees) {
        /** @type {?} */
        const validDegrees = this._rotation = convertToValidDegrees(degrees);
        /** @type {?} */
        const degreesRad = validDegrees * Math.PI / 180;
        /** @type {?} */
        const canvas = this._imgCanvas.nativeElement;
        /** @type {?} */
        const canvasClon = createCanvasImg(canvas);
        /** @type {?} */
        const ctx = canvas.getContext('2d');
        // clear
        ctx.clearRect(0, 0, canvasClon.width, canvasClon.height);
        // rotate canvas image
        this._renderer.setStyle(canvas, 'transform', `rotate(${validDegrees}deg) scale(${1 / this._scal3Fix})`);
        this._renderer.setStyle(canvas, 'transformOrigin', `${this._imgRect.xc}px ${this._imgRect.yc}px 0`);
        const { x, y } = (/** @type {?} */ (canvas.getBoundingClientRect()));
        // save rect
        /** @type {?} */
        const canvasRect = canvas.getBoundingClientRect();
        // remove rotate styles
        this._renderer.removeStyle(canvas, 'transform');
        this._renderer.removeStyle(canvas, 'transformOrigin');
        // set w & h
        /** @type {?} */
        const w = canvasRect.width;
        /** @type {?} */
        const h = canvasRect.height;
        ctx.canvas.width = w;
        ctx.canvas.height = h;
        // clear
        ctx.clearRect(0, 0, w, h);
        // translate and rotate
        ctx.translate(w / 2, h / 2);
        ctx.rotate(degreesRad);
        ctx.drawImage(canvasClon, -canvasClon.width / 2, -canvasClon.height / 2);
        /** @type {?} */
        const rootRect = this._rootRect();
        this._setStylesForContImg({
            x: (x - rootRect.x),
            y: (y - rootRect.y)
        });
        this._cropIfAutoCrop();
    }
    /**
     * @param {?} img
     * @param {?} config
     * @param {?} quality
     * @return {?}
     */
    imageSmoothingQuality(img, config, quality) {
        /**
         * Calculate total number of steps needed
         * @type {?}
         */
        let numSteps = Math.ceil(Math.log(Math.max(img.width, img.height) / Math.max(config.width, config.height)) / Math.log(2)) - 1;
        numSteps = numSteps <= 0 ? 0 : numSteps;
        /**
         * Array steps
         * @type {?}
         */
        const steps = Array.from(Array(numSteps).keys());
        /**
         * Context
         * @type {?}
         */
        const octx = img.getContext('2d');
        /** @type {?} */
        const q = (Math.pow((quality * 10), numSteps)) / (Math.pow(10, numSteps));
        /** @type {?} */
        const fileType = this._defaultType;
        /** If Steps => imageSmoothingQuality */
        if (numSteps) {
            /**
             * Set size
             * @type {?}
             */
            const w = img.width * quality;
            /** @type {?} */
            const h = img.height * quality;
            /** Only the new img is shown. */
            if (fileType === 'image/png' || fileType === 'image/svg+xml') {
                octx.globalCompositeOperation = 'copy';
            }
            /** Steps */
            ((/** @type {?} */ (steps))).forEach(() => {
                octx.drawImage(img, 0, 0, w, h);
            });
        }
        /**
         * Step final
         * Resizing & cropping image
         * @type {?}
         */
        const oc = document.createElement('canvas');
        /** @type {?} */
        const ctx = oc.getContext('2d');
        oc.width = config.width;
        oc.height = config.height;
        ctx.drawImage(img, 0, 0, img.width * q, img.height * q, 0, 0, oc.width, oc.height);
        return oc;
    }
    /**
     * Crop Image
     * Resizing & cropping image
     * @param {?=} config
     * @return {?}
     */
    crop(config) {
        /** @type {?} */
        const newConfig = config ? mergeDeep({}, this.config || CONFIG_DEFAULT, config) : this.config;
        /** @type {?} */
        const cropEvent = this._imgCrop(newConfig);
        this.cd.markForCheck();
        return cropEvent;
    }
    /**
     * @ignore
     * @param {?} myConfig
     * @return {?}
     */
    _imgCrop(myConfig) {
        /** @type {?} */
        const canvasElement = document.createElement('canvas');
        /** @type {?} */
        const imgRect = this._imgRect;
        /** @type {?} */
        const scaleFix = this._scal3Fix;
        /** @type {?} */
        const left = imgRect.xc - (myConfig.width / 2 / scaleFix);
        /** @type {?} */
        const top = imgRect.yc - (myConfig.height / 2 / scaleFix);
        /** @type {?} */
        const config = {
            width: myConfig.width,
            height: myConfig.height
        };
        canvasElement.width = config.width / scaleFix;
        canvasElement.height = config.height / scaleFix;
        /** @type {?} */
        const ctx = canvasElement.getContext('2d');
        if (myConfig.fill) {
            ctx.fillStyle = myConfig.fill;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        ctx.drawImage((/** @type {?} */ (this._imgCanvas.nativeElement)), -(left), -(top));
        /** @type {?} */
        let result = canvasElement;
        /** @type {?} */
        const antiAliasedQ = myConfig.antiAliased ? .5 : 1;
        if (myConfig.output === 0) {
            result = this.imageSmoothingQuality(result, config, antiAliasedQ);
        }
        else if (typeof myConfig.output === 'object') {
            result = this.imageSmoothingQuality(result, myConfig.output, antiAliasedQ);
        }
        /** @type {?} */
        let url;
        if (myConfig.type) {
            url = result.toDataURL(`${myConfig.type}`);
        }
        else {
            url = result.toDataURL(this._defaultType);
        }
        /** @type {?} */
        const cropEvent = {
            dataURL: url,
            base64: url,
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
    /**
     * @return {?}
     */
    _rootRect() {
        return (/** @type {?} */ (this.elementRef.nativeElement.getBoundingClientRect()));
    }
    /**
     * @return {?}
     */
    _areaCropperRect() {
        return (/** @type {?} */ (this._croppingContainer.nativeElement.getBoundingClientRect()));
    }
}
LyResizingCroppingImages.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'ly-img-cropper, ly-cropping',
                template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart()\"\n(slide)=\"_move($event)\"\n(slideend)=\"_slideEnd()\">\n  <canvas #_imgCanvas></canvas>\n</div>\n<div #_croppingContainer *ngIf=\"_isLoadedImg; else content\" [className]=\"classes.croppingContainer\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.croppContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
LyResizingCroppingImages.ctorParameters = () => [
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
LyResizingCroppingImages.propDecorators = {
    _imgContainer: [{ type: ViewChild, args: ['_imgContainer',] }],
    _croppingContainer: [{ type: ViewChild, args: ['_croppingContainer',] }],
    _imgCanvas: [{ type: ViewChild, args: ['_imgCanvas',] }],
    scaleChange: [{ type: Output }],
    config: [{ type: Input }],
    scale: [{ type: Input }],
    loaded: [{ type: Output }],
    cropped: [{ type: Output }],
    error: [{ type: Output }],
    resize$: [{ type: HostListener, args: ['window:resize',] }]
};
/**
 * convertToValidDegrees(45) === 90
 * convertToValidDegrees(40) === 0
 * convertToValidDegrees(100) === 90
 * @ignore
 * @param {?} num
 * @return {?}
 */
function convertToValidDegrees(num) {
    /** @type {?} */
    const val360 = limitNum(num, 360);
    /** @type {?} */
    const val90 = limitNum(val360.result, 90);
    /** @type {?} */
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
 * @ignore
 * @param {?} num
 * @param {?} num2
 * @return {?}
 */
function limitNum(num, num2) {
    /** @type {?} */
    const numAbs = Math.abs(num);
    /** @type {?} */
    const parts = Math.floor(numAbs / num2);
    /** @type {?} */
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
 * @ignore
 * @param {?} img
 * @return {?}
 */
function createCanvasImg(img) {
    // create a new canvas
    /** @type {?} */
    const newCanvas = document.createElement('canvas');
    /** @type {?} */
    const context = newCanvas.getContext('2d');
    // set dimensions
    newCanvas.width = img.width;
    newCanvas.height = img.height;
    // apply the old canvas to the new one
    context.drawImage(img, 0, 0);
    // return the new canvas
    return newCanvas;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyResizingCroppingImageModule {
}
LyResizingCroppingImageModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [LyResizingCroppingImages],
                providers: [
                    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }
                ],
                declarations: [LyResizingCroppingImages]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ImgResolution, LyResizingCroppingImages, LyResizingCroppingImageModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBtZXJnZURlZXAsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH0sXG4gIGltZ0NvbnRhaW5lcjoge1xuICAgIGN1cnNvcjogJ21vdmUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgICcmID4gY2FudmFzJzoge1xuICAgICAgLy8gd2lkdGg6ICcxMDAlJyxcbiAgICAgIC8vIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH1cbiAgfSxcbiAgY3JvcHBpbmdDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgYm94U2hhZG93OiAnMCAwIDAgMjAwMDBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgfSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfSxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfVxuICB9LFxuICBjcm9wcENvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICcmLCAmID4gaW5wdXQnOiBMWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgJyYgKjpub3QoaW5wdXQpJzoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcbiAgICAnJiA+IGlucHV0Jzoge1xuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9XG4gIH1cbn0pO1xuLyoqIEltYWdlIENyb3BwZXIgQ29uZmlnICovXG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJDb25maWcge1xuICAvKiogQ3JvcHBlciBhcmVhIHdpZHRoKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqIENyb3BwZXIgYXJlYSBoZWlnaHQqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIEJhY2tncm91bmQgY29sb3IoIGRlZmF1bHQ6IG51bGwpLCBpZiBpcyBudWxsIGluIHBuZyBpcyB0cmFuc3BhcmVudCBidXQgbm90IGluIGpwZyAqL1xuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIFNldCBhbnRpLWFsaWFzZWQoIGRlZmF1bHQ6IHRydWUpICovXG4gIGFudGlBbGlhc2VkPzogYm9vbGVhbjtcbiAgYXV0b0Nyb3A/OiBib29sZWFuO1xuICBvdXRwdXQ/OiBJbWdPdXRwdXQgfCBJbWdSZXNvbHV0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltZ091dHB1dCB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG4vKipcbiAqIERlcHJlY2F0ZWQsIHVzZSBpbnN0ZWFkIEltZ0Nyb3BwZXJDb25maWdcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCB0eXBlIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZyA9IEltZ0Nyb3BwZXJDb25maWc7XG5cbi8qKiBJbWFnZSBvdXRwdXQgKi9cbmV4cG9ydCBlbnVtIEltZ1Jlc29sdXRpb24ge1xuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xuICBEZWZhdWx0LFxuICAvKiogT25seSBjcm9wcGluZyAqL1xuICBPcmlnaW5hbEltYWdlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckV2ZW50IHtcbiAgLyoqIENyb3BwZWQgaW1hZ2UgaW4gYmFzZTY0LCAhZGVwcmVjYXRlZCB1c2UgaW5zdGVhZCBgZGF0YVVSTGAgKi9cbiAgYmFzZTY0OiBzdHJpbmc7XG4gIC8qKiBDcm9wcGVkIGltYWdlIGRhdGEgVVJMICovXG4gIGRhdGFVUkw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvKiogRmlsZXR5cGUgKi9cbiAgdHlwZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIE9yaWdpbmFsIEltYWdlIGRhdGEgVVJMICovXG4gIG9yaWdpbmFsRGF0YVVSTDogc3RyaW5nO1xuICBzY2FsZTogbnVtYmVyO1xuICAvKiogQ3VycmVudCByb3RhdGlvbiBpbiBkZWdyZWVzICovXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIHBvc2l0aW9uOiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gIH07XG59XG5cbmNvbnN0IENPTkZJR19ERUZBVUxUID0gPEltZ0Nyb3BwZXJDb25maWc+e1xuICB3aWR0aDogMjUwLFxuICBoZWlnaHQ6IDIwMCxcbiAgb3V0cHV0OiBJbWdSZXNvbHV0aW9uLkRlZmF1bHQsXG4gIGFudGlBbGlhc2VkOiB0cnVlXG59O1xuXG5pbnRlcmZhY2UgSW1nUmVjdCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB4YzogbnVtYmVyO1xuICB5YzogbnVtYmVyO1xuICAvLyB3OiBudW1iZXI7XG4gIC8vIGg6IG51bWJlcjtcbiAgLyoqIHRyYW5zZm9ybSB3aXRoICovXG4gIHd0OiBudW1iZXI7XG4gIGh0OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbHktaW1nLWNyb3BwZXIsIGx5LWNyb3BwaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICdyZXNpemluZy1jcm9wcGluZy1pbWFnZXMuaHRtbCdcbiB9KVxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgX29yaWdpbmFsSW1nQmFzZTY0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgLyoqIE9yaWdpbmFsIGltYWdlICovXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcbiAgcHJpdmF0ZSBvZmZzZXQ6IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICBsZWZ0OiBudW1iZXJcbiAgICB0b3A6IG51bWJlclxuICB9O1xuICBwcml2YXRlIF9zY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9zY2FsM0ZpeDogbnVtYmVyO1xuICBwcml2YXRlIF9taW5TY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9jb25maWc6IEltZ0Nyb3BwZXJDb25maWc7XG4gIHByaXZhdGUgX2ltZ1JlY3Q6IEltZ1JlY3QgPSB7fSBhcyBhbnk7XG4gIHByaXZhdGUgX3JvdGF0aW9uOiBudW1iZXI7XG5cbiAgQFZpZXdDaGlsZCgnX2ltZ0NvbnRhaW5lcicpIF9pbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19jcm9wcGluZ0NvbnRhaW5lcicpIF9jcm9wcGluZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2ltZ0NhbnZhcycpIF9pbWdDYW52YXM6IEVsZW1lbnRSZWY8SFRNTENhbnZhc0VsZW1lbnQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2NhbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKVxuICBnZXQgY29uZmlnKCk6IEltZ0Nyb3BwZXJDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgc2V0IGNvbmZpZyh2YWw6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBtZXJnZURlZXAoe30sIENPTkZJR19ERUZBVUxULCB2YWwpO1xuICB9XG4gIC8qKiBTZXQgc2NhbGUgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG4gIHNldCBzY2FsZSh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuc2V0U2NhbGUodmFsKTtcbiAgfVxuXG4gIC8qKiBHZXQgbWluIHNjYWxlICovXG4gIGdldCBtaW5TY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW5TY2FsZTtcbiAgfVxuXG4gIC8qKiBXaGVuIGlzIGxvYWRlZCBpbWFnZSAqL1xuICBfaXNMb2FkZWRJbWc6IGJvb2xlYW47XG5cbiAgLyoqIFdoZW4gaXMgbG9hZGVkIGltYWdlICYgcmVhZHkgZm9yIGNyb3AgKi9cbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzQ3JvcHBlZDogYm9vbGVhbjtcblxuICAvKiogT24gbG9hZGVkIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogRW1pdCBhbiBlcnJvciB3aGVuIHRoZSBsb2FkZWQgaW1hZ2UgaXMgbm90IHZhbGlkICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuXG4gIHByaXZhdGUgX2RlZmF1bHRUeXBlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ltZ0xvYWRlZChpbWdFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgaWYgKGltZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2ltZyA9IGltZ0VsZW1lbnQ7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltZ0VsZW1lbnQud2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nRWxlbWVudC5oZWlnaHQ7XG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nRWxlbWVudCwgMCwgMCk7XG4gICAgICAvKiogc2V0IHpvb20gc2NhbGUgKi9cbiAgICAgIGNvbnN0IG1pblNjYWxlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyBjYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0IC8gY2FudmFzLmhlaWdodFxuICAgICAgfTtcbiAgICAgIHRoaXMuX21pblNjYWxlID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U3R5bGVzRm9yQ29udEltZyh2YWx1ZXM6IHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuICB9KSB7XG4gICAgY29uc3QgbmV3U3R5bGVzID0geyB9IGFzIGFueTtcbiAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgaWYgKHZhbHVlcy54ICE9PSB2b2lkIDAgJiYgdmFsdWVzLnkgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3QgeCA9IHJvb3RSZWN0LndpZHRoIC8gMiAtICh2YWx1ZXMueCk7XG4gICAgICBjb25zdCB5ID0gcm9vdFJlY3QuaGVpZ2h0IC8gMiAtICh2YWx1ZXMueSk7XG5cbiAgICAgIHRoaXMuX2ltZ1JlY3QueCA9ICh2YWx1ZXMueCk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnkgPSAodmFsdWVzLnkpO1xuICAgICAgdGhpcy5faW1nUmVjdC54YyA9ICh4KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueWMgPSAoeSk7XG4gICAgfVxuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHsodGhpcy5faW1nUmVjdC54KX1weCwkeyh0aGlzLl9pbWdSZWN0LnkpfXB4LCAwKWA7XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybSArPSBgc2NhbGUoJHt0aGlzLl9zY2FsM0ZpeH0pYDtcbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtT3JpZ2luID0gYCR7dGhpcy5faW1nUmVjdC54Y31weCAke3RoaXMuX2ltZ1JlY3QueWN9cHggMGA7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3U3R5bGVzKSB7XG4gICAgICBpZiAobmV3U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIGtleSwgbmV3U3R5bGVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSByZXNpemUkKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0SW5wdXRFdmVudChpbWc6IEV2ZW50KSB7XG4gICAgY29uc3QgX2ltZyA9IGltZy50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICB0aGlzLl9maWxlTmFtZSA9IF9pbWcudmFsdWUucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpO1xuXG4gICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKGxvYWRFdmVudCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZVVybCA9IChsb2FkRXZlbnQudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdCBhcyBzdHJpbmc7XG4gICAgICB0aGlzLnNldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xuICAgICAgLyoqIFNldCB0eXBlICovXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLnR5cGUpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzWzBdLnR5cGU7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChfaW1nLmZpbGVzWzBdKTtcbiAgfVxuXG4gIC8qKiBTZXQgdGhlIHNpemUgb2YgdGhlIGltYWdlLCB0aGUgdmFsdWVzIGNhbiBiZSAwIGJldHdlZW4gMSwgd2hlcmUgMSBpcyB0aGUgb3JpZ2luYWwgc2l6ZSAqL1xuICBzZXRTY2FsZShzaXplOiBudW1iZXIsIG5vQXV0b0Nyb3A/OiBib29sZWFuKSB7XG4gICAgLy8gZml4IG1pbiBzY2FsZVxuICAgIGNvbnN0IG5ld1NpemUgPSBzaXplID49IHRoaXMubWluU2NhbGUgJiYgc2l6ZSA8PSAxID8gc2l6ZSA6IHRoaXMubWluU2NhbGU7XG5cbiAgICAvLyBjaGVja1xuICAgIGNvbnN0IGNoYW5nZWQgPSBzaXplICE9IG51bGwgJiYgc2l6ZSAhPT0gdGhpcy5zY2FsZSAmJiBuZXdTaXplICE9PSB0aGlzLnNjYWxlO1xuICAgIHRoaXMuX3NjYWxlID0gc2l6ZTtcbiAgICBpZiAoIWNoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2NhbDNGaXggPSBuZXdTaXplO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICBjb25zdCBvcmlnaW5Qb3NpdGlvbiA9IHsuLi50aGlzLl9pbWdSZWN0fTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgICAgeDogb3JpZ2luUG9zaXRpb24ueCxcbiAgICAgICAgICB5OiBvcmlnaW5Qb3NpdGlvbi55LFxuICAgICAgICAgIGxlZnQ6IG9yaWdpblBvc2l0aW9uLnhjLFxuICAgICAgICAgIHRvcDogb3JpZ2luUG9zaXRpb24ueWNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7fSk7XG4gICAgICAgIHRoaXMuX21vdmUoe1xuICAgICAgICAgIHNyY0V2ZW50OiB7fSxcbiAgICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgICAgZGVsdGFZOiAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5taW5TY2FsZSkge1xuICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICAgIC4uLnRoaXMuX2dldENlbnRlclBvaW50cygpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2NhbGVDaGFuZ2UuZW1pdChzaXplKTtcbiAgICBpZiAoIW5vQXV0b0Nyb3ApIHtcbiAgICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIF9nZXRDZW50ZXJQb2ludHMoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGltZyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHggPSAocm9vdC5vZmZzZXRXaWR0aCAtIChpbWcud2lkdGgpKSAvIDI7XG4gICAgY29uc3QgeSA9IChyb290Lm9mZnNldEhlaWdodCAtIChpbWcuaGVpZ2h0KSkgLyAyO1xuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXG4gICAqL1xuICBmaXRUb1NjcmVlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBtaW4gPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2ltZztcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyB3aWR0aCxcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIGhlaWdodFxuICAgIH07XG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCk7XG4gICAgdGhpcy5zZXRTY2FsZShyZXN1bHQpO1xuICB9XG5cbiAgZml0KCkge1xuICAgIHRoaXMuc2V0U2NhbGUodGhpcy5taW5TY2FsZSk7XG4gIH1cblxuICBfbW92ZVN0YXJ0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgeDogdGhpcy5faW1nUmVjdC54LFxuICAgICAgeTogdGhpcy5faW1nUmVjdC55LFxuICAgICAgbGVmdDogdGhpcy5faW1nUmVjdC54YyxcbiAgICAgIHRvcDogdGhpcy5faW1nUmVjdC55Y1xuICAgIH07XG4gIH1cbiAgX21vdmUoZXZlbnQpIHtcbiAgICBsZXQgeCwgeTtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWwzRml4O1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IHN0YXJ0UCA9IHRoaXMub2Zmc2V0O1xuICAgIC8vIExpbWl0IGZvciBsZWZ0XG4gICAgaWYgKChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpID49IHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSkge1xuICAgICAgeCA9IHN0YXJ0UC54ICsgKHN0YXJ0UC5sZWZ0KSAtIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIH1cblxuICAgIC8vIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpID49IChzdGFydFAudG9wIC0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSkpIHtcbiAgICAgIHkgPSBzdGFydFAueSArIChzdGFydFAudG9wKSAtIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIH1cblxuICAgIC8vIC8vIExpbWl0IGZvciByaWdodFxuICAgIGlmICgoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSArIChjYW52YXMud2lkdGgpIC0gKHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSkgPD0gY29uZmlnLndpZHRoIC8gc2NhbGVGaXgpIHtcbiAgICAgIHggPSBzdGFydFAueCArIChzdGFydFAubGVmdCkgKyAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSAtIGNhbnZhcy53aWR0aDtcbiAgICB9XG5cbiAgICAvLyAvLyBMaW1pdCBmb3IgYm90dG9tXG4gICAgaWYgKCgoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCkgKyAoY2FudmFzLmhlaWdodCkgLSAoc3RhcnRQLnRvcCAtIChldmVudC5kZWx0YVkgLyBzY2FsZUZpeCkpKSA8PSAoY29uZmlnLmhlaWdodCAvIHNjYWxlRml4KSkge1xuICAgICAgeSA9IHN0YXJ0UC55ICsgKHN0YXJ0UC50b3ApICsgKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpIC0gY2FudmFzLmhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHByZXNzIHNoaWZ0S2V5LCBkZXByZWNhdGVkXG4gICAgLy8gaWYgKGV2ZW50LnNyY0V2ZW50ICYmIGV2ZW50LnNyY0V2ZW50LnNoaWZ0S2V5KSB7XG4gICAgLy8gICBpZiAoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA9PT0gTWF0aC5tYXgoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSwgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSkpIHtcbiAgICAvLyAgICAgeSA9IHRoaXMub2Zmc2V0LnRvcDtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHggPSB0aGlzLm9mZnNldC5sZWZ0O1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGlmICh4ID09PSB2b2lkIDApIHsgeCA9IChldmVudC5kZWx0YVggLyBzY2FsZUZpeCkgKyAodGhpcy5vZmZzZXQueCk7IH1cbiAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpICsgKHRoaXMub2Zmc2V0LnkpOyB9XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbih4PzogbnVtYmVyLCB5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgIGNvbnN0IGNyb3BwaW5nQ29udGFpbmVyUmVjdCA9IHRoaXMuX2FyZWFDcm9wcGVyUmVjdCgpO1xuICAgIGlmICh4ID09PSB2b2lkIDAgJiYgeSA9PT0gdm9pZCAwKSB7XG4gICAgICB4ID0gdGhpcy5faW1nUmVjdC54YztcbiAgICAgIHkgPSB0aGlzLl9pbWdSZWN0LnljO1xuICAgIH1cbiAgICB4ID0gKGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueCkgLSAoeCAtICh0aGlzLmNvbmZpZy53aWR0aCAvIDIpKTtcbiAgICB5ID0gKGNyb3BwaW5nQ29udGFpbmVyUmVjdC55IC0gaG9zdFJlY3QueSkgLSAoeSAtICh0aGlzLmNvbmZpZy5oZWlnaHQgLyAyKSk7XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICBfc2xpZGVFbmQoKSB7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nyb3BJZkF1dG9Dcm9wKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvQ3JvcCkge1xuICAgICAgdGhpcy5jcm9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqKyAqL1xuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCArIC4wNTtcbiAgICBpZiAoc2NhbGUgPiAwICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNjYWxlKDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhbiB0aGUgaW1nIGNyb3BwZXIgKi9cbiAgY2xlYW4oKSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIHRoaXMuX2ltZ1JlY3QgPSB7IH0gYXMgYW55O1xuICAgICAgdGhpcy5vZmZzZXQgPSBudWxsO1xuICAgICAgdGhpcy5zY2FsZSA9IG51bGw7XG4gICAgICB0aGlzLl9zY2FsM0ZpeCA9IG51bGw7XG4gICAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XG4gICAgICB0aGlzLl9taW5TY2FsZSA9IG51bGw7XG4gICAgICB0aGlzLl9kZWZhdWx0VHlwZSA9IG51bGw7XG4gICAgICB0aGlzLl9pc0xvYWRlZEltZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSBudWxsO1xuICAgICAgdGhpcy5pc0Nyb3BwZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgY2FudmFzLndpZHRoID0gMDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSAwO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiotICovXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCAtIC4wNTtcbiAgICBpZiAoc2NhbGUgPiB0aGlzLm1pblNjYWxlICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpdCgpO1xuICAgIH1cbiAgfVxuICBjZW50ZXIoKSB7XG4gICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgLi4udGhpcy5fZ2V0Q2VudGVyUG9pbnRzKClcbiAgICB9O1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcobmV3U3R5bGVzKTtcbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbi8qKlxuICogTG9hZCBJbWFnZSBmcm9tIFVSTFxuICogQHBhcmFtIHNyYyBVUkxcbiAqIEBwYXJhbSBmbiBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBlbWl0IHRoZSBldmVudCBsb2FkZWRcbiAqL1xuICBzZXRJbWFnZVVybChzcmM6IHN0cmluZywgZm4/OiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5jbGVhbigpO1xuICAgIHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0ID0gc3JjO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZTtcbiAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICBjb25zdCBjcm9wRXZlbnQ6IEltZ0Nyb3BwZXJFdmVudCA9IHtcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgdHlwZTogdGhpcy5fZGVmYXVsdFR5cGUsXG4gICAgICBkYXRhVVJMOiBudWxsLFxuICAgICAgYmFzZTY0OiBudWxsLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBzY2FsZTogbnVsbCxcbiAgICAgIG9yaWdpbmFsRGF0YVVSTDogc3JjLFxuICAgICAgcm90YXRpb246IG51bGwsXG4gICAgICBwb3NpdGlvbjogbnVsbFxuICAgIH07XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICB0aGlzLmVycm9yLmVtaXQoY3JvcEV2ZW50KTtcbiAgICB9KTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuX2ltZ0xvYWRlZChpbWcpO1xuICAgICAgY3JvcEV2ZW50LndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgY3JvcEV2ZW50LmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICB0aGlzLl9pc0xvYWRlZEltZyA9IHRydWU7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5fbmdab25lXG4gICAgICAgICAgLm9uU3RhYmxlXG4gICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSh0aGlzLm1pblNjYWxlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICByb3RhdGUoZGVncmVlczogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsaWREZWdyZWVzID0gdGhpcy5fcm90YXRpb24gPSBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoZGVncmVlcyk7XG4gICAgY29uc3QgZGVncmVlc1JhZCA9IHZhbGlkRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY2FudmFzQ2xvbiA9IGNyZWF0ZUNhbnZhc0ltZyhjYW52YXMpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgLy8gY2xlYXJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0Nsb24ud2lkdGgsIGNhbnZhc0Nsb24uaGVpZ2h0KTtcblxuICAgIC8vIHJvdGF0ZSBjYW52YXMgaW1hZ2VcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjYW52YXMsICd0cmFuc2Zvcm0nLCBgcm90YXRlKCR7dmFsaWREZWdyZWVzfWRlZykgc2NhbGUoJHsxIC8gdGhpcy5fc2NhbDNGaXh9KWApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybU9yaWdpbicsIGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgKTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuXG4gICAgLy8gc2F2ZSByZWN0XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIHJlbW92ZSByb3RhdGUgc3R5bGVzXG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtT3JpZ2luJyk7XG5cbiAgICAvLyBzZXQgdyAmIGhcblxuICAgIGNvbnN0IHcgPSBjYW52YXNSZWN0LndpZHRoO1xuICAgIGNvbnN0IGggPSBjYW52YXNSZWN0LmhlaWdodDtcblxuICAgIGN0eC5jYW52YXMud2lkdGggPSB3O1xuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgIC8vIHRyYW5zbGF0ZSBhbmQgcm90YXRlXG4gICAgY3R4LnRyYW5zbGF0ZSh3IC8gMiwgaCAvIDIpO1xuICAgIGN0eC5yb3RhdGUoZGVncmVlc1JhZCk7XG4gICAgY3R4LmRyYXdJbWFnZShjYW52YXNDbG9uLCAtY2FudmFzQ2xvbi53aWR0aCAvIDIsIC1jYW52YXNDbG9uLmhlaWdodCAvIDIpO1xuICAgIGNvbnN0IHJvb3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcblxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeDogKHggLSByb290UmVjdC54KSxcbiAgICAgIHk6ICh5IC0gcm9vdFJlY3QueSlcbiAgICB9KTtcblxuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIGltYWdlU21vb3RoaW5nUXVhbGl0eShpbWc6IEhUTUxDYW52YXNFbGVtZW50LCBjb25maWcsIHF1YWxpdHk6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICAvKiogQ2FsY3VsYXRlIHRvdGFsIG51bWJlciBvZiBzdGVwcyBuZWVkZWQgKi9cbiAgICBsZXQgIG51bVN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKE1hdGgubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCkgLyBNYXRoLm1heChjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpKSAvIE1hdGgubG9nKDIpKSAtIDE7XG4gICAgbnVtU3RlcHMgPSBudW1TdGVwcyA8PSAwID8gMCA6IG51bVN0ZXBzO1xuXG4gICAgLyoqQXJyYXkgc3RlcHMgKi9cbiAgICBjb25zdCBzdGVwcyA9IEFycmF5LmZyb20oQXJyYXkobnVtU3RlcHMpLmtleXMoKSk7XG5cbiAgICAvKiogQ29udGV4dCAqL1xuICAgIGNvbnN0IG9jdHggPSBpbWcuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHEgPSAoKHF1YWxpdHkgKiAxMCkgKiogbnVtU3RlcHMpIC8gKDEwICoqIG51bVN0ZXBzKTtcbiAgICBjb25zdCBmaWxlVHlwZSA9IHRoaXMuX2RlZmF1bHRUeXBlO1xuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cbiAgICBpZiAobnVtU3RlcHMpIHtcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cbiAgICAgIGlmIChmaWxlVHlwZSA9PT0gJ2ltYWdlL3BuZycgfHwgZmlsZVR5cGUgPT09ICdpbWFnZS9zdmcreG1sJykge1xuICAgICAgICBvY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcbiAgICAgIH1cblxuICAgICAgLyoqIFN0ZXBzICovXG4gICAgICAoc3RlcHMgYXMgQXJyYXk8bnVtYmVyPikuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcbiAgICAgICAgICAwLCAwLFxuICAgICAgICAgIHcsIGhcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0ZXAgZmluYWxcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAgICovXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAwLCAwLFxuICAgICAgaW1nLndpZHRoICogcSwgaW1nLmhlaWdodCAqIHEsXG4gICAgICAwLCAwLFxuICAgICAgb2Mud2lkdGgsIG9jLmhlaWdodFxuICAgICk7XG4gICAgcmV0dXJuIG9jO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgSW1hZ2VcbiAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgKi9cbiAgY3JvcChjb25maWc/OiBJbWdDcm9wcGVyQ29uZmlnKTogSW1nQ3JvcHBlckV2ZW50IHtcbiAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWcgPyBtZXJnZURlZXAoe30sIHRoaXMuY29uZmlnIHx8IENPTkZJR19ERUZBVUxULCBjb25maWcpIDogdGhpcy5jb25maWc7XG4gICAgY29uc3QgY3JvcEV2ZW50ID0gdGhpcy5faW1nQ3JvcChuZXdDb25maWcpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIGNyb3BFdmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfaW1nQ3JvcChteUNvbmZpZzogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3QgaW1nUmVjdCA9IHRoaXMuX2ltZ1JlY3Q7XG4gICAgY29uc3Qgc2NhbGVGaXggPSB0aGlzLl9zY2FsM0ZpeDtcbiAgICBjb25zdCBsZWZ0ID0gaW1nUmVjdC54YyAtIChteUNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgY29uc3QgdG9wID0gaW1nUmVjdC55YyAtIChteUNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XG4gICAgfTtcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gc2NhbGVGaXg7XG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gc2NhbGVGaXg7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgfVxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQgYXMgYW55LFxuICAgICAgLShsZWZ0KSwgLSh0b3ApLFxuICAgICk7XG4gICAgbGV0IHJlc3VsdCA9IGNhbnZhc0VsZW1lbnQ7XG4gICAgY29uc3QgYW50aUFsaWFzZWRRID0gbXlDb25maWcuYW50aUFsaWFzZWQgPyAuNSA6IDE7XG4gICAgaWYgKG15Q29uZmlnLm91dHB1dCA9PT0gMCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBjb25maWcsIGFudGlBbGlhc2VkUSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXlDb25maWcub3V0cHV0ID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBteUNvbmZpZy5vdXRwdXQsIGFudGlBbGlhc2VkUSk7XG4gICAgfVxuICAgIGxldCB1cmw7XG4gICAgaWYgKG15Q29uZmlnLnR5cGUpIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwoYCR7bXlDb25maWcudHlwZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTCh0aGlzLl9kZWZhdWx0VHlwZSk7XG4gICAgfVxuICAgIGNvbnN0IGNyb3BFdmVudCA9IHtcbiAgICAgIGRhdGFVUkw6IHVybCxcbiAgICAgIGJhc2U2NDogdXJsLFxuICAgICAgdHlwZTogdGhpcy5fZGVmYXVsdFR5cGUgfHwgbXlDb25maWcudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodCxcbiAgICAgIG9yaWdpbmFsRGF0YVVSTDogdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQsXG4gICAgICBzY2FsZTogdGhpcy5fc2NhbDNGaXgsXG4gICAgICByb3RhdGlvbjogdGhpcy5fcm90YXRpb24sXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiB0aGlzLl9pbWdSZWN0LnhjLFxuICAgICAgICB5OiB0aGlzLl9pbWdSZWN0LnljXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfcm9vdFJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cblxuICBwcml2YXRlIF9hcmVhQ3JvcHBlclJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2Nyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgfVxuXG59XG5cbi8qKlxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDQ1KSA9PT0gOTBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyg0MCkgPT09IDBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcygxMDApID09PSA5MFxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMobnVtOiBudW1iZXIpIHtcbiAgY29uc3QgdmFsMzYwID0gbGltaXROdW0obnVtLCAzNjApO1xuICBjb25zdCB2YWw5MCA9IGxpbWl0TnVtKHZhbDM2MC5yZXN1bHQsIDkwKTtcbiAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbihudW0pO1xuICBpZiAodmFsOTAucmVzdWx0ID49ICg5MCAvIDIpKSB7XG4gICAgcmV0dXJuIDkwICogKHZhbDkwLnBhcnRzICsgMSkgKiBzaWduO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA5MCAqIHZhbDkwLnBhcnRzICogc2lnbjtcbiAgfVxufVxuXG4vKipcbiAqIGRlbW86XG4gKiBsaW1pdE51bSg0NTAsIDM2MCkgPT09IDkwXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGxpbWl0TnVtKG51bTogbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcbiAgY29uc3QgbnVtQWJzID0gTWF0aC5hYnMobnVtKTtcbiAgY29uc3QgcGFydHMgPSBNYXRoLmZsb29yKG51bUFicyAvIG51bTIpO1xuICBsZXQgcmVzdWx0OiBudW1iZXI7XG4gIGlmIChwYXJ0cykge1xuICAgIHJlc3VsdCA9IG51bUFicyAtIChudW0yICogcGFydHMpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IG51bTtcbiAgfVxuICBpZiAobnVtQWJzICE9PSBudW0pIHtcbiAgICByZXN1bHQgKj0gLTE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXN1bHQsXG4gICAgcGFydHNcbiAgfTtcbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhbnZhc0ltZyhpbWc6IEhUTUxDYW52YXNFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudCkge1xuXG4gIC8vIGNyZWF0ZSBhIG5ldyBjYW52YXNcbiAgY29uc3QgbmV3Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAvLyBzZXQgZGltZW5zaW9uc1xuICBuZXdDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gIG5ld0NhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuXG4gIC8vIGFwcGx5IHRoZSBvbGQgY2FudmFzIHRvIHRoZSBuZXcgb25lXG4gIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG5cbiAgLy8gcmV0dXJuIHRoZSBuZXcgY2FudmFzXG4gIHJldHVybiBuZXdDYW52YXM7XG59XG4iLCJpbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMeUhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5pbXBvcnQgeyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMgfSBmcm9tICcuL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBMeUhhbW1lckdlc3R1cmVDb25maWcgfVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNdXG59KVxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO01BZ0JNLGNBQWMsR0FBRyxDQUFDLENBQUM7O01BRW5CLE1BQU0sSUFBSTtJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFDUCxZQUFZLEVBQUU7OztZQUdaLGFBQWEsRUFBRSxNQUFNO1NBQ3RCO0tBQ0Y7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R0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsRUFBRTtZQUM1RSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7U0FDOUQ7O1FBR0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFFBQVEsTUFBTSxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUM5RSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7U0FDN0Q7O1FBR0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7WUFDekgsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDN0U7O1FBR0QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxF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