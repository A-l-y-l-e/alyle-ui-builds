import { BehaviorSubject } from 'rxjs';
import { ElementRef, OnChanges, OnInit, TemplateRef, ViewContainerRef, AfterViewInit, EventEmitter, OnDestroy, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DomService } from '@alyle/ui';
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
export declare class LyMenu implements OnChanges, AfterViewInit, OnInit, OnDestroy {
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
export declare class LyMenuTriggerFor {
    private elementRef;
    lyMenuTriggerFor: LyMenu;
    constructor(elementRef: ElementRef);
    targetPosition(): {
        'width': number;
        'height': number;
        'left': number;
        'top': number;
    };
    _handleClick(e: Event): void;
}
