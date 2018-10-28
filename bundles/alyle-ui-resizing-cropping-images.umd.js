(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/resizing-cropping-images', ['exports', '@angular/core', '@alyle/ui', '@angular/platform-browser', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui['resizing-cropping-images'] = {}),global.ng.core,global.alyle.ui,global.ng.platformBrowser,global.ng.common));
}(this, (function (exports,core,ui,platformBrowser,common) { 'use strict';

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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
            this.loaded = new core.EventEmitter();
            /**
             * On crop new image
             */
            this.cropped = new core.EventEmitter();
            /**
             * issues an error when the loaded image is not valid
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
            /** get current scale */
            get: /**
             * get current scale
             * @return {?}
             */ function () {
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
                this.defaultType = null;
                if (!this.config.type) {
                    this.defaultType = _img.files[0].type;
                }
                this.isLoaded = false;
                this.isCropped = false;
                fileReader.addEventListener('loadend', function (loadEvent) {
                    /** @type {?} */
                    var originalImageUrl = /** @type {?} */ (( /** @type {?} */(loadEvent.target)).result);
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
                    ( /** @type {?} */(steps)).forEach(function (a, b) {
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
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        selector: 'ly-img-cropper, ly-cropping',
                        template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart($event)\"\n(slide)=\"_move($event)\">\n  <img *ngIf=\"isLoaded\" [src]=\"src\">\n</div>\n<div #_croppingContainer *ngIf=\"isLoaded; else content\" [className]=\"classes.croppingContainer\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.croppContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
                    }] }
        ];
        /** @nocollapse */
        LyResizingCroppingImages.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: ui.LyTheme2 },
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        LyResizingCroppingImages.propDecorators = {
            _imgContainer: [{ type: core.ViewChild, args: ['_imgContainer',] }],
            _croppingContainer: [{ type: core.ViewChild, args: ['_croppingContainer',] }],
            src: [{ type: core.Input }],
            config: [{ type: core.Input }],
            loaded: [{ type: core.Output }],
            cropped: [{ type: core.Output }],
            error: [{ type: core.Output }]
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
    exports.ImageResolution = ImageResolution;
    exports.LyResizingCroppingImages = LyResizingCroppingImages;
    exports.LyResizingCroppingImageModule = LyResizingCroppingImageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BhbHlsZS91aS9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBtZXJnZURlZXAsIExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgaW1nQ29udGFpbmVyOiB7XG4gICAgY3Vyc29yOiAnbW92ZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgJyYgPiBpbWcnOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfVxuICB9LFxuICBjcm9wcGluZ0NvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBib3hTaGFkb3c6ICcwIDAgMCAyMDAwMHB4IHJnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgJyY6YmVmb3JlLCAmOmFmdGVyJzoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgY29udGVudDogYCcnYCxcbiAgICB9LFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9LFxuICAgICcmOmFmdGVyJzoge1xuICAgICAgYm9yZGVyOiAnc29saWQgMnB4IHJnYigyNTUsIDI1NSwgMjU1KSdcbiAgICB9XG4gIH0sXG4gIGNyb3BwQ29udGVudDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgJyYsICYgPiBpbnB1dCc6IExZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAnJiAqOm5vdChpbnB1dCknOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgICcmID4gaW5wdXQnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzQ29uZmlnIHtcbiAgLyoqIENyb3BwZXIgYXJlYSB3aWR0aCovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKiBDcm9wcGVyIGFyZWEgaGVpZ2h0Ki9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBJZiB0aGlzIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmV3IGltYWdlIHdpbGwgYmUgYXV0b21hdGljYWxseSBkZWZpbmVkICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yKCBkZWZhdWx0OiBudWxsKSwgaWYgaXMgbnVsbCBpbiBwbmcgaXMgdHJhbnNwYXJlbnQgYnV0IG5vdCBpbiBqcGcgKi9cbiAgZmlsbD86IHN0cmluZyB8IG51bGw7XG4gIC8qKiBTZXQgYW50aS1hbGlhc2VkKCBkZWZhdWx0OiB0cnVlKSAqL1xuICBhbnRpQWxpYXNlZD86IGJvb2xlYW47XG4gIG91dHB1dD86IHtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9IHwgSW1hZ2VSZXNvbHV0aW9uIHwgSW1nUmVzb2x1dGlvbjtcbn1cbmV4cG9ydCB0eXBlIEltZ0Nyb3BwZXJDb25maWcgPSBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWc7XG5cbi8qKiBJbWFnZSBvdXRwdXQgKi9cbmV4cG9ydCBlbnVtIEltZ1Jlc29sdXRpb24ge1xuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xuICBEZWZhdWx0LFxuICAvKiogT25seSBjcm9wcGluZyAqL1xuICBPcmlnaW5hbEltYWdlXG59XG4vKiogQGlnbm9yZSBAZGVwcmVjYXRlZCwgdXNlIGBJbWdSZXNvbHV0aW9uYCBpbnN0ZWFkICovXG5leHBvcnQgZW51bSBJbWFnZVJlc29sdXRpb24ge1xuICAvKiogUmVzaXppbmcgJiBjcm9wcGluZyAqL1xuICBEZWZhdWx0LFxuICAvKiogT25seSBjcm9wcGluZyAqL1xuICBPcmlnaW5hbEltYWdlXG59XG5cbi8qKiBAZGVwcmVjYXRlZCwgdXNlIGBJbWdDcm9wcGVyRXZlbnRgIGluc3RlYWQgKi9cbmV4cG9ydCB0eXBlIENyb3BwZWRJbWFnZSA9IEltZ0Nyb3BwZXJFdmVudDtcbmV4cG9ydCBpbnRlcmZhY2UgSW1nQ3JvcHBlckV2ZW50IHtcbiAgLyoqIEBkZXByZWNhdGVkLCB1c2UgYGJhc2U2NGAgaW5zdGVhZCAqL1xuICBiYXNlNjRJbWFnZTogc3RyaW5nO1xuICBiYXNlNjQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVN0YXRlIHtcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzQ3JvcDogYm9vbGVhbjtcbn1cbmNvbnN0IENPTkZJR19ERUZBVUxUID0gPEltZ0Nyb3BwZXJDb25maWc+e1xuICB3aWR0aDogMjUwLFxuICBoZWlnaHQ6IDIwMCxcbiAgb3V0cHV0OiBJbWdSZXNvbHV0aW9uLkRlZmF1bHQsXG4gIGFudGlBbGlhc2VkOiB0cnVlXG59O1xuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICdseS1pbWctY3JvcHBlciwgbHktY3JvcHBpbmcnLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy5odG1sJ1xuIH0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcmVzdWx0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbGVOYW1lOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBwcml2YXRlIG9mZnNldDoge3g6IG51bWJlciwgeTogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyfTtcbiAgcHJpdmF0ZSBfc2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWluU2NhbGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnO1xuXG4gIEBWaWV3Q2hpbGQoJ19pbWdDb250YWluZXInKSBfaW1nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfY3JvcHBpbmdDb250YWluZXInKSBfY3JvcHBpbmdDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIC8qKiBAZGVwcmVjYXRlZCBAaWdub3JlICovXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHZhbDogSW1nQ3JvcHBlckNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IG1lcmdlRGVlcCh7fSwgQ09ORklHX0RFRkFVTFQsIHZhbCk7XG4gIH1cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG4gIC8qKiBnZXQgY3VycmVudCBzY2FsZSAqL1xuICBnZXQgc2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYWxlO1xuICB9XG4gIC8qKiBnZXQgbWluIHNjYWxlICovXG4gIGdldCBtaW5TY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluU2NhbGU7XG4gIH1cbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzQ3JvcHBlZDogYm9vbGVhbjtcblxuICAvKiogT24gbG9hZGVkIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG4gIC8qKiBPbiBjcm9wIG5ldyBpbWFnZSAqL1xuICBAT3V0cHV0KCkgY3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1nQ3JvcHBlckV2ZW50PigpO1xuICAvKiogaXNzdWVzIGFuIGVycm9yIHdoZW4gdGhlIGxvYWRlZCBpbWFnZSBpcyBub3QgdmFsaWQgKi9cbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWdDcm9wcGVyRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0VHlwZTogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBwcml2YXRlIF9pbWdMb2FkZWQoaW1nRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCkge1xuICAgIGlmIChpbWdFbGVtZW50KSB7XG4gICAgICB0aGlzLl9pbWcgPSBpbWdFbGVtZW50O1xuICAgICAgLyoqIHNldCB6b29tIHNjYWxlICovXG4gICAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoIC8gdGhpcy5faW1nLndpZHRoICogMTAwLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCAvIHRoaXMuX2ltZy5oZWlnaHQgKiAxMDBcbiAgICAgIH07XG4gICAgICB0aGlzLl9taW5TY2FsZSA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwO1xuICAgICAgdGhpcy5maXQoKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U3R5bGVzRm9yQ29udEltZyhuZXdTdHlsZXM6IHtcbiAgICB3aWR0aDogc3RyaW5nO1xuICAgIGhlaWdodDogc3RyaW5nO1xuICAgIHRyYW5zZm9ybTogc3RyaW5nO1xuICB9KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3U3R5bGVzKSB7XG4gICAgICBpZiAobmV3U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIGtleSwgbmV3U3R5bGVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlbGVjdElucHV0RXZlbnQoaW1nOiBFdmVudCkge1xuICAgIGNvbnN0IF9pbWcgPSBpbWcudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKF9pbWcuZmlsZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHRoaXMuX2ZpbGVOYW1lID0gX2ltZy52YWx1ZS5yZXBsYWNlKC8uKihcXC98XFxcXCkvLCAnJyk7XG5cbiAgICAvKiogU2V0IHR5cGUgKi9cbiAgICB0aGlzLmRlZmF1bHRUeXBlID0gbnVsbDtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnR5cGUpIHtcbiAgICAgIHRoaXMuZGVmYXVsdFR5cGUgPSBfaW1nLmZpbGVzWzBdLnR5cGU7XG4gICAgfVxuICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IGZhbHNlO1xuICAgIGZpbGVSZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIChsb2FkRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2VVcmwgPSAobG9hZEV2ZW50LnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQgYXMgc3RyaW5nO1xuICAgICAgdGhpcy5fc2V0SW1hZ2VVcmwob3JpZ2luYWxJbWFnZVVybCk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChfaW1nLmZpbGVzWzBdKTtcbiAgfVxuXG4gIC8qKiBTZXQgdGhlIHNpemUgb2YgdGhlIGltYWdlLCB0aGUgdmFsdWVzIGNhbiBiZSAwIGJldHdlZW4gMSwgd2hlcmUgMSBpcyB0aGUgb3JpZ2luYWwgc2l6ZSAqL1xuICBzZXRTY2FsZShzaXplOiBudW1iZXIpIHtcbiAgICAvLyBmaXggbWluIHNjYWxlXG4gICAgc2l6ZSA9IHNpemUgPiB0aGlzLm1pblNjYWxlICYmIHNpemUgPD0gMSA/IHNpemUgOiB0aGlzLm1pblNjYWxlO1xuICAgIHRoaXMuX3NjYWxlID0gc2l6ZTtcbiAgICBzaXplID0gc2l6ZSAqIDEwMDtcbiAgICBjb25zdCBpbml0aWFsSW1nID0gdGhpcy5faW1nO1xuICAgIGNvbnN0IHdpZHRoID0gZml4ZWROdW0oaW5pdGlhbEltZy53aWR0aCAqIHNpemUgLyAxMDApO1xuICAgIGNvbnN0IGhlaWdodCA9IGZpeGVkTnVtKGluaXRpYWxJbWcuaGVpZ2h0ICogc2l6ZSAvIDEwMCk7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIGlmICghdGhpcy5pc0xvYWRlZCkge1xuICAgICAgdGhpcy5fc2V0U3R5bGVzRm9yQ29udEltZyh7XG4gICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLmN1c3RvbUNlbnRlcih3aWR0aCwgaGVpZ2h0KVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGltZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgIHg6IChob3N0UmVjdC53aWR0aCAvIDIpIC0gKGltZ0NvbnRhaW5lclJlY3QueCAtIGhvc3RSZWN0LngpLCAvLyDDosKcwpNcbiAgICAgICAgeTogKGhvc3RSZWN0LmhlaWdodCAvIDIpIC0gKGltZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0LnkpLCAvLyDDosKcwpNcbiAgICAgICAgbGVmdDogaW1nQ29udGFpbmVyUmVjdC5sZWZ0IC0gaG9zdFJlY3QueCwgLy8gw6LCnMKTXG4gICAgICAgIHRvcDogaW1nQ29udGFpbmVyUmVjdC50b3AgLSBob3N0UmVjdC55IC8vIMOiwpzCk1xuICAgICAgfTtcbiAgICAgIHRoaXMuX3NldFN0eWxlc0ZvckNvbnRJbWcoe1xuICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke2hlaWdodH1weGAsXG4gICAgICB9IGFzIGFueSk7XG4gICAgICB0aGlzLl9tb3ZlKHtcbiAgICAgICAgc3JjRXZlbnQ6IHt9LFxuICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICB4OiAoaG9zdFJlY3Qud2lkdGggLyAyIC0gKHRoaXMub2Zmc2V0LnggKiAod2lkdGggLyBpbWdDb250YWluZXJSZWN0LndpZHRoKSkpICsgaG9zdFJlY3QueCArIHRoaXMub2Zmc2V0LngsXG4gICAgICAgICAgeTogKGhvc3RSZWN0LmhlaWdodCAvIDIgLSAodGhpcy5vZmZzZXQueSAqIChoZWlnaHQgLyBpbWdDb250YWluZXJSZWN0LmhlaWdodCkpKSArIGhvc3RSZWN0LnkgKyB0aGlzLm9mZnNldC55XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGN1c3RvbUNlbnRlcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBsID0gKHJvb3Qub2Zmc2V0V2lkdGggLSB3aWR0aCkgLyAyO1xuICAgIGNvbnN0IHIgPSAocm9vdC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICByZXR1cm4gYHRyYW5zbGF0ZTNkKCR7bH1weCwgJHtyfXB4LCAwKWA7XG4gIH1cblxuICAvKiogQGlnbm9yZSBAZGVwcmVjYXRlZCwgaW5zdGVhZCB1c2Ugc2V0U2NhbGUoMSkgKi9cbiAgJzE6MScoKSB7XG4gICAgdGhpcy5zZXRTY2FsZSgxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBanVzdGFyIGEgbGEgcGFudGFsbGFcbiAgICovXG4gIGZpdFRvU2NyZWVuKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IG1pbiA9IHtcbiAgICAgIHdpZHRoOiBjb250YWluZXIub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lci5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICB3aWR0aDogdGhpcy5faW1nLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLl9pbWcuaGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcbiAgICAgIHdpZHRoOiBtaW4ud2lkdGggLyBzaXplLndpZHRoICogMTAwLFxuICAgICAgaGVpZ2h0OiBtaW4uaGVpZ2h0IC8gc2l6ZS5oZWlnaHQgKiAxMDBcbiAgICB9O1xuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgubWF4KG1pblNjYWxlLndpZHRoLCBtaW5TY2FsZS5oZWlnaHQpIC8gMTAwO1xuICAgIHRoaXMuc2V0U2NhbGUocmVzdWx0KTtcbiAgfVxuXG4gIGZpdCgpIHtcbiAgICB0aGlzLnNldFNjYWxlKDApO1xuICB9XG5cbiAgX21vdmVTdGFydChldmVudCkge1xuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICBjb25zdCBpbWdDb250YWluZXJSZWN0ID0gdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgIHg6IGV2ZW50LmNlbnRlci54IC0gaW1nQ29udGFpbmVyUmVjdC54LFxuICAgICAgeTogZXZlbnQuY2VudGVyLnkgLSBpbWdDb250YWluZXJSZWN0LnksXG4gICAgICBsZWZ0OiBpbWdDb250YWluZXJSZWN0LmxlZnQgLSBob3N0UmVjdC54LFxuICAgICAgdG9wOiBpbWdDb250YWluZXJSZWN0LnRvcCAtIGhvc3RSZWN0LnlcbiAgICB9O1xuICB9XG4gIF9tb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHgsIHk7XG4gICAgY29uc3QgaG9zdFJlY3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lclJlY3QgPSB0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICAgIGNvbnN0IGNyb3BwaW5nQ29udGFpbmVyUmVjdCA9IHRoaXMuX2Nyb3BwaW5nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcblxuICAgIC8vIExpbWl0IGZvciBsZWZ0XG4gICAgaWYgKGV2ZW50LmNlbnRlci54IC0gdGhpcy5vZmZzZXQueCA+PSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueCkge1xuICAgICAgeCA9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54IC0gaG9zdFJlY3QueDtcbiAgICB9XG4gICAgLy8gTGltaXQgZm9yIHRvcFxuICAgIGlmIChldmVudC5jZW50ZXIueSAtIHRoaXMub2Zmc2V0LnkgPj0gY3JvcHBpbmdDb250YWluZXJSZWN0LnkpIHtcbiAgICAgIHkgPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0Lnk7XG4gICAgfVxuICAgIC8vIExpbWl0IGZvciByaWdodFxuICAgIGlmIChldmVudC5jZW50ZXIueCAtIHRoaXMub2Zmc2V0LnggKyBpbWdDb250YWluZXJSZWN0LndpZHRoIDw9IGNyb3BwaW5nQ29udGFpbmVyUmVjdC54ICsgY3JvcHBpbmdDb250YWluZXJSZWN0LndpZHRoKSB7XG4gICAgICB4ID0gY3JvcHBpbmdDb250YWluZXJSZWN0LnggLSBob3N0UmVjdC54IC0gaW1nQ29udGFpbmVyUmVjdC53aWR0aCArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC53aWR0aDtcbiAgICB9XG4gICAgLy8gTGltaXQgZm9yIGJvdHRvbVxuICAgIGlmIChldmVudC5jZW50ZXIueSAtIHRoaXMub2Zmc2V0LnkgKyBpbWdDb250YWluZXJSZWN0LmhlaWdodCA8PSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueSArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC5oZWlnaHQpIHtcbiAgICAgIHkgPSBjcm9wcGluZ0NvbnRhaW5lclJlY3QueSAtIGhvc3RSZWN0LnkgLSBpbWdDb250YWluZXJSZWN0LmhlaWdodCArIGNyb3BwaW5nQ29udGFpbmVyUmVjdC5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gV2hlbiBwcmVzcyBzaGlmdEtleVxuICAgIGlmIChldmVudC5zcmNFdmVudC5zaGlmdEtleSkge1xuICAgICAgaWYgKE1hdGguYWJzKGV2ZW50LmRlbHRhWCkgPT09IE1hdGgubWF4KE1hdGguYWJzKGV2ZW50LmRlbHRhWCksIE1hdGguYWJzKGV2ZW50LmRlbHRhWSkpKSB7XG4gICAgICAgIHkgPSB0aGlzLm9mZnNldC50b3A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ID0gdGhpcy5vZmZzZXQubGVmdDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHggPT09IHVuZGVmaW5lZCkgeyB4ID0gZXZlbnQuY2VudGVyLnggLSBob3N0UmVjdC54IC0gKHRoaXMub2Zmc2V0LngpOyB9XG4gICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgeyB5ID0gZXZlbnQuY2VudGVyLnkgLSBob3N0UmVjdC55IC0gKHRoaXMub2Zmc2V0LnkpOyB9XG5cbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKHtcbiAgICAgIHdpZHRoOiB0aGlzLl9pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsIDApYFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByb3VuZE51bWJlcihudW06IG51bWJlcikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIDEwMDAwMCkgLyAxMDAwMDA7XG4gIH1cbiAgLyoqKyAqL1xuICB6b29tSW4oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuX3NjYWxlICsgLjA1KTtcbiAgICBpZiAoc2NhbGUgPiAwICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICAvKiotICovXG4gIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuX3NjYWxlIC0gLjA1KTtcbiAgICBpZiAoc2NhbGUgPiB0aGlzLm1pblNjYWxlICYmIHNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpdCgpO1xuICAgIH1cbiAgfVxuICBjZW50ZXIoKSB7XG4gICAgY29uc3QgaW1nID0gdGhpcy5faW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgd2lkdGg6IGAke2ltZy53aWR0aH1weGAsXG4gICAgICBoZWlnaHQ6IGAke2ltZy5oZWlnaHR9cHhgLFxuICAgICAgdHJhbnNmb3JtOiB0aGlzLmN1c3RvbUNlbnRlcihpbWcud2lkdGgsIGltZy5oZWlnaHQpXG4gICAgfTtcbiAgICB0aGlzLl9zZXRTdHlsZXNGb3JDb250SW1nKG5ld1N0eWxlcyk7XG4gIH1cbiAgcHJpdmF0ZSBfc2V0SW1hZ2VVcmwoc3JjOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNyYyA9IHNyYztcbiAgICBpZiAoIXNyYykgeyByZXR1cm47IH1cbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2U7XG4gICAgY29uc3QgY3JvcEV2ZW50OiBJbWdDcm9wcGVyRXZlbnQgPSB7XG4gICAgICBuYW1lOiB0aGlzLl9maWxlTmFtZSxcbiAgICAgIHR5cGU6IHRoaXMuZGVmYXVsdFR5cGUsXG4gICAgICBiYXNlNjQ6IG51bGwsXG4gICAgICBiYXNlNjRJbWFnZTogbnVsbCxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgaGVpZ2h0OiBudWxsXG4gICAgfTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICAgIHRoaXMuZXJyb3IuZW1pdChjcm9wRXZlbnQpO1xuICAgIH0pO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgdGhpcy5faW1nTG9hZGVkKGltZyk7XG4gICAgICBjcm9wRXZlbnQud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICBjcm9wRXZlbnQuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgIHRoaXMubG9hZGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIG1heCguLi52YWx1ZXM6IG51bWJlcltdKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLnZhbHVlcyk7XG4gIH1cblxuICBwcml2YXRlIGltYWdlU21vb3RoaW5nUXVhbGl0eShpbWc6IEhUTUxDYW52YXNFbGVtZW50LCBjb25maWcsIHF1YWxpdHk6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICAvKiogQ2FsY3VsYXRlIHRvdGFsIG51bWJlciBvZiBzdGVwcyBuZWVkZWQgKi9cbiAgICBsZXQgIG51bVN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKHRoaXMubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCkgLyB0aGlzLm1heChjb25maWcuaGVpZ2h0LCBjb25maWcud2lkdGgpKSAvIE1hdGgubG9nKDIpKSAtIDE7XG4gICAgbnVtU3RlcHMgPSBudW1TdGVwcyA8PSAwID8gMCA6IG51bVN0ZXBzO1xuXG4gICAgLyoqQXJyYXkgc3RlcHMgKi9cbiAgICBjb25zdCBzdGVwcyA9IEFycmF5LmZyb20oQXJyYXkobnVtU3RlcHMpLmtleXMoKSk7XG5cbiAgICAvKiogQ29udGV4dCAqL1xuICAgIGNvbnN0IG9jdHggPSBpbWcuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGNvbnN0IHEgPSBNYXRoLnBvdyhxdWFsaXR5ICogMTAsIG51bVN0ZXBzKSAvIE1hdGgucG93KDEwLCBudW1TdGVwcyk7XG5cbiAgICAvKiogSWYgU3RlcHMgPT4gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ICovXG4gICAgaWYgKG51bVN0ZXBzKSB7XG4gICAgICAvKiogU2V0IHNpemUgKi9cbiAgICAgIGNvbnN0IHcgPSBpbWcud2lkdGggKiBxdWFsaXR5O1xuICAgICAgY29uc3QgaCA9IGltZy5oZWlnaHQgKiBxdWFsaXR5O1xuICAgICAgLyoqIE9ubHkgdGhlIG5ldyBpbWcgaXMgc2hvd24uICovXG4gICAgICBvY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb3B5JztcblxuICAgICAgLyoqIFN0ZXBzICovXG4gICAgICAoc3RlcHMgYXMgQXJyYXk8bnVtYmVyPikuZm9yRWFjaCgoYSwgYikgPT4ge1xuICAgICAgICBvY3R4LmRyYXdJbWFnZShpbWcsXG4gICAgICAgICAgMCwgMCxcbiAgICAgICAgICB3LCBoXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGVwIGZpbmFsXG4gICAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxuICAgICAqL1xuICAgIGNvbnN0IG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXG4gICAgY3R4ID0gb2MuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBvYy53aWR0aCA9IGNvbmZpZy53aWR0aDtcbiAgICBvYy5oZWlnaHQgPSBjb25maWcuaGVpZ2h0O1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLFxuICAgICAgMCwgMCxcbiAgICAgIGltZy53aWR0aCAqIChxKSwgaW1nLmhlaWdodCAqIChxKSxcbiAgICAgIDAsIDAsXG4gICAgICBvYy53aWR0aCwgb2MuaGVpZ2h0XG4gICAgKTtcbiAgICByZXR1cm4gb2M7XG4gIH1cblxuICAvKipcbiAgICogQ3JvcCBJbWFnZVxuICAgKiBSZXNpemluZyAmIGNyb3BwaW5nIGltYWdlXG4gICAqL1xuICBjcm9wKGNvbmZpZz86IEltZ0Nyb3BwZXJDb25maWcpOiBJbWdDcm9wcGVyRXZlbnQge1xuICAgIGNvbnN0IG5ld0NvbmZpZyA9IGNvbmZpZyA/IG1lcmdlRGVlcCh7fSwgdGhpcy5jb25maWcgfHwgQ09ORklHX0RFRkFVTFQsIGNvbmZpZykgOiB0aGlzLmNvbmZpZztcbiAgICBjb25zdCBjcm9wRXZlbnQgPSB0aGlzLmNyb3BwKG5ld0NvbmZpZyk7XG4gICAgcmV0dXJuIGNyb3BFdmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlIEBkZXByZWNhdGVkLCB1c2UgY3JvcCgpIGluc3RlYWRcbiAgICovXG4gIGNyb3BwKG15Q29uZmlnOiBJbWdDcm9wcGVyQ29uZmlnKSB7XG4gICAgY29uc3QgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5fY3JvcHBpbmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0O1xuICAgIGNvbnN0IGltZyA9IHRoaXMuX2ltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIENsaWVudFJlY3Q7XG4gICAgY29uc3QgbGVmdCA9IHJlY3QubGVmdCAtIGltZy5sZWZ0O1xuICAgIGNvbnN0IHRvcCA9IHJlY3QudG9wIC0gaW1nLnRvcDtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICB3aWR0aDogbXlDb25maWcud2lkdGgsXG4gICAgICBoZWlnaHQ6IG15Q29uZmlnLmhlaWdodFxuICAgIH07XG4gICAgY2FudmFzRWxlbWVudC53aWR0aCA9IGNvbmZpZy53aWR0aCAvIHRoaXMuX3NjYWxlO1xuICAgIGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gY29uZmlnLmhlaWdodCAvIHRoaXMuX3NjYWxlO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAobXlDb25maWcuZmlsbCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG15Q29uZmlnLmZpbGw7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xuICAgIH1cbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltZyxcbiAgICAgIC0obGVmdCAvIHRoaXMuX3NjYWxlKSwgLSh0b3AgLyB0aGlzLl9zY2FsZSksXG4gICAgKTtcbiAgICBsZXQgcmVzdWx0ID0gY2FudmFzRWxlbWVudDtcbiAgICBjb25zdCBhbnRpQWxpYXNlZFEgPSBteUNvbmZpZy5hbnRpQWxpYXNlZCA/IC41IDogMTtcbiAgICBpZiAobXlDb25maWcub3V0cHV0ID09PSAwKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIGNvbmZpZywgYW50aUFsaWFzZWRRKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBteUNvbmZpZy5vdXRwdXQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIG15Q29uZmlnLm91dHB1dCwgYW50aUFsaWFzZWRRKTtcbiAgICB9XG4gICAgbGV0IHVybDtcbiAgICBpZiAobXlDb25maWcudHlwZSkge1xuICAgICAgdXJsID0gcmVzdWx0LnRvRGF0YVVSTChgaW1hZ2UvJHtteUNvbmZpZy50eXBlfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKHRoaXMuZGVmYXVsdFR5cGUpO1xuICAgIH1cbiAgICB0aGlzLnJlc3VsdCA9ICh1cmwpO1xuICAgIGNvbnN0IGNyb3BFdmVudCA9IHtcbiAgICAgIGJhc2U2NEltYWdlOiB1cmwsXG4gICAgICBiYXNlNjQ6IHVybCxcbiAgICAgIHR5cGU6IHRoaXMuZGVmYXVsdFR5cGUgfHwgbXlDb25maWcudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMuX2ZpbGVOYW1lLFxuICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcbiAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodFxuICAgIH07XG4gICAgdGhpcy5jcm9wcGVkLmVtaXQoY3JvcEV2ZW50KTtcbiAgICB0aGlzLmlzQ3JvcHBlZCA9IHRydWU7XG4gICAgcmV0dXJuIGNyb3BFdmVudDtcbiAgfVxufVxuXG4vKiogQGlnbm9yZSAqL1xuY29uc3QgZml4ZWROdW0gPSAobnVtOiBudW1iZXIpID0+IHBhcnNlRmxvYXQobnVtLnRvRml4ZWQoMCkpO1xuIiwiaW1wb3J0IHsgSEFNTUVSX0dFU1RVUkVfQ09ORklHIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFseWxlL3VpJztcblxuaW1wb3J0IHsgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzIH0gZnJvbSAnLi9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5UmVzaXppbmdDcm9wcGluZ0ltYWdlc10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLCB1c2VDbGFzczogTHlIYW1tZXJHZXN0dXJlQ29uZmlnIH1cbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VzXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkxZX0NPTU1PTl9TVFlMRVMiLCJFdmVudEVtaXR0ZXIiLCJtZXJnZURlZXAiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIlJlbmRlcmVyMiIsIkx5VGhlbWUyIiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwiVmlld0NoaWxkIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkhBTU1FUl9HRVNUVVJFX0NPTkZJRyIsIkx5SGFtbWVyR2VzdHVyZUNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFlTyxJQUFJLFFBQVEsR0FBRztRQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1lBQ0QsT0FBTyxDQUFDLENBQUM7U0FDWixDQUFB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