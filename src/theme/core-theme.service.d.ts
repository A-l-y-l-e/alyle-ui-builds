import { Renderer2, RendererFactory2 } from '@angular/core';
import { ThemeConfig, ThemeVariables } from './theme-config';
import { DataStyle } from '../theme.service';
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
    constructor(themeConfig: ThemeConfig[] | ThemeConfig, globalVariables: ThemeConfig, rendererFactory: RendererFactory2, _document: any);
    /**
     * add new theme
     * @param theme: ThemeVariables
     */
    add(theme: ThemeVariables): void;
    get(name: string): ThemeVariables;
    getStyleMap(name: string): Map<string, DataStyle>;
    updateClassName(element: any, renderer: Renderer2, newClassname: string, oldClassname?: string): void;
}
