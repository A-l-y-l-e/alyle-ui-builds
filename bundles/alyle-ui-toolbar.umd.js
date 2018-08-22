(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/toolbar', ['exports', '@angular/core', '@alyle/ui', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.toolbar = {}),global.ng.core,global.alyle.ui,global.ng.common));
}(this, (function (exports,core,ui,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                { type: ui.LyCommon, decorators: [{ type: core.Optional }] }
            ];
        };
        return LyToolbar;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

    exports.ToolbarItem = ToolbarItem;
    exports.LyToolbar = LyToolbar;
    exports.LyToolbarModule = LyToolbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbGJhci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90b29sYmFyL3Rvb2xiYXIudHMiLCJuZzovL0BhbHlsZS91aS90b29sYmFyL3Rvb2xiYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUNvbW1vbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRvb2xiYXItaXRlbScsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJJdGVtIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRvb2xiYXInLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZXM6IFtgOmhvc3RbbHktZGVuc2Vde2hlaWdodDo0OHB4O2xpbmUtaGVpZ2h0OjQ4cHh9Omhvc3R7YmFja2dyb3VuZDowIDA7bWFyZ2luOjA7bWF4LXdpZHRoOjEwMCU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQ4cHg7aGVpZ2h0OjY0cHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOjIwcHh9YCwgYDpob3N0IC9kZWVwLyBseS10b29sYmFyLWl0ZW17Zm9udC13ZWlnaHQ6NDAwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9Omhvc3QgL2RlZXAvIGx5LXRvb2xiYXItaXRlbVtseS10b29sYmFyLWl0ZW0tcGFkZGluZ117cGFkZGluZzowIDE2cHh9YF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgYmdBbmRDb2xvcjogTHlDb21tb25cbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5VG9vbGJhciwgVG9vbGJhckl0ZW0gfSBmcm9tICcuL3Rvb2xiYXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5VG9vbGJhciwgVG9vbGJhckl0ZW1dLFxuICBkZWNsYXJhdGlvbnM6IFtMeVRvb2xiYXIsIFRvb2xiYXJJdGVtXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2xiYXJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJMeUNvbW1vbiIsIk9wdGlvbmFsIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztvQkFZQ0EsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxpQkFBaUI7cUJBQzVCOzswQkFkRDs7O1FBeUJFLG1CQUNjLFVBQW9CO1lBRWhDLElBQUksVUFBVSxFQUFFO2dCQUNkLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUM5QjtTQUNGOztvQkFkRkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsMkJBQTJCO3dCQUNyQyxNQUFNLEVBQUUsQ0FBQywwTkFBME4sRUFBRSx5TkFBeU4sQ0FBQzt3QkFDL2IsZUFBZSxFQUFFQyw0QkFBdUIsQ0FBQyxNQUFNO3FCQUNoRDs7Ozs7d0JBWlFDLFdBQVEsdUJBZ0JaQyxhQUFROzs7d0JBMUJiOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksQ0FBQzt3QkFDdkIsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQzt3QkFDakMsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQztxQkFDdkM7OzhCQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=