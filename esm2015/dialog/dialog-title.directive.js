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
const STYLES_DIALOG_TITLE = (theme) => ({
    display: 'block',
    flex: '0 0 auto',
    margin: '20px 0 16px',
    padding: '0 24px',
    fontSize: `20px`,
    lineHeight: '24px',
    fontWeight: 500,
    fontFamily: theme.typography.fontFamily
});
const ɵ0 = STYLES_DIALOG_TITLE;
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXRpdGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctdGl0bGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBa0IsTUFBTSxXQUFXLENBQUM7Ozs7O01BRy9DLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O01BR25CLG1CQUFtQixHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0RCxPQUFPLEVBQUUsT0FBTztJQUNoQixJQUFJLEVBQUUsVUFBVTtJQUNoQixNQUFNLEVBQUUsYUFBYTtJQUNyQixPQUFPLEVBQUUsUUFBUTtJQUNqQixRQUFRLEVBQUUsTUFBTTtJQUNoQixVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsR0FBRztJQUNmLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVU7Q0FDeEMsQ0FBQzs7QUFNRixNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBQ3hCLFlBQ1UsU0FBb0IsRUFDcEIsR0FBNEIsRUFDNUIsTUFBZ0I7UUFGaEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQUksQ0FBQzs7OztJQUUvQixRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBckJ1QyxTQUFTO1lBQTdCLFVBQVU7WUFDckIsUUFBUTs7Ozs7OztJQXVCYixrQ0FBNEI7Ozs7O0lBQzVCLDRCQUFvQzs7Ozs7SUFDcEMsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBTVFlMRVNfRElBTE9HX1RJVExFID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgZmxleDogJzAgMCBhdXRvJyxcbiAgbWFyZ2luOiAnMjBweCAwIDE2cHgnLFxuICBwYWRkaW5nOiAnMCAyNHB4JyxcbiAgZm9udFNpemU6IGAyMHB4YCxcbiAgbGluZUhlaWdodDogJzI0cHgnLFxuICBmb250V2VpZ2h0OiA1MDAsXG4gIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseVxufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseS1kaWFsb2ctdGl0bGVdLCBbbHlEaWFsb2dUaXRsZV0nLFxuICBleHBvcnRBczogJ2x5RGlhbG9nVGl0bGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nVGl0bGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGhlbWUuc3R5bGUoU1RZTEVTX0RJQUxPR19USVRMRSwgU1RZTEVfUFJJT1JJVFkpKTtcbiAgfVxufVxuIl19