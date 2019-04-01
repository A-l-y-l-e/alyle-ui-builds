/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, NgModule, Input, Output, ChangeDetectorRef, ContentChildren, QueryList, Optional, EventEmitter, ChangeDetectionStrategy, NgZone, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyTheme2, LyCoreStyles, toBoolean, mixinDisableRipple, LyFocusState, LY_COMMON_STYLES } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
var DEFAULT_COLOR = 'accent';
/** @type {?} */
export var LY_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LyRadioGroup; }),
    multi: true
};
/** @type {?} */
var idx = 0;
var UndefinedValue = /** @class */ (function () {
    function UndefinedValue() {
    }
    return UndefinedValue;
}());
export { UndefinedValue };
/** @type {?} */
export var STYLES = function (theme) { return ({
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
            height: '1em'
        },
        '&::after': tslib_1.__assign({ content: "''" }, LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto' }),
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
}); };
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
        this.change = new EventEmitter();
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
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        if (!(/** @type {?} */ (newChecked))) {
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
        { type: Component, args: [{
                    selector: 'ly-radio-group',
                    template: "<ng-content></ng-content>",
                    providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    exportAs: 'lyRadioGroup'
                }] }
    ];
    /** @nocollapse */
    LyRadioGroup.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: ChangeDetectorRef }
    ]; };
    LyRadioGroup.propDecorators = {
        value: [{ type: Input }],
        change: [{ type: Output }],
        color: [{ type: Input }],
        _radios: [{ type: ContentChildren, args: [forwardRef(function () { return LyRadio; }),] }]
    };
    return LyRadioGroup;
}());
export { LyRadioGroup };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyRadioGroup.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyRadioGroup.prototype._value;
    /**
     * \@docs-private
     * @type {?}
     */
    LyRadioGroup.prototype.name;
    /** @type {?} */
    LyRadioGroup.prototype.change;
    /** @type {?} */
    LyRadioGroup.prototype.color;
    /** @type {?} */
    LyRadioGroup.prototype._radios;
    /**
     * The method to be called in order to update ngModel
     * @type {?}
     */
    LyRadioGroup.prototype._controlValueAccessorChangeFn;
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * \@docs-private
     * @type {?}
     */
    LyRadioGroup.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    LyRadioGroup.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LyRadioGroup.prototype._cd;
}
/**
 * \@docs-private
 */
var /**
 * \@docs-private
 */
LyRadioBase = /** @class */ (function () {
    function LyRadioBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyRadioBase;
}());
/**
 * \@docs-private
 */
export { LyRadioBase };
if (false) {
    /** @type {?} */
    LyRadioBase.prototype._theme;
    /** @type {?} */
    LyRadioBase.prototype._ngZone;
}
/**
 * \@docs-private
 * @type {?}
 */
