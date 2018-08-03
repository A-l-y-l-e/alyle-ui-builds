import { Renderer2, ElementRef, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LyCardClasses } from './card.service';
export declare class LyCard implements OnInit {
    private styler;
    private elementRef;
    private renderer;
    private _elevation;
    private _elevationClass;
    elevation: string | number;
    constructor(styler: LyTheme2, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    private _createElevationClass;
}
export declare class LyCardContent implements OnInit {
    private elementRef;
    private renderer;
    private classes;
    constructor(elementRef: ElementRef, renderer: Renderer2, classes: LyCardClasses);
    ngOnInit(): void;
}
export declare class LyCardActions implements OnInit {
    private elementRef;
    private renderer;
    private classes;
    constructor(elementRef: ElementRef, renderer: Renderer2, classes: LyCardClasses);
    ngOnInit(): void;
}
