import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2, NgZone, HostListener, NgModule } from '@angular/core';
import { LyTheme2, mergeDeep, LY_COMMON_STYLES, LyHammerGestureConfig } from '@alyle/ui';
import { take } from 'rxjs/operators';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            width: '100%',
            height: '100%',
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
var ImgResolution = {
    /** Resizing & cropping */
    Default: 0,
    /** Only cropping */
    OriginalImage: 1,
};
ImgResolution[ImgResolution.Default] = 'Default';
ImgResolution[ImgResolution.OriginalImage] = 'OriginalImage';
/** @type {?} */
const CONFIG_DEFAULT = /** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImgResolution.Default,
    antiAliased: true
});
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
        this._imgRect = /** @type {?} */ ({});
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
            canvas.height = imgElement.height;
            canvas.width = imgElement.width;
            /** @type {?} */
            const ctx = canvas.getContext('2d');
            ctx.drawImage(imgElement, 0, 0);
            /** *
             * set zoom scale
              @type {?} */
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
        const newStyles = /** @type {?} */ ({
            width: `${fix(values.width)}px`,
            height: `${fix(values.height)}px`
        });
        if (values.x !== void 0 && values.y !== void 0) {
            /** @type {?} */
            const rootRect = this._rootRect();
            /** @type {?} */
            const imgRect = this._imgContainerRect();
            /** @type {?} */
            const x = rootRect.width / 2 - (values.x);
            /** @type {?} */
            const y = rootRect.height / 2 - (values.y);
            newStyles.transform = `translate3d(${fix(values.x)}px,${fix(values.y)}px, 0)`;
            this._imgRect.x = fix(values.x);
            this._imgRect.y = fix(values.y);
            this._imgRect.xc = fix(x);
            this._imgRect.yc = fix(y);
            this._imgRect.wt = fix(imgRect.width);
            this._imgRect.ht = fix(imgRect.height);
        }
        this._imgRect.w = fix(values.width);
        this._imgRect.h = fix(values.height);
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
        const _img = /** @type {?} */ (img.target);
        if (_img.files.length !== 1) {
            return;
        }
        /** @type {?} */
        const fileReader = new FileReader();
        this._fileName = _img.value.replace(/.*(\/|\\)/, '');
        /** Set type */
        this._defaultType = null;
        if (!this.config.type) {
            this._defaultType = _img.files[0].type;
        }
        fileReader.addEventListener('loadend', (loadEvent) => {
            /** @type {?} */
            const originalImageUrl = /** @type {?} */ ((/** @type {?} */ (loadEvent.target)).result);
            this.setImageUrl(originalImageUrl);
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
        size = size > this.minScale && size <= 1 ? size : this.minScale;
        /** @type {?} */
        const changed = size === this.scale;
        this._scale = size;
        if (changed) {
            return;
        }
        size = this._scal3Fix = fix(size, 4);
        /** @type {?} */
        const initialImg = this._imgCanvas.nativeElement;
        /** @type {?} */
        const width = (initialImg.width * size);
        /** @type {?} */
        const height = (initialImg.height * size);
        /** @type {?} */
        const hostRect = this._rootRect();
        if (!this.isLoaded) {
            this._setStylesForContImg(Object.assign({ width,
                height }, this._getCenterPoints()));
        }
        else {
            /** @type {?} */
            const originPosition = Object.assign({}, this._imgRect);
            this.offset = {
                x: (hostRect.width / 2) - (originPosition.x),
                y: (hostRect.height / 2) - (originPosition.y),
                left: originPosition.x,
                top: originPosition.y
            };
            this._setStylesForContImg({
                width,
                height,
            });
            this._move({
                srcEvent: {},
                center: {
                    x: (hostRect.width / 2 - (this.offset.x * (width / originPosition.w))) + hostRect.x + this.offset.x,
                    y: (hostRect.height / 2 - (this.offset.y * (height / originPosition.h))) + hostRect.y + this.offset.y
                }
            });
        }
        this.scaleChange.emit(this._scale);
        if (!noAutoCrop) {
            this._cropIfAutoCrop();
        }
    }
    /**
     * @return {?}
     */
    _getCenterPoints() {
        /** @type {?} */
        const root = /** @type {?} */ (this.elementRef.nativeElement);
        /** @type {?} */
        const img = this._imgCanvas.nativeElement;
        /** @type {?} */
        const size = this._scal3Fix;
        /** @type {?} */
        const x = (root.offsetWidth - (img.width * size)) / 2;
        /** @type {?} */
        const y = (root.offsetHeight - (img.height * size)) / 2;
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
        const container = /** @type {?} */ (this.elementRef.nativeElement);
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
        this.setScale(0);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _moveStart(event) {
        /** @type {?} */
        const hostRect = this._rootRect();
        /** @type {?} */
        const imgRect = this._imgRect;
        this.offset = {
            x: event.center.x - hostRect.x - imgRect.x,
            y: event.center.y - hostRect.y - imgRect.y,
            left: imgRect.x,
            top: imgRect.y
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
        const hostRect = this._rootRect();
        /** @type {?} */
        const imgContainerRect = this._imgRect;
        /** @type {?} */
        const croppingContainerRect = this._areaCropperRect();
        // Limit for left
        if (event.center.x - this.offset.x > croppingContainerRect.x) {
            x = croppingContainerRect.x - hostRect.x;
        }
        // Limit for top
        if (event.center.y - this.offset.y > croppingContainerRect.y) {
            y = croppingContainerRect.y - hostRect.y;
        }
        // Limit for right
        if (event.center.x - this.offset.x + imgContainerRect.w < croppingContainerRect.x + croppingContainerRect.width) {
            x = croppingContainerRect.x - hostRect.x - imgContainerRect.w + croppingContainerRect.width;
        }
        // Limit for bottom
        if (event.center.y - this.offset.y + imgContainerRect.h < croppingContainerRect.y + croppingContainerRect.height) {
            y = croppingContainerRect.y - hostRect.y - imgContainerRect.h + croppingContainerRect.height;
        }
        // When press shiftKey
        if (event.srcEvent && event.srcEvent.shiftKey) {
            if (Math.abs(event.deltaX) === Math.max(Math.abs(event.deltaX), Math.abs(event.deltaY))) {
                y = this.offset.top;
            }
            else {
                x = this.offset.left;
            }
        }
        if (x === void 0) {
            x = event.center.x - hostRect.x - (this.offset.x);
        }
        if (y === void 0) {
            y = event.center.y - hostRect.y - (this.offset.y);
        }
        this._setStylesForContImg({
            width: this._imgContainer.nativeElement.offsetWidth,
            height: this._imgContainer.nativeElement.offsetHeight,
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
            width: this._imgContainer.nativeElement.offsetWidth,
            height: this._imgContainer.nativeElement.offsetHeight,
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
        const scale = fix(this._scal3Fix + .05, 4);
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
        this._defaultType = null;
        this._isLoadedImg = false;
        this.isLoaded = false;
        this.isCropped = false;
        this._originalImgBase64 = null;
        /** @type {?} */
        const canvas = this._imgCanvas.nativeElement;
        canvas.width = 0;
        canvas.height = 0;
        this.cd.markForCheck();
    }
    /**
     * -
     * @return {?}
     */
    zoomOut() {
        /** @type {?} */
        const scale = fix(this._scal3Fix - .05, 4);
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
        const imgRect = this._imgRect;
        /** @type {?} */
        const newStyles = Object.assign({ width: imgRect.w, height: imgRect.h }, this._getCenterPoints());
        this._setStylesForContImg(newStyles);
        this._cropIfAutoCrop();
    }
    /**
     * Set Img
     * @param {?} src
     * @return {?}
     */
    setImageUrl(src) {
        this._originalImgBase64 = src;
        /** @type {?} */
        const img = new Image;
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
            this.clean();
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
                this.isLoaded = false;
                this.setScale(0, true);
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
        this._renderer.setStyle(canvas, 'transform', `rotate(${validDegrees}deg)`);
        this._renderer.setStyle(canvas, 'transformOrigin', `${this._imgRect.xc}px ${this._imgRect.yc}px 0`);
        const { x, y } = /** @type {?} */ (canvas.getBoundingClientRect());
        this._renderer.setStyle(canvas, 'width', `initial`);
        this._renderer.setStyle(canvas, 'height', `initial`);
        /** @type {?} */
        const canvasRect = canvas.getBoundingClientRect();
        // remove rotate styles
        this._renderer.removeStyle(canvas, 'transform');
        this._renderer.removeStyle(canvas, 'transformOrigin');
        this._renderer.removeStyle(canvas, 'width');
        this._renderer.removeStyle(canvas, 'height');
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
            width: w * this._scal3Fix,
            height: h * this._scal3Fix,
            x: x - rootRect.x,
            y: y - rootRect.y
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
        /** *
         * Calculate total number of steps needed
          @type {?} */
        let numSteps = Math.ceil(Math.log(Math.max(img.width, img.height) / Math.max(config.height, config.width)) / Math.log(2)) - 1;
        numSteps = numSteps <= 0 ? 0 : numSteps;
        /** *
         * Array steps
          @type {?} */
        const steps = Array.from(Array(numSteps).keys());
        /** *
         * Context
          @type {?} */
        const octx = img.getContext('2d');
        /** @type {?} */
        const q = (Math.pow((quality * 10), numSteps)) / (Math.pow(10, numSteps));
        /** If Steps => imageSmoothingQuality */
        if (numSteps) {
            /** *
             * Set size
              @type {?} */
            const w = img.width * quality;
            /** @type {?} */
            const h = img.height * quality;
            /** Only the new img is shown. */
            octx.globalCompositeOperation = 'copy';
            /** Steps */
            (/** @type {?} */ (steps)).forEach(() => {
                octx.drawImage(img, 0, 0, w, h);
            });
        }
        /** *
         * Step final
         * Resizing & cropping image
          @type {?} */
        const oc = document.createElement('canvas');
        /** *
         * Step final
         * Resizing & cropping image
          @type {?} */
        const ctx = oc.getContext('2d');
        oc.width = config.width;
        oc.height = config.height;
        ctx.drawImage(img, 0, 0, img.width * (q), img.height * (q), 0, 0, oc.width, oc.height);
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
        const left = imgRect.xc - myConfig.width / 2;
        /** @type {?} */
        const top = imgRect.yc - myConfig.height / 2;
        /** @type {?} */
        const scaleFix = this._scal3Fix;
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
        ctx.drawImage(/** @type {?} */ (this._imgCanvas.nativeElement), -(left / scaleFix), -(top / scaleFix));
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
            url = result.toDataURL(`image/${myConfig.type}`);
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
            scale: this.scale,
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
        return /** @type {?} */ (this.elementRef.nativeElement.getBoundingClientRect());
    }
    /**
     * @return {?}
     */
    _imgContainerRect() {
        return /** @type {?} */ (this._imgContainer.nativeElement.getBoundingClientRect());
    }
    /**
     * @return {?}
     */
    _areaCropperRect() {
        return /** @type {?} */ (this._croppingContainer.nativeElement.getBoundingClientRect());
    }
}
LyResizingCroppingImages.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'ly-img-cropper, ly-cropping',
                template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart($event)\"\n(slide)=\"_move($event)\"\n(slideend)=\"_slideEnd()\">\n  <canvas #_imgCanvas></canvas>\n</div>\n<div #_croppingContainer *ngIf=\"_isLoadedImg; else content\" [className]=\"classes.croppingContainer\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.croppContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
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
 * @param {?} v
 * @param {?=} decimalPoints
 * @return {?}
 */
function fix(v, decimalPoints) {
    return +parseFloat(v).toFixed(decimalPoints || 0);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ImgResolution, LyResizingCroppingImages, LyResizingCroppingImageModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBtZXJnZURlZXAsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH0sXG4gIGltZ0NvbnRhaW5lcjoge1xuICAgIGN1cnNvcjogJ21vdmUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgICcmID4gY2FudmFzJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH1cbiAgfSxcbiAgY3JvcHBpbmdDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgYm94U2hhZG93OiAnMCAwIDAgMjAwMDBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgfSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfSxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfVxuICB9LFxuICBjcm9wcENvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICcmLCAmID4gaW5wdXQnOiBMWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgJyYgKjpub3QoaW5wdXQpJzoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcbiAgICAnJiA+IGlucHV0Jzoge1xuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9XG4gIH1cbn0pO1xuLyoqIEltYWdlIENyb3BwZXIgQ29uZmlnICovXG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJDb25maWcge1xuICAvKiogQ3JvcHBlciBhcmVhIHdpZHRoKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqIENyb3BwZXIgYXJlYSBoZWlnaHQqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIEJhY2tncm91bmQgY29sb3IoIGRlZmF1bHQ6IG51bGwpLCBpZiBpcyBudWxsIGluIHBuZyBpcyB0cmFuc3BhcmVudCBidXQgbm90IGluIGpwZyAqL1xuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIFNldCBhbnRpLWFsaWFzZWQoIGRlZmF1bHQ6IHRydWUpICovXG4gIGFudGlBbGlhc2VkPzogYm9vbGVhbjtcbiAgYXV0b0Nyb3A/OiBib29sZWFuO1xuICBvdXRwdXQ/OiB7XG4gICAgd2lkdGg6IG51bWJlclxuICAgIGhlaWdodDogbnVtYmVyXG4gIH0gfCBJbWdSZXNvbHV0aW9uO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCB0eXBlIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZyA9IEltZ0Nyb3BwZXJDb25maWc7XG5cbi8qKiBJbWFnZSBvdXRwdXQgKi9cbmV4cG9ydCBlbnVtIEltZ1Jlc29sdXRpb24ge1xuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xuICBEZWZhdWx0LFxuICAvKiogT25seSBjcm9wcGluZyAqL1xuICBPcmlnaW5hbEltYWdlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckV2ZW50IHtcbiAgLyoqIENyb3BwZWQgaW1hZ2UgaW4gYmFzZTY0LCAhZGVwcmVjYXRlZCB1c2UgaW5zdGVhZCBgZGF0YVVSTGAgKi9cbiAgYmFzZTY0OiBzdHJpbmc7XG4gIC8qKiBDcm9wcGVkIGltYWdlIGRhdGEgVVJMICovXG4gIGRhdGFVUkw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvKiogRmlsZXR5cGUgKi9cbiAgdHlwZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIE9yaWdpbmFsIEltYWdlIGRhdGEgVVJMICovXG4gIG9yaWdpbmFsRGF0YVVSTDogc3RyaW5nO1xuICBzY2FsZTogbnVtYmVyO1xuICAvKiogQ3VycmVudCByb3RhdGlvbiBpbiBkZWdyZWVzICovXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIHBvc2l0aW9uOiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gIH07XG59XG5cbmNvbnN0IENPTkZJR19ERUZBVUxUID0gPEltZ0Nyb3BwZXJDb25maWc+e1xuICB3aWR0aDogMjUwLFxuICBoZWlnaHQ6IDIwMCxcbiAgb3V0cHV0OiBJbWdSZXNvbHV0aW9uLkRlZmF1bHQsXG4gIGFudGlBbGlhc2VkOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ2x5LWltZy1jcm9wcGVyLCBseS1jcm9wcGluZycsXG4gIHRlbXBsYXRlVXJsOiAncmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmh0bWwnXG4gfSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIF9vcmlnaW5hbEltZ0Jhc2U2NDogc3RyaW5nO1xuICBwcml2YXRlIF9maWxlTmFtZTogc3RyaW5nO1xuXG4gIC8qKiBPcmlnaW5hbCBpbWFnZSAqL1xuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHByaXZhdGUgb2Zmc2V0OiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgbGVmdDogbnVtYmVyXG4gICAgdG9wOiBudW1iZXJcbiAgfTtcbiAgcHJpdmF0ZSBfc2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfc2NhbDNGaXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluU2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnO1xuICBwcml2YXRlIF9pbWdSZWN0OiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgeGM6IG51bWJlclxuICAgIHljOiBudW1iZXJcbiAgICB3OiBudW1iZXJcbiAgICBoOiBudW1iZXJcbiAgICAvKiogdHJhbnNmb3JtIHdpdGggKi9cbiAgICB3dDogbnVtYmVyXG4gICAgaHQ6IG51bWJlclxuICB9ID0ge30gYXMgYW55O1xuICBwcml2YXRlIF9yb3RhdGlvbjogbnVtYmVyO1xuXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInKSBfaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfY3JvcHBpbmdDb250YWluZXInKSBfY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19pbWdDYW52YXMnKSBfaW1nQ2FudmFzOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNjYWxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbmZpZygpOiBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gbWVyZ2VEZWVwKHt9LCBDT05GSUdfREVGQVVMVCwgdmFsKTtcbiAgfVxuICAvKiogU2V0IHNjYWxlICovXG4gIEBJbnB1dCgpXG4gIGdldCBzY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY2FsZTtcbiAgfVxuICBzZXQgc2NhbGUodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFNjYWxlKHZhbCk7XG4gIH1cblxuICAvKiogR2V0IG1pbiBzY2FsZSAqL1xuICBnZXQgbWluU2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gIH1cblxuICAvKiogV2hlbiBpcyBsb2FkZWQgaW1hZ2UgKi9cbiAgX2lzTG9hZGVkSW1nOiBib29sZWFuO1xuXG4gIC8qKiBXaGVuIGlzIGxvYWRlZCBpbWFnZSAmIHJlYWR5IGZvciBjcm9wICovXG4gIGlzTG9hZGVkOiBib29sZWFuO1xuICBpc0Nyb3BwZWQ6IGJvb2xlYW47XG5cbiAgLyoqIE9uIGxvYWRlZCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogT24gY3JvcCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNyb3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIEVtaXQgYW4gZXJyb3Igd2hlbiB0aGUgbG9hZGVkIGltYWdlIGlzIG5vdCB2YWxpZCAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcblxuICBwcml2YXRlIF9kZWZhdWx0VHlwZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBwcml2YXRlIF9pbWdMb2FkZWQoaW1nRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCkge1xuICAgIGlmIChpbWdFbGVtZW50KSB7XG4gICAgICB0aGlzLl9pbWcgPSBpbWdFbGVtZW50O1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nRWxlbWVudC5oZWlnaHQ7XG4gICAgICBjYW52YXMud2lkdGggPSBpbWdFbGVtZW50LndpZHRoO1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjdHguZHJhd0ltYWdlKGltZ0VsZW1lbnQsIDAsIDApO1xuICAgICAgLyoqIHNldCB6b29tIHNjYWxlICovXG4gICAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCAvIGNhbnZhcy5oZWlnaHRcbiAgICAgIH07XG4gICAgICB0aGlzLl9taW5TY2FsZSA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFN0eWxlc0ZvckNvbnRJbWcodmFsdWVzOiB7XG4gICAgd2lkdGg6IG51bWJlclxuICAgIGhlaWdodDogbnVtYmVyXG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcbiAgfSkge1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHtmaXgodmFsdWVzLndpZHRoKX1weGAsXG4gICAgICBoZWlnaHQ6IGAke2ZpeCh2YWx1ZXMuaGVpZ2h0KX1weGBcbiAgICB9IGFzIGFueTtcbiAgICBpZiAodmFsdWVzLnggIT09IHZvaWQgMCAmJiB2YWx1ZXMueSAhPT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgICBjb25zdCBpbWdSZWN0ID0gdGhpcy5faW1nQ29udGFpbmVyUmVjdCgpO1xuICAgICAgY29uc3QgeCA9IHJvb3RSZWN0LndpZHRoIC8gMiAtICh2YWx1ZXMueCk7XG4gICAgICBjb25zdCB5ID0gcm9vdFJlY3QuaGVpZ2h0IC8gMiAtICh2YWx1ZXMueSk7XG4gICAgICBuZXdTdHlsZXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7Zml4KHZhbHVlcy54KX1weCwke2ZpeCh2YWx1ZXMueSl9cHgsIDApYDtcblxuICAgICAgdGhpcy5faW1nUmVjdC54ID0gZml4KHZhbHVlcy54KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueSA9IGZpeCh2YWx1ZXMueSk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnhjID0gZml4KHgpO1xuICAgICAgdGhpcy5faW1nUmVjdC55YyA9IGZpeCh5KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3Qud3QgPSBmaXgoaW1nUmVjdC53aWR0aCk7XG4gICAgICB0aGlzLl9pbWdSZWN0Lmh0ID0gZml4KGltZ1JlY3QuaGVpZ2h0KTtcbiAgICB9XG4gICAgdGhpcy5faW1nUmVjdC53ID0gZml4KHZhbHVlcy53aWR0aCk7XG4gICAgdGhpcy5faW1nUmVjdC5oID0gZml4KHZhbHVlcy5oZWlnaHQpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1N0eWxlcykge1xuICAgICAgaWYgKG5ld1N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCBrZXksIG5ld1N0eWxlc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJykgcmVzaXplJCgpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKF9pbWcuZmlsZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHRoaXMuX2ZpbGVOYW1lID0gX2ltZy52YWx1ZS5yZXBsYWNlKC8uKihcXC98XFxcXCkvLCAnJyk7XG5cbiAgICAvKiogU2V0IHR5cGUgKi9cbiAgICB0aGlzLl9kZWZhdWx0VHlwZSA9IG51bGw7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0VHlwZSA9IF9pbWcuZmlsZXNbMF0udHlwZTtcbiAgICB9XG4gICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKGxvYWRFdmVudCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZVVybCA9IChsb2FkRXZlbnQudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdCBhcyBzdHJpbmc7XG4gICAgICB0aGlzLnNldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlc1swXSk7XG4gIH1cblxuICAvKiogU2V0IHRoZSBzaXplIG9mIHRoZSBpbWFnZSwgdGhlIHZhbHVlcyBjYW4gYmUgMCBiZXR3ZWVuIDEsIHdoZXJlIDEgaXMgdGhlIG9yaWdpbmFsIHNpemUgKi9cbiAgc2V0U2NhbGUoc2l6ZTogbnVtYmVyLCBub0F1dG9Dcm9wPzogYm9vbGVhbikge1xuICAgIC8vIGZpeCBtaW4gc2NhbGVcbiAgICBzaXplID0gc2l6ZSA+IHRoaXMubWluU2NhbGUgJiYgc2l6ZSA8PSAxID8gc2l6ZSA6IHRoaXMubWluU2NhbGU7XG5cbiAgICAvLyBjaGVja1xuICAgIGNvbnN0IGNoYW5nZWQgPSBzaXplID09PSB0aGlzLnNjYWxlO1xuICAgIHRoaXMuX3NjYWxlID0gc2l6ZTtcbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNpemUgPSB0aGlzLl9zY2FsM0ZpeCA9IGZpeChzaXplLCA0KTtcbiAgICBjb25zdCBpbml0aWFsSW1nID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgd2lkdGggPSAoaW5pdGlhbEltZy53aWR0aCAqIHNpemUpO1xuICAgIGNvbnN0IGhlaWdodCA9IChpbml0aWFsSW1nLmhlaWdodCAqIHNpemUpO1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICBpZiAoIXRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICAuLi50aGlzLl9nZXRDZW50ZXJQb2ludHMoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yaWdpblBvc2l0aW9uID0gey4uLnRoaXMuX2ltZ1JlY3R9O1xuICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgIHg6IChob3N0UmVjdC53aWR0aCAvIDIpIC0gKG9yaWdpblBvc2l0aW9uLngpLFxuICAgICAgICB5OiAoaG9zdFJlY3QuaGVpZ2h0IC8gMikgLSAob3JpZ2luUG9zaXRpb24ueSksXG4gICAgICAgIGxlZnQ6IG9yaWdpblBvc2l0aW9uLngsXG4gICAgICAgIHRvcDogb3JpZ2luUG9zaXRpb24ueVxuICAgICAgfTtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9tb3ZlKHtcbiAgICAgICAgc3JjRXZlbnQ6IHt9LFxuICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICB4OiAoaG9zdFJlY3Qud2lkdGggLyAyIC0gKHRoaXMub2Zmc2V0LnggKiAod2lkdGggLyBvcmlnaW5Qb3NpdGlvbi53KSkpICsgaG9zdFJlY3QueCArIHRoaXMub2Zmc2V0LngsXG4gICAgICAgICAgeTogKGhvc3RSZWN0LmhlaWdodCAvIDIgLSAodGhpcy5vZmZzZXQueSAqIChoZWlnaHQgLyBvcmlnaW5Qb3NpdGlvbi5oKSkpICsgaG9zdFJlY3QueSArIHRoaXMub2Zmc2V0LnlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2NhbGVDaGFuZ2UuZW1pdCh0aGlzLl9zY2FsZSk7XG4gICAgaWYgKCFub0F1dG9Dcm9wKSB7XG4gICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldENlbnRlclBvaW50cygpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgaW1nID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuX3NjYWwzRml4O1xuICAgIGNvbnN0IHggPSAocm9vdC5vZmZzZXRXaWR0aCAtIChpbWcud2lkdGggKiBzaXplKSkgLyAyO1xuICAgIGNvbnN0IHkgPSAocm9vdC5vZmZzZXRIZWlnaHQgLSAoaW1nLmhlaWdodCAqIHNpemUpKSAvIDI7XG4gICAgcmV0dXJuIHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBanVzdGFyIGEgbGEgcGFudGFsbGFcbiAgICovXG4gIGZpdFRvU2NyZWVuKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IG1pbiA9IHtcbiAgICAgIHdpZHRoOiBjb250YWluZXIub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lci5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5faW1nO1xuICAgIGNvbnN0IG1pblNjYWxlID0ge1xuICAgICAgd2lkdGg6IG1pbi53aWR0aCAvIHdpZHRoLFxuICAgICAgaGVpZ2h0OiBtaW4uaGVpZ2h0IC8gaGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KTtcbiAgICB0aGlzLnNldFNjYWxlKHJlc3VsdCk7XG4gIH1cblxuICBmaXQoKSB7XG4gICAgdGhpcy5zZXRTY2FsZSgwKTtcbiAgfVxuXG4gIF9tb3ZlU3RhcnQoZXZlbnQpIHtcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgY29uc3QgaW1nUmVjdCA9IHRoaXMuX2ltZ1JlY3Q7XG4gICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICB4OiBldmVudC5jZW50ZXIueCAtIGhvc3RSZWN0LnggLSBpbWdSZWN0LngsXG4gICAgICB5OiBldmVudC5jZW50ZXIueSAtIGhvc3RSZWN0LnkgLSBpbWdSZWN0LnksXG4gICAgICBsZWZ0OiBpbWdSZWN0LngsXG4gICAgICB0b3A6IGltZ1JlY3QueVxuICAgIH07XG4gIH1cbiAgX21vdmUoZXZlbnQpIHtcbiAgICBsZXQgeCwgeTtcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgY29uc3QgaW1nQ29udGFpbmVyUmVjdCA9IHRoaXMuX2ltZ1JlY3Q7XG4gICAgY29uc3QgY3JvcHBpbmdDb250YWluZXJSZWN0ID0gdGhpcy5fYXJlYUNyb3BwZXJSZWN0KCk7XG5cbiAgICAvLyBMaW1pdCBmb3IgbGVmdFxuICAgIGlmIChldmVudC5jZW50ZXIueCAtIHRoaXMub2Zmc2V0LnggPiBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCkge1xuICAgICAgeCA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueDtcbiAgICB9XG4gICAgLy8gTGltaXQgZm9yIHRvcFxuICAgIGlmIChldmVudC5jZW50ZXIueSAtIHRoaXMub2Zmc2V0LnkgPiBjcm9wcGluZ0NvbnRhaW5lclJlY3QueSkge1xuICAgICAgeSA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC55IC0gaG9zdFJlY3QueTtcbiAgICB9XG4gICAgLy8gTGltaXQgZm9yIHJpZ2h0XG4gICAgaWYgKGV2ZW50LmNlbnRlci54IC0gdGhpcy5vZmZzZXQueCArIGltZ0NvbnRhaW5lclJlY3QudyA8IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54ICsgY3JvcHBpbmdDb250YWluZXJSZWN0LndpZHRoKSB7XG4gICAgICB4ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnggLSBob3N0UmVjdC54IC0gaW1nQ29udGFpbmVyUmVjdC53ICsgY3JvcHBpbmdDb250YWluZXJSZWN0LndpZHRoO1xuICAgIH1cbiAgICAvLyBMaW1pdCBmb3IgYm90dG9tXG4gICAgaWYgKGV2ZW50LmNlbnRlci55IC0gdGhpcy5vZmZzZXQueSArIGltZ0NvbnRhaW5lclJlY3QuaCA8IGNyb3BwaW5nQ29udGFpbmVyUmVjdC55ICsgY3JvcHBpbmdDb250YWluZXJSZWN0LmhlaWdodCkge1xuICAgICAgeSA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC55IC0gaG9zdFJlY3QueSAtIGltZ0NvbnRhaW5lclJlY3QuaCArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gV2hlbiBwcmVzcyBzaGlmdEtleVxuICAgIGlmIChldmVudC5zcmNFdmVudCAmJiBldmVudC5zcmNFdmVudC5zaGlmdEtleSkge1xuICAgICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPT09IE1hdGgubWF4KE1hdGguYWJzKGV2ZW50LmRlbHRhWCksIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkpKSB7XG4gICAgICAgIHkgPSB0aGlzLm9mZnNldC50b3A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gdGhpcy5vZmZzZXQubGVmdDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gZXZlbnQuY2VudGVyLnggLSBob3N0UmVjdC54IC0gKHRoaXMub2Zmc2V0LngpOyB9XG4gICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gZXZlbnQuY2VudGVyLnkgLSBob3N0UmVjdC55IC0gKHRoaXMub2Zmc2V0LnkpOyB9XG5cbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgIHdpZHRoOiB0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICBjb25zdCBjcm9wcGluZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9hcmVhQ3JvcHBlclJlY3QoKTtcbiAgICBpZiAoeCA9PT0gdm9pZCAwICYmIHkgPT09IHZvaWQgMCkge1xuICAgICAgeCA9IHRoaXMuX2ltZ1JlY3QueGM7XG4gICAgICB5ID0gdGhpcy5faW1nUmVjdC55YztcbiAgICB9XG4gICAgeCA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0LngpIC0gKHggLSAodGhpcy5jb25maWcud2lkdGggLyAyKSk7XG4gICAgeSA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0LnkpIC0gKHkgLSAodGhpcy5jb25maWcuaGVpZ2h0IC8gMikpO1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgd2lkdGg6IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICBfc2xpZGVFbmQoKSB7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nyb3BJZkF1dG9Dcm9wKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvQ3JvcCkge1xuICAgICAgdGhpcy5jcm9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqKyAqL1xuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBmaXgodGhpcy5fc2NhbDNGaXggKyAuMDUsIDQpO1xuICAgIGlmIChzY2FsZSA+IDAgJiYgc2NhbGUgPD0gMSkge1xuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENsZWFuIHRoZSBpbWcgY3JvcHBlciAqL1xuICBjbGVhbigpIHtcbiAgICB0aGlzLl9kZWZhdWx0VHlwZSA9IG51bGw7XG4gICAgdGhpcy5faXNMb2FkZWRJbWcgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IG51bGw7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY2FudmFzLndpZHRoID0gMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gMDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqLSAqL1xuICB6b29tT3V0KCkge1xuICAgIGNvbnN0IHNjYWxlID0gZml4KHRoaXMuX3NjYWwzRml4IC0gLjA1LCA0KTtcbiAgICBpZiAoc2NhbGUgPiB0aGlzLm1pblNjYWxlICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpdCgpO1xuICAgIH1cbiAgfVxuICBjZW50ZXIoKSB7XG4gICAgLy8gVE9ETzogZml4IHRoaXNcbiAgICBjb25zdCBpbWdSZWN0ID0gdGhpcy5faW1nUmVjdDtcbiAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICB3aWR0aDogaW1nUmVjdC53LFxuICAgICAgaGVpZ2h0OiBpbWdSZWN0LmgsXG4gICAgICAuLi50aGlzLl9nZXRDZW50ZXJQb2ludHMoKVxuICAgIH07XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyhuZXdTdHlsZXMpO1xuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICAvKiogU2V0IEltZyAqL1xuICBzZXRJbWFnZVVybChzcmM6IHN0cmluZykge1xuICAgIHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0ID0gc3JjO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZTtcbiAgICBjb25zdCBjcm9wRXZlbnQ6IEltZ0Nyb3BwZXJFdmVudCA9IHtcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgdHlwZTogdGhpcy5fZGVmYXVsdFR5cGUsXG4gICAgICBkYXRhVVJMOiBudWxsLFxuICAgICAgYmFzZTY0OiBudWxsLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBzY2FsZTogbnVsbCxcbiAgICAgIG9yaWdpbmFsRGF0YVVSTDogc3JjLFxuICAgICAgcm90YXRpb246IG51bGwsXG4gICAgICBwb3NpdGlvbjogbnVsbFxuICAgIH07XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFuKCk7XG4gICAgICB0aGlzLmVycm9yLmVtaXQoY3JvcEV2ZW50KTtcbiAgICB9KTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuX2ltZ0xvYWRlZChpbWcpO1xuICAgICAgY3JvcEV2ZW50LndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgY3JvcEV2ZW50LmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICB0aGlzLl9pc0xvYWRlZEltZyA9IHRydWU7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5fbmdab25lXG4gICAgICAgICAgLm9uU3RhYmxlXG4gICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSgwLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcm90YXRlKGRlZ3JlZXM6IG51bWJlcikge1xuICAgIGNvbnN0IHZhbGlkRGVncmVlcyA9IHRoaXMuX3JvdGF0aW9uID0gY29udmVydFRvVmFsaWREZWdyZWVzKGRlZ3JlZXMpO1xuICAgIGNvbnN0IGRlZ3JlZXNSYWQgPSB2YWxpZERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNhbnZhc0Nsb24gPSBjcmVhdGVDYW52YXNJbWcoY2FudmFzKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNDbG9uLndpZHRoLCBjYW52YXNDbG9uLmhlaWdodCk7XG5cbiAgICAvLyByb3RhdGUgY2FudmFzIGltYWdlXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY2FudmFzLCAndHJhbnNmb3JtJywgYHJvdGF0ZSgke3ZhbGlkRGVncmVlc31kZWcpYCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY2FudmFzLCAndHJhbnNmb3JtT3JpZ2luJywgYCR7dGhpcy5faW1nUmVjdC54Y31weCAke3RoaXMuX2ltZ1JlY3QueWN9cHggMGApO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY2FudmFzLCAnd2lkdGgnLCBgaW5pdGlhbGApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNhbnZhcywgJ2hlaWdodCcsIGBpbml0aWFsYCk7XG5cbiAgICAvLyBzYXZlIHJlY3RcbiAgICBjb25zdCBjYW52YXNSZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gcmVtb3ZlIHJvdGF0ZSBzdHlsZXNcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZShjYW52YXMsICd0cmFuc2Zvcm0nKTtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZShjYW52YXMsICd0cmFuc2Zvcm1PcmlnaW4nKTtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZShjYW52YXMsICd3aWR0aCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKGNhbnZhcywgJ2hlaWdodCcpO1xuXG4gICAgLy8gc2V0IHcgJiBoXG4gICAgY29uc3QgdyA9IGNhbnZhc1JlY3Qud2lkdGg7XG4gICAgY29uc3QgaCA9IGNhbnZhc1JlY3QuaGVpZ2h0O1xuICAgIGN0eC5jYW52YXMud2lkdGggPSB3O1xuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgIC8vIHRyYW5zbGF0ZSBhbmQgcm90YXRlXG4gICAgY3R4LnRyYW5zbGF0ZSh3IC8gMiwgaCAvIDIpO1xuICAgIGN0eC5yb3RhdGUoZGVncmVlc1JhZCk7XG4gICAgY3R4LmRyYXdJbWFnZShjYW52YXNDbG9uLCAtY2FudmFzQ2xvbi53aWR0aCAvIDIsIC1jYW52YXNDbG9uLmhlaWdodCAvIDIpO1xuICAgIGNvbnN0IHJvb3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgIHdpZHRoOiB3ICogdGhpcy5fc2NhbDNGaXgsXG4gICAgICBoZWlnaHQ6IGggKiB0aGlzLl9zY2FsM0ZpeCxcbiAgICAgIHg6IHggLSByb290UmVjdC54LFxuICAgICAgeTogeSAtIHJvb3RSZWN0LnlcbiAgICB9KTtcblxuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIGltYWdlU21vb3RoaW5nUXVhbGl0eShpbWc6IEhUTUxDYW52YXNFbGVtZW50LCBjb25maWcsIHF1YWxpdHk6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICAvKiogQ2FsY3VsYXRlIHRvdGFsIG51bWJlciBvZiBzdGVwcyBuZWVkZWQgKi9cbiAgICBsZXQgIG51bVN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKE1hdGgubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCkgLyBNYXRoLm1heChjb25maWcuaGVpZ2h0LCBjb25maWcud2lkdGgpKSAvIE1hdGgubG9nKDIpKSAtIDE7XG4gICAgbnVtU3RlcHMgPSBudW1TdGVwcyA8PSAwID8gMCA6IG51bVN0ZXBzO1xuXG4gICAgLyoqQXJyYXkgc3RlcHMgKi9cbiAgICBjb25zdCBzdGVwcyA9IEFycmF5LmZyb20oQXJyYXkobnVtU3RlcHMpLmtleXMoKSk7XG5cbiAgICAvKiogQ29udGV4dCAqL1xuICAgIGNvbnN0IG9jdHggPSBpbWcuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHEgPSAoKHF1YWxpdHkgKiAxMCkgKiogbnVtU3RlcHMpIC8gKDEwICoqIG51bVN0ZXBzKTtcblxuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cbiAgICBpZiAobnVtU3RlcHMpIHtcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cbiAgICAgIG9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xuXG4gICAgICAvKiogU3RlcHMgKi9cbiAgICAgIChzdGVwcyBhcyBBcnJheTxudW1iZXI+KS5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgb2N0eC5kcmF3SW1hZ2UoaW1nLFxuICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgdywgaFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RlcCBmaW5hbFxuICAgICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICAgKi9cbiAgICBjb25zdCBvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxuICAgIGN0eCA9IG9jLmdldENvbnRleHQoJzJkJyk7XG4gICAgb2Mud2lkdGggPSBjb25maWcud2lkdGg7XG4gICAgb2MuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcbiAgICBjdHguZHJhd0ltYWdlKGltZyxcbiAgICAgIDAsIDAsXG4gICAgICBpbWcud2lkdGggKiAocSksIGltZy5oZWlnaHQgKiAocSksXG4gICAgICAwLCAwLFxuICAgICAgb2Mud2lkdGgsIG9jLmhlaWdodFxuICAgICk7XG4gICAgcmV0dXJuIG9jO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgSW1hZ2VcbiAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgKi9cbiAgY3JvcChjb25maWc/OiBJbWdDcm9wcGVyQ29uZmlnKTogSW1nQ3JvcHBlckV2ZW50IHtcbiAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWcgPyBtZXJnZURlZXAoe30sIHRoaXMuY29uZmlnIHx8IENPTkZJR19ERUZBVUxULCBjb25maWcpIDogdGhpcy5jb25maWc7XG4gICAgY29uc3QgY3JvcEV2ZW50ID0gdGhpcy5faW1nQ3JvcChuZXdDb25maWcpO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2ltZ0Nyb3AobXlDb25maWc6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGltZ1JlY3QgPSB0aGlzLl9pbWdSZWN0O1xuICAgIGNvbnN0IGxlZnQgPSBpbWdSZWN0LnhjIC0gbXlDb25maWcud2lkdGggLyAyO1xuICAgIGNvbnN0IHRvcCA9IGltZ1JlY3QueWMgLSBteUNvbmZpZy5oZWlnaHQgLyAyO1xuICAgIGNvbnN0IHNjYWxlRml4ID0gdGhpcy5fc2NhbDNGaXg7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgd2lkdGg6IG15Q29uZmlnLndpZHRoLFxuICAgICAgaGVpZ2h0OiBteUNvbmZpZy5oZWlnaHRcbiAgICB9O1xuICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSBjb25maWcud2lkdGggLyBzY2FsZUZpeDtcbiAgICBjYW52YXNFbGVtZW50LmhlaWdodCA9IGNvbmZpZy5oZWlnaHQgLyBzY2FsZUZpeDtcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKG15Q29uZmlnLmZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBteUNvbmZpZy5maWxsO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhc0VsZW1lbnQud2lkdGgsIGNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcbiAgICB9XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudCBhcyBhbnksXG4gICAgICAtKGxlZnQgLyBzY2FsZUZpeCksIC0odG9wIC8gc2NhbGVGaXgpLFxuICAgICk7XG4gICAgbGV0IHJlc3VsdCA9IGNhbnZhc0VsZW1lbnQ7XG4gICAgY29uc3QgYW50aUFsaWFzZWRRID0gbXlDb25maWcuYW50aUFsaWFzZWQgPyAuNSA6IDE7XG4gICAgaWYgKG15Q29uZmlnLm91dHB1dCA9PT0gMCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBjb25maWcsIGFudGlBbGlhc2VkUSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXlDb25maWcub3V0cHV0ID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBteUNvbmZpZy5vdXRwdXQsIGFudGlBbGlhc2VkUSk7XG4gICAgfVxuICAgIGxldCB1cmw7XG4gICAgaWYgKG15Q29uZmlnLnR5cGUpIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwoYGltYWdlLyR7bXlDb25maWcudHlwZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTCh0aGlzLl9kZWZhdWx0VHlwZSk7XG4gICAgfVxuICAgIGNvbnN0IGNyb3BFdmVudCA9IHtcbiAgICAgIGRhdGFVUkw6IHVybCxcbiAgICAgIGJhc2U2NDogdXJsLFxuICAgICAgdHlwZTogdGhpcy5fZGVmYXVsdFR5cGUgfHwgbXlDb25maWcudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodCxcbiAgICAgIG9yaWdpbmFsRGF0YVVSTDogdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQsXG4gICAgICBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgIHJvdGF0aW9uOiB0aGlzLl9yb3RhdGlvbixcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IHRoaXMuX2ltZ1JlY3QueGMsXG4gICAgICAgIHk6IHRoaXMuX2ltZ1JlY3QueWNcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaXNDcm9wcGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNyb3BwZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cblxuICBwcml2YXRlIF9yb290UmVjdCgpOiBET01SZWN0IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgfVxuICBwcml2YXRlIF9pbWdDb250YWluZXJSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfYXJlYUNyb3BwZXJSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cblxufVxuXG4vKipcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyg0NSkgPT09IDkwXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoNDApID09PSAwXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoMTAwKSA9PT0gOTBcbiAqIEBpZ25vcmVcbiAqL1xuZnVuY3Rpb24gY29udmVydFRvVmFsaWREZWdyZWVzKG51bTogbnVtYmVyKSB7XG4gIGNvbnN0IHZhbDM2MCA9IGxpbWl0TnVtKG51bSwgMzYwKTtcbiAgY29uc3QgdmFsOTAgPSBsaW1pdE51bSh2YWwzNjAucmVzdWx0LCA5MCk7XG4gIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24obnVtKTtcbiAgaWYgKHZhbDkwLnJlc3VsdCA+PSAoOTAgLyAyKSkge1xuICAgIHJldHVybiA5MCAqICh2YWw5MC5wYXJ0cyArIDEpICogc2lnbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gOTAgKiB2YWw5MC5wYXJ0cyAqIHNpZ247XG4gIH1cbn1cblxuLyoqXG4gKiBkZW1vOlxuICogbGltaXROdW0oNDUwLCAzNjApID09PSA5MFxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBsaW1pdE51bShudW06IG51bWJlciwgbnVtMjogbnVtYmVyKSB7XG4gIGNvbnN0IG51bUFicyA9IE1hdGguYWJzKG51bSk7XG4gIGNvbnN0IHBhcnRzID0gTWF0aC5mbG9vcihudW1BYnMgLyBudW0yKTtcbiAgbGV0IHJlc3VsdDogbnVtYmVyO1xuICBpZiAocGFydHMpIHtcbiAgICByZXN1bHQgPSBudW1BYnMgLSAobnVtMiAqIHBhcnRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBudW07XG4gIH1cbiAgaWYgKG51bUFicyAhPT0gbnVtKSB7XG4gICAgcmVzdWx0ICo9IC0xO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzdWx0LFxuICAgIHBhcnRzXG4gIH07XG59XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDYW52YXNJbWcoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQpIHtcblxuICAvLyBjcmVhdGUgYSBuZXcgY2FudmFzXG4gIGNvbnN0IG5ld0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjb250ZXh0ID0gbmV3Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgLy8gc2V0IGRpbWVuc2lvbnNcbiAgbmV3Q2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICBuZXdDYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcblxuICAvLyBhcHBseSB0aGUgb2xkIGNhbnZhcyB0byB0aGUgbmV3IG9uZVxuICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuXG4gIC8vIHJldHVybiB0aGUgbmV3IGNhbnZhc1xuICByZXR1cm4gbmV3Q2FudmFzO1xufVxuXG5mdW5jdGlvbiBmaXgodiwgZGVjaW1hbFBvaW50cz86IG51bWJlcikge1xuICByZXR1cm4gK3BhcnNlRmxvYXQodikudG9GaXhlZChkZWNpbWFsUG9pbnRzIHx8IDApO1xufVxuIiwiaW1wb3J0IHsgSEFNTUVSX0dFU1RVUkVfQ09ORklHIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFseWxlL3VpJztcblxuaW1wb3J0IHsgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIH0gZnJvbSAnLi9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5UmVzaXppbmdDcm9wcGluZ0ltYWdlc10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLCB1c2VDbGFzczogTHlIYW1tZXJHZXN0dXJlQ29uZmlnIH1cbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQWdCQSxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsTUFBTSxNQUFNLElBQUk7SUFDZCxJQUFJLEVBQUU7UUFDSixxQkFBcUIsRUFBRSxNQUFNO1FBQzdCLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsaUJBQWlCLEVBQUUsTUFBTTtRQUN6QixVQUFVLEVBQUUsTUFBTTtRQUNsQixPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDO1FBQ1AsWUFBWSxFQUFFO1lBQ1osS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLGFBQWEsRUFBRSxNQUFNO1NBQ3RCO0tBQ0Y7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixRQUFRLEVBQUUsVUFBVTtRQUNwQixhQUFhLEVBQUUsTUFBTTtRQUNyQixTQUFTLEVBQUUsa0NBQWtDO1FBQzdDLG1CQUFtQixvQkFDZCxnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLE9BQU8sRUFBRSxJQUFJLEdBQ2Q7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsQ0FBQztZQUNS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