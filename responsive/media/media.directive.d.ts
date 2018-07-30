import { OnInit, Renderer2, ElementRef } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
export declare class MediaDirective implements OnInit {
    private _renderer;
    private _elementRef;
    private coreTheme;
    private mediaQueries;
    private _show;
    private _showClass;
    private _hide;
    private _hideClass;
    classes: {
        hide: string;
    };
    lyShow: string;
    lyHide: string;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, coreTheme: CoreTheme, mediaQueries: any);
    ngOnInit(): void;
}
