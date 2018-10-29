/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2 } from '@angular/core';
import { LyTheme2, mergeDeep, LY_COMMON_STYLES } from '@alyle/ui';
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
        '& > img': {
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
/**
 * @record
 */
export function LyResizingCroppingImagesConfig() { }
/**
 * Cropper area width
 * @type {?}
 */
LyResizingCroppingImagesConfig.prototype.width;
/**
 * Cropper area height
 * @type {?}
 */
LyResizingCroppingImagesConfig.prototype.height;
/**
 * If this is not defined, the new image will be automatically defined
 * @type {?|undefined}
 */
LyResizingCroppingImagesConfig.prototype.type;
/**
 * Background color( default: null), if is null in png is transparent but not in jpg
 * @type {?|undefined}
 */
LyResizingCroppingImagesConfig.prototype.fill;
/**
 * Set anti-aliased( default: true)
 * @type {?|undefined}
 */
LyResizingCroppingImagesConfig.prototype.antiAliased;
/** @type {?|undefined} */
LyResizingCroppingImagesConfig.prototype.output;
/** @typedef {?} */
var ImgCropperConfig;
export { ImgCropperConfig };
/** @enum {number} */
var ImgResolution = {
    /** Resizing & cropping */
    Default: 0,
    /** Only cropping */
    OriginalImage: 1,
};
export { ImgResolution };
ImgResolution[ImgResolution.Default] = 'Default';
ImgResolution[ImgResolution.OriginalImage] = 'OriginalImage';
/** @enum {number} */
var ImageResolution = {
    /** Resizing & cropping */
    Default: 0,
    /** Only cropping */
    OriginalImage: 1,
};
export { ImageResolution };
ImageResolution[ImageResolution.Default] = 'Default';
ImageResolution[ImageResolution.OriginalImage] = 'OriginalImage';
/** @typedef {?} */
var CroppedImage;
export { CroppedImage };
/**
 * @record
 */
export function ImgCropperEvent() { }
/**
 * \@deprecated, use `base64` instead
 * @type {?}
 */
ImgCropperEvent.prototype.base64Image;
/** @type {?} */
ImgCropperEvent.prototype.base64;
/** @type {?} */
ImgCropperEvent.prototype.name;
/** @type {?} */
ImgCropperEvent.prototype.type;
/** @type {?} */
ImgCropperEvent.prototype.width;
/** @type {?} */
ImgCropperEvent.prototype.height;
/**
 * @record
 */
export function ImageState() { }
/** @type {?} */
ImageState.prototype.isLoaded;
/** @type {?} */
ImageState.prototype.isCrop;
/** @type {?} */
const CONFIG_DEFAULT = /** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImgResolution.Default,
    antiAliased: true
});
export class LyResizingCroppingImages {
    /**
     * @param {?} _renderer
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} cd
     */
    constructor(_renderer, theme, elementRef, cd) {
        this._renderer = _renderer;
        this.theme = theme;
        this.elementRef = elementRef;
        this.cd = cd;
        /**
         * styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
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
     * Get current scale
     * @return {?}
     */
    get scale() {
        return this._scale;
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
            /** *
             * set zoom scale
              @type {?} */
            const minScale = {
                width: this.config.width / this._img.width * 100,
                height: this.config.height / this._img.height * 100
            };
            this._minScale = Math.max(minScale.width, minScale.height) / 100;
            this.fit();
            this.cd.markForCheck();
        }
    }
    /**
     * @param {?} newStyles
     * @return {?}
     */
    _setStylesForContImg(newStyles) {
        for (const key in newStyles) {
            if (newStyles.hasOwnProperty(key)) {
                this._renderer.setStyle(this._imgContainer.nativeElement, key, newStyles[key]);
            }
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
        this.isLoaded = false;
        this.isCropped = false;
        fileReader.addEventListener('loadend', (loadEvent) => {
            /** @type {?} */
            const originalImageUrl = /** @type {?} */ ((/** @type {?} */ (loadEvent.target)).result);
            this._setImageUrl(originalImageUrl);
            this.cd.markForCheck();
        });
        fileReader.readAsDataURL(_img.files[0]);
    }
    /**
     * Set the size of the image, the values can be 0 between 1, where 1 is the original size
     * @param {?} size
     * @return {?}
     */
    setScale(size) {
        // fix min scale
        size = size > this.minScale && size <= 1 ? size : this.minScale;
        this._scale = size;
        size = size * 100;
        /** @type {?} */
        const initialImg = this._img;
        /** @type {?} */
        const width = fixedNum(initialImg.width * size / 100);
        /** @type {?} */
        const height = fixedNum(initialImg.height * size / 100);
        /** @type {?} */
        const hostRect = /** @type {?} */ (this.elementRef.nativeElement.getBoundingClientRect());
        if (!this.isLoaded) {
            this._setStylesForContImg({
                width: `${width}px`,
                height: `${height}px`,
                transform: this.customCenter(width, height)
            });
        }
        else {
            /** @type {?} */
            const imgContainerRect = /** @type {?} */ (this._imgContainer.nativeElement.getBoundingClientRect());
            this.offset = {
                x: (hostRect.width / 2) - (imgContainerRect.x - hostRect.x),
                // ✓
                y: (hostRect.height / 2) - (imgContainerRect.y - hostRect.y),
                // ✓
                left: imgContainerRect.left - hostRect.x,
                // ✓
                top: imgContainerRect.top - hostRect.y // ✓
            };
            this._setStylesForContImg(/** @type {?} */ ({
                width: `${width}px`,
                height: `${height}px`,
            }));
            this._move({
                srcEvent: {},
                center: {
                    x: (hostRect.width / 2 - (this.offset.x * (width / imgContainerRect.width))) + hostRect.x + this.offset.x,
                    y: (hostRect.height / 2 - (this.offset.y * (height / imgContainerRect.height))) + hostRect.y + this.offset.y
                }
            });
        }
    }
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    customCenter(width, height) {
        /** @type {?} */
        const root = /** @type {?} */ (this.elementRef.nativeElement);
        /** @type {?} */
        const l = (root.offsetWidth - width) / 2;
        /** @type {?} */
        const r = (root.offsetHeight - height) / 2;
        return `translate3d(${l}px, ${r}px, 0)`;
    }
    /**
     * @ignore \@deprecated, instead use setScale(1)
     * @return {?}
     */
    '1:1'() {
        this.setScale(1);
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
        /** @type {?} */
        const size = {
            width: this._img.width,
            height: this._img.height
        };
        /** @type {?} */
        const minScale = {
            width: min.width / size.width * 100,
            height: min.height / size.height * 100
        };
        /** @type {?} */
        const result = Math.max(minScale.width, minScale.height) / 100;
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
        const hostRect = /** @type {?} */ (this.elementRef.nativeElement.getBoundingClientRect());
        /** @type {?} */
        const imgContainerRect = /** @type {?} */ (this._imgContainer.nativeElement.getBoundingClientRect());
        this.offset = {
            x: event.center.x - imgContainerRect.x,
            y: event.center.y - imgContainerRect.y,
            left: imgContainerRect.left - hostRect.x,
            top: imgContainerRect.top - hostRect.y
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
        const hostRect = /** @type {?} */ (this.elementRef.nativeElement.getBoundingClientRect());
        /** @type {?} */
        const imgContainerRect = /** @type {?} */ (this._imgContainer.nativeElement.getBoundingClientRect());
        /** @type {?} */
        const croppingContainerRect = /** @type {?} */ (this._croppingContainer.nativeElement.getBoundingClientRect());
        // Limit for left
        if (event.center.x - this.offset.x >= croppingContainerRect.x) {
            x = croppingContainerRect.x - hostRect.x;
        }
        // Limit for top
        if (event.center.y - this.offset.y >= croppingContainerRect.y) {
            y = croppingContainerRect.y - hostRect.y;
        }
        // Limit for right
        if (event.center.x - this.offset.x + imgContainerRect.width <= croppingContainerRect.x + croppingContainerRect.width) {
            x = croppingContainerRect.x - hostRect.x - imgContainerRect.width + croppingContainerRect.width;
        }
        // Limit for bottom
        if (event.center.y - this.offset.y + imgContainerRect.height <= croppingContainerRect.y + croppingContainerRect.height) {
            y = croppingContainerRect.y - hostRect.y - imgContainerRect.height + croppingContainerRect.height;
        }
        // When press shiftKey
        if (event.srcEvent.shiftKey) {
            if (Math.abs(event.deltaX) === Math.max(Math.abs(event.deltaX), Math.abs(event.deltaY))) {
                y = this.offset.top;
            }
            else {
                x = this.offset.left;
            }
        }
        if (x === undefined) {
            x = event.center.x - hostRect.x - (this.offset.x);
        }
        if (y === undefined) {
            y = event.center.y - hostRect.y - (this.offset.y);
        }
        this._setStylesForContImg({
            width: this._imgContainer.nativeElement.offsetWidth,
            height: this._imgContainer.nativeElement.offsetHeight,
            transform: `translate3d(${x}px, ${y}px, 0)`
        });
    }
    /**
     * @param {?} num
     * @return {?}
     */
    roundNumber(num) {
        return Math.round(num * 100000) / 100000;
    }
    /**
     * +
     * @return {?}
     */
    zoomIn() {
        /** @type {?} */
        const scale = this.roundNumber(this._scale + .05);
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
        this.isLoaded = false;
        this.isCropped = false;
        this.cd.markForCheck();
    }
    /**
     * -
     * @return {?}
     */
    zoomOut() {
        /** @type {?} */
        const scale = this.roundNumber(this._scale - .05);
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
        const img = this._imgContainer.nativeElement.firstElementChild;
        /** @type {?} */
        const newStyles = {
            width: `${img.width}px`,
            height: `${img.height}px`,
            transform: this.customCenter(img.width, img.height)
        };
        this._setStylesForContImg(newStyles);
    }
    /**
     * @param {?} src
     * @return {?}
     */
    _setImageUrl(src) {
        this.src = src;
        if (!src) {
            return;
        }
        /** @type {?} */
        const img = new Image;
        /** @type {?} */
        const cropEvent = {
            name: this._fileName,
            type: this._defaultType,
            base64: null,
            base64Image: null,
            width: null,
            height: null
        };
        img.src = src;
        img.addEventListener('error', (err) => {
            this.error.emit(cropEvent);
        });
        img.addEventListener('load', () => {
            this._imgLoaded(img);
            cropEvent.width = img.width;
            cropEvent.height = img.height;
            this.loaded.emit(cropEvent);
            this.isLoaded = true;
            this.cd.markForCheck();
        });
    }
    /**
     * @param {...?} values
     * @return {?}
     */
    max(...values) {
        return Math.max(...values);
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
        let numSteps = Math.ceil(Math.log(this.max(img.width, img.height) / this.max(config.height, config.width)) / Math.log(2)) - 1;
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
        const q = Math.pow(quality * 10, numSteps) / Math.pow(10, numSteps);
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
            (/** @type {?} */ (steps)).forEach((a, b) => {
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
        const cropEvent = this.cropp(newConfig);
        return cropEvent;
    }
    /**
     * @ignore \@deprecated, use crop() instead
     * @param {?} myConfig
     * @return {?}
     */
    cropp(myConfig) {
        /** @type {?} */
        const canvasElement = document.createElement('canvas');
        /** @type {?} */
        const rect = /** @type {?} */ (this._croppingContainer.nativeElement.getBoundingClientRect());
        /** @type {?} */
        const img = /** @type {?} */ (this._imgContainer.nativeElement.firstElementChild.getBoundingClientRect());
        /** @type {?} */
        const left = rect.left - img.left;
        /** @type {?} */
        const top = rect.top - img.top;
        /** @type {?} */
        const config = {
            width: myConfig.width,
            height: myConfig.height
        };
        canvasElement.width = config.width / this._scale;
        canvasElement.height = config.height / this._scale;
        /** @type {?} */
        const ctx = canvasElement.getContext('2d');
        if (myConfig.fill) {
            ctx.fillStyle = myConfig.fill;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        ctx.drawImage(this._img, -(left / this._scale), -(top / this._scale));
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
        this.result = (url);
        /** @type {?} */
        const cropEvent = {
            base64Image: url,
            base64: url,
            type: this._defaultType || myConfig.type,
            name: this._fileName,
            width: config.width,
            height: config.height
        };
        this.cropped.emit(cropEvent);
        this.isCropped = true;
        return cropEvent;
    }
}
LyResizingCroppingImages.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'ly-img-cropper, ly-cropping',
                template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart($event)\"\n(slide)=\"_move($event)\">\n  <img *ngIf=\"isLoaded\" [src]=\"src\">\n</div>\n<div #_croppingContainer *ngIf=\"isLoaded; else content\" [className]=\"classes.croppingContainer\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.croppContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
LyResizingCroppingImages.ctorParameters = () => [
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
LyResizingCroppingImages.propDecorators = {
    _imgContainer: [{ type: ViewChild, args: ['_imgContainer',] }],
    _croppingContainer: [{ type: ViewChild, args: ['_croppingContainer',] }],
    src: [{ type: Input }],
    config: [{ type: Input }],
    loaded: [{ type: Output }],
    cropped: [{ type: Output }],
    error: [{ type: Output }]
};
if (false) {
    /**
     * styles
     * @ignore
     * @type {?}
     */
    LyResizingCroppingImages.prototype.classes;
    /**
     * @deprecated
     * @type {?}
     */
    LyResizingCroppingImages.prototype.result;
    /** @type {?} */
    LyResizingCroppingImages.prototype._fileName;
    /** @type {?} */
    LyResizingCroppingImages.prototype._img;
    /** @type {?} */
    LyResizingCroppingImages.prototype.offset;
    /** @type {?} */
    LyResizingCroppingImages.prototype._scale;
    /** @type {?} */
    LyResizingCroppingImages.prototype._minScale;
    /** @type {?} */
    LyResizingCroppingImages.prototype._config;
    /** @type {?} */
    LyResizingCroppingImages.prototype._imgContainer;
    /** @type {?} */
    LyResizingCroppingImages.prototype._croppingContainer;
    /**
     * @deprecated \@ignore
     * @type {?}
     */
    LyResizingCroppingImages.prototype.src;
    /** @type {?} */
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
}
/** *
 * @ignore
  @type {?} */
const fixedNum = (num) => parseFloat(num.toFixed(0));
const ɵ0 = fixedNum;
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUVsRSxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsTUFBTSxNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFDUCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsYUFBYSxFQUFFLE1BQU07U0FDdEI7S0FDRjtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGFBQWEsRUFBRSxNQUFNO1FBQ3JCLFNBQVMsRUFBRSxr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QUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsdWxCQUE0QzthQUM1Qzs7OztZQTdIQSxTQUFTO1lBRUYsUUFBUTtZQVRmLFVBQVU7WUFJVixpQkFBaUI7Ozs0QkFpSmhCLFNBQVMsU0FBQyxlQUFlO2lDQUN6QixTQUFTLFNBQUMsb0JBQW9CO2tCQUU5QixLQUFLO3FCQUNMLEtBQUs7cUJBbUJMLE1BQU07c0JBRU4sTUFBTTtvQkFFTixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJXVCxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIG1lcmdlRGVlcCwgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBpbWdDb250YWluZXI6IHtcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAnJiA+IGltZyc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9XG4gIH0sXG4gIGNyb3BwaW5nQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJzAgMCAwIDIwMDAwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBjb250ZW50OiBgJydgLFxuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH1cbiAgfSxcbiAgY3JvcHBDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAnJiwgJiA+IGlucHV0JzogTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICcmICo6bm90KGlucHV0KSc6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgJyYgPiBpbnB1dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcge1xuICAvKiogQ3JvcHBlciBhcmVhIHdpZHRoKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqIENyb3BwZXIgYXJlYSBoZWlnaHQqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIEJhY2tncm91bmQgY29sb3IoIGRlZmF1bHQ6IG51bGwpLCBpZiBpcyBudWxsIGluIHBuZyBpcyB0cmFuc3BhcmVudCBidXQgbm90IGluIGpwZyAqL1xuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIFNldCBhbnRpLWFsaWFzZWQoIGRlZmF1bHQ6IHRydWUpICovXG4gIGFudGlBbGlhc2VkPzogYm9vbGVhbjtcbiAgb3V0cHV0Pzoge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gIH0gfCBJbWFnZVJlc29sdXRpb24gfCBJbWdSZXNvbHV0aW9uO1xufVxuZXhwb3J0IHR5cGUgSW1nQ3JvcHBlckNvbmZpZyA9IEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZztcblxuLyoqIEltYWdlIG91dHB1dCAqL1xuZXhwb3J0IGVudW0gSW1nUmVzb2x1dGlvbiB7XG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXG4gIERlZmF1bHQsXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXG4gIE9yaWdpbmFsSW1hZ2Vcbn1cbi8qKiBAaWdub3JlIEBkZXByZWNhdGVkLCB1c2UgYEltZ1Jlc29sdXRpb25gIGluc3RlYWQgKi9cbmV4cG9ydCBlbnVtIEltYWdlUmVzb2x1dGlvbiB7XG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXG4gIERlZmF1bHQsXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXG4gIE9yaWdpbmFsSW1hZ2Vcbn1cblxuLyoqIEBkZXByZWNhdGVkLCB1c2UgYEltZ0Nyb3BwZXJFdmVudGAgaW5zdGVhZCAqL1xuZXhwb3J0IHR5cGUgQ3JvcHBlZEltYWdlID0gSW1nQ3JvcHBlckV2ZW50O1xuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyRXZlbnQge1xuICAvKiogQGRlcHJlY2F0ZWQsIHVzZSBgYmFzZTY0YCBpbnN0ZWFkICovXG4gIGJhc2U2NEltYWdlOiBzdHJpbmc7XG4gIGJhc2U2NDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEltYWdlU3RhdGUge1xuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgaXNDcm9wOiBib29sZWFuO1xufVxuY29uc3QgQ09ORklHX0RFRkFVTFQgPSA8SW1nQ3JvcHBlckNvbmZpZz57XG4gIHdpZHRoOiAyNTAsXG4gIGhlaWdodDogMjAwLFxuICBvdXRwdXQ6IEltZ1Jlc29sdXRpb24uRGVmYXVsdCxcbiAgYW50aUFsaWFzZWQ6IHRydWVcbn07XG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ2x5LWltZy1jcm9wcGVyLCBseS1jcm9wcGluZycsXG4gIHRlbXBsYXRlVXJsOiAncmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmh0bWwnXG4gfSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICByZXN1bHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsZU5hbWU6IHN0cmluZztcblxuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHByaXZhdGUgb2Zmc2V0OiB7eDogbnVtYmVyLCB5OiBudW1iZXIsIGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9O1xuICBwcml2YXRlIF9zY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9taW5TY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9jb25maWc6IEltZ0Nyb3BwZXJDb25maWc7XG5cbiAgQFZpZXdDaGlsZCgnX2ltZ0NvbnRhaW5lcicpIF9pbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19jcm9wcGluZ0NvbnRhaW5lcicpIF9jcm9wcGluZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgLyoqIEBkZXByZWNhdGVkIEBpZ25vcmUgKi9cbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGdldCBjb25maWcoKTogSW1nQ3JvcHBlckNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbDogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IG1lcmdlRGVlcCh7fSwgQ09ORklHX0RFRkFVTFQsIHZhbCk7XG4gIH1cbiAgLyoqIEdldCBjdXJyZW50IHNjYWxlICovXG4gIGdldCBzY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY2FsZTtcbiAgfVxuICAvKiogR2V0IG1pbiBzY2FsZSAqL1xuICBnZXQgbWluU2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gIH1cbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzQ3JvcHBlZDogYm9vbGVhbjtcblxuICAvKiogT24gbG9hZGVkIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgY3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogRW1pdCBhbiBlcnJvciB3aGVuIHRoZSBsb2FkZWQgaW1hZ2UgaXMgbm90IHZhbGlkICovXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuXG4gIHByaXZhdGUgX2RlZmF1bHRUeXBlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ltZ0xvYWRlZChpbWdFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgaWYgKGltZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2ltZyA9IGltZ0VsZW1lbnQ7XG4gICAgICAvKiogc2V0IHpvb20gc2NhbGUgKi9cbiAgICAgIGNvbnN0IG1pblNjYWxlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyB0aGlzLl9pbWcud2lkdGggKiAxMDAsXG4gICAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0IC8gdGhpcy5faW1nLmhlaWdodCAqIDEwMFxuICAgICAgfTtcbiAgICAgIHRoaXMuX21pblNjYWxlID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDA7XG4gICAgICB0aGlzLmZpdCgpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZXNGb3JDb250SW1nKG5ld1N0eWxlczoge1xuICAgIHdpZHRoOiBzdHJpbmc7XG4gICAgaGVpZ2h0OiBzdHJpbmc7XG4gICAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIH0pIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdTdHlsZXMpIHtcbiAgICAgIGlmIChuZXdTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudCwga2V5LCBuZXdTdHlsZXNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0SW5wdXRFdmVudChpbWc6IEV2ZW50KSB7XG4gICAgY29uc3QgX2ltZyA9IGltZy50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgdGhpcy5fZmlsZU5hbWUgPSBfaW1nLnZhbHVlLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKTtcblxuICAgIC8qKiBTZXQgdHlwZSAqL1xuICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gbnVsbDtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnR5cGUpIHtcbiAgICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gX2ltZy5maWxlc1swXS50eXBlO1xuICAgIH1cbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcbiAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCAobG9hZEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEltYWdlVXJsID0gKGxvYWRFdmVudC50YXJnZXQgYXMgRmlsZVJlYWRlcikucmVzdWx0IGFzIHN0cmluZztcbiAgICAgIHRoaXMuX3NldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlc1swXSk7XG4gIH1cblxuICAvKiogU2V0IHRoZSBzaXplIG9mIHRoZSBpbWFnZSwgdGhlIHZhbHVlcyBjYW4gYmUgMCBiZXR3ZWVuIDEsIHdoZXJlIDEgaXMgdGhlIG9yaWdpbmFsIHNpemUgKi9cbiAgc2V0U2NhbGUoc2l6ZTogbnVtYmVyKSB7XG4gICAgLy8gZml4IG1pbiBzY2FsZVxuICAgIHNpemUgPSBzaXplID4gdGhpcy5taW5TY2FsZSAmJiBzaXplIDw9IDEgPyBzaXplIDogdGhpcy5taW5TY2FsZTtcbiAgICB0aGlzLl9zY2FsZSA9IHNpemU7XG4gICAgc2l6ZSA9IHNpemUgKiAxMDA7XG4gICAgY29uc3QgaW5pdGlhbEltZyA9IHRoaXMuX2ltZztcbiAgICBjb25zdCB3aWR0aCA9IGZpeGVkTnVtKGluaXRpYWxJbWcud2lkdGggKiBzaXplIC8gMTAwKTtcbiAgICBjb25zdCBoZWlnaHQgPSBmaXhlZE51bShpbml0aWFsSW1nLmhlaWdodCAqIHNpemUgLyAxMDApO1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBpZiAoIXRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIod2lkdGgsIGhlaWdodClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbWdDb250YWluZXJSZWN0ID0gdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICB4OiAoaG9zdFJlY3Qud2lkdGggLyAyKSAtIChpbWdDb250YWluZXJSZWN0LnggLSBob3N0UmVjdC54KSwgLy8g4pyTXG4gICAgICAgIHk6IChob3N0UmVjdC5oZWlnaHQgLyAyKSAtIChpbWdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55KSwgLy8g4pyTXG4gICAgICAgIGxlZnQ6IGltZ0NvbnRhaW5lclJlY3QubGVmdCAtIGhvc3RSZWN0LngsIC8vIOKck1xuICAgICAgICB0b3A6IGltZ0NvbnRhaW5lclJlY3QudG9wIC0gaG9zdFJlY3QueSAvLyDinJNcbiAgICAgIH07XG4gICAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgfSBhcyBhbnkpO1xuICAgICAgdGhpcy5fbW92ZSh7XG4gICAgICAgIHNyY0V2ZW50OiB7fSxcbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgeDogKGhvc3RSZWN0LndpZHRoIC8gMiAtICh0aGlzLm9mZnNldC54ICogKHdpZHRoIC8gaW1nQ29udGFpbmVyUmVjdC53aWR0aCkpKSArIGhvc3RSZWN0LnggKyB0aGlzLm9mZnNldC54LFxuICAgICAgICAgIHk6IChob3N0UmVjdC5oZWlnaHQgLyAyIC0gKHRoaXMub2Zmc2V0LnkgKiAoaGVpZ2h0IC8gaW1nQ29udGFpbmVyUmVjdC5oZWlnaHQpKSkgKyBob3N0UmVjdC55ICsgdGhpcy5vZmZzZXQueVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjdXN0b21DZW50ZXIod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgbCA9IChyb290Lm9mZnNldFdpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICBjb25zdCByID0gKHJvb3Qub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgcmV0dXJuIGB0cmFuc2xhdGUzZCgke2x9cHgsICR7cn1weCwgMClgO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgQGRlcHJlY2F0ZWQsIGluc3RlYWQgdXNlIHNldFNjYWxlKDEpICovXG4gICcxOjEnKCkge1xuICAgIHRoaXMuc2V0U2NhbGUoMSk7XG4gIH1cblxuICAvKipcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXG4gICAqL1xuICBmaXRUb1NjcmVlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBtaW4gPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBzaXplID0ge1xuICAgICAgd2lkdGg6IHRoaXMuX2ltZy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faW1nLmhlaWdodFxuICAgIH07XG4gICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gc2l6ZS53aWR0aCAqIDEwMCxcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIHNpemUuaGVpZ2h0ICogMTAwXG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMDtcbiAgICB0aGlzLnNldFNjYWxlKHJlc3VsdCk7XG4gIH1cblxuICBmaXQoKSB7XG4gICAgdGhpcy5zZXRTY2FsZSgwKTtcbiAgfVxuXG4gIF9tb3ZlU3RhcnQoZXZlbnQpIHtcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgY29uc3QgaW1nQ29udGFpbmVyUmVjdCA9IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICB4OiBldmVudC5jZW50ZXIueCAtIGltZ0NvbnRhaW5lclJlY3QueCxcbiAgICAgIHk6IGV2ZW50LmNlbnRlci55IC0gaW1nQ29udGFpbmVyUmVjdC55LFxuICAgICAgbGVmdDogaW1nQ29udGFpbmVyUmVjdC5sZWZ0IC0gaG9zdFJlY3QueCxcbiAgICAgIHRvcDogaW1nQ29udGFpbmVyUmVjdC50b3AgLSBob3N0UmVjdC55XG4gICAgfTtcbiAgfVxuICBfbW92ZShldmVudCkge1xuICAgIGxldCB4LCB5O1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBjb25zdCBpbWdDb250YWluZXJSZWN0ID0gdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBjb25zdCBjcm9wcGluZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG5cbiAgICAvLyBMaW1pdCBmb3IgbGVmdFxuICAgIGlmIChldmVudC5jZW50ZXIueCAtIHRoaXMub2Zmc2V0LnggPj0gY3JvcHBpbmdDb250YWluZXJSZWN0LngpIHtcbiAgICAgIHggPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0Lng7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoZXZlbnQuY2VudGVyLnkgLSB0aGlzLm9mZnNldC55ID49IGNyb3BwaW5nQ29udGFpbmVyUmVjdC55KSB7XG4gICAgICB5ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55O1xuICAgIH1cbiAgICAvLyBMaW1pdCBmb3IgcmlnaHRcbiAgICBpZiAoZXZlbnQuY2VudGVyLnggLSB0aGlzLm9mZnNldC54ICsgaW1nQ29udGFpbmVyUmVjdC53aWR0aCA8PSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC53aWR0aCkge1xuICAgICAgeCA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueCAtIGltZ0NvbnRhaW5lclJlY3Qud2lkdGggKyBjcm9wcGluZ0NvbnRhaW5lclJlY3Qud2lkdGg7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciBib3R0b21cbiAgICBpZiAoZXZlbnQuY2VudGVyLnkgLSB0aGlzLm9mZnNldC55ICsgaW1nQ29udGFpbmVyUmVjdC5oZWlnaHQgPD0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgKyBjcm9wcGluZ0NvbnRhaW5lclJlY3QuaGVpZ2h0KSB7XG4gICAgICB5ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55IC0gaW1nQ29udGFpbmVyUmVjdC5oZWlnaHQgKyBjcm9wcGluZ0NvbnRhaW5lclJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIFdoZW4gcHJlc3Mgc2hpZnRLZXlcbiAgICBpZiAoZXZlbnQuc3JjRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVgpID09PSBNYXRoLm1heChNYXRoLmFicyhldmVudC5kZWx0YVgpLCBNYXRoLmFicyhldmVudC5kZWx0YVkpKSkge1xuICAgICAgICB5ID0gdGhpcy5vZmZzZXQudG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeCA9IHRoaXMub2Zmc2V0LmxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHsgeCA9IGV2ZW50LmNlbnRlci54IC0gaG9zdFJlY3QueCAtICh0aGlzLm9mZnNldC54KTsgfVxuICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHsgeSA9IGV2ZW50LmNlbnRlci55IC0gaG9zdFJlY3QueSAtICh0aGlzLm9mZnNldC55KTsgfVxuXG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB3aWR0aDogdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAwKWBcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcm91bmROdW1iZXIobnVtOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiAxMDAwMDApIC8gMTAwMDAwO1xuICB9XG4gIC8qKisgKi9cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLl9zY2FsZSArIC4wNSk7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYW4gdGhlIGltZyBjcm9wcGVyICovXG4gIGNsZWFuKCkge1xuICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gbnVsbDtcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqLSAqL1xuICB6b29tT3V0KCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLl9zY2FsZSAtIC4wNSk7XG4gICAgaWYgKHNjYWxlID4gdGhpcy5taW5TY2FsZSAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXQoKTtcbiAgICB9XG4gIH1cbiAgY2VudGVyKCkge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHtpbWcud2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHtpbWcuaGVpZ2h0fXB4YCxcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxuICAgIH07XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyhuZXdTdHlsZXMpO1xuICB9XG4gIHByaXZhdGUgX3NldEltYWdlVXJsKHNyYzogc3RyaW5nKSB7XG4gICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgaWYgKCFzcmMpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xuICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckV2ZW50ID0ge1xuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWUsXG4gICAgICB0eXBlOiB0aGlzLl9kZWZhdWx0VHlwZSxcbiAgICAgIGJhc2U2NDogbnVsbCxcbiAgICAgIGJhc2U2NEltYWdlOiBudWxsLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGxcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCk7XG4gICAgfSk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbWdMb2FkZWQoaW1nKTtcbiAgICAgIGNyb3BFdmVudC53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgIGNyb3BFdmVudC5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgdGhpcy5sb2FkZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgbWF4KC4uLnZhbHVlczogbnVtYmVyW10pIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4udmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KGltZzogSFRNTENhbnZhc0VsZW1lbnQsIGNvbmZpZywgcXVhbGl0eTogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIC8qKiBDYWxjdWxhdGUgdG90YWwgbnVtYmVyIG9mIHN0ZXBzIG5lZWRlZCAqL1xuICAgIGxldCAgbnVtU3RlcHMgPSBNYXRoLmNlaWwoTWF0aC5sb2codGhpcy5tYXgoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KSAvIHRoaXMubWF4KGNvbmZpZy5oZWlnaHQsIGNvbmZpZy53aWR0aCkpIC8gTWF0aC5sb2coMikpIC0gMTtcbiAgICBudW1TdGVwcyA9IG51bVN0ZXBzIDw9IDAgPyAwIDogbnVtU3RlcHM7XG5cbiAgICAvKipBcnJheSBzdGVwcyAqL1xuICAgIGNvbnN0IHN0ZXBzID0gQXJyYXkuZnJvbShBcnJheShudW1TdGVwcykua2V5cygpKTtcblxuICAgIC8qKiBDb250ZXh0ICovXG4gICAgY29uc3Qgb2N0eCA9IGltZy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3QgcSA9IE1hdGgucG93KHF1YWxpdHkgKiAxMCwgbnVtU3RlcHMpIC8gTWF0aC5wb3coMTAsIG51bVN0ZXBzKTtcblxuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cbiAgICBpZiAobnVtU3RlcHMpIHtcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cbiAgICAgIG9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xuXG4gICAgICAvKiogU3RlcHMgKi9cbiAgICAgIChzdGVwcyBhcyBBcnJheTxudW1iZXI+KS5mb3JFYWNoKChhLCBiKSA9PiB7XG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcbiAgICAgICAgICAwLCAwLFxuICAgICAgICAgIHcsIGhcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0ZXAgZmluYWxcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAgICovXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAwLCAwLFxuICAgICAgaW1nLndpZHRoICogKHEpLCBpbWcuaGVpZ2h0ICogKHEpLFxuICAgICAgMCwgMCxcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcbiAgICApO1xuICAgIHJldHVybiBvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIEltYWdlXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICovXG4gIGNyb3AoY29uZmlnPzogSW1nQ3JvcHBlckNvbmZpZyk6IEltZ0Nyb3BwZXJFdmVudCB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnID8gbWVyZ2VEZWVwKHt9LCB0aGlzLmNvbmZpZyB8fCBDT05GSUdfREVGQVVMVCwgY29uZmlnKSA6IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHRoaXMuY3JvcHAobmV3Q29uZmlnKTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmUgQGRlcHJlY2F0ZWQsIHVzZSBjcm9wKCkgaW5zdGVhZFxuICAgKi9cbiAgY3JvcHAobXlDb25maWc6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLl9jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XG4gICAgY29uc3QgaW1nID0gdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcbiAgICBjb25zdCBsZWZ0ID0gcmVjdC5sZWZ0IC0gaW1nLmxlZnQ7XG4gICAgY29uc3QgdG9wID0gcmVjdC50b3AgLSBpbWcudG9wO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XG4gICAgfTtcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gdGhpcy5fc2NhbGU7XG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gdGhpcy5fc2NhbGU7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgfVxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nLFxuICAgICAgLShsZWZ0IC8gdGhpcy5fc2NhbGUpLCAtKHRvcCAvIHRoaXMuX3NjYWxlKSxcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGFudGlBbGlhc2VkUSA9IG15Q29uZmlnLmFudGlBbGlhc2VkID8gLjUgOiAxO1xuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCBhbnRpQWxpYXNlZFEpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCBhbnRpQWxpYXNlZFEpO1xuICAgIH1cbiAgICBsZXQgdXJsO1xuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGBpbWFnZS8ke215Q29uZmlnLnR5cGV9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5fZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgICB0aGlzLnJlc3VsdCA9ICh1cmwpO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHtcbiAgICAgIGJhc2U2NEltYWdlOiB1cmwsXG4gICAgICBiYXNlNjQ6IHVybCxcbiAgICAgIHR5cGU6IHRoaXMuX2RlZmF1bHRUeXBlIHx8IG15Q29uZmlnLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHRcbiAgICB9O1xuICAgIHRoaXMuY3JvcHBlZC5lbWl0KGNyb3BFdmVudCk7XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSB0cnVlO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cbn1cblxuLyoqIEBpZ25vcmUgKi9cbmNvbnN0IGZpeGVkTnVtID0gKG51bTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KG51bS50b0ZpeGVkKDApKTtcbiJdfQ==