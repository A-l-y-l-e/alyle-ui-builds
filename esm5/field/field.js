/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation, ContentChildren, QueryList, NgZone, Directive, HostListener, HostBinding, Optional, Self, forwardRef } from '@angular/core';
import { LyTheme2, ElementObserver, Platform, toBoolean, DirAlias } from '@alyle/ui';
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
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_APPEARANCE = 'standard';
/** @type {?} */
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
/** @type {?} */
var DEFAULT_WITH_COLOR = 'primary';
/** @type {?} */
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
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyField.prototype, "errorState", {
        get: /**
         * @return {?}
         */
        function () {
            return this._control.errorState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyField.prototype, "fullWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fullWidth;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
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
        get: /**
         * @return {?}
         */
        function () {
            return this._floatingLabel;
        },
        /** Whether the label is floating. */
        set: /**
         * Whether the label is floating.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._floatingLabel = toBoolean(val);
            this._updateFloatingLabel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyField.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        /** Theme color for the component. */
        set: /**
         * Theme color for the component.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            if (val !== this._color) {
                this._color = val;
                this._colorClass = this._theme.addStyle("ly-field.color:" + val, function (theme) {
                    var _a;
                    /** @type {?} */
                    var color = theme.colorOf(val);
                    /** @type {?} */
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
        get: /**
         * @return {?}
         */
        function () {
            return this._appearance;
        },
        /** The field appearance style. */
        set: /**
         * The field appearance style.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.appearance) {
                this._appearance = val;
                if (!(this._theme.variables.field.appearance[val] || DEFAULT_APPEARANCE_THEME[val])) {
                    throw new Error(val + " not found in theme.field.appearance");
                }
                this._appearanceClass = this._theme.addStyle("ly-field.appearance:" + val, function (theme) {
                    /** @type {?} */
                    var appearance = theme.field.appearance[val] || DEFAULT_APPEARANCE_THEME[val];
                    return appearance;
                }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY, STYLES);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyField.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this._el.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    LyField.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.color) {
            this.color = DEFAULT_WITH_COLOR;
        }
        if (!this.appearance) {
            this.appearance = DEFAULT_APPEARANCE;
        }
    };
    /**
     * @return {?}
     */
    LyField.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._control.stateChanges.subscribe(function () {
            _this._updateFloatingLabel();
            _this._markForCheck();
        });
        /** @type {?} */
        var ngControl = this._control.ngControl;
        // Run change detection if the value changes.
        if (ngControl && ngControl.valueChanges) {
            ngControl.valueChanges.subscribe(function () {
                _this._updateFloatingLabel();
                _this._markForCheck();
            });
        }
    };
    /**
     * @return {?}
     */
    LyField.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._updateFloatingLabel();
        if (Platform.isBrowser) {
            this._ngZone.runOutsideAngular(function () {
                if (_this._prefixContainer) {
                    /** @type {?} */
                    var el_1 = _this._prefixContainer.nativeElement;
                    _this._updateFielset(el_1, DirAlias.before);
                    _this._elementObserver.observe(el_1, function () {
                        _this._updateFielset(el_1, DirAlias.before);
                    });
                }
                if (_this._suffixContainer) {
                    /** @type {?} */
                    var el_2 = _this._suffixContainer.nativeElement;
                    _this._updateFielset(el_2, DirAlias.after);
                    _this._elementObserver.observe(el_2, function () {
                        _this._updateFielset(el_2, DirAlias.after);
                    });
                }
                if (_this._labelSpan) {
                    /** @type {?} */
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
    /**
     * @return {?}
     */
    LyField.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._prefixContainer) {
            /** @type {?} */
            var el = this._prefixContainer;
            this._elementObserver.destroy(el);
        }
        if (this._suffixContainer) {
            /** @type {?} */
            var el = this._suffixContainer;
            this._elementObserver.destroy(el);
        }
        if (this._labelSpan) {
            /** @type {?} */
            var el = this._labelSpan;
            this._elementObserver.destroy(el);
        }
    };
    /**
     * @private
     * @param {?} el
     * @param {?} dir
     * @return {?}
     */
    LyField.prototype._updateFielset = /**
     * @private
     * @param {?} el
     * @param {?} dir
     * @return {?}
     */
    function (el, dir) {
        var _this = this;
        var width = el.getBoundingClientRect().width;
        /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    LyField.prototype._updateFielsetSpan = /**
     * @private
     * @return {?}
     */
    function () {
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
    /**
     * @ignore
     * @return {?}
     */
    LyField.prototype._isLabel = /**
     * @ignore
     * @return {?}
     */
    function () {
        if (this._control.placeholder && !this._labelChild) {
            return true;
        }
        else if (this._labelChild || this._placeholderChild) {
            return true;
        }
        return false;
    };
    /** @ignore */
    /**
     * @ignore
     * @return {?}
     */
    LyField.prototype._isPlaceholder = /**
     * @ignore
     * @return {?}
     */
    function () {
        if ((this._labelChild && this._control.placeholder) || (this._labelChild && this._placeholderChild)) {
            return true;
        }
        return false;
    };
    /** @ignore */
    /**
     * @ignore
     * @return {?}
     */
    LyField.prototype._isEmpty = /**
     * @ignore
     * @return {?}
     */
    function () {
        /** @type {?} */
        var val = this._control.value;
        return val === '' || val === null || val === undefined;
    };
    /**
     * @private
     * @return {?}
     */
    LyField.prototype._updateFloatingLabel = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._labelContainer2) {
            /** @type {?} */
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
    /**
     * @private
     * @return {?}
     */
    LyField.prototype._markForCheck = /**
     * @private
     * @return {?}
     */
    function () {
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    LyField.prototype._getHostElement = /**
     * @return {?}
     */
    function () {
        return this._el.nativeElement;
    };
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
    LyField.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ElementObserver },
        { type: LyTheme2 },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    LyField.propDecorators = {
        _labelContainer: [{ type: ViewChild, args: ['_labelContainer',] }],
        _labelContainer2: [{ type: ViewChild, args: ['_labelContainer2',] }],
        _labelSpan: [{ type: ViewChild, args: ['_labelSpan',] }],
        _prefixContainer: [{ type: ViewChild, args: ['_prefixContainer',] }],
        _suffixContainer: [{ type: ViewChild, args: ['_suffixContainer',] }],
        _fieldsetLegend: [{ type: ViewChild, args: ['_fieldsetLegend',] }],
        _control: [{ type: ContentChild, args: [forwardRef(function () { return LyFieldControlBase; }),] }],
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
    return LyField;
}());
export { LyField };
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
var LyNativeControl = /** @class */ (function () {
    function LyNativeControl(_theme, _el, _renderer, _field, ngControl, _parentForm, _parentFormGroup) {
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
    LyNativeControl.prototype._onInput = /**
     * @return {?}
     */
    function () {
        this.stateChanges.next();
    };
    /**
     * @return {?}
     */
    LyNativeControl.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        if (this._focused !== false) {
            this._focused = false;
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    LyNativeControl.prototype._onFocus = /**
     * @return {?}
     */
    function () {
        if (this._focused !== true) {
            this._focused = true;
            this.stateChanges.next();
        }
    };
    Object.defineProperty(LyNativeControl.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._getHostElement().value;
        },
        /** @ignore */
        set: /**
         * @ignore
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.value) {
                this._getHostElement().value = val;
                this.stateChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyNativeControl.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        /** Whether the input is disabled. */
        set: /**
         * Whether the input is disabled.
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        get: /**
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyNativeControl.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () { return this._placeholder; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._placeholder = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyNativeControl.prototype, "focused", {
        get: /**
         * @return {?}
         */
        function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyNativeControl.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var val = this.value;
            return val === '' || val == null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyNativeControl.prototype, "floatingLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.focused || !this.empty || (this._isSelectInput ? this._hasLabelSelectionOption() : false);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyNativeControl.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        /** @type {?} */
        var ngControl = this.ngControl;
        // update styles on disabled
        if (ngControl && ngControl.statusChanges) {
            ngControl.statusChanges.subscribe(function () {
                _this.disabled = !!ngControl.disabled;
            });
        }
    };
    /**
     * @return {?}
     */
    LyNativeControl.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var oldVal = this.errorState;
        /** @type {?} */
        var newVal = !!(this.ngControl && this.ngControl.invalid && (this.ngControl.touched || (this._form && this._form.submitted)));
        if (newVal !== oldVal) {
            this.errorState = newVal;
            if (this._field) {
                /** @type {?} */
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
    /**
     * @return {?}
     */
    LyNativeControl.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} _e
     * @return {?}
     */
    LyNativeControl.prototype.onContainerClick = /**
     * \@docs-private
     * @param {?} _e
     * @return {?}
     */
    function (_e) {
        this._getHostElement().focus();
    };
    /** Focuses the input. */
    /**
     * Focuses the input.
     * @return {?}
     */
    LyNativeControl.prototype.focus = /**
     * Focuses the input.
     * @return {?}
     */
    function () { this._getHostElement().focus(); };
    /**
     * @return {?}
     */
    LyNativeControl.prototype._getHostElement = /**
     * @return {?}
     */
    function () {
        return this._el.nativeElement;
    };
    /**
     * @private
     * @return {?}
     */
    LyNativeControl.prototype._hasLabelSelectionOption = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = (/** @type {?} */ (this._getHostElement()));
        /** @type {?} */
        var option = el.selectedOptions ? el.selectedOptions.item(0) : null;
        return option ? !!option.label : false;
    };
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
    LyNativeControl.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyField, decorators: [{ type: Optional }] },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] }
    ]; };
    LyNativeControl.propDecorators = {
        _onInput: [{ type: HostListener, args: ['input',] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }],
        _onFocus: [{ type: HostListener, args: ['focus',] }],
        value: [{ type: Input }],
        disabled: [{ type: HostBinding }, { type: Input }],
        required: [{ type: HostBinding }, { type: Input }],
        placeholder: [{ type: Input }]
    };
    return LyNativeControl;
}());
export { LyNativeControl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFFVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFFBQVEsRUFDUixJQUFJLEVBQ0osVUFBVSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxRQUFRLEVBQWtCLGVBQWUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7SUFHcEQsY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFDbkIsa0JBQWtC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LFNBQUM7b0JBQ1QsUUFBUSxFQUNKLCtHQUErRztvQkFDbkgsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUU7cUJBQzlEO2lCQUNGOzs7O2dCQWpYUSxRQUFRO2dCQWxCZixVQUFVO2dCQUdWLFNBQVM7Z0JBdWVxQixPQUFPLHVCQUFsQyxRQUFRO2dCQWpkSixTQUFTLHVCQW1kYixRQUFRLFlBQUksSUFBSTtnQkFuZEQsTUFBTSx1QkFvZHJCLFFBQVE7Z0JBcGRlLGtCQUFrQix1QkFxZHpDLFFBQVE7OzsyQkE3RlYsWUFBWSxTQUFDLE9BQU87MEJBSXBCLFlBQVksU0FBQyxNQUFNOzJCQU1uQixZQUFZLFNBQUMsT0FBTzt3QkFRcEIsS0FBSzsyQkFZTCxXQUFXLFlBQ1gsS0FBSzsyQkE0QkwsV0FBVyxZQUNYLEtBQUs7OEJBTUwsS0FBSzs7SUF1SFIsc0JBQUM7Q0FBQSxBQTlNRCxJQThNQztTQXRNWSxlQUFlOzs7Ozs7SUFDMUIsb0NBQTRCOzs7OztJQUM1QixvQ0FBNEI7Ozs7O0lBQzVCLHVDQUErQjs7SUFDL0IsdUNBQTJEOzs7OztJQUMzRCw0Q0FBb0M7Ozs7O0lBQ3BDLHNDQUE2Qjs7Ozs7SUFDN0IsdUNBQW9DOzs7OztJQUNwQyx5Q0FBZ0M7Ozs7O0lBQ2hDLGdDQUE4Rjs7SUFDOUYsbUNBQTBCOztJQUMxQixxQ0FBNEI7Ozs7O0lBd0YxQixpQ0FBd0I7Ozs7O0lBQ3hCLDhCQUFtRjs7Ozs7SUFDbkYsb0NBQTRCOzs7OztJQUM1QixpQ0FBbUM7Ozs7O0lBRW5DLG9DQUErQzs7Ozs7SUFDL0Msc0NBQXVDOzs7OztJQUN2QywyQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBOZ1pvbmUsXG4gIERpcmVjdGl2ZSxcbiAgT25EZXN0cm95LFxuICBIb3N0TGlzdGVuZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgZm9yd2FyZFJlZixcbiAgRG9DaGVja1xuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzLCBFbGVtZW50T2JzZXJ2ZXIsIFBsYXRmb3JtLCB0b0Jvb2xlYW4sIERpckFsaWFzIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5TGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IEx5UGxhY2Vob2xkZXIgfSBmcm9tICcuL3BsYWNlaG9sZGVyJztcbmltcG9ydCB7IEx5SGludCB9IGZyb20gJy4vaGludCc7XG5pbXBvcnQgeyBMeVByZWZpeCB9IGZyb20gJy4vcHJlZml4JztcbmltcG9ydCB7IEx5U3VmZml4IH0gZnJvbSAnLi9zdWZmaXgnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTmdDb250cm9sLCBOZ0Zvcm0sIEZvcm1Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEx5RXJyb3IgfSBmcm9tICcuL2Vycm9yJztcbmltcG9ydCB7IFNUWUxFUyB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IEx5RmllbGRDb250cm9sQmFzZSB9IGZyb20gJy4vZmllbGQtY29udHJvbC1iYXNlJztcblxuLyoqIEx5RmllbGQgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0UgPSAnc3RhbmRhcmQnO1xuY29uc3QgREVGQVVMVF9BUFBFQVJBTkNFX1RIRU1FID0ge1xuICBzdGFuZGFyZDoge1xuICAgICcmOm5vdCh7ZGlzYWJsZWR9KSB7Y29udGFpbmVyfTpob3ZlcjphZnRlcic6IHtcbiAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgIH0sXG4gICAgJyZ7ZGlzYWJsZWR9IHtjb250YWluZXJ9OmFmdGVyJzoge1xuICAgICAgYm9yZGVyQm90dG9tU3R5bGU6ICdkb3R0ZWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdpbmhlcml0J1xuICAgIH0sXG4gICAgJ3RleHRhcmVhe2lucHV0TmF0aXZlfSc6IHtcbiAgICAgIG1hcmdpbjogJzAuMjVlbSAwJ1xuICAgIH0sXG4gICAgJ3tpbnB1dE5hdGl2ZX06bm90KHRleHRhcmVhKSc6IHtcbiAgICAgIHBhZGRpbmc6ICcwLjI1ZW0gMCdcbiAgICB9LFxuICAgICcmIHtjb250YWluZXJ9Jzoge1xuICAgICAgcGFkZGluZzogJzFlbSAwIDAnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICAgIH1cbiAgICB9LFxuICAgICcme2ZvY3VzZWR9IHtjb250YWluZXJ9Jzoge1xuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMnB4JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9XG4gICAgfSxcbiAgICAnJiB7bGFiZWx9Jzoge1xuICAgICAgbWFyZ2luOiAnMC4yNWVtIDAnXG4gICAgfSxcbiAgICAnJiB7cGxhY2Vob2xkZXJ9Jzoge1xuICAgICAgbWFyZ2luOiAnMC4yNWVtIDAnXG4gICAgfSxcbiAgICAnJiB7ZmxvYXRpbmdMYWJlbH0nOiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xLjI1ZW0pJ1xuICAgIH1cbiAgfVxufTtcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdwcmltYXJ5JztcblxuY29uc3QgaW5wdXRUZXh0ID0gW1xuICAndGV4dCcsXG4gICdudW1iZXInLFxuICAncGFzc3dvcmQnLFxuICAnc2VhcmNoJyxcbiAgJ3RlbCcsXG4gICd1cmwnXG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCcsXG4gIGV4cG9ydEFzOiAnbHlGb3JtRmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJ2ZpZWxkLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUZpZWxkIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcm90ZWN0ZWQgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9jb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9pc0Zsb2F0aW5nOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Zsb2F0aW5nTGFiZWw6IGJvb2xlYW47XG4gIHByaXZhdGUgX2ZpZWxzZXRTcGFuQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfbWFyZ2luU3RhcnRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9tYXJnaW5FbmRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9mdWxsV2lkdGg6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Z1bGxXaWR0aENsYXNzPzogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXInKSBfbGFiZWxDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXIyJykgX2xhYmVsQ29udGFpbmVyMjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbFNwYW4nKSBfbGFiZWxTcGFuOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX3ByZWZpeENvbnRhaW5lcicpIF9wcmVmaXhDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfc3VmZml4Q29udGFpbmVyJykgX3N1ZmZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19maWVsZHNldExlZ2VuZCcpIF9maWVsZHNldExlZ2VuZDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeUZpZWxkQ29udHJvbEJhc2UpKSBfY29udHJvbDogTHlGaWVsZENvbnRyb2xCYXNlO1xuICBAQ29udGVudENoaWxkKEx5UGxhY2Vob2xkZXIpIF9wbGFjZWhvbGRlckNoaWxkOiBMeVBsYWNlaG9sZGVyO1xuICBAQ29udGVudENoaWxkKEx5TGFiZWwpIF9sYWJlbENoaWxkOiBMeUxhYmVsO1xuICBAQ29udGVudENoaWxkcmVuKEx5SGludCkgX2hpbnRDaGlsZHJlbjogUXVlcnlMaXN0PEx5SGludD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlQcmVmaXgpIF9wcmVmaXhDaGlsZHJlbjogUXVlcnlMaXN0PEx5UHJlZml4PjtcbiAgQENvbnRlbnRDaGlsZHJlbihMeVN1ZmZpeCkgX3N1ZmZpeENoaWxkcmVuOiBRdWVyeUxpc3Q8THlTdWZmaXg+O1xuICBAQ29udGVudENoaWxkcmVuKEx5RXJyb3IpIF9lcnJvckNoaWxkcmVuOiBRdWVyeUxpc3Q8THlFcnJvcj47XG5cbiAgZ2V0IGVycm9yU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2wuZXJyb3JTdGF0ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHBlcnNpc3RlbnRIaW50OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmdWxsV2lkdGgodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5fZnVsbFdpZHRoQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGZ1bGxXaWR0aGAsXG4gICAgICAgIHsgd2lkdGg6ICcxMDAlJyB9LFxuICAgICAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9mdWxsV2lkdGhDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9mdWxsV2lkdGhDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZnVsbFdpZHRoQ2xhc3MpO1xuICAgICAgdGhpcy5fZnVsbFdpZHRoQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuX2Z1bGxXaWR0aCA9IG5ld1ZhbDtcbiAgfVxuICBnZXQgZnVsbFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl9mdWxsV2lkdGg7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbGFiZWwgaXMgZmxvYXRpbmcuICovXG4gIEBJbnB1dCgpXG4gIHNldCBmbG9hdGluZ0xhYmVsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Zsb2F0aW5nTGFiZWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gIH1cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nTGFiZWw7XG4gIH1cblxuICAvKiogVGhlbWUgY29sb3IgZm9yIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX2NvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQuY29sb3I6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgICAgY29uc3QgY29udHJhc3QgPSB0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn06YWZ0ZXIsICZ7Zm9jdXNlZH17c2VsZWN0QXJyb3d9IHtpbmZpeH06YWZ0ZXJgXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmV9YF06IHtcbiAgICAgICAgICAgIGNhcmV0Q29sb3I6IGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJiB7aW5wdXROYXRpdmV9OjpzZWxlY3Rpb24nOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgY29sb3I6IGNvbnRyYXN0XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJiB7aW5wdXROYXRpdmV9OjotbW96LXNlbGVjdGlvbic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBjb2xvcjogY29udHJhc3RcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xvckNsYXNzLCBTVFlMRV9QUklPUklUWSArIDEsIFNUWUxFUyk7XG4gICAgfVxuICB9XG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKiogVGhlIGZpZWxkIGFwcGVhcmFuY2Ugc3R5bGUuICovXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgaWYgKCEodGhpcy5fdGhlbWUudmFyaWFibGVzLmZpZWxkLmFwcGVhcmFuY2VbdmFsXSB8fCBERUZBVUxUX0FQUEVBUkFOQ0VfVEhFTUVbdmFsXSkpICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx9IG5vdCBmb3VuZCBpbiB0aGVtZS5maWVsZC5hcHBlYXJhbmNlYCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQuYXBwZWFyYW5jZToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwcGVhcmFuY2UgPSB0aGVtZS5maWVsZC5hcHBlYXJhbmNlW3ZhbF0gfHwgREVGQVVMVF9BUFBFQVJBTkNFX1RIRU1FW3ZhbF07XG4gICAgICAgIHJldHVybiBhcHBlYXJhbmNlO1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYXBwZWFyYW5jZUNsYXNzLCBTVFlMRV9QUklPUklUWSwgU1RZTEVTKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50T2JzZXJ2ZXI6IEVsZW1lbnRPYnNlcnZlcixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbG9yKSB7XG4gICAgICB0aGlzLmNvbG9yID0gREVGQVVMVF9XSVRIX0NPTE9SO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYXBwZWFyYW5jZSkge1xuICAgICAgdGhpcy5hcHBlYXJhbmNlID0gREVGQVVMVF9BUFBFQVJBTkNFO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9jb250cm9sLnN0YXRlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLl9jb250cm9sLm5nQ29udHJvbDtcblxuICAgIC8vIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uIGlmIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgIGlmIChuZ0NvbnRyb2wgJiYgbmdDb250cm9sLnZhbHVlQ2hhbmdlcykge1xuICAgICAgbmdDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcHJlZml4Q29udGFpbmVyKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9wcmVmaXhDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5iZWZvcmUpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5iZWZvcmUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zdWZmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3N1ZmZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmFmdGVyKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuYWZ0ZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9sYWJlbFNwYW4pIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX2xhYmVsU3Bhbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXRTcGFuKCk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXRTcGFuKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyB0aGlzIGZpeCB3aXRoIG9mIGxhYmVsXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX3ByZWZpeENvbnRhaW5lcikge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9wcmVmaXhDb250YWluZXI7XG4gICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIuZGVzdHJveShlbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWZmaXhDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fc3VmZml4Q29udGFpbmVyO1xuICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLmRlc3Ryb3koZWwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFiZWxTcGFuKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX2xhYmVsU3BhbjtcbiAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5kZXN0cm95KGVsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGaWVsc2V0KGVsOiBFbGVtZW50LCBkaXI6IERpckFsaWFzKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgZmllbGRMZWdlbmRzdHlsZS5tYXJnaW4ke2Rpcn06JHt3aWR0aH1gLCAoKSA9PiAoe1xuICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldFNwYW59YF06IHtcbiAgICAgICAgW2BtYXJnaW4tJHtkaXJ9YF06IGAke3dpZHRofXB4YFxuICAgICAgfVxuICAgIH0pLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgIGlmIChkaXIgPT09IERpckFsaWFzLmJlZm9yZSkge1xuICAgICAgdGhpcy5fbWFyZ2luU3RhcnRDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fbWFyZ2luU3RhcnRDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hcmdpbkVuZENsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9tYXJnaW5FbmRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldFNwYW4oKSB7XG4gICAgbGV0IHsgd2lkdGggfSA9IHRoaXMuX2xhYmVsU3Bhbi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghdGhpcy5faXNGbG9hdGluZykge1xuICAgICAgd2lkdGggLT0gd2lkdGggLyAxMDAgKiAyNTtcbiAgICB9XG4gICAgLyoqIEFkZCA2cHggb2Ygc3BhY2luZyAqL1xuICAgIHdpZHRoICs9IDY7XG4gICAgdGhpcy5fZmllbHNldFNwYW5DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBzdHlsZS5maWVsZHNldFNwYW5Gb2N1c2VkOiR7d2lkdGh9YCwge1xuICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0U3Bhbn1gXToge3dpZHRoOiBgJHt3aWR0aH1weGB9XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZmllbHNldFNwYW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIC8qKiBAaWdub3JlICovXG4gIF9pc0xhYmVsKCkge1xuICAgIGlmICh0aGlzLl9jb250cm9sLnBsYWNlaG9sZGVyICYmICF0aGlzLl9sYWJlbENoaWxkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xhYmVsQ2hpbGQgfHwgdGhpcy5fcGxhY2Vob2xkZXJDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIF9pc1BsYWNlaG9sZGVyKCkge1xuICAgIGlmICgodGhpcy5fbGFiZWxDaGlsZCAmJiB0aGlzLl9jb250cm9sLnBsYWNlaG9sZGVyKSB8fCAodGhpcy5fbGFiZWxDaGlsZCAmJiB0aGlzLl9wbGFjZWhvbGRlckNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIF9pc0VtcHR5KCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2NvbnRyb2wudmFsdWU7XG4gICAgcmV0dXJuIHZhbCA9PT0gJycgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmxvYXRpbmdMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5fbGFiZWxDb250YWluZXIyKSB7XG4gICAgICBjb25zdCBpc0Zsb2F0aW5nID0gdGhpcy5fY29udHJvbC5mbG9hdGluZ0xhYmVsIHx8IHRoaXMuZmxvYXRpbmdMYWJlbDtcbiAgICAgIGlmICh0aGlzLl9pc0Zsb2F0aW5nICE9PSBpc0Zsb2F0aW5nKSB7XG4gICAgICAgIHRoaXMuX2lzRmxvYXRpbmcgPSBpc0Zsb2F0aW5nO1xuICAgICAgICBpZiAoaXNGbG9hdGluZykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2xhYmVsQ29udGFpbmVyMi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fbGFiZWxDb250YWluZXIyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fY29udHJvbC5mb2N1c2VkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6XG4gICAgICAnaW5wdXRbbHlJbnB1dF0sIHRleHRhcmVhW2x5SW5wdXRdLCBpbnB1dFtseU5hdGl2ZUNvbnRyb2xdLCB0ZXh0YXJlYVtseU5hdGl2ZUNvbnRyb2xdLCBzZWxlY3RbbHlOYXRpdmVDb250cm9sXScsXG4gIGV4cG9ydEFzOiAnTHlOYXRpdmVDb250cm9sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBMeUZpZWxkQ29udHJvbEJhc2UsIHVzZUV4aXN0aW5nOiBMeU5hdGl2ZUNvbnRyb2wgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5TmF0aXZlQ29udHJvbCBpbXBsZW1lbnRzIEx5RmllbGRDb250cm9sQmFzZSwgT25Jbml0LCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICByZWFkb25seSBzdGF0ZUNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9oYXNEaXNhYmxlZENsYXNzPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZXJyb3JDbGFzcz86IHN0cmluZztcbiAgcHJpdmF0ZSBfY3Vyc29yQ2xhc3M6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2lzU2VsZWN0SW5wdXQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Zvcm06IE5nRm9ybSB8IEZvcm1Hcm91cERpcmVjdGl2ZSB8IG51bGwgPSB0aGlzLl9wYXJlbnRGb3JtIHx8IHRoaXMuX3BhcmVudEZvcm1Hcm91cDtcbiAgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyb3JTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JykgX29uSW5wdXQoKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIF9vbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgX29uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IHRydWUpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLnZhbHVlID0gdmFsO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEhvc3RFbGVtZW50KCkudmFsdWU7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuICovXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgICBpZiAoIXZhbCAmJiB0aGlzLl9oYXNEaXNhYmxlZENsYXNzKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnNvckNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY3Vyc29yQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9oYXNEaXNhYmxlZENsYXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIGdldCBlbXB0eSgpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlO1xuICAgIHJldHVybiB2YWwgPT09ICcnIHx8IHZhbCA9PSBudWxsO1xuICB9XG5cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eSB8fCAodGhpcy5faXNTZWxlY3RJbnB1dCA/IHRoaXMuX2hhc0xhYmVsU2VsZWN0aW9uT3B0aW9uKCkgOiBmYWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9maWVsZDogTHlGaWVsZCxcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCAncGxhY2Vob2xkZXInLCAnwq0nKTtcblxuICAgIGNvbnN0IHsgbmF0aXZlRWxlbWVudCB9ID0gdGhpcy5fZWw7XG5cbiAgICBpZiAobmF0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy5faXNTZWxlY3RJbnB1dCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgY2xhc3Mge3NlbGVjdEFycm93fSB0byBgPHNlbGVjdD4gbm90IG11bHRpcGxlYFxuICAgIGlmICh0aGlzLl9maWVsZCAmJiBuYXRpdmVFbGVtZW50LnR5cGUgPT09ICdzZWxlY3Qtb25lJykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuc2VsZWN0QXJyb3cpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHN0eWxlIGN1cnNvciBvbmx5IGZvciBpbnB1dCBvZiB0eXBlIHRleHRcbiAgICBpZiAobmF0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQgfHxcbiAgICAgICAgaW5wdXRUZXh0LnNvbWUodHlwZSA9PiB0eXBlID09PSBuYXRpdmVFbGVtZW50LnR5cGUpKSB7XG4gICAgICB0aGlzLl9jdXJzb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKCdseUZpZWxkLnRleHQnLCB7XG4gICAgICAgICcmIHtpbmZpeH0nOiB7XG4gICAgICAgICAgY3Vyc29yOiAndGV4dCdcbiAgICAgICAgfVxuICAgICAgfSwgU1RZTEVfUFJJT1JJVFksIFNUWUxFUyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0SW5wdXQpIHtcbiAgICAgIHRoaXMuX2N1cnNvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoJ2x5RmllbGQuc2VsZWN0Jywge1xuICAgICAgICAnJiB7aW5maXh9Jzoge1xuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgIH1cbiAgICAgIH0sIFNUWUxFX1BSSU9SSVRZLCBTVFlMRVMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBkZWZhdWx0IHN0eWxlc1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKG5hdGl2ZUVsZW1lbnQsIHRoaXMuX2ZpZWxkLmNsYXNzZXMuaW5wdXROYXRpdmUpO1xuXG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5uZ0NvbnRyb2w7XG4gICAgLy8gdXBkYXRlIHN0eWxlcyBvbiBkaXNhYmxlZFxuICAgIGlmIChuZ0NvbnRyb2wgJiYgbmdDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcbiAgICAgIG5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSAhIW5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBjb25zdCBvbGRWYWwgPSB0aGlzLmVycm9yU3RhdGU7XG4gICAgY29uc3QgbmV3VmFsID0gISEodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuaW52YWxpZCAmJiAodGhpcy5uZ0NvbnRyb2wudG91Y2hlZCB8fCAodGhpcy5fZm9ybSAmJiB0aGlzLl9mb3JtLnN1Ym1pdHRlZCkpKTtcbiAgICBpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcbiAgICAgIHRoaXMuZXJyb3JTdGF0ZSA9IG5ld1ZhbDtcbiAgICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgICBjb25zdCBlcnJvckNsYXNzID0gdGhpcy5fZmllbGQuY2xhc3Nlcy5lcnJvclN0YXRlO1xuICAgICAgICBpZiAobmV3VmFsKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIGVycm9yQ2xhc3MpO1xuICAgICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBlcnJvckNsYXNzO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2Vycm9yQ2xhc3MpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgZXJyb3JDbGFzcyk7XG4gICAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIG9uQ29udGFpbmVyQ2xpY2soX2U6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgaW5wdXQuICovXG4gIGZvY3VzKCk6IHZvaWQgeyB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7IH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9oYXNMYWJlbFNlbGVjdGlvbk9wdGlvbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2dldEhvc3RFbGVtZW50KCkgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgY29uc3Qgb3B0aW9uID0gZWwuc2VsZWN0ZWRPcHRpb25zID8gZWwuc2VsZWN0ZWRPcHRpb25zLml0ZW0oMCkgOiBudWxsO1xuICAgIHJldHVybiBvcHRpb24gPyAhIW9wdGlvbi5sYWJlbCA6IGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==