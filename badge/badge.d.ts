import { ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
export declare class LyBadgeBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyBadgeMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/flat").CanFlat> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disabled").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & typeof LyBadgeBase;
export declare class LyBadge extends LyBadgeMixinBase implements OnChanges, OnInit {
    private _el;
    private _renderer;
    /**
     * Styles
     * @docs-private
     */
    classes: Record<"relative" | "root", string>;
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
    private _createBadge;
}
