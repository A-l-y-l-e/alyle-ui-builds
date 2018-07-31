(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/card', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.card = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,core,ui,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ DEFAULT_ELEVATION = 2;
    var LyCard = /** @class */ (function () {
        function LyCard(styler, elementRef, renderer) {
            this.styler = styler;
            this.elementRef = elementRef;
            this.renderer = renderer;
        }
        Object.defineProperty(LyCard.prototype, "elevation", {
            get: /**
             * @return {?}
             */ function () {
                return this._elevation;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (this.elevation !== val) {
                    var /** @type {?} */ newClass = this._createElevationClass(val);
                    this._elevationClass = this.styler.updateClass(this.elementRef.nativeElement, this.renderer, newClass, this._elevationClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyCard.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.elevation === void 0) {
                    this.elevation = DEFAULT_ELEVATION;
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyCard.prototype._createElevationClass = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                var _this = this;
                this._elevation = ui.defaultEntry(val, DEFAULT_ELEVATION);
                return this.styler.setUpStyleSecondary("k-card-e:" + this.elevation, function (theme) {
                    return ("background-color:" + theme.background.primary + ";" +
                        "display:block;" +
                        "position:relative;" +
                        "padding:24px;" +
                        "border-radius:2px;" +
                        ("" + ui.shadowBuilder(_this.elevation)));
                });
            };
        LyCard.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-card'
                    },] },
        ];
        /** @nocollapse */
        LyCard.ctorParameters = function () {
            return [
                { type: ui.LyTheme2, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        LyCard.propDecorators = {
            "elevation": [{ type: core.Input },],
        };
        return LyCard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyCardModule = /** @class */ (function () {
        function LyCardModule() {
        }
        LyCardModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        exports: [LyCard],
                        declarations: [LyCard]
                    },] },
        ];
        return LyCardModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LyCardModule = LyCardModule;
    exports.LyCard = LyCard;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIHNoYWRvd0J1aWxkZXIsIGRlZmF1bHRFbnRyeSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IERFRkFVTFRfRUxFVkFUSU9OID0gMjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktY2FyZCdcbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZWxldmF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIHByaXZhdGUgX2VsZXZhdGlvbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBlbGV2YXRpb24odmFsOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5lbGV2YXRpb24gIT09IHZhbCkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVFbGV2YXRpb25DbGFzcyh2YWwpO1xuICAgICAgdGhpcy5fZWxldmF0aW9uQ2xhc3MgPSB0aGlzLnN0eWxlci51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2VsZXZhdGlvbkNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGVsZXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxldmF0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXI6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5lbGV2YXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgdGhpcy5lbGV2YXRpb24gPSBERUZBVUxUX0VMRVZBVElPTjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGV2YXRpb25DbGFzcyh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMuX2VsZXZhdGlvbiA9IGRlZmF1bHRFbnRyeSh2YWwsIERFRkFVTFRfRUxFVkFUSU9OKTtcbiAgICByZXR1cm4gdGhpcy5zdHlsZXIuc2V0VXBTdHlsZVNlY29uZGFyeTxhbnk+KFxuICAgICAgYGstY2FyZC1lOiR7dGhpcy5lbGV2YXRpb259YCxcbiAgICAgIHRoZW1lID0+IChcbiAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnl9O2AgK1xuICAgICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgICBgcGFkZGluZzoyNHB4O2AgK1xuICAgICAgICBgYm9yZGVyLXJhZGl1czoycHg7YCArXG4gICAgICAgIGAke3NoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24pfWBcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q2FyZCB9IGZyb20gJy4vY2FyZC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeUNhcmRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUNhcmRdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2FyZE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJkZWZhdWx0RW50cnkiLCJzaGFkb3dCdWlsZGVyIiwiRGlyZWN0aXZlIiwiTHlUaGVtZTIiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBR0EscUJBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDOztRQW1CMUIsZ0JBQ1UsUUFDQSxZQUNBO1lBRkEsV0FBTSxHQUFOLE1BQU07WUFDTixlQUFVLEdBQVYsVUFBVTtZQUNWLGFBQVEsR0FBUixRQUFRO1NBQ2I7OEJBZEQsNkJBQVM7OztnQkFNYjtnQkFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDeEI7Ozs7MEJBUmEsR0FBb0I7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxHQUFHLEVBQUU7b0JBQzFCLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUM5SDs7Ozs7Ozs7UUFZSCx5QkFBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFO29CQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO2lCQUNwQzthQUNGOzs7OztRQUVPLHNDQUFxQjs7OztzQkFBQyxHQUFvQjs7Z0JBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUdBLGVBQVksQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDdkQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUNwQyxjQUFZLElBQUksQ0FBQyxTQUFXLEVBQzVCLFVBQUEsS0FBSztvQkFBSSxRQUNQLHNCQUFvQixLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sTUFBRzt3QkFDL0MsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2Ysb0JBQW9CO3lCQUNwQixLQUFHQyxnQkFBYSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUcsQ0FBQTtpQkFDbkMsQ0FDRixDQUFDOzs7b0JBekNMQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFNBQVM7cUJBQ3BCOzs7Ozt3QkFOUUMsV0FBUTt3QkFEY0MsZUFBVTt3QkFBckJDLGNBQVM7Ozs7a0NBVzFCQyxVQUFLOztxQkFYUjs7Ozs7OztBQ0FBOzs7O29CQUlDQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0JBQ2pCLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztxQkFDdkI7OzJCQVZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=