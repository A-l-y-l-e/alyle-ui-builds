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
let LyOverlay = class LyOverlay {
    constructor(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _windowScroll, _resizeService) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._windowScroll = _windowScroll;
        this._resizeService = _resizeService;
    }
    create(templateOrComponent, context, config) {
        return new OverlayFactory(this._componentFactoryResolver, this._appRef, templateOrComponent, this._overlayContainer, context, this._injector, this._windowScroll, this._resizeService, config);
    }
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
export { LyOverlay };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFlLFVBQVUsRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBTW5ELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFFcEIsWUFDVSxpQkFBcUMsRUFDckMseUJBQW1ELEVBQ25ELE9BQXVCLEVBQ3ZCLFNBQW1CLEVBQ25CLGFBQXdCLEVBQ3hCLGNBQXlCO1FBTHpCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7UUFDckMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFXO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFXO0lBQy9CLENBQUM7SUFFTCxNQUFNLENBQUksbUJBQXdELEVBQUUsT0FBYSxFQUFFLE1BQXdCO1FBQ3pHLE9BQU8sSUFBSSxjQUFjLENBQ3ZCLElBQUksQ0FBQyx5QkFBeUIsRUFDOUIsSUFBSSxDQUFDLE9BQU8sRUFDWixtQkFBbUIsRUFDbkIsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixPQUFPLEVBQ1AsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsY0FBYyxFQUNuQixNQUFNLENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztBQXhCWSxTQUFTO0lBSHJCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7NkNBSTZCLGtCQUFrQjtRQUNWLHdCQUF3QjtRQUMxQyxjQUFjO1FBQ1osUUFBUTtRQUNKLFNBQVM7UUFDUixTQUFTO0dBUnhCLFNBQVMsQ0F3QnJCO1NBeEJZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpblJlc2l6ZSB9IGZyb20gJy4vcmVzaXplJztcbmltcG9ydCB7IFdpblNjcm9sbCB9IGZyb20gJy4vc2Nyb2xsJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgT3ZlcmxheUZhY3RvcnkgfSBmcm9tICcuL292ZXJsYXktZmFjdG9yeSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb25maWcgfSBmcm9tICcuL292ZXJsYXktY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBfd2luZG93U2Nyb2xsOiBXaW5TY3JvbGwsXG4gICAgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogV2luUmVzaXplXG4gICkgeyB9XG5cbiAgY3JlYXRlPFQ+KHRlbXBsYXRlT3JDb21wb25lbnQ6IFR5cGU8VD4gfCBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nLCBjb250ZXh0PzogYW55LCBjb25maWc/OiBMeU92ZXJsYXlDb25maWcpIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlGYWN0b3J5PFQ+KFxuICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgdGhpcy5fYXBwUmVmLFxuICAgICAgdGVtcGxhdGVPckNvbXBvbmVudCxcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIsXG4gICAgICBjb250ZXh0LFxuICAgICAgdGhpcy5faW5qZWN0b3IsXG4gICAgICB0aGlzLl93aW5kb3dTY3JvbGwsXG4gICAgICB0aGlzLl9yZXNpemVTZXJ2aWNlLFxuICAgICAgY29uZmlnXG4gICAgKTtcbiAgfVxufVxuIl19