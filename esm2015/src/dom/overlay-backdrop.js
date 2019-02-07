/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, ElementRef } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import { LyOverlayConfig } from './overlay-config';
import { LY_COMMON_STYLES } from '../styles/core-styles';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
export const STYLES_BACKDROP_ROOT = (Object.assign({}, LY_COMMON_STYLES.fill, { width: '100vw', height: '100vh', pointerEvents: 'all', userSelect: 'none' }));
export class LyOverlayBackdrop {
    /**
     * @param {?} _el
     * @param {?} _theme
     * @param {?} _config
     */
    constructor(_el, _theme, _config) {
        this._el = _el;
        this._config = _config;
        _el.nativeElement.classList.add(_theme.style(STYLES_BACKDROP_ROOT, STYLE_PRIORITY));
        // this applies custom class for backdrop,
        // if one is not defined, do nothing.
        /** @type {?} */
        const backdropClass = _config.backdropClass;
        if (backdropClass) {
            this._el.nativeElement.classList.add(backdropClass);
        }
    }
    /**
     * @return {?}
     */
    onclick() {
        (/** @type {?} */ (this._config.fnDestroy))();
    }
}
LyOverlayBackdrop.decorators = [
    { type: Component, args: [{
                selector: 'ly-overlay-backdrop',
                template: ``
            }] }
];
/** @nocollapse */
LyOverlayBackdrop.ctorParameters = () => [
    { type: ElementRef },
    { type: LyTheme2 },
    { type: LyOverlayConfig }
];
LyOverlayBackdrop.propDecorators = {
    onclick: [{ type: HostListener, args: ['click',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1iYWNrZHJvcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS1iYWNrZHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O01BRW5ELGNBQWMsR0FBRyxDQUFDLENBQUM7O0FBQ3pCLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxtQkFDL0IsZ0JBQWdCLENBQUMsSUFBSSxJQUN4QixLQUFLLEVBQUUsT0FBTyxFQUNkLE1BQU0sRUFBRSxPQUFPLEVBQ2YsYUFBYSxFQUFFLEtBQUssRUFDcEIsVUFBVSxFQUFFLE1BQU0sSUFDbEI7QUFNRixNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFJNUIsWUFDVSxHQUE0QixFQUNwQyxNQUFnQixFQUNSLE9BQXdCO1FBRnhCLFFBQUcsR0FBSCxHQUFHLENBQXlCO1FBRTVCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRWhDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7Ozs7Y0FJOUUsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhO1FBQzNDLElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7O0lBaEJzQixPQUFPO1FBQzVCLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUFQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQWpCaUMsVUFBVTtZQUNuQyxRQUFRO1lBQ1IsZUFBZTs7O3NCQWlCckIsWUFBWSxTQUFDLE9BQU87Ozs7Ozs7SUFJbkIsZ0NBQW9DOzs7OztJQUVwQyxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb25maWcgfSBmcm9tICcuL292ZXJsYXktY29uZmlnJztcbmltcG9ydCB7IExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICcuLi9zdHlsZXMvY29yZS1zdHlsZXMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuZXhwb3J0IGNvbnN0IFNUWUxFU19CQUNLRFJPUF9ST09UID0gKHtcbiAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnXG59KTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktb3ZlcmxheS1iYWNrZHJvcCcsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlCYWNrZHJvcCB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLl9jb25maWcuZm5EZXN0cm95ISgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2NvbmZpZzogTHlPdmVybGF5Q29uZmlnXG4gICkge1xuICAgIF9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoX3RoZW1lLnN0eWxlKFNUWUxFU19CQUNLRFJPUF9ST09ULCBTVFlMRV9QUklPUklUWSkpO1xuXG4gICAgLy8gdGhpcyBhcHBsaWVzIGN1c3RvbSBjbGFzcyBmb3IgYmFja2Ryb3AsXG4gICAgLy8gaWYgb25lIGlzIG5vdCBkZWZpbmVkLCBkbyBub3RoaW5nLlxuICAgIGNvbnN0IGJhY2tkcm9wQ2xhc3MgPSBfY29uZmlnLmJhY2tkcm9wQ2xhc3M7XG4gICAgaWYgKGJhY2tkcm9wQ2xhc3MpIHtcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYWNrZHJvcENsYXNzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==