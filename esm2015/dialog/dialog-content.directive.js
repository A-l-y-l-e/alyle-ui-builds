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
const STYLES_DIALOG_CONTENT = ({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2RpYWxvZy8iLCJzb3VyY2VzIjpbImRpYWxvZy1jb250ZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7O01BRy9CLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O01BR25CLHFCQUFxQixHQUFHLENBQUM7SUFDN0IsT0FBTyxFQUFFLE9BQU87SUFDaEIsU0FBUyxFQUFFLE1BQU07SUFDakIsSUFBSSxFQUFFLFVBQVU7SUFDaEIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsNEJBQTRCLEVBQUUsT0FBTztDQUN0QyxDQUFDO0FBTUYsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUMxQixZQUNVLFNBQW9CLEVBQ3BCLEdBQTRCLEVBQzVCLE1BQWdCO1FBRmhCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUFJLENBQUM7Ozs7SUFFL0IsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkRBQTJEO2dCQUNyRSxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBbEJ1QyxTQUFTO1lBQTdCLFVBQVU7WUFDckIsUUFBUTs7Ozs7OztJQW9CYixvQ0FBNEI7Ozs7O0lBQzVCLDhCQUFvQzs7Ozs7SUFDcEMsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNvbnN0IFNUWUxFU19ESUFMT0dfQ09OVEVOVCA9ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIG92ZXJmbG93WTogJ2F1dG8nLFxuICBmbGV4OiAnMSAxIGF1dG8nLFxuICBwYWRkaW5nOiAnMCAyNHB4IDI0cHgnLFxuICAnLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmcnOiAndG91Y2gnXG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGlhbG9nLWNvbnRlbnQsIFtseS1kaWFsb2ctY29udGVudF0sIFtseURpYWxvZ0NvbnRlbnRdJyxcbiAgZXhwb3J0QXM6ICdseURpYWxvZ0NvbnRlbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nQ29udGVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90aGVtZS5zdHlsZShTVFlMRVNfRElBTE9HX0NPTlRFTlQsIFNUWUxFX1BSSU9SSVRZKSk7XG4gIH1cbn1cbiJdfQ==