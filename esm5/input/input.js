/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        var inputColor = function () { return _this.theme.colorOf(val); };
        this._classes.caretColor = this.theme.setUpStyle("input:caret" + val, {
            '': function () { return ("caret-color:" + inputColor()); }
        });
        this._classes.withColor = this.theme.setUpStyle("input:" + val, {
            '': function () { return ("color:" + inputColor() + ";" +
                ("background-color:" + _this.theme.config["input"].underline + ";")); }
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
        /** @type {?} */
        var control = this._field ? this._field._ngControl : null;
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
                    styles: [":host{display:inline-block;position:relative;align-items:center}:host /deep/ ly-after,:host /deep/ ly-before{display:inline-block;vertical-align:inherit}:host /deep/ input,:host /deep/ textarea{border:none;outline:0;font-family:inherit;color:inherit;background:0 0;font-size:inherit;width:100%;font-weight:400;padding:0;display:inline-flex}:host.ly-default-off .ly-input-default,:host.ly-hidden-input /deep/ .ly-input-container input,:host.ly-hidden-input /deep/ .ly-input-container textarea{opacity:0}:host.ly-focus-active .ly-input-underline:after{width:100%}:host.ly-focus-active .ly-input-top-label,:host.ly-focus-active /deep/ ly-top-label{font-size:75%;top:0;-webkit-transform:translate(0,0);transform:translate(0,0)}:host.ly-focus-active .ly-input-default{opacity:0}:host.ly-value-on .ly-input-placeholder{opacity:0}.ly-input-underline{position:absolute;bottom:.875em;height:1px;right:0;left:0}.ly-input-underline:after{content:'';position:absolute;width:0%;height:2px;background:currentColor;left:0;right:0;margin:0 auto;bottom:0;transition:450ms cubic-bezier(.23,1,.32,1)}.ly-input-underline.ly-disabled{background:0/4px 1px repeat-x;background-image:linear-gradient(to right,#b4b4b4 0,#b4b4b4 33%,transparent 0);border-top:0}.ly-input-underline.ly-disabled:after{width:0%}:host.ly-label-above .ly-input-float-label{font-size:75%;top:0}.ly-input-default,.ly-input-float-label,.ly-input-placeholder{pointer-events:none;position:absolute;bottom:1.125em;top:1.125em;margin:auto;font-size:100%;transition:375ms cubic-bezier(.23,1,.32,1);color:inherit;width:100%}.ly-input-content{width:100%;position:relative;display:flex;color:currentColor}.ly-input-container{padding:1.125em 0;position:relative;opacity:1;display:inline-block;vertical-align:inherit;width:100%}.ly-input-container ::ng-deep input{text-align:inherit}.bottom-field,.ly-error-container{position:absolute;bottom:0;left:0;width:100%;pointer-events:none;font-size:75%;-webkit-transform:translate3d(0,calc(100% - 1.1em),0);transform:translate3d(0,calc(100% - 1.1em),0);display:flex}.bottom-field .bottom-field-space,.ly-error-container .bottom-field-space{flex:1}.ly-required{position:absolute;top:1.125em;right:0;pointer-events:none;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:.45}:host.ly-input-invalid .ly-input-float-label,:host.ly-input-invalid .ly-input-placeholder,:host.ly-input-invalid .ly-input-underline,:host.ly-input-invalid /deep/ ly-error{color:#f44336!important}:host.ly-input-invalid .ly-input-underline:after{width:100%}"],
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
        { type: LyTheme2 },
        { type: ChangeDetectorRef },
        { type: LyCommon, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyInput.propDecorators = {
        _field: [{ type: ContentChild, args: [LyFieldDirective,] }],
        lyPlaceholder: [{ type: ContentChild, args: [LyPlaceholder,] }],
        lyDefault: [{ type: ContentChild, args: [LyDefault,] }],
        lyLabel: [{ type: ContentChild, args: [LyLabel,] }],
        type: [{ type: Input }],
        label: [{ type: Input }],
        placeholder: [{ type: Input }],
        labelAbove: [{ type: Input }],
        default: [{ type: Input }],
        withColor: [{ type: Input }],
        isFloatingLabel: [{ type: HostBinding, args: ['class.ly-label-above',] }],
        focusState: [{ type: HostBinding, args: ['class.ly-focus-active',] }],
        defaultOff: [{ type: HostBinding, args: ['class.ly-hidden-input',] }],
        disabled: [{ type: Input }],
        required: [{ type: Input }],
        currentValueState: [{ type: HostBinding, args: ['class.ly-value-on',] }]
    };
    tslib_1.__decorate([
        IsBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], LyInput.prototype, "labelAbove", void 0);
    return LyInput;
}());
export { LyInput };
if (false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaW5wdXQvIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsU0FBUyxFQUdULFlBQVksRUFFWixRQUFRLEVBQ1IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixXQUFXLEVBR1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsV0FBVyxHQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztnQkFFdkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzRUFBc0U7aUJBQ2pGOzt3QkE3QkQ7O1NBOEJhLGFBQWE7Ozs7O2dCQUV6QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7O3dCQWxDRDs7U0FtQ2EsYUFBYTs7Ozs7Z0JBRXpCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7O29CQXZDRDs7U0F3Q2EsU0FBUzs7Ozs7Z0JBRXJCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7O2tCQTVDRDs7U0E2Q2EsT0FBTzs7SUEwSWxCLGlCQUNVLE9BQ0Esb0JBQ0ksR0FBYSxFQUN6QixRQUFtQixFQUNuQixVQUFzQjtRQUpkLFVBQUssR0FBTCxLQUFLO1FBQ0wsdUJBQWtCLEdBQWxCLGtCQUFrQjsy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QWhTRDs7U0FpU2EsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBOZ01vZHVsZSxcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBDb250ZW50Q2hpbGQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZTIsIElzQm9vbGVhbiwgdG9Cb29sZWFuLCBMeUNvbW1vbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUlucHV0Q29udGVudHMgfSBmcm9tICcuL2lucHV0LWNvbnRlbnRzJztcbmltcG9ydCB7IEx5RmllbGREaXJlY3RpdmUgfSBmcm9tICcuL2x5LWZpZWxkLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRlZmF1bHQsIGx5LWJlZm9yZSwgbHktYWZ0ZXIsIGx5LWlucHV0IGx5LWVycm9yLCBseS1pbnB1dCBseS1oaW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0Q29tbW9uIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXBsYWNlaG9sZGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVBsYWNlaG9sZGVyIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRlZmF1bHQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RGVmYXVsdCB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1sYWJlbCdcbn0pXG5leHBvcnQgY2xhc3MgTHlMYWJlbCB7fVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRleHQtZmllbGQsIGx5LWlucHV0LCBseS10ZXh0YXJlYScsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QgL2RlZXAvIGx5LWFmdGVyLDpob3N0IC9kZWVwLyBseS1iZWZvcmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246aW5oZXJpdH06aG9zdCAvZGVlcC8gaW5wdXQsOmhvc3QgL2RlZXAvIHRleHRhcmVhe2JvcmRlcjpub25lO291dGxpbmU6MDtmb250LWZhbWlseTppbmhlcml0O2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDowIDA7Zm9udC1zaXplOmluaGVyaXQ7d2lkdGg6MTAwJTtmb250LXdlaWdodDo0MDA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lLWZsZXh9Omhvc3QubHktZGVmYXVsdC1vZmYgLmx5LWlucHV0LWRlZmF1bHQsOmhvc3QubHktaGlkZGVuLWlucHV0IC9kZWVwLyAubHktaW5wdXQtY29udGFpbmVyIGlucHV0LDpob3N0Lmx5LWhpZGRlbi1pbnB1dCAvZGVlcC8gLmx5LWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXtvcGFjaXR5OjB9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7d2lkdGg6MTAwJX06aG9zdC5seS1mb2N1cy1hY3RpdmUgLmx5LWlucHV0LXRvcC1sYWJlbCw6aG9zdC5seS1mb2N1cy1hY3RpdmUgL2RlZXAvIGx5LXRvcC1sYWJlbHtmb250LXNpemU6NzUlO3RvcDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKX06aG9zdC5seS1mb2N1cy1hY3RpdmUgLmx5LWlucHV0LWRlZmF1bHR7b3BhY2l0eTowfTpob3N0Lmx5LXZhbHVlLW9uIC5seS1pbnB1dC1wbGFjZWhvbGRlcntvcGFjaXR5OjB9Lmx5LWlucHV0LXVuZGVybGluZXtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206Ljg3NWVtO2hlaWdodDoxcHg7cmlnaHQ6MDtsZWZ0OjB9Lmx5LWlucHV0LXVuZGVybGluZTphZnRlcntjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjAlO2hlaWdodDoycHg7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7bGVmdDowO3JpZ2h0OjA7bWFyZ2luOjAgYXV0bztib3R0b206MDt0cmFuc2l0aW9uOjQ1MG1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSl9Lmx5LWlucHV0LXVuZGVybGluZS5seS1kaXNhYmxlZHtiYWNrZ3JvdW5kOjAvNHB4IDFweCByZXBlYXQteDtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwjYjRiNGI0IDAsI2I0YjRiNCAzMyUsdHJhbnNwYXJlbnQgMCk7Ym9yZGVyLXRvcDowfS5seS1pbnB1dC11bmRlcmxpbmUubHktZGlzYWJsZWQ6YWZ0ZXJ7d2lkdGg6MCV9Omhvc3QubHktbGFiZWwtYWJvdmUgLmx5LWlucHV0LWZsb2F0LWxhYmVse2ZvbnQtc2l6ZTo3NSU7dG9wOjB9Lmx5LWlucHV0LWRlZmF1bHQsLmx5LWlucHV0LWZsb2F0LWxhYmVsLC5seS1pbnB1dC1wbGFjZWhvbGRlcntwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToxLjEyNWVtO3RvcDoxLjEyNWVtO21hcmdpbjphdXRvO2ZvbnQtc2l6ZToxMDAlO3RyYW5zaXRpb246Mzc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTtjb2xvcjppbmhlcml0O3dpZHRoOjEwMCV9Lmx5LWlucHV0LWNvbnRlbnR7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7Y29sb3I6Y3VycmVudENvbG9yfS5seS1pbnB1dC1jb250YWluZXJ7cGFkZGluZzoxLjEyNWVtIDA7cG9zaXRpb246cmVsYXRpdmU7b3BhY2l0eToxO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOmluaGVyaXQ7d2lkdGg6MTAwJX0ubHktaW5wdXQtY29udGFpbmVyIDo6bmctZGVlcCBpbnB1dHt0ZXh0LWFsaWduOmluaGVyaXR9LmJvdHRvbS1maWVsZCwubHktZXJyb3ItY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO3BvaW50ZXItZXZlbnRzOm5vbmU7Zm9udC1zaXplOjc1JTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGMoMTAwJSAtIDEuMWVtKSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKDEwMCUgLSAxLjFlbSksMCk7ZGlzcGxheTpmbGV4fS5ib3R0b20tZmllbGQgLmJvdHRvbS1maWVsZC1zcGFjZSwubHktZXJyb3ItY29udGFpbmVyIC5ib3R0b20tZmllbGQtc3BhY2V7ZmxleDoxfS5seS1yZXF1aXJlZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MS4xMjVlbTtyaWdodDowO3BvaW50ZXItZXZlbnRzOm5vbmU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eTouNDV9Omhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtZmxvYXQtbGFiZWwsOmhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtcGxhY2Vob2xkZXIsOmhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtdW5kZXJsaW5lLDpob3N0Lmx5LWlucHV0LWludmFsaWQgL2RlZXAvIGx5LWVycm9ye2NvbG9yOiNmNDQzMzYhaW1wb3J0YW50fTpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXVuZGVybGluZTphZnRlcnt3aWR0aDoxMDAlfWBdLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWJlZm9yZVwiPjwvbmctY29udGVudD5cclxuPGRpdiBjbGFzcz1cInt7IF9jbGFzc2VzLndpdGhDb2xvciB9fSBseS1pbnB1dC11bmRlcmxpbmVcIj48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImx5LWlucHV0LWNvbnRhaW5lciB7eyBfY2xhc3Nlcy5jYXJldENvbG9yIH19XCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaW5wdXQsIHRleHRhcmVhXCI+PC9uZy1jb250ZW50PlxyXG4gIDwhLS0gbHktcGxhY2Vob2xkZXIgLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBsYWNlaG9sZGVyOyB0aGVuIGlzUGxhY2Vob2xkZXJUZW1wbGF0ZTsgZWxzZSBwbGFjZWhvbGRlckNvbnRhaW5lclwiPjwvbmctY29udGFpbmVyPlxyXG4gIDxuZy10ZW1wbGF0ZSAjaXNQbGFjZWhvbGRlclRlbXBsYXRlPlxyXG4gICAgPGRpdiAqbmdJZj1cInRvQm9vbGVhbihwbGFjZWhvbGRlcikgIT09IHVuZGVmaW5lZCAmJiBwbGFjZWhvbGRlclN0YXRlXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtcGxhY2Vob2xkZXJcIj57eyBwbGFjZWhvbGRlciB9fTwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlICNwbGFjZWhvbGRlckNvbnRhaW5lcj5cclxuICAgIDxkaXYgKm5nSWY9XCJseVBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgJiYgcGxhY2Vob2xkZXJTdGF0ZVwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LXBsYWNlaG9sZGVyXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LXBsYWNlaG9sZGVyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8IS0tIGx5LWRlZmF1bHQgLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvQm9vbGVhbihkZWZhdWx0KTsgdGhlbiBpc0RlZmF1bHRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gIDxuZy10ZW1wbGF0ZSAjaXNEZWZhdWx0VGVtcGxhdGU+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiIShseURlZmF1bHQgIT09IHVuZGVmaW5lZCkgJiYgZGVmYXVsdE9mZlwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWRlZmF1bHRcIj5EZWZhdWx0OiB7eyBkZWZhdWx0IH19PC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlEZWZhdWx0ICE9PSB1bmRlZmluZWQgJiYgZGVmYXVsdE9mZlwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWRlZmF1bHRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktZGVmYXVsdFwiPjwvbmctY29udGVudD57eyBkZWZhdWx0IH19XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDwhLS0gbHktbGFiZWwgLS0+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRvQm9vbGVhbihsYWJlbCk7IHRoZW4gX2lzTGFiZWxUZW1wbGF0ZTsgZWxzZSBsYWJlbENvbnRhaW5lclwiPjwvbmctY29udGFpbmVyPlxyXG4gIDxuZy10ZW1wbGF0ZSAjX2lzTGFiZWxUZW1wbGF0ZT5cclxuICAgIDxkaXYgKm5nSWY9XCJsYWJlbCAhPT0gdW5kZWZpbmVkXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZmxvYXQtbGFiZWxcIj57eyBsYWJlbCB9fTwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlICNsYWJlbENvbnRhaW5lcj5cclxuICAgIDxkaXYgKm5nSWY9XCJseUxhYmVsXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZmxvYXQtbGFiZWxcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktbGFiZWxcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImx5LWljb24tcmVxdWlyZWRcIiAqbmdJZj1cInJlcXVpcmVkXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJib3R0b20tZmllbGRcIiAqbmdJZj1cIiFfaXNFcnJvclN0YXRlKClcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1oaW50W2FsaWduPXN0YXJ0XSwgbHktaGludDpub3QobHktaGludFthbGlnbl0pXCI+PC9uZy1jb250ZW50PlxyXG4gIDxzcGFuIGNsYXNzPVwiYm90dG9tLWZpZWxkLXNwYWNlXCI+PC9zcGFuPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWhpbnRbYWxpZ249ZW5kXVwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJib3R0b20tZmllbGRcIiAqbmdJZj1cIl9pc0Vycm9yU3RhdGUoKVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWVycm9yXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktYWZ0ZXJcIj48L25nLWNvbnRlbnQ+XHJcbmAsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubHktaW5wdXQtaW52YWxpZF0nOiAnX2lzRXJyb3JTdGF0ZSgpJyxcbiAgICAnW2NsYXNzLm5nLXVudG91Y2hlZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ1bnRvdWNoZWRcIiknLFxuICAgICdbY2xhc3MubmctdG91Y2hlZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ0b3VjaGVkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXByaXN0aW5lXSc6ICdfc2hvdWxkRm9yd2FyZChcInByaXN0aW5lXCIpJyxcbiAgICAnW2NsYXNzLm5nLWRpcnR5XSc6ICdfc2hvdWxkRm9yd2FyZChcImRpcnR5XCIpJyxcbiAgICAnW2NsYXNzLm5nLXZhbGlkXSc6ICdfc2hvdWxkRm9yd2FyZChcInZhbGlkXCIpJyxcbiAgICAnW2NsYXNzLm5nLWludmFsaWRdJzogJ19zaG91bGRGb3J3YXJkKFwiaW52YWxpZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1wZW5kaW5nXSc6ICdfc2hvdWxkRm9yd2FyZChcInBlbmRpbmdcIiknLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBfdmFsdWU6IGFueTtcbiAgX2VsZW1lbnRUeXBlOiAnaW5wdXQnIHwgJ3RleHRhcmVhJztcbiAgX2lucHV0Q29sb3IgPSAncHJpbWFyeSc7XG4gIGN1cnJlbnRWYWx1ZTogYW55O1xuICBwcml2YXRlIHBhbGV0dGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFuZ2VkID0gbmV3IEFycmF5PCh2YWx1ZTogYW55KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIHRvdWNoZWQgPSBuZXcgQXJyYXk8KCkgPT4gdm9pZD4oKTtcbiAgQENvbnRlbnRDaGlsZChMeUZpZWxkRGlyZWN0aXZlKSBfZmllbGQ6IEx5RmllbGREaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoTHlQbGFjZWhvbGRlcikgbHlQbGFjZWhvbGRlcjogTHlQbGFjZWhvbGRlcjtcbiAgQENvbnRlbnRDaGlsZChMeURlZmF1bHQpIGx5RGVmYXVsdDogTHlEZWZhdWx0O1xuICBAQ29udGVudENoaWxkKEx5TGFiZWwpIGx5TGFiZWw6IEx5TGFiZWw7XG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJc0Jvb2xlYW4oKSBsYWJlbEFib3ZlOiBib29sZWFuO1xuICBASW5wdXQoKSBkZWZhdWx0OiBzdHJpbmc7XG4gIF9lcnJvclN0YXRlOiBib29sZWFuO1xuICBwbGFjZWhvbGRlckNvbnRhaW5lcjogYW55O1xuICBsYWJlbENvbnRhaW5lcjogYW55O1xuICBmb2N1c1N0YXRlU3VzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgX2NsYXNzZXM6IHtcbiAgICBjYXJldENvbG9yPzogc3RyaW5nLFxuICAgIHdpdGhDb2xvcj86IHN0cmluZ1xuICB9ID0ge307XG4gIF93aXRoQ29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICB0aGlzLnVwZGF0ZUNvbG9yKHZhbCk7XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktbGFiZWwtYWJvdmUnKVxuICBnZXQgaXNGbG9hdGluZ0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlIHx8IHRoaXMubGFiZWxBYm92ZSB8fCB0aGlzLmlzRGVmYXVsdCB8fCB0aGlzLmZvY3VzU3RhdGU7XG4gIH1cblxuICBnZXQgcGxhY2Vob2xkZXJTdGF0ZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuY3VycmVudFZhbHVlU3RhdGUgJiYgdGhpcy5mb2N1c1N0YXRlIHx8ICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmICF0aGlzLmZvY3VzU3RhdGUgJiYgdGhpcy5pc0Zsb2F0aW5nTGFiZWw7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1mb2N1cy1hY3RpdmUnKSBmb2N1c1N0YXRlOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWhpZGRlbi1pbnB1dCcpXG4gIGdldCBkZWZhdWx0T2ZmKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZSA9PT0gdGhpcy5kZWZhdWx0ICYmICF0aGlzLmZvY3VzU3RhdGUgfHwgIXRoaXMuY3VycmVudFZhbHVlU3RhdGUgJiYgIXRoaXMuZm9jdXNTdGF0ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2ZpZWxkLmRpc2FibGVkOyB9XG5cbiAgQElucHV0KCkgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZmllbGQucmVxdWlyZWQ7IH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LXZhbHVlLW9uJylcbiAgZ2V0IGN1cnJlbnRWYWx1ZVN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoYCR7dGhpcy5jdXJyZW50VmFsdWV9YCkubGVuZ3RoICE9PSAwICYmIHRoaXMuY3VycmVudFZhbHVlICE9IG51bGw7XG4gIH1cblxuICBfdmFsdWVCb29sZWFuKHZhbCkge1xuICAgIHJldHVybiAhKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCB8fCB2YWwgPT09IGZhbHNlIHx8IHZhbCA9PT0gJycpO1xuICB9XG5cbiAgX2lzRXJyb3JTdGF0ZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9maWVsZC5fbmdDb250cm9sLmludmFsaWQgJiYgdGhpcy5fZmllbGQuX25nQ29udHJvbC50b3VjaGVkIHx8IHRoaXMuX2Vycm9yU3RhdGU7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgdXBkYXRlRXJyb3IoKSB7XG4gICAgdGhpcy5fZXJyb3JTdGF0ZSA9IHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wuaW52YWxpZDtcbiAgfVxuXG4gIHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBiY3I6IEx5Q29tbW9uLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpbnB1dENvbG9yID0gKCkgPT4gdGhpcy50aGVtZS5jb2xvck9mKHZhbCk7XG4gICAgdGhpcy5fY2xhc3Nlcy5jYXJldENvbG9yID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgYGlucHV0OmNhcmV0JHt2YWx9YCwge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBjYXJldC1jb2xvcjoke2lucHV0Q29sb3IoKX1gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuX2NsYXNzZXMud2l0aENvbG9yID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgYGlucHV0OiR7dmFsfWAsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgY29sb3I6JHtpbnB1dENvbG9yKCl9O2AgK1xuICAgICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy50aGVtZS5jb25maWcuaW5wdXQudW5kZXJsaW5lfTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgdG9Cb29sZWFuKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBpc1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5wbGFjZWhvbGRlcikgfHwgISF0aGlzLmx5UGxhY2Vob2xkZXI7XG4gIH1cbiAgZ2V0IGlzRGVmYXVsdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMuZGVmYXVsdCkgfHwgISF0aGlzLmx5RGVmYXVsdDtcbiAgfVxuICBnZXQgaXNMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMubGFiZWwpIHx8ICEhdGhpcy5seUxhYmVsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy51cGRhdGVDb2xvcih0aGlzLnRoZW1lLmNvbmZpZy5pbnB1dC53aXRoQ29sb3IpO1xuICAgIH1cbiAgICAvLyB0aGlzLl9pbnB1dENvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuX2NvbG9yKTtcbiAgICB0aGlzLmZvY3VzU3RhdGVTdXNjcmlwdGlvbiA9IHRoaXMuX2ZpZWxkLmZvY3VzU3RhdGUuc3Vic2NyaWJlKChmU3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9jdXNTdGF0ZSA9IGZTdGF0ZTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5fZmllbGQuX3BhcmVudCgpKSB7XG4gICAgICB0aGlzLl9maWVsZC5fcGFyZW50KCkubmdTdWJtaXQuc3Vic2NyaWJlKChzdWJtaXQpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZTtcbiAgICAgIGlmICh0aGlzLl9maWVsZC5fbmdDb250cm9sICYmIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbDtcbiAgICAgICAgICB0aGlzLl9lcnJvclN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogcmVzZXQgZXJyb3Igb2Ygc3VibWl0IHRvIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fZmllbGQuZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGlzRm9jdXNlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0RlZmF1bHQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFZhbHVlU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUodGhpcy5kZWZhdWx0KTtcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmlld1RvTW9kZWxVcGRhdGUodGhpcy5kZWZhdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmllbGQubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTHlJbnB1dDogUmVxdWlyZSBpbnB1dCBuYXRpdmUnKTtcbiAgICB9XG4gIH1cblxuICBfc2hvdWxkRm9yd2FyZChwcm9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZmllbGQgPyB0aGlzLl9maWVsZC5fbmdDb250cm9sIDogbnVsbDtcbiAgICByZXR1cm4gY29udHJvbCAmJiAoY29udHJvbCBhcyBhbnkpW3Byb3BdO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmRlZmF1bHQpIHtcbiAgICAgIGlmICh0aGlzLmlzRGVmYXVsdCAmJiAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuZGVmYXVsdDtcbiAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzU3RhdGVTdXNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUlucHV0LCBMeUlucHV0Q29udGVudHMsIEx5RmllbGREaXJlY3RpdmUsIEx5SW5wdXRDb21tb24sIEx5RGVmYXVsdCwgTHlMYWJlbCwgTHlQbGFjZWhvbGRlcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SW5wdXQsIEx5SW5wdXRDb250ZW50cywgTHlGaWVsZERpcmVjdGl2ZSwgTHlJbnB1dENvbW1vbiwgTHlEZWZhdWx0LCBMeUxhYmVsLCBMeVBsYWNlaG9sZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dE1vZHVsZSB7fVxuIl19