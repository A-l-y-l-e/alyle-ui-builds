import { ElementRef, Renderer2 } from '@angular/core';
import { LyShadowService } from './shadow.service';
import { LyTheme2 } from './theme2.service';
export declare class LyNewRaised {
    private theme;
    private elementRef;
    private renderer;
    private shadow;
    elevation: number;
    private currentClassName;
    /** Default raised  */
    newRaised: [number, string];
    constructor(theme: LyTheme2, elementRef: ElementRef, renderer: Renderer2, shadow: LyShadowService);
}
