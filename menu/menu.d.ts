import { AfterViewInit, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef, EventEmitter } from '@angular/core';
import { LyOverlay, LyTheme2, OverlayFactory, Placement, XPosition, YPosition, StyleCollection, LyClasses, StyleTemplate, ThemeRef } from '@alyle/ui';
export interface LyMenuTheme {
    /** Styles for Menu Component */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
}
export interface LyMenuVariables {
    menu?: LyMenuTheme;
}
declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyMenuVariables, ref: ThemeRef) => {
    $priority: number;
    root: () => StyleTemplate;
    container: (className: string) => string;
    item: (className: string) => string;
};
/** Menu container */
export declare class LyMenu implements OnInit, AfterViewInit {
    private _theme;
    private _el;
    private _renderer;
    /**
     * styles
     * @docs-private
     */
    readonly classes: Pick<{
        $priority: string;
        root: string;
        container: string;
        item: string;
    }, "root" | "container" | "item">;
    /**
     * Destroy menu
     * @docs-private
     */
    destroy: () => void;
    _container: ElementRef<HTMLDivElement>;
    ref: LyMenuTriggerFor & {};
    /** Position where the menu will be placed. */
    placement: Placement;
    /** The x-axis position of the menu. */
    xPosition: XPosition;
    /** The y-axis position of the menu. */
    yPosition: YPosition;
    /** Whether the menu has a backdrop. */
    hasBackdrop: boolean;
    private _hasBackdrop;
    menuLeave2: any;
    endAnimation(e: any): void;
    constructor(_theme: LyTheme2, _el: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private _updatePlacement;
}
export declare class LyMenuItem {
    private _menu;
    _click(): void;
    constructor(_menu: LyMenu, el: ElementRef, renderer: Renderer2);
}
export declare class LyMenuTriggerFor implements OnDestroy {
    private elementRef;
    private overlay;
    /** Current menuRef */
    _menuRef?: OverlayFactory | null;
    private _menuOpen;
    private _destroying;
    /** Whether the menu is open. */
    readonly menuOpen: boolean;
    lyMenuTriggerFor: TemplateRef<any>;
    readonly menuOpened: EventEmitter<void>;
    readonly menuClosed: EventEmitter<void>;
    constructor(elementRef: ElementRef, overlay: LyOverlay);
    ngOnDestroy(): void;
    _handleClick(): void;
    /** Opens the menu */
    openMenu(): void;
    /** Closes the menu */
    closeMenu(): void;
    /** Toggle menu */
    toggleMenu(): void;
    /** @docs-private */
    detach(): void;
    /** @docs-private */
    destroy(): void;
    _getHostElement(): any;
    _setMenuOpenToTrue(): void;
}
export {};
