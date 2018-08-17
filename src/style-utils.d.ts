export interface TypographyConfig {
    fontSize: number;
    fontFamily?: string;
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
