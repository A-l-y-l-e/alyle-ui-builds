import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ThemeVariables, LyTheme2 } from '@alyle/ui';
import { Subject } from 'rxjs';
export declare const STYLES: (theme: ThemeVariables) => {
    $priority: number;
    $name: string;
    '@global': {
        '{panelTitle},{panelDescription}': {
            display: string;
            marginAfter: string;
        };
        '{panel}:not({disabled})': {
            '{panelTitle}': {
                color: string;
            };
            '{panelDescription}': {
                color: string;
            };
        };
    };
    root: {
        '&': import("@alyle/ui/alyle-ui").StyleContainer;
    };
    panel: {
        display: string;
        overflow: string;
        position: string;
        '&:not({disabled}) {panelHeader}': {
            cursor: string;
        };
    };
    panelHeader: {
        display: string;
        position: string;
        flexDirection: string;
        alignItems: string;
        padding: string;
        transition: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        '{panel}:not({expanded}):not({disabled}) &:hover': {
            background: string;
            '@media (hover: none)': {
                background: string;
            };
        };
    };
    panelHeaderContent: {
        display: string;
        flex: number;
        flexDirection: string;
        alignItems: string;
        overflow: string;
    };
    panelContent: {
        display: string;
        flexDirection: string;
        overflow: string;
    };
    panelBody: {
        visibility: string;
        padding: string;
        transition: string;
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
    };
    panelTitle: {
        flexGrow: number;
    };
    panelDescription: {
        flexGrow: number;
    };
    panelActionRow: {
        borderTop: string;
        display: string;
        flexDirection: string;
        justifyContent: string;
        padding: string;
    };
    expanded: {
        '{panelBody}': {
            visibility: string;
        };
    };
    disabled: {
        color: string;
    };
};
export declare class LyAccordion implements OnInit {
    private _theme;
    private _renderer;
    private _el;
    /** @docs-private */
    readonly classes: Record<"root" | "panel" | "panelHeader" | "panelHeaderContent" | "panelContent" | "panelBody" | "panelTitle" | "panelDescription" | "panelActionRow" | "expanded" | "disabled", string>;
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
