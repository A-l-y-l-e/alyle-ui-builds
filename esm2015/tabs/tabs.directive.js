/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, Platform, AlignAlias, YPosition, XPosition, Dir, LyRippleService, LyFocusState, LY_COMMON_STYLES, ResizeService } from '@alyle/ui';
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
    rippleContainer: Object.assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden' })
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
    set indicatorColor(val) {
        if (val !== this.indicatorColor) {
            this._color = val;
            this._colorClass = this.theme.addStyle(`k-tab-indicator-color:${val}`, theme => (`color:${theme.colorOf(val)};`), this.tabsIndicator.nativeElement, this._colorClass);
            if (this._selectedTab) {
                this.theme.updateClass(this._selectedTab.tabIndicator.nativeElement, this.renderer, this._colorClass);
            }
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
            this._updateIndicator(this._selectedTab, this._selectedBeforeTab);
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
        /** @type {?} */
        const currentIndex = this.selectedIndex;
        if (currentTab) {
            if (!this._isViewInitLoaded || !Platform.isBrowser) {
                /** for before initialize or for server */
                this.renderer.addClass(currentTab.tabIndicator.nativeElement, this.classes.tabsIndicatorForServer);
                this.renderer.addClass(currentTab.tabIndicator.nativeElement, this._colorClass);
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
            this._updateIndicator(tab);
        }
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
                template: "<div [className]=\"classes.container\">\n  <div [className]=\"classes.tabsLabels\" #tabs>\n    <ng-content></ng-content>\n    <span #tabsIndicator></span>\n  </div>\n  <div [className]=\"classes.contentContainer\">\n    <div [className]=\"classes.tabContents\" #tabContents>\n      <ng-template ngFor let-item [ngForOf]=\"tabsList\" let-x=\"index\">\n        <div [className]=\"classes.tabContent\">\n          <ng-template [ngTransclude]=\"loadTemplate(item, x)\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>",
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
    native: [{ type: Input }],
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
    LyTabs.prototype._tabsSubscription;
    /** @type {?} */
    LyTabs.prototype._isViewInitLoaded;
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
    LyTabs.prototype.tabsRef;
    /** @type {?} */
    LyTabs.prototype.tabContents;
    /** @type {?} */
    LyTabs.prototype.tabsIndicator;
    /** @type {?} */
    LyTabs.prototype.selectedIndexOnChange;
    /** @type {?} */
    LyTabs.prototype.native;
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
                template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<span #tabIndicator></span>\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
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
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
    tabIndicator: [{ type: ViewChild, args: ['tabIndicator',] }]
};
if (false) {
    /** @type {?} */
    LyTab.prototype.index;
    /** @type {?} */
    LyTab.prototype.templateRefLazy;
    /** @type {?} */
    LyTab.prototype.templateRef;
    /** @type {?} */
    LyTab.prototype.tabIndicator;
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
        if (this.disableRipple === null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        Promise.resolve(null).then(() => {
            if (this._tabs._selectedIndex === this._tab.index) {
                if (!this._active) {
                    this._active = true;
                    this._renderer.addClass(this._el.nativeElement, this._tabs.classes.tabLabelActive);
                    /** Update tab indicator */
                    if (Platform.isBrowser) {
                        this._tabs._updateIndicator(this._tab);
                    }
                }
            }
            else if (this._active) {
                this._active = false;
                this._renderer.removeClass(this._el.nativeElement, this._tabs.classes.tabLabelActive);
            }
        });
    }
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
    { type: LyTab },
    { type: LyTabs }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGFicy8iLCJzb3VyY2VzIjpbInRhYnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUVoQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFFBQVEsRUFFUixVQUFVLEVBQ1YsU0FBUyxFQUNULFNBQVMsRUFDVCxHQUFHLEVBQ0gsZUFBZSxFQUNmLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNaLE1BQU0sV0FBVyxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQzs7TUFFOUIsc0JBQXNCLEdBQUcsS0FBSzs7TUFDOUIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsVUFBVSxHQUFHLFNBQVM7O01BQ3RCLHVCQUF1QixHQUFHLFFBQVE7O01BQ2xDLGlCQUFpQixHQUFHLENBQUM7O01BQ3JCLHdCQUF3QixHQUFHLE9BQU87O01BSWxDLE1BQU0sR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFD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UTtvQkFDUixVQUFVO29CQUNWLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxhQUFhO29CQUNiLGVBQWU7aUJBQ2hCO2dCQUNELElBQUksRUFBRTtvQkFDSixZQUFZLEVBQUUsVUFBVTtpQkFDekI7YUFDRjs7OztZQXhoQkMsVUFBVTtZQVdWLFNBQVM7WUFPVCxRQUFRO1lBYlIsTUFBTTtZQTZCTixlQUFlO1lBQ2YsWUFBWTtZQXNnQkksS0FBSztZQUNKLE1BQU07OzsrQkFkdEIsU0FBUyxTQUFDLGlCQUFpQjt5QkFDM0IsWUFBWSxTQUFDLE9BQU87Ozs7SUFIckIsNkJBQXlCOztJQUN6QixnQ0FBZ0M7O0lBQ2hDLHNDQUEyRDs7SUFhekQsMEJBQW1COztJQUNuQiwyQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRG9DaGVja1xuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBBbGlnbkFsaWFzLFxuICBZUG9zaXRpb24sXG4gIFhQb3NpdGlvbixcbiAgRGlyLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgUmVzaXplU2VydmljZVxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUJ1dHRvbiB9IGZyb20gJ0BhbHlsZS91aS9idXR0b24nO1xuaW1wb3J0IHsgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuY29uc3QgREVGQVVMVF9JTkRJQ0FUT1JfQ09MT1IgPSAnYWNjZW50JztcbmNvbnN0IERFRkFVTFRfRUxFVkFUSU9OID0gNDtcbmNvbnN0IERFRkFVTFRfSEVBREVSX1BMQUNFTUVOVCA9ICdhYm92ZSc7XG5leHBvcnQgdHlwZSBBbGlnblRhYnMgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8ICdiYXNlbGluZSc7XG5leHBvcnQgdHlwZSBMeVRhYnNIZWFkZXJQbGFjZW1lbnQgPSAnYmVmb3JlJyB8ICdhZnRlcicgfCAnYWJvdmUnIHwgJ2JlbG93JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIHRhYjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCdcbiAgfSxcbiAgLyoqIFRhYiBjb250ZW50ICovXG4gIGNvbnRlbnRDb250YWluZXI6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgLyoqIFRhYiBoZWFkZXIgKi9cbiAgdGFic0xhYmVsczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICBsYWJlbDoge1xuICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBib3JkZXI6IDAsXG4gICAgbWluV2lkdGg6ICc3MnB4JyxcbiAgICBwYWRkaW5nOiAnMCAyNHB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUpLFxuICAgIGxldHRlclNwYWNpbmc6ICcwLjAyODU3ZW0nLFxuICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgb3BhY2l0eTogLjcsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgcGFkZGluZzogJzAgMTJweCdcbiAgICB9XG4gIH0sXG4gIHRhYkxhYmVsQWN0aXZlOiB7XG4gICAgb3BhY2l0eTogMVxuICB9LFxuICB0YWJDb250ZW50czoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB0cmFuc2l0aW9uOiAnNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJyxcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xuICB9LFxuICB0YWJDb250ZW50OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHRhYnNJbmRpY2F0b3I6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBoZWlnaHQ6ICcycHgnLFxuICAgIHRyYW5zaXRpb246ICc0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIHRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICByaXBwbGVDb250YWluZXI6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH1cbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5VGFic0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5VGFic01peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKG1peGluQmcobWl4aW5FbGV2YXRpb24obWl4aW5TaGFkb3dDb2xvcihMeVRhYnNCYXNlKSkpKTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVRhYkxhYmVsQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVRhYkxhYmVsTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeVRhYkxhYmVsQmFzZSkpKSkpKSkpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmRpcmVjdGl2ZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJywgJ2VsZXZhdGlvbicsICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgZXh0ZW5kcyBMeVRhYnNNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgX3NlbGVjdGVkSW5kZXggPSAwO1xuICBfc2VsZWN0ZWRCZWZvcmVJbmRleDogbnVtYmVyO1xuICBfc2VsZWN0ZWRUYWI6IEx5VGFiO1xuICBfc2VsZWN0ZWRCZWZvcmVUYWI6IEx5VGFiO1xuICBwcml2YXRlIF90YWJzU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9pc1ZpZXdJbml0TG9hZGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9jb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hlYWRlclBsYWNlbWVudDogTHlUYWJzSGVhZGVyUGxhY2VtZW50O1xuICBwcml2YXRlIF9oZWFkZXJQbGFjZW1lbnRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9hbGlnblRhYnM6IEFsaWduVGFicztcbiAgcHJpdmF0ZSBfYWxpZ25UYWJzQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGV4dENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RleHRDb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXhDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF90YWJSZXNpemVTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBAVmlld0NoaWxkKCd0YWJzJykgdGFic1JlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudHMnKSB0YWJDb250ZW50czogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFic0luZGljYXRvcicpIHRhYnNJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXhPbkNoYW5nZTogJ2F1dG8nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoKSBuYXRpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNldCBpbmRpY2F0b3JDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuaW5kaWNhdG9yQ29sb3IpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBrLXRhYi1pbmRpY2F0b3ItY29sb3I6JHt2YWx9YCxcbiAgICAgICAgdGhlbWUgPT4gKFxuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX07YFxuICAgICAgICApLFxuICAgICAgICB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcyk7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgdGhpcy5fY29sb3JDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCBpbmRpY2F0b3JDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGVhZGVyUGxhY2VtZW50KHZhbDogTHlUYWJzSGVhZGVyUGxhY2VtZW50KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5oZWFkZXJQbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudCA9IHZhbDtcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudENsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlUYWJzLmhlYWRlclBsYWNlbWVudDoke3ZhbH1gLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBsZXQgZmxleERpcmVjdGlvbkNvbnRhaW5lcjogc3RyaW5nO1xuICAgICAgICBsZXQgZmxleERpcmVjdGlvbiA9IHRoaXMuX2dldEZsZXhEaXJlY3Rpb24odmFsKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgICAgIGxldCBoZWlnaHQ6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIGxldCB3aWR0aDogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgbGV0IGhlaWdodFNlcnZlcjogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgbGV0IHdpZHRoU2VydmVyOiBzdHJpbmcgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgICAgIGNhc2UgWVBvc2l0aW9uLmFib3ZlOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdjb2x1bW4nO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBZUG9zaXRpb24uYmVsb3c7XG4gICAgICAgICAgICBoZWlnaHQgPSAnMnB4JztcbiAgICAgICAgICAgIHdpZHRoU2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBZUG9zaXRpb24uYmVsb3c6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ2NvbHVtbi1yZXZlcnNlJztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWVBvc2l0aW9uLmFib3ZlO1xuICAgICAgICAgICAgaGVpZ2h0ID0gJzJweCc7XG4gICAgICAgICAgICB3aWR0aFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWFBvc2l0aW9uLmJlZm9yZTpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAncm93JztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWFBvc2l0aW9uLmFmdGVyO1xuICAgICAgICAgICAgd2lkdGggPSAnMnB4JztcbiAgICAgICAgICAgIGhlaWdodFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWFBvc2l0aW9uLmFmdGVyOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdyb3ctcmV2ZXJzZSc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFhQb3NpdGlvbi5iZWZvcmU7XG4gICAgICAgICAgICB3aWR0aCA9ICcycHgnO1xuICAgICAgICAgICAgaGVpZ2h0U2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMeVRhYnM6IHZhbHVlOiR7dmFsfSBkbyBub3QgaXMgdmFsaWQgZm9yIFxcYGhlYWRlclBsYWNlbWVudFxcYGApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB2YWwgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9YF06IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGZsZXhEaXJlY3Rpb25Db250YWluZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcn0sJiAuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcn1gXToge1xuICAgICAgICAgICAgW3Bvc2l0aW9uXTogMCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyfWBdOiB7XG4gICAgICAgICAgICB3aWR0aDogd2lkdGhTZXJ2ZXIsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFNlcnZlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfSwmIC4ke3RoaXMuY2xhc3Nlcy50YWJDb250ZW50c31gXTogeyBmbGV4RGlyZWN0aW9uIH0sXG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMudGFiQ29udGVudHN9YF06IHsgZmxleERpcmVjdGlvbiB9XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50Q2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWSk7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZXNPZlNlbGVjdGVkVGFiKCk7XG4gICAgfVxuICB9XG4gIGdldCBoZWFkZXJQbGFjZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlclBsYWNlbWVudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnblRhYnModmFsOiBBbGlnblRhYnMpIHtcbiAgICB0aGlzLl9hbGlnblRhYnMgPSB2YWw7XG4gICAgdGhpcy5fYWxpZ25UYWJzQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUFsaWduVGFiczogJHt2YWx9YCxcbiAgICAoXG4gICAgICB2YWwgPT09ICdzdHJldGNoJyA/IHtcbiAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfSAuJHt0aGlzLmNsYXNzZXMudGFifWBdOiB7XG4gICAgICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgICAgIGZsZXhHcm93OiAxXG4gICAgICAgIH1cbiAgICAgIH0gOiB7XG4gICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc31gXToge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB2YWwgaW4gQWxpZ25BbGlhcyA/IEFsaWduQWxpYXNbdmFsXSA6IHZhbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKSxcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fYWxpZ25UYWJzQ2xhc3MsXG4gICAgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBhbGlnblRhYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduVGFicztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0ZXh0Q29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZXh0Q29sb3IgPSB2YWw7XG4gICAgdGhpcy5fdGV4dENvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseVRhYnMudGV4dENvbG9yOiR7dmFsfWAsXG4gICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFiTGFiZWxBY3RpdmV9YF06IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKVxuICAgICAgfVxuICAgIH0pLFxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl90ZXh0Q29sb3JDbGFzcyxcbiAgICBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IHRleHRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dENvbG9yO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlSW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodmFsLCAnYXV0bycpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIgPSB0aGlzLl9zZWxlY3RlZFRhYjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkSW5kZXgpO1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRoaXMuX3NlbGVjdGVkVGFiLCB0aGlzLl9zZWxlY3RlZEJlZm9yZVRhYik7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlUYWIpKSB0YWJzTGlzdDogUXVlcnlMaXN0PEx5VGFiPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBSZXNpemVTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKHRoZW1lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmlld0luaXRMb2FkZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgY29uc3QgdGFic0luZGljYXRvckVsID0gdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YWJzSW5kaWNhdG9yRWwsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgICAvKiogU2V0IGRlZmF1bHQgQ29sb3IgKi9cbiAgICBpZiAoIXRoaXMuaW5kaWNhdG9yQ29sb3IgJiYgIXRoaXMuYmcgJiYgIXRoaXMudGV4dENvbG9yICYmICF0aGlzLmVsZXZhdGlvbikge1xuICAgICAgdGhpcy5pbmRpY2F0b3JDb2xvciA9IERFRkFVTFRfSU5ESUNBVE9SX0NPTE9SO1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLmVsZXZhdGlvbiA9IERFRkFVTFRfRUxFVkFUSU9OO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGVhZGVyUGxhY2VtZW50KSB7XG4gICAgICB0aGlzLmhlYWRlclBsYWNlbWVudCA9IERFRkFVTFRfSEVBREVSX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fdGFic1N1YnNjcmlwdGlvbiA9IHRoaXMudGFic0xpc3QuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJbmRleE9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2ZpbmRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXgsIHRoaXMuc2VsZWN0ZWRJbmRleE9uQ2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLnRhYnNSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5faXNWaWV3SW5pdExvYWRlZCA9IHRydWU7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fdGFiUmVzaXplU3ViID0gdGhpcy5fcmVzaXplU2VydmljZS5yZXNpemUkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0aGlzLl9zZWxlY3RlZFRhYik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuX3RhYlJlc2l6ZVN1Yikge1xuICAgICAgdGhpcy5fdGFiUmVzaXplU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmluZEluZGV4KHNlbGVjdGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICghdGhpcy50YWJzTGlzdCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZMYXN0VGFiID0gdGhpcy50YWJzTGlzdC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHNlbGVjdGVkSW5kZXg7XG4gICAgcmV0dXJuIGN1cnJlbnRJbmRleCA8IDAgPyAwIDogY3VycmVudEluZGV4ID4gaW5kZXhPZkxhc3RUYWIgPyBpbmRleE9mTGFzdFRhYiA6IGN1cnJlbnRJbmRleDtcbiAgfVxuXG4gIF91cGRhdGVJbmRpY2F0b3IoY3VycmVudFRhYjogTHlUYWIsIGJlZm9yZVRhYj86IEx5VGFiKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgIGlmIChjdXJyZW50VGFiKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzVmlld0luaXRMb2FkZWQgfHwgIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAvKiogZm9yIGJlZm9yZSBpbml0aWFsaXplIG9yIGZvciBzZXJ2ZXIgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjdXJyZW50VGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcik7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY3VycmVudFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmb3IgYWZ0ZXIgaW5pdGlhbGl6ZSAmJiBmb3IgYnJvd3NlclxuICAgICAgICAvLyBDbGVhbiBiZWZvcmUgdGFiXG4gICAgICAgIGlmIChiZWZvcmVUYWIpIHtcbiAgICAgICAgICBiZWZvcmVUYWIuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShiZWZvcmVUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdjbGFzcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50VGFiLmluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAvLyB0aGlzIGZpeGVkIHVuZGVmaW5lZCBzZWxlY3RlZCB0YWJcbiAgICAgICAgICBjdXJyZW50VGFiID0gdGhpcy50YWJzTGlzdC50b0FycmF5KClbY3VycmVudEluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbCA9IGN1cnJlbnRUYWIuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHJlY3RzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyUGxhY2VtZW50ID09PSBYUG9zaXRpb24uYWZ0ZXIgfHwgdGhpcy5oZWFkZXJQbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5iZWZvcmUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgYCR7cmVjdHMuaGVpZ2h0fXB4YCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGAke2VsLm9mZnNldFRvcH1weGApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdsZWZ0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7cmVjdHMud2lkdGh9cHhgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIGAke2VsLm9mZnNldExlZnR9cHhgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3RvcCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gdGhpcy5oZWFkZXJQbGFjZW1lbnQ7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleENsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoYGx5VGFicy5zZWxlY3RlZEluZGV4OiR7aW5kZXh9KyR7cGxhY2VtZW50fWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgIGxldCBzaWduID0gMTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fZ2V0RmxleERpcmVjdGlvbihwbGFjZW1lbnQpID09PSAnY29sdW1uJyA/ICdZJyA6ICdYJztcbiAgICAgIGlmICh0aGVtZS5kaXJlY3Rpb24gPT09IERpci5sdHIgfHwgcG9zaXRpb24gPT09ICdZJykge1xuICAgICAgICBzaWduID0gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUke3Bvc2l0aW9ufSgke2luZGV4ICogMTAwICogc2lnbn0lKWBcbiAgICAgIH07XG4gICAgfSwgdGhpcy50YWJDb250ZW50cy5uYXRpdmVFbGVtZW50LCB0aGlzLl9zZWxlY3RlZEluZGV4Q2xhc3MsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFiQ29udGVudHMubmF0aXZlRWxlbWVudCwgdGhpcy5fc2VsZWN0ZWRJbmRleENsYXNzKTtcbiAgfVxuXG4gIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGxvYWRUZW1wbGF0ZSh0YWI6IEx5VGFiLCBpbmRleDogbnVtYmVyKTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PiB8IG51bGwge1xuICAgIHRhYi5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgLy8gc2V0IDAgaWYgaXMgbnVsbFxuICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIgPSB0YWI7XG4gICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGFiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICByZXR1cm4gdGFiLnRlbXBsYXRlUmVmTGF6eSB8fCB0YWIudGVtcGxhdGVSZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEZsZXhEaXJlY3Rpb24odmFsOiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQpIHtcbiAgICBsZXQgZmxleERpcmVjdGlvbjogc3RyaW5nO1xuICAgIGlmICh2YWwgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB2YWwgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgZmxleERpcmVjdGlvbiA9ICdyb3cnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgfVxuICAgIHJldHVybiBmbGV4RGlyZWN0aW9uO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluZGV4OiBudW1iZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlUYWJDb250ZW50LCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHRlbXBsYXRlUmVmTGF6eTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PjtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3RhYkluZGljYXRvcicpIHRhYkluZGljYXRvcjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90YWJzOiBMeVRhYnMsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMudGFiKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktdGFiLWxhYmVsXScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWxhYmVsLmh0bWwnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnW2Rpc2FibGVkXSc6ICdkaXNhYmxlZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYkxhYmVsIGV4dGVuZHMgTHlCdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW47XG4gIF9pc0Jyb3dzZXIgPSBQbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicpIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGlja1RhYigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX3RhYi5pbmRleDtcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgX2VsOiBFbGVtZW50UmVmLFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBwcml2YXRlIF90YWI6IEx5VGFiLFxuICAgIHByaXZhdGUgX3RhYnM6IEx5VGFic1xuICApIHtcbiAgICBzdXBlcihfZWwsIF9yZW5kZXJlciwgX3RoZW1lLCBfbmdab25lLCBfcmlwcGxlU2VydmljZSwgX2ZvY3VzU3RhdGUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLmxhYmVsKTtcbiAgICAvLyBzZXQgZGVmYXVsdCBkaXNhYmxlIHJpcHBsZVxuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl90YWJzLl9zZWxlY3RlZEluZGV4ID09PSB0aGlzLl90YWIuaW5kZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy50YWJMYWJlbEFjdGl2ZSk7XG4gICAgICAgICAgLyoqIFVwZGF0ZSB0YWIgaW5kaWNhdG9yICovXG4gICAgICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgdGhpcy5fdGFicy5fdXBkYXRlSW5kaWNhdG9yKHRoaXMuX3RhYik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIGRlbW8gYmFzaWNcbiAqIDxseS10YWJzIHdpdGhDb2xvcj1cImFjY2VudFwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8L2J1dHRvbj5cbiAqICAgICBDb250ZW50XG4gKiAgIDwvbHktdGFiPlxuICogICA8bHktdGFiPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8L2J1dHRvbj5cbiAqICAgICBDb250ZW50XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqXG4gKiBkZW1vIGxhenkgbG9hZGluZ1xuICogPGx5LXRhYnMgd2l0aEJnPVwicHJpbWFyeVwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8L2J1dHRvbj5cbiAqICAgICA8bmctdGVtcGxhdGUgbHktdGFiLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbiAqICAgPC9seS10YWI+XG4gKiAgIC4uLlxuICogPC9seS10YWJzPlxuICogPT4gc2VsZWN0ZWRJbmRleE9uQ2hhbmdlLCBkZWZhdWx0OiBhdXRvLCBvcHRzOiBudW1iZXIsIHdpdGggYXV0bywgdGhlIHNlbGVjdGVkSW5kZXggPSBjdXJyZW50IG8gY3VycmVudC0xIG9yIGxhdGVzdFxuICovXG4iXX0=