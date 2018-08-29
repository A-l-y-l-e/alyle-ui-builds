import { Injectable, Component, forwardRef, NgModule, Input, Output, ChangeDetectorRef, ContentChildren, Optional, EventEmitter, ChangeDetectionStrategy, NgZone, ViewChild, ElementRef, Renderer2, defineInjectable, inject } from '@angular/core';
import { LyTheme2, toBoolean, LyCoreStyles, LyCommonModule } from '@alyle/ui';
import { LyRippleModule, LyRippleService, Ripple } from '@alyle/ui/ripple';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var styles = ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    labelContent: {
        padding: '0 0.5em'
    }
});
var LyRadioService = /** @class */ (function () {
    function LyRadioService(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'lyRadioStatic');
    }
    LyRadioService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyRadioService.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyRadioService.ngInjectableDef = defineInjectable({ factory: function LyRadioService_Factory() { return new LyRadioService(inject(LyTheme2)); }, token: LyRadioService, providedIn: "root" });
    return LyRadioService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var LY_RADIO_CONTROL_VALUE_ACCESSOR = {
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
/** @type {?} */
var styles$1 = function (theme) { return ({
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
var LyRadioGroup = /** @class */ (function () {
    function LyRadioGroup(_radioService, elementRef, _renderer, theme, ngZone, cd) {
        this._radioService = _radioService;
        this.theme = theme;
        this.ngZone = ngZone;
        this.cd = cd;
        this._value = new UndefinedValue;
        this.name = "ly-radio-name-" + idx++;
        this._color = 'accent';
        this.classes = this.theme.addStyleSheet(styles$1, 'lyRadio', -1);
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
        }); }, this._radioContainer.nativeElement, this.checkedClass);
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
        this._rippleContainer = new Ripple(this.ngZone, this._rippleService.classes, this._radioContainer.nativeElement, this._elementRef.nativeElement);
        this._rippleContainer.setConfig({
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
        this._rippleContainer.removeEvents();
    };
    LyRadio.decorators = [
        { type: Component, args: [{
                    selector: 'ly-radio',
                    // styleUrls: ['radio.scss'],
                    template: "\n  <label #_labelContainer [attr.for]=\"inputId\" [className]=\"radioGroup.classes.label\">\n    <input\n      [className]=\"coreStyles.classes.visuallyHidden\"\n      [id]=\"inputId\"\n      [checked]=\"checked\"\n      [name]=\"name\"\n      (change)=\"_onInputChange($event)\"\n      (click)=\"_onInputClick($event)\"\n      type=\"radio\"\n      >\n    <div #_radioContainer>\n      <div>\n      <div [className]=\"coreStyles.classes.fill\"></div>\n      <div [className]=\"coreStyles.classes.fill\"></div>\n      </div>\n    </div>\n    <div\n    [className]=\"radioGroup._radioService.classes.labelContent\">\n      <ng-content></ng-content>\n    </div>\n  </label>\n  ",
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

export { LyRadioService, LY_RADIO_CONTROL_VALUE_ACCESSOR, UndefinedValue, LyRadioGroup, LyRadio, LyRadioModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmFkaW8uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9yYWRpby9yYWRpby5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmFkaW8vcmFkaW8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCdcbiAgfSxcbiAgbGFiZWxDb250ZW50OiB7XG4gICAgcGFkZGluZzogJzAgMC41ZW0nXG4gIH1cbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlSYWRpb1N0YXRpYycpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBmb3J3YXJkUmVmLFxuICBOZ01vZHVsZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT3B0aW9uYWwsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE5nWm9uZSxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSwgTHlSaXBwbGVTZXJ2aWNlLCBSaXBwbGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7XG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybXNNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZTIsIEx5Q29yZVN0eWxlcywgdG9Cb29sZWFuIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5UmFkaW9TZXJ2aWNlIH0gZnJvbSAnLi9yYWRpby5zZXJ2aWNlJztcbmV4cG9ydCBjb25zdCBMWV9SQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMeVJhZGlvR3JvdXApLFxuICBtdWx0aTogdHJ1ZVxufTtcblxubGV0IGlkeCA9IDA7XG5cbmV4cG9ydCBjbGFzcyBVbmRlZmluZWRWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIGxhYmVsOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGhlaWdodDogJ2NhbGMoMWVtICogMyknLFxuICAgIHdpZHRoOiAnMS41ZW0nLFxuICAgICcmPmRpdiAqJzoge1xuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMjUwbXMnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMiknOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICAgIH0sXG4gICAgJyYgZGl2PjpudGgtY2hpbGQoMSknOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICBib3JkZXI6ICdzb2xpZCAuMDhlbSBjdXJyZW50Q29sb3InLFxuICAgICAgY29sb3I6IHRoZW1lLnJhZGlvLnJhZGlvT3V0ZXJDaXJjbGVcbiAgICB9XG4gIH1cbn0pO1xuLy8gY29uc29sZS5sb2coJ21vZHVsZS5pZCcsIG1vZHVsZS5pZCk7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1yYWRpby1ncm91cCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHByb3ZpZGVyczogW0xZX1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGV4cG9ydEFzOiAnbHlSYWRpb0dyb3VwJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvR3JvdXAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIF92YWx1ZSA9IG5ldyBVbmRlZmluZWRWYWx1ZTtcbiAgbmFtZSA9IGBseS1yYWRpby1uYW1lLSR7aWR4Kyt9YDtcbiAgX2NvbG9yID0gJ2FjY2VudCc7XG5cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseVJhZGlvJywgLTEpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZSh2YWw6IGFueSkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAvLyB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2hlY2tGcm9tVmFsdWUodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBASW5wdXQoKSB3aXRoQ29sb3IgPSAnYWNjZW50JztcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5UmFkaW8pKSBfcmFkaW9zOiBRdWVyeUxpc3Q8THlSYWRpbz47XG5cbiAgLyoqIFRoZSBtZXRob2QgdG8gYmUgY2FsbGVkIGluIG9yZGVyIHRvIHVwZGF0ZSBuZ01vZGVsICovXG4gIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBvblRvdWNoIGZ1bmN0aW9uIHJlZ2lzdGVyZWQgdmlhIHJlZ2lzdGVyT25Ub3VjaCAoQ29udHJvbFZhbHVlQWNjZXNzb3IpLlxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuXG4gIC8qKlxuICAgKiBNYXJrIHRoaXMgZ3JvdXAgYXMgYmVpbmcgXCJ0b3VjaGVkXCIgKGZvciBuZ01vZGVsKS4gTWVhbnQgdG8gYmUgY2FsbGVkIGJ5IHRoZSBjb250YWluZWRcbiAgICogcmFkaW8gYnV0dG9ucyB1cG9uIHRoZWlyIGJsdXIuXG4gICAqL1xuICBfdG91Y2goKSB7XG4gICAgaWYgKHRoaXMub25Ub3VjaGVkKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICghIXRoaXMuX3JhZGlvcykge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG1vZGVsIHZhbHVlIGNoYW5nZXMuXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbnRyb2wgaXMgdG91Y2hlZC5cbiAgICogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbC4gSW1wbGVtZW50ZWQgYXMgYSBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZCBXaGV0aGVyIHRoZSBjb250cm9sIHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIC8vIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3JhZGlvU2VydmljZTogTHlSYWRpb1NlcnZpY2UsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9yYWRpb1NlcnZpY2UuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIF91cGRhdGVDaGVja0Zyb21WYWx1ZSh2YWw6IGFueSkge1xuICAgIGxldCBuZXdDaGVja2VkOiBib29sZWFuO1xuICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKHJhZGlvQnV0dG9uID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHJhZGlvQnV0dG9uLnZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRldmFsdWUodmFsKTtcbiAgICAgICAgbmV3Q2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHJhZGlvQnV0dG9uLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChyYWRpb0J1dHRvbi5jaGVja2VkKSB7XG4gICAgICAgIHJhZGlvQnV0dG9uLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIW5ld0NoZWNrZWQpIHtcbiAgICAgIC8qKiB3aGVuIHZhbCBub3QgZXhpc3QgaW4gcmFkaW8gYnV0dG9uICE9PSAgKi9cbiAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4obnVsbCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZXZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoKTtcbiAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcmFkaW9SZXNldENoZWNrZWQoKSB7XG4gICAgdGhpcy5fcmFkaW9zLmZvckVhY2goXyA9PiBfLl9zZXRDaGVja2VkVG9GYWxzeSgpKTtcbiAgfVxuXG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1yYWRpbycsXG4gIC8vIHN0eWxlVXJsczogWydyYWRpby5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gIDxsYWJlbCAjX2xhYmVsQ29udGFpbmVyIFthdHRyLmZvcl09XCJpbnB1dElkXCIgW2NsYXNzTmFtZV09XCJyYWRpb0dyb3VwLmNsYXNzZXMubGFiZWxcIj5cbiAgICA8aW5wdXRcbiAgICAgIFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLnZpc3VhbGx5SGlkZGVuXCJcbiAgICAgIFtpZF09XCJpbnB1dElkXCJcbiAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxuICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAoY2hhbmdlKT1cIl9vbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgICAgKGNsaWNrKT1cIl9vbklucHV0Q2xpY2soJGV2ZW50KVwiXG4gICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgPlxuICAgIDxkaXYgI19yYWRpb0NvbnRhaW5lcj5cbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2IFtjbGFzc05hbWVdPVwiY29yZVN0eWxlcy5jbGFzc2VzLmZpbGxcIj48L2Rpdj5cbiAgICAgIDxkaXYgW2NsYXNzTmFtZV09XCJjb3JlU3R5bGVzLmNsYXNzZXMuZmlsbFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgIFtjbGFzc05hbWVdPVwicmFkaW9Hcm91cC5fcmFkaW9TZXJ2aWNlLmNsYXNzZXMubGFiZWxDb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvbGFiZWw+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpZCA9IGBseS1yYWRpby1pZC0ke2lkeCsrfWA7XG4gIG5hbWUgPSAnJztcbiAgX3ZhbHVlID0gbnVsbDtcbiAgcHJpdmF0ZSBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBwcml2YXRlIF9jaGVja2VkID0gZmFsc2U7XG4gIHByaXZhdGUgY2hlY2tlZENsYXNzOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ19yYWRpb0NvbnRhaW5lcicpIHByaXZhdGUgX3JhZGlvQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdfbGFiZWxDb250YWluZXInKSBfbGFiZWxDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fd2l0aENvbG9yICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWRDbGFzcykge1xuICAgICAgICAvKiogY3JlYXRlIG5ldyBjbGFzcyBpZiBleGlzdCBgdGhpcy5jaGVja2VkQ2xhc3NgICovXG4gICAgICAgIHRoaXMuY2hlY2tlZENsYXNzID0gdGhpcy5fY3JlYXRlU3R5bGVXaXRoQ29sb3IodmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbCkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICB9XG4gIH1cbiAgZ2V0IHZhbHVlKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgY2hlY2tlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdDaGVja2VkU3RhdGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBjb25zdCBiZWZvcmUgPSB0aGlzLl9jaGVja2VkO1xuICAgIGlmIChiZWZvcmUgIT09IG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld0NoZWNrZWRTdGF0ZTtcbiAgICAgIGlmICghYmVmb3JlICYmIG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgICAvKiogVXNlIGN1cnJlbnQgY2hlY2tlZCBjbGFzcyBvciBjcmVhdGUgbmV3IGNsYXNzICovXG4gICAgICAgIHRoaXMuY2hlY2tlZENsYXNzID0gdGhpcy5jaGVja2VkQ2xhc3MgfHwgdGhpcy5fY3JlYXRlU3R5bGVXaXRoQ29sb3IodGhpcy53aXRoQ29sb3IgfHwgdGhpcy5yYWRpb0dyb3VwLndpdGhDb2xvcik7XG4gICAgICAgIC8qKiBBZGQgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNoZWNrZWRDbGFzcyk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMucmFkaW9Hcm91cC52YWx1ZSkge1xuICAgICAgICAgIC8qKiB1cGRhdGUgVmFsdWUgKi9cbiAgICAgICAgICB0aGlzLnJhZGlvR3JvdXAudXBkYXRldmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBSZW1vdmUgY2xhc3MgY2hlY2tlZCAqL1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLmNoZWNrZWRDbGFzcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cbiAgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5pZH0taW5wdXRgO1xuICB9XG5cbiAgX29uSW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucmFkaW9Hcm91cC5fdXBkYXRlQ2hlY2tGcm9tVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgLy8gdGhpcy5yYWRpb0dyb3VwLl9yYWRpb1Jlc2V0Q2hlY2tlZCgpO1xuICAgIC8vIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5yYWRpb0dyb3VwLl90b3VjaCgpO1xuICB9XG5cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHsgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cblxuICBfc2V0Q2hlY2tlZFRvRmFsc3koKSB7XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxuICBfY3JlYXRlU3R5bGVXaXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseVJhZGlvLWNoZWNrZWQ6JHt2YWx9YCwgdGhlbWUgPT4gKHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKSxcbiAgICAgICAgJyYgZGl2PjpudGgtY2hpbGQoMSknOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yNSknLFxuICAgICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbCksXG4gICAgICAgIH0sXG4gICAgICAgICcmIGRpdj46bnRoLWNoaWxkKDIpJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX3JhZGlvQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmNoZWNrZWRDbGFzc1xuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICAvLyBDb3B5IG5hbWUgZnJvbSBwYXJlbnQgcmFkaW8gZ3JvdXBcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMucmFkaW9Hcm91cC5uYW1lO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fcmFkaW9Db250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5yYWRpb0dyb3VwLmNsYXNzZXMuY29udGFpbmVyKTtcbiAgICB9XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZSh0aGlzLm5nWm9uZSwgdGhpcy5fcmlwcGxlU2VydmljZS5jbGFzc2VzLCB0aGlzLl9yYWRpb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5zZXRDb25maWcoe1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICByYWRpdXM6ICdjb250YWluZXJTaXplJ1xuICAgIH0pO1xuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyLnJlbW92ZUV2ZW50cygpO1xuICB9XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcmFkaW9Hcm91cDogTHlSYWRpb0dyb3VwLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIGNvcmVTdHlsZXM6IEx5Q29yZVN0eWxlcyxcbiAgICBwcml2YXRlIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2VcbiAgKSB7IH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJhZGlvR3JvdXAsIEx5UmFkaW9dLFxufSlcbmV4cG9ydCBjbGFzcyBMeVJhZGlvTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBR0EsSUFBTSxNQUFNLElBQUk7SUFDZCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxNQUFNO0tBQ2pCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLFNBQVM7S0FDbkI7Q0FDRixDQUFDLENBQUM7O0lBT0Qsd0JBQ1U7UUFBQSxVQUFLLEdBQUwsS0FBSzt1QkFGTCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDO0tBR3REOztnQkFQTixVQUFVLFNBQUM7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