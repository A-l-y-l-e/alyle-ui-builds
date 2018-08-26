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
    var LyMenu = /** @class */ (function () {
        function LyMenu(elementRef, _viewContainerRef, domService, cd, sanitizer) {
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
            this._anchorOrigin = { horizontal: 'left', vertical: 'top' };
            this._targetOrigin = { horizontal: 'left', vertical: 'top' };
            this._targetPosition = new rxjs.BehaviorSubject(null);
            this.open = new core.EventEmitter();
            this.close = new core.EventEmitter();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        LyMenu.prototype.ngOnChanges = /**
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
        LyMenu.prototype.updateTargetPosition = /**
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
        LyMenu.prototype.target = /**
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
        Object.defineProperty(LyMenu.prototype, "rootStylePosition", {
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
        Object.defineProperty(LyMenu.prototype, "rootStyle", {
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
        Object.defineProperty(LyMenu.prototype, "targetOrigin", {
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
        LyMenu.prototype.toggleMenu = /**
         * @return {?}
         */
            function () {
                this.opened === false ? this.showMenu() : this.hiddeMenu();
            };
        /**
         * @return {?}
         */
        LyMenu.prototype.showMenu = /**
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
        LyMenu.prototype.hiddeMenu = /**
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
        LyMenu.prototype._destroyMenu = /**
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
        LyMenu.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        LyMenu.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        LyMenu.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (ui.Platform.isBrowser) {
                    this._destroyMenu();
                }
            };
        LyMenu.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-menu',
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
                        exportAs: 'lyMenu',
                        preserveWhitespaces: false
                    },] },
        ];
        /** @nocollapse */
        LyMenu.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ViewContainerRef },
                { type: ui.DomService },
                { type: core.ChangeDetectorRef },
                { type: platformBrowser.DomSanitizer }
            ];
        };
        LyMenu.propDecorators = {
            opened: [{ type: core.Input }],
            _anchorOrigin: [{ type: core.Input, args: ['anchor-origin',] }],
            _targetOrigin: [{ type: core.Input, args: ['target-origin',] }],
            _menuElement: [{ type: core.ViewChild, args: ['_menu',] }],
            templateRef: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
            open: [{ type: core.Output }],
            close: [{ type: core.Output }]
        };
        return LyMenu;
    }());
    var LyMenuTriggerFor = /** @class */ (function () {
        function LyMenuTriggerFor(elementRef) {
            this.elementRef = elementRef;
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
                /** @type {?} */
                var result = {
                    'width': rect.width,
                    'height': rect.height,
                    'left': rect.left,
                    'top': rect.top,
                };
                return result;
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
                this.lyMenuTriggerFor.rootMenu = this.targetPosition();
                this.lyMenuTriggerFor.toggleMenu();
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
                { type: core.ElementRef }
            ];
        };
        LyMenuTriggerFor.propDecorators = {
            lyMenuTriggerFor: [{ type: core.Input, args: ['lyMenuTriggerFor',] }]
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
                        imports: [common.CommonModule, forms.FormsModule, ui.LyCommonModule, ui.LxDomModule],
                        exports: [LyMenu, LyMenuTriggerFor],
                        declarations: [LyMenu, LyMenuTriggerFor, LyTemplateMenu],
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
    exports.LyMenu = LyMenu;
    exports.LyMenuTriggerFor = LyMenuTriggerFor;
    exports.LyMenuModule = LyMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktbWVudS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9tZW51L21lbnUudHMiLCJuZzovL0BhbHlsZS91aS9tZW51L21lbnUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBEaXJlY3RpdmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvblxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IERvbVNlcnZpY2UsIFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IHR5cGUgcG9zaXRpb24gPSAnbGVmdCcgfCAncmlnaHQnIHwgJ3RvcCcgfCAnYm90dG9tJyB8ICdjZW50ZXInIHwgJ21pZGRsZSc7XG5leHBvcnQgY2xhc3MgT3JpZ2luIHtcbiAgaG9yaXpvbnRhbDogcG9zaXRpb247XG4gIHZlcnRpY2FsOiBwb3NpdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGVtcGxhdGUtbWVudScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUZW1wbGF0ZU1lbnUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBfdmNyOiBWaWV3Q29udGFpbmVyUmVmO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIHRtcGwodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzLl92Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZygnZGVzc3QnKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1tZW51JyxcbiAgc3R5bGVzOiBbYC5seS1tZW51e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmZpeGVkO3BhZGRpbmc6OHB4IDA7bWF4LWhlaWdodDoyNDhweDtvdmVyZmxvdzphdXRvOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDA7b3BhY2l0eTowO21pbi13aWR0aDo4NHB4O3dpZHRoOi13ZWJraXQtZml0LWNvbnRlbnQ7d2lkdGg6LW1vei1maXQtY29udGVudDt3aWR0aDpmaXQtY29udGVudDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLC4xNSkgMCAycHggNnB4LHJnYmEoMCwwLDAsLjE1KSAwIDFweCA0cHg7Ym9yZGVyLXJhZGl1czoycHg7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKSxvcGFjaXR5IDI3NW1zIGVhc2UtaW4sLXdlYmtpdC10cmFuc2Zvcm0gMTc1bXMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTt3aWxsLWNoYW5nZTpvcGFjaXR5LHRyYW5zZm9ybTtmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWZ9Lmx5LWxpc3QteHt6LWluZGV4OjA7bWF4LWhlaWdodDoxMDAlfS5seS1tZW51IC9kZWVwLyBseS1tZW51e3Bvc2l0aW9uOmFic29sdXRlfS5seS1tZW51Lmx5LWxpc3R7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zaXRpb246bGluZWFyfTpob3N0Lmx5LWxpc3QgLmx5LW1lbnV7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2Zvcm06c2NhbGUoMSwxKTt0cmFuc2l0aW9uOmxpbmVhcjtvcGFjaXR5OjF9Omhvc3QubHktbGlzdCAubHktYmFja2dyb3VuZC1tZW51e3BvaW50ZXItZXZlbnRzOm5vbmV9Lmx5LW1lbnUubHktbWVudS1vcGVuZWR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO29wYWNpdHk6MX0ubHktYmFja2dyb3VuZC1tZW51e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTt6LWluZGV4Ojk5OTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7cG9pbnRlci1ldmVudHM6bm9uZX0ubHktYmFja2dyb3VuZC1vbntwb2ludGVyLWV2ZW50czphbGwhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOmF1dG8haW1wb3J0YW50fTo6bmctZGVlcCBidXR0b25bbHktbWVudS1pdGVtXXtkaXNwbGF5OmJsb2NrO21pbi1oZWlnaHQ6NDhweDtib3JkZXItcmFkaXVzOjA7d2lkdGg6MTAwJX1gXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ21lbnUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBhbmltYXRlKCcxNTBtcyA1MG1zIGxpbmVhcicsIHN0eWxlKHtvcGFjaXR5OiAwfSkpKSxcbiAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgYW5pbWF0ZSgnMTAwbXMgbGluZWFyJykpXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLXRlbXBsYXRlPlxuICAgIDxkaXYgI19tZW51IFtAbWVudV09XCJtZW51QW5pbWF0aW9uc1N0YXRlXCJcbiAgICAgIGNsYXNzPVwibHktbWVudVwiXG4gICAgICBiZz1cIm1lbnU6YmdcIlxuICAgICAgY29sb3I9XCJjb2xvclRleHRcIlxuICAgICAgW3N0eWxlLnRyYW5zZm9ybS1vcmlnaW5dPVwidGFyZ2V0T3JpZ2luXCJcbiAgICAgIFtzdHlsZS50b3AucHhdPVwicm9vdFN0eWxlLnRvcCArIHJvb3RTdHlsZVBvc2l0aW9uLnRvcFwiXG4gICAgICBbc3R5bGUubGVmdC5weF09XCJyb290U3R5bGUubGVmdCArIHJvb3RTdHlsZVBvc2l0aW9uLmxlZnRcIlxuICAgICAgW3N0eWxlLnRyYW5zZm9ybV09XCJfdGFyZ2V0UG9zaXRpb24gfCBhc3luY1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImx5LW1lbnUtY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgY2xhc3M9XCJseS1iYWNrZ3JvdW5kLW1lbnUgbHktYmFja2dyb3VuZC1vblwiXG4gICAgKGNsaWNrKT1cImhpZGRlTWVudSgpXCI+PC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGV4cG9ydEFzOiAnbHlNZW51JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGlzSW5pID0gZmFsc2U7XG4gIF9jb2xvcjogc3RyaW5nO1xuICBzdGF0ZUJnID0gZmFsc2U7XG4gIHdpZHRoVGFyZ2V0ID0gMDtcbiAgaGVpZ2h0VGFyZ2V0ID0gMDtcblxuICByb290TWVudTogYW55ID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICB9O1xuICB4dGVtcGxhdGVSZWY6IGFueTtcbiAgbWVudUFuaW1hdGlvbnNTdGF0ZTtcbiAgQElucHV0KCkgb3BlbmVkID0gZmFsc2U7XG4gIEBJbnB1dCgnYW5jaG9yLW9yaWdpbicpIF9hbmNob3JPcmlnaW46IE9yaWdpbiA9IHtob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAndG9wJ307XG4gIEBJbnB1dCgndGFyZ2V0LW9yaWdpbicpIF90YXJnZXRPcmlnaW46IE9yaWdpbiA9IHtob3Jpem9udGFsOiAnbGVmdCcsIHZlcnRpY2FsOiAndG9wJ307XG4gIEBWaWV3Q2hpbGQoJ19tZW51JykgX21lbnVFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgX3RhcmdldFBvc2l0aW9uOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblxuICBAT3V0cHV0KCkgb3BlbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHByaXZhdGUgbWVudUNvbnRlbnRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBtZW51Q29udGVudFJlZjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ190YXJnZXRPcmlnaW4nXSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzW3RhcmdldC1vcmlnaW5dJywgY2hhbmdlc1snX3RhcmdldE9yaWdpbiddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVGFyZ2V0UG9zaXRpb24oKSB7XG4gICAgbGV0IHZlcnRpY2FsID0gJzAlJyxcbiAgICBob3Jpem9udGFsID0gJzAlJztcbiAgICBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnKSB7XG4gICAgICBob3Jpem9udGFsID0gJy01MCUnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT09ICdyaWdodCcpIHtcbiAgICAgIGhvcml6b250YWwgPSAnLTEwMCUnO1xuICAgIH1cbiAgICBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09PSAnY2VudGVyJykge1xuICAgICAgdmVydGljYWwgPSAnLTUwJSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgICB2ZXJ0aWNhbCA9ICctMTAwJSc7XG4gICAgfVxuICAgIGNvbnN0IG1lbnVTdHlsZSA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgdHJhbnNsYXRlM2QoJHtob3Jpem9udGFsfSwgJHt2ZXJ0aWNhbH0sIDApIHNjYWxlM2QoMSwgMSwgMSlgKTtcbiAgICB0aGlzLl90YXJnZXRQb3NpdGlvbi5uZXh0KG1lbnVTdHlsZSBhcyBzdHJpbmcpO1xuICB9XG4gIC8vIGdldCBzaXplXG4gIHRhcmdldChfZWxlbWVudDogYW55KSB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBfZWxlbWVudDtcbiAgICByZXR1cm4ge1xuICAgICAgJ3dpZHRoJzogZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwLFxuICAgICAgJ2hlaWdodCc6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDAsXG4gICAgICAnbGVmdCc6IGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMCxcbiAgICAgICd0b3AnOiAwLFxuICAgIH07XG4gIH1cbiAgZ2V0IHJvb3RTdHlsZVBvc2l0aW9uKCkge1xuICAgIGxldCB0b3A6IGFueSA9IDA7XG4gICAgbGV0IGxlZnQ6IGFueSA9IDA7XG4gICAgLy8gbGV0IHRvcFRhcmdldDogYW55ID0gMDtcbiAgICAvLyBsZXQgbGVmdFRhcmdldDogYW55ID0gMDtcblxuICAgIC8vIGZvciBfYW5jaG9yT3JpZ2luXG4gICAgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIC8vIGFuY2hvciBvcmlnaW5cbiAgICAgIHRvcCA9ICh0aGlzLnJvb3RNZW51LmhlaWdodCAvIDIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSAnYm90dG9tJykge1xuICAgICAgdG9wID0gKHRoaXMucm9vdE1lbnUuaGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2FuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgLy8gYW5jaG9yIG9yaWdpblxuICAgICAgbGVmdCA9ICh0aGlzLnJvb3RNZW51LndpZHRoIC8gMik7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgbGVmdCA9ICh0aGlzLnJvb3RNZW51LndpZHRoKTtcbiAgICB9XG5cbiAgICAvLyAvLyBmb3IgdGFyZ2V0IG9yaWdpbmdcbiAgICAvLyBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLnZlcnRpY2FsID09ICdjZW50ZXInKSB7XG4gICAgLy8gICAvLyBhbmNob3Igb3JpZ2luXG4gICAgLy8gICB0b3BUYXJnZXQgPSAtKHRoaXMuaGVpZ2h0VGFyZ2V0IC8gMik7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWwgPT0gJ2JvdHRvbScpIHtcbiAgICAvLyAgIHRvcFRhcmdldCA9IC0odGhpcy5oZWlnaHRUYXJnZXQpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAodGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT0gJ21pZGRsZScpIHtcbiAgICAvLyAgIC8vIGxlZnRUYXJnZXQgPSAodGhpcy50YXJnZXQodGhpcy5fbWVudUVsZW1lbnQpLndpZHRoIC8gMik7XG4gICAgLy8gICBsZWZ0VGFyZ2V0ID0gLSh0aGlzLndpZHRoVGFyZ2V0IC8gMik7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbCA9PSAncmlnaHQnKSB7XG4gICAgLy8gICAvLyBsZWZ0VGFyZ2V0ID0gKHRoaXMudGFyZ2V0KHRoaXMuX21lbnVFbGVtZW50KS53aWR0aCk7XG4gICAgLy8gICBsZWZ0VGFyZ2V0ID0gLSh0aGlzLndpZHRoVGFyZ2V0KTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdG9wLFxuICAgICAgbGVmdDogbGVmdCxcbiAgICAgIC8vIHRvcFRhcmdldDogdG9wVGFyZ2V0LFxuICAgICAgLy8gbGVmdFRhcmdldDogbGVmdFRhcmdldCxcbiAgICB9O1xuICB9XG4gIGdldCByb290U3R5bGUoKTogYW55IHtcbiAgICBjb25zdCBtZW51UG9zaXRpb246IGFueSA9IHRoaXMucm9vdE1lbnU7XG4gICAgY29uc3QgcG9zaXRpb25GaW5hbDogYW55ID0gbWVudVBvc2l0aW9uO1xuXG4gICAgaWYgKHRoaXMuX2FuY2hvck9yaWdpbikge1xuXG5cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb25GaW5hbDtcbiAgfVxuICBnZXQgdGFyZ2V0T3JpZ2luKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke1xuICAgICAgdGhpcy5fdGFyZ2V0T3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnID8gJ2NlbnRlcicgOiB0aGlzLl90YXJnZXRPcmlnaW4uaG9yaXpvbnRhbFxuICAgIH0gJHt0aGlzLl90YXJnZXRPcmlnaW4udmVydGljYWx9IDBgO1xuICB9XG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5vcGVuZWQgPT09IGZhbHNlID8gdGhpcy5zaG93TWVudSgpIDogdGhpcy5oaWRkZU1lbnUoKTtcbiAgfVxuICBzaG93TWVudSgpIHtcbiAgICB0aGlzLm1lbnVBbmltYXRpb25zU3RhdGUgPSAnaW4nO1xuICAgIHRoaXMubWVudUNvbnRlbnRSZWYgPSB0aGlzLmRvbVNlcnZpY2UuYXR0YWNoPEx5VGVtcGxhdGVNZW51Pih0aGlzLl92aWV3Q29udGFpbmVyUmVmLCBMeVRlbXBsYXRlTWVudSwgdGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgLy8gdGhpcy5tZW51Q29udGVudEVsZW1lbnQgPSB0aGlzLmRvbVNlcnZpY2UuZ2V0RG9tRWxlbWVudEZyb21Db21wb25lbnRSZWYodGhpcy5tZW51Q29udGVudFJlZik7XG4gICAgLy8gdGhpcy5kb21TZXJ2aWNlLmFkZENoaWxkKHRoaXMubWVudUNvbnRlbnRFbGVtZW50KTtcbiAgICB0aGlzLnVwZGF0ZVRhcmdldFBvc2l0aW9uKCk7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGVCZyA9IHRydWU7XG4gICAgdGhpcy5vcGVuLmVtaXQobnVsbCk7XG4gIH1cbiAgaGlkZGVNZW51KCkge1xuICAgIHRoaXMuY2xvc2UuZW1pdChudWxsKTtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGVCZyA9IGZhbHNlO1xuICAgIC8vIHRoaXMubWVudUFuaW1hdGlvbnNTdGF0ZSA9ICdlbmQnO1xuICAgIHRoaXMuX2Rlc3Ryb3lNZW51KCk7XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95TWVudSgpOiB2b2lkIHtcbiAgICAvLyBpZiAodGhpcy5tZW51Q29udGVudFJlZikge1xuICAgICAgdGhpcy5kb21TZXJ2aWNlLmRlc3Ryb3lSZWYodGhpcy5tZW51Q29udGVudFJlZiwgMCk7XG4gICAgLy8gfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBkb21TZXJ2aWNlOiBEb21TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7IH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lNZW51KCk7XG4gICAgfVxuICB9XG5cbn1cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseU1lbnVUcmlnZ2VyRm9yXScsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19oYW5kbGVDbGljaygkZXZlbnQpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5TWVudVRyaWdnZXJGb3Ige1xuICBASW5wdXQoJ2x5TWVudVRyaWdnZXJGb3InKSBseU1lbnVUcmlnZ2VyRm9yOiBMeU1lbnU7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICB0YXJnZXRQb3NpdGlvbigpIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHJlY3Q6IENsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICd3aWR0aCc6IHJlY3Qud2lkdGgsXG4gICAgICAnaGVpZ2h0JzogcmVjdC5oZWlnaHQsXG4gICAgICAnbGVmdCc6IHJlY3QubGVmdCxcbiAgICAgICd0b3AnOiByZWN0LnRvcCxcbiAgICB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBfaGFuZGxlQ2xpY2soZTogRXZlbnQpIHtcbiAgICB0aGlzLmx5TWVudVRyaWdnZXJGb3Iucm9vdE1lbnUgPSB0aGlzLnRhcmdldFBvc2l0aW9uKCk7XG4gICAgdGhpcy5seU1lbnVUcmlnZ2VyRm9yLnRvZ2dsZU1lbnUoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBMeU1lbnVUcmlnZ2VyRm9yLCBMeVRlbXBsYXRlTWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBMeU1lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx4RG9tTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSdAYW5ndWxhci9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeERvbU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeU1lbnUsIEx5TWVudVRyaWdnZXJGb3JdLFxuICBkZWNsYXJhdGlvbnM6IFtMeU1lbnUsIEx5TWVudVRyaWdnZXJGb3IsIEx5VGVtcGxhdGVNZW51XSxcbn0pXG5leHBvcnQgY2xhc3MgTHlNZW51TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlZpZXdDb250YWluZXJSZWYiLCJWaWV3Q2hpbGQiLCJCZWhhdmlvclN1YmplY3QiLCJFdmVudEVtaXR0ZXIiLCJQbGF0Zm9ybSIsInRyaWdnZXIiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsInN0eWxlIiwic3RhdGUiLCJFbGVtZW50UmVmIiwiRG9tU2VydmljZSIsIkNoYW5nZURldGVjdG9yUmVmIiwiRG9tU2FuaXRpemVyIiwiSW5wdXQiLCJUZW1wbGF0ZVJlZiIsIk91dHB1dCIsIkRpcmVjdGl2ZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSIsIkx4RG9tTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsUUE2QkE7OztxQkE3QkE7UUFnQ0MsQ0FBQTtBQUhEO1FBdUJFLHdCQUFtQixpQkFBbUM7WUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtTQUFLOzs7O1FBRTNELGlDQUFROzs7WUFBUjthQUNDOzs7OztRQUNELDZCQUFJOzs7O1lBQUosVUFBSyxRQUEwQjtnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4Qzs7OztRQUNELG9DQUFXOzs7WUFBWDtnQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCOztvQkEzQkZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUs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