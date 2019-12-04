import * as tslib_1 from "tslib";
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
const STYLE_PRIORITY = -2;
/** @docs-private */
const STYLES_DIALOG_ACTIONS = () => (className) => `${className}{display:flex;flex:0 0 auto;padding:8px;flex-wrap:wrap;min-height:52px;align-items:center;}`;
const ɵ0 = STYLES_DIALOG_ACTIONS;
let LyDialogActions = class LyDialogActions {
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_ACTIONS, STYLE_PRIORITY));
    }
};
LyDialogActions.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyDialogActions = tslib_1.__decorate([
    Directive({
        selector: 'ly-dialog-actions, [ly-dialog-actions], [lyDialogActions]',
        exportAs: 'lyDialogActions'
    })
], LyDialogActions);
export { LyDialogActions };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFjdGlvbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy1hY3Rpb25zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTlCLG9CQUFvQjtBQUNwQixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixvQkFBb0I7QUFDcEIsTUFBTSxxQkFBcUIsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyw2RkFBNkYsQ0FBQzs7QUFNckssSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUMxQixZQUNVLFNBQW9CLEVBQ3BCLEdBQTRCLEVBQzVCLE1BQWdCO1FBRmhCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUFJLENBQUM7SUFFL0IsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Q0FDRixDQUFBOztZQVJzQixTQUFTO1lBQ2YsVUFBVTtZQUNQLFFBQVE7O0FBSmYsZUFBZTtJQUozQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMkRBQTJEO1FBQ3JFLFFBQVEsRUFBRSxpQkFBaUI7S0FDNUIsQ0FBQztHQUNXLGVBQWUsQ0FVM0I7U0FWWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFU19ESUFMT0dfQUNUSU9OUyA9ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmZsZXg7ZmxleDowIDAgYXV0bztwYWRkaW5nOjhweDtmbGV4LXdyYXA6d3JhcDttaW4taGVpZ2h0OjUycHg7YWxpZ24taXRlbXM6Y2VudGVyO31gO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kaWFsb2ctYWN0aW9ucywgW2x5LWRpYWxvZy1hY3Rpb25zXSwgW2x5RGlhbG9nQWN0aW9uc10nLFxuICBleHBvcnRBczogJ2x5RGlhbG9nQWN0aW9ucydcbn0pXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dBY3Rpb25zIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlKFNUWUxFU19ESUFMT0dfQUNUSU9OUywgU1RZTEVfUFJJT1JJVFkpKTtcbiAgfVxufVxuIl19