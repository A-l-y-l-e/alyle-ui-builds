import { ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
import { LyExpansionPanel } from './expansion-panel';
export declare class LyExpansionPanelHeader {
    readonly _accordion: LyAccordion;
    readonly _expansionPanel: LyExpansionPanel;
    /** @docs-private */
    readonly classes: Record<"root" | "panel" | "panelHeader" | "panelHeaderContent" | "panelContent" | "panelBody" | "panelTitle" | "panelDescription" | "panelActionRow" | "expanded" | "disabled", string>;
    constructor(el: ElementRef, renderer: Renderer2, _accordion: LyAccordion, _expansionPanel: LyExpansionPanel);
}
