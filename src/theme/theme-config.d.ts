import { InjectionToken } from '@angular/core';
import { LyStyleUtils, Dir } from '../style-utils';
import { StyleContainer } from './theme2.service';
import { RippleVariables } from './variables/ripple';
import { TypographyVariables } from './variables/typography';
import { CheckboxVariables } from './variables/checkbox';
export declare const LY_THEME_GLOBAL_VARIABLES: InjectionToken<Partial<ThemeVariables>>;
export declare const LY_THEME: InjectionToken<ThemeConfig | ThemeConfig[]>;
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
    typography: TypographyVariables;
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
        root?: StyleContainer;
    };
    drawer: {
        /** color for drawer:backdrop */
        backdrop: string;
    };
    field: {
        borderColor: string;
        labelColor: string;
        appearance: {
            [appearanceName: string]: {
                container?: StyleContainer;
                fieldset?: StyleContainer;
                fieldsetHover?: StyleContainer;
                fieldsetFocused?: StyleContainer;
                containerFocused?: StyleContainer;
                label?: StyleContainer;
                placeholder?: StyleContainer;
                input?: StyleContainer;
                floatingLabel?: StyleContainer;
                prefix?: StyleContainer;
                infix?: StyleContainer;
                suffix?: StyleContainer;
                hint?: StyleContainer;
            };
        };
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
    badge: {
        root?: StyleContainer;
        position?: {
            [positionName: string]: StyleContainer;
        };
    };
    checkbox: CheckboxVariables;
}
export declare type ThemeVariables = LyStyleUtils & ThemeConfig;
export declare type PartialThemeVariables = Partial<ThemeVariables>;
export interface DefaultVal {
    default: string;
}
export interface PaletteColor {
    contrast?: string;
    /** shadow color */
    shadow?: string;
}
