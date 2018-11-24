import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef, SimpleChanges } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LyTabContent } from './tab-content.directive';
import { LyTabsClassesService } from './tabs.clasess.service';
/** @docs-private */
export declare class LyTabsBase {
    _theme: LyTheme2;
    constructor(_theme: LyTheme2);
}
/** @docs-private */
export declare const LyTabsMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/flat").CanFlat> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & typeof LyTabsBase;
/** @docs-private */
export declare class LyTabLabelBase {
    _theme: LyTheme2;
    _ngZone: NgZone;
    constructor(_theme: LyTheme2, _ngZone: NgZone);
}
/** @docs-private */
export declare const LyTabLabelMixinBase: import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/build-common-behaviors").CanStyleUpdater> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/bg").CanBg> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/flat").CanFlat> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/color").CanColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/raised").CanRaised> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disabled").CanDisable> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/outlined").CanOutlined> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/elevation").CanElevation> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/shadow-color").CanShadowColor> & import("@alyle/ui/src/common/constructor").Constructor<import("@alyle/ui/src/common/disable-ripple").CanDisableRipple> & typeof LyTabLabelBase;
export declare class LyTabs extends LyTabsMixinBase implements OnChanges, OnInit, AfterViewInit, AfterContentInit, OnDestroy {
    private theme;
    private renderer;
    private el;
    private cd;
    _selectedIndex: number;
    _selectedBeforeIndex: number;
    _selectedRequireCheck: boolean;
    _selectedTab: LyTab;
    _selectedBeforeTab: LyTab;
    private _tabsSubscription;
    private _isViewInitLoaded;
    private _withColor;
    private _withColorClass;
    readonly classes: any;
    tabContents: ElementRef;
    tabsIndicator: ElementRef;
    selectedIndexOnChange: 'auto' | number;
    native: boolean;
    withColor: string;
    selectedIndex: number;
    selectedIndexChange: EventEmitter<any>;
    withBg: string;
    tabsList: QueryList<LyTab>;
    constructor(tabsService: LyTabsClassesService, theme: LyTheme2, renderer: Renderer2, el: ElementRef, cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private _getHostElement;
    private _findIndex;
    private _updateIndicator;
    markForCheck(): void;
    loadTemplate(tab: LyTab, index: number): TemplateRef<LyTabContent> | null;
}
export declare class LyTab implements OnInit, AfterViewInit {
    private tabsService;
    private tabs;
    _renderer: Renderer2;
    _el: ElementRef;
    index: number;
    loaded: boolean;
    protected readonly classes: any;
    templateRefLazy: TemplateRef<LyTabContent>;
    templateRef: TemplateRef<any>;
    tabIndicator: ElementRef;
    onClick(): void;
    constructor(tabsService: LyTabsClassesService, tabs: LyTabs, _renderer: Renderer2, _el: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export declare class LyTabLabel extends LyTabLabelMixinBase implements OnChanges, OnInit, OnDestroy {
    private renderer;
    private _el;
    private _tabsService;
    constructor(renderer: Renderer2, _el: ElementRef, _tabsService: LyTabsClassesService, _ngZone: NgZone, _theme: LyTheme2);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
/**
 * demo basic
 * <ly-tabs withColor="accent">
 *   <ly-tab>
 *     <ly-tab-label>HOME<ly-tab-label>
 *     <button ly-tab-label>HOME<button>
 *     <button ly-tab-label-native ly-button>HOME<button>
 *     <a [routerLink]="['home']" ly-tab-label native ly-button>HOME<a>
 *     Content
 *   </ly-tab>
 *   ...
 * </ly-tabs>
 *
 * demo lazy loading
 * <ly-tabs withBg="primary">
 *   <ly-tab>
 *     <ly-tab-label>HOME<ly-tab-label>
 *     <ng-template ly-tab-content></ng-template>
 *   </ly-tab>
 *   ...
 * </ly-tabs>
 * => withColor: color del label activa, default primary
 * => withBg: color de fondo para la tab, default background:primary
 * => native: no aplica los estilos predeterminados, default undefined
 * => disabled: Disable/enable a tab, default undefined
 * => isActive: Si la pestaña está actualmente activa., default undefined
 * => selectedIndexOnChange, default: auto, opts: number, with auto, the selectedIndex = current o current-1 or latest
 */
