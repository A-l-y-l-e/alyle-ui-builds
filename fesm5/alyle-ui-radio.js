import { __decorate, __extends, __param } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, Input, Output, ContentChildren, Component, ChangeDetectionStrategy, Optional, NgZone, ViewChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { st2c, StyleCollection, LY_COMMON_STYLES, LyTheme2, mixinDisableRipple, toBoolean, LyCoreStyles, LyFocusState, StyleRenderer, LyHostClass, LyCommonModule } from '@alyle/ui';

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
var STYLES = function (theme, ref) {
    var radio = ref.selectorsOf(STYLES);
    var after = theme.after, before = theme.before;
    return {
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{display:inline-block;}" + st2c(((theme.radio
            && theme.radio.root
            && (theme.radio.root instanceof StyleCollection
                ? theme.radio.root.setTransformer(function (fn) { return fn(radio); })
                : theme.radio.root(radio)))), "" + className); }; },
        radio: function () { return function (className) { return className + "{display:inline-block;margin-" + after + ":16px;margin-" + before + ":-16px;}" + className + radio.checked + " " + radio.container + " div:nth-child(1){transform:scale(1.25);}" + className + radio.checked + " " + radio.container + " div:nth-child(2){transform:scale(0.8);}" + className + radio.onFocusByKeyboard + " " + radio.container + "::after{box-shadow:0 0 0 12px;background:currentColor;opacity:.13;border-radius:50%;}"; }; },
        label: function (className) { return className + "{margin-" + before + ":16px;cursor:pointer;white-space:nowrap;position:relative;display:flex;align-items:baseline;padding-top:12px;padding-bottom:12px;}"; },
        labelContent: null,
        container: function (className) { return className + "{position:relative;margin-" + before + ":.125em;margin-" + after + ":.5em;margin-top:auto;margin-bottom:auto;width:16px;height:16px;}" + className + " div{margin:auto;border-radius:50%;width:1em;height:1em;box-sizing:border-box;}" + className + "::after{content:'';width:16px;height:16px;margin:auto;}" + st2c((LY_COMMON_STYLES.fill), className + "::after") + className + " div:nth-child(2){background:currentColor;transform:scale(0);}" + className + " div:nth-child(1){transform:scale(1);border:solid .08em currentColor;color:" + theme.text.disabled + ";}"; },
        checked: null,
        _animations: function () { return function (className) { return className + " " + radio.container + " div{transition:transform cubic-bezier(.1, 1, 0.5, 1);transition-duration:250ms;}"; }; },
        onFocusByKeyboard: null,
        disabled: function () { return function (className) { return className + "{color:" + theme.disabled.contrast + ";}" + className + " " + radio.container + " div{color:" + theme.disabled.contrast + "!important;}"; }; }
    };
};
var LyRadioGroup = /** @class */ (function () {
    function LyRadioGroup(elementRef, renderer, _theme, _cd) {
        this._theme = _theme;
        this._cd = _cd;
        /** @docs-private */
        this.classes = this._theme.renderStyleSheet(STYLES);
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
    /** @docs-private */
    LyRadioGroup.и = 'LyRadioGroup';
    LyRadioGroup.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], LyRadioGroup.prototype, "value", null);
    __decorate([
        Output()
    ], LyRadioGroup.prototype, "change", void 0);
    __decorate([
        Input()
    ], LyRadioGroup.prototype, "color", void 0);
    __decorate([
        ContentChildren(forwardRef(function () { return LyRadio; }))
    ], LyRadioGroup.prototype, "_radios", void 0);
    LyRadioGroup = __decorate([
        Component({
            selector: 'ly-radio-group',
            template: "<ng-content></ng-content>",
            providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            exportAs: 'lyRadioGroup'
        })
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
    radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, _coreStyles, _focusState, _styleRenderer) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this.radioGroup = radioGroup;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this._coreStyles = _coreStyles;
        _this._focusState = _focusState;
        _this._styleRenderer = _styleRenderer;
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
    LyRadio_1 = LyRadio;
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
                this[0x1] = this._styleRenderer.add(LyRadio_1.и + "--color-" + val, function (theme, ref) {
                    var _a = ref.selectorsOf(STYLES), checked = _a.checked, container = _a.container;
                    return function (className) { return "" + className + checked + " " + container + "," + className + checked + " " + container + " div:nth-child(1)," + className + " " + container + " div:nth-child(2){color:" + theme.colorOf(val) + ";}"; };
                }, STYLE_PRIORITY, this[0x1]);
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
    var LyRadio_1;
    /** @docs-private */
    LyRadio.и = 'LyRadio';
    LyRadio.ctorParameters = function () { return [
        { type: LyRadioGroup, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: LyCoreStyles },
        { type: LyFocusState },
        { type: StyleRenderer }
    ]; };
    __decorate([
        ViewChild('_input', { static: false })
    ], LyRadio.prototype, "_input", void 0);
    __decorate([
        ViewChild('_radioContainer', { static: false })
    ], LyRadio.prototype, "_radioContainer", void 0);
    __decorate([
        ViewChild('_labelContainer', { static: false })
    ], LyRadio.prototype, "_labelContainer", void 0);
    __decorate([
        Output()
    ], LyRadio.prototype, "change", void 0);
    __decorate([
        Input()
    ], LyRadio.prototype, "value", null);
    __decorate([
        Input()
    ], LyRadio.prototype, "color", null);
    __decorate([
        Input()
    ], LyRadio.prototype, "checked", null);
    __decorate([
        Input()
    ], LyRadio.prototype, "disabled", null);
    LyRadio = LyRadio_1 = __decorate([
        Component({
            selector: 'ly-radio',
            template: "<label #_labelContainer [attr.for]=\"inputId\" [className]=\"classes.label\">\n  <input #_input\n    [className]=\"_coreStyles.classes.visuallyHidden\"\n    [id]=\"inputId\"\n    [checked]=\"checked\"\n    [name]=\"name\"\n    (change)=\"_onInputChange($event)\"\n    (click)=\"_onInputClick($event)\"\n    [disabled]=\"disabled\"\n    type=\"radio\"\n    >\n  <div #_radioContainer [className]=\"classes.container\">\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n    <div [className]=\"_coreStyles.classes.fill\"></div>\n  </div>\n  <div\n  [className]=\"classes.labelContent\">\n    <ng-content></ng-content>\n  </div>\n</label>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            preserveWhitespaces: false,
            inputs: [
                'disableRipple'
            ],
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        }),
        __param(0, Optional())
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

/**
 * Generated bundle index. Do not edit.
 */

export { LY_RADIO_CONTROL_VALUE_ACCESSOR, LyRadio, LyRadioBase, LyRadioGroup, LyRadioMixinBase, LyRadioModule, STYLES, UndefinedValue };
//# sourceMappingURL=alyle-ui-radio.js.map
