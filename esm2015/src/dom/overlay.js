/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { WinResize } from './resize';
import { WinScroll } from './scroll';
import { LyOverlayContainer } from './overlay-container';
import { OverlayFactory } from './overlay-factory';
import * as i0 from "@angular/core";
import * as i1 from "./overlay-container";
import * as i2 from "./scroll";
import * as i3 from "./resize";
export class LyOverlay {
    /**
     * @param {?} _overlayContainer
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     * @param {?} _injector
     * @param {?} _windowScroll
     * @param {?} _resizeService
     */
    constructor(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _windowScroll, _resizeService) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._windowScroll = _windowScroll;
        this._resizeService = _resizeService;
    }
    /**
     * @template T
     * @param {?} templateOrComponent
     * @param {?=} context
     * @param {?=} config
     * @return {?}
     */
    create(templateOrComponent, context, config) {
        return new OverlayFactory(this._componentFactoryResolver, this._appRef, templateOrComponent, this._overlayContainer, context, this._injector, this._windowScroll, this._resizeService, config);
    }
}
LyOverlay.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyOverlay.ctorParameters = () => [
    { type: LyOverlayContainer },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: WinScroll },
    { type: WinResize }
];
/** @nocollapse */ LyOverlay.ngInjectableDef = i0.defineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(i0.inject(i1.LyOverlayContainer), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR), i0.inject(i2.WinScroll), i0.inject(i3.WinResize)); }, token: LyOverlay, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._overlayContainer;
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._windowScroll;
    /**
     * @type {?}
     * @private
     */
    LyOverlay.prototype._resizeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vb3ZlcmxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFlLFVBQVUsRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBTW5ELE1BQU0sT0FBTyxTQUFTOzs7Ozs7Ozs7SUFFcEIsWUFDVSxpQkFBcUMsRUFDckMseUJBQW1ELEVBQ25ELE9BQXVCLEVBQ3ZCLFNBQW1CLEVBQ25CLGFBQXdCLEVBQ3hCLGNBQXlCO1FBTHpCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7UUFDckMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFXO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFXO0lBQy9CLENBQUM7Ozs7Ozs7O0lBRUwsTUFBTSxDQUFJLG1CQUF3RCxFQUFFLE9BQWEsRUFBRSxNQUF3QjtRQUN6RyxPQUFPLElBQUksY0FBYyxDQUN2QixJQUFJLENBQUMseUJBQXlCLEVBQzlCLElBQUksQ0FBQyxPQUFPLEVBQ1osbUJBQW1CLEVBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFDdEIsT0FBTyxFQUNQLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDOzs7WUExQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsa0JBQWtCO1lBSHVCLHdCQUF3QjtZQUF4QyxjQUFjO1lBQTRCLFFBQVE7WUFFM0UsU0FBUztZQURULFNBQVM7Ozs7Ozs7O0lBWWQsc0NBQTZDOzs7OztJQUM3Qyw4Q0FBMkQ7Ozs7O0lBQzNELDRCQUErQjs7Ozs7SUFDL0IsOEJBQTJCOzs7OztJQUMzQixrQ0FBZ0M7Ozs7O0lBQ2hDLG1DQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBJbmplY3RhYmxlLCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luUmVzaXplIH0gZnJvbSAnLi9yZXNpemUnO1xuaW1wb3J0IHsgV2luU2Nyb2xsIH0gZnJvbSAnLi9zY3JvbGwnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBPdmVybGF5RmFjdG9yeSB9IGZyb20gJy4vb3ZlcmxheS1mYWN0b3J5JztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbmZpZyB9IGZyb20gJy4vb3ZlcmxheS1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF93aW5kb3dTY3JvbGw6IFdpblNjcm9sbCxcbiAgICBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBXaW5SZXNpemVcbiAgKSB7IH1cblxuICBjcmVhdGU8VD4odGVtcGxhdGVPckNvbXBvbmVudDogVHlwZTxUPiB8IFRlbXBsYXRlUmVmPGFueT4gfCBzdHJpbmcsIGNvbnRleHQ/OiBhbnksIGNvbmZpZz86IEx5T3ZlcmxheUNvbmZpZykge1xuICAgIHJldHVybiBuZXcgT3ZlcmxheUZhY3Rvcnk8VD4oXG4gICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICB0aGlzLl9hcHBSZWYsXG4gICAgICB0ZW1wbGF0ZU9yQ29tcG9uZW50LFxuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lcixcbiAgICAgIGNvbnRleHQsXG4gICAgICB0aGlzLl9pbmplY3RvcixcbiAgICAgIHRoaXMuX3dpbmRvd1Njcm9sbCxcbiAgICAgIHRoaXMuX3Jlc2l6ZVNlcnZpY2UsXG4gICAgICBjb25maWdcbiAgICApO1xuICB9XG59XG4iXX0=