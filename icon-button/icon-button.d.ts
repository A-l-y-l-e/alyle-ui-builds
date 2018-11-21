import { ElementRef, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { LyRippleService, LyTheme2 } from '@alyle/ui';
import { LyIconButtonService } from './icon-button.service';
export declare class LyIconButtonBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
export declare const LyIconButtonMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/flat").CanFlat> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disabled").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyIconButtonBase;
export declare class LyIconButton extends LyIconButtonMixinBase implements OnInit, OnDestroy {
    _el: ElementRef;
    _rippleService: LyRippleService;
    private renderer;
    iconButtonService: LyIconButtonService;
    private theme;
    classes: Record<"size", string>;
    _rippleContainer: ElementRef;
    constructor(_el: ElementRef, _rippleService: LyRippleService, renderer: Renderer2, iconButtonService: LyIconButtonService, theme: LyTheme2, ngZone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
