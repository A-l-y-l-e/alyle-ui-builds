/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Directive, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, TemplateRef, ContentChild, ViewChild, HostListener, forwardRef, EventEmitter, ChangeDetectorRef, Renderer2, ElementRef, ViewEncapsulation, NgZone } from '@angular/core';
import { LyTabContent } from './tab-content.directive';
import { LyTabsClassesService } from './tabs.clasess.service';
import { LyTheme2, Platform } from '@alyle/ui';
import { Subscription } from 'rxjs';
import { Ripple, LyRippleService } from '@alyle/ui/ripple';
var LyTabs = /** @class */ (function () {
    function LyTabs(tabsService, theme, renderer, el, cd) {
        this.theme = theme;
        this.renderer = renderer;
        this.el = el;
        this.cd = cd;
        this._selectedIndex = 0;
        this._tabsSubscription = Subscription.EMPTY;
        this.selectedIndexOnChange = 'auto';
        this.selectedIndexChange = new EventEmitter();
        this.classes = tabsService.classes;
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
            return /** @type {?} */ (this._selectedIndex);
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        { type: Component, args: [{
                    selector: 'ly-tabs',
                    template: "<div [withClass]=\"classes.tabsLabels\">\n  <ng-content></ng-content>\n  <span #tabsIndicator></span>\n</div>\n<div [withClass]=\"classes.tabContents\" #tabContents>\n  <ng-template ngFor let-item [ngForOf]=\"tabsList\" let-x=\"index\">\n    <div [withClass]=\"classes.tabContent\">\n      <ng-template [ngTransclude]=\"loadTemplate(item, x)\"></ng-template>\n    </div>\n  </ng-template>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    exportAs: 'lyTabs'
                },] },
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
}());
export { LyTabs };
if (false) {
    /** @type {?} */
    LyTabs.prototype._selectedIndex;
    /** @type {?} */
    LyTabs.prototype._selectedBeforeIndex;
    /** @type {?} */
    LyTabs.prototype._selectedRequireCheck;
    /** @type {?} */
    LyTabs.prototype._selectedTab;
    /** @type {?} */
    LyTabs.prototype._selectedBeforeTab;
    /** @type {?} */
    LyTabs.prototype._tabsSubscription;
    /** @type {?} */
    LyTabs.prototype._isViewInitLoaded;
    /** @type {?} */
    LyTabs.prototype._withColor;
    /** @type {?} */
    LyTabs.prototype._withColorClass;
    /** @type {?} */
    LyTabs.prototype.classes;
    /** @type {?} */
    LyTabs.prototype.tabContents;
    /** @type {?} */
    LyTabs.prototype.tabsIndicator;
    /** @type {?} */
    LyTabs.prototype.selectedIndexOnChange;
    /** @type {?} */
    LyTabs.prototype.native;
    /** @type {?} */
    LyTabs.prototype.selectedIndexChange;
    /** @type {?} */
    LyTabs.prototype.withBg;
    /** @type {?} */
    LyTabs.prototype.tabsList;
    /** @type {?} */
    LyTabs.prototype.theme;
    /** @type {?} */
    LyTabs.prototype.renderer;
    /** @type {?} */
    LyTabs.prototype.el;
    /** @type {?} */
    LyTabs.prototype.cd;
}
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
        { type: Component, args: [{
                    selector: 'ly-tab',
                    template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<span #tabIndicator></span>\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                },] },
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
export { LyTab };
if (false) {
    /** @type {?} */
    LyTab.prototype.index;
    /** @type {?} */
    LyTab.prototype.loaded;
    /** @type {?} */
    LyTab.prototype.classes;
    /** @type {?} */
    LyTab.prototype.templateRefLazy;
    /** @type {?} */
    LyTab.prototype.templateRef;
    /** @type {?} */
    LyTab.prototype.tabIndicator;
    /** @type {?} */
    LyTab.prototype.tabsService;
    /** @type {?} */
    LyTab.prototype.tabs;
    /** @type {?} */
    LyTab.prototype._renderer;
    /** @type {?} */
    LyTab.prototype._el;
}
var LyTabLabel = /** @class */ (function () {
    function LyTabLabel(renderer, _el, tabsService, rippleService, _ngZone, _theme) {
        this.renderer = renderer;
        this._el = _el;
        this.tabsService = tabsService;
        this.rippleService = rippleService;
        this._ngZone = _ngZone;
        this._theme = _theme;
    }
    /**
     * @return {?}
     */
    LyTabLabel.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this._el.nativeElement, this.tabsService.classes.label);
        if (Platform.isBrowser) {
            this._rippleContainer = new Ripple(this._theme.config, this._ngZone, this.rippleService.classes, this._el.nativeElement);
        }
    };
    /**
     * @return {?}
     */
    LyTabLabel.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
            this._rippleContainer.removeEvents();
        }
    };
    LyTabLabel.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-tab-label, [ly-tab-label]'
                },] },
    ];
    /** @nocollapse */
    LyTabLabel.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTabsClassesService },
        { type: LyRippleService },
        { type: NgZone },
        { type: LyTheme2 }
    ]; };
    return LyTabLabel;
}());
export { LyTabLabel };
if (false) {
    /** @type {?} */
    LyTabLabel.prototype._rippleContainer;
    /** @type {?} */
    LyTabLabel.prototype.renderer;
    /** @type {?} */
    LyTabLabel.prototype._el;
    /** @type {?} */
    LyTabLabel.prototype.tabsService;
    /** @type {?} */
    LyTabLabel.prototype.rippleService;
    /** @type {?} */
    LyTabLabel.prototype._ngZone;
    /** @type {?} */
    LyTabLabel.prototype._theme;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGFicy8iLCJzb3VyY2VzIjpbInRhYnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLGVBQWUsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLGlCQUFpQixFQUlqQixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUEwRXpELGdCQUNFLFdBQWlDLEVBQ3pCLE9BQ0EsVUFDQSxJQUNBO1FBSEEsVUFBSyxHQUFMLEtBQUs7UUFDTCxhQUFRLEdBQVIsUUFBUTtRQUNSLE9BQUUsR0FBRixFQUFFO1FBQ0YsT0FBRSxHQUFGLEVBQUU7OEJBM0RLLENBQUM7aUNBS1UsWUFBWSxDQUFDLEtBQUs7cUNBT0ksTUFBTTttQ0FzQ0wsSUFBSSxZQUFZLEVBQUU7UUFXbkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO0tBQ3BDO0lBaERELHNCQUNJLDZCQUFTOzs7O1FBY2I7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O1FBakJELFVB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QyxPQUFPOztnQkFuT3ZCOztTQTROYSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQ2hCLG9CQUNVLFVBQ0EsS0FDQSxhQUNBLGVBQ0EsU0FDQTtRQUxBLGFBQVEsR0FBUixRQUFRO1FBQ1IsUUFBRyxHQUFILEdBQUc7UUFDSCxnQkFBVyxHQUFYLFdBQVc7UUFDWCxrQkFBYSxHQUFiLGFBQWE7UUFDYixZQUFPLEdBQVAsT0FBTztRQUNQLFdBQU0sR0FBTixNQUFNO0tBQ1g7Ozs7SUFFTCw2QkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxSDtLQUNGOzs7O0lBRUQsZ0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN0QztLQUNGOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7aUJBQ3pDOzs7O2dCQTdPQyxTQUFTO2dCQUNULFVBQVU7Z0JBU0gsb0JBQW9CO2dCQUdaLGVBQWU7Z0JBTjlCLE1BQU07Z0JBSUMsUUFBUTs7cUJBMUJqQjs7U0E2UGEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgSG9zdExpc3RlbmVyLFxuICBmb3J3YXJkUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEFmdGVyVmlld0luaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUYWJzQ2xhc3Nlc1NlcnZpY2UgfSBmcm9tICcuL3RhYnMuY2xhc2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBQbGF0Zm9ybSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJpcHBsZSwgTHlSaXBwbGVTZXJ2aWNlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYnMnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW3dpdGhDbGFzc109XCJjbGFzc2VzLnRhYnNMYWJlbHNcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8c3BhbiAjdGFic0luZGljYXRvcj48L3NwYW4+XG48L2Rpdj5cbjxkaXYgW3dpdGhDbGFzc109XCJjbGFzc2VzLnRhYkNvbnRlbnRzXCIgI3RhYkNvbnRlbnRzPlxuICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWl0ZW0gW25nRm9yT2ZdPVwidGFic0xpc3RcIiBsZXQteD1cImluZGV4XCI+XG4gICAgPGRpdiBbd2l0aENsYXNzXT1cImNsYXNzZXMudGFiQ29udGVudFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RyYW5zY2x1ZGVdPVwibG9hZFRlbXBsYXRlKGl0ZW0sIHgpXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ2x5VGFicydcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBfc2VsZWN0ZWRJbmRleCA9IDA7XG4gIF9zZWxlY3RlZEJlZm9yZUluZGV4OiBudW1iZXI7XG4gIF9zZWxlY3RlZFJlcXVpcmVDaGVjazogYm9vbGVhbjtcbiAgX3NlbGVjdGVkVGFiOiBMeVRhYjtcbiAgX3NlbGVjdGVkQmVmb3JlVGFiOiBMeVRhYjtcbiAgcHJpdmF0ZSBfdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfaXNWaWV3SW5pdExvYWRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX3dpdGhDb2xvckNsYXNzOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGNsYXNzZXM7XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnRzJykgdGFiQ29udGVudHM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYnNJbmRpY2F0b3InKSB0YWJzSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4T25DaGFuZ2U6ICdhdXRvJyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCkgbmF0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX3dpdGhDb2xvckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGstdGFiLXdpdGgtY29sb3I6JHt2YWx9YCxcbiAgICAgICAgdGhlbWUgPT4gKFxuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX07YFxuICAgICAgICApLFxuICAgICAgICB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkVGFiKSB7XG4gICAgICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fc2VsZWN0ZWRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMuX3dpdGhDb2xvckNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IHdpdGhDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENvbG9yO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZUluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCBhcyBudW1iZXI7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHZhbCwgJ2F1dG8nKTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlVGFiID0gdGhpcy5fc2VsZWN0ZWRUYWI7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcbiAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0aGlzLl9zZWxlY3RlZFRhYiwgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIpO1xuXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRSZXF1aXJlQ2hlY2spIHtcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJDb250ZW50cy5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7dGhpcy5fc2VsZWN0ZWRJbmRleCAqIC0xMDB9JSwwLDApYCk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgfVxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHdpdGhCZzogc3RyaW5nO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlUYWIpKSB0YWJzTGlzdDogUXVlcnlMaXN0PEx5VGFiPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0YWJzU2VydmljZTogTHlUYWJzQ2xhc3Nlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHRoaXMuY2xhc3NlcyA9IHRhYnNTZXJ2aWNlLmNsYXNzZXM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGNvbnN0IHRhYnNJbmRpY2F0b3JFbCA9IHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFic0luZGljYXRvckVsLCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcik7XG4gICAgLyoqIFNldCBkZWZhdWx0IENvbG9yICovXG4gICAgaWYgKCF0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy53aXRoQ29sb3IgPSAncHJpbWFyeSc7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2lzVmlld0luaXRMb2FkZWQgPSB0cnVlO1xuICB9XG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uID0gdGhpcy50YWJzTGlzdC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCwgdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfZmluZEluZGV4KHNlbGVjdGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICghdGhpcy50YWJzTGlzdCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZMYXN0VGFiID0gdGhpcy50YWJzTGlzdC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHNlbGVjdGVkSW5kZXg7XG4gICAgcmV0dXJuIGN1cnJlbnRJbmRleCA8IDAgPyAwIDogY3VycmVudEluZGV4ID4gaW5kZXhPZkxhc3RUYWIgPyBpbmRleE9mTGFzdFRhYiA6IGN1cnJlbnRJbmRleDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUluZGljYXRvcihjdXJyZW50VGFiOiBMeVRhYiwgYmVmb3JlVGFiPzogTHlUYWIpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGN1cnJlbnRUYWIpIHtcbiAgICAgIC8vIGN1cnJlbnRUYWIgPSB0aGlzLnRhYnNMaXN0LmZpbmQoXyA9PiBfLmluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuICAgICAgaWYgKCF0aGlzLl9pc1ZpZXdJbml0TG9hZGVkIHx8ICFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgLyoqIGZvciBiZWZvcmUgaW5pdGlhbGl6ZSBvciBmb3Igc2VydmVyICovXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY3VycmVudFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGN1cnJlbnRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3dpdGhDb2xvckNsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGZvciBhZnRlciBpbml0aWFsaXplICYmIGZvciBicm93c2VyXG4gICAgICAgIC8vIENsZWFuIGJlZm9yZSB0YWJcbiAgICAgICAgaWYgKGJlZm9yZVRhYikge1xuICAgICAgICAgIGJlZm9yZVRhYi5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGJlZm9yZVRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRUYWIuaW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgIC8vIHRoaXMgZml4ZWQgdW5kZWZpbmVkIHNlbGVjdGVkIHRhYlxuICAgICAgICAgIGN1cnJlbnRUYWIgPSB0aGlzLnRhYnNMaXN0LnRvQXJyYXkoKVtjdXJyZW50SW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsID0gY3VycmVudFRhYi5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgcmVjdHMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7cmVjdHMud2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBgJHtlbC5vZmZzZXRMZWZ0fXB4YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBsb2FkVGVtcGxhdGUodGFiOiBMeVRhYiwgaW5kZXg6IG51bWJlcik6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD4gfCBudWxsIHtcbiAgICBpZiAodGFiLmxvYWRlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRhYi5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgLy8gc2V0IDAgaWYgaXMgbnVsbFxuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGFiKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1ZpZXdJbml0TG9hZGVkICYmIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgIC8qKiBBcHBseSBzdHlsZSBmb3IgdGFiSW5kaWNhdG9yIHNlcnZlciAqL1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgfVxuICAgIGlmICh0YWIudGVtcGxhdGVSZWZMYXp5KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSBpbmRleCkge1xuICAgICAgICB0YWIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRhYi50ZW1wbGF0ZVJlZkxhenk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFiLmxvYWRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdGFiLnRlbXBsYXRlUmVmO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cImx5LXRhYi1sYWJlbFwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltseS10YWItbGFiZWxdXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2x5LXRhYi1sYWJlbC1uYXRpdmVdXCI+PC9uZy1jb250ZW50PlxuPHNwYW4gI3RhYkluZGljYXRvcj48L3NwYW4+XG48bmctdGVtcGxhdGU+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWIgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBpbmRleDogbnVtYmVyO1xuICBsb2FkZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCByZWFkb25seSBjbGFzc2VzO1xuICBAQ29udGVudENoaWxkKEx5VGFiQ29udGVudCwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0ZW1wbGF0ZVJlZkxhenk6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD47XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0YWJJbmRpY2F0b3InKSB0YWJJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGljaygpIHtcbiAgICB0aGlzLnRhYnMuX3NlbGVjdGVkUmVxdWlyZUNoZWNrID0gIXRoaXMubG9hZGVkO1xuICAgIHRoaXMudGFicy5zZWxlY3RlZEluZGV4ID0gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFic1NlcnZpY2U6IEx5VGFic0NsYXNzZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGFiczogTHlUYWJzLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuY2xhc3NlcyA9IHRoaXMudGFic1NlcnZpY2UuY2xhc3NlcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWIpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS10YWItbGFiZWwsIFtseS10YWItbGFiZWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYkxhYmVsIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9yaXBwbGVDb250YWluZXI6IFJpcHBsZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGFic1NlcnZpY2U6IEx5VGFic0NsYXNzZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy50YWJzU2VydmljZS5jbGFzc2VzLmxhYmVsKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSBuZXcgUmlwcGxlKHRoaXMuX3RoZW1lLmNvbmZpZywgdGhpcy5fbmdab25lLCB0aGlzLnJpcHBsZVNlcnZpY2UuY2xhc3NlcywgdGhpcy5fZWwubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGRlbW8gYmFzaWNcbiAqIDxseS10YWJzIHdpdGhDb2xvcj1cImFjY2VudFwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxseS10YWItbGFiZWw+SE9NRTxseS10YWItbGFiZWw+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWw+SE9NRTxidXR0b24+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWwtbmF0aXZlIGx5LWJ1dHRvbj5IT01FPGJ1dHRvbj5cbiAqICAgICA8YSBbcm91dGVyTGlua109XCJbJ2hvbWUnXVwiIGx5LXRhYi1sYWJlbCBuYXRpdmUgbHktYnV0dG9uPkhPTUU8YT5cbiAqICAgICBDb250ZW50XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqXG4gKiBkZW1vIGxhenkgbG9hZGluZ1xuICogPGx5LXRhYnMgd2l0aEJnPVwicHJpbWFyeVwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxseS10YWItbGFiZWw+SE9NRTxseS10YWItbGFiZWw+XG4gKiAgICAgPG5nLXRlbXBsYXRlIGx5LXRhYi1jb250ZW50PjwvbmctdGVtcGxhdGU+XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqID0+IHdpdGhDb2xvcjogY29sb3IgZGVsIGxhYmVsIGFjdGl2YSwgZGVmYXVsdCBwcmltYXJ5XG4gKiA9PiB3aXRoQmc6IGNvbG9yIGRlIGZvbmRvIHBhcmEgbGEgdGFiLCBkZWZhdWx0IGJhY2tncm91bmQ6cHJpbWFyeVxuICogPT4gbmF0aXZlOiBubyBhcGxpY2EgbG9zIGVzdGlsb3MgcHJlZGV0ZXJtaW5hZG9zLCBkZWZhdWx0IHVuZGVmaW5lZFxuICogPT4gZGlzYWJsZWQ6IERpc2FibGUvZW5hYmxlIGEgdGFiLCBkZWZhdWx0IHVuZGVmaW5lZFxuICogPT4gaXNBY3RpdmU6IFNpIGxhIHBlc3Rhw7FhIGVzdMOhIGFjdHVhbG1lbnRlIGFjdGl2YS4sIGRlZmF1bHQgdW5kZWZpbmVkXG4gKiA9PiBzZWxlY3RlZEluZGV4T25DaGFuZ2UsIGRlZmF1bHQ6IGF1dG8sIG9wdHM6IG51bWJlciwgd2l0aCBhdXRvLCB0aGUgc2VsZWN0ZWRJbmRleCA9IGN1cnJlbnQgbyBjdXJyZW50LTEgb3IgbGF0ZXN0XG4gKi9cbiJdfQ==