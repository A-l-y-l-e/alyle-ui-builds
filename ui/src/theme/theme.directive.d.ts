import { Renderer2, ElementRef, OnInit } from '@angular/core';
import { LyTheme2 } from './theme2.service';
export declare class LyThemeContainer implements OnInit {
    theme: LyTheme2;
    private elementRef;
    private renderer;
    private _lyTheme;
    /**
     * set theme
     */
    lyTheme: string;
    shared: true;
    constructor(theme: LyTheme2, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    private _setContainerStyle;
}
