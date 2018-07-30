import { AfterViewInit, ElementRef, Renderer2, NgZone, OnDestroy, OnInit } from '@angular/core';
import { LyTheme2, LyBgColorAndRaised } from '@alyle/ui';
import { LyRippleService } from '@alyle/ui/ripple';
import { LyButtonService } from './button.service';
export declare class LyButton implements OnInit, AfterViewInit, OnDestroy {
    private elementRef;
    private renderer;
    private theme;
    rippleStyles: LyRippleService;
    private buttonService;
    private bgAndColor;
    _disabled: boolean;
    private _rippleSensitive;
    private _disabledClassName;
    private _outlinedClassName;
    private _rippleContainer;
    outlined: boolean;
    rippleSensitive: boolean;
    buttonContent: ElementRef;
    disabled: boolean;
    readonly classes: {
        currentConfig: string;
    };
    constructor(elementRef: ElementRef, renderer: Renderer2, theme: LyTheme2, rippleStyles: LyRippleService, buttonService: LyButtonService, _ngZone: NgZone, bgAndColor: LyBgColorAndRaised);
    ngOnInit(): void;
    focused(): void;
    ngAfterViewInit(): void;
    private disableStyle;
    ngOnDestroy(): void;
}
