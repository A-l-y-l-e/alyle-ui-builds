/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { STYLES } from './styles';
/**
 * LyError
 * @type {?}
 */
var STYLE_PRIORITY = -2;
var LyError = /** @class */ (function () {
    function LyError(renderer, el, _theme) {
        this._theme = _theme;
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        /** @type {?} */
        var className = _theme.addStyleSheet(STYLES, STYLE_PRIORITY).error;
        renderer.addClass(el.nativeElement, className);
    }
    LyError.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-error'
                },] }
    ];
    /** @nocollapse */
    LyError.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    return LyError;
}());
export { LyError };
if (false) {
    /** @type {?} */
    LyError.prototype.classes;
    /** @type {?} */
    LyError.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZmllbGQvIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7SUFHNUIsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUV6QjtJQUtFLGlCQUNFLFFBQW1CLEVBQ25CLEVBQWMsRUFDTixNQUFnQjtRQUFoQixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBSmpCLFlBQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7O1lBTTdELFNBQVMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxLQUFLO1FBQ3BFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQVRtQixTQUFTO2dCQUFFLFVBQVU7Z0JBQ2hDLFFBQVE7O0lBbUJqQixjQUFDO0NBQUEsQUFiRCxJQWFDO1NBVlksT0FBTzs7O0lBQ2xCLDBCQUFxRTs7SUFJbkUseUJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFNUWUxFUyB9IGZyb20gJy4vc3R5bGVzJztcblxuLyoqIEx5RXJyb3IgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWVycm9yJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUVycm9yIHtcbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gICAgKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSkuZXJyb3I7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfVxufVxuIl19