(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/ripple', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.ripple = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyRipple = /** @class */ (function () {
        function LyRipple() {
        }
        LyRipple.decorators = [
            { type: core.Directive, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.LyRippleModule = LyRippleModule;
    exports.LyRipple = LyRipple;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmlwcGxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3JpcHBsZS9yaXBwbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmlwcGxlL3JpcHBsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgUGxhdGZvcm0sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5UmlwcGxlXSwgW2x5LXJpcHBsZV0nLFxuICBleHBvcnRBczogJ2x5UmlwcGxlJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVJpcHBsZSB7XG4gIC8vIHJpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICAvLyBASW5wdXQoKSBseVJpcHBsZUNlbnRlcmVkOiBib29sZWFuO1xuICAvLyBASW5wdXQoKSBseVJpcHBsZURpc2FibGVkOiBib29sZWFuO1xuICAvLyBASW5wdXQoKSBseVJpcHBsZVNlbnNpdGl2ZTogYm9vbGVhbjtcbiAgLy8gQElucHV0KCkgbHlSaXBwbGVSYWRpdXM6ICdjb250YWluZXJTaXplJyB8IG51bWJlcjtcbiAgLy8gQElucHV0KCkgbHlSaXBwbGVQZXJjZW50YWdlVG9JbmNyZWFzZTogbnVtYmVyO1xuICAvLyBnZXQgbHlSaXBwbGVDb25maWcoKTogUmlwcGxlQ29uZmlnIHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgY2VudGVyZWQ6IHRvQm9vbGVhbih0aGlzLmx5UmlwcGxlQ2VudGVyZWQpLFxuICAvLyAgICAgZGlzYWJsZWQ6IHRvQm9vbGVhbih0aGlzLmx5UmlwcGxlRGlzYWJsZWQpLFxuICAvLyAgICAgc2Vuc2l0aXZlOiB0b0Jvb2xlYW4odGhpcy5seVJpcHBsZVNlbnNpdGl2ZSksXG4gIC8vICAgICByYWRpdXM6IHRoaXMubHlSaXBwbGVSYWRpdXMsXG4gIC8vICAgICBwZXJjZW50YWdlVG9JbmNyZWFzZTogdGhpcy5seVJpcHBsZVBlcmNlbnRhZ2VUb0luY3JlYXNlLFxuICAvLyAgIH07XG4gIC8vIH1cbiAgLy8gY29uc3RydWN0b3IoXG4gIC8vICAgcHJpdmF0ZSByaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gIC8vICAgcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAvLyAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAvLyAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICAvLyApIHtcbiAgLy8gICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gIC8vICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUodGhpcy5fdGhlbWUuY29uZmlnLCB0aGlzLl9uZ1pvbmUsIHRoaXMucmlwcGxlU2VydmljZS5jbGFzc2VzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIG5nT25Jbml0KCkge1xuICAvLyAgIHRoaXMuX3VwZGF0ZVJpcHBsZSgpO1xuICAvLyB9XG5cbiAgLy8gbmdPbkNoYW5nZXMoKSB7XG4gIC8vICAgdGhpcy5fdXBkYXRlUmlwcGxlKCk7XG4gIC8vIH1cblxuICAvLyBwcml2YXRlIF91cGRhdGVSaXBwbGUoKSB7XG4gIC8vICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAvLyAgICAgdGhpcy5yaXBwbGVDb250YWluZXIuc2V0Q29uZmlnKHRoaXMubHlSaXBwbGVDb25maWcpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIG5nT25EZXN0cm95KCkge1xuICAvLyAgIGlmICh0aGlzLnJpcHBsZUNvbnRhaW5lcikge1xuICAvLyAgICAgdGhpcy5yaXBwbGVDb250YWluZXIucmVtb3ZlRXZlbnRzKCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlSaXBwbGUgfSBmcm9tICcuL3JpcHBsZS5kaXJlY3RpdmUnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJpcHBsZV0sXG4gIGV4cG9ydHM6IFtMeVJpcHBsZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVdBO1NBbURDOztvQkFuREFBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUseUJBQXlCO3dCQUNuQyxRQUFRLEVBQUUsVUFBVTtxQkFDckI7O1FBZ0RELGVBQUM7S0FuREQ7Ozs7OztBQ1hBO1FBR0E7U0FPK0I7O29CQVA5QkMsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUN4QixPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBQ3BCOztRQUM2QixxQkFBQztLQVAvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==