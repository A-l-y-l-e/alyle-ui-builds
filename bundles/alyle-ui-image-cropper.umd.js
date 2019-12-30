(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('rxjs'), require('rxjs/operators'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/image-cropper', ['exports', '@angular/core', '@alyle/ui', 'rxjs', 'rxjs/operators', '@angular/platform-browser', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly['image-Cropper'] = {}), global.ng.core, global.ly.core, global.rxjs, global.rxjs.operators, global.ng.platformBrowser, global.ng.common));
}(this, (function (exports, core, ui, rxjs, operators, platformBrowser, common) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var STYLE_PRIORITY = -2;
    var STYLES = function (theme, ref) {
        var cropper = ref.selectorsOf(STYLES);
        return {
            $name: LyImageCropper.и,
            $priority: STYLE_PRIORITY,
            root: function () { return function (className) { return className + "{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;overflow:hidden;position:relative;justify-content:center;align-items:center;}" + ui.styleTemplateToString(((theme.cropper
                && theme.cropper.root
                && (theme.cropper.root instanceof ui.StyleCollection
                    ? theme.cropper.root.setTransformer(function (fn) { return fn(cropper); })
                    : theme.cropper.root(cropper)))), "" + className); }; },
            imgContainer: function (className) { return className + "{cursor:move;position:absolute;top:0;left:0;}" + className + " > canvas{pointer-events:none;}"; },
            area: function (className) { return className + "{pointer-events:none;box-shadow:0 0 0 20000px rgba(0, 0, 0, 0.4);margin:auto;}" + ui.styleTemplateToString((ui.LY_COMMON_STYLES.fill), "" + className) + ui.styleTemplateToString((ui.LY_COMMON_STYLES.fill), className + ":before," + className + ":after") + className + ":before," + className + ":after{content:'';}" + className + ":before{width:0;height:0;margin:auto;border-radius:50%;background:#fff;border:solid 2px rgb(255, 255, 255);}" + className + ":after{border:solid 2px rgb(255, 255, 255);}"; },
            defaultContent: function (className) { return className + "{display:flex;align-items:center;justify-content:center;}" + ui.styleTemplateToString((ui.LY_COMMON_STYLES.fill), className + "," + className + " > input") + className + " *:not(input){pointer-events:none;}" + className + " > input{background:transparent;opacity:0;width:100%;height:100%;}"; }
        };
    };
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
        /** When the image has not been loaded. */
        ImgCropperError[ImgCropperError["Other"] = 2] = "Other";
    })(exports.ImgCropperError || (exports.ImgCropperError = {}));
    var CONFIG_DEFAULT = {
        width: 250,
        height: 200,
        output: exports.ImgResolution.Default,
        antiAliased: true
    };
    var LyImageCropper = /** @class */ (function () {
        function LyImageCropper(_renderer, theme, elementRef, cd, _ngZone) {
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
        Object.defineProperty(LyImageCropper.prototype, "config", {
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
        Object.defineProperty(LyImageCropper.prototype, "scale", {
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
        Object.defineProperty(LyImageCropper.prototype, "minScale", {
            /** Get min scale */
            get: function () {
                return this._minScale;
            },
            enumerable: true,
            configurable: true
        });
        LyImageCropper.prototype.ngOnDestroy = function () {
            this._listeners.forEach(function (listen) { return listen.unsubscribe(); });
            this._listeners.clear();
        };
        LyImageCropper.prototype._imgLoaded = function (imgElement) {
            if (imgElement) {
                this._img = imgElement;
                var canvas = this._imgCanvas.nativeElement;
                canvas.width = imgElement.width;
                canvas.height = imgElement.height;
                var ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(imgElement, 0, 0);
                /** set min scale */
                this._updateMinScale(canvas);
            }
        };
        LyImageCropper.prototype._setStylesForContImg = function (values) {
            var newStyles = {};
            if (values.x !== void 0 && values.y !== void 0) {
                var rootRect = this._rootRect();
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
            newStyles['-webkit-transform'] = newStyles.transform;
            newStyles['-webkit-transform-origin'] = newStyles.transformOrigin;
            for (var key in newStyles) {
                if (newStyles.hasOwnProperty(key)) {
                    this._renderer.setStyle(this._imgContainer.nativeElement, key, newStyles[key]);
                }
            }
        };
        LyImageCropper.prototype._resize$ = function () {
            if (this.isLoaded) {
                this.updatePosition();
            }
        };
        LyImageCropper.prototype.selectInputEvent = function (img) {
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
            var readFile = new rxjs.Observable(function (obs) {
                var reader = new FileReader();
                reader.onerror = function (err) { return obs.error(err); };
                reader.onabort = function (err) { return obs.error(err); };
                reader.onload = function (ev) { return setTimeout(function () {
                    obs.next(ev);
                    obs.complete();
                }, 1); };
                return reader.readAsDataURL(_img.files[0]);
            })
                .subscribe({
                next: function (loadEvent) {
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
                    _this._listeners.delete(readFile);
                },
                error: function () {
                    var cropEvent = {
                        name: fileName,
                        size: fileSize,
                        error: exports.ImgCropperError.Other,
                        errorMsg: 'The File could not be loaded.'
                    };
                    _this.clean();
                    _this.error.emit(cropEvent);
                    _this._listeners.delete(readFile);
                    _this.ngOnDestroy();
                }
            });
            this._listeners.add(readFile);
        };
        /** Set the size of the image, the values can be 0 between 1, where 1 is the original size */
        LyImageCropper.prototype.setScale = function (size, noAutoCrop) {
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
        LyImageCropper.prototype._getCenterPoints = function () {
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
        LyImageCropper.prototype.fitToScreen = function () {
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
        LyImageCropper.prototype.fit = function () {
            this.setScale(this.minScale);
        };
        LyImageCropper.prototype._moveStart = function () {
            this.offset = {
                x: this._imgRect.x,
                y: this._imgRect.y,
                left: this._imgRect.xc,
                top: this._imgRect.yc
            };
        };
        LyImageCropper.prototype._move = function (event) {
            var x, y;
            var canvas = this._imgCanvas.nativeElement;
            var scaleFix = this._scal3Fix;
            var config = this.config;
            var startP = this.offset;
            if (!scaleFix || !startP) {
                return;
            }
            var isMinScaleY = canvas.height * scaleFix < config.height && config.extraZoomOut;
            var isMinScaleX = canvas.width * scaleFix < config.width && config.extraZoomOut;
            var limitLeft = (config.width / 2 / scaleFix) >= startP.left - (event.deltaX / scaleFix);
            var limitRight = (config.width / 2 / scaleFix) + (canvas.width) - (startP.left - (event.deltaX / scaleFix)) <= config.width / scaleFix;
            var limitTop = ((config.height / 2 / scaleFix) >= (startP.top - (event.deltaY / scaleFix)));
            var limitBottom = (((config.height / 2 / scaleFix) + (canvas.height) - (startP.top - (event.deltaY / scaleFix))) <= (config.height / scaleFix));
            // Limit for left
            if ((limitLeft && !isMinScaleX) || (!limitLeft && isMinScaleX)) {
                x = startP.x + (startP.left) - (config.width / 2 / scaleFix);
            }
            // Limit for right
            if ((limitRight && !isMinScaleX) || (!limitRight && isMinScaleX)) {
                x = startP.x + (startP.left) + (config.width / 2 / scaleFix) - canvas.width;
            }
            // Limit for top
            if ((limitTop && !isMinScaleY) || (!limitTop && isMinScaleY)) {
                y = startP.y + (startP.top) - (config.height / 2 / scaleFix);
            }
            // Limit for bottom
            if ((limitBottom && !isMinScaleY) || (!limitBottom && isMinScaleY)) {
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
        LyImageCropper.prototype.updatePosition = function (x, y) {
            var hostRect = this._rootRect();
            var croppingContainerRect = this._areaCropperRect();
            if (x === undefined && y === undefined) {
                x = this._imgRect.xc;
                y = this._imgRect.yc;
            }
            x = (croppingContainerRect.left - hostRect.left) - (x - (this.config.width / 2));
            y = (croppingContainerRect.top - hostRect.top) - (y - (this.config.height / 2));
            this._setStylesForContImg({
                x: x, y: y
            });
        };
        LyImageCropper.prototype._slideEnd = function () {
            this._cropIfAutoCrop();
        };
        LyImageCropper.prototype._cropIfAutoCrop = function () {
            if (this.config.autoCrop) {
                this.crop();
            }
        };
        /**+ */
        LyImageCropper.prototype.zoomIn = function () {
            var scale = this._scal3Fix + .05;
            if (scale > 0 && scale <= 1) {
                this.setScale(scale);
            }
            else {
                this.setScale(1);
            }
        };
        /** Clean the img cropper */
        LyImageCropper.prototype.clean = function () {
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
        LyImageCropper.prototype.zoomOut = function () {
            var scale = this._scal3Fix - .05;
            if (scale > this.minScale && scale <= 1) {
                this.setScale(scale);
            }
            else {
                this.fit();
            }
        };
        LyImageCropper.prototype.center = function () {
            var newStyles = __assign({}, this._getCenterPoints());
            this._setStylesForContImg(newStyles);
            this._cropIfAutoCrop();
        };
        /**
         * Load Image from URL
         * @param src URL
         * @param fn function that will be called before emit the event loaded
         */
        LyImageCropper.prototype.setImageUrl = function (src, fn) {
            var _this = this;
            this.clean();
            this._originalImgBase64 = src;
            src = normalizeSVG(src);
            var img = createHtmlImg(src);
            var fileSize = this._sizeInBytes;
            var fileName = this._fileName;
            var defaultType = this._defaultType;
            var cropEvent = {
                name: fileName,
                type: defaultType,
                originalDataURL: src
            };
            if (fileSize) {
                cropEvent.size = fileSize;
            }
            var loadListen = new rxjs.Observable(function (obs) {
                img.onerror = function (err) { return obs.error(err); };
                img.onabort = function (err) { return obs.error(err); };
                img.onload = function () {
                    obs.next(null);
                    obs.complete();
                };
            })
                .subscribe({
                next: function () {
                    _this._imgLoaded(img);
                    cropEvent.width = img.width;
                    cropEvent.height = img.height;
                    _this._isLoadedImg = true;
                    _this.cd.markForCheck();
                    _this._ngZone
                        .onStable
                        .pipe(operators.take(1))
                        .subscribe(function () { return setTimeout(function () { return _this._ngZone.run(function () {
                        _this._updateMinScale(_this._imgCanvas.nativeElement);
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
                    }); }, 0); });
                    _this._listeners.delete(loadListen);
                    _this.ngOnDestroy();
                },
                error: function () {
                    cropEvent.error = exports.ImgCropperError.Type;
                    _this.error.emit(cropEvent);
                    _this._listeners.delete(loadListen);
                    _this.ngOnDestroy();
                }
            });
            this._listeners.add(loadListen);
            // clear
            this._sizeInBytes = null;
            this._fileName = null;
            this._defaultType = undefined;
        };
        LyImageCropper.prototype.rotate = function (degrees) {
            var validDegrees = this._rotation = convertToValidDegrees(degrees);
            var degreesRad = validDegrees * Math.PI / 180;
            var canvas = this._imgCanvas.nativeElement;
            var canvasClon = createCanvasImg(canvas);
            var ctx = canvas.getContext('2d');
            // clear
            ctx.clearRect(0, 0, canvasClon.width, canvasClon.height);
            // rotate canvas image
            var transform = "rotate(" + validDegrees + "deg) scale(" + 1 / this._scal3Fix + ")";
            var transformOrigin = this._imgRect.xc + "px " + this._imgRect.yc + "px 0";
            canvas.style.transform = transform;
            canvas.style.webkitTransform = transform;
            canvas.style.transformOrigin = transformOrigin;
            canvas.style.webkitTransformOrigin = transformOrigin;
            var _a = canvas.getBoundingClientRect(), left = _a.left, top = _a.top;
            // save rect
            var canvasRect = canvas.getBoundingClientRect();
            // remove rotate styles
            canvas.removeAttribute('style');
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
            this._updateMinScale(canvas);
            // set the minimum scale, only if necessary
            if (this.scale < this.minScale) {
                this.setScale(0, true);
            } //                ↑ no AutoCrop
            var rootRect = this._rootRect();
            this._setStylesForContImg({
                x: (left - rootRect.left),
                y: (top - rootRect.top)
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
        LyImageCropper.prototype._updateMinScale = function (canvas) {
            var config = this.config;
            this._minScale = (config.extraZoomOut ? Math.min : Math.max)(config.width / canvas.width, config.height / canvas.height);
        };
        LyImageCropper.prototype.imageSmoothingQuality = function (img, config, quality) {
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
        LyImageCropper.prototype.crop = function (config) {
            var newConfig = config ? ui.mergeDeep({}, this.config || CONFIG_DEFAULT, config) : this.config;
            var cropEvent = this._imgCrop(newConfig);
            this.cd.markForCheck();
            return cropEvent;
        };
        /**
         * @docs-private
         */
        LyImageCropper.prototype._imgCrop = function (myConfig) {
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
        LyImageCropper.prototype._rootRect = function () {
            return this.elementRef.nativeElement.getBoundingClientRect();
        };
        LyImageCropper.prototype._areaCropperRect = function () {
            return this._croppingContainer.nativeElement.getBoundingClientRect();
        };
        LyImageCropper.и = 'LyImageCropper';
        LyImageCropper.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: ui.LyTheme2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone }
        ]; };
        __decorate([
            core.ViewChild('_imgContainer', { static: true })
        ], LyImageCropper.prototype, "_imgContainer", void 0);
        __decorate([
            core.ViewChild('_area', { static: false })
        ], LyImageCropper.prototype, "_croppingContainer", void 0);
        __decorate([
            core.ViewChild('_imgCanvas', { static: true })
        ], LyImageCropper.prototype, "_imgCanvas", void 0);
        __decorate([
            core.Input()
        ], LyImageCropper.prototype, "config", null);
        __decorate([
            core.Input()
        ], LyImageCropper.prototype, "scale", null);
        __decorate([
            core.Input()
        ], LyImageCropper.prototype, "maxFileSize", void 0);
        __decorate([
            core.Output()
        ], LyImageCropper.prototype, "scaleChange", void 0);
        __decorate([
            core.Output()
        ], LyImageCropper.prototype, "loaded", void 0);
        __decorate([
            core.Output()
        ], LyImageCropper.prototype, "cropped", void 0);
        __decorate([
            core.Output()
        ], LyImageCropper.prototype, "error", void 0);
        __decorate([
            core.HostListener('window:resize')
        ], LyImageCropper.prototype, "_resize$", null);
        LyImageCropper = __decorate([
            core.Component({
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                selector: 'ly-img-cropper, ly-image-cropper',
                template: "<div #_imgContainer\n[className]=\"classes.imgContainer\"\n(slidestart)=\"_moveStart()\"\n(slide)=\"_move($event)\"\n(slideend)=\"_slideEnd()\">\n  <canvas #_imgCanvas></canvas>\n</div>\n<div #_area *ngIf=\"_isLoadedImg; else content\" [className]=\"classes.area\" [ngStyle]=\"{\n  width: config.width + 'px',\n  height: config.height + 'px'\n}\"></div>\n<ng-template #content>\n  <div [className]=\"classes.defaultContent\">\n    <input #_fileInput type=\"file\" (change)=\"selectInputEvent($event)\" accept=\"image/*\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n"
            })
        ], LyImageCropper);
        return LyImageCropper;
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
    var DATA_IMAGE_SVG_PREFIX = 'data:image/svg+xml;base64,';
    function normalizeSVG(dataURL) {
        if (window.atob && isSvgImage(dataURL)) {
            var len = dataURL.length / 5;
            var text = window.atob(dataURL.replace(DATA_IMAGE_SVG_PREFIX, ''));
            var span = document.createElement('span');
            span.innerHTML = text;
            var svg = span.querySelector('svg');
            span.setAttribute('style', 'display:none');
            document.body.appendChild(span);
            var width = parseFloat(getComputedStyle(svg).width) || 1;
            var height = parseFloat(getComputedStyle(svg).height) || 1;
            var max = Math.max(width, height);
            svg.setAttribute('width', len / (width / max) + "px");
            svg.setAttribute('height', len / (height / max) + "px");
            var result = DATA_IMAGE_SVG_PREFIX + window.btoa(span.innerHTML);
            document.body.removeChild(span);
            return result;
        }
        return dataURL;
    }
    function isSvgImage(dataUrl) {
        return dataUrl.startsWith(DATA_IMAGE_SVG_PREFIX);
    }
    function createHtmlImg(src) {
        var img = new Image();
        img.src = src;
        img.crossOrigin = 'anonymous';
        return img;
    }

    var LyImageCropperModule = /** @class */ (function () {
        function LyImageCropperModule() {
        }
        LyImageCropperModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                exports: [LyImageCropper],
                providers: [
                    { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: ui.LyHammerGestureConfig }
                ],
                declarations: [LyImageCropper]
            })
        ], LyImageCropperModule);
        return LyImageCropperModule;
    }());

    exports.LyImageCropper = LyImageCropper;
    exports.LyImageCropperModule = LyImageCropperModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-image-cropper.umd.js.map
