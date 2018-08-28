import { ElementRef, Renderer2, NgZone, OnDestroy, OnInit } from '@angular/core';
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
export declare class LyButton implements OnInit, OnDestroy {
    private elementRef;
    private renderer;
    private theme;
    /**
     * Style
     * @ignore
     */
    classes: Record<"root" | "content", string>;
    private _rippleSensitive;
    private _rippleContainer;
    private _size;
    private _sizeClass;
    /** @ignore */
    rippleSensitive: boolean;
    size: Record<keyof Size, string>;
    constructor(elementRef: ElementRef, renderer: Renderer2, theme: LyTheme2, rippleService: LyRippleService, _ngZone: NgZone, bgAndColor: LyCommon);
    ngOnInit(): void;
    focus(): void;
    ngOnDestroy(): void;
}
export {};
