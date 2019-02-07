/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostListener, ElementRef } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import { LyOverlayConfig } from './overlay-config';
import { LY_COMMON_STYLES } from '../styles/core-styles';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
export var STYLES_BACKDROP_ROOT = (tslib_1.__assign({}, LY_COMMON_STYLES.fill, { width: '100vw', height: '100vh', pointerEvents: 'all', userSelect: 'none' }));
var LyOverlayBackdrop = /** @class */ (function () {
    function LyOverlayBackdrop(_el, _theme, _config) {
        this._el = _el;
        this._config = _config;
        _el.nativeElement.classList.add(_theme.style(STYLES_BACKDROP_ROOT, STYLE_PRIORITY));
        // this applies custom class for backdrop,
        // if one is not defined, do nothing.
        /** @type {?} */
        var backdropClass = _config.backdropClass;
        if (backdropClass) {
            this._el.nativeElement.classList.add(backdropClass);
        }
    }
    /**
     * @return {?}
     */
    LyOverlayBackdrop.prototype.onclick = /**
     * @return {?}
     */
    function () {
        (/** @type {?} */ (this._config.fnDestroy))();
    };
    LyOverlayBackdrop.decorators = [
        { type: Component, args: [{
                    selector: 'ly-overlay-backdrop',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    LyOverlayBackdrop.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyTheme2 },
        { type: LyOverlayConfig }
    ]; };
    LyOverlayBackdrop.propDecorators = {
        onclick: [{ type: HostListener, args: ['click',] }]
    };
    return LyOverlayBackdrop;
}());
export { LyOverlayBackdrop };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyOverlayBackdrop.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyOverlayBackdrop.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1iYWNrZHJvcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS1iYWNrZHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQUVuRCxjQUFjLEdBQUcsQ0FBQyxDQUFDOztBQUN6QixNQUFNLEtBQU8sb0JBQW9CLEdBQUcsc0JBQy9CLGdCQUFnQixDQUFDLElBQUksSUFDeEIsS0FBSyxFQUFFLE9BQU8sRUFDZCxNQUFNLEVBQUUsT0FBTyxFQUNmLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLFVBQVUsRUFBRSxNQUFNLElBQ2xCO0FBRUY7SUFRRSwyQkFDVSxHQUE0QixFQUNwQyxNQUFnQixFQUNSLE9BQXdCO1FBRnhCLFFBQUcsR0FBSCxHQUFHLENBQXlCO1FBRTVCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRWhDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7Ozs7WUFJOUUsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhO1FBQzNDLElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7O0lBaEJzQixtQ0FBTzs7O0lBQTlCO1FBQ0UsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDO0lBQzVCLENBQUM7O2dCQVBGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFqQmlDLFVBQVU7Z0JBQ25DLFFBQVE7Z0JBQ1IsZUFBZTs7OzBCQWlCckIsWUFBWSxTQUFDLE9BQU87O0lBaUJ2Qix3QkFBQztDQUFBLEFBdEJELElBc0JDO1NBbEJZLGlCQUFpQjs7Ozs7O0lBSzFCLGdDQUFvQzs7Ozs7SUFFcEMsb0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi9vdmVybGF5LWNvbmZpZyc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnLi4vc3R5bGVzL2NvcmUtc3R5bGVzJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmV4cG9ydCBjb25zdCBTVFlMRVNfQkFDS0RST1BfUk9PVCA9ICh7XG4gIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgd2lkdGg6ICcxMDB2dycsXG4gIGhlaWdodDogJzEwMHZoJyxcbiAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gIHVzZXJTZWxlY3Q6ICdub25lJ1xufSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW92ZXJsYXktYmFja2Ryb3AnLFxuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5QmFja2Ryb3Age1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgdGhpcy5fY29uZmlnLmZuRGVzdHJveSEoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jb25maWc6IEx5T3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICBfZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKF90aGVtZS5zdHlsZShTVFlMRVNfQkFDS0RST1BfUk9PVCwgU1RZTEVfUFJJT1JJVFkpKTtcblxuICAgIC8vIHRoaXMgYXBwbGllcyBjdXN0b20gY2xhc3MgZm9yIGJhY2tkcm9wLFxuICAgIC8vIGlmIG9uZSBpcyBub3QgZGVmaW5lZCwgZG8gbm90aGluZy5cbiAgICBjb25zdCBiYWNrZHJvcENsYXNzID0gX2NvbmZpZy5iYWNrZHJvcENsYXNzO1xuICAgIGlmIChiYWNrZHJvcENsYXNzKSB7XG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFja2Ryb3BDbGFzcyk7XG4gICAgfVxuICB9XG59XG4iXX0=