import { __decorate, __assign, __metadata, __param } from 'tslib';
import { Directive, Input, Renderer2, ElementRef, ViewChild, ContentChild, forwardRef, ContentChildren, QueryList, HostListener, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, NgZone, HostBinding, Optional, Self, NgModule } from '@angular/core';
import { LY_COMMON_STYLES, LyTheme2, toBoolean, Platform, DirAlias, ElementObserver, getLyThemeVariableUndefinedError, LyCommonModule } from '@alyle/ui';
import { Subject } from 'rxjs';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { CommonModule } from '@angular/common';

var LyLabel = /** @class */ (function () {
    function LyLabel() {
    }
    LyLabel = __decorate([
        Directive({
            selector: 'ly-field > ly-label'
        })
    ], LyLabel);
    return LyLabel;
}());

var LyPlaceholder = /** @class */ (function () {
    function LyPlaceholder() {
    }
    LyPlaceholder = __decorate([
        Directive({
            selector: 'ly-field > ly-placeholder'
        })
    ], LyPlaceholder);
    return LyPlaceholder;
}());

var STYLE_SELECT_ARROW = ({
    '&:after': {
        position: 'absolute',
        content: "''",
        width: 0,
        height: 0,
        borderLeft: '0.3125em solid transparent',
        borderRight: '0.3125em solid transparent',
        borderTop: '0.3125em solid',
        top: '50%',
        after: 0,
        marginTop: '-0.15625em',
        pointerEvents: 'none'
    }
});
var STYLES = function (theme) {
    var field = theme.field;
    var selectionStyle = {
        backgroundColor: theme.warn.default + " !important",
        color: theme.warn.contrast + " !important"
    };
    return {
        root: {
            display: 'inline-block',
            position: 'relative',
            marginTop: '1em',
            lineHeight: 1.5,
            '& {hint}, & {error}': {
                display: 'block',
                fontSize: '.75em',
                marginTop: '.25em'
            },
            '&': theme.field ? theme.field.root : null
        },
        animations: {
            '& {labelSpan}': {
                transition: "font-size " + theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s"
            },
            '& {label}': {
                transition: theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s"
            }
        },
        container: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            '-webkit-tap-highlight-color': 'transparent',
            '&:after': __assign({}, LY_COMMON_STYLES.fill, { content: "''", pointerEvents: 'none', borderColor: field.borderColor })
        },
        fieldset: __assign({}, LY_COMMON_STYLES.fill, { margin: 0, borderStyle: 'solid', borderColor: field.borderColor, borderWidth: 0 }),
        fieldsetSpan: {
            padding: 0,
            height: '2px'
        },
        labelSpan: {
            maxWidth: '100%',
            display: 'inline-block'
        },
        prefix: {
            maxHeight: '2em',
            display: 'flex',
            alignItems: 'center'
        },
        infix: {
            display: 'inline-flex',
            position: 'relative',
            alignItems: 'baseline',
            minWidth: 0,
            width: '180px',
            flex: '1 0'
        },
        suffix: {
            maxHeight: '2em',
            display: 'flex',
            alignItems: 'center'
        },
        labelContainer: __assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', display: 'flex', width: '100%', borderColor: field.borderColor }),
        labelSpacingStart: {},
        labelCenter: {
            display: 'flex',
            maxWidth: '100%'
        },
        labelSpacingEnd: {
            flex: 1
        },
        label: __assign({}, LY_COMMON_STYLES.fill, { margin: 0, border: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: field.labelColor, width: '100%' }),
        isFloatingLabel: {},
        floatingLabel: {
            '& {labelSpan}': {
                fontSize: '75%'
            }
        },
        placeholder: __assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', color: field.labelColor }),
        focused: {},
        inputNative: {
            resize: 'vertical',
            padding: 0,
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            color: 'inherit',
            font: 'inherit',
            width: '100%',
            'select&': {
                '-moz-appearance': 'none',
                '-webkit-appearance': 'none',
                position: 'relative',
                backgroundColor: 'transparent',
                display: 'inline-flex',
                boxSizing: 'border-box',
                paddingAfter: '1em',
                'option:not([disabled])': {
                    color: 'initial'
                },
                'optgroup:not([disabled])': {
                    color: 'initial'
                }
            },
            'select&::-ms-expand': {
                display: 'none'
            },
            'select&::-moz-focus-inner': {
                border: 0
            },
            'select&:not(:disabled)': {
                cursor: 'pointer'
            },
            'select&::-ms-value': {
                color: 'inherit',
                background: '0 0'
            }
        },
        hintContainer: {
            minHeight: '1.25em',
            lineHeight: '1.25',
            '>div': {
                display: 'flex',
                flex: '1 0 auto',
                maxWidth: '100%',
                overflow: 'hidden',
                justifyContent: 'space-between'
            }
        },
        disabled: {
            '&, & {label}, & {container}:after': {
                color: theme.disabled.contrast,
                cursor: 'default'
            }
        },
        hint: null,
        error: null,
        errorState: {
            '& {label}, & {hintContainer}, &{selectArrow} {infix}:after': {
                color: theme.warn.default + "!important"
            },
            '& {fieldset}, & {container}:after': {
                borderColor: theme.warn.default + "!important"
            },
            '& {inputNative}': {
                caretColor: theme.warn.default + "!important"
            },
            // hidde all hints except after hint
            '& {hintContainer} ly-hint:not({hintAfter})': {
                display: 'none'
            },
            '& {labelSpan}': {
                animation: "{shake} " + theme.animations.durations.complex + "ms " + theme.animations.curves.deceleration
            },
            '& {inputNative}::selection': selectionStyle,
            '& {inputNative}::-moz-selection': selectionStyle
        },
        hintAfter: {
            marginBefore: 'auto'
        },
        hintBefore: {
            marginAfter: 'auto'
        },
        selectArrow: {
            '{infix}': STYLE_SELECT_ARROW
        },
        $keyframes: {
            shake: {
                0: {
                    marginBefore: 0
                },
                40: {
                    marginBefore: '2px'
                },
                50: {
                    marginBefore: '-2px'
                },
                70: {
                    marginBefore: '2px'
                },
                100: {
                    marginBefore: 0
                },
            }
        }
    };
};

