import * as tslib_1 from "tslib";
import { TemplateRef, Injectable, ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { WinResize } from './resize';
import { WinScroll } from './scroll';
import { LyOverlayContainer } from './overlay-container';
import { OverlayFactory } from './overlay-factory';
var LyOverlay = /** @class */ (function () {
    function LyOverlay(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _windowScroll, _resizeService) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._windowScroll = _windowScroll;
        this._resizeService = _resizeService;
    }
    LyOverlay.prototype.create = function (templateOrComponent, context, config) {
        return new OverlayFactory(this._componentFactoryResolver, this._appRef, templateOrComponent, this._overlayContainer, context, this._injector, this._windowScroll, this._resizeService, config);
    };
    LyOverlay.ctorParameters = function () { return [
        { type: LyOverlayContainer },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: WinScroll },
        { type: WinResize }
    ]; };
    LyOverlay = tslib_1.__decorate([
        Injectable()
    ], LyOverlay);
    return LyOverlay;
}());
export { LyOverlay };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUluRDtJQUVFLG1CQUNVLGlCQUFxQyxFQUNyQyx5QkFBbUQsRUFDbkQsT0FBdUIsRUFDdkIsU0FBbUIsRUFDbkIsYUFBd0IsRUFDeEIsY0FBeUI7UUFMekIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQUNyQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsa0JBQWEsR0FBYixhQUFhLENBQVc7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQVc7SUFDL0IsQ0FBQztJQUVMLDBCQUFNLEdBQU4sVUFBVSxtQkFBd0QsRUFBRSxPQUFhLEVBQUUsTUFBd0I7UUFDekcsT0FBTyxJQUFJLGNBQWMsQ0FDdkIsSUFBSSxDQUFDLHlCQUF5QixFQUM5QixJQUFJLENBQUMsT0FBTyxFQUNaLG1CQUFtQixFQUNuQixJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLE9BQU8sRUFDUCxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxjQUFjLEVBQ25CLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQzs7Z0JBcEI0QixrQkFBa0I7Z0JBQ1Ysd0JBQXdCO2dCQUMxQyxjQUFjO2dCQUNaLFFBQVE7Z0JBQ0osU0FBUztnQkFDUixTQUFTOztJQVJ4QixTQUFTO1FBRHJCLFVBQVUsRUFBRTtPQUNBLFNBQVMsQ0F3QnJCO0lBQUQsZ0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXhCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIEluamVjdGFibGUsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5SZXNpemUgfSBmcm9tICcuL3Jlc2l6ZSc7XG5pbXBvcnQgeyBXaW5TY3JvbGwgfSBmcm9tICcuL3Njcm9sbCc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IE92ZXJsYXlGYWN0b3J5IH0gZnJvbSAnLi9vdmVybGF5LWZhY3RvcnknO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi9vdmVybGF5LWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF93aW5kb3dTY3JvbGw6IFdpblNjcm9sbCxcbiAgICBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBXaW5SZXNpemVcbiAgKSB7IH1cblxuICBjcmVhdGU8VD4odGVtcGxhdGVPckNvbXBvbmVudDogVHlwZTxUPiB8IFRlbXBsYXRlUmVmPGFueT4gfCBzdHJpbmcsIGNvbnRleHQ/OiBhbnksIGNvbmZpZz86IEx5T3ZlcmxheUNvbmZpZykge1xuICAgIHJldHVybiBuZXcgT3ZlcmxheUZhY3Rvcnk8VD4oXG4gICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICB0aGlzLl9hcHBSZWYsXG4gICAgICB0ZW1wbGF0ZU9yQ29tcG9uZW50LFxuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lcixcbiAgICAgIGNvbnRleHQsXG4gICAgICB0aGlzLl9pbmplY3RvcixcbiAgICAgIHRoaXMuX3dpbmRvd1Njcm9sbCxcbiAgICAgIHRoaXMuX3Jlc2l6ZVNlcnZpY2UsXG4gICAgICBjb25maWdcbiAgICApO1xuICB9XG59XG4iXX0=