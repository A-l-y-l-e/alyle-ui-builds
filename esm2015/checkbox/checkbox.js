var LyCheckbox_1;
import * as tslib_1 from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, NgZone, OnDestroy, OnInit, Output, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LyCoreStyles as LyCommonStyles, LyFocusState, LyTheme2, mixinDisableRipple, ThemeVariables, toBoolean, ThemeRef, styleTemplateToString, LyHostClass, StyleRenderer, LY_COMMON_STYLES, StyleCollection, LyClasses, StyleTemplate } from '@alyle/ui';
const STYLE_PRIORITY = -2;
const DEFAULT_WITH_COLOR = 'accent';
const DEFAULT_DISABLE_RIPPLE = false;
export const STYLES = (theme, ref) => {
    const checkbox = ref.selectorsOf(STYLES);
    const { before, after } = theme;
    return {
        $name: LyCheckbox.и,
        $priority: STYLE_PRIORITY,
        root: () => (className) => `${className}{margin-${after}:16px;margin-${before}:-16px;display:inline-flex;}${styleTemplateToString(((theme.checkbox
            && theme.checkbox.root
            && (theme.checkbox.root instanceof StyleCollection
                ? theme.checkbox.root.setTransformer(fn => fn(checkbox))
                : theme.checkbox.root(checkbox)))), `${className}`)}${className}${checkbox.disabled}:not(${checkbox.checked}) ${checkbox.icon}:before{color:${theme.disabled.default};}${className}${checkbox.disabled}{pointer-events:none;}${className}${checkbox.disabled} ${checkbox.layout}{color:${theme.text.secondary};}${className}${checkbox.disabled}${checkbox.checked} ${checkbox.icon}:before{border:0;background:${theme.disabled.default};}${className}${checkbox.onFocusByKeyboard} ${checkbox.icon}::after{box-shadow:0 0 0 12px;opacity:.13;border-radius:50%;}${className}:not(${checkbox.checked}) ${checkbox.icon}{color:${theme.text.secondary};}`,
        layout: (className) => `${className}{display:inline-flex;align-items:baseline;cursor:pointer;margin-${before}:16px;padding-top:12px;padding-bottom:12px;}`,
        icon: (className) => `${className}{position:relative;margin-${after}:8px;margin-top:auto;margin-bottom:auto;width:16px;height:16px;user-select:none;}${className}::before,${className}::after{content:'';width:16px;height:16px;margin:auto;box-sizing:border-box;}${styleTemplateToString((LY_COMMON_STYLES.fill), `${className}::before,${className}::after`)}${className}::before{border:solid 2px;border-radius:2px;}${className} svg{position:absolute;}${className} svg polyline{fill:none;stroke:${theme.background.primary.default};stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:18px;stroke-dashoffset:18px;}`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUNMLFlBQVksSUFBSSxjQUFjLEVBQzlCLFlBQVksRUFDWixRQUFRLEVBQ1Isa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxTQUFTLEVBQ1QsUUFBUSxFQUNSLHFCQUFxQixFQUNyQixXQUFXLEVBQ1gsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUduQyxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixNQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztBQUNwQyxNQUFNLHNCQUFzQixHQUFHLEtBQUssQ0FBQztBQWNyQyxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUEyQyxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ25GLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDaEMsT0FBTztRQUNMLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuQixTQUFTLEVBQUUsY0FBYztRQUN6QixJQUFJLEVBQUUsR0FBSSxFQUFFLENBQUMsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsV0FBVyxLQUFLLGdCQUFnQixNQUFNLCtCQUErQixxQkFBcUIsQ0FBQyxDQUNySSxDQUFDLEtBQUssQ0FBQyxRQUFRO2VBQ1YsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJO2VBQ25CLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFlBQVksZUFBZTtnQkFDaEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQ25DLENBQUMsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLFFBQVEsUUFBUSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEtBQUssU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLHlCQUF5QixTQUFTLEdBQUcsUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxVQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksK0JBQStCLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxLQUFLLFNBQVMsR0FBRyxRQUFRLENBQUMsaUJBQWlCLElBQUksUUFBUSxDQUFDLElBQUksZ0VBQWdFLFNBQVMsUUFBUSxRQUFRLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxJQUFJLFVBQVUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUk7UUFDL2xCLE1BQU0sRUFBRSxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxtRUFBbUUsTUFBTSw4Q0FBOEM7UUFDbEssSUFBSSxFQUFFLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLDZCQUE2QixLQUFLLG9GQUFvRixTQUFTLFlBQVksU0FBUyxnRkFBZ0YscUJBQXFCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsWUFBWSxTQUFTLFNBQVMsQ0FBQyxHQUFHLFNBQVMsZ0RBQWdELFNBQVMsMkJBQTJCLFNBQVMsa0NBQWtDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sMkdBQTJHO1FBQzduQixPQUFPLEVBQUUsR0FBSSxFQUFFLENBQUMsQ0FBQyxTQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUFHLFNBQVMsSUFBSSxRQUFRLENBQUMsSUFBSSxxQ0FBcUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxJQUFJLGlDQUFpQztRQUNwSyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsY0FBYztRQUN0QyxpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLFFBQVEsRUFBRSxHQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxJQUFJLFFBQVEsQ0FBQyxLQUFLLHVCQUF1QixTQUFTLElBQUksUUFBUSxDQUFDLElBQUksNkJBQTZCO1FBQ3BKLFVBQVUsRUFBRSxHQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxJQUFJLFFBQVEsQ0FBQyxJQUFJLGdDQUFnQyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLE1BQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJO0tBQ2xMLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSxrQ0FBa0MsR0FBUTtJQUNyRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO0lBQ3pDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUVGLGlEQUFpRDtBQUNqRCxNQUFNLE9BQU8sZ0JBQWdCO0NBSzVCO0FBRUQsb0JBQW9CO0FBQ3BCLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLFlBQ1MsTUFBZ0IsRUFDaEIsT0FBZTtRQURmLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUNwQixDQUFDO0NBQ047QUFFRCxvQkFBb0I7QUFDcEIsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7QUFpQnRFLElBQWEsVUFBVSxrQkFBdkIsTUFBYSxVQUFXLFNBQVEsbUJBQW1CO0lBNkZqRCxZQUNTLGFBQTZCLEVBQ3BDLE1BQWdCLEVBQ1IsR0FBZSxFQUNmLFNBQW9CLEVBQ3BCLGtCQUFxQyxFQUNyQyxXQUF5QixFQUN6QixjQUE2QixFQUNyQyxNQUFjO1FBRWQsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQVRmLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUU1QixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBakd2Qzs7O1dBR0c7UUFDTSxZQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQTRFeEQsaUVBQWlFO1FBQzlDLFdBQU0sR0FDckIsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFLekMsZUFBVSxHQUFjLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUN6QixrQ0FBNkIsR0FBeUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBYXJFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CLFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxFQUFFLGVBQWU7WUFDdkIsb0JBQW9CLEVBQUUsR0FBRztTQUMxQixDQUFDO0lBQ0osQ0FBQztJQXhGRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELElBQUksS0FBSyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUN4QyxHQUFHLFlBQVUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQy9CLENBQUMsS0FBMkMsRUFBRSxHQUFhLEVBQUUsRUFBRTtnQkFDN0QsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO29CQUMxQyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDOUM7Z0JBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLFlBQVUsQ0FBQyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7WUFDakYsQ0FBQyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFFSCxJQUFJLE9BQU8sS0FBYyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hELElBQUksT0FBTyxDQUFDLEdBQVk7UUFDdEIsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLGlDQUFpQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN2QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkU7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUU7UUFDSCxJQUFJO1FBQ0osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEdBQVk7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsR0FBWTtRQUN2QixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN4QixJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDM0U7WUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBK0JELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pFLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM3QixJQUFJLElBQUksQ0FBQyx1QkFBdUIsS0FBSyxJQUFJLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDbkYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztpQkFDdEM7Z0JBQ0QsSUFBSSxLQUFLLEtBQUssVUFBVSxFQUFFO29CQUN4QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO29CQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7aUJBQ2pGO2dCQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFN0MsNkJBQTZCO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQztTQUM3QztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELG9CQUFvQjtJQUNwQixVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELG9CQUFvQjtJQUNwQixnQkFBZ0IsQ0FBQyxFQUF3QjtRQUN2QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFFRCxtREFBbUQ7SUFDbkQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBWTtRQUN4QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFZO1FBQ3BCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixNQUFNLEVBQUUsSUFBSTtZQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sYUFBYTtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUVGLENBQUE7QUF2TUMsY0FBYztBQUNFLFlBQUMsR0FBRyxZQUFZLENBQUM7O1lBNEZULGNBQWM7WUFDNUIsUUFBUTtZQUNILFVBQVU7WUFDSixTQUFTO1lBQ0EsaUJBQWlCO1lBQ3hCLFlBQVk7WUFDVCxhQUFhO1lBQzdCLE1BQU07O0FBckZnQztJQUEvQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7bURBQTZDO0FBR25GO0lBQVIsS0FBSyxFQUFFO3lDQUFlO0FBR3ZCO0lBREMsS0FBSyxFQUFFO3VDQUdQO0FBcUJEO0lBREMsS0FBSyxFQUFFO3lDQUN3QztBQWVoRDtJQURDLEtBQUssRUFBRTswQ0FHUDtBQUtEO0lBREMsS0FBSyxFQUFFOzBDQUdQO0FBZVM7SUFBVCxNQUFNLEVBQUU7MENBQ2dDO0FBR0Y7SUFBdEMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztpREFBNkM7QUF4RnhFLFVBQVU7SUFmdEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsc2pCQUE0QjtRQUM1QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxTQUFTLEVBQUU7WUFDVCxXQUFXO1lBQ1gsYUFBYTtZQUNiLGtDQUFrQztTQUNuQztRQUNELFFBQVEsRUFBRSxZQUFZO1FBQ3RCLE1BQU0sRUFBRTtZQUNOLGVBQWU7U0FDaEI7S0FDRixDQUFDO0dBQ1csVUFBVSxDQXdNdEI7U0F4TVksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgTHlDb3JlU3R5bGVzIGFzIEx5Q29tbW9uU3R5bGVzLFxuICBMeUZvY3VzU3RhdGUsXG4gIEx5VGhlbWUyLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIFRoZW1lVmFyaWFibGVzLFxuICB0b0Jvb2xlYW4sXG4gIFRoZW1lUmVmLFxuICBzdHlsZVRlbXBsYXRlVG9TdHJpbmcsXG4gIEx5SG9zdENsYXNzLFxuICBTdHlsZVJlbmRlcmVyLFxuICBMWV9DT01NT05fU1RZTEVTLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIEx5Q2xhc3NlcyxcbiAgU3R5bGVUZW1wbGF0ZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ0BhbHlsZS91aS9jb2xvcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX1dJVEhfQ09MT1IgPSAnYWNjZW50JztcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcblxuZXhwb3J0IGludGVyZmFjZSBMeUNoZWNrYm94VGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBDaGVja2JveCBDb21wb25lbnQuICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgLyoqIFN0eWxlcyB0aGF0IGFwcGx5IHdoZW4gYSBjb2xvciBpcyBzZXQuICovXG4gIGNvbG9yPzogKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPiwgY29sb3I6IENvbG9yKSA9PiBTdHlsZVRlbXBsYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5Q2hlY2tib3hWYXJpYWJsZXMge1xuICBjaGVja2JveD86IEx5Q2hlY2tib3hUaGVtZTtcbn1cblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUNoZWNrYm94VmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIGNvbnN0IHsgYmVmb3JlLCBhZnRlciB9ID0gdGhlbWU7XG4gIHJldHVybiB7XG4gICAgJG5hbWU6IEx5Q2hlY2tib3gu0LgsXG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21hcmdpbi0ke2FmdGVyfToxNnB4O21hcmdpbi0ke2JlZm9yZX06LTE2cHg7ZGlzcGxheTppbmxpbmUtZmxleDt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAgICh0aGVtZS5jaGVja2JveFxuICAgICAgICAgICAgJiYgdGhlbWUuY2hlY2tib3gucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLmNoZWNrYm94LnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5jaGVja2JveC5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGNoZWNrYm94KSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5jaGVja2JveC5yb290KGNoZWNrYm94KSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfSR7Y2hlY2tib3guZGlzYWJsZWR9Om5vdCgke2NoZWNrYm94LmNoZWNrZWR9KSAke2NoZWNrYm94Lmljb259OmJlZm9yZXtjb2xvcjoke3RoZW1lLmRpc2FibGVkLmRlZmF1bHR9O30ke2NsYXNzTmFtZX0ke2NoZWNrYm94LmRpc2FibGVkfXtwb2ludGVyLWV2ZW50czpub25lO30ke2NsYXNzTmFtZX0ke2NoZWNrYm94LmRpc2FibGVkfSAke2NoZWNrYm94LmxheW91dH17Y29sb3I6JHt0aGVtZS50ZXh0LnNlY29uZGFyeX07fSR7Y2xhc3NOYW1lfSR7Y2hlY2tib3guZGlzYWJsZWR9JHtjaGVja2JveC5jaGVja2VkfSAke2NoZWNrYm94Lmljb259OmJlZm9yZXtib3JkZXI6MDtiYWNrZ3JvdW5kOiR7dGhlbWUuZGlzYWJsZWQuZGVmYXVsdH07fSR7Y2xhc3NOYW1lfSR7Y2hlY2tib3gub25Gb2N1c0J5S2V5Ym9hcmR9ICR7Y2hlY2tib3guaWNvbn06OmFmdGVye2JveC1zaGFkb3c6MCAwIDAgMTJweDtvcGFjaXR5Oi4xMztib3JkZXItcmFkaXVzOjUwJTt9JHtjbGFzc05hbWV9Om5vdCgke2NoZWNrYm94LmNoZWNrZWR9KSAke2NoZWNrYm94Lmljb259e2NvbG9yOiR7dGhlbWUudGV4dC5zZWNvbmRhcnl9O31gLFxuICAgIGxheW91dDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6YmFzZWxpbmU7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLSR7YmVmb3JlfToxNnB4O3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweDt9YCxcbiAgICBpY29uOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLSR7YWZ0ZXJ9OjhweDttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7dXNlci1zZWxlY3Q6bm9uZTt9JHtjbGFzc05hbWV9OjpiZWZvcmUsJHtjbGFzc05hbWV9OjphZnRlcntjb250ZW50OicnO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7bWFyZ2luOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfTo6YmVmb3JlLCR7Y2xhc3NOYW1lfTo6YWZ0ZXJgKX0ke2NsYXNzTmFtZX06OmJlZm9yZXtib3JkZXI6c29saWQgMnB4O2JvcmRlci1yYWRpdXM6MnB4O30ke2NsYXNzTmFtZX0gc3Zne3Bvc2l0aW9uOmFic29sdXRlO30ke2NsYXNzTmFtZX0gc3ZnIHBvbHlsaW5le2ZpbGw6bm9uZTtzdHJva2U6JHt0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdH07c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1kYXNoYXJyYXk6MThweDtzdHJva2UtZGFzaG9mZnNldDoxOHB4O31gLFxuICAgIGNoZWNrZWQ6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjaGVja2JveC5pY29ufTo6YmVmb3Jle2JhY2tncm91bmQ6Y3VycmVudENvbG9yO30ke2NsYXNzTmFtZX0gJHtjaGVja2JveC5pY29ufSBwb2x5bGluZXtzdHJva2UtZGFzaG9mZnNldDowO31gLFxuICAgIGlucHV0OiBMWV9DT01NT05fU1RZTEVTLnZpc3VhbGx5SGlkZGVuLFxuICAgIG9uRm9jdXNCeUtleWJvYXJkOiBudWxsLFxuICAgIGRpc2FibGVkOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2hlY2tib3guaW5wdXR9e3Zpc2liaWxpdHk6aGlkZGVuO30ke2NsYXNzTmFtZX0gJHtjaGVja2JveC5pY29ufXtjb2xvcjppbmhlcml0ICFpbXBvcnRhbnQ7fWAsXG4gICAgYW5pbWF0aW9uczogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NoZWNrYm94Lmljb259IHN2ZyBwb2x5bGluZXt0cmFuc2l0aW9uOmFsbCAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmVudGVyaW5nfW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc2hhcnB9O31gXG4gIH07XG59O1xuXG4vKipcbiAqIFRoaXMgYWxsb3dzIGl0IHRvIHN1cHBvcnQgWyhuZ01vZGVsKV0uXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBMWV9DSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMeUNoZWNrYm94KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbi8qKiBDaGFuZ2UgZXZlbnQgb2JqZWN0IGVtaXR0ZWQgYnkgTHlDaGVja2JveC4gKi9cbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94Q2hhbmdlIHtcbiAgLyoqIFRoZSBzb3VyY2UgTHlDaGVja2JveCBvZiB0aGUgZXZlbnQuICovXG4gIHNvdXJjZTogTHlDaGVja2JveDtcbiAgLyoqIFRoZSBuZXcgYGNoZWNrZWRgIHZhbHVlIG9mIHRoZSBjaGVja2JveC4gKi9cbiAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94QmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeUNoZWNrYm94TWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlUmlwcGxlKEx5Q2hlY2tib3hCYXNlKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlIb3N0Q2xhc3MsXG4gICAgU3R5bGVSZW5kZXJlcixcbiAgICBMWV9DSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLFxuICBdLFxuICBleHBvcnRBczogJ2x5Q2hlY2tib3gnLFxuICBpbnB1dHM6IFtcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94IGV4dGVuZHMgTHlDaGVja2JveE1peGluQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAaWdub3JlICovXG4gIHN0YXRpYyByZWFkb25seSDQuCA9ICdMeUNoZWNrYm94JztcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuICBwcm90ZWN0ZWQgX2NvbG9yOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfY29sb3JDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3JlcXVpcmVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2luZGV0ZXJtaW5hdGU6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfY2hlY2tlZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZDtcbiAgcHJpdmF0ZSBfb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdpbm5lckNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfaW5uZXJDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIC8qKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSBuYXRpdmUgaW5wdXQgZWxlbWVudCAqL1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl9zdHlsZVJlbmRlcmVyLmFkZChcbiAgICAgICAgYCR7THlDaGVja2JveC7QuH0tLWNvbG9yLSR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUNoZWNrYm94VmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hlY2tib3ggPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgICAgICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgICAgICBpZiAodGhlbWUuY2hlY2tib3ggJiYgdGhlbWUuY2hlY2tib3guY29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVtZS5jaGVja2JveC5jb2xvcihjaGVja2JveCwgY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7THlDaGVja2JveC7QuH06IHN0eWxlcyB0aGVtZS5jaGVja2JveC5jb2xvciBpcyB1bmRlZmluZWRgKTtcbiAgICAgIH0sIFNUWUxFX1BSSU9SSVRZLCB0aGlzLl9jb2xvckNsYXNzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY2hlY2tlZDsgfVxuICBzZXQgY2hlY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAvLyBpZiAobmV3VmFsICE9PSB0aGlzLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdWYWw7XG4gICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jaGVja2VkKTtcbiAgICAgIH1cbiAgICAvLyB9XG4gICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsO1xuICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGNoZWNrYm94J3MgYGNoZWNrZWRgIHZhbHVlIGNoYW5nZXMuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxMeUNoZWNrYm94Q2hhbmdlPiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPEx5Q2hlY2tib3hDaGFuZ2U+KCk7XG5cbiAgLyoqIFRoZSBuYXRpdmUgYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5gIGVsZW1lbnQgKi9cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgX2lucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBfb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2NvbW1vblN0eWxlczogTHlDb21tb25TdHlsZXMsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgcHJpdmF0ZSBfc3R5bGVSZW5kZXJlcjogU3R5bGVSZW5kZXJlcixcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBzdXBlcihfdGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbDtcbiAgICB0aGlzLl9yaXBwbGVDb25maWcgPSB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHJhZGl1czogJ2NvbnRhaW5lclNpemUnLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IDE1MFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgLy8gc2V0IGRlZmF1bHQgY29sb3JcbiAgICBpZiAoIXRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuY29sb3IgPSBERUZBVUxUX1dJVEhfQ09MT1I7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGZvY3VzU3RhdGUgPSB0aGlzLl9mb2N1c1N0YXRlLmxpc3Rlbih0aGlzLl9pbnB1dEVsZW1lbnQsIHRoaXMuX2VsKTtcbiAgICBpZiAoZm9jdXNTdGF0ZSkge1xuICAgICAgZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgICB0aGlzLl9vbkZvY3VzQnlLZXlib2FyZFN0YXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgdGhpcy5fb25Gb2N1c0J5S2V5Ym9hcmRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLm9uRm9jdXNCeUtleWJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX2lubmVyQ29udGFpbmVyO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzU3RhdGUudW5saXN0ZW4odGhpcy5fZWwpO1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gISF2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKiogVG9nZ2xlcyB0aGUgYGNoZWNrZWRgIHN0YXRlIG9mIHRoZSBjaGVja2JveC4gKi9cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gIH1cblxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgIHRoaXMuX2VtaXRDaGFuZ2VFdmVudCgpO1xuICAgIH1cbiAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9vbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX2VtaXRDaGFuZ2VFdmVudCgpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMuY2hlY2tlZCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh7XG4gICAgICBzb3VyY2U6IHRoaXMsXG4gICAgICBjaGVja2VkOiB0aGlzLmNoZWNrZWRcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG59XG4iXX0=