import { Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from './theme2.service';
export declare class LyShadowService {
    /** Default elevation */
    elevation: number;
    /** demo: setShadow(...[elevation, color]...) */
    setShadow(theme: LyTheme2, elementRef: ElementRef, renderer: Renderer2, val: [number, string], oldClassName?: string): string;
}
