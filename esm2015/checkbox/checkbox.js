/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LY_COMMON_STYLES, LyCoreStyles as LyCommonStyles, LyFocusState, LyTheme2, mixinBg, mixinColor, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_WITH_COLOR = 'accent';
/** @type {?} */
const DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
const STYLES = (theme) => ({
    root: {
        '&{disabled}{checked} {icon}::before': {
            border: 0
        },
        '&{onFocusByKeyboard} {icon}::after': {
            boxShadow: '0 0 0 12px',
            opacity: .13,
            borderRadius: '50%'
        },
        '&:not({checked}) {icon}': Object.assign({}, theme.checkbox.unchecked)
    },
    layout: {
        display: 'inline-flex',
        alignItems: 'baseline',
        cursor: 'pointer'
    },
    icon: Object.assign({ position: 'relative', marginAfter: '8px', marginTop: 'auto', marginBottom: 'auto', width: '16px', height: '16px', userSelect: 'none' }, theme.checkbox.root, { '&::before, &::after': Object.assign({ content: `''` }, LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto' }), '&::before': {
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
    input: Object.assign({}, LY_COMMON_STYLES.visuallyHidden),
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
            transition: `all ${theme.animations.durations.entering}ms ${theme.animations.curves.sharp}`
        }
    }
});
const ɵ0 = STYLES;
/**
 * This allows it to support [(ngModel)].
 * @ignore
 * @type {?}
 */
export const LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LyCheckbox),
    multi: true
};
/**
 * Change event object emitted by LyCheckbox.
 */
export class LyCheckboxChange {
}
if (false) {
    /**
     * The source LyCheckbox of the event.
     * @type {?}
     */
    LyCheckboxChange.prototype.source;
    /**
     * The new `checked` value of the checkbox.
     * @type {?}
     */
    LyCheckboxChange.prototype.checked;
}
/**
 * \@docs-private
 */
export class LyCheckboxBase {
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
    LyCheckboxBase.prototype._theme;
    /** @type {?} */
    LyCheckboxBase.prototype._ngZone;
}
/**
 * \@docs-private
 * @type {?}
 */
