import { OnInit, OnChanges, Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
export declare class MediaDirective implements OnInit, OnChanges {
    private _renderer;
    private _elementRef;
    private theme;
    private _show;
    private _showClass;
    private _hide;
    private _hideClass;
    /**
     * Styles
     * @ignore
     */
    classes: Record<"hide", string>;
    /**
     * Shows the item when the value is resolved as true
     */
    lyShow: string;
    /**
     * Hides the item when the value is resolved as true
     */
    lyHide: string;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, theme: LyTheme2);
    ngOnInit(): void;
    ngOnChanges(): void;
}
