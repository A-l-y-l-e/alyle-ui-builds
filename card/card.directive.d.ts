import { Renderer2, ElementRef, OnInit } from '@angular/core';
import { LyTheme2, LyCommon } from '@alyle/ui';
import { LyCardService } from './card.service';
export declare class LyCard implements OnInit {
    private cardService;
    private el;
    private renderer;
    private common;
    constructor(cardService: LyCardService, el: ElementRef, renderer: Renderer2, common: LyCommon);
    ngOnInit(): void;
}
export declare class LyCardContent implements OnInit {
    private el;
    private renderer;
    private cardService;
    constructor(el: ElementRef, renderer: Renderer2, cardService: LyCardService);
    ngOnInit(): void;
}
export declare class LyCardActions implements OnInit {
    private el;
    private renderer;
    private cardService;
    disableActionSpacing: boolean;
    constructor(el: ElementRef, renderer: Renderer2, cardService: LyCardService);
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
