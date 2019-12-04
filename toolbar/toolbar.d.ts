import { Renderer2, ElementRef, OnInit, OnChanges } from '@angular/core';
import { LyTheme2, StyleCollection, LyClasses, StyleTemplate, ThemeRef, StyleRenderer } from '@alyle/ui';
export interface LyToolbarTheme {
    /** Styles for Toolbar Component */
    root?: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
    appearance?: {
        [key: string]: StyleCollection<((classes: LyClasses<typeof STYLES>) => StyleTemplate)> | ((classes: LyClasses<typeof STYLES>) => StyleTemplate);
    };
}
export interface LyToolbarVariables {
    toolbar?: LyToolbarTheme;
}
declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & LyToolbarVariables, ref: ThemeRef) => {
    $priority: number;
    root: () => (className: string) => string;
};
declare type position = 'static' | 'absolute' | 'fixed' | 'sticky' | 'relative';
/** @docs-private */
export declare class LyToolbarBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyToolbarMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/alyle-ui").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & typeof LyToolbarBase;
export declare class LyToolbar extends LyToolbarMixinBase implements OnChanges, OnInit {
    private _el;
    private theme;
    private _sr;
    /**
     * Styles
     * @docs-private
     */
    readonly classes: Pick<{
        $priority: string;
        root: string;
    }, "root">;
    private _position;
    private _positionClass;
    private _appearance;
    private _appearanceClass;
    position: position;
    appearance: string;
    constructor(_renderer: Renderer2, _el: ElementRef, theme: LyTheme2, _sr: StyleRenderer);
    ngOnChanges(): void;
    ngOnInit(): void;
}
export {};
