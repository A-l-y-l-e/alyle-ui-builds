/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation, ContentChildren, QueryList, NgZone } from '@angular/core';
import { LY_COMMON_STYLES, LyTheme2, mergeDeep, ElementObserver, Platform, toBoolean } from '@alyle/ui';
import { LyInputNative } from './input';
import { LyLabel } from './label';
import { LyPlaceholder } from './placeholder';
import { LyHint } from './hint';
import { LyPrefix } from './prefix';
import { LySuffix } from './suffix';
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
            '&:after': tslib_1.__assign({}, LY_COMMON_STYLES.fill, { content: "''", pointerEvents: 'none', borderColor: theme.input.borderColor })
        },
        fieldset: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { margin: 0, borderStyle: 'solid', borderColor: theme.input.borderColor, borderWidth: 0 }),
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
            '&:after': tslib_1.__assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
        },
        infix: {
            display: 'inline-flex',
            position: 'relative',
            alignItems: 'baseline',
            '&:after': tslib_1.__assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
        },
        suffix: {
            maxHeight: '2em',
            display: 'flex',
            alignItems: 'center',
            '&:after': tslib_1.__assign({ content: "''", pointerEvents: 'none', boxSizing: 'content-box' }, LY_COMMON_STYLES.fill, { borderColor: theme.input.borderColor })
        },
        labelContainer: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', display: 'flex', width: '100%', borderColor: theme.input.borderColor }),
        labelSpacingStart: {},
        labelCenter: {
            display: 'flex',
            maxWidth: '100%'
        },
        labelSpacingEnd: {
            flex: 1
        },
        label: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { margin: 0, border: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: theme.input.label, width: '100%' }),
        isFloatingLabel: {},
        floatingLabel: {
            '& {labelSpan}': {
                fontSize: '75%'
            }
        },
        placeholder: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { pointerEvents: 'none', color: theme.input.label }),
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
var ɵ0 = styles;
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
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
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
    Object.defineProperty(LyField.prototype, "withColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._withColor;
        },
        /** Theme color for the component. */
        set: /**
         * Theme color for the component.
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
        /** The field appearance style. */
        set: /**
         * The field appearance style.
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
                        _a["& ." + _this.classes.container] = tslib_1.__assign({}, appearance.container),
                        _a["& ." + _this.classes.prefix] = tslib_1.__assign({}, appearance.prefix),
                        _a["& ." + _this.classes.infix] = tslib_1.__assign({}, appearance.infix),
                        _a["& ." + _this.classes.suffix] = tslib_1.__assign({}, appearance.suffix),
                        _a["& ." + _this.classes.inputNative] = tslib_1.__assign({}, appearance.input),
                        _a["& ." + _this.classes.fieldset] = tslib_1.__assign({}, appearance.fieldset),
                        _a["&:hover ." + _this.classes.fieldset] = tslib_1.__assign({}, appearance.fieldsetHover),
                        _a["&." + _this.classes.focused + " ." + _this.classes.fieldset] = tslib_1.__assign({}, appearance.fieldsetFocused),
                        _a["& ." + _this.classes.placeholder] = tslib_1.__assign({}, appearance.placeholder),
                        _a["& ." + _this.classes.label] = tslib_1.__assign({}, appearance.label),
                        _a["& ." + _this.classes.floatingLabel + "." + _this.classes.label] = tslib_1.__assign({}, appearance.floatingLabel),
                        _a["&." + _this.classes.focused + " ." + _this.classes.container] = tslib_1.__assign({}, appearance.containerFocused),
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
        this._input.stateChanges.subscribe(function () {
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
        // this fix with of label
        this._renderer.addClass(this._el.nativeElement, this.classes.animations);
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
export { LyField };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJmaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsU0FBUyxFQUNULE1BQU0sRUFDTCxNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFrQixTQUFTLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDeEgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNoQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBRXBDLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUMxQixJQUFNLGtCQUFrQixHQUFHLFVBQVUsQ0FBQzs7QUFDdEMsSUFBTSxrQkFBa0IsR0FBRyxTQUFTLENBQUM7O0FBQ3JDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUI7SUFDbkMsT0FBTztRQUNMLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFVBQVUsRUFBRSxLQUFLO1NBQ2xCO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsZUFBZSxFQUFF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b0NBQzFCLFlBQVksU0FBQyxhQUFhOzhCQUMxQixZQUFZLFNBQUMsT0FBTztnQ0FDcEIsZUFBZSxTQUFDLE1BQU07a0NBQ3RCLGVBQWUsU0FBQyxRQUFRO2tDQUN4QixlQUFlLFNBQUMsUUFBUTtnQ0FHeEIsS0FBSzs0QkFVTCxLQUFLOzZCQTRCTCxLQUFLOztrQkF2T1I7O1NBb0thLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBOZ1pvbmVcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExZX0NPTU1PTl9TVFlMRVMsIEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcywgbWVyZ2VEZWVwLCBFbGVtZW50T2JzZXJ2ZXIsIFBsYXRmb3JtLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJbnB1dE5hdGl2ZSB9IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IHsgTHlMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHsgTHlQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgTHlIaW50IH0gZnJvbSAnLi9oaW50JztcbmltcG9ydCB7IEx5UHJlZml4IH0gZnJvbSAnLi9wcmVmaXgnO1xuaW1wb3J0IHsgTHlTdWZmaXggfSBmcm9tICcuL3N1ZmZpeCc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0FQUEVBUkFOQ0UgPSAnc3RhbmRhcmQnO1xuY29uc3QgREVGQVVMVF9XSVRIX0NPTE9SID0gJ3ByaW1hcnknO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBtYXJnaW5Cb3R0b206ICcxZW0nLFxuICAgICAgbGluZUhlaWdodDogMS4xMjVcbiAgICB9LFxuICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICcmIHtsYWJlbFNwYW59Jzoge1xuICAgICAgICB0cmFuc2l0aW9uOiBgZm9udC1zaXplICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9LFxuICAgICAgJyYge2xhYmVsfSc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogYCR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAuJHt0aGVtZS5hbmltYXRpb25zLmR1cmF0aW9ucy5jb21wbGV4fXNgXG4gICAgICB9XG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgICBjb250ZW50OiBgXFwnXFwnYCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuaW5wdXQuYm9yZGVyQ29sb3JcbiAgICAgIH1cbiAgICB9LFxuICAgIGZpZWxkc2V0OiB7XG4gICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXJDb2xvcixcbiAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgfSxcbiAgICBmaWVsZHNldFNwYW46IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBoZWlnaHQ6ICcycHgnXG4gICAgfSxcbiAgICBsYWJlbFNwYW46IHtcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH0sXG4gICAgcHJlZml4OiB7XG4gICAgICBtYXhIZWlnaHQ6ICcyZW0nLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgaW5maXg6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgc3VmZml4OiB7XG4gICAgICBtYXhIZWlnaHQ6ICcyZW0nLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgY29udGVudDogYFxcJ1xcJ2AsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5pbnB1dC5ib3JkZXJDb2xvclxuICAgICAgfVxuICAgIH0sXG4gICAgbGFiZWxDb250YWluZXI6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuaW5wdXQuYm9yZGVyQ29sb3JcbiAgICB9LFxuICAgIGxhYmVsU3BhY2luZ1N0YXJ0OiB7fSxcbiAgICBsYWJlbENlbnRlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgbGFiZWxTcGFjaW5nRW5kOiB7XG4gICAgICBmbGV4OiAxXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5pbnB1dC5sYWJlbCxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGlzRmxvYXRpbmdMYWJlbDoge30sXG4gICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgJyYge2xhYmVsU3Bhbn0nOiB7XG4gICAgICAgIGZvbnRTaXplOiAnNzUlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5pbnB1dC5sYWJlbFxuICAgIH0sXG4gICAgZm9jdXNlZDoge30sXG4gICAgaGludDoge30sXG4gICAgaW5wdXROYXRpdmU6IHtcbiAgICAgIHJlc2l6ZTogJ3ZlcnRpY2FsJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxuICB9O1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJ2ZpZWxkLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUZpZWxkIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgLyoqXG4gICAqIHN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJvdGVjdGVkIF9hcHBlYXJhbmNlOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfYXBwZWFyYW5jZUNsYXNzOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfd2l0aENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9pc0Zsb2F0aW5nOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2Zsb2F0aW5nTGFiZWw6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfZmllbHNldFN0YXJ0Q2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9maWVsc2V0RW5kQ2xhc3M6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9maWVsc2V0U3BhbkNsYXNzOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcicpIF9sYWJlbENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcjInKSBfbGFiZWxDb250YWluZXIyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsU3BhbicpIF9sYWJlbFNwYW46IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdfcHJlZml4Q29udGFpbmVyJykgX3ByZWZpeENvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ19zdWZmaXhDb250YWluZXInKSBfc3VmZml4Q29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnX2ZpZWxkc2V0TGVnZW5kJykgX2ZpZWxkc2V0TGVnZW5kOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQENvbnRlbnRDaGlsZChMeUlucHV0TmF0aXZlKSBfaW5wdXQ6IEx5SW5wdXROYXRpdmU7XG4gIEBDb250ZW50Q2hpbGQoTHlQbGFjZWhvbGRlcikgX3BsYWNlaG9sZGVyQ2hpbGQ6IEx5UGxhY2Vob2xkZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlMYWJlbCkgX2xhYmVsQ2hpbGQ6IEx5TGFiZWw7XG4gIEBDb250ZW50Q2hpbGRyZW4oTHlIaW50KSBfaGludENoaWxkcmVuOiBRdWVyeUxpc3Q8THlIaW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihMeVByZWZpeCkgX3ByZWZpeENoaWxkcmVuOiBRdWVyeUxpc3Q8THlQcmVmaXg+O1xuICBAQ29udGVudENoaWxkcmVuKEx5U3VmZml4KSBfc3VmZml4Q2hpbGRyZW46IFF1ZXJ5TGlzdDxMeVN1ZmZpeD47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGxhYmVsIGlzIGZsb2F0aW5nLiAqL1xuICBASW5wdXQoKVxuICBzZXQgZmxvYXRpbmdMYWJlbCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mbG9hdGluZ0xhYmVsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICB9XG4gIGdldCBmbG9hdGluZ0xhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9mbG9hdGluZ0xhYmVsO1xuICB9XG5cbiAgLyoqIFRoZW1lIGNvbG9yIGZvciB0aGUgY29tcG9uZW50LiAqL1xuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fd2l0aENvbG9yKSB7XG4gICAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgICB0aGlzLl93aXRoQ29sb3JDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseS1maWVsZC53aXRoQ29sb3I6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn06YWZ0ZXJgXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmLiR7dGhpcy5jbGFzc2VzLmZvY3VzZWR9IC4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXToge1xuICAgICAgICAgICAgY29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmV9YF06IHtcbiAgICAgICAgICAgIGNhcmV0Q29sb3I6IGNvbG9yXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MsIFNUWUxFX1BSSU9SSVRZICsgMSk7XG4gICAgfVxuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuXG4gIC8qKiBUaGUgZmllbGQgYXBwZWFyYW5jZSBzdHlsZS4gKi9cbiAgQElucHV0KClcbiAgc2V0IGFwcGVhcmFuY2UodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuX2FwcGVhcmFuY2UgPSB2YWw7XG4gICAgICBpZiAoISh0aGlzLl90aGVtZS5jb25maWcuaW5wdXQgYXMgYW55KS5hcHBlYXJhbmNlW3ZhbF0pICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx9IG5vdCBmb3VuZCBpbiB0aGVtZS5pbnB1dC5hcHBlYXJhbmNlYCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hcHBlYXJhbmNlQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHktZmllbGQuYXBwZWFyYW5jZToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwcGVhcmFuY2UgPSBtZXJnZURlZXAoe30sIHRoZW1lLmlucHV0LmFwcGVhcmFuY2UuYW55LCB0aGVtZS5pbnB1dC5hcHBlYXJhbmNlW3ZhbF0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfWBdOiB7Li4uYXBwZWFyYW5jZS5jb250YWluZXJ9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMucHJlZml4fWBdOiB7Li4uYXBwZWFyYW5jZS5wcmVmaXh9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMuaW5maXh9YF06IHsuLi5hcHBlYXJhbmNlLmluZml4fSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnN1ZmZpeH1gXTogey4uLmFwcGVhcmFuY2Uuc3VmZml4fSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLmlucHV0TmF0aXZlfWBdOiB7Li4uYXBwZWFyYW5jZS5pbnB1dH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldH1gXTogey4uLmFwcGVhcmFuY2UuZmllbGRzZXR9LFxuICAgICAgICAgIFtgJjpob3ZlciAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHsuLi5hcHBlYXJhbmNlLmZpZWxkc2V0SG92ZXJ9LFxuICAgICAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5mb2N1c2VkfSAuJHt0aGlzLmNsYXNzZXMuZmllbGRzZXR9YF06IHsuLi5hcHBlYXJhbmNlLmZpZWxkc2V0Rm9jdXNlZH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5wbGFjZWhvbGRlcn1gXToge1xuICAgICAgICAgICAgLi4uYXBwZWFyYW5jZS5wbGFjZWhvbGRlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXToge1xuICAgICAgICAgICAgLi4uYXBwZWFyYW5jZS5sYWJlbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy5mbG9hdGluZ0xhYmVsfS4ke3RoaXMuY2xhc3Nlcy5sYWJlbH1gXTogey4uLmFwcGVhcmFuY2UuZmxvYXRpbmdMYWJlbH0sXG5cbiAgICAgICAgICBbYCYuJHt0aGlzLmNsYXNzZXMuZm9jdXNlZH0gLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn1gXToge1xuICAgICAgICAgICAgLi4uYXBwZWFyYW5jZS5jb250YWluZXJGb2N1c2VkXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FwcGVhcmFuY2VDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cbiAgfVxuICBnZXQgYXBwZWFyYW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwZWFyYW5jZTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRPYnNlcnZlcjogRWxlbWVudE9ic2VydmVyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9IERFRkFVTFRfV0lUSF9DT0xPUjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IERFRkFVTFRfQVBQRUFSQU5DRTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5faW5wdXQuX2hvc3RFbGVtZW50LCB0aGlzLmNsYXNzZXMuaW5wdXROYXRpdmUpO1xuICAgIHRoaXMuX2lucHV0LnN0YXRlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLl9pbnB1dC5uZ0NvbnRyb2w7XG5cbiAgICAvLyBSdW4gY2hhbmdlIGRldGVjdGlvbiBpZiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICBpZiAobmdDb250cm9sICYmIG5nQ29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgIG5nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRmxvYXRpbmdMYWJlbCgpO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVGbG9hdGluZ0xhYmVsKCk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3ByZWZpeENvbnRhaW5lcikge1xuICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fcHJlZml4Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgJ3N0YXJ0Jyk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsICdzdGFydCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zdWZmaXhDb250YWluZXIpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3N1ZmZpeENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXQoZWwsICdlbmQnKTtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50T2JzZXJ2ZXIub2JzZXJ2ZShlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRmllbHNldChlbCwgJ2VuZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9sYWJlbFNwYW4pIHtcbiAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX2xhYmVsU3Bhbi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXRTcGFuKCk7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudE9ic2VydmVyLm9ic2VydmUoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZpZWxzZXRTcGFuKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyB0aGlzIGZpeCB3aXRoIG9mIGxhYmVsXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmFuaW1hdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRmllbHNldChlbDogRWxlbWVudCwgZjogJ3N0YXJ0JyB8ICdlbmQnKSB7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgc3R5bGUucGFkZGluZ1N0YXJ0OiR7d2lkdGh9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhlbWUuZ2V0RGlyZWN0aW9uKGYpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2BtYXJnaW4tJHtkaXJlY3Rpb259YF06IGAke3dpZHRofXB4YFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBpZiAoZiA9PT0gJ3N0YXJ0Jykge1xuICAgICAgdGhpcy5fdGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fZmllbGRzZXRMZWdlbmQubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9maWVsc2V0U3RhcnRDbGFzcyk7XG4gICAgICB0aGlzLl9maWVsc2V0U3RhcnRDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9maWVsZHNldExlZ2VuZC5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2ZpZWxzZXRFbmRDbGFzcyk7XG5cbiAgICAgIHRoaXMuX2ZpZWxzZXRFbmRDbGFzcyA9IG5ld0NsYXNzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZpZWxzZXRTcGFuKCkge1xuICAgIGxldCB7IHdpZHRoIH0gPSB0aGlzLl9sYWJlbFNwYW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoIXRoaXMuX2lzRmxvYXRpbmcpIHtcbiAgICAgIHdpZHRoIC09IHdpZHRoIC8gMTAwICogMjU7XG4gICAgfVxuICAgIC8qKiBBZGQgNnB4IG9mIHNwYWNpbmcgKi9cbiAgICB3aWR0aCArPSA2O1xuICAgIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgc3R5bGUuZmllbGRzZXRTcGFuRm9jdXNlZDoke3dpZHRofWAsIHtcbiAgICAgIFtgJi4ke3RoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWx9IC4ke3RoaXMuY2xhc3Nlcy5maWVsZHNldFNwYW59YF06IHt3aWR0aDogYCR7d2lkdGh9cHhgfVxuICAgIH0sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2ZpZWxzZXRTcGFuQ2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICAvKiogQGlnbm9yZSAqL1xuICBfaXNMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5faW5wdXQucGxhY2Vob2xkZXIgJiYgIXRoaXMuX2xhYmVsQ2hpbGQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbGFiZWxDaGlsZCB8fCB0aGlzLl9wbGFjZWhvbGRlckNoaWxkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgX2lzUGxhY2Vob2xkZXIoKSB7XG4gICAgaWYgKCh0aGlzLl9sYWJlbENoaWxkICYmIHRoaXMuX2lucHV0LnBsYWNlaG9sZGVyKSB8fCAodGhpcy5fbGFiZWxDaGlsZCAmJiB0aGlzLl9wbGFjZWhvbGRlckNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIF9pc0VtcHR5KCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2lucHV0LnZhbHVlO1xuICAgIHJldHVybiB2YWwgPT09ICcnIHx8IHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZsb2F0aW5nTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2xhYmVsQ29udGFpbmVyMikge1xuICAgICAgY29uc3QgaXNGbG9hdGluZyA9IHRoaXMuX2lucHV0LmZvY3VzZWQgfHwgIXRoaXMuX2lzRW1wdHkoKSB8fCB0aGlzLmZsb2F0aW5nTGFiZWw7XG4gICAgICBpZiAodGhpcy5faXNGbG9hdGluZyAhPT0gaXNGbG9hdGluZykge1xuICAgICAgICB0aGlzLl9pc0Zsb2F0aW5nID0gaXNGbG9hdGluZztcbiAgICAgICAgaWYgKGlzRmxvYXRpbmcpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9sYWJlbENvbnRhaW5lcjIubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZsb2F0aW5nTGFiZWwpO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5pc0Zsb2F0aW5nTGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2xhYmVsQ29udGFpbmVyMi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuZmxvYXRpbmdMYWJlbCk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmlzRmxvYXRpbmdMYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2lucHV0LmZvY3VzZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG59XG4iXX0=