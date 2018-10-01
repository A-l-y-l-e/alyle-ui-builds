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
        alignItems: 'center'
    },
    container: {
        position: 'relative',
        height: 'calc(1em * 3)',
        width: '1.5em',
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
        this.classes = this.theme.addStyleSheet(styles, 'lyRadio', STYLE_PRIORITY);
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
                },] },
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
            radius: 'containerSize'
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
                },] },
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
                },] },
    ];
    return LyRadioModule;
}());
export { LyRadioModule };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmFkaW8vIiwic291cmNlcyI6WyJyYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBR2pCLGVBQWUsRUFDZixTQUFTLEVBQ1QsUUFBUSxFQUNSLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNFLE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsV0FBVyxHQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVqRCxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsV0FBYSwrQkFBK0IsR0FBUTtJQUNsRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLFlBQVksRUFBWixDQUFZLENBQUM7SUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDOztBQUVGLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUVaLElBQUE7SUFDRTtLQUFpQjt5QkF4Q25CO0lBeUNDLENBQUE7QUFGRCwwQkFFQzs7QUFFRCxJQUFNLE1BQU0sR0FBRyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUM7SUFDdkIsS0FBSyxFQUFFO1FBQ0ws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QUFTLFNBQUMsaUJBQWlCOzRCQUMzQixLQUFLO3lCQWFMLE1BQU07d0JBRU4sS0FBSzswQkFRTCxLQUFLOztrQkE5UVI7O1NBNk9hLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBaUluQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO29CQUNwRSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO29CQUNoQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO2lCQUN0Qzs7d0JBbFhEOztTQW1YYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBmb3J3YXJkUmVmLFxuICBOZ01vZHVsZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT3B0aW9uYWwsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE5nWm9uZSxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSwgTHlSaXBwbGVTZXJ2aWNlLCBSaXBwbGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybXNNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZTIsIEx5Q29yZVN0eWxlcywgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5UmFkaW9TZXJ2aWNlIH0gZnJvbSAnLi9yYWRpby5zZXJ2aWNlJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuZXhwb3J0IGNvbnN0IExZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW9Hcm91cCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5sZXQgaWR4ID0gMDtcblxuZXhwb3J0IGNsYXNzIFVuZGVmaW5lZFZhbHVlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgbGFiZWw6IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgaGVpZ2h0OiAnY2FsYygxZW0gKiAzKScsXG4gICAgd2lkdGg6ICcxLjVlbScsXG4gICAgJyY+ZGl2IConOiB7XG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246ICcyNTBtcycsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgICBoZWlnaHQ6ICcxZW0nXG4gICAgfSxcbiAgICAnJiBkaXY+Om50aC1jaGlsZCgyKSc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknXG4gICAgfSxcbiAgICAnJiBkaXY+Om50aC1jaGlsZCgxKSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgIGJvcmRlcjogJ3NvbGlkIC4wOGVtIGN1cnJlbnRDb2xvcicsXG4gICAgICBjb2xvcjogdGhlbWUucmFkaW8ucmFkaW9PdXRlckNpcmNsZVxuICAgIH1cbiAgfVxufSk7XG4vLyBjb25zb2xlLmxvZygnbW9kdWxlLmlkJywgbW9kdWxlLmlkKTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXJhZGlvLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgcHJvdmlkZXJzOiBbTFlfUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZXhwb3J0QXM6ICdseVJhZGlvR3JvdXAnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW9Hcm91cCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgX3ZhbHVlID0gbmV3IFVuZGVmaW5lZFZhbHVlO1xuICBuYW1lID0gYGx5LXJhZGlvLW5hbWUtJHtpZHgrK31gO1xuICBfY29sb3IgPSAnYWNjZW50JztcblxuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5UmFkaW8nLCBTVFlMRV9QUklPUklUWSk7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbDogYW55KSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWwpIHtcbiAgICAgIC8vIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgICAgaWYgKHRoaXMuX3JhZGlvcykge1xuICAgICAgICB0aGlzLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBJbnB1dCgpIHdpdGhDb2xvciA9ICdhY2NlbnQnO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlSYWRpbykpIF9yYWRpb3M6IFF1ZXJ5TGlzdDxMeVJhZGlvPjtcblxuICAvKiogVGhlIG1ldGhvZCB0byBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gdXBkYXRlIG5nTW9kZWwgKi9cbiAgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIG9uVG91Y2ggZnVuY3Rpb24gcmVnaXN0ZXJlZCB2aWEgcmVnaXN0ZXJPblRvdWNoIChDb250cm9sVmFsdWVBY2Nlc3NvcikuXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG5cbiAgLyoqXG4gICAqIE1hcmsgdGhpcyBncm91cCBhcyBiZWluZyBcInRvdWNoZWRcIiAoZm9yIG5nTW9kZWwpLiBNZWFudCB0byBiZSBjYWxsZWQgYnkgdGhlIGNvbnRhaW5lZFxuICAgKiByYWRpbyBidXR0b25zIHVwb24gdGhlaXIgYmx1ci5cbiAgICovXG4gIF90b3VjaCgpIHtcbiAgICBpZiAodGhpcy5vblRvdWNoZWQpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKCEhdGhpcy5fcmFkaW9zKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgbW9kZWwgdmFsdWUgY2hhbmdlcy5cbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY29udHJvbCBpcyB0b3VjaGVkLlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRpc2FibGVkIHN0YXRlIG9mIHRoZSBjb250cm9sLiBJbXBsZW1lbnRlZCBhcyBhIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBpc0Rpc2FibGVkIFdoZXRoZXIgdGhlIGNvbnRyb2wgc2hvdWxkIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgLy8gdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfcmFkaW9TZXJ2aWNlOiBMeVJhZGlvU2VydmljZSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JhZGlvU2VydmljZS5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgX3VwZGF0ZUNoZWNrRnJvbVZhbHVlKHZhbDogYW55KSB7XG4gICAgbGV0IG5ld0NoZWNrZWQ6IGJvb2xlYW47XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2gocmFkaW9CdXR0b24gPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gcmFkaW9CdXR0b24udmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGV2YWx1ZSh2YWwpO1xuICAgICAgICBuZXdDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJhZGlvQnV0dG9uLmNoZWNrZWQpIHtcbiAgICAgICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghbmV3Q2hlY2tlZCkge1xuICAgICAgLyoqIHdoZW4gdmFsIG5vdCBleGlzdCBpbiByYWRpbyBidXR0b24gIT09ICAqL1xuICAgICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbihudWxsKTtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRldmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih2YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCgpO1xuICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9yYWRpb1Jlc2V0Q2hlY2tlZCgpIHtcbiAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChfID0+IF8uX3NldENoZWNrZWRUb0ZhbHN5KCkpO1xuICB9XG5cbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXJhZGlvJyxcbiAgLy8gc3R5bGVVcmxzOiBbJ3JhZGlvLnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgPGxhYmVsICNfbGFiZWxDb250YWluZXIgW2F0dHIuZm9yXT1cImlucHV0SWRcIiBbY2xhc3NOYW1lXT1cInJhZGlvR3JvdXAuY2xhc3Nlcy5sYWJlbFwiPlxuICAgIDxpbnB1dFxuICAgICAgW2NsYXNzTmFtZV09XCJjb3JlU3R5bGVzLmNsYXNzZXMudmlzdWFsbHlIaWRkZW5cIlxuICAgICAgW2lkXT1cImlucHV0SWRcIlxuICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgIChjaGFuZ2UpPVwiX29uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoY2xpY2spPVwiX29uSW5wdXRDbGljaygkZXZlbnQpXCJcbiAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICA+XG4gICAgPGRpdiAjX3JhZGlvQ29udGFpbmVyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBbY2xhc3NOYW1lXT1cImNvcmVTdHlsZXMuY2xhc3Nlcy5maWxsXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgW2NsYXNzTmFtZV09XCJjb3JlU3R5bGVzLmNsYXNzZXMuZmlsbFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgIFtjbGFzc05hbWVdPVwicmFkaW9Hcm91cC5fcmFkaW9TZXJ2aWNlLmNsYXNzZXMubGFiZWxDb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvbGFiZWw+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpZCA9IGBseS1yYWRpby1pZC0ke2lkeCsrfWA7XG4gIG5hbWUgPSAnJztcbiAgX3ZhbHVlID0gbnVsbDtcbiAgcHJpdmF0ZSBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JpcHBsZTogUmlwcGxlO1xuICBwcml2YXRlIF9jaGVja2VkID0gZmFsc2U7XG4gIHByaXZhdGUgY2hlY2tlZENsYXNzOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ19yYWRpb0NvbnRhaW5lcicpIHByaXZhdGUgX3JhZGlvQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXInKSBfbGFiZWxDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fd2l0aENvbG9yICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWRDbGFzcykge1xuICAgICAgICAvKiogY3JlYXRlIG5ldyBjbGFzcyBpZiBleGlzdCBgdGhpcy5jaGVja2VkQ2xhc3NgICovXG4gICAgICAgIHRoaXMuY2hlY2tlZENsYXNzID0gdGhpcy5fY3JlYXRlU3R5bGVXaXRoQ29sb3IodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgY2hlY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdDaGVja2VkU3RhdGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLl9jaGVja2VkO1xuICAgIGlmIChiZWZvcmUgIT09IG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld0NoZWNrZWRTdGF0ZTtcbiAgICAgIGlmICghYmVmb3JlICYmIG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgICAvKiogVXNlIGN1cnJlbnQgY2hlY2tlZCBjbGFzcyBvciBjcmVhdGUgbmV3IGNsYXNzICovXG4gICAgICAgIHRoaXMuY2hlY2tlZENsYXNzID0gdGhpcy5jaGVja2VkQ2xhc3MgfHwgdGhpcy5fY3JlYXRlU3R5bGVXaXRoQ29sb3IodGhpcy53aXRoQ29sb3IgfHwgdGhpcy5yYWRpb0dyb3VwLndpdGhDb2xvcik7XG4gICAgICAgIC8qKiBBZGQgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNoZWNrZWRDbGFzcyk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMucmFkaW9Hcm91cC52YWx1ZSkge1xuICAgICAgICAgIC8qKiB1cGRhdGUgVmFsdWUgKi9cbiAgICAgICAgICB0aGlzLnJhZGlvR3JvdXAudXBkYXRldmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBSZW1vdmUgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cbiAgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5pZH0taW5wdXRgO1xuICB9XG5cbiAgX29uSW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucmFkaW9Hcm91cC5fdXBkYXRlQ2hlY2tGcm9tVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgLy8gdGhpcy5yYWRpb0dyb3VwLl9yYWRpb1Jlc2V0Q2hlY2tlZCgpO1xuICAgIC8vIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl90b3VjaCgpO1xuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHsgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cblxuICBfc2V0Q2hlY2tlZFRvRmFsc3koKSB7XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxuICBfY3JlYXRlU3R5bGVXaXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseVJhZGlvLWNoZWNrZWQ6JHt2YWx9YCwgdGhlbWUgPT4gKHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKSxcbiAgICAgICAgJyYgZGl2PjpudGgtY2hpbGQoMSknOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yNSknLFxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgIH0sXG4gICAgICAgICcmIGRpdj46bnRoLWNoaWxkKDIpJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmNoZWNrZWRDbGFzcyxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnJhZGlvR3JvdXApIHtcbiAgICAgIC8vIENvcHkgbmFtZSBmcm9tIHBhcmVudCByYWRpbyBncm91cFxuICAgICAgdGhpcy5uYW1lID0gdGhpcy5yYWRpb0dyb3VwLm5hbWU7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLnJhZGlvR3JvdXAuY2xhc3Nlcy5jb250YWluZXIpO1xuICAgIH1cbiAgICB0aGlzLl9yaXBwbGUgPSBuZXcgUmlwcGxlKHRoaXMudGhlbWUuY29uZmlnLCB0aGlzLm5nWm9uZSwgdGhpcy5fcmlwcGxlU2VydmljZS5jbGFzc2VzLCB0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX3JpcHBsZS5zZXRDb25maWcoe1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICByYWRpdXM6ICdjb250YWluZXJTaXplJ1xuICAgIH0pO1xuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmlwcGxlLnJlbW92ZUV2ZW50cygpO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcmFkaW9Hcm91cDogTHlSYWRpb0dyb3VwLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIGNvcmVTdHlsZXM6IEx5Q29yZVN0eWxlcyxcbiAgICBwcml2YXRlIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2VcbiAgKSB7IH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvTW9kdWxlIHsgfVxuIl19