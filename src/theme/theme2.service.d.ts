import { Renderer2, NgZone } from '@angular/core';
import { ThemeVariables } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { DataStyle } from '../theme.service';
declare enum TypeStyle {
    Multiple = 0,
    OnlyOne = 1
}
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
export declare class StylesInDocument {
    styles: {
        [themeName: string]: Map<string | Styles, HTMLStyleElement>;
    };
    styleContainers: Map<number, HTMLElement>;
    styleElementGlobalMap: Map<string | ((T: any) => StyleGroup) | StyleGroup, HTMLStyleElement>;
}
export declare class LyTheme2 {
    private stylesInDocument;
    core: CoreTheme;
    private _document;
    private _ngZone;
    /**
     * @deprecated use `themeVariables` instead
     */
    config: ThemeVariables;
    _styleMap: Map<string, DataStyle>;
    initialTheme: string;
    elements: Map<string | Styles, HTMLStyleElement>;
    _elementsMap: Map<any, HTMLStyleElement>;
    /** Get Theme Variables */
    readonly variables: ThemeVariables;
    private themeMap;
    /** ssr or hmr */
    private isDevOrServer;
    constructor(stylesInDocument: StylesInDocument, core: CoreTheme, themeName: any, _document: any, _ngZone: NgZone);
    setUpTheme(themeName: string): void;
    /**
     * Add a new dynamic style, use only within @Input()
     * @param id Unique id
     * @param style Styles
     * @param el Element
     * @param instance The instance of this, this replaces the existing style with a new one when it changes
     * @param parentStyle
     */
    addStyle(id: string, style?: StyleContainerFn, el?: any, instance?: string | null, priority?: number | null, parentStyle?: Styles): string;
    /**
     * Create basic style
     * @param style Styles.
     * Note: Use only with inmutable variable.
     * @param priority Priority of style
     * @param parentStyle
     */
    style(style: StyleContainerFn, priority?: number | null, parentStyle?: Styles): string;
    private updateClassName;
    updateClass(element: any, renderer: Renderer2, newClass: string, oldClass?: string): string;
    setTheme(nam: string): void;
    /** Toggle right-to-left/left-to-right */
    toggleDirection(): void;
    private _updateAllStyles;
    /**
     * Create a simple style
     * return className
     * @param id id of style
     * @param css style object or string
     * @param priority style priority(default: 0)
     */
    addSimpleStyle(id: string, css: StyleContainer | ((theme: any) => StyleContainer), priority?: number, parentStyle?: Styles): string;
    private _addDefaultStyles;
    /**
     * Add new add a new style sheet
     * @param styles styles
     * @param priority priority for style
     */
    addStyleSheet<T>(styles: T & Styles, priority?: number): OnlyClasses<T>;
    private _createStyleContent2;
    private _createStyleContainer;
    private findNode;
    private _createElementStyle;
    requestAnimationFrame(fn: (...args: any[]) => void): void;
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
    [key: string]: StyleContainer | string | undefined | null;
}
/**
 * StyleContainer or fn that return StyleContainer
 */
export declare type StyleContainerFn = ((T: any) => StyleContainer | string) | StyleContainer | string | null | undefined;
export declare type Styles = ((T: any) => StyleGroup) | StyleGroup | undefined | null;
export interface Keyframes {
    [name: string]: {
        [percent: number]: StyleContainer;
    };
}
export declare function converterToCssKeyAndStyle(str: string, themeVariables: ThemeVariables): string;
export declare function capitalizeFirstLetter(str: string): string;
declare type OnlyClasses<T> = Record<(Exclude<(T extends ((...args: any[]) => any) ? (keyof ReturnType<T>) : keyof T), '$name' | '$keyframes' | '@global'>), string>;
export {};
