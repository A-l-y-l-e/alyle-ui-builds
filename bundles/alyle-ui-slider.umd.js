(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/forms'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/slider', ['exports', '@angular/core', '@alyle/ui', '@angular/forms', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.slider = {}), global.ng.core, global.ly.core, global.ng.forms, global.rxjs, global.ng.common));
}(this, (function (exports, core, ui, forms, rxjs, common) { 'use strict';

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

    var LY_SLIDER_DEFAULT_OPTIONS = new core.InjectionToken('LY_SLIDER_DEFAULT_OPTIONS');
    var LY_SLIDER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return LySlider; }),
        multi: true
    };
    var STYLE_PRIORITY = -2;
    var STYLES = function (theme, ref) {
        var __ = ref.selectorsOf(STYLES);
        var before = theme.before;
        return {
            $priority: STYLE_PRIORITY,
            root: function () { return function (className) { return className + "{display:inline-block;position:relative;box-sizing:border-box;cursor:pointer;}" + ui.styleTemplateToString(((theme.slider
                && theme.slider.root
                && (theme.slider.root instanceof ui.StyleCollection
                    ? theme.slider.root.setTransformer(function (fn) { return fn(__); }).css
                    : theme.slider.root(__)))), "" + className) + ui.styleTemplateToString((ui.LY_COMMON_STYLES.fill), className + " " + __.bg) + className + " " + __.bg + "{margin:auto;}" + className + __.thumbVisible + " " + __.thumb + "," + className + ":not(" + __.thumbNotVisible + "):not(" + __.disabled + ") " + __.thumbContent + ":hover " + __.thumb + "," + className + ":not(" + __.thumbNotVisible + ") " + __.thumbContent + __.thumbContentFocused + " " + __.thumb + "{border-radius:50% 50% 0%;}" + className + __.thumbVisible + " " + __.thumbContent + "::before," + className + ":not(" + __.thumbNotVisible + "):not(" + __.disabled + ") " + __.thumbContent + ":hover::before," + className + ":not(" + __.thumbNotVisible + ") " + __.thumbContent + __.thumbContentFocused + "::before{transform:scale(1);}"; }; },
            track: function (className) { return className + "{position:absolute;margin:auto;}"; },
            bg: null,
            thumbContainer: function (className) { return className + "{width:0;height:0;position:absolute;margin:auto;}"; },
            thumbContent: function (className) { return className + "::before{content:'';position:absolute;opacity:.6;transform:scale(0);transition:transform " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms, background " + theme.animations.durations.complex + "ms " + theme.animations.curves.sharp + " 0ms;}"; },
            thumb: function (className) { return className + "{position:absolute;width:12px;height:12px;left:-6px;top:-6px;border-radius:50%;outline:0;transition:" + ['border-radius'].map(function (prop) { return prop + " " + theme.animations.durations.exiting + "ms " + theme.animations.curves.standard + " 0ms"; }).join() + ";}" + className + "::before{content:'';border-radius:50%;transition:" + ['box-shadow'].map(function (prop) { return prop + " " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms"; }).join() + ";}" + ui.styleTemplateToString((ui.LY_COMMON_STYLES.fill), className + "::before"); },
            thumbLabel: function (className) { return className + "{position:absolute;width:28px;height:28px;border-radius:50%;top:-14px;" + before + ":-14px;transition:" + ['transform', 'top', 'left', 'right', 'border-radius'].map(function (prop) { return prop + " " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + " 0ms"; }).join() + ";}"; },
            thumbLabelValue: function (className) { return className + "{display:flex;height:100%;width:100%;align-items:center;justify-content:center;font-size:12px;color:#fff;}"; },
            horizontal: function () { return function (className) { return className + "{width:120px;height:2px;padding:10px 0;touch-action:pan-y !important;}" + className + " " + __.track + "," + className + " " + __.bg + "{height:2px;width:100%;}" + className + " " + __.track + "{" + before + ":0;top:0;bottom:0;}" + className + " " + __.thumb + "{transform:rotateZ(-135deg);}" + className + " " + __.thumbLabel + "{transform:rotateZ(45deg) scale(0);}" + className + __.thumbVisible + " " + __.thumbLabel + "," + className + ":not(" + __.disabled + ") " + __.thumbContent + ":hover " + __.thumbLabel + "," + className + " " + __.thumbContent + __.thumbContentFocused + " " + __.thumbLabel + "{border-radius:50% 50% 0%;top:-50px;transform:rotateZ(45deg) scale(1);}" + className + " " + __.thumbLabelValue + "{transform:rotateZ(-45deg);}" + className + " " + __.thumbContainer + "{top:0;bottom:0;}" + className + " " + __.thumbContent + "::before{width:2px;height:24px;left:-1px;top:-24px;}" + className + " " + __.tick + "{width:2px;height:inherit;top:0;bottom:0;}" + className + " " + __.mark + "{top:22px;transform:translateX(" + (theme.direction === ui.Dir.ltr ? '-' : '') + "50%);}" + className + __.marked + "{margin-bottom:24px;}"; }; },
            vertical: function () { return function (className) { return className + "{width:2px;height:120px;padding:0 10px;touch-action:pan-x !important;}" + className + " " + __.track + "," + className + " " + __.bg + "{height:100%;width:2px;}" + className + " " + __.track + "{bottom:0;left:0;right:0;}" + className + " " + __.thumb + "{transform:" + (theme.direction === ui.Dir.ltr ? 'rotateZ(135deg)' : 'rotateZ(-45deg)') + ";}" + className + " " + __.thumbLabel + "{transform:rotateZ(-45deg) scale(0);}" + className + __.thumbVisible + " " + __.thumbLabel + "," + className + ":not(" + __.disabled + ") " + __.thumbContent + ":hover " + __.thumbLabel + "," + className + " " + __.thumbContent + __.thumbContentFocused + " " + __.thumbLabel + "{border-radius:" + (theme.direction === ui.Dir.ltr ? '50% 50% 0%' : '0 50% 50% 50%') + ";before:-50px;transform:rotateZ(-45deg) scale(1);}" + className + " " + __.thumbLabelValue + "{transform:rotateZ(45deg);}" + className + " " + __.thumbContainer + "{left:0;right:0;}" + className + " " + __.thumbContent + "::before{width:24px;height:2px;before:-24px;top:-1px;}" + className + " " + __.tick + "{width:inherit;height:2px;left:0;right:0;}" + className + " " + __.mark + "{" + before + ":22px;transform:translateY(50%);}" + className + __.marked + "{" + (theme.direction === ui.Dir.ltr ? 'margin-right' : 'margin-left') + ":24px;}"; }; },
            marked: null,
            mark: function (className) { return className + "{position:absolute;white-space:nowrap;font-size:14px;color:" + theme.text.secondary + ";}"; },
            markActive: function (className) { return className + "{color:currentColor;}"; },
            tick: function (className) { return className + "{position:absolute;margin:auto;}"; },
            tickActive: null,
            thumbVisible: null,
            thumbNotVisible: null,
            thumbContentFocused: null,
            sliding: null,
            disabled: function (className) { return className + "{cursor:default;}"; }
        };
    };
    var ɵ0 = STYLES;
    /** A change event emitted by the LySlider component. */
    var LySliderChange = /** @class */ (function () {
        function LySliderChange(
        /** The LySlider that changed. */
        source, 
        /** The new value of the source slider. */
        value) {
            this.source = source;
            this.value = value;
        }
        return LySliderChange;
    }());
    var LySlider = /** @class */ (function () {
        // private _ngClass: NgClass;
        function LySlider(_theme, _el, _renderer, _cd, _hostClass, _sr, _default) {
            this._theme = _theme;
            this._el = _el;
            this._renderer = _renderer;
            this._cd = _cd;
            this._hostClass = _hostClass;
            this._sr = _sr;
            this._default = _default;
            this.classes = this._theme.renderStyleSheet(STYLES);
            this._value = null;
            this._min = 0;
            this._max = 100;
            this._step = 1;
            this._changes = new rxjs.Subject();
            this._thumbs = [];
            this._rootClasses = new Set();
            /** Event emitted when the slider value has changed. */
            this.change = new core.EventEmitter();
            /** Event emitted when the slider thumb moves. */
            this.input = new core.EventEmitter();
            /** @docs-private */
            this.valueChange = new core.EventEmitter();
            /**
             * The registered callback function called when a blur event occurs on the input element.
             * @docs-private
             */
            this.onTouched = function () { };
            this._controlValueAccessorChangeFn = function () { };
            _renderer.addClass(_el.nativeElement, this.classes.root);
        }
        LySlider_1 = LySlider;
        Object.defineProperty(LySlider.prototype, "thumbVisible", {
            /** Whether or not to show the thumb. */
            get: function () {
                return this._thumbVisible;
            },
            set: function (val) {
                var newVal = val != null ? ui.toBoolean(val) : null;
                if (newVal !== this.thumbVisible) {
                    var thumbVisibleClass = this.classes.thumbVisible;
                    var thumbNotVisibleClass = this.classes.thumbNotVisible;
                    this._thumbVisible = newVal;
                    this._hostClass.toggle(thumbVisibleClass, newVal === true);
                    this._hostClass.toggle(thumbNotVisibleClass, newVal === false);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LySlider.prototype, "marks", {
            /** Whether or not to show the marks, also accepts an array of marks. */
            get: function () {
                return this._marks;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                if (newVal !== this.marks) {
                    var newClass = this.classes.marked;
                    if (newVal) {
                        this._renderer.addClass(this._el.nativeElement, newClass);
                        this._marksClass = newClass;
                        this._marks = Array.isArray(val) ? val : newVal;
                    }
                    else if (this._marksClass) {
                        this._marks = false;
                        this._renderer.removeClass(this._el.nativeElement, newClass);
                        this._marksClass = null;
                    }
                    if (Array.isArray(newVal)) {
                        this._marksList = val;
                    }
                    else {
                        this._marksList = null;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LySlider.prototype, "max", {
            /** The maximum value that the slider can have. */
            get: function () {
                return this._max;
            },
            set: function (v) {
                this._max = ui.toNumber(v, this._max);
                this._updateThumbs();
                this._cd.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LySlider.prototype, "min", {
            /** The minimum value that the slider can have. */
            get: function () {
                return this._min;
            },
            set: function (v) {
                this._min = ui.toNumber(v, this._min);
                // If the value wasn't explicitly set by the user, set it to the min.
                if (this._value === null) {
                    this.value = this._min;
                }
                this._updateThumbs();
                this._cd.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LySlider.prototype, "appearance", {
            get: function () {
                return this._appearance;
            },
            /** The slider appearance style. */
            set: function (val) {
                if (val !== this.appearance) {
                    this._appearance = val;
                    this._appearanceClass = this._sr.add(LySlider_1.и + ".appearance:" + val, function (theme, ref) {
                        var classes = ref.selectorsOf(STYLES);
                        if (theme.slider && theme.slider.appearance) {
                            var appearance = theme.slider.appearance[val];
                            if (appearance) {
                                return appearance instanceof ui.StyleCollection
                                    ? appearance.setTransformer(function (_) { return _(classes); }).css
                                    : appearance(classes);
                            }
                        }
                        throw new Error(val + " not found in theme.slider.appearance");
                    }, STYLE_PRIORITY, this._appearanceClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LySlider.prototype, "color", {
            /** Color of Slider */
            get: function () {
                return this._color;
            },
            set: function (val) {
                this._color = val;
                var styleKey = LySlider_1.и + ".color:" + val;
                var newStyle = function (theme, ref) {
                    var color = theme.colorOf(val);
                    var __ = ref.selectorsOf(STYLES);
                    if (theme.slider && theme.slider.color) {
                        var sliderColor = theme.slider.color;
                        if (sliderColor) {
                            return sliderColor instanceof ui.StyleCollection
                                ? (sliderColor).setTransformer(function (_) { return _(__, color); }).css
                                : sliderColor(__, color);
                        }
                    }
                    throw new Error(val + " not found in theme.slider.color");
                };
                this._colorClass = this._sr.add(styleKey, newStyle, STYLE_PRIORITY + 1, this._colorClass);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LySlider.prototype, "vertical", {
            /** Whether the slider is vertical. */
            get: function () {
                return this._vertical;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                this._vertical = newVal;
                var newClass = newVal
                    ? this.classes.vertical
                    : this.classes.horizontal;
                this._verticalClass = this._theme.updateClass(this._el.nativeElement, this._renderer, newClass, this._verticalClass);
                this._updateThumbs();
                this._cd.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LySlider.prototype, "step", {
            /** The values at which the thumb will snap. */
            get: function () { return this._step; },
            set: function (v) {
                this._step = ui.toNumber(v, this._step);
                this._stepPrecision = this._step % 1 !== 0
                    ? this._step.toString().split('.')[1].length
                    : null;
                this._cd.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LySlider.prototype, "value", {
            /**
             * Value of a slider, this can be a number or an array of numbers.
             * If the array of numbers has more than one value,
             * then this will create more thumbs
             */
            get: function () {
                return this._value;
            },
            set: function (val) {
                var _this = this;
                if (val !== this._value) {
                    var valueIsArray = Array.isArray(val);
                    if (typeof val === 'number') {
                        var newValue = Number(val);
                        newValue = parseFloat(newValue.toFixed(this._stepPrecision));
                        this._value = newValue;
                    }
                    else if (valueIsArray && !arrayEquals(this._value, val)) {
                        var newValue = val;
                        newValue = newValue.map(function (_val) { return _val === null
                            ? _val
                            : parseFloat(_val.toFixed(_this._stepPrecision)); });
                        this._value = newValue;
                    }
                    this._thumbs = (valueIsArray ?
                        this._value
                        : [this._value]).map(function (v, index) { return ({
                        index: index,
                        value: ui.toNumber(v, _this.min),
                        displayValue: null,
                        percent: null,
                        styles: {}
                    }); });
                    this._updateThumbs();
                    this._cd.markForCheck();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LySlider.prototype, "disabled", {
            /** Whether the slider is disabled. */
            get: function () {
                return this._disabled;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                if (newVal !== this.disabled) {
                    this._disabled = newVal;
                    if (newVal) {
                        var color_1 = this.color;
                        var styleKey = LySlider_1.и + ".disabled:" + val + "-" + color_1;
                        var newStyle = void 0;
                        newStyle = function (theme, ref) {
                            var clr = theme.colorOf(color_1);
                            var __ = ref.selectorsOf(STYLES);
                            if (theme.slider && theme.slider.disabled) {
                                var sliderColor = theme.slider.disabled;
                                if (sliderColor) {
                                    return sliderColor instanceof ui.StyleCollection
                                        ? (sliderColor).setTransformer(function (_) { return _(__, clr); }).css
                                        : sliderColor(__, clr);
                                }
                            }
                            throw new Error(val + " not found in theme.slider.color");
                        };
                        var newClass = this._sr.add(styleKey, newStyle, STYLE_PRIORITY + 1.5, this._disabledClass);
                        this._hostClass.add(this.classes.disabled);
                        this._disabledClass = newClass;
                    }
                    else if (this._disabledClass) {
                        this._hostClass.remove(this._disabledClass);
                        this._hostClass.remove(this.classes.disabled);
                        this._disabledClass = null;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LySlider.prototype, "ticks", {
            /**
             * Whether or not to show the thumb label, but if the value is a number,
             * it will show ticks according to the steps. For example: if you set
             * 3 ticks with a step of 10, you will draw a tick every 30 values
             */
            get: function () {
                return this._ticks;
            },
            set: function (val) {
                var newValue = ui.toNumber(val, ui.toBoolean(val));
                this._ticks = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LySlider.prototype, "_tickList", {
            get: function () {
                return this.__tickList;
            },
            enumerable: true,
            configurable: true
        });
        LySlider.prototype.ngOnChanges = function () {
            this._updateTickValues();
            this._changes.next();
        };
        LySlider.prototype.ngOnInit = function () {
            var _this = this;
            this._theme.directionChanged.pipe(ui.untilComponentDestroyed(this)).subscribe(function () {
                _this.ngOnChanges();
                _this._updateThumbs();
                _this._cd.markForCheck();
            });
            /** Set default appearance */
            if (this.appearance == null) {
                this.appearance = (this._default && this._default.appearance) || 'standard';
            }
            /** Set horizontal slider */
            if (this.vertical == null) {
                this.vertical = false;
            }
            /** Set default color */
            if (this.color == null) {
                this.color = 'accent';
            }
            /** Set default step */
            if (this.step == null) {
                this.step = 1;
            }
        };
        LySlider.prototype.ngOnDestroy = function () {
            this._changes.complete();
        };
        LySlider.prototype.writeValue = function (value) {
            this.value = value;
            this._changes.next();
        };
        /**
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */
        LySlider.prototype.registerOnChange = function (fn) {
            this._controlValueAccessorChangeFn = fn;
        };
        /**
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */
        LySlider.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        /**
         * Disables the select. Part of the ControlValueAccessor interface required
         * to integrate with Angular's core forms API.
         *
         * @param isDisabled Sets whether the component is disabled.
         */
        LySlider.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        LySlider.prototype._onFocus = function (thumb) {
            if (!this.disabled) {
                thumb.focused = true;
            }
        };
        LySlider.prototype._onBlur = function (thumb) {
            if (!this.disabled) {
                thumb.focused = false;
            }
        };
        LySlider.prototype._onTap = function (event) {
            if (this.disabled) {
                return;
            }
            this._startSlide();
            this._updateValueFromPosition(event.center.x, event.center.y);
            this._onSlideEnd();
        };
        LySlider.prototype._onSlide = function (event) {
            if (this.disabled) {
                return;
            }
            this._startSlide();
            if (event['isFinal']) {
                if (event['pointerType'] === 'touch' && event.center.x === 0 && event.center.y === 0) {
                    // restore to initial position
                    this.value = this._valueOnSlideStart;
                }
                else {
                    this._updateValueFromPosition(event.center.x, event.center.y);
                }
                this._onSlideEnd();
            }
            else {
                this._updateValueFromPosition(event.center.x, event.center.y);
            }
            event.preventDefault();
            this._emitInputEvent();
            this._changes.next();
        };
        LySlider.prototype._startSlide = function () {
            if (!this._isSliding) {
                this._isSliding = true;
                this._renderer.addClass(this._el.nativeElement, this.classes.sliding);
                // clone
                this._valueOnSlideStart = Array.isArray(this.value) ? this.value.slice(0) : this.value;
                this._thumbsOnSlideStart = this._thumbs.slice(0).map(function (t) { return (__assign({}, t)); });
                this._currentRect = this._bg.nativeElement.getBoundingClientRect();
            }
        };
        LySlider.prototype._onSlideEnd = function () {
            if (this._isSliding) {
                this._isSliding = false;
                this._renderer.removeClass(this._el.nativeElement, this.classes.sliding);
                if (!valueEquals(this._valueOnSlideStart, this.value) && !this.disabled) {
                    this._emitChangeEvent();
                    this._changes.next();
                }
                this._thumbsOnSlideStart = null;
                this._valueOnSlideStart = null;
                this._closestIndex = null;
                this._currentRect = null;
            }
        };
        LySlider.prototype._trackByFn = function (_index, item) {
            return item.index;
        };
        LySlider.prototype._updateValueFromPosition = function (x, y) {
            if (!this._bg) {
                return;
            }
            var w = this._currentRect.width;
            var h = this._currentRect.height;
            x -= this._currentRect.x;
            y -= this._currentRect.y;
            var percent = clamp(this.vertical
                ? гvalueToPercent(y, 0, h)
                : гvalueToPercent(x, 0, w), 0, 100);
            if (this.vertical || (!this.vertical && this._theme.variables.direction === ui.Dir.rtl)) {
                percent = 100 - percent;
            }
            var value;
            if (percent === 0) {
                value = this.min;
            }
            else if (percent === 100) {
                value = this.max;
            }
            else {
                value = this._roundValueToStep(percentToValue(percent, this.min, this.max));
            }
            if (this._closestIndex == null) {
                this._closestIndex = findClosest(this._thumbs.map(function (thumb) { return thumb.value; }), value);
            }
            var currentThumb = this._thumbsOnSlideStart[this._closestIndex];
            this._slidingThumbValue = currentThumb.value = value;
            if (Array.isArray(this.value)) {
                this.value = this._thumbsOnSlideStart.map(function (thumb) { return thumb.value; }).sort(ASC);
            }
            else {
                this.value = value;
            }
            // focus slidingThumb
            var currentSlidingThumb = this._thumbs.find(function (thumb) { return thumb.value === value; });
            if (currentSlidingThumb) {
                currentSlidingThumb.focused = true;
                this._thumbsRef.toArray()[currentSlidingThumb.index].nativeElement.focus();
            }
        };
        LySlider.prototype._updateThumbs = function () {
            var _this = this;
            this._thumbs.forEach(function (thumb) {
                var _a;
                var val = clamp(thumb.value, _this.min, _this.max);
                var percent = гvalueToPercent(val, _this.min, _this.max);
                var pos = _this._calculatePosition(percent);
                thumb.value = val;
                thumb.displayValue = _this._transformValue(val);
                thumb.percent = percent;
                thumb.focused = false;
                thumb.styles = (_a = {},
                    _a[pos.style] = pos.value,
                    _a);
            });
            this._updateTrack();
        };
        LySlider.prototype._calculatePosition = function (percent) {
            var style;
            var value = percent + "%";
            if (this.vertical) {
                style = 'bottom';
            }
            else {
                style = this._theme.variables.direction === 'rtl' ? 'right' : 'left';
            }
            return {
                style: style,
                value: value
            };
        };
        LySlider.prototype._updateTrack = function () {
            var track = this._track;
            var thumbs = this._thumbs;
            var thumbsPercents = thumbs.map(function (thumb) { return thumb.percent; });
            var direction = this._theme.variables.direction === 'rtl' ? 'right' : 'left';
            if (thumbs.length === 1) {
                thumbsPercents.unshift(0);
            }
            var minPercent = this._minPercent = Math.min.apply(Math, __spread(thumbsPercents));
            var maxPercent = this._maxPercent = Math.max.apply(Math, __spread(thumbsPercents));
            if (track) {
                track.nativeElement.style.width = null;
                track.nativeElement.style.height = null;
                track.nativeElement.style.left = null;
                track.nativeElement.style.right = null;
                if (this.vertical) {
                    track.nativeElement.style.height = (maxPercent - minPercent) + "%";
                    track.nativeElement.style.bottom = minPercent + "%";
                }
                else {
                    track.nativeElement.style.width = maxPercent - minPercent + "%";
                    track.nativeElement.style[direction] = minPercent + "%";
                }
            }
        };
        /** Emits a change event. */
        LySlider.prototype._emitChangeEvent = function () {
            this._controlValueAccessorChangeFn(this.value);
            this.valueChange.emit(this.value);
            this.change.emit(this._createChangeEvent());
        };
        /** Emits an input event. */
        LySlider.prototype._emitInputEvent = function () {
            this.input.emit(this._createChangeEvent());
        };
        LySlider.prototype._createChangeEvent = function (value) {
            if (value === void 0) { value = this.value; }
            return new LySliderChange(this, value);
        };
        LySlider.prototype._roundValueToStep = function (value) {
            return Number((Math.round(value / this.step) * this.step).toFixed(this._stepPrecision));
        };
        LySlider.prototype._transformValue = function (value) {
            if (this.displayWith) {
                return this.displayWith(value);
            }
            return value;
        };
        LySlider.prototype._getHostElement = function () {
            return this._el.nativeElement;
        };
        LySlider.prototype._updateTickValues = function () {
            this.__tickList = [];
            if (!this.ticks) {
                return false;
            }
            else {
                var ticks = this.ticks;
                this._tickInterval = typeof ticks === 'number'
                    ? this.step * ticks
                    : this.step;
                this.__tickList = [];
                var tickIntervals = this._tickInterval + 1;
                var stepWith = this._tickInterval;
                for (var index = 0; index < tickIntervals; index++) {
                    this.__tickList.push(clamp(index * stepWith, this.min, this.max));
                }
            }
            this._cd.markForCheck();
        };
        var LySlider_1;
        LySlider.и = 'LySlider';
        LySlider.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: ui.LyHostClass },
            { type: ui.StyleRenderer },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [LY_SLIDER_DEFAULT_OPTIONS,] }] }
        ]; };
        __decorate([
            core.ViewChild('bg', { static: false })
        ], LySlider.prototype, "_bg", void 0);
        __decorate([
            core.ViewChild('track', { static: true })
        ], LySlider.prototype, "_track", void 0);
        __decorate([
            core.ViewChild('ticksRef', { static: true })
        ], LySlider.prototype, "_ticksRef", void 0);
        __decorate([
            core.ViewChildren('thumbsRef')
        ], LySlider.prototype, "_thumbsRef", void 0);
        __decorate([
            core.Input()
        ], LySlider.prototype, "displayWith", void 0);
        __decorate([
            core.Output()
        ], LySlider.prototype, "change", void 0);
        __decorate([
            core.Output()
        ], LySlider.prototype, "input", void 0);
        __decorate([
            core.Output()
        ], LySlider.prototype, "valueChange", void 0);
        __decorate([
            core.Input()
        ], LySlider.prototype, "thumbVisible", null);
        __decorate([
            core.Input()
        ], LySlider.prototype, "marks", null);
        __decorate([
            core.Input()
        ], LySlider.prototype, "max", null);
        __decorate([
            core.Input()
        ], LySlider.prototype, "min", null);
        __decorate([
            core.Input()
        ], LySlider.prototype, "appearance", null);
        __decorate([
            core.Input()
        ], LySlider.prototype, "color", null);
        __decorate([
            core.Input()
        ], LySlider.prototype, "vertical", null);
        __decorate([
            core.Input()
        ], LySlider.prototype, "step", null);
        __decorate([
            core.Input()
        ], LySlider.prototype, "value", null);
        __decorate([
            core.Input()
        ], LySlider.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], LySlider.prototype, "ticks", null);
        LySlider = LySlider_1 = __decorate([
            core.Component({
                selector: 'ly-slider',
                template: "<div #bg [className]=\"classes.bg\"></div>\n<div #track [className]=\"classes.track\"></div>\n<ng-template [ngIf]=\"ticks\">\n  <ly-tick *ngFor=\"let tick of _tickList\" [value]=\"tick\"></ly-tick>\n</ng-template>\n<span #ticksRef></span>\n<ng-template [ngIf]=\"marks\">\n  <ng-content select=\"ly-mark\"></ng-content>\n</ng-template>\n<ng-template [ngIf]=\"_marksList\">\n  <ly-mark *ngFor=\"let mark of _marksList\" [value]=\"mark.value\">{{ mark.label }}</ly-mark>\n</ng-template>\n<div\n  *ngFor=\"let thumb of _thumbs; trackBy: _trackByFn\"\n  [className]=\"classes.thumbContainer\"\n  [ngStyle]=\"thumb.styles\"\n>\n  <div\n    [className]=\"classes.thumbContent\"\n    [ngClass]=\"thumb.focused ? classes.thumbContentFocused : null\"\n  >\n    <div\n      #thumbsRef\n      (focus)=\"_onFocus(thumb)\"\n      (blur)=\"_onBlur(thumb)\"\n      [attr.tabindex]=\"disabled ? -1 : 0\"\n      [className]=\"classes.thumb\"\n    ></div>\n    <div [className]=\"classes.thumbLabel\" *ngIf=\"thumbVisible !== false\">\n      <span [className]=\"classes.thumbLabelValue\">{{ thumb.displayValue }}</span>\n    </div>\n  </div>\n</div>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                exportAs: 'lySlider',
                providers: [
                    LY_SLIDER_CONTROL_VALUE_ACCESSOR,
                    ui.LyHostClass,
                    ui.StyleRenderer
                ],
                host: {
                    '(slide)': '_onSlide($event)',
                    '(slideend)': '_onSlideEnd()',
                    '(tap)': '_onTap($event)'
                }
            }),
            __param(6, core.Optional()), __param(6, core.Inject(LY_SLIDER_DEFAULT_OPTIONS))
        ], LySlider);
        return LySlider;
    }());
    function findClosest(values, currentValue) {
        var closestIndex = values.reduce(function (previousValue, value, index) {
            var distance = Math.abs(currentValue - value);
            if (previousValue === null || distance < previousValue.distance || distance === previousValue.distance) {
                return {
                    distance: distance,
                    index: index,
                };
            }
            return previousValue;
        }, null).index;
        return closestIndex;
    }
    function гvalueToPercent(value, min, max) {
        return ((value - min) * 100) / (max - min);
    }
    function percentToValue(percent, min, max) {
        return (max - min) * (percent / 100) + min;
    }
    function arrayEquals(array1, array2) {
        return Array.isArray(array1) && Array.isArray(array2) && array1.length === array2.length
            && array1.every(function (value, index) { return value === array2[index]; });
    }
    function valueEquals(value, value2) {
        if (value === value2) {
            return true;
        }
        return arrayEquals(value, value2);
    }
    function clamp(value, min, max) {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    }
    function гbetween(x, min, max) {
        return x >= min && x <= max;
    }
    function ASC(a, b) {
        return a - b;
    }

    var LyTick = /** @class */ (function () {
        function LyTick(_slider, _renderer, _el) {
            this._slider = _slider;
            this._renderer = _renderer;
            this._el = _el;
            /** @docs-private */
            this.classes = this._slider.classes;
        }
        LyTick.prototype.ngOnChanges = function () {
            this._updateTick();
        };
        LyTick.prototype.ngOnInit = function () {
            var _this = this;
            this._renderer.addClass(this._getHostElement(), this.classes.tick);
            this._slider._changes.pipe(ui.untilComponentDestroyed(this)).subscribe(function () {
                _this._updateTick();
            });
        };
        LyTick.prototype._updateTick = function () {
            var min = this._slider._minPercent;
            var max = this._slider._maxPercent;
            var className = this._slider.classes.tickActive;
            var percent = гvalueToPercent(this.value, this._slider.min, this._slider.max);
            var pos = this._slider._calculatePosition(percent);
            if (гbetween(percent, min, max)) {
                this._tickActiveClass = className;
                this._renderer.addClass(this._el.nativeElement, className);
            }
            else if (this._tickActiveClass) {
                this._tickActiveClass = null;
                this._renderer.removeClass(this._el.nativeElement, className);
            }
            this._renderer.setStyle(this._getHostElement(), 'bottom', null);
            this._renderer.setStyle(this._getHostElement(), 'left', null);
            this._renderer.setStyle(this._getHostElement(), 'right', null);
            this._renderer.setStyle(this._getHostElement(), pos.style, pos.value);
        };
        LyTick.prototype.ngOnDestroy = function () { };
        LyTick.prototype._getHostElement = function () {
            return this._el.nativeElement;
        };
        LyTick.ctorParameters = function () { return [
            { type: LySlider },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], LyTick.prototype, "value", void 0);
        LyTick = __decorate([
            core.Directive({
                selector: 'ly-tick'
            })
        ], LyTick);
        return LyTick;
    }());

    var LyMark = /** @class */ (function () {
        function LyMark(_slider, _renderer, _el) {
            this._slider = _slider;
            this._renderer = _renderer;
            this._el = _el;
            /** @docs-private */
            this.classes = this._slider.classes;
            _renderer.addClass(_el.nativeElement, _slider.classes.mark);
        }
        LyMark.prototype.ngOnInit = function () {
            var _this = this;
            this._renderer.insertBefore(this._slider._getHostElement(), this._tick._getHostElement(), this._slider._ticksRef.nativeElement);
            this._slider._changes.pipe(ui.untilComponentDestroyed(this)).subscribe(function () {
                _this._updateMark();
            });
        };
        LyMark.prototype._updateMark = function () {
            var min = this._slider._minPercent;
            var max = this._slider._maxPercent;
            var className = this._slider.classes.markActive;
            var percent = гvalueToPercent(this.value, this._slider.min, this._slider.max);
            var pos = this._slider._calculatePosition(percent);
            if (гbetween(percent, min, max)) {
                this._markActiveClass = className;
                this._renderer.addClass(this._el.nativeElement, className);
            }
            else if (this._markActiveClass) {
                this._markActiveClass = null;
                this._renderer.removeClass(this._el.nativeElement, className);
            }
            this._renderer.setStyle(this._getHostElement(), 'bottom', null);
            this._renderer.setStyle(this._getHostElement(), 'left', null);
            this._renderer.setStyle(this._getHostElement(), 'right', null);
            this._renderer.setStyle(this._getHostElement(), pos.style, pos.value);
        };
        LyMark.prototype.ngOnDestroy = function () { };
        LyMark.prototype._getHostElement = function () {
            return this._el.nativeElement;
        };
        LyMark.ctorParameters = function () { return [
            { type: LySlider },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.ViewChild(LyTick, { static: true })
        ], LyMark.prototype, "_tick", void 0);
        __decorate([
            core.Input()
        ], LyMark.prototype, "value", void 0);
        LyMark = __decorate([
            core.Component({
                selector: 'ly-mark',
                template: "<ly-tick [value]=\"value\"></ly-tick>\n<ng-content></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush
            })
        ], LyMark);
        return LyMark;
    }());

    var LySliderModule = /** @class */ (function () {
        function LySliderModule() {
        }
        LySliderModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    ui.LyCommonModule
                ],
                declarations: [LySlider, LyMark, LyTick],
                exports: [LySlider, LyMark]
            })
        ], LySliderModule);
        return LySliderModule;
    }());

    exports.LY_SLIDER_CONTROL_VALUE_ACCESSOR = LY_SLIDER_CONTROL_VALUE_ACCESSOR;
    exports.LY_SLIDER_DEFAULT_OPTIONS = LY_SLIDER_DEFAULT_OPTIONS;
    exports.LySlider = LySlider;
    exports.LySliderChange = LySliderChange;
    exports.LySliderModule = LySliderModule;
    exports.ɵ0 = ɵ0;
    exports.ɵa = LyMark;
    exports.ɵb = LyTick;
    exports.гbetween = гbetween;
    exports.гvalueToPercent = гvalueToPercent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-slider.umd.js.map
