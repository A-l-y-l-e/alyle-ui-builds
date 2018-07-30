import { Component, Directive, Optional, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { LyBgColorAndRaised } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToolbarItem = /** @class */ (function () {
    function ToolbarItem() {
    }
    ToolbarItem.decorators = [
        { type: Directive, args: [{
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
        { type: Component, args: [{
                    selector: 'ly-toolbar',
                    template: '<ng-content></ng-content>',
                    styles: [":host[ly-dense]{height:48px;line-height:48px}:host{background:0 0;margin:0;max-width:100%;width:100%;min-height:48px;height:64px;box-sizing:border-box;display:flex;align-items:center;position:relative;font-size:20px}", ":host /deep/ ly-toolbar-item{font-weight:400;vertical-align:middle;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host /deep/ ly-toolbar-item[ly-toolbar-item-padding]{padding:0 16px}"],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    LyToolbar.ctorParameters = function () { return [
        { type: LyBgColorAndRaised, decorators: [{ type: Optional },] },
    ]; };
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
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

export { ToolbarItem, LyToolbar, LyToolbarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbGJhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Rvb2xiYXIvdG9vbGJhci50cyIsIm5nOi8vQGFseWxlL3VpL3Rvb2xiYXIvdG9vbGJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5QmdDb2xvckFuZFJhaXNlZCB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRvb2xiYXItaXRlbScsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJJdGVtIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRvb2xiYXInLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZXM6IFtgOmhvc3RbbHktZGVuc2Vde2hlaWdodDo0OHB4O2xpbmUtaGVpZ2h0OjQ4cHh9Omhvc3R7YmFja2dyb3VuZDowIDA7bWFyZ2luOjA7bWF4LXdpZHRoOjEwMCU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQ4cHg7aGVpZ2h0OjY0cHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOjIwcHh9YCwgYDpob3N0IC9kZWVwLyBseS10b29sYmFyLWl0ZW17Zm9udC13ZWlnaHQ6NDAwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9Omhvc3QgL2RlZXAvIGx5LXRvb2xiYXItaXRlbVtseS10b29sYmFyLWl0ZW0tcGFkZGluZ117cGFkZGluZzowIDE2cHh9YF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgYmdBbmRDb2xvcjogTHlCZ0NvbG9yQW5kUmFpc2VkXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVRvb2xiYXIsIFRvb2xiYXJJdGVtIH0gZnJvbSAnLi90b29sYmFyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVRvb2xiYXIsIFRvb2xiYXJJdGVtXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUb29sYmFyLCBUb29sYmFySXRlbV1cbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Z0JBWUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOztzQkFkRDs7O0lBeUJFLG1CQUNjO1FBRVosSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7S0FDRjs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxNQUFNLEVBQUUsQ0FBQywwTkFBME4sRUFBRSx5TkFBeU4sQ0FBQztvQkFDL2IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVpRLGtCQUFrQix1QkFnQnRCLFFBQVE7O29CQTFCYjs7Ozs7OztBQ0FBOzs7O2dCQUlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7b0JBQ2pDLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7aUJBQ3ZDOzswQkFSRDs7Ozs7Ozs7Ozs7Ozs7OyJ9