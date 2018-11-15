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
        console.log('from event');
        /** @type {?} */
        var _img = (/** @type {?} */ (img.target));
        if (_img.files.length !== 1) {
            return;
        }
        /** @type {?} */
        var fileReader = new FileReader();
        this._fileName = _img.value.replace(/.*(\/|\\)/, '');
        /** Set type */
        if (!this.config.type) {
            this._defaultType = _img.files[0].type;
        }
        fileReader.addEventListener('loadend', function (loadEvent) {
            /** @type {?} */
            var originalImageUrl = (/** @type {?} */ (((/** @type {?} */ (loadEvent.target))).result));
            _this.setImageUrl(originalImageUrl);
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
        size = size >= this.minScale && size <= 1 ? size : this.minScale;
        // check
        /** @type {?} */
        var changed = size !== this.scale;
        this._scale = size;
        size = this._scal3Fix = size;
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
        this.scaleChange.emit(this._scale);
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
        this.setScale(0);
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
        var scaleFix = this._scale;
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
        var canvas = this._imgCanvas.nativeElement;
        canvas.width = 0;
        canvas.height = 0;
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
    /** Set Img */
    /**
     * Set Img
     * @param {?} src
     * @return {?}
     */
    LyResizingCroppingImages.prototype.setImageUrl = /**
     * Set Img
     * @param {?} src
     * @return {?}
     */
    function (src) {
        var _this = this;
        this.clean();
        this._originalImgBase64 = src;
        /** @type {?} */
        var img = new Image;
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
                _this.isLoaded = false;
                _this.setScale(0, true);
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
            if (this._defaultType === 'image/png' || fileType === 'image/svg+xml') {
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
            url = result.toDataURL("image/" + myConfig.type);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBtZXJnZURlZXAsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH0sXG4gIGltZ0NvbnRhaW5lcjoge1xuICAgIGN1cnNvcjogJ21vdmUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgICcmID4gY2FudmFzJzoge1xuICAgICAgLy8gd2lkdGg6ICcxMDAlJyxcbiAgICAgIC8vIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH1cbiAgfSxcbiAgY3JvcHBpbmdDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgYm94U2hhZG93OiAnMCAwIDAgMjAwMDBweCByZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgfSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfSxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCByZ2IoMjU1LCAyNTUsIDI1NSknXG4gICAgfVxuICB9LFxuICBjcm9wcENvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICcmLCAmID4gaW5wdXQnOiBMWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgJyYgKjpub3QoaW5wdXQpJzoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSxcbiAgICAnJiA+IGlucHV0Jzoge1xuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9XG4gIH1cbn0pO1xuLyoqIEltYWdlIENyb3BwZXIgQ29uZmlnICovXG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJDb25maWcge1xuICAvKiogQ3JvcHBlciBhcmVhIHdpZHRoKi9cbiAgd2lkdGg6IG51bWJlcjtcbiAgLyoqIENyb3BwZXIgYXJlYSBoZWlnaHQqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIEJhY2tncm91bmQgY29sb3IoIGRlZmF1bHQ6IG51bGwpLCBpZiBpcyBudWxsIGluIHBuZyBpcyB0cmFuc3BhcmVudCBidXQgbm90IGluIGpwZyAqL1xuICBmaWxsPzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIFNldCBhbnRpLWFsaWFzZWQoIGRlZmF1bHQ6IHRydWUpICovXG4gIGFudGlBbGlhc2VkPzogYm9vbGVhbjtcbiAgYXV0b0Nyb3A/OiBib29sZWFuO1xuICBvdXRwdXQ/OiB7XG4gICAgd2lkdGg6IG51bWJlclxuICAgIGhlaWdodDogbnVtYmVyXG4gIH0gfCBJbWdSZXNvbHV0aW9uO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCB0eXBlIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZyA9IEltZ0Nyb3BwZXJDb25maWc7XG5cbi8qKiBJbWFnZSBvdXRwdXQgKi9cbmV4cG9ydCBlbnVtIEltZ1Jlc29sdXRpb24ge1xuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xuICBEZWZhdWx0LFxuICAvKiogT25seSBjcm9wcGluZyAqL1xuICBPcmlnaW5hbEltYWdlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckV2ZW50IHtcbiAgLyoqIENyb3BwZWQgaW1hZ2UgaW4gYmFzZTY0LCAhZGVwcmVjYXRlZCB1c2UgaW5zdGVhZCBgZGF0YVVSTGAgKi9cbiAgYmFzZTY0OiBzdHJpbmc7XG4gIC8qKiBDcm9wcGVkIGltYWdlIGRhdGEgVVJMICovXG4gIGRhdGFVUkw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvKiogRmlsZXR5cGUgKi9cbiAgdHlwZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIE9yaWdpbmFsIEltYWdlIGRhdGEgVVJMICovXG4gIG9yaWdpbmFsRGF0YVVSTDogc3RyaW5nO1xuICBzY2FsZTogbnVtYmVyO1xuICAvKiogQ3VycmVudCByb3RhdGlvbiBpbiBkZWdyZWVzICovXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIHBvc2l0aW9uOiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gIH07XG59XG5cbmNvbnN0IENPTkZJR19ERUZBVUxUID0gPEltZ0Nyb3BwZXJDb25maWc+e1xuICB3aWR0aDogMjUwLFxuICBoZWlnaHQ6IDIwMCxcbiAgb3V0cHV0OiBJbWdSZXNvbHV0aW9uLkRlZmF1bHQsXG4gIGFudGlBbGlhc2VkOiB0cnVlXG59O1xuXG5pbnRlcmZhY2UgSW1nUmVjdCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB4YzogbnVtYmVyO1xuICB5YzogbnVtYmVyO1xuICAvLyB3OiBudW1iZXI7XG4gIC8vIGg6IG51bWJlcjtcbiAgLyoqIHRyYW5zZm9ybSB3aXRoICovXG4gIHd0OiBudW1iZXI7XG4gIGh0OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbHktaW1nLWNyb3BwZXIsIGx5LWNyb3BwaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICdyZXNpemluZy1jcm9wcGluZy1pbWFnZXMuaHRtbCdcbiB9KVxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgX29yaWdpbmFsSW1nQmFzZTY0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgLyoqIE9yaWdpbmFsIGltYWdlICovXG4gIHByaXZhdGUgX2ltZzogSFRNTEltYWdlRWxlbWVudDtcbiAgcHJpdmF0ZSBvZmZzZXQ6IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICBsZWZ0OiBudW1iZXJcbiAgICB0b3A6IG51bWJlclxuICB9O1xuICBwcml2YXRlIF9zY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9zY2FsM0ZpeDogbnVtYmVyO1xuICBwcml2YXRlIF9taW5TY2FsZTogbnVtYmVyO1xuICBwcml2YXRlIF9jb25maWc6IEltZ0Nyb3BwZXJDb25maWc7XG4gIHByaXZhdGUgX2ltZ1JlY3Q6IEltZ1JlY3QgPSB7fSBhcyBhbnk7XG4gIHByaXZhdGUgX3JvdGF0aW9uOiBudW1iZXI7XG5cbiAgQFZpZXdDaGlsZCgnX2ltZ0NvbnRhaW5lcicpIF9pbWdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19jcm9wcGluZ0NvbnRhaW5lcicpIF9jcm9wcGluZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2ltZ0NhbnZhcycpIF9pbWdDYW52YXM6IEVsZW1lbnRSZWY8SFRNTENhbnZhc0VsZW1lbnQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2NhbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKVxuICBnZXQgY29uZmlnKCk6IEltZ0Nyb3BwZXJDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cbiAgc2V0IGNvbmZpZyh2YWw6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBtZXJnZURlZXAoe30sIENPTkZJR19ERUZBVUxULCB2YWwpO1xuICB9XG4gIC8qKiBTZXQgc2NhbGUgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG4gIHNldCBzY2FsZSh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuc2V0U2NhbGUodmFsKTtcbiAgfVxuXG4gIC8qKiBHZXQgbWluIHNjYWxlICovXG4gIGdldCBtaW5TY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW5TY2FsZTtcbiAgfVxuXG4gIC8qKiBXaGVuIGlzIGxvYWRlZCBpbWFnZSAqL1xuICBfaXNMb2FkZWRJbWc6IGJvb2xlYW47XG5cbiAgLyoqIFdoZW4gaXMgbG9hZGVkIGltYWdlICYgcmVhZHkgZm9yIGNyb3AgKi9cbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzQ3JvcHBlZDogYm9vbGVhbjtcblxuICAvKiogT24gbG9hZGVkIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogRW1pdCBhbiBlcnJvciB3aGVuIHRoZSBsb2FkZWQgaW1hZ2UgaXMgbm90IHZhbGlkICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuXG4gIHByaXZhdGUgX2RlZmF1bHRUeXBlOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ltZ0xvYWRlZChpbWdFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgaWYgKGltZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2ltZyA9IGltZ0VsZW1lbnQ7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGltZ0VsZW1lbnQud2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nRWxlbWVudC5oZWlnaHQ7XG4gICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nRWxlbWVudCwgMCwgMCk7XG4gICAgICAvKiogc2V0IHpvb20gc2NhbGUgKi9cbiAgICAgIGNvbnN0IG1pblNjYWxlID0ge1xuICAgICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyBjYW52YXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0IC8gY2FudmFzLmhlaWdodFxuICAgICAgfTtcbiAgICAgIHRoaXMuX21pblNjYWxlID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U3R5bGVzRm9yQ29udEltZyh2YWx1ZXM6IHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuICB9KSB7XG4gICAgY29uc3QgbmV3U3R5bGVzID0geyB9IGFzIGFueTtcbiAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgaWYgKHZhbHVlcy54ICE9PSB2b2lkIDAgJiYgdmFsdWVzLnkgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3QgeCA9IHJvb3RSZWN0LndpZHRoIC8gMiAtICh2YWx1ZXMueCk7XG4gICAgICBjb25zdCB5ID0gcm9vdFJlY3QuaGVpZ2h0IC8gMiAtICh2YWx1ZXMueSk7XG5cbiAgICAgIHRoaXMuX2ltZ1JlY3QueCA9ICh2YWx1ZXMueCk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnkgPSAodmFsdWVzLnkpO1xuICAgICAgdGhpcy5faW1nUmVjdC54YyA9ICh4KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueWMgPSAoeSk7XG4gICAgfVxuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHsodGhpcy5faW1nUmVjdC54KX1weCwkeyh0aGlzLl9pbWdSZWN0LnkpfXB4LCAwKWA7XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybSArPSBgc2NhbGUoJHt0aGlzLl9zY2FsM0ZpeH0pYDtcbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtT3JpZ2luID0gYCR7dGhpcy5faW1nUmVjdC54Y31weCAke3RoaXMuX2ltZ1JlY3QueWN9cHggMGA7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3U3R5bGVzKSB7XG4gICAgICBpZiAobmV3U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIGtleSwgbmV3U3R5bGVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSByZXNpemUkKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0SW5wdXRFdmVudChpbWc6IEV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2Zyb20gZXZlbnQnKTtcbiAgICBjb25zdCBfaW1nID0gaW1nLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChfaW1nLmZpbGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgIHRoaXMuX2ZpbGVOYW1lID0gX2ltZy52YWx1ZS5yZXBsYWNlKC8uKihcXC98XFxcXCkvLCAnJyk7XG5cblxuICAgIC8qKiBTZXQgdHlwZSAqL1xuICAgIGlmICghdGhpcy5jb25maWcudHlwZSkge1xuICAgICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzWzBdLnR5cGU7XG4gICAgfVxuICAgIGZpbGVSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChsb2FkRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgdGhpcy5zZXRJbWFnZVVybChvcmlnaW5hbEltYWdlVXJsKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKF9pbWcuZmlsZXNbMF0pO1xuICB9XG5cbiAgLyoqIFNldCB0aGUgc2l6ZSBvZiB0aGUgaW1hZ2UsIHRoZSB2YWx1ZXMgY2FuIGJlIDAgYmV0d2VlbiAxLCB3aGVyZSAxIGlzIHRoZSBvcmlnaW5hbCBzaXplICovXG4gIHNldFNjYWxlKHNpemU6IG51bWJlciwgbm9BdXRvQ3JvcD86IGJvb2xlYW4pIHtcbiAgICAvLyBmaXggbWluIHNjYWxlXG4gICAgc2l6ZSA9IHNpemUgPj0gdGhpcy5taW5TY2FsZSAmJiBzaXplIDw9IDEgPyBzaXplIDogdGhpcy5taW5TY2FsZTtcblxuICAgIC8vIGNoZWNrXG4gICAgY29uc3QgY2hhbmdlZCA9IHNpemUgIT09IHRoaXMuc2NhbGU7XG4gICAgdGhpcy5fc2NhbGUgPSBzaXplO1xuICAgIHNpemUgPSB0aGlzLl9zY2FsM0ZpeCA9IHNpemU7XG4gICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpblBvc2l0aW9uID0gey4uLnRoaXMuX2ltZ1JlY3R9O1xuICAgICAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgICAgICB4OiBvcmlnaW5Qb3NpdGlvbi54LFxuICAgICAgICAgIHk6IG9yaWdpblBvc2l0aW9uLnksXG4gICAgICAgICAgbGVmdDogb3JpZ2luUG9zaXRpb24ueGMsXG4gICAgICAgICAgdG9wOiBvcmlnaW5Qb3NpdGlvbi55Y1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHt9KTtcbiAgICAgICAgdGhpcy5fbW92ZSh7XG4gICAgICAgICAgc3JjRXZlbnQ6IHt9LFxuICAgICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgICBkZWx0YVk6IDBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm1pblNjYWxlKSB7XG4gICAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgICAgLi4udGhpcy5fZ2V0Q2VudGVyUG9pbnRzKClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zY2FsZUNoYW5nZS5lbWl0KHRoaXMuX3NjYWxlKTtcbiAgICBpZiAoIW5vQXV0b0Nyb3ApIHtcbiAgICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2VudGVyUG9pbnRzKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBpbWcgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB4ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSAoaW1nLndpZHRoKSkgLyAyO1xuICAgIGNvbnN0IHkgPSAocm9vdC5vZmZzZXRIZWlnaHQgLSAoaW1nLmhlaWdodCkpIC8gMjtcbiAgICByZXR1cm4ge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFqdXN0YXIgYSBsYSBwYW50YWxsYVxuICAgKi9cbiAgZml0VG9TY3JlZW4oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgbWluID0ge1xuICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyLm9mZnNldEhlaWdodFxuICAgIH07XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9pbWc7XG4gICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gd2lkdGgsXG4gICAgICBoZWlnaHQ6IG1pbi5oZWlnaHQgLyBoZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpO1xuICAgIHRoaXMuc2V0U2NhbGUocmVzdWx0KTtcbiAgfVxuXG4gIGZpdCgpIHtcbiAgICB0aGlzLnNldFNjYWxlKDApO1xuICB9XG5cbiAgX21vdmVTdGFydCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgIHg6IHRoaXMuX2ltZ1JlY3QueCxcbiAgICAgIHk6IHRoaXMuX2ltZ1JlY3QueSxcbiAgICAgIGxlZnQ6IHRoaXMuX2ltZ1JlY3QueGMsXG4gICAgICB0b3A6IHRoaXMuX2ltZ1JlY3QueWNcbiAgICB9O1xuICB9XG4gIF9tb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHgsIHk7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgc2NhbGVGaXggPSB0aGlzLl9zY2FsZTtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCBzdGFydFAgPSB0aGlzLm9mZnNldDtcbiAgICAvLyBMaW1pdCBmb3IgbGVmdFxuICAgIGlmICgoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSA+PSBzdGFydFAubGVmdCAtIChldmVudC5kZWx0YVggLyBzY2FsZUZpeCkpIHtcbiAgICAgIHggPSBzdGFydFAueCArIChzdGFydFAubGVmdCkgLSAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KTtcbiAgICB9XG5cbiAgICAvLyAvLyBMaW1pdCBmb3IgdG9wXG4gICAgaWYgKChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KSA+PSAoc3RhcnRQLnRvcCAtIChldmVudC5kZWx0YVkgLyBzY2FsZUZpeCkpKSB7XG4gICAgICB5ID0gc3RhcnRQLnkgKyAoc3RhcnRQLnRvcCkgLSAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KTtcbiAgICB9XG5cbiAgICAvLyAvLyBMaW1pdCBmb3IgcmlnaHRcbiAgICBpZiAoKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCkgKyAoY2FudmFzLndpZHRoKSAtIChzdGFydFAubGVmdCAtIChldmVudC5kZWx0YVggLyBzY2FsZUZpeCkpIDw9IGNvbmZpZy53aWR0aCAvIHNjYWxlRml4KSB7XG4gICAgICB4ID0gc3RhcnRQLnggKyAoc3RhcnRQLmxlZnQpICsgKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCkgLSBjYW52YXMud2lkdGg7XG4gICAgfVxuXG4gICAgLy8gLy8gTGltaXQgZm9yIGJvdHRvbVxuICAgIGlmICgoKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpICsgKGNhbnZhcy5oZWlnaHQpIC0gKHN0YXJ0UC50b3AgLSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpKSkgPD0gKGNvbmZpZy5oZWlnaHQgLyBzY2FsZUZpeCkpIHtcbiAgICAgIHkgPSBzdGFydFAueSArIChzdGFydFAudG9wKSArIChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KSAtIGNhbnZhcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gV2hlbiBwcmVzcyBzaGlmdEtleSwgZGVwcmVjYXRlZFxuICAgIC8vIGlmIChldmVudC5zcmNFdmVudCAmJiBldmVudC5zcmNFdmVudC5zaGlmdEtleSkge1xuICAgIC8vICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPT09IE1hdGgubWF4KE1hdGguYWJzKGV2ZW50LmRlbHRhWCksIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkpKSB7XG4gICAgLy8gICAgIHkgPSB0aGlzLm9mZnNldC50b3A7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB4ID0gdGhpcy5vZmZzZXQubGVmdDtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAoZXZlbnQuZGVsdGFYIC8gc2NhbGVGaXgpICsgKHRoaXMub2Zmc2V0LngpOyB9XG4gICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSArICh0aGlzLm9mZnNldC55KTsgfVxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICBjb25zdCBjcm9wcGluZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9hcmVhQ3JvcHBlclJlY3QoKTtcbiAgICBpZiAoeCA9PT0gdm9pZCAwICYmIHkgPT09IHZvaWQgMCkge1xuICAgICAgeCA9IHRoaXMuX2ltZ1JlY3QueGM7XG4gICAgICB5ID0gdGhpcy5faW1nUmVjdC55YztcbiAgICB9XG4gICAgeCA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0LngpIC0gKHggLSAodGhpcy5jb25maWcud2lkdGggLyAyKSk7XG4gICAgeSA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0LnkpIC0gKHkgLSAodGhpcy5jb25maWcuaGVpZ2h0IC8gMikpO1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgX3NsaWRlRW5kKCkge1xuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIF9jcm9wSWZBdXRvQ3JvcCgpIHtcbiAgICBpZiAodGhpcy5jb25maWcuYXV0b0Nyb3ApIHtcbiAgICAgIHRoaXMuY3JvcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKisgKi9cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5fc2NhbDNGaXggKyAuMDU7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYW4gdGhlIGltZyBjcm9wcGVyICovXG4gIGNsZWFuKCkge1xuICAgIHRoaXMuX2ltZ1JlY3QgPSB7IH0gYXMgYW55O1xuICAgIHRoaXMub2Zmc2V0ID0gbnVsbDtcbiAgICB0aGlzLnNjYWxlID0gbnVsbDtcbiAgICB0aGlzLl9zY2FsM0ZpeCA9IG51bGw7XG4gICAgdGhpcy5fcm90YXRpb24gPSAwO1xuICAgIHRoaXMuX21pblNjYWxlID0gbnVsbDtcbiAgICB0aGlzLl9kZWZhdWx0VHlwZSA9IG51bGw7XG4gICAgdGhpcy5faXNMb2FkZWRJbWcgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IG51bGw7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY2FudmFzLndpZHRoID0gMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gMDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqLSAqL1xuICB6b29tT3V0KCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5fc2NhbDNGaXggLSAuMDU7XG4gICAgaWYgKHNjYWxlID4gdGhpcy5taW5TY2FsZSAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXQoKTtcbiAgICB9XG4gIH1cbiAgY2VudGVyKCkge1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgIC4uLnRoaXMuX2dldENlbnRlclBvaW50cygpXG4gICAgfTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKG5ld1N0eWxlcyk7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4gIC8qKiBTZXQgSW1nICovXG4gIHNldEltYWdlVXJsKHNyYzogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGVhbigpO1xuICAgIHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0ID0gc3JjO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZTtcbiAgICBjb25zdCBjcm9wRXZlbnQ6IEltZ0Nyb3BwZXJFdmVudCA9IHtcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgdHlwZTogdGhpcy5fZGVmYXVsdFR5cGUsXG4gICAgICBkYXRhVVJMOiBudWxsLFxuICAgICAgYmFzZTY0OiBudWxsLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBzY2FsZTogbnVsbCxcbiAgICAgIG9yaWdpbmFsRGF0YVVSTDogc3JjLFxuICAgICAgcm90YXRpb246IG51bGwsXG4gICAgICBwb3NpdGlvbjogbnVsbFxuICAgIH07XG4gICAgaW1nLnNyYyA9IHNyYztcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICB0aGlzLmVycm9yLmVtaXQoY3JvcEV2ZW50KTtcbiAgICB9KTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuX2ltZ0xvYWRlZChpbWcpO1xuICAgICAgY3JvcEV2ZW50LndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgY3JvcEV2ZW50LmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICB0aGlzLl9pc0xvYWRlZEltZyA9IHRydWU7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5fbmdab25lXG4gICAgICAgICAgLm9uU3RhYmxlXG4gICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSgwLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcm90YXRlKGRlZ3JlZXM6IG51bWJlcikge1xuICAgIGNvbnN0IHZhbGlkRGVncmVlcyA9IHRoaXMuX3JvdGF0aW9uID0gY29udmVydFRvVmFsaWREZWdyZWVzKGRlZ3JlZXMpO1xuICAgIGNvbnN0IGRlZ3JlZXNSYWQgPSB2YWxpZERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNhbnZhc0Nsb24gPSBjcmVhdGVDYW52YXNJbWcoY2FudmFzKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNDbG9uLndpZHRoLCBjYW52YXNDbG9uLmhlaWdodCk7XG5cbiAgICAvLyByb3RhdGUgY2FudmFzIGltYWdlXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY2FudmFzLCAndHJhbnNmb3JtJywgYHJvdGF0ZSgke3ZhbGlkRGVncmVlc31kZWcpIHNjYWxlKCR7MSAvIHRoaXMuX3NjYWwzRml4fSlgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjYW52YXMsICd0cmFuc2Zvcm1PcmlnaW4nLCBgJHt0aGlzLl9pbWdSZWN0LnhjfXB4ICR7dGhpcy5faW1nUmVjdC55Y31weCAwYCk7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcblxuICAgIC8vIHNhdmUgcmVjdFxuICAgIGNvbnN0IGNhbnZhc1JlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyByZW1vdmUgcm90YXRlIHN0eWxlc1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybScpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybU9yaWdpbicpO1xuXG4gICAgLy8gc2V0IHcgJiBoXG5cbiAgICBjb25zdCB3ID0gY2FudmFzUmVjdC53aWR0aDtcbiAgICBjb25zdCBoID0gY2FudmFzUmVjdC5oZWlnaHQ7XG5cbiAgICBjdHguY2FudmFzLndpZHRoID0gdztcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICAvLyBjbGVhclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG5cbiAgICAvLyB0cmFuc2xhdGUgYW5kIHJvdGF0ZVxuICAgIGN0eC50cmFuc2xhdGUodyAvIDIsIGggLyAyKTtcbiAgICBjdHgucm90YXRlKGRlZ3JlZXNSYWQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoY2FudmFzQ2xvbiwgLWNhbnZhc0Nsb24ud2lkdGggLyAyLCAtY2FudmFzQ2xvbi5oZWlnaHQgLyAyKTtcbiAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG5cbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgIHg6ICh4IC0gcm9vdFJlY3QueCksXG4gICAgICB5OiAoeSAtIHJvb3RSZWN0LnkpXG4gICAgfSk7XG5cbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbWFnZVNtb290aGluZ1F1YWxpdHkoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCwgY29uZmlnLCBxdWFsaXR5OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgLyoqIENhbGN1bGF0ZSB0b3RhbCBudW1iZXIgb2Ygc3RlcHMgbmVlZGVkICovXG4gICAgbGV0ICBudW1TdGVwcyA9IE1hdGguY2VpbChNYXRoLmxvZyhNYXRoLm1heChpbWcud2lkdGgsIGltZy5oZWlnaHQpIC8gTWF0aC5tYXgoY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KSkgLyBNYXRoLmxvZygyKSkgLSAxO1xuICAgIG51bVN0ZXBzID0gbnVtU3RlcHMgPD0gMCA/IDAgOiBudW1TdGVwcztcblxuICAgIC8qKkFycmF5IHN0ZXBzICovXG4gICAgY29uc3Qgc3RlcHMgPSBBcnJheS5mcm9tKEFycmF5KG51bVN0ZXBzKS5rZXlzKCkpO1xuXG4gICAgLyoqIENvbnRleHQgKi9cbiAgICBjb25zdCBvY3R4ID0gaW1nLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBxID0gKChxdWFsaXR5ICogMTApICoqIG51bVN0ZXBzKSAvICgxMCAqKiBudW1TdGVwcyk7XG4gICAgY29uc3QgZmlsZVR5cGUgPSB0aGlzLl9kZWZhdWx0VHlwZTtcbiAgICAvKiogSWYgU3RlcHMgPT4gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ICovXG4gICAgaWYgKG51bVN0ZXBzKSB7XG4gICAgICAvKiogU2V0IHNpemUgKi9cbiAgICAgIGNvbnN0IHcgPSBpbWcud2lkdGggKiBxdWFsaXR5O1xuICAgICAgY29uc3QgaCA9IGltZy5oZWlnaHQgKiBxdWFsaXR5O1xuICAgICAgLyoqIE9ubHkgdGhlIG5ldyBpbWcgaXMgc2hvd24uICovXG4gICAgICBpZiAodGhpcy5fZGVmYXVsdFR5cGUgPT09ICdpbWFnZS9wbmcnIHx8IGZpbGVUeXBlID09PSAnaW1hZ2Uvc3ZnK3htbCcpIHtcbiAgICAgICAgb2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XG4gICAgICB9XG5cbiAgICAgIC8qKiBTdGVwcyAqL1xuICAgICAgKHN0ZXBzIGFzIEFycmF5PG51bWJlcj4pLmZvckVhY2goKCkgPT4ge1xuICAgICAgICBvY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAgICAgMCwgMCxcbiAgICAgICAgICB3LCBoXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGVwIGZpbmFsXG4gICAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgICAqL1xuICAgIGNvbnN0IG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXG4gICAgY3R4ID0gb2MuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBvYy53aWR0aCA9IGNvbmZpZy53aWR0aDtcbiAgICBvYy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0O1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLFxuICAgICAgMCwgMCxcbiAgICAgIGltZy53aWR0aCAqIHEsIGltZy5oZWlnaHQgKiBxLFxuICAgICAgMCwgMCxcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcbiAgICApO1xuICAgIHJldHVybiBvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIEltYWdlXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICovXG4gIGNyb3AoY29uZmlnPzogSW1nQ3JvcHBlckNvbmZpZyk6IEltZ0Nyb3BwZXJFdmVudCB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnID8gbWVyZ2VEZWVwKHt9LCB0aGlzLmNvbmZpZyB8fCBDT05GSUdfREVGQVVMVCwgY29uZmlnKSA6IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHRoaXMuX2ltZ0Nyb3AobmV3Q29uZmlnKTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9pbWdDcm9wKG15Q29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgY29uc3QgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBpbWdSZWN0ID0gdGhpcy5faW1nUmVjdDtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWwzRml4O1xuICAgIGNvbnN0IGxlZnQgPSBpbWdSZWN0LnhjIC0gKG15Q29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KTtcbiAgICBjb25zdCB0b3AgPSBpbWdSZWN0LnljIC0gKG15Q29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgd2lkdGg6IG15Q29uZmlnLndpZHRoLFxuICAgICAgaGVpZ2h0OiBteUNvbmZpZy5oZWlnaHRcbiAgICB9O1xuICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSBjb25maWcud2lkdGggLyBzY2FsZUZpeDtcbiAgICBjYW52YXNFbGVtZW50LmhlaWdodCA9IGNvbmZpZy5oZWlnaHQgLyBzY2FsZUZpeDtcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKG15Q29uZmlnLmZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBteUNvbmZpZy5maWxsO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhc0VsZW1lbnQud2lkdGgsIGNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcbiAgICB9XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudCBhcyBhbnksXG4gICAgICAtKGxlZnQpLCAtKHRvcCksXG4gICAgKTtcbiAgICBsZXQgcmVzdWx0ID0gY2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBhbnRpQWxpYXNlZFEgPSBteUNvbmZpZy5hbnRpQWxpYXNlZCA/IC41IDogMTtcbiAgICBpZiAobXlDb25maWcub3V0cHV0ID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIGNvbmZpZywgYW50aUFsaWFzZWRRKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBteUNvbmZpZy5vdXRwdXQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIG15Q29uZmlnLm91dHB1dCwgYW50aUFsaWFzZWRRKTtcbiAgICB9XG4gICAgbGV0IHVybDtcbiAgICBpZiAobXlDb25maWcudHlwZSkge1xuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTChgaW1hZ2UvJHtteUNvbmZpZy50eXBlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKHRoaXMuX2RlZmF1bHRUeXBlKTtcbiAgICB9XG4gICAgY29uc3QgY3JvcEV2ZW50ID0ge1xuICAgICAgZGF0YVVSTDogdXJsLFxuICAgICAgYmFzZTY0OiB1cmwsXG4gICAgICB0eXBlOiB0aGlzLl9kZWZhdWx0VHlwZSB8fCBteUNvbmZpZy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWUsXG4gICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0LFxuICAgICAgb3JpZ2luYWxEYXRhVVJMOiB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCxcbiAgICAgIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgcm90YXRpb246IHRoaXMuX3JvdGF0aW9uLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogdGhpcy5faW1nUmVjdC54YyxcbiAgICAgICAgeTogdGhpcy5faW1nUmVjdC55Y1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSB0cnVlO1xuICAgIHRoaXMuY3JvcHBlZC5lbWl0KGNyb3BFdmVudCk7XG4gICAgcmV0dXJuIGNyb3BFdmVudDtcbiAgfVxuXG4gIHByaXZhdGUgX3Jvb3RSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfYXJlYUNyb3BwZXJSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cblxufVxuXG4vKipcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyg0NSkgPT09IDkwXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoNDApID09PSAwXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoMTAwKSA9PT0gOTBcbiAqIEBpZ25vcmVcbiAqL1xuZnVuY3Rpb24gY29udmVydFRvVmFsaWREZWdyZWVzKG51bTogbnVtYmVyKSB7XG4gIGNvbnN0IHZhbDM2MCA9IGxpbWl0TnVtKG51bSwgMzYwKTtcbiAgY29uc3QgdmFsOTAgPSBsaW1pdE51bSh2YWwzNjAucmVzdWx0LCA5MCk7XG4gIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24obnVtKTtcbiAgaWYgKHZhbDkwLnJlc3VsdCA+PSAoOTAgLyAyKSkge1xuICAgIHJldHVybiA5MCAqICh2YWw5MC5wYXJ0cyArIDEpICogc2lnbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gOTAgKiB2YWw5MC5wYXJ0cyAqIHNpZ247XG4gIH1cbn1cblxuLyoqXG4gKiBkZW1vOlxuICogbGltaXROdW0oNDUwLCAzNjApID09PSA5MFxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBsaW1pdE51bShudW06IG51bWJlciwgbnVtMjogbnVtYmVyKSB7XG4gIGNvbnN0IG51bUFicyA9IE1hdGguYWJzKG51bSk7XG4gIGNvbnN0IHBhcnRzID0gTWF0aC5mbG9vcihudW1BYnMgLyBudW0yKTtcbiAgbGV0IHJlc3VsdDogbnVtYmVyO1xuICBpZiAocGFydHMpIHtcbiAgICByZXN1bHQgPSBudW1BYnMgLSAobnVtMiAqIHBhcnRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBudW07XG4gIH1cbiAgaWYgKG51bUFicyAhPT0gbnVtKSB7XG4gICAgcmVzdWx0ICo9IC0xO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzdWx0LFxuICAgIHBhcnRzXG4gIH07XG59XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDYW52YXNJbWcoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQpIHtcblxuICAvLyBjcmVhdGUgYSBuZXcgY2FudmFzXG4gIGNvbnN0IG5ld0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjb250ZXh0ID0gbmV3Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgLy8gc2V0IGRpbWVuc2lvbnNcbiAgbmV3Q2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICBuZXdDYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcblxuICAvLyBhcHBseSB0aGUgb2xkIGNhbnZhcyB0byB0aGUgbmV3IG9uZVxuICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuXG4gIC8vIHJldHVybiB0aGUgbmV3IGNhbnZhc1xuICByZXR1cm4gbmV3Q2FudmFzO1xufVxuIiwiaW1wb3J0IHsgSEFNTUVSX0dFU1RVUkVfQ09ORklHIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFseWxlL3VpJztcblxuaW1wb3J0IHsgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIH0gZnJvbSAnLi9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5UmVzaXppbmdDcm9wcGluZ0ltYWdlc10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLCB1c2VDbGFzczogTHlIYW1tZXJHZXN0dXJlQ29uZmlnIH1cbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQWdCTSxjQUFjLEdBQUcs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LE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7WUFDekgsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDN0U7O1FBR0QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxFQUFFO1lBQy9ILENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQzlFOzs7Ozs7Ozs7UUFXRCxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUN0RSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtZQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUN0RSxJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDeEIsQ0FBQyxH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