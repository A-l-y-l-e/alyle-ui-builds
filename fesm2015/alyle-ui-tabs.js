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
    templateRefLazy: [{ type: ContentChild, args: [LyTabContent, { read: TemplateRef },] }],
    templateRef: [{ type: ViewChild, args: ['_templateNgContent',] }],
    tabIndicator: [{ type: ViewChild, args: ['tabIndicator',] }],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3RhYnMvdGFiLWNvbnRlbnQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLnRzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tseS10YWItY29udGVudF0nfSlcbmV4cG9ydCBjbGFzcyBMeVRhYkNvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9wdGlvbmFsXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgbWl4aW5CZyxcbiAgbWl4aW5Db2xvcixcbiAgbWl4aW5EaXNhYmxlZCxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICBtaXhpbkVsZXZhdGlvbixcbiAgbWl4aW5PdXRsaW5lZCxcbiAgbWl4aW5SYWlzZWQsXG4gIG1peGluU2hhZG93Q29sb3IsXG4gIG1peGluU3R5bGVVcGRhdGVyLFxuICBQbGF0Zm9ybSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIEFsaWduQWxpYXMsXG4gIFlQb3NpdGlvbixcbiAgWFBvc2l0aW9uLFxuICBEaXIsXG4gIEx5UmlwcGxlU2VydmljZSxcbiAgTHlGb2N1c1N0YXRlLFxuICBMWV9DT01NT05fU1RZTEVTLFxuICBXaW5SZXNpemUsXG4gIHNjcm9sbFdpdGhBbmltYXRpb24sXG4gIHRvQm9vbGVhblxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUJ1dHRvbiB9IGZyb20gJ0BhbHlsZS91aS9idXR0b24nO1xuaW1wb3J0IHsgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9CRyA9ICdwcmltYXJ5JztcbmNvbnN0IERFRkFVTFRfSU5ESUNBVE9SX0NPTE9SID0gJ2FjY2VudCc7XG5jb25zdCBERUZBVUxUX0VMRVZBVElPTiA9IDQ7XG5jb25zdCBERUZBVUxUX0hFQURFUl9QTEFDRU1FTlQgPSAnYWJvdmUnO1xuZXhwb3J0IHR5cGUgQWxpZ25UYWJzID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnc3RyZXRjaCcgfCAnYmFzZWxpbmUnO1xuZXhwb3J0IHR5cGUgTHlUYWJzSGVhZGVyUGxhY2VtZW50ID0gJ2JlZm9yZScgfCAnYWZ0ZXInIHwgJ2Fib3ZlJyB8ICdiZWxvdyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICB0YWI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG4gIH0sXG4gIC8qKiBUYWIgY29udGVudCAqL1xuICBjb250ZW50Q29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIC8qKiBUYWIgaGVhZGVyICovXG4gIHRhYnNMYWJlbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgdGFic0xhYmVsc0NvbnRhaW5lcjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAnJntzY3JvbGxhYmxlfSc6IHtcbiAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbGFiZWw6IHtcbiAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgYm9yZGVyOiAwLFxuICAgIG1pbldpZHRoOiAnNzJweCcsXG4gICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplKSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMjg1N2VtJyxcbiAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIG9wYWNpdHk6IC43LFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIHBhZGRpbmc6ICcwIDEycHgnXG4gICAgfVxuICB9LFxuICB0YWJMYWJlbEFjdGl2ZToge1xuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgdGFiQ29udGVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfSxcbiAgdGFiQ29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZmxleFNocmluazogMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgaGVpZ2h0OiAnMnB4JyxcbiAgICB0cmFuc2l0aW9uOiAnNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJyxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yRm9yU2VydmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgcmlwcGxlQ29udGFpbmVyOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBzY3JvbGxhYmxlOiBudWxsXG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVRhYnNCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVRhYnNNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihtaXhpbkJnKG1peGluRWxldmF0aW9uKG1peGluU2hhZG93Q29sb3IoTHlUYWJzQmFzZSkpKSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlUYWJMYWJlbE1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlUYWJMYWJlbEJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJywgJ2VsZXZhdGlvbicsICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgZXh0ZW5kcyBMeVRhYnNNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgX3NlbGVjdGVkSW5kZXggPSAwO1xuICBfc2VsZWN0ZWRCZWZvcmVJbmRleDogbnVtYmVyO1xuICBfc2VsZWN0ZWRUYWI6IEx5VGFiO1xuICBfc2VsZWN0ZWRCZWZvcmVUYWI6IEx5VGFiO1xuICBfaXNWaWV3SW5pdExvYWRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3JDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oZWFkZXJQbGFjZW1lbnQ6IEx5VGFic0hlYWRlclBsYWNlbWVudDtcbiAgcHJpdmF0ZSBfaGVhZGVyUGxhY2VtZW50Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfYWxpZ25UYWJzOiBBbGlnblRhYnM7XG4gIHByaXZhdGUgX2FsaWduVGFic0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RleHRDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF90ZXh0Q29sb3JDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFiUmVzaXplU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbGFibGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgndGFicycpIHRhYnNSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnRzJykgdGFiQ29udGVudHM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYnNJbmRpY2F0b3InKSB0YWJzSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4T25DaGFuZ2U6ICdhdXRvJyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KClcbiAgc2V0IHNjcm9sbGFibGUodmFsOiBhbnkpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNjcm9sbGFibGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc2Nyb2xsYWJsZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNjcm9sbGFibGUpO1xuICAgIH1cbiAgICB0aGlzLl9zY3JvbGxhYmxlID0gbmV3VmFsO1xuICB9XG4gIGdldCBzY3JvbGxhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxhYmxlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbmRpY2F0b3JDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuaW5kaWNhdG9yQ29sb3IpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBrLXRhYi1pbmRpY2F0b3ItY29sb3I6JHt2YWx9YCxcbiAgICAgICAgdGhlbWUgPT4gKFxuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX07YFxuICAgICAgICApLFxuICAgICAgICB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGluZGljYXRvckNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoZWFkZXJQbGFjZW1lbnQodmFsOiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmhlYWRlclBsYWNlbWVudCkge1xuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50ID0gdmFsO1xuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseVRhYnMuaGVhZGVyUGxhY2VtZW50OiR7dmFsfWAsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGxldCBmbGV4RGlyZWN0aW9uQ29udGFpbmVyOiBzdHJpbmc7XG4gICAgICAgIGxldCBmbGV4RGlyZWN0aW9uID0gdGhpcy5fZ2V0RmxleERpcmVjdGlvbih2YWwpO1xuICAgICAgICBsZXQgcG9zaXRpb246IHN0cmluZztcbiAgICAgICAgbGV0IGhlaWdodDogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgbGV0IHdpZHRoOiBzdHJpbmcgPSBudWxsO1xuICAgICAgICBsZXQgaGVpZ2h0U2VydmVyOiBzdHJpbmcgPSBudWxsO1xuICAgICAgICBsZXQgd2lkdGhTZXJ2ZXI6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAodmFsKSB7XG4gICAgICAgICAgY2FzZSBZUG9zaXRpb24uYWJvdmU6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ2NvbHVtbic7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFlQb3NpdGlvbi5iZWxvdztcbiAgICAgICAgICAgIGhlaWdodCA9ICcycHgnO1xuICAgICAgICAgICAgd2lkdGhTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFlQb3NpdGlvbi5iZWxvdzpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAnY29sdW1uLXJldmVyc2UnO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBZUG9zaXRpb24uYWJvdmU7XG4gICAgICAgICAgICBoZWlnaHQgPSAnMnB4JztcbiAgICAgICAgICAgIHdpZHRoU2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBYUG9zaXRpb24uYmVmb3JlOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdyb3cnO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBYUG9zaXRpb24uYWZ0ZXI7XG4gICAgICAgICAgICB3aWR0aCA9ICcycHgnO1xuICAgICAgICAgICAgaGVpZ2h0U2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBYUG9zaXRpb24uYWZ0ZXI6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ3Jvdy1yZXZlcnNlJztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWFBvc2l0aW9uLmJlZm9yZTtcbiAgICAgICAgICAgIHdpZHRoID0gJzJweCc7XG4gICAgICAgICAgICBoZWlnaHRTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEx5VGFiczogdmFsdWU6JHt2YWx9IGRvIG5vdCBpcyB2YWxpZCBmb3IgXFxgaGVhZGVyUGxhY2VtZW50XFxgYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbCA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IHZhbCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbiA9ICdyb3cnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtgLiR7dGhpcy5jbGFzc2VzLmNvbnRhaW5lcn1gXToge1xuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogZmxleERpcmVjdGlvbkNvbnRhaW5lclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yfSwmIC4ke3RoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyfWBdOiB7XG4gICAgICAgICAgICBbcG9zaXRpb25dOiAwLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgLiR7dGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXJ9YF06IHtcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aFNlcnZlcixcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0U2VydmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNMYWJlbHN9LCYgLiR7dGhpcy5jbGFzc2VzLnRhYkNvbnRlbnRzfWBdOiB7IGZsZXhEaXJlY3Rpb24gfSxcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy50YWJDb250ZW50c31gXTogeyBmbGV4RGlyZWN0aW9uIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9oZWFkZXJQbGFjZW1lbnRDbGFzcyxcbiAgICAgIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlc09mU2VsZWN0ZWRUYWIoKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGhlYWRlclBsYWNlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyUGxhY2VtZW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGFsaWduVGFicyh2YWw6IEFsaWduVGFicykge1xuICAgIHRoaXMuX2FsaWduVGFicyA9IHZhbDtcbiAgICB0aGlzLl9hbGlnblRhYnNDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5QWxpZ25UYWJzOiAke3ZhbH1gLFxuICAgIChcbiAgICAgIHZhbCA9PT0gJ3N0cmV0Y2gnID8ge1xuICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNMYWJlbHN9IC4ke3RoaXMuY2xhc3Nlcy50YWJ9YF06IHtcbiAgICAgICAgICBmbGV4QmFzaXM6IDAsXG4gICAgICAgICAgZmxleEdyb3c6IDFcbiAgICAgICAgfVxuICAgICAgfSA6IHtcbiAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfWBdOiB7XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IHZhbCBpbiBBbGlnbkFsaWFzID8gQWxpZ25BbGlhc1t2YWxdIDogdmFsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApLFxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl9hbGlnblRhYnNDbGFzcyxcbiAgICBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IGFsaWduVGFicygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ25UYWJzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHRleHRDb2xvcih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3RleHRDb2xvciA9IHZhbDtcbiAgICB0aGlzLl90ZXh0Q29sb3JDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5VGFicy50ZXh0Q29sb3I6JHt2YWx9YCxcbiAgICAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJMYWJlbEFjdGl2ZX1gXToge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3JPZih2YWwpXG4gICAgICB9XG4gICAgfSksXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX3RleHRDb2xvckNsYXNzLFxuICAgIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICBnZXQgdGV4dENvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0Q29sb3I7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWw6IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVJbmRleCA9IHRoaXMuX3NlbGVjdGVkSW5kZXggYXMgbnVtYmVyO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2ZpbmRJbmRleCh2YWwsICdhdXRvJyk7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZVRhYiA9IHRoaXMuX3NlbGVjdGVkVGFiO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQodGhpcy5fc2VsZWN0ZWRJbmRleCk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlUYWIpKSB0YWJzTGlzdDogUXVlcnlMaXN0PEx5VGFiPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBXaW5SZXNpemVcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5faXNWaWV3SW5pdExvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLnRhYnNSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBjb25zdCB0YWJzSW5kaWNhdG9yRWwgPSB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRhYnNJbmRpY2F0b3JFbCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3IpO1xuICAgIC8qKiBTZXQgZGVmYXVsdCBDb2xvciAqL1xuICAgIGlmICghdGhpcy5pbmRpY2F0b3JDb2xvciAmJiAhdGhpcy5iZyAmJiAhdGhpcy50ZXh0Q29sb3IgJiYgIXRoaXMuZWxldmF0aW9uKSB7XG4gICAgICB0aGlzLmluZGljYXRvckNvbG9yID0gREVGQVVMVF9JTkRJQ0FUT1JfQ09MT1I7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICAgIHRoaXMuZWxldmF0aW9uID0gREVGQVVMVF9FTEVWQVRJT047XG4gICAgfVxuICAgIGlmICghdGhpcy5oZWFkZXJQbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuaGVhZGVyUGxhY2VtZW50ID0gREVGQVVMVF9IRUFERVJfUExBQ0VNRU5UO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uID0gdGhpcy50YWJzTGlzdC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCwgdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMudGFic1JlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9pc1ZpZXdJbml0TG9hZGVkID0gdHJ1ZTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl90YWJSZXNpemVTdWIgPSB0aGlzLl9yZXNpemVTZXJ2aWNlLnJlc2l6ZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRoaXMuX3NlbGVjdGVkVGFiKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIuX3RhYkxhYmVsLl91cGRhdGVUYWJTY3JvbGwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5fdGFiUmVzaXplU3ViKSB7XG4gICAgICB0aGlzLl90YWJSZXNpemVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW5kZXgoc2VsZWN0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYnNMaXN0KSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkxhc3RUYWIgPSB0aGlzLnRhYnNMaXN0Lmxlbmd0aCAtIDE7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJyA/IGluZGV4IDogc2VsZWN0ZWRJbmRleDtcbiAgICByZXR1cm4gY3VycmVudEluZGV4IDwgMCA/IDAgOiBjdXJyZW50SW5kZXggPiBpbmRleE9mTGFzdFRhYiA/IGluZGV4T2ZMYXN0VGFiIDogY3VycmVudEluZGV4O1xuICB9XG5cbiAgX3VwZGF0ZUluZGljYXRvcihjdXJyZW50VGFiOiBMeVRhYiwgYmVmb3JlVGFiPzogTHlUYWIpOiB2b2lkIHtcbiAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgaWYgKGJlZm9yZVRhYikge1xuICAgICAgICBiZWZvcmVUYWIuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShiZWZvcmVUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdjbGFzcycpO1xuICAgICAgfVxuICAgICAgY29uc3QgZWwgPSBjdXJyZW50VGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgcmVjdHMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHRoaXMuaGVhZGVyUGxhY2VtZW50ID09PSBYUG9zaXRpb24uYWZ0ZXIgfHwgdGhpcy5oZWFkZXJQbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5iZWZvcmUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3JlY3RzLmhlaWdodH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAndG9wJywgYCR7ZWwub2Zmc2V0VG9wfXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnbGVmdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7cmVjdHMud2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBgJHtlbC5vZmZzZXRMZWZ0fXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3RvcCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlc09mU2VsZWN0ZWRUYWIoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHRoaXMuaGVhZGVyUGxhY2VtZW50O1xuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseVRhYnMuc2VsZWN0ZWRJbmRleDoke2luZGV4fSske3BsYWNlbWVudH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBsZXQgc2lnbiA9IDE7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2dldEZsZXhEaXJlY3Rpb24ocGxhY2VtZW50KSA9PT0gJ2NvbHVtbicgPyAnWScgOiAnWCc7XG4gICAgICBpZiAodGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyIHx8IHBvc2l0aW9uID09PSAnWScpIHtcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlJHtwb3NpdGlvbn0oJHtpbmRleCAqIDEwMCAqIHNpZ259JSlgXG4gICAgICB9O1xuICAgIH0sIHRoaXMudGFiQ29udGVudHMubmF0aXZlRWxlbWVudCwgdGhpcy5fc2VsZWN0ZWRJbmRleENsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcyk7XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBsb2FkVGVtcGxhdGUodGFiOiBMeVRhYiwgaW5kZXg6IG51bWJlcik6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD4gfCBudWxsIHtcbiAgICB0YWIuaW5kZXggPSBpbmRleDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIC8vIHNldCAwIGlmIGlzIG51bGxcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gdGFiO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqIGZvciBzZXJ2ZXIgKi9cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdGVkVGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcik7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0YWIuX3RhYkxhYmVsLl91cGRhdGVUYWJTdGF0ZSgpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgcmV0dXJuIHRhYi50ZW1wbGF0ZVJlZkxhenkgfHwgdGFiLnRlbXBsYXRlUmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRGbGV4RGlyZWN0aW9uKHZhbDogTHlUYWJzSGVhZGVyUGxhY2VtZW50KSB7XG4gICAgbGV0IGZsZXhEaXJlY3Rpb246IHN0cmluZztcbiAgICBpZiAodmFsID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdmFsID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgIGZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICB9IGVsc2Uge1xuICAgICAgZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgIH1cbiAgICByZXR1cm4gZmxleERpcmVjdGlvbjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluZGV4OiBudW1iZXI7XG4gIF9pc0Jyb3dzZXIgPSBQbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlUYWJDb250ZW50LCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHRlbXBsYXRlUmVmTGF6eTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PjtcbiAgQFZpZXdDaGlsZCgnX3RlbXBsYXRlTmdDb250ZW50JykgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3RhYkluZGljYXRvcicpIHRhYkluZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5VGFiTGFiZWwpKSBfdGFiTGFiZWw6IEx5VGFiTGFiZWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGFiczogTHlUYWJzLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LXRhYi1sYWJlbF0nLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1sYWJlbC5odG1sJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdLFxuICBob3N0OiB7XG4gICAgJ1tkaXNhYmxlZF0nOiAnZGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbCBleHRlbmRzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuO1xuICBfaXNCcm93c2VyID0gUGxhdGZvcm0uaXNCcm93c2VyO1xuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2tUYWIoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl90YWJzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl90YWIuaW5kZXg7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9lbDogRWxlbWVudFJlZixcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfdGFiOiBMeVRhYixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF90YWJzOiBMeVRhYnNcbiAgKSB7XG4gICAgc3VwZXIoX2VsLCBfcmVuZGVyZXIsIF90aGVtZSwgX25nWm9uZSwgX3JpcHBsZVNlcnZpY2UsIF9mb2N1c1N0YXRlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy5sYWJlbCk7XG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRhYlN0YXRlKCkge1xuICAgIC8vIHVwZGF0ZSBzdHlsZXMgZm9yIGFjdGl2ZSB0YWJcbiAgICBpZiAodGhpcy5fdGFicy5fc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5fdGFiLmluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2FjdGl2ZSkge1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMudGFiTGFiZWxBY3RpdmUpO1xuICAgICAgICB0aGlzLl91cGRhdGVUYWJTY3JvbGwoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMudGFiTGFiZWxBY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVUYWJTY3JvbGwoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiB0aGlzLl90YWJzLnNjcm9sbGFibGUpIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRoaXMuX3RhYi5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHRhYkNvbnRhaW5lciA9IHRoaXMuX3RhYnMudGFic1JlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhYkNvbnRhaW5lci5zY3JvbGxXaWR0aCAhPT0gdGFiQ29udGFpbmVyLm9mZnNldFdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuX3RoZW1lLmNvbmZpZy5kaXJlY3Rpb247XG4gICAgICAgIGNvbnN0IG1heCA9IHRhYkNvbnRhaW5lci5zY3JvbGxXaWR0aCAtIHRhYkNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0QmVmb3JlID0gZGlyID09PSBEaXIucnRsXG4gICAgICAgID8gbWF4ICsgdGFiLm9mZnNldExlZnRcbiAgICAgICAgOiB0YWIub2Zmc2V0TGVmdDtcbiAgICAgICAgY29uc3QgbCA9IG9mZnNldEJlZm9yZSArIHRhYi5vZmZzZXRXaWR0aCAvIDIgLSB0YWJDb250YWluZXIub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICBjb25zdCBuZXdWYWwgPSBsID49IG1heCA/IG1heCA6IGwgPD0gMCA/IDAgOiBsO1xuICAgICAgICBzY3JvbGxXaXRoQW5pbWF0aW9uKHRoaXMuX3RhYnMudGFic1JlZi5uYXRpdmVFbGVtZW50LCBuZXdWYWwsIDM1MCwgJ3gnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7IH1cbn1cblxuLyoqXG4gKiBkZW1vIGJhc2ljXG4gKiA8bHktdGFicyB3aXRoQ29sb3I9XCJhY2NlbnRcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbD5IT01FPC9idXR0b24+XG4gKiAgICAgQ29udGVudFxuICogICA8L2x5LXRhYj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbD5IT01FPC9idXR0b24+XG4gKiAgICAgQ29udGVudFxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKlxuICogZGVtbyBsYXp5IGxvYWRpbmdcbiAqIDxseS10YWJzIHdpdGhCZz1cInByaW1hcnlcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbD5IT01FPC9idXR0b24+XG4gKiAgICAgPG5nLXRlbXBsYXRlIGx5LXRhYi1jb250ZW50PjwvbmctdGVtcGxhdGU+XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqID0+IHNlbGVjdGVkSW5kZXhPbkNoYW5nZSwgZGVmYXVsdDogYXV0bywgb3B0czogbnVtYmVyLCB3aXRoIGF1dG8sIHRoZSBzZWxlY3RlZEluZGV4ID0gY3VycmVudCBvIGN1cnJlbnQtMSBvciBsYXRlc3RcbiAqL1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeVRoZW1lTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5VGFicywgTHlUYWJMYWJlbCwgTHlUYWIgfSBmcm9tICcuL3RhYnMnO1xuaW1wb3J0IHsgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTHlUaGVtZU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTmdUcmFuc2NsdWRlTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5Q29tbW9uTW9kdWxlLCBMeVRhYnMsIEx5VGFiLCBMeVRhYkxhYmVsLCBMeVRhYkNvbnRlbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVRhYnMsIEx5VGFiLCBMeVRhYkxhYmVsLCBMeVRhYkNvbnRlbnRdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFic01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFHYSxZQUFZOzs7O0lBQ3ZCLFlBQW1CLFFBQTBCO1FBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBQUs7OztZQUZuRCxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUM7Ozs7WUFGdEIsV0FBVzs7Ozs7OztBQ0E5QjtNQW9ETSxzQkFBc0IsR0FBRyxLQUFLOztNQUM5QixjQUFjLEdBQUcsQ0FBQyxDQUFDOztNQUNuQixVQUFVLEdBQUcsU0FBUzs7TUFDdEIsdUJBQXVCLEdBQUcsUUFBUTs7TUFDbEMsaUJBQWlCLEdBQUcsQ0FBQzs7TUFDckIsd0JBQXdCLEdBQUcsT0FBTzs7TUFJbEMsTUFBTSxHQUFHLENBQUMsS0FBcUIsTUFBTTtJQUN6QyxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsT0FBTztLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxNQUFNO0tBQ2hCO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLGFBQWE7S0FDdkI7Ozs7SUFFRCxnQkFBZ0IsRUFBRTtRQUNoQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVB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