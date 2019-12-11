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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFVBQVUsRUFDVixPQUFPLEVBQ04sTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFFBQVEsRUFDUixjQUFjLEVBQ2QsZUFBZSxFQUNmLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLGVBQWUsRUFDZixTQUFTLEVBQ1QsYUFBYSxFQUNiLFdBQVcsRUFDWCxhQUFhLEVBQ2IscUJBQXFCLEVBQ3JCLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDaEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVB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QjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLGlCQUFlLEVBQUU7YUFDOUQ7U0FDRixDQUFDO1FBdUdHLG1CQUFBLFFBQVEsRUFBRSxDQUFBO1FBRVYsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtRQUNsQixtQkFBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLG1CQUFBLFFBQVEsRUFBRSxDQUFBO09BMUdGLGVBQWUsQ0F3TTNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhNRCxJQXdNQztTQXhNWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgTmdab25lLFxuICBEaXJlY3RpdmUsXG4gIE9uRGVzdHJveSxcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIGZvcndhcmRSZWYsXG4gIERvQ2hlY2tcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgRWxlbWVudE9ic2VydmVyLFxuICBQbGF0Zm9ybSxcbiAgdG9Cb29sZWFuLFxuICBEaXJBbGlhcyxcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUsXG4gIEx5SG9zdENsYXNzLFxuICBTdHlsZVJlbmRlcmVyLFxuICBzdHlsZVRlbXBsYXRlVG9TdHJpbmcsXG4gIFRoZW1lUmVmLFxuICBMWV9DT01NT05fU1RZTEVTLFxuICBrZXlmcmFtZXNVbmlxdWVJZCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUxhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5pbXBvcnQgeyBMeVBsYWNlaG9sZGVyIH0gZnJvbSAnLi9wbGFjZWhvbGRlcic7XG5pbXBvcnQgeyBMeUhpbnQgfSBmcm9tICcuL2hpbnQnO1xuaW1wb3J0IHsgTHlQcmVmaXggfSBmcm9tICcuL3ByZWZpeCc7XG5pbXBvcnQgeyBMeVN1ZmZpeCB9IGZyb20gJy4vc3VmZml4JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5nQ29udHJvbCwgTmdGb3JtLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMeUVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBMeUZpZWxkQ29udHJvbEJhc2UgfSBmcm9tICcuL2ZpZWxkLWNvbnRyb2wtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlGaWVsZFRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgRmllbGQgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xuICBhcHBlYXJhbmNlPzoge1xuICAgIHN0YW5kYXJkPzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpXG4gICAgZmlsbGVkPzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpXG4gICAgb3V0bGluZWQ/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgICAgfCAoKGNsYXNzZXM6IEx5Q2xhc3Nlczx0eXBlb2YgU1RZTEVTPikgPT4gU3R5bGVUZW1wbGF0ZSlcbiAgICBbbmFtZTogc3RyaW5nXTogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpIHwgdW5kZWZpbmVkXG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTHlGaWVsZFZhcmlhYmxlcyB7XG4gIGZpZWxkPzogTHlGaWVsZFRoZW1lO1xufVxuXG4vKiogTHlGaWVsZCAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfQVBQRUFSQU5DRSA9ICdzdGFuZGFyZCc7XG5jb25zdCBERUZBVUxUX1dJVEhfQ09MT1IgPSAncHJpbWFyeSc7XG5cbmNvbnN0IGlucHV0VGV4dCA9IFtcbiAgJ3RleHQnLFxuICAnbnVtYmVyJyxcbiAgJ3Bhc3N3b3JkJyxcbiAgJ3NlYXJjaCcsXG4gICd0ZWwnLFxuICAndXJsJ1xuXTtcblxuXG5leHBvcnQgY29uc3QgU1RZTEVfU0VMRUNUX0FSUk9XID0gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9OjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OicnO3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLWxlZnQ6MC4zMTI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0OjAuMzEyNWVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci10b3A6MC4zMTI1ZW0gc29saWQ7dG9wOjUwJTt7YWZ0ZXJ9OjA7bWFyZ2luLXRvcDotMC4xNTYyNWVtO3BvaW50ZXItZXZlbnRzOm5vbmU7fWA7XG5cbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzICYgTHlGaWVsZFZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIGNvbnN0IHtiZWZvcmUsIGFmdGVyIH0gPSB0aGVtZTtcbiAgY29uc3Qgc2hha2UgPSBrZXlmcmFtZXNVbmlxdWVJZC5uZXh0KCk7XG4gIHJldHVybiB7XG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICAkZ2xvYmFsOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGBAa2V5ZnJhbWVzICR7c2hha2V9eyR7Y2xhc3NOYW1lfSAwJXttYXJnaW4tJHtiZWZvcmV9OjA7fSR7Y2xhc3NOYW1lfSA0MCV7bWFyZ2luLSR7YmVmb3JlfToycHg7fSR7Y2xhc3NOYW1lfSA1MCV7bWFyZ2luLSR7YmVmb3JlfTotMnB4O30ke2NsYXNzTmFtZX0gNzAle21hcmdpbi0ke2JlZm9yZX06MnB4O30ke2NsYXNzTmFtZX0gMTAwJXttYXJnaW4tJHtiZWZvcmV9OjA7fX1gLFxuICAgIHJvb3Q6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLXRvcDoxZW07bGluZS1oZWlnaHQ6MS41O30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoXG4gICAgICAgICAgKHRoZW1lLmZpZWxkXG4gICAgICAgICAgICAmJiB0aGVtZS5maWVsZC5yb290XG4gICAgICAgICAgICAmJiAodGhlbWUuZmllbGQucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICA/IHRoZW1lLmZpZWxkLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oY2xhc3NlcykpXG4gICAgICAgICAgICAgIDogdGhlbWUuZmllbGQucm9vdChjbGFzc2VzKSlcbiAgICAgICAgICApKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuaGludH0sJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5lcnJvcn17ZGlzcGxheTpibG9jaztmb250LXNpemU6Ljc1ZW07bWFyZ2luLXRvcDouMjVlbTt9YCxcbiAgICBhbmltYXRpb25zOiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5sYWJlbFNwYW59e3RyYW5zaXRpb246Zm9udC1zaXplICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXM7fSR7Y2xhc3NOYW1lfSAke2NsYXNzZXMubGFiZWx9e3RyYW5zaXRpb246JHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259IC4ke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9czt9YCxcbiAgICBjb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtoZWlnaHQ6MTAwJTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDt9JHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX06YWZ0ZXJgKX0ke2NsYXNzTmFtZX06YWZ0ZXJ7Y29udGVudDonJztwb2ludGVyLWV2ZW50czpub25lO31gLFxuICAgIGZpZWxkc2V0OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfXttYXJnaW46MDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjA7fWAsXG4gICAgZmllbGRzZXRTcGFuOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cGFkZGluZzowO2hlaWdodDoycHg7fWAsXG4gICAgbGFiZWxTcGFuOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWF4LXdpZHRoOjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7fWAsXG4gICAgcHJlZml4OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWF4LWhlaWdodDoyZW07ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjt9YCxcbiAgICBpbmZpeDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246cmVsYXRpdmU7YWxpZ24taXRlbXM6YmFzZWxpbmU7bWluLXdpZHRoOjA7d2lkdGg6MTgwcHg7ZmxleDoxIDA7fWAsXG4gICAgc3VmZml4OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWF4LWhlaWdodDoyZW07ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjt9YCxcbiAgICBsYWJlbENvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX17cG9pbnRlci1ldmVudHM6bm9uZTtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTt9YCxcbiAgICBsYWJlbFNwYWNpbmdTdGFydDogbnVsbCxcbiAgICBsYWJlbENlbnRlcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTAwJTt9YCxcbiAgICBsYWJlbFNwYWNpbmdFbmQ6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtmbGV4OjE7fWAsXG4gICAgbGFiZWw6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7c3R5bGVUZW1wbGF0ZVRvU3RyaW5nKChMWV9DT01NT05fU1RZTEVTLmZpbGwpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9e21hcmdpbjowO2JvcmRlcjpub25lO3BvaW50ZXItZXZlbnRzOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjEwMCU7fWAsXG4gICAgaXNGbG9hdGluZ0xhYmVsOiBudWxsLFxuICAgIGZsb2F0aW5nTGFiZWw6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmxhYmVsU3Bhbn17Zm9udC1zaXplOjc1JTt9YCxcbiAgICBwbGFjZWhvbGRlcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtzdHlsZVRlbXBsYXRlVG9TdHJpbmcoKExZX0NPTU1PTl9TVFlMRVMuZmlsbCksIGAke2NsYXNzTmFtZX1gKX0ke2NsYXNzTmFtZX17cG9pbnRlci1ldmVudHM6bm9uZTt9YCxcbiAgICBmb2N1c2VkOiBudWxsLFxuICAgIGlucHV0TmF0aXZlOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cmVzaXplOnZlcnRpY2FsO3BhZGRpbmc6MDtvdXRsaW5lOm5vbmU7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjppbmhlcml0O2ZvbnQ6aW5oZXJpdDt3aWR0aDoxMDAlO31zZWxlY3Qke2NsYXNzTmFtZX17LW1vei1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtkaXNwbGF5OmlubGluZS1mbGV4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nLSR7YWZ0ZXJ9OjFlbTt9c2VsZWN0JHtjbGFzc05hbWV9IG9wdGlvbjpub3QoW2Rpc2FibGVkXSl7Y29sb3I6aW5pdGlhbDt9c2VsZWN0JHtjbGFzc05hbWV9IG9wdGdyb3VwOm5vdChbZGlzYWJsZWRdKXtjb2xvcjppbml0aWFsO31zZWxlY3Qke2NsYXNzTmFtZX06Oi1tcy1leHBhbmR7ZGlzcGxheTpub25lO31zZWxlY3Qke2NsYXNzTmFtZX06Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjA7fXNlbGVjdCR7Y2xhc3NOYW1lfTpub3QoOmRpc2FibGVkKXtjdXJzb3I6cG9pbnRlcjt9c2VsZWN0JHtjbGFzc05hbWV9OjotbXMtdmFsdWV7Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOjAgMDt9YCxcbiAgICBoaW50Q29udGFpbmVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWluLWhlaWdodDoxLjI1ZW07bGluZS1oZWlnaHQ6MS4yNTt9JHtjbGFzc05hbWV9ID4gZGl2e2Rpc3BsYXk6ZmxleDtmbGV4OjEgMCBhdXRvO21heC13aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjt9YCxcbiAgICBkaXNhYmxlZDogKCApID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfSwke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmxhYmVsfSwke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmNvbnRhaW5lcn06YWZ0ZXJ7Y29sb3I6JHt0aGVtZS5kaXNhYmxlZC5kZWZhdWx0fTtjdXJzb3I6ZGVmYXVsdDt9YCxcbiAgICBoaW50OiBudWxsLFxuICAgIGVycm9yOiBudWxsLFxuICAgIGVycm9yU3RhdGU6ICggKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmxhYmVsfSwke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmhpbnRDb250YWluZXJ9LCR7Y2xhc3NOYW1lfSR7Y2xhc3Nlcy5zZWxlY3RBcnJvd30gJHtjbGFzc2VzLmluZml4fTphZnRlcntjb2xvcjoke3RoZW1lLndhcm4uZGVmYXVsdH0haW1wb3J0YW50O30ke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmZpZWxkc2V0fSwke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmNvbnRhaW5lcn06YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiR7dGhlbWUud2Fybi5kZWZhdWx0fSFpbXBvcnRhbnQ7fSR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuaW5wdXROYXRpdmV9e2NhcmV0LWNvbG9yOiR7dGhlbWUud2Fybi5kZWZhdWx0fSFpbXBvcnRhbnQ7fSR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuaGludENvbnRhaW5lcn0gbHktaGludDpub3QoJHtjbGFzc2VzLmhpbnRBZnRlcn0pe2Rpc3BsYXk6bm9uZTt9JHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5sYWJlbFNwYW59e2FuaW1hdGlvbjoke3NoYWtlfSAke3RoZW1lLmFuaW1hdGlvbnMuZHVyYXRpb25zLmNvbXBsZXh9bXMgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259O30ke2NsYXNzTmFtZX0gJHtjbGFzc2VzLmlucHV0TmF0aXZlfTo6c2VsZWN0aW9uLCR7Y2xhc3NOYW1lfSAke2NsYXNzZXMuaW5wdXROYXRpdmV9OjotbW96LXNlbGVjdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUud2Fybi5kZWZhdWx0fSAhaW1wb3J0YW50O2NvbG9yOiR7dGhlbWUud2Fybi5jb250cmFzdH0gIWltcG9ydGFudDt9YCxcbiAgICBoaW50QWZ0ZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXttYXJnaW4tJHtiZWZvcmV9OmF1dG87fWAsXG4gICAgaGludEJlZm9yZTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21hcmdpbi0ke2FmdGVyfTphdXRvO31gLFxuICAgIHNlbGVjdEFycm93OiAoICkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ICR7Y2xhc3Nlcy5pbmZpeH06OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6Jyc7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItbGVmdDowLjMxMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6MC4zMTI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXRvcDowLjMxMjVlbSBzb2xpZDt0b3A6NTAlOyR7YWZ0ZXJ9OjA7bWFyZ2luLXRvcDotMC4xNTYyNWVtO3BvaW50ZXItZXZlbnRzOm5vbmU7fWBcbiAgfTtcbn07XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQnLFxuICBleHBvcnRBczogJ2x5Rm9ybUZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICdmaWVsZC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXIsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlGaWVsZCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuICBwcm90ZWN0ZWQgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9jb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9pc0Zsb2F0aW5nOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Zsb2F0aW5nTGFiZWw6IGJvb2xlYW47XG4gIHByaXZhdGUgX2ZpZWxzZXRTcGFuQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfbWFyZ2luU3RhcnRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9tYXJnaW5FbmRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9mdWxsV2lkdGg6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Z1bGxXaWR0aENsYXNzPzogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgX2xhYmVsQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyMicsIHsgc3RhdGljOiBmYWxzZSB9KSBfbGFiZWxDb250YWluZXIyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsU3BhbicsIHsgc3RhdGljOiBmYWxzZSB9KSBfbGFiZWxTcGFuOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX3ByZWZpeENvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfcHJlZml4Q29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX3N1ZmZpeENvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfc3VmZml4Q29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2ZpZWxkc2V0TGVnZW5kJywgeyBzdGF0aWM6IGZhbHNlIH0pIF9maWVsZHNldExlZ2VuZDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeUZpZWxkQ29udHJvbEJhc2UpLCB7IHN0YXRpYzogZmFsc2UgfSkgX2NvbnRyb2w/OiBMeUZpZWxkQ29udHJvbEJhc2U7XG4gIEBDb250ZW50Q2hpbGQoTHlQbGFjZWhvbGRlciwgeyBzdGF0aWM6IGZhbHNlIH0pIF9wbGFjZWhvbGRlckNoaWxkOiBMeVBsYWNlaG9sZGVyO1xuICBAQ29udGVudENoaWxkKEx5TGFiZWwsIHsgc3RhdGljOiBmYWxzZSB9KSBfbGFiZWxDaGlsZDogTHlMYWJlbDtcbiAgQENvbnRlbnRDaGlsZHJlbihMeUhpbnQpIF9oaW50Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeUhpbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKEx5UHJlZml4KSBfcHJlZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeVByZWZpeD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlTdWZmaXgpIF9zdWZmaXhDaGlsZHJlbjogUXVlcnlMaXN0PEx5U3VmZml4PjtcbiAgQENvbnRlbnRDaGlsZHJlbihMeUVycm9yKSBfZXJyb3JDaGlsZHJlbjogUXVlcnlMaXN0PEx5RXJyb3I+O1xuXG4gIGdldCBlcnJvclN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250cm9sID8gdGhpcy5fY29udHJvbC5lcnJvclN0YXRlIDogZmFsc2U7XG4gIH1cblxuICBASW5wdXQoKSBwZXJzaXN0ZW50SGludDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgZnVsbFdpZHRoKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuX2Z1bGxXaWR0aENsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBmdWxsV2lkdGhgLFxuICAgICAgICB7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuX2dldEhvc3RFbGVtZW50KCksXG4gICAgICAgIHRoaXMuX2Z1bGxXaWR0aENsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2Z1bGxXaWR0aENsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9mdWxsV2lkdGhDbGFzcyk7XG4gICAgICB0aGlzLl9mdWxsV2lkdGhDbGFzcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5fZnVsbFdpZHRoID0gbmV3VmFsO1xuICB9XG4gIGdldCBmdWxsV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Z1bGxXaWR0aDtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBsYWJlbCBpcyBmbG9hdGluZy4gKi9cbiAgQElucHV0KClcbiAgc2V0IGZsb2F0aW5nTGFiZWwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmxvYXRpbmdMYWJlbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgfVxuICBnZXQgZmxvYXRpbmdMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxvYXRpbmdMYWJlbDtcbiAgfVxuXG4gIC8qKiBUaGVtZSBjb2xvciBmb3IgdGhlIGNvbXBvbmVudC4gKi9cbiAgQElucHV0KClcbiAgc2V0IGNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fY29sb3IpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1maWVsZC5jb2xvcjoke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhlbWUuY29sb3JPZih2YWwpO1xuICAgICAgICBjb25zdCBjb250cmFzdCA9IHRoZW1lLmNvbG9yT2YoYCR7dmFsfTpjb250cmFzdGApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfTphZnRlciwgJntmb2N1c2VkfXtzZWxlY3RBcnJvd30ge2luZml4fTphZnRlcmBdOiB7XG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldH1gXToge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmxhYmVsfWBdOiB7XG4gICAgICAgICAgICBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5pbnB1dE5hdGl2ZX1gXToge1xuICAgICAgICAgICAgY2FyZXRDb2xvcjogY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmIHtpbnB1dE5hdGl2ZX06OnNlbGVjdGlvbic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBjb2xvcjogY29udHJhc3RcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmIHtpbnB1dE5hdGl2ZX06Oi1tb3otc2VsZWN0aW9uJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGNvbG9yOiBjb250cmFzdFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3MsIFNUWUxFX1BSSU9SSVRZICsgMSwgU1RZTEVTKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIC8qKiBUaGUgZmllbGQgYXBwZWFyYW5jZSBzdHlsZS4gKi9cbiAgQElucHV0KClcbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgICB0aGlzWzB4MV0gPSB0aGlzLl9zdHlsZVJlbmRlcmVyLmFkZChcbiAgICAgICAgYGx5LWZpZWxkLmFwcGVhcmFuY2U6JHt2YWx9YCxcbiAgICAgICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5RmllbGRWYXJpYWJsZXMsIHJlZikgPT4ge1xuICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSByZWYuc2VsZWN0b3JzT2YoU1RZTEVTKTtcbiAgICAgICAgICBpZiAodGhlbWUuZmllbGQgJiYgdGhlbWUuZmllbGQuYXBwZWFyYW5jZSkge1xuICAgICAgICAgICAgY29uc3QgYXBwZWFyYW5jZSA9IHRoZW1lLmZpZWxkLmFwcGVhcmFuY2VbdmFsXTtcbiAgICAgICAgICAgIGlmIChhcHBlYXJhbmNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhcHBlYXJhbmNlIGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgPyBhcHBlYXJhbmNlLnNldFRyYW5zZm9ybWVyKChfKSA9PiBfKGNsYXNzZXMpKS5jc3NcbiAgICAgICAgICAgICAgICA6IGFwcGVhcmFuY2UoY2xhc3Nlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx9IG5vdCBmb3VuZCBpbiB0aGVtZS5maWVsZC5hcHBlYXJhbmNlYCk7XG4gICAgICB9LCBTVFlMRV9QUklPUklUWSwgdGhpc1sweDFdKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cblxuICBbMHgxXTogc3RyaW5nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgb25Gb2N1cygpIHtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRPYnNlcnZlcjogRWxlbWVudE9ic2VydmVyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfc3R5bGVSZW5kZXJlcjogU3R5bGVSZW5kZXJlclxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy5jb2xvciA9IERFRkFVTFRfV0lUSF9DT0xPUjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IERFRkFVTFRfQVBQRUFSQU5DRTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fY29udHJvbCEuc3RhdGVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5nQ29udHJvbCA9IHRoaXMuX2NvbnRyb2whLm5nQ29udHJvbDtcblxuICAgIC8vIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uIGlmIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgIGlmIChuZ0NvbnRyb2wgJiYgbmdDb250cm9sLnZhbHVlQ2hhbmdlcykge1xuICAgICAgbmdDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcHJlZml4Q29udGFpbmVyKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9wcmVmaXhDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5iZWZvcmUpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCBEaXJBbGlhcy5iZWZvcmUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zdWZmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3N1ZmZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmFmdGVyKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuYWZ0ZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9sYWJlbFNwYW4pIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX2xhYmVsU3Bhbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXRTcGFuKCk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXRTcGFuKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyB0aGlzIGZpeCB3aXRoIG9mIGxhYmVsXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX3ByZWZpeENvbnRhaW5lcikge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLl9wcmVmaXhDb250YWluZXI7XG4gICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIuZGVzdHJveShlbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zdWZmaXhDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5fc3VmZml4Q29udGFpbmVyO1xuICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLmRlc3Ryb3koZWwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbGFiZWxTcGFuKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuX2xhYmVsU3BhbjtcbiAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5kZXN0cm95KGVsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGaWVsc2V0KGVsOiBFbGVtZW50LCBkaXI6IERpckFsaWFzKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgZmllbGRMZWdlbmRzdHlsZS5tYXJnaW4ke2Rpcn06JHt3aWR0aH1gLCAoKSA9PiAoe1xuICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldFNwYW59YF06IHtcbiAgICAgICAgW2BtYXJnaW4tJHtkaXJ9YF06IGAke3dpZHRofXB4YFxuICAgICAgfVxuICAgIH0pLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgIGlmIChkaXIgPT09IERpckFsaWFzLmJlZm9yZSkge1xuICAgICAgdGhpcy5fbWFyZ2luU3RhcnRDbGFzcyA9IHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fbWFyZ2luU3RhcnRDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hcmdpbkVuZENsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9tYXJnaW5FbmRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldFNwYW4oKSB7XG4gICAgbGV0IHsgd2lkdGggfSA9IHRoaXMuX2xhYmVsU3Bhbi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghdGhpcy5faXNGbG9hdGluZykge1xuICAgICAgd2lkdGggLT0gd2lkdGggLyAxMDAgKiAyNTtcbiAgICB9XG4gICAgLyoqIEFkZCA2cHggb2Ygc3BhY2luZyAqL1xuICAgIHdpZHRoICs9IDY7XG4gICAgdGhpcy5fZmllbHNldFNwYW5DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBzdHlsZS5maWVsZHNldFNwYW5Gb2N1c2VkOiR7d2lkdGh9YCwge1xuICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0U3Bhbn1gXToge3dpZHRoOiBgJHt3aWR0aH1weGB9XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZmllbHNldFNwYW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIC8qKiBAaWdub3JlICovXG4gIF9pc0xhYmVsKCkge1xuICAgIGlmICh0aGlzLl9jb250cm9sICYmIHRoaXMuX2NvbnRyb2wucGxhY2Vob2xkZXIgJiYgIXRoaXMuX2xhYmVsQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbGFiZWxDaGlsZCB8fCB0aGlzLl9wbGFjZWhvbGRlckNoaWxkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzUGxhY2Vob2xkZXIoKSB7XG4gICAgaWYgKCh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX2NvbnRyb2wgJiYgdGhpcy5fY29udHJvbC5wbGFjZWhvbGRlcikgfHwgKHRoaXMuX2xhYmVsQ2hpbGQgJiYgdGhpcy5fcGxhY2Vob2xkZXJDaGlsZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNFbXB0eSgpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9jb250cm9sID8gdGhpcy5fY29udHJvbC52YWx1ZSA6IG51bGw7XG4gICAgcmV0dXJuIHZhbCA9PT0gJycgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmxvYXRpbmdMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5fbGFiZWxDb250YWluZXIyKSB7XG4gICAgICBjb25zdCBpc0Zsb2F0aW5nID0gdGhpcy5fY29udHJvbCEuZmxvYXRpbmdMYWJlbCB8fCB0aGlzLmZsb2F0aW5nTGFiZWw7XG4gICAgICBpZiAodGhpcy5faXNGbG9hdGluZyAhPT0gaXNGbG9hdGluZykge1xuICAgICAgICB0aGlzLl9pc0Zsb2F0aW5nID0gaXNGbG9hdGluZztcbiAgICAgICAgaWYgKGlzRmxvYXRpbmcpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9sYWJlbENvbnRhaW5lcjIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWwpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2xhYmVsQ29udGFpbmVyMi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wpIHtcbiAgICAgIGlmICh0aGlzLl9jb250cm9sLmZvY3VzZWQpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjpcbiAgICAgICdpbnB1dFtseUlucHV0XSwgdGV4dGFyZWFbbHlJbnB1dF0sIGlucHV0W2x5TmF0aXZlQ29udHJvbF0sIHRleHRhcmVhW2x5TmF0aXZlQ29udHJvbF0sIHNlbGVjdFtseU5hdGl2ZUNvbnRyb2xdJyxcbiAgZXhwb3J0QXM6ICdMeU5hdGl2ZUNvbnRyb2wnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEx5RmllbGRDb250cm9sQmFzZSwgdXNlRXhpc3Rpbmc6IEx5TmF0aXZlQ29udHJvbCB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlOYXRpdmVDb250cm9sIGltcGxlbWVudHMgTHlGaWVsZENvbnRyb2xCYXNlLCBPbkluaXQsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHN0YXRlQ2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgX2hhc0Rpc2FibGVkQ2xhc3M/OiBib29sZWFuO1xuICBwcml2YXRlIF9lcnJvckNsYXNzPzogc3RyaW5nO1xuICBwcml2YXRlIF9jdXJzb3JDbGFzczogc3RyaW5nIHwgbnVsbDtcbiAgcHJpdmF0ZSBfaXNTZWxlY3RJbnB1dDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZm9ybTogTmdGb3JtIHwgRm9ybUdyb3VwRGlyZWN0aXZlIHwgbnVsbCA9IHRoaXMuX3BhcmVudEZvcm0gfHwgdGhpcy5fcGFyZW50Rm9ybUdyb3VwO1xuICBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBlcnJvclN0YXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBfb25JbnB1dCgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgX29uQmx1cigpIHtcbiAgICBpZiAodGhpcy5fZm9jdXNlZCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBfb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5fZm9jdXNlZCAhPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh2YWwgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuX2dldEhvc3RFbGVtZW50KCkudmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS52YWx1ZTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC4gKi9cbiAgQEhvc3RCaW5kaW5nKClcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWwpO1xuICAgICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICAgIGlmICghdmFsICYmIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnNvckNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY3Vyc29yQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9oYXNEaXNhYmxlZENsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9maWVsZC5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgICAgICBpZiAodGhpcy5fY3Vyc29yQ2xhc3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2ZpZWxkLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jdXJzb3JDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2hhc0Rpc2FibGVkQ2xhc3MgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKClcbiAgQElucHV0KClcbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IHBsYWNlaG9sZGVyKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWw7XG4gIH1cbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjsgfVxuXG4gIGdldCBmb2N1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkO1xuICB9XG5cbiAgZ2V0IGVtcHR5KCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMudmFsdWU7XG4gICAgcmV0dXJuIHZhbCA9PT0gJycgfHwgdmFsID09IG51bGw7XG4gIH1cblxuICBnZXQgZmxvYXRpbmdMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5IHx8ICh0aGlzLl9pc1NlbGVjdElucHV0ID8gdGhpcy5faGFzTGFiZWxTZWxlY3Rpb25PcHRpb24oKSA6IGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50PixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2ZpZWxkOiBMeUZpZWxkLFxuICAgIC8qKiBAZG9jcy1wcml2YXRlICovXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2dldEhvc3RFbGVtZW50KCksICdwbGFjZWhvbGRlcicsICfCrScpO1xuXG4gICAgY29uc3QgeyBuYXRpdmVFbGVtZW50IH0gPSB0aGlzLl9lbDtcblxuICAgIGlmIChuYXRpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnKSB7XG4gICAgICB0aGlzLl9pc1NlbGVjdElucHV0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBjbGFzcyB7c2VsZWN0QXJyb3d9IHRvIGA8c2VsZWN0PiBub3QgbXVsdGlwbGVgXG4gICAgaWYgKHRoaXMuX2ZpZWxkICYmIG5hdGl2ZUVsZW1lbnQudHlwZSA9PT0gJ3NlbGVjdC1vbmUnKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fZmllbGQuY2xhc3Nlcy5zZWxlY3RBcnJvdyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgc3R5bGUgY3Vyc29yIG9ubHkgZm9yIGlucHV0IG9mIHR5cGUgdGV4dFxuICAgIGlmIChuYXRpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCB8fFxuICAgICAgICBpbnB1dFRleHQuc29tZSh0eXBlID0+IHR5cGUgPT09IG5hdGl2ZUVsZW1lbnQudHlwZSkpIHtcbiAgICAgIHRoaXMuX2N1cnNvckNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoJ2x5RmllbGQudGV4dCcsIHtcbiAgICAgICAgJyYge2luZml4fSc6IHtcbiAgICAgICAgICBjdXJzb3I6ICd0ZXh0J1xuICAgICAgICB9XG4gICAgICB9LCBTVFlMRV9QUklPUklUWSwgU1RZTEVTKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTZWxlY3RJbnB1dCkge1xuICAgICAgdGhpcy5fY3Vyc29yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZSgnbHlGaWVsZC5zZWxlY3QnLCB7XG4gICAgICAgICcmIHtpbmZpeH0nOiB7XG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgfVxuICAgICAgfSwgU1RZTEVfUFJJT1JJVFksIFNUWUxFUyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2N1cnNvckNsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY3Vyc29yQ2xhc3MpO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IGRlZmF1bHQgc3R5bGVzXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MobmF0aXZlRWxlbWVudCwgdGhpcy5fZmllbGQuY2xhc3Nlcy5pbnB1dE5hdGl2ZSk7XG5cbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLm5nQ29udHJvbDtcbiAgICAvLyB1cGRhdGUgc3R5bGVzIG9uIGRpc2FibGVkXG4gICAgaWYgKG5nQ29udHJvbCAmJiBuZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcykge1xuICAgICAgbmdDb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9ICEhbmdDb250cm9sLmRpc2FibGVkO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLl9maWVsZC5fY29udHJvbCkge1xuICAgICAgY29uc3Qgb2xkVmFsID0gdGhpcy5lcnJvclN0YXRlO1xuICAgICAgY29uc3QgbmV3VmFsID0gISEodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuaW52YWxpZCAmJiAodGhpcy5uZ0NvbnRyb2wudG91Y2hlZCB8fCAodGhpcy5fZm9ybSAmJiB0aGlzLl9mb3JtLnN1Ym1pdHRlZCkpKTtcbiAgICAgIGlmIChuZXdWYWwgIT09IG9sZFZhbCkge1xuICAgICAgICB0aGlzLmVycm9yU3RhdGUgPSBuZXdWYWw7XG4gICAgICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgICAgIGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLl9maWVsZC5jbGFzc2VzLmVycm9yU3RhdGU7XG4gICAgICAgICAgaWYgKG5ld1ZhbCkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZmllbGQuX2dldEhvc3RFbGVtZW50KCksIGVycm9yQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IGVycm9yQ2xhc3M7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9lcnJvckNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9maWVsZC5fZ2V0SG9zdEVsZW1lbnQoKSwgZXJyb3JDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLl9lcnJvckNsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgb25Db250YWluZXJDbGljayhfZTogTW91c2VFdmVudCkge1xuICAgIHRoaXMuX2dldEhvc3RFbGVtZW50KCkuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBpbnB1dC4gKi9cbiAgZm9jdXMoKTogdm9pZCB7IHRoaXMuX2dldEhvc3RFbGVtZW50KCkuZm9jdXMoKTsgfVxuXG4gIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhc0xhYmVsU2VsZWN0aW9uT3B0aW9uKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBjb25zdCBvcHRpb24gPSBlbC5zZWxlY3RlZE9wdGlvbnMgPyBlbC5zZWxlY3RlZE9wdGlvbnMuaXRlbSgwKSA6IG51bGw7XG4gICAgcmV0dXJuIG9wdGlvbiA/ICEhb3B0aW9uLmxhYmVsIDogZmFsc2U7XG4gIH1cblxufVxuIl19