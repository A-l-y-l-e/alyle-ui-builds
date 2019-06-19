import * as tslib_1 from "tslib";
import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { WinResize } from './resize';
import { WinScroll } from './scroll';
import { LyOverlayContainer } from './overlay-container';
import { OverlayFactory } from './overlay-factory';
import * as i0 from "@angular/core";
import * as i1 from "./overlay-container";
import * as i2 from "./scroll";
import * as i3 from "./resize";
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
    LyOverlay.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(i0.ɵɵinject(i1.LyOverlayContainer), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i2.WinScroll), i0.ɵɵinject(i3.WinResize)); }, token: LyOverlay, providedIn: "root" });
    LyOverlay = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [LyOverlayContainer,
            ComponentFactoryResolver,
            ApplicationRef,
            Injector,
            WinScroll,
            WinResize])
    ], LyOverlay);
    return LyOverlay;
}());
export { LyOverlay };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFlLFVBQVUsRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBTW5EO0lBRUUsbUJBQ1UsaUJBQXFDLEVBQ3JDLHlCQUFtRCxFQUNuRCxPQUF1QixFQUN2QixTQUFtQixFQUNuQixhQUF3QixFQUN4QixjQUF5QjtRQUx6QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBQ3JDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixrQkFBYSxHQUFiLGFBQWEsQ0FBVztRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBVztJQUMvQixDQUFDO0lBRUwsMEJBQU0sR0FBTixVQUFVLG1CQUF3RCxFQUFFLE9BQWEsRUFBRSxNQUF3QjtRQUN6RyxPQUFPLElBQUksY0FBYyxDQUN2QixJQUFJLENBQUMseUJBQXlCLEVBQzlCLElBQUksQ0FBQyxPQUFPLEVBQ1osbUJBQW1CLEVBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFDdEIsT0FBTyxFQUNQLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDOztJQXZCVSxTQUFTO1FBSHJCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7aURBSTZCLGtCQUFrQjtZQUNWLHdCQUF3QjtZQUMxQyxjQUFjO1lBQ1osUUFBUTtZQUNKLFNBQVM7WUFDUixTQUFTO09BUnhCLFNBQVMsQ0F3QnJCO29CQWxDRDtDQWtDQyxBQXhCRCxJQXdCQztTQXhCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIEluamVjdGFibGUsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5SZXNpemUgfSBmcm9tICcuL3Jlc2l6ZSc7XG5pbXBvcnQgeyBXaW5TY3JvbGwgfSBmcm9tICcuL3Njcm9sbCc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IE92ZXJsYXlGYWN0b3J5IH0gZnJvbSAnLi9vdmVybGF5LWZhY3RvcnknO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi9vdmVybGF5LWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3dpbmRvd1Njcm9sbDogV2luU2Nyb2xsLFxuICAgIHByaXZhdGUgX3Jlc2l6ZVNlcnZpY2U6IFdpblJlc2l6ZVxuICApIHsgfVxuXG4gIGNyZWF0ZTxUPih0ZW1wbGF0ZU9yQ29tcG9uZW50OiBUeXBlPFQ+IHwgVGVtcGxhdGVSZWY8YW55PiB8IHN0cmluZywgY29udGV4dD86IGFueSwgY29uZmlnPzogTHlPdmVybGF5Q29uZmlnKSB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5RmFjdG9yeTxUPihcbiAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgIHRoaXMuX2FwcFJlZixcbiAgICAgIHRlbXBsYXRlT3JDb21wb25lbnQsXG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLFxuICAgICAgY29udGV4dCxcbiAgICAgIHRoaXMuX2luamVjdG9yLFxuICAgICAgdGhpcy5fd2luZG93U2Nyb2xsLFxuICAgICAgdGhpcy5fcmVzaXplU2VydmljZSxcbiAgICAgIGNvbmZpZ1xuICAgICk7XG4gIH1cbn1cbiJdfQ==