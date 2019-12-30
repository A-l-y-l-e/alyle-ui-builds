import { ChangeDetectorRef, ElementRef, NgZone, OnDestroy, TemplateRef, OnInit, Renderer2 } from '@angular/core';
import { LyFocusState, LyOverlay, LyTheme2, Placement, WinScroll, XPosition, YPosition, StyleCollection, LyClasses, StyleTemplate, ThemeRef } from '@alyle/ui';
export interface LyTooltipTheme {
    /** Styles for Tooltip Component */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
    appearance?: {
        icon?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        fab?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        miniFab?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        [name: string]: ((classes: LyClasses<typeof STYLES>) => StyleTemplate) | undefined;
    };
    size?: {
        small?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        medium?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        large?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        [name: string]: ((classes: LyClasses<typeof STYLES>) => StyleTemplate) | undefined;
    };
}
export interface LyTooltipVariables {
    tooltip?: LyTooltipTheme;
}
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyTooltipVariables, ref: ThemeRef) => {
    $priority: number;
    root: () => StyleTemplate;
};
export declare class LyTooltip implements OnInit, OnDestroy {
    private _theme;
    private _overlay;
    private _el;
    private _renderer;
    private _cd;
    private _focusState;
    /** @docs-private */
    readonly classes: Pick<{
        $priority: string;
        root: string;
    }, "root">;
    private _tooltip;
    private _tooltipOverlay;
    private _listeners;
    private _scrollSub;
    private _scrollVal;
    private _showTimeoutId;
    private _hideTimeoutId;
    tooltip: string | TemplateRef<any> | null;
    lyTooltipShowDelay: number;
    lyTooltipHideDelay: number;
    placement: Placement;
    xPosition: XPosition;
    yPosition: YPosition;
    constructor(_theme: LyTheme2, _overlay: LyOverlay, _el: ElementRef, _renderer: Renderer2, _cd: ChangeDetectorRef, _focusState: LyFocusState, ngZone: NgZone, scroll: WinScroll);
    ngOnInit(): void;
    ngOnDestroy(): void;
    show(delay?: number): void;
    hide(delay?: number): void;
    toggle(): void;
    private _markForCheck;
    private _updatePosition;
}
