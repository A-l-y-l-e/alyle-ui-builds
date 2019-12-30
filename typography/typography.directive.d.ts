import { ElementRef, Renderer2, OnInit, OnChanges } from '@angular/core';
import { LyTheme2, StyleCollection, StyleTemplate, LyHostClass, StyleRenderer } from '@alyle/ui';
export interface LyTypographyTheme {
    /** Styles for Typography Component */
    root?: StyleCollection<(() => StyleTemplate)> | (() => StyleTemplate);
    lyTyp?: {
        [name: string]: StyleCollection<(() => StyleTemplate)> | (() => StyleTemplate) | undefined;
    };
}
export interface LyTypographyVariables {
    typography?: LyTypographyTheme;
}
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyTypographyVariables) => {
    $name: string;
    $priority: number;
    root: (className: string) => string;
    gutterTop: (className: string) => string;
    gutterBottom: (className: string) => string;
    gutter: (className: string) => string;
};
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
    private sr;
    private hostClass;
    /** @docs-private */
    readonly classes: Pick<{
        $name: string;
        $priority: string;
        root: string;
        gutterTop: string;
        gutterBottom: string;
        gutter: string;
    }, "root" | "gutterTop" | "gutterBottom" | "gutter">;
    /** @docs-private */
    static readonly и = "LyTypography";
    private _lyTyp;
    private _lyTypClass;
    private _gutter;
    private _gutterTop;
    private _gutterBottom;
    private _noWrap;
    private _noWrapClass?;
    lyTyp: string;
    /** The text will truncate with an ellipsis. */
    noWrap: boolean;
    gutter: boolean;
    gutterTop: boolean;
    gutterBottom: boolean;
    constructor(_theme: LyTheme2, _el: ElementRef, renderer: Renderer2, sr: StyleRenderer, hostClass: LyHostClass);
    ngOnInit(): void;
    ngOnChanges(): void;
    private _createTypClass;
}
