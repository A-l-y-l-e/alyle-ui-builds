import { TemplateRef, ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { LyOverlayContainer, WindowScrollService } from './overlay-container';
interface OverlayConfig {
    styles: Object;
    classes?: string[];
    backdrop?: boolean;
    fnDestroy?: (...arg: any[]) => void;
    host?: any;
}
export interface OverlayFromTemplateRef {
    /** Detaches a view from dirty checking again of ApplicationRef.  */
    detach: () => void;
    /** Remove element of DOM */
    remove: () => void;
    /** Detach & remove */
    destroy: () => void;
    containerElement: HTMLDivElement;
}
export declare class LyOverlay {
    private _overlayContainer;
    private _componentFactoryResolver;
    private _appRef;
    private _injector;
    private _windowScroll;
    constructor(_overlayContainer: LyOverlayContainer, _componentFactoryResolver: ComponentFactoryResolver, _appRef: ApplicationRef, _injector: Injector, _windowScroll: WindowScrollService);
    create(template: TemplateRef<any>, context?: any, config?: OverlayConfig): OverlayFromTemplateRef;
}
export {};
