import { OnInit } from '@angular/core';
import { StyleRenderer, LyHostClass } from '@alyle/ui';
export declare class LyDivider implements OnInit {
    private _styleRenderer;
    private _hostClass;
    static readonly и = "LyDivider";
    private _inset;
    /** Add indentation (72px) */
    inset: boolean;
    [0x1]: string;
    constructor(_styleRenderer: StyleRenderer, _hostClass: LyHostClass);
    ngOnInit(): void;
}
