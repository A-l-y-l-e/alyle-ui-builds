import * as tslib_1 from "tslib";
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
/** @docs-private */
var STYLE_PRIORITY = -2;
/** @docs-private */
var STYLES_DIALOG_TITLE = function (theme) { return function (className) { return className + "{display:block;flex:0 0 auto;margin:20px 0 16px;padding:0 24px;font-size:20px;line-height:24px;font-weight:500;font-family:" + theme.typography.fontFamily + ";}"; }; };
var ɵ0 = STYLES_DIALOG_TITLE;
var LyDialogTitle = /** @class */ (function () {
    function LyDialogTitle(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    LyDialogTitle.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_TITLE, STYLE_PRIORITY));
    };
    LyDialogTitle.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyDialogTitle = tslib_1.__decorate([
        Directive({
            selector: '[ly-dialog-title], [lyDialogTitle]',
            exportAs: 'lyDialogTitle'
        })
    ], LyDialogTitle);
    return LyDialogTitle;
}());
export { LyDialogTitle };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXRpdGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctdGl0bGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFDTCxRQUFRLEVBQ1IsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXBDLG9CQUFvQjtBQUNwQixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixvQkFBb0I7QUFDcEIsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLG1JQUE4SCxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsT0FBSSxFQUF6SyxDQUF5SyxFQUFoTSxDQUFnTSxDQUFDOztBQU14UDtJQUNFLHVCQUNVLFNBQW9CLEVBQ3BCLEdBQTRCLEVBQzVCLE1BQWdCO1FBRmhCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUFJLENBQUM7SUFFL0IsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7O2dCQVBvQixTQUFTO2dCQUNmLFVBQVU7Z0JBQ1AsUUFBUTs7SUFKZixhQUFhO1FBSnpCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQ0FBb0M7WUFDOUMsUUFBUSxFQUFFLGVBQWU7U0FDMUIsQ0FBQztPQUNXLGFBQWEsQ0FVekI7SUFBRCxvQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFU19ESUFMT0dfVElUTEUgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jaztmbGV4OjAgMCBhdXRvO21hcmdpbjoyMHB4IDAgMTZweDtwYWRkaW5nOjAgMjRweDtmb250LXNpemU6MjBweDtsaW5lLWhlaWdodDoyNHB4O2ZvbnQtd2VpZ2h0OjUwMDtmb250LWZhbWlseToke3RoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseX07fWA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1kaWFsb2ctdGl0bGVdLCBbbHlEaWFsb2dUaXRsZV0nLFxuICBleHBvcnRBczogJ2x5RGlhbG9nVGl0bGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nVGl0bGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGhlbWUucmVuZGVyU3R5bGUoU1RZTEVTX0RJQUxPR19USVRMRSwgU1RZTEVfUFJJT1JJVFkpKTtcbiAgfVxufVxuIl19