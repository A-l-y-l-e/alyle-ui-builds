import { Directive, ElementRef, Optional, Self, Input, HostListener, HostBinding, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ViewChild, ViewEncapsulation, ContentChildren, NgZone, NgModule } from '@angular/core';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { toBoolean, LyTheme2, LY_COMMON_STYLES, mergeDeep, ElementObserver, Platform, LyCommonModule } from '@alyle/ui';
import { Subject } from 'rxjs';
import { __assign } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ATTR_PLACEHOLDER = 'placeholder';
var LyInputNative = /** @class */ (function () {
    function LyInputNative(_el, _renderer, _theme, /** @ignore */
    ngControl, _parentForm, _parentFormGroup) {
        this._el = _el;
        this._renderer = _renderer;
        this._theme = _theme;
        this.ngControl = ngControl;
        this._disabled = false;
        this._required = false;
        this.valueChanges = new Subject();
        this.focused = false;
        this._hostElement = this._el.nativeElement;
    }
    /**
     * @return {?}
     */
    LyInputNative.prototype._onInput = /**
     * @return {?}
     */
    function () {
        this.valueChanges.next();
    };
    /**
     * @return {?}
     */
    LyInputNative.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        if (this.focused !== false) {
            this.focused = false;
            this.valueChanges.next();
        }
    };
    /**
     * @return {?}
     */
    LyInputNative.prototype._onFocus = /**
     * @return {?}
     */
    function () {
        if (this.focused !== true) {
            this.focused = true;
            this.valueChanges.next();
        }
    };
    Object.defineProperty(LyInputNative.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hostElement.value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.value) {
                this._hostElement.value = val;
                this.valueChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInputNative.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInputNative.prototype, "required", {
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
    Object.defineProperty(LyInputNative.prototype, "placeholder", {
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
    /**
     * @return {?}
     */
    LyInputNative.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.placeholder) {
            this._renderer.removeAttribute(this._hostElement, ATTR_PLACEHOLDER);
        }
    };
    /**
     * @return {?}
     */
    LyInputNative.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.valueChanges.complete();
    };
    /** Focuses the input. */
    /**
     * Focuses the input.
     * @return {?}
     */
    LyInputNative.prototype.focus = /**
     * Focuses the input.
     * @return {?}
     */
    function () { this._hostElement.focus(); };
    LyInputNative.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-field > input, ly-field > textarea',
                    exportAs: 'lyInput'
                },] }
    ];
    /** @nocollapse */
    LyInputNative.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] }
    ]; };
    LyInputNative.propDecorators = {
        _onInput: [{ type: HostListener, args: ['input',] }],
        _onBlur: [{ type: HostListener, args: ['blur',] }],
        _onFocus: [{ type: HostListener, args: ['focus',] }],
        value: [{ type: Input }],
        disabled: [{ type: HostBinding }, { type: Input }],
        required: [{ type: HostBinding }, { type: Input }],
        placeholder: [{ type: Input }]
    };
    return LyInputNative;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyLabel = /** @class */ (function () {
    function LyLabel() {
    }
    LyLabel.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-field > ly-label'
                },] }
    ];
    return LyLabel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyPlaceholder = /** @class */ (function () {
    function LyPlaceholder() {
    }
    LyPlaceholder.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-field > ly-placeholder'
                },] }
    ];
    return LyPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Hint text to be shown underneath the field.
 */
var LyHint = /** @class */ (function () {
    function LyHint() {
    }
    LyHint.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-field > ly-hint'
                },] }
    ];
    return LyHint;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Prefix to be placed the before of the field.
 */
