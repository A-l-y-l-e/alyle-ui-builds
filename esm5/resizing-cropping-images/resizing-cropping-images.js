/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2, NgZone, HostListener } from '@angular/core';
import { LyTheme2, mergeDeep, LY_COMMON_STYLES } from '@alyle/ui';
import { take } from 'rxjs/operators';
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
/**
 * @record
 */
export function ImgOutput() { }
if (false) {
    /** @type {?} */
    ImgOutput.prototype.width;
    /** @type {?} */
    ImgOutput.prototype.height;
}
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
var CONFIG_DEFAULT = (/** @type {?} */ ({
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
            /** set min scale */
            this._minScale = getMinScale(this.config.width, this.config.height, canvas.width, canvas.height);
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
    LyResizingCroppingImages.prototype._resize$ = /**
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
                var originPosition = tslib_1.__assign({}, this._imgRect);
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
            this._setStylesForContImg(tslib_1.__assign({}, this._getCenterPoints()));
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
        var newStyles = tslib_1.__assign({}, this._getCenterPoints());
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
        // Update min scale
        this._minScale = getMinScale(this.config.width, this.config.height, canvas.width, canvas.height);
        // set the minimum scale, only if necessary
        if (this.scale < this.minScale) {
            this.setScale(0, true);
        } //                ↑ no AutoCrop
        //                ↑ no AutoCrop
        /** @type {?} */
        var rootRect = this._rootRect();
        this._setStylesForContImg({
            x: (x - rootRect.x),
            y: (y - rootRect.y)
        });
        // keep image inside the frame
        /** @type {?} */
        var originPosition = tslib_1.__assign({}, this._imgRect);
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
        _resize$: [{ type: HostListener, args: ['window:resize',] }]
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
 * \@docs-private
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
 * \@docs-private
 * @param {?} mw
 * @param {?} mh
 * @param {?} w
 * @param {?} h
 * @return {?}
 */
function getMinScale(mw, mh, w, h) {
    return Math.max(mw / w, mh / h);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFaEMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFFbkIsTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLEVBQUU7UUFDSixxQkFBcUIsRUFBRSxNQUFNO1FBQzdCLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsaUJBQWlCLEVBQUUsTUFBTTtRQUN6QixVQUFVLEVBQUUsTUFBTTtRQUNsQixPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDO1FBQ1AsWUFBWSxFQUFFOzs7WUFHWixhQUFhLEVBQUUsTUFBTTtTQUN0QjtLQUNGO0lBQ0QsaUJBQWlCLEVBQUU7UUFDakIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsYUFBYSxFQUFFLE1BQU07UUFDckIsU0FBUyxFQUFFLGtDQUFrQztRQUM3QyxtQkFBbUIsdUJBQ2QsZ0JBQWdCLENBQUMsSUFBSSxJQUN4QixPQUFPLEVBQUUsSUFBSSxHQUNkO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsVUFBVSxFQUFFLE1BQU07WUFDbEIsTUFBTSxFQUFFLDhCQUE4QjtTQUN2QztRQUNELFNBQVMsRUFBRTtZQUNULE1BQU0sRUFBRSw4QkFBOEI7U0FDdkM7S0FDRjtJQUNELFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxNQUFNO1FBQ2YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7UUFDeEIsY0FBYyxFQUFFLGdCQUFnQixDQUFDLElBQUk7UUFDckMsZ0JBQWdCLEVBQUU7WUFDaEIsYUFBYSxFQUFFLE1BQU07U0FDdEI7UUFDRCxXQUFXLEVBQUU7WUFDWCxVQUFVLEVBQUUsYUFBYTtZQUN6QixPQUFPLEVBQUUsQ0FBQztZQUNWLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07U0FDZjtLQUNGO0NBQ0YsQ0FBQzs7Ozs7QUFFRixzQ0FhQzs7Ozs7O0lBWEMsaUNBQWM7Ozs7O0lBRWQsa0NBQWU7Ozs7O0lBRWYsZ0NBQWM7Ozs7O0lBRWQsZ0NBQXFCOzs7OztJQUVyQix1Q0FBc0I7O0lBQ3RCLG9DQUFtQjs7SUFDbkIsa0NBQW1DOzs7OztBQUdyQywrQkFHQzs7O0lBRkMsMEJBQWM7O0lBQ2QsMkJBQWU7Ozs7SUFXZiwwQkFBMEI7SUFDMUIsVUFBTztJQUNQLG9CQUFvQjtJQUNwQixnQkFBYTs7Ozs7Ozs7QUFHZixxQ0FtQkM7Ozs7OztJQWpCQyxpQ0FBZTs7Ozs7SUFFZixrQ0FBZ0I7O0lBQ2hCLCtCQUFhOzs7OztJQUViLCtCQUFhOztJQUNiLGdDQUFjOztJQUNkLGlDQUFlOzs7OztJQUVmLDBDQUF3Qjs7SUFDeEIsZ0NBQWM7Ozs7O0lBRWQsbUNBQWlCOztJQUNqQixtQ0FHRTs7O0lBR0UsY0FBYyxHQUFHLG1CQUFrQjtJQUN2QyxLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0lBQ1gsTUFBTSxFQUFFLGFBQWEsQ0FBQyxPQUFPO0lBQzdCLFdBQVcsRUFBRSxJQUFJO0NBQ2xCLEVBQUE7Ozs7QUFFRCxzQkFVQzs7O0lBVEMsb0JBQVU7O0lBQ1Ysb0JBQVU7O0lBQ1YscUJBQVc7O0lBQ1gscUJBQVc7Ozs7O0lBSVgscUJBQVc7O0lBQ1gscUJBQVc7O0FBR2I7SUF1RUUsa0NBQ1UsU0FBb0IsRUFDcEIsS0FBZSxFQUNmLFVBQW1DLEVBQ25DLEVBQXFCLEVBQ3JCLE9BQWU7UUFKZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFROzs7OztRQWpFaEIsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQWdCNUQsYUFBUSxHQUFZLG1CQUFBLEVBQUUsRUFBTyxDQUFDO1FBTW5CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQzs7OztRQStCekMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBRTdDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7OztRQUU5QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFVN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUE1Q0Qsc0JBQ0ksNENBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQUNELFVBQVcsR0FBcUI7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRCxDQUFDOzs7T0FIQTtJQUtELHNCQUNJLDJDQUFLO1FBRlQsZ0JBQWdCOzs7OztRQUNoQjtZQUVFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQUNELFVBQVUsR0FBVztZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7OztPQUhBO0lBTUQsc0JBQUksOENBQVE7UUFEWixvQkFBb0I7Ozs7O1FBQ3BCO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7OztJQTJCTyw2Q0FBVTs7OztJQUFsQixVQUFtQixVQUE0QjtRQUM3QyxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDOztnQkFDakIsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUM1QyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDaEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDOztnQkFDNUIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ25DLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsb0JBQW9CO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xHO0lBQ0gsQ0FBQzs7Ozs7SUFFTyx1REFBb0I7Ozs7SUFBNUIsVUFBNkIsTUFHNUI7O1lBQ08sU0FBUyxHQUFHLG1CQUFBLEVBQUcsRUFBTzs7WUFDdEIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDakMsSUFBSSxNQUFNLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7O2dCQUN4QyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztnQkFDbkMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEI7UUFDRCxTQUFTLENBQUMsU0FBUyxHQUFHLGlCQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVEsQ0FBQztRQUN0RixTQUFTLENBQUMsU0FBUyxJQUFJLFdBQVMsSUFBSSxDQUFDLFNBQVMsTUFBRyxDQUFDO1FBQ2xELFNBQVMsQ0FBQyxlQUFlLEdBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQU0sQ0FBQztRQUM1RSxLQUFLLElBQU0sR0FBRyxJQUFJLFNBQVMsRUFBRTtZQUMzQixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNoRjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUU4QiwyQ0FBUTs7O0lBQXZDO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRUQsbURBQWdCOzs7O0lBQWhCLFVBQWlCLEdBQVU7UUFBM0IsaUJBbUJDOztZQWxCTyxJQUFJLEdBQUcsbUJBQUEsR0FBRyxDQUFDLE1BQU0sRUFBb0I7UUFDM0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTztTQUNSOztZQUNLLFVBQVUsR0FBZSxJQUFJLFVBQVUsRUFBRTtRQUUvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVyRCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsU0FBUzs7Z0JBQ3pDLGdCQUFnQixHQUFHLG1CQUFBLENBQUMsbUJBQUEsU0FBUyxDQUFDLE1BQU0sRUFBYyxDQUFDLENBQUMsTUFBTSxFQUFVO1lBQzFFLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNuQyxlQUFlO1lBQ2YsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNyQixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3hDO1lBQ0QsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw2RkFBNkY7Ozs7Ozs7SUFDN0YsMkNBQVE7Ozs7OztJQUFSLFVBQVMsSUFBWSxFQUFFLFVBQW9COzs7WUFFbkMsT0FBTyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7OztZQUduRSxPQUFPLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUs7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLE9BQU8sRUFBRTs7b0JBQ0wsY0FBYyx3QkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHO29CQUNaLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUNuQixJQUFJLEVBQUUsY0FBYyxDQUFDLEVBQUU7b0JBQ3ZCLEdBQUcsRUFBRSxjQUFjLENBQUMsRUFBRTtpQkFDdkIsQ0FBQztnQkFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLENBQUM7b0JBQ1QsTUFBTSxFQUFFLENBQUM7aUJBQ1YsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsT0FBTzthQUNSO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLG9CQUFvQixzQkFDcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQzFCLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUVILENBQUM7Ozs7SUFFTyxtREFBZ0I7OztJQUF4Qjs7WUFDUSxJQUFJLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQWU7O1lBQ25ELEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7O1lBQ25DLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDOztZQUN4QyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNoRCxPQUFPO1lBQ0wsQ0FBQyxHQUFBO1lBQ0QsQ0FBQyxHQUFBO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw4Q0FBVzs7OztJQUFYOztZQUNRLFNBQVMsR0FBRyxtQkFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBZTs7WUFDeEQsR0FBRyxHQUFHO1lBQ1YsS0FBSyxFQUFFLFNBQVMsQ0FBQyxXQUFXO1lBQzVCLE1BQU0sRUFBRSxTQUFTLENBQUMsWUFBWTtTQUMvQjtRQUNLLElBQUEsY0FBNkIsRUFBM0IsZ0JBQUssRUFBRSxrQkFBb0I7O1lBQzdCLFFBQVEsR0FBRztZQUNmLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUs7WUFDeEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTTtTQUM1Qjs7WUFDSyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsc0NBQUc7OztJQUFIO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELDZDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN0QixHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1NBQ3RCLENBQUM7SUFDSixDQUFDOzs7OztJQUNELHdDQUFLOzs7O0lBQUwsVUFBTSxLQUFtRDs7WUFDbkQsQ0FBUzs7WUFBRSxDQUFTOztZQUNsQixNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOztZQUN0QyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVM7O1lBQ3pCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTs7WUFDcEIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQzFCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEVBQUU7WUFDNUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztTQUM5RDtRQUVELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFO1lBQzlFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7U0FDOUQ7UUFFRCxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsRUFBRTtZQUN6SCxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDN0U7UUFFRCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxFQUFFO1lBQy9ILENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMs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Q0FBQztJQUUxQyxpQkFBaUI7SUFDakIsU0FBUyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQzVCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUU5QixzQ0FBc0M7SUFDdEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTdCLHdCQUF3QjtJQUN4QixPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDOzs7Ozs7Ozs7QUFLRCxTQUFTLFdBQVcsQ0FBQyxFQUFVLEVBQUUsRUFBVSxFQUFFLENBQVMsRUFBRSxDQUFTO0lBQy9ELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIG1lcmdlRGVlcCwgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgaW1nQ29udGFpbmVyOiB7XG4gICAgY3Vyc29yOiAnbW92ZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgJyYgPiBjYW52YXMnOiB7XG4gICAgICAvLyB3aWR0aDogJzEwMCUnLFxuICAgICAgLy8gaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfVxuICB9LFxuICBjcm9wcGluZ0NvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBib3hTaGFkb3c6ICcwIDAgMCAyMDAwMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgJyY6YmVmb3JlLCAmOmFmdGVyJzoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgY29udGVudDogYCcnYCxcbiAgICB9LFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9LFxuICAgICcmOmFmdGVyJzoge1xuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9XG4gIH0sXG4gIGNyb3BwQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgJyYsICYgPiBpbnB1dCc6IExZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAnJiAqOm5vdChpbnB1dCknOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgICcmID4gaW5wdXQnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH1cbiAgfVxufSk7XG4vKiogSW1hZ2UgQ3JvcHBlciBDb25maWcgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckNvbmZpZyB7XG4gIC8qKiBDcm9wcGVyIGFyZWEgd2lkdGgqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKiogQ3JvcHBlciBhcmVhIGhlaWdodCovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKiogSWYgdGhpcyBpcyBub3QgZGVmaW5lZCwgdGhlIG5ldyBpbWFnZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGVmaW5lZCAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKiogQmFja2dyb3VuZCBjb2xvciggZGVmYXVsdDogbnVsbCksIGlmIGlzIG51bGwgaW4gcG5nIGlzIHRyYW5zcGFyZW50IGJ1dCBub3QgaW4ganBnICovXG4gIGZpbGw/OiBzdHJpbmcgfCBudWxsO1xuICAvKiogU2V0IGFudGktYWxpYXNlZCggZGVmYXVsdDogdHJ1ZSkgKi9cbiAgYW50aUFsaWFzZWQ/OiBib29sZWFuO1xuICBhdXRvQ3JvcD86IGJvb2xlYW47XG4gIG91dHB1dD86IEltZ091dHB1dCB8IEltZ1Jlc29sdXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nT3V0cHV0IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbi8qKlxuICogRGVwcmVjYXRlZCwgdXNlIGluc3RlYWQgSW1nQ3JvcHBlckNvbmZpZ1xuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IHR5cGUgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnID0gSW1nQ3JvcHBlckNvbmZpZztcblxuLyoqIEltYWdlIG91dHB1dCAqL1xuZXhwb3J0IGVudW0gSW1nUmVzb2x1dGlvbiB7XG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXG4gIERlZmF1bHQsXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXG4gIE9yaWdpbmFsSW1hZ2Vcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyRXZlbnQge1xuICAvKiogQ3JvcHBlZCBpbWFnZSBpbiBiYXNlNjQsICFkZXByZWNhdGVkIHVzZSBpbnN0ZWFkIGBkYXRhVVJMYCAqL1xuICBiYXNlNjQ6IHN0cmluZztcbiAgLyoqIENyb3BwZWQgaW1hZ2UgZGF0YSBVUkwgKi9cbiAgZGF0YVVSTDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKiBGaWxldHlwZSAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKiogT3JpZ2luYWwgSW1hZ2UgZGF0YSBVUkwgKi9cbiAgb3JpZ2luYWxEYXRhVVJMOiBzdHJpbmc7XG4gIHNjYWxlOiBudW1iZXI7XG4gIC8qKiBDdXJyZW50IHJvdGF0aW9uIGluIGRlZ3JlZXMgKi9cbiAgcm90YXRpb246IG51bWJlcjtcbiAgcG9zaXRpb246IHtcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgfTtcbn1cblxuY29uc3QgQ09ORklHX0RFRkFVTFQgPSA8SW1nQ3JvcHBlckNvbmZpZz57XG4gIHdpZHRoOiAyNTAsXG4gIGhlaWdodDogMjAwLFxuICBvdXRwdXQ6IEltZ1Jlc29sdXRpb24uRGVmYXVsdCxcbiAgYW50aUFsaWFzZWQ6IHRydWVcbn07XG5cbmludGVyZmFjZSBJbWdSZWN0IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHhjOiBudW1iZXI7XG4gIHljOiBudW1iZXI7XG4gIC8vIHc6IG51bWJlcjtcbiAgLy8gaDogbnVtYmVyO1xuICAvKiogdHJhbnNmb3JtIHdpdGggKi9cbiAgd3Q6IG51bWJlcjtcbiAgaHQ6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICdseS1pbWctY3JvcHBlciwgbHktY3JvcHBpbmcnLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5odG1sJ1xuIH0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBfb3JpZ2luYWxJbWdCYXNlNjQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsZU5hbWU6IHN0cmluZztcblxuICAvKiogT3JpZ2luYWwgaW1hZ2UgKi9cbiAgcHJpdmF0ZSBfaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBwcml2YXRlIG9mZnNldDoge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIGxlZnQ6IG51bWJlclxuICAgIHRvcDogbnVtYmVyXG4gIH07XG4gIHByaXZhdGUgX3NjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgX3NjYWwzRml4OiBudW1iZXI7XG4gIHByaXZhdGUgX21pblNjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbmZpZzogSW1nQ3JvcHBlckNvbmZpZztcbiAgcHJpdmF0ZSBfaW1nUmVjdDogSW1nUmVjdCA9IHt9IGFzIGFueTtcbiAgcHJpdmF0ZSBfcm90YXRpb246IG51bWJlcjtcblxuICBAVmlld0NoaWxkKCdfaW1nQ29udGFpbmVyJykgX2ltZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2Nyb3BwaW5nQ29udGFpbmVyJykgX2Nyb3BwaW5nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfaW1nQ2FudmFzJykgX2ltZ0NhbnZhczogRWxlbWVudFJlZjxIVE1MQ2FudmFzRWxlbWVudD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBzY2FsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb25maWcoKTogSW1nQ3JvcHBlckNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbDogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IG1lcmdlRGVlcCh7fSwgQ09ORklHX0RFRkFVTFQsIHZhbCk7XG4gIH1cbiAgLyoqIFNldCBzY2FsZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gIH1cbiAgc2V0IHNjYWxlKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRTY2FsZSh2YWwpO1xuICB9XG5cbiAgLyoqIEdldCBtaW4gc2NhbGUgKi9cbiAgZ2V0IG1pblNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pblNjYWxlO1xuICB9XG5cbiAgLyoqIFdoZW4gaXMgbG9hZGVkIGltYWdlICovXG4gIF9pc0xvYWRlZEltZzogYm9vbGVhbjtcblxuICAvKiogV2hlbiBpcyBsb2FkZWQgaW1hZ2UgJiByZWFkeSBmb3IgY3JvcCAqL1xuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgaXNDcm9wcGVkOiBib29sZWFuO1xuXG4gIC8qKiBPbiBsb2FkZWQgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIE9uIGNyb3AgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBFbWl0IGFuIGVycm9yIHdoZW4gdGhlIGxvYWRlZCBpbWFnZSBpcyBub3QgdmFsaWQgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBfZGVmYXVsdFR5cGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW1nTG9hZGVkKGltZ0VsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBpZiAoaW1nRWxlbWVudCkge1xuICAgICAgdGhpcy5faW1nID0gaW1nRWxlbWVudDtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgY2FudmFzLndpZHRoID0gaW1nRWxlbWVudC53aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWdFbGVtZW50LmhlaWdodDtcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWdFbGVtZW50LCAwLCAwKTtcbiAgICAgIC8qKiBzZXQgbWluIHNjYWxlICovXG4gICAgICB0aGlzLl9taW5TY2FsZSA9IGdldE1pblNjYWxlKHRoaXMuY29uZmlnLndpZHRoLCB0aGlzLmNvbmZpZy5oZWlnaHQsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U3R5bGVzRm9yQ29udEltZyh2YWx1ZXM6IHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuICB9KSB7XG4gICAgY29uc3QgbmV3U3R5bGVzID0geyB9IGFzIGFueTtcbiAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgaWYgKHZhbHVlcy54ICE9PSB2b2lkIDAgJiYgdmFsdWVzLnkgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3QgeCA9IHJvb3RSZWN0LndpZHRoIC8gMiAtICh2YWx1ZXMueCk7XG4gICAgICBjb25zdCB5ID0gcm9vdFJlY3QuaGVpZ2h0IC8gMiAtICh2YWx1ZXMueSk7XG5cbiAgICAgIHRoaXMuX2ltZ1JlY3QueCA9ICh2YWx1ZXMueCk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnkgPSAodmFsdWVzLnkpO1xuICAgICAgdGhpcy5faW1nUmVjdC54YyA9ICh4KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueWMgPSAoeSk7XG4gICAgfVxuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHsodGhpcy5faW1nUmVjdC54KX1weCwkeyh0aGlzLl9pbWdSZWN0LnkpfXB4LCAwKWA7XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybSArPSBgc2NhbGUoJHt0aGlzLl9zY2FsM0ZpeH0pYDtcbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtT3JpZ2luID0gYCR7dGhpcy5faW1nUmVjdC54Y31weCAke3RoaXMuX2ltZ1JlY3QueWN9cHggMGA7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3U3R5bGVzKSB7XG4gICAgICBpZiAobmV3U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIGtleSwgbmV3U3R5bGVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSBfcmVzaXplJCgpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKF9pbWcuZmlsZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgdGhpcy5fZmlsZU5hbWUgPSBfaW1nLnZhbHVlLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKTtcblxuICAgIGZpbGVSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChsb2FkRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgdGhpcy5zZXRJbWFnZVVybChvcmlnaW5hbEltYWdlVXJsKTtcbiAgICAgIC8qKiBTZXQgdHlwZSAqL1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gX2ltZy5maWxlc1swXS50eXBlO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlc1swXSk7XG4gIH1cblxuICAvKiogU2V0IHRoZSBzaXplIG9mIHRoZSBpbWFnZSwgdGhlIHZhbHVlcyBjYW4gYmUgMCBiZXR3ZWVuIDEsIHdoZXJlIDEgaXMgdGhlIG9yaWdpbmFsIHNpemUgKi9cbiAgc2V0U2NhbGUoc2l6ZTogbnVtYmVyLCBub0F1dG9Dcm9wPzogYm9vbGVhbikge1xuICAgIC8vIGZpeCBtaW4gc2NhbGVcbiAgICBjb25zdCBuZXdTaXplID0gc2l6ZSA+PSB0aGlzLm1pblNjYWxlICYmIHNpemUgPD0gMSA/IHNpemUgOiB0aGlzLm1pblNjYWxlO1xuXG4gICAgLy8gY2hlY2tcbiAgICBjb25zdCBjaGFuZ2VkID0gc2l6ZSAhPSBudWxsICYmIHNpemUgIT09IHRoaXMuc2NhbGUgJiYgbmV3U2l6ZSAhPT0gdGhpcy5zY2FsZTtcbiAgICB0aGlzLl9zY2FsZSA9IHNpemU7XG4gICAgaWYgKCFjaGFuZ2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NjYWwzRml4ID0gbmV3U2l6ZTtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luUG9zaXRpb24gPSB7Li4udGhpcy5faW1nUmVjdH07XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICAgIHg6IG9yaWdpblBvc2l0aW9uLngsXG4gICAgICAgICAgeTogb3JpZ2luUG9zaXRpb24ueSxcbiAgICAgICAgICBsZWZ0OiBvcmlnaW5Qb3NpdGlvbi54YyxcbiAgICAgICAgICB0b3A6IG9yaWdpblBvc2l0aW9uLnljXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe30pO1xuICAgICAgICB0aGlzLl9tb3ZlKHtcbiAgICAgICAgICBzcmNFdmVudDoge30sXG4gICAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICAgIGRlbHRhWTogMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubWluU2NhbGUpIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICAuLi50aGlzLl9nZXRDZW50ZXJQb2ludHMoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlQ2hhbmdlLmVtaXQoc2l6ZSk7XG4gICAgaWYgKCFub0F1dG9Dcm9wKSB7XG4gICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2VudGVyUG9pbnRzKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBpbWcgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB4ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSAoaW1nLndpZHRoKSkgLyAyO1xuICAgIGNvbnN0IHkgPSAocm9vdC5vZmZzZXRIZWlnaHQgLSAoaW1nLmhlaWdodCkpIC8gMjtcbiAgICByZXR1cm4ge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFqdXN0YXIgYSBsYSBwYW50YWxsYVxuICAgKi9cbiAgZml0VG9TY3JlZW4oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgbWluID0ge1xuICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyLm9mZnNldEhlaWdodFxuICAgIH07XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9pbWc7XG4gICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gd2lkdGgsXG4gICAgICBoZWlnaHQ6IG1pbi5oZWlnaHQgLyBoZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpO1xuICAgIHRoaXMuc2V0U2NhbGUocmVzdWx0KTtcbiAgfVxuXG4gIGZpdCgpIHtcbiAgICB0aGlzLnNldFNjYWxlKHRoaXMubWluU2NhbGUpO1xuICB9XG5cbiAgX21vdmVTdGFydCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgIHg6IHRoaXMuX2ltZ1JlY3QueCxcbiAgICAgIHk6IHRoaXMuX2ltZ1JlY3QueSxcbiAgICAgIGxlZnQ6IHRoaXMuX2ltZ1JlY3QueGMsXG4gICAgICB0b3A6IHRoaXMuX2ltZ1JlY3QueWNcbiAgICB9O1xuICB9XG4gIF9tb3ZlKGV2ZW50OiB7IHNyY0V2ZW50Pzoge307IGRlbHRhWDogYW55OyBkZWx0YVk6IGFueTsgfSkge1xuICAgIGxldCB4OiBudW1iZXIsIHk6IG51bWJlcjtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWwzRml4O1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IHN0YXJ0UCA9IHRoaXMub2Zmc2V0O1xuICAgIC8vIExpbWl0IGZvciBsZWZ0XG4gICAgaWYgKChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpID49IHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSkge1xuICAgICAgeCA9IHN0YXJ0UC54ICsgKHN0YXJ0UC5sZWZ0KSAtIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIH1cblxuICAgIC8vIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpID49IChzdGFydFAudG9wIC0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSkpIHtcbiAgICAgIHkgPSBzdGFydFAueSArIChzdGFydFAudG9wKSAtIChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KTtcbiAgICB9XG5cbiAgICAvLyAvLyBMaW1pdCBmb3IgcmlnaHRcbiAgICBpZiAoKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCkgKyAoY2FudmFzLndpZHRoKSAtIChzdGFydFAubGVmdCAtIChldmVudC5kZWx0YVggLyBzY2FsZUZpeCkpIDw9IGNvbmZpZy53aWR0aCAvIHNjYWxlRml4KSB7XG4gICAgICB4ID0gc3RhcnRQLnggKyAoc3RhcnRQLmxlZnQpICsgKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCkgLSBjYW52YXMud2lkdGg7XG4gICAgfVxuXG4gICAgLy8gLy8gTGltaXQgZm9yIGJvdHRvbVxuICAgIGlmICgoKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpICsgKGNhbnZhcy5oZWlnaHQpIC0gKHN0YXJ0UC50b3AgLSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpKSkgPD0gKGNvbmZpZy5oZWlnaHQgLyBzY2FsZUZpeCkpIHtcbiAgICAgIHkgPSBzdGFydFAueSArIChzdGFydFAudG9wKSArIChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KSAtIGNhbnZhcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gV2hlbiBwcmVzcyBzaGlmdEtleSwgZGVwcmVjYXRlZFxuICAgIC8vIGlmIChldmVudC5zcmNFdmVudCAmJiBldmVudC5zcmNFdmVudC5zaGlmdEtleSkge1xuICAgIC8vICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPT09IE1hdGgubWF4KE1hdGguYWJzKGV2ZW50LmRlbHRhWCksIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkpKSB7XG4gICAgLy8gICAgIHkgPSB0aGlzLm9mZnNldC50b3A7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB4ID0gdGhpcy5vZmZzZXQubGVmdDtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAoZXZlbnQuZGVsdGFYIC8gc2NhbGVGaXgpICsgKHRoaXMub2Zmc2V0LngpOyB9XG4gICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSArICh0aGlzLm9mZnNldC55KTsgfVxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICBjb25zdCBjcm9wcGluZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9hcmVhQ3JvcHBlclJlY3QoKTtcbiAgICBpZiAoeCA9PT0gdm9pZCAwICYmIHkgPT09IHZvaWQgMCkge1xuICAgICAgeCA9IHRoaXMuX2ltZ1JlY3QueGM7XG4gICAgICB5ID0gdGhpcy5faW1nUmVjdC55YztcbiAgICB9XG4gICAgeCA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0LngpIC0gKHggLSAodGhpcy5jb25maWcud2lkdGggLyAyKSk7XG4gICAgeSA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0LnkpIC0gKHkgLSAodGhpcy5jb25maWcuaGVpZ2h0IC8gMikpO1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgX3NsaWRlRW5kKCkge1xuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIF9jcm9wSWZBdXRvQ3JvcCgpIHtcbiAgICBpZiAodGhpcy5jb25maWcuYXV0b0Nyb3ApIHtcbiAgICAgIHRoaXMuY3JvcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKisgKi9cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5fc2NhbDNGaXggKyAuMDU7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYW4gdGhlIGltZyBjcm9wcGVyICovXG4gIGNsZWFuKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLl9pbWdSZWN0ID0geyB9IGFzIGFueTtcbiAgICAgIHRoaXMub2Zmc2V0ID0gbnVsbDtcbiAgICAgIHRoaXMuc2NhbGUgPSBudWxsO1xuICAgICAgdGhpcy5fc2NhbDNGaXggPSBudWxsO1xuICAgICAgdGhpcy5fcm90YXRpb24gPSAwO1xuICAgICAgdGhpcy5fbWluU2NhbGUgPSBudWxsO1xuICAgICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBudWxsO1xuICAgICAgdGhpcy5faXNMb2FkZWRJbWcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmlzTG9hZGVkID0gbnVsbDtcbiAgICAgIHRoaXMuaXNDcm9wcGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQgPSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICAgIGNhbnZhcy53aWR0aCA9IDA7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqLSAqL1xuICB6b29tT3V0KCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5fc2NhbDNGaXggLSAuMDU7XG4gICAgaWYgKHNjYWxlID4gdGhpcy5taW5TY2FsZSAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXQoKTtcbiAgICB9XG4gIH1cbiAgY2VudGVyKCkge1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgIC4uLnRoaXMuX2dldENlbnRlclBvaW50cygpXG4gICAgfTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKG5ld1N0eWxlcyk7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4vKipcbiAqIExvYWQgSW1hZ2UgZnJvbSBVUkxcbiAqIEBwYXJhbSBzcmMgVVJMXG4gKiBAcGFyYW0gZm4gZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgZW1pdCB0aGUgZXZlbnQgbG9hZGVkXG4gKi9cbiAgc2V0SW1hZ2VVcmwoc3JjOiBzdHJpbmcsIGZuPzogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuY2xlYW4oKTtcbiAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IHNyYztcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2U7XG4gICAgaW1nLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgY29uc3QgY3JvcEV2ZW50OiBJbWdDcm9wcGVyRXZlbnQgPSB7XG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHR5cGU6IHRoaXMuX2RlZmF1bHRUeXBlLFxuICAgICAgZGF0YVVSTDogbnVsbCxcbiAgICAgIGJhc2U2NDogbnVsbCxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgc2NhbGU6IG51bGwsXG4gICAgICBvcmlnaW5hbERhdGFVUkw6IHNyYyxcbiAgICAgIHJvdGF0aW9uOiBudWxsLFxuICAgICAgcG9zaXRpb246IG51bGxcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCk7XG4gICAgfSk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbWdMb2FkZWQoaW1nKTtcbiAgICAgIGNyb3BFdmVudC53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgIGNyb3BFdmVudC5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgdGhpcy5faXNMb2FkZWRJbWcgPSB0cnVlO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuX25nWm9uZVxuICAgICAgICAgIC5vblN0YWJsZVxuICAgICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUodGhpcy5taW5TY2FsZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcm90YXRlKGRlZ3JlZXM6IG51bWJlcikge1xuICAgIGNvbnN0IHZhbGlkRGVncmVlcyA9IHRoaXMuX3JvdGF0aW9uID0gY29udmVydFRvVmFsaWREZWdyZWVzKGRlZ3JlZXMpO1xuICAgIGNvbnN0IGRlZ3JlZXNSYWQgPSB2YWxpZERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNhbnZhc0Nsb24gPSBjcmVhdGVDYW52YXNJbWcoY2FudmFzKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNDbG9uLndpZHRoLCBjYW52YXNDbG9uLmhlaWdodCk7XG5cbiAgICAvLyByb3RhdGUgY2FudmFzIGltYWdlXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY2FudmFzLCAndHJhbnNmb3JtJywgYHJvdGF0ZSgke3ZhbGlkRGVncmVlc31kZWcpIHNjYWxlKCR7MSAvIHRoaXMuX3NjYWwzRml4fSlgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjYW52YXMsICd0cmFuc2Zvcm1PcmlnaW4nLCBgJHt0aGlzLl9pbWdSZWN0LnhjfXB4ICR7dGhpcy5faW1nUmVjdC55Y31weCAwYCk7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcblxuICAgIC8vIHNhdmUgcmVjdFxuICAgIGNvbnN0IGNhbnZhc1JlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyByZW1vdmUgcm90YXRlIHN0eWxlc1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybScpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybU9yaWdpbicpO1xuXG4gICAgLy8gc2V0IHcgJiBoXG4gICAgY29uc3QgdyA9IGNhbnZhc1JlY3Qud2lkdGg7XG4gICAgY29uc3QgaCA9IGNhbnZhc1JlY3QuaGVpZ2h0O1xuICAgIGN0eC5jYW52YXMud2lkdGggPSB3O1xuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgIC8vIHRyYW5zbGF0ZSBhbmQgcm90YXRlXG4gICAgY3R4LnRyYW5zbGF0ZSh3IC8gMiwgaCAvIDIpO1xuICAgIGN0eC5yb3RhdGUoZGVncmVlc1JhZCk7XG4gICAgY3R4LmRyYXdJbWFnZShjYW52YXNDbG9uLCAtY2FudmFzQ2xvbi53aWR0aCAvIDIsIC1jYW52YXNDbG9uLmhlaWdodCAvIDIpO1xuXG4gICAgLy8gVXBkYXRlIG1pbiBzY2FsZVxuICAgIHRoaXMuX21pblNjYWxlID0gZ2V0TWluU2NhbGUodGhpcy5jb25maWcud2lkdGgsIHRoaXMuY29uZmlnLmhlaWdodCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIHNldCB0aGUgbWluaW11bSBzY2FsZSwgb25seSBpZiBuZWNlc3NhcnlcbiAgICBpZiAodGhpcy5zY2FsZSA8IHRoaXMubWluU2NhbGUpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoMCwgdHJ1ZSk7XG4gICAgfSAvLyAgICAgICAgICAgICAgICDihpEgbm8gQXV0b0Nyb3BcblxuICAgIGNvbnN0IHJvb3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgIHg6ICh4IC0gcm9vdFJlY3QueCksXG4gICAgICB5OiAoeSAtIHJvb3RSZWN0LnkpXG4gICAgfSk7XG5cbiAgICAvLyBrZWVwIGltYWdlIGluc2lkZSB0aGUgZnJhbWVcbiAgICBjb25zdCBvcmlnaW5Qb3NpdGlvbiA9IHsuLi50aGlzLl9pbWdSZWN0fTtcbiAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgIHg6IG9yaWdpblBvc2l0aW9uLngsXG4gICAgICB5OiBvcmlnaW5Qb3NpdGlvbi55LFxuICAgICAgbGVmdDogb3JpZ2luUG9zaXRpb24ueGMsXG4gICAgICB0b3A6IG9yaWdpblBvc2l0aW9uLnljXG4gICAgfTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHt9KTtcbiAgICB0aGlzLl9tb3ZlKHtcbiAgICAgIHNyY0V2ZW50OiB7fSxcbiAgICAgIGRlbHRhWDogMCxcbiAgICAgIGRlbHRhWTogMFxuICAgIH0pO1xuXG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KGltZzogSFRNTENhbnZhc0VsZW1lbnQsIGNvbmZpZywgcXVhbGl0eTogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIC8qKiBDYWxjdWxhdGUgdG90YWwgbnVtYmVyIG9mIHN0ZXBzIG5lZWRlZCAqL1xuICAgIGxldCAgbnVtU3RlcHMgPSBNYXRoLmNlaWwoTWF0aC5sb2coTWF0aC5tYXgoaW1nLndpZHRoLCBpbWcuaGVpZ2h0KSAvIE1hdGgubWF4KGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodCkpIC8gTWF0aC5sb2coMikpIC0gMTtcbiAgICBudW1TdGVwcyA9IG51bVN0ZXBzIDw9IDAgPyAwIDogbnVtU3RlcHM7XG5cbiAgICAvKipBcnJheSBzdGVwcyAqL1xuICAgIGNvbnN0IHN0ZXBzID0gQXJyYXkuZnJvbShBcnJheShudW1TdGVwcykua2V5cygpKTtcblxuICAgIC8qKiBDb250ZXh0ICovXG4gICAgY29uc3Qgb2N0eCA9IGltZy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3QgcSA9ICgocXVhbGl0eSAqIDEwKSAqKiBudW1TdGVwcykgLyAoMTAgKiogbnVtU3RlcHMpO1xuICAgIGNvbnN0IGZpbGVUeXBlID0gdGhpcy5fZGVmYXVsdFR5cGU7XG4gICAgLyoqIElmIFN0ZXBzID0+IGltYWdlU21vb3RoaW5nUXVhbGl0eSAqL1xuICAgIGlmIChudW1TdGVwcykge1xuICAgICAgLyoqIFNldCBzaXplICovXG4gICAgICBjb25zdCB3ID0gaW1nLndpZHRoICogcXVhbGl0eTtcbiAgICAgIGNvbnN0IGggPSBpbWcuaGVpZ2h0ICogcXVhbGl0eTtcbiAgICAgIC8qKiBPbmx5IHRoZSBuZXcgaW1nIGlzIHNob3duLiAqL1xuICAgICAgaWYgKGZpbGVUeXBlID09PSAnaW1hZ2UvcG5nJyB8fCBmaWxlVHlwZSA9PT0gJ2ltYWdlL3N2Zyt4bWwnKSB7XG4gICAgICAgIG9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvcHknO1xuICAgICAgfVxuXG4gICAgICAvKiogU3RlcHMgKi9cbiAgICAgIChzdGVwcyBhcyBBcnJheTxudW1iZXI+KS5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgb2N0eC5kcmF3SW1hZ2UoaW1nLFxuICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgdywgaFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RlcCBmaW5hbFxuICAgICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICAgKi9cbiAgICBjb25zdCBvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxuICAgIGN0eCA9IG9jLmdldENvbnRleHQoJzJkJyk7XG4gICAgb2Mud2lkdGggPSBjb25maWcud2lkdGg7XG4gICAgb2MuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcbiAgICBjdHguZHJhd0ltYWdlKGltZyxcbiAgICAgIDAsIDAsXG4gICAgICBpbWcud2lkdGggKiBxLCBpbWcuaGVpZ2h0ICogcSxcbiAgICAgIDAsIDAsXG4gICAgICBvYy53aWR0aCwgb2MuaGVpZ2h0XG4gICAgKTtcbiAgICByZXR1cm4gb2M7XG4gIH1cblxuICAvKipcbiAgICogQ3JvcCBJbWFnZVxuICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAqL1xuICBjcm9wKGNvbmZpZz86IEltZ0Nyb3BwZXJDb25maWcpOiBJbWdDcm9wcGVyRXZlbnQge1xuICAgIGNvbnN0IG5ld0NvbmZpZyA9IGNvbmZpZyA/IG1lcmdlRGVlcCh7fSwgdGhpcy5jb25maWcgfHwgQ09ORklHX0RFRkFVTFQsIGNvbmZpZykgOiB0aGlzLmNvbmZpZztcbiAgICBjb25zdCBjcm9wRXZlbnQgPSB0aGlzLl9pbWdDcm9wKG5ld0NvbmZpZyk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9pbWdDcm9wKG15Q29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgY29uc3QgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBpbWdSZWN0ID0gdGhpcy5faW1nUmVjdDtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWwzRml4O1xuICAgIGNvbnN0IGxlZnQgPSBpbWdSZWN0LnhjIC0gKG15Q29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KTtcbiAgICBjb25zdCB0b3AgPSBpbWdSZWN0LnljIC0gKG15Q29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgd2lkdGg6IG15Q29uZmlnLndpZHRoLFxuICAgICAgaGVpZ2h0OiBteUNvbmZpZy5oZWlnaHRcbiAgICB9O1xuICAgIGNhbnZhc0VsZW1lbnQud2lkdGggPSBjb25maWcud2lkdGggLyBzY2FsZUZpeDtcbiAgICBjYW52YXNFbGVtZW50LmhlaWdodCA9IGNvbmZpZy5oZWlnaHQgLyBzY2FsZUZpeDtcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKG15Q29uZmlnLmZpbGwpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBteUNvbmZpZy5maWxsO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhc0VsZW1lbnQud2lkdGgsIGNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcbiAgICB9XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudCBhcyBhbnksXG4gICAgICAtKGxlZnQpLCAtKHRvcCksXG4gICAgKTtcbiAgICBsZXQgcmVzdWx0ID0gY2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBhbnRpQWxpYXNlZFEgPSBteUNvbmZpZy5hbnRpQWxpYXNlZCA/IC41IDogMTtcbiAgICBpZiAobXlDb25maWcub3V0cHV0ID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIGNvbmZpZywgYW50aUFsaWFzZWRRKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBteUNvbmZpZy5vdXRwdXQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIG15Q29uZmlnLm91dHB1dCwgYW50aUFsaWFzZWRRKTtcbiAgICB9XG4gICAgbGV0IHVybDtcbiAgICBpZiAobXlDb25maWcudHlwZSkge1xuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTChgJHtteUNvbmZpZy50eXBlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKHRoaXMuX2RlZmF1bHRUeXBlKTtcbiAgICB9XG4gICAgY29uc3QgY3JvcEV2ZW50ID0ge1xuICAgICAgZGF0YVVSTDogdXJsLFxuICAgICAgYmFzZTY0OiB1cmwsXG4gICAgICB0eXBlOiB0aGlzLl9kZWZhdWx0VHlwZSB8fCBteUNvbmZpZy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWUsXG4gICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjb25maWcuaGVpZ2h0LFxuICAgICAgb3JpZ2luYWxEYXRhVVJMOiB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCxcbiAgICAgIHNjYWxlOiB0aGlzLl9zY2FsM0ZpeCxcbiAgICAgIHJvdGF0aW9uOiB0aGlzLl9yb3RhdGlvbixcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHg6IHRoaXMuX2ltZ1JlY3QueGMsXG4gICAgICAgIHk6IHRoaXMuX2ltZ1JlY3QueWNcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaXNDcm9wcGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNyb3BwZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cblxuICBwcml2YXRlIF9yb290UmVjdCgpOiBET01SZWN0IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgfVxuXG4gIHByaXZhdGUgX2FyZWFDcm9wcGVyUmVjdCgpOiBET01SZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fY3JvcHBpbmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB9XG5cbn1cblxuLyoqXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoNDUpID09PSA5MFxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDQwKSA9PT0gMFxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDEwMCkgPT09IDkwXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyhudW06IG51bWJlcikge1xuICBjb25zdCB2YWwzNjAgPSBsaW1pdE51bShudW0sIDM2MCk7XG4gIGNvbnN0IHZhbDkwID0gbGltaXROdW0odmFsMzYwLnJlc3VsdCwgOTApO1xuICBjb25zdCBzaWduID0gTWF0aC5zaWduKG51bSk7XG4gIGlmICh2YWw5MC5yZXN1bHQgPj0gKDkwIC8gMikpIHtcbiAgICByZXR1cm4gOTAgKiAodmFsOTAucGFydHMgKyAxKSAqIHNpZ247XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDkwICogdmFsOTAucGFydHMgKiBzaWduO1xuICB9XG59XG5cbi8qKlxuICogZGVtbzpcbiAqIGxpbWl0TnVtKDQ1MCwgMzYwKSA9PT0gOTBcbiAqIEBpZ25vcmVcbiAqL1xuZnVuY3Rpb24gbGltaXROdW0obnVtOiBudW1iZXIsIG51bTI6IG51bWJlcikge1xuICBjb25zdCBudW1BYnMgPSBNYXRoLmFicyhudW0pO1xuICBjb25zdCBwYXJ0cyA9IE1hdGguZmxvb3IobnVtQWJzIC8gbnVtMik7XG4gIGxldCByZXN1bHQ6IG51bWJlcjtcbiAgaWYgKHBhcnRzKSB7XG4gICAgcmVzdWx0ID0gbnVtQWJzIC0gKG51bTIgKiBwYXJ0cyk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gbnVtO1xuICB9XG4gIGlmIChudW1BYnMgIT09IG51bSkge1xuICAgIHJlc3VsdCAqPSAtMTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc3VsdCxcbiAgICBwYXJ0c1xuICB9O1xufVxuXG4vKipcbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FudmFzSW1nKGltZzogSFRNTENhbnZhc0VsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50KSB7XG5cbiAgLy8gY3JlYXRlIGEgbmV3IGNhbnZhc1xuICBjb25zdCBuZXdDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgY29udGV4dCA9IG5ld0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIC8vIHNldCBkaW1lbnNpb25zXG4gIG5ld0NhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgbmV3Q2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG5cbiAgLy8gYXBwbHkgdGhlIG9sZCBjYW52YXMgdG8gdGhlIG5ldyBvbmVcbiAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcblxuICAvLyByZXR1cm4gdGhlIG5ldyBjYW52YXNcbiAgcmV0dXJuIG5ld0NhbnZhcztcbn1cblxuLyoqXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldE1pblNjYWxlKG13OiBudW1iZXIsIG1oOiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gIHJldHVybiBNYXRoLm1heChtdyAvIHcsIG1oIC8gaCk7XG59XG4iXX0=