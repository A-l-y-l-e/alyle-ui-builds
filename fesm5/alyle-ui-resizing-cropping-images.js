import { __assign, __spread } from 'tslib';
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2, NgModule } from '@angular/core';
import { LyTheme2, mergeDeep, LY_COMMON_STYLES, LyHammerGestureConfig } from '@alyle/ui';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        '&:before, &:after': __assign({}, LY_COMMON_STYLES.fill, { content: "''" }),
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
/** @enum {number} */
var ImageResolution = {
    /** Resizing & cropping */
    Default: 0,
    /** Only cropping */
    OriginalImage: 1,
};
ImageResolution[ImageResolution.Default] = 'Default';
ImageResolution[ImageResolution.OriginalImage] = 'OriginalImage';
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
    /** @ignore @deprecated, instead use setScale(1) */
    /**
     * @ignore \@deprecated, instead use setScale(1)
     * @return {?}
     */
    LyResizingCroppingImages.prototype['1:1'] = /**
     * @ignore \@deprecated, instead use setScale(1)
     * @return {?}
     */
    function () {
        this.setScale(1);
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
        this.src = src;
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
            base64Image: null,
            width: null,
            height: null
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
        return Math.max.apply(Math, __spread(values));
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
        var cropEvent = this.cropp(newConfig);
        return cropEvent;
    };
    /**
     * @ignore @deprecated, use crop() instead
     */
    /**
     * @ignore \@deprecated, use crop() instead
     * @param {?} myConfig
     * @return {?}
     */
    LyResizingCroppingImages.prototype.cropp = /**
     * @ignore \@deprecated, use crop() instead
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
        this.result = (url);
        /** @type {?} */
        var cropEvent = {
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
    };
    LyResizingCroppingImages.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'ly-img-cropper, ly-cropping',
                    template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart($event)\"\n(slide)=\"_move($event)\">\n  <img *ngIf=\"isLoaded\" [src]=\"src\">\n</div>\n<div #_croppingContainer *ngIf=\"isLoaded; else content\" [className]=\"classes.croppingContainer\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.croppContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
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
        src: [{ type: Input }],
        config: [{ type: Input }],
        loaded: [{ type: Output }],
        cropped: [{ type: Output }],
        error: [{ type: Output }]
    };
    return LyResizingCroppingImages;
}());
/** *
 * @ignore
  @type {?} */
