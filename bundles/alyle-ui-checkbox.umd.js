(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/checkbox', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.checkbox = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return LyCheckbox; }),
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
            this.change = new core.EventEmitter();
            this.indeterminateChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ly-checkbox',
                        template: "<label>\n  <div class=\"ly-checkbox-container\">\n    <input #input\n           [hidden]=\"false\" type=\"checkbox\"\n           [id]=\"id\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [value]=\"value\"\n           [disabled]=\"disabled\"\n           [name]=\"name\"\n           [indeterminate]=\"indeterminate\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n  </div>\n</label>\n",
                        providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                        styles: [":host{display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        LyCheckbox.ctorParameters = function () { return []; };
        LyCheckbox.propDecorators = {
            id: [{ type: core.Input, args: ['id',] }],
            ariaLabel: [{ type: core.Input, args: ['attr.aria-label',] }],
            ariaLabelledby: [{ type: core.Input, args: ['attr.aria-labelledby',] }],
            required: [{ type: core.Input, args: ['required',] }],
            labelPosition: [{ type: core.Input, args: ['labelPosition',] }],
            color: [{ type: core.Input, args: ['color',] }],
            value: [{ type: core.Input, args: ['value',] }],
            name: [{ type: core.Input, args: ['name',] }],
            disabled: [{ type: core.Input, args: ['disabled',] }],
            checked: [{ type: core.Input, args: ['checked',] }],
            indeterminate: [{ type: core.Input, args: ['indeterminate',] }],
            change: [{ type: core.Output, args: ['change',] }],
            indeterminateChange: [{ type: core.Output, args: ['indeterminateChange',] }]
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
            { type: core.Injectable }
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        exports: [LyCheckbox],
                        declarations: [LyCheckbox],
                        providers: [LyCheckboxService]
                    },] }
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

    exports.LyCheckboxModule = LyCheckboxModule;
    exports.LyCheckboxService = LyCheckboxService;
    exports.LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = LY_CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.CheckboxState = CheckboxState;
    exports.LyCheckbox = LyCheckbox;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2hlY2tib3gudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvbHktY2hlY2tib3gvbHktY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvbHktY2hlY2tib3guc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2NoZWNrYm94L2x5LWNoZWNrYm94Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IExZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5Q2hlY2tib3gpLFxuICBtdWx0aTogdHJ1ZVxufTtcbmV4cG9ydCBlbnVtIENoZWNrYm94U3RhdGUge1xuICAvKiogVGhlIGluaXRpYWwgc3RhdGUuICovXG4gIEluaXQsXG4gIC8qKiBDaGVja2VkIHN0YXRlLiAqL1xuICBDaGVja2VkLFxuICAvKiogVW5jaGVja2VkIHN0YXRlLiAqL1xuICBVbmNoZWNrZWQsXG4gIC8qKiBJbmRldGVybWluYXRlIHN0YXRlLiAqL1xuICBJbmRldGVybWluYXRlLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9seS1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2x5LWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW0xZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3ggaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2N1cnJlbnRDaGVja1N0YXRlOiBDaGVja2JveFN0YXRlID0gQ2hlY2tib3hTdGF0ZS5Jbml0O1xuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2F0dHIuYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXR0ci5hcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xuICBASW5wdXQoJ3JlcXVpcmVkJykgcmVxdWlyZWQ6IHN0cmluZztcbiAgQElucHV0KCdsYWJlbFBvc2l0aW9uJykgbGFiZWxQb3NpdGlvbjogc3RyaW5nO1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCd2YWx1ZScpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdkaXNhYmxlZCcpIGRpc2FibGVkOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2hlY2tlZCcpIGNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCdpbmRldGVybWluYXRlJykgaW5kZXRlcm1pbmF0ZTogc3RyaW5nO1xuICBAT3V0cHV0KCdjaGFuZ2UnKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2luZGV0ZXJtaW5hdGVDaGFuZ2UnKSBpbmRldGVybWluYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG4gIHByaXZhdGUgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKHZhbHVlKSA9PiB7fTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKiogVG9nZ2xlcyB0aGUgYGNoZWNrZWRgIHN0YXRlIG9mIHRoZSBjaGVja2JveC4gKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gIH1cblxuICBfb25DaGFuZ2VFdmVudChldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBfb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGV2ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgdGhpcy5jaGVja2VkID0gZXYuY2hlY2tlZDtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMuY2hlY2tlZCk7XG4gICAgY29uc29sZS5sb2coJ19vbklucHV0Q2xpY2snLCBldi5jaGVja2VkKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgY29uc29sZS5sb2coJ3ZhbHVlJywgdGhpcy5jaGVja2VkKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdlcycsIGNoYW5nZXMpO1xuICAgIGlmIChjaGFuZ2VzWydzcmMnXSkge1xuICAgICAgLy8gZm5cbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcblxuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTHlDaGVja2JveCB9IGZyb20gJy4vbHktY2hlY2tib3gvbHktY2hlY2tib3guY29tcG9uZW50JztcbmltcG9ydCB7IEx5Q2hlY2tib3hTZXJ2aWNlIH0gZnJvbSAnLi9seS1jaGVja2JveC5zZXJ2aWNlJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5Q2hlY2tib3hdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUNoZWNrYm94XSxcbiAgcHJvdmlkZXJzOiBbTHlDaGVja2JveFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2hlY2tib3hNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMeUNoZWNrYm94TW9kdWxlLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIkluamVjdGFibGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBY0EsUUFBYSxrQ0FBa0MsR0FBUTtRQUNyRCxPQUFPLEVBQUVBLHVCQUFpQjtRQUMxQixXQUFXLEVBQUVDLGVBQVUsQ0FBQyxjQUFNLE9BQUEsVUFBVSxHQUFBLENBQUM7UUFDekMsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDOzs7O1FBR0EsT0FBSTs7UUFFSixVQUFPOztRQUVQLFlBQVM7O1FBRVQsZ0JBQWE7O2dDQU5iLElBQUk7Z0NBRUosT0FBTztnQ0FFUCxTQUFTO2dDQUVULGFBQWE7O1FBNEJiO3NDQWxCNEMsYUFBYSxDQUFDLElBQUk7WUFZOUQsZUFBNEIsS0FBSyxDQUFDO1lBRWxDLGNBQThDLElBQUlDLGlCQUFZLEVBQU8sQ0FBQztZQUN0RSwyQkFBNEUsSUFBSUEsaUJBQVksRUFBVyxDQUFDO1lBQ3hHLGlCQUF1QixlQUFRLENBQUM7aURBQzhCLFVBQUMsS0FBSyxLQUFPO1NBQzFEOzs7Ozs7UUFHakIsMkJBQU07Ozs7WUFBTjtnQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUM5Qjs7Ozs7UUFFRCxtQ0FBYzs7OztZQUFkLFVBQWUsS0FBWTtnQkFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3pCOzs7OztRQUNELGtDQUFhOzs7O1lBQWIsVUFBYyxLQUFZOztnQkFDeEIsSUFBTSxFQUFFLHFCQUFHLEtBQUssQ0FBQyxNQUEwQixFQUFDO2dCQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQzFCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQzs7Ozs7UUFFRCwrQkFBVTs7OztZQUFWLFVBQVcsS0FBVTtnQkFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEM7Ozs7O1FBRUQscUNBQWdCOzs7O1lBQWhCLFVBQWlCLEVBQXdCO2dCQUN2QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsRUFBRSxDQUFDO2FBQ3pDOzs7OztRQUNELGdDQUFXOzs7O1lBQVgsVUFBWSxPQUFzQjtnQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBRW5CO2FBQ0Y7Ozs7O1FBRUQsc0NBQWlCOzs7O1lBQWpCLFVBQWtCLEVBQU87Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ3JCOzs7O1FBRUQsNkJBQVE7OztZQUFSO2FBRUM7Ozs7UUFFRCx1Q0FBa0I7OztZQUFsQjthQUVDOzs7O1FBQ0QsZ0NBQVc7OztZQUFYO2FBRUM7O29CQXRFRkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2Qixpa0JBQTJDO3dCQUUzQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzs7cUJBQ2hEOzs7Ozt5QkFHRUMsVUFBSyxTQUFDLElBQUk7Z0NBRVZBLFVBQUssU0FBQyxpQkFBaUI7cUNBRXZCQSxVQUFLLFNBQUMsc0JBQXNCOytCQUM1QkEsVUFBSyxTQUFDLFVBQVU7b0NBQ2hCQSxVQUFLLFNBQUMsZUFBZTs0QkFDckJBLFVBQUssU0FBQyxPQUFPOzRCQUNiQSxVQUFLLFNBQUMsT0FBTzsyQkFDYkEsVUFBSyxTQUFDLE1BQU07K0JBQ1pBLFVBQUssU0FBQyxVQUFVOzhCQUNoQkEsVUFBSyxTQUFDLFNBQVM7b0NBQ2ZBLFVBQUssU0FBQyxlQUFlOzZCQUNyQkMsV0FBTSxTQUFDLFFBQVE7MENBQ2ZBLFdBQU0sU0FBQyxxQkFBcUI7O3lCQXBEL0I7Ozs7Ozs7QUNBQTtRQUtFO1NBQWlCOztvQkFIbEJDLGVBQVU7Ozs7Z0NBRlg7Ozs7Ozs7QUNBQTs7Ozs7O1FBY2dCLHdCQUFPOzs7O2dCQUNuQixPQUFPO29CQUNMLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCLENBQUM7OztvQkFaTEMsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNyQixZQUFZLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0JBQzFCLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO3FCQUMvQjs7K0JBWkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9