import { Color } from '@alyle/ui/color';
import { Styles, LyClasses } from './theme/style';
import { StyleCollection, StyleTemplate } from './parse';
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
    /** Returns left or right according to the direction */
    readonly before: "before" | "after" | "right" | "left" | "top" | "bottom";
    /** Returns left or right according to the direction */
    readonly after: "before" | "after" | "right" | "left" | "top" | "bottom";
    /** Returns top */
    readonly above = "top";
    /** Returns bottom */
    readonly below = "bottom";
    pxToRem(value: number): string;
    colorOf(value: string | number, optional?: string): Color;
    getBreakpoint(key: string): string;
    selectorsOf<T>(styles: T & Styles): LyClasses<T>;
    getDirection(val: DirAlias | 'before' | 'after' | 'above' | 'below'): "before" | "after" | "right" | "left" | "top" | "bottom";
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
export declare function eachMedia(str: string | number | undefined, fn: ((val: string | number, media: string | null, index: number) => void)): void;
export declare function eachMedia(str: string | number | undefined, fn: ((val: string | number, media: string | null, index: number) => void), styleCollection: StyleCollection): StyleTemplate;
export declare function mergeDeep<T, U>(target: T, source: U): T & U;
export declare function mergeDeep<T, U, V>(target: T, source1: U, source2: V): T & U & V;
export declare function mergeDeep<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
export declare function mergeDeep(target: object, ...sources: any[]): any;
