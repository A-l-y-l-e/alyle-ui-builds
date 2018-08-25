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
    colorOf(value: string): string;
}
export declare function eachMedia(str: string, fn: ((val: string, media: string, len: number) => void)): void;