/** LyHint */
var STYLE_PRIORITY = -2;
/** Hint text to be shown underneath the field. */
var LyHint = /** @class */ (function () {
    function LyHint(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.hint);
    }
    Object.defineProperty(LyHint.prototype, "align", {
        get: function () {
            return this._align;
        },
        set: function (val) {
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
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyHint.prototype, "align", null);
    LyHint = __decorate([
        Directive({
            selector: 'ly-field > ly-hint'
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            LyTheme2])
    ], LyHint);
    return LyHint;
}());

/** Prefix to be placed the before of the field. */
var LyPrefix = /** @class */ (function () {
    function LyPrefix() {
    }
    LyPrefix = __decorate([
        Directive({
            selector: '[lyPrefix]',
        })
    ], LyPrefix);
    return LyPrefix;
}());

/** Suffix to be placed the after of the field. */
var LySuffix = /** @class */ (function () {
    function LySuffix() {
    }
    LySuffix = __decorate([
        Directive({
            selector: '[lySuffix]',
        })
    ], LySuffix);
    return LySuffix;
}());

/** LyError */
var STYLE_PRIORITY$1 = -2;
var LyError = /** @class */ (function () {
    function LyError(renderer, el, _theme) {
        this._theme = _theme;
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY$1);
        var className = _theme.addStyleSheet(STYLES, STYLE_PRIORITY$1).error;
        renderer.addClass(el.nativeElement, className);
    }
    LyError = __decorate([
        Directive({
            selector: 'ly-error'
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            LyTheme2])
    ], LyError);
    return LyError;
}());

/** An interface which allows a control to work inside of a `LyField`. */
var LyFieldControlBase = /** @class */ (function () {
    function LyFieldControlBase() {
    }
    return LyFieldControlBase;
}());