var LyPrefix = /** @class */ (function () {
    function LyPrefix() {
    }
    LyPrefix.decorators = [
        { type: Directive, args: [{
                    selector: '[lyPrefix]',
                },] }
    ];
    return LyPrefix;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Suffix to be placed the after of the field.
 */
var LySuffix = /** @class */ (function () {
    function LySuffix() {
    }
    LySuffix.decorators = [
        { type: Directive, args: [{
                    selector: '[lySuffix]',
                },] }
    ];
    return LySuffix;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_APPEARANCE = 'standard';
/** @type {?} */
var DEFAULT_WITH_COLOR = 'primary';
/** @type {?} */
var styles = function (theme) {
    return {
        root: {
            display: 'inline-block',
            position: 'relative',
            marginBottom: '1em',
            lineHeight: 1.125
        },
        container: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            '&:after': __assign({}, LY_COMMON_STYLES.fill, { content: "''", pointerEvents: 'none', borderColor: theme.input.borderColor })
        },
        fieldset: __assign({}, LY_COMMON_STYLES.fill, { margin: 0, borderStyle: 'solid', borderColor: theme.input.borderColor, borderWidth: 0 }),
        fieldsetSpan: {
            padding: 0
        },
        labelSpan: {
            maxWidth: '100%',
            display: 'inline-block',
            transition: "font-size " + theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s"
        },
        prefix: {
            maxHeight: '2em',
            display: 'flex',
            alignItems: 'center',
            '&:after': __assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
        },
        infix: {
            display: 'inline-flex',
            position: 'relative',
            alignItems: 'baseline',
            '&:after': __assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
        },
        suffix: {
            maxHeight: '2em',
            display: 'flex',
            alignItems: 'center',
            '&:after': __assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
        },
        labelContainer: __assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', display: 'flex', width: '100%', borderColor: theme.input.borderColor }),
        labelSpacingStart: {},
        labelCenter: {
            display: 'flex',
            maxWidth: '100%'
        },
        labelSpacingEnd: {
            flex: 1
        },
        label: __assign({}, LY_COMMON_STYLES.fill, { margin: 0, border: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: theme.input.label, width: '100%', transition: theme.animations.curves.deceleration + " ." + theme.animations.durations.complex + "s" }),
        isFloatingLabel: {},
        floatingLabel: {
            '& {labelSpan}': {
                fontSize: '75%'
            }
        },
        placeholder: __assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', color: theme.input.label }),
        focused: {},
        hint: {},
        inputNative: {
            resize: 'vertical',
            padding: 0,
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            color: 'inherit',
            font: 'inherit',
            width: '100%'
        }
    };
};
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
         * @ignore
         */
        this.classes = this._theme.addStyleSheet(styles, 'ly-field', STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    Object.defineProperty(LyField.prototype, "floatingLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._floatingLabel;
        },
        set: /**
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
    Object.defineProperty(LyField.prototype, "withColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._withColor;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            if (val !== this._withColor) {
                this._withColor = val;
                this._withColorClass = this._theme.addStyle("ly-field.withColor:" + val, function (theme) {
                    var _a;
                    /** @type {?} */
                    var color = theme.colorOf(val);
                    return _a = {},
                        _a["&." + _this.classes.focused + " ." + _this.classes.container + ":after"] = {
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
                        _a;
                }, this._el.nativeElement, this._withColorClass, STYLE_PRIORITY + 1);
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
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            if (val !== this.appearance) {
                this._appearance = val;
                if (!(/** @type {?} */ (this._theme.config.input)).appearance[val]) {
                    throw new Error(val + " not found in theme.input.appearance");
                }
                this._appearanceClass = this._theme.addStyle("ly-field.appearance:" + val, function (theme) {
                    var _a;
                    /** @type {?} */
                    var appearance = mergeDeep({}, theme.input.appearance["any"], theme.input.appearance[val]);
                    return _a = {},
                        _a["& ." + _this.classes.container] = __assign({}, appearance.container),
                        _a["& ." + _this.classes.prefix] = __assign({}, appearance.prefix),
                        _a["& ." + _this.classes.infix] = __assign({}, appearance.infix),
                        _a["& ." + _this.classes.suffix] = __assign({}, appearance.suffix),
                        _a["& ." + _this.classes.inputNative] = __assign({}, appearance.input),
                        _a["& ." + _this.classes.fieldset] = __assign({}, appearance.fieldset),
                        _a["&:hover ." + _this.classes.fieldset] = __assign({}, appearance.fieldsetHover),
                        _a["&." + _this.classes.focused + " ." + _this.classes.fieldset] = __assign({}, appearance.fieldsetFocused),
                        _a["& ." + _this.classes.placeholder] = __assign({}, appearance.placeholder),
                        _a["& ." + _this.classes.label] = __assign({}, appearance.label),
                        _a["& ." + _this.classes.floatingLabel + "." + _this.classes.label] = __assign({}, appearance.floatingLabel),
                        _a["&." + _this.classes.focused + " ." + _this.classes.container] = __assign({}, appearance.containerFocused),
                        _a;
                }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyField.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.withColor) {
            this.withColor = DEFAULT_WITH_COLOR;
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
        this._renderer.addClass(this._input._hostElement, this.classes.inputNative);
        this._input.valueChanges.subscribe(function () {
            _this._updateFloatingLabel();
            _this._markForCheck();
        });
        /** @type {?} */
        var ngControl = this._input.ngControl;
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
                    _this._updateFielset(el_1, 'start');
                    _this._elementObserver.observe(el_1, function () {
                        _this._updateFielset(el_1, 'start');
                    });
                }
                if (_this._suffixContainer) {
                    /** @type {?} */
                    var el_2 = _this._suffixContainer.nativeElement;
                    _this._updateFielset(el_2, 'end');
                    _this._elementObserver.observe(el_2, function () {
                        _this._updateFielset(el_2, 'end');
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
    };
    /**
     * @param {?} el
     * @param {?} f
     * @return {?}
     */
    LyField.prototype._updateFielset = /**
     * @param {?} el
     * @param {?} f
     * @return {?}
     */
    function (el, f) {
        var width = el.getBoundingClientRect().width;
        /** @type {?} */
        var newClass = this._theme.addStyle("style.paddingStart:" + width, function (theme) {
            var _a;
            /** @type {?} */
            var direction = theme.getDirection(f);
            return _a = {},
                _a["margin-" + direction] = width + "px",
                _a;
        });
        if (f === 'start') {
            this._theme.updateClass(this._fieldsetLegend.nativeElement, this._renderer, newClass, this._fielsetStartClass);
            this._fielsetStartClass = newClass;
        }
        else {
            this._theme.updateClass(this._fieldsetLegend.nativeElement, this._renderer, newClass, this._fielsetEndClass);
            this._fielsetEndClass = newClass;
        }
    };
    /**
     * @return {?}
     */
    LyField.prototype._updateFielsetSpan = /**
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
        if (this._input.placeholder && !this._labelChild) {
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
        if ((this._labelChild && this._input.placeholder) || (this._labelChild && this._placeholderChild)) {
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
        var val = this._input.value;
        return val === '' || val === null || val === undefined;
    };
    /**
     * @return {?}
     */
    LyField.prototype._updateFloatingLabel = /**
     * @return {?}
     */
    function () {
        if (this._labelContainer2) {
            /** @type {?} */
            var isFloating = this._input.focused || !this._isEmpty() || this.floatingLabel;
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
        if (this._input.focused) {
            this._renderer.addClass(this._el.nativeElement, this.classes.focused);
        }
        else {
            this._renderer.removeClass(this._el.nativeElement, this.classes.focused);
        }
    };
    /**
     * @return {?}
     */
    LyField.prototype._markForCheck = /**
     * @return {?}
     */
    function () {
        this._cd.markForCheck();
    };
    LyField.decorators = [
        { type: Component, args: [{
                    selector: 'ly-field',
                    template: "<div [className]=\"classes.container\" (click)=\"_input.focus()\">\n  <fieldset [className]=\"classes.fieldset\"><legend #_fieldsetLegend [className]=\"classes.fieldsetSpan\"></legend></fieldset>\n  <div [className]=\"classes.prefix\" *ngIf=\"_prefixChildren.length\" #_prefixContainer>\n    <ng-content select=\"[lyPrefix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.infix\">\n    <ng-content></ng-content>\n    <div [className]=\"classes.label\" *ngIf=\"_isLabel()\" #_labelContainer2>\n      <span #_labelSpan [className]=\"classes.labelSpan\">\n        <ng-container *ngTemplateOutlet=\"_labelTemplate\"></ng-container>\n      </span>\n    </div>\n    <div [className]=\"classes.placeholder\" *ngIf=\"_isPlaceholder() && _isEmpty() && (_input.focused || floatingLabel)\">\n      <ng-container *ngTemplateOutlet=\"_placeholderTemplate\"></ng-container>\n    </div>\n  </div>\n  <div [className]=\"classes.suffix\" *ngIf=\"_suffixChildren.length\" #_suffixContainer>\n    <ng-content select=\"[lySuffix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.hint\"></div>\n</div>\n\n<ng-template #_labelTemplate>\n  <ng-content select=\"ly-label\"></ng-content>\n  <ng-container *ngIf=\"!_labelChild\">\n    <ng-template *ngTemplateOutlet=\"_placeholderTemplate\"></ng-template>\n  </ng-container>\n</ng-template>\n\n<ng-template #_placeholderTemplate>\n  <ng-content select=\"ly-placeholder\"></ng-content>\n  <ng-container *ngIf=\"_input.placeholder\">{{ _input.placeholder }}</ng-container>\n</ng-template>\n",
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
        _input: [{ type: ContentChild, args: [LyInputNative,] }],
        _placeholderChild: [{ type: ContentChild, args: [LyPlaceholder,] }],
        _labelChild: [{ type: ContentChild, args: [LyLabel,] }],
        _hintChildren: [{ type: ContentChildren, args: [LyHint,] }],
        _prefixChildren: [{ type: ContentChildren, args: [LyPrefix,] }],
        _suffixChildren: [{ type: ContentChildren, args: [LySuffix,] }],
        floatingLabel: [{ type: Input }],
        withColor: [{ type: Input }],
        appearance: [{ type: Input }]
    };
    return LyField;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyFieldModule = /** @class */ (function () {
    function LyFieldModule() {
    }
    LyFieldModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        LyCommonModule
                    ],
                    exports: [
                        LyField,
                        LyPlaceholder,
                        LyLabel,
                        LyInputNative,
                        LyPrefix,
                        LySuffix,
                        LyHint,
                        LyCommonModule
                    ],
                    declarations: [LyField, LyPlaceholder, LyLabel, LyInputNative, LyPrefix, LySuffix, LyHint]
                },] }
    ];
    return LyFieldModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LyField, LyFieldModule, LyHint as ɵd, LyInputNative as ɵa, LyLabel as ɵc, LyPlaceholder as ɵb, LyPrefix as ɵe, LySuffix as ɵf };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZmllbGQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9maWVsZC9pbnB1dC50cyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2xhYmVsLnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvcGxhY2Vob2xkZXIudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9oaW50LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvcHJlZml4LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvc3VmZml4LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvZmllbGQudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9maWVsZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPcHRpb25hbCwgU2VsZiwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgUmVuZGVyZXIyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCwgTmdGb3JtLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuY29uc3QgQVRUUl9QTEFDRUhPTERFUiA9ICdwbGFjZWhvbGRlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gaW5wdXQsIGx5LWZpZWxkID4gdGV4dGFyZWEnLFxuICBleHBvcnRBczogJ2x5SW5wdXQnXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXROYXRpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAaWdub3JlICovXG4gIF9ob3N0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHZhbHVlQ2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGZvY3VzZWQgPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIF9vbklucHV0KCkge1xuICAgIHRoaXMudmFsdWVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBfb25CbHVyKCkge1xuICAgIGlmICh0aGlzLmZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBfb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkICE9PSB0cnVlKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLl9ob3N0RWxlbWVudC52YWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0RWxlbWVudC52YWx1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygpXG4gIEBJbnB1dCgpXG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBwbGFjZWhvbGRlcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsO1xuICB9XG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgLyoqIEBpZ25vcmUgKi9cbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBAT3B0aW9uYWwoKSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgKSB7XG4gICAgdGhpcy5faG9zdEVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9ob3N0RWxlbWVudCwgQVRUUl9QTEFDRUhPTERFUik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBpbnB1dC4gKi9cbiAgZm9jdXMoKTogdm9pZCB7IHRoaXMuX2hvc3RFbGVtZW50LmZvY3VzKCk7IH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktbGFiZWwnXG59KVxuZXhwb3J0IGNsYXNzIEx5TGFiZWwgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQgPiBseS1wbGFjZWhvbGRlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlQbGFjZWhvbGRlciB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogSGludCB0ZXh0IHRvIGJlIHNob3duIHVuZGVybmVhdGggdGhlIGZpZWxkLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQgPiBseS1oaW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUhpbnQgeyB9XG4iLCJpbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLyoqIFByZWZpeCB0byBiZSBwbGFjZWQgdGhlIGJlZm9yZSBvZiB0aGUgZmllbGQuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlQcmVmaXhdJyxcbn0pXG5leHBvcnQgY2xhc3MgTHlQcmVmaXgge31cbiIsImltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG4vKiogU3VmZml4IHRvIGJlIHBsYWNlZCB0aGUgYWZ0ZXIgb2YgdGhlIGZpZWxkLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5U3VmZml4XScsXG59KVxuZXhwb3J0IGNsYXNzIEx5U3VmZml4IHt9XG4iLCJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBOZ1pvbmVcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExZX0NPTU1PTl9TVFlMRVMsIEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcywgbWVyZ2VEZWVwLCBFbGVtZW50T2JzZXJ2ZXIsIFBsYXRmb3JtLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJbnB1dE5hdGl2ZSB9IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlIaW50IH0gZnJvbSAnLi9oaW50JztcbmltcG9ydCB7IEx5UHJlZml4IH0gZnJvbSAnLi9wcmVmaXgnO1xuaW1wb3J0IHsgTHlTdWZmaXggfSBmcm9tICcuL3N1ZmZpeCc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0UgPSAnc3RhbmRhcmQnO1xuY29uc3QgREVGQVVMVF9XSVRIX0NPTE9SID0gJ3ByaW1hcnknO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBtYXJnaW5Cb3R0b206ICcxZW0nLFxuICAgICAgbGluZUhlaWdodDogMS4xMjVcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgZmllbGRzZXQ6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmlucHV0LmJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGg6IDBcbiAgICB9LFxuICAgIGZpZWxkc2V0U3Bhbjoge1xuICAgICAgcGFkZGluZzogMFxuICAgIH0sXG4gICAgbGFiZWxTcGFuOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB0cmFuc2l0aW9uOiBgZm9udC1zaXplICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgfSxcbiAgICBwcmVmaXg6IHtcbiAgICAgIG1heEhlaWdodDogJzJlbScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBjb250ZW50OiBgXFwnXFwnYCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmlucHV0LmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBpbmZpeDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBjb250ZW50OiBgXFwnXFwnYCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmlucHV0LmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBzdWZmaXg6IHtcbiAgICAgIG1heEhlaWdodDogJzJlbScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBjb250ZW50OiBgXFwnXFwnYCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmlucHV0LmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBsYWJlbENvbnRhaW5lcjoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXJDb2xvclxuICAgIH0sXG4gICAgbGFiZWxTcGFjaW5nU3RhcnQ6IHt9LFxuICAgIGxhYmVsQ2VudGVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBsYWJlbFNwYWNpbmdFbmQ6IHtcbiAgICAgIGZsZXg6IDFcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgY29sb3I6IHRoZW1lLmlucHV0LmxhYmVsLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHRyYW5zaXRpb246IGAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zYFxuICAgIH0sXG4gICAgaXNGbG9hdGluZ0xhYmVsOiB7fSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICAnJiB7bGFiZWxTcGFufSc6IHtcbiAgICAgICAgZm9udFNpemU6ICc3NSUnXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgY29sb3I6IHRoZW1lLmlucHV0LmxhYmVsXG4gICAgfSxcbiAgICBmb2N1c2VkOiB7fSxcbiAgICBoaW50OiB7fSxcbiAgICBpbnB1dE5hdGl2ZToge1xuICAgICAgcmVzaXplOiAndmVydGljYWwnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG4gIH07XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnZmllbGQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogc3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5LWZpZWxkJywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcm90ZWN0ZWQgX2FwcGVhcmFuY2U6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9hcHBlYXJhbmNlQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJvdGVjdGVkIF93aXRoQ29sb3JDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2lzRmxvYXRpbmc6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZmxvYXRpbmdMYWJlbDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9maWVsc2V0U3RhcnRDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2ZpZWxzZXRFbmRDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2ZpZWxzZXRTcGFuQ2xhc3M6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJykgX2xhYmVsQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyMicpIF9sYWJlbENvbnRhaW5lcjI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfbGFiZWxTcGFuJykgX2xhYmVsU3BhbjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19wcmVmaXhDb250YWluZXInKSBfcHJlZml4Q29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX3N1ZmZpeENvbnRhaW5lcicpIF9zdWZmaXhDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfZmllbGRzZXRMZWdlbmQnKSBfZmllbGRzZXRMZWdlbmQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkKEx5SW5wdXROYXRpdmUpIF9pbnB1dDogTHlJbnB1dE5hdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChMeVBsYWNlaG9sZGVyKSBfcGxhY2Vob2xkZXJDaGlsZDogTHlQbGFjZWhvbGRlcjtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsKSBfbGFiZWxDaGlsZDogTHlMYWJlbDtcbiAgQENvbnRlbnRDaGlsZHJlbihMeUhpbnQpIF9oaW50Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeUhpbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKEx5UHJlZml4KSBfcHJlZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeVByZWZpeD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlTdWZmaXgpIF9zdWZmaXhDaGlsZHJlbjogUXVlcnlMaXN0PEx5U3VmZml4PjtcbiAgQElucHV0KClcbiAgc2V0IGZsb2F0aW5nTGFiZWwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmxvYXRpbmdMYWJlbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgfVxuICBnZXQgZmxvYXRpbmdMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxvYXRpbmdMYWJlbDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fd2l0aENvbG9yKSB7XG4gICAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgICB0aGlzLl93aXRoQ29sb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1maWVsZC53aXRoQ29sb3I6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn06YWZ0ZXJgXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmV9YF06IHtcbiAgICAgICAgICAgIGNhcmV0Q29sb3I6IGNvbG9yXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MsIFNUWUxFX1BSSU9SSVRZICsgMSk7XG4gICAgfVxuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgaWYgKCEodGhpcy5fdGhlbWUuY29uZmlnLmlucHV0IGFzIGFueSkuYXBwZWFyYW5jZVt2YWxdKSAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuaW5wdXQuYXBwZWFyYW5jZWApO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWZpZWxkLmFwcGVhcmFuY2U6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBhcHBlYXJhbmNlID0gbWVyZ2VEZWVwKHt9LCB0aGVtZS5pbnB1dC5hcHBlYXJhbmNlLmFueSwgdGhlbWUuaW5wdXQuYXBwZWFyYW5jZVt2YWxdKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn1gXTogey4uLmFwcGVhcmFuY2UuY29udGFpbmVyfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnByZWZpeH1gXTogey4uLmFwcGVhcmFuY2UucHJlZml4fSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmluZml4fWBdOiB7Li4uYXBwZWFyYW5jZS5pbmZpeH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5zdWZmaXh9YF06IHsuLi5hcHBlYXJhbmNlLnN1ZmZpeH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5pbnB1dE5hdGl2ZX1gXTogey4uLmFwcGVhcmFuY2UuaW5wdXR9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHsuLi5hcHBlYXJhbmNlLmZpZWxkc2V0fSxcbiAgICAgICAgICBbYCY6aG92ZXIgLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7Li4uYXBwZWFyYW5jZS5maWVsZHNldEhvdmVyfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7Li4uYXBwZWFyYW5jZS5maWVsZHNldEZvY3VzZWR9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMucGxhY2Vob2xkZXJ9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UucGxhY2Vob2xkZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMubGFiZWx9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UubGFiZWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbH0uJHt0aGlzLmNsYXNzZXMubGFiZWx9YF06IHsuLi5hcHBlYXJhbmNlLmZsb2F0aW5nTGFiZWx9LFxuXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UuY29udGFpbmVyRm9jdXNlZFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50T2JzZXJ2ZXI6IEVsZW1lbnRPYnNlcnZlcixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy53aXRoQ29sb3IgPSBERUZBVUxUX1dJVEhfQ09MT1I7XG4gICAgfVxuICAgIGlmICghdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSBERUZBVUxUX0FQUEVBUkFOQ0U7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lucHV0Ll9ob3N0RWxlbWVudCwgdGhpcy5jbGFzc2VzLmlucHV0TmF0aXZlKTtcbiAgICB0aGlzLl9pbnB1dC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5faW5wdXQubmdDb250cm9sO1xuXG4gICAgLy8gUnVuIGNoYW5nZSBkZXRlY3Rpb24gaWYgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgaWYgKG5nQ29udHJvbCAmJiBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3ByZWZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsICdzdGFydCcpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCAnc3RhcnQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc3VmZml4Q29udGFpbmVyKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9zdWZmaXhDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCAnZW5kJyk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsICdlbmQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGFiZWxTcGFuKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGaWVsc2V0KGVsOiBFbGVtZW50LCBmOiAnc3RhcnQnIHwgJ2VuZCcpIHtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBzdHlsZS5wYWRkaW5nU3RhcnQ6JHt3aWR0aH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGVtZS5nZXREaXJlY3Rpb24oZik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbYG1hcmdpbi0ke2RpcmVjdGlvbn1gXTogYCR7d2lkdGh9cHhgXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGlmIChmID09PSAnc3RhcnQnKSB7XG4gICAgICB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9maWVsZHNldExlZ2VuZC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2ZpZWxzZXRTdGFydENsYXNzKTtcbiAgICAgIHRoaXMuX2ZpZWxzZXRTdGFydENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2ZpZWxkc2V0TGVnZW5kLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fZmllbHNldEVuZENsYXNzKTtcblxuICAgICAgdGhpcy5fZmllbHNldEVuZENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldFNwYW4oKSB7XG4gICAgbGV0IHsgd2lkdGggfSA9IHRoaXMuX2xhYmVsU3Bhbi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghdGhpcy5faXNGbG9hdGluZykge1xuICAgICAgd2lkdGggLT0gd2lkdGggLyAxMDAgKiAyNTtcbiAgICB9XG4gICAgLyoqIEFkZCA2cHggb2Ygc3BhY2luZyAqL1xuICAgIHdpZHRoICs9IDY7XG4gICAgdGhpcy5fZmllbHNldFNwYW5DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBzdHlsZS5maWVsZHNldFNwYW5Gb2N1c2VkOiR7d2lkdGh9YCwge1xuICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0U3Bhbn1gXToge3dpZHRoOiBgJHt3aWR0aH1weGB9XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZmllbHNldFNwYW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIC8qKiBAaWdub3JlICovXG4gIF9pc0xhYmVsKCkge1xuICAgIGlmICh0aGlzLl9pbnB1dC5wbGFjZWhvbGRlciAmJiAhdGhpcy5fbGFiZWxDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYWJlbENoaWxkIHx8IHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNQbGFjZWhvbGRlcigpIHtcbiAgICBpZiAoKHRoaXMuX2xhYmVsQ2hpbGQgJiYgdGhpcy5faW5wdXQucGxhY2Vob2xkZXIpIHx8ICh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzRW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5faW5wdXQudmFsdWU7XG4gICAgcmV0dXJuIHZhbCA9PT0gJycgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmxvYXRpbmdMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5fbGFiZWxDb250YWluZXIyKSB7XG4gICAgICBjb25zdCBpc0Zsb2F0aW5nID0gdGhpcy5faW5wdXQuZm9jdXNlZCB8fCAhdGhpcy5faXNFbXB0eSgpIHx8IHRoaXMuZmxvYXRpbmdMYWJlbDtcbiAgICAgIGlmICh0aGlzLl9pc0Zsb2F0aW5nICE9PSBpc0Zsb2F0aW5nKSB7XG4gICAgICAgIHRoaXMuX2lzRmxvYXRpbmcgPSBpc0Zsb2F0aW5nO1xuICAgICAgICBpZiAoaXNGbG9hdGluZykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2xhYmVsQ29udGFpbmVyMi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fbGFiZWxDb250YWluZXIyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5faW5wdXQuZm9jdXNlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgTHlJbnB1dE5hdGl2ZSB9IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQcmVmaXggfSBmcm9tICcuL3ByZWZpeCc7XG5pbXBvcnQgeyBMeVN1ZmZpeCB9IGZyb20gJy4vc3VmZml4JztcbmltcG9ydCB7IEx5SGludCB9IGZyb20gJy4vaGludCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTHlDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEx5RmllbGQsXG4gICAgTHlQbGFjZWhvbGRlcixcbiAgICBMeUxhYmVsLFxuICAgIEx5SW5wdXROYXRpdmUsXG4gICAgTHlQcmVmaXgsXG4gICAgTHlTdWZmaXgsXG4gICAgTHlIaW50LFxuICAgIEx5Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyBMeUZpZWxkLCBMeVBsYWNlaG9sZGVyLCBMeUxhYmVsLCBMeUlucHV0TmF0aXZlLCBMeVByZWZpeCwgTHlTdWZmaXgsIEx5SGludCBdXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGRNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUtBLElBQU0sZ0JBQWdCLEdBQUcsYUFBYSxDQUFDOztJQW9FckMsdUJBQ1UsS0FDQSxXQUNBO0lBRW1CLFNBQW9CLEVBQ25DLFdBQW1CLEVBQ25CLGdCQUFvQztRQU54QyxRQUFHLEdBQUgsR0FBRztRQUNILGNBQVMsR0FBVCxTQUFTO1FBQ1QsV0FBTSxHQUFOLE1BQU07UUFFYSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBaEVqRCxpQkFBc0IsS0FBSyxDQUFDO1FBQzVCLGlCQUFzQixLQUFLLENBQUM7UUFFNUIsb0JBQXVDLElBQUksT0FBTyxFQUFRLENBQUM7UUFDM0QsZUFBVSxLQUFLLENBQUM7UUFnRWQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztLQUM1Qzs7OztJQS9Ec0IsZ0NBQVE7OztJQUEvQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDMUI7Ozs7SUFFcUIsK0JBQU87OztJQUE3QjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7O0lBQ3NCLGdDQUFROzs7SUFBL0I7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDMUI7S0FDRjtJQUVELHNCQUNJLGdDQUFLOzs7O1FBTVQ7WUFDRSxP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