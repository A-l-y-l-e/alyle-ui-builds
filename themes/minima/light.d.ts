import { ThemeConfig } from '@alyle/ui';
import { MinimaBase } from './base';
import { LyFieldTheme } from '@alyle/ui/field';
import { LyTooltipTheme } from '@alyle/ui/tooltip';
import { LySnackBarTheme } from '@alyle/ui/snack-bar';
export declare class MinimaLight extends MinimaBase implements ThemeConfig {
    name: string;
    primary: {
        default: import("@alyle/ui/color/color").ColorClass;
        contrast: import("@alyle/ui/color/color").ColorClass;
    };
    accent: {
        default: import("@alyle/ui/color/color").ColorClass;
        contrast: import("@alyle/ui/color/color").ColorClass;
    };
    warn: {
        default: import("@alyle/ui/color/color").ColorClass;
        contrast: import("@alyle/ui/color/color").ColorClass;
    };
    action: {
        default: import("@alyle/ui/color/color").ColorClass;
        contrast: import("@alyle/ui/color/color").ColorClass;
    };
    background: {
        default: import("@alyle/ui/color/color").ColorClass;
        primary: {
            default: import("@alyle/ui/color/color").ColorClass;
            shadow: import("@alyle/ui/color/color").ColorClass;
        };
        secondary: import("@alyle/ui/color/color").ColorClass;
        tertiary: import("@alyle/ui/color/color").ColorClass;
    };
    hover: import("@alyle/ui/color/color").ColorClass;
    paper: {
        default: import("@alyle/ui/color/color").ColorClass;
        shadow: import("@alyle/ui/color/color").ColorClass;
    };
    disabled: {
        default: import("@alyle/ui/color/color").ColorClass;
        contrast: import("@alyle/ui/color/color").ColorClass;
    };
    text: {
        default: import("@alyle/ui/color/color").ColorClass;
        primary: import("@alyle/ui/color/color").ColorClass;
        secondary: import("@alyle/ui/color/color").ColorClass;
        disabled: import("@alyle/ui/color/color").ColorClass;
        hint: import("@alyle/ui/color/color").ColorClass;
        dark: import("@alyle/ui/color/color").ColorClass;
        light: import("@alyle/ui/color/color").ColorClass;
    };
    divider: import("@alyle/ui/color/color").ColorClass;
    colorShadow: import("@alyle/ui/color/color").ColorClass;
    shadow: import("@alyle/ui/color/color").ColorClass;
    drawer: {
        backdrop: import("@alyle/ui/color/color").ColorClass;
    };
    bar: import("@alyle/ui/color/color").ColorClass;
    field: LyFieldTheme;
    snackBar: LySnackBarTheme;
    tooltip: LyTooltipTheme;
}
