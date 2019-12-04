var LyNativeControl_1;
import * as tslib_1 from "tslib";
import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation, ContentChildren, QueryList, NgZone, Directive, OnDestroy, HostListener, HostBinding, Optional, Self, forwardRef, DoCheck } from '@angular/core';
import { LyTheme2, ThemeVariables, ElementObserver, Platform, toBoolean, DirAlias, StyleCollection, LyClasses, StyleTemplate, LyHostClass, StyleRenderer, styleTemplateToString, ThemeRef, LY_COMMON_STYLES, keyframesUniqueId } from '@alyle/ui';
import { LyLabel } from './label';
import { LyPlaceholder } from './placeholder';
import { LyHint } from './hint';
import { LyPrefix } from './prefix';
import { LySuffix } from './suffix';
import { Subject } from 'rxjs';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { LyError } from './error';
import { LyFieldControlBase } from './field-control-base';
/** LyField */
const STYLE_PRIORITY = -2;
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
export const STYLE_SELECT_ARROW = (className) => `${className}::after{position:absolute;content:'';width:0;height:0;border-left:0.3125em solid transparent;border-right:0.3125em solid transparent;border-top:0.3125em solid;top:50%;{after}:0;margin-top:-0.15625em;pointer-events:none;}`;
export const STYLES = (theme, ref) => {
    const classes = ref.selectorsOf(STYLES);
    const { before, after } = theme;
    const shake = keyframesUniqueId.next();
    return {
        $priority: STYLE_PRIORITY,
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
        inputNative: (className) => `${className}{resize:vertical;padding:0;outline:none;border:none;background-color:transparent;color:inherit;font:inherit;width:100%;}select${className}{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-after:1em;}select${className} option:not([disabled]){color:initial;}select${className} optgroup:not([disabled]){color:initial;}select${className}::-ms-expand{display:none;}select${className}::-moz-focus-inner{border:0;}select${className}:not(:disabled){cursor:pointer;}select${className}::-ms-value{color:inherit;background:0 0;}`,
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
            }, this._getHostElement(), this._fullWidthClass, STYLE_PRIORITY);
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
            }, this._el.nativeElement, this._colorClass, STYLE_PRIORITY + 1, STYLES);
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
            }, STYLE_PRIORITY, this[0x1]);
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
        }), undefined, undefined, STYLE_PRIORITY);
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
        }, this._el.nativeElement, this._fielsetSpanClass, STYLE_PRIORITY);
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
tslib_1.__decorate([
    ViewChild('_labelContainer', { static: false })
], LyField.prototype, "_labelContainer", void 0);
tslib_1.__decorate([
    ViewChild('_labelContainer2', { static: false })
], LyField.prototype, "_labelContainer2", void 0);
tslib_1.__decorate([
    ViewChild('_labelSpan', { static: false })
], LyField.prototype, "_labelSpan", void 0);
tslib_1.__decorate([
    ViewChild('_prefixContainer', { static: false })
], LyField.prototype, "_prefixContainer", void 0);
tslib_1.__decorate([
    ViewChild('_suffixContainer', { static: false })
], LyField.prototype, "_suffixContainer", void 0);
tslib_1.__decorate([
    ViewChild('_fieldsetLegend', { static: false })
], LyField.prototype, "_fieldsetLegend", void 0);
tslib_1.__decorate([
    ContentChild(forwardRef(() => LyFieldControlBase), { static: false })
], LyField.prototype, "_control", void 0);
tslib_1.__decorate([
    ContentChild(LyPlaceholder, { static: false })
], LyField.prototype, "_placeholderChild", void 0);
tslib_1.__decorate([
    ContentChild(LyLabel, { static: false })
], LyField.prototype, "_labelChild", void 0);
tslib_1.__decorate([
    ContentChildren(LyHint)
], LyField.prototype, "_hintChildren", void 0);
tslib_1.__decorate([
    ContentChildren(LyPrefix)
], LyField.prototype, "_prefixChildren", void 0);
tslib_1.__decorate([
    ContentChildren(LySuffix)
], LyField.prototype, "_suffixChildren", void 0);
tslib_1.__decorate([
    ContentChildren(LyError)
], LyField.prototype, "_errorChildren", void 0);
tslib_1.__decorate([
    Input()
], LyField.prototype, "persistentHint", void 0);
tslib_1.__decorate([
    Input()
], LyField.prototype, "fullWidth", null);
tslib_1.__decorate([
    Input()
], LyField.prototype, "floatingLabel", null);
tslib_1.__decorate([
    Input()
], LyField.prototype, "color", null);
tslib_1.__decorate([
    Input()
], LyField.prototype, "appearance", null);
tslib_1.__decorate([
    HostListener('focus')
], LyField.prototype, "onFocus", null);
LyField = tslib_1.__decorate([
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
export { LyField };
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
            }, STYLE_PRIORITY, STYLES);
        }
        if (this._isSelectInput) {
            this._cursorClass = this._theme.addSimpleStyle('lyField.select', {
                '& {infix}': {
                    cursor: 'pointer'
                }
            }, STYLE_PRIORITY, STYLES);
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
tslib_1.__decorate([
    HostListener('input')
], LyNativeControl.prototype, "_onInput", null);
tslib_1.__decorate([
    HostListener('blur')
], LyNativeControl.prototype, "_onBlur", null);
tslib_1.__decorate([
    HostListener('focus')
], LyNativeControl.prototype, "_onFocus", null);
tslib_1.__decorate([
    Input()
], LyNativeControl.prototype, "value", null);
tslib_1.__decorate([
    HostBinding(),
    Input()
], LyNativeControl.prototype, "disabled", null);
tslib_1.__decorate([
    HostBinding(),
    Input()
], LyNativeControl.prototype, "required", null);
tslib_1.__decorate([
    Input()
], LyNativeControl.prototype, "placeholder", null);
LyNativeControl = LyNativeControl_1 = tslib_1.__decorate([
    Directive({
        selector: 'input[lyInput], textarea[lyInput], input[lyNativeControl], textarea[lyNativeControl], select[lyNativeControl]',
        exportAs: 'LyNativeControl',
        providers: [
            { provide: LyFieldControlBase, useExisting: LyNativeControl_1 }
        ]
    }),
    tslib_1.__param(3, Optional()),
    tslib_1.__param(4, Optional()), tslib_1.__param(4, Self()),
    tslib_1.__param(5, Optional()),
    tslib_1.__param(6, Optional())
], LyNativeControl);
export { LyNativeControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsUUFBUSxFQUNSLElBQUksRUFDSixVQUFVLEVBQ1YsT0FBTyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsY0FBYyxFQUNkLGVBQWUsRUFDZixRQUFRLEVBQ1IsU0FBUyxFQUNULFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFDYixXQUFXLEVBQ1gsYUFBYSxFQUNiLHFCQUFxQixFQUNyQixRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxF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QUFBLFFBQVEsRUFBRSxDQUFBO0lBRVYsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtJQUNsQixtQkFBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLG1CQUFBLFFBQVEsRUFBRSxDQUFBO0dBMUdGLGVBQWUsQ0F3TTNCO1NBeE1ZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBOZ1pvbmUsXG4gIERpcmVjdGl2ZSxcbiAgT25EZXN0cm95LFxuICBIb3N0TGlzdGVuZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgZm9yd2FyZFJlZixcbiAgRG9DaGVja1xuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzLFxuICBFbGVtZW50T2JzZXJ2ZXIsXG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIERpckFsaWFzLFxuICBTdHlsZUNvbGxlY3Rpb24sXG4gIEx5Q2xhc3NlcyxcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgTHlIb3N0Q2xhc3MsXG4gIFN0eWxlUmVuZGVyZXIsXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgVGhlbWVSZWYsXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIGtleWZyYW1lc1VuaXF1ZUlkIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5TGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IEx5UGxhY2Vob2xkZXIgfSBmcm9tICcuL3BsYWNlaG9sZGVyJztcbmltcG9ydCB7IEx5SGludCB9IGZyb20gJy4vaGludCc7XG5pbXBvcnQgeyBMeVByZWZpeCB9IGZyb20gJy4vcHJlZml4JztcbmltcG9ydCB7IEx5U3VmZml4IH0gZnJvbSAnLi9zdWZmaXgnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmdDb250cm9sLCBOZ0Zvcm0sIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEx5RXJyb3IgfSBmcm9tICcuL2Vycm9yJztcbmltcG9ydCB7IEx5RmllbGRDb250cm9sQmFzZSB9IGZyb20gJy4vZmllbGQtY29udHJvbC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBMeUZpZWxkVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBGaWVsZCBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk7XG4gIGFwcGVhcmFuY2U/OiB7XG4gICAgc3RhbmRhcmQ/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSlcbiAgICBmaWxsZWQ/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSlcbiAgICBvdXRsaW5lZD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKVxuICAgIFtuYW1lOiBzdHJpbmddOiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSkgfCB1bmRlZmluZWRcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeUZpZWxkVmFyaWFibGVzIHtcbiAgZmllbGQ/OiBMeUZpZWxkVGhlbWU7XG59XG5cbi8qKiBMeUZpZWxkICovXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9BUFBFQVJBTkNFID0gJ3N0YW5kYXJkJztcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdwcmltYXJ5JztcblxuY29uc3QgaW5wdXRUZXh0ID0gW1xuICAndGV4dCcsXG4gICdudW1iZXInLFxuICAncGFzc3dvcmQnLFxuICAnc2VhcmNoJyxcbiAgJ3RlbCcsXG4gICd1cmwnXG5dO1xuXG5cbmV4cG9ydCBjb25zdCBTVFlMRV9TRUxFQ1RfQVJST1cgPSAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX06OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6Jyc7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItbGVmdDowLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6MC4zMTI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXRvcDowLjMxMjVlbSBzb2xpZDt0b3A6NTAlO3thZnRlcn06MDttYXJnaW4tdG9wOi0wLjE1NjI1ZW07cG9pbnRlci1ldmVudHM6bm9uZTt9YDtcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUZpZWxkVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgY29uc3Qge2JlZm9yZSwgYWZ0ZXIgfSA9IHRoZW1lO1xuICBjb25zdCBzaGFrZSA9IGtleWZyYW1lc1VuaXF1ZUlkLm5leHQoKTtcbiAgcmV0dXJuIHtcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgICRnbG9iYWw6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYEBrZXlmcmFtZXMgJHtzaGFrZX17JHtjbGFzc05hbWV9IDAle21hcmdpbi0ke2JlZm9yZX06MDt9JHtjbGFzc05hbWV9IDQwJXttYXJnaW4tJHtiZWZvcmV9OjJweDt9JHtjbGFzc05hbWV9IDUwJXttYXJnaW4tJHtiZWZvcmV9Oi0ycHg7fSR7Y2xhc3NOYW1lfSA3MCV7bWFyZ2luLSR7YmVmb3JlfToycHg7fSR7Y2xhc3NOYW1lfSAxMDAle21hcmdpbi0ke2JlZm9yZX06MDt9fWAsXG4gICAgcm9vdDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tdG9wOjFlbTtsaW5lLWhlaWdodDoxLjU7fSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChcbiAgICAgICAgICAodGhlbWUuZmllbGRcbiAgICAgICAgICAgICYmIHRoZW1lLmZpZWxkLnJvb3RcbiAgICAgICAgICAgICYmICh0aGVtZS5maWVsZC5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUuZmllbGQucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbihjbGFzc2VzKSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5maWVsZC5yb290KGNsYXNzZXMpKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5oaW50fSwke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmVycm9yfXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTouNzVlbTttYXJnaW4tdG9wOi4yNWVtO31gLFxuICAgIGFuaW1hdGlvbnM6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmxhYmVsU3Bhbn17dHJhbnNpdGlvbjpmb250LXNpemUgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259IC4ke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9czt9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5sYWJlbH17dHJhbnNpdGlvbjoke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zO31gLFxuICAgIGNvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfTphZnRlcmApfSR7Y2xhc3NOYW1lfTphZnRlcntjb250ZW50OicnO3BvaW50ZXItZXZlbnRzOm5vbmU7fWAsXG4gICAgZmllbGRzZXQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9e21hcmdpbjowO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MDt9YCxcbiAgICBmaWVsZHNldFNwYW46IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwYWRkaW5nOjA7aGVpZ2h0OjJweDt9YCxcbiAgICBsYWJlbFNwYW46IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXgtd2lkdGg6MTAwJTtkaXNwbGF5OmlubGluZS1ibG9jazt9YCxcbiAgICBwcmVmaXg6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXgtaGVpZ2h0OjJlbTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO31gLFxuICAgIGluZml4OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTthbGlnbi1pdGVtczpiYXNlbGluZTttaW4td2lkdGg6MDt3aWR0aDoxODBweDtmbGV4OjEgMDt9YCxcbiAgICBzdWZmaXg6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXgtaGVpZ2h0OjJlbTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO31gLFxuICAgIGxhYmVsQ29udGFpbmVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfXtwb2ludGVyLWV2ZW50czpub25lO2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO31gLFxuICAgIGxhYmVsU3BhY2luZ1N0YXJ0OiBudWxsLFxuICAgIGxhYmVsQ2VudGVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMDAlO31gLFxuICAgIGxhYmVsU3BhY2luZ0VuZDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2ZsZXg6MTt9YCxcbiAgICBsYWJlbDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX17bWFyZ2luOjA7Ym9yZGVyOm5vbmU7cG9pbnRlci1ldmVudHM6bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXA7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW47d2lkdGg6MTAwJTt9YCxcbiAgICBpc0Zsb2F0aW5nTGFiZWw6IG51bGwsXG4gICAgZmxvYXRpbmdMYWJlbDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMubGFiZWxTcGFufXtmb250LXNpemU6NzUlO31gLFxuICAgIHBsYWNlaG9sZGVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfXtwb2ludGVyLWV2ZW50czpub25lO31gLFxuICAgIGZvY3VzZWQ6IG51bGwsXG4gICAgaW5wdXROYXRpdmU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtyZXNpemU6dmVydGljYWw7cGFkZGluZzowO291dGxpbmU6bm9uZTtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOmluaGVyaXQ7Zm9udDppbmhlcml0O3dpZHRoOjEwMCU7fXNlbGVjdCR7Y2xhc3NOYW1lfXstbW96LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2Rpc3BsYXk6aW5saW5lLWZsZXg7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmctYWZ0ZXI6MWVtO31zZWxlY3Qke2NsYXNzTmFtZX0gb3B0aW9uOm5vdChbZGlzYWJsZWRdKXtjb2xvcjppbml0aWFsO31zZWxlY3Qke2NsYXNzTmFtZX0gb3B0Z3JvdXA6bm90KFtkaXNhYmxlZF0pe2NvbG9yOmluaXRpYWw7fXNlbGVjdCR7Y2xhc3NOYW1lfTo6LW1zLWV4cGFuZHtkaXNwbGF5Om5vbmU7fXNlbGVjdCR7Y2xhc3NOYW1lfTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MDt9c2VsZWN0JHtjbGFzc05hbWV9Om5vdCg6ZGlzYWJsZWQpe2N1cnNvcjpwb2ludGVyO31zZWxlY3Qke2NsYXNzTmFtZX06Oi1tcy12YWx1ZXtjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6MCAwO31gLFxuICAgIGhpbnRDb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttaW4taGVpZ2h0OjEuMjVlbTtsaW5lLWhlaWdodDoxLjI1O30ke2NsYXNzTmFtZX0gPiBkaXZ7ZGlzcGxheTpmbGV4O2ZsZXg6MSAwIGF1dG87bWF4LXdpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO31gLFxuICAgIGRpc2FibGVkOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9LCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMubGFiZWx9LCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuY29udGFpbmVyfTphZnRlcntjb2xvcjoke3RoZW1lLmRpc2FibGVkLmRlZmF1bHR9O2N1cnNvcjpkZWZhdWx0O31gLFxuICAgIGhpbnQ6IG51bGwsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgZXJyb3JTdGF0ZTogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMubGFiZWx9LCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuaGludENvbnRhaW5lcn0sJHtjbGFzc05hbWV9JHtjbGFzc2VzLnNlbGVjdEFycm93fSAke2NsYXNzZXMuaW5maXh9OmFmdGVye2NvbG9yOiR7dGhlbWUud2Fybi5kZWZhdWx0fSFpbXBvcnRhbnQ7fSR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuZmllbGRzZXR9LCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuY29udGFpbmVyfTphZnRlcntib3JkZXItY29sb3I6JHt0aGVtZS53YXJuLmRlZmF1bHR9IWltcG9ydGFudDt9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5pbnB1dE5hdGl2ZX17Y2FyZXQtY29sb3I6JHt0aGVtZS53YXJuLmRlZmF1bHR9IWltcG9ydGFudDt9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5oaW50Q29udGFpbmVyfSBseS1oaW50Om5vdCgke2NsYXNzZXMuaGludEFmdGVyfSl7ZGlzcGxheTpub25lO30ke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmxhYmVsU3Bhbn17YW5pbWF0aW9uOiR7c2hha2V9ICR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1tcyAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn07fSR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuaW5wdXROYXRpdmV9OjpzZWxlY3Rpb24sJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5pbnB1dE5hdGl2ZX06Oi1tb3otc2VsZWN0aW9ue2JhY2tncm91bmQtY29sb3I6JHt0aGVtZS53YXJuLmRlZmF1bHR9ICFpbXBvcnRhbnQ7Y29sb3I6JHt0aGVtZS53YXJuLmNvbnRyYXN0fSAhaW1wb3J0YW50O31gLFxuICAgIGhpbnRBZnRlcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21hcmdpbi0ke2JlZm9yZX06YXV0bzt9YCxcbiAgICBoaW50QmVmb3JlOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWFyZ2luLSR7YWZ0ZXJ9OmF1dG87fWAsXG4gICAgc2VsZWN0QXJyb3c6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmluZml4fTo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDonJzt3aWR0aDowO2hlaWdodDowO2JvcmRlci1sZWZ0OjAuMzEyNWVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDowLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItdG9wOjAuMzEyNWVtIHNvbGlkO3RvcDo1MCU7JHthZnRlcn06MDttYXJnaW4tdG9wOi0wLjE1NjI1ZW07cG9pbnRlci1ldmVudHM6bm9uZTt9YFxuICB9O1xufTtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCcsXG4gIGV4cG9ydEFzOiAnbHlGb3JtRmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJ2ZpZWxkLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlIb3N0Q2xhc3MsXG4gICAgU3R5bGVSZW5kZXJlcixcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUZpZWxkIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIHByb3RlY3RlZCBfYXBwZWFyYW5jZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2NvbG9yOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfY29sb3JDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2lzRmxvYXRpbmc6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZmxvYXRpbmdMYWJlbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZmllbHNldFNwYW5DbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9tYXJnaW5TdGFydENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX21hcmdpbkVuZENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Z1bGxXaWR0aDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZnVsbFdpZHRoQ2xhc3M/OiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfbGFiZWxDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXIyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9sYWJlbENvbnRhaW5lcjI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfbGFiZWxTcGFuJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9sYWJlbFNwYW46IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfcHJlZml4Q29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9wcmVmaXhDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfc3VmZml4Q29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9zdWZmaXhDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfZmllbGRzZXRMZWdlbmQnLCB7IHN0YXRpYzogZmFsc2UgfSkgX2ZpZWxkc2V0TGVnZW5kOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5RmllbGRDb250cm9sQmFzZSksIHsgc3RhdGljOiBmYWxzZSB9KSBfY29udHJvbD86IEx5RmllbGRDb250cm9sQmFzZTtcbiAgQENvbnRlbnRDaGlsZChMeVBsYWNlaG9sZGVyLCB7IHN0YXRpYzogZmFsc2UgfSkgX3BsYWNlaG9sZGVyQ2hpbGQ6IEx5UGxhY2Vob2xkZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlMYWJlbCwgeyBzdGF0aWM6IGZhbHNlIH0pIF9sYWJlbENoaWxkOiBMeUxhYmVsO1xuICBAQ29udGVudENoaWxkcmVuKEx5SGludCkgX2hpbnRDaGlsZHJlbjogUXVlcnlMaXN0PEx5SGludD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlQcmVmaXgpIF9wcmVmaXhDaGlsZHJlbjogUXVlcnlMaXN0PEx5UHJlZml4PjtcbiAgQENvbnRlbnRDaGlsZHJlbihMeVN1ZmZpeCkgX3N1ZmZpeENoaWxkcmVuOiBRdWVyeUxpc3Q8THlTdWZmaXg+O1xuICBAQ29udGVudENoaWxkcmVuKEx5RXJyb3IpIF9lcnJvckNoaWxkcmVuOiBRdWVyeUxpc3Q8THlFcnJvcj47XG5cbiAgZ2V0IGVycm9yU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2wgPyB0aGlzLl9jb250cm9sLmVycm9yU3RhdGUgOiBmYWxzZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHBlcnNpc3RlbnRIaW50OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmdWxsV2lkdGgodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5fZnVsbFdpZHRoQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGZ1bGxXaWR0aGAsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSxcbiAgICAgICAgdGhpcy5fZnVsbFdpZHRoQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZnVsbFdpZHRoQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2Z1bGxXaWR0aENsYXNzKTtcbiAgICAgIHRoaXMuX2Z1bGxXaWR0aENsYXNzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLl9mdWxsV2lkdGggPSBuZXdWYWw7XG4gIH1cbiAgZ2V0IGZ1bGxXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZnVsbFdpZHRoO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGxhYmVsIGlzIGZsb2F0aW5nLiAqL1xuICBASW5wdXQoKVxuICBzZXQgZmxvYXRpbmdMYWJlbCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mbG9hdGluZ0xhYmVsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICB9XG4gIGdldCBmbG9hdGluZ0xhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9mbG9hdGluZ0xhYmVsO1xuICB9XG5cbiAgLyoqIFRoZW1lIGNvbG9yIGZvciB0aGUgY29tcG9uZW50LiAqL1xuICBASW5wdXQoKVxuICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl9jb2xvcikge1xuICAgICAgdGhpcy5fY29sb3IgPSB2YWw7XG4gICAgICB0aGlzLl9jb2xvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWZpZWxkLmNvbG9yOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgICAgIGNvbnN0IGNvbnRyYXN0ID0gdGhlbWUuY29sb3JPZihgJHt2YWx9OmNvbnRyYXN0YCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9OmFmdGVyLCAme2ZvY3VzZWR9e3NlbGVjdEFycm93fSB7aW5maXh9OmFmdGVyYF06IHtcbiAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMubGFiZWx9YF06IHtcbiAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmlucHV0TmF0aXZlfWBdOiB7XG4gICAgICAgICAgICBjYXJldENvbG9yOiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyYge2lucHV0TmF0aXZlfTo6c2VsZWN0aW9uJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGNvbG9yOiBjb250cmFzdFxuICAgICAgICAgIH0sXG4gICAgICAgICAgJyYge2lucHV0TmF0aXZlfTo6LW1vei1zZWxlY3Rpb24nOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgY29sb3I6IGNvbnRyYXN0XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcywgU1RZTEVfUFJJT1JJVFkgKyAxLCBTVFlMRVMpO1xuICAgIH1cbiAgfVxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgLyoqIFRoZSBmaWVsZCBhcHBlYXJhbmNlIHN0eWxlLiAqL1xuICBASW5wdXQoKVxuICBzZXQgYXBwZWFyYW5jZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbDtcbiAgICAgIHRoaXNbMHgxXSA9IHRoaXMuX3N0eWxlUmVuZGVyZXIuYWRkKFxuICAgICAgICBgbHktZmllbGQuYXBwZWFyYW5jZToke3ZhbH1gLFxuICAgICAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlGaWVsZFZhcmlhYmxlcywgcmVmKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICAgICAgICAgIGlmICh0aGVtZS5maWVsZCAmJiB0aGVtZS5maWVsZC5hcHBlYXJhbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBlYXJhbmNlID0gdGhlbWUuZmllbGQuYXBwZWFyYW5jZVt2YWxdO1xuICAgICAgICAgICAgaWYgKGFwcGVhcmFuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFwcGVhcmFuY2UgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICA/IGFwcGVhcmFuY2Uuc2V0VHJhbnNmb3JtZXIoKF8pID0+IF8oY2xhc3NlcykpLmNzc1xuICAgICAgICAgICAgICAgIDogYXBwZWFyYW5jZShjbGFzc2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbH0gbm90IGZvdW5kIGluIHRoZW1lLmZpZWxkLmFwcGVhcmFuY2VgKTtcbiAgICAgIH0sIFNUWUxFX1BSSU9SSVRZLCB0aGlzWzB4MV0pO1xuICAgIH1cbiAgfVxuICBnZXQgYXBwZWFyYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuXG4gIFsweDFdOiBzdHJpbmc7XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCkge1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudE9ic2VydmVyOiBFbGVtZW50T2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9zdHlsZVJlbmRlcmVyOiBTdHlsZVJlbmRlcmVyXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLmNvbG9yID0gREVGQVVMVF9XSVRIX0NPTE9SO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5hcHBlYXJhbmNlID0gREVGQVVMVF9BUFBFQVJBTkNFO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9jb250cm9sIS5zdGF0ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5fY29udHJvbCEubmdDb250cm9sO1xuXG4gICAgLy8gUnVuIGNoYW5nZSBkZXRlY3Rpb24gaWYgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgaWYgKG5nQ29udHJvbCAmJiBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3ByZWZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmJlZm9yZSk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmJlZm9yZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3N1ZmZpeENvbnRhaW5lcikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fc3VmZml4Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuYWZ0ZXIpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5hZnRlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2xhYmVsU3Bhbikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fbGFiZWxTcGFuLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHRoaXMgZml4IHdpdGggb2YgbGFiZWxcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fcHJlZml4Q29udGFpbmVyKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX3ByZWZpeENvbnRhaW5lcjtcbiAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5kZXN0cm95KGVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1ZmZpeENvbnRhaW5lcikge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9zdWZmaXhDb250YWluZXI7XG4gICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIuZGVzdHJveShlbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYWJlbFNwYW4pIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fbGFiZWxTcGFuO1xuICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLmRlc3Ryb3koZWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZpZWxzZXQoZWw6IEVsZW1lbnQsIGRpcjogRGlyQWxpYXMpIHtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBmaWVsZExlZ2VuZHN0eWxlLm1hcmdpbiR7ZGlyfToke3dpZHRofWAsICgpID0+ICh7XG4gICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0U3Bhbn1gXToge1xuICAgICAgICBbYG1hcmdpbi0ke2Rpcn1gXTogYCR7d2lkdGh9cHhgXG4gICAgICB9XG4gICAgfSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgaWYgKGRpciA9PT0gRGlyQWxpYXMuYmVmb3JlKSB7XG4gICAgICB0aGlzLl9tYXJnaW5TdGFydENsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9tYXJnaW5TdGFydENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWFyZ2luRW5kQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX21hcmdpbkVuZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGaWVsc2V0U3BhbigpIHtcbiAgICBsZXQgeyB3aWR0aCB9ID0gdGhpcy5fbGFiZWxTcGFuLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCF0aGlzLl9pc0Zsb2F0aW5nKSB7XG4gICAgICB3aWR0aCAtPSB3aWR0aCAvIDEwMCAqIDI1O1xuICAgIH1cbiAgICAvKiogQWRkIDZweCBvZiBzcGFjaW5nICovXG4gICAgd2lkdGggKz0gNjtcbiAgICB0aGlzLl9maWVsc2V0U3BhbkNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYHN0eWxlLmZpZWxkc2V0U3BhbkZvY3VzZWQ6JHt3aWR0aH1gLCB7XG4gICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXRTcGFufWBdOiB7d2lkdGg6IGAke3dpZHRofXB4YH1cbiAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9maWVsc2V0U3BhbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wgJiYgdGhpcy5fY29udHJvbC5wbGFjZWhvbGRlciAmJiAhdGhpcy5fbGFiZWxDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYWJlbENoaWxkIHx8IHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNQbGFjZWhvbGRlcigpIHtcbiAgICBpZiAoKHRoaXMuX2xhYmVsQ2hpbGQgJiYgdGhpcy5fY29udHJvbCAmJiB0aGlzLl9jb250cm9sLnBsYWNlaG9sZGVyKSB8fCAodGhpcy5fbGFiZWxDaGlsZCAmJiB0aGlzLl9wbGFjZWhvbGRlckNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIF9pc0VtcHR5KCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2NvbnRyb2wgPyB0aGlzLl9jb250cm9sLnZhbHVlIDogbnVsbDtcbiAgICByZXR1cm4gdmFsID09PSAnJyB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGbG9hdGluZ0xhYmVsKCkge1xuICAgIGlmICh0aGlzLl9sYWJlbENvbnRhaW5lcjIpIHtcbiAgICAgIGNvbnN0IGlzRmxvYXRpbmcgPSB0aGlzLl9jb250cm9sIS5mbG9hdGluZ0xhYmVsIHx8IHRoaXMuZmxvYXRpbmdMYWJlbDtcbiAgICAgIGlmICh0aGlzLl9pc0Zsb2F0aW5nICE9PSBpc0Zsb2F0aW5nKSB7XG4gICAgICAgIHRoaXMuX2lzRmxvYXRpbmcgPSBpc0Zsb2F0aW5nO1xuICAgICAgICBpZiAoaXNGbG9hdGluZykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2xhYmVsQ29udGFpbmVyMi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fbGFiZWxDb250YWluZXIyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fY29udHJvbCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRyb2wuZm9jdXNlZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlxuICAgICAgJ2lucHV0W2x5SW5wdXRdLCB0ZXh0YXJlYVtseUlucHV0XSwgaW5wdXRbbHlOYXRpdmVDb250cm9sXSwgdGV4dGFyZWFbbHlOYXRpdmVDb250cm9sXSwgc2VsZWN0W2x5TmF0aXZlQ29udHJvbF0nLFxuICBleHBvcnRBczogJ0x5TmF0aXZlQ29udHJvbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTHlGaWVsZENvbnRyb2xCYXNlLCB1c2VFeGlzdGluZzogTHlOYXRpdmVDb250cm9sIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeU5hdGl2ZUNvbnRyb2wgaW1wbGVtZW50cyBMeUZpZWxkQ29udHJvbEJhc2UsIE9uSW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3JlcXVpcmVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfaGFzRGlzYWJsZWRDbGFzcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX2Vycm9yQ2xhc3M/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2N1cnNvckNsYXNzOiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIF9pc1NlbGVjdElucHV0OiBib29sZWFuO1xuICBwcml2YXRlIF9mb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmUgfCBudWxsID0gdGhpcy5fcGFyZW50Rm9ybSB8fCB0aGlzLl9wYXJlbnRGb3JtR3JvdXA7XG4gIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIGVycm9yU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIF9vbklucHV0KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBfb25CbHVyKCkge1xuICAgIGlmICh0aGlzLl9mb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIF9vbkZvY3VzKCkge1xuICAgIGlmICh0aGlzLl9mb2N1c2VkICE9PSB0cnVlKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS52YWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLnZhbHVlO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGRpc2FibGVkLiAqL1xuICBASG9zdEJpbmRpbmcoKVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgICAgaWYgKCF2YWwgJiYgdGhpcy5faGFzRGlzYWJsZWRDbGFzcykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICBpZiAodGhpcy5fY3Vyc29yQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jdXJzb3JDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoKVxuICBASW5wdXQoKVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cblxuICBASW5wdXQoKVxuICBzZXQgcGxhY2Vob2xkZXIodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbDtcbiAgfVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyOyB9XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICBnZXQgZW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy52YWx1ZTtcbiAgICByZXR1cm4gdmFsID09PSAnJyB8fCB2YWwgPT0gbnVsbDtcbiAgfVxuXG4gIGdldCBmbG9hdGluZ0xhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHkgfHwgKHRoaXMuX2lzU2VsZWN0SW5wdXQgPyB0aGlzLl9oYXNMYWJlbFNlbGVjdGlvbk9wdGlvbigpIDogZmFsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZmllbGQ6IEx5RmllbGQsXG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmVcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgJ3BsYWNlaG9sZGVyJywgJ8KtJyk7XG5cbiAgICBjb25zdCB7IG5hdGl2ZUVsZW1lbnQgfSA9IHRoaXMuX2VsO1xuXG4gICAgaWYgKG5hdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHRoaXMuX2lzU2VsZWN0SW5wdXQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGNsYXNzIHtzZWxlY3RBcnJvd30gdG8gYDxzZWxlY3Q+IG5vdCBtdWx0aXBsZWBcbiAgICBpZiAodGhpcy5fZmllbGQgJiYgbmF0aXZlRWxlbWVudC50eXBlID09PSAnc2VsZWN0LW9uZScpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLnNlbGVjdEFycm93KTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBzdHlsZSBjdXJzb3Igb25seSBmb3IgaW5wdXQgb2YgdHlwZSB0ZXh0XG4gICAgaWYgKG5hdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50IHx8XG4gICAgICAgIGlucHV0VGV4dC5zb21lKHR5cGUgPT4gdHlwZSA9PT0gbmF0aXZlRWxlbWVudC50eXBlKSkge1xuICAgICAgdGhpcy5fY3Vyc29yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZSgnbHlGaWVsZC50ZXh0Jywge1xuICAgICAgICAnJiB7aW5maXh9Jzoge1xuICAgICAgICAgIGN1cnNvcjogJ3RleHQnXG4gICAgICAgIH1cbiAgICAgIH0sIFNUWUxFX1BSSU9SSVRZLCBTVFlMRVMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdElucHV0KSB7XG4gICAgICB0aGlzLl9jdXJzb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKCdseUZpZWxkLnNlbGVjdCcsIHtcbiAgICAgICAgJyYge2luZml4fSc6IHtcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICB9XG4gICAgICB9LCBTVFlMRV9QUklPUklUWSwgU1RZTEVTKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY3Vyc29yQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jdXJzb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgZGVmYXVsdCBzdHlsZXNcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhuYXRpdmVFbGVtZW50LCB0aGlzLl9maWVsZC5jbGFzc2VzLmlucHV0TmF0aXZlKTtcblxuICAgIGNvbnN0IG5nQ29udHJvbCA9IHRoaXMubmdDb250cm9sO1xuICAgIC8vIHVwZGF0ZSBzdHlsZXMgb24gZGlzYWJsZWRcbiAgICBpZiAobmdDb250cm9sICYmIG5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gISFuZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkLl9jb250cm9sKSB7XG4gICAgICBjb25zdCBvbGRWYWwgPSB0aGlzLmVycm9yU3RhdGU7XG4gICAgICBjb25zdCBuZXdWYWwgPSAhISh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5pbnZhbGlkICYmICh0aGlzLm5nQ29udHJvbC50b3VjaGVkIHx8ICh0aGlzLl9mb3JtICYmIHRoaXMuX2Zvcm0uc3VibWl0dGVkKSkpO1xuICAgICAgaWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG4gICAgICAgIHRoaXMuZXJyb3JTdGF0ZSA9IG5ld1ZhbDtcbiAgICAgICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICAgICAgY29uc3QgZXJyb3JDbGFzcyA9IHRoaXMuX2ZpZWxkLmNsYXNzZXMuZXJyb3JTdGF0ZTtcbiAgICAgICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgZXJyb3JDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLl9lcnJvckNsYXNzID0gZXJyb3JDbGFzcztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2Vycm9yQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBlcnJvckNsYXNzKTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBvbkNvbnRhaW5lckNsaWNrKF9lOiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpO1xuICB9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGlucHV0LiAqL1xuICBmb2N1cygpOiB2b2lkIHsgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpOyB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFzTGFiZWxTZWxlY3Rpb25PcHRpb24oKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9nZXRIb3N0RWxlbWVudCgpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIGNvbnN0IG9wdGlvbiA9IGVsLnNlbGVjdGVkT3B0aW9ucyA/IGVsLnNlbGVjdGVkT3B0aW9ucy5pdGVtKDApIDogbnVsbDtcbiAgICByZXR1cm4gb3B0aW9uID8gISFvcHRpb24ubGFiZWwgOiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=