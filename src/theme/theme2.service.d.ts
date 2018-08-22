import { Renderer2 } from '@angular/core';
import { ThemeConfig } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { DataStyle, Style } from '../theme.service';
import { InvertMediaQuery } from '../media/invert-media-query';
declare enum TypeStyle {
    Multiple = 0,
    OnlyOne = 1
}
export interface StyleMap4 {
    [id: string]: {
        styles: StylesFn2<any> | Styles2;
        type: TypeStyle;
        priority: number;
        css: {
            [themeName: string]: string;
        } | string;
        requireUpdate?: boolean;
    };
}
export declare class StylesInDocument {
    styles: {
        [themeName: string]: {
            [key: string]: HTMLStyleElement;
        };
    };
    styleContainers: Map<number, HTMLElement>;
}
export declare class LyTheme2 {
    private stylesInDocument;
    core: CoreTheme;
    private _document;
    config: ThemeConfig;
    _styleMap: Map<string, DataStyle>;
    prefix: string;
    initialTheme: string;
    elements: {
        [key: string]: HTMLStyleElement;
    };
    private _styleMap2;
    readonly classes: {
        [idOrThemeName: string]: string | {
            [className: string]: string;
        };
    };
    constructor(stylesInDocument: StylesInDocument, core: CoreTheme, themeName: any, _document: any);
    setUpTheme(themeName: string): void;
    setUpStyle<T>(key: string, styles: Style<T>, media?: string, invertMediaQuery?: InvertMediaQuery): string;
    setUpStyleSecondary<T>(key: string, styles: Style<T>, media?: string, invertMediaQuery?: InvertMediaQuery): string;
    /**
     * Add a new dynamic style, use only within @Input()
     * @param id Unique id
     * @param style Styles
     * @param el Element
     * @param instance The instance of this, this replaces the existing style with a new one when it changes
     */
    addStyle<T>(id: string, style: Style<T>, el?: any, instance?: string, priority?: number): string;
    /** @deprecated */
    colorOf(value: string): string;
    updateClassName(element: any, renderer: Renderer2, newClassname: string, oldClassname?: string): void;
    updateClass(element: any, renderer: Renderer2, newClass: string, oldClass?: string): string;
    setTheme(nam: string): void;
    /**
     * add style, similar to setUpStyle but this only accept string
     * @param id id of style
     * @param css style in string
     */
    private addCss;
    /**
     * Add new add a new style sheet
     * @param styles styles
     * @param id unique id for style group
     */
    addStyleSheet<T>(styles: T & (StylesFn2<T> | Styles2), id?: string, priority?: number): IClasses<T>;
    _createStyleContent2<T>(styles: StylesFn2<T> | Styles2, id: string, priority: number, type: TypeStyle, forChangeTheme?: boolean, media?: string): any;
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
