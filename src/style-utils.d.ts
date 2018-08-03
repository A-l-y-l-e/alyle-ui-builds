export interface TypographyConfig {
    fontFamily?: string;
    fontSize: number;
    fontWeight?: number;
    letterSpacing?: number;
    textTransform?: 'uppercase' | 'capitalize' | 'lowercase';
    gutterTop?: number;
    gutterBottom?: number;
}
export declare class LyStyleUtils {
    typography: {
        htmlFontSize: number;
        fontSize: number;
    };
    pxToRem(value: number): string;
}
