import { Renderer2 } from '@angular/core';
import { ThemeVariables } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { DataStyle } from '../theme.service';
declare enum TypeStyle {
    Multiple = 0,
    OnlyOne = 1
}
export interface StyleMap5 {
    styles: StylesFn2 | Styles2;
    type: TypeStyle;
    priority: number;
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
    requireUpdate?: boolean;
    id: string;
}
export declare class StylesInDocument {
    styles: {
        [themeName: string]: Map<string | object, HTMLStyleElement>;
    };
    styleContainers: Map<number, HTMLElement>;
    styleElementGlobalMap: Map<string | object, HTMLStyleElement>;
}
export declare class LyTheme2 {
    private stylesInDocument;
    core: CoreTheme;
    private _document;
    config: ThemeVariables;
    _styleMap: Map<string, DataStyle>;
    initialTheme: string;
    elements: Map<string | object, HTMLStyleElement>;
    _elementsMap: Map<any, HTMLStyleElement>;
    private themeMap;
    constructor(stylesInDocument: StylesInDocument, core: CoreTheme, themeName: any, _document: any);
    setUpTheme(themeName: string): void;
    /**
     * Add a new dynamic style, use only within @Input()
     * @param id Unique id
     * @param style Styles
     * @param el Element
     * @param instance The instance of this, this replaces the existing style with a new one when it changes
     */
    addStyle(id: string, style: StyleContainer | ((theme: any) => StyleContainer) | ((theme: any) => string) | string, el?: any, instance?: string, priority?: number): string;
    private updateClassName;
    updateClass(element: any, renderer: Renderer2, newClass: string, oldClass?: string): string;
    setTheme(nam: string): void;
    /**
     * add style, similar to setUpStyle but this only accept string
     * @param id id of style
     * @param css style in string
     */
    private addCss;
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
}
export interface StyleContainer {
    [key: string]: StyleContainer | string | number;
}
export interface Styles2 {
    /** Prefix name */
    $name?: string;
    [key: string]: StyleContainer | string;
}
export declare type StylesFn2 = (T: any) => Styles2;
export declare type Styles = StylesFn2 | Styles2;
export declare function toHyphenCase(str: string): string;
export declare function capitalizeFirstLetter(str: string): string;
declare type OnlyClasses<T> = Record<(Exclude<(T extends ((...args: any[]) => any) ? (keyof ReturnType<T>) : keyof T), '$name' | '$sheet'>), string>;
export {};
