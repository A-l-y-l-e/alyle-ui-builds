import { ElementRef, OnChanges, Renderer2, TemplateRef, ViewContainerRef, AfterViewInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { LyTheme2, Placement, WinResize, StyleRenderer, ThemeRef, StyleCollection, StyleTemplate, LyClasses } from '@alyle/ui';
export interface LyDrawerTheme {
    /** Styles for Button Component */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
}
export interface LyDrawerVariables {
    drawer?: LyDrawerTheme;
}
export declare type LyDrawerPosition = Placement;
export declare type LyDrawerMode = 'side' | 'over';
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyDrawerVariables, ref: ThemeRef) => {
    $name: string;
    $priority: number;
    root: () => StyleTemplate;
    drawerContainer: (className: string) => string;
    drawer: (className: string) => string;
    drawerContent: (className: string) => string;
    drawerOpened: (className: string) => string;
    drawerClosed: any;
    backdrop: (className: string) => string;
    transition: (className: string) => string;
};
export declare class LyDrawerContent {
    private _renderer;
    private _el;
    static readonly и = "LyDrawerContent";
    constructor(_renderer: Renderer2, _el: ElementRef, drawerContainer: any);
    _getHostElement(): any;
}
export declare class LyDrawerContainer {
    private _theme;
    private _renderer;
    private _el;
    /** @docs-private */
    readonly classes: Pick<{
        $name: string;
        $priority: string;
        root: string;
        drawerContainer: string;
        drawer: string;
        drawerContent: string;
        drawerOpened: string;
        drawerClosed: string;
        backdrop: string;
        transition: string;
    }, "root" | "drawerContainer" | "drawer" | "drawerContent" | "drawerOpened" | "drawerClosed" | "backdrop" | "transition">;
    _openDrawers: number;
    _drawerContent: LyDrawerContent;
    constructor(_theme: LyTheme2, _renderer: Renderer2, _el: ElementRef);
    _getHostElement(): any;
}
export declare class LyDrawer implements OnChanges, AfterViewInit, OnDestroy {
    private _theme;
    private _styleRenderer;
    private _renderer;
    private _el;
    private _drawerContainer;
    private _vcr;
    private _winResize;
    private _cd;
    private _zone;
    static readonly и = "LyDrawer";
    /**
     * Styles
     * @docs-private
     */
    readonly classes: Pick<{
        $name: string;
        $priority: string;
        root: string;
        drawerContainer: string;
        drawer: string;
        drawerContent: string;
        drawerOpened: string;
        drawerClosed: string;
        backdrop: string;
        transition: string;
    }, "root" | "drawerContainer" | "drawer" | "drawerContent" | "drawerOpened" | "drawerClosed" | "backdrop" | "transition">;
    private _forceModeOverOpened;
    private _fromToggle;
    private _opened;
    private _viewRef?;
    private _isAnimation;
    private _hasBackdrop;
    private _position;
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
    [0x1]: string;
    constructor(_theme: LyTheme2, _styleRenderer: StyleRenderer, _renderer: Renderer2, _el: ElementRef, _drawerContainer: LyDrawerContainer, _vcr: ViewContainerRef, _winResize: WinResize, _cd: ChangeDetectorRef, _zone: NgZone);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    toggle(): void;
    private _contentHasMargin;
    private _updateBackdrop;
    private _updateAnimations;
}
