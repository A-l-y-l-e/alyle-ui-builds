import { Directive, ElementRef, Optional, Self, Input, HostListener, HostBinding, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ViewChild, ViewEncapsulation, ContentChildren, NgZone, isDevMode, NgModule } from '@angular/core';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { toBoolean, LyTheme2, LY_COMMON_STYLES, mergeDeep, ElementObserver, Platform, DirAlias, mixinColor, LyCommonModule } from '@alyle/ui';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @ignore
 * @type {?}
 */
const ATTR_PLACEHOLDER = 'placeholder';
class LyInputNative {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} ngControl
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     */
    constructor(_el, _renderer, ngControl, _parentForm, _parentFormGroup) {
        this._el = _el;
        this._renderer = _renderer;
        this.ngControl = ngControl;
        this._disabled = false;
        this._required = false;
        this.stateChanges = new Subject();
        this.focused = false;
        this._hostElement = this._el.nativeElement;
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
        if (this.focused !== false) {
            this.focused = false;
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    _onFocus() {
        if (this.focused !== true) {
            this.focused = true;
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
            this._hostElement.value = val;
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._hostElement.value;
    }
    /**
     * Whether the input is disabled.
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = toBoolean(value);
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
    ngOnInit() {
        this._renderer.setAttribute(this._hostElement, ATTR_PLACEHOLDER, '­');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    /**
     * Focuses the input.
     * @return {?}
     */
    focus() { this._hostElement.focus(); }
}
LyInputNative.decorators = [
    { type: Directive, args: [{
                selector: 'ly-field > input, ly-field > textarea',
                exportAs: 'lyInput'
            },] }
];
/** @nocollapse */
LyInputNative.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] }
];
LyInputNative.propDecorators = {
    _onInput: [{ type: HostListener, args: ['input',] }],
    _onBlur: [{ type: HostListener, args: ['blur',] }],
    _onFocus: [{ type: HostListener, args: ['focus',] }],
    value: [{ type: Input }],
    disabled: [{ type: HostBinding }, { type: Input }],
    required: [{ type: HostBinding }, { type: Input }],
    placeholder: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyLabel {
}
LyLabel.decorators = [
    { type: Directive, args: [{
                selector: 'ly-field > ly-label'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyPlaceholder {
}
LyPlaceholder.decorators = [
    { type: Directive, args: [{
                selector: 'ly-field > ly-placeholder'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLES = ({
    root: {
        display: 'block',
        fontSize: '.75em',
        marginTop: '8px'
    }
});
/**
 * Hint text to be shown underneath the field.
 */
class LyHint {
    /**
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} _theme
     */
    constructor(_renderer, _el, _theme) {
        /** @type {?} */
        const className = _theme.addStyleSheet(STYLES).root;
        _renderer.addClass(_el.nativeElement, className);
    }
}
LyHint.decorators = [
    { type: Directive, args: [{
                selector: 'ly-field > ly-hint'
            },] }
];
/** @nocollapse */
LyHint.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Prefix to be placed the before of the field.
 */
class LyPrefix {
}
LyPrefix.decorators = [
    { type: Directive, args: [{
                selector: '[lyPrefix]',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Suffix to be placed the after of the field.
 */
class LySuffix {
}
LySuffix.decorators = [
    { type: Directive, args: [{
                selector: '[lySuffix]',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_APPEARANCE = 'standard';
/** @type {?} */
const DEFAULT_APPEARANCE_THEME = {
    standard: {
        container: {
            padding: '1em 0 0',
            '&:after': {
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px'
            },
            '&:hover:after': {
                borderBottomColor: 'currentColor'
            }
        },
        containerFocused: {
            '&:after': {
                borderWidth: '2px',
                borderColor: 'currentColor'
            }
        },
        containerLabelHover: {
            color: 'currentColor'
        },
        label: {
            margin: '0.4375em 0'
        },
        placeholder: {
            margin: '0.4375em 0'
        },
        input: {
            margin: '0.4375em 0'
        },
        floatingLabel: {
            transform: 'translateY(-1.25em)'
        }
    }
};
/** @type {?} */
const DEFAULT_WITH_COLOR = 'primary';
/** @type {?} */
const styles = (theme) => {
    return {
        root: {
            display: 'inline-block',
            position: 'relative',
            marginBottom: '.5em',
            lineHeight: 1.125
        },
        animations: {
            '& {labelSpan}': {
                transition: `font-size ${theme.animations.curves.deceleration} .${theme.animations.durations.complex}s`
            },
            '& {label}': {
                transition: `${theme.animations.curves.deceleration} .${theme.animations.durations.complex}s`
            }
        },
        container: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            '&:after': Object.assign({}, LY_COMMON_STYLES.fill, { content: `\'\'`, pointerEvents: 'none', borderColor: theme.field.borderColor })
        },
        fieldset: Object.assign({}, LY_COMMON_STYLES.fill, { margin: 0, borderStyle: 'solid', borderColor: theme.field.borderColor, borderWidth: 0 }),
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
            alignItems: 'center',
            '&:after': Object.assign({ content: `\'\'`, pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.field.borderColor })
        },
        infix: {
            display: 'inline-flex',
            position: 'relative',
            alignItems: 'baseline',
            width: '100%',
            '&:after': Object.assign({ content: `\'\'`, pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.field.borderColor })
        },
        suffix: {
            maxHeight: '2em',
            display: 'flex',
            alignItems: 'center',
            '&:after': Object.assign({ content: `\'\'`, pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.field.borderColor })
        },
        labelContainer: Object.assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', display: 'flex', width: '100%', borderColor: theme.field.borderColor }),
        labelSpacingStart: {},
        labelCenter: {
            display: 'flex',
            maxWidth: '100%'
        },
        labelSpacingEnd: {
            flex: 1
        },
        label: Object.assign({}, LY_COMMON_STYLES.fill, { margin: 0, border: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: theme.field.labelColor, width: '100%' }),
        isFloatingLabel: {},
        floatingLabel: {
            '& {labelSpan}': {
                fontSize: '75%'
            }
        },
        placeholder: Object.assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', color: theme.field.labelColor }),
        focused: {},
        inputNative: {
            resize: 'vertical',
            padding: 0,
            outline: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            color: 'inherit',
            font: 'inherit',
            width: '100%'
        },
        hint: {}
    };
};
/**
 * \@docs-private
 */
class LyFieldBase {
}
/**
 * \@docs-private
 * @type {?}
 */
const LyFieldMixinBase = mixinColor(LyFieldBase);
class LyField extends LyFieldMixinBase {
    /**
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} _elementObserver
     * @param {?} _theme
     * @param {?} _cd
     * @param {?} _ngZone
     */
    constructor(_renderer, _el, _elementObserver, _theme, _cd, _ngZone) {
        super();
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
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.root);
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
     * Deprecated, instead use `[color], theme color for the component.
     * @param {?} val
     * @return {?}
     */
    set withColor(val) {
        if (val !== this._withColor) {
            this._withColor = val;
            this._withColorClass = this._theme.addStyle(`ly-field.withColor:${val}`, (theme) => {
                /** @type {?} */
                const color = theme.colorOf(val);
                return {
                    [`&.${this.classes.focused} .${this.classes.container}:after`]: {
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
                    }
                };
            }, this._el.nativeElement, this._withColorClass, STYLE_PRIORITY + 1);
        }
    }
    /**
     * @return {?}
     */
    get withColor() {
        return this._withColor;
    }
    /**
     * The field appearance style.
     * @param {?} val
     * @return {?}
     */
    set appearance(val) {
        if (val !== this.appearance) {
            this._appearance = val;
            if (!(this._theme.config.field.appearance[val] || DEFAULT_APPEARANCE_THEME[val])) {
                throw new Error(`${val} not found in theme.field.appearance`);
            }
            this._appearanceClass = this._theme.addStyle(`ly-field.appearance:${val}`, (theme) => {
                /** @type {?} */
                const appearance = mergeDeep({}, theme.field.appearance.any, theme.field.appearance[val] || DEFAULT_APPEARANCE_THEME[val]);
                return {
                    [`& .${this.classes.container}`]: Object.assign({}, appearance.container),
                    [`& .${this.classes.prefix}`]: Object.assign({}, appearance.prefix),
                    [`& .${this.classes.infix}`]: Object.assign({}, appearance.infix),
                    [`& .${this.classes.suffix}`]: Object.assign({}, appearance.suffix),
                    [`& .${this.classes.inputNative}`]: Object.assign({}, appearance.input),
                    [`& .${this.classes.fieldset}`]: Object.assign({}, appearance.fieldset),
                    [`&:hover .${this.classes.fieldset}`]: Object.assign({}, appearance.fieldsetHover),
                    [`&.${this.classes.focused} .${this.classes.fieldset}`]: Object.assign({}, appearance.fieldsetFocused),
                    [`& .${this.classes.placeholder}`]: Object.assign({}, appearance.placeholder),
                    [`& .${this.classes.label}`]: Object.assign({}, appearance.label),
                    [`& .${this.classes.hint}`]: Object.assign({}, appearance.hint),
                    [`& .${this.classes.floatingLabel}.${this.classes.label}`]: Object.assign({}, appearance.floatingLabel),
                    [`&.${this.classes.focused} .${this.classes.container}`]: Object.assign({}, appearance.containerFocused),
                };
            }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
        }
    }
    /**
     * @return {?}
     */
    get appearance() {
        return this._appearance;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.color) {
            this.withColor = changes.color.currentValue;
        }
        if (isDevMode() && changes.withColor) {
            console.warn('`LyField` > `[withColor]` is deprecated, instead use `[color]`');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.withColor) {
            this.withColor = DEFAULT_WITH_COLOR;
        }
        if (!this.appearance) {
            this.appearance = DEFAULT_APPEARANCE;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._renderer.addClass(this._input._hostElement, this.classes.inputNative);
        this._input.stateChanges.subscribe(() => {
            this._updateFloatingLabel();
            this._markForCheck();
        });
        /** @type {?} */
        const ngControl = this._input.ngControl;
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
                    this._updateFielset(el, DirAlias.start);
                    this._elementObserver.observe(el, () => {
                        this._updateFielset(el, DirAlias.start);
                    });
                }
                if (this._suffixContainer) {
                    /** @type {?} */
                    const el = this._suffixContainer.nativeElement;
                    this._updateFielset(el, DirAlias.end);
                    this._elementObserver.observe(el, () => {
                        this._updateFielset(el, DirAlias.end);
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
     * @param {?} el
     * @param {?} dir
     * @return {?}
     */
    _updateFielset(el, dir) {
        const { width } = el.getBoundingClientRect();
        /** @type {?} */
        const newClass = this._theme.addStyle(`fieldLegendstyle.margin${dir}:${width}`, () => ({
            [`& .${this.classes.fieldsetSpan}, & .${this.classes.hint}`]: {
                [`margin-${dir}`]: `${width}px`
            }
        }), null, null, STYLE_PRIORITY);
        if (dir === DirAlias.start) {
            this._marginStartClass = this._theme.updateClass(this._el.nativeElement, this._renderer, newClass, this._marginStartClass);
        }
        else {
            this._marginEndClass = this._theme.updateClass(this._el.nativeElement, this._renderer, newClass, this._marginEndClass);
        }
    }
    /**
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
        if (this._input.placeholder && !this._labelChild) {
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
        if ((this._labelChild && this._input.placeholder) || (this._labelChild && this._placeholderChild)) {
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
        const val = this._input.value;
        return val === '' || val === null || val === undefined;
    }
    /**
     * @return {?}
     */
    _updateFloatingLabel() {
        if (this._labelContainer2) {
            /** @type {?} */
            const isFloating = this._input.focused || !this._isEmpty() || this.floatingLabel;
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
    }
    /**
     * @return {?}
     */
    _markForCheck() {
        this._cd.markForCheck();
    }
}
LyField.decorators = [
    { type: Component, args: [{
                selector: 'ly-field',
                template: "<div [className]=\"classes.container\" (click)=\"_input.focus()\">\n  <fieldset [className]=\"classes.fieldset\"><legend #_fieldsetLegend [className]=\"classes.fieldsetSpan\"></legend></fieldset>\n  <div [className]=\"classes.prefix\" *ngIf=\"_prefixChildren.length\" #_prefixContainer>\n    <ng-content select=\"[lyPrefix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.infix\">\n    <ng-content></ng-content>\n    <div [className]=\"classes.label\" *ngIf=\"_isLabel()\" #_labelContainer2>\n      <span #_labelSpan [className]=\"classes.labelSpan\">\n        <ng-container *ngTemplateOutlet=\"_labelTemplate\"></ng-container>\n      </span>\n    </div>\n    <div [className]=\"classes.placeholder\" *ngIf=\"_isPlaceholder() && _isEmpty() && (_input.focused || floatingLabel)\">\n      <ng-container *ngTemplateOutlet=\"_placeholderTemplate\"></ng-container>\n    </div>\n  </div>\n  <div [className]=\"classes.suffix\" *ngIf=\"_suffixChildren.length\" #_suffixContainer>\n    <ng-content select=\"[lySuffix]\"></ng-content>\n  </div>\n</div>\n<div [className]=\"classes.hint\" *ngIf=\"_hintChildren.length\">\n  <ng-content select=\"ly-hint\"></ng-content>\n</div>\n\n<ng-template #_labelTemplate>\n  <ng-content select=\"ly-label\"></ng-content>\n  <ng-container *ngIf=\"!_labelChild\">\n    <ng-template *ngTemplateOutlet=\"_placeholderTemplate\"></ng-template>\n  </ng-container>\n</ng-template>\n\n<ng-template #_placeholderTemplate>\n  <ng-content select=\"ly-placeholder\"></ng-content>\n  <ng-container *ngIf=\"_input.placeholder\">{{ _input.placeholder }}</ng-container>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                inputs: ['color']
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyFieldModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyFieldBase, LyFieldMixinBase, LyField, LyFieldModule, LyHint as ɵd, LyInputNative as ɵa, LyLabel as ɵc, LyPlaceholder as ɵb, LyPrefix as ɵe, LySuffix as ɵf };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZmllbGQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9maWVsZC9pbnB1dC50cyIsIm5nOi8vQGFseWxlL3VpL2ZpZWxkL2xhYmVsLnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvcGxhY2Vob2xkZXIudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9oaW50LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvcHJlZml4LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvc3VmZml4LnRzIiwibmc6Ly9AYWx5bGUvdWkvZmllbGQvZmllbGQudHMiLCJuZzovL0BhbHlsZS91aS9maWVsZC9maWVsZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPcHRpb25hbCwgU2VsZiwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgUmVuZGVyZXIyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCwgTmdGb3JtLCBGb3JtR3JvdXBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vKiogQGlnbm9yZSAqL1xuY29uc3QgQVRUUl9QTEFDRUhPTERFUiA9ICdwbGFjZWhvbGRlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gaW5wdXQsIGx5LWZpZWxkID4gdGV4dGFyZWEnLFxuICBleHBvcnRBczogJ2x5SW5wdXQnXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXROYXRpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAaWdub3JlICovXG4gIF9ob3N0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gIHByb3RlY3RlZCBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHN0YXRlQ2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIF9vbklucHV0KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBfb25CbHVyKCkge1xuICAgIGlmICh0aGlzLmZvY3VzZWQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBfb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkICE9PSB0cnVlKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLl9ob3N0RWxlbWVudC52YWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9ob3N0RWxlbWVudC52YWx1ZTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC4gKi9cbiAgQEhvc3RCaW5kaW5nKClcbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKClcbiAgQElucHV0KClcbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IHBsYWNlaG9sZGVyKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWw7XG4gIH1cbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIC8qKiBAaWdub3JlICovXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICBAT3B0aW9uYWwoKSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmVcbiAgKSB7XG4gICAgdGhpcy5faG9zdEVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2hvc3RFbGVtZW50LCBBVFRSX1BMQUNFSE9MREVSLCAnw4LCrScpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBGb2N1c2VzIHRoZSBpbnB1dC4gKi9cbiAgZm9jdXMoKTogdm9pZCB7IHRoaXMuX2hvc3RFbGVtZW50LmZvY3VzKCk7IH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktbGFiZWwnXG59KVxuZXhwb3J0IGNsYXNzIEx5TGFiZWwgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQgPiBseS1wbGFjZWhvbGRlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlQbGFjZWhvbGRlciB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFUyA9ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAnLjc1ZW0nLFxuICAgIG1hcmdpblRvcDogJzhweCdcbiAgfVxufSk7XG5cbi8qKiBIaW50IHRleHQgdG8gYmUgc2hvd24gdW5kZXJuZWF0aCB0aGUgZmllbGQuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGx5LWhpbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5SGludCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF9lbDogRWxlbWVudFJlZixcbiAgICBfdGhlbWU6IEx5VGhlbWUyXG4gICAgKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKS5yb290O1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qKiBQcmVmaXggdG8gYmUgcGxhY2VkIHRoZSBiZWZvcmUgb2YgdGhlIGZpZWxkLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5UHJlZml4XScsXG59KVxuZXhwb3J0IGNsYXNzIEx5UHJlZml4IHt9XG4iLCJpbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLyoqIFN1ZmZpeCB0byBiZSBwbGFjZWQgdGhlIGFmdGVyIG9mIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVN1ZmZpeF0nLFxufSlcbmV4cG9ydCBjbGFzcyBMeVN1ZmZpeCB7fVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIGlzRGV2TW9kZVxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfQ09NTU9OX1NUWUxFUywgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzLCBtZXJnZURlZXAsIEVsZW1lbnRPYnNlcnZlciwgUGxhdGZvcm0sIHRvQm9vbGVhbiwgRGlyQWxpYXMsIG1peGluQ29sb3IgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJbnB1dE5hdGl2ZSB9IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlIaW50IH0gZnJvbSAnLi9oaW50JztcbmltcG9ydCB7IEx5UHJlZml4IH0gZnJvbSAnLi9wcmVmaXgnO1xuaW1wb3J0IHsgTHlTdWZmaXggfSBmcm9tICcuL3N1ZmZpeCc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0UgPSAnc3RhbmRhcmQnO1xuY29uc3QgREVGQVVMVF9BUFBFQVJBTkNFX1RIRU1FID0ge1xuICBzdGFuZGFyZDoge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgcGFkZGluZzogJzFlbSAwIDAnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnc29saWQnLFxuICAgICAgICBib3JkZXJCb3R0b21XaWR0aDogJzFweCdcbiAgICAgIH0sXG4gICAgICAnJjpob3ZlcjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICdjdXJyZW50Q29sb3InXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250YWluZXJGb2N1c2VkOiB7XG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyV2lkdGg6ICcycHgnLFxuICAgICAgICBib3JkZXJDb2xvcjogJ2N1cnJlbnRDb2xvcidcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRhaW5lckxhYmVsSG92ZXI6IHtcbiAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIG1hcmdpbjogJzAuNDM3NWVtIDAnXG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgbWFyZ2luOiAnMC40Mzc1ZW0gMCdcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBtYXJnaW46ICcwLjQzNzVlbSAwJ1xuICAgIH0sXG4gICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMS4yNWVtKSdcbiAgICB9XG4gIH1cbn07XG5jb25zdCBERUZBVUxUX1dJVEhfQ09MT1IgPSAncHJpbWFyeSc7XG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJy41ZW0nLFxuICAgICAgbGluZUhlaWdodDogMS4xMjVcbiAgICB9LFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICB0cmFuc2l0aW9uOiBgZm9udC1zaXplICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9LFxuICAgICAgJyYge2xhYmVsfSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYCR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgZmllbGRzZXQ6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGg6IDBcbiAgICB9LFxuICAgIGZpZWxkc2V0U3Bhbjoge1xuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGhlaWdodDogJzJweCdcbiAgICB9LFxuICAgIGxhYmVsU3Bhbjoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfSxcbiAgICBwcmVmaXg6IHtcbiAgICAgIG1heEhlaWdodDogJzJlbScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICBjb250ZW50OiBgXFwnXFwnYCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmZpZWxkLmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBpbmZpeDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYWxpZ25JdGVtczogJ2Jhc2VsaW5lJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgc3VmZml4OiB7XG4gICAgICBtYXhIZWlnaHQ6ICcyZW0nLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5maWVsZC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgbGFiZWxDb250YWluZXI6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuZmllbGQuYm9yZGVyQ29sb3JcbiAgICB9LFxuICAgIGxhYmVsU3BhY2luZ1N0YXJ0OiB7fSxcbiAgICBsYWJlbENlbnRlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgbGFiZWxTcGFjaW5nRW5kOiB7XG4gICAgICBmbGV4OiAxXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5maWVsZC5sYWJlbENvbG9yLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgaXNGbG9hdGluZ0xhYmVsOiB7fSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICAnJiB7bGFiZWxTcGFufSc6IHtcbiAgICAgICAgZm9udFNpemU6ICc3NSUnXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgY29sb3I6IHRoZW1lLmZpZWxkLmxhYmVsQ29sb3JcbiAgICB9LFxuICAgIGZvY3VzZWQ6IHt9LFxuICAgIGlucHV0TmF0aXZlOiB7XG4gICAgICByZXNpemU6ICd2ZXJ0aWNhbCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgZm9udDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgaGludDogeyB9XG4gIH07XG59O1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5RmllbGRCYXNlIHsgfVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5RmllbGRNaXhpbkJhc2UgPSBtaXhpbkNvbG9yKEx5RmllbGRCYXNlKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJ2ZpZWxkLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaW5wdXRzOiBbJ2NvbG9yJ11cbn0pXG5leHBvcnQgY2xhc3MgTHlGaWVsZCBleHRlbmRzIEx5RmllbGRNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByb3RlY3RlZCBfYXBwZWFyYW5jZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfaXNGbG9hdGluZzogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9mbG9hdGluZ0xhYmVsOiBib29sZWFuO1xuICBwcml2YXRlIF9maWVsc2V0U3BhbkNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX21hcmdpblN0YXJ0Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfbWFyZ2luRW5kQ2xhc3M6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJykgX2xhYmVsQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyMicpIF9sYWJlbENvbnRhaW5lcjI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfbGFiZWxTcGFuJykgX2xhYmVsU3BhbjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19wcmVmaXhDb250YWluZXInKSBfcHJlZml4Q29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX3N1ZmZpeENvbnRhaW5lcicpIF9zdWZmaXhDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfZmllbGRzZXRMZWdlbmQnKSBfZmllbGRzZXRMZWdlbmQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAQ29udGVudENoaWxkKEx5SW5wdXROYXRpdmUpIF9pbnB1dDogTHlJbnB1dE5hdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChMeVBsYWNlaG9sZGVyKSBfcGxhY2Vob2xkZXJDaGlsZDogTHlQbGFjZWhvbGRlcjtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsKSBfbGFiZWxDaGlsZDogTHlMYWJlbDtcbiAgQENvbnRlbnRDaGlsZHJlbihMeUhpbnQpIF9oaW50Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeUhpbnQ+O1xuICBAQ29udGVudENoaWxkcmVuKEx5UHJlZml4KSBfcHJlZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeVByZWZpeD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlTdWZmaXgpIF9zdWZmaXhDaGlsZHJlbjogUXVlcnlMaXN0PEx5U3VmZml4PjtcblxuICAvKiogV2hldGhlciB0aGUgbGFiZWwgaXMgZmxvYXRpbmcuICovXG4gIEBJbnB1dCgpXG4gIHNldCBmbG9hdGluZ0xhYmVsKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Zsb2F0aW5nTGFiZWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gIH1cbiAgZ2V0IGZsb2F0aW5nTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb2F0aW5nTGFiZWw7XG4gIH1cblxuICAvKiogRGVwcmVjYXRlZCwgaW5zdGVhZCB1c2UgYFtjb2xvcl0sIHRoZW1lIGNvbG9yIGZvciB0aGUgY29tcG9uZW50LiAqL1xuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fd2l0aENvbG9yKSB7XG4gICAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgICB0aGlzLl93aXRoQ29sb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1maWVsZC53aXRoQ29sb3I6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn06YWZ0ZXJgXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmV9YF06IHtcbiAgICAgICAgICAgIGNhcmV0Q29sb3I6IGNvbG9yXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MsIFNUWUxFX1BSSU9SSVRZICsgMSk7XG4gICAgfVxuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuXG4gIC8qKiBUaGUgZmllbGQgYXBwZWFyYW5jZSBzdHlsZS4gKi9cbiAgQElucHV0KClcbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgICBpZiAoISh0aGlzLl90aGVtZS5jb25maWcuZmllbGQuYXBwZWFyYW5jZVt2YWxdIHx8IERFRkFVTFRfQVBQRUFSQU5DRV9USEVNRVt2YWxdKSkgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbH0gbm90IGZvdW5kIGluIHRoZW1lLmZpZWxkLmFwcGVhcmFuY2VgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FwcGVhcmFuY2VDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1maWVsZC5hcHBlYXJhbmNlOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgYXBwZWFyYW5jZSA9IG1lcmdlRGVlcCh7fSwgdGhlbWUuZmllbGQuYXBwZWFyYW5jZS5hbnksIHRoZW1lLmZpZWxkLmFwcGVhcmFuY2VbdmFsXSB8fCBERUZBVUxUX0FQUEVBUkFOQ0VfVEhFTUVbdmFsXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9YF06IHsuLi5hcHBlYXJhbmNlLmNvbnRhaW5lcn0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5wcmVmaXh9YF06IHsuLi5hcHBlYXJhbmNlLnByZWZpeH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5pbmZpeH1gXTogey4uLmFwcGVhcmFuY2UuaW5maXh9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuc3VmZml4fWBdOiB7Li4uYXBwZWFyYW5jZS5zdWZmaXh9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmV9YF06IHsuLi5hcHBlYXJhbmNlLmlucHV0fSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7Li4uYXBwZWFyYW5jZS5maWVsZHNldH0sXG4gICAgICAgICAgW2AmOmhvdmVyIC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldH1gXTogey4uLmFwcGVhcmFuY2UuZmllbGRzZXRIb3Zlcn0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldH1gXTogey4uLmFwcGVhcmFuY2UuZmllbGRzZXRGb2N1c2VkfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnBsYWNlaG9sZGVyfWBdOiB7XG4gICAgICAgICAgICAuLi5hcHBlYXJhbmNlLnBsYWNlaG9sZGVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmxhYmVsfWBdOiB7XG4gICAgICAgICAgICAuLi5hcHBlYXJhbmNlLmxhYmVsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmhpbnR9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UuaGludFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsfS4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXTogey4uLmFwcGVhcmFuY2UuZmxvYXRpbmdMYWJlbH0sXG5cbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn1gXToge1xuICAgICAgICAgICAgLi4uYXBwZWFyYW5jZS5jb250YWluZXJGb2N1c2VkXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FwcGVhcmFuY2VDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBnZXQgYXBwZWFyYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRPYnNlcnZlcjogRWxlbWVudE9ic2VydmVyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5jb2xvcikge1xuICAgICAgdGhpcy53aXRoQ29sb3IgPSBjaGFuZ2VzLmNvbG9yLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzRGV2TW9kZSgpICYmIGNoYW5nZXMud2l0aENvbG9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2BMeUZpZWxkYCA+IGBbd2l0aENvbG9yXWAgaXMgZGVwcmVjYXRlZCwgaW5zdGVhZCB1c2UgYFtjb2xvcl1gJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy53aXRoQ29sb3IgPSBERUZBVUxUX1dJVEhfQ09MT1I7XG4gICAgfVxuICAgIGlmICghdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSBERUZBVUxUX0FQUEVBUkFOQ0U7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lucHV0Ll9ob3N0RWxlbWVudCwgdGhpcy5jbGFzc2VzLmlucHV0TmF0aXZlKTtcbiAgICB0aGlzLl9pbnB1dC5zdGF0ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5faW5wdXQubmdDb250cm9sO1xuXG4gICAgLy8gUnVuIGNoYW5nZSBkZXRlY3Rpb24gaWYgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgaWYgKG5nQ29udHJvbCAmJiBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3ByZWZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLnN0YXJ0KTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgRGlyQWxpYXMuc3RhcnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zdWZmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3N1ZmZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmVuZCk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsIERpckFsaWFzLmVuZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2xhYmVsU3Bhbikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fbGFiZWxTcGFuLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldFNwYW4oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHRoaXMgZml4IHdpdGggb2YgbGFiZWxcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuYW5pbWF0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGaWVsc2V0KGVsOiBFbGVtZW50LCBkaXI6IERpckFsaWFzKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgZmllbGRMZWdlbmRzdHlsZS5tYXJnaW4ke2Rpcn06JHt3aWR0aH1gLCAoKSA9PiAoe1xuICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldFNwYW59LCAmIC4ke3RoaXMuY2xhc3Nlcy5oaW50fWBdOiB7XG4gICAgICAgIFtgbWFyZ2luLSR7ZGlyfWBdOiBgJHt3aWR0aH1weGBcbiAgICAgIH1cbiAgICB9KSwgbnVsbCwgbnVsbCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgIGlmIChkaXIgPT09IERpckFsaWFzLnN0YXJ0KSB7XG4gICAgICB0aGlzLl9tYXJnaW5TdGFydENsYXNzID0gdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9tYXJnaW5TdGFydENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbWFyZ2luRW5kQ2xhc3MgPSB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX21hcmdpbkVuZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGaWVsc2V0U3BhbigpIHtcbiAgICBsZXQgeyB3aWR0aCB9ID0gdGhpcy5fbGFiZWxTcGFuLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCF0aGlzLl9pc0Zsb2F0aW5nKSB7XG4gICAgICB3aWR0aCAtPSB3aWR0aCAvIDEwMCAqIDI1O1xuICAgIH1cbiAgICAvKiogQWRkIDZweCBvZiBzcGFjaW5nICovXG4gICAgd2lkdGggKz0gNjtcbiAgICB0aGlzLl9maWVsc2V0U3BhbkNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYHN0eWxlLmZpZWxkc2V0U3BhbkZvY3VzZWQ6JHt3aWR0aH1gLCB7XG4gICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXRTcGFufWBdOiB7d2lkdGg6IGAke3dpZHRofXB4YH1cbiAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9maWVsc2V0U3BhbkNsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0LnBsYWNlaG9sZGVyICYmICF0aGlzLl9sYWJlbENoaWxkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xhYmVsQ2hpbGQgfHwgdGhpcy5fcGxhY2Vob2xkZXJDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIF9pc1BsYWNlaG9sZGVyKCkge1xuICAgIGlmICgodGhpcy5fbGFiZWxDaGlsZCAmJiB0aGlzLl9pbnB1dC5wbGFjZWhvbGRlcikgfHwgKHRoaXMuX2xhYmVsQ2hpbGQgJiYgdGhpcy5fcGxhY2Vob2xkZXJDaGlsZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNFbXB0eSgpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9pbnB1dC52YWx1ZTtcbiAgICByZXR1cm4gdmFsID09PSAnJyB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGbG9hdGluZ0xhYmVsKCkge1xuICAgIGlmICh0aGlzLl9sYWJlbENvbnRhaW5lcjIpIHtcbiAgICAgIGNvbnN0IGlzRmxvYXRpbmcgPSB0aGlzLl9pbnB1dC5mb2N1c2VkIHx8ICF0aGlzLl9pc0VtcHR5KCkgfHwgdGhpcy5mbG9hdGluZ0xhYmVsO1xuICAgICAgaWYgKHRoaXMuX2lzRmxvYXRpbmcgIT09IGlzRmxvYXRpbmcpIHtcbiAgICAgICAgdGhpcy5faXNGbG9hdGluZyA9IGlzRmxvYXRpbmc7XG4gICAgICAgIGlmIChpc0Zsb2F0aW5nKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fbGFiZWxDb250YWluZXIyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9sYWJlbENvbnRhaW5lcjIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWwpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9pbnB1dC5mb2N1c2VkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBMeUlucHV0TmF0aXZlIH0gZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgeyBMeVBsYWNlaG9sZGVyIH0gZnJvbSAnLi9wbGFjZWhvbGRlcic7XG5pbXBvcnQgeyBMeUxhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5pbXBvcnQgeyBMeVByZWZpeCB9IGZyb20gJy4vcHJlZml4JztcbmltcG9ydCB7IEx5U3VmZml4IH0gZnJvbSAnLi9zdWZmaXgnO1xuaW1wb3J0IHsgTHlIaW50IH0gZnJvbSAnLi9oaW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMeUNvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTHlGaWVsZCxcbiAgICBMeVBsYWNlaG9sZGVyLFxuICAgIEx5TGFiZWwsXG4gICAgTHlJbnB1dE5hdGl2ZSxcbiAgICBMeVByZWZpeCxcbiAgICBMeVN1ZmZpeCxcbiAgICBMeUhpbnQsXG4gICAgTHlDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbIEx5RmllbGQsIEx5UGxhY2Vob2xkZXIsIEx5TGFiZWwsIEx5SW5wdXROYXRpdmUsIEx5UHJlZml4LCBMeVN1ZmZpeCwgTHlIaW50IF1cbn0pXG5leHBvcnQgY2xhc3MgTHlGaWVsZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7TUFNTSxnQkFBZ0IsR0FBRyxhQUFhO0FBTXRDLE1BQWEsYUFBYTs7Ozs7Ozs7SUFnRXhCLFlBQ1UsR0FBdUQsRUFDdkQsU0FBb0IsRUFFRCxTQUFvQixFQUNuQyxXQUFtQixFQUNuQixnQkFBb0M7UUFMeEMsUUFBRyxHQUFILEdBQUcsQ0FBb0Q7UUFDdkQsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUVELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFqRXZDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVuQixpQkFBWSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzNELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFpRXZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDNUM7Ozs7SUFoRXNCLFFBQVE7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMxQjs7OztJQUVxQixPQUFPO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7O0lBQ3NCLFFBQVE7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7OztJQUdELElBQ0ksS0FBSyxDQUFDLEdBQUc7UUFDWCxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO0tBQ2hDOzs7Ozs7SUFHRCxJQUVJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBQ0QsSUFBSSxRQUFRO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUN0RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUVELElBRUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFDRCxJQUFJLFFBQVEsS0FBYyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7Ozs7SUFFbEQsSUFDSSxXQUFXLENBQUMsR0FBVztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztLQUN6Qjs7OztJQUNELElBQUksV0FBVyxLQUFhLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFOzs7O0lBYXZELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZFOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUI7Ozs7O0lBR0QsS0FBSyxLQUFXLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRTs7O1lBeEY3QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsUUFBUSxFQUFFLFNBQVM7YUFDcEI7Ozs7WUFYbUIsVUFBVTtZQUE0RCxTQUFTO1lBQzFGLFNBQVMsdUJBK0ViLFFBQVEsWUFBSSxJQUFJO1lBL0VELE1BQU0sdUJBZ0ZyQixRQUFRO1lBaEZlLGtCQUFrQix1QkFpRnpDLFFBQVE7Ozt1QkE3RFYsWUFBWSxTQUFDLE9BQU87c0JBSXBCLFlBQVksU0FBQyxNQUFNO3VCQU1uQixZQUFZLFNBQUMsT0FBTztvQkFRcEIsS0FBSzt1QkFZTCxXQUFXLFlBQ1gsS0FBSzt1QkFXTCxXQUFXLFlBQ1gsS0FBSzswQkFNTCxLQUFLOzs7Ozs7O0FDdEVSLE1BS2EsT0FBTzs7O1lBSG5CLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOzs7Ozs7O0FDSkQsTUFLYSxhQUFhOzs7WUFIekIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7Ozs7QUNKRDtNQUdNLE1BQU0sSUFBSTtJQUNkLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0NBQ0YsQ0FBQzs7OztBQU1GLE1BQWEsTUFBTTs7Ozs7O0lBQ2pCLFlBQ0UsU0FBb0IsRUFDcEIsR0FBZSxFQUNmLE1BQWdCOztjQUVWLFNBQVMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUk7UUFDbkQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ2xEOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7OztZQWRtQixTQUFTO1lBQUUsVUFBVTtZQUNoQyxRQUFROzs7Ozs7O0FDRGpCOzs7QUFPQSxNQUFhLFFBQVE7OztZQUhwQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7Ozs7QUNORDs7O0FBT0EsTUFBYSxRQUFROzs7WUFIcEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7Ozs7O0FDTkQ7TUE0Qk0sY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsa0JBQWtCLEdBQUcsVUFBVTs7TUFDL0Isd0JBQXdCLEdBQUc7SUFDL0IsUUFBUSxFQUFFO1FBQ1IsU0FBUyxFQUFFO1lBQ1QsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFO2dCQUNULGlCQUFpQixFQUFFLE9BQU87Z0JBQzFCLGlCQUFpQixFQUFFLEtBQUs7YUFDekI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2YsaUJBQWlCLEVBQUUsY0FBYzthQUNsQztTQUNGO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsU0FBUyxFQUFFO2dCQUNULFdBQVcsRUFBRSxLQUFLO2dCQUNsQixXQUFXLEVBQUUsY0FBYzthQUM1QjtTQUNGO1FBQ0QsbUJBQW1CLEVBQUU7WUFDbkIsS0FBSyxFQUFFLGNBQWM7U0FDdEI7UUFDRCxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsWUFBWTtTQUNyQjtRQUNELFdBQVcsRUFBRTtZQUNYLE1BQU0sRUFBRSxZQUFZO1NBQ3JCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLFlBQVk7U0FDckI7UUFDRCxhQUFhLEVBQUU7WUFDYixTQUFTLEVBQUUscUJBQXFCO1NBQ2pDO0tBQ0Y7Q0FDRjs7TUFDSyxrQkFBa0IsR0FBRyxTQUFTOztNQUM5QixNQUFNLEdBQUcsQ0FBQyxLQUFxQjtJQUNuQyxPQUFPO1FBQ0wsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLGNBQWM7WUFDdkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsWUFBWSxFQUFFLE1BQU07WUFDcEIsVUFBVSxFQUFFLEtBQUs7U0FDbEI7UUFDRCxVQUFVLEVBQUU7WUFDVixlQUFlLEVBQUU7Z0JBQ2YsVUFBVSxFQUFFLGFBQWEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRzthQUN4RztZQUNELFdBQVcsRUFBRTtnQkFDWCxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHO2FBQzlGO1NBQ0Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxNQUFNO1lBQ2YsVUFBVSxFQUFFLFFBQVE7WUFDcEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxvQkFDSixnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLE1BQU0sRUFDckIsV0FBVyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUNyQztTQUNGO1FBQ0QsUUFBUSxvQkFDSCxnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQ1QsV0FBVyxFQUFFLE9BQU8sRUFDcEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUNwQyxXQUFXLEVBQUUsQ0FBQyxHQUNmO1FBQ0QsWUFBWSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUM7WUFDVixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsT0FBTyxFQUFFLGNBQWM7U0FDeEI7UUFDRCxNQUFNLEVBQUU7WUFDTixTQUFTLEVBQUUsS0FBSztZQUNoQixPQUFPLEVBQUUsTUFBTTtZQUNmLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFNBQVMsa0JBQ1AsT0FBTyxFQUFFLE1BQU0sRUFDZixhQUFhLEVBQUUsTUFBTSxFQUNyQixTQUFTLEVBQUUsYUFBYSxJQUNyQixnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FDckM7U0FDRjtRQUNELEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLEtBQUssRUFBRSxNQUFNO1lBQ2IsU0FBUyxrQkFDUCxPQUFPLEVBQUUsTUFBTSxFQUNmLGFBQWEsRUFBRSxNQUFNLEVBQ3JCLFNBQVMsRUFBRSxhQUFhLElBQ3JCLGdCQUFnQixDQUFDLElBQUksSUFDeEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUNyQztTQUNGO1FBQ0QsTUFBTSxFQUFFO1lBQ04sU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLE1BQU07WUFDZixVQUFVLEVBQUUsUUFBUTtZQUNwQixTQUFTLGtCQUNQLE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLE1BQU0sRUFDckIsU0FBUyxFQUFFLGFBQWEsSUFDckIsZ0JBQWdCLENBQUMsSUFBSSxJQUN4QixXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQ3JDO1NBQ0Y7UUFDRCxjQUFjLG9CQUNULGdCQUFnQixDQUFDLElBQUksSUFDeEIsYUFBYSxFQUFFLE1BQU0sRUFDckIsT0FBTyxFQUFFLE1BQU0sRUFDZixLQUFLLEVBQUUsTUFBTSxFQUNiLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FDckM7UUFDRCxpQkFBaUIsRUFBRSxFQUFFO1FBQ3JCLFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLE1BQU07U0FDakI7UUFDRCxlQUFlLEVBQUU7WUFDZixJQUFJLEVBQUUsQ0FBQztTQUNSO1FBQ0QsS0FBSyxvQkFDQSxnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLE1BQU0sRUFBRSxDQUFDLEVBQ1QsTUFBTSxFQUFFLE1BQU0sRUFDZCxhQUFhLEVBQUUsTUFBTSxFQUNyQixVQUFVLEVBQUUsUUFBUSxFQUNwQixZQUFZLEVBQUUsVUFBVSxFQUN4QixRQUFRLEVBQUUsUUFBUSxFQUNsQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQzdCLEtBQUssRUFBRSxNQUFNLEdBQ2Q7UUFDRCxlQUFlLEVBQUUsRUFBRTtRQUNuQixhQUFhLEVBQUU7WUFDYixlQUFlLEVBQUU7Z0JBQ2YsUUFBUSxFQUFFLEtBQUs7YUFDaEI7U0FDRjtRQUNELFdBQVcsb0JBQ04sZ0JBQWdCLENBQUMsSUFBSSxJQUN4QixhQUFhLEVBQUUsTUFBTSxFQUNyQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQzlCO1FBQ0QsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUU7WUFDWCxNQUFNLEVBQUUsVUFBVTtZQUNsQixPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxNQUFNO1lBQ2YsTUFBTSxFQUFFLE1BQU07WUFDZCxlQUFlLEVBQUUsYUFBYTtZQUM5QixLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxNQUFNO1NBQ2Q7UUFDRCxJQUFJLEVBQUUsRUFBRztLQUNWLENBQUM7Q0FDSDs7OztBQUdELE1BQWEsV0FBVztDQUFJOzs7OztBQUc1QixNQUFhLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7QUFTdkQsTUFBYSxPQUFRLFNBQVEsZ0JBQWdCOzs7Ozs7Ozs7SUEwRzNDLFlBQ1UsU0FBb0IsRUFDcEIsR0FBZSxFQUNmLGdCQUFpQyxFQUNqQyxNQUFnQixFQUNoQixHQUFzQixFQUN0QixPQUFlO1FBRXZCLEtBQUssRUFBRSxDQUFDO1FBUEEsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQVE7Ozs7O1FBM0d6QixZQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBOEcxRCxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxRDs7Ozs7O0lBdkZELElBQ0ksYUFBYSxDQUFDLEdBQVk7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7S0FDN0I7Ozs7SUFDRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7S0FDNUI7Ozs7OztJQUdELElBQ0ksU0FBUyxDQUFDLEdBQVc7UUFDdkIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQXFCOztzQkFDdkYsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNoQyxPQUFPO29CQUNMLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsUUFBUSxHQUFHO3dCQUM5RCxLQUFLO3FCQUNOO29CQUNELENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHO3dCQUN2RCxXQUFXLEVBQUUsS0FBSztxQkFDbkI7b0JBQ0QsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUc7d0JBQ3BELEtBQUs7cUJBQ047b0JBQ0QsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUc7d0JBQ2xDLFVBQVUsRUFBRSxLQUFLO3FCQUNsQjtpQkFDRixDQUFDO2FBQ0gsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0RTtLQUNGOzs7O0lBQ0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7Ozs7SUFHRCxJQUNJLFVBQVUsQ0FBQyxHQUFXO1FBQ3hCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRztnQkFDakYsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsc0NBQXNDLENBQUMsQ0FBQzthQUMvRDtZQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFxQjs7c0JBQ3pGLFVBQVUsR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUgsT0FBTztvQkFDTCxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUscUJBQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQztvQkFDM0QsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLHFCQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUM7b0JBQ3JELENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxxQkFBTyxVQUFVLENBQUMsS0FBSyxDQUFDO29CQUNuRCxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUscUJBQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQztvQkFDckQsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLHFCQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUM7b0JBQ3pELENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxxQkFBTyxVQUFVLENBQUMsUUFBUSxDQUFDO29CQUN6RCxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUscUJBQU8sVUFBVSxDQUFDLGFBQWEsQ0FBQztvQkFDcEUsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLHFCQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUM7b0JBQ3hGLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxxQkFDNUIsVUFBVSxDQUFDLFdBQVcsQ0FDMUI7b0JBQ0QsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLHFCQUN0QixVQUFVLENBQUMsS0FBSyxDQUNwQjtvQkFDRCxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUscUJBQ3JCLFVBQVUsQ0FBQyxJQUFJLENBQ25CO29CQUNELENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxxQkFBTyxVQUFVLENBQUMsYUFBYSxDQUFDO29CQUV6RixDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUscUJBQ2xELFVBQVUsQ0FBQyxnQkFBZ0IsQ0FDL0I7aUJBQ0YsQ0FBQzthQUNILEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ25FO0tBQ0Y7Ozs7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDekI7Ozs7O0lBYUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxTQUFTLEVBQUUsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztTQUNoRjtLQUNGOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDO1NBQ3RDO0tBQ0Y7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCLENBQUMsQ0FBQzs7Y0FFRyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTOztRQUd2QyxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsWUFBWSxFQUFFO1lBQ3ZDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2dCQUMvQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7Z0JBQzdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFOzswQkFDbkIsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO29CQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO3dCQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3pDLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7MEJBQ25CLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtvQkFDOUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN2QyxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFOzswQkFDYixFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO29CQUN4QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7d0JBQ2hDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO3FCQUMzQixDQUFDLENBQUM7aUJBQ0o7YUFDRixDQUFDLENBQUM7U0FDSjs7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzFFOzs7Ozs7SUFFTyxjQUFjLENBQUMsRUFBVyxFQUFFLEdBQWE7Y0FDekMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUU7O2NBQ3RDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsR0FBRyxJQUFJLEtBQUssRUFBRSxFQUFFLE9BQU87WUFDckYsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUc7Z0JBQzVELENBQUMsVUFBVSxHQUFHLEVBQUUsR0FBRyxHQUFHLEtBQUssSUFBSTthQUNoQztTQUNGLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQztRQUMvQixJQUFJLEdBQUcsS0FBSyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM1SDthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDeEg7S0FDRjs7OztJQUVPLGtCQUFrQjtZQUNwQixFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLEtBQUssSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUMzQjs7UUFFRCxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLDZCQUE2QixLQUFLLEVBQUUsRUFBRTtZQUNsRixDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEtBQUssSUFBSSxFQUFDO1NBQzNGLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0tBQ3BFOzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNyRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7SUFHRCxjQUFjO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLE1BQU0sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUNqRyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7SUFHRCxRQUFROztjQUNBLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDN0IsT0FBTyxHQUFHLEtBQUssRUFBRSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsQ0FBQztLQUN4RDs7OztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7a0JBQ25CLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUNoRixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztnQkFDOUIsSUFBSSxVQUFVLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUMvRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzVGLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQ2xGO2FBQ0Y7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2RTthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxRTtLQUNGOzs7O0lBRU8sYUFBYTtRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pCOzs7WUF4UUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixrbERBQXlCO2dCQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQzthQUNsQjs7OztZQXhNQyxTQUFTO1lBSFQsVUFBVTtZQWFvRCxlQUFlO1lBQXBELFFBQVE7WUFoQmpDLGlCQUFpQjtZQVdqQixNQUFNOzs7OEJBbU5MLFNBQVMsU0FBQyxpQkFBaUI7K0JBQzNCLFNBQVMsU0FBQyxrQkFBa0I7eUJBQzVCLFNBQVMsU0FBQyxZQUFZOytCQUN0QixTQUFTLFNBQUMsa0JBQWtCOytCQUM1QixTQUFTLFNBQUMsa0JBQWtCOzhCQUM1QixTQUFTLFNBQUMsaUJBQWlCO3FCQUMzQixZQUFZLFNBQUMsYUFBYTtnQ0FDMUIsWUFBWSxTQUFDLGFBQWE7MEJBQzFCLFlBQVksU0FBQyxPQUFPOzRCQUNwQixlQUFlLFNBQUMsTUFBTTs4QkFDdEIsZUFBZSxTQUFDLFFBQVE7OEJBQ3hCLGVBQWUsU0FBQyxRQUFROzRCQUd4QixLQUFLO3dCQVVMLEtBQUs7eUJBNEJMLEtBQUs7Ozs7Ozs7QUN0UlIsTUE0QmEsYUFBYTs7O1lBakJ6QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTztvQkFDUCxhQUFhO29CQUNiLE9BQU87b0JBQ1AsYUFBYTtvQkFDYixRQUFRO29CQUNSLFFBQVE7b0JBQ1IsTUFBTTtvQkFDTixjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRSxDQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBRTthQUM3Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=