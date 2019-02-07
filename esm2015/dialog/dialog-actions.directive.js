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
export const STYLES_DIALOG_ACTIONS = ({
    display: 'flex',
    flex: '0 0 auto',
    padding: '8px',
    flexWrap: 'wrap',
    minHeight: '52px',
    alignItems: 'center'
});
export class LyDialogActions {
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
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_ACTIONS, STYLE_PRIORITY));
    }
}
LyDialogActions.decorators = [
    { type: Directive, args: [{
                selector: 'ly-dialog-actions, [ly-dialog-actions], [lyDialogActions]',
                exportAs: 'lyDialogActions'
            },] }
];
/** @nocollapse */
LyDialogActions.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyDialogActions.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyDialogActions.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyDialogActions.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFjdGlvbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy1hY3Rpb25zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7O01BRy9CLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O0FBR3pCLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxDQUFDO0lBQ3BDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsSUFBSSxFQUFFLFVBQVU7SUFDaEIsT0FBTyxFQUFFLEtBQUs7SUFDZCxRQUFRLEVBQUUsTUFBTTtJQUNoQixTQUFTLEVBQUUsTUFBTTtJQUNqQixVQUFVLEVBQUUsUUFBUTtDQUNyQixDQUFDO0FBTUYsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUMxQixZQUNVLFNBQW9CLEVBQ3BCLEdBQTRCLEVBQzVCLE1BQWdCO1FBRmhCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUFJLENBQUM7Ozs7SUFFL0IsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkRBQTJEO2dCQUNyRSxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBbkJ1QyxTQUFTO1lBQTdCLFVBQVU7WUFDckIsUUFBUTs7Ozs7OztJQXFCYixvQ0FBNEI7Ozs7O0lBQzVCLDhCQUFvQzs7Ozs7SUFDcEMsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBTVFlMRVNfRElBTE9HX0FDVElPTlMgPSAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXg6ICcwIDAgYXV0bycsXG4gIHBhZGRpbmc6ICc4cHgnLFxuICBmbGV4V3JhcDogJ3dyYXAnLFxuICBtaW5IZWlnaHQ6ICc1MnB4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcidcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1kaWFsb2ctYWN0aW9ucywgW2x5LWRpYWxvZy1hY3Rpb25zXSwgW2x5RGlhbG9nQWN0aW9uc10nLFxuICBleHBvcnRBczogJ2x5RGlhbG9nQWN0aW9ucydcbn0pXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dBY3Rpb25zIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLnN0eWxlKFNUWUxFU19ESUFMT0dfQUNUSU9OUywgU1RZTEVfUFJJT1JJVFkpKTtcbiAgfVxufVxuIl19