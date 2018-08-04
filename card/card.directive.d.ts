import { Renderer2, ElementRef, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LyCardClasses } from './card.service';
export declare class LyCard implements OnInit {
    private classes;
    private styler;
    private el;
    private renderer;
    private _elevation;
    private _elevationClass;
    elevation: string | number;
    constructor(classes: LyCardClasses, styler: LyTheme2, el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    private _createElevationClass;
}
export declare class LyCardContent implements OnInit {
    private el;
    private renderer;
    private classes;
    constructor(el: ElementRef, renderer: Renderer2, classes: LyCardClasses);
    ngOnInit(): void;
}
export declare class LyCardActions implements OnInit {
    private el;
    private renderer;
    private classes;
    disableActionSpacing: boolean;
    constructor(el: ElementRef, renderer: Renderer2, classes: LyCardClasses);
    ngOnInit(): void;
}
export declare class LyCardMedia implements OnInit {
    private el;
    private renderer;
    private theme;
    private _bgImg;
    private _bgImgClass;
    private _ratio;
    private _ratioClass;
    bgImg: string;
    /** Aspect ratio */
    ratio: string;
    constructor(el: ElementRef, renderer: Renderer2, theme: LyTheme2);
    ngOnInit(): void;
    private _createBgImgClass;
    private _createAspectRatioClass;
}
