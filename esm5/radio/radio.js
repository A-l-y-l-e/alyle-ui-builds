/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, forwardRef, NgModule, Input, Output, ChangeDetectorRef, ContentChildren, QueryList, Optional, EventEmitter, ChangeDetectionStrategy, NgZone, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { LyRippleModule } from '@alyle/ui/ripple';
import { NG_VALUE_ACCESSOR, FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyTheme2, LyCoreStyles, toBoolean, mixinColor, mixinDisableRipple } from '@alyle/ui';
import { LyRadioService } from './radio.service';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_DISABLE_RIPPLE = false;
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
        this.color = 'accent';
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
        color: [{ type: Input }],
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
    LyRadioGroup.prototype.color;
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
var LyRadioBase = /** @class */ (function () {
    function LyRadioBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyRadioBase;
}());
export { LyRadioBase };
if (false) {
    /** @type {?} */
    LyRadioBase.prototype._theme;
    /** @type {?} */
    LyRadioBase.prototype._ngZone;
}
/** @type {?} */
export var LyRadioMixinBase = mixinDisableRipple(mixinColor(LyRadioBase));
var LyRadio = /** @class */ (function (_super) {
    tslib_1.__extends(LyRadio, _super);
    function LyRadio(radioGroup, _elementRef, _renderer, theme, changeDetectorRef, ngZone, coreStyles) {
        var _this = _super.call(this, theme, ngZone) || this;
        _this.radioGroup = radioGroup;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this.changeDetectorRef = changeDetectorRef;
        _this.coreStyles = coreStyles;
        _this.id = "ly-radio-id-" + idx++;
        _this.name = '';
        _this._value = null;
        // private _withColor: string;
        _this._checked = false;
        // @Input()
        // set withColor(val: string) {
        //   if (this._withColor !== val) {
        //     this._withColor = val;
        //     if (this.checkedClass) {
        //       /** create new class if exist `this.checkedClass` */
        //       this.checkedClass = this._createStyleWithColor(val);
        //     }
        //   }
        // }
        // get withColor() {
        //   return this._withColor;
        // }
        _this.change = new EventEmitter();
        _this._triggerElement = _this._elementRef;
        _this._rippleConfig = {
            centered: true,
            radius: 'containerSize',
            percentageToIncrease: 100
        };
        _renderer.addClass(_elementRef.nativeElement, radioGroup._radioService.classes.radioButton);
        return _this;
    }
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
                    this.checkedClass = this.checkedClass || this._createStyleWithColor(this.color || this.radioGroup.color);
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
        return this._theme.addStyle("lyRadio-checked:" + val, function (theme) { return ({
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
     * @param {?} changes
     * @return {?}
     */
    LyRadio.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.color) {
            if (this.checkedClass) {
                /** create new class if exist `this.checkedClass` */
                this.checkedClass = this._createStyleWithColor(changes.color.currentValue);
            }
        }
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
    };
    /**
     * @return {?}
     */
    LyRadio.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._rippleContainer = this._radioContainer;
        // set default disable ripple
        if (this.disableRipple === null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
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
        this._removeRippleEvents();
    };
    LyRadio.decorators = [
        { type: Component, args: [{
                    selector: 'ly-radio',
                    // styleUrls: ['radio.scss'],
                    template: "\n  <label #_labelContainer [attr.for]=\"inputId\" [className]=\"radioGroup.classes.label\">\n    <input\n      [className]=\"coreStyles.classes.visuallyHidden\"\n      [id]=\"inputId\"\n      [checked]=\"checked\"\n      [name]=\"name\"\n      (change)=\"_onInputChange($event)\"\n      (click)=\"_onInputClick($event)\"\n      type=\"radio\"\n      >\n    <div #_radioContainer>\n      <div>\n        <div [className]=\"coreStyles.classes.fill\"></div>\n        <div [className]=\"coreStyles.classes.fill\"></div>\n      </div>\n    </div>\n    <div\n    [className]=\"radioGroup._radioService.classes.labelContent\">\n      <ng-content></ng-content>\n    </div>\n  </label>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    inputs: [
                        'color',
                        'disableRipple'
                    ]
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
        { type: LyCoreStyles }
    ]; };
    LyRadio.propDecorators = {
        _radioContainer: [{ type: ViewChild, args: ['_radioContainer',] }],
        _labelContainer: [{ type: ViewChild, args: ['_labelContainer',] }],
        change: [{ type: Output }],
        value: [{ type: Input }],
        checked: [{ type: Input }]
    };
    return LyRadio;
}(LyRadioMixinBase));
export { LyRadio };
if (false) {
    /** @type {?} */
    LyRadio.prototype.id;
    /** @type {?} */
    LyRadio.prototype.name;
    /** @type {?} */
    LyRadio.prototype._value;
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
    LyRadio.prototype.changeDetectorRef;
    /** @type {?} */
    LyRadio.prototype.coreStyles;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmFkaW8vIiwic291cmNlcyI6WyJyYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUdqQixlQUFlLEVBQ2YsU0FBUyxFQUNULFFBQVEsRUFDUixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFJVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUUzQyxjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixzQkFBc0IsR0FBRyxLQUFLOztBQUVwQyxNQUFNLEtBQU8sK0JBQStCLEdBQVE7SUFDbEQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxZQUFZLEVBQVosQ0FBWSxDQUFDO0lBQzNDLEtBQUssRUFBRSxJQUFJO0NBQ1o7O0lBRUcsR0FBRyxHQUFHLENBQUM7QUFFWDtJQUNFO0lBQWdCLENBQUM7SUFDbkIscUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7O0lBRUssTUFBTSxHQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQztJQUN2QixLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsU0FBUztRQUNqQixVQUFVLEVBQUUsUUFBUTtRQUNwQixRQUFRLEVBQUUsVUFBVTtRQUNwQixPQUFPLEVBQUUsTUFBTTtRQUNmLFVBQVUsRUFBRSxVQUFVO0tBQ3ZCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUUsTUFBTTtRQUNkLFNBQVMsRUFBRTtZQUNULE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsVUFBVSxFQUFFLHVDQUF1QztZQUNuRCxrQkFBa0IsRUFBRSxPQUFPO1lBQzNCLEtBQUssRUFBRSxLQUFLO1lBQ1osTUFBTSxFQUFFLEtBQUs7U0FDZDtRQUNELHFCQUFxQixFQUFFO1lBQ3JCLFVBQVUsRUFBRSxjQUFjO1lBQzFCLFNBQVMsRUFBRSxVQUFVO1NBQ3RCO1FBQ0QscUJBQXFCLEVBQUU7WUFDckIsU0FBUyxFQUFFLFVBQVU7WUFDckIsTUFBTSxFQUFFLDBCQUEwQjtZQUNsQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7U0FDcEM7S0FDRjtDQUNGLENBQUMsRUE5QnNCLENBOEJ0Qjs7QUFFRjtJQXFGRSxzQkFDUyxhQUE2QixFQUNwQyxVQUFzQixFQUN0QixTQUFvQixFQUNiLEtBQWUsRUFDZixNQUFjLEVBQ2IsRUFBcUI7UUFMdEIsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBRzdCLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFsRi9CLFdBQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQztRQUM1QixTQUFJLEdBQUcsbUJBQWlCLEdBQUcsRUFBSSxDQUFDO1FBQ2hDLFdBQU0sR0FBRyxRQUFRLENBQUM7UUFFbEIsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQWN4QyxXQUFNLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFFaEUsVUFBSyxHQUFHLFFBQVEsQ0FBQzs7OztRQUkxQixrQ0FBNkIsR0FBeUIsY0FBTyxDQUFDLENBQUM7Ozs7O1FBTS9ELGNBQVMsR0FBYyxjQUFPLENBQUMsQ0FBQztRQXNEOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUEvRUQsc0JBQ0ksK0JBQUs7Ozs7UUFPVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7OztRQVZELFVBQ1UsR0FBUTtZQUNoQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDakM7YUFDRjtRQUNILENBQUM7OztPQUFBO0lBbUJEOzs7T0FHRzs7Ozs7O0lBQ0gsNkJBQU07Ozs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpQ0FBVTs7OztJQUFWLFVBQVcsS0FBVTtRQUNuQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsdUNBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsRUFBd0I7UUFDdkMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILHdDQUFpQjs7Ozs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsdUNBQWdCOzs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNsQyw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBYUQsNENBQXFCOzs7O0lBQXJCLFVBQXNCLEdBQVE7UUFBOUIsaUJBa0JDOztZQWpCSyxVQUFtQjtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFdBQVc7WUFDOUIsSUFBSSxHQUFHLEtBQUssV0FBVyxDQUFDLEtBQUssRUFBRTtnQkFDN0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDNUI7aUJBQU0sSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO2dCQUM5QixXQUFXLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUM3QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLDhDQUE4QztZQUM5QyxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsa0NBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxtQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCx5Q0FBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUNwRCxDQUFDOztnQkFqSUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQXhEUSxjQUFjO2dCQWRyQixVQUFVO2dCQUNWLFNBQVM7Z0JBWWMsUUFBUTtnQkFmL0IsTUFBTTtnQkFSTixpQkFBaUI7Ozt3QkF3RmhCLEtBQUs7eUJBWUwsTUFBTTt3QkFFTixLQUFLOzBCQUNMLGVBQWUsU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLE9BQU8sRUFBUCxDQUFPLENBQUM7O0lBcUc1QyxtQkFBQztDQUFBLEFBbklELElBbUlDO1NBM0hZLFlBQVk7OztJQUN2Qiw4QkFBNEI7O0lBQzVCLDRCQUFnQzs7SUFDaEMsOEJBQWtCOztJQUVsQiwrQkFBMkQ7O0lBYzNELDhCQUF5RTs7SUFFekUsNkJBQTBCOztJQUMxQiwrQkFBd0U7Ozs7O0lBR3hFLHFEQUErRDs7Ozs7O0lBTS9ELGlDQUFnQzs7SUErQzlCLHFDQUFvQzs7SUFHcEMsNkJBQXNCOztJQUN0Qiw4QkFBcUI7O0lBQ3JCLDBCQUE2Qjs7QUEwQ2pDO0lBQ0UscUJBQ1MsTUFBZ0IsRUFDaEIsT0FBZTtRQURmLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUNwQixDQUFDO0lBQ1Asa0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUhHLDZCQUF1Qjs7SUFDdkIsOEJBQXNCOzs7QUFJMUIsTUFBTSxLQUFPLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUUzRTtJQWlDNkIsbUNBQWdCO0lBK0gzQyxpQkFDcUIsVUFBd0IsRUFDbkMsV0FBdUIsRUFDdkIsU0FBb0IsRUFDNUIsS0FBZSxFQUNQLGlCQUFvQyxFQUM1QyxNQUFjLEVBQ1AsVUFBd0I7UUFQakMsWUFTRSxrQkFBTSxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBUXJCO1FBaEJvQixnQkFBVSxHQUFWLFVBQVUsQ0FBYztRQUNuQyxpQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixlQUFTLEdBQVQsU0FBUyxDQUFXO1FBRXBCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFckMsZ0JBQVUsR0FBVixVQUFVLENBQWM7UUFySWpDLFFBQUUsR0FBRyxpQkFBZSxHQUFHLEVBQUksQ0FBQztRQUM1QixVQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsWUFBTSxHQUFHLElBQUksQ0FBQzs7UUFFTixjQUFRLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7OztRQWlCZixZQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQW1IN0MsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3hDLEtBQUksQ0FBQyxhQUFhLEdBQUc7WUFDbkIsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsZUFBZTtZQUN2QixvQkFBb0IsRUFBRSxHQUFHO1NBQzFCLENBQUM7UUFDRixTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7O0lBQzlGLENBQUM7SUF4SEQsc0JBQ0ksMEJBQUs7Ozs7UUFLVCxjQUFjLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7O1FBTm5DLFVBQ1UsR0FBRztZQUNYLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2FBQ25CO1FBQ0gsQ0FBQzs7O09BQUE7SUFHRCxzQkFDSSw0QkFBTzs7OztRQXNCWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQXpCRCxVQUNZLEdBQVk7O2dCQUNoQixlQUFlLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ2hDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUTtZQUM1QixJQUFJLE1BQU0sS0FBSyxlQUFlLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxJQUFJLGVBQWUsRUFBRTtvQkFDOUIsb0RBQW9EO29CQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekcsd0JBQXdCO29CQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRS9FLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTt3QkFDeEMsbUJBQW1CO3dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3pDO2lCQUNGO3FCQUFNO29CQUNMLDJCQUEyQjtvQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNuRjtnQkFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7UUFDSCxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLDRCQUFPOzs7O1FBQVg7WUFDRSxPQUFVLElBQUksQ0FBQyxFQUFFLFdBQVEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxnQ0FBYzs7OztJQUFkLFVBQWUsS0FBVTtRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELCtCQUFhOzs7O0lBQWIsVUFBYyxLQUFZLElBQUksS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7OztJQUV4RCxvQ0FBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsdUNBQXFCOzs7O0lBQXJCLFVBQXNCLEdBQVc7UUFDL0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDekIscUJBQW1CLEdBQUssRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUM7WUFDbEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ3pCLHFCQUFxQixFQUFFO2dCQUNyQixTQUFTLEVBQUUsYUFBYTtnQkFDeEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQzFCO1lBQ0QscUJBQXFCLEVBQUU7Z0JBQ3JCLFNBQVMsRUFBRSxZQUFZO2FBQ3hCO1NBQ0YsQ0FBQyxFQVRpQyxDQVNqQyxFQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUNsQyxJQUFJLENBQUMsWUFBWSxFQUNqQixjQUFjLENBQ2YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsNkJBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLG9EQUFvRDtnQkFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM1RTtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELDBCQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixvQ0FBb0M7WUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoRztJQUNILENBQUM7Ozs7SUFFRCxpQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUU3Qyw2QkFBNkI7UUFDN0IsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLHNCQUFzQixDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUVELCtCQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsNkJBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBN0pGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTs7b0JBRXBCLFFBQVEsRUFBRSwwcUJBc0JUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixNQUFNLEVBQUU7d0JBQ04sT0FBTzt3QkFDUCxlQUFlO3FCQUNoQjtpQkFDRjs7OztnQkFpSWtDLFlBQVksdUJBQTFDLFFBQVE7Z0JBOVdYLFVBQVU7Z0JBQ1YsU0FBUztnQkFZYyxRQUFRO2dCQXZCL0IsaUJBQWlCO2dCQVFqQixNQUFNO2dCQWUyQixZQUFZOzs7a0NBd081QyxTQUFTLFNBQUMsaUJBQWlCO2tDQUMzQixTQUFTLFNBQUMsaUJBQWlCO3lCQWMzQixNQUFNO3dCQUVOLEtBQUs7MEJBUUwsS0FBSzs7SUFpSFIsY0FBQztDQUFBLEFBbExELENBaUM2QixnQkFBZ0IsR0FpSjVDO1NBakpZLE9BQU87OztJQUNsQixxQkFBNEI7O0lBQzVCLHVCQUFVOztJQUNWLHlCQUFjOztJQUVkLDJCQUF5Qjs7SUFDekIsK0JBQTZCOztJQUM3QixrQ0FBa0U7O0lBQ2xFLGtDQUEwRDs7SUFjMUQseUJBQStDOztJQTBHN0MsNkJBQTJDOztJQUMzQyw4QkFBK0I7O0lBQy9CLDRCQUE0Qjs7SUFFNUIsb0NBQTRDOztJQUU1Qyw2QkFBK0I7O0FBYW5DO0lBQUE7SUFLNkIsQ0FBQzs7Z0JBTDdCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUM7b0JBQ3BFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7b0JBQ2hDLFlBQVksRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7aUJBQ3RDOztJQUM0QixvQkFBQztDQUFBLEFBTDlCLElBSzhCO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIGZvcndhcmRSZWYsXG4gIE5nTW9kdWxlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPcHRpb25hbCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgTmdab25lLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybXNNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZTIsIEx5Q29yZVN0eWxlcywgdG9Cb29sZWFuLCBtaXhpbkNvbG9yLCBtaXhpbkRpc2FibGVSaXBwbGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlSYWRpb1NlcnZpY2UgfSBmcm9tICcuL3JhZGlvLnNlcnZpY2UnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgTFlfUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlSYWRpb0dyb3VwKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmxldCBpZHggPSAwO1xuXG5leHBvcnQgY2xhc3MgVW5kZWZpbmVkVmFsdWUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBsYWJlbDoge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMS41ZW0nLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICcmPmRpdiAqJzoge1xuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjUwbXMnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMiknOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMSknOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICBib3JkZXI6ICdzb2xpZCAuMDhlbSBjdXJyZW50Q29sb3InLFxuICAgICAgY29sb3I6IHRoZW1lLnJhZGlvLnJhZGlvT3V0ZXJDaXJjbGVcbiAgICB9XG4gIH1cbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1yYWRpby1ncm91cCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHByb3ZpZGVyczogW0xZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGV4cG9ydEFzOiAnbHlSYWRpb0dyb3VwJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvR3JvdXAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIF92YWx1ZSA9IG5ldyBVbmRlZmluZWRWYWx1ZTtcbiAgbmFtZSA9IGBseS1yYWRpby1uYW1lLSR7aWR4Kyt9YDtcbiAgX2NvbG9yID0gJ2FjY2VudCc7XG5cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgaWYgKHRoaXMuX3JhZGlvcykge1xuICAgICAgICB0aGlzLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBJbnB1dCgpIGNvbG9yID0gJ2FjY2VudCc7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVJhZGlvKSkgX3JhZGlvczogUXVlcnlMaXN0PEx5UmFkaW8+O1xuXG4gIC8qKiBUaGUgbWV0aG9kIHRvIGJlIGNhbGxlZCBpbiBvcmRlciB0byB1cGRhdGUgbmdNb2RlbCAqL1xuICBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogb25Ub3VjaCBmdW5jdGlvbiByZWdpc3RlcmVkIHZpYSByZWdpc3Rlck9uVG91Y2ggKENvbnRyb2xWYWx1ZUFjY2Vzc29yKS5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcblxuICAvKipcbiAgICogTWFyayB0aGlzIGdyb3VwIGFzIGJlaW5nIFwidG91Y2hlZFwiIChmb3IgbmdNb2RlbCkuIE1lYW50IHRvIGJlIGNhbGxlZCBieSB0aGUgY29udGFpbmVkXG4gICAqIHJhZGlvIGJ1dHRvbnMgdXBvbiB0aGVpciBibHVyLlxuICAgKi9cbiAgX3RvdWNoKCkge1xuICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoISF0aGlzLl9yYWRpb3MpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBtb2RlbCB2YWx1ZSBjaGFuZ2VzLlxuICAgKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgcmVnaXN0ZXJlZC5cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb250cm9sIGlzIHRvdWNoZWQuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2wuIEltcGxlbWVudGVkIGFzIGEgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGlzRGlzYWJsZWQgV2hldGhlciB0aGUgY29udHJvbCBzaG91bGQgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9yYWRpb1NlcnZpY2U6IEx5UmFkaW9TZXJ2aWNlLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fcmFkaW9TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBfdXBkYXRlQ2hlY2tGcm9tVmFsdWUodmFsOiBhbnkpIHtcbiAgICBsZXQgbmV3Q2hlY2tlZDogYm9vbGVhbjtcbiAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpb0J1dHRvbiA9PiB7XG4gICAgICBpZiAodmFsID09PSByYWRpb0J1dHRvbi52YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZXZhbHVlKHZhbCk7XG4gICAgICAgIG5ld0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocmFkaW9CdXR0b24uY2hlY2tlZCkge1xuICAgICAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFuZXdDaGVja2VkKSB7XG4gICAgICAvKiogd2hlbiB2YWwgbm90IGV4aXN0IGluIHJhZGlvIGJ1dHRvbiAhPT0gICovXG4gICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKG51bGwpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGV2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KCk7XG4gICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX3JhZGlvUmVzZXRDaGVja2VkKCkge1xuICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKF8gPT4gXy5fc2V0Q2hlY2tlZFRvRmFsc3koKSk7XG4gIH1cblxufVxuXG5leHBvcnQgY2xhc3MgTHlSYWRpb0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBMeVJhZGlvTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlUmlwcGxlKG1peGluQ29sb3IoTHlSYWRpb0Jhc2UpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktcmFkaW8nLFxuICAvLyBzdHlsZVVybHM6IFsncmFkaW8uc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICA8bGFiZWwgI19sYWJlbENvbnRhaW5lciBbYXR0ci5mb3JdPVwiaW5wdXRJZFwiIFtjbGFzc05hbWVdPVwicmFkaW9Hcm91cC5jbGFzc2VzLmxhYmVsXCI+XG4gICAgPGlucHV0XG4gICAgICBbY2xhc3NOYW1lXT1cImNvcmVTdHlsZXMuY2xhc3Nlcy52aXN1YWxseUhpZGRlblwiXG4gICAgICBbaWRdPVwiaW5wdXRJZFwiXG4gICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgKGNoYW5nZSk9XCJfb25JbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChjbGljayk9XCJfb25JbnB1dENsaWNrKCRldmVudClcIlxuICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgID5cbiAgICA8ZGl2ICNfcmFkaW9Db250YWluZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLmZpbGxcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBbY2xhc3NOYW1lXT1cImNvcmVTdHlsZXMuY2xhc3Nlcy5maWxsXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgW2NsYXNzTmFtZV09XCJyYWRpb0dyb3VwLl9yYWRpb1NlcnZpY2UuY2xhc3Nlcy5sYWJlbENvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9sYWJlbD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBpbnB1dHM6IFtcbiAgICAnY29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5UmFkaW8gZXh0ZW5kcyBMeVJhZGlvTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIGlkID0gYGx5LXJhZGlvLWlkLSR7aWR4Kyt9YDtcbiAgbmFtZSA9ICcnO1xuICBfdmFsdWUgPSBudWxsO1xuICAvLyBwcml2YXRlIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuICBwcml2YXRlIGNoZWNrZWRDbGFzczogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdfcmFkaW9Db250YWluZXInKSBwcml2YXRlIF9yYWRpb0NvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnX2xhYmVsQ29udGFpbmVyJykgX2xhYmVsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAvLyBASW5wdXQoKVxuICAvLyBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gIC8vICAgaWYgKHRoaXMuX3dpdGhDb2xvciAhPT0gdmFsKSB7XG4gIC8vICAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gIC8vICAgICBpZiAodGhpcy5jaGVja2VkQ2xhc3MpIHtcbiAgLy8gICAgICAgLyoqIGNyZWF0ZSBuZXcgY2xhc3MgaWYgZXhpc3QgYHRoaXMuY2hlY2tlZENsYXNzYCAqL1xuICAvLyAgICAgICB0aGlzLmNoZWNrZWRDbGFzcyA9IHRoaXMuX2NyZWF0ZVN0eWxlV2l0aENvbG9yKHZhbCk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIGdldCB3aXRoQ29sb3IoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgLy8gfVxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWwpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbCkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgfVxuICB9XG4gIGdldCB2YWx1ZSgpIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNoZWNrZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3Q2hlY2tlZFN0YXRlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgY29uc3QgYmVmb3JlID0gdGhpcy5fY2hlY2tlZDtcbiAgICBpZiAoYmVmb3JlICE9PSBuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdDaGVja2VkU3RhdGU7XG4gICAgICBpZiAoIWJlZm9yZSAmJiBuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgICAgLyoqIFVzZSBjdXJyZW50IGNoZWNrZWQgY2xhc3Mgb3IgY3JlYXRlIG5ldyBjbGFzcyAqL1xuICAgICAgICB0aGlzLmNoZWNrZWRDbGFzcyA9IHRoaXMuY2hlY2tlZENsYXNzIHx8IHRoaXMuX2NyZWF0ZVN0eWxlV2l0aENvbG9yKHRoaXMuY29sb3IgfHwgdGhpcy5yYWRpb0dyb3VwLmNvbG9yKTtcbiAgICAgICAgLyoqIEFkZCBjbGFzcyBjaGVja2VkICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2hlY2tlZENsYXNzKTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5yYWRpb0dyb3VwLnZhbHVlKSB7XG4gICAgICAgICAgLyoqIHVwZGF0ZSBWYWx1ZSAqL1xuICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC51cGRhdGV2YWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIFJlbW92ZSBjbGFzcyBjaGVja2VkICovXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2hlY2tlZENsYXNzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmlkfS1pbnB1dGA7XG4gIH1cblxuICBfb25JbnB1dENoYW5nZShldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl91cGRhdGVDaGVja0Zyb21WYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJhZGlvR3JvdXAuX3RvdWNoKCk7XG4gIH1cblxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkgeyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuXG4gIF9zZXRDaGVja2VkVG9GYWxzeSgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9jcmVhdGVTdHlsZVdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseVJhZGlvLWNoZWNrZWQ6JHt2YWx9YCwgdGhlbWUgPT4gKHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKSxcbiAgICAgICAgJyYgZGl2PjpudGgtY2hpbGQoMSknOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yNSknLFxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgIH0sXG4gICAgICAgICcmIGRpdj46bnRoLWNoaWxkKDIpJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmNoZWNrZWRDbGFzcyxcbiAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5jb2xvcikge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZENsYXNzKSB7XG4gICAgICAgIC8qKiBjcmVhdGUgbmV3IGNsYXNzIGlmIGV4aXN0IGB0aGlzLmNoZWNrZWRDbGFzc2AgKi9cbiAgICAgICAgdGhpcy5jaGVja2VkQ2xhc3MgPSB0aGlzLl9jcmVhdGVTdHlsZVdpdGhDb2xvcihjaGFuZ2VzLmNvbG9yLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xuICAgICAgLy8gQ29weSBuYW1lIGZyb20gcGFyZW50IHJhZGlvIGdyb3VwXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnJhZGlvR3JvdXAubmFtZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmFkaW9Hcm91cC5jbGFzc2VzLmNvbnRhaW5lcik7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JhZGlvQ29udGFpbmVyO1xuXG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcmFkaW9Hcm91cDogTHlSYWRpb0dyb3VwLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIGNvcmVTdHlsZXM6IEx5Q29yZVN0eWxlc1xuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWY7XG4gICAgdGhpcy5fcmlwcGxlQ29uZmlnID0ge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICByYWRpdXM6ICdjb250YWluZXJTaXplJyxcbiAgICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiAxMDBcbiAgICB9O1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCByYWRpb0dyb3VwLl9yYWRpb1NlcnZpY2UuY2xhc3Nlcy5yYWRpb0J1dHRvbik7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvTW9kdWxlIHsgfVxuIl19