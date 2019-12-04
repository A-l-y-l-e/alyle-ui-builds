import { QueryList, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, ThemeRef, StyleCollection, LyClasses, StyleTemplate } from '@alyle/ui';
export interface LyCarouselTheme {
    /** Styles for Carousel Component */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
}
export interface LyCarouselVariables {
    carousel?: LyCarouselTheme;
}
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyCarouselVariables, ref: ThemeRef) => {
    $priority: number;
    $global: (className: string) => string;
    root: () => (className: string) => string;
    actions: (className: string) => string;
    slideContainer: (className: string) => string;
    slide: (className: string) => string;
    slideContent: (className: string) => string;
    slideAnim: (className: string) => string;
    slideNoEvent: (className: string) => string;
    carouselIndicators: (className: string) => string;
    barContainer: (className: string) => string;
    bar: (className: string) => string;
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
    readonly classes: Pick<{
        $priority: string;
        $global: string;
        root: string;
        actions: string;
        slideContainer: string;
        slide: string;
        slideContent: string;
        slideAnim: string;
        slideNoEvent: string;
        carouselIndicators: string;
        barContainer: string;
        bar: string;
    }, "root" | "actions" | "slideContainer" | "slide" | "slideContent" | "slideAnim" | "slideNoEvent" | "carouselIndicators" | "barContainer" | "bar">;
    private _intervalFn;
    slideContainer: ElementRef;
    _slide: ElementRef;
    _progressBar: ElementRef<HTMLDivElement>;
    lyItems: QueryList<LyCarouselItem>;
    /** @docs-private */
    mode: CarouselMode;
    selectedIndex: number;
    _selectedElement: HTMLElement;
    private _touch;
    private _autoplay;
    private _hasProgressBar;
    private _interval;
    private _slideClass;
    /** Emits whenever the component is destroyed. */
    private readonly _destroy;
    /** @internal */
    readonly _isIntervalFn: boolean;
    /**
     * It will pause the slide change when the mouse cursor passes
     * through the carousel.
     */
    pauseOnHover: boolean;
    private _pauseOnHover;
    touch: boolean;
    autoplay: boolean;
    hasProgressBar: boolean;
    interval: number;
    constructor(_el: ElementRef, _cd: ChangeDetectorRef, _theme: LyTheme2, _renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    _onMouseEnter(): void;
    _onMouseLeave(): void;
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
    private _restartProgressBarAnimation;
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
