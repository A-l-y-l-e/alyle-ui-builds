import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LyTheme2 } from '@alyle/ui';
export interface SvgIcon {
    obs: Observable<SVGElement>;
    loaded?: boolean;
}
export declare class LyIconService {
    private http;
    private document;
    private theme;
    private svgMap;
    classes: Record<"svg", string>;
    constructor(http: HttpClient, document: any, theme: LyTheme2);
    setSvg(key: string, url: string): void;
    textToSvg(str: string): SVGElement;
    getSvg(key: string): SvgIcon;
}
