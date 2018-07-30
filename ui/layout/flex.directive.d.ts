import { OnChanges, Renderer2, ElementRef } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LyFlexBase } from './flex-base';
/** 'row' | 'rowReverse' | 'column' | 'columnReverse' */
export declare type FxDirection = string | null;
/** 'nowrap' | 'wrap' | 'wrap-reverse' */
export declare type FxWrap = string | null;
/** [FxDirection, FxWrap] */
export declare type FxFlow = string;
export declare type FxJustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | null;
export declare type FxAlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch' | null;
export declare type FxAlignContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch' | null;
export declare type FxAlignItemsAndContent = 'start' | 'center' | 'end' | 'stretch' | null;
/**
 * [FxJustifyContent] | [FxJustifyContent, FxAlignItemsAndContent] | [FxJustifyContent, FxAlignItems, FxAlignContent]
 */
export declare type FxAlign = string;
export declare class LyFlex extends LyFlexBase implements OnChanges {
    private _fxDisplay;
    private _fxDisplayClass;
    /** <FxDirection> + <FxWrap> */
    private _fxFlow;
    private _fxFlowClass;
    private _fxAlign;
    private _fxAlignClass;
    private _fxDirection;
    private _fxDirectionClass;
    private _fxWrap;
    private _fxWrapClass;
    private _rawClass;
    fx: string[];
    fxDisplay: 'flex' | 'inline';
    fxFlow: FxFlow;
    fxAlign: FxAlign;
    fxDirection: FxDirection;
    fxWrap: FxWrap;
    constructor(mediaQueries: any, elementRef: ElementRef, renderer: Renderer2, coreTheme: CoreTheme);
    ngOnChanges(): void;
    private _createDisplayClass;
    private _createFlowClass;
    private _createAlignClass;
    private _createDirectionClass;
    private _createWrapClass;
    /** Check if value is string else emit error */
    private _checkVal;
}
