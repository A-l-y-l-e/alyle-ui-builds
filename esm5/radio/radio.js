/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, forwardRef, NgModule, Input, Output, ChangeDetectorRef, ContentChildren, QueryList, Optional, EventEmitter, ChangeDetectionStrategy, NgZone, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { LyRippleModule, LyRippleService, Ripple } from '@alyle/ui/ripple';
import { NG_VALUE_ACCESSOR, FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyTheme2, LyCoreStyles, toBoolean } from '@alyle/ui';
import { LyRadioService } from './radio.service';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
export var LY_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LyRadioGroup; }),
    multi: true
};
/** @type {?} */
var idx = 0;
var UndefinedValue = /** @class */ (function () {
    function UndefinedValue() {
    }
    return UndefinedValue;
}());
export { UndefinedValue };
/** @type {?} */
var styles = function (theme) { return ({
    label: {
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        position: 'relative',
        display: 'flex',
        alignItems: 'baseline'
    },
    container: {
        position: 'relative',
        width: '1.5em',
        margin: 'auto',
        '&>div *': {
            margin: 'auto',
            borderRadius: '50%',
            transition: 'transform cubic-bezier(.1, 1, 0.5, 1)',
            transitionDuration: '250ms',
            width: '1em',
            height: '1em'
        },
        '& div>:nth-child(2)': {
            background: 'currentColor',
            transform: 'scale(0)'
        },
        '& div>:nth-child(1)': {
            transform: 'scale(1)',
            border: 'solid .08em currentColor',
            color: theme.radio.radioOuterCircle
        }
    }
}); };
var ɵ0 = styles;
var LyRadioGroup = /** @class */ (function () {
    function LyRadioGroup(_radioService, elementRef, _renderer, theme, ngZone, cd) {
        this._radioService = _radioService;
        this.theme = theme;
        this.ngZone = ngZone;
        this.cd = cd;
        this._value = new UndefinedValue;
        this.name = "ly-radio-name-" + idx++;
        this._color = 'accent';
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.change = new EventEmitter();
        this.withColor = 'accent';
        /**
         * The method to be called in order to update ngModel
         */
        this._controlValueAccessorChangeFn = function () { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * \@docs-private
         */
        this.onTouched = function () { };
        _renderer.addClass(elementRef.nativeElement, this._radioService.classes.root);
    }
    Object.defineProperty(LyRadioGroup.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this._value !== val) {
                // this._value = val;
                if (this._radios) {
                    this._updateCheckFromValue(val);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     * @return {?}
     */
    LyRadioGroup.prototype._touch = /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     * @return {?}
     */
    function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LyRadioGroup.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!!this._radios) {
            this.value = value;
            this.markForCheck();
        }
    };
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    LyRadioGroup.prototype.registerOnChange = /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    LyRadioGroup.prototype.registerOnTouched = /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the control should be disabled.
     * @return {?}
     */
    LyRadioGroup.prototype.setDisabledState = /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the control should be disabled.
     * @return {?}
     */
    function (isDisabled) {
        // this.disabled = isDisabled;
        this.markForCheck();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LyRadioGroup.prototype._updateCheckFromValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        /** @type {?} */
        var newChecked;
        this._radios.forEach(function (radioButton) {
            if (val === radioButton.value) {
                _this.updatevalue(val);
                newChecked = true;
                radioButton.checked = true;
            }
            else if (radioButton.checked) {
                radioButton.checked = false;
            }
        });
        if (!newChecked) {
            /** when val not exist in radio button !==  */
            this._controlValueAccessorChangeFn(null);
            if (this._value !== null) {
                this._value = null;
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LyRadioGroup.prototype.updatevalue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this._controlValueAccessorChangeFn(value);
        this.change.emit();
        this.markForCheck();
    };
    /**
     * @return {?}
     */
    LyRadioGroup.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    LyRadioGroup.prototype._radioResetChecked = /**
     * @return {?}
     */
    function () {
        this._radios.forEach(function (_) { return _._setCheckedToFalsy(); });
    };
    LyRadioGroup.decorators = [
        { type: Component, args: [{
                    selector: 'ly-radio-group',
                    template: "<ng-content></ng-content>",
                    providers: [LY_RADIO_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    exportAs: 'lyRadioGroup'
                }] }
    ];
    /** @nocollapse */
    LyRadioGroup.ctorParameters = function () { return [
        { type: LyRadioService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: NgZone },
        { type: ChangeDetectorRef }
    ]; };
    LyRadioGroup.propDecorators = {
        value: [{ type: Input }],
        change: [{ type: Output }],
        withColor: [{ type: Input }],
        _radios: [{ type: ContentChildren, args: [forwardRef(function () { return LyRadio; }),] }]
    };
    return LyRadioGroup;
}());
export { LyRadioGroup };
if (false) {
    /** @type {?} */
    LyRadioGroup.prototype._value;
    /** @type {?} */
    LyRadioGroup.prototype.name;
    /** @type {?} */
    LyRadioGroup.prototype._color;
    /** @type {?} */
    LyRadioGroup.prototype.classes;
    /** @type {?} */
    LyRadioGroup.prototype.change;
    /** @type {?} */
    LyRadioGroup.prototype.withColor;
    /** @type {?} */
    LyRadioGroup.prototype._radios;
    /**
     * The method to be called in order to update ngModel
     * @type {?}
     */
    LyRadioGroup.prototype._controlValueAccessorChangeFn;
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * \@docs-private
     * @type {?}
     */
    LyRadioGroup.prototype.onTouched;
    /** @type {?} */
    LyRadioGroup.prototype._radioService;
    /** @type {?} */
    LyRadioGroup.prototype.theme;
    /** @type {?} */
    LyRadioGroup.prototype.ngZone;
    /** @type {?} */
    LyRadioGroup.prototype.cd;
}
var LyRadio = /** @class */ (function () {
    function LyRadio(radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, coreStyles, _rippleService) {
        this.radioGroup = radioGroup;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.theme = theme;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.coreStyles = coreStyles;
        this._rippleService = _rippleService;
        this.id = "ly-radio-id-" + idx++;
        this.name = '';
        this._value = null;
        this._checked = false;
        this.change = new EventEmitter();
        _renderer.addClass(_elementRef.nativeElement, radioGroup._radioService.classes.radioButton);
    }
    Object.defineProperty(LyRadio.prototype, "withColor", {
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
            if (this._withColor !== val) {
                this._withColor = val;
                if (this.checkedClass) {
                    /** create new class if exist `this.checkedClass` */
                    this.checkedClass = this._createStyleWithColor(val);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this._value !== val) {
                this._value = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "checked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newCheckedState = toBoolean(val);
            /** @type {?} */
            var before = this._checked;
            if (before !== newCheckedState) {
                this._checked = newCheckedState;
                if (!before && newCheckedState) {
                    /** Use current checked class or create new class */
                    this.checkedClass = this.checkedClass || this._createStyleWithColor(this.withColor || this.radioGroup.withColor);
                    /** Add class checked */
                    this._renderer.addClass(this._radioContainer.nativeElement, this.checkedClass);
                    if (this.value !== this.radioGroup.value) {
                        /** update Value */
                        this.radioGroup.updatevalue(this.value);
                    }
                }
                else {
                    /** Remove class checked */
                    this._renderer.removeClass(this._radioContainer.nativeElement, this.checkedClass);
                }
                this._markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyRadio.prototype, "inputId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.id + "-input";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    LyRadio.prototype._onInputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.radioGroup._updateCheckFromValue(this.value);
        // this.radioGroup._radioResetChecked();
        // this.checked = true;
        this.radioGroup._touch();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LyRadio.prototype._onInputClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { event.stopPropagation(); };
    /**
     * @return {?}
     */
    LyRadio.prototype._setCheckedToFalsy = /**
     * @return {?}
     */
    function () {
        this.checked = false;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LyRadio.prototype._createStyleWithColor = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return this.theme.addStyle("lyRadio-checked:" + val, function (theme) { return ({
            color: theme.colorOf(val),
            '& div>:nth-child(1)': {
                transform: 'scale(1.25)',
                color: theme.colorOf(val),
            },
            '& div>:nth-child(2)': {
                transform: 'scale(0.8)'
            },
        }); }, this._radioContainer.nativeElement, this.checkedClass, STYLE_PRIORITY);
    };
    /**
     * @return {?}
     */
    LyRadio.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.radioGroup) {
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
            this._renderer.addClass(this._radioContainer.nativeElement, this.radioGroup.classes.container);
        }
        this._ripple = new Ripple(this.theme.config, this.ngZone, this._rippleService.classes, this._radioContainer.nativeElement, this._elementRef.nativeElement);
        this._ripple.setConfig({
            centered: true,
            radius: 'containerSize',
            percentageToIncrease: 100
        });
    };
    /**
     * @return {?}
     */
    LyRadio.prototype._markForCheck = /**
     * @return {?}
     */
    function () {
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    LyRadio.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._ripple.removeEvents();
    };
    LyRadio.decorators = [
        { type: Component, args: [{
                    selector: 'ly-radio',
                    // styleUrls: ['radio.scss'],
                    template: "\n  <label #_labelContainer [attr.for]=\"inputId\" [className]=\"radioGroup.classes.label\">\n    <input\n      [className]=\"coreStyles.classes.visuallyHidden\"\n      [id]=\"inputId\"\n      [checked]=\"checked\"\n      [name]=\"name\"\n      (change)=\"_onInputChange($event)\"\n      (click)=\"_onInputClick($event)\"\n      type=\"radio\"\n      >\n    <div #_radioContainer>\n      <div>\n        <div [className]=\"coreStyles.classes.fill\"></div>\n        <div [className]=\"coreStyles.classes.fill\"></div>\n      </div>\n    </div>\n    <div\n    [className]=\"radioGroup._radioService.classes.labelContent\">\n      <ng-content></ng-content>\n    </div>\n  </label>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    LyRadio.ctorParameters = function () { return [
        { type: LyRadioGroup, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: LyCoreStyles },
        { type: LyRippleService }
    ]; };
    LyRadio.propDecorators = {
        _radioContainer: [{ type: ViewChild, args: ['_radioContainer',] }],
        _labelContainer: [{ type: ViewChild, args: ['_labelContainer',] }],
        withColor: [{ type: Input }],
        change: [{ type: Output }],
        value: [{ type: Input }],
        checked: [{ type: Input }]
    };
    return LyRadio;
}());
export { LyRadio };
if (false) {
    /** @type {?} */
    LyRadio.prototype.id;
    /** @type {?} */
    LyRadio.prototype.name;
    /** @type {?} */
    LyRadio.prototype._value;
    /** @type {?} */
    LyRadio.prototype._withColor;
    /** @type {?} */
    LyRadio.prototype._ripple;
    /** @type {?} */
    LyRadio.prototype._checked;
    /** @type {?} */
    LyRadio.prototype.checkedClass;
    /** @type {?} */
    LyRadio.prototype._radioContainer;
    /** @type {?} */
    LyRadio.prototype._labelContainer;
    /** @type {?} */
    LyRadio.prototype.change;
    /** @type {?} */
    LyRadio.prototype.radioGroup;
    /** @type {?} */
    LyRadio.prototype._elementRef;
    /** @type {?} */
    LyRadio.prototype._renderer;
    /** @type {?} */
    LyRadio.prototype.theme;
    /** @type {?} */
    LyRadio.prototype.changeDetectorRef;
    /** @type {?} */
    LyRadio.prototype.ngZone;
    /** @type {?} */
    LyRadio.prototype.coreStyles;
    /** @type {?} */
    LyRadio.prototype._rippleService;
}
var LyRadioModule = /** @class */ (function () {
    function LyRadioModule() {
    }
    LyRadioModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, LyRippleModule, LyCommonModule],
                    exports: [LyRadioGroup, LyRadio],
                    declarations: [LyRadioGroup, LyRadio],
                },] }
    ];
    return LyRadioModule;
}());
export { LyRadioModule };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmFkaW8vIiwic291cmNlcyI6WyJyYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBR2pCLGVBQWUsRUFDZixTQUFTLEVBQ1QsUUFBUSxFQUNSLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNFLE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsV0FBVyxHQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVqRCxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsV0FBYSwrQkFBK0IsR0FBUTtJQUNsRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLFlBQVksRUFBWixDQUFZLENBQUM7SUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDOztBQUVGLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUVaLElBQUE7SUFDRTtLQUFpQjt5QkF4Q25CO0lBeUNDLENBQUE7QUFGRCwwQkFFQzs7QUFFRCxJQUFNLE1BQU0sR0FBRyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUM7SUFDdkIsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLFNBQVM7UUFDakIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLE1BQU07UUFDZixVQUFVLEVBQUUsVUFBVTtLQUN2QjtJQUNELFNBQVMsRUFBRTtRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFFLE1BQU07UUFDZCxTQUFTLEVBQUU7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLFlBQVksRUFBRSxLQUFLO1lBQ25CLFVBQVUsRUFBRSx1Q0FBdUM7WUFDbkQsa0JBQWtCLEVBQUUsT0FBTztZQUMzQixLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxLQUFLO1NBQ2Q7UUFDRCxxQkFBcUIsRUFBRTtZQUNyQixVQUFVLEVBQUUsY0FBYztZQUMxQixTQUFTLEVBQUUsVUFBVTtTQUN0QjtRQUNELHFCQUFxQixFQUFFO1lBQ3JCLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLE1BQU0sRUFBRSwwQkFBMEI7WUFDbEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO1NBQ3BDO0tBQ0Y7Q0FDRixDQUFDLEVBOUJzQixDQThCdEIsQ0FBQzs7O0lBd0ZELHNCQUNTLGVBQ1AsVUFBc0IsRUFDdEIsU0FBb0IsRUFDYixPQUNBLFFBQ0M7UUFMRCxrQkFBYSxHQUFiLGFBQWE7UUFHYixVQUFLLEdBQUwsS0FBSztRQUNMLFdBQU0sR0FBTixNQUFNO1FBQ0wsT0FBRSxHQUFGLEVBQUU7UUFuRlosY0FBUyxJQUFJLGNBQWMsQ0FBQztRQUM1QixZQUFPLG1CQUFpQixHQUFHLEVBQUksQ0FBQztRQUNoQyxjQUFTLFFBQVEsQ0FBQztRQUVsQixlQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQWUzRCxjQUFnRCxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXpFLGlCQUFxQixRQUFRLENBQUM7Ozs7UUFJOUIscUNBQXNELGVBQVEsQ0FBQzs7Ozs7UUFNL0QsaUJBQXVCLGVBQVEsQ0FBQztRQXNEOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9FO0lBaEZELHNCQUNJLCtCQUFLOzs7O1FBUVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBWEQsVUFDVSxHQUFRO1lBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7O2dCQUV2QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDakM7YUFDRjtTQUNGOzs7T0FBQTtJQW1CRDs7O09BR0c7Ozs7OztJQUNILDZCQUFNOzs7OztJQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtLQUNGOzs7OztJQUVELGlDQUFVOzs7O0lBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsdUNBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsRUFBd0I7UUFDdkMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEVBQUUsQ0FBQztLQUN6QztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCx3Q0FBaUI7Ozs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCx1Q0FBZ0I7Ozs7O0lBQWhCLFVBQWlCLFVBQW1COztRQUVsQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7O0lBYUQsNENBQXFCOzs7O0lBQXJCLFVBQXNCLEdBQVE7UUFBOUIsaUJBa0JDOztRQWpCQyxJQUFJLFVBQVUsQ0FBVTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFdBQVc7WUFDOUIsSUFBSSxHQUFHLEtBQUssV0FBVyxDQUFDLEtBQUssRUFBRTtnQkFDN0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDNUI7aUJBQU0sSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO2dCQUM5QixXQUFXLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUM3QjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEVBQUU7O1lBRWYsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7S0FDRjs7Ozs7SUFFRCxrQ0FBVzs7OztJQUFYLFVBQVksS0FBVTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7SUFFRCxtQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQseUNBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7S0FDbkQ7O2dCQWxJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7b0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBdkRRLGNBQWM7Z0JBWHJCLFVBQVU7Z0JBQ1YsU0FBUztnQkFTYyxRQUFRO2dCQVovQixNQUFNO2dCQVJOLGlCQUFpQjs7O3dCQW9GaEIsS0FBSzt5QkFhTCxNQUFNOzRCQUVOLEtBQUs7MEJBQ0wsZUFBZSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsT0FBTyxFQUFQLENBQU8sQ0FBQzs7dUJBMUc1Qzs7U0FtRmEsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdSdkIsaUJBQ3FCLFVBQXdCLEVBQ25DLGFBQ0EsV0FDRCxPQUNDLG1CQUNBLFFBQ0QsWUFDQztRQVBXLGVBQVUsR0FBVixVQUFVLENBQWM7UUFDbkMsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsY0FBUyxHQUFULFNBQVM7UUFDVixVQUFLLEdBQUwsS0FBSztRQUNKLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsV0FBTSxHQUFOLE1BQU07UUFDUCxlQUFVLEdBQVYsVUFBVTtRQUNULG1CQUFjLEdBQWQsY0FBYztRQTdIeEIsVUFBSyxpQkFBZSxHQUFHLEVBQUksQ0FBQztRQUM1QixZQUFPLEVBQUUsQ0FBQztRQUNWLGNBQVMsSUFBSSxDQUFDO3dCQUdLLEtBQUs7UUFpQnhCLGNBQW1CLElBQUksWUFBWSxFQUFXLENBQUM7UUF5RzdDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM3RjtJQXZIRCxzQkFDSSw4QkFBUzs7OztRQVNiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztRQVpELFVBQ2MsR0FBVztZQUN2QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO2dCQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztnQkFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztvQkFFckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3JEO2FBQ0Y7U0FDRjs7O09BQUE7SUFNRCxzQkFDSSwwQkFBSzs7OztRQUtULGNBQWMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Ozs7O1FBTm5DLFVBQ1UsR0FBRztZQUNYLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2FBQ25CO1NBQ0Y7OztPQUFBO0lBR0Qsc0JBQ0ksNEJBQU87Ozs7UUFzQlg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBekJELFVBQ1ksR0FBWTs7WUFDdEIsSUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUN2QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzdCLElBQUksTUFBTSxLQUFLLGVBQWUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLElBQUksZUFBZSxFQUFFOztvQkFFOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7O29CQUVqSCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRS9FLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTs7d0JBRXhDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDekM7aUJBQ0Y7cUJBQU07O29CQUVMLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDbkY7Z0JBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCO1NBQ0Y7OztPQUFBO0lBSUQsc0JBQUksNEJBQU87Ozs7UUFBWDtZQUNFLE9BQVUsSUFBSSxDQUFDLEVBQUUsV0FBUSxDQUFDO1NBQzNCOzs7T0FBQTs7Ozs7SUFFRCxnQ0FBYzs7OztJQUFkLFVBQWUsS0FBVTtRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7OztRQUdsRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQzFCOzs7OztJQUVELCtCQUFhOzs7O0lBQWIsVUFBYyxLQUFZLElBQUksS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUU7Ozs7SUFFeEQsb0NBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7SUFFRCx1Q0FBcUI7Ozs7SUFBckIsVUFBc0IsR0FBVztRQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUN4QixxQkFBbUIsR0FBSyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztZQUNsQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDekIscUJBQXFCLEVBQUU7Z0JBQ3JCLFNBQVMsRUFBRSxhQUFhO2dCQUN4QixLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDMUI7WUFDRCxxQkFBcUIsRUFBRTtnQkFDckIsU0FBUyxFQUFFLFlBQVk7YUFDeEI7U0FDRixDQUFDLEVBVGlDLENBU2pDLEVBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQ2pCLGNBQWMsQ0FDZixDQUFDO0tBQ0g7Ozs7SUFFRCwwQkFBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7O1lBRW5CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDaEc7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzSixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNyQixRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLG9CQUFvQixFQUFFLEdBQUc7U0FDMUIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCwrQkFBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDdkM7Ozs7SUFFRCw2QkFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzdCOztnQkFoSkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVOztvQkFFcEIsUUFBUSxFQUFFLDBxQkFzQlQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQXdIa0MsWUFBWSx1QkFBMUMsUUFBUTtnQkFwVlgsVUFBVTtnQkFDVixTQUFTO2dCQVNjLFFBQVE7Z0JBcEIvQixpQkFBaUI7Z0JBUWpCLE1BQU07Z0JBWTJCLFlBQVk7Z0JBUHRCLGVBQWU7OztrQ0FrT3JDLFNBQVMsU0FBQyxpQkFBaUI7a0NBQzNCLFNBQVMsU0FBQyxpQkFBaUI7NEJBQzNCLEtBQUs7eUJBYUwsTUFBTTt3QkFFTixLQUFLOzBCQVFMLEtBQUs7O2tCQTlRUjs7U0E2T2EsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFvSW5CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUM7b0JBQ3BFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7b0JBQ2hDLFlBQVksRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7aUJBQ3RDOzt3QkFyWEQ7O1NBc1hhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIGZvcndhcmRSZWYsXG4gIE5nTW9kdWxlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPcHRpb25hbCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgTmdab25lLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlLCBMeVJpcHBsZVNlcnZpY2UsIFJpcHBsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHtcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3Jtc01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlLCBMeVRoZW1lMiwgTHlDb3JlU3R5bGVzLCB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlSYWRpb1NlcnZpY2UgfSBmcm9tICcuL3JhZGlvLnNlcnZpY2UnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgY29uc3QgTFlfUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlSYWRpb0dyb3VwKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmxldCBpZHggPSAwO1xuXG5leHBvcnQgY2xhc3MgVW5kZWZpbmVkVmFsdWUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBsYWJlbDoge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMS41ZW0nLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICcmPmRpdiAqJzoge1xuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjUwbXMnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMiknOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMSknOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICBib3JkZXI6ICdzb2xpZCAuMDhlbSBjdXJyZW50Q29sb3InLFxuICAgICAgY29sb3I6IHRoZW1lLnJhZGlvLnJhZGlvT3V0ZXJDaXJjbGVcbiAgICB9XG4gIH1cbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1yYWRpby1ncm91cCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHByb3ZpZGVyczogW0xZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGV4cG9ydEFzOiAnbHlSYWRpb0dyb3VwJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvR3JvdXAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIF92YWx1ZSA9IG5ldyBVbmRlZmluZWRWYWx1ZTtcbiAgbmFtZSA9IGBseS1yYWRpby1uYW1lLSR7aWR4Kyt9YDtcbiAgX2NvbG9yID0gJ2FjY2VudCc7XG5cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgLy8gdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgICBpZiAodGhpcy5fcmFkaW9zKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KCkgd2l0aENvbG9yID0gJ2FjY2VudCc7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVJhZGlvKSkgX3JhZGlvczogUXVlcnlMaXN0PEx5UmFkaW8+O1xuXG4gIC8qKiBUaGUgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbiBvcmRlciB0byB1cGRhdGUgbmdNb2RlbCAqL1xuICBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogb25Ub3VjaCBmdW5jdGlvbiByZWdpc3RlcmVkIHZpYSByZWdpc3Rlck9uVG91Y2ggKENvbnRyb2xWYWx1ZUFjY2Vzc29yKS5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogTWFyayB0aGlzIGdyb3VwIGFzIGJlaW5nIFwidG91Y2hlZFwiIChmb3IgbmdNb2RlbCkuIE1lYW50IHRvIGJlIGNhbGxlZCBieSB0aGUgY29udGFpbmVkXG4gICAqIHJhZGlvIGJ1dHRvbnMgdXBvbiB0aGVpciBibHVyLlxuICAgKi9cbiAgX3RvdWNoKCkge1xuICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoISF0aGlzLl9yYWRpb3MpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBtb2RlbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2wuIEltcGxlbWVudGVkIGFzIGEgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgV2hldGhlciB0aGUgY29udHJvbCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9yYWRpb1NlcnZpY2U6IEx5UmFkaW9TZXJ2aWNlLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fcmFkaW9TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBfdXBkYXRlQ2hlY2tGcm9tVmFsdWUodmFsOiBhbnkpIHtcbiAgICBsZXQgbmV3Q2hlY2tlZDogYm9vbGVhbjtcbiAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpb0J1dHRvbiA9PiB7XG4gICAgICBpZiAodmFsID09PSByYWRpb0J1dHRvbi52YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZXZhbHVlKHZhbCk7XG4gICAgICAgIG5ld0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFuZXdDaGVja2VkKSB7XG4gICAgICAvKiogd2hlbiB2YWwgbm90IGV4aXN0IGluIHJhZGlvIGJ1dHRvbiAhPT0gICovXG4gICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKG51bGwpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGV2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KCk7XG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX3JhZGlvUmVzZXRDaGVja2VkKCkge1xuICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKF8gPT4gXy5fc2V0Q2hlY2tlZFRvRmFsc3koKSk7XG4gIH1cblxufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktcmFkaW8nLFxuICAvLyBzdHlsZVVybHM6IFsncmFkaW8uc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICA8bGFiZWwgI19sYWJlbENvbnRhaW5lciBbYXR0ci5mb3JdPVwiaW5wdXRJZFwiIFtjbGFzc05hbWVdPVwicmFkaW9Hcm91cC5jbGFzc2VzLmxhYmVsXCI+XG4gICAgPGlucHV0XG4gICAgICBbY2xhc3NOYW1lXT1cImNvcmVTdHlsZXMuY2xhc3Nlcy52aXN1YWxseUhpZGRlblwiXG4gICAgICBbaWRdPVwiaW5wdXRJZFwiXG4gICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgKGNoYW5nZSk9XCJfb25JbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChjbGljayk9XCJfb25JbnB1dENsaWNrKCRldmVudClcIlxuICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgID5cbiAgICA8ZGl2ICNfcmFkaW9Db250YWluZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLmZpbGxcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBbY2xhc3NOYW1lXT1cImNvcmVTdHlsZXMuY2xhc3Nlcy5maWxsXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgW2NsYXNzTmFtZV09XCJyYWRpb0dyb3VwLl9yYWRpb1NlcnZpY2UuY2xhc3Nlcy5sYWJlbENvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9sYWJlbD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW8gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGlkID0gYGx5LXJhZGlvLWlkLSR7aWR4Kyt9YDtcbiAgbmFtZSA9ICcnO1xuICBfdmFsdWUgPSBudWxsO1xuICBwcml2YXRlIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfcmlwcGxlOiBSaXBwbGU7XG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjaGVja2VkQ2xhc3M6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnX3JhZGlvQ29udGFpbmVyJykgcHJpdmF0ZSBfcmFkaW9Db250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ19sYWJlbENvbnRhaW5lcicpIF9sYWJlbENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQElucHV0KClcbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl93aXRoQ29sb3IgIT09IHZhbCkge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZENsYXNzKSB7XG4gICAgICAgIC8qKiBjcmVhdGUgbmV3IGNsYXNzIGlmIGV4aXN0IGB0aGlzLmNoZWNrZWRDbGFzc2AgKi9cbiAgICAgICAgdGhpcy5jaGVja2VkQ2xhc3MgPSB0aGlzLl9jcmVhdGVTdHlsZVdpdGhDb2xvcih2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjaGVja2VkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld0NoZWNrZWRTdGF0ZSA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMuX2NoZWNrZWQ7XG4gICAgaWYgKGJlZm9yZSAhPT0gbmV3Q2hlY2tlZFN0YXRlKSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gbmV3Q2hlY2tlZFN0YXRlO1xuICAgICAgaWYgKCFiZWZvcmUgJiYgbmV3Q2hlY2tlZFN0YXRlKSB7XG4gICAgICAgIC8qKiBVc2UgY3VycmVudCBjaGVja2VkIGNsYXNzIG9yIGNyZWF0ZSBuZXcgY2xhc3MgKi9cbiAgICAgICAgdGhpcy5jaGVja2VkQ2xhc3MgPSB0aGlzLmNoZWNrZWRDbGFzcyB8fCB0aGlzLl9jcmVhdGVTdHlsZVdpdGhDb2xvcih0aGlzLndpdGhDb2xvciB8fCB0aGlzLnJhZGlvR3JvdXAud2l0aENvbG9yKTtcbiAgICAgICAgLyoqIEFkZCBjbGFzcyBjaGVja2VkICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2hlY2tlZENsYXNzKTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5yYWRpb0dyb3VwLnZhbHVlKSB7XG4gICAgICAgICAgLyoqIHVwZGF0ZSBWYWx1ZSAqL1xuICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC51cGRhdGV2YWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIFJlbW92ZSBjbGFzcyBjaGVja2VkICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2hlY2tlZENsYXNzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmlkfS1pbnB1dGA7XG4gIH1cblxuICBfb25JbnB1dENoYW5nZShldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAvLyB0aGlzLnJhZGlvR3JvdXAuX3JhZGlvUmVzZXRDaGVja2VkKCk7XG4gICAgLy8gdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnJhZGlvR3JvdXAuX3RvdWNoKCk7XG4gIH1cblxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkgeyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuXG4gIF9zZXRDaGVja2VkVG9GYWxzeSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9jcmVhdGVTdHlsZVdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGx5UmFkaW8tY2hlY2tlZDoke3ZhbH1gLCB0aGVtZSA9PiAoe1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZih2YWwpLFxuICAgICAgICAnJiBkaXY+Om50aC1jaGlsZCgxKSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjI1KScsXG4gICAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKSxcbiAgICAgICAgfSxcbiAgICAgICAgJyYgZGl2PjpudGgtY2hpbGQoMiknOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSdcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgdGhpcy5fcmFkaW9Db250YWluZXIubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuY2hlY2tlZENsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xuICAgICAgLy8gQ29weSBuYW1lIGZyb20gcGFyZW50IHJhZGlvIGdyb3VwXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnJhZGlvR3JvdXAubmFtZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmFkaW9Hcm91cC5jbGFzc2VzLmNvbnRhaW5lcik7XG4gICAgfVxuICAgIHRoaXMuX3JpcHBsZSA9IG5ldyBSaXBwbGUodGhpcy50aGVtZS5jb25maWcsIHRoaXMubmdab25lLCB0aGlzLl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fcmlwcGxlLnNldENvbmZpZyh7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHJhZGl1czogJ2NvbnRhaW5lclNpemUnLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IDEwMFxuICAgIH0pO1xuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmlwcGxlLnJlbW92ZUV2ZW50cygpO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcmFkaW9Hcm91cDogTHlSYWRpb0dyb3VwLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIGNvcmVTdHlsZXM6IEx5Q29yZVN0eWxlcyxcbiAgICBwcml2YXRlIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2VcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHJhZGlvR3JvdXAuX3JhZGlvU2VydmljZS5jbGFzc2VzLnJhZGlvQnV0dG9uKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlSaXBwbGVNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5UmFkaW9Hcm91cCwgTHlSYWRpb10sXG4gIGRlY2xhcmF0aW9uczogW0x5UmFkaW9Hcm91cCwgTHlSYWRpb10sXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9Nb2R1bGUgeyB9XG4iXX0=