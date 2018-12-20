(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/divider', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.divider = {}),global.ng.core,global.ly.core));
}(this, (function (exports,core,ui) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var style = function (theme) {
        return ({
            display: 'block',
            backgroundColor: theme.divider,
            height: '1px'
        });
    };
    var LyDivider = /** @class */ (function () {
        function LyDivider(_el, _theme) {
            this._el = _el;
            this._theme = _theme;
        }
        Object.defineProperty(LyDivider.prototype, "inset", {
            get: /**
             * @return {?}
             */ function () {
                return this._inset;
            },
            /** Add indentation (72px) */
            set: /**
             * Add indentation (72px)
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._inset = val;
                this._theme.addStyle("lyDivider.inset", function () {
                    return ({
                        marginBefore: '74px'
                    });
                }, this._el.nativeElement, this._insetClass);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyDivider.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var className = this._theme.addSimpleStyle('lyDivider', style);
                this._el.nativeElement.classList.add(className);
            };
        LyDivider.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-divider'
                    },] }
        ];
        /** @nocollapse */
        LyDivider.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
        LyDivider.propDecorators = {
            inset: [{ type: core.Input }]
        };
        return LyDivider;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyDividerModule = /** @class */ (function () {
        function LyDividerModule() {
        }
        LyDividerModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [LyDivider],
                        declarations: [LyDivider]
                    },] }
        ];
        return LyDividerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LyDivider = LyDivider;
    exports.LyDividerModule = LyDividerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktZGl2aWRlci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9kaXZpZGVyL2RpdmlkZXIudHMiLCJuZzovL0BhbHlsZS91aS9kaXZpZGVyL2RpdmlkZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3Qgc3R5bGUgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRpdmlkZXIsXG4gIGhlaWdodDogJzFweCdcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kaXZpZGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURpdmlkZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9pbnNldDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaW5zZXRDbGFzczogc3RyaW5nO1xuXG4gIC8qKiBBZGQgaW5kZW50YXRpb24gKDcycHgpICovXG4gIEBJbnB1dCgpXG4gIHNldCBpbnNldCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbnNldCA9IHZhbDtcbiAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgIGBseURpdmlkZXIuaW5zZXRgLFxuICAgICAgKCkgPT4gKHtcbiAgICAgICAgbWFyZ2luQmVmb3JlOiAnNzRweCdcbiAgICAgIH0pLFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2luc2V0Q2xhc3NcbiAgICApO1xuICB9XG4gIGdldCBpbnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zZXQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZSgnbHlEaXZpZGVyJywgc3R5bGUpO1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlEaXZpZGVyIH0gZnJvbSAnLi9kaXZpZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW0x5RGl2aWRlcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5RGl2aWRlcl1cbn0pXG5leHBvcnQgY2xhc3MgTHlEaXZpZGVyTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJMeVRoZW1lMiIsIklucHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUdNLEtBQUssR0FBRyxVQUFDLEtBQXFCO1FBQUssUUFBQztZQUN4QyxPQUFPLEVBQUUsT0FBTztZQUNoQixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDOUIsTUFBTSxFQUFFLEtBQUs7U0FDZDtJQUp3QyxDQUl2Qzs7UUEwQkEsbUJBQ1UsR0FBZSxFQUNmLE1BQWdCO1lBRGhCLFFBQUcsR0FBSCxHQUFHLENBQVk7WUFDZixXQUFNLEdBQU4sTUFBTSxDQUFVO1NBQ3JCO1FBbkJMLHNCQUNJLDRCQUFLOzs7Z0JBV1Q7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3BCOzs7Ozs7Z0JBZEQsVUFDVSxHQUFZO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLGlCQUFpQixFQUNqQjtvQkFBTSxRQUFDO3dCQUNMLFlBQVksRUFBRSxNQUFNO3FCQUNyQjtpQkFBQyxFQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixJQUFJLENBQUMsV0FBVyxDQUNqQixDQUFDO2FBQ0g7OztXQUFBOzs7O1FBVUQsNEJBQVE7OztZQUFSOztvQkFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQztnQkFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqRDs7b0JBaENGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7cUJBQ3ZCOzs7Ozt3QkFYMEJDLGVBQVU7d0JBQzVCQyxXQUFROzs7OzRCQWdCZEMsVUFBSzs7UUF5QlIsZ0JBQUM7S0FqQ0Q7Ozs7OztBQ1RBO1FBR0E7U0FNQzs7b0JBTkFDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ3BCLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDMUI7O1FBR0Qsc0JBQUM7S0FORDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==