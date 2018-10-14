import { Component, Input, Output, EventEmitter, forwardRef, Injectable, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
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
CheckboxState[CheckboxState.Init] = 'Init';
CheckboxState[CheckboxState.Checked] = 'Checked';
CheckboxState[CheckboxState.Unchecked] = 'Unchecked';
CheckboxState[CheckboxState.Indeterminate] = 'Indeterminate';
class LyCheckbox {
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
        if (changes['src']) ;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyCheckboxService {
    constructor() { }
}
LyCheckboxService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LyCheckboxService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyCheckboxModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LyCheckboxModule,
        };
    }
}
LyCheckboxModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [LyCheckbox],
                declarations: [LyCheckbox],
                providers: [LyCheckboxService]
            },] }
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

export { LyCheckboxModule, LyCheckboxService, LY_CHECKBOX_CONTROL_VALUE_ACCESSOR, CheckboxState, LyCheckbox };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2hlY2tib3guanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jaGVja2JveC9seS1jaGVja2JveC9seS1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL0BhbHlsZS91aS9jaGVja2JveC9seS1jaGVja2JveC5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvbHktY2hlY2tib3gubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlDaGVja2JveCksXG4gIG11bHRpOiB0cnVlXG59O1xuZXhwb3J0IGVudW0gQ2hlY2tib3hTdGF0ZSB7XG4gIC8qKiBUaGUgaW5pdGlhbCBzdGF0ZS4gKi9cbiAgSW5pdCxcbiAgLyoqIENoZWNrZWQgc3RhdGUuICovXG4gIENoZWNrZWQsXG4gIC8qKiBVbmNoZWNrZWQgc3RhdGUuICovXG4gIFVuY2hlY2tlZCxcbiAgLyoqIEluZGV0ZXJtaW5hdGUgc3RhdGUuICovXG4gIEluZGV0ZXJtaW5hdGUsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2x5LWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbHktY2hlY2tib3guY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY3VycmVudENoZWNrU3RhdGU6IENoZWNrYm94U3RhdGUgPSBDaGVja2JveFN0YXRlLkluaXQ7XG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXR0ci5hcmlhLWxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdhdHRyLmFyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgncmVxdWlyZWQnKSByZXF1aXJlZDogc3RyaW5nO1xuICBASW5wdXQoJ2xhYmVsUG9zaXRpb24nKSBsYWJlbFBvc2l0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoJ3ZhbHVlJykgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IHN0cmluZztcbiAgQElucHV0KCdjaGVja2VkJykgY2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoJ2luZGV0ZXJtaW5hdGUnKSBpbmRldGVybWluYXRlOiBzdHJpbmc7XG4gIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnaW5kZXRlcm1pbmF0ZUNoYW5nZScpIGluZGV0ZXJtaW5hdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAodmFsdWUpID0+IHt9O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBgY2hlY2tlZGAgc3RhdGUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgfVxuXG4gIF9vbkNoYW5nZUV2ZW50KGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgZXYgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLmNoZWNrZWQgPSBldi5jaGVja2VkO1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy5jaGVja2VkKTtcbiAgICBjb25zb2xlLmxvZygnX29uSW5wdXRDbGljaycsIGV2LmNoZWNrZWQpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5jaGVja2VkID0gISF2YWx1ZTtcbiAgICBjb25zb2xlLmxvZygndmFsdWUnLCB0aGlzLmNoZWNrZWQpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VzJywgY2hhbmdlcyk7XG4gICAgaWYgKGNoYW5nZXNbJ3NyYyddKSB7XG4gICAgICAvLyBmblxuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMeUNoZWNrYm94IH0gZnJvbSAnLi9seS1jaGVja2JveC9seS1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTHlDaGVja2JveFNlcnZpY2UgfSBmcm9tICcuL2x5LWNoZWNrYm94LnNlcnZpY2UnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlDaGVja2JveF0sXG4gIGRlY2xhcmF0aW9uczogW0x5Q2hlY2tib3hdLFxuICBwcm92aWRlcnM6IFtMeUNoZWNrYm94U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEx5Q2hlY2tib3hNb2R1bGUsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFjQSxNQUFhLGtDQUFrQyxHQUFRO0lBQ3JELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxNQUFNLFVBQVUsQ0FBQztJQUN6QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7Ozs7SUFHQSxPQUFJOztJQUVKLFVBQU87O0lBRVAsWUFBUzs7SUFFVCxnQkFBYTs7NEJBTmIsSUFBSTs0QkFFSixPQUFPOzRCQUVQLFNBQVM7NEJBRVQsYUFBYTtBQVNmLE1BQWEsVUFBVTtJQW1CckI7a0NBbEI0QyxhQUFhLENBQUMsSUFBSTtRQVk5RCxlQUE0QixLQUFLLENBQUM7UUFFbEMsY0FBOEMsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RSwyQkFBNEUsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN4RyxpQkFBdUIsU0FBUSxDQUFDOzZDQUM4QixDQUFDLEtBQUssUUFBTztLQUMxRDs7Ozs7SUFHakIsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQzlCOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFZO1FBQ3pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7SUFDRCxhQUFhLENBQUMsS0FBWTs7UUFDeEIsTUFBTSxFQUFFLHFCQUFHLEtBQUssQ0FBQyxNQUEwQixFQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXdCO1FBQ3ZDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxFQUFFLENBQUM7S0FDekM7Ozs7O0lBQ0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBRW5CO0tBQ0Y7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELFFBQVE7S0FFUDs7OztJQUVELGtCQUFrQjtLQUVqQjs7OztJQUNELFdBQVc7S0FFVjs7O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsaWtCQUEyQztnQkFFM0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7O2FBQ2hEOzs7OztpQkFHRSxLQUFLLFNBQUMsSUFBSTt3QkFFVixLQUFLLFNBQUMsaUJBQWlCOzZCQUV2QixLQUFLLFNBQUMsc0JBQXNCO3VCQUM1QixLQUFLLFNBQUMsVUFBVTs0QkFDaEIsS0FBSyxTQUFDLGVBQWU7b0JBQ3JCLEtBQUssU0FBQyxPQUFPO29CQUNiLEtBQUssU0FBQyxPQUFPO21CQUNiLEtBQUssU0FBQyxNQUFNO3VCQUNaLEtBQUssU0FBQyxVQUFVO3NCQUNoQixLQUFLLFNBQUMsU0FBUzs0QkFDZixLQUFLLFNBQUMsZUFBZTtxQkFDckIsTUFBTSxTQUFDLFFBQVE7a0NBQ2YsTUFBTSxTQUFDLHFCQUFxQjs7Ozs7OztBQ3BEL0IsTUFHYSxpQkFBaUI7SUFFNUIsaUJBQWlCOzs7WUFIbEIsVUFBVTs7Ozs7Ozs7O0FDRlgsTUFhYSxnQkFBZ0I7Ozs7SUFDcEIsT0FBTyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7Ozs7WUFaTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNyQixZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==