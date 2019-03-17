import { ChangeDetectorRef, ElementRef, Renderer2, OnChanges, OnInit, OnDestroy, TemplateRef, EventEmitter, AfterContentInit } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LyAccordion } from './accordion';
import { LyExpansionPanelContent } from './expansion-panel-content';
import { Subject } from 'rxjs';
import { AnimationEvent } from '@angular/animations';
/** LyExpansionPanel's states. */
export declare type LyExpansionPanelState = 'expanded' | 'collapsed';
/** @docs-private */
export declare class LyExpansionPanelBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyButtonMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & typeof LyExpansionPanelBase;
export declare class LyExpansionPanel extends LyButtonMixinBase implements OnChanges, OnInit, AfterContentInit, OnDestroy {
    private _el;
    private _renderer;
    private _cd;
    private _accordion;
    /** @docs-private */
    readonly classes: Record<"root" | "panel" | "panelHeader" | "panelHeaderContent" | "panelContent" | "panelBody" | "panelTitle" | "panelDescription" | "panelActionRow" | "expanded" | "disabled", string>;
    readonly _panelAnimationTiming: string;
    /** Subscription to openAll/closeAll events. */
    private _openCloseAllSubscription;
    private _disabled;
    private _expanded;
    private _hasToggle;
    _lazyContentRef: TemplateRef<any>;
    /** Content that will be rendered lazily. */
    readonly _lazyContent: LyExpansionPanelContent;
    /** Event emitted every time the LyExpansionPanel is closed. */
    closed: EventEmitter<void>;
    /** Event emitted every time the LyExpansionPanel is opened. */
    opened: EventEmitter<void>;
    /** An event emitted after the body's collapse animation happens. */
    afterCollapse: EventEmitter<void>;
    /** An event emitted after the body's expansion animation happens. */
    afterExpand: EventEmitter<void>;
    /** Event emitted when the LyExpansionPanel is destroyed. */
    destroyed: EventEmitter<void>;
    /** Stream of body animation done events. */
    _bodyAnimationDone: Subject<AnimationEvent>;
    disabled: boolean;
    expanded: boolean;
    hasToggle: boolean;
    constructor(_el: ElementRef, _renderer: Renderer2, _cd: ChangeDetectorRef, _theme: LyTheme2, _accordion: LyAccordion);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    close(): void;
    open(): void;
    toggle(): void;
    /** Gets the expanded state string. */
    _getExpandedState(): LyExpansionPanelState;
    private _subscribeToOpenCloseAllActions;
}
