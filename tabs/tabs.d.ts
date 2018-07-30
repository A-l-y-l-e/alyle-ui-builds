import { Renderer, ElementRef, QueryList, ViewContainerRef, TemplateRef, OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { LyButton } from '@alyle/ui/button';
export declare class LyTabGroupComponent implements OnInit, OnChanges {
    elementRef: ElementRef;
    private renderer;
    private viewContainerRef;
    private _bg;
    private _color;
    private _subscription;
    timeout: any;
    xtemplateRef: any;
    tabRows: number;
    _selectedIndex: number;
    _margin: number;
    tabWidth: number;
    tabLeft: number;
    tabs: QueryList<LyTab>;
    lyButton: LyButton;
    _isInitialized: boolean;
    _tabsContent: ElementRef;
    templateRef: TemplateRef<any>;
    selectedIndex: number;
    selectedIndexChange: EventEmitter<any>;
    constructor(elementRef: ElementRef, renderer: Renderer, viewContainerRef: ViewContainerRef);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setTab(): void;
    updateTab(): void;
    updateTabsHeader(): void;
    ngAfterContentChecked(): void;
    ngAfterViewChecked(): void;
    updateTabIndicator(tab: HTMLElement): void;
    private sMargin;
    ngAfterViewInit(): void;
}
export declare class LyTabContent {
}
export declare class LyTab {
    elementRef: ElementRef;
    _index: number;
    _indexGroup: number;
    stateTab: boolean;
    private timeout;
    tabRef: TemplateRef<any>;
    lyButton: LyButton;
    readonly tabStyles: {
        color: string;
    };
    llOorr(...arg: any[]): string;
    solt(): void;
    emitChange(index: number): void;
    widthExacta(elem: HTMLElement): number;
    floor(num: number): number;
    setIndex(index: number): void;
    updateTabLine(): void;
    templateRef: TemplateRef<any>;
    lyTabGroup: LyTabGroupComponent;
    readonly indexGroup: number;
    constructor(lyTabGroup: LyTabGroupComponent, elementRef: ElementRef);
    ngAfterViewInit(): void;
}
