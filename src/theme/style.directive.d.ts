import { SimpleChanges } from '@angular/core';
import { StyleTemplate } from '../parse';
import { LyHostClass } from '../minimal/host-class';
import { StyleRenderer } from '../minimal/renderer-style';
import { ThemeRef } from './theme2.service';
export declare class LyStyle {
    private _sr;
    private _hClass;
    /** @docs-private */
    static readonly и = "LyStyle";
    p: string | number | null;
    pf: string | number | null;
    pe: string | number | null;
    pt: string | number | null;
    pb: string | number | null;
    px: string | number | null;
    py: string | number | null;
    m: string | number | null;
    mf: string | number | null;
    me: string | number | null;
    mt: string | number | null;
    mb: string | number | null;
    mx: string | number | null;
    my: string | number | null;
    display: string | null;
    width: string | number | null;
    maxWidth: string | number | null;
    lyStyle: string | ((theme: any, ref: ThemeRef) => StyleTemplate) | null;
    private _lyStyle;
    constructor(_sr: StyleRenderer, _hClass: LyHostClass);
    private _updateStyle;
    ngOnChanges({ p, pf, pe, pt, pb, px, py, m, mf, me, mt, mb, mx, my, display, width, maxWidth }: SimpleChanges): void;
}
