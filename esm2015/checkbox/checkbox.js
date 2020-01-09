var LyCheckbox_1;
import * as tslib_1 from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, OnDestroy, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LyCoreStyles as LyCommonStyles, LyFocusState, LyTheme2, mixinDisableRipple, ThemeVariables, toBoolean, ThemeRef, st2c, LyHostClass, StyleRenderer, LY_COMMON_STYLES, StyleCollection, LyClasses, StyleTemplate } from '@alyle/ui';
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
let LyCheckbox = LyCheckbox_1 = class LyCheckbox extends LyCheckboxMixinBase {
    constructor(_commonStyles, _theme, _el, _renderer, _changeDetectorRef, _focusState, _styleRenderer, ngZone) {
        super(_theme, ngZone);
        this._commonStyles = _commonStyles;
        this._el = _el;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._focusState = _focusState;
        this._styleRenderer = _styleRenderer;
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
    get color() {
        return this._color;
    }
    set color(val) {
        if (val !== this.color) {
            this._color = val;
            this._colorClass = this._styleRenderer.add(`${LyCheckbox_1.и}--color-${val}`, (theme, ref) => {
                const checkbox = ref.selectorsOf(STYLES);
                const color = theme.colorOf(val);
                if (theme.checkbox && theme.checkbox.color) {
                    return theme.checkbox.color(checkbox, color);
                }
                throw new Error(`${LyCheckbox_1.и}: styles theme.checkbox.color is undefined`);
            }, STYLE_PRIORITY, this._colorClass);
        }
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
    Input()
], LyCheckbox.prototype, "color", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUNMLFlBQVksSUFBSSxjQUFjLEVBQzlCLFlBQVksRUFDWixRQUFRLEVBQ1Isa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxTQUFTLEVBQ1QsUUFBUSxFQUNSLElBQUksRUFDSixXQUFXLEVBQ1gsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUduQyxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixNQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztBQUNwQyxNQUFNLHNCQUFzQixHQUFHLEtBQUssQ0FBQztBQWNyQyxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUEyQyxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ25GLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDaEMsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuQixTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsR0FB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O1FBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFNBQVMsRUFBRTtZQUNULFdBQVc7WUFDWCxhQUFhO1lBQ2Isa0NBQWtDO1NBQ25DO1FBQ0QsUUFBUSxFQUFFLFlBQVk7UUFDdEIsTUFBTSxFQUFFO1lBQ04sZUFBZTtTQUNoQjtLQUNGLENBQUM7R0FDVyxVQUFVLENBd010QjtTQXhNWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBMeUNvcmVTdHlsZXMgYXMgTHlDb21tb25TdHlsZXMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlUaGVtZTIsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIHRvQm9vbGVhbixcbiAgVGhlbWVSZWYsXG4gIHN0MmMsXG4gIEx5SG9zdENsYXNzLFxuICBTdHlsZVJlbmRlcmVyLFxuICBMWV9DT01NT05fU1RZTEVTLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIEx5Q2xhc3NlcyxcbiAgU3R5bGVUZW1wbGF0ZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ0BhbHlsZS91aS9jb2xvcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1dJVEhfQ09MT1IgPSAnYWNjZW50JztcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcblxuZXhwb3J0IGludGVyZmFjZSBMeUNoZWNrYm94VGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBDaGVja2JveCBDb21wb25lbnQuICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgLyoqIFN0eWxlcyB0aGF0IGFwcGx5IHdoZW4gYSBjb2xvciBpcyBzZXQuICovXG4gIGNvbG9yPzogKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPiwgY29sb3I6IENvbG9yKSA9PiBTdHlsZVRlbXBsYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5Q2hlY2tib3hWYXJpYWJsZXMge1xuICBjaGVja2JveD86IEx5Q2hlY2tib3hUaGVtZTtcbn1cblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUNoZWNrYm94VmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIGNvbnN0IHsgYmVmb3JlLCBhZnRlciB9ID0gdGhlbWU7XG4gIHJldHVybiB7XG4gICAgJG5hbWU6IEx5Q2hlY2tib3gu0LgsXG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21hcmdpbi0ke2FmdGVyfToxNnB4O21hcmdpbi0ke2JlZm9yZX06LTE2cHg7ZGlzcGxheTppbmxpbmUtZmxleDt9JHtzdDJjKChcbiAgICAgICAgICAodGhlbWUuY2hlY2tib3hcbiAgICAgICAgICAgICYmIHRoZW1lLmNoZWNrYm94LnJvb3RcbiAgICAgICAgICAgICYmICh0aGVtZS5jaGVja2JveC5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUuY2hlY2tib3gucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbihjaGVja2JveCkpXG4gICAgICAgICAgICAgIDogdGhlbWUuY2hlY2tib3gucm9vdChjaGVja2JveCkpXG4gICAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX0ke2NoZWNrYm94LmRpc2FibGVkfTpub3QoJHtjaGVja2JveC5jaGVja2VkfSkgJHtjaGVja2JveC5pY29ufTpiZWZvcmV7Y29sb3I6JHt0aGVtZS5kaXNhYmxlZC5kZWZhdWx0fTt9JHtjbGFzc05hbWV9JHtjaGVja2JveC5kaXNhYmxlZH17cG9pbnRlci1ldmVudHM6bm9uZTt9JHtjbGFzc05hbWV9JHtjaGVja2JveC5kaXNhYmxlZH0gJHtjaGVja2JveC5sYXlvdXR9e2NvbG9yOiR7dGhlbWUudGV4dC5zZWNvbmRhcnl9O30ke2NsYXNzTmFtZX0ke2NoZWNrYm94LmRpc2FibGVkfSR7Y2hlY2tib3guY2hlY2tlZH0gJHtjaGVja2JveC5pY29ufTpiZWZvcmV7Ym9yZGVyOjA7YmFja2dyb3VuZDoke3RoZW1lLmRpc2FibGVkLmRlZmF1bHR9O30ke2NsYXNzTmFtZX0ke2NoZWNrYm94Lm9uRm9jdXNCeUtleWJvYXJkfSAke2NoZWNrYm94Lmljb259OjphZnRlcntib3gtc2hhZG93OjAgMCAwIDEycHg7b3BhY2l0eTouMTM7Ym9yZGVyLXJhZGl1czo1MCU7fSR7Y2xhc3NOYW1lfTpub3QoJHtjaGVja2JveC5jaGVja2VkfSkgJHtjaGVja2JveC5pY29ufXtjb2xvcjoke3RoZW1lLnRleHQuc2Vjb25kYXJ5fTt9YCxcbiAgICBsYXlvdXQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmJhc2VsaW5lO2N1cnNvcjpwb2ludGVyO21hcmdpbi0ke2JlZm9yZX06MTZweDtwYWRkaW5nLXRvcDoxMnB4O3BhZGRpbmctYm90dG9tOjEycHg7fWAsXG4gICAgaWNvbjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi0ke2FmdGVyfTo4cHg7bWFyZ2luLXRvcDphdXRvO21hcmdpbi1ib3R0b206YXV0bzt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O3VzZXItc2VsZWN0Om5vbmU7fSR7Y2xhc3NOYW1lfTo6YmVmb3JlLCR7Y2xhc3NOYW1lfTo6YWZ0ZXJ7Y29udGVudDonJzt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O21hcmdpbjphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDt9JHtzdDJjKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9OjpiZWZvcmUsJHtjbGFzc05hbWV9OjphZnRlcmApfSR7Y2xhc3NOYW1lfTo6YmVmb3Jle2JvcmRlcjpzb2xpZCAycHg7Ym9yZGVyLXJhZGl1czoycHg7fSR7Y2xhc3NOYW1lfSBzdmd7cG9zaXRpb246YWJzb2x1dGU7fSR7Y2xhc3NOYW1lfSBzdmcgcG9seWxpbmV7ZmlsbDpub25lO3N0cm9rZToke3RoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0fTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLWRhc2hhcnJheToxOHB4O3N0cm9rZS1kYXNob2Zmc2V0OjE4cHg7fWAsXG4gICAgY2hlY2tlZDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NoZWNrYm94Lmljb259OjpiZWZvcmV7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7fSR7Y2xhc3NOYW1lfSAke2NoZWNrYm94Lmljb259IHBvbHlsaW5le3N0cm9rZS1kYXNob2Zmc2V0OjA7fWAsXG4gICAgaW5wdXQ6IExZX0NPTU1PTl9TVFlMRVMudmlzdWFsbHlIaWRkZW4sXG4gICAgb25Gb2N1c0J5S2V5Ym9hcmQ6IG51bGwsXG4gICAgZGlzYWJsZWQ6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjaGVja2JveC5pbnB1dH17dmlzaWJpbGl0eTpoaWRkZW47fSR7Y2xhc3NOYW1lfSAke2NoZWNrYm94Lmljb259e2NvbG9yOmluaGVyaXQgIWltcG9ydGFudDt9YCxcbiAgICBhbmltYXRpb25zOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2hlY2tib3guaWNvbn0gc3ZnIHBvbHlsaW5le3RyYW5zaXRpb246YWxsICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuZW50ZXJpbmd9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zaGFycH07fWBcbiAgfTtcbn07XG5cbi8qKlxuICogVGhpcyBhbGxvd3MgaXQgdG8gc3VwcG9ydCBbKG5nTW9kZWwpXS5cbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IExZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5Q2hlY2tib3gpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqIENoYW5nZSBldmVudCBvYmplY3QgZW1pdHRlZCBieSBMeUNoZWNrYm94LiAqL1xuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hDaGFuZ2Uge1xuICAvKiogVGhlIHNvdXJjZSBMeUNoZWNrYm94IG9mIHRoZSBldmVudC4gKi9cbiAgc291cmNlOiBMeUNoZWNrYm94O1xuICAvKiogVGhlIG5ldyBgY2hlY2tlZGAgdmFsdWUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5Q2hlY2tib3hNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUoTHlDaGVja2JveEJhc2UpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3guaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyLFxuICAgIExZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsXG4gIF0sXG4gIGV4cG9ydEFzOiAnbHlDaGVja2JveCcsXG4gIGlucHV0czogW1xuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3ggZXh0ZW5kcyBMeUNoZWNrYm94TWl4aW5CYXNlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgc3RhdGljIHJlYWRvbmx5INC4ID0gJ0x5Q2hlY2tib3gnO1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIHByb3RlY3RlZCBfY29sb3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9jb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfaW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9jaGVja2VkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkO1xuICBwcml2YXRlIF9vbkZvY3VzQnlLZXlib2FyZFN0YXRlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ2lubmVyQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9pbm5lckNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgLyoqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIG5hdGl2ZSBpbnB1dCBlbGVtZW50ICovXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMuX3N0eWxlUmVuZGVyZXIuYWRkKFxuICAgICAgICBgJHtMeUNoZWNrYm94LtC4fS0tY29sb3ItJHt2YWx9YCxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5Q2hlY2tib3hWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGVja2JveCA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3JPZih2YWwpO1xuICAgICAgICAgIGlmICh0aGVtZS5jaGVja2JveCAmJiB0aGVtZS5jaGVja2JveC5jb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoZW1lLmNoZWNrYm94LmNvbG9yKGNoZWNrYm94LCBjb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtMeUNoZWNrYm94LtC4fTogc3R5bGVzIHRoZW1lLmNoZWNrYm94LmNvbG9yIGlzIHVuZGVmaW5lZGApO1xuICAgICAgfSwgU1RZTEVfUFJJT1JJVFksIHRoaXMuX2NvbG9yQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jaGVja2VkOyB9XG4gIHNldCBjaGVja2VkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIC8vIGlmIChuZXdWYWwgIT09IHRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld1ZhbDtcbiAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmNoZWNrZWQpO1xuICAgICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY2hlY2tib3gncyBgY2hlY2tlZGAgdmFsdWUgY2hhbmdlcy4gKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPEx5Q2hlY2tib3hDaGFuZ2U+ID1cbiAgICAgIG5ldyBFdmVudEVtaXR0ZXI8THlDaGVja2JveENoYW5nZT4oKTtcblxuICAvKiogVGhlIG5hdGl2ZSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPmAgZWxlbWVudCAqL1xuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBfaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIF9vblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfY29tbW9uU3R5bGVzOiBMeUNvbW1vblN0eWxlcyxcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBwcml2YXRlIF9zdHlsZVJlbmRlcmVyOiBTdHlsZVJlbmRlcmVyLFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHN1cGVyKF90aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsO1xuICAgIHRoaXMuX3JpcHBsZUNvbmZpZyA9IHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgcmFkaXVzOiAnY29udGFpbmVyU2l6ZScsXG4gICAgICBwZXJjZW50YWdlVG9JbmNyZWFzZTogMTUwXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICAvLyBzZXQgZGVmYXVsdCBjb2xvclxuICAgIGlmICghdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy5jb2xvciA9IERFRkFVTFRfV0lUSF9DT0xPUjtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgZm9jdXNTdGF0ZSA9IHRoaXMuX2ZvY3VzU3RhdGUubGlzdGVuKHRoaXMuX2lucHV0RWxlbWVudCwgdGhpcy5fZWwpO1xuICAgIGlmIChmb2N1c1N0YXRlKSB7XG4gICAgICBmb2N1c1N0YXRlLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICAgIHRoaXMuX29uRm9jdXNCeUtleWJvYXJkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMub25Gb2N1c0J5S2V5Ym9hcmQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy5faW5uZXJDb250YWluZXI7XG5cbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZm9jdXNTdGF0ZS51bmxpc3Rlbih0aGlzLl9lbCk7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBgY2hlY2tlZGAgc3RhdGUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgfVxuXG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KCk7XG4gICAgfVxuICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX29uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW1pdENoYW5nZUV2ZW50KCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy5jaGVja2VkKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIGNoZWNrZWQ6IHRoaXMuY2hlY2tlZFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiJdfQ==