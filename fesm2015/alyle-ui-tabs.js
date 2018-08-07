import { Directive, TemplateRef, Injectable, NgModule, Component, Input, ChangeDetectionStrategy, ContentChildren, Output, ContentChild, ViewChild, HostListener, forwardRef, EventEmitter, ChangeDetectorRef, Renderer2, ElementRef, ViewEncapsulation, defineInjectable, inject } from '@angular/core';
import { LyTheme2, NgTranscludeModule, UndefinedValue, Platform } from '@alyle/ui';
import { CommonModule } from '@angular/common';
import { LyRippleModule } from '@alyle/ui/ripple';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    { type: TemplateRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyTabsClassesService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.tabs = this.theme.setUpStyle('k-tabs', () => (`display:block;` +
            `overflow:hidden;`));
        this.tabsLabels = this.theme.setUpStyle('k-tab-labels', () => (`display: flex;` +
            `position: relative;` +
            `flex-grow: 1;` +
            `overflow: hidden;`));
        this.tab = this.theme.setUpStyle('k-tab', () => (`position: relative;` +
            `display: inline-flex;`));
        this.tabLabel = this.theme.setUpStyle('k-tab-label', () => (`min-width: 72px;` +
            `padding: 0 24px;` +
            `cursor: pointer;` +
            `height: 48px;` +
            `display: inline-flex;` +
            `justify-content: center;` +
            `align-items: center;`));
        this.tabContents = this.theme.setUpStyle('k-tab-contents', () => (`display: flex;` +
            `transition: 450ms cubic-bezier(.1, 1, 0.5, 1);` +
            `will-change: transform;`));
        this.tabContent = this.theme.setUpStyle('k-tab-content', () => (`width: 100%;` +
            `flex-shrink: 0;` +
            `position: relative;`));
        this.tabsIndicator = this.theme.setUpStyle('k-tabs-indicator', () => (`position: absolute;` +
            `transition: 450ms cubic-bezier(.1, 1, 0.5, 1);` +
            `bottom: 0;` +
            `height: 2px;` +
            `left: 0;` +
            `background: currentColor;`));
        this.tabsIndicatorForServer = this.theme.setUpStyle('k-tabs-indicator-server', () => (`width: 100%;`));
    }
}
LyTabsClassesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyTabsClassesService.ctorParameters = () => [
    { type: LyTheme2, },
];
/** @nocollapse */ LyTabsClassesService.ngInjectableDef = defineInjectable({ factory: function LyTabsClassesService_Factory() { return new LyTabsClassesService(inject(LyTheme2)); }, token: LyTabsClassesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyTabs {
    /**
     * @param {?} classes
     * @param {?} theme
     * @param {?} renderer
     * @param {?} el
     * @param {?} cd
     */
    constructor(classes, theme, renderer, el, cd) {
        this.classes = classes;
        this.theme = theme;
        this.renderer = renderer;
        this.el = el;
        this.cd = cd;
        this._selectedIndex = UndefinedValue;
        this.selectedIndexChange = new EventEmitter();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set withColor(val) {
        if (val !== this.withColor) {
            const /** @type {?} */ newClass = this._createWithColorClass(val);
            this._withColorClass = this.theme.updateClass(this.tabsIndicator.nativeElement, this.renderer, newClass, this._withColorClass);
            if (this._selectedTab) {
                this.theme.updateClass(this._selectedTab.tabIndicator.nativeElement, this.renderer, newClass, this._withColorClass);
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
            this._selectedIndex = val;
            this._selectedBeforeTab = this._selectedTab;
            this.selectedIndexChange.emit(val);
            this._updateIndicator(this._selectedTab, this._selectedBeforeTab);
            if (this._selectedRequireCheck) {
                this.markForCheck();
            }
            this.renderer.setStyle(this.tabContents.nativeElement, 'transform', `translate3d(${val * -100}%,0,0)`);
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
        this.renderer.addClass(this.el.nativeElement, this.classes.tabs);
        const /** @type {?} */ tabsIndicatorEl = this.tabsIndicator.nativeElement;
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
     * @param {?} currentTab
     * @param {?=} beforeTab
     * @return {?}
     */
    _updateIndicator(currentTab, beforeTab) {
        const /** @type {?} */ currentIndex = this.selectedIndex;
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
                const /** @type {?} */ el = /** @type {?} */ (currentTab._el.nativeElement);
                const /** @type {?} */ rects = el.getBoundingClientRect();
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
        if (this.selectedIndex === UndefinedValue) {
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
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _createWithColorClass(val) {
        this._withColor = val;
        return this.theme.setUpStyle(`k-tab-with-color:${val}`, () => (`color:${this.theme.colorOf(val)};`));
    }
}
LyTabs.decorators = [
    { type: Component, args: [{
                selector: 'ly-tabs',
                template: `<div [className]="classes.tabsLabels">
  <span #tabsIndicator></span>
  <ng-content></ng-content>
</div>
<div [className]="classes.tabContents" #tabContents>
  <ng-template ngFor let-item [ngForOf]="tabsList" let-x="index">
    <div [className]="classes.tabContent">
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
    { type: LyTabsClassesService, },
    { type: LyTheme2, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
];
LyTabs.propDecorators = {
    "tabContents": [{ type: ViewChild, args: ['tabContents',] },],
    "tabsIndicator": [{ type: ViewChild, args: ['tabsIndicator',] },],
    "withColor": [{ type: Input },],
    "selectedIndex": [{ type: Input },],
    "selectedIndexChange": [{ type: Output },],
    "withBg": [{ type: Input },],
    "tabsList": [{ type: ContentChildren, args: [forwardRef(() => LyTab),] },],
};
class LyTab {
    /**
     * @param {?} tabs
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(tabs, _renderer, _el) {
        this.tabs = tabs;
        this._renderer = _renderer;
        this._el = _el;
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
        this._renderer.addClass(this._el.nativeElement, this.tabs.classes.tab);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._renderer.addClass(this.tabIndicator.nativeElement, this.tabs.classes.tabsIndicator);
    }
}
LyTab.decorators = [
    { type: Component, args: [{
                selector: 'ly-tab',
                template: `<ng-content select="ly-tab-label"></ng-content>
<ng-content select="[ly-tab-label]"></ng-content>
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
    { type: LyTabs, },
    { type: Renderer2, },
    { type: ElementRef, },
];
LyTab.propDecorators = {
    "templateRefLazy": [{ type: ContentChild, args: [LyTabContent, { read: TemplateRef },] },],
    "templateRef": [{ type: ViewChild, args: [TemplateRef,] },],
    "tabIndicator": [{ type: ViewChild, args: ['tabIndicator',] },],
    "onClick": [{ type: HostListener, args: ['click',] },],
};
class LyTabLabel {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} classes
     */
    constructor(renderer, el, classes) {
        this.renderer = renderer;
        this.el = el;
        this.classes = classes;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.classes.tabLabel);
    }
}
LyTabLabel.decorators = [
    { type: Directive, args: [{
                selector: 'ly-tab-label, [ly-tab-label]'
            },] },
];
/** @nocollapse */
LyTabLabel.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: LyTabsClassesService, },
];
LyTabLabel.propDecorators = {
    "native": [{ type: Input },],
};
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
class LyTabsModule {
}
LyTabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LyRippleModule, NgTranscludeModule],
                exports: [LyTabs, LyTab, LyTabLabel, LyTabContent],
                declarations: [LyTabs, LyTab, LyTabLabel, LyTabContent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// export * from './tab-label.directive';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyTabsModule, LyTabs, LyTab, LyTabLabel, LyTabContent as ɵa, LyTabsClassesService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFiLWNvbnRlbnQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLmNsYXNlc3Muc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFicy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy9wdWJsaWNfYXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2x5LXRhYi1jb250ZW50XSd9KVxuZXhwb3J0IGNsYXNzIEx5VGFiQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFic0NsYXNzZXNTZXJ2aWNlIHtcbiAgdGFicyA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWJzJyxcbiAgICAoKSA9PiAoXG4gICAgICBgZGlzcGxheTpibG9jaztgICtcbiAgICAgIGBvdmVyZmxvdzpoaWRkZW47YFxuICAgIClcbiAgKTtcbiAgdGFic0xhYmVscyA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWItbGFiZWxzJyxcbiAgICAoKSA9PiAoXG4gICAgICBgZGlzcGxheTogZmxleDtgICtcbiAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YCArXG4gICAgICBgZmxleC1ncm93OiAxO2AgK1xuICAgICAgYG92ZXJmbG93OiBoaWRkZW47YFxuICAgIClcbiAgKTtcbiAgdGFiID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICdrLXRhYicsXG4gICAgKCkgPT4gKFxuICAgICAgYHBvc2l0aW9uOiByZWxhdGl2ZTtgICtcbiAgICAgIGBkaXNwbGF5OiBpbmxpbmUtZmxleDtgXG4gICAgKVxuICApO1xuICB0YWJMYWJlbCA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWItbGFiZWwnLFxuICAgICgpID0+IChcbiAgICAgIGBtaW4td2lkdGg6IDcycHg7YCArXG4gICAgICBgcGFkZGluZzogMCAyNHB4O2AgK1xuICAgICAgYGN1cnNvcjogcG9pbnRlcjtgICtcbiAgICAgIGBoZWlnaHQ6IDQ4cHg7YCArXG4gICAgICBgZGlzcGxheTogaW5saW5lLWZsZXg7YCArXG4gICAgICBganVzdGlmeS1jb250ZW50OiBjZW50ZXI7YCArXG4gICAgICBgYWxpZ24taXRlbXM6IGNlbnRlcjtgXG4gICAgKVxuICApO1xuICB0YWJDb250ZW50cyA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWItY29udGVudHMnLFxuICAgICgpID0+IChcbiAgICAgIGBkaXNwbGF5OiBmbGV4O2AgK1xuICAgICAgYHRyYW5zaXRpb246IDQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgIGB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO2BcbiAgICApXG4gICk7XG4gIHRhYkNvbnRlbnQgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgJ2stdGFiLWNvbnRlbnQnLFxuICAgICgpID0+IChcbiAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgIGBmbGV4LXNocmluazogMDtgICtcbiAgICAgIGBwb3NpdGlvbjogcmVsYXRpdmU7YFxuICAgIClcbiAgKTtcbiAgdGFic0luZGljYXRvciA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShcbiAgICAnay10YWJzLWluZGljYXRvcicsXG4gICAgKCkgPT4gKFxuICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgIGB0cmFuc2l0aW9uOiA0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gICAgICBgYm90dG9tOiAwO2AgK1xuICAgICAgYGhlaWdodDogMnB4O2AgK1xuICAgICAgYGxlZnQ6IDA7YCArXG4gICAgICBgYmFja2dyb3VuZDogY3VycmVudENvbG9yO2BcbiAgICApXG4gICk7XG4gIHRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgJ2stdGFicy1pbmRpY2F0b3Itc2VydmVyJyxcbiAgICAoKSA9PiAoXG4gICAgICBgd2lkdGg6IDEwMCU7YFxuICAgIClcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgSG9zdExpc3RlbmVyLFxuICBmb3J3YXJkUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRhYnNDbGFzc2VzU2VydmljZSB9IGZyb20gJy4vdGFicy5jbGFzZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVW5kZWZpbmVkVmFsdWUsIFVuZGVmaW5lZCwgTHlUaGVtZTIsIFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFicycsXG4gIHRlbXBsYXRlOiBgPGRpdiBbY2xhc3NOYW1lXT1cImNsYXNzZXMudGFic0xhYmVsc1wiPlxuICA8c3BhbiAjdGFic0luZGljYXRvcj48L3NwYW4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuPGRpdiBbY2xhc3NOYW1lXT1cImNsYXNzZXMudGFiQ29udGVudHNcIiAjdGFiQ29udGVudHM+XG4gIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJ0YWJzTGlzdFwiIGxldC14PVwiaW5kZXhcIj5cbiAgICA8ZGl2IFtjbGFzc05hbWVdPVwiY2xhc3Nlcy50YWJDb250ZW50XCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVHJhbnNjbHVkZV09XCJsb2FkVGVtcGxhdGUoaXRlbSwgeClcIj48L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBfc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgVW5kZWZpbmVkID0gVW5kZWZpbmVkVmFsdWU7XG4gIF9zZWxlY3RlZEJlZm9yZUluZGV4OiBudW1iZXI7XG4gIF9zZWxlY3RlZFJlcXVpcmVDaGVjazogYm9vbGVhbjtcbiAgX3NlbGVjdGVkVGFiOiBMeVRhYjtcbiAgX3NlbGVjdGVkQmVmb3JlVGFiOiBMeVRhYjtcbiAgcHJpdmF0ZSBfaXNWaWV3SW5pdExvYWRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfd2l0aENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX3dpdGhDb2xvckNsYXNzOiBzdHJpbmc7XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnRzJykgdGFiQ29udGVudHM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYnNJbmRpY2F0b3InKSB0YWJzSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKVxuICBzZXQgd2l0aENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlV2l0aENvbG9yQ2xhc3ModmFsKTtcbiAgICAgIHRoaXMuX3dpdGhDb2xvckNsYXNzID0gdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX3dpdGhDb2xvckNsYXNzKTtcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFRhYikge1xuICAgICAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuX3NlbGVjdGVkVGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgd2l0aENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl93aXRoQ29sb3I7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlSW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWw7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZVRhYiA9IHRoaXMuX3NlbGVjdGVkVGFiO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQodmFsKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0aGlzLl9zZWxlY3RlZFRhYiwgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIpO1xuXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRSZXF1aXJlQ2hlY2spIHtcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJDb250ZW50cy5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7dmFsICogLTEwMH0lLDAsMClgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXggYXMgbnVtYmVyO1xuICB9XG4gIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgd2l0aEJnOiBzdHJpbmc7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVRhYikpIHRhYnNMaXN0OiBRdWVyeUxpc3Q8THlUYWI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjbGFzc2VzOiBMeVRhYnNDbGFzc2VzU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFicyk7XG4gICAgY29uc3QgdGFic0luZGljYXRvckVsID0gdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YWJzSW5kaWNhdG9yRWwsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgICAvKiogU2V0IGRlZmF1bHQgQ29sb3IgKi9cbiAgICBpZiAoIXRoaXMud2l0aENvbG9yKSB7XG4gICAgICB0aGlzLndpdGhDb2xvciA9ICdwcmltYXJ5JztcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5faXNWaWV3SW5pdExvYWRlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVJbmRpY2F0b3IoY3VycmVudFRhYjogTHlUYWIsIGJlZm9yZVRhYj86IEx5VGFiKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChjdXJyZW50VGFiKSB7XG4gICAgICAvLyBjdXJyZW50VGFiID0gdGhpcy50YWJzTGlzdC5maW5kKF8gPT4gXy5pbmRleCA9PT0gY3VycmVudEluZGV4KTtcbiAgICAgIGlmICghdGhpcy5faXNWaWV3SW5pdExvYWRlZCB8fCAhUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAgIC8qKiBmb3IgYmVmb3JlIGluaXRpYWxpemUgb3IgZm9yIHNlcnZlciAqL1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGN1cnJlbnRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjdXJyZW50VGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLl93aXRoQ29sb3JDbGFzcyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUT0RPOiB0YWJzOiB1cGRhdGUgaW5kaWNhdG9yIHdoZW4gY2hhbmdlIGBzZWxlY3RlZEluZGV4YFxuICAgICAgICAgKi9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGZvciBhZnRlciBpbml0aWFsaXplICYmIGZvciBicm93c2VyXG4gICAgICAgIC8vIENsZWFuIGJlZm9yZSB0YWJcbiAgICAgICAgaWYgKGJlZm9yZVRhYikge1xuICAgICAgICAgIGJlZm9yZVRhYi5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGJlZm9yZVRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRUYWIuaW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgIC8vIHRoaXMgZml4ZWQgdW5kZWZpbmVkIHNlbGVjdGVkIHRhYlxuICAgICAgICAgIGN1cnJlbnRUYWIgPSB0aGlzLnRhYnNMaXN0LnRvQXJyYXkoKVtjdXJyZW50SW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsID0gY3VycmVudFRhYi5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgcmVjdHMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7cmVjdHMud2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBgJHtlbC5vZmZzZXRMZWZ0fXB4YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBsb2FkVGVtcGxhdGUodGFiOiBMeVRhYiwgaW5kZXg6IG51bWJlcik6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD4gfCBudWxsIHtcbiAgICBpZiAodGFiLmxvYWRlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRhYi5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IFVuZGVmaW5lZFZhbHVlKSB7XG4gICAgICAvLyBzZXQgMCBpZiBpcyBudWxsXG4gICAgICB0aGlzLl9zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNWaWV3SW5pdExvYWRlZCAmJiB0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICAvKiogQXBwbHkgc3R5bGUgZm9yIHRhYkluZGljYXRvciBzZXJ2ZXIgKi9cbiAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0YWIpO1xuICAgIH1cbiAgICBpZiAodGFiLnRlbXBsYXRlUmVmTGF6eSkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgdGFiLmxvYWRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiB0YWIudGVtcGxhdGVSZWZMYXp5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYi5sb2FkZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRhYi50ZW1wbGF0ZVJlZjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVXaXRoQ29sb3JDbGFzcyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3dpdGhDb2xvciA9IHZhbDtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5zZXRVcFN0eWxlKFxuICAgICAgYGstdGFiLXdpdGgtY29sb3I6JHt2YWx9YCxcbiAgICAgICgpID0+IChcbiAgICAgICAgYGNvbG9yOiR7dGhpcy50aGVtZS5jb2xvck9mKHZhbCl9O2BcbiAgICAgIClcbiAgICApO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwibHktdGFiLWxhYmVsXCI+PC9uZy1jb250ZW50PlxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2x5LXRhYi1sYWJlbF1cIj48L25nLWNvbnRlbnQ+XG48c3BhbiAjdGFiSW5kaWNhdG9yPjwvc3Bhbj5cbjxuZy10ZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIGluZGV4OiBudW1iZXI7XG4gIGxvYWRlZDogYm9vbGVhbjtcbiAgQENvbnRlbnRDaGlsZChMeVRhYkNvbnRlbnQsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdGVtcGxhdGVSZWZMYXp5OiBUZW1wbGF0ZVJlZjxMeVRhYkNvbnRlbnQ+O1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndGFiSW5kaWNhdG9yJykgdGFiSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2soKSB7XG4gICAgdGhpcy50YWJzLl9zZWxlY3RlZFJlcXVpcmVDaGVjayA9ICF0aGlzLmxvYWRlZDtcbiAgICB0aGlzLnRhYnMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuaW5kZXg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhYnM6IEx5VGFicyxcbiAgICBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIF9lbDogRWxlbWVudFJlZixcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnRhYnMuY2xhc3Nlcy50YWIpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMudGFicy5jbGFzc2VzLnRhYnNJbmRpY2F0b3IpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRhYi1sYWJlbCwgW2x5LXRhYi1sYWJlbF0nXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiTGFiZWwgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBuYXRpdmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBMeVRhYnNDbGFzc2VzU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFiTGFiZWwpO1xuICB9XG59XG4vKipcbiAqIGRlbW8gYmFzaWNcbiAqIDxseS10YWJzIHdpdGhDb2xvcj1cImFjY2VudFwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxseS10YWItbGFiZWw+SE9NRTxseS10YWItbGFiZWw+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWw+SE9NRTxidXR0b24+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWwgbmF0aXZlIGx5LWJ1dHRvbj5IT01FPGJ1dHRvbj5cbiAqICAgICA8YSBbcm91dGVyTGlua109XCJbJ2hvbWUnXVwiIGx5LXRhYi1sYWJlbCBuYXRpdmUgbHktYnV0dG9uPkhPTUU8YT5cbiAqICAgICBDb250ZW50XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqXG4gKiBkZW1vIGxhenkgbG9hZGluZ1xuICogPGx5LXRhYnMgd2l0aEJnPVwicHJpbWFyeVwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxseS10YWItbGFiZWw+SE9NRTxseS10YWItbGFiZWw+XG4gKiAgICAgPG5nLXRlbXBsYXRlIGx5LXRhYi1jb250ZW50PjwvbmctdGVtcGxhdGU+XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqID0+IHdpdGhDb2xvcjogY29sb3IgZGVsIGxhYmVsIGFjdGl2YSwgZGVmYXVsdCBwcmltYXJ5XG4gKiA9PiB3aXRoQmc6IGNvbG9yIGRlIGZvbmRvIHBhcmEgbGEgdGFiLCBkZWZhdWx0IGJhY2tncm91bmQ6cHJpbWFyeVxuICogPT4gbmF0aXZlOiBubyBhcGxpY2EgbG9zIGVzdGlsb3MgcHJlZGV0ZXJtaW5hZG9zLCBkZWZhdWx0IHVuZGVmaW5lZFxuICogPT4gZGlzYWJsZWQ6IERpc2FibGUvZW5hYmxlIGEgdGFiLCBkZWZhdWx0IHVuZGVmaW5lZFxuICogPT4gaXNBY3RpdmU6IFNpIGxhIHBlc3Rhw4PCsWEgZXN0w4PCoSBhY3R1YWxtZW50ZSBhY3RpdmEuLCBkZWZhdWx0IHVuZGVmaW5lZFxuICovXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nVHJhbnNjbHVkZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuLy8gaW1wb3J0IHsgTHlIZWFkZXJQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL2hlYWRlci1wYWdpbmF0aW9uJztcbmltcG9ydCB7IEx5VGFicywgTHlUYWJMYWJlbCwgTHlUYWIgfSBmcm9tICcuL3RhYnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGUsIE5nVHJhbnNjbHVkZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeVRhYnMsIEx5VGFiLCBMeVRhYkxhYmVsLCBMeVRhYkNvbnRlbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVRhYnMsIEx5VGFiLCBMeVRhYkxhYmVsLCBMeVRhYkNvbnRlbnRdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFic01vZHVsZSB7IH1cbiIsImV4cG9ydCAqIGZyb20gJy4vdGFicy5tb2R1bGUnO1xuLy8gZXhwb3J0ICogZnJvbSAnLi90YWJzJztcbmV4cG9ydCAqIGZyb20gJy4vdGFicy5kaXJlY3RpdmUnO1xuLy8gZXhwb3J0ICogZnJvbSAnLi90YWItbGFiZWwuZGlyZWN0aXZlJztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztJQUlFLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7OztZQUZuRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUM7Ozs7WUFGdEIsV0FBVzs7Ozs7OztBQ0E5Qjs7OztJQTJFRSxZQUNVO1FBQUEsVUFBSyxHQUFMLEtBQUs7b0JBckVSLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUMxQixRQUFRLEVBQ1IsT0FDRSxnQkFBZ0I7WUFDaEIsa0JBQWtCLENBQ25CLENBQ0Y7MEJBQ1ksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ2hDLGNBQWMsRUFDZCxPQUNFLGdCQUFnQjtZQUNoQixxQkFBcUI7WUFDckIsZUFBZTtZQUNmLG1CQUFtQixDQUNwQixDQUNGO21CQUNLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUN6QixP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