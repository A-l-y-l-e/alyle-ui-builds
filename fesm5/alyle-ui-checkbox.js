import { __assign, __extends } from 'tslib';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, Renderer2, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LY_COMMON_STYLES, LyCoreStyles, LyFocusState, LyTheme2, mixinBg, mixinColor, mixinDisableRipple, mixinElevation, mixinFlat, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean, LyCommonModule } from '@alyle/ui';
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
var LyCheckboxBase = /** @class */ (function () {
    function LyCheckboxBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyCheckboxBase;
}());
/** @type {?} */
var LyCheckboxMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised((mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyCheckboxBase))))))))));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2hlY2tib3guanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jaGVja2JveC9jaGVja2JveC50cyIsIm5nOi8vQGFseWxlL3VpL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Q29yZVN0eWxlcyBhcyBMeUNvbW1vblN0eWxlcyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5GbGF0LFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW5cbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9XSVRIX0NPTE9SID0gJ2FjY2VudCc7XG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICAnJntkaXNhYmxlZH17Y2hlY2tlZH0ge2ljb259OjpiZWZvcmUnOiB7XG4gICAgICBib3JkZXI6IDBcbiAgICB9LFxuICAgICcme29uRm9jdXNCeUtleWJvYXJkfSB7aWNvbn06OmFmdGVyJzoge1xuICAgICAgYm94U2hhZG93OiAnMCAwIDAgMTJweCcsXG4gICAgICBvcGFjaXR5OiAuMTMsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgfSxcbiAgICAnJjpub3Qoe2NoZWNrZWR9KSB7aWNvbn0nOiB7XG4gICAgICAuLi50aGVtZS5jaGVja2JveC51bmNoZWNrZWRcbiAgICB9XG4gIH0sXG4gIGxheW91dDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9LFxuICBpY29uOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWFyZ2luRW5kOiAnOHB4JyxcbiAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcbiAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICB3aWR0aDogJzE2cHgnLFxuICAgIGhlaWdodDogJzE2cHgnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAuLi50aGVtZS5jaGVja2JveC5yb290LFxuICAgICcmOjpiZWZvcmUsICY6OmFmdGVyJzoge1xuICAgICAgY29udGVudDogYCcnYCxcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHdpZHRoOiAnMTZweCcsXG4gICAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nXG4gICAgfSxcbiAgICAvLyBib3JkZXIgaWNvblxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBib3JkZXI6ICdzb2xpZCAycHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4J1xuICAgIH0sXG4gICAgc3ZnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHBvbHlsaW5lOiB7XG4gICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgc3Ryb2tlOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXG4gICAgICAgIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG4gICAgICAgIHN0cm9rZUxpbmVqb2luOiAncm91bmQnLFxuICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICcxOHB4JyxcbiAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogJzE4cHgnXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgY2hlY2tlZDoge1xuICAgICcmIHtpY29ufTo6YmVmb3JlJzoge1xuICAgICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcidcbiAgICB9LFxuICAgICcmIHtpY29ufSBwb2x5bGluZSc6IHtcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IDBcbiAgICB9XG4gIH0sXG4gIGlucHV0OiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy52aXN1YWxseUhpZGRlblxuICB9LFxuICBvbkZvY3VzQnlLZXlib2FyZDogeyB9LFxuICBkaXNhYmxlZDoge1xuICAgICcmIHtpbnB1dH0nOiB7XG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgIH0sXG4gICAgJyYge2ljb259Jzoge1xuICAgICAgY29sb3I6ICdpbmhlcml0ICFpbXBvcnRhbnQnXG4gICAgfVxuICB9LFxuICBhbmltYXRpb25zOiB7XG4gICAgJyYge2ljb259IHN2ZyBwb2x5bGluZSc6IHtcbiAgICAgIHRyYW5zaXRpb246IGBhbGwgJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5lbnRlcmluZ31tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnNoYXJwfWBcbiAgICB9XG4gIH1cbn0pO1xuXG4vKipcbiAqIFRoaXMgYWxsb3dzIGl0IHRvIHN1cHBvcnQgWyhuZ01vZGVsKV0uXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBMWV9DSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMeUNoZWNrYm94KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKiBDaGFuZ2UgZXZlbnQgb2JqZWN0IGVtaXR0ZWQgYnkgTHlDaGVja2JveC4gKi9cbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94Q2hhbmdlIHtcbiAgLyoqIFRoZSBzb3VyY2UgTHlDaGVja2JveCBvZiB0aGUgZXZlbnQuICovXG4gIHNvdXJjZTogTHlDaGVja2JveDtcbiAgLyoqIFRoZSBuZXcgYGNoZWNrZWRgIHZhbHVlIG9mIHRoZSBjaGVja2JveC4gKi9cbiAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlDaGVja2JveE1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5GbGF0KFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgKFxuICAgICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlDaGVja2JveEJhc2UpKSkpKSkpKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3guaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtMWV9DSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgZXhwb3J0QXM6ICdseUNoZWNrYm94JyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnZmxhdCcsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveCBleHRlbmRzIEx5Q2hlY2tib3hNaXhpbkJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9jaGVja2VkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuICBAVmlld0NoaWxkKCdpbm5lckNvbnRhaW5lcicpIF9pbm5lckNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIC8qKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCAqL1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB3aXRoQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fd2l0aENvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlDaGVja2JveC53aXRoQ29sb3I6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmNoZWNrZWR9IC4ke3RoaXMuY2xhc3Nlcy5pY29ufWBdOiB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKVxuICAgICAgICB9XG4gICAgICB9KSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY2hlY2tlZDsgfVxuICBzZXQgY2hlY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAvLyBpZiAobmV3VmFsICE9PSB0aGlzLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcbiAgICAgIH1cbiAgICAvLyB9XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGNoZWNrYm94J3MgYGNoZWNrZWRgIHZhbHVlIGNoYW5nZXMuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxMeUNoZWNrYm94Q2hhbmdlPiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPEx5Q2hlY2tib3hDaGFuZ2U+KCk7XG5cbiAgLyoqIFRoZSBuYXRpdmUgYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5gIGVsZW1lbnQgKi9cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBfaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIF9vblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfY29tbW9uU3R5bGVzOiBMeUNvbW1vblN0eWxlcyxcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBzdXBlcihfdGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbDtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcgPSB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHJhZGl1czogJ2NvbnRhaW5lclNpemUnLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IDE1MFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgLy8gc2V0IGRlZmF1bHRcbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9IERFRkFVTFRfV0lUSF9DT0xPUjtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2lucHV0RWxlbWVudCwgdGhpcy5fZWwpO1xuICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuYnkgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICBpZiAoZXZlbnQuZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX2lubmVyQ29udGFpbmVyO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIGBjaGVja2VkYCBzdGF0ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICB0aGlzLl9lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgICB9XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9lbWl0Q2hhbmdlRXZlbnQoKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLmNoZWNrZWQpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgY2hlY2tlZDogdGhpcy5jaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmltcG9ydCB7IEx5Q2hlY2tib3ggfSBmcm9tICcuL2NoZWNrYm94JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTHlDaGVja2JveFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMeUNvbW1vbk1vZHVsZSxcbiAgICBMeUNoZWNrYm94XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkx5Q29tbW9uU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQXFDTSxjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixrQkFBa0IsR0FBRyxRQUFROztJQUM3QixzQkFBc0IsR0FBRyxLQUFLOztJQUU5QixNQUFNLEdBQUcsVUFBQyxLQUFxQixJQUFLLFFBQUM7SUFDekMsSUFBSSxFQUFFO1FBQ0oscUNBQXFDLEVBQUU7WUFDckMsTUFBTSxFQUFFLENBQUM7U0FDVjtRQUNELG9DQUFvQyxFQUFFO1lBQ3BDLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLE9BQU8sRUFBRSxH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