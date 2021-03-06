import { Renderer2, NgZone } from '@angular/core';
import { ThemeVariables, ThemeConfig } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { DataStyle } from '../theme.service';
import { StyleGroup, TypeStyle, StyleContainer, Styles, StyleDeclarationsBlock, LyClasses, LyStyles } from './style';
import { StyleTemplate, StringIdGenerator } from '../parse';
export declare const keyframesUniqueId: StringIdGenerator;
export declare class StylesInDocument {
    styles: {
        [themeName: string]: Map<string | Styles, HTMLStyleElement>;
    };
    styleContainers: Map<number, HTMLElement>;
    styleElementGlobalMap: Map<string | ((T: any, theme: any) => StyleGroup) | StyleGroup | ((T: any, theme: any) => import("./style").LyStyleGroup), HTMLStyleElement>;
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
    /** Event emitted when the direction has changed. */
    private _directionChanged;
    readonly directionChanged: import("rxjs").Observable<void>;
    /** Get Theme Variables */
    readonly variables: ThemeVariables;
    private themeMap;
    /** ssr or hmr */
    private isDevOrServer;
    constructor(stylesInDocument: StylesInDocument, core: CoreTheme, themeName: any, themeConfig: ThemeConfig[] | ThemeConfig, globalVariables: ThemeConfig, _document: any, _ngZone: NgZone);
    setUpTheme(themeName: string): void;
    /**
     * Build multiple styles and render them in the DOM
     */
    renderStyleSheet<T>(styles: T & LyStyles): LyClasses<T>;
    renderStyle<THEME_VARIABLES>(id: string, style: (theme: THEME_VARIABLES, ref: ThemeRef) => StyleTemplate, priority?: number): string;
    renderStyle<THEME_VARIABLES>(style: (theme: THEME_VARIABLES, ref: ThemeRef) => StyleTemplate, priority?: number): string;
    /**
     * Add a new dynamic style, use only within @Input()
     * @param id Unique id
     * @param style Styles
     * @param el Element
     * @param instance The instance of this, this replaces the existing style with a new one when it changes
     * @param parentStyle
     */
    addStyle(id: string, style?: StyleDeclarationsBlock, el?: any, instance?: string | null, priority?: number | null, parentStyle?: Styles): string;
    /**
     * Create basic style
     * @param style Styles.
     * Note: Use only with immutable variable.
     * @param priority Priority of style
     * @param parentStyle
     */
    style(style: StyleDeclarationsBlock, priority?: number | null, parentStyle?: Styles): string;
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
    /**
     * Add new add a new style sheet
     * @param styles styles
     * @param priority priority for style
     */
    addStyleSheet<T>(styles: T & Styles, priority?: number): LyClasses<T>;
    /**
     * Check if a style exist
     * @param stylesOrId Style or Id of a style
     */
    existStyle(stylesOrId: string | Styles | StyleDeclarationsBlock): boolean;
    selectorsOf<T>(styles: T): LyClasses<T>;
    getClass(styles: string | StyleTemplate): string;
    /**
     * For internal use only
     * @docs-private
     */
    _createStyleContent2(styles: Styles | StyleDeclarationsBlock | ((theme: any, ref: ThemeRef) => StyleTemplate), id: string | null, priority: number | undefined | null, type: TypeStyle, forChangeTheme?: boolean, parentStyle?: Styles): any;
    private _createStyleContainer;
    private findNode;
    private _createElementStyle;
    requestAnimationFrame(fn: (...args: any[]) => void): void;
}
export declare function converterToCssKeyAndStyle(str: string, themeVariables: ThemeVariables): string;
export declare function capitalizeFirstLetter(str: string): string;
export interface ThemeRef extends Pick<LyTheme2, 'selectorsOf'> {
}
