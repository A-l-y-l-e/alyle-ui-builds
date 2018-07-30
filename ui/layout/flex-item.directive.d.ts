import { Renderer2, ElementRef } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LyFlex } from './flex.directive';
import { LyFlexBase } from './flex-base';
export declare class LyFlexItem extends LyFlexBase {
    private lyFlex;
    private _fxFlex;
    private _fxFlexClass;
    private _fxOrder;
    private _fxOrderClass;
    private _fxAlignSelf;
    private _fxAlignSelfClass;
    private _rawClass;
    fxItem: string[];
    /** Works the same as flex, default: 1 */
    fxFlex: string;
    /** Works the same as order, default: 1 */
    fxOrder: string;
    /** Works the same as order, align-self: center */
    fxAlignSelf: string;
    constructor(elementRef: ElementRef, renderer: Renderer2, coreTheme: CoreTheme, mediaQueries: any, lyFlex: LyFlex);
    private _createFlexClass;
    private _createOrderClass;
    private _createAlignSelfClass;
}
