export interface TypographyConfig {
    fontFamily?: string;
    fontSize: number;
    fontWeight?: number;
    letterSpacing?: number;
    textTransform?: 'uppercase' | 'capitalize' | 'lowercase';
}
export declare class LyStyleUtils {
    typography: {
        htmlFontSize: number;
        fontSize: number;
    };
    pxToRem(value: number): string;
}
