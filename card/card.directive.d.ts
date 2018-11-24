import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
export declare class LyCardBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyCardMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/flat").CanFlat> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disabled").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyCardBase;
export declare class LyCard extends LyCardMixinBase implements OnChanges, OnInit, OnDestroy {
    private theme;
    private _el;
    private renderer;
    /**
     * styles
     * @ignore
     */
    classes: Record<"root" | "content" | "actions" | "actionsItem", string>;
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
    private theme;
    private _bgImg;
    private _bgImgClass;
    private _ratio;
    private _ratioClass;
    bgImg: string;
    /** Aspect ratio */
    ratio: string;
    constructor(el: ElementRef, renderer: Renderer2, theme: LyTheme2);
    ngOnInit(): void;
    private _createBgImgClass;
    private _createAspectRatioClass;
}
