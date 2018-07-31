import { Directive, Renderer2, ElementRef, Input, NgModule } from '@angular/core';
import { LyTheme2, shadowBuilder, defaultEntry } from '@alyle/ui';
import { CommonModule } from '@angular/common';

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
         */
        function () {
            return this._elevation;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        this._elevation = defaultEntry(val, DEFAULT_ELEVATION);
        return this.styler.setUpStyleSecondary("k-card-e:" + this.elevation, function (theme) {
            return ("background-color:" + theme.background.primary + ";" +
                "display:block;" +
                "position:relative;" +
                "padding:24px;" +
                "border-radius:2px;" +
                ("" + shadowBuilder(_this.elevation)));
        });
    };
    LyCard.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-card'
                },] },
    ];
    /** @nocollapse */
    LyCard.ctorParameters = function () { return [
        { type: LyTheme2, },
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    LyCard.propDecorators = {
        "elevation": [{ type: Input },],
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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

export { LyCardModule, LyCard };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktY2FyZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2NhcmQvY2FyZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9jYXJkL2NhcmQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgc2hhZG93QnVpbGRlciwgZGVmYXVsdEVudHJ5IH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgREVGQVVMVF9FTEVWQVRJT04gPSAyO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1jYXJkJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUNhcmQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9lbGV2YXRpb246IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfZWxldmF0aW9uQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGVsZXZhdGlvbih2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh0aGlzLmVsZXZhdGlvbiAhPT0gdmFsKSB7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZUVsZXZhdGlvbkNsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9lbGV2YXRpb25DbGFzcyA9IHRoaXMuc3R5bGVyLnVwZGF0ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fZWxldmF0aW9uQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgZWxldmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGV2YXRpb247XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlcjogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmVsZXZhdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICB0aGlzLmVsZXZhdGlvbiA9IERFRkFVTFRfRUxFVkFUSU9OO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVsZXZhdGlvbkNsYXNzKHZhbDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5fZWxldmF0aW9uID0gZGVmYXVsdEVudHJ5KHZhbCwgREVGQVVMVF9FTEVWQVRJT04pO1xuICAgIHJldHVybiB0aGlzLnN0eWxlci5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueT4oXG4gICAgICBgay1jYXJkLWU6JHt0aGlzLmVsZXZhdGlvbn1gLFxuICAgICAgdGhlbWUgPT4gKFxuICAgICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLmJhY2tncm91bmQucHJpbWFyeX07YCArXG4gICAgICAgIGBkaXNwbGF5OmJsb2NrO2AgK1xuICAgICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gICAgICAgIGBwYWRkaW5nOjI0cHg7YCArXG4gICAgICAgIGBib3JkZXItcmFkaXVzOjJweDtgICtcbiAgICAgICAgYCR7c2hhZG93QnVpbGRlcih0aGlzLmVsZXZhdGlvbil9YFxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDYXJkIH0gZnJvbSAnLi9jYXJkLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0x5Q2FyZF0sXG4gIGRlY2xhcmF0aW9uczogW0x5Q2FyZF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDYXJkTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsQUFHQSxxQkFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7O0lBbUIxQixnQkFDVSxRQUNBLFlBQ0E7UUFGQSxXQUFNLEdBQU4sTUFBTTtRQUNOLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7S0FDYjswQkFkRCw2QkFBUzs7OztRQU1iO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztrQkFSYSxHQUFvQjtZQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssR0FBRyxFQUFFO2dCQUMxQixxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUM5SDs7Ozs7Ozs7SUFZSCx5QkFBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztTQUNwQztLQUNGOzs7OztJQUVPLHNDQUFxQjs7OztjQUFDLEdBQW9COztRQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQ3BDLGNBQVksSUFBSSxDQUFDLFNBQVcsRUFDNUIsVUFBQSxLQUFLO1lBQUksUUFDUCxzQkFBb0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLE1BQUc7Z0JBQy9DLGdCQUFnQjtnQkFDaEIsb0JBQW9CO2dCQUNwQixlQUFlO2dCQUNmLG9CQUFvQjtpQkFDcEIsS0FBRyxhQUFhLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBRyxDQUFBO1NBQ25DLENBQ0YsQ0FBQzs7O2dCQXpDTCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7aUJBQ3BCOzs7O2dCQU5RLFFBQVE7Z0JBRGMsVUFBVTtnQkFBckIsU0FBUzs7OzhCQVcxQixLQUFLOztpQkFYUjs7Ozs7OztBQ0FBOzs7O2dCQUlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0JBQ2pCLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztpQkFDdkI7O3VCQVZEOzs7Ozs7Ozs7Ozs7Ozs7In0=