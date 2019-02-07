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
const STYLE_PRIORITY = -2;
/**
 * \@docs-private
 * @type {?}
 */
export const STYLES_DIALOG_CONTENT = ({
    display: 'block',
    overflowY: 'auto',
    flex: '1 1 auto',
    padding: '0 24px 24px',
    '-webkit-overflow-scrolling': 'touch'
});
export class LyDialogContent {
    /**
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} _theme
     */
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_CONTENT, STYLE_PRIORITY));
    }
}
LyDialogContent.decorators = [
    { type: Directive, args: [{
                selector: 'ly-dialog-content, [ly-dialog-content], [lyDialogContent]',
                exportAs: 'lyDialogContent'
            },] }
];
/** @nocollapse */
LyDialogContent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy1jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7O01BRy9CLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O0FBR3pCLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxDQUFDO0lBQ3BDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLElBQUksRUFBRSxVQUFVO0lBQ2hCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLDRCQUE0QixFQUFFLE9BQU87Q0FDdEMsQ0FBQztBQU1GLE1BQU0sT0FBTyxlQUFlOzs7Ozs7SUFDMUIsWUFDVSxTQUFvQixFQUNwQixHQUE0QixFQUM1QixNQUFnQjtRQUZoQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQXlCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFBSSxDQUFDOzs7O0lBRS9CLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJEQUEyRDtnQkFDckUsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7OztZQWxCdUMsU0FBUztZQUE3QixVQUFVO1lBQ3JCLFFBQVE7Ozs7Ozs7SUFvQmIsb0NBQTRCOzs7OztJQUM1Qiw4QkFBb0M7Ozs7O0lBQ3BDLGlDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgU1RZTEVTX0RJQUxPR19DT05URU5UID0gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gIGZsZXg6ICcxIDEgYXV0bycsXG4gIHBhZGRpbmc6ICcwIDI0cHggMjRweCcsXG4gICctd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZyc6ICd0b3VjaCdcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kaWFsb2ctY29udGVudCwgW2x5LWRpYWxvZy1jb250ZW50XSwgW2x5RGlhbG9nQ29udGVudF0nLFxuICBleHBvcnRBczogJ2x5RGlhbG9nQ29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dDb250ZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLnN0eWxlKFNUWUxFU19ESUFMT0dfQ09OVEVOVCwgU1RZTEVfUFJJT1JJVFkpKTtcbiAgfVxufVxuIl19