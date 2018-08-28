import { LyTheme2 } from '@alyle/ui';
export declare const styles: {
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
};
export declare class LyRippleService {
    private theme;
    classes: Record<"rippleContainer", string>;
    constructor(theme: LyTheme2);
}
