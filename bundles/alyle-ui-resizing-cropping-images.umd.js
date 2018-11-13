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
            '& > canvas': {
                width: '100%',
                height: '100%',
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
    var CONFIG_DEFAULT = /** @type {?} */ ({
        width: 250,
        height: 200,
        output: ImgResolution.Default,
        antiAliased: true
    });
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
            this._imgRect = /** @type {?} */ ({});
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
                    canvas.height = imgElement.height;
                    canvas.width = imgElement.width;
                    /** @type {?} */
                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(imgElement, 0, 0);
                    /** *
                     * set zoom scale
                      @type {?} */
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
                var newStyles = /** @type {?} */ ({
                    width: fix(values.width) + "px",
                    height: fix(values.height) + "px"
                });
                if (values.x !== void 0 && values.y !== void 0) {
                    /** @type {?} */
                    var rootRect = this._rootRect();
                    /** @type {?} */
                    var imgRect = this._imgContainerRect();
                    /** @type {?} */
                    var x = rootRect.width / 2 - (values.x);
                    /** @type {?} */
                    var y = rootRect.height / 2 - (values.y);
                    newStyles.transform = "translate3d(" + fix(values.x) + "px," + fix(values.y) + "px, 0)";
                    this._imgRect.x = fix(values.x);
                    this._imgRect.y = fix(values.y);
                    this._imgRect.xc = fix(x);
                    this._imgRect.yc = fix(y);
                    this._imgRect.wt = fix(imgRect.width);
                    this._imgRect.ht = fix(imgRect.height);
                }
                this._imgRect.w = fix(values.width);
                this._imgRect.h = fix(values.height);
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
                fileReader.addEventListener('loadend', function (loadEvent) {
                    /** @type {?} */
                    var originalImageUrl = /** @type {?} */ (( /** @type {?} */(loadEvent.target)).result);
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
                size = size > this.minScale && size <= 1 ? size : this.minScale;
                /** @type {?} */
                var changed = size === this.scale;
                this._scale = size;
                if (changed) {
                    return;
                }
                size = this._scal3Fix = fix(size, 4);
                /** @type {?} */
                var initialImg = this._imgCanvas.nativeElement;
                /** @type {?} */
                var width = (initialImg.width * size);
                /** @type {?} */
                var height = (initialImg.height * size);
                /** @type {?} */
                var hostRect = this._rootRect();
                if (!this.isLoaded) {
                    this._setStylesForContImg(__assign({ width: width,
                        height: height }, this._getCenterPoints()));
                }
                else {
                    /** @type {?} */
                    var originPosition = __assign({}, this._imgRect);
                    this.offset = {
                        x: (hostRect.width / 2) - (originPosition.x),
                        y: (hostRect.height / 2) - (originPosition.y),
                        left: originPosition.x,
                        top: originPosition.y
                    };
                    this._setStylesForContImg({
                        width: width,
                        height: height,
                    });
                    this._move({
                        srcEvent: {},
                        center: {
                            x: (hostRect.width / 2 - (this.offset.x * (width / originPosition.w))) + hostRect.x + this.offset.x,
                            y: (hostRect.height / 2 - (this.offset.y * (height / originPosition.h))) + hostRect.y + this.offset.y
                        }
                    });
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
                var root = /** @type {?} */ (this.elementRef.nativeElement);
                /** @type {?} */
                var img = this._imgCanvas.nativeElement;
                /** @type {?} */
                var size = this._scal3Fix;
                /** @type {?} */
                var x = (root.offsetWidth - (img.width * size)) / 2;
                /** @type {?} */
                var y = (root.offsetHeight - (img.height * size)) / 2;
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
                var container = /** @type {?} */ (this.elementRef.nativeElement);
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
         * @param {?} event
         * @return {?}
         */
        LyResizingCroppingImages.prototype._moveStart = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var hostRect = this._rootRect();
                /** @type {?} */
                var imgRect = this._imgRect;
                this.offset = {
                    x: event.center.x - hostRect.x - imgRect.x,
                    y: event.center.y - hostRect.y - imgRect.y,
                    left: imgRect.x,
                    top: imgRect.y
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
                var hostRect = this._rootRect();
                /** @type {?} */
                var imgContainerRect = this._imgRect;
                /** @type {?} */
                var croppingContainerRect = this._areaCropperRect();
                // Limit for left
                if (event.center.x - this.offset.x > croppingContainerRect.x) {
                    x = croppingContainerRect.x - hostRect.x;
                }
                // Limit for top
                if (event.center.y - this.offset.y > croppingContainerRect.y) {
                    y = croppingContainerRect.y - hostRect.y;
                }
                // Limit for right
                if (event.center.x - this.offset.x + imgContainerRect.w < croppingContainerRect.x + croppingContainerRect.width) {
                    x = croppingContainerRect.x - hostRect.x - imgContainerRect.w + croppingContainerRect.width;
                }
                // Limit for bottom
                if (event.center.y - this.offset.y + imgContainerRect.h < croppingContainerRect.y + croppingContainerRect.height) {
                    y = croppingContainerRect.y - hostRect.y - imgContainerRect.h + croppingContainerRect.height;
                }
                // When press shiftKey
                if (event.srcEvent && event.srcEvent.shiftKey) {
                    if (Math.abs(event.deltaX) === Math.max(Math.abs(event.deltaX), Math.abs(event.deltaY))) {
                        y = this.offset.top;
                    }
                    else {
                        x = this.offset.left;
                    }
                }
                if (x === void 0) {
                    x = event.center.x - hostRect.x - (this.offset.x);
                }
                if (y === void 0) {
                    y = event.center.y - hostRect.y - (this.offset.y);
                }
                this._setStylesForContImg({
                    width: this._imgContainer.nativeElement.offsetWidth,
                    height: this._imgContainer.nativeElement.offsetHeight,
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
                    width: this._imgContainer.nativeElement.offsetWidth,
                    height: this._imgContainer.nativeElement.offsetHeight,
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
                var scale = fix(this._scal3Fix + .05, 4);
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
                var scale = fix(this._scal3Fix - .05, 4);
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
                var imgRect = this._imgRect;
                /** @type {?} */
                var newStyles = __assign({ width: imgRect.w, height: imgRect.h }, this._getCenterPoints());
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
                    _this.clean();
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
                this._renderer.setStyle(canvas, 'transform', "rotate(" + validDegrees + "deg)");
                this._renderer.setStyle(canvas, 'transformOrigin', this._imgRect.xc + "px " + this._imgRect.yc + "px 0");
                var _a = /** @type {?} */ (canvas.getBoundingClientRect()), x = _a.x, y = _a.y;
                this._renderer.setStyle(canvas, 'width', "initial");
                this._renderer.setStyle(canvas, 'height', "initial");
                /** @type {?} */
                var canvasRect = canvas.getBoundingClientRect();
                // remove rotate styles
                this._renderer.removeStyle(canvas, 'transform');
                this._renderer.removeStyle(canvas, 'transformOrigin');
                this._renderer.removeStyle(canvas, 'width');
                this._renderer.removeStyle(canvas, 'height');
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
                    width: w * this._scal3Fix,
                    height: h * this._scal3Fix,
                    x: x - rootRect.x,
                    y: y - rootRect.y
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
                /** *
                 * Calculate total number of steps needed
                  @type {?} */
                var numSteps = Math.ceil(Math.log(Math.max(img.width, img.height) / Math.max(config.height, config.width)) / Math.log(2)) - 1;
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
                var q = (Math.pow((quality * 10), numSteps)) / (Math.pow(10, numSteps));
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
                    ( /** @type {?} */(steps)).forEach(function () {
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
                var left = imgRect.xc - myConfig.width / 2;
                /** @type {?} */
                var top = imgRect.yc - myConfig.height / 2;
                /** @type {?} */
                var scaleFix = this._scal3Fix;
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
                ctx.drawImage(/** @type {?} */ (this._imgCanvas.nativeElement), -(left / scaleFix), -(top / scaleFix));
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
                return /** @type {?} */ (this.elementRef.nativeElement.getBoundingClientRect());
            };
        /**
         * @return {?}
         */
        LyResizingCroppingImages.prototype._imgContainerRect = /**
         * @return {?}
         */
            function () {
                return /** @type {?} */ (this._imgContainer.nativeElement.getBoundingClientRect());
            };
        /**
         * @return {?}
         */
        LyResizingCroppingImages.prototype._areaCropperRect = /**
         * @return {?}
         */
            function () {
                return /** @type {?} */ (this._croppingContainer.nativeElement.getBoundingClientRect());
            };
        LyResizingCroppingImages.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        selector: 'ly-img-cropper, ly-cropping',
                        template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart($event)\"\n(slide)=\"_move($event)\"\n(slideend)=\"_slideEnd()\">\n  <canvas #_imgCanvas></canvas>\n</div>\n<div #_croppingContainer *ngIf=\"_isLoadedImg; else content\" [className]=\"classes.croppingContainer\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.croppContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
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
     * @param {?} v
     * @param {?=} decimalPoints
     * @return {?}
     */
    function fix(v, decimalPoints) {
        return +parseFloat(v).toFixed(decimalPoints || 0);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

    exports.ImgResolution = ImgResolution;
    exports.LyResizingCroppingImages = LyResizingCroppingImages;
    exports.LyResizingCroppingImageModule = LyResizingCroppingImageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BhbHlsZS91aS9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgbWVyZ2VEZWVwLCBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBpbWdDb250YWluZXI6IHtcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAnJiA+IGNhbnZhcyc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9XG4gIH0sXG4gIGNyb3BwaW5nQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogJzAgMCAwIDIwMDAwcHggcmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBjb250ZW50OiBgJydgLFxuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBib3JkZXI6ICdzb2xpZCAycHggcmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgIH1cbiAgfSxcbiAgY3JvcHBDb250ZW50OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAnJiwgJiA+IGlucHV0JzogTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICcmICo6bm90KGlucHV0KSc6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgJyYgPiBpbnB1dCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfVxuICB9XG59KTtcbi8qKiBJbWFnZSBDcm9wcGVyIENvbmZpZyAqL1xuZXhwb3J0IGludGVyZmFjZSBJbWdDcm9wcGVyQ29uZmlnIHtcbiAgLyoqIENyb3BwZXIgYXJlYSB3aWR0aCovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKiBDcm9wcGVyIGFyZWEgaGVpZ2h0Ki9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBJZiB0aGlzIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmV3IGltYWdlIHdpbGwgYmUgYXV0b21hdGljYWxseSBkZWZpbmVkICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcgKi9cbiAgZmlsbD86IHN0cmluZyB8IG51bGw7XG4gIC8qKiBTZXQgYW50aS1hbGlhc2VkKCBkZWZhdWx0OiB0cnVlKSAqL1xuICBhbnRpQWxpYXNlZD86IGJvb2xlYW47XG4gIGF1dG9Dcm9wPzogYm9vbGVhbjtcbiAgb3V0cHV0Pzoge1xuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlnaHQ6IG51bWJlclxuICB9IHwgSW1nUmVzb2x1dGlvbjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgdHlwZSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWcgPSBJbWdDcm9wcGVyQ29uZmlnO1xuXG4vKiogSW1hZ2Ugb3V0cHV0ICovXG5leHBvcnQgZW51bSBJbWdSZXNvbHV0aW9uIHtcbiAgLyoqIFJlc2l6aW5nICYgY3JvcHBpbmcgKi9cbiAgRGVmYXVsdCxcbiAgLyoqIE9ubHkgY3JvcHBpbmcgKi9cbiAgT3JpZ2luYWxJbWFnZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltZ0Nyb3BwZXJFdmVudCB7XG4gIC8qKiBDcm9wcGVkIGltYWdlIGluIGJhc2U2NCwgIWRlcHJlY2F0ZWQgdXNlIGluc3RlYWQgYGRhdGFVUkxgICovXG4gIGJhc2U2NDogc3RyaW5nO1xuICAvKiogQ3JvcHBlZCBpbWFnZSBkYXRhIFVSTCAqL1xuICBkYXRhVVJMOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIEZpbGV0eXBlICovXG4gIHR5cGU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBPcmlnaW5hbCBJbWFnZSBkYXRhIFVSTCAqL1xuICBvcmlnaW5hbERhdGFVUkw6IHN0cmluZztcbiAgc2NhbGU6IG51bWJlcjtcbiAgLyoqIEN1cnJlbnQgcm90YXRpb24gaW4gZGVncmVlcyAqL1xuICByb3RhdGlvbjogbnVtYmVyO1xuICBwb3NpdGlvbjoge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICB9O1xufVxuXG5jb25zdCBDT05GSUdfREVGQVVMVCA9IDxJbWdDcm9wcGVyQ29uZmlnPntcbiAgd2lkdGg6IDI1MCxcbiAgaGVpZ2h0OiAyMDAsXG4gIG91dHB1dDogSW1nUmVzb2x1dGlvbi5EZWZhdWx0LFxuICBhbnRpQWxpYXNlZDogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICdseS1pbWctY3JvcHBlciwgbHktY3JvcHBpbmcnLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5odG1sJ1xuIH0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBfb3JpZ2luYWxJbWdCYXNlNjQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfZmlsZU5hbWU6IHN0cmluZztcblxuICAvKiogT3JpZ2luYWwgaW1hZ2UgKi9cbiAgcHJpdmF0ZSBfaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBwcml2YXRlIG9mZnNldDoge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIGxlZnQ6IG51bWJlclxuICAgIHRvcDogbnVtYmVyXG4gIH07XG4gIHByaXZhdGUgX3NjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgX3NjYWwzRml4OiBudW1iZXI7XG4gIHByaXZhdGUgX21pblNjYWxlOiBudW1iZXI7XG4gIHByaXZhdGUgX2NvbmZpZzogSW1nQ3JvcHBlckNvbmZpZztcbiAgcHJpdmF0ZSBfaW1nUmVjdDoge1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIHhjOiBudW1iZXJcbiAgICB5YzogbnVtYmVyXG4gICAgdzogbnVtYmVyXG4gICAgaDogbnVtYmVyXG4gICAgLyoqIHRyYW5zZm9ybSB3aXRoICovXG4gICAgd3Q6IG51bWJlclxuICAgIGh0OiBudW1iZXJcbiAgfSA9IHt9IGFzIGFueTtcbiAgcHJpdmF0ZSBfcm90YXRpb246IG51bWJlcjtcblxuICBAVmlld0NoaWxkKCdfaW1nQ29udGFpbmVyJykgX2ltZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2Nyb3BwaW5nQ29udGFpbmVyJykgX2Nyb3BwaW5nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfaW1nQ2FudmFzJykgX2ltZ0NhbnZhczogRWxlbWVudFJlZjxIVE1MQ2FudmFzRWxlbWVudD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBzY2FsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb25maWcoKTogSW1nQ3JvcHBlckNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBzZXQgY29uZmlnKHZhbDogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IG1lcmdlRGVlcCh7fSwgQ09ORklHX0RFRkFVTFQsIHZhbCk7XG4gIH1cbiAgLyoqIFNldCBzY2FsZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gIH1cbiAgc2V0IHNjYWxlKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZXRTY2FsZSh2YWwpO1xuICB9XG5cbiAgLyoqIEdldCBtaW4gc2NhbGUgKi9cbiAgZ2V0IG1pblNjYWxlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pblNjYWxlO1xuICB9XG5cbiAgLyoqIFdoZW4gaXMgbG9hZGVkIGltYWdlICovXG4gIF9pc0xvYWRlZEltZzogYm9vbGVhbjtcblxuICAvKiogV2hlbiBpcyBsb2FkZWQgaW1hZ2UgJiByZWFkeSBmb3IgY3JvcCAqL1xuICBpc0xvYWRlZDogYm9vbGVhbjtcbiAgaXNDcm9wcGVkOiBib29sZWFuO1xuXG4gIC8qKiBPbiBsb2FkZWQgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEltZ0Nyb3BwZXJFdmVudD4oKTtcbiAgLyoqIE9uIGNyb3AgbmV3IGltYWdlICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBFbWl0IGFuIGVycm9yIHdoZW4gdGhlIGxvYWRlZCBpbWFnZSBpcyBub3QgdmFsaWQgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBfZGVmYXVsdFR5cGU6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW1nTG9hZGVkKGltZ0VsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICBpZiAoaW1nRWxlbWVudCkge1xuICAgICAgdGhpcy5faW1nID0gaW1nRWxlbWVudDtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgICAgY2FudmFzLmhlaWdodCA9IGltZ0VsZW1lbnQuaGVpZ2h0O1xuICAgICAgY2FudmFzLndpZHRoID0gaW1nRWxlbWVudC53aWR0aDtcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWdFbGVtZW50LCAwLCAwKTtcbiAgICAgIC8qKiBzZXQgem9vbSBzY2FsZSAqL1xuICAgICAgY29uc3QgbWluU2NhbGUgPSB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCAvIGNhbnZhcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgLyBjYW52YXMuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgdGhpcy5fbWluU2NhbGUgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZXNGb3JDb250SW1nKHZhbHVlczoge1xuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlnaHQ6IG51bWJlclxuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG4gIH0pIHtcbiAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICB3aWR0aDogYCR7Zml4KHZhbHVlcy53aWR0aCl9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHtmaXgodmFsdWVzLmhlaWdodCl9cHhgXG4gICAgfSBhcyBhbnk7XG4gICAgaWYgKHZhbHVlcy54ICE9PSB2b2lkIDAgJiYgdmFsdWVzLnkgIT09IHZvaWQgMCkge1xuICAgICAgY29uc3Qgcm9vdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgICAgY29uc3QgaW1nUmVjdCA9IHRoaXMuX2ltZ0NvbnRhaW5lclJlY3QoKTtcbiAgICAgIGNvbnN0IHggPSByb290UmVjdC53aWR0aCAvIDIgLSAodmFsdWVzLngpO1xuICAgICAgY29uc3QgeSA9IHJvb3RSZWN0LmhlaWdodCAvIDIgLSAodmFsdWVzLnkpO1xuICAgICAgbmV3U3R5bGVzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke2ZpeCh2YWx1ZXMueCl9cHgsJHtmaXgodmFsdWVzLnkpfXB4LCAwKWA7XG5cbiAgICAgIHRoaXMuX2ltZ1JlY3QueCA9IGZpeCh2YWx1ZXMueCk7XG4gICAgICB0aGlzLl9pbWdSZWN0LnkgPSBmaXgodmFsdWVzLnkpO1xuICAgICAgdGhpcy5faW1nUmVjdC54YyA9IGZpeCh4KTtcbiAgICAgIHRoaXMuX2ltZ1JlY3QueWMgPSBmaXgoeSk7XG4gICAgICB0aGlzLl9pbWdSZWN0Lnd0ID0gZml4KGltZ1JlY3Qud2lkdGgpO1xuICAgICAgdGhpcy5faW1nUmVjdC5odCA9IGZpeChpbWdSZWN0LmhlaWdodCk7XG4gICAgfVxuICAgIHRoaXMuX2ltZ1JlY3QudyA9IGZpeCh2YWx1ZXMud2lkdGgpO1xuICAgIHRoaXMuX2ltZ1JlY3QuaCA9IGZpeCh2YWx1ZXMuaGVpZ2h0KTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdTdHlsZXMpIHtcbiAgICAgIGlmIChuZXdTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudCwga2V5LCBuZXdTdHlsZXNba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpIHJlc2l6ZSQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RJbnB1dEV2ZW50KGltZzogRXZlbnQpIHtcbiAgICBjb25zdCBfaW1nID0gaW1nLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChfaW1nLmZpbGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB0aGlzLl9maWxlTmFtZSA9IF9pbWcudmFsdWUucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpO1xuXG4gICAgLyoqIFNldCB0eXBlICovXG4gICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBudWxsO1xuICAgIGlmICghdGhpcy5jb25maWcudHlwZSkge1xuICAgICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzWzBdLnR5cGU7XG4gICAgfVxuICAgIGZpbGVSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChsb2FkRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgdGhpcy5zZXRJbWFnZVVybChvcmlnaW5hbEltYWdlVXJsKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKF9pbWcuZmlsZXNbMF0pO1xuICB9XG5cbiAgLyoqIFNldCB0aGUgc2l6ZSBvZiB0aGUgaW1hZ2UsIHRoZSB2YWx1ZXMgY2FuIGJlIDAgYmV0d2VlbiAxLCB3aGVyZSAxIGlzIHRoZSBvcmlnaW5hbCBzaXplICovXG4gIHNldFNjYWxlKHNpemU6IG51bWJlciwgbm9BdXRvQ3JvcD86IGJvb2xlYW4pIHtcbiAgICAvLyBmaXggbWluIHNjYWxlXG4gICAgc2l6ZSA9IHNpemUgPiB0aGlzLm1pblNjYWxlICYmIHNpemUgPD0gMSA/IHNpemUgOiB0aGlzLm1pblNjYWxlO1xuXG4gICAgLy8gY2hlY2tcbiAgICBjb25zdCBjaGFuZ2VkID0gc2l6ZSA9PT0gdGhpcy5zY2FsZTtcbiAgICB0aGlzLl9zY2FsZSA9IHNpemU7XG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaXplID0gdGhpcy5fc2NhbDNGaXggPSBmaXgoc2l6ZSwgNCk7XG4gICAgY29uc3QgaW5pdGlhbEltZyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHdpZHRoID0gKGluaXRpYWxJbWcud2lkdGggKiBzaXplKTtcbiAgICBjb25zdCBoZWlnaHQgPSAoaW5pdGlhbEltZy5oZWlnaHQgKiBzaXplKTtcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgaWYgKCF0aGlzLmlzTG9hZGVkKSB7XG4gICAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgLi4udGhpcy5fZ2V0Q2VudGVyUG9pbnRzKClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvcmlnaW5Qb3NpdGlvbiA9IHsuLi50aGlzLl9pbWdSZWN0fTtcbiAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICB4OiAoaG9zdFJlY3Qud2lkdGggLyAyKSAtIChvcmlnaW5Qb3NpdGlvbi54KSxcbiAgICAgICAgeTogKGhvc3RSZWN0LmhlaWdodCAvIDIpIC0gKG9yaWdpblBvc2l0aW9uLnkpLFxuICAgICAgICBsZWZ0OiBvcmlnaW5Qb3NpdGlvbi54LFxuICAgICAgICB0b3A6IG9yaWdpblBvc2l0aW9uLnlcbiAgICAgIH07XG4gICAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fbW92ZSh7XG4gICAgICAgIHNyY0V2ZW50OiB7fSxcbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgeDogKGhvc3RSZWN0LndpZHRoIC8gMiAtICh0aGlzLm9mZnNldC54ICogKHdpZHRoIC8gb3JpZ2luUG9zaXRpb24udykpKSArIGhvc3RSZWN0LnggKyB0aGlzLm9mZnNldC54LFxuICAgICAgICAgIHk6IChob3N0UmVjdC5oZWlnaHQgLyAyIC0gKHRoaXMub2Zmc2V0LnkgKiAoaGVpZ2h0IC8gb3JpZ2luUG9zaXRpb24uaCkpKSArIGhvc3RSZWN0LnkgKyB0aGlzLm9mZnNldC55XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNjYWxlQ2hhbmdlLmVtaXQodGhpcy5fc2NhbGUpO1xuICAgIGlmICghbm9BdXRvQ3JvcCkge1xuICAgICAgdGhpcy5fY3JvcElmQXV0b0Nyb3AoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRDZW50ZXJQb2ludHMoKSB7XG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGltZyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLl9zY2FsM0ZpeDtcbiAgICBjb25zdCB4ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSAoaW1nLndpZHRoICogc2l6ZSkpIC8gMjtcbiAgICBjb25zdCB5ID0gKHJvb3Qub2Zmc2V0SGVpZ2h0IC0gKGltZy5oZWlnaHQgKiBzaXplKSkgLyAyO1xuICAgIHJldHVybiB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWp1c3RhciBhIGxhIHBhbnRhbGxhXG4gICAqL1xuICBmaXRUb1NjcmVlbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBtaW4gPSB7XG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2ltZztcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyB3aWR0aCxcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIGhlaWdodFxuICAgIH07XG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCk7XG4gICAgdGhpcy5zZXRTY2FsZShyZXN1bHQpO1xuICB9XG5cbiAgZml0KCkge1xuICAgIHRoaXMuc2V0U2NhbGUoMCk7XG4gIH1cblxuICBfbW92ZVN0YXJ0KGV2ZW50KSB7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgIGNvbnN0IGltZ1JlY3QgPSB0aGlzLl9pbWdSZWN0O1xuICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgeDogZXZlbnQuY2VudGVyLnggLSBob3N0UmVjdC54IC0gaW1nUmVjdC54LFxuICAgICAgeTogZXZlbnQuY2VudGVyLnkgLSBob3N0UmVjdC55IC0gaW1nUmVjdC55LFxuICAgICAgbGVmdDogaW1nUmVjdC54LFxuICAgICAgdG9wOiBpbWdSZWN0LnlcbiAgICB9O1xuICB9XG4gIF9tb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHgsIHk7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLl9yb290UmVjdCgpO1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9pbWdSZWN0O1xuICAgIGNvbnN0IGNyb3BwaW5nQ29udGFpbmVyUmVjdCA9IHRoaXMuX2FyZWFDcm9wcGVyUmVjdCgpO1xuXG4gICAgLy8gTGltaXQgZm9yIGxlZnRcbiAgICBpZiAoZXZlbnQuY2VudGVyLnggLSB0aGlzLm9mZnNldC54ID4gY3JvcHBpbmdDb250YWluZXJSZWN0LngpIHtcbiAgICAgIHggPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0Lng7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciB0b3BcbiAgICBpZiAoZXZlbnQuY2VudGVyLnkgLSB0aGlzLm9mZnNldC55ID4gY3JvcHBpbmdDb250YWluZXJSZWN0LnkpIHtcbiAgICAgIHkgPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0Lnk7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciByaWdodFxuICAgIGlmIChldmVudC5jZW50ZXIueCAtIHRoaXMub2Zmc2V0LnggKyBpbWdDb250YWluZXJSZWN0LncgPCBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC53aWR0aCkge1xuICAgICAgeCA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueCAtIGltZ0NvbnRhaW5lclJlY3QudyArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC53aWR0aDtcbiAgICB9XG4gICAgLy8gTGltaXQgZm9yIGJvdHRvbVxuICAgIGlmIChldmVudC5jZW50ZXIueSAtIHRoaXMub2Zmc2V0LnkgKyBpbWdDb250YWluZXJSZWN0LmggPCBjcm9wcGluZ0NvbnRhaW5lclJlY3QueSArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC5oZWlnaHQpIHtcbiAgICAgIHkgPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0LnkgLSBpbWdDb250YWluZXJSZWN0LmggKyBjcm9wcGluZ0NvbnRhaW5lclJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIFdoZW4gcHJlc3Mgc2hpZnRLZXlcbiAgICBpZiAoZXZlbnQuc3JjRXZlbnQgJiYgZXZlbnQuc3JjRXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVgpID09PSBNYXRoLm1heChNYXRoLmFicyhldmVudC5kZWx0YVgpLCBNYXRoLmFicyhldmVudC5kZWx0YVkpKSkge1xuICAgICAgICB5ID0gdGhpcy5vZmZzZXQudG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeCA9IHRoaXMub2Zmc2V0LmxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh4ID09PSB2b2lkIDApIHsgeCA9IGV2ZW50LmNlbnRlci54IC0gaG9zdFJlY3QueCAtICh0aGlzLm9mZnNldC54KTsgfVxuICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IGV2ZW50LmNlbnRlci55IC0gaG9zdFJlY3QueSAtICh0aGlzLm9mZnNldC55KTsgfVxuXG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB3aWR0aDogdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgIHgsIHlcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKHg/OiBudW1iZXIsIHk/OiBudW1iZXIpIHtcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgY29uc3QgY3JvcHBpbmdDb250YWluZXJSZWN0ID0gdGhpcy5fYXJlYUNyb3BwZXJSZWN0KCk7XG4gICAgaWYgKHggPT09IHZvaWQgMCAmJiB5ID09PSB2b2lkIDApIHtcbiAgICAgIHggPSB0aGlzLl9pbWdSZWN0LnhjO1xuICAgICAgeSA9IHRoaXMuX2ltZ1JlY3QueWM7XG4gICAgfVxuICAgIHggPSAoY3JvcHBpbmdDb250YWluZXJSZWN0LnggLSBob3N0UmVjdC54KSAtICh4IC0gKHRoaXMuY29uZmlnLndpZHRoIC8gMikpO1xuICAgIHkgPSAoY3JvcHBpbmdDb250YWluZXJSZWN0LnkgLSBob3N0UmVjdC55KSAtICh5IC0gKHRoaXMuY29uZmlnLmhlaWdodCAvIDIpKTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgIHdpZHRoOiB0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgeCwgeVxuICAgIH0pO1xuICB9XG5cbiAgX3NsaWRlRW5kKCkge1xuICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gIH1cblxuICBwcml2YXRlIF9jcm9wSWZBdXRvQ3JvcCgpIHtcbiAgICBpZiAodGhpcy5jb25maWcuYXV0b0Nyb3ApIHtcbiAgICAgIHRoaXMuY3JvcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKisgKi9cbiAgem9vbUluKCkge1xuICAgIGNvbnN0IHNjYWxlID0gZml4KHRoaXMuX3NjYWwzRml4ICsgLjA1LCA0KTtcbiAgICBpZiAoc2NhbGUgPiAwICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNjYWxlKDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDbGVhbiB0aGUgaW1nIGNyb3BwZXIgKi9cbiAgY2xlYW4oKSB7XG4gICAgdGhpcy5fZGVmYXVsdFR5cGUgPSBudWxsO1xuICAgIHRoaXMuX2lzTG9hZGVkSW1nID0gZmFsc2U7XG4gICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDcm9wcGVkID0gZmFsc2U7XG4gICAgdGhpcy5fb3JpZ2luYWxJbWdCYXNlNjQgPSBudWxsO1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuX2ltZ0NhbnZhcy5uYXRpdmVFbGVtZW50O1xuICAgIGNhbnZhcy53aWR0aCA9IDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDA7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKi0gKi9cbiAgem9vbU91dCgpIHtcbiAgICBjb25zdCBzY2FsZSA9IGZpeCh0aGlzLl9zY2FsM0ZpeCAtIC4wNSwgNCk7XG4gICAgaWYgKHNjYWxlID4gdGhpcy5taW5TY2FsZSAmJiBzY2FsZSA8PSAxKSB7XG4gICAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maXQoKTtcbiAgICB9XG4gIH1cbiAgY2VudGVyKCkge1xuICAgIC8vIFRPRE86IGZpeCB0aGlzXG4gICAgY29uc3QgaW1nUmVjdCA9IHRoaXMuX2ltZ1JlY3Q7XG4gICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgd2lkdGg6IGltZ1JlY3QudyxcbiAgICAgIGhlaWdodDogaW1nUmVjdC5oLFxuICAgICAgLi4udGhpcy5fZ2V0Q2VudGVyUG9pbnRzKClcbiAgICB9O1xuICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcobmV3U3R5bGVzKTtcbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbiAgLyoqIFNldCBJbWcgKi9cbiAgc2V0SW1hZ2VVcmwoc3JjOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vcmlnaW5hbEltZ0Jhc2U2NCA9IHNyYztcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2U7XG4gICAgY29uc3QgY3JvcEV2ZW50OiBJbWdDcm9wcGVyRXZlbnQgPSB7XG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHR5cGU6IHRoaXMuX2RlZmF1bHRUeXBlLFxuICAgICAgZGF0YVVSTDogbnVsbCxcbiAgICAgIGJhc2U2NDogbnVsbCxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgc2NhbGU6IG51bGwsXG4gICAgICBvcmlnaW5hbERhdGFVUkw6IHNyYyxcbiAgICAgIHJvdGF0aW9uOiBudWxsLFxuICAgICAgcG9zaXRpb246IG51bGxcbiAgICB9O1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhbigpO1xuICAgICAgdGhpcy5lcnJvci5lbWl0KGNyb3BFdmVudCk7XG4gICAgfSk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbWdMb2FkZWQoaW1nKTtcbiAgICAgIGNyb3BFdmVudC53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgIGNyb3BFdmVudC5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgdGhpcy5faXNMb2FkZWRJbWcgPSB0cnVlO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuX25nWm9uZVxuICAgICAgICAgIC5vblN0YWJsZVxuICAgICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NhbGUoMCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KGNyb3BFdmVudCk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2Nyb3BJZkF1dG9Dcm9wKCk7XG4gICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJvdGF0ZShkZWdyZWVzOiBudW1iZXIpIHtcbiAgICBjb25zdCB2YWxpZERlZ3JlZXMgPSB0aGlzLl9yb3RhdGlvbiA9IGNvbnZlcnRUb1ZhbGlkRGVncmVlcyhkZWdyZWVzKTtcbiAgICBjb25zdCBkZWdyZWVzUmFkID0gdmFsaWREZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9pbWdDYW52YXMubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjYW52YXNDbG9uID0gY3JlYXRlQ2FudmFzSW1nKGNhbnZhcyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAvLyBjbGVhclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzQ2xvbi53aWR0aCwgY2FudmFzQ2xvbi5oZWlnaHQpO1xuXG4gICAgLy8gcm90YXRlIGNhbnZhcyBpbWFnZVxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybScsIGByb3RhdGUoJHt2YWxpZERlZ3JlZXN9ZGVnKWApO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNhbnZhcywgJ3RyYW5zZm9ybU9yaWdpbicsIGAke3RoaXMuX2ltZ1JlY3QueGN9cHggJHt0aGlzLl9pbWdSZWN0LnljfXB4IDBgKTtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGNhbnZhcywgJ3dpZHRoJywgYGluaXRpYWxgKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShjYW52YXMsICdoZWlnaHQnLCBgaW5pdGlhbGApO1xuXG4gICAgLy8gc2F2ZSByZWN0XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIHJlbW92ZSByb3RhdGUgc3R5bGVzXG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAndHJhbnNmb3JtT3JpZ2luJyk7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUoY2FudmFzLCAnd2lkdGgnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZShjYW52YXMsICdoZWlnaHQnKTtcblxuICAgIC8vIHNldCB3ICYgaFxuICAgIGNvbnN0IHcgPSBjYW52YXNSZWN0LndpZHRoO1xuICAgIGNvbnN0IGggPSBjYW52YXNSZWN0LmhlaWdodDtcbiAgICBjdHguY2FudmFzLndpZHRoID0gdztcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICAvLyBjbGVhclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG5cbiAgICAvLyB0cmFuc2xhdGUgYW5kIHJvdGF0ZVxuICAgIGN0eC50cmFuc2xhdGUodyAvIDIsIGggLyAyKTtcbiAgICBjdHgucm90YXRlKGRlZ3JlZXNSYWQpO1xuICAgIGN0eC5kcmF3SW1hZ2UoY2FudmFzQ2xvbiwgLWNhbnZhc0Nsb24ud2lkdGggLyAyLCAtY2FudmFzQ2xvbi5oZWlnaHQgLyAyKTtcbiAgICBjb25zdCByb290UmVjdCA9IHRoaXMuX3Jvb3RSZWN0KCk7XG4gICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICB3aWR0aDogdyAqIHRoaXMuX3NjYWwzRml4LFxuICAgICAgaGVpZ2h0OiBoICogdGhpcy5fc2NhbDNGaXgsXG4gICAgICB4OiB4IC0gcm9vdFJlY3QueCxcbiAgICAgIHk6IHkgLSByb290UmVjdC55XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jcm9wSWZBdXRvQ3JvcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbWFnZVNtb290aGluZ1F1YWxpdHkoaW1nOiBIVE1MQ2FudmFzRWxlbWVudCwgY29uZmlnLCBxdWFsaXR5OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgLyoqIENhbGN1bGF0ZSB0b3RhbCBudW1iZXIgb2Ygc3RlcHMgbmVlZGVkICovXG4gICAgbGV0ICBudW1TdGVwcyA9IE1hdGguY2VpbChNYXRoLmxvZyhNYXRoLm1heChpbWcud2lkdGgsIGltZy5oZWlnaHQpIC8gTWF0aC5tYXgoY29uZmlnLmhlaWdodCwgY29uZmlnLndpZHRoKSkgLyBNYXRoLmxvZygyKSkgLSAxO1xuICAgIG51bVN0ZXBzID0gbnVtU3RlcHMgPD0gMCA/IDAgOiBudW1TdGVwcztcblxuICAgIC8qKkFycmF5IHN0ZXBzICovXG4gICAgY29uc3Qgc3RlcHMgPSBBcnJheS5mcm9tKEFycmF5KG51bVN0ZXBzKS5rZXlzKCkpO1xuXG4gICAgLyoqIENvbnRleHQgKi9cbiAgICBjb25zdCBvY3R4ID0gaW1nLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBxID0gKChxdWFsaXR5ICogMTApICoqIG51bVN0ZXBzKSAvICgxMCAqKiBudW1TdGVwcyk7XG5cbiAgICAvKiogSWYgU3RlcHMgPT4gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ICovXG4gICAgaWYgKG51bVN0ZXBzKSB7XG4gICAgICAvKiogU2V0IHNpemUgKi9cbiAgICAgIGNvbnN0IHcgPSBpbWcud2lkdGggKiBxdWFsaXR5O1xuICAgICAgY29uc3QgaCA9IGltZy5oZWlnaHQgKiBxdWFsaXR5O1xuICAgICAgLyoqIE9ubHkgdGhlIG5ldyBpbWcgaXMgc2hvd24uICovXG4gICAgICBvY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcblxuICAgICAgLyoqIFN0ZXBzICovXG4gICAgICAoc3RlcHMgYXMgQXJyYXk8bnVtYmVyPikuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIG9jdHguZHJhd0ltYWdlKGltZyxcbiAgICAgICAgICAwLCAwLFxuICAgICAgICAgIHcsIGhcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0ZXAgZmluYWxcbiAgICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAgICovXG4gICAgY29uc3Qgb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICBjdHggPSBvYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xuICAgIG9jLmhlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAwLCAwLFxuICAgICAgaW1nLndpZHRoICogKHEpLCBpbWcuaGVpZ2h0ICogKHEpLFxuICAgICAgMCwgMCxcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcbiAgICApO1xuICAgIHJldHVybiBvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9wIEltYWdlXG4gICAqIFJlc2l6aW5nICYgY3JvcHBpbmcgaW1hZ2VcbiAgICovXG4gIGNyb3AoY29uZmlnPzogSW1nQ3JvcHBlckNvbmZpZyk6IEltZ0Nyb3BwZXJFdmVudCB7XG4gICAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnID8gbWVyZ2VEZWVwKHt9LCB0aGlzLmNvbmZpZyB8fCBDT05GSUdfREVGQVVMVCwgY29uZmlnKSA6IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHRoaXMuX2ltZ0Nyb3AobmV3Q29uZmlnKTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9pbWdDcm9wKG15Q29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgY29uc3QgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCBpbWdSZWN0ID0gdGhpcy5faW1nUmVjdDtcbiAgICBjb25zdCBsZWZ0ID0gaW1nUmVjdC54YyAtIG15Q29uZmlnLndpZHRoIC8gMjtcbiAgICBjb25zdCB0b3AgPSBpbWdSZWN0LnljIC0gbXlDb25maWcuaGVpZ2h0IC8gMjtcbiAgICBjb25zdCBzY2FsZUZpeCA9IHRoaXMuX3NjYWwzRml4O1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHdpZHRoOiBteUNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogbXlDb25maWcuaGVpZ2h0XG4gICAgfTtcbiAgICBjYW52YXNFbGVtZW50LndpZHRoID0gY29uZmlnLndpZHRoIC8gc2NhbGVGaXg7XG4gICAgY2FudmFzRWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0IC8gc2NhbGVGaXg7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChteUNvbmZpZy5maWxsKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbXlDb25maWcuZmlsbDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XG4gICAgfVxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5faW1nQ2FudmFzLm5hdGl2ZUVsZW1lbnQgYXMgYW55LFxuICAgICAgLShsZWZ0IC8gc2NhbGVGaXgpLCAtKHRvcCAvIHNjYWxlRml4KSxcbiAgICApO1xuICAgIGxldCByZXN1bHQgPSBjYW52YXNFbGVtZW50O1xuICAgIGNvbnN0IGFudGlBbGlhc2VkUSA9IG15Q29uZmlnLmFudGlBbGlhc2VkID8gLjUgOiAxO1xuICAgIGlmIChteUNvbmZpZy5vdXRwdXQgPT09IDApIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCBhbnRpQWxpYXNlZFEpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG15Q29uZmlnLm91dHB1dCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgbXlDb25maWcub3V0cHV0LCBhbnRpQWxpYXNlZFEpO1xuICAgIH1cbiAgICBsZXQgdXJsO1xuICAgIGlmIChteUNvbmZpZy50eXBlKSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGBpbWFnZS8ke215Q29uZmlnLnR5cGV9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IHJlc3VsdC50b0RhdGFVUkwodGhpcy5fZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgICBjb25zdCBjcm9wRXZlbnQgPSB7XG4gICAgICBkYXRhVVJMOiB1cmwsXG4gICAgICBiYXNlNjQ6IHVybCxcbiAgICAgIHR5cGU6IHRoaXMuX2RlZmF1bHRUeXBlIHx8IG15Q29uZmlnLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHdpZHRoOiBjb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHQsXG4gICAgICBvcmlnaW5hbERhdGFVUkw6IHRoaXMuX29yaWdpbmFsSW1nQmFzZTY0LFxuICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICByb3RhdGlvbjogdGhpcy5fcm90YXRpb24sXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB4OiB0aGlzLl9pbWdSZWN0LnhjLFxuICAgICAgICB5OiB0aGlzLl9pbWdSZWN0LnljXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICByZXR1cm4gY3JvcEV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfcm9vdFJlY3QoKTogRE9NUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIH1cbiAgcHJpdmF0ZSBfaW1nQ29udGFpbmVyUmVjdCgpOiBET01SZWN0IHtcbiAgICByZXR1cm4gdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgfVxuXG4gIHByaXZhdGUgX2FyZWFDcm9wcGVyUmVjdCgpOiBET01SZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fY3JvcHBpbmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICB9XG5cbn1cblxuLyoqXG4gKiBjb252ZXJ0VG9WYWxpZERlZ3JlZXMoNDUpID09PSA5MFxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDQwKSA9PT0gMFxuICogY29udmVydFRvVmFsaWREZWdyZWVzKDEwMCkgPT09IDkwXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRUb1ZhbGlkRGVncmVlcyhudW06IG51bWJlcikge1xuICBjb25zdCB2YWwzNjAgPSBsaW1pdE51bShudW0sIDM2MCk7XG4gIGNvbnN0IHZhbDkwID0gbGltaXROdW0odmFsMzYwLnJlc3VsdCwgOTApO1xuICBjb25zdCBzaWduID0gTWF0aC5zaWduKG51bSk7XG4gIGlmICh2YWw5MC5yZXN1bHQgPj0gKDkwIC8gMikpIHtcbiAgICByZXR1cm4gOTAgKiAodmFsOTAucGFydHMgKyAxKSAqIHNpZ247XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDkwICogdmFsOTAucGFydHMgKiBzaWduO1xuICB9XG59XG5cbi8qKlxuICogZGVtbzpcbiAqIGxpbWl0TnVtKDQ1MCwgMzYwKSA9PT0gOTBcbiAqIEBpZ25vcmVcbiAqL1xuZnVuY3Rpb24gbGltaXROdW0obnVtOiBudW1iZXIsIG51bTI6IG51bWJlcikge1xuICBjb25zdCBudW1BYnMgPSBNYXRoLmFicyhudW0pO1xuICBjb25zdCBwYXJ0cyA9IE1hdGguZmxvb3IobnVtQWJzIC8gbnVtMik7XG4gIGxldCByZXN1bHQ6IG51bWJlcjtcbiAgaWYgKHBhcnRzKSB7XG4gICAgcmVzdWx0ID0gbnVtQWJzIC0gKG51bTIgKiBwYXJ0cyk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gbnVtO1xuICB9XG4gIGlmIChudW1BYnMgIT09IG51bSkge1xuICAgIHJlc3VsdCAqPSAtMTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJlc3VsdCxcbiAgICBwYXJ0c1xuICB9O1xufVxuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FudmFzSW1nKGltZzogSFRNTENhbnZhc0VsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50KSB7XG5cbiAgLy8gY3JlYXRlIGEgbmV3IGNhbnZhc1xuICBjb25zdCBuZXdDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY29uc3QgY29udGV4dCA9IG5ld0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIC8vIHNldCBkaW1lbnNpb25zXG4gIG5ld0NhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgbmV3Q2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG5cbiAgLy8gYXBwbHkgdGhlIG9sZCBjYW52YXMgdG8gdGhlIG5ldyBvbmVcbiAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcblxuICAvLyByZXR1cm4gdGhlIG5ldyBjYW52YXNcbiAgcmV0dXJuIG5ld0NhbnZhcztcbn1cblxuZnVuY3Rpb24gZml4KHYsIGRlY2ltYWxQb2ludHM/OiBudW1iZXIpIHtcbiAgcmV0dXJuICtwYXJzZUZsb2F0KHYpLnRvRml4ZWQoZGVjaW1hbFBvaW50cyB8fCAwKTtcbn1cbiIsImltcG9ydCB7IEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEx5SGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmltcG9ydCB7IEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlcyB9IGZyb20gJy4vcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRywgdXNlQ2xhc3M6IEx5SGFtbWVyR2VzdHVyZUNvbmZpZyB9XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5UmVzaXppbmdDcm9wcGluZ0ltYWdlc11cbn0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJMWV9DT01NT05fU1RZTEVTIiwiRXZlbnRFbWl0dGVyIiwibWVyZ2VEZWVwIiwidGFrZSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiUmVuZGVyZXIyIiwiTHlUaGVtZTIiLCJFbGVtZW50UmVmIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJOZ1pvbmUiLCJWaWV3Q2hpbGQiLCJPdXRwdXQiLCJJbnB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiSEFNTUVSX0dFU1RVUkVfQ09ORklHIiwiTHlIYW1tZXJHZXN0dXJlQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztvQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNaLENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQTs7Ozs7OztJQ3RCRCxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFFMUIsSUFBTSxNQUFNLElBQUk7UUFDZCxJQUFJLEVBQUU7WUFDSixxQkFBcUIsRUFBRSxNQUFNO1lBQzdCLGtCQUFrQixFQUFFLE1BQU07WUFDMUIsaUJBQWlCLEVBQUUsTUFBTTtZQUN6QixVQUFVLEVBQUUsTUFBTTtZQUNsQixPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxVQUFV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