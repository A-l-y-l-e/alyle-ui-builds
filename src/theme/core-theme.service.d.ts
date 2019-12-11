import { Renderer2, RendererFactory2 } from '@angular/core';
import { ThemeConfig, ThemeVariables } from './theme-config';
export declare class CoreTheme {
    private rendererFactory;
    renderer: Renderer2;
    mediaStyleContainer: HTMLElement;
    primaryStyleContainer: HTMLElement;
    secondaryStyleContainer: HTMLElement;
    firstElement: HTMLElement;
    readonly themes: Set<string>;
    private _themeMap;
    private _styleMap;
    private _document;
    constructor(rendererFactory: RendererFactory2, _document: any);
    initializeTheme(themeConfig: ThemeConfig[] | ThemeConfig, globalVariables: ThemeConfig): void;
    /**
     * add new theme
     * @param theme: ThemeVariables
     */
    private _add;
    hasTheme(theme: ThemeVariables | string): boolean;
    get(name: string): ThemeVariables;
    updateClassName(element: any, renderer: Renderer2, newClassname: string, oldClassname?: string): void;
}
