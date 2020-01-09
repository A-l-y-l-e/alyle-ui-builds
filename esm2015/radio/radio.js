var LyRadio_1;
import * as tslib_1 from "tslib";
import { Component, forwardRef, NgModule, Input, Output, ChangeDetectorRef, OnInit, OnDestroy, ContentChildren, QueryList, Optional, EventEmitter, ChangeDetectionStrategy, NgZone, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyTheme2, LyCoreStyles, toBoolean, mixinDisableRipple, ThemeVariables, LyFocusState, LY_COMMON_STYLES, st2c, StyleCollection, LyClasses, StyleTemplate, ThemeRef, LyHostClass, StyleRenderer } from '@alyle/ui';
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
        root: () => (className) => `${className}{display:inline-block;}${st2c(((theme.radio
            && theme.radio.root
            && (theme.radio.root instanceof StyleCollection
                ? theme.radio.root.setTransformer(fn => fn(radio))
                : theme.radio.root(radio)))), `${className}`)}`,
        radio: () => (className) => `${className}{display:inline-block;margin-${after}:16px;margin-${before}:-16px;}${className}${radio.checked} ${radio.container} div:nth-child(1){transform:scale(1.25);}${className}${radio.checked} ${radio.container} div:nth-child(2){transform:scale(0.8);}${className}${radio.onFocusByKeyboard} ${radio.container}::after{box-shadow:0 0 0 12px;background:currentColor;opacity:.13;border-radius:50%;}`,
        label: (className) => `${className}{margin-${before}:16px;cursor:pointer;white-space:nowrap;position:relative;display:flex;align-items:baseline;padding-top:12px;padding-bottom:12px;}`,
        labelContent: null,
        container: (className) => `${className}{position:relative;margin-${before}:.125em;margin-${after}:.5em;margin-top:auto;margin-bottom:auto;width:16px;height:16px;}${className} div{margin:auto;border-radius:50%;width:1em;height:1em;box-sizing:border-box;}${className}::after{content:'';width:16px;height:16px;margin:auto;}${st2c((LY_COMMON_STYLES.fill), `${className}::after`)}${className} div:nth-child(2){background:currentColor;transform:scale(0);}${className} div:nth-child(1){transform:scale(1);border:solid .08em currentColor;color:${theme.text.disabled};}`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmFkaW8vIiwic291cmNlcyI6WyJyYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixNQUFNLEVBQ04sU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsUUFBUSxFQUNSLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNULGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLFdBQVcsR0FDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFFBQVEsRUFDUixZQUFZLEVBQ1osU0FBUyxFQUNULGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixJQUFJLEVBQ0osZUFBZSxFQUNmLFNBQVMsRUFDVCxhQUFhLEVBQ2IsUUFBUSxFQUNSLFdBQVcsRUFDWCxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFZbkMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFDckMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDO0FBRS9CLE1BQU0sQ0FBQyxNQUFNLCtCQUErQixHQUFRO0lBQ2xELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUYsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBRVosTUFBTSxPQUFP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TyxDQUFDO0tBQ3RDLENBQUM7R0FDVyxhQUFhLENBQUk7U0FBakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgZm9yd2FyZFJlZixcbiAgTmdNb2R1bGUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9wdGlvbmFsLFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBOZ1pvbmUsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3Jtc01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEx5Q29tbW9uTW9kdWxlLFxuICBMeVRoZW1lMixcbiAgTHlDb3JlU3R5bGVzLFxuICB0b0Jvb2xlYW4sXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgc3QyYyxcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIFRoZW1lUmVmLFxuICBMeUhvc3RDbGFzcyxcbiAgU3R5bGVSZW5kZXJlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlSYWRpb1RoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgUmFkaW8gQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5UmFkaW9WYXJpYWJsZXMge1xuICByYWRpbz86IEx5UmFkaW9UaGVtZTtcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAnYWNjZW50JztcblxuZXhwb3J0IGNvbnN0IExZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW9Hcm91cCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5sZXQgaWR4ID0gMDtcblxuZXhwb3J0IGNsYXNzIFVuZGVmaW5lZFZhbHVlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVJhZGlvVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IHJhZGlvID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIGNvbnN0IHsgYWZ0ZXIsIGJlZm9yZSB9ID0gdGhlbWU7XG4gIHJldHVybiB7XG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6aW5saW5lLWJsb2NrO30ke3N0MmMoKFxuICAgICAgICAgICh0aGVtZS5yYWRpb1xuICAgICAgICAgICAgJiYgdGhlbWUucmFkaW8ucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLnJhZGlvLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5yYWRpby5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKHJhZGlvKSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5yYWRpby5yb290KHJhZGlvKSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfWAsXG4gICAgcmFkaW86ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLSR7YWZ0ZXJ9OjE2cHg7bWFyZ2luLSR7YmVmb3JlfTotMTZweDt9JHtjbGFzc05hbWV9JHtyYWRpby5jaGVja2VkfSAke3JhZGlvLmNvbnRhaW5lcn0gZGl2Om50aC1jaGlsZCgxKXt0cmFuc2Zvcm06c2NhbGUoMS4yNSk7fSR7Y2xhc3NOYW1lfSR7cmFkaW8uY2hlY2tlZH0gJHtyYWRpby5jb250YWluZXJ9IGRpdjpudGgtY2hpbGQoMil7dHJhbnNmb3JtOnNjYWxlKDAuOCk7fSR7Y2xhc3NOYW1lfSR7cmFkaW8ub25Gb2N1c0J5S2V5Ym9hcmR9ICR7cmFkaW8uY29udGFpbmVyfTo6YWZ0ZXJ7Ym94LXNoYWRvdzowIDAgMCAxMnB4O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO29wYWNpdHk6LjEzO2JvcmRlci1yYWRpdXM6NTAlO31gLFxuICAgIGxhYmVsOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWFyZ2luLSR7YmVmb3JlfToxNnB4O2N1cnNvcjpwb2ludGVyO3doaXRlLXNwYWNlOm5vd3JhcDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6YmFzZWxpbmU7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O31gLFxuICAgIGxhYmVsQ29udGVudDogbnVsbCxcbiAgICBjb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tJHtiZWZvcmV9Oi4xMjVlbTttYXJnaW4tJHthZnRlcn06LjVlbTttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7fSR7Y2xhc3NOYW1lfSBkaXZ7bWFyZ2luOmF1dG87Ym9yZGVyLXJhZGl1czo1MCU7d2lkdGg6MWVtO2hlaWdodDoxZW07Ym94LXNpemluZzpib3JkZXItYm94O30ke2NsYXNzTmFtZX06OmFmdGVye2NvbnRlbnQ6Jyc7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDttYXJnaW46YXV0bzt9JHtzdDJjKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9OjphZnRlcmApfSR7Y2xhc3NOYW1lfSBkaXY6bnRoLWNoaWxkKDIpe2JhY2tncm91bmQ6Y3VycmVudENvbG9yO3RyYW5zZm9ybTpzY2FsZSgwKTt9JHtjbGFzc05hbWV9IGRpdjpudGgtY2hpbGQoMSl7dHJhbnNmb3JtOnNjYWxlKDEpO2JvcmRlcjpzb2xpZCAuMDhlbSBjdXJyZW50Q29sb3I7Y29sb3I6JHt0aGVtZS50ZXh0LmRpc2FibGVkfTt9YCxcbiAgICBjaGVja2VkOiBudWxsLFxuICAgIF9hbmltYXRpb25zOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7cmFkaW8uY29udGFpbmVyfSBkaXZ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO3RyYW5zaXRpb24tZHVyYXRpb246MjUwbXM7fWAsXG4gICAgb25Gb2N1c0J5S2V5Ym9hcmQ6IG51bGwsXG4gICAgZGlzYWJsZWQ6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17Y29sb3I6JHt0aGVtZS5kaXNhYmxlZC5jb250cmFzdH07fSR7Y2xhc3NOYW1lfSAke3JhZGlvLmNvbnRhaW5lcn0gZGl2e2NvbG9yOiR7dGhlbWUuZGlzYWJsZWQuY29udHJhc3R9IWltcG9ydGFudDt9YFxuICB9O1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktcmFkaW8tZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBwcm92aWRlcnM6IFtMWV9SQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBleHBvcnRBczogJ2x5UmFkaW9Hcm91cCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSYWRpb0dyb3VwIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlSYWRpb0dyb3VwJztcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgbmFtZSA9IGBseS1yYWRpby1uYW1lLSR7aWR4Kyt9YDtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgaWYgKHRoaXMuX3JhZGlvcykge1xuICAgICAgICB0aGlzLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBJbnB1dCgpIGNvbG9yID0gJ2FjY2VudCc7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVJhZGlvKSkgX3JhZGlvczogUXVlcnlMaXN0PEx5UmFkaW8+O1xuXG4gIC8qKiBUaGUgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbiBvcmRlciB0byB1cGRhdGUgbmdNb2RlbCAqL1xuICBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogb25Ub3VjaCBmdW5jdGlvbiByZWdpc3RlcmVkIHZpYSByZWdpc3Rlck9uVG91Y2ggKENvbnRyb2xWYWx1ZUFjY2Vzc29yKS5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogTWFyayB0aGlzIGdyb3VwIGFzIGJlaW5nIFwidG91Y2hlZFwiIChmb3IgbmdNb2RlbCkuIE1lYW50IHRvIGJlIGNhbGxlZCBieSB0aGUgY29udGFpbmVkXG4gICAqIHJhZGlvIGJ1dHRvbnMgdXBvbiB0aGVpciBibHVyLlxuICAgKi9cbiAgX3RvdWNoKCkge1xuICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoISF0aGlzLl9yYWRpb3MpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbW9kZWwgdmFsdWUgY2hhbmdlcy5cbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbC4gSW1wbGVtZW50ZWQgYXMgYSBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gX2lzRGlzYWJsZWQgV2hldGhlciB0aGUgY29udHJvbCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoX2lzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHZhbDogYW55KSB7XG4gICAgbGV0IG5ld0NoZWNrZWQ6IGJvb2xlYW47XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2gocmFkaW9CdXR0b24gPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gcmFkaW9CdXR0b24udmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGV2YWx1ZSh2YWwpO1xuICAgICAgICBuZXdDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghbmV3Q2hlY2tlZCEpIHtcbiAgICAgIC8qKiB3aGVuIHZhbCBub3QgZXhpc3QgaW4gcmFkaW8gYnV0dG9uICE9PSAgKi9cbiAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4obnVsbCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHVwZGF0ZXZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoKTtcbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcmFkaW9SZXNldENoZWNrZWQoKSB7XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2goXyA9PiBfLl9zZXRDaGVja2VkVG9GYWxzeSgpKTtcbiAgfVxuXG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlSYWRpb0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlSYWRpb01peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShMeVJhZGlvQmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXJhZGlvJyxcbiAgdGVtcGxhdGVVcmw6ICdyYWRpby5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBpbnB1dHM6IFtcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlIb3N0Q2xhc3MsXG4gICAgU3R5bGVSZW5kZXJlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW8gZXh0ZW5kcyBMeVJhZGlvTWl4aW5CYXNlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlSYWRpbyc7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnJhZGlvR3JvdXAuY2xhc3NlcztcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgaWQgPSBgbHktcmFkaW8taWQtJHtpZHgrK31gO1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBuYW1lID0gJyc7XG4gIHByaXZhdGUgX3ZhbHVlID0gbnVsbDtcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9hbmltQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkQ2xhc3M/OiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ19pbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBfaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19yYWRpb0NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIF9yYWRpb0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9sYWJlbENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWwpIHtcbiAgICBpZiAodGhpcy5fY29sb3IgIT09IHZhbCkge1xuICAgICAgdGhpcy5fY29sb3IgPSB2YWw7XG4gICAgICB0aGlzWzB4MV0gPSB0aGlzLl9zdHlsZVJlbmRlcmVyLmFkZChcbiAgICAgICAgYCR7THlSYWRpby7QuH0tLWNvbG9yLSR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMsIHJlZikgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICB9ID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gICAgICAgICAgcmV0dXJuIChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSR7Y2hlY2tlZH0gJHtjb250YWluZXJ9LCR7Y2xhc3NOYW1lfSR7Y2hlY2tlZH0gJHtjb250YWluZXJ9IGRpdjpudGgtY2hpbGQoMSksJHtjbGFzc05hbWV9ICR7Y29udGFpbmVyfSBkaXY6bnRoLWNoaWxkKDIpe2NvbG9yOiR7dGhlbWUuY29sb3JPZih2YWwpfTt9YDtcbiAgICAgICAgfSxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFksXG4gICAgICAgIHRoaXNbMHgxXVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCkgeyByZXR1cm4gdGhpcy5fY29sb3I7IH1cbiAgWzB4MV06IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgY2hlY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdDaGVja2VkU3RhdGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLl9jaGVja2VkO1xuICAgIGlmIChiZWZvcmUgIT09IG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld0NoZWNrZWRTdGF0ZTtcbiAgICAgIGlmICghYmVmb3JlICYmIG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgICAvKiogQWRkIGNsYXNzIGNoZWNrZWQgKi9cbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMucmFkaW9Hcm91cC52YWx1ZSkge1xuICAgICAgICAgIC8qKiB1cGRhdGUgVmFsdWUgKi9cbiAgICAgICAgICB0aGlzLnJhZGlvR3JvdXAudXBkYXRldmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBSZW1vdmUgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5pZH0taW5wdXRgO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB0aGlzLl9kaXNhYmxlZENsYXNzID0gdGhpcy5jbGFzc2VzLmRpc2FibGVkO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZGlzYWJsZWRDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgdGhpcy5fZGlzYWJsZWRDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcmFkaW9Hcm91cDogTHlSYWRpb0dyb3VwLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9jb3JlU3R5bGVzOiBMeUNvcmVTdHlsZXMsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIHByaXZhdGUgX3N0eWxlUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXJcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmO1xuICAgIHRoaXMuX3JpcHBsZUNvbmZpZyA9IHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgcmFkaXVzOiAnY29udGFpbmVyU2l6ZScsXG4gICAgICBwZXJjZW50YWdlVG9JbmNyZWFzZTogMTUwXG4gICAgfTtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcmFkaW9Hcm91cC5jbGFzc2VzLnJhZGlvKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnJhZGlvR3JvdXApIHtcbiAgICAgIC8vIENvcHkgbmFtZSBmcm9tIHBhcmVudCByYWRpbyBncm91cFxuICAgICAgdGhpcy5uYW1lID0gdGhpcy5yYWRpb0dyb3VwLm5hbWU7XG4gICAgfVxuICAgIGlmICghdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy5jb2xvciA9IHRoaXMucmFkaW9Hcm91cC5jb2xvciB8fCBERUZBVUxUX0NPTE9SO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLl9yYWRpb0NvbnRhaW5lcjtcblxuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgICBjb25zdCBmb2N1c1N0YXRlID0gdGhpcy5fZm9jdXNTdGF0ZS5saXN0ZW4odGhpcy5faW5wdXQsIHRoaXMuX2VsZW1lbnRSZWYpO1xuICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5vbkZvY3VzQnlLZXlib2FyZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzU3RhdGUudW5saXN0ZW4odGhpcy5fZWxlbWVudFJlZik7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cblxuICBfb25JbnB1dENoYW5nZShldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJhZGlvR3JvdXAuX3RvdWNoKCk7XG4gICAgdGhpcy5fYWRkQW5pbSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkQW5pbSgpIHtcbiAgICBpZiAoIXRoaXMuX2FuaW1DbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuX2FuaW1hdGlvbnMpO1xuICAgICAgdGhpcy5fYW5pbUNsYXNzID0gdGhpcy5jbGFzc2VzLl9hbmltYXRpb25zO1xuICAgIH1cbiAgfVxuXG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9XG5cbiAgX3NldENoZWNrZWRUb0ZhbHN5KCkge1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICB9XG5cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5UmFkaW9Hcm91cCwgTHlSYWRpb10sXG4gIGRlY2xhcmF0aW9uczogW0x5UmFkaW9Hcm91cCwgTHlSYWRpb10sXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9Nb2R1bGUgeyB9XG4iXX0=