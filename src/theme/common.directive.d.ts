import { OnChanges, ElementRef } from '@angular/core';
import { LyTheme2 } from './theme2.service';
export declare class LyCommon implements OnChanges {
    private theme;
    private elementRef;
    private _raised;
    private _outlined;
    private _disabled;
    private _className;
    private _autoContrast;
    private _isContrast;
    bg: string;
    color: string;
    raised: boolean;
    disabled: boolean;
    outlined: boolean;
    elevation: number;
    shadowColor: string;
    constructor(theme: LyTheme2, elementRef: ElementRef);
    setAutoContrast(): void;
    ngOnChanges(): void;
    private _getHostElement;
}
