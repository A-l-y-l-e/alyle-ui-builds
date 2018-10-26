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
        /** get current scale */
        get: /**
         * get current scale
         * @return {?}
         */
        function () {
            return this._scale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyResizingCroppingImages.prototype, "minScale", {
        /** get min scale */
        get: /**
         * get min scale
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
                this._renderer.setStyle(this.imgContainer.nativeElement, key, newStyles[key]);
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
        this.defaultType = null;
        if (!this.config.type) {
            this.defaultType = _img.files[0].type;
        }
        this.isLoaded = false;
        this.isCropped = false;
        fileReader.addEventListener('loadend', function (loadEvent) {
            /** @type {?} */
            var originalImageUrl = /** @type {?} */ ((/** @type {?} */ (loadEvent.target)).result);
            _this.setImageUrl(originalImageUrl);
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
            var imgContainerRect = /** @type {?} */ (this.imgContainer.nativeElement.getBoundingClientRect());
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
    /** @deprecated, instead use setScale(1) */
    /**
     * \@deprecated, instead use setScale(1)
     * @return {?}
     */
    LyResizingCroppingImages.prototype['1:1'] = /**
     * \@deprecated, instead use setScale(1)
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
        var imgContainerRect = /** @type {?} */ (this.imgContainer.nativeElement.getBoundingClientRect());
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
        var imgContainerRect = /** @type {?} */ (this.imgContainer.nativeElement.getBoundingClientRect());
        /** @type {?} */
        var croppingContainerRect = /** @type {?} */ (this.croppingContainer.nativeElement.getBoundingClientRect());
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
    LyResizingCroppingImages.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.setImageUrl(this.src);
    };
    /**
     * @param {?=} img
     * @return {?}
     */
    LyResizingCroppingImages.prototype.center = /**
     * @param {?=} img
     * @return {?}
     */
    function (img) {
        if (!img) {
            img = this.imgContainer.nativeElement.firstElementChild;
        }
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
    LyResizingCroppingImages.prototype.setImageUrl = /**
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
            type: this.defaultType,
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
            console.log({ cropEvent: cropEvent });
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
     * Deprecated, use crop() instead
     */
    /**
     * Deprecated, use crop() instead
     * @param {?} myConfig
     * @return {?}
     */
    LyResizingCroppingImages.prototype.cropp = /**
     * Deprecated, use crop() instead
     * @param {?} myConfig
     * @return {?}
     */
    function (myConfig) {
        /** @type {?} */
        var canvasElement = document.createElement('canvas');
        /** @type {?} */
        var rect = /** @type {?} */ (this.croppingContainer.nativeElement.getBoundingClientRect());
        /** @type {?} */
        var img = /** @type {?} */ (this.imgContainer.nativeElement.firstElementChild.getBoundingClientRect());
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
            url = result.toDataURL(this.defaultType);
        }
        this.result = (url);
        /** @type {?} */
        var cropEvent = {
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
    };
    LyResizingCroppingImages.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'ly-cropping',
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
        imgContainer: [{ type: ViewChild, args: ['_imgContainer',] }],
        croppingContainer: [{ type: ViewChild, args: ['_croppingContainer',] }],
        src: [{ type: Input }],
        config: [{ type: Input }],
        loaded: [{ type: Output }],
        cropped: [{ type: Output }],
        error: [{ type: Output }]
    };
    return LyResizingCroppingImages;
}());
/** @type {?} */
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIG1lcmdlRGVlcCwgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyAkIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBpbWdDb250YWluZXI6IHtcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAnJiA+IGltZyc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9XG4gIH0sXG4gIGNyb3BwaW5nQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJzAgMCAwIDIwMDAwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBjb250ZW50OiBgJydgLFxuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH1cbiAgfSxcbiAgY3JvcHBDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAnJiwgJiA+IGlucHV0JzogTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICcmICo6bm90KGlucHV0KSc6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgJyYgPiBpbnB1dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcge1xuICAvKiogQ3JvcHBlciBhcmVhIHdpZHRoKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqIENyb3BwZXIgYXJlYSBoZWlnaHQqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIEJhY2tncm91bmQgY29sb3IoIGRlZmF1bHQ6IG51bGwpLCBpZiBpcyBudWxsIGluIHBuZyBpcyB0cmFuc3BhcmVudCBidXQgbm90IGluIGpwZyAqL1xuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIFNldCBhbnRpLWFsaWFzZWQoIGRlZmF1bHQ6IHRydWUpICovXG4gIGFudGlBbGlhc2VkPzogYm9vbGVhbjtcbiAgb3V0cHV0Pzoge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gIH0gfCBJbWFnZVJlc29sdXRpb24gfCBJbWdSZXNvbHV0aW9uO1xufVxuZXhwb3J0IHR5cGUgSW1nQ3JvcHBlckNvbmZpZyA9IEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZztcbmV4cG9ydCBlbnVtIEltZ1Jlc29sdXRpb24ge1xuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xuICBEZWZhdWx0LFxuICAvKiogT25seSBjcm9wcGluZyAqL1xuICBPcmlnaW5hbEltYWdlXG59XG4vKiogQGRlcHJlY2F0ZWQsIHVzZSBgSW1nUmVzb2x1dGlvbmAgaW5zdGVhZCAqL1xuZXhwb3J0IGVudW0gSW1hZ2VSZXNvbHV0aW9uIHtcbiAgLyoqIFJlc2l6aW5nICYgY3JvcHBpbmcgKi9cbiAgRGVmYXVsdCxcbiAgLyoqIE9ubHkgY3JvcHBpbmcgKi9cbiAgT3JpZ2luYWxJbWFnZVxufVxuXG4vKiogQGRlcHJlY2F0ZWQsIHVzZSBgSW1nQ3JvcHBlckV2ZW50YCBpbnN0ZWFkICovXG5leHBvcnQgdHlwZSBDcm9wcGVkSW1hZ2UgPSBJbWdDcm9wcGVyRXZlbnQ7XG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJFdmVudCB7XG4gIC8qKiBAZGVwcmVjYXRlZCwgdXNlIGBiYXNlNjRgIGluc3RlYWQgKi9cbiAgYmFzZTY0SW1hZ2U6IHN0cmluZztcbiAgYmFzZTY0OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VTdGF0ZSB7XG4gIGlzTG9hZGVkOiBib29sZWFuO1xuICBpc0Nyb3A6IGJvb2xlYW47XG59XG5jb25zdCBDT05GSUdfREVGQVVMVCA9IDxJbWdDcm9wcGVyQ29uZmlnPntcbiAgd2lkdGg6IDI1MCxcbiAgaGVpZ2h0OiAyMDAsXG4gIG91dHB1dDogSW1nUmVzb2x1dGlvbi5EZWZhdWx0LFxuICBhbnRpQWxpYXNlZDogdHJ1ZVxufTtcbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbHktY3JvcHBpbmcnLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5odG1sJ1xuIH0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHJlc3VsdDogc3RyaW5nO1xuICBwcml2YXRlIF9maWxlTmFtZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcbiAgcHJpdmF0ZSBvZmZzZXQ6IHt4OiBudW1iZXIsIHk6IG51bWJlciwgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcn07XG4gIHByaXZhdGUgX3NjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgX21pblNjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbmZpZzogSW1nQ3JvcHBlckNvbmZpZztcblxuICBAVmlld0NoaWxkKCdfaW1nQ29udGFpbmVyJykgaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfY3JvcHBpbmdDb250YWluZXInKSBjcm9wcGluZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgLyoqIEBkZXByZWNhdGVkICovXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHZhbDogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IG1lcmdlRGVlcCh7fSwgQ09ORklHX0RFRkFVTFQsIHZhbCk7XG4gIH1cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIC8qKiBnZXQgY3VycmVudCBzY2FsZSAqL1xuICBnZXQgc2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG4gIC8qKiBnZXQgbWluIHNjYWxlICovXG4gIGdldCBtaW5TY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gIH1cbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzQ3JvcHBlZDogYm9vbGVhbjtcblxuICAvKiogT24gbG9hZGVkIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgY3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogaXNzdWVzIGFuIGVycm9yIHdoZW4gdGhlIGxvYWRlZCBpbWFnZSBpcyBub3QgdmFsaWQgKi9cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0VHlwZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBwcml2YXRlIF9pbWdMb2FkZWQoaW1nRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCkge1xuICAgIGlmIChpbWdFbGVtZW50KSB7XG4gICAgICB0aGlzLl9pbWcgPSBpbWdFbGVtZW50O1xuICAgICAgLyoqIHNldCB6b29tIHNjYWxlICovXG4gICAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gdGhpcy5faW1nLndpZHRoICogMTAwLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCAvIHRoaXMuX2ltZy5oZWlnaHQgKiAxMDBcbiAgICAgIH07XG4gICAgICB0aGlzLl9taW5TY2FsZSA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwO1xuICAgICAgdGhpcy5maXQoKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U3R5bGVzRm9yQ29udEltZyhuZXdTdHlsZXM6IHtcbiAgICB3aWR0aDogc3RyaW5nO1xuICAgIGhlaWdodDogc3RyaW5nO1xuICAgIHRyYW5zZm9ybTogc3RyaW5nO1xuICB9KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3U3R5bGVzKSB7XG4gICAgICBpZiAobmV3U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudCwga2V5LCBuZXdTdHlsZXNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0SW5wdXRFdmVudChpbWc6IEV2ZW50KSB7XG4gICAgY29uc3QgX2ltZyA9IGltZy50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgdGhpcy5fZmlsZU5hbWUgPSBfaW1nLnZhbHVlLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKTtcblxuICAgIC8qKiBTZXQgdHlwZSAqL1xuICAgIHRoaXMuZGVmYXVsdFR5cGUgPSBudWxsO1xuICAgIGlmICghdGhpcy5jb25maWcudHlwZSkge1xuICAgICAgdGhpcy5kZWZhdWx0VHlwZSA9IF9pbWcuZmlsZXNbMF0udHlwZTtcbiAgICB9XG4gICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDcm9wcGVkID0gZmFsc2U7XG4gICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKGxvYWRFdmVudCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZVVybCA9IChsb2FkRXZlbnQudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdCBhcyBzdHJpbmc7XG4gICAgICB0aGlzLnNldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlc1swXSk7XG4gIH1cblxuICAvKiogU2V0IHRoZSBzaXplIG9mIHRoZSBpbWFnZSwgdGhlIHZhbHVlcyBjYW4gYmUgMCBiZXR3ZWVuIDEsIHdoZXJlIDEgaXMgdGhlIG9yaWdpbmFsIHNpemUgKi9cbiAgc2V0U2NhbGUoc2l6ZTogbnVtYmVyKSB7XG4gICAgLy8gZml4IG1pbiBzY2FsZVxuICAgIHNpemUgPSBzaXplID4gdGhpcy5taW5TY2FsZSAmJiBzaXplIDw9IDEgPyBzaXplIDogdGhpcy5taW5TY2FsZTtcbiAgICB0aGlzLl9zY2FsZSA9IHNpemU7XG4gICAgc2l6ZSA9IHNpemUgKiAxMDA7XG4gICAgY29uc3QgaW5pdGlhbEltZyA9IHRoaXMuX2ltZztcbiAgICBjb25zdCB3aWR0aCA9IGZpeGVkTnVtKGluaXRpYWxJbWcud2lkdGggKiBzaXplIC8gMTAwKTtcbiAgICBjb25zdCBoZWlnaHQgPSBmaXhlZE51bShpbml0aWFsSW1nLmhlaWdodCAqIHNpemUgLyAxMDApO1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBpZiAoIXRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICAgIHRyYW5zZm9ybTogdGhpcy5jdXN0b21DZW50ZXIod2lkdGgsIGhlaWdodClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbWdDb250YWluZXJSZWN0ID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgIHg6IChob3N0UmVjdC53aWR0aCAvIDIpIC0gKGltZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0LngpLCAvLyDDosKcwpNcbiAgICAgICAgeTogKGhvc3RSZWN0LmhlaWdodCAvIDIpIC0gKGltZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0LnkpLCAvLyDDosKcwpNcbiAgICAgICAgbGVmdDogaW1nQ29udGFpbmVyUmVjdC5sZWZ0IC0gaG9zdFJlY3QueCwgLy8gw6LCnMKTXG4gICAgICAgIHRvcDogaW1nQ29udGFpbmVyUmVjdC50b3AgLSBob3N0UmVjdC55IC8vIMOiwpzCk1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICB9IGFzIGFueSk7XG4gICAgICB0aGlzLl9tb3ZlKHtcbiAgICAgICAgc3JjRXZlbnQ6IHt9LFxuICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICB4OiAoaG9zdFJlY3Qud2lkdGggLyAyIC0gKHRoaXMub2Zmc2V0LnggKiAod2lkdGggLyBpbWdDb250YWluZXJSZWN0LndpZHRoKSkpICsgaG9zdFJlY3QueCArIHRoaXMub2Zmc2V0LngsXG4gICAgICAgICAgeTogKGhvc3RSZWN0LmhlaWdodCAvIDIgLSAodGhpcy5vZmZzZXQueSAqIChoZWlnaHQgLyBpbWdDb250YWluZXJSZWN0LmhlaWdodCkpKSArIGhvc3RSZWN0LnkgKyB0aGlzLm9mZnNldC55XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGN1c3RvbUNlbnRlcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBsID0gKHJvb3Qub2Zmc2V0V2lkdGggLSB3aWR0aCkgLyAyO1xuICAgIGNvbnN0IHIgPSAocm9vdC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZTNkKCR7bH1weCwgJHtyfXB4LCAwKWA7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQsIGluc3RlYWQgdXNlIHNldFNjYWxlKDEpICovXG4gICcxOjEnKCkge1xuICAgIHRoaXMuc2V0U2NhbGUoMSk7XG4gIH1cblxuICAvKipcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXG4gICAqL1xuICBmaXRUb1NjcmVlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBtaW4gPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBzaXplID0ge1xuICAgICAgd2lkdGg6IHRoaXMuX2ltZy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faW1nLmhlaWdodFxuICAgIH07XG4gICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gc2l6ZS53aWR0aCAqIDEwMCxcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIHNpemUuaGVpZ2h0ICogMTAwXG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMDtcbiAgICB0aGlzLnNldFNjYWxlKHJlc3VsdCk7XG4gIH1cblxuICBmaXQoKSB7XG4gICAgdGhpcy5zZXRTY2FsZSgwKTtcbiAgfVxuXG4gIF9tb3ZlU3RhcnQoZXZlbnQpIHtcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgY29uc3QgaW1nQ29udGFpbmVyUmVjdCA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgIHg6IGV2ZW50LmNlbnRlci54IC0gaW1nQ29udGFpbmVyUmVjdC54LFxuICAgICAgeTogZXZlbnQuY2VudGVyLnkgLSBpbWdDb250YWluZXJSZWN0LnksXG4gICAgICBsZWZ0OiBpbWdDb250YWluZXJSZWN0LmxlZnQgLSBob3N0UmVjdC54LFxuICAgICAgdG9wOiBpbWdDb250YWluZXJSZWN0LnRvcCAtIGhvc3RSZWN0LnlcbiAgICB9O1xuICB9XG4gIF9tb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHgsIHk7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lclJlY3QgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gICAgY29uc3QgY3JvcHBpbmdDb250YWluZXJSZWN0ID0gdGhpcy5jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG5cbiAgICAvLyBMaW1pdCBmb3IgbGVmdFxuICAgIGlmIChldmVudC5jZW50ZXIueCAtIHRoaXMub2Zmc2V0LnggPj0gY3JvcHBpbmdDb250YWluZXJSZWN0LngpIHtcbiAgICAgIHggPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0Lng7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoZXZlbnQuY2VudGVyLnkgLSB0aGlzLm9mZnNldC55ID49IGNyb3BwaW5nQ29udGFpbmVyUmVjdC55KSB7XG4gICAgICB5ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55O1xuICAgIH1cbiAgICAvLyBMaW1pdCBmb3IgcmlnaHRcbiAgICBpZiAoZXZlbnQuY2VudGVyLnggLSB0aGlzLm9mZnNldC54ICsgaW1nQ29udGFpbmVyUmVjdC53aWR0aCA8PSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC53aWR0aCkge1xuICAgICAgeCA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueCAtIGltZ0NvbnRhaW5lclJlY3Qud2lkdGggKyBjcm9wcGluZ0NvbnRhaW5lclJlY3Qud2lkdGg7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciBib3R0b21cbiAgICBpZiAoZXZlbnQuY2VudGVyLnkgLSB0aGlzLm9mZnNldC55ICsgaW1nQ29udGFpbmVyUmVjdC5oZWlnaHQgPD0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgKyBjcm9wcGluZ0NvbnRhaW5lclJlY3QuaGVpZ2h0KSB7XG4gICAgICB5ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55IC0gaW1nQ29udGFpbmVyUmVjdC5oZWlnaHQgKyBjcm9wcGluZ0NvbnRhaW5lclJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIFdoZW4gcHJlc3Mgc2hpZnRLZXlcbiAgICBpZiAoZXZlbnQuc3JjRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVgpID09PSBNYXRoLm1heChNYXRoLmFicyhldmVudC5kZWx0YVgpLCBNYXRoLmFicyhldmVudC5kZWx0YVkpKSkge1xuICAgICAgICB5ID0gdGhpcy5vZmZzZXQudG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeCA9IHRoaXMub2Zmc2V0LmxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHsgeCA9IGV2ZW50LmNlbnRlci54IC0gaG9zdFJlY3QueCAtICh0aGlzLm9mZnNldC54KTsgfVxuICAgIGlmICh5ID09PSB1bmRlZmluZWQpIHsgeSA9IGV2ZW50LmNlbnRlci55IC0gaG9zdFJlY3QueSAtICh0aGlzLm9mZnNldC55KTsgfVxuXG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB3aWR0aDogdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgMClgXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJvdW5kTnVtYmVyKG51bTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogMTAwMDAwKSAvIDEwMDAwMDtcbiAgfVxuICAvKiorICovXG4gIHpvb21JbigpIHtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5fc2NhbGUgKyAuMDUpO1xuICAgIGlmIChzY2FsZSA+IDAgJiYgc2NhbGUgPD0gMSkge1xuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIC8qKi0gKi9cbiAgem9vbU91dCgpIHtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5fc2NhbGUgLSAuMDUpO1xuICAgIGlmIChzY2FsZSA+IHRoaXMubWluU2NhbGUgJiYgc2NhbGUgPD0gMSkge1xuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZml0KCk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnNldEltYWdlVXJsKHRoaXMuc3JjKTtcbiAgfVxuICBjZW50ZXIoaW1nPzogSFRNTEltYWdlRWxlbWVudCkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICBpbWcgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIH1cbiAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICB3aWR0aDogYCR7aW1nLndpZHRofXB4YCxcbiAgICAgIGhlaWdodDogYCR7aW1nLmhlaWdodH1weGAsXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuY3VzdG9tQ2VudGVyKGltZy53aWR0aCwgaW1nLmhlaWdodClcbiAgICB9O1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcobmV3U3R5bGVzKTtcbiAgfVxuICBzZXRJbWFnZVVybChzcmM6IHN0cmluZykge1xuICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIGlmICghc3JjKSB7IHJldHVybjsgfVxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZTtcbiAgICBjb25zdCBjcm9wRXZlbnQ6IEltZ0Nyb3BwZXJFdmVudCA9IHtcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgdHlwZTogdGhpcy5kZWZhdWx0VHlwZSxcbiAgICAgIGJhc2U2NDogbnVsbCxcbiAgICAgIGJhc2U2NEltYWdlOiBudWxsLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGxcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCk7XG4gICAgfSk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbWdMb2FkZWQoaW1nKTtcbiAgICAgIGNyb3BFdmVudC53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgIGNyb3BFdmVudC5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgY29uc29sZS5sb2coe2Nyb3BFdmVudH0pO1xuICAgICAgdGhpcy5sb2FkZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgbWF4KC4uLnZhbHVlczogbnVtYmVyW10pIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4udmFsdWVzKTtcbiAgfVxuXG4gIHByaXZhdGUgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KGltZzogSFRNTENhbnZhc0VsZW1lbnQsIGNvbmZpZywgcXVhbGl0eTogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIC8qKiBDYWxjdWxhdGUgdG90YWwgbnVtYmVyIG9mIHN0ZXBzIG5lZWRlZCAqL1xuICAgIGxldCAgbnVtU3RlcHMgPSBNYXRoLmNlaWwoTWF0aC5sb2codGhpcy5tYXgoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KSAvIHRoaXMubWF4KGNvbmZpZy5oZWlnaHQsIGNvbmZpZy53aWR0aCkpIC8gTWF0aC5sb2coMikpIC0gMTtcbiAgICBudW1TdGVwcyA9IG51bVN0ZXBzIDw9IDAgPyAwIDogbnVtU3RlcHM7XG5cbiAgICAvKipBcnJheSBzdGVwcyAqL1xuICAgIGNvbnN0IHN0ZXBzID0gQXJyYXkuZnJvbShBcnJheShudW1TdGVwcykua2V5cygpKTtcblxuICAgIC8qKiBDb250ZXh0ICovXG4gICAgY29uc3Qgb2N0eCA9IGltZy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3QgcSA9IE1hdGgucG93KHF1YWxpdHkgKiAxMCwgbnVtU3RlcHMpIC8gTWF0aC5wb3coMTAsIG51bVN0ZXBzKTtcblxuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cbiAgICBpZiAobnVtU3RlcHMpIHtcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cbiAgICAgIG9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xuXG4gICAgICAvKiogU3RlcHMgKi9cbiAgICAgIChzdGVwcyBhcyBBcnJheTxudW1iZXI+KS5mb3JFYWNoKChhLCBiKSA9PiB7XG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcbiAgICAgICAgICAwLCAwLFxuICAgICAgICAgIHcsIGhcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0ZXAgZmluYWxcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAgICovXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAwLCAwLFxuICAgICAgaW1nLndpZHRoICogKHEpLCBpbWcuaGVpZ2h0ICogKHEpLFxuICAgICAgMCwgMCxcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcbiAgICApO1xuICAgIHJldHVybiBvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIEltYWdlXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICovXG4gIGNyb3AoY29uZmlnPzogSW1nQ3JvcHBlckNvbmZpZyk6IEltZ0Nyb3BwZXJFdmVudCB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnID8gbWVyZ2VEZWVwKHt9LCB0aGlzLmNvbmZpZyB8fCBDT05GSUdfREVGQVVMVCwgY29uZmlnKSA6IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHRoaXMuY3JvcHAobmV3Q29uZmlnKTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIERlcHJlY2F0ZWQsIHVzZSBjcm9wKCkgaW5zdGVhZFxuICAgKi9cbiAgY3JvcHAobXlDb25maWc6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgQ2xpZW50UmVjdDtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XG4gICAgY29uc3QgbGVmdCA9IHJlY3QubGVmdCAtIGltZy5sZWZ0O1xuICAgIGNvbnN0IHRvcCA9IHJlY3QudG9wIC0gaW1nLnRvcDtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICB3aWR0aDogbXlDb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IG15Q29uZmlnLmhlaWdodFxuICAgIH07XG4gICAgY2FudmFzRWxlbWVudC53aWR0aCA9IGNvbmZpZy53aWR0aCAvIHRoaXMuX3NjYWxlO1xuICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCAvIHRoaXMuX3NjYWxlO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAobXlDb25maWcuZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG15Q29uZmlnLmZpbGw7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xuICAgIH1cbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltZyxcbiAgICAgIC0obGVmdCAvIHRoaXMuX3NjYWxlKSwgLSh0b3AgLyB0aGlzLl9zY2FsZSksXG4gICAgKTtcbiAgICBsZXQgcmVzdWx0ID0gY2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBhbnRpQWxpYXNlZFEgPSBteUNvbmZpZy5hbnRpQWxpYXNlZCA/IC41IDogMTtcbiAgICBpZiAobXlDb25maWcub3V0cHV0ID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIGNvbmZpZywgYW50aUFsaWFzZWRRKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBteUNvbmZpZy5vdXRwdXQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIG15Q29uZmlnLm91dHB1dCwgYW50aUFsaWFzZWRRKTtcbiAgICB9XG4gICAgbGV0IHVybDtcbiAgICBpZiAobXlDb25maWcudHlwZSkge1xuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTChgaW1hZ2UvJHtteUNvbmZpZy50eXBlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKHRoaXMuZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgICB0aGlzLnJlc3VsdCA9ICh1cmwpO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHtcbiAgICAgIGJhc2U2NEltYWdlOiB1cmwsXG4gICAgICBiYXNlNjQ6IHVybCxcbiAgICAgIHR5cGU6IHRoaXMuZGVmYXVsdFR5cGUgfHwgbXlDb25maWcudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodFxuICAgIH07XG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XG4gICAgcmV0dXJuIGNyb3BFdmVudDtcbiAgfVxufVxuXG5jb25zdCBmaXhlZE51bSA9IChudW06IG51bWJlcikgPT4gcGFyc2VGbG9hdChudW0udG9GaXhlZCgwKSk7XG4iLCJpbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMeUhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5pbXBvcnQgeyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMgfSBmcm9tICcuL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBMeUhhbW1lckdlc3R1cmVDb25maWcgfVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNdXG59KVxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFlQSxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsSUFBTSxNQUFNLElBQUk7SUFDZCxJQUFJLEVBQUU7UUFDSixxQkFBcUIsRUFBRSxNQUFNO1FBQzdCLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsaUJBQWlCLEVBQUUsTUFBTTtRQUN6QixVQUFVLEVBQUUsTUFBTTtRQUNsQixPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxR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