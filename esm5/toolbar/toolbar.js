/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Optional, Renderer2, ElementRef } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
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
export { ToolbarItem };
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
export { LyToolbar };
if (false) {
    /** @type {?} */
    LyToolbar.prototype.classes;
    /** @type {?} */
    LyToolbar.prototype.theme;
}
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
export { LyToolbarRow };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFL0MsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLElBQU0sTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtRQUNmLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUNELEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxRQUFRO1FBQ2pCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsU0FBUyxFQUFFLFlBQVk7UUFDdkIsS0FBSyxFQUFFLE1BQU07UUFDYixhQUFhLEVBQUUsS0FBSztRQUNwQixVQUFVLEVBQUUsUUFBUTtRQUNwQixVQUFVLEVBQUUsUUFBUTtLQUNyQjtDQUNGLENBQUMsQ0FBQzs7SUFNRDtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztLQUM3Qzs7Z0JBTkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7O3NCQWhDRDs7U0FpQ2EsV0FBVzs7SUFZdEIsbUJBQ0UsUUFBbUIsRUFDbkIsRUFBYyxFQUNOLE9BQ0ksVUFBb0I7UUFEeEIsVUFBSyxHQUFMLEtBQUs7dUJBTEwsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7UUFRdEUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7S0FDRjs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBdENDLFNBQVM7Z0JBQ1QsVUFBVTtnQkFFTyxRQUFRO2dCQUFsQixRQUFRLHVCQTJDWixRQUFROztvQkFqRGI7O1NBMENhLFNBQVM7Ozs7Ozs7O0lBcUJwQixzQkFDRSxFQUFjLEVBQ2QsU0FBb0IsRUFDUixPQUFrQjtRQUU5QixTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7S0FFM0Q7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkF6REMsVUFBVTtnQkFEVixTQUFTO2dCQStEYyxTQUFTLHVCQUE3QixRQUFROzt1QkFsRWI7O1NBOERhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUNvbW1vbiwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzY0cHgnLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgcm93OiB7XG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfVxufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRvb2xiYXItaXRlbSdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckl0ZW0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLndhcm4oJ2x5LXRvb2xiYXItaXRlbSBAZGVwcmVjYXRlZCcpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRvb2xiYXInXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbGJhciB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHktdG9vbGJhcicsIFNUWUxFX1BSSU9SSVRZKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIEBPcHRpb25hbCgpIGJnQW5kQ29sb3I6IEx5Q29tbW9uXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb3cpO1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxufVxuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRvb2xiYXItcm93J1xufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2xiYXJSb3cge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSB0b29sYmFyOiBMeVRvb2xiYXJcbiAgKSB7XG4gICAgcmVuZGVyZXIyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHRvb2xiYXIuY2xhc3Nlcy5yb3cpO1xuICAgIC8qKiBUT0RPOiBmaXggdGhpcyAqL1xuICB9XG59XG4iXX0=