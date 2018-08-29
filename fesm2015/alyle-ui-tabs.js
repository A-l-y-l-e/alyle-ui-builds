import { Directive, TemplateRef, Injectable, NgModule, Component, Input, ChangeDetectionStrategy, ContentChildren, Output, ContentChild, ViewChild, HostListener, forwardRef, EventEmitter, ChangeDetectorRef, Renderer2, ElementRef, ViewEncapsulation, NgZone, defineInjectable, inject } from '@angular/core';
import { LyTheme2, LyThemeModule, LyCommonModule, NgTranscludeModule, Platform } from '@alyle/ui';
import { Subscription } from 'rxjs';
import { Ripple, LyRippleService, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyTabContent {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
LyTabContent.decorators = [
    { type: Directive, args: [{ selector: '[ly-tab-content]' },] },
];
/** @nocollapse */
LyTabContent.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const tabsStyles = {
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
class LyTabsClassesService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(tabsStyles, 'lyTabs');
    }
}
LyTabsClassesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyTabsClassesService.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyTabsClassesService.ngInjectableDef = defineInjectable({ factory: function LyTabsClassesService_Factory() { return new LyTabsClassesService(inject(LyTheme2)); }, token: LyTabsClassesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyTabs {
    /**
     * @param {?} tabsService
     * @param {?} theme
     * @param {?} renderer
     * @param {?} el
     * @param {?} cd
     */
    constructor(tabsService, theme, renderer, el, cd) {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set withColor(val) {
        if (val !== this.withColor) {
            this._withColor = val;
            this._withColorClass = this.theme.addStyle(`k-tab-with-color:${val}`, theme => (`color:${theme.colorOf(val)};`), this.tabsIndicator.nativeElement, this._withColorClass);
            if (this._selectedTab) {
                this.theme.updateClass(this._selectedTab.tabIndicator.nativeElement, this.renderer, this._withColorClass);
            }
        }
    }
    /**
     * @return {?}
     */
    get withColor() {
        return this._withColor;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set selectedIndex(val) {
        if (val !== this.selectedIndex) {
            this._selectedBeforeIndex = /** @type {?} */ (this._selectedIndex);
            this._selectedIndex = this._findIndex(val, 'auto');
            this._selectedBeforeTab = this._selectedTab;
            this.selectedIndexChange.emit(this._selectedIndex);
            this._updateIndicator(this._selectedTab, this._selectedBeforeTab);
            if (this._selectedRequireCheck) {
                this.markForCheck();
            }
            this.renderer.setStyle(this.tabContents.nativeElement, 'transform', `translate3d(${this._selectedIndex * -100}%,0,0)`);
        }
    }
    /**
     * @return {?}
     */
    get selectedIndex() {
        return /** @type {?} */ (this._selectedIndex);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.classes.root);
        /** @type {?} */
        const tabsIndicatorEl = this.tabsIndicator.nativeElement;
        this.renderer.addClass(tabsIndicatorEl, this.classes.tabsIndicator);
        /** Set default Color */
        if (!this.withColor) {
            this.withColor = 'primary';
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._isViewInitLoaded = true;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._tabsSubscription = this.tabsList.changes.subscribe(() => {
            if (this._selectedIndex !== this.selectedIndexOnChange) {
                this.selectedIndex = this._findIndex(this.selectedIndex, this.selectedIndexOnChange);
            }
            this.cd.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tabsSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    _getHostElement() {
        return this.el.nativeElement;
    }
    /**
     * @param {?} selectedIndex
     * @param {?} index
     * @return {?}
     */
    _findIndex(selectedIndex, index) {
        if (!this.tabsList) {
            return selectedIndex;
        }
        /** @type {?} */
        const indexOfLastTab = this.tabsList.length - 1;
        /** @type {?} */
        const currentIndex = typeof index === 'number' ? index : selectedIndex;
        return currentIndex < 0 ? 0 : currentIndex > indexOfLastTab ? indexOfLastTab : currentIndex;
    }
    /**
     * @param {?} currentTab
     * @param {?=} beforeTab
     * @return {?}
     */
    _updateIndicator(currentTab, beforeTab) {
        /** @type {?} */
        const currentIndex = this.selectedIndex;
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
                const el = /** @type {?} */ (currentTab._el.nativeElement);
                /** @type {?} */
                const rects = el.getBoundingClientRect();
                this.renderer.setStyle(this.tabsIndicator.nativeElement, 'width', `${rects.width}px`);
                this.renderer.setStyle(this.tabsIndicator.nativeElement, 'left', `${el.offsetLeft}px`);
            }
        }
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cd.markForCheck();
    }
    /**
     * @param {?} tab
     * @param {?} index
     * @return {?}
     */
    loadTemplate(tab, index) {
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
    }
}
LyTabs.decorators = [
    { type: Component, args: [{
                selector: 'ly-tabs',
                template: `<div [withClass]="classes.tabsLabels">
  <ng-content></ng-content>
  <span #tabsIndicator></span>
</div>
<div [withClass]="classes.tabContents" #tabContents>
  <ng-template ngFor let-item [ngForOf]="tabsList" let-x="index">
    <div [withClass]="classes.tabContent">
      <ng-template [ngTransclude]="loadTemplate(item, x)"></ng-template>
    </div>
  </ng-template>
</div>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'lyTabs'
            },] },
];
/** @nocollapse */
LyTabs.ctorParameters = () => [
    { type: LyTabsClassesService },
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
LyTabs.propDecorators = {
    tabContents: [{ type: ViewChild, args: ['tabContents',] }],
    tabsIndicator: [{ type: ViewChild, args: ['tabsIndicator',] }],
    selectedIndexOnChange: [{ type: Input }],
    native: [{ type: Input }],
    withColor: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    selectedIndexChange: [{ type: Output }],
    withBg: [{ type: Input }],
    tabsList: [{ type: ContentChildren, args: [forwardRef(() => LyTab),] }]
};
class LyTab {
    /**
     * @param {?} tabsService
     * @param {?} tabs
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(tabsService, tabs, _renderer, _el) {
        this.tabsService = tabsService;
        this.tabs = tabs;
        this._renderer = _renderer;
        this._el = _el;
        this.classes = this.tabsService.classes;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.tabs._selectedRequireCheck = !this.loaded;
        this.tabs.selectedIndex = this.index;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this.classes.tab);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._renderer.addClass(this.tabIndicator.nativeElement, this.classes.tabsIndicator);
    }
}
LyTab.decorators = [
    { type: Component, args: [{
                selector: 'ly-tab',
                template: `<ng-content select="ly-tab-label"></ng-content>
<ng-content select="[ly-tab-label]"></ng-content>
<ng-content select="[ly-tab-label-native]"></ng-content>
<span #tabIndicator></span>
<ng-template>
  <ng-content></ng-content>
</ng-template>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
LyTab.ctorParameters = () => [
    { type: LyTabsClassesService },
    { type: LyTabs },
    { type: Renderer2 },
    { type: ElementRef }
];
LyTab.propDecorators = {
    templateRefLazy: [{ type: ContentChild, args: [LyTabContent, { read: TemplateRef },] }],
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
    tabIndicator: [{ type: ViewChild, args: ['tabIndicator',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
class LyTabLabel {
    /**
     * @param {?} renderer
     * @param {?} _el
     * @param {?} tabsService
     * @param {?} rippleService
     * @param {?} _ngZone
     */
    constructor(renderer, _el, tabsService, rippleService, _ngZone) {
        this.renderer = renderer;
        this._el = _el;
        this.tabsService = tabsService;
        this.rippleService = rippleService;
        this._ngZone = _ngZone;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this._el.nativeElement, this.tabsService.classes.label);
        if (Platform.isBrowser) {
            this._rippleContainer = new Ripple(this._ngZone, this.rippleService.classes, this._el.nativeElement);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Platform.isBrowser) {
            this._rippleContainer.removeEvents();
        }
    }
}
LyTabLabel.decorators = [
    { type: Directive, args: [{
                selector: 'ly-tab-label, [ly-tab-label]'
            },] },
];
/** @nocollapse */
LyTabLabel.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTabsClassesService },
    { type: LyRippleService },
    { type: NgZone }
];
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
class LyTabsModule {
}
LyTabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [LyThemeModule, CommonModule, LyCommonModule, LyRippleModule, NgTranscludeModule],
                exports: [LyTabs, LyTab, LyTabLabel, LyTabContent],
                declarations: [LyTabs, LyTab, LyTabLabel, LyTabContent]
            },] },
];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFiLWNvbnRlbnQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLmNsYXNlc3Muc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFicy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy9wdWJsaWNfYXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2x5LXRhYi1jb250ZW50XSd9KVxuZXhwb3J0IGNsYXNzIEx5VGFiQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHRhYnNTdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICB0YWI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG4gIH0sXG4gIHRhYnNMYWJlbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZmxleEdyb3c6IDEsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgbWluV2lkdGg6ICc3MnB4JyxcbiAgICBwYWRkaW5nOiAnMCAyNHB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgdGFiQ29udGVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgfSxcbiAgdGFiQ29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZmxleFNocmluazogMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgYm90dG9tOiAwLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yRm9yU2VydmVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNDbGFzc2VzU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQodGFic1N0eWxlcywgJ2x5VGFicycpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBIb3N0TGlzdGVuZXIsXG4gIGZvcndhcmRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95LFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRhYnNDbGFzc2VzU2VydmljZSB9IGZyb20gJy4vdGFicy5jbGFzZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFicycsXG4gIHRlbXBsYXRlOiBgPGRpdiBbd2l0aENsYXNzXT1cImNsYXNzZXMudGFic0xhYmVsc1wiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxzcGFuICN0YWJzSW5kaWNhdG9yPjwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBbd2l0aENsYXNzXT1cImNsYXNzZXMudGFiQ29udGVudHNcIiAjdGFiQ29udGVudHM+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJ0YWJzTGlzdFwiIGxldC14PVwiaW5kZXhcIj5cbiAgICA8ZGl2IFt3aXRoQ2xhc3NdPVwiY2xhc3Nlcy50YWJDb250ZW50XCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVHJhbnNjbHVkZV09XCJsb2FkVGVtcGxhdGUoaXRlbSwgeClcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIF9zZWxlY3RlZEluZGV4ID0gMDtcbiAgX3NlbGVjdGVkQmVmb3JlSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkUmVxdWlyZUNoZWNrOiBib29sZWFuO1xuICBfc2VsZWN0ZWRUYWI6IEx5VGFiO1xuICBfc2VsZWN0ZWRCZWZvcmVUYWI6IEx5VGFiO1xuICBwcml2YXRlIF90YWJzU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pc1ZpZXdJbml0TG9hZGVkOiBib29sZWFuO1xuICBwcml2YXRlIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfd2l0aENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcmVhZG9ubHkgY2xhc3NlcztcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudHMnKSB0YWJDb250ZW50czogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFic0luZGljYXRvcicpIHRhYnNJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXhPbkNoYW5nZTogJ2F1dG8nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoKSBuYXRpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLndpdGhDb2xvcikge1xuICAgICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fd2l0aENvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgay10YWItd2l0aC1jb2xvcjoke3ZhbH1gLFxuICAgICAgICB0aGVtZSA9PiAoXG4gICAgICAgICAgYGNvbG9yOiR7dGhlbWUuY29sb3JPZih2YWwpfTtgXG4gICAgICAgICksXG4gICAgICAgIHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLl93aXRoQ29sb3JDbGFzcyk7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlSW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodmFsLCAnYXV0bycpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIgPSB0aGlzLl9zZWxlY3RlZFRhYjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkSW5kZXgpO1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRoaXMuX3NlbGVjdGVkVGFiLCB0aGlzLl9zZWxlY3RlZEJlZm9yZVRhYik7XG5cbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFJlcXVpcmVDaGVjaykge1xuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHt0aGlzLl9zZWxlY3RlZEluZGV4ICogLTEwMH0lLDAsMClgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXggYXMgbnVtYmVyO1xuICB9XG4gIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgd2l0aEJnOiBzdHJpbmc7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVRhYikpIHRhYnNMaXN0OiBRdWVyeUxpc3Q8THlUYWI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRhYnNTZXJ2aWNlOiBMeVRhYnNDbGFzc2VzU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgdGhpcy5jbGFzc2VzID0gdGFic1NlcnZpY2UuY2xhc3NlcztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgY29uc3QgdGFic0luZGljYXRvckVsID0gdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YWJzSW5kaWNhdG9yRWwsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgICAvKiogU2V0IGRlZmF1bHQgQ29sb3IgKi9cbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9ICdwcmltYXJ5JztcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5faXNWaWV3SW5pdExvYWRlZCA9IHRydWU7XG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24gPSB0aGlzLnRhYnNMaXN0LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4LCB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW5kZXgoc2VsZWN0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYnNMaXN0KSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkxhc3RUYWIgPSB0aGlzLnRhYnNMaXN0Lmxlbmd0aCAtIDE7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJyA/IGluZGV4IDogc2VsZWN0ZWRJbmRleDtcbiAgICByZXR1cm4gY3VycmVudEluZGV4IDwgMCA/IDAgOiBjdXJyZW50SW5kZXggPiBpbmRleE9mTGFzdFRhYiA/IGluZGV4T2ZMYXN0VGFiIDogY3VycmVudEluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSW5kaWNhdG9yKGN1cnJlbnRUYWI6IEx5VGFiLCBiZWZvcmVUYWI/OiBMeVRhYik6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgLy8gY3VycmVudFRhYiA9IHRoaXMudGFic0xpc3QuZmluZChfID0+IF8uaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XG4gICAgICBpZiAoIXRoaXMuX2lzVmlld0luaXRMb2FkZWQgfHwgIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAvKiogZm9yIGJlZm9yZSBpbml0aWFsaXplIG9yIGZvciBzZXJ2ZXIgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjdXJyZW50VGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY3VycmVudFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVE9ETzogdGFiczogdXBkYXRlIGluZGljYXRvciB3aGVuIGNoYW5nZSBgc2VsZWN0ZWRJbmRleGBcbiAgICAgICAgICovXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmb3IgYWZ0ZXIgaW5pdGlhbGl6ZSAmJiBmb3IgYnJvd3NlclxuICAgICAgICAvLyBDbGVhbiBiZWZvcmUgdGFiXG4gICAgICAgIGlmIChiZWZvcmVUYWIpIHtcbiAgICAgICAgICBiZWZvcmVUYWIuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShiZWZvcmVUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdjbGFzcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50VGFiLmluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAvLyB0aGlzIGZpeGVkIHVuZGVmaW5lZCBzZWxlY3RlZCB0YWJcbiAgICAgICAgICBjdXJyZW50VGFiID0gdGhpcy50YWJzTGlzdC50b0FycmF5KClbY3VycmVudEluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbCA9IGN1cnJlbnRUYWIuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHJlY3RzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3JlY3RzLndpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgYCR7ZWwub2Zmc2V0TGVmdH1weGApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbG9hZFRlbXBsYXRlKHRhYjogTHlUYWIsIGluZGV4OiBudW1iZXIpOiBUZW1wbGF0ZVJlZjxMeVRhYkNvbnRlbnQ+IHwgbnVsbCB7XG4gICAgaWYgKHRhYi5sb2FkZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0YWIuaW5kZXggPSBpbmRleDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIC8vIHNldCAwIGlmIGlzIG51bGxcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gdGFiO1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNWaWV3SW5pdExvYWRlZCAmJiB0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICAvKiogQXBwbHkgc3R5bGUgZm9yIHRhYkluZGljYXRvciBzZXJ2ZXIgKi9cbiAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0YWIpO1xuICAgIH1cbiAgICBpZiAodGFiLnRlbXBsYXRlUmVmTGF6eSkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgdGFiLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0YWIudGVtcGxhdGVSZWZMYXp5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYi5sb2FkZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRhYi50ZW1wbGF0ZVJlZjtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFiJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJseS10YWItbGFiZWxcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJbbHktdGFiLWxhYmVsXVwiPjwvbmctY29udGVudD5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltseS10YWItbGFiZWwtbmF0aXZlXVwiPjwvbmctY29udGVudD5cbjxzcGFuICN0YWJJbmRpY2F0b3I+PC9zcGFuPlxuPG5nLXRlbXBsYXRlPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbG9hZGVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2xhc3NlcztcbiAgQENvbnRlbnRDaGlsZChMeVRhYkNvbnRlbnQsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdGVtcGxhdGVSZWZMYXp5OiBUZW1wbGF0ZVJlZjxMeVRhYkNvbnRlbnQ+O1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndGFiSW5kaWNhdG9yJykgdGFiSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2soKSB7XG4gICAgdGhpcy50YWJzLl9zZWxlY3RlZFJlcXVpcmVDaGVjayA9ICF0aGlzLmxvYWRlZDtcbiAgICB0aGlzLnRhYnMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuaW5kZXg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhYnNTZXJ2aWNlOiBMeVRhYnNDbGFzc2VzU2VydmljZSxcbiAgICBwcml2YXRlIHRhYnM6IEx5VGFicyxcbiAgICBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLnRhYnNTZXJ2aWNlLmNsYXNzZXM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFiKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdGFiLWxhYmVsLCBbbHktdGFiLWxhYmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcmlwcGxlQ29udGFpbmVyOiBSaXBwbGU7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRhYnNTZXJ2aWNlOiBMeVRhYnNDbGFzc2VzU2VydmljZSxcbiAgICBwcml2YXRlIHJpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy50YWJzU2VydmljZS5jbGFzc2VzLmxhYmVsKTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSBuZXcgUmlwcGxlKHRoaXMuX25nWm9uZSwgdGhpcy5yaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBkZW1vIGJhc2ljXG4gKiA8bHktdGFicyB3aXRoQ29sb3I9XCJhY2NlbnRcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8bHktdGFiLWxhYmVsPkhPTUU8bHktdGFiLWxhYmVsPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8YnV0dG9uPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsLW5hdGl2ZSBseS1idXR0b24+SE9NRTxidXR0b24+XG4gKiAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydob21lJ11cIiBseS10YWItbGFiZWwgbmF0aXZlIGx5LWJ1dHRvbj5IT01FPGE+XG4gKiAgICAgQ29udGVudFxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKlxuICogZGVtbyBsYXp5IGxvYWRpbmdcbiAqIDxseS10YWJzIHdpdGhCZz1cInByaW1hcnlcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8bHktdGFiLWxhYmVsPkhPTUU8bHktdGFiLWxhYmVsPlxuICogICAgIDxuZy10ZW1wbGF0ZSBseS10YWItY29udGVudD48L25nLXRlbXBsYXRlPlxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKiA9PiB3aXRoQ29sb3I6IGNvbG9yIGRlbCBsYWJlbCBhY3RpdmEsIGRlZmF1bHQgcHJpbWFyeVxuICogPT4gd2l0aEJnOiBjb2xvciBkZSBmb25kbyBwYXJhIGxhIHRhYiwgZGVmYXVsdCBiYWNrZ3JvdW5kOnByaW1hcnlcbiAqID0+IG5hdGl2ZTogbm8gYXBsaWNhIGxvcyBlc3RpbG9zIHByZWRldGVybWluYWRvcywgZGVmYXVsdCB1bmRlZmluZWRcbiAqID0+IGRpc2FibGVkOiBEaXNhYmxlL2VuYWJsZSBhIHRhYiwgZGVmYXVsdCB1bmRlZmluZWRcbiAqID0+IGlzQWN0aXZlOiBTaSBsYSBwZXN0YcODwrFhIGVzdMODwqEgYWN0dWFsbWVudGUgYWN0aXZhLiwgZGVmYXVsdCB1bmRlZmluZWRcbiAqID0+IHNlbGVjdGVkSW5kZXhPbkNoYW5nZSwgZGVmYXVsdDogYXV0bywgb3B0czogbnVtYmVyLCB3aXRoIGF1dG8sIHRoZSBzZWxlY3RlZEluZGV4ID0gY3VycmVudCBvIGN1cnJlbnQtMSBvciBsYXRlc3RcbiAqL1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeVRoZW1lTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeVRhYnMsIEx5VGFiTGFiZWwsIEx5VGFiIH0gZnJvbSAnLi90YWJzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtMeVRoZW1lTW9kdWxlLCBDb21tb25Nb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeVJpcHBsZU1vZHVsZSwgTmdUcmFuc2NsdWRlTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5VGFicywgTHlUYWIsIEx5VGFiTGFiZWwsIEx5VGFiQ29udGVudF0sXG4gIGRlY2xhcmF0aW9uczogW0x5VGFicywgTHlUYWIsIEx5VGFiTGFiZWwsIEx5VGFiQ29udGVudF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzTW9kdWxlIHsgfVxuIiwiZXhwb3J0ICogZnJvbSAnLi90YWJzLm1vZHVsZSc7XG4vLyBleHBvcnQgKiBmcm9tICcuL3RhYnMnO1xuZXhwb3J0ICogZnJvbSAnLi90YWJzLmRpcmVjdGl2ZSc7XG4vLyBleHBvcnQgKiBmcm9tICcuL3RhYi1sYWJlbC5kaXJlY3RpdmUnO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztJQUlFLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7OztZQUZuRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUM7Ozs7WUFG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