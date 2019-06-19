import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LY_COMMON_STYLES, LyCoreStyles as LyCommonStyles, LyFocusState, LyTheme2, mixinDisableRipple, toBoolean, shadowBuilder } from '@alyle/ui';
var STYLE_PRIORITY = -2;
var DEFAULT_WITH_COLOR = 'accent';
var DEFAULT_DISABLE_RIPPLE = false;
export var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: {
        marginAfter: '16px',
        marginBefore: '-16px',
        display: 'inline-flex',
        '&{disabled}:not({checked}) {icon}:before': {
            color: theme.disabled.default
        },
        '&{disabled}': {
            pointerEvents: 'none',
            '{layout}': {
                color: theme.text.secondary
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
        '&:not({checked}) {icon}': {
            color: theme.text.secondary
        },
        '&': theme.checkbox ? theme.checkbox.root : null
    },
    layout: {
        display: 'inline-flex',
        alignItems: 'baseline',
        cursor: 'pointer',
        marginBefore: '16px',
        paddingTop: '12px',
        paddingBottom: '12px'
    },
    icon: {
        position: 'relative',
        marginAfter: '8px',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '16px',
        height: '16px',
        userSelect: 'none',
        '&::before, &::after': tslib_1.__assign({ content: "''" }, LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto', boxSizing: 'border-box' }),
        // border icon
        '&::before': {
            border: 'solid 2px',
            borderRadius: '2px'
        },
        svg: {
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
        },
    },
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
/**
 * This allows it to support [(ngModel)].
 * @ignore
 */
export var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LyCheckbox; }),
    multi: true
};
/** Change event object emitted by LyCheckbox. */
var LyCheckboxChange = /** @class */ (function () {
    function LyCheckboxChange() {
    }
    return LyCheckboxChange;
}());
export { LyCheckboxChange };
/** @docs-private */
var LyCheckboxBase = /** @class */ (function () {
    function LyCheckboxBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyCheckboxBase;
}());
export { LyCheckboxBase };
/** @docs-private */
export var LyCheckboxMixinBase = mixinDisableRipple(LyCheckboxBase);
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
        _this.classes = _this._theme.addStyleSheet(STYLES);
        /** Event emitted when the checkbox's `checked` value changes. */
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
    Object.defineProperty(LyCheckbox.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (val) {
            if (val !== this.color) {
                this._color = val;
                this._colorClass = this._theme.addStyle("lyCheckbox.color:" + val, function (theme) {
                    var _a;
                    return (_a = {},
                        _a["&{checked} {icon}"] = {
                            color: theme.colorOf(val)
                        },
                        _a["&{checked}:not({disabled}) {icon}"] = {
                            boxShadow: shadowBuilder(1, theme.colorOf(val))
                        },
                        _a);
                }, this._el.nativeElement, this._colorClass, STYLE_PRIORITY, STYLES);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCheckbox.prototype, "checked", {
        /**
         * Whether the checkbox is checked.
         */
        get: function () { return this._checked; },
        set: function (val) {
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
        get: function () {
            return this._required;
        },
        set: function (val) {
            this._required = toBoolean(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCheckbox.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (val) {
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
    LyCheckbox.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
        // set default color
        if (!this.color) {
            this.color = DEFAULT_WITH_COLOR;
        }
    };
    LyCheckbox.prototype.ngAfterViewInit = function () {
        var _this = this;
        var focusState = this._focusState.listen(this._inputElement, this._el);
        if (focusState) {
            focusState.subscribe(function (event) {
                if (_this._onFocusByKeyboardState === true) {
                    _this._renderer.removeClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                    _this._onFocusByKeyboardState = false;
                }
                if (event === 'keyboard') {
                    _this._onFocusByKeyboardState = true;
                    _this._renderer.addClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                }
                _this._onTouched();
            });
        }
        this._rippleContainer = this._innerContainer;
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
    };
    LyCheckbox.prototype.ngOnDestroy = function () {
        this._focusState.unlisten(this._el);
        this._removeRippleEvents();
    };
    /** @docs-private */
    LyCheckbox.prototype.writeValue = function (value) {
        this.checked = !!value;
    };
    /** @docs-private */
    LyCheckbox.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /** @docs-private */
    LyCheckbox.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    /** @docs-private */
    LyCheckbox.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Toggles the `checked` state of the checkbox. */
    LyCheckbox.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    LyCheckbox.prototype._onInputClick = function (event) {
        event.stopPropagation();
        if (!this.disabled) {
            this.toggle();
            this._emitChangeEvent();
        }
        this._markForCheck();
    };
    LyCheckbox.prototype._onChange = function (event) {
        event.stopPropagation();
    };
    LyCheckbox.prototype._emitChangeEvent = function () {
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit({
            source: this,
            checked: this.checked
        });
    };
    LyCheckbox.prototype._markForCheck = function () {
        this._changeDetectorRef.markForCheck();
    };
    tslib_1.__decorate([
        ViewChild('innerContainer', { static: false }),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyCheckbox.prototype, "_innerContainer", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], LyCheckbox.prototype, "value", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LyCheckbox.prototype, "color", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LyCheckbox.prototype, "checked", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LyCheckbox.prototype, "required", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LyCheckbox.prototype, "disabled", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], LyCheckbox.prototype, "change", void 0);
    tslib_1.__decorate([
        ViewChild('input', { static: false }),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyCheckbox.prototype, "_inputElement", void 0);
    LyCheckbox = tslib_1.__decorate([
        Component({
            selector: 'ly-checkbox',
            template: "\n<label [className]=\"classes.layout\">\n  <input #input\n  [className]=\"classes.input\"\n  type=\"checkbox\"\n  [checked]=\"checked\"\n  [required]=\"required\"\n  [attr.value]=\"value\"\n  [disabled]=\"disabled\"\n  (click)=\"_onInputClick($event)\"\n  (change)=\"_onChange($event)\"\n  >\n  <div #innerContainer [className]=\"classes.icon\">\n    <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 20 20\">\n      <polyline points=\"4 11 8 15 16 6\"></polyline>\n    </svg>\n  </div>\n  <div #label>\n    <ng-content></ng-content>\n  </div>\n</label>",
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR],
            exportAs: 'lyCheckbox',
            inputs: [
                'disableRipple'
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [LyCommonStyles,
            LyTheme2,
            ElementRef,
            Renderer2,
            ChangeDetectorRef,
            LyFocusState,
            NgZone])
    ], LyCheckbox);
    return LyCheckbox;
}(LyCheckboxMixinBase));
export { LyCheckbox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFlBQVksSUFBSSxjQUFjLEVBQzlCLFlBQVksRUFDWixRQUFRLEVBQ1Isa0JBQWtCLEVBRWxCLFNBQVMsRUFDVCxhQUFhLEVBQ1osTUFBTSxXQUFXLENBQUM7QUFFckIsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUM7QUFDcEMsSUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFFckMsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDaEQsU0FBUyxFQUFFLGNBQWM7SUFDekIsSUFBSSxFQUFFO1FBQ0osV0FBVyxFQUFFLE1BQU07UUFDbkIsWUFBWSxFQUFFLE9BQU87UUFDckIsT0FBTyxFQUFFLGFBQWE7UUFDdEIsMENBQTBDLEVBQUU7WUFDMUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTztTQUM5QjtRQUNELGFBQWEsRUFBRTtZQUNiLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTO2FBQzVCO1NBQ0Y7UUFDRCxvQ0FBb0MsRUFBRTtZQUNwQyxNQUFNLEVBQUUsQ0FBQztZQUNULFVBQVUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU87U0FDbkM7UUFDRCxvQ0FBb0MsRUFBRTtZQUNwQyxTQUFTLEVBQUUsWUFBWTtZQUN2QixPQUFPLEVBQUUsR0FBRztZQUNaLFlBQVksRUFBRSxLQUFLO1NBQ3BCO1FBQ0QseUJBQXlCLEVBQUU7WUFDekIsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUztTQUM1QjtRQUNELEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtLQUNqRDtJQUNELE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLGFBQWEsRUFBRSxNQUFNO0tBQ3RCO0lBQ0QsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsU0FBUyxFQUFFLE1BQU07UUFDakIsWUFBWSxFQUFFLE1BQU07UUFDcEIsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsTUFBTTtRQUNkLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLHFCQUFxQixxQkFDbkIsT0FBTyxFQUFFLElBQUksSUFDVixnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLE1BQU0sRUFDZCxNQUFNLEVBQUUsTUFBTSxFQUNkLFNBQVMsRUFBRSxZQUFZLEdBQ3hCO1FBQ0QsY0FBYztRQUNkLFdBQVcsRUFBRTtZQUNYLE1BQU0sRUFBRSxXQUFXO1lBQ25CLFlBQVksRUFBRSxLQUFLO1NBQ3BCO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2dCQUNaLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPO2dCQUN4QyxXQUFXLEVBQUUsQ0FBQztnQkFDZCxhQUFhLEVBQUUsT0FBTztnQkFDdEIsY0FBYyxFQUFFLE9BQU87Z0JBQ3ZCLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixnQkFBZ0IsRUFBRSxNQUFNO2FBQ3pCO1NBQ0Y7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLGtCQUFrQixFQUFFO1lBQ2xCLFVBQVUsRUFBRSxjQUFjO1NBQzNCO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsZ0JBQWdCLEVBQUUsQ0FBQztTQUNwQjtLQUNGO0lBQ0QsS0FBSyx1QkFDQSxnQkFBZ0IsQ0FBQyxjQUFjLENBQ25DO0lBQ0QsaUJBQWlCLEVBQUUsRUFBRztJQUN0QixRQUFRLEVBQUU7UUFDUixXQUFXLEVBQUU7WUFDWCxVQUFVLEVBQUUsUUFBUTtTQUNyQjtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxvQkFBb0I7U0FDNUI7S0FDRjtJQUNELFVBQVUsRUFBRTtRQUNWLHVCQUF1QixFQUFFO1lBQ3ZCLFVBQVUsRUFBRSxTQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsV0FBTSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFPO1NBQzVGO0tBQ0Y7Q0FDRixDQUFDLEVBaEcrQyxDQWdHL0MsQ0FBQztBQUVIOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxJQUFNLGtDQUFrQyxHQUFRO0lBQ3JELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsVUFBVSxFQUFWLENBQVUsQ0FBQztJQUN6QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRixpREFBaUQ7QUFDakQ7SUFBQTtJQUtBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFMRCxJQUtDOztBQUVELG9CQUFvQjtBQUNwQjtJQUNFLHdCQUNTLE1BQWdCLEVBQ2hCLE9BQWU7UUFEZixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDcEIsQ0FBQztJQUNQLHFCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7O0FBRUQsb0JBQW9CO0FBQ3BCLE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBYXRFO0lBQWdDLHNDQUFtQjtJQXVGakQsb0JBQ1MsYUFBNkIsRUFDcEMsTUFBZ0IsRUFDUixHQUFlLEVBQ2YsU0FBb0IsRUFDcEIsa0JBQXFDLEVBQ3JDLFdBQXlCLEVBQ2pDLE1BQWM7UUFQaEIsWUFTRSxrQkFBTSxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBT3RCO1FBZlEsbUJBQWEsR0FBYixhQUFhLENBQWdCO1FBRTVCLFNBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixlQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsaUJBQVcsR0FBWCxXQUFXLENBQWM7UUE1Rm5DOzs7V0FHRztRQUNNLGFBQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQXdFckQsaUVBQWlFO1FBQzlDLFlBQU0sR0FDckIsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFLekMsZ0JBQVUsR0FBYyxjQUFPLENBQUMsQ0FBQztRQUN6QixtQ0FBNkIsR0FBeUIsY0FBTyxDQUFDLENBQUM7UUFZckUsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2hDLEtBQUksQ0FBQyxhQUFhLEdBQUc7WUFDbkIsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsZUFBZTtZQUN2QixvQkFBb0IsRUFBRSxHQUFHO1NBQzFCLENBQUM7O0lBQ0osQ0FBQztJQXJGRCxzQkFBSSw2QkFBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFVLEdBQVc7WUFDbkIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsc0JBQW9CLEdBQUssRUFBRSxVQUFDLEtBQXFCOztvQkFBSyxPQUFBO3dCQUM1RixHQUFDLG1CQUFtQixJQUFHOzRCQUNyQixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7eUJBQzFCO3dCQUNELEdBQUMsbUNBQW1DLElBQUc7NEJBQ3JDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2hEOzJCQUNEO2dCQVA0RixDQU81RixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZFO1FBQ0gsQ0FBQzs7O09BYkE7SUFtQkQsc0JBQUksK0JBQU87UUFKWDs7V0FFRzthQUVILGNBQXlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDaEQsVUFBWSxHQUFZO1lBQ3RCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixpQ0FBaUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdkIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFFO1lBQ0gsSUFBSTtZQUNKLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDOzs7T0FaK0M7SUFlaEQsc0JBQUksZ0NBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO2FBQ0QsVUFBYSxHQUFZO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUhBO0lBS0Qsc0JBQUksZ0NBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO2FBQ0QsVUFBYSxHQUFZO1lBQ3ZCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDeEU7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDM0U7Z0JBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQzs7O09BWkE7SUEwQ0QsNkJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFRCxvQ0FBZSxHQUFmO1FBQUEsaUJBdUJDO1FBdEJDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pFLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7Z0JBQ3pCLElBQUksS0FBSSxDQUFDLHVCQUF1QixLQUFLLElBQUksRUFBRTtvQkFDekMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNuRixLQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO2lCQUN0QztnQkFDRCxJQUFJLEtBQUssS0FBSyxVQUFVLEVBQUU7b0JBQ3hCLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7b0JBQ3BDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztpQkFDakY7Z0JBQ0QsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUU3Qyw2QkFBNkI7UUFDN0IsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLHNCQUFzQixDQUFDO1NBQzdDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsZ0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLCtCQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLHFDQUFnQixHQUFoQixVQUFpQixFQUF3QjtRQUN2QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsc0NBQWlCLEdBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9CQUFvQjtJQUNwQixxQ0FBZ0IsR0FBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELG1EQUFtRDtJQUNuRCwyQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFhLEdBQWIsVUFBYyxLQUFZO1FBQ3hCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLEtBQVk7UUFDcEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxxQ0FBZ0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsTUFBTSxFQUFFLElBQUk7WUFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGtDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFsTCtDO1FBQS9DLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzswQ0FBa0IsVUFBVTt1REFBaUI7SUFFbkY7UUFBUixLQUFLLEVBQUU7OzZDQUFlO0lBR3ZCO1FBREMsS0FBSyxFQUFFOzs7MkNBR1A7SUFtQkQ7UUFEQyxLQUFLLEVBQUU7Ozs2Q0FDd0M7SUFlaEQ7UUFEQyxLQUFLLEVBQUU7Ozs4Q0FHUDtJQUtEO1FBREMsS0FBSyxFQUFFOzs7OENBR1A7SUFlUztRQUFULE1BQU0sRUFBRTswQ0FBa0IsWUFBWTs4Q0FDRTtJQUdGO1FBQXRDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7MENBQWdCLFVBQVU7cURBQW1CO0lBbEZ4RSxVQUFVO1FBWHRCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLHNqQkFBNEI7WUFDNUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7WUFDL0MsUUFBUSxFQUFFLFlBQVk7WUFDdEIsTUFBTSxFQUFFO2dCQUNOLGVBQWU7YUFDaEI7U0FDRixDQUFDO2lEQXlGd0IsY0FBYztZQUM1QixRQUFRO1lBQ0gsVUFBVTtZQUNKLFNBQVM7WUFDQSxpQkFBaUI7WUFDeEIsWUFBWTtZQUN6QixNQUFNO09BOUZMLFVBQVUsQ0FpTXRCO0lBQUQsaUJBQUM7Q0FBQSxBQWpNRCxDQUFnQyxtQkFBbUIsR0FpTWxEO1NBak1ZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Q29yZVN0eWxlcyBhcyBMeUNvbW1vblN0eWxlcyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgdG9Cb29sZWFuLFxuICBzaGFkb3dCdWlsZGVyXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdhY2NlbnQnO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgcm9vdDoge1xuICAgIG1hcmdpbkFmdGVyOiAnMTZweCcsXG4gICAgbWFyZ2luQmVmb3JlOiAnLTE2cHgnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgJyZ7ZGlzYWJsZWR9Om5vdCh7Y2hlY2tlZH0pIHtpY29ufTpiZWZvcmUnOiB7XG4gICAgICBjb2xvcjogdGhlbWUuZGlzYWJsZWQuZGVmYXVsdFxuICAgIH0sXG4gICAgJyZ7ZGlzYWJsZWR9Jzoge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgJ3tsYXlvdXR9Jzoge1xuICAgICAgICBjb2xvcjogdGhlbWUudGV4dC5zZWNvbmRhcnlcbiAgICAgIH1cbiAgICB9LFxuICAgICcme2Rpc2FibGVkfXtjaGVja2VkfSB7aWNvbn06YmVmb3JlJzoge1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUuZGlzYWJsZWQuZGVmYXVsdFxuICAgIH0sXG4gICAgJyZ7b25Gb2N1c0J5S2V5Ym9hcmR9IHtpY29ufTo6YWZ0ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICcwIDAgMCAxMnB4JyxcbiAgICAgIG9wYWNpdHk6IC4xMyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICB9LFxuICAgICcmOm5vdCh7Y2hlY2tlZH0pIHtpY29ufSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LnNlY29uZGFyeVxuICAgIH0sXG4gICAgJyYnOiB0aGVtZS5jaGVja2JveCA/IHRoZW1lLmNoZWNrYm94LnJvb3QgOiBudWxsXG4gIH0sXG4gIGxheW91dDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBtYXJnaW5CZWZvcmU6ICcxNnB4JyxcbiAgICBwYWRkaW5nVG9wOiAnMTJweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzEycHgnXG4gIH0sXG4gIGljb246IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW5BZnRlcjogJzhweCcsXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXG4gICAgd2lkdGg6ICcxNnB4JyxcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgJyY6OmJlZm9yZSwgJjo6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiBgJydgLFxuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgd2lkdGg6ICcxNnB4JyxcbiAgICAgIGhlaWdodDogJzE2cHgnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICAgIH0sXG4gICAgLy8gYm9yZGVyIGljb25cbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgYm9yZGVyOiAnc29saWQgMnB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJweCdcbiAgICB9LFxuICAgIHN2Zzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBwb2x5bGluZToge1xuICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgIHN0cm9rZTogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICAgICAgICBzdHJva2VMaW5lam9pbjogJ3JvdW5kJyxcbiAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiAnMThweCcsXG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6ICcxOHB4J1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNoZWNrZWQ6IHtcbiAgICAnJiB7aWNvbn06OmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gICAgfSxcbiAgICAnJiB7aWNvbn0gcG9seWxpbmUnOiB7XG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiAwXG4gICAgfVxuICB9LFxuICBpbnB1dDoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMudmlzdWFsbHlIaWRkZW5cbiAgfSxcbiAgb25Gb2N1c0J5S2V5Ym9hcmQ6IHsgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICAnJiB7aW5wdXR9Jzoge1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICB9LFxuICAgICcmIHtpY29ufSc6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgYW5pbWF0aW9uczoge1xuICAgICcmIHtpY29ufSBzdmcgcG9seWxpbmUnOiB7XG4gICAgICB0cmFuc2l0aW9uOiBgYWxsICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH1gXG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBUaGlzIGFsbG93cyBpdCB0byBzdXBwb3J0IFsobmdNb2RlbCldLlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlDaGVja2JveCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKiogQ2hhbmdlIGV2ZW50IG9iamVjdCBlbWl0dGVkIGJ5IEx5Q2hlY2tib3guICovXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveENoYW5nZSB7XG4gIC8qKiBUaGUgc291cmNlIEx5Q2hlY2tib3ggb2YgdGhlIGV2ZW50LiAqL1xuICBzb3VyY2U6IEx5Q2hlY2tib3g7XG4gIC8qKiBUaGUgbmV3IGBjaGVja2VkYCB2YWx1ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlDaGVja2JveE1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShMeUNoZWNrYm94QmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0xZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBleHBvcnRBczogJ2x5Q2hlY2tib3gnLFxuICBpbnB1dHM6IFtcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94IGV4dGVuZHMgTHlDaGVja2JveE1peGluQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJvdGVjdGVkIF9jb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9pbmRldGVybWluYXRlOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2NoZWNrZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQ7XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG4gIEBWaWV3Q2hpbGQoJ2lubmVyQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9pbm5lckNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIC8qKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCAqL1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlDaGVja2JveC5jb2xvcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICBbYCZ7Y2hlY2tlZH0ge2ljb259YF06IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZih2YWwpXG4gICAgICAgIH0sXG4gICAgICAgIFtgJntjaGVja2VkfTpub3Qoe2Rpc2FibGVkfSkge2ljb259YF06IHtcbiAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoMSwgdGhlbWUuY29sb3JPZih2YWwpKVxuICAgICAgICB9XG4gICAgICB9KSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcywgU1RZTEVfUFJJT1JJVFksIFNUWUxFUyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7IH1cbiAgc2V0IGNoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgLy8gaWYgKG5ld1ZhbCAhPT0gdGhpcy5jaGVja2VkKSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgLy8gfVxuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjaGVja2JveCdzIGBjaGVja2VkYCB2YWx1ZSBjaGFuZ2VzLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8THlDaGVja2JveENoYW5nZT4gPVxuICAgICAgbmV3IEV2ZW50RW1pdHRlcjxMeUNoZWNrYm94Q2hhbmdlPigpO1xuXG4gIC8qKiBUaGUgbmF0aXZlIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+YCBlbGVtZW50ICovXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIF9pbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgX29uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG4gIHByaXZhdGUgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9jb21tb25TdHlsZXM6IEx5Q29tbW9uU3R5bGVzLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHN1cGVyKF90aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsO1xuICAgIHRoaXMuX3JpcHBsZUNvbmZpZyA9IHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgcmFkaXVzOiAnY29udGFpbmVyU2l6ZScsXG4gICAgICBwZXJjZW50YWdlVG9JbmNyZWFzZTogMTUwXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICAvLyBzZXQgZGVmYXVsdCBjb2xvclxuICAgIGlmICghdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy5jb2xvciA9IERFRkFVTFRfV0lUSF9DT0xPUjtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2lucHV0RWxlbWVudCwgdGhpcy5fZWwpO1xuICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy5faW5uZXJDb250YWluZXI7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBgY2hlY2tlZGAgc3RhdGUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgfVxuXG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KCk7XG4gICAgfVxuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX29uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW1pdENoYW5nZUV2ZW50KCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy5jaGVja2VkKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiJdfQ==