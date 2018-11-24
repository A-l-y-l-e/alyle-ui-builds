(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('rxjs/operators'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/resizing-cropping-images', ['exports', '@angular/core', '@alyle/ui', 'rxjs/operators', '@angular/platform-browser', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui['resizing-cropping-images'] = {}),global.ng.core,global.alyle.ui,global.rxjs.operators,global.ng.platformBrowser,global.ng.common));
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
                /** Set type */
                if (!this.config.type) {
                    this._defaultType = _img.files[0].type;
                }
                fileReader.addEventListener('loadend', function (loadEvent) {
                    /** @type {?} */
                    var originalImageUrl = ( /** @type {?} */((( /** @type {?} */(loadEvent.target))).result));
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
                this._imgRect = ( /** @type {?} */({}));
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
                        .pipe(operators.take(1))
                        .subscribe(function () {
                        return _this._ngZone.run(function () {
                            _this.isLoaded = false;
                            _this.setScale(0, true);
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
                    if (this._defaultType === 'image/png' || fileType === 'image/svg+xml') {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BhbHlsZS91aS9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgbWVyZ2VEZWVwLCBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBpbWdDb250YWluZXI6IHtcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAnJiA+IGNhbnZhcyc6IHtcbiAgICAgIC8vIHdpZHRoOiAnMTAwJScsXG4gICAgICAvLyBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9XG4gIH0sXG4gIGNyb3BwaW5nQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJzAgMCAwIDIwMDAwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBjb250ZW50OiBgJydgLFxuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH1cbiAgfSxcbiAgY3JvcHBDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAnJiwgJiA+IGlucHV0JzogTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICcmICo6bm90KGlucHV0KSc6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgJyYgPiBpbnB1dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9XG59KTtcbi8qKiBJbWFnZSBDcm9wcGVyIENvbmZpZyAqL1xuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgLyoqIENyb3BwZXIgYXJlYSB3aWR0aCovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKiBDcm9wcGVyIGFyZWEgaGVpZ2h0Ki9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBJZiB0aGlzIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmV3IGltYWdlIHdpbGwgYmUgYXV0b21hdGljYWxseSBkZWZpbmVkICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcgKi9cbiAgZmlsbD86IHN0cmluZyB8IG51bGw7XG4gIC8qKiBTZXQgYW50aS1hbGlhc2VkKCBkZWZhdWx0OiB0cnVlKSAqL1xuICBhbnRpQWxpYXNlZD86IGJvb2xlYW47XG4gIGF1dG9Dcm9wPzogYm9vbGVhbjtcbiAgb3V0cHV0Pzoge1xuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlnaHQ6IG51bWJlclxuICB9IHwgSW1nUmVzb2x1dGlvbjtcbn1cblxuLyoqXG4gKiBEZXByZWNhdGVkLCB1c2UgaW5zdGVhZCBJbWdDcm9wcGVyQ29uZmlnXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgdHlwZSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcgPSBJbWdDcm9wcGVyQ29uZmlnO1xuXG4vKiogSW1hZ2Ugb3V0cHV0ICovXG5leHBvcnQgZW51bSBJbWdSZXNvbHV0aW9uIHtcbiAgLyoqIFJlc2l6aW5nICYgY3JvcHBpbmcgKi9cbiAgRGVmYXVsdCxcbiAgLyoqIE9ubHkgY3JvcHBpbmcgKi9cbiAgT3JpZ2luYWxJbWFnZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJFdmVudCB7XG4gIC8qKiBDcm9wcGVkIGltYWdlIGluIGJhc2U2NCwgIWRlcHJlY2F0ZWQgdXNlIGluc3RlYWQgYGRhdGFVUkxgICovXG4gIGJhc2U2NDogc3RyaW5nO1xuICAvKiogQ3JvcHBlZCBpbWFnZSBkYXRhIFVSTCAqL1xuICBkYXRhVVJMOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIEZpbGV0eXBlICovXG4gIHR5cGU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBPcmlnaW5hbCBJbWFnZSBkYXRhIFVSTCAqL1xuICBvcmlnaW5hbERhdGFVUkw6IHN0cmluZztcbiAgc2NhbGU6IG51bWJlcjtcbiAgLyoqIEN1cnJlbnQgcm90YXRpb24gaW4gZGVncmVlcyAqL1xuICByb3RhdGlvbjogbnVtYmVyO1xuICBwb3NpdGlvbjoge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICB9O1xufVxuXG5jb25zdCBDT05GSUdfREVGQVVMVCA9IDxJbWdDcm9wcGVyQ29uZmlnPntcbiAgd2lkdGg6IDI1MCxcbiAgaGVpZ2h0OiAyMDAsXG4gIG91dHB1dDogSW1nUmVzb2x1dGlvbi5EZWZhdWx0LFxuICBhbnRpQWxpYXNlZDogdHJ1ZVxufTtcblxuaW50ZXJmYWNlIEltZ1JlY3Qge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgeGM6IG51bWJlcjtcbiAgeWM6IG51bWJlcjtcbiAgLy8gdzogbnVtYmVyO1xuICAvLyBoOiBudW1iZXI7XG4gIC8qKiB0cmFuc2Zvcm0gd2l0aCAqL1xuICB3dDogbnVtYmVyO1xuICBodDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ2x5LWltZy1jcm9wcGVyLCBseS1jcm9wcGluZycsXG4gIHRlbXBsYXRlVXJsOiAncmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLmh0bWwnXG4gfSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIF9vcmlnaW5hbEltZ0Jhc2U2NDogc3RyaW5nO1xuICBwcml2YXRlIF9maWxlTmFtZTogc3RyaW5nO1xuXG4gIC8qKiBPcmlnaW5hbCBpbWFnZSAqL1xuICBwcml2YXRlIF9pbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIHByaXZhdGUgb2Zmc2V0OiB7XG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgbGVmdDogbnVtYmVyXG4gICAgdG9wOiBudW1iZXJcbiAgfTtcbiAgcHJpdmF0ZSBfc2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfc2NhbDNGaXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluU2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnO1xuICBwcml2YXRlIF9pbWdSZWN0OiBJbWdSZWN0ID0ge30gYXMgYW55O1xuICBwcml2YXRlIF9yb3RhdGlvbjogbnVtYmVyO1xuXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInKSBfaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfY3JvcHBpbmdDb250YWluZXInKSBfY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19pbWdDYW52YXMnKSBfaW1nQ2FudmFzOiBFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50PjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNjYWxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbmZpZygpOiBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIHNldCBjb25maWcodmFsOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gbWVyZ2VEZWVwKHt9LCBDT05GSUdfREVGQVVMVCwgdmFsKTtcbiAgfVxuICAvKiogU2V0IHNjYWxlICovXG4gIEBJbnB1dCgpXG4gIGdldCBzY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY2FsZTtcbiAgfVxuICBzZXQgc2NhbGUodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFNjYWxlKHZhbCk7XG4gIH1cblxuICAvKiogR2V0IG1pbiBzY2FsZSAqL1xuICBnZXQgbWluU2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gIH1cblxuICAvKiogV2hlbiBpcyBsb2FkZWQgaW1hZ2UgKi9cbiAgX2lzTG9hZGVkSW1nOiBib29sZWFuO1xuXG4gIC8qKiBXaGVuIGlzIGxvYWRlZCBpbWFnZSAmIHJlYWR5IGZvciBjcm9wICovXG4gIGlzTG9hZGVkOiBib29sZWFuO1xuICBpc0Nyb3BwZWQ6IGJvb2xlYW47XG5cbiAgLyoqIE9uIGxvYWRlZCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogT24gY3JvcCBuZXcgaW1hZ2UgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNyb3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIEVtaXQgYW4gZXJyb3Igd2hlbiB0aGUgbG9hZGVkIGltYWdlIGlzIG5vdCB2YWxpZCAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcblxuICBwcml2YXRlIF9kZWZhdWx0VHlwZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBwcml2YXRlIF9pbWdMb2FkZWQoaW1nRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCkge1xuICAgIGlmIChpbWdFbGVtZW50KSB7XG4gICAgICB0aGlzLl9pbWcgPSBpbWdFbGVtZW50O1xuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjYW52YXMud2lkdGggPSBpbWdFbGVtZW50LndpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGltZ0VsZW1lbnQuaGVpZ2h0O1xuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBjdHguZHJhd0ltYWdlKGltZ0VsZW1lbnQsIDAsIDApO1xuICAgICAgLyoqIHNldCB6b29tIHNjYWxlICovXG4gICAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gY2FudmFzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCAvIGNhbnZhcy5oZWlnaHRcbiAgICAgIH07XG4gICAgICB0aGlzLl9taW5TY2FsZSA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFN0eWxlc0ZvckNvbnRJbWcodmFsdWVzOiB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcbiAgfSkge1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHsgfSBhcyBhbnk7XG4gICAgY29uc3Qgcm9vdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgIGlmICh2YWx1ZXMueCAhPT0gdm9pZCAwICYmIHZhbHVlcy55ICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnN0IHggPSByb290UmVjdC53aWR0aCAvIDIgLSAodmFsdWVzLngpO1xuICAgICAgY29uc3QgeSA9IHJvb3RSZWN0LmhlaWdodCAvIDIgLSAodmFsdWVzLnkpO1xuXG4gICAgICB0aGlzLl9pbWdSZWN0LnggPSAodmFsdWVzLngpO1xuICAgICAgdGhpcy5faW1nUmVjdC55ID0gKHZhbHVlcy55KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueGMgPSAoeCk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnljID0gKHkpO1xuICAgIH1cbiAgICBuZXdTdHlsZXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7KHRoaXMuX2ltZ1JlY3QueCl9cHgsJHsodGhpcy5faW1nUmVjdC55KX1weCwgMClgO1xuICAgIG5ld1N0eWxlcy50cmFuc2Zvcm0gKz0gYHNjYWxlKCR7dGhpcy5fc2NhbDNGaXh9KWA7XG4gICAgbmV3U3R5bGVzLnRyYW5zZm9ybU9yaWdpbiA9IGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1N0eWxlcykge1xuICAgICAgaWYgKG5ld1N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCBrZXksIG5ld1N0eWxlc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJykgcmVzaXplJCgpIHtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKF9pbWcuZmlsZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgdGhpcy5fZmlsZU5hbWUgPSBfaW1nLnZhbHVlLnJlcGxhY2UoLy4qKFxcL3xcXFxcKS8sICcnKTtcblxuXG4gICAgLyoqIFNldCB0eXBlICovXG4gICAgaWYgKCF0aGlzLmNvbmZpZy50eXBlKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0VHlwZSA9IF9pbWcuZmlsZXNbMF0udHlwZTtcbiAgICB9XG4gICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKGxvYWRFdmVudCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZVVybCA9IChsb2FkRXZlbnQudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdCBhcyBzdHJpbmc7XG4gICAgICB0aGlzLnNldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlc1swXSk7XG4gIH1cblxuICAvKiogU2V0IHRoZSBzaXplIG9mIHRoZSBpbWFnZSwgdGhlIHZhbHVlcyBjYW4gYmUgMCBiZXR3ZWVuIDEsIHdoZXJlIDEgaXMgdGhlIG9yaWdpbmFsIHNpemUgKi9cbiAgc2V0U2NhbGUoc2l6ZTogbnVtYmVyLCBub0F1dG9Dcm9wPzogYm9vbGVhbikge1xuICAgIC8vIGZpeCBtaW4gc2NhbGVcbiAgICBzaXplID0gc2l6ZSA+PSB0aGlzLm1pblNjYWxlICYmIHNpemUgPD0gMSA/IHNpemUgOiB0aGlzLm1pblNjYWxlO1xuXG4gICAgLy8gY2hlY2tcbiAgICBjb25zdCBjaGFuZ2VkID0gc2l6ZSAhPT0gdGhpcy5zY2FsZTtcbiAgICB0aGlzLl9zY2FsZSA9IHNpemU7XG4gICAgc2l6ZSA9IHRoaXMuX3NjYWwzRml4ID0gc2l6ZTtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCkge1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luUG9zaXRpb24gPSB7Li4udGhpcy5faW1nUmVjdH07XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICAgIHg6IG9yaWdpblBvc2l0aW9uLngsXG4gICAgICAgICAgeTogb3JpZ2luUG9zaXRpb24ueSxcbiAgICAgICAgICBsZWZ0OiBvcmlnaW5Qb3NpdGlvbi54YyxcbiAgICAgICAgICB0b3A6IG9yaWdpblBvc2l0aW9uLnljXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe30pO1xuICAgICAgICB0aGlzLl9tb3ZlKHtcbiAgICAgICAgICBzcmNFdmVudDoge30sXG4gICAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICAgIGRlbHRhWTogMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubWluU2NhbGUpIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICAuLi50aGlzLl9nZXRDZW50ZXJQb2ludHMoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjYWxlQ2hhbmdlLmVtaXQodGhpcy5fc2NhbGUpO1xuICAgIGlmICghbm9BdXRvQ3JvcCkge1xuICAgICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRDZW50ZXJQb2ludHMoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGltZyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHggPSAocm9vdC5vZmZzZXRXaWR0aCAtIChpbWcud2lkdGgpKSAvIDI7XG4gICAgY29uc3QgeSA9IChyb290Lm9mZnNldEhlaWdodCAtIChpbWcuaGVpZ2h0KSkgLyAyO1xuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXG4gICAqL1xuICBmaXRUb1NjcmVlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBtaW4gPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2ltZztcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyB3aWR0aCxcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIGhlaWdodFxuICAgIH07XG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCk7XG4gICAgdGhpcy5zZXRTY2FsZShyZXN1bHQpO1xuICB9XG5cbiAgZml0KCkge1xuICAgIHRoaXMuc2V0U2NhbGUoMCk7XG4gIH1cblxuICBfbW92ZVN0YXJ0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgeDogdGhpcy5faW1nUmVjdC54LFxuICAgICAgeTogdGhpcy5faW1nUmVjdC55LFxuICAgICAgbGVmdDogdGhpcy5faW1nUmVjdC54YyxcbiAgICAgIHRvcDogdGhpcy5faW1nUmVjdC55Y1xuICAgIH07XG4gIH1cbiAgX21vdmUoZXZlbnQpIHtcbiAgICBsZXQgeCwgeTtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWxlO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IHN0YXJ0UCA9IHRoaXMub2Zmc2V0O1xuICAgIC8vIExpbWl0IGZvciBsZWZ0XG4gICAgaWYgKChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpID49IHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSkge1xuICAgICAgeCA9IHN0YXJ0UC54ICsgKHN0YXJ0UC5sZWZ0KSAtIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIH1cblxuICAgIC8vIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpID49IChzdGFydFAudG9wIC0gKGV2ZW50LmRlbHRhWSAvIHNjYWxlRml4KSkpIHtcbiAgICAgIHkgPSBzdGFydFAueSArIChzdGFydFAudG9wKSAtIChjb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIH1cblxuICAgIC8vIC8vIExpbWl0IGZvciByaWdodFxuICAgIGlmICgoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSArIChjYW52YXMud2lkdGgpIC0gKHN0YXJ0UC5sZWZ0IC0gKGV2ZW50LmRlbHRhWCAvIHNjYWxlRml4KSkgPD0gY29uZmlnLndpZHRoIC8gc2NhbGVGaXgpIHtcbiAgICAgIHggPSBzdGFydFAueCArIChzdGFydFAubGVmdCkgKyAoY29uZmlnLndpZHRoIC8gMiAvIHNjYWxlRml4KSAtIGNhbnZhcy53aWR0aDtcbiAgICB9XG5cbiAgICAvLyAvLyBMaW1pdCBmb3IgYm90dG9tXG4gICAgaWYgKCgoY29uZmlnLmhlaWdodCAvIDIgLyBzY2FsZUZpeCkgKyAoY2FudmFzLmhlaWdodCkgLSAoc3RhcnRQLnRvcCAtIChldmVudC5kZWx0YVkgLyBzY2FsZUZpeCkpKSA8PSAoY29uZmlnLmhlaWdodCAvIHNjYWxlRml4KSkge1xuICAgICAgeSA9IHN0YXJ0UC55ICsgKHN0YXJ0UC50b3ApICsgKGNvbmZpZy5oZWlnaHQgLyAyIC8gc2NhbGVGaXgpIC0gY2FudmFzLmhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHByZXNzIHNoaWZ0S2V5LCBkZXByZWNhdGVkXG4gICAgLy8gaWYgKGV2ZW50LnNyY0V2ZW50ICYmIGV2ZW50LnNyY0V2ZW50LnNoaWZ0S2V5KSB7XG4gICAgLy8gICBpZiAoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSA9PT0gTWF0aC5tYXgoTWF0aC5hYnMoZXZlbnQuZGVsdGFYKSwgTWF0aC5hYnMoZXZlbnQuZGVsdGFZKSkpIHtcbiAgICAvLyAgICAgeSA9IHRoaXMub2Zmc2V0LnRvcDtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHggPSB0aGlzLm9mZnNldC5sZWZ0O1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGlmICh4ID09PSB2b2lkIDApIHsgeCA9IChldmVudC5kZWx0YVggLyBzY2FsZUZpeCkgKyAodGhpcy5vZmZzZXQueCk7IH1cbiAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAoZXZlbnQuZGVsdGFZIC8gc2NhbGVGaXgpICsgKHRoaXMub2Zmc2V0LnkpOyB9XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbih4PzogbnVtYmVyLCB5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgIGNvbnN0IGNyb3BwaW5nQ29udGFpbmVyUmVjdCA9IHRoaXMuX2FyZWFDcm9wcGVyUmVjdCgpO1xuICAgIGlmICh4ID09PSB2b2lkIDAgJiYgeSA9PT0gdm9pZCAwKSB7XG4gICAgICB4ID0gdGhpcy5faW1nUmVjdC54YztcbiAgICAgIHkgPSB0aGlzLl9pbWdSZWN0LnljO1xuICAgIH1cbiAgICB4ID0gKGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueCkgLSAoeCAtICh0aGlzLmNvbmZpZy53aWR0aCAvIDIpKTtcbiAgICB5ID0gKGNyb3BwaW5nQ29udGFpbmVyUmVjdC55IC0gaG9zdFJlY3QueSkgLSAoeSAtICh0aGlzLmNvbmZpZy5oZWlnaHQgLyAyKSk7XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB4LCB5XG4gICAgfSk7XG4gIH1cblxuICBfc2xpZGVFbmQoKSB7XG4gICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nyb3BJZkF1dG9Dcm9wKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvQ3JvcCkge1xuICAgICAgdGhpcy5jcm9wKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqKyAqL1xuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCArIC4wNTtcbiAgICBpZiAoc2NhbGUgPiAwICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNjYWxlKDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhbiB0aGUgaW1nIGNyb3BwZXIgKi9cbiAgY2xlYW4oKSB7XG4gICAgdGhpcy5faW1nUmVjdCA9IHsgfSBhcyBhbnk7XG4gICAgdGhpcy5vZmZzZXQgPSBudWxsO1xuICAgIHRoaXMuc2NhbGUgPSBudWxsO1xuICAgIHRoaXMuX3NjYWwzRml4ID0gbnVsbDtcbiAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XG4gICAgdGhpcy5fbWluU2NhbGUgPSBudWxsO1xuICAgIHRoaXMuX2RlZmF1bHRUeXBlID0gbnVsbDtcbiAgICB0aGlzLl9pc0xvYWRlZEltZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0ID0gbnVsbDtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjYW52YXMud2lkdGggPSAwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSAwO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiotICovXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLl9zY2FsM0ZpeCAtIC4wNTtcbiAgICBpZiAoc2NhbGUgPiB0aGlzLm1pblNjYWxlICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpdCgpO1xuICAgIH1cbiAgfVxuICBjZW50ZXIoKSB7XG4gICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgLi4udGhpcy5fZ2V0Q2VudGVyUG9pbnRzKClcbiAgICB9O1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcobmV3U3R5bGVzKTtcbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbiAgLyoqIFNldCBJbWcgKi9cbiAgc2V0SW1hZ2VVcmwoc3JjOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsZWFuKCk7XG4gICAgdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQgPSBzcmM7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xuICAgIGNvbnN0IGNyb3BFdmVudDogSW1nQ3JvcHBlckV2ZW50ID0ge1xuICAgICAgbmFtZTogdGhpcy5fZmlsZU5hbWUsXG4gICAgICB0eXBlOiB0aGlzLl9kZWZhdWx0VHlwZSxcbiAgICAgIGRhdGFVUkw6IG51bGwsXG4gICAgICBiYXNlNjQ6IG51bGwsXG4gICAgICB3aWR0aDogbnVsbCxcbiAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgIHNjYWxlOiBudWxsLFxuICAgICAgb3JpZ2luYWxEYXRhVVJMOiBzcmMsXG4gICAgICByb3RhdGlvbjogbnVsbCxcbiAgICAgIHBvc2l0aW9uOiBudWxsXG4gICAgfTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgIHRoaXMuZXJyb3IuZW1pdChjcm9wRXZlbnQpO1xuICAgIH0pO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgdGhpcy5faW1nTG9hZGVkKGltZyk7XG4gICAgICBjcm9wRXZlbnQud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICBjcm9wRXZlbnQuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgIHRoaXMuX2lzTG9hZGVkSW1nID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9uZ1pvbmVcbiAgICAgICAgICAub25TdGFibGVcbiAgICAgICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldFNjYWxlKDAsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdChjcm9wRXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICAgICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICByb3RhdGUoZGVncmVlczogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsaWREZWdyZWVzID0gdGhpcy5fcm90YXRpb24gPSBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoZGVncmVlcyk7XG4gICAgY29uc3QgZGVncmVlc1JhZCA9IHZhbGlkRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY2FudmFzQ2xvbiA9IGNyZWF0ZUNhbnZhc0ltZyhjYW52YXMpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgLy8gY2xlYXJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0Nsb24ud2lkdGgsIGNhbnZhc0Nsb24uaGVpZ2h0KTtcblxuICAgIC8vIHJvdGF0ZSBjYW52YXMgaW1hZ2VcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjYW52YXMsICd0cmFuc2Zvcm0nLCBgcm90YXRlKCR7dmFsaWREZWdyZWVzfWRlZykgc2NhbGUoJHsxIC8gdGhpcy5fc2NhbDNGaXh9KWApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybU9yaWdpbicsIGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgKTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuXG4gICAgLy8gc2F2ZSByZWN0XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIHJlbW92ZSByb3RhdGUgc3R5bGVzXG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtT3JpZ2luJyk7XG5cbiAgICAvLyBzZXQgdyAmIGhcblxuICAgIGNvbnN0IHcgPSBjYW52YXNSZWN0LndpZHRoO1xuICAgIGNvbnN0IGggPSBjYW52YXNSZWN0LmhlaWdodDtcblxuICAgIGN0eC5jYW52YXMud2lkdGggPSB3O1xuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgIC8vIGNsZWFyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcblxuICAgIC8vIHRyYW5zbGF0ZSBhbmQgcm90YXRlXG4gICAgY3R4LnRyYW5zbGF0ZSh3IC8gMiwgaCAvIDIpO1xuICAgIGN0eC5yb3RhdGUoZGVncmVlc1JhZCk7XG4gICAgY3R4LmRyYXdJbWFnZShjYW52YXNDbG9uLCAtY2FudmFzQ2xvbi53aWR0aCAvIDIsIC1jYW52YXNDbG9uLmhlaWdodCAvIDIpO1xuICAgIGNvbnN0IHJvb3RSZWN0ID0gdGhpcy5fcm9vdFJlY3QoKTtcblxuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgeDogKHggLSByb290UmVjdC54KSxcbiAgICAgIHk6ICh5IC0gcm9vdFJlY3QueSlcbiAgICB9KTtcblxuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIGltYWdlU21vb3RoaW5nUXVhbGl0eShpbWc6IEhUTUxDYW52YXNFbGVtZW50LCBjb25maWcsIHF1YWxpdHk6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICAvKiogQ2FsY3VsYXRlIHRvdGFsIG51bWJlciBvZiBzdGVwcyBuZWVkZWQgKi9cbiAgICBsZXQgIG51bVN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKE1hdGgubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCkgLyBNYXRoLm1heChjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpKSAvIE1hdGgubG9nKDIpKSAtIDE7XG4gICAgbnVtU3RlcHMgPSBudW1TdGVwcyA8PSAwID8gMCA6IG51bVN0ZXBzO1xuXG4gICAgLyoqQXJyYXkgc3RlcHMgKi9cbiAgICBjb25zdCBzdGVwcyA9IEFycmF5LmZyb20oQXJyYXkobnVtU3RlcHMpLmtleXMoKSk7XG5cbiAgICAvKiogQ29udGV4dCAqL1xuICAgIGNvbnN0IG9jdHggPSBpbWcuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHEgPSAoKHF1YWxpdHkgKiAxMCkgKiogbnVtU3RlcHMpIC8gKDEwICoqIG51bVN0ZXBzKTtcbiAgICBjb25zdCBmaWxlVHlwZSA9IHRoaXMuX2RlZmF1bHRUeXBlO1xuICAgIC8qKiBJZiBTdGVwcyA9PiBpbWFnZVNtb290aGluZ1F1YWxpdHkgKi9cbiAgICBpZiAobnVtU3RlcHMpIHtcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xuICAgICAgY29uc3QgdyA9IGltZy53aWR0aCAqIHF1YWxpdHk7XG4gICAgICBjb25zdCBoID0gaW1nLmhlaWdodCAqIHF1YWxpdHk7XG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cbiAgICAgIGlmICh0aGlzLl9kZWZhdWx0VHlwZSA9PT0gJ2ltYWdlL3BuZycgfHwgZmlsZVR5cGUgPT09ICdpbWFnZS9zdmcreG1sJykge1xuICAgICAgICBvY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcbiAgICAgIH1cblxuICAgICAgLyoqIFN0ZXBzICovXG4gICAgICAoc3RlcHMgYXMgQXJyYXk8bnVtYmVyPikuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcbiAgICAgICAgICAwLCAwLFxuICAgICAgICAgIHcsIGhcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0ZXAgZmluYWxcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAgICovXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAwLCAwLFxuICAgICAgaW1nLndpZHRoICogcSwgaW1nLmhlaWdodCAqIHEsXG4gICAgICAwLCAwLFxuICAgICAgb2Mud2lkdGgsIG9jLmhlaWdodFxuICAgICk7XG4gICAgcmV0dXJuIG9jO1xuICB9XG5cbiAgLyoqXG4gICAqIENyb3AgSW1hZ2VcbiAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgKi9cbiAgY3JvcChjb25maWc/OiBJbWdDcm9wcGVyQ29uZmlnKTogSW1nQ3JvcHBlckV2ZW50IHtcbiAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWcgPyBtZXJnZURlZXAoe30sIHRoaXMuY29uZmlnIHx8IENPTkZJR19ERUZBVUxULCBjb25maWcpIDogdGhpcy5jb25maWc7XG4gICAgY29uc3QgY3JvcEV2ZW50ID0gdGhpcy5faW1nQ3JvcChuZXdDb25maWcpO1xuICAgIHJldHVybiBjcm9wRXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2ltZ0Nyb3AobXlDb25maWc6IEltZ0Nyb3BwZXJDb25maWcpIHtcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGltZ1JlY3QgPSB0aGlzLl9pbWdSZWN0O1xuICAgIGNvbnN0IHNjYWxlRml4ID0gdGhpcy5fc2NhbDNGaXg7XG4gICAgY29uc3QgbGVmdCA9IGltZ1JlY3QueGMgLSAobXlDb25maWcud2lkdGggLyAyIC8gc2NhbGVGaXgpO1xuICAgIGNvbnN0IHRvcCA9IGltZ1JlY3QueWMgLSAobXlDb25maWcuaGVpZ2h0IC8gMiAvIHNjYWxlRml4KTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICB3aWR0aDogbXlDb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IG15Q29uZmlnLmhlaWdodFxuICAgIH07XG4gICAgY2FudmFzRWxlbWVudC53aWR0aCA9IGNvbmZpZy53aWR0aCAvIHNjYWxlRml4O1xuICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCAvIHNjYWxlRml4O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAobXlDb25maWcuZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG15Q29uZmlnLmZpbGw7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xuICAgIH1cbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50IGFzIGFueSxcbiAgICAgIC0obGVmdCksIC0odG9wKSxcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGFudGlBbGlhc2VkUSA9IG15Q29uZmlnLmFudGlBbGlhc2VkID8gLjUgOiAxO1xuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCBhbnRpQWxpYXNlZFEpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCBhbnRpQWxpYXNlZFEpO1xuICAgIH1cbiAgICBsZXQgdXJsO1xuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGBpbWFnZS8ke215Q29uZmlnLnR5cGV9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5fZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgICBjb25zdCBjcm9wRXZlbnQgPSB7XG4gICAgICBkYXRhVVJMOiB1cmwsXG4gICAgICBiYXNlNjQ6IHVybCxcbiAgICAgIHR5cGU6IHRoaXMuX2RlZmF1bHRUeXBlIHx8IG15Q29uZmlnLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHQsXG4gICAgICBvcmlnaW5hbERhdGFVUkw6IHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0LFxuICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICByb3RhdGlvbjogdGhpcy5fcm90YXRpb24sXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiB0aGlzLl9pbWdSZWN0LnhjLFxuICAgICAgICB5OiB0aGlzLl9pbWdSZWN0LnljXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfcm9vdFJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cblxuICBwcml2YXRlIF9hcmVhQ3JvcHBlclJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2Nyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgfVxuXG59XG5cbi8qKlxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDQ1KSA9PT0gOTBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyg0MCkgPT09IDBcbiAqIGNvbnZlcnRUb1ZhbGlkRGVncmVlcygxMDApID09PSA5MFxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMobnVtOiBudW1iZXIpIHtcbiAgY29uc3QgdmFsMzYwID0gbGltaXROdW0obnVtLCAzNjApO1xuICBjb25zdCB2YWw5MCA9IGxpbWl0TnVtKHZhbDM2MC5yZXN1bHQsIDkwKTtcbiAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbihudW0pO1xuICBpZiAodmFsOTAucmVzdWx0ID49ICg5MCAvIDIpKSB7XG4gICAgcmV0dXJuIDkwICogKHZhbDkwLnBhcnRzICsgMSkgKiBzaWduO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA5MCAqIHZhbDkwLnBhcnRzICogc2lnbjtcbiAgfVxufVxuXG4vKipcbiAqIGRlbW86XG4gKiBsaW1pdE51bSg0NTAsIDM2MCkgPT09IDkwXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGxpbWl0TnVtKG51bTogbnVtYmVyLCBudW0yOiBudW1iZXIpIHtcbiAgY29uc3QgbnVtQWJzID0gTWF0aC5hYnMobnVtKTtcbiAgY29uc3QgcGFydHMgPSBNYXRoLmZsb29yKG51bUFicyAvIG51bTIpO1xuICBsZXQgcmVzdWx0OiBudW1iZXI7XG4gIGlmIChwYXJ0cykge1xuICAgIHJlc3VsdCA9IG51bUFicyAtIChudW0yICogcGFydHMpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IG51bTtcbiAgfVxuICBpZiAobnVtQWJzICE9PSBudW0pIHtcbiAgICByZXN1bHQgKj0gLTE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXN1bHQsXG4gICAgcGFydHNcbiAgfTtcbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhbnZhc0ltZyhpbWc6IEhUTUxDYW52YXNFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudCkge1xuXG4gIC8vIGNyZWF0ZSBhIG5ldyBjYW52YXNcbiAgY29uc3QgbmV3Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAvLyBzZXQgZGltZW5zaW9uc1xuICBuZXdDYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gIG5ld0NhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuXG4gIC8vIGFwcGx5IHRoZSBvbGQgY2FudmFzIHRvIHRoZSBuZXcgb25lXG4gIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG5cbiAgLy8gcmV0dXJuIHRoZSBuZXcgY2FudmFzXG4gIHJldHVybiBuZXdDYW52YXM7XG59XG4iLCJpbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMeUhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5pbXBvcnQgeyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMgfSBmcm9tICcuL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBMeUhhbW1lckdlc3R1cmVDb25maWcgfVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNdXG59KVxuZXhwb3J0IGNsYXNzIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiTFlfQ09NTU9OX1NUWUxFUyIsIkV2ZW50RW1pdHRlciIsIm1lcmdlRGVlcCIsInRha2UiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIlJlbmRlcmVyMiIsIkx5VGhlbWUyIiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwiTmdab25lIiwiVmlld0NoaWxkIiwiT3V0cHV0IiwiSW5wdXQiLCJIb3N0TGlzdGVuZXIiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkhBTU1FUl9HRVNUVVJFX0NPTkZJRyIsIkx5SGFtbWVyR2VzdHVyZUNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFlTyxJQUFJLFFBQVEsR0FBRztRQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLFFBQVEsQ0FBQyxDQUFDO1lBQzND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QUcsSUFBSSxDQUFDLE1BQU07O29CQUNwQixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07O2dCQUUxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsRUFBRTtvQkFDNUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO2lCQUM5RDs7Z0JBR0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFFBQVEsTUFBTSxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRTtvQkFDOUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO2lCQUM3RDs7Z0JBR0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFFBQVEsS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7b0JBQ3pILENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2lCQUM3RTs7Z0JBR0QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsUUFBUSxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFB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