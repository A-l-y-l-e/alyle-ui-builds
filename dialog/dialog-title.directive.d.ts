import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
/** @docs-private */
export declare const STYLES_DIALOG_TITLE: (theme: ThemeVariables) => {
    display: string;
    flex: string;
    margin: string;
    padding: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: number;
    fontFamily: string;
};
export declare class LyDialogTitle implements OnInit {
    private _renderer;
    private _el;
    private _theme;
    constructor(_renderer: Renderer2, _el: ElementRef<HTMLElement>, _theme: LyTheme2);
    ngOnInit(): void;
}
