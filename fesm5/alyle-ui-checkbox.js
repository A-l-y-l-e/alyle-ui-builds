import { __assign, __extends, __decorate, __metadata } from 'tslib';
import { forwardRef, EventEmitter, ViewChild, ElementRef, Input, Output, Component, ViewEncapsulation, ChangeDetectionStrategy, Renderer2, ChangeDetectorRef, NgZone, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LY_COMMON_STYLES, mixinDisableRipple, shadowBuilder, toBoolean, LyCoreStyles, LyTheme2, LyFocusState, LyCommonModule } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

var STYLE_PRIORITY = -2;
var DEFAULT_WITH_COLOR = 'accent';
var DEFAULT_DISABLE_RIPPLE = false;
var STYLES = function (theme) { return ({
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
        '&::before, &::after': __assign({ content: "''" }, LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto', boxSizing: 'border-box' }),
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
 */
var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
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
/** @docs-private */
var LyCheckboxBase = /** @class */ (function () {
    function LyCheckboxBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyCheckboxBase;
}());
/** @docs-private */
var LyCheckboxMixinBase = mixinDisableRipple(LyCheckboxBase);
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
    __decorate([
        ViewChild('innerContainer', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyCheckbox.prototype, "_innerContainer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], LyCheckbox.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyCheckbox.prototype, "color", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyCheckbox.prototype, "checked", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyCheckbox.prototype, "required", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyCheckbox.prototype, "disabled", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], LyCheckbox.prototype, "change", void 0);
    __decorate([
        ViewChild('input', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyCheckbox.prototype, "_inputElement", void 0);
    LyCheckbox = __decorate([
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
        __metadata("design:paramtypes", [LyCoreStyles,
            LyTheme2,
            ElementRef,
            Renderer2,
            ChangeDetectorRef,
            LyFocusState,
            NgZone])
    ], LyCheckbox);
    return LyCheckbox;
}(LyCheckboxMixinBase));

var LyCheckboxModule = /** @class */ (function () {
    function LyCheckboxModule() {
    }
    LyCheckboxModule = __decorate([
        NgModule({
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
        })
    ], LyCheckboxModule);
    return LyCheckboxModule;
}());

export { LY_CHECKBOX_CONTROL_VALUE_ACCESSOR, LyCheckbox, LyCheckboxBase, LyCheckboxChange, LyCheckboxMixinBase, LyCheckboxModule, STYLES };
//# sourceMappingURL=alyle-ui-checkbox.js.map
