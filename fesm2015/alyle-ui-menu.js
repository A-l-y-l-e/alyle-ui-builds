import { BehaviorSubject } from 'rxjs';
import { Component, ElementRef, Input, Output, Directive, TemplateRef, ViewChild, ViewContainerRef, EventEmitter, ChangeDetectorRef, Optional, Injector, HostListener, HostBinding, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { DomService, Platform, LyOverlay, LyTheme2, shadowBuilder, LyCommonModule, LxDomModule, LyOverlayModule } from '@alyle/ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Origin {
}
class LyTemplateMenu {
    /**
     * @param {?} _viewContainerRef
     */
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} template
     * @return {?}
     */
    tmpl(template) {
        this._vcr.createEmbeddedView(template);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        console.log('desst');
    }
}
LyTemplateMenu.decorators = [
    { type: Component, args: [{
                selector: 'ly-template-menu',
                template: `
  <div #container></div>
  `,
                styles: [`
    :host {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `]
            },] },
];
/** @nocollapse */
LyTemplateMenu.ctorParameters = () => [
    { type: ViewContainerRef }
];
LyTemplateMenu.propDecorators = {
    _vcr: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }]
};
class LyMenuDeprecated {
    /**
     * @param {?} elementRef
     * @param {?} _viewContainerRef
     * @param {?} domService
     * @param {?} cd
     * @param {?} sanitizer
     */
    constructor(elementRef, _viewContainerRef, domService, cd, sanitizer) {
        this.elementRef = elementRef;
        this._viewContainerRef = _viewContainerRef;
        this.domService = domService;
        this.cd = cd;
        this.sanitizer = sanitizer;
        this.isIni = false;
        this.stateBg = false;
        this.widthTarget = 0;
        this.heightTarget = 0;
        this.rootMenu = {
            top: 0,
            left: 0,
        };
        this.opened = false;
        // tslint:disable-next-line:no-input-rename
        this._anchorOrigin = { horizontal: 'left', vertical: 'top' };
        // tslint:disable-next-line:no-input-rename
        this._targetOrigin = { horizontal: 'left', vertical: 'top' };
        this._targetPosition = new BehaviorSubject(null);
        this.open = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['_targetOrigin']) {
            Promise.resolve(null).then(() => {
            });
        }
    }
    /**
     * @return {?}
     */
    updateTargetPosition() {
        /** @type {?} */
        let vertical = '0%';
        /** @type {?} */
        let horizontal = '0%';
        if (this._targetOrigin.horizontal === 'middle') {
            horizontal = '-50%';
        }
        else if (this._targetOrigin.horizontal === 'right') {
            horizontal = '-100%';
        }
        if (this._targetOrigin.vertical === 'center') {
            vertical = '-50%';
        }
        else if (this._targetOrigin.vertical === 'bottom') {
            vertical = '-100%';
        }
        /** @type {?} */
        const menuStyle = this.sanitizer.bypassSecurityTrustStyle(`translate3d(${horizontal}, ${vertical}, 0) scale3d(1, 1, 1)`);
        this._targetPosition.next(/** @type {?} */ (menuStyle));
    }
    /**
     * @param {?} _element
     * @return {?}
     */
    target(_element) {
        /** @type {?} */
        const element = _element;
        return {
            'width': element.offsetWidth || 0,
            'height': element.offsetHeight || 0,
            'left': element.offsetWidth || 0,
            'top': 0,
        };
    }
    /**
     * @return {?}
     */
    get rootStylePosition() {
        /** @type {?} */
        let top = 0;
        /** @type {?} */
        let left = 0;
        // let topTarget: any = 0;
        // let leftTarget: any = 0;
        // for _anchorOrigin
        if (this._anchorOrigin.vertical === 'center') {
            // anchor origin
            top = (this.rootMenu.height / 2);
        }
        else if (this._anchorOrigin.vertical === 'bottom') {
            top = (this.rootMenu.height);
        }
        if (this._anchorOrigin.horizontal === 'middle') {
            // anchor origin
            left = (this.rootMenu.width / 2);
        }
        else if (this._anchorOrigin.horizontal === 'right') {
            left = (this.rootMenu.width);
        }
        // // for target origing
        // if (this._targetOrigin.vertical == 'center') {
        //   // anchor origin
        //   topTarget = -(this.heightTarget / 2);
        // } else if (this._targetOrigin.vertical == 'bottom') {
        //   topTarget = -(this.heightTarget);
        // }
        // if (this._targetOrigin.horizontal == 'middle') {
        //   // leftTarget = (this.target(this._menuElement).width / 2);
        //   leftTarget = -(this.widthTarget / 2);
        // } else if (this._targetOrigin.horizontal == 'right') {
        //   // leftTarget = (this.target(this._menuElement).width);
        //   leftTarget = -(this.widthTarget);
        // }
        return {
            top: top,
            left: left,
        };
    }
    /**
     * @return {?}
     */
    get rootStyle() {
        /** @type {?} */
        const menuPosition = this.rootMenu;
        /** @type {?} */
        const positionFinal = menuPosition;
        if (this._anchorOrigin) ;
        return positionFinal;
    }
    /**
     * @return {?}
     */
    get targetOrigin() {
        return `${this._targetOrigin.horizontal === 'middle' ? 'center' : this._targetOrigin.horizontal} ${this._targetOrigin.vertical} 0`;
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        this.opened === false ? this.showMenu() : this.hiddeMenu();
    }
    /**
     * @return {?}
     */
    showMenu() {
        this.menuAnimationsState = 'in';
        this.menuContentRef = this.domService.attach(this._viewContainerRef, LyTemplateMenu, this.templateRef);
        // this.menuContentElement = this.domService.getDomElementFromComponentRef(this.menuContentRef);
        // this.domService.addChild(this.menuContentElement);
        this.updateTargetPosition();
        this.opened = true;
        this.stateBg = true;
        this.open.emit(null);
    }
    /**
     * @return {?}
     */
    hiddeMenu() {
        this.close.emit(null);
        this.opened = false;
        this.stateBg = false;
        // this.menuAnimationsState = 'end';
        this._destroyMenu();
    }
    /**
     * @return {?}
     */
    _destroyMenu() {
        // if (this.menuContentRef) {
        this.domService.destroyRef(this.menuContentRef, 0);
        // }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Platform.isBrowser) {
            this._destroyMenu();
        }
    }
}
LyMenuDeprecated.decorators = [
    { type: Component, args: [{
                selector: 'ly-menu-deprecated',
                styles: [`.ly-menu{display:inline-block;position:fixed;padding:8px 0;max-height:248px;overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000;opacity:0;min-width:84px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);box-shadow:rgba(0,0,0,.15) 0 2px 6px,rgba(0,0,0,.15) 0 1px 4px;border-radius:2px;transition:transform 175ms cubic-bezier(.23,1,.32,1),opacity 275ms ease-in,-webkit-transform 175ms cubic-bezier(.23,1,.32,1);will-change:opacity,transform;font-family:Roboto,"Helvetica Neue",sans-serif}.ly-list-x{z-index:0;max-height:100%}.ly-menu /deep/ ly-menu{position:absolute}.ly-menu.ly-list{position:relative;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);transition:linear}:host.ly-list .ly-menu{position:relative;-webkit-transform:scale(1,1);transform:scale(1,1);transition:linear;opacity:1}:host.ly-list .ly-background-menu{pointer-events:none}.ly-menu.ly-menu-opened{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.ly-background-menu{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0);z-index:999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.ly-background-on{pointer-events:all!important;pointer-events:auto!important}::ng-deep button[ly-menu-item]{display:block;min-height:48px;border-radius:0;width:100%}`],
                animations: [
                    trigger('menu', [
                        transition(':leave', animate('150ms 50ms linear', style({ opacity: 0 }))),
                        state('in', style({
                            opacity: 1
                        })),
                        transition(':enter', animate('100ms linear'))
                    ])
                ],
                template: `
  <ng-template>
    <div #_menu [@menu]="menuAnimationsState"
      class="ly-menu"
      bg="menu:bg"
      color="colorText"
      [style.transform-origin]="targetOrigin"
      [style.top.px]="rootStyle.top + rootStylePosition.top"
      [style.left.px]="rootStyle.left + rootStylePosition.left"
      [style.transform]="_targetPosition | async">
      <div class="ly-menu-content">
        <ng-content></ng-content>
      </div>
    </div>
    <div
    class="ly-background-menu ly-background-on"
    (click)="hiddeMenu()"></div>
  </ng-template>
  `,
                exportAs: 'lyMenuDeprecated',
                preserveWhitespaces: false
            },] },
];
/** @nocollapse */
LyMenuDeprecated.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: DomService },
    { type: ChangeDetectorRef },
    { type: DomSanitizer }
];
LyMenuDeprecated.propDecorators = {
    opened: [{ type: Input }],
    _anchorOrigin: [{ type: Input, args: ['anchor-origin',] }],
    _targetOrigin: [{ type: Input, args: ['target-origin',] }],
    _menuElement: [{ type: ViewChild, args: ['_menu',] }],
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
    open: [{ type: Output }],
    close: [{ type: Output }]
};
/** @type {?} */
const menuStyles = theme => ({
    root: {
        background: theme.background.primary.default,
        borderRadius: '2px',
        boxShadow: shadowBuilder(4),
        display: 'inline-block',
        paddingTop: '8px',
        paddingBottom: '8px',
        transformOrigin: 'left top 0px'
    }
});
/**
 * Menu container
 */
