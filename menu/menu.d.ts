import { AfterViewInit, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { LyOverlay, LyTheme2, OverlayFactory, Placement, XPosition, YPosition } from '@alyle/ui';
/** Menu container */
export declare class LyMenu implements OnInit, AfterViewInit {
    private _theme;
    private _el;
    private _renderer;
    /**
     * styles
     * @docs-private
     */
    readonly classes: Record<"root" | "container" | "item", string>;
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
    _menuRef?: OverlayFactory;
    lyMenuTriggerFor: TemplateRef<any>;
    constructor(elementRef: ElementRef, overlay: LyOverlay);
    /** @docs-private */
    _targetPosition(): ClientRect;
    _handleClick(): void;
    detach(): void;
    destroy(): void;
    ngOnDestroy(): void;
    _getHostElement(): any;
}
