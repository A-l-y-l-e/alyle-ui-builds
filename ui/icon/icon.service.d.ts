import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoreTheme } from '@alyle/ui';
export interface SvgIcon {
    obs: Observable<SVGElement>;
    loaded?: boolean;
}
export declare class LyIconService {
    private http;
    private document;
    private coreTheme;
    private svgMap;
    classes: {
        svg: string;
    };
    constructor(http: HttpClient, document: any, coreTheme: CoreTheme);
    setSvg(key: string, url: string): void;
    textToSvg(str: string): SVGElement;
    getSvg(key: string): SvgIcon;
}
