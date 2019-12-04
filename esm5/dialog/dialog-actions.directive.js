import * as tslib_1 from "tslib";
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
var STYLE_PRIORITY = -2;
/** @docs-private */
var STYLES_DIALOG_ACTIONS = function () { return function (className) { return className + "{display:flex;flex:0 0 auto;padding:8px;flex-wrap:wrap;min-height:52px;align-items:center;}"; }; };
var ɵ0 = STYLES_DIALOG_ACTIONS;
var LyDialogActions = /** @class */ (function () {
    function LyDialogActions(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    LyDialogActions.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_ACTIONS, STYLE_PRIORITY));
    };
    LyDialogActions.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyDialogActions = tslib_1.__decorate([
        Directive({
            selector: 'ly-dialog-actions, [ly-dialog-actions], [lyDialogActions]',
            exportAs: 'lyDialogActions'
        })
    ], LyDialogActions);
    return LyDialogActions;
}());
export { LyDialogActions };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFjdGlvbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy1hY3Rpb25zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTlCLG9CQUFvQjtBQUNwQixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixvQkFBb0I7QUFDcEIsSUFBTSxxQkFBcUIsR0FBRyxjQUFNLE9BQUEsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyxnR0FBNkYsRUFBekcsQ0FBeUcsRUFBaEksQ0FBZ0ksQ0FBQzs7QUFNcks7SUFDRSx5QkFDVSxTQUFvQixFQUNwQixHQUE0QixFQUM1QixNQUFnQjtRQUZoQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQXlCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFBSSxDQUFDO0lBRS9CLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDOztnQkFQb0IsU0FBUztnQkFDZixVQUFVO2dCQUNQLFFBQVE7O0lBSmYsZUFBZTtRQUozQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkRBQTJEO1lBQ3JFLFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQztPQUNXLGVBQWUsQ0FVM0I7SUFBRCxzQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVTX0RJQUxPR19BQ1RJT05TID0gKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDtmbGV4OjAgMCBhdXRvO3BhZGRpbmc6OHB4O2ZsZXgtd3JhcDp3cmFwO21pbi1oZWlnaHQ6NTJweDthbGlnbi1pdGVtczpjZW50ZXI7fWA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWRpYWxvZy1hY3Rpb25zLCBbbHktZGlhbG9nLWFjdGlvbnNdLCBbbHlEaWFsb2dBY3Rpb25zXScsXG4gIGV4cG9ydEFzOiAnbHlEaWFsb2dBY3Rpb25zJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURpYWxvZ0FjdGlvbnMgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGhlbWUucmVuZGVyU3R5bGUoU1RZTEVTX0RJQUxPR19BQ1RJT05TLCBTVFlMRV9QUklPUklUWSkpO1xuICB9XG59XG4iXX0=