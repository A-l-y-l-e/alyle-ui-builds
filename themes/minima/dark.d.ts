import { ThemeConfig } from '@alyle/ui';
import { MinimaBase } from './base';
export declare class MinimaDark extends MinimaBase implements ThemeConfig {
    name: string;
    primary: {
        default: string;
        contrast: string;
    };
    accent: {
        default: string;
        contrast: string;
    };
    warn: {
        default: string;
        contrast: string;
    };
    background: {
        default: string;
        primary: {
            default: string;
            shadow: string;
        };
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
    /** Components variables */
    button: {
        disabled: string;
    };
    radio: {
        radioOuterCircle: string;
    };
    menu: {
        bg: string;
    };
    drawer: {
        backdrop: string;
    };
    bar: string;
    divider: string;
    colorShadow: string;
    shadow: string;
    input: {
        label: string;
        underline: string;
        withColor: string;
    };
}
