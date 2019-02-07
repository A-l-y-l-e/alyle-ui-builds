import { TemplateRef, ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { WinResize } from './resize';
import { WinScroll } from './scroll';
import { LyOverlayContainer } from './overlay-container';
import { OverlayFactory } from './overlay-factory';
import { LyOverlayConfig } from './overlay-config';
export declare class LyOverlay {
    private _overlayContainer;
    private _componentFactoryResolver;
    private _appRef;
    private _injector;
    private _windowScroll;
    private _resizeService;
    constructor(_overlayContainer: LyOverlayContainer, _componentFactoryResolver: ComponentFactoryResolver, _appRef: ApplicationRef, _injector: Injector, _windowScroll: WinScroll, _resizeService: WinResize);
    create<T>(templateOrComponent: Type<T> | TemplateRef<any> | string, context?: any, config?: LyOverlayConfig): OverlayFactory<T>;
}
