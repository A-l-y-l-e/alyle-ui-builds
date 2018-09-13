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
export class LyInputCommon {
}
LyInputCommon.decorators = [
    { type: Directive, args: [{
                selector: 'ly-default, ly-before, ly-after, ly-input ly-error, ly-input ly-hint'
            },] },
];
export class LyPlaceholder {
}
LyPlaceholder.decorators = [
    { type: Directive, args: [{
                selector: 'ly-placeholder'
            },] },
];
export class LyDefault {
}
LyDefault.decorators = [
    { type: Directive, args: [{
                selector: 'ly-default'
            },] },
];
export class LyLabel {
}
LyLabel.decorators = [
    { type: Directive, args: [{
                selector: 'ly-label'
            },] },
];
export class LyInput {
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
tslib_1.__decorate([
    IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], LyInput.prototype, "labelAbove", void 0);
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
export class LyInputModule {
}
LyInputModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, LyCommonModule],
                exports: [LyInput, LyInputContents, LyFieldDirective, LyInputCommon, LyDefault, LyLabel, LyPlaceholder],
                declarations: [LyInput, LyInputContents, LyFieldDirective, LyInputCommon, LyDefault, LyLabel, LyPlaceholder],
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaW5wdXQvIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsU0FBUyxFQUdULFlBQVksRUFFWixRQUFRLEVBQ1IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixXQUFXLEVBR1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsV0FBVyxHQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBS3hELE1BQU07OztZQUhMLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0VBQXNFO2FBQ2pGOztBQU1ELE1BQU07OztZQUhMLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOztBQU1ELE1BQU07OztZQUhMLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7QUFNRCxNQUFNOzs7WUFITCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7O0FBaUVELE1BQU07Ozs7Ozs7O0lBMEVKLFlBQ1UsT0FDQSxvQkFDSSxHQUFhLEVBQ3pCLFFBQW1CLEVBQ25CLFVBQXNCO1FBSmQsVUFBSyxHQUFMLEtBQUs7UUFDTCx1QkFBa0IsR0FBbEIsa0JBQWtCOzJCQXpFZCxTQUFTO3VCQUdMLElBQUksS0FBSyxFQUF3Qjt1QkFDakMs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QUFZLFNBQUMsYUFBYTt3QkFDMUIsWUFBWSxTQUFDLFNBQVM7c0JBQ3RCLFlBQVksU0FBQyxPQUFPO21CQUNwQixLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBVUwsS0FBSzs4QkFRTCxXQUFXLFNBQUMsc0JBQXNCO3lCQVFsQyxXQUFXLFNBQUMsdUJBQXVCO3lCQUNuQyxXQUFXLFNBQUMsdUJBQXVCO3VCQUtuQyxLQUFLO3VCQUVMLEtBQUs7Z0NBRUwsV0FBVyxTQUFDLG1CQUFtQjs7O0lBckN0QixTQUFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4SnZCLE1BQU07OztZQUxMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQztnQkFDcEQsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUM7Z0JBQ3ZHLFlBQVksRUFBRSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDO2FBQzdHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE5nTW9kdWxlLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXMsXG4gIENvbnRlbnRDaGlsZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT3B0aW9uYWwsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgRm9ybXNNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlLCBMeVRoZW1lMiwgSXNCb29sZWFuLCB0b0Jvb2xlYW4sIEx5Q29tbW9uIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5SW5wdXRDb250ZW50cyB9IGZyb20gJy4vaW5wdXQtY29udGVudHMnO1xuaW1wb3J0IHsgTHlGaWVsZERpcmVjdGl2ZSB9IGZyb20gJy4vbHktZmllbGQuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGVmYXVsdCwgbHktYmVmb3JlLCBseS1hZnRlciwgbHktaW5wdXQgbHktZXJyb3IsIGx5LWlucHV0IGx5LWhpbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5SW5wdXRDb21tb24ge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktcGxhY2Vob2xkZXInXG59KVxuZXhwb3J0IGNsYXNzIEx5UGxhY2Vob2xkZXIge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGVmYXVsdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlEZWZhdWx0IHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWxhYmVsJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUxhYmVsIHt9XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGV4dC1maWVsZCwgbHktaW5wdXQsIGx5LXRleHRhcmVhJyxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCAvZGVlcC8gbHktYWZ0ZXIsOmhvc3QgL2RlZXAvIGx5LWJlZm9yZXtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjppbmhlcml0fTpob3N0IC9kZWVwLyBpbnB1dCw6aG9zdCAvZGVlcC8gdGV4dGFyZWF7Ym9yZGVyOm5vbmU7b3V0bGluZTowO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOjAgMDtmb250LXNpemU6aW5oZXJpdDt3aWR0aDoxMDAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUtZmxleH06aG9zdC5seS1kZWZhdWx0LW9mZiAubHktaW5wdXQtZGVmYXVsdCw6aG9zdC5seS1oaWRkZW4taW5wdXQgL2RlZXAvIC5seS1pbnB1dC1jb250YWluZXIgaW5wdXQsOmhvc3QubHktaGlkZGVuLWlucHV0IC9kZWVwLyAubHktaW5wdXQtY29udGFpbmVyIHRleHRhcmVhe29wYWNpdHk6MH06aG9zdC5seS1mb2N1cy1hY3RpdmUgLmx5LWlucHV0LXVuZGVybGluZTphZnRlcnt3aWR0aDoxMDAlfTpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAubHktaW5wdXQtdG9wLWxhYmVsLDpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAvZGVlcC8gbHktdG9wLWxhYmVse2ZvbnQtc2l6ZTo3NSU7dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLDApfTpob3N0Lmx5LWZvY3VzLWFjdGl2ZSAubHktaW5wdXQtZGVmYXVsdHtvcGFjaXR5OjB9Omhvc3QubHktdmFsdWUtb24gLmx5LWlucHV0LXBsYWNlaG9sZGVye29wYWNpdHk6MH0ubHktaW5wdXQtdW5kZXJsaW5le3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTouODc1ZW07aGVpZ2h0OjFweDtyaWdodDowO2xlZnQ6MH0ubHktaW5wdXQtdW5kZXJsaW5lOmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MCU7aGVpZ2h0OjJweDtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjtsZWZ0OjA7cmlnaHQ6MDttYXJnaW46MCBhdXRvO2JvdHRvbTowO3RyYW5zaXRpb246NDUwbXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKX0ubHktaW5wdXQtdW5kZXJsaW5lLmx5LWRpc2FibGVke2JhY2tncm91bmQ6MC80cHggMXB4IHJlcGVhdC14O2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNiNGI0YjQgMCwjYjRiNGI0IDMzJSx0cmFuc3BhcmVudCAwKTtib3JkZXItdG9wOjB9Lmx5LWlucHV0LXVuZGVybGluZS5seS1kaXNhYmxlZDphZnRlcnt3aWR0aDowJX06aG9zdC5seS1sYWJlbC1hYm92ZSAubHktaW5wdXQtZmxvYXQtbGFiZWx7Zm9udC1zaXplOjc1JTt0b3A6MH0ubHktaW5wdXQtZGVmYXVsdCwubHktaW5wdXQtZmxvYXQtbGFiZWwsLmx5LWlucHV0LXBsYWNlaG9sZGVye3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjEuMTI1ZW07dG9wOjEuMTI1ZW07bWFyZ2luOmF1dG87Zm9udC1zaXplOjEwMCU7dHJhbnNpdGlvbjozNzVtcyBjdWJpYy1iZXppZXIoLjIzLDEsLjMyLDEpO2NvbG9yOmluaGVyaXQ7d2lkdGg6MTAwJX0ubHktaW5wdXQtY29udGVudHt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtjb2xvcjpjdXJyZW50Q29sb3J9Lmx5LWlucHV0LWNvbnRhaW5lcntwYWRkaW5nOjEuMTI1ZW0gMDtwb3NpdGlvbjpyZWxhdGl2ZTtvcGFjaXR5OjE7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246aW5oZXJpdDt3aWR0aDoxMDAlfS5seS1pbnB1dC1jb250YWluZXIgOjpuZy1kZWVwIGlucHV0e3RleHQtYWxpZ246aW5oZXJpdH0uYm90dG9tLWZpZWxkLC5seS1lcnJvci1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3dpZHRoOjEwMCU7cG9pbnRlci1ldmVudHM6bm9uZTtmb250LXNpemU6NzUlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsY2FsYygxMDAlIC0gMS4xZW0pLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLGNhbGMoMTAwJSAtIDEuMWVtKSwwKTtkaXNwbGF5OmZsZXh9LmJvdHRvbS1maWVsZCAuYm90dG9tLWZpZWxkLXNwYWNlLC5seS1lcnJvci1jb250YWluZXIgLmJvdHRvbS1maWVsZC1zcGFjZXtmbGV4OjF9Lmx5LXJlcXVpcmVke3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxLjEyNWVtO3JpZ2h0OjA7cG9pbnRlci1ldmVudHM6bm9uZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5Oi40NX06aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC1mbG9hdC1sYWJlbCw6aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC1wbGFjZWhvbGRlciw6aG9zdC5seS1pbnB1dC1pbnZhbGlkIC5seS1pbnB1dC11bmRlcmxpbmUsOmhvc3QubHktaW5wdXQtaW52YWxpZCAvZGVlcC8gbHktZXJyb3J7Y29sb3I6I2Y0NDMzNiFpbXBvcnRhbnR9Omhvc3QubHktaW5wdXQtaW52YWxpZCAubHktaW5wdXQtdW5kZXJsaW5lOmFmdGVye3dpZHRoOjEwMCV9YF0sXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktYmVmb3JlXCI+PC9uZy1jb250ZW50PlxyXG48ZGl2IGNsYXNzPVwie3sgX2NsYXNzZXMud2l0aENvbG9yIH19IGx5LWlucHV0LXVuZGVybGluZVwiPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibHktaW5wdXQtY29udGFpbmVyIHt7IF9jbGFzc2VzLmNhcmV0Q29sb3IgfX1cIj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJpbnB1dCwgdGV4dGFyZWFcIj48L25nLWNvbnRlbnQ+XHJcbiAgPCEtLSBseS1wbGFjZWhvbGRlciAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicGxhY2Vob2xkZXI7IHRoZW4gaXNQbGFjZWhvbGRlclRlbXBsYXRlOyBlbHNlIHBsYWNlaG9sZGVyQ29udGFpbmVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlICNpc1BsYWNlaG9sZGVyVGVtcGxhdGU+XHJcbiAgICA8ZGl2ICpuZ0lmPVwidG9Cb29sZWFuKHBsYWNlaG9sZGVyKSAhPT0gdW5kZWZpbmVkICYmIHBsYWNlaG9sZGVyU3RhdGVcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1wbGFjZWhvbGRlclwiPnt7IHBsYWNlaG9sZGVyIH19PC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgI3BsYWNlaG9sZGVyQ29udGFpbmVyPlxyXG4gICAgPGRpdiAqbmdJZj1cImx5UGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCAmJiBwbGFjZWhvbGRlclN0YXRlXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtcGxhY2Vob2xkZXJcIj5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktcGxhY2Vob2xkZXJcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG4gIDwhLS0gbHktZGVmYXVsdCAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidG9Cb29sZWFuKGRlZmF1bHQpOyB0aGVuIGlzRGVmYXVsdFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlICNpc0RlZmF1bHRUZW1wbGF0ZT5cclxuICAgIDxkaXYgKm5nSWY9XCIhKGx5RGVmYXVsdCAhPT0gdW5kZWZpbmVkKSAmJiBkZWZhdWx0T2ZmXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZGVmYXVsdFwiPkRlZmF1bHQ6IHt7IGRlZmF1bHQgfX08L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCJseURlZmF1bHQgIT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0T2ZmXCIgY29sb3I9XCJpbnB1dDpsYWJlbFwiIGNsYXNzPVwibHktaW5wdXQtZGVmYXVsdFwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1kZWZhdWx0XCI+PC9uZy1jb250ZW50Pnt7IGRlZmF1bHQgfX1cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPCEtLSBseS1sYWJlbCAtLT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidG9Cb29sZWFuKGxhYmVsKTsgdGhlbiBfaXNMYWJlbFRlbXBsYXRlOyBlbHNlIGxhYmVsQ29udGFpbmVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlICNfaXNMYWJlbFRlbXBsYXRlPlxyXG4gICAgPGRpdiAqbmdJZj1cImxhYmVsICE9PSB1bmRlZmluZWRcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1mbG9hdC1sYWJlbFwiPnt7IGxhYmVsIH19PC9kaXY+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgI2xhYmVsQ29udGFpbmVyPlxyXG4gICAgPGRpdiAqbmdJZj1cImx5TGFiZWxcIiBjb2xvcj1cImlucHV0OmxhYmVsXCIgY2xhc3M9XCJseS1pbnB1dC1mbG9hdC1sYWJlbFwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJseS1sYWJlbFwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwibHktaWNvbi1yZXF1aXJlZFwiICpuZ0lmPVwicmVxdWlyZWRcIj48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImJvdHRvbS1maWVsZFwiICpuZ0lmPVwiIV9pc0Vycm9yU3RhdGUoKVwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImx5LWhpbnRbYWxpZ249c3RhcnRdLCBseS1oaW50Om5vdChseS1oaW50W2FsaWduXSlcIj48L25nLWNvbnRlbnQ+XHJcbiAgPHNwYW4gY2xhc3M9XCJib3R0b20tZmllbGQtc3BhY2VcIj48L3NwYW4+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktaGludFthbGlnbj1lbmRdXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImJvdHRvbS1maWVsZFwiICpuZ0lmPVwiX2lzRXJyb3JTdGF0ZSgpXCI+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktZXJyb3JcIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG48bmctY29udGVudCBzZWxlY3Q9XCJseS1hZnRlclwiPjwvbmctY29udGVudD5cclxuYCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5seS1pbnB1dC1pbnZhbGlkXSc6ICdfaXNFcnJvclN0YXRlKCknLFxuICAgICdbY2xhc3MubmctdW50b3VjaGVkXSc6ICdfc2hvdWxkRm9yd2FyZChcInVudG91Y2hlZFwiKScsXG4gICAgJ1tjbGFzcy5uZy10b3VjaGVkXSc6ICdfc2hvdWxkRm9yd2FyZChcInRvdWNoZWRcIiknLFxuICAgICdbY2xhc3MubmctcHJpc3RpbmVdJzogJ19zaG91bGRGb3J3YXJkKFwicHJpc3RpbmVcIiknLFxuICAgICdbY2xhc3MubmctZGlydHldJzogJ19zaG91bGRGb3J3YXJkKFwiZGlydHlcIiknLFxuICAgICdbY2xhc3MubmctdmFsaWRdJzogJ19zaG91bGRGb3J3YXJkKFwidmFsaWRcIiknLFxuICAgICdbY2xhc3MubmctaW52YWxpZF0nOiAnX3Nob3VsZEZvcndhcmQoXCJpbnZhbGlkXCIpJyxcbiAgICAnW2NsYXNzLm5nLXBlbmRpbmddJzogJ19zaG91bGRGb3J3YXJkKFwicGVuZGluZ1wiKScsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeUlucHV0IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIF92YWx1ZTogYW55O1xuICBfZWxlbWVudFR5cGU6ICdpbnB1dCcgfCAndGV4dGFyZWEnO1xuICBfaW5wdXRDb2xvciA9ICdwcmltYXJ5JztcbiAgY3VycmVudFZhbHVlOiBhbnk7XG4gIHByaXZhdGUgcGFsZXR0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNoYW5nZWQgPSBuZXcgQXJyYXk8KHZhbHVlOiBhbnkpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgdG91Y2hlZCA9IG5ldyBBcnJheTwoKSA9PiB2b2lkPigpO1xuICBAQ29udGVudENoaWxkKEx5RmllbGREaXJlY3RpdmUpIF9maWVsZDogTHlGaWVsZERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChMeVBsYWNlaG9sZGVyKSBseVBsYWNlaG9sZGVyOiBMeVBsYWNlaG9sZGVyO1xuICBAQ29udGVudENoaWxkKEx5RGVmYXVsdCkgbHlEZWZhdWx0OiBMeURlZmF1bHQ7XG4gIEBDb250ZW50Q2hpbGQoTHlMYWJlbCkgbHlMYWJlbDogTHlMYWJlbDtcbiAgQElucHV0KCkgdHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgQElzQm9vbGVhbigpIGxhYmVsQWJvdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRlZmF1bHQ6IHN0cmluZztcbiAgX2Vycm9yU3RhdGU6IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyQ29udGFpbmVyOiBhbnk7XG4gIGxhYmVsQ29udGFpbmVyOiBhbnk7XG4gIGZvY3VzU3RhdGVTdXNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBfY2xhc3Nlczoge1xuICAgIGNhcmV0Q29sb3I/OiBzdHJpbmcsXG4gICAgd2l0aENvbG9yPzogc3RyaW5nXG4gIH0gPSB7fTtcbiAgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgIHRoaXMudXBkYXRlQ29sb3IodmFsKTtcbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5seS1sYWJlbC1hYm92ZScpXG4gIGdldCBpc0Zsb2F0aW5nTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlU3RhdGUgfHwgdGhpcy5sYWJlbEFib3ZlIHx8IHRoaXMuaXNEZWZhdWx0IHx8IHRoaXMuZm9jdXNTdGF0ZTtcbiAgfVxuXG4gIGdldCBwbGFjZWhvbGRlclN0YXRlKCkge1xuICAgIHJldHVybiAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiB0aGlzLmZvY3VzU3RhdGUgfHwgIXRoaXMuY3VycmVudFZhbHVlU3RhdGUgJiYgIXRoaXMuZm9jdXNTdGF0ZSAmJiB0aGlzLmlzRmxvYXRpbmdMYWJlbDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmx5LWZvY3VzLWFjdGl2ZScpIGZvY3VzU3RhdGU6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktaGlkZGVuLWlucHV0JylcbiAgZ2V0IGRlZmF1bHRPZmYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLmRlZmF1bHQgJiYgIXRoaXMuZm9jdXNTdGF0ZSB8fCAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSAmJiAhdGhpcy5mb2N1c1N0YXRlO1xuICB9XG5cbiAgQElucHV0KCkgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZmllbGQuZGlzYWJsZWQ7IH1cblxuICBASW5wdXQoKSBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9maWVsZC5yZXF1aXJlZDsgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubHktdmFsdWUtb24nKVxuICBnZXQgY3VycmVudFZhbHVlU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChgJHt0aGlzLmN1cnJlbnRWYWx1ZX1gKS5sZW5ndGggIT09IDAgJiYgdGhpcy5jdXJyZW50VmFsdWUgIT0gbnVsbDtcbiAgfVxuXG4gIF92YWx1ZUJvb2xlYW4odmFsKSB7XG4gICAgcmV0dXJuICEodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkIHx8IHZhbCA9PT0gZmFsc2UgfHwgdmFsID09PSAnJyk7XG4gIH1cblxuICBfaXNFcnJvclN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9maWVsZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wuaW52YWxpZCAmJiB0aGlzLl9maWVsZC5fbmdDb250cm9sLnRvdWNoZWQgfHwgdGhpcy5fZXJyb3JTdGF0ZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVFcnJvcigpIHtcbiAgICB0aGlzLl9lcnJvclN0YXRlID0gdGhpcy5fZmllbGQuX25nQ29udHJvbC5pbnZhbGlkO1xuICB9XG5cbiAgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIGJjcjogTHlDb21tb24sXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb2xvcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2NsYXNzZXMuY2FyZXRDb2xvciA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICBgaW5wdXQ6Y2FyZXQke3ZhbH1gLCB0aGVtZSA9PiBgY2FyZXQtY29sb3I6JHt0aGVtZS5jb2xvck9mKHZhbCl9YFxuICAgICk7XG4gICAgdGhpcy5fY2xhc3Nlcy53aXRoQ29sb3IgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgYGlucHV0OiR7dmFsfWAsIHRoZW1lID0+IChcbiAgICAgICAgYGNvbG9yOiR7dGhlbWUuY29sb3JPZih2YWwpfTtgICtcbiAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGVtZS5pbnB1dC51bmRlcmxpbmV9O2BcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgdG9Cb29sZWFuKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBpc1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0b0Jvb2xlYW4odGhpcy5wbGFjZWhvbGRlcikgfHwgISF0aGlzLmx5UGxhY2Vob2xkZXI7XG4gIH1cbiAgZ2V0IGlzRGVmYXVsdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMuZGVmYXVsdCkgfHwgISF0aGlzLmx5RGVmYXVsdDtcbiAgfVxuICBnZXQgaXNMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdG9Cb29sZWFuKHRoaXMubGFiZWwpIHx8ICEhdGhpcy5seUxhYmVsO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy51cGRhdGVDb2xvcih0aGlzLnRoZW1lLmNvbmZpZy5pbnB1dC53aXRoQ29sb3IpO1xuICAgIH1cbiAgICAvLyB0aGlzLl9pbnB1dENvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuX2NvbG9yKTtcbiAgICB0aGlzLmZvY3VzU3RhdGVTdXNjcmlwdGlvbiA9IHRoaXMuX2ZpZWxkLmZvY3VzU3RhdGUuc3Vic2NyaWJlKChmU3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuZm9jdXNTdGF0ZSA9IGZTdGF0ZTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5fZmllbGQuX3BhcmVudCgpKSB7XG4gICAgICB0aGlzLl9maWVsZC5fcGFyZW50KCkubmdTdWJtaXQuc3Vic2NyaWJlKChzdWJtaXQpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVFcnJvcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fZmllbGQpIHtcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZTtcbiAgICAgIGlmICh0aGlzLl9maWVsZC5fbmdDb250cm9sICYmIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbDtcbiAgICAgICAgICB0aGlzLl9lcnJvclN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogcmVzZXQgZXJyb3Igb2Ygc3VibWl0IHRvIGZhbHNlXG4gICAgICAgICAgICovXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fZmllbGQuZm9jdXNTdGF0ZS5zdWJzY3JpYmUoKGlzRm9jdXNlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0RlZmF1bHQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFZhbHVlU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUodGhpcy5kZWZhdWx0KTtcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkLl9uZ0NvbnRyb2wudmlld1RvTW9kZWxVcGRhdGUodGhpcy5kZWZhdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmllbGQubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTHlJbnB1dDogUmVxdWlyZSBpbnB1dCBuYXRpdmUnKTtcbiAgICB9XG4gIH1cblxuICBfc2hvdWxkRm9yd2FyZChwcm9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fZmllbGQgPyB0aGlzLl9maWVsZC5fbmdDb250cm9sIDogbnVsbDtcbiAgICByZXR1cm4gY29udHJvbCAmJiAoY29udHJvbCBhcyBhbnkpW3Byb3BdO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmRlZmF1bHQpIHtcbiAgICAgIGlmICh0aGlzLmlzRGVmYXVsdCAmJiAhdGhpcy5jdXJyZW50VmFsdWVTdGF0ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuZGVmYXVsdDtcbiAgICAgICAgdGhpcy5fZmllbGQuX25nQ29udHJvbC52aWV3VG9Nb2RlbFVwZGF0ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzU3RhdGVTdXNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUlucHV0LCBMeUlucHV0Q29udGVudHMsIEx5RmllbGREaXJlY3RpdmUsIEx5SW5wdXRDb21tb24sIEx5RGVmYXVsdCwgTHlMYWJlbCwgTHlQbGFjZWhvbGRlcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5SW5wdXQsIEx5SW5wdXRDb250ZW50cywgTHlGaWVsZERpcmVjdGl2ZSwgTHlJbnB1dENvbW1vbiwgTHlEZWZhdWx0LCBMeUxhYmVsLCBMeVBsYWNlaG9sZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJbnB1dE1vZHVsZSB7fVxuIl19