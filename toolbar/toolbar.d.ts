import { Renderer2, ElementRef, OnInit } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
declare type position = 'static' | 'absolute' | 'fixed' | 'sticky' | 'relative';
export declare class LyToolbar implements OnInit {
    private _el;
    private theme;
    private _common;
    classes: Record<"root", string>;
    private _position;
    private _positionClass;
    position: position;
    constructor(renderer: Renderer2, _el: ElementRef, theme: LyTheme2, _common: LyCommon);
    ngOnInit(): void;
}
export {};
