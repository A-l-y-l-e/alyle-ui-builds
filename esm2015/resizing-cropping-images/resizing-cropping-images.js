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
        img.src = src;
        img.addEventListener('error', (err) => {
            this.error.emit({
                name: this._fileName,
                type: null,
                base64: null,
                base64Image: null
            });
        });
        img.addEventListener('load', () => {
            this._imgLoaded(img);
            this.loaded.emit(null);
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
        const base64 = this.cropp(newConfig);
        return {
            base64,
            base64Image: base64,
            type: this.defaultType || this.config.type,
            name: this._fileName
        };
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
        this.cropped.emit({
            base64Image: url,
            base64: url,
            type: this.defaultType || myConfig.type,
            name: this._fileName
        });
        this.isCropped = true;
        return url;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxZQUFZLEVBQ1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUdsRSxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsTUFBTSxNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFDUCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsYUFBYSxFQUFFLE1BQU07U0FDdEI7S0FDRjtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGFBQWEsRUFBRSxNQUFNO1FBQ3JCLFNBQVMsRUFBRSxr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TCxNQUFNO3NCQUVOLE1BQU07b0JBRU4sTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtV1QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBtZXJnZURlZXAsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgJCB9IGZyb20gJ3Byb3RyYWN0b3InO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgaW1nQ29udGFpbmVyOiB7XG4gICAgY3Vyc29yOiAnbW92ZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgJyYgPiBpbWcnOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfVxuICB9LFxuICBjcm9wcGluZ0NvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBib3hTaGFkb3c6ICcwIDAgMCAyMDAwMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgJyY6YmVmb3JlLCAmOmFmdGVyJzoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgY29udGVudDogYCcnYCxcbiAgICB9LFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9LFxuICAgICcmOmFmdGVyJzoge1xuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9XG4gIH0sXG4gIGNyb3BwQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgJyYsICYgPiBpbnB1dCc6IExZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAnJiAqOm5vdChpbnB1dCknOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgICcmID4gaW5wdXQnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnIHtcbiAgLyoqIENyb3BwZXIgYXJlYSB3aWR0aCovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKiBDcm9wcGVyIGFyZWEgaGVpZ2h0Ki9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBJZiB0aGlzIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmV3IGltYWdlIHdpbGwgYmUgYXV0b21hdGljYWxseSBkZWZpbmVkICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcgKi9cbiAgZmlsbD86IHN0cmluZyB8IG51bGw7XG4gIC8qKiBTZXQgYW50aS1hbGlhc2VkKCBkZWZhdWx0OiB0cnVlKSAqL1xuICBhbnRpQWxpYXNlZD86IGJvb2xlYW47XG4gIG91dHB1dD86IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9IHwgSW1hZ2VSZXNvbHV0aW9uIHwgSW1nUmVzb2x1dGlvbjtcbn1cbmV4cG9ydCB0eXBlIEltZ0Nyb3BwZXJDb25maWcgPSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWc7XG5leHBvcnQgZW51bSBJbWdSZXNvbHV0aW9uIHtcbiAgLyoqIFJlc2l6aW5nICYgY3JvcHBpbmcgKi9cbiAgRGVmYXVsdCxcbiAgLyoqIE9ubHkgY3JvcHBpbmcgKi9cbiAgT3JpZ2luYWxJbWFnZVxufVxuLyoqIEBkZXByZWNhdGVkLCB1c2UgYEltZ1Jlc29sdXRpb25gIGluc3RlYWQgKi9cbmV4cG9ydCBlbnVtIEltYWdlUmVzb2x1dGlvbiB7XG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXG4gIERlZmF1bHQsXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXG4gIE9yaWdpbmFsSW1hZ2Vcbn1cblxuLyoqIEBkZXByZWNhdGVkLCB1c2UgYEltZ0Nyb3BwZXJFdmVudGAgaW5zdGVhZCAqL1xuZXhwb3J0IHR5cGUgQ3JvcHBlZEltYWdlID0gSW1nQ3JvcHBlckV2ZW50O1xuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyRXZlbnQge1xuICAvKiogQGRlcHJlY2F0ZWQsIHVzZSBgYmFzZTY0YCBpbnN0ZWFkICovXG4gIGJhc2U2NEltYWdlOiBzdHJpbmc7XG4gIGJhc2U2NDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VTdGF0ZSB7XG4gIGlzTG9hZGVkOiBib29sZWFuO1xuICBpc0Nyb3A6IGJvb2xlYW47XG59XG5jb25zdCBDT05GSUdfREVGQVVMVCA9IDxJbWdDcm9wcGVyQ29uZmlnPntcbiAgd2lkdGg6IDI1MCxcbiAgaGVpZ2h0OiAyMDAsXG4gIG91dHB1dDogSW1nUmVzb2x1dGlvbi5EZWZhdWx0LFxuICBhbnRpQWxpYXNlZDogdHJ1ZVxufTtcbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbHktY3JvcHBpbmcnLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5odG1sJ1xuIH0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHJlc3VsdDogc3RyaW5nO1xuICBwcml2YXRlIF9maWxlTmFtZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcbiAgcHJpdmF0ZSBvZmZzZXQ6IHt4OiBudW1iZXIsIHk6IG51bWJlciwgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn07XG4gIHByaXZhdGUgX3NjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgX21pblNjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbmZpZzogSW1nQ3JvcHBlckNvbmZpZztcblxuICBAVmlld0NoaWxkKCdfaW1nQ29udGFpbmVyJykgaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfY3JvcHBpbmdDb250YWluZXInKSBjcm9wcGluZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHZhbDogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IG1lcmdlRGVlcCh7fSwgQ09ORklHX0RFRkFVTFQsIHZhbCk7XG4gIH1cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIC8qKiBnZXQgY3VycmVudCBzY2FsZSAqL1xuICBnZXQgc2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG4gIC8qKiBnZXQgbWluIHNjYWxlICovXG4gIGdldCBtaW5TY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gIH1cbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzQ3JvcHBlZDogYm9vbGVhbjtcblxuICAvKiogT24gbG9hZGVkIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAvKiogT24gY3JvcCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIGNyb3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIGlzc3VlcyBhbiBlcnJvciB3aGVuIHRoZSBsb2FkZWQgaW1hZ2UgaXMgbm90IHZhbGlkICovXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuXG4gIHByaXZhdGUgZGVmYXVsdFR5cGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW1nTG9hZGVkKGltZ0VsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBpZiAoaW1nRWxlbWVudCkge1xuICAgICAgdGhpcy5faW1nID0gaW1nRWxlbWVudDtcbiAgICAgIC8qKiBzZXQgem9vbSBzY2FsZSAqL1xuICAgICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCAvIHRoaXMuX2ltZy53aWR0aCAqIDEwMCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgLyB0aGlzLl9pbWcuaGVpZ2h0ICogMTAwXG4gICAgICB9O1xuICAgICAgdGhpcy5fbWluU2NhbGUgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMDtcbiAgICAgIHRoaXMuZml0KCk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFN0eWxlc0ZvckNvbnRJbWcobmV3U3R5bGVzOiB7XG4gICAgd2lkdGg6IHN0cmluZztcbiAgICBoZWlnaHQ6IHN0cmluZztcbiAgICB0cmFuc2Zvcm06IHN0cmluZztcbiAgfSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1N0eWxlcykge1xuICAgICAgaWYgKG5ld1N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIGtleSwgbmV3U3R5bGVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKF9pbWcuZmlsZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHRoaXMuX2ZpbGVOYW1lID0gX2ltZy52YWx1ZS5yZXBsYWNlKC8uKihcXC98XFxcXCkvLCAnJyk7XG5cbiAgICAvKiogU2V0IHR5cGUgKi9cbiAgICB0aGlzLmRlZmF1bHRUeXBlID0gbnVsbDtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnR5cGUpIHtcbiAgICAgIHRoaXMuZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzWzBdLnR5cGU7XG4gICAgfVxuICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IGZhbHNlO1xuICAgIGZpbGVSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChsb2FkRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgdGhpcy5zZXRJbWFnZVVybChvcmlnaW5hbEltYWdlVXJsKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKF9pbWcuZmlsZXNbMF0pO1xuICB9XG5cbiAgLyoqIFNldCB0aGUgc2l6ZSBvZiB0aGUgaW1hZ2UsIHRoZSB2YWx1ZXMgY2FuIGJlIDAgYmV0d2VlbiAxLCB3aGVyZSAxIGlzIHRoZSBvcmlnaW5hbCBzaXplICovXG4gIHNldFNjYWxlKHNpemU6IG51bWJlcikge1xuICAgIC8vIGZpeCBtaW4gc2NhbGVcbiAgICBzaXplID0gc2l6ZSA+IHRoaXMubWluU2NhbGUgJiYgc2l6ZSA8PSAxID8gc2l6ZSA6IHRoaXMubWluU2NhbGU7XG4gICAgdGhpcy5fc2NhbGUgPSBzaXplO1xuICAgIHNpemUgPSBzaXplICogMTAwO1xuICAgIGNvbnN0IGluaXRpYWxJbWcgPSB0aGlzLl9pbWc7XG4gICAgY29uc3Qgd2lkdGggPSBmaXhlZE51bShpbml0aWFsSW1nLndpZHRoICogc2l6ZSAvIDEwMCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gZml4ZWROdW0oaW5pdGlhbEltZy5oZWlnaHQgKiBzaXplIC8gMTAwKTtcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgaWYgKCF0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMuY3VzdG9tQ2VudGVyKHdpZHRoLCBoZWlnaHQpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW1nQ29udGFpbmVyUmVjdCA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICB4OiAoaG9zdFJlY3Qud2lkdGggLyAyKSAtIChpbWdDb250YWluZXJSZWN0LnggLSBob3N0UmVjdC54KSwgLy8g4pyTXG4gICAgICAgIHk6IChob3N0UmVjdC5oZWlnaHQgLyAyKSAtIChpbWdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55KSwgLy8g4pyTXG4gICAgICAgIGxlZnQ6IGltZ0NvbnRhaW5lclJlY3QubGVmdCAtIGhvc3RSZWN0LngsIC8vIOKck1xuICAgICAgICB0b3A6IGltZ0NvbnRhaW5lclJlY3QudG9wIC0gaG9zdFJlY3QueSAvLyDinJNcbiAgICAgIH07XG4gICAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgfSBhcyBhbnkpO1xuICAgICAgdGhpcy5fbW92ZSh7XG4gICAgICAgIHNyY0V2ZW50OiB7fSxcbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgeDogKGhvc3RSZWN0LndpZHRoIC8gMiAtICh0aGlzLm9mZnNldC54ICogKHdpZHRoIC8gaW1nQ29udGFpbmVyUmVjdC53aWR0aCkpKSArIGhvc3RSZWN0LnggKyB0aGlzLm9mZnNldC54LFxuICAgICAgICAgIHk6IChob3N0UmVjdC5oZWlnaHQgLyAyIC0gKHRoaXMub2Zmc2V0LnkgKiAoaGVpZ2h0IC8gaW1nQ29udGFpbmVyUmVjdC5oZWlnaHQpKSkgKyBob3N0UmVjdC55ICsgdGhpcy5vZmZzZXQueVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjdXN0b21DZW50ZXIod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgbCA9IChyb290Lm9mZnNldFdpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICBjb25zdCByID0gKHJvb3Qub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgcmV0dXJuIGB0cmFuc2xhdGUzZCgke2x9cHgsICR7cn1weCwgMClgO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkLCBpbnN0ZWFkIHVzZSBzZXRTY2FsZSgxKSAqL1xuICAnMToxJygpIHtcbiAgICB0aGlzLnNldFNjYWxlKDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFqdXN0YXIgYSBsYSBwYW50YWxsYVxuICAgKi9cbiAgZml0VG9TY3JlZW4oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgbWluID0ge1xuICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyLm9mZnNldEhlaWdodFxuICAgIH07XG4gICAgY29uc3Qgc2l6ZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLl9pbWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2ltZy5oZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IG1pblNjYWxlID0ge1xuICAgICAgd2lkdGg6IG1pbi53aWR0aCAvIHNpemUud2lkdGggKiAxMDAsXG4gICAgICBoZWlnaHQ6IG1pbi5oZWlnaHQgLyBzaXplLmhlaWdodCAqIDEwMFxuICAgIH07XG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDA7XG4gICAgdGhpcy5zZXRTY2FsZShyZXN1bHQpO1xuICB9XG5cbiAgZml0KCkge1xuICAgIHRoaXMuc2V0U2NhbGUoMCk7XG4gIH1cblxuICBfbW92ZVN0YXJ0KGV2ZW50KSB7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lclJlY3QgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICB4OiBldmVudC5jZW50ZXIueCAtIGltZ0NvbnRhaW5lclJlY3QueCxcbiAgICAgIHk6IGV2ZW50LmNlbnRlci55IC0gaW1nQ29udGFpbmVyUmVjdC55LFxuICAgICAgbGVmdDogaW1nQ29udGFpbmVyUmVjdC5sZWZ0IC0gaG9zdFJlY3QueCxcbiAgICAgIHRvcDogaW1nQ29udGFpbmVyUmVjdC50b3AgLSBob3N0UmVjdC55XG4gICAgfTtcbiAgfVxuICBfbW92ZShldmVudCkge1xuICAgIGxldCB4LCB5O1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBjb25zdCBpbWdDb250YWluZXJSZWN0ID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIGNvbnN0IGNyb3BwaW5nQ29udGFpbmVyUmVjdCA9IHRoaXMuY3JvcHBpbmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuXG4gICAgLy8gTGltaXQgZm9yIGxlZnRcbiAgICBpZiAoZXZlbnQuY2VudGVyLnggLSB0aGlzLm9mZnNldC54ID49IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54KSB7XG4gICAgICB4ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnggLSBob3N0UmVjdC54O1xuICAgIH1cbiAgICAvLyBMaW1pdCBmb3IgdG9wXG4gICAgaWYgKGV2ZW50LmNlbnRlci55IC0gdGhpcy5vZmZzZXQueSA+PSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueSkge1xuICAgICAgeSA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC55IC0gaG9zdFJlY3QueTtcbiAgICB9XG4gICAgLy8gTGltaXQgZm9yIHJpZ2h0XG4gICAgaWYgKGV2ZW50LmNlbnRlci54IC0gdGhpcy5vZmZzZXQueCArIGltZ0NvbnRhaW5lclJlY3Qud2lkdGggPD0gY3JvcHBpbmdDb250YWluZXJSZWN0LnggKyBjcm9wcGluZ0NvbnRhaW5lclJlY3Qud2lkdGgpIHtcbiAgICAgIHggPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0LnggLSBpbWdDb250YWluZXJSZWN0LndpZHRoICsgY3JvcHBpbmdDb250YWluZXJSZWN0LndpZHRoO1xuICAgIH1cbiAgICAvLyBMaW1pdCBmb3IgYm90dG9tXG4gICAgaWYgKGV2ZW50LmNlbnRlci55IC0gdGhpcy5vZmZzZXQueSArIGltZ0NvbnRhaW5lclJlY3QuaGVpZ2h0IDw9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC55ICsgY3JvcHBpbmdDb250YWluZXJSZWN0LmhlaWdodCkge1xuICAgICAgeSA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC55IC0gaG9zdFJlY3QueSAtIGltZ0NvbnRhaW5lclJlY3QuaGVpZ2h0ICsgY3JvcHBpbmdDb250YWluZXJSZWN0LmhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHByZXNzIHNoaWZ0S2V5XG4gICAgaWYgKGV2ZW50LnNyY0V2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA9PT0gTWF0aC5tYXgoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSwgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSkpIHtcbiAgICAgICAgeSA9IHRoaXMub2Zmc2V0LnRvcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSB0aGlzLm9mZnNldC5sZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7IHggPSBldmVudC5jZW50ZXIueCAtIGhvc3RSZWN0LnggLSAodGhpcy5vZmZzZXQueCk7IH1cbiAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSB7IHkgPSBldmVudC5jZW50ZXIueSAtIGhvc3RSZWN0LnkgLSAodGhpcy5vZmZzZXQueSk7IH1cblxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgd2lkdGg6IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsIDApYFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByb3VuZE51bWJlcihudW06IG51bWJlcikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIDEwMDAwMCkgLyAxMDAwMDA7XG4gIH1cbiAgLyoqKyAqL1xuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuX3NjYWxlICsgLjA1KTtcbiAgICBpZiAoc2NhbGUgPiAwICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICAvKiotICovXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuX3NjYWxlIC0gLjA1KTtcbiAgICBpZiAoc2NhbGUgPiB0aGlzLm1pblNjYWxlICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpdCgpO1xuICAgIH1cbiAgfVxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zZXRJbWFnZVVybCh0aGlzLnNyYyk7XG4gIH1cbiAgY2VudGVyKGltZz86IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgaW1nID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG4gICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgd2lkdGg6IGAke2ltZy53aWR0aH1weGAsXG4gICAgICBoZWlnaHQ6IGAke2ltZy5oZWlnaHR9cHhgLFxuICAgICAgdHJhbnNmb3JtOiB0aGlzLmN1c3RvbUNlbnRlcihpbWcud2lkdGgsIGltZy5oZWlnaHQpXG4gICAgfTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKG5ld1N0eWxlcyk7XG4gIH1cbiAgc2V0SW1hZ2VVcmwoc3JjOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNyYyA9IHNyYztcbiAgICBpZiAoIXNyYykgeyByZXR1cm47IH1cbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2U7XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICB0aGlzLmVycm9yLmVtaXQoe1xuICAgICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgYmFzZTY0OiBudWxsLFxuICAgICAgICBiYXNlNjRJbWFnZTogbnVsbFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbWdMb2FkZWQoaW1nKTtcbiAgICAgIHRoaXMubG9hZGVkLmVtaXQobnVsbCk7XG4gICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBtYXgoLi4udmFsdWVzOiBudW1iZXJbXSkge1xuICAgIHJldHVybiBNYXRoLm1heCguLi52YWx1ZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbWFnZVNtb290aGluZ1F1YWxpdHkoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCwgY29uZmlnLCBxdWFsaXR5OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgLyoqIENhbGN1bGF0ZSB0b3RhbCBudW1iZXIgb2Ygc3RlcHMgbmVlZGVkICovXG4gICAgbGV0ICBudW1TdGVwcyA9IE1hdGguY2VpbChNYXRoLmxvZyh0aGlzLm1heChpbWcud2lkdGgsIGltZy5oZWlnaHQpIC8gdGhpcy5tYXgoY29uZmlnLmhlaWdodCwgY29uZmlnLndpZHRoKSkgLyBNYXRoLmxvZygyKSkgLSAxO1xuICAgIG51bVN0ZXBzID0gbnVtU3RlcHMgPD0gMCA/IDAgOiBudW1TdGVwcztcblxuICAgIC8qKkFycmF5IHN0ZXBzICovXG4gICAgY29uc3Qgc3RlcHMgPSBBcnJheS5mcm9tKEFycmF5KG51bVN0ZXBzKS5rZXlzKCkpO1xuXG4gICAgLyoqIENvbnRleHQgKi9cbiAgICBjb25zdCBvY3R4ID0gaW1nLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBxID0gTWF0aC5wb3cocXVhbGl0eSAqIDEwLCBudW1TdGVwcykgLyBNYXRoLnBvdygxMCwgbnVtU3RlcHMpO1xuXG4gICAgLyoqIElmIFN0ZXBzID0+IGltYWdlU21vb3RoaW5nUXVhbGl0eSAqL1xuICAgIGlmIChudW1TdGVwcykge1xuICAgICAgLyoqIFNldCBzaXplICovXG4gICAgICBjb25zdCB3ID0gaW1nLndpZHRoICogcXVhbGl0eTtcbiAgICAgIGNvbnN0IGggPSBpbWcuaGVpZ2h0ICogcXVhbGl0eTtcbiAgICAgIC8qKiBPbmx5IHRoZSBuZXcgaW1nIGlzIHNob3duLiAqL1xuICAgICAgb2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XG5cbiAgICAgIC8qKiBTdGVwcyAqL1xuICAgICAgKHN0ZXBzIGFzIEFycmF5PG51bWJlcj4pLmZvckVhY2goKGEsIGIpID0+IHtcbiAgICAgICAgb2N0eC5kcmF3SW1hZ2UoaW1nLFxuICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgdywgaFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RlcCBmaW5hbFxuICAgICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICAgKi9cbiAgICBjb25zdCBvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxuICAgIGN0eCA9IG9jLmdldENvbnRleHQoJzJkJyk7XG4gICAgb2Mud2lkdGggPSBjb25maWcud2lkdGg7XG4gICAgb2MuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcbiAgICBjdHguZHJhd0ltYWdlKGltZyxcbiAgICAgIDAsIDAsXG4gICAgICBpbWcud2lkdGggKiAocSksIGltZy5oZWlnaHQgKiAocSksXG4gICAgICAwLCAwLFxuICAgICAgb2Mud2lkdGgsIG9jLmhlaWdodFxuICAgICk7XG4gICAgcmV0dXJuIG9jO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgSW1hZ2VcbiAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgKi9cbiAgY3JvcChjb25maWc/OiBJbWdDcm9wcGVyQ29uZmlnKTogSW1nQ3JvcHBlckV2ZW50IHtcbiAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWcgPyBtZXJnZURlZXAoe30sIHRoaXMuY29uZmlnIHx8IENPTkZJR19ERUZBVUxULCBjb25maWcpIDogdGhpcy5jb25maWc7XG4gICAgY29uc3QgYmFzZTY0ID0gdGhpcy5jcm9wcChuZXdDb25maWcpO1xuICAgIHJldHVybiB7XG4gICAgICBiYXNlNjQsXG4gICAgICBiYXNlNjRJbWFnZTogYmFzZTY0LFxuICAgICAgdHlwZTogdGhpcy5kZWZhdWx0VHlwZSB8fCB0aGlzLmNvbmZpZy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERlcHJlY2F0ZWQsIHVzZSBjcm9wKCkgaW5zdGVhZFxuICAgKi9cbiAgY3JvcHAobXlDb25maWc6IEltZ0Nyb3BwZXJDb25maWcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuY3JvcHBpbmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0O1xuICAgIGNvbnN0IGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcbiAgICBjb25zdCBsZWZ0ID0gcmVjdC5sZWZ0IC0gaW1nLmxlZnQ7XG4gICAgY29uc3QgdG9wID0gcmVjdC50b3AgLSBpbWcudG9wO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XG4gICAgfTtcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gdGhpcy5fc2NhbGU7XG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gdGhpcy5fc2NhbGU7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgfVxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nLFxuICAgICAgLShsZWZ0IC8gdGhpcy5fc2NhbGUpLCAtKHRvcCAvIHRoaXMuX3NjYWxlKSxcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGFudGlBbGlhc2VkUSA9IG15Q29uZmlnLmFudGlBbGlhc2VkID8gLjUgOiAxO1xuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCBhbnRpQWxpYXNlZFEpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCBhbnRpQWxpYXNlZFEpO1xuICAgIH1cbiAgICBsZXQgdXJsO1xuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGBpbWFnZS8ke215Q29uZmlnLnR5cGV9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5kZWZhdWx0VHlwZSk7XG4gICAgfVxuICAgIHRoaXMucmVzdWx0ID0gKHVybCk7XG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoe1xuICAgICAgYmFzZTY0SW1hZ2U6IHVybCxcbiAgICAgIGJhc2U2NDogdXJsLFxuICAgICAgdHlwZTogdGhpcy5kZWZhdWx0VHlwZSB8fCBteUNvbmZpZy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWVcbiAgICB9KTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxufVxuXG5jb25zdCBmaXhlZE51bSA9IChudW06IG51bWJlcikgPT4gcGFyc2VGbG9hdChudW0udG9GaXhlZCgwKSk7XG4iXX0=