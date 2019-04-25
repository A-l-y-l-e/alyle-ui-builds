import { LyTheme2 } from '../theme/theme2.service';
export declare const LY_COMMON_STYLES: {
    fill: {
        position: string;
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    visuallyHidden: {
        border: number;
        clip: string;
        height: string;
        margin: string;
        overflow: string;
        padding: number;
        position: string;
        width: string;
        outline: number;
        '-webkit-appearance': string;
        '-moz-appearance': string;
    };
    button: {
        '-webkit-tap-highlight-color': string;
        backgroundColor: string;
        border: number;
        '-moz-appearance': string;
        '-webkit-appearance': string;
        margin: number;
        outline: string;
        boxSizing: string;
        position: string;
        textDecorationLine: string;
        '-webkit-text-decoration-line': string;
        '&::-moz-focus-inner': {
            border: number;
        };
    };
};
export declare class LyCoreStyles {
    private theme;
    classes: Record<"button" | "fill" | "visuallyHidden", string>;
    constructor(theme: LyTheme2);
}
