import { ElementRef, NgZone, OnInit, OnDestroy, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { Ripple, RippleConfig } from './ripple';
import { LyRippleService } from './ripple.service';
export declare class LyRipple implements OnInit, OnChanges, OnDestroy {
    private rippleService;
    _elementRef: ElementRef;
    private _ngZone;
    private _renderer;
    rippleContainer: Ripple;
    private _containerElement;
    lyRippleCentered: boolean;
    lyRippleDisabled: boolean;
    lyRippleSensitive: boolean;
    lyRippleRadius: 'containerSize' | number;
    lyRipplePercentageToIncrease: number;
    readonly lyRippleConfig: RippleConfig;
    constructor(rippleService: LyRippleService, _elementRef: ElementRef, _ngZone: NgZone, _renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _updateRipple;
    ngOnDestroy(): void;
}
