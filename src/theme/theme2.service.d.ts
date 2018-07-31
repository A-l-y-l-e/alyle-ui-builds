import { Renderer2 } from '@angular/core';
import { ThemeConfig } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { DataStyle, Style } from '../theme.service';
import { InvertMediaQuery } from '../media/invert-media-query';
export declare class LyTheme2 {
    core: CoreTheme;
    config: ThemeConfig;
    _styleMap: Map<string, DataStyle>;
    constructor(core: CoreTheme, themeName: any);
    setUpTheme(themeName: string): void;
    setUpStyle<T>(key: string, styles: Style<T>, media?: string, invertMediaQuery?: InvertMediaQuery): string;
    setUpStyleSecondary<T>(key: string, styles: Style<T>, media?: string, invertMediaQuery?: InvertMediaQuery): string;
    colorOf(value: string): string;
    updateClassName(element: any, renderer: Renderer2, newClassname: string, oldClassname?: string): void;
    updateClass(element: any, renderer: Renderer2, newClass: string, oldClass?: string): string;
    setTheme(nam: string): void;
}
export declare function toHyphenCase(str: string): string;
