var LyCheckbox_1;
import * as tslib_1 from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, OnDestroy, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LyCoreStyles as LyCommonStyles, LyFocusState, LyTheme2, mixinDisableRipple, ThemeVariables, toBoolean, ThemeRef, st2c, LyHostClass, StyleRenderer, LY_COMMON_STYLES, StyleCollection, LyClasses, StyleTemplate, Style, WithStyles } from '@alyle/ui';
const STYLE_PRIORITY = -2;
const DEFAULT_WITH_COLOR = 'accent';
const DEFAULT_DISABLE_RIPPLE = false;
export const STYLES = (theme, ref) => {
    const checkbox = ref.selectorsOf(STYLES);
    const { before, after } = theme;
    return {
        $name: LyCheckbox.и,
        $priority: STYLE_PRIORITY,
        root: () => (className) => `${className}{margin-${after}:16px;margin-${before}:-16px;display:inline-flex;}${st2c(((theme.checkbox
            && theme.checkbox.root
            && (theme.checkbox.root instanceof StyleCollection
                ? theme.checkbox.root.setTransformer(fn => fn(checkbox))
                : theme.checkbox.root(checkbox)))), `${className}`)}${className}${checkbox.disabled}:not(${checkbox.checked}) ${checkbox.icon}:before{color:${theme.disabled.default};}${className}${checkbox.disabled}{pointer-events:none;}${className}${checkbox.disabled} ${checkbox.layout}{color:${theme.text.secondary};}${className}${checkbox.disabled}${checkbox.checked} ${checkbox.icon}:before{border:0;background:${theme.disabled.default};}${className}${checkbox.onFocusByKeyboard} ${checkbox.icon}::after{box-shadow:0 0 0 12px;opacity:.13;border-radius:50%;}${className}:not(${checkbox.checked}) ${checkbox.icon}{color:${theme.text.secondary};}`,
        layout: (className) => `${className}{display:inline-flex;align-items:baseline;cursor:pointer;margin-${before}:16px;padding-top:12px;padding-bottom:12px;}`,
        icon: (className) => `${className}{position:relative;margin-${after}:8px;margin-top:auto;margin-bottom:auto;width:16px;height:16px;user-select:none;}${className}::before,${className}::after{content:'';width:16px;height:16px;margin:auto;box-sizing:border-box;}${st2c((LY_COMMON_STYLES.fill), `${className}::before,${className}::after`)}${className}::before{border:solid 2px;border-radius:2px;}${className} svg{position:absolute;}${className} svg polyline{fill:none;stroke:${theme.background.primary.default};stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:18px;stroke-dashoffset:18px;}`,
        checked: () => (className) => `${className} ${checkbox.icon}::before{background:currentColor;}${className} ${checkbox.icon} polyline{stroke-dashoffset:0;}`,
        input: LY_COMMON_STYLES.visuallyHidden,
        onFocusByKeyboard: null,
        disabled: () => (className) => `${className} ${checkbox.input}{visibility:hidden;}${className} ${checkbox.icon}{color:inherit !important;}`,
        animations: () => (className) => `${className} ${checkbox.icon} svg polyline{transition:all ${theme.animations.durations.entering}ms ${theme.animations.curves.sharp};}`
    };
};
/**
 * This allows it to support [(ngModel)].
 * @ignore
 */
export const LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LyCheckbox),
    multi: true
};
/** Change event object emitted by LyCheckbox. */
export class LyCheckboxChange {
}
/** @docs-private */
export class LyCheckboxBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
export const LyCheckboxMixinBase = mixinDisableRipple(LyCheckboxBase);
const ɵ0 = val => (theme, ref) => {
    const checkbox = ref.selectorsOf(STYLES);
    const color = theme.colorOf(val);
    if (theme.checkbox && theme.checkbox.color) {
        return theme.checkbox.color(checkbox, color);
    }
    throw new Error(`${LyCheckbox_1.и}: styles theme.checkbox.color is undefined`);
};
/**
 * @dynamic
 */
