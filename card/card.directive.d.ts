import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, StyleCollection, LyClasses, StyleTemplate, ThemeRef, StyleRenderer } from '@alyle/ui';
export interface LyCardTheme {
    /** Styles for Card Component */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
}
export interface LyCardVariables {
    card?: LyCardTheme;
}
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyCardVariables, ref: ThemeRef) => {
    $priority: number;
    $name: string;
    root: () => (className: string) => string;
    content: (className: string) => string;
    actions: (className: string) => string;
    actionsItem: (className: string) => string;
};
/** @docs-private */
export declare class LyCardBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyCardMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/alyle-ui").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyCardBase;
export declare class LyCard extends LyCardMixinBase implements OnChanges, OnInit, OnDestroy {
    private theme;
    private _el;
    private renderer;
    static readonly и = "LyCard";
    /**
     * styles
     * @docs-private
     */
    readonly classes: Pick<{
        $priority: string;
        $name: string;
        root: string;
        content: string;
        actions: string;
        actionsItem: string;
    }, "root" | "content" | "actions" | "actionsItem">;
    constructor(theme: LyTheme2, _el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class LyCardContent implements OnInit {
    private el;
    private renderer;
    private card;
    constructor(el: ElementRef, renderer: Renderer2, card: LyCard);
    ngOnInit(): void;
}
export declare class LyCardActions implements OnInit {
    private el;
    private renderer;
    private card;
    disableActionSpacing: boolean;
    constructor(el: ElementRef, renderer: Renderer2, card: LyCard);
    ngOnInit(): void;
}
export declare class LyCardMedia implements OnInit {
    private el;
    private renderer;
    private styleRenderer;
    static readonly и = "LyCardMedia";
    private _bgImg;
    private _ratio;
    bgImg: string;
    /** bgImg class name */
    [0x1]: string;
    /**
     * Aspect ratio
     *
     * e.g:
     * 4:3
     * 1:1
     */
    ratio: string;
    [0x2]: string;
    constructor(el: ElementRef, renderer: Renderer2, styleRenderer: StyleRenderer);
    ngOnInit(): void;
}
