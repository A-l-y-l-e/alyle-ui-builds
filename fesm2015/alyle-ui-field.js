import { __decorate, __param } from 'tslib';
import { Directive, InjectionToken, Renderer2, ElementRef, Inject, Input, ChangeDetectorRef, NgZone, ViewChild, ContentChild, forwardRef, ContentChildren, HostListener, Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, Self, HostBinding, NgModule } from '@angular/core';
import { LyTheme2, keyframesUniqueId, styleTemplateToString, StyleCollection, LY_COMMON_STYLES, toBoolean, Platform, DirAlias, ElementObserver, StyleRenderer, LyHostClass, LyCommonModule } from '@alyle/ui';
import { Subject } from 'rxjs';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { CommonModule } from '@angular/common';

let LyLabel = class LyLabel {
};
LyLabel = __decorate([
    Directive({
        selector: 'ly-field > ly-label'
    })
], LyLabel);

let LyPlaceholder = class LyPlaceholder {
};
LyPlaceholder = __decorate([
    Directive({
        selector: 'ly-field > ly-placeholder'
    })
], LyPlaceholder);

/**
 * For internal use only.
 * @docs-private
 */
const LY_FIELD_STYLES_TOKEN = new InjectionToken('LY_FIELD_STYLES_TOKEN');

/** LyHint */
const STYLE_PRIORITY = -2;
/** Hint text to be shown underneath the field. */
let LyHint = class LyHint {
    constructor(_renderer, _el, _theme, styles) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.hint);
    }
    set align(val) {
        if (val) {
            if (val === 'after') {
                this._renderer.addClass(this._el.nativeElement, this.classes.hintAfter);
                this._alignClass = this.classes.hintAfter;
            }
            else {
                this._renderer.addClass(this._el.nativeElement, this.classes.hintBefore);
                this._alignClass = this.classes.hintBefore;
            }
        }
        else if (this._alignClass) {
            this._renderer.removeClass(this._el.nativeElement, this._alignClass);
            this._alignClass = undefined;
        }
        this._align = val;
    }
    get align() {
        return this._align;
    }
};
LyHint.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 },
    { type: undefined, decorators: [{ type: Inject, args: [LY_FIELD_STYLES_TOKEN,] }] }
];
__decorate([
    Input()
], LyHint.prototype, "align", null);
LyHint = __decorate([
    Directive({
        selector: 'ly-field > ly-hint'
    }),
    __param(3, Inject(LY_FIELD_STYLES_TOKEN))
], LyHint);

/** Prefix to be placed the before of the field. */
let LyPrefix = class LyPrefix {
};
LyPrefix = __decorate([
    Directive({
        selector: '[lyPrefix]',
    })
], LyPrefix);

/** Suffix to be placed the after of the field. */
let LySuffix = class LySuffix {
};
LySuffix = __decorate([
    Directive({
        selector: '[lySuffix]',
    })
], LySuffix);

const STYLE_PRIORITY$1 = -2;
let LyError = class LyError {
    constructor(renderer, el, theme, styles) {
        const className = theme.addStyleSheet(styles, STYLE_PRIORITY$1).error;
        renderer.addClass(el.nativeElement, className);
    }
};
LyError.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 },
    { type: undefined, decorators: [{ type: Inject, args: [LY_FIELD_STYLES_TOKEN,] }] }
];
LyError = __decorate([
    Directive({
        selector: 'ly-error'
    }),
    __param(3, Inject(LY_FIELD_STYLES_TOKEN))
], LyError);

/** An interface which allows a control to work inside of a `LyField`. */
class LyFieldControlBase {
}

