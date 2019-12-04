import { __decorate, __param } from 'tslib';
import { TemplateRef, Directive, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef, ViewChild, Input, Output, ContentChildren, forwardRef, Component, ChangeDetectionStrategy, ViewEncapsulation, ContentChild, NgZone, Optional, HostListener, NgModule } from '@angular/core';
import { styleTemplateToString, StyleCollection, LY_COMMON_STYLES, mixinStyleUpdater, mixinBg, mixinElevation, mixinShadowColor, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinDisableRipple, toBoolean, XPosition, YPosition, AlignAlias, Platform, Dir, LyTheme2, WinResize, scrollWithAnimation, LyRippleService, LyFocusState, LyHostClass, LyThemeModule, LyCommonModule, NgTranscludeModule } from '@alyle/ui';
import { LyButton } from '@alyle/ui/button';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

let LyTabContent = class LyTabContent {
    constructor(template) {
        this.template = template;
    }
};
LyTabContent.ctorParameters = () => [
    { type: TemplateRef }
];
LyTabContent = __decorate([
    Directive({ selector: '[ly-tab-content]' })
], LyTabContent);

const DEFAULT_DISABLE_RIPPLE = false;
const STYLE_PRIORITY = -2;
const DEFAULT_BG = 'primary';
const DEFAULT_INDICATOR_COLOR = 'accent';
const DEFAULT_ELEVATION = 4;
const DEFAULT_HEADER_PLACEMENT = 'above';
const STYLES = (theme, ref) => {
    const __ = ref.selectorsOf(STYLES);
    return {
        $name: LyTabs.и,
        $priority: STYLE_PRIORITY,
        root: () => (className) => `${className}{display:block;}${styleTemplateToString(((theme.tab
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
        rippleContainer: (className) => `${styleTemplateToString((LY_COMMON_STYLES.fill), `${className}`)}${className}{overflow:hidden;}`,
        scrollable: null
    };
};
/** @docs-private */
class LyTabsBase {
    constructor(_theme) {
        this._theme = _theme;
    }
}
/** @docs-private */
const LyTabsMixinBase = mixinStyleUpdater(mixinBg(mixinElevation(mixinShadowColor(LyTabsBase))));
/** @docs-private */
class LyTabLabelBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @docs-private */
const LyTabLabelMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyTabLabelBase)))))))));
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
__decorate([
    ViewChild('tabs', { static: true })
], LyTabs.prototype, "tabsRef", void 0);
__decorate([
    ViewChild('tabContents', { static: true })
], LyTabs.prototype, "tabContents", void 0);
__decorate([
    ViewChild('tabsIndicator', { static: true })
], LyTabs.prototype, "tabsIndicator", void 0);
__decorate([
    Input()
], LyTabs.prototype, "selectedIndexOnChange", void 0);
__decorate([
    Input()
], LyTabs.prototype, "scrollable", null);
__decorate([
    Input()
], LyTabs.prototype, "indicatorColor", null);
__decorate([
    Input()
], LyTabs.prototype, "headerPlacement", null);
__decorate([
    Input()
], LyTabs.prototype, "alignTabs", null);
__decorate([
    Input()
], LyTabs.prototype, "textColor", null);
__decorate([
    Input()
], LyTabs.prototype, "selectedIndex", null);
__decorate([
    Output()
], LyTabs.prototype, "selectedIndexChange", void 0);
__decorate([
    ContentChildren(forwardRef(() => LyTab))
], LyTabs.prototype, "tabsList", void 0);
LyTabs = __decorate([
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
__decorate([
    ContentChild(LyTabContent, { read: TemplateRef, static: true })
], LyTab.prototype, "_templateRefLazy", void 0);
__decorate([
    ViewChild('_templateNgContent', { static: true })
], LyTab.prototype, "_templateRef", void 0);
__decorate([
    ViewChild('tabIndicator', { static: false })
], LyTab.prototype, "_tabIndicator", void 0);
__decorate([
    ContentChild(forwardRef(() => LyTabLabel), { static: true })
], LyTab.prototype, "_tabLabel", void 0);
LyTab = __decorate([
    Component({
        selector: 'ly-tab',
        template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<div></div>\n<span *ngIf=\"!_isBrowser\" #tabIndicator></span>\n<ng-template #_templateNgContent>\n  <ng-content></ng-content>\n</ng-template>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
    })
], LyTab);
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
__decorate([
    Input()
], LyTabLabel.prototype, "active", null);
__decorate([
    ViewChild('rippleContainer', { static: false })
], LyTabLabel.prototype, "_rippleContainer", void 0);
__decorate([
    HostListener('click')
], LyTabLabel.prototype, "_onClickTab", null);
LyTabLabel = __decorate([
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
    __param(7, Optional()),
    __param(8, Optional())
], LyTabLabel);

let LyTabsModule = class LyTabsModule {
};
LyTabsModule = __decorate([
    NgModule({
        imports: [LyThemeModule, CommonModule, LyCommonModule, NgTranscludeModule],
        exports: [LyCommonModule, LyTabs, LyTab, LyTabLabel, LyTabContent],
        declarations: [LyTabs, LyTab, LyTabLabel, LyTabContent]
    })
], LyTabsModule);

/**
 * Generated bundle index. Do not edit.
 */

export { LyTab, LyTabLabel, LyTabLabelBase, LyTabLabelMixinBase, LyTabs, LyTabsBase, LyTabsMixinBase, LyTabsModule, STYLES, LyTabContent as ɵa };
//# sourceMappingURL=alyle-ui-tabs.js.map
