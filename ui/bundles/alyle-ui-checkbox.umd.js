(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/checkbox', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.checkbox = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
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
    CheckboxState[CheckboxState.Init] = "Init";
    CheckboxState[CheckboxState.Checked] = "Checked";
    CheckboxState[CheckboxState.Unchecked] = "Unchecked";
    CheckboxState[CheckboxState.Indeterminate] = "Indeterminate";
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
                var /** @type {?} */ ev = /** @type {?} */ (event.target);
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
                        styles: [":host{display:inline-block}"],
                        providers: [LY_CHECKBOX_CONTROL_VALUE_ACCESSOR]
                    },] },
        ];
        /** @nocollapse */
        LyCheckbox.ctorParameters = function () { return []; };
        LyCheckbox.propDecorators = {
            "id": [{ type: core.Input, args: ['id',] },],
            "ariaLabel": [{ type: core.Input, args: ['attr.aria-label',] },],
            "ariaLabelledby": [{ type: core.Input, args: ['attr.aria-labelledby',] },],
            "required": [{ type: core.Input, args: ['required',] },],
            "labelPosition": [{ type: core.Input, args: ['labelPosition',] },],
            "color": [{ type: core.Input, args: ['color',] },],
            "value": [{ type: core.Input, args: ['value',] },],
            "name": [{ type: core.Input, args: ['name',] },],
            "disabled": [{ type: core.Input, args: ['disabled',] },],
            "checked": [{ type: core.Input, args: ['checked',] },],
            "indeterminate": [{ type: core.Input, args: ['indeterminate',] },],
            "change": [{ type: core.Output, args: ['change',] },],
            "indeterminateChange": [{ type: core.Output, args: ['indeterminateChange',] },],
        };
        return LyCheckbox;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyCheckboxService = /** @class */ (function () {
        function LyCheckboxService() {
        }
        LyCheckboxService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        LyCheckboxService.ctorParameters = function () { return []; };
        return LyCheckboxService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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
                    },] },
        ];
        return LyCheckboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LyCheckboxModule = LyCheckboxModule;
    exports.LyCheckboxService = LyCheckboxService;
    exports.LY_CHECKBOX_CONTROL_VALUE_ACCESSOR = LY_CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.CheckboxState = CheckboxState;
    exports.LyCheckbox = LyCheckbox;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2hlY2tib3gudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvbHktY2hlY2tib3gvbHktY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9AYWx5bGUvdWkvY2hlY2tib3gvbHktY2hlY2tib3guc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2NoZWNrYm94L2x5LWNoZWNrYm94Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IExZX0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEx5Q2hlY2tib3gpLFxuICBtdWx0aTogdHJ1ZVxufTtcbmV4cG9ydCBlbnVtIENoZWNrYm94U3RhdGUge1xuICAvKiogVGhlIGluaXRpYWwgc3RhdGUuICovXG4gIEluaXQsXG4gIC8qKiBDaGVja2VkIHN0YXRlLiAqL1xuICBDaGVja2VkLFxuICAvKiogVW5jaGVja2VkIHN0YXRlLiAqL1xuICBVbmNoZWNrZWQsXG4gIC8qKiBJbmRldGVybWluYXRlIHN0YXRlLiAqL1xuICBJbmRldGVybWluYXRlLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1jaGVja2JveCcsXG4gIHRlbXBsYXRlOiBgPGxhYmVsPlxuICA8ZGl2IGNsYXNzPVwibHktY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgPGlucHV0ICNpbnB1dFxuICAgICAgICAgICBbaGlkZGVuXT1cImZhbHNlXCIgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgW2lkXT1cImlkXCJcbiAgICAgICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcbiAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxuICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkYnlcIlxuICAgICAgICAgICAoY2hhbmdlKT1cIl9vbkNoYW5nZUV2ZW50KCRldmVudClcIlxuICAgICAgICAgICAoY2xpY2spPVwiX29uSW5wdXRDbGljaygkZXZlbnQpXCI+XG4gIDwvZGl2PlxuPC9sYWJlbD5cbmAsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmlubGluZS1ibG9ja31gXSxcbiAgcHJvdmlkZXJzOiBbTFlfQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY3VycmVudENoZWNrU3RhdGU6IENoZWNrYm94U3RhdGUgPSBDaGVja2JveFN0YXRlLkluaXQ7XG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnYXR0ci5hcmlhLWxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdhdHRyLmFyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgncmVxdWlyZWQnKSByZXF1aXJlZDogc3RyaW5nO1xuICBASW5wdXQoJ2xhYmVsUG9zaXRpb24nKSBsYWJlbFBvc2l0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoJ3ZhbHVlJykgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IHN0cmluZztcbiAgQElucHV0KCdjaGVja2VkJykgY2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoJ2luZGV0ZXJtaW5hdGUnKSBpbmRldGVybWluYXRlOiBzdHJpbmc7XG4gIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnaW5kZXRlcm1pbmF0ZUNoYW5nZScpIGluZGV0ZXJtaW5hdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAodmFsdWUpID0+IHt9O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBgY2hlY2tlZGAgc3RhdGUgb2YgdGhlIGNoZWNrYm94LiAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgfVxuXG4gIF9vbkNoYW5nZUV2ZW50KGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIF9vbklucHV0Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgZXYgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICB0aGlzLmNoZWNrZWQgPSBldi5jaGVja2VkO1xuICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy5jaGVja2VkKTtcbiAgICBjb25zb2xlLmxvZygnX29uSW5wdXRDbGljaycsIGV2LmNoZWNrZWQpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5jaGVja2VkID0gISF2YWx1ZTtcbiAgICBjb25zb2xlLmxvZygndmFsdWUnLCB0aGlzLmNoZWNrZWQpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VzJywgY2hhbmdlcyk7XG4gICAgaWYgKGNoYW5nZXNbJ3NyYyddKSB7XG4gICAgICAvLyBmblxuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMeUNoZWNrYm94IH0gZnJvbSAnLi9seS1jaGVja2JveC9seS1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTHlDaGVja2JveFNlcnZpY2UgfSBmcm9tICcuL2x5LWNoZWNrYm94LnNlcnZpY2UnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlDaGVja2JveF0sXG4gIGRlY2xhcmF0aW9uczogW0x5Q2hlY2tib3hdLFxuICBwcm92aWRlcnM6IFtMeUNoZWNrYm94U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlDaGVja2JveE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEx5Q2hlY2tib3hNb2R1bGUsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIklucHV0IiwiT3V0cHV0IiwiSW5qZWN0YWJsZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUJBZWEsa0NBQWtDLEdBQVE7UUFDckQsT0FBTyxFQUFFQSx1QkFBaUI7UUFDMUIsV0FBVyxFQUFFQyxlQUFVLENBQUMsY0FBTSxPQUFBLFVBQVUsR0FBQSxDQUFDO1FBQ3pDLEtBQUssRUFBRSxJQUFJO0tBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFzREE7c0NBbEI0QyxhQUFhLENBQUMsSUFBSTsyQkFZbEMsS0FBSzswQkFFYSxJQUFJQyxpQkFBWSxFQUFPO3VDQUNPLElBQUlBLGlCQUFZLEVBQVc7NkJBQ2hGLGVBQVE7aURBQytCLFVBQUMsS0FBSyxLQUFPO1NBQzFEOzs7Ozs7UUFHakIsMkJBQU07Ozs7WUFBTjtnQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUM5Qjs7Ozs7UUFFRCxtQ0FBYzs7OztZQUFkLFVBQWUsS0FBWTtnQkFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3pCOzs7OztRQUNELGtDQUFhOzs7O1lBQWIsVUFBYyxLQUFZO2dCQUN4QixxQkFBTSxFQUFFLHFCQUFHLEtBQUssQ0FBQyxNQUEwQixDQUFBLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFDOzs7OztRQUVELCtCQUFVOzs7O1lBQVYsVUFBVyxLQUFVO2dCQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwQzs7Ozs7UUFFRCxxQ0FBZ0I7Ozs7WUFBaEIsVUFBaUIsRUFBd0I7Z0JBQ3ZDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxFQUFFLENBQUM7YUFDekM7Ozs7O1FBQ0QsZ0NBQVc7Ozs7WUFBWCxVQUFZLE9BQXNCO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FFbkI7YUFDRjs7Ozs7UUFFRCxzQ0FBaUI7Ozs7WUFBakIsVUFBa0IsRUFBTztnQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDckI7Ozs7UUFFRCw2QkFBUTs7O1lBQVI7YUFFQzs7OztRQUVELHVDQUFrQjs7O1lBQWxCO2FBRUM7Ozs7UUFDRCxnQ0FBVzs7O1lBQVg7YUFFQzs7b0JBdkZGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSx1akJBaUJYO3dCQUNDLE1BQU0sRUFBRSxDQUFDLDZCQUE2QixDQUFDO3dCQUN2QyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztxQkFDaEQ7Ozs7OzJCQUdFQyxVQUFLLFNBQUMsSUFBSTtrQ0FFVkEsVUFBSyxTQUFDLGlCQUFpQjt1Q0FFdkJBLFVBQUssU0FBQyxzQkFBc0I7aUNBQzVCQSxVQUFLLFNBQUMsVUFBVTtzQ0FDaEJBLFVBQUssU0FBQyxlQUFlOzhCQUNyQkEsVUFBSyxTQUFDLE9BQU87OEJBQ2JBLFVBQUssU0FBQyxPQUFPOzZCQUNiQSxVQUFLLFNBQUMsTUFBTTtpQ0FDWkEsVUFBSyxTQUFDLFVBQVU7Z0NBQ2hCQSxVQUFLLFNBQUMsU0FBUztzQ0FDZkEsVUFBSyxTQUFDLGVBQWU7K0JBQ3JCQyxXQUFNLFNBQUMsUUFBUTs0Q0FDZkEsV0FBTSxTQUFDLHFCQUFxQjs7eUJBdEUvQjs7Ozs7OztBQ0FBO1FBS0U7U0FBaUI7O29CQUhsQkMsZUFBVTs7OztnQ0FGWDs7Ozs7OztBQ0FBOzs7Ozs7UUFjZ0Isd0JBQU87Ozs7Z0JBQ25CLE9BQU87b0JBQ0wsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0IsQ0FBQzs7O29CQVpMQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUM7d0JBQ3JCLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQzt3QkFDMUIsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7cUJBQy9COzsrQkFaRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9