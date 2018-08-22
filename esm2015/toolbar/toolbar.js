/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Directive, Optional, ChangeDetectionStrategy } from '@angular/core';
import { LyCommon } from '@alyle/ui';
export class ToolbarItem {
}
ToolbarItem.decorators = [
    { type: Directive, args: [{
                selector: 'ly-toolbar-item',
            },] },
];
export class LyToolbar {
    /**
     * @param {?} bgAndColor
     */
    constructor(bgAndColor) {
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
    }
}
LyToolbar.decorators = [
    { type: Component, args: [{
                selector: 'ly-toolbar',
                template: '<ng-content></ng-content>',
                styles: [`:host[ly-dense]{height:48px;line-height:48px}:host{background:0 0;margin:0;max-width:100%;width:100%;min-height:48px;height:64px;box-sizing:border-box;display:flex;align-items:center;position:relative;font-size:20px}`, `:host /deep/ ly-toolbar-item{font-weight:400;vertical-align:middle;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host /deep/ ly-toolbar-item[ly-toolbar-item-padding]{padding:0 16px}`],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
LyToolbar.ctorParameters = () => [
    { type: LyCommon, decorators: [{ type: Optional }] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBS1QsUUFBUSxFQUNSLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBS3JDLE1BQU07OztZQUhMLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOztBQVNELE1BQU07Ozs7SUFFSixZQUNjLFVBQW9CO1FBRWhDLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsTUFBTSxFQUFFLENBQUMsME5BQTBOLEVBQUUseU5BQXlOLENBQUM7Z0JBQy9iLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWlEsUUFBUSx1QkFnQlosUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUNvbW1vbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRvb2xiYXItaXRlbScsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJJdGVtIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRvb2xiYXInLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZXM6IFtgOmhvc3RbbHktZGVuc2Vde2hlaWdodDo0OHB4O2xpbmUtaGVpZ2h0OjQ4cHh9Omhvc3R7YmFja2dyb3VuZDowIDA7bWFyZ2luOjA7bWF4LXdpZHRoOjEwMCU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQ4cHg7aGVpZ2h0OjY0cHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOjIwcHh9YCwgYDpob3N0IC9kZWVwLyBseS10b29sYmFyLWl0ZW17Zm9udC13ZWlnaHQ6NDAwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9Omhvc3QgL2RlZXAvIGx5LXRvb2xiYXItaXRlbVtseS10b29sYmFyLWl0ZW0tcGFkZGluZ117cGFkZGluZzowIDE2cHh9YF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgYmdBbmRDb2xvcjogTHlDb21tb25cbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=