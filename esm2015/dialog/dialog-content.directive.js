import * as tslib_1 from "tslib";
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
const STYLE_PRIORITY = -2;
/** @docs-private */
const STYLES_DIALOG_CONTENT = () => (className) => `${className}{display:block;overflow-y:auto;flex:1 1 auto;padding:0 24px 24px;-webkit-overflow-scrolling:touch;}`;
const ɵ0 = STYLES_DIALOG_CONTENT;
let LyDialogContent = class LyDialogContent {
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_CONTENT, STYLE_PRIORITY));
    }
};
LyDialogContent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyDialogContent = tslib_1.__decorate([
    Directive({
        selector: 'ly-dialog-content, [ly-dialog-content], [lyDialogContent]',
        exportAs: 'lyDialogContent'
    })
], LyDialogContent);
export { LyDialogContent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy1jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTlCLG9CQUFvQjtBQUNwQixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixvQkFBb0I7QUFDcEIsTUFBTSxxQkFBcUIsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxxR0FBcUcsQ0FBQzs7QUFNN0ssSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUMxQixZQUNVLFNBQW9CLEVBQ3BCLEdBQTRCLEVBQzVCLE1BQWdCO1FBRmhCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUFJLENBQUM7SUFFL0IsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Q0FDRixDQUFBOztZQVJzQixTQUFTO1lBQ2YsVUFBVTtZQUNQLFFBQVE7O0FBSmYsZUFBZTtJQUozQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMkRBQTJEO1FBQ3JFLFFBQVEsRUFBRSxpQkFBaUI7S0FDNUIsQ0FBQztHQUNXLGVBQWUsQ0FVM0I7U0FWWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFU19ESUFMT0dfQ09OVEVOVCA9ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO292ZXJmbG93LXk6YXV0bztmbGV4OjEgMSBhdXRvO3BhZGRpbmc6MCAyNHB4IDI0cHg7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7fWA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRpYWxvZy1jb250ZW50LCBbbHktZGlhbG9nLWNvbnRlbnRdLCBbbHlEaWFsb2dDb250ZW50XScsXG4gIGV4cG9ydEFzOiAnbHlEaWFsb2dDb250ZW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeURpYWxvZ0NvbnRlbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGhlbWUucmVuZGVyU3R5bGUoU1RZTEVTX0RJQUxPR19DT05URU5ULCBTVFlMRV9QUklPUklUWSkpO1xuICB9XG59XG4iXX0=