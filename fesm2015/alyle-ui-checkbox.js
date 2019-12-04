import { __decorate } from 'tslib';
import { forwardRef, EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, NgZone, ViewChild, Input, Output, Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { styleTemplateToString, StyleCollection, LY_COMMON_STYLES, mixinDisableRipple, toBoolean, LyCoreStyles, LyTheme2, LyFocusState, StyleRenderer, LyHostClass, LyCommonModule } from '@alyle/ui';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

var LyCheckbox_1;
const STYLE_PRIORITY = -2;
const DEFAULT_WITH_COLOR = 'accent';
const DEFAULT_DISABLE_RIPPLE = false;
const STYLES = (theme, ref) => {
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
const LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LyCheckbox),
    multi: true
};
/** Change event object emitted by LyCheckbox. */
class LyCheckboxChange {
}
/** @docs-private */
class LyCheckboxBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
const LyCheckboxMixinBase = mixinDisableRipple(LyCheckboxBase);
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
    { type: LyCoreStyles },
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: LyFocusState },
    { type: StyleRenderer },
    { type: NgZone }
];
__decorate([
    ViewChild('innerContainer', { static: false })
], LyCheckbox.prototype, "_innerContainer", void 0);
__decorate([
    Input()
], LyCheckbox.prototype, "value", void 0);
__decorate([
    Input()
], LyCheckbox.prototype, "color", null);
__decorate([
    Input()
], LyCheckbox.prototype, "checked", null);
__decorate([
    Input()
], LyCheckbox.prototype, "required", null);
__decorate([
    Input()
], LyCheckbox.prototype, "disabled", null);
__decorate([
    Output()
], LyCheckbox.prototype, "change", void 0);
__decorate([
    ViewChild('input', { static: false })
], LyCheckbox.prototype, "_inputElement", void 0);
LyCheckbox = LyCheckbox_1 = __decorate([
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

let LyCheckboxModule = class LyCheckboxModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { LY_CHECKBOX_CONTROL_VALUE_ACCESSOR, LyCheckbox, LyCheckboxBase, LyCheckboxChange, LyCheckboxMixinBase, LyCheckboxModule, STYLES };
//# sourceMappingURL=alyle-ui-checkbox.js.map