let LyCheckbox = LyCheckbox_1 = class LyCheckbox extends LyCheckboxMixinBase {
    constructor(_commonStyles, _theme, _el, _renderer, _changeDetectorRef, _focusState, sRenderer, ngZone) {
        super(_theme, ngZone);
        this._commonStyles = _commonStyles;
        this._el = _el;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._focusState = _focusState;
        this.sRenderer = sRenderer;
        /**
         * styles
         * @ignore
         */
        this.classes = this._theme.renderStyleSheet(STYLES);
        /** Event emitted when the checkbox's `checked` value changes. */
        this.change = new EventEmitter();
        this._onTouched = () => { };
        this._controlValueAccessorChangeFn = () => { };
        this._triggerElement = this._el;
        this._rippleConfig = {
            centered: true,
            radius: 'containerSize',
            percentageToIncrease: 150
        };
    }
    /**
     * Whether the checkbox is checked.
     */
    get checked() { return this._checked; }
    set checked(val) {
        const newVal = toBoolean(val);
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
    }
    get required() {
        return this._required;
    }
    set required(val) {
        this._required = toBoolean(val);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(val) {
        const newVal = toBoolean(val);
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
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this.classes.root);
        // set default color
        if (!this.color) {
            this.color = DEFAULT_WITH_COLOR;
        }
    }
    ngAfterViewInit() {
        const focusState = this._focusState.listen(this._inputElement, this._el);
        if (focusState) {
            focusState.subscribe((event) => {
                if (this._onFocusByKeyboardState === true) {
                    this._renderer.removeClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                    this._onFocusByKeyboardState = false;
                }
                if (event === 'keyboard') {
                    this._onFocusByKeyboardState = true;
                    this._renderer.addClass(this._el.nativeElement, this.classes.onFocusByKeyboard);
                }
                this._onTouched();
            });
        }
        this._rippleContainer = this._innerContainer;
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
    }
    ngOnDestroy() {
        this._focusState.unlisten(this._el);
        this._removeRippleEvents();
    }
    /** @docs-private */
    writeValue(value) {
        this.checked = !!value;
    }
    /** @docs-private */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /** @docs-private */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /** @docs-private */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /** Toggles the `checked` state of the checkbox. */
    toggle() {
        this.checked = !this.checked;
    }
    _onInputClick(event) {
        event.stopPropagation();
        if (!this.disabled) {
            this.toggle();
            this._emitChangeEvent();
        }
        this._markForCheck();
    }
    _onChange(event) {
        event.stopPropagation();
    }
    _emitChangeEvent() {
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit({
            source: this,
            checked: this.checked
        });
    }
    _markForCheck() {
        this._changeDetectorRef.markForCheck();
    }
};
/** @ignore */
LyCheckbox.и = 'LyCheckbox';
LyCheckbox.ctorParameters = () => [
    { type: LyCommonStyles },
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: LyFocusState },
    { type: StyleRenderer },
    { type: NgZone }
];
tslib_1.__decorate([
    ViewChild('innerContainer', { static: false })
], LyCheckbox.prototype, "_innerContainer", void 0);
tslib_1.__decorate([
    Input()
], LyCheckbox.prototype, "value", void 0);
tslib_1.__decorate([
    Input(),
    Style(ɵ0, STYLE_PRIORITY)
], LyCheckbox.prototype, "color", void 0);
tslib_1.__decorate([
    Input()
], LyCheckbox.prototype, "checked", null);
tslib_1.__decorate([
    Input()
], LyCheckbox.prototype, "required", null);
tslib_1.__decorate([
    Input()
], LyCheckbox.prototype, "disabled", null);
tslib_1.__decorate([
    Output()
], LyCheckbox.prototype, "change", void 0);
tslib_1.__decorate([
    ViewChild('input', { static: false })
], LyCheckbox.prototype, "_inputElement", void 0);
LyCheckbox = LyCheckbox_1 = tslib_1.__decorate([
    Component({
        selector: 'ly-checkbox',
        template: "\n<label [className]=\"classes.layout\">\n  <input #input\n  [className]=\"classes.input\"\n  type=\"checkbox\"\n  [checked]=\"checked\"\n  [required]=\"required\"\n  [attr.value]=\"value\"\n  [disabled]=\"disabled\"\n  (click)=\"_onInputClick($event)\"\n  (change)=\"_onChange($event)\"\n  >\n  <div #innerContainer [className]=\"classes.icon\">\n    <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 20 20\">\n      <polyline points=\"4 11 8 15 16 6\"></polyline>\n    </svg>\n  </div>\n  <div #label>\n    <ng-content></ng-content>\n  </div>\n</label>",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [
            LyHostClass,
            StyleRenderer,
            LY_CHECKBOX_CONTROL_VALUE_ACCESSOR,
        ],
        exportAs: 'lyCheckbox',
        inputs: [
            'disableRipple'
        ]
    })
], LyCheckbox);
export { LyCheckbox };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUNMLFlBQVksSUFBSSxjQUFjLEVBQzlCLFlBQVksRUFDWixRQUFRLEVBQ1Isa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixXQUFXLEVBQ1gsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFDYixLQUFLLEVBQ0wsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR2hDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFCLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLE1BQU0sc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0FBY3JDLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQTJDLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbkYsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNoQyxPQUFPO1FBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ25CLFNBQVMsRUFBRSxjQUFj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ZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEx5Q29yZVN0eWxlcyBhcyBMeUNvbW1vblN0eWxlcyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeVRoZW1lMixcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgdG9Cb29sZWFuLFxuICBUaGVtZVJlZixcbiAgc3QyYyxcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIsXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBTdHlsZSxcbiAgV2l0aFN0eWxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ0BhbHlsZS91aS9jb2xvcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1dJVEhfQ09MT1IgPSAnYWNjZW50JztcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcblxuZXhwb3J0IGludGVyZmFjZSBMeUNoZWNrYm94VGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBDaGVja2JveCBDb21wb25lbnQuICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgLyoqIFN0eWxlcyB0aGF0IGFwcGx5IHdoZW4gYSBjb2xvciBpcyBzZXQuICovXG4gIGNvbG9yPzogKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPiwgY29sb3I6IENvbG9yKSA9PiBTdHlsZVRlbXBsYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5Q2hlY2tib3hWYXJpYWJsZXMge1xuICBjaGVja2JveD86IEx5Q2hlY2tib3hUaGVtZTtcbn1cblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUNoZWNrYm94VmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIGNvbnN0IHsgYmVmb3JlLCBhZnRlciB9ID0gdGhlbWU7XG4gIHJldHVybiB7XG4gICAgJG5hbWU6IEx5Q2hlY2tib3gu0LgsXG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21hcmdpbi0ke2FmdGVyfToxNnB4O21hcmdpbi0ke2JlZm9yZX06LTE2cHg7ZGlzcGxheTppbmxpbmUtZmxleDt9JHtzdDJjKChcbiAgICAgICAgICAodGhlbWUuY2hlY2tib3hcbiAgICAgICAgICAgICYmIHRoZW1lLmNoZWNrYm94LnJvb3RcbiAgICAgICAgICAgICYmICh0aGVtZS5jaGVja2JveC5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUuY2hlY2tib3gucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbihjaGVja2JveCkpXG4gICAgICAgICAgICAgIDogdGhlbWUuY2hlY2tib3gucm9vdChjaGVja2JveCkpXG4gICAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX0ke2NoZWNrYm94LmRpc2FibGVkfTpub3QoJHtjaGVja2JveC5jaGVja2VkfSkgJHtjaGVja2JveC5pY29ufTpiZWZvcmV7Y29sb3I6JHt0aGVtZS5kaXNhYmxlZC5kZWZhdWx0fTt9JHtjbGFzc05hbWV9JHtjaGVja2JveC5kaXNhYmxlZH17cG9pbnRlci1ldmVudHM6bm9uZTt9JHtjbGFzc05hbWV9JHtjaGVja2JveC5kaXNhYmxlZH0gJHtjaGVja2JveC5sYXlvdXR9e2NvbG9yOiR7dGhlbWUudGV4dC5zZWNvbmRhcnl9O30ke2NsYXNzTmFtZX0ke2NoZWNrYm94LmRpc2FibGVkfSR7Y2hlY2tib3guY2hlY2tlZH0gJHtjaGVja2JveC5pY29ufTpiZWZvcmV7Ym9yZGVyOjA7YmFja2dyb3VuZDoke3RoZW1lLmRpc2FibGVkLmRlZmF1bHR9O30ke2NsYXNzTmFtZX0ke2NoZWNrYm94Lm9uRm9jdXNCeUtleWJvYXJkfSAke2NoZWNrYm94Lmljb259OjphZnRlcntib3gtc2hhZG93OjAgMCAwIDEycHg7b3BhY2l0eTouMTM7Ym9yZGVyLXJhZGl1czo1MCU7fSR7Y2xhc3NOYW1lfTpub3QoJHtjaGVja2JveC5jaGVja2VkfSkgJHtjaGVja2JveC5pY29ufXtjb2xvcjoke3RoZW1lLnRleHQuc2Vjb25kYXJ5fTt9YCxcbiAgICBsYXlvdXQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmJhc2VsaW5lO2N1cnNvcjpwb2ludGVyO21hcmdpbi0ke2JlZm9yZX06MTZweDtwYWRkaW5nLXRvcDoxMnB4O3BhZGRpbmctYm90dG9tOjEycHg7fWAsXG4gICAgaWNvbjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi0ke2FmdGVyfTo4cHg7bWFyZ2luLXRvcDphdXRvO21hcmdpbi1ib3R0b206YXV0bzt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O3VzZXItc2VsZWN0Om5vbmU7fSR7Y2xhc3NOYW1lfTo6YmVmb3JlLCR7Y2xhc3NOYW1lfTo6YWZ0ZXJ7Y29udGVudDonJzt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O21hcmdpbjphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDt9JHtzdDJjKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9OjpiZWZvcmUsJHtjbGFzc05hbWV9OjphZnRlcmApfSR7Y2xhc3NOYW1lfTo6YmVmb3Jle2JvcmRlcjpzb2xpZCAycHg7Ym9yZGVyLXJhZGl1czoycHg7fSR7Y2xhc3NOYW1lfSBzdmd7cG9zaXRpb246YWJzb2x1dGU7fSR7Y2xhc3NOYW1lfSBzdmcgcG9seWxpbmV7ZmlsbDpub25lO3N0cm9rZToke3RoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0fTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheToxOHB4O3N0cm9rZS1kYXNob2Zmc2V0OjE4cHg7fWAsXG4gICAgY2hlY2tlZDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NoZWNrYm94Lmljb259OjpiZWZvcmV7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7fSR7Y2xhc3NOYW1lfSAke2NoZWNrYm94Lmljb259IHBvbHlsaW5le3N0cm9rZS1kYXNob2Zmc2V0OjA7fWAsXG4gICAgaW5wdXQ6IExZX0NPTU1PTl9TVFlMRVMudmlzdWFsbHlIaWRkZW4sXG4gICAgb25Gb2N1c0J5S2V5Ym9hcmQ6IG51bGwsXG4gICAgZGlzYWJsZWQ6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjaGVja2JveC5pbnB1dH17dmlzaWJpbGl0eTpoaWRkZW47fSR7Y2xhc3NOYW1lfSAke2NoZWNrYm94Lmljb259e2NvbG9yOmluaGVyaXQgIWltcG9ydGFudDt9YCxcbiAgICBhbmltYXRpb25zOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2hlY2tib3guaWNvbn0gc3ZnIHBvbHlsaW5le3RyYW5zaXRpb246YWxsICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH07fWBcbiAgfTtcbn07XG5cbi8qKlxuICogVGhpcyBhbGxvd3MgaXQgdG8gc3VwcG9ydCBbKG5nTW9kZWwpXS5cbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IExZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5Q2hlY2tib3gpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqIENoYW5nZSBldmVudCBvYmplY3QgZW1pdHRlZCBieSBMeUNoZWNrYm94LiAqL1xuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hDaGFuZ2Uge1xuICAvKiogVGhlIHNvdXJjZSBMeUNoZWNrYm94IG9mIHRoZSBldmVudC4gKi9cbiAgc291cmNlOiBMeUNoZWNrYm94O1xuICAvKiogVGhlIG5ldyBgY2hlY2tlZGAgdmFsdWUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5Q2hlY2tib3hNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUoTHlDaGVja2JveEJhc2UpO1xuXG4vKipcbiAqIEBkeW5hbWljXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXIsXG4gICAgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUixcbiAgXSxcbiAgZXhwb3J0QXM6ICdseUNoZWNrYm94JyxcbiAgaW5wdXRzOiBbXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveCBleHRlbmRzIEx5Q2hlY2tib3hNaXhpbkJhc2UgaW1wbGVtZW50cyBXaXRoU3R5bGVzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGlnbm9yZSAqL1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlDaGVja2JveCc7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJvdGVjdGVkIF9jb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9pbmRldGVybWluYXRlOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2NoZWNrZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQ7XG4gIHByaXZhdGUgX29uRm9jdXNCeUtleWJvYXJkU3RhdGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnaW5uZXJDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX2lubmVyQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICAvKiogVGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQgKi9cbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuICAvKiogQ2hlY2tib3ggY29sb3Igd2hlbiBjaGVja2VkICovXG4gIEBJbnB1dCgpXG4gIEBTdHlsZTxzdHJpbmcgfCBudWxsPihcbiAgICB2YWwgPT4gKFxuICAgICAgdGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlDaGVja2JveFZhcmlhYmxlcyxcbiAgICAgIHJlZjogVGhlbWVSZWZcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgIGlmICh0aGVtZS5jaGVja2JveCAmJiB0aGVtZS5jaGVja2JveC5jb2xvcikge1xuICAgICAgICByZXR1cm4gdGhlbWUuY2hlY2tib3guY29sb3IoY2hlY2tib3gsIGNvbG9yKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtMeUNoZWNrYm94LtC4fTogc3R5bGVzIHRoZW1lLmNoZWNrYm94LmNvbG9yIGlzIHVuZGVmaW5lZGApO1xuICAgIH1cbiAgLCBTVFlMRV9QUklPUklUWSlcbiAgY29sb3I6IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7IH1cbiAgc2V0IGNoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgLy8gaWYgKG5ld1ZhbCAhPT0gdGhpcy5jaGVja2VkKSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgLy8gfVxuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjaGVja2JveCdzIGBjaGVja2VkYCB2YWx1ZSBjaGFuZ2VzLiAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8THlDaGVja2JveENoYW5nZT4gPVxuICAgICAgbmV3IEV2ZW50RW1pdHRlcjxMeUNoZWNrYm94Q2hhbmdlPigpO1xuXG4gIC8qKiBUaGUgbmF0aXZlIGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+YCBlbGVtZW50ICovXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIF9pbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgX29uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG4gIHByaXZhdGUgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9jb21tb25TdHlsZXM6IEx5Q29tbW9uU3R5bGVzLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIHJlYWRvbmx5IHNSZW5kZXJlcjogU3R5bGVSZW5kZXJlcixcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBzdXBlcihfdGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbDtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcgPSB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHJhZGl1czogJ2NvbnRhaW5lclNpemUnLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IDE1MFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgLy8gc2V0IGRlZmF1bHQgY29sb3JcbiAgICBpZiAoIXRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuY29sb3IgPSBERUZBVUxUX1dJVEhfQ09MT1I7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGZvY3VzU3RhdGUgPSB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9pbnB1dEVsZW1lbnQsIHRoaXMuX2VsKTtcbiAgICBpZiAoZm9jdXNTdGF0ZSkge1xuICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX2lubmVyQ29udGFpbmVyO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzU3RhdGUudW5saXN0ZW4odGhpcy5fZWwpO1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gISF2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKiogVG9nZ2xlcyB0aGUgYGNoZWNrZWRgIHN0YXRlIG9mIHRoZSBjaGVja2JveC4gKi9cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gIH1cblxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIHRoaXMuX2VtaXRDaGFuZ2VFdmVudCgpO1xuICAgIH1cbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9vbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX2VtaXRDaGFuZ2VFdmVudCgpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMuY2hlY2tlZCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh7XG4gICAgICBzb3VyY2U6IHRoaXMsXG4gICAgICBjaGVja2VkOiB0aGlzLmNoZWNrZWRcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG59XG4iXX0=