import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, Renderer2, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LY_COMMON_STYLES, LyCoreStyles, LyFocusState, LyTheme2, mixinDisableRipple, toBoolean, shadowBuilder, LyCommonModule } from '@alyle/ui';

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
                if (event === 'keyboard') {
                    this._onFocusByKeyboardState = true;
                    this._renderer.addClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
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

//# sourceMappingURL=alyle-ui-checkbox.js.map