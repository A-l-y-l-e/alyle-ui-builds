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
    private _el;
    private _sanitizer;
    private cd;
    private theme;
    private renderer;
    /** @docs-private */
    readonly classes: Record<"root" | "actions" | "slideContainer" | "slide" | "slideContent" | "slideAnim" | "slideNoEvent" | "carouselIndicators", string>;
    _selectedIndex: any;
    nullImg: string;
    private _intervalFn;
    /** @docs-private */
    _positionLeft: string | number;
    slideContainer: ElementRef;
    lyItems: QueryList<LyCarouselItem>;
    mode: CarouselMode;
    interval: number;
    selectedIndex: number;
    selectedElement: HTMLElement;
    private _touch;
    touch: boolean;
    constructor(_el: ElementRef, _sanitizer: DomSanitizer, cd: ChangeDetectorRef, theme: LyTheme2, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** @docs-private */
    _onDragStart(): void;
    /** @docs-private */
    _onDrag(e: any): void;
    /** @docs-private */
    _onDragEnd(e: any): void;
    /** @docs-private */
    _onDragCancel(): void;
    select(val: number, notResetInterval?: boolean): void;
    prev(): void;
    next(notResetInterval?: boolean): void;
    stop(): void;
    private _resetInterval;
    private _onPan;
    private _sanitizerStyle;
    /** @docs-private */
    private _markForCheck;
}
export declare class LyCarouselItem {
    private theme;
    private _className;
    srcImg: string;
    /** @docs-private */
    _nativeElement: HTMLElement;
    constructor(theme: LyTheme2, _el: ElementRef);
}
