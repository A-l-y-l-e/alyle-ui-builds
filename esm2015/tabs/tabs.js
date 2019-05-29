import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, Optional } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, Platform, AlignAlias, YPosition, XPosition, Dir, LyRippleService, LyFocusState, LY_COMMON_STYLES, WinResize, scrollWithAnimation, toBoolean } from '@alyle/ui';
import { LyButton } from '@alyle/ui/button';
import { LyTabContent } from './tab-content.directive';
import { Subscription } from 'rxjs';
const DEFAULT_DISABLE_RIPPLE = false;
const STYLE_PRIORITY = -2;
const DEFAULT_BG = 'primary';
const DEFAULT_INDICATOR_COLOR = 'accent';
const DEFAULT_ELEVATION = 4;
const DEFAULT_HEADER_PLACEMENT = 'above';
export const STYLES = (theme) => ({
    $priority: STYLE_PRIORITY,
    root: {
        display: 'block'
    },
    container: {
        display: 'flex'
    },
    tab: {
        position: 'relative',
        display: 'inline-flex'
    },
    /** Tab content */
    contentContainer: {
        overflow: 'hidden',
        flexGrow: 1
    },
    /** Tab header */
    tabsLabels: {
        display: 'flex',
        position: 'relative'
    },
    tabsLabelsContainer: {
        overflow: 'hidden',
        '{scrollable} &': {
            '@media (hover: none)': {
                overflow: 'auto'
            }
        }
    },
    label: {
        '-webkit-tap-highlight-color': 'transparent',
        '-webkit-appearance': 'none',
        backgroundColor: 'transparent',
        userSelect: 'none',
        border: 0,
        minWidth: '72px',
        padding: '0 24px',
        cursor: 'pointer',
        height: '48px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.pxToRem(theme.typography.fontSize),
        letterSpacing: '0.02857em',
        color: 'currentColor',
        outline: 'none',
        width: '100%',
        fontWeight: 500,
        opacity: .7,
        [theme.getBreakpoint('XSmall')]: {
            padding: '0 12px'
        }
    },
    tabLabelActive: {
        opacity: 1
    },
    tabContents: {
        display: 'flex',
        transition: '450ms cubic-bezier(.1, 1, 0.5, 1)',
        willChange: 'transform',
        height: '100%'
    },
    tabContent: {
        width: '100%',
        height: '100%',
        flexShrink: 0,
        position: 'relative'
    },
    tabsIndicator: {
        position: 'absolute',
        height: '2px',
        transition: '450ms cubic-bezier(.1, 1, 0.5, 1)',
        background: 'currentColor'
    },
    tabsIndicatorForServer: {
        position: 'absolute',
        background: 'currentColor'
    },
    rippleContainer: Object.assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden' }),
    scrollable: null
});
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
        this.classes = this.theme.addStyleSheet(STYLES);
        this._selectedIndex = 0;
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
                    /** for server */
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
tslib_1.__decorate([
    ViewChild('tabs'),
    tslib_1.__metadata("design:type", ElementRef)
], LyTabs.prototype, "tabsRef", void 0);
tslib_1.__decorate([
    ViewChild('tabContents'),
    tslib_1.__metadata("design:type", ElementRef)
], LyTabs.prototype, "tabContents", void 0);
tslib_1.__decorate([
    ViewChild('tabsIndicator'),
    tslib_1.__metadata("design:type", ElementRef)
], LyTabs.prototype, "tabsIndicator", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], LyTabs.prototype, "selectedIndexOnChange", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], LyTabs.prototype, "scrollable", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], LyTabs.prototype, "indicatorColor", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], LyTabs.prototype, "headerPlacement", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], LyTabs.prototype, "alignTabs", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], LyTabs.prototype, "textColor", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], LyTabs.prototype, "selectedIndex", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], LyTabs.prototype, "selectedIndexChange", void 0);
tslib_1.__decorate([
    ContentChildren(forwardRef(() => LyTab)),
    tslib_1.__metadata("design:type", QueryList)
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
    }),
    tslib_1.__metadata("design:paramtypes", [LyTheme2,
        Renderer2,
        ElementRef,
        ChangeDetectorRef,
        WinResize])
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
tslib_1.__decorate([
    ContentChild(LyTabContent, { read: TemplateRef }),
    tslib_1.__metadata("design:type", TemplateRef)
], LyTab.prototype, "_templateRefLazy", void 0);
tslib_1.__decorate([
    ViewChild('_templateNgContent'),
    tslib_1.__metadata("design:type", TemplateRef)
], LyTab.prototype, "_templateRef", void 0);
tslib_1.__decorate([
    ViewChild('tabIndicator'),
    tslib_1.__metadata("design:type", ElementRef)
], LyTab.prototype, "_tabIndicator", void 0);
tslib_1.__decorate([
    ContentChild(forwardRef(() => LyTabLabel)),
    tslib_1.__metadata("design:type", LyTabLabel)
], LyTab.prototype, "_tabLabel", void 0);
LyTab = tslib_1.__decorate([
    Component({
        selector: 'ly-tab',
        template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<div></div>\n<span *ngIf=\"!_isBrowser\" #tabIndicator></span>\n<ng-template #_templateNgContent>\n  <ng-content></ng-content>\n</ng-template>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
    }),
    tslib_1.__metadata("design:paramtypes", [LyTabs,
        Renderer2,
        ElementRef])
], LyTab);
export { LyTab };
let LyTabLabel = class LyTabLabel extends LyButton {
    constructor(_el, _renderer, _theme, _ngZone, _rippleService, _focusState, _tab, _tabs) {
        super(_el, _renderer, _theme, _ngZone, _rippleService, _focusState);
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], LyTabLabel.prototype, "active", null);
tslib_1.__decorate([
    ViewChild('rippleContainer'),
    tslib_1.__metadata("design:type", ElementRef)
], LyTabLabel.prototype, "_rippleContainer", void 0);
tslib_1.__decorate([
    HostListener('click'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
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
        ]
    }),
    tslib_1.__param(6, Optional()),
    tslib_1.__param(7, Optional()),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        Renderer2,
        LyTheme2,
        NgZone,
        LyRippleService,
        LyFocusState,
        LyTab,
        LyTabs])
], LyTabLabel);
export { LyTabLabel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90YWJzLyIsInNvdXJjZXMiOlsidGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsUUFBUSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxhQUFhLEVBQ2IsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsUUFBUSxFQUVSLFVBQVUsRUFDVixTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDSCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLFNBQVMsRUFDUixNQUFNLFdBQVcsQ0FBQztBQUNyQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsTUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFDckMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQzdCLE1BQU0sdUJBQXVCLEdBQUcsUUFBUSxDQUFDO0FBQ3pDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLE1BQU0sd0JBQXdCLEdB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QUM7SUErQkcsbUJBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixtQkFBQSxRQUFRLEVBQUUsQ0FBQTs2Q0FQTixVQUFVO1FBQ0osU0FBUztRQUNaLFFBQVE7UUFDUCxNQUFNO1FBQ0MsZUFBZTtRQUNsQixZQUFZO1FBQ0MsS0FBSztRQUNKLE1BQU07R0EvQnhCLFVBQVUsQ0E0RXRCO1NBNUVZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3B0aW9uYWxcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgQWxpZ25BbGlhcyxcbiAgWVBvc2l0aW9uLFxuICBYUG9zaXRpb24sXG4gIERpcixcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeUZvY3VzU3RhdGUsXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIFdpblJlc2l6ZSxcbiAgc2Nyb2xsV2l0aEFuaW1hdGlvbixcbiAgdG9Cb29sZWFuXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnQGFseWxlL3VpL2J1dHRvbic7XG5pbXBvcnQgeyBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuY29uc3QgREVGQVVMVF9JTkRJQ0FUT1JfQ09MT1IgPSAnYWNjZW50JztcbmNvbnN0IERFRkFVTFRfRUxFVkFUSU9OID0gNDtcbmNvbnN0IERFRkFVTFRfSEVBREVSX1BMQUNFTUVOVCA9ICdhYm92ZSc7XG5leHBvcnQgdHlwZSBBbGlnblRhYnMgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8ICdiYXNlbGluZSc7XG5leHBvcnQgdHlwZSBMeVRhYnNIZWFkZXJQbGFjZW1lbnQgPSAnYmVmb3JlJyB8ICdhZnRlcicgfCAnYWJvdmUnIHwgJ2JlbG93JztcblxuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICB0YWI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG4gIH0sXG4gIC8qKiBUYWIgY29udGVudCAqL1xuICBjb250ZW50Q29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIC8qKiBUYWIgaGVhZGVyICovXG4gIHRhYnNMYWJlbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgdGFic0xhYmVsc0NvbnRhaW5lcjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAne3Njcm9sbGFibGV9ICYnOiB7XG4gICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGJvcmRlcjogMCxcbiAgICBtaW5XaWR0aDogJzcycHgnLFxuICAgIHBhZGRpbmc6ICcwIDI0cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGhlaWdodDogJzQ4cHgnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSksXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDI4NTdlbScsXG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBvcGFjaXR5OiAuNyxcbiAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICBwYWRkaW5nOiAnMCAxMnB4J1xuICAgIH1cbiAgfSxcbiAgdGFiTGFiZWxBY3RpdmU6IHtcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRhYkNvbnRlbnRzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHRyYW5zaXRpb246ICc0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgIGhlaWdodDogJzEwMCUnXG4gIH0sXG4gIHRhYkNvbnRlbnQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgdGFic0luZGljYXRvcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgdGFic0luZGljYXRvckZvclNlcnZlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIHJpcHBsZUNvbnRhaW5lcjoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgc2Nyb2xsYWJsZTogbnVsbFxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlUYWJzQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlUYWJzTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIobWl4aW5CZyhtaXhpbkVsZXZhdGlvbihtaXhpblNoYWRvd0NvbG9yKEx5VGFic0Jhc2UpKSkpO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5VGFiTGFiZWxCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5VGFiTGFiZWxNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluQ29sb3IoXG4gICAgbWl4aW5SYWlzZWQoXG4gICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5VGFiTGFiZWxCYXNlKSkpKSkpKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ2x5VGFicycsXG4gIGlucHV0czogW1xuICAgICdiZycsICdlbGV2YXRpb24nLCAnc2hhZG93Q29sb3InXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzIGV4dGVuZHMgTHlUYWJzTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgX3NlbGVjdGVkSW5kZXggPSAwO1xuICBfc2VsZWN0ZWRCZWZvcmVJbmRleDogbnVtYmVyO1xuICBfc2VsZWN0ZWRUYWI6IEx5VGFiIHwgbnVsbDtcbiAgX3NlbGVjdGVkQmVmb3JlVGFiOiBMeVRhYjtcbiAgX2lzVmlld0luaXRMb2FkZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3RhYnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGVhZGVyUGxhY2VtZW50OiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQ7XG4gIHByaXZhdGUgX2hlYWRlclBsYWNlbWVudENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FsaWduVGFiczogQWxpZ25UYWJzO1xuICBwcml2YXRlIF9hbGlnblRhYnNDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF90ZXh0Q29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGV4dENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RhYlJlc2l6ZVN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zY3JvbGxhYmxlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ3RhYnMnKSB0YWJzUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJDb250ZW50cycpIHRhYkNvbnRlbnRzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJzSW5kaWNhdG9yJykgdGFic0luZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleE9uQ2hhbmdlOiAnYXV0bycgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgpXG4gIHNldCBzY3JvbGxhYmxlKHZhbDogYW55KSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zY3JvbGxhYmxlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3Njcm9sbGFibGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zY3JvbGxhYmxlKTtcbiAgICB9XG4gICAgdGhpcy5fc2Nyb2xsYWJsZSA9IG5ld1ZhbDtcbiAgfVxuICBnZXQgc2Nyb2xsYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsYWJsZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgaW5kaWNhdG9yQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmluZGljYXRvckNvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgay10YWItaW5kaWNhdG9yLWNvbG9yOiR7dmFsfWAsXG4gICAgICAgIHRoZW1lID0+IChcbiAgICAgICAgICBgY29sb3I6JHt0aGVtZS5jb2xvck9mKHZhbCl9O2BcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3NcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCBpbmRpY2F0b3JDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGVhZGVyUGxhY2VtZW50KHZhbDogTHlUYWJzSGVhZGVyUGxhY2VtZW50KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5oZWFkZXJQbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudCA9IHZhbDtcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudENsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlUYWJzLmhlYWRlclBsYWNlbWVudDoke3ZhbH1gLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBsZXQgZmxleERpcmVjdGlvbkNvbnRhaW5lcjogc3RyaW5nO1xuICAgICAgICBsZXQgZmxleERpcmVjdGlvbiA9IHRoaXMuX2dldEZsZXhEaXJlY3Rpb24odmFsKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgICAgIGxldCBoZWlnaHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgd2lkdGg6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgaGVpZ2h0U2VydmVyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgICAgbGV0IHdpZHRoU2VydmVyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgICAgc3dpdGNoICh2YWwpIHtcbiAgICAgICAgICBjYXNlIFlQb3NpdGlvbi5hYm92ZTpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAnY29sdW1uJztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWVBvc2l0aW9uLmJlbG93O1xuICAgICAgICAgICAgaGVpZ2h0ID0gJzJweCc7XG4gICAgICAgICAgICB3aWR0aFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWVBvc2l0aW9uLmJlbG93OlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdjb2x1bW4tcmV2ZXJzZSc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFlQb3NpdGlvbi5hYm92ZTtcbiAgICAgICAgICAgIGhlaWdodCA9ICcycHgnO1xuICAgICAgICAgICAgd2lkdGhTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFhQb3NpdGlvbi5iZWZvcmU6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ3Jvdyc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFhQb3NpdGlvbi5hZnRlcjtcbiAgICAgICAgICAgIHdpZHRoID0gJzJweCc7XG4gICAgICAgICAgICBoZWlnaHRTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFhQb3NpdGlvbi5hZnRlcjpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAncm93LXJldmVyc2UnO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBYUG9zaXRpb24uYmVmb3JlO1xuICAgICAgICAgICAgd2lkdGggPSAnMnB4JztcbiAgICAgICAgICAgIGhlaWdodFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTHlUYWJzOiB2YWx1ZToke3ZhbH0gZG8gbm90IGlzIHZhbGlkIGZvciBcXGBoZWFkZXJQbGFjZW1lbnRcXGBgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdmFsID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uID0gJ3Jvdyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfWBdOiB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBmbGV4RGlyZWN0aW9uQ29udGFpbmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3J9LCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXJ9YF06IHtcbiAgICAgICAgICAgIFtwb3NpdGlvbl06IDAsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICB3aWR0aFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcn1gXToge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoU2VydmVyLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRTZXJ2ZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc30sJiAuJHt0aGlzLmNsYXNzZXMudGFiQ29udGVudHN9YF06IHsgZmxleERpcmVjdGlvbiB9LFxuICAgICAgICAgIFtgLiR7dGhpcy5jbGFzc2VzLnRhYkNvbnRlbnRzfWBdOiB7IGZsZXhEaXJlY3Rpb24gfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudENsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgdGhpcy5fdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpO1xuICAgIH1cbiAgfVxuICBnZXQgaGVhZGVyUGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJQbGFjZW1lbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWxpZ25UYWJzKHZhbDogQWxpZ25UYWJzKSB7XG4gICAgdGhpcy5fYWxpZ25UYWJzID0gdmFsO1xuICAgIHRoaXMuX2FsaWduVGFic0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlBbGlnblRhYnM6ICR7dmFsfWAsXG4gICAgKFxuICAgICAgdmFsID09PSAnc3RyZXRjaCcgPyB7XG4gICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc30gLiR7dGhpcy5jbGFzc2VzLnRhYn1gXToge1xuICAgICAgICAgIGZsZXhCYXNpczogMCxcbiAgICAgICAgICBmbGV4R3JvdzogMVxuICAgICAgICB9XG4gICAgICB9IDoge1xuICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNMYWJlbHN9YF06IHtcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogdmFsIGluIEFsaWduQWxpYXMgPyBBbGlnbkFsaWFzW3ZhbF0gOiB2YWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICksXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX2FsaWduVGFic0NsYXNzLFxuICAgIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICBnZXQgYWxpZ25UYWJzKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnblRhYnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdGV4dENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGV4dENvbG9yID0gdmFsO1xuICAgIHRoaXMuX3RleHRDb2xvckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlUYWJzLnRleHRDb2xvcjoke3ZhbH1gLFxuICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlfWBdOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbClcbiAgICAgIH1cbiAgICB9KSxcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fdGV4dENvbG9yQ2xhc3MsXG4gICAgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCB0ZXh0Q29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRDb2xvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZUluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCBhcyBudW1iZXI7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHZhbCwgJ2F1dG8nKTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlVGFiID0gdGhpcy5fc2VsZWN0ZWRUYWIhO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQodGhpcy5fc2VsZWN0ZWRJbmRleCk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlUYWIpKSB0YWJzTGlzdDogUXVlcnlMaXN0PEx5VGFiPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBXaW5SZXNpemVcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5faXNWaWV3SW5pdExvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLnRhYnNSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBjb25zdCB0YWJzSW5kaWNhdG9yRWwgPSB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRhYnNJbmRpY2F0b3JFbCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3IpO1xuICAgIC8qKiBTZXQgZGVmYXVsdCBDb2xvciAqL1xuICAgIGlmICghdGhpcy5pbmRpY2F0b3JDb2xvciAmJiAhdGhpcy5iZyAmJiAhdGhpcy50ZXh0Q29sb3IgJiYgIXRoaXMuZWxldmF0aW9uKSB7XG4gICAgICB0aGlzLmluZGljYXRvckNvbG9yID0gREVGQVVMVF9JTkRJQ0FUT1JfQ09MT1I7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICAgIHRoaXMuZWxldmF0aW9uID0gREVGQVVMVF9FTEVWQVRJT047XG4gICAgfVxuICAgIGlmICghdGhpcy5oZWFkZXJQbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuaGVhZGVyUGxhY2VtZW50ID0gREVGQVVMVF9IRUFERVJfUExBQ0VNRU5UO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uID0gdGhpcy50YWJzTGlzdC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCwgdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMudGFic1JlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9pc1ZpZXdJbml0TG9hZGVkID0gdHJ1ZTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl90YWJSZXNpemVTdWIgPSB0aGlzLl9yZXNpemVTZXJ2aWNlLnJlc2l6ZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkVGFiKSB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRoaXMuX3NlbGVjdGVkVGFiKTtcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZFRhYi5fdGFiTGFiZWwuX3VwZGF0ZVRhYlNjcm9sbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuX3RhYlJlc2l6ZVN1Yikge1xuICAgICAgdGhpcy5fdGFiUmVzaXplU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmluZEluZGV4KHNlbGVjdGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICghdGhpcy50YWJzTGlzdCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZMYXN0VGFiID0gdGhpcy50YWJzTGlzdC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHNlbGVjdGVkSW5kZXg7XG4gICAgcmV0dXJuIGN1cnJlbnRJbmRleCA8IDAgPyAwIDogY3VycmVudEluZGV4ID4gaW5kZXhPZkxhc3RUYWIgPyBpbmRleE9mTGFzdFRhYiA6IGN1cnJlbnRJbmRleDtcbiAgfVxuXG4gIF91cGRhdGVJbmRpY2F0b3IoY3VycmVudFRhYjogTHlUYWIsIGJlZm9yZVRhYj86IEx5VGFiKTogdm9pZCB7XG4gICAgaWYgKGN1cnJlbnRUYWIpIHtcbiAgICAgIGlmIChiZWZvcmVUYWIpIHtcbiAgICAgICAgYmVmb3JlVGFiLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoYmVmb3JlVGFiLl90YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2NsYXNzJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBlbCA9IGN1cnJlbnRUYWIuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCByZWN0cyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAodGhpcy5oZWFkZXJQbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5hZnRlciB8fCB0aGlzLmhlYWRlclBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmJlZm9yZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgYCR7cmVjdHMuaGVpZ2h0fXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBgJHtlbC5vZmZzZXRUb3B9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdsZWZ0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHtyZWN0cy53aWR0aH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIGAke2VsLm9mZnNldExlZnR9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAndG9wJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gdGhpcy5oZWFkZXJQbGFjZW1lbnQ7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleENsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5VGFicy5zZWxlY3RlZEluZGV4OiR7aW5kZXh9KyR7cGxhY2VtZW50fWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGxldCBzaWduID0gMTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fZ2V0RmxleERpcmVjdGlvbihwbGFjZW1lbnQpID09PSAnY29sdW1uJyA/ICdZJyA6ICdYJztcbiAgICAgIGlmICh0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgfHwgcG9zaXRpb24gPT09ICdZJykge1xuICAgICAgICBzaWduID0gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUke3Bvc2l0aW9ufSgke2luZGV4ICogMTAwICogc2lnbn0lKWBcbiAgICAgIH07XG4gICAgfSwgdGhpcy50YWJDb250ZW50cy5uYXRpdmVFbGVtZW50LCB0aGlzLl9zZWxlY3RlZEluZGV4Q2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFiQ29udGVudHMubmF0aXZlRWxlbWVudCwgdGhpcy5fc2VsZWN0ZWRJbmRleENsYXNzKTtcbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGxvYWRUZW1wbGF0ZSh0YWI6IEx5VGFiLCBpbmRleDogbnVtYmVyKTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PiB8IG51bGwge1xuICAgIHRhYi5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgLy8gc2V0IDAgaWYgaXMgbnVsbFxuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGFiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiogZm9yIHNlcnZlciAqL1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fc2VsZWN0ZWRUYWIhLl90YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fc2VsZWN0ZWRUYWIhLl90YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0YWIuX3RhYkxhYmVsLl91cGRhdGVUYWJTdGF0ZSgpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgcmV0dXJuIHRhYi5fdGVtcGxhdGVSZWZMYXp5IHx8IHRhYi5fdGVtcGxhdGVSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEZsZXhEaXJlY3Rpb24odmFsOiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQpIHtcbiAgICBsZXQgZmxleERpcmVjdGlvbjogc3RyaW5nO1xuICAgIGlmICh2YWwgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB2YWwgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgZmxleERpcmVjdGlvbiA9ICdyb3cnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgfVxuICAgIHJldHVybiBmbGV4RGlyZWN0aW9uO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqIEN1cnJlbnQgdGFiIGluZGV4ICovXG4gIGluZGV4OiBudW1iZXI7XG4gIF9pc0Jyb3dzZXIgPSBQbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlUYWJDb250ZW50LCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIF90ZW1wbGF0ZVJlZkxhenk6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD47XG4gIEBWaWV3Q2hpbGQoJ190ZW1wbGF0ZU5nQ29udGVudCcpIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndGFiSW5kaWNhdG9yJykgX3RhYkluZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5VGFiTGFiZWwpKSBfdGFiTGFiZWw6IEx5VGFiTGFiZWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGFiczogTHlUYWJzLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LXRhYi1sYWJlbF0sIGFbbHktdGFiLWxhYmVsXScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWxhYmVsLmh0bWwnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbCBleHRlbmRzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfYWN0aXZlVGFiU3R5bGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbjtcbiAgX2lzQnJvd3NlciA9IFBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG4gIHNldCBhY3RpdmUodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAmJiB2YWwgIT09IHRoaXMuYWN0aXZlKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB0aGlzLl90YWJzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl90YWIuaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicpIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgX29uQ2xpY2tUYWIoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl90YWJzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl90YWIuaW5kZXg7XG4gICAgfVxuICB9XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBfZWw6IEVsZW1lbnRSZWYsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYjogTHlUYWIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfdGFiczogTHlUYWJzXG4gICkge1xuICAgIHN1cGVyKF9lbCwgX3JlbmRlcmVyLCBfdGhlbWUsIF9uZ1pvbmUsIF9yaXBwbGVTZXJ2aWNlLCBfZm9jdXNTdGF0ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMubGFiZWwpO1xuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVUYWJTdGF0ZSgpIHtcbiAgICAvLyB1cGRhdGUgc3R5bGVzIGZvciBhY3RpdmUgdGFiXG4gICAgaWYgKHRoaXMuX3RhYnMuX3NlbGVjdGVkSW5kZXggPT09IHRoaXMuX3RhYi5pbmRleCkge1xuICAgICAgaWYgKCF0aGlzLl9hY3RpdmVUYWJTdHlsZSkge1xuICAgICAgICB0aGlzLl9hY3RpdmVUYWJTdHlsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy50YWJMYWJlbEFjdGl2ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVRhYlNjcm9sbCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fYWN0aXZlVGFiU3R5bGUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhYlN0eWxlID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMudGFiTGFiZWxBY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVUYWJTY3JvbGwoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiB0aGlzLl90YWJzLnNjcm9sbGFibGUpIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRoaXMuX3RhYi5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHRhYkNvbnRhaW5lciA9IHRoaXMuX3RhYnMudGFic1JlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhYkNvbnRhaW5lci5zY3JvbGxXaWR0aCAhPT0gdGFiQ29udGFpbmVyLm9mZnNldFdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuX3RoZW1lLnZhcmlhYmxlcy5kaXJlY3Rpb247XG4gICAgICAgIGNvbnN0IG1heCA9IHRhYkNvbnRhaW5lci5zY3JvbGxXaWR0aCAtIHRhYkNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0QmVmb3JlID0gZGlyID09PSBEaXIucnRsXG4gICAgICAgID8gbWF4ICsgdGFiLm9mZnNldExlZnRcbiAgICAgICAgOiB0YWIub2Zmc2V0TGVmdDtcbiAgICAgICAgY29uc3QgbCA9IG9mZnNldEJlZm9yZSArIHRhYi5vZmZzZXRXaWR0aCAvIDIgLSB0YWJDb250YWluZXIub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICBjb25zdCBuZXdWYWwgPSBsID49IG1heCA/IG1heCA6IGwgPD0gMCA/IDAgOiBsO1xuICAgICAgICBzY3JvbGxXaXRoQW5pbWF0aW9uKHRoaXMuX3RhYnMudGFic1JlZi5uYXRpdmVFbGVtZW50LCBuZXdWYWwsIDM1MCwgJ3gnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7IH1cbn1cblxuIl19