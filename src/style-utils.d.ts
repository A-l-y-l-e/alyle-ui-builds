import { ThemeConfig } from './theme/theme-config';
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
    rewrite(config: Partial<ThemeConfig>): void;
}
export declare function eachMedia(str: string, fn: ((val: string, media: string, len: number) => void)): void;
/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 * @param objects Objects to merge
 */
export declare function mergeDeep(...objects: any[]): any;