/** LyField */
var STYLE_PRIORITY$2 = -2;
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
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY$2);
        _renderer.addClass(_el.nativeElement, this.classes.root);
        if (!_theme.variables.field) {
            throw getLyThemeVariableUndefinedError('field');
        }
    }
    Object.defineProperty(LyField.prototype, "errorState", {
        get: function () {
            return this._control ? this._control.errorState : false;
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
                this._fullWidthClass = this._theme.addStyle("fullWidth", {
                    display: 'block',
                    width: '100%'
                }, this._getHostElement(), this._fullWidthClass, STYLE_PRIORITY$2);
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
                }, this._el.nativeElement, this._colorClass, STYLE_PRIORITY$2 + 1, STYLES);
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
                }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY$2, STYLES);
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
        }, undefined, undefined, STYLE_PRIORITY$2);
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
            _a), this._el.nativeElement, this._fielsetSpanClass, STYLE_PRIORITY$2);
    };
    /** @ignore */
    LyField.prototype._isLabel = function () {
        if (this._control && this._control.placeholder && !this._labelChild) {
            return true;
        }
        else if (this._labelChild || this._placeholderChild) {
            return true;
        }
        return false;
    };
    /** @ignore */
    LyField.prototype._isPlaceholder = function () {
        if ((this._labelChild && this._control && this._control.placeholder) || (this._labelChild && this._placeholderChild)) {
            return true;
        }
        return false;
    };
    /** @ignore */
    LyField.prototype._isEmpty = function () {
        var val = this._control ? this._control.value : null;
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
        if (this._control) {
            if (this._control.focused) {
                this._renderer.addClass(this._el.nativeElement, this.classes.focused);
            }
            else {
                this._renderer.removeClass(this._el.nativeElement, this.classes.focused);
            }
        }
    };
    LyField.prototype._markForCheck = function () {
        this._cd.markForCheck();
    };
    LyField.prototype._getHostElement = function () {
        return this._el.nativeElement;
    };
    __decorate([
        ViewChild('_labelContainer', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyField.prototype, "_labelContainer", void 0);
    __decorate([
        ViewChild('_labelContainer2', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyField.prototype, "_labelContainer2", void 0);
    __decorate([
        ViewChild('_labelSpan', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyField.prototype, "_labelSpan", void 0);
    __decorate([
        ViewChild('_prefixContainer', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyField.prototype, "_prefixContainer", void 0);
    __decorate([
        ViewChild('_suffixContainer', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyField.prototype, "_suffixContainer", void 0);
    __decorate([
        ViewChild('_fieldsetLegend', { static: false }),
        __metadata("design:type", ElementRef)
    ], LyField.prototype, "_fieldsetLegend", void 0);
    __decorate([
        ContentChild(forwardRef(function () { return LyFieldControlBase; }), { static: false }),
        __metadata("design:type", LyFieldControlBase)
    ], LyField.prototype, "_control", void 0);
    __decorate([
        ContentChild(LyPlaceholder, { static: false }),
        __metadata("design:type", LyPlaceholder)
    ], LyField.prototype, "_placeholderChild", void 0);
    __decorate([
        ContentChild(LyLabel, { static: false }),
        __metadata("design:type", LyLabel)
    ], LyField.prototype, "_labelChild", void 0);
    __decorate([
        ContentChildren(LyHint),
        __metadata("design:type", QueryList)
    ], LyField.prototype, "_hintChildren", void 0);
    __decorate([
        ContentChildren(LyPrefix),
        __metadata("design:type", QueryList)
    ], LyField.prototype, "_prefixChildren", void 0);
    __decorate([
        ContentChildren(LySuffix),
        __metadata("design:type", QueryList)
    ], LyField.prototype, "_suffixChildren", void 0);
    __decorate([
        ContentChildren(LyError),
        __metadata("design:type", QueryList)
    ], LyField.prototype, "_errorChildren", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], LyField.prototype, "persistentHint", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyField.prototype, "fullWidth", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyField.prototype, "floatingLabel", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyField.prototype, "color", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LyField.prototype, "appearance", null);
    __decorate([
        HostListener('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LyField.prototype, "onFocus", null);
    LyField = __decorate([
        Component({
            selector: 'ly-field',
            exportAs: 'lyFormField',
            template: "<div [className]=\"classes.container\" (click)=\"_control && _control.onContainerClick && _control.onContainerClick($event)\">\n  <fieldset [className]=\"classes.fieldset\"><legend #_fieldsetLegend [className]=\"classes.fieldsetSpan\"></legend></fieldset>\n  <div [className]=\"classes.prefix\" *ngIf=\"_prefixChildren.length\" #_prefixContainer>\n    <ng-content select=\"[lyPrefix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.infix\">\n    <ng-content></ng-content>\n    <div [className]=\"classes.label\" *ngIf=\"_isLabel()\" #_labelContainer2>\n      <span #_labelSpan [className]=\"classes.labelSpan\">\n        <ng-container *ngTemplateOutlet=\"_labelTemplate\"></ng-container>\n      </span>\n    </div>\n    <div [className]=\"classes.placeholder\" *ngIf=\"_isPlaceholder() && _control?.empty && (_control?.floatingLabel || floatingLabel)\">\n      <ng-container *ngTemplateOutlet=\"_placeholderTemplate\"></ng-container>\n    </div>\n  </div>\n  <div [className]=\"classes.suffix\" *ngIf=\"_suffixChildren.length\" #_suffixContainer>\n    <ng-content select=\"[lySuffix]\"></ng-content>\n  </div>\n</div>\n\n<div [className]=\"classes.hintContainer\">\n  <div *ngIf=\"_hintChildren.length && (persistentHint || _control?.errorState || _control?.focused)\">\n    <span *ngIf=\"_control.errorState\">\n      <ng-content select=\"ly-error\"></ng-content>\n    </span>\n    <ng-content select=\"ly-hint\"></ng-content>\n  </div>\n</div>\n\n<ng-template #_labelTemplate>\n  <ng-content select=\"ly-label\"></ng-content>\n  <ng-container *ngIf=\"!_labelChild\">\n    <ng-template *ngTemplateOutlet=\"_placeholderTemplate\"></ng-template>\n  </ng-container>\n</ng-template>\n\n<ng-template #_placeholderTemplate>\n  <ng-content select=\"ly-placeholder\"></ng-content>\n  <ng-container *ngIf=\"_control.placeholder\">{{ _control.placeholder }}</ng-container>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef,
            ElementObserver,
            LyTheme2,
            ChangeDetectorRef,
            NgZone])
    ], LyField);
    return LyField;
}());
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
        var ngControl = this.ngControl;
        // update styles on disabled
        if (ngControl && ngControl.statusChanges) {
            ngControl.statusChanges.subscribe(function () {
                _this.disabled = !!ngControl.disabled;
            });
        }
    };
    LyNativeControl.prototype.ngDoCheck = function () {
        if (this._field._control) {
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
    __decorate([
        HostListener('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LyNativeControl.prototype, "_onInput", null);
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LyNativeControl.prototype, "_onBlur", null);
    __decorate([
        HostListener('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LyNativeControl.prototype, "_onFocus", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LyNativeControl.prototype, "value", null);
    __decorate([
        HostBinding(),
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyNativeControl.prototype, "disabled", null);
    __decorate([
        HostBinding(),
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LyNativeControl.prototype, "required", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
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
        __param(6, Optional()),
        __metadata("design:paramtypes", [LyTheme2,
            ElementRef,
            Renderer2,
            LyField,
            NgControl,
            NgForm,
            FormGroupDirective])
    ], LyNativeControl);
    return LyNativeControl;
}());

var LyFieldModule = /** @class */ (function () {
    function LyFieldModule() {
    }
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
            declarations: [LyField, LyPlaceholder, LyLabel, LyNativeControl, LyPrefix, LySuffix, LyHint, LyError]
        })
    ], LyFieldModule);
    return LyFieldModule;
}());

export { LyField, LyFieldControlBase, LyFieldModule, LyNativeControl, STYLES, STYLE_SELECT_ARROW, LyPlaceholder as ɵa, LyLabel as ɵb, LyHint as ɵc, LyPrefix as ɵd, LySuffix as ɵe, LyError as ɵf };
//# sourceMappingURL=alyle-ui-field.js.map
