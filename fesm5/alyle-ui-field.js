import { __decorate, __param } from 'tslib';
import { Directive, InjectionToken, Renderer2, ElementRef, Inject, Input, ChangeDetectorRef, NgZone, ViewChild, ContentChild, forwardRef, ContentChildren, HostListener, Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, Self, HostBinding, NgModule } from '@angular/core';
import { LyTheme2, keyframesUniqueId, st2c, StyleCollection, LY_COMMON_STYLES, toBoolean, Platform, DirAlias, ElementObserver, StyleRenderer, LyHostClass, LyCommonModule } from '@alyle/ui';
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

/**
 * For internal use only.
 * @docs-private
 */
var LY_FIELD_STYLES_TOKEN = new InjectionToken('LY_FIELD_STYLES_TOKEN');

/** LyHint */
var STYLE_PRIORITY = -2;
/** Hint text to be shown underneath the field. */
var LyHint = /** @class */ (function () {
    function LyHint(_renderer, _el, _theme, styles) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
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
    LyHint.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 },
        { type: undefined, decorators: [{ type: Inject, args: [LY_FIELD_STYLES_TOKEN,] }] }
    ]; };
    __decorate([
        Input()
    ], LyHint.prototype, "align", null);
    LyHint = __decorate([
        Directive({
            selector: 'ly-field > ly-hint'
        }),
        __param(3, Inject(LY_FIELD_STYLES_TOKEN))
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

var STYLE_PRIORITY$1 = -2;
var LyError = /** @class */ (function () {
    function LyError(renderer, el, theme, styles) {
        var className = theme.addStyleSheet(styles, STYLE_PRIORITY$1).error;
        renderer.addClass(el.nativeElement, className);
    }
    LyError.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 },
        { type: undefined, decorators: [{ type: Inject, args: [LY_FIELD_STYLES_TOKEN,] }] }
    ]; };
    LyError = __decorate([
        Directive({
            selector: 'ly-error'
        }),
        __param(3, Inject(LY_FIELD_STYLES_TOKEN))
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
var DEFAULT_WITH_COLOR = 'primary';
var inputText = [
    'text',
    'number',
    'password',
    'search',
    'tel',
    'url'
];
var STYLE_SELECT_ARROW = function (className) { return className + "::after{position:absolute;content:'';width:0;height:0;border-left:0.3125em solid transparent;border-right:0.3125em solid transparent;border-top:0.3125em solid;top:50%;{after}:0;margin-top:-0.15625em;pointer-events:none;}"; };
var STYLES = function (theme, ref) {
    var classes = ref.selectorsOf(STYLES);
    var before = theme.before, after = theme.after;
    var shake = keyframesUniqueId.next();
    return {
        $priority: STYLE_PRIORITY$2,
        $global: function (className) { return "@keyframes " + shake + "{" + className + " 0%{margin-" + before + ":0;}" + className + " 40%{margin-" + before + ":2px;}" + className + " 50%{margin-" + before + ":-2px;}" + className + " 70%{margin-" + before + ":2px;}" + className + " 100%{margin-" + before + ":0;}}"; },
        root: function () { return function (className) { return className + "{display:inline-block;position:relative;margin-top:1em;line-height:1.5;}" + st2c(((theme.field
            && theme.field.root
            && (theme.field.root instanceof StyleCollection
                ? theme.field.root.setTransformer(function (fn) { return fn(classes); })
                : theme.field.root(classes)))), "" + className) + className + " " + classes.hint + "," + className + " " + classes.error + "{display:block;font-size:.75em;margin-top:.25em;}"; }; },
        animations: function () { return function (className) { return className + " " + classes.labelSpan + "{transition:font-size " + theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s;}" + className + " " + classes.label + "{transition:" + theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s;}"; }; },
        container: function (className) { return className + "{height:100%;display:flex;align-items:center;position:relative;-webkit-tap-highlight-color:transparent;}" + st2c((LY_COMMON_STYLES.fill), className + ":after") + className + ":after{content:'';pointer-events:none;}"; },
        fieldset: function (className) { return "" + st2c((LY_COMMON_STYLES.fill), "" + className) + className + "{margin:0;border-style:solid;border-width:0;}"; },
        fieldsetSpan: function (className) { return className + "{padding:0;height:2px;}"; },
        labelSpan: function (className) { return className + "{max-width:100%;display:inline-block;}"; },
        prefix: function (className) { return className + "{max-height:2em;display:flex;align-items:center;}"; },
        infix: function (className) { return className + "{display:inline-flex;position:relative;align-items:baseline;min-width:0;width:180px;flex:1 0;}"; },
        suffix: function (className) { return className + "{max-height:2em;display:flex;align-items:center;}"; },
        labelContainer: function (className) { return "" + st2c((LY_COMMON_STYLES.fill), "" + className) + className + "{pointer-events:none;display:flex;width:100%;}"; },
        labelSpacingStart: null,
        labelCenter: function (className) { return className + "{display:flex;max-width:100%;}"; },
        labelSpacingEnd: function (className) { return className + "{flex:1;}"; },
        label: function (className) { return "" + st2c((LY_COMMON_STYLES.fill), "" + className) + className + "{margin:0;border:none;pointer-events:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%;}"; },
        isFloatingLabel: null,
        floatingLabel: function () { return function (className) { return className + " " + classes.labelSpan + "{font-size:75%;}"; }; },
        placeholder: function (className) { return "" + st2c((LY_COMMON_STYLES.fill), "" + className) + className + "{pointer-events:none;}"; },
        focused: null,
        inputNative: function (className) { return className + "{resize:vertical;padding:0;outline:none;border:none;background-color:transparent;color:inherit;font:inherit;width:100%;}select" + className + "{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-" + after + ":1em;}select" + className + " option:not([disabled]){color:initial;}select" + className + " optgroup:not([disabled]){color:initial;}select" + className + "::-ms-expand{display:none;}select" + className + "::-moz-focus-inner{border:0;}select" + className + ":not(:disabled){cursor:pointer;}select" + className + "::-ms-value{color:inherit;background:0 0;}"; },
        hintContainer: function (className) { return className + "{min-height:1.25em;line-height:1.25;}" + className + " > div{display:flex;flex:1 0 auto;max-width:100%;overflow:hidden;justify-content:space-between;}"; },
        disabled: function () { return function (className) { return className + "," + className + " " + classes.label + "," + className + " " + classes.container + ":after{color:" + theme.disabled.default + ";cursor:default;}"; }; },
        hint: null,
        error: null,
        errorState: function () { return function (className) { return className + " " + classes.label + "," + className + " " + classes.hintContainer + "," + className + classes.selectArrow + " " + classes.infix + ":after{color:" + theme.warn.default + "!important;}" + className + " " + classes.fieldset + "," + className + " " + classes.container + ":after{border-color:" + theme.warn.default + "!important;}" + className + " " + classes.inputNative + "{caret-color:" + theme.warn.default + "!important;}" + className + " " + classes.hintContainer + " ly-hint:not(" + classes.hintAfter + "){display:none;}" + className + " " + classes.labelSpan + "{animation:" + shake + " " + theme.animations.durations.complex + "ms " + theme.animations.curves.deceleration + ";}" + className + " " + classes.inputNative + "::selection," + className + " " + classes.inputNative + "::-moz-selection{background-color:" + theme.warn.default + " !important;color:" + theme.warn.contrast + " !important;}"; }; },
        hintAfter: function (className) { return className + "{margin-" + before + ":auto;}"; },
        hintBefore: function (className) { return className + "{margin-" + after + ":auto;}"; },
        selectArrow: function () { return function (className) { return className + " " + classes.infix + "::after{position:absolute;content:'';width:0;height:0;border-left:0.3125em solid transparent;border-right:0.3125em solid transparent;border-top:0.3125em solid;top:50%;" + after + ":0;margin-top:-0.15625em;pointer-events:none;}"; }; }
    };
};
var LyField = /** @class */ (function () {
    function LyField(_renderer, _el, _elementObserver, _theme, _cd, _ngZone, _styleRenderer) {
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
                this[0x1] = this._styleRenderer.add("ly-field.appearance:" + val, function (theme, ref) {
                    var classes = ref.selectorsOf(STYLES);
                    if (theme.field && theme.field.appearance) {
                        var appearance = theme.field.appearance[val];
                        if (appearance) {
                            return appearance instanceof StyleCollection
                                ? appearance.setTransformer(function (_) { return _(classes); }).css
                                : appearance(classes);
                        }
                    }
                    throw new Error(val + " not found in theme.field.appearance");
                }, STYLE_PRIORITY$2, this[0x1]);
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
    LyField.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: ElementObserver },
        { type: LyTheme2 },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: StyleRenderer }
    ]; };
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
        ContentChild(forwardRef(function () { return LyFieldControlBase; }), { static: false })
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
    LyNativeControl.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyField, decorators: [{ type: Optional }] },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] }
    ]; };
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
    return LyNativeControl;
}());

var ɵ0 = STYLES;
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
            providers: [
                {
                    provide: LY_FIELD_STYLES_TOKEN,
                    useValue: ɵ0
                }
            ],
            declarations: [LyField, LyPlaceholder, LyLabel, LyNativeControl, LyPrefix, LySuffix, LyHint, LyError]
        })
    ], LyFieldModule);
    return LyFieldModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LyField, LyFieldControlBase, LyFieldModule, LyNativeControl, STYLES, STYLE_SELECT_ARROW, ɵ0, LyPlaceholder as ɵa, LyLabel as ɵb, LyHint as ɵc, LY_FIELD_STYLES_TOKEN as ɵd, LyPrefix as ɵe, LySuffix as ɵf, LyError as ɵg };
//# sourceMappingURL=alyle-ui-field.js.map
