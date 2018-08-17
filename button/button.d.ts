import { ElementRef, Renderer2, NgZone, OnDestroy, OnInit } from '@angular/core';
import { LyTheme2, LyCommon } from '@alyle/ui';
import { LyRippleService } from '@alyle/ui/ripple';
export declare class LyButton implements OnInit, OnDestroy {
    private elementRef;
    private renderer;
    private theme;
    rippleStyles: LyRippleService;
    private bgAndColor;
    classes: {
        root: string;
        outlined: string;
        content: string;
    };
    _disabled: boolean;
    private _rippleSensitive;
    private _disabledClassName;
    private _outlinedClassName;
    private _rippleContainer;
    private _size;
    private _sizeClass;
    outlined: boolean;
    rippleSensitive: boolean;
    size: string;
    disabled: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2, theme: LyTheme2, rippleStyles: LyRippleService, _ngZone: NgZone, bgAndColor: LyCommon);
    ngOnInit(): void;
    focus(): void;
    private disableStyle;
    ngOnDestroy(): void;
}
