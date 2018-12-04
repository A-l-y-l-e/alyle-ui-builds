import { __assign, __extends } from 'tslib';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, Renderer2, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LY_COMMON_STYLES, LyCoreStyles, LyFocusState, LyTheme2, mixinBg, mixinColor, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, LyCommonModule } from '@alyle/ui';
import { CommonModule } from '@angular/common';

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
var STYLES = function (theme) { return ({
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
    icon: __assign({ position: 'relative', marginEnd: '8px', marginTop: 'auto', marginBottom: 'auto', width: '16px', height: '16px', userSelect: 'none' }, theme.checkbox.root, { '&::before, &::after': __assign({ content: "''" }, LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto' }), '&::before': {
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
    input: __assign({}, LY_COMMON_STYLES.visuallyHidden),
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
}); };
/**
 * This allows it to support [(ngModel)].
 * @ignore
 * @type {?}
 */
var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LyCheckbox; }),
    multi: true
};
/**
 * Change event object emitted by LyCheckbox.
 */
var  /**
 * Change event object emitted by LyCheckbox.
 */
LyCheckboxChange = /** @class */ (function () {
    function LyCheckboxChange() {
    }
    return LyCheckboxChange;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyCheckboxBase = /** @class */ (function () {
    function LyCheckboxBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyCheckboxBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyCheckboxMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyCheckboxBase))))))));
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
        _this.change = new EventEmitter();
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
         */
        function () {
            return this._withColor;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
         */
        function () { return this._checked; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
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
         */
        function () {
            return this._required;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._required = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCheckbox.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = toBoolean(val);
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
        /** @type {?} */
        var focusState = this._focusState.listen(this._inputElement, this._el);
        if (focusState) {
            focusState.subscribe(function (event) {
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
        }
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
    LyCheckbox.ctorParameters = function () { return [
        { type: LyCoreStyles },
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: LyFocusState },
        { type: NgZone }
    ]; };
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

export { LyCheckboxModule, LY_CHECKBOX_CONTROL_VALUE_ACCESSOR, LyCheckboxChange, LyCheckboxBase, LyCheckboxMixinBase, LyCheckbox };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2hlY2tib3guanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jaGVja2JveC9jaGVja2JveC50cyIsIm5nOi8vQGFseWxlL3VpL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Q29yZVN0eWxlcyBhcyBMeUNvbW1vblN0eWxlcyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgdG9Cb29sZWFuXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdhY2NlbnQnO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgJyZ7ZGlzYWJsZWR9e2NoZWNrZWR9IHtpY29ufTo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyOiAwXG4gICAgfSxcbiAgICAnJntvbkZvY3VzQnlLZXlib2FyZH0ge2ljb259OjphZnRlcic6IHtcbiAgICAgIGJveFNoYWRvdzogJzAgMCAwIDEycHgnLFxuICAgICAgb3BhY2l0eTogLjEzLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgIH0sXG4gICAgJyY6bm90KHtjaGVja2VkfSkge2ljb259Jzoge1xuICAgICAgLi4udGhlbWUuY2hlY2tib3gudW5jaGVja2VkXG4gICAgfVxuICB9LFxuICBsYXlvdXQ6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfSxcbiAgaWNvbjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpbkVuZDogJzhweCcsXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXG4gICAgd2lkdGg6ICcxNnB4JyxcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgLi4udGhlbWUuY2hlY2tib3gucm9vdCxcbiAgICAnJjo6YmVmb3JlLCAmOjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICB3aWR0aDogJzE2cHgnLFxuICAgICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgICBtYXJnaW46ICdhdXRvJ1xuICAgIH0sXG4gICAgLy8gYm9yZGVyIGljb25cbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyOiAnc29saWQgMnB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCdcbiAgICB9LFxuICAgIHN2Zzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBwb2x5bGluZToge1xuICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgIHN0cm9rZTogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICAgICAgICBzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnMThweCcsXG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6ICcxOHB4J1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNoZWNrZWQ6IHtcbiAgICAnJiB7aWNvbn06OmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gICAgfSxcbiAgICAnJiB7aWNvbn0gcG9seWxpbmUnOiB7XG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiAwXG4gICAgfVxuICB9LFxuICBpbnB1dDoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMudmlzdWFsbHlIaWRkZW5cbiAgfSxcbiAgb25Gb2N1c0J5S2V5Ym9hcmQ6IHsgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICAnJiB7aW5wdXR9Jzoge1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICB9LFxuICAgICcmIHtpY29ufSc6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgYW5pbWF0aW9uczoge1xuICAgICcmIHtpY29ufSBzdmcgcG9seWxpbmUnOiB7XG4gICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH1gXG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBUaGlzIGFsbG93cyBpdCB0byBzdXBwb3J0IFsobmdNb2RlbCldLlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlDaGVja2JveCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKiogQ2hhbmdlIGV2ZW50IG9iamVjdCBlbWl0dGVkIGJ5IEx5Q2hlY2tib3guICovXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveENoYW5nZSB7XG4gIC8qKiBUaGUgc291cmNlIEx5Q2hlY2tib3ggb2YgdGhlIGV2ZW50LiAqL1xuICBzb3VyY2U6IEx5Q2hlY2tib3g7XG4gIC8qKiBUaGUgbmV3IGBjaGVja2VkYCB2YWx1ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlDaGVja2JveE1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlDaGVja2JveEJhc2UpKSkpKSkpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGV4cG9ydEFzOiAnbHlDaGVja2JveCcsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveCBleHRlbmRzIEx5Q2hlY2tib3hNaXhpbkJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9jaGVja2VkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuICBAVmlld0NoaWxkKCdpbm5lckNvbnRhaW5lcicpIF9pbm5lckNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIC8qKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCAqL1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB3aXRoQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fd2l0aENvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlDaGVja2JveC53aXRoQ29sb3I6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmNoZWNrZWR9IC4ke3RoaXMuY2xhc3Nlcy5pY29ufWBdOiB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKVxuICAgICAgICB9XG4gICAgICB9KSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY2hlY2tlZDsgfVxuICBzZXQgY2hlY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAvLyBpZiAobmV3VmFsICE9PSB0aGlzLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcbiAgICAgIH1cbiAgICAvLyB9XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGNoZWNrYm94J3MgYGNoZWNrZWRgIHZhbHVlIGNoYW5nZXMuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxMeUNoZWNrYm94Q2hhbmdlPiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPEx5Q2hlY2tib3hDaGFuZ2U+KCk7XG5cbiAgLyoqIFRoZSBuYXRpdmUgYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5gIGVsZW1lbnQgKi9cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBfaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIF9vblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfY29tbW9uU3R5bGVzOiBMeUNvbW1vblN0eWxlcyxcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBzdXBlcihfdGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbDtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcgPSB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHJhZGl1czogJ2NvbnRhaW5lclNpemUnLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IDE1MFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgLy8gc2V0IGRlZmF1bHRcbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9IERFRkFVTFRfV0lUSF9DT0xPUjtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2lucHV0RWxlbWVudCwgdGhpcy5fZWwpO1xuICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuYnkgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX2lubmVyQ29udGFpbmVyO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIGBjaGVja2VkYCBzdGF0ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB0aGlzLl9lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgICB9XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9lbWl0Q2hhbmdlRXZlbnQoKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLmNoZWNrZWQpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmltcG9ydCB7IEx5Q2hlY2tib3ggfSBmcm9tICcuL2NoZWNrYm94JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTHlDaGVja2JveFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMeUNvbW1vbk1vZHVsZSxcbiAgICBMeUNoZWNrYm94XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkx5Q29tbW9uU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQW9DTSxjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixrQkFBa0IsR0FBRyxRQUFROztJQUM3QixzQkFBc0IsR0FBRyxLQUFLOztJQUU5QixNQUFNLEdBQUcsVUFBQyxLQUFxQixJQUFLLFFBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0oscUNBQXFDLEVBQUU7WUFDckMsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUNELG9DQUFvQyxFQUFFO1lBQ3BDLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLE9BQU8sRUFBRSxHQUFHO1lBQ1osWUFBWSxFQUFFLEtBQUs7U0FDcEI7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