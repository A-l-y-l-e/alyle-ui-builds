import { ElementRef, OnChanges, OnInit, Renderer2, OnDestroy, InjectionToken } from '@angular/core';
import { LyTheme2, LyClasses, StyleTemplate, ThemeRef, StyleCollection } from '@alyle/ui';
export interface LyBadgeVariables {
    badge?: LyBadgeTheme;
}
export interface LyBadgeTheme {
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
    appearance?: {
        default?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        dot?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
        [name: string]: ((classes: LyClasses<typeof STYLES>) => StyleTemplate) | undefined;
    };
}
export declare const LY_BADGE_DEFAULT_OPTIONS: InjectionToken<LyBadgeTheme>;
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyBadgeVariables, ref: ThemeRef) => {
    $name: string;
    $priority: number;
    root: () => (className: string) => string;
    relative: (className: string) => string;
};
/** @docs-private */
export declare class LyBadgeBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyBadgeMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/alyle-ui").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & typeof LyBadgeBase;
export declare class LyBadge extends LyBadgeMixinBase implements OnChanges, OnInit, OnDestroy {
    private _el;
    private _renderer;
    static readonly и = "LyBadge";
    /**
     * Styles
     * @docs-private
     */
    readonly classes: Pick<{
        $name: string;
        $priority: string;
        root: string;
        relative: string;
    }, "root" | "relative">;
    private _content;
    private _positionClass;
    private _badgeEl;
    private _badgeElementRef;
    private _hostClass;
    /** The content for the badge */
    content: string | number;
    container: HTMLElement;
    private _container;
    hPosition: 'before' | 'after';
    vPosition: 'above' | 'below';
    overlap: 'circle' | 'rectangle';
    private _overlap;
    private _overlapClass;
    /** The color of the badge */
    bg: string;
    /** The color of the badge */
    lyBadgeBg: string;
    private _lyBadgeBg;
    appearance: string;
    lyBadgeAppearance: string;
    private _appearance;
    private _appearanceClass;
    constructor(_el: ElementRef<HTMLElement>, _theme: LyTheme2, _renderer: Renderer2);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _updatePosition;
    private _createBadge;
}
