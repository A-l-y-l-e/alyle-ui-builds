(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@alyle/ui'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/checkbox', ['exports', '@angular/core', '@angular/common', '@alyle/ui', '@angular/forms'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.checkbox = {}), global.ng.core, global.ng.common, global.ly.core, global.ng.forms));
}(this, (function (exports, core, common, ui, forms) { 'use strict';

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
    var DEFAULT_WITH_COLOR = 'accent';
    var DEFAULT_DISABLE_RIPPLE = false;
    var STYLES = function (theme, ref) {
        var checkbox = ref.selectorsOf(STYLES);
        var before = theme.before, after = theme.after;
        return {
            $name: LyCheckbox.и,
            $priority: STYLE_PRIORITY,
            root: function () { return function (className) { return className + "{margin-" + after + ":16px;margin-" + before + ":-16px;display:inline-flex;}" + ui.st2c(((theme.checkbox
                && theme.checkbox.root
                && (theme.checkbox.root instanceof ui.StyleCollection
                    ? theme.checkbox.root.setTransformer(function (fn) { return fn(checkbox); })
                    : theme.checkbox.root(checkbox)))), "" + className) + className + checkbox.disabled + ":not(" + checkbox.checked + ") " + checkbox.icon + ":before{color:" + theme.disabled.default + ";}" + className + checkbox.disabled + "{pointer-events:none;}" + className + checkbox.disabled + " " + checkbox.layout + "{color:" + theme.text.secondary + ";}" + className + checkbox.disabled + checkbox.checked + " " + checkbox.icon + ":before{border:0;background:" + theme.disabled.default + ";}" + className + checkbox.onFocusByKeyboard + " " + checkbox.icon + "::after{box-shadow:0 0 0 12px;opacity:.13;border-radius:50%;}" + className + ":not(" + checkbox.checked + ") " + checkbox.icon + "{color:" + theme.text.secondary + ";}"; }; },
            layout: function (className) { return className + "{display:inline-flex;align-items:baseline;cursor:pointer;margin-" + before + ":16px;padding-top:12px;padding-bottom:12px;}"; },
            icon: function (className) { return className + "{position:relative;margin-" + after + ":8px;margin-top:auto;margin-bottom:auto;width:16px;height:16px;user-select:none;}" + className + "::before," + className + "::after{content:'';width:16px;height:16px;margin:auto;box-sizing:border-box;}" + ui.st2c((ui.LY_COMMON_STYLES.fill), className + "::before," + className + "::after") + className + "::before{border:solid 2px;border-radius:2px;}" + className + " svg{position:absolute;}" + className + " svg polyline{fill:none;stroke:" + theme.background.primary.default + ";stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:18px;stroke-dashoffset:18px;}"; },
            checked: function () { return function (className) { return className + " " + checkbox.icon + "::before{background:currentColor;}" + className + " " + checkbox.icon + " polyline{stroke-dashoffset:0;}"; }; },
            input: ui.LY_COMMON_STYLES.visuallyHidden,
            onFocusByKeyboard: null,
            disabled: function () { return function (className) { return className + " " + checkbox.input + "{visibility:hidden;}" + className + " " + checkbox.icon + "{color:inherit !important;}"; }; },
            animations: function () { return function (className) { return className + " " + checkbox.icon + " svg polyline{transition:all " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp + ";}"; }; }
        };
    };
    /**
     * This allows it to support [(ngModel)].
     * @ignore
     */
    var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return LyCheckbox; }),
        multi: true
    };
    /** Change event object emitted by LyCheckbox. */
    var LyCheckboxChange = /** @class */ (function () {
        function LyCheckboxChange() {
        }
        return LyCheckboxChange;
    }());
    /** @docs-private */
    var LyCheckboxBase = /** @class */ (function () {
        function LyCheckboxBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyCheckboxBase;
    }());
    /** @docs-private */
    var LyCheckboxMixinBase = ui.mixinDisableRipple(LyCheckboxBase);
    var LyCheckbox = /** @class */ (function (_super) {
        __extends(LyCheckbox, _super);
        function LyCheckbox(_commonStyles, _theme, _el, _renderer, _changeDetectorRef, _focusState, _styleRenderer, ngZone) {
            var _this = _super.call(this, _theme, ngZone) || this;
            _this._commonStyles = _commonStyles;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._focusState = _focusState;
            _this._styleRenderer = _styleRenderer;
            /**
             * styles
             * @ignore
             */
            _this.classes = _this._theme.renderStyleSheet(STYLES);
            /** Event emitted when the checkbox's `checked` value changes. */
            _this.change = new core.EventEmitter();
            _this._onTouched = function () { };
            _this._controlValueAccessorChangeFn = function () { };
            _this._triggerElement = _this._el;
            _this._rippleConfig = {
                centered: true,
                radius: 'containerSize',
                percentageToIncrease: 150
            };
            return _this;
        }
        LyCheckbox_1 = LyCheckbox;
        Object.defineProperty(LyCheckbox.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (val) {
                if (val !== this.color) {
                    this._color = val;
                    this._colorClass = this._styleRenderer.add(LyCheckbox_1.и + "--color-" + val, function (theme, ref) {
                        var checkbox = ref.selectorsOf(STYLES);
                        var color = theme.colorOf(val);
                        if (theme.checkbox && theme.checkbox.color) {
                            return theme.checkbox.color(checkbox, color);
                        }
                        throw new Error(LyCheckbox_1.и + ": styles theme.checkbox.color is undefined");
                    }, STYLE_PRIORITY, this._colorClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCheckbox.prototype, "checked", {
            /**
             * Whether the checkbox is checked.
             */
            get: function () { return this._checked; },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                // if (newVal !== this.checked) {
                this._checked = newVal;
                if (newVal) {
                    this._renderer.addClass(this._el.nativeElement, this.classes.checked);
                }
                else {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.checked);
                }
                // }
                this._markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCheckbox.prototype, "required", {
            get: function () {
                return this._required;
            },
            set: function (val) {
                this._required = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCheckbox.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                if (newVal !== this.disabled) {
                    this._disabled = newVal;
                    if (newVal) {
                        this._renderer.addClass(this._el.nativeElement, this.classes.disabled);
                    }
                    else {
                        this._renderer.removeClass(this._el.nativeElement, this.classes.disabled);
                    }
                    this._markForCheck();
                }
            },
            enumerable: true,
            configurable: true
        });
        LyCheckbox.prototype.ngOnInit = function () {
            this._renderer.addClass(this._el.nativeElement, this.classes.root);
            // set default color
            if (!this.color) {
                this.color = DEFAULT_WITH_COLOR;
            }
        };
        LyCheckbox.prototype.ngAfterViewInit = function () {
            var _this = this;
            var focusState = this._focusState.listen(this._inputElement, this._el);
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
                    _this._onTouched();
                });
            }
            this._rippleContainer = this._innerContainer;
            // set default disable ripple
            if (this.disableRipple == null) {
                this.disableRipple = DEFAULT_DISABLE_RIPPLE;
            }
            this._renderer.addClass(this._el.nativeElement, this.classes.animations);
        };
        LyCheckbox.prototype.ngOnDestroy = function () {
            this._focusState.unlisten(this._el);
            this._removeRippleEvents();
        };
        /** @docs-private */
        LyCheckbox.prototype.writeValue = function (value) {
            this.checked = !!value;
        };
        /** @docs-private */
        LyCheckbox.prototype.registerOnChange = function (fn) {
            this._controlValueAccessorChangeFn = fn;
        };
        /** @docs-private */
        LyCheckbox.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        /** @docs-private */
        LyCheckbox.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        /** Toggles the `checked` state of the checkbox. */
        LyCheckbox.prototype.toggle = function () {
            this.checked = !this.checked;
        };
        LyCheckbox.prototype._onInputClick = function (event) {
            event.stopPropagation();
            if (!this.disabled) {
                this.toggle();
                this._emitChangeEvent();
            }
            this._markForCheck();
        };
        LyCheckbox.prototype._onChange = function (event) {
            event.stopPropagation();
        };
        LyCheckbox.prototype._emitChangeEvent = function () {
            this._controlValueAccessorChangeFn(this.checked);
            this.change.emit({
                source: this,
                checked: this.checked
            });
        };
        LyCheckbox.prototype._markForCheck = function () {
            this._changeDetectorRef.markForCheck();
        };
        var LyCheckbox_1;
        /** @ignore */
        LyCheckbox.и = 'LyCheckbox';
        LyCheckbox.ctorParameters = function () { return [
            { type: ui.LyCoreStyles },
            { type: ui.LyTheme2 },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: ui.LyFocusState },
            { type: ui.StyleRenderer },
            { type: core.NgZone }
        ]; };
        __decorate([
            core.ViewChild('innerContainer', { static: false })
        ], LyCheckbox.prototype, "_innerContainer", void 0);
        __decorate([
            core.Input()
        ], LyCheckbox.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], LyCheckbox.prototype, "color", null);
        __decorate([
            core.Input()
        ], LyCheckbox.prototype, "checked", null);
        __decorate([
            core.Input()
        ], LyCheckbox.prototype, "required", null);
        __decorate([
            core.Input()
        ], LyCheckbox.prototype, "disabled", null);
        __decorate([
            core.Output()
        ], LyCheckbox.prototype, "change", void 0);
        __decorate([
            core.ViewChild('input', { static: false })
        ], LyCheckbox.prototype, "_inputElement", void 0);
        LyCheckbox = LyCheckbox_1 = __decorate([
            core.Component({
                selector: 'ly-checkbox',
                template: "\n<label [className]=\"classes.layout\">\n  <input #input\n  [className]=\"classes.input\"\n  type=\"checkbox\"\n  [checked]=\"checked\"\n  [required]=\"required\"\n  [attr.value]=\"value\"\n  [disabled]=\"disabled\"\n  (click)=\"_onInputClick($event)\"\n  (change)=\"_onChange($event)\"\n  >\n  <div #innerContainer [className]=\"classes.icon\">\n    <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 20 20\">\n      <polyline points=\"4 11 8 15 16 6\"></polyline>\n    </svg>\n  </div>\n  <div #label>\n    <ng-content></ng-content>\n  </div>\n</label>",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    ui.LyHostClass,
                    ui.StyleRenderer,
                    LY_CHECKBOX_CONTROL_VALUE_ACCESSOR,
                ],
                exportAs: 'lyCheckbox',
                inputs: [
                    'disableRipple'
                ]
            })
        ], LyCheckbox);
        return LyCheckbox;
    }(LyCheckboxMixinBase));

    var LyCheckboxModule = /** @class */ (function () {
        function LyCheckboxModule() {
        }
        LyCheckboxModule = __decorate([
            core.NgModule({
                declarations: [
                    LyCheckbox
                ],
                imports: [
                    common.CommonModule,
                    ui.LyCommonModule
                ],
                exports: [
                    ui.LyCommonModule,
                    LyCheckbox
                ]
            })
        ], LyCheckboxModule);
        return LyCheckboxModule;
    }());

    exports.LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = LY_CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.LyCheckbox = LyCheckbox;
    exports.LyCheckboxBase = LyCheckboxBase;
    exports.LyCheckboxChange = LyCheckboxChange;
    exports.LyCheckboxMixinBase = LyCheckboxMixinBase;
    exports.LyCheckboxModule = LyCheckboxModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-checkbox.umd.js.map
