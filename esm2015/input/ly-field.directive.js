/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, Self, Optional, ChangeDetectorRef } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
export class LyFieldDirective {
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
if (false) {
    /** @type {?} */
    LyFieldDirective.prototype.focusState;
    /** @type {?} */
    LyFieldDirective.prototype.focused;
    /** @type {?} */
    LyFieldDirective.prototype._disabled;
    /** @type {?} */
    LyFieldDirective.prototype._required;
    /** @type {?} */
    LyFieldDirective.prototype._placeholder;
    /** @type {?} */
    LyFieldDirective.prototype.type;
    /** @type {?} */
    LyFieldDirective.prototype.elementRef;
    /** @type {?} */
    LyFieldDirective.prototype._ngControl;
    /** @type {?} */
    LyFieldDirective.prototype._parentForm;
    /** @type {?} */
    LyFieldDirective.prototype._parentFormGroup;
    /** @type {?} */
    LyFieldDirective.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHktZmllbGQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2lucHV0LyIsInNvdXJjZXMiOlsibHktZmllbGQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixZQUFZLEVBQ1osS0FBSyxFQUVMLElBQUksRUFDSixRQUFRLEVBR1IsaUJBQWlCLEVBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUsvQixNQUFNOzs7Ozs7OztJQXNCSixZQUNTLFlBQ29CLFVBQXFCLEVBQzVCLFdBQW1CLEVBQ25CLGdCQUFvQyxFQUNoRDtRQUpELGVBQVUsR0FBVixVQUFVO1FBQ1UsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBQ2hELE9BQUUsR0FBRixFQUFFOzBCQTFCbUIsSUFBSSxPQUFPLEVBQUU7eUJBRXhCLEtBQUs7eUJBQ0wsS0FBSztLQXdCckI7Ozs7O0lBckI2QixLQUFLLENBQUMsU0FBa0I7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDakM7Ozs7O0lBQ3dDLEtBQUssQ0FBQyxTQUFrQjtRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNqQzs7OztJQUM4QixLQUFLLE1BQU07Ozs7SUFFMUMsSUFDSSxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzs7OztJQUN0RixJQUFJLFFBQVEsQ0FBQyxLQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzs7O0lBQ3hELElBQ0ksUUFBUSxLQUFLLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7Ozs7SUFDckYsSUFBSSxRQUFRLENBQUMsS0FBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7OztJQVN4RCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ2xEOzs7O0lBQ1MsaUJBQWlCOztRQUV6QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQzs7UUFFekQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLG1CQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBc0IsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzs7Ozs7S0FPakY7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQTZDOzs7O0tBSXhEOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDNUI7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQzthQUNqRDs7OztZQWpCQyxVQUFVO1lBWThCLFNBQVMsdUJBOEI5QyxRQUFRLFlBQUksSUFBSTtZQTlCZ0MsTUFBTSx1QkErQnRELFFBQVE7WUEvQlMsa0JBQWtCLHVCQWdDbkMsUUFBUTtZQW5DWCxpQkFBaUI7OzttQkFlaEIsS0FBSztvQkFDTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO29CQUc5QixZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUc5QixZQUFZLFNBQUMsT0FBTzt1QkFFcEIsS0FBSzt1QkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBTZWxmLFxuICBPcHRpb25hbCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2ltcGxlQ2hhbmdlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdDb250cm9sLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWlucHV0IGlucHV0LCBseS10ZXh0YXJlYSB0ZXh0YXJlYSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgZm9jdXNTdGF0ZTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG4gIGZvY3VzZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJ3RydWUnXSkgZm9jdXMoaXNGb2N1c2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5mb2N1c1N0YXRlLm5leHQoaXNGb2N1c2VkKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWydmYWxzZSddKSBwcml2YXRlIF9ibHVyKGlzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5uZXh0KGlzRm9jdXNlZCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBwcml2YXRlIF9ub29wKCkgeyB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fbmdDb250cm9sID8gdGhpcy5fbmdDb250cm9sLmRpc2FibGVkIDogdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fZGlzYWJsZWQgPSAhISh2YWx1ZSk7IH1cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkgeyByZXR1cm4gdGhpcy5fbmdDb250cm9sID8gdGhpcy5fbmdDb250cm9sLmludmFsaWQgOiB0aGlzLl9yZXF1aXJlZDsgfVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGFueSkgeyB0aGlzLl9yZXF1aXJlZCA9ICEhKHZhbHVlKTsgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIF9uZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtOiBOZ0Zvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuICBtYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9wYXJlbnQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50Rm9ybUdyb3VwIHx8IHRoaXMuX3BhcmVudEZvcm07XG4gIH1cbiAgcHJvdGVjdGVkIF91cGRhdGVFcnJvclN0YXRlKCkge1xuICAgIC8vIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5lcnJvclN0YXRlO1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuICAgIC8vIGNvbnN0IG1hdGNoZXIgPSB0aGlzLmVycm9yU3RhdGVNYXRjaGVyIHx8IHRoaXMuX2RlZmF1bHRFcnJvclN0YXRlTWF0Y2hlcjtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5fbmdDb250cm9sID8gdGhpcy5fbmdDb250cm9sLmNvbnRyb2wgYXMgRm9ybUNvbnRyb2wgOiBudWxsO1xuICAgIC8vIGNvbnN0IG5ld1N0YXRlID0gbWF0Y2hlci5pc0Vycm9yU3RhdGUoY29udHJvbCwgcGFyZW50KTtcblxuICAgIC8vIGlmIChuZXdTdGF0ZSAhPT0gb2xkU3RhdGUpIHtcbiAgICAvLyAgIHRoaXMuZXJyb3JTdGF0ZSA9IG5ld1N0YXRlO1xuICAgIC8vICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtbZmxvYXRMYWJlbDogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xuICAgIC8vIGlmICghY2hhbmdlc1sncGxhY2Vob2xkZXInXS5maXJzdENoYW5nZSkge1xuICAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY2hhbmdlc1sncGxhY2Vob2xkZXInXSkpXG4gICAgLy8gfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5mb2N1c1N0YXRlLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==