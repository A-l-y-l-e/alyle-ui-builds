import { Renderer2 } from '@angular/core';
import { ThemeConfig } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { DataStyle, Style } from '../theme.service';
import { InvertMediaQuery } from '../media/invert-media-query';
export interface StyleItem {
    id: string;
    el: any;
    styles: StylesFn2<any> | Styles2;
}
export declare class LyTheme2 {
    core: CoreTheme;
    config: ThemeConfig;
    _styleMap: Map<string, DataStyle>;
    prefix: string;
    private _styleMap2;
    readonly classes: {
        [key: string]: string;
    };
    constructor(core: CoreTheme, themeName: any);
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
     * Add new add a new style sheet
     * @param styles styles
     * @param id unique id for group
     */
    addStyleSheet<T>(styles: StylesFn2<T> | Styles2, id?: string): void;
    _createStyleContent2<T>(styles: StylesFn2<T> | Styles2, id: string): {
        key: string;
        content: string;
    };
}
export interface Styles2 {
    [key: string]: Styles2 | string;
}
export declare type StylesFn2<T> = (T: any) => Styles2;
export declare function toHyphenCase(str: string): string;
export declare function capitalizeFirstLetter(str: string): string;
export declare class LyClasses {
    readonly classes: {
        [key: string]: string;
    };
}
