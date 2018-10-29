/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation, ContentChildren, QueryList, NgZone } from '@angular/core';
import { LY_COMMON_STYLES, LyTheme2, mergeDeep, ElementObserver, Platform, toBoolean } from '@alyle/ui';
import { LyInputNative } from './input';
import { LyLabel } from './label';
import { LyPlaceholder } from './placeholder';
import { LyHint } from './hint';
import { LyPrefix } from './prefix';
import { LySuffix } from './suffix';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_APPEARANCE = 'standard';
/** @type {?} */
const DEFAULT_WITH_COLOR = 'primary';
/** @type {?} */
const styles = (theme) => {
    return {
        root: {
            display: 'inline-block',
            position: 'relative',
            marginBottom: '1em',
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
            '&:after': Object.assign({}, LY_COMMON_STYLES.fill, { content: `\'\'`, pointerEvents: 'none', borderColor: theme.input.borderColor })
        },
        fieldset: Object.assign({}, LY_COMMON_STYLES.fill, { margin: 0, borderStyle: 'solid', borderColor: theme.input.borderColor, borderWidth: 0 }),
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
            '&:after': Object.assign({ content: `\'\'`, pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
        },
        infix: {
            display: 'inline-flex',
            position: 'relative',
            alignItems: 'baseline',
            '&:after': Object.assign({ content: `\'\'`, pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
        },
        suffix: {
            maxHeight: '2em',
            display: 'flex',
            alignItems: 'center',
            '&:after': Object.assign({ content: `\'\'`, pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
        },
        labelContainer: Object.assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', display: 'flex', width: '100%', borderColor: theme.input.borderColor }),
        labelSpacingStart: {},
        labelCenter: {
            display: 'flex',
            maxWidth: '100%'
        },
        labelSpacingEnd: {
            flex: 1
        },
        label: Object.assign({}, LY_COMMON_STYLES.fill, { margin: 0, border: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: theme.input.label, width: '100%' }),
        isFloatingLabel: {},
        floatingLabel: {
            '& {labelSpan}': {
                fontSize: '75%'
            }
        },
        placeholder: Object.assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', color: theme.input.label }),
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
const ɵ0 = styles;
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
     * Theme color for the component.
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
            if (!(/** @type {?} */ (this._theme.config.input)).appearance[val]) {
                throw new Error(`${val} not found in theme.input.appearance`);
            }
            this._appearanceClass = this._theme.addStyle(`ly-field.appearance:${val}`, (theme) => {
                /** @type {?} */
                const appearance = mergeDeep({}, theme.input.appearance["any"], theme.input.appearance[val]);
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
                    this._updateFielset(el, 'start');
                    this._elementObserver.observe(el, () => {
                        this._updateFielset(el, 'start');
                    });
                }
                if (this._suffixContainer) {
                    /** @type {?} */
                    const el = this._suffixContainer.nativeElement;
                    this._updateFielset(el, 'end');
                    this._elementObserver.observe(el, () => {
                        this._updateFielset(el, 'end');
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
     * @param {?} f
     * @return {?}
     */
    _updateFielset(el, f) {
        const { width } = el.getBoundingClientRect();
        /** @type {?} */
        const newClass = this._theme.addStyle(`style.paddingStart:${width}`, (theme) => {
            return {
                [`margin-${f}`]: `${width}px`
            };
        });
        if (f === 'start') {
            this._theme.updateClass(this._fieldsetLegend.nativeElement, this._renderer, newClass, this._fielsetStartClass);
            this._fielsetStartClass = newClass;
        }
        else {
            this._theme.updateClass(this._fieldsetLegend.nativeElement, this._renderer, newClass, this._fielsetEndClass);
            this._fielsetEndClass = newClass;
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
                template: "<div [className]=\"classes.container\" (click)=\"_input.focus()\">\n  <fieldset [className]=\"classes.fieldset\"><legend #_fieldsetLegend [className]=\"classes.fieldsetSpan\"></legend></fieldset>\n  <div [className]=\"classes.prefix\" *ngIf=\"_prefixChildren.length\" #_prefixContainer>\n    <ng-content select=\"[lyPrefix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.infix\">\n    <ng-content></ng-content>\n    <div [className]=\"classes.label\" *ngIf=\"_isLabel()\" #_labelContainer2>\n      <span #_labelSpan [className]=\"classes.labelSpan\">\n        <ng-container *ngTemplateOutlet=\"_labelTemplate\"></ng-container>\n      </span>\n    </div>\n    <div [className]=\"classes.placeholder\" *ngIf=\"_isPlaceholder() && _isEmpty() && (_input.focused || floatingLabel)\">\n      <ng-container *ngTemplateOutlet=\"_placeholderTemplate\"></ng-container>\n    </div>\n  </div>\n  <div [className]=\"classes.suffix\" *ngIf=\"_suffixChildren.length\" #_suffixContainer>\n    <ng-content select=\"[lySuffix]\"></ng-content>\n  </div>\n  <div [className]=\"classes.hint\"></div>\n</div>\n\n<ng-template #_labelTemplate>\n  <ng-content select=\"ly-label\"></ng-content>\n  <ng-container *ngIf=\"!_labelChild\">\n    <ng-template *ngTemplateOutlet=\"_placeholderTemplate\"></ng-template>\n  </ng-container>\n</ng-template>\n\n<ng-template #_placeholderTemplate>\n  <ng-content select=\"ly-placeholder\"></ng-content>\n  <ng-container *ngIf=\"_input.placeholder\">{{ _input.placeholder }}</ng-container>\n</ng-template>\n",
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
if (false) {
    /**
     * styles
     * @ignore
     * @type {?}
     */
    LyField.prototype.classes;
    /** @type {?} */
    LyField.prototype._appearance;
    /** @type {?} */
    LyField.prototype._appearanceClass;
    /** @type {?} */
    LyField.prototype._withColor;
    /** @type {?} */
    LyField.prototype._withColorClass;
    /** @type {?} */
    LyField.prototype._isFloating;
    /** @type {?} */
    LyField.prototype._floatingLabel;
    /** @type {?} */
    LyField.prototype._fielsetStartClass;
    /** @type {?} */
    LyField.prototype._fielsetEndClass;
    /** @type {?} */
    LyField.prototype._fielsetSpanClass;
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
    LyField.prototype._input;
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
    LyField.prototype._renderer;
    /** @type {?} */
    LyField.prototype._el;
    /** @type {?} */
    LyField.prototype._elementObserver;
    /** @type {?} */
    LyField.prototype._theme;
    /** @type {?} */
    LyField.prototype._cd;
    /** @type {?} */
    LyField.prototype._ngZone;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQWtCLFNBQVMsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN4SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFcEMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBQzFCLE1BQU0sa0JBQWtCLEdBQUcsVUFBVSxDQUFDOztBQUN0QyxNQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQzs7QUFDckMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUU7SUFDdkMsT0FBTztRQUNMLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFVBQVUsRUFBRSxLQUFLO1NBQ2xCO1FBQ0QsVUFBVSxFQUFFO1lBQ1Ys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aUI7WUFXakIsTUFBTTs7OzhCQW9LTCxTQUFTLFNBQUMsaUJBQWlCOytCQUMzQixTQUFTLFNBQUMsa0JBQWtCO3lCQUM1QixTQUFTLFNBQUMsWUFBWTsrQkFDdEIsU0FBUyxTQUFDLGtCQUFrQjsrQkFDNUIsU0FBUyxTQUFDLGtCQUFrQjs4QkFDNUIsU0FBUyxTQUFDLGlCQUFpQjtxQkFDM0IsWUFBWSxTQUFDLGFBQWE7Z0NBQzFCLFlBQVksU0FBQyxhQUFhOzBCQUMxQixZQUFZLFNBQUMsT0FBTzs0QkFDcEIsZUFBZSxTQUFDLE1BQU07OEJBQ3RCLGVBQWUsU0FBQyxRQUFROzhCQUN4QixlQUFlLFNBQUMsUUFBUTs0QkFHeEIsS0FBSzt3QkFVTCxLQUFLO3lCQTRCTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgTmdab25lXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTLCBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMsIG1lcmdlRGVlcCwgRWxlbWVudE9ic2VydmVyLCBQbGF0Zm9ybSwgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SW5wdXROYXRpdmUgfSBmcm9tICcuL2lucHV0JztcbmltcG9ydCB7IEx5TGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IEx5UGxhY2Vob2xkZXIgfSBmcm9tICcuL3BsYWNlaG9sZGVyJztcbmltcG9ydCB7IEx5SGludCB9IGZyb20gJy4vaGludCc7XG5pbXBvcnQgeyBMeVByZWZpeCB9IGZyb20gJy4vcHJlZml4JztcbmltcG9ydCB7IEx5U3VmZml4IH0gZnJvbSAnLi9zdWZmaXgnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9BUFBFQVJBTkNFID0gJ3N0YW5kYXJkJztcbmNvbnN0IERFRkFVTFRfV0lUSF9DT0xPUiA9ICdwcmltYXJ5JztcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgbWFyZ2luQm90dG9tOiAnMWVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMTI1XG4gICAgfSxcbiAgICBhbmltYXRpb25zOiB7XG4gICAgICAnJiB7bGFiZWxTcGFufSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYGZvbnQtc2l6ZSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zYFxuICAgICAgfSxcbiAgICAgICcmIHtsYWJlbH0nOiB7XG4gICAgICAgIHRyYW5zaXRpb246IGAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gLiR7dGhlbWUuYW5pbWF0aW9ucy5kdXJhdGlvbnMuY29tcGxleH1zYFxuICAgICAgfVxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmlucHV0LmJvcmRlckNvbG9yXG4gICAgICB9XG4gICAgfSxcbiAgICBmaWVsZHNldDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuaW5wdXQuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogMFxuICAgIH0sXG4gICAgZmllbGRzZXRTcGFuOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgaGVpZ2h0OiAnMnB4J1xuICAgIH0sXG4gICAgbGFiZWxTcGFuOiB7XG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9LFxuICAgIHByZWZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuaW5wdXQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIGluZml4OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuaW5wdXQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIHN1ZmZpeDoge1xuICAgICAgbWF4SGVpZ2h0OiAnMmVtJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQ6IGBcXCdcXCdgLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuaW5wdXQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhYmVsQ29udGFpbmVyOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmlucHV0LmJvcmRlckNvbG9yXG4gICAgfSxcbiAgICBsYWJlbFNwYWNpbmdTdGFydDoge30sXG4gICAgbGFiZWxDZW50ZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGxhYmVsU3BhY2luZ0VuZDoge1xuICAgICAgZmxleDogMVxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBjb2xvcjogdGhlbWUuaW5wdXQubGFiZWwsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBpc0Zsb2F0aW5nTGFiZWw6IHt9LFxuICAgIGZsb2F0aW5nTGFiZWw6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICBmb250U2l6ZTogJzc1JSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBjb2xvcjogdGhlbWUuaW5wdXQubGFiZWxcbiAgICB9LFxuICAgIGZvY3VzZWQ6IHt9LFxuICAgIGhpbnQ6IHt9LFxuICAgIGlucHV0TmF0aXZlOiB7XG4gICAgICByZXNpemU6ICd2ZXJ0aWNhbCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgZm9udDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfTtcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICdmaWVsZC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlGaWVsZCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8qKlxuICAgKiBzdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByb3RlY3RlZCBfYXBwZWFyYW5jZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2FwcGVhcmFuY2VDbGFzczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3dpdGhDb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfaXNGbG9hdGluZzogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9mbG9hdGluZ0xhYmVsOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2ZpZWxzZXRTdGFydENsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfZmllbHNldEVuZENsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfZmllbHNldFNwYW5DbGFzczogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXInKSBfbGFiZWxDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXIyJykgX2xhYmVsQ29udGFpbmVyMjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbFNwYW4nKSBfbGFiZWxTcGFuOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX3ByZWZpeENvbnRhaW5lcicpIF9wcmVmaXhDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfc3VmZml4Q29udGFpbmVyJykgX3N1ZmZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19maWVsZHNldExlZ2VuZCcpIF9maWVsZHNldExlZ2VuZDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBDb250ZW50Q2hpbGQoTHlJbnB1dE5hdGl2ZSkgX2lucHV0OiBMeUlucHV0TmF0aXZlO1xuICBAQ29udGVudENoaWxkKEx5UGxhY2Vob2xkZXIpIF9wbGFjZWhvbGRlckNoaWxkOiBMeVBsYWNlaG9sZGVyO1xuICBAQ29udGVudENoaWxkKEx5TGFiZWwpIF9sYWJlbENoaWxkOiBMeUxhYmVsO1xuICBAQ29udGVudENoaWxkcmVuKEx5SGludCkgX2hpbnRDaGlsZHJlbjogUXVlcnlMaXN0PEx5SGludD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlQcmVmaXgpIF9wcmVmaXhDaGlsZHJlbjogUXVlcnlMaXN0PEx5UHJlZml4PjtcbiAgQENvbnRlbnRDaGlsZHJlbihMeVN1ZmZpeCkgX3N1ZmZpeENoaWxkcmVuOiBRdWVyeUxpc3Q8THlTdWZmaXg+O1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBsYWJlbCBpcyBmbG9hdGluZy4gKi9cbiAgQElucHV0KClcbiAgc2V0IGZsb2F0aW5nTGFiZWwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmxvYXRpbmdMYWJlbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgfVxuICBnZXQgZmxvYXRpbmdMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmxvYXRpbmdMYWJlbDtcbiAgfVxuXG4gIC8qKiBUaGVtZSBjb2xvciBmb3IgdGhlIGNvbXBvbmVudC4gKi9cbiAgQElucHV0KClcbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX3dpdGhDb2xvcikge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fd2l0aENvbG9yQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQud2l0aENvbG9yOiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9OmFmdGVyYF06IHtcbiAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMubGFiZWx9YF06IHtcbiAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmlucHV0TmF0aXZlfWBdOiB7XG4gICAgICAgICAgICBjYXJldENvbG9yOiBjb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3dpdGhDb2xvckNsYXNzLCBTVFlMRV9QUklPUklUWSArIDEpO1xuICAgIH1cbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cblxuICAvKiogVGhlIGZpZWxkIGFwcGVhcmFuY2Ugc3R5bGUuICovXG4gIEBJbnB1dCgpXG4gIHNldCBhcHBlYXJhbmNlKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlID0gdmFsO1xuICAgICAgaWYgKCEodGhpcy5fdGhlbWUuY29uZmlnLmlucHV0IGFzIGFueSkuYXBwZWFyYW5jZVt2YWxdKSAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsfSBub3QgZm91bmQgaW4gdGhlbWUuaW5wdXQuYXBwZWFyYW5jZWApO1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwZWFyYW5jZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5LWZpZWxkLmFwcGVhcmFuY2U6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBhcHBlYXJhbmNlID0gbWVyZ2VEZWVwKHt9LCB0aGVtZS5pbnB1dC5hcHBlYXJhbmNlLmFueSwgdGhlbWUuaW5wdXQuYXBwZWFyYW5jZVt2YWxdKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn1gXTogey4uLmFwcGVhcmFuY2UuY29udGFpbmVyfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnByZWZpeH1gXTogey4uLmFwcGVhcmFuY2UucHJlZml4fSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmluZml4fWBdOiB7Li4uYXBwZWFyYW5jZS5pbmZpeH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5zdWZmaXh9YF06IHsuLi5hcHBlYXJhbmNlLnN1ZmZpeH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5pbnB1dE5hdGl2ZX1gXTogey4uLmFwcGVhcmFuY2UuaW5wdXR9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHsuLi5hcHBlYXJhbmNlLmZpZWxkc2V0fSxcbiAgICAgICAgICBbYCY6aG92ZXIgLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7Li4uYXBwZWFyYW5jZS5maWVsZHNldEhvdmVyfSxcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0fWBdOiB7Li4uYXBwZWFyYW5jZS5maWVsZHNldEZvY3VzZWR9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMucGxhY2Vob2xkZXJ9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UucGxhY2Vob2xkZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMubGFiZWx9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UubGFiZWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbH0uJHt0aGlzLmNsYXNzZXMubGFiZWx9YF06IHsuLi5hcHBlYXJhbmNlLmZsb2F0aW5nTGFiZWx9LFxuXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9YF06IHtcbiAgICAgICAgICAgIC4uLmFwcGVhcmFuY2UuY29udGFpbmVyRm9jdXNlZFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGFwcGVhcmFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50T2JzZXJ2ZXI6IEVsZW1lbnRPYnNlcnZlcixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy53aXRoQ29sb3IgPSBERUZBVUxUX1dJVEhfQ09MT1I7XG4gICAgfVxuICAgIGlmICghdGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLmFwcGVhcmFuY2UgPSBERUZBVUxUX0FQUEVBUkFOQ0U7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lucHV0Ll9ob3N0RWxlbWVudCwgdGhpcy5jbGFzc2VzLmlucHV0TmF0aXZlKTtcbiAgICB0aGlzLl9pbnB1dC5zdGF0ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5faW5wdXQubmdDb250cm9sO1xuXG4gICAgLy8gUnVuIGNoYW5nZSBkZXRlY3Rpb24gaWYgdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAgaWYgKG5nQ29udHJvbCAmJiBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICBuZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKTtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9wcmVmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3ByZWZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsICdzdGFydCcpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCAnc3RhcnQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc3VmZml4Q29udGFpbmVyKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9zdWZmaXhDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0KGVsLCAnZW5kJyk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsICdlbmQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbGFiZWxTcGFuKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnRPYnNlcnZlci5vYnNlcnZlKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVGaWVsc2V0U3BhbigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gdGhpcyBmaXggd2l0aCBvZiBsYWJlbFxuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5hbmltYXRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZpZWxzZXQoZWw6IEVsZW1lbnQsIGY6ICdzdGFydCcgfCAnZW5kJykge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYHN0eWxlLnBhZGRpbmdTdGFydDoke3dpZHRofWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtgbWFyZ2luLSR7Zn1gXTogYCR7d2lkdGh9cHhgXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGlmIChmID09PSAnc3RhcnQnKSB7XG4gICAgICB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9maWVsZHNldExlZ2VuZC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2ZpZWxzZXRTdGFydENsYXNzKTtcbiAgICAgIHRoaXMuX2ZpZWxzZXRTdGFydENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX2ZpZWxkc2V0TGVnZW5kLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fZmllbHNldEVuZENsYXNzKTtcblxuICAgICAgdGhpcy5fZmllbHNldEVuZENsYXNzID0gbmV3Q2xhc3M7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldFNwYW4oKSB7XG4gICAgbGV0IHsgd2lkdGggfSA9IHRoaXMuX2xhYmVsU3Bhbi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghdGhpcy5faXNGbG9hdGluZykge1xuICAgICAgd2lkdGggLT0gd2lkdGggLyAxMDAgKiAyNTtcbiAgICB9XG4gICAgLyoqIEFkZCA2cHggb2Ygc3BhY2luZyAqL1xuICAgIHdpZHRoICs9IDY7XG4gICAgdGhpcy5fZmllbHNldFNwYW5DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBzdHlsZS5maWVsZHNldFNwYW5Gb2N1c2VkOiR7d2lkdGh9YCwge1xuICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbH0gLiR7dGhpcy5jbGFzc2VzLmZpZWxkc2V0U3Bhbn1gXToge3dpZHRoOiBgJHt3aWR0aH1weGB9XG4gICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fZmllbHNldFNwYW5DbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIC8qKiBAaWdub3JlICovXG4gIF9pc0xhYmVsKCkge1xuICAgIGlmICh0aGlzLl9pbnB1dC5wbGFjZWhvbGRlciAmJiAhdGhpcy5fbGFiZWxDaGlsZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYWJlbENoaWxkIHx8IHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNQbGFjZWhvbGRlcigpIHtcbiAgICBpZiAoKHRoaXMuX2xhYmVsQ2hpbGQgJiYgdGhpcy5faW5wdXQucGxhY2Vob2xkZXIpIHx8ICh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX3BsYWNlaG9sZGVyQ2hpbGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzRW1wdHkoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5faW5wdXQudmFsdWU7XG4gICAgcmV0dXJuIHZhbCA9PT0gJycgfHwgdmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmxvYXRpbmdMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5fbGFiZWxDb250YWluZXIyKSB7XG4gICAgICBjb25zdCBpc0Zsb2F0aW5nID0gdGhpcy5faW5wdXQuZm9jdXNlZCB8fCAhdGhpcy5faXNFbXB0eSgpIHx8IHRoaXMuZmxvYXRpbmdMYWJlbDtcbiAgICAgIGlmICh0aGlzLl9pc0Zsb2F0aW5nICE9PSBpc0Zsb2F0aW5nKSB7XG4gICAgICAgIHRoaXMuX2lzRmxvYXRpbmcgPSBpc0Zsb2F0aW5nO1xuICAgICAgICBpZiAoaXNGbG9hdGluZykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2xhYmVsQ29udGFpbmVyMi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fbGFiZWxDb250YWluZXIyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaXNGbG9hdGluZ0xhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5faW5wdXQuZm9jdXNlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiJdfQ==