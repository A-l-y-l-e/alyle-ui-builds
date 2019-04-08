import * as tslib_1 from "tslib";
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
/** LyField */
var STYLE_PRIORITY = -2;
var DEFAULT_APPEARANCE = 'standard';
var DEFAULT_APPEARANCE_THEME = {
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
var DEFAULT_WITH_COLOR = 'primary';
var inputText = [
    'text',
    'number',
    'password',
    'search',
    'tel',
    'url'
];
var LyField = /** @class */ (function () {
    function LyField(_renderer, _el, _elementObserver, _theme, _cd, _ngZone) {
        this._renderer = _renderer;
        this._el = _el;
        this._elementObserver = _elementObserver;
        this._theme = _theme;
        this._cd = _cd;
        this._ngZone = _ngZone;
        /**
         * styles
         * @docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.root);
        if (!_theme.variables.field) {
            throw getLyThemeVariableUndefinedError('field');
        }
    }
    Object.defineProperty(LyField.prototype, "errorState", {
        get: function () {
            return this._control.errorState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyField.prototype, "fullWidth", {
        get: function () {
            return this._fullWidth;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal) {
                this._fullWidthClass = this._theme.addStyle("fullWidth", { width: '100%' }, this._getHostElement(), this._fullWidthClass, STYLE_PRIORITY);
            }
            else if (this._fullWidthClass) {
                this._renderer.removeClass(this._getHostElement(), this._fullWidthClass);
                this._fullWidthClass = undefined;
            }
            this._fullWidth = newVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyField.prototype, "floatingLabel", {
        get: function () {
            return this._floatingLabel;
        },
        /** Whether the label is floating. */
        set: function (val) {
            this._floatingLabel = toBoolean(val);
            this._updateFloatingLabel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyField.prototype, "color", {
        get: function () {
            return this._color;
        },
        /** Theme color for the component. */
        set: function (val) {
            var _this = this;
            if (val !== this._color) {
                this._color = val;
                this._colorClass = this._theme.addStyle("ly-field.color:" + val, function (theme) {
                    var _a;
                    var color = theme.colorOf(val);
                    var contrast = theme.colorOf(val + ":contrast");
                    return _a = {},
                        _a["&." + _this.classes.focused + " ." + _this.classes.container + ":after, &{focused}{selectArrow} {infix}:after"] = {
                            color: color
                        },
                        _a["&." + _this.classes.focused + " ." + _this.classes.fieldset] = {
                            borderColor: color
                        },
                        _a["&." + _this.classes.focused + " ." + _this.classes.label] = {
                            color: color
                        },
                        _a["& ." + _this.classes.inputNative] = {
                            caretColor: color
                        },
                        _a['& {inputNative}::selection'] = {
                            backgroundColor: color,
                            color: contrast
                        },
                        _a['& {inputNative}::-moz-selection'] = {
                            backgroundColor: color,
                            color: contrast
                        },
                        _a;
                }, this._el.nativeElement, this._colorClass, STYLE_PRIORITY + 1, STYLES);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyField.prototype, "appearance", {
        get: function () {
            return this._appearance;
        },
        /** The field appearance style. */
        set: function (val) {
            if (val !== this.appearance) {
                this._appearance = val;
                if (!(this._theme.variables.field.appearance[val] || DEFAULT_APPEARANCE_THEME[val])) {
                    throw new Error(val + " not found in theme.field.appearance");
                }
                this._appearanceClass = this._theme.addStyle("ly-field.appearance:" + val, function (theme) {
                    var appearance = theme.field.appearance[val] || DEFAULT_APPEARANCE_THEME[val];
                    return appearance;
                }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyField.prototype.onFocus = function () {
        this._el.nativeElement.focus();
    };
    LyField.prototype.ngOnInit = function () {
        if (!this.color) {
            this.color = DEFAULT_WITH_COLOR;
        }
        if (!this.appearance) {
            this.appearance = DEFAULT_APPEARANCE;
        }
    };
    LyField.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._control.stateChanges.subscribe(function () {
            _this._updateFloatingLabel();
            _this._markForCheck();
        });
        var ngControl = this._control.ngControl;
        // Run change detection if the value changes.
        if (ngControl && ngControl.valueChanges) {
            ngControl.valueChanges.subscribe(function () {
                _this._updateFloatingLabel();
                _this._markForCheck();
            });
        }
    };
    LyField.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._updateFloatingLabel();
        if (Platform.isBrowser) {
            this._ngZone.runOutsideAngular(function () {
                if (_this._prefixContainer) {
                    var el_1 = _this._prefixContainer.nativeElement;
                    _this._updateFielset(el_1, DirAlias.before);
                    _this._elementObserver.observe(el_1, function () {
                        _this._updateFielset(el_1, DirAlias.before);
                    });
                }
                if (_this._suffixContainer) {
                    var el_2 = _this._suffixContainer.nativeElement;
                    _this._updateFielset(el_2, DirAlias.after);
                    _this._elementObserver.observe(el_2, function () {
                        _this._updateFielset(el_2, DirAlias.after);
                    });
                }
                if (_this._labelSpan) {
                    var el = _this._labelSpan.nativeElement;
                    _this._updateFielsetSpan();
                    _this._elementObserver.observe(el, function () {
                        _this._updateFielsetSpan();
                    });
                }
            });
        }
        // this fix with of label
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
    };
    LyField.prototype.ngOnDestroy = function () {
        if (this._prefixContainer) {
            var el = this._prefixContainer;
            this._elementObserver.destroy(el);
        }
        if (this._suffixContainer) {
            var el = this._suffixContainer;
            this._elementObserver.destroy(el);
        }
        if (this._labelSpan) {
            var el = this._labelSpan;
            this._elementObserver.destroy(el);
        }
    };
    LyField.prototype._updateFielset = function (el, dir) {
        var _this = this;
        var width = el.getBoundingClientRect().width;
        var newClass = this._theme.addStyle("fieldLegendstyle.margin" + dir + ":" + width, function () {
            var _a, _b;
            return (_a = {},
                _a["& ." + _this.classes.fieldsetSpan] = (_b = {},
                    _b["margin-" + dir] = width + "px",
                    _b),
                _a);
        }, undefined, undefined, STYLE_PRIORITY);
        if (dir === DirAlias.before) {
            this._marginStartClass = this._theme.updateClass(this._el.nativeElement, this._renderer, newClass, this._marginStartClass);
        }
        else {
            this._marginEndClass = this._theme.updateClass(this._el.nativeElement, this._renderer, newClass, this._marginEndClass);
        }
    };
    LyField.prototype._updateFielsetSpan = function () {
        var _a;
        var width = this._labelSpan.nativeElement.getBoundingClientRect().width;
        if (!this._isFloating) {
            width -= width / 100 * 25;
        }
        /** Add 6px of spacing */
        width += 6;
        this._fielsetSpanClass = this._theme.addStyle("style.fieldsetSpanFocused:" + width, (_a = {},
            _a["&." + this.classes.isFloatingLabel + " ." + this.classes.fieldsetSpan] = { width: width + "px" },
            _a), this._el.nativeElement, this._fielsetSpanClass, STYLE_PRIORITY);
    };
    /** @ignore */
    LyField.prototype._isLabel = function () {
        if (this._control.placeholder && !this._labelChild) {
            return true;
        }
        else if (this._labelChild || this._placeholderChild) {
            return true;
        }
        return false;
    };
    /** @ignore */
    LyField.prototype._isPlaceholder = function () {
        if ((this._labelChild && this._control.placeholder) || (this._labelChild && this._placeholderChild)) {
            return true;
        }
        return false;
    };
    /** @ignore */
    LyField.prototype._isEmpty = function () {
        var val = this._control.value;
        return val === '' || val === null || val === undefined;
    };
    LyField.prototype._updateFloatingLabel = function () {
        if (this._labelContainer2) {
            var isFloating = this._control.floatingLabel || this.floatingLabel;
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
    };
    LyField.prototype._markForCheck = function () {
        this._cd.markForCheck();
    };
    LyField.prototype._getHostElement = function () {
        return this._el.nativeElement;
    };
    tslib_1.__decorate([
        ViewChild('_labelContainer'),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyField.prototype, "_labelContainer", void 0);
    tslib_1.__decorate([
        ViewChild('_labelContainer2'),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyField.prototype, "_labelContainer2", void 0);
    tslib_1.__decorate([
        ViewChild('_labelSpan'),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyField.prototype, "_labelSpan", void 0);
    tslib_1.__decorate([
        ViewChild('_prefixContainer'),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyField.prototype, "_prefixContainer", void 0);
    tslib_1.__decorate([
        ViewChild('_suffixContainer'),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyField.prototype, "_suffixContainer", void 0);
    tslib_1.__decorate([
        ViewChild('_fieldsetLegend'),
        tslib_1.__metadata("design:type", ElementRef)
    ], LyField.prototype, "_fieldsetLegend", void 0);
    tslib_1.__decorate([
        ContentChild(forwardRef(function () { return LyFieldControlBase; })),
        tslib_1.__metadata("design:type", LyFieldControlBase)
    ], LyField.prototype, "_control", void 0);
    tslib_1.__decorate([
        ContentChild(LyPlaceholder),
        tslib_1.__metadata("design:type", LyPlaceholder)
    ], LyField.prototype, "_placeholderChild", void 0);
    tslib_1.__decorate([
        ContentChild(LyLabel),
        tslib_1.__metadata("design:type", LyLabel)
    ], LyField.prototype, "_labelChild", void 0);
    tslib_1.__decorate([
        ContentChildren(LyHint),
        tslib_1.__metadata("design:type", QueryList)
    ], LyField.prototype, "_hintChildren", void 0);
    tslib_1.__decorate([
        ContentChildren(LyPrefix),
        tslib_1.__metadata("design:type", QueryList)
    ], LyField.prototype, "_prefixChildren", void 0);
    tslib_1.__decorate([
        ContentChildren(LySuffix),
        tslib_1.__metadata("design:type", QueryList)
    ], LyField.prototype, "_suffixChildren", void 0);
    tslib_1.__decorate([
        ContentChildren(LyError),
        tslib_1.__metadata("design:type", QueryList)
    ], LyField.prototype, "_errorChildren", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LyField.prototype, "persistentHint", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LyField.prototype, "fullWidth", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LyField.prototype, "floatingLabel", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LyField.prototype, "color", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LyField.prototype, "appearance", null);
    tslib_1.__decorate([
        HostListener('focus'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LyField.prototype, "onFocus", null);
    LyField = tslib_1.__decorate([
        Component({
            selector: 'ly-field',
            exportAs: 'lyFormField',
            template: "<div [className]=\"classes.container\" (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n  <fieldset [className]=\"classes.fieldset\"><legend #_fieldsetLegend [className]=\"classes.fieldsetSpan\"></legend></fieldset>\n  <div [className]=\"classes.prefix\" *ngIf=\"_prefixChildren.length\" #_prefixContainer>\n    <ng-content select=\"[lyPrefix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.infix\">\n    <ng-content></ng-content>\n    <div [className]=\"classes.label\" *ngIf=\"_isLabel()\" #_labelContainer2>\n      <span #_labelSpan [className]=\"classes.labelSpan\">\n        <ng-container *ngTemplateOutlet=\"_labelTemplate\"></ng-container>\n      </span>\n    </div>\n    <div [className]=\"classes.placeholder\" *ngIf=\"_isPlaceholder() && _control.empty && (_control.floatingLabel || floatingLabel)\">\n      <ng-container *ngTemplateOutlet=\"_placeholderTemplate\"></ng-container>\n    </div>\n  </div>\n  <div [className]=\"classes.suffix\" *ngIf=\"_suffixChildren.length\" #_suffixContainer>\n    <ng-content select=\"[lySuffix]\"></ng-content>\n  </div>\n</div>\n\n<div [className]=\"classes.hintContainer\">\n  <div *ngIf=\"_hintChildren.length && (persistentHint || _control.errorState || _control.focused)\">\n    <span *ngIf=\"_control.errorState\">\n      <ng-content select=\"ly-error\"></ng-content>\n    </span>\n    <ng-content select=\"ly-hint\"></ng-content>\n  </div>\n</div>\n\n<ng-template #_labelTemplate>\n  <ng-content select=\"ly-label\"></ng-content>\n  <ng-container *ngIf=\"!_labelChild\">\n    <ng-template *ngTemplateOutlet=\"_placeholderTemplate\"></ng-template>\n  </ng-container>\n</ng-template>\n\n<ng-template #_placeholderTemplate>\n  <ng-content select=\"ly-placeholder\"></ng-content>\n  <ng-container *ngIf=\"_control.placeholder\">{{ _control.placeholder }}</ng-container>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ElementRef,
            ElementObserver,
            LyTheme2,
            ChangeDetectorRef,
            NgZone])
    ], LyField);
    return LyField;
}());
export { LyField };
var LyNativeControl = /** @class */ (function () {
    function LyNativeControl(_theme, _el, _renderer, _field, 
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
    LyNativeControl_1 = LyNativeControl;
    LyNativeControl.prototype._onInput = function () {
        this.stateChanges.next();
    };
    LyNativeControl.prototype._onBlur = function () {
        if (this._focused !== false) {
            this._focused = false;
            this.stateChanges.next();
        }
    };
    LyNativeControl.prototype._onFocus = function () {
        if (this._focused !== true) {
            this._focused = true;
            this.stateChanges.next();
        }
    };
    Object.defineProperty(LyNativeControl.prototype, "value", {
        get: function () {
            return this._getHostElement().value;
        },
        /** @ignore */
        set: function (val) {
            if (val !== this.value) {
                this._getHostElement().value = val;
                this.stateChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyNativeControl.prototype, "disabled", {
        get: function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        /** Whether the input is disabled. */
        set: function (val) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyNativeControl.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) {
            this._required = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyNativeControl.prototype, "placeholder", {
        get: function () { return this._placeholder; },
        set: function (val) {
            this._placeholder = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyNativeControl.prototype, "focused", {
        get: function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyNativeControl.prototype, "empty", {
        get: function () {
            var val = this.value;
            return val === '' || val == null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyNativeControl.prototype, "floatingLabel", {
        get: function () {
            return this.focused || !this.empty || (this._isSelectInput ? this._hasLabelSelectionOption() : false);
        },
        enumerable: true,
        configurable: true
    });
    LyNativeControl.prototype.ngOnInit = function () {
        var _this = this;
        this._renderer.setAttribute(this._getHostElement(), 'placeholder', '­');
        var nativeElement = this._el.nativeElement;
        if (nativeElement.nodeName.toLowerCase() === 'select') {
            this._isSelectInput = true;
        }
        // apply class {selectArrow} to `<select> not multiple`
        if (this._field && nativeElement.type === 'select-one') {
            this._renderer.addClass(this._field._getHostElement(), this._field.classes.selectArrow);
        }
        // apply style cursor only for input of type text
        if (nativeElement instanceof HTMLTextAreaElement ||
            inputText.some(function (type) { return type === nativeElement.type; })) {
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
        var ngControl = this.ngControl;
        // update styles on disabled
        if (ngControl && ngControl.statusChanges) {
            ngControl.statusChanges.subscribe(function () {
                _this.disabled = !!ngControl.disabled;
            });
        }
    };
    LyNativeControl.prototype.ngDoCheck = function () {
        var oldVal = this.errorState;
        var newVal = !!(this.ngControl && this.ngControl.invalid && (this.ngControl.touched || (this._form && this._form.submitted)));
        if (newVal !== oldVal) {
            this.errorState = newVal;
            if (this._field) {
                var errorClass = this._field.classes.errorState;
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
    };
    LyNativeControl.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
    };
    /** @docs-private */
    LyNativeControl.prototype.onContainerClick = function (_e) {
        this._getHostElement().focus();
    };
    /** Focuses the input. */
    LyNativeControl.prototype.focus = function () { this._getHostElement().focus(); };
    LyNativeControl.prototype._getHostElement = function () {
        return this._el.nativeElement;
    };
    LyNativeControl.prototype._hasLabelSelectionOption = function () {
        var el = this._getHostElement();
        var option = el.selectedOptions ? el.selectedOptions.item(0) : null;
        return option ? !!option.label : false;
    };
    var LyNativeControl_1;
    tslib_1.__decorate([
        HostListener('input'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LyNativeControl.prototype, "_onInput", null);
    tslib_1.__decorate([
        HostListener('blur'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LyNativeControl.prototype, "_onBlur", null);
    tslib_1.__decorate([
        HostListener('focus'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LyNativeControl.prototype, "_onFocus", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], LyNativeControl.prototype, "value", null);
    tslib_1.__decorate([
        HostBinding(),
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LyNativeControl.prototype, "disabled", null);
    tslib_1.__decorate([
        HostBinding(),
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LyNativeControl.prototype, "required", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
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
        tslib_1.__param(6, Optional()),
        tslib_1.__metadata("design:paramtypes", [LyTheme2,
            ElementRef,
            Renderer2,
            LyField,
            NgControl,
            NgForm,
            FormGroupDirective])
    ], LyNativeControl);
    return LyNativeControl;
}());
export { LyNativeControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFFVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFFBQVEsRUFDUixJQUFJLEVBQ0osVUFBVSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxRQUFRLEVBQWtCLGVBQWUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2SSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRCxjQUFjO0FBQ2QsSUFBTSxjQUFjLEdBQUcsQ0FB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QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RFLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pDLENBQUM7O0lBdkxzQjtRQUF0QixZQUFZLENBQUMsT0FBTyxDQUFDOzs7O21EQUVyQjtJQUVxQjtRQUFyQixZQUFZLENBQUMsTUFBTSxDQUFDOzs7O2tEQUtwQjtJQUNzQjtRQUF0QixZQUFZLENBQUMsT0FBTyxDQUFDOzs7O21EQUtyQjtJQUlEO1FBREMsS0FBSyxFQUFFOzs7Z0RBTVA7SUFRRDtRQUZDLFdBQVcsRUFBRTtRQUNiLEtBQUssRUFBRTs7O21EQW9CUDtJQVVEO1FBRkMsV0FBVyxFQUFFO1FBQ2IsS0FBSyxFQUFFOzs7bURBR1A7SUFJRDtRQURDLEtBQUssRUFBRTs7O3NEQUdQO0lBbEZVLGVBQWU7UUFSM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUNKLCtHQUErRztZQUNuSCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsaUJBQWUsRUFBRTthQUM5RDtTQUNGLENBQUM7UUF1R0csbUJBQUEsUUFBUSxFQUFFLENBQUE7UUFFVixtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLElBQUksRUFBRSxDQUFBO1FBQ2xCLG1CQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBUEssUUFBUTtZQUNYLFVBQVU7WUFDSixTQUFTO1lBQ0EsT0FBTztZQUVHLFNBQVM7WUFDZCxNQUFNO1lBQ0Qsa0JBQWtCO09BMUcvQyxlQUFlLENBc00zQjtJQUFELHNCQUFDO0NBQUEsQUF0TUQsSUFzTUM7U0F0TVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE5nWm9uZSxcbiAgRGlyZWN0aXZlLFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBmb3J3YXJkUmVmLFxuICBEb0NoZWNrXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMsIEVsZW1lbnRPYnNlcnZlciwgUGxhdGZvcm0sIHRvQm9vbGVhbiwgRGlyQWxpYXMsIGdldEx5VGhlbWVWYXJpYWJsZVVuZGVmaW5lZEVycm9yIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5TGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IEx5UGxhY2Vob2xkZXIgfSBmcm9tICcuL3BsYWNlaG9sZGVyJztcbmltcG9ydCB7IEx5SGludCB9IGZyb20gJy4vaGludCc7XG5pbXBvcnQgeyBMeVByZWZpeCB9IGZyb20gJy4vcHJlZml4JztcbmltcG9ydCB7IEx5U3VmZml4IH0gZnJvbSAnLi9zdWZmaXgnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmdDb250cm9sLCBOZ0Zvcm0sIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEx5RXJyb3IgfSBmcm9tICcuL2Vycm9yJztcbmltcG9ydCB7IFNUWUxFUyB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IEx5RmllbGRDb250cm9sQmFzZSB9IGZyb20gJy4vZmllbGQtY29udHJvbC1iYXNlJztcblxuLyoqIEx5RmllbGQgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0UgPSAnc3RhbmRhcmQnO1xuY29uc3QgREVGQVVMVF9BUFBFQVJBTkNFX1RIRU1FID0ge1xuICBzdGFuZGFyZDoge1xuICAgICcmOm5vdCh7ZGlzYWJsZWR9KSB7Y29udGFpbmVyfTpob3ZlcjphZnRlcic6IHtcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgIH0sXG4gICAgJyZ7ZGlzYWJsZWR9IHtjb250YWluZXJ9OmFmdGVyJzoge1xuICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdkb3R0ZWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdpbmhlcml0J1xuICAgIH0sXG4gICAgJ3RleHRhcmVhe2lucHV0TmF0aXZlfSc6IHtcbiAgICAgIG1hcmdpbjogJzAuMjVlbSAwJ1xuICAgIH0sXG4gICAgJ3tpbnB1dE5hdGl2ZX06bm90KHRleHRhcmVhKSc6IHtcbiAgICAgIHBhZGRpbmc6ICcwLjI1ZW0gMCdcbiAgICB9LFxuICAgICcmIHtjb250YWluZXJ9Jzoge1xuICAgICAgcGFkZGluZzogJzFlbSAwIDAnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICAgIH1cbiAgICB9LFxuICAgICcme2ZvY3VzZWR9IHtjb250YWluZXJ9Jzoge1xuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMnB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9XG4gICAgfSxcbiAgICAnJiB7bGFiZWx9Jzoge1xuICAgICAgbWFyZ2luOiAnMC4yNWVtIDAnXG4gICAgfSxcbiAgICAnJiB7cGxhY2Vob2xkZXJ9Jzoge1xuICAgICAgbWFyZ2luOiAnMC4yNWVtIDAnXG4gICAgfSxcbiAgICAnJiB7ZmxvYXRpbmdMYWJlbH0nOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xLjI1ZW0pJ1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdwcmltYXJ5JztcblxuY29uc3QgaW5wdXRUZXh0ID0gW1xuICAndGV4dCcsXG4gICdudW1iZXInLFxuICAncGFzc3dvcmQnLFxuICAnc2VhcmNoJyxcbiAgJ3RlbCcsXG4gICd1cmwnXG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCcsXG4gIGV4cG9ydEFzOiAnbHlGb3JtRmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJ2ZpZWxkLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUZpZWxkIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcm90ZWN0ZWQgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9jb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9pc0Zsb2F0aW5nOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Zsb2F0aW5nTGFiZWw6IGJvb2xlYW47XG4gIHByaXZhdGUgX2ZpZWxzZXRTcGFuQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfbWFyZ2luU3RhcnRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9tYXJnaW5FbmRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9mdWxsV2lkdGg6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Z1bGxXaWR0aENsYXNzPzogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXInKSBfbGFiZWxDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXIyJykgX2xhYmVsQ29udGFpbmVyMjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbFNwYW4nKSBfbGFiZWxTcGFuOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX3ByZWZpeENvbnRhaW5lcicpIF9wcmVmaXhDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfc3VmZml4Q29udGFpbmVyJykgX3N1ZmZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19maWVsZHNldExlZ2VuZCcpIF9maWVsZHNldExlZ2VuZDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeUZpZWxkQ29udHJvbEJhc2UpKSBfY29udHJvbDogTHlGaWVsZENvbnRyb2xCYXNlO1xuICBAQ29udGVudENoaWxkKEx5UGxhY2Vob2xkZXIpIF9wbGFjZWhvbGRlckNoaWxkOiBMeVBsYWNlaG9sZGVyO1xuICBAQ29udGVudENoaWxkKEx5TGFiZWwpIF9sYWJlbENoaWxkOiBMeUxhYmVsO1xuICBAQ29udGVudENoaWxkcmVuKEx5SGludCkgX2hpbnRDaGlsZHJlbjogUXVlcnlMaXN0PEx5SGludD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlQcmVmaXgpIF9wcmVmaXhDaGlsZHJlbjogUXVlcnlMaXN0PEx5UHJlZml4PjtcbiAgQENvbnRlbnRDaGlsZHJlbihMeVN1ZmZpeCkgX3N1ZmZpeENoaWxkcmVuOiBRdWVyeUxpc3Q8THlTdWZmaXg+O1xuICBAQ29udGVudENoaWxkcmVuKEx5RXJyb3IpIF9lcnJvckNoaWxkcmVuOiBRdWVyeUxpc3Q8THlFcnJvcj47XG5cbiAgZ2V0IGVycm9yU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2wuZXJyb3JTdGF0ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHBlcnNpc3RlbnRIaW50OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmdWxsV2lkdGgodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5fZnVsbFdpZHRoQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGZ1bGxXaWR0aGAsXG4gICAgICAgIHsgd2lkdGg6ICcxMDAlJyB9LFxuICAgICAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9mdWxsV2lkdGhDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9mdWxsV2lkdGhDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZnVsbFdpZHRoQ2xhc3MpO1xuICAgICAgdGhpcy5fZnVsbFdpZHRoQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuX2Z1bGxXaWR0aCA9IG5ld1ZhbDtcbiAgfVxuICBnZXQgZnVsbFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl9mdWxsV2lkdGg7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbGFiZWwgaXMgZmxvYXRpbmcuICovXG4gIEBJbnB1dCgpXG4gIHNldCBmbG9hdGluZ0xhYmVsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Zsb2F0aW5nTGFiZWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gIH1cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nTGFiZWw7XG4gIH1cblxuICAvKiogVGhlbWUgY29sb3IgZm9yIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX2NvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQuY29sb3I6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgICAgY29uc3QgY29udHJhc3QgPSB0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn06YWZ0ZXIsICZ7Zm9jdXNlZH17c2VsZWN0QXJyb3d9IHtpbmZpeH06YWZ0ZXJgXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmV9YF06IHtcbiAgICAgICAgICAgIGNhcmV0Q29sb3I6IGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJiB7aW5wdXROYXRpdmV9OjpzZWxlY3Rpb24nOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgY29sb3I6IGNvbnRyYXN0XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJiB7aW5wdXROYXRpdmV9OjotbW96LXNlbGVjdGlvbic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBjb2xvcjogY29udHJhc3RcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xvckNsYXNzLCBTVFlMRV9QUklPUklUWSArIDEsIFNUWUxFUyk7XG4gICAgfVxuICB9XG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKiogVGhlIGZpZWxkIGFwcGVhcmFuY2Ugc3R5bGUuICovXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgaWYgKCEodGhpcy5fdGhlbWUudmFyaWFibGVzLmZpZWxkIS5hcHBlYXJhbmNlW3ZhbF0gfHwgREVGQVVMVF9BUFBFQVJBTkNFX1RIRU1FW3ZhbF0pKSAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuZmllbGQuYXBwZWFyYW5jZWApO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWZpZWxkLmFwcGVhcmFuY2U6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBhcHBlYXJhbmNlID0gdGhlbWUuZmllbGQhLmFwcGVhcmFuY2VbdmFsXSB8fCBERUZBVUxUX0FQUEVBUkFOQ0VfVEhFTUVbdmFsXTtcbiAgICAgICAgcmV0dXJuIGFwcGVhcmFuY2U7XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MsIFNUWUxFX1BSSU9SSVRZLCBTVFlMRVMpO1xuICAgIH1cbiAgfVxuICBnZXQgYXBwZWFyYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgb25Gb2N1cygpIHtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRPYnNlcnZlcjogRWxlbWVudE9ic2VydmVyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKCFfdGhlbWUudmFyaWFibGVzLmZpZWxkKSB7XG4gICAgICB0aHJvdyBnZXRMeVRoZW1lVmFyaWFibGVVbmRlZmluZWRFcnJvcignZmllbGQnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuY29sb3IgPSBERUZBVUxUX1dJVEhfQ09MT1I7XG4gICAgfVxuICAgIGlmICghdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSBERUZBVUxUX0FQUEVBUkFOQ0U7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2NvbnRyb2wuc3RhdGVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5nQ29udHJvbCA9IHRoaXMuX2NvbnRyb2wubmdDb250cm9sO1xuXG4gICAgLy8gUnVuIGNoYW5nZSBkZXRlY3Rpb24gaWYgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgaWYgKG5nQ29udHJvbCAmJiBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3ByZWZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmJlZm9yZSk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmJlZm9yZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3N1ZmZpeENvbnRhaW5lcikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fc3VmZml4Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuYWZ0ZXIpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5hZnRlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2xhYmVsU3Bhbikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fbGFiZWxTcGFuLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHRoaXMgZml4IHdpdGggb2YgbGFiZWxcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fcHJlZml4Q29udGFpbmVyKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX3ByZWZpeENvbnRhaW5lcjtcbiAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5kZXN0cm95KGVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3N1ZmZpeENvbnRhaW5lcikge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9zdWZmaXhDb250YWluZXI7XG4gICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIuZGVzdHJveShlbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9sYWJlbFNwYW4pIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fbGFiZWxTcGFuO1xuICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLmRlc3Ryb3koZWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZpZWxzZXQoZWw6IEVsZW1lbnQsIGRpcjogRGlyQWxpYXMpIHtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBmaWVsZExlZ2VuZHN0eWxlLm1hcmdpbiR7ZGlyfToke3dpZHRofWAsICgpID0+ICh7XG4gICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0U3Bhbn1gXToge1xuICAgICAgICBbYG1hcmdpbi0ke2Rpcn1gXTogYCR7d2lkdGh9cHhgXG4gICAgICB9XG4gICAgfSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgaWYgKGRpciA9PT0gRGlyQWxpYXMuYmVmb3JlKSB7XG4gICAgICB0aGlzLl9tYXJnaW5TdGFydENsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9tYXJnaW5TdGFydENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWFyZ2luRW5kQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX21hcmdpbkVuZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGaWVsc2V0U3BhbigpIHtcbiAgICBsZXQgeyB3aWR0aCB9ID0gdGhpcy5fbGFiZWxTcGFuLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCF0aGlzLl9pc0Zsb2F0aW5nKSB7XG4gICAgICB3aWR0aCAtPSB3aWR0aCAvIDEwMCAqIDI1O1xuICAgIH1cbiAgICAvKiogQWRkIDZweCBvZiBzcGFjaW5nICovXG4gICAgd2lkdGggKz0gNjtcbiAgICB0aGlzLl9maWVsc2V0U3BhbkNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYHN0eWxlLmZpZWxkc2V0U3BhbkZvY3VzZWQ6JHt3aWR0aH1gLCB7XG4gICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXRTcGFufWBdOiB7d2lkdGg6IGAke3dpZHRofXB4YH1cbiAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9maWVsc2V0U3BhbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wucGxhY2Vob2xkZXIgJiYgIXRoaXMuX2xhYmVsQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbGFiZWxDaGlsZCB8fCB0aGlzLl9wbGFjZWhvbGRlckNoaWxkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzUGxhY2Vob2xkZXIoKSB7XG4gICAgaWYgKCh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX2NvbnRyb2wucGxhY2Vob2xkZXIpIHx8ICh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzRW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5fY29udHJvbC52YWx1ZTtcbiAgICByZXR1cm4gdmFsID09PSAnJyB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGbG9hdGluZ0xhYmVsKCkge1xuICAgIGlmICh0aGlzLl9sYWJlbENvbnRhaW5lcjIpIHtcbiAgICAgIGNvbnN0IGlzRmxvYXRpbmcgPSB0aGlzLl9jb250cm9sLmZsb2F0aW5nTGFiZWwgfHwgdGhpcy5mbG9hdGluZ0xhYmVsO1xuICAgICAgaWYgKHRoaXMuX2lzRmxvYXRpbmcgIT09IGlzRmxvYXRpbmcpIHtcbiAgICAgICAgdGhpcy5faXNGbG9hdGluZyA9IGlzRmxvYXRpbmc7XG4gICAgICAgIGlmIChpc0Zsb2F0aW5nKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fbGFiZWxDb250YWluZXIyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9sYWJlbENvbnRhaW5lcjIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWwpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250cm9sLmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjpcbiAgICAgICdpbnB1dFtseUlucHV0XSwgdGV4dGFyZWFbbHlJbnB1dF0sIGlucHV0W2x5TmF0aXZlQ29udHJvbF0sIHRleHRhcmVhW2x5TmF0aXZlQ29udHJvbF0sIHNlbGVjdFtseU5hdGl2ZUNvbnRyb2xdJyxcbiAgZXhwb3J0QXM6ICdMeU5hdGl2ZUNvbnRyb2wnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEx5RmllbGRDb250cm9sQmFzZSwgdXNlRXhpc3Rpbmc6IEx5TmF0aXZlQ29udHJvbCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlOYXRpdmVDb250cm9sIGltcGxlbWVudHMgTHlGaWVsZENvbnRyb2xCYXNlLCBPbkluaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHN0YXRlQ2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2hhc0Rpc2FibGVkQ2xhc3M/OiBib29sZWFuO1xuICBwcml2YXRlIF9lcnJvckNsYXNzPzogc3RyaW5nO1xuICBwcml2YXRlIF9jdXJzb3JDbGFzczogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBfaXNTZWxlY3RJbnB1dDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZm9ybTogTmdGb3JtIHwgRm9ybUdyb3VwRGlyZWN0aXZlIHwgbnVsbCA9IHRoaXMuX3BhcmVudEZvcm0gfHwgdGhpcy5fcGFyZW50Rm9ybUdyb3VwO1xuICBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBlcnJvclN0YXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBfb25JbnB1dCgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgX29uQmx1cigpIHtcbiAgICBpZiAodGhpcy5fZm9jdXNlZCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBfb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5fZm9jdXNlZCAhPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh2YWwgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuX2dldEhvc3RFbGVtZW50KCkudmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS52YWx1ZTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC4gKi9cbiAgQEhvc3RCaW5kaW5nKClcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWwpO1xuICAgICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICAgIGlmICghdmFsICYmIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnNvckNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY3Vyc29yQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9oYXNEaXNhYmxlZENsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICBpZiAodGhpcy5fY3Vyc29yQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jdXJzb3JDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKClcbiAgQElucHV0KClcbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IHBsYWNlaG9sZGVyKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWw7XG4gIH1cbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjsgfVxuXG4gIGdldCBmb2N1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkO1xuICB9XG5cbiAgZ2V0IGVtcHR5KCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMudmFsdWU7XG4gICAgcmV0dXJuIHZhbCA9PT0gJycgfHwgdmFsID09IG51bGw7XG4gIH1cblxuICBnZXQgZmxvYXRpbmdMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5IHx8ICh0aGlzLl9pc1NlbGVjdElucHV0ID8gdGhpcy5faGFzTGFiZWxTZWxlY3Rpb25PcHRpb24oKSA6IGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50PixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2ZpZWxkOiBMeUZpZWxkLFxuICAgIC8qKiBAZG9jcy1wcml2YXRlICovXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2dldEhvc3RFbGVtZW50KCksICdwbGFjZWhvbGRlcicsICfCrScpO1xuXG4gICAgY29uc3QgeyBuYXRpdmVFbGVtZW50IH0gPSB0aGlzLl9lbDtcblxuICAgIGlmIChuYXRpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnKSB7XG4gICAgICB0aGlzLl9pc1NlbGVjdElucHV0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBjbGFzcyB7c2VsZWN0QXJyb3d9IHRvIGA8c2VsZWN0PiBub3QgbXVsdGlwbGVgXG4gICAgaWYgKHRoaXMuX2ZpZWxkICYmIG5hdGl2ZUVsZW1lbnQudHlwZSA9PT0gJ3NlbGVjdC1vbmUnKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5zZWxlY3RBcnJvdyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgc3R5bGUgY3Vyc29yIG9ubHkgZm9yIGlucHV0IG9mIHR5cGUgdGV4dFxuICAgIGlmIChuYXRpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCB8fFxuICAgICAgICBpbnB1dFRleHQuc29tZSh0eXBlID0+IHR5cGUgPT09IG5hdGl2ZUVsZW1lbnQudHlwZSkpIHtcbiAgICAgIHRoaXMuX2N1cnNvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoJ2x5RmllbGQudGV4dCcsIHtcbiAgICAgICAgJyYge2luZml4fSc6IHtcbiAgICAgICAgICBjdXJzb3I6ICd0ZXh0J1xuICAgICAgICB9XG4gICAgICB9LCBTVFlMRV9QUklPUklUWSwgU1RZTEVTKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTZWxlY3RJbnB1dCkge1xuICAgICAgdGhpcy5fY3Vyc29yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZSgnbHlGaWVsZC5zZWxlY3QnLCB7XG4gICAgICAgICcmIHtpbmZpeH0nOiB7XG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgfVxuICAgICAgfSwgU1RZTEVfUFJJT1JJVFksIFNUWUxFUyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2N1cnNvckNsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY3Vyc29yQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGRlZmF1bHQgc3R5bGVzXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MobmF0aXZlRWxlbWVudCwgdGhpcy5fZmllbGQuY2xhc3Nlcy5pbnB1dE5hdGl2ZSk7XG5cbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLm5nQ29udHJvbDtcbiAgICAvLyB1cGRhdGUgc3R5bGVzIG9uIGRpc2FibGVkXG4gICAgaWYgKG5nQ29udHJvbCAmJiBuZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcykge1xuICAgICAgbmdDb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9ICEhbmdDb250cm9sLmRpc2FibGVkO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGNvbnN0IG9sZFZhbCA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICBjb25zdCBuZXdWYWwgPSAhISh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5pbnZhbGlkICYmICh0aGlzLm5nQ29udHJvbC50b3VjaGVkIHx8ICh0aGlzLl9mb3JtICYmIHRoaXMuX2Zvcm0uc3VibWl0dGVkKSkpO1xuICAgIGlmIChuZXdWYWwgIT09IG9sZFZhbCkge1xuICAgICAgdGhpcy5lcnJvclN0YXRlID0gbmV3VmFsO1xuICAgICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLl9maWVsZC5jbGFzc2VzLmVycm9yU3RhdGU7XG4gICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgZXJyb3JDbGFzcyk7XG4gICAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IGVycm9yQ2xhc3M7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZXJyb3JDbGFzcykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBlcnJvckNsYXNzKTtcbiAgICAgICAgICB0aGlzLl9lcnJvckNsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgb25Db250YWluZXJDbGljayhfZTogTW91c2VFdmVudCkge1xuICAgIHRoaXMuX2dldEhvc3RFbGVtZW50KCkuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBpbnB1dC4gKi9cbiAgZm9jdXMoKTogdm9pZCB7IHRoaXMuX2dldEhvc3RFbGVtZW50KCkuZm9jdXMoKTsgfVxuXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhc0xhYmVsU2VsZWN0aW9uT3B0aW9uKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBjb25zdCBvcHRpb24gPSBlbC5zZWxlY3RlZE9wdGlvbnMgPyBlbC5zZWxlY3RlZE9wdGlvbnMuaXRlbSgwKSA6IG51bGw7XG4gICAgcmV0dXJuIG9wdGlvbiA/ICEhb3B0aW9uLmxhYmVsIDogZmFsc2U7XG4gIH1cblxufVxuIl19