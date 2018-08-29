import { Renderer2, RendererFactory2 } from '@angular/core';
import { ThemeConfig, LyThemeConfig } from './theme-config';
import { DataStyle, Style } from '../theme.service';
import { InvertMediaQuery } from '../media/invert-media-query';
export declare class CoreTheme {
    private rendererFactory;
    renderer: Renderer2;
    mediaStyleContainer: HTMLElement;
    primaryStyleContainer: HTMLElement;
    secondaryStyleContainer: HTMLElement;
    firstElement: HTMLElement;
    private _themeMap;
    private _styleMap;
    private _styleCoreMap;
    constructor(themeConfig: LyThemeConfig, rendererFactory: RendererFactory2, _document: any);
    /**
     * add new theme
     * @param theme: ThemeConfig
     */
    add(theme: ThemeConfig): void;
    get(name: string): ThemeConfig;
    getStyleMap(name: string): Map<string, DataStyle>;
    setUpStyle(key: string, styles: Style<null>, media?: string, invertMediaQuery?: InvertMediaQuery): string;
    setUpStyleSecondary(key: string, styles: Style<null>, media?: string, invertMediaQuery?: InvertMediaQuery): string;
    _ĸreateStyle<T>(themeConfig: any, key: any, style: Style<T>, mapStyles: Map<string, DataStyle>, _for: string, _in: any, _media?: string, invertMediaQuery?: InvertMediaQuery): string;
    /** #style */
    _createStyleContent<T>(themeConfig: T, styles: Style<T>, id: string, media?: string | string[]): string;
    updateClassName(element: any, renderer: Renderer2, newClassname: string, oldClassname?: string): void;
}
