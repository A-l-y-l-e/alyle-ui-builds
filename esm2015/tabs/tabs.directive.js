/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Directive, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, TemplateRef, ContentChild, ViewChild, HostListener, forwardRef, EventEmitter, ChangeDetectorRef, Renderer2, ElementRef, ViewEncapsulation } from '@angular/core';
import { LyTabContent } from './tab-content.directive';
import { LyTabsClassesService } from './tabs.clasess.service';
import { UndefinedValue, LyTheme2, Platform } from '@alyle/ui';
export class LyTabs {
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
function LyTabs_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyTabs.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyTabs.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyTabs.propDecorators;
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
    LyTabs.prototype._isViewInitLoaded;
    /** @type {?} */
    LyTabs.prototype._withColor;
    /** @type {?} */
    LyTabs.prototype._withColorClass;
    /** @type {?} */
    LyTabs.prototype.tabContents;
    /** @type {?} */
    LyTabs.prototype.tabsIndicator;
    /** @type {?} */
    LyTabs.prototype.selectedIndexChange;
    /** @type {?} */
    LyTabs.prototype.withBg;
    /** @type {?} */
    LyTabs.prototype.tabsList;
    /** @type {?} */
    LyTabs.prototype.classes;
    /** @type {?} */
    LyTabs.prototype.theme;
    /** @type {?} */
    LyTabs.prototype.renderer;
    /** @type {?} */
    LyTabs.prototype.el;
    /** @type {?} */
    LyTabs.prototype.cd;
}
export class LyTab {
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
function LyTab_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyTab.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyTab.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyTab.propDecorators;
    /** @type {?} */
    LyTab.prototype.index;
    /** @type {?} */
    LyTab.prototype.loaded;
    /** @type {?} */
    LyTab.prototype.templateRefLazy;
    /** @type {?} */
    LyTab.prototype.templateRef;
    /** @type {?} */
    LyTab.prototype.tabIndicator;
    /** @type {?} */
    LyTab.prototype.tabs;
    /** @type {?} */
    LyTab.prototype._renderer;
    /** @type {?} */
    LyTab.prototype._el;
}
export class LyTabLabel {
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
function LyTabLabel_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyTabLabel.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyTabLabel.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyTabLabel.propDecorators;
    /** @type {?} */
    LyTabLabel.prototype.native;
    /** @type {?} */
    LyTabLabel.prototype.renderer;
    /** @type {?} */
    LyTabLabel.prototype.el;
    /** @type {?} */
    LyTabLabel.prototype.classes;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGFicy8iLCJzb3VyY2VzIjpbInRhYnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLGVBQWUsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNOLFdBQVcsRUFDWCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBYSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBbUIxRSxNQUFNOzs7Ozs7OztJQThDSixZQUNTLFNBQ0MsT0FDQSxVQUNBLElBQ0E7UUFKRCxZQUFPLEdBQVAsT0FBTztRQUNOLFVBQUssR0FBTCxLQUFLO1FBQ0wsYUFBUSxHQUFSLFFBQVE7UUFDUixPQUFFLEdBQUYsRUFBRTtRQUNGLE9BQUUsR0FBRixFQUFFOzhCQWxEeUIsY0FBYzttQ0F5Q0EsSUFBSSxZQUFZLEVBQUU7S0FVaEU7Ozs7O1FBeENELFNBQVMsQ0FBQyxHQUFXO1FBQ3ZCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDMUIsdUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUks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Q0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEU7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2FBQ3pDOzs7O1lBN01DLFNBQVM7WUFDVCxVQUFVO1lBTUgsb0JBQW9COzs7dUJBd00xQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBIb3N0TGlzdGVuZXIsXG4gIGZvcndhcmRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5VGFic0NsYXNzZXNTZXJ2aWNlIH0gZnJvbSAnLi90YWJzLmNsYXNlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBVbmRlZmluZWRWYWx1ZSwgVW5kZWZpbmVkLCBMeVRoZW1lMiwgUGxhdGZvcm0gfSBmcm9tICdAYWx5bGUvdWknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWJzJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IFtjbGFzc05hbWVdPVwiY2xhc3Nlcy50YWJzTGFiZWxzXCI+XG4gIDxzcGFuICN0YWJzSW5kaWNhdG9yPjwvc3Bhbj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48ZGl2IFtjbGFzc05hbWVdPVwiY2xhc3Nlcy50YWJDb250ZW50c1wiICN0YWJDb250ZW50cz5cbiAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1pdGVtIFtuZ0Zvck9mXT1cInRhYnNMaXN0XCIgbGV0LXg9XCJpbmRleFwiPlxuICAgIDxkaXYgW2NsYXNzTmFtZV09XCJjbGFzc2VzLnRhYkNvbnRlbnRcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUcmFuc2NsdWRlXT1cImxvYWRUZW1wbGF0ZShpdGVtLCB4KVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L2Rpdj5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgZXhwb3J0QXM6ICdseVRhYnMnXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFicyBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgfCBVbmRlZmluZWQgPSBVbmRlZmluZWRWYWx1ZTtcbiAgX3NlbGVjdGVkQmVmb3JlSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkUmVxdWlyZUNoZWNrOiBib29sZWFuO1xuICBfc2VsZWN0ZWRUYWI6IEx5VGFiO1xuICBfc2VsZWN0ZWRCZWZvcmVUYWI6IEx5VGFiO1xuICBwcml2YXRlIF9pc1ZpZXdJbml0TG9hZGVkOiBib29sZWFuO1xuICBwcml2YXRlIF93aXRoQ29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfd2l0aENvbG9yQ2xhc3M6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudHMnKSB0YWJDb250ZW50czogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFic0luZGljYXRvcicpIHRhYnNJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLndpdGhDb2xvcikge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVXaXRoQ29sb3JDbGFzcyh2YWwpO1xuICAgICAgdGhpcy5fd2l0aENvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fd2l0aENvbG9yQ2xhc3MpO1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkVGFiKSB7XG4gICAgICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fc2VsZWN0ZWRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl93aXRoQ29sb3JDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCB3aXRoQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDb2xvcjtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWw6IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVJbmRleCA9IHRoaXMuX3NlbGVjdGVkSW5kZXggYXMgbnVtYmVyO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbDtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlVGFiID0gdGhpcy5fc2VsZWN0ZWRUYWI7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdCh2YWwpO1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRoaXMuX3NlbGVjdGVkVGFiLCB0aGlzLl9zZWxlY3RlZEJlZm9yZVRhYik7XG5cbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFJlcXVpcmVDaGVjaykge1xuICAgICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHt2YWwgKiAtMTAwfSUsMCwwKWApO1xuICAgIH1cbiAgfVxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleCBhcyBudW1iZXI7XG4gIH1cbiAgQE91dHB1dCgpIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB3aXRoQmc6IHN0cmluZztcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5VGFiKSkgdGFic0xpc3Q6IFF1ZXJ5TGlzdDxMeVRhYj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNsYXNzZXM6IEx5VGFic0NsYXNzZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWJzKTtcbiAgICBjb25zdCB0YWJzSW5kaWNhdG9yRWwgPSB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRhYnNJbmRpY2F0b3JFbCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3IpO1xuICAgIC8qKiBTZXQgZGVmYXVsdCBDb2xvciAqL1xuICAgIGlmICghdGhpcy53aXRoQ29sb3IpIHtcbiAgICAgIHRoaXMud2l0aENvbG9yID0gJ3ByaW1hcnknO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9pc1ZpZXdJbml0TG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUluZGljYXRvcihjdXJyZW50VGFiOiBMeVRhYiwgYmVmb3JlVGFiPzogTHlUYWIpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgaWYgKGN1cnJlbnRUYWIpIHtcbiAgICAgIC8vIGN1cnJlbnRUYWIgPSB0aGlzLnRhYnNMaXN0LmZpbmQoXyA9PiBfLmluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuICAgICAgaWYgKCF0aGlzLl9pc1ZpZXdJbml0TG9hZGVkIHx8ICFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgLyoqIGZvciBiZWZvcmUgaW5pdGlhbGl6ZSBvciBmb3Igc2VydmVyICovXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY3VycmVudFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGN1cnJlbnRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3dpdGhDb2xvckNsYXNzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRPRE86IHRhYnM6IHVwZGF0ZSBpbmRpY2F0b3Igd2hlbiBjaGFuZ2UgYHNlbGVjdGVkSW5kZXhgXG4gICAgICAgICAqL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZm9yIGFmdGVyIGluaXRpYWxpemUgJiYgZm9yIGJyb3dzZXJcbiAgICAgICAgLy8gQ2xlYW4gYmVmb3JlIHRhYlxuICAgICAgICBpZiAoYmVmb3JlVGFiKSB7XG4gICAgICAgICAgYmVmb3JlVGFiLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoYmVmb3JlVGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCAnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFRhYi5pbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgLy8gdGhpcyBmaXhlZCB1bmRlZmluZWQgc2VsZWN0ZWQgdGFiXG4gICAgICAgICAgY3VycmVudFRhYiA9IHRoaXMudGFic0xpc3QudG9BcnJheSgpW2N1cnJlbnRJbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWwgPSBjdXJyZW50VGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCByZWN0cyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHtyZWN0cy53aWR0aH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIGAke2VsLm9mZnNldExlZnR9cHhgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGxvYWRUZW1wbGF0ZSh0YWI6IEx5VGFiLCBpbmRleDogbnVtYmVyKTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PiB8IG51bGwge1xuICAgIGlmICh0YWIubG9hZGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGFiLmluZGV4ID0gaW5kZXg7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gVW5kZWZpbmVkVmFsdWUpIHtcbiAgICAgIC8vIHNldCAwIGlmIGlzIG51bGxcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gdGFiO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1ZpZXdJbml0TG9hZGVkICYmIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgIC8qKiBBcHBseSBzdHlsZSBmb3IgdGFiSW5kaWNhdG9yIHNlcnZlciAqL1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgfVxuICAgIGlmICh0YWIudGVtcGxhdGVSZWZMYXp5KSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSBpbmRleCkge1xuICAgICAgICB0YWIubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRhYi50ZW1wbGF0ZVJlZkxhenk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFiLmxvYWRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdGFiLnRlbXBsYXRlUmVmO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVdpdGhDb2xvckNsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fd2l0aENvbG9yID0gdmFsO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLnNldFVwU3R5bGUoXG4gICAgICBgay10YWItd2l0aC1jb2xvcjoke3ZhbH1gLFxuICAgICAgKCkgPT4gKFxuICAgICAgICBgY29sb3I6JHt0aGlzLnRoZW1lLmNvbG9yT2YodmFsKX07YFxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFiJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9XCJseS10YWItbGFiZWxcIj48L25nLWNvbnRlbnQ+XG48bmctY29udGVudCBzZWxlY3Q9XCJbbHktdGFiLWxhYmVsXVwiPjwvbmctY29udGVudD5cbjxzcGFuICN0YWJJbmRpY2F0b3I+PC9zcGFuPlxuPG5nLXRlbXBsYXRlPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbG9hZGVkOiBib29sZWFuO1xuICBAQ29udGVudENoaWxkKEx5VGFiQ29udGVudCwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0ZW1wbGF0ZVJlZkxhenk6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD47XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0YWJJbmRpY2F0b3InKSB0YWJJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGljaygpIHtcbiAgICB0aGlzLnRhYnMuX3NlbGVjdGVkUmVxdWlyZUNoZWNrID0gIXRoaXMubG9hZGVkO1xuICAgIHRoaXMudGFicy5zZWxlY3RlZEluZGV4ID0gdGhpcy5pbmRleDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFiczogTHlUYWJzLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMudGFicy5jbGFzc2VzLnRhYik7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy50YWJzLmNsYXNzZXMudGFic0luZGljYXRvcik7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdGFiLWxhYmVsLCBbbHktdGFiLWxhYmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG5hdGl2ZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNsYXNzZXM6IEx5VGFic0NsYXNzZXNTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWJMYWJlbCk7XG4gIH1cbn1cbi8qKlxuICogZGVtbyBiYXNpY1xuICogPGx5LXRhYnMgd2l0aENvbG9yPVwiYWNjZW50XCI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGx5LXRhYi1sYWJlbD5IT01FPGx5LXRhYi1sYWJlbD5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbD5IT01FPGJ1dHRvbj5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbCBuYXRpdmUgbHktYnV0dG9uPkhPTUU8YnV0dG9uPlxuICogICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnaG9tZSddXCIgbHktdGFiLWxhYmVsIG5hdGl2ZSBseS1idXR0b24+SE9NRTxhPlxuICogICAgIENvbnRlbnRcbiAqICAgPC9seS10YWI+XG4gKiAgIC4uLlxuICogPC9seS10YWJzPlxuICpcbiAqIGRlbW8gbGF6eSBsb2FkaW5nXG4gKiA8bHktdGFicyB3aXRoQmc9XCJwcmltYXJ5XCI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGx5LXRhYi1sYWJlbD5IT01FPGx5LXRhYi1sYWJlbD5cbiAqICAgICA8bmctdGVtcGxhdGUgbHktdGFiLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbiAqICAgPC9seS10YWI+XG4gKiAgIC4uLlxuICogPC9seS10YWJzPlxuICogPT4gd2l0aENvbG9yOiBjb2xvciBkZWwgbGFiZWwgYWN0aXZhLCBkZWZhdWx0IHByaW1hcnlcbiAqID0+IHdpdGhCZzogY29sb3IgZGUgZm9uZG8gcGFyYSBsYSB0YWIsIGRlZmF1bHQgYmFja2dyb3VuZDpwcmltYXJ5XG4gKiA9PiBuYXRpdmU6IG5vIGFwbGljYSBsb3MgZXN0aWxvcyBwcmVkZXRlcm1pbmFkb3MsIGRlZmF1bHQgdW5kZWZpbmVkXG4gKiA9PiBkaXNhYmxlZDogRGlzYWJsZS9lbmFibGUgYSB0YWIsIGRlZmF1bHQgdW5kZWZpbmVkXG4gKiA9PiBpc0FjdGl2ZTogU2kgbGEgcGVzdGHDsWEgZXN0w6EgYWN0dWFsbWVudGUgYWN0aXZhLiwgZGVmYXVsdCB1bmRlZmluZWRcbiAqL1xuIl19