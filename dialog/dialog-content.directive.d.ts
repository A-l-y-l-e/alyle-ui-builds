import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
export declare const STYLES_DIALOG_CONTENT: {
    display: string;
    overflowY: string;
    flex: string;
    padding: string;
    '-webkit-overflow-scrolling': string;
};
export declare class LyDialogContent implements OnInit {
    private _renderer;
    private _el;
    private _theme;
    constructor(_renderer: Renderer2, _el: ElementRef<HTMLElement>, _theme: LyTheme2);
    ngOnInit(): void;
}
