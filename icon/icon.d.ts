import { Renderer2, ElementRef, OnInit, OnChanges } from '@angular/core';
import { LyIconService } from './icon.service';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
export declare class LyIconBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyIconMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/flat").CanFlat> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & typeof LyIconBase;
export declare class LyIcon extends LyIconMixinBase implements OnChanges, OnInit {
    private iconService;
    private _el;
    private _renderer;
    private _src;
    private _icon;
    private _fontSet;
    private _previousFontSet;
    private _currentClass;
    private _fontIcon;
    /** deprecated */
    src: string;
    icon: string;
    fontSet: string;
    fontIcon: string;
    constructor(iconService: LyIconService, _el: ElementRef, _renderer: Renderer2, theme: LyTheme2);
    ngOnChanges(): void;
    private _isDefault;
    private _prepareSvgIcon;
    private _appendChild;
    private _appendDefaultSvgIcon;
    private _updateClass;
    ngOnInit(): void;
    /**
     * run only browser
     * remove current icon
     */
    private _cleanIcon;
    private _updateFontClass;
}
