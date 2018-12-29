(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/radio', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.radio = {}),global.ng.core,global.ng.forms,global.ng.common,global.ly.core));
}(this, (function (exports,core,forms,common,ui) { 'use strict';

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
    var DEFAULT_DISABLE_RIPPLE = false;
    /** @type {?} */
    var DEFAULT_COLOR = 'accent';
    /** @type {?} */
    var LY_RADIO_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return LyRadioGroup; }),
        multi: true
    };
    /** @type {?} */
    var idx = 0;
    var UndefinedValue = /** @class */ (function () {
        function UndefinedValue() {
        }
        return UndefinedValue;
    }());
    /** @type {?} */
    var STYLES = function (theme) {
        return ({
            radioGroup: {
                display: 'inline-block'
            },
            radio: {
                display: 'inline-block',
                '&{checked}': {
                    '{container}': {
                        'div:nth-child(1)': {
                            transform: 'scale(1.25)',
                        },
                        'div:nth-child(2)': {
                            transform: 'scale(0.8)'
                        }
                    }
                },
                '&{onFocusByKeyboard} {container}::after': {
                    boxShadow: '0 0 0 12px',
                    background: 'currentColor',
                    opacity: .13,
                    borderRadius: '50%',
                }
            },
            label: {
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                position: 'relative',
                display: 'flex',
                alignItems: 'baseline'
            },
            labelContent: {
                padding: '0 0.5em'
            },
            container: {
                position: 'relative',
                margin: 'auto 2px',
                width: '16px',
                height: '16px',
                'div': {
                    margin: 'auto',
                    borderRadius: '50%',
                    width: '1em',
                    height: '1em'
                },
                '&::after': __assign({ content: "''" }, ui.LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto' }),
                'div:nth-child(2)': {
                    background: 'currentColor',
                    transform: 'scale(0)'
                },
                'div:nth-child(1)': {
                    transform: 'scale(1)',
                    border: 'solid .08em currentColor',
                    color: theme.radio.outerCircle
                }
            },
            checked: null,
            _animations: {
                '{container} div': {
                    transition: 'transform cubic-bezier(.1, 1, 0.5, 1)',
                    transitionDuration: '250ms'
                }
            },
            onFocusByKeyboard: null,
            disabled: {
                color: theme.disabled.contrast,
                '{container} div': {
                    color: theme.disabled.contrast + "!important"
                }
            }
        });
    };
    var LyRadioGroup = /** @class */ (function () {
        function LyRadioGroup(elementRef, renderer, _theme, _cd) {
            this._theme = _theme;
            this._cd = _cd;
            /**
             * \@docs-private
             */
            this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
            this._value = new UndefinedValue;
            /**
             * \@docs-private
             */
            this.name = "ly-radio-name-" + idx++;
            this.change = new core.EventEmitter();
            this.color = 'accent';
            /**
             * The method to be called in order to update ngModel
             */
            this._controlValueAccessorChangeFn = function () { };
            /**
             * onTouch function registered via registerOnTouch (ControlValueAccessor).
             * \@docs-private
             */
            this.onTouched = function () { };
            renderer.addClass(elementRef.nativeElement, this.classes.radioGroup);
        }
        Object.defineProperty(LyRadioGroup.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
        /**
         * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
         * radio buttons upon their blur.
         * @return {?}
         */
        LyRadioGroup.prototype._touch = /**
         * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
         * radio buttons upon their blur.
         * @return {?}
         */
            function () {
                if (this.onTouched) {
                    this.onTouched();
                }
            };
        /** @docs-private */
        /**
         * \@docs-private
         * @param {?} value
         * @return {?}
         */
        LyRadioGroup.prototype.writeValue = /**
         * \@docs-private
         * @param {?} value
         * @return {?}
         */
            function (value) {
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
        /**
         * Registers a callback to be triggered when the model value changes.
         * Implemented as part of ControlValueAccessor.
         * \@docs-private
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
        LyRadioGroup.prototype.registerOnChange = /**
         * Registers a callback to be triggered when the model value changes.
         * Implemented as part of ControlValueAccessor.
         * \@docs-private
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
            function (fn) {
                this._controlValueAccessorChangeFn = fn;
            };
        /**
         * Registers a callback to be triggered when the control is touched.
         * Implemented as part of ControlValueAccessor.
         * @param fn Callback to be registered.
         * @docs-private
         */
        /**
         * Registers a callback to be triggered when the control is touched.
         * Implemented as part of ControlValueAccessor.
         * \@docs-private
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
        LyRadioGroup.prototype.registerOnTouched = /**
         * Registers a callback to be triggered when the control is touched.
         * Implemented as part of ControlValueAccessor.
         * \@docs-private
         * @param {?} fn Callback to be registered.
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
         * @param isDisabled Whether the control should be disabled.
         * @docs-private
         */
        /**
         * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
         * \@docs-private
         * @param {?} isDisabled Whether the control should be disabled.
         * @return {?}
         */
        LyRadioGroup.prototype.setDisabledState = /**
         * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
         * \@docs-private
         * @param {?} isDisabled Whether the control should be disabled.
         * @return {?}
         */
            function (isDisabled) {
                // this.disabled = isDisabled;
                this._markForCheck();
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyRadioGroup.prototype._updateCheckFromValue = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                var _this = this;
                /** @type {?} */
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
                    if (this._value !== null) {
                        this._value = null;
                    }
                }
            };
        /** @docs-private */
        /**
         * \@docs-private
         * @param {?} value
         * @return {?}
         */
        LyRadioGroup.prototype.updatevalue = /**
         * \@docs-private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._value = value;
                this._controlValueAccessorChangeFn(value);
                this.change.emit();
                this._markForCheck();
            };
        /**
         * @return {?}
         */
        LyRadioGroup.prototype._markForCheck = /**
         * @return {?}
         */
            function () {
                this._cd.markForCheck();
            };
        /**
         * @return {?}
         */
        LyRadioGroup.prototype._radioResetChecked = /**
         * @return {?}
         */
            function () {
                this._radios.forEach(function (_) { return _._setCheckedToFalsy(); });
            };
        LyRadioGroup.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-radio-group',
                        template: "<ng-content></ng-content>",
                        providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        exportAs: 'lyRadioGroup'
                    }] }
        ];
        /** @nocollapse */
        LyRadioGroup.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.LyTheme2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        LyRadioGroup.propDecorators = {
            value: [{ type: core.Input }],
            change: [{ type: core.Output }],
            color: [{ type: core.Input }],
            _radios: [{ type: core.ContentChildren, args: [core.forwardRef(function () { return LyRadio; }),] }]
        };
        return LyRadioGroup;
    }());
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyRadioBase = /** @class */ (function () {
        function LyRadioBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyRadioBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
    var LyRadioMixinBase = ui.mixinDisableRipple(LyRadioBase);
    var LyRadio = /** @class */ (function (_super) {
        __extends(LyRadio, _super);
        function LyRadio(radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, _coreStyles, _focusState) {
            var _this = _super.call(this, theme, ngZone) || this;
            _this.radioGroup = radioGroup;
            _this._elementRef = _elementRef;
            _this._renderer = _renderer;
            _this.changeDetectorRef = changeDetectorRef;
            _this._coreStyles = _coreStyles;
            _this._focusState = _focusState;
            /**
             * \@docs-private
             */
            _this.classes = _this.radioGroup.classes;
            /**
             * \@docs-private
             */
            _this.id = "ly-radio-id-" + idx++;
            /**
             * \@docs-private
             */
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
        Object.defineProperty(LyRadio.prototype, "value", {
            get: /**
             * @return {?}
             */ function () { return this._value; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this._value !== val) {
                    this._value = val;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyRadio.prototype, "color", {
            get: /**
             * @return {?}
             */ function () { return this._color; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this._color !== val) {
                    this._color = val;
                    this._colorClass = this._theme.addStyle("lyRadio.color:" + val, function (theme) {
                        return ({
                            '&{checked} {container}, &{checked} {container} div:nth-child(1), & {container} div:nth-child(2)': {
                                color: theme.colorOf(val)
                            }
                        });
                    }, this._elementRef.nativeElement, this._colorClass, STYLE_PRIORITY, STYLES);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyRadio.prototype, "checked", {
            get: /**
             * @return {?}
             */ function () {
                return this._checked;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
                var newCheckedState = ui.toBoolean(val);
                /** @type {?} */
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
            get: /**
             * \@docs-private
             * @return {?}
             */ function () {
                return this.id + "-input";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyRadio.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () { return this._disabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                /** @type {?} */
                var newVal = ui.toBoolean(value);
                if (newVal) {
                    this._renderer.addClass(this._elementRef.nativeElement, this.classes.disabled);
                    this._disabledClass = this.classes.disabled;
                }
                else if (this._disabledClass) {
                    this._renderer.removeClass(this._elementRef.nativeElement, this.classes.disabled);
                    this._disabledClass = null;
                }
                this._disabled = ui.toBoolean(value);
                this._markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyRadio.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.radioGroup) {
                    // Copy name from parent radio group
                    this.name = this.radioGroup.name;
                }
                if (!this.color) {
                    this.color = this.radioGroup.color || DEFAULT_COLOR;
                }
            };
        /**
         * @return {?}
         */
        LyRadio.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._rippleContainer = this._radioContainer;
                // set default disable ripple
                if (this.disableRipple == null) {
                    this.disableRipple = DEFAULT_DISABLE_RIPPLE;
                }
                /** @type {?} */
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
        /**
         * @return {?}
         */
        LyRadio.prototype._markForCheck = /**
         * @return {?}
         */
            function () {
                this.changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        LyRadio.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._removeRippleEvents();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LyRadio.prototype._onInputChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                this.radioGroup._updateCheckFromValue(this.value);
                this.radioGroup._touch();
                this._addAnim();
            };
        /**
         * @return {?}
         */
        LyRadio.prototype._addAnim = /**
         * @return {?}
         */
            function () {
                if (!this._animClass) {
                    this._renderer.addClass(this._elementRef.nativeElement, this.classes._animations);
                    this._animClass = this.classes._animations;
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LyRadio.prototype._onInputClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { event.stopPropagation(); };
        /**
         * @return {?}
         */
        LyRadio.prototype._setCheckedToFalsy = /**
         * @return {?}
         */
            function () {
                this.checked = false;
            };
        LyRadio.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-radio',
                        template: "<label #_labelContainer [attr.for]=\"inputId\" [className]=\"classes.label\">\n  <input #_input\n    [className]=\"_coreStyles.classes.visuallyHidden\"\n    [id]=\"inputId\"\n    [checked]=\"checked\"\n    [name]=\"name\"\n    (change)=\"_onInputChange($event)\"\n    (click)=\"_onInputClick($event)\"\n    [disabled]=\"disabled\"\n    type=\"radio\"\n    >\n  <div #_radioContainer [className]=\"classes.container\">\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n  </div>\n  <div\n  [className]=\"classes.labelContent\">\n    <ng-content></ng-content>\n  </div>\n</label>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        inputs: [
                            'disableRipple'
                        ]
                    }] }
        ];
        /** @nocollapse */
        LyRadio.ctorParameters = function () {
            return [
                { type: LyRadioGroup, decorators: [{ type: core.Optional }] },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.LyTheme2 },
                { type: core.ChangeDetectorRef },
                { type: core.NgZone },
                { type: ui.LyCoreStyles },
                { type: ui.LyFocusState }
            ];
        };
        LyRadio.propDecorators = {
            _input: [{ type: core.ViewChild, args: ['_input',] }],
            _radioContainer: [{ type: core.ViewChild, args: ['_radioContainer',] }],
            _labelContainer: [{ type: core.ViewChild, args: ['_labelContainer',] }],
            change: [{ type: core.Output }],
            value: [{ type: core.Input }],
            color: [{ type: core.Input }],
            checked: [{ type: core.Input }],
            disabled: [{ type: core.Input }]
        };
        return LyRadio;
    }(LyRadioMixinBase));
    var LyRadioModule = /** @class */ (function () {
        function LyRadioModule() {
        }
        LyRadioModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, ui.LyCommonModule],
                        exports: [LyRadioGroup, LyRadio],
                        declarations: [LyRadioGroup, LyRadio],
                    },] }
        ];
        return LyRadioModule;
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

    exports.LY_RADIO_CONTROL_VALUE_ACCESSOR = LY_RADIO_CONTROL_VALUE_ACCESSOR;
    exports.UndefinedValue = UndefinedValue;
    exports.STYLES = STYLES;
    exports.LyRadioGroup = LyRadioGroup;
    exports.LyRadioBase = LyRadioBase;
    exports.LyRadioMixinBase = LyRadioMixinBase;
    exports.LyRadio = LyRadio;
    exports.LyRadioModule = LyRadioModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmFkaW8udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL3JhZGlvL3JhZGlvLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBmb3J3YXJkUmVmLFxuICBOZ01vZHVsZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT3B0aW9uYWwsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE5nWm9uZSxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWUyLCBMeUNvcmVTdHlsZXMsIHRvQm9vbGVhbiwgbWl4aW5EaXNhYmxlUmlwcGxlLCBUaGVtZVZhcmlhYmxlcywgTHlGb2N1c1N0YXRlLCBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAnYWNjZW50JztcblxuZXhwb3J0IGNvbnN0IExZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW9Hcm91cCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5sZXQgaWR4ID0gMDtcblxuZXhwb3J0IGNsYXNzIFVuZGVmaW5lZFZhbHVlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJhZGlvR3JvdXA6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICB9LFxuICByYWRpbzoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICcme2NoZWNrZWR9Jzoge1xuICAgICAgJ3tjb250YWluZXJ9Jzoge1xuICAgICAgICAnZGl2Om50aC1jaGlsZCgxKSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjI1KScsXG4gICAgICAgIH0sXG4gICAgICAgICdkaXY6bnRoLWNoaWxkKDIpJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICcme29uRm9jdXNCeUtleWJvYXJkfSB7Y29udGFpbmVyfTo6YWZ0ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwIDAgMCAxMnB4JyxcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgICAgb3BhY2l0eTogLjEzLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICB9XG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZSdcbiAgfSxcbiAgbGFiZWxDb250ZW50OiB7XG4gICAgcGFkZGluZzogJzAgMC41ZW0nXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpbjogJ2F1dG8gMnB4JyxcbiAgICB3aWR0aDogJzE2cHgnLFxuICAgIGhlaWdodDogJzE2cHgnLFxuICAgICdkaXYnOiB7XG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgICBoZWlnaHQ6ICcxZW0nXG4gICAgfSxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiBgJydgLFxuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgd2lkdGg6ICcxNnB4JyxcbiAgICAgIGhlaWdodDogJzE2cHgnLFxuICAgICAgbWFyZ2luOiAnYXV0bydcbiAgICB9LFxuICAgICdkaXY6bnRoLWNoaWxkKDIpJzoge1xuICAgICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbiAgICB9LFxuICAgICdkaXY6bnRoLWNoaWxkKDEpJzoge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgYm9yZGVyOiAnc29saWQgLjA4ZW0gY3VycmVudENvbG9yJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5yYWRpby5vdXRlckNpcmNsZVxuICAgIH1cbiAgfSxcbiAgY2hlY2tlZDogbnVsbCxcbiAgX2FuaW1hdGlvbnM6IHtcbiAgICAne2NvbnRhaW5lcn0gZGl2Jzoge1xuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjUwbXMnXG4gICAgfVxuICB9LFxuICBvbkZvY3VzQnlLZXlib2FyZDogbnVsbCxcbiAgZGlzYWJsZWQ6IHtcbiAgICBjb2xvcjogdGhlbWUuZGlzYWJsZWQuY29udHJhc3QsXG4gICAgJ3tjb250YWluZXJ9IGRpdic6IHtcbiAgICAgIGNvbG9yOiBgJHt0aGVtZS5kaXNhYmxlZC5jb250cmFzdH0haW1wb3J0YW50YFxuICAgIH1cbiAgfVxufSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXJhZGlvLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgcHJvdmlkZXJzOiBbTFlfUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZXhwb3J0QXM6ICdseVJhZGlvR3JvdXAnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9Hcm91cCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3ZhbHVlID0gbmV3IFVuZGVmaW5lZFZhbHVlO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBuYW1lID0gYGx5LXJhZGlvLW5hbWUtJHtpZHgrK31gO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWw6IGFueSkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICBpZiAodGhpcy5fcmFkaW9zKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KCkgY29sb3IgPSAnYWNjZW50JztcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW8pKSBfcmFkaW9zOiBRdWVyeUxpc3Q8THlSYWRpbz47XG5cbiAgLyoqIFRoZSBtZXRob2QgdG8gYmUgY2FsbGVkIGluIG9yZGVyIHRvIHVwZGF0ZSBuZ01vZGVsICovXG4gIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBvblRvdWNoIGZ1bmN0aW9uIHJlZ2lzdGVyZWQgdmlhIHJlZ2lzdGVyT25Ub3VjaCAoQ29udHJvbFZhbHVlQWNjZXNzb3IpLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBNYXJrIHRoaXMgZ3JvdXAgYXMgYmVpbmcgXCJ0b3VjaGVkXCIgKGZvciBuZ01vZGVsKS4gTWVhbnQgdG8gYmUgY2FsbGVkIGJ5IHRoZSBjb250YWluZWRcbiAgICogcmFkaW8gYnV0dG9ucyB1cG9uIHRoZWlyIGJsdXIuXG4gICAqL1xuICBfdG91Y2goKSB7XG4gICAgaWYgKHRoaXMub25Ub3VjaGVkKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICghIXRoaXMuX3JhZGlvcykge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBtb2RlbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRpc2FibGVkIHN0YXRlIG9mIHRoZSBjb250cm9sLiBJbXBsZW1lbnRlZCBhcyBhIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFdoZXRoZXIgdGhlIGNvbnRyb2wgc2hvdWxkIGJlIGRpc2FibGVkLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJhZGlvR3JvdXApO1xuICB9XG5cbiAgX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHZhbDogYW55KSB7XG4gICAgbGV0IG5ld0NoZWNrZWQ6IGJvb2xlYW47XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2gocmFkaW9CdXR0b24gPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gcmFkaW9CdXR0b24udmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGV2YWx1ZSh2YWwpO1xuICAgICAgICBuZXdDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghbmV3Q2hlY2tlZCkge1xuICAgICAgLyoqIHdoZW4gdmFsIG5vdCBleGlzdCBpbiByYWRpbyBidXR0b24gIT09ICAqL1xuICAgICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbihudWxsKTtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHVwZGF0ZXZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoKTtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcmFkaW9SZXNldENoZWNrZWQoKSB7XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2goXyA9PiBfLl9zZXRDaGVja2VkVG9GYWxzeSgpKTtcbiAgfVxuXG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlSYWRpb0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlSYWRpb01peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShMeVJhZGlvQmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBpbnB1dHM6IFtcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvIGV4dGVuZHMgTHlSYWRpb01peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMucmFkaW9Hcm91cC5jbGFzc2VzO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBpZCA9IGBseS1yYWRpby1pZC0ke2lkeCsrfWA7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIG5hbWUgPSAnJztcbiAgcHJpdmF0ZSBfdmFsdWUgPSBudWxsO1xuICBwcml2YXRlIF9jaGVja2VkID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfYW5pbUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ19pbnB1dCcpIF9pbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX3JhZGlvQ29udGFpbmVyJykgcHJpdmF0ZSBfcmFkaW9Db250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcicpIF9sYWJlbENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWwpIHtcbiAgICBpZiAodGhpcy5fY29sb3IgIT09IHZhbCkge1xuICAgICAgdGhpcy5fY29sb3IgPSB2YWw7XG4gICAgICB0aGlzLl9jb2xvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseVJhZGlvLmNvbG9yOiR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgJyZ7Y2hlY2tlZH0ge2NvbnRhaW5lcn0sICZ7Y2hlY2tlZH0ge2NvbnRhaW5lcn0gZGl2Om50aC1jaGlsZCgxKSwgJiB7Y29udGFpbmVyfSBkaXY6bnRoLWNoaWxkKDIpJzoge1xuICAgICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fY29sb3JDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFksXG4gICAgICAgIFNUWUxFU1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCkgeyByZXR1cm4gdGhpcy5fY29sb3I7IH1cblxuICBASW5wdXQoKVxuICBzZXQgY2hlY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdDaGVja2VkU3RhdGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLl9jaGVja2VkO1xuICAgIGlmIChiZWZvcmUgIT09IG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld0NoZWNrZWRTdGF0ZTtcbiAgICAgIGlmICghYmVmb3JlICYmIG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgICAvKiogQWRkIGNsYXNzIGNoZWNrZWQgKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMucmFkaW9Hcm91cC52YWx1ZSkge1xuICAgICAgICAgIC8qKiB1cGRhdGUgVmFsdWUgKi9cbiAgICAgICAgICB0aGlzLnJhZGlvR3JvdXAudXBkYXRldmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBSZW1vdmUgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5pZH0taW5wdXRgO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB0aGlzLl9kaXNhYmxlZENsYXNzID0gdGhpcy5jbGFzc2VzLmRpc2FibGVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZGlzYWJsZWRDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzcyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBAZG9jcy1wcml2YXRlICovXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHJhZGlvR3JvdXA6IEx5UmFkaW9Hcm91cCxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfY29yZVN0eWxlczogTHlDb3JlU3R5bGVzLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZVxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWY7XG4gICAgdGhpcy5fcmlwcGxlQ29uZmlnID0ge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICByYWRpdXM6ICdjb250YWluZXJTaXplJyxcbiAgICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiAxNTBcbiAgICB9O1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCByYWRpb0dyb3VwLmNsYXNzZXMucmFkaW8pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xuICAgICAgLy8gQ29weSBuYW1lIGZyb20gcGFyZW50IHJhZGlvIGdyb3VwXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnJhZGlvR3JvdXAubmFtZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5yYWRpb0dyb3VwLmNvbG9yIHx8IERFRkFVTFRfQ09MT1I7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JhZGlvQ29udGFpbmVyO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICAgIGNvbnN0IGZvY3VzU3RhdGUgPSB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9pbnB1dCwgdGhpcy5fZWxlbWVudFJlZik7XG4gICAgaWYgKGZvY3VzU3RhdGUpIHtcbiAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cblxuICBfb25JbnB1dENoYW5nZShldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJhZGlvR3JvdXAuX3RvdWNoKCk7XG4gICAgdGhpcy5fYWRkQW5pbSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkQW5pbSgpIHtcbiAgICBpZiAoIXRoaXMuX2FuaW1DbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuX2FuaW1hdGlvbnMpO1xuICAgICAgdGhpcy5fYW5pbUNsYXNzID0gdGhpcy5jbGFzc2VzLl9hbmltYXRpb25zO1xuICAgIH1cbiAgfVxuXG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9XG5cbiAgX3NldENoZWNrZWRUb0ZhbHN5KCkge1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICB9XG5cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5UmFkaW9Hcm91cCwgTHlSYWRpb10sXG4gIGRlY2xhcmF0aW9uczogW0x5UmFkaW9Hcm91cCwgTHlSYWRpb10sXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiTFlfQ09NTU9OX1NUWUxFUyIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIkx5VGhlbWUyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJJbnB1dCIsIk91dHB1dCIsIkNvbnRlbnRDaGlsZHJlbiIsIm1peGluRGlzYWJsZVJpcHBsZSIsInRzbGliXzEuX19leHRlbmRzIiwidG9Cb29sZWFuIiwiT3B0aW9uYWwiLCJOZ1pvbmUiLCJMeUNvcmVTdHlsZXMiLCJMeUZvY3VzU3RhdGUiLCJWaWV3Q2hpbGQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9FLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7QUFFRixhQUFnQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUIsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixTQUFTLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENB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