import { TemplateRef, OnDestroy, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { LyTheme2, LyOverlay, LyFocusState, WindowScrollService } from '@alyle/ui';
export declare class LyTooltip implements OnDestroy {
    private _theme;
    private _overlay;
    private _el;
    private _cd;
    readonly classes: Record<"root", string>;
    private _tooltip;
    private _tooltipOverlay;
    private _listeners;
    private _scrollSub;
    private _showTimeoutId;
    private _hideTimeoutId;
    tooltip: string | TemplateRef<any>;
    lyTooltipShowDelay: number;
    lyTooltipHideDelay: number;
    constructor(_theme: LyTheme2, _overlay: LyOverlay, _el: ElementRef, _cd: ChangeDetectorRef, focusState: LyFocusState, ngZone: NgZone, scroll: WindowScrollService);
    ngOnDestroy(): void;
    show(delay?: number): void;
    hide(delay?: number): void;
    toggle(): void;
    private _markForCheck;
}
