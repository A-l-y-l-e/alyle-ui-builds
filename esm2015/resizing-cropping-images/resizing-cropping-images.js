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
         * issues an error when the loaded image is not valid
         */
        this.error = new EventEmitter();
        this._renderer.addClass(elementRef.nativeElement, this.classes.root);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set config(val) {
        this._config = mergeDeep({}, CONFIG_DEFAULT, val);
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * get current scale
     * @return {?}
     */
    get scale() {
        return this._scale;
    }
    /**
     * get min scale
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
                this._renderer.setStyle(this.imgContainer.nativeElement, key, newStyles[key]);
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
        this.defaultType = null;
        if (!this.config.type) {
            this.defaultType = _img.files[0].type;
        }
        this.isLoaded = false;
        this.isCropped = false;
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
            const imgContainerRect = /** @type {?} */ (this.imgContainer.nativeElement.getBoundingClientRect());
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
     * \@deprecated, instead use setScale(1)
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
        const imgContainerRect = /** @type {?} */ (this.imgContainer.nativeElement.getBoundingClientRect());
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
        const imgContainerRect = /** @type {?} */ (this.imgContainer.nativeElement.getBoundingClientRect());
        /** @type {?} */
        const croppingContainerRect = /** @type {?} */ (this.croppingContainer.nativeElement.getBoundingClientRect());
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
            width: this.imgContainer.nativeElement.offsetWidth,
            height: this.imgContainer.nativeElement.offsetHeight,
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
    ngAfterContentInit() {
        this.setImageUrl(this.src);
    }
    /**
     * @param {?=} img
     * @return {?}
     */
    center(img) {
        if (!img) {
            img = this.imgContainer.nativeElement.firstElementChild;
        }
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
    setImageUrl(src) {
        this.src = src;
        if (!src) {
            return;
        }
        /** @type {?} */
        const img = new Image;
        /** @type {?} */
        const cropEvent = {
            name: this._fileName,
            type: this.defaultType,
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
            console.log({ cropEvent });
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
     * Deprecated, use crop() instead
     * @param {?} myConfig
     * @return {?}
     */
    cropp(myConfig) {
        /** @type {?} */
        const canvasElement = document.createElement('canvas');
        /** @type {?} */
        const rect = /** @type {?} */ (this.croppingContainer.nativeElement.getBoundingClientRect());
        /** @type {?} */
        const img = /** @type {?} */ (this.imgContainer.nativeElement.firstElementChild.getBoundingClientRect());
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
            url = result.toDataURL(this.defaultType);
        }
        this.result = (url);
        /** @type {?} */
        const cropEvent = {
            base64Image: url,
            base64: url,
            type: this.defaultType || myConfig.type,
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
                selector: 'ly-cropping',
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
    imgContainer: [{ type: ViewChild, args: ['_imgContainer',] }],
    croppingContainer: [{ type: ViewChild, args: ['_croppingContainer',] }],
    src: [{ type: Input }],
    config: [{ type: Input }],
    loaded: [{ type: Output }],
    cropped: [{ type: Output }],
    error: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    LyResizingCroppingImages.prototype.classes;
    /** @type {?} */
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
    LyResizingCroppingImages.prototype.imgContainer;
    /** @type {?} */
    LyResizingCroppingImages.prototype.croppingContainer;
    /**
     * @deprecated
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
     * issues an error when the loaded image is not valid
     * @type {?}
     */
    LyResizingCroppingImages.prototype.error;
    /** @type {?} */
    LyResizingCroppingImages.prototype.defaultType;
    /** @type {?} */
    LyResizingCroppingImages.prototype._renderer;
    /** @type {?} */
    LyResizingCroppingImages.prototype.theme;
    /** @type {?} */
    LyResizingCroppingImages.prototype.elementRef;
    /** @type {?} */
    LyResizingCroppingImages.prototype.cd;
}
/** @type {?} */
const fixedNum = (num) => parseFloat(num.toFixed(0));
const ɵ0 = fixedNum;
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxZQUFZLEVBQ1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUdsRSxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsTUFBTSxNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFDUCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsYUFBYSxFQUFFLE1BQU07U0FDdEI7S0FDRjtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGFBQWEsRUFBRSxNQUFNO1FBQ3JCLFNBQVMsRUFBRSxr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QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxhQUFhO2dCQUN2Qix1bEJBQTRDO2FBQzVDOzs7O1lBNUhBLFNBQVM7WUFFRixRQUFRO1lBVmYsVUFBVTtZQUlWLGlCQUFpQjs7OzJCQTRJaEIsU0FBUyxTQUFDLGVBQWU7Z0NBQ3pCLFNBQVMsU0FBQyxvQkFBb0I7a0JBRTlCLEtBQUs7cUJBQ0wsS0FBSztxQkFtQkwsTUFBTTtzQkFFTixNQUFNO29CQUVOLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdVdULE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgbWVyZ2VEZWVwLCBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7ICQgfSBmcm9tICdwcm90cmFjdG9yJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH0sXG4gIGltZ0NvbnRhaW5lcjoge1xuICAgIGN1cnNvcjogJ21vdmUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgICcmID4gaW1nJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH1cbiAgfSxcbiAgY3JvcHBpbmdDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgYm94U2hhZG93OiAnMCAwIDAgMjAwMDBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgfSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfSxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfVxuICB9LFxuICBjcm9wcENvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICcmLCAmID4gaW5wdXQnOiBMWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgJyYgKjpub3QoaW5wdXQpJzoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcbiAgICAnJiA+IGlucHV0Jzoge1xuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZyB7XG4gIC8qKiBDcm9wcGVyIGFyZWEgd2lkdGgqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKiogQ3JvcHBlciBhcmVhIGhlaWdodCovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKiogSWYgdGhpcyBpcyBub3QgZGVmaW5lZCwgdGhlIG5ldyBpbWFnZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGVmaW5lZCAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKiogQmFja2dyb3VuZCBjb2xvciggZGVmYXVsdDogbnVsbCksIGlmIGlzIG51bGwgaW4gcG5nIGlzIHRyYW5zcGFyZW50IGJ1dCBub3QgaW4ganBnICovXG4gIGZpbGw/OiBzdHJpbmcgfCBudWxsO1xuICAvKiogU2V0IGFudGktYWxpYXNlZCggZGVmYXVsdDogdHJ1ZSkgKi9cbiAgYW50aUFsaWFzZWQ/OiBib29sZWFuO1xuICBvdXRwdXQ/OiB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgfSB8IEltYWdlUmVzb2x1dGlvbiB8IEltZ1Jlc29sdXRpb247XG59XG5leHBvcnQgdHlwZSBJbWdDcm9wcGVyQ29uZmlnID0gTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnO1xuZXhwb3J0IGVudW0gSW1nUmVzb2x1dGlvbiB7XG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXG4gIERlZmF1bHQsXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXG4gIE9yaWdpbmFsSW1hZ2Vcbn1cbi8qKiBAZGVwcmVjYXRlZCwgdXNlIGBJbWdSZXNvbHV0aW9uYCBpbnN0ZWFkICovXG5leHBvcnQgZW51bSBJbWFnZVJlc29sdXRpb24ge1xuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xuICBEZWZhdWx0LFxuICAvKiogT25seSBjcm9wcGluZyAqL1xuICBPcmlnaW5hbEltYWdlXG59XG5cbi8qKiBAZGVwcmVjYXRlZCwgdXNlIGBJbWdDcm9wcGVyRXZlbnRgIGluc3RlYWQgKi9cbmV4cG9ydCB0eXBlIENyb3BwZWRJbWFnZSA9IEltZ0Nyb3BwZXJFdmVudDtcbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckV2ZW50IHtcbiAgLyoqIEBkZXByZWNhdGVkLCB1c2UgYGJhc2U2NGAgaW5zdGVhZCAqL1xuICBiYXNlNjRJbWFnZTogc3RyaW5nO1xuICBiYXNlNjQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVN0YXRlIHtcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzQ3JvcDogYm9vbGVhbjtcbn1cbmNvbnN0IENPTkZJR19ERUZBVUxUID0gPEltZ0Nyb3BwZXJDb25maWc+e1xuICB3aWR0aDogMjUwLFxuICBoZWlnaHQ6IDIwMCxcbiAgb3V0cHV0OiBJbWdSZXNvbHV0aW9uLkRlZmF1bHQsXG4gIGFudGlBbGlhc2VkOiB0cnVlXG59O1xuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICdseS1jcm9wcGluZycsXG4gIHRlbXBsYXRlVXJsOiAncmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmh0bWwnXG4gfSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcmVzdWx0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBwcml2YXRlIG9mZnNldDoge3g6IG51bWJlciwgeTogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfTtcbiAgcHJpdmF0ZSBfc2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluU2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnO1xuXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInKSBpbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19jcm9wcGluZ0NvbnRhaW5lcicpIGNyb3BwaW5nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcodmFsOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gbWVyZ2VEZWVwKHt9LCBDT05GSUdfREVGQVVMVCwgdmFsKTtcbiAgfVxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgLyoqIGdldCBjdXJyZW50IHNjYWxlICovXG4gIGdldCBzY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gIH1cbiAgLyoqIGdldCBtaW4gc2NhbGUgKi9cbiAgZ2V0IG1pblNjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9taW5TY2FsZTtcbiAgfVxuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgaXNDcm9wcGVkOiBib29sZWFuO1xuXG4gIC8qKiBPbiBsb2FkZWQgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIE9uIGNyb3AgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSBjcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBpc3N1ZXMgYW4gZXJyb3Igd2hlbiB0aGUgbG9hZGVkIGltYWdlIGlzIG5vdCB2YWxpZCAqL1xuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcblxuICBwcml2YXRlIGRlZmF1bHRUeXBlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ltZ0xvYWRlZChpbWdFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgaWYgKGltZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2ltZyA9IGltZ0VsZW1lbnQ7XG4gICAgICAvKiogc2V0IHpvb20gc2NhbGUgKi9cbiAgICAgIGNvbnN0IG1pblNjYWxlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyB0aGlzLl9pbWcud2lkdGggKiAxMDAsXG4gICAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0IC8gdGhpcy5faW1nLmhlaWdodCAqIDEwMFxuICAgICAgfTtcbiAgICAgIHRoaXMuX21pblNjYWxlID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDA7XG4gICAgICB0aGlzLmZpdCgpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZXNGb3JDb250SW1nKG5ld1N0eWxlczoge1xuICAgIHdpZHRoOiBzdHJpbmc7XG4gICAgaGVpZ2h0OiBzdHJpbmc7XG4gICAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIH0pIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdTdHlsZXMpIHtcbiAgICAgIGlmIChuZXdTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCBrZXksIG5ld1N0eWxlc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZWxlY3RJbnB1dEV2ZW50KGltZzogRXZlbnQpIHtcbiAgICBjb25zdCBfaW1nID0gaW1nLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChfaW1nLmZpbGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB0aGlzLl9maWxlTmFtZSA9IF9pbWcudmFsdWUucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpO1xuXG4gICAgLyoqIFNldCB0eXBlICovXG4gICAgdGhpcy5kZWZhdWx0VHlwZSA9IG51bGw7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XG4gICAgICB0aGlzLmRlZmF1bHRUeXBlID0gX2ltZy5maWxlc1swXS50eXBlO1xuICAgIH1cbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcbiAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCAobG9hZEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEltYWdlVXJsID0gKGxvYWRFdmVudC50YXJnZXQgYXMgRmlsZVJlYWRlcikucmVzdWx0IGFzIHN0cmluZztcbiAgICAgIHRoaXMuc2V0SW1hZ2VVcmwob3JpZ2luYWxJbWFnZVVybCk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChfaW1nLmZpbGVzWzBdKTtcbiAgfVxuXG4gIC8qKiBTZXQgdGhlIHNpemUgb2YgdGhlIGltYWdlLCB0aGUgdmFsdWVzIGNhbiBiZSAwIGJldHdlZW4gMSwgd2hlcmUgMSBpcyB0aGUgb3JpZ2luYWwgc2l6ZSAqL1xuICBzZXRTY2FsZShzaXplOiBudW1iZXIpIHtcbiAgICAvLyBmaXggbWluIHNjYWxlXG4gICAgc2l6ZSA9IHNpemUgPiB0aGlzLm1pblNjYWxlICYmIHNpemUgPD0gMSA/IHNpemUgOiB0aGlzLm1pblNjYWxlO1xuICAgIHRoaXMuX3NjYWxlID0gc2l6ZTtcbiAgICBzaXplID0gc2l6ZSAqIDEwMDtcbiAgICBjb25zdCBpbml0aWFsSW1nID0gdGhpcy5faW1nO1xuICAgIGNvbnN0IHdpZHRoID0gZml4ZWROdW0oaW5pdGlhbEltZy53aWR0aCAqIHNpemUgLyAxMDApO1xuICAgIGNvbnN0IGhlaWdodCA9IGZpeGVkTnVtKGluaXRpYWxJbWcuaGVpZ2h0ICogc2l6ZSAvIDEwMCk7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIGlmICghdGhpcy5pc0xvYWRlZCkge1xuICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLmN1c3RvbUNlbnRlcih3aWR0aCwgaGVpZ2h0KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltZ0NvbnRhaW5lclJlY3QgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgICAgeDogKGhvc3RSZWN0LndpZHRoIC8gMikgLSAoaW1nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueCksIC8vIOKck1xuICAgICAgICB5OiAoaG9zdFJlY3QuaGVpZ2h0IC8gMikgLSAoaW1nQ29udGFpbmVyUmVjdC55IC0gaG9zdFJlY3QueSksIC8vIOKck1xuICAgICAgICBsZWZ0OiBpbWdDb250YWluZXJSZWN0LmxlZnQgLSBob3N0UmVjdC54LCAvLyDinJNcbiAgICAgICAgdG9wOiBpbWdDb250YWluZXJSZWN0LnRvcCAtIGhvc3RSZWN0LnkgLy8g4pyTXG4gICAgICB9O1xuICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgIH0gYXMgYW55KTtcbiAgICAgIHRoaXMuX21vdmUoe1xuICAgICAgICBzcmNFdmVudDoge30sXG4gICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgIHg6IChob3N0UmVjdC53aWR0aCAvIDIgLSAodGhpcy5vZmZzZXQueCAqICh3aWR0aCAvIGltZ0NvbnRhaW5lclJlY3Qud2lkdGgpKSkgKyBob3N0UmVjdC54ICsgdGhpcy5vZmZzZXQueCxcbiAgICAgICAgICB5OiAoaG9zdFJlY3QuaGVpZ2h0IC8gMiAtICh0aGlzLm9mZnNldC55ICogKGhlaWdodCAvIGltZ0NvbnRhaW5lclJlY3QuaGVpZ2h0KSkpICsgaG9zdFJlY3QueSArIHRoaXMub2Zmc2V0LnlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgY3VzdG9tQ2VudGVyKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGwgPSAocm9vdC5vZmZzZXRXaWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgY29uc3QgciA9IChyb290Lm9mZnNldEhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgIHJldHVybiBgdHJhbnNsYXRlM2QoJHtsfXB4LCAke3J9cHgsIDApYDtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCwgaW5zdGVhZCB1c2Ugc2V0U2NhbGUoMSkgKi9cbiAgJzE6MScoKSB7XG4gICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBanVzdGFyIGEgbGEgcGFudGFsbGFcbiAgICovXG4gIGZpdFRvU2NyZWVuKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IG1pbiA9IHtcbiAgICAgIHdpZHRoOiBjb250YWluZXIub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lci5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5faW1nLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLl9pbWcuaGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyBzaXplLndpZHRoICogMTAwLFxuICAgICAgaGVpZ2h0OiBtaW4uaGVpZ2h0IC8gc2l6ZS5oZWlnaHQgKiAxMDBcbiAgICB9O1xuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwO1xuICAgIHRoaXMuc2V0U2NhbGUocmVzdWx0KTtcbiAgfVxuXG4gIGZpdCgpIHtcbiAgICB0aGlzLnNldFNjYWxlKDApO1xuICB9XG5cbiAgX21vdmVTdGFydChldmVudCkge1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBjb25zdCBpbWdDb250YWluZXJSZWN0ID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgeDogZXZlbnQuY2VudGVyLnggLSBpbWdDb250YWluZXJSZWN0LngsXG4gICAgICB5OiBldmVudC5jZW50ZXIueSAtIGltZ0NvbnRhaW5lclJlY3QueSxcbiAgICAgIGxlZnQ6IGltZ0NvbnRhaW5lclJlY3QubGVmdCAtIGhvc3RSZWN0LngsXG4gICAgICB0b3A6IGltZ0NvbnRhaW5lclJlY3QudG9wIC0gaG9zdFJlY3QueVxuICAgIH07XG4gIH1cbiAgX21vdmUoZXZlbnQpIHtcbiAgICBsZXQgeCwgeTtcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgY29uc3QgaW1nQ29udGFpbmVyUmVjdCA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBjb25zdCBjcm9wcGluZ0NvbnRhaW5lclJlY3QgPSB0aGlzLmNyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcblxuICAgIC8vIExpbWl0IGZvciBsZWZ0XG4gICAgaWYgKGV2ZW50LmNlbnRlci54IC0gdGhpcy5vZmZzZXQueCA+PSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCkge1xuICAgICAgeCA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueDtcbiAgICB9XG4gICAgLy8gTGltaXQgZm9yIHRvcFxuICAgIGlmIChldmVudC5jZW50ZXIueSAtIHRoaXMub2Zmc2V0LnkgPj0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkpIHtcbiAgICAgIHkgPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0Lnk7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciByaWdodFxuICAgIGlmIChldmVudC5jZW50ZXIueCAtIHRoaXMub2Zmc2V0LnggKyBpbWdDb250YWluZXJSZWN0LndpZHRoIDw9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54ICsgY3JvcHBpbmdDb250YWluZXJSZWN0LndpZHRoKSB7XG4gICAgICB4ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnggLSBob3N0UmVjdC54IC0gaW1nQ29udGFpbmVyUmVjdC53aWR0aCArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC53aWR0aDtcbiAgICB9XG4gICAgLy8gTGltaXQgZm9yIGJvdHRvbVxuICAgIGlmIChldmVudC5jZW50ZXIueSAtIHRoaXMub2Zmc2V0LnkgKyBpbWdDb250YWluZXJSZWN0LmhlaWdodCA8PSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueSArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC5oZWlnaHQpIHtcbiAgICAgIHkgPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0LnkgLSBpbWdDb250YWluZXJSZWN0LmhlaWdodCArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gV2hlbiBwcmVzcyBzaGlmdEtleVxuICAgIGlmIChldmVudC5zcmNFdmVudC5zaGlmdEtleSkge1xuICAgICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPT09IE1hdGgubWF4KE1hdGguYWJzKGV2ZW50LmRlbHRhWCksIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkpKSB7XG4gICAgICAgIHkgPSB0aGlzLm9mZnNldC50b3A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gdGhpcy5vZmZzZXQubGVmdDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHggPT09IHVuZGVmaW5lZCkgeyB4ID0gZXZlbnQuY2VudGVyLnggLSBob3N0UmVjdC54IC0gKHRoaXMub2Zmc2V0LngpOyB9XG4gICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgeyB5ID0gZXZlbnQuY2VudGVyLnkgLSBob3N0UmVjdC55IC0gKHRoaXMub2Zmc2V0LnkpOyB9XG5cbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgIHdpZHRoOiB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAwKWBcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcm91bmROdW1iZXIobnVtOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiAxMDAwMDApIC8gMTAwMDAwO1xuICB9XG4gIC8qKisgKi9cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLl9zY2FsZSArIC4wNSk7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgICB9XG4gIH1cbiAgLyoqLSAqL1xuICB6b29tT3V0KCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLl9zY2FsZSAtIC4wNSk7XG4gICAgaWYgKHNjYWxlID4gdGhpcy5taW5TY2FsZSAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXQoKTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuc2V0SW1hZ2VVcmwodGhpcy5zcmMpO1xuICB9XG4gIGNlbnRlcihpbWc/OiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgIGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgfVxuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHtpbWcud2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHtpbWcuaGVpZ2h0fXB4YCxcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxuICAgIH07XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyhuZXdTdHlsZXMpO1xuICB9XG4gIHNldEltYWdlVXJsKHNyYzogc3RyaW5nKSB7XG4gICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgaWYgKCFzcmMpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xuICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckV2ZW50ID0ge1xuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWUsXG4gICAgICB0eXBlOiB0aGlzLmRlZmF1bHRUeXBlLFxuICAgICAgYmFzZTY0OiBudWxsLFxuICAgICAgYmFzZTY0SW1hZ2U6IG51bGwsXG4gICAgICB3aWR0aDogbnVsbCxcbiAgICAgIGhlaWdodDogbnVsbFxuICAgIH07XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICB0aGlzLmVycm9yLmVtaXQoY3JvcEV2ZW50KTtcbiAgICB9KTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuX2ltZ0xvYWRlZChpbWcpO1xuICAgICAgY3JvcEV2ZW50LndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgY3JvcEV2ZW50LmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICBjb25zb2xlLmxvZyh7Y3JvcEV2ZW50fSk7XG4gICAgICB0aGlzLmxvYWRlZC5lbWl0KGNyb3BFdmVudCk7XG4gICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBtYXgoLi4udmFsdWVzOiBudW1iZXJbXSkge1xuICAgIHJldHVybiBNYXRoLm1heCguLi52YWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbWFnZVNtb290aGluZ1F1YWxpdHkoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCwgY29uZmlnLCBxdWFsaXR5OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgLyoqIENhbGN1bGF0ZSB0b3RhbCBudW1iZXIgb2Ygc3RlcHMgbmVlZGVkICovXG4gICAgbGV0ICBudW1TdGVwcyA9IE1hdGguY2VpbChNYXRoLmxvZyh0aGlzLm1heChpbWcud2lkdGgsIGltZy5oZWlnaHQpIC8gdGhpcy5tYXgoY29uZmlnLmhlaWdodCwgY29uZmlnLndpZHRoKSkgLyBNYXRoLmxvZygyKSkgLSAxO1xuICAgIG51bVN0ZXBzID0gbnVtU3RlcHMgPD0gMCA/IDAgOiBudW1TdGVwcztcblxuICAgIC8qKkFycmF5IHN0ZXBzICovXG4gICAgY29uc3Qgc3RlcHMgPSBBcnJheS5mcm9tKEFycmF5KG51bVN0ZXBzKS5rZXlzKCkpO1xuXG4gICAgLyoqIENvbnRleHQgKi9cbiAgICBjb25zdCBvY3R4ID0gaW1nLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBxID0gTWF0aC5wb3cocXVhbGl0eSAqIDEwLCBudW1TdGVwcykgLyBNYXRoLnBvdygxMCwgbnVtU3RlcHMpO1xuXG4gICAgLyoqIElmIFN0ZXBzID0+IGltYWdlU21vb3RoaW5nUXVhbGl0eSAqL1xuICAgIGlmIChudW1TdGVwcykge1xuICAgICAgLyoqIFNldCBzaXplICovXG4gICAgICBjb25zdCB3ID0gaW1nLndpZHRoICogcXVhbGl0eTtcbiAgICAgIGNvbnN0IGggPSBpbWcuaGVpZ2h0ICogcXVhbGl0eTtcbiAgICAgIC8qKiBPbmx5IHRoZSBuZXcgaW1nIGlzIHNob3duLiAqL1xuICAgICAgb2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XG5cbiAgICAgIC8qKiBTdGVwcyAqL1xuICAgICAgKHN0ZXBzIGFzIEFycmF5PG51bWJlcj4pLmZvckVhY2goKGEsIGIpID0+IHtcbiAgICAgICAgb2N0eC5kcmF3SW1hZ2UoaW1nLFxuICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgdywgaFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RlcCBmaW5hbFxuICAgICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICAgKi9cbiAgICBjb25zdCBvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxuICAgIGN0eCA9IG9jLmdldENvbnRleHQoJzJkJyk7XG4gICAgb2Mud2lkdGggPSBjb25maWcud2lkdGg7XG4gICAgb2MuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcbiAgICBjdHguZHJhd0ltYWdlKGltZyxcbiAgICAgIDAsIDAsXG4gICAgICBpbWcud2lkdGggKiAocSksIGltZy5oZWlnaHQgKiAocSksXG4gICAgICAwLCAwLFxuICAgICAgb2Mud2lkdGgsIG9jLmhlaWdodFxuICAgICk7XG4gICAgcmV0dXJuIG9jO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgSW1hZ2VcbiAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgKi9cbiAgY3JvcChjb25maWc/OiBJbWdDcm9wcGVyQ29uZmlnKTogSW1nQ3JvcHBlckV2ZW50IHtcbiAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWcgPyBtZXJnZURlZXAoe30sIHRoaXMuY29uZmlnIHx8IENPTkZJR19ERUZBVUxULCBjb25maWcpIDogdGhpcy5jb25maWc7XG4gICAgY29uc3QgY3JvcEV2ZW50ID0gdGhpcy5jcm9wcChuZXdDb25maWcpO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogRGVwcmVjYXRlZCwgdXNlIGNyb3AoKSBpbnN0ZWFkXG4gICAqL1xuICBjcm9wcChteUNvbmZpZzogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuY3JvcHBpbmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0O1xuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcbiAgICBjb25zdCBsZWZ0ID0gcmVjdC5sZWZ0IC0gaW1nLmxlZnQ7XG4gICAgY29uc3QgdG9wID0gcmVjdC50b3AgLSBpbWcudG9wO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XG4gICAgfTtcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gdGhpcy5fc2NhbGU7XG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gdGhpcy5fc2NhbGU7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgfVxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nLFxuICAgICAgLShsZWZ0IC8gdGhpcy5fc2NhbGUpLCAtKHRvcCAvIHRoaXMuX3NjYWxlKSxcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGFudGlBbGlhc2VkUSA9IG15Q29uZmlnLmFudGlBbGlhc2VkID8gLjUgOiAxO1xuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCBhbnRpQWxpYXNlZFEpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCBhbnRpQWxpYXNlZFEpO1xuICAgIH1cbiAgICBsZXQgdXJsO1xuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGBpbWFnZS8ke215Q29uZmlnLnR5cGV9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5kZWZhdWx0VHlwZSk7XG4gICAgfVxuICAgIHRoaXMucmVzdWx0ID0gKHVybCk7XG4gICAgY29uc3QgY3JvcEV2ZW50ID0ge1xuICAgICAgYmFzZTY0SW1hZ2U6IHVybCxcbiAgICAgIGJhc2U2NDogdXJsLFxuICAgICAgdHlwZTogdGhpcy5kZWZhdWx0VHlwZSB8fCBteUNvbmZpZy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWUsXG4gICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0XG4gICAgfTtcbiAgICB0aGlzLmNyb3BwZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgIHRoaXMuaXNDcm9wcGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG59XG5cbmNvbnN0IGZpeGVkTnVtID0gKG51bTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KG51bS50b0ZpeGVkKDApKTtcbiJdfQ==