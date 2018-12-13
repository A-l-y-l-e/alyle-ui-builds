/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, Optional } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, Platform, AlignAlias, YPosition, XPosition, Dir, LyRippleService, LyFocusState, LY_COMMON_STYLES, ResizeService } from '@alyle/ui';
import { LyButton } from '@alyle/ui/button';
import { LyTabContent } from './tab-content.directive';
import { Subscription } from 'rxjs';
/** @type {?} */
var DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_BG = 'primary';
/** @type {?} */
var DEFAULT_INDICATOR_COLOR = 'accent';
/** @type {?} */
var DEFAULT_ELEVATION = 4;
/** @type {?} */
var DEFAULT_HEADER_PLACEMENT = 'above';
/** @type {?} */
var styles = function (theme) {
    var _a;
    return ({
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
        label: (_a = {
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
                opacity: .7
            },
            _a[theme.getBreakpoint('XSmall')] = {
                padding: '0 12px'
            },
            _a),
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
        rippleContainer: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden' })
    });
};
var ɵ0 = styles;
/**
 * \@docs-private
 */
var /**
 * \@docs-private
 */
LyTabsBase = /** @class */ (function () {
    function LyTabsBase(_theme) {
        this._theme = _theme;
    }
    return LyTabsBase;
}());
/**
 * \@docs-private
 */
export { LyTabsBase };
if (false) {
    /** @type {?} */
    LyTabsBase.prototype._theme;
}
/**
 * \@docs-private
 * @type {?}
 */
export var LyTabsMixinBase = mixinStyleUpdater(mixinBg(mixinElevation(mixinShadowColor(LyTabsBase))));
/**
 * \@docs-private
 */
var /**
 * \@docs-private
 */
LyTabLabelBase = /** @class */ (function () {
    function LyTabLabelBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyTabLabelBase;
}());
/**
 * \@docs-private
 */
