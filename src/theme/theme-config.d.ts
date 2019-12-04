import { InjectionToken } from '@angular/core';
import { LyStyleUtils, Dir } from '../style-utils';
import { RippleVariables } from './variables/ripple';
import { Color } from '@alyle/ui/color';
export declare const LY_THEME_GLOBAL_VARIABLES: InjectionToken<RecursivePartialObject<ThemeVariables>>;
export declare const LY_THEME: InjectionToken<ThemeConfig | ThemeConfig[]>;
export declare const LY_THEME_NAME: InjectionToken<string>;
export interface ThemeConfig {
    name: string;
    primary: DefaultVal & PaletteColor;
    accent: DefaultVal & PaletteColor;
    warn: DefaultVal & PaletteColor;
    disabled: {
        default: Color;
        contrast: Color;
    };
    paper: DefaultVal & PaletteColor;
    background: {
        /** secondary */
        default: Color;
        primary: DefaultVal & PaletteColor;
        secondary: Color;
        tertiary: Color;
    };
    hover: Color;
    text: {
        default: Color;
        primary: Color;
        secondary: Color;
        disabled: Color;
        hint: Color;
        /** When a contrast is needed for a dark background */
        light: Color;
        /** When a contrast is needed for a light background */
        dark: Color;
    };
    /** color for divider */
    divider: Color;
    shadow: Color;
    drawer: {
        /** color for drawer:backdrop */
        backdrop: Color;
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
    direction?: Dir;
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
    ripple: RippleVariables;
}
export declare type ThemeVariables = LyStyleUtils & ThemeConfig;
export declare type PartialThemeVariables = RecursivePartial<ThemeVariables>;
export interface DefaultVal {
    default: Color;
}
export interface PaletteColor {
    contrast?: Color;
    /** shadow color */
    shadow?: Color;
}
declare type primitive = string | number | boolean | undefined | null;
declare type RecursivePartialObject<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
export declare type RecursivePartial<T> = T extends primitive ? T : RecursivePartialObject<T>;
export {};
