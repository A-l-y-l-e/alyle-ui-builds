import * as tslib_1 from "tslib";
import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, OnChanges, OnDestroy, OnInit, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, Optional } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, Platform, ThemeVariables, AlignAlias, YPosition, XPosition, Dir, LyRippleService, LyFocusState, WinResize, scrollWithAnimation, toBoolean, LyHostClass, st2c, LY_COMMON_STYLES, ThemeRef, StyleCollection, LyClasses, StyleTemplate } from '@alyle/ui';
import { LyButton } from '@alyle/ui/button';
import { LyTabContent } from './tab-content.directive';
import { Subscription } from 'rxjs';
const DEFAULT_DISABLE_RIPPLE = false;
const STYLE_PRIORITY = -2;
const DEFAULT_BG = 'primary';
const DEFAULT_INDICATOR_COLOR = 'accent';
const DEFAULT_ELEVATION = 4;
const DEFAULT_HEADER_PLACEMENT = 'above';
export const STYLES = (theme, ref) => {
    const __ = ref.selectorsOf(STYLES);
    return {
        $name: LyTabs.и,
        $priority: STYLE_PRIORITY,
        root: () => (className) => `${className}{display:block;}${st2c(((theme.tab
            && theme.tab.root
            && (theme.tab.root instanceof StyleCollection
                ? theme.tab.root.setTransformer(fn => fn(__)).css
                : theme.tab.root(__)))), `${className}`)}`,
        container: (className) => `${className}{display:flex;}`,
        tab: (className) => `${className}{position:relative;display:inline-flex;}`,
        /** Tab content */
        contentContainer: (className) => `${className}{overflow:hidden;flex-grow:1;}`,
        /** Tab header */
        tabsLabels: (className) => `${className}{display:flex;position:relative;}`,
        tabsLabelsContainer: () => (className) => `${className}{overflow:hidden;}@media (hover: none){${__.scrollable} ${className}{overflow:auto;}}`,
        label: (className) => `${className}{-webkit-tap-highlight-color:transparent;-webkit-appearance:none;background-color:transparent;user-select:none;border:0;min-width:72px;padding:0 24px;cursor:pointer;height:48px;display:inline-flex;justify-content:center;align-items:center;position:relative;overflow:hidden;font-family:${theme.typography.fontFamily};font-size:${theme.pxToRem(theme.typography.fontSize)};letter-spacing:0.02857em;color:currentColor;outline:none;width:100%;font-weight:500;opacity:.7;}${className} ${theme.getBreakpoint('XSmall')}{padding:0 12px;}`,
        tabLabelActive: (className) => `${className}{opacity:1;}`,
        tabContents: (className) => `${className}{display:flex;transition:450ms cubic-bezier(.1, 1, 0.5, 1);will-change:transform;height:100%;}`,
        tabContent: (className) => `${className}{width:100%;height:100%;flex-shrink:0;position:relative;}`,
        tabsIndicator: (className) => `${className}{position:absolute;height:2px;transition:450ms cubic-bezier(.1, 1, 0.5, 1);background:currentColor;}`,
        tabsIndicatorForServer: (className) => `${className}{position:absolute;background:currentColor;}`,
        rippleContainer: (className) => `${st2c((LY_COMMON_STYLES.fill), `${className}`)}${className}{overflow:hidden;}`,
        scrollable: null
    };
};
/** @docs-private */
export class LyTabsBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
export const LyTabsMixinBase = mixinStyleUpdater(mixinBg(mixinElevation(mixinShadowColor(LyTabsBase))));
/** @docs-private */
export class LyTabLabelBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
export const LyTabLabelMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyTabLabelBase)))))))));
let LyTabs = class LyTabs extends LyTabsMixinBase {
    constructor(theme, renderer, el, cd, _resizeService) {
        super(theme);
        this.theme = theme;
        this.renderer = renderer;
        this.el = el;
        this.cd = cd;
        this._resizeService = _resizeService;
        /** @docs-private */
        this.classes = this.theme.renderStyleSheet(STYLES);
        this._tabsSubscription = Subscription.EMPTY;
        this.selectedIndexOnChange = 'auto';
        this.selectedIndexChange = new EventEmitter();
        this.setAutoContrast();
    }
    set scrollable(val) {
        const newVal = toBoolean(val);
        if (newVal) {
            this.renderer.addClass(this.el.nativeElement, this.classes.scrollable);
        }
        else if (this._scrollable != null) {
            this.renderer.removeClass(this.el.nativeElement, this.classes.scrollable);
        }
        this._scrollable = newVal;
    }
    get scrollable() {
        return this._scrollable;
    }
    set indicatorColor(val) {
        if (val !== this.indicatorColor) {
            this._color = val;
            this._colorClass = this.theme.addStyle(`k-tab-indicator-color:${val}`, theme => (`color:${theme.colorOf(val)};`), this.tabsIndicator.nativeElement, this._colorClass);
        }
    }
    get indicatorColor() {
        return this._color;
    }
    set headerPlacement(val) {
        if (val !== this.headerPlacement) {
            this._headerPlacement = val;
            this._headerPlacementClass = this.theme.addStyle(`lyTabs.headerPlacement:${val}`, () => {
                let flexDirectionContainer;
                let flexDirection = this._getFlexDirection(val);
                let position;
                let height = null;
                let width = null;
                let heightServer = null;
                let widthServer = null;
                switch (val) {
                    case YPosition.above:
                        flexDirectionContainer = 'column';
                        position = YPosition.below;
                        height = '2px';
                        widthServer = '100%';
                        break;
                    case YPosition.below:
                        flexDirectionContainer = 'column-reverse';
                        position = YPosition.above;
                        height = '2px';
                        widthServer = '100%';
                        break;
                    case XPosition.before:
                        flexDirectionContainer = 'row';
                        position = XPosition.after;
                        width = '2px';
                        heightServer = '100%';
                        break;
                    case XPosition.after:
                        flexDirectionContainer = 'row-reverse';
                        position = XPosition.before;
                        width = '2px';
                        heightServer = '100%';
                        break;
                    default:
                        throw new Error(`LyTabs: value:${val} do not is valid for \`headerPlacement\``);
                }
                if (val === YPosition.above || val === YPosition.below) {
                    flexDirection = 'row';
                }
                else {
                    flexDirection = 'column';
                }
                return {
                    [`.${this.classes.container}`]: {
                        flexDirection: flexDirectionContainer
                    },
                    [`& .${this.classes.tabsIndicator},& .${this.classes.tabsIndicatorForServer}`]: {
                        [position]: 0,
                        height,
                        width
                    },
                    [`.${this.classes.tabsIndicatorForServer}`]: {
                        width: widthServer,
                        height: heightServer
                    },
                    [`& .${this.classes.tabsLabels},& .${this.classes.tabContents}`]: { flexDirection },
                    [`.${this.classes.tabContents}`]: { flexDirection }
                };
            }, this.el.nativeElement, this._headerPlacementClass, STYLE_PRIORITY);
            this._updateStylesOfSelectedTab();
        }
    }
    get headerPlacement() {
        return this._headerPlacement;
    }
    set alignTabs(val) {
        this._alignTabs = val;
        this._alignTabsClass = this.theme.addStyle(`lyAlignTabs: ${val}`, (val === 'stretch' ? {
            [`& .${this.classes.tabsLabels} .${this.classes.tab}`]: {
                flexBasis: 0,
                flexGrow: 1
            }
        } : {
            [`& .${this.classes.tabsLabels}`]: {
                justifyContent: val in AlignAlias ? AlignAlias[val] : val
            }
        }), this.el.nativeElement, this._alignTabsClass, STYLE_PRIORITY);
    }
    get alignTabs() {
        return this._alignTabs;
    }
    set textColor(val) {
        this._textColor = val;
        this._textColorClass = this.theme.addStyle(`lyTabs.textColor:${val}`, (theme) => ({
            [`& .${this.classes.tabLabelActive}`]: {
                color: theme.colorOf(val)
            }
        }), this.el.nativeElement, this._textColorClass, STYLE_PRIORITY);
    }
    get textColor() {
        return this._textColor;
    }
    set selectedIndex(val) {
        if (val !== this.selectedIndex) {
            this._selectedBeforeIndex = this._selectedIndex;
            this._selectedIndex = this._findIndex(val, 'auto');
            this._selectedBeforeTab = this._selectedTab;
            this.selectedIndexChange.emit(this._selectedIndex);
            this._markForCheck();
            Promise.resolve(null).then(() => {
                this._updateStylesOfSelectedTab();
            });
        }
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    ngOnChanges() {
        if (this._isViewInitLoaded) {
            this.updateStyle(this.tabsRef.nativeElement);
        }
    }
    ngOnInit() {
        if (this.selectedIndex == null) {
            this.selectedIndex = 0;
        }
        this.renderer.addClass(this.el.nativeElement, this.classes.root);
        const tabsIndicatorEl = this.tabsIndicator.nativeElement;
        this.renderer.addClass(tabsIndicatorEl, this.classes.tabsIndicator);
        /** Set default Color */
        if (!this.indicatorColor && !this.bg && !this.textColor && !this.elevation) {
            this.indicatorColor = DEFAULT_INDICATOR_COLOR;
            this.bg = DEFAULT_BG;
            this.elevation = DEFAULT_ELEVATION;
        }
        if (!this.headerPlacement) {
            this.headerPlacement = DEFAULT_HEADER_PLACEMENT;
        }
    }
    ngAfterContentInit() {
        this._tabsSubscription = this.tabsList.changes.subscribe(() => {
            if (this._selectedIndex !== this.selectedIndexOnChange) {
                this.selectedIndex = this._findIndex(this.selectedIndex, this.selectedIndexOnChange);
            }
            this.cd.markForCheck();
        });
    }
    ngAfterViewInit() {
        this.updateStyle(this.tabsRef.nativeElement);
        this._isViewInitLoaded = true;
        if (Platform.isBrowser) {
            this._tabResizeSub = this._resizeService.resize$.subscribe(() => {
                if (this._selectedTab) {
                    this._updateIndicator(this._selectedTab);
                    this._selectedTab._tabLabel._updateTabScroll();
                }
            });
        }
    }
    ngOnDestroy() {
        this._tabsSubscription.unsubscribe();
        if (this._tabResizeSub) {
            this._tabResizeSub.unsubscribe();
        }
    }
    _findIndex(selectedIndex, index) {
        if (!this.tabsList) {
            return selectedIndex;
        }
        const indexOfLastTab = this.tabsList.length - 1;
        const currentIndex = typeof index === 'number' ? index : selectedIndex;
        return currentIndex < 0 ? 0 : currentIndex > indexOfLastTab ? indexOfLastTab : currentIndex;
    }
    _updateIndicator(currentTab, beforeTab) {
        if (currentTab) {
            if (beforeTab) {
                beforeTab._renderer.removeAttribute(beforeTab._tabIndicator.nativeElement, 'class');
            }
            const el = currentTab._el.nativeElement;
            const rects = el.getBoundingClientRect();
            if (this.headerPlacement === XPosition.after || this.headerPlacement === XPosition.before) {
                this.renderer.setStyle(this.tabsIndicator.nativeElement, 'height', `${rects.height}px`);
                this.renderer.setStyle(this.tabsIndicator.nativeElement, 'top', `${el.offsetTop}px`);
                this.renderer.removeStyle(this.tabsIndicator.nativeElement, 'width');
                this.renderer.removeStyle(this.tabsIndicator.nativeElement, 'left');
            }
            else {
                this.renderer.setStyle(this.tabsIndicator.nativeElement, 'width', `${rects.width}px`);
                this.renderer.setStyle(this.tabsIndicator.nativeElement, 'left', `${el.offsetLeft}px`);
                this.renderer.removeStyle(this.tabsIndicator.nativeElement, 'height');
                this.renderer.removeStyle(this.tabsIndicator.nativeElement, 'top');
            }
        }
    }
    _updateStylesOfSelectedTab() {
        const index = this._selectedIndex;
        const placement = this.headerPlacement;
        this._selectedIndexClass = this._theme.addStyle(`lyTabs.selectedIndex:${index}+${placement}`, (theme) => {
            let sign = 1;
            const position = this._getFlexDirection(placement) === 'column' ? 'Y' : 'X';
            if (theme.direction === Dir.ltr || position === 'Y') {
                sign = -1;
            }
            return {
                transform: `translate${position}(${index * 100 * sign}%)`
            };
        }, this.tabContents.nativeElement, this._selectedIndexClass, STYLE_PRIORITY);
        this.renderer.addClass(this.tabContents.nativeElement, this._selectedIndexClass);
    }
    _markForCheck() {
        this.cd.markForCheck();
    }
    loadTemplate(tab, index) {
        tab.index = index;
        if (this.selectedIndex === tab.index) {
            // set 0 if is null
            this._selectedTab = tab;
            Promise.resolve(null).then(() => {
                if (Platform.isBrowser) {
                    this._updateIndicator(tab);
                }
                else {
                    // for server
                    const selectedBeforeTab = this._selectedBeforeTab;
                    if (selectedBeforeTab) {
                        this.renderer.removeClass(selectedBeforeTab._tabIndicator.nativeElement, this.classes.tabsIndicatorForServer);
                        this.renderer.removeClass(selectedBeforeTab._tabIndicator.nativeElement, this._colorClass);
                    }
                    this.renderer.addClass(this._selectedTab._tabIndicator.nativeElement, this.classes.tabsIndicatorForServer);
                    this.renderer.addClass(this._selectedTab._tabIndicator.nativeElement, this._colorClass);
                }
            });
        }
        tab._tabLabel._updateTabState();
        if (this.selectedIndex === tab.index) {
            return tab._templateRefLazy || tab._templateRef;
        }
        else {
            return null;
        }
    }
    _getFlexDirection(val) {
        let flexDirection;
        if (val === YPosition.above || val === YPosition.below) {
            flexDirection = 'row';
        }
        else {
            flexDirection = 'column';
        }
        return flexDirection;
    }
};
/** @docs-private */
LyTabs.и = 'LyTabs';
LyTabs.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: WinResize }
];
tslib_1.__decorate([
    ViewChild('tabs', { static: true })
], LyTabs.prototype, "tabsRef", void 0);
tslib_1.__decorate([
    ViewChild('tabContents', { static: true })
], LyTabs.prototype, "tabContents", void 0);
tslib_1.__decorate([
    ViewChild('tabsIndicator', { static: true })
], LyTabs.prototype, "tabsIndicator", void 0);
tslib_1.__decorate([
    Input()
], LyTabs.prototype, "selectedIndexOnChange", void 0);
tslib_1.__decorate([
    Input()
], LyTabs.prototype, "scrollable", null);
tslib_1.__decorate([
    Input()
], LyTabs.prototype, "indicatorColor", null);
tslib_1.__decorate([
    Input()
], LyTabs.prototype, "headerPlacement", null);
tslib_1.__decorate([
    Input()
], LyTabs.prototype, "alignTabs", null);
tslib_1.__decorate([
    Input()
], LyTabs.prototype, "textColor", null);
tslib_1.__decorate([
    Input()
], LyTabs.prototype, "selectedIndex", null);
tslib_1.__decorate([
    Output()
], LyTabs.prototype, "selectedIndexChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => LyTab))
], LyTabs.prototype, "tabsList", void 0);
LyTabs = tslib_1.__decorate([
    Component({
        selector: 'ly-tabs',
        template: "<div [className]=\"classes.container\">\n  <div #tabs [className]=\"classes.tabsLabelsContainer\">\n    <div [className]=\"classes.tabsLabels\">\n      <ng-content></ng-content>\n      <span #tabsIndicator></span>\n    </div>\n  </div>\n  <div [className]=\"classes.contentContainer\">\n    <div [className]=\"classes.tabContents\" #tabContents>\n      <ng-template ngFor let-item [ngForOf]=\"tabsList\" let-x=\"index\">\n        <div [className]=\"classes.tabContent\">\n          <ng-template [ngTransclude]=\"loadTemplate(item, x)\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        exportAs: 'lyTabs',
        inputs: [
            'bg', 'elevation', 'shadowColor'
        ]
    })
], LyTabs);
export { LyTabs };
let LyTab = class LyTab {
    constructor(_tabs, _renderer, _el) {
        this._tabs = _tabs;
        this._renderer = _renderer;
        this._el = _el;
        this._isBrowser = Platform.isBrowser;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._tabs.classes.tab);
    }
};
LyTab.ctorParameters = () => [
    { type: LyTabs },
    { type: Renderer2 },
    { type: ElementRef }
];
tslib_1.__decorate([
    ContentChild(LyTabContent, { read: TemplateRef, static: true })
], LyTab.prototype, "_templateRefLazy", void 0);
tslib_1.__decorate([
    ViewChild('_templateNgContent', { static: true })
], LyTab.prototype, "_templateRef", void 0);
tslib_1.__decorate([
    ViewChild('tabIndicator', { static: false })
], LyTab.prototype, "_tabIndicator", void 0);
tslib_1.__decorate([
    ContentChild(forwardRef(() => LyTabLabel), { static: true })
], LyTab.prototype, "_tabLabel", void 0);
LyTab = tslib_1.__decorate([
    Component({
        selector: 'ly-tab',
        template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<div></div>\n<span *ngIf=\"!_isBrowser\" #tabIndicator></span>\n<ng-template #_templateNgContent>\n  <ng-content></ng-content>\n</ng-template>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
    })
], LyTab);
export { LyTab };
let LyTabLabel = class LyTabLabel extends LyButton {
    constructor(_el, _renderer, _theme, _ngZone, _rippleService, _focusState, _hostClass, _tab, _tabs) {
        super(_el, _renderer, _theme, _ngZone, _rippleService, _focusState, _hostClass, null);
        this._tab = _tab;
        this._tabs = _tabs;
        this._isBrowser = Platform.isBrowser;
    }
    get active() {
        return this._active;
    }
    set active(val) {
        const newVal = toBoolean(val);
        if (newVal && val !== this.active) {
            Promise.resolve(null).then(() => this._tabs.selectedIndex = this._tab.index);
        }
    }
    _onClickTab() {
        if (!this.disabled) {
            this._tabs.selectedIndex = this._tab.index;
        }
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._tabs.classes.label);
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    }
    _updateTabState() {
        // update styles for active tab
        if (this._tabs._selectedIndex === this._tab.index) {
            if (!this._activeTabStyle) {
                this._activeTabStyle = true;
                this._renderer.addClass(this._el.nativeElement, this._tabs.classes.tabLabelActive);
                this._updateTabScroll();
            }
        }
        else if (this._activeTabStyle) {
            this._activeTabStyle = false;
            this._renderer.removeClass(this._el.nativeElement, this._tabs.classes.tabLabelActive);
        }
    }
    _updateTabScroll() {
        if (Platform.isBrowser && this._tabs.scrollable) {
            const tab = this._tab._el.nativeElement;
            const tabContainer = this._tabs.tabsRef.nativeElement;
            if (tabContainer.scrollWidth !== tabContainer.offsetWidth) {
                const dir = this._theme.variables.direction;
                const max = tabContainer.scrollWidth - tabContainer.offsetWidth;
                const offsetBefore = dir === Dir.rtl
                    ? max + tab.offsetLeft
                    : tab.offsetLeft;
                const l = offsetBefore + tab.offsetWidth / 2 - tabContainer.offsetWidth / 2;
                const newVal = l >= max ? max : l <= 0 ? 0 : l;
                scrollWithAnimation(this._tabs.tabsRef.nativeElement, newVal, 350, 'x');
            }
        }
    }
    ngAfterViewInit() { }
};
LyTabLabel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: NgZone },
    { type: LyRippleService },
    { type: LyFocusState },
    { type: LyHostClass },
    { type: LyTab, decorators: [{ type: Optional }] },
    { type: LyTabs, decorators: [{ type: Optional }] }
];
tslib_1.__decorate([
    Input()
], LyTabLabel.prototype, "active", null);
tslib_1.__decorate([
    ViewChild('rippleContainer', { static: false })
], LyTabLabel.prototype, "_rippleContainer", void 0);
tslib_1.__decorate([
    HostListener('click')
], LyTabLabel.prototype, "_onClickTab", null);
LyTabLabel = tslib_1.__decorate([
    Component({
        selector: 'button[ly-tab-label], a[ly-tab-label]',
        template: "<span [className]=\"classes.content\">\n  <ng-content></ng-content>\n</span>\n<div *ngIf=\"_isBrowser\" #rippleContainer [className]=\"_rippleService.classes.container\"></div>\n",
        inputs: [
            'bg',
            'color',
            'raised',
            'disabled',
            'outlined',
            'elevation',
            'shadowColor',
            'disableRipple'
        ],
        providers: [LyHostClass]
    }),
    tslib_1.__param(7, Optional()),
    tslib_1.__param(8, Optional())
], LyTabLabel);
export { LyTabLabel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90YWJzLyIsInNvdXJjZXMiOlsidGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNqQixRQUFRLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsY0FBYyxFQUNkLFVBQVUsRUFDVixTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDSCxlQUFlLEVBQ2YsWUFBWSxFQUNaLFNBQVMsRUFDVCxtQkFBbUIsRUFDbkIsU0FBUyxFQUNULFdBQVcsRUFDWCxJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFZcEMsTUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFDckMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFD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LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3B0aW9uYWxcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgQWxpZ25BbGlhcyxcbiAgWVBvc2l0aW9uLFxuICBYUG9zaXRpb24sXG4gIERpcixcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeUZvY3VzU3RhdGUsXG4gIFdpblJlc2l6ZSxcbiAgc2Nyb2xsV2l0aEFuaW1hdGlvbixcbiAgdG9Cb29sZWFuLFxuICBMeUhvc3RDbGFzcyxcbiAgc3QyYyxcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgVGhlbWVSZWYsXG4gIFN0eWxlQ29sbGVjdGlvbixcbiAgTHlDbGFzc2VzLFxuICBTdHlsZVRlbXBsYXRlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnQGFseWxlL3VpL2J1dHRvbic7XG5pbXBvcnQgeyBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBMeVRhYlRoZW1lIHtcbiAgLyoqIFN0eWxlcyBmb3IgVGFiIENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVDb2xsZWN0aW9uPCgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKT5cbiAgICB8ICgoY2xhc3NlczogTHlDbGFzc2VzPHR5cGVvZiBTVFlMRVM+KSA9PiBTdHlsZVRlbXBsYXRlKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMeVRhYlZhcmlhYmxlcyB7XG4gIHRhYj86IEx5VGFiVGhlbWU7XG59XG5cbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuY29uc3QgREVGQVVMVF9JTkRJQ0FUT1JfQ09MT1IgPSAnYWNjZW50JztcbmNvbnN0IERFRkFVTFRfRUxFVkFUSU9OID0gNDtcbmNvbnN0IERFRkFVTFRfSEVBREVSX1BMQUNFTUVOVCA9ICdhYm92ZSc7XG5leHBvcnQgdHlwZSBBbGlnblRhYnMgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8ICdiYXNlbGluZSc7XG5leHBvcnQgdHlwZSBMeVRhYnNIZWFkZXJQbGFjZW1lbnQgPSAnYmVmb3JlJyB8ICdhZnRlcicgfCAnYWJvdmUnIHwgJ2JlbG93JztcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVRhYlZhcmlhYmxlcywgcmVmOiBUaGVtZVJlZikgPT4ge1xuICBjb25zdCBfXyA9IHJlZi5zZWxlY3RvcnNPZihTVFlMRVMpO1xuICByZXR1cm4ge1xuICAgICRuYW1lOiBMeVRhYnMu0LgsXG4gICAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgICByb290OiAoKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jazt9JHtzdDJjKChcbiAgICAgICAgICAodGhlbWUudGFiXG4gICAgICAgICAgICAmJiB0aGVtZS50YWIucm9vdFxuICAgICAgICAgICAgJiYgKHRoZW1lLnRhYi5yb290IGluc3RhbmNlb2YgU3R5bGVDb2xsZWN0aW9uXG4gICAgICAgICAgICAgID8gdGhlbWUudGFiLnJvb3Quc2V0VHJhbnNmb3JtZXIoZm4gPT4gZm4oX18pKS5jc3NcbiAgICAgICAgICAgICAgOiB0aGVtZS50YWIucm9vdChfXykpXG4gICAgICAgICAgKSksIGAke2NsYXNzTmFtZX1gKX1gLFxuICAgIGNvbnRhaW5lcjogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDt9YCxcbiAgICB0YWI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1mbGV4O31gLFxuICAgIC8qKiBUYWIgY29udGVudCAqL1xuICAgIGNvbnRlbnRDb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtvdmVyZmxvdzpoaWRkZW47ZmxleC1ncm93OjE7fWAsXG4gICAgLyoqIFRhYiBoZWFkZXIgKi9cbiAgICB0YWJzTGFiZWxzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO31gLFxuICAgIHRhYnNMYWJlbHNDb250YWluZXI6ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtvdmVyZmxvdzpoaWRkZW47fUBtZWRpYSAoaG92ZXI6IG5vbmUpeyR7X18uc2Nyb2xsYWJsZX0gJHtjbGFzc05hbWV9e292ZXJmbG93OmF1dG87fX1gLFxuICAgIGxhYmVsOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7dXNlci1zZWxlY3Q6bm9uZTtib3JkZXI6MDttaW4td2lkdGg6NzJweDtwYWRkaW5nOjAgMjRweDtjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6NDhweDtkaXNwbGF5OmlubGluZS1mbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtmb250LWZhbWlseToke3RoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseX07Zm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplKX07bGV0dGVyLXNwYWNpbmc6MC4wMjg1N2VtO2NvbG9yOmN1cnJlbnRDb2xvcjtvdXRsaW5lOm5vbmU7d2lkdGg6MTAwJTtmb250LXdlaWdodDo1MDA7b3BhY2l0eTouNzt9JHtjbGFzc05hbWV9ICR7dGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyl9e3BhZGRpbmc6MCAxMnB4O31gLFxuICAgIHRhYkxhYmVsQWN0aXZlOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17b3BhY2l0eToxO31gLFxuICAgIHRhYkNvbnRlbnRzOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpmbGV4O3RyYW5zaXRpb246NDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO3dpbGwtY2hhbmdlOnRyYW5zZm9ybTtoZWlnaHQ6MTAwJTt9YCxcbiAgICB0YWJDb250ZW50OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtmbGV4LXNocmluazowO3Bvc2l0aW9uOnJlbGF0aXZlO31gLFxuICAgIHRhYnNJbmRpY2F0b3I6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MnB4O3RyYW5zaXRpb246NDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2JhY2tncm91bmQ6Y3VycmVudENvbG9yO31gLFxuICAgIHRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjt9YCxcbiAgICByaXBwbGVDb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7c3QyYygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfXtvdmVyZmxvdzpoaWRkZW47fWAsXG4gICAgc2Nyb2xsYWJsZTogbnVsbFxuICB9O1xufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVRhYnNCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVRhYnNNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihtaXhpbkJnKG1peGluRWxldmF0aW9uKG1peGluU2hhZG93Q29sb3IoTHlUYWJzQmFzZSkpKSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlUYWJMYWJlbE1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlUYWJMYWJlbEJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJywgJ2VsZXZhdGlvbicsICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgZXh0ZW5kcyBMeVRhYnNNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgc3RhdGljINC4ID0gJ0x5VGFicyc7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgX3NlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkQmVmb3JlSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkVGFiOiBMeVRhYiB8IG51bGw7XG4gIF9zZWxlY3RlZEJlZm9yZVRhYjogTHlUYWIgfCBudWxsO1xuICBfaXNWaWV3SW5pdExvYWRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3JDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oZWFkZXJQbGFjZW1lbnQ6IEx5VGFic0hlYWRlclBsYWNlbWVudDtcbiAgcHJpdmF0ZSBfaGVhZGVyUGxhY2VtZW50Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfYWxpZ25UYWJzOiBBbGlnblRhYnM7XG4gIHByaXZhdGUgX2FsaWduVGFic0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RleHRDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF90ZXh0Q29sb3JDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFiUmVzaXplU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbGFibGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgndGFicycsIHsgc3RhdGljOiB0cnVlIH0pIHRhYnNSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnRzJywgeyBzdGF0aWM6IHRydWUgfSkgdGFiQ29udGVudHM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYnNJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJzSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4T25DaGFuZ2U6ICdhdXRvJyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KClcbiAgc2V0IHNjcm9sbGFibGUodmFsOiBhbnkpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNjcm9sbGFibGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc2Nyb2xsYWJsZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNjcm9sbGFibGUpO1xuICAgIH1cbiAgICB0aGlzLl9zY3JvbGxhYmxlID0gbmV3VmFsO1xuICB9XG4gIGdldCBzY3JvbGxhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxhYmxlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbmRpY2F0b3JDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuaW5kaWNhdG9yQ29sb3IpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBrLXRhYi1pbmRpY2F0b3ItY29sb3I6JHt2YWx9YCxcbiAgICAgICAgdGhlbWUgPT4gKFxuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX07YFxuICAgICAgICApLFxuICAgICAgICB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGluZGljYXRvckNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoZWFkZXJQbGFjZW1lbnQodmFsOiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmhlYWRlclBsYWNlbWVudCkge1xuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50ID0gdmFsO1xuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseVRhYnMuaGVhZGVyUGxhY2VtZW50OiR7dmFsfWAsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGxldCBmbGV4RGlyZWN0aW9uQ29udGFpbmVyOiBzdHJpbmc7XG4gICAgICAgIGxldCBmbGV4RGlyZWN0aW9uID0gdGhpcy5fZ2V0RmxleERpcmVjdGlvbih2YWwpO1xuICAgICAgICBsZXQgcG9zaXRpb246IHN0cmluZztcbiAgICAgICAgbGV0IGhlaWdodDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGxldCB3aWR0aDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGxldCBoZWlnaHRTZXJ2ZXI6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgd2lkdGhTZXJ2ZXI6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgICAgIGNhc2UgWVBvc2l0aW9uLmFib3ZlOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdjb2x1bW4nO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBZUG9zaXRpb24uYmVsb3c7XG4gICAgICAgICAgICBoZWlnaHQgPSAnMnB4JztcbiAgICAgICAgICAgIHdpZHRoU2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBZUG9zaXRpb24uYmVsb3c6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ2NvbHVtbi1yZXZlcnNlJztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWVBvc2l0aW9uLmFib3ZlO1xuICAgICAgICAgICAgaGVpZ2h0ID0gJzJweCc7XG4gICAgICAgICAgICB3aWR0aFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWFBvc2l0aW9uLmJlZm9yZTpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAncm93JztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWFBvc2l0aW9uLmFmdGVyO1xuICAgICAgICAgICAgd2lkdGggPSAnMnB4JztcbiAgICAgICAgICAgIGhlaWdodFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWFBvc2l0aW9uLmFmdGVyOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdyb3ctcmV2ZXJzZSc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFhQb3NpdGlvbi5iZWZvcmU7XG4gICAgICAgICAgICB3aWR0aCA9ICcycHgnO1xuICAgICAgICAgICAgaGVpZ2h0U2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMeVRhYnM6IHZhbHVlOiR7dmFsfSBkbyBub3QgaXMgdmFsaWQgZm9yIFxcYGhlYWRlclBsYWNlbWVudFxcYGApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB2YWwgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9YF06IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGZsZXhEaXJlY3Rpb25Db250YWluZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcn0sJiAuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcn1gXToge1xuICAgICAgICAgICAgW3Bvc2l0aW9uXTogMCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyfWBdOiB7XG4gICAgICAgICAgICB3aWR0aDogd2lkdGhTZXJ2ZXIsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFNlcnZlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfSwmIC4ke3RoaXMuY2xhc3Nlcy50YWJDb250ZW50c31gXTogeyBmbGV4RGlyZWN0aW9uIH0sXG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMudGFiQ29udGVudHN9YF06IHsgZmxleERpcmVjdGlvbiB9XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50Q2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWSk7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZXNPZlNlbGVjdGVkVGFiKCk7XG4gICAgfVxuICB9XG4gIGdldCBoZWFkZXJQbGFjZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlclBsYWNlbWVudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnblRhYnModmFsOiBBbGlnblRhYnMpIHtcbiAgICB0aGlzLl9hbGlnblRhYnMgPSB2YWw7XG4gICAgdGhpcy5fYWxpZ25UYWJzQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUFsaWduVGFiczogJHt2YWx9YCxcbiAgICAoXG4gICAgICB2YWwgPT09ICdzdHJldGNoJyA/IHtcbiAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfSAuJHt0aGlzLmNsYXNzZXMudGFifWBdOiB7XG4gICAgICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgICAgIGZsZXhHcm93OiAxXG4gICAgICAgIH1cbiAgICAgIH0gOiB7XG4gICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc31gXToge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB2YWwgaW4gQWxpZ25BbGlhcyA/IEFsaWduQWxpYXNbdmFsXSA6IHZhbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKSxcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fYWxpZ25UYWJzQ2xhc3MsXG4gICAgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBhbGlnblRhYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduVGFicztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0ZXh0Q29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZXh0Q29sb3IgPSB2YWw7XG4gICAgdGhpcy5fdGV4dENvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseVRhYnMudGV4dENvbG9yOiR7dmFsfWAsXG4gICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFiTGFiZWxBY3RpdmV9YF06IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKVxuICAgICAgfVxuICAgIH0pLFxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl90ZXh0Q29sb3JDbGFzcyxcbiAgICBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IHRleHRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dENvbG9yO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlSW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodmFsLCAnYXV0bycpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIgPSB0aGlzLl9zZWxlY3RlZFRhYiE7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVTdHlsZXNPZlNlbGVjdGVkVGFiKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cblxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVRhYikpIHRhYnNMaXN0OiBRdWVyeUxpc3Q8THlUYWI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3Jlc2l6ZVNlcnZpY2U6IFdpblJlc2l6ZVxuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLl9pc1ZpZXdJbml0TG9hZGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMudGFic1JlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgY29uc3QgdGFic0luZGljYXRvckVsID0gdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YWJzSW5kaWNhdG9yRWwsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgICAvKiogU2V0IGRlZmF1bHQgQ29sb3IgKi9cbiAgICBpZiAoIXRoaXMuaW5kaWNhdG9yQ29sb3IgJiYgIXRoaXMuYmcgJiYgIXRoaXMudGV4dENvbG9yICYmICF0aGlzLmVsZXZhdGlvbikge1xuICAgICAgdGhpcy5pbmRpY2F0b3JDb2xvciA9IERFRkFVTFRfSU5ESUNBVE9SX0NPTE9SO1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLmVsZXZhdGlvbiA9IERFRkFVTFRfRUxFVkFUSU9OO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGVhZGVyUGxhY2VtZW50KSB7XG4gICAgICB0aGlzLmhlYWRlclBsYWNlbWVudCA9IERFRkFVTFRfSEVBREVSX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fdGFic1N1YnNjcmlwdGlvbiA9IHRoaXMudGFic0xpc3QuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJbmRleE9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2ZpbmRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXgsIHRoaXMuc2VsZWN0ZWRJbmRleE9uQ2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLnRhYnNSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5faXNWaWV3SW5pdExvYWRlZCA9IHRydWU7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fdGFiUmVzaXplU3ViID0gdGhpcy5fcmVzaXplU2VydmljZS5yZXNpemUkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFRhYikge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0aGlzLl9zZWxlY3RlZFRhYik7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIuX3RhYkxhYmVsLl91cGRhdGVUYWJTY3JvbGwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLl90YWJSZXNpemVTdWIpIHtcbiAgICAgIHRoaXMuX3RhYlJlc2l6ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbmRJbmRleChzZWxlY3RlZEluZGV4OiBudW1iZXIsIGluZGV4OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMudGFic0xpc3QpIHtcbiAgICAgIHJldHVybiBzZWxlY3RlZEluZGV4O1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mTGFzdFRhYiA9IHRoaXMudGFic0xpc3QubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInID8gaW5kZXggOiBzZWxlY3RlZEluZGV4O1xuICAgIHJldHVybiBjdXJyZW50SW5kZXggPCAwID8gMCA6IGN1cnJlbnRJbmRleCA+IGluZGV4T2ZMYXN0VGFiID8gaW5kZXhPZkxhc3RUYWIgOiBjdXJyZW50SW5kZXg7XG4gIH1cblxuICBfdXBkYXRlSW5kaWNhdG9yKGN1cnJlbnRUYWI6IEx5VGFiLCBiZWZvcmVUYWI/OiBMeVRhYik6IHZvaWQge1xuICAgIGlmIChjdXJyZW50VGFiKSB7XG4gICAgICBpZiAoYmVmb3JlVGFiKSB7XG4gICAgICAgIGJlZm9yZVRhYi5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGJlZm9yZVRhYi5fdGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdjbGFzcycpO1xuICAgICAgfVxuICAgICAgY29uc3QgZWwgPSBjdXJyZW50VGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgcmVjdHMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHRoaXMuaGVhZGVyUGxhY2VtZW50ID09PSBYUG9zaXRpb24uYWZ0ZXIgfHwgdGhpcy5oZWFkZXJQbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5iZWZvcmUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3JlY3RzLmhlaWdodH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAndG9wJywgYCR7ZWwub2Zmc2V0VG9wfXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnbGVmdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7cmVjdHMud2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBgJHtlbC5vZmZzZXRMZWZ0fXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3RvcCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlc09mU2VsZWN0ZWRUYWIoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHRoaXMuaGVhZGVyUGxhY2VtZW50O1xuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseVRhYnMuc2VsZWN0ZWRJbmRleDoke2luZGV4fSske3BsYWNlbWVudH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBsZXQgc2lnbiA9IDE7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2dldEZsZXhEaXJlY3Rpb24ocGxhY2VtZW50KSA9PT0gJ2NvbHVtbicgPyAnWScgOiAnWCc7XG4gICAgICBpZiAodGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyIHx8IHBvc2l0aW9uID09PSAnWScpIHtcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlJHtwb3NpdGlvbn0oJHtpbmRleCAqIDEwMCAqIHNpZ259JSlgXG4gICAgICB9O1xuICAgIH0sIHRoaXMudGFiQ29udGVudHMubmF0aXZlRWxlbWVudCwgdGhpcy5fc2VsZWN0ZWRJbmRleENsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcyk7XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBsb2FkVGVtcGxhdGUodGFiOiBMeVRhYiwgaW5kZXg6IG51bWJlcik6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD4gfCBudWxsIHtcbiAgICB0YWIuaW5kZXggPSBpbmRleDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIC8vIHNldCAwIGlmIGlzIG51bGxcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gdGFiO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZm9yIHNlcnZlclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQmVmb3JlVGFiID0gdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWI7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkQmVmb3JlVGFiKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHNlbGVjdGVkQmVmb3JlVGFiLl90YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhzZWxlY3RlZEJlZm9yZVRhYi5fdGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdGVkVGFiIS5fdGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdGVkVGFiIS5fdGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGFiLl90YWJMYWJlbC5fdXBkYXRlVGFiU3RhdGUoKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIHJldHVybiB0YWIuX3RlbXBsYXRlUmVmTGF6eSB8fCB0YWIuX3RlbXBsYXRlUmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRGbGV4RGlyZWN0aW9uKHZhbDogTHlUYWJzSGVhZGVyUGxhY2VtZW50KSB7XG4gICAgbGV0IGZsZXhEaXJlY3Rpb246IHN0cmluZztcbiAgICBpZiAodmFsID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdmFsID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgIGZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICB9IGVsc2Uge1xuICAgICAgZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgIH1cbiAgICByZXR1cm4gZmxleERpcmVjdGlvbjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKiBDdXJyZW50IHRhYiBpbmRleCAqL1xuICBpbmRleDogbnVtYmVyO1xuICBfaXNCcm93c2VyID0gUGxhdGZvcm0uaXNCcm93c2VyO1xuICBAQ29udGVudENoaWxkKEx5VGFiQ29udGVudCwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pIF90ZW1wbGF0ZVJlZkxhenk6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD47XG4gIEBWaWV3Q2hpbGQoJ190ZW1wbGF0ZU5nQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndGFiSW5kaWNhdG9yJywgeyBzdGF0aWM6IGZhbHNlIH0pIF90YWJJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeVRhYkxhYmVsKSwgeyBzdGF0aWM6IHRydWUgfSkgX3RhYkxhYmVsOiBMeVRhYkxhYmVsICYgeyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RhYnM6IEx5VGFicyxcbiAgICBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIF9lbDogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy50YWIpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltseS10YWItbGFiZWxdLCBhW2x5LXRhYi1sYWJlbF0nLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1sYWJlbC5odG1sJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdLFxuICBwcm92aWRlcnM6IFtMeUhvc3RDbGFzc11cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbCBleHRlbmRzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfYWN0aXZlVGFiU3R5bGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbjtcbiAgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcbiAgX2lzQnJvd3NlciA9IFBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG4gIHNldCBhY3RpdmUodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAmJiB2YWwgIT09IHRoaXMuYWN0aXZlKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB0aGlzLl90YWJzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl90YWIuaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9vbkNsaWNrVGFiKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fdGFicy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fdGFiLmluZGV4O1xuICAgIH1cbiAgfVxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2VsOiBFbGVtZW50UmVmLFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBfaG9zdENsYXNzOiBMeUhvc3RDbGFzcyxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF90YWI6IEx5VGFiLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYnM6IEx5VGFic1xuICApIHtcbiAgICBzdXBlcihfZWwsIF9yZW5kZXJlciwgX3RoZW1lLCBfbmdab25lLCBfcmlwcGxlU2VydmljZSwgX2ZvY3VzU3RhdGUsIF9ob3N0Q2xhc3MsIG51bGwgYXMgYW55KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy5sYWJlbCk7XG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRhYlN0YXRlKCkge1xuICAgIC8vIHVwZGF0ZSBzdHlsZXMgZm9yIGFjdGl2ZSB0YWJcbiAgICBpZiAodGhpcy5fdGFicy5fc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5fdGFiLmluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2FjdGl2ZVRhYlN0eWxlKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhYlN0eWxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVGFiU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hY3RpdmVUYWJTdHlsZSkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFiU3R5bGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy50YWJMYWJlbEFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRhYlNjcm9sbCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMuX3RhYnMuc2Nyb2xsYWJsZSkge1xuICAgICAgY29uc3QgdGFiID0gdGhpcy5fdGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdGFiQ29udGFpbmVyID0gdGhpcy5fdGFicy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFiQ29udGFpbmVyLnNjcm9sbFdpZHRoICE9PSB0YWJDb250YWluZXIub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbjtcbiAgICAgICAgY29uc3QgbWF4ID0gdGFiQ29udGFpbmVyLnNjcm9sbFdpZHRoIC0gdGFiQ29udGFpbmVyLm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBvZmZzZXRCZWZvcmUgPSBkaXIgPT09IERpci5ydGxcbiAgICAgICAgPyBtYXggKyB0YWIub2Zmc2V0TGVmdFxuICAgICAgICA6IHRhYi5vZmZzZXRMZWZ0O1xuICAgICAgICBjb25zdCBsID0gb2Zmc2V0QmVmb3JlICsgdGFiLm9mZnNldFdpZHRoIC8gMiAtIHRhYkNvbnRhaW5lci5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IGwgPj0gbWF4ID8gbWF4IDogbCA8PSAwID8gMCA6IGw7XG4gICAgICAgIHNjcm9sbFdpdGhBbmltYXRpb24odGhpcy5fdGFicy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQsIG5ld1ZhbCwgMzUwLCAneCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgfVxufVxuXG4iXX0=