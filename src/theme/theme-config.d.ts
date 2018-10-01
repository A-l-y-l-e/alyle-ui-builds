import { InjectionToken } from '@angular/core';
import { LyStyleUtils } from '../style-utils';
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
        primary: DefaultVal & PaletteColor;
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
    typography: {
        htmlFontSize: number;
        fontSize: number;
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
    zIndex: {
        toolbar: number;
        drawer: number;
        overlay: number;
        [key: string]: number;
    };
    animations: {
        curves: {
            standard: string;
            deceleration: string;
            acceleration: string;
            sharp: string;
        };
        durations: {
            complex: number;
            entering: number;
            exiting: number;
        };
    };
    ripple: IRippleVariables;
}
export declare type PartialThemeConfig = Partial<ThemeConfig>;
export declare type ThemeVariables = LyStyleUtils & ThemeConfig;
export declare class LyThemeConfig {
    themes: any[];
    /** global variables */
    variables?: any;
}
export interface DefaultVal {
    default: string;
}
export interface PaletteColor {
    contrast?: string;
    /** shadow color */
    shadow?: string;
}
export interface IRippleVariables {
    transition: {
        opacity: string;
        transform: string;
    };
    duration: number;
}
