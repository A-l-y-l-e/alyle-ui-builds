(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/resizing-cropping-images', ['exports', '@angular/core', 'rxjs', '@angular/common', '@angular/forms'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui['resizing-cropping-images'] = {}),global.ng.core,global.rxjs,global.ng.common,global.ng.forms));
}(this, (function (exports,core,rxjs,common,forms) { 'use strict';

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
        output: ImageResolution.Default
    });
    var LyResizingCroppingImages = /** @class */ (function () {
        function LyResizingCroppingImages(elementRef, cd) {
            var _this = this;
            this.elementRef = elementRef;
            this.cd = cd;
            this.img = new rxjs.BehaviorSubject(null);
            this._src = new rxjs.BehaviorSubject(null);
            this.config = CONFIG_DEFAULT;
            /**
             * On loaded new image
             */
            this.loaded = new core.EventEmitter();
            /**
             * On crop new image
             */
            this.cropped = new core.EventEmitter();
            /**
             * On error new image
             */
            this.error = new core.EventEmitter();
            this._dragData = new rxjs.Subject();
            this.zoomScale = .1;
            this.dragData = this._dragData.asObservable();
            /** @type {?} */
            var img = this.img;
            img.subscribe(function (imgElement) {
                if (imgElement) {
                    _this._img = imgElement;
                    /** *
                     * set zoom scale
                      @type {?} */
                    var minScale = {
                        width: _this.config.width / _this._img.width * 100,
                        height: _this.config.height / _this._img.height * 100
                    };
                    _this.zoomScale = Math.max(minScale.width, minScale.height) / 100;
                    _this.fit();
                    _this.cd.markForCheck();
                }
            });
        }
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
                this.fileName = _img.value.replace(/.*(\/|\\)/, '');
                /** Set type */
                this.defaultType = null;
                if (!this.config.type) {
                    this.defaultType = _img.files[0].type;
                }
                this.isLoaded = false;
                this.isCropped = false;
                this._dragData.next(null);
                fileReader.addEventListener('loadend', function (loadEvent) {
                    /** @type {?} */
                    var originalImageUrl = ( /** @type {?} */(loadEvent.target)).result;
                    _this.setImageUrl(originalImageUrl);
                    _this.cd.markForCheck();
                });
                fileReader.readAsDataURL(_img.files[0]);
            };
        /**
         * @param {?} num
         * @return {?}
         */
        LyResizingCroppingImages.prototype.fixedNum = /**
         * @param {?} num
         * @return {?}
         */
            function (num) {
                return parseFloat(num.toFixed(0));
            };
        /**
         * @param {?} size
         * @return {?}
         */
        LyResizingCroppingImages.prototype.setScale = /**
         * @param {?} size
         * @return {?}
         */
            function (size) {
                // if (!(size > 0 && size <= 1)) { return; }
                this.scale = size;
                size = size * 100;
                /** @type {?} */
                var img = this.imgContainer.nativeElement.firstElementChild;
                /** @type {?} */
                var initialImg = this._img;
                /** @type {?} */
                var width = this.fixedNum(initialImg.width * size / 100);
                /** @type {?} */
                var height = this.fixedNum(initialImg.height * size / 100);
                this._dragData.next({
                    width: width + "px",
                    height: height + "px",
                    transform: this.customCenter(width, height)
                });
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
                var w = (root.offsetWidth - width) / 2;
                /** @type {?} */
                var h = (root.offsetHeight - height) / 2;
                return "translate3d(" + w + "px, " + h + "px, 0)";
            };
        /**
         * @return {?}
         */
        LyResizingCroppingImages.prototype['1:1'] = /**
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
                // if (result >= 1) {
                // this.setScale(1);
                // } else {
                this.setScale(result);
                // }
            };
        /**
         * @return {?}
         */
        LyResizingCroppingImages.prototype.fit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var minScale = {
                    width: this.config.width / this._img.width * 100,
                    height: this.config.height / this._img.height * 100
                };
                this.setScale(Math.max(minScale.width, minScale.height) / 100);
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
                this.eventDirection = null;
                /** @type {?} */
                var rect = this.imgContainer.nativeElement.getBoundingClientRect();
                /** @type {?} */
                var hostRect = this.elementRef.nativeElement.getBoundingClientRect();
                /** @type {?} */
                var target;
                if (event.type === 'touchstart') {
                    target = {
                        x: event.targetTouches[0].clientX,
                        y: event.targetTouches[0].clientY
                    };
                }
                else {
                    target = {
                        x: event.center.x,
                        y: event.center.y
                    };
                }
                this.offset = {
                    x: event.center.x - rect.x,
                    y: event.center.y - rect.y,
                    left: ( /** @type {?} */(rect)).left - hostRect.x,
                    top: ( /** @type {?} */(rect)).top - hostRect.y
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
                if (event.additionalEvent) {
                    this.eventDirection = event.additionalEvent;
                }
                /** @type {?} */
                var x;
                /** @type {?} */
                var y;
                /** @type {?} */
                var hostRect = this.elementRef.nativeElement.getBoundingClientRect();
                /** @type {?} */
                var rect = this.imgContainer.nativeElement.getBoundingClientRect();
                if (event.srcEvent.shiftKey) {
                    // if (this.eventDirection === 'panleft' || this.eventDirection === 'panright') {
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
                this._dragData.next({
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
                var scale = this.roundNumber(this.scale + .05);
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
                var scale = this.roundNumber(this.scale - .05);
                if (scale > this.zoomScale && scale <= 1) {
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
                var root = /** @type {?} */ (this.elementRef.nativeElement);
                /** @type {?} */
                var w = (root.offsetWidth - img.width) / 2;
                /** @type {?} */
                var h = (root.offsetHeight - img.height) / 2;
                /** @type {?} */
                var result = {
                    width: img.width + "px",
                    height: img.height + "px",
                    transform: this.customCenter(img.width, img.height)
                };
                this._dragData.next(result);
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
                img.src = src;
                img.addEventListener('error', function (err) {
                    _this.error.emit(null);
                });
                img.addEventListener('load', function () {
                    _this.img.next(img);
                    _this.loaded.emit(null);
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
         * @return {?}
         */
        LyResizingCroppingImages.prototype.crop = /**
         * Crop Image
         * Resizing & cropping image
         * @return {?}
         */
            function () {
                return {
                    base64Image: this.cropp(),
                    type: this.defaultType || this.config.type
                };
            };
        /**
         * Deprecated, use crop() instead
         */
        /**
         * Deprecated, use crop() instead
         * @return {?}
         */
        LyResizingCroppingImages.prototype.cropp = /**
         * Deprecated, use crop() instead
         * @return {?}
         */
            function () {
                /** @type {?} */
                var myConfig = Object.assign({}, CONFIG_DEFAULT, this.config);
                /** @type {?} */
                var canvasElement = document.createElement('canvas');
                /** @type {?} */
                var rect = /** @type {?} */ (this.croppingContainer.nativeElement.getBoundingClientRect());
                /** @type {?} */
                var img = /** @type {?} */ (this.imgContainer.nativeElement.firstElementChild.getBoundingClientRect());
                /** @type {?} */
                var left = (rect.left - img.left);
                /** @type {?} */
                var top = (rect.top - img.top);
                /** @type {?} */
                var config = {
                    width: myConfig.width,
                    height: myConfig.height
                };
                /** @type {?} */
                var configCanvas = {
                    width: this._img.width,
                    height: this._img.height
                };
                canvasElement.width = config.width / this.scale;
                canvasElement.height = config.height / this.scale;
                /** @type {?} */
                var ctx = canvasElement.getContext('2d');
                if (myConfig.fill) {
                    ctx.fillStyle = myConfig.fill;
                    ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
                }
                ctx.drawImage(this._img, -(left / this.scale), -(top / this.scale));
                /** @type {?} */
                var result = canvasElement;
                if (myConfig.output === 0) {
                    result = this.imageSmoothingQuality(result, config, 0.5);
                }
                else if (typeof myConfig.output === 'object') {
                    result = this.imageSmoothingQuality(result, myConfig.output, 0.5);
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
                this.cropped.emit({
                    base64Image: url,
                    type: this.defaultType || myConfig.type
                });
                this.isCropped = true;
                return url;
            };
        LyResizingCroppingImages.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        selector: 'ly-cropping',
                        styles: [":host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;overflow:hidden;position:relative;justify-content:center;align-items:center}.ly-img-container{cursor:move;position:absolute;top:0;left:0}.ly-img-container img{width:100%;height:100%;pointer-events:none}.ly-cropping-container{position:absolute;pointer-events:none;box-shadow:0 0 0 20000px rgba(0,0,0,.29)}.ly-cropping-container::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;border:2px solid #fff}.ly-cropp-content{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;right:0;bottom:0}.ly-cropp-content /deep/ :not(input){pointer-events:none}.ly-cropp-content input{position:absolute;background:0 0;opacity:0;top:0;left:0;right:0;bottom:0;width:100%;height:100%}"],
                        template: "<div class=\"ly-img-container\" #_imgContainer\n(panstart)=\"_moveStart($event)\"\n(pan)=\"_move($event)\"\n[ngStyle]=\"dragData | async\">\n  <img *ngIf=\"isLoaded\"\n  [src]=\"src\">\n</div>\n<div #_croppingContainer *ngIf=\"isLoaded; else content\" class=\"ly-cropping-container\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div class=\"ly-cropp-content\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                    },] },
        ];
        /** @nocollapse */
        LyResizingCroppingImages.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        LyResizingCroppingImages.propDecorators = {
            imgContainer: [{ type: core.ViewChild, args: ['_imgContainer',] }],
            croppingContainer: [{ type: core.ViewChild, args: ['_croppingContainer',] }],
            src: [{ type: core.Input }],
            format: [{ type: core.Input }],
            config: [{ type: core.Input }],
            loaded: [{ type: core.Output }],
            cropped: [{ type: core.Output }],
            error: [{ type: core.Output }]
        };
        return LyResizingCroppingImages;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyResizingCroppingImageModule = /** @class */ (function () {
        function LyResizingCroppingImageModule() {
        }
        LyResizingCroppingImageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule],
                        exports: [LyResizingCroppingImages],
                        declarations: [LyResizingCroppingImages]
                    },] },
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

    exports.ImageResolution = ImageResolution;
    exports.LyResizingCroppingImages = LyResizingCroppingImages;
    exports.LyResizingCroppingImageModule = LyResizingCroppingImageModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9AYWx5bGUvdWkvcmVzaXppbmctY3JvcHBpbmctaW1hZ2VzL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcy9yZXNpemluZy1jcm9wcGluZy1pbWFnZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRPRE86IGFkZCByZXNpemluZyBpbWFnZVxyXG4gKi9cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsIFN1YmplY3QgLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZyB7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvKiogSWYgdGhpcyBpcyBub3QgZGVmaW5lZCwgdGhlIG5ldyBpbWFnZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGVmaW5lZCAqL1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgLyoqIEJhY2tncm91bmQgY29sb3IoIGRlZmF1bHQ6IG51bGwpLCBpZiBpcyBudWxsIGluIHBuZyBpcyB0cmFuc3BhcmVudCBidXQgbm90IGluIGpwZyAqL1xyXG4gIGZpbGw/OiBzdHJpbmcgfCBudWxsO1xyXG4gIG91dHB1dD86IHtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICB9IHwgSW1hZ2VSZXNvbHV0aW9uO1xyXG59XHJcbmV4cG9ydCBlbnVtIEltYWdlUmVzb2x1dGlvbiB7XHJcbiAgLyoqIFJlc2l6aW5nICYgY3JvcHBpbmcgKi9cclxuICBEZWZhdWx0LFxyXG4gIC8qKiBPbmx5IGNyb3BwaW5nICovXHJcbiAgT3JpZ2luYWxJbWFnZVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvcHBlZEltYWdlIHtcclxuICBiYXNlNjRJbWFnZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlU3RhdGUge1xyXG4gIGlzTG9hZGVkOiBib29sZWFuO1xyXG4gIGlzQ3JvcDogYm9vbGVhbjtcclxufVxyXG5jb25zdCBDT05GSUdfREVGQVVMVCA9IDxMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXNDb25maWc+e1xyXG4gIHdpZHRoOiAyNTAsXHJcbiAgaGVpZ2h0OiAyMDAsXHJcbiAgb3V0cHV0OiBJbWFnZVJlc29sdXRpb24uRGVmYXVsdFxyXG59O1xyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ2x5LWNyb3BwaW5nJyxcclxuICBzdHlsZXM6IFtgOmhvc3R7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2Rpc3BsYXk6ZmxleDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lmx5LWltZy1jb250YWluZXJ7Y3Vyc29yOm1vdmU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS5seS1pbWctY29udGFpbmVyIGltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BvaW50ZXItZXZlbnRzOm5vbmV9Lmx5LWNyb3BwaW5nLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO2JveC1zaGFkb3c6MCAwIDAgMjAwMDBweCByZ2JhKDAsMCwwLC4yOSl9Lmx5LWNyb3BwaW5nLWNvbnRhaW5lcjo6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtib3JkZXI6MnB4IHNvbGlkICNmZmZ9Lmx5LWNyb3BwLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowfS5seS1jcm9wcC1jb250ZW50IC9kZWVwLyA6bm90KGlucHV0KXtwb2ludGVyLWV2ZW50czpub25lfS5seS1jcm9wcC1jb250ZW50IGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6MCAwO29wYWNpdHk6MDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfWBdLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImx5LWltZy1jb250YWluZXJcIiAjX2ltZ0NvbnRhaW5lclxuKHBhbnN0YXJ0KT1cIl9tb3ZlU3RhcnQoJGV2ZW50KVwiXG4ocGFuKT1cIl9tb3ZlKCRldmVudClcIlxuW25nU3R5bGVdPVwiZHJhZ0RhdGEgfCBhc3luY1wiPlxuICA8aW1nICpuZ0lmPVwiaXNMb2FkZWRcIlxuICBbc3JjXT1cInNyY1wiPlxuPC9kaXY+XG48ZGl2ICNfY3JvcHBpbmdDb250YWluZXIgKm5nSWY9XCJpc0xvYWRlZDsgZWxzZSBjb250ZW50XCIgY2xhc3M9XCJseS1jcm9wcGluZy1jb250YWluZXJcIiBbbmdTdHlsZV09XCJ7XG4gIHdpZHRoOiBjb25maWcud2lkdGggKyAncHgnLFxuICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHQgKyAncHgnXG59XCI+PC9kaXY+XG48bmctdGVtcGxhdGUgI2NvbnRlbnQ+XG4gIDxkaXYgY2xhc3M9XCJseS1jcm9wcC1jb250ZW50XCI+XG4gICAgPGlucHV0ICNfZmlsZUlucHV0IHR5cGU9XCJmaWxlXCIgKGNoYW5nZSk9XCJzZWxlY3RJbnB1dEV2ZW50KCRldmVudClcIiBhY2NlcHQ9XCJpbWFnZS8qXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+YCxcclxuIH0pXHJcbmV4cG9ydCBjbGFzcyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBpbWc6IEJlaGF2aW9yU3ViamVjdDxIVE1MSW1hZ2VFbGVtZW50PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SFRNTEltYWdlRWxlbWVudD4obnVsbCk7XHJcbiAgcmVzdWx0OiBzdHJpbmc7XHJcbiAgZmlsZU5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gIHByaXZhdGUgb2Zmc2V0OiB7eDogbnVtYmVyLCB5OiBudW1iZXIsIGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9O1xyXG4gIHByaXZhdGUgZXZlbnREaXJlY3Rpb246IHN0cmluZztcclxuICBwcml2YXRlIHNjYWxlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfc3JjOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnX2ltZ0NvbnRhaW5lcicpIGltZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdfY3JvcHBpbmdDb250YWluZXInKSBjcm9wcGluZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBzcmM6IHN0cmluZztcclxuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcclxuICBASW5wdXQoKSBjb25maWc6IEx5UmVzaXppbmdDcm9wcGluZ0ltYWdlc0NvbmZpZyA9IENPTkZJR19ERUZBVUxUO1xyXG4gIGlzTG9hZGVkOiBib29sZWFuO1xyXG4gIGlzQ3JvcHBlZDogYm9vbGVhbjtcclxuICAvKiogT24gbG9hZGVkIG5ldyBpbWFnZSAqL1xyXG4gIEBPdXRwdXQoKSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XHJcbiAgLyoqIE9uIGNyb3AgbmV3IGltYWdlICovXHJcbiAgQE91dHB1dCgpIGNyb3BwZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENyb3BwZWRJbWFnZT4oKTtcclxuICAvKiogT24gZXJyb3IgbmV3IGltYWdlICovXHJcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xyXG5cclxuICBwcml2YXRlIGRlZmF1bHRUeXBlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfZHJhZ0RhdGE6IFN1YmplY3Q8e3dpZHRoOiBzdHJpbmcsIGhlaWdodDogc3RyaW5nLCB0cmFuc2Zvcm06IHN0cmluZ30+ID0gbmV3IFN1YmplY3QoKTtcclxuICBkcmFnRGF0YTogT2JzZXJ2YWJsZTx7d2lkdGg6IHN0cmluZywgaGVpZ2h0OiBzdHJpbmcsIHRyYW5zZm9ybTogc3RyaW5nfT47XHJcbiAgcHJpdmF0ZSB6b29tU2NhbGUgPSAuMTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgdGhpcy5kcmFnRGF0YSA9IHRoaXMuX2RyYWdEYXRhLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgY29uc3QgaW1nID0gdGhpcy5pbWc7XHJcbiAgICBpbWcuc3Vic2NyaWJlKChpbWdFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmIChpbWdFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5faW1nID0gaW1nRWxlbWVudDtcclxuICAgICAgICAvKiogc2V0IHpvb20gc2NhbGUgKi9cclxuICAgICAgICBjb25zdCBtaW5TY2FsZSA9IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCAvIHRoaXMuX2ltZy53aWR0aCAqIDEwMCxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0IC8gdGhpcy5faW1nLmhlaWdodCAqIDEwMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy56b29tU2NhbGUgPSBNYXRoLm1heChtaW5TY2FsZS53aWR0aCwgbWluU2NhbGUuaGVpZ2h0KSAvIDEwMDtcclxuICAgICAgICB0aGlzLmZpdCgpO1xyXG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0SW5wdXRFdmVudChpbWc6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBfaW1nID0gaW1nLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYgKF9pbWcuZmlsZXMubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGZpbGVSZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgdGhpcy5maWxlTmFtZSA9IF9pbWcudmFsdWUucmVwbGFjZSgvLiooXFwvfFxcXFwpLywgJycpO1xyXG5cclxuICAgIC8qKiBTZXQgdHlwZSAqL1xyXG4gICAgdGhpcy5kZWZhdWx0VHlwZSA9IG51bGw7XHJcbiAgICBpZiAoIXRoaXMuY29uZmlnLnR5cGUpIHtcclxuICAgICAgdGhpcy5kZWZhdWx0VHlwZSA9IF9pbWcuZmlsZXNbMF0udHlwZTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNDcm9wcGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9kcmFnRGF0YS5uZXh0KG51bGwpO1xyXG4gICAgZmlsZVJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgKGxvYWRFdmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBvcmlnaW5hbEltYWdlVXJsID0gKGxvYWRFdmVudC50YXJnZXQgYXMgRmlsZVJlYWRlcikucmVzdWx0O1xyXG4gICAgICB0aGlzLnNldEltYWdlVXJsKG9yaWdpbmFsSW1hZ2VVcmwpO1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoX2ltZy5maWxlc1swXSk7XHJcbiAgfVxyXG4gIGZpeGVkTnVtKG51bTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChudW0udG9GaXhlZCgwKSk7XHJcbiAgfVxyXG4gIHNldFNjYWxlKHNpemU6IG51bWJlcikge1xyXG4gICAgLy8gaWYgKCEoc2l6ZSA+IDAgJiYgc2l6ZSA8PSAxKSkgeyByZXR1cm47IH1cclxuICAgIHRoaXMuc2NhbGUgPSBzaXplO1xyXG4gICAgc2l6ZSA9IHNpemUgKiAxMDA7XHJcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgY29uc3QgaW5pdGlhbEltZyA9IHRoaXMuX2ltZztcclxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5maXhlZE51bShpbml0aWFsSW1nLndpZHRoICogc2l6ZSAvIDEwMCk7XHJcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmZpeGVkTnVtKGluaXRpYWxJbWcuaGVpZ2h0ICogc2l6ZSAvIDEwMCk7XHJcbiAgICB0aGlzLl9kcmFnRGF0YS5uZXh0KHtcclxuICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcclxuICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuY3VzdG9tQ2VudGVyKHdpZHRoLCBoZWlnaHQpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBjdXN0b21DZW50ZXIod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHJvb3QgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHcgPSAocm9vdC5vZmZzZXRXaWR0aCAtIHdpZHRoKSAvIDI7XHJcbiAgICBjb25zdCBoID0gKHJvb3Qub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XHJcbiAgICByZXR1cm4gYHRyYW5zbGF0ZTNkKCR7d31weCwgJHtofXB4LCAwKWA7XHJcbiAgfVxyXG5cclxuICAnMToxJygpIHtcclxuICAgIHRoaXMuc2V0U2NhbGUoMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBanVzdGFyIGEgbGEgcGFudGFsbGFcclxuICAgKi9cclxuICBmaXRUb1NjcmVlbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgbWluID0ge1xyXG4gICAgICB3aWR0aDogY29udGFpbmVyLm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGNvbnRhaW5lci5vZmZzZXRIZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBzaXplID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5faW1nLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuX2ltZy5oZWlnaHRcclxuICAgIH07XHJcbiAgICBjb25zdCBtaW5TY2FsZSA9IHtcclxuICAgICAgd2lkdGg6IG1pbi53aWR0aCAvIHNpemUud2lkdGggKiAxMDAsXHJcbiAgICAgIGhlaWdodDogbWluLmhlaWdodCAvIHNpemUuaGVpZ2h0ICogMTAwXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDA7XHJcbiAgICAvLyBpZiAocmVzdWx0ID49IDEpIHtcclxuICAgICAgLy8gdGhpcy5zZXRTY2FsZSgxKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUocmVzdWx0KTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGZpdCgpIHtcclxuICAgIGNvbnN0IG1pblNjYWxlID0ge1xyXG4gICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggLyB0aGlzLl9pbWcud2lkdGggKiAxMDAsXHJcbiAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0IC8gdGhpcy5faW1nLmhlaWdodCAqIDEwMFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2V0U2NhbGUoTWF0aC5tYXgobWluU2NhbGUud2lkdGgsIG1pblNjYWxlLmhlaWdodCkgLyAxMDApO1xyXG4gIH1cclxuXHJcbiAgX21vdmVTdGFydChldmVudCkge1xyXG4gICAgdGhpcy5ldmVudERpcmVjdGlvbiA9IG51bGw7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgdGFyZ2V0O1xyXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xyXG4gICAgICB0YXJnZXQgPSB7XHJcbiAgICAgICAgeDogZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxyXG4gICAgICAgIHk6IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFyZ2V0ID0ge1xyXG4gICAgICAgIHg6IGV2ZW50LmNlbnRlci54LFxyXG4gICAgICAgIHk6IGV2ZW50LmNlbnRlci55XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICB0aGlzLm9mZnNldCA9IHtcclxuICAgICAgeDogZXZlbnQuY2VudGVyLnggLSByZWN0LngsXHJcbiAgICAgIHk6IGV2ZW50LmNlbnRlci55IC0gcmVjdC55LFxyXG4gICAgICBsZWZ0OiAocmVjdCBhcyBDbGllbnRSZWN0KS5sZWZ0IC0gaG9zdFJlY3QueCxcclxuICAgICAgdG9wOiAocmVjdCBhcyBDbGllbnRSZWN0KS50b3AgLSBob3N0UmVjdC55XHJcbiAgICB9O1xyXG4gIH1cclxuICBfbW92ZShldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmFkZGl0aW9uYWxFdmVudCkge1xyXG4gICAgICB0aGlzLmV2ZW50RGlyZWN0aW9uID0gZXZlbnQuYWRkaXRpb25hbEV2ZW50O1xyXG4gICAgfVxyXG4gICAgbGV0IHgsIHk7XHJcbiAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpZiAoZXZlbnQuc3JjRXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgLy8gaWYgKHRoaXMuZXZlbnREaXJlY3Rpb24gPT09ICdwYW5sZWZ0JyB8fCB0aGlzLmV2ZW50RGlyZWN0aW9uID09PSAncGFucmlnaHQnKSB7XHJcbiAgICAgIGlmIChNYXRoLmFicyhldmVudC5kZWx0YVgpID09PSBNYXRoLm1heChNYXRoLmFicyhldmVudC5kZWx0YVgpLCBNYXRoLmFicyhldmVudC5kZWx0YVkpKSkge1xyXG4gICAgICAgIHkgPSB0aGlzLm9mZnNldC50b3A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IHRoaXMub2Zmc2V0LmxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh4ID09PSB1bmRlZmluZWQpIHsgeCA9IGV2ZW50LmNlbnRlci54IC0gaG9zdFJlY3QueCAtICh0aGlzLm9mZnNldC54KTsgfVxyXG4gICAgaWYgKHkgPT09IHVuZGVmaW5lZCkgeyB5ID0gZXZlbnQuY2VudGVyLnkgLSBob3N0UmVjdC55IC0gKHRoaXMub2Zmc2V0LnkpOyB9XHJcblxyXG4gICAgdGhpcy5fZHJhZ0RhdGEubmV4dCh7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmltZ0NvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgMClgXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSByb3VuZE51bWJlcihudW06IG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogMTAwMDAwKSAvIDEwMDAwMDtcclxuICB9XHJcbiAgLyoqKyAqL1xyXG4gIHpvb21JbigpIHtcclxuICAgIC8vIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlICsgdGhpcy56b29tU2NhbGUpO1xyXG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnJvdW5kTnVtYmVyKHRoaXMuc2NhbGUgKyAuMDUpO1xyXG4gICAgaWYgKHNjYWxlID4gMCAmJiBzY2FsZSA8PSAxKSB7XHJcbiAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqLSAqL1xyXG4gIHpvb21PdXQoKSB7XHJcbiAgICAvLyBjb25zdCBzY2FsZSA9IHRoaXMucm91bmROdW1iZXIodGhpcy5zY2FsZSAtIHRoaXMuem9vbVNjYWxlKTtcclxuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5yb3VuZE51bWJlcih0aGlzLnNjYWxlIC0gLjA1KTtcclxuICAgIGlmIChzY2FsZSA+IHRoaXMuem9vbVNjYWxlICYmIHNjYWxlIDw9IDEpIHtcclxuICAgICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICB0aGlzLnNldEltYWdlVXJsKHRoaXMuc3JjKTtcclxuICB9XHJcbiAgY2VudGVyKGltZz86IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIGlmICghaW1nKSB7XHJcbiAgICAgIGltZyA9IHRoaXMuaW1nQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCByb290ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB3ID0gKHJvb3Qub2Zmc2V0V2lkdGggLSBpbWcud2lkdGgpIC8gMjtcclxuICAgIGNvbnN0IGggPSAocm9vdC5vZmZzZXRIZWlnaHQgLSBpbWcuaGVpZ2h0KSAvIDI7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgIHdpZHRoOiBgJHtpbWcud2lkdGh9cHhgLFxyXG4gICAgICBoZWlnaHQ6IGAke2ltZy5oZWlnaHR9cHhgLFxyXG4gICAgICB0cmFuc2Zvcm06IHRoaXMuY3VzdG9tQ2VudGVyKGltZy53aWR0aCwgaW1nLmhlaWdodClcclxuICAgIH07XHJcbiAgICB0aGlzLl9kcmFnRGF0YS5uZXh0KHJlc3VsdCk7XHJcbiAgfVxyXG4gIHNldEltYWdlVXJsKHNyYzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNyYyA9IHNyYztcclxuICAgIGlmICghc3JjKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlO1xyXG4gICAgaW1nLnNyYyA9IHNyYztcclxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnIpID0+IHtcclxuICAgICAgdGhpcy5lcnJvci5lbWl0KG51bGwpO1xyXG4gICAgfSk7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5pbWcubmV4dChpbWcpO1xyXG4gICAgICB0aGlzLmxvYWRlZC5lbWl0KG51bGwpO1xyXG4gICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIG1heCguLi52YWx1ZXM6IG51bWJlcltdKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4udmFsdWVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KGltZzogSFRNTENhbnZhc0VsZW1lbnQsIGNvbmZpZywgcXVhbGl0eTogbnVtYmVyKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgLyoqIENhbGN1bGF0ZSB0b3RhbCBudW1iZXIgb2Ygc3RlcHMgbmVlZGVkICovXHJcbiAgICBsZXQgIG51bVN0ZXBzID0gTWF0aC5jZWlsKE1hdGgubG9nKHRoaXMubWF4KGltZy53aWR0aCwgaW1nLmhlaWdodCkgLyB0aGlzLm1heChjb25maWcuaGVpZ2h0LCBjb25maWcud2lkdGgpKSAvIE1hdGgubG9nKDIpKSAtIDE7XHJcbiAgICBudW1TdGVwcyA9IG51bVN0ZXBzIDw9IDAgPyAwIDogbnVtU3RlcHM7XHJcblxyXG4gICAgLyoqQXJyYXkgc3RlcHMgKi9cclxuICAgIGNvbnN0IHN0ZXBzID0gQXJyYXkuZnJvbShBcnJheShudW1TdGVwcykua2V5cygpKTtcclxuXHJcbiAgICAvKiogQ29udGV4dCAqL1xyXG4gICAgY29uc3Qgb2N0eCA9IGltZy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IHEgPSBNYXRoLnBvdyhxdWFsaXR5ICogMTAsIG51bVN0ZXBzKSAvIE1hdGgucG93KDEwLCBudW1TdGVwcyk7XHJcblxyXG4gICAgLyoqIElmIFN0ZXBzID0+IGltYWdlU21vb3RoaW5nUXVhbGl0eSAqL1xyXG4gICAgaWYgKG51bVN0ZXBzKSB7XHJcbiAgICAgIC8qKiBTZXQgc2l6ZSAqL1xyXG4gICAgICBjb25zdCB3ID0gaW1nLndpZHRoICogcXVhbGl0eTtcclxuICAgICAgY29uc3QgaCA9IGltZy5oZWlnaHQgKiBxdWFsaXR5O1xyXG4gICAgICAvKiogT25seSB0aGUgbmV3IGltZyBpcyBzaG93bi4gKi9cclxuICAgICAgb2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29weSc7XHJcblxyXG4gICAgICAvKiogU3RlcHMgKi9cclxuICAgICAgKHN0ZXBzIGFzIEFycmF5PG51bWJlcj4pLmZvckVhY2goKGEsIGIpID0+IHtcclxuICAgICAgICBvY3R4LmRyYXdJbWFnZShpbWcsXHJcbiAgICAgICAgICAwLCAwLFxyXG4gICAgICAgICAgdywgaFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RlcCBmaW5hbFxyXG4gICAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxyXG4gICAgICovXHJcbiAgICBjb25zdCBvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxyXG4gICAgY3R4ID0gb2MuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIG9jLndpZHRoID0gY29uZmlnLndpZHRoO1xyXG4gICAgb2MuaGVpZ2h0ID0gY29uZmlnLmhlaWdodDtcclxuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLFxyXG4gICAgICAwLCAwLFxyXG4gICAgICBpbWcud2lkdGggKiAocSksIGltZy5oZWlnaHQgKiAocSksXHJcbiAgICAgIDAsIDAsXHJcbiAgICAgIG9jLndpZHRoLCBvYy5oZWlnaHRcclxuICAgICk7XHJcbiAgICByZXR1cm4gb2M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcm9wIEltYWdlXHJcbiAgICogUmVzaXppbmcgJiBjcm9wcGluZyBpbWFnZVxyXG4gICAqL1xyXG4gIGNyb3AoKTogQ3JvcHBlZEltYWdlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhc2U2NEltYWdlOiB0aGlzLmNyb3BwKCksXHJcbiAgICAgIHR5cGU6IHRoaXMuZGVmYXVsdFR5cGUgfHwgdGhpcy5jb25maWcudHlwZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlcHJlY2F0ZWQsIHVzZSBjcm9wKCkgaW5zdGVhZFxyXG4gICAqL1xyXG4gIGNyb3BwKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBteUNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIENPTkZJR19ERUZBVUxULCB0aGlzLmNvbmZpZyk7XHJcbiAgICBjb25zdCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuY3JvcHBpbmdDb250YWluZXIubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0O1xyXG4gICAgY29uc3QgaW1nID0gdGhpcy5pbWdDb250YWluZXIubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBDbGllbnRSZWN0O1xyXG4gICAgY29uc3QgbGVmdCA9IChyZWN0LmxlZnQgLSBpbWcubGVmdCk7XHJcbiAgICBjb25zdCB0b3AgPSAocmVjdC50b3AgLSBpbWcudG9wKTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgd2lkdGg6IG15Q29uZmlnLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG15Q29uZmlnLmhlaWdodFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbmZpZ0NhbnZhcyA9IHtcclxuICAgICAgd2lkdGg6IHRoaXMuX2ltZy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLl9pbWcuaGVpZ2h0XHJcbiAgICB9O1xyXG4gICAgY2FudmFzRWxlbWVudC53aWR0aCA9IGNvbmZpZy53aWR0aCAvIHRoaXMuc2NhbGU7XHJcbiAgICBjYW52YXNFbGVtZW50LmhlaWdodCA9IGNvbmZpZy5oZWlnaHQgLyB0aGlzLnNjYWxlO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgaWYgKG15Q29uZmlnLmZpbGwpIHtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IG15Q29uZmlnLmZpbGw7XHJcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltZyxcclxuICAgICAgLShsZWZ0IC8gdGhpcy5zY2FsZSksIC0odG9wIC8gdGhpcy5zY2FsZSksXHJcbiAgICApO1xyXG4gICAgbGV0IHJlc3VsdCA9IGNhbnZhc0VsZW1lbnQ7XHJcbiAgICBpZiAobXlDb25maWcub3V0cHV0ID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KHJlc3VsdCwgY29uZmlnLCAwLjUpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbXlDb25maWcub3V0cHV0ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXN1bHQgPSB0aGlzLmltYWdlU21vb3RoaW5nUXVhbGl0eShyZXN1bHQsIG15Q29uZmlnLm91dHB1dCwgMC41KTtcclxuICAgIH1cclxuICAgIGxldCB1cmw7XHJcbiAgICBpZiAobXlDb25maWcudHlwZSkge1xyXG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKGBpbWFnZS8ke215Q29uZmlnLnR5cGV9YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSByZXN1bHQudG9EYXRhVVJMKHRoaXMuZGVmYXVsdFR5cGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXN1bHQgPSAodXJsKTtcclxuICAgIHRoaXMuY3JvcHBlZC5lbWl0KHtcclxuICAgICAgYmFzZTY0SW1hZ2U6IHVybCxcclxuICAgICAgdHlwZTogdGhpcy5kZWZhdWx0VHlwZSB8fCBteUNvbmZpZy50eXBlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaXNDcm9wcGVkID0gdHJ1ZTtcclxuICAgIHJldHVybiB1cmw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMeVJlc2l6aW5nQ3JvcHBpbmdJbWFnZXMgfSBmcm9tICcuL3Jlc2l6aW5nLWNyb3BwaW5nLWltYWdlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5UmVzaXppbmdDcm9wcGluZ0ltYWdlc10sXG4gIGRlY2xhcmF0aW9uczogW0x5UmVzaXppbmdDcm9wcGluZ0ltYWdlc11cbn0pXG5leHBvcnQgY2xhc3MgTHlSZXNpemluZ0Nyb3BwaW5nSW1hZ2VNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJCZWhhdmlvclN1YmplY3QiLCJFdmVudEVtaXR0ZXIiLCJTdWJqZWN0IiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJWaWV3Q2hpbGQiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLG9CQXVHdUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFD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