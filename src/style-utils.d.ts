import { Styles, LyClasses } from './theme/style';
export declare class LyStyleUtils {
    name: string;
    typography: {
        fontFamily?: string;
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
    direction: Dir;
    pxToRem(value: number): string;
    colorOf(value: string, optional?: string): string;
    getBreakpoint(key: string): string;
    getClasses<T>(styles: T & Styles): LyClasses<T>;
    getDirection(val: DirAlias): "right" | "left";
}
export declare enum Dir {
    rtl = "rtl",
    ltr = "ltr"
}
export declare enum DirAlias {
    before = "before",
    after = "after"
}
export declare enum DirPosition {
    left = "left",
    right = "right"
}
export declare function eachMedia(str: string | number | undefined, fn: ((val: string, media: string | null, index: number) => void)): void;
/**
 * Simple object check.
 * @param item
 */
export declare function isObject(item: any): boolean;
export declare function mergeDeep<T, U>(target: T, source: U): T & U;
export declare function mergeDeep<T, U, V>(target: T, source1: U, source2: V): T & U & V;
export declare function mergeDeep<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
export declare function mergeDeep(target: object, ...sources: any[]): any;
