import { QueryList, TemplateRef, EventEmitter, ChangeDetectorRef, Renderer2, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { LyTabContent } from './tab-content.directive';
import { LyTabsClassesService } from './tabs.clasess.service';
import { Undefined, LyTheme2 } from '@alyle/ui';
export declare class LyTabs implements OnInit, AfterViewInit {
    classes: LyTabsClassesService;
    private theme;
    private renderer;
    private el;
    private cd;
    _selectedIndex: number | Undefined;
    _selectedBeforeIndex: number;
    _selectedRequireCheck: boolean;
    _selectedTab: LyTab;
    _selectedBeforeTab: LyTab;
    private _isViewInitLoaded;
    private _withColor;
    private _withColorClass;
    tabContents: ElementRef;
    tabsIndicator: ElementRef;
    withColor: string;
    selectedIndex: number;
    selectedIndexChange: EventEmitter<any>;
    withBg: string;
    tabsList: QueryList<LyTab>;
    constructor(classes: LyTabsClassesService, theme: LyTheme2, renderer: Renderer2, el: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private _updateIndicator;
    markForCheck(): void;
    loadTemplate(tab: LyTab, index: number): TemplateRef<LyTabContent> | null;
    private _createWithColorClass;
}
export declare class LyTab implements OnInit, AfterViewInit {
    private tabs;
    _renderer: Renderer2;
    _el: ElementRef;
    index: number;
    loaded: boolean;
    templateRefLazy: TemplateRef<LyTabContent>;
    templateRef: TemplateRef<any>;
    tabIndicator: ElementRef;
    onClick(): void;
    constructor(tabs: LyTabs, _renderer: Renderer2, _el: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export declare class LyTabLabel implements OnInit {
    private renderer;
    private el;
    private classes;
    native: boolean;
    constructor(renderer: Renderer2, el: ElementRef, classes: LyTabsClassesService);
    ngOnInit(): void;
}
/**
 * demo basic
 * <ly-tabs withColor="accent">
 *   <ly-tab>
 *     <ly-tab-label>HOME<ly-tab-label>
 *     <button ly-tab-label>HOME<button>
 *     <button ly-tab-label native ly-button>HOME<button>
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
 */
