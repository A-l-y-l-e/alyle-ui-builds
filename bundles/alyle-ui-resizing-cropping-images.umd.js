(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('rxjs/operators'), require('rxjs'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/resizing-cropping-images', ['exports', '@angular/core', '@alyle/ui', 'rxjs/operators', 'rxjs', '@angular/platform-browser', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.resizingCroppingImages = {}), global.ng.core, global.ly.core, global.rxjs.operators, global.rxjs, global.ng.platformBrowser, global.ng.common));
}(this, function (exports, core, ui, operators, rxjs, platformBrowser, common) { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var STYLE_PRIORITY = -2;
    var STYLES = function (theme) { return ({
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
            alignItems: 'center',
            '&': theme.imgCropper ? theme.imgCropper.root : null
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
        area: __assign({ pointerEvents: 'none', boxShadow: '0 0 0 20000px rgba(0, 0, 0, 0.4)' }, ui.LY_COMMON_STYLES.fill, { margin: 'auto', '&:before, &:after': __assign({}, ui.LY_COMMON_STYLES.fill, { content: "''" }), '&:before': {
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
    }); };
    var ɵ0 = STYLES;
    /** Image output */

    (function (ImgResolution) {
        /** Resizing & cropping */
        ImgResolution[ImgResolution["Default"] = 0] = "Default";
        /** Only cropping */
        ImgResolution[ImgResolution["OriginalImage"] = 1] = "OriginalImage";
    })(exports.ImgResolution || (exports.ImgResolution = {}));
    /** Image output */

    (function (ImgCropperError) {
        /** The loaded image exceeds the size limit set. */
        ImgCropperError[ImgCropperError["Size"] = 0] = "Size";
        /** The file loaded is not image. */
        ImgCropperError[ImgCropperError["Type"] = 1] = "Type";
    })(exports.ImgCropperError || (exports.ImgCropperError = {}));
    var CONFIG_DEFAULT = {
        width: 250,
        height: 200,
        output: exports.ImgResolution.Default,
        antiAliased: true
    };
    var LyResizingCroppingImages = /** @class */ (function () {
        function LyResizingCroppingImages(_renderer, theme, elementRef, cd, _ngZone) {
            this._renderer = _renderer;
            this.theme = theme;
            this.elementRef = elementRef;
            this.cd = cd;
            this._ngZone = _ngZone;
            /**
             * styles
             * @docs-private
             */
            this.classes = this.theme.addStyleSheet(STYLES);
            this._imgRect = {};
            this._listeners = new Set();
            this.scaleChange = new core.EventEmitter();
            /** On loaded new image */
            this.loaded = new core.EventEmitter();
            /** On crop new image */
            this.cropped = new core.EventEmitter();
            /** Emit an error when the loaded image is not valid */
            this.error = new core.EventEmitter();
            this._renderer.addClass(elementRef.nativeElement, this.classes.root);
        }
        Object.defineProperty(LyResizingCroppingImages.prototype, "config", {
            get: function () {
                return this._config;
            },
            set: function (val) {
                this._config = ui.mergeDeep({}, CONFIG_DEFAULT, val);
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
            get: function () {
                return this._scale;
            },
            set: function (val) {
                this.setScale(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyResizingCroppingImages.prototype, "minScale", {
            /** Get min scale */
            get: function () {
                return this._minScale;
            },
            enumerable: true,
            configurable: true
        });
        LyResizingCroppingImages.prototype.ngOnDestroy = function () {
            this._listeners.forEach(function (listen) { return listen.unsubscribe(); });
            this._listeners.clear();
        };
        LyResizingCroppingImages.prototype._imgLoaded = function (imgElement) {
            if (imgElement) {
                this._img = imgElement;
                var canvas = this._imgCanvas.nativeElement;
                canvas.width = imgElement.width;
                canvas.height = imgElement.height;
                var ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(imgElement, 0, 0);
                /** set min scale */
                this._minScale = getMinScale(this.config.width, this.config.height, canvas.width, canvas.height);
            }
        };
        LyResizingCroppingImages.prototype._setStylesForContImg = function (values) {
            var newStyles = {};
            var rootRect = this._rootRect();
            if (values.x !== void 0 && values.y !== void 0) {
                var x = rootRect.width / 2 - (values.x);
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
        LyResizingCroppingImages.prototype._resize$ = function () {
            if (this.isLoaded) {
                this.updatePosition();
            }
        };
        LyResizingCroppingImages.prototype.selectInputEvent = function (img) {
            var _this = this;
            var _img = img.target;
            if (_img.files && _img.files.length !== 1) {
                return;
            }
            var fileSize = _img.files[0].size;
            var fileName = _img.value.replace(/.*(\/|\\)/, '');
            if (this.maxFileSize && fileSize > this.maxFileSize) {
                var cropEvent = {
                    name: fileName,
                    type: _img.files[0].type,
                    size: fileSize,
                    error: exports.ImgCropperError.Size
                };
                this.clean();
                this.error.emit(cropEvent);
                return;
            }
            var fileReader = new FileReader();
            var listener = rxjs.fromEvent(fileReader, 'load')
                .pipe(operators.take(1))
                .subscribe(function (loadEvent) {
                var originalImageUrl = loadEvent.target.result;
                // Set type
                if (!_this.config.type) {
                    _this._defaultType = _img.files[0].type;
                }
                // set name
                _this._fileName = fileName;
                // set file size
                _this._sizeInBytes = _img.files[0].size;
                _this.setImageUrl(originalImageUrl);
                _this.cd.markForCheck();
                _this._listeners.delete(listener);
            });
            this._listeners.add(listener);
            fileReader.readAsDataURL(_img.files[0]);
        };
        /** Set the size of the image, the values can be 0 between 1, where 1 is the original size */
        LyResizingCroppingImages.prototype.setScale = function (size, noAutoCrop) {
            // fix min scale
            var newSize = size >= this.minScale && size <= 1 ? size : this.minScale;
            // check
            var changed = size != null && size !== this.scale && newSize !== this.scale;
            this._scale = size;
            if (!changed) {
                return;
            }
            this._scal3Fix = newSize;
            if (this.isLoaded) {
                if (changed) {
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
        LyResizingCroppingImages.prototype._getCenterPoints = function () {
            var root = this.elementRef.nativeElement;
            var img = this._imgCanvas.nativeElement;
            var x = (root.offsetWidth - (img.width)) / 2;
            var y = (root.offsetHeight - (img.height)) / 2;
            return {
                x: x,
                y: y
            };
        };
        /**
         * Ajustar a la pantalla
         */
        LyResizingCroppingImages.prototype.fitToScreen = function () {
            var container = this.elementRef.nativeElement;
            var min = {
                width: container.offsetWidth,
                height: container.offsetHeight
            };
            var _a = this._img, width = _a.width, height = _a.height;
            var minScale = {
                width: min.width / width,
                height: min.height / height
            };
            var result = Math.max(minScale.width, minScale.height);
            this.setScale(result);
        };
        LyResizingCroppingImages.prototype.fit = function () {
            this.setScale(this.minScale);
        };
        LyResizingCroppingImages.prototype._moveStart = function () {
            this.offset = {
                x: this._imgRect.x,
                y: this._imgRect.y,
                left: this._imgRect.xc,
                top: this._imgRect.yc
            };
        };
        LyResizingCroppingImages.prototype._move = function (event) {
            var x, y;
            var canvas = this._imgCanvas.nativeElement;
            var scaleFix = this._scal3Fix;
            var config = this.config;
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
        LyResizingCroppingImages.prototype.updatePosition = function (x, y) {
            var hostRect = this._rootRect();
            var croppingContainerRect = this._areaCropperRect();
            if (x === undefined && y === undefined) {
                x = this._imgRect.xc;
                y = this._imgRect.yc;
            }
            x = (croppingContainerRect.x - hostRect.x) - (x - (this.config.width / 2));
            y = (croppingContainerRect.y - hostRect.y) - (y - (this.config.height / 2));
            this._setStylesForContImg({
                x: x, y: y
            });
        };
        LyResizingCroppingImages.prototype._slideEnd = function () {
            this._cropIfAutoCrop();
        };
        LyResizingCroppingImages.prototype._cropIfAutoCrop = function () {
            if (this.config.autoCrop) {
                this.crop();
            }
        };
        /**+ */
        LyResizingCroppingImages.prototype.zoomIn = function () {
            var scale = this._scal3Fix + .05;
            if (scale > 0 && scale <= 1) {
                this.setScale(scale);
            }
            else {
                this.setScale(1);
            }
        };
        /** Clean the img cropper */
        LyResizingCroppingImages.prototype.clean = function () {
            if (this.isLoaded) {
                this._imgRect = {};
                this.offset = undefined;
                this.scale = undefined;
                this._scal3Fix = undefined;
                this._rotation = 0;
                this._minScale = undefined;
                this._isLoadedImg = false;
                this.isLoaded = false;
                this.isCropped = false;
                this._originalImgBase64 = undefined;
                var canvas = this._imgCanvas.nativeElement;
                canvas.width = 0;
                canvas.height = 0;
                this.cd.markForCheck();
            }
        };
        /**- */
        LyResizingCroppingImages.prototype.zoomOut = function () {
            var scale = this._scal3Fix - .05;
            if (scale > this.minScale && scale <= 1) {
                this.setScale(scale);
            }
            else {
                this.fit();
            }
        };
        LyResizingCroppingImages.prototype.center = function () {
            var newStyles = __assign({}, this._getCenterPoints());
            this._setStylesForContImg(newStyles);
            this._cropIfAutoCrop();
        };
        /**
         * Load Image from URL
         * @param src URL
         * @param fn function that will be called before emit the event loaded
         */
        LyResizingCroppingImages.prototype.setImageUrl = function (src, fn) {
            var _this = this;
            this.clean();
            this._originalImgBase64 = src;
            var img = new Image;
            var fileSize = this._sizeInBytes;
            var fileName = this._fileName;
            var defaultType = this._defaultType;
            img.crossOrigin = 'anonymous';
            var cropEvent = {
                name: fileName,
                type: defaultType,
                originalDataURL: src
            };
            img.src = src;
            if (fileSize) {
                cropEvent.size = fileSize;
            }
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
            var errorListen = rxjs.fromEvent(img, 'error').pipe(operators.take(1)).subscribe(function () {
                cropEvent.error = exports.ImgCropperError.Type;
                _this.error.emit(cropEvent);
                _this._listeners.delete(errorListen);
                _this.ngOnDestroy();
            });
            this._listeners.add(errorListen);
            // clear
            this._sizeInBytes = null;
            this._fileName = null;
            this._defaultType = undefined;
        };
        LyResizingCroppingImages.prototype.rotate = function (degrees) {
            var validDegrees = this._rotation = convertToValidDegrees(degrees);
            var degreesRad = validDegrees * Math.PI / 180;
            var canvas = this._imgCanvas.nativeElement;
            var canvasClon = createCanvasImg(canvas);
            var ctx = canvas.getContext('2d');
            // clear
            ctx.clearRect(0, 0, canvasClon.width, canvasClon.height);
            // rotate canvas image
            this._renderer.setStyle(canvas, 'transform', "rotate(" + validDegrees + "deg) scale(" + 1 / this._scal3Fix + ")");
            this._renderer.setStyle(canvas, 'transformOrigin', this._imgRect.xc + "px " + this._imgRect.yc + "px 0");
            var _a = canvas.getBoundingClientRect(), x = _a.x, y = _a.y;
            // save rect
            var canvasRect = canvas.getBoundingClientRect();
            // remove rotate styles
            this._renderer.removeStyle(canvas, 'transform');
            this._renderer.removeStyle(canvas, 'transformOrigin');
            // set w & h
            var w = canvasRect.width;
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
            var rootRect = this._rootRect();
            this._setStylesForContImg({
                x: (x - rootRect.x),
                y: (y - rootRect.y)
            });
            // keep image inside the frame
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
        LyResizingCroppingImages.prototype.imageSmoothingQuality = function (img, config, quality) {
            /** Calculate total number of steps needed */
            var numSteps = Math.ceil(Math.log(Math.max(img.width, img.height) / Math.max(config.width, config.height)) / Math.log(2)) - 1;
            numSteps = numSteps <= 0 ? 0 : numSteps;
            /**Array steps */
            var steps = Array.from(Array(numSteps).keys());
            /** Context */
            var octx = img.getContext('2d');
            var q = (Math.pow((quality * 10), numSteps)) / (Math.pow(10, numSteps));
            var fileType = this._defaultType;
            /** If Steps => imageSmoothingQuality */
            if (numSteps) {
                /** Set size */
                var w_1 = img.width * quality;
                var h_1 = img.height * quality;
                /** Only the new img is shown. */
                if (fileType === 'image/png' || fileType === 'image/svg+xml') {
                    octx.globalCompositeOperation = 'copy';
                }
                /** Steps */
                steps.forEach(function () {
                    octx.drawImage(img, 0, 0, w_1, h_1);
                });
            }
            /**
             * Step final
             * Resizing & cropping image
             */
            var oc = document.createElement('canvas'), ctx = oc.getContext('2d');
            oc.width = config.width;
            oc.height = config.height;
            ctx.drawImage(img, 0, 0, img.width * q, img.height * q, 0, 0, oc.width, oc.height);
            return oc;
        };
        /**
         * Crop Image
         * Resizing & cropping image
         */
        LyResizingCroppingImages.prototype.crop = function (config) {
            var newConfig = config ? ui.mergeDeep({}, this.config || CONFIG_DEFAULT, config) : this.config;
            var cropEvent = this._imgCrop(newConfig);
            this.cd.markForCheck();
            return cropEvent;
        };
        /**
         * @docs-private
         */
        LyResizingCroppingImages.prototype._imgCrop = function (myConfig) {
            var canvasElement = document.createElement('canvas');
            var imgRect = this._imgRect;
            var scaleFix = this._scal3Fix;
            var left = imgRect.xc - (myConfig.width / 2 / scaleFix);
            var top = imgRect.yc - (myConfig.height / 2 / scaleFix);
            var config = {
                width: myConfig.width,
                height: myConfig.height
            };
            canvasElement.width = config.width / scaleFix;
            canvasElement.height = config.height / scaleFix;
            var ctx = canvasElement.getContext('2d');
            if (myConfig.fill) {
                ctx.fillStyle = myConfig.fill;
                ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
            }
            ctx.drawImage(this._imgCanvas.nativeElement, -(left), -(top));
            var result = canvasElement;
            var antiAliasedQ = myConfig.antiAliased ? .5 : 1;
            if (myConfig.output === 0) {
                result = this.imageSmoothingQuality(result, config, antiAliasedQ);
            }
            else if (typeof myConfig.output === 'object') {
                result = this.imageSmoothingQuality(result, myConfig.output, antiAliasedQ);
            }
            var url;
            if (myConfig.type) {
                url = result.toDataURL("" + myConfig.type);
            }
            else {
                url = result.toDataURL(this._defaultType);
            }
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
        LyResizingCroppingImages.prototype._rootRect = function () {
            return this.elementRef.nativeElement.getBoundingClientRect();
        };
        LyResizingCroppingImages.prototype._areaCropperRect = function () {
            return this._croppingContainer.nativeElement.getBoundingClientRect();
        };
        __decorate([
            core.ViewChild('_imgContainer'),
            __metadata("design:type", core.ElementRef)
        ], LyResizingCroppingImages.prototype, "_imgContainer", void 0);
        __decorate([
            core.ViewChild('_croppingContainer'),
            __metadata("design:type", core.ElementRef)
        ], LyResizingCroppingImages.prototype, "_croppingContainer", void 0);
        __decorate([
            core.ViewChild('_imgCanvas'),
            __metadata("design:type", core.ElementRef)
        ], LyResizingCroppingImages.prototype, "_imgCanvas", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyResizingCroppingImages.prototype, "config", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Number),
            __metadata("design:paramtypes", [Number])
        ], LyResizingCroppingImages.prototype, "scale", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], LyResizingCroppingImages.prototype, "maxFileSize", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], LyResizingCroppingImages.prototype, "scaleChange", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], LyResizingCroppingImages.prototype, "loaded", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], LyResizingCroppingImages.prototype, "cropped", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", Object)
        ], LyResizingCroppingImages.prototype, "error", void 0);
        __decorate([
            core.HostListener('window:resize'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], LyResizingCroppingImages.prototype, "_resize$", null);
        LyResizingCroppingImages = __decorate([
            core.Component({
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'ly-img-cropper, ly-cropping',
                template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart()\"\n(slide)=\"_move($event)\"\n(slideend)=\"_slideEnd()\">\n  <canvas #_imgCanvas></canvas>\n</div>\n<div #_croppingContainer *ngIf=\"_isLoadedImg; else content\" [className]=\"classes.area\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.defaultContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
            }),
            __metadata("design:paramtypes", [core.Renderer2,
                ui.LyTheme2,
                core.ElementRef,
                core.ChangeDetectorRef,
                core.NgZone])
        ], LyResizingCroppingImages);
        return LyResizingCroppingImages;
    }());
    /**
     * convertToValidDegrees(45) === 90
     * convertToValidDegrees(40) === 0
     * convertToValidDegrees(100) === 90
     * @docs-private
     */
    function convertToValidDegrees(num) {
        var val360 = limitNum(num, 360);
        var val90 = limitNum(val360.result, 90);
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
     * @docs-private
     */
    function limitNum(num, num2) {
        var numAbs = Math.abs(num);
        var parts = Math.floor(numAbs / num2);
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
     * @docs-private
     */
    function createCanvasImg(img) {
        // create a new canvas
        var newCanvas = document.createElement('canvas');
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
     * @docs-private
     */
    function getMinScale(mw, mh, w, h) {
        return Math.max(mw / w, mh / h);
    }

    var LyResizingCroppingImageModule = /** @class */ (function () {
        function LyResizingCroppingImageModule() {
        }
        LyResizingCroppingImageModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                exports: [LyResizingCroppingImages],
                providers: [
                    { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: ui.LyHammerGestureConfig }
                ],
                declarations: [LyResizingCroppingImages]
            })
        ], LyResizingCroppingImageModule);
        return LyResizingCroppingImageModule;
    }());

    exports.LyResizingCroppingImageModule = LyResizingCroppingImageModule;
    exports.LyResizingCroppingImages = LyResizingCroppingImages;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-resizing-cropping-images.umd.js.map
