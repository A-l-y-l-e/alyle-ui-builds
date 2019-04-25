import { ComponentRef, ComponentFactoryResolver, ApplicationRef, TemplateRef, Injector, Type } from '@angular/core';
import { WinScroll } from './scroll';
import { WinResize } from './resize';
import { LyOverlayConfig } from './overlay-config';
import { LyOverlayContainer } from './overlay-container';
export declare class OverlayFactory<T = any> {
    private _componentFactoryResolver;
    private _appRef;
    private _overlayContainer;
    private _injector;
    private _viewRef;
    private _el?;
    private _compRef;
    private _compRefOverlayBackdrop;
    private _windowSRSub;
    private _paddingRight;
    private _config;
    /** Function that will be called on scroll or resize event */
    onResizeScroll: (() => void) | null;
    readonly containerElement: HTMLDivElement;
    readonly componentRef: ComponentRef<T>;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _appRef: ApplicationRef, _templateRefOrComponent: TemplateRef<any> | Type<T> | string, _overlayContainer: LyOverlayContainer, _context: any, _injector: Injector, windowScroll: WinScroll, resizeService: WinResize, config?: LyOverlayConfig);
    private _updateStyles;
    private _appendComponentToBody;
    private _generateComponent;
    /** Detaches a view from dirty checking again of ApplicationRef. */
    detach(): void;
    /** Remove element of DOM */
    remove(): void;
    /** Detach & remove */
    destroy(): void;
    private _hiddeScroll;
    private _resetScroll;
}
