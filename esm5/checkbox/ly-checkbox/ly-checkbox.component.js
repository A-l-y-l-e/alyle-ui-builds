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
                    providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                    styles: [":host{display:inline-block}"]
                }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHktY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2NoZWNrYm94LyIsInNvdXJjZXMiOlsibHktY2hlY2tib3gvbHktY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQU1ULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLFdBQWEsa0NBQWtDLEdBQVE7SUFDckQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxVQUFVLEVBQVYsQ0FBVSxDQUFDO0lBQ3pDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQzs7OztJQUdBLE9BQUk7O0lBRUosVUFBTzs7SUFFUCxZQUFTOztJQUVULGdCQUFhOzs7NEJBTmIsSUFBSTs0QkFFSixPQUFPOzRCQUVQLFNBQVM7NEJBRVQsYUFBYTs7SUE0QmI7a0NBbEI0QyxhQUFhLENBQUMsSUFBSTtRQVk5RCxlQUE0QixLQUFLLENBQUM7UUFFbEMsY0FBOEMsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RSwyQkFBNEUsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN4RyxpQkFBdUIsZUFBUSxDQUFDOzZDQUM4QixVQUFDLEtBQUssS0FBTztLQUMxRDtJQUVqQixtREFBbUQ7Ozs7O0lBQ25ELDJCQUFNOzs7O0lBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUM5Qjs7Ozs7SUFFRCxtQ0FBYzs7OztJQUFkLFVBQWUsS0FBWTtRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDekI7Ozs7O0lBQ0Qsa0NBQWE7Ozs7SUFBYixVQUFjLEtBQVk7O1FBQ3hCLElBQU0sRUFBRSxxQkFBRyxLQUFLLENBQUMsTUFBMEIsRUFBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUM7Ozs7O0lBRUQsK0JBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNwQzs7Ozs7SUFFRCxxQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBd0I7UUFDdkMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEVBQUUsQ0FBQztLQUN6Qzs7Ozs7SUFDRCxnQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7O1NBRW5CO0tBQ0Y7Ozs7O0lBRUQsc0NBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7SUFFRCw2QkFBUTs7O0lBQVI7S0FFQzs7OztJQUVELHVDQUFrQjs7O0lBQWxCO0tBRUM7Ozs7SUFDRCxnQ0FBVzs7O0lBQVg7S0FFQzs7Z0JBdEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsaWtCQUEyQztvQkFFM0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7O2lCQUNoRDs7Ozs7cUJBR0UsS0FBSyxTQUFDLElBQUk7NEJBRVYsS0FBSyxTQUFDLGlCQUFpQjtpQ0FFdkIsS0FBSyxTQUFDLHNCQUFzQjsyQkFDNUIsS0FBSyxTQUFDLFVBQVU7Z0NBQ2hCLEtBQUssU0FBQyxlQUFlO3dCQUNyQixLQUFLLFNBQUMsT0FBTzt3QkFDYixLQUFLLFNBQUMsT0FBTzt1QkFDYixLQUFLLFNBQUMsTUFBTTsyQkFDWixLQUFLLFNBQUMsVUFBVTswQkFDaEIsS0FBSyxTQUFDLFNBQVM7Z0NBQ2YsS0FBSyxTQUFDLGVBQWU7eUJBQ3JCLE1BQU0sU0FBQyxRQUFRO3NDQUNmLE1BQU0sU0FBQyxxQkFBcUI7O3FCQXBEL0I7O1NBb0NhLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IExZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5Q2hlY2tib3gpLFxuICBtdWx0aTogdHJ1ZVxufTtcbmV4cG9ydCBlbnVtIENoZWNrYm94U3RhdGUge1xuICAvKiogVGhlIGluaXRpYWwgc3RhdGUuICovXG4gIEluaXQsXG4gIC8qKiBDaGVja2VkIHN0YXRlLiAqL1xuICBDaGVja2VkLFxuICAvKiogVW5jaGVja2VkIHN0YXRlLiAqL1xuICBVbmNoZWNrZWQsXG4gIC8qKiBJbmRldGVybWluYXRlIHN0YXRlLiAqL1xuICBJbmRldGVybWluYXRlLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9seS1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2x5LWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW0xZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3ggaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2N1cnJlbnRDaGVja1N0YXRlOiBDaGVja2JveFN0YXRlID0gQ2hlY2tib3hTdGF0ZS5Jbml0O1xuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2F0dHIuYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXR0ci5hcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xuICBASW5wdXQoJ3JlcXVpcmVkJykgcmVxdWlyZWQ6IHN0cmluZztcbiAgQElucHV0KCdsYWJlbFBvc2l0aW9uJykgbGFiZWxQb3NpdGlvbjogc3RyaW5nO1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCd2YWx1ZScpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2hlY2tlZCcpIGNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCdpbmRldGVybWluYXRlJykgaW5kZXRlcm1pbmF0ZTogc3RyaW5nO1xuICBAT3V0cHV0KCdjaGFuZ2UnKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2luZGV0ZXJtaW5hdGVDaGFuZ2UnKSBpbmRldGVybWluYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG4gIHByaXZhdGUgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKHZhbHVlKSA9PiB7fTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKiogVG9nZ2xlcyB0aGUgYGNoZWNrZWRgIHN0YXRlIG9mIHRoZSBjaGVja2JveC4gKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gIH1cblxuICBfb25DaGFuZ2VFdmVudChldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGV2ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5jaGVja2VkID0gZXYuY2hlY2tlZDtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMuY2hlY2tlZCk7XG4gICAgY29uc29sZS5sb2coJ19vbklucHV0Q2xpY2snLCBldi5jaGVja2VkKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgY29uc29sZS5sb2coJ3ZhbHVlJywgdGhpcy5jaGVja2VkKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlcycsIGNoYW5nZXMpO1xuICAgIGlmIChjaGFuZ2VzWydzcmMnXSkge1xuICAgICAgLy8gZm5cbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcblxuICB9XG5cbn1cbiJdfQ==