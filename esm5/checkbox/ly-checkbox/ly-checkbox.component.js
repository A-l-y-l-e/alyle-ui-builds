/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return LyCheckbox; }),
    multi: true
};
/** @enum {number} */
var CheckboxState = {
    /** The initial state. */
    Init: 0,
    /** Checked state. */
    Checked: 1,
    /** Unchecked state. */
    Unchecked: 2,
    /** Indeterminate state. */
    Indeterminate: 3,
};
export { CheckboxState };
CheckboxState[CheckboxState.Init] = 'Init';
CheckboxState[CheckboxState.Checked] = 'Checked';
CheckboxState[CheckboxState.Unchecked] = 'Unchecked';
CheckboxState[CheckboxState.Indeterminate] = 'Indeterminate';
var LyCheckbox = /** @class */ (function () {
    function LyCheckbox() {
        this._currentCheckState = CheckboxState.Init;
        this.checked = false;
        this.change = new EventEmitter();
        this.indeterminateChange = new EventEmitter();
        this.onTouched = function () { };
        this._controlValueAccessorChangeFn = function (value) { };
    }
    /** Toggles the `checked` state of the checkbox. */
    /**
     * Toggles the `checked` state of the checkbox.
     * @return {?}
     */
    LyCheckbox.prototype.toggle = /**
     * Toggles the `checked` state of the checkbox.
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LyCheckbox.prototype._onChangeEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LyCheckbox.prototype._onInputClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var ev = /** @type {?} */ (event.target);
        this.checked = ev.checked;
        this._controlValueAccessorChangeFn(this.checked);
        console.log('_onInputClick', ev.checked);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LyCheckbox.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = !!value;
        console.log('value', this.checked);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LyCheckbox.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LyCheckbox.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        console.log('changes', changes);
        if (changes['src']) {
            // fn
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LyCheckbox.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    LyCheckbox.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LyCheckbox.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LyCheckbox.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    LyCheckbox.decorators = [
        { type: Component, args: [{
                    selector: 'ly-checkbox',
                    template: "<label>\n  <div class=\"ly-checkbox-container\">\n    <input #input\n           [hidden]=\"false\" type=\"checkbox\"\n           [id]=\"id\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [value]=\"value\"\n           [disabled]=\"disabled\"\n           [name]=\"name\"\n           [indeterminate]=\"indeterminate\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n  </div>\n</label>\n",
                    styles: [":host{display:inline-block}"],
                    providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    LyCheckbox.ctorParameters = function () { return []; };
    LyCheckbox.propDecorators = {
        id: [{ type: Input, args: ['id',] }],
        ariaLabel: [{ type: Input, args: ['attr.aria-label',] }],
        ariaLabelledby: [{ type: Input, args: ['attr.aria-labelledby',] }],
        required: [{ type: Input, args: ['required',] }],
        labelPosition: [{ type: Input, args: ['labelPosition',] }],
        color: [{ type: Input, args: ['color',] }],
        value: [{ type: Input, args: ['value',] }],
        name: [{ type: Input, args: ['name',] }],
        disabled: [{ type: Input, args: ['disabled',] }],
        checked: [{ type: Input, args: ['checked',] }],
        indeterminate: [{ type: Input, args: ['indeterminate',] }],
        change: [{ type: Output, args: ['change',] }],
        indeterminateChange: [{ type: Output, args: ['indeterminateChange',] }]
    };
    return LyCheckbox;
}());
export { LyCheckbox };
if (false) {
    /** @type {?} */
    LyCheckbox.prototype._currentCheckState;
    /** @type {?} */
    LyCheckbox.prototype.id;
    /** @type {?} */
    LyCheckbox.prototype.ariaLabel;
    /** @type {?} */
    LyCheckbox.prototype.ariaLabelledby;
    /** @type {?} */
    LyCheckbox.prototype.required;
    /** @type {?} */
    LyCheckbox.prototype.labelPosition;
    /** @type {?} */
    LyCheckbox.prototype.color;
    /** @type {?} */
    LyCheckbox.prototype.value;
    /** @type {?} */
    LyCheckbox.prototype.name;
    /** @type {?} */
    LyCheckbox.prototype.disabled;
    /** @type {?} */
    LyCheckbox.prototype.checked;
    /** @type {?} */
    LyCheckbox.prototype.indeterminate;
    /** @type {?} */
    LyCheckbox.prototype.change;
    /** @type {?} */
    LyCheckbox.prototype.indeterminateChange;
    /** @type {?} */
    LyCheckbox.prototype.onTouched;
    /** @type {?} */
    LyCheckbox.prototype._controlValueAccessorChangeFn;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHktY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2NoZWNrYm94LyIsInNvdXJjZXMiOlsibHktY2hlY2tib3gvbHktY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQU1ULEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLFdBQWEsa0NBQWtDLEdBQVE7SUFDckQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxVQUFVLEVBQVYsQ0FBVSxDQUFDO0lBQ3pDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQzs7OztJQUdBLE9BQUk7O0lBRUosVUFBTzs7SUFFUCxZQUFTOztJQUVULGdCQUFhOzs7NEJBTmIsSUFBSTs0QkFFSixPQUFPOzRCQUVQLFNBQVM7NEJBRVQsYUFBYTs7SUE2Q2I7a0NBbEI0QyxhQUFhLENBQUMsSUFBSTt1QkFZbEMsS0FBSztzQkFFYSxJQUFJLFlBQVksRUFBTzttQ0FDTyxJQUFJLFlBQVksRUFBVzt5QkFDaEYsZUFBUTs2Q0FDK0IsVUFBQyxLQUFLLEtBQU87S0FDMUQ7SUFFakIsbURBQW1EOzs7OztJQUNuRCwyQkFBTTs7OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDOUI7Ozs7O0lBRUQsbUNBQWM7Ozs7SUFBZCxVQUFlLEtBQVk7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3pCOzs7OztJQUNELGtDQUFhOzs7O0lBQWIsVUFBYyxLQUFZOztRQUN4QixJQUFNLEVBQUUscUJBQUcsS0FBSyxDQUFDLE1BQTBCLEVBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFDOzs7OztJQUVELCtCQUFVOzs7O0lBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBRUQscUNBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXdCO1FBQ3ZDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxFQUFFLENBQUM7S0FDekM7Ozs7O0lBQ0QsZ0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztTQUVuQjtLQUNGOzs7OztJQUVELHNDQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7O0lBRUQsNkJBQVE7OztJQUFSO0tBRUM7Ozs7SUFFRCx1Q0FBa0I7OztJQUFsQjtLQUVDOzs7O0lBQ0QsZ0NBQVc7OztJQUFYO0tBRUM7O2dCQXZGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSx1akJBaUJYO29CQUNDLE1BQU0sRUFBRSxDQUFDLDZCQUE2QixDQUFDO29CQUN2QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFDaEQ7Ozs7O3FCQUdFLEtBQUssU0FBQyxJQUFJOzRCQUVWLEtBQUssU0FBQyxpQkFBaUI7aUNBRXZCLEtBQUssU0FBQyxzQkFBc0I7MkJBQzVCLEtBQUssU0FBQyxVQUFVO2dDQUNoQixLQUFLLFNBQUMsZUFBZTt3QkFDckIsS0FBSyxTQUFDLE9BQU87d0JBQ2IsS0FBSyxTQUFDLE9BQU87dUJBQ2IsS0FBSyxTQUFDLE1BQU07MkJBQ1osS0FBSyxTQUFDLFVBQVU7MEJBQ2hCLEtBQUssU0FBQyxTQUFTO2dDQUNmLEtBQUssU0FBQyxlQUFlO3lCQUNyQixNQUFNLFNBQUMsUUFBUTtzQ0FDZixNQUFNLFNBQUMscUJBQXFCOztxQkF0RS9COztTQXNEYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBMWV9DSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMeUNoZWNrYm94KSxcbiAgbXVsdGk6IHRydWVcbn07XG5leHBvcnQgZW51bSBDaGVja2JveFN0YXRlIHtcbiAgLyoqIFRoZSBpbml0aWFsIHN0YXRlLiAqL1xuICBJbml0LFxuICAvKiogQ2hlY2tlZCBzdGF0ZS4gKi9cbiAgQ2hlY2tlZCxcbiAgLyoqIFVuY2hlY2tlZCBzdGF0ZS4gKi9cbiAgVW5jaGVja2VkLFxuICAvKiogSW5kZXRlcm1pbmF0ZSBzdGF0ZS4gKi9cbiAgSW5kZXRlcm1pbmF0ZSxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktY2hlY2tib3gnLFxuICB0ZW1wbGF0ZTogYDxsYWJlbD5cbiAgPGRpdiBjbGFzcz1cImx5LWNoZWNrYm94LWNvbnRhaW5lclwiPlxuICAgIDxpbnB1dCAjaW5wdXRcbiAgICAgICAgICAgW2hpZGRlbl09XCJmYWxzZVwiIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgIFtpZF09XCJpZFwiXG4gICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXG4gICAgICAgICAgIFtjaGVja2VkXT1cImNoZWNrZWRcIlxuICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiaW5kZXRlcm1pbmF0ZVwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCJcbiAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZGJ5XCJcbiAgICAgICAgICAgKGNoYW5nZSk9XCJfb25DaGFuZ2VFdmVudCgkZXZlbnQpXCJcbiAgICAgICAgICAgKGNsaWNrKT1cIl9vbklucHV0Q2xpY2soJGV2ZW50KVwiPlxuICA8L2Rpdj5cbjwvbGFiZWw+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2t9YF0sXG4gIHByb3ZpZGVyczogW0xZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3ggaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2N1cnJlbnRDaGVja1N0YXRlOiBDaGVja2JveFN0YXRlID0gQ2hlY2tib3hTdGF0ZS5Jbml0O1xuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2F0dHIuYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXR0ci5hcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xuICBASW5wdXQoJ3JlcXVpcmVkJykgcmVxdWlyZWQ6IHN0cmluZztcbiAgQElucHV0KCdsYWJlbFBvc2l0aW9uJykgbGFiZWxQb3NpdGlvbjogc3RyaW5nO1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCd2YWx1ZScpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2hlY2tlZCcpIGNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCdpbmRldGVybWluYXRlJykgaW5kZXRlcm1pbmF0ZTogc3RyaW5nO1xuICBAT3V0cHV0KCdjaGFuZ2UnKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2luZGV0ZXJtaW5hdGVDaGFuZ2UnKSBpbmRldGVybWluYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG4gIHByaXZhdGUgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKHZhbHVlKSA9PiB7fTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKiogVG9nZ2xlcyB0aGUgYGNoZWNrZWRgIHN0YXRlIG9mIHRoZSBjaGVja2JveC4gKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gIH1cblxuICBfb25DaGFuZ2VFdmVudChldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGV2ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5jaGVja2VkID0gZXYuY2hlY2tlZDtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMuY2hlY2tlZCk7XG4gICAgY29uc29sZS5sb2coJ19vbklucHV0Q2xpY2snLCBldi5jaGVja2VkKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgY29uc29sZS5sb2coJ3ZhbHVlJywgdGhpcy5jaGVja2VkKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlcycsIGNoYW5nZXMpO1xuICAgIGlmIChjaGFuZ2VzWydzcmMnXSkge1xuICAgICAgLy8gZm5cbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcblxuICB9XG5cbn1cbiJdfQ==