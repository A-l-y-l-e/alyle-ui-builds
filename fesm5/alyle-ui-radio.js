import { __assign, __decorate, __metadata, __extends, __param } from 'tslib';
import { forwardRef, Input, Output, EventEmitter, ContentChildren, QueryList, Component, ChangeDetectionStrategy, ElementRef, Renderer2, ChangeDetectorRef, ViewChild, Optional, NgZone, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LY_COMMON_STYLES, LyTheme2, mixinDisableRipple, toBoolean, LyCoreStyles, LyFocusState, LyCommonModule } from '@alyle/ui';

var STYLE_PRIORITY = -2;
var DEFAULT_DISABLE_RIPPLE = false;
var DEFAULT_COLOR = 'accent';
var LY_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LyRadioGroup; }),
    multi: true
};
var idx = 0;
var UndefinedValue = /** @class */ (function () {
    function UndefinedValue() {
    }
    return UndefinedValue;
}());
var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: {
        display: 'inline-block',
        '&': theme.radio ? theme.radio.root : null
    },
    radio: {
        display: 'inline-block',
        marginAfter: '16px',
        marginBefore: '-16px',
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
        marginBefore: '16px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        position: 'relative',
        display: 'flex',
        alignItems: 'baseline',
        paddingTop: '12px',
        paddingBottom: '12px'
    },
    labelContent: null,
    container: {
        position: 'relative',
        marginBefore: '.125em',
        marginAfter: '.5em',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '16px',
        height: '16px',
        'div': {
            margin: 'auto',
            borderRadius: '50%',
            width: '1em',
            height: '1em',
            boxSizing: 'border-box'
        },
        '&::after': __assign({ content: "''" }, LY_COMMON_STYLES.fill, { width: '16px', height: '16px', margin: 'auto' }),
        'div:nth-child(2)': {
            background: 'currentColor',
            transform: 'scale(0)'
        },
        'div:nth-child(1)': {
            transform: 'scale(1)',
            border: 'solid .08em currentColor',
            color: theme.text.disabled
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
            color: theme.disabled.contrast + "!important"
        }
    }
}); };
var LyRadioGroup = /** @class */ (function () {
    function LyRadioGroup(elementRef, renderer, _theme, _cd) {
        this._theme = _theme;
        this._cd = _cd;
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(STYLES);
        /** @docs-private */
        this.name = "ly-radio-name-" + idx++;
        this.change = new EventEmitter();
        this.color = 'accent';
        /** The method to be called in order to update ngModel */
        this._controlValueAccessorChangeFn = function () { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * @docs-private
         */
        this.onTouched = function () { };
        renderer.addClass(elementRef.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyRadioGroup.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            if (this._value !== val) {
                if (this._radios) {
                    this._updateCheckFromValue(val);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    LyRadioGroup.prototype._touch = function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    /** @docs-private */
    LyRadioGroup.prototype.writeValue = function (value) {
        if (!!this._radios) {
            this.value = value;
            this._markForCheck();
        }
    };
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     * @docs-private
     */
    LyRadioGroup.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     * @docs-private
     */
    LyRadioGroup.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param _isDisabled Whether the control should be disabled.
     * @docs-private
     */
    LyRadioGroup.prototype.setDisabledState = function (_isDisabled) {
        // this.disabled = isDisabled;
        this._markForCheck();
    };
    LyRadioGroup.prototype._updateCheckFromValue = function (val) {
        var _this = this;
        var newChecked;
        this._radios.forEach(function (radioButton) {
            if (val === radioButton.value) {
                _this.updatevalue(val);
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
            if (this._value != null) {
                this._value = null;
            }
        }
    };
    /** @docs-private */
    LyRadioGroup.prototype.updatevalue = function (value) {
        this._value = value;
        this._controlValueAccessorChangeFn(value);
        this.change.emit();
        this._markForCheck();
    };
    LyRadioGroup.prototype._markForCheck = function () {
        this._cd.markForCheck();
    };
    LyRadioGroup.prototype._radioResetChecked = function () {
        this._radios.forEach(function (_) { return _._setCheckedToFalsy(); });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LyRadioGroup.prototype, "value", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], LyRadioGroup.prototype, "change", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LyRadioGroup.prototype, "color", void 0);
    __decorate([
        ContentChildren(forwardRef(function () { return LyRadio; })),
        __metadata("design:type", QueryList)
    ], LyRadioGroup.prototype, "_radios", void 0);
    LyRadioGroup = __decorate([
        Component({
            selector: 'ly-radio-group',
            template: "<ng-content></ng-content>",
            providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            exportAs: 'lyRadioGroup'
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LyTheme2,
            ChangeDetectorRef])
    ], LyRadioGroup);
    return LyRadioGroup;
}());
/** @docs-private */
var LyRadioBase = /** @class */ (function () {
    function LyRadioBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyRadioBase;
}());
/** @docs-private */
var LyRadioMixinBase = mixinDisableRipple(LyRadioBase);
var LyRadio = /** @class */ (function (_super) {
    __extends(LyRadio, _super);
    function LyRadio(
    /** @docs-private */
    radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, _coreStyles, _focusState) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this.radioGroup = radioGroup;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this._coreStyles = _coreStyles;
        _this._focusState = _focusState;
        /** @docs-private */
        _this.classes = _this.radioGroup.classes;
        /** @docs-private */
        _this.id = "ly-radio-id-" + idx++;
        /** @docs-private */
        _this.name = '';
        _this._value = null;
        _this._checked = false;
        _this.change = new EventEmitter();
        _this._triggerElement = _this._elementRef;
        _this._rippleConfig = {
            centered: true,
            radius: 'containerSize',
            percentageToIncrease: 150
        };
        _renderer.addClass(_elementRef.nativeElement, radioGroup.classes.radio);
        return _this;
    }
    Object.defineProperty(LyRadio.prototype, "value", {
        get: function () { return this._value; },
        set: function (val) {
            if (this._value !== val) {
                this._value = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "color", {
        get: function () { return this._color; },
        set: function (val) {
            if (this._color !== val) {
                this._color = val;
                this._colorClass = this._theme.addStyle("lyRadio.color:" + val, function (theme) { return ({
                    '&{checked} {container}, &{checked} {container} div:nth-child(1), & {container} div:nth-child(2)': {
                        color: theme.colorOf(val)
                    }
                }); }, this._elementRef.nativeElement, this._colorClass, STYLE_PRIORITY, STYLES);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (val) {
            var newCheckedState = toBoolean(val);
            var before = this._checked;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "inputId", {
        /** @docs-private */
        get: function () {
            return this.id + "-input";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) {
            var newVal = toBoolean(value);
            if (newVal) {
                this._renderer.addClass(this._elementRef.nativeElement, this.classes.disabled);
                this._disabledClass = this.classes.disabled;
            }
            else if (this._disabledClass) {
                this._renderer.removeClass(this._elementRef.nativeElement, this.classes.disabled);
                this._disabledClass = undefined;
            }
            this._disabled = toBoolean(value);
            this._markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    LyRadio.prototype.ngOnInit = function () {
        if (this.radioGroup) {
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
        if (!this.color) {
            this.color = this.radioGroup.color || DEFAULT_COLOR;
        }
    };
    LyRadio.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._rippleContainer = this._radioContainer;
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        var focusState = this._focusState.listen(this._input, this._elementRef);
        if (focusState) {
            focusState.subscribe(function (event) {
                if (event === 'keyboard') {
                    _this._renderer.addClass(_this._elementRef.nativeElement, _this.classes.onFocusByKeyboard);
                }
                else if (event == null) {
                    _this._renderer.removeClass(_this._elementRef.nativeElement, _this.classes.onFocusByKeyboard);
                }
            });
        }
    };
    LyRadio.prototype._markForCheck = function () {
        this.changeDetectorRef.markForCheck();
    };
    LyRadio.prototype.ngOnDestroy = function () {
        this._focusState.unlisten(this._elementRef);
        this._removeRippleEvents();
    };
    LyRadio.prototype._onInputChange = function (event) {
        event.stopPropagation();
        this.radioGroup._updateCheckFromValue(this.value);
        this.radioGroup._touch();
        this._addAnim();
    };
    LyRadio.prototype._addAnim = function () {
        if (!this._animClass) {
            this._renderer.addClass(this._elementRef.nativeElement, this.classes._animations);
            this._animClass = this.classes._animations;
        }
    };
    LyRadio.prototype._onInputClick = function (event) { event.stopPropagation(); };
    LyRadio.prototype._setCheckedToFalsy = function () {
        this.checked = false;
    };
    __decorate([
        ViewChild('_input', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyRadio.prototype, "_input", void 0);
    __decorate([
        ViewChild('_radioContainer', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyRadio.prototype, "_radioContainer", void 0);
    __decorate([
        ViewChild('_labelContainer', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyRadio.prototype, "_labelContainer", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], LyRadio.prototype, "change", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LyRadio.prototype, "value", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LyRadio.prototype, "color", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyRadio.prototype, "checked", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Object])
    ], LyRadio.prototype, "disabled", null);
    LyRadio = __decorate([
        Component({
            selector: 'ly-radio',
            template: "<label #_labelContainer [attr.for]=\"inputId\" [className]=\"classes.label\">\n  <input #_input\n    [className]=\"_coreStyles.classes.visuallyHidden\"\n    [id]=\"inputId\"\n    [checked]=\"checked\"\n    [name]=\"name\"\n    (change)=\"_onInputChange($event)\"\n    (click)=\"_onInputClick($event)\"\n    [disabled]=\"disabled\"\n    type=\"radio\"\n    >\n  <div #_radioContainer [className]=\"classes.container\">\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n  </div>\n  <div\n  [className]=\"classes.labelContent\">\n    <ng-content></ng-content>\n  </div>\n</label>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            inputs: [
                'disableRipple'
            ]
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [LyRadioGroup,
            ElementRef,
            Renderer2,
            LyTheme2,
            ChangeDetectorRef,
            NgZone,
            LyCoreStyles,
            LyFocusState])
    ], LyRadio);
    return LyRadio;
}(LyRadioMixinBase));
var LyRadioModule = /** @class */ (function () {
    function LyRadioModule() {
    }
    LyRadioModule = __decorate([
        NgModule({
            imports: [CommonModule, FormsModule, LyCommonModule],
            exports: [LyRadioGroup, LyRadio],
            declarations: [LyRadioGroup, LyRadio],
        })
    ], LyRadioModule);
    return LyRadioModule;
}());

export { LY_RADIO_CONTROL_VALUE_ACCESSOR, LyRadio, LyRadioBase, LyRadioGroup, LyRadioMixinBase, LyRadioModule, STYLES, UndefinedValue };
//# sourceMappingURL=alyle-ui-radio.js.map
