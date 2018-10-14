import { Directive, ElementRef, HostListener, Input, Self, Optional, ChangeDetectorRef, Component, NgModule, ContentChild, ChangeDetectionStrategy, HostBinding, Renderer2 } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm, FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { __decorate, __metadata } from 'tslib';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyTheme2, IsBoolean, toBoolean, LyCommon } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyInputContents = /** @class */ (function () {
    function LyInputContents() {
    }
    LyInputContents.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-before-input, ly-after-input'
                },] }
    ];
    return LyInputContents;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyFieldDirective = /** @class */ (function () {
    function LyFieldDirective(elementRef, _ngControl, _parentForm, _parentFormGroup, cd) {
        this.elementRef = elementRef;
        this._ngControl = _ngControl;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.cd = cd;
        this.focusState = new Subject();
        this._disabled = false;
        this._required = false;
    }
    /**
     * @param {?} isFocused
     * @return {?}
     */
    LyFieldDirective.prototype.focus = /**
     * @param {?} isFocused
     * @return {?}
     */
    function (isFocused) {
        this.focusState.next(isFocused);
    };
    /**
     * @param {?} isFocused
     * @return {?}
     */
    LyFieldDirective.prototype._blur = /**
     * @param {?} isFocused
     * @return {?}
     */
    function (isFocused) {
        this.focusState.next(isFocused);
    };
    /**
     * @return {?}
     */
    LyFieldDirective.prototype._noop = /**
     * @return {?}
     */
    function () { };
    Object.defineProperty(LyFieldDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._ngControl ? this._ngControl.disabled : this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = !!(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyFieldDirective.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () { return this._ngControl ? this._ngControl.invalid : this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._required = !!(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyFieldDirective.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    LyFieldDirective.prototype._parent = /**
     * @return {?}
     */
    function () {
        return this._parentFormGroup || this._parentForm;
    };
    /**
     * @return {?}
     */
    LyFieldDirective.prototype._updateErrorState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = this._parentFormGroup || this._parentForm;
        /** @type {?} */
        var control = this._ngControl ? /** @type {?} */ (this._ngControl.control) : null;
        // const newState = matcher.isErrorState(control, parent);
        // if (newState !== oldState) {
        //   this.errorState = newState;
        //   this.stateChanges.next();
        // }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LyFieldDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // if (!changes['placeholder'].firstChange) {
        //   console.log(JSON.stringify(changes['placeholder']))
        // }
    };
    /**
     * @return {?}
     */
    LyFieldDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusState.complete();
    };
    LyFieldDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-input input, ly-textarea textarea'
                },] }
    ];
    /** @nocollapse */
    LyFieldDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: NgForm, decorators: [{ type: Optional }] },
        { type: FormGroupDirective, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef }
    ]; };
    LyFieldDirective.propDecorators = {
        type: [{ type: Input }],
        focus: [{ type: HostListener, args: ['focus', ['true'],] }],
        _blur: [{ type: HostListener, args: ['blur', ['false'],] }],
        _noop: [{ type: HostListener, args: ['input',] }],
        disabled: [{ type: Input }],
        required: [{ type: Input }]
    };
    return LyFieldDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyInputCommon = /** @class */ (function () {
    function LyInputCommon() {
    }
    LyInputCommon.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-default, ly-before, ly-after, ly-input ly-error, ly-input ly-hint'
                },] }
    ];
    return LyInputCommon;
}());
var LyPlaceholder = /** @class */ (function () {
    function LyPlaceholder() {
    }
    LyPlaceholder.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-placeholder'
                },] }
    ];
    return LyPlaceholder;
}());
var LyDefault = /** @class */ (function () {
    function LyDefault() {
    }
    LyDefault.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-default'
                },] }
    ];
    return LyDefault;
}());
var LyLabel = /** @class */ (function () {
    function LyLabel() {
    }
    LyLabel.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-label'
                },] }
    ];
    return LyLabel;
}());
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
        this._classes.caretColor = this.theme.addStyle("input:caret" + val, function (theme) { return "caret-color:" + theme.colorOf(val); });
        this._classes.withColor = this.theme.addStyle("input:" + val, function (theme) { return ("color:" + theme.colorOf(val) + ";" +
            ("background-color:" + theme.input.underline + ";")); });
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
            this.updateColor(this.theme.config.input.withColor);
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
                    template: "<ng-content select=\"ly-before\"></ng-content>\r\n<div class=\"{{ _classes.withColor }} ly-input-underline\"></div>\r\n<div class=\"ly-input-container {{ _classes.caretColor }}\">\r\n  <ng-content select=\"input, textarea\"></ng-content>\r\n  <!-- ly-placeholder -->\r\n  <ng-container *ngIf=\"placeholder; then isPlaceholderTemplate; else placeholderContainer\"></ng-container>\r\n  <ng-template #isPlaceholderTemplate>\r\n    <div *ngIf=\"toBoolean(placeholder) !== undefined && placeholderState\" color=\"input:label\" class=\"ly-input-placeholder\">{{ placeholder }}</div>\r\n  </ng-template>\r\n  <ng-template #placeholderContainer>\r\n    <div *ngIf=\"lyPlaceholder !== undefined && placeholderState\" color=\"input:label\" class=\"ly-input-placeholder\">\r\n      <ng-content select=\"ly-placeholder\"></ng-content>\r\n    </div>\r\n  </ng-template>\r\n  <!-- ly-default -->\r\n  <ng-container *ngIf=\"toBoolean(default); then isDefaultTemplate\"></ng-container>\r\n  <ng-template #isDefaultTemplate>\r\n    <div *ngIf=\"!(lyDefault !== undefined) && defaultOff\" color=\"input:label\" class=\"ly-input-default\">Default: {{ default }}</div>\r\n    <div *ngIf=\"lyDefault !== undefined && defaultOff\" color=\"input:label\" class=\"ly-input-default\">\r\n      <ng-content select=\"ly-default\"></ng-content>{{ default }}\r\n    </div>\r\n  </ng-template>\r\n  <!-- ly-label -->\r\n  <ng-container *ngIf=\"toBoolean(label); then _isLabelTemplate; else labelContainer\"></ng-container>\r\n  <ng-template #_isLabelTemplate>\r\n    <div *ngIf=\"label !== undefined\" color=\"input:label\" class=\"ly-input-float-label\">{{ label }}</div>\r\n  </ng-template>\r\n  <ng-template #labelContainer>\r\n    <div *ngIf=\"lyLabel\" color=\"input:label\" class=\"ly-input-float-label\">\r\n      <ng-content select=\"ly-label\"></ng-content>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<div class=\"ly-icon-required\" *ngIf=\"required\"></div>\r\n<div class=\"bottom-field\" *ngIf=\"!_isErrorState()\">\r\n  <ng-content select=\"ly-hint[align=start], ly-hint:not(ly-hint[align])\"></ng-content>\r\n  <span class=\"bottom-field-space\"></span>\r\n  <ng-content select=\"ly-hint[align=end]\"></ng-content>\r\n</div>\r\n<div class=\"bottom-field\" *ngIf=\"_isErrorState()\">\r\n  <ng-content select=\"ly-error\"></ng-content>\r\n</div>\r\n<ng-content select=\"ly-after\"></ng-content>\r\n",
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
                    preserveWhitespaces: false,
                    styles: [":host{display:inline-block;position:relative;align-items:center}:host /deep/ ly-after,:host /deep/ ly-before{display:inline-block;vertical-align:inherit}:host /deep/ input,:host /deep/ textarea{border:none;outline:0;font-family:inherit;color:inherit;background:0 0;font-size:inherit;width:100%;font-weight:400;padding:0;display:inline-flex}:host.ly-default-off .ly-input-default,:host.ly-hidden-input /deep/ .ly-input-container input,:host.ly-hidden-input /deep/ .ly-input-container textarea{opacity:0}:host.ly-focus-active .ly-input-underline:after{width:100%}:host.ly-focus-active .ly-input-top-label,:host.ly-focus-active /deep/ ly-top-label{font-size:75%;top:0;-webkit-transform:translate(0,0);transform:translate(0,0)}:host.ly-focus-active .ly-input-default{opacity:0}:host.ly-value-on .ly-input-placeholder{opacity:0}.ly-input-underline{position:absolute;bottom:.875em;height:1px;right:0;left:0}.ly-input-underline:after{content:'';position:absolute;width:0%;height:2px;background:currentColor;left:0;right:0;margin:0 auto;bottom:0;transition:450ms cubic-bezier(.23,1,.32,1)}.ly-input-underline.ly-disabled{background:0/4px 1px repeat-x;background-image:linear-gradient(to right,#b4b4b4 0,#b4b4b4 33%,transparent 0);border-top:0}.ly-input-underline.ly-disabled:after{width:0%}:host.ly-label-above .ly-input-float-label{font-size:75%;top:0}.ly-input-default,.ly-input-float-label,.ly-input-placeholder{pointer-events:none;position:absolute;bottom:1.125em;top:1.125em;margin:auto;font-size:100%;transition:375ms cubic-bezier(.23,1,.32,1);color:inherit;width:100%}.ly-input-content{width:100%;position:relative;display:flex;color:currentColor}.ly-input-container{padding:1.125em 0;position:relative;opacity:1;display:inline-block;vertical-align:inherit;width:100%}.ly-input-container ::ng-deep input{text-align:inherit}.bottom-field,.ly-error-container{position:absolute;bottom:0;left:0;width:100%;pointer-events:none;font-size:75%;-webkit-transform:translate3d(0,calc(100% - 1.1em),0);transform:translate3d(0,calc(100% - 1.1em),0);display:flex}.bottom-field .bottom-field-space,.ly-error-container .bottom-field-space{flex:1}.ly-required{position:absolute;top:1.125em;right:0;pointer-events:none;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:.45}:host.ly-input-invalid .ly-input-float-label,:host.ly-input-invalid .ly-input-placeholder,:host.ly-input-invalid .ly-input-underline,:host.ly-input-invalid /deep/ ly-error{color:#f44336!important}:host.ly-input-invalid .ly-input-underline:after{width:100%}"]
                }] }
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
    __decorate([
        IsBoolean(),
        __metadata("design:type", Boolean)
    ], LyInput.prototype, "labelAbove", void 0);
    return LyInput;
}());
var LyInputModule = /** @class */ (function () {
    function LyInputModule() {
    }
    LyInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, LyCommonModule],
                    exports: [LyInput, LyInputContents, LyFieldDirective, LyInputCommon, LyDefault, LyLabel, LyPlaceholder],
                    declarations: [LyInput, LyInputContents, LyFieldDirective, LyInputCommon, LyDefault, LyLabel, LyPlaceholder],
                },] }
    ];
    return LyInputModule;
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

