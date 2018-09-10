(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('@angular/platform-browser'), require('@angular/animations'), require('@alyle/ui'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/menu', ['exports', 'rxjs', '@angular/core', '@angular/platform-browser', '@angular/animations', '@alyle/ui', '@angular/forms', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.menu = {}),global.rxjs,global.ng.core,global.ng.platformBrowser,global.ng.animations,global.alyle.ui,global.ng.forms,global.ng.common));
}(this, (function (exports,rxjs,core,platformBrowser,animations,ui,forms,common) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'ly-template-menu',
                        template: "\n  <div #container></div>\n  ",
                        styles: ["\n    :host {\n      position: absolute;\n      display: block;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  "]
                    },] },
        ];
        /** @nocollapse */
        LyTemplateMenu.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef }
            ];
        };
        LyTemplateMenu.propDecorators = {
            _vcr: [{ type: core.ViewChild, args: ['container', { read: core.ViewContainerRef },] }]
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
            this._targetPosition = new rxjs.BehaviorSubject(null);
            this.open = new core.EventEmitter();
            this.close = new core.EventEmitter();
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
             */ function () {
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
             */ function () {
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
             */ function () {
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
                if (ui.Platform.isBrowser) {
                    this._destroyMenu();
                }
            };
        LyMenuDeprecated.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-menu-deprecated',
                        styles: [".ly-menu{display:inline-block;position:fixed;padding:8px 0;max-height:248px;overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000;opacity:0;min-width:84px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);box-shadow:rgba(0,0,0,.15) 0 2px 6px,rgba(0,0,0,.15) 0 1px 4px;border-radius:2px;transition:transform 175ms cubic-bezier(.23,1,.32,1),opacity 275ms ease-in,-webkit-transform 175ms cubic-bezier(.23,1,.32,1);will-change:opacity,transform;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ly-list-x{z-index:0;max-height:100%}.ly-menu /deep/ ly-menu{position:absolute}.ly-menu.ly-list{position:relative;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);transition:linear}:host.ly-list .ly-menu{position:relative;-webkit-transform:scale(1,1);transform:scale(1,1);transition:linear;opacity:1}:host.ly-list .ly-background-menu{pointer-events:none}.ly-menu.ly-menu-opened{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.ly-background-menu{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0);z-index:999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.ly-background-on{pointer-events:all!important;pointer-events:auto!important}::ng-deep button[ly-menu-item]{display:block;min-height:48px;border-radius:0;width:100%}"],
                        animations: [
                            animations.trigger('menu', [
                                animations.transition(':leave', animations.animate('150ms 50ms linear', animations.style({ opacity: 0 }))),
                                animations.state('in', animations.style({
                                    opacity: 1
                                })),
                                animations.transition(':enter', animations.animate('100ms linear'))
                            ])
                        ],
                        template: "\n  <ng-template>\n    <div #_menu [@menu]=\"menuAnimationsState\"\n      class=\"ly-menu\"\n      bg=\"menu:bg\"\n      color=\"colorText\"\n      [style.transform-origin]=\"targetOrigin\"\n      [style.top.px]=\"rootStyle.top + rootStylePosition.top\"\n      [style.left.px]=\"rootStyle.left + rootStylePosition.left\"\n      [style.transform]=\"_targetPosition | async\">\n      <div class=\"ly-menu-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div\n    class=\"ly-background-menu ly-background-on\"\n    (click)=\"hiddeMenu()\"></div>\n  </ng-template>\n  ",
                        exportAs: 'lyMenuDeprecated',
                        preserveWhitespaces: false
                    },] },
        ];
        /** @nocollapse */
        LyMenuDeprecated.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ViewContainerRef },
                { type: ui.DomService },
                { type: core.ChangeDetectorRef },
                { type: platformBrowser.DomSanitizer }
            ];
        };
        LyMenuDeprecated.propDecorators = {
            opened: [{ type: core.Input }],
            _anchorOrigin: [{ type: core.Input, args: ['anchor-origin',] }],
            _targetOrigin: [{ type: core.Input, args: ['target-origin',] }],
            _menuElement: [{ type: core.ViewChild, args: ['_menu',] }],
            templateRef: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
            open: [{ type: core.Output }],
            close: [{ type: core.Output }]
        };
        return LyMenuDeprecated;
    }());
    /** @type {?} */
    var menuStyles = function (theme) {
        return ({
            root: {
                background: theme.background.primary,
                borderRadius: '2px',
                boxShadow: ui.shadowBuilder(4),
                display: 'inline-block',
                paddingTop: '8px',
                paddingBottom: '8px',
                transformOrigin: 'left top 0px'
            }
        });
    };
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
            { type: core.Component, args: [{
                        selector: 'ly-menu',
                        animations: [
                            animations.trigger('menuEnter', [
                                animations.transition(':enter', [
                                    animations.animate('120ms cubic-bezier(0, 0, 0.2, 1)', animations.keyframes([
                                        animations.style({
                                            opacity: 0,
                                            transform: 'scale(0.8)'
                                        }),
                                        animations.style({
                                            opacity: 1,
                                            transform: 'scale(1)'
                                        })
                                    ]))
                                ]),
                            ]),
                            animations.trigger('menuLeave', [
                                animations.transition('* => void', animations.animate('100ms 25ms linear', animations.style({ opacity: 0 })))
                            ])
                        ],
                        styles: [':host {display: block; pointer-events: all;}'],
                        template: '<ng-content></ng-content>',
                        exportAs: 'lyMenu'
                    },] },
        ];
        /** @nocollapse */
        LyMenu.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.ElementRef }
            ];
        };
        LyMenu.propDecorators = {
            ref: [{ type: core.Input }],
            menuEnter: [{ type: core.HostBinding, args: ['@menuEnter',] }],
            menuLeave2: [{ type: core.HostBinding, args: ['@menuLeave',] }],
            endAnimation: [{ type: core.HostListener, args: ['@menuLeave.done', ['$event'],] }]
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
            theme.addStyle('lyMenuItem', menuItemStyles, el.nativeElement, undefined, 0.1);
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
            { type: core.Directive, args: [{
                        selector: '[ly-menu-item]'
                    },] },
        ];
        /** @nocollapse */
        LyMenuItem.ctorParameters = function () {
            return [
                { type: LyMenu, decorators: [{ type: core.Optional }] },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
            ];
        };
        LyMenuItem.propDecorators = {
            _click: [{ type: core.HostListener, args: ['click',] }]
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
            { type: core.Directive, args: [{
                        selector: '[lyMenuTriggerFor]',
                        // tslint:disable-next-line:use-host-property-decorator
                        host: {
                            '(click)': '_handleClick($event)'
                        }
                    },] },
        ];
        /** @nocollapse */
        LyMenuTriggerFor.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Injector },
                { type: ui.LyOverlay }
            ];
        };
        LyMenuTriggerFor.propDecorators = {
            lyMenuTriggerFor: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, ui.LyCommonModule, ui.LxDomModule, ui.LyOverlayModule],
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

    exports.Origin = Origin;
    exports.LyTemplateMenu = LyTemplateMenu;
    exports.LyMenuDeprecated = LyMenuDeprecated;
    exports.LyMenu = LyMenu;
    exports.LyMenuItem = LyMenuItem;
    exports.LyMenuTriggerFor = LyMenuTriggerFor;
    exports.LyMenuModule = LyMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9tZW51L21lbnUudHMiLCJuZzovL0BhbHlsZS91aS9tZW51L21lbnUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBEaXJlY3RpdmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9wdGlvbmFsLFxuICBJbmplY3RvcixcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtcbiAgdHJpZ2dlcixcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICBhbmltYXRlLFxuICB0cmFuc2l0aW9uLFxuICBrZXlmcmFtZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRG9tU2VydmljZSwgUGxhdGZvcm0sIEx5T3ZlcmxheSwgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgTHlUaGVtZTIsIHNoYWRvd0J1aWxkZXIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgdHlwZSBwb3NpdGlvbiA9ICdsZWZ0JyB8ICdyaWdodCcgfCAndG9wJyB8ICdib3R0b20nIHwgJ2NlbnRlcicgfCAnbWlkZGxlJztcbmV4cG9ydCBjbGFzcyBPcmlnaW4ge1xuICBob3Jpem9udGFsOiBwb3NpdGlvbjtcbiAgdmVydGljYWw6IHBvc2l0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10ZW1wbGF0ZS1tZW51JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRlbXBsYXRlTWVudSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIF92Y3I6IFZpZXdDb250YWluZXJSZWY7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgdG1wbCh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuX3Zjci5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKCdkZXNzdCcpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW1lbnUtZGVwcmVjYXRlZCcsXG4gIHN0eWxlczogW2AubHktbWVudXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpmaXhlZDtwYWRkaW5nOjhweCAwO21heC1oZWlnaHQ6MjQ4cHg7b3ZlcmZsb3c6YXV0bzstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAwO29wYWNpdHk6MDttaW4td2lkdGg6ODRweDt3aWR0aDotd2Via2l0LWZpdC1jb250ZW50O3dpZHRoOi1tb3otZml0LWNvbnRlbnQ7d2lkdGg6Zml0LWNvbnRlbnQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApO2JveC1zaGFkb3c6cmdiYSgwLDAsMCwuMTUpIDAgMnB4IDZweCxyZ2JhKDAsMCwwLC4xNSkgMCAxcHggNHB4O2JvcmRlci1yYWRpdXM6MnB4O3RyYW5zaXRpb246dHJhbnNmb3JtIDE3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSksb3BhY2l0eSAyNzVtcyBlYXNlLWluLC13ZWJraXQtdHJhbnNmb3JtIDE3NW1zIGN1YmljLWJlemllciguMjMsMSwuMzIsMSk7d2lsbC1jaGFuZ2U6b3BhY2l0eSx0cmFuc2Zvcm07Zm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmfS5seS1saXN0LXh7ei1pbmRleDowO21heC1oZWlnaHQ6MTAwJX0ubHktbWVudSAvZGVlcC8gbHktbWVudXtwb3NpdGlvbjphYnNvbHV0ZX0ubHktbWVudS5seS1saXN0e3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2l0aW9uOmxpbmVhcn06aG9zdC5seS1saXN0IC5seS1tZW51e3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNmb3JtOnNjYWxlKDEsMSk7dHJhbnNpdGlvbjpsaW5lYXI7b3BhY2l0eToxfTpob3N0Lmx5LWxpc3QgLmx5LWJhY2tncm91bmQtbWVudXtwb2ludGVyLWV2ZW50czpub25lfS5seS1tZW51Lmx5LW1lbnUtb3BlbmVkey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9Lmx5LWJhY2tncm91bmQtbWVudXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7ei1pbmRleDo5OTk7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3BvaW50ZXItZXZlbnRzOm5vbmV9Lmx5LWJhY2tncm91bmQtb257cG9pbnRlci1ldmVudHM6YWxsIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czphdXRvIWltcG9ydGFudH06Om5nLWRlZXAgYnV0dG9uW2x5LW1lbnUtaXRlbV17ZGlzcGxheTpibG9jazttaW4taGVpZ2h0OjQ4cHg7Ym9yZGVyLXJhZGl1czowO3dpZHRoOjEwMCV9YF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdtZW51JywgW1xuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgYW5pbWF0ZSgnMTUwbXMgNTBtcyBsaW5lYXInLCBzdHlsZSh7b3BhY2l0eTogMH0pKSksXG4gICAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIGFuaW1hdGUoJzEwMG1zIGxpbmVhcicpKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy10ZW1wbGF0ZT5cbiAgICA8ZGl2ICNfbWVudSBbQG1lbnVdPVwibWVudUFuaW1hdGlvbnNTdGF0ZVwiXG4gICAgICBjbGFzcz1cImx5LW1lbnVcIlxuICAgICAgYmc9XCJtZW51OmJnXCJcbiAgICAgIGNvbG9yPVwiY29sb3JUZXh0XCJcbiAgICAgIFtzdHlsZS50cmFuc2Zvcm0tb3JpZ2luXT1cInRhcmdldE9yaWdpblwiXG4gICAgICBbc3R5bGUudG9wLnB4XT1cInJvb3RTdHlsZS50b3AgKyByb290U3R5bGVQb3NpdGlvbi50b3BcIlxuICAgICAgW3N0eWxlLmxlZnQucHhdPVwicm9vdFN0eWxlLmxlZnQgKyByb290U3R5bGVQb3NpdGlvbi5sZWZ0XCJcbiAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiX3RhcmdldFBvc2l0aW9uIHwgYXN5bmNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJseS1tZW51LWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgIGNsYXNzPVwibHktYmFja2dyb3VuZC1tZW51IGx5LWJhY2tncm91bmQtb25cIlxuICAgIChjbGljayk9XCJoaWRkZU1lbnUoKVwiPjwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBleHBvcnRBczogJ2x5TWVudURlcHJlY2F0ZWQnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVEZXByZWNhdGVkIGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGlzSW5pID0gZmFsc2U7XG4gIF9jb2xvcjogc3RyaW5nO1xuICBzdGF0ZUJnID0gZmFsc2U7XG4gIHdpZHRoVGFyZ2V0ID0gMDtcbiAgaGVpZ2h0VGFyZ2V0ID0gMDtcblxuICByb290TWVudTogYW55ID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICB9O1xuICB4dGVtcGxhdGVSZWY6IGFueTtcbiAgbWVudUFuaW1hdGlvbnNTdGF0ZTtcbiAgQElucHV0KCkgb3BlbmVkID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdhbmNob3Itb3JpZ2luJykgX2FuY2hvck9yaWdpbjogT3JpZ2luID0ge2hvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnfTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3RhcmdldC1vcmlnaW4nKSBfdGFyZ2V0T3JpZ2luOiBPcmlnaW4gPSB7aG9yaXpvbnRhbDogJ2xlZnQnLCB2ZXJ0aWNhbDogJ3RvcCd9O1xuICBAVmlld0NoaWxkKCdfbWVudScpIF9tZW51RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIF90YXJnZXRQb3NpdGlvbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG5cbiAgQE91dHB1dCgpIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIG1lbnVDb250ZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgbWVudUNvbnRlbnRSZWY7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWydfdGFyZ2V0T3JpZ2luJ10pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlc1t0YXJnZXQtb3JpZ2luXScsIGNoYW5nZXNbJ190YXJnZXRPcmlnaW4nXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRhcmdldFBvc2l0aW9uKCkge1xuICAgIGxldCB2ZXJ0aWNhbCA9ICcwJScsXG4gICAgaG9yaXpvbnRhbCA9ICcwJSc7XG4gICAgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgaG9yaXpvbnRhbCA9ICctNTAlJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgICBob3Jpem9udGFsID0gJy0xMDAlJztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHZlcnRpY2FsID0gJy01MCUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09PSAnYm90dG9tJykge1xuICAgICAgdmVydGljYWwgPSAnLTEwMCUnO1xuICAgIH1cbiAgICBjb25zdCBtZW51U3R5bGUgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHRyYW5zbGF0ZTNkKCR7aG9yaXpvbnRhbH0sICR7dmVydGljYWx9LCAwKSBzY2FsZTNkKDEsIDEsIDEpYCk7XG4gICAgdGhpcy5fdGFyZ2V0UG9zaXRpb24ubmV4dChtZW51U3R5bGUgYXMgc3RyaW5nKTtcbiAgfVxuICAvLyBnZXQgc2l6ZVxuICB0YXJnZXQoX2VsZW1lbnQ6IGFueSkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gX2VsZW1lbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICd3aWR0aCc6IGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMCxcbiAgICAgICdoZWlnaHQnOiBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAwLFxuICAgICAgJ2xlZnQnOiBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDAsXG4gICAgICAndG9wJzogMCxcbiAgICB9O1xuICB9XG4gIGdldCByb290U3R5bGVQb3NpdGlvbigpIHtcbiAgICBsZXQgdG9wOiBhbnkgPSAwO1xuICAgIGxldCBsZWZ0OiBhbnkgPSAwO1xuICAgIC8vIGxldCB0b3BUYXJnZXQ6IGFueSA9IDA7XG4gICAgLy8gbGV0IGxlZnRUYXJnZXQ6IGFueSA9IDA7XG5cbiAgICAvLyBmb3IgX2FuY2hvck9yaWdpblxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInKSB7XG4gICAgICAvLyBhbmNob3Igb3JpZ2luXG4gICAgICB0b3AgPSAodGhpcy5yb290TWVudS5oZWlnaHQgLyAyKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRvcCA9ICh0aGlzLnJvb3RNZW51LmhlaWdodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZScpIHtcbiAgICAgIC8vIGFuY2hvciBvcmlnaW5cbiAgICAgIGxlZnQgPSAodGhpcy5yb290TWVudS53aWR0aCAvIDIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLmhvcml6b250YWwgPT09ICdyaWdodCcpIHtcbiAgICAgIGxlZnQgPSAodGhpcy5yb290TWVudS53aWR0aCk7XG4gICAgfVxuXG4gICAgLy8gLy8gZm9yIHRhcmdldCBvcmlnaW5nXG4gICAgLy8gaWYgKHRoaXMuX3RhcmdldE9yaWdpbi52ZXJ0aWNhbCA9PSAnY2VudGVyJykge1xuICAgIC8vICAgLy8gYW5jaG9yIG9yaWdpblxuICAgIC8vICAgdG9wVGFyZ2V0ID0gLSh0aGlzLmhlaWdodFRhcmdldCAvIDIpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09ICdib3R0b20nKSB7XG4gICAgLy8gICB0b3BUYXJnZXQgPSAtKHRoaXMuaGVpZ2h0VGFyZ2V0KTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09ICdtaWRkbGUnKSB7XG4gICAgLy8gICAvLyBsZWZ0VGFyZ2V0ID0gKHRoaXMudGFyZ2V0KHRoaXMuX21lbnVFbGVtZW50KS53aWR0aCAvIDIpO1xuICAgIC8vICAgbGVmdFRhcmdldCA9IC0odGhpcy53aWR0aFRhcmdldCAvIDIpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT0gJ3JpZ2h0Jykge1xuICAgIC8vICAgLy8gbGVmdFRhcmdldCA9ICh0aGlzLnRhcmdldCh0aGlzLl9tZW51RWxlbWVudCkud2lkdGgpO1xuICAgIC8vICAgbGVmdFRhcmdldCA9IC0odGhpcy53aWR0aFRhcmdldCk7XG4gICAgLy8gfVxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHRvcCxcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAvLyB0b3BUYXJnZXQ6IHRvcFRhcmdldCxcbiAgICAgIC8vIGxlZnRUYXJnZXQ6IGxlZnRUYXJnZXQsXG4gICAgfTtcbiAgfVxuICBnZXQgcm9vdFN0eWxlKCk6IGFueSB7XG4gICAgY29uc3QgbWVudVBvc2l0aW9uOiBhbnkgPSB0aGlzLnJvb3RNZW51O1xuICAgIGNvbnN0IHBvc2l0aW9uRmluYWw6IGFueSA9IG1lbnVQb3NpdGlvbjtcblxuICAgIGlmICh0aGlzLl9hbmNob3JPcmlnaW4pIHtcblxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uRmluYWw7XG4gIH1cbiAgZ2V0IHRhcmdldE9yaWdpbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtcbiAgICAgIHRoaXMuX3RhcmdldE9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJyA/ICdjZW50ZXInIDogdGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWxcbiAgICB9ICR7dGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsfSAwYDtcbiAgfVxuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMub3BlbmVkID09PSBmYWxzZSA/IHRoaXMuc2hvd01lbnUoKSA6IHRoaXMuaGlkZGVNZW51KCk7XG4gIH1cbiAgc2hvd01lbnUoKSB7XG4gICAgdGhpcy5tZW51QW5pbWF0aW9uc1N0YXRlID0gJ2luJztcbiAgICB0aGlzLm1lbnVDb250ZW50UmVmID0gdGhpcy5kb21TZXJ2aWNlLmF0dGFjaDxMeVRlbXBsYXRlTWVudT4odGhpcy5fdmlld0NvbnRhaW5lclJlZiwgTHlUZW1wbGF0ZU1lbnUsIHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIC8vIHRoaXMubWVudUNvbnRlbnRFbGVtZW50ID0gdGhpcy5kb21TZXJ2aWNlLmdldERvbUVsZW1lbnRGcm9tQ29tcG9uZW50UmVmKHRoaXMubWVudUNvbnRlbnRSZWYpO1xuICAgIC8vIHRoaXMuZG9tU2VydmljZS5hZGRDaGlsZCh0aGlzLm1lbnVDb250ZW50RWxlbWVudCk7XG4gICAgdGhpcy51cGRhdGVUYXJnZXRQb3NpdGlvbigpO1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlQmcgPSB0cnVlO1xuICAgIHRoaXMub3Blbi5lbWl0KG51bGwpO1xuICB9XG4gIGhpZGRlTWVudSgpIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQobnVsbCk7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlQmcgPSBmYWxzZTtcbiAgICAvLyB0aGlzLm1lbnVBbmltYXRpb25zU3RhdGUgPSAnZW5kJztcbiAgICB0aGlzLl9kZXN0cm95TWVudSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveU1lbnUoKTogdm9pZCB7XG4gICAgLy8gaWYgKHRoaXMubWVudUNvbnRlbnRSZWYpIHtcbiAgICAgIHRoaXMuZG9tU2VydmljZS5kZXN0cm95UmVmKHRoaXMubWVudUNvbnRlbnRSZWYsIDApO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZG9tU2VydmljZTogRG9tU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkgeyB9XG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9kZXN0cm95TWVudSgpO1xuICAgIH1cbiAgfVxuXG59XG5cbmNvbnN0IG1lbnVTdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LFxuICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQpLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHBhZGRpbmdUb3A6ICc4cHgnLFxuICAgIHBhZGRpbmdCb3R0b206ICc4cHgnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wIDBweCdcbiAgfVxufSk7XG5cbi8qKiBNZW51IGNvbnRhaW5lciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWVudScsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdtZW51RW50ZXInLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIGFuaW1hdGUoJzEyMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJywga2V5ZnJhbWVzKFtcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KSdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgICAgICAgfSlcbiAgICAgICAgXSkpXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICB0cmlnZ2VyKCdtZW51TGVhdmUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxMDBtcyAyNW1zIGxpbmVhcicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpXG4gICAgXSlcbiAgXSxcbiAgc3R5bGVzOiBbJzpob3N0IHtkaXNwbGF5OiBibG9jazsgcG9pbnRlci1ldmVudHM6IGFsbDt9J10sXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGV4cG9ydEFzOiAnbHlNZW51J1xufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnUge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KG1lbnVTdHlsZXMsICdseU1lbnUnKTtcbiAgLyoqIERlc3Ryb3kgbWVudSAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuICBASW5wdXQoKSByZWY6IEx5TWVudVRyaWdnZXJGb3I7XG4gIEBIb3N0QmluZGluZygnQG1lbnVFbnRlcicpIG1lbnVFbnRlcjtcbiAgQEhvc3RCaW5kaW5nKCdAbWVudUxlYXZlJykgbWVudUxlYXZlMjtcbiAgQEhvc3RMaXN0ZW5lcignQG1lbnVMZWF2ZS5kb25lJywgWyckZXZlbnQnXSkgZW5kQW5pbWF0aW9uKGUpIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAndm9pZCcpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgICAvLyBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIC8vIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICAvLyBwcml2YXRlIGhqOiBMeU1lbnVUcmlnZ2VyRm9yXG4gICAgLy8gQEluamVjdChQcm92aWRlck1lbnUpIHByb3ZpZGVyTWVudTogUHJvdmlkZXJNZW51XG4gICkge1xuICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMucm9vdCk7XG4gIH1cblxufVxuXG5jb25zdCBtZW51SXRlbVN0eWxlcyA9ICh7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIG1pbkhlaWdodDogJzQ4cHgnLFxuICBib3JkZXJSYWRpdXM6IDAsXG4gIHdpZHRoOiAnMTAwJSdcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktbWVudS1pdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51SXRlbSB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLl9tZW51LnJlZikge1xuICAgICAgdGhpcy5fbWVudS5yZWYuX21lbnVSZWYuZGV0YWNoKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX21lbnU6IEx5TWVudSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhlbWUuYWRkU3R5bGUoJ2x5TWVudUl0ZW0nLCBtZW51SXRlbVN0eWxlcywgZWwubmF0aXZlRWxlbWVudCwgdW5kZWZpbmVkLCAwLjEpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseU1lbnVUcmlnZ2VyRm9yXScsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudVRyaWdnZXJGb3IgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogQ3VycmVudCBtZW51UmVmICovXG4gIF9tZW51UmVmOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmO1xuICBASW5wdXQoKSBseU1lbnVUcmlnZ2VyRm9yOiBMeU1lbnUgfCBMeU1lbnVEZXByZWNhdGVkIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIG92ZXJsYXk6IEx5T3ZlcmxheVxuICApIHt9XG5cbiAgdGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCByZWN0OiBDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIF9oYW5kbGVDbGljayhlOiBFdmVudCkge1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIGlmICh0aGlzLmx5TWVudVRyaWdnZXJGb3IgaW5zdGFuY2VvZiBMeU1lbnVEZXByZWNhdGVkKSB7XG4gICAgICB0aGlzLmx5TWVudVRyaWdnZXJGb3Iucm9vdE1lbnUgPSB0aGlzLnRhcmdldFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLmx5TWVudVRyaWdnZXJGb3IudG9nZ2xlTWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMudGFyZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5fbWVudVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5seU1lbnVUcmlnZ2VyRm9yIGFzIFRlbXBsYXRlUmVmPGFueT4sIHtcbiAgICAgICAgICAkaW1wbGljaXQ6IHRoaXNcbiAgICAgICAgfSwge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgICAgIHJpZ2h0OiBudWxsLFxuICAgICAgICAgICAgYm90dG9tOiBudWxsLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZm5EZXN0cm95OiB0aGlzLmRldGFjaC5iaW5kKHRoaXMpLFxuICAgICAgICAgIGhvc3Q6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbWVudVJlZikge1xuICAgICAgdGhpcy5fbWVudVJlZi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuX21lbnVSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9tZW51UmVmKSB7XG4gICAgICB0aGlzLl9tZW51UmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuLyoqXG4gKiBAZXhhbXBsZVxuICogPG5nLXRlbXBsYXRlICNtZW51IGxldC1NPlxuICogICA8bHktbWVudSBbcmVmXT1cIk1cIj5cbiAqICAgICA8YnV0dG9uIGx5LW1lbnUtaXRlbSA+b3B0IDE8L2J1dHRvbj5cbiAqICAgICA8YnV0dG9uIGx5LW1lbnUtaXRlbSBbbHlNZW51VHJpZ2dlckZvcl09XCJzdWJNZW51XCI+b3B0IDI8L2J1dHRvbj5cbiAqICAgPC9seS1tZW51PlxuICogPC9uZy10ZW1wbGF0ZT5cbiAqIDxuZy10ZW1wbGF0ZSAjc3ViTWVudT5cbiAqICAgPGx5LW1lbnU+XG4gKiAgICAgPGJ1dHRvbiBseS1tZW51LWl0ZW0+b3B0IDE8L2J1dHRvbj5cbiAqICAgICA8YnV0dG9uIGx5LW1lbnUtaXRlbT5vcHQgMjwvYnV0dG9uPlxuICogICA8L2x5LW1lbnU+XG4gKiA8L25nLXRlbXBsYXRlPlxuICogPGJ1dHRvbiBseS1idXR0b24gW2x5TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPnRvZ2dsZSBtZW51PC9idXR0b24+XG4gKi9cbiIsImltcG9ydCB7IEx5TWVudSwgTHlNZW51RGVwcmVjYXRlZCwgTHlNZW51VHJpZ2dlckZvciwgTHlUZW1wbGF0ZU1lbnUsIEx5TWVudUl0ZW0gfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx4RG9tTW9kdWxlLCBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeERvbU1vZHVsZSwgTHlPdmVybGF5TW9kdWxlXSxcbiAgZXhwb3J0czogW0x5TWVudSwgTHlNZW51SXRlbSwgTHlNZW51RGVwcmVjYXRlZCwgTHlNZW51VHJpZ2dlckZvcl0sXG4gIGRlY2xhcmF0aW9uczogW0x5TWVudSwgTHlNZW51SXRlbSwgTHlNZW51RGVwcmVjYXRlZCwgTHlNZW51VHJpZ2dlckZvciwgTHlUZW1wbGF0ZU1lbnVdLFxufSlcbmV4cG9ydCBjbGFzcyBMeU1lbnVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiVmlld0NvbnRhaW5lclJlZiIsIlZpZXdDaGlsZCIsIkJlaGF2aW9yU3ViamVjdCIsIkV2ZW50RW1pdHRlciIsIlBsYXRmb3JtIiwidHJpZ2dlciIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwic3R5bGUiLCJzdGF0ZSIsIkVsZW1lbnRSZWYiLCJEb21TZXJ2aWNlIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJEb21TYW5pdGl6ZXIiLCJJbnB1dCIsIlRlbXBsYXRlUmVmIiwiT3V0cHV0Iiwic2hhZG93QnVpbGRlciIsImtleWZyYW1lcyIsIkx5VGhlbWUyIiwiSG9zdEJpbmRpbmciLCJIb3N0TGlzdGVuZXIiLCJEaXJlY3RpdmUiLCJPcHRpb25hbCIsIkluamVjdG9yIiwiTHlPdmVybGF5IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIiwiTHhEb21Nb2R1bGUiLCJMeU92ZXJsYXlNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQWtDQTs7O3FCQWxDQTtRQXFDQyxDQUFBO0FBSEQ7UUF1QkUsd0JBQW1CLGlCQUFtQztZQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1NBQUs7Ozs7UUFFM0QsaUNBQVE7OztZQUFSO2FBQ0M7Ozs7O1FBQ0QsNkJBQUk7Ozs7WUFBSixVQUFLLFFBQTBCO2dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hDOzs7O1FBQ0Qsb0NBQVc7OztZQUFYO2dCQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEI7O29CQTNCRkEsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSxnQ0FFVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyw4SUFTUixDQUFDO3FCQUNIOzs7Ozt3QkEzQ0NDLHFCQUFnQjs7OzsyQkE2Q2ZDLGNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUVELHFCQUFnQixFQUFFOzs2QkF4RHBEOzs7UUEwUEUsMEJBQ1UsWUFDQSxtQkFDQSxZQUNBLElBQ0E7WUFKQSxlQUFVLEdBQVYsVUFBVTtZQUNWLHNCQUFpQixHQUFqQixpQkFBaUI7WUFDakIsZUFBVSxHQUFWLFVBQVU7WUFDVixPQUFFLEdBQUYsRUFBRTtZQUNGLGNBQVMsR0FBVCxTQUFTO3lCQXZKWCxLQUFLOzJCQUVILEtBQUs7K0JBQ0QsQ0FBQztnQ0FDQSxDQUFDOzRCQUVBO2dCQUNkLEdBQUcsRUFBRSxDQUFDO2dCQUNOLElBQUksRUFBRSxDQUFDO2FBQ1I7MEJBR2lCLEtBQUs7O2lDQUV5QixFQUFDLFVBQVUsRUFBRSxNQUFNLEVB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