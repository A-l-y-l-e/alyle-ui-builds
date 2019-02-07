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
export const STYLES_DIALOG_TITLE = (theme) => ({
    display: 'block',
    flex: '0 0 auto',
    margin: '20px 0 16px',
    padding: '0 24px',
    fontSize: `20px`,
    lineHeight: '24px',
    fontWeight: 500,
    fontFamily: theme.typography.fontFamily
});
export class LyDialogTitle {
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
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_TITLE, STYLE_PRIORITY));
    }
}
LyDialogTitle.decorators = [
    { type: Directive, args: [{
                selector: '[ly-dialog-title], [lyDialogTitle]',
                exportAs: 'lyDialogTitle'
            },] }
];
/** @nocollapse */
LyDialogTitle.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyDialogTitle.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyDialogTitle.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyDialogTitle.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXRpdGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctdGl0bGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBa0IsTUFBTSxXQUFXLENBQUM7Ozs7O01BRy9DLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O0FBR3pCLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0QsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFLFVBQVU7SUFDaEIsTUFBTSxFQUFFLGFBQWE7SUFDckIsT0FBTyxFQUFFLFFBQVE7SUFDakIsUUFBUSxFQUFFLE1BQU07SUFDaEIsVUFBVSxFQUFFLE1BQU07SUFDbEIsVUFBVSxFQUFFLEdBQUc7SUFDZixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVO0NBQ3hDLENBQUM7QUFNRixNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBQ3hCLFlBQ1UsU0FBb0IsRUFDcEIsR0FBNEIsRUFDNUIsTUFBZ0I7UUFGaEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQUksQ0FBQzs7OztJQUUvQixRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBckJ1QyxTQUFTO1lBQTdCLFVBQVU7WUFDckIsUUFBUTs7Ozs7OztJQXVCYixrQ0FBNEI7Ozs7O0lBQzVCLDRCQUFvQzs7Ozs7SUFDcEMsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgU1RZTEVTX0RJQUxPR19USVRMRSA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGZsZXg6ICcwIDAgYXV0bycsXG4gIG1hcmdpbjogJzIwcHggMCAxNnB4JyxcbiAgcGFkZGluZzogJzAgMjRweCcsXG4gIGZvbnRTaXplOiBgMjBweGAsXG4gIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgZm9udFdlaWdodDogNTAwLFxuICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHlcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktZGlhbG9nLXRpdGxlXSwgW2x5RGlhbG9nVGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdseURpYWxvZ1RpdGxlJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURpYWxvZ1RpdGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLnN0eWxlKFNUWUxFU19ESUFMT0dfVElUTEUsIFNUWUxFX1BSSU9SSVRZKSk7XG4gIH1cbn1cbiJdfQ==