var fixedNum = function (num) { return parseFloat(num.toFixed(0)); };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyResizingCroppingImageModule = /** @class */ (function () {
    function LyResizingCroppingImageModule() {
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
    return LyResizingCroppingImageModule;
}());

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

export { ImgResolution, ImageResolution, LyResizingCroppingImages, LyResizingCroppingImageModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIG1lcmdlRGVlcCwgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBpbWdDb250YWluZXI6IHtcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAnJiA+IGltZyc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9XG4gIH0sXG4gIGNyb3BwaW5nQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJzAgMCAwIDIwMDAwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBjb250ZW50OiBgJydgLFxuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH1cbiAgfSxcbiAgY3JvcHBDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAnJiwgJiA+IGlucHV0JzogTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICcmICo6bm90KGlucHV0KSc6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgJyYgPiBpbnB1dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcge1xuICAvKiogQ3JvcHBlciBhcmVhIHdpZHRoKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqIENyb3BwZXIgYXJlYSBoZWlnaHQqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIEJhY2tncm91bmQgY29sb3IoIGRlZmF1bHQ6IG51bGwpLCBpZiBpcyBudWxsIGluIHBuZyBpcyB0cmFuc3BhcmVudCBidXQgbm90IGluIGpwZyAqL1xuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIFNldCBhbnRpLWFsaWFzZWQoIGRlZmF1bHQ6IHRydWUpICovXG4gIGFudGlBbGlhc2VkPzogYm9vbGVhbjtcbiAgb3V0cHV0Pzoge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gIH0gfCBJbWFnZVJlc29sdXRpb24gfCBJbWdSZXNvbHV0aW9uO1xufVxuZXhwb3J0IHR5cGUgSW1nQ3JvcHBlckNvbmZpZyA9IEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZztcblxuLyoqIEltYWdlIG91dHB1dCAqL1xuZXhwb3J0IGVudW0gSW1nUmVzb2x1dGlvbiB7XG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXG4gIERlZmF1bHQsXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXG4gIE9yaWdpbmFsSW1hZ2Vcbn1cbi8qKiBAaWdub3JlIEBkZXByZWNhdGVkLCB1c2UgYEltZ1Jlc29sdXRpb25gIGluc3RlYWQgKi9cbmV4cG9ydCBlbnVtIEltYWdlUmVzb2x1dGlvbiB7XG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXG4gIERlZmF1bHQsXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXG4gIE9yaWdpbmFsSW1hZ2Vcbn1cblxuLyoqIEBkZXByZWNhdGVkLCB1c2UgYEltZ0Nyb3BwZXJFdmVudGAgaW5zdGVhZCAqL1xuZXhwb3J0IHR5cGUgQ3JvcHBlZEltYWdlID0gSW1nQ3JvcHBlckV2ZW50O1xuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyRXZlbnQge1xuICAvKiogQGRlcHJlY2F0ZWQsIHVzZSBgYmFzZTY0YCBpbnN0ZWFkICovXG4gIGJhc2U2NEltYWdlOiBzdHJpbmc7XG4gIGJhc2U2NDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEltYWdlU3RhdGUge1xuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgaXNDcm9wOiBib29sZWFuO1xufVxuY29uc3QgQ09ORklHX0RFRkFVTFQgPSA8SW1nQ3JvcHBlckNvbmZpZz57XG4gIHdpZHRoOiAyNTAsXG4gIGhlaWdodDogMjAwLFxuICBvdXRwdXQ6IEltZ1Jlc29sdXRpb24uRGVmYXVsdCxcbiAgYW50aUFsaWFzZWQ6IHRydWVcbn07XG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ2x5LWltZy1jcm9wcGVyLCBseS1jcm9wcGluZycsXG4gIHRlbXBsYXRlVXJsOiAncmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmh0bWwnXG4gfSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICByZXN1bHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsZU5hbWU6IHN0cmluZztcblxuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHByaXZhdGUgb2Zmc2V0OiB7eDogbnVtYmVyLCB5OiBudW1iZXIsIGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9O1xuICBwcml2YXRlIF9zY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9taW5TY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9jb25maWc6IEltZ0Nyb3BwZXJDb25maWc7XG5cbiAgQFZpZXdDaGlsZCgnX2ltZ0NvbnRhaW5lcicpIF9pbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19jcm9wcGluZ0NvbnRhaW5lcicpIF9jcm9wcGluZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgLyoqIEBkZXByZWNhdGVkIEBpZ25vcmUgKi9cbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGdldCBjb25maWcoKTogSW1nQ3JvcHBlckNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbDogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IG1lcmdlRGVlcCh7fSwgQ09ORklHX0RFRkFVTFQsIHZhbCk7XG4gIH1cbiAgLyoqIEdldCBjdXJyZW50IHNjYWxlICovXG4gIGdldCBzY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY2FsZTtcbiAgfVxuICAvKiogR2V0IG1pbiBzY2FsZSAqL1xuICBnZXQgbWluU2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gIH1cbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzQ3JvcHBlZDogYm9vbGVhbjtcblxuICAvKiogT24gbG9hZGVkIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgY3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogRW1pdCBhbiBlcnJvciB3aGVuIHRoZSBsb2FkZWQgaW1hZ2UgaXMgbm90IHZhbGlkICovXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuXG4gIHByaXZhdGUgX2RlZmF1bHRUeXBlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ltZ0xvYWRlZChpbWdFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgaWYgKGltZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2ltZyA9IGltZ0VsZW1lbnQ7XG4gICAgICAvKiogc2V0IHpvb20gc2NhbGUgKi9cbiAgICAgIGNvbnN0IG1pblNjYWxlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyB0aGlzLl9pbWcud2lkdGggKiAxMDAsXG4gICAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0IC8gdGhpcy5faW1nLmhlaWdodCAqIDEwMFxuICAgICAgfTtcbiAgICAgIHRoaXMuX21pblNjYWxlID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDA7XG4gICAgICB0aGlzLmZpdCgpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZXNGb3JDb250SW1nKG5ld1N0eWxlczoge1xuICAgIHdpZHRoOiBzdHJpbmc7XG4gICAgaGVpZ2h0OiBzdHJpbmc7XG4gICAgdHJhbnNmb3JtOiBzdHJpbmc7XG4gIH0pIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdTdHlsZXMpIHtcbiAgICAgIGlmIChuZXdTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudCwga2V5LCBuZXdTdHlsZXNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0SW5wdXRFdmVudChpbWc6IEV2ZW50KSB7XG4gICAgY29uc3QgX2ltZyA9IGltZy50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgdGhpcy5fZmlsZU5hbWUgPSBfaW1nLnZhbHVlLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKTtcblxuICAgIC8qKiBTZXQgdHlwZSAqL1xuICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gbnVsbDtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnR5cGUpIHtcbiAgICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gX2ltZy5maWxlc1swXS50eXBlO1xuICAgIH1cbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcbiAgICBmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCAobG9hZEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEltYWdlVXJsID0gKGxvYWRFdmVudC50YXJnZXQgYXMgRmlsZVJlYWRlcikucmVzdWx0IGFzIHN0cmluZztcbiAgICAgIHRoaXMuX3NldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlc1swXSk7XG4gIH1cblxuICAvKiogU2V0IHRoZSBzaXplIG9mIHRoZSBpbWFnZSwgdGhlIHZhbHVlcyBjYW4gYmUgMCBiZXR3ZWVuIDEsIHdoZXJlIDEgaXMgdGhlIG9yaWdpbmFsIHNpemUgKi9cbiAgc2V0U2NhbGUoc2l6ZTogbnVtYmVyKSB7XG4gICAgLy8gZml4IG1pbiBzY2FsZVxuICAgIHNpemUgPSBzaXplID4gdGhpcy5taW5TY2FsZSAmJiBzaXplIDw9IDEgPyBzaXplIDogdGhpcy5taW5TY2FsZTtcbiAgICB0aGlzLl9zY2FsZSA9IHNpemU7XG4gICAgc2l6ZSA9IHNpemUgKiAxMDA7XG4gICAgY29uc3QgaW5pdGlhbEltZyA9IHRoaXMuX2ltZztcbiAgICBjb25zdCB3aWR0aCA9IGZpeGVkTnVtKGluaXRpYWxJbWcud2lkdGggKiBzaXplIC8gMTAwKTtcbiAgICBjb25zdCBoZWlnaHQgPSBmaXhlZE51bShpbml0aWFsSW1nLmhlaWdodCAqIHNpemUgLyAxMDApO1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBpZiAoIXRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIod2lkdGgsIGhlaWdodClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbWdDb250YWluZXJSZWN0ID0gdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICB4OiAoaG9zdFJlY3Qud2lkdGggLyAyKSAtIChpbWdDb250YWluZXJSZWN0LnggLSBob3N0UmVjdC54KSwgLy8gw6LCnMKTXG4gICAgICAgIHk6IChob3N0UmVjdC5oZWlnaHQgLyAyKSAtIChpbWdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55KSwgLy8gw6LCnMKTXG4gICAgICAgIGxlZnQ6IGltZ0NvbnRhaW5lclJlY3QubGVmdCAtIGhvc3RSZWN0LngsIC8vIMOiwpzCk1xuICAgICAgICB0b3A6IGltZ0NvbnRhaW5lclJlY3QudG9wIC0gaG9zdFJlY3QueSAvLyDDosKcwpNcbiAgICAgIH07XG4gICAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgfSBhcyBhbnkpO1xuICAgICAgdGhpcy5fbW92ZSh7XG4gICAgICAgIHNyY0V2ZW50OiB7fSxcbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgeDogKGhvc3RSZWN0LndpZHRoIC8gMiAtICh0aGlzLm9mZnNldC54ICogKHdpZHRoIC8gaW1nQ29udGFpbmVyUmVjdC53aWR0aCkpKSArIGhvc3RSZWN0LnggKyB0aGlzLm9mZnNldC54LFxuICAgICAgICAgIHk6IChob3N0UmVjdC5oZWlnaHQgLyAyIC0gKHRoaXMub2Zmc2V0LnkgKiAoaGVpZ2h0IC8gaW1nQ29udGFpbmVyUmVjdC5oZWlnaHQpKSkgKyBob3N0UmVjdC55ICsgdGhpcy5vZmZzZXQueVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjdXN0b21DZW50ZXIod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgbCA9IChyb290Lm9mZnNldFdpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICBjb25zdCByID0gKHJvb3Qub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgcmV0dXJuIGB0cmFuc2xhdGUzZCgke2x9cHgsICR7cn1weCwgMClgO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgQGRlcHJlY2F0ZWQsIGluc3RlYWQgdXNlIHNldFNjYWxlKDEpICovXG4gICcxOjEnKCkge1xuICAgIHRoaXMuc2V0U2NhbGUoMSk7XG4gIH1cblxuICAvKipcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXG4gICAqL1xuICBmaXRUb1NjcmVlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBtaW4gPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBzaXplID0ge1xuICAgICAgd2lkdGg6IHRoaXMuX2ltZy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faW1nLmhlaWdodFxuICAgIH07XG4gICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gc2l6ZS53aWR0aCAqIDEwMCxcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIHNpemUuaGVpZ2h0ICogMTAwXG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMDtcbiAgICB0aGlzLnNldFNjYWxlKHJlc3VsdCk7XG4gIH1cblxuICBmaXQoKSB7XG4gICAgdGhpcy5zZXRTY2FsZSgwKTtcbiAgfVxuXG4gIF9tb3ZlU3RhcnQoZXZlbnQpIHtcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgY29uc3QgaW1nQ29udGFpbmVyUmVjdCA9IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICB4OiBldmVudC5jZW50ZXIueCAtIGltZ0NvbnRhaW5lclJlY3QueCxcbiAgICAgIHk6IGV2ZW50LmNlbnRlci55IC0gaW1nQ29udGFpbmVyUmVjdC55LFxuICAgICAgbGVmdDogaW1nQ29udGFpbmVyUmVjdC5sZWZ0IC0gaG9zdFJlY3QueCxcbiAgICAgIHRvcDogaW1nQ29udGFpbmVyUmVjdC50b3AgLSBob3N0UmVjdC55XG4gICAgfTtcbiAgfVxuICBfbW92ZShldmVudCkge1xuICAgIGxldCB4LCB5O1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBjb25zdCBpbWdDb250YWluZXJSZWN0ID0gdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBjb25zdCBjcm9wcGluZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG5cbiAgICAvLyBMaW1pdCBmb3IgbGVmdFxuICAgIGlmIChldmVudC5jZW50ZXIueCAtIHRoaXMub2Zmc2V0LnggPj0gY3JvcHBpbmdDb250YWluZXJSZWN0LngpIHtcbiAgICAgIHggPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0Lng7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoZXZlbnQuY2VudGVyLnkgLSB0aGlzLm9mZnNldC55ID49IGNyb3BwaW5nQ29udGFpbmVyUmVjdC55KSB7XG4gICAgICB5ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55O1xuICAgIH1cbiAgICAvLyBMaW1pdCBmb3IgcmlnaHRcbiAgICBpZiAoZXZlbnQuY2VudGVyLnggLSB0aGlzLm9mZnNldC54ICsgaW1nQ29udGFpbmVyUmVjdC53aWR0aCA8PSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC53aWR0aCkge1xuICAgICAgeCA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueCAtIGltZ0NvbnRhaW5lclJlY3Qud2lkdGggKyBjcm9wcGluZ0NvbnRhaW5lclJlY3Qud2lkdGg7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciBib3R0b21cbiAgICBpZiAoZXZlbnQuY2VudGVyLnkgLSB0aGlzLm9mZnNldC55ICsgaW1nQ29udGFpbmVyUmVjdC5oZWlnaHQgPD0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgKyBjcm9wcGluZ0NvbnRhaW5lclJlY3QuaGVpZ2h0KSB7XG4gICAgICB5ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55IC0gaW1nQ29udGFpbmVyUmVjdC5oZWlnaHQgKyBjcm9wcGluZ0NvbnRhaW5lclJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIFdoZW4gcHJlc3Mgc2hpZnRLZXlcbiAgICBpZiAoZXZlbnQuc3JjRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVgpID09PSBNYXRoLm1heChNYXRoLmFicyhldmVudC5kZWx0YVgpLCBNYXRoLmFicyhldmVudC5kZWx0YVkpKSkge1xuICAgICAgICB5ID0gdGhpcy5vZmZzZXQudG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeCA9IHRoaXMub2Zmc2V0LmxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHsgeCA9IGV2ZW50LmNlbnRlci54IC0gaG9zdFJlY3QueCAtICh0aGlzLm9mZnNldC54KTsgfVxuICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHsgeSA9IGV2ZW50LmNlbnRlci55IC0gaG9zdFJlY3QueSAtICh0aGlzLm9mZnNldC55KTsgfVxuXG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB3aWR0aDogdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAwKWBcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcm91bmROdW1iZXIobnVtOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiAxMDAwMDApIC8gMTAwMDAwO1xuICB9XG4gIC8qKisgKi9cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLl9zY2FsZSArIC4wNSk7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYW4gdGhlIGltZyBjcm9wcGVyICovXG4gIGNsZWFuKCkge1xuICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gbnVsbDtcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqLSAqL1xuICB6b29tT3V0KCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLl9zY2FsZSAtIC4wNSk7XG4gICAgaWYgKHNjYWxlID4gdGhpcy5taW5TY2FsZSAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXQoKTtcbiAgICB9XG4gIH1cbiAgY2VudGVyKCkge1xuICAgIGNvbnN0IGltZyA9IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHtpbWcud2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHtpbWcuaGVpZ2h0fXB4YCxcbiAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxuICAgIH07XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyhuZXdTdHlsZXMpO1xuICB9XG4gIHByaXZhdGUgX3NldEltYWdlVXJsKHNyYzogc3RyaW5nKSB7XG4gICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgaWYgKCFzcmMpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xuICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckV2ZW50ID0ge1xuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWUsXG4gICAgICB0eXBlOiB0aGlzLl9kZWZhdWx0VHlwZSxcbiAgICAgIGJhc2U2NDogbnVsbCxcbiAgICAgIGJhc2U2NEltYWdlOiBudWxsLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGxcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCk7XG4gICAgfSk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbWdMb2FkZWQoaW1nKTtcbiAgICAgIGNyb3BFdmVudC53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgIGNyb3BFdmVudC5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgdGhpcy5sb2FkZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgbWF4KC4uLnZhbHVlczogbnVtYmVyW10pIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4udmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KGltZzogSFRNTENhbnZhc0VsZW1lbnQsIGNvbmZpZywgcXVhbGl0eTogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIC8qKiBDYWxjdWxhdGUgdG90YWwgbnVtYmVyIG9mIHN0ZXBzIG5lZWRlZCAqL1xuICAgIGxldCAgbnVtU3RlcHMgPSBNYXRoLmNlaWwoTWF0aC5sb2codGhpcy5tYXgoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KSAvIHRoaXMubWF4KGNvbmZpZy5oZWlnaHQsIGNvbmZpZy53aWR0aCkpIC8gTWF0aC5sb2coMikpIC0gMTtcbiAgICBudW1TdGVwcyA9IG51bVN0ZXBzIDw9IDAgPyAwIDogbnVtU3RlcHM7XG5cbiAgICAvKipBcnJheSBzdGVwcyAqL1xuICAgIGNvbnN0IHN0ZXBzID0gQXJyYXkuZnJvbShBcnJheShudW1TdGVwcykua2V5cygpKTtcblxuICAgIC8qKiBDb250ZXh0ICovXG4gICAgY29uc3Qgb2N0eCA9IGltZy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3QgcSA9IE1hdGgucG93KHF1YWxpdHkgKiAxMCwgbnVtU3RlcHMpIC8gTWF0aC5wb3coMTAsIG51bVN0ZXBzKTtcblxuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cbiAgICBpZiAobnVtU3RlcHMpIHtcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cbiAgICAgIG9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xuXG4gICAgICAvKiogU3RlcHMgKi9cbiAgICAgIChzdGVwcyBhcyBBcnJheTxudW1iZXI+KS5mb3JFYWNoKChhLCBiKSA9PiB7XG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcbiAgICAgICAgICAwLCAwLFxuICAgICAgICAgIHcsIGhcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0ZXAgZmluYWxcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAgICovXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAwLCAwLFxuICAgICAgaW1nLndpZHRoICogKHEpLCBpbWcuaGVpZ2h0ICogKHEpLFxuICAgICAgMCwgMCxcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcbiAgICApO1xuICAgIHJldHVybiBvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIEltYWdlXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICovXG4gIGNyb3AoY29uZmlnPzogSW1nQ3JvcHBlckNvbmZpZyk6IEltZ0Nyb3BwZXJFdmVudCB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnID8gbWVyZ2VEZWVwKHt9LCB0aGlzLmNvbmZpZyB8fCBDT05GSUdfREVGQVVMVCwgY29uZmlnKSA6IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHRoaXMuY3JvcHAobmV3Q29uZmlnKTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmUgQGRlcHJlY2F0ZWQsIHVzZSBjcm9wKCkgaW5zdGVhZFxuICAgKi9cbiAgY3JvcHAobXlDb25maWc6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLl9jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XG4gICAgY29uc3QgaW1nID0gdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcbiAgICBjb25zdCBsZWZ0ID0gcmVjdC5sZWZ0IC0gaW1nLmxlZnQ7XG4gICAgY29uc3QgdG9wID0gcmVjdC50b3AgLSBpbWcudG9wO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XG4gICAgfTtcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gdGhpcy5fc2NhbGU7XG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gdGhpcy5fc2NhbGU7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgfVxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nLFxuICAgICAgLShsZWZ0IC8gdGhpcy5fc2NhbGUpLCAtKHRvcCAvIHRoaXMuX3NjYWxlKSxcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGFudGlBbGlhc2VkUSA9IG15Q29uZmlnLmFudGlBbGlhc2VkID8gLjUgOiAxO1xuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCBhbnRpQWxpYXNlZFEpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCBhbnRpQWxpYXNlZFEpO1xuICAgIH1cbiAgICBsZXQgdXJsO1xuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGBpbWFnZS8ke215Q29uZmlnLnR5cGV9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5fZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgICB0aGlzLnJlc3VsdCA9ICh1cmwpO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHtcbiAgICAgIGJhc2U2NEltYWdlOiB1cmwsXG4gICAgICBiYXNlNjQ6IHVybCxcbiAgICAgIHR5cGU6IHRoaXMuX2RlZmF1bHRUeXBlIHx8IG15Q29uZmlnLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHRcbiAgICB9O1xuICAgIHRoaXMuY3JvcHBlZC5lbWl0KGNyb3BFdmVudCk7XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSB0cnVlO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cbn1cblxuLyoqIEBpZ25vcmUgKi9cbmNvbnN0IGZpeGVkTnVtID0gKG51bTogbnVtYmVyKSA9PiBwYXJzZUZsb2F0KG51bS50b0ZpeGVkKDApKTtcbiIsImltcG9ydCB7IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEx5SGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmltcG9ydCB7IEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyB9IGZyb20gJy4vcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRywgdXNlQ2xhc3M6IEx5SGFtbWVyR2VzdHVyZUNvbmZpZyB9XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5UmVzaXppbmdDcm9wcGluZ0ltYWdlc11cbn0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQWFBLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztB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