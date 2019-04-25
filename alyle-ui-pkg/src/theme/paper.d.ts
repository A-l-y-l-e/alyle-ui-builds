import { OnChanges, ElementRef, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2 } from './theme2.service';
export declare class LyPaperBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
export declare const LyPaperMixinBase: import("../common/constructor").Constructor<import("../common/build-common-behaviors").CanStyleUpdater> & import("../common/constructor").Constructor<import("../common/bg").CanBg> & import("../common/constructor").Constructor<import("../common/color").CanColor> & import("../common/constructor").Constructor<import("../common/raised").CanRaised> & import("../common/constructor").Constructor<import("../common/outlined").CanOutlined> & import("../common/constructor").Constructor<import("../common/elevation").CanElevation> & import("../common/constructor").Constructor<import("../common/shadow-color").CanShadowColor> & import("../common/constructor").Constructor<import("../common/disable-ripple").CanDisableRipple> & typeof LyPaperBase;
export declare class LyPaper extends LyPaperMixinBase implements OnChanges, OnInit, OnDestroy {
    private _el;
    private _renderer;
    _hasText: boolean;
    hasText: any;
    constructor(theme: LyTheme2, ngZone: NgZone, _el: ElementRef, _renderer: Renderer2);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
