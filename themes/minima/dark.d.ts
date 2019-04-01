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
    disabled: {
        default: string;
        contrast: string;
    };
    action: {
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
    hover: string;
    paper: {
        default: string;
        shadow: string;
    };
    text: {
        default: string;
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
    };
    menu: {};
    drawer: {
        backdrop: string;
    };
    bar: string;
    divider: string;
    colorShadow: string;
    shadow: string;
    field: any;
    badge: {};
    snackBar: {
        root: {
            background: string;
            color: string;
            boxShadow: string;
        };
    };
    tooltip: {
        root: {
            background: string;
            color: string;
        };
    };
    avatar: {};
}
