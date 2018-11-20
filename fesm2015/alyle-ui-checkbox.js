import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, Renderer2, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LY_COMMON_STYLES, LyCoreStyles, LyFocusState, LyTheme2, mixinBg, mixinColor, mixinDisableRipple, mixinElevation, mixinFlat, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, LyCommonModule } from '@alyle/ui';
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
    icon: Object.assign({ position: 'relative', marginEnd: '8px', marginTop: 'auto', marginBottom: 'auto', width: '16px', height: '16px', userSelect: 'none' }, theme.checkbox.root, { '&::before, &::after': Object.assign({ content: `''` }, LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto' }), '&::before': {
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
/** @type {?} */
const LyCheckboxMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised((mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyCheckboxBase))))))))));
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
        this._focusState.listen(this._inputElement, this._el).subscribe((event) => {
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
    withColor: [{ type: Input }],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2hlY2tib3guanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jaGVja2JveC9jaGVja2JveC50cyIsIm5nOi8vQGFseWxlL3VpL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Q29yZVN0eWxlcyBhcyBMeUNvbW1vblN0eWxlcyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5GbGF0LFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW5cbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9XSVRIX0NPTE9SID0gJ2FjY2VudCc7XG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJntkaXNhYmxlZH17Y2hlY2tlZH0ge2ljb259OjpiZWZvcmUnOiB7XG4gICAgICBib3JkZXI6IDBcbiAgICB9LFxuICAgICcme29uRm9jdXNCeUtleWJvYXJkfSB7aWNvbn06OmFmdGVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMCAwIDAgMTJweCcsXG4gICAgICBvcGFjaXR5OiAuMTMsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgfSxcbiAgICAnJjpub3Qoe2NoZWNrZWR9KSB7aWNvbn0nOiB7XG4gICAgICAuLi50aGVtZS5jaGVja2JveC51bmNoZWNrZWRcbiAgICB9XG4gIH0sXG4gIGxheW91dDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9LFxuICBpY29uOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWFyZ2luRW5kOiAnOHB4JyxcbiAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcbiAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICB3aWR0aDogJzE2cHgnLFxuICAgIGhlaWdodDogJzE2cHgnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAuLi50aGVtZS5jaGVja2JveC5yb290LFxuICAgICcmOjpiZWZvcmUsICY6OmFmdGVyJzoge1xuICAgICAgY29udGVudDogYCcnYCxcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHdpZHRoOiAnMTZweCcsXG4gICAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nXG4gICAgfSxcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyOiAnc29saWQgMnB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCdcbiAgICB9LFxuICAgIHN2Zzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBwb2x5bGluZToge1xuICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgIHN0cm9rZTogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICAgICAgICBzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnMThweCcsXG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6ICcxOHB4J1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNoZWNrZWQ6IHtcbiAgICAnJiB7aWNvbn06OmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gICAgfSxcbiAgICAnJiB7aWNvbn0gcG9seWxpbmUnOiB7XG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiAwXG4gICAgfVxuICB9LFxuICBpbnB1dDoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMudmlzdWFsbHlIaWRkZW5cbiAgfSxcbiAgb25Gb2N1c0J5S2V5Ym9hcmQ6IHsgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICAnJiB7aW5wdXR9Jzoge1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICB9LFxuICAgICcmIHtpY29ufSc6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgYW5pbWF0aW9uczoge1xuICAgICcmIHtpY29ufSBzdmcgcG9seWxpbmUnOiB7XG4gICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH1gXG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBUaGlzIGFsbG93cyBpdCB0byBzdXBwb3J0IFsobmdNb2RlbCldLlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlDaGVja2JveCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKiogQ2hhbmdlIGV2ZW50IG9iamVjdCBlbWl0dGVkIGJ5IEx5Q2hlY2tib3guICovXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveENoYW5nZSB7XG4gIC8qKiBUaGUgc291cmNlIEx5Q2hlY2tib3ggb2YgdGhlIGV2ZW50LiAqL1xuICBzb3VyY2U6IEx5Q2hlY2tib3g7XG4gIC8qKiBUaGUgbmV3IGBjaGVja2VkYCB2YWx1ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IEx5Q2hlY2tib3hNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluRmxhdChcbiAgICBtaXhpbkNvbG9yKFxuICAgICAgbWl4aW5SYWlzZWQoXG4gICAgICAgIChcbiAgICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5Q2hlY2tib3hCYXNlKSkpKSkpKSkpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGV4cG9ydEFzOiAnbHlDaGVja2JveCcsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2ZsYXQnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3ggZXh0ZW5kcyBMeUNoZWNrYm94TWl4aW5CYXNlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJvdGVjdGVkIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIF93aXRoQ29sb3JDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3JlcXVpcmVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2luZGV0ZXJtaW5hdGU6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfY2hlY2tlZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZDtcbiAgcHJpdmF0ZSBfb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZTogYm9vbGVhbjtcbiAgQFZpZXdDaGlsZCgnaW5uZXJDb250YWluZXInKSBfaW5uZXJDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICAvKiogVGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQgKi9cbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgd2l0aENvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX3dpdGhDb2xvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5Q2hlY2tib3gud2l0aENvbG9yOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5jaGVja2VkfSAuJHt0aGlzLmNsYXNzZXMuaWNvbn1gXToge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbClcbiAgICAgICAgfVxuICAgICAgfSksIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3dpdGhDb2xvckNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7IH1cbiAgc2V0IGNoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgLy8gaWYgKG5ld1ZhbCAhPT0gdGhpcy5jaGVja2VkKSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgLy8gfVxuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjaGVja2JveCdzIGBjaGVja2VkYCB2YWx1ZSBjaGFuZ2VzLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8THlDaGVja2JveENoYW5nZT4gPVxuICAgICAgbmV3IEV2ZW50RW1pdHRlcjxMeUNoZWNrYm94Q2hhbmdlPigpO1xuXG4gIC8qKiBUaGUgbmF0aXZlIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+YCBlbGVtZW50ICovXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgX2lucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBfb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2NvbW1vblN0eWxlczogTHlDb21tb25TdHlsZXMsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICkge1xuICAgIHN1cGVyKF90aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsO1xuICAgIHRoaXMuX3JpcHBsZUNvbmZpZyA9IHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgcmFkaXVzOiAnY29udGFpbmVyU2l6ZScsXG4gICAgICBwZXJjZW50YWdlVG9JbmNyZWFzZTogMTUwXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICAvLyBzZXQgZGVmYXVsdFxuICAgIGlmICghdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMud2l0aENvbG9yID0gREVGQVVMVF9XSVRIX0NPTE9SO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9pbnB1dEVsZW1lbnQsIHRoaXMuX2VsKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuYnkgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgaWYgKGV2ZW50LmV2ZW50LnR5cGUgPT09ICdmb2N1cycpIHtcbiAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX2lubmVyQ29udGFpbmVyO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIGBjaGVja2VkYCBzdGF0ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB0aGlzLl9lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgICB9XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9lbWl0Q2hhbmdlRXZlbnQoKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLmNoZWNrZWQpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmltcG9ydCB7IEx5Q2hlY2tib3ggfSBmcm9tICcuL2NoZWNrYm94JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTHlDaGVja2JveFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMeUNvbW1vbk1vZHVsZSxcbiAgICBMeUNoZWNrYm94XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJMeUNvbW1vblN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7TUFxQ00sY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsa0JBQWtCLEdBQUcsUUFBUTs7TUFDN0Isc0JBQXNCLEdBQUcsS0FBSzs7TUFFOUIsTUFBTSxHQUFHLENBQUMsS0FBcUIsTUFBTTtJQUN6QyxJQUFJLEVBQUU7UUFDSixxQ0FBcUMsRUFBRTtZQUNyQyxNQUFNLEVBQUUsQ0FBQztTQUNWO1FBQ0Qsb0NBQW9DLEVBQUU7WUFDcEMsU0FBUyxFQUFFLFlBQVk7WUFDdkIsT0FBTyxFQUFFLEdBQUc7WUFDWixZQUFZLEVBQUUsS0FBSztTQUNwQjtRQUNELHlCQUF5QixvQkFDcEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzVCO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsYUFBYTtRQUN0QixVQUFVLEVB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