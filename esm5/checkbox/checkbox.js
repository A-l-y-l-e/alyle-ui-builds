/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LY_COMMON_STYLES, LyCoreStyles as LyCommonStyles, LyFocusState, LyTheme2, mixinBg, mixinColor, mixinDisableRipple, mixinElevation, mixinFlat, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, toBoolean } from '@alyle/ui';
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
        '&:not({checked}) {icon}': tslib_1.__assign({}, theme.checkbox.unchecked)
    },
    layout: {
        display: 'inline-flex',
        alignItems: 'baseline',
        cursor: 'pointer'
    },
    icon: tslib_1.__assign({ position: 'relative', marginEnd: '8px', marginTop: 'auto', marginBottom: 'auto', width: '16px', height: '16px', userSelect: 'none' }, theme.checkbox.root, { '&::before, &::after': tslib_1.__assign({ content: "''" }, LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto' }), '&::before': {
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
    input: tslib_1.__assign({}, LY_COMMON_STYLES.visuallyHidden),
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
var ɵ0 = STYLES;
/**
 * This allows it to support [(ngModel)].
 * @ignore
 * @type {?}
 */
export var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LyCheckbox; }),
    multi: true
};
/**
 * Change event object emitted by LyCheckbox.
 */
var /**
 * Change event object emitted by LyCheckbox.
 */
LyCheckboxChange = /** @class */ (function () {
    function LyCheckboxChange() {
    }
    return LyCheckboxChange;
}());
/**
 * Change event object emitted by LyCheckbox.
 */
