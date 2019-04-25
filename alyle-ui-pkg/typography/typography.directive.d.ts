import { ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @docs-private */
export declare class LyTypographyBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyTypographyMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & typeof LyTypographyBase;
export declare class LyTypography extends LyTypographyMixinBase implements OnInit, OnChanges {
    private _el;
    private renderer;
    /** @docs-private */
    readonly classes: Record<"root", string>;
    private _lyTyp;
    private _lyTypClass?;
    private _gutter;
    private _gutterClass;
    private _gutterTop;
    private _gutterTopClass;
    private _gutterBottom;
    private _gutterBottomClass;
    private _noWrap;
    private _noWrapClass?;
    lyTyp: string;
    /** The text will truncate with an ellipsis. */
    noWrap: boolean;
    gutter: boolean;
    gutterTop: boolean;
    gutterBottom: boolean;
    constructor(_theme: LyTheme2, _el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(): void;
    private _createTypClass;
    private _createGutterClass;
}