class LyMenu {
    /**
     * @param {?} theme
     * @param {?} _el
     */
    constructor(theme, _el) {
        this.theme = theme;
        this._el = _el;
        this.classes = this.theme.addStyleSheet(menuStyles, 'lyMenu');
        this._el.nativeElement.classList.add(this.classes.root);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    endAnimation(e) {
        if (e.toState === 'void') {
            this.ref.destroy();
        }
    }
}
LyMenu.decorators = [
    { type: Component, args: [{
                selector: 'ly-menu',
                animations: [
                    trigger('menuEnter', [
                        transition(':enter', [
                            animate('120ms cubic-bezier(0, 0, 0.2, 1)', keyframes([
                                style({
                                    opacity: 0,
                                    transform: 'scale(0.8)'
                                }),
                                style({
                                    opacity: 1,
                                    transform: 'scale(1)'
                                })
                            ]))
                        ]),
                    ]),
                    trigger('menuLeave', [
                        transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))
                    ])
                ],
                styles: [':host {display: block; pointer-events: all;}'],
                template: '<ng-content></ng-content>',
                exportAs: 'lyMenu'
            },] },
];
/** @nocollapse */
LyMenu.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef }
];
LyMenu.propDecorators = {
    ref: [{ type: Input }],
    menuEnter: [{ type: HostBinding, args: ['@menuEnter',] }],
    menuLeave2: [{ type: HostBinding, args: ['@menuLeave',] }],
    endAnimation: [{ type: HostListener, args: ['@menuLeave.done', ['$event'],] }]
};
/** @type {?} */
const menuItemStyles = ({
    display: 'block',
    minHeight: '48px',
    borderRadius: 0,
    width: '100%'
});
class LyMenuItem {
    /**
     * @param {?} _menu
     * @param {?} el
     * @param {?} theme
     */
    constructor(_menu, el, theme) {
        this._menu = _menu;
        theme.addStyle('lyMenuItem', menuItemStyles, el.nativeElement, undefined, 0.1);
    }
    /**
     * @return {?}
     */
    _click() {
        if (this._menu.ref) {
            this._menu.ref._menuRef.detach();
        }
    }
}
LyMenuItem.decorators = [
    { type: Directive, args: [{
                selector: '[ly-menu-item]'
            },] },
];
/** @nocollapse */
LyMenuItem.ctorParameters = () => [
    { type: LyMenu, decorators: [{ type: Optional }] },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyMenuItem.propDecorators = {
    _click: [{ type: HostListener, args: ['click',] }]
};
class LyMenuTriggerFor {
    /**
     * @param {?} elementRef
     * @param {?} _injector
     * @param {?} overlay
     */
    constructor(elementRef, _injector, overlay) {
        this.elementRef = elementRef;
        this._injector = _injector;
        this.overlay = overlay;
    }
    /**
     * @return {?}
     */
    targetPosition() {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        /** @type {?} */
        const rect = element.getBoundingClientRect();
        return rect;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _handleClick(e) {
        /** @deprecated */
        if (this.lyMenuTriggerFor instanceof LyMenuDeprecated) {
            this.lyMenuTriggerFor.rootMenu = this.targetPosition();
            this.lyMenuTriggerFor.toggleMenu();
        }
        else {
            if (this._menuRef) {
                this._menuRef.detach();
            }
            else {
                /** @type {?} */
                const rect = this.targetPosition();
                this._menuRef = this.overlay.create(/** @type {?} */ (this.lyMenuTriggerFor), {
                    $implicit: this
                }, {
                    styles: {
                        top: rect.top,
                        left: rect.left,
                        right: null,
                        bottom: null,
                    },
                    fnDestroy: this.detach.bind(this),
                    host: this.elementRef.nativeElement
                });
            }
        }
    }
    /**
     * @return {?}
     */
    detach() {
        this._menuRef.detach();
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this._menuRef) {
            this._menuRef.remove();
            this._menuRef = null;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._menuRef) {
            this._menuRef.detach();
        }
    }
}
LyMenuTriggerFor.decorators = [
    { type: Directive, args: [{
                selector: '[lyMenuTriggerFor]',
                // tslint:disable-next-line:use-host-property-decorator
                host: {
                    '(click)': '_handleClick($event)'
                }
            },] },
];
/** @nocollapse */
LyMenuTriggerFor.ctorParameters = () => [
    { type: ElementRef },
    { type: Injector },
    { type: LyOverlay }
];
LyMenuTriggerFor.propDecorators = {
    lyMenuTriggerFor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyMenuModule {
}
LyMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, LyCommonModule, LxDomModule, LyOverlayModule],
                exports: [LyMenu, LyMenuItem, LyMenuDeprecated, LyMenuTriggerFor],
                declarations: [LyMenu, LyMenuItem, LyMenuDeprecated, LyMenuTriggerFor, LyTemplateMenu],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { Origin, LyTemplateMenu, LyMenuDeprecated, LyMenu, LyMenuItem, LyMenuTriggerFor, LyMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS50cyIsIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIERpcmVjdGl2ZSxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT3B0aW9uYWwsXG4gIEluamVjdG9yLFxuICBIb3N0TGlzdGVuZXIsXG4gIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG4gIGtleWZyYW1lcyxcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBEb21TZXJ2aWNlLCBQbGF0Zm9ybSwgTHlPdmVybGF5LCBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLCBMeVRoZW1lMiwgc2hhZG93QnVpbGRlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCB0eXBlIHBvc2l0aW9uID0gJ2xlZnQnIHwgJ3JpZ2h0JyB8ICd0b3AnIHwgJ2JvdHRvbScgfCAnY2VudGVyJyB8ICdtaWRkbGUnO1xuZXhwb3J0IGNsYXNzIE9yaWdpbiB7XG4gIGhvcml6b250YWw6IHBvc2l0aW9uO1xuICB2ZXJ0aWNhbDogcG9zaXRpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRlbXBsYXRlLW1lbnUnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNjb250YWluZXI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGVtcGxhdGVNZW51IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgX3ZjcjogVmlld0NvbnRhaW5lclJlZjtcbiAgY29uc3RydWN0b3IocHVibGljIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICB0bXBsKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc29sZS5sb2coJ2Rlc3N0Jyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudS1kZXByZWNhdGVkJyxcbiAgc3R5bGVzOiBbYC5seS1tZW51e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmZpeGVkO3BhZGRpbmc6OHB4IDA7bWF4LWhlaWdodDoyNDhweDtvdmVyZmxvdzphdXRvOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDA7b3BhY2l0eTowO21pbi13aWR0aDo4NHB4O3dpZHRoOi13ZWJraXQtZml0LWNvbnRlbnQ7d2lkdGg6LW1vei1maXQtY29udGVudDt3aWR0aDpmaXQtY29udGVudDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLC4xNSkgMCAycHggNnB4LHJnYmEoMCwwLDAsLjE1KSAwIDFweCA0cHg7Ym9yZGVyLXJhZGl1czoycHg7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSxvcGFjaXR5IDI3NW1zIGVhc2UtaW4sLXdlYmtpdC10cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTt3aWxsLWNoYW5nZTpvcGFjaXR5LHRyYW5zZm9ybTtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lmx5LWxpc3QteHt6LWluZGV4OjA7bWF4LWhlaWdodDoxMDAlfS5seS1tZW51IC9kZWVwLyBseS1tZW51e3Bvc2l0aW9uOmFic29sdXRlfS5seS1tZW51Lmx5LWxpc3R7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zaXRpb246bGluZWFyfTpob3N0Lmx5LWxpc3QgLmx5LW1lbnV7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2l0aW9uOmxpbmVhcjtvcGFjaXR5OjF9Omhvc3QubHktbGlzdCAubHktYmFja2dyb3VuZC1tZW51e3BvaW50ZXItZXZlbnRzOm5vbmV9Lmx5LW1lbnUubHktbWVudS1vcGVuZWR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO29wYWNpdHk6MX0ubHktYmFja2dyb3VuZC1tZW51e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTt6LWluZGV4Ojk5OTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7cG9pbnRlci1ldmVudHM6bm9uZX0ubHktYmFja2dyb3VuZC1vbntwb2ludGVyLWV2ZW50czphbGwhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOmF1dG8haW1wb3J0YW50fTo6bmctZGVlcCBidXR0b25bbHktbWVudS1pdGVtXXtkaXNwbGF5OmJsb2NrO21pbi1oZWlnaHQ6NDhweDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJX1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ21lbnUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBhbmltYXRlKCcxNTBtcyA1MG1zIGxpbmVhcicsIHN0eWxlKHtvcGFjaXR5OiAwfSkpKSxcbiAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJykpXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLXRlbXBsYXRlPlxuICAgIDxkaXYgI19tZW51IFtAbWVudV09XCJtZW51QW5pbWF0aW9uc1N0YXRlXCJcbiAgICAgIGNsYXNzPVwibHktbWVudVwiXG4gICAgICBiZz1cIm1lbnU6YmdcIlxuICAgICAgY29sb3I9XCJjb2xvclRleHRcIlxuICAgICAgW3N0eWxlLnRyYW5zZm9ybS1vcmlnaW5dPVwidGFyZ2V0T3JpZ2luXCJcbiAgICAgIFtzdHlsZS50b3AucHhdPVwicm9vdFN0eWxlLnRvcCArIHJvb3RTdHlsZVBvc2l0aW9uLnRvcFwiXG4gICAgICBbc3R5bGUubGVmdC5weF09XCJyb290U3R5bGUubGVmdCArIHJvb3RTdHlsZVBvc2l0aW9uLmxlZnRcIlxuICAgICAgW3N0eWxlLnRyYW5zZm9ybV09XCJfdGFyZ2V0UG9zaXRpb24gfCBhc3luY1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImx5LW1lbnUtY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgY2xhc3M9XCJseS1iYWNrZ3JvdW5kLW1lbnUgbHktYmFja2dyb3VuZC1vblwiXG4gICAgKGNsaWNrKT1cImhpZGRlTWVudSgpXCI+PC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGV4cG9ydEFzOiAnbHlNZW51RGVwcmVjYXRlZCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudURlcHJlY2F0ZWQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaXNJbmkgPSBmYWxzZTtcbiAgX2NvbG9yOiBzdHJpbmc7XG4gIHN0YXRlQmcgPSBmYWxzZTtcbiAgd2lkdGhUYXJnZXQgPSAwO1xuICBoZWlnaHRUYXJnZXQgPSAwO1xuXG4gIHJvb3RNZW51OiBhbnkgPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gIH07XG4gIHh0ZW1wbGF0ZVJlZjogYW55O1xuICBtZW51QW5pbWF0aW9uc1N0YXRlO1xuICBASW5wdXQoKSBvcGVuZWQgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2FuY2hvci1vcmlnaW4nKSBfYW5jaG9yT3JpZ2luOiBPcmlnaW4gPSB7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgndGFyZ2V0LW9yaWdpbicpIF90YXJnZXRPcmlnaW46IE9yaWdpbiA9IHtob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAndG9wJ307XG4gIEBWaWV3Q2hpbGQoJ19tZW51JykgX21lbnVFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgX3RhcmdldFBvc2l0aW9uOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblxuICBAT3V0cHV0KCkgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgbWVudUNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBtZW51Q29udGVudFJlZjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ190YXJnZXRPcmlnaW4nXSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzW3RhcmdldC1vcmlnaW5dJywgY2hhbmdlc1snX3RhcmdldE9yaWdpbiddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgbGV0IHZlcnRpY2FsID0gJzAlJyxcbiAgICBob3Jpem9udGFsID0gJzAlJztcbiAgICBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnKSB7XG4gICAgICBob3Jpem9udGFsID0gJy01MCUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT09ICdyaWdodCcpIHtcbiAgICAgIGhvcml6b250YWwgPSAnLTEwMCUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09PSAnY2VudGVyJykge1xuICAgICAgdmVydGljYWwgPSAnLTUwJSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgICB2ZXJ0aWNhbCA9ICctMTAwJSc7XG4gICAgfVxuICAgIGNvbnN0IG1lbnVTdHlsZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgdHJhbnNsYXRlM2QoJHtob3Jpem9udGFsfSwgJHt2ZXJ0aWNhbH0sIDApIHNjYWxlM2QoMSwgMSwgMSlgKTtcbiAgICB0aGlzLl90YXJnZXRQb3NpdGlvbi5uZXh0KG1lbnVTdHlsZSBhcyBzdHJpbmcpO1xuICB9XG4gIC8vIGdldCBzaXplXG4gIHRhcmdldChfZWxlbWVudDogYW55KSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBfZWxlbWVudDtcbiAgICByZXR1cm4ge1xuICAgICAgJ3dpZHRoJzogZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwLFxuICAgICAgJ2hlaWdodCc6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDAsXG4gICAgICAnbGVmdCc6IGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMCxcbiAgICAgICd0b3AnOiAwLFxuICAgIH07XG4gIH1cbiAgZ2V0IHJvb3RTdHlsZVBvc2l0aW9uKCkge1xuICAgIGxldCB0b3A6IGFueSA9IDA7XG4gICAgbGV0IGxlZnQ6IGFueSA9IDA7XG4gICAgLy8gbGV0IHRvcFRhcmdldDogYW55ID0gMDtcbiAgICAvLyBsZXQgbGVmdFRhcmdldDogYW55ID0gMDtcblxuICAgIC8vIGZvciBfYW5jaG9yT3JpZ2luXG4gICAgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIC8vIGFuY2hvciBvcmlnaW5cbiAgICAgIHRvcCA9ICh0aGlzLnJvb3RNZW51LmhlaWdodCAvIDIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSAnYm90dG9tJykge1xuICAgICAgdG9wID0gKHRoaXMucm9vdE1lbnUuaGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgLy8gYW5jaG9yIG9yaWdpblxuICAgICAgbGVmdCA9ICh0aGlzLnJvb3RNZW51LndpZHRoIC8gMik7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgbGVmdCA9ICh0aGlzLnJvb3RNZW51LndpZHRoKTtcbiAgICB9XG5cbiAgICAvLyAvLyBmb3IgdGFyZ2V0IG9yaWdpbmdcbiAgICAvLyBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09ICdjZW50ZXInKSB7XG4gICAgLy8gICAvLyBhbmNob3Igb3JpZ2luXG4gICAgLy8gICB0b3BUYXJnZXQgPSAtKHRoaXMuaGVpZ2h0VGFyZ2V0IC8gMik7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT0gJ2JvdHRvbScpIHtcbiAgICAvLyAgIHRvcFRhcmdldCA9IC0odGhpcy5oZWlnaHRUYXJnZXQpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT0gJ21pZGRsZScpIHtcbiAgICAvLyAgIC8vIGxlZnRUYXJnZXQgPSAodGhpcy50YXJnZXQodGhpcy5fbWVudUVsZW1lbnQpLndpZHRoIC8gMik7XG4gICAgLy8gICBsZWZ0VGFyZ2V0ID0gLSh0aGlzLndpZHRoVGFyZ2V0IC8gMik7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PSAncmlnaHQnKSB7XG4gICAgLy8gICAvLyBsZWZ0VGFyZ2V0ID0gKHRoaXMudGFyZ2V0KHRoaXMuX21lbnVFbGVtZW50KS53aWR0aCk7XG4gICAgLy8gICBsZWZ0VGFyZ2V0ID0gLSh0aGlzLndpZHRoVGFyZ2V0KTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdG9wLFxuICAgICAgbGVmdDogbGVmdCxcbiAgICAgIC8vIHRvcFRhcmdldDogdG9wVGFyZ2V0LFxuICAgICAgLy8gbGVmdFRhcmdldDogbGVmdFRhcmdldCxcbiAgICB9O1xuICB9XG4gIGdldCByb290U3R5bGUoKTogYW55IHtcbiAgICBjb25zdCBtZW51UG9zaXRpb246IGFueSA9IHRoaXMucm9vdE1lbnU7XG4gICAgY29uc3QgcG9zaXRpb25GaW5hbDogYW55ID0gbWVudVBvc2l0aW9uO1xuXG4gICAgaWYgKHRoaXMuX2FuY2hvck9yaWdpbikge1xuXG5cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb25GaW5hbDtcbiAgfVxuICBnZXQgdGFyZ2V0T3JpZ2luKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke1xuICAgICAgdGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnID8gJ2NlbnRlcicgOiB0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbFxuICAgIH0gJHt0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWx9IDBgO1xuICB9XG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5vcGVuZWQgPT09IGZhbHNlID8gdGhpcy5zaG93TWVudSgpIDogdGhpcy5oaWRkZU1lbnUoKTtcbiAgfVxuICBzaG93TWVudSgpIHtcbiAgICB0aGlzLm1lbnVBbmltYXRpb25zU3RhdGUgPSAnaW4nO1xuICAgIHRoaXMubWVudUNvbnRlbnRSZWYgPSB0aGlzLmRvbVNlcnZpY2UuYXR0YWNoPEx5VGVtcGxhdGVNZW51Pih0aGlzLl92aWV3Q29udGFpbmVyUmVmLCBMeVRlbXBsYXRlTWVudSwgdGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgLy8gdGhpcy5tZW51Q29udGVudEVsZW1lbnQgPSB0aGlzLmRvbVNlcnZpY2UuZ2V0RG9tRWxlbWVudEZyb21Db21wb25lbnRSZWYodGhpcy5tZW51Q29udGVudFJlZik7XG4gICAgLy8gdGhpcy5kb21TZXJ2aWNlLmFkZENoaWxkKHRoaXMubWVudUNvbnRlbnRFbGVtZW50KTtcbiAgICB0aGlzLnVwZGF0ZVRhcmdldFBvc2l0aW9uKCk7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGVCZyA9IHRydWU7XG4gICAgdGhpcy5vcGVuLmVtaXQobnVsbCk7XG4gIH1cbiAgaGlkZGVNZW51KCkge1xuICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGVCZyA9IGZhbHNlO1xuICAgIC8vIHRoaXMubWVudUFuaW1hdGlvbnNTdGF0ZSA9ICdlbmQnO1xuICAgIHRoaXMuX2Rlc3Ryb3lNZW51KCk7XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95TWVudSgpOiB2b2lkIHtcbiAgICAvLyBpZiAodGhpcy5tZW51Q29udGVudFJlZikge1xuICAgICAgdGhpcy5kb21TZXJ2aWNlLmRlc3Ryb3lSZWYodGhpcy5tZW51Q29udGVudFJlZiwgMCk7XG4gICAgLy8gfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBkb21TZXJ2aWNlOiBEb21TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7IH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lNZW51KCk7XG4gICAgfVxuICB9XG5cbn1cblxuY29uc3QgbWVudVN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig0KSxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBwYWRkaW5nVG9wOiAnOHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnOHB4JyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCAwcHgnXG4gIH1cbn0pO1xuXG4vKiogTWVudSBjb250YWluZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW1lbnUnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignbWVudUVudGVyJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBhbmltYXRlKCcxMjBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIGtleWZyYW1lcyhbXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgICAgICAgIH0pXG4gICAgICAgIF0pKVxuICAgICAgXSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignbWVudUxlYXZlJywgW1xuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTAwbXMgMjVtcyBsaW5lYXInLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpKVxuICAgIF0pXG4gIF0sXG4gIHN0eWxlczogWyc6aG9zdCB7ZGlzcGxheTogYmxvY2s7IHBvaW50ZXItZXZlbnRzOiBhbGw7fSddLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBleHBvcnRBczogJ2x5TWVudSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51IHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChtZW51U3R5bGVzLCAnbHlNZW51Jyk7XG4gIC8qKiBEZXN0cm95IG1lbnUgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbiAgQElucHV0KCkgcmVmOiBMeU1lbnVUcmlnZ2VyRm9yO1xuICBASG9zdEJpbmRpbmcoJ0BtZW51RW50ZXInKSBtZW51RW50ZXI7XG4gIEBIb3N0QmluZGluZygnQG1lbnVMZWF2ZScpIG1lbnVMZWF2ZTI7XG4gIEBIb3N0TGlzdGVuZXIoJ0BtZW51TGVhdmUuZG9uZScsIFsnJGV2ZW50J10pIGVuZEFuaW1hdGlvbihlKSB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICAgLy8gcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICAvLyBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgLy8gcHJpdmF0ZSBoajogTHlNZW51VHJpZ2dlckZvclxuICAgIC8vIEBJbmplY3QoUHJvdmlkZXJNZW51KSBwcm92aWRlck1lbnU6IFByb3ZpZGVyTWVudVxuICApIHtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbn1cblxuY29uc3QgbWVudUl0ZW1TdHlsZXMgPSAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgYm9yZGVyUmFkaXVzOiAwLFxuICB3aWR0aDogJzEwMCUnXG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LW1lbnUtaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudUl0ZW0ge1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9jbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudS5yZWYpIHtcbiAgICAgIHRoaXMuX21lbnUucmVmLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9tZW51OiBMeU1lbnUsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoZW1lLmFkZFN0eWxlKCdseU1lbnVJdGVtJywgbWVudUl0ZW1TdHlsZXMsIGVsLm5hdGl2ZUVsZW1lbnQsIHVuZGVmaW5lZCwgMC4xKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlNZW51VHJpZ2dlckZvcl0nLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVUcmlnZ2VyRm9yIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIEN1cnJlbnQgbWVudVJlZiAqL1xuICBfbWVudVJlZjogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZjtcbiAgQElucHV0KCkgbHlNZW51VHJpZ2dlckZvcjogTHlNZW51IHwgTHlNZW51RGVwcmVjYXRlZCB8IFRlbXBsYXRlUmVmPGFueT47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBMeU92ZXJsYXlcbiAgKSB7fVxuXG4gIHRhcmdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdDogQ2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICBfaGFuZGxlQ2xpY2soZTogRXZlbnQpIHtcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICBpZiAodGhpcy5seU1lbnVUcmlnZ2VyRm9yIGluc3RhbmNlb2YgTHlNZW51RGVwcmVjYXRlZCkge1xuICAgICAgdGhpcy5seU1lbnVUcmlnZ2VyRm9yLnJvb3RNZW51ID0gdGhpcy50YXJnZXRQb3NpdGlvbigpO1xuICAgICAgdGhpcy5seU1lbnVUcmlnZ2VyRm9yLnRvZ2dsZU1lbnUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnRhcmdldFBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuX21lbnVSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMubHlNZW51VHJpZ2dlckZvciBhcyBUZW1wbGF0ZVJlZjxhbnk+LCB7XG4gICAgICAgICAgJGltcGxpY2l0OiB0aGlzXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgICAgICByaWdodDogbnVsbCxcbiAgICAgICAgICAgIGJvdHRvbTogbnVsbCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXRhY2guYmluZCh0aGlzKSxcbiAgICAgICAgICBob3N0OiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYucmVtb3ZlKCk7XG4gICAgICB0aGlzLl9tZW51UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5kZXRhY2goKTtcbiAgICB9XG4gIH1cblxufVxuXG5cbi8qKlxuICogQGV4YW1wbGVcbiAqIDxuZy10ZW1wbGF0ZSAjbWVudSBsZXQtTT5cbiAqICAgPGx5LW1lbnUgW3JlZl09XCJNXCI+XG4gKiAgICAgPGJ1dHRvbiBseS1tZW51LWl0ZW0gPm9wdCAxPC9idXR0b24+XG4gKiAgICAgPGJ1dHRvbiBseS1tZW51LWl0ZW0gW2x5TWVudVRyaWdnZXJGb3JdPVwic3ViTWVudVwiPm9wdCAyPC9idXR0b24+XG4gKiAgIDwvbHktbWVudT5cbiAqIDwvbmctdGVtcGxhdGU+XG4gKiA8bmctdGVtcGxhdGUgI3N1Yk1lbnU+XG4gKiAgIDxseS1tZW51PlxuICogICAgIDxidXR0b24gbHktbWVudS1pdGVtPm9wdCAxPC9idXR0b24+XG4gKiAgICAgPGJ1dHRvbiBseS1tZW51LWl0ZW0+b3B0IDI8L2J1dHRvbj5cbiAqICAgPC9seS1tZW51PlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqIDxidXR0b24gbHktYnV0dG9uIFtseU1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIj50b2dnbGUgbWVudTwvYnV0dG9uPlxuICovXG4iLCJpbXBvcnQgeyBMeU1lbnUsIEx5TWVudURlcHJlY2F0ZWQsIEx5TWVudVRyaWdnZXJGb3IsIEx5VGVtcGxhdGVNZW51LCBMeU1lbnVJdGVtIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlLCBMeERvbU1vZHVsZSwgTHlPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTHhEb21Nb2R1bGUsIEx5T3ZlcmxheU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeU1lbnUsIEx5TWVudUl0ZW0sIEx5TWVudURlcHJlY2F0ZWQsIEx5TWVudVRyaWdnZXJGb3JdLFxuICBkZWNsYXJhdGlvbnM6IFtMeU1lbnUsIEx5TWVudUl0ZW0sIEx5TWVudURlcHJlY2F0ZWQsIEx5TWVudVRyaWdnZXJGb3IsIEx5VGVtcGxhdGVNZW51XSxcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0NBcUNDOzs7OztJQW9CQyxZQUFtQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtLQUFLOzs7O0lBRTNELFFBQVE7S0FDUDs7Ozs7SUFDRCxJQUFJLENBQUMsUUFBMEI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN4Qzs7OztJQUNELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3RCOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JB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