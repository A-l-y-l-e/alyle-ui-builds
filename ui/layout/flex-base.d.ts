import { ElementRef, Renderer2 } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
export declare class LyFlexBase {
    _elementRef: ElementRef;
    _renderer: Renderer2;
    _coreTheme: CoreTheme;
    _mediaQueries: {
        [key: string]: string;
    };
    constructor(_elementRef: ElementRef, _renderer: Renderer2, _coreTheme: CoreTheme, _mediaQueries: {
        [key: string]: string;
    });
    _updateClass(newClass: string, oldClass: string): void;
}
