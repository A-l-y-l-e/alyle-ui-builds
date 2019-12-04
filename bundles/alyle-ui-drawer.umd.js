(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/drawer', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.drawer = {}), global.ng.core, global.ly.core, global.ng.common));
}(this, (function (exports, core, ui, common) { 'use strict';

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

    var DEFAULT_MODE = 'side';
    var DEFAULT_WIDTH = '230px';
    var DEFAULT_VALUE = '';
    var STYLE_PRIORITY = -2;
    var DEFAULT_POSITION = ui.XPosition.before;
    var STYLES = function (theme, ref) {
        var __ = ref.selectorsOf(STYLES);
        return {
            $name: LyDrawerContent.и,
            $priority: STYLE_PRIORITY + 1.9,
            root: function () { return (theme.drawer
                && theme.drawer.root
                && (theme.drawer.root instanceof ui.StyleCollection
                    ? theme.drawer.root.setTransformer(function (fn) { return fn(__); }).css
                    : theme.drawer.root(__))); },
            drawerContainer: function (className) { return className + "{display:block;position:relative;overflow:hidden;-webkit-overflow-scrolling:touch;}"; },
            drawer: function (className) { return className + "{display:block;position:fixed;z-index:" + theme.zIndex.drawer + ";overflow:auto;visibility:hidden;}"; },
            drawerContent: function (className) { return className + "{display:block;}"; },
            drawerOpened: function (className) { return className + "{transform:translate(0px, 0px);visibility:visible;}"; },
            drawerClosed: null,
            backdrop: function (className) { return "" + ui.styleTemplateToString((ui.LY_COMMON_STYLES.fill), "" + className) + className + "{background-color:" + theme.drawer.backdrop + ";}"; },
            transition: function (className) { return className + "{transition:" + theme.animations.durations.complex + "ms " + theme.animations.curves.deceleration + ";transition-property:transform, margin, visibility;}"; }
        };
    };
    var LyDrawerContent = /** @class */ (function () {
        function LyDrawerContent(_renderer, _el, drawerContainer) {
            this._renderer = _renderer;
            this._el = _el;
            this._renderer.addClass(this._el.nativeElement, drawerContainer.classes.drawerContent);
        }
        LyDrawerContent.prototype._getHostElement = function () {
            return this._el.nativeElement;
        };
        LyDrawerContent.и = 'LyDrawerContent';
        LyDrawerContent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: undefined, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return LyDrawerContainer; }),] }] }
        ]; };
        LyDrawerContent = __decorate([
            core.Directive({
                selector: 'ly-drawer-content'
            }),
            __param(2, core.Inject(core.forwardRef(function () { return LyDrawerContainer; })))
        ], LyDrawerContent);
        return LyDrawerContent;
    }());
    var LyDrawerContainer = /** @class */ (function () {
        function LyDrawerContainer(_theme, _renderer, _el) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._el = _el;
            /** @docs-private */
            this.classes = this._theme.renderStyleSheet(STYLES);
            this._openDrawers = 0;
            this._renderer.addClass(this._el.nativeElement, this.classes.drawerContainer);
        }
        LyDrawerContainer.prototype._getHostElement = function () {
            return this._el.nativeElement;
        };
        LyDrawerContainer.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.ContentChild(core.forwardRef(function () { return LyDrawerContent; }), { static: true })
        ], LyDrawerContainer.prototype, "_drawerContent", void 0);
        LyDrawerContainer = __decorate([
            core.Directive({
                selector: 'ly-drawer-container'
            })
        ], LyDrawerContainer);
        return LyDrawerContainer;
    }());
    var LyDrawer = /** @class */ (function () {
        function LyDrawer(_theme, _styleRenderer, _renderer, _el, _drawerContainer, _vcr, _winResize, _cd, _zone) {
            this._theme = _theme;
            this._styleRenderer = _styleRenderer;
            this._renderer = _renderer;
            this._el = _el;
            this._drawerContainer = _drawerContainer;
            this._vcr = _vcr;
            this._winResize = _winResize;
            this._cd = _cd;
            this._zone = _zone;
            /**
             * Styles
             * @docs-private
             */
            this.classes = this._drawerContainer.classes;
            this._position = DEFAULT_POSITION;
            this.mode = DEFAULT_MODE;
            this._renderer.addClass(this._el.nativeElement, _drawerContainer.classes.drawer);
        }
        LyDrawer_1 = LyDrawer;
        Object.defineProperty(LyDrawer.prototype, "opened", {
            get: function () {
                return this._opened;
            },
            set: function (val) {
                if (val !== this.opened) {
                    this._opened = ui.toBoolean(val);
                    this._isOpen = this._opened;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDrawer.prototype, "hasBackdrop", {
            get: function () {
                return this._hasBackdrop;
            },
            set: function (val) {
                this._hasBackdrop = val == null ? null : ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDrawer.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (val) {
                if (val !== this.position) {
                    this._position = val;
                    this[0x1] = this._styleRenderer.add(LyDrawer_1.и + "--position-" + val, function (theme) { return function (className) { return className + "{" + theme.getDirection(val) + ":0;}"; }; }, STYLE_PRIORITY, this[0x1]);
                }
            },
            enumerable: true,
            configurable: true
        });
        LyDrawer.prototype.ngOnChanges = function () {
            this._updateBackdrop();
            this._updateAnimations();
            var __mode = this.mode;
            var __forceModeOverOpened = this._forceModeOverOpened;
            var __opened = this.opened;
            var __width = this.width;
            var __height = this.height;
            var __position = this.position;
            var __spacingAbove = this.spacingAbove;
            var __spacingBelow = this.spacingBelow;
            var __spacingBefore = this.spacingBefore;
            var __spacingAfter = this.spacingAfter;
            if (__width && __height) {
                throw new Error("`width` and `height` are defined, you can only define one");
            }
            else if (!__width) {
                if (!__height) {
                    /** set default __width if `width` & `height` is `undefined` */
                    __width = DEFAULT_WIDTH;
                }
            }
            if ((this._isOpen && __opened) || (this._isOpen) || __forceModeOverOpened) {
                /** create styles for mode side */
                this._drawerClass = this._theme.updateClass(this._el.nativeElement, this._renderer, this._drawerContainer.classes.drawerOpened, this._drawerClass);
                // styles for <ly-drawer-content>
                if (__mode === 'side') {
                    var newKeyDrawerContent = "ly-drawer-content----:" + (__width || DEFAULT_VALUE) + "\u00B7" + (__position || DEFAULT_VALUE);
                    this._drawerContentClass = this._theme.addStyle(newKeyDrawerContent, function (theme) {
                        var drawerContentStyles = {};
                        var positionVal = "margin-" + __position;
                        if (__width) {
                            ui.eachMedia(__width, function (val, media) {
                                var newStyleWidth = val === 'over' ? '0px' : toPx(val);
                                if (media) {
                                    var breakPoint = theme.getBreakpoint(media);
                                    var styleOfBreakPoint = createEmptyPropOrUseExisting(drawerContentStyles, breakPoint);
                                    styleOfBreakPoint[positionVal] = newStyleWidth;
                                }
                                else {
                                    drawerContentStyles[positionVal] = newStyleWidth;
                                }
                            });
                        }
                        return drawerContentStyles;
                    }, this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
                }
                else if (this._drawerContentClass) {
                    /** remove styles for <ly-drawer-content> */
                    this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
                    this._drawerContentClass = undefined;
                }
            }
            else {
                if (this._drawerContentClass) {
                    this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this._drawerContentClass);
                    this._drawerContentClass = undefined;
                }
                if (this._drawerClass) {
                    this._renderer.removeClass(this._el.nativeElement, this._drawerClass);
                    this._drawerClass = undefined;
                }
            }
            /** default styles */
            this._drawerRootClass = this._theme.addStyle("ly-drawer-root:" + __width + "\u00B7" + __height + "\u00B7" + __spacingAbove + "\u00B7" + __spacingBelow + "\u00B7" + __spacingBefore + "\u00B7" + __spacingAfter + "\u00B7" + __position + "\u00B7" + __mode + "\u00B7" + __forceModeOverOpened, function (theme) {
                var stylesDrawerRoot = {};
                var pos = theme.getDirection(__position);
                var positionSign = __position === 'above' ? '-' : '+';
                if (__width) {
                    var dirXSign_1 = pos === ui.DirPosition.left ? '-' : '+';
                    ui.eachMedia(__width, function (val, media) {
                        if ((__mode === 'over' || __forceModeOverOpened) && (val === '0' || val === 'over')) {
                            return;
                        }
                        var newVal = val === 'over' ? '0px' : toPx(val);
                        var newStyleWidth = newVal;
                        var newTranslateX = "translateX(" + (dirXSign_1 + newVal) + ")";
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
                            var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                            styleOfBreakPoint.width = newStyleWidth;
                            styleOfBreakPoint.transform = newTranslateX;
                        }
                        else {
                            stylesDrawerRoot.width = newStyleWidth;
                            stylesDrawerRoot.transform = newTranslateX;
                        }
                    });
                }
                else if (__height) {
                    ui.eachMedia(__height, function (val, media) {
                        var newStyleHeight = toPx(val);
                        var newTranslateY = "translateY(" + (positionSign + toPx(val)) + ")";
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
                            var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                            styleOfBreakPoint.height = newStyleHeight;
                            styleOfBreakPoint.transform = newTranslateY;
                        }
                        else {
                            stylesDrawerRoot.height = newStyleHeight;
                            stylesDrawerRoot.transform = newTranslateY;
                        }
                    });
                }
                if (__position === 'before' || __position === 'after') {
                    ui.eachMedia(__spacingAbove, function (val, media) {
                        var newStyleSpacingTop = toPx(val || 0);
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
                            var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                            styleOfBreakPoint.top = newStyleSpacingTop;
                        }
                        else {
                            stylesDrawerRoot.top = newStyleSpacingTop;
                        }
                    });
                    ui.eachMedia(__spacingBelow, function (val, media) {
                        var newStyleSpacingBottom = toPx(val || 0);
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
                            var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                            styleOfBreakPoint.bottom = newStyleSpacingBottom;
                        }
                        else {
                            stylesDrawerRoot.bottom = newStyleSpacingBottom;
                        }
                    });
                }
                else if (__position === ui.YPosition.above || __position === ui.YPosition.below) {
                    ui.eachMedia(__spacingBefore, function (val, media) {
                        var newStyleSpacingBefore = toPx(val || 0);
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
                            var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                            styleOfBreakPoint.before = newStyleSpacingBefore;
                        }
                        else {
                            stylesDrawerRoot.before = newStyleSpacingBefore;
                        }
                    });
                    ui.eachMedia(__spacingAfter, function (val, media) {
                        var newStyleSpacingAfter = toPx(val || 0);
                        if (media) {
                            var breakPoint = theme.getBreakpoint(media);
                            var styleOfBreakPoint = createEmptyPropOrUseExisting(stylesDrawerRoot, breakPoint);
                            styleOfBreakPoint.after = newStyleSpacingAfter;
                        }
                        else {
                            stylesDrawerRoot.after = newStyleSpacingAfter;
                        }
                    });
                }
                return stylesDrawerRoot;
            }, this._el.nativeElement, this._drawerRootClass, __mode === 'side' ? STYLE_PRIORITY : STYLE_PRIORITY + 1);
            this._fromToggle = false;
        };
        LyDrawer.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (ui.Platform.isBrowser) {
                this._tabResizeSub = this._winResize.resize$.subscribe(function () {
                    _this.ngOnChanges();
                });
            }
        };
        LyDrawer.prototype.ngOnDestroy = function () {
            if (this._tabResizeSub) {
                this._tabResizeSub.unsubscribe();
            }
        };
        LyDrawer.prototype.toggle = function () {
            var width = getComputedStyle(this._el.nativeElement).width;
            this._fromToggle = true;
            if (width === '0px') {
                this._forceModeOverOpened = true;
                this._isOpen = true;
            }
            else {
                if (this._forceModeOverOpened) {
                    this._forceModeOverOpened = false;
                    this._isOpen = this.opened;
                }
                else {
                    this._isOpen = !this._isOpen;
                }
            }
            this.ngOnChanges();
        };
        LyDrawer.prototype._contentHasMargin = function () {
            var content = this._drawerContainer._drawerContent._getHostElement();
            var container = this._drawerContainer._getHostElement();
            return (content.offsetWidth === container.offsetWidth);
        };
        LyDrawer.prototype._updateBackdrop = function () {
            var _this = this;
            if (((this._isOpen && this.opened) || this._isOpen) &&
                (this.hasBackdrop != null
                    ? this.hasBackdrop
                    : (this.mode === 'over' || (this._forceModeOverOpened && this._contentHasMargin())))) {
                // create only if is necessary
                if (!this._viewRef) {
                    this._zone.run(function () {
                        _this._drawerContainer._openDrawers++;
                        _this._viewRef = _this._vcr.createEmbeddedView(_this._backdrop);
                        _this._cd.markForCheck();
                        _this._viewRef.rootNodes[0].style.zIndex = "" + _this._drawerContainer._openDrawers;
                    });
                }
            }
            else if (this._viewRef) {
                this._zone.run(function () {
                    _this._drawerContainer._openDrawers--;
                    _this._vcr.clear();
                    _this._viewRef = undefined;
                    _this._cd.markForCheck();
                    if (_this._forceModeOverOpened) {
                        _this._forceModeOverOpened = false;
                        _this._isOpen = _this.opened;
                    }
                });
            }
        };
        LyDrawer.prototype._updateAnimations = function () {
            if (this._fromToggle && !this._isAnimation) {
                this._renderer.addClass(this._el.nativeElement, this.classes.transition);
                this._renderer.addClass(this._drawerContainer._drawerContent._getHostElement(), this.classes.transition);
                this._isAnimation = true;
            }
            else if (!this._fromToggle && this._isAnimation) {
                this._renderer.removeClass(this._el.nativeElement, this.classes.transition);
                this._renderer.removeClass(this._drawerContainer._drawerContent._getHostElement(), this.classes.transition);
                this._isAnimation = false;
            }
        };
        var LyDrawer_1;
        LyDrawer.и = 'LyDrawer';
        LyDrawer.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: ui.StyleRenderer },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: LyDrawerContainer },
            { type: core.ViewContainerRef },
            { type: ui.WinResize },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone }
        ]; };
        __decorate([
            core.ViewChild(core.TemplateRef, { static: false })
        ], LyDrawer.prototype, "_backdrop", void 0);
        __decorate([
            core.Input()
        ], LyDrawer.prototype, "opened", null);
        __decorate([
            core.Input()
        ], LyDrawer.prototype, "mode", void 0);
        __decorate([
            core.Input()
        ], LyDrawer.prototype, "spacingAbove", void 0);
        __decorate([
            core.Input()
        ], LyDrawer.prototype, "spacingBelow", void 0);
        __decorate([
            core.Input()
        ], LyDrawer.prototype, "spacingBefore", void 0);
        __decorate([
            core.Input()
        ], LyDrawer.prototype, "spacingAfter", void 0);
        __decorate([
            core.Input()
        ], LyDrawer.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], LyDrawer.prototype, "height", void 0);
        __decorate([
            core.Input()
        ], LyDrawer.prototype, "hasBackdrop", null);
        __decorate([
            core.Input()
        ], LyDrawer.prototype, "position", null);
        LyDrawer = LyDrawer_1 = __decorate([
            core.Component({
                selector: 'ly-drawer',
                template: "<ng-content></ng-content>\n<ng-template>\n  <div [className]=\"classes.backdrop\" (click)=\"toggle()\"></div>\n</ng-template>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                exportAs: 'lyDrawer',
                providers: [
                    ui.LyHostClass,
                    ui.StyleRenderer
                ]
            })
        ], LyDrawer);
        return LyDrawer;
    }());
    /**
     * convert number to px
     */
    function toPx(val) {
        if (typeof val === 'number') {
            return val + "px";
        }
        else {
            return val;
        }
    }
    function createEmptyPropOrUseExisting(object, key, _new) {
        return key in object
            ? object[key]
            : object[key] = _new || {};
    }

    var LyDrawerModule = /** @class */ (function () {
        function LyDrawerModule() {
        }
        LyDrawerModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    ui.LyCommonModule
                ],
                exports: [LyDrawer, LyDrawerContainer, LyDrawerContent],
                declarations: [LyDrawer, LyDrawerContainer, LyDrawerContent],
            })
        ], LyDrawerModule);
        return LyDrawerModule;
    }());

    exports.LyDrawer = LyDrawer;
    exports.LyDrawerContainer = LyDrawerContainer;
    exports.LyDrawerContent = LyDrawerContent;
    exports.LyDrawerModule = LyDrawerModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-drawer.umd.js.map
