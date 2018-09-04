import { ComponentFactoryResolver, TemplateRef, ComponentRef, ViewContainerRef } from '@angular/core';
import { LyOverlayContainer } from './overlay-container';
export declare class DomService {
    private componentFactoryResolver;
    private overlayContainer;
    private _viewContainerRef;
    private _viewRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver, overlayContainer: LyOverlayContainer);
    attach<T>(_hostViewContainerRef: ViewContainerRef, component: any, template: TemplateRef<any>): void;
    addChild(child: HTMLElement): void;
    getDomElementFromComponentRef(componentRef: ComponentRef<any>): HTMLElement;
    destroyRef(componentRef: ComponentRef<any>, delay: number): void;
}
