import { Directive, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, Output, Renderer2, ViewChild, ViewEncapsulation, Optional, NgModule } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, Platform, AlignAlias, YPosition, XPosition, Dir, LyRippleService, LyFocusState, LY_COMMON_STYLES, WinResize, scrollWithAnimation, toBoolean, NgTranscludeModule, LyCommonModule, LyThemeModule } from '@alyle/ui';
import { LyButton } from '@alyle/ui/button';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    { type: Directive, args: [{ selector: '[ly-tab-content]' },] }
];
/** @nocollapse */
LyTabContent.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
const STYLES = (theme) => ({
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
/**
 * \@docs-private
 */
class LyTabsBase {
    /**
     * @param {?} _theme
     */
    constructor(_theme) {
        this._theme = _theme;
    }
}
/**
 * \@docs-private
 * @type {?}
 */
const LyTabsMixinBase = mixinStyleUpdater(mixinBg(mixinElevation(mixinShadowColor(LyTabsBase))));
/**
 * \@docs-private
 */
class LyTabLabelBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/**
 * \@docs-private
 * @type {?}
 */
const LyTabLabelMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyTabLabelBase)))))))));
class LyTabs extends LyTabsMixinBase {
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
        this.classes = this.theme.addStyleSheet(STYLES, STYLE_PRIORITY);
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
                beforeTab._renderer.removeAttribute(beforeTab._tabIndicator.nativeElement, 'class');
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
    { type: WinResize }
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
class LyTab {
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
    _templateRefLazy: [{ type: ContentChild, args: [LyTabContent, { read: TemplateRef },] }],
    _templateRef: [{ type: ViewChild, args: ['_templateNgContent',] }],
    _tabIndicator: [{ type: ViewChild, args: ['tabIndicator',] }],
    _tabLabel: [{ type: ContentChild, args: [forwardRef(() => LyTabLabel),] }]
};
class LyTabLabel extends LyButton {
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
    _onClickTab() {
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
    _onClickTab: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyTabsModule {
}
LyTabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [LyThemeModule, CommonModule, LyCommonModule, NgTranscludeModule],
                exports: [LyCommonModule, LyTabs, LyTab, LyTabLabel, LyTabContent],
                declarations: [LyTabs, LyTab, LyTabLabel, LyTabContent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyTabsBase, LyTabsMixinBase, LyTabLabelBase, LyTabLabelMixinBase, LyTabs, LyTab, LyTabLabel, LyTabsModule, LyTabContent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFiLWNvbnRlbnQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tseS10YWItY29udGVudF0nfSlcbmV4cG9ydCBjbGFzcyBMeVRhYkNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9wdGlvbmFsXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBQbGF0Zm9ybSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIEFsaWduQWxpYXMsXG4gIFlQb3NpdGlvbixcbiAgWFBvc2l0aW9uLFxuICBEaXIsXG4gIEx5UmlwcGxlU2VydmljZSxcbiAgTHlGb2N1c1N0YXRlLFxuICBMWV9DT01NT05fU1RZTEVTLFxuICBXaW5SZXNpemUsXG4gIHNjcm9sbFdpdGhBbmltYXRpb24sXG4gIHRvQm9vbGVhblxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUJ1dHRvbiB9IGZyb20gJ0BhbHlsZS91aS9idXR0b24nO1xuaW1wb3J0IHsgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9CRyA9ICdwcmltYXJ5JztcbmNvbnN0IERFRkFVTFRfSU5ESUNBVE9SX0NPTE9SID0gJ2FjY2VudCc7XG5jb25zdCBERUZBVUxUX0VMRVZBVElPTiA9IDQ7XG5jb25zdCBERUZBVUxUX0hFQURFUl9QTEFDRU1FTlQgPSAnYWJvdmUnO1xuZXhwb3J0IHR5cGUgQWxpZ25UYWJzID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnc3RyZXRjaCcgfCAnYmFzZWxpbmUnO1xuZXhwb3J0IHR5cGUgTHlUYWJzSGVhZGVyUGxhY2VtZW50ID0gJ2JlZm9yZScgfCAnYWZ0ZXInIHwgJ2Fib3ZlJyB8ICdiZWxvdyc7XG5cbmNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICB0YWI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG4gIH0sXG4gIC8qKiBUYWIgY29udGVudCAqL1xuICBjb250ZW50Q29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIC8qKiBUYWIgaGVhZGVyICovXG4gIHRhYnNMYWJlbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgdGFic0xhYmVsc0NvbnRhaW5lcjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAnJntzY3JvbGxhYmxlfSc6IHtcbiAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbGFiZWw6IHtcbiAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgYm9yZGVyOiAwLFxuICAgIG1pbldpZHRoOiAnNzJweCcsXG4gICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplKSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMjg1N2VtJyxcbiAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIG9wYWNpdHk6IC43LFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIHBhZGRpbmc6ICcwIDEycHgnXG4gICAgfVxuICB9LFxuICB0YWJMYWJlbEFjdGl2ZToge1xuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgdGFiQ29udGVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfSxcbiAgdGFiQ29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZmxleFNocmluazogMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgaGVpZ2h0OiAnMnB4JyxcbiAgICB0cmFuc2l0aW9uOiAnNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJyxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yRm9yU2VydmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgcmlwcGxlQ29udGFpbmVyOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBzY3JvbGxhYmxlOiBudWxsXG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVRhYnNCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVRhYnNNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihtaXhpbkJnKG1peGluRWxldmF0aW9uKG1peGluU2hhZG93Q29sb3IoTHlUYWJzQmFzZSkpKSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlUYWJMYWJlbE1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlUYWJMYWJlbEJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJywgJ2VsZXZhdGlvbicsICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgZXh0ZW5kcyBMeVRhYnNNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgX3NlbGVjdGVkSW5kZXggPSAwO1xuICBfc2VsZWN0ZWRCZWZvcmVJbmRleDogbnVtYmVyO1xuICBfc2VsZWN0ZWRUYWI6IEx5VGFiO1xuICBfc2VsZWN0ZWRCZWZvcmVUYWI6IEx5VGFiO1xuICBfaXNWaWV3SW5pdExvYWRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3JDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oZWFkZXJQbGFjZW1lbnQ6IEx5VGFic0hlYWRlclBsYWNlbWVudDtcbiAgcHJpdmF0ZSBfaGVhZGVyUGxhY2VtZW50Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfYWxpZ25UYWJzOiBBbGlnblRhYnM7XG4gIHByaXZhdGUgX2FsaWduVGFic0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RleHRDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF90ZXh0Q29sb3JDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFiUmVzaXplU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbGFibGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgndGFicycpIHRhYnNSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnRzJykgdGFiQ29udGVudHM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYnNJbmRpY2F0b3InKSB0YWJzSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4T25DaGFuZ2U6ICdhdXRvJyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KClcbiAgc2V0IHNjcm9sbGFibGUodmFsOiBhbnkpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNjcm9sbGFibGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc2Nyb2xsYWJsZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNjcm9sbGFibGUpO1xuICAgIH1cbiAgICB0aGlzLl9zY3JvbGxhYmxlID0gbmV3VmFsO1xuICB9XG4gIGdldCBzY3JvbGxhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxhYmxlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbmRpY2F0b3JDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuaW5kaWNhdG9yQ29sb3IpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBrLXRhYi1pbmRpY2F0b3ItY29sb3I6JHt2YWx9YCxcbiAgICAgICAgdGhlbWUgPT4gKFxuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX07YFxuICAgICAgICApLFxuICAgICAgICB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGluZGljYXRvckNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoZWFkZXJQbGFjZW1lbnQodmFsOiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmhlYWRlclBsYWNlbWVudCkge1xuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50ID0gdmFsO1xuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseVRhYnMuaGVhZGVyUGxhY2VtZW50OiR7dmFsfWAsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGxldCBmbGV4RGlyZWN0aW9uQ29udGFpbmVyOiBzdHJpbmc7XG4gICAgICAgIGxldCBmbGV4RGlyZWN0aW9uID0gdGhpcy5fZ2V0RmxleERpcmVjdGlvbih2YWwpO1xuICAgICAgICBsZXQgcG9zaXRpb246IHN0cmluZztcbiAgICAgICAgbGV0IGhlaWdodDogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgbGV0IHdpZHRoOiBzdHJpbmcgPSBudWxsO1xuICAgICAgICBsZXQgaGVpZ2h0U2VydmVyOiBzdHJpbmcgPSBudWxsO1xuICAgICAgICBsZXQgd2lkdGhTZXJ2ZXI6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICAgICAgY2FzZSBZUG9zaXRpb24uYWJvdmU6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ2NvbHVtbic7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFlQb3NpdGlvbi5iZWxvdztcbiAgICAgICAgICAgIGhlaWdodCA9ICcycHgnO1xuICAgICAgICAgICAgd2lkdGhTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFlQb3NpdGlvbi5iZWxvdzpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAnY29sdW1uLXJldmVyc2UnO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBZUG9zaXRpb24uYWJvdmU7XG4gICAgICAgICAgICBoZWlnaHQgPSAnMnB4JztcbiAgICAgICAgICAgIHdpZHRoU2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBYUG9zaXRpb24uYmVmb3JlOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdyb3cnO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBYUG9zaXRpb24uYWZ0ZXI7XG4gICAgICAgICAgICB3aWR0aCA9ICcycHgnO1xuICAgICAgICAgICAgaGVpZ2h0U2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBYUG9zaXRpb24uYWZ0ZXI6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ3Jvdy1yZXZlcnNlJztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWFBvc2l0aW9uLmJlZm9yZTtcbiAgICAgICAgICAgIHdpZHRoID0gJzJweCc7XG4gICAgICAgICAgICBoZWlnaHRTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEx5VGFiczogdmFsdWU6JHt2YWx9IGRvIG5vdCBpcyB2YWxpZCBmb3IgXFxgaGVhZGVyUGxhY2VtZW50XFxgYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbCA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IHZhbCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbiA9ICdyb3cnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn1gXToge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogZmxleERpcmVjdGlvbkNvbnRhaW5lclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yfSwmIC4ke3RoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyfWBdOiB7XG4gICAgICAgICAgICBbcG9zaXRpb25dOiAwLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgLiR7dGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXJ9YF06IHtcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aFNlcnZlcixcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0U2VydmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNMYWJlbHN9LCYgLiR7dGhpcy5jbGFzc2VzLnRhYkNvbnRlbnRzfWBdOiB7IGZsZXhEaXJlY3Rpb24gfSxcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy50YWJDb250ZW50c31gXTogeyBmbGV4RGlyZWN0aW9uIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9oZWFkZXJQbGFjZW1lbnRDbGFzcyxcbiAgICAgIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlc09mU2VsZWN0ZWRUYWIoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGhlYWRlclBsYWNlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyUGxhY2VtZW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGFsaWduVGFicyh2YWw6IEFsaWduVGFicykge1xuICAgIHRoaXMuX2FsaWduVGFicyA9IHZhbDtcbiAgICB0aGlzLl9hbGlnblRhYnNDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5QWxpZ25UYWJzOiAke3ZhbH1gLFxuICAgIChcbiAgICAgIHZhbCA9PT0gJ3N0cmV0Y2gnID8ge1xuICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNMYWJlbHN9IC4ke3RoaXMuY2xhc3Nlcy50YWJ9YF06IHtcbiAgICAgICAgICBmbGV4QmFzaXM6IDAsXG4gICAgICAgICAgZmxleEdyb3c6IDFcbiAgICAgICAgfVxuICAgICAgfSA6IHtcbiAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfWBdOiB7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IHZhbCBpbiBBbGlnbkFsaWFzID8gQWxpZ25BbGlhc1t2YWxdIDogdmFsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApLFxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl9hbGlnblRhYnNDbGFzcyxcbiAgICBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IGFsaWduVGFicygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ25UYWJzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHRleHRDb2xvcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3RleHRDb2xvciA9IHZhbDtcbiAgICB0aGlzLl90ZXh0Q29sb3JDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5VGFicy50ZXh0Q29sb3I6JHt2YWx9YCxcbiAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJMYWJlbEFjdGl2ZX1gXToge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZih2YWwpXG4gICAgICB9XG4gICAgfSksXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX3RleHRDb2xvckNsYXNzLFxuICAgIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICBnZXQgdGV4dENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0Q29sb3I7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWw6IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVJbmRleCA9IHRoaXMuX3NlbGVjdGVkSW5kZXggYXMgbnVtYmVyO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2ZpbmRJbmRleCh2YWwsICdhdXRvJyk7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZVRhYiA9IHRoaXMuX3NlbGVjdGVkVGFiO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQodGhpcy5fc2VsZWN0ZWRJbmRleCk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlUYWIpKSB0YWJzTGlzdDogUXVlcnlMaXN0PEx5VGFiPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBXaW5SZXNpemVcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5faXNWaWV3SW5pdExvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLnRhYnNSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBjb25zdCB0YWJzSW5kaWNhdG9yRWwgPSB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRhYnNJbmRpY2F0b3JFbCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3IpO1xuICAgIC8qKiBTZXQgZGVmYXVsdCBDb2xvciAqL1xuICAgIGlmICghdGhpcy5pbmRpY2F0b3JDb2xvciAmJiAhdGhpcy5iZyAmJiAhdGhpcy50ZXh0Q29sb3IgJiYgIXRoaXMuZWxldmF0aW9uKSB7XG4gICAgICB0aGlzLmluZGljYXRvckNvbG9yID0gREVGQVVMVF9JTkRJQ0FUT1JfQ09MT1I7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICAgIHRoaXMuZWxldmF0aW9uID0gREVGQVVMVF9FTEVWQVRJT047XG4gICAgfVxuICAgIGlmICghdGhpcy5oZWFkZXJQbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuaGVhZGVyUGxhY2VtZW50ID0gREVGQVVMVF9IRUFERVJfUExBQ0VNRU5UO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uID0gdGhpcy50YWJzTGlzdC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCwgdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMudGFic1JlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9pc1ZpZXdJbml0TG9hZGVkID0gdHJ1ZTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl90YWJSZXNpemVTdWIgPSB0aGlzLl9yZXNpemVTZXJ2aWNlLnJlc2l6ZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRoaXMuX3NlbGVjdGVkVGFiKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIuX3RhYkxhYmVsLl91cGRhdGVUYWJTY3JvbGwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5fdGFiUmVzaXplU3ViKSB7XG4gICAgICB0aGlzLl90YWJSZXNpemVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW5kZXgoc2VsZWN0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYnNMaXN0KSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkxhc3RUYWIgPSB0aGlzLnRhYnNMaXN0Lmxlbmd0aCAtIDE7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJyA/IGluZGV4IDogc2VsZWN0ZWRJbmRleDtcbiAgICByZXR1cm4gY3VycmVudEluZGV4IDwgMCA/IDAgOiBjdXJyZW50SW5kZXggPiBpbmRleE9mTGFzdFRhYiA/IGluZGV4T2ZMYXN0VGFiIDogY3VycmVudEluZGV4O1xuICB9XG5cbiAgX3VwZGF0ZUluZGljYXRvcihjdXJyZW50VGFiOiBMeVRhYiwgYmVmb3JlVGFiPzogTHlUYWIpOiB2b2lkIHtcbiAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgaWYgKGJlZm9yZVRhYikge1xuICAgICAgICBiZWZvcmVUYWIuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShiZWZvcmVUYWIuX3RhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCAnY2xhc3MnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsID0gY3VycmVudFRhYi5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHJlY3RzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmICh0aGlzLmhlYWRlclBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmFmdGVyIHx8IHRoaXMuaGVhZGVyUGxhY2VtZW50ID09PSBYUG9zaXRpb24uYmVmb3JlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBgJHtyZWN0cy5oZWlnaHR9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGAke2VsLm9mZnNldFRvcH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3JlY3RzLndpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgYCR7ZWwub2Zmc2V0TGVmdH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd0b3AnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdHlsZXNPZlNlbGVjdGVkVGFiKCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLmhlYWRlclBsYWNlbWVudDtcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlUYWJzLnNlbGVjdGVkSW5kZXg6JHtpbmRleH0rJHtwbGFjZW1lbnR9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgbGV0IHNpZ24gPSAxO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLl9nZXRGbGV4RGlyZWN0aW9uKHBsYWNlbWVudCkgPT09ICdjb2x1bW4nID8gJ1knIDogJ1gnO1xuICAgICAgaWYgKHRoZW1lLmRpcmVjdGlvbiA9PT0gRGlyLmx0ciB8fCBwb3NpdGlvbiA9PT0gJ1knKSB7XG4gICAgICAgIHNpZ24gPSAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSR7cG9zaXRpb259KCR7aW5kZXggKiAxMDAgKiBzaWdufSUpYFxuICAgICAgfTtcbiAgICB9LCB0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJDb250ZW50cy5uYXRpdmVFbGVtZW50LCB0aGlzLl9zZWxlY3RlZEluZGV4Q2xhc3MpO1xuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbG9hZFRlbXBsYXRlKHRhYjogTHlUYWIsIGluZGV4OiBudW1iZXIpOiBUZW1wbGF0ZVJlZjxMeVRhYkNvbnRlbnQ+IHwgbnVsbCB7XG4gICAgdGFiLmluZGV4ID0gaW5kZXg7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICAvLyBzZXQgMCBpZiBpcyBudWxsXG4gICAgICB0aGlzLl9zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0YWIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKiBmb3Igc2VydmVyICovXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYi5fdGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdGVkVGFiLl90YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0YWIuX3RhYkxhYmVsLl91cGRhdGVUYWJTdGF0ZSgpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgcmV0dXJuIHRhYi5fdGVtcGxhdGVSZWZMYXp5IHx8IHRhYi5fdGVtcGxhdGVSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEZsZXhEaXJlY3Rpb24odmFsOiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQpIHtcbiAgICBsZXQgZmxleERpcmVjdGlvbjogc3RyaW5nO1xuICAgIGlmICh2YWwgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB2YWwgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgZmxleERpcmVjdGlvbiA9ICdyb3cnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgfVxuICAgIHJldHVybiBmbGV4RGlyZWN0aW9uO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWIuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiIGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqIEN1cnJlbnQgdGFiIGluZGV4ICovXG4gIGluZGV4OiBudW1iZXI7XG4gIF9pc0Jyb3dzZXIgPSBQbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlUYWJDb250ZW50LCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIF90ZW1wbGF0ZVJlZkxhenk6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD47XG4gIEBWaWV3Q2hpbGQoJ190ZW1wbGF0ZU5nQ29udGVudCcpIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndGFiSW5kaWNhdG9yJykgX3RhYkluZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5VGFiTGFiZWwpKSBfdGFiTGFiZWw6IEx5VGFiTGFiZWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGFiczogTHlUYWJzLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LXRhYi1sYWJlbF0nLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1sYWJlbC5odG1sJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdLFxuICBob3N0OiB7XG4gICAgJ1tkaXNhYmxlZF0nOiAnZGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbCBleHRlbmRzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuO1xuICBfaXNCcm93c2VyID0gUGxhdGZvcm0uaXNCcm93c2VyO1xuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9vbkNsaWNrVGFiKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fdGFicy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fdGFiLmluZGV4O1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBfZWw6IEVsZW1lbnRSZWYsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYjogTHlUYWIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfdGFiczogTHlUYWJzXG4gICkge1xuICAgIHN1cGVyKF9lbCwgX3JlbmRlcmVyLCBfdGhlbWUsIF9uZ1pvbmUsIF9yaXBwbGVTZXJ2aWNlLCBfZm9jdXNTdGF0ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMubGFiZWwpO1xuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVUYWJTdGF0ZSgpIHtcbiAgICAvLyB1cGRhdGUgc3R5bGVzIGZvciBhY3RpdmUgdGFiXG4gICAgaWYgKHRoaXMuX3RhYnMuX3NlbGVjdGVkSW5kZXggPT09IHRoaXMuX3RhYi5pbmRleCkge1xuICAgICAgaWYgKCF0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVGFiU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlVGFiU2Nyb2xsKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdGhpcy5fdGFicy5zY3JvbGxhYmxlKSB7XG4gICAgICBjb25zdCB0YWIgPSB0aGlzLl90YWIuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB0YWJDb250YWluZXIgPSB0aGlzLl90YWJzLnRhYnNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0YWJDb250YWluZXIuc2Nyb2xsV2lkdGggIT09IHRhYkNvbnRhaW5lci5vZmZzZXRXaWR0aCkge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLl90aGVtZS5jb25maWcuZGlyZWN0aW9uO1xuICAgICAgICBjb25zdCBtYXggPSB0YWJDb250YWluZXIuc2Nyb2xsV2lkdGggLSB0YWJDb250YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IG9mZnNldEJlZm9yZSA9IGRpciA9PT0gRGlyLnJ0bFxuICAgICAgICA/IG1heCArIHRhYi5vZmZzZXRMZWZ0XG4gICAgICAgIDogdGFiLm9mZnNldExlZnQ7XG4gICAgICAgIGNvbnN0IGwgPSBvZmZzZXRCZWZvcmUgKyB0YWIub2Zmc2V0V2lkdGggLyAyIC0gdGFiQ29udGFpbmVyLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgbmV3VmFsID0gbCA+PSBtYXggPyBtYXggOiBsIDw9IDAgPyAwIDogbDtcbiAgICAgICAgc2Nyb2xsV2l0aEFuaW1hdGlvbih0aGlzLl90YWJzLnRhYnNSZWYubmF0aXZlRWxlbWVudCwgbmV3VmFsLCAzNTAsICd4Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkgeyB9XG59XG5cbi8qKlxuICogZGVtbyBiYXNpY1xuICogPGx5LXRhYnMgd2l0aENvbG9yPVwiYWNjZW50XCI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWw+SE9NRTwvYnV0dG9uPlxuICogICAgIENvbnRlbnRcbiAqICAgPC9seS10YWI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWw+SE9NRTwvYnV0dG9uPlxuICogICAgIENvbnRlbnRcbiAqICAgPC9seS10YWI+XG4gKiAgIC4uLlxuICogPC9seS10YWJzPlxuICpcbiAqIGRlbW8gbGF6eSBsb2FkaW5nXG4gKiA8bHktdGFicyB3aXRoQmc9XCJwcmltYXJ5XCI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWw+SE9NRTwvYnV0dG9uPlxuICogICAgIDxuZy10ZW1wbGF0ZSBseS10YWItY29udGVudD48L25nLXRlbXBsYXRlPlxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKiA9PiBzZWxlY3RlZEluZGV4T25DaGFuZ2UsIGRlZmF1bHQ6IGF1dG8sIG9wdHM6IG51bWJlciwgd2l0aCBhdXRvLCB0aGUgc2VsZWN0ZWRJbmRleCA9IGN1cnJlbnQgbyBjdXJyZW50LTEgb3IgbGF0ZXN0XG4gKi9cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdUcmFuc2NsdWRlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVRhYnMsIEx5VGFiTGFiZWwsIEx5VGFiIH0gZnJvbSAnLi90YWJzJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0x5VGhlbWVNb2R1bGUsIENvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGUsIE5nVHJhbnNjbHVkZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUNvbW1vbk1vZHVsZSwgTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BR2EsWUFBWTs7OztJQUN2QixZQUFtQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLOzs7WUFGbkQsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFDOzs7O1lBRnRCLFdBQVc7Ozs7Ozs7QUNBOUI7TUFvRE0sc0JBQXNCLEdBQUcsS0FBSzs7TUFDOUIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsVUFBVSxHQUFHLFNBQVM7O01BQ3RCLHVCQUF1QixHQUFHLFFBQVE7O01BQ2xDLGlCQUFpQixHQUFHLENBQUM7O01BQ3JCLHdCQUF3QixHQUFHLE9BQU87O01BSWxDLE1BQU0sR0FBRyxDQUFDLEtBQXFCLE1BQU07SUFDekMsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87S0FDakI7SUFDRCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsTUFBTTtLQUNoQjtJQUNELEdBQUcsRUFBRTtRQUNILFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSxhQUFhO0tBQ3ZCOzs7O0lBRUQsZ0JBQWdCLEVBQUU7UUFDaEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLENBQUM7S0FDWjs7OztJQUVELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFVBQVU7S0FDckI7SUFDRCxtQkFBbUIsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixlQUFlLEVBQUU7WUFDZixzQkFBc0IsRUFBRTtnQkFDdEIsUUFBUSxFQUFFLE1BQU07YUFDakI7U0FDRjtLQUNGO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsNkJBQTZCLEVBQUUsYUFBYTtRQUM1QyxvQkFBb0IsRUFBRSxNQUFNO1FBQzVCLGVBQWUsRUFBRSxhQUFhO1FBQzlCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsT0FBTyxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUUsYUFBYTtRQUN0QixjQUFjLEVBQUUsUUFBUTtRQUN4QixVQUFVLEVBQUUsUUFBUTtRQUNwQixRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsUUFBUTtRQUNsQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVO1FBQ3ZDLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ2xELGFBQWEsRUFBRSxXQUFXO1FBQzFCLEtBQUssRUFBRSxjQUFjO1FBQ3JCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsS0FBSyxFQUFFLE1BQU07UUFDYixVQUFVLEVBQUUsR0FBRztRQUNmLE9BQU8sRUFBRSxFQUFFO1FBQ1gsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHO1lBQy9CLE9BQU8sRUFBRSxRQUFRO1NBQ2xCO0tBQ0Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLE1BQU07UUFDZixVQUFVLEVBQUUsbUNBQW1DO1FBQy9DLFVBQVUsRUFBRSxXQUFXO1FBQ3ZCLE1BQU0sRUFBRSxNQUFNO0tBQ2Y7SUFDRCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsVUFBVSxFQUFFLENBQUM7UUFDYixRQUFRLEVBQUUsVUFBVTtLQUNyQjtJQUNELGFBQWEsRUFBRTtRQUNiLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsVUFBVSxFQUFFLG1DQUFtQztRQUMvQyxVQUFVLEVBQUUsY0FBYztLQUMzQjtJQUNELHNCQUFzQixFQUFFO1FBQ3RCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFVBQVUsRUFBRSxjQUFjO0tBQzNCO0lBQ0QsZUFBZSxvQkFDVixnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLFFBQVEsRUFBRSxRQUFRLEdBQ25CO0lBQ0QsVUFBVSxFQUFFLElBQUk7Q0FDakIsQ0FBQzs7OztBQUdGLE1BQWEsVUFBVTs7OztJQUNyQixZQUNTLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7S0FDcEI7Q0FDTjs7Ozs7QUFHRCxNQUFhLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztBQUd2RyxNQUFhLGNBQWM7Ozs7O0lBQ3pCLFlBQ1MsTUFBZ0IsRUFDaEIsT0FBZTtRQURmLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtLQUNuQjtDQUNOOzs7OztBQUdELE1BQWEsbUJBQW1CLEdBQUcsaUJBQWlCLENBQ3BELE9BQU8sQ0FDTCxVQUFVLENBQ1IsV0FBVyxDQUNULGFBQWEsQ0FDWCxhQUFhLENBQ1gsY0FBYyxDQUNaLGdCQUFnQixDQUNkLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFZeEQsTUFBYSxNQUFPLFNBQVEsZUFBZTs7Ozs7Ozs7SUE4THpDLFlBQ1UsS0FBZSxFQUNmLFFBQW1CLEVBQ25CLEVBQWMsRUFDZCxFQUFxQixFQUNyQixjQUF5QjtRQUVqQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFOTCxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQVc7Ozs7UUFqTTFCLFlBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDcEUsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFLWCxzQkFBaUIsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBZ0J0QywwQkFBcUIsR0FBb0IsTUFBTSxDQUFDO1FBbUsvQyx3QkFBbUIsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVdwRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDeEI7Ozs7O0lBOUtELElBQ0ksVUFBVSxDQUFDLEdBQVE7O2NBQ2YsTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDN0IsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hFO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7S0FDM0I7Ozs7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDekI7Ozs7O0lBQ0QsSUFDSSxjQUFjLENBQUMsR0FBVztRQUM1QixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ3BDLHlCQUF5QixHQUFHLEVBQUUsRUFDOUIsS0FBSyxLQUNILFNBQVMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUMvQixFQUNELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQ25ELENBQUM7U0FDSDtLQUNGOzs7O0lBQ0QsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7Ozs7SUFFRCxJQUNJLGVBQWUsQ0FBQyxHQUEwQjtRQUM1QyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7WUFDNUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLDBCQUEwQixHQUFHLEVBQUUsRUFDaEY7O29CQUNNLHNCQUE4Qjs7b0JBQzlCLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDOztvQkFDM0MsUUFBZ0I7O29CQUNoQixNQUFNLEdBQVcsSUFBSTs7b0JBQ3JCLEtBQUssR0FBVyxJQUFJOztvQkFDcEIsWUFBWSxHQUFXLElBQUk7O29CQUMzQixXQUFXLEdBQVcsSUFBSTtnQkFDOUIsUUFBUSxHQUFHO29CQUNULEtBQUssU0FBUyxDQUFDLEtBQUs7d0JBQ2xCLHNCQUFzQixHQUFHLFFBQVEsQ0FBQzt3QkFDbEMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7d0JBQzNCLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQ2YsV0FBVyxHQUFHLE1BQU0sQ0FBQzt3QkFDckIsTUFBTTtvQkFDUixLQUFLLFNBQVMsQ0FBQyxLQUFLO3dCQUNsQixzQkFBc0IsR0FBRyxnQkFBZ0IsQ0FBQzt3QkFDMUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7d0JBQzNCLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQ2YsV0FBVyxHQUFHLE1BQU0sQ0FBQzt3QkFDckIsTUFBTTtvQkFDUixLQUFLLFNBQVMsQ0FBQyxNQUFNO3dCQUNuQixzQkFBc0IsR0FBRyxLQUFLLENBQUM7d0JBQy9CLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO3dCQUMzQixLQUFLLEdBQUcsS0FBSyxDQUFDO3dCQUNkLFlBQVksR0FBRyxNQUFNLENBQUM7d0JBQ3RCLE1BQU07b0JBQ1IsS0FBSyxTQUFTLENBQUMsS0FBSzt3QkFDbEIsc0JBQXNCLEdBQUcsYUFBYSxDQUFDO3dCQUN2QyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQzt3QkFDNUIsS0FBSyxHQUFHLEtBQUssQ0FBQzt3QkFDZCxZQUFZLEdBQUcsTUFBTSxDQUFDO3dCQUN0QixNQUFNO29CQUVSO3dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLEdBQUcsMENBQTBDLENBQUMsQ0FBQztpQkFDbkY7Z0JBQ0QsSUFBSSxHQUFHLEtBQUssU0FBUyxDQUFDLEtBQUssSUFBSSxHQUFHLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtvQkFDdEQsYUFBYSxHQUFHLEtBQUssQ0FBQztpQkFDdkI7cUJBQU07b0JBQ0wsYUFBYSxHQUFHLFFBQVEsQ0FBQztpQkFDMUI7Z0JBQ0QsT0FBTztvQkFDTCxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRzt3QkFDOUIsYUFBYSxFQUFFLHNCQUFzQjtxQkFDdEM7b0JBQ0QsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsR0FBRzt3QkFDOUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQzt3QkFDYixNQUFNO3dCQUNOLEtBQUs7cUJBQ047b0JBQ0QsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsR0FBRzt3QkFDM0MsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLE1BQU0sRUFBRSxZQUFZO3FCQUNyQjtvQkFDRCxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRTtvQkFDbkYsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUU7aUJBQ3BELENBQUM7YUFDSCxFQUNELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixJQUFJLENBQUMscUJBQXFCLEVBQzFCLGNBQWMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1NBQ25DO0tBQ0Y7Ozs7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDOUI7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsR0FBYztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsR0FFOUQsR0FBRyxLQUFLLFNBQVMsR0FBRztZQUNsQixDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRztnQkFDdEQsU0FBUyxFQUFFLENBQUM7Z0JBQ1osUUFBUSxFQUFFLENBQUM7YUFDWjtTQUNGLEdBQUc7WUFDRixDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRztnQkFDakMsY0FBYyxFQUFFLEdBQUcsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUc7YUFDMUQ7U0FDRixHQUVILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixJQUFJLENBQUMsZUFBZSxFQUNwQixjQUFjLENBQUMsQ0FBQztLQUNqQjs7OztJQUNELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN4Qjs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxHQUFXO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxFQUNwRSxDQUFDLEtBQXFCLE1BQU07WUFDMUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUc7Z0JBQ3JDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzthQUMxQjtTQUNGLENBQUMsRUFDRixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsSUFBSSxDQUFDLGVBQWUsRUFDcEIsY0FBYyxDQUFDLENBQUM7S0FDakI7Ozs7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7O0lBRUQsSUFDSSxhQUFhLENBQUMsR0FBVztRQUMzQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzlCLElBQUksQ0FBQyxvQkFBb0Isc0JBQUcsSUFBSSxDQUFDLGNBQWMsRUFBVSxDQUFDO1lBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDNUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQzthQUNuQyxDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBQ0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0tBQzVCOzs7O0lBZ0JELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUM7S0FDRjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztjQUMzRCxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztRQUVwRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxRSxJQUFJLENBQUMsY0FBYyxHQUFHLHVCQUF1QixDQUFDO1lBQzlDLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7U0FDcEM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLHdCQUF3QixDQUFDO1NBQ2pEO0tBQ0Y7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUN2RCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLHFCQUFxQixFQUFFO2dCQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN0RjtZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ2hELENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2xDO0tBQ0Y7Ozs7OztJQUVPLFVBQVUsQ0FBQyxhQUFxQixFQUFFLEtBQXNCO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU8sYUFBYSxDQUFDO1NBQ3RCOztjQUNLLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDOztjQUN6QyxZQUFZLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxHQUFHLEtBQUssR0FBRyxhQUFhO1FBQ3RFLE9BQU8sWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsWUFBWSxDQUFDO0tBQzdGOzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFpQixFQUFFLFNBQWlCO1FBQ25ELElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDckY7O2tCQUNLLEVBQUUsc0JBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQWU7O2tCQUNoRCxLQUFLLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1lBRXhDLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDekYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7Z0JBQ3hGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO2dCQUNyRixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDckU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ3RGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO2dCQUN2RixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDcEU7U0FDRjtLQUNGOzs7O0lBRU8sMEJBQTBCOztjQUMxQixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWM7O2NBQzNCLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZTtRQUN0QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsd0JBQXdCLEtBQUssSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDLEtBQXFCOztnQkFDOUcsSUFBSSxHQUFHLENBQUM7O2tCQUNOLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEtBQUssUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzNFLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLFFBQVEsS0FBSyxHQUFHLEVBQUU7Z0JBQ25ELElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNYO1lBQ0QsT0FBTztnQkFDTCxTQUFTLEVBQUUsWUFBWSxRQUFRLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUk7YUFDMUQsQ0FBQztTQUNILEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0tBQ2xGOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDeEI7Ozs7OztJQUVELFlBQVksQ0FBQyxHQUFVLEVBQUUsS0FBYTtRQUNwQyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssR0FBRyxDQUFDLEtBQUssRUFBRTs7WUFFcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM1QjtxQkFBTTs7b0JBRUwsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztvQkFDM0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDekY7YUFDRixDQUFDLENBQUM7U0FDSjtRQUNELEdBQUcsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDcEMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQztTQUNqRDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGOzs7OztJQUVPLGlCQUFpQixDQUFDLEdBQTBCOztZQUM5QyxhQUFxQjtRQUN6QixJQUFJLEdBQUcsS0FBSyxTQUFTLENBQUMsS0FBSyxJQUFJLEdBQUcsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3RELGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTTtZQUNMLGFBQWEsR0FBRyxRQUFRLENBQUM7U0FDMUI7UUFDRCxPQUFPLGFBQWEsQ0FBQztLQUN0Qjs7O1lBclZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsc25CQUEwQjtnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxXQUFXLEVBQUUsYUFBYTtpQkFDakM7YUFDRjs7OztZQWpLQyxRQUFRO1lBUFIsU0FBUztZQVhULFVBQVU7WUFKVixpQkFBaUI7WUF5Q2pCLFNBQVM7OztzQkFvS1IsU0FBUyxTQUFDLE1BQU07MEJBQ2hCLFNBQVMsU0FBQyxhQUFhOzRCQUN2QixTQUFTLFNBQUMsZUFBZTtvQ0FDekIsS0FBSzt5QkFDTCxLQUFLOzZCQWFMLEtBQUs7OEJBaUJMLEtBQUs7d0JBMEVMLEtBQUs7d0JBd0JMLEtBQUs7NEJBaUJMLEtBQUs7a0NBaUJMLE1BQU07dUJBQ04sZUFBZSxTQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQzs7TUF3SjdCLEtBQUs7Ozs7OztJQVNoQixZQUNVLEtBQWEsRUFDZCxTQUFvQixFQUNwQixHQUFlO1FBRmQsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQVR4QixlQUFVLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztLQVUzQjs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6RTs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsOFRBQXlCO2dCQUN6QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFXa0IsTUFBTTtZQXZnQnZCLFNBQVM7WUFYVCxVQUFVOzs7K0JBNGdCVCxZQUFZLFNBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTsyQkFDaEQsU0FBUyxTQUFDLG9CQUFvQjs0QkFDOUIsU0FBUyxTQUFDLGNBQWM7d0JBQ3hCLFlBQVksU0FBQyxVQUFVLENBQUMsTUFBTSxVQUFVLENBQUM7O01BOEIvQixVQUFXLFNBQVEsUUFBUTs7Ozs7Ozs7Ozs7SUFTdEMsWUFDRSxHQUFlLEVBQ2YsU0FBb0IsRUFDcEIsTUFBZ0IsRUFDaEIsT0FBZSxFQUNmLGNBQStCLEVBQy9CLFdBQXlCLEVBQ0wsSUFBVyxFQUNYLEtBQWE7UUFFakMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFIaEQsU0FBSSxHQUFKLElBQUksQ0FBTztRQUNYLFVBQUssR0FBTCxLQUFLLENBQVE7UUFmbkMsZUFBVSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7S0FrQi9COzs7O0lBaEJzQixXQUFXO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzVDO0tBQ0Y7Ozs7SUFjRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBRTFFLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQztTQUM3QztLQUNGOzs7O0lBRUQsZUFBZTs7UUFFYixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ25GLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdkY7S0FDRjs7OztJQUVELGdCQUFnQjtRQUNkLElBQUksUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTs7a0JBQ3pDLEdBQUcsc0JBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFlOztrQkFDaEQsWUFBWSxzQkFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQWU7WUFDcEUsSUFBSSxZQUFZLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxXQUFXLEVBQUU7O3NCQUNuRCxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUzs7c0JBQ2xDLEdBQUcsR0FBRyxZQUFZLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxXQUFXOztzQkFDekQsWUFBWSxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRztzQkFDbEMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVO3NCQUNwQixHQUFHLENBQUMsVUFBVTs7c0JBQ1YsQ0FBQyxHQUFHLFlBQVksR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsV0FBVyxHQUFHLENBQUM7O3NCQUNyRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDOUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDekU7U0FDRjtLQUNGOzs7O0lBRUQsZUFBZSxNQUFNOzs7WUE5RXRCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyw4TEFBNkI7Z0JBQzdCLE1BQU0sRUFBRTtvQkFDTixJQUFJO29CQUNKLE9BQU87b0JBQ1AsUUFBUTtvQkFDUixVQUFVO29CQUNWLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxhQUFhO29CQUNiLGVBQWU7aUJBQ2hCO2dCQUNELElBQUksRUFBRTtvQkFDSixZQUFZLEVBQUUsVUFBVTtpQkFDekI7YUFDRjs7OztZQTVpQkMsVUFBVTtZQVdWLFNBQVM7WUFPVCxRQUFRO1lBYlIsTUFBTTtZQTZCTixlQUFlO1lBQ2YsWUFBWTtZQTBoQmdCLEtBQUssdUJBQTlCLFFBQVE7WUFDa0IsTUFBTSx1QkFBaEMsUUFBUTs7OytCQWRWLFNBQVMsU0FBQyxpQkFBaUI7MEJBQzNCLFlBQVksU0FBQyxPQUFPOzs7Ozs7O0FDempCdkIsTUFXYSxZQUFZOzs7WUFMeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixDQUFDO2dCQUMxRSxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDO2dCQUNsRSxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUM7YUFDeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9