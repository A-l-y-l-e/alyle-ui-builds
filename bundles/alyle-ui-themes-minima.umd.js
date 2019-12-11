(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui'), require('@alyle/ui/responsive'), require('@angular/core'), require('@alyle/ui/color')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/themes/minima', ['exports', '@alyle/ui', '@alyle/ui/responsive', '@angular/core', '@alyle/ui/color'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly['themes/Minima'] = {}), global.ly.core, global.ly.responsive, global.ng.core, global.ly.color));
}(this, (function (exports, ui, responsive, core, color) { 'use strict';

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

    var iconButton = {
        size: '48px'
    };
    var icon = {
        fontSize: '24px'
    };
    var zIndex = {
        toolbar: 1000,
        drawer: 1100,
        overlay: 1200
    };
    var RippleVariables = {
        transition: {
            opacity: 'cubic-bezier(0.4,0.0,1,1)',
            transform: 'cubic-bezier(0, 1, 0.6, 1)'
        },
        duration: 950
    };
    var animations = {
        curves: {
            standard: 'cubic-bezier(0.4,0.0,0.2,1)',
            deceleration: 'cubic-bezier(0.0,0.0,0.2,1)',
            acceleration: 'cubic-bezier(0.4,0.0,1,1)',
            sharp: 'cubic-bezier(0.4,0.0,0.6,1)'
        },
        durations: {
            complex: 375,
            entering: 225,
            exiting: 195
        }
    };

    var MinimaBase = /** @class */ (function (_super) {
        __extends(MinimaBase, _super);
        function MinimaBase() {
            var _this = _super.call(this) || this;
            _this.typography = {
                fontFamily: "'Roboto', sans-serif",
                htmlFontSize: 16,
                fontSize: 14,
                gutterTop: 1,
                gutterBottom: .35,
                lyTyp: {}
            };
            _this.iconButton = iconButton;
            _this.icon = icon;
            _this.breakpoints = responsive.Breakpoints;
            _this.zIndex = zIndex;
            _this.ripple = RippleVariables;
            _this.animations = animations;
            _this.direction = ui.Dir.ltr;
            _this.button = {
                size: {
                    small: function () { return function (className) { return className + "{padding:0 8px;font-size:" + _this.pxToRem(13) + ";min-height:32px;min-width:48p;}"; }; },
                    medium: function () { return function (className) { return className + "{padding:0 14px;min-height:36px;min-width:64px;}"; }; },
                    large: function () { return function (className) { return className + "{padding:0 21px;font-size:" + _this.pxToRem(15) + ";min-height:40px;min-width:96px;}"; }; }
                },
                appearance: {
                    icon: function () { return function (className) { return className + "{min-width:40px;width:40px;height:40px;padding:0;border-radius:50%;}"; }; },
                    fab: function () { return function (className) { return className + "{min-width:56px;width:56px;height:56px;padding:0;border-radius:50%;}"; }; },
                    miniFab: function () { return function (className) { return className + "{min-width:40px;width:40px;height:40px;padding:0;border-radius:50%;}"; }; }
                }
            };
            _this.badge = {
                appearance: {
                    default: function () { return function (className) { return className + "{padding:0 6px;min-width:22px;height:22px;border-radius:2em;}"; }; },
                    dot: function () { return function (className) { return className + "{width:6px;height:6px;border-radius:50%;}"; }; }
                }
            };
            _this.checkbox = {
                color: function (checkbox, color) { return function (className) { return "" + className + checkbox.checked + " " + checkbox.icon + "{color:" + color + ";}" + className + checkbox.checked + ":not({disabled}) " + checkbox.icon + "{box-shadow:" + ui.shadowBuilder(1, color) + ";}"; }; }
            };
            _this.expansion = {
                root: function (classes) { return function (className) { return className + " " + classes.panelHeader + "{height:48px;}" + className + " " + classes.expanded + " " + classes.panelHeader + "{height:64px;}"; }; },
                appearance: {
                    popOut: function (classes) { return function (className) { return className + " " + classes.panel + "{transition:margin " + _this.animations.durations.entering + "ms " + _this.animations.curves.standard + ";}" + className + " " + classes.expanded + classes.panel + "{margin:16px 0;}" + className + " " + classes.expanded + classes.panel + ":first-child{margin-top:0;}" + className + " " + classes.expanded + classes.panel + ":last-child{margin-bottom:0jj;}"; }; }
                }
            };
            _this.field = {
                appearance: {
                    standard: new ui.StyleCollection(function (classes) { return function (className) { return className + ":not(" + classes.disabled + ") " + classes.container + ":hover:after{border-bottom-color:currentColor;}" + className + classes.disabled + " " + classes.container + ":after{border-bottom-style:dotted;border-color:inherit;}" + className + " textarea{inputNative}{margin:0.25em 0;}" + className + " " + classes.inputNative + ":not(textarea){padding:0.25em 0;}" + className + " " + classes.container + "{padding:1em 0 0;}" + className + " " + classes.container + ":after{border-bottom-style:solid;border-bottom-width:1px;}" + className + classes.focused + " " + classes.container + ":after{border-width:2px;border-color:currentColor;}" + className + " " + classes.label + "{margin:0.25em 0;}" + className + " " + classes.placeholder + "{margin:0.25em 0;}" + className + " " + classes.floatingLabel + "{transform:translateY(-1.25em);}"; }; }),
                    outlined: new ui.StyleCollection(function (classes) { return function (className) { return className + ":not(" + classes.focused + "):not({disabled}):hover " + classes.fieldset + "{border-color:currentColor;}" + className + classes.focused + " " + classes.fieldset + "{border-width:2px;border-color:inherit;}" + className + " textarea" + classes.inputNative + "{margin:1em 0;}" + className + " " + classes.inputNative + ":not(textarea){padding:1em 0;}" + className + " " + classes.container + "{padding:0 0.75em;}" + className + " " + classes.fieldset + "{border-width:1px;border-radius:5px;padding:0 .5em;}" + className + " " + classes.prefix + ":after{padding:0.25em;}" + className + " " + classes.suffix + ":after{padding:0.25em;}" + className + " " + classes.label + "{margin:1em 0;}" + className + " " + classes.placeholder + "{margin:1em 0;}" + className + " " + classes.floatingLabel + classes.label + "{transform:translateY(-1.75em);}" + className + " " + classes.hintContainer + "{padding:0 0.75em;}"; }; }),
                    filled: new ui.StyleCollection(function (classes) { return function (className) { return className + ":not(" + classes.focused + "):not(" + classes.disabled + ") " + classes.container + ":hover:after{border-bottom-width:1px;}" + className + " textarea" + classes.inputNative + "{margin:1.59375em 0 0.40625em;}" + className + " " + classes.inputNative + ":not(textarea){padding:1.59375em 0 0.40625em;}" + className + " " + classes.container + "{border-radius:5px 5px 0 0;padding:0 0.75em;}" + className + " " + classes.container + ":after{border-bottom-style:solid;border-bottom-color:currentColor;border-bottom-width:0;}" + className + classes.focused + " " + classes.container + ":after{border-bottom-width:2px;}" + className + " " + classes.placeholder + "{margin:1.59375em 0 0.40625em;}" + className + " " + classes.label + "{margin:1em 0;}" + className + " " + classes.floatingLabel + classes.label + "{transform:translateY(-.75em);}" + className + " " + classes.hintContainer + "{padding:0 0.75em;}"; }; })
                }
            };
            _this.toolbar = {
                appearance: {
                    dense: new ui.StyleCollection(function () { return function (className) { return className + "{height:56px;}"; }; })
                }
            };
            _this.slider = {
                appearance: {
                    standard: new ui.StyleCollection()
                },
                color: function (_a, color) {
                    var track = _a.track, thumb = _a.thumb, thumbLabel = _a.thumbLabel, tick = _a.tick, disabled = _a.disabled, thumbContentFocused = _a.thumbContentFocused, tickActive = _a.tickActive, bg = _a.bg, thumbContent = _a.thumbContent, horizontal = _a.horizontal, vertical = _a.vertical, thumbVisible = _a.thumbVisible, thumbNotVisible = _a.thumbNotVisible, sliding = _a.sliding;
                    return function (className) { return className + " " + track + "," + className + " " + thumb + "," + className + " " + thumbLabel + "," + className + " " + bg + "," + className + " " + tick + "{background-color:" + color + ";}" + className + ":not(" + disabled + ") " + thumbContentFocused + " " + thumb + "::before," + className + ":not(" + disabled + ") " + thumb + ":hover::before{box-shadow:0 0 0 8px " + color.alpha(.13) + ";}" + className + sliding + " " + thumbContentFocused + " " + thumb + "::before{box-shadow:0 0 0 16px " + color.alpha(.13) + ";}" + className + " " + tickActive + "{background-color:" + color.luminance(0.6) + ";}" + className + " " + bg + "{opacity:.3;}" + className + ":not(" + disabled + ") " + thumbContent + "::before{background:" + color + ";}" + className + ":not(" + disabled + ")" + horizontal + thumbVisible + " " + thumbContent + "::before," + className + ":not(" + disabled + ")" + horizontal + ":not(" + thumbNotVisible + ") " + thumbContent + ":hover::before," + className + ":not(" + disabled + ")" + horizontal + ":not(" + thumbNotVisible + ") " + thumbContent + thumbContentFocused + "::before{background:linear-gradient(0deg, " + color + " 0%, rgba(0, 0, 0, 0) 50%, " + color + " 100%);}" + className + ":not(" + disabled + ")" + vertical + thumbVisible + " " + thumbContent + "::before," + className + ":not(" + disabled + ")" + vertical + ":not(" + thumbNotVisible + ") " + thumbContent + ":hover::before," + className + ":not(" + disabled + ")" + vertical + ":not(" + thumbNotVisible + ") " + thumbContent + thumbContentFocused + "::before{background:linear-gradient(90deg, " + color + " 0%, rgba(0, 0, 0, 0) 50%, " + color + " 100%);}"; };
                },
                disabled: function (_a, color) {
                    var track = _a.track, thumb = _a.thumb, thumbContainer = _a.thumbContainer, thumbContent = _a.thumbContent, thumbLabel = _a.thumbLabel, bg = _a.bg, tick = _a.tick, tickActive = _a.tickActive, horizontal = _a.horizontal, vertical = _a.vertical;
                    var colorDisabled = color.darken(2)
                        .desaturate(2.5);
                    var colorDisabledLum0_4 = colorDisabled.luminance(.4);
                    return function (className) { return className + " " + track + "," + className + " " + thumb + "," + className + " " + thumbLabel + "," + className + " " + bg + "," + className + " " + tick + "{background-color:" + colorDisabled.luminance(.4).css() + ";}" + className + " " + tickActive + "{background-color:" + colorDisabled.luminance(.6).css() + ";}" + className + horizontal + " " + thumbContent + "::before{background:linear-gradient(0deg, " + colorDisabledLum0_4 + " 0%, rgba(0, 0, 0, 0) 50%, " + colorDisabledLum0_4 + " 100%);}" + className + vertical + " " + thumbContent + "::before{background:linear-gradient(90deg, " + colorDisabledLum0_4 + " 0%, rgba(0, 0, 0, 0) 50%, " + colorDisabledLum0_4 + " 100%);}" + className + " " + bg + "{opacity:.3;}" + className + horizontal + " " + thumbContainer + "::before{background:" + _this.disabled.default + ";}" + className + vertical + " " + thumbContainer + "::before{background:" + _this.disabled.default + ";}"; };
                }
            };
            _this.typography.lyTyp = {
                display4: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(96) + ";font-weight:300;letter-spacing:" + -1.5 / 96 + "em;}"; }; }),
                display3: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(60) + ";font-weight:300;letter-spacing:" + -0.5 / 60 + "em;}"; }; }),
                display2: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(48) + ";font-weight:400;letter-spacing:0;}"; }; }),
                display1: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(34) + ";font-weight:400;letter-spacing:" + 0.25 / 34 + "em;}"; }; }),
                headline: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(24) + ";font-weight:400;letter-spacing:0;}"; }; }),
                title: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(20) + ";font-weight:500;letter-spacing:" + 0.15 / 20 + "em;}"; }; }),
                subheading: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(16) + ";font-weight:400;letter-spacing:" + 0.15 / 16 + "em;line-height:" + _this.pxToRem(24) + ";}"; }; }),
                subheading2: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(14) + ";font-weight:500;letter-spacing:" + 0.1 / 14 + "em;}"; }; }),
                body1: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(16) + ";font-weight:400,        letter-spacing: " + 0.5 / 16 + "em;}"; }; }),
                body2: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(14) + ";font-weight:400;letter-spacing:" + 0.25 / 14 + "em;}"; }; }),
                button: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(14) + ";font-weight:500;letter-spacing:" + 1.25 / 14 + "em;}"; }; }),
                caption: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(12) + ";font-weight:400;letter-spacing:" + 0.4 / 12 + "em;}"; }; }),
                overline: new ui.StyleCollection(function () { return function (className) { return className + "{font-size:" + _this.pxToRem(10) + ";font-weight:400;letter-spacing:" + 1.5 / 10 + "em;text-transform:uppercase;}"; }; })
            };
            var lyTyp = _this.typography.lyTyp;
            lyTyp.h1 = lyTyp.display4;
            lyTyp.h2 = lyTyp.display3;
            lyTyp.h3 = lyTyp.display2;
            lyTyp.h4 = lyTyp.display1;
            lyTyp.h5 = lyTyp.headline;
            lyTyp.h6 = lyTyp.title;
            lyTyp.subtitle1 = lyTyp.subheading;
            lyTyp.subtitle2 = lyTyp.subheading2;
            return _this;
        }
        return MinimaBase;
    }(ui.LyStyleUtils));

    var ThemeMinimaLight = /** @class */ (function () {
        function ThemeMinimaLight() {
        }
        ThemeMinimaLight = __decorate([
            core.Directive({
                selector: '[ly-theme-minima-light]',
                providers: [ui.LyTheme2, { provide: ui.LY_THEME_NAME, useValue: 'minima-light' }]
            })
        ], ThemeMinimaLight);
        return ThemeMinimaLight;
    }());
    var ThemeMinimaDark = /** @class */ (function () {
        function ThemeMinimaDark() {
        }
        ThemeMinimaDark = __decorate([
            core.Directive({
                selector: '[ly-theme-minima-dark]',
                providers: [ui.LyTheme2, { provide: ui.LY_THEME_NAME, useValue: 'minima-dark' }]
            })
        ], ThemeMinimaDark);
        return ThemeMinimaDark;
    }());
    var ThemeMinimaModule = /** @class */ (function () {
        function ThemeMinimaModule() {
            console.warn("ThemeMinimaModule is deprecated.");
        }
        ThemeMinimaModule = __decorate([
            core.NgModule({
                declarations: [ThemeMinimaDark, ThemeMinimaLight],
                exports: [ThemeMinimaDark, ThemeMinimaLight]
            })
        ], ThemeMinimaModule);
        return ThemeMinimaModule;
    }());

    var contrast = new color.Color(0xffffff);
    var shadow = new color.Color(0x333333);
    var MinimaLight = /** @class */ (function (_super) {
        __extends(MinimaLight, _super);
        function MinimaLight() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'minima-light';
            _this.primary = {
                default: new color.Color(0x6200EE),
                contrast: contrast
            };
            _this.accent = {
                default: new color.Color(0xFF2997),
                contrast: contrast,
            };
            _this.warn = {
                default: new color.Color(0xf5414e),
                contrast: contrast
            };
            _this.action = {
                default: new color.Color(0, 0, 0, .6),
                contrast: new color.Color(0xffffff)
            };
            _this.background = {
                default: new color.Color(0xfafafa),
                primary: {
                    default: new color.Color(0xffffff),
                    shadow: shadow
                },
                secondary: new color.Color(0xfafafa),
                tertiary: new color.Color(0xefefef),
            };
            _this.hover = new color.Color(0, 0, 0, 0.04);
            _this.paper = {
                default: new color.Color(0xffffff),
                shadow: shadow
            };
            _this.disabled = {
                default: new color.Color(0, 0, 0, 0.27),
                contrast: new color.Color(0, 0, 0, 0.41)
            };
            _this.text = {
                default: new color.Color(0, 0, 0, 0.87),
                primary: new color.Color(0, 0, 0, 0.87),
                secondary: new color.Color(0, 0, 0, 0.54),
                disabled: new color.Color(0, 0, 0, 0.26),
                hint: new color.Color(0, 0, 0, 0.38),
                dark: new color.Color(0, 0, 0, 0.87),
                light: new color.Color(0xffffff)
            };
            _this.divider = new color.Color(0, 0, 0, 0.12);
            _this.colorShadow = new color.Color(0x333333);
            _this.shadow = new color.Color(0x333333);
            _this.drawer = {
                backdrop: new color.Color(0, 0, 0, .6)
            };
            _this.bar = new color.Color(0xf5f5f5);
            _this.field = ui.mergeThemes(_this.field, {
                root: function (_a) {
                    var container = _a.container, fieldset = _a.fieldset, labelContainer = _a.labelContainer, placeholder = _a.placeholder, label = _a.label;
                    return function (className) { return className + " " + container + ":after," + className + " " + fieldset + "," + className + " " + labelContainer + "{border-color:" + new color.Color(0, 0, 0, 0.23) + ";}" + className + " " + label + "," + className + " " + placeholder + "{color:" + new color.Color(0, 0, 0, 0.6) + ";}"; };
                },
                appearance: {
                    filled: function (_a) {
                        var container = _a.container;
                        return function (className) { return className + " " + container + "{background-color:" + new color.Color(0, 0, 0, 0.04) + ";}"; };
                    }
                }
            });
            _this.snackBar = {
                root: new ui.StyleCollection(function (className) { return className + "{background:" + new color.Color(0x323232) + ";color:" + new color.Color(0xffffff) + ";box-shadow:" + ui.shadowBuilder(4, new color.Color(0x323232)) + ";}"; })
            };
            _this.tooltip = {
                root: new ui.StyleCollection(function () { return function (className) { return className + "{background:" + new color.Color(50, 50, 50, 0.85) + ";color:" + new color.Color(0xffffff) + ";}"; }; })
            };
            return _this;
        }
        return MinimaLight;
    }(MinimaBase));

    var contrast$1 = new color.Color(0xffffff);
    var shadow$1 = new color.Color(0, 0, 0, 1);
    var MinimaDark = /** @class */ (function (_super) {
        __extends(MinimaDark, _super);
        function MinimaDark() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'minima-dark';
            _this.primary = {
                default: color.Color(0x1DE9B6),
                contrast: new color.Color(0, 0, 0, 0.87)
            };
            _this.accent = {
                default: new color.Color(0x9C27B0),
                contrast: contrast$1
            };
            _this.warn = {
                default: new color.Color(0xEA404C),
                contrast: contrast$1
            };
            _this.disabled = {
                default: new color.Color(255, 255, 255, 0.3),
                contrast: new color.Color(255, 255, 255, 0.5)
            };
            _this.action = {
                default: new color.Color(255, 255, 255, 0.70),
                contrast: new color.Color(0, 0, 0, 0.87)
            };
            _this.background = {
                default: new color.Color(0x303030),
                primary: {
                    default: new color.Color(0x242424),
                    shadow: shadow$1
                },
                secondary: new color.Color(47, 47, 47),
                tertiary: new color.Color(65, 65, 65),
            };
            _this.hover = new color.Color(255, 255, 255, 0.04);
            _this.paper = {
                default: new color.Color(0x242424),
                shadow: shadow$1
            };
            _this.text = {
                default: new color.Color(0xffffff),
                primary: new color.Color(0xffffff),
                secondary: new color.Color(255, 255, 255, 0.70),
                disabled: new color.Color(255, 255, 255, 0.50),
                hint: new color.Color(255, 255, 255, 0.50),
                dark: new color.Color(0x2b2b2b),
                light: new color.Color(0xffffff)
            };
            _this.drawer = {
                backdrop: new color.Color(49, 49, 49, .6)
            };
            _this.bar = new color.Color(0x212121);
            _this.divider = new color.Color(255, 255, 255, 0.12);
            _this.colorShadow = shadow$1;
            _this.shadow = shadow$1;
            _this.field = ui.mergeThemes(_this.field, {
                root: function (_) { return function (className) { return className + " " + _.container + ":after," + className + " " + _.fieldset + "," + className + " " + _.labelContainer + "{border-color:" + new color.Color(255, 255, 255, 0.12) + ";}" + className + " " + _.label + "," + className + " " + _.placeholder + "{color:" + new color.Color(255, 255, 255, 0.4) + ";}"; }; },
                appearance: {
                    filled: function (_) { return function (className) { return className + " " + _.container + "{background-color:" + new color.Color(255, 255, 255, 0.04) + ";}"; }; }
                }
            });
            _this.snackBar = {
                root: new ui.StyleCollection(function (className) { return className + "{background:" + new color.Color(0xfafafa) + ";color:" + new color.Color(0, 0, 0, .87) + ";box-shadow:" + ui.shadowBuilder(4, new color.Color(0xfafafa)) + ";}"; })
            };
            _this.tooltip = {
                root: new ui.StyleCollection(function () { return function (className) { return className + "{background:" + new color.Color(250, 250, 250, 0.85) + ";color:" + new color.Color(0, 0, 0, .87) + ";}"; }; })
            };
            return _this;
        }
        return MinimaDark;
    }(MinimaBase));

    var shadow$2 = new color.Color(0, 0, 0, 1);
    var MinimaDeepDark = /** @class */ (function (_super) {
        __extends(MinimaDeepDark, _super);
        function MinimaDeepDark() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'minima-deep-dark';
            _this.background = {
                default: new color.Color(0x161616),
                primary: {
                    default: new color.Color(0x101010),
                    shadow: shadow$2
                },
                secondary: new color.Color(0x161616),
                tertiary: new color.Color(0x1b1b1b),
            };
            _this.paper = {
                default: new color.Color(0x101010),
                shadow: shadow$2
            };
            return _this;
            // field: LyFieldTheme = mergeThemes<LyFieldTheme, LyFieldTheme>(this.field, {
            //   root: _ => (className: string) => ``,
            //   appearance: {
            //     filled: _ => (className: string) => ``
            //   }
            // });
        }
        return MinimaDeepDark;
    }(MinimaDark));

    exports.MinimaBase = MinimaBase;
    exports.MinimaDark = MinimaDark;
    exports.MinimaDeepDark = MinimaDeepDark;
    exports.MinimaLight = MinimaLight;
    exports.ThemeMinimaDark = ThemeMinimaDark;
    exports.ThemeMinimaLight = ThemeMinimaLight;
    exports.ThemeMinimaModule = ThemeMinimaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-themes-minima.umd.js.map
