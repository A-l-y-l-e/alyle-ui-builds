import { InjectionToken } from '@angular/core';
export declare const THEME_VARIABLES: InjectionToken<PaletteVariables>;
export declare const IS_CORE_THEME: InjectionToken<true>;
export declare class StyleMap {
    private themeName;
    private styleMap;
    constructor(themeName: string);
}
export interface Default {
    [key: string]: any;
}
export declare class ThemeVariables {
    /** Theme name */
    name: string;
    primary?: PaletteVariables;
    accent?: PaletteVariables;
    /** warn or error color */
    warn?: PaletteVariables;
    scheme?: string;
    colorSchemes?: {
        [key: string]: ColorScheme;
    };
    [key: string]: any;
}
export interface PaletteVariables {
    default?: string;
    contrast?: string;
    [key: string]: string;
}
export interface ColorScheme {
    background?: {
        default?: string;
        paper?: string;
        [key: string]: any;
    };
    text?: {
        default: string;
        primary?: string;
        secondary?: string;
        disabled?: string;
        hint?: string;
        [key: string]: any;
    };
    divider?: string;
    /** Components variables */
    colorShadow?: string;
    bar?: string;
    input?: {
        label?: string;
        underline?: string;
    };
    [key: string]: any;
}
