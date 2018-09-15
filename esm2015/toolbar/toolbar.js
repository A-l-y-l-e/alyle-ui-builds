/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Optional, Renderer2, ElementRef } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = ({
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
export class ToolbarItem {
    constructor() {
        console.warn('ly-toolbar-item @deprecated');
    }
}
ToolbarItem.decorators = [
    { type: Directive, args: [{
                selector: 'ly-toolbar-item'
            },] },
];
/** @nocollapse */
ToolbarItem.ctorParameters = () => [];
export class LyToolbar {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} theme
     * @param {?} bgAndColor
     */
    constructor(renderer, el, theme, bgAndColor) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'ly-toolbar', STYLE_PRIORITY);
        renderer.addClass(el.nativeElement, this.classes.row);
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
    }
}
LyToolbar.decorators = [
    { type: Directive, args: [{
                selector: 'ly-toolbar'
            },] },
];
/** @nocollapse */
LyToolbar.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 },
    { type: LyCommon, decorators: [{ type: Optional }] }
];
if (false) {
    /** @type {?} */
    LyToolbar.prototype.classes;
    /** @type {?} */
    LyToolbar.prototype.theme;
}
export class LyToolbarRow {
    /**
     * @param {?} el
     * @param {?} renderer2
     * @param {?} toolbar
     */
    constructor(el, renderer2, toolbar) {
        renderer2.addClass(el.nativeElement, toolbar.classes.row);
        /** TODO: fix this */
    }
}
LyToolbarRow.decorators = [
    { type: Directive, args: [{
                selector: 'ly-toolbar-row'
            },] },
];
/** @nocollapse */
LyToolbarRow.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyToolbar, decorators: [{ type: Optional }] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFL0MsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLE1BQU0sTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsU0FBUyxFQUFFLFlBQVk7UUFDdkIsS0FBSyxFQUFFLE1BQU07UUFDYixhQUFhLEVBQUUsS0FBSztRQUNwQixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsUUFBUTtLQUNyQjtDQUNGLENBQUMsQ0FBQztBQUtILE1BQU07SUFDSjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztLQUM3Qzs7O1lBTkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7QUFVRCxNQUFNOzs7Ozs7O0lBR0osWUFDRSxRQUFtQixFQUNuQixFQUFjLEVBQ04sT0FDSSxVQUFvQjtRQUR4QixVQUFLLEdBQUwsS0FBSzt1QkFMTCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQztRQVF0RSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBdENDLFNBQVM7WUFDVCxVQUFVO1lBRU8sUUFBUTtZQUFsQixRQUFRLHVCQTJDWixRQUFROzs7Ozs7OztBQWFiLE1BQU07Ozs7OztJQUNKLFlBQ0UsRUFBYyxFQUNkLFNBQW9CLEVBQ1IsT0FBa0I7UUFFOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7O0tBRTNEOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7OztZQXpEQyxVQUFVO1lBRFYsU0FBUztZQStEYyxTQUFTLHVCQUE3QixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb24sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICc2NHB4JyxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHJvdzoge1xuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH1cbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyLWl0ZW0nXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJJdGVtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS53YXJuKCdseS10b29sYmFyLWl0ZW0gQGRlcHJlY2F0ZWQnKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2xiYXIge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5LXRvb2xiYXInLCBTVFlMRV9QUklPUklUWSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBAT3B0aW9uYWwoKSBiZ0FuZENvbG9yOiBMeUNvbW1vblxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm93KTtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyLXJvdydcbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sYmFyUm93IHtcbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgdG9vbGJhcjogTHlUb29sYmFyXG4gICkge1xuICAgIHJlbmRlcmVyMi5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCB0b29sYmFyLmNsYXNzZXMucm93KTtcbiAgICAvKiogVE9ETzogZml4IHRoaXMgKi9cbiAgfVxufVxuIl19