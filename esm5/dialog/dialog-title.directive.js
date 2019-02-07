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
export var STYLES_DIALOG_TITLE = function (theme) { return ({
    display: 'block',
    flex: '0 0 auto',
    margin: '20px 0 16px',
    padding: '0 24px',
    fontSize: "20px",
    lineHeight: '24px',
    fontWeight: 500,
    fontFamily: theme.typography.fontFamily
}); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXRpdGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctdGl0bGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFFBQVEsRUFBa0IsTUFBTSxXQUFXLENBQUM7Ozs7O0lBRy9DLGNBQWMsR0FBRyxDQUFDLENBQUM7Ozs7O0FBR3pCLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQzdELE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRSxVQUFVO0lBQ2hCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFVBQVUsRUFBRSxHQUFHO0lBQ2YsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVTtDQUN4QyxDQUFDLEVBVDRELENBUzVEO0FBRUY7SUFLRSx1QkFDVSxTQUFvQixFQUNwQixHQUE0QixFQUM1QixNQUFnQjtRQUZoQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQXlCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFBSSxDQUFDOzs7O0lBRS9CLGdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0NBQW9DO29CQUM5QyxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBckJ1QyxTQUFTO2dCQUE3QixVQUFVO2dCQUNyQixRQUFROztJQStCakIsb0JBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxhQUFhOzs7Ozs7SUFFdEIsa0NBQTRCOzs7OztJQUM1Qiw0QkFBb0M7Ozs7O0lBQ3BDLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IFNUWUxFU19ESUFMT0dfVElUTEUgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBmbGV4OiAnMCAwIGF1dG8nLFxuICBtYXJnaW46ICcyMHB4IDAgMTZweCcsXG4gIHBhZGRpbmc6ICcwIDI0cHgnLFxuICBmb250U2l6ZTogYDIwcHhgLFxuICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5XG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LWRpYWxvZy10aXRsZV0sIFtseURpYWxvZ1RpdGxlXScsXG4gIGV4cG9ydEFzOiAnbHlEaWFsb2dUaXRsZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dUaXRsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90aGVtZS5zdHlsZShTVFlMRVNfRElBTE9HX1RJVExFLCBTVFlMRV9QUklPUklUWSkpO1xuICB9XG59XG4iXX0=