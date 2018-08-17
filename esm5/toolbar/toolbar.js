/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Directive, Optional, ChangeDetectionStrategy } from '@angular/core';
import { LyCommon } from '@alyle/ui';
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
export { ToolbarItem };
function ToolbarItem_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ToolbarItem.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ToolbarItem.ctorParameters;
}
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
        { type: LyCommon, decorators: [{ type: Optional },] },
    ]; };
    return LyToolbar;
}());
export { LyToolbar };
function LyToolbar_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyToolbar.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyToolbar.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sYmFyLyIsInNvdXJjZXMiOlsidG9vbGJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBS1QsUUFBUSxFQUNSLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7OztnQkFFcEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOztzQkFkRDs7U0FlYSxXQUFXOzs7Ozs7Ozs7OztJQVV0QixtQkFDYztRQUVaLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsTUFBTSxFQUFFLENBQUMsME5BQTBOLEVBQUUseU5BQXlOLENBQUM7b0JBQy9iLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFaUSxRQUFRLHVCQWdCWixRQUFROztvQkExQmI7O1NBdUJhLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbiAgT3B0aW9uYWwsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb24gfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyLWl0ZW0nLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFySXRlbSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10b29sYmFyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVzOiBbYDpob3N0W2x5LWRlbnNlXXtoZWlnaHQ6NDhweDtsaW5lLWhlaWdodDo0OHB4fTpob3N0e2JhY2tncm91bmQ6MCAwO21hcmdpbjowO21heC13aWR0aDoxMDAlO3dpZHRoOjEwMCU7bWluLWhlaWdodDo0OHB4O2hlaWdodDo2NHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZToyMHB4fWAsIGA6aG9zdCAvZGVlcC8gbHktdG9vbGJhci1pdGVte2ZvbnQtd2VpZ2h0OjQwMDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfTpob3N0IC9kZWVwLyBseS10b29sYmFyLWl0ZW1bbHktdG9vbGJhci1pdGVtLXBhZGRpbmdde3BhZGRpbmc6MCAxNnB4fWBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2xiYXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIGJnQW5kQ29sb3I6IEx5Q29tbW9uXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxufVxuIl19