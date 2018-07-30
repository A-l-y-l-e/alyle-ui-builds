import { Renderer2, RendererFactory2 } from '@angular/core';
import { StyleData } from './theme.service';
export declare class LyRootService {
    private rendererFactory;
    /** Style Container */
    rootContainer: HTMLElement;
    renderer: Renderer2;
    themeRootMap: Map<string, StyleData>;
    private themeMap;
    private themes;
    private _styleMap;
    constructor(_document: any, rendererFactory: RendererFactory2);
    registerTheme(palette: any): {
        map: Map<string, StyleData>;
        palette: {
            [key: string]: any;
        };
    };
    getTheme(name: string): {
        [key: string]: any;
    };
}
