/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, Optional } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, Platform, AlignAlias, YPosition, XPosition, Dir, LyRippleService, LyFocusState, LY_COMMON_STYLES, ResizeService, scrollWithAnimation, toBoolean } from '@alyle/ui';
import { LyButton } from '@alyle/ui/button';
import { LyTabContent } from './tab-content.directive';
import { Subscription } from 'rxjs';
/** @type {?} */
const DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const DEFAULT_BG = 'primary';
/** @type {?} */
const DEFAULT_INDICATOR_COLOR = 'accent';
/** @type {?} */
const DEFAULT_ELEVATION = 4;
/** @type {?} */
const DEFAULT_HEADER_PLACEMENT = 'above';
/** @type {?} */
const styles = (theme) => ({
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
    /**
     * Tab content
     */
    contentContainer: {
        overflow: 'hidden',
        flexGrow: 1
    },
    /**
     * Tab header
     */
    tabsLabels: {
        display: 'flex',
        position: 'relative'
    },
    tabsLabelsContainer: {
        overflow: 'hidden',
        '&{scrollable}': {
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
const ɵ0 = styles;
/**
 * \@docs-private
 */
export class LyTabsBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
if (false) {
    /** @type {?} */
    LyTabsBase.prototype._theme;
}
/**
 * \@docs-private
 * @type {?}
 */
export const LyTabsMixinBase = mixinStyleUpdater(mixinBg(mixinElevation(mixinShadowColor(LyTabsBase))));
/**
 * \@docs-private
 */
export class LyTabLabelBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
if (false) {
    /** @type {?} */
    LyTabLabelBase.prototype._theme;
    /** @type {?} */
    LyTabLabelBase.prototype._ngZone;
}
/**
 * \@docs-private
 * @type {?}
 */
export const LyTabLabelMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyTabLabelBase)))))))));
export class LyTabs extends LyTabsMixinBase {
    /**
     * @param {?} theme
     * @param {?} renderer
     * @param {?} el
     * @param {?} cd
     * @param {?} _resizeService
     */
    constructor(theme, renderer, el, cd, _resizeService) {
        super(theme);
        this.theme = theme;
        this.renderer = renderer;
        this.el = el;
        this.cd = cd;
        this._resizeService = _resizeService;
        /**
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this._selectedIndex = 0;
        this._tabsSubscription = Subscription.EMPTY;
        this.selectedIndexOnChange = 'auto';
        this.selectedIndexChange = new EventEmitter();
        this.setAutoContrast();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set scrollable(val) {
        /** @type {?} */
        const newVal = toBoolean(val);
        if (newVal) {
            this.renderer.addClass(this.el.nativeElement, this.classes.scrollable);
        }
        else if (this._scrollable != null) {
            this.renderer.removeClass(this.el.nativeElement, this.classes.scrollable);
        }
        this._scrollable = newVal;
    }
    /**
     * @return {?}
     */
    get scrollable() {
        return this._scrollable;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set indicatorColor(val) {
        if (val !== this.indicatorColor) {
            this._color = val;
            this._colorClass = this.theme.addStyle(`k-tab-indicator-color:${val}`, theme => (`color:${theme.colorOf(val)};`), this.tabsIndicator.nativeElement, this._colorClass);
        }
    }
    /**
     * @return {?}
     */
    get indicatorColor() {
        return this._color;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set headerPlacement(val) {
        if (val !== this.headerPlacement) {
            this._headerPlacement = val;
            this._headerPlacementClass = this.theme.addStyle(`lyTabs.headerPlacement:${val}`, () => {
                /** @type {?} */
                let flexDirectionContainer;
                /** @type {?} */
                let flexDirection = this._getFlexDirection(val);
                /** @type {?} */
                let position;
                /** @type {?} */
                let height = null;
                /** @type {?} */
                let width = null;
                /** @type {?} */
                let heightServer = null;
                /** @type {?} */
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
    /**
     * @return {?}
     */
    get headerPlacement() {
        return this._headerPlacement;
    }
    /**
     * @param {?} val
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    get alignTabs() {
        return this._alignTabs;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set textColor(val) {
        this._textColor = val;
        this._textColorClass = this.theme.addStyle(`lyTabs.textColor:${val}`, (theme) => ({
            [`& .${this.classes.tabLabelActive}`]: {
                color: theme.colorOf(val)
            }
        }), this.el.nativeElement, this._textColorClass, STYLE_PRIORITY);
    }
    /**
     * @return {?}
     */
    get textColor() {
        return this._textColor;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set selectedIndex(val) {
        if (val !== this.selectedIndex) {
            this._selectedBeforeIndex = (/** @type {?} */ (this._selectedIndex));
            this._selectedIndex = this._findIndex(val, 'auto');
            this._selectedBeforeTab = this._selectedTab;
            this.selectedIndexChange.emit(this._selectedIndex);
            this._markForCheck();
            Promise.resolve(null).then(() => {
                this._updateStylesOfSelectedTab();
            });
        }
    }
    /**
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this._isViewInitLoaded) {
            this.updateStyle(this.tabsRef.nativeElement);
        }
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
        if (!this.indicatorColor && !this.bg && !this.textColor && !this.elevation) {
            this.indicatorColor = DEFAULT_INDICATOR_COLOR;
            this.bg = DEFAULT_BG;
            this.elevation = DEFAULT_ELEVATION;
        }
        if (!this.headerPlacement) {
            this.headerPlacement = DEFAULT_HEADER_PLACEMENT;
        }
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
    ngAfterViewInit() {
        this.updateStyle(this.tabsRef.nativeElement);
        this._isViewInitLoaded = true;
        if (Platform.isBrowser) {
            this._tabResizeSub = this._resizeService.resize$.subscribe(() => {
                this._updateIndicator(this._selectedTab);
                this._selectedTab._tabLabel._updateTabScroll();
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tabsSubscription.unsubscribe();
        if (this._tabResizeSub) {
            this._tabResizeSub.unsubscribe();
        }
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
        if (currentTab) {
            if (beforeTab) {
                beforeTab._renderer.removeAttribute(beforeTab.tabIndicator.nativeElement, 'class');
            }
            /** @type {?} */
            const el = (/** @type {?} */ (currentTab._el.nativeElement));
            /** @type {?} */
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
    /**
     * @return {?}
     */
    _updateStylesOfSelectedTab() {
        /** @type {?} */
        const index = this._selectedIndex;
        /** @type {?} */
        const placement = this.headerPlacement;
        this._selectedIndexClass = this._theme.addStyle(`lyTabs.selectedIndex:${index}+${placement}`, (theme) => {
            /** @type {?} */
            let sign = 1;
            /** @type {?} */
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
    /**
     * @return {?}
     */
    _markForCheck() {
        this.cd.markForCheck();
    }
    /**
     * @param {?} tab
     * @param {?} index
     * @return {?}
     */
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
                    this.renderer.addClass(this._selectedTab.tabIndicator.nativeElement, this.classes.tabsIndicatorForServer);
                    this.renderer.addClass(this._selectedTab.tabIndicator.nativeElement, this._colorClass);
                }
            });
        }
        tab._tabLabel._updateTabState();
        if (this.selectedIndex === tab.index) {
            return tab.templateRefLazy || tab.templateRef;
        }
        else {
            return null;
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _getFlexDirection(val) {
        /** @type {?} */
        let flexDirection;
        if (val === YPosition.above || val === YPosition.below) {
            flexDirection = 'row';
        }
        else {
            flexDirection = 'column';
        }
        return flexDirection;
    }
}
LyTabs.decorators = [
    { type: Component, args: [{
                selector: 'ly-tabs',
                template: "<div [className]=\"classes.container\">\n  <div #tabs [className]=\"classes.tabsLabelsContainer\">\n    <div [className]=\"classes.tabsLabels\">\n      <ng-content></ng-content>\n      <span #tabsIndicator></span>\n    </div>\n  </div>\n  <div [className]=\"classes.contentContainer\">\n    <div [className]=\"classes.tabContents\" #tabContents>\n      <ng-template ngFor let-item [ngForOf]=\"tabsList\" let-x=\"index\">\n        <div [className]=\"classes.tabContent\">\n          <ng-template [ngTransclude]=\"loadTemplate(item, x)\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'lyTabs',
                inputs: [
                    'bg', 'elevation', 'shadowColor'
                ]
            }] }
];
/** @nocollapse */
LyTabs.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: ResizeService }
];
LyTabs.propDecorators = {
    tabsRef: [{ type: ViewChild, args: ['tabs',] }],
    tabContents: [{ type: ViewChild, args: ['tabContents',] }],
    tabsIndicator: [{ type: ViewChild, args: ['tabsIndicator',] }],
    selectedIndexOnChange: [{ type: Input }],
    scrollable: [{ type: Input }],
    indicatorColor: [{ type: Input }],
    headerPlacement: [{ type: Input }],
    alignTabs: [{ type: Input }],
    textColor: [{ type: Input }],
    selectedIndex: [{ type: Input }],
    selectedIndexChange: [{ type: Output }],
    tabsList: [{ type: ContentChildren, args: [forwardRef(() => LyTab),] }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyTabs.prototype.classes;
    /** @type {?} */
    LyTabs.prototype._selectedIndex;
    /** @type {?} */
    LyTabs.prototype._selectedBeforeIndex;
    /** @type {?} */
    LyTabs.prototype._selectedTab;
    /** @type {?} */
    LyTabs.prototype._selectedBeforeTab;
    /** @type {?} */
    LyTabs.prototype._isViewInitLoaded;
    /** @type {?} */
    LyTabs.prototype._tabsSubscription;
    /** @type {?} */
    LyTabs.prototype._color;
    /** @type {?} */
    LyTabs.prototype._colorClass;
    /** @type {?} */
    LyTabs.prototype._headerPlacement;
    /** @type {?} */
    LyTabs.prototype._headerPlacementClass;
    /** @type {?} */
    LyTabs.prototype._alignTabs;
    /** @type {?} */
    LyTabs.prototype._alignTabsClass;
    /** @type {?} */
    LyTabs.prototype._textColor;
    /** @type {?} */
    LyTabs.prototype._textColorClass;
    /** @type {?} */
    LyTabs.prototype._selectedIndexClass;
    /** @type {?} */
    LyTabs.prototype._tabResizeSub;
    /** @type {?} */
    LyTabs.prototype._scrollable;
    /** @type {?} */
    LyTabs.prototype.tabsRef;
    /** @type {?} */
    LyTabs.prototype.tabContents;
    /** @type {?} */
    LyTabs.prototype.tabsIndicator;
    /** @type {?} */
    LyTabs.prototype.selectedIndexOnChange;
    /** @type {?} */
    LyTabs.prototype.selectedIndexChange;
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
    /** @type {?} */
    LyTabs.prototype._resizeService;
}
export class LyTab {
    /**
     * @param {?} _tabs
     * @param {?} _renderer
     * @param {?} _el
     */
    constructor(_tabs, _renderer, _el) {
        this._tabs = _tabs;
        this._renderer = _renderer;
        this._el = _el;
        this._isBrowser = Platform.isBrowser;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._tabs.classes.tab);
    }
}
LyTab.decorators = [
    { type: Component, args: [{
                selector: 'ly-tab',
                template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<div></div>\n<span *ngIf=\"!_isBrowser\" #tabIndicator></span>\n<ng-template #_templateNgContent>\n  <ng-content></ng-content>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
LyTab.ctorParameters = () => [
    { type: LyTabs },
    { type: Renderer2 },
    { type: ElementRef }
];
LyTab.propDecorators = {
    templateRefLazy: [{ type: ContentChild, args: [LyTabContent, { read: TemplateRef },] }],
    templateRef: [{ type: ViewChild, args: ['_templateNgContent',] }],
    tabIndicator: [{ type: ViewChild, args: ['tabIndicator',] }],
    _tabLabel: [{ type: ContentChild, args: [forwardRef(() => LyTabLabel),] }]
};
if (false) {
    /** @type {?} */
    LyTab.prototype.index;
    /** @type {?} */
    LyTab.prototype._isBrowser;
    /** @type {?} */
    LyTab.prototype.templateRefLazy;
    /** @type {?} */
    LyTab.prototype.templateRef;
    /** @type {?} */
    LyTab.prototype.tabIndicator;
    /** @type {?} */
    LyTab.prototype._tabLabel;
    /** @type {?} */
    LyTab.prototype._tabs;
    /** @type {?} */
    LyTab.prototype._renderer;
    /** @type {?} */
    LyTab.prototype._el;
}
export class LyTabLabel extends LyButton {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _theme
     * @param {?} _ngZone
     * @param {?} _rippleService
     * @param {?} _focusState
     * @param {?} _tab
     * @param {?} _tabs
     */
    constructor(_el, _renderer, _theme, _ngZone, _rippleService, _focusState, _tab, _tabs) {
        super(_el, _renderer, _theme, _ngZone, _rippleService, _focusState);
        this._tab = _tab;
        this._tabs = _tabs;
        this._isBrowser = Platform.isBrowser;
    }
    /**
     * @return {?}
     */
    onClickTab() {
        if (!this.disabled) {
            this._tabs.selectedIndex = this._tab.index;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, this._tabs.classes.label);
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    }
    /**
     * @return {?}
     */
    _updateTabState() {
        // update styles for active tab
        if (this._tabs._selectedIndex === this._tab.index) {
            if (!this._active) {
                this._active = true;
                this._renderer.addClass(this._el.nativeElement, this._tabs.classes.tabLabelActive);
                this._updateTabScroll();
            }
        }
        else if (this._active) {
            this._active = false;
            this._renderer.removeClass(this._el.nativeElement, this._tabs.classes.tabLabelActive);
        }
    }
    /**
     * @return {?}
     */
    _updateTabScroll() {
        if (Platform.isBrowser && this._tabs.scrollable) {
            /** @type {?} */
            const tab = (/** @type {?} */ (this._tab._el.nativeElement));
            /** @type {?} */
            const tabContainer = (/** @type {?} */ (this._tabs.tabsRef.nativeElement));
            if (tabContainer.scrollWidth !== tabContainer.offsetWidth) {
                /** @type {?} */
                const dir = this._theme.config.direction;
                /** @type {?} */
                const max = tabContainer.scrollWidth - tabContainer.offsetWidth;
                /** @type {?} */
                const offsetBefore = dir === Dir.rtl
                    ? max + tab.offsetLeft
                    : tab.offsetLeft;
                /** @type {?} */
                const l = offsetBefore + tab.offsetWidth / 2 - tabContainer.offsetWidth / 2;
                /** @type {?} */
                const newVal = l >= max ? max : l <= 0 ? 0 : l;
                scrollWithAnimation(this._tabs.tabsRef.nativeElement, newVal, 350, 'x');
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() { }
}
LyTabLabel.decorators = [
    { type: Component, args: [{
                selector: 'button[ly-tab-label]',
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
                host: {
                    '[disabled]': 'disabled'
                }
            }] }
];
/** @nocollapse */
LyTabLabel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: NgZone },
    { type: LyRippleService },
    { type: LyFocusState },
    { type: LyTab, decorators: [{ type: Optional }] },
    { type: LyTabs, decorators: [{ type: Optional }] }
];
LyTabLabel.propDecorators = {
    _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
    onClickTab: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    LyTabLabel.prototype._active;
    /** @type {?} */
    LyTabLabel.prototype._isBrowser;
    /** @type {?} */
    LyTabLabel.prototype._rippleContainer;
    /** @type {?} */
    LyTabLabel.prototype._tab;
    /** @type {?} */
    LyTabLabel.prototype._tabs;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90YWJzLyIsInNvdXJjZXMiOlsidGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsUUFBUSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxhQUFhLEVBQ2IsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsUUFBUSxFQUVSLFVBQVUsRUFDVixTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDSCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsbUJBQW1CLEVBQ25CLFNBQVMsRUFDUixNQUFNLFdBQVcsQ0FBQztBQUNyQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7O01BQzlCLHNCQUFzQixHQUFHLEtBQUs7O01BQzlCLGNBQWMsR0FBRyxDQUFDLENBQUM7O01BQ25CLFVBQVUsR0FBRyxTQUFTOztNQUN0Qix1QkFBdUIsR0FBRyxRQUFROztNQUNsQyxpQkFBaUIsR0FBRyxDQUFDOztNQUNyQix3QkFBd0IsR0FBRyxPQUFPOztNQUlsQyxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUs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S0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUN6RTtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWUsS0FBSyxDQUFDOzs7WUE5RXRCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyw4TEFBNkI7Z0JBQzdCLE1BQU0sRUFBRTtvQkFDTixJQUFJO29CQUNKLE9BQU87b0JBQ1AsUUFBUTtvQkFDUixVQUFVO29CQUNWLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxhQUFhO29CQUNiLGVBQWU7aUJBQ2hCO2dCQUNELElBQUksRUFBRTtvQkFDSixZQUFZLEVBQUUsVUFBVTtpQkFDekI7YUFDRjs7OztZQTNpQkMsVUFBVTtZQVdWLFNBQVM7WUFPVCxRQUFRO1lBYlIsTUFBTTtZQTZCTixlQUFlO1lBQ2YsWUFBWTtZQXloQmdCLEtBQUssdUJBQTlCLFFBQVE7WUFDa0IsTUFBTSx1QkFBaEMsUUFBUTs7OytCQWRWLFNBQVMsU0FBQyxpQkFBaUI7eUJBQzNCLFlBQVksU0FBQyxPQUFPOzs7O0lBSHJCLDZCQUF5Qjs7SUFDekIsZ0NBQWdDOztJQUNoQyxzQ0FBMkQ7O0lBYXpELDBCQUErQjs7SUFDL0IsMkJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9wdGlvbmFsXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBQbGF0Zm9ybSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIEFsaWduQWxpYXMsXG4gIFlQb3NpdGlvbixcbiAgWFBvc2l0aW9uLFxuICBEaXIsXG4gIEx5UmlwcGxlU2VydmljZSxcbiAgTHlGb2N1c1N0YXRlLFxuICBMWV9DT01NT05fU1RZTEVTLFxuICBSZXNpemVTZXJ2aWNlLFxuICBzY3JvbGxXaXRoQW5pbWF0aW9uLFxuICB0b0Jvb2xlYW5cbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCdXR0b24gfSBmcm9tICdAYWx5bGUvdWkvYnV0dG9uJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5jb25zdCBERUZBVUxUX0lORElDQVRPUl9DT0xPUiA9ICdhY2NlbnQnO1xuY29uc3QgREVGQVVMVF9FTEVWQVRJT04gPSA0O1xuY29uc3QgREVGQVVMVF9IRUFERVJfUExBQ0VNRU5UID0gJ2Fib3ZlJztcbmV4cG9ydCB0eXBlIEFsaWduVGFicyA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ3N0cmV0Y2gnIHwgJ2Jhc2VsaW5lJztcbmV4cG9ydCB0eXBlIEx5VGFic0hlYWRlclBsYWNlbWVudCA9ICdiZWZvcmUnIHwgJ2FmdGVyJyB8ICdhYm92ZScgfCAnYmVsb3cnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgdGFiOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4J1xuICB9LFxuICAvKiogVGFiIGNvbnRlbnQgKi9cbiAgY29udGVudENvbnRhaW5lcjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBmbGV4R3JvdzogMVxuICB9LFxuICAvKiogVGFiIGhlYWRlciAqL1xuICB0YWJzTGFiZWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHRhYnNMYWJlbHNDb250YWluZXI6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgJyZ7c2Nyb2xsYWJsZX0nOiB7XG4gICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGJvcmRlcjogMCxcbiAgICBtaW5XaWR0aDogJzcycHgnLFxuICAgIHBhZGRpbmc6ICcwIDI0cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGhlaWdodDogJzQ4cHgnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSksXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDI4NTdlbScsXG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBvcGFjaXR5OiAuNyxcbiAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICBwYWRkaW5nOiAnMCAxMnB4J1xuICAgIH1cbiAgfSxcbiAgdGFiTGFiZWxBY3RpdmU6IHtcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRhYkNvbnRlbnRzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHRyYW5zaXRpb246ICc0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgIGhlaWdodDogJzEwMCUnXG4gIH0sXG4gIHRhYkNvbnRlbnQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgdGFic0luZGljYXRvcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgdGFic0luZGljYXRvckZvclNlcnZlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIHJpcHBsZUNvbnRhaW5lcjoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgc2Nyb2xsYWJsZTogbnVsbFxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlUYWJzQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlUYWJzTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIobWl4aW5CZyhtaXhpbkVsZXZhdGlvbihtaXhpblNoYWRvd0NvbG9yKEx5VGFic0Jhc2UpKSkpO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5VGFiTGFiZWxCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5VGFiTGFiZWxNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluQ29sb3IoXG4gICAgbWl4aW5SYWlzZWQoXG4gICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5VGFiTGFiZWxCYXNlKSkpKSkpKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ2x5VGFicycsXG4gIGlucHV0czogW1xuICAgICdiZycsICdlbGV2YXRpb24nLCAnc2hhZG93Q29sb3InXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzIGV4dGVuZHMgTHlUYWJzTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIF9zZWxlY3RlZEluZGV4ID0gMDtcbiAgX3NlbGVjdGVkQmVmb3JlSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkVGFiOiBMeVRhYjtcbiAgX3NlbGVjdGVkQmVmb3JlVGFiOiBMeVRhYjtcbiAgX2lzVmlld0luaXRMb2FkZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3RhYnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGVhZGVyUGxhY2VtZW50OiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQ7XG4gIHByaXZhdGUgX2hlYWRlclBsYWNlbWVudENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FsaWduVGFiczogQWxpZ25UYWJzO1xuICBwcml2YXRlIF9hbGlnblRhYnNDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF90ZXh0Q29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGV4dENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RhYlJlc2l6ZVN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zY3JvbGxhYmxlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ3RhYnMnKSB0YWJzUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJDb250ZW50cycpIHRhYkNvbnRlbnRzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJzSW5kaWNhdG9yJykgdGFic0luZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleE9uQ2hhbmdlOiAnYXV0bycgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgpXG4gIHNldCBzY3JvbGxhYmxlKHZhbDogYW55KSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zY3JvbGxhYmxlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3Njcm9sbGFibGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zY3JvbGxhYmxlKTtcbiAgICB9XG4gICAgdGhpcy5fc2Nyb2xsYWJsZSA9IG5ld1ZhbDtcbiAgfVxuICBnZXQgc2Nyb2xsYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsYWJsZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgaW5kaWNhdG9yQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmluZGljYXRvckNvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgay10YWItaW5kaWNhdG9yLWNvbG9yOiR7dmFsfWAsXG4gICAgICAgIHRoZW1lID0+IChcbiAgICAgICAgICBgY29sb3I6JHt0aGVtZS5jb2xvck9mKHZhbCl9O2BcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3NcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCBpbmRpY2F0b3JDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGVhZGVyUGxhY2VtZW50KHZhbDogTHlUYWJzSGVhZGVyUGxhY2VtZW50KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5oZWFkZXJQbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudCA9IHZhbDtcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudENsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlUYWJzLmhlYWRlclBsYWNlbWVudDoke3ZhbH1gLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBsZXQgZmxleERpcmVjdGlvbkNvbnRhaW5lcjogc3RyaW5nO1xuICAgICAgICBsZXQgZmxleERpcmVjdGlvbiA9IHRoaXMuX2dldEZsZXhEaXJlY3Rpb24odmFsKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgICAgIGxldCBoZWlnaHQ6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIGxldCB3aWR0aDogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgbGV0IGhlaWdodFNlcnZlcjogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgbGV0IHdpZHRoU2VydmVyOiBzdHJpbmcgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgICAgIGNhc2UgWVBvc2l0aW9uLmFib3ZlOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdjb2x1bW4nO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBZUG9zaXRpb24uYmVsb3c7XG4gICAgICAgICAgICBoZWlnaHQgPSAnMnB4JztcbiAgICAgICAgICAgIHdpZHRoU2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBZUG9zaXRpb24uYmVsb3c6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ2NvbHVtbi1yZXZlcnNlJztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWVBvc2l0aW9uLmFib3ZlO1xuICAgICAgICAgICAgaGVpZ2h0ID0gJzJweCc7XG4gICAgICAgICAgICB3aWR0aFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWFBvc2l0aW9uLmJlZm9yZTpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAncm93JztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWFBvc2l0aW9uLmFmdGVyO1xuICAgICAgICAgICAgd2lkdGggPSAnMnB4JztcbiAgICAgICAgICAgIGhlaWdodFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWFBvc2l0aW9uLmFmdGVyOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdyb3ctcmV2ZXJzZSc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFhQb3NpdGlvbi5iZWZvcmU7XG4gICAgICAgICAgICB3aWR0aCA9ICcycHgnO1xuICAgICAgICAgICAgaGVpZ2h0U2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMeVRhYnM6IHZhbHVlOiR7dmFsfSBkbyBub3QgaXMgdmFsaWQgZm9yIFxcYGhlYWRlclBsYWNlbWVudFxcYGApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB2YWwgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9YF06IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGZsZXhEaXJlY3Rpb25Db250YWluZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcn0sJiAuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcn1gXToge1xuICAgICAgICAgICAgW3Bvc2l0aW9uXTogMCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyfWBdOiB7XG4gICAgICAgICAgICB3aWR0aDogd2lkdGhTZXJ2ZXIsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFNlcnZlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfSwmIC4ke3RoaXMuY2xhc3Nlcy50YWJDb250ZW50c31gXTogeyBmbGV4RGlyZWN0aW9uIH0sXG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMudGFiQ29udGVudHN9YF06IHsgZmxleERpcmVjdGlvbiB9XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50Q2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWSk7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZXNPZlNlbGVjdGVkVGFiKCk7XG4gICAgfVxuICB9XG4gIGdldCBoZWFkZXJQbGFjZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlclBsYWNlbWVudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnblRhYnModmFsOiBBbGlnblRhYnMpIHtcbiAgICB0aGlzLl9hbGlnblRhYnMgPSB2YWw7XG4gICAgdGhpcy5fYWxpZ25UYWJzQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUFsaWduVGFiczogJHt2YWx9YCxcbiAgICAoXG4gICAgICB2YWwgPT09ICdzdHJldGNoJyA/IHtcbiAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfSAuJHt0aGlzLmNsYXNzZXMudGFifWBdOiB7XG4gICAgICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgICAgIGZsZXhHcm93OiAxXG4gICAgICAgIH1cbiAgICAgIH0gOiB7XG4gICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc31gXToge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB2YWwgaW4gQWxpZ25BbGlhcyA/IEFsaWduQWxpYXNbdmFsXSA6IHZhbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKSxcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fYWxpZ25UYWJzQ2xhc3MsXG4gICAgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBhbGlnblRhYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduVGFicztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0ZXh0Q29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZXh0Q29sb3IgPSB2YWw7XG4gICAgdGhpcy5fdGV4dENvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseVRhYnMudGV4dENvbG9yOiR7dmFsfWAsXG4gICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFiTGFiZWxBY3RpdmV9YF06IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKVxuICAgICAgfVxuICAgIH0pLFxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl90ZXh0Q29sb3JDbGFzcyxcbiAgICBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IHRleHRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dENvbG9yO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlSW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodmFsLCAnYXV0bycpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIgPSB0aGlzLl9zZWxlY3RlZFRhYjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkSW5kZXgpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlc09mU2VsZWN0ZWRUYWIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5VGFiKSkgdGFic0xpc3Q6IFF1ZXJ5TGlzdDxMeVRhYj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogUmVzaXplU2VydmljZVxuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLl9pc1ZpZXdJbml0TG9hZGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMudGFic1JlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGNvbnN0IHRhYnNJbmRpY2F0b3JFbCA9IHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFic0luZGljYXRvckVsLCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcik7XG4gICAgLyoqIFNldCBkZWZhdWx0IENvbG9yICovXG4gICAgaWYgKCF0aGlzLmluZGljYXRvckNvbG9yICYmICF0aGlzLmJnICYmICF0aGlzLnRleHRDb2xvciAmJiAhdGhpcy5lbGV2YXRpb24pIHtcbiAgICAgIHRoaXMuaW5kaWNhdG9yQ29sb3IgPSBERUZBVUxUX0lORElDQVRPUl9DT0xPUjtcbiAgICAgIHRoaXMuYmcgPSBERUZBVUxUX0JHO1xuICAgICAgdGhpcy5lbGV2YXRpb24gPSBERUZBVUxUX0VMRVZBVElPTjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhlYWRlclBsYWNlbWVudCkge1xuICAgICAgdGhpcy5oZWFkZXJQbGFjZW1lbnQgPSBERUZBVUxUX0hFQURFUl9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24gPSB0aGlzLnRhYnNMaXN0LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4LCB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX2lzVmlld0luaXRMb2FkZWQgPSB0cnVlO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3RhYlJlc2l6ZVN1YiA9IHRoaXMuX3Jlc2l6ZVNlcnZpY2UucmVzaXplJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGhpcy5fc2VsZWN0ZWRUYWIpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFRhYi5fdGFiTGFiZWwuX3VwZGF0ZVRhYlNjcm9sbCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLl90YWJSZXNpemVTdWIpIHtcbiAgICAgIHRoaXMuX3RhYlJlc2l6ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbmRJbmRleChzZWxlY3RlZEluZGV4OiBudW1iZXIsIGluZGV4OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMudGFic0xpc3QpIHtcbiAgICAgIHJldHVybiBzZWxlY3RlZEluZGV4O1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mTGFzdFRhYiA9IHRoaXMudGFic0xpc3QubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInID8gaW5kZXggOiBzZWxlY3RlZEluZGV4O1xuICAgIHJldHVybiBjdXJyZW50SW5kZXggPCAwID8gMCA6IGN1cnJlbnRJbmRleCA+IGluZGV4T2ZMYXN0VGFiID8gaW5kZXhPZkxhc3RUYWIgOiBjdXJyZW50SW5kZXg7XG4gIH1cblxuICBfdXBkYXRlSW5kaWNhdG9yKGN1cnJlbnRUYWI6IEx5VGFiLCBiZWZvcmVUYWI/OiBMeVRhYik6IHZvaWQge1xuICAgIGlmIChjdXJyZW50VGFiKSB7XG4gICAgICBpZiAoYmVmb3JlVGFiKSB7XG4gICAgICAgIGJlZm9yZVRhYi5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGJlZm9yZVRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2NsYXNzJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBlbCA9IGN1cnJlbnRUYWIuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCByZWN0cyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAodGhpcy5oZWFkZXJQbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5hZnRlciB8fCB0aGlzLmhlYWRlclBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmJlZm9yZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgYCR7cmVjdHMuaGVpZ2h0fXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBgJHtlbC5vZmZzZXRUb3B9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdsZWZ0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHtyZWN0cy53aWR0aH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIGAke2VsLm9mZnNldExlZnR9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAndG9wJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gdGhpcy5oZWFkZXJQbGFjZW1lbnQ7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleENsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5VGFicy5zZWxlY3RlZEluZGV4OiR7aW5kZXh9KyR7cGxhY2VtZW50fWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGxldCBzaWduID0gMTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fZ2V0RmxleERpcmVjdGlvbihwbGFjZW1lbnQpID09PSAnY29sdW1uJyA/ICdZJyA6ICdYJztcbiAgICAgIGlmICh0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgfHwgcG9zaXRpb24gPT09ICdZJykge1xuICAgICAgICBzaWduID0gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUke3Bvc2l0aW9ufSgke2luZGV4ICogMTAwICogc2lnbn0lKWBcbiAgICAgIH07XG4gICAgfSwgdGhpcy50YWJDb250ZW50cy5uYXRpdmVFbGVtZW50LCB0aGlzLl9zZWxlY3RlZEluZGV4Q2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFiQ29udGVudHMubmF0aXZlRWxlbWVudCwgdGhpcy5fc2VsZWN0ZWRJbmRleENsYXNzKTtcbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGxvYWRUZW1wbGF0ZSh0YWI6IEx5VGFiLCBpbmRleDogbnVtYmVyKTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PiB8IG51bGwge1xuICAgIHRhYi5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgLy8gc2V0IDAgaWYgaXMgbnVsbFxuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGFiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiogZm9yIHNlcnZlciAqL1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fc2VsZWN0ZWRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdGVkVGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xvckNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRhYi5fdGFiTGFiZWwuX3VwZGF0ZVRhYlN0YXRlKCk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICByZXR1cm4gdGFiLnRlbXBsYXRlUmVmTGF6eSB8fCB0YWIudGVtcGxhdGVSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEZsZXhEaXJlY3Rpb24odmFsOiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQpIHtcbiAgICBsZXQgZmxleERpcmVjdGlvbjogc3RyaW5nO1xuICAgIGlmICh2YWwgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB2YWwgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgZmxleERpcmVjdGlvbiA9ICdyb3cnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgfVxuICAgIHJldHVybiBmbGV4RGlyZWN0aW9uO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiIGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgX2lzQnJvd3NlciA9IFBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgQENvbnRlbnRDaGlsZChMeVRhYkNvbnRlbnQsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdGVtcGxhdGVSZWZMYXp5OiBUZW1wbGF0ZVJlZjxMeVRhYkNvbnRlbnQ+O1xuICBAVmlld0NoaWxkKCdfdGVtcGxhdGVOZ0NvbnRlbnQnKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndGFiSW5kaWNhdG9yJykgdGFiSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlUYWJMYWJlbCkpIF90YWJMYWJlbDogTHlUYWJMYWJlbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90YWJzOiBMeVRhYnMsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMudGFiKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktdGFiLWxhYmVsXScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWxhYmVsLmh0bWwnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2Rpc2FibGVkXSc6ICdkaXNhYmxlZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYkxhYmVsIGV4dGVuZHMgTHlCdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW47XG4gIF9pc0Jyb3dzZXIgPSBQbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicpIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGlja1RhYigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX3RhYi5pbmRleDtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgX2VsOiBFbGVtZW50UmVmLFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF90YWI6IEx5VGFiLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYnM6IEx5VGFic1xuICApIHtcbiAgICBzdXBlcihfZWwsIF9yZW5kZXJlciwgX3RoZW1lLCBfbmdab25lLCBfcmlwcGxlU2VydmljZSwgX2ZvY3VzU3RhdGUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLmxhYmVsKTtcbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlVGFiU3RhdGUoKSB7XG4gICAgLy8gdXBkYXRlIHN0eWxlcyBmb3IgYWN0aXZlIHRhYlxuICAgIGlmICh0aGlzLl90YWJzLl9zZWxlY3RlZEluZGV4ID09PSB0aGlzLl90YWIuaW5kZXgpIHtcbiAgICAgIGlmICghdGhpcy5fYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy50YWJMYWJlbEFjdGl2ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVRhYlNjcm9sbCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy50YWJMYWJlbEFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRhYlNjcm9sbCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMuX3RhYnMuc2Nyb2xsYWJsZSkge1xuICAgICAgY29uc3QgdGFiID0gdGhpcy5fdGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdGFiQ29udGFpbmVyID0gdGhpcy5fdGFicy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFiQ29udGFpbmVyLnNjcm9sbFdpZHRoICE9PSB0YWJDb250YWluZXIub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5fdGhlbWUuY29uZmlnLmRpcmVjdGlvbjtcbiAgICAgICAgY29uc3QgbWF4ID0gdGFiQ29udGFpbmVyLnNjcm9sbFdpZHRoIC0gdGFiQ29udGFpbmVyLm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBvZmZzZXRCZWZvcmUgPSBkaXIgPT09IERpci5ydGxcbiAgICAgICAgPyBtYXggKyB0YWIub2Zmc2V0TGVmdFxuICAgICAgICA6IHRhYi5vZmZzZXRMZWZ0O1xuICAgICAgICBjb25zdCBsID0gb2Zmc2V0QmVmb3JlICsgdGFiLm9mZnNldFdpZHRoIC8gMiAtIHRhYkNvbnRhaW5lci5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IGwgPj0gbWF4ID8gbWF4IDogbCA8PSAwID8gMCA6IGw7XG4gICAgICAgIHNjcm9sbFdpdGhBbmltYXRpb24odGhpcy5fdGFicy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQsIG5ld1ZhbCwgMzUwLCAneCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgfVxufVxuXG4vKipcbiAqIGRlbW8gYmFzaWNcbiAqIDxseS10YWJzIHdpdGhDb2xvcj1cImFjY2VudFwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8L2J1dHRvbj5cbiAqICAgICBDb250ZW50XG4gKiAgIDwvbHktdGFiPlxuICogICA8bHktdGFiPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8L2J1dHRvbj5cbiAqICAgICBDb250ZW50XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqXG4gKiBkZW1vIGxhenkgbG9hZGluZ1xuICogPGx5LXRhYnMgd2l0aEJnPVwicHJpbWFyeVwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8L2J1dHRvbj5cbiAqICAgICA8bmctdGVtcGxhdGUgbHktdGFiLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbiAqICAgPC9seS10YWI+XG4gKiAgIC4uLlxuICogPC9seS10YWJzPlxuICogPT4gc2VsZWN0ZWRJbmRleE9uQ2hhbmdlLCBkZWZhdWx0OiBhdXRvLCBvcHRzOiBudW1iZXIsIHdpdGggYXV0bywgdGhlIHNlbGVjdGVkSW5kZXggPSBjdXJyZW50IG8gY3VycmVudC0xIG9yIGxhdGVzdFxuICovXG4iXX0=