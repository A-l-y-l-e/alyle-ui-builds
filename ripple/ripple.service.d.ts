import { LyTheme2, ThemeVariables } from '@alyle/ui';
export declare const styles: (theme: ThemeVariables) => {
    rippleContainer: {
        position: string;
        width: string;
        height: string;
        background: string;
        opacity: string;
        borderRadius: string;
        transform: string;
        transition: string;
        pointerEvents: string;
    };
    container: {
        overflow: string;
        pointerEvents: string;
        borderRadius: string;
        position: string;
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
};
export declare class LyRippleService {
    private theme;
    classes: Record<"rippleContainer" | "container", string>;
    constructor(theme: LyTheme2);
}
