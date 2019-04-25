import { ElementRef, OnChanges, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
export declare const STYLES: (theme: ThemeVariables) => {
    $priority: number;
    root: {
        position: string;
        display: string;
        width: string;
        height: string;
        borderRadius: string;
        overflow: string;
        whiteSpace: string;
        textOverflow: string;
        pointerEvents: string;
        zIndex: number;
        fontSize: string;
        fontFamily: string;
        justifyContent: string;
        alignItems: string;
        boxSizing: string;
        '&': import("@alyle/ui/alyle-ui").StyleContainer;
    };
    relative: {
        position: string;
    };
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
    /**
     * Styles
     * @docs-private
     */
    readonly classes: Record<"relative" | "root", string>;
    private _content;
    private _position;
    private _positionClass;
    private _elContainer;
    private _badgeElementRef;
    private _lyBadgeBgClass;
    /** The content for the badge */
    content: string | number;
    /** The position for the badge */
    position: string;
    /** The color of the badge */
    lyBadgeBg: string;
    private _lyBadgeBg;
    constructor(_el: ElementRef, _theme: LyTheme2, _renderer: Renderer2);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _createBadge;
}