export { LyInputCommon, LyPlaceholder, LyDefault, LyLabel, LyInput, LyInputModule, LyInputContents, LyFieldDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaW5wdXQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pbnB1dC9pbnB1dC1jb250ZW50cy50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2x5LWZpZWxkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2lucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2x5LWJlZm9yZS1pbnB1dCwgbHktYWZ0ZXItaW5wdXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMeUlucHV0Q29udGVudHMge1xyXG5cclxufVxyXG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgU2VsZixcbiAgT3B0aW9uYWwsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nQ29udHJvbCwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pbnB1dCBpbnB1dCwgbHktdGV4dGFyZWEgdGV4dGFyZWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGZvY3VzU3RhdGU6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBmb2N1c2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyd0cnVlJ10pIGZvY3VzKGlzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5uZXh0KGlzRm9jdXNlZCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnZmFsc2UnXSkgcHJpdmF0ZSBfYmx1cihpc0ZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUubmV4dChpc0ZvY3VzZWQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JykgcHJpdmF0ZSBfbm9vcCgpIHsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5kaXNhYmxlZCA6IHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gISEodmFsdWUpOyB9XG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5pbnZhbGlkIDogdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmVxdWlyZWQgPSAhISh2YWx1ZSk7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBfbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcGFyZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuICB9XG4gIHByb3RlY3RlZCBfdXBkYXRlRXJyb3JTdGF0ZSgpIHtcbiAgICAvLyBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5fcGFyZW50Rm9ybTtcbiAgICAvLyBjb25zdCBtYXRjaGVyID0gdGhpcy5lcnJvclN0YXRlTWF0Y2hlciB8fCB0aGlzLl9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sIDogbnVsbDtcbiAgICAvLyBjb25zdCBuZXdTdGF0ZSA9IG1hdGNoZXIuaXNFcnJvclN0YXRlKGNvbnRyb2wsIHBhcmVudCk7XG5cbiAgICAvLyBpZiAobmV3U3RhdGUgIT09IG9sZFN0YXRlKSB7XG4gICAgLy8gICB0aGlzLmVycm9yU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAvLyAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAvLyB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W2Zsb2F0TGFiZWw6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICAvLyBpZiAoIWNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10pKVxuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgTmdNb2R1bGUsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgQ29udGVudENoaWxkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWUyLCBJc0Jvb2xlYW4sIHRvQm9vbGVhbiwgTHlDb21tb24gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJbnB1dENvbnRlbnRzIH0gZnJvbSAnLi9pbnB1dC1jb250ZW50cyc7XG5pbXBvcnQgeyBMeUZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9seS1maWVsZC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0LCBseS1iZWZvcmUsIGx5LWFmdGVyLCBseS1pbnB1dCBseS1lcnJvciwgbHktaW5wdXQgbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dENvbW1vbiB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1wbGFjZWhvbGRlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlQbGFjZWhvbGRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0J1xufSlcbmV4cG9ydCBjbGFzcyBMeURlZmF1bHQge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktbGFiZWwnXG59KVxuZXhwb3J0IGNsYXNzIEx5TGFiZWwge31cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10ZXh0LWZpZWxkLCBseS1pbnB1dCwgbHktdGV4dGFyZWEnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5seS1pbnB1dC1pbnZhbGlkXSc6ICdfaXNFcnJvclN0YXRlKCknLFxuICAgICdbY2xhc3MubmctdW50b3VjaGVkXSc6ICdfc2hvdWxkRm9yd2FyZChcInVudG91Y2hlZFwiKScsXG4gICAgJ1tjbGFzcy5uZy10b3VjaGVkXSc6ICdfc2hvdWxkRm9yd2FyZChcInRvdWNoZWRcIiknLFxuICAgICdbY2xhc3MubmctcHJpc3RpbmVdJzogJ19zaG91bGRGb3J3YXJkKFwicHJpc3RpbmVcIiknLFxuICAgICdbY2xhc3MubmctZGlydHldJzogJ19zaG91bGRGb3J3YXJkKFwiZGlydHlcIiknLFxuICAgICdbY2xhc3MubmctdmFsaWRdJzogJ19zaG91bGRGb3J3YXJkKFwidmFsaWRcIiknLFxuICAgICdbY2xhc3MubmctaW52YWxpZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJpbnZhbGlkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXBlbmRpbmddJzogJ19zaG91bGRGb3J3YXJkKFwicGVuZGluZ1wiKScsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIF92YWx1ZTogYW55O1xuICBfZWxlbWVudFR5cGU6ICdpbnB1dCcgfCAndGV4dGFyZWEnO1xuICBfaW5wdXRDb2xvciA9ICdwcmltYXJ5JztcbiAgY3VycmVudFZhbHVlOiBhbnk7XG4gIHByaXZhdGUgcGFsZXR0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNoYW5nZWQgPSBuZXcgQXJyYXk8KHZhbHVlOiBhbnkpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgdG91Y2hlZCA9IG5ldyBBcnJheTwoKSA9PiB2b2lkPigpO1xuICBAQ29udGVudENoaWxkKEx5RmllbGREaXJlY3RpdmUpIF9maWVsZDogTHlGaWVsZERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChMeVBsYWNlaG9sZGVyKSBseVBsYWNlaG9sZGVyOiBMeVBsYWNlaG9sZGVyO1xuICBAQ29udGVudENoaWxkKEx5RGVmYXVsdCkgbHlEZWZhdWx0OiBMeURlZmF1bHQ7XG4gIEBDb250ZW50Q2hpbGQoTHlMYWJlbCkgbHlMYWJlbDogTHlMYWJlbDtcbiAgQElucHV0KCkgdHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgQElzQm9vbGVhbigpIGxhYmVsQWJvdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRlZmF1bHQ6IHN0cmluZztcbiAgX2Vycm9yU3RhdGU6IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyQ29udGFpbmVyOiBhbnk7XG4gIGxhYmVsQ29udGFpbmVyOiBhbnk7XG4gIGZvY3VzU3RhdGVTdXNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBfY2xhc3Nlczoge1xuICAgIGNhcmV0Q29sb3I/OiBzdHJpbmcsXG4gICAgd2l0aENvbG9yPzogc3RyaW5nXG4gIH0gPSB7fTtcbiAgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgIHRoaXMudXBkYXRlQ29sb3IodmFsKTtcbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1sYWJlbC1hYm92ZScpXG4gIGdldCBpc0Zsb2F0aW5nTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlU3RhdGUgfHwgdGhpcy5sYWJlbEFib3ZlIHx8IHRoaXMuaXNEZWZhdWx0IHx8IHRoaXMuZm9jdXNTdGF0ZTtcbiAgfVxuXG4gIGdldCBwbGFjZWhvbGRlclN0YXRlKCkge1xuICAgIHJldHVybiAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiB0aGlzLmZvY3VzU3RhdGUgfHwgIXRoaXMuY3VycmVudFZhbHVlU3RhdGUgJiYgIXRoaXMuZm9jdXNTdGF0ZSAmJiB0aGlzLmlzRmxvYXRpbmdMYWJlbDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWZvY3VzLWFjdGl2ZScpIGZvY3VzU3RhdGU6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktaGlkZGVuLWlucHV0JylcbiAgZ2V0IGRlZmF1bHRPZmYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLmRlZmF1bHQgJiYgIXRoaXMuZm9jdXNTdGF0ZSB8fCAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiAhdGhpcy5mb2N1c1N0YXRlO1xuICB9XG5cbiAgQElucHV0KCkgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZmllbGQuZGlzYWJsZWQ7IH1cblxuICBASW5wdXQoKSBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9maWVsZC5yZXF1aXJlZDsgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktdmFsdWUtb24nKVxuICBnZXQgY3VycmVudFZhbHVlU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChgJHt0aGlzLmN1cnJlbnRWYWx1ZX1gKS5sZW5ndGggIT09IDAgJiYgdGhpcy5jdXJyZW50VmFsdWUgIT0gbnVsbDtcbiAgfVxuXG4gIF92YWx1ZUJvb2xlYW4odmFsKSB7XG4gICAgcmV0dXJuICEodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gZmFsc2UgfHwgdmFsID09PSAnJyk7XG4gIH1cblxuICBfaXNFcnJvclN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wuaW52YWxpZCAmJiB0aGlzLl9maWVsZC5fbmdDb250cm9sLnRvdWNoZWQgfHwgdGhpcy5fZXJyb3JTdGF0ZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVFcnJvcigpIHtcbiAgICB0aGlzLl9lcnJvclN0YXRlID0gdGhpcy5fZmllbGQuX25nQ29udHJvbC5pbnZhbGlkO1xuICB9XG5cbiAgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIGJjcjogTHlDb21tb24sXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb2xvcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2NsYXNzZXMuY2FyZXRDb2xvciA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgaW5wdXQ6Y2FyZXQke3ZhbH1gLCB0aGVtZSA9PiBgY2FyZXQtY29sb3I6JHt0aGVtZS5jb2xvck9mKHZhbCl9YFxuICAgICk7XG4gICAgdGhpcy5fY2xhc3Nlcy53aXRoQ29sb3IgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGlucHV0OiR7dmFsfWAsIHRoZW1lID0+IChcbiAgICAgICAgYGNvbG9yOiR7dGhlbWUuY29sb3JPZih2YWwpfTtgICtcbiAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGVtZS5pbnB1dC51bmRlcmxpbmV9O2BcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgdG9Cb29sZWFuKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBpc1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5wbGFjZWhvbGRlcikgfHwgISF0aGlzLmx5UGxhY2Vob2xkZXI7XG4gIH1cbiAgZ2V0IGlzRGVmYXVsdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMuZGVmYXVsdCkgfHwgISF0aGlzLmx5RGVmYXVsdDtcbiAgfVxuICBnZXQgaXNMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMubGFiZWwpIHx8ICEhdGhpcy5seUxhYmVsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy51cGRhdGVDb2xvcih0aGlzLnRoZW1lLmNvbmZpZy5pbnB1dC53aXRoQ29sb3IpO1xuICAgIH1cbiAgICAvLyB0aGlzLl9pbnB1dENvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuX2NvbG9yKTtcbiAgICB0aGlzLmZvY3VzU3RhdGVTdXNjcmlwdGlvbiA9IHRoaXMuX2ZpZWxkLmZvY3VzU3RhdGUuc3Vic2NyaWJlKChmU3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9jdXNTdGF0ZSA9IGZTdGF0ZTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5fZmllbGQuX3BhcmVudCgpKSB7XG4gICAgICB0aGlzLl9maWVsZC5fcGFyZW50KCkubmdTdWJtaXQuc3Vic2NyaWJlKChzdWJtaXQpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZTtcbiAgICAgIGlmICh0aGlzLl9maWVsZC5fbmdDb250cm9sICYmIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbDtcbiAgICAgICAgICB0aGlzLl9lcnJvclN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogcmVzZXQgZXJyb3Igb2Ygc3VibWl0IHRvIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fZmllbGQuZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGlzRm9jdXNlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0RlZmF1bHQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFZhbHVlU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUodGhpcy5kZWZhdWx0KTtcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmlld1RvTW9kZWxVcGRhdGUodGhpcy5kZWZhdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmllbGQubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTHlJbnB1dDogUmVxdWlyZSBpbnB1dCBuYXRpdmUnKTtcbiAgICB9XG4gIH1cblxuICBfc2hvdWxkRm9yd2FyZChwcm9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZmllbGQgPyB0aGlzLl9maWVsZC5fbmdDb250cm9sIDogbnVsbDtcbiAgICByZXR1cm4gY29udHJvbCAmJiAoY29udHJvbCBhcyBhbnkpW3Byb3BdO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmRlZmF1bHQpIHtcbiAgICAgIGlmICh0aGlzLmlzRGVmYXVsdCAmJiAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuZGVmYXVsdDtcbiAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzU3RhdGVTdXNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUlucHV0LCBMeUlucHV0Q29udGVudHMsIEx5RmllbGREaXJlY3RpdmUsIEx5SW5wdXRDb21tb24sIEx5RGVmYXVsdCwgTHlMYWJlbCwgTHlQbGFjZWhvbGRlcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SW5wdXQsIEx5SW5wdXRDb250ZW50cywgTHlGaWVsZERpcmVjdGl2ZSwgTHlJbnB1dENvbW1vbiwgTHlEZWZhdWx0LCBMeUxhYmVsLCBMeVBsYWNlaG9sZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Z0JBQ0MsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7aUJBQzVDOzswQkFIRDs7Ozs7OztBQ0FBO0lBd0NFLDBCQUNTLFlBQ29CLFVBQXFCLEVBQzVCLFdBQW1CLEVBQ25CLGdCQUFvQyxFQUNoRDtRQUpELGVBQVUsR0FBVixVQUFVO1FBQ1UsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBQ2hELE9BQUUsR0FBRixFQUFFO1FBMUJaLGtCQUErQixJQUFJLE9BQU8sRUFBRSxDQUFDO3lCQUV6QixLQUFLO3lCQUNMLEtBQUs7S0F3QnJCOzs7OztJQXJCNkIsZ0NBQUs7Ozs7SUFBdEMsVUFBdUMsU0FBa0I7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDakM7Ozs7O0lBQ3dDLGdDQUFLOzs7O0lBQTlDLFVBQStDLFNBQWtCO1FBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBQzhCLGdDQUFLOzs7SUFBcEMsZUFBMEM7SUFFMUMsc0JBQ0ksc0NBQVE7Ozs7UUFEWixjQUNpQixPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzs7OztRQUN0RixVQUFhLEtBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxH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