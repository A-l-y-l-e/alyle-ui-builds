import { Component, Directive, Optional, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { LyCommon } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ToolbarItem {
}
ToolbarItem.decorators = [
    { type: Directive, args: [{
                selector: 'ly-toolbar-item',
            },] },
];
class LyToolbar {
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
    { type: LyCommon, decorators: [{ type: Optional },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyToolbarModule {
}
LyToolbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [LyToolbar, ToolbarItem],
                declarations: [LyToolbar, ToolbarItem]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ToolbarItem, LyToolbar, LyToolbarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbGJhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Rvb2xiYXIvdG9vbGJhci50cyIsIm5nOi8vQGFseWxlL3VpL3Rvb2xiYXIvdG9vbGJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5Q29tbW9uIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdG9vbGJhci1pdGVtJyxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckl0ZW0ge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdG9vbGJhcicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlczogW2A6aG9zdFtseS1kZW5zZV17aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweH06aG9zdHtiYWNrZ3JvdW5kOjAgMDttYXJnaW46MDttYXgtd2lkdGg6MTAwJTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6NDhweDtoZWlnaHQ6NjRweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6MjBweH1gLCBgOmhvc3QgL2RlZXAvIGx5LXRvb2xiYXItaXRlbXtmb250LXdlaWdodDo0MDA7dmVydGljYWwtYWxpZ246bWlkZGxlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH06aG9zdCAvZGVlcC8gbHktdG9vbGJhci1pdGVtW2x5LXRvb2xiYXItaXRlbS1wYWRkaW5nXXtwYWRkaW5nOjAgMTZweH1gXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBiZ0FuZENvbG9yOiBMeUNvbW1vblxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlUb29sYmFyLCBUb29sYmFySXRlbSB9IGZyb20gJy4vdG9vbGJhcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlUb29sYmFyLCBUb29sYmFySXRlbV0sXG4gIGRlY2xhcmF0aW9uczogW0x5VG9vbGJhciwgVG9vbGJhckl0ZW1dXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7WUFZQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7Ozs7O0lBV0MsWUFDYztRQUVaLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsTUFBTSxFQUFFLENBQUMsME5BQTBOLEVBQUUseU5BQXlOLENBQUM7Z0JBQy9iLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBWlEsUUFBUSx1QkFnQlosUUFBUTs7Ozs7OztBQzFCYjs7O1lBSUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQztnQkFDakMsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQzthQUN2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=