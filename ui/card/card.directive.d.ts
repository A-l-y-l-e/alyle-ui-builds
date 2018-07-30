import { Renderer2, ElementRef, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
export declare class LyCard implements OnInit {
    private styler;
    private elementRef;
    private renderer;
    elevation: any;
    constructor(styler: LyTheme2, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