export { LyTabLabelBase };
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
export var LyTabLabelMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyTabLabelBase)))))))));
var LyTabs = /** @class */ (function (_super) {
    tslib_1.__extends(LyTabs, _super);
    function LyTabs(theme, renderer, el, cd, _resizeService) {
        var _this = _super.call(this, theme) || this;
        _this.theme = theme;
        _this.renderer = renderer;
        _this.el = el;
        _this.cd = cd;
        _this._resizeService = _resizeService;
        /**
         * \@docs-private
         */
        _this.classes = _this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        _this._selectedIndex = 0;
        _this._tabsSubscription = Subscription.EMPTY;
        _this.selectedIndexOnChange = 'auto';
        _this.selectedIndexChange = new EventEmitter();
        _this.setAutoContrast();
        return _this;
    }
    Object.defineProperty(LyTabs.prototype, "indicatorColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== this.indicatorColor) {
                this._color = val;
                this._colorClass = this.theme.addStyle("k-tab-indicator-color:" + val, function (theme) { return ("color:" + theme.colorOf(val) + ";"); }, this.tabsIndicator.nativeElement, this._colorClass);
                if (this._selectedTab) {
                    this.theme.updateClass(this._selectedTab.tabIndicator.nativeElement, this.renderer, this._colorClass);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTabs.prototype, "headerPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._headerPlacement;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            if (val !== this.headerPlacement) {
                this._headerPlacement = val;
                this._headerPlacementClass = this.theme.addStyle("lyTabs.headerPlacement:" + val, function () {
                    var _a, _b;
                    /** @type {?} */
                    var flexDirectionContainer;
                    /** @type {?} */
                    var flexDirection = _this._getFlexDirection(val);
                    /** @type {?} */
                    var position;
                    /** @type {?} */
                    var height = null;
                    /** @type {?} */
                    var width = null;
                    /** @type {?} */
                    var heightServer = null;
                    /** @type {?} */
                    var widthServer = null;
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
                            throw new Error("LyTabs: value:" + val + " do not is valid for `headerPlacement`");
                    }
                    if (val === YPosition.above || val === YPosition.below) {
                        flexDirection = 'row';
                    }
                    else {
                        flexDirection = 'column';
                    }
                    return _a = {},
                        _a["." + _this.classes.container] = {
                            flexDirection: flexDirectionContainer
                        },
                        _a["& ." + _this.classes.tabsIndicator + ",& ." + _this.classes.tabsIndicatorForServer] = (_b = {},
                            _b[position] = 0,
                            _b.height = height,
                            _b.width = width,
                            _b),
                        _a["." + _this.classes.tabsIndicatorForServer] = {
                            width: widthServer,
                            height: heightServer
                        },
                        _a["& ." + _this.classes.tabsLabels + ",& ." + _this.classes.tabContents] = { flexDirection: flexDirection },
                        _a["." + _this.classes.tabContents] = { flexDirection: flexDirection },
                        _a;
                }, this.el.nativeElement, this._headerPlacementClass, STYLE_PRIORITY);
                this._updateStylesOfSelectedTab();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTabs.prototype, "alignTabs", {
        get: /**
         * @return {?}
         */
        function () {
            return this._alignTabs;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _a, _b;
            this._alignTabs = val;
            this._alignTabsClass = this.theme.addStyle("lyAlignTabs: " + val, (val === 'stretch' ? (_a = {},
                _a["& ." + this.classes.tabsLabels + " ." + this.classes.tab] = {
                    flexBasis: 0,
                    flexGrow: 1
                },
                _a) : (_b = {},
                _b["& ." + this.classes.tabsLabels] = {
                    justifyContent: val in AlignAlias ? AlignAlias[val] : val
                },
                _b)), this.el.nativeElement, this._alignTabsClass, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTabs.prototype, "textColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._textColor;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this._textColor = val;
            this._textColorClass = this.theme.addStyle("lyTabs.textColor:" + val, function (theme) {
                var _a;
                return (_a = {},
                    _a["& ." + _this.classes.tabLabelActive] = {
                        color: theme.colorOf(val)
                    },
                    _a);
            }, this.el.nativeElement, this._textColorClass, STYLE_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTabs.prototype, "selectedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            if (val !== this.selectedIndex) {
                this._selectedBeforeIndex = (/** @type {?} */ (this._selectedIndex));
                this._selectedIndex = this._findIndex(val, 'auto');
                this._selectedBeforeTab = this._selectedTab;
                this.selectedIndexChange.emit(this._selectedIndex);
                this._updateIndicator(this._selectedTab, this._selectedBeforeTab);
                this._markForCheck();
                Promise.resolve(null).then(function () {
                    _this._updateStylesOfSelectedTab();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyTabs.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._isViewInitLoaded) {
            this.updateStyle(this.tabsRef.nativeElement);
        }
    };
    /**
     * @return {?}
     */
    LyTabs.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, this.classes.root);
        /** @type {?} */
        var tabsIndicatorEl = this.tabsIndicator.nativeElement;
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
    };
    /**
     * @return {?}
     */
    LyTabs.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._tabsSubscription = this.tabsList.changes.subscribe(function () {
            if (_this._selectedIndex !== _this.selectedIndexOnChange) {
                _this.selectedIndex = _this._findIndex(_this.selectedIndex, _this.selectedIndexOnChange);
            }
            _this.cd.markForCheck();
        });
    };
    /**
     * @return {?}
     */
    LyTabs.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateStyle(this.tabsRef.nativeElement);
        this._isViewInitLoaded = true;
        if (Platform.isBrowser) {
            this._tabResizeSub = this._resizeService.resize$.subscribe(function () {
                _this._updateIndicator(_this._selectedTab);
            });
        }
    };
    /**
     * @return {?}
     */
    LyTabs.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tabsSubscription.unsubscribe();
        if (this._tabResizeSub) {
            this._tabResizeSub.unsubscribe();
        }
    };
    /**
     * @param {?} selectedIndex
     * @param {?} index
     * @return {?}
     */
    LyTabs.prototype._findIndex = /**
     * @param {?} selectedIndex
     * @param {?} index
     * @return {?}
     */
    function (selectedIndex, index) {
        if (!this.tabsList) {
            return selectedIndex;
        }
        /** @type {?} */
        var indexOfLastTab = this.tabsList.length - 1;
        /** @type {?} */
        var currentIndex = typeof index === 'number' ? index : selectedIndex;
        return currentIndex < 0 ? 0 : currentIndex > indexOfLastTab ? indexOfLastTab : currentIndex;
    };
    /**
     * @param {?} currentTab
     * @param {?=} beforeTab
     * @return {?}
     */
    LyTabs.prototype._updateIndicator = /**
     * @param {?} currentTab
     * @param {?=} beforeTab
     * @return {?}
     */
    function (currentTab, beforeTab) {
        /** @type {?} */
        var currentIndex = this.selectedIndex;
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
                var el = (/** @type {?} */ (currentTab._el.nativeElement));
                /** @type {?} */
                var rects = el.getBoundingClientRect();
                if (this.headerPlacement === XPosition.after || this.headerPlacement === XPosition.before) {
                    this.renderer.setStyle(this.tabsIndicator.nativeElement, 'height', rects.height + "px");
                    this.renderer.setStyle(this.tabsIndicator.nativeElement, 'top', el.offsetTop + "px");
                    this.renderer.removeStyle(this.tabsIndicator.nativeElement, 'width');
                    this.renderer.removeStyle(this.tabsIndicator.nativeElement, 'left');
                }
                else {
                    this.renderer.setStyle(this.tabsIndicator.nativeElement, 'width', rects.width + "px");
                    this.renderer.setStyle(this.tabsIndicator.nativeElement, 'left', el.offsetLeft + "px");
                    this.renderer.removeStyle(this.tabsIndicator.nativeElement, 'height');
                    this.renderer.removeStyle(this.tabsIndicator.nativeElement, 'top');
                }
            }
        }
    };
    /**
     * @return {?}
     */
    LyTabs.prototype._updateStylesOfSelectedTab = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var index = this._selectedIndex;
        /** @type {?} */
        var placement = this.headerPlacement;
        this._selectedIndexClass = this._theme.addStyle("lyTabs.selectedIndex:" + index + "+" + placement, function (theme) {
            /** @type {?} */
            var sign = 1;
            /** @type {?} */
            var position = _this._getFlexDirection(placement) === 'column' ? 'Y' : 'X';
            if (theme.direction === Dir.ltr || position === 'Y') {
                sign = -1;
            }
            return {
                transform: "translate" + position + "(" + index * 100 * sign + "%)"
            };
        }, this.tabContents.nativeElement, this._selectedIndexClass, STYLE_PRIORITY);
        this.renderer.addClass(this.tabContents.nativeElement, this._selectedIndexClass);
    };
    /**
     * @return {?}
     */
    LyTabs.prototype._markForCheck = /**
     * @return {?}
     */
    function () {
        this.cd.markForCheck();
    };
    /**
     * @param {?} tab
     * @param {?} index
     * @return {?}
     */
    LyTabs.prototype.loadTemplate = /**
     * @param {?} tab
     * @param {?} index
     * @return {?}
     */
    function (tab, index) {
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
    };
    /**
     * @param {?} val
     * @return {?}
     */
    LyTabs.prototype._getFlexDirection = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var flexDirection;
        if (val === YPosition.above || val === YPosition.below) {
            flexDirection = 'row';
        }
        else {
            flexDirection = 'column';
        }
        return flexDirection;
    };
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
    LyTabs.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: ResizeService }
    ]; };
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
        tabsList: [{ type: ContentChildren, args: [forwardRef(function () { return LyTab; }),] }]
    };
    return LyTabs;
}(LyTabsMixinBase));
export { LyTabs };
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
var LyTab = /** @class */ (function () {
    function LyTab(_tabs, _renderer, _el) {
        this._tabs = _tabs;
        this._renderer = _renderer;
        this._el = _el;
    }
    /**
     * @return {?}
     */
    LyTab.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el.nativeElement, this._tabs.classes.tab);
    };
    LyTab.decorators = [
        { type: Component, args: [{
                    selector: 'ly-tab',
                    template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<span #tabIndicator></span>\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    LyTab.ctorParameters = function () { return [
        { type: LyTabs },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LyTab.propDecorators = {
        templateRefLazy: [{ type: ContentChild, args: [LyTabContent, { read: TemplateRef },] }],
        templateRef: [{ type: ViewChild, args: [TemplateRef,] }],
        tabIndicator: [{ type: ViewChild, args: ['tabIndicator',] }]
    };
    return LyTab;
}());
export { LyTab };
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
var LyTabLabel = /** @class */ (function (_super) {
    tslib_1.__extends(LyTabLabel, _super);
    function LyTabLabel(_el, _renderer, _theme, _ngZone, _rippleService, _focusState, _tab, _tabs) {
        var _this = _super.call(this, _el, _renderer, _theme, _ngZone, _rippleService, _focusState) || this;
        _this._tab = _tab;
        _this._tabs = _tabs;
        _this._isBrowser = Platform.isBrowser;
        return _this;
    }
    /**
     * @return {?}
     */
    LyTabLabel.prototype.onClickTab = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this._tabs.selectedIndex = this._tab.index;
        }
    };
    /**
     * @return {?}
     */
    LyTabLabel.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el.nativeElement, this._tabs.classes.label);
        // set default disable ripple
        if (this.disableRipple === null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    };
    /**
     * @return {?}
     */
    LyTabLabel.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.isAfterViewInit) {
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
        }
    };
    /**
     * @return {?}
     */
    LyTabLabel.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isAfterViewInit = true;
    };
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
    LyTabLabel.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: NgZone },
        { type: LyRippleService },
        { type: LyFocusState },
        { type: LyTab, decorators: [{ type: Optional }] },
        { type: LyTabs, decorators: [{ type: Optional }] }
    ]; };
    LyTabLabel.propDecorators = {
        _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
        onClickTab: [{ type: HostListener, args: ['click',] }]
    };
    return LyTabLabel;
}(LyButton));
export { LyTabLabel };
if (false) {
    /** @type {?} */
    LyTabLabel.prototype._active;
    /** @type {?} */
    LyTabLabel.prototype.isAfterViewInit;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGFicy8iLCJzb3VyY2VzIjpbInRhYnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFFakIsUUFBUSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxhQUFhLEVBQ2IsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsUUFBUSxFQUVSLFVBQVUsRUFDVixTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDSCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixhQUFhLEVBQ1osTUFBTSxXQUFXLENBQUM7QUFDckIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQUU5QixzQkFBc0IsR0FBRyxLQUFLOztJQUM5QixjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQixVQUFVLEdBQUcsU0FBUzs7SUFDdEIsdUJBQXVCLEdBQUcsUUFBUTs7SUFDbEMsaUJBQWlCLEdBQUcsQ0FBQzs7SUFDckIsd0JBQXdCLEdBQUcsT0FBTzs7SUFJbEMsTUFBTSxHQUFHLFVBQUMsS0FBcUI7O0lBQUssT0FBQSxD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LGNBQWMsQ0FBQyxDQUFDO2FBQ3ZGO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsb0NBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw4TEFBNkI7b0JBQzdCLE1BQU0sRUFBRTt3QkFDTixJQUFJO3dCQUNKLE9BQU87d0JBQ1AsUUFBUTt3QkFDUixVQUFVO3dCQUNWLFVBQVU7d0JBQ1YsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGVBQWU7cUJBQ2hCO29CQUNELElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsVUFBVTtxQkFDekI7aUJBQ0Y7Ozs7Z0JBemhCQyxVQUFVO2dCQVdWLFNBQVM7Z0JBUVQsUUFBUTtnQkFkUixNQUFNO2dCQThCTixlQUFlO2dCQUNmLFlBQVk7Z0JBdWdCZ0IsS0FBSyx1QkFBOUIsUUFBUTtnQkFDa0IsTUFBTSx1QkFBaEMsUUFBUTs7O21DQWRWLFNBQVMsU0FBQyxpQkFBaUI7NkJBQzNCLFlBQVksU0FBQyxPQUFPOztJQStDdkIsaUJBQUM7Q0FBQSxBQXJFRCxDQWlCZ0MsUUFBUSxHQW9EdkM7U0FwRFksVUFBVTs7O0lBQ3JCLDZCQUF5Qjs7SUFDekIscUNBQWlDOztJQUNqQyxnQ0FBZ0M7O0lBQ2hDLHNDQUEyRDs7SUFhekQsMEJBQStCOztJQUMvQiwyQkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRG9DaGVjayxcbiAgT3B0aW9uYWxcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgQWxpZ25BbGlhcyxcbiAgWVBvc2l0aW9uLFxuICBYUG9zaXRpb24sXG4gIERpcixcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeUZvY3VzU3RhdGUsXG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIFJlc2l6ZVNlcnZpY2VcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCdXR0b24gfSBmcm9tICdAYWx5bGUvdWkvYnV0dG9uJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9CRyA9ICdwcmltYXJ5JztcbmNvbnN0IERFRkFVTFRfSU5ESUNBVE9SX0NPTE9SID0gJ2FjY2VudCc7XG5jb25zdCBERUZBVUxUX0VMRVZBVElPTiA9IDQ7XG5jb25zdCBERUZBVUxUX0hFQURFUl9QTEFDRU1FTlQgPSAnYWJvdmUnO1xuZXhwb3J0IHR5cGUgQWxpZ25UYWJzID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCcgfCAnc3RyZXRjaCcgfCAnYmFzZWxpbmUnO1xuZXhwb3J0IHR5cGUgTHlUYWJzSGVhZGVyUGxhY2VtZW50ID0gJ2JlZm9yZScgfCAnYWZ0ZXInIHwgJ2Fib3ZlJyB8ICdiZWxvdyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xuICB9LFxuICB0YWI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnXG4gIH0sXG4gIC8qKiBUYWIgY29udGVudCAqL1xuICBjb250ZW50Q29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGZsZXhHcm93OiAxXG4gIH0sXG4gIC8qKiBUYWIgaGVhZGVyICovXG4gIHRhYnNMYWJlbHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgYm9yZGVyOiAwLFxuICAgIG1pbldpZHRoOiAnNzJweCcsXG4gICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplKSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMjg1N2VtJyxcbiAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIG9wYWNpdHk6IC43LFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIHBhZGRpbmc6ICcwIDEycHgnXG4gICAgfVxuICB9LFxuICB0YWJMYWJlbEFjdGl2ZToge1xuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgdGFiQ29udGVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfSxcbiAgdGFiQ29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZmxleFNocmluazogMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgaGVpZ2h0OiAnMnB4JyxcbiAgICB0cmFuc2l0aW9uOiAnNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJyxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yRm9yU2VydmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgcmlwcGxlQ29udGFpbmVyOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9XG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVRhYnNCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVRhYnNNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihtaXhpbkJnKG1peGluRWxldmF0aW9uKG1peGluU2hhZG93Q29sb3IoTHlUYWJzQmFzZSkpKSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlUYWJMYWJlbE1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlUYWJMYWJlbEJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy5kaXJlY3RpdmUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ2x5VGFicycsXG4gIGlucHV0czogW1xuICAgICdiZycsICdlbGV2YXRpb24nLCAnc2hhZG93Q29sb3InXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzIGV4dGVuZHMgTHlUYWJzTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIF9zZWxlY3RlZEluZGV4ID0gMDtcbiAgX3NlbGVjdGVkQmVmb3JlSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkVGFiOiBMeVRhYjtcbiAgX3NlbGVjdGVkQmVmb3JlVGFiOiBMeVRhYjtcbiAgcHJpdmF0ZSBfdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfaXNWaWV3SW5pdExvYWRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3JDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oZWFkZXJQbGFjZW1lbnQ6IEx5VGFic0hlYWRlclBsYWNlbWVudDtcbiAgcHJpdmF0ZSBfaGVhZGVyUGxhY2VtZW50Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfYWxpZ25UYWJzOiBBbGlnblRhYnM7XG4gIHByaXZhdGUgX2FsaWduVGFic0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RleHRDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF90ZXh0Q29sb3JDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFiUmVzaXplU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgQFZpZXdDaGlsZCgndGFicycpIHRhYnNSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnRzJykgdGFiQ29udGVudHM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYnNJbmRpY2F0b3InKSB0YWJzSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4T25DaGFuZ2U6ICdhdXRvJyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCkgbmF0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzZXQgaW5kaWNhdG9yQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmluZGljYXRvckNvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgay10YWItaW5kaWNhdG9yLWNvbG9yOiR7dmFsfWAsXG4gICAgICAgIHRoZW1lID0+IChcbiAgICAgICAgICBgY29sb3I6JHt0aGVtZS5jb2xvck9mKHZhbCl9O2BcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3MpO1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkVGFiKSB7XG4gICAgICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3ModGhpcy5fc2VsZWN0ZWRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMuX2NvbG9yQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgaW5kaWNhdG9yQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGhlYWRlclBsYWNlbWVudCh2YWw6IEx5VGFic0hlYWRlclBsYWNlbWVudCkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuaGVhZGVyUGxhY2VtZW50KSB7XG4gICAgICB0aGlzLl9oZWFkZXJQbGFjZW1lbnQgPSB2YWw7XG4gICAgICB0aGlzLl9oZWFkZXJQbGFjZW1lbnRDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5VGFicy5oZWFkZXJQbGFjZW1lbnQ6JHt2YWx9YCxcbiAgICAgICgpID0+IHtcbiAgICAgICAgbGV0IGZsZXhEaXJlY3Rpb25Db250YWluZXI6IHN0cmluZztcbiAgICAgICAgbGV0IGZsZXhEaXJlY3Rpb24gPSB0aGlzLl9nZXRGbGV4RGlyZWN0aW9uKHZhbCk7XG4gICAgICAgIGxldCBwb3NpdGlvbjogc3RyaW5nO1xuICAgICAgICBsZXQgaGVpZ2h0OiBzdHJpbmcgPSBudWxsO1xuICAgICAgICBsZXQgd2lkdGg6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIGxldCBoZWlnaHRTZXJ2ZXI6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIGxldCB3aWR0aFNlcnZlcjogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgc3dpdGNoICh2YWwpIHtcbiAgICAgICAgICBjYXNlIFlQb3NpdGlvbi5hYm92ZTpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAnY29sdW1uJztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWVBvc2l0aW9uLmJlbG93O1xuICAgICAgICAgICAgaGVpZ2h0ID0gJzJweCc7XG4gICAgICAgICAgICB3aWR0aFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWVBvc2l0aW9uLmJlbG93OlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdjb2x1bW4tcmV2ZXJzZSc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFlQb3NpdGlvbi5hYm92ZTtcbiAgICAgICAgICAgIGhlaWdodCA9ICcycHgnO1xuICAgICAgICAgICAgd2lkdGhTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFhQb3NpdGlvbi5iZWZvcmU6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ3Jvdyc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFhQb3NpdGlvbi5hZnRlcjtcbiAgICAgICAgICAgIHdpZHRoID0gJzJweCc7XG4gICAgICAgICAgICBoZWlnaHRTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFhQb3NpdGlvbi5hZnRlcjpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAncm93LXJldmVyc2UnO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBYUG9zaXRpb24uYmVmb3JlO1xuICAgICAgICAgICAgd2lkdGggPSAnMnB4JztcbiAgICAgICAgICAgIGhlaWdodFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTHlUYWJzOiB2YWx1ZToke3ZhbH0gZG8gbm90IGlzIHZhbGlkIGZvciBcXGBoZWFkZXJQbGFjZW1lbnRcXGBgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdmFsID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uID0gJ3Jvdyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfWBdOiB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBmbGV4RGlyZWN0aW9uQ29udGFpbmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3J9LCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXJ9YF06IHtcbiAgICAgICAgICAgIFtwb3NpdGlvbl06IDAsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICB3aWR0aFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcn1gXToge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoU2VydmVyLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRTZXJ2ZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc30sJiAuJHt0aGlzLmNsYXNzZXMudGFiQ29udGVudHN9YF06IHsgZmxleERpcmVjdGlvbiB9LFxuICAgICAgICAgIFtgLiR7dGhpcy5jbGFzc2VzLnRhYkNvbnRlbnRzfWBdOiB7IGZsZXhEaXJlY3Rpb24gfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudENsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgdGhpcy5fdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpO1xuICAgIH1cbiAgfVxuICBnZXQgaGVhZGVyUGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJQbGFjZW1lbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWxpZ25UYWJzKHZhbDogQWxpZ25UYWJzKSB7XG4gICAgdGhpcy5fYWxpZ25UYWJzID0gdmFsO1xuICAgIHRoaXMuX2FsaWduVGFic0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlBbGlnblRhYnM6ICR7dmFsfWAsXG4gICAgKFxuICAgICAgdmFsID09PSAnc3RyZXRjaCcgPyB7XG4gICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc30gLiR7dGhpcy5jbGFzc2VzLnRhYn1gXToge1xuICAgICAgICAgIGZsZXhCYXNpczogMCxcbiAgICAgICAgICBmbGV4R3JvdzogMVxuICAgICAgICB9XG4gICAgICB9IDoge1xuICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNMYWJlbHN9YF06IHtcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogdmFsIGluIEFsaWduQWxpYXMgPyBBbGlnbkFsaWFzW3ZhbF0gOiB2YWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICksXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX2FsaWduVGFic0NsYXNzLFxuICAgIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICBnZXQgYWxpZ25UYWJzKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnblRhYnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdGV4dENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGV4dENvbG9yID0gdmFsO1xuICAgIHRoaXMuX3RleHRDb2xvckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlUYWJzLnRleHRDb2xvcjoke3ZhbH1gLFxuICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlfWBdOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbClcbiAgICAgIH1cbiAgICB9KSxcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fdGV4dENvbG9yQ2xhc3MsXG4gICAgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCB0ZXh0Q29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRDb2xvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZUluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCBhcyBudW1iZXI7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHZhbCwgJ2F1dG8nKTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlVGFiID0gdGhpcy5fc2VsZWN0ZWRUYWI7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcbiAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0aGlzLl9zZWxlY3RlZFRhYiwgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlc09mU2VsZWN0ZWRUYWIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5VGFiKSkgdGFic0xpc3Q6IFF1ZXJ5TGlzdDxMeVRhYj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogUmVzaXplU2VydmljZVxuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLl9pc1ZpZXdJbml0TG9hZGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMudGFic1JlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGNvbnN0IHRhYnNJbmRpY2F0b3JFbCA9IHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFic0luZGljYXRvckVsLCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcik7XG4gICAgLyoqIFNldCBkZWZhdWx0IENvbG9yICovXG4gICAgaWYgKCF0aGlzLmluZGljYXRvckNvbG9yICYmICF0aGlzLmJnICYmICF0aGlzLnRleHRDb2xvciAmJiAhdGhpcy5lbGV2YXRpb24pIHtcbiAgICAgIHRoaXMuaW5kaWNhdG9yQ29sb3IgPSBERUZBVUxUX0lORElDQVRPUl9DT0xPUjtcbiAgICAgIHRoaXMuYmcgPSBERUZBVUxUX0JHO1xuICAgICAgdGhpcy5lbGV2YXRpb24gPSBERUZBVUxUX0VMRVZBVElPTjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhlYWRlclBsYWNlbWVudCkge1xuICAgICAgdGhpcy5oZWFkZXJQbGFjZW1lbnQgPSBERUZBVUxUX0hFQURFUl9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24gPSB0aGlzLnRhYnNMaXN0LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4LCB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX2lzVmlld0luaXRMb2FkZWQgPSB0cnVlO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3RhYlJlc2l6ZVN1YiA9IHRoaXMuX3Jlc2l6ZVNlcnZpY2UucmVzaXplJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGhpcy5fc2VsZWN0ZWRUYWIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLl90YWJSZXNpemVTdWIpIHtcbiAgICAgIHRoaXMuX3RhYlJlc2l6ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbmRJbmRleChzZWxlY3RlZEluZGV4OiBudW1iZXIsIGluZGV4OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMudGFic0xpc3QpIHtcbiAgICAgIHJldHVybiBzZWxlY3RlZEluZGV4O1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mTGFzdFRhYiA9IHRoaXMudGFic0xpc3QubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInID8gaW5kZXggOiBzZWxlY3RlZEluZGV4O1xuICAgIHJldHVybiBjdXJyZW50SW5kZXggPCAwID8gMCA6IGN1cnJlbnRJbmRleCA+IGluZGV4T2ZMYXN0VGFiID8gaW5kZXhPZkxhc3RUYWIgOiBjdXJyZW50SW5kZXg7XG4gIH1cblxuICBfdXBkYXRlSW5kaWNhdG9yKGN1cnJlbnRUYWI6IEx5VGFiLCBiZWZvcmVUYWI/OiBMeVRhYik6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgaWYgKCF0aGlzLl9pc1ZpZXdJbml0TG9hZGVkIHx8ICFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgLyoqIGZvciBiZWZvcmUgaW5pdGlhbGl6ZSBvciBmb3Igc2VydmVyICovXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY3VycmVudFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGN1cnJlbnRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZm9yIGFmdGVyIGluaXRpYWxpemUgJiYgZm9yIGJyb3dzZXJcbiAgICAgICAgLy8gQ2xlYW4gYmVmb3JlIHRhYlxuICAgICAgICBpZiAoYmVmb3JlVGFiKSB7XG4gICAgICAgICAgYmVmb3JlVGFiLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoYmVmb3JlVGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCAnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFRhYi5pbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgLy8gdGhpcyBmaXhlZCB1bmRlZmluZWQgc2VsZWN0ZWQgdGFiXG4gICAgICAgICAgY3VycmVudFRhYiA9IHRoaXMudGFic0xpc3QudG9BcnJheSgpW2N1cnJlbnRJbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWwgPSBjdXJyZW50VGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCByZWN0cyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmhlYWRlclBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmFmdGVyIHx8IHRoaXMuaGVhZGVyUGxhY2VtZW50ID09PSBYUG9zaXRpb24uYmVmb3JlKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3JlY3RzLmhlaWdodH1weGApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBgJHtlbC5vZmZzZXRUb3B9cHhgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnbGVmdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3JlY3RzLndpZHRofXB4YCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBgJHtlbC5vZmZzZXRMZWZ0fXB4YCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd0b3AnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlc09mU2VsZWN0ZWRUYWIoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHRoaXMuaGVhZGVyUGxhY2VtZW50O1xuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseVRhYnMuc2VsZWN0ZWRJbmRleDoke2luZGV4fSske3BsYWNlbWVudH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBsZXQgc2lnbiA9IDE7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2dldEZsZXhEaXJlY3Rpb24ocGxhY2VtZW50KSA9PT0gJ2NvbHVtbicgPyAnWScgOiAnWCc7XG4gICAgICBpZiAodGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyIHx8IHBvc2l0aW9uID09PSAnWScpIHtcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlJHtwb3NpdGlvbn0oJHtpbmRleCAqIDEwMCAqIHNpZ259JSlgXG4gICAgICB9O1xuICAgIH0sIHRoaXMudGFiQ29udGVudHMubmF0aXZlRWxlbWVudCwgdGhpcy5fc2VsZWN0ZWRJbmRleENsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcyk7XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBsb2FkVGVtcGxhdGUodGFiOiBMeVRhYiwgaW5kZXg6IG51bWJlcik6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD4gfCBudWxsIHtcbiAgICB0YWIuaW5kZXggPSBpbmRleDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIC8vIHNldCAwIGlmIGlzIG51bGxcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gdGFiO1xuICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgcmV0dXJuIHRhYi50ZW1wbGF0ZVJlZkxhenkgfHwgdGFiLnRlbXBsYXRlUmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRGbGV4RGlyZWN0aW9uKHZhbDogTHlUYWJzSGVhZGVyUGxhY2VtZW50KSB7XG4gICAgbGV0IGZsZXhEaXJlY3Rpb246IHN0cmluZztcbiAgICBpZiAodmFsID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdmFsID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgIGZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICB9IGVsc2Uge1xuICAgICAgZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgIH1cbiAgICByZXR1cm4gZmxleERpcmVjdGlvbjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWIgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbmRleDogbnVtYmVyO1xuICBAQ29udGVudENoaWxkKEx5VGFiQ29udGVudCwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0ZW1wbGF0ZVJlZkxhenk6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD47XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0YWJJbmRpY2F0b3InKSB0YWJJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGFiczogTHlUYWJzLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LXRhYi1sYWJlbF0nLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1sYWJlbC5odG1sJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdLFxuICBob3N0OiB7XG4gICAgJ1tkaXNhYmxlZF0nOiAnZGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbCBleHRlbmRzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuO1xuICBwcml2YXRlIGlzQWZ0ZXJWaWV3SW5pdDogYm9vbGVhbjtcbiAgX2lzQnJvd3NlciA9IFBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrVGFiKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fdGFicy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fdGFiLmluZGV4O1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBfZWw6IEVsZW1lbnRSZWYsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYjogTHlUYWIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfdGFiczogTHlUYWJzXG4gICkge1xuICAgIHN1cGVyKF9lbCwgX3JlbmRlcmVyLCBfdGhlbWUsIF9uZ1pvbmUsIF9yaXBwbGVTZXJ2aWNlLCBfZm9jdXNTdGF0ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMubGFiZWwpO1xuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuaXNBZnRlclZpZXdJbml0KSB7XG4gICAgICBpZiAodGhpcy5fdGFicy5fc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5fdGFiLmluZGV4KSB7XG4gICAgICAgIGlmICghdGhpcy5fYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMudGFiTGFiZWxBY3RpdmUpO1xuICAgICAgICAgIC8qKiBVcGRhdGUgdGFiIGluZGljYXRvciAqL1xuICAgICAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYnMuX3VwZGF0ZUluZGljYXRvcih0aGlzLl90YWIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy50YWJMYWJlbEFjdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaXNBZnRlclZpZXdJbml0ID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIGRlbW8gYmFzaWNcbiAqIDxseS10YWJzIHdpdGhDb2xvcj1cImFjY2VudFwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8L2J1dHRvbj5cbiAqICAgICBDb250ZW50XG4gKiAgIDwvbHktdGFiPlxuICogICA8bHktdGFiPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8L2J1dHRvbj5cbiAqICAgICBDb250ZW50XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqXG4gKiBkZW1vIGxhenkgbG9hZGluZ1xuICogPGx5LXRhYnMgd2l0aEJnPVwicHJpbWFyeVwiPlxuICogICA8bHktdGFiPlxuICogICAgIDxidXR0b24gbHktdGFiLWxhYmVsPkhPTUU8L2J1dHRvbj5cbiAqICAgICA8bmctdGVtcGxhdGUgbHktdGFiLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbiAqICAgPC9seS10YWI+XG4gKiAgIC4uLlxuICogPC9seS10YWJzPlxuICogPT4gc2VsZWN0ZWRJbmRleE9uQ2hhbmdlLCBkZWZhdWx0OiBhdXRvLCBvcHRzOiBudW1iZXIsIHdpdGggYXV0bywgdGhlIHNlbGVjdGVkSW5kZXggPSBjdXJyZW50IG8gY3VycmVudC0xIG9yIGxhdGVzdFxuICovXG4iXX0=