var LyNativeControl_1;
/** LyField */
const STYLE_PRIORITY$2 = -2;
const DEFAULT_APPEARANCE = 'standard';
const DEFAULT_WITH_COLOR = 'primary';
const inputText = [
    'text',
    'number',
    'password',
    'search',
    'tel',
    'url'
];
const STYLE_SELECT_ARROW = (className) => `${className}::after{position:absolute;content:'';width:0;height:0;border-left:0.3125em solid transparent;border-right:0.3125em solid transparent;border-top:0.3125em solid;top:50%;{after}:0;margin-top:-0.15625em;pointer-events:none;}`;
const STYLES = (theme, ref) => {
    const classes = ref.selectorsOf(STYLES);
    const { before, after } = theme;
    const shake = keyframesUniqueId.next();
    return {
        $priority: STYLE_PRIORITY$2,
        $global: (className) => `@keyframes ${shake}{${className} 0%{margin-${before}:0;}${className} 40%{margin-${before}:2px;}${className} 50%{margin-${before}:-2px;}${className} 70%{margin-${before}:2px;}${className} 100%{margin-${before}:0;}}`,
        root: () => (className) => `${className}{display:inline-block;position:relative;margin-top:1em;line-height:1.5;}${styleTemplateToString(((theme.field
            && theme.field.root
            && (theme.field.root instanceof StyleCollection
                ? theme.field.root.setTransformer(fn => fn(classes))
                : theme.field.root(classes)))), `${className}`)}${className} ${classes.hint},${className} ${classes.error}{display:block;font-size:.75em;margin-top:.25em;}`,
        animations: () => (className) => `${className} ${classes.labelSpan}{transition:font-size ${theme.animations.curves.deceleration} .${theme.animations.durations.complex}s;}${className} ${classes.label}{transition:${theme.animations.curves.deceleration} .${theme.animations.durations.complex}s;}`,
        container: (className) => `${className}{height:100%;display:flex;align-items:center;position:relative;-webkit-tap-highlight-color:transparent;}${styleTemplateToString((LY_COMMON_STYLES.fill), `${className}:after`)}${className}:after{content:'';pointer-events:none;}`,
        fieldset: (className) => `${styleTemplateToString((LY_COMMON_STYLES.fill), `${className}`)}${className}{margin:0;border-style:solid;border-width:0;}`,
        fieldsetSpan: (className) => `${className}{padding:0;height:2px;}`,
        labelSpan: (className) => `${className}{max-width:100%;display:inline-block;}`,
        prefix: (className) => `${className}{max-height:2em;display:flex;align-items:center;}`,
        infix: (className) => `${className}{display:inline-flex;position:relative;align-items:baseline;min-width:0;width:180px;flex:1 0;}`,
        suffix: (className) => `${className}{max-height:2em;display:flex;align-items:center;}`,
        labelContainer: (className) => `${styleTemplateToString((LY_COMMON_STYLES.fill), `${className}`)}${className}{pointer-events:none;display:flex;width:100%;}`,
        labelSpacingStart: null,
        labelCenter: (className) => `${className}{display:flex;max-width:100%;}`,
        labelSpacingEnd: (className) => `${className}{flex:1;}`,
        label: (className) => `${styleTemplateToString((LY_COMMON_STYLES.fill), `${className}`)}${className}{margin:0;border:none;pointer-events:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%;}`,
        isFloatingLabel: null,
        floatingLabel: () => (className) => `${className} ${classes.labelSpan}{font-size:75%;}`,
        placeholder: (className) => `${styleTemplateToString((LY_COMMON_STYLES.fill), `${className}`)}${className}{pointer-events:none;}`,
        focused: null,
        inputNative: (className) => `${className}{resize:vertical;padding:0;outline:none;border:none;background-color:transparent;color:inherit;font:inherit;width:100%;}select${className}{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-${after}:1em;}select${className} option:not([disabled]){color:initial;}select${className} optgroup:not([disabled]){color:initial;}select${className}::-ms-expand{display:none;}select${className}::-moz-focus-inner{border:0;}select${className}:not(:disabled){cursor:pointer;}select${className}::-ms-value{color:inherit;background:0 0;}`,
        hintContainer: (className) => `${className}{min-height:1.25em;line-height:1.25;}${className} > div{display:flex;flex:1 0 auto;max-width:100%;overflow:hidden;justify-content:space-between;}`,
        disabled: () => (className) => `${className},${className} ${classes.label},${className} ${classes.container}:after{color:${theme.disabled.default};cursor:default;}`,
        hint: null,
        error: null,
        errorState: () => (className) => `${className} ${classes.label},${className} ${classes.hintContainer},${className}${classes.selectArrow} ${classes.infix}:after{color:${theme.warn.default}!important;}${className} ${classes.fieldset},${className} ${classes.container}:after{border-color:${theme.warn.default}!important;}${className} ${classes.inputNative}{caret-color:${theme.warn.default}!important;}${className} ${classes.hintContainer} ly-hint:not(${classes.hintAfter}){display:none;}${className} ${classes.labelSpan}{animation:${shake} ${theme.animations.durations.complex}ms ${theme.animations.curves.deceleration};}${className} ${classes.inputNative}::selection,${className} ${classes.inputNative}::-moz-selection{background-color:${theme.warn.default} !important;color:${theme.warn.contrast} !important;}`,
        hintAfter: (className) => `${className}{margin-${before}:auto;}`,
        hintBefore: (className) => `${className}{margin-${after}:auto;}`,
        selectArrow: () => (className) => `${className} ${classes.infix}::after{position:absolute;content:'';width:0;height:0;border-left:0.3125em solid transparent;border-right:0.3125em solid transparent;border-top:0.3125em solid;top:50%;${after}:0;margin-top:-0.15625em;pointer-events:none;}`
    };
};
let LyField = class LyField {
    constructor(_renderer, _el, _elementObserver, _theme, _cd, _ngZone, _styleRenderer) {
        this._renderer = _renderer;
        this._el = _el;
        this._elementObserver = _elementObserver;
        this._theme = _theme;
        this._cd = _cd;
        this._ngZone = _ngZone;
        this._styleRenderer = _styleRenderer;
        /**
         * styles
         * @docs-private
         */
        this.classes = this._theme.renderStyleSheet(STYLES);
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    get errorState() {
        return this._control ? this._control.errorState : false;
    }
    set fullWidth(val) {
        const newVal = toBoolean(val);
        if (newVal) {
            this._fullWidthClass = this._theme.addStyle(`fullWidth`, {
                display: 'block',
                width: '100%'
            }, this._getHostElement(), this._fullWidthClass, STYLE_PRIORITY$2);
        }
        else if (this._fullWidthClass) {
            this._renderer.removeClass(this._getHostElement(), this._fullWidthClass);
            this._fullWidthClass = undefined;
        }
        this._fullWidth = newVal;
    }
    get fullWidth() {
        return this._fullWidth;
    }
    /** Whether the label is floating. */
    set floatingLabel(val) {
        this._floatingLabel = toBoolean(val);
        this._updateFloatingLabel();
    }
    get floatingLabel() {
        return this._floatingLabel;
    }
    /** Theme color for the component. */
    set color(val) {
        if (val !== this._color) {
            this._color = val;
            this._colorClass = this._theme.addStyle(`ly-field.color:${val}`, (theme) => {
                const color = theme.colorOf(val);
                const contrast = theme.colorOf(`${val}:contrast`);
                return {
                    [`&.${this.classes.focused} .${this.classes.container}:after, &{focused}{selectArrow} {infix}:after`]: {
                        color
                    },
                    [`&.${this.classes.focused} .${this.classes.fieldset}`]: {
                        borderColor: color
                    },
                    [`&.${this.classes.focused} .${this.classes.label}`]: {
                        color
                    },
                    [`& .${this.classes.inputNative}`]: {
                        caretColor: color
                    },
                    '& {inputNative}::selection': {
                        backgroundColor: color,
                        color: contrast
                    },
                    '& {inputNative}::-moz-selection': {
                        backgroundColor: color,
                        color: contrast
                    }
                };
            }, this._el.nativeElement, this._colorClass, STYLE_PRIORITY$2 + 1, STYLES);
        }
    }
    get color() {
        return this._color;
    }
    /** The field appearance style. */
    set appearance(val) {
        if (val !== this.appearance) {
            this._appearance = val;
            this[0x1] = this._styleRenderer.add(`ly-field.appearance:${val}`, (theme, ref) => {
                const classes = ref.selectorsOf(STYLES);
                if (theme.field && theme.field.appearance) {
                    const appearance = theme.field.appearance[val];
                    if (appearance) {
                        return appearance instanceof StyleCollection
                            ? appearance.setTransformer((_) => _(classes)).css
                            : appearance(classes);
                    }
                }
                throw new Error(`${val} not found in theme.field.appearance`);
            }, STYLE_PRIORITY$2, this[0x1]);
        }
    }
    get appearance() {
        return this._appearance;
    }
    onFocus() {
        this._el.nativeElement.focus();
    }
    ngOnInit() {
        if (!this.color) {
            this.color = DEFAULT_WITH_COLOR;
        }
        if (!this.appearance) {
            this.appearance = DEFAULT_APPEARANCE;
        }
    }
    ngAfterContentInit() {
        this._control.stateChanges.subscribe(() => {
            this._updateFloatingLabel();
            this._markForCheck();
        });
        const ngControl = this._control.ngControl;
        // Run change detection if the value changes.
        if (ngControl && ngControl.valueChanges) {
            ngControl.valueChanges.subscribe(() => {
                this._updateFloatingLabel();
                this._markForCheck();
            });
        }
    }
    ngAfterViewInit() {
        this._updateFloatingLabel();
        if (Platform.isBrowser) {
            this._ngZone.runOutsideAngular(() => {
                if (this._prefixContainer) {
                    const el = this._prefixContainer.nativeElement;
                    this._updateFielset(el, DirAlias.before);
                    this._elementObserver.observe(el, () => {
                        this._updateFielset(el, DirAlias.before);
                    });
                }
                if (this._suffixContainer) {
                    const el = this._suffixContainer.nativeElement;
                    this._updateFielset(el, DirAlias.after);
                    this._elementObserver.observe(el, () => {
                        this._updateFielset(el, DirAlias.after);
                    });
                }
                if (this._labelSpan) {
                    const el = this._labelSpan.nativeElement;
                    this._updateFielsetSpan();
                    this._elementObserver.observe(el, () => {
                        this._updateFielsetSpan();
                    });
                }
            });
        }
        // this fix with of label
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
    }
    ngOnDestroy() {
        if (this._prefixContainer) {
            const el = this._prefixContainer;
            this._elementObserver.destroy(el);
        }
        if (this._suffixContainer) {
            const el = this._suffixContainer;
            this._elementObserver.destroy(el);
        }
        if (this._labelSpan) {
            const el = this._labelSpan;
            this._elementObserver.destroy(el);
        }
    }
    _updateFielset(el, dir) {
        const { width } = el.getBoundingClientRect();
        const newClass = this._theme.addStyle(`fieldLegendstyle.margin${dir}:${width}`, () => ({
            [`& .${this.classes.fieldsetSpan}`]: {
                [`margin-${dir}`]: `${width}px`
            }
        }), undefined, undefined, STYLE_PRIORITY$2);
        if (dir === DirAlias.before) {
            this._marginStartClass = this._theme.updateClass(this._el.nativeElement, this._renderer, newClass, this._marginStartClass);
        }
        else {
            this._marginEndClass = this._theme.updateClass(this._el.nativeElement, this._renderer, newClass, this._marginEndClass);
        }
    }
    _updateFielsetSpan() {
        let { width } = this._labelSpan.nativeElement.getBoundingClientRect();
        if (!this._isFloating) {
            width -= width / 100 * 25;
        }
        /** Add 6px of spacing */
        width += 6;
        this._fielsetSpanClass = this._theme.addStyle(`style.fieldsetSpanFocused:${width}`, {
            [`&.${this.classes.isFloatingLabel} .${this.classes.fieldsetSpan}`]: { width: `${width}px` }
        }, this._el.nativeElement, this._fielsetSpanClass, STYLE_PRIORITY$2);
    }
    /** @ignore */
    _isLabel() {
        if (this._control && this._control.placeholder && !this._labelChild) {
            return true;
        }
        else if (this._labelChild || this._placeholderChild) {
            return true;
        }
        return false;
    }
    /** @ignore */
    _isPlaceholder() {
        if ((this._labelChild && this._control && this._control.placeholder) || (this._labelChild && this._placeholderChild)) {
            return true;
        }
        return false;
    }
    /** @ignore */
    _isEmpty() {
        const val = this._control ? this._control.value : null;
        return val === '' || val === null || val === undefined;
    }
    _updateFloatingLabel() {
        if (this._labelContainer2) {
            const isFloating = this._control.floatingLabel || this.floatingLabel;
            if (this._isFloating !== isFloating) {
                this._isFloating = isFloating;
                if (isFloating) {
                    this._renderer.addClass(this._labelContainer2.nativeElement, this.classes.floatingLabel);
                    this._renderer.addClass(this._el.nativeElement, this.classes.isFloatingLabel);
                }
                else {
                    this._renderer.removeClass(this._labelContainer2.nativeElement, this.classes.floatingLabel);
                    this._renderer.removeClass(this._el.nativeElement, this.classes.isFloatingLabel);
                }
            }
        }
        if (this._control) {
            if (this._control.focused) {
                this._renderer.addClass(this._el.nativeElement, this.classes.focused);
            }
            else {
                this._renderer.removeClass(this._el.nativeElement, this.classes.focused);
            }
        }
    }
    _markForCheck() {
        this._cd.markForCheck();
    }
    _getHostElement() {
        return this._el.nativeElement;
    }
};
LyField.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ElementObserver },
    { type: LyTheme2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: StyleRenderer }
];
__decorate([
    ViewChild('_labelContainer', { static: false })
], LyField.prototype, "_labelContainer", void 0);
__decorate([
    ViewChild('_labelContainer2', { static: false })
], LyField.prototype, "_labelContainer2", void 0);
__decorate([
    ViewChild('_labelSpan', { static: false })
], LyField.prototype, "_labelSpan", void 0);
__decorate([
    ViewChild('_prefixContainer', { static: false })
], LyField.prototype, "_prefixContainer", void 0);
__decorate([
    ViewChild('_suffixContainer', { static: false })
], LyField.prototype, "_suffixContainer", void 0);
__decorate([
    ViewChild('_fieldsetLegend', { static: false })
], LyField.prototype, "_fieldsetLegend", void 0);
__decorate([
    ContentChild(forwardRef(() => LyFieldControlBase), { static: false })
], LyField.prototype, "_control", void 0);
__decorate([
    ContentChild(LyPlaceholder, { static: false })
], LyField.prototype, "_placeholderChild", void 0);
__decorate([
    ContentChild(LyLabel, { static: false })
], LyField.prototype, "_labelChild", void 0);
__decorate([
    ContentChildren(LyHint)
], LyField.prototype, "_hintChildren", void 0);
__decorate([
    ContentChildren(LyPrefix)
], LyField.prototype, "_prefixChildren", void 0);
__decorate([
    ContentChildren(LySuffix)
], LyField.prototype, "_suffixChildren", void 0);
__decorate([
    ContentChildren(LyError)
], LyField.prototype, "_errorChildren", void 0);
__decorate([
    Input()
], LyField.prototype, "persistentHint", void 0);
__decorate([
    Input()
], LyField.prototype, "fullWidth", null);
__decorate([
    Input()
], LyField.prototype, "floatingLabel", null);
__decorate([
    Input()
], LyField.prototype, "color", null);
__decorate([
    Input()
], LyField.prototype, "appearance", null);
__decorate([
    HostListener('focus')
], LyField.prototype, "onFocus", null);
LyField = __decorate([
    Component({
        selector: 'ly-field',
        exportAs: 'lyFormField',
        template: "<div [className]=\"classes.container\" (click)=\"_control && _control.onContainerClick && _control.onContainerClick($event)\">\n  <fieldset [className]=\"classes.fieldset\"><legend #_fieldsetLegend [className]=\"classes.fieldsetSpan\"></legend></fieldset>\n  <div [className]=\"classes.prefix\" *ngIf=\"_prefixChildren.length\" #_prefixContainer>\n    <ng-content select=\"[lyPrefix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.infix\">\n    <ng-content></ng-content>\n    <div [className]=\"classes.label\" *ngIf=\"_isLabel()\" #_labelContainer2>\n      <span #_labelSpan [className]=\"classes.labelSpan\">\n        <ng-container *ngTemplateOutlet=\"_labelTemplate\"></ng-container>\n      </span>\n    </div>\n    <div [className]=\"classes.placeholder\" *ngIf=\"_isPlaceholder() && _control?.empty && (_control?.floatingLabel || floatingLabel)\">\n      <ng-container *ngTemplateOutlet=\"_placeholderTemplate\"></ng-container>\n    </div>\n  </div>\n  <div [className]=\"classes.suffix\" *ngIf=\"_suffixChildren.length\" #_suffixContainer>\n    <ng-content select=\"[lySuffix]\"></ng-content>\n  </div>\n</div>\n\n<div [className]=\"classes.hintContainer\">\n  <div *ngIf=\"_hintChildren.length && (persistentHint || _control?.errorState || _control?.focused)\">\n    <span *ngIf=\"_control.errorState\">\n      <ng-content select=\"ly-error\"></ng-content>\n    </span>\n    <ng-content select=\"ly-hint\"></ng-content>\n  </div>\n</div>\n\n<ng-template #_labelTemplate>\n  <ng-content select=\"ly-label\"></ng-content>\n  <ng-container *ngIf=\"!_labelChild\">\n    <ng-template *ngTemplateOutlet=\"_placeholderTemplate\"></ng-template>\n  </ng-container>\n</ng-template>\n\n<ng-template #_placeholderTemplate>\n  <ng-content select=\"ly-placeholder\"></ng-content>\n  <ng-container *ngIf=\"_control.placeholder\">{{ _control.placeholder }}</ng-container>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [
            LyHostClass,
            StyleRenderer,
        ]
    })
], LyField);
let LyNativeControl = LyNativeControl_1 = class LyNativeControl {
    constructor(_theme, _el, _renderer, _field, 
    /** @docs-private */
    ngControl, _parentForm, _parentFormGroup) {
        this._theme = _theme;
        this._el = _el;
        this._renderer = _renderer;
        this._field = _field;
        this.ngControl = ngControl;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this._disabled = false;
        this._required = false;
        this.stateChanges = new Subject();
        this._form = this._parentForm || this._parentFormGroup;
        this._focused = false;
        this.errorState = false;
    }
    _onInput() {
        this.stateChanges.next();
    }
    _onBlur() {
        if (this._focused !== false) {
            this._focused = false;
            this.stateChanges.next();
        }
    }
    _onFocus() {
        if (this._focused !== true) {
            this._focused = true;
            this.stateChanges.next();
        }
    }
    /** @ignore */
    set value(val) {
        if (val !== this.value) {
            this._getHostElement().value = val;
            this.stateChanges.next();
        }
    }
    get value() {
        return this._getHostElement().value;
    }
    /** Whether the input is disabled. */
    set disabled(val) {
        if (val !== this._disabled) {
            this._disabled = toBoolean(val);
            if (this._field) {
                if (!val && this._hasDisabledClass) {
                    this._renderer.removeClass(this._field._getHostElement(), this._field.classes.disabled);
                    if (this._cursorClass) {
                        this._renderer.addClass(this._field._getHostElement(), this._cursorClass);
                    }
                    this._hasDisabledClass = undefined;
                }
                else if (val) {
                    this._renderer.addClass(this._field._getHostElement(), this._field.classes.disabled);
                    if (this._cursorClass) {
                        this._renderer.removeClass(this._field._getHostElement(), this._cursorClass);
                    }
                    this._hasDisabledClass = true;
                }
            }
        }
    }
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set required(value) {
        this._required = toBoolean(value);
    }
    get required() { return this._required; }
    set placeholder(val) {
        this._placeholder = val;
    }
    get placeholder() { return this._placeholder; }
    get focused() {
        return this._focused;
    }
    get empty() {
        const val = this.value;
        return val === '' || val == null;
    }
    get floatingLabel() {
        return this.focused || !this.empty || (this._isSelectInput ? this._hasLabelSelectionOption() : false);
    }
    ngOnInit() {
        this._renderer.setAttribute(this._getHostElement(), 'placeholder', '­');
        const { nativeElement } = this._el;
        if (nativeElement.nodeName.toLowerCase() === 'select') {
            this._isSelectInput = true;
        }
        // apply class {selectArrow} to `<select> not multiple`
        if (this._field && nativeElement.type === 'select-one') {
            this._renderer.addClass(this._field._getHostElement(), this._field.classes.selectArrow);
        }
        // apply style cursor only for input of type text
        if (nativeElement instanceof HTMLTextAreaElement ||
            inputText.some(type => type === nativeElement.type)) {
            this._cursorClass = this._theme.addSimpleStyle('lyField.text', {
                '& {infix}': {
                    cursor: 'text'
                }
            }, STYLE_PRIORITY$2, STYLES);
        }
        if (this._isSelectInput) {
            this._cursorClass = this._theme.addSimpleStyle('lyField.select', {
                '& {infix}': {
                    cursor: 'pointer'
                }
            }, STYLE_PRIORITY$2, STYLES);
        }
        if (this._cursorClass) {
            this._renderer.addClass(this._field._getHostElement(), this._cursorClass);
        }
        // apply default styles
        this._renderer.addClass(nativeElement, this._field.classes.inputNative);
        const ngControl = this.ngControl;
        // update styles on disabled
        if (ngControl && ngControl.statusChanges) {
            ngControl.statusChanges.subscribe(() => {
                this.disabled = !!ngControl.disabled;
            });
        }
    }
    ngDoCheck() {
        if (this._field._control) {
            const oldVal = this.errorState;
            const newVal = !!(this.ngControl && this.ngControl.invalid && (this.ngControl.touched || (this._form && this._form.submitted)));
            if (newVal !== oldVal) {
                this.errorState = newVal;
                if (this._field) {
                    const errorClass = this._field.classes.errorState;
                    if (newVal) {
                        this._renderer.addClass(this._field._getHostElement(), errorClass);
                        this._errorClass = errorClass;
                    }
                    else if (this._errorClass) {
                        this._renderer.removeClass(this._field._getHostElement(), errorClass);
                        this._errorClass = undefined;
                    }
                    this.stateChanges.next();
                }
            }
        }
    }
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    /** @docs-private */
    onContainerClick(_e) {
        this._getHostElement().focus();
    }
    /** Focuses the input. */
    focus() { this._getHostElement().focus(); }
    _getHostElement() {
        return this._el.nativeElement;
    }
    _hasLabelSelectionOption() {
        const el = this._getHostElement();
        const option = el.selectedOptions ? el.selectedOptions.item(0) : null;
        return option ? !!option.label : false;
    }
};
LyNativeControl.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyField, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] }
];
__decorate([
    HostListener('input')
], LyNativeControl.prototype, "_onInput", null);
__decorate([
    HostListener('blur')
], LyNativeControl.prototype, "_onBlur", null);
__decorate([
    HostListener('focus')
], LyNativeControl.prototype, "_onFocus", null);
__decorate([
    Input()
], LyNativeControl.prototype, "value", null);
__decorate([
    HostBinding(),
    Input()
], LyNativeControl.prototype, "disabled", null);
__decorate([
    HostBinding(),
    Input()
], LyNativeControl.prototype, "required", null);
__decorate([
    Input()
], LyNativeControl.prototype, "placeholder", null);
LyNativeControl = LyNativeControl_1 = __decorate([
    Directive({
        selector: 'input[lyInput], textarea[lyInput], input[lyNativeControl], textarea[lyNativeControl], select[lyNativeControl]',
        exportAs: 'LyNativeControl',
        providers: [
            { provide: LyFieldControlBase, useExisting: LyNativeControl_1 }
        ]
    }),
    __param(3, Optional()),
    __param(4, Optional()), __param(4, Self()),
    __param(5, Optional()),
    __param(6, Optional())
], LyNativeControl);

const ɵ0 = STYLES;
let LyFieldModule = class LyFieldModule {
};
LyFieldModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            LyCommonModule
        ],
        exports: [
            LyField,
            LyPlaceholder,
            LyLabel,
            LyNativeControl,
            LyPrefix,
            LySuffix,
            LyHint,
            LyError,
            LyCommonModule
        ],
        providers: [
            {
                provide: LY_FIELD_STYLES_TOKEN,
                useValue: ɵ0
            }
        ],
        declarations: [LyField, LyPlaceholder, LyLabel, LyNativeControl, LyPrefix, LySuffix, LyHint, LyError]
    })
], LyFieldModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyField, LyFieldControlBase, LyFieldModule, LyNativeControl, STYLES, STYLE_SELECT_ARROW, ɵ0, LyPlaceholder as ɵa, LyLabel as ɵb, LyHint as ɵc, LY_FIELD_STYLES_TOKEN as ɵd, LyPrefix as ɵe, LySuffix as ɵf, LyError as ɵg };
//# sourceMappingURL=alyle-ui-field.js.map
