/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const /** @type {?} */ LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LyCheckbox),
    multi: true
};
/** @enum {number} */
const CheckboxState = {
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
CheckboxState[CheckboxState.Init] = "Init";
CheckboxState[CheckboxState.Checked] = "Checked";
CheckboxState[CheckboxState.Unchecked] = "Unchecked";
CheckboxState[CheckboxState.Indeterminate] = "Indeterminate";
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
        const /** @type {?} */ ev = /** @type {?} */ (event.target);
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
                template: `<label>
  <div class="ly-checkbox-container">
    <input #input
           [hidden]="false" type="checkbox"
           [id]="id"
           [required]="required"
           [checked]="checked"
           [value]="value"
           [disabled]="disabled"
           [name]="name"
           [indeterminate]="indeterminate"
           [attr.aria-label]="ariaLabel"
           [attr.aria-labelledby]="ariaLabelledby"
           (change)="_onChangeEvent($event)"
           (click)="_onInputClick($event)">
  </div>
</label>
`,
                styles: [`:host{display:inline-block}`],
                providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
LyCheckbox.ctorParameters = () => [];
LyCheckbox.propDecorators = {
    "id": [{ type: Input, args: ['id',] },],
    "ariaLabel": [{ type: Input, args: ['attr.aria-label',] },],
    "ariaLabelledby": [{ type: Input, args: ['attr.aria-labelledby',] },],
    "required": [{ type: Input, args: ['required',] },],
    "labelPosition": [{ type: Input, args: ['labelPosition',] },],
    "color": [{ type: Input, args: ['color',] },],
    "value": [{ type: Input, args: ['value',] },],
    "name": [{ type: Input, args: ['name',] },],
    "disabled": [{ type: Input, args: ['disabled',] },],
    "checked": [{ type: Input, args: ['checked',] },],
    "indeterminate": [{ type: Input, args: ['indeterminate',] },],
    "change": [{ type: Output, args: ['change',] },],
    "indeterminateChange": [{ type: Output, args: ['indeterminateChange',] },],
};
function LyCheckbox_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCheckbox.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCheckbox.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyCheckbox.propDecorators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHktY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2NoZWNrYm94LyIsInNvdXJjZXMiOlsibHktY2hlY2tib3gvbHktY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQU1ULEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLHVCQUFNLGtDQUFrQyxHQUFRO0lBQ3JELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7SUFDekMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQW1DRixNQUFNO0lBbUJKO2tDQWxCNEMsYUFBYSxDQUFDLElBQUk7dUJBWWxDLEtBQUs7c0JBRWEsSUFBSSxZQUFZLEVBQU87bUNBQ08sSUFBSSxZQUFZLEVBQVc7eUJBQ2hGLEdBQUcsRUFBRSxJQUFHOzZDQUMrQixDQUFDLEtBQUssRUFBRSxFQUFFLElBQUc7S0FDMUQ7Ozs7O0lBR2pCLE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUM5Qjs7Ozs7SUFFRCxjQUFjLENBQUMsS0FBWTtRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDekI7Ozs7O0lBQ0QsYUFBYSxDQUFDLEtBQVk7UUFDeEIsdUJBQU0sRUFBRSxxQkFBRyxLQUFLLENBQUMsTUFBMEIsQ0FBQSxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXdCO1FBQ3ZDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxFQUFFLENBQUM7S0FDekM7Ozs7O0lBQ0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztTQUVuQjtLQUNGOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7SUFFRCxRQUFRO0tBRVA7Ozs7SUFFRCxrQkFBa0I7S0FFakI7Ozs7SUFDRCxXQUFXO0tBRVY7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQlg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEOzs7OzttQkFHRSxLQUFLLFNBQUMsSUFBSTswQkFFVixLQUFLLFNBQUMsaUJBQWlCOytCQUV2QixLQUFLLFNBQUMsc0JBQXNCO3lCQUM1QixLQUFLLFNBQUMsVUFBVTs4QkFDaEIsS0FBSyxTQUFDLGVBQWU7c0JBQ3JCLEtBQUssU0FBQyxPQUFPO3NCQUNiLEtBQUssU0FBQyxPQUFPO3FCQUNiLEtBQUssU0FBQyxNQUFNO3lCQUNaLEtBQUssU0FBQyxVQUFVO3dCQUNoQixLQUFLLFNBQUMsU0FBUzs4QkFDZixLQUFLLFNBQUMsZUFBZTt1QkFDckIsTUFBTSxTQUFDLFFBQVE7b0NBQ2YsTUFBTSxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlDaGVja2JveCksXG4gIG11bHRpOiB0cnVlXG59O1xuZXhwb3J0IGVudW0gQ2hlY2tib3hTdGF0ZSB7XG4gIC8qKiBUaGUgaW5pdGlhbCBzdGF0ZS4gKi9cbiAgSW5pdCxcbiAgLyoqIENoZWNrZWQgc3RhdGUuICovXG4gIENoZWNrZWQsXG4gIC8qKiBVbmNoZWNrZWQgc3RhdGUuICovXG4gIFVuY2hlY2tlZCxcbiAgLyoqIEluZGV0ZXJtaW5hdGUgc3RhdGUuICovXG4gIEluZGV0ZXJtaW5hdGUsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGA8bGFiZWw+XG4gIDxkaXYgY2xhc3M9XCJseS1jaGVja2JveC1jb250YWluZXJcIj5cbiAgICA8aW5wdXQgI2lucHV0XG4gICAgICAgICAgIFtoaWRkZW5dPVwiZmFsc2VcIiB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICBbaWRdPVwiaWRcIlxuICAgICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRieVwiXG4gICAgICAgICAgIChjaGFuZ2UpPVwiX29uQ2hhbmdlRXZlbnQoJGV2ZW50KVwiXG4gICAgICAgICAgIChjbGljayk9XCJfb25JbnB1dENsaWNrKCRldmVudClcIj5cbiAgPC9kaXY+XG48L2xhYmVsPlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfWBdLFxuICBwcm92aWRlcnM6IFtMWV9DSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jdXJyZW50Q2hlY2tTdGF0ZTogQ2hlY2tib3hTdGF0ZSA9IENoZWNrYm94U3RhdGUuSW5pdDtcbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdhdHRyLmFyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JykgYXJpYUxhYmVsbGVkYnk6IHN0cmluZztcbiAgQElucHV0KCdyZXF1aXJlZCcpIHJlcXVpcmVkOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFiZWxQb3NpdGlvbicpIGxhYmVsUG9zaXRpb246IHN0cmluZztcbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgndmFsdWUnKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnZGlzYWJsZWQnKSBkaXNhYmxlZDogc3RyaW5nO1xuICBASW5wdXQoJ2NoZWNrZWQnKSBjaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgnaW5kZXRlcm1pbmF0ZScpIGluZGV0ZXJtaW5hdGU6IHN0cmluZztcbiAgQE91dHB1dCgnY2hhbmdlJykgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdpbmRldGVybWluYXRlQ2hhbmdlJykgaW5kZXRlcm1pbmF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICh2YWx1ZSkgPT4ge307XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIGBjaGVja2VkYCBzdGF0ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgX29uQ2hhbmdlRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBldiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuY2hlY2tlZCA9IGV2LmNoZWNrZWQ7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLmNoZWNrZWQpO1xuICAgIGNvbnNvbGUubG9nKCdfb25JbnB1dENsaWNrJywgZXYuY2hlY2tlZCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICAgIGNvbnNvbGUubG9nKCd2YWx1ZScsIHRoaXMuY2hlY2tlZCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2NoYW5nZXMnLCBjaGFuZ2VzKTtcbiAgICBpZiAoY2hhbmdlc1snc3JjJ10pIHtcbiAgICAgIC8vIGZuXG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG5cbiAgfVxuXG59XG4iXX0=