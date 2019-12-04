(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/radio', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.radio = {}), global.ng.core, global.ng.forms, global.ng.common, global.ly.core));
}(this, (function (exports, core, forms, common, ui) { 'use strict';

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
    var DEFAULT_DISABLE_RIPPLE = false;
    var DEFAULT_COLOR = 'accent';
    var LY_RADIO_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return LyRadioGroup; }),
        multi: true
    };
    var idx = 0;
    var UndefinedValue = /** @class */ (function () {
        function UndefinedValue() {
        }
        return UndefinedValue;
    }());
    var STYLES = function (theme, ref) {
        var radio = ref.selectorsOf(STYLES);
        var after = theme.after, before = theme.before;
        return {
            $priority: STYLE_PRIORITY,
            root: function () { return function (className) { return className + "{display:inline-block;}" + ui.styleTemplateToString(((theme.radio
                && theme.radio.root
                && (theme.radio.root instanceof ui.StyleCollection
                    ? theme.radio.root.setTransformer(function (fn) { return fn(radio); })
                    : theme.radio.root(radio)))), "" + className); }; },
            radio: function () { return function (className) { return className + "{display:inline-block;margin-" + after + ":16px;margin-" + before + ":-16px;}" + className + radio.checked + " " + radio.container + " div:nth-child(1){transform:scale(1.25);}" + className + radio.checked + " " + radio.container + " div:nth-child(2){transform:scale(0.8);}" + className + radio.onFocusByKeyboard + " " + radio.container + "::after{box-shadow:0 0 0 12px;background:currentColor;opacity:.13;border-radius:50%;}"; }; },
            label: function (className) { return className + "{margin-" + before + ":16px;cursor:pointer;white-space:nowrap;position:relative;display:flex;align-items:baseline;padding-top:12px;padding-bottom:12px;}"; },
            labelContent: null,
            container: function (className) { return className + "{position:relative;margin-" + before + ":.125em;margin-" + after + ":.5em;margin-top:auto;margin-bottom:auto;width:16px;height:16px;}" + className + " div{margin:auto;border-radius:50%;width:1em;height:1em;box-sizing:border-box;}" + className + "::after{content:'';width:16px;height:16px;margin:auto;}" + ui.styleTemplateToString((ui.LY_COMMON_STYLES.fill), className + "::after") + className + " div:nth-child(2){background:currentColor;transform:scale(0);}" + className + " div:nth-child(1){transform:scale(1);border:solid .08em currentColor;color:" + theme.text.disabled + ";}"; },
            checked: null,
            _animations: function () { return function (className) { return className + " " + radio.container + " div{transition:transform cubic-bezier(.1, 1, 0.5, 1);transition-duration:250ms;}"; }; },
            onFocusByKeyboard: null,
            disabled: function () { return function (className) { return className + "{color:" + theme.disabled.contrast + ";}" + className + " " + radio.container + " div{color:" + theme.disabled.contrast + "!important;}"; }; }
        };
    };
    var LyRadioGroup = /** @class */ (function () {
        function LyRadioGroup(elementRef, renderer, _theme, _cd) {
            this._theme = _theme;
            this._cd = _cd;
            /** @docs-private */
            this.classes = this._theme.renderStyleSheet(STYLES);
            /** @docs-private */
            this.name = "ly-radio-name-" + idx++;
            this.change = new core.EventEmitter();
            this.color = 'accent';
            /** The method to be called in order to update ngModel */
            this._controlValueAccessorChangeFn = function () { };
            /**
             * onTouch function registered via registerOnTouch (ControlValueAccessor).
             * @docs-private
             */
            this.onTouched = function () { };
            renderer.addClass(elementRef.nativeElement, this.classes.root);
        }
        Object.defineProperty(LyRadioGroup.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (val) {
                if (this._value !== val) {
                    if (this._radios) {
                        this._updateCheckFromValue(val);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
         * radio buttons upon their blur.
         */
        LyRadioGroup.prototype._touch = function () {
            if (this.onTouched) {
                this.onTouched();
            }
        };
        /** @docs-private */
        LyRadioGroup.prototype.writeValue = function (value) {
            if (!!this._radios) {
                this.value = value;
                this._markForCheck();
            }
        };
        /**
         * Registers a callback to be triggered when the model value changes.
         * Implemented as part of ControlValueAccessor.
         * @param fn Callback to be registered.
         * @docs-private
         */
        LyRadioGroup.prototype.registerOnChange = function (fn) {
            this._controlValueAccessorChangeFn = fn;
        };
        /**
         * Registers a callback to be triggered when the control is touched.
         * Implemented as part of ControlValueAccessor.
         * @param fn Callback to be registered.
         * @docs-private
         */
        LyRadioGroup.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        /**
         * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
         * @param _isDisabled Whether the control should be disabled.
         * @docs-private
         */
        LyRadioGroup.prototype.setDisabledState = function (_isDisabled) {
            // this.disabled = isDisabled;
            this._markForCheck();
        };
        LyRadioGroup.prototype._updateCheckFromValue = function (val) {
            var _this = this;
            var newChecked;
            this._radios.forEach(function (radioButton) {
                if (val === radioButton.value) {
                    _this.updatevalue(val);
                    newChecked = true;
                    radioButton.checked = true;
                }
                else if (radioButton.checked) {
                    radioButton.checked = false;
                }
            });
            if (!newChecked) {
                /** when val not exist in radio button !==  */
                this._controlValueAccessorChangeFn(null);
                if (this._value != null) {
                    this._value = null;
                }
            }
        };
        /** @docs-private */
        LyRadioGroup.prototype.updatevalue = function (value) {
            this._value = value;
            this._controlValueAccessorChangeFn(value);
            this.change.emit();
            this._markForCheck();
        };
        LyRadioGroup.prototype._markForCheck = function () {
            this._cd.markForCheck();
        };
        LyRadioGroup.prototype._radioResetChecked = function () {
            this._radios.forEach(function (_) { return _._setCheckedToFalsy(); });
        };
        /** @docs-private */
        LyRadioGroup.и = 'LyRadioGroup';
        LyRadioGroup.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: ui.LyTheme2 },
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.Input()
        ], LyRadioGroup.prototype, "value", null);
        __decorate([
            core.Output()
        ], LyRadioGroup.prototype, "change", void 0);
        __decorate([
            core.Input()
        ], LyRadioGroup.prototype, "color", void 0);
        __decorate([
            core.ContentChildren(core.forwardRef(function () { return LyRadio; }))
        ], LyRadioGroup.prototype, "_radios", void 0);
        LyRadioGroup = __decorate([
            core.Component({
                selector: 'ly-radio-group',
                template: "<ng-content></ng-content>",
                providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                exportAs: 'lyRadioGroup'
            })
        ], LyRadioGroup);
        return LyRadioGroup;
    }());
    /** @docs-private */
    var LyRadioBase = /** @class */ (function () {
        function LyRadioBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyRadioBase;
    }());
    /** @docs-private */
    var LyRadioMixinBase = ui.mixinDisableRipple(LyRadioBase);
    var LyRadio = /** @class */ (function (_super) {
        __extends(LyRadio, _super);
        function LyRadio(
        /** @docs-private */
        radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, _coreStyles, _focusState, _styleRenderer) {
            var _this = _super.call(this, theme, ngZone) || this;
            _this.radioGroup = radioGroup;
            _this._elementRef = _elementRef;
            _this._renderer = _renderer;
            _this.changeDetectorRef = changeDetectorRef;
            _this._coreStyles = _coreStyles;
            _this._focusState = _focusState;
            _this._styleRenderer = _styleRenderer;
            /** @docs-private */
            _this.classes = _this.radioGroup.classes;
            /** @docs-private */
            _this.id = "ly-radio-id-" + idx++;
            /** @docs-private */
            _this.name = '';
            _this._value = null;
            _this._checked = false;
            _this.change = new core.EventEmitter();
            _this._triggerElement = _this._elementRef;
            _this._rippleConfig = {
                centered: true,
                radius: 'containerSize',
                percentageToIncrease: 150
            };
            _renderer.addClass(_elementRef.nativeElement, radioGroup.classes.radio);
            return _this;
        }
        LyRadio_1 = LyRadio;
        Object.defineProperty(LyRadio.prototype, "value", {
            get: function () { return this._value; },
            set: function (val) {
                if (this._value !== val) {
                    this._value = val;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyRadio.prototype, "color", {
            get: function () { return this._color; },
            set: function (val) {
                if (this._color !== val) {
                    this._color = val;
                    this[0x1] = this._styleRenderer.add(LyRadio_1.и + "--color-" + val, function (theme, ref) {
                        var _a = ref.selectorsOf(STYLES), checked = _a.checked, container = _a.container;
                        return function (className) { return "" + className + checked + " " + container + "," + className + checked + " " + container + " div:nth-child(1)," + className + " " + container + " div:nth-child(2){color:" + theme.colorOf(val) + ";}"; };
                    }, STYLE_PRIORITY, this[0x1]);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyRadio.prototype, "checked", {
            get: function () {
                return this._checked;
            },
            set: function (val) {
                var newCheckedState = ui.toBoolean(val);
                var before = this._checked;
                if (before !== newCheckedState) {
                    this._checked = newCheckedState;
                    if (!before && newCheckedState) {
                        /** Add class checked */
                        this._renderer.addClass(this._elementRef.nativeElement, this.classes.checked);
                        if (this.value !== this.radioGroup.value) {
                            /** update Value */
                            this.radioGroup.updatevalue(this.value);
                        }
                    }
                    else {
                        /** Remove class checked */
                        this._renderer.removeClass(this._elementRef.nativeElement, this.classes.checked);
                    }
                    this._markForCheck();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyRadio.prototype, "inputId", {
            /** @docs-private */
            get: function () {
                return this.id + "-input";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyRadio.prototype, "disabled", {
            get: function () { return this._disabled; },
            set: function (value) {
                var newVal = ui.toBoolean(value);
                if (newVal) {
                    this._renderer.addClass(this._elementRef.nativeElement, this.classes.disabled);
                    this._disabledClass = this.classes.disabled;
                }
                else if (this._disabledClass) {
                    this._renderer.removeClass(this._elementRef.nativeElement, this.classes.disabled);
                    this._disabledClass = undefined;
                }
                this._disabled = ui.toBoolean(value);
                this._markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        LyRadio.prototype.ngOnInit = function () {
            if (this.radioGroup) {
                // Copy name from parent radio group
                this.name = this.radioGroup.name;
            }
            if (!this.color) {
                this.color = this.radioGroup.color || DEFAULT_COLOR;
            }
        };
        LyRadio.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._rippleContainer = this._radioContainer;
            // set default disable ripple
            if (this.disableRipple == null) {
                this.disableRipple = DEFAULT_DISABLE_RIPPLE;
            }
            var focusState = this._focusState.listen(this._input, this._elementRef);
            if (focusState) {
                focusState.subscribe(function (event) {
                    if (event === 'keyboard') {
                        _this._renderer.addClass(_this._elementRef.nativeElement, _this.classes.onFocusByKeyboard);
                    }
                    else if (event == null) {
                        _this._renderer.removeClass(_this._elementRef.nativeElement, _this.classes.onFocusByKeyboard);
                    }
                });
            }
        };
        LyRadio.prototype._markForCheck = function () {
            this.changeDetectorRef.markForCheck();
        };
        LyRadio.prototype.ngOnDestroy = function () {
            this._focusState.unlisten(this._elementRef);
            this._removeRippleEvents();
        };
        LyRadio.prototype._onInputChange = function (event) {
            event.stopPropagation();
            this.radioGroup._updateCheckFromValue(this.value);
            this.radioGroup._touch();
            this._addAnim();
        };
        LyRadio.prototype._addAnim = function () {
            if (!this._animClass) {
                this._renderer.addClass(this._elementRef.nativeElement, this.classes._animations);
                this._animClass = this.classes._animations;
            }
        };
        LyRadio.prototype._onInputClick = function (event) { event.stopPropagation(); };
        LyRadio.prototype._setCheckedToFalsy = function () {
            this.checked = false;
        };
        var LyRadio_1;
        /** @docs-private */
        LyRadio.и = 'LyRadio';
        LyRadio.ctorParameters = function () { return [
            { type: LyRadioGroup, decorators: [{ type: core.Optional }] },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: ui.LyTheme2 },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone },
            { type: ui.LyCoreStyles },
            { type: ui.LyFocusState },
            { type: ui.StyleRenderer }
        ]; };
        __decorate([
            core.ViewChild('_input', { static: false })
        ], LyRadio.prototype, "_input", void 0);
        __decorate([
            core.ViewChild('_radioContainer', { static: false })
        ], LyRadio.prototype, "_radioContainer", void 0);
        __decorate([
            core.ViewChild('_labelContainer', { static: false })
        ], LyRadio.prototype, "_labelContainer", void 0);
        __decorate([
            core.Output()
        ], LyRadio.prototype, "change", void 0);
        __decorate([
            core.Input()
        ], LyRadio.prototype, "value", null);
        __decorate([
            core.Input()
        ], LyRadio.prototype, "color", null);
        __decorate([
            core.Input()
        ], LyRadio.prototype, "checked", null);
        __decorate([
            core.Input()
        ], LyRadio.prototype, "disabled", null);
        LyRadio = LyRadio_1 = __decorate([
            core.Component({
                selector: 'ly-radio',
                template: "<label #_labelContainer [attr.for]=\"inputId\" [className]=\"classes.label\">\n  <input #_input\n    [className]=\"_coreStyles.classes.visuallyHidden\"\n    [id]=\"inputId\"\n    [checked]=\"checked\"\n    [name]=\"name\"\n    (change)=\"_onInputChange($event)\"\n    (click)=\"_onInputClick($event)\"\n    [disabled]=\"disabled\"\n    type=\"radio\"\n    >\n  <div #_radioContainer [className]=\"classes.container\">\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n  </div>\n  <div\n  [className]=\"classes.labelContent\">\n    <ng-content></ng-content>\n  </div>\n</label>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                inputs: [
                    'disableRipple'
                ],
                providers: [
                    ui.LyHostClass,
                    ui.StyleRenderer
                ]
            }),
            __param(0, core.Optional())
        ], LyRadio);
        return LyRadio;
    }(LyRadioMixinBase));
    var LyRadioModule = /** @class */ (function () {
        function LyRadioModule() {
        }
        LyRadioModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule, forms.FormsModule, ui.LyCommonModule],
                exports: [LyRadioGroup, LyRadio],
                declarations: [LyRadioGroup, LyRadio],
            })
        ], LyRadioModule);
        return LyRadioModule;
    }());

    exports.LY_RADIO_CONTROL_VALUE_ACCESSOR = LY_RADIO_CONTROL_VALUE_ACCESSOR;
    exports.LyRadio = LyRadio;
    exports.LyRadioBase = LyRadioBase;
    exports.LyRadioGroup = LyRadioGroup;
    exports.LyRadioMixinBase = LyRadioMixinBase;
    exports.LyRadioModule = LyRadioModule;
    exports.STYLES = STYLES;
    exports.UndefinedValue = UndefinedValue;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-radio.umd.js.map
