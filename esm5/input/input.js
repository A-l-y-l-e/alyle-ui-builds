/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, NgModule, Input, Directive, ContentChild, Optional, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { LyCommonModule, LyTheme2, IsBoolean, toBoolean, LyBgColorAndRaised } from '@alyle/ui';
import { LyInputContents } from './input-contents';
import { LyFieldDirective } from './ly-field.directive';
var LyInputCommon = /** @class */ (function () {
    function LyInputCommon() {
    }
    LyInputCommon.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-default, ly-before, ly-after, ly-input ly-error, ly-input ly-hint'
                },] },
    ];
    return LyInputCommon;
}());
export { LyInputCommon };
function LyInputCommon_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyInputCommon.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyInputCommon.ctorParameters;
}
var LyPlaceholder = /** @class */ (function () {
    function LyPlaceholder() {
    }
    LyPlaceholder.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-placeholder'
                },] },
    ];
    return LyPlaceholder;
}());
export { LyPlaceholder };
function LyPlaceholder_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyPlaceholder.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyPlaceholder.ctorParameters;
}
var LyDefault = /** @class */ (function () {
    function LyDefault() {
    }
    LyDefault.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-default'
                },] },
    ];
    return LyDefault;
}());
export { LyDefault };
function LyDefault_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyDefault.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyDefault.ctorParameters;
}
var LyLabel = /** @class */ (function () {
    function LyLabel() {
    }
    LyLabel.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-label'
                },] },
    ];
    return LyLabel;
}());
export { LyLabel };
function LyLabel_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyLabel.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyLabel.ctorParameters;
}
var LyInput = /** @class */ (function () {
    function LyInput(theme, _changeDetectorRef, bcr, renderer, elementRef) {
        this.theme = theme;
        this._changeDetectorRef = _changeDetectorRef;
        this._inputColor = 'primary';
        this.changed = new Array();
        this.touched = new Array();
        this.type = 'text';
        this._classes = {};
    }
    Object.defineProperty(LyInput.prototype, "withColor", {
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
            this._withColor = val;
            this.updateColor(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInput.prototype, "isFloatingLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentValueState || this.labelAbove || this.isDefault || this.focusState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInput.prototype, "placeholderState", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.currentValueState && this.focusState || !this.currentValueState && !this.focusState && this.isFloatingLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInput.prototype, "defaultOff", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentValue === this.default && !this.focusState || !this.currentValueState && !this.focusState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInput.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._field.disabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInput.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () { return this._field.required; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInput.prototype, "currentValueState", {
        get: /**
         * @return {?}
         */
        function () {
            return ("" + this.currentValue).length !== 0 && this.currentValue != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val
     * @return {?}
     */
    LyInput.prototype._valueBoolean = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return !(val === null || val === undefined || val === false || val === '');
    };
    /**
     * @return {?}
     */
    LyInput.prototype._isErrorState = /**
     * @return {?}
     */
    function () {
        if (this._field) {
            return this._field._ngControl.invalid && this._field._ngControl.touched || this._errorState;
        }
    };
    /**
     * @return {?}
     */
    LyInput.prototype.updateError = /**
     * @return {?}
     */
    function () {
        this._errorState = this._field._ngControl.invalid;
    };
    /**
     * @return {?}
     */
    LyInput.prototype.value = /**
     * @return {?}
     */
    function () {
        return this.currentValue;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LyInput.prototype.updateColor = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        var /** @type {?} */ inputColor = function () { return _this.theme.colorOf(val); };
        this._classes.caretColor = this.theme.setUpStyle("input:caret" + val, {
            '': function () {
                return ("caret-color:" + inputColor());
            }
        });
        this._classes.withColor = this.theme.setUpStyle("input:" + val, {
            '': function () {
                return ("color:" + inputColor() + ";" +
                    ("background-color:" + _this.theme.config["input"].underline + ";"));
            }
        });
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LyInput.prototype.toBoolean = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return toBoolean(val);
    };
    Object.defineProperty(LyInput.prototype, "isPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return toBoolean(this.placeholder) || !!this.lyPlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInput.prototype, "isDefault", {
        get: /**
         * @return {?}
         */
        function () {
            return toBoolean(this.default) || !!this.lyDefault;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyInput.prototype, "isLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return toBoolean(this.label) || !!this.lyLabel;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyInput.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.withColor) {
            this.updateColor(this.theme.config["input"].withColor);
        }
        // this._inputColor = this.theme.colorOf(this._color);
        this.focusStateSuscription = this._field.focusState.subscribe(function (fState) {
            _this.focusState = fState;
        });
        if (this._field._parent()) {
            this._field._parent().ngSubmit.subscribe(function (submit) {
                _this.updateError();
            });
        }
    };
    /**
     * @return {?}
     */
    LyInput.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._field) {
            this.currentValue = this._field._ngControl.value;
            if (this._field._ngControl && this._field._ngControl.valueChanges) {
                this._field._ngControl.valueChanges.subscribe(function (val) {
                    _this.currentValue = val;
                    _this._errorState = false;
                    _this._changeDetectorRef.markForCheck();
                    /**
                               * reset error of submit to false
                               */
                });
            }
            this._field.focusState.subscribe(function (isFocused) {
                if (_this.isDefault) {
                    if (!_this.currentValueState) {
                        _this.currentValue = _this.default;
                        _this._field._ngControl.valueAccessor.writeValue(_this.default);
                        _this._field._ngControl.viewToModelUpdate(_this.default);
                    }
                }
                _this._field.markForCheck();
                _this._changeDetectorRef.markForCheck();
            });
        }
        else {
            console.warn('LyInput: Require input native');
        }
    };
    /**
     * @param {?} prop
     * @return {?}
     */
    LyInput.prototype._shouldForward = /**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        var /** @type {?} */ control = this._field ? this._field._ngControl : null;
        return control && (/** @type {?} */ (control))[prop];
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LyInput.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["default"]) {
            if (this.isDefault && !this.currentValueState) {
                this.currentValue = this.default;
                this._field._ngControl.viewToModelUpdate(this.default);
            }
        }
    };
    /**
     * @return {?}
     */
    LyInput.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusStateSuscription.unsubscribe();
    };
    LyInput.decorators = [
        { type: Component, args: [{
                    selector: 'ly-text-field, ly-input, ly-textarea',
                    styles: [":host{display:inline-block;position:relative;align-items:center}:host /deep/ ly-after,:host /deep/ ly-before{display:inline-block;vertical-align:inherit}:host /deep/ input,:host /deep/ textarea{border:none;outline:0;font-family:inherit;color:inherit;background:0 0;font-size:inherit;width:100%;font-weight:400;padding:0;display:inline-flex}:host.ly-default-off .ly-input-default,:host.ly-hidden-input /deep/ .ly-input-container input,:host.ly-hidden-input /deep/ .ly-input-container textarea{opacity:0}:host.ly-focus-active .ly-input-underline:after{width:100%}:host.ly-focus-active .ly-input-top-label,:host.ly-focus-active /deep/ ly-top-label{font-size:75%;top:0;-webkit-transform:translate(0,0);transform:translate(0,0)}:host.ly-focus-active .ly-input-default{opacity:0}:host.ly-value-on .ly-input-placeholder{opacity:0}.ly-input-underline{position:absolute;bottom:.875em;height:1px;right:0;left:0}.ly-input-underline:after{content:'';position:absolute;width:0%;height:2px;background:currentColor;left:0;right:0;margin:0 auto;bottom:0;transition:all 450ms cubic-bezier(.23,1,.32,1) 0s}.ly-input-underline.ly-disabled{background:0/4px 1px repeat-x;background-image:linear-gradient(to right,#b4b4b4 0,#b4b4b4 33%,transparent 0);border-top:0}.ly-input-underline.ly-disabled:after{width:0%}:host.ly-label-above .ly-input-float-label{font-size:75%;top:0}.ly-input-default,.ly-input-float-label,.ly-input-placeholder{pointer-events:none;position:absolute;bottom:1.125em;top:1.125em;margin:auto;font-size:100%;transition:all 375ms cubic-bezier(.23,1,.32,1);color:inherit;width:100%}.ly-input-content{width:100%;position:relative;display:flex;color:currentColor}.ly-input-container{padding:1.125em 0;position:relative;opacity:1;display:inline-block;vertical-align:inherit;width:100%}.ly-input-container ::ng-deep input{text-align:inherit}.bottom-field,.ly-error-container{position:absolute;bottom:0;left:0;width:100%;pointer-events:none;font-size:75%;-webkit-transform:translate3d(0,calc(100% - 1.1em),0);transform:translate3d(0,calc(100% - 1.1em),0);display:flex}.bottom-field .bottom-field-space,.ly-error-container .bottom-field-space{flex:1}.ly-required{position:absolute;top:1.125em;right:0;pointer-events:none;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:.45}:host.ly-input-invalid .ly-input-float-label,:host.ly-input-invalid .ly-input-placeholder,:host.ly-input-invalid .ly-input-underline,:host.ly-input-invalid /deep/ ly-error{color:#f44336!important}:host.ly-input-invalid .ly-input-underline:after{width:100%}"],
                    template: "<ng-content select=\"ly-before\"></ng-content>\n<div class=\"{{ _classes.withColor }} ly-input-underline\"></div>\n<div class=\"ly-input-container {{ _classes.caretColor }}\">\n  <ng-content select=\"input, textarea\"></ng-content>\n  <!-- ly-placeholder -->\n  <ng-container *ngIf=\"placeholder; then isPlaceholderTemplate; else placeholderContainer\"></ng-container>\n  <ng-template #isPlaceholderTemplate>\n    <div *ngIf=\"toBoolean(placeholder) !== undefined && placeholderState\" color=\"input:label\" class=\"ly-input-placeholder\">{{ placeholder }}</div>\n  </ng-template>\n  <ng-template #placeholderContainer>\n    <div *ngIf=\"lyPlaceholder !== undefined && placeholderState\" color=\"input:label\" class=\"ly-input-placeholder\">\n      <ng-content select=\"ly-placeholder\"></ng-content>\n    </div>\n  </ng-template>\n  <!-- ly-default -->\n  <ng-container *ngIf=\"toBoolean(default); then isDefaultTemplate\"></ng-container>\n  <ng-template #isDefaultTemplate>\n    <div *ngIf=\"!(lyDefault !== undefined) && defaultOff\" color=\"input:label\" class=\"ly-input-default\">Default: {{ default }}</div>\n    <div *ngIf=\"lyDefault !== undefined && defaultOff\" color=\"input:label\" class=\"ly-input-default\">\n      <ng-content select=\"ly-default\"></ng-content>{{ default }}\n    </div>\n  </ng-template>\n  <!-- ly-label -->\n  <ng-container *ngIf=\"toBoolean(label); then _isLabelTemplate; else labelContainer\"></ng-container>\n  <ng-template #_isLabelTemplate>\n    <div *ngIf=\"label !== undefined\" color=\"input:label\" class=\"ly-input-float-label\">{{ label }}</div>\n  </ng-template>\n  <ng-template #labelContainer>\n    <div *ngIf=\"lyLabel\" color=\"input:label\" class=\"ly-input-float-label\">\n      <ng-content select=\"ly-label\"></ng-content>\n    </div>\n  </ng-template>\n</div>\n<div class=\"ly-icon-required\" *ngIf=\"required\"></div>\n<div class=\"bottom-field\" *ngIf=\"!_isErrorState()\">\n  <ng-content select=\"ly-hint[align=start], ly-hint:not(ly-hint[align])\"></ng-content>\n  <span class=\"bottom-field-space\"></span>\n  <ng-content select=\"ly-hint[align=end]\"></ng-content>\n</div>\n<div class=\"bottom-field\" *ngIf=\"_isErrorState()\">\n  <ng-content select=\"ly-error\"></ng-content>\n</div>\n<ng-content select=\"ly-after\"></ng-content>\n",
                    // tslint:disable-next-line:use-host-property-decorator
                    host: {
                        '[class.ly-input-invalid]': '_isErrorState()',
                        '[class.ng-untouched]': '_shouldForward("untouched")',
                        '[class.ng-touched]': '_shouldForward("touched")',
                        '[class.ng-pristine]': '_shouldForward("pristine")',
                        '[class.ng-dirty]': '_shouldForward("dirty")',
                        '[class.ng-valid]': '_shouldForward("valid")',
                        '[class.ng-invalid]': '_shouldForward("invalid")',
                        '[class.ng-pending]': '_shouldForward("pending")',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                },] },
    ];
    /** @nocollapse */
    LyInput.ctorParameters = function () { return [
        { type: LyTheme2, },
        { type: ChangeDetectorRef, },
        { type: LyBgColorAndRaised, decorators: [{ type: Optional },] },
        { type: Renderer2, },
        { type: ElementRef, },
    ]; };
    LyInput.propDecorators = {
        "_field": [{ type: ContentChild, args: [LyFieldDirective,] },],
        "lyPlaceholder": [{ type: ContentChild, args: [LyPlaceholder,] },],
        "lyDefault": [{ type: ContentChild, args: [LyDefault,] },],
        "lyLabel": [{ type: ContentChild, args: [LyLabel,] },],
        "type": [{ type: Input },],
        "label": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "labelAbove": [{ type: Input },],
        "default": [{ type: Input },],
        "withColor": [{ type: Input },],
        "isFloatingLabel": [{ type: HostBinding, args: ['class.ly-label-above',] },],
        "focusState": [{ type: HostBinding, args: ['class.ly-focus-active',] },],
        "defaultOff": [{ type: HostBinding, args: ['class.ly-hidden-input',] },],
        "disabled": [{ type: Input },],
        "required": [{ type: Input },],
        "currentValueState": [{ type: HostBinding, args: ['class.ly-value-on',] },],
    };
    tslib_1.__decorate([
        IsBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], LyInput.prototype, "labelAbove", void 0);
    return LyInput;
}());
export { LyInput };
function LyInput_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyInput.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyInput.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyInput.propDecorators;
    /** @type {?} */
    LyInput.prototype._value;
    /** @type {?} */
    LyInput.prototype._elementType;
    /** @type {?} */
    LyInput.prototype._inputColor;
    /** @type {?} */
    LyInput.prototype.currentValue;
    /** @type {?} */
    LyInput.prototype.paletteSubscription;
    /** @type {?} */
    LyInput.prototype.changed;
    /** @type {?} */
    LyInput.prototype.touched;
    /** @type {?} */
    LyInput.prototype._field;
    /** @type {?} */
    LyInput.prototype.lyPlaceholder;
    /** @type {?} */
    LyInput.prototype.lyDefault;
    /** @type {?} */
    LyInput.prototype.lyLabel;
    /** @type {?} */
    LyInput.prototype.type;
    /** @type {?} */
    LyInput.prototype.label;
    /** @type {?} */
    LyInput.prototype.placeholder;
    /** @type {?} */
    LyInput.prototype.labelAbove;
    /** @type {?} */
    LyInput.prototype.default;
    /** @type {?} */
    LyInput.prototype._errorState;
    /** @type {?} */
    LyInput.prototype.placeholderContainer;
    /** @type {?} */
    LyInput.prototype.labelContainer;
    /** @type {?} */
    LyInput.prototype.focusStateSuscription;
    /** @type {?} */
    LyInput.prototype._classes;
    /** @type {?} */
    LyInput.prototype._withColor;
    /** @type {?} */
    LyInput.prototype.focusState;
    /** @type {?} */
    LyInput.prototype.theme;
    /** @type {?} */
    LyInput.prototype._changeDetectorRef;
}
var LyInputModule = /** @class */ (function () {
    function LyInputModule() {
    }
    LyInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, LyCommonModule],
                    exports: [LyInput, LyInputContents, LyFieldDirective, LyInputCommon, LyDefault, LyLabel, LyPlaceholder],
                    declarations: [LyInput, LyInputContents, LyFieldDirective, LyInputCommon, LyDefault, LyLabel, LyPlaceholder],
                },] },
    ];
    return LyInputModule;
}());
export { LyInputModule };
function LyInputModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyInputModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyInputModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaW5wdXQvIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFFBQVEsRUFDUixLQUFLLEVBRUwsU0FBUyxFQUtULFlBQVksRUFLWixRQUFRLEVBQ1IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixXQUFXLEVBR1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsV0FBVyxHQUlaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O2dCQUV2RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNFQUFzRTtpQkFDakY7O3dCQXZDRDs7U0F3Q2EsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Z0JBRXpCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7d0JBNUNEOztTQTZDYSxhQUFhOzs7Ozs7Ozs7Ozs7OztnQkFFekIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7b0JBakREOztTQWtEYSxTQUFTOzs7Ozs7Ozs7Ozs7OztnQkFFckIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO2lCQUNyQjs7a0JBdEREOztTQXVEYSxPQUFPOzs7Ozs7Ozs7OztJQTBJbEIsaUJBQ1UsT0FDQSxvQkFDSSxLQUNaLFFBQW1CLEVBQ25CLFVBQXNCO1FBSmQsVUFBSyxHQUFMLEtBQUs7UUFDTCx1QkFBa0IsR0FBbEIsa0JBQWtCOzJCQXpFZCxTQUFTO3VCQUdMLElBQUksS0FBSyxFQUF3Qjt1QkFDakMsSUFBSSxLQUFLLEVBQWM7b0JBS3pCLE1BQU07d0JBWWxCLEVBQUU7S0F3REQ7MEJBckRELDhCQUFTOzs7O1FBSWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O2tCQU5hLEdBQVc7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7MEJBTXBCLG9DQUFlOzs7OztZQUNqQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQzs7Ozs7SUFHeEYsc0JBQUkscUNBQWdCOzs7O1FBQXBCO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzFIOzs7T0FBQTswQkFHRywrQkFBVTs7Ozs7WUFDWixPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDOzs7OzswQkFHbEcsNkJBQVE7Ozs7c0JBQWMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7OzswQkFFbEQsNkJBQVE7Ozs7c0JBQWMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7OzswQkFHM0Qsc0NBQWlCOzs7OztZQUNuQixPQUFPLENBQUMsS0FBRyxJQUFJLENBQUMsWUFBYyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQzs7Ozs7Ozs7O0lBRzVFLCtCQUFhOzs7O0lBQWIsVUFBYyxHQUFHO1FBQ2YsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQzVFOzs7O0lBRUQsK0JBQWE7OztJQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDN0Y7S0FDRjs7OztJQUNPLDZCQUFXOzs7O1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDOzs7OztJQUdwRCx1QkFBSzs7O0lBQUw7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDMUI7Ozs7O0lBVU8sNkJBQVc7Ozs7Y0FBQyxHQUFXOztRQUM3QixxQkFBTSxVQUFVLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUM5QyxnQkFBYyxHQUFLLEVBQUU7WUFDbkIsRUFBRSxFQUFFO2dCQUFNLE9BQUEsQ0FDUixpQkFBZSxVQUFVLEVBQUksQ0FDOUI7WUFGUyxDQUVUO1NBQ0YsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQzdDLFdBQVMsR0FBSyxFQUFFO1lBQ2QsRUFBRSxFQUFFO2dCQUFNLE9BQUEsQ0FDUixXQUFTLFVBQVUsRUFBRSxNQUFHO3FCQUN4QixzQkFBb0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFVBQU8sU0FBUyxNQUFHLENBQUEsQ0FDekQ7WUFIUyxDQUdUO1NBQ0YsQ0FDRixDQUFDOzs7Ozs7SUFHSiwyQkFBUzs7OztJQUFULFVBQVUsR0FBUTtRQUNoQixPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN2QjtJQUNELHNCQUFJLGtDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzVEOzs7T0FBQTtJQUNELHNCQUFJLDhCQUFTOzs7O1FBQWI7WUFDRSxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDcEQ7OztPQUFBO0lBQ0Qsc0JBQUksNEJBQU87Ozs7UUFBWDtZQUNFLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNoRDs7O09BQUE7Ozs7SUFFRCwwQkFBUTs7O0lBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLFVBQU8sU0FBUyxDQUFDLENBQUM7U0FDckQ7O1FBRUQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQWU7WUFDNUUsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07Z0JBQzlDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQixDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBQ0Qsb0NBQWtCOzs7SUFBbEI7UUFBQSxpQkEyQkM7UUExQkMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFRO29CQUNyRCxLQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztvQkFDeEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztpQkFJeEMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQyxTQUFrQjtnQkFDbEQsSUFBSSxLQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixJQUFJLENBQUMsS0FBSSxDQUFDLGlCQUFpQixFQUFFO3dCQUMzQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ2pDLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM5RCxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3hEO2lCQUNGO2dCQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN4QyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQy9DO0tBQ0Y7Ozs7O0lBRUQsZ0NBQWM7Ozs7SUFBZCxVQUFlLElBQVk7UUFDekIscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDNUQsT0FBTyxPQUFPLElBQUksbUJBQUMsT0FBYyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUM7Ozs7O0lBRUQsNkJBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxhQUFVO1lBQ25CLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEQ7U0FDRjtLQUNGOzs7O0lBQ0QsNkJBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzFDOztnQkF6T0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQ0FBc0M7b0JBQ2hELE1BQU0sRUFBRSxDQUFDLG0vRUFBbS9FLENBQUM7b0JBQzcvRSxRQUFRLEVBQUUsMHZFQTJDWDs7b0JBRUMsSUFBSSxFQUFFO3dCQUNKLDBCQUEwQixFQUFFLGlCQUFpQjt3QkFDN0Msc0JBQXNCLEVBQUUsNkJBQTZCO3dCQUNyRCxvQkFBb0IsRUFBRSwyQkFBMkI7d0JBQ2pELHFCQUFxQixFQUFFLDRCQUE0Qjt3QkFDbkQsa0JBQWtCLEVBQUUseUJBQXlCO3dCQUM3QyxrQkFBa0IsRUFBRSx5QkFBeUI7d0JBQzdDLG9CQUFvQixFQUFFLDJCQUEyQjt3QkFDakQsb0JBQW9CLEVBQUUsMkJBQTJCO3FCQUNsRDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBckZ3QixRQUFRO2dCQWIvQixpQkFBaUI7Z0JBYXNDLGtCQUFrQix1QkFtS3RFLFFBQVE7Z0JBNUtYLFNBQVM7Z0JBckJULFVBQVU7OzsyQkE0SFQsWUFBWSxTQUFDLGdCQUFnQjtrQ0FDN0IsWUFBWSxTQUFDLGFBQWE7OEJBQzFCLFlBQVksU0FBQyxTQUFTOzRCQUN0QixZQUFZLFNBQUMsT0FBTzt5QkFDcEIsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQVVMLEtBQUs7b0NBUUwsV0FBVyxTQUFDLHNCQUFzQjsrQkFRbEMsV0FBVyxTQUFDLHVCQUF1QjsrQkFDbkMsV0FBVyxTQUFDLHVCQUF1Qjs2QkFLbkMsS0FBSzs2QkFFTCxLQUFLO3NDQUVMLFdBQVcsU0FBQyxtQkFBbUI7OztRQXJDdEIsU0FBUyxFQUFFOzs7a0JBdEl2Qjs7U0F1SGEsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQStLbkIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDO29CQUNwRCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQztvQkFDdkcsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUM7aUJBQzdHOzt3QkExU0Q7O1NBMlNhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpYmVyICwgIFN1YmplY3QgLCAgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBOZ01vZHVsZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRGlyZWN0aXZlLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFNlbGYsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEZvcm1zTW9kdWxlLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwRGlyZWN0aXZlLFxuICBOZ0NvbnRyb2wsIE5nRm9ybSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWUyLCBJc0Jvb2xlYW4sIHRvQm9vbGVhbiwgTHlCZ0NvbG9yQW5kUmFpc2VkIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SW5wdXRDb250ZW50cyB9IGZyb20gJy4vaW5wdXQtY29udGVudHMnO1xuaW1wb3J0IHsgTHlGaWVsZERpcmVjdGl2ZSB9IGZyb20gJy4vbHktZmllbGQuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGVmYXVsdCwgbHktYmVmb3JlLCBseS1hZnRlciwgbHktaW5wdXQgbHktZXJyb3IsIGx5LWlucHV0IGx5LWhpbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXRDb21tb24ge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktcGxhY2Vob2xkZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5UGxhY2Vob2xkZXIge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGVmYXVsdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlEZWZhdWx0IHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWxhYmVsJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxhYmVsIHt9XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGV4dC1maWVsZCwgbHktaW5wdXQsIGx5LXRleHRhcmVhJyxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCAvZGVlcC8gbHktYWZ0ZXIsOmhvc3QgL2RlZXAvIGx5LWJlZm9yZXtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjppbmhlcml0fTpob3N0IC9kZWVwLyBpbnB1dCw6aG9zdCAvZGVlcC8gdGV4dGFyZWF7Ym9yZGVyOm5vbmU7b3V0bGluZTowO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOjAgMDtmb250LXNpemU6aW5oZXJpdDt3aWR0aDoxMDAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUtZmxleH06aG9zdC5seS1kZWZhdWx0LW9mZiAubHktaW5wdXQtZGVmYXVsdCw6aG9zdC5seS1oaWRkZW4taW5wdXQgL2RlZXAvIC5seS1pbnB1dC1jb250YWluZXIgaW5wdXQsOmhvc3QubHktaGlkZGVuLWlucHV0IC9kZWVwLyAubHktaW5wdXQtY29udGFpbmVyIHRleHRhcmVhe29wYWNpdHk6MH06aG9zdC5seS1mb2N1cy1hY3RpdmUgLmx5LWlucHV0LXVuZGVybGluZTphZnRlcnt3aWR0aDoxMDAlfTpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAubHktaW5wdXQtdG9wLWxhYmVsLDpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAvZGVlcC8gbHktdG9wLWxhYmVse2ZvbnQtc2l6ZTo3NSU7dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApfTpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAubHktaW5wdXQtZGVmYXVsdHtvcGFjaXR5OjB9Omhvc3QubHktdmFsdWUtb24gLmx5LWlucHV0LXBsYWNlaG9sZGVye29wYWNpdHk6MH0ubHktaW5wdXQtdW5kZXJsaW5le3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTouODc1ZW07aGVpZ2h0OjFweDtyaWdodDowO2xlZnQ6MH0ubHktaW5wdXQtdW5kZXJsaW5lOmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MCU7aGVpZ2h0OjJweDtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjtsZWZ0OjA7cmlnaHQ6MDttYXJnaW46MCBhdXRvO2JvdHRvbTowO3RyYW5zaXRpb246YWxsIDQ1MG1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSkgMHN9Lmx5LWlucHV0LXVuZGVybGluZS5seS1kaXNhYmxlZHtiYWNrZ3JvdW5kOjAvNHB4IDFweCByZXBlYXQteDtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwjYjRiNGI0IDAsI2I0YjRiNCAzMyUsdHJhbnNwYXJlbnQgMCk7Ym9yZGVyLXRvcDowfS5seS1pbnB1dC11bmRlcmxpbmUubHktZGlzYWJsZWQ6YWZ0ZXJ7d2lkdGg6MCV9Omhvc3QubHktbGFiZWwtYWJvdmUgLmx5LWlucHV0LWZsb2F0LWxhYmVse2ZvbnQtc2l6ZTo3NSU7dG9wOjB9Lmx5LWlucHV0LWRlZmF1bHQsLmx5LWlucHV0LWZsb2F0LWxhYmVsLC5seS1pbnB1dC1wbGFjZWhvbGRlcntwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToxLjEyNWVtO3RvcDoxLjEyNWVtO21hcmdpbjphdXRvO2ZvbnQtc2l6ZToxMDAlO3RyYW5zaXRpb246YWxsIDM3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSk7Y29sb3I6aW5oZXJpdDt3aWR0aDoxMDAlfS5seS1pbnB1dC1jb250ZW50e3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2NvbG9yOmN1cnJlbnRDb2xvcn0ubHktaW5wdXQtY29udGFpbmVye3BhZGRpbmc6MS4xMjVlbSAwO3Bvc2l0aW9uOnJlbGF0aXZlO29wYWNpdHk6MTtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjppbmhlcml0O3dpZHRoOjEwMCV9Lmx5LWlucHV0LWNvbnRhaW5lciA6Om5nLWRlZXAgaW5wdXR7dGV4dC1hbGlnbjppbmhlcml0fS5ib3R0b20tZmllbGQsLmx5LWVycm9yLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO2ZvbnQtc2l6ZTo3NSU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKDEwMCUgLSAxLjFlbSksMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYygxMDAlIC0gMS4xZW0pLDApO2Rpc3BsYXk6ZmxleH0uYm90dG9tLWZpZWxkIC5ib3R0b20tZmllbGQtc3BhY2UsLmx5LWVycm9yLWNvbnRhaW5lciAuYm90dG9tLWZpZWxkLXNwYWNle2ZsZXg6MX0ubHktcmVxdWlyZWR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEuMTI1ZW07cmlnaHQ6MDtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6LjQ1fTpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LWZsb2F0LWxhYmVsLDpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXBsYWNlaG9sZGVyLDpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXVuZGVybGluZSw6aG9zdC5seS1pbnB1dC1pbnZhbGlkIC9kZWVwLyBseS1lcnJvcntjb2xvcjojZjQ0MzM2IWltcG9ydGFudH06aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7d2lkdGg6MTAwJX1gXSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJseS1iZWZvcmVcIj48L25nLWNvbnRlbnQ+XHJcbjxkaXYgY2xhc3M9XCJ7eyBfY2xhc3Nlcy53aXRoQ29sb3IgfX0gbHktaW5wdXQtdW5kZXJsaW5lXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJseS1pbnB1dC1jb250YWluZXIge3sgX2NsYXNzZXMuY2FyZXRDb2xvciB9fVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImlucHV0LCB0ZXh0YXJlYVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGx5LXBsYWNlaG9sZGVyIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJwbGFjZWhvbGRlcjsgdGhlbiBpc1BsYWNlaG9sZGVyVGVtcGxhdGU7IGVsc2UgcGxhY2Vob2xkZXJDb250YWluZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI2lzUGxhY2Vob2xkZXJUZW1wbGF0ZT5cclxuICAgIDxkaXYgKm5nSWY9XCJ0b0Jvb2xlYW4ocGxhY2Vob2xkZXIpICE9PSB1bmRlZmluZWQgJiYgcGxhY2Vob2xkZXJTdGF0ZVwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LXBsYWNlaG9sZGVyXCI+e3sgcGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSAjcGxhY2Vob2xkZXJDb250YWluZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkICYmIHBsYWNlaG9sZGVyU3RhdGVcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1wbGFjZWhvbGRlclwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1wbGFjZWhvbGRlclwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPCEtLSBseS1kZWZhdWx0IC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b0Jvb2xlYW4oZGVmYXVsdCk7IHRoZW4gaXNEZWZhdWx0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI2lzRGVmYXVsdFRlbXBsYXRlPlxyXG4gICAgPGRpdiAqbmdJZj1cIiEobHlEZWZhdWx0ICE9PSB1bmRlZmluZWQpICYmIGRlZmF1bHRPZmZcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1kZWZhdWx0XCI+RGVmYXVsdDoge3sgZGVmYXVsdCB9fTwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImx5RGVmYXVsdCAhPT0gdW5kZWZpbmVkICYmIGRlZmF1bHRPZmZcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1kZWZhdWx0XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWRlZmF1bHRcIj48L25nLWNvbnRlbnQ+e3sgZGVmYXVsdCB9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8IS0tIGx5LWxhYmVsIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b0Jvb2xlYW4obGFiZWwpOyB0aGVuIF9pc0xhYmVsVGVtcGxhdGU7IGVsc2UgbGFiZWxDb250YWluZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI19pc0xhYmVsVGVtcGxhdGU+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibGFiZWwgIT09IHVuZGVmaW5lZFwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWZsb2F0LWxhYmVsXCI+e3sgbGFiZWwgfX08L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSAjbGFiZWxDb250YWluZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlMYWJlbFwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWZsb2F0LWxhYmVsXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWxhYmVsXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJseS1pY29uLXJlcXVpcmVkXCIgKm5nSWY9XCJyZXF1aXJlZFwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYm90dG9tLWZpZWxkXCIgKm5nSWY9XCIhX2lzRXJyb3JTdGF0ZSgpXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktaGludFthbGlnbj1zdGFydF0sIGx5LWhpbnQ6bm90KGx5LWhpbnRbYWxpZ25dKVwiPjwvbmctY29udGVudD5cclxuICA8c3BhbiBjbGFzcz1cImJvdHRvbS1maWVsZC1zcGFjZVwiPjwvc3Bhbj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1oaW50W2FsaWduPWVuZF1cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYm90dG9tLWZpZWxkXCIgKm5nSWY9XCJfaXNFcnJvclN0YXRlKClcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1lcnJvclwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cImx5LWFmdGVyXCI+PC9uZy1jb250ZW50PlxyXG5gLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmx5LWlucHV0LWludmFsaWRdJzogJ19pc0Vycm9yU3RhdGUoKScsXG4gICAgJ1tjbGFzcy5uZy11bnRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidW50b3VjaGVkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidG91Y2hlZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1wcmlzdGluZV0nOiAnX3Nob3VsZEZvcndhcmQoXCJwcmlzdGluZVwiKScsXG4gICAgJ1tjbGFzcy5uZy1kaXJ0eV0nOiAnX3Nob3VsZEZvcndhcmQoXCJkaXJ0eVwiKScsXG4gICAgJ1tjbGFzcy5uZy12YWxpZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ2YWxpZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1pbnZhbGlkXSc6ICdfc2hvdWxkRm9yd2FyZChcImludmFsaWRcIiknLFxuICAgICdbY2xhc3MubmctcGVuZGluZ10nOiAnX3Nob3VsZEZvcndhcmQoXCJwZW5kaW5nXCIpJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgX3ZhbHVlOiBhbnk7XG4gIF9lbGVtZW50VHlwZTogJ2lucHV0JyB8ICd0ZXh0YXJlYSc7XG4gIF9pbnB1dENvbG9yID0gJ3ByaW1hcnknO1xuICBjdXJyZW50VmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBwYWxldHRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY2hhbmdlZCA9IG5ldyBBcnJheTwodmFsdWU6IGFueSkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSB0b3VjaGVkID0gbmV3IEFycmF5PCgpID0+IHZvaWQ+KCk7XG4gIEBDb250ZW50Q2hpbGQoTHlGaWVsZERpcmVjdGl2ZSkgX2ZpZWxkOiBMeUZpZWxkRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKEx5UGxhY2Vob2xkZXIpIGx5UGxhY2Vob2xkZXI6IEx5UGxhY2Vob2xkZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlEZWZhdWx0KSBseURlZmF1bHQ6IEx5RGVmYXVsdDtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsKSBseUxhYmVsOiBMeUxhYmVsO1xuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBASXNCb29sZWFuKCkgbGFiZWxBYm92ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGVmYXVsdDogc3RyaW5nO1xuICBfZXJyb3JTdGF0ZTogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXJDb250YWluZXI6IGFueTtcbiAgbGFiZWxDb250YWluZXI6IGFueTtcbiAgZm9jdXNTdGF0ZVN1c2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIF9jbGFzc2VzOiB7XG4gICAgY2FyZXRDb2xvcj86IHN0cmluZyxcbiAgICB3aXRoQ29sb3I/OiBzdHJpbmdcbiAgfSA9IHt9O1xuICBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVDb2xvcih2YWwpO1xuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWxhYmVsLWFib3ZlJylcbiAgZ2V0IGlzRmxvYXRpbmdMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSB8fCB0aGlzLmxhYmVsQWJvdmUgfHwgdGhpcy5pc0RlZmF1bHQgfHwgdGhpcy5mb2N1c1N0YXRlO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyU3RhdGUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmIHRoaXMuZm9jdXNTdGF0ZSB8fCAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiAhdGhpcy5mb2N1c1N0YXRlICYmIHRoaXMuaXNGbG9hdGluZ0xhYmVsO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktZm9jdXMtYWN0aXZlJykgZm9jdXNTdGF0ZTogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1oaWRkZW4taW5wdXQnKVxuICBnZXQgZGVmYXVsdE9mZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWUgPT09IHRoaXMuZGVmYXVsdCAmJiAhdGhpcy5mb2N1c1N0YXRlIHx8ICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmICF0aGlzLmZvY3VzU3RhdGU7XG4gIH1cblxuICBASW5wdXQoKSBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9maWVsZC5kaXNhYmxlZDsgfVxuXG4gIEBJbnB1dCgpIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2ZpZWxkLnJlcXVpcmVkOyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS12YWx1ZS1vbicpXG4gIGdldCBjdXJyZW50VmFsdWVTdGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKGAke3RoaXMuY3VycmVudFZhbHVlfWApLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmN1cnJlbnRWYWx1ZSAhPSBudWxsO1xuICB9XG5cbiAgX3ZhbHVlQm9vbGVhbih2YWwpIHtcbiAgICByZXR1cm4gISh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBmYWxzZSB8fCB2YWwgPT09ICcnKTtcbiAgfVxuXG4gIF9pc0Vycm9yU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmllbGQuX25nQ29udHJvbC5pbnZhbGlkICYmIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudG91Y2hlZCB8fCB0aGlzLl9lcnJvclN0YXRlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHVwZGF0ZUVycm9yKCkge1xuICAgIHRoaXMuX2Vycm9yU3RhdGUgPSB0aGlzLl9maWVsZC5fbmdDb250cm9sLmludmFsaWQ7XG4gIH1cblxuICB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgYmNyOiBMeUJnQ29sb3JBbmRSYWlzZWQsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGNvbnN0IGlucHV0Q29sb3IgPSAoKSA9PiB0aGlzLnRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICB0aGlzLl9jbGFzc2VzLmNhcmV0Q29sb3IgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgaW5wdXQ6Y2FyZXQke3ZhbH1gLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGNhcmV0LWNvbG9yOiR7aW5wdXRDb2xvcigpfWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5fY2xhc3Nlcy53aXRoQ29sb3IgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgaW5wdXQ6JHt2YWx9YCwge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBjb2xvcjoke2lucHV0Q29sb3IoKX07YCArXG4gICAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy5pbnB1dC51bmRlcmxpbmV9O2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICB0b0Jvb2xlYW4odmFsOiBhbnkpIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGlzUGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLnBsYWNlaG9sZGVyKSB8fCAhIXRoaXMubHlQbGFjZWhvbGRlcjtcbiAgfVxuICBnZXQgaXNEZWZhdWx0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5kZWZhdWx0KSB8fCAhIXRoaXMubHlEZWZhdWx0O1xuICB9XG4gIGdldCBpc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5sYWJlbCkgfHwgISF0aGlzLmx5TGFiZWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yKHRoaXMudGhlbWUuY29uZmlnLmlucHV0LndpdGhDb2xvcik7XG4gICAgfVxuICAgIC8vIHRoaXMuX2lucHV0Q29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5fY29sb3IpO1xuICAgIHRoaXMuZm9jdXNTdGF0ZVN1c2NyaXB0aW9uID0gdGhpcy5fZmllbGQuZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGZTdGF0ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb2N1c1N0YXRlID0gZlN0YXRlO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLl9maWVsZC5fcGFyZW50KCkpIHtcbiAgICAgIHRoaXMuX2ZpZWxkLl9wYXJlbnQoKS5uZ1N1Ym1pdC5zdWJzY3JpYmUoKHN1Ym1pdCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlO1xuICAgICAgaWYgKHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wgJiYgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsO1xuICAgICAgICAgIHRoaXMuX2Vycm9yU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiByZXNldCBlcnJvciBvZiBzdWJtaXQgdG8gZmFsc2VcbiAgICAgICAgICAgKi9cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9maWVsZC5mb2N1c1N0YXRlLnN1YnNjcmliZSgoaXNGb2N1c2VkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVmYXVsdCkge1xuICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmRlZmF1bHQ7XG4gICAgICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWVsZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdMeUlucHV0OiBSZXF1aXJlIGlucHV0IG5hdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG91bGRGb3J3YXJkKHByb3A6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9maWVsZCA/IHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wgOiBudWxsO1xuICAgIHJldHVybiBjb250cm9sICYmIChjb250cm9sIGFzIGFueSlbcHJvcF07XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZGVmYXVsdCkge1xuICAgICAgaWYgKHRoaXMuaXNEZWZhdWx0ICYmICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZpZXdUb01vZGVsVXBkYXRlKHRoaXMuZGVmYXVsdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZVN1c2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SW5wdXQsIEx5SW5wdXRDb250ZW50cywgTHlGaWVsZERpcmVjdGl2ZSwgTHlJbnB1dENvbW1vbiwgTHlEZWZhdWx0LCBMeUxhYmVsLCBMeVBsYWNlaG9sZGVyXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlJbnB1dCwgTHlJbnB1dENvbnRlbnRzLCBMeUZpZWxkRGlyZWN0aXZlLCBMeUlucHV0Q29tbW9uLCBMeURlZmF1bHQsIEx5TGFiZWwsIEx5UGxhY2Vob2xkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0TW9kdWxlIHt9XG4iXX0=