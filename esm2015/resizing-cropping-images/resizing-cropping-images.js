/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2, NgZone, HostListener } from '@angular/core';
import { LyTheme2, mergeDeep, LY_COMMON_STYLES } from '@alyle/ui';
import { take } from 'rxjs/operators';
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
/**
 * Image Cropper Config
 * @record
 */
export function ImgCropperConfig() { }
if (false) {
    /**
     * Cropper area width
     * @type {?}
     */
    ImgCropperConfig.prototype.width;
    /**
     * Cropper area height
     * @type {?}
     */
    ImgCropperConfig.prototype.height;
    /**
     * If this is not defined, the new image will be automatically defined
     * @type {?|undefined}
     */
    ImgCropperConfig.prototype.type;
    /**
     * Background color( default: null), if is null in png is transparent but not in jpg
     * @type {?|undefined}
     */
    ImgCropperConfig.prototype.fill;
    /**
     * Set anti-aliased( default: true)
     * @type {?|undefined}
     */
    ImgCropperConfig.prototype.antiAliased;
    /** @type {?|undefined} */
    ImgCropperConfig.prototype.autoCrop;
    /** @type {?|undefined} */
    ImgCropperConfig.prototype.output;
}
/** @enum {number} */
const ImgResolution = {
    /** Resizing & cropping */
    Default: 0,
    /** Only cropping */
    OriginalImage: 1,
};
export { ImgResolution };
ImgResolution[ImgResolution.Default] = 'Default';
ImgResolution[ImgResolution.OriginalImage] = 'OriginalImage';
/**
 * @record
 */
