/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/**
 * \@docs-private
 * @type {?}
 */
var STYLE_PRIORITY = -2;
/**
 * \@docs-private
 * @type {?}
 */
export var STYLES_DIALOG_CONTENT = ({
    display: 'block',
    overflowY: 'auto',
    flex: '1 1 auto',
    padding: '0 24px 24px',
    '-webkit-overflow-scrolling': 'touch'
});
var LyDialogContent = /** @class */ (function () {
    function LyDialogContent(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * @return {?}
     */
    LyDialogContent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_CONTENT, STYLE_PRIORITY));
    };
    LyDialogContent.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-dialog-content, [ly-dialog-content], [lyDialogContent]',
                    exportAs: 'lyDialogContent'
                },] }
    ];
    /** @nocollapse */
    LyDialogContent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    return LyDialogContent;
}());
export { LyDialogContent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyDialogContent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyDialogContent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyDialogContent.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy1jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7O0lBRy9CLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O0FBR3pCLE1BQU0sS0FBTyxxQkFBcUIsR0FBRyxDQUFDO0lBQ3BDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLElBQUksRUFBRSxVQUFVO0lBQ2hCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLDRCQUE0QixFQUFFLE9BQU87Q0FDdEMsQ0FBQztBQUVGO0lBS0UseUJBQ1UsU0FBb0IsRUFDcEIsR0FBNEIsRUFDNUIsTUFBZ0I7UUFGaEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQUksQ0FBQzs7OztJQUUvQixrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJEQUEyRDtvQkFDckUsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBbEJ1QyxTQUFTO2dCQUE3QixVQUFVO2dCQUNyQixRQUFROztJQTRCakIsc0JBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxlQUFlOzs7Ozs7SUFFeEIsb0NBQTRCOzs7OztJQUM1Qiw4QkFBb0M7Ozs7O0lBQ3BDLGlDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgU1RZTEVTX0RJQUxPR19DT05URU5UID0gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gIGZsZXg6ICcxIDEgYXV0bycsXG4gIHBhZGRpbmc6ICcwIDI0cHggMjRweCcsXG4gICctd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZyc6ICd0b3VjaCdcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kaWFsb2ctY29udGVudCwgW2x5LWRpYWxvZy1jb250ZW50XSwgW2x5RGlhbG9nQ29udGVudF0nLFxuICBleHBvcnRBczogJ2x5RGlhbG9nQ29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dDb250ZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLnN0eWxlKFNUWUxFU19ESUFMT0dfQ09OVEVOVCwgU1RZTEVfUFJJT1JJVFkpKTtcbiAgfVxufVxuIl19