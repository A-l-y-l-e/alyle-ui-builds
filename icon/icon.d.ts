import { ElementRef, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { LyIconService } from './icon.service';
import { LyTheme2, ThemeVariables, LyHostClass } from '@alyle/ui';
export declare const STYLES: (theme: ThemeVariables) => {
    $priority: number;
    $global: (className: string) => string;
    loading: (className: string) => string;
    defaultIcon: (className: string) => string;
};
/** @docs-private */
export declare class LyIconBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyIconMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & typeof LyIconBase;
export declare class LyIcon extends LyIconMixinBase implements OnChanges, OnInit, OnDestroy {
    private iconService;
    private _el;
    private _renderer;
    private _hostClass;
    readonly classes: Pick<{
        $priority: string;
        $global: string;
        loading: string;
        defaultIcon: string;
    }, "loading" | "defaultIcon">;
    private _icon;
    private _fontSet;
    private _previousFontSet;
    private _currentClass;
    private _fontIcon;
    private _iconElement?;
    icon: string;
    fontSet: string;
    fontIcon: string;
    /** @docs-private */
    readonly hostElement: any;
    constructor(iconService: LyIconService, _el: ElementRef, _renderer: Renderer2, theme: LyTheme2, _hostClass: LyHostClass);
    ngOnChanges(): void;
    private _isDefault;
    private _prepareSvgIcon;
    private _appendChild;
    private _addDefaultIcon;
    private _updateClass;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * run only browser
     * remove current icon
     */
    private _cleanIcon;
    private _updateFontClass;
}
