(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('rxjs'), require('@angular/common'), require('@alyle/ui/ripple')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/tabs', ['exports', '@angular/core', '@alyle/ui', 'rxjs', '@angular/common', '@alyle/ui/ripple'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.tabs = {}),global.ng.core,global.alyle.ui,global.rxjs,global.ng.common,global.alyle.ui.ripple));
}(this, (function (exports,i0,i1,rxjs,common,ripple) { 'use strict';

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
            'flex-grow': 1,
            overflow: 'hidden'
        },
        tabLabel: {
            'min-width': '72px',
            padding: '0 24px',
            cursor: 'pointer',
            height: '48px',
            display: 'inline-flex',
            'justify-content': 'center',
            'align-items': 'center'
        },
        tabContents: {
            display: 'flex',
            transition: '450ms cubic-bezier(.1, 1, 0.5, 1)',
            'will-change': 'transform'
        },
        tabContent: {
            width: '100%',
            'flex-shrink': 0,
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
                        /**
                                 * TODO: tabs: update indicator when change `selectedIndex`
                                 */
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
                        template: "<div [withClass]=\"classes.tabsLabels\">\n  <span #tabsIndicator></span>\n  <ng-content></ng-content>\n</div>\n<div [withClass]=\"classes.tabContents\" #tabContents>\n  <ng-template ngFor let-item [ngForOf]=\"tabsList\" let-x=\"index\">\n    <div [withClass]=\"classes.tabContent\">\n      <ng-template [ngTransclude]=\"loadTemplate(item, x)\"></ng-template>\n    </div>\n  </ng-template>\n</div>",
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
                        template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<span #tabIndicator></span>\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
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
        function LyTabLabel(renderer, el, tabsService) {
            this.renderer = renderer;
            this.el = el;
            this.tabsService = tabsService;
        }
        /**
         * @return {?}
         */
        LyTabLabel.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.el.nativeElement, this.tabsService.classes.tabLabel);
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
                { type: LyTabsClassesService }
            ];
        };
        LyTabLabel.propDecorators = {
            native: [{ type: i0.Input }]
        };
        return LyTabLabel;
    }());
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90YWJzL3RhYi1jb250ZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFicy5jbGFzZXNzLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvcHVibGljX2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tseS10YWItY29udGVudF0nfSlcbmV4cG9ydCBjbGFzcyBMeVRhYkNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCB0YWJzU3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgdGFiOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4J1xuICB9LFxuICB0YWJzTGFiZWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICdmbGV4LWdyb3cnOiAxLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICB0YWJMYWJlbDoge1xuICAgICdtaW4td2lkdGgnOiAnNzJweCcsXG4gICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcicsXG4gICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcidcbiAgfSxcbiAgdGFiQ29udGVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgJ3dpbGwtY2hhbmdlJzogJ3RyYW5zZm9ybSdcbiAgfSxcbiAgdGFiQ29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgJ2ZsZXgtc2hyaW5rJzogMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgYm90dG9tOiAwLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yRm9yU2VydmVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNDbGFzc2VzU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQodGFic1N0eWxlcywgJ2x5VGFicycpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBIb3N0TGlzdGVuZXIsXG4gIGZvcndhcmRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUYWJzQ2xhc3Nlc1NlcnZpY2UgfSBmcm9tICcuL3RhYnMuY2xhc2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBQbGF0Zm9ybSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFicycsXG4gIHRlbXBsYXRlOiBgPGRpdiBbd2l0aENsYXNzXT1cImNsYXNzZXMudGFic0xhYmVsc1wiPlxuICA8c3BhbiAjdGFic0luZGljYXRvcj48L3NwYW4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuPGRpdiBbd2l0aENsYXNzXT1cImNsYXNzZXMudGFiQ29udGVudHNcIiAjdGFiQ29udGVudHM+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJ0YWJzTGlzdFwiIGxldC14PVwiaW5kZXhcIj5cbiAgICA8ZGl2IFt3aXRoQ2xhc3NdPVwiY2xhc3Nlcy50YWJDb250ZW50XCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVHJhbnNjbHVkZV09XCJsb2FkVGVtcGxhdGUoaXRlbSwgeClcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIF9zZWxlY3RlZEluZGV4ID0gMDtcbiAgX3NlbGVjdGVkQmVmb3JlSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkUmVxdWlyZUNoZWNrOiBib29sZWFuO1xuICBfc2VsZWN0ZWRUYWI6IEx5VGFiO1xuICBfc2VsZWN0ZWRCZWZvcmVUYWI6IEx5VGFiO1xuICBwcml2YXRlIF90YWJzU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pc1ZpZXdJbml0TG9hZGVkOiBib29sZWFuO1xuICBwcml2YXRlIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfd2l0aENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcmVhZG9ubHkgY2xhc3NlcztcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudHMnKSB0YWJDb250ZW50czogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFic0luZGljYXRvcicpIHRhYnNJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXhPbkNoYW5nZTogJ2F1dG8nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX3dpdGhDb2xvckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGstdGFiLXdpdGgtY29sb3I6JHt2YWx9YCxcbiAgICAgICAgdGhlbWUgPT4gKFxuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX07YFxuICAgICAgICApLFxuICAgICAgICB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkVGFiKSB7XG4gICAgICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fc2VsZWN0ZWRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMuX3dpdGhDb2xvckNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZUluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCBhcyBudW1iZXI7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHZhbCwgJ2F1dG8nKTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlVGFiID0gdGhpcy5fc2VsZWN0ZWRUYWI7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcbiAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0aGlzLl9zZWxlY3RlZFRhYiwgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIpO1xuXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRSZXF1aXJlQ2hlY2spIHtcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJDb250ZW50cy5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7dGhpcy5fc2VsZWN0ZWRJbmRleCAqIC0xMDB9JSwwLDApYCk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgfVxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHdpdGhCZzogc3RyaW5nO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlUYWIpKSB0YWJzTGlzdDogUXVlcnlMaXN0PEx5VGFiPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0YWJzU2VydmljZTogTHlUYWJzQ2xhc3Nlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5jbGFzc2VzID0gdGFic1NlcnZpY2UuY2xhc3NlcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgY29uc3QgdGFic0luZGljYXRvckVsID0gdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YWJzSW5kaWNhdG9yRWwsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgICAvKiogU2V0IGRlZmF1bHQgQ29sb3IgKi9cbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9ICdwcmltYXJ5JztcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5faXNWaWV3SW5pdExvYWRlZCA9IHRydWU7XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24gPSB0aGlzLnRhYnNMaXN0LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4LCB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbmRJbmRleChzZWxlY3RlZEluZGV4OiBudW1iZXIsIGluZGV4OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMudGFic0xpc3QpIHtcbiAgICAgIHJldHVybiBzZWxlY3RlZEluZGV4O1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mTGFzdFRhYiA9IHRoaXMudGFic0xpc3QubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInID8gaW5kZXggOiBzZWxlY3RlZEluZGV4O1xuICAgIHJldHVybiBjdXJyZW50SW5kZXggPCAwID8gMCA6IGN1cnJlbnRJbmRleCA+IGluZGV4T2ZMYXN0VGFiID8gaW5kZXhPZkxhc3RUYWIgOiBjdXJyZW50SW5kZXg7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVJbmRpY2F0b3IoY3VycmVudFRhYjogTHlUYWIsIGJlZm9yZVRhYj86IEx5VGFiKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChjdXJyZW50VGFiKSB7XG4gICAgICAvLyBjdXJyZW50VGFiID0gdGhpcy50YWJzTGlzdC5maW5kKF8gPT4gXy5pbmRleCA9PT0gY3VycmVudEluZGV4KTtcbiAgICAgIGlmICghdGhpcy5faXNWaWV3SW5pdExvYWRlZCB8fCAhUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAgIC8qKiBmb3IgYmVmb3JlIGluaXRpYWxpemUgb3IgZm9yIHNlcnZlciAqL1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGN1cnJlbnRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjdXJyZW50VGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLl93aXRoQ29sb3JDbGFzcyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUT0RPOiB0YWJzOiB1cGRhdGUgaW5kaWNhdG9yIHdoZW4gY2hhbmdlIGBzZWxlY3RlZEluZGV4YFxuICAgICAgICAgKi9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGZvciBhZnRlciBpbml0aWFsaXplICYmIGZvciBicm93c2VyXG4gICAgICAgIC8vIENsZWFuIGJlZm9yZSB0YWJcbiAgICAgICAgaWYgKGJlZm9yZVRhYikge1xuICAgICAgICAgIGJlZm9yZVRhYi5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGJlZm9yZVRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRUYWIuaW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgIC8vIHRoaXMgZml4ZWQgdW5kZWZpbmVkIHNlbGVjdGVkIHRhYlxuICAgICAgICAgIGN1cnJlbnRUYWIgPSB0aGlzLnRhYnNMaXN0LnRvQXJyYXkoKVtjdXJyZW50SW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsID0gY3VycmVudFRhYi5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgcmVjdHMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7cmVjdHMud2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBgJHtlbC5vZmZzZXRMZWZ0fXB4YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBsb2FkVGVtcGxhdGUodGFiOiBMeVRhYiwgaW5kZXg6IG51bWJlcik6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD4gfCBudWxsIHtcbiAgICBpZiAodGFiLmxvYWRlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRhYi5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgLy8gc2V0IDAgaWYgaXMgbnVsbFxuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGFiKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1ZpZXdJbml0TG9hZGVkICYmIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgIC8qKiBBcHBseSBzdHlsZSBmb3IgdGFiSW5kaWNhdG9yIHNlcnZlciAqL1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgfVxuICAgIGlmICh0YWIudGVtcGxhdGVSZWZMYXp5KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSBpbmRleCkge1xuICAgICAgICB0YWIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRhYi50ZW1wbGF0ZVJlZkxhenk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFiLmxvYWRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdGFiLnRlbXBsYXRlUmVmO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cImx5LXRhYi1sYWJlbFwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltseS10YWItbGFiZWxdXCI+PC9uZy1jb250ZW50PlxuPHNwYW4gI3RhYkluZGljYXRvcj48L3NwYW4+XG48bmctdGVtcGxhdGU+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWIgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBpbmRleDogbnVtYmVyO1xuICBsb2FkZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCByZWFkb25seSBjbGFzc2VzO1xuICBAQ29udGVudENoaWxkKEx5VGFiQ29udGVudCwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0ZW1wbGF0ZVJlZkxhenk6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD47XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0YWJJbmRpY2F0b3InKSB0YWJJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGljaygpIHtcbiAgICB0aGlzLnRhYnMuX3NlbGVjdGVkUmVxdWlyZUNoZWNrID0gIXRoaXMubG9hZGVkO1xuICAgIHRoaXMudGFicy5zZWxlY3RlZEluZGV4ID0gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFic1NlcnZpY2U6IEx5VGFic0NsYXNzZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGFiczogTHlUYWJzLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmLFxuICApIHtcbiAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLnRhYnNTZXJ2aWNlLmNsYXNzZXM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFiKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdGFiLWxhYmVsLCBbbHktdGFiLWxhYmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG5hdGl2ZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRhYnNTZXJ2aWNlOiBMeVRhYnNDbGFzc2VzU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnRhYnNTZXJ2aWNlLmNsYXNzZXMudGFiTGFiZWwpO1xuICB9XG59XG4vKipcbiAqIGRlbW8gYmFzaWNcbiAqIDxseS10YWJzIHdpdGhDb2xvcj1cImFjY2VudFwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxseS10YWItbGFiZWw+SE9NRTxseS10YWItbGFiZWw+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWw+SE9NRTxidXR0b24+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWwgbmF0aXZlIGx5LWJ1dHRvbj5IT01FPGJ1dHRvbj5cbiAqICAgICA8YSBbcm91dGVyTGlua109XCJbJ2hvbWUnXVwiIGx5LXRhYi1sYWJlbCBuYXRpdmUgbHktYnV0dG9uPkhPTUU8YT5cbiAqICAgICBDb250ZW50XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqXG4gKiBkZW1vIGxhenkgbG9hZGluZ1xuICogPGx5LXRhYnMgd2l0aEJnPVwicHJpbWFyeVwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxseS10YWItbGFiZWw+SE9NRTxseS10YWItbGFiZWw+XG4gKiAgICAgPG5nLXRlbXBsYXRlIGx5LXRhYi1jb250ZW50PjwvbmctdGVtcGxhdGU+XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqID0+IHdpdGhDb2xvcjogY29sb3IgZGVsIGxhYmVsIGFjdGl2YSwgZGVmYXVsdCBwcmltYXJ5XG4gKiA9PiB3aXRoQmc6IGNvbG9yIGRlIGZvbmRvIHBhcmEgbGEgdGFiLCBkZWZhdWx0IGJhY2tncm91bmQ6cHJpbWFyeVxuICogPT4gbmF0aXZlOiBubyBhcGxpY2EgbG9zIGVzdGlsb3MgcHJlZGV0ZXJtaW5hZG9zLCBkZWZhdWx0IHVuZGVmaW5lZFxuICogPT4gZGlzYWJsZWQ6IERpc2FibGUvZW5hYmxlIGEgdGFiLCBkZWZhdWx0IHVuZGVmaW5lZFxuICogPT4gaXNBY3RpdmU6IFNpIGxhIHBlc3Rhw4PCsWEgZXN0w4PCoSBhY3R1YWxtZW50ZSBhY3RpdmEuLCBkZWZhdWx0IHVuZGVmaW5lZFxuICogPT4gc2VsZWN0ZWRJbmRleE9uQ2hhbmdlLCBkZWZhdWx0OiBhdXRvLCBvcHRzOiBudW1iZXIsIHdpdGggYXV0bywgdGhlIHNlbGVjdGVkSW5kZXggPSBjdXJyZW50IG8gY3VycmVudC0xIG9yIGxhdGVzdFxuICovXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nVHJhbnNjbHVkZU1vZHVsZSwgTHlDb21tb25Nb2R1bGUsIEx5VGhlbWVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5VGFicywgTHlUYWJMYWJlbCwgTHlUYWIgfSBmcm9tICcuL3RhYnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0x5VGhlbWVNb2R1bGUsIENvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBOZ1RyYW5zY2x1ZGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNNb2R1bGUgeyB9XG4iLCJleHBvcnQgKiBmcm9tICcuL3RhYnMubW9kdWxlJztcbi8vIGV4cG9ydCAqIGZyb20gJy4vdGFicyc7XG5leHBvcnQgKiBmcm9tICcuL3RhYnMuZGlyZWN0aXZlJztcbi8vIGV4cG9ydCAqIGZyb20gJy4vdGFiLWxhYmVsLmRpcmVjdGl2ZSc7XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJJbmplY3RhYmxlIiwiTHlUaGVtZTIiLCJTdWJzY3JpcHRpb24iLCJFdmVudEVtaXR0ZXIiLCJQbGF0Zm9ybSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJWaWV3Q2hpbGQiLCJJbnB1dCIsIk91dHB1dCIsIkNvbnRlbnRDaGlsZHJlbiIsImZvcndhcmRSZWYiLCJDb250ZW50Q2hpbGQiLCJIb3N0TGlzdGVuZXIiLCJOZ01vZHVsZSIsIkx5VGhlbWVNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSIsIkx5UmlwcGxlTW9kdWxlIiwiTmdUcmFuc2NsdWRlTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFJRSxzQkFBbUIsUUFBMEI7WUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7U0FBSzs7b0JBRm5EQSxZQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUM7Ozs7O3dCQUZ0QkMsY0FBVzs7OzJCQUE5Qjs7Ozs7OztBQ0FBO0lBR0EsSUFBTSxVQUFVLEdBQUc7UUFDakIsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLFFBQVE7U0FDbkI7UUFDRCxHQUFHLEVBQUU7WUFDSCxRQUFRLEVBQUUsVUFBVTtZQUNwQixPQUFPLEVBQUUsYUFBYTtTQUN2QjtRQUNELFVBQVUsRUFBRTtZQUNWLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLENBQUM7WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNuQjtRQUNELFFBQVEsRUFBRTtZQUNSLFdBQVcsRUFBRSxNQUFNO1lBQ25CLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLGFBQWE7WUFDdEIsaUJBQWlCLEVBQUUsUUFBUTtZQUMzQixhQUFhLEVBQUUsUUFBUTtTQUN4QjtRQUNELFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRSxNQUFNO1lBQ2YsVUFBVSxFQUFFLG1DQUFtQztZQUMvQyxhQUFhLEVBQUUsV0FBVztTQUMzQjtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxNQUFNO1lBQ2IsYUFBYSxFQUFFLENBQUM7WUFDaEIsUUFBUSxFQUFFLFVBQVU7U0FDckI7UUFDRCxhQUFhLEVBQUU7WUFDYixRQUFRLEVBQUUsVUFBVTtZQUNwQixVQUFVLEVBQUUsbUNBQW1DO1lBQy9DLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsQ0FBQztZQUNQLFVBQVUsRUFBRSxjQUFjO1NBQzNCO1FBQ0Qsc0JBQXNCLEVBQUU7WUFDdEIsS0FBSyxFQUFFLE1BQU07U0FDZDtLQUNGLENBQUM7O1FBT0EsOEJBQ1U7WUFBQSxVQUFLLEdBQUwsS0FBSzsyQkFGTCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO1NBR25EOztvQkFQTkMsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7d0JBbkRRQyxXQUFROzs7O21DQURqQjs7Ozs7OztBQ0FBO1FBbUdFLGdCQUNFLFdBQWlDLEVBQ3pCLE9BQ0EsVUFDQSxJQUNBO1lBSEEsVUFBSyxHQUFMLEtBQUs7WUFDTCxhQUFRLEdBQVIsUUFBUTtZQUNSLE9BQUUsR0FBRixFQUFFO1lBQ0YsT0FBRSxHQUFGLEVBQUU7a0NBMURLLENBQUM7cUNBS1VDLGlCQUFZLENBQUMsS0FBSzt5Q0FPSSxNQUFNO3VDQXFDTCxJQUFJQyxlQUFZLEVBQUU7WUFXbkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1NBQ3BDO1FBaERELHNCQUNJLDZCQUFTOzs7Z0JBY2I7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3hCOzs7O2dCQWpCRCxVQUNjLEdBQVc7Z0JBQ3ZCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO29CQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUN4QyxzQkFBb0IsR0FBSyxFQUN6QixVQUFBLEtBQUssSUFBSSxRQUNQLFdBQVMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBRyxJQUMvQixFQUNELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO3dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQzNHO2lCQUNGO2FBQ0Y7OztXQUFBO1FBSUQsc0JBQ0ksaUNBQWE7OztnQkFjakI7Z0JBQ0UseUJBQU8sSUFBSSxDQUFDLGNBQXdCLEVBQUM7YUFDdEM7Ozs7Z0JBakJELFVBQ2tCLEdBQVc7Z0JBQzNCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxvQkFBb0IscUJBQUcsSUFBSSxDQUFDLGNBQXdCLENBQUEsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQzVDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFFbEUsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7d0JBQzlCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztxQkFDckI7b0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGlCQUFlLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLFdBQVEsQ0FBQyxDQUFDO2lCQUN4SDthQUNGOzs7V0FBQTs7OztRQWtCRCx5QkFBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Z0JBQ2pFLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO2dCQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Z0JBRXBFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztpQkFDNUI7YUFDRjs7OztRQUVELGdDQUFlOzs7WUFBZjtnQkFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2FBQy9COzs7O1FBQ0QsbUNBQWtCOzs7WUFBbEI7Z0JBQUEsaUJBT0M7Z0JBTkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztvQkFDdkQsSUFBSSxLQUFJLENBQUMsY0FBYyxLQUFLLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTt3QkFDdEQsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7cUJBQ3RGO29CQUNELEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3hCLENBQUMsQ0FBQzthQUNKOzs7O1FBQ0QsNEJBQVc7OztZQUFYO2dCQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN0Qzs7Ozs7O1FBRU8sMkJBQVU7Ozs7O3NCQUFDLGFBQXFCLEVBQUUsS0FBc0I7Z0JBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNsQixPQUFPLGFBQWEsQ0FBQztpQkFDdEI7O2dCQUNELElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2hELElBQU0sWUFBWSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBRyxLQUFLLEdBQUcsYUFBYSxDQUFDO2dCQUN2RSxPQUFPLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLFlBQVksQ0FBQzs7Ozs7OztRQUd0RixpQ0FBZ0I7Ozs7O3NCQUFDLFVBQWlCLEVBQUUsU0FBaUI7O2dCQUMzRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUN4QyxJQUFJLFVBQVUsRUFBRTs7b0JBRWQsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDQyxXQUFRLENBQUMsU0FBUyxFQUFFOzt3QkFFbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3dCQUNuRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7cUJBSXJGO3lCQUFNOzs7d0JBR0wsSUFBSSxTQUFTLEVBQUU7NEJBQ2IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7eUJBQ3BGO3dCQUNELElBQUksVUFBVSxDQUFDLEtBQUssS0FBSyxZQUFZLEVBQUU7OzRCQUVyQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQzt5QkFDcEQ7O3dCQUNELElBQU0sRUFBRSxxQkFBRyxVQUFVLENBQUMsR0FBRyxDQUFDLGFBQTRCLEVBQUM7O3dCQUN2RCxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQzt3QkFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFLLEtBQUssQ0FBQyxLQUFLLE9BQUksQ0FBQyxDQUFDO3dCQUN0RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUssRUFBRSxDQUFDLFVBQVUsT0FBSSxDQUFDLENBQUM7cUJBQ3hGO2lCQUNGOzs7OztRQUdILDZCQUFZOzs7WUFBWjtnQkFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3hCOzs7Ozs7UUFFRCw2QkFBWTs7Ozs7WUFBWixVQUFhLEdBQVUsRUFBRSxLQUFhO2dCQUNwQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7b0JBQ2QsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBQ0QsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFOztvQkFFcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDNUI7cUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUU7b0JBQ3RFLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDOztvQkFFeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM1QjtnQkFDRCxJQUFJLEdBQUcsQ0FBQyxlQUFlLEVBQUU7b0JBQ3ZCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLEVBQUU7d0JBQ2hDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNsQixPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQUM7cUJBQzVCO3lCQUFNO3dCQUNMLE9BQU8sSUFBSSxDQUFDO3FCQUNiO2lCQUNGO3FCQUFNO29CQUNMLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNsQixPQUFPLEdBQUcsQ0FBQyxXQUFXLENBQUM7aUJBQ3hCO2FBQ0Y7O29CQTdLRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxTQUFTO3dCQUNuQixRQUFRLEVBQUUsOFlBVUw7d0JBQ0wsZUFBZSxFQUFFQywwQkFBdUIsQ0FBQyxNQUFNO3dCQUMvQyxhQUFhLEVBQUVDLG9CQUFpQixDQUFDLElBQUk7d0JBQ3JDLFFBQVEsRUFBRSxRQUFRO3FCQUNuQjs7Ozs7d0JBcEJRLG9CQUFvQjt3QkFDcEJOLFdBQVE7d0JBVmZPLFlBQVM7d0JBQ1RDLGFBQVU7d0JBRlZDLG9CQUFpQjs7OztrQ0EwQ2hCQyxZQUFTLFNBQUMsYUFBYTtvQ0FDdkJBLFlBQVMsU0FBQyxlQUFlOzRDQUN6QkMsUUFBSztnQ0FDTEEsUUFBSztvQ0FrQkxBLFFBQUs7MENBa0JMQyxTQUFNOzZCQUNORCxRQUFLOytCQUNMRSxrQkFBZSxTQUFDQyxhQUFVLENBQUMsY0FBTSxPQUFBLEtBQUssR0FBQSxDQUFDOztxQkFqRzFDOzs7UUFtT0UsZUFDVSxhQUNBLE1BQ0QsV0FDQTtZQUhDLGdCQUFXLEdBQVgsV0FBVztZQUNYLFNBQUksR0FBSixJQUFJO1lBQ0wsY0FBUyxHQUFULFNBQVM7WUFDVCxRQUFHLEdBQUgsR0FBRztZQUVWLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7U0FDekM7Ozs7UUFac0IsdUJBQU87OztZQUE5QjtnQkFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUN0Qzs7OztRQVdELHdCQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25FOzs7O1FBRUQsK0JBQWU7OztZQUFmO2dCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDdEY7O29CQXRDRlYsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsaU1BS0c7d0JBQ2IsZUFBZSxFQUFFQywwQkFBdUIsQ0FBQyxNQUFNO3dCQUMvQyxhQUFhLEVBQUVDLG9CQUFpQixDQUFDLElBQUk7cUJBQ3RDOzs7Ozt3QkE5TFEsb0JBQW9CO3dCQTZNWCxNQUFNO3dCQXROdEJDLFlBQVM7d0JBQ1RDLGFBQVU7Ozs7c0NBMk1UTyxlQUFZLFNBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFakIsY0FBVyxFQUFFO2tDQUNoRFksWUFBUyxTQUFDWixjQUFXO21DQUNyQlksWUFBUyxTQUFDLGNBQWM7OEJBQ3hCTSxlQUFZLFNBQUMsT0FBTzs7b0JBOU52Qjs7O1FBMlBFLG9CQUNVLFVBQ0EsSUFDQTtZQUZBLGFBQVEsR0FBUixRQUFRO1lBQ1IsT0FBRSxHQUFGLEVBQUU7WUFDRixnQkFBVyxHQUFYLFdBQVc7U0FDaEI7Ozs7UUFFTCw2QkFBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEY7O29CQWRGbkIsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSw4QkFBOEI7cUJBQ3pDOzs7Ozt3QkF4T0NVLFlBQVM7d0JBQ1RDLGFBQVU7d0JBUUgsb0JBQW9COzs7OzZCQWlPMUJHLFFBQUs7O3lCQXpQUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztvQkFPQ00sV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxDQUFDQyxnQkFBYSxFQUFFQyxtQkFBWSxFQUFFQyxpQkFBYyxFQUFFQyxxQkFBYyxFQUFFQyxxQkFBa0IsQ0FBQzt3QkFDMUYsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDO3dCQUNsRCxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUM7cUJBQ3hEOzsyQkFYRDs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=