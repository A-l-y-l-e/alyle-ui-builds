import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, Renderer2, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LY_COMMON_STYLES, LyCoreStyles, LyFocusState, LyTheme2, mixinDisableRipple, toBoolean, shadowBuilder, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_WITH_COLOR = 'accent';
/** @type {?} */
const DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
const STYLES = (theme) => ({
    root: {
        '&{disabled}:not({checked}) {icon}:before': {
            color: theme.disabled.default
        },
        '&{disabled}': {
            pointerEvents: 'none',
            '{layout}': {
                color: theme.disabled.contrast
            }
        },
        '&{disabled}{checked} {icon}:before': {
            border: 0,
            background: theme.disabled.default
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
/**
 * This allows it to support [(ngModel)].
 * @ignore
 * @type {?}
 */
const LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LyCheckbox),
    multi: true
};
/**
 * Change event object emitted by LyCheckbox.
 */
class LyCheckboxChange {
}
/**
 * \@docs-private
 */
class LyCheckboxBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/**
 * \@docs-private
 * @type {?}
 */
const LyCheckboxMixinBase = mixinDisableRipple(LyCheckboxBase);
class LyCheckbox extends LyCheckboxMixinBase {
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
    get color() {
        return this._color;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set color(val) {
        if (val !== this.color) {
            this._color = val;
            this._colorClass = this._theme.addStyle(`lyCheckbox.color:${val}`, (theme) => ({
                [`&{checked} {icon}`]: {
                    color: theme.colorOf(val)
                },
                [`&{checked}:not({disabled}) {icon}`]: {
                    boxShadow: shadowBuilder(1, theme.colorOf(val))
                }
            }), this._el.nativeElement, this._colorClass, STYLE_PRIORITY, STYLES);
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
        // set default color
        if (!this.color) {
            this.color = DEFAULT_WITH_COLOR;
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
        if (this.disableRipple == null) {
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
     * \@docs-private
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = !!value;
    }
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * \@docs-private
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
     * @param {?} event
     * @return {?}
     */
    _onChange(event) {
        event.stopPropagation();
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
                template: "\n<label [className]=\"classes.layout\">\n  <input #input\n  [className]=\"classes.input\"\n  type=\"checkbox\"\n  [checked]=\"checked\"\n  [required]=\"required\"\n  [attr.value]=\"value\"\n  [disabled]=\"disabled\"\n  (click)=\"_onInputClick($event)\"\n  (change)=\"_onChange($event)\"\n  >\n  <div #innerContainer [className]=\"classes.icon\">\n    <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 20 20\">\n      <polyline points=\"4 11 8 15 16 6\"></polyline>\n    </svg>\n  </div>\n  <div #label>\n    <ng-content></ng-content>\n  </div>\n</label>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                exportAs: 'lyCheckbox',
                inputs: [
                    'disableRipple'
                ]
            }] }
];
/** @nocollapse */
LyCheckbox.ctorParameters = () => [
    { type: LyCoreStyles },
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
    color: [{ type: Input }],
    checked: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    _inputElement: [{ type: ViewChild, args: ['input',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyCheckboxModule {
}
LyCheckboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    LyCheckbox
                ],
                imports: [
                    CommonModule,
                    LyCommonModule
                ],
                exports: [
                    LyCommonModule,
                    LyCheckbox
                ]
            },] }
];

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

export { LyCheckboxModule, LY_CHECKBOX_CONTROL_VALUE_ACCESSOR, LyCheckboxChange, LyCheckboxBase, LyCheckboxMixinBase, LyCheckbox };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2hlY2tib3guanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jaGVja2JveC9jaGVja2JveC50cyIsIm5nOi8vQGFseWxlL3VpL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Q29yZVN0eWxlcyBhcyBMeUNvbW1vblN0eWxlcyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgdG9Cb29sZWFuLFxuICBzaGFkb3dCdWlsZGVyXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdhY2NlbnQnO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgJyZ7ZGlzYWJsZWR9Om5vdCh7Y2hlY2tlZH0pIHtpY29ufTpiZWZvcmUnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuZGlzYWJsZWQuZGVmYXVsdFxuICAgIH0sXG4gICAgJyZ7ZGlzYWJsZWR9Jzoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgJ3tsYXlvdXR9Jzoge1xuICAgICAgICBjb2xvcjogdGhlbWUuZGlzYWJsZWQuY29udHJhc3RcbiAgICAgIH1cbiAgICB9LFxuICAgICcme2Rpc2FibGVkfXtjaGVja2VkfSB7aWNvbn06YmVmb3JlJzoge1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUuZGlzYWJsZWQuZGVmYXVsdFxuICAgIH0sXG4gICAgJyZ7b25Gb2N1c0J5S2V5Ym9hcmR9IHtpY29ufTo6YWZ0ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwIDAgMCAxMnB4JyxcbiAgICAgIG9wYWNpdHk6IC4xMyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICB9LFxuICAgICcmOm5vdCh7Y2hlY2tlZH0pIHtpY29ufSc6IHtcbiAgICAgIC4uLnRoZW1lLmNoZWNrYm94LnVuY2hlY2tlZFxuICAgIH1cbiAgfSxcbiAgbGF5b3V0OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH0sXG4gIGljb246IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW5BZnRlcjogJzhweCcsXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXG4gICAgd2lkdGg6ICcxNnB4JyxcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgLi4udGhlbWUuY2hlY2tib3gucm9vdCxcbiAgICAnJjo6YmVmb3JlLCAmOjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICB3aWR0aDogJzE2cHgnLFxuICAgICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgICBtYXJnaW46ICdhdXRvJ1xuICAgIH0sXG4gICAgLy8gYm9yZGVyIGljb25cbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyOiAnc29saWQgMnB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCdcbiAgICB9LFxuICAgIHN2Zzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBwb2x5bGluZToge1xuICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgIHN0cm9rZTogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICAgICAgICBzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnMThweCcsXG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6ICcxOHB4J1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNoZWNrZWQ6IHtcbiAgICAnJiB7aWNvbn06OmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gICAgfSxcbiAgICAnJiB7aWNvbn0gcG9seWxpbmUnOiB7XG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiAwXG4gICAgfVxuICB9LFxuICBpbnB1dDoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMudmlzdWFsbHlIaWRkZW5cbiAgfSxcbiAgb25Gb2N1c0J5S2V5Ym9hcmQ6IHsgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICAnJiB7aW5wdXR9Jzoge1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICB9LFxuICAgICcmIHtpY29ufSc6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgYW5pbWF0aW9uczoge1xuICAgICcmIHtpY29ufSBzdmcgcG9seWxpbmUnOiB7XG4gICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH1gXG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBUaGlzIGFsbG93cyBpdCB0byBzdXBwb3J0IFsobmdNb2RlbCldLlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlDaGVja2JveCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKiogQ2hhbmdlIGV2ZW50IG9iamVjdCBlbWl0dGVkIGJ5IEx5Q2hlY2tib3guICovXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveENoYW5nZSB7XG4gIC8qKiBUaGUgc291cmNlIEx5Q2hlY2tib3ggb2YgdGhlIGV2ZW50LiAqL1xuICBzb3VyY2U6IEx5Q2hlY2tib3g7XG4gIC8qKiBUaGUgbmV3IGBjaGVja2VkYCB2YWx1ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlDaGVja2JveE1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShMeUNoZWNrYm94QmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0xZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBleHBvcnRBczogJ2x5Q2hlY2tib3gnLFxuICBpbnB1dHM6IFtcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94IGV4dGVuZHMgTHlDaGVja2JveE1peGluQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByb3RlY3RlZCBfY29sb3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9jb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9jaGVja2VkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuICBAVmlld0NoaWxkKCdpbm5lckNvbnRhaW5lcicpIF9pbm5lckNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIC8qKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCAqL1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlDaGVja2JveC5jb2xvcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICBbYCZ7Y2hlY2tlZH0ge2ljb259YF06IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZih2YWwpXG4gICAgICAgIH0sXG4gICAgICAgIFtgJntjaGVja2VkfTpub3Qoe2Rpc2FibGVkfSkge2ljb259YF06IHtcbiAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoMSwgdGhlbWUuY29sb3JPZih2YWwpKVxuICAgICAgICB9XG4gICAgICB9KSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcywgU1RZTEVfUFJJT1JJVFksIFNUWUxFUyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7IH1cbiAgc2V0IGNoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgLy8gaWYgKG5ld1ZhbCAhPT0gdGhpcy5jaGVja2VkKSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgLy8gfVxuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjaGVja2JveCdzIGBjaGVja2VkYCB2YWx1ZSBjaGFuZ2VzLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8THlDaGVja2JveENoYW5nZT4gPVxuICAgICAgbmV3IEV2ZW50RW1pdHRlcjxMeUNoZWNrYm94Q2hhbmdlPigpO1xuXG4gIC8qKiBUaGUgbmF0aXZlIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+YCBlbGVtZW50ICovXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgX2lucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBfb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2NvbW1vblN0eWxlczogTHlDb21tb25TdHlsZXMsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgc3VwZXIoX3RoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWw7XG4gICAgdGhpcy5fcmlwcGxlQ29uZmlnID0ge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICByYWRpdXM6ICdjb250YWluZXJTaXplJyxcbiAgICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiAxNTBcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIC8vIHNldCBkZWZhdWx0IGNvbG9yXG4gICAgaWYgKCF0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLmNvbG9yID0gREVGQVVMVF9XSVRIX0NPTE9SO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5faW5wdXRFbGVtZW50LCB0aGlzLl9lbCk7XG4gICAgaWYgKGZvY3VzU3RhdGUpIHtcbiAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5ieSA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICAgIGlmIChldmVudC5ldmVudC50eXBlID09PSAnZm9jdXMnKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy5faW5uZXJDb250YWluZXI7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBgY2hlY2tlZGAgc3RhdGUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgfVxuXG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KCk7XG4gICAgfVxuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX29uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW1pdENoYW5nZUV2ZW50KCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy5jaGVja2VkKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5pbXBvcnQgeyBMeUNoZWNrYm94IH0gZnJvbSAnLi9jaGVja2JveCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEx5Q2hlY2tib3hcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTHlDb21tb25Nb2R1bGUsXG4gICAgTHlDaGVja2JveFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiTHlDb21tb25TdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO01BNkJNLGNBQWMsR0FBRyxDQUFDLENBQUM7O01BQ25CLGtCQUFrQixHQUFHLFFBQVE7O01BQzdCLHNCQUFzQixHQUFHLEtBQUs7O01BRTlCLE1BQU0sR0FBRyxDQUFDLEtBQXFCLE1BQU07SUFDekMsSUFBSSxFQUFFO1FBQ0osMENBQTBDLEVBQUU7WUFDMUMsS0FBSyxFQUFF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