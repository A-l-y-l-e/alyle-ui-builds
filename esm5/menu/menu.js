/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Component, ElementRef, Input, Output, Directive, TemplateRef, ViewChild, ViewContainerRef, EventEmitter, ChangeDetectorRef, Optional, Injector, HostListener, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition, keyframes, } from '@angular/animations';
import { DomService, Platform, LyOverlay, LyTheme2, shadowBuilder } from '@alyle/ui';
/** @typedef {?} */
var position;
export { position };
var Origin = /** @class */ (function () {
    function Origin() {
    }
    return Origin;
}());
export { Origin };
if (false) {
    /** @type {?} */
    Origin.prototype.horizontal;
    /** @type {?} */
    Origin.prototype.vertical;
}
var LyTemplateMenu = /** @class */ (function () {
    function LyTemplateMenu(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    LyTemplateMenu.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} template
     * @return {?}
     */
    LyTemplateMenu.prototype.tmpl = /**
     * @param {?} template
     * @return {?}
     */
    function (template) {
        this._vcr.createEmbeddedView(template);
    };
    /**
     * @return {?}
     */
    LyTemplateMenu.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        console.log('desst');
    };
    LyTemplateMenu.decorators = [
        { type: Component, args: [{
                    selector: 'ly-template-menu',
                    template: "\n  <div #container></div>\n  ",
                    styles: ["\n    :host {\n      position: absolute;\n      display: block;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    LyTemplateMenu.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    LyTemplateMenu.propDecorators = {
        _vcr: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }]
    };
    return LyTemplateMenu;
}());
export { LyTemplateMenu };
if (false) {
    /** @type {?} */
    LyTemplateMenu.prototype._vcr;
    /** @type {?} */
    LyTemplateMenu.prototype._viewContainerRef;
}
var LyMenuDeprecated = /** @class */ (function () {
    function LyMenuDeprecated(elementRef, _viewContainerRef, domService, cd, sanitizer) {
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
    LyMenuDeprecated.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['_targetOrigin']) {
            Promise.resolve(null).then(function () {
                if (true) {
                    // console.log('changes[target-origin]', changes['_targetOrigin']);
                }
            });
        }
    };
    /**
     * @return {?}
     */
    LyMenuDeprecated.prototype.updateTargetPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var vertical = '0%';
        /** @type {?} */
        var horizontal = '0%';
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
        var menuStyle = this.sanitizer.bypassSecurityTrustStyle("translate3d(" + horizontal + ", " + vertical + ", 0) scale3d(1, 1, 1)");
        this._targetPosition.next(/** @type {?} */ (menuStyle));
    };
    // get size
    /**
     * @param {?} _element
     * @return {?}
     */
    LyMenuDeprecated.prototype.target = /**
     * @param {?} _element
     * @return {?}
     */
    function (_element) {
        /** @type {?} */
        var element = _element;
        return {
            'width': element.offsetWidth || 0,
            'height': element.offsetHeight || 0,
            'left': element.offsetWidth || 0,
            'top': 0,
        };
    };
    Object.defineProperty(LyMenuDeprecated.prototype, "rootStylePosition", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var top = 0;
            /** @type {?} */
            var left = 0;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyMenuDeprecated.prototype, "rootStyle", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var menuPosition = this.rootMenu;
            /** @type {?} */
            var positionFinal = menuPosition;
            if (this._anchorOrigin) {
            }
            return positionFinal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyMenuDeprecated.prototype, "targetOrigin", {
        get: /**
         * @return {?}
         */
        function () {
            return (this._targetOrigin.horizontal === 'middle' ? 'center' : this._targetOrigin.horizontal) + " " + this._targetOrigin.vertical + " 0";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyMenuDeprecated.prototype.toggleMenu = /**
     * @return {?}
     */
    function () {
        this.opened === false ? this.showMenu() : this.hiddeMenu();
    };
    /**
     * @return {?}
     */
    LyMenuDeprecated.prototype.showMenu = /**
     * @return {?}
     */
    function () {
        this.menuAnimationsState = 'in';
        this.menuContentRef = this.domService.attach(this._viewContainerRef, LyTemplateMenu, this.templateRef);
        // this.menuContentElement = this.domService.getDomElementFromComponentRef(this.menuContentRef);
        // this.domService.addChild(this.menuContentElement);
        this.updateTargetPosition();
        this.opened = true;
        this.stateBg = true;
        this.open.emit(null);
    };
    /**
     * @return {?}
     */
    LyMenuDeprecated.prototype.hiddeMenu = /**
     * @return {?}
     */
    function () {
        this.close.emit(null);
        this.opened = false;
        this.stateBg = false;
        // this.menuAnimationsState = 'end';
        this._destroyMenu();
    };
    /**
     * @return {?}
     */
    LyMenuDeprecated.prototype._destroyMenu = /**
     * @return {?}
     */
    function () {
        // if (this.menuContentRef) {
        this.domService.destroyRef(this.menuContentRef, 0);
        // }
    };
    /**
     * @return {?}
     */
    LyMenuDeprecated.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LyMenuDeprecated.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LyMenuDeprecated.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
            this._destroyMenu();
        }
    };
    LyMenuDeprecated.decorators = [
        { type: Component, args: [{
                    selector: 'ly-menu-deprecated',
                    styles: [".ly-menu{display:inline-block;position:fixed;padding:8px 0;max-height:248px;overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000;opacity:0;min-width:84px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);box-shadow:rgba(0,0,0,.15) 0 2px 6px,rgba(0,0,0,.15) 0 1px 4px;border-radius:2px;transition:transform 175ms cubic-bezier(.23,1,.32,1),opacity 275ms ease-in,-webkit-transform 175ms cubic-bezier(.23,1,.32,1);will-change:opacity,transform;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ly-list-x{z-index:0;max-height:100%}.ly-menu /deep/ ly-menu{position:absolute}.ly-menu.ly-list{position:relative;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);transition:linear}:host.ly-list .ly-menu{position:relative;-webkit-transform:scale(1,1);transform:scale(1,1);transition:linear;opacity:1}:host.ly-list .ly-background-menu{pointer-events:none}.ly-menu.ly-menu-opened{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.ly-background-menu{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0);z-index:999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.ly-background-on{pointer-events:all!important;pointer-events:auto!important}::ng-deep button[ly-menu-item]{display:block;min-height:48px;border-radius:0;width:100%}"],
                    animations: [
                        trigger('menu', [
                            transition(':leave', animate('150ms 50ms linear', style({ opacity: 0 }))),
                            state('in', style({
                                opacity: 1
                            })),
                            transition(':enter', animate('100ms linear'))
                        ])
                    ],
                    template: "\n  <ng-template>\n    <div #_menu [@menu]=\"menuAnimationsState\"\n      class=\"ly-menu\"\n      bg=\"menu:bg\"\n      color=\"colorText\"\n      [style.transform-origin]=\"targetOrigin\"\n      [style.top.px]=\"rootStyle.top + rootStylePosition.top\"\n      [style.left.px]=\"rootStyle.left + rootStylePosition.left\"\n      [style.transform]=\"_targetPosition | async\">\n      <div class=\"ly-menu-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div\n    class=\"ly-background-menu ly-background-on\"\n    (click)=\"hiddeMenu()\"></div>\n  </ng-template>\n  ",
                    exportAs: 'lyMenuDeprecated',
                    preserveWhitespaces: false
                },] },
    ];
    /** @nocollapse */
    LyMenuDeprecated.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: DomService },
        { type: ChangeDetectorRef },
        { type: DomSanitizer }
    ]; };
    LyMenuDeprecated.propDecorators = {
        opened: [{ type: Input }],
        _anchorOrigin: [{ type: Input, args: ['anchor-origin',] }],
        _targetOrigin: [{ type: Input, args: ['target-origin',] }],
        _menuElement: [{ type: ViewChild, args: ['_menu',] }],
        templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
        open: [{ type: Output }],
        close: [{ type: Output }]
    };
    return LyMenuDeprecated;
}());
export { LyMenuDeprecated };
if (false) {
    /** @type {?} */
    LyMenuDeprecated.prototype.isIni;
    /** @type {?} */
    LyMenuDeprecated.prototype._color;
    /** @type {?} */
    LyMenuDeprecated.prototype.stateBg;
    /** @type {?} */
    LyMenuDeprecated.prototype.widthTarget;
    /** @type {?} */
    LyMenuDeprecated.prototype.heightTarget;
    /** @type {?} */
    LyMenuDeprecated.prototype.rootMenu;
    /** @type {?} */
    LyMenuDeprecated.prototype.xtemplateRef;
    /** @type {?} */
    LyMenuDeprecated.prototype.menuAnimationsState;
    /** @type {?} */
    LyMenuDeprecated.prototype.opened;
    /** @type {?} */
    LyMenuDeprecated.prototype._anchorOrigin;
    /** @type {?} */
    LyMenuDeprecated.prototype._targetOrigin;
    /** @type {?} */
    LyMenuDeprecated.prototype._menuElement;
    /** @type {?} */
    LyMenuDeprecated.prototype.templateRef;
    /** @type {?} */
    LyMenuDeprecated.prototype._targetPosition;
    /** @type {?} */
    LyMenuDeprecated.prototype.open;
    /** @type {?} */
    LyMenuDeprecated.prototype.close;
    /** @type {?} */
    LyMenuDeprecated.prototype.menuContentElement;
    /** @type {?} */
    LyMenuDeprecated.prototype.menuContentRef;
    /** @type {?} */
    LyMenuDeprecated.prototype.elementRef;
    /** @type {?} */
    LyMenuDeprecated.prototype._viewContainerRef;
    /** @type {?} */
    LyMenuDeprecated.prototype.domService;
    /** @type {?} */
    LyMenuDeprecated.prototype.cd;
    /** @type {?} */
    LyMenuDeprecated.prototype.sanitizer;
}
/** @type {?} */
var menuStyles = function (theme) { return ({
    root: {
        background: theme.background.primary,
        borderRadius: '2px',
        boxShadow: shadowBuilder(4),
        display: 'inline-block',
        paddingTop: '8px',
        paddingBottom: '8px',
        transformOrigin: 'left top 0px'
    }
}); };
var ɵ0 = menuStyles;
/**
 * Menu container
 */
