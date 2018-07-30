import { InjectionToken } from '@angular/core';
export declare const THEME_CONFIG: InjectionToken<ThemeConfig | ThemeConfig[]>;
export declare const LY_THEME_CONFIG: InjectionToken<LyThemeConfig>;
export declare const THEME_CONFIG_EXTRA: InjectionToken<ThemeConfig | ThemeConfig[]>;
export declare const LY_THEME_NAME: InjectionToken<string>;
export interface ThemeConfig {
    name: string;
    primary: DefaultVal & PaletteColor;
    accent: DefaultVal & PaletteColor;
    warn: DefaultVal & PaletteColor;
    [key: string]: any;
}
export declare class LyThemeConfig {
    themes: any[];
}
export interface DefaultVal {
    default: string;
}
export interface PaletteColor {
    contrast: string;
}
