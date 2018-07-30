import { QueryList, AfterViewInit, OnDestroy, ElementRef, ChangeDetectorRef, OnChanges, SimpleChanges, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CarouselService } from './carousel.service';
import { LyTheme2 } from '@alyle/ui';
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
    private platformId;
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
    classes: {
        root: string;
        slideContainer: string;
        slide: string;
        slideContent: string;
        slideAnim: string;
        slideNoEvent: string;
        carouselIndicators: string;
    };
    private _slideEvent;
    slideEvent: boolean;
    onDragStart(e: any): void;
    onDrag(e: any): void;
    onDragEnd(e: any): void;
    constructor(elementRef: ElementRef, sanitizer: DomSanitizer, cd: ChangeDetectorRef, theme: LyTheme2, renderer: Renderer2, platformId: Object);
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
export declare class LyCarouselItem implements OnInit, OnChanges {
    private carouselService;
    private cd;
    private platformId;
    private theme;
    private renderer;
    className: string;
    /** @deprecated use srcImg */
    src: string;
    srcImg: string;
    private _carousel;
    _nativeElement: HTMLElement;
    constructor(carousel: LyCarousel, carouselService: CarouselService, cd: ChangeDetectorRef, platformId: Object, theme: LyTheme2, renderer: Renderer2, elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
}
