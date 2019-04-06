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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            $priority: STYLE_PRIORITY,
            root: {
                display: 'inline-block',
                '&': theme.radio ? theme.radio.root : null
            },
            radio: {
                display: 'inline-block',
                marginAfter: '16px',
                marginBefore: '-16px',
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
                marginBefore: '16px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                position: 'relative',
                display: 'flex',
                alignItems: 'baseline',
                paddingTop: '12px',
                paddingBottom: '12px'
            },
            labelContent: null,
            container: {
                position: 'relative',
                marginBefore: '.125em',
                marginAfter: '.5em',
                marginTop: 'auto',
                marginBottom: 'auto',
                width: '16px',
                height: '16px',
                'div': {
                    margin: 'auto',
                    borderRadius: '50%',
                    width: '1em',
                    height: '1em',
                    boxSizing: 'border-box'
                },
                '&::after': __assign({ content: "''" }, ui.LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto' }),
                'div:nth-child(2)': {
                    background: 'currentColor',
                    transform: 'scale(0)'
                },
                'div:nth-child(1)': {
                    transform: 'scale(1)',
                    border: 'solid .08em currentColor',
                    color: theme.text.disabled
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
            this.classes = this._theme.addStyleSheet(STYLES);
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
            renderer.addClass(elementRef.nativeElement, this.classes.root);
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
         * @param _isDisabled Whether the control should be disabled.
         * @docs-private
         */
        /**
         * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
         * \@docs-private
         * @param {?} _isDisabled Whether the control should be disabled.
         * @return {?}
         */
        LyRadioGroup.prototype.setDisabledState = /**
         * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
         * \@docs-private
         * @param {?} _isDisabled Whether the control should be disabled.
         * @return {?}
         */
            function (_isDisabled) {
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
                if (!( /** @type {?} */(newChecked))) {
                    /** when val not exist in radio button !==  */
                    this._controlValueAccessorChangeFn(null);
                    if (this._value != null) {
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
                    this._disabledClass = undefined;
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
                this._focusState.unlisten(this._elementRef);
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
         * @private
         * @return {?}
         */
        LyRadio.prototype._addAnim = /**
         * @private
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

//# sourceMappingURL=alyle-ui-radio.umd.js.map