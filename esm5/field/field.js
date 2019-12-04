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
        root: function () { return function (className) { return className + "{display:inline-block;position:relative;margin-top:1em;line-height:1.5;}" + styleTemplateToString(((theme.field
            && theme.field.root
            && (theme.field.root instanceof StyleCollection
                ? theme.field.root.setTransformer(function (fn) { return fn(classes); })
                : theme.field.root(classes)))), "" + className) + className + " " + classes.hint + "," + className + " " + classes.error + "{display:block;font-size:.75em;margin-top:.25em;}"; }; },
        animations: function () { return function (className) { return className + " " + classes.labelSpan + "{transition:font-size " + theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s;}" + className + " " + classes.label + "{transition:" + theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s;}"; }; },
        container: function (className) { return className + "{height:100%;display:flex;align-items:center;position:relative;-webkit-tap-highlight-color:transparent;}" + styleTemplateToString((LY_COMMON_STYLES.fill), className + ":after") + className + ":after{content:'';pointer-events:none;}"; },
        fieldset: function (className) { return "" + styleTemplateToString((LY_COMMON_STYLES.fill), "" + className) + className + "{margin:0;border-style:solid;border-width:0;}"; },
        fieldsetSpan: function (className) { return className + "{padding:0;height:2px;}"; },
        labelSpan: function (className) { return className + "{max-width:100%;display:inline-block;}"; },
        prefix: function (className) { return className + "{max-height:2em;display:flex;align-items:center;}"; },
        infix: function (className) { return className + "{display:inline-flex;position:relative;align-items:baseline;min-width:0;width:180px;flex:1 0;}"; },
        suffix: function (className) { return className + "{max-height:2em;display:flex;align-items:center;}"; },
        labelContainer: function (className) { return "" + styleTemplateToString((LY_COMMON_STYLES.fill), "" + className) + className + "{pointer-events:none;display:flex;width:100%;}"; },
        labelSpacingStart: null,
        labelCenter: function (className) { return className + "{display:flex;max-width:100%;}"; },
        labelSpacingEnd: function (className) { return className + "{flex:1;}"; },
        label: function (className) { return "" + styleTemplateToString((LY_COMMON_STYLES.fill), "" + className) + className + "{margin:0;border:none;pointer-events:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%;}"; },
        isFloatingLabel: null,
        floatingLabel: function () { return function (className) { return className + " " + classes.labelSpan + "{font-size:75%;}"; }; },
        placeholder: function (className) { return "" + styleTemplateToString((LY_COMMON_STYLES.fill), "" + className) + className + "{pointer-events:none;}"; },
        focused: null,
        inputNative: function (className) { return className + "{resize:vertical;padding:0;outline:none;border:none;background-color:transparent;color:inherit;font:inherit;width:100%;}select" + className + "{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-after:1em;}select" + className + " option:not([disabled]){color:initial;}select" + className + " optgroup:not([disabled]){color:initial;}select" + className + "::-ms-expand{display:none;}select" + className + "::-moz-focus-inner{border:0;}select" + className + ":not(:disabled){cursor:pointer;}select" + className + "::-ms-value{color:inherit;background:0 0;}"; },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFVBQVUsRUFDVixPQUFPLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFFBQVEsRUFDUixjQUFjLEVBQ2QsZUFBZSxFQUNmLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQ2IscUJBQXFCLEVBQ3JCLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDaEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVB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UyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxpQkFBZSxFQUFFO2FBQzlEO1NBQ0YsQ0FBQztRQXVHRyxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtRQUVWLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsSUFBSSxFQUFFLENBQUE7UUFDbEIsbUJBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixtQkFBQSxRQUFRLEVBQUUsQ0FBQTtPQTFHRixlQUFlLENBd00zQjtJQUFELHNCQUFDO0NBQUEsQUF4TUQsSUF3TUM7U0F4TVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE5nWm9uZSxcbiAgRGlyZWN0aXZlLFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBmb3J3YXJkUmVmLFxuICBEb0NoZWNrXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIEVsZW1lbnRPYnNlcnZlcixcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgRGlyQWxpYXMsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlLFxuICBMeUhvc3RDbGFzcyxcbiAgU3R5bGVSZW5kZXJlcixcbiAgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nLFxuICBUaGVtZVJlZixcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAga2V5ZnJhbWVzVW5pcXVlSWQgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlIaW50IH0gZnJvbSAnLi9oaW50JztcbmltcG9ydCB7IEx5UHJlZml4IH0gZnJvbSAnLi9wcmVmaXgnO1xuaW1wb3J0IHsgTHlTdWZmaXggfSBmcm9tICcuL3N1ZmZpeCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIE5nRm9ybSwgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlFcnJvciB9IGZyb20gJy4vZXJyb3InO1xuaW1wb3J0IHsgTHlGaWVsZENvbnRyb2xCYXNlIH0gZnJvbSAnLi9maWVsZC1jb250cm9sLWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5RmllbGRUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIEZpZWxkIENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbiAgYXBwZWFyYW5jZT86IHtcbiAgICBzdGFuZGFyZD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKVxuICAgIGZpbGxlZD86IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKVxuICAgIG91dGxpbmVkPzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpXG4gICAgW25hbWU6IHN0cmluZ106IFN0eWxlQ29sbGVjdGlvbjwoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSk+XG4gICAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKSB8IHVuZGVmaW5lZFxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5RmllbGRWYXJpYWJsZXMge1xuICBmaWVsZD86IEx5RmllbGRUaGVtZTtcbn1cblxuLyoqIEx5RmllbGQgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0UgPSAnc3RhbmRhcmQnO1xuY29uc3QgREVGQVVMVF9XSVRIX0NPTE9SID0gJ3ByaW1hcnknO1xuXG5jb25zdCBpbnB1dFRleHQgPSBbXG4gICd0ZXh0JyxcbiAgJ251bWJlcicsXG4gICdwYXNzd29yZCcsXG4gICdzZWFyY2gnLFxuICAndGVsJyxcbiAgJ3VybCdcbl07XG5cblxuZXhwb3J0IGNvbnN0IFNUWUxFX1NFTEVDVF9BUlJPVyA9IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfTo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDonJzt3aWR0aDowO2hlaWdodDowO2JvcmRlci1sZWZ0OjAuMzEyNWVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDowLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItdG9wOjAuMzEyNWVtIHNvbGlkO3RvcDo1MCU7e2FmdGVyfTowO21hcmdpbi10b3A6LTAuMTU2MjVlbTtwb2ludGVyLWV2ZW50czpub25lO31gO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5RmllbGRWYXJpYWJsZXMsIHJlZjogVGhlbWVSZWYpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICBjb25zdCB7YmVmb3JlLCBhZnRlciB9ID0gdGhlbWU7XG4gIGNvbnN0IHNoYWtlID0ga2V5ZnJhbWVzVW5pcXVlSWQubmV4dCgpO1xuICByZXR1cm4ge1xuICAgICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gICAgJGdsb2JhbDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgQGtleWZyYW1lcyAke3NoYWtlfXske2NsYXNzTmFtZX0gMCV7bWFyZ2luLSR7YmVmb3JlfTowO30ke2NsYXNzTmFtZX0gNDAle21hcmdpbi0ke2JlZm9yZX06MnB4O30ke2NsYXNzTmFtZX0gNTAle21hcmdpbi0ke2JlZm9yZX06LTJweDt9JHtjbGFzc05hbWV9IDcwJXttYXJnaW4tJHtiZWZvcmV9OjJweDt9JHtjbGFzc05hbWV9IDEwMCV7bWFyZ2luLSR7YmVmb3JlfTowO319YCxcbiAgICByb290OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi10b3A6MWVtO2xpbmUtaGVpZ2h0OjEuNTt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKFxuICAgICAgICAgICh0aGVtZS5maWVsZFxuICAgICAgICAgICAgJiYgdGhlbWUuZmllbGQucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLmZpZWxkLnJvb3QgaW5zdGFuY2VvZiBTdHlsZUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgPyB0aGVtZS5maWVsZC5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKGNsYXNzZXMpKVxuICAgICAgICAgICAgICA6IHRoZW1lLmZpZWxkLnJvb3QoY2xhc3NlcykpXG4gICAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmhpbnR9LCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuZXJyb3J9e2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOi43NWVtO21hcmdpbi10b3A6LjI1ZW07fWAsXG4gICAgYW5pbWF0aW9uczogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMubGFiZWxTcGFufXt0cmFuc2l0aW9uOmZvbnQtc2l6ZSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zO30ke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmxhYmVsfXt0cmFuc2l0aW9uOiR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXM7fWAsXG4gICAgY29udGFpbmVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17aGVpZ2h0OjEwMCU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7fSR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9OmFmdGVyYCl9JHtjbGFzc05hbWV9OmFmdGVye2NvbnRlbnQ6Jyc7cG9pbnRlci1ldmVudHM6bm9uZTt9YCxcbiAgICBmaWVsZHNldDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX17bWFyZ2luOjA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowO31gLFxuICAgIGZpZWxkc2V0U3BhbjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3BhZGRpbmc6MDtoZWlnaHQ6MnB4O31gLFxuICAgIGxhYmVsU3BhbjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21heC13aWR0aDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO31gLFxuICAgIHByZWZpeDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21heC1oZWlnaHQ6MmVtO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7fWAsXG4gICAgaW5maXg6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2FsaWduLWl0ZW1zOmJhc2VsaW5lO21pbi13aWR0aDowO3dpZHRoOjE4MHB4O2ZsZXg6MSAwO31gLFxuICAgIHN1ZmZpeDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21heC1oZWlnaHQ6MmVtO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7fWAsXG4gICAgbGFiZWxDb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9e3BvaW50ZXItZXZlbnRzOm5vbmU7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7fWAsXG4gICAgbGFiZWxTcGFjaW5nU3RhcnQ6IG51bGwsXG4gICAgbGFiZWxDZW50ZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7fWAsXG4gICAgbGFiZWxTcGFjaW5nRW5kOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZmxleDoxO31gLFxuICAgIGxhYmVsOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfXttYXJnaW46MDtib3JkZXI6bm9uZTtwb2ludGVyLWV2ZW50czpub25lO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO292ZXJmbG93OmhpZGRlbjt3aWR0aDoxMDAlO31gLFxuICAgIGlzRmxvYXRpbmdMYWJlbDogbnVsbCxcbiAgICBmbG9hdGluZ0xhYmVsOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5sYWJlbFNwYW59e2ZvbnQtc2l6ZTo3NSU7fWAsXG4gICAgcGxhY2Vob2xkZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9e3BvaW50ZXItZXZlbnRzOm5vbmU7fWAsXG4gICAgZm9jdXNlZDogbnVsbCxcbiAgICBpbnB1dE5hdGl2ZTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3Jlc2l6ZTp2ZXJ0aWNhbDtwYWRkaW5nOjA7b3V0bGluZTpub25lO2JvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6aW5oZXJpdDtmb250OmluaGVyaXQ7d2lkdGg6MTAwJTt9c2VsZWN0JHtjbGFzc05hbWV9ey1tb3otYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7ZGlzcGxheTppbmxpbmUtZmxleDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZy1hZnRlcjoxZW07fXNlbGVjdCR7Y2xhc3NOYW1lfSBvcHRpb246bm90KFtkaXNhYmxlZF0pe2NvbG9yOmluaXRpYWw7fXNlbGVjdCR7Y2xhc3NOYW1lfSBvcHRncm91cDpub3QoW2Rpc2FibGVkXSl7Y29sb3I6aW5pdGlhbDt9c2VsZWN0JHtjbGFzc05hbWV9OjotbXMtZXhwYW5ke2Rpc3BsYXk6bm9uZTt9c2VsZWN0JHtjbGFzc05hbWV9OjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowO31zZWxlY3Qke2NsYXNzTmFtZX06bm90KDpkaXNhYmxlZCl7Y3Vyc29yOnBvaW50ZXI7fXNlbGVjdCR7Y2xhc3NOYW1lfTo6LW1zLXZhbHVle2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDowIDA7fWAsXG4gICAgaGludENvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21pbi1oZWlnaHQ6MS4yNWVtO2xpbmUtaGVpZ2h0OjEuMjU7fSR7Y2xhc3NOYW1lfSA+IGRpdntkaXNwbGF5OmZsZXg7ZmxleDoxIDAgYXV0bzttYXgtd2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47fWAsXG4gICAgZGlzYWJsZWQ6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0sJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5sYWJlbH0sJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5jb250YWluZXJ9OmFmdGVye2NvbG9yOiR7dGhlbWUuZGlzYWJsZWQuZGVmYXVsdH07Y3Vyc29yOmRlZmF1bHQ7fWAsXG4gICAgaGludDogbnVsbCxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBlcnJvclN0YXRlOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5sYWJlbH0sJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5oaW50Q29udGFpbmVyfSwke2NsYXNzTmFtZX0ke2NsYXNzZXMuc2VsZWN0QXJyb3d9ICR7Y2xhc3Nlcy5pbmZpeH06YWZ0ZXJ7Y29sb3I6JHt0aGVtZS53YXJuLmRlZmF1bHR9IWltcG9ydGFudDt9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5maWVsZHNldH0sJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5jb250YWluZXJ9OmFmdGVye2JvcmRlci1jb2xvcjoke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50O30ke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmlucHV0TmF0aXZlfXtjYXJldC1jb2xvcjoke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50O30ke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmhpbnRDb250YWluZXJ9IGx5LWhpbnQ6bm90KCR7Y2xhc3Nlcy5oaW50QWZ0ZXJ9KXtkaXNwbGF5Om5vbmU7fSR7Y2xhc3NOYW1lfSAke2NsYXNzZXMubGFiZWxTcGFufXthbmltYXRpb246JHtzaGFrZX0gJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fW1zICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufTt9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5pbnB1dE5hdGl2ZX06OnNlbGVjdGlvbiwke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmlucHV0TmF0aXZlfTo6LW1vei1zZWxlY3Rpb257YmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLndhcm4uZGVmYXVsdH0gIWltcG9ydGFudDtjb2xvcjoke3RoZW1lLndhcm4uY29udHJhc3R9ICFpbXBvcnRhbnQ7fWAsXG4gICAgaGludEFmdGVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWFyZ2luLSR7YmVmb3JlfTphdXRvO31gLFxuICAgIGhpbnRCZWZvcmU6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW4tJHthZnRlcn06YXV0bzt9YCxcbiAgICBzZWxlY3RBcnJvdzogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuaW5maXh9OjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OicnO3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLWxlZnQ6MC4zMTI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0OjAuMzEyNWVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci10b3A6MC4zMTI1ZW0gc29saWQ7dG9wOjUwJTske2FmdGVyfTowO21hcmdpbi10b3A6LTAuMTU2MjVlbTtwb2ludGVyLWV2ZW50czpub25lO31gXG4gIH07XG59O1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkJyxcbiAgZXhwb3J0QXM6ICdseUZvcm1GaWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnZmllbGQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeUhvc3RDbGFzcyxcbiAgICBTdHlsZVJlbmRlcmVyLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgcHJvdGVjdGVkIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfY29sb3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9jb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfaXNGbG9hdGluZzogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9mbG9hdGluZ0xhYmVsOiBib29sZWFuO1xuICBwcml2YXRlIF9maWVsc2V0U3BhbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX21hcmdpblN0YXJ0Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfbWFyZ2luRW5kQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZnVsbFdpZHRoOiBib29sZWFuO1xuICBwcml2YXRlIF9mdWxsV2lkdGhDbGFzcz86IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9sYWJlbENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcjInLCB7IHN0YXRpYzogZmFsc2UgfSkgX2xhYmVsQ29udGFpbmVyMjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbFNwYW4nLCB7IHN0YXRpYzogZmFsc2UgfSkgX2xhYmVsU3BhbjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19wcmVmaXhDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX3ByZWZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19zdWZmaXhDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX3N1ZmZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19maWVsZHNldExlZ2VuZCcsIHsgc3RhdGljOiBmYWxzZSB9KSBfZmllbGRzZXRMZWdlbmQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlGaWVsZENvbnRyb2xCYXNlKSwgeyBzdGF0aWM6IGZhbHNlIH0pIF9jb250cm9sPzogTHlGaWVsZENvbnRyb2xCYXNlO1xuICBAQ29udGVudENoaWxkKEx5UGxhY2Vob2xkZXIsIHsgc3RhdGljOiBmYWxzZSB9KSBfcGxhY2Vob2xkZXJDaGlsZDogTHlQbGFjZWhvbGRlcjtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsLCB7IHN0YXRpYzogZmFsc2UgfSkgX2xhYmVsQ2hpbGQ6IEx5TGFiZWw7XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlIaW50KSBfaGludENoaWxkcmVuOiBRdWVyeUxpc3Q8THlIaW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihMeVByZWZpeCkgX3ByZWZpeENoaWxkcmVuOiBRdWVyeUxpc3Q8THlQcmVmaXg+O1xuICBAQ29udGVudENoaWxkcmVuKEx5U3VmZml4KSBfc3VmZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeVN1ZmZpeD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlFcnJvcikgX2Vycm9yQ2hpbGRyZW46IFF1ZXJ5TGlzdDxMeUVycm9yPjtcblxuICBnZXQgZXJyb3JTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbCA/IHRoaXMuX2NvbnRyb2wuZXJyb3JTdGF0ZSA6IGZhbHNlO1xuICB9XG5cbiAgQElucHV0KCkgcGVyc2lzdGVudEhpbnQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGZ1bGxXaWR0aCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLl9mdWxsV2lkdGhDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgZnVsbFdpZHRoYCxcbiAgICAgICAge1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLFxuICAgICAgICB0aGlzLl9mdWxsV2lkdGhDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9mdWxsV2lkdGhDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZnVsbFdpZHRoQ2xhc3MpO1xuICAgICAgdGhpcy5fZnVsbFdpZHRoQ2xhc3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHRoaXMuX2Z1bGxXaWR0aCA9IG5ld1ZhbDtcbiAgfVxuICBnZXQgZnVsbFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl9mdWxsV2lkdGg7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbGFiZWwgaXMgZmxvYXRpbmcuICovXG4gIEBJbnB1dCgpXG4gIHNldCBmbG9hdGluZ0xhYmVsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Zsb2F0aW5nTGFiZWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gIH1cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nTGFiZWw7XG4gIH1cblxuICAvKiogVGhlbWUgY29sb3IgZm9yIHRoZSBjb21wb25lbnQuICovXG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX2NvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQuY29sb3I6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgICAgY29uc3QgY29udHJhc3QgPSB0aGVtZS5jb2xvck9mKGAke3ZhbH06Y29udHJhc3RgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn06YWZ0ZXIsICZ7Zm9jdXNlZH17c2VsZWN0QXJyb3d9IHtpbmZpeH06YWZ0ZXJgXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmV9YF06IHtcbiAgICAgICAgICAgIGNhcmV0Q29sb3I6IGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJiB7aW5wdXROYXRpdmV9OjpzZWxlY3Rpb24nOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgY29sb3I6IGNvbnRyYXN0XG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJiB7aW5wdXROYXRpdmV9OjotbW96LXNlbGVjdGlvbic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBjb2xvcjogY29udHJhc3RcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xvckNsYXNzLCBTVFlMRV9QUklPUklUWSArIDEsIFNUWUxFUyk7XG4gICAgfVxuICB9XG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKiogVGhlIGZpZWxkIGFwcGVhcmFuY2Ugc3R5bGUuICovXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgdGhpc1sweDFdID0gdGhpcy5fc3R5bGVSZW5kZXJlci5hZGQoXG4gICAgICAgIGBseS1maWVsZC5hcHBlYXJhbmNlOiR7dmFsfWAsXG4gICAgICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeUZpZWxkVmFyaWFibGVzLCByZWYpID0+IHtcbiAgICAgICAgICBjb25zdCBjbGFzc2VzID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gICAgICAgICAgaWYgKHRoZW1lLmZpZWxkICYmIHRoZW1lLmZpZWxkLmFwcGVhcmFuY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcGVhcmFuY2UgPSB0aGVtZS5maWVsZC5hcHBlYXJhbmNlW3ZhbF07XG4gICAgICAgICAgICBpZiAoYXBwZWFyYW5jZSkge1xuICAgICAgICAgICAgICByZXR1cm4gYXBwZWFyYW5jZSBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICAgID8gYXBwZWFyYW5jZS5zZXRUcmFuc2Zvcm1lcigoXykgPT4gXyhjbGFzc2VzKSkuY3NzXG4gICAgICAgICAgICAgICAgOiBhcHBlYXJhbmNlKGNsYXNzZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuZmllbGQuYXBwZWFyYW5jZWApO1xuICAgICAgfSwgU1RZTEVfUFJJT1JJVFksIHRoaXNbMHgxXSk7XG4gICAgfVxuICB9XG4gIGdldCBhcHBlYXJhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hcHBlYXJhbmNlO1xuICB9XG5cbiAgWzB4MV06IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50T2JzZXJ2ZXI6IEVsZW1lbnRPYnNlcnZlcixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3N0eWxlUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXJcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMuY29sb3IgPSBERUZBVUxUX1dJVEhfQ09MT1I7XG4gICAgfVxuICAgIGlmICghdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSBERUZBVUxUX0FQUEVBUkFOQ0U7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2NvbnRyb2whLnN0YXRlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLl9jb250cm9sIS5uZ0NvbnRyb2w7XG5cbiAgICAvLyBSdW4gY2hhbmdlIGRldGVjdGlvbiBpZiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICBpZiAobmdDb250cm9sICYmIG5nQ29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgIG5nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3ByZWZpeENvbnRhaW5lcikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fcHJlZml4Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuYmVmb3JlKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuYmVmb3JlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc3VmZml4Q29udGFpbmVyKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9zdWZmaXhDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5hZnRlcik7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmFmdGVyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGFiZWxTcGFuKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gdGhpcyBmaXggd2l0aCBvZiBsYWJlbFxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9wcmVmaXhDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fcHJlZml4Q29udGFpbmVyO1xuICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLmRlc3Ryb3koZWwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3VmZml4Q29udGFpbmVyKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX3N1ZmZpeENvbnRhaW5lcjtcbiAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5kZXN0cm95KGVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xhYmVsU3Bhbikge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9sYWJlbFNwYW47XG4gICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIuZGVzdHJveShlbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldChlbDogRWxlbWVudCwgZGlyOiBEaXJBbGlhcykge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGZpZWxkTGVnZW5kc3R5bGUubWFyZ2luJHtkaXJ9OiR7d2lkdGh9YCwgKCkgPT4gKHtcbiAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXRTcGFufWBdOiB7XG4gICAgICAgIFtgbWFyZ2luLSR7ZGlyfWBdOiBgJHt3aWR0aH1weGBcbiAgICAgIH1cbiAgICB9KSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICBpZiAoZGlyID09PSBEaXJBbGlhcy5iZWZvcmUpIHtcbiAgICAgIHRoaXMuX21hcmdpblN0YXJ0Q2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX21hcmdpblN0YXJ0Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tYXJnaW5FbmRDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fbWFyZ2luRW5kQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZpZWxzZXRTcGFuKCkge1xuICAgIGxldCB7IHdpZHRoIH0gPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoIXRoaXMuX2lzRmxvYXRpbmcpIHtcbiAgICAgIHdpZHRoIC09IHdpZHRoIC8gMTAwICogMjU7XG4gICAgfVxuICAgIC8qKiBBZGQgNnB4IG9mIHNwYWNpbmcgKi9cbiAgICB3aWR0aCArPSA2O1xuICAgIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgc3R5bGUuZmllbGRzZXRTcGFuRm9jdXNlZDoke3dpZHRofWAsIHtcbiAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWx9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldFNwYW59YF06IHt3aWR0aDogYCR7d2lkdGh9cHhgfVxuICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbCAmJiB0aGlzLl9jb250cm9sLnBsYWNlaG9sZGVyICYmICF0aGlzLl9sYWJlbENoaWxkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xhYmVsQ2hpbGQgfHwgdGhpcy5fcGxhY2Vob2xkZXJDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIF9pc1BsYWNlaG9sZGVyKCkge1xuICAgIGlmICgodGhpcy5fbGFiZWxDaGlsZCAmJiB0aGlzLl9jb250cm9sICYmIHRoaXMuX2NvbnRyb2wucGxhY2Vob2xkZXIpIHx8ICh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzRW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5fY29udHJvbCA/IHRoaXMuX2NvbnRyb2wudmFsdWUgOiBudWxsO1xuICAgIHJldHVybiB2YWwgPT09ICcnIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2xhYmVsQ29udGFpbmVyMikge1xuICAgICAgY29uc3QgaXNGbG9hdGluZyA9IHRoaXMuX2NvbnRyb2whLmZsb2F0aW5nTGFiZWwgfHwgdGhpcy5mbG9hdGluZ0xhYmVsO1xuICAgICAgaWYgKHRoaXMuX2lzRmxvYXRpbmcgIT09IGlzRmxvYXRpbmcpIHtcbiAgICAgICAgdGhpcy5faXNGbG9hdGluZyA9IGlzRmxvYXRpbmc7XG4gICAgICAgIGlmIChpc0Zsb2F0aW5nKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fbGFiZWxDb250YWluZXIyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9sYWJlbENvbnRhaW5lcjIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWwpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb250cm9sKSB7XG4gICAgICBpZiAodGhpcy5fY29udHJvbC5mb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6XG4gICAgICAnaW5wdXRbbHlJbnB1dF0sIHRleHRhcmVhW2x5SW5wdXRdLCBpbnB1dFtseU5hdGl2ZUNvbnRyb2xdLCB0ZXh0YXJlYVtseU5hdGl2ZUNvbnRyb2xdLCBzZWxlY3RbbHlOYXRpdmVDb250cm9sXScsXG4gIGV4cG9ydEFzOiAnTHlOYXRpdmVDb250cm9sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBMeUZpZWxkQ29udHJvbEJhc2UsIHVzZUV4aXN0aW5nOiBMeU5hdGl2ZUNvbnRyb2wgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5TmF0aXZlQ29udHJvbCBpbXBsZW1lbnRzIEx5RmllbGRDb250cm9sQmFzZSwgT25Jbml0LCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICByZWFkb25seSBzdGF0ZUNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9oYXNEaXNhYmxlZENsYXNzPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZXJyb3JDbGFzcz86IHN0cmluZztcbiAgcHJpdmF0ZSBfY3Vyc29yQ2xhc3M6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgX2lzU2VsZWN0SW5wdXQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Zvcm06IE5nRm9ybSB8IEZvcm1Hcm91cERpcmVjdGl2ZSB8IG51bGwgPSB0aGlzLl9wYXJlbnRGb3JtIHx8IHRoaXMuX3BhcmVudEZvcm1Hcm91cDtcbiAgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZXJyb3JTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JykgX29uSW5wdXQoKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIF9vbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgX29uRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX2ZvY3VzZWQgIT09IHRydWUpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLnZhbHVlID0gdmFsO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEhvc3RFbGVtZW50KCkudmFsdWU7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuICovXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgICBpZiAoIXZhbCAmJiB0aGlzLl9oYXNEaXNhYmxlZENsYXNzKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuZGlzYWJsZWQpO1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5faGFzRGlzYWJsZWRDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWwpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnNvckNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY3Vyc29yQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9oYXNEaXNhYmxlZENsYXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuXG4gIGdldCBlbXB0eSgpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlO1xuICAgIHJldHVybiB2YWwgPT09ICcnIHx8IHZhbCA9PSBudWxsO1xuICB9XG5cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eSB8fCAodGhpcy5faXNTZWxlY3RJbnB1dCA/IHRoaXMuX2hhc0xhYmVsU2VsZWN0aW9uT3B0aW9uKCkgOiBmYWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9maWVsZDogTHlGaWVsZCxcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCAncGxhY2Vob2xkZXInLCAnwq0nKTtcblxuICAgIGNvbnN0IHsgbmF0aXZlRWxlbWVudCB9ID0gdGhpcy5fZWw7XG5cbiAgICBpZiAobmF0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy5faXNTZWxlY3RJbnB1dCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgY2xhc3Mge3NlbGVjdEFycm93fSB0byBgPHNlbGVjdD4gbm90IG11bHRpcGxlYFxuICAgIGlmICh0aGlzLl9maWVsZCAmJiBuYXRpdmVFbGVtZW50LnR5cGUgPT09ICdzZWxlY3Qtb25lJykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2ZpZWxkLmNsYXNzZXMuc2VsZWN0QXJyb3cpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHN0eWxlIGN1cnNvciBvbmx5IGZvciBpbnB1dCBvZiB0eXBlIHRleHRcbiAgICBpZiAobmF0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQgfHxcbiAgICAgICAgaW5wdXRUZXh0LnNvbWUodHlwZSA9PiB0eXBlID09PSBuYXRpdmVFbGVtZW50LnR5cGUpKSB7XG4gICAgICB0aGlzLl9jdXJzb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKCdseUZpZWxkLnRleHQnLCB7XG4gICAgICAgICcmIHtpbmZpeH0nOiB7XG4gICAgICAgICAgY3Vyc29yOiAndGV4dCdcbiAgICAgICAgfVxuICAgICAgfSwgU1RZTEVfUFJJT1JJVFksIFNUWUxFUyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0SW5wdXQpIHtcbiAgICAgIHRoaXMuX2N1cnNvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoJ2x5RmllbGQuc2VsZWN0Jywge1xuICAgICAgICAnJiB7aW5maXh9Jzoge1xuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgIH1cbiAgICAgIH0sIFNUWUxFX1BSSU9SSVRZLCBTVFlMRVMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jdXJzb3JDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2N1cnNvckNsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBkZWZhdWx0IHN0eWxlc1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKG5hdGl2ZUVsZW1lbnQsIHRoaXMuX2ZpZWxkLmNsYXNzZXMuaW5wdXROYXRpdmUpO1xuXG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5uZ0NvbnRyb2w7XG4gICAgLy8gdXBkYXRlIHN0eWxlcyBvbiBkaXNhYmxlZFxuICAgIGlmIChuZ0NvbnRyb2wgJiYgbmdDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcbiAgICAgIG5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSAhIW5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5fZmllbGQuX2NvbnRyb2wpIHtcbiAgICAgIGNvbnN0IG9sZFZhbCA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICAgIGNvbnN0IG5ld1ZhbCA9ICEhKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmludmFsaWQgJiYgKHRoaXMubmdDb250cm9sLnRvdWNoZWQgfHwgKHRoaXMuX2Zvcm0gJiYgdGhpcy5fZm9ybS5zdWJtaXR0ZWQpKSk7XG4gICAgICBpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcbiAgICAgICAgdGhpcy5lcnJvclN0YXRlID0gbmV3VmFsO1xuICAgICAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgICAgICBjb25zdCBlcnJvckNsYXNzID0gdGhpcy5fZmllbGQuY2xhc3Nlcy5lcnJvclN0YXRlO1xuICAgICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCBlcnJvckNsYXNzKTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBlcnJvckNsYXNzO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZXJyb3JDbGFzcykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIGVycm9yQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIG9uQ29udGFpbmVyQ2xpY2soX2U6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7XG4gIH1cblxuICAvKiogRm9jdXNlcyB0aGUgaW5wdXQuICovXG4gIGZvY3VzKCk6IHZvaWQgeyB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmZvY3VzKCk7IH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9oYXNMYWJlbFNlbGVjdGlvbk9wdGlvbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2dldEhvc3RFbGVtZW50KCkgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgY29uc3Qgb3B0aW9uID0gZWwuc2VsZWN0ZWRPcHRpb25zID8gZWwuc2VsZWN0ZWRPcHRpb25zLml0ZW0oMCkgOiBudWxsO1xuICAgIHJldHVybiBvcHRpb24gPyAhIW9wdGlvbi5sYWJlbCA6IGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==