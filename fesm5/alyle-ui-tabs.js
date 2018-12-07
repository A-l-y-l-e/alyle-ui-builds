import { Directive, TemplateRef, Injectable, NgModule, defineInjectable, inject, EventEmitter, isDevMode, Component, ChangeDetectionStrategy, ViewEncapsulation, Renderer2, ElementRef, ChangeDetectorRef, ViewChild, Input, Output, ContentChildren, forwardRef, ContentChild, HostListener, NgZone } from '@angular/core';
import { LyTheme2, LyThemeModule, LyCommonModule, NgTranscludeModule, mixinBg, mixinColor, mixinStyleUpdater, mixinRaised, mixinDisabled, mixinOutlined, mixinElevation, mixinShadowColor, mixinDisableRipple, Platform } from '@alyle/ui';
import { __extends } from 'tslib';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyTabContent = /** @class */ (function () {
    function LyTabContent(template) {
        this.template = template;
    }
    LyTabContent.decorators = [
        { type: Directive, args: [{ selector: '[ly-tab-content]' },] }
    ];
    /** @nocollapse */
    LyTabContent.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyTabsClassesService.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyTabsClassesService.ngInjectableDef = defineInjectable({ factory: function LyTabsClassesService_Factory() { return new LyTabsClassesService(inject(LyTheme2)); }, token: LyTabsClassesService, providedIn: "root" });
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
var  /**
 * \@docs-private
 */
LyTabsBase = /** @class */ (function () {
    function LyTabsBase(_theme) {
        this._theme = _theme;
    }
    return LyTabsBase;
}());
/**
 * \@docs-private
 * @type {?}
 */
var LyTabsMixinBase = mixinBg(mixinColor(LyTabsBase));
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
LyTabLabelBase = /** @class */ (function () {
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
var LyTabLabelMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyTabLabelBase)))))))));
var LyTabs = /** @class */ (function (_super) {
    __extends(LyTabs, _super);
    function LyTabs(tabsService, theme, renderer, el, cd) {
        var _this = _super.call(this, theme) || this;
        _this.theme = theme;
        _this.renderer = renderer;
        _this.el = el;
        _this.cd = cd;
        _this._selectedIndex = 0;
        _this._tabsSubscription = Subscription.EMPTY;
        _this.selectedIndexOnChange = 'auto';
        _this.selectedIndexChange = new EventEmitter();
        _this.classes = tabsService.classes;
        return _this;
    }
    Object.defineProperty(LyTabs.prototype, "withColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._withColor;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
         */
        function () {
            return (/** @type {?} */ (this._selectedIndex));
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.selectedIndex) {
                this._selectedBeforeIndex = (/** @type {?} */ (this._selectedIndex));
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
        if (isDevMode() && changes.withColor) {
            console.warn("LyTabs > `withColor` is deprecated, instead use `color`");
        }
        if (isDevMode() && changes.withBg) {
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
            if (!this._isViewInitLoaded || !Platform.isBrowser) {
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
                var el = (/** @type {?} */ (currentTab._el.nativeElement));
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
        { type: Component, args: [{
                    selector: 'ly-tabs',
                    template: "<div [withClass]=\"classes.tabsLabels\">\n  <ng-content></ng-content>\n  <span #tabsIndicator></span>\n</div>\n<div [withClass]=\"classes.tabContents\" #tabContents>\n  <ng-template ngFor let-item [ngForOf]=\"tabsList\" let-x=\"index\">\n    <div [withClass]=\"classes.tabContent\">\n      <ng-template [ngTransclude]=\"loadTemplate(item, x)\"></ng-template>\n    </div>\n  </ng-template>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    exportAs: 'lyTabs',
                    inputs: [
                        'bg', 'color'
                    ]
                }] }
    ];
    /** @nocollapse */
    LyTabs.ctorParameters = function () { return [
        { type: LyTabsClassesService },
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    LyTabs.propDecorators = {
        tabContents: [{ type: ViewChild, args: ['tabContents',] }],
        tabsIndicator: [{ type: ViewChild, args: ['tabsIndicator',] }],
        selectedIndexOnChange: [{ type: Input }],
        native: [{ type: Input }],
        withColor: [{ type: Input }],
        selectedIndex: [{ type: Input }],
        selectedIndexChange: [{ type: Output }],
        withBg: [{ type: Input }],
        tabsList: [{ type: ContentChildren, args: [forwardRef(function () { return LyTab; }),] }]
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
        { type: Component, args: [{
                    selector: 'ly-tab',
                    template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<span #tabIndicator></span>\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    LyTab.ctorParameters = function () { return [
        { type: LyTabsClassesService },
        { type: LyTabs },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyTab.propDecorators = {
        templateRefLazy: [{ type: ContentChild, args: [LyTabContent, { read: TemplateRef },] }],
        templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
        tabIndicator: [{ type: ViewChild, args: ['tabIndicator',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
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
        { type: Directive, args: [{
                    selector: 'ly-tab-label, [ly-tab-label]'
                },] }
    ];
    /** @nocollapse */
    LyTabLabel.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTabsClassesService },
        { type: NgZone },
        { type: LyTheme2 }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [LyThemeModule, CommonModule, LyCommonModule, NgTranscludeModule],
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

export { LyTabsModule, LyTabsBase, LyTabsMixinBase, LyTabLabelBase, LyTabLabelMixinBase, LyTabs, LyTab, LyTabLabel, LyTabContent as ɵa, LyTabsClassesService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFiLWNvbnRlbnQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLmNsYXNlc3Muc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFicy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2x5LXRhYi1jb250ZW50XSd9KVxuZXhwb3J0IGNsYXNzIEx5VGFiQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHRhYnNTdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIHRhYjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCdcbiAgfSxcbiAgdGFic0xhYmVsczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmbGV4R3JvdzogMVxuICB9LFxuICBsYWJlbDoge1xuICAgIG1pbldpZHRoOiAnNzJweCcsXG4gICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIHRhYkNvbnRlbnRzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHRyYW5zaXRpb246ICc0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nXG4gIH0sXG4gIHRhYkNvbnRlbnQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgdGFic0luZGljYXRvcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRyYW5zaXRpb246ICc0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgIGJvdHRvbTogMCxcbiAgICBoZWlnaHQ6ICcycHgnLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgdGFic0luZGljYXRvckZvclNlcnZlcjoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfVxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzQ2xhc3Nlc1NlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHRhYnNTdHlsZXMpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgaXNEZXZNb2RlXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBQbGF0Zm9ybSxcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUYWJzQ2xhc3Nlc1NlcnZpY2UgfSBmcm9tICcuL3RhYnMuY2xhc2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlUYWJzQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlUYWJzTWl4aW5CYXNlID0gbWl4aW5CZyhtaXhpbkNvbG9yKEx5VGFic0Jhc2UpKTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVRhYkxhYmVsQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVRhYkxhYmVsTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeVRhYkxhYmVsQmFzZSkpKSkpKSkpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmRpcmVjdGl2ZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJywgJ2NvbG9yJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFicyBleHRlbmRzIEx5VGFic01peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBfc2VsZWN0ZWRJbmRleCA9IDA7XG4gIF9zZWxlY3RlZEJlZm9yZUluZGV4OiBudW1iZXI7XG4gIF9zZWxlY3RlZFRhYjogTHlUYWI7XG4gIF9zZWxlY3RlZEJlZm9yZVRhYjogTHlUYWI7XG4gIHByaXZhdGUgX3RhYnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2lzVmlld0luaXRMb2FkZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3dpdGhDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF93aXRoQ29sb3JDbGFzczogc3RyaW5nO1xuICByZWFkb25seSBjbGFzc2VzO1xuICBAVmlld0NoaWxkKCd0YWJDb250ZW50cycpIHRhYkNvbnRlbnRzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJzSW5kaWNhdG9yJykgdGFic0luZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleE9uQ2hhbmdlOiAnYXV0bycgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgpIG5hdGl2ZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2V0IHdpdGhDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLl93aXRoQ29sb3IgPSB2YWw7XG4gICAgICB0aGlzLl93aXRoQ29sb3JDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBrLXRhYi13aXRoLWNvbG9yOiR7dmFsfWAsXG4gICAgICAgIHRoZW1lID0+IChcbiAgICAgICAgICBgY29sb3I6JHt0aGVtZS5jb2xvck9mKHZhbCl9O2BcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3dpdGhDb2xvckNsYXNzKTtcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFRhYikge1xuICAgICAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX3NlbGVjdGVkVGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCB0aGlzLl93aXRoQ29sb3JDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWw6IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVJbmRleCA9IHRoaXMuX3NlbGVjdGVkSW5kZXggYXMgbnVtYmVyO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2ZpbmRJbmRleCh2YWwsICdhdXRvJyk7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZVRhYiA9IHRoaXMuX3NlbGVjdGVkVGFiO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQodGhpcy5fc2VsZWN0ZWRJbmRleCk7XG4gICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGhpcy5fc2VsZWN0ZWRUYWIsIHRoaXMuX3NlbGVjdGVkQmVmb3JlVGFiKTtcblxuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJDb250ZW50cy5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7dGhpcy5fc2VsZWN0ZWRJbmRleCAqIC0xMDB9JSwwLDApYCk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgfVxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHdpdGhCZzogc3RyaW5nO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlUYWIpKSB0YWJzTGlzdDogUXVlcnlMaXN0PEx5VGFiPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0YWJzU2VydmljZTogTHlUYWJzQ2xhc3Nlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuY2xhc3NlcyA9IHRhYnNTZXJ2aWNlLmNsYXNzZXM7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuY29sb3IpIHtcbiAgICAgIHRoaXMud2l0aENvbG9yID0gY2hhbmdlcy5jb2xvci5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmJnKSB7XG4gICAgICB0aGlzLndpdGhCZyA9IGNoYW5nZXMuYmcuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNEZXZNb2RlKCkgJiYgY2hhbmdlcy53aXRoQ29sb3IpIHtcbiAgICAgIGNvbnNvbGUud2FybihgTHlUYWJzID4gXFxgd2l0aENvbG9yXFxgIGlzIGRlcHJlY2F0ZWQsIGluc3RlYWQgdXNlIFxcYGNvbG9yXFxgYCk7XG4gICAgfVxuICAgIGlmIChpc0Rldk1vZGUoKSAmJiBjaGFuZ2VzLndpdGhCZykge1xuICAgICAgY29uc29sZS53YXJuKGBMeVRhYnMgPiBcXGB3aXRoQ29sb3JcXGAgaXMgZGVwcmVjYXRlZCwgaW5zdGVhZCB1c2UgXFxgYmdcXGBgKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGNvbnN0IHRhYnNJbmRpY2F0b3JFbCA9IHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFic0luZGljYXRvckVsLCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcik7XG4gICAgLyoqIFNldCBkZWZhdWx0IENvbG9yICovXG4gICAgaWYgKCF0aGlzLndpdGhDb2xvciAmJiAhdGhpcy5jb2xvcikge1xuICAgICAgdGhpcy53aXRoQ29sb3IgPSAncHJpbWFyeSc7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2lzVmlld0luaXRMb2FkZWQgPSB0cnVlO1xuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uID0gdGhpcy50YWJzTGlzdC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCwgdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW5kZXgoc2VsZWN0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYnNMaXN0KSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkxhc3RUYWIgPSB0aGlzLnRhYnNMaXN0Lmxlbmd0aCAtIDE7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJyA/IGluZGV4IDogc2VsZWN0ZWRJbmRleDtcbiAgICByZXR1cm4gY3VycmVudEluZGV4IDwgMCA/IDAgOiBjdXJyZW50SW5kZXggPiBpbmRleE9mTGFzdFRhYiA/IGluZGV4T2ZMYXN0VGFiIDogY3VycmVudEluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSW5kaWNhdG9yKGN1cnJlbnRUYWI6IEx5VGFiLCBiZWZvcmVUYWI/OiBMeVRhYik6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgLy8gY3VycmVudFRhYiA9IHRoaXMudGFic0xpc3QuZmluZChfID0+IF8uaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XG4gICAgICBpZiAoIXRoaXMuX2lzVmlld0luaXRMb2FkZWQgfHwgIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAvKiogZm9yIGJlZm9yZSBpbml0aWFsaXplIG9yIGZvciBzZXJ2ZXIgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjdXJyZW50VGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY3VycmVudFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZm9yIGFmdGVyIGluaXRpYWxpemUgJiYgZm9yIGJyb3dzZXJcbiAgICAgICAgLy8gQ2xlYW4gYmVmb3JlIHRhYlxuICAgICAgICBpZiAoYmVmb3JlVGFiKSB7XG4gICAgICAgICAgYmVmb3JlVGFiLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoYmVmb3JlVGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCAnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFRhYi5pbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgLy8gdGhpcyBmaXhlZCB1bmRlZmluZWQgc2VsZWN0ZWQgdGFiXG4gICAgICAgICAgY3VycmVudFRhYiA9IHRoaXMudGFic0xpc3QudG9BcnJheSgpW2N1cnJlbnRJbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWwgPSBjdXJyZW50VGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCByZWN0cyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHtyZWN0cy53aWR0aH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIGAke2VsLm9mZnNldExlZnR9cHhgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGxvYWRUZW1wbGF0ZSh0YWI6IEx5VGFiLCBpbmRleDogbnVtYmVyKTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PiB8IG51bGwge1xuICAgIHRhYi5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgLy8gc2V0IDAgaWYgaXMgbnVsbFxuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGFiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICByZXR1cm4gdGFiLnRlbXBsYXRlUmVmTGF6eSB8fCB0YWIudGVtcGxhdGVSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWIgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBpbmRleDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2xhc3NlcztcbiAgQENvbnRlbnRDaGlsZChMeVRhYkNvbnRlbnQsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdGVtcGxhdGVSZWZMYXp5OiBUZW1wbGF0ZVJlZjxMeVRhYkNvbnRlbnQ+O1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndGFiSW5kaWNhdG9yJykgdGFiSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2soKSB7XG4gICAgdGhpcy50YWJzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmluZGV4O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YWJzU2VydmljZTogTHlUYWJzQ2xhc3Nlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0YWJzOiBMeVRhYnMsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5jbGFzc2VzID0gdGhpcy50YWJzU2VydmljZS5jbGFzc2VzO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYik7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3IpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRhYi1sYWJlbCwgW2x5LXRhYi1sYWJlbF0nXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiTGFiZWwgZXh0ZW5kcyBMeVRhYkxhYmVsTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF90YWJzU2VydmljZTogTHlUYWJzQ2xhc3Nlc1NlcnZpY2UsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgc3VwZXIoX3RoZW1lLCBfbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gX2VsO1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IF9lbDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzU2VydmljZS5jbGFzc2VzLmxhYmVsKTtcbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBkZW1vIGJhc2ljXG4gKiA8bHktdGFicyB3aXRoQ29sb3I9XCJhY2NlbnRcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8bHktdGFiLWxhYmVsPkhPTUU8bHktdGFiLWxhYmVsPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8YnV0dG9uPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsLW5hdGl2ZSBseS1idXR0b24+SE9NRTxidXR0b24+XG4gKiAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydob21lJ11cIiBseS10YWItbGFiZWwgbmF0aXZlIGx5LWJ1dHRvbj5IT01FPGE+XG4gKiAgICAgQ29udGVudFxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKlxuICogZGVtbyBsYXp5IGxvYWRpbmdcbiAqIDxseS10YWJzIHdpdGhCZz1cInByaW1hcnlcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8bHktdGFiLWxhYmVsPkhPTUU8bHktdGFiLWxhYmVsPlxuICogICAgIDxuZy10ZW1wbGF0ZSBseS10YWItY29udGVudD48L25nLXRlbXBsYXRlPlxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKiA9PiB3aXRoQ29sb3I6IGNvbG9yIGRlbCBsYWJlbCBhY3RpdmEsIGRlZmF1bHQgcHJpbWFyeVxuICogPT4gd2l0aEJnOiBjb2xvciBkZSBmb25kbyBwYXJhIGxhIHRhYiwgZGVmYXVsdCBiYWNrZ3JvdW5kOnByaW1hcnlcbiAqID0+IG5hdGl2ZTogbm8gYXBsaWNhIGxvcyBlc3RpbG9zIHByZWRldGVybWluYWRvcywgZGVmYXVsdCB1bmRlZmluZWRcbiAqID0+IGRpc2FibGVkOiBEaXNhYmxlL2VuYWJsZSBhIHRhYiwgZGVmYXVsdCB1bmRlZmluZWRcbiAqID0+IGlzQWN0aXZlOiBTaSBsYSBwZXN0YcODwrFhIGVzdMODwqEgYWN0dWFsbWVudGUgYWN0aXZhLiwgZGVmYXVsdCB1bmRlZmluZWRcbiAqID0+IHNlbGVjdGVkSW5kZXhPbkNoYW5nZSwgZGVmYXVsdDogYXV0bywgb3B0czogbnVtYmVyLCB3aXRoIGF1dG8sIHRoZSBzZWxlY3RlZEluZGV4ID0gY3VycmVudCBvIGN1cnJlbnQtMSBvciBsYXRlc3RcbiAqL1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeVRoZW1lTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5VGFicywgTHlUYWJMYWJlbCwgTHlUYWIgfSBmcm9tICcuL3RhYnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0x5VGhlbWVNb2R1bGUsIENvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGUsIE5nVHJhbnNjbHVkZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVRhYnMsIEx5VGFiLCBMeVRhYkxhYmVsLCBMeVRhYkNvbnRlbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVRhYnMsIEx5VGFiLCBMeVRhYkxhYmVsLCBMeVRhYkNvbnRlbnRdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFic01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBSUUsc0JBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7O2dCQUZuRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUM7Ozs7Z0JBRnRCLFdBQVc7O0lBSzlCLG1CQUFDO0NBSEQ7Ozs7OztBQ0ZBO0lBR00sVUFBVSxHQUFHO0lBQ2pCLElBQUksRUFBRTtRQUNKLE9B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