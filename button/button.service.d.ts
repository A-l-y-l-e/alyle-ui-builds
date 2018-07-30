import { LyTheme2, CoreTheme } from '@alyle/ui';
export declare class LyButtonService {
    private coreTheme;
    private theme;
    classes: {
        root: string;
        outlined: string;
        buttonContent: string;
        currentConfig: string;
    };
    constructor(coreTheme: CoreTheme, theme: LyTheme2);
}
