import { Renderer2, ElementRef, AfterContentInit } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LyFlexBase } from './flex-base';
/**
 * <grid>
 *   ...
 * </grid>
 */
export declare class LyGrid extends LyFlexBase {
    private _gutter;
    private _gutterClass;
    private _negativeMarginClass;
    rootClass: string;
    gutter: number;
    readonly gutterClass: string;
    constructor(mediaQueries: any, elementRef: ElementRef, renderer: Renderer2, coreTheme: CoreTheme);
    /** create padding for childs */
    private _createGutterClass;
    private _createNegativeMarginClass;
}
/**
 * examples:
 *
 * <grid>
 *   <div col="9" colMedia="auto Small"></div>
 *   <div col="auto"></div>
 * </grid>
 */
export declare class LyGridCol extends LyFlexBase implements AfterContentInit {
    gridContainer: LyGrid;
    private _col;
    private _colClass;
    colVal: string;
    private _gutterClass;
    private _rawClass;
    col: string | string[];
    constructor(mediaQueries: any, gridContainer: LyGrid, elementRef: ElementRef, renderer: Renderer2, coreTheme: CoreTheme);
    ngAfterContentInit(): void;
    private _createColClass;
}
