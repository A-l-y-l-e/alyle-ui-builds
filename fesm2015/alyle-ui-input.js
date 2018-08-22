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
        /** @type {?} */
        const inputColor = () => this.theme.colorOf(val);
        this._classes.caretColor = this.theme.setUpStyle(`input:caret${val}`, {
            '': () => (`caret-color:${inputColor()}`)
        });
        this._classes.withColor = this.theme.setUpStyle(`input:${val}`, {
            '': () => (`color:${inputColor()};` +
                `background-color:${this.theme.config["input"].underline};`)
        });
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
            this.updateColor(this.theme.config["input"].withColor);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaW5wdXQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9pbnB1dC9pbnB1dC1jb250ZW50cy50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2x5LWZpZWxkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL2lucHV0L2lucHV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2x5LWJlZm9yZS1pbnB1dCwgbHktYWZ0ZXItaW5wdXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMeUlucHV0Q29udGVudHMge1xyXG5cclxufVxyXG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFNlbGYsXG4gIE9wdGlvbmFsLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0NvbnRyb2wsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktaW5wdXQgaW5wdXQsIGx5LXRleHRhcmVhIHRleHRhcmVhJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUZpZWxkRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBmb2N1c1N0YXRlOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgZm9jdXNlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsndHJ1ZSddKSBmb2N1cyhpc0ZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUubmV4dChpc0ZvY3VzZWQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJ2ZhbHNlJ10pIHByaXZhdGUgX2JsdXIoaXNGb2N1c2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5mb2N1c1N0YXRlLm5leHQoaXNGb2N1c2VkKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIHByaXZhdGUgX25vb3AoKSB7IH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9uZ0NvbnRyb2wgPyB0aGlzLl9uZ0NvbnRyb2wuZGlzYWJsZWQgOiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkgeyB0aGlzLl9kaXNhYmxlZCA9ICEhKHZhbHVlKTsgfVxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7IHJldHVybiB0aGlzLl9uZ0NvbnRyb2wgPyB0aGlzLl9uZ0NvbnRyb2wuaW52YWxpZCA6IHRoaXMuX3JlcXVpcmVkOyB9XG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYW55KSB7IHRoaXMuX3JlcXVpcmVkID0gISEodmFsdWUpOyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgX25nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX3BhcmVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5fcGFyZW50Rm9ybTtcbiAgfVxuICBwcm90ZWN0ZWQgX3VwZGF0ZUVycm9yU3RhdGUoKSB7XG4gICAgLy8gY29uc3Qgb2xkU3RhdGUgPSB0aGlzLmVycm9yU3RhdGU7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5fcGFyZW50Rm9ybUdyb3VwIHx8IHRoaXMuX3BhcmVudEZvcm07XG4gICAgLy8gY29uc3QgbWF0Y2hlciA9IHRoaXMuZXJyb3JTdGF0ZU1hdGNoZXIgfHwgdGhpcy5fZGVmYXVsdEVycm9yU3RhdGVNYXRjaGVyO1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9uZ0NvbnRyb2wgPyB0aGlzLl9uZ0NvbnRyb2wuY29udHJvbCBhcyBGb3JtQ29udHJvbCA6IG51bGw7XG4gICAgLy8gY29uc3QgbmV3U3RhdGUgPSBtYXRjaGVyLmlzRXJyb3JTdGF0ZShjb250cm9sLCBwYXJlbnQpO1xuXG4gICAgLy8gaWYgKG5ld1N0YXRlICE9PSBvbGRTdGF0ZSkge1xuICAgIC8vICAgdGhpcy5lcnJvclN0YXRlID0gbmV3U3RhdGU7XG4gICAgLy8gICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgLy8gfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1tmbG9hdExhYmVsOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gICAgLy8gaWYgKCFjaGFuZ2VzWydwbGFjZWhvbGRlciddLmZpcnN0Q2hhbmdlKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjaGFuZ2VzWydwbGFjZWhvbGRlciddKSlcbiAgICAvLyB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3Vic2NyaWJlciAsICBTdWJqZWN0ICwgIEJlaGF2aW9yU3ViamVjdCAsICBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgTmdNb2R1bGUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIERpcmVjdGl2ZSxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgQ29udGVudENoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBTZWxmLFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBIb3N0QmluZGluZyxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgTmdDb250cm9sLCBOZ0Zvcm0sXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlLCBMeVRoZW1lMiwgSXNCb29sZWFuLCB0b0Jvb2xlYW4sIEx5Q29tbW9uIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SW5wdXRDb250ZW50cyB9IGZyb20gJy4vaW5wdXQtY29udGVudHMnO1xuaW1wb3J0IHsgTHlGaWVsZERpcmVjdGl2ZSB9IGZyb20gJy4vbHktZmllbGQuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGVmYXVsdCwgbHktYmVmb3JlLCBseS1hZnRlciwgbHktaW5wdXQgbHktZXJyb3IsIGx5LWlucHV0IGx5LWhpbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXRDb21tb24ge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktcGxhY2Vob2xkZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5UGxhY2Vob2xkZXIge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGVmYXVsdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlEZWZhdWx0IHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWxhYmVsJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxhYmVsIHt9XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGV4dC1maWVsZCwgbHktaW5wdXQsIGx5LXRleHRhcmVhJyxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCAvZGVlcC8gbHktYWZ0ZXIsOmhvc3QgL2RlZXAvIGx5LWJlZm9yZXtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjppbmhlcml0fTpob3N0IC9kZWVwLyBpbnB1dCw6aG9zdCAvZGVlcC8gdGV4dGFyZWF7Ym9yZGVyOm5vbmU7b3V0bGluZTowO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOjAgMDtmb250LXNpemU6aW5oZXJpdDt3aWR0aDoxMDAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUtZmxleH06aG9zdC5seS1kZWZhdWx0LW9mZiAubHktaW5wdXQtZGVmYXVsdCw6aG9zdC5seS1oaWRkZW4taW5wdXQgL2RlZXAvIC5seS1pbnB1dC1jb250YWluZXIgaW5wdXQsOmhvc3QubHktaGlkZGVuLWlucHV0IC9kZWVwLyAubHktaW5wdXQtY29udGFpbmVyIHRleHRhcmVhe29wYWNpdHk6MH06aG9zdC5seS1mb2N1cy1hY3RpdmUgLmx5LWlucHV0LXVuZGVybGluZTphZnRlcnt3aWR0aDoxMDAlfTpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAubHktaW5wdXQtdG9wLWxhYmVsLDpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAvZGVlcC8gbHktdG9wLWxhYmVse2ZvbnQtc2l6ZTo3NSU7dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApfTpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAubHktaW5wdXQtZGVmYXVsdHtvcGFjaXR5OjB9Omhvc3QubHktdmFsdWUtb24gLmx5LWlucHV0LXBsYWNlaG9sZGVye29wYWNpdHk6MH0ubHktaW5wdXQtdW5kZXJsaW5le3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTouODc1ZW07aGVpZ2h0OjFweDtyaWdodDowO2xlZnQ6MH0ubHktaW5wdXQtdW5kZXJsaW5lOmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MCU7aGVpZ2h0OjJweDtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjtsZWZ0OjA7cmlnaHQ6MDttYXJnaW46MCBhdXRvO2JvdHRvbTowO3RyYW5zaXRpb246NDUwbXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKX0ubHktaW5wdXQtdW5kZXJsaW5lLmx5LWRpc2FibGVke2JhY2tncm91bmQ6MC80cHggMXB4IHJlcGVhdC14O2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNiNGI0YjQgMCwjYjRiNGI0IDMzJSx0cmFuc3BhcmVudCAwKTtib3JkZXItdG9wOjB9Lmx5LWlucHV0LXVuZGVybGluZS5seS1kaXNhYmxlZDphZnRlcnt3aWR0aDowJX06aG9zdC5seS1sYWJlbC1hYm92ZSAubHktaW5wdXQtZmxvYXQtbGFiZWx7Zm9udC1zaXplOjc1JTt0b3A6MH0ubHktaW5wdXQtZGVmYXVsdCwubHktaW5wdXQtZmxvYXQtbGFiZWwsLmx5LWlucHV0LXBsYWNlaG9sZGVye3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjEuMTI1ZW07dG9wOjEuMTI1ZW07bWFyZ2luOmF1dG87Zm9udC1zaXplOjEwMCU7dHJhbnNpdGlvbjozNzVtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpO2NvbG9yOmluaGVyaXQ7d2lkdGg6MTAwJX0ubHktaW5wdXQtY29udGVudHt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtjb2xvcjpjdXJyZW50Q29sb3J9Lmx5LWlucHV0LWNvbnRhaW5lcntwYWRkaW5nOjEuMTI1ZW0gMDtwb3NpdGlvbjpyZWxhdGl2ZTtvcGFjaXR5OjE7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246aW5oZXJpdDt3aWR0aDoxMDAlfS5seS1pbnB1dC1jb250YWluZXIgOjpuZy1kZWVwIGlucHV0e3RleHQtYWxpZ246aW5oZXJpdH0uYm90dG9tLWZpZWxkLC5seS1lcnJvci1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTtmb250LXNpemU6NzUlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYygxMDAlIC0gMS4xZW0pLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGMoMTAwJSAtIDEuMWVtKSwwKTtkaXNwbGF5OmZsZXh9LmJvdHRvbS1maWVsZCAuYm90dG9tLWZpZWxkLXNwYWNlLC5seS1lcnJvci1jb250YWluZXIgLmJvdHRvbS1maWVsZC1zcGFjZXtmbGV4OjF9Lmx5LXJlcXVpcmVke3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxLjEyNWVtO3JpZ2h0OjA7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5Oi40NX06aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC1mbG9hdC1sYWJlbCw6aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC1wbGFjZWhvbGRlciw6aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC11bmRlcmxpbmUsOmhvc3QubHktaW5wdXQtaW52YWxpZCAvZGVlcC8gbHktZXJyb3J7Y29sb3I6I2Y0NDMzNiFpbXBvcnRhbnR9Omhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtdW5kZXJsaW5lOmFmdGVye3dpZHRoOjEwMCV9YF0sXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktYmVmb3JlXCI+PC9uZy1jb250ZW50PlxyXG48ZGl2IGNsYXNzPVwie3sgX2NsYXNzZXMud2l0aENvbG9yIH19IGx5LWlucHV0LXVuZGVybGluZVwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibHktaW5wdXQtY29udGFpbmVyIHt7IF9jbGFzc2VzLmNhcmV0Q29sb3IgfX1cIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJpbnB1dCwgdGV4dGFyZWFcIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBseS1wbGFjZWhvbGRlciAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicGxhY2Vob2xkZXI7IHRoZW4gaXNQbGFjZWhvbGRlclRlbXBsYXRlOyBlbHNlIHBsYWNlaG9sZGVyQ29udGFpbmVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlICNpc1BsYWNlaG9sZGVyVGVtcGxhdGU+XHJcbiAgICA8ZGl2ICpuZ0lmPVwidG9Cb29sZWFuKHBsYWNlaG9sZGVyKSAhPT0gdW5kZWZpbmVkICYmIHBsYWNlaG9sZGVyU3RhdGVcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1wbGFjZWhvbGRlclwiPnt7IHBsYWNlaG9sZGVyIH19PC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgI3BsYWNlaG9sZGVyQ29udGFpbmVyPlxyXG4gICAgPGRpdiAqbmdJZj1cImx5UGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCAmJiBwbGFjZWhvbGRlclN0YXRlXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtcGxhY2Vob2xkZXJcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktcGxhY2Vob2xkZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDwhLS0gbHktZGVmYXVsdCAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidG9Cb29sZWFuKGRlZmF1bHQpOyB0aGVuIGlzRGVmYXVsdFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlICNpc0RlZmF1bHRUZW1wbGF0ZT5cclxuICAgIDxkaXYgKm5nSWY9XCIhKGx5RGVmYXVsdCAhPT0gdW5kZWZpbmVkKSAmJiBkZWZhdWx0T2ZmXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZGVmYXVsdFwiPkRlZmF1bHQ6IHt7IGRlZmF1bHQgfX08L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCJseURlZmF1bHQgIT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0T2ZmXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZGVmYXVsdFwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1kZWZhdWx0XCI+PC9uZy1jb250ZW50Pnt7IGRlZmF1bHQgfX1cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPCEtLSBseS1sYWJlbCAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidG9Cb29sZWFuKGxhYmVsKTsgdGhlbiBfaXNMYWJlbFRlbXBsYXRlOyBlbHNlIGxhYmVsQ29udGFpbmVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlICNfaXNMYWJlbFRlbXBsYXRlPlxyXG4gICAgPGRpdiAqbmdJZj1cImxhYmVsICE9PSB1bmRlZmluZWRcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1mbG9hdC1sYWJlbFwiPnt7IGxhYmVsIH19PC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgI2xhYmVsQ29udGFpbmVyPlxyXG4gICAgPGRpdiAqbmdJZj1cImx5TGFiZWxcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1mbG9hdC1sYWJlbFwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1sYWJlbFwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibHktaWNvbi1yZXF1aXJlZFwiICpuZ0lmPVwicmVxdWlyZWRcIj48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImJvdHRvbS1maWVsZFwiICpuZ0lmPVwiIV9pc0Vycm9yU3RhdGUoKVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWhpbnRbYWxpZ249c3RhcnRdLCBseS1oaW50Om5vdChseS1oaW50W2FsaWduXSlcIj48L25nLWNvbnRlbnQ+XHJcbiAgPHNwYW4gY2xhc3M9XCJib3R0b20tZmllbGQtc3BhY2VcIj48L3NwYW4+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktaGludFthbGlnbj1lbmRdXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImJvdHRvbS1maWVsZFwiICpuZ0lmPVwiX2lzRXJyb3JTdGF0ZSgpXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktZXJyb3JcIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48bmctY29udGVudCBzZWxlY3Q9XCJseS1hZnRlclwiPjwvbmctY29udGVudD5cclxuYCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5seS1pbnB1dC1pbnZhbGlkXSc6ICdfaXNFcnJvclN0YXRlKCknLFxuICAgICdbY2xhc3MubmctdW50b3VjaGVkXSc6ICdfc2hvdWxkRm9yd2FyZChcInVudG91Y2hlZFwiKScsXG4gICAgJ1tjbGFzcy5uZy10b3VjaGVkXSc6ICdfc2hvdWxkRm9yd2FyZChcInRvdWNoZWRcIiknLFxuICAgICdbY2xhc3MubmctcHJpc3RpbmVdJzogJ19zaG91bGRGb3J3YXJkKFwicHJpc3RpbmVcIiknLFxuICAgICdbY2xhc3MubmctZGlydHldJzogJ19zaG91bGRGb3J3YXJkKFwiZGlydHlcIiknLFxuICAgICdbY2xhc3MubmctdmFsaWRdJzogJ19zaG91bGRGb3J3YXJkKFwidmFsaWRcIiknLFxuICAgICdbY2xhc3MubmctaW52YWxpZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJpbnZhbGlkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXBlbmRpbmddJzogJ19zaG91bGRGb3J3YXJkKFwicGVuZGluZ1wiKScsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIF92YWx1ZTogYW55O1xuICBfZWxlbWVudFR5cGU6ICdpbnB1dCcgfCAndGV4dGFyZWEnO1xuICBfaW5wdXRDb2xvciA9ICdwcmltYXJ5JztcbiAgY3VycmVudFZhbHVlOiBhbnk7XG4gIHByaXZhdGUgcGFsZXR0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNoYW5nZWQgPSBuZXcgQXJyYXk8KHZhbHVlOiBhbnkpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgdG91Y2hlZCA9IG5ldyBBcnJheTwoKSA9PiB2b2lkPigpO1xuICBAQ29udGVudENoaWxkKEx5RmllbGREaXJlY3RpdmUpIF9maWVsZDogTHlGaWVsZERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChMeVBsYWNlaG9sZGVyKSBseVBsYWNlaG9sZGVyOiBMeVBsYWNlaG9sZGVyO1xuICBAQ29udGVudENoaWxkKEx5RGVmYXVsdCkgbHlEZWZhdWx0OiBMeURlZmF1bHQ7XG4gIEBDb250ZW50Q2hpbGQoTHlMYWJlbCkgbHlMYWJlbDogTHlMYWJlbDtcbiAgQElucHV0KCkgdHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgQElzQm9vbGVhbigpIGxhYmVsQWJvdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRlZmF1bHQ6IHN0cmluZztcbiAgX2Vycm9yU3RhdGU6IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyQ29udGFpbmVyOiBhbnk7XG4gIGxhYmVsQ29udGFpbmVyOiBhbnk7XG4gIGZvY3VzU3RhdGVTdXNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBfY2xhc3Nlczoge1xuICAgIGNhcmV0Q29sb3I/OiBzdHJpbmcsXG4gICAgd2l0aENvbG9yPzogc3RyaW5nXG4gIH0gPSB7fTtcbiAgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgIHRoaXMudXBkYXRlQ29sb3IodmFsKTtcbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1sYWJlbC1hYm92ZScpXG4gIGdldCBpc0Zsb2F0aW5nTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlU3RhdGUgfHwgdGhpcy5sYWJlbEFib3ZlIHx8IHRoaXMuaXNEZWZhdWx0IHx8IHRoaXMuZm9jdXNTdGF0ZTtcbiAgfVxuXG4gIGdldCBwbGFjZWhvbGRlclN0YXRlKCkge1xuICAgIHJldHVybiAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiB0aGlzLmZvY3VzU3RhdGUgfHwgIXRoaXMuY3VycmVudFZhbHVlU3RhdGUgJiYgIXRoaXMuZm9jdXNTdGF0ZSAmJiB0aGlzLmlzRmxvYXRpbmdMYWJlbDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWZvY3VzLWFjdGl2ZScpIGZvY3VzU3RhdGU6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktaGlkZGVuLWlucHV0JylcbiAgZ2V0IGRlZmF1bHRPZmYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLmRlZmF1bHQgJiYgIXRoaXMuZm9jdXNTdGF0ZSB8fCAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiAhdGhpcy5mb2N1c1N0YXRlO1xuICB9XG5cbiAgQElucHV0KCkgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZmllbGQuZGlzYWJsZWQ7IH1cblxuICBASW5wdXQoKSBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9maWVsZC5yZXF1aXJlZDsgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktdmFsdWUtb24nKVxuICBnZXQgY3VycmVudFZhbHVlU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChgJHt0aGlzLmN1cnJlbnRWYWx1ZX1gKS5sZW5ndGggIT09IDAgJiYgdGhpcy5jdXJyZW50VmFsdWUgIT0gbnVsbDtcbiAgfVxuXG4gIF92YWx1ZUJvb2xlYW4odmFsKSB7XG4gICAgcmV0dXJuICEodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gZmFsc2UgfHwgdmFsID09PSAnJyk7XG4gIH1cblxuICBfaXNFcnJvclN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wuaW52YWxpZCAmJiB0aGlzLl9maWVsZC5fbmdDb250cm9sLnRvdWNoZWQgfHwgdGhpcy5fZXJyb3JTdGF0ZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVFcnJvcigpIHtcbiAgICB0aGlzLl9lcnJvclN0YXRlID0gdGhpcy5fZmllbGQuX25nQ29udHJvbC5pbnZhbGlkO1xuICB9XG5cbiAgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIGJjcjogTHlDb21tb24sXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGNvbnN0IGlucHV0Q29sb3IgPSAoKSA9PiB0aGlzLnRoZW1lLmNvbG9yT2YodmFsKTtcbiAgICB0aGlzLl9jbGFzc2VzLmNhcmV0Q29sb3IgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgaW5wdXQ6Y2FyZXQke3ZhbH1gLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGNhcmV0LWNvbG9yOiR7aW5wdXRDb2xvcigpfWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5fY2xhc3Nlcy53aXRoQ29sb3IgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgaW5wdXQ6JHt2YWx9YCwge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBjb2xvcjoke2lucHV0Q29sb3IoKX07YCArXG4gICAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy5pbnB1dC51bmRlcmxpbmV9O2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICB0b0Jvb2xlYW4odmFsOiBhbnkpIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGlzUGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih0aGlzLnBsYWNlaG9sZGVyKSB8fCAhIXRoaXMubHlQbGFjZWhvbGRlcjtcbiAgfVxuICBnZXQgaXNEZWZhdWx0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5kZWZhdWx0KSB8fCAhIXRoaXMubHlEZWZhdWx0O1xuICB9XG4gIGdldCBpc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5sYWJlbCkgfHwgISF0aGlzLmx5TGFiZWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yKHRoaXMudGhlbWUuY29uZmlnLmlucHV0LndpdGhDb2xvcik7XG4gICAgfVxuICAgIC8vIHRoaXMuX2lucHV0Q29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5fY29sb3IpO1xuICAgIHRoaXMuZm9jdXNTdGF0ZVN1c2NyaXB0aW9uID0gdGhpcy5fZmllbGQuZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGZTdGF0ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5mb2N1c1N0YXRlID0gZlN0YXRlO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLl9maWVsZC5fcGFyZW50KCkpIHtcbiAgICAgIHRoaXMuX2ZpZWxkLl9wYXJlbnQoKS5uZ1N1Ym1pdC5zdWJzY3JpYmUoKHN1Ym1pdCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUVycm9yKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlO1xuICAgICAgaWYgKHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wgJiYgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsO1xuICAgICAgICAgIHRoaXMuX2Vycm9yU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiByZXNldCBlcnJvciBvZiBzdWJtaXQgdG8gZmFsc2VcbiAgICAgICAgICAgKi9cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9maWVsZC5mb2N1c1N0YXRlLnN1YnNjcmliZSgoaXNGb2N1c2VkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVmYXVsdCkge1xuICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmRlZmF1bHQ7XG4gICAgICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9maWVsZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdMeUlucHV0OiBSZXF1aXJlIGlucHV0IG5hdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG91bGRGb3J3YXJkKHByb3A6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9maWVsZCA/IHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wgOiBudWxsO1xuICAgIHJldHVybiBjb250cm9sICYmIChjb250cm9sIGFzIGFueSlbcHJvcF07XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZGVmYXVsdCkge1xuICAgICAgaWYgKHRoaXMuaXNEZWZhdWx0ICYmICF0aGlzLmN1cnJlbnRWYWx1ZVN0YXRlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICB0aGlzLl9maWVsZC5fbmdDb250cm9sLnZpZXdUb01vZGVsVXBkYXRlKHRoaXMuZGVmYXVsdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZVN1c2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SW5wdXQsIEx5SW5wdXRDb250ZW50cywgTHlGaWVsZERpcmVjdGl2ZSwgTHlJbnB1dENvbW1vbiwgTHlEZWZhdWx0LCBMeUxhYmVsLCBMeVBsYWNlaG9sZGVyXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlJbnB1dCwgTHlJbnB1dENvbnRlbnRzLCBMeUZpZWxkRGlyZWN0aXZlLCBMeUlucHV0Q29tbW9uLCBMeURlZmF1bHQsIEx5TGFiZWwsIEx5UGxhY2Vob2xkZXJdLFxu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