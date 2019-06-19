import { ElementRef, OnChanges, Renderer2, TemplateRef, ViewContainerRef, AfterViewInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { LyTheme2, ThemeVariables, Placement, WinResize } from '@alyle/ui';
export declare type LyDrawerPosition = Placement;
export declare type LyDrawerMode = 'side' | 'over';
export declare const STYLES: (theme: ThemeVariables) => {
    drawerContainer: {
        display: string;
        position: string;
        overflow: string;
        '-webkit-overflow-scrolling': string;
    };
    drawer: {
        display: string;
        position: string;
        zIndex: number;
        overflow: string;
        visibility: string;
    };
    drawerContent: {
        display: string;
    };
    drawerOpened: {
        transform: string;
        visibility: string;
    };
    drawerClosed: any;
    backdrop: {
        backgroundColor: string;
        position: string;
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    transition: {
        transition: string;
        transitionProperty: string;
    };
};
export declare class LyDrawerContent {
    private _renderer;
    private _el;
    constructor(_renderer: Renderer2, _el: ElementRef, drawerContainer: any);
    _getHostElement(): any;
}
export declare class LyDrawerContainer {
    private _theme;
    private _renderer;
    private _el;
    /** @docs-private */
    readonly classes: Record<"drawerContainer" | "drawer" | "drawerContent" | "drawerOpened" | "drawerClosed" | "backdrop" | "transition", string>;
    _openDrawers: number;
    _drawerContent: LyDrawerContent;
    constructor(_theme: LyTheme2, _renderer: Renderer2, _el: ElementRef);
    _getHostElement(): any;
}
export declare class LyDrawer implements OnChanges, AfterViewInit, OnDestroy {
    private _theme;
    private _renderer;
    private _el;
    private _drawerContainer;
    private _vcr;
    private _winResize;
    private _cd;
    private _zone;
    /**
     * Styles
     * @docs-private
     */
    readonly classes: Record<"drawerContainer" | "drawer" | "drawerContent" | "drawerOpened" | "drawerClosed" | "backdrop" | "transition", string>;
    private _forceModeOverOpened;
    private _fromToggle;
    private _opened;
    private _viewRef?;
    private _isAnimation;
    private _hasBackdrop;
    private _position;
    private _positionClass;
    private _drawerRootClass;
    private _drawerClass?;
    private _drawerContentClass?;
    private _tabResizeSub;
    private _isOpen;
    _backdrop: TemplateRef<any>;
    opened: boolean;
    mode: LyDrawerMode;
    spacingAbove: string | number;
    spacingBelow: string | number;
    spacingBefore: string | number;
    spacingAfter: string | number;
    width: number | string;
    height: number | string;
    hasBackdrop: any;
    position: LyDrawerPosition;
    constructor(_theme: LyTheme2, _renderer: Renderer2, _el: ElementRef, _drawerContainer: LyDrawerContainer, _vcr: ViewContainerRef, _winResize: WinResize, _cd: ChangeDetectorRef, _zone: NgZone);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    toggle(): void;
    private _contentHasMargin;
    private _updateBackdrop;
    private _updateAnimations;
}
