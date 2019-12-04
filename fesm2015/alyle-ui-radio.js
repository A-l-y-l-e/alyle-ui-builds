import { __decorate, __param } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, Input, Output, ContentChildren, Component, ChangeDetectionStrategy, Optional, NgZone, ViewChild, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { styleTemplateToString, StyleCollection, LY_COMMON_STYLES, LyTheme2, mixinDisableRipple, toBoolean, LyCoreStyles, LyFocusState, StyleRenderer, LyHostClass, LyCommonModule } from '@alyle/ui';

var LyRadio_1;
const STYLE_PRIORITY = -2;
const DEFAULT_DISABLE_RIPPLE = false;
const DEFAULT_COLOR = 'accent';
const LY_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LyRadioGroup),
    multi: true
};
let idx = 0;
class UndefinedValue {
    constructor() { }
}
const STYLES = (theme, ref) => {
    const radio = ref.selectorsOf(STYLES);
    const { after, before } = theme;
    return {
        $priority: STYLE_PRIORITY,
        root: () => (className) => `${className}{display:inline-block;}${styleTemplateToString(((theme.radio
            && theme.radio.root
            && (theme.radio.root instanceof StyleCollection
                ? theme.radio.root.setTransformer(fn => fn(radio))
                : theme.radio.root(radio)))), `${className}`)}`,
        radio: () => (className) => `${className}{display:inline-block;margin-${after}:16px;margin-${before}:-16px;}${className}${radio.checked} ${radio.container} div:nth-child(1){transform:scale(1.25);}${className}${radio.checked} ${radio.container} div:nth-child(2){transform:scale(0.8);}${className}${radio.onFocusByKeyboard} ${radio.container}::after{box-shadow:0 0 0 12px;background:currentColor;opacity:.13;border-radius:50%;}`,
        label: (className) => `${className}{margin-${before}:16px;cursor:pointer;white-space:nowrap;position:relative;display:flex;align-items:baseline;padding-top:12px;padding-bottom:12px;}`,
        labelContent: null,
        container: (className) => `${className}{position:relative;margin-${before}:.125em;margin-${after}:.5em;margin-top:auto;margin-bottom:auto;width:16px;height:16px;}${className} div{margin:auto;border-radius:50%;width:1em;height:1em;box-sizing:border-box;}${className}::after{content:'';width:16px;height:16px;margin:auto;}${styleTemplateToString((LY_COMMON_STYLES.fill), `${className}::after`)}${className} div:nth-child(2){background:currentColor;transform:scale(0);}${className} div:nth-child(1){transform:scale(1);border:solid .08em currentColor;color:${theme.text.disabled};}`,
        checked: null,
        _animations: () => (className) => `${className} ${radio.container} div{transition:transform cubic-bezier(.1, 1, 0.5, 1);transition-duration:250ms;}`,
        onFocusByKeyboard: null,
        disabled: () => (className) => `${className}{color:${theme.disabled.contrast};}${className} ${radio.container} div{color:${theme.disabled.contrast}!important;}`
    };
};
let LyRadioGroup = class LyRadioGroup {
    constructor(elementRef, renderer, _theme, _cd) {
        this._theme = _theme;
        this._cd = _cd;
        /** @docs-private */
        this.classes = this._theme.renderStyleSheet(STYLES);
        /** @docs-private */
        this.name = `ly-radio-name-${idx++}`;
        this.change = new EventEmitter();
        this.color = 'accent';
        /** The method to be called in order to update ngModel */
        this._controlValueAccessorChangeFn = () => { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * @docs-private
         */
        this.onTouched = () => { };
        renderer.addClass(elementRef.nativeElement, this.classes.root);
    }
    set value(val) {
        if (this._value !== val) {
            if (this._radios) {
                this._updateCheckFromValue(val);
            }
        }
    }
    get value() {
        return this._value;
    }
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    _touch() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    /** @docs-private */
    writeValue(value) {
        if (!!this._radios) {
            this.value = value;
            this._markForCheck();
        }
    }
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     * @docs-private
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     * @docs-private
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param _isDisabled Whether the control should be disabled.
     * @docs-private
     */
    setDisabledState(_isDisabled) {
        // this.disabled = isDisabled;
        this._markForCheck();
    }
    _updateCheckFromValue(val) {
        let newChecked;
        this._radios.forEach(radioButton => {
            if (val === radioButton.value) {
                this.updatevalue(val);
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
    }
    /** @docs-private */
    updatevalue(value) {
        this._value = value;
        this._controlValueAccessorChangeFn(value);
        this.change.emit();
        this._markForCheck();
    }
    _markForCheck() {
        this._cd.markForCheck();
    }
    _radioResetChecked() {
        this._radios.forEach(_ => _._setCheckedToFalsy());
    }
};
/** @docs-private */
LyRadioGroup.и = 'LyRadioGroup';
LyRadioGroup.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: ChangeDetectorRef }
];
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
    ContentChildren(forwardRef(() => LyRadio))
], LyRadioGroup.prototype, "_radios", void 0);
LyRadioGroup = __decorate([
    Component({
        selector: 'ly-radio-group',
        template: `<ng-content></ng-content>`,
        providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush,
        preserveWhitespaces: false,
        exportAs: 'lyRadioGroup'
    })
], LyRadioGroup);
/** @docs-private */
class LyRadioBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
const LyRadioMixinBase = mixinDisableRipple(LyRadioBase);
let LyRadio = LyRadio_1 = class LyRadio extends LyRadioMixinBase {
    constructor(
    /** @docs-private */
    radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, _coreStyles, _focusState, _styleRenderer) {
        super(theme, ngZone);
        this.radioGroup = radioGroup;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.changeDetectorRef = changeDetectorRef;
        this._coreStyles = _coreStyles;
        this._focusState = _focusState;
        this._styleRenderer = _styleRenderer;
        /** @docs-private */
        this.classes = this.radioGroup.classes;
        /** @docs-private */
        this.id = `ly-radio-id-${idx++}`;
        /** @docs-private */
        this.name = '';
        this._value = null;
        this._checked = false;
        this.change = new EventEmitter();
        this._triggerElement = this._elementRef;
        this._rippleConfig = {
            centered: true,
            radius: 'containerSize',
            percentageToIncrease: 150
        };
        _renderer.addClass(_elementRef.nativeElement, radioGroup.classes.radio);
    }
    set value(val) {
        if (this._value !== val) {
            this._value = val;
        }
    }
    get value() { return this._value; }
    set color(val) {
        if (this._color !== val) {
            this._color = val;
            this[0x1] = this._styleRenderer.add(`${LyRadio_1.и}--color-${val}`, (theme, ref) => {
                const { checked, container } = ref.selectorsOf(STYLES);
                return (className) => `${className}${checked} ${container},${className}${checked} ${container} div:nth-child(1),${className} ${container} div:nth-child(2){color:${theme.colorOf(val)};}`;
            }, STYLE_PRIORITY, this[0x1]);
        }
    }
    get color() { return this._color; }
    set checked(val) {
        const newCheckedState = toBoolean(val);
        const before = this._checked;
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
    }
    get checked() {
        return this._checked;
    }
    /** @docs-private */
    get inputId() {
        return `${this.id}-input`;
    }
    get disabled() { return this._disabled; }
    set disabled(value) {
        const newVal = toBoolean(value);
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
    }
    ngOnInit() {
        if (this.radioGroup) {
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
        if (!this.color) {
            this.color = this.radioGroup.color || DEFAULT_COLOR;
        }
    }
    ngAfterViewInit() {
        this._rippleContainer = this._radioContainer;
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        const focusState = this._focusState.listen(this._input, this._elementRef);
        if (focusState) {
            focusState.subscribe((event) => {
                if (event === 'keyboard') {
                    this._renderer.addClass(this._elementRef.nativeElement, this.classes.onFocusByKeyboard);
                }
                else if (event == null) {
                    this._renderer.removeClass(this._elementRef.nativeElement, this.classes.onFocusByKeyboard);
                }
            });
        }
    }
    _markForCheck() {
        this.changeDetectorRef.markForCheck();
    }
    ngOnDestroy() {
        this._focusState.unlisten(this._elementRef);
        this._removeRippleEvents();
    }
    _onInputChange(event) {
        event.stopPropagation();
        this.radioGroup._updateCheckFromValue(this.value);
        this.radioGroup._touch();
        this._addAnim();
    }
    _addAnim() {
        if (!this._animClass) {
            this._renderer.addClass(this._elementRef.nativeElement, this.classes._animations);
            this._animClass = this.classes._animations;
        }
    }
    _onInputClick(event) { event.stopPropagation(); }
    _setCheckedToFalsy() {
        this.checked = false;
    }
};
/** @docs-private */
LyRadio.и = 'LyRadio';
LyRadio.ctorParameters = () => [
    { type: LyRadioGroup, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: LyCoreStyles },
    { type: LyFocusState },
    { type: StyleRenderer }
];
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
let LyRadioModule = class LyRadioModule {
};
LyRadioModule = __decorate([
    NgModule({
        imports: [CommonModule, FormsModule, LyCommonModule],
        exports: [LyRadioGroup, LyRadio],
        declarations: [LyRadioGroup, LyRadio],
    })
], LyRadioModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LY_RADIO_CONTROL_VALUE_ACCESSOR, LyRadio, LyRadioBase, LyRadioGroup, LyRadioMixinBase, LyRadioModule, STYLES, UndefinedValue };
//# sourceMappingURL=alyle-ui-radio.js.map
