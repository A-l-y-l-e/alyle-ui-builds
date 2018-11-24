import { ElementRef, Renderer2, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
export declare class LyTypography implements OnInit {
    private style;
    private elementRef;
    private renderer;
    /** @docs-private */
    readonly classes: Record<"root", string>;
    private _lyTyp;
    private _lyTypClass;
    private _gutter;
    private _gutterClass;
    private _gutterTop;
    private _gutterTopClass;
    private _gutterBottom;
    private _gutterBottomClass;
    lyTyp: string;
    gutter: boolean;
    gutterTop: boolean;
    gutterBottom: boolean;
    constructor(style: LyTheme2, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    private _createTypClass;
    private _createGutterClass;
}
