import { ElementRef, QueryList, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
export interface StyleMargin {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
}
export declare class LyDrawerContent {
    elementRef: ElementRef;
    renderer: Renderer2;
    margin: string;
    _el: HTMLElement;
    _lyAnimation: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    setContentStyle(margin: StyleMargin): void;
}
export declare class LyDrawerContainer {
    private renderer;
    private elementRef;
    private animationBuilder;
    isDrawerBg: BehaviorSubject<boolean | "active" | "inactive">;
    _drawers: QueryList<LyDrawer>;
    _drawerContent: LyDrawerContent;
    constructor(renderer: Renderer2, elementRef: ElementRef, animationBuilder: AnimationBuilder);
    _closeAllSideAndPush(): void;
    /** Close all open drawers */
    closeAll(): void;
}
export declare class LyDrawer implements OnChanges {
    private drawerContainer;
    private elementRef;
    private _opened;
    config: LyDrawerConfig;
    mode: 'side' | 'push' | 'over';
    position: 'top' | 'bottom' | 'left' | 'right' | 'rtl';
    isShowDrawer: boolean;
    isOpenDrawer: 'open' | 'close' | boolean;
    isDrawerHidden: boolean;
    opened: boolean;
    constructor(drawerContainer: LyDrawerContainer, elementRef: ElementRef);
    readonly _elementRect: ClientRect;
    private updateDrawerMargin;
    toBoolean(drawerState: boolean | 'open' | 'close'): boolean;
    toggle(): void;
    open(is?: true): 'open' | boolean;
    close(is?: false): 'close' | boolean;
    private toogleDrawer;
    setBgState(bgState: boolean | 'active' | 'inactive'): void;
    resetMargin(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
export interface LyDrawerConfig {
    width?: number;
    height?: number;
}
