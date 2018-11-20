import { OnChanges, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { LyTheme2 } from './theme2.service';
export declare class LyPaperBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
export declare const LyPaperMixinBase: import("../common/constructor").Constructor<import("../common/build-common-behaviors").CanStyleUpdater> & import("../common/constructor").Constructor<import("../common/bg").CanBg> & import("../common/constructor").Constructor<import("../common/flat").CanFlat> & import("../common/constructor").Constructor<import("../common/color").CanColor> & import("../common/constructor").Constructor<import("../common/raised").CanRaised> & import("../common/constructor").Constructor<import("../common/outlined").CanOutlined> & import("../common/constructor").Constructor<import("../common/elevation").CanElevation> & import("../common/constructor").Constructor<import("../common/shadow-color").CanShadowColor> & import("../common/constructor").Constructor<import("../common/disable-ripple").CanDisableRipple> & typeof LyPaperBase;
export declare class LyPaper extends LyPaperMixinBase implements OnChanges, OnDestroy {
    private _el;
    constructor(theme: LyTheme2, ngZone: NgZone, _el: ElementRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
