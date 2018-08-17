/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, NgModule, Input, Directive, ContentChild, Optional, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { LyCommonModule, LyTheme2, IsBoolean, toBoolean, LyCommon } from '@alyle/ui';
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
        { type: LyCommon, decorators: [{ type: Optional },] },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaW5wdXQvIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFFBQVEsRUFDUixLQUFLLEVBRUwsU0FBUyxFQUtULFlBQVksRUFLWixRQUFRLEVBQ1IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixXQUFXLEVBR1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsV0FBVyxHQUlaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztnQkFFdkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzRUFBc0U7aUJBQ2pGOzt3QkF2Q0Q7O1NBd0NhLGFBQWE7Ozs7Ozs7Ozs7Ozs7O2dCQUV6QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7O3dCQTVDRDs7U0E2Q2EsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Z0JBRXpCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7O29CQWpERDs7U0FrRGEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Z0JBRXJCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7O2tCQXRERDs7U0F1RGEsT0FBTzs7Ozs7Ozs7Ozs7SUEwSWxCLGlCQUNVLE9BQ0Esb0JBQ0ksS0FDWixRQUFtQixFQUNuQixVQUFzQjtRQUpkLFVBQUssR0FBTCxL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dCAsICBCZWhhdmlvclN1YmplY3QgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE5nTW9kdWxlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBEaXJlY3RpdmUsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgU2VsZixcbiAgT3B0aW9uYWwsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgRm9ybXNNb2R1bGUsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gIE5nQ29udHJvbCwgTmdGb3JtLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZTIsIElzQm9vbGVhbiwgdG9Cb29sZWFuLCBMeUNvbW1vbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUlucHV0Q29udGVudHMgfSBmcm9tICcuL2lucHV0LWNvbnRlbnRzJztcbmltcG9ydCB7IEx5RmllbGREaXJlY3RpdmUgfSBmcm9tICcuL2x5LWZpZWxkLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRlZmF1bHQsIGx5LWJlZm9yZSwgbHktYWZ0ZXIsIGx5LWlucHV0IGx5LWVycm9yLCBseS1pbnB1dCBseS1oaW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0Q29tbW9uIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXBsYWNlaG9sZGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVBsYWNlaG9sZGVyIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRlZmF1bHQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RGVmYXVsdCB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1sYWJlbCdcbn0pXG5leHBvcnQgY2xhc3MgTHlMYWJlbCB7fVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRleHQtZmllbGQsIGx5LWlucHV0LCBseS10ZXh0YXJlYScsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QgL2RlZXAvIGx5LWFmdGVyLDpob3N0IC9kZWVwLyBseS1iZWZvcmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246aW5oZXJpdH06aG9zdCAvZGVlcC8gaW5wdXQsOmhvc3QgL2RlZXAvIHRleHRhcmVhe2JvcmRlcjpub25lO291dGxpbmU6MDtmb250LWZhbWlseTppbmhlcml0O2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDowIDA7Zm9udC1zaXplOmluaGVyaXQ7d2lkdGg6MTAwJTtmb250LXdlaWdodDo0MDA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lLWZsZXh9Omhvc3QubHktZGVmYXVsdC1vZmYgLmx5LWlucHV0LWRlZmF1bHQsOmhvc3QubHktaGlkZGVuLWlucHV0IC9kZWVwLyAubHktaW5wdXQtY29udGFpbmVyIGlucHV0LDpob3N0Lmx5LWhpZGRlbi1pbnB1dCAvZGVlcC8gLmx5LWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXtvcGFjaXR5OjB9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7d2lkdGg6MTAwJX06aG9zdC5seS1mb2N1cy1hY3RpdmUgLmx5LWlucHV0LXRvcC1sYWJlbCw6aG9zdC5seS1mb2N1cy1hY3RpdmUgL2RlZXAvIGx5LXRvcC1sYWJlbHtmb250LXNpemU6NzUlO3RvcDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKX06aG9zdC5seS1mb2N1cy1hY3RpdmUgLmx5LWlucHV0LWRlZmF1bHR7b3BhY2l0eTowfTpob3N0Lmx5LXZhbHVlLW9uIC5seS1pbnB1dC1wbGFjZWhvbGRlcntvcGFjaXR5OjB9Lmx5LWlucHV0LXVuZGVybGluZXtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206Ljg3NWVtO2hlaWdodDoxcHg7cmlnaHQ6MDtsZWZ0OjB9Lmx5LWlucHV0LXVuZGVybGluZTphZnRlcntjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjAlO2hlaWdodDoycHg7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7bGVmdDowO3JpZ2h0OjA7bWFyZ2luOjAgYXV0bztib3R0b206MDt0cmFuc2l0aW9uOmFsbCA0NTBtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpIDBzfS5seS1pbnB1dC11bmRlcmxpbmUubHktZGlzYWJsZWR7YmFja2dyb3VuZDowLzRweCAxcHggcmVwZWF0LXg7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2I0YjRiNCAwLCNiNGI0YjQgMzMlLHRyYW5zcGFyZW50IDApO2JvcmRlci10b3A6MH0ubHktaW5wdXQtdW5kZXJsaW5lLmx5LWRpc2FibGVkOmFmdGVye3dpZHRoOjAlfTpob3N0Lmx5LWxhYmVsLWFib3ZlIC5seS1pbnB1dC1mbG9hdC1sYWJlbHtmb250LXNpemU6NzUlO3RvcDowfS5seS1pbnB1dC1kZWZhdWx0LC5seS1pbnB1dC1mbG9hdC1sYWJlbCwubHktaW5wdXQtcGxhY2Vob2xkZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MS4xMjVlbTt0b3A6MS4xMjVlbTttYXJnaW46YXV0bztmb250LXNpemU6MTAwJTt0cmFuc2l0aW9uOmFsbCAzNzVtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpO2NvbG9yOmluaGVyaXQ7d2lkdGg6MTAwJX0ubHktaW5wdXQtY29udGVudHt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtjb2xvcjpjdXJyZW50Q29sb3J9Lmx5LWlucHV0LWNvbnRhaW5lcntwYWRkaW5nOjEuMTI1ZW0gMDtwb3NpdGlvbjpyZWxhdGl2ZTtvcGFjaXR5OjE7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246aW5oZXJpdDt3aWR0aDoxMDAlfS5seS1pbnB1dC1jb250YWluZXIgOjpuZy1kZWVwIGlucHV0e3RleHQtYWxpZ246aW5oZXJpdH0uYm90dG9tLWZpZWxkLC5seS1lcnJvci1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTtmb250LXNpemU6NzUlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYygxMDAlIC0gMS4xZW0pLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGMoMTAwJSAtIDEuMWVtKSwwKTtkaXNwbGF5OmZsZXh9LmJvdHRvbS1maWVsZCAuYm90dG9tLWZpZWxkLXNwYWNlLC5seS1lcnJvci1jb250YWluZXIgLmJvdHRvbS1maWVsZC1zcGFjZXtmbGV4OjF9Lmx5LXJlcXVpcmVke3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxLjEyNWVtO3JpZ2h0OjA7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5Oi40NX06aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC1mbG9hdC1sYWJlbCw6aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC1wbGFjZWhvbGRlciw6aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC11bmRlcmxpbmUsOmhvc3QubHktaW5wdXQtaW52YWxpZCAvZGVlcC8gbHktZXJyb3J7Y29sb3I6I2Y0NDMzNiFpbXBvcnRhbnR9Omhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtdW5kZXJsaW5lOmFmdGVye3dpZHRoOjEwMCV9YF0sXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktYmVmb3JlXCI+PC9uZy1jb250ZW50PlxyXG48ZGl2IGNsYXNzPVwie3sgX2NsYXNzZXMud2l0aENvbG9yIH19IGx5LWlucHV0LXVuZGVybGluZVwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibHktaW5wdXQtY29udGFpbmVyIHt7IF9jbGFzc2VzLmNhcmV0Q29sb3IgfX1cIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJpbnB1dCwgdGV4dGFyZWFcIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBseS1wbGFjZWhvbGRlciAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicGxhY2Vob2xkZXI7IHRoZW4gaXNQbGFjZWhvbGRlclRlbXBsYXRlOyBlbHNlIHBsYWNlaG9sZGVyQ29udGFpbmVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlICNpc1BsYWNlaG9sZGVyVGVtcGxhdGU+XHJcbiAgICA8ZGl2ICpuZ0lmPVwidG9Cb29sZWFuKHBsYWNlaG9sZGVyKSAhPT0gdW5kZWZpbmVkICYmIHBsYWNlaG9sZGVyU3RhdGVcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1wbGFjZWhvbGRlclwiPnt7IHBsYWNlaG9sZGVyIH19PC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgI3BsYWNlaG9sZGVyQ29udGFpbmVyPlxyXG4gICAgPGRpdiAqbmdJZj1cImx5UGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCAmJiBwbGFjZWhvbGRlclN0YXRlXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtcGxhY2Vob2xkZXJcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktcGxhY2Vob2xkZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDwhLS0gbHktZGVmYXVsdCAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidG9Cb29sZWFuKGRlZmF1bHQpOyB0aGVuIGlzRGVmYXVsdFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlICNpc0RlZmF1bHRUZW1wbGF0ZT5cclxuICAgIDxkaXYgKm5nSWY9XCIhKGx5RGVmYXVsdCAhPT0gdW5kZWZpbmVkKSAmJiBkZWZhdWx0T2ZmXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZGVmYXVsdFwiPkRlZmF1bHQ6IHt7IGRlZmF1bHQgfX08L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCJseURlZmF1bHQgIT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0T2ZmXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZGVmYXVsdFwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1kZWZhdWx0XCI+PC9uZy1jb250ZW50Pnt7IGRlZmF1bHQgfX1cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPCEtLSBseS1sYWJlbCAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidG9Cb29sZWFuKGxhYmVsKTsgdGhlbiBfaXNMYWJlbFRlbXBsYXRlOyBlbHNlIGxhYmVsQ29udGFpbmVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlICNfaXNMYWJlbFRlbXBsYXRlPlxyXG4gICAgPGRpdiAqbmdJZj1cImxhYmVsICE9PSB1bmRlZmluZWRcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1mbG9hdC1sYWJlbFwiPnt7IGxhYmVsIH19PC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgI2xhYmVsQ29udGFpbmVyPlxyXG4gICAgPGRpdiAqbmdJZj1cImx5TGFiZWxcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1mbG9hdC1sYWJlbFwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1sYWJlbFwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibHktaWNvbi1yZXF1aXJlZFwiICpuZ0lmPVwicmVxdWlyZWRcIj48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImJvdHRvbS1maWVsZFwiICpuZ0lmPVwiIV9pc0Vycm9yU3RhdGUoKVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWhpbnRbYWxpZ249c3RhcnRdLCBseS1oaW50Om5vdChseS1oaW50W2FsaWduXSlcIj48L25nLWNvbnRlbnQ+XHJcbiAgPHNwYW4gY2xhc3M9XCJib3R0b20tZmllbGQtc3BhY2VcIj48L3NwYW4+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktaGludFthbGlnbj1lbmRdXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImJvdHRvbS1maWVsZFwiICpuZ0lmPVwiX2lzRXJyb3JTdGF0ZSgpXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktZXJyb3JcIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48bmctY29udGVudCBzZWxlY3Q9XCJseS1hZnRlclwiPjwvbmctY29udGVudD5cclxuYCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5seS1pbnB1dC1pbnZhbGlkXSc6ICdfaXNFcnJvclN0YXRlKCknLFxuICAgICdbY2xhc3MubmctdW50b3VjaGVkXSc6ICdfc2hvdWxkRm9yd2FyZChcInVudG91Y2hlZFwiKScsXG4gICAgJ1tjbGFzcy5uZy10b3VjaGVkXSc6ICdfc2hvdWxkRm9yd2FyZChcInRvdWNoZWRcIiknLFxuICAgICdbY2xhc3MubmctcHJpc3RpbmVdJzogJ19zaG91bGRGb3J3YXJkKFwicHJpc3RpbmVcIiknLFxuICAgICdbY2xhc3MubmctZGlydHldJzogJ19zaG91bGRGb3J3YXJkKFwiZGlydHlcIiknLFxuICAgICdbY2xhc3MubmctdmFsaWRdJzogJ19zaG91bGRGb3J3YXJkKFwidmFsaWRcIiknLFxuICAgICdbY2xhc3MubmctaW52YWxpZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJpbnZhbGlkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXBlbmRpbmddJzogJ19zaG91bGRGb3J3YXJkKFwicGVuZGluZ1wiKScsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIF92YWx1ZTogYW55O1xuICBfZWxlbWVudFR5cGU6ICdpbnB1dCcgfCAndGV4dGFyZWEnO1xuICBfaW5wdXRDb2xvciA9ICdwcmltYXJ5JztcbiAgY3VycmVudFZhbHVlOiBhbnk7XG4gIHByaXZhdGUgcGFsZXR0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNoYW5nZWQgPSBuZXcgQXJyYXk8KHZhbHVlOiBhbnkpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgdG91Y2hlZCA9IG5ldyBBcnJheTwoKSA9PiB2b2lkPigpO1xuICBAQ29udGVudENoaWxkKEx5RmllbGREaXJlY3RpdmUpIF9maWVsZDogTHlGaWVsZERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChMeVBsYWNlaG9sZGVyKSBseVBsYWNlaG9sZGVyOiBMeVBsYWNlaG9sZGVyO1xuICBAQ29udGVudENoaWxkKEx5RGVmYXVsdCkgbHlEZWZhdWx0OiBMeURlZmF1bHQ7XG4gIEBDb250ZW50Q2hpbGQoTHlMYWJlbCkgbHlMYWJlbDogTHlMYWJlbDtcbiAgQElucHV0KCkgdHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgQElzQm9vbGVhbigpIGxhYmVsQWJvdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRlZmF1bHQ6IHN0cmluZztcbiAgX2Vycm9yU3RhdGU6IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyQ29udGFpbmVyOiBhbnk7XG4gIGxhYmVsQ29udGFpbmVyOiBhbnk7XG4gIGZvY3VzU3RhdGVTdXNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBfY2xhc3Nlczoge1xuICAgIGNhcmV0Q29sb3I/OiBzdHJpbmcsXG4gICAgd2l0aENvbG9yPzogc3RyaW5nXG4gIH0gPSB7fTtcbiAgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgIHRoaXMudXBkYXRlQ29sb3IodmFsKTtcbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1sYWJlbC1hYm92ZScpXG4gIGdldCBpc0Zsb2F0aW5nTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlU3RhdGUgfHwgdGhpcy5sYWJlbEFib3ZlIHx8IHRoaXMuaXNEZWZhdWx0IHx8IHRoaXMuZm9jdXNTdGF0ZTtcbiAgfVxuXG4gIGdldCBwbGFjZWhvbGRlclN0YXRlKCkge1xuICAgIHJldHVybiAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiB0aGlzLmZvY3VzU3RhdGUgfHwgIXRoaXMuY3VycmVudFZhbHVlU3RhdGUgJiYgIXRoaXMuZm9jdXNTdGF0ZSAmJiB0aGlzLmlzRmxvYXRpbmdMYWJlbDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWZvY3VzLWFjdGl2ZScpIGZvY3VzU3RhdGU6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktaGlkZGVuLWlucHV0JylcbiAgZ2V0IGRlZmF1bHRPZmYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLmRlZmF1bHQgJiYgIXRoaXMuZm9jdXNTdGF0ZSB8fCAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiAhdGhpcy5mb2N1c1N0YXRlO1xuICB9XG5cbiAgQElucHV0KCkgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZmllbGQuZGlzYWJsZWQ7IH1cblxuICBASW5wdXQoKSBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9maWVsZC5yZXF1aXJlZDsgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktdmFsdWUtb24nKVxuICBnZXQgY3VycmVudFZhbHVlU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChgJHt0aGlzLmN1cnJlbnRWYWx1ZX1gKS5sZW5ndGggIT09IDAgJiYgdGhpcy5jdXJyZW50VmFsdWUgIT0gbnVsbDtcbiAgfVxuXG4gIF92YWx1ZUJvb2xlYW4odmFsKSB7XG4gICAgcmV0dXJuICEodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gZmFsc2UgfHwgdmFsID09PSAnJyk7XG4gIH1cblxuICBfaXNFcnJvclN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wuaW52YWxpZCAmJiB0aGlzLl9maWVsZC5fbmdDb250cm9sLnRvdWNoZWQgfHwgdGhpcy5fZXJyb3JTdGF0ZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVFcnJvcigpIHtcbiAgICB0aGlzLl9lcnJvclN0YXRlID0gdGhpcy5fZmllbGQuX25nQ29udHJvbC5pbnZhbGlkO1xuICB9XG5cbiAgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIGJjcjogTHlDb21tb24sXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGNvbnN0IGlucHV0Q29sb3IgPSAoKSA9PiB0aGlzLnRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICB0aGlzLl9jbGFzc2VzLmNhcmV0Q29sb3IgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgaW5wdXQ6Y2FyZXQke3ZhbH1gLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGNhcmV0LWNvbG9yOiR7aW5wdXRDb2xvcigpfWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5fY2xhc3Nlcy53aXRoQ29sb3IgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgaW5wdXQ6JHt2YWx9YCwge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBjb2xvcjoke2lucHV0Q29sb3IoKX07YCArXG4gICAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy5pbnB1dC51bmRlcmxpbmV9O2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICB0b0Jvb2xlYW4odmFsOiBhbnkpIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGlzUGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLnBsYWNlaG9sZGVyKSB8fCAhIXRoaXMubHlQbGFjZWhvbGRlcjtcbiAgfVxuICBnZXQgaXNEZWZhdWx0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5kZWZhdWx0KSB8fCAhIXRoaXMubHlEZWZhdWx0O1xuICB9XG4gIGdldCBpc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5sYWJlbCkgfHwgISF0aGlzLmx5TGFiZWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yKHRoaXMudGhlbWUuY29uZmlnLmlucHV0LndpdGhDb2xvcik7XG4gICAgfVxuICAgIC8vIHRoaXMuX2lucHV0Q29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5fY29sb3IpO1xuICAgIHRoaXMuZm9jdXNTdGF0ZVN1c2NyaXB0aW9uID0gdGhpcy5fZmllbGQuZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGZTdGF0ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb2N1c1N0YXRlID0gZlN0YXRlO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLl9maWVsZC5fcGFyZW50KCkpIHtcbiAgICAgIHRoaXMuX2ZpZWxkLl9wYXJlbnQoKS5uZ1N1Ym1pdC5zdWJzY3JpYmUoKHN1Ym1pdCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlO1xuICAgICAgaWYgKHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wgJiYgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsO1xuICAgICAgICAgIHRoaXMuX2Vycm9yU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiByZXNldCBlcnJvciBvZiBzdWJtaXQgdG8gZmFsc2VcbiAgICAgICAgICAgKi9cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9maWVsZC5mb2N1c1N0YXRlLnN1YnNjcmliZSgoaXNGb2N1c2VkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVmYXVsdCkge1xuICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmRlZmF1bHQ7XG4gICAgICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWVsZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdMeUlucHV0OiBSZXF1aXJlIGlucHV0IG5hdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG91bGRGb3J3YXJkKHByb3A6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9maWVsZCA/IHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wgOiBudWxsO1xuICAgIHJldHVybiBjb250cm9sICYmIChjb250cm9sIGFzIGFueSlbcHJvcF07XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZGVmYXVsdCkge1xuICAgICAgaWYgKHRoaXMuaXNEZWZhdWx0ICYmICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZpZXdUb01vZGVsVXBkYXRlKHRoaXMuZGVmYXVsdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZVN1c2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SW5wdXQsIEx5SW5wdXRDb250ZW50cywgTHlGaWVsZERpcmVjdGl2ZSwgTHlJbnB1dENvbW1vbiwgTHlEZWZhdWx0LCBMeUxhYmVsLCBMeVBsYWNlaG9sZGVyXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlJbnB1dCwgTHlJbnB1dENvbnRlbnRzLCBMeUZpZWxkRGlyZWN0aXZlLCBMeUlucHV0Q29tbW9uLCBMeURlZmF1bHQsIEx5TGFiZWwsIEx5UGxhY2Vob2xkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0TW9kdWxlIHt9XG4iXX0=