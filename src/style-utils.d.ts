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
    breakpoints: {
        XSmall: string;
        Small: string;
        Medium: string;
        Large: string;
        XLarge: string;
        Handset: string;
        Tablet: string;
        Web: string;
        HandsetPortrait: string;
        TabletPortrait: string;
        WebPortrait: string;
        HandsetLandscape: string;
        TabletLandscape: string;
        WebLandscape: string;
        [key: string]: string;
    };
    pxToRem(value: number): string;
    colorOf(value: string, optional?: string): string;
    getBreakpoint(key: string): string;
}
export declare function eachMedia(str: string, fn: ((val: string, media: string, len: number) => void)): void;
/**
 * Simple object check.
 * @param item
 */
export declare function isObject(item: any): boolean;
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export declare function mergeDeep(target: any, ...sources: any[]): any;
