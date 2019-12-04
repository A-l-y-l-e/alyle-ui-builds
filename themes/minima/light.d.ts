import { ThemeConfig } from '@alyle/ui';
import { Color } from '@alyle/ui/color';
import { MinimaBase } from './base';
import { LyFieldTheme } from '@alyle/ui/field';
import { LyTooltipTheme } from '@alyle/ui/tooltip';
import { LySnackBarTheme } from '@alyle/ui/snack-bar';
export declare class MinimaLight extends MinimaBase implements ThemeConfig {
    name: string;
    primary: {
        default: Color;
        contrast: Color;
    };
    accent: {
        default: Color;
        contrast: Color;
    };
    warn: {
        default: Color;
        contrast: Color;
    };
    action: {
        default: Color;
        contrast: Color;
    };
    background: {
        default: Color;
        primary: {
            default: Color;
            shadow: Color;
        };
        secondary: Color;
        tertiary: Color;
    };
    hover: Color;
    paper: {
        default: Color;
        shadow: Color;
    };
    disabled: {
        default: Color;
        contrast: Color;
    };
    text: {
        default: Color;
        primary: Color;
        secondary: Color;
        disabled: Color;
        hint: Color;
        dark: Color;
        light: Color;
    };
    divider: Color;
    colorShadow: Color;
    shadow: Color;
    drawer: {
        backdrop: Color;
    };
    bar: Color;
    field: LyFieldTheme;
    snackBar: LySnackBarTheme;
    tooltip: LyTooltipTheme;
}
