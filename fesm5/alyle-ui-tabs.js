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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFiLWNvbnRlbnQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLmNsYXNlc3Muc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFicy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy9wdWJsaWNfYXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2x5LXRhYi1jb250ZW50XSd9KVxuZXhwb3J0IGNsYXNzIEx5VGFiQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHRhYnNTdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICB0YWI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG4gIH0sXG4gIHRhYnNMYWJlbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgbWluV2lkdGg6ICc3MnB4JyxcbiAgICBwYWRkaW5nOiAnMCAyNHB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgdGFiQ29udGVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgfSxcbiAgdGFiQ29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZmxleFNocmluazogMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgYm90dG9tOiAwLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yRm9yU2VydmVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNDbGFzc2VzU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQodGFic1N0eWxlcywgJ2x5VGFicycpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBIb3N0TGlzdGVuZXIsXG4gIGZvcndhcmRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95LFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRhYnNDbGFzc2VzU2VydmljZSB9IGZyb20gJy4vdGFicy5jbGFzZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFicycsXG4gIHRlbXBsYXRlOiBgPGRpdiBbd2l0aENsYXNzXT1cImNsYXNzZXMudGFic0xhYmVsc1wiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxzcGFuICN0YWJzSW5kaWNhdG9yPjwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBbd2l0aENsYXNzXT1cImNsYXNzZXMudGFiQ29udGVudHNcIiAjdGFiQ29udGVudHM+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJ0YWJzTGlzdFwiIGxldC14PVwiaW5kZXhcIj5cbiAgICA8ZGl2IFt3aXRoQ2xhc3NdPVwiY2xhc3Nlcy50YWJDb250ZW50XCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVHJhbnNjbHVkZV09XCJsb2FkVGVtcGxhdGUoaXRlbSwgeClcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIF9zZWxlY3RlZEluZGV4ID0gMDtcbiAgX3NlbGVjdGVkQmVmb3JlSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkUmVxdWlyZUNoZWNrOiBib29sZWFuO1xuICBfc2VsZWN0ZWRUYWI6IEx5VGFiO1xuICBfc2VsZWN0ZWRCZWZvcmVUYWI6IEx5VGFiO1xuICBwcml2YXRlIF90YWJzU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pc1ZpZXdJbml0TG9hZGVkOiBib29sZWFuO1xuICBwcml2YXRlIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfd2l0aENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcmVhZG9ubHkgY2xhc3NlcztcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudHMnKSB0YWJDb250ZW50czogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFic0luZGljYXRvcicpIHRhYnNJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXhPbkNoYW5nZTogJ2F1dG8nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoKSBuYXRpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fd2l0aENvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgay10YWItd2l0aC1jb2xvcjoke3ZhbH1gLFxuICAgICAgICB0aGVtZSA9PiAoXG4gICAgICAgICAgYGNvbG9yOiR7dGhlbWUuY29sb3JPZih2YWwpfTtgXG4gICAgICAgICksXG4gICAgICAgIHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLl93aXRoQ29sb3JDbGFzcyk7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlSW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodmFsLCAnYXV0bycpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIgPSB0aGlzLl9zZWxlY3RlZFRhYjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkSW5kZXgpO1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRoaXMuX3NlbGVjdGVkVGFiLCB0aGlzLl9zZWxlY3RlZEJlZm9yZVRhYik7XG5cbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFJlcXVpcmVDaGVjaykge1xuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHt0aGlzLl9zZWxlY3RlZEluZGV4ICogLTEwMH0lLDAsMClgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXggYXMgbnVtYmVyO1xuICB9XG4gIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgd2l0aEJnOiBzdHJpbmc7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVRhYikpIHRhYnNMaXN0OiBRdWVyeUxpc3Q8THlUYWI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhYnNTZXJ2aWNlOiBMeVRhYnNDbGFzc2VzU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgdGhpcy5jbGFzc2VzID0gdGFic1NlcnZpY2UuY2xhc3NlcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgY29uc3QgdGFic0luZGljYXRvckVsID0gdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YWJzSW5kaWNhdG9yRWwsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgICAvKiogU2V0IGRlZmF1bHQgQ29sb3IgKi9cbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9ICdwcmltYXJ5JztcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5faXNWaWV3SW5pdExvYWRlZCA9IHRydWU7XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24gPSB0aGlzLnRhYnNMaXN0LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4LCB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW5kZXgoc2VsZWN0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYnNMaXN0KSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkxhc3RUYWIgPSB0aGlzLnRhYnNMaXN0Lmxlbmd0aCAtIDE7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJyA/IGluZGV4IDogc2VsZWN0ZWRJbmRleDtcbiAgICByZXR1cm4gY3VycmVudEluZGV4IDwgMCA/IDAgOiBjdXJyZW50SW5kZXggPiBpbmRleE9mTGFzdFRhYiA/IGluZGV4T2ZMYXN0VGFiIDogY3VycmVudEluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSW5kaWNhdG9yKGN1cnJlbnRUYWI6IEx5VGFiLCBiZWZvcmVUYWI/OiBMeVRhYik6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgLy8gY3VycmVudFRhYiA9IHRoaXMudGFic0xpc3QuZmluZChfID0+IF8uaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XG4gICAgICBpZiAoIXRoaXMuX2lzVmlld0luaXRMb2FkZWQgfHwgIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAvKiogZm9yIGJlZm9yZSBpbml0aWFsaXplIG9yIGZvciBzZXJ2ZXIgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjdXJyZW50VGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY3VycmVudFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZm9yIGFmdGVyIGluaXRpYWxpemUgJiYgZm9yIGJyb3dzZXJcbiAgICAgICAgLy8gQ2xlYW4gYmVmb3JlIHRhYlxuICAgICAgICBpZiAoYmVmb3JlVGFiKSB7XG4gICAgICAgICAgYmVmb3JlVGFiLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoYmVmb3JlVGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCAnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFRhYi5pbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgLy8gdGhpcyBmaXhlZCB1bmRlZmluZWQgc2VsZWN0ZWQgdGFiXG4gICAgICAgICAgY3VycmVudFRhYiA9IHRoaXMudGFic0xpc3QudG9BcnJheSgpW2N1cnJlbnRJbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWwgPSBjdXJyZW50VGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCByZWN0cyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHtyZWN0cy53aWR0aH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIGAke2VsLm9mZnNldExlZnR9cHhgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGxvYWRUZW1wbGF0ZSh0YWI6IEx5VGFiLCBpbmRleDogbnVtYmVyKTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PiB8IG51bGwge1xuICAgIGlmICh0YWIubG9hZGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGFiLmluZGV4ID0gaW5kZXg7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICAvLyBzZXQgMCBpZiBpcyBudWxsXG4gICAgICB0aGlzLl9zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0YWIpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzVmlld0luaXRMb2FkZWQgJiYgdGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gdGFiO1xuICAgICAgLyoqIEFwcGx5IHN0eWxlIGZvciB0YWJJbmRpY2F0b3Igc2VydmVyICovXG4gICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGFiKTtcbiAgICB9XG4gICAgaWYgKHRhYi50ZW1wbGF0ZVJlZkxhenkpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgIHRhYi5sb2FkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGFiLnRlbXBsYXRlUmVmTGF6eTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWIubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0YWIudGVtcGxhdGVSZWY7XG4gICAgfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktdGFiLWxhYmVsXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2x5LXRhYi1sYWJlbF1cIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJbbHktdGFiLWxhYmVsLW5hdGl2ZV1cIj48L25nLWNvbnRlbnQ+XG48c3BhbiAjdGFiSW5kaWNhdG9yPjwvc3Bhbj5cbjxuZy10ZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIGluZGV4OiBudW1iZXI7XG4gIGxvYWRlZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGNsYXNzZXM7XG4gIEBDb250ZW50Q2hpbGQoTHlUYWJDb250ZW50LCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHRlbXBsYXRlUmVmTGF6eTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PjtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3RhYkluZGljYXRvcicpIHRhYkluZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrKCkge1xuICAgIHRoaXMudGFicy5fc2VsZWN0ZWRSZXF1aXJlQ2hlY2sgPSAhdGhpcy5sb2FkZWQ7XG4gICAgdGhpcy50YWJzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmluZGV4O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YWJzU2VydmljZTogTHlUYWJzQ2xhc3Nlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB0YWJzOiBMeVRhYnMsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5jbGFzc2VzID0gdGhpcy50YWJzU2VydmljZS5jbGFzc2VzO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYik7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3IpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRhYi1sYWJlbCwgW2x5LXRhYi1sYWJlbF0nXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiTGFiZWwgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3JpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0YWJzU2VydmljZTogTHlUYWJzQ2xhc3Nlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMudGFic1NlcnZpY2UuY2xhc3Nlcy5sYWJlbCk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZSh0aGlzLl9uZ1pvbmUsIHRoaXMucmlwcGxlU2VydmljZS5jbGFzc2VzLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogZGVtbyBiYXNpY1xuICogPGx5LXRhYnMgd2l0aENvbG9yPVwiYWNjZW50XCI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGx5LXRhYi1sYWJlbD5IT01FPGx5LXRhYi1sYWJlbD5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbD5IT01FPGJ1dHRvbj5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbC1uYXRpdmUgbHktYnV0dG9uPkhPTUU8YnV0dG9uPlxuICogICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnaG9tZSddXCIgbHktdGFiLWxhYmVsIG5hdGl2ZSBseS1idXR0b24+SE9NRTxhPlxuICogICAgIENvbnRlbnRcbiAqICAgPC9seS10YWI+XG4gKiAgIC4uLlxuICogPC9seS10YWJzPlxuICpcbiAqIGRlbW8gbGF6eSBsb2FkaW5nXG4gKiA8bHktdGFicyB3aXRoQmc9XCJwcmltYXJ5XCI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGx5LXRhYi1sYWJlbD5IT01FPGx5LXRhYi1sYWJlbD5cbiAqICAgICA8bmctdGVtcGxhdGUgbHktdGFiLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbiAqICAgPC9seS10YWI+XG4gKiAgIC4uLlxuICogPC9seS10YWJzPlxuICogPT4gd2l0aENvbG9yOiBjb2xvciBkZWwgbGFiZWwgYWN0aXZhLCBkZWZhdWx0IHByaW1hcnlcbiAqID0+IHdpdGhCZzogY29sb3IgZGUgZm9uZG8gcGFyYSBsYSB0YWIsIGRlZmF1bHQgYmFja2dyb3VuZDpwcmltYXJ5XG4gKiA9PiBuYXRpdmU6IG5vIGFwbGljYSBsb3MgZXN0aWxvcyBwcmVkZXRlcm1pbmFkb3MsIGRlZmF1bHQgdW5kZWZpbmVkXG4gKiA9PiBkaXNhYmxlZDogRGlzYWJsZS9lbmFibGUgYSB0YWIsIGRlZmF1bHQgdW5kZWZpbmVkXG4gKiA9PiBpc0FjdGl2ZTogU2kgbGEgcGVzdGHDg8KxYSBlc3TDg8KhIGFjdHVhbG1lbnRlIGFjdGl2YS4sIGRlZmF1bHQgdW5kZWZpbmVkXG4gKiA9PiBzZWxlY3RlZEluZGV4T25DaGFuZ2UsIGRlZmF1bHQ6IGF1dG8sIG9wdHM6IG51bWJlciwgd2l0aCBhdXRvLCB0aGUgc2VsZWN0ZWRJbmRleCA9IGN1cnJlbnQgbyBjdXJyZW50LTEgb3IgbGF0ZXN0XG4gKi9cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdUcmFuc2NsdWRlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlUYWJzLCBMeVRhYkxhYmVsLCBMeVRhYiB9IGZyb20gJy4vdGFicy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTHlUaGVtZU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGUsIE5nVHJhbnNjbHVkZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVRhYnMsIEx5VGFiLCBMeVRhYkxhYmVsLCBMeVRhYkNvbnRlbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVRhYnMsIEx5VGFiLCBMeVRhYkxhYmVsLCBMeVRhYkNvbnRlbnRdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFic01vZHVsZSB7IH1cbiIsImV4cG9ydCAqIGZyb20gJy4vdGFicy5tb2R1bGUnO1xuLy8gZXhwb3J0ICogZnJvbSAnLi90YWJzJztcbmV4cG9ydCAqIGZyb20gJy4vdGFicy5kaXJlY3RpdmUnO1xuLy8gZXhwb3J0ICogZnJvbSAnLi90YWItbGFiZWwuZGlyZWN0aXZlJztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFJRSxzQkFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7Z0JBRm5ELFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBQzs7OztnQkFGdEIsV0FBVzs7dUJBQTlCOzs7Ozs7O0FDQUE7QUFHQSxJQUFNLFVBQVUsR0FBRztJQUNqQixJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsT0FBTztRQUNoQixRQUFRLEVB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