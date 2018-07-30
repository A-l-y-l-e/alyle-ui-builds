(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/toolbar', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.toolbar = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,core,ui,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ToolbarItem = /** @class */ (function () {
        function ToolbarItem() {
        }
        ToolbarItem.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ly-toolbar-item',
                    },] },
        ];
        return ToolbarItem;
    }());
    var LyToolbar = /** @class */ (function () {
        function LyToolbar(bgAndColor) {
            if (bgAndColor) {
                bgAndColor.setAutoContrast();
            }
        }
        LyToolbar.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-toolbar',
                        template: '<ng-content></ng-content>',
                        styles: [":host[ly-dense]{height:48px;line-height:48px}:host{background:0 0;margin:0;max-width:100%;width:100%;min-height:48px;height:64px;box-sizing:border-box;display:flex;align-items:center;position:relative;font-size:20px}", ":host /deep/ ly-toolbar-item{font-weight:400;vertical-align:middle;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host /deep/ ly-toolbar-item[ly-toolbar-item-padding]{padding:0 16px}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        /** @nocollapse */
        LyToolbar.ctorParameters = function () {
            return [
                { type: ui.LyBgColorAndRaised, decorators: [{ type: core.Optional },] },
            ];
        };
        return LyToolbar;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyToolbarModule = /** @class */ (function () {
        function LyToolbarModule() {
        }
        LyToolbarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [LyToolbar, ToolbarItem],
                        declarations: [LyToolbar, ToolbarItem]
                    },] },
        ];
        return LyToolbarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ToolbarItem = ToolbarItem;
    exports.LyToolbar = LyToolbar;
    exports.LyToolbarModule = LyToolbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbGJhci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90b29sYmFyL3Rvb2xiYXIudHMiLCJuZzovL0BhbHlsZS91aS90b29sYmFyL3Rvb2xiYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUJnQ29sb3JBbmRSYWlzZWQgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyLWl0ZW0nLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFySXRlbSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVzOiBbYDpob3N0W2x5LWRlbnNlXXtoZWlnaHQ6NDhweDtsaW5lLWhlaWdodDo0OHB4fTpob3N0e2JhY2tncm91bmQ6MCAwO21hcmdpbjowO21heC13aWR0aDoxMDAlO3dpZHRoOjEwMCU7bWluLWhlaWdodDo0OHB4O2hlaWdodDo2NHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZToyMHB4fWAsIGA6aG9zdCAvZGVlcC8gbHktdG9vbGJhci1pdGVte2ZvbnQtd2VpZ2h0OjQwMDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfTpob3N0IC9kZWVwLyBseS10b29sYmFyLWl0ZW1bbHktdG9vbGJhci1pdGVtLXBhZGRpbmdde3BhZGRpbmc6MCAxNnB4fWBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2xiYXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIGJnQW5kQ29sb3I6IEx5QmdDb2xvckFuZFJhaXNlZFxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlUb29sYmFyLCBUb29sYmFySXRlbSB9IGZyb20gJy4vdG9vbGJhcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlUb29sYmFyLCBUb29sYmFySXRlbV0sXG4gIGRlY2xhcmF0aW9uczogW0x5VG9vbGJhciwgVG9vbGJhckl0ZW1dXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkx5QmdDb2xvckFuZFJhaXNlZCIsIk9wdGlvbmFsIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztvQkFZQ0EsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxpQkFBaUI7cUJBQzVCOzswQkFkRDs7O1FBeUJFLG1CQUNjO1lBRVosSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7O29CQWRGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSwyQkFBMkI7d0JBQ3JDLE1BQU0sRUFBRSxDQUFDLDBOQUEwTixFQUFFLHlOQUF5TixDQUFDO3dCQUMvYixlQUFlLEVBQUVDLDRCQUF1QixDQUFDLE1BQU07cUJBQ2hEOzs7Ozt3QkFaUUMscUJBQWtCLHVCQWdCdEJDLGFBQVE7Ozt3QkExQmI7Ozs7Ozs7QUNBQTs7OztvQkFJQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxDQUFDQyxtQkFBWSxDQUFDO3dCQUN2QixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO3dCQUNqQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO3FCQUN2Qzs7OEJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=