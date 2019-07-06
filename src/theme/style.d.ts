import { ThemeVariables } from './theme-config';
/** Only for internal use */
export declare const _STYLE_MAP: Map<any, StyleMap5>;
/**
 * Only for internal use
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
}
export declare enum TypeStyle {
    Multiple = 0,
    OnlyOne = 1
}
/**
 * Style Object
 */
export interface StyleContainer {
    [key: string]: StyleContainer | string | number | string[] | null | undefined;
}
export interface StyleGroup {
    /** Prefix name */
    $name?: string;
    $keyframes?: Keyframes;
    $priority?: number;
    [key: string]: StyleContainer | string | number | undefined | null;
}
/**
 * CSS declarations block
 */
export declare type StyleDeclarationsBlock = ((T: any) => StyleContainer | string) | StyleContainer | string | null | undefined;
export declare type Styles = ((T: any, theme: any) => StyleGroup) | StyleGroup | undefined | null;
export interface Keyframes {
    [name: string]: {
        [percent: number]: StyleContainer;
    };
}
export declare type LyClasses<T> = Record<(Exclude<(T extends ((...args: any[]) => any) ? (keyof ReturnType<T>) : keyof T), '$name' | '$keyframes' | '@global' | '$priority'>), string>;
declare type LyComponentStyleItem<COMPONENT, INPUTS extends keyof COMPONENT> = {
    [P in INPUTS]: (theme: ThemeVariables, value: COMPONENT[P]) => StyleContainer;
};
export interface LyComponentStyle<COMPONENT, INPUTS extends keyof COMPONENT> {
    [key: string]: LyComponentStyleItem<COMPONENT, INPUTS>;
}
export {};
