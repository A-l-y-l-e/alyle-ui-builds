import { ChangeDetectorRef, ElementRef, NgZone, OnDestroy, TemplateRef, OnInit, Renderer2 } from '@angular/core';
import { LyFocusState, LyOverlay, LyTheme2, Placement, WindowScrollService, XPosition, YPosition } from '@alyle/ui';
export declare class LyTooltip implements OnInit, OnDestroy {
    private _theme;
    private _overlay;
    private _el;
    private _renderer;
    private _cd;
    /** @docs-private */
    readonly classes: Record<"root", string>;
    private _tooltip;
    private _tooltipOverlay;
    private _listeners;
    private _scrollSub;
    private _scrollVal;
    private _showTimeoutId;
    private _hideTimeoutId;
    tooltip: string | TemplateRef<any>;
    lyTooltipShowDelay: number;
    lyTooltipHideDelay: number;
    placement: Placement;
    xPosition: XPosition;
    yPosition: YPosition;
    constructor(_theme: LyTheme2, _overlay: LyOverlay, _el: ElementRef, _renderer: Renderer2, _cd: ChangeDetectorRef, focusState: LyFocusState, ngZone: NgZone, scroll: WindowScrollService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    show(delay?: number): void;
    hide(delay?: number): void;
    toggle(): void;
    private _markForCheck;
}
