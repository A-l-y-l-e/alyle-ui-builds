import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { LyTheme2, LyRippleService, LyFocusState, WinResize } from '@alyle/ui';
import { LyButton } from '@alyle/ui/button';
import { LyTabContent } from './tab-content.directive';
export declare type AlignTabs = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export declare type LyTabsHeaderPlacement = 'before' | 'after' | 'above' | 'below';
/** @docs-private */
export declare class LyTabsBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyTabsMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & typeof LyTabsBase;
/** @docs-private */
export declare class LyTabLabelBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyTabLabelMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disabled").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyTabLabelBase;
export declare class LyTabs extends LyTabsMixinBase implements OnChanges, OnInit, AfterViewInit, AfterContentInit, OnDestroy {
    private theme;
    private renderer;
    private el;
    private cd;
    private _resizeService;
    /** @docs-private */
    readonly classes: Record<"root" | "container" | "tab" | "contentContainer" | "tabsLabels" | "tabsLabelsContainer" | "label" | "tabLabelActive" | "tabContents" | "tabContent" | "tabsIndicator" | "tabsIndicatorForServer" | "rippleContainer" | "scrollable", string>;
    _selectedIndex: number;
    _selectedBeforeIndex: number;
    _selectedTab: LyTab;
    _selectedBeforeTab: LyTab;
    _isViewInitLoaded: boolean;
    private _tabsSubscription;
    private _color;
    private _colorClass;
    private _headerPlacement;
    private _headerPlacementClass;
    private _alignTabs;
    private _alignTabsClass;
    private _textColor;
    private _textColorClass;
    private _selectedIndexClass;
    private _tabResizeSub;
    private _scrollable;
    tabsRef: ElementRef;
    tabContents: ElementRef;
    tabsIndicator: ElementRef;
    selectedIndexOnChange: 'auto' | number;
    scrollable: any;
    indicatorColor: string;
    headerPlacement: LyTabsHeaderPlacement;
    alignTabs: AlignTabs;
    textColor: string;
    selectedIndex: number;
    selectedIndexChange: EventEmitter<any>;
    tabsList: QueryList<LyTab>;
    constructor(theme: LyTheme2, renderer: Renderer2, el: ElementRef, cd: ChangeDetectorRef, _resizeService: WinResize);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private _findIndex;
    _updateIndicator(currentTab: LyTab, beforeTab?: LyTab): void;
    private _updateStylesOfSelectedTab;
    _markForCheck(): void;
    loadTemplate(tab: LyTab, index: number): TemplateRef<LyTabContent> | null;
    private _getFlexDirection;
}
export declare class LyTab implements OnInit {
    private _tabs;
    _renderer: Renderer2;
    _el: ElementRef;
    index: number;
    _isBrowser: boolean;
    templateRefLazy: TemplateRef<LyTabContent>;
    templateRef: TemplateRef<any>;
    tabIndicator: ElementRef;
    _tabLabel: LyTabLabel;
    constructor(_tabs: LyTabs, _renderer: Renderer2, _el: ElementRef);
    ngOnInit(): void;
}
export declare class LyTabLabel extends LyButton implements OnInit, AfterViewInit {
    private _tab;
    private _tabs;
    private _active;
    _isBrowser: boolean;
    _rippleContainer: ElementRef;
    onClickTab(): void;
    constructor(_el: ElementRef, _renderer: Renderer2, _theme: LyTheme2, _ngZone: NgZone, _rippleService: LyRippleService, _focusState: LyFocusState, _tab: LyTab, _tabs: LyTabs);
    ngOnInit(): void;
    _updateTabState(): void;
    _updateTabScroll(): void;
    ngAfterViewInit(): void;
}
/**
 * demo basic
 * <ly-tabs withColor="accent">
 *   <ly-tab>
 *     <button ly-tab-label>HOME</button>
 *     Content
 *   </ly-tab>
 *   <ly-tab>
 *     <button ly-tab-label>HOME</button>
 *     Content
 *   </ly-tab>
 *   ...
 * </ly-tabs>
 *
 * demo lazy loading
 * <ly-tabs withBg="primary">
 *   <ly-tab>
 *     <button ly-tab-label>HOME</button>
 *     <ng-template ly-tab-content></ng-template>
 *   </ly-tab>
 *   ...
 * </ly-tabs>
 * => selectedIndexOnChange, default: auto, opts: number, with auto, the selectedIndex = current o current-1 or latest
 */
