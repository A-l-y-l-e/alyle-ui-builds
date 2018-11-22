import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LyTheme2 } from '@alyle/ui';
import { SafeHtml, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
export interface FontClassOptions {
    key: string;
    /** Class name */
    class?: string;
    /** Frefix class */
    prefix?: string;
}
export interface SvgIcon {
    obs?: Observable<SVGElement>;
    svg?: SVGElement;
}
export declare class LyIconService {
    private http;
    private _sanitizer;
    private document;
    private theme;
    private _defaultClass;
    private _defaultClassPrefix;
    private svgMap;
    private _fontClasses;
    classes: Record<"svg", string>;
    readonly defaultSvgIcon: SVGElement;
    readonly defaultClass: string;
    readonly defaultClassPrefix: string;
    constructor(http: HttpClient, _sanitizer: DomSanitizer, document: any, theme: LyTheme2);
    setSvg(key: string, url: SafeResourceUrl): void;
    addSvgIconLiteral(key: string, literal: SafeHtml): void;
    private _textToSvg;
    private _cacheSvgIcon;
    getSvg(key: string): SvgIcon;
    /**
     * Set default className for `ly-icon`
     * @param className class name
     * @param prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     */
    setDefaultClass(className: string | null, prefix?: string): void;
    /**
     * Register new font class alias
     * demo:
     * For FontAwesome
     * registerFontClass('fa', 'fa', 'fa-')
     * @param key
     * @param className
     * @param prefix Class prefix
     */
    registerFontClass(opt: FontClassOptions): void;
    getFontClass(key: string): FontClassOptions;
}
