(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/tabs', ['exports', '@angular/core', '@alyle/ui', 'rxjs', '@angular/common'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.tabs = {}),global.ng.core,global.ly.core,global.rxjs,global.ng.common));
}(this, (function (exports,i0,i1,rxjs,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyTabContent = /** @class */ (function () {
        function LyTabContent(template) {
            this.template = template;
        }
        LyTabContent.decorators = [
            { type: i0.Directive, args: [{ selector: '[ly-tab-content]' },] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var tabsStyles = {
        root: {
            display: 'block'
        },
        tab: {
            position: 'relative',
            display: 'inline-flex'
        },
        tabsLabels: {
            display: 'flex',
            position: 'relative',
            flexGrow: 1
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
            this.classes = this.theme.addStyleSheet(tabsStyles);
        }
        LyTabsClassesService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_DISABLE_RIPPLE = false;
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyTabsBase = /** @class */ (function () {
        function LyTabsBase(_theme) {
            this._theme = _theme;
        }
        return LyTabsBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
    var LyTabsMixinBase = i1.mixinBg(i1.mixinColor(LyTabsBase));
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyTabLabelBase = /** @class */ (function () {
        function LyTabLabelBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyTabLabelBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
    var LyTabLabelMixinBase = i1.mixinStyleUpdater(i1.mixinBg(i1.mixinColor(i1.mixinRaised(i1.mixinDisabled(i1.mixinOutlined(i1.mixinElevation(i1.mixinShadowColor(i1.mixinDisableRipple(LyTabLabelBase)))))))));
    var LyTabs = /** @class */ (function (_super) {
        __extends(LyTabs, _super);
        function LyTabs(tabsService, theme, renderer, el, cd) {
            var _this = _super.call(this, theme) || this;
            _this.theme = theme;
            _this.renderer = renderer;
            _this.el = el;
            _this.cd = cd;
            _this._selectedIndex = 0;
            _this._tabsSubscription = rxjs.Subscription.EMPTY;
            _this.selectedIndexOnChange = 'auto';
            _this.selectedIndexChange = new i0.EventEmitter();
            _this.classes = tabsService.classes;
            return _this;
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
                return ( /** @type {?} */(this._selectedIndex));
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.selectedIndex) {
                    this._selectedBeforeIndex = ( /** @type {?} */(this._selectedIndex));
                    this._selectedIndex = this._findIndex(val, 'auto');
                    this._selectedBeforeTab = this._selectedTab;
                    this.selectedIndexChange.emit(this._selectedIndex);
                    this._updateIndicator(this._selectedTab, this._selectedBeforeTab);
                    this.markForCheck();
                    this.renderer.setStyle(this.tabContents.nativeElement, 'transform', "translate3d(" + this._selectedIndex * -100 + "%,0,0)");
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        LyTabs.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.color) {
                    this.withColor = changes.color.currentValue;
                }
                if (changes.bg) {
                    this.withBg = changes.bg.currentValue;
                }
                if (i0.isDevMode() && changes.withColor) {
                    console.warn("LyTabs > `withColor` is deprecated, instead use `color`");
                }
                if (i0.isDevMode() && changes.withBg) {
                    console.warn("LyTabs > `withColor` is deprecated, instead use `bg`");
                }
            };
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
                if (!this.withColor && !this.color) {
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
                        var el = ( /** @type {?} */(currentTab._el.nativeElement));
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
                tab.index = index;
                if (this.selectedIndex === tab.index) {
                    // set 0 if is null
                    this._selectedTab = tab;
                    this._updateIndicator(tab);
                }
                if (this.selectedIndex === tab.index) {
                    return tab.templateRefLazy || tab.templateRef;
                }
                else {
                    return null;
                }
            };
        LyTabs.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ly-tabs',
                        template: "<div [withClass]=\"classes.tabsLabels\">\n  <ng-content></ng-content>\n  <span #tabsIndicator></span>\n</div>\n<div [withClass]=\"classes.tabContents\" #tabContents>\n  <ng-template ngFor let-item [ngForOf]=\"tabsList\" let-x=\"index\">\n    <div [withClass]=\"classes.tabContent\">\n      <ng-template [ngTransclude]=\"loadTemplate(item, x)\"></ng-template>\n    </div>\n  </ng-template>\n</div>",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        exportAs: 'lyTabs',
                        inputs: [
                            'bg', 'color'
                        ]
                    }] }
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
    }(LyTabsMixinBase));
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
                    }] }
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
    var LyTabLabel = /** @class */ (function (_super) {
        __extends(LyTabLabel, _super);
        function LyTabLabel(renderer, _el, _tabsService, _ngZone, _theme) {
            var _this = _super.call(this, _theme, _ngZone) || this;
            _this.renderer = renderer;
            _this._el = _el;
            _this._tabsService = _tabsService;
            _this.setAutoContrast();
            _this._triggerElement = _el;
            _this._rippleContainer = _el;
            return _this;
        }
        /**
         * @return {?}
         */
        LyTabLabel.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.updateStyle(this._el);
            };
        /**
         * @return {?}
         */
        LyTabLabel.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this._el.nativeElement, this._tabsService.classes.label);
                // set default disable ripple
                if (this.disableRipple === null) {
                    this.disableRipple = DEFAULT_DISABLE_RIPPLE;
                }
            };
        /**
         * @return {?}
         */
        LyTabLabel.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._removeRippleEvents();
            };
        LyTabLabel.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-tab-label, [ly-tab-label]'
                    },] }
        ];
        /** @nocollapse */
        LyTabLabel.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef },
                { type: LyTabsClassesService },
                { type: i0.NgZone },
                { type: i1.LyTheme2 }
            ];
        };
        return LyTabLabel;
    }(LyTabLabelMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyTabsModule = /** @class */ (function () {
        function LyTabsModule() {
        }
        LyTabsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i1.LyThemeModule, common.CommonModule, i1.LyCommonModule, i1.NgTranscludeModule],
                        exports: [LyTabs, LyTab, LyTabLabel, LyTabContent],
                        declarations: [LyTabs, LyTab, LyTabLabel, LyTabContent]
                    },] }
        ];
        return LyTabsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LyTabsModule = LyTabsModule;
    exports.LyTabsBase = LyTabsBase;
    exports.LyTabsMixinBase = LyTabsMixinBase;
    exports.LyTabLabelBase = LyTabLabelBase;
    exports.LyTabLabelMixinBase = LyTabLabelMixinBase;
    exports.LyTabs = LyTabs;
    exports.LyTab = LyTab;
    exports.LyTabLabel = LyTabLabel;
    exports.ɵa = LyTabContent;
    exports.ɵb = LyTabsClassesService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWItY29udGVudC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMuY2xhc2Vzcy5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFicy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tseS10YWItY29udGVudF0nfSlcbmV4cG9ydCBjbGFzcyBMeVRhYkNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCB0YWJzU3R5bGVzID0ge1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LFxuICB0YWI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG4gIH0sXG4gIHRhYnNMYWJlbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBtaW5XaWR0aDogJzcycHgnLFxuICAgIHBhZGRpbmc6ICcwIDI0cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGhlaWdodDogJzQ4cHgnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICB0YWJDb250ZW50czoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB0cmFuc2l0aW9uOiAnNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJyxcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJ1xuICB9LFxuICB0YWJDb250ZW50OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHRhYnNJbmRpY2F0b3I6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0cmFuc2l0aW9uOiAnNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJyxcbiAgICBib3R0b206IDAsXG4gICAgaGVpZ2h0OiAnMnB4JyxcbiAgICBsZWZ0OiAwLFxuICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIHRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnXG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFic0NsYXNzZXNTZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldCh0YWJzU3R5bGVzKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFNpbXBsZUNoYW5nZXMsXG4gIGlzRGV2TW9kZVxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgUGxhdGZvcm0sXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5VGFic0NsYXNzZXNTZXJ2aWNlIH0gZnJvbSAnLi90YWJzLmNsYXNlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5VGFic0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5VGFic01peGluQmFzZSA9IG1peGluQmcobWl4aW5Db2xvcihMeVRhYnNCYXNlKSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlUYWJMYWJlbE1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlUYWJMYWJlbEJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy5kaXJlY3RpdmUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ2x5VGFicycsXG4gIGlucHV0czogW1xuICAgICdiZycsICdjb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgZXh0ZW5kcyBMeVRhYnNNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgX3NlbGVjdGVkSW5kZXggPSAwO1xuICBfc2VsZWN0ZWRCZWZvcmVJbmRleDogbnVtYmVyO1xuICBfc2VsZWN0ZWRUYWI6IEx5VGFiO1xuICBfc2VsZWN0ZWRCZWZvcmVUYWI6IEx5VGFiO1xuICBwcml2YXRlIF90YWJzU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pc1ZpZXdJbml0TG9hZGVkOiBib29sZWFuO1xuICBwcml2YXRlIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfd2l0aENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcmVhZG9ubHkgY2xhc3NlcztcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudHMnKSB0YWJDb250ZW50czogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFic0luZGljYXRvcicpIHRhYnNJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXhPbkNoYW5nZTogJ2F1dG8nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoKSBuYXRpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fd2l0aENvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgay10YWItd2l0aC1jb2xvcjoke3ZhbH1gLFxuICAgICAgICB0aGVtZSA9PiAoXG4gICAgICAgICAgYGNvbG9yOiR7dGhlbWUuY29sb3JPZih2YWwpfTtgXG4gICAgICAgICksXG4gICAgICAgIHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLl93aXRoQ29sb3JDbGFzcyk7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlSW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodmFsLCAnYXV0bycpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIgPSB0aGlzLl9zZWxlY3RlZFRhYjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkSW5kZXgpO1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRoaXMuX3NlbGVjdGVkVGFiLCB0aGlzLl9zZWxlY3RlZEJlZm9yZVRhYik7XG5cbiAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFiQ29udGVudHMubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3RoaXMuX3NlbGVjdGVkSW5kZXggKiAtMTAwfSUsMCwwKWApO1xuICAgIH1cbiAgfVxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleCBhcyBudW1iZXI7XG4gIH1cbiAgQE91dHB1dCgpIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB3aXRoQmc6IHN0cmluZztcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5VGFiKSkgdGFic0xpc3Q6IFF1ZXJ5TGlzdDxMeVRhYj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGFic1NlcnZpY2U6IEx5VGFic0NsYXNzZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKHRoZW1lKTtcbiAgICB0aGlzLmNsYXNzZXMgPSB0YWJzU2VydmljZS5jbGFzc2VzO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmNvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9IGNoYW5nZXMuY29sb3IuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5iZykge1xuICAgICAgdGhpcy53aXRoQmcgPSBjaGFuZ2VzLmJnLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzRGV2TW9kZSgpICYmIGNoYW5nZXMud2l0aENvbG9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oYEx5VGFicyA+IFxcYHdpdGhDb2xvclxcYCBpcyBkZXByZWNhdGVkLCBpbnN0ZWFkIHVzZSBcXGBjb2xvclxcYGApO1xuICAgIH1cbiAgICBpZiAoaXNEZXZNb2RlKCkgJiYgY2hhbmdlcy53aXRoQmcpIHtcbiAgICAgIGNvbnNvbGUud2FybihgTHlUYWJzID4gXFxgd2l0aENvbG9yXFxgIGlzIGRlcHJlY2F0ZWQsIGluc3RlYWQgdXNlIFxcYGJnXFxgYCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBjb25zdCB0YWJzSW5kaWNhdG9yRWwgPSB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRhYnNJbmRpY2F0b3JFbCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3IpO1xuICAgIC8qKiBTZXQgZGVmYXVsdCBDb2xvciAqL1xuICAgIGlmICghdGhpcy53aXRoQ29sb3IgJiYgIXRoaXMuY29sb3IpIHtcbiAgICAgIHRoaXMud2l0aENvbG9yID0gJ3ByaW1hcnknO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9pc1ZpZXdJbml0TG9hZGVkID0gdHJ1ZTtcbiAgfVxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fdGFic1N1YnNjcmlwdGlvbiA9IHRoaXMudGFic0xpc3QuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJbmRleE9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2ZpbmRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXgsIHRoaXMuc2VsZWN0ZWRJbmRleE9uQ2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmluZEluZGV4KHNlbGVjdGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICghdGhpcy50YWJzTGlzdCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZMYXN0VGFiID0gdGhpcy50YWJzTGlzdC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHNlbGVjdGVkSW5kZXg7XG4gICAgcmV0dXJuIGN1cnJlbnRJbmRleCA8IDAgPyAwIDogY3VycmVudEluZGV4ID4gaW5kZXhPZkxhc3RUYWIgPyBpbmRleE9mTGFzdFRhYiA6IGN1cnJlbnRJbmRleDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUluZGljYXRvcihjdXJyZW50VGFiOiBMeVRhYiwgYmVmb3JlVGFiPzogTHlUYWIpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGN1cnJlbnRUYWIpIHtcbiAgICAgIC8vIGN1cnJlbnRUYWIgPSB0aGlzLnRhYnNMaXN0LmZpbmQoXyA9PiBfLmluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuICAgICAgaWYgKCF0aGlzLl9pc1ZpZXdJbml0TG9hZGVkIHx8ICFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgLyoqIGZvciBiZWZvcmUgaW5pdGlhbGl6ZSBvciBmb3Igc2VydmVyICovXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY3VycmVudFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGN1cnJlbnRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3dpdGhDb2xvckNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGZvciBhZnRlciBpbml0aWFsaXplICYmIGZvciBicm93c2VyXG4gICAgICAgIC8vIENsZWFuIGJlZm9yZSB0YWJcbiAgICAgICAgaWYgKGJlZm9yZVRhYikge1xuICAgICAgICAgIGJlZm9yZVRhYi5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGJlZm9yZVRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRUYWIuaW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgIC8vIHRoaXMgZml4ZWQgdW5kZWZpbmVkIHNlbGVjdGVkIHRhYlxuICAgICAgICAgIGN1cnJlbnRUYWIgPSB0aGlzLnRhYnNMaXN0LnRvQXJyYXkoKVtjdXJyZW50SW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsID0gY3VycmVudFRhYi5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgcmVjdHMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7cmVjdHMud2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBgJHtlbC5vZmZzZXRMZWZ0fXB4YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBsb2FkVGVtcGxhdGUodGFiOiBMeVRhYiwgaW5kZXg6IG51bWJlcik6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD4gfCBudWxsIHtcbiAgICB0YWIuaW5kZXggPSBpbmRleDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIC8vIHNldCAwIGlmIGlzIG51bGxcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gdGFiO1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgcmV0dXJuIHRhYi50ZW1wbGF0ZVJlZkxhenkgfHwgdGFiLnRlbXBsYXRlUmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGNsYXNzZXM7XG4gIEBDb250ZW50Q2hpbGQoTHlUYWJDb250ZW50LCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHRlbXBsYXRlUmVmTGF6eTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PjtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3RhYkluZGljYXRvcicpIHRhYkluZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrKCkge1xuICAgIHRoaXMudGFicy5zZWxlY3RlZEluZGV4ID0gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFic1NlcnZpY2U6IEx5VGFic0NsYXNzZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGFiczogTHlUYWJzLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuY2xhc3NlcyA9IHRoaXMudGFic1NlcnZpY2UuY2xhc3NlcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWIpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10YWItbGFiZWwsIFtseS10YWItbGFiZWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYkxhYmVsIGV4dGVuZHMgTHlUYWJMYWJlbE1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGFic1NlcnZpY2U6IEx5VGFic0NsYXNzZXNTZXJ2aWNlLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBfdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHN1cGVyKF90aGVtZSwgX25nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IF9lbDtcbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSBfZWw7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFic1NlcnZpY2UuY2xhc3Nlcy5sYWJlbCk7XG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG5cbi8qKlxuICogZGVtbyBiYXNpY1xuICogPGx5LXRhYnMgd2l0aENvbG9yPVwiYWNjZW50XCI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGx5LXRhYi1sYWJlbD5IT01FPGx5LXRhYi1sYWJlbD5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbD5IT01FPGJ1dHRvbj5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbC1uYXRpdmUgbHktYnV0dG9uPkhPTUU8YnV0dG9uPlxuICogICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnaG9tZSddXCIgbHktdGFiLWxhYmVsIG5hdGl2ZSBseS1idXR0b24+SE9NRTxhPlxuICogICAgIENvbnRlbnRcbiAqICAgPC9seS10YWI+XG4gKiAgIC4uLlxuICogPC9seS10YWJzPlxuICpcbiAqIGRlbW8gbGF6eSBsb2FkaW5nXG4gKiA8bHktdGFicyB3aXRoQmc9XCJwcmltYXJ5XCI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGx5LXRhYi1sYWJlbD5IT01FPGx5LXRhYi1sYWJlbD5cbiAqICAgICA8bmctdGVtcGxhdGUgbHktdGFiLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbiAqICAgPC9seS10YWI+XG4gKiAgIC4uLlxuICogPC9seS10YWJzPlxuICogPT4gd2l0aENvbG9yOiBjb2xvciBkZWwgbGFiZWwgYWN0aXZhLCBkZWZhdWx0IHByaW1hcnlcbiAqID0+IHdpdGhCZzogY29sb3IgZGUgZm9uZG8gcGFyYSBsYSB0YWIsIGRlZmF1bHQgYmFja2dyb3VuZDpwcmltYXJ5XG4gKiA9PiBuYXRpdmU6IG5vIGFwbGljYSBsb3MgZXN0aWxvcyBwcmVkZXRlcm1pbmFkb3MsIGRlZmF1bHQgdW5kZWZpbmVkXG4gKiA9PiBkaXNhYmxlZDogRGlzYWJsZS9lbmFibGUgYSB0YWIsIGRlZmF1bHQgdW5kZWZpbmVkXG4gKiA9PiBpc0FjdGl2ZTogU2kgbGEgcGVzdGHDg8KxYSBlc3TDg8KhIGFjdHVhbG1lbnRlIGFjdGl2YS4sIGRlZmF1bHQgdW5kZWZpbmVkXG4gKiA9PiBzZWxlY3RlZEluZGV4T25DaGFuZ2UsIGRlZmF1bHQ6IGF1dG8sIG9wdHM6IG51bWJlciwgd2l0aCBhdXRvLCB0aGUgc2VsZWN0ZWRJbmRleCA9IGN1cnJlbnQgbyBjdXJyZW50LTEgb3IgbGF0ZXN0XG4gKi9cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdUcmFuc2NsdWRlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVRhYnMsIEx5VGFiTGFiZWwsIEx5VGFiIH0gZnJvbSAnLi90YWJzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtMeVRoZW1lTW9kdWxlLCBDb21tb25Nb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBOZ1RyYW5zY2x1ZGVNb2R1bGVdLFxuICBleHBvcnRzOiBbTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJJbmplY3RhYmxlIiwiTHlUaGVtZTIiLCJtaXhpbkJnIiwibWl4aW5Db2xvciIsIm1peGluU3R5bGVVcGRhdGVyIiwibWl4aW5SYWlzZWQiLCJtaXhpbkRpc2FibGVkIiwibWl4aW5PdXRsaW5lZCIsIm1peGluRWxldmF0aW9uIiwibWl4aW5TaGFkb3dDb2xvciIsIm1peGluRGlzYWJsZVJpcHBsZSIsInRzbGliXzEuX19leHRlbmRzIiwiU3Vic2NyaXB0aW9uIiwiRXZlbnRFbWl0dGVyIiwiaXNEZXZNb2RlIiwiUGxhdGZvcm0iLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiUmVuZGVyZXIyIiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwiVmlld0NoaWxkIiwiSW5wdXQiLCJPdXRwdXQiLCJDb250ZW50Q2hpbGRyZW4iLCJmb3J3YXJkUmVmIiwiQ29udGVudENoaWxkIiwiSG9zdExpc3RlbmVyIiwiTmdab25lIiwiTmdNb2R1bGUiLCJMeVRoZW1lTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiLCJOZ1RyYW5zY2x1ZGVNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEs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