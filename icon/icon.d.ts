import { Renderer2, ElementRef, OnInit, OnChanges } from '@angular/core';
import { LyIconService } from './icon.service';
import { LyTheme2 } from '@alyle/ui';
export declare class LyButtonBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
export declare const LyButtonMixinBase: import("../../@alyle/ui/src/common/constructor").Constructor<import("../../@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("../../@alyle/ui/src/common/constructor").Constructor<import("../../@alyle/ui/src/common/bg").CanBg> & import("../../@alyle/ui/src/common/constructor").Constructor<import("../../@alyle/ui/src/common/flat").CanFlat> & import("../../@alyle/ui/src/common/constructor").Constructor<import("../../@alyle/ui/src/common/color").CanColor> & import("../../@alyle/ui/src/common/constructor").Constructor<import("../../@alyle/ui/src/common/raised").CanRaised> & import("../../@alyle/ui/src/common/constructor").Constructor<import("../../@alyle/ui/src/common/outlined").CanOutlined> & import("../../@alyle/ui/src/common/constructor").Constructor<import("../../@alyle/ui/src/common/elevation").CanElevation> & import("../../@alyle/ui/src/common/constructor").Constructor<import("../../@alyle/ui/src/common/shadow-color").CanShadowColor> & typeof LyButtonBase;
export declare class Icon extends LyButtonMixinBase implements OnChanges, OnInit {
    private iconService;
    private _el;
    private _renderer;
    private _defaultClass;
    private _src;
    private _icon;
    src: string;
    icon: string;
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
}
