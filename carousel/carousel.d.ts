import { QueryList, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
export declare enum CarouselMode {
    /** full */
    default = 0,
    inline = 1
}
export declare class LyCarousel implements OnInit, AfterViewInit, OnDestroy {
    private elementRef;
    private sanitizer;
    private cd;
    private theme;
    private renderer;
    _selectedIndex: any;
    nullImg: string;
    private _intervalFn;
    slideContainer: ElementRef;
    lyItems: QueryList<LyCarouselItem>;
    mode: CarouselMode;
    interval: number;
    _positionLeft: string | number;
    selectedIndex: number;
    selectedElement: HTMLElement;
    classes: Record<"slideContainer" | "root" | "slide" | "slideContent" | "slideAnim" | "slideNoEvent" | "carouselIndicators", string>;
    private _slideEvent;
    slideEvent: boolean;
    onDragStart(e: any): void;
    onDrag(e: any): void;
    onDragEnd(e: any): void;
    constructor(elementRef: ElementRef, sanitizer: DomSanitizer, cd: ChangeDetectorRef, theme: LyTheme2, renderer: Renderer2);
    ngOnInit(): void;
    private _onPan;
    private sanitizerStyle;
    ngOnDestroy(): void;
    _markForCheck(): void;
    ngAfterViewInit(): void;
    select(val: number, notResetInterval?: boolean): void;
    prev(): void;
    next(notResetInterval?: boolean): void;
    private _resetInterval;
    stop(): void;
}
export declare class LyCarouselItem {
    private theme;
    private renderer;
    private _className;
    srcImg: string;
    _nativeElement: HTMLElement;
    constructor(theme: LyTheme2, renderer: Renderer2, elementRef: ElementRef);
}
