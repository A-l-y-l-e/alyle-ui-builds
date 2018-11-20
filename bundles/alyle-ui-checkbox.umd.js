(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/checkbox', ['exports', '@angular/core', '@angular/forms', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.checkbox = {}),global.ng.core,global.ng.forms,global.alyle.ui,global.ng.common));
}(this, (function (exports,core,forms,ui,common) { 'use strict';

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var DEFAULT_WITH_COLOR = 'accent';
    /** @type {?} */
    var DEFAULT_DISABLE_RIPPLE = false;
    /** @type {?} */
    var STYLES = function (theme) {
        return ({
            root: {
                '&{disabled}{checked} {icon}::before': {
                    border: 0
                },
                '&{onFocusByKeyboard} {icon}::after': {
                    boxShadow: '0 0 0 12px',
                    opacity: .13,
                    borderRadius: '50%'
                },
                '&:not({checked}) {icon}': __assign({}, theme.checkbox.unchecked)
            },
            layout: {
                display: 'inline-flex',
                alignItems: 'baseline',
                cursor: 'pointer'
            },
            icon: __assign({ position: 'relative', marginEnd: '8px', marginTop: 'auto', marginBottom: 'auto', width: '16px', height: '16px', userSelect: 'none' }, theme.checkbox.root, { '&::before, &::after': __assign({ content: "''" }, ui.LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto' }), '&::before': {
                    border: 'solid 2px',
                    borderRadius: '2px'
                }, svg: {
                    position: 'absolute',
                    polyline: {
                        fill: 'none',
                        stroke: theme.background.primary.default,
                        strokeWidth: 2,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeDasharray: '18px',
                        strokeDashoffset: '18px'
                    }
                } }),
            checked: {
                '& {icon}::before': {
                    background: 'currentColor'
                },
                '& {icon} polyline': {
                    strokeDashoffset: 0
                }
            },
            input: __assign({}, ui.LY_COMMON_STYLES.visuallyHidden),
            onFocusByKeyboard: {},
            disabled: {
                '& {input}': {
                    visibility: 'hidden'
                },
                '& {icon}': {
                    color: 'inherit !important'
                }
            },
            animations: {
                '& {icon} svg polyline': {
                    transition: "all " + theme.animations.durations.entering + "ms " + theme.animations.curves.sharp
                }
            }
        });
    };
    /**
     * This allows it to support [(ngModel)].
     * @ignore
     * @type {?}
     */
    var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return LyCheckbox; }),
        multi: true
    };
    /**
     * Change event object emitted by LyCheckbox.
     */
    var /**
     * Change event object emitted by LyCheckbox.
     */ LyCheckboxChange = /** @class */ (function () {
        function LyCheckboxChange() {
        }
        return LyCheckboxChange;
    }());
    var LyCheckboxBase = /** @class */ (function () {
        function LyCheckboxBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyCheckboxBase;
    }());
    /** @type {?} */
    var LyCheckboxMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinFlat(ui.mixinColor(ui.mixinRaised((ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(ui.mixinDisableRipple(LyCheckboxBase))))))))));
    var LyCheckbox = /** @class */ (function (_super) {
        __extends(LyCheckbox, _super);
        function LyCheckbox(_commonStyles, _theme, _el, _renderer, _changeDetectorRef, _focusState, ngZone) {
            var _this = _super.call(this, _theme, ngZone) || this;
            _this._commonStyles = _commonStyles;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._focusState = _focusState;
            /**
             * styles
             * @ignore
             */
            _this.classes = _this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
            /**
             * Event emitted when the checkbox's `checked` value changes.
             */
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
        Object.defineProperty(LyCheckbox.prototype, "withColor", {
            get: /**
             * @return {?}
             */ function () {
                return this._withColor;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                var _this = this;
                if (val !== this.withColor) {
                    this._withColor = val;
                    this._withColorClass = this._theme.addStyle("lyCheckbox.withColor:" + val, function (theme) {
                        var _a;
                        return (_a = {},
                            _a["&." + _this.classes.checked + " ." + _this.classes.icon] = {
                                color: theme.colorOf(val)
                            },
                            _a);
                    }, this._el.nativeElement, this._withColorClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCheckbox.prototype, "checked", {
            /**
             * Whether the checkbox is checked.
             */
            get: /**
             * Whether the checkbox is checked.
             * @return {?}
             */ function () { return this._checked; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
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
            get: /**
             * @return {?}
             */ function () {
                return this._required;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._required = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCheckbox.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
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
        /**
         * @return {?}
         */
        LyCheckbox.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._renderer.addClass(this._el.nativeElement, this.classes.root);
                // set default
                if (!this.withColor) {
                    this.withColor = DEFAULT_WITH_COLOR;
                }
            };
        /**
         * @return {?}
         */
        LyCheckbox.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._focusState.listen(this._inputElement, this._el).subscribe(function (event) {
                    if (_this._onFocusByKeyboardState === true) {
                        _this._renderer.removeClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                        _this._onFocusByKeyboardState = false;
                    }
                    if (event.by === 'keyboard') {
                        if (event.event.type === 'focus') {
                            _this._onFocusByKeyboardState = true;
                            _this._renderer.addClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                        }
                    }
                    _this._onTouched();
                });
                this._rippleContainer = this._innerContainer;
                // set default disable ripple
                if (this.disableRipple === null) {
                    this.disableRipple = DEFAULT_DISABLE_RIPPLE;
                }
                this._renderer.addClass(this._el.nativeElement, this.classes.animations);
            };
        /**
         * @return {?}
         */
        LyCheckbox.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._focusState.unlisten(this._el);
                this._removeRippleEvents();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        LyCheckbox.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.checked = !!value;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        LyCheckbox.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._controlValueAccessorChangeFn = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        LyCheckbox.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouched = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        LyCheckbox.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        /** Toggles the `checked` state of the checkbox. */
        /**
         * Toggles the `checked` state of the checkbox.
         * @return {?}
         */
        LyCheckbox.prototype.toggle = /**
         * Toggles the `checked` state of the checkbox.
         * @return {?}
         */
            function () {
                this.checked = !this.checked;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LyCheckbox.prototype._onInputClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                if (!this.disabled) {
                    this.toggle();
                    this._emitChangeEvent();
                }
                this._markForCheck();
            };
        /**
         * @return {?}
         */
        LyCheckbox.prototype._emitChangeEvent = /**
         * @return {?}
         */
            function () {
                this._controlValueAccessorChangeFn(this.checked);
                this.change.emit({
                    source: this,
                    checked: this.checked
                });
            };
        /**
         * @return {?}
         */
        LyCheckbox.prototype._markForCheck = /**
         * @return {?}
         */
            function () {
                this._changeDetectorRef.markForCheck();
            };
        LyCheckbox.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-checkbox',
                        template: "\n<label [className]=\"classes.layout\">\n  <input #input\n  [className]=\"classes.input\"\n  type=\"checkbox\"\n  [checked]=\"checked\"\n  [required]=\"required\"\n  [attr.value]=\"value\"\n  [disabled]=\"disabled\"\n  (click)=\"_onInputClick($event)\"\n  >\n  <div #innerContainer [className]=\"classes.icon\">\n    <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 20 20\">\n      <polyline points=\"4 11 8 15 16 6\"></polyline>\n    </svg>\n  </div>\n  <div #label>\n    <ng-content></ng-content>\n  </div>\n</label>",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                        exportAs: 'lyCheckbox',
                        inputs: [
                            'bg',
                            'flat',
                            'color',
                            'raised',
                            'outlined',
                            'elevation',
                            'shadowColor',
                            'disableRipple'
                        ]
                    }] }
        ];
        /** @nocollapse */
        LyCheckbox.ctorParameters = function () {
            return [
                { type: ui.LyCoreStyles },
                { type: ui.LyTheme2 },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef },
                { type: ui.LyFocusState },
                { type: core.NgZone }
            ];
        };
        LyCheckbox.propDecorators = {
            _innerContainer: [{ type: core.ViewChild, args: ['innerContainer',] }],
            value: [{ type: core.Input }],
            withColor: [{ type: core.Input }],
            checked: [{ type: core.Input }],
            required: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            change: [{ type: core.Output }],
            _inputElement: [{ type: core.ViewChild, args: ['input',] }]
        };
        return LyCheckbox;
    }(LyCheckboxMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyCheckboxModule = /** @class */ (function () {
        function LyCheckboxModule() {
        }
        LyCheckboxModule.decorators = [
            { type: core.NgModule, args: [{
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
                    },] }
        ];
        return LyCheckboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LyCheckboxModule = LyCheckboxModule;
    exports.LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = LY_CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.LyCheckboxChange = LyCheckboxChange;
    exports.LyCheckboxBase = LyCheckboxBase;
    exports.LyCheckboxMixinBase = LyCheckboxMixinBase;
    exports.LyCheckbox = LyCheckbox;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2hlY2tib3gudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL2NoZWNrYm94L2NoZWNrYm94LnRzIiwibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvY2hlY2tib3gubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBMWV9DT01NT05fU1RZTEVTLFxuICBMeUNvcmVTdHlsZXMgYXMgTHlDb21tb25TdHlsZXMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluRmxhdCxcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgdG9Cb29sZWFuXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdhY2NlbnQnO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgJyZ7ZGlzYWJsZWR9e2NoZWNrZWR9IHtpY29ufTo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyOiAwXG4gICAgfSxcbiAgICAnJntvbkZvY3VzQnlLZXlib2FyZH0ge2ljb259OjphZnRlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzAgMCAwIDEycHgnLFxuICAgICAgb3BhY2l0eTogLjEzLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgIH0sXG4gICAgJyY6bm90KHtjaGVja2VkfSkge2ljb259Jzoge1xuICAgICAgLi4udGhlbWUuY2hlY2tib3gudW5jaGVja2VkXG4gICAgfVxuICB9LFxuICBsYXlvdXQ6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfSxcbiAgaWNvbjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpbkVuZDogJzhweCcsXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXG4gICAgd2lkdGg6ICcxNnB4JyxcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgLi4udGhlbWUuY2hlY2tib3gucm9vdCxcbiAgICAnJjo6YmVmb3JlLCAmOjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICB3aWR0aDogJzE2cHgnLFxuICAgICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgICBtYXJnaW46ICdhdXRvJ1xuICAgIH0sXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICcycHgnXG4gICAgfSxcbiAgICBzdmc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcG9seWxpbmU6IHtcbiAgICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgICBzdHJva2U6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgICAgICBzdHJva2VXaWR0aDogMixcbiAgICAgICAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgICAgICAgc3Ryb2tlTGluZWpvaW46ICdyb3VuZCcsXG4gICAgICAgIHN0cm9rZURhc2hhcnJheTogJzE4cHgnLFxuICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiAnMThweCdcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBjaGVja2VkOiB7XG4gICAgJyYge2ljb259OjpiZWZvcmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICAgIH0sXG4gICAgJyYge2ljb259IHBvbHlsaW5lJzoge1xuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogMFxuICAgIH1cbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLnZpc3VhbGx5SGlkZGVuXG4gIH0sXG4gIG9uRm9jdXNCeUtleWJvYXJkOiB7IH0sXG4gIGRpc2FibGVkOiB7XG4gICAgJyYge2lucHV0fSc6IHtcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgfSxcbiAgICAnJiB7aWNvbn0nOiB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQgIWltcG9ydGFudCdcbiAgICB9XG4gIH0sXG4gIGFuaW1hdGlvbnM6IHtcbiAgICAnJiB7aWNvbn0gc3ZnIHBvbHlsaW5lJzoge1xuICAgICAgdHJhbnNpdGlvbjogYGFsbCAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9YFxuICAgIH1cbiAgfVxufSk7XG5cbi8qKlxuICogVGhpcyBhbGxvd3MgaXQgdG8gc3VwcG9ydCBbKG5nTW9kZWwpXS5cbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IExZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5Q2hlY2tib3gpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqIENoYW5nZSBldmVudCBvYmplY3QgZW1pdHRlZCBieSBMeUNoZWNrYm94LiAqL1xuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hDaGFuZ2Uge1xuICAvKiogVGhlIHNvdXJjZSBMeUNoZWNrYm94IG9mIHRoZSBldmVudC4gKi9cbiAgc291cmNlOiBMeUNoZWNrYm94O1xuICAvKiogVGhlIG5ldyBgY2hlY2tlZGAgdmFsdWUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBMeUNoZWNrYm94TWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkZsYXQoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICAoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUNoZWNrYm94QmFzZSkpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0xZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBleHBvcnRBczogJ2x5Q2hlY2tib3gnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdmbGF0JyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94IGV4dGVuZHMgTHlDaGVja2JveE1peGluQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByb3RlY3RlZCBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfd2l0aENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9pbmRldGVybWluYXRlOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2NoZWNrZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQ7XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG4gIEBWaWV3Q2hpbGQoJ2lubmVyQ29udGFpbmVyJykgX2lubmVyQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgLyoqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50ICovXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHdpdGhDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgICB0aGlzLl93aXRoQ29sb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseUNoZWNrYm94LndpdGhDb2xvcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuY2hlY2tlZH0gLiR7dGhpcy5jbGFzc2VzLmljb259YF06IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZih2YWwpXG4gICAgICAgIH1cbiAgICAgIH0pLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl93aXRoQ29sb3JDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jaGVja2VkOyB9XG4gIHNldCBjaGVja2VkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIC8vIGlmIChuZXdWYWwgIT09IHRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuICAgICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY2hlY2tib3gncyBgY2hlY2tlZGAgdmFsdWUgY2hhbmdlcy4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPEx5Q2hlY2tib3hDaGFuZ2U+ID1cbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8THlDaGVja2JveENoYW5nZT4oKTtcblxuICAvKiogVGhlIG5hdGl2ZSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPmAgZWxlbWVudCAqL1xuICBAVmlld0NoaWxkKCdpbnB1dCcpIF9pbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgX29uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG4gIHByaXZhdGUgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9jb21tb25TdHlsZXM6IEx5Q29tbW9uU3R5bGVzLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIG5nWm9uZTogTmdab25lLFxuICApIHtcbiAgICBzdXBlcihfdGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbDtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcgPSB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHJhZGl1czogJ2NvbnRhaW5lclNpemUnLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IDE1MFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgLy8gc2V0IGRlZmF1bHRcbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9IERFRkFVTFRfV0lUSF9DT0xPUjtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5faW5wdXRFbGVtZW50LCB0aGlzLl9lbCkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmJ5ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgIGlmIChldmVudC5ldmVudC50eXBlID09PSAnZm9jdXMnKSB7XG4gICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLl9pbm5lckNvbnRhaW5lcjtcblxuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gISF2YWx1ZTtcbiAgfVxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBgY2hlY2tlZGAgc3RhdGUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgfVxuXG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KCk7XG4gICAgfVxuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW1pdENoYW5nZUV2ZW50KCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy5jaGVja2VkKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5pbXBvcnQgeyBMeUNoZWNrYm94IH0gZnJvbSAnLi9jaGVja2JveCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEx5Q2hlY2tib3hcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTHlDb21tb25Nb2R1bGUsXG4gICAgTHlDaGVja2JveFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiTFlfQ09NTU9OX1NUWUxFUyIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIm1peGluU3R5bGVVcGRhdGVyIiwibWl4aW5CZyIsIm1peGluRmxhdCIsIm1peGluQ29sb3IiLCJtaXhpblJhaXNlZCIsIm1peGluT3V0bGluZWQiLCJtaXhpbkVsZXZhdGlvbiIsIm1peGluU2hhZG93Q29sb3IiLCJtaXhpbkRpc2FibGVSaXBwbGUiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkV2ZW50RW1pdHRlciIsInRvQm9vbGVhbiIsIkNvbXBvbmVudCIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJMeUNvbW1vblN0eWxlcyIsIkx5VGhlbWUyIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIkNoYW5nZURldGVjdG9yUmVmIiwiTHlGb2N1c1N0YXRlIiwiTmdab25lIiwiVmlld0NoaWxkIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FB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