import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LyTheme2 } from '@alyle/ui';
export interface SvgIcon {
    obs: Observable<SVGElement>;
    svg?: SVGElement;
}
export declare class LyIconService {
    private http;
    private document;
    private theme;
    private svgMap;
    classes: Record<"svg", string>;
    readonly defaultSvgIcon: SVGElement;
    constructor(http: HttpClient, document: any, theme: LyTheme2);
    setSvg(key: string, url: string): void;
    private _textToSvg;
    private _cacheSvgIcon;
    getSvg(key: string): SvgIcon;
}
