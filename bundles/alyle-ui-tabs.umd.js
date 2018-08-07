(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common'), require('@alyle/ui/ripple')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/tabs', ['exports', '@angular/core', '@alyle/ui', '@angular/common', '@alyle/ui/ripple'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.tabs = {}),global.ng.core,global.alyle.ui,global.ng.common,global.alyle.ui.ripple));
}(this, (function (exports,i0,i1,common,ripple) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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
                { type: i0.TemplateRef, },
            ];
        };
        return LyTabContent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyTabsClassesService = /** @class */ (function () {
        function LyTabsClassesService(theme) {
            this.theme = theme;
            this.tabs = this.theme.setUpStyle('k-tabs', function () {
                return ("display:block;" +
                    "overflow:hidden;");
            });
            this.tabsLabels = this.theme.setUpStyle('k-tab-labels', function () {
                return ("display: flex;" +
                    "position: relative;" +
                    "flex-grow: 1;" +
                    "overflow: hidden;");
            });
            this.tab = this.theme.setUpStyle('k-tab', function () {
                return ("position: relative;" +
                    "display: inline-flex;");
            });
            this.tabLabel = this.theme.setUpStyle('k-tab-label', function () {
                return ("min-width: 72px;" +
                    "padding: 0 24px;" +
                    "cursor: pointer;" +
                    "height: 48px;" +
                    "display: inline-flex;" +
                    "justify-content: center;" +
                    "align-items: center;");
            });
            this.tabContents = this.theme.setUpStyle('k-tab-contents', function () {
                return ("display: flex;" +
                    "transition: 450ms cubic-bezier(.1, 1, 0.5, 1);" +
                    "will-change: transform;");
            });
            this.tabContent = this.theme.setUpStyle('k-tab-content', function () {
                return ("width: 100%;" +
                    "flex-shrink: 0;" +
                    "position: relative;");
            });
            this.tabsIndicator = this.theme.setUpStyle('k-tabs-indicator', function () {
                return ("position: absolute;" +
                    "transition: 450ms cubic-bezier(.1, 1, 0.5, 1);" +
                    "bottom: 0;" +
                    "height: 2px;" +
                    "left: 0;" +
                    "background: currentColor;");
            });
            this.tabsIndicatorForServer = this.theme.setUpStyle('k-tabs-indicator-server', function () {
                return ("width: 100%;");
            });
        }
        LyTabsClassesService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LyTabsClassesService.ctorParameters = function () {
            return [
                { type: i1.LyTheme2, },
            ];
        };
        /** @nocollapse */ LyTabsClassesService.ngInjectableDef = i0.defineInjectable({ factory: function LyTabsClassesService_Factory() { return new LyTabsClassesService(i0.inject(i1.LyTheme2)); }, token: LyTabsClassesService, providedIn: "root" });
        return LyTabsClassesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyTabs = /** @class */ (function () {
        function LyTabs(classes, theme, renderer, el, cd) {
            this.classes = classes;
            this.theme = theme;
            this.renderer = renderer;
            this.el = el;
            this.cd = cd;
            this._selectedIndex = i1.UndefinedValue;
            this.selectedIndexChange = new i0.EventEmitter();
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
                    var /** @type {?} */ newClass = this._createWithColorClass(val);
                    this._withColorClass = this.theme.updateClass(this.tabsIndicator.nativeElement, this.renderer, newClass, this._withColorClass);
                    if (this._selectedTab) {
                        this.theme.updateClass(this._selectedTab.tabIndicator.nativeElement, this.renderer, newClass, this._withColorClass);
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
                    this._selectedIndex = val;
                    this._selectedBeforeTab = this._selectedTab;
                    this.selectedIndexChange.emit(val);
                    this._updateIndicator(this._selectedTab, this._selectedBeforeTab);
                    if (this._selectedRequireCheck) {
                        this.markForCheck();
                    }
                    this.renderer.setStyle(this.tabContents.nativeElement, 'transform', "translate3d(" + val * -100 + "%,0,0)");
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
                this.renderer.addClass(this.el.nativeElement, this.classes.tabs);
                var /** @type {?} */ tabsIndicatorEl = this.tabsIndicator.nativeElement;
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
                var /** @type {?} */ currentIndex = this.selectedIndex;
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
                        var /** @type {?} */ el = /** @type {?} */ (currentTab._el.nativeElement);
                        var /** @type {?} */ rects = el.getBoundingClientRect();
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
                if (this.selectedIndex === i1.UndefinedValue) {
                    // set 0 if is null
                    this._selectedTab = tab;
                    this.selectedIndex = 0;
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
        /**
         * @param {?} val
         * @return {?}
         */
        LyTabs.prototype._createWithColorClass = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                var _this = this;
                this._withColor = val;
                return this.theme.setUpStyle("k-tab-with-color:" + val, function () {
                    return ("color:" + _this.theme.colorOf(val) + ";");
                });
            };
        LyTabs.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ly-tabs',
                        template: "<div [className]=\"classes.tabsLabels\">\n  <span #tabsIndicator></span>\n  <ng-content></ng-content>\n</div>\n<div [className]=\"classes.tabContents\" #tabContents>\n  <ng-template ngFor let-item [ngForOf]=\"tabsList\" let-x=\"index\">\n    <div [className]=\"classes.tabContent\">\n      <ng-template [ngTransclude]=\"loadTemplate(item, x)\"></ng-template>\n    </div>\n  </ng-template>\n</div>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'lyTabs'
                    },] },
        ];
        /** @nocollapse */
        LyTabs.ctorParameters = function () {
            return [
                { type: LyTabsClassesService, },
                { type: i1.LyTheme2, },
                { type: i0.Renderer2, },
                { type: i0.ElementRef, },
                { type: i0.ChangeDetectorRef, },
            ];
        };
        LyTabs.propDecorators = {
            "tabContents": [{ type: i0.ViewChild, args: ['tabContents',] },],
            "tabsIndicator": [{ type: i0.ViewChild, args: ['tabsIndicator',] },],
            "withColor": [{ type: i0.Input },],
            "selectedIndex": [{ type: i0.Input },],
            "selectedIndexChange": [{ type: i0.Output },],
            "withBg": [{ type: i0.Input },],
            "tabsList": [{ type: i0.ContentChildren, args: [i0.forwardRef(function () { return LyTab; }),] },],
        };
        return LyTabs;
    }());
    var LyTab = /** @class */ (function () {
        function LyTab(tabs, _renderer, _el) {
            this.tabs = tabs;
            this._renderer = _renderer;
            this._el = _el;
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
                this._renderer.addClass(this._el.nativeElement, this.tabs.classes.tab);
            };
        /**
         * @return {?}
         */
        LyTab.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this._renderer.addClass(this.tabIndicator.nativeElement, this.tabs.classes.tabsIndicator);
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
                { type: LyTabs, },
                { type: i0.Renderer2, },
                { type: i0.ElementRef, },
            ];
        };
        LyTab.propDecorators = {
            "templateRefLazy": [{ type: i0.ContentChild, args: [LyTabContent, { read: i0.TemplateRef },] },],
            "templateRef": [{ type: i0.ViewChild, args: [i0.TemplateRef,] },],
            "tabIndicator": [{ type: i0.ViewChild, args: ['tabIndicator',] },],
            "onClick": [{ type: i0.HostListener, args: ['click',] },],
        };
        return LyTab;
    }());
    var LyTabLabel = /** @class */ (function () {
        function LyTabLabel(renderer, el, classes) {
            this.renderer = renderer;
            this.el = el;
            this.classes = classes;
        }
        /**
         * @return {?}
         */
        LyTabLabel.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.el.nativeElement, this.classes.tabLabel);
            };
        LyTabLabel.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-tab-label, [ly-tab-label]'
                    },] },
        ];
        /** @nocollapse */
        LyTabLabel.ctorParameters = function () {
            return [
                { type: i0.Renderer2, },
                { type: i0.ElementRef, },
                { type: LyTabsClassesService, },
            ];
        };
        LyTabLabel.propDecorators = {
            "native": [{ type: i0.Input },],
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
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyTabsModule = /** @class */ (function () {
        function LyTabsModule() {
        }
        LyTabsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, ripple.LyRippleModule, i1.NgTranscludeModule],
                        exports: [LyTabs, LyTab, LyTabLabel, LyTabContent],
                        declarations: [LyTabs, LyTab, LyTabLabel, LyTabContent]
                    },] },
        ];
        return LyTabsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // export * from './tab-label.directive';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LyTabsModule = LyTabsModule;
    exports.LyTabs = LyTabs;
    exports.LyTab = LyTab;
    exports.LyTabLabel = LyTabLabel;
    exports.ɵa = LyTabContent;
    exports.ɵb = LyTabsClassesService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS90YWJzL3RhYi1jb250ZW50LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFicy5jbGFzZXNzLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvcHVibGljX2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tseS10YWItY29udGVudF0nfSlcbmV4cG9ydCBjbGFzcyBMeVRhYkNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNDbGFzc2VzU2VydmljZSB7XG4gIHRhYnMgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgJ2stdGFicycsXG4gICAgKCkgPT4gKFxuICAgICAgYGRpc3BsYXk6YmxvY2s7YCArXG4gICAgICBgb3ZlcmZsb3c6aGlkZGVuO2BcbiAgICApXG4gICk7XG4gIHRhYnNMYWJlbHMgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgJ2stdGFiLWxhYmVscycsXG4gICAgKCkgPT4gKFxuICAgICAgYGRpc3BsYXk6IGZsZXg7YCArXG4gICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2AgK1xuICAgICAgYGZsZXgtZ3JvdzogMTtgICtcbiAgICAgIGBvdmVyZmxvdzogaGlkZGVuO2BcbiAgICApXG4gICk7XG4gIHRhYiA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWInLFxuICAgICgpID0+IChcbiAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YCArXG4gICAgICBgZGlzcGxheTogaW5saW5lLWZsZXg7YFxuICAgIClcbiAgKTtcbiAgdGFiTGFiZWwgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgJ2stdGFiLWxhYmVsJyxcbiAgICAoKSA9PiAoXG4gICAgICBgbWluLXdpZHRoOiA3MnB4O2AgK1xuICAgICAgYHBhZGRpbmc6IDAgMjRweDtgICtcbiAgICAgIGBjdXJzb3I6IHBvaW50ZXI7YCArXG4gICAgICBgaGVpZ2h0OiA0OHB4O2AgK1xuICAgICAgYGRpc3BsYXk6IGlubGluZS1mbGV4O2AgK1xuICAgICAgYGp1c3RpZnktY29udGVudDogY2VudGVyO2AgK1xuICAgICAgYGFsaWduLWl0ZW1zOiBjZW50ZXI7YFxuICAgIClcbiAgKTtcbiAgdGFiQ29udGVudHMgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgJ2stdGFiLWNvbnRlbnRzJyxcbiAgICAoKSA9PiAoXG4gICAgICBgZGlzcGxheTogZmxleDtgICtcbiAgICAgIGB0cmFuc2l0aW9uOiA0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gICAgICBgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtgXG4gICAgKVxuICApO1xuICB0YWJDb250ZW50ID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICdrLXRhYi1jb250ZW50JyxcbiAgICAoKSA9PiAoXG4gICAgICBgd2lkdGg6IDEwMCU7YCArXG4gICAgICBgZmxleC1zaHJpbms6IDA7YCArXG4gICAgICBgcG9zaXRpb246IHJlbGF0aXZlO2BcbiAgICApXG4gICk7XG4gIHRhYnNJbmRpY2F0b3IgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgJ2stdGFicy1pbmRpY2F0b3InLFxuICAgICgpID0+IChcbiAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICBgdHJhbnNpdGlvbjogNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2AgK1xuICAgICAgYGJvdHRvbTogMDtgICtcbiAgICAgIGBoZWlnaHQ6IDJweDtgICtcbiAgICAgIGBsZWZ0OiAwO2AgK1xuICAgICAgYGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtgXG4gICAgKVxuICApO1xuICB0YWJzSW5kaWNhdG9yRm9yU2VydmVyID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICdrLXRhYnMtaW5kaWNhdG9yLXNlcnZlcicsXG4gICAgKCkgPT4gKFxuICAgICAgYHdpZHRoOiAxMDAlO2BcbiAgICApXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgQ29udGVudENoaWxkLFxuICBWaWV3Q2hpbGQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgZm9yd2FyZFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUYWJzQ2xhc3Nlc1NlcnZpY2UgfSBmcm9tICcuL3RhYnMuY2xhc2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7IFVuZGVmaW5lZFZhbHVlLCBVbmRlZmluZWQsIEx5VGhlbWUyLCBQbGF0Zm9ybSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYnMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLnRhYnNMYWJlbHNcIj5cbiAgPHNwYW4gI3RhYnNJbmRpY2F0b3I+PC9zcGFuPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLnRhYkNvbnRlbnRzXCIgI3RhYkNvbnRlbnRzPlxuICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWl0ZW0gW25nRm9yT2ZdPVwidGFic0xpc3RcIiBsZXQteD1cImluZGV4XCI+XG4gICAgPGRpdiBbY2xhc3NOYW1lXT1cImNsYXNzZXMudGFiQ29udGVudFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RyYW5zY2x1ZGVdPVwibG9hZFRlbXBsYXRlKGl0ZW0sIHgpXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ2x5VGFicydcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgX3NlbGVjdGVkSW5kZXg6IG51bWJlciB8IFVuZGVmaW5lZCA9IFVuZGVmaW5lZFZhbHVlO1xuICBfc2VsZWN0ZWRCZWZvcmVJbmRleDogbnVtYmVyO1xuICBfc2VsZWN0ZWRSZXF1aXJlQ2hlY2s6IGJvb2xlYW47XG4gIF9zZWxlY3RlZFRhYjogTHlUYWI7XG4gIF9zZWxlY3RlZEJlZm9yZVRhYjogTHlUYWI7XG4gIHByaXZhdGUgX2lzVmlld0luaXRMb2FkZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF93aXRoQ29sb3JDbGFzczogc3RyaW5nO1xuICBAVmlld0NoaWxkKCd0YWJDb250ZW50cycpIHRhYkNvbnRlbnRzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJzSW5kaWNhdG9yJykgdGFic0luZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQElucHV0KClcbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMud2l0aENvbG9yKSB7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVdpdGhDb2xvckNsYXNzKHZhbCk7XG4gICAgICB0aGlzLl93aXRoQ29sb3JDbGFzcyA9IHRoaXMudGhlbWUudXBkYXRlQ2xhc3ModGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl93aXRoQ29sb3JDbGFzcyk7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX3dpdGhDb2xvckNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZUluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCBhcyBudW1iZXI7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdmFsO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIgPSB0aGlzLl9zZWxlY3RlZFRhYjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KHZhbCk7XG4gICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGhpcy5fc2VsZWN0ZWRUYWIsIHRoaXMuX3NlbGVjdGVkQmVmb3JlVGFiKTtcblxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkUmVxdWlyZUNoZWNrKSB7XG4gICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFiQ29udGVudHMubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3ZhbCAqIC0xMDB9JSwwLDApYCk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgfVxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHdpdGhCZzogc3RyaW5nO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlUYWIpKSB0YWJzTGlzdDogUXVlcnlMaXN0PEx5VGFiPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY2xhc3NlczogTHlUYWJzQ2xhc3Nlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnMpO1xuICAgIGNvbnN0IHRhYnNJbmRpY2F0b3JFbCA9IHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFic0luZGljYXRvckVsLCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcik7XG4gICAgLyoqIFNldCBkZWZhdWx0IENvbG9yICovXG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy53aXRoQ29sb3IgPSAncHJpbWFyeSc7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2lzVmlld0luaXRMb2FkZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSW5kaWNhdG9yKGN1cnJlbnRUYWI6IEx5VGFiLCBiZWZvcmVUYWI/OiBMeVRhYik6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgLy8gY3VycmVudFRhYiA9IHRoaXMudGFic0xpc3QuZmluZChfID0+IF8uaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XG4gICAgICBpZiAoIXRoaXMuX2lzVmlld0luaXRMb2FkZWQgfHwgIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAvKiogZm9yIGJlZm9yZSBpbml0aWFsaXplIG9yIGZvciBzZXJ2ZXIgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjdXJyZW50VGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY3VycmVudFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVE9ETzogdGFiczogdXBkYXRlIGluZGljYXRvciB3aGVuIGNoYW5nZSBgc2VsZWN0ZWRJbmRleGBcbiAgICAgICAgICovXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmb3IgYWZ0ZXIgaW5pdGlhbGl6ZSAmJiBmb3IgYnJvd3NlclxuICAgICAgICAvLyBDbGVhbiBiZWZvcmUgdGFiXG4gICAgICAgIGlmIChiZWZvcmVUYWIpIHtcbiAgICAgICAgICBiZWZvcmVUYWIuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShiZWZvcmVUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdjbGFzcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50VGFiLmluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAvLyB0aGlzIGZpeGVkIHVuZGVmaW5lZCBzZWxlY3RlZCB0YWJcbiAgICAgICAgICBjdXJyZW50VGFiID0gdGhpcy50YWJzTGlzdC50b0FycmF5KClbY3VycmVudEluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbCA9IGN1cnJlbnRUYWIuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHJlY3RzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3JlY3RzLndpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgYCR7ZWwub2Zmc2V0TGVmdH1weGApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbG9hZFRlbXBsYXRlKHRhYjogTHlUYWIsIGluZGV4OiBudW1iZXIpOiBUZW1wbGF0ZVJlZjxMeVRhYkNvbnRlbnQ+IHwgbnVsbCB7XG4gICAgaWYgKHRhYi5sb2FkZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0YWIuaW5kZXggPSBpbmRleDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSBVbmRlZmluZWRWYWx1ZSkge1xuICAgICAgLy8gc2V0IDAgaWYgaXMgbnVsbFxuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzVmlld0luaXRMb2FkZWQgJiYgdGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gdGFiO1xuICAgICAgLyoqIEFwcGx5IHN0eWxlIGZvciB0YWJJbmRpY2F0b3Igc2VydmVyICovXG4gICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGFiKTtcbiAgICB9XG4gICAgaWYgKHRhYi50ZW1wbGF0ZVJlZkxhenkpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgIHRhYi5sb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGFiLnRlbXBsYXRlUmVmTGF6eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWIubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0YWIudGVtcGxhdGVSZWY7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlV2l0aENvbG9yQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAgIGBrLXRhYi13aXRoLWNvbG9yOiR7dmFsfWAsXG4gICAgICAoKSA9PiAoXG4gICAgICAgIGBjb2xvcjoke3RoaXMudGhlbWUuY29sb3JPZih2YWwpfTtgXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cImx5LXRhYi1sYWJlbFwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltseS10YWItbGFiZWxdXCI+PC9uZy1jb250ZW50PlxuPHNwYW4gI3RhYkluZGljYXRvcj48L3NwYW4+XG48bmctdGVtcGxhdGU+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWIgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBpbmRleDogbnVtYmVyO1xuICBsb2FkZWQ6IGJvb2xlYW47XG4gIEBDb250ZW50Q2hpbGQoTHlUYWJDb250ZW50LCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHRlbXBsYXRlUmVmTGF6eTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PjtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3RhYkluZGljYXRvcicpIHRhYkluZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrKCkge1xuICAgIHRoaXMudGFicy5fc2VsZWN0ZWRSZXF1aXJlQ2hlY2sgPSAhdGhpcy5sb2FkZWQ7XG4gICAgdGhpcy50YWJzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmluZGV4O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YWJzOiBMeVRhYnMsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBfZWw6IEVsZW1lbnRSZWYsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy50YWJzLmNsYXNzZXMudGFiKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLnRhYnMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10YWItbGFiZWwsIFtseS10YWItbGFiZWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYkxhYmVsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmF0aXZlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2xhc3NlczogTHlUYWJzQ2xhc3Nlc1NlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYkxhYmVsKTtcbiAgfVxufVxuLyoqXG4gKiBkZW1vIGJhc2ljXG4gKiA8bHktdGFicyB3aXRoQ29sb3I9XCJhY2NlbnRcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8bHktdGFiLWxhYmVsPkhPTUU8bHktdGFiLWxhYmVsPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8YnV0dG9uPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsIG5hdGl2ZSBseS1idXR0b24+SE9NRTxidXR0b24+XG4gKiAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydob21lJ11cIiBseS10YWItbGFiZWwgbmF0aXZlIGx5LWJ1dHRvbj5IT01FPGE+XG4gKiAgICAgQ29udGVudFxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKlxuICogZGVtbyBsYXp5IGxvYWRpbmdcbiAqIDxseS10YWJzIHdpdGhCZz1cInByaW1hcnlcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8bHktdGFiLWxhYmVsPkhPTUU8bHktdGFiLWxhYmVsPlxuICogICAgIDxuZy10ZW1wbGF0ZSBseS10YWItY29udGVudD48L25nLXRlbXBsYXRlPlxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKiA9PiB3aXRoQ29sb3I6IGNvbG9yIGRlbCBsYWJlbCBhY3RpdmEsIGRlZmF1bHQgcHJpbWFyeVxuICogPT4gd2l0aEJnOiBjb2xvciBkZSBmb25kbyBwYXJhIGxhIHRhYiwgZGVmYXVsdCBiYWNrZ3JvdW5kOnByaW1hcnlcbiAqID0+IG5hdGl2ZTogbm8gYXBsaWNhIGxvcyBlc3RpbG9zIHByZWRldGVybWluYWRvcywgZGVmYXVsdCB1bmRlZmluZWRcbiAqID0+IGRpc2FibGVkOiBEaXNhYmxlL2VuYWJsZSBhIHRhYiwgZGVmYXVsdCB1bmRlZmluZWRcbiAqID0+IGlzQWN0aXZlOiBTaSBsYSBwZXN0YcODwrFhIGVzdMODwqEgYWN0dWFsbWVudGUgYWN0aXZhLiwgZGVmYXVsdCB1bmRlZmluZWRcbiAqL1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbi8vIGltcG9ydCB7IEx5SGVhZGVyUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9oZWFkZXItcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBMeVRhYnMsIEx5VGFiTGFiZWwsIEx5VGFiIH0gZnJvbSAnLi90YWJzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBOZ1RyYW5zY2x1ZGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNNb2R1bGUgeyB9XG4iLCJleHBvcnQgKiBmcm9tICcuL3RhYnMubW9kdWxlJztcbi8vIGV4cG9ydCAqIGZyb20gJy4vdGFicyc7XG5leHBvcnQgKiBmcm9tICcuL3RhYnMuZGlyZWN0aXZlJztcbi8vIGV4cG9ydCAqIGZyb20gJy4vdGFiLWxhYmVsLmRpcmVjdGl2ZSc7XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJJbmplY3RhYmxlIiwiTHlUaGVtZTIiLCJVbmRlZmluZWRWYWx1ZSIsIkV2ZW50RW1pdHRlciIsIlBsYXRmb3JtIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIlZpZXdDaGlsZCIsIklucHV0IiwiT3V0cHV0IiwiQ29udGVudENoaWxkcmVuIiwiZm9yd2FyZFJlZiIsIkNvbnRlbnRDaGlsZCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlSaXBwbGVNb2R1bGUiLCJOZ1RyYW5zY2x1ZGVNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUlFLHNCQUFtQixRQUEwQjtZQUExQixhQUFRLEdB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