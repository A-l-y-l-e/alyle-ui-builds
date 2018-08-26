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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaW5wdXQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pbnB1dC9pbnB1dC1jb250ZW50cy50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2x5LWZpZWxkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2lucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2x5LWJlZm9yZS1pbnB1dCwgbHktYWZ0ZXItaW5wdXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMeUlucHV0Q29udGVudHMge1xyXG5cclxufVxyXG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgU2VsZixcbiAgT3B0aW9uYWwsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nQ29udHJvbCwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pbnB1dCBpbnB1dCwgbHktdGV4dGFyZWEgdGV4dGFyZWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGZvY3VzU3RhdGU6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBmb2N1c2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyd0cnVlJ10pIGZvY3VzKGlzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5uZXh0KGlzRm9jdXNlZCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnZmFsc2UnXSkgcHJpdmF0ZSBfYmx1cihpc0ZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUubmV4dChpc0ZvY3VzZWQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JykgcHJpdmF0ZSBfbm9vcCgpIHsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5kaXNhYmxlZCA6IHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gISEodmFsdWUpOyB9XG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5pbnZhbGlkIDogdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmVxdWlyZWQgPSAhISh2YWx1ZSk7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBfbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcGFyZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuICB9XG4gIHByb3RlY3RlZCBfdXBkYXRlRXJyb3JTdGF0ZSgpIHtcbiAgICAvLyBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5fcGFyZW50Rm9ybTtcbiAgICAvLyBjb25zdCBtYXRjaGVyID0gdGhpcy5lcnJvclN0YXRlTWF0Y2hlciB8fCB0aGlzLl9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sIDogbnVsbDtcbiAgICAvLyBjb25zdCBuZXdTdGF0ZSA9IG1hdGNoZXIuaXNFcnJvclN0YXRlKGNvbnRyb2wsIHBhcmVudCk7XG5cbiAgICAvLyBpZiAobmV3U3RhdGUgIT09IG9sZFN0YXRlKSB7XG4gICAgLy8gICB0aGlzLmVycm9yU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAvLyAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAvLyB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W2Zsb2F0TGFiZWw6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICAvLyBpZiAoIWNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10pKVxuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgTmdNb2R1bGUsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgQ29udGVudENoaWxkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWUyLCBJc0Jvb2xlYW4sIHRvQm9vbGVhbiwgTHlDb21tb24gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJbnB1dENvbnRlbnRzIH0gZnJvbSAnLi9pbnB1dC1jb250ZW50cyc7XG5pbXBvcnQgeyBMeUZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9seS1maWVsZC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0LCBseS1iZWZvcmUsIGx5LWFmdGVyLCBseS1pbnB1dCBseS1lcnJvciwgbHktaW5wdXQgbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dENvbW1vbiB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1wbGFjZWhvbGRlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlQbGFjZWhvbGRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0J1xufSlcbmV4cG9ydCBjbGFzcyBMeURlZmF1bHQge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktbGFiZWwnXG59KVxuZXhwb3J0IGNsYXNzIEx5TGFiZWwge31cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10ZXh0LWZpZWxkLCBseS1pbnB1dCwgbHktdGV4dGFyZWEnLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0IC9kZWVwLyBseS1hZnRlciw6aG9zdCAvZGVlcC8gbHktYmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOmluaGVyaXR9Omhvc3QgL2RlZXAvIGlucHV0LDpob3N0IC9kZWVwLyB0ZXh0YXJlYXtib3JkZXI6bm9uZTtvdXRsaW5lOjA7Zm9udC1mYW1pbHk6aW5oZXJpdDtjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6MCAwO2ZvbnQtc2l6ZTppbmhlcml0O3dpZHRoOjEwMCU7Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0Lmx5LWRlZmF1bHQtb2ZmIC5seS1pbnB1dC1kZWZhdWx0LDpob3N0Lmx5LWhpZGRlbi1pbnB1dCAvZGVlcC8gLmx5LWlucHV0LWNvbnRhaW5lciBpbnB1dCw6aG9zdC5seS1oaWRkZW4taW5wdXQgL2RlZXAvIC5seS1pbnB1dC1jb250YWluZXIgdGV4dGFyZWF7b3BhY2l0eTowfTpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAubHktaW5wdXQtdW5kZXJsaW5lOmFmdGVye3dpZHRoOjEwMCV9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC10b3AtbGFiZWwsOmhvc3QubHktZm9jdXMtYWN0aXZlIC9kZWVwLyBseS10b3AtbGFiZWx7Zm9udC1zaXplOjc1JTt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC1kZWZhdWx0e29wYWNpdHk6MH06aG9zdC5seS12YWx1ZS1vbiAubHktaW5wdXQtcGxhY2Vob2xkZXJ7b3BhY2l0eTowfS5seS1pbnB1dC11bmRlcmxpbmV7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi44NzVlbTtoZWlnaHQ6MXB4O3JpZ2h0OjA7bGVmdDowfS5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDowJTtoZWlnaHQ6MnB4O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO2xlZnQ6MDtyaWdodDowO21hcmdpbjowIGF1dG87Ym90dG9tOjA7dHJhbnNpdGlvbjo0NTBtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpfS5seS1pbnB1dC11bmRlcmxpbmUubHktZGlzYWJsZWR7YmFja2dyb3VuZDowLzRweCAxcHggcmVwZWF0LXg7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2I0YjRiNCAwLCNiNGI0YjQgMzMlLHRyYW5zcGFyZW50IDApO2JvcmRlci10b3A6MH0ubHktaW5wdXQtdW5kZXJsaW5lLmx5LWRpc2FibGVkOmFmdGVye3dpZHRoOjAlfTpob3N0Lmx5LWxhYmVsLWFib3ZlIC5seS1pbnB1dC1mbG9hdC1sYWJlbHtmb250LXNpemU6NzUlO3RvcDowfS5seS1pbnB1dC1kZWZhdWx0LC5seS1pbnB1dC1mbG9hdC1sYWJlbCwubHktaW5wdXQtcGxhY2Vob2xkZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MS4xMjVlbTt0b3A6MS4xMjVlbTttYXJnaW46YXV0bztmb250LXNpemU6MTAwJTt0cmFuc2l0aW9uOjM3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSk7Y29sb3I6aW5oZXJpdDt3aWR0aDoxMDAlfS5seS1pbnB1dC1jb250ZW50e3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2NvbG9yOmN1cnJlbnRDb2xvcn0ubHktaW5wdXQtY29udGFpbmVye3BhZGRpbmc6MS4xMjVlbSAwO3Bvc2l0aW9uOnJlbGF0aXZlO29wYWNpdHk6MTtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjppbmhlcml0O3dpZHRoOjEwMCV9Lmx5LWlucHV0LWNvbnRhaW5lciA6Om5nLWRlZXAgaW5wdXR7dGV4dC1hbGlnbjppbmhlcml0fS5ib3R0b20tZmllbGQsLmx5LWVycm9yLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO2ZvbnQtc2l6ZTo3NSU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKDEwMCUgLSAxLjFlbSksMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYygxMDAlIC0gMS4xZW0pLDApO2Rpc3BsYXk6ZmxleH0uYm90dG9tLWZpZWxkIC5ib3R0b20tZmllbGQtc3BhY2UsLmx5LWVycm9yLWNvbnRhaW5lciAuYm90dG9tLWZpZWxkLXNwYWNle2ZsZXg6MX0ubHktcmVxdWlyZWR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEuMTI1ZW07cmlnaHQ6MDtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6LjQ1fTpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LWZsb2F0LWxhYmVsLDpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXBsYWNlaG9sZGVyLDpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXVuZGVybGluZSw6aG9zdC5seS1pbnB1dC1pbnZhbGlkIC9kZWVwLyBseS1lcnJvcntjb2xvcjojZjQ0MzM2IWltcG9ydGFudH06aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7d2lkdGg6MTAwJX1gXSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJseS1iZWZvcmVcIj48L25nLWNvbnRlbnQ+XHJcbjxkaXYgY2xhc3M9XCJ7eyBfY2xhc3Nlcy53aXRoQ29sb3IgfX0gbHktaW5wdXQtdW5kZXJsaW5lXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJseS1pbnB1dC1jb250YWluZXIge3sgX2NsYXNzZXMuY2FyZXRDb2xvciB9fVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImlucHV0LCB0ZXh0YXJlYVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGx5LXBsYWNlaG9sZGVyIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJwbGFjZWhvbGRlcjsgdGhlbiBpc1BsYWNlaG9sZGVyVGVtcGxhdGU7IGVsc2UgcGxhY2Vob2xkZXJDb250YWluZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI2lzUGxhY2Vob2xkZXJUZW1wbGF0ZT5cclxuICAgIDxkaXYgKm5nSWY9XCJ0b0Jvb2xlYW4ocGxhY2Vob2xkZXIpICE9PSB1bmRlZmluZWQgJiYgcGxhY2Vob2xkZXJTdGF0ZVwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LXBsYWNlaG9sZGVyXCI+e3sgcGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSAjcGxhY2Vob2xkZXJDb250YWluZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkICYmIHBsYWNlaG9sZGVyU3RhdGVcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1wbGFjZWhvbGRlclwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1wbGFjZWhvbGRlclwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPCEtLSBseS1kZWZhdWx0IC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b0Jvb2xlYW4oZGVmYXVsdCk7IHRoZW4gaXNEZWZhdWx0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI2lzRGVmYXVsdFRlbXBsYXRlPlxyXG4gICAgPGRpdiAqbmdJZj1cIiEobHlEZWZhdWx0ICE9PSB1bmRlZmluZWQpICYmIGRlZmF1bHRPZmZcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1kZWZhdWx0XCI+RGVmYXVsdDoge3sgZGVmYXVsdCB9fTwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImx5RGVmYXVsdCAhPT0gdW5kZWZpbmVkICYmIGRlZmF1bHRPZmZcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1kZWZhdWx0XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWRlZmF1bHRcIj48L25nLWNvbnRlbnQ+e3sgZGVmYXVsdCB9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8IS0tIGx5LWxhYmVsIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b0Jvb2xlYW4obGFiZWwpOyB0aGVuIF9pc0xhYmVsVGVtcGxhdGU7IGVsc2UgbGFiZWxDb250YWluZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI19pc0xhYmVsVGVtcGxhdGU+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibGFiZWwgIT09IHVuZGVmaW5lZFwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWZsb2F0LWxhYmVsXCI+e3sgbGFiZWwgfX08L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSAjbGFiZWxDb250YWluZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlMYWJlbFwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWZsb2F0LWxhYmVsXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWxhYmVsXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJseS1pY29uLXJlcXVpcmVkXCIgKm5nSWY9XCJyZXF1aXJlZFwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYm90dG9tLWZpZWxkXCIgKm5nSWY9XCIhX2lzRXJyb3JTdGF0ZSgpXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktaGludFthbGlnbj1zdGFydF0sIGx5LWhpbnQ6bm90KGx5LWhpbnRbYWxpZ25dKVwiPjwvbmctY29udGVudD5cclxuICA8c3BhbiBjbGFzcz1cImJvdHRvbS1maWVsZC1zcGFjZVwiPjwvc3Bhbj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1oaW50W2FsaWduPWVuZF1cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYm90dG9tLWZpZWxkXCIgKm5nSWY9XCJfaXNFcnJvclN0YXRlKClcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1lcnJvclwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cImx5LWFmdGVyXCI+PC9uZy1jb250ZW50PlxyXG5gLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmx5LWlucHV0LWludmFsaWRdJzogJ19pc0Vycm9yU3RhdGUoKScsXG4gICAgJ1tjbGFzcy5uZy11bnRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidW50b3VjaGVkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidG91Y2hlZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1wcmlzdGluZV0nOiAnX3Nob3VsZEZvcndhcmQoXCJwcmlzdGluZVwiKScsXG4gICAgJ1tjbGFzcy5uZy1kaXJ0eV0nOiAnX3Nob3VsZEZvcndhcmQoXCJkaXJ0eVwiKScsXG4gICAgJ1tjbGFzcy5uZy12YWxpZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ2YWxpZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1pbnZhbGlkXSc6ICdfc2hvdWxkRm9yd2FyZChcImludmFsaWRcIiknLFxuICAgICdbY2xhc3MubmctcGVuZGluZ10nOiAnX3Nob3VsZEZvcndhcmQoXCJwZW5kaW5nXCIpJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgX3ZhbHVlOiBhbnk7XG4gIF9lbGVtZW50VHlwZTogJ2lucHV0JyB8ICd0ZXh0YXJlYSc7XG4gIF9pbnB1dENvbG9yID0gJ3ByaW1hcnknO1xuICBjdXJyZW50VmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBwYWxldHRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY2hhbmdlZCA9IG5ldyBBcnJheTwodmFsdWU6IGFueSkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSB0b3VjaGVkID0gbmV3IEFycmF5PCgpID0+IHZvaWQ+KCk7XG4gIEBDb250ZW50Q2hpbGQoTHlGaWVsZERpcmVjdGl2ZSkgX2ZpZWxkOiBMeUZpZWxkRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKEx5UGxhY2Vob2xkZXIpIGx5UGxhY2Vob2xkZXI6IEx5UGxhY2Vob2xkZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlEZWZhdWx0KSBseURlZmF1bHQ6IEx5RGVmYXVsdDtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsKSBseUxhYmVsOiBMeUxhYmVsO1xuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBASXNCb29sZWFuKCkgbGFiZWxBYm92ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGVmYXVsdDogc3RyaW5nO1xuICBfZXJyb3JTdGF0ZTogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXJDb250YWluZXI6IGFueTtcbiAgbGFiZWxDb250YWluZXI6IGFueTtcbiAgZm9jdXNTdGF0ZVN1c2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIF9jbGFzc2VzOiB7XG4gICAgY2FyZXRDb2xvcj86IHN0cmluZyxcbiAgICB3aXRoQ29sb3I/OiBzdHJpbmdcbiAgfSA9IHt9O1xuICBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVDb2xvcih2YWwpO1xuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWxhYmVsLWFib3ZlJylcbiAgZ2V0IGlzRmxvYXRpbmdMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSB8fCB0aGlzLmxhYmVsQWJvdmUgfHwgdGhpcy5pc0RlZmF1bHQgfHwgdGhpcy5mb2N1c1N0YXRlO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyU3RhdGUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmIHRoaXMuZm9jdXNTdGF0ZSB8fCAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiAhdGhpcy5mb2N1c1N0YXRlICYmIHRoaXMuaXNGbG9hdGluZ0xhYmVsO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktZm9jdXMtYWN0aXZlJykgZm9jdXNTdGF0ZTogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1oaWRkZW4taW5wdXQnKVxuICBnZXQgZGVmYXVsdE9mZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWUgPT09IHRoaXMuZGVmYXVsdCAmJiAhdGhpcy5mb2N1c1N0YXRlIHx8ICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmICF0aGlzLmZvY3VzU3RhdGU7XG4gIH1cblxuICBASW5wdXQoKSBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9maWVsZC5kaXNhYmxlZDsgfVxuXG4gIEBJbnB1dCgpIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2ZpZWxkLnJlcXVpcmVkOyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS12YWx1ZS1vbicpXG4gIGdldCBjdXJyZW50VmFsdWVTdGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKGAke3RoaXMuY3VycmVudFZhbHVlfWApLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmN1cnJlbnRWYWx1ZSAhPSBudWxsO1xuICB9XG5cbiAgX3ZhbHVlQm9vbGVhbih2YWwpIHtcbiAgICByZXR1cm4gISh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBmYWxzZSB8fCB2YWwgPT09ICcnKTtcbiAgfVxuXG4gIF9pc0Vycm9yU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmllbGQuX25nQ29udHJvbC5pbnZhbGlkICYmIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudG91Y2hlZCB8fCB0aGlzLl9lcnJvclN0YXRlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHVwZGF0ZUVycm9yKCkge1xuICAgIHRoaXMuX2Vycm9yU3RhdGUgPSB0aGlzLl9maWVsZC5fbmdDb250cm9sLmludmFsaWQ7XG4gIH1cblxuICB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgYmNyOiBMeUNvbW1vbixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5wdXRDb2xvciA9ICgpID0+IHRoaXMudGhlbWUuY29sb3JPZih2YWwpO1xuICAgIHRoaXMuX2NsYXNzZXMuY2FyZXRDb2xvciA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAgIGBpbnB1dDpjYXJldCR7dmFsfWAsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgY2FyZXQtY29sb3I6JHtpbnB1dENvbG9yKCl9YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLl9jbGFzc2VzLndpdGhDb2xvciA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAgIGBpbnB1dDoke3ZhbH1gLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGNvbG9yOiR7aW5wdXRDb2xvcigpfTtgICtcbiAgICAgICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLmlucHV0LnVuZGVybGluZX07YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHRvQm9vbGVhbih2YWw6IGFueSkge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaXNQbGFjZWhvbGRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMucGxhY2Vob2xkZXIpIHx8ICEhdGhpcy5seVBsYWNlaG9sZGVyO1xuICB9XG4gIGdldCBpc0RlZmF1bHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLmRlZmF1bHQpIHx8ICEhdGhpcy5seURlZmF1bHQ7XG4gIH1cbiAgZ2V0IGlzTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLmxhYmVsKSB8fCAhIXRoaXMubHlMYWJlbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sb3IodGhpcy50aGVtZS5jb25maWcuaW5wdXQud2l0aENvbG9yKTtcbiAgICB9XG4gICAgLy8gdGhpcy5faW5wdXRDb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLl9jb2xvcik7XG4gICAgdGhpcy5mb2N1c1N0YXRlU3VzY3JpcHRpb24gPSB0aGlzLl9maWVsZC5mb2N1c1N0YXRlLnN1YnNjcmliZSgoZlN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzU3RhdGUgPSBmU3RhdGU7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX2ZpZWxkLl9wYXJlbnQoKSkge1xuICAgICAgdGhpcy5fZmllbGQuX3BhcmVudCgpLm5nU3VibWl0LnN1YnNjcmliZSgoc3VibWl0KSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlRXJyb3IoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWU7XG4gICAgICBpZiAodGhpcy5fZmllbGQuX25nQ29udHJvbCAmJiB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB2YWw7XG4gICAgICAgICAgdGhpcy5fZXJyb3JTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIHJlc2V0IGVycm9yIG9mIHN1Ym1pdCB0byBmYWxzZVxuICAgICAgICAgICAqL1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZpZWxkLmZvY3VzU3RhdGUuc3Vic2NyaWJlKChpc0ZvY3VzZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWZhdWx0KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuZGVmYXVsdDtcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKHRoaXMuZGVmYXVsdCk7XG4gICAgICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZpZXdUb01vZGVsVXBkYXRlKHRoaXMuZGVmYXVsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ZpZWxkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0x5SW5wdXQ6IFJlcXVpcmUgaW5wdXQgbmF0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgX3Nob3VsZEZvcndhcmQocHJvcDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX2ZpZWxkID8gdGhpcy5fZmllbGQuX25nQ29udHJvbCA6IG51bGw7XG4gICAgcmV0dXJuIGNvbnRyb2wgJiYgKGNvbnRyb2wgYXMgYW55KVtwcm9wXTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5kZWZhdWx0KSB7XG4gICAgICBpZiAodGhpcy5pc0RlZmF1bHQgJiYgIXRoaXMuY3VycmVudFZhbHVlU3RhdGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmRlZmF1bHQ7XG4gICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmlld1RvTW9kZWxVcGRhdGUodGhpcy5kZWZhdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5mb2N1c1N0YXRlU3VzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlJbnB1dCwgTHlJbnB1dENvbnRlbnRzLCBMeUZpZWxkRGlyZWN0aXZlLCBMeUlucHV0Q29tbW9uLCBMeURlZmF1bHQsIEx5TGFiZWwsIEx5UGxhY2Vob2xkZXJdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUlucHV0LCBMeUlucHV0Q29udGVudHMsIEx5RmllbGREaXJlY3RpdmUsIEx5SW5wdXRDb21tb24sIEx5RGVmYXVsdCwgTHlMYWJlbCwgTHlQbGFjZWhvbGRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXRNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O2dCQUNDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2lCQUM1Qzs7MEJBSEQ7Ozs7Ozs7QUNBQTtJQXdDRSwwQkFDUyxZQUNvQixVQUFxQixFQUM1QixXQUFtQixFQUNuQixnQkFBb0MsRUFDaEQ7UUFKRCxlQUFVLEdBQVYsVUFBVTtRQUNVLGVBQVUsR0FBVixVQUFVLENBQVc7UUFD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