export const LyCheckboxMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyCheckboxBase))))))));
export class LyCheckbox extends LyCheckboxMixinBase {
    /**
     * @param {?} _commonStyles
     * @param {?} _theme
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     * @param {?} _focusState
     * @param {?} ngZone
     */
    constructor(_commonStyles, _theme, _el, _renderer, _changeDetectorRef, _focusState, ngZone) {
        super(_theme, ngZone);
        this._commonStyles = _commonStyles;
        this._el = _el;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._focusState = _focusState;
        /**
         * styles
         * @ignore
         */
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        /**
         * Event emitted when the checkbox's `checked` value changes.
         */
        this.change = new EventEmitter();
        this._onTouched = () => { };
        this._controlValueAccessorChangeFn = () => { };
        this._triggerElement = this._el;
        this._rippleConfig = {
            centered: true,
            radius: 'containerSize',
            percentageToIncrease: 150
        };
    }
    /**
     * @return {?}
     */
    get withColor() {
        return this._withColor;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set withColor(val) {
        if (val !== this.withColor) {
            this._withColor = val;
            this._withColorClass = this._theme.addStyle(`lyCheckbox.withColor:${val}`, (theme) => ({
                [`&.${this.classes.checked} .${this.classes.icon}`]: {
                    color: theme.colorOf(val)
                }
            }), this._el.nativeElement, this._withColorClass, STYLE_PRIORITY);
        }
    }
    /**
     * Whether the checkbox is checked.
     * @return {?}
     */
    get checked() { return this._checked; }
    /**
     * @param {?} val
     * @return {?}
     */
    set checked(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
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
    }
    /**
     * @return {?}
     */
    get required() {
        return this._required;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set required(val) {
        this._required = toBoolean(val);
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set disabled(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
        // set default
        if (!this.withColor) {
            this.withColor = DEFAULT_WITH_COLOR;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const focusState = this._focusState.listen(this._inputElement, this._el);
        if (focusState) {
            focusState.subscribe((event) => {
                if (this._onFocusByKeyboardState === true) {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                    this._onFocusByKeyboardState = false;
                }
                if (event.by === 'keyboard') {
                    if (event.event.type === 'focus') {
                        this._onFocusByKeyboardState = true;
                        this._renderer.addClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                    }
                }
                this._onTouched();
            });
        }
        this._rippleContainer = this._innerContainer;
        // set default disable ripple
        if (this.disableRipple === null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusState.unlisten(this._el);
        this._removeRippleEvents();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = !!value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * Toggles the `checked` state of the checkbox.
     * @return {?}
     */
    toggle() {
        this.checked = !this.checked;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onInputClick(event) {
        event.stopPropagation();
        if (!this.disabled) {
            this.toggle();
            this._emitChangeEvent();
        }
        this._markForCheck();
    }
    /**
     * @return {?}
     */
    _emitChangeEvent() {
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit({
            source: this,
            checked: this.checked
        });
    }
    /**
     * @return {?}
     */
    _markForCheck() {
        this._changeDetectorRef.markForCheck();
    }
}
LyCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'ly-checkbox',
                template: "\n<label [className]=\"classes.layout\">\n  <input #input\n  [className]=\"classes.input\"\n  type=\"checkbox\"\n  [checked]=\"checked\"\n  [required]=\"required\"\n  [attr.value]=\"value\"\n  [disabled]=\"disabled\"\n  (click)=\"_onInputClick($event)\"\n  >\n  <div #innerContainer [className]=\"classes.icon\">\n    <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 20 20\">\n      <polyline points=\"4 11 8 15 16 6\"></polyline>\n    </svg>\n  </div>\n  <div #label>\n    <ng-content></ng-content>\n  </div>\n</label>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                exportAs: 'lyCheckbox',
                inputs: [
                    'bg',
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
LyCheckbox.ctorParameters = () => [
    { type: LyCommonStyles },
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: LyFocusState },
    { type: NgZone }
];
LyCheckbox.propDecorators = {
    _innerContainer: [{ type: ViewChild, args: ['innerContainer',] }],
    value: [{ type: Input }],
    withColor: [{ type: Input }],
    checked: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    _inputElement: [{ type: ViewChild, args: ['input',] }]
};
if (false) {
    /**
     * styles
     * @ignore
     * @type {?}
     */
    LyCheckbox.prototype.classes;
    /** @type {?} */
    LyCheckbox.prototype._withColor;
    /** @type {?} */
    LyCheckbox.prototype._withColorClass;
    /** @type {?} */
    LyCheckbox.prototype._required;
    /** @type {?} */
    LyCheckbox.prototype._indeterminate;
    /** @type {?} */
    LyCheckbox.prototype._checked;
    /** @type {?} */
    LyCheckbox.prototype._disabled;
    /** @type {?} */
    LyCheckbox.prototype._onFocusByKeyboardState;
    /** @type {?} */
    LyCheckbox.prototype._innerContainer;
    /**
     * The value attribute of the native input element
     * @type {?}
     */
    LyCheckbox.prototype.value;
    /**
     * Event emitted when the checkbox's `checked` value changes.
     * @type {?}
     */
    LyCheckbox.prototype.change;
    /**
     * The native `<input type="checkbox">` element
     * @type {?}
     */
    LyCheckbox.prototype._inputElement;
    /** @type {?} */
    LyCheckbox.prototype._onTouched;
    /** @type {?} */
    LyCheckbox.prototype._controlValueAccessorChangeFn;
    /** @type {?} */
    LyCheckbox.prototype._commonStyles;
    /** @type {?} */
    LyCheckbox.prototype._el;
    /** @type {?} */
    LyCheckbox.prototype._renderer;
    /** @type {?} */
    LyCheckbox.prototype._changeDetectorRef;
    /** @type {?} */
    LyCheckbox.prototype._focusState;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFlBQVksSUFBSSxjQUFjLEVBQzlCLFlBQVksRUFDWixRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUVqQixTQUFTLEVBQ1IsTUFBTSxXQUFXLENBQUM7O01BRWYsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsa0JBQWtCLEdBQUcsUUFBUTs7TUFDN0Isc0JBQXNCLEdBQUcsS0FBSzs7TUFFOUIsTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixxQ0FBcUMsRUFBRTtZQUNyQyxNQUFNLEVBQUUsQ0FBQztTQUNWO1FBQ0Qsb0NBQW9DLEVBQUU7WUFDcEMsU0FBUyxFQUFFLFlBQVk7WUFDdkIsT0FBTyxFQUFFLEdBQUc7WUFDWixZQUFZLEVBQUUsS0FBSztTQUNwQjtRQUNELHlCQUF5QixvQkFDcEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzVCO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsYUFBYTtRQUN0QixVQUFVLEVBQUUsVUFBVTtRQUN0QixN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WixNQUFNOzs7OEJBZ0xMLFNBQVMsU0FBQyxnQkFBZ0I7b0JBRTFCLEtBQUs7d0JBRUwsS0FBSztzQkFrQkwsS0FBSzt1QkFlTCxLQUFLO3VCQU9MLEtBQUs7cUJBa0JMLE1BQU07NEJBSU4sU0FBUyxTQUFDLE9BQU87Ozs7Ozs7O0lBMUVsQiw2QkFBcUU7O0lBQ3JFLGdDQUE2Qjs7SUFDN0IscUNBQWtDOztJQUNsQywrQkFBNkI7O0lBQzdCLG9DQUFrQzs7SUFDbEMsOEJBQTRCOztJQUM1QiwrQkFBb0I7O0lBQ3BCLDZDQUF5Qzs7SUFDekMscUNBQXlFOzs7OztJQUV6RSwyQkFBdUI7Ozs7O0lBNER2Qiw0QkFDeUM7Ozs7O0lBR3pDLG1DQUFnRTs7SUFFaEUsZ0NBQWlDOztJQUNqQyxtREFBdUU7O0lBR3JFLG1DQUFvQzs7SUFFcEMseUJBQXVCOztJQUN2QiwrQkFBNEI7O0lBQzVCLHdDQUE2Qzs7SUFDN0MsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBMWV9DT01NT05fU1RZTEVTLFxuICBMeUNvcmVTdHlsZXMgYXMgTHlDb21tb25TdHlsZXMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhblxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1dJVEhfQ09MT1IgPSAnYWNjZW50JztcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcblxuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgICcme2Rpc2FibGVkfXtjaGVja2VkfSB7aWNvbn06OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlcjogMFxuICAgIH0sXG4gICAgJyZ7b25Gb2N1c0J5S2V5Ym9hcmR9IHtpY29ufTo6YWZ0ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwIDAgMCAxMnB4JyxcbiAgICAgIG9wYWNpdHk6IC4xMyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICB9LFxuICAgICcmOm5vdCh7Y2hlY2tlZH0pIHtpY29ufSc6IHtcbiAgICAgIC4uLnRoZW1lLmNoZWNrYm94LnVuY2hlY2tlZFxuICAgIH1cbiAgfSxcbiAgbGF5b3V0OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH0sXG4gIGljb246IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW5BZnRlcjogJzhweCcsXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXG4gICAgd2lkdGg6ICcxNnB4JyxcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgLi4udGhlbWUuY2hlY2tib3gucm9vdCxcbiAgICAnJjo6YmVmb3JlLCAmOjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICB3aWR0aDogJzE2cHgnLFxuICAgICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgICBtYXJnaW46ICdhdXRvJ1xuICAgIH0sXG4gICAgLy8gYm9yZGVyIGljb25cbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyOiAnc29saWQgMnB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCdcbiAgICB9LFxuICAgIHN2Zzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBwb2x5bGluZToge1xuICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgIHN0cm9rZTogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICAgICAgICBzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnMThweCcsXG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6ICcxOHB4J1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNoZWNrZWQ6IHtcbiAgICAnJiB7aWNvbn06OmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gICAgfSxcbiAgICAnJiB7aWNvbn0gcG9seWxpbmUnOiB7XG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiAwXG4gICAgfVxuICB9LFxuICBpbnB1dDoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMudmlzdWFsbHlIaWRkZW5cbiAgfSxcbiAgb25Gb2N1c0J5S2V5Ym9hcmQ6IHsgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICAnJiB7aW5wdXR9Jzoge1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICB9LFxuICAgICcmIHtpY29ufSc6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgYW5pbWF0aW9uczoge1xuICAgICcmIHtpY29ufSBzdmcgcG9seWxpbmUnOiB7XG4gICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH1gXG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBUaGlzIGFsbG93cyBpdCB0byBzdXBwb3J0IFsobmdNb2RlbCldLlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlDaGVja2JveCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKiogQ2hhbmdlIGV2ZW50IG9iamVjdCBlbWl0dGVkIGJ5IEx5Q2hlY2tib3guICovXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveENoYW5nZSB7XG4gIC8qKiBUaGUgc291cmNlIEx5Q2hlY2tib3ggb2YgdGhlIGV2ZW50LiAqL1xuICBzb3VyY2U6IEx5Q2hlY2tib3g7XG4gIC8qKiBUaGUgbmV3IGBjaGVja2VkYCB2YWx1ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlDaGVja2JveE1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlDaGVja2JveEJhc2UpKSkpKSkpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGV4cG9ydEFzOiAnbHlDaGVja2JveCcsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveCBleHRlbmRzIEx5Q2hlY2tib3hNaXhpbkJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9jaGVja2VkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuICBAVmlld0NoaWxkKCdpbm5lckNvbnRhaW5lcicpIF9pbm5lckNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIC8qKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCAqL1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB3aXRoQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fd2l0aENvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlDaGVja2JveC53aXRoQ29sb3I6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmNoZWNrZWR9IC4ke3RoaXMuY2xhc3Nlcy5pY29ufWBdOiB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKVxuICAgICAgICB9XG4gICAgICB9KSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY2hlY2tlZDsgfVxuICBzZXQgY2hlY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAvLyBpZiAobmV3VmFsICE9PSB0aGlzLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcbiAgICAgIH1cbiAgICAvLyB9XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGNoZWNrYm94J3MgYGNoZWNrZWRgIHZhbHVlIGNoYW5nZXMuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxMeUNoZWNrYm94Q2hhbmdlPiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPEx5Q2hlY2tib3hDaGFuZ2U+KCk7XG5cbiAgLyoqIFRoZSBuYXRpdmUgYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5gIGVsZW1lbnQgKi9cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBfaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIF9vblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfY29tbW9uU3R5bGVzOiBMeUNvbW1vblN0eWxlcyxcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBzdXBlcihfdGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbDtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcgPSB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHJhZGl1czogJ2NvbnRhaW5lclNpemUnLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IDE1MFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgLy8gc2V0IGRlZmF1bHRcbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9IERFRkFVTFRfV0lUSF9DT0xPUjtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2lucHV0RWxlbWVudCwgdGhpcy5fZWwpO1xuICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuYnkgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX2lubmVyQ29udGFpbmVyO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIGBjaGVja2VkYCBzdGF0ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB0aGlzLl9lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgICB9XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9lbWl0Q2hhbmdlRXZlbnQoKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLmNoZWNrZWQpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuIl19