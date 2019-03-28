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
const STYLES_DIALOG_ACTIONS = ({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFjdGlvbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy1hY3Rpb25zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7O01BRy9CLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O01BR25CLHFCQUFxQixHQUFHLENBQUM7SUFDN0IsT0FBTyxFQUFFLE1BQU07SUFDZixJQUFJLEVBQUUsVUFBVTtJQUNoQixPQUFPLEVBQUUsS0FBSztJQUNkLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFVBQVUsRUFBRSxRQUFRO0NBQ3JCLENBQUM7QUFNRixNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBQzFCLFlBQ1UsU0FBb0IsRUFDcEIsR0FBNEIsRUFDNUIsTUFBZ0I7UUFGaEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUF5QjtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQUksQ0FBQzs7OztJQUUvQixRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyREFBMkQ7Z0JBQ3JFLFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUFuQnVDLFNBQVM7WUFBN0IsVUFBVTtZQUNyQixRQUFROzs7Ozs7O0lBcUJiLG9DQUE0Qjs7Ozs7SUFDNUIsOEJBQW9DOzs7OztJQUNwQyxpQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVTX0RJQUxPR19BQ1RJT05TID0gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4OiAnMCAwIGF1dG8nLFxuICBwYWRkaW5nOiAnOHB4JyxcbiAgZmxleFdyYXA6ICd3cmFwJyxcbiAgbWluSGVpZ2h0OiAnNTJweCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInXG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGlhbG9nLWFjdGlvbnMsIFtseS1kaWFsb2ctYWN0aW9uc10sIFtseURpYWxvZ0FjdGlvbnNdJyxcbiAgZXhwb3J0QXM6ICdseURpYWxvZ0FjdGlvbnMnXG59KVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nQWN0aW9ucyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90aGVtZS5zdHlsZShTVFlMRVNfRElBTE9HX0FDVElPTlMsIFNUWUxFX1BSSU9SSVRZKSk7XG4gIH1cbn1cbiJdfQ==