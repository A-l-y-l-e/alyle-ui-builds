/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation, ContentChildren, QueryList, NgZone, Directive, HostListener, HostBinding, Optional, Self, forwardRef } from '@angular/core';
import { LyTheme2, ElementObserver, Platform, toBoolean, DirAlias, getLyThemeVariableUndefinedError } from '@alyle/ui';
import { LyLabel } from './label';
import { LyPlaceholder } from './placeholder';
import { LyHint } from './hint';
import { LyPrefix } from './prefix';
import { LySuffix } from './suffix';
import { Subject } from 'rxjs';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { LyError } from './error';
import { STYLES } from './styles';
import { LyFieldControlBase } from './field-control-base';
/**
 * LyField
 * @type {?}
 */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_APPEARANCE = 'standard';
/** @type {?} */
const DEFAULT_APPEARANCE_THEME = {
    standard: {
        '&:not({disabled}) {container}:hover:after': {
            borderBottomColor: 'currentColor'
        },
        '&{disabled} {container}:after': {
            borderBottomStyle: 'dotted',
            borderColor: 'inherit'
        },
        'textarea{inputNative}': {
            margin: '0.25em 0'
        },
        '{inputNative}:not(textarea)': {
            padding: '0.25em 0'
        },
        '& {container}': {
            padding: '1em 0 0',
            '&:after': {
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px'
            }
        },
        '&{focused} {container}': {
            '&:after': {
                borderWidth: '2px',
                borderColor: 'currentColor'
            }
        },
        '& {label}': {
            margin: '0.25em 0'
        },
        '& {placeholder}': {
            margin: '0.25em 0'
        },
        '& {floatingLabel}': {
            transform: 'translateY(-1.25em)'
        }
    }
};
/** @type {?} */
const DEFAULT_WITH_COLOR = 'primary';
/** @type {?} */
const inputText = [
    'text',
    'number',
    'password',
    'search',
    'tel',
    'url'
];
export class LyField {
    /**
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} _elementObserver
     * @param {?} _theme
     * @param {?} _cd
     * @param {?} _ngZone
     */
    constructor(_renderer, _el, _elementObserver, _theme, _cd, _ngZone) {
        this._renderer = _renderer;
        this._el = _el;
        this._elementObserver = _elementObserver;
        this._theme = _theme;
        this._cd = _cd;
        this._ngZone = _ngZone;
        /**
         * styles
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.root);
        if (!_theme.variables.field) {
            throw getLyThemeVariableUndefinedError('field');
        }
    }
    /**
     * @return {?}
     */
    get errorState() {
        return this._control.errorState;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set fullWidth(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        if (newVal) {
            this._fullWidthClass = this._theme.addStyle(`fullWidth`, { width: '100%' }, this._getHostElement(), this._fullWidthClass, STYLE_PRIORITY);
        }
        else if (this._fullWidthClass) {
            this._renderer.removeClass(this._getHostElement(), this._fullWidthClass);
            this._fullWidthClass = undefined;
        }
        this._fullWidth = newVal;
    }
    /**
     * @return {?}
     */
    get fullWidth() {
        return this._fullWidth;
    }
    /**
     * Whether the label is floating.
     * @param {?} val
     * @return {?}
     */
    set floatingLabel(val) {
        this._floatingLabel = toBoolean(val);
        this._updateFloatingLabel();
    }
    /**
     * @return {?}
     */
    get floatingLabel() {
        return this._floatingLabel;
    }
    /**
     * Theme color for the component.
     * @param {?} val
     * @return {?}
     */
    set color(val) {
        if (val !== this._color) {
            this._color = val;
            this._colorClass = this._theme.addStyle(`ly-field.color:${val}`, (theme) => {
                /** @type {?} */
                const color = theme.colorOf(val);
                /** @type {?} */
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
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * The field appearance style.
     * @param {?} val
     * @return {?}
     */
    set appearance(val) {
        if (val !== this.appearance) {
            this._appearance = val;
            if (!((/** @type {?} */ (this._theme.variables.field)).appearance[val] || DEFAULT_APPEARANCE_THEME[val])) {
                throw new Error(`${val} not found in theme.field.appearance`);
            }
            this._appearanceClass = this._theme.addStyle(`ly-field.appearance:${val}`, (theme) => {
                /** @type {?} */
                const appearance = (/** @type {?} */ (theme.field)).appearance[val] || DEFAULT_APPEARANCE_THEME[val];
                return appearance;
            }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
        }
    }
    /**
     * @return {?}
     */
    get appearance() {
        return this._appearance;
    }
    /**
     * @return {?}
     */
    onFocus() {
        this._el.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.color) {
            this.color = DEFAULT_WITH_COLOR;
        }
        if (!this.appearance) {
            this.appearance = DEFAULT_APPEARANCE;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._control.stateChanges.subscribe(() => {
            this._updateFloatingLabel();
            this._markForCheck();
        });
        /** @type {?} */
        const ngControl = this._control.ngControl;
        // Run change detection if the value changes.
        if (ngControl && ngControl.valueChanges) {
            ngControl.valueChanges.subscribe(() => {
                this._updateFloatingLabel();
                this._markForCheck();
            });
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._updateFloatingLabel();
        if (Platform.isBrowser) {
            this._ngZone.runOutsideAngular(() => {
                if (this._prefixContainer) {
                    /** @type {?} */
                    const el = this._prefixContainer.nativeElement;
                    this._updateFielset(el, DirAlias.before);
                    this._elementObserver.observe(el, () => {
                        this._updateFielset(el, DirAlias.before);
                    });
                }
                if (this._suffixContainer) {
                    /** @type {?} */
                    const el = this._suffixContainer.nativeElement;
                    this._updateFielset(el, DirAlias.after);
                    this._elementObserver.observe(el, () => {
                        this._updateFielset(el, DirAlias.after);
                    });
                }
                if (this._labelSpan) {
                    /** @type {?} */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._prefixContainer) {
            /** @type {?} */
            const el = this._prefixContainer;
            this._elementObserver.destroy(el);
        }
        if (this._suffixContainer) {
            /** @type {?} */
            const el = this._suffixContainer;
            this._elementObserver.destroy(el);
        }
        if (this._labelSpan) {
            /** @type {?} */
            const el = this._labelSpan;
            this._elementObserver.destroy(el);
        }
    }
    /**
     * @private
     * @param {?} el
     * @param {?} dir
     * @return {?}
     */
    _updateFielset(el, dir) {
        const { width } = el.getBoundingClientRect();
        /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
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
    /**
     * @ignore
     * @return {?}
     */
    _isLabel() {
        if (this._control.placeholder && !this._labelChild) {
            return true;
        }
        else if (this._labelChild || this._placeholderChild) {
            return true;
        }
        return false;
    }
    /**
     * @ignore
     * @return {?}
     */
    _isPlaceholder() {
        if ((this._labelChild && this._control.placeholder) || (this._labelChild && this._placeholderChild)) {
            return true;
        }
        return false;
    }
    /**
     * @ignore
     * @return {?}
     */
    _isEmpty() {
        /** @type {?} */
        const val = this._control.value;
        return val === '' || val === null || val === undefined;
    }
    /**
     * @private
     * @return {?}
     */
    _updateFloatingLabel() {
        if (this._labelContainer2) {
            /** @type {?} */
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
        if (this._control.focused) {
            this._renderer.addClass(this._el.nativeElement, this.classes.focused);
        }
        else {
            this._renderer.removeClass(this._el.nativeElement, this.classes.focused);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _markForCheck() {
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    _getHostElement() {
        return this._el.nativeElement;
    }
}
LyField.decorators = [
    { type: Component, args: [{
                selector: 'ly-field',
                exportAs: 'lyFormField',
                template: "<div [className]=\"classes.container\" (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n  <fieldset [className]=\"classes.fieldset\"><legend #_fieldsetLegend [className]=\"classes.fieldsetSpan\"></legend></fieldset>\n  <div [className]=\"classes.prefix\" *ngIf=\"_prefixChildren.length\" #_prefixContainer>\n    <ng-content select=\"[lyPrefix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.infix\">\n    <ng-content></ng-content>\n    <div [className]=\"classes.label\" *ngIf=\"_isLabel()\" #_labelContainer2>\n      <span #_labelSpan [className]=\"classes.labelSpan\">\n        <ng-container *ngTemplateOutlet=\"_labelTemplate\"></ng-container>\n      </span>\n    </div>\n    <div [className]=\"classes.placeholder\" *ngIf=\"_isPlaceholder() && _control.empty && (_control.floatingLabel || floatingLabel)\">\n      <ng-container *ngTemplateOutlet=\"_placeholderTemplate\"></ng-container>\n    </div>\n  </div>\n  <div [className]=\"classes.suffix\" *ngIf=\"_suffixChildren.length\" #_suffixContainer>\n    <ng-content select=\"[lySuffix]\"></ng-content>\n  </div>\n</div>\n\n<div [className]=\"classes.hintContainer\">\n  <div *ngIf=\"_hintChildren.length && (persistentHint || _control.errorState || _control.focused)\">\n    <span *ngIf=\"_control.errorState\">\n      <ng-content select=\"ly-error\"></ng-content>\n    </span>\n    <ng-content select=\"ly-hint\"></ng-content>\n  </div>\n</div>\n\n<ng-template #_labelTemplate>\n  <ng-content select=\"ly-label\"></ng-content>\n  <ng-container *ngIf=\"!_labelChild\">\n    <ng-template *ngTemplateOutlet=\"_placeholderTemplate\"></ng-template>\n  </ng-container>\n</ng-template>\n\n<ng-template #_placeholderTemplate>\n  <ng-content select=\"ly-placeholder\"></ng-content>\n  <ng-container *ngIf=\"_control.placeholder\">{{ _control.placeholder }}</ng-container>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
LyField.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: ElementObserver },
    { type: LyTheme2 },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
LyField.propDecorators = {
    _labelContainer: [{ type: ViewChild, args: ['_labelContainer',] }],
    _labelContainer2: [{ type: ViewChild, args: ['_labelContainer2',] }],
    _labelSpan: [{ type: ViewChild, args: ['_labelSpan',] }],
    _prefixContainer: [{ type: ViewChild, args: ['_prefixContainer',] }],
    _suffixContainer: [{ type: ViewChild, args: ['_suffixContainer',] }],
    _fieldsetLegend: [{ type: ViewChild, args: ['_fieldsetLegend',] }],
    _control: [{ type: ContentChild, args: [forwardRef(() => LyFieldControlBase),] }],
    _placeholderChild: [{ type: ContentChild, args: [LyPlaceholder,] }],
    _labelChild: [{ type: ContentChild, args: [LyLabel,] }],
    _hintChildren: [{ type: ContentChildren, args: [LyHint,] }],
    _prefixChildren: [{ type: ContentChildren, args: [LyPrefix,] }],
    _suffixChildren: [{ type: ContentChildren, args: [LySuffix,] }],
    _errorChildren: [{ type: ContentChildren, args: [LyError,] }],
    persistentHint: [{ type: Input }],
    fullWidth: [{ type: Input }],
    floatingLabel: [{ type: Input }],
    color: [{ type: Input }],
    appearance: [{ type: Input }],
    onFocus: [{ type: HostListener, args: ['focus',] }]
};
if (false) {
    /**
     * styles
     * \@docs-private
     * @type {?}
     */
    LyField.prototype.classes;
    /**
     * @type {?}
     * @protected
     */
    LyField.prototype._appearance;
    /**
     * @type {?}
     * @protected
     */
    LyField.prototype._appearanceClass;
    /**
     * @type {?}
     * @protected
     */
    LyField.prototype._color;
    /**
     * @type {?}
     * @protected
     */
    LyField.prototype._colorClass;
    /**
     * @type {?}
     * @protected
     */
    LyField.prototype._isFloating;
    /**
     * @type {?}
     * @protected
     */
    LyField.prototype._floatingLabel;
    /**
     * @type {?}
     * @private
     */
    LyField.prototype._fielsetSpanClass;
    /**
     * @type {?}
     * @private
     */
    LyField.prototype._marginStartClass;
    /**
     * @type {?}
     * @private
     */
    LyField.prototype._marginEndClass;
    /**
     * @type {?}
     * @private
     */
    LyField.prototype._fullWidth;
    /**
     * @type {?}
     * @private
     */
    LyField.prototype._fullWidthClass;
    /** @type {?} */
    LyField.prototype._labelContainer;
    /** @type {?} */
    LyField.prototype._labelContainer2;
    /** @type {?} */
    LyField.prototype._labelSpan;
    /** @type {?} */
    LyField.prototype._prefixContainer;
    /** @type {?} */
    LyField.prototype._suffixContainer;
    /** @type {?} */
    LyField.prototype._fieldsetLegend;
    /** @type {?} */
    LyField.prototype._control;
    /** @type {?} */
    LyField.prototype._placeholderChild;
    /** @type {?} */
    LyField.prototype._labelChild;
    /** @type {?} */
    LyField.prototype._hintChildren;
    /** @type {?} */
    LyField.prototype._prefixChildren;
    /** @type {?} */
    LyField.prototype._suffixChildren;
    /** @type {?} */
    LyField.prototype._errorChildren;
    /** @type {?} */
    LyField.prototype.persistentHint;
    /**
     * @type {?}
     * @private
     */
    LyField.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyField.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyField.prototype._elementObserver;
    /**
     * @type {?}
     * @private
     */
    LyField.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LyField.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    LyField.prototype._ngZone;
}
export class LyNativeControl {
    /**
     * @param {?} _theme
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _field
     * @param {?} ngControl
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     */
    constructor(_theme, _el, _renderer, _field, ngControl, _parentForm, _parentFormGroup) {
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
    /**
     * @return {?}
     */
    _onInput() {
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    _onBlur() {
        if (this._focused !== false) {
            this._focused = false;
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    _onFocus() {
        if (this._focused !== true) {
            this._focused = true;
            this.stateChanges.next();
        }
    }
    /**
     * @ignore
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        if (val !== this.value) {
            this._getHostElement().value = val;
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._getHostElement().value;
    }
    /**
     * Whether the input is disabled.
     * @param {?} val
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} val
     * @return {?}
     */
    set placeholder(val) {
        this._placeholder = val;
    }
    /**
     * @return {?}
     */
    get placeholder() { return this._placeholder; }
    /**
     * @return {?}
     */
    get focused() {
        return this._focused;
    }
    /**
     * @return {?}
     */
    get empty() {
        /** @type {?} */
        const val = this.value;
        return val === '' || val == null;
    }
    /**
     * @return {?}
     */
    get floatingLabel() {
        return this.focused || !this.empty || (this._isSelectInput ? this._hasLabelSelectionOption() : false);
    }
    /**
     * @return {?}
     */
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
        /** @type {?} */
        const ngControl = this.ngControl;
        // update styles on disabled
        if (ngControl && ngControl.statusChanges) {
            ngControl.statusChanges.subscribe(() => {
                this.disabled = !!ngControl.disabled;
            });
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        /** @type {?} */
        const oldVal = this.errorState;
        /** @type {?} */
        const newVal = !!(this.ngControl && this.ngControl.invalid && (this.ngControl.touched || (this._form && this._form.submitted)));
        if (newVal !== oldVal) {
            this.errorState = newVal;
            if (this._field) {
                /** @type {?} */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    /**
     * \@docs-private
     * @param {?} _e
     * @return {?}
     */
    onContainerClick(_e) {
        this._getHostElement().focus();
    }
    /**
     * Focuses the input.
     * @return {?}
     */
    focus() { this._getHostElement().focus(); }
    /**
     * @return {?}
     */
    _getHostElement() {
        return this._el.nativeElement;
    }
    /**
     * @private
     * @return {?}
     */
    _hasLabelSelectionOption() {
        /** @type {?} */
        const el = (/** @type {?} */ (this._getHostElement()));
        /** @type {?} */
        const option = el.selectedOptions ? el.selectedOptions.item(0) : null;
        return option ? !!option.label : false;
    }
}
LyNativeControl.decorators = [
    { type: Directive, args: [{
                selector: 'input[lyInput], textarea[lyInput], input[lyNativeControl], textarea[lyNativeControl], select[lyNativeControl]',
                exportAs: 'LyNativeControl',
                providers: [
                    { provide: LyFieldControlBase, useExisting: LyNativeControl }
                ]
            },] }
];
/** @nocollapse */
LyNativeControl.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyField, decorators: [{ type: Optional }] },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] }
];
LyNativeControl.propDecorators = {
    _onInput: [{ type: HostListener, args: ['input',] }],
    _onBlur: [{ type: HostListener, args: ['blur',] }],
    _onFocus: [{ type: HostListener, args: ['focus',] }],
    value: [{ type: Input }],
    disabled: [{ type: HostBinding }, { type: Input }],
    required: [{ type: HostBinding }, { type: Input }],
    placeholder: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    LyNativeControl.prototype._disabled;
    /**
     * @type {?}
     * @protected
     */
    LyNativeControl.prototype._required;
    /**
     * @type {?}
     * @protected
     */
    LyNativeControl.prototype._placeholder;
    /** @type {?} */
    LyNativeControl.prototype.stateChanges;
    /**
     * @type {?}
     * @private
     */
    LyNativeControl.prototype._hasDisabledClass;
    /**
     * @type {?}
     * @private
     */
    LyNativeControl.prototype._errorClass;
    /**
     * @type {?}
     * @private
     */
    LyNativeControl.prototype._cursorClass;
    /**
     * @type {?}
     * @private
     */
    LyNativeControl.prototype._isSelectInput;
    /**
     * @type {?}
     * @private
     */
    LyNativeControl.prototype._form;
    /** @type {?} */
    LyNativeControl.prototype._focused;
    /** @type {?} */
    LyNativeControl.prototype.errorState;
    /**
     * @type {?}
     * @private
     */
    LyNativeControl.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LyNativeControl.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyNativeControl.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyNativeControl.prototype._field;
    /**
     * \@docs-private
     * @type {?}
     */
    LyNativeControl.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    LyNativeControl.prototype._parentForm;
    /**
     * @type {?}
     * @private
     */
    LyNativeControl.prototype._parentFormGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFFVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFFBQVEsRUFDUixJQUFJLEVBQ0osVUFBVSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxRQUFRLEVBQWtCLGVBQWUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2SSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7TUFHcEQsY0FBYyxHQUFHLENBQUMsQ0FBQzs7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QUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFO2lCQUM5RDthQUNGOzs7O1lBcFhRLFFBQVE7WUFsQmYsVUFBVTtZQUdWLFNBQVM7WUEwZXFCLE9BQU8sdUJBQWxDLFFBQVE7WUFwZEosU0FBUyx1QkFzZGIsUUFBUSxZQUFJLElBQUk7WUF0ZEQsTUFBTSx1QkF1ZHJCLFFBQVE7WUF2ZGUsa0JBQWtCLHVCQXdkekMsUUFBUTs7O3VCQTdGVixZQUFZLFNBQUMsT0FBTztzQkFJcEIsWUFBWSxTQUFDLE1BQU07dUJBTW5CLFlBQVksU0FBQyxPQUFPO29CQVFwQixLQUFLO3VCQVlMLFdBQVcsWUFDWCxLQUFLO3VCQTRCTCxXQUFXLFlBQ1gsS0FBSzswQkFNTCxLQUFLOzs7Ozs7O0lBOUVOLG9DQUE0Qjs7Ozs7SUFDNUIsb0NBQTRCOzs7OztJQUM1Qix1Q0FBK0I7O0lBQy9CLHVDQUEyRDs7Ozs7SUFDM0QsNENBQW9DOzs7OztJQUNwQyxzQ0FBNkI7Ozs7O0lBQzdCLHVDQUFvQzs7Ozs7SUFDcEMseUNBQWdDOzs7OztJQUNoQyxnQ0FBOEY7O0lBQzlGLG1DQUEwQjs7SUFDMUIscUNBQTRCOzs7OztJQXdGMUIsaUNBQXdCOzs7OztJQUN4Qiw4QkFBbUY7Ozs7O0lBQ25GLG9DQUE0Qjs7Ozs7SUFDNUIsaUNBQW1DOzs7OztJQUVuQyxvQ0FBK0M7Ozs7O0lBQy9DLHNDQUF1Qzs7Ozs7SUFDdkMsMkNBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgTmdab25lLFxuICBEaXJlY3RpdmUsXG4gIE9uRGVzdHJveSxcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIGZvcndhcmRSZWYsXG4gIERvQ2hlY2tcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcywgRWxlbWVudE9ic2VydmVyLCBQbGF0Zm9ybSwgdG9Cb29sZWFuLCBEaXJBbGlhcywgZ2V0THlUaGVtZVZhcmlhYmxlVW5kZWZpbmVkRXJyb3IgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlIaW50IH0gZnJvbSAnLi9oaW50JztcbmltcG9ydCB7IEx5UHJlZml4IH0gZnJvbSAnLi9wcmVmaXgnO1xuaW1wb3J0IHsgTHlTdWZmaXggfSBmcm9tICcuL3N1ZmZpeCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIE5nRm9ybSwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlFcnJvciB9IGZyb20gJy4vZXJyb3InO1xuaW1wb3J0IHsgU1RZTEVTIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgTHlGaWVsZENvbnRyb2xCYXNlIH0gZnJvbSAnLi9maWVsZC1jb250cm9sLWJhc2UnO1xuXG4vKiogTHlGaWVsZCAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfQVBQRUFSQU5DRSA9ICdzdGFuZGFyZCc7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0VfVEhFTUUgPSB7XG4gIHN0YW5kYXJkOiB7XG4gICAgJyY6bm90KHtkaXNhYmxlZH0pIHtjb250YWluZXJ9OmhvdmVyOmFmdGVyJzoge1xuICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgfSxcbiAgICAnJntkaXNhYmxlZH0ge2NvbnRhaW5lcn06YWZ0ZXInOiB7XG4gICAgICBib3JkZXJCb3R0b21TdHlsZTogJ2RvdHRlZCcsXG4gICAgICBib3JkZXJDb2xvcjogJ2luaGVyaXQnXG4gICAgfSxcbiAgICAndGV4dGFyZWF7aW5wdXROYXRpdmV9Jzoge1xuICAgICAgbWFyZ2luOiAnMC4yNWVtIDAnXG4gICAgfSxcbiAgICAne2lucHV0TmF0aXZlfTpub3QodGV4dGFyZWEpJzoge1xuICAgICAgcGFkZGluZzogJzAuMjVlbSAwJ1xuICAgIH0sXG4gICAgJyYge2NvbnRhaW5lcn0nOiB7XG4gICAgICBwYWRkaW5nOiAnMWVtIDAgMCcsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdzb2xpZCcsXG4gICAgICAgIGJvcmRlckJvdHRvbVdpZHRoOiAnMXB4J1xuICAgICAgfVxuICAgIH0sXG4gICAgJyZ7Zm9jdXNlZH0ge2NvbnRhaW5lcn0nOiB7XG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnLFxuICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH1cbiAgICB9LFxuICAgICcmIHtsYWJlbH0nOiB7XG4gICAgICBtYXJnaW46ICcwLjI1ZW0gMCdcbiAgICB9LFxuICAgICcmIHtwbGFjZWhvbGRlcn0nOiB7XG4gICAgICBtYXJnaW46ICcwLjI1ZW0gMCdcbiAgICB9LFxuICAgICcmIHtmbG9hdGluZ0xhYmVsfSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEuMjVlbSknXG4gICAgfVxuICB9XG59O1xuY29uc3QgREVGQVVMVF9XSVRIX0NPTE9SID0gJ3ByaW1hcnknO1xuXG5jb25zdCBpbnB1dFRleHQgPSBbXG4gICd0ZXh0JyxcbiAgJ251bWJlcicsXG4gICdwYXNzd29yZCcsXG4gICdzZWFyY2gnLFxuICAndGVsJyxcbiAgJ3VybCdcbl07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkJyxcbiAgZXhwb3J0QXM6ICdseUZvcm1GaWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnZmllbGQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByb3RlY3RlZCBfYXBwZWFyYW5jZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2NvbG9yOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfY29sb3JDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2lzRmxvYXRpbmc6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZmxvYXRpbmdMYWJlbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZmllbHNldFNwYW5DbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9tYXJnaW5TdGFydENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX21hcmdpbkVuZENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Z1bGxXaWR0aDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZnVsbFdpZHRoQ2xhc3M/OiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcicpIF9sYWJlbENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcjInKSBfbGFiZWxDb250YWluZXIyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsU3BhbicpIF9sYWJlbFNwYW46IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfcHJlZml4Q29udGFpbmVyJykgX3ByZWZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19zdWZmaXhDb250YWluZXInKSBfc3VmZml4Q29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2ZpZWxkc2V0TGVnZW5kJykgX2ZpZWxkc2V0TGVnZW5kOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5RmllbGRDb250cm9sQmFzZSkpIF9jb250cm9sOiBMeUZpZWxkQ29udHJvbEJhc2U7XG4gIEBDb250ZW50Q2hpbGQoTHlQbGFjZWhvbGRlcikgX3BsYWNlaG9sZGVyQ2hpbGQ6IEx5UGxhY2Vob2xkZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlMYWJlbCkgX2xhYmVsQ2hpbGQ6IEx5TGFiZWw7XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlIaW50KSBfaGludENoaWxkcmVuOiBRdWVyeUxpc3Q8THlIaW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihMeVByZWZpeCkgX3ByZWZpeENoaWxkcmVuOiBRdWVyeUxpc3Q8THlQcmVmaXg+O1xuICBAQ29udGVudENoaWxkcmVuKEx5U3VmZml4KSBfc3VmZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeVN1ZmZpeD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlFcnJvcikgX2Vycm9yQ2hpbGRyZW46IFF1ZXJ5TGlzdDxMeUVycm9yPjtcblxuICBnZXQgZXJyb3JTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbC5lcnJvclN0YXRlO1xuICB9XG5cbiAgQElucHV0KCkgcGVyc2lzdGVudEhpbnQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGZ1bGxXaWR0aCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLl9mdWxsV2lkdGhDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgZnVsbFdpZHRoYCxcbiAgICAgICAgeyB3aWR0aDogJzEwMCUnIH0sXG4gICAgICAgIHRoaXMuX2dldEhvc3RFbGVtZW50KCksXG4gICAgICAgIHRoaXMuX2Z1bGxXaWR0aENsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2Z1bGxXaWR0aENsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9mdWxsV2lkdGhDbGFzcyk7XG4gICAgICB0aGlzLl9mdWxsV2lkdGhDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5fZnVsbFdpZHRoID0gbmV3VmFsO1xuICB9XG4gIGdldCBmdWxsV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxXaWR0aDtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBsYWJlbCBpcyBmbG9hdGluZy4gKi9cbiAgQElucHV0KClcbiAgc2V0IGZsb2F0aW5nTGFiZWwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmxvYXRpbmdMYWJlbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgfVxuICBnZXQgZmxvYXRpbmdMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxvYXRpbmdMYWJlbDtcbiAgfVxuXG4gIC8qKiBUaGVtZSBjb2xvciBmb3IgdGhlIGNvbXBvbmVudC4gKi9cbiAgQElucHV0KClcbiAgc2V0IGNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fY29sb3IpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1maWVsZC5jb2xvcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3JPZih2YWwpO1xuICAgICAgICBjb25zdCBjb250cmFzdCA9IHRoZW1lLmNvbG9yT2YoYCR7dmFsfTpjb250cmFzdGApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfTphZnRlciwgJntmb2N1c2VkfXtzZWxlY3RBcnJvd30ge2luZml4fTphZnRlcmBdOiB7XG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldH1gXToge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmxhYmVsfWBdOiB7XG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5pbnB1dE5hdGl2ZX1gXToge1xuICAgICAgICAgICAgY2FyZXRDb2xvcjogY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmIHtpbnB1dE5hdGl2ZX06OnNlbGVjdGlvbic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBjb2xvcjogY29udHJhc3RcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmIHtpbnB1dE5hdGl2ZX06Oi1tb3otc2VsZWN0aW9uJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGNvbG9yOiBjb250cmFzdFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3MsIFNUWUxFX1BSSU9SSVRZICsgMSwgU1RZTEVTKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIC8qKiBUaGUgZmllbGQgYXBwZWFyYW5jZSBzdHlsZS4gKi9cbiAgQElucHV0KClcbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgICBpZiAoISh0aGlzLl90aGVtZS52YXJpYWJsZXMuZmllbGQhLmFwcGVhcmFuY2VbdmFsXSB8fCBERUZBVUxUX0FQUEVBUkFOQ0VfVEhFTUVbdmFsXSkpICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx9IG5vdCBmb3VuZCBpbiB0aGVtZS5maWVsZC5hcHBlYXJhbmNlYCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQuYXBwZWFyYW5jZToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwcGVhcmFuY2UgPSB0aGVtZS5maWVsZCEuYXBwZWFyYW5jZVt2YWxdIHx8IERFRkFVTFRfQVBQRUFSQU5DRV9USEVNRVt2YWxdO1xuICAgICAgICByZXR1cm4gYXBwZWFyYW5jZTtcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FwcGVhcmFuY2VDbGFzcywgU1RZTEVfUFJJT1JJVFksIFNUWUxFUyk7XG4gICAgfVxuICB9XG4gIGdldCBhcHBlYXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCkge1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudE9ic2VydmVyOiBFbGVtZW50T2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBpZiAoIV90aGVtZS52YXJpYWJsZXMuZmllbGQpIHtcbiAgICAgIHRocm93IGdldEx5VGhlbWVWYXJpYWJsZVVuZGVmaW5lZEVycm9yKCdmaWVsZCcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy5jb2xvciA9IERFRkFVTFRfV0lUSF9DT0xPUjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IERFRkFVTFRfQVBQRUFSQU5DRTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fY29udHJvbC5zdGF0ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5fY29udHJvbC5uZ0NvbnRyb2w7XG5cbiAgICAvLyBSdW4gY2hhbmdlIGRldGVjdGlvbiBpZiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICBpZiAobmdDb250cm9sICYmIG5nQ29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgIG5nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3ByZWZpeENvbnRhaW5lcikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fcHJlZml4Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuYmVmb3JlKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuYmVmb3JlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc3VmZml4Q29udGFpbmVyKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9zdWZmaXhDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5hZnRlcik7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmFmdGVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGFiZWxTcGFuKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gdGhpcyBmaXggd2l0aCBvZiBsYWJlbFxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9wcmVmaXhDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fcHJlZml4Q29udGFpbmVyO1xuICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLmRlc3Ryb3koZWwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VmZml4Q29udGFpbmVyKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX3N1ZmZpeENvbnRhaW5lcjtcbiAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5kZXN0cm95KGVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhYmVsU3Bhbikge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9sYWJlbFNwYW47XG4gICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIuZGVzdHJveShlbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldChlbDogRWxlbWVudCwgZGlyOiBEaXJBbGlhcykge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGZpZWxkTGVnZW5kc3R5bGUubWFyZ2luJHtkaXJ9OiR7d2lkdGh9YCwgKCkgPT4gKHtcbiAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXRTcGFufWBdOiB7XG4gICAgICAgIFtgbWFyZ2luLSR7ZGlyfWBdOiBgJHt3aWR0aH1weGBcbiAgICAgIH1cbiAgICB9KSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICBpZiAoZGlyID09PSBEaXJBbGlhcy5iZWZvcmUpIHtcbiAgICAgIHRoaXMuX21hcmdpblN0YXJ0Q2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX21hcmdpblN0YXJ0Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tYXJnaW5FbmRDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fbWFyZ2luRW5kQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZpZWxzZXRTcGFuKCkge1xuICAgIGxldCB7IHdpZHRoIH0gPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoIXRoaXMuX2lzRmxvYXRpbmcpIHtcbiAgICAgIHdpZHRoIC09IHdpZHRoIC8gMTAwICogMjU7XG4gICAgfVxuICAgIC8qKiBBZGQgNnB4IG9mIHNwYWNpbmcgKi9cbiAgICB3aWR0aCArPSA2O1xuICAgIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgc3R5bGUuZmllbGRzZXRTcGFuRm9jdXNlZDoke3dpZHRofWAsIHtcbiAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWx9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldFNwYW59YF06IHt3aWR0aDogYCR7d2lkdGh9cHhgfVxuICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbC5wbGFjZWhvbGRlciAmJiAhdGhpcy5fbGFiZWxDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYWJlbENoaWxkIHx8IHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNQbGFjZWhvbGRlcigpIHtcbiAgICBpZiAoKHRoaXMuX2xhYmVsQ2hpbGQgJiYgdGhpcy5fY29udHJvbC5wbGFjZWhvbGRlcikgfHwgKHRoaXMuX2xhYmVsQ2hpbGQgJiYgdGhpcy5fcGxhY2Vob2xkZXJDaGlsZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNFbXB0eSgpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9jb250cm9sLnZhbHVlO1xuICAgIHJldHVybiB2YWwgPT09ICcnIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2xhYmVsQ29udGFpbmVyMikge1xuICAgICAgY29uc3QgaXNGbG9hdGluZyA9IHRoaXMuX2NvbnRyb2wuZmxvYXRpbmdMYWJlbCB8fCB0aGlzLmZsb2F0aW5nTGFiZWw7XG4gICAgICBpZiAodGhpcy5faXNGbG9hdGluZyAhPT0gaXNGbG9hdGluZykge1xuICAgICAgICB0aGlzLl9pc0Zsb2F0aW5nID0gaXNGbG9hdGluZztcbiAgICAgICAgaWYgKGlzRmxvYXRpbmcpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9sYWJlbENvbnRhaW5lcjIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWwpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2xhYmVsQ29udGFpbmVyMi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wuZm9jdXNlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlxuICAgICAgJ2lucHV0W2x5SW5wdXRdLCB0ZXh0YXJlYVtseUlucHV0XSwgaW5wdXRbbHlOYXRpdmVDb250cm9sXSwgdGV4dGFyZWFbbHlOYXRpdmVDb250cm9sXSwgc2VsZWN0W2x5TmF0aXZlQ29udHJvbF0nLFxuICBleHBvcnRBczogJ0x5TmF0aXZlQ29udHJvbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTHlGaWVsZENvbnRyb2xCYXNlLCB1c2VFeGlzdGluZzogTHlOYXRpdmVDb250cm9sIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeU5hdGl2ZUNvbnRyb2wgaW1wbGVtZW50cyBMeUZpZWxkQ29udHJvbEJhc2UsIE9uSW5pdCwgRG9DaGVjaywgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3JlcXVpcmVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfaGFzRGlzYWJsZWRDbGFzcz86IGJvb2xlYW47XG4gIHByaXZhdGUgX2Vycm9yQ2xhc3M/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2N1cnNvckNsYXNzOiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIF9pc1NlbGVjdElucHV0OiBib29sZWFuO1xuICBwcml2YXRlIF9mb3JtOiBOZ0Zvcm0gfCBGb3JtR3JvdXBEaXJlY3RpdmUgfCBudWxsID0gdGhpcy5fcGFyZW50Rm9ybSB8fCB0aGlzLl9wYXJlbnRGb3JtR3JvdXA7XG4gIF9mb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XG4gIGVycm9yU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIF9vbklucHV0KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBfb25CbHVyKCkge1xuICAgIGlmICh0aGlzLl9mb2N1c2VkICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIF9vbkZvY3VzKCkge1xuICAgIGlmICh0aGlzLl9mb2N1c2VkICE9PSB0cnVlKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS52YWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLnZhbHVlO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGRpc2FibGVkLiAqL1xuICBASG9zdEJpbmRpbmcoKVxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgICAgaWYgKCF2YWwgJiYgdGhpcy5faGFzRGlzYWJsZWRDbGFzcykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICBpZiAodGhpcy5fY3Vyc29yQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jdXJzb3JDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoKVxuICBASW5wdXQoKVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cblxuICBASW5wdXQoKVxuICBzZXQgcGxhY2Vob2xkZXIodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbDtcbiAgfVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyOyB9XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cblxuICBnZXQgZW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy52YWx1ZTtcbiAgICByZXR1cm4gdmFsID09PSAnJyB8fCB2YWwgPT0gbnVsbDtcbiAgfVxuXG4gIGdldCBmbG9hdGluZ0xhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHkgfHwgKHRoaXMuX2lzU2VsZWN0SW5wdXQgPyB0aGlzLl9oYXNMYWJlbFNlbGVjdGlvbk9wdGlvbigpIDogZmFsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZmllbGQ6IEx5RmllbGQsXG4gICAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmVcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgJ3BsYWNlaG9sZGVyJywgJ8KtJyk7XG5cbiAgICBjb25zdCB7IG5hdGl2ZUVsZW1lbnQgfSA9IHRoaXMuX2VsO1xuXG4gICAgaWYgKG5hdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHRoaXMuX2lzU2VsZWN0SW5wdXQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGNsYXNzIHtzZWxlY3RBcnJvd30gdG8gYDxzZWxlY3Q+IG5vdCBtdWx0aXBsZWBcbiAgICBpZiAodGhpcy5fZmllbGQgJiYgbmF0aXZlRWxlbWVudC50eXBlID09PSAnc2VsZWN0LW9uZScpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLnNlbGVjdEFycm93KTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBzdHlsZSBjdXJzb3Igb25seSBmb3IgaW5wdXQgb2YgdHlwZSB0ZXh0XG4gICAgaWYgKG5hdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50IHx8XG4gICAgICAgIGlucHV0VGV4dC5zb21lKHR5cGUgPT4gdHlwZSA9PT0gbmF0aXZlRWxlbWVudC50eXBlKSkge1xuICAgICAgdGhpcy5fY3Vyc29yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZSgnbHlGaWVsZC50ZXh0Jywge1xuICAgICAgICAnJiB7aW5maXh9Jzoge1xuICAgICAgICAgIGN1cnNvcjogJ3RleHQnXG4gICAgICAgIH1cbiAgICAgIH0sIFNUWUxFX1BSSU9SSVRZLCBTVFlMRVMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdElucHV0KSB7XG4gICAgICB0aGlzLl9jdXJzb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKCdseUZpZWxkLnNlbGVjdCcsIHtcbiAgICAgICAgJyYge2luZml4fSc6IHtcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICB9XG4gICAgICB9LCBTVFlMRV9QUklPUklUWSwgU1RZTEVTKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY3Vyc29yQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jdXJzb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgZGVmYXVsdCBzdHlsZXNcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhuYXRpdmVFbGVtZW50LCB0aGlzLl9maWVsZC5jbGFzc2VzLmlucHV0TmF0aXZlKTtcblxuICAgIGNvbnN0IG5nQ29udHJvbCA9IHRoaXMubmdDb250cm9sO1xuICAgIC8vIHVwZGF0ZSBzdHlsZXMgb24gZGlzYWJsZWRcbiAgICBpZiAobmdDb250cm9sICYmIG5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gISFuZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgY29uc3Qgb2xkVmFsID0gdGhpcy5lcnJvclN0YXRlO1xuICAgIGNvbnN0IG5ld1ZhbCA9ICEhKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmludmFsaWQgJiYgKHRoaXMubmdDb250cm9sLnRvdWNoZWQgfHwgKHRoaXMuX2Zvcm0gJiYgdGhpcy5fZm9ybS5zdWJtaXR0ZWQpKSk7XG4gICAgaWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG4gICAgICB0aGlzLmVycm9yU3RhdGUgPSBuZXdWYWw7XG4gICAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgICAgY29uc3QgZXJyb3JDbGFzcyA9IHRoaXMuX2ZpZWxkLmNsYXNzZXMuZXJyb3JTdGF0ZTtcbiAgICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBlcnJvckNsYXNzKTtcbiAgICAgICAgICB0aGlzLl9lcnJvckNsYXNzID0gZXJyb3JDbGFzcztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9lcnJvckNsYXNzKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIGVycm9yQ2xhc3MpO1xuICAgICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBvbkNvbnRhaW5lckNsaWNrKF9lOiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpO1xuICB9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGlucHV0LiAqL1xuICBmb2N1cygpOiB2b2lkIHsgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5mb2N1cygpOyB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFzTGFiZWxTZWxlY3Rpb25PcHRpb24oKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9nZXRIb3N0RWxlbWVudCgpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIGNvbnN0IG9wdGlvbiA9IGVsLnNlbGVjdGVkT3B0aW9ucyA/IGVsLnNlbGVjdGVkT3B0aW9ucy5pdGVtKDApIDogbnVsbDtcbiAgICByZXR1cm4gb3B0aW9uID8gISFvcHRpb24ubGFiZWwgOiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=