import { ElementRef, Renderer2 } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
export declare class LyExpansionIcon {
    private _theme;
    private _renderer;
    private _el;
    readonly classes: Record<"root" | "line" | "up", string>;
    private _color;
    private _colorClass;
    private _up;
    color: string;
    up: boolean | '';
    constructor(_theme: LyTheme2, _renderer: Renderer2, _el: ElementRef);
    toggle(): void;
}
