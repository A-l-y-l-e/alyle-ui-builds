import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyRipple = /** @class */ (function () {
    function LyRipple() {
    }
    LyRipple.decorators = [
        { type: Directive, args: [{
                    selector: '[lyRipple], [ly-ripple]',
                    exportAs: 'lyRipple'
                },] }
    ];
    return LyRipple;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyRippleModule = /** @class */ (function () {
    function LyRippleModule() {
    }
    LyRippleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [LyRipple],
                    exports: [LyRipple]
                },] }
    ];
    return LyRippleModule;
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

export { LyRippleModule, LyRipple };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmlwcGxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmlwcGxlL3JpcHBsZS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9yaXBwbGUvcmlwcGxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCBQbGF0Zm9ybSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlSaXBwbGVdLCBbbHktcmlwcGxlXScsXG4gIGV4cG9ydEFzOiAnbHlSaXBwbGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlIHtcbiAgLy8gcmlwcGxlQ29udGFpbmVyOiBSaXBwbGU7XG4gIC8vIEBJbnB1dCgpIGx5UmlwcGxlQ2VudGVyZWQ6IGJvb2xlYW47XG4gIC8vIEBJbnB1dCgpIGx5UmlwcGxlRGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8vIEBJbnB1dCgpIGx5UmlwcGxlU2Vuc2l0aXZlOiBib29sZWFuO1xuICAvLyBASW5wdXQoKSBseVJpcHBsZVJhZGl1czogJ2NvbnRhaW5lclNpemUnIHwgbnVtYmVyO1xuICAvLyBASW5wdXQoKSBseVJpcHBsZVBlcmNlbnRhZ2VUb0luY3JlYXNlOiBudW1iZXI7XG4gIC8vIGdldCBseVJpcHBsZUNvbmZpZygpOiBSaXBwbGVDb25maWcge1xuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBjZW50ZXJlZDogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVDZW50ZXJlZCksXG4gIC8vICAgICBkaXNhYmxlZDogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVEaXNhYmxlZCksXG4gIC8vICAgICBzZW5zaXRpdmU6IHRvQm9vbGVhbih0aGlzLmx5UmlwcGxlU2Vuc2l0aXZlKSxcbiAgLy8gICAgIHJhZGl1czogdGhpcy5seVJpcHBsZVJhZGl1cyxcbiAgLy8gICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiB0aGlzLmx5UmlwcGxlUGVyY2VudGFnZVRvSW5jcmVhc2UsXG4gIC8vICAgfTtcbiAgLy8gfVxuICAvLyBjb25zdHJ1Y3RvcihcbiAgLy8gICBwcml2YXRlIHJpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgLy8gICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gIC8vICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gIC8vICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gIC8vICkge1xuICAvLyAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgLy8gICAgIHRoaXMucmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZSh0aGlzLl90aGVtZS5jb25maWcsIHRoaXMuX25nWm9uZSwgdGhpcy5yaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gbmdPbkluaXQoKSB7XG4gIC8vICAgdGhpcy5fdXBkYXRlUmlwcGxlKCk7XG4gIC8vIH1cblxuICAvLyBuZ09uQ2hhbmdlcygpIHtcbiAgLy8gICB0aGlzLl91cGRhdGVSaXBwbGUoKTtcbiAgLy8gfVxuXG4gIC8vIHByaXZhdGUgX3VwZGF0ZVJpcHBsZSgpIHtcbiAgLy8gICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gIC8vICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lci5zZXRDb25maWcodGhpcy5seVJpcHBsZUNvbmZpZyk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gbmdPbkRlc3Ryb3koKSB7XG4gIC8vICAgaWYgKHRoaXMucmlwcGxlQ29udGFpbmVyKSB7XG4gIC8vICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgLy8gICB9XG4gIC8vIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVJpcHBsZSB9IGZyb20gJy4vcmlwcGxlLmRpcmVjdGl2ZSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5UmlwcGxlXSxcbiAgZXhwb3J0czogW0x5UmlwcGxlXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJpcHBsZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFXQTtLQW1EQzs7Z0JBbkRBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsVUFBVTtpQkFDckI7O0lBZ0RELGVBQUM7Q0FuREQ7Ozs7OztBQ1hBO0lBR0E7S0FPK0I7O2dCQVA5QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUN4QixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3BCOztJQUM2QixxQkFBQztDQVAvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==