import { BehaviorSubject } from 'rxjs';
import { ElementRef, OnChanges, OnInit, TemplateRef, ViewContainerRef, AfterViewInit, EventEmitter, OnDestroy, ChangeDetectorRef, SimpleChanges, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DomService, LyOverlay, OverlayFromTemplateRef, LyTheme2 } from '@alyle/ui';
export declare type position = 'left' | 'right' | 'top' | 'bottom' | 'center' | 'middle';
export declare class Origin {
    horizontal: position;
    vertical: position;
}
export declare class LyTemplateMenu implements OnInit, OnDestroy {
    _viewContainerRef: ViewContainerRef;
    _vcr: ViewContainerRef;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    tmpl(template: TemplateRef<any>): void;
    ngOnDestroy(): void;
}
export declare class LyMenuDeprecated implements OnChanges, AfterViewInit, OnInit, OnDestroy {
    private elementRef;
    private _viewContainerRef;
    private domService;
    private cd;
    private sanitizer;
    isIni: boolean;
    _color: string;
    stateBg: boolean;
    widthTarget: number;
    heightTarget: number;
    rootMenu: any;
    xtemplateRef: any;
    menuAnimationsState: any;
    opened: boolean;
    _anchorOrigin: Origin;
    _targetOrigin: Origin;
    _menuElement: ElementRef;
    templateRef: TemplateRef<any>;
    _targetPosition: BehaviorSubject<string>;
    open: EventEmitter<any>;
    close: EventEmitter<any>;
    private menuContentElement;
    private menuContentRef;
    ngOnChanges(changes: SimpleChanges): void;
    updateTargetPosition(): void;
    target(_element: any): {
        'width': number;
        'height': number;
        'left': number;
        'top': number;
    };
    readonly rootStylePosition: {
        top: any;
        left: any;
    };
    readonly rootStyle: any;
    readonly targetOrigin: string;
    toggleMenu(): void;
    showMenu(): void;
    hiddeMenu(): void;
    private _destroyMenu;
    constructor(elementRef: ElementRef, _viewContainerRef: ViewContainerRef, domService: DomService, cd: ChangeDetectorRef, sanitizer: DomSanitizer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
/** Menu container */
export declare class LyMenu {
    private theme;
    private _el;
    classes: Record<"root", string>;
    /** Destroy menu */
    destroy: () => void;
    ref: LyMenuTriggerFor;
    menuEnter: any;
    menuLeave2: any;
    endAnimation(e: any): void;
    constructor(theme: LyTheme2, _el: ElementRef);
}
export declare class LyMenuItem {
    private _menu;
    _click(): void;
    constructor(_menu: LyMenu, el: ElementRef, theme: LyTheme2);
}
export declare class LyMenuTriggerFor implements OnDestroy {
    private elementRef;
    private _injector;
    private overlay;
    /** Current menuRef */
    _menuRef: OverlayFromTemplateRef;
    lyMenuTriggerFor: LyMenu | LyMenuDeprecated | TemplateRef<any>;
    constructor(elementRef: ElementRef, _injector: Injector, overlay: LyOverlay);
    targetPosition(): ClientRect;
    _handleClick(e: Event): void;
    detach(): void;
    destroy(): void;
    ngOnDestroy(): void;
}
/**
 * TODO: menu
 * @example fail
 * <ng-template #menu>
 *   <ly-menu>
 *     <button ly-menu-item >opt 1</button>
 *     <button ly-menu-item [lyMenuTriggerFor]="subMenu">opt 2</button>
 *   </ly-menu>
 * </ng-template>
 * <ng-template #subMenu>
 *   <ly-menu>
 *     <button ly-menu-item>opt 1</button>
 *     <button ly-menu-item>opt 2</button>
 *   </ly-menu>
 * </ng-template>
 * <button ly-button [lyMenuTriggerFor]="menu">toggle menu</button>
 * @example 2
 * <ng-template #menu let-menu>
 *   <ly-menu destroyOnClick="menu">
 *     <button ly-menu-item >opt 1</button>
 *     <button ly-menu-item [lyMenuTriggerFor]="subMenu">opt 2</button>
 *   </ly-menu>
 * </ng-template>
 * <ng-template #subMenu>
 *   <ly-menu>
 *     <button ly-menu-item>opt 1</button>
 *     <button ly-menu-item>opt 2</button>
 *   </ly-menu>
 * </ng-template>
 * <button ly-button [lyMenuTriggerFor]="menu">toggle menu</button>
 */
