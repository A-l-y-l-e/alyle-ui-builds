import { Directive, TemplateRef, Injectable, NgModule, Component, Input, ChangeDetectionStrategy, ContentChildren, Output, ContentChild, ViewChild, HostListener, forwardRef, EventEmitter, ChangeDetectorRef, Renderer2, ElementRef, ViewEncapsulation, NgZone, defineInjectable, inject } from '@angular/core';
import { LyTheme2, LyThemeModule, LyCommonModule, NgTranscludeModule, Platform } from '@alyle/ui';
import { Subscription } from 'rxjs';
import { Ripple, LyRippleService, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyTabContent = /** @class */ (function () {
    function LyTabContent(template) {
        this.template = template;
    }
    LyTabContent.decorators = [
        { type: Directive, args: [{ selector: '[ly-tab-content]' },] },
    ];
    /** @nocollapse */
    LyTabContent.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        if (Platform.isBrowser) {
            this._rippleContainer = new Ripple(this._ngZone, this.rippleService.classes, this._el.nativeElement);
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
        { type: NgZone }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [LyThemeModule, CommonModule, LyCommonModule, LyRippleModule, NgTranscludeModule],
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

export { LyTabsModule, LyTabs, LyTab, LyTabLabel, LyTabContent as ɵa, LyTabsClassesService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFiLWNvbnRlbnQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLmNsYXNlc3Muc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFicy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy9wdWJsaWNfYXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2x5LXRhYi1jb250ZW50XSd9KVxuZXhwb3J0IGNsYXNzIEx5VGFiQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHRhYnNTdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICB0YWI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG4gIH0sXG4gIHRhYnNMYWJlbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgbWluV2lkdGg6ICc3MnB4JyxcbiAgICBwYWRkaW5nOiAnMCAyNHB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgdGFiQ29udGVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgfSxcbiAgdGFiQ29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZmxleFNocmluazogMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgYm90dG9tOiAwLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yRm9yU2VydmVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNDbGFzc2VzU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQodGFic1N0eWxlcywgJ2x5VGFicycpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBIb3N0TGlzdGVuZXIsXG4gIGZvcndhcmRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95LFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRhYnNDbGFzc2VzU2VydmljZSB9IGZyb20gJy4vdGFicy5jbGFzZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFicycsXG4gIHRlbXBsYXRlOiBgPGRpdiBbd2l0aENsYXNzXT1cImNsYXNzZXMudGFic0xhYmVsc1wiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxzcGFuICN0YWJzSW5kaWNhdG9yPjwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBbd2l0aENsYXNzXT1cImNsYXNzZXMudGFiQ29udGVudHNcIiAjdGFiQ29udGVudHM+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJ0YWJzTGlzdFwiIGxldC14PVwiaW5kZXhcIj5cbiAgICA8ZGl2IFt3aXRoQ2xhc3NdPVwiY2xhc3Nlcy50YWJDb250ZW50XCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVHJhbnNjbHVkZV09XCJsb2FkVGVtcGxhdGUoaXRlbSwgeClcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIF9zZWxlY3RlZEluZGV4ID0gMDtcbiAgX3NlbGVjdGVkQmVmb3JlSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkUmVxdWlyZUNoZWNrOiBib29sZWFuO1xuICBfc2VsZWN0ZWRUYWI6IEx5VGFiO1xuICBfc2VsZWN0ZWRCZWZvcmVUYWI6IEx5VGFiO1xuICBwcml2YXRlIF90YWJzU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pc1ZpZXdJbml0TG9hZGVkOiBib29sZWFuO1xuICBwcml2YXRlIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfd2l0aENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcmVhZG9ubHkgY2xhc3NlcztcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudHMnKSB0YWJDb250ZW50czogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFic0luZGljYXRvcicpIHRhYnNJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXhPbkNoYW5nZTogJ2F1dG8nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoKSBuYXRpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fd2l0aENvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgay10YWItd2l0aC1jb2xvcjoke3ZhbH1gLFxuICAgICAgICB0aGVtZSA9PiAoXG4gICAgICAgICAgYGNvbG9yOiR7dGhlbWUuY29sb3JPZih2YWwpfTtgXG4gICAgICAgICksXG4gICAgICAgIHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLl93aXRoQ29sb3JDbGFzcyk7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlSW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodmFsLCAnYXV0bycpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIgPSB0aGlzLl9zZWxlY3RlZFRhYjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkSW5kZXgpO1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRoaXMuX3NlbGVjdGVkVGFiLCB0aGlzLl9zZWxlY3RlZEJlZm9yZVRhYik7XG5cbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFJlcXVpcmVDaGVjaykge1xuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHt0aGlzLl9zZWxlY3RlZEluZGV4ICogLTEwMH0lLDAsMClgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXggYXMgbnVtYmVyO1xuICB9XG4gIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgd2l0aEJnOiBzdHJpbmc7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVRhYikpIHRhYnNMaXN0OiBRdWVyeUxpc3Q8THlUYWI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhYnNTZXJ2aWNlOiBMeVRhYnNDbGFzc2VzU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgdGhpcy5jbGFzc2VzID0gdGFic1NlcnZpY2UuY2xhc3NlcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgY29uc3QgdGFic0luZGljYXRvckVsID0gdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YWJzSW5kaWNhdG9yRWwsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgICAvKiogU2V0IGRlZmF1bHQgQ29sb3IgKi9cbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9ICdwcmltYXJ5JztcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5faXNWaWV3SW5pdExvYWRlZCA9IHRydWU7XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24gPSB0aGlzLnRhYnNMaXN0LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4LCB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW5kZXgoc2VsZWN0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYnNMaXN0KSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkxhc3RUYWIgPSB0aGlzLnRhYnNMaXN0Lmxlbmd0aCAtIDE7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJyA/IGluZGV4IDogc2VsZWN0ZWRJbmRleDtcbiAgICByZXR1cm4gY3VycmVudEluZGV4IDwgMCA/IDAgOiBjdXJyZW50SW5kZXggPiBpbmRleE9mTGFzdFRhYiA/IGluZGV4T2ZMYXN0VGFiIDogY3VycmVudEluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSW5kaWNhdG9yKGN1cnJlbnRUYWI6IEx5VGFiLCBiZWZvcmVUYWI/OiBMeVRhYik6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgLy8gY3VycmVudFRhYiA9IHRoaXMudGFic0xpc3QuZmluZChfID0+IF8uaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XG4gICAgICBpZiAoIXRoaXMuX2lzVmlld0luaXRMb2FkZWQgfHwgIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAvKiogZm9yIGJlZm9yZSBpbml0aWFsaXplIG9yIGZvciBzZXJ2ZXIgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjdXJyZW50VGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY3VycmVudFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVE9ETzogdGFiczogdXBkYXRlIGluZGljYXRvciB3aGVuIGNoYW5nZSBgc2VsZWN0ZWRJbmRleGBcbiAgICAgICAgICovXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmb3IgYWZ0ZXIgaW5pdGlhbGl6ZSAmJiBmb3IgYnJvd3NlclxuICAgICAgICAvLyBDbGVhbiBiZWZvcmUgdGFiXG4gICAgICAgIGlmIChiZWZvcmVUYWIpIHtcbiAgICAgICAgICBiZWZvcmVUYWIuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShiZWZvcmVUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdjbGFzcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50VGFiLmluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAvLyB0aGlzIGZpeGVkIHVuZGVmaW5lZCBzZWxlY3RlZCB0YWJcbiAgICAgICAgICBjdXJyZW50VGFiID0gdGhpcy50YWJzTGlzdC50b0FycmF5KClbY3VycmVudEluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbCA9IGN1cnJlbnRUYWIuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHJlY3RzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3JlY3RzLndpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgYCR7ZWwub2Zmc2V0TGVmdH1weGApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbG9hZFRlbXBsYXRlKHRhYjogTHlUYWIsIGluZGV4OiBudW1iZXIpOiBUZW1wbGF0ZVJlZjxMeVRhYkNvbnRlbnQ+IHwgbnVsbCB7XG4gICAgaWYgKHRhYi5sb2FkZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0YWIuaW5kZXggPSBpbmRleDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIC8vIHNldCAwIGlmIGlzIG51bGxcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gdGFiO1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNWaWV3SW5pdExvYWRlZCAmJiB0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICAvKiogQXBwbHkgc3R5bGUgZm9yIHRhYkluZGljYXRvciBzZXJ2ZXIgKi9cbiAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0YWIpO1xuICAgIH1cbiAgICBpZiAodGFiLnRlbXBsYXRlUmVmTGF6eSkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgdGFiLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0YWIudGVtcGxhdGVSZWZMYXp5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYi5sb2FkZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRhYi50ZW1wbGF0ZVJlZjtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFiJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJseS10YWItbGFiZWxcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJbbHktdGFiLWxhYmVsXVwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltseS10YWItbGFiZWwtbmF0aXZlXVwiPjwvbmctY29udGVudD5cbjxzcGFuICN0YWJJbmRpY2F0b3I+PC9zcGFuPlxuPG5nLXRlbXBsYXRlPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbG9hZGVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2xhc3NlcztcbiAgQENvbnRlbnRDaGlsZChMeVRhYkNvbnRlbnQsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdGVtcGxhdGVSZWZMYXp5OiBUZW1wbGF0ZVJlZjxMeVRhYkNvbnRlbnQ+O1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndGFiSW5kaWNhdG9yJykgdGFiSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2soKSB7XG4gICAgdGhpcy50YWJzLl9zZWxlY3RlZFJlcXVpcmVDaGVjayA9ICF0aGlzLmxvYWRlZDtcbiAgICB0aGlzLnRhYnMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuaW5kZXg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhYnNTZXJ2aWNlOiBMeVRhYnNDbGFzc2VzU2VydmljZSxcbiAgICBwcml2YXRlIHRhYnM6IEx5VGFicyxcbiAgICBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLnRhYnNTZXJ2aWNlLmNsYXNzZXM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFiKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdGFiLWxhYmVsLCBbbHktdGFiLWxhYmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcmlwcGxlQ29udGFpbmVyOiBSaXBwbGU7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRhYnNTZXJ2aWNlOiBMeVRhYnNDbGFzc2VzU2VydmljZSxcbiAgICBwcml2YXRlIHJpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy50YWJzU2VydmljZS5jbGFzc2VzLmxhYmVsKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSBuZXcgUmlwcGxlKHRoaXMuX25nWm9uZSwgdGhpcy5yaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBkZW1vIGJhc2ljXG4gKiA8bHktdGFicyB3aXRoQ29sb3I9XCJhY2NlbnRcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8bHktdGFiLWxhYmVsPkhPTUU8bHktdGFiLWxhYmVsPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8YnV0dG9uPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsLW5hdGl2ZSBseS1idXR0b24+SE9NRTxidXR0b24+XG4gKiAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydob21lJ11cIiBseS10YWItbGFiZWwgbmF0aXZlIGx5LWJ1dHRvbj5IT01FPGE+XG4gKiAgICAgQ29udGVudFxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKlxuICogZGVtbyBsYXp5IGxvYWRpbmdcbiAqIDxseS10YWJzIHdpdGhCZz1cInByaW1hcnlcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8bHktdGFiLWxhYmVsPkhPTUU8bHktdGFiLWxhYmVsPlxuICogICAgIDxuZy10ZW1wbGF0ZSBseS10YWItY29udGVudD48L25nLXRlbXBsYXRlPlxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKiA9PiB3aXRoQ29sb3I6IGNvbG9yIGRlbCBsYWJlbCBhY3RpdmEsIGRlZmF1bHQgcHJpbWFyeVxuICogPT4gd2l0aEJnOiBjb2xvciBkZSBmb25kbyBwYXJhIGxhIHRhYiwgZGVmYXVsdCBiYWNrZ3JvdW5kOnByaW1hcnlcbiAqID0+IG5hdGl2ZTogbm8gYXBsaWNhIGxvcyBlc3RpbG9zIHByZWRldGVybWluYWRvcywgZGVmYXVsdCB1bmRlZmluZWRcbiAqID0+IGRpc2FibGVkOiBEaXNhYmxlL2VuYWJsZSBhIHRhYiwgZGVmYXVsdCB1bmRlZmluZWRcbiAqID0+IGlzQWN0aXZlOiBTaSBsYSBwZXN0YcODwrFhIGVzdMODwqEgYWN0dWFsbWVudGUgYWN0aXZhLiwgZGVmYXVsdCB1bmRlZmluZWRcbiAqID0+IHNlbGVjdGVkSW5kZXhPbkNoYW5nZSwgZGVmYXVsdDogYXV0bywgb3B0czogbnVtYmVyLCB3aXRoIGF1dG8sIHRoZSBzZWxlY3RlZEluZGV4ID0gY3VycmVudCBvIGN1cnJlbnQtMSBvciBsYXRlc3RcbiAqL1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeVRoZW1lTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeVRhYnMsIEx5VGFiTGFiZWwsIEx5VGFiIH0gZnJvbSAnLi90YWJzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtMeVRoZW1lTW9kdWxlLCBDb21tb25Nb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeVJpcHBsZU1vZHVsZSwgTmdUcmFuc2NsdWRlTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5VGFicywgTHlUYWIsIEx5VGFiTGFiZWwsIEx5VGFiQ29udGVudF0sXG4gIGRlY2xhcmF0aW9uczogW0x5VGFicywgTHlUYWIsIEx5VGFiTGFiZWwsIEx5VGFiQ29udGVudF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzTW9kdWxlIHsgfVxuIiwiZXhwb3J0ICogZnJvbSAnLi90YWJzLm1vZHVsZSc7XG4vLyBleHBvcnQgKiBmcm9tICcuL3RhYnMnO1xuZXhwb3J0ICogZnJvbSAnLi90YWJzLmRpcmVjdGl2ZSc7XG4vLyBleHBvcnQgKiBmcm9tICcuL3RhYi1sYWJlbC5kaXJlY3RpdmUnO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQUlFLHNCQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLOztnQkFGbkQsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFDOzs7O2dCQUZ0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