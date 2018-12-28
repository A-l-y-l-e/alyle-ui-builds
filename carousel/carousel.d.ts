import { QueryList, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
export declare const STYLES: (theme: ThemeVariables) => {
    root: {
        display: string;
        '-webkit-user-select': string;
        '-moz-user-select': string;
        '-ms-user-select': string;
        position: string;
        '& {actions}.right': {
            after: number;
            transform: string;
        };
        '& {actions}.left': {
            before: number;
            transform: string;
        };
        '& svg': {
            display: string;
            fill: string;
        };
    };
    actions: {
        position: string;
        top: number;
        bottom: number;
        margin: string;
        height: string;
        width: string;
        fontSize: string;
        cursor: string;
        background: string;
        color: string;
        willChange: string;
    };
    slideContainer: {
        overflow: string;
        display: string;
        width: string;
        height: string;
        position: string;
        touchAction: string;
    };
    slide: {
        display: string;
        width: string;
        height: string;
        willChange: string;
        '& > ly-carousel-item': {
            width: string;
            flexShrink: number;
            position: string;
            backgroundSize: string;
            backgroundPosition: string;
            backgroundRepeat: string;
        };
    };
    slideContent: {
        display: string;
    };
    slideAnim: {
        '& > div': {
            transition: string;
        };
    };
    slideNoEvent: {
        '&>div': {
            touchAction: string;
        };
    };
    carouselIndicators: {
        position: string;
        bottom: number;
        left: number;
        right: number;
        margin: number;
        boxSizing: string;
        display: string;
        alignItems: string;
        justifyContent: string;
        height: string;
        '&>div': {
            display: string;
            borderRadius: string;
            cursor: string;
            position: string;
            padding: string;
            outline: string;
        };
        '&>div > span': {
            transition: string;
            width: string;
            height: string;
            transform: string;
            borderRadius: string;
            willChange: string;
            display: string;
            opacity: number;
        };
        '&>div>span.active': {
            transform: string;
            opacity: number;
        };
    };
};
/** @docs-private */
export declare enum CarouselMode {
    /** full */
    default = 0,
    inline = 1
}
export declare class LyCarousel implements OnInit, AfterViewInit, OnDestroy {
    private _el;
    private _cd;
    private _theme;
    private _renderer;
    /** @docs-private */
    readonly classes: Record<"root" | "actions" | "slideContainer" | "slide" | "slideContent" | "slideAnim" | "slideNoEvent" | "carouselIndicators", string>;
    private _intervalFn;
    slideContainer: ElementRef;
    _slide: ElementRef;
    lyItems: QueryList<LyCarouselItem>;
    /** @docs-private */
    mode: CarouselMode;
    interval: number;
    selectedIndex: number;
    _selectedElement: HTMLElement;
    private _touch;
    private _slideClass;
    touch: boolean;
    constructor(_el: ElementRef, _cd: ChangeDetectorRef, _theme: LyTheme2, _renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** @docs-private */
    _onDragStart(): void;
    _onDrag(e: any): void;
    _onDragEnd(e: any): void;
    _onDragCancel(): void;
    _select(val: number, notResetInterval?: boolean): void;
    prev(): void;
    next(notResetInterval?: boolean): void;
    stop(): void;
    private _resetInterval;
    private _onPan;
    private _markForCheck;
}
export declare class LyCarouselItem {
    private _theme;
    private _className;
    srcImg: string;
    _nativeElement: HTMLElement;
    constructor(_theme: LyTheme2, _el: ElementRef);
}
