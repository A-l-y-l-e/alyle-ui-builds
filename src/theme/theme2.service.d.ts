import { Renderer2 } from '@angular/core';
import { ThemeVariables } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { DataStyle } from '../theme.service';
declare enum TypeStyle {
    Multiple = 0,
    OnlyOne = 1
}
export interface StyleMap5 {
    styles: StylesFn2<any> | Styles2;
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
}
export declare class StylesInDocument {
    styles: {
        [themeName: string]: Map<string | object, HTMLStyleElement>;
    };
    styleContainers: Map<number, HTMLElement>;
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
    readonly classes: {
        [idOrThemeName: string]: string | {
            [className: string]: string;
        };
    };
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
    addStyleSheet<T>(styles: T & (StylesFn2<T> | Styles2), priority?: number): IClasses<T>;
    addStyleSheet<T>(styles: T & (StylesFn2<T> | Styles2), id: string): IClasses<T>;
    addStyleSheet<T>(styles: T & (StylesFn2<T> | Styles2), id: string | string, priority: number): IClasses<T>;
    private _createStyleContent2;
    private _createStyleContainer;
    private findNode;
    private _createElementStyle;
    private _createInstanceForTheme;
}
export interface StyleContainer {
    [key: string]: StyleContainer | string | number;
}
export interface Styles2 {
    [key: string]: StyleContainer;
}
export declare type StylesFn2<T> = (T: any) => Styles2;
export declare function toHyphenCase(str: string): string;
export declare function capitalizeFirstLetter(str: string): string;
declare type IClasses<T> = Record<(T extends ((...args: any[]) => any) ? (keyof ReturnType<T>) : keyof T), string>;
export {};
