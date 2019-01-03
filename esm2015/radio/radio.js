/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, forwardRef, NgModule, Input, Output, ChangeDetectorRef, ContentChildren, QueryList, Optional, EventEmitter, ChangeDetectionStrategy, NgZone, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyTheme2, LyCoreStyles, toBoolean, mixinDisableRipple, LyFocusState, LY_COMMON_STYLES } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
const DEFAULT_COLOR = 'accent';
/** @type {?} */
export const LY_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LyRadioGroup),
    multi: true
};
/** @type {?} */
let idx = 0;
export class UndefinedValue {
    constructor() { }
}
/** @type {?} */
export const STYLES = (theme) => ({
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
        '&::after': Object.assign({ content: `''` }, LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto' }),
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
            color: `${theme.disabled.contrast}!important`
        }
    }
});
export class LyRadioGroup {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} _theme
     * @param {?} _cd
     */
    constructor(elementRef, renderer, _theme, _cd) {
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
        this.name = `ly-radio-name-${idx++}`;
        this.change = new EventEmitter();
        this.color = 'accent';
        /**
         * The method to be called in order to update ngModel
         */
        this._controlValueAccessorChangeFn = () => { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * \@docs-private
         */
        this.onTouched = () => { };
        renderer.addClass(elementRef.nativeElement, this.classes.radioGroup);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        if (this._value !== val) {
            if (this._radios) {
                this._updateCheckFromValue(val);
            }
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     * @return {?}
     */
    _touch() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    /**
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!!this._radios) {
            this.value = value;
            this._markForCheck();
        }
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * \@docs-private
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * \@docs-private
     * @param {?} _isDisabled Whether the control should be disabled.
     * @return {?}
     */
    setDisabledState(_isDisabled) {
        // this.disabled = isDisabled;
        this._markForCheck();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _updateCheckFromValue(val) {
        /** @type {?} */
        let newChecked;
        this._radios.forEach(radioButton => {
            if (val === radioButton.value) {
                this.updatevalue(val);
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
    }
    /**
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    updatevalue(value) {
        this._value = value;
        this._controlValueAccessorChangeFn(value);
        this.change.emit();
        this._markForCheck();
    }
    /**
     * @return {?}
     */
    _markForCheck() {
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    _radioResetChecked() {
        this._radios.forEach(_ => _._setCheckedToFalsy());
    }
}
LyRadioGroup.decorators = [
    { type: Component, args: [{
                selector: 'ly-radio-group',
                template: `<ng-content></ng-content>`,
                providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                exportAs: 'lyRadioGroup'
            }] }
];
/** @nocollapse */
LyRadioGroup.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: ChangeDetectorRef }
];
LyRadioGroup.propDecorators = {
    value: [{ type: Input }],
    change: [{ type: Output }],
    color: [{ type: Input }],
    _radios: [{ type: ContentChildren, args: [forwardRef(() => LyRadio),] }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyRadioGroup.prototype.classes;
    /** @type {?} */
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
    /** @type {?} */
    LyRadioGroup.prototype._theme;
    /** @type {?} */
    LyRadioGroup.prototype._cd;
}
/**
 * \@docs-private
 */
export class LyRadioBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
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
export const LyRadioMixinBase = mixinDisableRipple(LyRadioBase);
export class LyRadio extends LyRadioMixinBase {
    /**
     * @param {?} radioGroup
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} theme
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     * @param {?} _coreStyles
     * @param {?} _focusState
     */
    constructor(radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, _coreStyles, _focusState) {
        super(theme, ngZone);
        this.radioGroup = radioGroup;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.changeDetectorRef = changeDetectorRef;
        this._coreStyles = _coreStyles;
        this._focusState = _focusState;
        /**
         * \@docs-private
         */
        this.classes = this.radioGroup.classes;
        /**
         * \@docs-private
         */
        this.id = `ly-radio-id-${idx++}`;
        /**
         * \@docs-private
         */
        this.name = '';
        this._value = null;
        this._checked = false;
        this.change = new EventEmitter();
        this._triggerElement = this._elementRef;
        this._rippleConfig = {
            centered: true,
            radius: 'containerSize',
            percentageToIncrease: 150
        };
        _renderer.addClass(_elementRef.nativeElement, radioGroup.classes.radio);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        if (this._value !== val) {
            this._value = val;
        }
    }
    /**
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} val
     * @return {?}
     */
    set color(val) {
        if (this._color !== val) {
            this._color = val;
            this._colorClass = this._theme.addStyle(`lyRadio.color:${val}`, (theme) => ({
                '&{checked} {container}, &{checked} {container} div:nth-child(1), & {container} div:nth-child(2)': {
                    color: theme.colorOf(val)
                }
            }), this._elementRef.nativeElement, this._colorClass, STYLE_PRIORITY, STYLES);
        }
    }
    /**
     * @return {?}
     */
    get color() { return this._color; }
    /**
     * @param {?} val
     * @return {?}
     */
    set checked(val) {
        /** @type {?} */
        const newCheckedState = toBoolean(val);
        /** @type {?} */
        const before = this._checked;
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
    }
    /**
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get inputId() {
        return `${this.id}-input`;
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newVal = toBoolean(value);
        if (newVal) {
            this._renderer.addClass(this._elementRef.nativeElement, this.classes.disabled);
            this._disabledClass = this.classes.disabled;
        }
        else if (this._disabledClass) {
            this._renderer.removeClass(this._elementRef.nativeElement, this.classes.disabled);
            this._disabledClass = null;
        }
        this._disabled = toBoolean(value);
        this._markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.radioGroup) {
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
        if (!this.color) {
            this.color = this.radioGroup.color || DEFAULT_COLOR;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._rippleContainer = this._radioContainer;
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        /** @type {?} */
        const focusState = this._focusState.listen(this._input, this._elementRef);
        if (focusState) {
            focusState.subscribe((event) => {
                if (event === 'keyboard') {
                    this._renderer.addClass(this._elementRef.nativeElement, this.classes.onFocusByKeyboard);
                }
                else if (event == null) {
                    this._renderer.removeClass(this._elementRef.nativeElement, this.classes.onFocusByKeyboard);
                }
            });
        }
    }
    /**
     * @return {?}
     */
    _markForCheck() {
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeRippleEvents();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onInputChange(event) {
        event.stopPropagation();
        this.radioGroup._updateCheckFromValue(this.value);
        this.radioGroup._touch();
        this._addAnim();
    }
    /**
     * @return {?}
     */
    _addAnim() {
        if (!this._animClass) {
            this._renderer.addClass(this._elementRef.nativeElement, this.classes._animations);
            this._animClass = this.classes._animations;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onInputClick(event) { event.stopPropagation(); }
    /**
     * @return {?}
     */
    _setCheckedToFalsy() {
        this.checked = false;
    }
}
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
LyRadio.ctorParameters = () => [
    { type: LyRadioGroup, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: LyCoreStyles },
    { type: LyFocusState }
];
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
    /** @type {?} */
    LyRadio.prototype._value;
    /** @type {?} */
    LyRadio.prototype._checked;
    /** @type {?} */
    LyRadio.prototype._color;
    /** @type {?} */
    LyRadio.prototype._colorClass;
    /** @type {?} */
    LyRadio.prototype._animClass;
    /** @type {?} */
    LyRadio.prototype._disabled;
    /** @type {?} */
    LyRadio.prototype._disabledClass;
    /** @type {?} */
    LyRadio.prototype._input;
    /** @type {?} */
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
    /** @type {?} */
    LyRadio.prototype._elementRef;
    /** @type {?} */
    LyRadio.prototype._renderer;
    /** @type {?} */
    LyRadio.prototype.changeDetectorRef;
    /** @type {?} */
    LyRadio.prototype._coreStyles;
    /** @type {?} */
    LyRadio.prototype._focusState;
}
export class LyRadioModule {
}
LyRadioModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, LyCommonModule],
                exports: [LyRadioGroup, LyRadio],
                declarations: [LyRadioGroup, LyRadio],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmFkaW8vIiwic291cmNlcyI6WyJyYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBR2pCLGVBQWUsRUFDZixTQUFTLEVBQ1QsUUFBUSxFQUNSLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsV0FBVyxHQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQWtCLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7TUFFNUksY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsc0JBQXNCLEdBQUcsS0FBSzs7TUFDOUIsYUFBYSxHQUFHLFFBQVE7O0FBRTlCLE1BQU0sT0FBTywrQkFBK0IsR0FBUTtJQUNsRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQzNDLEtBQUssRUFBRSxJQUFJO0NBQ1o7O0lBRUcsR0FBRyxHQUFHLENBQUM7QUFFWCxNQUFNLE9BQU8sY0FBYztJQUN6QixnQkFBZ0IsQ0FBQztDQUNsQjs7QUFFRCxNQUFNLE9BQU8sTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsY0FBYztLQUN4QjtJQUNELEtBQUssRUFBRTtRQUNMLE9BQU8s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T0FBTyxhQUFhOzs7WUFMekIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO2dCQUNoQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBmb3J3YXJkUmVmLFxuICBOZ01vZHVsZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT3B0aW9uYWwsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE5nWm9uZSxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWUyLCBMeUNvcmVTdHlsZXMsIHRvQm9vbGVhbiwgbWl4aW5EaXNhYmxlUmlwcGxlLCBUaGVtZVZhcmlhYmxlcywgTHlGb2N1c1N0YXRlLCBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAnYWNjZW50JztcblxuZXhwb3J0IGNvbnN0IExZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW9Hcm91cCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5sZXQgaWR4ID0gMDtcblxuZXhwb3J0IGNsYXNzIFVuZGVmaW5lZFZhbHVlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJhZGlvR3JvdXA6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICB9LFxuICByYWRpbzoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICcme2NoZWNrZWR9Jzoge1xuICAgICAgJ3tjb250YWluZXJ9Jzoge1xuICAgICAgICAnZGl2Om50aC1jaGlsZCgxKSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjI1KScsXG4gICAgICAgIH0sXG4gICAgICAgICdkaXY6bnRoLWNoaWxkKDIpJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICcme29uRm9jdXNCeUtleWJvYXJkfSB7Y29udGFpbmVyfTo6YWZ0ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwIDAgMCAxMnB4JyxcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgICAgb3BhY2l0eTogLjEzLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICB9XG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZSdcbiAgfSxcbiAgbGFiZWxDb250ZW50OiB7XG4gICAgcGFkZGluZzogJzAgMC41ZW0nXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpbjogJ2F1dG8gMnB4JyxcbiAgICB3aWR0aDogJzE2cHgnLFxuICAgIGhlaWdodDogJzE2cHgnLFxuICAgICdkaXYnOiB7XG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgICBoZWlnaHQ6ICcxZW0nXG4gICAgfSxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiBgJydgLFxuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgd2lkdGg6ICcxNnB4JyxcbiAgICAgIGhlaWdodDogJzE2cHgnLFxuICAgICAgbWFyZ2luOiAnYXV0bydcbiAgICB9LFxuICAgICdkaXY6bnRoLWNoaWxkKDIpJzoge1xuICAgICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbiAgICB9LFxuICAgICdkaXY6bnRoLWNoaWxkKDEpJzoge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgYm9yZGVyOiAnc29saWQgLjA4ZW0gY3VycmVudENvbG9yJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5yYWRpby5vdXRlckNpcmNsZVxuICAgIH1cbiAgfSxcbiAgY2hlY2tlZDogbnVsbCxcbiAgX2FuaW1hdGlvbnM6IHtcbiAgICAne2NvbnRhaW5lcn0gZGl2Jzoge1xuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjUwbXMnXG4gICAgfVxuICB9LFxuICBvbkZvY3VzQnlLZXlib2FyZDogbnVsbCxcbiAgZGlzYWJsZWQ6IHtcbiAgICBjb2xvcjogdGhlbWUuZGlzYWJsZWQuY29udHJhc3QsXG4gICAgJ3tjb250YWluZXJ9IGRpdic6IHtcbiAgICAgIGNvbG9yOiBgJHt0aGVtZS5kaXNhYmxlZC5jb250cmFzdH0haW1wb3J0YW50YFxuICAgIH1cbiAgfVxufSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXJhZGlvLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgcHJvdmlkZXJzOiBbTFlfUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZXhwb3J0QXM6ICdseVJhZGlvR3JvdXAnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9Hcm91cCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3ZhbHVlID0gbmV3IFVuZGVmaW5lZFZhbHVlO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBuYW1lID0gYGx5LXJhZGlvLW5hbWUtJHtpZHgrK31gO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWw6IGFueSkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICBpZiAodGhpcy5fcmFkaW9zKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KCkgY29sb3IgPSAnYWNjZW50JztcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW8pKSBfcmFkaW9zOiBRdWVyeUxpc3Q8THlSYWRpbz47XG5cbiAgLyoqIFRoZSBtZXRob2QgdG8gYmUgY2FsbGVkIGluIG9yZGVyIHRvIHVwZGF0ZSBuZ01vZGVsICovXG4gIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBvblRvdWNoIGZ1bmN0aW9uIHJlZ2lzdGVyZWQgdmlhIHJlZ2lzdGVyT25Ub3VjaCAoQ29udHJvbFZhbHVlQWNjZXNzb3IpLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBNYXJrIHRoaXMgZ3JvdXAgYXMgYmVpbmcgXCJ0b3VjaGVkXCIgKGZvciBuZ01vZGVsKS4gTWVhbnQgdG8gYmUgY2FsbGVkIGJ5IHRoZSBjb250YWluZWRcbiAgICogcmFkaW8gYnV0dG9ucyB1cG9uIHRoZWlyIGJsdXIuXG4gICAqL1xuICBfdG91Y2goKSB7XG4gICAgaWYgKHRoaXMub25Ub3VjaGVkKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICghIXRoaXMuX3JhZGlvcykge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBtb2RlbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRpc2FibGVkIHN0YXRlIG9mIHRoZSBjb250cm9sLiBJbXBsZW1lbnRlZCBhcyBhIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBfaXNEaXNhYmxlZCBXaGV0aGVyIHRoZSBjb250cm9sIHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShfaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIC8vIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucmFkaW9Hcm91cCk7XG4gIH1cblxuICBfdXBkYXRlQ2hlY2tGcm9tVmFsdWUodmFsOiBhbnkpIHtcbiAgICBsZXQgbmV3Q2hlY2tlZDogYm9vbGVhbjtcbiAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpb0J1dHRvbiA9PiB7XG4gICAgICBpZiAodmFsID09PSByYWRpb0J1dHRvbi52YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZXZhbHVlKHZhbCk7XG4gICAgICAgIG5ld0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFuZXdDaGVja2VkKSB7XG4gICAgICAvKiogd2hlbiB2YWwgbm90IGV4aXN0IGluIHJhZGlvIGJ1dHRvbiAhPT0gICovXG4gICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKG51bGwpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgdXBkYXRldmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih2YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCgpO1xuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9yYWRpb1Jlc2V0Q2hlY2tlZCgpIHtcbiAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChfID0+IF8uX3NldENoZWNrZWRUb0ZhbHN5KCkpO1xuICB9XG5cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVJhZGlvQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVJhZGlvTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlUmlwcGxlKEx5UmFkaW9CYXNlKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJ3JhZGlvLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGlucHV0czogW1xuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW8gZXh0ZW5kcyBMeVJhZGlvTWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5yYWRpb0dyb3VwLmNsYXNzZXM7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGlkID0gYGx5LXJhZGlvLWlkLSR7aWR4Kyt9YDtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgbmFtZSA9ICcnO1xuICBwcml2YXRlIF92YWx1ZSA9IG51bGw7XG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3JDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9hbmltQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkQ2xhc3M6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnX2lucHV0JykgX2lucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfcmFkaW9Db250YWluZXInKSBwcml2YXRlIF9yYWRpb0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJykgX2xhYmVsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbG9yKHZhbCkge1xuICAgIGlmICh0aGlzLl9jb2xvciAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5UmFkaW8uY29sb3I6JHt2YWx9YCxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICAnJntjaGVja2VkfSB7Y29udGFpbmVyfSwgJntjaGVja2VkfSB7Y29udGFpbmVyfSBkaXY6bnRoLWNoaWxkKDEpLCAmIHtjb250YWluZXJ9IGRpdjpudGgtY2hpbGQoMiknOiB7XG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZih2YWwpXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9jb2xvckNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWSxcbiAgICAgICAgU1RZTEVTXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBnZXQgY29sb3IoKSB7IHJldHVybiB0aGlzLl9jb2xvcjsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjaGVja2VkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld0NoZWNrZWRTdGF0ZSA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMuX2NoZWNrZWQ7XG4gICAgaWYgKGJlZm9yZSAhPT0gbmV3Q2hlY2tlZFN0YXRlKSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gbmV3Q2hlY2tlZFN0YXRlO1xuICAgICAgaWYgKCFiZWZvcmUgJiYgbmV3Q2hlY2tlZFN0YXRlKSB7XG4gICAgICAgIC8qKiBBZGQgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5yYWRpb0dyb3VwLnZhbHVlKSB7XG4gICAgICAgICAgLyoqIHVwZGF0ZSBWYWx1ZSAqL1xuICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC51cGRhdGV2YWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIFJlbW92ZSBjbGFzcyBjaGVja2VkICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmlkfS1pbnB1dGA7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3MgPSB0aGlzLmNsYXNzZXMuZGlzYWJsZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9kaXNhYmxlZENsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB0aGlzLl9kaXNhYmxlZENsYXNzID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcmFkaW9Hcm91cDogTHlSYWRpb0dyb3VwLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9jb3JlU3R5bGVzOiBMeUNvcmVTdHlsZXMsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlXG4gICkge1xuICAgIHN1cGVyKHRoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZjtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcgPSB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHJhZGl1czogJ2NvbnRhaW5lclNpemUnLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IDE1MFxuICAgIH07XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHJhZGlvR3JvdXAuY2xhc3Nlcy5yYWRpbyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICAvLyBDb3B5IG5hbWUgZnJvbSBwYXJlbnQgcmFkaW8gZ3JvdXBcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFkaW9Hcm91cC5uYW1lO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLnJhZGlvR3JvdXAuY29sb3IgfHwgREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fcmFkaW9Db250YWluZXI7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2lucHV0LCB0aGlzLl9lbGVtZW50UmVmKTtcbiAgICBpZiAoZm9jdXNTdGF0ZSkge1xuICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudCA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxuXG4gIF9vbklucHV0Q2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnJhZGlvR3JvdXAuX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMucmFkaW9Hcm91cC5fdG91Y2goKTtcbiAgICB0aGlzLl9hZGRBbmltKCk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRBbmltKCkge1xuICAgIGlmICghdGhpcy5fYW5pbUNsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5fYW5pbWF0aW9ucyk7XG4gICAgICB0aGlzLl9hbmltQ2xhc3MgPSB0aGlzLmNsYXNzZXMuX2FuaW1hdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHsgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cblxuICBfc2V0Q2hlY2tlZFRvRmFsc3koKSB7XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlSYWRpb0dyb3VwLCBMeVJhZGlvXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlSYWRpb0dyb3VwLCBMeVJhZGlvXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlSYWRpb01vZHVsZSB7IH1cbiJdfQ==