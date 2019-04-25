import { Renderer2, ElementRef, OnInit, OnChanges } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
declare type position = 'static' | 'absolute' | 'fixed' | 'sticky' | 'relative';
/** @docs-private */
export declare class LyToolbarBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyToolbarMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/alyle-ui").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & typeof LyToolbarBase;
export declare class LyToolbar extends LyToolbarMixinBase implements OnChanges, OnInit {
    private _renderer;
    private _el;
    private theme;
    /**
     * Styles
     * @docs-private
     */
    readonly classes: Record<"root" | "dense", string>;
    private _position;
    private _positionClass;
    private _dense;
    private _appearance;
    private _appearanceClass;
    position: position;
    dense: boolean;
    appearance: string;
    constructor(_renderer: Renderer2, _el: ElementRef, theme: LyTheme2);
    ngOnChanges(): void;
    ngOnInit(): void;
}
export {};