var LyMenu = /** @class */ (function () {
    function LyMenu(theme, _el) {
        this.theme = theme;
        this._el = _el;
        this.classes = this.theme.addStyleSheet(menuStyles, 'lyMenu');
        this._el.nativeElement.classList.add(this.classes.root);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    LyMenu.prototype.endAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'void') {
            this.ref.destroy();
        }
    };
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
    LyMenu.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef }
    ]; };
    LyMenu.propDecorators = {
        ref: [{ type: Input }],
        menuEnter: [{ type: HostBinding, args: ['@menuEnter',] }],
        menuLeave2: [{ type: HostBinding, args: ['@menuLeave',] }],
        endAnimation: [{ type: HostListener, args: ['@menuLeave.done', ['$event'],] }]
    };
    return LyMenu;
}());
export { LyMenu };
if (false) {
    /** @type {?} */
    LyMenu.prototype.classes;
    /**
     * Destroy menu
     * @type {?}
     */
    LyMenu.prototype.destroy;
    /** @type {?} */
    LyMenu.prototype.ref;
    /** @type {?} */
    LyMenu.prototype.menuEnter;
    /** @type {?} */
    LyMenu.prototype.menuLeave2;
    /** @type {?} */
    LyMenu.prototype.theme;
    /** @type {?} */
    LyMenu.prototype._el;
}
/** @type {?} */
var menuItemStyles = ({
    display: 'block',
    minHeight: '48px',
    borderRadius: 0,
    width: '100%'
});
var LyMenuItem = /** @class */ (function () {
    function LyMenuItem(_menu, el, theme) {
        this._menu = _menu;
        theme.addStyle('lyMenuItem', menuItemStyles, el.nativeElement);
    }
    /**
     * @return {?}
     */
    LyMenuItem.prototype._click = /**
     * @return {?}
     */
    function () {
        if (this._menu.ref) {
            this._menu.ref._menuRef.detach();
        }
    };
    LyMenuItem.decorators = [
        { type: Directive, args: [{
                    selector: '[ly-menu-item]'
                },] },
    ];
    /** @nocollapse */
    LyMenuItem.ctorParameters = function () { return [
        { type: LyMenu, decorators: [{ type: Optional }] },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyMenuItem.propDecorators = {
        _click: [{ type: HostListener, args: ['click',] }]
    };
    return LyMenuItem;
}());
export { LyMenuItem };
if (false) {
    /** @type {?} */
    LyMenuItem.prototype._menu;
}
var LyMenuTriggerFor = /** @class */ (function () {
    function LyMenuTriggerFor(elementRef, _injector, overlay) {
        this.elementRef = elementRef;
        this._injector = _injector;
        this.overlay = overlay;
    }
    /**
     * @return {?}
     */
    LyMenuTriggerFor.prototype.targetPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        /** @type {?} */
        var rect = element.getBoundingClientRect();
        return rect;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    LyMenuTriggerFor.prototype._handleClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
                var rect = this.targetPosition();
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
    };
    /**
     * @return {?}
     */
    LyMenuTriggerFor.prototype.detach = /**
     * @return {?}
     */
    function () {
        this._menuRef.detach();
    };
    /**
     * @return {?}
     */
    LyMenuTriggerFor.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this._menuRef) {
            this._menuRef.remove();
            this._menuRef = null;
        }
    };
    /**
     * @return {?}
     */
    LyMenuTriggerFor.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._menuRef) {
            this._menuRef.detach();
        }
    };
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
    LyMenuTriggerFor.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Injector },
        { type: LyOverlay }
    ]; };
    LyMenuTriggerFor.propDecorators = {
        lyMenuTriggerFor: [{ type: Input }]
    };
    return LyMenuTriggerFor;
}());
export { LyMenuTriggerFor };
if (false) {
    /**
     * Current menuRef
     * @type {?}
     */
    LyMenuTriggerFor.prototype._menuRef;
    /** @type {?} */
    LyMenuTriggerFor.prototype.lyMenuTriggerFor;
    /** @type {?} */
    LyMenuTriggerFor.prototype.elementRef;
    /** @type {?} */
    LyMenuTriggerFor.prototype._injector;
    /** @type {?} */
    LyMenuTriggerFor.prototype.overlay;
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
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9tZW51LyIsInNvdXJjZXMiOlsibWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFHVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUVoQixZQUFZLEVBRVosaUJBQWlCLEVBRWpCLFFBQVEsRUFDUixRQUFRLEVBQ1IsWUFBWSxFQUNaLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUEwQixRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0FBRzdHLElBQUE7OztpQkFsQ0E7SUFxQ0MsQ0FBQTtBQUhELGtCQUdDOzs7Ozs7OztJQW9CQyx3QkFBbUIsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7S0FBSzs7OztJQUUzRCxpQ0FBUTs7O0lBQVI7S0FDQzs7Ozs7SUFDRCw2QkFBSTs7OztJQUFKLFVBQUssUUFBMEI7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN4Qzs7OztJQUNELG9DQUFXOzs7SUFBWDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEI7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxF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LENBQUM7U0FDdEI7S0FDRjs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO0tBQ0Y7O2dCQWhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjs7b0JBRTlCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsc0JBQXNCO3FCQUNsQztpQkFDRjs7OztnQkFsWEMsVUFBVTtnQkFlVixRQUFRO2dCQWFxQixTQUFTOzs7bUNBMFZyQyxLQUFLOzsyQkF6WFI7O1NBc1hhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBEaXJlY3RpdmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9wdGlvbmFsLFxuICBJbmplY3RvcixcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtcbiAgdHJpZ2dlcixcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uLFxuICBrZXlmcmFtZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRG9tU2VydmljZSwgUGxhdGZvcm0sIEx5T3ZlcmxheSwgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgTHlUaGVtZTIsIHNoYWRvd0J1aWxkZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgdHlwZSBwb3NpdGlvbiA9ICdsZWZ0JyB8ICdyaWdodCcgfCAndG9wJyB8ICdib3R0b20nIHwgJ2NlbnRlcicgfCAnbWlkZGxlJztcbmV4cG9ydCBjbGFzcyBPcmlnaW4ge1xuICBob3Jpem9udGFsOiBwb3NpdGlvbjtcbiAgdmVydGljYWw6IHBvc2l0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10ZW1wbGF0ZS1tZW51JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRlbXBsYXRlTWVudSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIF92Y3I6IFZpZXdDb250YWluZXJSZWY7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgdG1wbCh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuX3Zjci5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKCdkZXNzdCcpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW1lbnUtZGVwcmVjYXRlZCcsXG4gIHN0eWxlczogW2AubHktbWVudXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpmaXhlZDtwYWRkaW5nOjhweCAwO21heC1oZWlnaHQ6MjQ4cHg7b3ZlcmZsb3c6YXV0bzstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAwO29wYWNpdHk6MDttaW4td2lkdGg6ODRweDt3aWR0aDotd2Via2l0LWZpdC1jb250ZW50O3dpZHRoOi1tb3otZml0LWNvbnRlbnQ7d2lkdGg6Zml0LWNvbnRlbnQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApO2JveC1zaGFkb3c6cmdiYSgwLDAsMCwuMTUpIDAgMnB4IDZweCxyZ2JhKDAsMCwwLC4xNSkgMCAxcHggNHB4O2JvcmRlci1yYWRpdXM6MnB4O3RyYW5zaXRpb246dHJhbnNmb3JtIDE3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSksb3BhY2l0eSAyNzVtcyBlYXNlLWluLC13ZWJraXQtdHJhbnNmb3JtIDE3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSk7d2lsbC1jaGFuZ2U6b3BhY2l0eSx0cmFuc2Zvcm07Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5seS1saXN0LXh7ei1pbmRleDowO21heC1oZWlnaHQ6MTAwJX0ubHktbWVudSAvZGVlcC8gbHktbWVudXtwb3NpdGlvbjphYnNvbHV0ZX0ubHktbWVudS5seS1saXN0e3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2l0aW9uOmxpbmVhcn06aG9zdC5seS1saXN0IC5seS1tZW51e3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNpdGlvbjpsaW5lYXI7b3BhY2l0eToxfTpob3N0Lmx5LWxpc3QgLmx5LWJhY2tncm91bmQtbWVudXtwb2ludGVyLWV2ZW50czpub25lfS5seS1tZW51Lmx5LW1lbnUtb3BlbmVkey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9Lmx5LWJhY2tncm91bmQtbWVudXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7ei1pbmRleDo5OTk7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3BvaW50ZXItZXZlbnRzOm5vbmV9Lmx5LWJhY2tncm91bmQtb257cG9pbnRlci1ldmVudHM6YWxsIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czphdXRvIWltcG9ydGFudH06Om5nLWRlZXAgYnV0dG9uW2x5LW1lbnUtaXRlbV17ZGlzcGxheTpibG9jazttaW4taGVpZ2h0OjQ4cHg7Ym9yZGVyLXJhZGl1czowO3dpZHRoOjEwMCV9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdtZW51JywgW1xuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgYW5pbWF0ZSgnMTUwbXMgNTBtcyBsaW5lYXInLCBzdHlsZSh7b3BhY2l0eTogMH0pKSksXG4gICAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy10ZW1wbGF0ZT5cbiAgICA8ZGl2ICNfbWVudSBbQG1lbnVdPVwibWVudUFuaW1hdGlvbnNTdGF0ZVwiXG4gICAgICBjbGFzcz1cImx5LW1lbnVcIlxuICAgICAgYmc9XCJtZW51OmJnXCJcbiAgICAgIGNvbG9yPVwiY29sb3JUZXh0XCJcbiAgICAgIFtzdHlsZS50cmFuc2Zvcm0tb3JpZ2luXT1cInRhcmdldE9yaWdpblwiXG4gICAgICBbc3R5bGUudG9wLnB4XT1cInJvb3RTdHlsZS50b3AgKyByb290U3R5bGVQb3NpdGlvbi50b3BcIlxuICAgICAgW3N0eWxlLmxlZnQucHhdPVwicm9vdFN0eWxlLmxlZnQgKyByb290U3R5bGVQb3NpdGlvbi5sZWZ0XCJcbiAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiX3RhcmdldFBvc2l0aW9uIHwgYXN5bmNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJseS1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgIGNsYXNzPVwibHktYmFja2dyb3VuZC1tZW51IGx5LWJhY2tncm91bmQtb25cIlxuICAgIChjbGljayk9XCJoaWRkZU1lbnUoKVwiPjwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBleHBvcnRBczogJ2x5TWVudURlcHJlY2F0ZWQnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVEZXByZWNhdGVkIGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGlzSW5pID0gZmFsc2U7XG4gIF9jb2xvcjogc3RyaW5nO1xuICBzdGF0ZUJnID0gZmFsc2U7XG4gIHdpZHRoVGFyZ2V0ID0gMDtcbiAgaGVpZ2h0VGFyZ2V0ID0gMDtcblxuICByb290TWVudTogYW55ID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICB9O1xuICB4dGVtcGxhdGVSZWY6IGFueTtcbiAgbWVudUFuaW1hdGlvbnNTdGF0ZTtcbiAgQElucHV0KCkgb3BlbmVkID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdhbmNob3Itb3JpZ2luJykgX2FuY2hvck9yaWdpbjogT3JpZ2luID0ge2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnfTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3RhcmdldC1vcmlnaW4nKSBfdGFyZ2V0T3JpZ2luOiBPcmlnaW4gPSB7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9O1xuICBAVmlld0NoaWxkKCdfbWVudScpIF9tZW51RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIF90YXJnZXRQb3NpdGlvbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG5cbiAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIG1lbnVDb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgbWVudUNvbnRlbnRSZWY7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydfdGFyZ2V0T3JpZ2luJ10pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlc1t0YXJnZXQtb3JpZ2luXScsIGNoYW5nZXNbJ190YXJnZXRPcmlnaW4nXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRhcmdldFBvc2l0aW9uKCkge1xuICAgIGxldCB2ZXJ0aWNhbCA9ICcwJScsXG4gICAgaG9yaXpvbnRhbCA9ICcwJSc7XG4gICAgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgaG9yaXpvbnRhbCA9ICctNTAlJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgICBob3Jpem9udGFsID0gJy0xMDAlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHZlcnRpY2FsID0gJy01MCUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09PSAnYm90dG9tJykge1xuICAgICAgdmVydGljYWwgPSAnLTEwMCUnO1xuICAgIH1cbiAgICBjb25zdCBtZW51U3R5bGUgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHRyYW5zbGF0ZTNkKCR7aG9yaXpvbnRhbH0sICR7dmVydGljYWx9LCAwKSBzY2FsZTNkKDEsIDEsIDEpYCk7XG4gICAgdGhpcy5fdGFyZ2V0UG9zaXRpb24ubmV4dChtZW51U3R5bGUgYXMgc3RyaW5nKTtcbiAgfVxuICAvLyBnZXQgc2l6ZVxuICB0YXJnZXQoX2VsZW1lbnQ6IGFueSkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICd3aWR0aCc6IGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMCxcbiAgICAgICdoZWlnaHQnOiBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAwLFxuICAgICAgJ2xlZnQnOiBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDAsXG4gICAgICAndG9wJzogMCxcbiAgICB9O1xuICB9XG4gIGdldCByb290U3R5bGVQb3NpdGlvbigpIHtcbiAgICBsZXQgdG9wOiBhbnkgPSAwO1xuICAgIGxldCBsZWZ0OiBhbnkgPSAwO1xuICAgIC8vIGxldCB0b3BUYXJnZXQ6IGFueSA9IDA7XG4gICAgLy8gbGV0IGxlZnRUYXJnZXQ6IGFueSA9IDA7XG5cbiAgICAvLyBmb3IgX2FuY2hvck9yaWdpblxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInKSB7XG4gICAgICAvLyBhbmNob3Igb3JpZ2luXG4gICAgICB0b3AgPSAodGhpcy5yb290TWVudS5oZWlnaHQgLyAyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRvcCA9ICh0aGlzLnJvb3RNZW51LmhlaWdodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScpIHtcbiAgICAgIC8vIGFuY2hvciBvcmlnaW5cbiAgICAgIGxlZnQgPSAodGhpcy5yb290TWVudS53aWR0aCAvIDIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLmhvcml6b250YWwgPT09ICdyaWdodCcpIHtcbiAgICAgIGxlZnQgPSAodGhpcy5yb290TWVudS53aWR0aCk7XG4gICAgfVxuXG4gICAgLy8gLy8gZm9yIHRhcmdldCBvcmlnaW5nXG4gICAgLy8gaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PSAnY2VudGVyJykge1xuICAgIC8vICAgLy8gYW5jaG9yIG9yaWdpblxuICAgIC8vICAgdG9wVGFyZ2V0ID0gLSh0aGlzLmhlaWdodFRhcmdldCAvIDIpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09ICdib3R0b20nKSB7XG4gICAgLy8gICB0b3BUYXJnZXQgPSAtKHRoaXMuaGVpZ2h0VGFyZ2V0KTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09ICdtaWRkbGUnKSB7XG4gICAgLy8gICAvLyBsZWZ0VGFyZ2V0ID0gKHRoaXMudGFyZ2V0KHRoaXMuX21lbnVFbGVtZW50KS53aWR0aCAvIDIpO1xuICAgIC8vICAgbGVmdFRhcmdldCA9IC0odGhpcy53aWR0aFRhcmdldCAvIDIpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT0gJ3JpZ2h0Jykge1xuICAgIC8vICAgLy8gbGVmdFRhcmdldCA9ICh0aGlzLnRhcmdldCh0aGlzLl9tZW51RWxlbWVudCkud2lkdGgpO1xuICAgIC8vICAgbGVmdFRhcmdldCA9IC0odGhpcy53aWR0aFRhcmdldCk7XG4gICAgLy8gfVxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRvcCxcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAvLyB0b3BUYXJnZXQ6IHRvcFRhcmdldCxcbiAgICAgIC8vIGxlZnRUYXJnZXQ6IGxlZnRUYXJnZXQsXG4gICAgfTtcbiAgfVxuICBnZXQgcm9vdFN0eWxlKCk6IGFueSB7XG4gICAgY29uc3QgbWVudVBvc2l0aW9uOiBhbnkgPSB0aGlzLnJvb3RNZW51O1xuICAgIGNvbnN0IHBvc2l0aW9uRmluYWw6IGFueSA9IG1lbnVQb3NpdGlvbjtcblxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4pIHtcblxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uRmluYWw7XG4gIH1cbiAgZ2V0IHRhcmdldE9yaWdpbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtcbiAgICAgIHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJyA/ICdjZW50ZXInIDogdGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWxcbiAgICB9ICR7dGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsfSAwYDtcbiAgfVxuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMub3BlbmVkID09PSBmYWxzZSA/IHRoaXMuc2hvd01lbnUoKSA6IHRoaXMuaGlkZGVNZW51KCk7XG4gIH1cbiAgc2hvd01lbnUoKSB7XG4gICAgdGhpcy5tZW51QW5pbWF0aW9uc1N0YXRlID0gJ2luJztcbiAgICB0aGlzLm1lbnVDb250ZW50UmVmID0gdGhpcy5kb21TZXJ2aWNlLmF0dGFjaDxMeVRlbXBsYXRlTWVudT4odGhpcy5fdmlld0NvbnRhaW5lclJlZiwgTHlUZW1wbGF0ZU1lbnUsIHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIC8vIHRoaXMubWVudUNvbnRlbnRFbGVtZW50ID0gdGhpcy5kb21TZXJ2aWNlLmdldERvbUVsZW1lbnRGcm9tQ29tcG9uZW50UmVmKHRoaXMubWVudUNvbnRlbnRSZWYpO1xuICAgIC8vIHRoaXMuZG9tU2VydmljZS5hZGRDaGlsZCh0aGlzLm1lbnVDb250ZW50RWxlbWVudCk7XG4gICAgdGhpcy51cGRhdGVUYXJnZXRQb3NpdGlvbigpO1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlQmcgPSB0cnVlO1xuICAgIHRoaXMub3Blbi5lbWl0KG51bGwpO1xuICB9XG4gIGhpZGRlTWVudSgpIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlQmcgPSBmYWxzZTtcbiAgICAvLyB0aGlzLm1lbnVBbmltYXRpb25zU3RhdGUgPSAnZW5kJztcbiAgICB0aGlzLl9kZXN0cm95TWVudSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveU1lbnUoKTogdm9pZCB7XG4gICAgLy8gaWYgKHRoaXMubWVudUNvbnRlbnRSZWYpIHtcbiAgICAgIHRoaXMuZG9tU2VydmljZS5kZXN0cm95UmVmKHRoaXMubWVudUNvbnRlbnRSZWYsIDApO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZG9tU2VydmljZTogRG9tU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkgeyB9XG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9kZXN0cm95TWVudSgpO1xuICAgIH1cbiAgfVxuXG59XG5cbmNvbnN0IG1lbnVTdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LFxuICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQpLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBhZGRpbmdUb3A6ICc4cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4cHgnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wIDBweCdcbiAgfVxufSk7XG5cbi8qKiBNZW51IGNvbnRhaW5lciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudScsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdtZW51RW50ZXInLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgICAgICAgfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICAgIC8vIHN0YXRlKCd2b2lkJywgc3R5bGUoe1xuICAgICAgLy8gICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ1xuICAgICAgLy8gfSkpLFxuICAgICAgLy8gdHJhbnNpdGlvbigndm9pZCA9PiBlbnRlcicsIGdyb3VwKFtcbiAgICAgIC8vICAgcXVlcnkoJ1tseS1tZW51LWl0ZW1dJywgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJywgc3R5bGUoe29wYWNpdHk6IDF9KSkpLFxuICAgICAgLy8gICBhbmltYXRlKCcxMjBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsIHN0eWxlKHt0cmFuc2Zvcm06ICdzY2FsZSgxKSd9KSksXG4gICAgICAvLyBdKSksXG4gICAgXSksXG4gICAgdHJpZ2dlcignbWVudUxlYXZlJywgW1xuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgYW5pbWF0ZSgnMTAwbXMgMjVtcyBsaW5lYXInLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpKVxuICAgIF0pXG4gIF0sXG4gIHN0eWxlczogWyc6aG9zdCB7ZGlzcGxheTogYmxvY2s7IHBvaW50ZXItZXZlbnRzOiBhbGw7fSddLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBleHBvcnRBczogJ2x5TWVudSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51IHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChtZW51U3R5bGVzLCAnbHlNZW51Jyk7XG4gIC8qKiBEZXN0cm95IG1lbnUgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbiAgQElucHV0KCkgcmVmOiBMeU1lbnVUcmlnZ2VyRm9yO1xuICBASG9zdEJpbmRpbmcoJ0BtZW51RW50ZXInKSBtZW51RW50ZXI7XG4gIEBIb3N0QmluZGluZygnQG1lbnVMZWF2ZScpIG1lbnVMZWF2ZTI7XG4gIEBIb3N0TGlzdGVuZXIoJ0BtZW51TGVhdmUuZG9uZScsIFsnJGV2ZW50J10pIGVuZEFuaW1hdGlvbihlKSB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICAgLy8gcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICAvLyBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgLy8gcHJpdmF0ZSBoajogTHlNZW51VHJpZ2dlckZvclxuICAgIC8vIEBJbmplY3QoUHJvdmlkZXJNZW51KSBwcm92aWRlck1lbnU6IFByb3ZpZGVyTWVudVxuICApIHtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbn1cblxuY29uc3QgbWVudUl0ZW1TdHlsZXMgPSAoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgYm9yZGVyUmFkaXVzOiAwLFxuICB3aWR0aDogJzEwMCUnXG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LW1lbnUtaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudUl0ZW0ge1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9jbGljaygpIHtcbiAgICBpZiAodGhpcy5fbWVudS5yZWYpIHtcbiAgICAgIHRoaXMuX21lbnUucmVmLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF9tZW51OiBMeU1lbnUsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoZW1lLmFkZFN0eWxlKCdseU1lbnVJdGVtJywgbWVudUl0ZW1TdHlsZXMsIGVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseU1lbnVUcmlnZ2VyRm9yXScsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudVRyaWdnZXJGb3IgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQ3VycmVudCBtZW51UmVmICovXG4gIF9tZW51UmVmOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmO1xuICBASW5wdXQoKSBseU1lbnVUcmlnZ2VyRm9yOiBMeU1lbnUgfCBMeU1lbnVEZXByZWNhdGVkIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIG92ZXJsYXk6IEx5T3ZlcmxheVxuICApIHt9XG5cbiAgdGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljayhlOiBFdmVudCkge1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIGlmICh0aGlzLmx5TWVudVRyaWdnZXJGb3IgaW5zdGFuY2VvZiBMeU1lbnVEZXByZWNhdGVkKSB7XG4gICAgICB0aGlzLmx5TWVudVRyaWdnZXJGb3Iucm9vdE1lbnUgPSB0aGlzLnRhcmdldFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLmx5TWVudVRyaWdnZXJGb3IudG9nZ2xlTWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMudGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5fbWVudVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5seU1lbnVUcmlnZ2VyRm9yIGFzIFRlbXBsYXRlUmVmPGFueT4sIHtcbiAgICAgICAgICAkaW1wbGljaXQ6IHRoaXNcbiAgICAgICAgfSwge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgICAgIHJpZ2h0OiBudWxsLFxuICAgICAgICAgICAgYm90dG9tOiBudWxsLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm5EZXN0cm95OiB0aGlzLmRldGFjaC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGhvc3Q6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuLyoqXG4gKiBUT0RPOiBtZW51XG4gKiBAZXhhbXBsZSBmYWlsXG4gKiA8bmctdGVtcGxhdGUgI21lbnU+XG4gKiAgIDxseS1tZW51PlxuICogICAgIDxidXR0b24gbHktbWVudS1pdGVtID5vcHQgMTwvYnV0dG9uPlxuICogICAgIDxidXR0b24gbHktbWVudS1pdGVtIFtseU1lbnVUcmlnZ2VyRm9yXT1cInN1Yk1lbnVcIj5vcHQgMjwvYnV0dG9uPlxuICogICA8L2x5LW1lbnU+XG4gKiA8L25nLXRlbXBsYXRlPlxuICogPG5nLXRlbXBsYXRlICNzdWJNZW51PlxuICogICA8bHktbWVudT5cbiAqICAgICA8YnV0dG9uIGx5LW1lbnUtaXRlbT5vcHQgMTwvYnV0dG9uPlxuICogICAgIDxidXR0b24gbHktbWVudS1pdGVtPm9wdCAyPC9idXR0b24+XG4gKiAgIDwvbHktbWVudT5cbiAqIDwvbmctdGVtcGxhdGU+XG4gKiA8YnV0dG9uIGx5LWJ1dHRvbiBbbHlNZW51VHJpZ2dlckZvcl09XCJtZW51XCI+dG9nZ2xlIG1lbnU8L2J1dHRvbj5cbiAqIEBleGFtcGxlIDJcbiAqIDxuZy10ZW1wbGF0ZSAjbWVudSBsZXQtbWVudT5cbiAqICAgPGx5LW1lbnUgZGVzdHJveU9uQ2xpY2s9XCJtZW51XCI+XG4gKiAgICAgPGJ1dHRvbiBseS1tZW51LWl0ZW0gPm9wdCAxPC9idXR0b24+XG4gKiAgICAgPGJ1dHRvbiBseS1tZW51LWl0ZW0gW2x5TWVudVRyaWdnZXJGb3JdPVwic3ViTWVudVwiPm9wdCAyPC9idXR0b24+XG4gKiAgIDwvbHktbWVudT5cbiAqIDwvbmctdGVtcGxhdGU+XG4gKiA8bmctdGVtcGxhdGUgI3N1Yk1lbnU+XG4gKiAgIDxseS1tZW51PlxuICogICAgIDxidXR0b24gbHktbWVudS1pdGVtPm9wdCAxPC9idXR0b24+XG4gKiAgICAgPGJ1dHRvbiBseS1tZW51LWl0ZW0+b3B0IDI8L2J1dHRvbj5cbiAqICAgPC9seS1tZW51PlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqIDxidXR0b24gbHktYnV0dG9uIFtseU1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIj50b2dnbGUgbWVudTwvYnV0dG9uPlxuICovXG4iXX0=