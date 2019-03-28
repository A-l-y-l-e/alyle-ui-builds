/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, EventEmitter, Renderer2, NgZone, HostListener } from '@angular/core';
import { LyTheme2, mergeDeep, LY_COMMON_STYLES } from '@alyle/ui';
import { take } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var STYLES = ({
    $priority: STYLE_PRIORITY,
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
    area: tslib_1.__assign({ pointerEvents: 'none', boxShadow: '0 0 0 20000px rgba(0, 0, 0, 0.4)' }, LY_COMMON_STYLES.fill, { margin: 'auto', '&:before, &:after': tslib_1.__assign({}, LY_COMMON_STYLES.fill, { content: "''" }), '&:before': {
            width: 0,
            height: 0,
            margin: 'auto',
            borderRadius: '50%',
            background: '#fff',
            border: 'solid 2px rgb(255, 255, 255)'
        }, '&:after': {
            border: 'solid 2px rgb(255, 255, 255)'
        } }),
    defaultContent: {
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
     * If this is not defined, the new image will be automatically defined.
     * @type {?|undefined}
     */
    ImgCropperConfig.prototype.type;
    /**
     * Background color( default: null), if is null in png is transparent but not in jpg.
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
    /**
     * Emit event `error` if the file size for the limit.
     * Note: It only works when the image is received from the `<input>` event.
     * @type {?|undefined}
     */
    ImgCropperConfig.prototype.maxFileSize;
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
/** @enum {number} */
var ImgCropperError = {
    /** The loaded image exceeds the size limit set. */
    Size: 0,
    /** The file loaded is not image. */
    Type: 1,
};
export { ImgCropperError };
ImgCropperError[ImgCropperError.Size] = 'Size';
ImgCropperError[ImgCropperError.Type] = 'Type';
/**
 * @record
 */
export function ImgCropperEvent() { }
if (false) {
    /**
     * Cropped image data URL
     * @type {?|undefined}
     */
    ImgCropperEvent.prototype.dataURL;
    /** @type {?} */
    ImgCropperEvent.prototype.name;
    /**
     * Filetype
     * @type {?|undefined}
     */
    ImgCropperEvent.prototype.type;
    /** @type {?|undefined} */
    ImgCropperEvent.prototype.width;
    /** @type {?|undefined} */
    ImgCropperEvent.prototype.height;
    /**
     * Original Image data URL
     * @type {?|undefined}
     */
    ImgCropperEvent.prototype.originalDataURL;
    /** @type {?|undefined} */
    ImgCropperEvent.prototype.scale;
    /**
     * Current rotation in degrees
     * @type {?|undefined}
     */
    ImgCropperEvent.prototype.rotation;
    /**
     * Size of the image in bytes
     * @type {?|undefined}
     */
    ImgCropperEvent.prototype.size;
    /** @type {?|undefined} */
    ImgCropperEvent.prototype.position;
}
/**
 * @record
 */
export function ImgCropperErrorEvent() { }
if (false) {
    /**
     * Type of error
     * @type {?}
     */
    ImgCropperErrorEvent.prototype.error;
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
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(STYLES);
        this._imgRect = (/** @type {?} */ ({}));
        this._listeners = new Set();
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
        var imgCropper = this.theme.variables.imgCropper;
        if (imgCropper) {
            if (imgCropper.root) {
                this._renderer.addClass(this.elementRef.nativeElement, this.theme.style(imgCropper.root, STYLE_PRIORITY, STYLES));
            }
        }
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
            /** @type {?} */
            var maxFileSize = this._config.maxFileSize;
            if (maxFileSize) {
                this.maxFileSize = maxFileSize;
            }
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
     * @return {?}
     */
    LyResizingCroppingImages.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._listeners.forEach(function (listen) { return listen.unsubscribe(); });
        this._listeners.clear();
    };
    /**
     * @private
     * @param {?} imgElement
     * @return {?}
     */
    LyResizingCroppingImages.prototype._imgLoaded = /**
     * @private
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
            var ctx = (/** @type {?} */ (canvas.getContext('2d')));
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imgElement, 0, 0);
            /** set min scale */
            this._minScale = getMinScale(this.config.width, this.config.height, canvas.width, canvas.height);
        }
    };
    /**
     * @private
     * @param {?} values
     * @return {?}
     */
    LyResizingCroppingImages.prototype._setStylesForContImg = /**
     * @private
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
        if (_img.files && _img.files.length !== 1) {
            return;
        }
        /** @type {?} */
        var fileSize = (/** @type {?} */ (_img.files))[0].size;
        /** @type {?} */
        var fileName = _img.value.replace(/.*(\/|\\)/, '');
        if (this.maxFileSize && fileSize > this.maxFileSize) {
            /** @type {?} */
            var cropEvent = {
                name: fileName,
                type: (/** @type {?} */ (_img.files))[0].type,
                size: fileSize,
                error: ImgCropperError.Size
            };
            this.clean();
            this.error.emit((/** @type {?} */ (cropEvent)));
            return;
        }
        /** @type {?} */
        var fileReader = new FileReader();
        /** @type {?} */
        var listener = fromEvent(fileReader, 'load')
            .pipe(take(1))
            .subscribe(function (loadEvent) {
            /** @type {?} */
            var originalImageUrl = (/** @type {?} */ (((/** @type {?} */ (loadEvent.target))).result));
            // Set type
            if (!_this.config.type) {
                _this._defaultType = (/** @type {?} */ (_img.files))[0].type;
            }
            // set name
            _this._fileName = fileName;
            // set file size
            _this._sizeInBytes = (/** @type {?} */ (_img.files))[0].size;
            _this.setImageUrl(originalImageUrl);
            _this.cd.markForCheck();
            _this._listeners.delete(listener);
        });
        this._listeners.add(listener);
        fileReader.readAsDataURL((/** @type {?} */ (_img.files))[0]);
    };
    /** Set the size of the image, the values can be 0 between 1, where 1 is the original size */
    /**
     * Set the size of the image, the values can be 0 between 1, where 1 is the original size
     * @param {?=} size
     * @param {?=} noAutoCrop
     * @return {?}
     */
    LyResizingCroppingImages.prototype.setScale = /**
     * Set the size of the image, the values can be 0 between 1, where 1 is the original size
     * @param {?=} size
     * @param {?=} noAutoCrop
     * @return {?}
     */
    function (size, noAutoCrop) {
        // fix min scale
        /** @type {?} */
        var newSize = (/** @type {?} */ (size)) >= (/** @type {?} */ (this.minScale)) && (/** @type {?} */ (size)) <= 1 ? size : this.minScale;
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
     * @private
     * @return {?}
     */
    LyResizingCroppingImages.prototype._getCenterPoints = /**
     * @private
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
        if (!scaleFix || !startP) {
            return;
        }
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
            x = (event.deltaX / scaleFix) + (startP.x);
        }
        if (y === void 0) {
            y = (event.deltaY / scaleFix) + (startP.y);
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
        if (x === undefined && y === undefined) {
            x = this._imgRect.xc;
            y = this._imgRect.yc;
        }
        x = (croppingContainerRect.x - hostRect.x) - ((/** @type {?} */ (x)) - (this.config.width / 2));
        y = (croppingContainerRect.y - hostRect.y) - ((/** @type {?} */ (y)) - (this.config.height / 2));
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
     * @private
     * @return {?}
     */
    LyResizingCroppingImages.prototype._cropIfAutoCrop = /**
     * @private
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
        var scale = (/** @type {?} */ (this._scal3Fix)) + .05;
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
            this.offset = undefined;
            this.scale = (/** @type {?} */ (undefined));
            this._scal3Fix = undefined;
            this._rotation = 0;
            this._minScale = undefined;
            this._isLoadedImg = false;
            this.isLoaded = false;
            this.isCropped = false;
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
        var scale = (/** @type {?} */ (this._scal3Fix)) - .05;
        if (scale > (/** @type {?} */ (this.minScale)) && scale <= 1) {
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
        /** @type {?} */
        var fileSize = this._sizeInBytes;
        /** @type {?} */
        var fileName = this._fileName;
        /** @type {?} */
        var defaultType = this._defaultType;
        img.crossOrigin = 'anonymous';
        /** @type {?} */
        var cropEvent = {
            name: fileName,
            type: defaultType,
            originalDataURL: src
        };
        img.src = src;
        if (fileSize) {
            cropEvent.size = fileSize;
        }
        /** @type {?} */
        var loadListen = fromEvent(img, 'load')
            .pipe(take(1)).subscribe(function () {
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
            _this._listeners.delete(loadListen);
            _this.ngOnDestroy();
        });
        this._listeners.add(loadListen);
        /** @type {?} */
        var errorListen = fromEvent(img, 'error').pipe(take(1)).subscribe(function () {
            ((/** @type {?} */ (cropEvent))).error = ImgCropperError.Type;
            _this.error.emit((/** @type {?} */ (cropEvent)));
            _this._listeners.delete(errorListen);
            _this.ngOnDestroy();
        });
        this._listeners.add(errorListen);
        // clear
        this._sizeInBytes = null;
        this._fileName = null;
        this._defaultType = undefined;
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
        var ctx = (/** @type {?} */ (canvas.getContext('2d')));
        // clear
        ctx.clearRect(0, 0, canvasClon.width, canvasClon.height);
        // rotate canvas image
        this._renderer.setStyle(canvas, 'transform', "rotate(" + validDegrees + "deg) scale(" + 1 / (/** @type {?} */ (this._scal3Fix)) + ")");
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
        if ((/** @type {?} */ (this.scale)) < (/** @type {?} */ (this.minScale))) {
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
     * @private
     * @param {?} img
     * @param {?} config
     * @param {?} quality
     * @return {?}
     */
    LyResizingCroppingImages.prototype.imageSmoothingQuality = /**
     * @private
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
        var octx = (/** @type {?} */ (img.getContext('2d')));
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
        var ctx = (/** @type {?} */ (oc.getContext('2d')));
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
     * @docs-private
     */
    /**
     * \@docs-private
     * @private
     * @param {?} myConfig
     * @return {?}
     */
    LyResizingCroppingImages.prototype._imgCrop = /**
     * \@docs-private
     * @private
     * @param {?} myConfig
     * @return {?}
     */
    function (myConfig) {
        /** @type {?} */
        var canvasElement = document.createElement('canvas');
        /** @type {?} */
        var imgRect = (/** @type {?} */ (this._imgRect));
        /** @type {?} */
        var scaleFix = (/** @type {?} */ (this._scal3Fix));
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
        var ctx = (/** @type {?} */ (canvasElement.getContext('2d')));
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
     * @private
     * @return {?}
     */
    LyResizingCroppingImages.prototype._rootRect = /**
     * @private
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.elementRef.nativeElement.getBoundingClientRect()));
    };
    /**
     * @private
     * @return {?}
     */
    LyResizingCroppingImages.prototype._areaCropperRect = /**
     * @private
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
                    template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart()\"\n(slide)=\"_move($event)\"\n(slideend)=\"_slideEnd()\">\n  <canvas #_imgCanvas></canvas>\n</div>\n<div #_croppingContainer *ngIf=\"_isLoadedImg; else content\" [className]=\"classes.area\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.defaultContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
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
        config: [{ type: Input }],
        scale: [{ type: Input }],
        maxFileSize: [{ type: Input }],
        scaleChange: [{ type: Output }],
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
     * \@docs-private
     * @type {?}
     */
    LyResizingCroppingImages.prototype.classes;
    /** @type {?} */
    LyResizingCroppingImages.prototype._originalImgBase64;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._fileName;
    /**
     * Original image
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._img;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype.offset;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._scale;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._scal3Fix;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._minScale;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._config;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._imgRect;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._rotation;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._listeners;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._sizeInBytes;
    /**
     * When is loaded image
     * \@internal
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
    /** @type {?} */
    LyResizingCroppingImages.prototype._imgContainer;
    /** @type {?} */
    LyResizingCroppingImages.prototype._croppingContainer;
    /** @type {?} */
    LyResizingCroppingImages.prototype._imgCanvas;
    /**
     * Emit event `error` if the file size for the limit.
     * Note: It only works when the image is received from the `<input>` event.
     * @type {?}
     */
    LyResizingCroppingImages.prototype.maxFileSize;
    /** @type {?} */
    LyResizingCroppingImages.prototype.scaleChange;
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
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._defaultType;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    LyResizingCroppingImages.prototype._ngZone;
}
/**
 * convertToValidDegrees(45) === 90
 * convertToValidDegrees(40) === 0
 * convertToValidDegrees(100) === 90
 * \@docs-private
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
 * \@docs-private
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
    var context = (/** @type {?} */ (newCanvas.getContext('2d')));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy8iLCJzb3VyY2VzIjpbInJlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7SUFFekMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFFbkIsTUFBTSxHQUFHLENBQUM7SUFDZCxTQUFTLEVBQUUsY0FBYztJQUN6QixJQUFJLEVBQUU7UUFDSixxQkFBcUIsRUFBRSxNQUFNO1FBQzdCLGtCQUFrQixFQUFFLE1BQU07UUFDMUIsaUJBQWlCLEVBQUUsTUFBTTtRQUN6QixVQUFVLEVBQUUsTUFBTTtRQUNsQixPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO0tBQ3JCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDO1FBQ1AsWUFBWSxFQUFFOzs7WUFHWixhQUFhLEVBQUUsTUFBTTtTQUN0QjtLQUNGO0lB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QUMsQ0FBQztBQUNsQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgbWVyZ2VEZWVwLCBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBTVFlMRVMgPSAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgaW1nQ29udGFpbmVyOiB7XG4gICAgY3Vyc29yOiAnbW92ZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgJyYgPiBjYW52YXMnOiB7XG4gICAgICAvLyB3aWR0aDogJzEwMCUnLFxuICAgICAgLy8gaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfVxuICB9LFxuICBhcmVhOiB7XG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJzAgMCAwIDIwMDAwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gICAgJyY6YmVmb3JlLCAmOmFmdGVyJzoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgY29udGVudDogYCcnYCxcbiAgICB9LFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9LFxuICAgICcmOmFmdGVyJzoge1xuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9XG4gIH0sXG4gIGRlZmF1bHRDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAnJiwgJiA+IGlucHV0JzogTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICcmICo6bm90KGlucHV0KSc6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgJyYgPiBpbnB1dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9XG59KTtcbi8qKiBJbWFnZSBDcm9wcGVyIENvbmZpZyAqL1xuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgLyoqIENyb3BwZXIgYXJlYSB3aWR0aCAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKiogQ3JvcHBlciBhcmVhIGhlaWdodCAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqIElmIHRoaXMgaXMgbm90IGRlZmluZWQsIHRoZSBuZXcgaW1hZ2Ugd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQuICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcuICovXG4gIGZpbGw/OiBzdHJpbmcgfCBudWxsO1xuICAvKiogU2V0IGFudGktYWxpYXNlZCggZGVmYXVsdDogdHJ1ZSkgKi9cbiAgYW50aUFsaWFzZWQ/OiBib29sZWFuO1xuICBhdXRvQ3JvcD86IGJvb2xlYW47XG4gIG91dHB1dD86IEltZ091dHB1dCB8IEltZ1Jlc29sdXRpb247XG4gIC8qKlxuICAgKiBFbWl0IGV2ZW50IGBlcnJvcmAgaWYgdGhlIGZpbGUgc2l6ZSBmb3IgdGhlIGxpbWl0LlxuICAgKiBOb3RlOiBJdCBvbmx5IHdvcmtzIHdoZW4gdGhlIGltYWdlIGlzIHJlY2VpdmVkIGZyb20gdGhlIGA8aW5wdXQ+YCBldmVudC5cbiAgICovXG4gIG1heEZpbGVTaXplPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWdPdXRwdXQge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuLyoqIEltYWdlIG91dHB1dCAqL1xuZXhwb3J0IGVudW0gSW1nUmVzb2x1dGlvbiB7XG4gIC8qKiBSZXNpemluZyAmIGNyb3BwaW5nICovXG4gIERlZmF1bHQsXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXG4gIE9yaWdpbmFsSW1hZ2Vcbn1cblxuLyoqIEltYWdlIG91dHB1dCAqL1xuZXhwb3J0IGVudW0gSW1nQ3JvcHBlckVycm9yIHtcbiAgLyoqIFRoZSBsb2FkZWQgaW1hZ2UgZXhjZWVkcyB0aGUgc2l6ZSBsaW1pdCBzZXQuICovXG4gIFNpemUsXG4gIC8qKiBUaGUgZmlsZSBsb2FkZWQgaXMgbm90IGltYWdlLiAqL1xuICBUeXBlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckV2ZW50IHtcbiAgLyoqIENyb3BwZWQgaW1hZ2UgZGF0YSBVUkwgKi9cbiAgZGF0YVVSTD86IHN0cmluZztcbiAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIEZpbGV0eXBlICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiBPcmlnaW5hbCBJbWFnZSBkYXRhIFVSTCAqL1xuICBvcmlnaW5hbERhdGFVUkw/OiBzdHJpbmc7XG4gIHNjYWxlPzogbnVtYmVyO1xuICAvKiogQ3VycmVudCByb3RhdGlvbiBpbiBkZWdyZWVzICovXG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuICAvKiogU2l6ZSBvZiB0aGUgaW1hZ2UgaW4gYnl0ZXMgKi9cbiAgc2l6ZT86IG51bWJlcjtcbiAgcG9zaXRpb24/OiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckVycm9yRXZlbnQgZXh0ZW5kcyBJbWdDcm9wcGVyRXZlbnQge1xuICAvKiogVHlwZSBvZiBlcnJvciAqL1xuICBlcnJvcjogSW1nQ3JvcHBlckVycm9yO1xufVxuXG5jb25zdCBDT05GSUdfREVGQVVMVCA9IDxJbWdDcm9wcGVyQ29uZmlnPntcbiAgd2lkdGg6IDI1MCxcbiAgaGVpZ2h0OiAyMDAsXG4gIG91dHB1dDogSW1nUmVzb2x1dGlvbi5EZWZhdWx0LFxuICBhbnRpQWxpYXNlZDogdHJ1ZVxufTtcblxuaW50ZXJmYWNlIEltZ1JlY3Qge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgeGM6IG51bWJlcjtcbiAgeWM6IG51bWJlcjtcbiAgLyoqIHRyYW5zZm9ybSB3aXRoICovXG4gIHd0OiBudW1iZXI7XG4gIGh0OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbHktaW1nLWNyb3BwZXIsIGx5LWNyb3BwaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICdyZXNpemluZy1jcm9wcGluZy1pbWFnZXMuaHRtbCdcbiB9KVxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBfb3JpZ2luYWxJbWdCYXNlNjQ/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKiBPcmlnaW5hbCBpbWFnZSAqL1xuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHByaXZhdGUgb2Zmc2V0Pzoge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIGxlZnQ6IG51bWJlclxuICAgIHRvcDogbnVtYmVyXG4gIH07XG4gIHByaXZhdGUgX3NjYWxlPzogbnVtYmVyO1xuICBwcml2YXRlIF9zY2FsM0ZpeD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluU2NhbGU/OiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbmZpZzogSW1nQ3JvcHBlckNvbmZpZztcbiAgcHJpdmF0ZSBfaW1nUmVjdDogSW1nUmVjdCA9IHt9IGFzIGFueTtcbiAgcHJpdmF0ZSBfcm90YXRpb246IG51bWJlcjtcbiAgcHJpdmF0ZSBfbGlzdGVuZXJzID0gbmV3IFNldDxTdWJzY3JpcHRpb24+KCk7XG4gIHByaXZhdGUgX3NpemVJbkJ5dGVzOiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGVuIGlzIGxvYWRlZCBpbWFnZVxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9pc0xvYWRlZEltZzogYm9vbGVhbjtcblxuICAvKiogV2hlbiBpcyBsb2FkZWQgaW1hZ2UgJiByZWFkeSBmb3IgY3JvcCAqL1xuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgaXNDcm9wcGVkOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInKSBfaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfY3JvcHBpbmdDb250YWluZXInKSBfY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19pbWdDYW52YXMnKSBfaW1nQ2FudmFzOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcbiAgQElucHV0KClcbiAgZ2V0IGNvbmZpZygpOiBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gbWVyZ2VEZWVwKHt9LCBDT05GSUdfREVGQVVMVCwgdmFsKTtcbiAgICBjb25zdCBtYXhGaWxlU2l6ZSA9IHRoaXMuX2NvbmZpZy5tYXhGaWxlU2l6ZTtcbiAgICBpZiAobWF4RmlsZVNpemUpIHtcbiAgICAgIHRoaXMubWF4RmlsZVNpemUgPSBtYXhGaWxlU2l6ZTtcbiAgICB9XG4gIH1cbiAgLyoqIFNldCBzY2FsZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gIH1cbiAgc2V0IHNjYWxlKHZhbDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRTY2FsZSh2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXQgZXZlbnQgYGVycm9yYCBpZiB0aGUgZmlsZSBzaXplIGZvciB0aGUgbGltaXQuXG4gICAqIE5vdGU6IEl0IG9ubHkgd29ya3Mgd2hlbiB0aGUgaW1hZ2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgYDxpbnB1dD5gIGV2ZW50LlxuICAgKi9cbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IG51bWJlcjtcblxuICAvKiogR2V0IG1pbiBzY2FsZSAqL1xuICBnZXQgbWluU2NhbGUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2NhbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgLyoqIE9uIGxvYWRlZCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogT24gY3JvcCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNyb3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIEVtaXQgYW4gZXJyb3Igd2hlbiB0aGUgbG9hZGVkIGltYWdlIGlzIG5vdCB2YWxpZCAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFcnJvckV2ZW50PigpO1xuXG4gIHByaXZhdGUgX2RlZmF1bHRUeXBlPzogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgY29uc3QgeyBpbWdDcm9wcGVyIH0gPSB0aGlzLnRoZW1lLnZhcmlhYmxlcztcbiAgICBpZiAoaW1nQ3JvcHBlcikge1xuICAgICAgaWYgKGltZ0Nyb3BwZXIucm9vdCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICB0aGlzLnRoZW1lLnN0eWxlKGltZ0Nyb3BwZXIucm9vdCwgU1RZTEVfUFJJT1JJVFksIFNUWUxFUykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKGxpc3RlbiA9PiBsaXN0ZW4udW5zdWJzY3JpYmUoKSk7XG4gICAgdGhpcy5fbGlzdGVuZXJzLmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIF9pbWdMb2FkZWQoaW1nRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCkge1xuICAgIGlmIChpbWdFbGVtZW50KSB7XG4gICAgICB0aGlzLl9pbWcgPSBpbWdFbGVtZW50O1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjYW52YXMud2lkdGggPSBpbWdFbGVtZW50LndpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGltZ0VsZW1lbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWdFbGVtZW50LCAwLCAwKTtcbiAgICAgIC8qKiBzZXQgbWluIHNjYWxlICovXG4gICAgICB0aGlzLl9taW5TY2FsZSA9IGdldE1pblNjYWxlKHRoaXMuY29uZmlnLndpZHRoLCB0aGlzLmNvbmZpZy5oZWlnaHQsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U3R5bGVzRm9yQ29udEltZyh2YWx1ZXM6IHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuICB9KSB7XG4gICAgY29uc3QgbmV3U3R5bGVzID0geyB9IGFzIGFueTtcbiAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgaWYgKHZhbHVlcy54ICE9PSB2b2lkIDAgJiYgdmFsdWVzLnkgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3QgeCA9IHJvb3RSZWN0LndpZHRoIC8gMiAtICh2YWx1ZXMueCk7XG4gICAgICBjb25zdCB5ID0gcm9vdFJlY3QuaGVpZ2h0IC8gMiAtICh2YWx1ZXMueSk7XG5cbiAgICAgIHRoaXMuX2ltZ1JlY3QueCA9ICh2YWx1ZXMueCk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnkgPSAodmFsdWVzLnkpO1xuICAgICAgdGhpcy5faW1nUmVjdC54YyA9ICh4KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueWMgPSAoeSk7XG4gICAgfVxuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHsodGhpcy5faW1nUmVjdC54KX1weCwkeyh0aGlzLl9pbWdSZWN0LnkpfXB4LCAwKWA7XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybSArPSBgc2NhbGUoJHt0aGlzLl9zY2FsM0ZpeH0pYDtcbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtT3JpZ2luID0gYCR7dGhpcy5faW1nUmVjdC54Y31weCAke3RoaXMuX2ltZ1JlY3QueWN9cHggMGA7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3U3R5bGVzKSB7XG4gICAgICBpZiAobmV3U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIGtleSwgbmV3U3R5bGVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKSBfcmVzaXplJCgpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKF9pbWcuZmlsZXMgJiYgX2ltZy5maWxlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmlsZVNpemUgPSBfaW1nLmZpbGVzIVswXS5zaXplO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gX2ltZy52YWx1ZS5yZXBsYWNlKC8uKihcXC98XFxcXCkvLCAnJyk7XG5cbiAgICBpZiAodGhpcy5tYXhGaWxlU2l6ZSAmJiBmaWxlU2l6ZSA+IHRoaXMubWF4RmlsZVNpemUpIHtcbiAgICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckVycm9yRXZlbnQgPSB7XG4gICAgICAgIG5hbWU6IGZpbGVOYW1lLFxuICAgICAgICB0eXBlOiBfaW1nLmZpbGVzIVswXS50eXBlLFxuICAgICAgICBzaXplOiBmaWxlU2l6ZSxcbiAgICAgICAgZXJyb3I6IEltZ0Nyb3BwZXJFcnJvci5TaXplXG4gICAgICB9O1xuICAgICAgdGhpcy5jbGVhbigpO1xuICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCBhcyBJbWdDcm9wcGVyRXJyb3JFdmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZVJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICBjb25zdCBsaXN0ZW5lciA9IGZyb21FdmVudChmaWxlUmVhZGVyLCAnbG9hZCcpXG4gICAgLnBpcGUodGFrZSgxKSlcbiAgICAuc3Vic2NyaWJlKGxvYWRFdmVudCA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEltYWdlVXJsID0gKGxvYWRFdmVudC50YXJnZXQgYXMgRmlsZVJlYWRlcikucmVzdWx0IGFzIHN0cmluZztcbiAgICAgIC8vIFNldCB0eXBlXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLnR5cGUpIHtcbiAgICAgICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzIVswXS50eXBlO1xuICAgICAgfVxuICAgICAgLy8gc2V0IG5hbWVcbiAgICAgIHRoaXMuX2ZpbGVOYW1lID0gZmlsZU5hbWU7XG4gICAgICAvLyBzZXQgZmlsZSBzaXplXG4gICAgICB0aGlzLl9zaXplSW5CeXRlcyA9IF9pbWcuZmlsZXMhWzBdLnNpemU7XG5cbiAgICAgIHRoaXMuc2V0SW1hZ2VVcmwob3JpZ2luYWxJbWFnZVVybCk7XG5cbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2xpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuXG4gICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKF9pbWcuZmlsZXMhWzBdKTtcbiAgfVxuXG4gIC8qKiBTZXQgdGhlIHNpemUgb2YgdGhlIGltYWdlLCB0aGUgdmFsdWVzIGNhbiBiZSAwIGJldHdlZW4gMSwgd2hlcmUgMSBpcyB0aGUgb3JpZ2luYWwgc2l6ZSAqL1xuICBzZXRTY2FsZShzaXplPzogbnVtYmVyLCBub0F1dG9Dcm9wPzogYm9vbGVhbikge1xuICAgIC8vIGZpeCBtaW4gc2NhbGVcbiAgICBjb25zdCBuZXdTaXplID0gc2l6ZSEgPj0gdGhpcy5taW5TY2FsZSEgJiYgc2l6ZSEgPD0gMSA/IHNpemUgOiB0aGlzLm1pblNjYWxlO1xuXG4gICAgLy8gY2hlY2tcbiAgICBjb25zdCBjaGFuZ2VkID0gc2l6ZSAhPSBudWxsICYmIHNpemUgIT09IHRoaXMuc2NhbGUgJiYgbmV3U2l6ZSAhPT0gdGhpcy5zY2FsZTtcbiAgICB0aGlzLl9zY2FsZSA9IHNpemU7XG4gICAgaWYgKCFjaGFuZ2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NjYWwzRml4ID0gbmV3U2l6ZTtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luUG9zaXRpb24gPSB7Li4udGhpcy5faW1nUmVjdH07XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICAgIHg6IG9yaWdpblBvc2l0aW9uLngsXG4gICAgICAgICAgeTogb3JpZ2luUG9zaXRpb24ueSxcbiAgICAgICAgICBsZWZ0OiBvcmlnaW5Qb3NpdGlvbi54YyxcbiAgICAgICAgICB0b3A6IG9yaWdpblBvc2l0aW9uLnljXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe30pO1xuICAgICAgICB0aGlzLl9tb3ZlKHtcbiAgICAgICAgICBzcmNFdmVudDoge30sXG4gICAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICAgIGRlbHRhWTogMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubWluU2NhbGUpIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICAuLi50aGlzLl9nZXRDZW50ZXJQb2ludHMoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlQ2hhbmdlLmVtaXQoc2l6ZSk7XG4gICAgaWYgKCFub0F1dG9Dcm9wKSB7XG4gICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2VudGVyUG9pbnRzKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBpbWcgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB4ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSAoaW1nLndpZHRoKSkgLyAyO1xuICAgIGNvbnN0IHkgPSAocm9vdC5vZmZzZXRIZWlnaHQgLSAoaW1nLmhlaWdodCkpIC8gMjtcbiAgICByZXR1cm4ge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFqdXN0YXIgYSBsYSBwYW50YWxsYVxuICAgKi9cbiAgZml0VG9TY3JlZW4oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgbWluID0ge1xuICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyLm9mZnNldEhlaWdodFxuICAgIH07XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9pbWc7XG4gICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gd2lkdGgsXG4gICAgICBoZWlnaHQ6IG1pbi5oZWlnaHQgLyBoZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpO1xuICAgIHRoaXMuc2V0U2NhbGUocmVzdWx0KTtcbiAgfVxuXG4gIGZpdCgpIHtcbiAgICB0aGlzLnNldFNjYWxlKHRoaXMubWluU2NhbGUpO1xuICB9XG5cbiAgX21vdmVTdGFydCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgIHg6IHRoaXMuX2ltZ1JlY3QueCxcbiAgICAgIHk6IHRoaXMuX2ltZ1JlY3QueSxcbiAgICAgIGxlZnQ6IHRoaXMuX2ltZ1JlY3QueGMsXG4gICAgICB0b3A6IHRoaXMuX2ltZ1JlY3QueWNcbiAgICB9O1xuICB9XG4gIF9tb3ZlKGV2ZW50OiB7IHNyY0V2ZW50Pzoge307IGRlbHRhWDogYW55OyBkZWx0YVk6IGFueTsgfSkge1xuICAgIGxldCB4OiBudW1iZXIgfCB1bmRlZmluZWQsIHk6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWwzRml4O1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IHN0YXJ0UCA9IHRoaXMub2Zmc2V0O1xuICAgIGlmICghc2NhbGVGaXggfHwgIXN0YXJ0UCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBMaW1pdCBmb3IgbGVmdFxuICAgIGlmICgoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSA+PSBzdGFydFAubGVmdCAtIChldmVudC5kZWx0YVggLyBzY2FsZUZpeCkpIHtcbiAgICAgIHggPSBzdGFydFAueCArIChzdGFydFAubGVmdCkgLSAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KTtcbiAgICB9XG5cbiAgICAvLyAvLyBMaW1pdCBmb3IgdG9wXG4gICAgaWYgKChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KSA+PSAoc3RhcnRQLnRvcCAtIChldmVudC5kZWx0YVkgLyBzY2FsZUZpeCkpKSB7XG4gICAgICB5ID0gc3RhcnRQLnkgKyAoc3RhcnRQLnRvcCkgLSAoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgfVxuXG4gICAgLy8gLy8gTGltaXQgZm9yIHJpZ2h0XG4gICAgaWYgKChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpICsgKGNhbnZhcy53aWR0aCkgLSAoc3RhcnRQLmxlZnQgLSAoZXZlbnQuZGVsdGFYIC8gc2NhbGVGaXgpKSA8PSBjb25maWcud2lkdGggLyBzY2FsZUZpeCkge1xuICAgICAgeCA9IHN0YXJ0UC54ICsgKHN0YXJ0UC5sZWZ0KSArIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpIC0gY2FudmFzLndpZHRoO1xuICAgIH1cblxuICAgIC8vIC8vIExpbWl0IGZvciBib3R0b21cbiAgICBpZiAoKChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KSArIChjYW52YXMuaGVpZ2h0KSAtIChzdGFydFAudG9wIC0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSkpIDw9IChjb25maWcuaGVpZ2h0IC8gc2NhbGVGaXgpKSB7XG4gICAgICB5ID0gc3RhcnRQLnkgKyAoc3RhcnRQLnRvcCkgKyAoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCkgLSBjYW52YXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIFdoZW4gcHJlc3Mgc2hpZnRLZXksIGRlcHJlY2F0ZWRcbiAgICAvLyBpZiAoZXZlbnQuc3JjRXZlbnQgJiYgZXZlbnQuc3JjRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAvLyAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVgpID09PSBNYXRoLm1heChNYXRoLmFicyhldmVudC5kZWx0YVgpLCBNYXRoLmFicyhldmVudC5kZWx0YVkpKSkge1xuICAgIC8vICAgICB5ID0gdGhpcy5vZmZzZXQudG9wO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgeCA9IHRoaXMub2Zmc2V0LmxlZnQ7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSArIChzdGFydFAueCk7IH1cbiAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpICsgKHN0YXJ0UC55KTsgfVxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICBjb25zdCBjcm9wcGluZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9hcmVhQ3JvcHBlclJlY3QoKTtcbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkICYmIHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgeCA9IHRoaXMuX2ltZ1JlY3QueGM7XG4gICAgICB5ID0gdGhpcy5faW1nUmVjdC55YztcbiAgICB9XG4gICAgeCA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0LngpIC0gKHghIC0gKHRoaXMuY29uZmlnLndpZHRoIC8gMikpO1xuICAgIHkgPSAoY3JvcHBpbmdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55KSAtICh5ISAtICh0aGlzLmNvbmZpZy5oZWlnaHQgLyAyKSk7XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICBfc2xpZGVFbmQoKSB7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nyb3BJZkF1dG9Dcm9wKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvQ3JvcCkge1xuICAgICAgdGhpcy5jcm9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqKyAqL1xuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCEgKyAuMDU7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYW4gdGhlIGltZyBjcm9wcGVyICovXG4gIGNsZWFuKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLl9pbWdSZWN0ID0geyB9IGFzIGFueTtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zY2FsZSA9IHVuZGVmaW5lZCBhcyBhbnk7XG4gICAgICB0aGlzLl9zY2FsM0ZpeCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JvdGF0aW9uID0gMDtcbiAgICAgIHRoaXMuX21pblNjYWxlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5faXNMb2FkZWRJbWcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNDcm9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgY2FudmFzLndpZHRoID0gMDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSAwO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiotICovXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCEgLSAuMDU7XG4gICAgaWYgKHNjYWxlID4gdGhpcy5taW5TY2FsZSEgJiYgc2NhbGUgPD0gMSkge1xuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZml0KCk7XG4gICAgfVxuICB9XG4gIGNlbnRlcigpIHtcbiAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICAuLi50aGlzLl9nZXRDZW50ZXJQb2ludHMoKVxuICAgIH07XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyhuZXdTdHlsZXMpO1xuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuLyoqXG4gKiBMb2FkIEltYWdlIGZyb20gVVJMXG4gKiBAcGFyYW0gc3JjIFVSTFxuICogQHBhcmFtIGZuIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGVtaXQgdGhlIGV2ZW50IGxvYWRlZFxuICovXG4gIHNldEltYWdlVXJsKHNyYzogc3RyaW5nLCBmbj86ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmNsZWFuKCk7XG4gICAgdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQgPSBzcmM7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xuXG4gICAgY29uc3QgZmlsZVNpemUgPSB0aGlzLl9zaXplSW5CeXRlcztcbiAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuX2ZpbGVOYW1lO1xuICAgIGNvbnN0IGRlZmF1bHRUeXBlID0gdGhpcy5fZGVmYXVsdFR5cGU7XG5cbiAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICBjb25zdCBjcm9wRXZlbnQ6IEltZ0Nyb3BwZXJFdmVudCA9IHtcbiAgICAgIG5hbWU6IGZpbGVOYW1lLFxuICAgICAgdHlwZTogZGVmYXVsdFR5cGUsXG4gICAgICBvcmlnaW5hbERhdGFVUkw6IHNyY1xuICAgIH07XG5cbiAgICBpbWcuc3JjID0gc3JjO1xuXG4gICAgaWYgKGZpbGVTaXplKSB7XG4gICAgICBjcm9wRXZlbnQuc2l6ZSA9IGZpbGVTaXplO1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWRMaXN0ZW4gPSBmcm9tRXZlbnQoaW1nLCAnbG9hZCcpXG4gICAgLnBpcGUoXG4gICAgICB0YWtlKDEpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5faW1nTG9hZGVkKGltZyk7XG4gICAgICBjcm9wRXZlbnQud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICBjcm9wRXZlbnQuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgIHRoaXMuX2lzTG9hZGVkSW1nID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9uZ1pvbmVcbiAgICAgICAgICAub25TdGFibGVcbiAgICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTY2FsZSh0aGlzLm1pblNjYWxlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9KSk7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuZGVsZXRlKGxvYWRMaXN0ZW4pO1xuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fbGlzdGVuZXJzLmFkZChsb2FkTGlzdGVuKTtcblxuICAgIGNvbnN0IGVycm9yTGlzdGVuID0gZnJvbUV2ZW50KGltZywgJ2Vycm9yJykucGlwZShcbiAgICAgIHRha2UoMSlcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAoY3JvcEV2ZW50IGFzIEltZ0Nyb3BwZXJFcnJvckV2ZW50KS5lcnJvciA9IEltZ0Nyb3BwZXJFcnJvci5UeXBlO1xuICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCBhcyBJbWdDcm9wcGVyRXJyb3JFdmVudCk7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMuZGVsZXRlKGVycm9yTGlzdGVuKTtcbiAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2xpc3RlbmVycy5hZGQoZXJyb3JMaXN0ZW4pO1xuXG4gICAgLy8gY2xlYXJcbiAgICB0aGlzLl9zaXplSW5CeXRlcyA9IG51bGw7XG4gICAgdGhpcy5fZmlsZU5hbWUgPSBudWxsO1xuICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcm90YXRlKGRlZ3JlZXM6IG51bWJlcikge1xuICAgIGNvbnN0IHZhbGlkRGVncmVlcyA9IHRoaXMuX3JvdGF0aW9uID0gY29udmVydFRvVmFsaWREZWdyZWVzKGRlZ3JlZXMpO1xuICAgIGNvbnN0IGRlZ3JlZXNSYWQgPSB2YWxpZERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNhbnZhc0Nsb24gPSBjcmVhdGVDYW52YXNJbWcoY2FudmFzKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICAvLyBjbGVhclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzQ2xvbi53aWR0aCwgY2FudmFzQ2xvbi5oZWlnaHQpO1xuXG4gICAgLy8gcm90YXRlIGNhbnZhcyBpbWFnZVxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybScsIGByb3RhdGUoJHt2YWxpZERlZ3JlZXN9ZGVnKSBzY2FsZSgkezEgLyB0aGlzLl9zY2FsM0ZpeCF9KWApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybU9yaWdpbicsIGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgKTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuXG4gICAgLy8gc2F2ZSByZWN0XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIHJlbW92ZSByb3RhdGUgc3R5bGVzXG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtT3JpZ2luJyk7XG5cbiAgICAvLyBzZXQgdyAmIGhcbiAgICBjb25zdCB3ID0gY2FudmFzUmVjdC53aWR0aDtcbiAgICBjb25zdCBoID0gY2FudmFzUmVjdC5oZWlnaHQ7XG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IHc7XG4gICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgLy8gY2xlYXJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuXG4gICAgLy8gdHJhbnNsYXRlIGFuZCByb3RhdGVcbiAgICBjdHgudHJhbnNsYXRlKHcgLyAyLCBoIC8gMik7XG4gICAgY3R4LnJvdGF0ZShkZWdyZWVzUmFkKTtcbiAgICBjdHguZHJhd0ltYWdlKGNhbnZhc0Nsb24sIC1jYW52YXNDbG9uLndpZHRoIC8gMiwgLWNhbnZhc0Nsb24uaGVpZ2h0IC8gMik7XG5cbiAgICAvLyBVcGRhdGUgbWluIHNjYWxlXG4gICAgdGhpcy5fbWluU2NhbGUgPSBnZXRNaW5TY2FsZSh0aGlzLmNvbmZpZy53aWR0aCwgdGhpcy5jb25maWcuaGVpZ2h0LCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gc2V0IHRoZSBtaW5pbXVtIHNjYWxlLCBvbmx5IGlmIG5lY2Vzc2FyeVxuICAgIGlmICh0aGlzLnNjYWxlISA8IHRoaXMubWluU2NhbGUhKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKDAsIHRydWUpO1xuICAgIH0gLy8gICAgICAgICAgICAgICAg4oaRIG5vIEF1dG9Dcm9wXG5cbiAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4OiAoeCAtIHJvb3RSZWN0LngpLFxuICAgICAgeTogKHkgLSByb290UmVjdC55KVxuICAgIH0pO1xuXG4gICAgLy8ga2VlcCBpbWFnZSBpbnNpZGUgdGhlIGZyYW1lXG4gICAgY29uc3Qgb3JpZ2luUG9zaXRpb24gPSB7Li4udGhpcy5faW1nUmVjdH07XG4gICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICB4OiBvcmlnaW5Qb3NpdGlvbi54LFxuICAgICAgeTogb3JpZ2luUG9zaXRpb24ueSxcbiAgICAgIGxlZnQ6IG9yaWdpblBvc2l0aW9uLnhjLFxuICAgICAgdG9wOiBvcmlnaW5Qb3NpdGlvbi55Y1xuICAgIH07XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7fSk7XG4gICAgdGhpcy5fbW92ZSh7XG4gICAgICBzcmNFdmVudDoge30sXG4gICAgICBkZWx0YVg6IDAsXG4gICAgICBkZWx0YVk6IDBcbiAgICB9KTtcblxuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIGltYWdlU21vb3RoaW5nUXVhbGl0eShpbWc6IEhUTUxDYW52YXNFbGVtZW50LCBjb25maWcsIHF1YWxpdHk6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICAvKiogQ2FsY3VsYXRlIHRvdGFsIG51bWJlciBvZiBzdGVwcyBuZWVkZWQgKi9cbiAgICBsZXQgIG51bVN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKE1hdGgubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCkgLyBNYXRoLm1heChjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpKSAvIE1hdGgubG9nKDIpKSAtIDE7XG4gICAgbnVtU3RlcHMgPSBudW1TdGVwcyA8PSAwID8gMCA6IG51bVN0ZXBzO1xuXG4gICAgLyoqQXJyYXkgc3RlcHMgKi9cbiAgICBjb25zdCBzdGVwcyA9IEFycmF5LmZyb20oQXJyYXkobnVtU3RlcHMpLmtleXMoKSk7XG5cbiAgICAvKiogQ29udGV4dCAqL1xuICAgIGNvbnN0IG9jdHggPSBpbWcuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICBjb25zdCBxID0gKChxdWFsaXR5ICogMTApICoqIG51bVN0ZXBzKSAvICgxMCAqKiBudW1TdGVwcyk7XG4gICAgY29uc3QgZmlsZVR5cGUgPSB0aGlzLl9kZWZhdWx0VHlwZTtcbiAgICAvKiogSWYgU3RlcHMgPT4gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ICovXG4gICAgaWYgKG51bVN0ZXBzKSB7XG4gICAgICAvKiogU2V0IHNpemUgKi9cbiAgICAgIGNvbnN0IHcgPSBpbWcud2lkdGggKiBxdWFsaXR5O1xuICAgICAgY29uc3QgaCA9IGltZy5oZWlnaHQgKiBxdWFsaXR5O1xuICAgICAgLyoqIE9ubHkgdGhlIG5ldyBpbWcgaXMgc2hvd24uICovXG4gICAgICBpZiAoZmlsZVR5cGUgPT09ICdpbWFnZS9wbmcnIHx8IGZpbGVUeXBlID09PSAnaW1hZ2Uvc3ZnK3htbCcpIHtcbiAgICAgICAgb2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XG4gICAgICB9XG5cbiAgICAgIC8qKiBTdGVwcyAqL1xuICAgICAgKHN0ZXBzIGFzIEFycmF5PG51bWJlcj4pLmZvckVhY2goKCkgPT4ge1xuICAgICAgICBvY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAgICAgMCwgMCxcbiAgICAgICAgICB3LCBoXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGVwIGZpbmFsXG4gICAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgICAqL1xuICAgIGNvbnN0IG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXG4gICAgY3R4ID0gb2MuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgb2Mud2lkdGggPSBjb25maWcud2lkdGg7XG4gICAgb2MuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcbiAgICBjdHguZHJhd0ltYWdlKGltZyxcbiAgICAgIDAsIDAsXG4gICAgICBpbWcud2lkdGggKiBxLCBpbWcuaGVpZ2h0ICogcSxcbiAgICAgIDAsIDAsXG4gICAgICBvYy53aWR0aCwgb2MuaGVpZ2h0XG4gICAgKTtcbiAgICByZXR1cm4gb2M7XG4gIH1cblxuICAvKipcbiAgICogQ3JvcCBJbWFnZVxuICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAqL1xuICBjcm9wKGNvbmZpZz86IEltZ0Nyb3BwZXJDb25maWcpOiBJbWdDcm9wcGVyRXZlbnQge1xuICAgIGNvbnN0IG5ld0NvbmZpZyA9IGNvbmZpZyA/IG1lcmdlRGVlcCh7fSwgdGhpcy5jb25maWcgfHwgQ09ORklHX0RFRkFVTFQsIGNvbmZpZykgOiB0aGlzLmNvbmZpZztcbiAgICBjb25zdCBjcm9wRXZlbnQgPSB0aGlzLl9pbWdDcm9wKG5ld0NvbmZpZyk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2ltZ0Nyb3AobXlDb25maWc6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGltZ1JlY3QgPSB0aGlzLl9pbWdSZWN0ITtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWwzRml4ITtcbiAgICBjb25zdCBsZWZ0ID0gaW1nUmVjdC54YyAtIChteUNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCk7XG4gICAgY29uc3QgdG9wID0gaW1nUmVjdC55YyAtIChteUNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XG4gICAgfTtcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gc2NhbGVGaXg7XG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gc2NhbGVGaXg7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpITtcbiAgICBpZiAobXlDb25maWcuZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG15Q29uZmlnLmZpbGw7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xuICAgIH1cbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50IGFzIGFueSxcbiAgICAgIC0obGVmdCksIC0odG9wKSxcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGFudGlBbGlhc2VkUSA9IG15Q29uZmlnLmFudGlBbGlhc2VkID8gLjUgOiAxO1xuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCBhbnRpQWxpYXNlZFEpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCBhbnRpQWxpYXNlZFEpO1xuICAgIH1cbiAgICBsZXQgdXJsO1xuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGAke215Q29uZmlnLnR5cGV9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5fZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgICBjb25zdCBjcm9wRXZlbnQ6IEltZ0Nyb3BwZXJFdmVudCA9IHtcbiAgICAgIGRhdGFVUkw6IHVybCxcbiAgICAgIHR5cGU6IHRoaXMuX2RlZmF1bHRUeXBlIHx8IG15Q29uZmlnLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHQsXG4gICAgICBvcmlnaW5hbERhdGFVUkw6IHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0LFxuICAgICAgc2NhbGU6IHRoaXMuX3NjYWwzRml4LFxuICAgICAgcm90YXRpb246IHRoaXMuX3JvdGF0aW9uLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogdGhpcy5faW1nUmVjdC54YyxcbiAgICAgICAgeTogdGhpcy5faW1nUmVjdC55Y1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfcm9vdFJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cblxuICBwcml2YXRlIF9hcmVhQ3JvcHBlclJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2Nyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgfVxuXG59XG5cbi8qKlxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDQ1KSA9PT0gOTBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyg0MCkgPT09IDBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcygxMDApID09PSA5MFxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMobnVtOiBudW1iZXIpIHtcbiAgY29uc3QgdmFsMzYwID0gbGltaXROdW0obnVtLCAzNjApO1xuICBjb25zdCB2YWw5MCA9IGxpbWl0TnVtKHZhbDM2MC5yZXN1bHQsIDkwKTtcbiAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbihudW0pO1xuICBpZiAodmFsOTAucmVzdWx0ID49ICg5MCAvIDIpKSB7XG4gICAgcmV0dXJuIDkwICogKHZhbDkwLnBhcnRzICsgMSkgKiBzaWduO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA5MCAqIHZhbDkwLnBhcnRzICogc2lnbjtcbiAgfVxufVxuXG4vKipcbiAqIGRlbW86XG4gKiBsaW1pdE51bSg0NTAsIDM2MCkgPT09IDkwXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxpbWl0TnVtKG51bTogbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcbiAgY29uc3QgbnVtQWJzID0gTWF0aC5hYnMobnVtKTtcbiAgY29uc3QgcGFydHMgPSBNYXRoLmZsb29yKG51bUFicyAvIG51bTIpO1xuICBsZXQgcmVzdWx0OiBudW1iZXI7XG4gIGlmIChwYXJ0cykge1xuICAgIHJlc3VsdCA9IG51bUFicyAtIChudW0yICogcGFydHMpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IG51bTtcbiAgfVxuICBpZiAobnVtQWJzICE9PSBudW0pIHtcbiAgICByZXN1bHQgKj0gLTE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXN1bHQsXG4gICAgcGFydHNcbiAgfTtcbn1cblxuLyoqXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhbnZhc0ltZyhpbWc6IEhUTUxDYW52YXNFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudCkge1xuXG4gIC8vIGNyZWF0ZSBhIG5ldyBjYW52YXNcbiAgY29uc3QgbmV3Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgLy8gc2V0IGRpbWVuc2lvbnNcbiAgbmV3Q2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICBuZXdDYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcblxuICAvLyBhcHBseSB0aGUgb2xkIGNhbnZhcyB0byB0aGUgbmV3IG9uZVxuICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuXG4gIC8vIHJldHVybiB0aGUgbmV3IGNhbnZhc1xuICByZXR1cm4gbmV3Q2FudmFzO1xufVxuXG4vKipcbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0TWluU2NhbGUobXc6IG51bWJlciwgbWg6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG13IC8gdywgbWggLyBoKTtcbn1cbiJdfQ==