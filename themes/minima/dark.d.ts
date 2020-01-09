import { MinimaBase } from './base';
import { Color } from '@alyle/ui/color';
import { LyFieldTheme } from '@alyle/ui/field';
import { LyTooltipTheme } from '@alyle/ui/tooltip';
import { LySnackBarTheme } from '@alyle/ui/snack-bar';
export declare class MinimaDark extends MinimaBase {
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
    disabled: {
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
    text: {
        default: Color;
        primary: Color;
        secondary: Color;
        disabled: Color;
        hint: Color;
        dark: Color;
        light: Color;
    };
    drawer: {
        backdrop: Color;
    };
    bar: Color;
    divider: Color;
    colorShadow: Color;
    shadow: Color;
    field: LyFieldTheme;
    snackBar: LySnackBarTheme;
    tooltip: LyTooltipTheme;
}
