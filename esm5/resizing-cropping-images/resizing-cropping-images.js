/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2 } from '@angular/core';
import { LyTheme2, mergeDeep, LY_COMMON_STYLES } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = ({
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
        '&:before, &:after': tslib_1.__assign({}, LY_COMMON_STYLES.fill, { content: "''" }),
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
ImgCropperConfig.prototype.output;
/** @typedef {?} */
var LyResizingCroppingImagesConfig;
export { LyResizingCroppingImagesConfig };
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
/**
 * @record
 */
export function ImgCropperEvent() { }
/**
 * Cropped image in base64
 * @type {?}
 */
ImgCropperEvent.prototype.base64;
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
 * Original Image in base64
 * @type {?}
 */
ImgCropperEvent.prototype.originalBase64;
/** @type {?} */
var CONFIG_DEFAULT = /** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImgResolution.Default,
    antiAliased: true
});
var LyResizingCroppingImages = /** @class */ (function () {
    function LyResizingCroppingImages(_renderer, theme, elementRef, cd) {
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
    Object.defineProperty(LyResizingCroppingImages.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._config = mergeDeep({}, CONFIG_DEFAULT, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyResizingCroppingImages.prototype, "scale", {
        /** Get current scale */
        get: /**
         * Get current scale
         * @return {?}
         */
        function () {
            return this._scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyResizingCroppingImages.prototype, "minScale", {
        /** Get min scale */
        get: /**
         * Get min scale
         * @return {?}
         */
        function () {
            return this._minScale;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} imgElement
     * @return {?}
     */
    LyResizingCroppingImages.prototype._imgLoaded = /**
     * @param {?} imgElement
     * @return {?}
     */
    function (imgElement) {
        if (imgElement) {
            this._img = imgElement;
            /** *
             * set zoom scale
              @type {?} */
            var minScale = {
                width: this.config.width / this._img.width * 100,
                height: this.config.height / this._img.height * 100
            };
            this._minScale = Math.max(minScale.width, minScale.height) / 100;
            this.fit();
            this.cd.markForCheck();
        }
    };
    /**
     * @param {?} newStyles
     * @return {?}
     */
    LyResizingCroppingImages.prototype._setStylesForContImg = /**
     * @param {?} newStyles
     * @return {?}
     */
    function (newStyles) {
        for (var key in newStyles) {
            if (newStyles.hasOwnProperty(key)) {
                this._renderer.setStyle(this._imgContainer.nativeElement, key, newStyles[key]);
            }
        }
    };
    /**
     * @param {?} img
     * @return {?}
     */
    LyResizingCroppingImages.prototype.selectInputEvent = /**
     * @param {?} img
     * @return {?}
     */
    function (img) {
        var _this = this;
        /** @type {?} */
        var _img = /** @type {?} */ (img.target);
        if (_img.files.length !== 1) {
            return;
        }
        /** @type {?} */
        var fileReader = new FileReader();
        this._fileName = _img.value.replace(/.*(\/|\\)/, '');
        /** Set type */
        this._defaultType = null;
        if (!this.config.type) {
            this._defaultType = _img.files[0].type;
        }
        this.isLoaded = false;
        this.isCropped = false;
        fileReader.addEventListener('loadend', function (loadEvent) {
            /** @type {?} */
            var originalImageUrl = /** @type {?} */ ((/** @type {?} */ (loadEvent.target)).result);
            _this._setImageUrl(originalImageUrl);
            _this.cd.markForCheck();
        });
        fileReader.readAsDataURL(_img.files[0]);
    };
    /** Set the size of the image, the values can be 0 between 1, where 1 is the original size */
    /**
     * Set the size of the image, the values can be 0 between 1, where 1 is the original size
     * @param {?} size
     * @return {?}
     */
    LyResizingCroppingImages.prototype.setScale = /**
     * Set the size of the image, the values can be 0 between 1, where 1 is the original size
     * @param {?} size
     * @return {?}
     */
    function (size) {
        // fix min scale
        size = size > this.minScale && size <= 1 ? size : this.minScale;
        this._scale = size;
        size = size * 100;
        /** @type {?} */
        var initialImg = this._img;
        /** @type {?} */
        var width = fixedNum(initialImg.width * size / 100);
        /** @type {?} */
        var height = fixedNum(initialImg.height * size / 100);
        /** @type {?} */
        var hostRect = /** @type {?} */ (this.elementRef.nativeElement.getBoundingClientRect());
        if (!this.isLoaded) {
            this._setStylesForContImg({
                width: width + "px",
                height: height + "px",
                transform: this.customCenter(width, height)
            });
        }
        else {
            /** @type {?} */
            var imgContainerRect = /** @type {?} */ (this._imgContainer.nativeElement.getBoundingClientRect());
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
                width: width + "px",
                height: height + "px",
            }));
            this._move({
                srcEvent: {},
                center: {
                    x: (hostRect.width / 2 - (this.offset.x * (width / imgContainerRect.width))) + hostRect.x + this.offset.x,
                    y: (hostRect.height / 2 - (this.offset.y * (height / imgContainerRect.height))) + hostRect.y + this.offset.y
                }
            });
        }
    };
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    LyResizingCroppingImages.prototype.customCenter = /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (width, height) {
        /** @type {?} */
        var root = /** @type {?} */ (this.elementRef.nativeElement);
        /** @type {?} */
        var l = (root.offsetWidth - width) / 2;
        /** @type {?} */
        var r = (root.offsetHeight - height) / 2;
        return "translate3d(" + l + "px, " + r + "px, 0)";
    };
    /**
     * Ajustar a la pantalla
     */
    /**
     * Ajustar a la pantalla
     * @return {?}
     */
    LyResizingCroppingImages.prototype.fitToScreen = /**
     * Ajustar a la pantalla
     * @return {?}
     */
    function () {
        /** @type {?} */
        var container = /** @type {?} */ (this.elementRef.nativeElement);
        /** @type {?} */
        var min = {
            width: container.offsetWidth,
            height: container.offsetHeight
        };
        /** @type {?} */
        var size = {
            width: this._img.width,
            height: this._img.height
        };
        /** @type {?} */
        var minScale = {
            width: min.width / size.width * 100,
            height: min.height / size.height * 100
        };
        /** @type {?} */
        var result = Math.max(minScale.width, minScale.height) / 100;
        this.setScale(result);
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype.fit = /**
     * @return {?}
     */
    function () {
        this.setScale(0);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LyResizingCroppingImages.prototype._moveStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var hostRect = /** @type {?} */ (this.elementRef.nativeElement.getBoundingClientRect());
        /** @type {?} */
        var imgContainerRect = /** @type {?} */ (this._imgContainer.nativeElement.getBoundingClientRect());
        this.offset = {
            x: event.center.x - imgContainerRect.x,
            y: event.center.y - imgContainerRect.y,
            left: imgContainerRect.left - hostRect.x,
            top: imgContainerRect.top - hostRect.y
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LyResizingCroppingImages.prototype._move = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var x;
        /** @type {?} */
        var y;
        /** @type {?} */
        var hostRect = /** @type {?} */ (this.elementRef.nativeElement.getBoundingClientRect());
        /** @type {?} */
        var imgContainerRect = /** @type {?} */ (this._imgContainer.nativeElement.getBoundingClientRect());
        /** @type {?} */
        var croppingContainerRect = /** @type {?} */ (this._croppingContainer.nativeElement.getBoundingClientRect());
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
            transform: "translate3d(" + x + "px, " + y + "px, 0)"
        });
    };
    /**
     * @param {?} num
     * @return {?}
     */
    LyResizingCroppingImages.prototype.roundNumber = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return Math.round(num * 100000) / 100000;
    };
    /**+ */
    /**
     * +
     * @return {?}
     */
    LyResizingCroppingImages.prototype.zoomIn = /**
     * +
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scale = this.roundNumber(this._scale + .05);
        if (scale > 0 && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.setScale(1);
        }
    };
    /** Clean the img cropper */
    /**
     * Clean the img cropper
     * @return {?}
     */
    LyResizingCroppingImages.prototype.clean = /**
     * Clean the img cropper
     * @return {?}
     */
    function () {
        this._defaultType = null;
        this.isLoaded = false;
        this.isCropped = false;
        this._originalImgBase64 = null;
        this.cd.markForCheck();
    };
    /**- */
    /**
     * -
     * @return {?}
     */
    LyResizingCroppingImages.prototype.zoomOut = /**
     * -
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scale = this.roundNumber(this._scale - .05);
        if (scale > this.minScale && scale <= 1) {
            this.setScale(scale);
        }
        else {
            this.fit();
        }
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype.center = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var img = this._imgContainer.nativeElement.firstElementChild;
        /** @type {?} */
        var newStyles = {
            width: img.width + "px",
            height: img.height + "px",
            transform: this.customCenter(img.width, img.height)
        };
        this._setStylesForContImg(newStyles);
    };
    /**
     * @param {?} src
     * @return {?}
     */
    LyResizingCroppingImages.prototype._setImageUrl = /**
     * @param {?} src
     * @return {?}
     */
    function (src) {
        var _this = this;
        this._originalImgBase64 = src;
        if (!src) {
            return;
        }
        /** @type {?} */
        var img = new Image;
        /** @type {?} */
        var cropEvent = {
            name: this._fileName,
            type: this._defaultType,
            base64: null,
            width: null,
            height: null,
            originalBase64: src
        };
        img.src = src;
        img.addEventListener('error', function (err) {
            _this.error.emit(cropEvent);
        });
        img.addEventListener('load', function () {
            _this._imgLoaded(img);
            cropEvent.width = img.width;
            cropEvent.height = img.height;
            _this.loaded.emit(cropEvent);
            _this.isLoaded = true;
            _this.cd.markForCheck();
        });
    };
    /**
     * @param {...?} values
     * @return {?}
     */
    LyResizingCroppingImages.prototype.max = /**
     * @param {...?} values
     * @return {?}
     */
    function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return Math.max.apply(Math, tslib_1.__spread(values));
    };
    /**
     * @param {?} img
     * @param {?} config
     * @param {?} quality
     * @return {?}
     */
    LyResizingCroppingImages.prototype.imageSmoothingQuality = /**
     * @param {?} img
     * @param {?} config
     * @param {?} quality
     * @return {?}
     */
    function (img, config, quality) {
        /** *
         * Calculate total number of steps needed
          @type {?} */
        var numSteps = Math.ceil(Math.log(this.max(img.width, img.height) / this.max(config.height, config.width)) / Math.log(2)) - 1;
        numSteps = numSteps <= 0 ? 0 : numSteps;
        /** *
         * Array steps
          @type {?} */
        var steps = Array.from(Array(numSteps).keys());
        /** *
         * Context
          @type {?} */
        var octx = img.getContext('2d');
        /** @type {?} */
        var q = Math.pow(quality * 10, numSteps) / Math.pow(10, numSteps);
        /** If Steps => imageSmoothingQuality */
        if (numSteps) {
            /** *
             * Set size
              @type {?} */
            var w_1 = img.width * quality;
            /** @type {?} */
            var h_1 = img.height * quality;
            /** Only the new img is shown. */
            octx.globalCompositeOperation = 'copy';
            /** Steps */
            (/** @type {?} */ (steps)).forEach(function (a, b) {
                octx.drawImage(img, 0, 0, w_1, h_1);
            });
        }
        /** *
         * Step final
         * Resizing & cropping image
          @type {?} */
        var oc = document.createElement('canvas');
        /** *
         * Step final
         * Resizing & cropping image
          @type {?} */
        var ctx = oc.getContext('2d');
        oc.width = config.width;
        oc.height = config.height;
        ctx.drawImage(img, 0, 0, img.width * (q), img.height * (q), 0, 0, oc.width, oc.height);
        return oc;
    };
    /**
     * Crop Image
     * Resizing & cropping image
     */
    /**
     * Crop Image
     * Resizing & cropping image
     * @param {?=} config
     * @return {?}
     */
    LyResizingCroppingImages.prototype.crop = /**
     * Crop Image
     * Resizing & cropping image
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var newConfig = config ? mergeDeep({}, this.config || CONFIG_DEFAULT, config) : this.config;
        /** @type {?} */
        var cropEvent = this._imgCrop(newConfig);
        return cropEvent;
    };
    /**
     * @ignore
     */
    /**
     * @ignore
     * @param {?} myConfig
     * @return {?}
     */
    LyResizingCroppingImages.prototype._imgCrop = /**
     * @ignore
     * @param {?} myConfig
     * @return {?}
     */
    function (myConfig) {
        /** @type {?} */
        var canvasElement = document.createElement('canvas');
        /** @type {?} */
        var rect = /** @type {?} */ (this._croppingContainer.nativeElement.getBoundingClientRect());
        /** @type {?} */
        var img = /** @type {?} */ (this._imgContainer.nativeElement.firstElementChild.getBoundingClientRect());
        /** @type {?} */
        var left = rect.left - img.left;
        /** @type {?} */
        var top = rect.top - img.top;
        /** @type {?} */
        var config = {
            width: myConfig.width,
            height: myConfig.height
        };
        canvasElement.width = config.width / this._scale;
        canvasElement.height = config.height / this._scale;
        /** @type {?} */
        var ctx = canvasElement.getContext('2d');
        if (myConfig.fill) {
            ctx.fillStyle = myConfig.fill;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        ctx.drawImage(this._img, -(left / this._scale), -(top / this._scale));
        /** @type {?} */
        var result = canvasElement;
        /** @type {?} */
        var antiAliasedQ = myConfig.antiAliased ? .5 : 1;
        if (myConfig.output === 0) {
            result = this.imageSmoothingQuality(result, config, antiAliasedQ);
        }
        else if (typeof myConfig.output === 'object') {
            result = this.imageSmoothingQuality(result, myConfig.output, antiAliasedQ);
        }
        /** @type {?} */
        var url;
        if (myConfig.type) {
            url = result.toDataURL("image/" + myConfig.type);
        }
        else {
            url = result.toDataURL(this._defaultType);
        }
        /** @type {?} */
        var cropEvent = {
            base64: url,
            type: this._defaultType || myConfig.type,
            name: this._fileName,
            width: config.width,
            height: config.height,
            originalBase64: this._originalImgBase64
        };
        this.cropped.emit(cropEvent);
        this.isCropped = true;
        return cropEvent;
    };
    LyResizingCroppingImages.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'ly-img-cropper, ly-cropping',
                    template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart($event)\"\n(slide)=\"_move($event)\">\n  <img *ngIf=\"isLoaded\" [src]=\"_originalImgBase64\">\n</div>\n<div #_croppingContainer *ngIf=\"isLoaded; else content\" [className]=\"classes.croppingContainer\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.croppContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    LyResizingCroppingImages.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    LyResizingCroppingImages.propDecorators = {
        _imgContainer: [{ type: ViewChild, args: ['_imgContainer',] }],
        _croppingContainer: [{ type: ViewChild, args: ['_croppingContainer',] }],
        config: [{ type: Input }],
        loaded: [{ type: Output }],
        cropped: [{ type: Output }],
        error: [{ type: Output }]
    };
    return LyResizingCroppingImages;
}());
export { LyResizingCroppingImages };
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
var fixedNum = function (num) { return parseFloat(num.toFixed(0)); };
var ɵ0 = fixedNum;
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFbEUsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLElBQU0sTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLEVBQUU7UUFDSixxQkFBcUIsRUFBRSxNQUFNO1FBQzdCLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsaUJBQWlCLEVBQUUsTUFBTTtRQUN6QixVQUFVLEVBQUUsTUFBTTtRQUNsQixPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDO1FBQ1AsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLGFBQWEsRUFBRSxNQUFNO1NBQ3RCO0tBQ0Y7SUFDRCxpQkFBaUIsRUFBRTtRQUNqQixRQUFRLEVBQUUsVUFBVTtRQUNwQixhQUFhLEVBQUUsTUFBTTtRQUNyQixTQUFTLEVBQUUs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LENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLFNBQVMsQ0FBQztLQUNsQjs7Z0JBaFpGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsc21CQUE0QztpQkFDNUM7Ozs7Z0JBdEhBLFNBQVM7Z0JBRUYsUUFBUTtnQkFUZixVQUFVO2dCQUlWLGlCQUFpQjs7O2dDQXlJaEIsU0FBUyxTQUFDLGVBQWU7cUNBQ3pCLFNBQVMsU0FBQyxvQkFBb0I7eUJBQzlCLEtBQUs7eUJBbUJMLE1BQU07MEJBRU4sTUFBTTt3QkFFTixNQUFNOzttQ0F4S1Q7O1NBZ0lhLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4WXJDLElBQU0sUUFBUSxHQUFHLFVBQUMsR0FBVyxJQUFLLE9BQUEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIG1lcmdlRGVlcCwgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBpbWdDb250YWluZXI6IHtcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAnJiA+IGltZyc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9XG4gIH0sXG4gIGNyb3BwaW5nQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJzAgMCAwIDIwMDAwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBjb250ZW50OiBgJydgLFxuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH1cbiAgfSxcbiAgY3JvcHBDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAnJiwgJiA+IGlucHV0JzogTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICcmICo6bm90KGlucHV0KSc6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgJyYgPiBpbnB1dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9XG59KTtcbi8qKiBJbWFnZSBDcm9wcGVyIENvbmZpZyAqL1xuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgLyoqIENyb3BwZXIgYXJlYSB3aWR0aCovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKiBDcm9wcGVyIGFyZWEgaGVpZ2h0Ki9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBJZiB0aGlzIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmV3IGltYWdlIHdpbGwgYmUgYXV0b21hdGljYWxseSBkZWZpbmVkICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcgKi9cbiAgZmlsbD86IHN0cmluZyB8IG51bGw7XG4gIC8qKiBTZXQgYW50aS1hbGlhc2VkKCBkZWZhdWx0OiB0cnVlKSAqL1xuICBhbnRpQWxpYXNlZD86IGJvb2xlYW47XG4gIG91dHB1dD86IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9IHwgSW1nUmVzb2x1dGlvbjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgdHlwZSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcgPSBJbWdDcm9wcGVyQ29uZmlnO1xuXG4vKiogSW1hZ2Ugb3V0cHV0ICovXG5leHBvcnQgZW51bSBJbWdSZXNvbHV0aW9uIHtcbiAgLyoqIFJlc2l6aW5nICYgY3JvcHBpbmcgKi9cbiAgRGVmYXVsdCxcbiAgLyoqIE9ubHkgY3JvcHBpbmcgKi9cbiAgT3JpZ2luYWxJbWFnZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJFdmVudCB7XG4gIC8qKiBDcm9wcGVkIGltYWdlIGluIGJhc2U2NCAqL1xuICBiYXNlNjQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvKiogRmlsZXR5cGUgKi9cbiAgdHlwZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIE9yaWdpbmFsIEltYWdlIGluIGJhc2U2NCAqL1xuICBvcmlnaW5hbEJhc2U2NDogc3RyaW5nO1xufVxuXG5jb25zdCBDT05GSUdfREVGQVVMVCA9IDxJbWdDcm9wcGVyQ29uZmlnPntcbiAgd2lkdGg6IDI1MCxcbiAgaGVpZ2h0OiAyMDAsXG4gIG91dHB1dDogSW1nUmVzb2x1dGlvbi5EZWZhdWx0LFxuICBhbnRpQWxpYXNlZDogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICdseS1pbWctY3JvcHBlciwgbHktY3JvcHBpbmcnLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5odG1sJ1xuIH0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBfb3JpZ2luYWxJbWdCYXNlNjQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsZU5hbWU6IHN0cmluZztcblxuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHByaXZhdGUgb2Zmc2V0OiB7eDogbnVtYmVyLCB5OiBudW1iZXIsIGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9O1xuICBwcml2YXRlIF9zY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9taW5TY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9jb25maWc6IEltZ0Nyb3BwZXJDb25maWc7XG5cbiAgQFZpZXdDaGlsZCgnX2ltZ0NvbnRhaW5lcicpIF9pbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19jcm9wcGluZ0NvbnRhaW5lcicpIF9jcm9wcGluZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQElucHV0KClcbiAgZ2V0IGNvbmZpZygpOiBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gbWVyZ2VEZWVwKHt9LCBDT05GSUdfREVGQVVMVCwgdmFsKTtcbiAgfVxuICAvKiogR2V0IGN1cnJlbnQgc2NhbGUgKi9cbiAgZ2V0IHNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG4gIC8qKiBHZXQgbWluIHNjYWxlICovXG4gIGdldCBtaW5TY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW5TY2FsZTtcbiAgfVxuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgaXNDcm9wcGVkOiBib29sZWFuO1xuXG4gIC8qKiBPbiBsb2FkZWQgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIE9uIGNyb3AgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSBjcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBFbWl0IGFuIGVycm9yIHdoZW4gdGhlIGxvYWRlZCBpbWFnZSBpcyBub3QgdmFsaWQgKi9cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBfZGVmYXVsdFR5cGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW1nTG9hZGVkKGltZ0VsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBpZiAoaW1nRWxlbWVudCkge1xuICAgICAgdGhpcy5faW1nID0gaW1nRWxlbWVudDtcbiAgICAgIC8qKiBzZXQgem9vbSBzY2FsZSAqL1xuICAgICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCAvIHRoaXMuX2ltZy53aWR0aCAqIDEwMCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgLyB0aGlzLl9pbWcuaGVpZ2h0ICogMTAwXG4gICAgICB9O1xuICAgICAgdGhpcy5fbWluU2NhbGUgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMDtcbiAgICAgIHRoaXMuZml0KCk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFN0eWxlc0ZvckNvbnRJbWcobmV3U3R5bGVzOiB7XG4gICAgd2lkdGg6IHN0cmluZztcbiAgICBoZWlnaHQ6IHN0cmluZztcbiAgICB0cmFuc2Zvcm06IHN0cmluZztcbiAgfSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1N0eWxlcykge1xuICAgICAgaWYgKG5ld1N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCBrZXksIG5ld1N0eWxlc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZWxlY3RJbnB1dEV2ZW50KGltZzogRXZlbnQpIHtcbiAgICBjb25zdCBfaW1nID0gaW1nLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChfaW1nLmZpbGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB0aGlzLl9maWxlTmFtZSA9IF9pbWcudmFsdWUucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpO1xuXG4gICAgLyoqIFNldCB0eXBlICovXG4gICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBudWxsO1xuICAgIGlmICghdGhpcy5jb25maWcudHlwZSkge1xuICAgICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzWzBdLnR5cGU7XG4gICAgfVxuICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IGZhbHNlO1xuICAgIGZpbGVSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChsb2FkRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgdGhpcy5fc2V0SW1hZ2VVcmwob3JpZ2luYWxJbWFnZVVybCk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChfaW1nLmZpbGVzWzBdKTtcbiAgfVxuXG4gIC8qKiBTZXQgdGhlIHNpemUgb2YgdGhlIGltYWdlLCB0aGUgdmFsdWVzIGNhbiBiZSAwIGJldHdlZW4gMSwgd2hlcmUgMSBpcyB0aGUgb3JpZ2luYWwgc2l6ZSAqL1xuICBzZXRTY2FsZShzaXplOiBudW1iZXIpIHtcbiAgICAvLyBmaXggbWluIHNjYWxlXG4gICAgc2l6ZSA9IHNpemUgPiB0aGlzLm1pblNjYWxlICYmIHNpemUgPD0gMSA/IHNpemUgOiB0aGlzLm1pblNjYWxlO1xuICAgIHRoaXMuX3NjYWxlID0gc2l6ZTtcbiAgICBzaXplID0gc2l6ZSAqIDEwMDtcbiAgICBjb25zdCBpbml0aWFsSW1nID0gdGhpcy5faW1nO1xuICAgIGNvbnN0IHdpZHRoID0gZml4ZWROdW0oaW5pdGlhbEltZy53aWR0aCAqIHNpemUgLyAxMDApO1xuICAgIGNvbnN0IGhlaWdodCA9IGZpeGVkTnVtKGluaXRpYWxJbWcuaGVpZ2h0ICogc2l6ZSAvIDEwMCk7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIGlmICghdGhpcy5pc0xvYWRlZCkge1xuICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLmN1c3RvbUNlbnRlcih3aWR0aCwgaGVpZ2h0KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgIHg6IChob3N0UmVjdC53aWR0aCAvIDIpIC0gKGltZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0LngpLCAvLyDinJNcbiAgICAgICAgeTogKGhvc3RSZWN0LmhlaWdodCAvIDIpIC0gKGltZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0LnkpLCAvLyDinJNcbiAgICAgICAgbGVmdDogaW1nQ29udGFpbmVyUmVjdC5sZWZ0IC0gaG9zdFJlY3QueCwgLy8g4pyTXG4gICAgICAgIHRvcDogaW1nQ29udGFpbmVyUmVjdC50b3AgLSBob3N0UmVjdC55IC8vIOKck1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICB9IGFzIGFueSk7XG4gICAgICB0aGlzLl9tb3ZlKHtcbiAgICAgICAgc3JjRXZlbnQ6IHt9LFxuICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICB4OiAoaG9zdFJlY3Qud2lkdGggLyAyIC0gKHRoaXMub2Zmc2V0LnggKiAod2lkdGggLyBpbWdDb250YWluZXJSZWN0LndpZHRoKSkpICsgaG9zdFJlY3QueCArIHRoaXMub2Zmc2V0LngsXG4gICAgICAgICAgeTogKGhvc3RSZWN0LmhlaWdodCAvIDIgLSAodGhpcy5vZmZzZXQueSAqIChoZWlnaHQgLyBpbWdDb250YWluZXJSZWN0LmhlaWdodCkpKSArIGhvc3RSZWN0LnkgKyB0aGlzLm9mZnNldC55XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGN1c3RvbUNlbnRlcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBsID0gKHJvb3Qub2Zmc2V0V2lkdGggLSB3aWR0aCkgLyAyO1xuICAgIGNvbnN0IHIgPSAocm9vdC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZTNkKCR7bH1weCwgJHtyfXB4LCAwKWA7XG4gIH1cblxuICAvKipcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXG4gICAqL1xuICBmaXRUb1NjcmVlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBtaW4gPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBzaXplID0ge1xuICAgICAgd2lkdGg6IHRoaXMuX2ltZy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faW1nLmhlaWdodFxuICAgIH07XG4gICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gc2l6ZS53aWR0aCAqIDEwMCxcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIHNpemUuaGVpZ2h0ICogMTAwXG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMDtcbiAgICB0aGlzLnNldFNjYWxlKHJlc3VsdCk7XG4gIH1cblxuICBmaXQoKSB7XG4gICAgdGhpcy5zZXRTY2FsZSgwKTtcbiAgfVxuXG4gIF9tb3ZlU3RhcnQoZXZlbnQpIHtcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgY29uc3QgaW1nQ29udGFpbmVyUmVjdCA9IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICB4OiBldmVudC5jZW50ZXIueCAtIGltZ0NvbnRhaW5lclJlY3QueCxcbiAgICAgIHk6IGV2ZW50LmNlbnRlci55IC0gaW1nQ29udGFpbmVyUmVjdC55LFxuICAgICAgbGVmdDogaW1nQ29udGFpbmVyUmVjdC5sZWZ0IC0gaG9zdFJlY3QueCxcbiAgICAgIHRvcDogaW1nQ29udGFpbmVyUmVjdC50b3AgLSBob3N0UmVjdC55XG4gICAgfTtcbiAgfVxuICBfbW92ZShldmVudCkge1xuICAgIGxldCB4LCB5O1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBjb25zdCBpbWdDb250YWluZXJSZWN0ID0gdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBjb25zdCBjcm9wcGluZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG5cbiAgICAvLyBMaW1pdCBmb3IgbGVmdFxuICAgIGlmIChldmVudC5jZW50ZXIueCAtIHRoaXMub2Zmc2V0LnggPj0gY3JvcHBpbmdDb250YWluZXJSZWN0LngpIHtcbiAgICAgIHggPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0Lng7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoZXZlbnQuY2VudGVyLnkgLSB0aGlzLm9mZnNldC55ID49IGNyb3BwaW5nQ29udGFpbmVyUmVjdC55KSB7XG4gICAgICB5ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55O1xuICAgIH1cbiAgICAvLyBMaW1pdCBmb3IgcmlnaHRcbiAgICBpZiAoZXZlbnQuY2VudGVyLnggLSB0aGlzLm9mZnNldC54ICsgaW1nQ29udGFpbmVyUmVjdC53aWR0aCA8PSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC53aWR0aCkge1xuICAgICAgeCA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueCAtIGltZ0NvbnRhaW5lclJlY3Qud2lkdGggKyBjcm9wcGluZ0NvbnRhaW5lclJlY3Qud2lkdGg7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciBib3R0b21cbiAgICBpZiAoZXZlbnQuY2VudGVyLnkgLSB0aGlzLm9mZnNldC55ICsgaW1nQ29udGFpbmVyUmVjdC5oZWlnaHQgPD0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgKyBjcm9wcGluZ0NvbnRhaW5lclJlY3QuaGVpZ2h0KSB7XG4gICAgICB5ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55IC0gaW1nQ29udGFpbmVyUmVjdC5oZWlnaHQgKyBjcm9wcGluZ0NvbnRhaW5lclJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIFdoZW4gcHJlc3Mgc2hpZnRLZXlcbiAgICBpZiAoZXZlbnQuc3JjRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVgpID09PSBNYXRoLm1heChNYXRoLmFicyhldmVudC5kZWx0YVgpLCBNYXRoLmFicyhldmVudC5kZWx0YVkpKSkge1xuICAgICAgICB5ID0gdGhpcy5vZmZzZXQudG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeCA9IHRoaXMub2Zmc2V0LmxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHsgeCA9IGV2ZW50LmNlbnRlci54IC0gaG9zdFJlY3QueCAtICh0aGlzLm9mZnNldC54KTsgfVxuICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHsgeSA9IGV2ZW50LmNlbnRlci55IC0gaG9zdFJlY3QueSAtICh0aGlzLm9mZnNldC55KTsgfVxuXG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB3aWR0aDogdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAwKWBcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcm91bmROdW1iZXIobnVtOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiAxMDAwMDApIC8gMTAwMDAwO1xuICB9XG4gIC8qKisgKi9cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLl9zY2FsZSArIC4wNSk7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYW4gdGhlIGltZyBjcm9wcGVyICovXG4gIGNsZWFuKCkge1xuICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gbnVsbDtcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IG51bGw7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKi0gKi9cbiAgem9vbU91dCgpIHtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5fc2NhbGUgLSAuMDUpO1xuICAgIGlmIChzY2FsZSA+IHRoaXMubWluU2NhbGUgJiYgc2NhbGUgPD0gMSkge1xuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZml0KCk7XG4gICAgfVxuICB9XG4gIGNlbnRlcigpIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICB3aWR0aDogYCR7aW1nLndpZHRofXB4YCxcbiAgICAgIGhlaWdodDogYCR7aW1nLmhlaWdodH1weGAsXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuY3VzdG9tQ2VudGVyKGltZy53aWR0aCwgaW1nLmhlaWdodClcbiAgICB9O1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcobmV3U3R5bGVzKTtcbiAgfVxuICBwcml2YXRlIF9zZXRJbWFnZVVybChzcmM6IHN0cmluZykge1xuICAgIHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0ID0gc3JjO1xuICAgIGlmICghc3JjKSB7IHJldHVybjsgfVxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZTtcbiAgICBjb25zdCBjcm9wRXZlbnQ6IEltZ0Nyb3BwZXJFdmVudCA9IHtcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgdHlwZTogdGhpcy5fZGVmYXVsdFR5cGUsXG4gICAgICBiYXNlNjQ6IG51bGwsXG4gICAgICB3aWR0aDogbnVsbCxcbiAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgIG9yaWdpbmFsQmFzZTY0OiBzcmNcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCk7XG4gICAgfSk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbWdMb2FkZWQoaW1nKTtcbiAgICAgIGNyb3BFdmVudC53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgIGNyb3BFdmVudC5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgdGhpcy5sb2FkZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgbWF4KC4uLnZhbHVlczogbnVtYmVyW10pIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4udmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KGltZzogSFRNTENhbnZhc0VsZW1lbnQsIGNvbmZpZywgcXVhbGl0eTogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIC8qKiBDYWxjdWxhdGUgdG90YWwgbnVtYmVyIG9mIHN0ZXBzIG5lZWRlZCAqL1xuICAgIGxldCAgbnVtU3RlcHMgPSBNYXRoLmNlaWwoTWF0aC5sb2codGhpcy5tYXgoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KSAvIHRoaXMubWF4KGNvbmZpZy5oZWlnaHQsIGNvbmZpZy53aWR0aCkpIC8gTWF0aC5sb2coMikpIC0gMTtcbiAgICBudW1TdGVwcyA9IG51bVN0ZXBzIDw9IDAgPyAwIDogbnVtU3RlcHM7XG5cbiAgICAvKipBcnJheSBzdGVwcyAqL1xuICAgIGNvbnN0IHN0ZXBzID0gQXJyYXkuZnJvbShBcnJheShudW1TdGVwcykua2V5cygpKTtcblxuICAgIC8qKiBDb250ZXh0ICovXG4gICAgY29uc3Qgb2N0eCA9IGltZy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3QgcSA9IE1hdGgucG93KHF1YWxpdHkgKiAxMCwgbnVtU3RlcHMpIC8gTWF0aC5wb3coMTAsIG51bVN0ZXBzKTtcblxuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cbiAgICBpZiAobnVtU3RlcHMpIHtcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cbiAgICAgIG9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xuXG4gICAgICAvKiogU3RlcHMgKi9cbiAgICAgIChzdGVwcyBhcyBBcnJheTxudW1iZXI+KS5mb3JFYWNoKChhLCBiKSA9PiB7XG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcbiAgICAgICAgICAwLCAwLFxuICAgICAgICAgIHcsIGhcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0ZXAgZmluYWxcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAgICovXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAwLCAwLFxuICAgICAgaW1nLndpZHRoICogKHEpLCBpbWcuaGVpZ2h0ICogKHEpLFxuICAgICAgMCwgMCxcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcbiAgICApO1xuICAgIHJldHVybiBvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIEltYWdlXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICovXG4gIGNyb3AoY29uZmlnPzogSW1nQ3JvcHBlckNvbmZpZyk6IEltZ0Nyb3BwZXJFdmVudCB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnID8gbWVyZ2VEZWVwKHt9LCB0aGlzLmNvbmZpZyB8fCBDT05GSUdfREVGQVVMVCwgY29uZmlnKSA6IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHRoaXMuX2ltZ0Nyb3AobmV3Q29uZmlnKTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9pbWdDcm9wKG15Q29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgY29uc3QgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5fY3JvcHBpbmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0O1xuICAgIGNvbnN0IGltZyA9IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XG4gICAgY29uc3QgbGVmdCA9IHJlY3QubGVmdCAtIGltZy5sZWZ0O1xuICAgIGNvbnN0IHRvcCA9IHJlY3QudG9wIC0gaW1nLnRvcDtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICB3aWR0aDogbXlDb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IG15Q29uZmlnLmhlaWdodFxuICAgIH07XG4gICAgY2FudmFzRWxlbWVudC53aWR0aCA9IGNvbmZpZy53aWR0aCAvIHRoaXMuX3NjYWxlO1xuICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCAvIHRoaXMuX3NjYWxlO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAobXlDb25maWcuZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG15Q29uZmlnLmZpbGw7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xuICAgIH1cbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltZyxcbiAgICAgIC0obGVmdCAvIHRoaXMuX3NjYWxlKSwgLSh0b3AgLyB0aGlzLl9zY2FsZSksXG4gICAgKTtcbiAgICBsZXQgcmVzdWx0ID0gY2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBhbnRpQWxpYXNlZFEgPSBteUNvbmZpZy5hbnRpQWxpYXNlZCA/IC41IDogMTtcbiAgICBpZiAobXlDb25maWcub3V0cHV0ID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIGNvbmZpZywgYW50aUFsaWFzZWRRKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBteUNvbmZpZy5vdXRwdXQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIG15Q29uZmlnLm91dHB1dCwgYW50aUFsaWFzZWRRKTtcbiAgICB9XG4gICAgbGV0IHVybDtcbiAgICBpZiAobXlDb25maWcudHlwZSkge1xuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTChgaW1hZ2UvJHtteUNvbmZpZy50eXBlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKHRoaXMuX2RlZmF1bHRUeXBlKTtcbiAgICB9XG4gICAgY29uc3QgY3JvcEV2ZW50ID0ge1xuICAgICAgYmFzZTY0OiB1cmwsXG4gICAgICB0eXBlOiB0aGlzLl9kZWZhdWx0VHlwZSB8fCBteUNvbmZpZy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWUsXG4gICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0LFxuICAgICAgb3JpZ2luYWxCYXNlNjQ6IHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0XG4gICAgfTtcbiAgICB0aGlzLmNyb3BwZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgIHRoaXMuaXNDcm9wcGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG59XG5cbi8qKiBAaWdub3JlICovXG5jb25zdCBmaXhlZE51bSA9IChudW06IG51bWJlcikgPT4gcGFyc2VGbG9hdChudW0udG9GaXhlZCgwKSk7XG4iXX0=