export function ImgCropperEvent() { }
if (false) {
    /**
     * Cropped image in base64, !deprecated use instead `dataURL`
     * @type {?}
     */
    ImgCropperEvent.prototype.base64;
    /**
     * Cropped image data URL
     * @type {?}
     */
    ImgCropperEvent.prototype.dataURL;
    /** @type {?} */
    ImgCropperEvent.prototype.name;
    /**
     * Filetype
     * @type {?}
     */
    ImgCropperEvent.prototype.type;
    /** @type {?} */
    ImgCropperEvent.prototype.width;
    /** @type {?} */
    ImgCropperEvent.prototype.height;
    /**
     * Original Image data URL
     * @type {?}
     */
    ImgCropperEvent.prototype.originalDataURL;
    /** @type {?} */
    ImgCropperEvent.prototype.scale;
    /**
     * Current rotation in degrees
     * @type {?}
     */
    ImgCropperEvent.prototype.rotation;
    /** @type {?} */
    ImgCropperEvent.prototype.position;
}
/** @type {?} */
const CONFIG_DEFAULT = (/** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImgResolution.Default,
    antiAliased: true
}));
/**
 * @record
 */
function ImgRect() { }
if (false) {
    /** @type {?} */
    ImgRect.prototype.x;
    /** @type {?} */
    ImgRect.prototype.y;
    /** @type {?} */
    ImgRect.prototype.xc;
    /** @type {?} */
    ImgRect.prototype.yc;
    /**
     * transform with
     * @type {?}
     */
    ImgRect.prototype.wt;
    /** @type {?} */
    ImgRect.prototype.ht;
}
export class LyResizingCroppingImages {
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
        console.log('from event');
        /** @type {?} */
        const _img = (/** @type {?} */ (img.target));
        if (_img.files.length !== 1) {
            return;
        }
        /** @type {?} */
        const fileReader = new FileReader();
        this._fileName = _img.value.replace(/.*(\/|\\)/, '');
        /** Set type */
        if (!this.config.type) {
            this._defaultType = _img.files[0].type;
        }
        fileReader.addEventListener('loadend', (loadEvent) => {
            /** @type {?} */
            const originalImageUrl = (/** @type {?} */ (((/** @type {?} */ (loadEvent.target))).result));
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
        size = size >= this.minScale && size <= 1 ? size : this.minScale;
        // check
        /** @type {?} */
        const changed = size !== this.scale;
        this._scale = size;
        size = this._scal3Fix = size;
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
        this.setScale(0);
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
        const scaleFix = this._scale;
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
        this._imgRect = (/** @type {?} */ ({}));
        this.offset = null;
        this.scale = null;
        this._scal3Fix = null;
        this._rotation = 0;
        this._minScale = null;
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
     * Set Img
     * @param {?} src
     * @return {?}
     */
    setImageUrl(src) {
        this.clean();
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
            if (this._defaultType === 'image/png' || fileType === 'image/svg+xml') {
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
if (false) {
    /**
     * styles
     * @ignore
     * @type {?}
     */
    LyResizingCroppingImages.prototype.classes;
    /** @type {?} */
    LyResizingCroppingImages.prototype._originalImgBase64;
    /** @type {?} */
    LyResizingCroppingImages.prototype._fileName;
    /**
     * Original image
     * @type {?}
     */
    LyResizingCroppingImages.prototype._img;
    /** @type {?} */
    LyResizingCroppingImages.prototype.offset;
    /** @type {?} */
    LyResizingCroppingImages.prototype._scale;
    /** @type {?} */
    LyResizingCroppingImages.prototype._scal3Fix;
    /** @type {?} */
    LyResizingCroppingImages.prototype._minScale;
    /** @type {?} */
    LyResizingCroppingImages.prototype._config;
    /** @type {?} */
    LyResizingCroppingImages.prototype._imgRect;
    /** @type {?} */
    LyResizingCroppingImages.prototype._rotation;
    /** @type {?} */
    LyResizingCroppingImages.prototype._imgContainer;
    /** @type {?} */
    LyResizingCroppingImages.prototype._croppingContainer;
    /** @type {?} */
    LyResizingCroppingImages.prototype._imgCanvas;
    /** @type {?} */
    LyResizingCroppingImages.prototype.scaleChange;
    /**
     * When is loaded image
     * @type {?}
     */
    LyResizingCroppingImages.prototype._isLoadedImg;
    /**
     * When is loaded image & ready for crop
     * @type {?}
     */
    LyResizingCroppingImages.prototype.isLoaded;
    /** @type {?} */
    LyResizingCroppingImages.prototype.isCropped;
    /**
     * On loaded new image
     * @type {?}
     */
    LyResizingCroppingImages.prototype.loaded;
    /**
     * On crop new image
     * @type {?}
     */
    LyResizingCroppingImages.prototype.cropped;
    /**
     * Emit an error when the loaded image is not valid
     * @type {?}
     */
    LyResizingCroppingImages.prototype.error;
    /** @type {?} */
    LyResizingCroppingImages.prototype._defaultType;
    /** @type {?} */
    LyResizingCroppingImages.prototype._renderer;
    /** @type {?} */
    LyResizingCroppingImages.prototype.theme;
    /** @type {?} */
    LyResizingCroppingImages.prototype.elementRef;
    /** @type {?} */
    LyResizingCroppingImages.prototype.cd;
    /** @type {?} */
    LyResizingCroppingImages.prototype._ngZone;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUVoQyxjQUFjLEdBQUcsQ0FBQyxDQUFDOztNQUVuQixNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFDUCxZQUFZLEVBQUU7OztZQUdaLGFBQWEsRUFBRSxNQUFNO1NBQ3RCO0tBQ0Y7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixRQUFRLEVBQUUsVUFBVTtRQUNwQixhQUFhLEVBQUUsTUFBTTtRQUNyQixT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IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIG1lcmdlRGVlcCwgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgaW1nQ29udGFpbmVyOiB7XG4gICAgY3Vyc29yOiAnbW92ZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgJyYgPiBjYW52YXMnOiB7XG4gICAgICAvLyB3aWR0aDogJzEwMCUnLFxuICAgICAgLy8gaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfVxuICB9LFxuICBjcm9wcGluZ0NvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBib3hTaGFkb3c6ICcwIDAgMCAyMDAwMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgJyY6YmVmb3JlLCAmOmFmdGVyJzoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgY29udGVudDogYCcnYCxcbiAgICB9LFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9LFxuICAgICcmOmFmdGVyJzoge1xuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9XG4gIH0sXG4gIGNyb3BwQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgJyYsICYgPiBpbnB1dCc6IExZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAnJiAqOm5vdChpbnB1dCknOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgICcmID4gaW5wdXQnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH1cbiAgfVxufSk7XG4vKiogSW1hZ2UgQ3JvcHBlciBDb25maWcgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckNvbmZpZyB7XG4gIC8qKiBDcm9wcGVyIGFyZWEgd2lkdGgqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKiogQ3JvcHBlciBhcmVhIGhlaWdodCovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKiogSWYgdGhpcyBpcyBub3QgZGVmaW5lZCwgdGhlIG5ldyBpbWFnZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGVmaW5lZCAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKiogQmFja2dyb3VuZCBjb2xvciggZGVmYXVsdDogbnVsbCksIGlmIGlzIG51bGwgaW4gcG5nIGlzIHRyYW5zcGFyZW50IGJ1dCBub3QgaW4ganBnICovXG4gIGZpbGw/OiBzdHJpbmcgfCBudWxsO1xuICAvKiogU2V0IGFudGktYWxpYXNlZCggZGVmYXVsdDogdHJ1ZSkgKi9cbiAgYW50aUFsaWFzZWQ/OiBib29sZWFuO1xuICBhdXRvQ3JvcD86IGJvb2xlYW47XG4gIG91dHB1dD86IHtcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgaGVpZ2h0OiBudW1iZXJcbiAgfSB8IEltZ1Jlc29sdXRpb247XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IHR5cGUgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnID0gSW1nQ3JvcHBlckNvbmZpZztcblxuLyoqIEltYWdlIG91dHB1dCAqL1xuZXhwb3J0IGVudW0gSW1nUmVzb2x1dGlvbiB7XG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXG4gIERlZmF1bHQsXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXG4gIE9yaWdpbmFsSW1hZ2Vcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyRXZlbnQge1xuICAvKiogQ3JvcHBlZCBpbWFnZSBpbiBiYXNlNjQsICFkZXByZWNhdGVkIHVzZSBpbnN0ZWFkIGBkYXRhVVJMYCAqL1xuICBiYXNlNjQ6IHN0cmluZztcbiAgLyoqIENyb3BwZWQgaW1hZ2UgZGF0YSBVUkwgKi9cbiAgZGF0YVVSTDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKiBGaWxldHlwZSAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKiogT3JpZ2luYWwgSW1hZ2UgZGF0YSBVUkwgKi9cbiAgb3JpZ2luYWxEYXRhVVJMOiBzdHJpbmc7XG4gIHNjYWxlOiBudW1iZXI7XG4gIC8qKiBDdXJyZW50IHJvdGF0aW9uIGluIGRlZ3JlZXMgKi9cbiAgcm90YXRpb246IG51bWJlcjtcbiAgcG9zaXRpb246IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgfTtcbn1cblxuY29uc3QgQ09ORklHX0RFRkFVTFQgPSA8SW1nQ3JvcHBlckNvbmZpZz57XG4gIHdpZHRoOiAyNTAsXG4gIGhlaWdodDogMjAwLFxuICBvdXRwdXQ6IEltZ1Jlc29sdXRpb24uRGVmYXVsdCxcbiAgYW50aUFsaWFzZWQ6IHRydWVcbn07XG5cbmludGVyZmFjZSBJbWdSZWN0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHhjOiBudW1iZXI7XG4gIHljOiBudW1iZXI7XG4gIC8vIHc6IG51bWJlcjtcbiAgLy8gaDogbnVtYmVyO1xuICAvKiogdHJhbnNmb3JtIHdpdGggKi9cbiAgd3Q6IG51bWJlcjtcbiAgaHQ6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICdseS1pbWctY3JvcHBlciwgbHktY3JvcHBpbmcnLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5odG1sJ1xuIH0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBfb3JpZ2luYWxJbWdCYXNlNjQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsZU5hbWU6IHN0cmluZztcblxuICAvKiogT3JpZ2luYWwgaW1hZ2UgKi9cbiAgcHJpdmF0ZSBfaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBwcml2YXRlIG9mZnNldDoge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIGxlZnQ6IG51bWJlclxuICAgIHRvcDogbnVtYmVyXG4gIH07XG4gIHByaXZhdGUgX3NjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgX3NjYWwzRml4OiBudW1iZXI7XG4gIHByaXZhdGUgX21pblNjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbmZpZzogSW1nQ3JvcHBlckNvbmZpZztcbiAgcHJpdmF0ZSBfaW1nUmVjdDogSW1nUmVjdCA9IHt9IGFzIGFueTtcbiAgcHJpdmF0ZSBfcm90YXRpb246IG51bWJlcjtcblxuICBAVmlld0NoaWxkKCdfaW1nQ29udGFpbmVyJykgX2ltZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2Nyb3BwaW5nQ29udGFpbmVyJykgX2Nyb3BwaW5nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfaW1nQ2FudmFzJykgX2ltZ0NhbnZhczogRWxlbWVudFJlZjxIVE1MQ2FudmFzRWxlbWVudD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBzY2FsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb25maWcoKTogSW1nQ3JvcHBlckNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbDogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IG1lcmdlRGVlcCh7fSwgQ09ORklHX0RFRkFVTFQsIHZhbCk7XG4gIH1cbiAgLyoqIFNldCBzY2FsZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gIH1cbiAgc2V0IHNjYWxlKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRTY2FsZSh2YWwpO1xuICB9XG5cbiAgLyoqIEdldCBtaW4gc2NhbGUgKi9cbiAgZ2V0IG1pblNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pblNjYWxlO1xuICB9XG5cbiAgLyoqIFdoZW4gaXMgbG9hZGVkIGltYWdlICovXG4gIF9pc0xvYWRlZEltZzogYm9vbGVhbjtcblxuICAvKiogV2hlbiBpcyBsb2FkZWQgaW1hZ2UgJiByZWFkeSBmb3IgY3JvcCAqL1xuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgaXNDcm9wcGVkOiBib29sZWFuO1xuXG4gIC8qKiBPbiBsb2FkZWQgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIE9uIGNyb3AgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBFbWl0IGFuIGVycm9yIHdoZW4gdGhlIGxvYWRlZCBpbWFnZSBpcyBub3QgdmFsaWQgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBfZGVmYXVsdFR5cGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW1nTG9hZGVkKGltZ0VsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBpZiAoaW1nRWxlbWVudCkge1xuICAgICAgdGhpcy5faW1nID0gaW1nRWxlbWVudDtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgY2FudmFzLndpZHRoID0gaW1nRWxlbWVudC53aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWdFbGVtZW50LmhlaWdodDtcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWdFbGVtZW50LCAwLCAwKTtcbiAgICAgIC8qKiBzZXQgem9vbSBzY2FsZSAqL1xuICAgICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCAvIGNhbnZhcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgLyBjYW52YXMuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgdGhpcy5fbWluU2NhbGUgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZXNGb3JDb250SW1nKHZhbHVlczoge1xuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG4gIH0pIHtcbiAgICBjb25zdCBuZXdTdHlsZXMgPSB7IH0gYXMgYW55O1xuICAgIGNvbnN0IHJvb3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICBpZiAodmFsdWVzLnggIT09IHZvaWQgMCAmJiB2YWx1ZXMueSAhPT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCB4ID0gcm9vdFJlY3Qud2lkdGggLyAyIC0gKHZhbHVlcy54KTtcbiAgICAgIGNvbnN0IHkgPSByb290UmVjdC5oZWlnaHQgLyAyIC0gKHZhbHVlcy55KTtcblxuICAgICAgdGhpcy5faW1nUmVjdC54ID0gKHZhbHVlcy54KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueSA9ICh2YWx1ZXMueSk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnhjID0gKHgpO1xuICAgICAgdGhpcy5faW1nUmVjdC55YyA9ICh5KTtcbiAgICB9XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkeyh0aGlzLl9pbWdSZWN0LngpfXB4LCR7KHRoaXMuX2ltZ1JlY3QueSl9cHgsIDApYDtcbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtICs9IGBzY2FsZSgke3RoaXMuX3NjYWwzRml4fSlgO1xuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm1PcmlnaW4gPSBgJHt0aGlzLl9pbWdSZWN0LnhjfXB4ICR7dGhpcy5faW1nUmVjdC55Y31weCAwYDtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdTdHlsZXMpIHtcbiAgICAgIGlmIChuZXdTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudCwga2V5LCBuZXdTdHlsZXNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpIHJlc2l6ZSQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RJbnB1dEV2ZW50KGltZzogRXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnZnJvbSBldmVudCcpO1xuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKF9pbWcuZmlsZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgdGhpcy5fZmlsZU5hbWUgPSBfaW1nLnZhbHVlLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKTtcblxuXG4gICAgLyoqIFNldCB0eXBlICovXG4gICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0VHlwZSA9IF9pbWcuZmlsZXNbMF0udHlwZTtcbiAgICB9XG4gICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKGxvYWRFdmVudCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZVVybCA9IChsb2FkRXZlbnQudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdCBhcyBzdHJpbmc7XG4gICAgICB0aGlzLnNldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlc1swXSk7XG4gIH1cblxuICAvKiogU2V0IHRoZSBzaXplIG9mIHRoZSBpbWFnZSwgdGhlIHZhbHVlcyBjYW4gYmUgMCBiZXR3ZWVuIDEsIHdoZXJlIDEgaXMgdGhlIG9yaWdpbmFsIHNpemUgKi9cbiAgc2V0U2NhbGUoc2l6ZTogbnVtYmVyLCBub0F1dG9Dcm9wPzogYm9vbGVhbikge1xuICAgIC8vIGZpeCBtaW4gc2NhbGVcbiAgICBzaXplID0gc2l6ZSA+PSB0aGlzLm1pblNjYWxlICYmIHNpemUgPD0gMSA/IHNpemUgOiB0aGlzLm1pblNjYWxlO1xuXG4gICAgLy8gY2hlY2tcbiAgICBjb25zdCBjaGFuZ2VkID0gc2l6ZSAhPT0gdGhpcy5zY2FsZTtcbiAgICB0aGlzLl9zY2FsZSA9IHNpemU7XG4gICAgc2l6ZSA9IHRoaXMuX3NjYWwzRml4ID0gc2l6ZTtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luUG9zaXRpb24gPSB7Li4udGhpcy5faW1nUmVjdH07XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICAgIHg6IG9yaWdpblBvc2l0aW9uLngsXG4gICAgICAgICAgeTogb3JpZ2luUG9zaXRpb24ueSxcbiAgICAgICAgICBsZWZ0OiBvcmlnaW5Qb3NpdGlvbi54YyxcbiAgICAgICAgICB0b3A6IG9yaWdpblBvc2l0aW9uLnljXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe30pO1xuICAgICAgICB0aGlzLl9tb3ZlKHtcbiAgICAgICAgICBzcmNFdmVudDoge30sXG4gICAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICAgIGRlbHRhWTogMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubWluU2NhbGUpIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICAuLi50aGlzLl9nZXRDZW50ZXJQb2ludHMoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlQ2hhbmdlLmVtaXQodGhpcy5fc2NhbGUpO1xuICAgIGlmICghbm9BdXRvQ3JvcCkge1xuICAgICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRDZW50ZXJQb2ludHMoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGltZyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHggPSAocm9vdC5vZmZzZXRXaWR0aCAtIChpbWcud2lkdGgpKSAvIDI7XG4gICAgY29uc3QgeSA9IChyb290Lm9mZnNldEhlaWdodCAtIChpbWcuaGVpZ2h0KSkgLyAyO1xuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXG4gICAqL1xuICBmaXRUb1NjcmVlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBtaW4gPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2ltZztcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyB3aWR0aCxcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIGhlaWdodFxuICAgIH07XG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCk7XG4gICAgdGhpcy5zZXRTY2FsZShyZXN1bHQpO1xuICB9XG5cbiAgZml0KCkge1xuICAgIHRoaXMuc2V0U2NhbGUoMCk7XG4gIH1cblxuICBfbW92ZVN0YXJ0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgeDogdGhpcy5faW1nUmVjdC54LFxuICAgICAgeTogdGhpcy5faW1nUmVjdC55LFxuICAgICAgbGVmdDogdGhpcy5faW1nUmVjdC54YyxcbiAgICAgIHRvcDogdGhpcy5faW1nUmVjdC55Y1xuICAgIH07XG4gIH1cbiAgX21vdmUoZXZlbnQpIHtcbiAgICBsZXQgeCwgeTtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWxlO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IHN0YXJ0UCA9IHRoaXMub2Zmc2V0O1xuICAgIC8vIExpbWl0IGZvciBsZWZ0XG4gICAgaWYgKChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpID49IHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSkge1xuICAgICAgeCA9IHN0YXJ0UC54ICsgKHN0YXJ0UC5sZWZ0KSAtIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIH1cblxuICAgIC8vIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpID49IChzdGFydFAudG9wIC0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSkpIHtcbiAgICAgIHkgPSBzdGFydFAueSArIChzdGFydFAudG9wKSAtIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIH1cblxuICAgIC8vIC8vIExpbWl0IGZvciByaWdodFxuICAgIGlmICgoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSArIChjYW52YXMud2lkdGgpIC0gKHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSkgPD0gY29uZmlnLndpZHRoIC8gc2NhbGVGaXgpIHtcbiAgICAgIHggPSBzdGFydFAueCArIChzdGFydFAubGVmdCkgKyAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSAtIGNhbnZhcy53aWR0aDtcbiAgICB9XG5cbiAgICAvLyAvLyBMaW1pdCBmb3IgYm90dG9tXG4gICAgaWYgKCgoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCkgKyAoY2FudmFzLmhlaWdodCkgLSAoc3RhcnRQLnRvcCAtIChldmVudC5kZWx0YVkgLyBzY2FsZUZpeCkpKSA8PSAoY29uZmlnLmhlaWdodCAvIHNjYWxlRml4KSkge1xuICAgICAgeSA9IHN0YXJ0UC55ICsgKHN0YXJ0UC50b3ApICsgKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpIC0gY2FudmFzLmhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHByZXNzIHNoaWZ0S2V5LCBkZXByZWNhdGVkXG4gICAgLy8gaWYgKGV2ZW50LnNyY0V2ZW50ICYmIGV2ZW50LnNyY0V2ZW50LnNoaWZ0S2V5KSB7XG4gICAgLy8gICBpZiAoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA9PT0gTWF0aC5tYXgoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSwgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSkpIHtcbiAgICAvLyAgICAgeSA9IHRoaXMub2Zmc2V0LnRvcDtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHggPSB0aGlzLm9mZnNldC5sZWZ0O1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGlmICh4ID09PSB2b2lkIDApIHsgeCA9IChldmVudC5kZWx0YVggLyBzY2FsZUZpeCkgKyAodGhpcy5vZmZzZXQueCk7IH1cbiAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpICsgKHRoaXMub2Zmc2V0LnkpOyB9XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbih4PzogbnVtYmVyLCB5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgIGNvbnN0IGNyb3BwaW5nQ29udGFpbmVyUmVjdCA9IHRoaXMuX2FyZWFDcm9wcGVyUmVjdCgpO1xuICAgIGlmICh4ID09PSB2b2lkIDAgJiYgeSA9PT0gdm9pZCAwKSB7XG4gICAgICB4ID0gdGhpcy5faW1nUmVjdC54YztcbiAgICAgIHkgPSB0aGlzLl9pbWdSZWN0LnljO1xuICAgIH1cbiAgICB4ID0gKGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueCkgLSAoeCAtICh0aGlzLmNvbmZpZy53aWR0aCAvIDIpKTtcbiAgICB5ID0gKGNyb3BwaW5nQ29udGFpbmVyUmVjdC55IC0gaG9zdFJlY3QueSkgLSAoeSAtICh0aGlzLmNvbmZpZy5oZWlnaHQgLyAyKSk7XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICBfc2xpZGVFbmQoKSB7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nyb3BJZkF1dG9Dcm9wKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvQ3JvcCkge1xuICAgICAgdGhpcy5jcm9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqKyAqL1xuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCArIC4wNTtcbiAgICBpZiAoc2NhbGUgPiAwICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNjYWxlKDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhbiB0aGUgaW1nIGNyb3BwZXIgKi9cbiAgY2xlYW4oKSB7XG4gICAgdGhpcy5faW1nUmVjdCA9IHsgfSBhcyBhbnk7XG4gICAgdGhpcy5vZmZzZXQgPSBudWxsO1xuICAgIHRoaXMuc2NhbGUgPSBudWxsO1xuICAgIHRoaXMuX3NjYWwzRml4ID0gbnVsbDtcbiAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XG4gICAgdGhpcy5fbWluU2NhbGUgPSBudWxsO1xuICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gbnVsbDtcbiAgICB0aGlzLl9pc0xvYWRlZEltZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0ID0gbnVsbDtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjYW52YXMud2lkdGggPSAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSAwO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiotICovXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCAtIC4wNTtcbiAgICBpZiAoc2NhbGUgPiB0aGlzLm1pblNjYWxlICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpdCgpO1xuICAgIH1cbiAgfVxuICBjZW50ZXIoKSB7XG4gICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgLi4udGhpcy5fZ2V0Q2VudGVyUG9pbnRzKClcbiAgICB9O1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcobmV3U3R5bGVzKTtcbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbiAgLyoqIFNldCBJbWcgKi9cbiAgc2V0SW1hZ2VVcmwoc3JjOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsZWFuKCk7XG4gICAgdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQgPSBzcmM7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xuICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckV2ZW50ID0ge1xuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWUsXG4gICAgICB0eXBlOiB0aGlzLl9kZWZhdWx0VHlwZSxcbiAgICAgIGRhdGFVUkw6IG51bGwsXG4gICAgICBiYXNlNjQ6IG51bGwsXG4gICAgICB3aWR0aDogbnVsbCxcbiAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgIHNjYWxlOiBudWxsLFxuICAgICAgb3JpZ2luYWxEYXRhVVJMOiBzcmMsXG4gICAgICByb3RhdGlvbjogbnVsbCxcbiAgICAgIHBvc2l0aW9uOiBudWxsXG4gICAgfTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgIHRoaXMuZXJyb3IuZW1pdChjcm9wRXZlbnQpO1xuICAgIH0pO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgdGhpcy5faW1nTG9hZGVkKGltZyk7XG4gICAgICBjcm9wRXZlbnQud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICBjcm9wRXZlbnQuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgIHRoaXMuX2lzTG9hZGVkSW1nID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9uZ1pvbmVcbiAgICAgICAgICAub25TdGFibGVcbiAgICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldFNjYWxlKDAsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICByb3RhdGUoZGVncmVlczogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsaWREZWdyZWVzID0gdGhpcy5fcm90YXRpb24gPSBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoZGVncmVlcyk7XG4gICAgY29uc3QgZGVncmVlc1JhZCA9IHZhbGlkRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY2FudmFzQ2xvbiA9IGNyZWF0ZUNhbnZhc0ltZyhjYW52YXMpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgLy8gY2xlYXJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0Nsb24ud2lkdGgsIGNhbnZhc0Nsb24uaGVpZ2h0KTtcblxuICAgIC8vIHJvdGF0ZSBjYW52YXMgaW1hZ2VcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjYW52YXMsICd0cmFuc2Zvcm0nLCBgcm90YXRlKCR7dmFsaWREZWdyZWVzfWRlZykgc2NhbGUoJHsxIC8gdGhpcy5fc2NhbDNGaXh9KWApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybU9yaWdpbicsIGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgKTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuXG4gICAgLy8gc2F2ZSByZWN0XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIHJlbW92ZSByb3RhdGUgc3R5bGVzXG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtT3JpZ2luJyk7XG5cbiAgICAvLyBzZXQgdyAmIGhcblxuICAgIGNvbnN0IHcgPSBjYW52YXNSZWN0LndpZHRoO1xuICAgIGNvbnN0IGggPSBjYW52YXNSZWN0LmhlaWdodDtcblxuICAgIGN0eC5jYW52YXMud2lkdGggPSB3O1xuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgIC8vIHRyYW5zbGF0ZSBhbmQgcm90YXRlXG4gICAgY3R4LnRyYW5zbGF0ZSh3IC8gMiwgaCAvIDIpO1xuICAgIGN0eC5yb3RhdGUoZGVncmVlc1JhZCk7XG4gICAgY3R4LmRyYXdJbWFnZShjYW52YXNDbG9uLCAtY2FudmFzQ2xvbi53aWR0aCAvIDIsIC1jYW52YXNDbG9uLmhlaWdodCAvIDIpO1xuICAgIGNvbnN0IHJvb3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcblxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeDogKHggLSByb290UmVjdC54KSxcbiAgICAgIHk6ICh5IC0gcm9vdFJlY3QueSlcbiAgICB9KTtcblxuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIGltYWdlU21vb3RoaW5nUXVhbGl0eShpbWc6IEhUTUxDYW52YXNFbGVtZW50LCBjb25maWcsIHF1YWxpdHk6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICAvKiogQ2FsY3VsYXRlIHRvdGFsIG51bWJlciBvZiBzdGVwcyBuZWVkZWQgKi9cbiAgICBsZXQgIG51bVN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKE1hdGgubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCkgLyBNYXRoLm1heChjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpKSAvIE1hdGgubG9nKDIpKSAtIDE7XG4gICAgbnVtU3RlcHMgPSBudW1TdGVwcyA8PSAwID8gMCA6IG51bVN0ZXBzO1xuXG4gICAgLyoqQXJyYXkgc3RlcHMgKi9cbiAgICBjb25zdCBzdGVwcyA9IEFycmF5LmZyb20oQXJyYXkobnVtU3RlcHMpLmtleXMoKSk7XG5cbiAgICAvKiogQ29udGV4dCAqL1xuICAgIGNvbnN0IG9jdHggPSBpbWcuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHEgPSAoKHF1YWxpdHkgKiAxMCkgKiogbnVtU3RlcHMpIC8gKDEwICoqIG51bVN0ZXBzKTtcbiAgICBjb25zdCBmaWxlVHlwZSA9IHRoaXMuX2RlZmF1bHRUeXBlO1xuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cbiAgICBpZiAobnVtU3RlcHMpIHtcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cbiAgICAgIGlmICh0aGlzLl9kZWZhdWx0VHlwZSA9PT0gJ2ltYWdlL3BuZycgfHwgZmlsZVR5cGUgPT09ICdpbWFnZS9zdmcreG1sJykge1xuICAgICAgICBvY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcbiAgICAgIH1cblxuICAgICAgLyoqIFN0ZXBzICovXG4gICAgICAoc3RlcHMgYXMgQXJyYXk8bnVtYmVyPikuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcbiAgICAgICAgICAwLCAwLFxuICAgICAgICAgIHcsIGhcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0ZXAgZmluYWxcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAgICovXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAwLCAwLFxuICAgICAgaW1nLndpZHRoICogcSwgaW1nLmhlaWdodCAqIHEsXG4gICAgICAwLCAwLFxuICAgICAgb2Mud2lkdGgsIG9jLmhlaWdodFxuICAgICk7XG4gICAgcmV0dXJuIG9jO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgSW1hZ2VcbiAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgKi9cbiAgY3JvcChjb25maWc/OiBJbWdDcm9wcGVyQ29uZmlnKTogSW1nQ3JvcHBlckV2ZW50IHtcbiAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWcgPyBtZXJnZURlZXAoe30sIHRoaXMuY29uZmlnIHx8IENPTkZJR19ERUZBVUxULCBjb25maWcpIDogdGhpcy5jb25maWc7XG4gICAgY29uc3QgY3JvcEV2ZW50ID0gdGhpcy5faW1nQ3JvcChuZXdDb25maWcpO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2ltZ0Nyb3AobXlDb25maWc6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGltZ1JlY3QgPSB0aGlzLl9pbWdSZWN0O1xuICAgIGNvbnN0IHNjYWxlRml4ID0gdGhpcy5fc2NhbDNGaXg7XG4gICAgY29uc3QgbGVmdCA9IGltZ1JlY3QueGMgLSAobXlDb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIGNvbnN0IHRvcCA9IGltZ1JlY3QueWMgLSAobXlDb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICB3aWR0aDogbXlDb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IG15Q29uZmlnLmhlaWdodFxuICAgIH07XG4gICAgY2FudmFzRWxlbWVudC53aWR0aCA9IGNvbmZpZy53aWR0aCAvIHNjYWxlRml4O1xuICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCAvIHNjYWxlRml4O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAobXlDb25maWcuZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG15Q29uZmlnLmZpbGw7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xuICAgIH1cbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50IGFzIGFueSxcbiAgICAgIC0obGVmdCksIC0odG9wKSxcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGFudGlBbGlhc2VkUSA9IG15Q29uZmlnLmFudGlBbGlhc2VkID8gLjUgOiAxO1xuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCBhbnRpQWxpYXNlZFEpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCBhbnRpQWxpYXNlZFEpO1xuICAgIH1cbiAgICBsZXQgdXJsO1xuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGBpbWFnZS8ke215Q29uZmlnLnR5cGV9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5fZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgICBjb25zdCBjcm9wRXZlbnQgPSB7XG4gICAgICBkYXRhVVJMOiB1cmwsXG4gICAgICBiYXNlNjQ6IHVybCxcbiAgICAgIHR5cGU6IHRoaXMuX2RlZmF1bHRUeXBlIHx8IG15Q29uZmlnLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHQsXG4gICAgICBvcmlnaW5hbERhdGFVUkw6IHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0LFxuICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICByb3RhdGlvbjogdGhpcy5fcm90YXRpb24sXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiB0aGlzLl9pbWdSZWN0LnhjLFxuICAgICAgICB5OiB0aGlzLl9pbWdSZWN0LnljXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfcm9vdFJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cblxuICBwcml2YXRlIF9hcmVhQ3JvcHBlclJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2Nyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgfVxuXG59XG5cbi8qKlxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDQ1KSA9PT0gOTBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyg0MCkgPT09IDBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcygxMDApID09PSA5MFxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMobnVtOiBudW1iZXIpIHtcbiAgY29uc3QgdmFsMzYwID0gbGltaXROdW0obnVtLCAzNjApO1xuICBjb25zdCB2YWw5MCA9IGxpbWl0TnVtKHZhbDM2MC5yZXN1bHQsIDkwKTtcbiAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbihudW0pO1xuICBpZiAodmFsOTAucmVzdWx0ID49ICg5MCAvIDIpKSB7XG4gICAgcmV0dXJuIDkwICogKHZhbDkwLnBhcnRzICsgMSkgKiBzaWduO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA5MCAqIHZhbDkwLnBhcnRzICogc2lnbjtcbiAgfVxufVxuXG4vKipcbiAqIGRlbW86XG4gKiBsaW1pdE51bSg0NTAsIDM2MCkgPT09IDkwXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGxpbWl0TnVtKG51bTogbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcbiAgY29uc3QgbnVtQWJzID0gTWF0aC5hYnMobnVtKTtcbiAgY29uc3QgcGFydHMgPSBNYXRoLmZsb29yKG51bUFicyAvIG51bTIpO1xuICBsZXQgcmVzdWx0OiBudW1iZXI7XG4gIGlmIChwYXJ0cykge1xuICAgIHJlc3VsdCA9IG51bUFicyAtIChudW0yICogcGFydHMpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IG51bTtcbiAgfVxuICBpZiAobnVtQWJzICE9PSBudW0pIHtcbiAgICByZXN1bHQgKj0gLTE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXN1bHQsXG4gICAgcGFydHNcbiAgfTtcbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhbnZhc0ltZyhpbWc6IEhUTUxDYW52YXNFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudCkge1xuXG4gIC8vIGNyZWF0ZSBhIG5ldyBjYW52YXNcbiAgY29uc3QgbmV3Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAvLyBzZXQgZGltZW5zaW9uc1xuICBuZXdDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gIG5ld0NhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuXG4gIC8vIGFwcGx5IHRoZSBvbGQgY2FudmFzIHRvIHRoZSBuZXcgb25lXG4gIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG5cbiAgLy8gcmV0dXJuIHRoZSBuZXcgY2FudmFzXG4gIHJldHVybiBuZXdDYW52YXM7XG59XG4iXX0=