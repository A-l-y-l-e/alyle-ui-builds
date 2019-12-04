var LyRadio_1;
import * as tslib_1 from "tslib";
import { Component, forwardRef, NgModule, Input, Output, ChangeDetectorRef, OnInit, OnDestroy, ContentChildren, QueryList, Optional, EventEmitter, ChangeDetectionStrategy, NgZone, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyTheme2, LyCoreStyles, toBoolean, mixinDisableRipple, ThemeVariables, LyFocusState, LY_COMMON_STYLES, styleTemplateToString, StyleCollection, LyClasses, StyleTemplate, ThemeRef, LyHostClass, StyleRenderer } from '@alyle/ui';
const STYLE_PRIORITY = -2;
const DEFAULT_DISABLE_RIPPLE = false;
const DEFAULT_COLOR = 'accent';
export const LY_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LyRadioGroup),
    multi: true
};
let idx = 0;
export class UndefinedValue {
    constructor() { }
}
export const STYLES = (theme, ref) => {
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
tslib_1.__decorate([
    Input()
], LyRadioGroup.prototype, "value", null);
tslib_1.__decorate([
    Output()
], LyRadioGroup.prototype, "change", void 0);
tslib_1.__decorate([
    Input()
], LyRadioGroup.prototype, "color", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => LyRadio))
], LyRadioGroup.prototype, "_radios", void 0);
LyRadioGroup = tslib_1.__decorate([
    Component({
        selector: 'ly-radio-group',
        template: `<ng-content></ng-content>`,
        providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush,
        preserveWhitespaces: false,
        exportAs: 'lyRadioGroup'
    })
], LyRadioGroup);
export { LyRadioGroup };
/** @docs-private */
export class LyRadioBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
export const LyRadioMixinBase = mixinDisableRipple(LyRadioBase);
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
tslib_1.__decorate([
    ViewChild('_input', { static: false })
], LyRadio.prototype, "_input", void 0);
tslib_1.__decorate([
    ViewChild('_radioContainer', { static: false })
], LyRadio.prototype, "_radioContainer", void 0);
tslib_1.__decorate([
    ViewChild('_labelContainer', { static: false })
], LyRadio.prototype, "_labelContainer", void 0);
tslib_1.__decorate([
    Output()
], LyRadio.prototype, "change", void 0);
tslib_1.__decorate([
    Input()
], LyRadio.prototype, "value", null);
tslib_1.__decorate([
    Input()
], LyRadio.prototype, "color", null);
tslib_1.__decorate([
    Input()
], LyRadio.prototype, "checked", null);
tslib_1.__decorate([
    Input()
], LyRadio.prototype, "disabled", null);
LyRadio = LyRadio_1 = tslib_1.__decorate([
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
    tslib_1.__param(0, Optional())
], LyRadio);
export { LyRadio };
let LyRadioModule = class LyRadioModule {
};
LyRadioModule = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule, FormsModule, LyCommonModule],
        exports: [LyRadioGroup, LyRadio],
        declarations: [LyRadioGroup, LyRadio],
    })
], LyRadioModule);
export { LyRadioModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmFkaW8vIiwic291cmNlcyI6WyJyYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsUUFBUSxFQUNSLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLFdBQVcsR0FDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFFBQVEsRUFDUixZQUFZLEVBQ1osU0FBUyxFQUNULGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixxQkFBcUIsRUFDckIsZUFBZSxFQUNmLFNBQVMsRUFDVCxhQUFhLEVBQ2IsUUFBUSxFQUNSLFdBQVcsRUFDWCxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFZbkMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFDckMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDO0FBRS9CLE1BQU0sQ0FBQyxNQUFNLCtCQUErQixHQUFRO0lBQ2xELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUYsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBRVosTUFBTSxP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QUFFLE9BQU8sQ0FBQztLQUN0QyxDQUFDO0dBQ1csYUFBYSxDQUFJO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIGZvcndhcmRSZWYsXG4gIE5nTW9kdWxlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPcHRpb25hbCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgTmdab25lLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybXNNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBMeUNvbW1vbk1vZHVsZSxcbiAgTHlUaGVtZTIsXG4gIEx5Q29yZVN0eWxlcyxcbiAgdG9Cb29sZWFuLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBMeUZvY3VzU3RhdGUsXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIFRoZW1lUmVmLFxuICBMeUhvc3RDbGFzcyxcbiAgU3R5bGVSZW5kZXJlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlSYWRpb1RoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgUmFkaW8gQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5UmFkaW9WYXJpYWJsZXMge1xuICByYWRpbz86IEx5UmFkaW9UaGVtZTtcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAnYWNjZW50JztcblxuZXhwb3J0IGNvbnN0IExZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW9Hcm91cCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5sZXQgaWR4ID0gMDtcblxuZXhwb3J0IGNsYXNzIFVuZGVmaW5lZFZhbHVlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVJhZGlvVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IHJhZGlvID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIGNvbnN0IHsgYWZ0ZXIsIGJlZm9yZSB9ID0gdGhlbWU7XG4gIHJldHVybiB7XG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6aW5saW5lLWJsb2NrO30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoXG4gICAgICAgICAgKHRoZW1lLnJhZGlvXG4gICAgICAgICAgICAmJiB0aGVtZS5yYWRpby5yb290XG4gICAgICAgICAgICAmJiAodGhlbWUucmFkaW8ucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICA/IHRoZW1lLnJhZGlvLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4ocmFkaW8pKVxuICAgICAgICAgICAgICA6IHRoZW1lLnJhZGlvLnJvb3QocmFkaW8pKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9YCxcbiAgICByYWRpbzogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tJHthZnRlcn06MTZweDttYXJnaW4tJHtiZWZvcmV9Oi0xNnB4O30ke2NsYXNzTmFtZX0ke3JhZGlvLmNoZWNrZWR9ICR7cmFkaW8uY29udGFpbmVyfSBkaXY6bnRoLWNoaWxkKDEpe3RyYW5zZm9ybTpzY2FsZSgxLjI1KTt9JHtjbGFzc05hbWV9JHtyYWRpby5jaGVja2VkfSAke3JhZGlvLmNvbnRhaW5lcn0gZGl2Om50aC1jaGlsZCgyKXt0cmFuc2Zvcm06c2NhbGUoMC44KTt9JHtjbGFzc05hbWV9JHtyYWRpby5vbkZvY3VzQnlLZXlib2FyZH0gJHtyYWRpby5jb250YWluZXJ9OjphZnRlcntib3gtc2hhZG93OjAgMCAwIDEycHg7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7b3BhY2l0eTouMTM7Ym9yZGVyLXJhZGl1czo1MCU7fWAsXG4gICAgbGFiZWw6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW4tJHtiZWZvcmV9OjE2cHg7Y3Vyc29yOnBvaW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpiYXNlbGluZTtwYWRkaW5nLXRvcDoxMnB4O3BhZGRpbmctYm90dG9tOjEycHg7fWAsXG4gICAgbGFiZWxDb250ZW50OiBudWxsLFxuICAgIGNvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi0ke2JlZm9yZX06LjEyNWVtO21hcmdpbi0ke2FmdGVyfTouNWVtO21hcmdpbi10b3A6YXV0bzttYXJnaW4tYm90dG9tOmF1dG87d2lkdGg6MTZweDtoZWlnaHQ6MTZweDt9JHtjbGFzc05hbWV9IGRpdnttYXJnaW46YXV0bztib3JkZXItcmFkaXVzOjUwJTt3aWR0aDoxZW07aGVpZ2h0OjFlbTtib3gtc2l6aW5nOmJvcmRlci1ib3g7fSR7Y2xhc3NOYW1lfTo6YWZ0ZXJ7Y29udGVudDonJzt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O21hcmdpbjphdXRvO30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfTo6YWZ0ZXJgKX0ke2NsYXNzTmFtZX0gZGl2Om50aC1jaGlsZCgyKXtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjt0cmFuc2Zvcm06c2NhbGUoMCk7fSR7Y2xhc3NOYW1lfSBkaXY6bnRoLWNoaWxkKDEpe3RyYW5zZm9ybTpzY2FsZSgxKTtib3JkZXI6c29saWQgLjA4ZW0gY3VycmVudENvbG9yO2NvbG9yOiR7dGhlbWUudGV4dC5kaXNhYmxlZH07fWAsXG4gICAgY2hlY2tlZDogbnVsbCxcbiAgICBfYW5pbWF0aW9uczogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke3JhZGlvLmNvbnRhaW5lcn0gZGl2e3RyYW5zaXRpb246dHJhbnNmb3JtIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOjI1MG1zO31gLFxuICAgIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICAgIGRpc2FibGVkOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2NvbG9yOiR7dGhlbWUuZGlzYWJsZWQuY29udHJhc3R9O30ke2NsYXNzTmFtZX0gJHtyYWRpby5jb250YWluZXJ9IGRpdntjb2xvcjoke3RoZW1lLmRpc2FibGVkLmNvbnRyYXN0fSFpbXBvcnRhbnQ7fWBcbiAgfTtcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXJhZGlvLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgcHJvdmlkZXJzOiBbTFlfUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZXhwb3J0QXM6ICdseVJhZGlvR3JvdXAnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9Hcm91cCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5UmFkaW9Hcm91cCc7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIG5hbWUgPSBgbHktcmFkaW8tbmFtZS0ke2lkeCsrfWA7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbDogYW55KSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWwpIHtcbiAgICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2hlY2tGcm9tVmFsdWUodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBASW5wdXQoKSBjb2xvciA9ICdhY2NlbnQnO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlSYWRpbykpIF9yYWRpb3M6IFF1ZXJ5TGlzdDxMeVJhZGlvPjtcblxuICAvKiogVGhlIG1ldGhvZCB0byBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gdXBkYXRlIG5nTW9kZWwgKi9cbiAgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIG9uVG91Y2ggZnVuY3Rpb24gcmVnaXN0ZXJlZCB2aWEgcmVnaXN0ZXJPblRvdWNoIChDb250cm9sVmFsdWVBY2Nlc3NvcikuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIE1hcmsgdGhpcyBncm91cCBhcyBiZWluZyBcInRvdWNoZWRcIiAoZm9yIG5nTW9kZWwpLiBNZWFudCB0byBiZSBjYWxsZWQgYnkgdGhlIGNvbnRhaW5lZFxuICAgKiByYWRpbyBidXR0b25zIHVwb24gdGhlaXIgYmx1ci5cbiAgICovXG4gIF90b3VjaCgpIHtcbiAgICBpZiAodGhpcy5vblRvdWNoZWQpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKCEhdGhpcy5fcmFkaW9zKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG1vZGVsIHZhbHVlIGNoYW5nZXMuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2wuIEltcGxlbWVudGVkIGFzIGEgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIF9pc0Rpc2FibGVkIFdoZXRoZXIgdGhlIGNvbnRyb2wgc2hvdWxkIGJlIGRpc2FibGVkLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKF9pc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgLy8gdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIF91cGRhdGVDaGVja0Zyb21WYWx1ZSh2YWw6IGFueSkge1xuICAgIGxldCBuZXdDaGVja2VkOiBib29sZWFuO1xuICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKHJhZGlvQnV0dG9uID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHJhZGlvQnV0dG9uLnZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRldmFsdWUodmFsKTtcbiAgICAgICAgbmV3Q2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHJhZGlvQnV0dG9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChyYWRpb0J1dHRvbi5jaGVja2VkKSB7XG4gICAgICAgIHJhZGlvQnV0dG9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIW5ld0NoZWNrZWQhKSB7XG4gICAgICAvKiogd2hlbiB2YWwgbm90IGV4aXN0IGluIHJhZGlvIGJ1dHRvbiAhPT0gICovXG4gICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKG51bGwpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICB1cGRhdGV2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KCk7XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX3JhZGlvUmVzZXRDaGVja2VkKCkge1xuICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKF8gPT4gXy5fc2V0Q2hlY2tlZFRvRmFsc3koKSk7XG4gIH1cblxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5UmFkaW9CYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5UmFkaW9NaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUoTHlSYWRpb0Jhc2UpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1yYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAncmFkaW8uaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaW5wdXRzOiBbXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvIGV4dGVuZHMgTHlSYWRpb01peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5UmFkaW8nO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5yYWRpb0dyb3VwLmNsYXNzZXM7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGlkID0gYGx5LXJhZGlvLWlkLSR7aWR4Kyt9YDtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgbmFtZSA9ICcnO1xuICBwcml2YXRlIF92YWx1ZSA9IG51bGw7XG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfYW5pbUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzPzogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdfaW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgX2lucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfcmFkaW9Db250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBfcmFkaW9Db250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfbGFiZWxDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgY29sb3IodmFsKSB7XG4gICAgaWYgKHRoaXMuX2NvbG9yICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgICAgdGhpc1sweDFdID0gdGhpcy5fc3R5bGVSZW5kZXJlci5hZGQoXG4gICAgICAgIGAke0x5UmFkaW8u0Lh9LS1jb2xvci0ke3ZhbH1gLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzLCByZWYpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjaGVja2VkLFxuICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgfSA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICAgICAgICAgIHJldHVybiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0ke2NoZWNrZWR9ICR7Y29udGFpbmVyfSwke2NsYXNzTmFtZX0ke2NoZWNrZWR9ICR7Y29udGFpbmVyfSBkaXY6bnRoLWNoaWxkKDEpLCR7Y2xhc3NOYW1lfSAke2NvbnRhaW5lcn0gZGl2Om50aC1jaGlsZCgyKXtjb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX07fWA7XG4gICAgICAgIH0sXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZLFxuICAgICAgICB0aGlzWzB4MV1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCBjb2xvcigpIHsgcmV0dXJuIHRoaXMuX2NvbG9yOyB9XG4gIFsweDFdOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGNoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3Q2hlY2tlZFN0YXRlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgY29uc3QgYmVmb3JlID0gdGhpcy5fY2hlY2tlZDtcbiAgICBpZiAoYmVmb3JlICE9PSBuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdDaGVja2VkU3RhdGU7XG4gICAgICBpZiAoIWJlZm9yZSAmJiBuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgICAgLyoqIEFkZCBjbGFzcyBjaGVja2VkICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLnJhZGlvR3JvdXAudmFsdWUpIHtcbiAgICAgICAgICAvKiogdXBkYXRlIFZhbHVlICovXG4gICAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnVwZGF0ZXZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogUmVtb3ZlIGNsYXNzIGNoZWNrZWQgKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIGdldCBpbnB1dElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWR9LWlucHV0YDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZSkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzcyA9IHRoaXMuY2xhc3Nlcy5kaXNhYmxlZDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2Rpc2FibGVkQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBAZG9jcy1wcml2YXRlICovXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHJhZGlvR3JvdXA6IEx5UmFkaW9Hcm91cCxcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfY29yZVN0eWxlczogTHlDb3JlU3R5bGVzLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBwcml2YXRlIF9zdHlsZVJlbmRlcmVyOiBTdHlsZVJlbmRlcmVyXG4gICkge1xuICAgIHN1cGVyKHRoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZjtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcgPSB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHJhZGl1czogJ2NvbnRhaW5lclNpemUnLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IDE1MFxuICAgIH07XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHJhZGlvR3JvdXAuY2xhc3Nlcy5yYWRpbyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICAvLyBDb3B5IG5hbWUgZnJvbSBwYXJlbnQgcmFkaW8gZ3JvdXBcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFkaW9Hcm91cC5uYW1lO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLnJhZGlvR3JvdXAuY29sb3IgfHwgREVGQVVMVF9DT0xPUjtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fcmFkaW9Db250YWluZXI7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2lucHV0LCB0aGlzLl9lbGVtZW50UmVmKTtcbiAgICBpZiAoZm9jdXNTdGF0ZSkge1xuICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudCA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsZW1lbnRSZWYpO1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG5cbiAgX29uSW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucmFkaW9Hcm91cC5fdXBkYXRlQ2hlY2tGcm9tVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl90b3VjaCgpO1xuICAgIHRoaXMuX2FkZEFuaW0oKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEFuaW0oKSB7XG4gICAgaWYgKCF0aGlzLl9hbmltQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLl9hbmltYXRpb25zKTtcbiAgICAgIHRoaXMuX2FuaW1DbGFzcyA9IHRoaXMuY2xhc3Nlcy5fYW5pbWF0aW9ucztcbiAgICB9XG4gIH1cblxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkgeyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuXG4gIF9zZXRDaGVja2VkVG9GYWxzeSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxuXG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvTW9kdWxlIHsgfVxuIl19