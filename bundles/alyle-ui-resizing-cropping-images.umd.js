(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('rxjs/operators'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/resizing-cropping-images', ['exports', '@angular/core', '@alyle/ui', 'rxjs/operators', '@angular/platform-browser', '@angular/common'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.resizingCroppingImages = {}),global.ng.core,global.ly.core,global.rxjs.operators,global.ng.platformBrowser,global.ng.common));
}(this, (function (exports,core,ui,operators,platformBrowser,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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
            '&:before, &:after': __assign({}, ui.LY_COMMON_STYLES.fill, { content: "''" }),
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
            '&, & > input': ui.LY_COMMON_STYLES.fill,
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
    var CONFIG_DEFAULT = ( /** @type {?} */({
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
            this._imgRect = ( /** @type {?} */({}));
            this.scaleChange = new core.EventEmitter();
            /**
             * On loaded new image
             */
            this.loaded = new core.EventEmitter();
            /**
             * On crop new image
             */
            this.cropped = new core.EventEmitter();
            /**
             * Emit an error when the loaded image is not valid
             */
            this.error = new core.EventEmitter();
            this._renderer.addClass(elementRef.nativeElement, this.classes.root);
        }
        Object.defineProperty(LyResizingCroppingImages.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._config = ui.mergeDeep({}, CONFIG_DEFAULT, val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyResizingCroppingImages.prototype, "scale", {
            /** Set scale */
            get: /**
             * Set scale
             * @return {?}
             */ function () {
                return this._scale;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
             */ function () {
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
                var newStyles = ( /** @type {?} */({}));
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
                var _img = ( /** @type {?} */(img.target));
                if (_img.files.length !== 1) {
                    return;
                }
                /** @type {?} */
                var fileReader = new FileReader();
                this._fileName = _img.value.replace(/.*(\/|\\)/, '');
                fileReader.addEventListener('loadend', function (loadEvent) {
                    /** @type {?} */
                    var originalImageUrl = ( /** @type {?} */((( /** @type {?} */(loadEvent.target))).result));
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
                var root = ( /** @type {?} */(this.elementRef.nativeElement));
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
                var container = ( /** @type {?} */(this.elementRef.nativeElement));
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
                    this._imgRect = ( /** @type {?} */({}));
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
                        .pipe(operators.take(1))
                        .subscribe(function () {
                        return _this._ngZone.run(function () {
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
                        });
                    });
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
                var _a = ( /** @type {?} */(canvas.getBoundingClientRect())), x = _a.x, y = _a.y;
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
                    (( /** @type {?} */(steps))).forEach(function () {
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
                var newConfig = config ? ui.mergeDeep({}, this.config || CONFIG_DEFAULT, config) : this.config;
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
                ctx.drawImage(( /** @type {?} */(this._imgCanvas.nativeElement)), -(left), -(top));
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
                return ( /** @type {?} */(this.elementRef.nativeElement.getBoundingClientRect()));
            };
        /**
         * @return {?}
         */
        LyResizingCroppingImages.prototype._areaCropperRect = /**
         * @return {?}
         */
            function () {
                return ( /** @type {?} */(this._croppingContainer.nativeElement.getBoundingClientRect()));
            };
        LyResizingCroppingImages.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        selector: 'ly-img-cropper, ly-cropping',
                        template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart()\"\n(slide)=\"_move($event)\"\n(slideend)=\"_slideEnd()\">\n  <canvas #_imgCanvas></canvas>\n</div>\n<div #_croppingContainer *ngIf=\"_isLoadedImg; else content\" [className]=\"classes.croppingContainer\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.croppContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        LyResizingCroppingImages.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: ui.LyTheme2 },
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: core.NgZone }
            ];
        };
        LyResizingCroppingImages.propDecorators = {
            _imgContainer: [{ type: core.ViewChild, args: ['_imgContainer',] }],
            _croppingContainer: [{ type: core.ViewChild, args: ['_croppingContainer',] }],
            _imgCanvas: [{ type: core.ViewChild, args: ['_imgCanvas',] }],
            scaleChange: [{ type: core.Output }],
            config: [{ type: core.Input }],
            scale: [{ type: core.Input }],
            loaded: [{ type: core.Output }],
            cropped: [{ type: core.Output }],
            error: [{ type: core.Output }],
            resize$: [{ type: core.HostListener, args: ['window:resize',] }]
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [LyResizingCroppingImages],
                        providers: [
                            { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: ui.LyHammerGestureConfig }
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

    exports.ImgResolution = ImgResolution;
    exports.LyResizingCroppingImages = LyResizingCroppingImages;
    exports.LyResizingCroppingImageModule = LyResizingCroppingImageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BhbHlsZS91aS9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgbWVyZ2VEZWVwLCBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBpbWdDb250YWluZXI6IHtcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAnJiA+IGNhbnZhcyc6IHtcbiAgICAgIC8vIHdpZHRoOiAnMTAwJScsXG4gICAgICAvLyBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9XG4gIH0sXG4gIGNyb3BwaW5nQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJzAgMCAwIDIwMDAwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBjb250ZW50OiBgJydgLFxuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH1cbiAgfSxcbiAgY3JvcHBDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAnJiwgJiA+IGlucHV0JzogTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICcmICo6bm90KGlucHV0KSc6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgJyYgPiBpbnB1dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9XG59KTtcbi8qKiBJbWFnZSBDcm9wcGVyIENvbmZpZyAqL1xuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgLyoqIENyb3BwZXIgYXJlYSB3aWR0aCovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKiBDcm9wcGVyIGFyZWEgaGVpZ2h0Ki9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBJZiB0aGlzIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmV3IGltYWdlIHdpbGwgYmUgYXV0b21hdGljYWxseSBkZWZpbmVkICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcgKi9cbiAgZmlsbD86IHN0cmluZyB8IG51bGw7XG4gIC8qKiBTZXQgYW50aS1hbGlhc2VkKCBkZWZhdWx0OiB0cnVlKSAqL1xuICBhbnRpQWxpYXNlZD86IGJvb2xlYW47XG4gIGF1dG9Dcm9wPzogYm9vbGVhbjtcbiAgb3V0cHV0PzogSW1nT3V0cHV0IHwgSW1nUmVzb2x1dGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbWdPdXRwdXQge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBEZXByZWNhdGVkLCB1c2UgaW5zdGVhZCBJbWdDcm9wcGVyQ29uZmlnXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgdHlwZSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcgPSBJbWdDcm9wcGVyQ29uZmlnO1xuXG4vKiogSW1hZ2Ugb3V0cHV0ICovXG5leHBvcnQgZW51bSBJbWdSZXNvbHV0aW9uIHtcbiAgLyoqIFJlc2l6aW5nICYgY3JvcHBpbmcgKi9cbiAgRGVmYXVsdCxcbiAgLyoqIE9ubHkgY3JvcHBpbmcgKi9cbiAgT3JpZ2luYWxJbWFnZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJFdmVudCB7XG4gIC8qKiBDcm9wcGVkIGltYWdlIGluIGJhc2U2NCwgIWRlcHJlY2F0ZWQgdXNlIGluc3RlYWQgYGRhdGFVUkxgICovXG4gIGJhc2U2NDogc3RyaW5nO1xuICAvKiogQ3JvcHBlZCBpbWFnZSBkYXRhIFVSTCAqL1xuICBkYXRhVVJMOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIEZpbGV0eXBlICovXG4gIHR5cGU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBPcmlnaW5hbCBJbWFnZSBkYXRhIFVSTCAqL1xuICBvcmlnaW5hbERhdGFVUkw6IHN0cmluZztcbiAgc2NhbGU6IG51bWJlcjtcbiAgLyoqIEN1cnJlbnQgcm90YXRpb24gaW4gZGVncmVlcyAqL1xuICByb3RhdGlvbjogbnVtYmVyO1xuICBwb3NpdGlvbjoge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICB9O1xufVxuXG5jb25zdCBDT05GSUdfREVGQVVMVCA9IDxJbWdDcm9wcGVyQ29uZmlnPntcbiAgd2lkdGg6IDI1MCxcbiAgaGVpZ2h0OiAyMDAsXG4gIG91dHB1dDogSW1nUmVzb2x1dGlvbi5EZWZhdWx0LFxuICBhbnRpQWxpYXNlZDogdHJ1ZVxufTtcblxuaW50ZXJmYWNlIEltZ1JlY3Qge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgeGM6IG51bWJlcjtcbiAgeWM6IG51bWJlcjtcbiAgLy8gdzogbnVtYmVyO1xuICAvLyBoOiBudW1iZXI7XG4gIC8qKiB0cmFuc2Zvcm0gd2l0aCAqL1xuICB3dDogbnVtYmVyO1xuICBodDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ2x5LWltZy1jcm9wcGVyLCBseS1jcm9wcGluZycsXG4gIHRlbXBsYXRlVXJsOiAncmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmh0bWwnXG4gfSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIF9vcmlnaW5hbEltZ0Jhc2U2NDogc3RyaW5nO1xuICBwcml2YXRlIF9maWxlTmFtZTogc3RyaW5nO1xuXG4gIC8qKiBPcmlnaW5hbCBpbWFnZSAqL1xuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHByaXZhdGUgb2Zmc2V0OiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgbGVmdDogbnVtYmVyXG4gICAgdG9wOiBudW1iZXJcbiAgfTtcbiAgcHJpdmF0ZSBfc2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfc2NhbDNGaXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluU2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnO1xuICBwcml2YXRlIF9pbWdSZWN0OiBJbWdSZWN0ID0ge30gYXMgYW55O1xuICBwcml2YXRlIF9yb3RhdGlvbjogbnVtYmVyO1xuXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInKSBfaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfY3JvcHBpbmdDb250YWluZXInKSBfY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19pbWdDYW52YXMnKSBfaW1nQ2FudmFzOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNjYWxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbmZpZygpOiBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gbWVyZ2VEZWVwKHt9LCBDT05GSUdfREVGQVVMVCwgdmFsKTtcbiAgfVxuICAvKiogU2V0IHNjYWxlICovXG4gIEBJbnB1dCgpXG4gIGdldCBzY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY2FsZTtcbiAgfVxuICBzZXQgc2NhbGUodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFNjYWxlKHZhbCk7XG4gIH1cblxuICAvKiogR2V0IG1pbiBzY2FsZSAqL1xuICBnZXQgbWluU2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gIH1cblxuICAvKiogV2hlbiBpcyBsb2FkZWQgaW1hZ2UgKi9cbiAgX2lzTG9hZGVkSW1nOiBib29sZWFuO1xuXG4gIC8qKiBXaGVuIGlzIGxvYWRlZCBpbWFnZSAmIHJlYWR5IGZvciBjcm9wICovXG4gIGlzTG9hZGVkOiBib29sZWFuO1xuICBpc0Nyb3BwZWQ6IGJvb2xlYW47XG5cbiAgLyoqIE9uIGxvYWRlZCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogT24gY3JvcCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNyb3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIEVtaXQgYW4gZXJyb3Igd2hlbiB0aGUgbG9hZGVkIGltYWdlIGlzIG5vdCB2YWxpZCAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcblxuICBwcml2YXRlIF9kZWZhdWx0VHlwZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBwcml2YXRlIF9pbWdMb2FkZWQoaW1nRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCkge1xuICAgIGlmIChpbWdFbGVtZW50KSB7XG4gICAgICB0aGlzLl9pbWcgPSBpbWdFbGVtZW50O1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjYW52YXMud2lkdGggPSBpbWdFbGVtZW50LndpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGltZ0VsZW1lbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBjdHguZHJhd0ltYWdlKGltZ0VsZW1lbnQsIDAsIDApO1xuICAgICAgLyoqIHNldCB6b29tIHNjYWxlICovXG4gICAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCAvIGNhbnZhcy5oZWlnaHRcbiAgICAgIH07XG4gICAgICB0aGlzLl9taW5TY2FsZSA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFN0eWxlc0ZvckNvbnRJbWcodmFsdWVzOiB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcbiAgfSkge1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHsgfSBhcyBhbnk7XG4gICAgY29uc3Qgcm9vdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgIGlmICh2YWx1ZXMueCAhPT0gdm9pZCAwICYmIHZhbHVlcy55ICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IHggPSByb290UmVjdC53aWR0aCAvIDIgLSAodmFsdWVzLngpO1xuICAgICAgY29uc3QgeSA9IHJvb3RSZWN0LmhlaWdodCAvIDIgLSAodmFsdWVzLnkpO1xuXG4gICAgICB0aGlzLl9pbWdSZWN0LnggPSAodmFsdWVzLngpO1xuICAgICAgdGhpcy5faW1nUmVjdC55ID0gKHZhbHVlcy55KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueGMgPSAoeCk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnljID0gKHkpO1xuICAgIH1cbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7KHRoaXMuX2ltZ1JlY3QueCl9cHgsJHsodGhpcy5faW1nUmVjdC55KX1weCwgMClgO1xuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm0gKz0gYHNjYWxlKCR7dGhpcy5fc2NhbDNGaXh9KWA7XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybU9yaWdpbiA9IGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1N0eWxlcykge1xuICAgICAgaWYgKG5ld1N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCBrZXksIG5ld1N0eWxlc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJykgcmVzaXplJCgpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKF9pbWcuZmlsZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgdGhpcy5fZmlsZU5hbWUgPSBfaW1nLnZhbHVlLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKTtcblxuICAgIGZpbGVSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChsb2FkRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgdGhpcy5zZXRJbWFnZVVybChvcmlnaW5hbEltYWdlVXJsKTtcbiAgICAgIC8qKiBTZXQgdHlwZSAqL1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gX2ltZy5maWxlc1swXS50eXBlO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlc1swXSk7XG4gIH1cblxuICAvKiogU2V0IHRoZSBzaXplIG9mIHRoZSBpbWFnZSwgdGhlIHZhbHVlcyBjYW4gYmUgMCBiZXR3ZWVuIDEsIHdoZXJlIDEgaXMgdGhlIG9yaWdpbmFsIHNpemUgKi9cbiAgc2V0U2NhbGUoc2l6ZTogbnVtYmVyLCBub0F1dG9Dcm9wPzogYm9vbGVhbikge1xuICAgIC8vIGZpeCBtaW4gc2NhbGVcbiAgICBjb25zdCBuZXdTaXplID0gc2l6ZSA+PSB0aGlzLm1pblNjYWxlICYmIHNpemUgPD0gMSA/IHNpemUgOiB0aGlzLm1pblNjYWxlO1xuXG4gICAgLy8gY2hlY2tcbiAgICBjb25zdCBjaGFuZ2VkID0gc2l6ZSAhPSBudWxsICYmIHNpemUgIT09IHRoaXMuc2NhbGUgJiYgbmV3U2l6ZSAhPT0gdGhpcy5zY2FsZTtcbiAgICB0aGlzLl9zY2FsZSA9IHNpemU7XG4gICAgaWYgKCFjaGFuZ2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NjYWwzRml4ID0gbmV3U2l6ZTtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luUG9zaXRpb24gPSB7Li4udGhpcy5faW1nUmVjdH07XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICAgIHg6IG9yaWdpblBvc2l0aW9uLngsXG4gICAgICAgICAgeTogb3JpZ2luUG9zaXRpb24ueSxcbiAgICAgICAgICBsZWZ0OiBvcmlnaW5Qb3NpdGlvbi54YyxcbiAgICAgICAgICB0b3A6IG9yaWdpblBvc2l0aW9uLnljXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe30pO1xuICAgICAgICB0aGlzLl9tb3ZlKHtcbiAgICAgICAgICBzcmNFdmVudDoge30sXG4gICAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICAgIGRlbHRhWTogMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubWluU2NhbGUpIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICAuLi50aGlzLl9nZXRDZW50ZXJQb2ludHMoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlQ2hhbmdlLmVtaXQoc2l6ZSk7XG4gICAgaWYgKCFub0F1dG9Dcm9wKSB7XG4gICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q2VudGVyUG9pbnRzKCkge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBpbWcgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB4ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSAoaW1nLndpZHRoKSkgLyAyO1xuICAgIGNvbnN0IHkgPSAocm9vdC5vZmZzZXRIZWlnaHQgLSAoaW1nLmhlaWdodCkpIC8gMjtcbiAgICByZXR1cm4ge1xuICAgICAgeCxcbiAgICAgIHlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFqdXN0YXIgYSBsYSBwYW50YWxsYVxuICAgKi9cbiAgZml0VG9TY3JlZW4oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgbWluID0ge1xuICAgICAgd2lkdGg6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogY29udGFpbmVyLm9mZnNldEhlaWdodFxuICAgIH07XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLl9pbWc7XG4gICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICB3aWR0aDogbWluLndpZHRoIC8gd2lkdGgsXG4gICAgICBoZWlnaHQ6IG1pbi5oZWlnaHQgLyBoZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpO1xuICAgIHRoaXMuc2V0U2NhbGUocmVzdWx0KTtcbiAgfVxuXG4gIGZpdCgpIHtcbiAgICB0aGlzLnNldFNjYWxlKHRoaXMubWluU2NhbGUpO1xuICB9XG5cbiAgX21vdmVTdGFydCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgIHg6IHRoaXMuX2ltZ1JlY3QueCxcbiAgICAgIHk6IHRoaXMuX2ltZ1JlY3QueSxcbiAgICAgIGxlZnQ6IHRoaXMuX2ltZ1JlY3QueGMsXG4gICAgICB0b3A6IHRoaXMuX2ltZ1JlY3QueWNcbiAgICB9O1xuICB9XG4gIF9tb3ZlKGV2ZW50OiB7IHNyY0V2ZW50Pzoge307IGRlbHRhWDogYW55OyBkZWx0YVk6IGFueTsgfSkge1xuICAgIGxldCB4OiBudW1iZXIsIHk6IG51bWJlcjtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWwzRml4O1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IHN0YXJ0UCA9IHRoaXMub2Zmc2V0O1xuICAgIC8vIExpbWl0IGZvciBsZWZ0XG4gICAgaWYgKChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpID49IHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSkge1xuICAgICAgeCA9IHN0YXJ0UC54ICsgKHN0YXJ0UC5sZWZ0KSAtIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIH1cblxuICAgIC8vIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpID49IChzdGFydFAudG9wIC0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSkpIHtcbiAgICAgIHkgPSBzdGFydFAueSArIChzdGFydFAudG9wKSAtIChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KTtcbiAgICB9XG5cbiAgICAvLyAvLyBMaW1pdCBmb3IgcmlnaHRcbiAgICBpZiAoKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCkgKyAoY2FudmFzLndpZHRoKSAtIChzdGFydFAubGVmdCAtIChldmVudC5kZWx0YVggLyBzY2FsZUZpeCkpIDw9IGNvbmZpZy53aWR0aCAvIHNjYWxlRml4KSB7XG4gICAgICB4ID0gc3RhcnRQLnggKyAoc3RhcnRQLmxlZnQpICsgKGNvbmZpZy53aWR0aCAvIDIgLyBzY2FsZUZpeCkgLSBjYW52YXMud2lkdGg7XG4gICAgfVxuXG4gICAgLy8gLy8gTGltaXQgZm9yIGJvdHRvbVxuICAgIGlmICgoKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpICsgKGNhbnZhcy5oZWlnaHQpIC0gKHN0YXJ0UC50b3AgLSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpKSkgPD0gKGNvbmZpZy5oZWlnaHQgLyBzY2FsZUZpeCkpIHtcbiAgICAgIHkgPSBzdGFydFAueSArIChzdGFydFAudG9wKSArIChjb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KSAtIGNhbnZhcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gV2hlbiBwcmVzcyBzaGlmdEtleSwgZGVwcmVjYXRlZFxuICAgIC8vIGlmIChldmVudC5zcmNFdmVudCAmJiBldmVudC5zcmNFdmVudC5zaGlmdEtleSkge1xuICAgIC8vICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPT09IE1hdGgubWF4KE1hdGguYWJzKGV2ZW50LmRlbHRhWCksIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkpKSB7XG4gICAgLy8gICAgIHkgPSB0aGlzLm9mZnNldC50b3A7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB4ID0gdGhpcy5vZmZzZXQubGVmdDtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAoZXZlbnQuZGVsdGFYIC8gc2NhbGVGaXgpICsgKHRoaXMub2Zmc2V0LngpOyB9XG4gICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSArICh0aGlzLm9mZnNldC55KTsgfVxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcbiAgICBjb25zdCBjcm9wcGluZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9hcmVhQ3JvcHBlclJlY3QoKTtcbiAgICBpZiAoeCA9PT0gdm9pZCAwICYmIHkgPT09IHZvaWQgMCkge1xuICAgICAgeCA9IHRoaXMuX2ltZ1JlY3QueGM7XG4gICAgICB5ID0gdGhpcy5faW1nUmVjdC55YztcbiAgICB9XG4gICAgeCA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0LngpIC0gKHggLSAodGhpcy5jb25maWcud2lkdGggLyAyKSk7XG4gICAgeSA9IChjcm9wcGluZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0LnkpIC0gKHkgLSAodGhpcy5jb25maWcuaGVpZ2h0IC8gMikpO1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgX3NsaWRlRW5kKCkge1xuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIF9jcm9wSWZBdXRvQ3JvcCgpIHtcbiAgICBpZiAodGhpcy5jb25maWcuYXV0b0Nyb3ApIHtcbiAgICAgIHRoaXMuY3JvcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKisgKi9cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5fc2NhbDNGaXggKyAuMDU7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYW4gdGhlIGltZyBjcm9wcGVyICovXG4gIGNsZWFuKCkge1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLl9pbWdSZWN0ID0geyB9IGFzIGFueTtcbiAgICAgIHRoaXMub2Zmc2V0ID0gbnVsbDtcbiAgICAgIHRoaXMuc2NhbGUgPSBudWxsO1xuICAgICAgdGhpcy5fc2NhbDNGaXggPSBudWxsO1xuICAgICAgdGhpcy5fcm90YXRpb24gPSAwO1xuICAgICAgdGhpcy5fbWluU2NhbGUgPSBudWxsO1xuICAgICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBudWxsO1xuICAgICAgdGhpcy5faXNMb2FkZWRJbWcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmlzTG9hZGVkID0gbnVsbDtcbiAgICAgIHRoaXMuaXNDcm9wcGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQgPSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICAgIGNhbnZhcy53aWR0aCA9IDA7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqLSAqL1xuICB6b29tT3V0KCkge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5fc2NhbDNGaXggLSAuMDU7XG4gICAgaWYgKHNjYWxlID4gdGhpcy5taW5TY2FsZSAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXQoKTtcbiAgICB9XG4gIH1cbiAgY2VudGVyKCkge1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgIC4uLnRoaXMuX2dldENlbnRlclBvaW50cygpXG4gICAgfTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKG5ld1N0eWxlcyk7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4vKipcbiAqIExvYWQgSW1hZ2UgZnJvbSBVUkxcbiAqIEBwYXJhbSBzcmMgVVJMXG4gKiBAcGFyYW0gZm4gZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgZW1pdCB0aGUgZXZlbnQgbG9hZGVkXG4gKi9cbiAgc2V0SW1hZ2VVcmwoc3JjOiBzdHJpbmcsIGZuPzogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMuY2xlYW4oKTtcbiAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IHNyYztcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2U7XG4gICAgaW1nLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgY29uc3QgY3JvcEV2ZW50OiBJbWdDcm9wcGVyRXZlbnQgPSB7XG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHR5cGU6IHRoaXMuX2RlZmF1bHRUeXBlLFxuICAgICAgZGF0YVVSTDogbnVsbCxcbiAgICAgIGJhc2U2NDogbnVsbCxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgc2NhbGU6IG51bGwsXG4gICAgICBvcmlnaW5hbERhdGFVUkw6IHNyYyxcbiAgICAgIHJvdGF0aW9uOiBudWxsLFxuICAgICAgcG9zaXRpb246IG51bGxcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCk7XG4gICAgfSk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbWdMb2FkZWQoaW1nKTtcbiAgICAgIGNyb3BFdmVudC53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgIGNyb3BFdmVudC5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgdGhpcy5faXNMb2FkZWRJbWcgPSB0cnVlO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuX25nWm9uZVxuICAgICAgICAgIC5vblN0YWJsZVxuICAgICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUodGhpcy5taW5TY2FsZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcm90YXRlKGRlZ3JlZXM6IG51bWJlcikge1xuICAgIGNvbnN0IHZhbGlkRGVncmVlcyA9IHRoaXMuX3JvdGF0aW9uID0gY29udmVydFRvVmFsaWREZWdyZWVzKGRlZ3JlZXMpO1xuICAgIGNvbnN0IGRlZ3JlZXNSYWQgPSB2YWxpZERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNhbnZhc0Nsb24gPSBjcmVhdGVDYW52YXNJbWcoY2FudmFzKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNDbG9uLndpZHRoLCBjYW52YXNDbG9uLmhlaWdodCk7XG5cbiAgICAvLyByb3RhdGUgY2FudmFzIGltYWdlXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoY2FudmFzLCAndHJhbnNmb3JtJywgYHJvdGF0ZSgke3ZhbGlkRGVncmVlc31kZWcpIHNjYWxlKCR7MSAvIHRoaXMuX3NjYWwzRml4fSlgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjYW52YXMsICd0cmFuc2Zvcm1PcmlnaW4nLCBgJHt0aGlzLl9pbWdSZWN0LnhjfXB4ICR7dGhpcy5faW1nUmVjdC55Y31weCAwYCk7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcblxuICAgIC8vIHNhdmUgcmVjdFxuICAgIGNvbnN0IGNhbnZhc1JlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyByZW1vdmUgcm90YXRlIHN0eWxlc1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybScpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybU9yaWdpbicpO1xuXG4gICAgLy8gc2V0IHcgJiBoXG5cbiAgICBjb25zdCB3ID0gY2FudmFzUmVjdC53aWR0aDtcbiAgICBjb25zdCBoID0gY2FudmFzUmVjdC5oZWlnaHQ7XG5cbiAgICBjdHguY2FudmFzLndpZHRoID0gdztcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICAvLyBjbGVhclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG5cbiAgICAvLyB0cmFuc2xhdGUgYW5kIHJvdGF0ZVxuICAgIGN0eC50cmFuc2xhdGUodyAvIDIsIGggLyAyKTtcbiAgICBjdHgucm90YXRlKGRlZ3JlZXNSYWQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoY2FudmFzQ2xvbiwgLWNhbnZhc0Nsb24ud2lkdGggLyAyLCAtY2FudmFzQ2xvbi5oZWlnaHQgLyAyKTtcbiAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG5cbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgIHg6ICh4IC0gcm9vdFJlY3QueCksXG4gICAgICB5OiAoeSAtIHJvb3RSZWN0LnkpXG4gICAgfSk7XG5cbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbWFnZVNtb290aGluZ1F1YWxpdHkoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCwgY29uZmlnLCBxdWFsaXR5OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgLyoqIENhbGN1bGF0ZSB0b3RhbCBudW1iZXIgb2Ygc3RlcHMgbmVlZGVkICovXG4gICAgbGV0ICBudW1TdGVwcyA9IE1hdGguY2VpbChNYXRoLmxvZyhNYXRoLm1heChpbWcud2lkdGgsIGltZy5oZWlnaHQpIC8gTWF0aC5tYXgoY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KSkgLyBNYXRoLmxvZygyKSkgLSAxO1xuICAgIG51bVN0ZXBzID0gbnVtU3RlcHMgPD0gMCA/IDAgOiBudW1TdGVwcztcblxuICAgIC8qKkFycmF5IHN0ZXBzICovXG4gICAgY29uc3Qgc3RlcHMgPSBBcnJheS5mcm9tKEFycmF5KG51bVN0ZXBzKS5rZXlzKCkpO1xuXG4gICAgLyoqIENvbnRleHQgKi9cbiAgICBjb25zdCBvY3R4ID0gaW1nLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBxID0gKChxdWFsaXR5ICogMTApICoqIG51bVN0ZXBzKSAvICgxMCAqKiBudW1TdGVwcyk7XG4gICAgY29uc3QgZmlsZVR5cGUgPSB0aGlzLl9kZWZhdWx0VHlwZTtcbiAgICAvKiogSWYgU3RlcHMgPT4gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ICovXG4gICAgaWYgKG51bVN0ZXBzKSB7XG4gICAgICAvKiogU2V0IHNpemUgKi9cbiAgICAgIGNvbnN0IHcgPSBpbWcud2lkdGggKiBxdWFsaXR5O1xuICAgICAgY29uc3QgaCA9IGltZy5oZWlnaHQgKiBxdWFsaXR5O1xuICAgICAgLyoqIE9ubHkgdGhlIG5ldyBpbWcgaXMgc2hvd24uICovXG4gICAgICBpZiAoZmlsZVR5cGUgPT09ICdpbWFnZS9wbmcnIHx8IGZpbGVUeXBlID09PSAnaW1hZ2Uvc3ZnK3htbCcpIHtcbiAgICAgICAgb2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XG4gICAgICB9XG5cbiAgICAgIC8qKiBTdGVwcyAqL1xuICAgICAgKHN0ZXBzIGFzIEFycmF5PG51bWJlcj4pLmZvckVhY2goKCkgPT4ge1xuICAgICAgICBvY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAgICAgMCwgMCxcbiAgICAgICAgICB3LCBoXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGVwIGZpbmFsXG4gICAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgICAqL1xuICAgIGNvbnN0IG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXG4gICAgY3R4ID0gb2MuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBvYy53aWR0aCA9IGNvbmZpZy53aWR0aDtcbiAgICBvYy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0O1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLFxuICAgICAgMCwgMCxcbiAgICAgIGltZy53aWR0aCAqIHEsIGltZy5oZWlnaHQgKiBxLFxuICAgICAgMCwgMCxcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcbiAgICApO1xuICAgIHJldHVybiBvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIEltYWdlXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICovXG4gIGNyb3AoY29uZmlnPzogSW1nQ3JvcHBlckNvbmZpZyk6IEltZ0Nyb3BwZXJFdmVudCB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnID8gbWVyZ2VEZWVwKHt9LCB0aGlzLmNvbmZpZyB8fCBDT05GSUdfREVGQVVMVCwgY29uZmlnKSA6IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHRoaXMuX2ltZ0Nyb3AobmV3Q29uZmlnKTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2ltZ0Nyb3AobXlDb25maWc6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGltZ1JlY3QgPSB0aGlzLl9pbWdSZWN0O1xuICAgIGNvbnN0IHNjYWxlRml4ID0gdGhpcy5fc2NhbDNGaXg7XG4gICAgY29uc3QgbGVmdCA9IGltZ1JlY3QueGMgLSAobXlDb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIGNvbnN0IHRvcCA9IGltZ1JlY3QueWMgLSAobXlDb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICB3aWR0aDogbXlDb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IG15Q29uZmlnLmhlaWdodFxuICAgIH07XG4gICAgY2FudmFzRWxlbWVudC53aWR0aCA9IGNvbmZpZy53aWR0aCAvIHNjYWxlRml4O1xuICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCAvIHNjYWxlRml4O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAobXlDb25maWcuZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG15Q29uZmlnLmZpbGw7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xuICAgIH1cbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50IGFzIGFueSxcbiAgICAgIC0obGVmdCksIC0odG9wKSxcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGFudGlBbGlhc2VkUSA9IG15Q29uZmlnLmFudGlBbGlhc2VkID8gLjUgOiAxO1xuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCBhbnRpQWxpYXNlZFEpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCBhbnRpQWxpYXNlZFEpO1xuICAgIH1cbiAgICBsZXQgdXJsO1xuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGAke215Q29uZmlnLnR5cGV9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5fZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgICBjb25zdCBjcm9wRXZlbnQgPSB7XG4gICAgICBkYXRhVVJMOiB1cmwsXG4gICAgICBiYXNlNjQ6IHVybCxcbiAgICAgIHR5cGU6IHRoaXMuX2RlZmF1bHRUeXBlIHx8IG15Q29uZmlnLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHQsXG4gICAgICBvcmlnaW5hbERhdGFVUkw6IHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0LFxuICAgICAgc2NhbGU6IHRoaXMuX3NjYWwzRml4LFxuICAgICAgcm90YXRpb246IHRoaXMuX3JvdGF0aW9uLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgeDogdGhpcy5faW1nUmVjdC54YyxcbiAgICAgICAgeTogdGhpcy5faW1nUmVjdC55Y1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pc0Nyb3BwZWQgPSB0cnVlO1xuICAgIHRoaXMuY3JvcHBlZC5lbWl0KGNyb3BFdmVudCk7XG4gICAgcmV0dXJuIGNyb3BFdmVudDtcbiAgfVxuXG4gIHByaXZhdGUgX3Jvb3RSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfYXJlYUNyb3BwZXJSZWN0KCk6IERPTVJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9jcm9wcGluZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cblxufVxuXG4vKipcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyg0NSkgPT09IDkwXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoNDApID09PSAwXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoMTAwKSA9PT0gOTBcbiAqIEBpZ25vcmVcbiAqL1xuZnVuY3Rpb24gY29udmVydFRvVmFsaWREZWdyZWVzKG51bTogbnVtYmVyKSB7XG4gIGNvbnN0IHZhbDM2MCA9IGxpbWl0TnVtKG51bSwgMzYwKTtcbiAgY29uc3QgdmFsOTAgPSBsaW1pdE51bSh2YWwzNjAucmVzdWx0LCA5MCk7XG4gIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24obnVtKTtcbiAgaWYgKHZhbDkwLnJlc3VsdCA+PSAoOTAgLyAyKSkge1xuICAgIHJldHVybiA5MCAqICh2YWw5MC5wYXJ0cyArIDEpICogc2lnbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gOTAgKiB2YWw5MC5wYXJ0cyAqIHNpZ247XG4gIH1cbn1cblxuLyoqXG4gKiBkZW1vOlxuICogbGltaXROdW0oNDUwLCAzNjApID09PSA5MFxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBsaW1pdE51bShudW06IG51bWJlciwgbnVtMjogbnVtYmVyKSB7XG4gIGNvbnN0IG51bUFicyA9IE1hdGguYWJzKG51bSk7XG4gIGNvbnN0IHBhcnRzID0gTWF0aC5mbG9vcihudW1BYnMgLyBudW0yKTtcbiAgbGV0IHJlc3VsdDogbnVtYmVyO1xuICBpZiAocGFydHMpIHtcbiAgICByZXN1bHQgPSBudW1BYnMgLSAobnVtMiAqIHBhcnRzKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBudW07XG4gIH1cbiAgaWYgKG51bUFicyAhPT0gbnVtKSB7XG4gICAgcmVzdWx0ICo9IC0xO1xuICB9XG4gIHJldHVybiB7XG4gICAgcmVzdWx0LFxuICAgIHBhcnRzXG4gIH07XG59XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBjcmVhdGVDYW52YXNJbWcoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQpIHtcblxuICAvLyBjcmVhdGUgYSBuZXcgY2FudmFzXG4gIGNvbnN0IG5ld0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjb25zdCBjb250ZXh0ID0gbmV3Q2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgLy8gc2V0IGRpbWVuc2lvbnNcbiAgbmV3Q2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICBuZXdDYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcblxuICAvLyBhcHBseSB0aGUgb2xkIGNhbnZhcyB0byB0aGUgbmV3IG9uZVxuICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuXG4gIC8vIHJldHVybiB0aGUgbmV3IGNhbnZhc1xuICByZXR1cm4gbmV3Q2FudmFzO1xufVxuIiwiaW1wb3J0IHsgSEFNTUVSX0dFU1RVUkVfQ09ORklHIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFseWxlL3VpJztcblxuaW1wb3J0IHsgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIH0gZnJvbSAnLi9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5UmVzaXppbmdDcm9wcGluZ0ltYWdlc10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLCB1c2VDbGFzczogTHlIYW1tZXJHZXN0dXJlQ29uZmlnIH1cbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkxZX0NPTU1PTl9TVFlMRVMiLCJFdmVudEVtaXR0ZXIiLCJtZXJnZURlZXAiLCJ0YWtlIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJSZW5kZXJlcjIiLCJMeVRoZW1lMiIsIkVsZW1lbnRSZWYiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIk5nWm9uZSIsIlZpZXdDaGlsZCIsIk91dHB1dCIsIklucHV0IiwiSG9zdExpc3RlbmVyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJIQU1NRVJfR0VTVFVSRV9DT05GSUciLCJMeUhhbW1lckdlc3R1cmVDb25maWciXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxRQUFRLEdBQUc7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRjtZQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ1osQ0FBQTtR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QUFDLENBQUM7aUJBQzlEOztnQkFHRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxNQUFNLE1BQU0sQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFO29CQUM5RSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7aUJBQzlEOztnQkFHRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsRUFBRTtvQkFDekgsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQzdFOztnQkFHRCxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxRQUFRLEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEVBQUU7b0JBQy9ILENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2lCQUM5RTs7Ozs7Ozs7O2dCQVdELElBQUksQ0FBQyxLQUFLLEtB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