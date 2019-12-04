import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LyTheme2, ThemeRef, LyClasses, StyleTemplate } from '@alyle/ui';
import { Subject } from 'rxjs';
export interface ExpansionConfig {
    root?: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
    defaultConfig?: {
        appearance?: keyof ExpansionConfig['appearance'];
    };
    appearance: {
        popOut: (classes: LyClasses<typeof STYLES>) => StyleTemplate;
    };
}
export interface ExpansionVariables {
    expansion?: ExpansionConfig;
}
export declare const STYLES: (theme: import("@alyle/ui/alyle-ui").LyStyleUtils & import("@alyle/ui/alyle-ui").ThemeConfig & ExpansionVariables, ref: ThemeRef) => {
    $priority: number;
    $name: string;
    $global: () => (className: string) => string;
    root: () => StyleTemplate;
    panel: () => (className: string) => string;
    panelHeader: () => (className: string) => string;
    panelHeaderContent: (className: string) => string;
    panelContent: (className: string) => string;
    panelBody: (className: string) => string;
    panelTitle: (className: string) => string;
    panelDescription: (className: string) => string;
    panelActionRow: (className: string) => string;
    expanded: () => (className: string) => string;
    disabled: (className: string) => string;
};
export declare class LyAccordion implements OnInit {
    private _theme;
    private _renderer;
    private _el;
    /** @docs-private */
    static readonly и = "LyAccordion";
    /** @docs-private */
    readonly classes: Pick<{
        $priority: string;
        $name: string;
        $global: string;
        root: string;
        panel: string;
        panelHeader: string;
        panelHeaderContent: string;
        panelContent: string;
        panelBody: string;
        panelTitle: string;
        panelDescription: string;
        panelActionRow: string;
        expanded: string;
        disabled: string;
    }, "root" | "panel" | "panelHeader" | "panelHeaderContent" | "panelContent" | "panelBody" | "panelTitle" | "panelDescription" | "panelActionRow" | "expanded" | "disabled">;
    private _appearance;
    private _multiple;
    private _hasToggle;
    private _appearanceClass;
    /** Stream that emits true/false when openAll/closeAll is triggered. */
    readonly _openCloseAllActions: Subject<boolean>;
    appearance: string;
    multiple: boolean;
    hasToggle: boolean;
    constructor(_theme: LyTheme2, _renderer: Renderer2, _el: ElementRef);
    ngOnInit(): void;
    closeAll(): void;
    openAll(): void;
    private _openCloseAll;
}
