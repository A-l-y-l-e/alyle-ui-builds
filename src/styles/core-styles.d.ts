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
};
export declare class LyCoreStyles {
    private theme;
    classes: Record<"fill" | "visuallyHidden", string>;
    constructor(theme: LyTheme2);
}
