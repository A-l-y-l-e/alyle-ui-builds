import * as tslib_1 from "tslib";
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
/** @docs-private */
const STYLE_PRIORITY = -2;
/** @docs-private */
const STYLES_DIALOG_TITLE = (theme) => (className) => `${className}{display:block;flex:0 0 auto;margin:20px 0 16px;padding:0 24px;font-size:20px;line-height:24px;font-weight:500;font-family:${theme.typography.fontFamily};}`;
const ɵ0 = STYLES_DIALOG_TITLE;
let LyDialogTitle = class LyDialogTitle {
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_TITLE, STYLE_PRIORITY));
    }
};
LyDialogTitle.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyDialogTitle = tslib_1.__decorate([
    Directive({
        selector: '[ly-dialog-title], [lyDialogTitle]',
        exportAs: 'lyDialogTitle'
    })
], LyDialogTitle);
export { LyDialogTitle };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXRpdGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctdGl0bGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFDTCxRQUFRLEVBQ1IsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXBDLG9CQUFvQjtBQUNwQixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixvQkFBb0I7QUFDcEIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLDhIQUE4SCxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxDQUFDOztBQU14UCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBQ3hCLFlBQ1UsU0FBb0IsRUFDcEIsR0FBNEIsRUFDNUIsTUFBZ0I7UUFGaEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQUksQ0FBQztJQUUvQixRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztDQUNGLENBQUE7O1lBUnNCLFNBQVM7WUFDZixVQUFVO1lBQ1AsUUFBUTs7QUFKZixhQUFhO0lBSnpCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQ0FBb0M7UUFDOUMsUUFBUSxFQUFFLGVBQWU7S0FDMUIsQ0FBQztHQUNXLGFBQWEsQ0FVekI7U0FWWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBTVFlMRVNfRElBTE9HX1RJVExFID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6YmxvY2s7ZmxleDowIDAgYXV0bzttYXJnaW46MjBweCAwIDE2cHg7cGFkZGluZzowIDI0cHg7Zm9udC1zaXplOjIwcHg7bGluZS1oZWlnaHQ6MjRweDtmb250LXdlaWdodDo1MDA7Zm9udC1mYW1pbHk6JHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O31gO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktZGlhbG9nLXRpdGxlXSwgW2x5RGlhbG9nVGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdseURpYWxvZ1RpdGxlJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURpYWxvZ1RpdGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlKFNUWUxFU19ESUFMT0dfVElUTEUsIFNUWUxFX1BSSU9SSVRZKSk7XG4gIH1cbn1cbiJdfQ==