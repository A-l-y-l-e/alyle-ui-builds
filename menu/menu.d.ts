import { ElementRef, TemplateRef, OnDestroy } from '@angular/core';
import { LyOverlay, OverlayFromTemplateRef, LyTheme2 } from '@alyle/ui';
/** Menu container */
export declare class LyMenu {
    private theme;
    private _el;
    /**
     * styles
     * @ignore
     */
    classes: Record<"root", string>;
    /**
     * Destroy menu
     * @ignore
     */
    destroy: () => void;
    ref: LyMenuTriggerFor;
    menuEnter: any;
    menuLeave2: any;
    endAnimation(e: any): void;
    constructor(theme: LyTheme2, _el: ElementRef);
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
    targetPosition(): ClientRect;
    _handleClick(): void;
    detach(): void;
    destroy(): void;
    ngOnDestroy(): void;
}
