import * as tslib_1 from "tslib";
import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation, ContentChildren, QueryList, NgZone, Directive, OnDestroy, HostListener, HostBinding, Optional, Self, forwardRef, DoCheck } from '@angular/core';
import { LyTheme2, ThemeVariables, ElementObserver, Platform, toBoolean, DirAlias, StyleCollection, LyClasses, StyleTemplate, LyHostClass, StyleRenderer, st2c, ThemeRef, LY_COMMON_STYLES, keyframesUniqueId } from '@alyle/ui';
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
var STYLE_PRIORITY = -2;
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
export var STYLE_SELECT_ARROW = function (className) { return className + "::after{position:absolute;content:'';width:0;height:0;border-left:0.3125em solid transparent;border-right:0.3125em solid transparent;border-top:0.3125em solid;top:50%;{after}:0;margin-top:-0.15625em;pointer-events:none;}"; };
export var STYLES = function (theme, ref) {
    var classes = ref.selectorsOf(STYLES);
    var before = theme.before, after = theme.after;
    var shake = keyframesUniqueId.next();
    return {
        $priority: STYLE_PRIORITY,
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
                }, this._getHostElement(), this._fullWidthClass, STYLE_PRIORITY);
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
                }, STYLE_PRIORITY, this[0x1]);
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
        ContentChild(forwardRef(function () { return LyFieldControlBase; }), { static: false })
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
    return LyNativeControl;
}());
export { LyNativeControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFVBQVUsRUFDVixPQUFPLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFFBQVEsRUFDUixjQUFjLEVBQ2QsZUFBZSxFQUNmLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQ2IsSUFBSSxFQUNKLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDaEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUs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QUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLGlCQUFlLEVBQUU7YUFDOUQ7U0FDRixDQUFDO1FBdUdHLG1CQUFBLFFBQVEsRUFBRSxDQUFBO1FBRVYsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUNsQixtQkFBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLG1CQUFBLFFBQVEsRUFBRSxDQUFBO09BMUdGLGVBQWUsQ0F3TTNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhNRCxJQXdNQztTQXhNWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgTmdab25lLFxuICBEaXJlY3RpdmUsXG4gIE9uRGVzdHJveSxcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIGZvcndhcmRSZWYsXG4gIERvQ2hlY2tcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgRWxlbWVudE9ic2VydmVyLFxuICBQbGF0Zm9ybSxcbiAgdG9Cb29sZWFuLFxuICBEaXJBbGlhcyxcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIEx5SG9zdENsYXNzLFxuICBTdHlsZVJlbmRlcmVyLFxuICBzdDJjLFxuICBUaGVtZVJlZixcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAga2V5ZnJhbWVzVW5pcXVlSWQgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlIaW50IH0gZnJvbSAnLi9oaW50JztcbmltcG9ydCB7IEx5UHJlZml4IH0gZnJvbSAnLi9wcmVmaXgnO1xuaW1wb3J0IHsgTHlTdWZmaXggfSBmcm9tICcuL3N1ZmZpeCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIE5nRm9ybSwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlFcnJvciB9IGZyb20gJy4vZXJyb3InO1xuaW1wb3J0IHsgTHlGaWVsZENvbnRyb2xCYXNlIH0gZnJvbSAnLi9maWVsZC1jb250cm9sLWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5RmllbGRUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIEZpZWxkIENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgYXBwZWFyYW5jZT86IHtcbiAgICBzdGFuZGFyZD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKVxuICAgIGZpbGxlZD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKVxuICAgIG91dGxpbmVkPzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpXG4gICAgW25hbWU6IHN0cmluZ106IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKSB8IHVuZGVmaW5lZFxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5RmllbGRWYXJpYWJsZXMge1xuICBmaWVsZD86IEx5RmllbGRUaGVtZTtcbn1cblxuLyoqIEx5RmllbGQgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0UgPSAnc3RhbmRhcmQnO1xuY29uc3QgREVGQVVMVF9XSVRIX0NPTE9SID0gJ3ByaW1hcnknO1xuXG5jb25zdCBpbnB1dFRleHQgPSBbXG4gICd0ZXh0JyxcbiAgJ251bWJlcicsXG4gICdwYXNzd29yZCcsXG4gICdzZWFyY2gnLFxuICAndGVsJyxcbiAgJ3VybCdcbl07XG5cblxuZXhwb3J0IGNvbnN0IFNUWUxFX1NFTEVDVF9BUlJPVyA9IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfTo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDonJzt3aWR0aDowO2hlaWdodDowO2JvcmRlci1sZWZ0OjAuMzEyNWVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDowLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItdG9wOjAuMzEyNWVtIHNvbGlkO3RvcDo1MCU7e2FmdGVyfTowO21hcmdpbi10b3A6LTAuMTU2MjVlbTtwb2ludGVyLWV2ZW50czpub25lO31gO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5RmllbGRWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICBjb25zdCB7YmVmb3JlLCBhZnRlciB9ID0gdGhlbWU7XG4gIGNvbnN0IHNoYWtlID0ga2V5ZnJhbWVzVW5pcXVlSWQubmV4dCgpO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgJGdsb2JhbDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQGtleWZyYW1lcyAke3NoYWtlfXske2NsYXNzTmFtZX0gMCV7bWFyZ2luLSR7YmVmb3JlfTowO30ke2NsYXNzTmFtZX0gNDAle21hcmdpbi0ke2JlZm9yZX06MnB4O30ke2NsYXNzTmFtZX0gNTAle21hcmdpbi0ke2JlZm9yZX06LTJweDt9JHtjbGFzc05hbWV9IDcwJXttYXJnaW4tJHtiZWZvcmV9OjJweDt9JHtjbGFzc05hbWV9IDEwMCV7bWFyZ2luLSR7YmVmb3JlfTowO319YCxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi10b3A6MWVtO2xpbmUtaGVpZ2h0OjEuNTt9JHtzdDJjKChcbiAgICAgICAgICAodGhlbWUuZmllbGRcbiAgICAgICAgICAgICYmIHRoZW1lLmZpZWxkLnJvb3RcbiAgICAgICAgICAgICYmICh0aGVtZS5maWVsZC5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUuZmllbGQucm9vdC5zZXRUcmFuc2Zvcm1lcihmbiA9PiBmbihjbGFzc2VzKSlcbiAgICAgICAgICAgICAgOiB0aGVtZS5maWVsZC5yb290KGNsYXNzZXMpKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5oaW50fSwke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmVycm9yfXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTouNzVlbTttYXJnaW4tdG9wOi4yNWVtO31gLFxuICAgIGFuaW1hdGlvbnM6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmxhYmVsU3Bhbn17dHJhbnNpdGlvbjpmb250LXNpemUgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259IC4ke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9czt9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5sYWJlbH17dHJhbnNpdGlvbjoke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zO31gLFxuICAgIGNvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2hlaWdodDoxMDAlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O30ke3N0MmMoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX06YWZ0ZXJgKX0ke2NsYXNzTmFtZX06YWZ0ZXJ7Y29udGVudDonJztwb2ludGVyLWV2ZW50czpub25lO31gLFxuICAgIGZpZWxkc2V0OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3N0MmMoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX17bWFyZ2luOjA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowO31gLFxuICAgIGZpZWxkc2V0U3BhbjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3BhZGRpbmc6MDtoZWlnaHQ6MnB4O31gLFxuICAgIGxhYmVsU3BhbjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21heC13aWR0aDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO31gLFxuICAgIHByZWZpeDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21heC1oZWlnaHQ6MmVtO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7fWAsXG4gICAgaW5maXg6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2FsaWduLWl0ZW1zOmJhc2VsaW5lO21pbi13aWR0aDowO3dpZHRoOjE4MHB4O2ZsZXg6MSAwO31gLFxuICAgIHN1ZmZpeDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21heC1oZWlnaHQ6MmVtO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7fWAsXG4gICAgbGFiZWxDb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7c3QyYygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfXtwb2ludGVyLWV2ZW50czpub25lO2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO31gLFxuICAgIGxhYmVsU3BhY2luZ1N0YXJ0OiBudWxsLFxuICAgIGxhYmVsQ2VudGVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMDAlO31gLFxuICAgIGxhYmVsU3BhY2luZ0VuZDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2ZsZXg6MTt9YCxcbiAgICBsYWJlbDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtzdDJjKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9e21hcmdpbjowO2JvcmRlcjpub25lO3BvaW50ZXItZXZlbnRzOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjEwMCU7fWAsXG4gICAgaXNGbG9hdGluZ0xhYmVsOiBudWxsLFxuICAgIGZsb2F0aW5nTGFiZWw6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmxhYmVsU3Bhbn17Zm9udC1zaXplOjc1JTt9YCxcbiAgICBwbGFjZWhvbGRlcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtzdDJjKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9e3BvaW50ZXItZXZlbnRzOm5vbmU7fWAsXG4gICAgZm9jdXNlZDogbnVsbCxcbiAgICBpbnB1dE5hdGl2ZTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Jlc2l6ZTp2ZXJ0aWNhbDtwYWRkaW5nOjA7b3V0bGluZTpub25lO2JvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6aW5oZXJpdDtmb250OmluaGVyaXQ7d2lkdGg6MTAwJTt9c2VsZWN0JHtjbGFzc05hbWV9ey1tb3otYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7ZGlzcGxheTppbmxpbmUtZmxleDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZy0ke2FmdGVyfToxZW07fXNlbGVjdCR7Y2xhc3NOYW1lfSBvcHRpb246bm90KFtkaXNhYmxlZF0pe2NvbG9yOmluaXRpYWw7fXNlbGVjdCR7Y2xhc3NOYW1lfSBvcHRncm91cDpub3QoW2Rpc2FibGVkXSl7Y29sb3I6aW5pdGlhbDt9c2VsZWN0JHtjbGFzc05hbWV9OjotbXMtZXhwYW5ke2Rpc3BsYXk6bm9uZTt9c2VsZWN0JHtjbGFzc05hbWV9OjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowO31zZWxlY3Qke2NsYXNzTmFtZX06bm90KDpkaXNhYmxlZCl7Y3Vyc29yOnBvaW50ZXI7fXNlbGVjdCR7Y2xhc3NOYW1lfTo6LW1zLXZhbHVle2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDowIDA7fWAsXG4gICAgaGludENvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21pbi1oZWlnaHQ6MS4yNWVtO2xpbmUtaGVpZ2h0OjEuMjU7fSR7Y2xhc3NOYW1lfSA+IGRpdntkaXNwbGF5OmZsZXg7ZmxleDoxIDAgYXV0bzttYXgtd2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47fWAsXG4gICAgZGlzYWJsZWQ6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0sJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5sYWJlbH0sJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5jb250YWluZXJ9OmFmdGVye2NvbG9yOiR7dGhlbWUuZGlzYWJsZWQuZGVmYXVsdH07Y3Vyc29yOmRlZmF1bHQ7fWAsXG4gICAgaGludDogbnVsbCxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBlcnJvclN0YXRlOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5sYWJlbH0sJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5oaW50Q29udGFpbmVyfSwke2NsYXNzTmFtZX0ke2NsYXNzZXMuc2VsZWN0QXJyb3d9ICR7Y2xhc3Nlcy5pbmZpeH06YWZ0ZXJ7Y29sb3I6JHt0aGVtZS53YXJuLmRlZmF1bHR9IWltcG9ydGFudDt9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5maWVsZHNldH0sJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5jb250YWluZXJ9OmFmdGVye2JvcmRlci1jb2xvcjoke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50O30ke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmlucHV0TmF0aXZlfXtjYXJldC1jb2xvcjoke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50O30ke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmhpbnRDb250YWluZXJ9IGx5LWhpbnQ6bm90KCR7Y2xhc3Nlcy5oaW50QWZ0ZXJ9KXtkaXNwbGF5Om5vbmU7fSR7Y2xhc3NOYW1lfSAke2NsYXNzZXMubGFiZWxTcGFufXthbmltYXRpb246JHtzaGFrZX0gJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufTt9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5pbnB1dE5hdGl2ZX06OnNlbGVjdGlvbiwke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmlucHV0TmF0aXZlfTo6LW1vei1zZWxlY3Rpb257YmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLndhcm4uZGVmYXVsdH0gIWltcG9ydGFudDtjb2xvcjoke3RoZW1lLndhcm4uY29udHJhc3R9ICFpbXBvcnRhbnQ7fWAsXG4gICAgaGludEFmdGVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWFyZ2luLSR7YmVmb3JlfTphdXRvO31gLFxuICAgIGhpbnRCZWZvcmU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW4tJHthZnRlcn06YXV0bzt9YCxcbiAgICBzZWxlY3RBcnJvdzogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuaW5maXh9OjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OicnO3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLWxlZnQ6MC4zMTI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0OjAuMzEyNWVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci10b3A6MC4zMTI1ZW0gc29saWQ7dG9wOjUwJTske2FmdGVyfTowO21hcmdpbi10b3A6LTAuMTU2MjVlbTtwb2ludGVyLWV2ZW50czpub25lO31gXG4gIH07XG59O1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkJyxcbiAgZXhwb3J0QXM6ICdseUZvcm1GaWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnZmllbGQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJvdGVjdGVkIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfY29sb3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9jb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfaXNGbG9hdGluZzogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9mbG9hdGluZ0xhYmVsOiBib29sZWFuO1xuICBwcml2YXRlIF9maWVsc2V0U3BhbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX21hcmdpblN0YXJ0Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfbWFyZ2luRW5kQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZnVsbFdpZHRoOiBib29sZWFuO1xuICBwcml2YXRlIF9mdWxsV2lkdGhDbGFzcz86IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9sYWJlbENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcjInLCB7IHN0YXRpYzogZmFsc2UgfSkgX2xhYmVsQ29udGFpbmVyMjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbFNwYW4nLCB7IHN0YXRpYzogZmFsc2UgfSkgX2xhYmVsU3BhbjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19wcmVmaXhDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX3ByZWZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19zdWZmaXhDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX3N1ZmZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19maWVsZHNldExlZ2VuZCcsIHsgc3RhdGljOiBmYWxzZSB9KSBfZmllbGRzZXRMZWdlbmQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlGaWVsZENvbnRyb2xCYXNlKSwgeyBzdGF0aWM6IGZhbHNlIH0pIF9jb250cm9sPzogTHlGaWVsZENvbnRyb2xCYXNlO1xuICBAQ29udGVudENoaWxkKEx5UGxhY2Vob2xkZXIsIHsgc3RhdGljOiBmYWxzZSB9KSBfcGxhY2Vob2xkZXJDaGlsZDogTHlQbGFjZWhvbGRlcjtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsLCB7IHN0YXRpYzogZmFsc2UgfSkgX2xhYmVsQ2hpbGQ6IEx5TGFiZWw7XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlIaW50KSBfaGludENoaWxkcmVuOiBRdWVyeUxpc3Q8THlIaW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihMeVByZWZpeCkgX3ByZWZpeENoaWxkcmVuOiBRdWVyeUxpc3Q8THlQcmVmaXg+O1xuICBAQ29udGVudENoaWxkcmVuKEx5U3VmZml4KSBfc3VmZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeVN1ZmZpeD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlFcnJvcikgX2Vycm9yQ2hpbGRyZW46IFF1ZXJ5TGlzdDxMeUVycm9yPjtcblxuICBnZXQgZXJyb3JTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbCA/IHRoaXMuX2NvbnRyb2wuZXJyb3JTdGF0ZSA6IGZhbHNlO1xuICB9XG5cbiAgQElucHV0KCkgcGVyc2lzdGVudEhpbnQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGZ1bGxXaWR0aCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLl9mdWxsV2lkdGhDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgZnVsbFdpZHRoYCxcbiAgICAgICAge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9mdWxsV2lkdGhDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9mdWxsV2lkdGhDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZnVsbFdpZHRoQ2xhc3MpO1xuICAgICAgdGhpcy5fZnVsbFdpZHRoQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuX2Z1bGxXaWR0aCA9IG5ld1ZhbDtcbiAgfVxuICBnZXQgZnVsbFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl9mdWxsV2lkdGg7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbGFiZWwgaXMgZmxvYXRpbmcuICovXG4gIEBJbnB1dCgpXG4gIHNldCBmbG9hdGluZ0xhYmVsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Zsb2F0aW5nTGFiZWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gIH1cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nTGFiZWw7XG4gIH1cblxuICAvKiogVGhlbWUgY29sb3IgZm9yIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX2NvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQuY29sb3I6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgICAgY29uc3QgY29udHJhc3QgPSB0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn06YWZ0ZXIsICZ7Zm9jdXNlZH17c2VsZWN0QXJyb3d9IHtpbmZpeH06YWZ0ZXJgXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmV9YF06IHtcbiAgICAgICAgICAgIGNhcmV0Q29sb3I6IGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJiB7aW5wdXROYXRpdmV9OjpzZWxlY3Rpb24nOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgY29sb3I6IGNvbnRyYXN0XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJiB7aW5wdXROYXRpdmV9OjotbW96LXNlbGVjdGlvbic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBjb2xvcjogY29udHJhc3RcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xvckNsYXNzLCBTVFlMRV9QUklPUklUWSArIDEsIFNUWUxFUyk7XG4gICAgfVxuICB9XG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKiogVGhlIGZpZWxkIGFwcGVhcmFuY2Ugc3R5bGUuICovXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgdGhpc1sweDFdID0gdGhpcy5fc3R5bGVSZW5kZXJlci5hZGQoXG4gICAgICAgIGBseS1maWVsZC5hcHBlYXJhbmNlOiR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUZpZWxkVmFyaWFibGVzLCByZWYpID0+IHtcbiAgICAgICAgICBjb25zdCBjbGFzc2VzID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gICAgICAgICAgaWYgKHRoZW1lLmZpZWxkICYmIHRoZW1lLmZpZWxkLmFwcGVhcmFuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcGVhcmFuY2UgPSB0aGVtZS5maWVsZC5hcHBlYXJhbmNlW3ZhbF07XG4gICAgICAgICAgICBpZiAoYXBwZWFyYW5jZSkge1xuICAgICAgICAgICAgICByZXR1cm4gYXBwZWFyYW5jZSBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICAgID8gYXBwZWFyYW5jZS5zZXRUcmFuc2Zvcm1lcigoXykgPT4gXyhjbGFzc2VzKSkuY3NzXG4gICAgICAgICAgICAgICAgOiBhcHBlYXJhbmNlKGNsYXNzZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuZmllbGQuYXBwZWFyYW5jZWApO1xuICAgICAgfSwgU1RZTEVfUFJJT1JJVFksIHRoaXNbMHgxXSk7XG4gICAgfVxuICB9XG4gIGdldCBhcHBlYXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG5cbiAgWzB4MV06IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50T2JzZXJ2ZXI6IEVsZW1lbnRPYnNlcnZlcixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3N0eWxlUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXJcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuY29sb3IgPSBERUZBVUxUX1dJVEhfQ09MT1I7XG4gICAgfVxuICAgIGlmICghdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSBERUZBVUxUX0FQUEVBUkFOQ0U7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2NvbnRyb2whLnN0YXRlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLl9jb250cm9sIS5uZ0NvbnRyb2w7XG5cbiAgICAvLyBSdW4gY2hhbmdlIGRldGVjdGlvbiBpZiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICBpZiAobmdDb250cm9sICYmIG5nQ29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgIG5nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3ByZWZpeENvbnRhaW5lcikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fcHJlZml4Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuYmVmb3JlKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuYmVmb3JlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc3VmZml4Q29udGFpbmVyKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9zdWZmaXhDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5hZnRlcik7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmFmdGVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGFiZWxTcGFuKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gdGhpcyBmaXggd2l0aCBvZiBsYWJlbFxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9wcmVmaXhDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fcHJlZml4Q29udGFpbmVyO1xuICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLmRlc3Ryb3koZWwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VmZml4Q29udGFpbmVyKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX3N1ZmZpeENvbnRhaW5lcjtcbiAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5kZXN0cm95KGVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhYmVsU3Bhbikge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9sYWJlbFNwYW47XG4gICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIuZGVzdHJveShlbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldChlbDogRWxlbWVudCwgZGlyOiBEaXJBbGlhcykge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGZpZWxkTGVnZW5kc3R5bGUubWFyZ2luJHtkaXJ9OiR7d2lkdGh9YCwgKCkgPT4gKHtcbiAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXRTcGFufWBdOiB7XG4gICAgICAgIFtgbWFyZ2luLSR7ZGlyfWBdOiBgJHt3aWR0aH1weGBcbiAgICAgIH1cbiAgICB9KSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICBpZiAoZGlyID09PSBEaXJBbGlhcy5iZWZvcmUpIHtcbiAgICAgIHRoaXMuX21hcmdpblN0YXJ0Q2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX21hcmdpblN0YXJ0Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tYXJnaW5FbmRDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fbWFyZ2luRW5kQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZpZWxzZXRTcGFuKCkge1xuICAgIGxldCB7IHdpZHRoIH0gPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoIXRoaXMuX2lzRmxvYXRpbmcpIHtcbiAgICAgIHdpZHRoIC09IHdpZHRoIC8gMTAwICogMjU7XG4gICAgfVxuICAgIC8qKiBBZGQgNnB4IG9mIHNwYWNpbmcgKi9cbiAgICB3aWR0aCArPSA2O1xuICAgIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgc3R5bGUuZmllbGRzZXRTcGFuRm9jdXNlZDoke3dpZHRofWAsIHtcbiAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWx9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldFNwYW59YF06IHt3aWR0aDogYCR7d2lkdGh9cHhgfVxuICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbCAmJiB0aGlzLl9jb250cm9sLnBsYWNlaG9sZGVyICYmICF0aGlzLl9sYWJlbENoaWxkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xhYmVsQ2hpbGQgfHwgdGhpcy5fcGxhY2Vob2xkZXJDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIF9pc1BsYWNlaG9sZGVyKCkge1xuICAgIGlmICgodGhpcy5fbGFiZWxDaGlsZCAmJiB0aGlzLl9jb250cm9sICYmIHRoaXMuX2NvbnRyb2wucGxhY2Vob2xkZXIpIHx8ICh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzRW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5fY29udHJvbCA/IHRoaXMuX2NvbnRyb2wudmFsdWUgOiBudWxsO1xuICAgIHJldHVybiB2YWwgPT09ICcnIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2xhYmVsQ29udGFpbmVyMikge1xuICAgICAgY29uc3QgaXNGbG9hdGluZyA9IHRoaXMuX2NvbnRyb2whLmZsb2F0aW5nTGFiZWwgfHwgdGhpcy5mbG9hdGluZ0xhYmVsO1xuICAgICAgaWYgKHRoaXMuX2lzRmxvYXRpbmcgIT09IGlzRmxvYXRpbmcpIHtcbiAgICAgICAgdGhpcy5faXNGbG9hdGluZyA9IGlzRmxvYXRpbmc7XG4gICAgICAgIGlmIChpc0Zsb2F0aW5nKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fbGFiZWxDb250YWluZXIyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9sYWJlbENvbnRhaW5lcjIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWwpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250cm9sKSB7XG4gICAgICBpZiAodGhpcy5fY29udHJvbC5mb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6XG4gICAgICAnaW5wdXRbbHlJbnB1dF0sIHRleHRhcmVhW2x5SW5wdXRdLCBpbnB1dFtseU5hdGl2ZUNvbnRyb2xdLCB0ZXh0YXJlYVtseU5hdGl2ZUNvbnRyb2xdLCBzZWxlY3RbbHlOYXRpdmVDb250cm9sXScsXG4gIGV4cG9ydEFzOiAnTHlOYXRpdmVDb250cm9sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBMeUZpZWxkQ29udHJvbEJhc2UsIHVzZUV4aXN0aW5nOiBMeU5hdGl2ZUNvbnRyb2wgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5TmF0aXZlQ29udHJvbCBpbXBsZW1lbnRzIEx5RmllbGRDb250cm9sQmFzZSwgT25Jbml0LCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICByZWFkb25seSBzdGF0ZUNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9oYXNEaXNhYmxlZENsYXNzPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZXJyb3JDbGFzcz86IHN0cmluZztcbiAgcHJpdmF0ZSBfY3Vyc29yQ2xhc3M6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2lzU2VsZWN0SW5wdXQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Zvcm06IE5nRm9ybSB8IEZvcm1Hcm91cERpcmVjdGl2ZSB8IG51bGwgPSB0aGlzLl9wYXJlbnRGb3JtIHx8IHRoaXMuX3BhcmVudEZvcm1Hcm91cDtcbiAgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyb3JTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JykgX29uSW5wdXQoKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIF9vbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgX29uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IHRydWUpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLnZhbHVlID0gdmFsO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEhvc3RFbGVtZW50KCkudmFsdWU7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuICovXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgICBpZiAoIXZhbCAmJiB0aGlzLl9oYXNEaXNhYmxlZENsYXNzKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnNvckNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY3Vyc29yQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9oYXNEaXNhYmxlZENsYXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIGdldCBlbXB0eSgpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlO1xuICAgIHJldHVybiB2YWwgPT09ICcnIHx8IHZhbCA9PSBudWxsO1xuICB9XG5cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eSB8fCAodGhpcy5faXNTZWxlY3RJbnB1dCA/IHRoaXMuX2hhc0xhYmVsU2VsZWN0aW9uT3B0aW9uKCkgOiBmYWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9maWVsZDogTHlGaWVsZCxcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCAncGxhY2Vob2xkZXInLCAnwq0nKTtcblxuICAgIGNvbnN0IHsgbmF0aXZlRWxlbWVudCB9ID0gdGhpcy5fZWw7XG5cbiAgICBpZiAobmF0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy5faXNTZWxlY3RJbnB1dCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgY2xhc3Mge3NlbGVjdEFycm93fSB0byBgPHNlbGVjdD4gbm90IG11bHRpcGxlYFxuICAgIGlmICh0aGlzLl9maWVsZCAmJiBuYXRpdmVFbGVtZW50LnR5cGUgPT09ICdzZWxlY3Qtb25lJykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuc2VsZWN0QXJyb3cpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHN0eWxlIGN1cnNvciBvbmx5IGZvciBpbnB1dCBvZiB0eXBlIHRleHRcbiAgICBpZiAobmF0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQgfHxcbiAgICAgICAgaW5wdXRUZXh0LnNvbWUodHlwZSA9PiB0eXBlID09PSBuYXRpdmVFbGVtZW50LnR5cGUpKSB7XG4gICAgICB0aGlzLl9jdXJzb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKCdseUZpZWxkLnRleHQnLCB7XG4gICAgICAgICcmIHtpbmZpeH0nOiB7XG4gICAgICAgICAgY3Vyc29yOiAndGV4dCdcbiAgICAgICAgfVxuICAgICAgfSwgU1RZTEVfUFJJT1JJVFksIFNUWUxFUyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0SW5wdXQpIHtcbiAgICAgIHRoaXMuX2N1cnNvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoJ2x5RmllbGQuc2VsZWN0Jywge1xuICAgICAgICAnJiB7aW5maXh9Jzoge1xuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgIH1cbiAgICAgIH0sIFNUWUxFX1BSSU9SSVRZLCBTVFlMRVMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBkZWZhdWx0IHN0eWxlc1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKG5hdGl2ZUVsZW1lbnQsIHRoaXMuX2ZpZWxkLmNsYXNzZXMuaW5wdXROYXRpdmUpO1xuXG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5uZ0NvbnRyb2w7XG4gICAgLy8gdXBkYXRlIHN0eWxlcyBvbiBkaXNhYmxlZFxuICAgIGlmIChuZ0NvbnRyb2wgJiYgbmdDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcbiAgICAgIG5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSAhIW5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5fZmllbGQuX2NvbnRyb2wpIHtcbiAgICAgIGNvbnN0IG9sZFZhbCA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICAgIGNvbnN0IG5ld1ZhbCA9ICEhKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmludmFsaWQgJiYgKHRoaXMubmdDb250cm9sLnRvdWNoZWQgfHwgKHRoaXMuX2Zvcm0gJiYgdGhpcy5fZm9ybS5zdWJtaXR0ZWQpKSk7XG4gICAgICBpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcbiAgICAgICAgdGhpcy5lcnJvclN0YXRlID0gbmV3VmFsO1xuICAgICAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgICAgICBjb25zdCBlcnJvckNsYXNzID0gdGhpcy5fZmllbGQuY2xhc3Nlcy5lcnJvclN0YXRlO1xuICAgICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBlcnJvckNsYXNzKTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBlcnJvckNsYXNzO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZXJyb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIGVycm9yQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIG9uQ29udGFpbmVyQ2xpY2soX2U6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgaW5wdXQuICovXG4gIGZvY3VzKCk6IHZvaWQgeyB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7IH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9oYXNMYWJlbFNlbGVjdGlvbk9wdGlvbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2dldEhvc3RFbGVtZW50KCkgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgY29uc3Qgb3B0aW9uID0gZWwuc2VsZWN0ZWRPcHRpb25zID8gZWwuc2VsZWN0ZWRPcHRpb25zLml0ZW0oMCkgOiBudWxsO1xuICAgIHJldHVybiBvcHRpb24gPyAhIW9wdGlvbi5sYWJlbCA6IGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==