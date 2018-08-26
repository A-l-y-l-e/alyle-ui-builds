import { Component, Input, Output, EventEmitter, forwardRef, Injectable, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
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
        if (changes['src']) ;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyCheckboxService = /** @class */ (function () {
    function LyCheckboxService() {
    }
    LyCheckboxService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LyCheckboxService.ctorParameters = function () { return []; };
    return LyCheckboxService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyCheckboxModule = /** @class */ (function () {
    function LyCheckboxModule() {
    }
    /**
     * @return {?}
     */
    LyCheckboxModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: LyCheckboxModule,
        };
    };
    LyCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [LyCheckbox],
                    declarations: [LyCheckbox],
                    providers: [LyCheckboxService]
                },] },
    ];
    return LyCheckboxModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2hlY2tib3guanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jaGVja2JveC9seS1jaGVja2JveC9seS1jaGVja2JveC5jb21wb25lbnQudHMiLCJuZzovL0BhbHlsZS91aS9jaGVja2JveC9seS1jaGVja2JveC5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvbHktY2hlY2tib3gubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTHlDaGVja2JveCksXG4gIG11bHRpOiB0cnVlXG59O1xuZXhwb3J0IGVudW0gQ2hlY2tib3hTdGF0ZSB7XG4gIC8qKiBUaGUgaW5pdGlhbCBzdGF0ZS4gKi9cbiAgSW5pdCxcbiAgLyoqIENoZWNrZWQgc3RhdGUuICovXG4gIENoZWNrZWQsXG4gIC8qKiBVbmNoZWNrZWQgc3RhdGUuICovXG4gIFVuY2hlY2tlZCxcbiAgLyoqIEluZGV0ZXJtaW5hdGUgc3RhdGUuICovXG4gIEluZGV0ZXJtaW5hdGUsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGA8bGFiZWw+XG4gIDxkaXYgY2xhc3M9XCJseS1jaGVja2JveC1jb250YWluZXJcIj5cbiAgICA8aW5wdXQgI2lucHV0XG4gICAgICAgICAgIFtoaWRkZW5dPVwiZmFsc2VcIiB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICBbaWRdPVwiaWRcIlxuICAgICAgICAgICBbcmVxdWlyZWRdPVwicmVxdWlyZWRcIlxuICAgICAgICAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcbiAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRieVwiXG4gICAgICAgICAgIChjaGFuZ2UpPVwiX29uQ2hhbmdlRXZlbnQoJGV2ZW50KVwiXG4gICAgICAgICAgIChjbGljayk9XCJfb25JbnB1dENsaWNrKCRldmVudClcIj5cbiAgPC9kaXY+XG48L2xhYmVsPlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfWBdLFxuICBwcm92aWRlcnM6IFtMWV9DSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jdXJyZW50Q2hlY2tTdGF0ZTogQ2hlY2tib3hTdGF0ZSA9IENoZWNrYm94U3RhdGUuSW5pdDtcbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdhdHRyLmFyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2F0dHIuYXJpYS1sYWJlbGxlZGJ5JykgYXJpYUxhYmVsbGVkYnk6IHN0cmluZztcbiAgQElucHV0KCdyZXF1aXJlZCcpIHJlcXVpcmVkOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFiZWxQb3NpdGlvbicpIGxhYmVsUG9zaXRpb246IHN0cmluZztcbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgndmFsdWUnKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnZGlzYWJsZWQnKSBkaXNhYmxlZDogc3RyaW5nO1xuICBASW5wdXQoJ2NoZWNrZWQnKSBjaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgnaW5kZXRlcm1pbmF0ZScpIGluZGV0ZXJtaW5hdGU6IHN0cmluZztcbiAgQE91dHB1dCgnY2hhbmdlJykgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdpbmRldGVybWluYXRlQ2hhbmdlJykgaW5kZXRlcm1pbmF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICh2YWx1ZSkgPT4ge307XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqIFRvZ2dsZXMgdGhlIGBjaGVja2VkYCBzdGF0ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICB9XG5cbiAgX29uQ2hhbmdlRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgX29uSW5wdXRDbGljayhldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBldiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuY2hlY2tlZCA9IGV2LmNoZWNrZWQ7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLmNoZWNrZWQpO1xuICAgIGNvbnNvbGUubG9nKCdfb25JbnB1dENsaWNrJywgZXYuY2hlY2tlZCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSAhIXZhbHVlO1xuICAgIGNvbnNvbGUubG9nKCd2YWx1ZScsIHRoaXMuY2hlY2tlZCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2NoYW5nZXMnLCBjaGFuZ2VzKTtcbiAgICBpZiAoY2hhbmdlc1snc3JjJ10pIHtcbiAgICAgIC8vIGZuXG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG5cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEx5Q2hlY2tib3ggfSBmcm9tICcuL2x5LWNoZWNrYm94L2x5LWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMeUNoZWNrYm94U2VydmljZSB9IGZyb20gJy4vbHktY2hlY2tib3guc2VydmljZSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeUNoZWNrYm94XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlDaGVja2JveF0sXG4gIHByb3ZpZGVyczogW0x5Q2hlY2tib3hTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNoZWNrYm94TW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlDaGVja2JveE1vZHVsZSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQWNBLElBQWEsa0NBQWtDLEdBQVE7SUFDckQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxVQUFVLEdBQUEsQ0FBQztJQUN6QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7Ozs7SUFHQSxPQUFJOztJQUVKLFVBQU87O0lBRVAsWUFBUzs7SUFFVCxnQkFBYTs7NEJBTmIsSUFBSTs0QkFFSixPQUFPOzRCQUVQLFNBQVM7NEJBRVQsYUFBYTs7SUE2Q2I7a0NBbEI0QyxhQUFhLENBQUMsSUFBSTt1QkFZbEMsS0FBSztzQkFFYSxJQUFJLFlBQVks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