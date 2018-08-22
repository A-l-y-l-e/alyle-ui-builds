/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, Self, Optional, ChangeDetectorRef } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
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
export { LyFieldDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHktZmllbGQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2lucHV0LyIsInNvdXJjZXMiOlsibHktZmllbGQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixZQUFZLEVBQ1osS0FBSyxFQUVMLElBQUksRUFDSixRQUFRLEVBR1IsaUJBQWlCLEVBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEyQjdCLDBCQUNTLFlBQ29CLFVBQXFCLEVBQzVCLFdBQW1CLEVBQ25CLGdCQUFvQyxFQUNoRDtRQUpELGVBQVUsR0FBVixVQUFVO1FBQ1UsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBQ2hELE9BQUUsR0FBRixFQUFFOzBCQTFCbUIsSUFBSSxPQUFPLEVBQUU7eUJBRXhCLEtBQUs7eUJBQ0wsS0FBSztLQXdCckI7Ozs7O0lBckI2QixnQ0FBSzs7OztJQUF0QyxVQUF1QyxTQUFrQjtRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNqQzs7Ozs7SUFDd0MsZ0NBQUs7Ozs7SUFBOUMsVUFBK0MsU0FBa0I7UUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDakM7Ozs7SUFDOEIsZ0NBQUs7OztJQUFwQyxlQUEwQztJQUUxQyxzQkFDSSxzQ0FBUTs7OztRQURaLGNBQ2lCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7Ozs7UUFDdEYsVUFBYSxLQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzs7T0FEOEI7SUFFdEYsc0JBQ0ksc0NBQVE7Ozs7UUFEWixjQUNpQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Ozs7O1FBQ3JGLFVBQWEsS0FBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7O09BRDZCOzs7O0lBVXJGLHVDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCxrQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ2xEOzs7O0lBQ1MsNENBQWlCOzs7SUFBM0I7O1FBRUUsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7O1FBRXpELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxtQkFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQXNCLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7Ozs7O0tBT2pGOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxPQUE2Qzs7OztLQUl4RDs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDNUI7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztpQkFDakQ7Ozs7Z0JBakJDLFVBQVU7Z0JBWThCLFNBQVMsdUJBOEI5QyxRQUFRLFlBQUksSUFBSTtnQkE5QmdDLE1BQU0sdUJBK0J0RCxRQUFRO2dCQS9CUyxrQkFBa0IsdUJBZ0NuQyxRQUFRO2dCQW5DWCxpQkFBaUI7Ozt1QkFlaEIsS0FBSzt3QkFDTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO3dCQUc5QixZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO3dCQUc5QixZQUFZLFNBQUMsT0FBTzsyQkFFcEIsS0FBSzsyQkFHTCxLQUFLOzsyQkF0Q1I7O1NBb0JhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgU2VsZixcbiAgT3B0aW9uYWwsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nQ29udHJvbCwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pbnB1dCBpbnB1dCwgbHktdGV4dGFyZWEgdGV4dGFyZWEnXG59KVxuZXhwb3J0IGNsYXNzIEx5RmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGZvY3VzU3RhdGU6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBmb2N1c2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyd0cnVlJ10pIGZvY3VzKGlzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5uZXh0KGlzRm9jdXNlZCk7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnZmFsc2UnXSkgcHJpdmF0ZSBfYmx1cihpc0ZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUubmV4dChpc0ZvY3VzZWQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JykgcHJpdmF0ZSBfbm9vcCgpIHsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5kaXNhYmxlZCA6IHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gISEodmFsdWUpOyB9XG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHsgcmV0dXJuIHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5pbnZhbGlkIDogdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmVxdWlyZWQgPSAhISh2YWx1ZSk7IH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBfbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm1Hcm91cDogRm9ybUdyb3VwRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfcGFyZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEZvcm1Hcm91cCB8fCB0aGlzLl9wYXJlbnRGb3JtO1xuICB9XG4gIHByb3RlY3RlZCBfdXBkYXRlRXJyb3JTdGF0ZSgpIHtcbiAgICAvLyBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuZXJyb3JTdGF0ZTtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5fcGFyZW50Rm9ybTtcbiAgICAvLyBjb25zdCBtYXRjaGVyID0gdGhpcy5lcnJvclN0YXRlTWF0Y2hlciB8fCB0aGlzLl9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuX25nQ29udHJvbCA/IHRoaXMuX25nQ29udHJvbC5jb250cm9sIGFzIEZvcm1Db250cm9sIDogbnVsbDtcbiAgICAvLyBjb25zdCBuZXdTdGF0ZSA9IG1hdGNoZXIuaXNFcnJvclN0YXRlKGNvbnRyb2wsIHBhcmVudCk7XG5cbiAgICAvLyBpZiAobmV3U3RhdGUgIT09IG9sZFN0YXRlKSB7XG4gICAgLy8gICB0aGlzLmVycm9yU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAvLyAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICAvLyB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W2Zsb2F0TGFiZWw6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pIHtcbiAgICAvLyBpZiAoIWNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10pKVxuICAgIC8vIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZm9jdXNTdGF0ZS5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=