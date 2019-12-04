(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/tooltip', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.tooltip = {}), global.ng.core, global.ly.core));
}(this, (function (exports, core, ui) { 'use strict';

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

    var DEFAULT_PLACEMENT = ui.YPosition.below;
    var STYLE_PRIORITY = -2;
    var STYLES = function (theme, ref) {
        var __ = ref.selectorsOf(STYLES);
        return {
            $priority: STYLE_PRIORITY,
            root: function () { return (theme.tooltip
                && theme.tooltip.root
                && (theme.tooltip.root instanceof ui.StyleCollection
                    ? theme.tooltip.root.setTransformer(function (fn) { return fn(__); }).css
                    : theme.tooltip.root(__))); }
        };
    };
    var ɵ0 = STYLES;
    var LyTooltip = /** @class */ (function () {
        function LyTooltip(_theme, _overlay, _el, _renderer, _cd, _focusState, ngZone, scroll) {
            var _this = this;
            this._theme = _theme;
            this._overlay = _overlay;
            this._el = _el;
            this._renderer = _renderer;
            this._cd = _cd;
            this._focusState = _focusState;
            /** @docs-private */
            this.classes = this._theme.renderStyleSheet(STYLES);
            this._listeners = new Map();
            this._scrollVal = 0;
            this.lyTooltipShowDelay = 0;
            this.lyTooltipHideDelay = 0;
            if (ui.Platform.isBrowser) {
                var element_1 = _el.nativeElement;
                if (!ui.Platform.IOS && !ui.Platform.ANDROID) {
                    this._listeners
                        .set('mouseenter', function () { return _this.show(); })
                        .set('mouseleave', function () { return _this.hide(); });
                }
                else {
                    this._listeners.set('touchstart', function () { return _this.show(); });
                }
                this._listeners.forEach(function (listener, event) { return element_1.addEventListener(event, listener); });
                this._scrollSub = scroll.scroll$.subscribe(function () {
                    if (_this._tooltipOverlay) {
                        _this._scrollVal++;
                        if (_this._scrollVal > 10) {
                            ngZone.run(function () { return _this.hide(0); });
                            _this._scrollVal = 0;
                        }
                    }
                });
                _focusState.listen(element_1).subscribe(function (ev) {
                    if (ev === 'keyboard') {
                        ngZone.run(function () { return _this.show(); });
                    }
                    else if (ev == null) {
                        ngZone.run(function () { return _this.hide(); });
                    }
                });
            }
        }
        Object.defineProperty(LyTooltip.prototype, "tooltip", {
            get: function () {
                return this._tooltip;
            },
            set: function (val) {
                this._tooltip = val;
            },
            enumerable: true,
            configurable: true
        });
        LyTooltip.prototype.ngOnInit = function () {
            if (!this.placement && !this.xPosition && !this.yPosition) {
                this.placement = DEFAULT_PLACEMENT;
            }
        };
        LyTooltip.prototype.ngOnDestroy = function () {
            var _this = this;
            this.hide(0);
            // Clean up the event listeners set in the constructor
            this._listeners.forEach(function (listener, event) {
                _this._el.nativeElement.removeEventListener(event, listener);
            });
            if (this._scrollSub) {
                this._scrollSub.unsubscribe();
            }
            this._focusState.unlisten(this._el);
        };
        LyTooltip.prototype.show = function (delay) {
            var _this = this;
            delay = typeof delay === 'number' ? delay : this.lyTooltipShowDelay;
            if (this._hideTimeoutId) {
                clearTimeout(this._hideTimeoutId);
                this._hideTimeoutId = null;
            }
            if (!this._tooltipOverlay && this.tooltip && !this._showTimeoutId) {
                var tooltipRef_1 = this.tooltip;
                this._showTimeoutId = setTimeout(function () {
                    // const rect = this._el.nativeElement.getBoundingClientRect();
                    var tooltip = _this._tooltipOverlay = _this._overlay.create(tooltipRef_1, undefined, {
                        styles: {
                        // top: rect.y,
                        // left: rect.x
                        },
                        onResizeScroll: _this._updatePosition.bind(_this),
                        classes: [
                            _this.classes.root,
                            _this._theme.addStyle('LyTooltip', function (theme) {
                                var _a;
                                return (_a = {
                                        borderRadius: '4px',
                                        fontSize: '10px',
                                        padding: '6px 8px',
                                        opacity: 0,
                                        transition: "opacity " + theme.animations.curves.standard + " 300ms",
                                        left: 0
                                    },
                                    _a[theme.getBreakpoint('XSmall')] = {
                                        padding: '8px 16px',
                                        fontSize: '14px',
                                    },
                                    _a);
                            }, undefined, undefined, STYLE_PRIORITY)
                        ],
                        hasBackdrop: false
                    });
                    _this._updatePosition();
                    // const position = new Positioning(this.placement, this.xPosition, this.yPosition, this._el.nativeElement, tooltip.containerElement, this._theme.variables, 13);
                    // tooltip.containerElement.style.transform = `translate3d(${position.x}px,${position.y}px,0)`;
                    _this._theme.requestAnimationFrame(function () {
                        _this._theme.addStyle('lyTooltip:open', ({
                            opacity: 1,
                        }), tooltip.containerElement, undefined, STYLE_PRIORITY);
                    });
                    _this._showTimeoutId = null;
                    _this._markForCheck();
                }, delay);
            }
        };
        LyTooltip.prototype.hide = function (delay) {
            var _this = this;
            // return;
            var tooltipOverlay = this._tooltipOverlay;
            delay = typeof delay === 'number' ? delay : this.lyTooltipHideDelay;
            if (this._showTimeoutId) {
                clearTimeout(this._showTimeoutId);
                this._showTimeoutId = null;
            }
            if (tooltipOverlay && !this._hideTimeoutId) {
                this._hideTimeoutId = setTimeout(function () {
                    _this._renderer.removeClass(tooltipOverlay.containerElement, _this._theme.addStyle('lyTooltip:open', null));
                    setTimeout(function () { return tooltipOverlay.destroy(); }, 300);
                    _this._tooltipOverlay = null;
                    _this._hideTimeoutId = null;
                    _this._markForCheck();
                }, delay);
            }
        };
        LyTooltip.prototype.toggle = function () {
            if (this._tooltipOverlay) {
                this.hide();
            }
            else {
                this.show();
            }
        };
        LyTooltip.prototype._markForCheck = function () {
            this._cd.markForCheck();
        };
        LyTooltip.prototype._updatePosition = function () {
            var tooltip = this._tooltipOverlay;
            if (tooltip) {
                var position = new ui.Positioning(this.placement, this.xPosition, this.yPosition, this._el.nativeElement, tooltip.containerElement, this._theme.variables, 13);
                tooltip.containerElement.style.transform = "translate3d(" + position.x + "px," + position.y + "px,0)";
            }
        };
        LyTooltip.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: ui.LyOverlay },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: ui.LyFocusState },
            { type: core.NgZone },
            { type: ui.WinScroll }
        ]; };
        __decorate([
            core.Input('lyTooltip')
        ], LyTooltip.prototype, "tooltip", null);
        __decorate([
            core.Input()
        ], LyTooltip.prototype, "lyTooltipShowDelay", void 0);
        __decorate([
            core.Input()
        ], LyTooltip.prototype, "lyTooltipHideDelay", void 0);
        __decorate([
            core.Input('lyTooltipPlacement')
        ], LyTooltip.prototype, "placement", void 0);
        __decorate([
            core.Input('lyTooltipXPosition')
        ], LyTooltip.prototype, "xPosition", void 0);
        __decorate([
            core.Input('lyTooltipYPosition')
        ], LyTooltip.prototype, "yPosition", void 0);
        LyTooltip = __decorate([
            core.Directive({
                selector: '[lyTooltip]',
                exportAs: 'lyTooltip'
            })
        ], LyTooltip);
        return LyTooltip;
    }());

    var LyTooltipModule = /** @class */ (function () {
        function LyTooltipModule() {
        }
        LyTooltipModule = __decorate([
            core.NgModule({
                imports: [ui.LyOverlayModule],
                declarations: [LyTooltip],
                exports: [LyTooltip]
            })
        ], LyTooltipModule);
        return LyTooltipModule;
    }());

    exports.LyTooltip = LyTooltip;
    exports.LyTooltipModule = LyTooltipModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-tooltip.umd.js.map
