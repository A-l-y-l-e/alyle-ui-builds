import { ElementRef, Renderer2, NgZone, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { LyTheme2, LyCommon } from '@alyle/ui';
import { LyRippleService } from '@alyle/ui/ripple';
declare type LyButtonSize = 'small' | 'medium' | 'large';
export declare class LyButton implements OnInit, AfterViewInit, OnDestroy {
    private _elementRef;
    private _renderer;
    private _theme;
    private _ngZone;
    _rippleService: LyRippleService;
    /**
     * Style
     * @ignore
     */
    classes: Record<"root" | "content", string>;
    private _rippleSensitive;
    private _ripple;
    private _size;
    private _sizeClass;
    private _disableRipple;
    /** @ignore */
    _rippleContainer: ElementRef;
    /** @ignore */
    rippleSensitive: boolean;
    /** Whether ripples are disabled. */
    disableRipple: boolean;
    /** Button size */
    size: LyButtonSize;
    constructor(_elementRef: ElementRef, _renderer: Renderer2, _theme: LyTheme2, _ngZone: NgZone, _rippleService: LyRippleService, bgAndColor: LyCommon);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    focus(): void;
    ngOnDestroy(): void;
}
export {};
