import { ElementRef, OnInit, OnChanges, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
export declare class LyAvatarBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyAvatarMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & typeof LyAvatarBase;
export declare class LyAvatar extends LyAvatarMixinBase implements OnChanges, OnInit {
    private _elementRef;
    /** @docs-private */
    readonly classes: Record<"root", string>;
    private _size;
    private _sizeClass;
    size: number;
    constructor(theme: LyTheme2, renderer: Renderer2, _elementRef: ElementRef);
    ngOnChanges(): void;
    ngOnInit(): void;
}
