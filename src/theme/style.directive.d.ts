import { StyleTemplate } from '../parse';
import { MediaQueryArray } from '../style-utils';
import { StyleRenderer, WithStyles } from '../minimal/renderer-style';
import { ThemeRef } from './theme2.service';
/**
 * @dynamic
 * Spacing
 * [p], [pf], [pe], [pt], [pb], [px], [py],
 * [m], [mf], [me], [mt], [mb], [mx], [my],
 * Sizing
 * [size],
 * [width], [maxWidth], [minWidth],
 * [height], [maxHeight], [minHeight],
 * Others
 * [lyStyle]
 * [width]
 */
export declare class LyStyle implements WithStyles {
    readonly sRenderer: StyleRenderer;
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
    width: string | number | null;
    maxWidth: string | number | null;
    minWidth: string | number | null;
    height: string | number | null;
    maxHeight: string | number | null;
    minHeight: string | number | null;
    size: string | number | null;
    display: string | null;
    lyStyle: string | MediaQueryArray | ((theme: any, ref: ThemeRef) => StyleTemplate) | null;
    private _lyStyle;
    constructor(sRenderer: StyleRenderer);
}
