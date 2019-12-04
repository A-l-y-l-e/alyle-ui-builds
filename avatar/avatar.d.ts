import { ElementRef, OnInit, OnChanges, Renderer2, InjectionToken } from '@angular/core';
import { LyTheme2, StyleTemplate, StyleRenderer } from '@alyle/ui';
export interface LyAvatarTheme {
    /** Styles for Avatar Component */
    root?: () => StyleTemplate;
}
export interface LyAvatarDefaultOptions {
    size?: number;
    bg?: string;
}
export interface LyAvatarVariables {
    avatar?: LyAvatarTheme;
}
export declare const LY_AVATAR_DEFAULT_OPTIONS: InjectionToken<LyAvatarDefaultOptions>;
/** @docs-private */
export declare class LyAvatarBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyAvatarMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & typeof LyAvatarBase;
export declare class LyAvatar extends LyAvatarMixinBase implements OnChanges, OnInit {
    private _elementRef;
    private _styleRenderer;
    private _defaults;
    /** @docs-private */
    static readonly и = "LyAvatar";
    /** @docs-private */
    readonly classes: Pick<{
        $name: string;
        $priority: string;
        root: string;
    }, "root">;
    private _size;
    /** Avatar size */
    size: number;
    [0x1]: string;
    constructor(theme: LyTheme2, renderer: Renderer2, _elementRef: ElementRef, _styleRenderer: StyleRenderer, _defaults: LyAvatarDefaultOptions);
    ngOnChanges(): void;
    ngOnInit(): void;
}
