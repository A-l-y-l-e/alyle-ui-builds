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
var STYLES_DIALOG_TITLE = function (theme) { return ({
    display: 'block',
    flex: '0 0 auto',
    margin: '20px 0 16px',
    padding: '0 24px',
    fontSize: "20px",
    lineHeight: '24px',
    fontWeight: 500,
    fontFamily: theme.typography.fontFamily
}); };
var ɵ0 = STYLES_DIALOG_TITLE;
var LyDialogTitle = /** @class */ (function () {
    function LyDialogTitle(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * @return {?}
     */
    LyDialogTitle.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el.nativeElement, this._theme.style(STYLES_DIALOG_TITLE, STYLE_PRIORITY));
    };
    LyDialogTitle.decorators = [
        { type: Directive, args: [{
                    selector: '[ly-dialog-title], [lyDialogTitle]',
                    exportAs: 'lyDialogTitle'
                },] }
    ];
    /** @nocollapse */
    LyDialogTitle.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    return LyDialogTitle;
}());
export { LyDialogTitle };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXRpdGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctdGl0bGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBa0IsTUFBTSxXQUFXLENBQUM7Ozs7O0lBRy9DLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O0lBR25CLG1CQUFtQixHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDdEQsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFLFVBQVU7SUFDaEIsTUFBTSxFQUFFLGFBQWE7SUFDckIsT0FBTyxFQUFFLFFBQVE7SUFDakIsUUFBUSxFQUFFLE1BQU07SUFDaEIsVUFBVSxFQUFFLE1BQU07SUFDbEIsVUFBVSxFQUFFLEdBQUc7SUFDZixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVO0NBQ3hDLENBQUMsRUFUcUQsQ0FTckQ7O0FBRUY7SUFLRSx1QkFDVSxTQUFvQixFQUNwQixHQUE0QixFQUM1QixNQUFnQjtRQUZoQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQXlCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFBSSxDQUFDOzs7O0lBRS9CLGdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0NBQW9DO29CQUM5QyxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBckJ1QyxTQUFTO2dCQUE3QixVQUFVO2dCQUNyQixRQUFROztJQStCakIsb0JBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxhQUFhOzs7Ozs7SUFFdEIsa0NBQTRCOzs7OztJQUM1Qiw0QkFBb0M7Ozs7O0lBQ3BDLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuY29uc3QgU1RZTEVTX0RJQUxPR19USVRMRSA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIGZsZXg6ICcwIDAgYXV0bycsXG4gIG1hcmdpbjogJzIwcHggMCAxNnB4JyxcbiAgcGFkZGluZzogJzAgMjRweCcsXG4gIGZvbnRTaXplOiBgMjBweGAsXG4gIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgZm9udFdlaWdodDogNTAwLFxuICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHlcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktZGlhbG9nLXRpdGxlXSwgW2x5RGlhbG9nVGl0bGVdJyxcbiAgZXhwb3J0QXM6ICdseURpYWxvZ1RpdGxlJ1xufSlcbmV4cG9ydCBjbGFzcyBMeURpYWxvZ1RpdGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLnN0eWxlKFNUWUxFU19ESUFMT0dfVElUTEUsIFNUWUxFX1BSSU9SSVRZKSk7XG4gIH1cbn1cbiJdfQ==