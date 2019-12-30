import { ThemeVariables } from './theme-config';
import { StyleTemplate } from '../parse';
import { Color } from '@alyle/ui/color';
/**
 * For internal use only
 * @docsPrivate
 */
export declare const _STYLE_MAP: Map<any, StyleMap5>;
/**
 * For internal use only
 * @docs-private
 */
export interface StyleMap5 {
    styles: Styles;
    type: TypeStyle;
    priority?: number | null;
    css: {
        [themeName: string]: string;
    } | string;
    /** global theme */
    classes?: {
        [key: string]: string;
    } | string;
    /** requireUpdate */
    classesWithTheme?: {
        [themeName: string]: {
            [key: string]: string;
        } | string;
    };
    /** Only for styles of TypeStyle.one */
    parentStyle?: Styles;
    requireUpdate?: boolean;
    id: string | null;
    isNewStyle?: boolean;
    /** This is used when a instance contains multiple styles */
    keys?: string[];
}
export declare enum TypeStyle {
    Multiple = 0,
    OnlyOne = 1,
    /**
     * A lyl Style
     */
    LylStyle = 2
}
/**
 * Style Object
 */
export interface StyleContainer {
    [key: string]: StyleContainer | string | number | string[] | null | undefined | StyleTemplate | Color;
}
export interface StyleGroup {
    /** Prefix name */
    $name?: string;
    $keyframes?: KeyframesDeprecated;
    $priority?: number;
    [key: string]: StyleContainer | (() => StyleTemplate) | StyleTemplate | string | number | undefined | null;
}
export interface LyStyleGroup {
    /** Prefix name */
    $name?: string;
    $priority?: number;
    [key: string]: (() => (StyleTemplate | null | undefined)) | StyleTemplate | string | number | undefined | null;
}
/**
 * CSS declarations block
 */
export declare type StyleDeclarationsBlock = ((T: any, theme: any) => StyleContainer | string) | StyleContainer | string | null | undefined;
export declare type LyStyles = ((T: any, theme: any) => LyStyleGroup) | undefined | null;
export declare type Styles = (((T: any, theme: any) => StyleGroup) | StyleGroup | undefined | null) | LyStyles;
export interface KeyframesDeprecated {
    [name: string]: {
        [percent: number]: StyleContainer;
    };
}
declare type LyClassesProperties<T> = {
    [P in keyof (T extends ((theme: any, ref?: any) => infer R) ? R : T)]: string;
};
export declare type LyClasses<T> = Omit<LyClassesProperties<T>, '$name' | '$keyframes' | '@global' | '$priority' | '$global'>;
declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
declare type LyComponentStyleItem<COMPONENT, INPUTS extends keyof COMPONENT> = {
    [P in INPUTS]: (theme: ThemeVariables, value: COMPONENT[P]) => StyleContainer;
};
export interface LyComponentStyle<COMPONENT, INPUTS extends keyof COMPONENT> {
    [key: string]: LyComponentStyleItem<COMPONENT, INPUTS>;
}
export declare function getThemeNameForSelectors(themeId: string): string;
export {};
