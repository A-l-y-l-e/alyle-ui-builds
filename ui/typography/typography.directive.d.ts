import { ElementRef, Renderer2 } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LyTypographyClasses } from './typography.service';
export declare class LyTypography {
    private style;
    private elementRef;
    private renderer;
    private _lyTyp;
    private _lyTypClass;
    lyTyp: string;
    constructor(style: LyTheme2, elementRef: ElementRef, renderer: Renderer2, classes: LyTypographyClasses);
    private _createTypClass;
}
