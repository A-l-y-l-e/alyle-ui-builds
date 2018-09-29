import { ElementRef, Renderer2, NgZone, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { LyTheme2, LyCommon } from '@alyle/ui';
import { LyRippleService } from '@alyle/ui/ripple';
interface Size {
    small: any;
    medium: any;
    large: any;
}
declare const Size: {
    small: (theme: any) => {
        padding: string;
        fontSize: any;
        minHeight: string;
        minWidth: string;
    };
    medium: {
        padding: string;
        minHeight: string;
        minWidth: string;
    };
    large: (theme: any) => {
        padding: string;
        fontSize: any;
        minHeight: string;
        minWidth: string;
    };
};
export declare class LyButton implements OnInit, AfterViewInit, OnDestroy {
    private _elementRef;
    private _renderer;
    private _theme;
    private _rippleService;
    private _ngZone;
    /**
     * Style
     * @ignore
     */
    classes: Record<"root" | "content" | "rippleContainer", string>;
    private _rippleSensitive;
    private _ripple;
    private _size;
    private _sizeClass;
    _rippleContainer: ElementRef;
    /** @ignore */
    rippleSensitive: boolean;
    size: Record<keyof Size, string>;
    constructor(_elementRef: ElementRef, _renderer: Renderer2, _theme: LyTheme2, _rippleService: LyRippleService, _ngZone: NgZone, bgAndColor: LyCommon);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    focus(): void;
    ngOnDestroy(): void;
}
export {};
