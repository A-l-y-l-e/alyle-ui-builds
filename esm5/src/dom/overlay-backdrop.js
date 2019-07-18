import * as tslib_1 from "tslib";
import { Component, HostListener, ElementRef } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import { LyOverlayConfig } from './overlay-config';
import { LY_COMMON_STYLES } from '../styles/core-styles';
var STYLE_PRIORITY = -2;
export var STYLES_BACKDROP_ROOT = (tslib_1.__assign({}, LY_COMMON_STYLES.fill, { width: '100vw', height: '100vh', pointerEvents: 'all', userSelect: 'none' }));
var LyOverlayBackdrop = /** @class */ (function () {
    function LyOverlayBackdrop(_el, _theme, _config) {
        this._el = _el;
        this._config = _config;
        _el.nativeElement.classList.add(_theme.style(STYLES_BACKDROP_ROOT, STYLE_PRIORITY));
        // this applies custom class for backdrop,
        // if one is not defined, do nothing.
        var backdropClass = _config.backdropClass;
        if (backdropClass) {
            this._el.nativeElement.classList.add(backdropClass);
        }
    }
    LyOverlayBackdrop.prototype.onclick = function () {
        if (!this._config.disableClose) {
            this._config.fnDestroy();
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
            template: ""
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            LyTheme2,
            LyOverlayConfig])
    ], LyOverlayBackdrop);
    return LyOverlayBackdrop;
}());
export { LyOverlayBackdrop };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1iYWNrZHJvcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS1iYWNrZHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsc0JBQy9CLGdCQUFnQixDQUFDLElBQUksSUFDeEIsS0FBSyxFQUFFLE9BQU8sRUFDZCxNQUFNLEVBQUUsT0FBTyxFQUNmLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLFVBQVUsRUFBRSxNQUFNLElBQ2xCLENBQUM7QUFNSDtJQU1FLDJCQUNVLEdBQTRCLEVBQ3BDLE1BQWdCLEVBQ1IsT0FBd0I7UUFGeEIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFFNUIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFFaEMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUVwRiwwQ0FBMEM7UUFDMUMscUNBQXFDO1FBQ3JDLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFsQnNCLG1DQUFPLEdBQVA7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBVSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBSnNCO1FBQXRCLFlBQVksQ0FBQyxPQUFPLENBQUM7Ozs7b0RBSXJCO0lBTFUsaUJBQWlCO1FBSjdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO2lEQVFlLFVBQVU7WUFDZixRQUFRO1lBQ0MsZUFBZTtPQVR2QixpQkFBaUIsQ0FvQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQXBCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb25maWcgfSBmcm9tICcuL292ZXJsYXktY29uZmlnJztcbmltcG9ydCB7IExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICcuLi9zdHlsZXMvY29yZS1zdHlsZXMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuZXhwb3J0IGNvbnN0IFNUWUxFU19CQUNLRFJPUF9ST09UID0gKHtcbiAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICB3aWR0aDogJzEwMHZ3JyxcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgdXNlclNlbGVjdDogJ25vbmUnXG59KTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktb3ZlcmxheS1iYWNrZHJvcCcsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlCYWNrZHJvcCB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5kaXNhYmxlQ2xvc2UpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5mbkRlc3Ryb3khKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2NvbmZpZzogTHlPdmVybGF5Q29uZmlnXG4gICkge1xuICAgIF9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoX3RoZW1lLnN0eWxlKFNUWUxFU19CQUNLRFJPUF9ST09ULCBTVFlMRV9QUklPUklUWSkpO1xuXG4gICAgLy8gdGhpcyBhcHBsaWVzIGN1c3RvbSBjbGFzcyBmb3IgYmFja2Ryb3AsXG4gICAgLy8gaWYgb25lIGlzIG5vdCBkZWZpbmVkLCBkbyBub3RoaW5nLlxuICAgIGNvbnN0IGJhY2tkcm9wQ2xhc3MgPSBfY29uZmlnLmJhY2tkcm9wQ2xhc3M7XG4gICAgaWYgKGJhY2tkcm9wQ2xhc3MpIHtcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYWNrZHJvcENsYXNzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==