import * as tslib_1 from "tslib";
import { Component, HostListener, ElementRef } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import { LyOverlayConfig } from './overlay-config';
import { LY_COMMON_STYLES } from '../styles/core-styles';
const STYLE_PRIORITY = -2;
export const STYLES_BACKDROP_ROOT = (Object.assign({}, LY_COMMON_STYLES.fill, { width: '100vw', height: '100vh', pointerEvents: 'all', userSelect: 'none' }));
let LyOverlayBackdrop = class LyOverlayBackdrop {
    constructor(_el, _theme, _config) {
        this._el = _el;
        this._config = _config;
        _el.nativeElement.classList.add(_theme.style(STYLES_BACKDROP_ROOT, STYLE_PRIORITY));
        // this applies custom class for backdrop,
        // if one is not defined, do nothing.
        const backdropClass = _config.backdropClass;
        if (backdropClass) {
            this._el.nativeElement.classList.add(backdropClass);
        }
    }
    onclick() {
        if (!this._config.disableClose) {
            this._config.fnDestroy();
        }
    }
};
tslib_1.__decorate([
    HostListener('click'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LyOverlayBackdrop.prototype, "onclick", null);
LyOverlayBackdrop = tslib_1.__decorate([
    Component({
        selector: 'ly-overlay-backdrop',
        template: ``
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        LyTheme2,
        LyOverlayConfig])
], LyOverlayBackdrop);
export { LyOverlayBackdrop };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1iYWNrZHJvcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS1iYWNrZHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsbUJBQy9CLGdCQUFnQixDQUFDLElBQUksSUFDeEIsS0FBSyxFQUFFLE9BQU8sRUFDZCxNQUFNLEVBQUUsT0FBTyxFQUNmLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLFVBQVUsRUFBRSxNQUFNLElBQ2xCLENBQUM7QUFNSCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQU01QixZQUNVLEdBQTRCLEVBQ3BDLE1BQWdCLEVBQ1IsT0FBd0I7UUFGeEIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFFNUIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFFaEMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUVwRiwwQ0FBMEM7UUFDMUMscUNBQXFDO1FBQ3JDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFsQnNCLE9BQU87UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBVSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0NBZUYsQ0FBQTtBQW5Cd0I7SUFBdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7OztnREFJckI7QUFMVSxpQkFBaUI7SUFKN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7NkNBUWUsVUFBVTtRQUNmLFFBQVE7UUFDQyxlQUFlO0dBVHZCLGlCQUFpQixDQW9CN0I7U0FwQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi9vdmVybGF5LWNvbmZpZyc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnLi4vc3R5bGVzL2NvcmUtc3R5bGVzJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmV4cG9ydCBjb25zdCBTVFlMRVNfQkFDS0RST1BfUk9PVCA9ICh7XG4gIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgd2lkdGg6ICcxMDB2dycsXG4gIGhlaWdodDogJzEwMHZoJyxcbiAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gIHVzZXJTZWxlY3Q6ICdub25lJ1xufSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW92ZXJsYXktYmFja2Ryb3AnLFxuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5QmFja2Ryb3Age1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuZGlzYWJsZUNsb3NlKSB7XG4gICAgICB0aGlzLl9jb25maWcuZm5EZXN0cm95ISgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9jb25maWc6IEx5T3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICBfZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKF90aGVtZS5zdHlsZShTVFlMRVNfQkFDS0RST1BfUk9PVCwgU1RZTEVfUFJJT1JJVFkpKTtcblxuICAgIC8vIHRoaXMgYXBwbGllcyBjdXN0b20gY2xhc3MgZm9yIGJhY2tkcm9wLFxuICAgIC8vIGlmIG9uZSBpcyBub3QgZGVmaW5lZCwgZG8gbm90aGluZy5cbiAgICBjb25zdCBiYWNrZHJvcENsYXNzID0gX2NvbmZpZy5iYWNrZHJvcENsYXNzO1xuICAgIGlmIChiYWNrZHJvcENsYXNzKSB7XG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFja2Ryb3BDbGFzcyk7XG4gICAgfVxuICB9XG59XG4iXX0=