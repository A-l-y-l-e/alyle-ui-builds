import * as tslib_1 from "tslib";
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
var STYLE_PRIORITY = -2;
/** @docs-private */
var STYLES_DIALOG_CONTENT = function () { return function (className) { return className + "{display:block;overflow-y:auto;flex:1 1 auto;padding:0 24px 24px;-webkit-overflow-scrolling:touch;}"; }; };
var ɵ0 = STYLES_DIALOG_CONTENT;
var LyDialogContent = /** @class */ (function () {
    function LyDialogContent(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    LyDialogContent.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_CONTENT, STYLE_PRIORITY));
    };
    LyDialogContent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyDialogContent = tslib_1.__decorate([
        Directive({
            selector: 'ly-dialog-content, [ly-dialog-content], [lyDialogContent]',
            exportAs: 'lyDialogContent'
        })
    ], LyDialogContent);
    return LyDialogContent;
}());
export { LyDialogContent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy1jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTlCLG9CQUFvQjtBQUNwQixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixvQkFBb0I7QUFDcEIsSUFBTSxxQkFBcUIsR0FBRyxjQUFNLE9BQUEsVUFBQyxTQUFpQixJQUFLLE9BQUcsU0FBUyx3R0FBcUcsRUFBakgsQ0FBaUgsRUFBeEksQ0FBd0ksQ0FBQzs7QUFNN0s7SUFDRSx5QkFDVSxTQUFvQixFQUNwQixHQUE0QixFQUM1QixNQUFnQjtRQUZoQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQXlCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFBSSxDQUFDO0lBRS9CLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDOztnQkFQb0IsU0FBUztnQkFDZixVQUFVO2dCQUNQLFFBQVE7O0lBSmYsZUFBZTtRQUozQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkRBQTJEO1lBQ3JFLFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQztPQUNXLGVBQWUsQ0FVM0I7SUFBRCxzQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVTX0RJQUxPR19DT05URU5UID0gKCkgPT4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3cteTphdXRvO2ZsZXg6MSAxIGF1dG87cGFkZGluZzowIDI0cHggMjRweDstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDt9YDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGlhbG9nLWNvbnRlbnQsIFtseS1kaWFsb2ctY29udGVudF0sIFtseURpYWxvZ0NvbnRlbnRdJyxcbiAgZXhwb3J0QXM6ICdseURpYWxvZ0NvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZShTVFlMRVNfRElBTE9HX0NPTlRFTlQsIFNUWUxFX1BSSU9SSVRZKSk7XG4gIH1cbn1cbiJdfQ==