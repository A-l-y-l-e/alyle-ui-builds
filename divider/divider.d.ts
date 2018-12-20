import { ElementRef, OnInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
export declare class LyDivider implements OnInit {
    private _el;
    private _theme;
    private _inset;
    private _insetClass;
    /** Add indentation (72px) */
    inset: boolean;
    constructor(_el: ElementRef, _theme: LyTheme2);
    ngOnInit(): void;
}
