/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function ToolbarItem_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ToolbarItem.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ToolbarItem.ctorParameters;
}
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
    { type: LyCommon, decorators: [{ type: Optional },] },
];
function LyToolbar_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyToolbar.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyToolbar.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBS1QsUUFBUSxFQUNSLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBS3JDLE1BQU07OztZQUhMLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7Ozs7Ozs7OztBQVNELE1BQU07Ozs7SUFFSixZQUNjO1FBRVosSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7S0FDRjs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxNQUFNLEVBQUUsQ0FBQywwTkFBME4sRUFBRSx5TkFBeU4sQ0FBQztnQkFDL2IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFaUSxRQUFRLHVCQWdCWixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5Q29tbW9uIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdG9vbGJhci1pdGVtJyxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckl0ZW0ge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdG9vbGJhcicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlczogW2A6aG9zdFtseS1kZW5zZV17aGVpZ2h0OjQ4cHg7bGluZS1oZWlnaHQ6NDhweH06aG9zdHtiYWNrZ3JvdW5kOjAgMDttYXJnaW46MDttYXgtd2lkdGg6MTAwJTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6NDhweDtoZWlnaHQ6NjRweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6MjBweH1gLCBgOmhvc3QgL2RlZXAvIGx5LXRvb2xiYXItaXRlbXtmb250LXdlaWdodDo0MDA7dmVydGljYWwtYWxpZ246bWlkZGxlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH06aG9zdCAvZGVlcC8gbHktdG9vbGJhci1pdGVtW2x5LXRvb2xiYXItaXRlbS1wYWRkaW5nXXtwYWRkaW5nOjAgMTZweH1gXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBiZ0FuZENvbG9yOiBMeUNvbW1vblxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==