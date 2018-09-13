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
class LyInputContents {
}
LyInputContents.decorators = [
    { type: Directive, args: [{
                selector: 'ly-before-input, ly-after-input'
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyFieldDirective {
    /**
     * @param {?} elementRef
     * @param {?} _ngControl
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} cd
     */
    constructor(elementRef, _ngControl, _parentForm, _parentFormGroup, cd) {
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
    focus(isFocused) {
        this.focusState.next(isFocused);
    }
    /**
     * @param {?} isFocused
     * @return {?}
     */
    _blur(isFocused) {
        this.focusState.next(isFocused);
    }
    /**
     * @return {?}
     */
    _noop() { }
    /**
     * @return {?}
     */
    get disabled() { return this._ngControl ? this._ngControl.disabled : this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = !!(value); }
    /**
     * @return {?}
     */
    get required() { return this._ngControl ? this._ngControl.invalid : this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) { this._required = !!(value); }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    _parent() {
        return this._parentFormGroup || this._parentForm;
    }
    /**
     * @return {?}
     */
    _updateErrorState() {
        /** @type {?} */
        const parent = this._parentFormGroup || this._parentForm;
        /** @type {?} */
        const control = this._ngControl ? /** @type {?} */ (this._ngControl.control) : null;
        // const newState = matcher.isErrorState(control, parent);
        // if (newState !== oldState) {
        //   this.errorState = newState;
        //   this.stateChanges.next();
        // }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // if (!changes['placeholder'].firstChange) {
        //   console.log(JSON.stringify(changes['placeholder']))
        // }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusState.complete();
    }
}
LyFieldDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ly-input input, ly-textarea textarea'
            },] },
];
/** @nocollapse */
LyFieldDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: NgForm, decorators: [{ type: Optional }] },
    { type: FormGroupDirective, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
LyFieldDirective.propDecorators = {
    type: [{ type: Input }],
    focus: [{ type: HostListener, args: ['focus', ['true'],] }],
    _blur: [{ type: HostListener, args: ['blur', ['false'],] }],
    _noop: [{ type: HostListener, args: ['input',] }],
    disabled: [{ type: Input }],
    required: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyInputCommon {
}
LyInputCommon.decorators = [
    { type: Directive, args: [{
                selector: 'ly-default, ly-before, ly-after, ly-input ly-error, ly-input ly-hint'
            },] },
];
class LyPlaceholder {
}
LyPlaceholder.decorators = [
    { type: Directive, args: [{
                selector: 'ly-placeholder'
            },] },
];
class LyDefault {
}
LyDefault.decorators = [
    { type: Directive, args: [{
                selector: 'ly-default'
            },] },
];
class LyLabel {
}
LyLabel.decorators = [
    { type: Directive, args: [{
                selector: 'ly-label'
            },] },
];
class LyInput {
    /**
     * @param {?} theme
     * @param {?} _changeDetectorRef
     * @param {?} bcr
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(theme, _changeDetectorRef, bcr, renderer, elementRef) {
        this.theme = theme;
        this._changeDetectorRef = _changeDetectorRef;
        this._inputColor = 'primary';
        this.changed = new Array();
        this.touched = new Array();
        this.type = 'text';
        this._classes = {};
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set withColor(val) {
        this._withColor = val;
        this.updateColor(val);
    }
    /**
     * @return {?}
     */
    get withColor() {
        return this._withColor;
    }
    /**
     * @return {?}
     */
    get isFloatingLabel() {
        return this.currentValueState || this.labelAbove || this.isDefault || this.focusState;
    }
    /**
     * @return {?}
     */
    get placeholderState() {
        return !this.currentValueState && this.focusState || !this.currentValueState && !this.focusState && this.isFloatingLabel;
    }
    /**
     * @return {?}
     */
    get defaultOff() {
        return this.currentValue === this.default && !this.focusState || !this.currentValueState && !this.focusState;
    }
    /**
     * @return {?}
     */
    get disabled() { return this._field.disabled; }
    /**
     * @return {?}
     */
    get required() { return this._field.required; }
    /**
     * @return {?}
     */
    get currentValueState() {
        return (`${this.currentValue}`).length !== 0 && this.currentValue != null;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _valueBoolean(val) {
        return !(val === null || val === undefined || val === false || val === '');
    }
    /**
     * @return {?}
     */
    _isErrorState() {
        if (this._field) {
            return this._field._ngControl.invalid && this._field._ngControl.touched || this._errorState;
        }
    }
    /**
     * @return {?}
     */
    updateError() {
        this._errorState = this._field._ngControl.invalid;
    }
    /**
     * @return {?}
     */
    value() {
        return this.currentValue;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    updateColor(val) {
        this._classes.caretColor = this.theme.addStyle(`input:caret${val}`, theme => `caret-color:${theme.colorOf(val)}`);
        this._classes.withColor = this.theme.addStyle(`input:${val}`, theme => (`color:${theme.colorOf(val)};` +
            `background-color:${theme.input.underline};`));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    toBoolean(val) {
        return toBoolean(val);
    }
    /**
     * @return {?}
     */
    get isPlaceholder() {
        return toBoolean(this.placeholder) || !!this.lyPlaceholder;
    }
    /**
     * @return {?}
     */
    get isDefault() {
        return toBoolean(this.default) || !!this.lyDefault;
    }
    /**
     * @return {?}
     */
    get isLabel() {
        return toBoolean(this.label) || !!this.lyLabel;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.withColor) {
            this.updateColor(this.theme.config.input.withColor);
        }
        // this._inputColor = this.theme.colorOf(this._color);
        this.focusStateSuscription = this._field.focusState.subscribe((fState) => {
            this.focusState = fState;
        });
        if (this._field._parent()) {
            this._field._parent().ngSubmit.subscribe((submit) => {
                this.updateError();
            });
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this._field) {
            this.currentValue = this._field._ngControl.value;
            if (this._field._ngControl && this._field._ngControl.valueChanges) {
                this._field._ngControl.valueChanges.subscribe((val) => {
                    this.currentValue = val;
                    this._errorState = false;
                    this._changeDetectorRef.markForCheck();
                    /**
                               * reset error of submit to false
                               */
                });
            }
            this._field.focusState.subscribe((isFocused) => {
                if (this.isDefault) {
                    if (!this.currentValueState) {
                        this.currentValue = this.default;
                        this._field._ngControl.valueAccessor.writeValue(this.default);
                        this._field._ngControl.viewToModelUpdate(this.default);
                    }
                }
                this._field.markForCheck();
                this._changeDetectorRef.markForCheck();
            });
        }
        else {
            console.warn('LyInput: Require input native');
        }
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    _shouldForward(prop) {
        /** @type {?} */
        const control = this._field ? this._field._ngControl : null;
        return control && (/** @type {?} */ (control))[prop];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["default"]) {
            if (this.isDefault && !this.currentValueState) {
                this.currentValue = this.default;
                this._field._ngControl.viewToModelUpdate(this.default);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusStateSuscription.unsubscribe();
    }
}
LyInput.decorators = [
    { type: Component, args: [{
                selector: 'ly-text-field, ly-input, ly-textarea',
                styles: [`:host{display:inline-block;position:relative;align-items:center}:host /deep/ ly-after,:host /deep/ ly-before{display:inline-block;vertical-align:inherit}:host /deep/ input,:host /deep/ textarea{border:none;outline:0;font-family:inherit;color:inherit;background:0 0;font-size:inherit;width:100%;font-weight:400;padding:0;display:inline-flex}:host.ly-default-off .ly-input-default,:host.ly-hidden-input /deep/ .ly-input-container input,:host.ly-hidden-input /deep/ .ly-input-container textarea{opacity:0}:host.ly-focus-active .ly-input-underline:after{width:100%}:host.ly-focus-active .ly-input-top-label,:host.ly-focus-active /deep/ ly-top-label{font-size:75%;top:0;-webkit-transform:translate(0,0);transform:translate(0,0)}:host.ly-focus-active .ly-input-default{opacity:0}:host.ly-value-on .ly-input-placeholder{opacity:0}.ly-input-underline{position:absolute;bottom:.875em;height:1px;right:0;left:0}.ly-input-underline:after{content:'';position:absolute;width:0%;height:2px;background:currentColor;left:0;right:0;margin:0 auto;bottom:0;transition:450ms cubic-bezier(.23,1,.32,1)}.ly-input-underline.ly-disabled{background:0/4px 1px repeat-x;background-image:linear-gradient(to right,#b4b4b4 0,#b4b4b4 33%,transparent 0);border-top:0}.ly-input-underline.ly-disabled:after{width:0%}:host.ly-label-above .ly-input-float-label{font-size:75%;top:0}.ly-input-default,.ly-input-float-label,.ly-input-placeholder{pointer-events:none;position:absolute;bottom:1.125em;top:1.125em;margin:auto;font-size:100%;transition:375ms cubic-bezier(.23,1,.32,1);color:inherit;width:100%}.ly-input-content{width:100%;position:relative;display:flex;color:currentColor}.ly-input-container{padding:1.125em 0;position:relative;opacity:1;display:inline-block;vertical-align:inherit;width:100%}.ly-input-container ::ng-deep input{text-align:inherit}.bottom-field,.ly-error-container{position:absolute;bottom:0;left:0;width:100%;pointer-events:none;font-size:75%;-webkit-transform:translate3d(0,calc(100% - 1.1em),0);transform:translate3d(0,calc(100% - 1.1em),0);display:flex}.bottom-field .bottom-field-space,.ly-error-container .bottom-field-space{flex:1}.ly-required{position:absolute;top:1.125em;right:0;pointer-events:none;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:.45}:host.ly-input-invalid .ly-input-float-label,:host.ly-input-invalid .ly-input-placeholder,:host.ly-input-invalid .ly-input-underline,:host.ly-input-invalid /deep/ ly-error{color:#f44336!important}:host.ly-input-invalid .ly-input-underline:after{width:100%}`],
                template: `<ng-content select="ly-before"></ng-content>
<div class="{{ _classes.withColor }} ly-input-underline"></div>
<div class="ly-input-container {{ _classes.caretColor }}">
  <ng-content select="input, textarea"></ng-content>
  <!-- ly-placeholder -->
  <ng-container *ngIf="placeholder; then isPlaceholderTemplate; else placeholderContainer"></ng-container>
  <ng-template #isPlaceholderTemplate>
    <div *ngIf="toBoolean(placeholder) !== undefined && placeholderState" color="input:label" class="ly-input-placeholder">{{ placeholder }}</div>
  </ng-template>
  <ng-template #placeholderContainer>
    <div *ngIf="lyPlaceholder !== undefined && placeholderState" color="input:label" class="ly-input-placeholder">
      <ng-content select="ly-placeholder"></ng-content>
    </div>
  </ng-template>
  <!-- ly-default -->
  <ng-container *ngIf="toBoolean(default); then isDefaultTemplate"></ng-container>
  <ng-template #isDefaultTemplate>
    <div *ngIf="!(lyDefault !== undefined) && defaultOff" color="input:label" class="ly-input-default">Default: {{ default }}</div>
    <div *ngIf="lyDefault !== undefined && defaultOff" color="input:label" class="ly-input-default">
      <ng-content select="ly-default"></ng-content>{{ default }}
    </div>
  </ng-template>
  <!-- ly-label -->
  <ng-container *ngIf="toBoolean(label); then _isLabelTemplate; else labelContainer"></ng-container>
  <ng-template #_isLabelTemplate>
    <div *ngIf="label !== undefined" color="input:label" class="ly-input-float-label">{{ label }}</div>
  </ng-template>
  <ng-template #labelContainer>
    <div *ngIf="lyLabel" color="input:label" class="ly-input-float-label">
      <ng-content select="ly-label"></ng-content>
    </div>
  </ng-template>
</div>
<div class="ly-icon-required" *ngIf="required"></div>
<div class="bottom-field" *ngIf="!_isErrorState()">
  <ng-content select="ly-hint[align=start], ly-hint:not(ly-hint[align])"></ng-content>
  <span class="bottom-field-space"></span>
  <ng-content select="ly-hint[align=end]"></ng-content>
</div>
<div class="bottom-field" *ngIf="_isErrorState()">
  <ng-content select="ly-error"></ng-content>
</div>
<ng-content select="ly-after"></ng-content>
`,
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
LyInput.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ChangeDetectorRef },
    { type: LyCommon, decorators: [{ type: Optional }] },
    { type: Renderer2 },
    { type: ElementRef }
];
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
class LyInputModule {
}
LyInputModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, LyCommonModule],
                exports: [LyInput, LyInputContents, LyFieldDirective, LyInputCommon, LyDefault, LyLabel, LyPlaceholder],
                declarations: [LyInput, LyInputContents, LyFieldDirective, LyInputCommon, LyDefault, LyLabel, LyPlaceholder],
            },] },
];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaW5wdXQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pbnB1dC9pbnB1dC1jb250ZW50cy50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2x5LWZpZWxkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2lucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2x5LWJlZm9yZS1pbnB1dCwgbHktYWZ0ZXItaW5wdXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMeUlucHV0Q29udGVudHMge1xyXG5cclxufVxyXG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgU2VsZixcbiAgT3B0aW9uYWwsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nQ29udHJvbCwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pbnB1dCBpbnB1dCwgbHktdGV4dGFyZWEgdGV4dGFyZWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGZvY3VzU3RhdGU6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBmb2N1c2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyd0cnVlJ10pIGZvY3VzKGlzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5uZXh0KGlzRm9jdXNlZCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnZmFsc2UnXSkgcHJpdmF0ZSBfYmx1cihpc0ZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUubmV4dChpc0ZvY3VzZWQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JykgcHJpdmF0ZSBfbm9vcCgpIHsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5kaXNhYmxlZCA6IHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gISEodmFsdWUpOyB9XG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5pbnZhbGlkIDogdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmVxdWlyZWQgPSAhISh2YWx1ZSk7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBfbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcGFyZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuICB9XG4gIHByb3RlY3RlZCBfdXBkYXRlRXJyb3JTdGF0ZSgpIHtcbiAgICAvLyBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5fcGFyZW50Rm9ybTtcbiAgICAvLyBjb25zdCBtYXRjaGVyID0gdGhpcy5lcnJvclN0YXRlTWF0Y2hlciB8fCB0aGlzLl9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sIDogbnVsbDtcbiAgICAvLyBjb25zdCBuZXdTdGF0ZSA9IG1hdGNoZXIuaXNFcnJvclN0YXRlKGNvbnRyb2wsIHBhcmVudCk7XG5cbiAgICAvLyBpZiAobmV3U3RhdGUgIT09IG9sZFN0YXRlKSB7XG4gICAgLy8gICB0aGlzLmVycm9yU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAvLyAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAvLyB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W2Zsb2F0TGFiZWw6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICAvLyBpZiAoIWNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10pKVxuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgTmdNb2R1bGUsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbiAgQ29udGVudENoaWxkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWUyLCBJc0Jvb2xlYW4sIHRvQm9vbGVhbiwgTHlDb21tb24gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJbnB1dENvbnRlbnRzIH0gZnJvbSAnLi9pbnB1dC1jb250ZW50cyc7XG5pbXBvcnQgeyBMeUZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9seS1maWVsZC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0LCBseS1iZWZvcmUsIGx5LWFmdGVyLCBseS1pbnB1dCBseS1lcnJvciwgbHktaW5wdXQgbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dENvbW1vbiB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1wbGFjZWhvbGRlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlQbGFjZWhvbGRlciB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kZWZhdWx0J1xufSlcbmV4cG9ydCBjbGFzcyBMeURlZmF1bHQge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktbGFiZWwnXG59KVxuZXhwb3J0IGNsYXNzIEx5TGFiZWwge31cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10ZXh0LWZpZWxkLCBseS1pbnB1dCwgbHktdGV4dGFyZWEnLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0IC9kZWVwLyBseS1hZnRlciw6aG9zdCAvZGVlcC8gbHktYmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOmluaGVyaXR9Omhvc3QgL2RlZXAvIGlucHV0LDpob3N0IC9kZWVwLyB0ZXh0YXJlYXtib3JkZXI6bm9uZTtvdXRsaW5lOjA7Zm9udC1mYW1pbHk6aW5oZXJpdDtjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6MCAwO2ZvbnQtc2l6ZTppbmhlcml0O3dpZHRoOjEwMCU7Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0Lmx5LWRlZmF1bHQtb2ZmIC5seS1pbnB1dC1kZWZhdWx0LDpob3N0Lmx5LWhpZGRlbi1pbnB1dCAvZGVlcC8gLmx5LWlucHV0LWNvbnRhaW5lciBpbnB1dCw6aG9zdC5seS1oaWRkZW4taW5wdXQgL2RlZXAvIC5seS1pbnB1dC1jb250YWluZXIgdGV4dGFyZWF7b3BhY2l0eTowfTpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAubHktaW5wdXQtdW5kZXJsaW5lOmFmdGVye3dpZHRoOjEwMCV9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC10b3AtbGFiZWwsOmhvc3QubHktZm9jdXMtYWN0aXZlIC9kZWVwLyBseS10b3AtbGFiZWx7Zm9udC1zaXplOjc1JTt0b3A6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCl9Omhvc3QubHktZm9jdXMtYWN0aXZlIC5seS1pbnB1dC1kZWZhdWx0e29wYWNpdHk6MH06aG9zdC5seS12YWx1ZS1vbiAubHktaW5wdXQtcGxhY2Vob2xkZXJ7b3BhY2l0eTowfS5seS1pbnB1dC11bmRlcmxpbmV7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi44NzVlbTtoZWlnaHQ6MXB4O3JpZ2h0OjA7bGVmdDowfS5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDowJTtoZWlnaHQ6MnB4O2JhY2tncm91bmQ6Y3VycmVudENvbG9yO2xlZnQ6MDtyaWdodDowO21hcmdpbjowIGF1dG87Ym90dG9tOjA7dHJhbnNpdGlvbjo0NTBtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpfS5seS1pbnB1dC11bmRlcmxpbmUubHktZGlzYWJsZWR7YmFja2dyb3VuZDowLzRweCAxcHggcmVwZWF0LXg7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2I0YjRiNCAwLCNiNGI0YjQgMzMlLHRyYW5zcGFyZW50IDApO2JvcmRlci10b3A6MH0ubHktaW5wdXQtdW5kZXJsaW5lLmx5LWRpc2FibGVkOmFmdGVye3dpZHRoOjAlfTpob3N0Lmx5LWxhYmVsLWFib3ZlIC5seS1pbnB1dC1mbG9hdC1sYWJlbHtmb250LXNpemU6NzUlO3RvcDowfS5seS1pbnB1dC1kZWZhdWx0LC5seS1pbnB1dC1mbG9hdC1sYWJlbCwubHktaW5wdXQtcGxhY2Vob2xkZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MS4xMjVlbTt0b3A6MS4xMjVlbTttYXJnaW46YXV0bztmb250LXNpemU6MTAwJTt0cmFuc2l0aW9uOjM3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSk7Y29sb3I6aW5oZXJpdDt3aWR0aDoxMDAlfS5seS1pbnB1dC1jb250ZW50e3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2NvbG9yOmN1cnJlbnRDb2xvcn0ubHktaW5wdXQtY29udGFpbmVye3BhZGRpbmc6MS4xMjVlbSAwO3Bvc2l0aW9uOnJlbGF0aXZlO29wYWNpdHk6MTtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjppbmhlcml0O3dpZHRoOjEwMCV9Lmx5LWlucHV0LWNvbnRhaW5lciA6Om5nLWRlZXAgaW5wdXR7dGV4dC1hbGlnbjppbmhlcml0fS5ib3R0b20tZmllbGQsLmx5LWVycm9yLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtwb2ludGVyLWV2ZW50czpub25lO2ZvbnQtc2l6ZTo3NSU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCxjYWxjKDEwMCUgLSAxLjFlbSksMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYygxMDAlIC0gMS4xZW0pLDApO2Rpc3BsYXk6ZmxleH0uYm90dG9tLWZpZWxkIC5ib3R0b20tZmllbGQtc3BhY2UsLmx5LWVycm9yLWNvbnRhaW5lciAuYm90dG9tLWZpZWxkLXNwYWNle2ZsZXg6MX0ubHktcmVxdWlyZWR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEuMTI1ZW07cmlnaHQ6MDtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6LjQ1fTpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LWZsb2F0LWxhYmVsLDpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXBsYWNlaG9sZGVyLDpob3N0Lmx5LWlucHV0LWludmFsaWQgLmx5LWlucHV0LXVuZGVybGluZSw6aG9zdC5seS1pbnB1dC1pbnZhbGlkIC9kZWVwLyBseS1lcnJvcntjb2xvcjojZjQ0MzM2IWltcG9ydGFudH06aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7d2lkdGg6MTAwJX1gXSxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJseS1iZWZvcmVcIj48L25nLWNvbnRlbnQ+XHJcbjxkaXYgY2xhc3M9XCJ7eyBfY2xhc3Nlcy53aXRoQ29sb3IgfX0gbHktaW5wdXQtdW5kZXJsaW5lXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJseS1pbnB1dC1jb250YWluZXIge3sgX2NsYXNzZXMuY2FyZXRDb2xvciB9fVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImlucHV0LCB0ZXh0YXJlYVwiPjwvbmctY29udGVudD5cclxuICA8IS0tIGx5LXBsYWNlaG9sZGVyIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJwbGFjZWhvbGRlcjsgdGhlbiBpc1BsYWNlaG9sZGVyVGVtcGxhdGU7IGVsc2UgcGxhY2Vob2xkZXJDb250YWluZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI2lzUGxhY2Vob2xkZXJUZW1wbGF0ZT5cclxuICAgIDxkaXYgKm5nSWY9XCJ0b0Jvb2xlYW4ocGxhY2Vob2xkZXIpICE9PSB1bmRlZmluZWQgJiYgcGxhY2Vob2xkZXJTdGF0ZVwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LXBsYWNlaG9sZGVyXCI+e3sgcGxhY2Vob2xkZXIgfX08L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSAjcGxhY2Vob2xkZXJDb250YWluZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkICYmIHBsYWNlaG9sZGVyU3RhdGVcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1wbGFjZWhvbGRlclwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1wbGFjZWhvbGRlclwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPCEtLSBseS1kZWZhdWx0IC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b0Jvb2xlYW4oZGVmYXVsdCk7IHRoZW4gaXNEZWZhdWx0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI2lzRGVmYXVsdFRlbXBsYXRlPlxyXG4gICAgPGRpdiAqbmdJZj1cIiEobHlEZWZhdWx0ICE9PSB1bmRlZmluZWQpICYmIGRlZmF1bHRPZmZcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1kZWZhdWx0XCI+RGVmYXVsdDoge3sgZGVmYXVsdCB9fTwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImx5RGVmYXVsdCAhPT0gdW5kZWZpbmVkICYmIGRlZmF1bHRPZmZcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1kZWZhdWx0XCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWRlZmF1bHRcIj48L25nLWNvbnRlbnQ+e3sgZGVmYXVsdCB9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8IS0tIGx5LWxhYmVsIC0tPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b0Jvb2xlYW4obGFiZWwpOyB0aGVuIF9pc0xhYmVsVGVtcGxhdGU7IGVsc2UgbGFiZWxDb250YWluZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI19pc0xhYmVsVGVtcGxhdGU+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibGFiZWwgIT09IHVuZGVmaW5lZFwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWZsb2F0LWxhYmVsXCI+e3sgbGFiZWwgfX08L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSAjbGFiZWxDb250YWluZXI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibHlMYWJlbFwiIGNvbG9yPVwiaW5wdXQ6bGFiZWxcIiBjbGFzcz1cImx5LWlucHV0LWZsb2F0LWxhYmVsXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWxhYmVsXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJseS1pY29uLXJlcXVpcmVkXCIgKm5nSWY9XCJyZXF1aXJlZFwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYm90dG9tLWZpZWxkXCIgKm5nSWY9XCIhX2lzRXJyb3JTdGF0ZSgpXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktaGludFthbGlnbj1zdGFydF0sIGx5LWhpbnQ6bm90KGx5LWhpbnRbYWxpZ25dKVwiPjwvbmctY29udGVudD5cclxuICA8c3BhbiBjbGFzcz1cImJvdHRvbS1maWVsZC1zcGFjZVwiPjwvc3Bhbj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1oaW50W2FsaWduPWVuZF1cIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYm90dG9tLWZpZWxkXCIgKm5nSWY9XCJfaXNFcnJvclN0YXRlKClcIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1lcnJvclwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbjxuZy1jb250ZW50IHNlbGVjdD1cImx5LWFmdGVyXCI+PC9uZy1jb250ZW50PlxyXG5gLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmx5LWlucHV0LWludmFsaWRdJzogJ19pc0Vycm9yU3RhdGUoKScsXG4gICAgJ1tjbGFzcy5uZy11bnRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidW50b3VjaGVkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXRvdWNoZWRdJzogJ19zaG91bGRGb3J3YXJkKFwidG91Y2hlZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1wcmlzdGluZV0nOiAnX3Nob3VsZEZvcndhcmQoXCJwcmlzdGluZVwiKScsXG4gICAgJ1tjbGFzcy5uZy1kaXJ0eV0nOiAnX3Nob3VsZEZvcndhcmQoXCJkaXJ0eVwiKScsXG4gICAgJ1tjbGFzcy5uZy12YWxpZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJ2YWxpZFwiKScsXG4gICAgJ1tjbGFzcy5uZy1pbnZhbGlkXSc6ICdfc2hvdWxkRm9yd2FyZChcImludmFsaWRcIiknLFxuICAgICdbY2xhc3MubmctcGVuZGluZ10nOiAnX3Nob3VsZEZvcndhcmQoXCJwZW5kaW5nXCIpJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgX3ZhbHVlOiBhbnk7XG4gIF9lbGVtZW50VHlwZTogJ2lucHV0JyB8ICd0ZXh0YXJlYSc7XG4gIF9pbnB1dENvbG9yID0gJ3ByaW1hcnknO1xuICBjdXJyZW50VmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBwYWxldHRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY2hhbmdlZCA9IG5ldyBBcnJheTwodmFsdWU6IGFueSkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSB0b3VjaGVkID0gbmV3IEFycmF5PCgpID0+IHZvaWQ+KCk7XG4gIEBDb250ZW50Q2hpbGQoTHlGaWVsZERpcmVjdGl2ZSkgX2ZpZWxkOiBMeUZpZWxkRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKEx5UGxhY2Vob2xkZXIpIGx5UGxhY2Vob2xkZXI6IEx5UGxhY2Vob2xkZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlEZWZhdWx0KSBseURlZmF1bHQ6IEx5RGVmYXVsdDtcbiAgQENvbnRlbnRDaGlsZChMeUxhYmVsKSBseUxhYmVsOiBMeUxhYmVsO1xuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBASXNCb29sZWFuKCkgbGFiZWxBYm92ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZGVmYXVsdDogc3RyaW5nO1xuICBfZXJyb3JTdGF0ZTogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXJDb250YWluZXI6IGFueTtcbiAgbGFiZWxDb250YWluZXI6IGFueTtcbiAgZm9jdXNTdGF0ZVN1c2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIF9jbGFzc2VzOiB7XG4gICAgY2FyZXRDb2xvcj86IHN0cmluZyxcbiAgICB3aXRoQ29sb3I/OiBzdHJpbmdcbiAgfSA9IHt9O1xuICBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVDb2xvcih2YWwpO1xuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWxhYmVsLWFib3ZlJylcbiAgZ2V0IGlzRmxvYXRpbmdMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSB8fCB0aGlzLmxhYmVsQWJvdmUgfHwgdGhpcy5pc0RlZmF1bHQgfHwgdGhpcy5mb2N1c1N0YXRlO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyU3RhdGUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmIHRoaXMuZm9jdXNTdGF0ZSB8fCAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiAhdGhpcy5mb2N1c1N0YXRlICYmIHRoaXMuaXNGbG9hdGluZ0xhYmVsO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktZm9jdXMtYWN0aXZlJykgZm9jdXNTdGF0ZTogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1oaWRkZW4taW5wdXQnKVxuICBnZXQgZGVmYXVsdE9mZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWUgPT09IHRoaXMuZGVmYXVsdCAmJiAhdGhpcy5mb2N1c1N0YXRlIHx8ICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlICYmICF0aGlzLmZvY3VzU3RhdGU7XG4gIH1cblxuICBASW5wdXQoKSBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9maWVsZC5kaXNhYmxlZDsgfVxuXG4gIEBJbnB1dCgpIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2ZpZWxkLnJlcXVpcmVkOyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS12YWx1ZS1vbicpXG4gIGdldCBjdXJyZW50VmFsdWVTdGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKGAke3RoaXMuY3VycmVudFZhbHVlfWApLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmN1cnJlbnRWYWx1ZSAhPSBudWxsO1xuICB9XG5cbiAgX3ZhbHVlQm9vbGVhbih2YWwpIHtcbiAgICByZXR1cm4gISh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQgfHwgdmFsID09PSBmYWxzZSB8fCB2YWwgPT09ICcnKTtcbiAgfVxuXG4gIF9pc0Vycm9yU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZmllbGQuX25nQ29udHJvbC5pbnZhbGlkICYmIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudG91Y2hlZCB8fCB0aGlzLl9lcnJvclN0YXRlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHVwZGF0ZUVycm9yKCkge1xuICAgIHRoaXMuX2Vycm9yU3RhdGUgPSB0aGlzLl9maWVsZC5fbmdDb250cm9sLmludmFsaWQ7XG4gIH1cblxuICB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgYmNyOiBMeUNvbW1vbixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBwcml2YXRlIHVwZGF0ZUNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2xhc3Nlcy5jYXJldENvbG9yID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgIGBpbnB1dDpjYXJldCR7dmFsfWAsIHRoZW1lID0+IGBjYXJldC1jb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX1gXG4gICAgKTtcbiAgICB0aGlzLl9jbGFzc2VzLndpdGhDb2xvciA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgaW5wdXQ6JHt2YWx9YCwgdGhlbWUgPT4gKFxuICAgICAgICBgY29sb3I6JHt0aGVtZS5jb2xvck9mKHZhbCl9O2AgK1xuICAgICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLmlucHV0LnVuZGVybGluZX07YFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICB0b0Jvb2xlYW4odmFsOiBhbnkpIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGlzUGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLnBsYWNlaG9sZGVyKSB8fCAhIXRoaXMubHlQbGFjZWhvbGRlcjtcbiAgfVxuICBnZXQgaXNEZWZhdWx0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5kZWZhdWx0KSB8fCAhIXRoaXMubHlEZWZhdWx0O1xuICB9XG4gIGdldCBpc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5sYWJlbCkgfHwgISF0aGlzLmx5TGFiZWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yKHRoaXMudGhlbWUuY29uZmlnLmlucHV0LndpdGhDb2xvcik7XG4gICAgfVxuICAgIC8vIHRoaXMuX2lucHV0Q29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5fY29sb3IpO1xuICAgIHRoaXMuZm9jdXNTdGF0ZVN1c2NyaXB0aW9uID0gdGhpcy5fZmllbGQuZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGZTdGF0ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb2N1c1N0YXRlID0gZlN0YXRlO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLl9maWVsZC5fcGFyZW50KCkpIHtcbiAgICAgIHRoaXMuX2ZpZWxkLl9wYXJlbnQoKS5uZ1N1Ym1pdC5zdWJzY3JpYmUoKHN1Ym1pdCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlO1xuICAgICAgaWYgKHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wgJiYgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsO1xuICAgICAgICAgIHRoaXMuX2Vycm9yU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiByZXNldCBlcnJvciBvZiBzdWJtaXQgdG8gZmFsc2VcbiAgICAgICAgICAgKi9cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9maWVsZC5mb2N1c1N0YXRlLnN1YnNjcmliZSgoaXNGb2N1c2VkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVmYXVsdCkge1xuICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmRlZmF1bHQ7XG4gICAgICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWVsZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdMeUlucHV0OiBSZXF1aXJlIGlucHV0IG5hdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG91bGRGb3J3YXJkKHByb3A6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9maWVsZCA/IHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wgOiBudWxsO1xuICAgIHJldHVybiBjb250cm9sICYmIChjb250cm9sIGFzIGFueSlbcHJvcF07XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZGVmYXVsdCkge1xuICAgICAgaWYgKHRoaXMuaXNEZWZhdWx0ICYmICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZpZXdUb01vZGVsVXBkYXRlKHRoaXMuZGVmYXVsdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZVN1c2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SW5wdXQsIEx5SW5wdXRDb250ZW50cywgTHlGaWVsZERpcmVjdGl2ZSwgTHlJbnB1dENvbW1vbiwgTHlEZWZhdWx0LCBMeUxhYmVsLCBMeVBsYWNlaG9sZGVyXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlJbnB1dCwgTHlJbnB1dENvbnRlbnRzLCBMeUZpZWxkRGlyZWN0aXZlLCBMeUlucHV0Q29tbW9uLCBMeURlZmF1bHQsIEx5TGFiZWwsIEx5UGxhY2Vob2xkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0TW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7O1lBQ0MsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7YUFDNUM7Ozs7Ozs7QUNIRDs7Ozs7Ozs7SUF3Q0UsWUFDUyxZQUNvQixVQUFxQixFQUM1QixXQUFtQixFQUNuQixnQkFBb0MsRUFDaEQ7UUFKRCxlQUFVLEdBQVYsVUFBVTtRQUNVLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQUNoRCxPQUFFLEdBQUYsRUFBRTswQkExQm1CLElBQUksT0FBTyxFQUFFO3lCQUV4QixLQUFLO3lCQUNMLEtBQUs7S0F3QnJCOzs7OztJ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