export var LyRadioMixinBase = mixinDisableRipple(LyRadioBase);
var LyRadio = /** @class */ (function (_super) {
    tslib_1.__extends(LyRadio, _super);
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
        _this.change = new EventEmitter();
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
         */
        function () { return this._value; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
         */
        function () { return this._color; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this._color !== val) {
                this._color = val;
                this._colorClass = this._theme.addStyle("lyRadio.color:" + val, function (theme) { return ({
                    '&{checked} {container}, &{checked} {container} div:nth-child(1), & {container} div:nth-child(2)': {
                        color: theme.colorOf(val)
                    }
                }); }, this._elementRef.nativeElement, this._colorClass, STYLE_PRIORITY, STYLES);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newCheckedState = toBoolean(val);
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
         */
        function () {
            return this.id + "-input";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newVal = toBoolean(value);
            if (newVal) {
                this._renderer.addClass(this._elementRef.nativeElement, this.classes.disabled);
                this._disabledClass = this.classes.disabled;
            }
            else if (this._disabledClass) {
                this._renderer.removeClass(this._elementRef.nativeElement, this.classes.disabled);
                this._disabledClass = undefined;
            }
            this._disabled = toBoolean(value);
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
        { type: Component, args: [{
                    selector: 'ly-radio',
                    template: "<label #_labelContainer [attr.for]=\"inputId\" [className]=\"classes.label\">\n  <input #_input\n    [className]=\"_coreStyles.classes.visuallyHidden\"\n    [id]=\"inputId\"\n    [checked]=\"checked\"\n    [name]=\"name\"\n    (change)=\"_onInputChange($event)\"\n    (click)=\"_onInputClick($event)\"\n    [disabled]=\"disabled\"\n    type=\"radio\"\n    >\n  <div #_radioContainer [className]=\"classes.container\">\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n  </div>\n  <div\n  [className]=\"classes.labelContent\">\n    <ng-content></ng-content>\n  </div>\n</label>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    inputs: [
                        'disableRipple'
                    ]
                }] }
    ];
    /** @nocollapse */
    LyRadio.ctorParameters = function () { return [
        { type: LyRadioGroup, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: LyCoreStyles },
        { type: LyFocusState }
    ]; };
    LyRadio.propDecorators = {
        _input: [{ type: ViewChild, args: ['_input',] }],
        _radioContainer: [{ type: ViewChild, args: ['_radioContainer',] }],
        _labelContainer: [{ type: ViewChild, args: ['_labelContainer',] }],
        change: [{ type: Output }],
        value: [{ type: Input }],
        color: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return LyRadio;
}(LyRadioMixinBase));
export { LyRadio };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyRadio.prototype.classes;
    /**
     * \@docs-private
     * @type {?}
     */
    LyRadio.prototype.id;
    /**
     * \@docs-private
     * @type {?}
     */
    LyRadio.prototype.name;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype._value;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype._checked;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype._color;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype._colorClass;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype._animClass;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype._disabledClass;
    /** @type {?} */
    LyRadio.prototype._input;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype._radioContainer;
    /** @type {?} */
    LyRadio.prototype._labelContainer;
    /** @type {?} */
    LyRadio.prototype.change;
    /**
     * \@docs-private
     * @type {?}
     */
    LyRadio.prototype.radioGroup;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype.changeDetectorRef;
    /** @type {?} */
    LyRadio.prototype._coreStyles;
    /**
     * @type {?}
     * @private
     */
    LyRadio.prototype._focusState;
}
var LyRadioModule = /** @class */ (function () {
    function LyRadioModule() {
    }
    LyRadioModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, LyCommonModule],
                    exports: [LyRadioGroup, LyRadio],
                    declarations: [LyRadioGroup, LyRadio],
                },] }
    ];
    return LyRadioModule;
}());
export { LyRadioModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmFkaW8vIiwic291cmNlcyI6WyJyYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUdqQixlQUFlLEVBQ2YsU0FBUyxFQUNULFFBQVEsRUFDUixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLFdBQVcsR0FDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFrQixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7O0lBRTVJLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLHNCQUFzQixHQUFHLEtBQUs7O0lBQzlCLGFBQWEsR0FBRyxRQUFROztBQUU5QixNQUFNLEtBQU8sK0JBQStCLEdBQVE7SUFDbEQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxZQUFZLEVBQVosQ0FBWSxDQUFDO0lBQzNDLEtBQUssRUFBRSxJQUFJO0NBQ1o7O0lBRUcsR0FBRyxHQUFHLENBQUM7QUFFWDtJQUNFO0lBQWdCLENBQUM7SUFDbkIscUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7O0FBRUQsTUFBTSxLQUFPLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ2hELFNBQVMsRUFBRSxjQUFjO0lBQ3pCLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxjQUFj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QUUsT0FBTyxDQUFDO2lCQUN0Qzs7SUFDNEIsb0JBQUM7Q0FBQSxBQUw5QixJQUs4QjtTQUFqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBmb3J3YXJkUmVmLFxuICBOZ01vZHVsZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT3B0aW9uYWwsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE5nWm9uZSxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWUyLCBMeUNvcmVTdHlsZXMsIHRvQm9vbGVhbiwgbWl4aW5EaXNhYmxlUmlwcGxlLCBUaGVtZVZhcmlhYmxlcywgTHlGb2N1c1N0YXRlLCBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAnYWNjZW50JztcblxuZXhwb3J0IGNvbnN0IExZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW9Hcm91cCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5sZXQgaWR4ID0gMDtcblxuZXhwb3J0IGNsYXNzIFVuZGVmaW5lZFZhbHVlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAnJic6IHRoZW1lLnJhZGlvID8gdGhlbWUucmFkaW8ucm9vdCA6IG51bGxcbiAgfSxcbiAgcmFkaW86IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW5BZnRlcjogJzE2cHgnLFxuICAgIG1hcmdpbkJlZm9yZTogJy0xNnB4JyxcbiAgICAnJntjaGVja2VkfSc6IHtcbiAgICAgICd7Y29udGFpbmVyfSc6IHtcbiAgICAgICAgJ2RpdjpudGgtY2hpbGQoMSknOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yNSknLFxuICAgICAgICB9LFxuICAgICAgICAnZGl2Om50aC1jaGlsZCgyKSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAnJntvbkZvY3VzQnlLZXlib2FyZH0ge2NvbnRhaW5lcn06OmFmdGVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMCAwIDAgMTJweCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICAgIG9wYWNpdHk6IC4xMyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgfVxuICB9LFxuICBsYWJlbDoge1xuICAgIG1hcmdpbkJlZm9yZTogJzE2cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxuICAgIHBhZGRpbmdUb3A6ICcxMnB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTJweCdcbiAgfSxcbiAgbGFiZWxDb250ZW50OiBudWxsLFxuICBjb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW5CZWZvcmU6ICcuMTI1ZW0nLFxuICAgIG1hcmdpbkFmdGVyOiAnLjVlbScsXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXG4gICAgd2lkdGg6ICcxNnB4JyxcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICAnZGl2Jzoge1xuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJ1xuICAgIH0sXG4gICAgJyY6OmFmdGVyJzoge1xuICAgICAgY29udGVudDogYCcnYCxcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHdpZHRoOiAnMTZweCcsXG4gICAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nXG4gICAgfSxcbiAgICAnZGl2Om50aC1jaGlsZCgyKSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknXG4gICAgfSxcbiAgICAnZGl2Om50aC1jaGlsZCgxKSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgIGJvcmRlcjogJ3NvbGlkIC4wOGVtIGN1cnJlbnRDb2xvcicsXG4gICAgICBjb2xvcjogdGhlbWUudGV4dC5kaXNhYmxlZFxuICAgIH1cbiAgfSxcbiAgY2hlY2tlZDogbnVsbCxcbiAgX2FuaW1hdGlvbnM6IHtcbiAgICAne2NvbnRhaW5lcn0gZGl2Jzoge1xuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjUwbXMnXG4gICAgfVxuICB9LFxuICBvbkZvY3VzQnlLZXlib2FyZDogbnVsbCxcbiAgZGlzYWJsZWQ6IHtcbiAgICBjb2xvcjogdGhlbWUuZGlzYWJsZWQuY29udHJhc3QsXG4gICAgJ3tjb250YWluZXJ9IGRpdic6IHtcbiAgICAgIGNvbG9yOiBgJHt0aGVtZS5kaXNhYmxlZC5jb250cmFzdH0haW1wb3J0YW50YFxuICAgIH1cbiAgfVxufSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXJhZGlvLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgcHJvdmlkZXJzOiBbTFlfUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZXhwb3J0QXM6ICdseVJhZGlvR3JvdXAnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9Hcm91cCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgbmFtZSA9IGBseS1yYWRpby1uYW1lLSR7aWR4Kyt9YDtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgaWYgKHRoaXMuX3JhZGlvcykge1xuICAgICAgICB0aGlzLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBJbnB1dCgpIGNvbG9yID0gJ2FjY2VudCc7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVJhZGlvKSkgX3JhZGlvczogUXVlcnlMaXN0PEx5UmFkaW8+O1xuXG4gIC8qKiBUaGUgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbiBvcmRlciB0byB1cGRhdGUgbmdNb2RlbCAqL1xuICBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogb25Ub3VjaCBmdW5jdGlvbiByZWdpc3RlcmVkIHZpYSByZWdpc3Rlck9uVG91Y2ggKENvbnRyb2xWYWx1ZUFjY2Vzc29yKS5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogTWFyayB0aGlzIGdyb3VwIGFzIGJlaW5nIFwidG91Y2hlZFwiIChmb3IgbmdNb2RlbCkuIE1lYW50IHRvIGJlIGNhbGxlZCBieSB0aGUgY29udGFpbmVkXG4gICAqIHJhZGlvIGJ1dHRvbnMgdXBvbiB0aGVpciBibHVyLlxuICAgKi9cbiAgX3RvdWNoKCkge1xuICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoISF0aGlzLl9yYWRpb3MpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbW9kZWwgdmFsdWUgY2hhbmdlcy5cbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbC4gSW1wbGVtZW50ZWQgYXMgYSBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gX2lzRGlzYWJsZWQgV2hldGhlciB0aGUgY29udHJvbCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoX2lzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHZhbDogYW55KSB7XG4gICAgbGV0IG5ld0NoZWNrZWQ6IGJvb2xlYW47XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2gocmFkaW9CdXR0b24gPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gcmFkaW9CdXR0b24udmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGV2YWx1ZSh2YWwpO1xuICAgICAgICBuZXdDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghbmV3Q2hlY2tlZCEpIHtcbiAgICAgIC8qKiB3aGVuIHZhbCBub3QgZXhpc3QgaW4gcmFkaW8gYnV0dG9uICE9PSAgKi9cbiAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4obnVsbCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHVwZGF0ZXZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoKTtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcmFkaW9SZXNldENoZWNrZWQoKSB7XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2goXyA9PiBfLl9zZXRDaGVja2VkVG9GYWxzeSgpKTtcbiAgfVxuXG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlSYWRpb0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlSYWRpb01peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShMeVJhZGlvQmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBpbnB1dHM6IFtcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvIGV4dGVuZHMgTHlSYWRpb01peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMucmFkaW9Hcm91cC5jbGFzc2VzO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBpZCA9IGBseS1yYWRpby1pZC0ke2lkeCsrfWA7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIG5hbWUgPSAnJztcbiAgcHJpdmF0ZSBfdmFsdWUgPSBudWxsO1xuICBwcml2YXRlIF9jaGVja2VkID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfYW5pbUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzPzogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdfaW5wdXQnKSBfaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19yYWRpb0NvbnRhaW5lcicpIHByaXZhdGUgX3JhZGlvQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXInKSBfbGFiZWxDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgY29sb3IodmFsKSB7XG4gICAgaWYgKHRoaXMuX2NvbG9yICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlSYWRpby5jb2xvcjoke3ZhbH1gLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgICcme2NoZWNrZWR9IHtjb250YWluZXJ9LCAme2NoZWNrZWR9IHtjb250YWluZXJ9IGRpdjpudGgtY2hpbGQoMSksICYge2NvbnRhaW5lcn0gZGl2Om50aC1jaGlsZCgyKSc6IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbClcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuX2NvbG9yQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZLFxuICAgICAgICBTVFlMRVNcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCBjb2xvcigpIHsgcmV0dXJuIHRoaXMuX2NvbG9yOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3Q2hlY2tlZFN0YXRlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgY29uc3QgYmVmb3JlID0gdGhpcy5fY2hlY2tlZDtcbiAgICBpZiAoYmVmb3JlICE9PSBuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdDaGVja2VkU3RhdGU7XG4gICAgICBpZiAoIWJlZm9yZSAmJiBuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgICAgLyoqIEFkZCBjbGFzcyBjaGVja2VkICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLnJhZGlvR3JvdXAudmFsdWUpIHtcbiAgICAgICAgICAvKiogdXBkYXRlIFZhbHVlICovXG4gICAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnVwZGF0ZXZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogUmVtb3ZlIGNsYXNzIGNoZWNrZWQgKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGdldCBpbnB1dElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWR9LWlucHV0YDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzcyA9IHRoaXMuY2xhc3Nlcy5kaXNhYmxlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2Rpc2FibGVkQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBAZG9jcy1wcml2YXRlICovXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHJhZGlvR3JvdXA6IEx5UmFkaW9Hcm91cCxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfY29yZVN0eWxlczogTHlDb3JlU3R5bGVzLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZVxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWY7XG4gICAgdGhpcy5fcmlwcGxlQ29uZmlnID0ge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICByYWRpdXM6ICdjb250YWluZXJTaXplJyxcbiAgICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiAxNTBcbiAgICB9O1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCByYWRpb0dyb3VwLmNsYXNzZXMucmFkaW8pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xuICAgICAgLy8gQ29weSBuYW1lIGZyb20gcGFyZW50IHJhZGlvIGdyb3VwXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnJhZGlvR3JvdXAubmFtZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5yYWRpb0dyb3VwLmNvbG9yIHx8IERFRkFVTFRfQ09MT1I7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JhZGlvQ29udGFpbmVyO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICAgIGNvbnN0IGZvY3VzU3RhdGUgPSB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9pbnB1dCwgdGhpcy5fZWxlbWVudFJlZik7XG4gICAgaWYgKGZvY3VzU3RhdGUpIHtcbiAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbGVtZW50UmVmKTtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxuXG4gIF9vbklucHV0Q2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnJhZGlvR3JvdXAuX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMucmFkaW9Hcm91cC5fdG91Y2goKTtcbiAgICB0aGlzLl9hZGRBbmltKCk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRBbmltKCkge1xuICAgIGlmICghdGhpcy5fYW5pbUNsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5fYW5pbWF0aW9ucyk7XG4gICAgICB0aGlzLl9hbmltQ2xhc3MgPSB0aGlzLmNsYXNzZXMuX2FuaW1hdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHsgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cblxuICBfc2V0Q2hlY2tlZFRvRmFsc3koKSB7XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlSYWRpb0dyb3VwLCBMeVJhZGlvXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlSYWRpb0dyb3VwLCBMeVJhZGlvXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlSYWRpb01vZHVsZSB7IH1cbiJdfQ==