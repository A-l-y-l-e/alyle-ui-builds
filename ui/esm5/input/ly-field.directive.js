/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        // const oldState = this.errorState;
        var /** @type {?} */ parent = this._parentFormGroup || this._parentForm;
        // const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
        var /** @type {?} */ control = this._ngControl ? /** @type {?} */ (this._ngControl.control) : null;
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
        { type: ElementRef, },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self },] },
        { type: NgForm, decorators: [{ type: Optional },] },
        { type: FormGroupDirective, decorators: [{ type: Optional },] },
        { type: ChangeDetectorRef, },
    ]; };
    LyFieldDirective.propDecorators = {
        "type": [{ type: Input },],
        "focus": [{ type: HostListener, args: ['focus', ['true'],] },],
        "_blur": [{ type: HostListener, args: ['blur', ['false'],] },],
        "_noop": [{ type: HostListener, args: ['input',] },],
        "disabled": [{ type: Input },],
        "required": [{ type: Input },],
    };
    return LyFieldDirective;
}());
export { LyFieldDirective };
function LyFieldDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyFieldDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyFieldDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyFieldDirective.propDecorators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHktZmllbGQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2lucHV0LyIsInNvdXJjZXMiOlsibHktZmllbGQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixZQUFZLEVBQ1osS0FBSyxFQUVMLElBQUksRUFDSixRQUFRLEVBR1IsaUJBQWlCLEVBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEyQjdCLDBCQUNTLFlBQ29CLFlBQ1AsYUFDQSxrQkFDWjtRQUpELGVBQVUsR0FBVixVQUFVO1FBQ1UsZUFBVSxHQUFWLFVBQVU7UUFDakIsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUM1QixPQUFFLEdBQUYsRUFBRTswQkExQm1CLElBQUksT0FBTyxFQUFFO3lCQUV4QixLQUFLO3lCQUNMLEtBQUs7S0F3QnJCOzs7OztJQXJCNkIsZ0NBQUs7Ozs7Y0FBQyxTQUFrQjtRQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7O0lBRU8sZ0NBQUs7Ozs7Y0FBQyxTQUFrQjtRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7SUFFSCxnQ0FBSzs7OzswQkFHaEMsc0NBQVE7Ozs7c0JBQUssT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7UUFDcEYsVUFBYSxLQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzs7OzBCQUVwRCxzQ0FBUTs7OztzQkFBSyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7OztRQUNuRixVQUFhLEtBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Ozs7Ozs7SUFTeEQsdUNBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELGtDQUFPOzs7SUFBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDbEQ7Ozs7SUFDUyw0Q0FBaUI7OztJQUEzQjs7UUFFRSxxQkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7O1FBRXpELHFCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsbUJBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFzQixFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Ozs7OztLQU9qRjs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksT0FBNkM7Ozs7S0FJeEQ7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzVCOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQ0FBc0M7aUJBQ2pEOzs7O2dCQWpCQyxVQUFVO2dCQVk4QixTQUFTLHVCQThCOUMsUUFBUSxZQUFJLElBQUk7Z0JBOUJnQyxNQUFNLHVCQStCdEQsUUFBUTtnQkEvQlMsa0JBQWtCLHVCQWdDbkMsUUFBUTtnQkFuQ1gsaUJBQWlCOzs7eUJBZWhCLEtBQUs7MEJBQ0wsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQzswQkFHOUIsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQzswQkFHOUIsWUFBWSxTQUFDLE9BQU87NkJBRXBCLEtBQUs7NkJBR0wsS0FBSzs7MkJBdENSOztTQW9CYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFNlbGYsXG4gIE9wdGlvbmFsLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0NvbnRyb2wsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktaW5wdXQgaW5wdXQsIGx5LXRleHRhcmVhIHRleHRhcmVhJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUZpZWxkRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBmb2N1c1N0YXRlOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgZm9jdXNlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsndHJ1ZSddKSBmb2N1cyhpc0ZvY3VzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUubmV4dChpc0ZvY3VzZWQpO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInLCBbJ2ZhbHNlJ10pIHByaXZhdGUgX2JsdXIoaXNGb2N1c2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5mb2N1c1N0YXRlLm5leHQoaXNGb2N1c2VkKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIHByaXZhdGUgX25vb3AoKSB7IH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9uZ0NvbnRyb2wgPyB0aGlzLl9uZ0NvbnRyb2wuZGlzYWJsZWQgOiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkgeyB0aGlzLl9kaXNhYmxlZCA9ICEhKHZhbHVlKTsgfVxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7IHJldHVybiB0aGlzLl9uZ0NvbnRyb2wgPyB0aGlzLl9uZ0NvbnRyb2wuaW52YWxpZCA6IHRoaXMuX3JlcXVpcmVkOyB9XG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYW55KSB7IHRoaXMuX3JlcXVpcmVkID0gISEodmFsdWUpOyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgX25nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3BhcmVudEZvcm06IE5nRm9ybSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9wYXJlbnRGb3JtR3JvdXA6IEZvcm1Hcm91cERpcmVjdGl2ZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgX3BhcmVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnRGb3JtR3JvdXAgfHwgdGhpcy5fcGFyZW50Rm9ybTtcbiAgfVxuICBwcm90ZWN0ZWQgX3VwZGF0ZUVycm9yU3RhdGUoKSB7XG4gICAgLy8gY29uc3Qgb2xkU3RhdGUgPSB0aGlzLmVycm9yU3RhdGU7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5fcGFyZW50Rm9ybUdyb3VwIHx8IHRoaXMuX3BhcmVudEZvcm07XG4gICAgLy8gY29uc3QgbWF0Y2hlciA9IHRoaXMuZXJyb3JTdGF0ZU1hdGNoZXIgfHwgdGhpcy5fZGVmYXVsdEVycm9yU3RhdGVNYXRjaGVyO1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLl9uZ0NvbnRyb2wgPyB0aGlzLl9uZ0NvbnRyb2wuY29udHJvbCBhcyBGb3JtQ29udHJvbCA6IG51bGw7XG4gICAgLy8gY29uc3QgbmV3U3RhdGUgPSBtYXRjaGVyLmlzRXJyb3JTdGF0ZShjb250cm9sLCBwYXJlbnQpO1xuXG4gICAgLy8gaWYgKG5ld1N0YXRlICE9PSBvbGRTdGF0ZSkge1xuICAgIC8vICAgdGhpcy5lcnJvclN0YXRlID0gbmV3U3RhdGU7XG4gICAgLy8gICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgLy8gfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1tmbG9hdExhYmVsOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gICAgLy8gaWYgKCFjaGFuZ2VzWydwbGFjZWhvbGRlciddLmZpcnN0Q2hhbmdlKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjaGFuZ2VzWydwbGFjZWhvbGRlciddKSlcbiAgICAvLyB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmZvY3VzU3RhdGUuY29tcGxldGUoKTtcbiAgfVxufVxuIl19