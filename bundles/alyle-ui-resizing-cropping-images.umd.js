(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('rxjs'), require('@angular/platform-browser'), require('@angular/core'), require('@angular/common'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/resizing-cropping-images', ['exports', 'rxjs/operators', 'rxjs', '@angular/platform-browser', '@angular/core', '@angular/common', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.resizingCroppingImages = {}),global.rxjs.operators,global.rxjs,global.ng.platformBrowser,global.ng.core,global.ng.common,global.ly.core));
}(this, (function (exports,operators,rxjs,platformBrowser,core,common,ui) { 'use strict';

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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        croppingContainer: __assign({ pointerEvents: 'none', boxShadow: '0 0 0 20000px rgba(0, 0, 0, 0.4)' }, ui.LY_COMMON_STYLES.fill, { margin: 'auto', '&:before, &:after': __assign({}, ui.LY_COMMON_STYLES.fill, { content: "''" }), '&:before': {
                width: 0,
                height: 0,
                margin: 'auto',
                borderRadius: '50%',
                background: '#fff',
                border: 'solid 2px rgb(255, 255, 255)'
            }, '&:after': {
                border: 'solid 2px rgb(255, 255, 255)'
            } }),
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
             * \@docs-private
             */
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            this._imgRect = ( /** @type {?} */({}));
            this._listeners = new Set();
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
                    var ctx = ( /** @type {?} */(canvas.getContext('2d')));
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
                var _img = ( /** @type {?} */(img.target));
                if (_img.files && _img.files.length !== 1) {
                    return;
                }
                /** @type {?} */
                var fileReader = new FileReader();
                this._fileName = _img.value.replace(/.*(\/|\\)/, '');
                /** @type {?} */
                var listener = rxjs.fromEvent(fileReader, 'load')
                    .pipe(operators.take(1))
                    .subscribe(function (loadEvent) {
                    /** @type {?} */
                    var originalImageUrl = ( /** @type {?} */((( /** @type {?} */(loadEvent.target))).result));
                    _this.setImageUrl(originalImageUrl);
                    /** Set type */
                    if (!_this.config.type) {
                        _this._defaultType = ( /** @type {?} */(_img.files))[0].type;
                    }
                    _this.cd.markForCheck();
                    _this._listeners.delete(listener);
                });
                this._listeners.add(listener);
                fileReader.readAsDataURL(( /** @type {?} */(_img.files))[0]);
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
                var newSize = ( /** @type {?} */(size)) >= ( /** @type {?} */(this.minScale)) && ( /** @type {?} */(size)) <= 1 ? size : this.minScale;
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
         * @private
         * @return {?}
         */
        LyResizingCroppingImages.prototype._getCenterPoints = /**
         * @private
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
                x = (croppingContainerRect.x - hostRect.x) - (( /** @type {?} */(x)) - (this.config.width / 2));
                y = (croppingContainerRect.y - hostRect.y) - (( /** @type {?} */(y)) - (this.config.height / 2));
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
                var scale = ( /** @type {?} */(this._scal3Fix)) + .05;
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
                    this.offset = undefined;
                    this.scale = ( /** @type {?} */(undefined));
                    this._scal3Fix = undefined;
                    this._rotation = 0;
                    this._minScale = undefined;
                    this._defaultType = undefined;
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
                var scale = ( /** @type {?} */(this._scal3Fix)) - .05;
                if (scale > ( /** @type {?} */(this.minScale)) && scale <= 1) {
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
                    originalDataURL: src,
                };
                img.src = src;
                /** @type {?} */
                var errorListen = rxjs.fromEvent(img, 'error').pipe(operators.take(1)).subscribe(function () {
                    _this.error.emit(cropEvent);
                    _this._listeners.delete(errorListen);
                });
                this._listeners.add(errorListen);
                /** @type {?} */
                var loadListen = rxjs.fromEvent(img, 'load')
                    .pipe(operators.take(1)).subscribe(function () {
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
                    _this._listeners.delete(loadListen);
                });
                this._listeners.add(loadListen);
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
                var ctx = ( /** @type {?} */(canvas.getContext('2d')));
                // clear
                ctx.clearRect(0, 0, canvasClon.width, canvasClon.height);
                // rotate canvas image
                this._renderer.setStyle(canvas, 'transform', "rotate(" + validDegrees + "deg) scale(" + 1 / ( /** @type {?} */(this._scal3Fix)) + ")");
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
                // Update min scale
                this._minScale = getMinScale(this.config.width, this.config.height, canvas.width, canvas.height);
                // set the minimum scale, only if necessary
                if (( /** @type {?} */(this.scale)) < ( /** @type {?} */(this.minScale))) {
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
                var octx = ( /** @type {?} */(img.getContext('2d')));
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
                var ctx = ( /** @type {?} */(oc.getContext('2d')));
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
                var imgRect = ( /** @type {?} */(this._imgRect));
                /** @type {?} */
                var scaleFix = ( /** @type {?} */(this._scal3Fix));
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
                var ctx = ( /** @type {?} */(canvasElement.getContext('2d')));
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
                return ( /** @type {?} */(this.elementRef.nativeElement.getBoundingClientRect()));
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
            _resize$: [{ type: core.HostListener, args: ['window:resize',] }]
        };
        return LyResizingCroppingImages;
    }());
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
        var context = ( /** @type {?} */(newCanvas.getContext('2d')));
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ImgResolution = ImgResolution;
    exports.LyResizingCroppingImages = LyResizingCroppingImages;
    exports.LyResizingCroppingImageModule = LyResizingCroppingImageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-resizing-cropping-images.umd.js.map