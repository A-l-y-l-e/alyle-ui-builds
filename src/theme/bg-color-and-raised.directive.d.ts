import { OnChanges, SimpleChanges, Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from './theme2.service';
import { LyShadowService } from './shadow.service';
export declare class LyBgColorAndRaised implements OnChanges {
    private theme;
    private renderer;
    private elementRef;
    private shadow;
    private contrast;
    private _raisedState;
    private _currentClassName;
    private _bg;
    private _color;
    bg: string;
    color: string;
    raised: boolean;
    elevation: number;
    constructor(theme: LyTheme2, renderer: Renderer2, elementRef: ElementRef, shadow: LyShadowService, contrast: boolean);
    setAutoContrast(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private contrastStyle;
    private bgColorStyle;
}
