import { ElementRef, OnInit, Renderer2, AfterViewInit, NgZone, OnDestroy } from '@angular/core';
import { LyRippleService } from '@alyle/ui/ripple';
import { LyCommon, LyTheme2 } from '@alyle/ui';
import { LyIconButtonService } from './icon-button.service';
export declare class LyIconButton implements OnInit, AfterViewInit, OnDestroy {
    _el: ElementRef;
    private renderer;
    iconButtonService: LyIconButtonService;
    private theme;
    private _ngZone;
    _rippleService: LyRippleService;
    classes: Record<"size", string>;
    private _ripple;
    _rippleContainer: ElementRef;
    constructor(_el: ElementRef, renderer: Renderer2, bgAndColor: LyCommon, iconButtonService: LyIconButtonService, theme: LyTheme2, _ngZone: NgZone, _rippleService: LyRippleService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