export { LyCheckboxChange };
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
var LyCheckboxBase = /** @class */ (function () {
    function LyCheckboxBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyCheckboxBase;
}());
export { LyCheckboxBase };
if (false) {
    /** @type {?} */
    LyCheckboxBase.prototype._theme;
    /** @type {?} */
    LyCheckboxBase.prototype._ngZone;
}
/** @type {?} */
export var LyCheckboxMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised((mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyCheckboxBase))))))))));
var LyCheckbox = /** @class */ (function (_super) {
    tslib_1.__extends(LyCheckbox, _super);
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
        { type: LyCommonStyles },
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
export { LyCheckbox };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixZQUFZLElBQUksY0FBYyxFQUM5QixZQUFZLEVBQ1osUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBRVYsa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxTQUFTLEVBQ1QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBRWpCLFNBQVMsRUFDUixNQUFNLFdBQVcsQ0FBQzs7SUFFZixjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixrQkFBa0IsR0FBRyxRQUFROztJQUM3QixzQkFBc0IsR0FBRyxLQUFLOztJQUU5QixNQUFNLEdBQUcsVUFBQyxLQUFxQixJQUFLLE9BQUEsQ0FBQztJQUN6QyxJQUFJLEVBQUU7UUFDSixxQ0FBcUMsRUFBRTtZQUNyQyxNQUFNLEVBQUUsQ0FBQztTQUNWO1FBQ0Qsb0NBQW9DLEVBQUU7WUFDcEMsU0FBUyxFQUFFLFlBQVk7WUFDdkIsT0FBTyxFQUFFLEdBQUc7WUFDWixZQUFZLEVBQUUsS0FBSztTQUNwQjtRQUNELHlCQUF5Qix1QkFDcEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQzVCO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsYUFBYTtRQUN0QixVQUFVLEVBQUUsVUFBVTtRQUN0QixNQUFNLEVBQUUsU0FBUztLQUNsQjtJQUNELElBQUkscUJBQ0YsUUFBUSxFQUFFLFVBQVUsRUFDcEIsU0FBUyxFQUFFLEtBQUssRUFDaEIsU0FBUyxFQUFFLE1BQU0sRUFDakIsWUFBWSxFQUFFLE1BQU0sRUFDcEIsS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQUUsTUFBTSxFQUNkLFVBQVUsRUFBRSxNQUFNLElBQ2YsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQ3RCLHFCQUFxQixxQkFDbkIsT0FBTyxFQUFFLElBQUksSUFDVixnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLE1BQU0sRUFDZCxNQUFNLEVBQUUsTUFBTSxLQUdoQixXQUFXLEVBQUU7WUFDWCxNQUFNLEVBQUUsV0FBVztZQUNuQixZQUFZLEVBQUUsS0FBSztTQUNwQixFQUNELEdBQUcsRUFBRTtZQUNILFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTtnQkFDWixNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDeEMsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLGNBQWMsRUFBRSxPQUFPO2dCQUN2QixlQUFlLEVBQUUsTUFBTTtnQkFDdkIsZ0JBQWdCLEVBQUUsTUFBTTthQUN6QjtTQUNGLEdBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxrQkFBa0IsRUFBRTtZQUNsQixVQUFVLEVBQUUsY0FBYztTQUMzQjtRQUNELG1CQUFtQixFQUFFO1lBQ25CLGdCQUFnQixFQUFFLENBQUM7U0FDcEI7S0FDRjtJQUNELEtBQUssdUJBQ0EsZ0JBQWdCLENBQUMsY0FBYyxDQUNuQztJQUNELGlCQUFpQixFQUFFLEVBQUc7SUFDdEIsUUFBUSxFQUFFO1FBQ1IsV0FBVyxFQUFFO1lBQ1gsVUFBVSxFQUFFLFFBQVE7U0FDckI7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsb0JBQW9CO1NBQzVCO0tBQ0Y7SUFDRCxVQUFVLEVBQUU7UUFDVix1QkFBdUIsRUFBRTtZQUN2QixVQUFVLEVBQUUsU0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFdBQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBTztTQUM1RjtLQUNGO0NBQ0YsQ0FBQyxFQTlFd0MsQ0E4RXhDOzs7Ozs7O0FBTUYsTUFBTSxLQUFPLGtDQUFrQyxHQUFRO0lBQ3JELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsVUFBVSxFQUFWLENBQVUsQ0FBQztJQUN6QyxLQUFLLEVBQUUsSUFBSTtDQUNaOzs7O0FBR0Q7Ozs7SUFBQTtJQUtBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFMRCxJQUtDOzs7Ozs7Ozs7O0lBSEMsa0NBQW1COzs7OztJQUVuQixtQ0FBaUI7O0FBR25CO0lBQ0Usd0JBQ1MsTUFBZ0IsRUFDaEIsT0FBZTtRQURmLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUNwQixDQUFDO0lBQ1AscUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUhHLGdDQUF1Qjs7SUFDdkIsaUNBQXNCOzs7QUFJMUIsTUFBTSxLQUFPLG1CQUFtQixHQUFHLGlCQUFpQixDQUNwRCxPQUFPLENBQ0wsU0FBUyxDQUNQLFVBQVUsQ0FDUixXQUFXLENBQ1QsQ0FDRSxhQUFhLENBQ1gsY0FBYyxDQUNaLGdCQUFnQixDQUNkLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUUzRDtJQWtCZ0Msc0NBQW1CO0lBb0ZqRCxvQkFDUyxhQUE2QixFQUNwQyxNQUFnQixFQUNSLEdBQWUsRUFDZixTQUFvQixFQUNwQixrQkFBcUMsRUFDckMsV0FBeUIsRUFDakMsTUFBYztRQVBoQixZQVNFLGtCQUFNLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FPdEI7UUFmUSxtQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFFNUIsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGVBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsd0JBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxpQkFBVyxHQUFYLFdBQVcsQ0FBYzs7Ozs7UUFyRjFCLGFBQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7Ozs7UUFzRWxELFlBQU0sR0FDckIsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFLekMsZ0JBQVUsR0FBYyxjQUFPLENBQUMsQ0FBQztRQUN6QixtQ0FBNkIsR0FBeUIsY0FBTyxDQUFDLENBQUM7UUFZckUsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxhQUFhLEdBQUc7WUFDbkIsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsZUFBZTtZQUN2QixvQkFBb0IsRUFBRSxHQUFHO1NBQzFCLENBQUM7O0lBQ0osQ0FBQztJQW5GRCxzQkFDSSxpQ0FBUzs7OztRQURiO1lBRUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBQ0QsVUFBYyxHQUFXO1lBQXpCLGlCQVNDO1lBUkMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsMEJBQXdCLEdBQUssRUFBRSxVQUFDLEtBQXFCOztvQkFBSyxPQUFBO3dCQUNwRyxHQUFDLE9BQUssS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLFVBQUssS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFNLElBQUc7NEJBQ25ELEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzt5QkFDMUI7MkJBQ0Q7Z0JBSm9HLENBSXBHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUNuRTtRQUNILENBQUM7OztPQVZBO0lBZUQsc0JBQ0ksK0JBQU87UUFKWDs7V0FFRzs7Ozs7UUFDSCxjQUN5QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7OztRQUNoRCxVQUFZLEdBQVk7O2dCQUNoQixNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUM3QixpQ0FBaUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdkIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFFO1lBQ0gsSUFBSTtZQUNKLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDOzs7T0FaK0M7SUFjaEQsc0JBQ0ksZ0NBQVE7Ozs7UUFEWjtZQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQUNELFVBQWEsR0FBWTtZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FIQTtJQUlELHNCQUNJLGdDQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEdBQVk7O2dCQUNqQixNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUM3QixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDeEU7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDM0U7Z0JBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQzs7O09BWkE7Ozs7SUEwQ0QsNkJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxjQUFjO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCxvQ0FBZTs7O0lBQWY7UUFBQSxpQkF5QkM7O1lBeEJPLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDeEUsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztnQkFDekIsSUFBSSxLQUFJLENBQUMsdUJBQXVCLEtBQUssSUFBSSxFQUFFO29CQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ25GLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7aUJBQ3RDO2dCQUNELElBQUksS0FBSyxDQUFDLEVBQUUsS0FBSyxVQUFVLEVBQUU7b0JBQzNCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUNoQyxLQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO3dCQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7cUJBQ2pGO2lCQUNGO2dCQUNELEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFN0MsNkJBQTZCO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQztTQUM3QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7OztJQUVELGdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUNELCtCQUFVOzs7O0lBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7OztJQUNELHFDQUFnQjs7OztJQUFoQixVQUFpQixFQUF3QjtRQUN2QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBQ0Qsc0NBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxxQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELG1EQUFtRDs7Ozs7SUFDbkQsMkJBQU07Ozs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsa0NBQWE7Ozs7SUFBYixVQUFjLEtBQVk7UUFDeEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFTyxxQ0FBZ0I7OztJQUF4QjtRQUNFLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixNQUFNLEVBQUUsSUFBSTtZQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU8sa0NBQWE7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOztnQkFyTUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixvaEJBQTRCO29CQUM1QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO29CQUMvQyxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsTUFBTSxFQUFFO3dCQUNOLElBQUk7d0JBQ0osTUFBTTt3QkFDTixPQUFPO3dCQUNQLFFBQVE7d0JBQ1IsVUFBVTt3QkFDVixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsZUFBZTtxQkFDaEI7aUJBQ0Y7Ozs7Z0JBMUppQixjQUFjO2dCQUU5QixRQUFRO2dCQWpCUixVQUFVO2dCQVFWLFNBQVM7Z0JBVlQsaUJBQWlCO2dCQWtCakIsWUFBWTtnQkFaWixNQUFNOzs7a0NBbUxMLFNBQVMsU0FBQyxnQkFBZ0I7d0JBRTFCLEtBQUs7NEJBRUwsS0FBSzswQkFrQkwsS0FBSzsyQkFlTCxLQUFLOzJCQU9MLEtBQUs7eUJBa0JMLE1BQU07Z0NBSU4sU0FBUyxTQUFDLE9BQU87O0lBc0dwQixpQkFBQztDQUFBLEFBdk1ELENBa0JnQyxtQkFBbUIsR0FxTGxEO1NBckxZLFVBQVU7Ozs7Ozs7SUFLckIsNkJBQXFFOztJQUNyRSxnQ0FBNkI7O0lBQzdCLHFDQUFrQzs7SUFDbEMsK0JBQTZCOztJQUM3QixvQ0FBa0M7O0lBQ2xDLDhCQUE0Qjs7SUFDNUIsK0JBQW9COztJQUNwQiw2Q0FBeUM7O0lBQ3pDLHFDQUF5RTs7Ozs7SUFFekUsMkJBQXVCOzs7OztJQTREdkIsNEJBQ3lDOzs7OztJQUd6QyxtQ0FBZ0U7O0lBRWhFLGdDQUFpQzs7SUFDakMsbURBQXVFOztJQUdyRSxtQ0FBb0M7O0lBRXBDLHlCQUF1Qjs7SUFDdkIsK0JBQTRCOztJQUM1Qix3Q0FBNkM7O0lBQzdDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgTHlDb3JlU3R5bGVzIGFzIEx5Q29tbW9uU3R5bGVzLFxuICBMeUZvY3VzU3RhdGUsXG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbkZsYXQsXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhblxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1dJVEhfQ09MT1IgPSAnYWNjZW50JztcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcblxuY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgICcme2Rpc2FibGVkfXtjaGVja2VkfSB7aWNvbn06OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlcjogMFxuICAgIH0sXG4gICAgJyZ7b25Gb2N1c0J5S2V5Ym9hcmR9IHtpY29ufTo6YWZ0ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwIDAgMCAxMnB4JyxcbiAgICAgIG9wYWNpdHk6IC4xMyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICB9LFxuICAgICcmOm5vdCh7Y2hlY2tlZH0pIHtpY29ufSc6IHtcbiAgICAgIC4uLnRoZW1lLmNoZWNrYm94LnVuY2hlY2tlZFxuICAgIH1cbiAgfSxcbiAgbGF5b3V0OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH0sXG4gIGljb246IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW5FbmQ6ICc4cHgnLFxuICAgIG1hcmdpblRvcDogJ2F1dG8nLFxuICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgIHdpZHRoOiAnMTZweCcsXG4gICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIC4uLnRoZW1lLmNoZWNrYm94LnJvb3QsXG4gICAgJyY6OmJlZm9yZSwgJjo6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiBgJydgLFxuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgd2lkdGg6ICcxNnB4JyxcbiAgICAgIGhlaWdodDogJzE2cHgnLFxuICAgICAgbWFyZ2luOiAnYXV0bydcbiAgICB9LFxuICAgIC8vIGJvcmRlciBpY29uXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIGJvcmRlcjogJ3NvbGlkIDJweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICcycHgnXG4gICAgfSxcbiAgICBzdmc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcG9seWxpbmU6IHtcbiAgICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgICBzdHJva2U6IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0LFxuICAgICAgICBzdHJva2VXaWR0aDogMixcbiAgICAgICAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgICAgICAgc3Ryb2tlTGluZWpvaW46ICdyb3VuZCcsXG4gICAgICAgIHN0cm9rZURhc2hhcnJheTogJzE4cHgnLFxuICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiAnMThweCdcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBjaGVja2VkOiB7XG4gICAgJyYge2ljb259OjpiZWZvcmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICAgIH0sXG4gICAgJyYge2ljb259IHBvbHlsaW5lJzoge1xuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogMFxuICAgIH1cbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLnZpc3VhbGx5SGlkZGVuXG4gIH0sXG4gIG9uRm9jdXNCeUtleWJvYXJkOiB7IH0sXG4gIGRpc2FibGVkOiB7XG4gICAgJyYge2lucHV0fSc6IHtcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgfSxcbiAgICAnJiB7aWNvbn0nOiB7XG4gICAgICBjb2xvcjogJ2luaGVyaXQgIWltcG9ydGFudCdcbiAgICB9XG4gIH0sXG4gIGFuaW1hdGlvbnM6IHtcbiAgICAnJiB7aWNvbn0gc3ZnIHBvbHlsaW5lJzoge1xuICAgICAgdHJhbnNpdGlvbjogYGFsbCAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9YFxuICAgIH1cbiAgfVxufSk7XG5cbi8qKlxuICogVGhpcyBhbGxvd3MgaXQgdG8gc3VwcG9ydCBbKG5nTW9kZWwpXS5cbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IExZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5Q2hlY2tib3gpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqIENoYW5nZSBldmVudCBvYmplY3QgZW1pdHRlZCBieSBMeUNoZWNrYm94LiAqL1xuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hDaGFuZ2Uge1xuICAvKiogVGhlIHNvdXJjZSBMeUNoZWNrYm94IG9mIHRoZSBldmVudC4gKi9cbiAgc291cmNlOiBMeUNoZWNrYm94O1xuICAvKiogVGhlIG5ldyBgY2hlY2tlZGAgdmFsdWUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBMeUNoZWNrYm94TWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkZsYXQoXG4gICAgbWl4aW5Db2xvcihcbiAgICAgIG1peGluUmFpc2VkKFxuICAgICAgICAoXG4gICAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeUNoZWNrYm94QmFzZSkpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0xZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBleHBvcnRBczogJ2x5Q2hlY2tib3gnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdmbGF0JyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94IGV4dGVuZHMgTHlDaGVja2JveE1peGluQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByb3RlY3RlZCBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfd2l0aENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9pbmRldGVybWluYXRlOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2NoZWNrZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQ7XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG4gIEBWaWV3Q2hpbGQoJ2lubmVyQ29udGFpbmVyJykgX2lubmVyQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgLyoqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50ICovXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHdpdGhDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgICB0aGlzLl93aXRoQ29sb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseUNoZWNrYm94LndpdGhDb2xvcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuY2hlY2tlZH0gLiR7dGhpcy5jbGFzc2VzLmljb259YF06IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZih2YWwpXG4gICAgICAgIH1cbiAgICAgIH0pLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl93aXRoQ29sb3JDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jaGVja2VkOyB9XG4gIHNldCBjaGVja2VkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIC8vIGlmIChuZXdWYWwgIT09IHRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuICAgICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY2hlY2tib3gncyBgY2hlY2tlZGAgdmFsdWUgY2hhbmdlcy4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPEx5Q2hlY2tib3hDaGFuZ2U+ID1cbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8THlDaGVja2JveENoYW5nZT4oKTtcblxuICAvKiogVGhlIG5hdGl2ZSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPmAgZWxlbWVudCAqL1xuICBAVmlld0NoaWxkKCdpbnB1dCcpIF9pbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgX29uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG4gIHByaXZhdGUgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9jb21tb25TdHlsZXM6IEx5Q29tbW9uU3R5bGVzLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHN1cGVyKF90aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsO1xuICAgIHRoaXMuX3JpcHBsZUNvbmZpZyA9IHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgcmFkaXVzOiAnY29udGFpbmVyU2l6ZScsXG4gICAgICBwZXJjZW50YWdlVG9JbmNyZWFzZTogMTUwXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICAvLyBzZXQgZGVmYXVsdFxuICAgIGlmICghdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMud2l0aENvbG9yID0gREVGQVVMVF9XSVRIX0NPTE9SO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5faW5wdXRFbGVtZW50LCB0aGlzLl9lbCk7XG4gICAgaWYgKGZvY3VzU3RhdGUpIHtcbiAgICAgIGZvY3VzU3RhdGUuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5ieSA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICAgIGlmIChldmVudC5ldmVudC50eXBlID09PSAnZm9jdXMnKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy5faW5uZXJDb250YWluZXI7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzU3RhdGUudW5saXN0ZW4odGhpcy5fZWwpO1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9ICEhdmFsdWU7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKiogVG9nZ2xlcyB0aGUgYGNoZWNrZWRgIHN0YXRlIG9mIHRoZSBjaGVja2JveC4gKi9cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gIH1cblxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIHRoaXMuX2VtaXRDaGFuZ2VFdmVudCgpO1xuICAgIH1cbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX2VtaXRDaGFuZ2VFdmVudCgpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMuY2hlY2tlZCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh7XG4gICAgICBzb3VyY2U6IHRoaXMsXG4gICAgICBjaGVja2VkOiB0aGlzLmNoZWNrZWRcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG59XG4iXX0=