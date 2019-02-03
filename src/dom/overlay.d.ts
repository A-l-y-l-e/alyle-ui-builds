import { TemplateRef, ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { LyOverlayContainer } from './overlay-container';
import { WinResize } from './resize';
import { WinScroll } from './scroll';
interface OverlayConfig {
    styles: Object;
    classes?: string[];
    backdrop?: boolean;
    fnDestroy?: (...arg: any) => void;
    /** Function that will be called on scroll or resize event */
    onResizeScroll?: (() => void);
    /** @deprecated */
    host?: any;
}
export interface OverlayFromTemplateRef {
    /** Detaches a view from dirty checking again of ApplicationRef. */
    readonly detach: () => void;
    /** Remove element of DOM */
    readonly remove: () => void;
    /** Detach & remove */
    readonly destroy: () => void;
    /** Function that will be called on scroll or resize event */
    onResizeScroll: (() => void) | null;
    readonly containerElement: HTMLDivElement;
}
export declare class LyOverlay {
    private _overlayContainer;
    private _componentFactoryResolver;
    private _appRef;
    private _injector;
    private _windowScroll;
    private _resizeService;
    constructor(_overlayContainer: LyOverlayContainer, _componentFactoryResolver: ComponentFactoryResolver, _appRef: ApplicationRef, _injector: Injector, _windowScroll: WinScroll, _resizeService: WinResize);
    create(templateOrComponent: Type<any> | TemplateRef<any> | string, context?: any, config?: OverlayConfig): OverlayFromTemplateRef;
}
export {};
