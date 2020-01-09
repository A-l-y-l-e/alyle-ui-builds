(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/color')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/button', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/color'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.button = {}), global.ng.core, global.ly.core, global.ly.color));
}(this, (function (exports, core, ui, color) { 'use strict';

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

    var DEFAULT_DISABLE_RIPPLE = false;
    var DEFAULT_SIZE = 'medium';
    var STYLE_PRIORITY = -2;
    var LY_BUTTON_DEFAULT_OPTIONS = new core.InjectionToken('LY_BUTTON_DEFAULT_OPTIONS');
    var STYLES = function (theme, ref) {
        var typography = theme.typography;
        var button = ref.selectorsOf(STYLES);
        return {
            $priority: STYLE_PRIORITY,
            $name: LyButton.и,
            root: function () { return function (className) { return className + "{font-family:" + typography.fontFamily + ";color:" + theme.text.default + ";-webkit-tap-highlight-color:transparent;background-color:" + new color.Color(0, 0, 0, 0) + ";border:0;padding:0 1em;-moz-appearance:none;margin:0;border-radius:3px;outline:none;font-weight:500;box-sizing:border-box;position:relative;justify-content:center;align-items:center;align-content:center;display:inline-flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration-line:none;-webkit-text-decoration-line:none;font-size:" + theme.pxToRem(14) + ";}" + ui.st2c(((theme.button
                && theme.button.root
                && (theme.button.root instanceof ui.StyleCollection
                    ? theme.button.root.setTransformer(function (fn) { return fn(button); }).css
                    : theme.button.root(button)))), "" + className) + className + "::-moz-focus-inner{border:0;}" + className + "::before{content:'';width:100%;height:100%;background:transparent;opacity:0;pointer-events:none;}" + ui.st2c((ui.LY_COMMON_STYLES.fill), className + "::before") + className + button.onFocusByKeyboard + "::before," + className + ":hover::before{background:currentColor;opacity:.13;border-radius:inherit;}"; }; },
            content: function (className) { return className + "{padding:0;display:flex;justify-content:inherit;align-items:inherit;align-content:inherit;width:100%;height:100%;box-sizing:border-box;}"; },
            /** When focus by keyboard */
            onFocusByKeyboard: null,
            animations: function (className) { return className + ":hover," + className + ":hover::before," + className + ":focus," + className + ":focus::before{transition:background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms;}"; }
        };
    };
    /** @docs-private */
    var LyButtonBase = /** @class */ (function () {
        function LyButtonBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyButtonBase;
    }());
    /** @docs-private */
    var LyButtonMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(ui.mixinDisableRipple(LyButtonBase)))))))));
    var LyButton = /** @class */ (function (_super) {
        __extends(LyButton, _super);
        function LyButton(_el, _renderer, _theme, _ngZone, _rippleService, _focusState, _hostClass, _defaultConfig) {
            var _this = _super.call(this, _theme, _ngZone) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._rippleService = _rippleService;
            _this._focusState = _focusState;
            _this._hostClass = _hostClass;
            _this._defaultConfig = _defaultConfig;
            /**
             * Style
             * @docs-private
             */
            _this.classes = _this._theme.renderStyleSheet(STYLES);
            _this._rippleSensitive = false;
            _this.setAutoContrast();
            _this._triggerElement = _el;
            if (ui.Platform.FIREFOX) {
                var newClass = _this._theme.renderStyle('button-ff', function () { return function (className) { return className + "::-moz-focus-inner," + className + "::-moz-focus-inner{border:0;}"; }; }, STYLE_PRIORITY);
                _renderer.addClass(_el.nativeElement, newClass);
            }
            _this._renderer.addClass(_this._el.nativeElement, _this.classes.animations);
            if (!_theme.variables.button) {
                throw ui.getLyThemeVariableUndefinedError('button');
            }
            return _this;
        }
        LyButton_1 = LyButton;
        Object.defineProperty(LyButton.prototype, "rippleSensitive", {
            /** @docs-private */
            get: function () {
                return this._rippleSensitive;
            },
            set: function (value) {
                var newVal = this._rippleSensitive = ui.toBoolean(value);
                this._rippleConfig.sensitive = newVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyButton.prototype, "size", {
            /** Button size */
            get: function () {
                return this._size;
            },
            set: function (val) {
                if (val !== this.size) {
                    this._size = val;
                    var newClass = this._theme.renderStyle(LyButton_1.и + "--" + val + "-size", function (theme, ref) {
                        if (theme.button && theme.button.size && theme.button.size[val]) {
                            return theme.button.size[val](ref.selectorsOf(STYLES));
                        }
                        throw new Error("Value button.size['" + val + "'] not found in ThemeVariables");
                    }, STYLE_PRIORITY);
                    this._sizeClass = this._hostClass.update(newClass, this._sizeClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyButton.prototype, "appearance", {
            /** Button appearance */
            get: function () { return this._appearance; },
            set: function (val) {
                if (val !== this.appearance) {
                    if (val === 'icon' && !this._rippleConfig.centered) {
                        this._rippleConfig.centered = true;
                    }
                    this._appearance = val;
                    var newClass = this._theme.renderStyle(LyButton_1.и + "--" + val + "-appearance", function (theme, ref) {
                        if (!(theme.button.appearance && theme.button.appearance[val])) {
                            throw new Error("Value button.appearance['" + val + "'] not found in ThemeVariables");
                        }
                        return theme.button.appearance[val](ref.selectorsOf(STYLES));
                    }, STYLE_PRIORITY + 1);
                    this._appearanceClass = this._hostClass.update(newClass, this._appearanceClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyButton.prototype, "hostElement", {
            /** @docs-private */
            get: function () {
                return this._el.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        LyButton.prototype.ngOnChanges = function () {
            this.updateStyle(this._el);
            var isDisabled = this.disabled;
            this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
        };
        LyButton.prototype.ngOnInit = function () {
            var button = this._theme.variables.button;
            if (button) {
                this._renderer.addClass(this._el.nativeElement, this.classes.root);
                if (this.size == null && this.appearance == null) {
                    // Apply default config
                    this.size = (this._defaultConfig && this._defaultConfig.size)
                        || DEFAULT_SIZE;
                }
                else {
                    if (this._defaultConfig && this._defaultConfig.appearance) {
                        if (this.appearance == null) {
                            this.appearance = this._defaultConfig.appearance;
                        }
                    }
                }
            }
            // set default disable ripple
            if (this.disableRipple == null) {
                this.disableRipple = DEFAULT_DISABLE_RIPPLE;
            }
        };
        LyButton.prototype.ngAfterViewInit = function () {
            var _this = this;
            var focusState = this._focusState.listen(this._el);
            if (focusState) {
                focusState.subscribe(function (event) {
                    if (_this._onFocusByKeyboardState === true) {
                        _this._renderer.removeClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                        _this._onFocusByKeyboardState = false;
                    }
                    if (event === 'keyboard') {
                        _this._onFocusByKeyboardState = true;
                        _this._renderer.addClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                    }
                });
            }
        };
        LyButton.prototype.focus = function () {
            this._el.nativeElement.focus();
        };
        LyButton.prototype.ngOnDestroy = function () {
            this._focusState.unlisten(this._el);
            this._removeRippleEvents();
        };
        var LyButton_1;
        LyButton.и = 'LyButton';
        LyButton.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: ui.LyTheme2 },
            { type: core.NgZone },
            { type: ui.LyRippleService },
            { type: ui.LyFocusState },
            { type: ui.LyHostClass },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [LY_BUTTON_DEFAULT_OPTIONS,] }] }
        ]; };
        __decorate([
            core.ViewChild('rippleContainer', { static: false })
        ], LyButton.prototype, "_rippleContainer", void 0);
        __decorate([
            core.Input('sensitive')
        ], LyButton.prototype, "rippleSensitive", null);
        __decorate([
            core.Input()
        ], LyButton.prototype, "size", null);
        __decorate([
            core.Input()
        ], LyButton.prototype, "appearance", null);
        LyButton = LyButton_1 = __decorate([
            core.Component({
                selector: 'button[ly-button], a[ly-button]',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "<span [className]=\"classes.content\">\n  <ng-content></ng-content>\n</span>\n<div #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'disabled',
                    'outlined',
                    'elevation',
                    'shadowColor',
                    'disableRipple'
                ],
                providers: [ui.LyHostClass],
                exportAs: 'lyButton'
            }),
            __param(7, core.Optional()), __param(7, core.Inject(LY_BUTTON_DEFAULT_OPTIONS))
        ], LyButton);
        return LyButton;
    }(LyButtonMixinBase));

    var LyButtonModule = /** @class */ (function () {
        function LyButtonModule() {
        }
        LyButtonModule = __decorate([
            core.NgModule({
                exports: [ui.LyCommonModule, LyButton],
                declarations: [LyButton]
            })
        ], LyButtonModule);
        return LyButtonModule;
    }());

    exports.LY_BUTTON_DEFAULT_OPTIONS = LY_BUTTON_DEFAULT_OPTIONS;
    exports.LyButton = LyButton;
    exports.LyButtonBase = LyButtonBase;
    exports.LyButtonMixinBase = LyButtonMixinBase;
    exports.LyButtonModule = LyButtonModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-button.umd.js.map
