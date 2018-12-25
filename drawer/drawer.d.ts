import { ElementRef, OnChanges, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { LyTheme2, Placement } from '@alyle/ui';
export declare type LyDrawerPosition = Placement;
export declare type LyDrawerMode = 'side' | 'over';
export declare class LyDrawerContainer {
    private _theme;
    private _renderer;
    private _el;
    /** @docs-private */
    readonly classes: Record<"drawerContainer" | "drawer" | "drawerContent" | "drawerOpened" | "backdrop" | "transition", string>;
    _openDrawers: number;
    _drawerContent: LyDrawerContent;
    constructor(_theme: LyTheme2, _renderer: Renderer2, _el: ElementRef);
}
export declare class LyDrawerContent {
    private _renderer;
    private _el;
    constructor(_renderer: Renderer2, _el: ElementRef, drawerContainer: LyDrawerContainer);
    _getHostElement(): any;
}
export declare class LyDrawer implements OnChanges {
    private _theme;
    private _renderer;
    private _el;
    private _drawerContainer;
    private _vcr;
    /**
     * Styles
     * @docs-private
     */
    readonly classes: Record<"drawerContainer" | "drawer" | "drawerContent" | "drawerOpened" | "backdrop" | "transition", string>;
    private _forceModeOver;
    private _fromToggle;
    private _opened;
    private _viewRef;
    private _isAnimation;
    private _hasBackdrop;
    private _position;
    private _positionClass;
    private _drawerRootClass;
    private _drawerClass;
    private _drawerContentClass;
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
    constructor(_theme: LyTheme2, _renderer: Renderer2, _el: ElementRef, _drawerContainer: LyDrawerContainer, _vcr: ViewContainerRef);
    ngOnChanges(): void;
    toggle(): void;
    private _resetForceModeOver;
    private _updateBackdrop;
    private _updateAnimations;
}
