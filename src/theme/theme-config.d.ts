import { InjectionToken } from '@angular/core';
export declare const THEME_CONFIG: InjectionToken<ThemeConfig | ThemeConfig[]>;
export declare const LY_THEME_CONFIG: InjectionToken<LyThemeConfig>;
export declare const LY_THEME_NAME: InjectionToken<string>;
export interface ThemeConfig {
    name: string;
    primary: DefaultVal & PaletteColor;
    accent: DefaultVal & PaletteColor;
    warn: DefaultVal & PaletteColor;
    background: {
        /** secondary */
        default: string;
        primary: string;
        secondary: string;
        tertiary: string;
        base: string;
    };
    text: {
        default: string;
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
    };
    /** color for divider */
    divider: string;
    shadow: string;
    /** @deprecated use shadow instead */
    colorShadow?: string;
    button: {
        disabled: string;
    };
    radio: {
        /** color for radio:outerCircle */
        outerCircle?: string;
        /** @deprecated use outerCircle instead */
        radioOuterCircle?: string;
    };
    menu: {
        bg: string;
    };
    drawer: {
        /** color for drawer:backdrop */
        backdrop: string;
    };
    input: {
        label: string;
        underline: string;
        /** default color */
        withColor: string;
    };
    iconButton: {
        size: string;
    };
    icon: {
        fontSize: string;
    };
}
export declare type PartialThemeConfig = Partial<ThemeConfig>;
export declare class LyThemeConfig {
    themes: any[];
    /** global variables */
    variables?: any;
}
export interface DefaultVal {
    default: string;
}
export interface PaletteColor {
    contrast: string;
}
