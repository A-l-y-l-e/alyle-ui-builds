import { ElementRef, TemplateRef, OnDestroy, AfterViewInit, Renderer2, OnInit } from '@angular/core';
import { LyOverlay, OverlayFromTemplateRef, LyTheme2, Placement, XPosition, YPosition } from '@alyle/ui';
/** Menu container */
export declare class LyMenu implements OnInit, AfterViewInit {
    private _theme;
    private _el;
    private _renderer;
    /**
     * styles
     * @docs-private
     */
    readonly classes: Record<"container", string>;
    /**
     * Destroy menu
     * @docs-private
     */
    destroy: () => void;
    ref: LyMenuTriggerFor;
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
    private _setTransform;
}
export declare class LyMenuItem {
    private _menu;
    _click(): void;
    constructor(_menu: LyMenu, el: ElementRef, theme: LyTheme2);
}
export declare class LyMenuTriggerFor implements OnDestroy {
    private elementRef;
    private overlay;
    /** Current menuRef */
    _menuRef: OverlayFromTemplateRef;
    lyMenuTriggerFor: TemplateRef<any>;
    constructor(elementRef: ElementRef, overlay: LyOverlay);
    /** @docs-private */
    _targetPosition(): ClientRect;
    _handleClick(): void;
    detach(): void;
    destroy(): void;
    ngOnDestroy(): void;
}
