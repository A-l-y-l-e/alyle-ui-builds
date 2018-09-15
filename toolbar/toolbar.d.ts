import { Renderer2, ElementRef } from '@angular/core';
import { LyCommon, LyTheme2 } from '@alyle/ui';
export declare class ToolbarItem {
    constructor();
}
export declare class LyToolbar {
    private theme;
    classes: Record<"row" | "root", string>;
    constructor(renderer: Renderer2, el: ElementRef, theme: LyTheme2, bgAndColor: LyCommon);
}
export declare class LyToolbarRow {
    constructor(el: ElementRef, renderer2: Renderer2, toolbar: LyToolbar);
}
