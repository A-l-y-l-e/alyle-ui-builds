import { Directive, Optional, Renderer2, ElementRef, NgModule } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = ({
    root: {
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'row',
        alignItems: 'center',
        height: '64px',
        width: '100%'
    },
    row: {
        padding: '0 16px',
        display: 'flex',
        boxSizing: 'border-box',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        whiteSpace: 'nowrap'
    }
});
var ToolbarItem = /** @class */ (function () {
    function ToolbarItem() {
        console.warn('ly-toolbar-item @deprecated');
    }
    ToolbarItem.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-toolbar-item'
                },] },
    ];
    /** @nocollapse */
    ToolbarItem.ctorParameters = function () { return []; };
    return ToolbarItem;
}());
var LyToolbar = /** @class */ (function () {
    function LyToolbar(renderer, el, theme, bgAndColor) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'ly-toolbar', STYLE_PRIORITY);
        renderer.addClass(el.nativeElement, this.classes.row);
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
    }
    LyToolbar.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-toolbar'
                },] },
    ];
    /** @nocollapse */
    LyToolbar.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 },
        { type: LyCommon, decorators: [{ type: Optional }] }
    ]; };
    return LyToolbar;
}());
var LyToolbarRow = /** @class */ (function () {
    function LyToolbarRow(el, renderer2, toolbar) {
        renderer2.addClass(el.nativeElement, toolbar.classes.row);
        /** TODO: fix this */
    }
    LyToolbarRow.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-toolbar-row'
                },] },
    ];
    /** @nocollapse */
    LyToolbarRow.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyToolbar, decorators: [{ type: Optional }] }
    ]; };
    return LyToolbarRow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyToolbarModule = /** @class */ (function () {
    function LyToolbarModule() {
    }
    LyToolbarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [LyToolbar, ToolbarItem, LyToolbarRow],
                    declarations: [LyToolbar, ToolbarItem, LyToolbarRow]
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

export { ToolbarItem, LyToolbar, LyToolbarRow, LyToolbarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbGJhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Rvb2xiYXIvdG9vbGJhci50cyIsIm5nOi8vQGFseWxlL3VpL3Rvb2xiYXIvdG9vbGJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb24sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICc2NHB4JyxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHJvdzoge1xuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH1cbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyLWl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJJdGVtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS53YXJuKCdseS10b29sYmFyLWl0ZW0gQGRlcHJlY2F0ZWQnKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2xiYXIge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5LXRvb2xiYXInLCBTVFlMRV9QUklPUklUWSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBAT3B0aW9uYWwoKSBiZ0FuZENvbG9yOiBMeUNvbW1vblxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm93KTtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyLXJvdydcbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyUm93IHtcbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgdG9vbGJhcjogTHlUb29sYmFyXG4gICkge1xuICAgIHJlbmRlcmVyMi5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCB0b29sYmFyLmNsYXNzZXMucm93KTtcbiAgICAvKiogVE9ETzogZml4IHRoaXMgKi9cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVRvb2xiYXIsIFRvb2xiYXJJdGVtLCBMeVRvb2xiYXJSb3cgfSBmcm9tICcuL3Rvb2xiYXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5VG9vbGJhciwgVG9vbGJhckl0ZW0sIEx5VG9vbGJhclJvd10sXG4gIGRlY2xhcmF0aW9uczogW0x5VG9vbGJhciwgVG9vbGJhckl0ZW0sIEx5VG9vbGJhclJvd11cbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFRQSxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsSUFBTSxNQUFNLElBQUk7SUFDZCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsU0FBUyxFQUFFLFlBQVk7UUFDdkIsS0FBSyxFQUFFLE1BQU07UUFDYixhQUFhLEVBQUUsS0FBSztRQUNwQixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsUUFBUTtLQUNyQjtDQUNGLENBQUMsQ0FBQzs7SUFNRDtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztLQUM3Qzs7Z0JBTkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7O3NCQWhDRDs7O0lBNkNFLG1CQUNFLFFBQW1CLEVBQ25CLEVBQWMsRUFDTixPQUNJLFVBQW9CO1FBRHhCLFVBQUssR0FBTCxLQUFLO3VCQUxMLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO1FBUXRFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQXRDQyxTQUFTO2dCQUNULFVBQVU7Z0JBRU8sUUFBUTtnQkFBbEIsUUFBUSx1QkEyQ1osUUFBUTs7b0JBakRiOzs7SUErREUsc0JBQ0UsRUFBYyxFQUNkLFNBQW9CLEVBQ1IsT0FBa0I7UUFFOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7O0tBRTNEOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBekRDLFVBQVU7Z0JBRFYsU0FBUztnQkErRGMsU0FBUyx1QkFBN0IsUUFBUTs7dUJBbEViOzs7Ozs7O0FDQUE7Ozs7Z0JBSUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7b0JBQy9DLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO2lCQUNyRDs7MEJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9