(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('rxjs'), require('@alyle/ui/ripple'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/tabs', ['exports', '@angular/core', '@alyle/ui', 'rxjs', '@alyle/ui/ripple', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.tabs = {}),global.ng.core,global.alyle.ui,global.rxjs,global.alyle.ui.ripple,global.ng.common));
}(this, (function (exports,i0,i1,rxjs,ripple,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyTabContent = /** @class */ (function () {
        function LyTabContent(template) {
            this.template = template;
        }
        LyTabContent.decorators = [
            { type: i0.Directive, args: [{ selector: '[ly-tab-content]' },] },
        ];
        /** @nocollapse */
        LyTabContent.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return LyTabContent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var tabsStyles = {
        root: {
            display: 'block',
            overflow: 'hidden'
        },
        tab: {
            position: 'relative',
            display: 'inline-flex'
        },
        tabsLabels: {
            display: 'flex',
            position: 'relative',
            flexGrow: 1,
            overflow: 'hidden'
        },
        label: {
            minWidth: '72px',
            padding: '0 24px',
            cursor: 'pointer',
            height: '48px',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        },
        tabContents: {
            display: 'flex',
            transition: '450ms cubic-bezier(.1, 1, 0.5, 1)',
            willChange: 'transform'
        },
        tabContent: {
            width: '100%',
            flexShrink: 0,
            position: 'relative'
        },
        tabsIndicator: {
            position: 'absolute',
            transition: '450ms cubic-bezier(.1, 1, 0.5, 1)',
            bottom: 0,
            height: '2px',
            left: 0,
            background: 'currentColor'
        },
        tabsIndicatorForServer: {
            width: '100%'
        }
    };
    var LyTabsClassesService = /** @class */ (function () {
        function LyTabsClassesService(theme) {
            this.theme = theme;
            this.classes = this.theme.addStyleSheet(tabsStyles, 'lyTabs');
        }
        LyTabsClassesService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LyTabsClassesService.ctorParameters = function () {
            return [
                { type: i1.LyTheme2 }
            ];
        };
        /** @nocollapse */ LyTabsClassesService.ngInjectableDef = i0.defineInjectable({ factory: function LyTabsClassesService_Factory() { return new LyTabsClassesService(i0.inject(i1.LyTheme2)); }, token: LyTabsClassesService, providedIn: "root" });
        return LyTabsClassesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyTabs = /** @class */ (function () {
        function LyTabs(tabsService, theme, renderer, el, cd) {
            this.theme = theme;
            this.renderer = renderer;
            this.el = el;
            this.cd = cd;
            this._selectedIndex = 0;
            this._tabsSubscription = rxjs.Subscription.EMPTY;
            this.selectedIndexOnChange = 'auto';
            this.selectedIndexChange = new i0.EventEmitter();
            this.classes = tabsService.classes;
        }
        Object.defineProperty(LyTabs.prototype, "withColor", {
            get: /**
             * @return {?}
             */ function () {
                return this._withColor;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.withColor) {
                    this._withColor = val;
                    this._withColorClass = this.theme.addStyle("k-tab-with-color:" + val, function (theme) { return ("color:" + theme.colorOf(val) + ";"); }, this.tabsIndicator.nativeElement, this._withColorClass);
                    if (this._selectedTab) {
                        this.theme.updateClass(this._selectedTab.tabIndicator.nativeElement, this.renderer, this._withColorClass);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyTabs.prototype, "selectedIndex", {
            get: /**
             * @return {?}
             */ function () {
                return /** @type {?} */ (this._selectedIndex);
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.selectedIndex) {
                    this._selectedBeforeIndex = /** @type {?} */ (this._selectedIndex);
                    this._selectedIndex = this._findIndex(val, 'auto');
                    this._selectedBeforeTab = this._selectedTab;
                    this.selectedIndexChange.emit(this._selectedIndex);
                    this._updateIndicator(this._selectedTab, this._selectedBeforeTab);
                    if (this._selectedRequireCheck) {
                        this.markForCheck();
                    }
                    this.renderer.setStyle(this.tabContents.nativeElement, 'transform', "translate3d(" + this._selectedIndex * -100 + "%,0,0)");
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyTabs.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.el.nativeElement, this.classes.root);
                /** @type {?} */
                var tabsIndicatorEl = this.tabsIndicator.nativeElement;
                this.renderer.addClass(tabsIndicatorEl, this.classes.tabsIndicator);
                /** Set default Color */
                if (!this.withColor) {
                    this.withColor = 'primary';
                }
            };
        /**
         * @return {?}
         */
        LyTabs.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this._isViewInitLoaded = true;
            };
        /**
         * @return {?}
         */
        LyTabs.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._tabsSubscription = this.tabsList.changes.subscribe(function () {
                    if (_this._selectedIndex !== _this.selectedIndexOnChange) {
                        _this.selectedIndex = _this._findIndex(_this.selectedIndex, _this.selectedIndexOnChange);
                    }
                    _this.cd.markForCheck();
                });
            };
        /**
         * @return {?}
         */
        LyTabs.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._tabsSubscription.unsubscribe();
            };
        /**
         * @return {?}
         */
        LyTabs.prototype._getHostElement = /**
         * @return {?}
         */
            function () {
                return this.el.nativeElement;
            };
        /**
         * @param {?} selectedIndex
         * @param {?} index
         * @return {?}
         */
        LyTabs.prototype._findIndex = /**
         * @param {?} selectedIndex
         * @param {?} index
         * @return {?}
         */
            function (selectedIndex, index) {
                if (!this.tabsList) {
                    return selectedIndex;
                }
                /** @type {?} */
                var indexOfLastTab = this.tabsList.length - 1;
                /** @type {?} */
                var currentIndex = typeof index === 'number' ? index : selectedIndex;
                return currentIndex < 0 ? 0 : currentIndex > indexOfLastTab ? indexOfLastTab : currentIndex;
            };
        /**
         * @param {?} currentTab
         * @param {?=} beforeTab
         * @return {?}
         */
        LyTabs.prototype._updateIndicator = /**
         * @param {?} currentTab
         * @param {?=} beforeTab
         * @return {?}
         */
            function (currentTab, beforeTab) {
                /** @type {?} */
                var currentIndex = this.selectedIndex;
                if (currentTab) {
                    // currentTab = this.tabsList.find(_ => _.index === currentIndex);
                    if (!this._isViewInitLoaded || !i1.Platform.isBrowser) {
                        /** for before initialize or for server */
                        this.renderer.addClass(currentTab.tabIndicator.nativeElement, this.classes.tabsIndicatorForServer);
                        this.renderer.addClass(currentTab.tabIndicator.nativeElement, this._withColorClass);
                    }
                    else {
                        // for after initialize && for browser
                        // Clean before tab
                        if (beforeTab) {
                            beforeTab._renderer.removeAttribute(beforeTab.tabIndicator.nativeElement, 'class');
                        }
                        if (currentTab.index !== currentIndex) {
                            // this fixed undefined selected tab
                            currentTab = this.tabsList.toArray()[currentIndex];
                        }
                        /** @type {?} */
                        var el = /** @type {?} */ (currentTab._el.nativeElement);
                        /** @type {?} */
                        var rects = el.getBoundingClientRect();
                        this.renderer.setStyle(this.tabsIndicator.nativeElement, 'width', rects.width + "px");
                        this.renderer.setStyle(this.tabsIndicator.nativeElement, 'left', el.offsetLeft + "px");
                    }
                }
            };
        /**
         * @return {?}
         */
        LyTabs.prototype.markForCheck = /**
         * @return {?}
         */
            function () {
                this.cd.markForCheck();
            };
        /**
         * @param {?} tab
         * @param {?} index
         * @return {?}
         */
        LyTabs.prototype.loadTemplate = /**
         * @param {?} tab
         * @param {?} index
         * @return {?}
         */
            function (tab, index) {
                if (tab.loaded) {
                    return null;
                }
                tab.index = index;
                if (this.selectedIndex === tab.index) {
                    // set 0 if is null
                    this._selectedTab = tab;
                    this._updateIndicator(tab);
                }
                else if (!this._isViewInitLoaded && this.selectedIndex === tab.index) {
                    this._selectedTab = tab;
                    /** Apply style for tabIndicator server */
                    this._updateIndicator(tab);
                }
                if (tab.templateRefLazy) {
                    if (this.selectedIndex === index) {
                        tab.loaded = true;
                        return tab.templateRefLazy;
                    }
                    else {
                        return null;
                    }
                }
                else {
                    tab.loaded = true;
                    return tab.templateRef;
                }
            };
        LyTabs.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ly-tabs',
                        template: "<div [withClass]=\"classes.tabsLabels\">\n  <ng-content></ng-content>\n  <span #tabsIndicator></span>\n</div>\n<div [withClass]=\"classes.tabContents\" #tabContents>\n  <ng-template ngFor let-item [ngForOf]=\"tabsList\" let-x=\"index\">\n    <div [withClass]=\"classes.tabContent\">\n      <ng-template [ngTransclude]=\"loadTemplate(item, x)\"></ng-template>\n    </div>\n  </ng-template>\n</div>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'lyTabs'
                    },] },
        ];
        /** @nocollapse */
        LyTabs.ctorParameters = function () {
            return [
                { type: LyTabsClassesService },
                { type: i1.LyTheme2 },
                { type: i0.Renderer2 },
                { type: i0.ElementRef },
                { type: i0.ChangeDetectorRef }
            ];
        };
        LyTabs.propDecorators = {
            tabContents: [{ type: i0.ViewChild, args: ['tabContents',] }],
            tabsIndicator: [{ type: i0.ViewChild, args: ['tabsIndicator',] }],
            selectedIndexOnChange: [{ type: i0.Input }],
            native: [{ type: i0.Input }],
            withColor: [{ type: i0.Input }],
            selectedIndex: [{ type: i0.Input }],
            selectedIndexChange: [{ type: i0.Output }],
            withBg: [{ type: i0.Input }],
            tabsList: [{ type: i0.ContentChildren, args: [i0.forwardRef(function () { return LyTab; }),] }]
        };
        return LyTabs;
    }());
    var LyTab = /** @class */ (function () {
        function LyTab(tabsService, tabs, _renderer, _el) {
            this.tabsService = tabsService;
            this.tabs = tabs;
            this._renderer = _renderer;
            this._el = _el;
            this.classes = this.tabsService.classes;
        }
        /**
         * @return {?}
         */
        LyTab.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this.tabs._selectedRequireCheck = !this.loaded;
                this.tabs.selectedIndex = this.index;
            };
        /**
         * @return {?}
         */
        LyTab.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._renderer.addClass(this._el.nativeElement, this.classes.tab);
            };
        /**
         * @return {?}
         */
        LyTab.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this._renderer.addClass(this.tabIndicator.nativeElement, this.classes.tabsIndicator);
            };
        LyTab.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ly-tab',
                        template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<span #tabIndicator></span>\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    },] },
        ];
        /** @nocollapse */
        LyTab.ctorParameters = function () {
            return [
                { type: LyTabsClassesService },
                { type: LyTabs },
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        LyTab.propDecorators = {
            templateRefLazy: [{ type: i0.ContentChild, args: [LyTabContent, { read: i0.TemplateRef },] }],
            templateRef: [{ type: i0.ViewChild, args: [i0.TemplateRef,] }],
            tabIndicator: [{ type: i0.ViewChild, args: ['tabIndicator',] }],
            onClick: [{ type: i0.HostListener, args: ['click',] }]
        };
        return LyTab;
    }());
    var LyTabLabel = /** @class */ (function () {
        function LyTabLabel(renderer, _el, tabsService, rippleService, _ngZone) {
            this.renderer = renderer;
            this._el = _el;
            this.tabsService = tabsService;
            this.rippleService = rippleService;
            this._ngZone = _ngZone;
        }
        /**
         * @return {?}
         */
        LyTabLabel.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this._el.nativeElement, this.tabsService.classes.label);
                if (i1.Platform.isBrowser) {
                    this._rippleContainer = new ripple.Ripple(this._ngZone, this.rippleService.classes, this._el.nativeElement);
                }
            };
        /**
         * @return {?}
         */
        LyTabLabel.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (i1.Platform.isBrowser) {
                    this._rippleContainer.removeEvents();
                }
            };
        LyTabLabel.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-tab-label, [ly-tab-label]'
                    },] },
        ];
        /** @nocollapse */
        LyTabLabel.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef },
                { type: LyTabsClassesService },
                { type: ripple.LyRippleService },
                { type: i0.NgZone }
            ];
        };
        return LyTabLabel;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyTabsModule = /** @class */ (function () {
        function LyTabsModule() {
        }
        LyTabsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1.LyThemeModule, common.CommonModule, i1.LyCommonModule, ripple.LyRippleModule, i1.NgTranscludeModule],
                        exports: [LyTabs, LyTab, LyTabLabel, LyTabContent],
                        declarations: [LyTabs, LyTab, LyTabLabel, LyTabContent]
                    },] },
        ];
        return LyTabsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    // export * from './tab-label.directive';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LyTabsModule = LyTabsModule;
    exports.LyTabs = LyTabs;
    exports.LyTab = LyTab;
    exports.LyTabLabel = LyTabLabel;
    exports.ɵa = LyTabContent;
    exports.ɵb = LyTabsClassesService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90YWJzL3RhYi1jb250ZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFicy5jbGFzZXNzLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvcHVibGljX2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tseS10YWItY29udGVudF0nfSlcbmV4cG9ydCBjbGFzcyBMeVRhYkNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCB0YWJzU3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgdGFiOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4J1xuICB9LFxuICB0YWJzTGFiZWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBsYWJlbDoge1xuICAgIG1pbldpZHRoOiAnNzJweCcsXG4gICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIHRhYkNvbnRlbnRzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHRyYW5zaXRpb246ICc0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gIH0sXG4gIHRhYkNvbnRlbnQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgdGFic0luZGljYXRvcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRyYW5zaXRpb246ICc0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgIGJvdHRvbTogMCxcbiAgICBoZWlnaHQ6ICcycHgnLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgdGFic0luZGljYXRvckZvclNlcnZlcjoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfVxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzQ2xhc3Nlc1NlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHRhYnNTdHlsZXMsICdseVRhYnMnKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgSG9zdExpc3RlbmVyLFxuICBmb3J3YXJkUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEFmdGVyVmlld0luaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUYWJzQ2xhc3Nlc1NlcnZpY2UgfSBmcm9tICcuL3RhYnMuY2xhc2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBQbGF0Zm9ybSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJpcHBsZSwgTHlSaXBwbGVTZXJ2aWNlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYnMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW3dpdGhDbGFzc109XCJjbGFzc2VzLnRhYnNMYWJlbHNcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8c3BhbiAjdGFic0luZGljYXRvcj48L3NwYW4+XG48L2Rpdj5cbjxkaXYgW3dpdGhDbGFzc109XCJjbGFzc2VzLnRhYkNvbnRlbnRzXCIgI3RhYkNvbnRlbnRzPlxuICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWl0ZW0gW25nRm9yT2ZdPVwidGFic0xpc3RcIiBsZXQteD1cImluZGV4XCI+XG4gICAgPGRpdiBbd2l0aENsYXNzXT1cImNsYXNzZXMudGFiQ29udGVudFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RyYW5zY2x1ZGVdPVwibG9hZFRlbXBsYXRlKGl0ZW0sIHgpXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ2x5VGFicydcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBfc2VsZWN0ZWRJbmRleCA9IDA7XG4gIF9zZWxlY3RlZEJlZm9yZUluZGV4OiBudW1iZXI7XG4gIF9zZWxlY3RlZFJlcXVpcmVDaGVjazogYm9vbGVhbjtcbiAgX3NlbGVjdGVkVGFiOiBMeVRhYjtcbiAgX3NlbGVjdGVkQmVmb3JlVGFiOiBMeVRhYjtcbiAgcHJpdmF0ZSBfdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfaXNWaWV3SW5pdExvYWRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX3dpdGhDb2xvckNsYXNzOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGNsYXNzZXM7XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnRzJykgdGFiQ29udGVudHM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYnNJbmRpY2F0b3InKSB0YWJzSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4T25DaGFuZ2U6ICdhdXRvJyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCkgbmF0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX3dpdGhDb2xvckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGstdGFiLXdpdGgtY29sb3I6JHt2YWx9YCxcbiAgICAgICAgdGhlbWUgPT4gKFxuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX07YFxuICAgICAgICApLFxuICAgICAgICB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkVGFiKSB7XG4gICAgICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fc2VsZWN0ZWRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMuX3dpdGhDb2xvckNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZUluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCBhcyBudW1iZXI7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHZhbCwgJ2F1dG8nKTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlVGFiID0gdGhpcy5fc2VsZWN0ZWRUYWI7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcbiAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0aGlzLl9zZWxlY3RlZFRhYiwgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIpO1xuXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRSZXF1aXJlQ2hlY2spIHtcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJDb250ZW50cy5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7dGhpcy5fc2VsZWN0ZWRJbmRleCAqIC0xMDB9JSwwLDApYCk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgfVxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHdpdGhCZzogc3RyaW5nO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlUYWIpKSB0YWJzTGlzdDogUXVlcnlMaXN0PEx5VGFiPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0YWJzU2VydmljZTogTHlUYWJzQ2xhc3Nlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHRoaXMuY2xhc3NlcyA9IHRhYnNTZXJ2aWNlLmNsYXNzZXM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGNvbnN0IHRhYnNJbmRpY2F0b3JFbCA9IHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFic0luZGljYXRvckVsLCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcik7XG4gICAgLyoqIFNldCBkZWZhdWx0IENvbG9yICovXG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy53aXRoQ29sb3IgPSAncHJpbWFyeSc7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2lzVmlld0luaXRMb2FkZWQgPSB0cnVlO1xuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uID0gdGhpcy50YWJzTGlzdC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCwgdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfZmluZEluZGV4KHNlbGVjdGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICghdGhpcy50YWJzTGlzdCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZMYXN0VGFiID0gdGhpcy50YWJzTGlzdC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHNlbGVjdGVkSW5kZXg7XG4gICAgcmV0dXJuIGN1cnJlbnRJbmRleCA8IDAgPyAwIDogY3VycmVudEluZGV4ID4gaW5kZXhPZkxhc3RUYWIgPyBpbmRleE9mTGFzdFRhYiA6IGN1cnJlbnRJbmRleDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUluZGljYXRvcihjdXJyZW50VGFiOiBMeVRhYiwgYmVmb3JlVGFiPzogTHlUYWIpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGN1cnJlbnRUYWIpIHtcbiAgICAgIC8vIGN1cnJlbnRUYWIgPSB0aGlzLnRhYnNMaXN0LmZpbmQoXyA9PiBfLmluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuICAgICAgaWYgKCF0aGlzLl9pc1ZpZXdJbml0TG9hZGVkIHx8ICFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgLyoqIGZvciBiZWZvcmUgaW5pdGlhbGl6ZSBvciBmb3Igc2VydmVyICovXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY3VycmVudFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGN1cnJlbnRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3dpdGhDb2xvckNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGZvciBhZnRlciBpbml0aWFsaXplICYmIGZvciBicm93c2VyXG4gICAgICAgIC8vIENsZWFuIGJlZm9yZSB0YWJcbiAgICAgICAgaWYgKGJlZm9yZVRhYikge1xuICAgICAgICAgIGJlZm9yZVRhYi5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGJlZm9yZVRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRUYWIuaW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgIC8vIHRoaXMgZml4ZWQgdW5kZWZpbmVkIHNlbGVjdGVkIHRhYlxuICAgICAgICAgIGN1cnJlbnRUYWIgPSB0aGlzLnRhYnNMaXN0LnRvQXJyYXkoKVtjdXJyZW50SW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsID0gY3VycmVudFRhYi5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgcmVjdHMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7cmVjdHMud2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBgJHtlbC5vZmZzZXRMZWZ0fXB4YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBsb2FkVGVtcGxhdGUodGFiOiBMeVRhYiwgaW5kZXg6IG51bWJlcik6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD4gfCBudWxsIHtcbiAgICBpZiAodGFiLmxvYWRlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRhYi5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgLy8gc2V0IDAgaWYgaXMgbnVsbFxuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGFiKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1ZpZXdJbml0TG9hZGVkICYmIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgIC8qKiBBcHBseSBzdHlsZSBmb3IgdGFiSW5kaWNhdG9yIHNlcnZlciAqL1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgfVxuICAgIGlmICh0YWIudGVtcGxhdGVSZWZMYXp5KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSBpbmRleCkge1xuICAgICAgICB0YWIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRhYi50ZW1wbGF0ZVJlZkxhenk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFiLmxvYWRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdGFiLnRlbXBsYXRlUmVmO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cImx5LXRhYi1sYWJlbFwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltseS10YWItbGFiZWxdXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2x5LXRhYi1sYWJlbC1uYXRpdmVdXCI+PC9uZy1jb250ZW50PlxuPHNwYW4gI3RhYkluZGljYXRvcj48L3NwYW4+XG48bmctdGVtcGxhdGU+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWIgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBpbmRleDogbnVtYmVyO1xuICBsb2FkZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCByZWFkb25seSBjbGFzc2VzO1xuICBAQ29udGVudENoaWxkKEx5VGFiQ29udGVudCwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0ZW1wbGF0ZVJlZkxhenk6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD47XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0YWJJbmRpY2F0b3InKSB0YWJJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGljaygpIHtcbiAgICB0aGlzLnRhYnMuX3NlbGVjdGVkUmVxdWlyZUNoZWNrID0gIXRoaXMubG9hZGVkO1xuICAgIHRoaXMudGFicy5zZWxlY3RlZEluZGV4ID0gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFic1NlcnZpY2U6IEx5VGFic0NsYXNzZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGFiczogTHlUYWJzLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuY2xhc3NlcyA9IHRoaXMudGFic1NlcnZpY2UuY2xhc3NlcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWIpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10YWItbGFiZWwsIFtseS10YWItbGFiZWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYkxhYmVsIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9yaXBwbGVDb250YWluZXI6IFJpcHBsZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGFic1NlcnZpY2U6IEx5VGFic0NsYXNzZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnRhYnNTZXJ2aWNlLmNsYXNzZXMubGFiZWwpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUodGhpcy5fbmdab25lLCB0aGlzLnJpcHBsZVNlcnZpY2UuY2xhc3NlcywgdGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGRlbW8gYmFzaWNcbiAqIDxseS10YWJzIHdpdGhDb2xvcj1cImFjY2VudFwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxseS10YWItbGFiZWw+SE9NRTxseS10YWItbGFiZWw+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWw+SE9NRTxidXR0b24+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWwtbmF0aXZlIGx5LWJ1dHRvbj5IT01FPGJ1dHRvbj5cbiAqICAgICA8YSBbcm91dGVyTGlua109XCJbJ2hvbWUnXVwiIGx5LXRhYi1sYWJlbCBuYXRpdmUgbHktYnV0dG9uPkhPTUU8YT5cbiAqICAgICBDb250ZW50XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqXG4gKiBkZW1vIGxhenkgbG9hZGluZ1xuICogPGx5LXRhYnMgd2l0aEJnPVwicHJpbWFyeVwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxseS10YWItbGFiZWw+SE9NRTxseS10YWItbGFiZWw+XG4gKiAgICAgPG5nLXRlbXBsYXRlIGx5LXRhYi1jb250ZW50PjwvbmctdGVtcGxhdGU+XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqID0+IHdpdGhDb2xvcjogY29sb3IgZGVsIGxhYmVsIGFjdGl2YSwgZGVmYXVsdCBwcmltYXJ5XG4gKiA9PiB3aXRoQmc6IGNvbG9yIGRlIGZvbmRvIHBhcmEgbGEgdGFiLCBkZWZhdWx0IGJhY2tncm91bmQ6cHJpbWFyeVxuICogPT4gbmF0aXZlOiBubyBhcGxpY2EgbG9zIGVzdGlsb3MgcHJlZGV0ZXJtaW5hZG9zLCBkZWZhdWx0IHVuZGVmaW5lZFxuICogPT4gZGlzYWJsZWQ6IERpc2FibGUvZW5hYmxlIGEgdGFiLCBkZWZhdWx0IHVuZGVmaW5lZFxuICogPT4gaXNBY3RpdmU6IFNpIGxhIHBlc3Rhw4PCsWEgZXN0w4PCoSBhY3R1YWxtZW50ZSBhY3RpdmEuLCBkZWZhdWx0IHVuZGVmaW5lZFxuICogPT4gc2VsZWN0ZWRJbmRleE9uQ2hhbmdlLCBkZWZhdWx0OiBhdXRvLCBvcHRzOiBudW1iZXIsIHdpdGggYXV0bywgdGhlIHNlbGVjdGVkSW5kZXggPSBjdXJyZW50IG8gY3VycmVudC0xIG9yIGxhdGVzdFxuICovXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nVHJhbnNjbHVkZU1vZHVsZSwgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5VGFicywgTHlUYWJMYWJlbCwgTHlUYWIgfSBmcm9tICcuL3RhYnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0x5VGhlbWVNb2R1bGUsIENvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBOZ1RyYW5zY2x1ZGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNNb2R1bGUgeyB9XG4iLCJleHBvcnQgKiBmcm9tICcuL3RhYnMubW9kdWxlJztcbi8vIGV4cG9ydCAqIGZyb20gJy4vdGFicyc7XG5leHBvcnQgKiBmcm9tICcuL3RhYnMuZGlyZWN0aXZlJztcbi8vIGV4cG9ydCAqIGZyb20gJy4vdGFiLWxhYmVsLmRpcmVjdGl2ZSc7XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJJbmplY3RhYmxlIiwiTHlUaGVtZTIiLCJTdWJzY3JpcHRpb24iLCJFdmVudEVtaXR0ZXIiLCJQbGF0Zm9ybSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJWaWV3Q2hpbGQiLCJJbnB1dCIsIk91dHB1dCIsIkNvbnRlbnRDaGlsZHJlbiIsImZvcndhcmRSZWYiLCJDb250ZW50Q2hpbGQiLCJIb3N0TGlzdGVuZXIiLCJSaXBwbGUiLCJMeVJpcHBsZVNlcnZpY2UiLCJOZ1pvbmUiLCJOZ01vZHVsZSIsIkx5VGhlbWVNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSIsIkx5UmlwcGxlTW9kdWxlIiwiTmdUcmFuc2NsdWRlTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFJRSxzQkFBbUIsUUFBMEI7WUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7U0FBSzs7b0JBRm5EQSxZQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUM7Ozs7O3dCQUZ0QkMsY0FBVzs7OzJCQUE5Qjs7Ozs7OztBQ0FBO0lBR0EsSUFBTSxVQUFVLEdBQUc7UUFDakIsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLFFBQVE7U0FDbkI7UUFDRCxHQUFHLEVBQUU7WUFDSCxRQUFRLEVBQUUsVUFBVTtZQUNwQixPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELFVBQVUsRUFBRTtZQUNWLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsUUFBUTtTQUNuQjtRQUNELEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLGFBQWE7WUFDdEIsY0FBYyxFQUFFLFFBQVE7WUFDeEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLFFBQVE7U0FDbkI7UUFDRCxXQUFXLEVBQUU7WUFDWCxPQUFPLEVBQUUsTUFBTTtZQUNmLFVBQVUsRUFBRSxtQ0FBbUM7WUFDL0MsVUFBVSxFQUFFLFdBQVc7U0FDeEI7UUFDRCxV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