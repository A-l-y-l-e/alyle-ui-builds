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
                },] },
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
                },] },
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
                },] },
    ];
    return LyInputCommon;
}());
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
                },] },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaW5wdXQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pbnB1dC9pbnB1dC1jb250ZW50cy50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2x5LWZpZWxkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2lucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2x5LWJlZm9yZS1pbnB1dCwgbHktYWZ0ZXItaW5wdXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMeUlucHV0Q29udGVudHMge1xyXG5cclxufVxyXG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgU2VsZixcbiAgT3B0aW9uYWwsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nQ29udHJvbCwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pbnB1dCBpbnB1dCwgbHktdGV4dGFyZWEgdGV4dGFyZWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGZvY3VzU3RhdGU6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBmb2N1c2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyd0cnVlJ10pIGZvY3VzKGlzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5uZXh0KGlzRm9jdXNlZCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnZmFsc2UnXSkgcHJpdmF0ZSBfYmx1cihpc0ZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUubmV4dChpc0ZvY3VzZWQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JykgcHJpdmF0ZSBfbm9vcCgpIHsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5kaXNhYmxlZCA6IHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gISEodmFsdWUpOyB9XG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5pbnZhbGlkIDogdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmVxdWlyZWQgPSAhISh2YWx1ZSk7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBfbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcGFyZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuICB9XG4gIHByb3RlY3RlZCBfdXBkYXRlRXJyb3JTdGF0ZSgpIHtcbiAgICAvLyBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5fcGFyZW50Rm9ybTtcbiAgICAvLyBjb25zdCBtYXRjaGVyID0gdGhpcy5lcnJvclN0YXRlTWF0Y2hlciB8fCB0aGlzLl9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sIDogbnVsbDtcbiAgICAvLyBjb25zdCBuZXdTdGF0ZSA9IG1hdGNoZXIuaXNFcnJvclN0YXRlKGNvbnRyb2wsIHBhcmVudCk7XG5cbiAgICAvLyBpZiAobmV3U3RhdGUgIT09IG9sZFN0YXRlKSB7XG4gICAgLy8gICB0aGlzLmVycm9yU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAvLyAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAvLyB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W2Zsb2F0TGFiZWw6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICAvLyBpZiAoIWNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10pKVxuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgTmdNb2R1bGUsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgQ29udGVudENoaWxkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWUyLCBJc0Jvb2xlYW4sIHRvQm9vbGVhbiwgTHlDb21tb24gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJbnB1dENvbnRlbnRzIH0gZnJvbSAnLi9pbnB1dC1jb250ZW50cyc7XG5pbXBvcnQgeyBMeUZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9seS1maWVsZC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0LCBseS1iZWZvcmUsIGx5LWFmdGVyLCBseS1pbnB1dCBseS1lcnJvciwgbHktaW5wdXQgbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dENvbW1vbiB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1wbGFjZWhvbGRlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlQbGFjZWhvbGRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0J1xufSlcbmV4cG9ydCBjbGFzcyBMeURlZmF1bHQge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktbGFiZWwnXG59KVxuZXhwb3J0IGNsYXNzIEx5TGFiZWwge31cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10ZXh0LWZpZWxkLCBseS1pbnB1dCwgbHktdGV4dGFyZWEnLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0IC9kZWVwLyBseS1hZnRlciw6aG9zdCAvZGVlcC8gbHktYmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOmluaGVyaXR9Omhvc3QgL2RlZXAvIGlucHV0LDpob3N0IC9kZWVwLyB0ZXh0YXJlYXtib3JkZXI6bm9uZTtvdXRsaW5lOjA7Zm9udC1mYW1pbHk6aW5oZXJpdDtjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6MCAwO2ZvbnQtc2l6ZTppbmhlcml0O3dpZHRoOjEwMCU7Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0Lmx5LWRlZmF1bHQtb2ZmIC5seS1pbnB1dC1kZWZhdWx0LDpob3N0Lmx5LWhpZGRlbi1pbnB1dCAvZGVlcC8gLmx5LWlucHV0LWNvbnRhaW5lciBpbnB1dCw6aG9zdC5seS1oaWRkZW4taW5wdXQgL2RlZXAvIC5seS1pbnB1dC1jb250YWluZXIgdGV4dGFyZWF7b3BhY2l0eTowfTpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAubHktaW5wdXQtdW5kZXJsaW5lOmFmdGVye3dpZHRoOjEwMCV9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC10b3AtbGFiZWwsOmhvc3QubHktZm9jdXMtYWN0aXZlIC9kZWVwLyBseS10b3AtbGFiZWx7Zm9udC1zaXplOjc1JTt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC1kZWZhdWx0e29wYWNpdHk6MH06aG9zdC5seS12YWx1ZS1vbiAubHktaW5wdXQtcGxhY2Vob2xkZXJ7b3BhY2l0eTowfS5seS1pbnB1dC11bmRlcmxpbmV7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi44NzVlbTtoZWlnaHQ6MXB4O3JpZ2h0OjA7bGVmdDowfS5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDowJTtoZWlnaHQ6MnB4O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO2xlZnQ6MDtyaWdodDowO21hcmdpbjowIGF1dG87Ym90dG9tOjA7dHJhbnNpdGlvbjo0NTBtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpfS5seS1pbnB1dC11bmRlcmxpbmUubHktZGlzYWJsZWR7YmFja2dyb3VuZDowLzRweCAxcHggcmVwZWF0LXg7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2I0YjRiNCAwLCNiNGI0YjQgMzMlLHRyYW5zcGFyZW50IDApO2JvcmRlci10b3A6MH0ubHktaW5wdXQtdW5kZXJsaW5lLmx5LWRpc2FibGVkOmFmdGVye3dpZHRoOjAlfTpob3N0Lmx5LWxhYmVsLWFib3ZlIC5seS1pbnB1dC1mbG9hdC1sYWJlbHtmb250LXNpemU6NzUlO3RvcDowfS5seS1pbnB1dC1kZWZhdWx0LC5seS1pbnB1dC1mbG9hdC1sYWJlbCwubHktaW5wdXQtcGxhY2Vob2xkZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MS4xMjVlbTt0b3A6MS4xMjVlbTttYXJnaW46YXV0bztmb250LXNpemU6MTAwJTt0cmFuc2l0aW9uOjM3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSk7Y29sb3I6aW5oZXJpdDt3aWR0aDoxMDAlfS5seS1pbnB1dC1jb250ZW50e3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2NvbG9yOmN1cnJlbnRDb2xvcn0ubHktaW5wdXQtY29udGFpbmVye3BhZGRpbmc6MS4xMjVlbSAwO3Bvc2l0aW9uOnJlbGF0aXZlO29wYWNpdHk6MTtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjppbmhlcml0O3dpZHRoOjEwMCV9Lmx5LWlucHV0LWNvbnRhaW5lciA6Om5nLWRlZXAgaW5wdXR7dGV4dC1hbGlnbjppbmhlcml0fS5ib3R0b20tZmllbGQsLmx5LWVycm9yLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO2ZvbnQtc2l6ZTo3NSU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKDEwMCUgLSAxLjFlbSksMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYygxMDAlIC0gMS4xZW0pLDApO2Rpc3BsYXk6ZmxleH0uYm90dG9tLWZpZWxkIC5ib3R0b20tZmllbGQtc3BhY2UsLmx5LWVycm9yLWNvbnRhaW5lciAuYm90dG9tLWZpZWxkLXNwYWNle2ZsZXg6MX0ubHktcmVxdWlyZWR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEuMTI1ZW07cmlnaHQ6MDtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6LjQ1fTpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LWZsb2F0LWxhYmVsLDpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXBsYWNlaG9sZGVyLDpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXVuZGVybGluZSw6aG9zdC5seS1pbnB1dC1pbnZhbGlkIC9kZWVwLyBseS1lcnJvcntjb2xvcjojZjQ0MzM2IWltcG9ydGFudH06aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7d2lkdGg6MTAwJX1gXSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJseS1iZWZvcmVcIj48L25nLWNvbnRlbnQ+XHJcbjxkaXYgY2xhc3M9XCJ7eyBfY2xhc3Nlcy53aXRoQ29sb3IgfX0gbHktaW5wdXQtdW5kZXJsaW5lXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJseS1pbnB1dC1jb250YWluZXIge3sgX2NsYXNzZXMuY2FyZXRDb2xvciB9fVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImlucHV0LCB0ZXh0YXJlYVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGx5LXBsYWNlaG9sZGVyIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJwbGFjZWhvbGRlcjsgdGhlbiBpc1BsYWNlaG9sZGVyVGVtcGxhdGU7IGVsc2UgcGxhY2Vob2xkZXJDb250YWluZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI2lzUGxhY2Vob2xkZXJUZW1wbGF0ZT5cclxuICAgIDxkaXYgKm5nSWY9XCJ0b0Jvb2xlYW4ocGxhY2Vob2xkZXIpICE9PSB1bmRlZmluZWQgJiYgcGxhY2Vob2xkZXJTdGF0ZVwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LXBsYWNlaG9sZGVyXCI+e3sgcGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSAjcGxhY2Vob2xkZXJDb250YWluZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkICYmIHBsYWNlaG9sZGVyU3RhdGVcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1wbGFjZWhvbGRlclwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1wbGFjZWhvbGRlclwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPCEtLSBseS1kZWZhdWx0IC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b0Jvb2xlYW4oZGVmYXVsdCk7IHRoZW4gaXNEZWZhdWx0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI2lzRGVmYXVsdFRlbXBsYXRlPlxyXG4gICAgPGRpdiAqbmdJZj1cIiEobHlEZWZhdWx0ICE9PSB1bmRlZmluZWQpICYmIGRlZmF1bHRPZmZcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1kZWZhdWx0XCI+RGVmYXVsdDoge3sgZGVmYXVsdCB9fTwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImx5RGVmYXVsdCAhPT0gdW5kZWZpbmVkICYmIGRlZmF1bHRPZmZcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1kZWZhdWx0XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWRlZmF1bHRcIj48L25nLWNvbnRlbnQ+e3sgZGVmYXVsdCB9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8IS0tIGx5LWxhYmVsIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b0Jvb2xlYW4obGFiZWwpOyB0aGVuIF9pc0xhYmVsVGVtcGxhdGU7IGVsc2UgbGFiZWxDb250YWluZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI19pc0xhYmVsVGVtcGxhdGU+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibGFiZWwgIT09IHVuZGVmaW5lZFwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWZsb2F0LWxhYmVsXCI+e3sgbGFiZWwgfX08L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSAjbGFiZWxDb250YWluZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlMYWJlbFwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWZsb2F0LWxhYmVsXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWxhYmVsXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJseS1pY29uLXJlcXVpcmVkXCIgKm5nSWY9XCJyZXF1aXJlZFwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYm90dG9tLWZpZWxkXCIgKm5nSWY9XCIhX2lzRXJyb3JTdGF0ZSgpXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktaGludFthbGlnbj1zdGFydF0sIGx5LWhpbnQ6bm90KGx5LWhpbnRbYWxpZ25dKVwiPjwvbmctY29udGVudD5cclxuICA8c3BhbiBjbGFzcz1cImJvdHRvbS1maWVsZC1zcGFjZVwiPjwvc3Bhbj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1oaW50W2FsaWduPWVuZF1cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYm90dG9tLWZpZWxkXCIgKm5nSWY9XCJfaXNFcnJvclN0YXRlKClcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1lcnJvclwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cImx5LWFmdGVyXCI+PC9uZy1jb250ZW50PlxyXG5gLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmx5LWlucHV0LWludmFsaWRdJzogJ19pc0Vycm9yU3RhdGUoKScsXG4gICAgJ1tjbGFzcy5uZy11bnRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidW50b3VjaGVkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidG91Y2hlZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1wcmlzdGluZV0nOiAnX3Nob3VsZEZvcndhcmQoXCJwcmlzdGluZVwiKScsXG4gICAgJ1tjbGFzcy5uZy1kaXJ0eV0nOiAnX3Nob3VsZEZvcndhcmQoXCJkaXJ0eVwiKScsXG4gICAgJ1tjbGFzcy5uZy12YWxpZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ2YWxpZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1pbnZhbGlkXSc6ICdfc2hvdWxkRm9yd2FyZChcImludmFsaWRcIiknLFxuICAgICdbY2xhc3MubmctcGVuZGluZ10nOiAnX3Nob3VsZEZvcndhcmQoXCJwZW5kaW5nXCIpJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgX3ZhbHVlOiBhbnk7XG4gIF9lbGVtZW50VHlwZTogJ2lucHV0JyB8ICd0ZXh0YXJlYSc7XG4gIF9pbnB1dENvbG9yID0gJ3ByaW1hcnknO1xuICBjdXJyZW50VmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBwYWxldHRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY2hhbmdlZCA9IG5ldyBBcnJheTwodmFsdWU6IGFueSkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSB0b3VjaGVkID0gbmV3IEFycmF5PCgpID0+IHZvaWQ+KCk7XG4gIEBDb250ZW50Q2hpbGQoTHlGaWVsZERpcmVjdGl2ZSkgX2ZpZWxkOiBMeUZpZWxkRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKEx5UGxhY2Vob2xkZXIpIGx5UGxhY2Vob2xkZXI6IEx5UGxhY2Vob2xkZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlEZWZhdWx0KSBseURlZmF1bHQ6IEx5RGVmYXVsdDtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsKSBseUxhYmVsOiBMeUxhYmVsO1xuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBASXNCb29sZWFuKCkgbGFiZWxBYm92ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGVmYXVsdDogc3RyaW5nO1xuICBfZXJyb3JTdGF0ZTogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXJDb250YWluZXI6IGFueTtcbiAgbGFiZWxDb250YWluZXI6IGFueTtcbiAgZm9jdXNTdGF0ZVN1c2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIF9jbGFzc2VzOiB7XG4gICAgY2FyZXRDb2xvcj86IHN0cmluZyxcbiAgICB3aXRoQ29sb3I/OiBzdHJpbmdcbiAgfSA9IHt9O1xuICBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVDb2xvcih2YWwpO1xuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWxhYmVsLWFib3ZlJylcbiAgZ2V0IGlzRmxvYXRpbmdMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSB8fCB0aGlzLmxhYmVsQWJvdmUgfHwgdGhpcy5pc0RlZmF1bHQgfHwgdGhpcy5mb2N1c1N0YXRlO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyU3RhdGUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmIHRoaXMuZm9jdXNTdGF0ZSB8fCAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiAhdGhpcy5mb2N1c1N0YXRlICYmIHRoaXMuaXNGbG9hdGluZ0xhYmVsO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktZm9jdXMtYWN0aXZlJykgZm9jdXNTdGF0ZTogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1oaWRkZW4taW5wdXQnKVxuICBnZXQgZGVmYXVsdE9mZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWUgPT09IHRoaXMuZGVmYXVsdCAmJiAhdGhpcy5mb2N1c1N0YXRlIHx8ICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmICF0aGlzLmZvY3VzU3RhdGU7XG4gIH1cblxuICBASW5wdXQoKSBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9maWVsZC5kaXNhYmxlZDsgfVxuXG4gIEBJbnB1dCgpIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2ZpZWxkLnJlcXVpcmVkOyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS12YWx1ZS1vbicpXG4gIGdldCBjdXJyZW50VmFsdWVTdGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKGAke3RoaXMuY3VycmVudFZhbHVlfWApLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmN1cnJlbnRWYWx1ZSAhPSBudWxsO1xuICB9XG5cbiAgX3ZhbHVlQm9vbGVhbih2YWwpIHtcbiAgICByZXR1cm4gISh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBmYWxzZSB8fCB2YWwgPT09ICcnKTtcbiAgfVxuXG4gIF9pc0Vycm9yU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmllbGQuX25nQ29udHJvbC5pbnZhbGlkICYmIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudG91Y2hlZCB8fCB0aGlzLl9lcnJvclN0YXRlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHVwZGF0ZUVycm9yKCkge1xuICAgIHRoaXMuX2Vycm9yU3RhdGUgPSB0aGlzLl9maWVsZC5fbmdDb250cm9sLmludmFsaWQ7XG4gIH1cblxuICB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgYmNyOiBMeUNvbW1vbixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xhc3Nlcy5jYXJldENvbG9yID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBpbnB1dDpjYXJldCR7dmFsfWAsIHRoZW1lID0+IGBjYXJldC1jb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX1gXG4gICAgKTtcbiAgICB0aGlzLl9jbGFzc2VzLndpdGhDb2xvciA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgaW5wdXQ6JHt2YWx9YCwgdGhlbWUgPT4gKFxuICAgICAgICBgY29sb3I6JHt0aGVtZS5jb2xvck9mKHZhbCl9O2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLmlucHV0LnVuZGVybGluZX07YFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICB0b0Jvb2xlYW4odmFsOiBhbnkpIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGlzUGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLnBsYWNlaG9sZGVyKSB8fCAhIXRoaXMubHlQbGFjZWhvbGRlcjtcbiAgfVxuICBnZXQgaXNEZWZhdWx0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5kZWZhdWx0KSB8fCAhIXRoaXMubHlEZWZhdWx0O1xuICB9XG4gIGdldCBpc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5sYWJlbCkgfHwgISF0aGlzLmx5TGFiZWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yKHRoaXMudGhlbWUuY29uZmlnLmlucHV0LndpdGhDb2xvcik7XG4gICAgfVxuICAgIC8vIHRoaXMuX2lucHV0Q29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5fY29sb3IpO1xuICAgIHRoaXMuZm9jdXNTdGF0ZVN1c2NyaXB0aW9uID0gdGhpcy5fZmllbGQuZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGZTdGF0ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb2N1c1N0YXRlID0gZlN0YXRlO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLl9maWVsZC5fcGFyZW50KCkpIHtcbiAgICAgIHRoaXMuX2ZpZWxkLl9wYXJlbnQoKS5uZ1N1Ym1pdC5zdWJzY3JpYmUoKHN1Ym1pdCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlO1xuICAgICAgaWYgKHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wgJiYgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsO1xuICAgICAgICAgIHRoaXMuX2Vycm9yU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiByZXNldCBlcnJvciBvZiBzdWJtaXQgdG8gZmFsc2VcbiAgICAgICAgICAgKi9cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9maWVsZC5mb2N1c1N0YXRlLnN1YnNjcmliZSgoaXNGb2N1c2VkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVmYXVsdCkge1xuICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmRlZmF1bHQ7XG4gICAgICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWVsZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdMeUlucHV0OiBSZXF1aXJlIGlucHV0IG5hdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG91bGRGb3J3YXJkKHByb3A6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9maWVsZCA/IHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wgOiBudWxsO1xuICAgIHJldHVybiBjb250cm9sICYmIChjb250cm9sIGFzIGFueSlbcHJvcF07XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZGVmYXVsdCkge1xuICAgICAgaWYgKHRoaXMuaXNEZWZhdWx0ICYmICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZpZXdUb01vZGVsVXBkYXRlKHRoaXMuZGVmYXVsdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZVN1c2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SW5wdXQsIEx5SW5wdXRDb250ZW50cywgTHlGaWVsZERpcmVjdGl2ZSwgTHlJbnB1dENvbW1vbiwgTHlEZWZhdWx0LCBMeUxhYmVsLCBMeVBsYWNlaG9sZGVyXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlJbnB1dCwgTHlJbnB1dENvbnRlbnRzLCBMeUZpZWxkRGlyZWN0aXZlLCBMeUlucHV0Q29tbW9uLCBMeURlZmF1bHQsIEx5TGFiZWwsIEx5UGxhY2Vob2xkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0TW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztnQkFDQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztpQkFDNUM7OzBCQUhEOzs7Ozs7O0FDQUE7SUF3Q0UsMEJBQ1MsWUFDb0IsVUFBcUIsRUFDNUIsV0FBbUIsRUFDbkIsZ0JBQW9DLEVBQ2hEO1FBSkQsZUFBVSxHQUFWLFVBQVU7UUFDVSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFDaEQsT0FBRSxHQUFGLEVBQUU7MEJBMUJtQixJQUFJLE9BQU8sRUFBRTt5QkFFeEIsS0FBSzt5QkFDTCxLQUFLO0tBd0JyQjs7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