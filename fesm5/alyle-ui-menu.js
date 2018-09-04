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
var Origin = /** @class */ (function () {
    function Origin() {
    }
    return Origin;
}());
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
            if (this._anchorOrigin) ;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyMenuModule = /** @class */ (function () {
    function LyMenuModule() {
    }
    LyMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, LyCommonModule, LxDomModule, LyOverlayModule],
                    exports: [LyMenu, LyMenuItem, LyMenuDeprecated, LyMenuTriggerFor],
                    declarations: [LyMenu, LyMenuItem, LyMenuDeprecated, LyMenuTriggerFor, LyTemplateMenu],
                },] },
    ];
    return LyMenuModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS50cyIsIm5nOi8vQGFseWxlL3VpL21lbnUvbWVudS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIERpcmVjdGl2ZSxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT3B0aW9uYWwsXG4gIEluamVjdG9yLFxuICBIb3N0TGlzdGVuZXIsXG4gIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG4gIGtleWZyYW1lcyxcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBEb21TZXJ2aWNlLCBQbGF0Zm9ybSwgTHlPdmVybGF5LCBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLCBMeVRoZW1lMiwgc2hhZG93QnVpbGRlciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCB0eXBlIHBvc2l0aW9uID0gJ2xlZnQnIHwgJ3JpZ2h0JyB8ICd0b3AnIHwgJ2JvdHRvbScgfCAnY2VudGVyJyB8ICdtaWRkbGUnO1xuZXhwb3J0IGNsYXNzIE9yaWdpbiB7XG4gIGhvcml6b250YWw6IHBvc2l0aW9uO1xuICB2ZXJ0aWNhbDogcG9zaXRpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRlbXBsYXRlLW1lbnUnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNjb250YWluZXI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGVtcGxhdGVNZW51IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgX3ZjcjogVmlld0NvbnRhaW5lclJlZjtcbiAgY29uc3RydWN0b3IocHVibGljIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICB0bXBsKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fdmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc29sZS5sb2coJ2Rlc3N0Jyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudS1kZXByZWNhdGVkJyxcbiAgc3R5bGVzOiBbYC5seS1tZW51e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmZpeGVkO3BhZGRpbmc6OHB4IDA7bWF4LWhlaWdodDoyNDhweDtvdmVyZmxvdzphdXRvOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDA7b3BhY2l0eTowO21pbi13aWR0aDo4NHB4O3dpZHRoOi13ZWJraXQtZml0LWNvbnRlbnQ7d2lkdGg6LW1vei1maXQtY29udGVudDt3aWR0aDpmaXQtY29udGVudDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLC4xNSkgMCAycHggNnB4LHJnYmEoMCwwLDAsLjE1KSAwIDFweCA0cHg7Ym9yZGVyLXJhZGl1czoycHg7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSxvcGFjaXR5IDI3NW1zIGVhc2UtaW4sLXdlYmtpdC10cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTt3aWxsLWNoYW5nZTpvcGFjaXR5LHRyYW5zZm9ybTtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lmx5LWxpc3QteHt6LWluZGV4OjA7bWF4LWhlaWdodDoxMDAlfS5seS1tZW51IC9kZWVwLyBseS1tZW51e3Bvc2l0aW9uOmFic29sdXRlfS5seS1tZW51Lmx5LWxpc3R7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zaXRpb246bGluZWFyfTpob3N0Lmx5LWxpc3QgLmx5LW1lbnV7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2l0aW9uOmxpbmVhcjtvcGFjaXR5OjF9Omhvc3QubHktbGlzdCAubHktYmFja2dyb3VuZC1tZW51e3BvaW50ZXItZXZlbnRzOm5vbmV9Lmx5LW1lbnUubHktbWVudS1vcGVuZWR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO29wYWNpdHk6MX0ubHktYmFja2dyb3VuZC1tZW51e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTt6LWluZGV4Ojk5OTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7cG9pbnRlci1ldmVudHM6bm9uZX0ubHktYmFja2dyb3VuZC1vbntwb2ludGVyLWV2ZW50czphbGwhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOmF1dG8haW1wb3J0YW50fTo6bmctZGVlcCBidXR0b25bbHktbWVudS1pdGVtXXtkaXNwbGF5OmJsb2NrO21pbi1oZWlnaHQ6NDhweDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJX1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ21lbnUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBhbmltYXRlKCcxNTBtcyA1MG1zIGxpbmVhcicsIHN0eWxlKHtvcGFjaXR5OiAwfSkpKSxcbiAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJykpXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLXRlbXBsYXRlPlxuICAgIDxkaXYgI19tZW51IFtAbWVudV09XCJtZW51QW5pbWF0aW9uc1N0YXRlXCJcbiAgICAgIGNsYXNzPVwibHktbWVudVwiXG4gICAgICBiZz1cIm1lbnU6YmdcIlxuICAgICAgY29sb3I9XCJjb2xvclRleHRcIlxuICAgICAgW3N0eWxlLnRyYW5zZm9ybS1vcmlnaW5dPVwidGFyZ2V0T3JpZ2luXCJcbiAgICAgIFtzdHlsZS50b3AucHhdPVwicm9vdFN0eWxlLnRvcCArIHJvb3RTdHlsZVBvc2l0aW9uLnRvcFwiXG4gICAgICBbc3R5bGUubGVmdC5weF09XCJyb290U3R5bGUubGVmdCArIHJvb3RTdHlsZVBvc2l0aW9uLmxlZnRcIlxuICAgICAgW3N0eWxlLnRyYW5zZm9ybV09XCJfdGFyZ2V0UG9zaXRpb24gfCBhc3luY1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImx5LW1lbnUtY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgY2xhc3M9XCJseS1iYWNrZ3JvdW5kLW1lbnUgbHktYmFja2dyb3VuZC1vblwiXG4gICAgKGNsaWNrKT1cImhpZGRlTWVudSgpXCI+PC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGV4cG9ydEFzOiAnbHlNZW51RGVwcmVjYXRlZCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudURlcHJlY2F0ZWQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaXNJbmkgPSBmYWxzZTtcbiAgX2NvbG9yOiBzdHJpbmc7XG4gIHN0YXRlQmcgPSBmYWxzZTtcbiAgd2lkdGhUYXJnZXQgPSAwO1xuICBoZWlnaHRUYXJnZXQgPSAwO1xuXG4gIHJvb3RNZW51OiBhbnkgPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gIH07XG4gIHh0ZW1wbGF0ZVJlZjogYW55O1xuICBtZW51QW5pbWF0aW9uc1N0YXRlO1xuICBASW5wdXQoKSBvcGVuZWQgPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ2FuY2hvci1vcmlnaW4nKSBfYW5jaG9yT3JpZ2luOiBPcmlnaW4gPSB7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgndGFyZ2V0LW9yaWdpbicpIF90YXJnZXRPcmlnaW46IE9yaWdpbiA9IHtob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAndG9wJ307XG4gIEBWaWV3Q2hpbGQoJ19tZW51JykgX21lbnVFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgX3RhcmdldFBvc2l0aW9uOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblxuICBAT3V0cHV0KCkgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgbWVudUNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBtZW51Q29udGVudFJlZjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ190YXJnZXRPcmlnaW4nXSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzW3RhcmdldC1vcmlnaW5dJywgY2hhbmdlc1snX3RhcmdldE9yaWdpbiddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgbGV0IHZlcnRpY2FsID0gJzAlJyxcbiAgICBob3Jpem9udGFsID0gJzAlJztcbiAgICBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnKSB7XG4gICAgICBob3Jpem9udGFsID0gJy01MCUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT09ICdyaWdodCcpIHtcbiAgICAgIGhvcml6b250YWwgPSAnLTEwMCUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09PSAnY2VudGVyJykge1xuICAgICAgdmVydGljYWwgPSAnLTUwJSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgICB2ZXJ0aWNhbCA9ICctMTAwJSc7XG4gICAgfVxuICAgIGNvbnN0IG1lbnVTdHlsZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgdHJhbnNsYXRlM2QoJHtob3Jpem9udGFsfSwgJHt2ZXJ0aWNhbH0sIDApIHNjYWxlM2QoMSwgMSwgMSlgKTtcbiAgICB0aGlzLl90YXJnZXRQb3NpdGlvbi5uZXh0KG1lbnVTdHlsZSBhcyBzdHJpbmcpO1xuICB9XG4gIC8vIGdldCBzaXplXG4gIHRhcmdldChfZWxlbWVudDogYW55KSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBfZWxlbWVudDtcbiAgICByZXR1cm4ge1xuICAgICAgJ3dpZHRoJzogZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwLFxuICAgICAgJ2hlaWdodCc6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDAsXG4gICAgICAnbGVmdCc6IGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMCxcbiAgICAgICd0b3AnOiAwLFxuICAgIH07XG4gIH1cbiAgZ2V0IHJvb3RTdHlsZVBvc2l0aW9uKCkge1xuICAgIGxldCB0b3A6IGFueSA9IDA7XG4gICAgbGV0IGxlZnQ6IGFueSA9IDA7XG4gICAgLy8gbGV0IHRvcFRhcmdldDogYW55ID0gMDtcbiAgICAvLyBsZXQgbGVmdFRhcmdldDogYW55ID0gMDtcblxuICAgIC8vIGZvciBfYW5jaG9yT3JpZ2luXG4gICAgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIC8vIGFuY2hvciBvcmlnaW5cbiAgICAgIHRvcCA9ICh0aGlzLnJvb3RNZW51LmhlaWdodCAvIDIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSAnYm90dG9tJykge1xuICAgICAgdG9wID0gKHRoaXMucm9vdE1lbnUuaGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgLy8gYW5jaG9yIG9yaWdpblxuICAgICAgbGVmdCA9ICh0aGlzLnJvb3RNZW51LndpZHRoIC8gMik7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgbGVmdCA9ICh0aGlzLnJvb3RNZW51LndpZHRoKTtcbiAgICB9XG5cbiAgICAvLyAvLyBmb3IgdGFyZ2V0IG9yaWdpbmdcbiAgICAvLyBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09ICdjZW50ZXInKSB7XG4gICAgLy8gICAvLyBhbmNob3Igb3JpZ2luXG4gICAgLy8gICB0b3BUYXJnZXQgPSAtKHRoaXMuaGVpZ2h0VGFyZ2V0IC8gMik7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT0gJ2JvdHRvbScpIHtcbiAgICAvLyAgIHRvcFRhcmdldCA9IC0odGhpcy5oZWlnaHRUYXJnZXQpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT0gJ21pZGRsZScpIHtcbiAgICAvLyAgIC8vIGxlZnRUYXJnZXQgPSAodGhpcy50YXJnZXQodGhpcy5fbWVudUVsZW1lbnQpLndpZHRoIC8gMik7XG4gICAgLy8gICBsZWZ0VGFyZ2V0ID0gLSh0aGlzLndpZHRoVGFyZ2V0IC8gMik7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PSAncmlnaHQnKSB7XG4gICAgLy8gICAvLyBsZWZ0VGFyZ2V0ID0gKHRoaXMudGFyZ2V0KHRoaXMuX21lbnVFbGVtZW50KS53aWR0aCk7XG4gICAgLy8gICBsZWZ0VGFyZ2V0ID0gLSh0aGlzLndpZHRoVGFyZ2V0KTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdG9wLFxuICAgICAgbGVmdDogbGVmdCxcbiAgICAgIC8vIHRvcFRhcmdldDogdG9wVGFyZ2V0LFxuICAgICAgLy8gbGVmdFRhcmdldDogbGVmdFRhcmdldCxcbiAgICB9O1xuICB9XG4gIGdldCByb290U3R5bGUoKTogYW55IHtcbiAgICBjb25zdCBtZW51UG9zaXRpb246IGFueSA9IHRoaXMucm9vdE1lbnU7XG4gICAgY29uc3QgcG9zaXRpb25GaW5hbDogYW55ID0gbWVudVBvc2l0aW9uO1xuXG4gICAgaWYgKHRoaXMuX2FuY2hvck9yaWdpbikge1xuXG5cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb25GaW5hbDtcbiAgfVxuICBnZXQgdGFyZ2V0T3JpZ2luKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke1xuICAgICAgdGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnID8gJ2NlbnRlcicgOiB0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbFxuICAgIH0gJHt0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWx9IDBgO1xuICB9XG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5vcGVuZWQgPT09IGZhbHNlID8gdGhpcy5zaG93TWVudSgpIDogdGhpcy5oaWRkZU1lbnUoKTtcbiAgfVxuICBzaG93TWVudSgpIHtcbiAgICB0aGlzLm1lbnVBbmltYXRpb25zU3RhdGUgPSAnaW4nO1xuICAgIHRoaXMubWVudUNvbnRlbnRSZWYgPSB0aGlzLmRvbVNlcnZpY2UuYXR0YWNoPEx5VGVtcGxhdGVNZW51Pih0aGlzLl92aWV3Q29udGFpbmVyUmVmLCBMeVRlbXBsYXRlTWVudSwgdGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgLy8gdGhpcy5tZW51Q29udGVudEVsZW1lbnQgPSB0aGlzLmRvbVNlcnZpY2UuZ2V0RG9tRWxlbWVudEZyb21Db21wb25lbnRSZWYodGhpcy5tZW51Q29udGVudFJlZik7XG4gICAgLy8gdGhpcy5kb21TZXJ2aWNlLmFkZENoaWxkKHRoaXMubWVudUNvbnRlbnRFbGVtZW50KTtcbiAgICB0aGlzLnVwZGF0ZVRhcmdldFBvc2l0aW9uKCk7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGVCZyA9IHRydWU7XG4gICAgdGhpcy5vcGVuLmVtaXQobnVsbCk7XG4gIH1cbiAgaGlkZGVNZW51KCkge1xuICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGVCZyA9IGZhbHNlO1xuICAgIC8vIHRoaXMubWVudUFuaW1hdGlvbnNTdGF0ZSA9ICdlbmQnO1xuICAgIHRoaXMuX2Rlc3Ryb3lNZW51KCk7XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95TWVudSgpOiB2b2lkIHtcbiAgICAvLyBpZiAodGhpcy5tZW51Q29udGVudFJlZikge1xuICAgICAgdGhpcy5kb21TZXJ2aWNlLmRlc3Ryb3lSZWYodGhpcy5tZW51Q29udGVudFJlZiwgMCk7XG4gICAgLy8gfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBkb21TZXJ2aWNlOiBEb21TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7IH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lNZW51KCk7XG4gICAgfVxuICB9XG5cbn1cblxuY29uc3QgbWVudVN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnksXG4gICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCksXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgcGFkZGluZ1RvcDogJzhweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzhweCcsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AgMHB4J1xuICB9XG59KTtcblxuLyoqIE1lbnUgY29udGFpbmVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1tZW51JyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ21lbnVFbnRlcicsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTIwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknLCBrZXlmcmFtZXMoW1xuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgICAgICB9KVxuICAgICAgICBdKSlcbiAgICAgIF0pLFxuICAgICAgLy8gc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7XG4gICAgICAvLyAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknXG4gICAgICAvLyB9KSksXG4gICAgICAvLyB0cmFuc2l0aW9uKCd2b2lkID0+IGVudGVyJywgZ3JvdXAoW1xuICAgICAgLy8gICBxdWVyeSgnW2x5LW1lbnUtaXRlbV0nLCBhbmltYXRlKCcxMDBtcyBsaW5lYXInLCBzdHlsZSh7b3BhY2l0eTogMX0pKSksXG4gICAgICAvLyAgIGFuaW1hdGUoJzEyMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJywgc3R5bGUoe3RyYW5zZm9ybTogJ3NjYWxlKDEpJ30pKSxcbiAgICAgIC8vIF0pKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdtZW51TGVhdmUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxMDBtcyAyNW1zIGxpbmVhcicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpXG4gICAgXSlcbiAgXSxcbiAgc3R5bGVzOiBbJzpob3N0IHtkaXNwbGF5OiBibG9jazsgcG9pbnRlci1ldmVudHM6IGFsbDt9J10sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGV4cG9ydEFzOiAnbHlNZW51J1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnUge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KG1lbnVTdHlsZXMsICdseU1lbnUnKTtcbiAgLyoqIERlc3Ryb3kgbWVudSAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBASW5wdXQoKSByZWY6IEx5TWVudVRyaWdnZXJGb3I7XG4gIEBIb3N0QmluZGluZygnQG1lbnVFbnRlcicpIG1lbnVFbnRlcjtcbiAgQEhvc3RCaW5kaW5nKCdAbWVudUxlYXZlJykgbWVudUxlYXZlMjtcbiAgQEhvc3RMaXN0ZW5lcignQG1lbnVMZWF2ZS5kb25lJywgWyckZXZlbnQnXSkgZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgICAvLyBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIC8vIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICAvLyBwcml2YXRlIGhqOiBMeU1lbnVUcmlnZ2VyRm9yXG4gICAgLy8gQEluamVjdChQcm92aWRlck1lbnUpIHByb3ZpZGVyTWVudTogUHJvdmlkZXJNZW51XG4gICkge1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxufVxuXG5jb25zdCBtZW51SXRlbVN0eWxlcyA9ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIG1pbkhlaWdodDogJzQ4cHgnLFxuICBib3JkZXJSYWRpdXM6IDAsXG4gIHdpZHRoOiAnMTAwJSdcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbWVudS1pdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51SXRlbSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51LnJlZikge1xuICAgICAgdGhpcy5fbWVudS5yZWYuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX21lbnU6IEx5TWVudSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhlbWUuYWRkU3R5bGUoJ2x5TWVudUl0ZW0nLCBtZW51SXRlbVN0eWxlcywgZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5TWVudVRyaWdnZXJGb3JdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2hhbmRsZUNsaWNrKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51VHJpZ2dlckZvciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBDdXJyZW50IG1lbnVSZWYgKi9cbiAgX21lbnVSZWY6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWY7XG4gIEBJbnB1dCgpIGx5TWVudVRyaWdnZXJGb3I6IEx5TWVudSB8IEx5TWVudURlcHJlY2F0ZWQgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgb3ZlcmxheTogTHlPdmVybGF5XG4gICkge31cblxuICB0YXJnZXRQb3NpdGlvbigpIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHJlY3Q6IENsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0O1xuICB9XG5cbiAgX2hhbmRsZUNsaWNrKGU6IEV2ZW50KSB7XG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgaWYgKHRoaXMubHlNZW51VHJpZ2dlckZvciBpbnN0YW5jZW9mIEx5TWVudURlcHJlY2F0ZWQpIHtcbiAgICAgIHRoaXMubHlNZW51VHJpZ2dlckZvci5yb290TWVudSA9IHRoaXMudGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMubHlNZW51VHJpZ2dlckZvci50b2dnbGVNZW51KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy50YXJnZXRQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLl9tZW51UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmx5TWVudVRyaWdnZXJGb3IgYXMgVGVtcGxhdGVSZWY8YW55Piwge1xuICAgICAgICAgICRpbXBsaWNpdDogdGhpc1xuICAgICAgICB9LCB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICAgICAgcmlnaHQ6IG51bGwsXG4gICAgICAgICAgICBib3R0b206IG51bGwsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmbkRlc3Ryb3k6IHRoaXMuZGV0YWNoLmJpbmQodGhpcyksXG4gICAgICAgICAgaG9zdDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLnJlbW92ZSgpO1xuICAgICAgdGhpcy5fbWVudVJlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX21lbnVSZWYpIHtcbiAgICAgIHRoaXMuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbn1cblxuXG4vKipcbiAqIFRPRE86IG1lbnVcbiAqIEBleGFtcGxlIGZhaWxcbiAqIDxuZy10ZW1wbGF0ZSAjbWVudT5cbiAqICAgPGx5LW1lbnU+XG4gKiAgICAgPGJ1dHRvbiBseS1tZW51LWl0ZW0gPm9wdCAxPC9idXR0b24+XG4gKiAgICAgPGJ1dHRvbiBseS1tZW51LWl0ZW0gW2x5TWVudVRyaWdnZXJGb3JdPVwic3ViTWVudVwiPm9wdCAyPC9idXR0b24+XG4gKiAgIDwvbHktbWVudT5cbiAqIDwvbmctdGVtcGxhdGU+XG4gKiA8bmctdGVtcGxhdGUgI3N1Yk1lbnU+XG4gKiAgIDxseS1tZW51PlxuICogICAgIDxidXR0b24gbHktbWVudS1pdGVtPm9wdCAxPC9idXR0b24+XG4gKiAgICAgPGJ1dHRvbiBseS1tZW51LWl0ZW0+b3B0IDI8L2J1dHRvbj5cbiAqICAgPC9seS1tZW51PlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqIDxidXR0b24gbHktYnV0dG9uIFtseU1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIj50b2dnbGUgbWVudTwvYnV0dG9uPlxuICogQGV4YW1wbGUgMlxuICogPG5nLXRlbXBsYXRlICNtZW51IGxldC1tZW51PlxuICogICA8bHktbWVudSBkZXN0cm95T25DbGljaz1cIm1lbnVcIj5cbiAqICAgICA8YnV0dG9uIGx5LW1lbnUtaXRlbSA+b3B0IDE8L2J1dHRvbj5cbiAqICAgICA8YnV0dG9uIGx5LW1lbnUtaXRlbSBbbHlNZW51VHJpZ2dlckZvcl09XCJzdWJNZW51XCI+b3B0IDI8L2J1dHRvbj5cbiAqICAgPC9seS1tZW51PlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqIDxuZy10ZW1wbGF0ZSAjc3ViTWVudT5cbiAqICAgPGx5LW1lbnU+XG4gKiAgICAgPGJ1dHRvbiBseS1tZW51LWl0ZW0+b3B0IDE8L2J1dHRvbj5cbiAqICAgICA8YnV0dG9uIGx5LW1lbnUtaXRlbT5vcHQgMjwvYnV0dG9uPlxuICogICA8L2x5LW1lbnU+XG4gKiA8L25nLXRlbXBsYXRlPlxuICogPGJ1dHRvbiBseS1idXR0b24gW2x5TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPnRvZ2dsZSBtZW51PC9idXR0b24+XG4gKi9cbiIsImltcG9ydCB7IEx5TWVudSwgTHlNZW51RGVwcmVjYXRlZCwgTHlNZW51VHJpZ2dlckZvciwgTHlUZW1wbGF0ZU1lbnUsIEx5TWVudUl0ZW0gfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx4RG9tTW9kdWxlLCBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeERvbU1vZHVsZSwgTHlPdmVybGF5TW9kdWxlXSxcbiAgZXhwb3J0czogW0x5TWVudSwgTHlNZW51SXRlbSwgTHlNZW51RGVwcmVjYXRlZCwgTHlNZW51VHJpZ2dlckZvcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5TWVudSwgTHlNZW51SXRlbSwgTHlNZW51RGVwcmVjYXRlZCwgTHlNZW51VHJpZ2dlckZvciwgTHlUZW1wbGF0ZU1lbnVdLFxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFrQ0E7OztpQkFsQ0E7SUFxQ0MsQ0FBQTtBQUhEO0lBdUJFLHdCQUFtQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtLQUFLOzs7O0lBRTNELGlDQUFROzs7SUFBUjtLQUNDOzs7OztJQUNELDZCQUFJOzs7O0lBQUosVUFBSyxRQUEwQjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3hDOzs7O0lBQ0Qsb0NBQVc7OztJQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN0Qjs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZ0NBRVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUMsOElBU1IsQ0FBQztpQkFDSDs7OztnQkEzQ0MsZ0JBQWdCOzs7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