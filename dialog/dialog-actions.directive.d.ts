import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
export declare const STYLES_DIALOG_ACTIONS: {
    display: string;
    flex: string;
    padding: string;
    flexWrap: string;
    minHeight: string;
    alignItems: string;
};
export declare class LyDialogActions implements OnInit {
    private _renderer;
    private _el;
    private _theme;
    constructor(_renderer: Renderer2, _el: ElementRef<HTMLElement>, _theme: LyTheme2);
    ngOnInit(): void;
}
