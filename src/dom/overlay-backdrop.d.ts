import { ElementRef } from '@angular/core';
import { LyTheme2 } from '../theme/theme2.service';
import { LyOverlayConfig } from './overlay-config';
export declare const STYLES_BACKDROP_ROOT: {
    width: string;
    height: string;
    pointerEvents: string;
    userSelect: string;
    position: string;
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export declare class LyOverlayBackdrop {
    private _el;
    private _config;
    onclick(): void;
    constructor(_el: ElementRef<HTMLElement>, _theme: LyTheme2, _config: LyOverlayConfig);
}
