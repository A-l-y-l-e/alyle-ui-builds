import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { LyTheme2, ThemeVariables, LyRippleService, LyFocusState, WinResize } from '@alyle/ui';
import { LyButton } from '@alyle/ui/button';
import { LyTabContent } from './tab-content.directive';
export declare type AlignTabs = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export declare type LyTabsHeaderPlacement = 'before' | 'after' | 'above' | 'below';
export declare const STYLES: (theme: ThemeVariables) => {
    $priority: number;
    root: {
        display: string;
    };
    container: {
        display: string;
    };
    tab: {
        position: string;
        display: string;
    };
    /** Tab content */
    contentContainer: {
        overflow: string;
        flexGrow: number;
    };
    /** Tab header */
    tabsLabels: {
        display: string;
        position: string;
    };
    tabsLabelsContainer: {
        overflow: string;
        '{scrollable} &': {
            '@media (hover: none)': {
                overflow: string;
            };
        };
    };
    label: {
        [x: string]: string | number | {
            padding: string;
        };
        '-webkit-tap-highlight-color': string;
        '-webkit-appearance': string;
        backgroundColor: string;
        userSelect: string;
        border: number;
        minWidth: string;
        padding: string;
        cursor: string;
        height: string;
        display: string;
        justifyContent: string;
        alignItems: string;
        position: string;
        overflow: string;
        fontFamily: string;
        fontSize: string;
        letterSpacing: string;
        color: string;
        outline: string;
        width: string;
        fontWeight: number;
        opacity: number;
    };
    tabLabelActive: {
        opacity: number;
    };
    tabContents: {
        display: string;
        transition: string;
        willChange: string;
        height: string;
    };
    tabContent: {
        width: string;
        height: string;
        flexShrink: number;
        position: string;
    };
    tabsIndicator: {
        position: string;
        height: string;
        transition: string;
        background: string;
    };
    tabsIndicatorForServer: {
        position: string;
        background: string;
    };
    rippleContainer: {
        overflow: string;
        position: string;
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    scrollable: any;
};
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
export declare const LyTabLabelMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/alyle-ui").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyTabLabelBase;
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
    _selectedTab: LyTab | null;
    _selectedBeforeTab: LyTab | null;
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
    /** Current tab index */
    index: number;
    _isBrowser: boolean;
    _templateRefLazy: TemplateRef<LyTabContent>;
    _templateRef: TemplateRef<any>;
    _tabIndicator: ElementRef;
    _tabLabel: LyTabLabel & {};
    constructor(_tabs: LyTabs, _renderer: Renderer2, _el: ElementRef);
    ngOnInit(): void;
}
export declare class LyTabLabel extends LyButton implements OnInit, AfterViewInit {
    private _tab;
    private _tabs;
    private _activeTabStyle;
    private _active;
    _isBrowser: boolean;
    active: boolean;
    _rippleContainer: ElementRef;
    _onClickTab(): void;
    constructor(_el: ElementRef, _renderer: Renderer2, _theme: LyTheme2, _ngZone: NgZone, _rippleService: LyRippleService, _focusState: LyFocusState, _tab: LyTab, _tabs: LyTabs);
    ngOnInit(): void;
    _updateTabState(): void;
    _updateTabScroll(): void;
    ngAfterViewInit(): void;
}
