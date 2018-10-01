import { ElementRef, NgZone, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { Ripple, RippleConfig } from './ripple';
import { LyRippleService } from './ripple.service';
export declare class LyRipple implements OnInit, OnChanges, OnDestroy {
    private rippleService;
    _elementRef: ElementRef;
    private _ngZone;
    private _theme;
    rippleContainer: Ripple;
    lyRippleCentered: boolean;
    lyRippleDisabled: boolean;
    lyRippleSensitive: boolean;
    lyRippleRadius: 'containerSize' | number;
    lyRipplePercentageToIncrease: number;
    readonly lyRippleConfig: RippleConfig;
    constructor(rippleService: LyRippleService, _elementRef: ElementRef, _ngZone: NgZone, _theme: LyTheme2);
    ngOnInit(): void;
    ngOnChanges(): void;
    private _updateRipple;
    ngOnDestroy(): void;
}
