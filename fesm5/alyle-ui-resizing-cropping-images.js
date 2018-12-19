import { __assign } from 'tslib';
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
/** @type {?} */
var CONFIG_DEFAULT = (/** @type {?} */ ({
    width: 250,
    height: 200,
    output: ImgResolution.Default,
    antiAliased: true
}));
var LyResizingCroppingImages = /** @class */ (function () {
    function LyResizingCroppingImages(_renderer, theme, elementRef, cd, _ngZone) {
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
        /** Set scale */
        get: /**
         * Set scale
         * @return {?}
         */
        function () {
            return this._scale;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.setScale(val);
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
            /** @type {?} */
            var canvas = this._imgCanvas.nativeElement;
            canvas.width = imgElement.width;
            canvas.height = imgElement.height;
            /** @type {?} */
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imgElement, 0, 0);
            /**
             * set zoom scale
             * @type {?}
             */
            var minScale = {
                width: this.config.width / canvas.width,
                height: this.config.height / canvas.height
            };
            this._minScale = Math.max(minScale.width, minScale.height);
        }
    };
    /**
     * @param {?} values
     * @return {?}
     */
    LyResizingCroppingImages.prototype._setStylesForContImg = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        /** @type {?} */
        var newStyles = (/** @type {?} */ ({}));
        /** @type {?} */
        var rootRect = this._rootRect();
        if (values.x !== void 0 && values.y !== void 0) {
            /** @type {?} */
            var x = rootRect.width / 2 - (values.x);
            /** @type {?} */
            var y = rootRect.height / 2 - (values.y);
            this._imgRect.x = (values.x);
            this._imgRect.y = (values.y);
            this._imgRect.xc = (x);
            this._imgRect.yc = (y);
        }
        newStyles.transform = "translate3d(" + (this._imgRect.x) + "px," + (this._imgRect.y) + "px, 0)";
        newStyles.transform += "scale(" + this._scal3Fix + ")";
        newStyles.transformOrigin = this._imgRect.xc + "px " + this._imgRect.yc + "px 0";
        for (var key in newStyles) {
            if (newStyles.hasOwnProperty(key)) {
                this._renderer.setStyle(this._imgContainer.nativeElement, key, newStyles[key]);
            }
        }
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype.resize$ = /**
     * @return {?}
     */
    function () {
        if (this.isLoaded) {
            this.updatePosition();
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
        var _img = (/** @type {?} */ (img.target));
        if (_img.files.length !== 1) {
            return;
        }
        /** @type {?} */
        var fileReader = new FileReader();
        this._fileName = _img.value.replace(/.*(\/|\\)/, '');
        fileReader.addEventListener('loadend', function (loadEvent) {
            /** @type {?} */
            var originalImageUrl = (/** @type {?} */ (((/** @type {?} */ (loadEvent.target))).result));
            _this.setImageUrl(originalImageUrl);
            /** Set type */
            if (!_this.config.type) {
                _this._defaultType = _img.files[0].type;
            }
            _this.cd.markForCheck();
        });
        fileReader.readAsDataURL(_img.files[0]);
    };
    /** Set the size of the image, the values can be 0 between 1, where 1 is the original size */
    /**
     * Set the size of the image, the values can be 0 between 1, where 1 is the original size
     * @param {?} size
     * @param {?=} noAutoCrop
     * @return {?}
     */
    LyResizingCroppingImages.prototype.setScale = /**
     * Set the size of the image, the values can be 0 between 1, where 1 is the original size
     * @param {?} size
     * @param {?=} noAutoCrop
     * @return {?}
     */
    function (size, noAutoCrop) {
        // fix min scale
        /** @type {?} */
        var newSize = size >= this.minScale && size <= 1 ? size : this.minScale;
        // check
        /** @type {?} */
        var changed = size != null && size !== this.scale && newSize !== this.scale;
        this._scale = size;
        if (!changed) {
            return;
        }
        this._scal3Fix = newSize;
        if (this.isLoaded) {
            if (changed) {
                /** @type {?} */
                var originPosition = __assign({}, this._imgRect);
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
            this._setStylesForContImg(__assign({}, this._getCenterPoints()));
        }
        else {
            return;
        }
        this.scaleChange.emit(size);
        if (!noAutoCrop) {
            this._cropIfAutoCrop();
        }
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype._getCenterPoints = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var root = (/** @type {?} */ (this.elementRef.nativeElement));
        /** @type {?} */
        var img = this._imgCanvas.nativeElement;
        /** @type {?} */
        var x = (root.offsetWidth - (img.width)) / 2;
        /** @type {?} */
        var y = (root.offsetHeight - (img.height)) / 2;
        return {
            x: x,
            y: y
        };
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
        var container = (/** @type {?} */ (this.elementRef.nativeElement));
        /** @type {?} */
        var min = {
            width: container.offsetWidth,
            height: container.offsetHeight
        };
        var _a = this._img, width = _a.width, height = _a.height;
        /** @type {?} */
        var minScale = {
            width: min.width / width,
            height: min.height / height
        };
        /** @type {?} */
        var result = Math.max(minScale.width, minScale.height);
        this.setScale(result);
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype.fit = /**
     * @return {?}
     */
    function () {
        this.setScale(this.minScale);
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype._moveStart = /**
     * @return {?}
     */
    function () {
        this.offset = {
            x: this._imgRect.x,
            y: this._imgRect.y,
            left: this._imgRect.xc,
            top: this._imgRect.yc
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
        var canvas = this._imgCanvas.nativeElement;
        /** @type {?} */
        var scaleFix = this._scal3Fix;
        /** @type {?} */
        var config = this.config;
        /** @type {?} */
        var startP = this.offset;
        // Limit for left
        if ((config.width / 2 / scaleFix) >= startP.left - (event.deltaX / scaleFix)) {
            x = startP.x + (startP.left) - (config.width / 2 / scaleFix);
        }
        // // Limit for top
        if ((config.height / 2 / scaleFix) >= (startP.top - (event.deltaY / scaleFix))) {
            y = startP.y + (startP.top) - (config.height / 2 / scaleFix);
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
            x: x, y: y
        });
    };
    /**
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    LyResizingCroppingImages.prototype.updatePosition = /**
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    function (x, y) {
        /** @type {?} */
        var hostRect = this._rootRect();
        /** @type {?} */
        var croppingContainerRect = this._areaCropperRect();
        if (x === void 0 && y === void 0) {
            x = this._imgRect.xc;
            y = this._imgRect.yc;
        }
        x = (croppingContainerRect.x - hostRect.x) - (x - (this.config.width / 2));
        y = (croppingContainerRect.y - hostRect.y) - (y - (this.config.height / 2));
        this._setStylesForContImg({
            x: x, y: y
        });
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype._slideEnd = /**
     * @return {?}
     */
    function () {
        this._cropIfAutoCrop();
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype._cropIfAutoCrop = /**
     * @return {?}
     */
    function () {
        if (this.config.autoCrop) {
            this.crop();
        }
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
        var scale = this._scal3Fix + .05;
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
            var canvas = this._imgCanvas.nativeElement;
            canvas.width = 0;
            canvas.height = 0;
            this.cd.markForCheck();
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
        var scale = this._scal3Fix - .05;
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
        var newStyles = __assign({}, this._getCenterPoints());
        this._setStylesForContImg(newStyles);
        this._cropIfAutoCrop();
    };
    /**
     * Load Image from URL
     * @param src URL
     * @param fn function that will be called before emit the event loaded
     */
    /**
     * Load Image from URL
     * @param {?} src URL
     * @param {?=} fn function that will be called before emit the event loaded
     * @return {?}
     */
    LyResizingCroppingImages.prototype.setImageUrl = /**
     * Load Image from URL
     * @param {?} src URL
     * @param {?=} fn function that will be called before emit the event loaded
     * @return {?}
     */
    function (src, fn) {
        var _this = this;
        this.clean();
        this._originalImgBase64 = src;
        /** @type {?} */
        var img = new Image;
        img.crossOrigin = 'anonymous';
        /** @type {?} */
        var cropEvent = {
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
        img.addEventListener('error', function () {
            _this.error.emit(cropEvent);
        });
        img.addEventListener('load', function () {
            _this._imgLoaded(img);
            cropEvent.width = img.width;
            cropEvent.height = img.height;
            _this._isLoadedImg = true;
            _this.cd.markForCheck();
            _this._ngZone
                .onStable
                .pipe(take(1))
                .subscribe(function () { return _this._ngZone.run(function () {
                _this.isLoaded = null;
                if (fn) {
                    fn();
                }
                else {
                    _this.setScale(_this.minScale, true);
                }
                _this.loaded.emit(cropEvent);
                _this.isLoaded = true;
                _this._cropIfAutoCrop();
                _this.cd.markForCheck();
            }); });
        });
    };
    /**
     * @param {?} degrees
     * @return {?}
     */
    LyResizingCroppingImages.prototype.rotate = /**
     * @param {?} degrees
     * @return {?}
     */
    function (degrees) {
        /** @type {?} */
        var validDegrees = this._rotation = convertToValidDegrees(degrees);
        /** @type {?} */
        var degreesRad = validDegrees * Math.PI / 180;
        /** @type {?} */
        var canvas = this._imgCanvas.nativeElement;
        /** @type {?} */
        var canvasClon = createCanvasImg(canvas);
        /** @type {?} */
        var ctx = canvas.getContext('2d');
        // clear
        ctx.clearRect(0, 0, canvasClon.width, canvasClon.height);
        // rotate canvas image
        this._renderer.setStyle(canvas, 'transform', "rotate(" + validDegrees + "deg) scale(" + 1 / this._scal3Fix + ")");
        this._renderer.setStyle(canvas, 'transformOrigin', this._imgRect.xc + "px " + this._imgRect.yc + "px 0");
        var _a = (/** @type {?} */ (canvas.getBoundingClientRect())), x = _a.x, y = _a.y;
        // save rect
        /** @type {?} */
        var canvasRect = canvas.getBoundingClientRect();
        // remove rotate styles
        this._renderer.removeStyle(canvas, 'transform');
        this._renderer.removeStyle(canvas, 'transformOrigin');
        // set w & h
        /** @type {?} */
        var w = canvasRect.width;
        /** @type {?} */
        var h = canvasRect.height;
        ctx.canvas.width = w;
        ctx.canvas.height = h;
        // clear
        ctx.clearRect(0, 0, w, h);
        // translate and rotate
        ctx.translate(w / 2, h / 2);
        ctx.rotate(degreesRad);
        ctx.drawImage(canvasClon, -canvasClon.width / 2, -canvasClon.height / 2);
        /** @type {?} */
        var rootRect = this._rootRect();
        this._setStylesForContImg({
            x: (x - rootRect.x),
            y: (y - rootRect.y)
        });
        this._cropIfAutoCrop();
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
        /**
         * Calculate total number of steps needed
         * @type {?}
         */
        var numSteps = Math.ceil(Math.log(Math.max(img.width, img.height) / Math.max(config.width, config.height)) / Math.log(2)) - 1;
        numSteps = numSteps <= 0 ? 0 : numSteps;
        /**
         * Array steps
         * @type {?}
         */
        var steps = Array.from(Array(numSteps).keys());
        /**
         * Context
         * @type {?}
         */
        var octx = img.getContext('2d');
        /** @type {?} */
        var q = (Math.pow((quality * 10), numSteps)) / (Math.pow(10, numSteps));
        /** @type {?} */
        var fileType = this._defaultType;
        /** If Steps => imageSmoothingQuality */
        if (numSteps) {
            /**
             * Set size
             * @type {?}
             */
            var w_1 = img.width * quality;
            /** @type {?} */
            var h_1 = img.height * quality;
            /** Only the new img is shown. */
            if (fileType === 'image/png' || fileType === 'image/svg+xml') {
                octx.globalCompositeOperation = 'copy';
            }
            /** Steps */
            ((/** @type {?} */ (steps))).forEach(function () {
                octx.drawImage(img, 0, 0, w_1, h_1);
            });
        }
        /**
         * Step final
         * Resizing & cropping image
         * @type {?}
         */
        var oc = document.createElement('canvas');
        /** @type {?} */
        var ctx = oc.getContext('2d');
        oc.width = config.width;
        oc.height = config.height;
        ctx.drawImage(img, 0, 0, img.width * q, img.height * q, 0, 0, oc.width, oc.height);
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
        this.cd.markForCheck();
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
        var imgRect = this._imgRect;
        /** @type {?} */
        var scaleFix = this._scal3Fix;
        /** @type {?} */
        var left = imgRect.xc - (myConfig.width / 2 / scaleFix);
        /** @type {?} */
        var top = imgRect.yc - (myConfig.height / 2 / scaleFix);
        /** @type {?} */
        var config = {
            width: myConfig.width,
            height: myConfig.height
        };
        canvasElement.width = config.width / scaleFix;
        canvasElement.height = config.height / scaleFix;
        /** @type {?} */
        var ctx = canvasElement.getContext('2d');
        if (myConfig.fill) {
            ctx.fillStyle = myConfig.fill;
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        ctx.drawImage((/** @type {?} */ (this._imgCanvas.nativeElement)), -(left), -(top));
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
            url = result.toDataURL("" + myConfig.type);
        }
        else {
            url = result.toDataURL(this._defaultType);
        }
        /** @type {?} */
        var cropEvent = {
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
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype._rootRect = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.elementRef.nativeElement.getBoundingClientRect()));
    };
    /**
     * @return {?}
     */
    LyResizingCroppingImages.prototype._areaCropperRect = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this._croppingContainer.nativeElement.getBoundingClientRect()));
    };
    LyResizingCroppingImages.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    selector: 'ly-img-cropper, ly-cropping',
                    template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart()\"\n(slide)=\"_move($event)\"\n(slideend)=\"_slideEnd()\">\n  <canvas #_imgCanvas></canvas>\n</div>\n<div #_croppingContainer *ngIf=\"_isLoadedImg; else content\" [className]=\"classes.croppingContainer\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.croppContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    LyResizingCroppingImages.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
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
    return LyResizingCroppingImages;
}());
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
    var val360 = limitNum(num, 360);
    /** @type {?} */
    var val90 = limitNum(val360.result, 90);
    /** @type {?} */
    var sign = Math.sign(num);
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
    var numAbs = Math.abs(num);
    /** @type {?} */
    var parts = Math.floor(numAbs / num2);
    /** @type {?} */
    var result;
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
        result: result,
        parts: parts
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
    var newCanvas = document.createElement('canvas');
    /** @type {?} */
    var context = newCanvas.getContext('2d');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBtZXJnZURlZXAsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH0sXG4gIGltZ0NvbnRhaW5lcjoge1xuICAgIGN1cnNvcjogJ21vdmUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgICcmID4gY2FudmFzJzoge1xuICAgICAgLy8gd2lkdGg6ICcxMDAlJyxcbiAgICAgIC8vIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH1cbiAgfSxcbiAgY3JvcHBpbmdDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgYm94U2hhZG93OiAnMCAwIDAgMjAwMDBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgfSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfSxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfVxuICB9LFxuICBjcm9wcENvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICcmLCAmID4gaW5wdXQnOiBMWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgJyYgKjpub3QoaW5wdXQpJzoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcbiAgICAnJiA+IGlucHV0Jzoge1xuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9XG4gIH1cbn0pO1xuLyoqIEltYWdlIENyb3BwZXIgQ29uZmlnICovXG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJDb25maWcge1xuICAvKiogQ3JvcHBlciBhcmVhIHdpZHRoKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqIENyb3BwZXIgYXJlYSBoZWlnaHQqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIEJhY2tncm91bmQgY29sb3IoIGRlZmF1bHQ6IG51bGwpLCBpZiBpcyBudWxsIGluIHBuZyBpcyB0cmFuc3BhcmVudCBidXQgbm90IGluIGpwZyAqL1xuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIFNldCBhbnRpLWFsaWFzZWQoIGRlZmF1bHQ6IHRydWUpICovXG4gIGFudGlBbGlhc2VkPzogYm9vbGVhbjtcbiAgYXV0b0Nyb3A/OiBib29sZWFuO1xuICBvdXRwdXQ/OiBJbWdPdXRwdXQgfCBJbWdSZXNvbHV0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltZ091dHB1dCB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG4vKipcbiAqIERlcHJlY2F0ZWQsIHVzZSBpbnN0ZWFkIEltZ0Nyb3BwZXJDb25maWdcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCB0eXBlIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZyA9IEltZ0Nyb3BwZXJDb25maWc7XG5cbi8qKiBJbWFnZSBvdXRwdXQgKi9cbmV4cG9ydCBlbnVtIEltZ1Jlc29sdXRpb24ge1xuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xuICBEZWZhdWx0LFxuICAvKiogT25seSBjcm9wcGluZyAqL1xuICBPcmlnaW5hbEltYWdlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckV2ZW50IHtcbiAgLyoqIENyb3BwZWQgaW1hZ2UgaW4gYmFzZTY0LCAhZGVwcmVjYXRlZCB1c2UgaW5zdGVhZCBgZGF0YVVSTGAgKi9cbiAgYmFzZTY0OiBzdHJpbmc7XG4gIC8qKiBDcm9wcGVkIGltYWdlIGRhdGEgVVJMICovXG4gIGRhdGFVUkw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvKiogRmlsZXR5cGUgKi9cbiAgdHlwZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIE9yaWdpbmFsIEltYWdlIGRhdGEgVVJMICovXG4gIG9yaWdpbmFsRGF0YVVSTDogc3RyaW5nO1xuICBzY2FsZTogbnVtYmVyO1xuICAvKiogQ3VycmVudCByb3RhdGlvbiBpbiBkZWdyZWVzICovXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIHBvc2l0aW9uOiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gIH07XG59XG5cbmNvbnN0IENPTkZJR19ERUZBVUxUID0gPEltZ0Nyb3BwZXJDb25maWc+e1xuICB3aWR0aDogMjUwLFxuICBoZWlnaHQ6IDIwMCxcbiAgb3V0cHV0OiBJbWdSZXNvbHV0aW9uLkRlZmF1bHQsXG4gIGFudGlBbGlhc2VkOiB0cnVlXG59O1xuXG5pbnRlcmZhY2UgSW1nUmVjdCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB4YzogbnVtYmVyO1xuICB5YzogbnVtYmVyO1xuICAvLyB3OiBudW1iZXI7XG4gIC8vIGg6IG51bWJlcjtcbiAgLyoqIHRyYW5zZm9ybSB3aXRoICovXG4gIHd0OiBudW1iZXI7XG4gIGh0OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbHktaW1nLWNyb3BwZXIsIGx5LWNyb3BwaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICdyZXNpemluZy1jcm9wcGluZy1pbWFnZXMuaHRtbCdcbiB9KVxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgX29yaWdpbmFsSW1nQmFzZTY0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgLyoqIE9yaWdpbmFsIGltYWdlICovXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcbiAgcHJpdmF0ZSBvZmZzZXQ6IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICBsZWZ0OiBudW1iZXJcbiAgICB0b3A6IG51bWJlclxuICB9O1xuICBwcml2YXRlIF9zY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9zY2FsM0ZpeDogbnVtYmVyO1xuICBwcml2YXRlIF9taW5TY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9jb25maWc6IEltZ0Nyb3BwZXJDb25maWc7XG4gIHByaXZhdGUgX2ltZ1JlY3Q6IEltZ1JlY3QgPSB7fSBhcyBhbnk7XG4gIHByaXZhdGUgX3JvdGF0aW9uOiBudW1iZXI7XG5cbiAgQFZpZXdDaGlsZCgnX2ltZ0NvbnRhaW5lcicpIF9pbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19jcm9wcGluZ0NvbnRhaW5lcicpIF9jcm9wcGluZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2ltZ0NhbnZhcycpIF9pbWdDYW52YXM6IEVsZW1lbnRSZWY8SFRNTENhbnZhc0VsZW1lbnQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2NhbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKVxuICBnZXQgY29uZmlnKCk6IEltZ0Nyb3BwZXJDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgc2V0IGNvbmZpZyh2YWw6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBtZXJnZURlZXAoe30sIENPTkZJR19ERUZBVUxULCB2YWwpO1xuICB9XG4gIC8qKiBTZXQgc2NhbGUgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG4gIHNldCBzY2FsZSh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuc2V0U2NhbGUodmFsKTtcbiAgfVxuXG4gIC8qKiBHZXQgbWluIHNjYWxlICovXG4gIGdldCBtaW5TY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW5TY2FsZTtcbiAgfVxuXG4gIC8qKiBXaGVuIGlzIGxvYWRlZCBpbWFnZSAqL1xuICBfaXNMb2FkZWRJbWc6IGJvb2xlYW47XG5cbiAgLyoqIFdoZW4gaXMgbG9hZGVkIGltYWdlICYgcmVhZHkgZm9yIGNyb3AgKi9cbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzQ3JvcHBlZDogYm9vbGVhbjtcblxuICAvKiogT24gbG9hZGVkIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogRW1pdCBhbiBlcnJvciB3aGVuIHRoZSBsb2FkZWQgaW1hZ2UgaXMgbm90IHZhbGlkICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuXG4gIHByaXZhdGUgX2RlZmF1bHRUeXBlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ltZ0xvYWRlZChpbWdFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgaWYgKGltZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2ltZyA9IGltZ0VsZW1lbnQ7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltZ0VsZW1lbnQud2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nRWxlbWVudC5oZWlnaHQ7XG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nRWxlbWVudCwgMCwgMCk7XG4gICAgICAvKiogc2V0IHpvb20gc2NhbGUgKi9cbiAgICAgIGNvbnN0IG1pblNjYWxlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyBjYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0IC8gY2FudmFzLmhlaWdodFxuICAgICAgfTtcbiAgICAgIHRoaXMuX21pblNjYWxlID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U3R5bGVzRm9yQ29udEltZyh2YWx1ZXM6IHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuICB9KSB7XG4gICAgY29uc3QgbmV3U3R5bGVzID0geyB9IGFzIGFueTtcbiAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgaWYgKHZhbHVlcy54ICE9PSB2b2lkIDAgJiYgdmFsdWVzLnkgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3QgeCA9IHJvb3RSZWN0LndpZHRoIC8gMiAtICh2YWx1ZXMueCk7XG4gICAgICBjb25zdCB5ID0gcm9vdFJlY3QuaGVpZ2h0IC8gMiAtICh2YWx1ZXMueSk7XG5cbiAgICAgIHRoaXMuX2ltZ1JlY3QueCA9ICh2YWx1ZXMueCk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnkgPSAodmFsdWVzLnkpO1xuICAgICAgdGhpcy5faW1nUmVjdC54YyA9ICh4KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueWMgPSAoeSk7XG4gICAgfVxuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHsodGhpcy5faW1nUmVjdC54KX1weCwkeyh0aGlzLl9pbWdSZWN0LnkpfXB4LCAwKWA7XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybSArPSBgc2NhbGUoJHt0aGlzLl9zY2FsM0ZpeH0pYDtcbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtT3JpZ2luID0gYCR7dGhpcy5faW1nUmVjdC54Y31weCAke3RoaXMuX2ltZ1JlY3QueWN9cHggMGA7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3U3R5bGVzKSB7XG4gICAgICBpZiAobmV3U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIGtleSwgbmV3U3R5bGVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSByZXNpemUkKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0SW5wdXRFdmVudChpbWc6IEV2ZW50KSB7XG4gICAgY29uc3QgX2ltZyA9IGltZy50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICB0aGlzLl9maWxlTmFtZSA9IF9pbWcudmFsdWUucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpO1xuXG4gICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKGxvYWRFdmVudCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZVVybCA9IChsb2FkRXZlbnQudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdCBhcyBzdHJpbmc7XG4gICAgICB0aGlzLnNldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xuICAgICAgLyoqIFNldCB0eXBlICovXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLnR5cGUpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzWzBdLnR5cGU7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChfaW1nLmZpbGVzWzBdKTtcbiAgfVxuXG4gIC8qKiBTZXQgdGhlIHNpemUgb2YgdGhlIGltYWdlLCB0aGUgdmFsdWVzIGNhbiBiZSAwIGJldHdlZW4gMSwgd2hlcmUgMSBpcyB0aGUgb3JpZ2luYWwgc2l6ZSAqL1xuICBzZXRTY2FsZShzaXplOiBudW1iZXIsIG5vQXV0b0Nyb3A/OiBib29sZWFuKSB7XG4gICAgLy8gZml4IG1pbiBzY2FsZVxuICAgIGNvbnN0IG5ld1NpemUgPSBzaXplID49IHRoaXMubWluU2NhbGUgJiYgc2l6ZSA8PSAxID8gc2l6ZSA6IHRoaXMubWluU2NhbGU7XG5cbiAgICAvLyBjaGVja1xuICAgIGNvbnN0IGNoYW5nZWQgPSBzaXplICE9IG51bGwgJiYgc2l6ZSAhPT0gdGhpcy5zY2FsZSAmJiBuZXdTaXplICE9PSB0aGlzLnNjYWxlO1xuICAgIHRoaXMuX3NjYWxlID0gc2l6ZTtcbiAgICBpZiAoIWNoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2NhbDNGaXggPSBuZXdTaXplO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICBjb25zdCBvcmlnaW5Qb3NpdGlvbiA9IHsuLi50aGlzLl9pbWdSZWN0fTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgICAgeDogb3JpZ2luUG9zaXRpb24ueCxcbiAgICAgICAgICB5OiBvcmlnaW5Qb3NpdGlvbi55LFxuICAgICAgICAgIGxlZnQ6IG9yaWdpblBvc2l0aW9uLnhjLFxuICAgICAgICAgIHRvcDogb3JpZ2luUG9zaXRpb24ueWNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7fSk7XG4gICAgICAgIHRoaXMuX21vdmUoe1xuICAgICAgICAgIHNyY0V2ZW50OiB7fSxcbiAgICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgICAgZGVsdGFZOiAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5taW5TY2FsZSkge1xuICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICAgIC4uLnRoaXMuX2dldENlbnRlclBvaW50cygpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2NhbGVDaGFuZ2UuZW1pdChzaXplKTtcbiAgICBpZiAoIW5vQXV0b0Nyb3ApIHtcbiAgICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIF9nZXRDZW50ZXJQb2ludHMoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGltZyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHggPSAocm9vdC5vZmZzZXRXaWR0aCAtIChpbWcud2lkdGgpKSAvIDI7XG4gICAgY29uc3QgeSA9IChyb290Lm9mZnNldEhlaWdodCAtIChpbWcuaGVpZ2h0KSkgLyAyO1xuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXG4gICAqL1xuICBmaXRUb1NjcmVlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBtaW4gPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2ltZztcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyB3aWR0aCxcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIGhlaWdodFxuICAgIH07XG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCk7XG4gICAgdGhpcy5zZXRTY2FsZShyZXN1bHQpO1xuICB9XG5cbiAgZml0KCkge1xuICAgIHRoaXMuc2V0U2NhbGUodGhpcy5taW5TY2FsZSk7XG4gIH1cblxuICBfbW92ZVN0YXJ0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgeDogdGhpcy5faW1nUmVjdC54LFxuICAgICAgeTogdGhpcy5faW1nUmVjdC55LFxuICAgICAgbGVmdDogdGhpcy5faW1nUmVjdC54YyxcbiAgICAgIHRvcDogdGhpcy5faW1nUmVjdC55Y1xuICAgIH07XG4gIH1cbiAgX21vdmUoZXZlbnQ6IHsgc3JjRXZlbnQ/OiB7fTsgZGVsdGFYOiBhbnk7IGRlbHRhWTogYW55OyB9KSB7XG4gICAgbGV0IHg6IG51bWJlciwgeTogbnVtYmVyO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHNjYWxlRml4ID0gdGhpcy5fc2NhbDNGaXg7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgY29uc3Qgc3RhcnRQID0gdGhpcy5vZmZzZXQ7XG4gICAgLy8gTGltaXQgZm9yIGxlZnRcbiAgICBpZiAoKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCkgPj0gc3RhcnRQLmxlZnQgLSAoZXZlbnQuZGVsdGFYIC8gc2NhbGVGaXgpKSB7XG4gICAgICB4ID0gc3RhcnRQLnggKyAoc3RhcnRQLmxlZnQpIC0gKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgfVxuXG4gICAgLy8gLy8gTGltaXQgZm9yIHRvcFxuICAgIGlmICgoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCkgPj0gKHN0YXJ0UC50b3AgLSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpKSkge1xuICAgICAgeSA9IHN0YXJ0UC55ICsgKHN0YXJ0UC50b3ApIC0gKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpO1xuICAgIH1cblxuICAgIC8vIC8vIExpbWl0IGZvciByaWdodFxuICAgIGlmICgoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSArIChjYW52YXMud2lkdGgpIC0gKHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSkgPD0gY29uZmlnLndpZHRoIC8gc2NhbGVGaXgpIHtcbiAgICAgIHggPSBzdGFydFAueCArIChzdGFydFAubGVmdCkgKyAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSAtIGNhbnZhcy53aWR0aDtcbiAgICB9XG5cbiAgICAvLyAvLyBMaW1pdCBmb3IgYm90dG9tXG4gICAgaWYgKCgoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCkgKyAoY2FudmFzLmhlaWdodCkgLSAoc3RhcnRQLnRvcCAtIChldmVudC5kZWx0YVkgLyBzY2FsZUZpeCkpKSA8PSAoY29uZmlnLmhlaWdodCAvIHNjYWxlRml4KSkge1xuICAgICAgeSA9IHN0YXJ0UC55ICsgKHN0YXJ0UC50b3ApICsgKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpIC0gY2FudmFzLmhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHByZXNzIHNoaWZ0S2V5LCBkZXByZWNhdGVkXG4gICAgLy8gaWYgKGV2ZW50LnNyY0V2ZW50ICYmIGV2ZW50LnNyY0V2ZW50LnNoaWZ0S2V5KSB7XG4gICAgLy8gICBpZiAoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA9PT0gTWF0aC5tYXgoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSwgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSkpIHtcbiAgICAvLyAgICAgeSA9IHRoaXMub2Zmc2V0LnRvcDtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHggPSB0aGlzLm9mZnNldC5sZWZ0O1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGlmICh4ID09PSB2b2lkIDApIHsgeCA9IChldmVudC5kZWx0YVggLyBzY2FsZUZpeCkgKyAodGhpcy5vZmZzZXQueCk7IH1cbiAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpICsgKHRoaXMub2Zmc2V0LnkpOyB9XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbih4PzogbnVtYmVyLCB5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgIGNvbnN0IGNyb3BwaW5nQ29udGFpbmVyUmVjdCA9IHRoaXMuX2FyZWFDcm9wcGVyUmVjdCgpO1xuICAgIGlmICh4ID09PSB2b2lkIDAgJiYgeSA9PT0gdm9pZCAwKSB7XG4gICAgICB4ID0gdGhpcy5faW1nUmVjdC54YztcbiAgICAgIHkgPSB0aGlzLl9pbWdSZWN0LnljO1xuICAgIH1cbiAgICB4ID0gKGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueCkgLSAoeCAtICh0aGlzLmNvbmZpZy53aWR0aCAvIDIpKTtcbiAgICB5ID0gKGNyb3BwaW5nQ29udGFpbmVyUmVjdC55IC0gaG9zdFJlY3QueSkgLSAoeSAtICh0aGlzLmNvbmZpZy5oZWlnaHQgLyAyKSk7XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICBfc2xpZGVFbmQoKSB7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nyb3BJZkF1dG9Dcm9wKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvQ3JvcCkge1xuICAgICAgdGhpcy5jcm9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqKyAqL1xuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCArIC4wNTtcbiAgICBpZiAoc2NhbGUgPiAwICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNjYWxlKDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhbiB0aGUgaW1nIGNyb3BwZXIgKi9cbiAgY2xlYW4oKSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIHRoaXMuX2ltZ1JlY3QgPSB7IH0gYXMgYW55O1xuICAgICAgdGhpcy5vZmZzZXQgPSBudWxsO1xuICAgICAgdGhpcy5zY2FsZSA9IG51bGw7XG4gICAgICB0aGlzLl9zY2FsM0ZpeCA9IG51bGw7XG4gICAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XG4gICAgICB0aGlzLl9taW5TY2FsZSA9IG51bGw7XG4gICAgICB0aGlzLl9kZWZhdWx0VHlwZSA9IG51bGw7XG4gICAgICB0aGlzLl9pc0xvYWRlZEltZyA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSBudWxsO1xuICAgICAgdGhpcy5pc0Nyb3BwZWQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgY2FudmFzLndpZHRoID0gMDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSAwO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiotICovXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCAtIC4wNTtcbiAgICBpZiAoc2NhbGUgPiB0aGlzLm1pblNjYWxlICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpdCgpO1xuICAgIH1cbiAgfVxuICBjZW50ZXIoKSB7XG4gICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgLi4udGhpcy5fZ2V0Q2VudGVyUG9pbnRzKClcbiAgICB9O1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcobmV3U3R5bGVzKTtcbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbi8qKlxuICogTG9hZCBJbWFnZSBmcm9tIFVSTFxuICogQHBhcmFtIHNyYyBVUkxcbiAqIEBwYXJhbSBmbiBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBlbWl0IHRoZSBldmVudCBsb2FkZWRcbiAqL1xuICBzZXRJbWFnZVVybChzcmM6IHN0cmluZywgZm4/OiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5jbGVhbigpO1xuICAgIHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0ID0gc3JjO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZTtcbiAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICBjb25zdCBjcm9wRXZlbnQ6IEltZ0Nyb3BwZXJFdmVudCA9IHtcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgdHlwZTogdGhpcy5fZGVmYXVsdFR5cGUsXG4gICAgICBkYXRhVVJMOiBudWxsLFxuICAgICAgYmFzZTY0OiBudWxsLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBzY2FsZTogbnVsbCxcbiAgICAgIG9yaWdpbmFsRGF0YVVSTDogc3JjLFxuICAgICAgcm90YXRpb246IG51bGwsXG4gICAgICBwb3NpdGlvbjogbnVsbFxuICAgIH07XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICB0aGlzLmVycm9yLmVtaXQoY3JvcEV2ZW50KTtcbiAgICB9KTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuX2ltZ0xvYWRlZChpbWcpO1xuICAgICAgY3JvcEV2ZW50LndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgY3JvcEV2ZW50LmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICB0aGlzLl9pc0xvYWRlZEltZyA9IHRydWU7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5fbmdab25lXG4gICAgICAgICAgLm9uU3RhYmxlXG4gICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSh0aGlzLm1pblNjYWxlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICByb3RhdGUoZGVncmVlczogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsaWREZWdyZWVzID0gdGhpcy5fcm90YXRpb24gPSBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoZGVncmVlcyk7XG4gICAgY29uc3QgZGVncmVlc1JhZCA9IHZhbGlkRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY2FudmFzQ2xvbiA9IGNyZWF0ZUNhbnZhc0ltZyhjYW52YXMpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgLy8gY2xlYXJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0Nsb24ud2lkdGgsIGNhbnZhc0Nsb24uaGVpZ2h0KTtcblxuICAgIC8vIHJvdGF0ZSBjYW52YXMgaW1hZ2VcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjYW52YXMsICd0cmFuc2Zvcm0nLCBgcm90YXRlKCR7dmFsaWREZWdyZWVzfWRlZykgc2NhbGUoJHsxIC8gdGhpcy5fc2NhbDNGaXh9KWApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybU9yaWdpbicsIGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgKTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuXG4gICAgLy8gc2F2ZSByZWN0XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIHJlbW92ZSByb3RhdGUgc3R5bGVzXG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtT3JpZ2luJyk7XG5cbiAgICAvLyBzZXQgdyAmIGhcblxuICAgIGNvbnN0IHcgPSBjYW52YXNSZWN0LndpZHRoO1xuICAgIGNvbnN0IGggPSBjYW52YXNSZWN0LmhlaWdodDtcblxuICAgIGN0eC5jYW52YXMud2lkdGggPSB3O1xuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgIC8vIHRyYW5zbGF0ZSBhbmQgcm90YXRlXG4gICAgY3R4LnRyYW5zbGF0ZSh3IC8gMiwgaCAvIDIpO1xuICAgIGN0eC5yb3RhdGUoZGVncmVlc1JhZCk7XG4gICAgY3R4LmRyYXdJbWFnZShjYW52YXNDbG9uLCAtY2FudmFzQ2xvbi53aWR0aCAvIDIsIC1jYW52YXNDbG9uLmhlaWdodCAvIDIpO1xuICAgIGNvbnN0IHJvb3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcblxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeDogKHggLSByb290UmVjdC54KSxcbiAgICAgIHk6ICh5IC0gcm9vdFJlY3QueSlcbiAgICB9KTtcblxuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIGltYWdlU21vb3RoaW5nUXVhbGl0eShpbWc6IEhUTUxDYW52YXNFbGVtZW50LCBjb25maWcsIHF1YWxpdHk6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICAvKiogQ2FsY3VsYXRlIHRvdGFsIG51bWJlciBvZiBzdGVwcyBuZWVkZWQgKi9cbiAgICBsZXQgIG51bVN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKE1hdGgubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCkgLyBNYXRoLm1heChjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpKSAvIE1hdGgubG9nKDIpKSAtIDE7XG4gICAgbnVtU3RlcHMgPSBudW1TdGVwcyA8PSAwID8gMCA6IG51bVN0ZXBzO1xuXG4gICAgLyoqQXJyYXkgc3RlcHMgKi9cbiAgICBjb25zdCBzdGVwcyA9IEFycmF5LmZyb20oQXJyYXkobnVtU3RlcHMpLmtleXMoKSk7XG5cbiAgICAvKiogQ29udGV4dCAqL1xuICAgIGNvbnN0IG9jdHggPSBpbWcuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHEgPSAoKHF1YWxpdHkgKiAxMCkgKiogbnVtU3RlcHMpIC8gKDEwICoqIG51bVN0ZXBzKTtcbiAgICBjb25zdCBmaWxlVHlwZSA9IHRoaXMuX2RlZmF1bHRUeXBlO1xuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cbiAgICBpZiAobnVtU3RlcHMpIHtcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cbiAgICAgIGlmIChmaWxlVHlwZSA9PT0gJ2ltYWdlL3BuZycgfHwgZmlsZVR5cGUgPT09ICdpbWFnZS9zdmcreG1sJykge1xuICAgICAgICBvY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcbiAgICAgIH1cblxuICAgICAgLyoqIFN0ZXBzICovXG4gICAgICAoc3RlcHMgYXMgQXJyYXk8bnVtYmVyPikuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcbiAgICAgICAgICAwLCAwLFxuICAgICAgICAgIHcsIGhcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0ZXAgZmluYWxcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAgICovXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAwLCAwLFxuICAgICAgaW1nLndpZHRoICogcSwgaW1nLmhlaWdodCAqIHEsXG4gICAgICAwLCAwLFxuICAgICAgb2Mud2lkdGgsIG9jLmhlaWdodFxuICAgICk7XG4gICAgcmV0dXJuIG9jO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgSW1hZ2VcbiAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgKi9cbiAgY3JvcChjb25maWc/OiBJbWdDcm9wcGVyQ29uZmlnKTogSW1nQ3JvcHBlckV2ZW50IHtcbiAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWcgPyBtZXJnZURlZXAoe30sIHRoaXMuY29uZmlnIHx8IENPTkZJR19ERUZBVUxULCBjb25maWcpIDogdGhpcy5jb25maWc7XG4gICAgY29uc3QgY3JvcEV2ZW50ID0gdGhpcy5faW1nQ3JvcChuZXdDb25maWcpO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIGNyb3BFdmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfaW1nQ3JvcChteUNvbmZpZzogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIGNvbnN0IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY29uc3QgaW1nUmVjdCA9IHRoaXMuX2ltZ1JlY3Q7XG4gICAgY29uc3Qgc2NhbGVGaXggPSB0aGlzLl9zY2FsM0ZpeDtcbiAgICBjb25zdCBsZWZ0ID0gaW1nUmVjdC54YyAtIChteUNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgY29uc3QgdG9wID0gaW1nUmVjdC55YyAtIChteUNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XG4gICAgfTtcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gc2NhbGVGaXg7XG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gc2NhbGVGaXg7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgfVxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQgYXMgYW55LFxuICAgICAgLShsZWZ0KSwgLSh0b3ApLFxuICAgICk7XG4gICAgbGV0IHJlc3VsdCA9IGNhbnZhc0VsZW1lbnQ7XG4gICAgY29uc3QgYW50aUFsaWFzZWRRID0gbXlDb25maWcuYW50aUFsaWFzZWQgPyAuNSA6IDE7XG4gICAgaWYgKG15Q29uZmlnLm91dHB1dCA9PT0gMCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBjb25maWcsIGFudGlBbGlhc2VkUSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXlDb25maWcub3V0cHV0ID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0ID0gdGhpcy5pbWFnZVNtb290aGluZ1F1YWxpdHkocmVzdWx0LCBteUNvbmZpZy5vdXRwdXQsIGFudGlBbGlhc2VkUSk7XG4gICAgfVxuICAgIGxldCB1cmw7XG4gICAgaWYgKG15Q29uZmlnLnR5cGUpIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwoYCR7bXlDb25maWcudHlwZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTCh0aGlzLl9kZWZhdWx0VHlwZSk7XG4gICAgfVxuICAgIGNvbnN0IGNyb3BFdmVudCA9IHtcbiAgICAgIGRhdGFVUkw6IHVybCxcbiAgICAgIGJhc2U2NDogdXJsLFxuICAgICAgdHlwZTogdGhpcy5fZGVmYXVsdFR5cGUgfHwgbXlDb25maWcudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodCxcbiAgICAgIG9yaWdpbmFsRGF0YVVSTDogdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQsXG4gICAgICBzY2FsZTogdGhpcy5fc2NhbDNGaXgsXG4gICAgICByb3RhdGlvbjogdGhpcy5fcm90YXRpb24sXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiB0aGlzLl9pbWdSZWN0LnhjLFxuICAgICAgICB5OiB0aGlzLl9pbWdSZWN0LnljXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfcm9vdFJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cblxuICBwcml2YXRlIF9hcmVhQ3JvcHBlclJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2Nyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgfVxuXG59XG5cbi8qKlxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDQ1KSA9PT0gOTBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyg0MCkgPT09IDBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcygxMDApID09PSA5MFxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMobnVtOiBudW1iZXIpIHtcbiAgY29uc3QgdmFsMzYwID0gbGltaXROdW0obnVtLCAzNjApO1xuICBjb25zdCB2YWw5MCA9IGxpbWl0TnVtKHZhbDM2MC5yZXN1bHQsIDkwKTtcbiAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbihudW0pO1xuICBpZiAodmFsOTAucmVzdWx0ID49ICg5MCAvIDIpKSB7XG4gICAgcmV0dXJuIDkwICogKHZhbDkwLnBhcnRzICsgMSkgKiBzaWduO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA5MCAqIHZhbDkwLnBhcnRzICogc2lnbjtcbiAgfVxufVxuXG4vKipcbiAqIGRlbW86XG4gKiBsaW1pdE51bSg0NTAsIDM2MCkgPT09IDkwXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGxpbWl0TnVtKG51bTogbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcbiAgY29uc3QgbnVtQWJzID0gTWF0aC5hYnMobnVtKTtcbiAgY29uc3QgcGFydHMgPSBNYXRoLmZsb29yKG51bUFicyAvIG51bTIpO1xuICBsZXQgcmVzdWx0OiBudW1iZXI7XG4gIGlmIChwYXJ0cykge1xuICAgIHJlc3VsdCA9IG51bUFicyAtIChudW0yICogcGFydHMpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IG51bTtcbiAgfVxuICBpZiAobnVtQWJzICE9PSBudW0pIHtcbiAgICByZXN1bHQgKj0gLTE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXN1bHQsXG4gICAgcGFydHNcbiAgfTtcbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhbnZhc0ltZyhpbWc6IEhUTUxDYW52YXNFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudCkge1xuXG4gIC8vIGNyZWF0ZSBhIG5ldyBjYW52YXNcbiAgY29uc3QgbmV3Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAvLyBzZXQgZGltZW5zaW9uc1xuICBuZXdDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gIG5ld0NhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuXG4gIC8vIGFwcGx5IHRoZSBvbGQgY2FudmFzIHRvIHRoZSBuZXcgb25lXG4gIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG5cbiAgLy8gcmV0dXJuIHRoZSBuZXcgY2FudmFzXG4gIHJldHVybiBuZXdDYW52YXM7XG59XG4iLCJpbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMeUhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5pbXBvcnQgeyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMgfSBmcm9tICcuL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBMeUhhbW1lckdlc3R1cmVDb25maWcgfVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNdXG59KVxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBZ0JNLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBRW5CLE1BQU0sSUFBSTtJQUNkLElBQUksRUFBRTtRQUNKLHFCQUFxQixFQUFFLE1BQU07UUFDN0Isa0JBQWtCLEVBQUUsTUFBTTtRQUMxQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsVUFBVSxFQUFFLFFBQVE7S0FDckI7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFB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