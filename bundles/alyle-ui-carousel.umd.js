(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/carousel', ['exports', '@angular/core', '@alyle/ui', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.carousel = {}), global.ng.core, global.ly.core, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, ui, rxjs, operators, common) { 'use strict';

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

    /** Default interval in ms */
    var DEFAULT_INTERVAL = 7000;
    var DEFAULT_AUTOPLAY = true;
    var DEFAULT_HAS_PROGRESS_BAR = false;
    var STYLE_PRIORITY = -2;
    var STYLES = function (theme, ref) {
        var dir = theme.getDirection(ui.DirAlias.before);
        var right = dir === 'right' ? 0 : 180;
        var left = dir === 'left' ? 0 : 180;
        var carousel = ref.selectorsOf(STYLES);
        var barAnimation = ui.keyframesUniqueId.next();
        var after = theme.after, before = theme.before;
        return {
            $priority: STYLE_PRIORITY,
            $global: function (className) { return "@keyframes " + barAnimation + "{" + className + " 0%{transform:translateX(0%);}" + className + " 100%{transform:translateX(" + (dir === 'left' ? '-' : '') + "100%);}}"; },
            root: function () { return function (className) { return className + "{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;position:relative;}" + ui.styleTemplateToString(((theme.carousel
                && theme.carousel.root
                && (theme.carousel.root instanceof ui.StyleCollection
                    ? theme.carousel.root.setTransformer(function (fn) { return fn(carousel); })
                    : theme.carousel.root(carousel)))), "" + className) + className + " " + carousel.actions + ".right{" + after + ":0;transform:rotate(" + right + "deg);}" + className + " " + carousel.actions + ".left{" + before + ":0;transform:rotate(" + left + "deg);}" + className + " svg{display:block;fill:currentColor;}"; }; },
            actions: function (className) { return className + "{position:absolute;top:0;bottom:0;margin:auto .25em;height:1em;width:1em;font-size:36px;cursor:pointer;background:" + theme.background.primary.default.alpha(.25) + ";color:" + theme.text.primary + ";will-change:transform;}"; },
            slideContainer: function (className) { return className + "{overflow:hidden;display:block;width:100%;height:100%;position:relative;touch-action:pan-y !important;}"; },
            slide: function (className) { return className + "{display:flex;width:100%;height:100%;will-change:transform;}" + className + " > ly-carousel-item{width:100%;flex-shrink:0;position:relative;background-size:cover;background-position:center;background-repeat:no-repeat;}"; },
            slideContent: function (className) { return className + "{display:flex;}"; },
            slideAnim: function (className) { return className + " > div{transition:transform 750ms cubic-bezier(.1, 1, 0.5, 1);}"; },
            slideNoEvent: function (className) { return className + ">div{touch-action:initial !important;-webkit-user-drag:initial !important;}"; },
            carouselIndicators: function (className) { return className + "{position:absolute;bottom:0;left:0;right:0;margin:0;box-sizing:border-box;display:flex;align-items:center;justify-content:center;height:48px;}" + className + ">div{display:inline-block;border-radius:50%;cursor:pointer;position:relative;padding:.5em;outline:none;}" + className + ">div }," + className + ">div>div > span{transition:300ms cubic-bezier(0.65, 0.05, 0.36, 1);width:1em;height:1em;transform:scale(.5);border-radius:50%;will-change:transform;display:block;opacity:.65;}" + className + ">div } },'" + className + ">div }>div>span.active," + className + ">div>div > span },'" + className + ">div>div > span>div>span.active{transform:scale(1);opacity:1;}"; },
            barContainer: function (className) { return className + "{background:" + theme.background.primary.default.alpha(.25) + ";height:4px;position:absolute;bottom:0;width:100%;}"; },
            bar: function (className) { return className + "{height:4px;position:absolute;bottom:0;width:100%;animation-name:" + barAnimation + ";animation-timing-function:linear;animation-iteration-count:infinite;background:" + theme.text.primary + ";}"; }
        };
    };
    /** @docs-private */

    (function (CarouselMode) {
        /** full */
        CarouselMode[CarouselMode["default"] = 0] = "default";
        CarouselMode[CarouselMode["inline"] = 1] = "inline";
    })(exports.CarouselMode || (exports.CarouselMode = {}));
    var LyCarousel = /** @class */ (function () {
        function LyCarousel(_el, _cd, _theme, _renderer) {
            this._el = _el;
            this._cd = _cd;
            this._theme = _theme;
            this._renderer = _renderer;
            /** @docs-private */
            this.classes = this._theme.addStyleSheet(STYLES);
            this._intervalFn = null;
            /** @docs-private */
            this.mode = exports.CarouselMode.default;
            this.selectedIndex = 0;
            this._interval = DEFAULT_INTERVAL;
            /** Emits whenever the component is destroyed. */
            this._destroy = new rxjs.Subject();
            this._renderer.addClass(_el.nativeElement, this.classes.root);
        }
        Object.defineProperty(LyCarousel.prototype, "_isIntervalFn", {
            /** @internal */
            get: function () {
                return !!this._intervalFn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCarousel.prototype, "pauseOnHover", {
            /**
             * It will pause the slide change when the mouse cursor passes
             * through the carousel.
             */
            get: function () {
                return this._pauseOnHover;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                this._pauseOnHover = newVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCarousel.prototype, "touch", {
            get: function () {
                return this._touch;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                this._touch = newVal;
                if (newVal) {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.slideNoEvent);
                }
                else {
                    this._renderer.addClass(this._el.nativeElement, this.classes.slideNoEvent);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCarousel.prototype, "autoplay", {
            get: function () {
                return this._autoplay;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                this._autoplay = newVal;
                if (newVal) {
                    this._resetInterval();
                }
                else {
                    this.stop();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCarousel.prototype, "hasProgressBar", {
            get: function () {
                return this._hasProgressBar;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                this._hasProgressBar = newVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCarousel.prototype, "interval", {
            get: function () {
                return this._interval;
            },
            set: function (val) {
                this._interval = val;
                this._resetInterval();
            },
            enumerable: true,
            configurable: true
        });
        LyCarousel.prototype.ngOnInit = function () {
            if (!this.touch) {
                this.touch = false;
            }
            if (this.autoplay == null) {
                this.autoplay = DEFAULT_AUTOPLAY;
            }
            if (this.hasProgressBar == null) {
                this.hasProgressBar = DEFAULT_HAS_PROGRESS_BAR;
            }
        };
        LyCarousel.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideContainer);
            if (ui.Platform.isBrowser) {
                this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
            }
            this.lyItems.changes.pipe(operators.takeUntil(this._destroy)).subscribe(function () { return _this._markForCheck(); });
        };
        LyCarousel.prototype.ngOnDestroy = function () {
            this._destroy.next();
            this._destroy.complete();
            if (ui.Platform.isBrowser) {
                this.stop();
            }
        };
        LyCarousel.prototype._onMouseEnter = function () {
            if (this.pauseOnHover) {
                this.stop();
            }
        };
        LyCarousel.prototype._onMouseLeave = function () {
            if (this.pauseOnHover) {
                this._resetInterval();
            }
        };
        /** @docs-private */
        LyCarousel.prototype._onDragStart = function () {
            var _this = this;
            this.stop();
            this._renderer.removeClass(this.slideContainer.nativeElement, this.classes.slideAnim);
            this._selectedElement = this.lyItems.find(function (_item, index) { return index === _this.selectedIndex; })._nativeElement;
        };
        LyCarousel.prototype._onDrag = function (e) {
            var rect = this._selectedElement.getBoundingClientRect();
            if (Math.abs(e.deltaX) < rect.width) {
                this._onPan(e.deltaX);
            }
            else {
                this._onPan(rect.width * Math.sign(e.deltaX));
            }
        };
        LyCarousel.prototype._onDragEnd = function (e) {
            var rect = this._selectedElement.getBoundingClientRect();
            var dir = this._theme.variables.getDirection(ui.DirAlias.before);
            this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
            this._select(this.selectedIndex);
            if (Math.abs(e.deltaX) > rect.width / 2) {
                if (0 > e.deltaX) {
                    this.next();
                }
                else if (0 < e.deltaX) {
                    this.prev();
                }
            }
            else if (e.additionalEvent) {
                var eventName = e.additionalEvent;
                if (Math.abs(e.velocity) >= 0.25) {
                    if (eventName === 'slideleft') {
                        if (dir === 'left') {
                            this.next();
                        }
                        else {
                            this.prev();
                        }
                    }
                    else if (eventName === 'slideright') {
                        if (dir === 'right') {
                            this.next();
                        }
                        else {
                            this.prev();
                        }
                    }
                }
            }
            this._renderer.removeStyle(this._slide.nativeElement, 'transform');
        };
        LyCarousel.prototype._onDragCancel = function () {
            this._renderer.addClass(this.slideContainer.nativeElement, this.classes.slideAnim);
            this._select(this.selectedIndex);
            this._resetInterval();
        };
        LyCarousel.prototype._select = function (val, notResetInterval) {
            this.selectedIndex = val;
            if (this.mode === exports.CarouselMode.default) {
                this._slideClass = this._theme.addStyle("lyCarousel.select:" + val.toString(32), function (theme) {
                    var sign = theme.getDirection(ui.DirAlias.before) === 'left' ? -1 : 1;
                    return {
                        transform: "translateX(" + 100 * val * sign + "%)"
                    };
                }, this._slide.nativeElement, this._slideClass, STYLE_PRIORITY);
            }
            if (!notResetInterval) {
                if (this.autoplay && !this.pauseOnHover) {
                    this._resetInterval();
                }
            }
        };
        LyCarousel.prototype.prev = function () {
            var len = this.lyItems.length - 1;
            var prev = this.selectedIndex - 1;
            this._select(prev < 0 ? len : prev);
        };
        LyCarousel.prototype.next = function (notResetInterval) {
            var len = this.lyItems.length - 1;
            var next = this.selectedIndex + 1;
            this._select(next > len ? 0 : next, notResetInterval);
        };
        LyCarousel.prototype.stop = function () {
            if (this._intervalFn !== null) {
                clearInterval(this._intervalFn);
                this._intervalFn = null;
            }
        };
        LyCarousel.prototype._resetInterval = function () {
            var _this = this;
            if (ui.Platform.isBrowser) {
                this.stop();
                this._restartProgressBarAnimation();
                this._markForCheck();
                this._intervalFn = setInterval(function () {
                    _this.next(true);
                    _this._restartProgressBarAnimation();
                    _this._markForCheck();
                }, this.interval);
            }
        };
        LyCarousel.prototype._restartProgressBarAnimation = function () {
            if (this.hasProgressBar && this._progressBar) {
                var el = this._progressBar.nativeElement;
                // Hack for restart animation
                el.style.animationName = 'øfakeName';
                window.getComputedStyle(el).getPropertyValue('opacity');
                el.style.animationName = '';
            }
        };
        LyCarousel.prototype._onPan = function (x) {
            var sign = this._theme.variables.getDirection(ui.DirAlias.before) === 'left' ? -1 : 1;
            this._renderer.setStyle(this._slide.nativeElement, 'transform', "translateX(calc(" + sign * 100 * this.selectedIndex + "% + " + x + "px))");
        };
        LyCarousel.prototype._markForCheck = function () {
            this._cd.markForCheck();
        };
        LyCarousel.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: ui.LyTheme2 },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.ViewChild('slideContainer', { static: false })
        ], LyCarousel.prototype, "slideContainer", void 0);
        __decorate([
            core.ViewChild('_slide', { static: false })
        ], LyCarousel.prototype, "_slide", void 0);
        __decorate([
            core.ViewChild('_progressBar', { static: false })
        ], LyCarousel.prototype, "_progressBar", void 0);
        __decorate([
            core.ContentChildren(core.forwardRef(function () { return LyCarouselItem; }))
        ], LyCarousel.prototype, "lyItems", void 0);
        __decorate([
            core.Input()
        ], LyCarousel.prototype, "mode", void 0);
        __decorate([
            core.Input()
        ], LyCarousel.prototype, "selectedIndex", void 0);
        __decorate([
            core.Input()
        ], LyCarousel.prototype, "pauseOnHover", null);
        __decorate([
            core.Input()
        ], LyCarousel.prototype, "touch", null);
        __decorate([
            core.Input()
        ], LyCarousel.prototype, "autoplay", null);
        __decorate([
            core.Input()
        ], LyCarousel.prototype, "hasProgressBar", null);
        __decorate([
            core.Input()
        ], LyCarousel.prototype, "interval", null);
        LyCarousel = __decorate([
            core.Component({
                selector: 'ly-carousel',
                template: "<div\n(slidestart)=\"touch && _onDragStart()\"\n(slideleft)=\"touch && _onDrag($event)\"\n(slideright)=\"touch && _onDrag($event)\"\n(slidecancel)=\"touch && _onDragCancel()\"\n(slideend)=\"touch && _onDragEnd($event)\"\n#slideContainer\n>\n  <div #_slide [className]=\"classes.slide\">\n    <ng-content></ng-content>\n  </div>\n  <div [className]=\"classes.carouselIndicators\" *ngIf=\"lyItems.length !== 1\">\n    <div tabindex=\"0\"\n      (click)=\"_select(i)\"\n      role=\"button\"\n      *ngFor=\"let item of lyItems; index as i\"\n    >\n      <span ly-paper\n      color=\"#000\"\n      bg=\"background:primary\"\n      [class.active]=\"selectedIndex==i\"\n      [elevation]=\"8\"\n      [shadowColor]=\"'text'\"></span>\n    </div>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'left']\" (click)=\"prev()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div [ngClass]=\"[classes.actions, 'right']\" (click)=\"next()\">\n    <svg viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\n  </div>\n  <div\n    [className]=\"classes.barContainer\"\n    *ngIf=\"hasProgressBar && _isIntervalFn && interval && autoplay\"\n  >\n    <div\n      [className]=\"classes.bar\"\n      #_progressBar\n      [style.animation-duration]=\"interval + 'ms'\"\n    ></div>\n  </div>\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                host: {
                    '(mouseenter)': '_onMouseEnter()',
                    '(mouseleave)': '_onMouseLeave()'
                }
            })
        ], LyCarousel);
        return LyCarousel;
    }());
    var LyCarouselItem = /** @class */ (function () {
        function LyCarouselItem(_theme, _el) {
            this._theme = _theme;
            this._nativeElement = _el.nativeElement;
        }
        Object.defineProperty(LyCarouselItem.prototype, "srcImg", {
            set: function (value) {
                this._className = this._theme.addStyle("ly-carousel-img:" + value, ("background-image: url('" + value + "')"), this._nativeElement, this._className, STYLE_PRIORITY);
            },
            enumerable: true,
            configurable: true
        });
        LyCarouselItem.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], LyCarouselItem.prototype, "srcImg", null);
        LyCarouselItem = __decorate([
            core.Directive({
                selector: 'ly-carousel-item'
            })
        ], LyCarouselItem);
        return LyCarouselItem;
    }());

    var LyCarouselModule = /** @class */ (function () {
        function LyCarouselModule() {
        }
        LyCarouselModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule, ui.LyCommonModule],
                exports: [LyCarouselItem, LyCarousel, ui.LyCommonModule],
                declarations: [LyCarouselItem, LyCarousel]
            })
        ], LyCarouselModule);
        return LyCarouselModule;
    }());

    exports.LyCarousel = LyCarousel;
    exports.LyCarouselItem = LyCarouselItem;
    exports.LyCarouselModule = LyCarouselModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-carousel.umd.js.map
