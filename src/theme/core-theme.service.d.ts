import { Renderer2, RendererFactory2 } from '@angular/core';
import { ThemeConfig, LyThemeConfig } from './theme-config';
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
    constructor(themeConfig: LyThemeConfig, rendererFactory: RendererFactory2, _document: any);
    /**
     * add new theme
     * @param theme: ThemeConfig
     */
    add(theme: ThemeConfig): void;
    get(name: string): ThemeConfig;
    getStyleMap(name: string): Map<string, DataStyle>;
    updateClassName(element: any, renderer: Renderer2, newClassname: string, oldClassname?: string): void;
}
