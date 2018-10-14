/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export const LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LyCheckbox),
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
export class LyCheckbox {
    constructor() {
        this._currentCheckState = CheckboxState.Init;
        this.checked = false;
        this.change = new EventEmitter();
        this.indeterminateChange = new EventEmitter();
        this.onTouched = () => { };
        this._controlValueAccessorChangeFn = (value) => { };
    }
    /**
     * Toggles the `checked` state of the checkbox.
     * @return {?}
     */
    toggle() {
        this.checked = !this.checked;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onChangeEvent(event) {
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onInputClick(event) {
        /** @type {?} */
        const ev = /** @type {?} */ (event.target);
        this.checked = ev.checked;
        this._controlValueAccessorChangeFn(this.checked);
        console.log('_onInputClick', ev.checked);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.checked = !!value;
        console.log('value', this.checked);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        console.log('changes', changes);
        if (changes['src']) {
            // fn
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
LyCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'ly-checkbox',
                template: "<label>\n  <div class=\"ly-checkbox-container\">\n    <input #input\n           [hidden]=\"false\" type=\"checkbox\"\n           [id]=\"id\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [value]=\"value\"\n           [disabled]=\"disabled\"\n           [name]=\"name\"\n           [indeterminate]=\"indeterminate\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n  </div>\n</label>\n",
                providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                styles: [":host{display:inline-block}"]
            }] }
];
/** @nocollapse */
LyCheckbox.ctorParameters = () => [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHktY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2NoZWNrYm94LyIsInNvdXJjZXMiOlsibHktY2hlY2tib3gvbHktY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQU1ULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLGFBQWEsa0NBQWtDLEdBQVE7SUFDckQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUN6QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7Ozs7SUFHQSxPQUFJOztJQUVKLFVBQU87O0lBRVAsWUFBUzs7SUFFVCxnQkFBYTs7OzRCQU5iLElBQUk7NEJBRUosT0FBTzs0QkFFUCxTQUFTOzRCQUVULGFBQWE7QUFTZixNQUFNLE9BQU8sVUFBVTtJQW1CckI7a0NBbEI0QyxhQUFhLENBQUMsSUFBSTtRQVk5RCxlQUE0QixLQUFLLENBQUM7UUFFbEMsY0FBOEMsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RSwyQkFBNEUsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN4RyxpQkFBdUIsR0FBRyxFQUFFLElBQUcsQ0FBQzs2Q0FDOEIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFHO0tBQzFEOzs7OztJQUdqQixNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDOUI7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQVk7UUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3pCOzs7OztJQUNELGFBQWEsQ0FBQyxLQUFZOztRQUN4QixNQUFNLEVBQUUscUJBQUcsS0FBSyxDQUFDLE1BQTBCLEVBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBd0I7UUFDdkMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEVBQUUsQ0FBQztLQUN6Qzs7Ozs7SUFDRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7O1NBRW5CO0tBQ0Y7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELFFBQVE7S0FFUDs7OztJQUVELGtCQUFrQjtLQUVqQjs7OztJQUNELFdBQVc7S0FFVjs7O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsaWtCQUEyQztnQkFFM0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7O2FBQ2hEOzs7OztpQkFHRSxLQUFLLFNBQUMsSUFBSTt3QkFFVixLQUFLLFNBQUMsaUJBQWlCOzZCQUV2QixLQUFLLFNBQUMsc0JBQXNCO3VCQUM1QixLQUFLLFNBQUMsVUFBVTs0QkFDaEIsS0FBSyxTQUFDLGVBQWU7b0JBQ3JCLEtBQUssU0FBQyxPQUFPO29CQUNiLEtBQUssU0FBQyxPQUFPO21CQUNiLEtBQUssU0FBQyxNQUFNO3VCQUNaLEtBQUssU0FBQyxVQUFVO3NCQUNoQixLQUFLLFNBQUMsU0FBUzs0QkFDZixLQUFLLFNBQUMsZUFBZTtxQkFDckIsTUFBTSxTQUFDLFFBQVE7a0NBQ2YsTUFBTSxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlDaGVja2JveCksXG4gIG11bHRpOiB0cnVlXG59O1xuZXhwb3J0IGVudW0gQ2hlY2tib3hTdGF0ZSB7XG4gIC8qKiBUaGUgaW5pdGlhbCBzdGF0ZS4gKi9cbiAgSW5pdCxcbiAgLyoqIENoZWNrZWQgc3RhdGUuICovXG4gIENoZWNrZWQsXG4gIC8qKiBVbmNoZWNrZWQgc3RhdGUuICovXG4gIFVuY2hlY2tlZCxcbiAgLyoqIEluZGV0ZXJtaW5hdGUgc3RhdGUuICovXG4gIEluZGV0ZXJtaW5hdGUsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2x5LWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbHktY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY3VycmVudENoZWNrU3RhdGU6IENoZWNrYm94U3RhdGUgPSBDaGVja2JveFN0YXRlLkluaXQ7XG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXR0ci5hcmlhLWxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdhdHRyLmFyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgncmVxdWlyZWQnKSByZXF1aXJlZDogc3RyaW5nO1xuICBASW5wdXQoJ2xhYmVsUG9zaXRpb24nKSBsYWJlbFBvc2l0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoJ3ZhbHVlJykgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IHN0cmluZztcbiAgQElucHV0KCdjaGVja2VkJykgY2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoJ2luZGV0ZXJtaW5hdGUnKSBpbmRldGVybWluYXRlOiBzdHJpbmc7XG4gIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnaW5kZXRlcm1pbmF0ZUNoYW5nZScpIGluZGV0ZXJtaW5hdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAodmFsdWUpID0+IHt9O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBgY2hlY2tlZGAgc3RhdGUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgfVxuXG4gIF9vbkNoYW5nZUV2ZW50KGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgZXYgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLmNoZWNrZWQgPSBldi5jaGVja2VkO1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy5jaGVja2VkKTtcbiAgICBjb25zb2xlLmxvZygnX29uSW5wdXRDbGljaycsIGV2LmNoZWNrZWQpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5jaGVja2VkID0gISF2YWx1ZTtcbiAgICBjb25zb2xlLmxvZygndmFsdWUnLCB0aGlzLmNoZWNrZWQpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VzJywgY2hhbmdlcyk7XG4gICAgaWYgKGNoYW5nZXNbJ3NyYyddKSB7XG4gICAgICAvLyBmblxuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuXG4gIH1cblxufVxuIl19