import { Renderer2 } from '@angular/core';
import { ThemeConfig } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { DataStyle, Style } from '../theme.service';
import { InvertMediaQuery } from '../media/invert-media-query';
export interface StylesElementMap {
    el: any;
}
export declare enum TypeStyle {
    Multiple = 0,
    OnlyOne = 1
}
export declare class StylesInDocument {
    styles: Set<string>;
}
export declare class LyTheme2 {
    private stylesInDocument;
    core: CoreTheme;
    config: ThemeConfig;
    _styleMap: Map<string, DataStyle>;
    prefix: string;
    private _styleMap2;
    readonly classes: {};
    constructor(stylesInDocument: StylesInDocument, core: CoreTheme, themeName: any);
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
    addStyle<T>(id: string, style: Style<T>, el?: any, instance?: string): string;
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
    addStyleSheet<T>(styles: StylesFn2<T> | Styles2, id?: string): any;
    _createStyleContent2<T>(styles: StylesFn2<T> | Styles2, id: string, typeStyle: TypeStyle, forChangeTheme?: boolean, media?: string): void;
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
