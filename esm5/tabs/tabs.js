import * as tslib_1 from "tslib";
import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, OnChanges, OnDestroy, OnInit, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, Optional } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, Platform, ThemeVariables, AlignAlias, YPosition, XPosition, Dir, LyRippleService, LyFocusState, WinResize, scrollWithAnimation, toBoolean, LyHostClass, styleTemplateToString, LY_COMMON_STYLES, ThemeRef, StyleCollection, LyClasses, StyleTemplate } from '@alyle/ui';
import { LyButton } from '@alyle/ui/button';
import { LyTabContent } from './tab-content.directive';
import { Subscription } from 'rxjs';
var DEFAULT_DISABLE_RIPPLE = false;
var STYLE_PRIORITY = -2;
var DEFAULT_BG = 'primary';
var DEFAULT_INDICATOR_COLOR = 'accent';
var DEFAULT_ELEVATION = 4;
var DEFAULT_HEADER_PLACEMENT = 'above';
export var STYLES = function (theme, ref) {
    var __ = ref.selectorsOf(STYLES);
    return {
        $name: LyTabs.и,
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{display:block;}" + styleTemplateToString(((theme.tab
            && theme.tab.root
            && (theme.tab.root instanceof StyleCollection
                ? theme.tab.root.setTransformer(function (fn) { return fn(__); }).css
                : theme.tab.root(__)))), "" + className); }; },
        container: function (className) { return className + "{display:flex;}"; },
        tab: function (className) { return className + "{position:relative;display:inline-flex;}"; },
        /** Tab content */
        contentContainer: function (className) { return className + "{overflow:hidden;flex-grow:1;}"; },
        /** Tab header */
        tabsLabels: function (className) { return className + "{display:flex;position:relative;}"; },
        tabsLabelsContainer: function () { return function (className) { return className + "{overflow:hidden;}@media (hover: none){" + __.scrollable + " " + className + "{overflow:auto;}}"; }; },
        label: function (className) { return className + "{-webkit-tap-highlight-color:transparent;-webkit-appearance:none;background-color:transparent;user-select:none;border:0;min-width:72px;padding:0 24px;cursor:pointer;height:48px;display:inline-flex;justify-content:center;align-items:center;position:relative;overflow:hidden;font-family:" + theme.typography.fontFamily + ";font-size:" + theme.pxToRem(theme.typography.fontSize) + ";letter-spacing:0.02857em;color:currentColor;outline:none;width:100%;font-weight:500;opacity:.7;}" + className + " " + theme.getBreakpoint('XSmall') + "{padding:0 12px;}"; },
        tabLabelActive: function (className) { return className + "{opacity:1;}"; },
        tabContents: function (className) { return className + "{display:flex;transition:450ms cubic-bezier(.1, 1, 0.5, 1);will-change:transform;height:100%;}"; },
        tabContent: function (className) { return className + "{width:100%;height:100%;flex-shrink:0;position:relative;}"; },
        tabsIndicator: function (className) { return className + "{position:absolute;height:2px;transition:450ms cubic-bezier(.1, 1, 0.5, 1);background:currentColor;}"; },
        tabsIndicatorForServer: function (className) { return className + "{position:absolute;background:currentColor;}"; },
        rippleContainer: function (className) { return "" + styleTemplateToString((LY_COMMON_STYLES.fill), "" + className) + className + "{overflow:hidden;}"; },
        scrollable: null
    };
};
/** @docs-private */
var LyTabsBase = /** @class */ (function () {
    function LyTabsBase(_theme) {
        this._theme = _theme;
    }
    return LyTabsBase;
}());
export { LyTabsBase };
/** @docs-private */
export var LyTabsMixinBase = mixinStyleUpdater(mixinBg(mixinElevation(mixinShadowColor(LyTabsBase))));
/** @docs-private */
var LyTabLabelBase = /** @class */ (function () {
    function LyTabLabelBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyTabLabelBase;
}());
export { LyTabLabelBase };
/** @docs-private */
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
        /** @docs-private */
        _this.classes = _this.theme.renderStyleSheet(STYLES);
        _this._tabsSubscription = Subscription.EMPTY;
        _this.selectedIndexOnChange = 'auto';
        _this.selectedIndexChange = new EventEmitter();
        _this.setAutoContrast();
        return _this;
    }
    Object.defineProperty(LyTabs.prototype, "scrollable", {
        get: function () {
            return this._scrollable;
        },
        set: function (val) {
            var newVal = toBoolean(val);
            if (newVal) {
                this.renderer.addClass(this.el.nativeElement, this.classes.scrollable);
            }
            else if (this._scrollable != null) {
                this.renderer.removeClass(this.el.nativeElement, this.classes.scrollable);
            }
            this._scrollable = newVal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTabs.prototype, "indicatorColor", {
        get: function () {
            return this._color;
        },
        set: function (val) {
            if (val !== this.indicatorColor) {
                this._color = val;
                this._colorClass = this.theme.addStyle("k-tab-indicator-color:" + val, function (theme) { return ("color:" + theme.colorOf(val) + ";"); }, this.tabsIndicator.nativeElement, this._colorClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyTabs.prototype, "headerPlacement", {
        get: function () {
            return this._headerPlacement;
        },
        set: function (val) {
            var _this = this;
            if (val !== this.headerPlacement) {
                this._headerPlacement = val;
                this._headerPlacementClass = this.theme.addStyle("lyTabs.headerPlacement:" + val, function () {
                    var _a, _b;
                    var flexDirectionContainer;
                    var flexDirection = _this._getFlexDirection(val);
                    var position;
                    var height = null;
                    var width = null;
                    var heightServer = null;
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
        get: function () {
            return this._alignTabs;
        },
        set: function (val) {
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
        get: function () {
            return this._textColor;
        },
        set: function (val) {
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
        get: function () {
            return this._selectedIndex;
        },
        set: function (val) {
            var _this = this;
            if (val !== this.selectedIndex) {
                this._selectedBeforeIndex = this._selectedIndex;
                this._selectedIndex = this._findIndex(val, 'auto');
                this._selectedBeforeTab = this._selectedTab;
                this.selectedIndexChange.emit(this._selectedIndex);
                this._markForCheck();
                Promise.resolve(null).then(function () {
                    _this._updateStylesOfSelectedTab();
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    LyTabs.prototype.ngOnChanges = function () {
        if (this._isViewInitLoaded) {
            this.updateStyle(this.tabsRef.nativeElement);
        }
    };
    LyTabs.prototype.ngOnInit = function () {
        if (this.selectedIndex == null) {
            this.selectedIndex = 0;
        }
        this.renderer.addClass(this.el.nativeElement, this.classes.root);
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
    LyTabs.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._tabsSubscription = this.tabsList.changes.subscribe(function () {
            if (_this._selectedIndex !== _this.selectedIndexOnChange) {
                _this.selectedIndex = _this._findIndex(_this.selectedIndex, _this.selectedIndexOnChange);
            }
            _this.cd.markForCheck();
        });
    };
    LyTabs.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.updateStyle(this.tabsRef.nativeElement);
        this._isViewInitLoaded = true;
        if (Platform.isBrowser) {
            this._tabResizeSub = this._resizeService.resize$.subscribe(function () {
                if (_this._selectedTab) {
                    _this._updateIndicator(_this._selectedTab);
                    _this._selectedTab._tabLabel._updateTabScroll();
                }
            });
        }
    };
    LyTabs.prototype.ngOnDestroy = function () {
        this._tabsSubscription.unsubscribe();
        if (this._tabResizeSub) {
            this._tabResizeSub.unsubscribe();
        }
    };
    LyTabs.prototype._findIndex = function (selectedIndex, index) {
        if (!this.tabsList) {
            return selectedIndex;
        }
        var indexOfLastTab = this.tabsList.length - 1;
        var currentIndex = typeof index === 'number' ? index : selectedIndex;
        return currentIndex < 0 ? 0 : currentIndex > indexOfLastTab ? indexOfLastTab : currentIndex;
    };
    LyTabs.prototype._updateIndicator = function (currentTab, beforeTab) {
        if (currentTab) {
            if (beforeTab) {
                beforeTab._renderer.removeAttribute(beforeTab._tabIndicator.nativeElement, 'class');
            }
            var el = currentTab._el.nativeElement;
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
    };
    LyTabs.prototype._updateStylesOfSelectedTab = function () {
        var _this = this;
        var index = this._selectedIndex;
        var placement = this.headerPlacement;
        this._selectedIndexClass = this._theme.addStyle("lyTabs.selectedIndex:" + index + "+" + placement, function (theme) {
            var sign = 1;
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
    LyTabs.prototype._markForCheck = function () {
        this.cd.markForCheck();
    };
    LyTabs.prototype.loadTemplate = function (tab, index) {
        var _this = this;
        tab.index = index;
        if (this.selectedIndex === tab.index) {
            // set 0 if is null
            this._selectedTab = tab;
            Promise.resolve(null).then(function () {
                if (Platform.isBrowser) {
                    _this._updateIndicator(tab);
                }
                else {
                    // for server
                    var selectedBeforeTab = _this._selectedBeforeTab;
                    if (selectedBeforeTab) {
                        _this.renderer.removeClass(selectedBeforeTab._tabIndicator.nativeElement, _this.classes.tabsIndicatorForServer);
                        _this.renderer.removeClass(selectedBeforeTab._tabIndicator.nativeElement, _this._colorClass);
                    }
                    _this.renderer.addClass(_this._selectedTab._tabIndicator.nativeElement, _this.classes.tabsIndicatorForServer);
                    _this.renderer.addClass(_this._selectedTab._tabIndicator.nativeElement, _this._colorClass);
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
    };
    LyTabs.prototype._getFlexDirection = function (val) {
        var flexDirection;
        if (val === YPosition.above || val === YPosition.below) {
            flexDirection = 'row';
        }
        else {
            flexDirection = 'column';
        }
        return flexDirection;
    };
    /** @docs-private */
    LyTabs.и = 'LyTabs';
    LyTabs.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: WinResize }
    ]; };
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
        ContentChildren(forwardRef(function () { return LyTab; }))
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
    return LyTabs;
}(LyTabsMixinBase));
export { LyTabs };
var LyTab = /** @class */ (function () {
    function LyTab(_tabs, _renderer, _el) {
        this._tabs = _tabs;
        this._renderer = _renderer;
        this._el = _el;
        this._isBrowser = Platform.isBrowser;
    }
    LyTab.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el.nativeElement, this._tabs.classes.tab);
    };
    LyTab.ctorParameters = function () { return [
        { type: LyTabs },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
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
        ContentChild(forwardRef(function () { return LyTabLabel; }), { static: true })
    ], LyTab.prototype, "_tabLabel", void 0);
    LyTab = tslib_1.__decorate([
        Component({
            selector: 'ly-tab',
            template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<div></div>\n<span *ngIf=\"!_isBrowser\" #tabIndicator></span>\n<ng-template #_templateNgContent>\n  <ng-content></ng-content>\n</ng-template>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None
        })
    ], LyTab);
    return LyTab;
}());
export { LyTab };
var LyTabLabel = /** @class */ (function (_super) {
    tslib_1.__extends(LyTabLabel, _super);
    function LyTabLabel(_el, _renderer, _theme, _ngZone, _rippleService, _focusState, _hostClass, _tab, _tabs) {
        var _this = _super.call(this, _el, _renderer, _theme, _ngZone, _rippleService, _focusState, _hostClass, null) || this;
        _this._tab = _tab;
        _this._tabs = _tabs;
        _this._isBrowser = Platform.isBrowser;
        return _this;
    }
    Object.defineProperty(LyTabLabel.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (val) {
            var _this = this;
            var newVal = toBoolean(val);
            if (newVal && val !== this.active) {
                Promise.resolve(null).then(function () { return _this._tabs.selectedIndex = _this._tab.index; });
            }
        },
        enumerable: true,
        configurable: true
    });
    LyTabLabel.prototype._onClickTab = function () {
        if (!this.disabled) {
            this._tabs.selectedIndex = this._tab.index;
        }
    };
    LyTabLabel.prototype.ngOnInit = function () {
        this._renderer.addClass(this._el.nativeElement, this._tabs.classes.label);
        // set default disable ripple
        if (this.disableRipple == null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    };
    LyTabLabel.prototype._updateTabState = function () {
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
    };
    LyTabLabel.prototype._updateTabScroll = function () {
        if (Platform.isBrowser && this._tabs.scrollable) {
            var tab = this._tab._el.nativeElement;
            var tabContainer = this._tabs.tabsRef.nativeElement;
            if (tabContainer.scrollWidth !== tabContainer.offsetWidth) {
                var dir = this._theme.variables.direction;
                var max = tabContainer.scrollWidth - tabContainer.offsetWidth;
                var offsetBefore = dir === Dir.rtl
                    ? max + tab.offsetLeft
                    : tab.offsetLeft;
                var l = offsetBefore + tab.offsetWidth / 2 - tabContainer.offsetWidth / 2;
                var newVal = l >= max ? max : l <= 0 ? 0 : l;
                scrollWithAnimation(this._tabs.tabsRef.nativeElement, newVal, 350, 'x');
            }
        }
    };
    LyTabLabel.prototype.ngAfterViewInit = function () { };
    LyTabLabel.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: NgZone },
        { type: LyRippleService },
        { type: LyFocusState },
        { type: LyHostClass },
        { type: LyTab, decorators: [{ type: Optional }] },
        { type: LyTabs, decorators: [{ type: Optional }] }
    ]; };
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
    return LyTabLabel;
}(LyButton));
export { LyTabLabel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90YWJzLyIsInNvdXJjZXMiOlsidGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNqQixRQUFRLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUNMLFFBQVEsRUFDUixPQUFPLEVBQ1AsVUFBVSxFQUNWLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGFBQWEsRUFDYixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsY0FBYyxFQUNkLFVBQVUsRUFDVixTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDSCxlQUFlLEVBQ2YsWUFBWSxFQUNaLFNBQVMsRUFDVCxtQkFBbUIsRUFDbkIsU0FBUyxFQUNULFdBQVcsRUFDWCxxQkFBcUIsRUFDckIsZ0JBQWdCLEVBQ2hCLFFBQVEsRUFDUixlQUFlLEVBQ2YsU0FBUyxFQUNULGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFZcEMsSUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFDckMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxD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QztTQUN6QixDQUFDO1FBaUNHLG1CQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsbUJBQUEsUUFBUSxFQUFFLENBQUE7T0FqQ0YsVUFBVSxDQThFdEI7SUFBRCxpQkFBQztDQUFBLEFBOUVELENBQWdDLFFBQVEsR0E4RXZDO1NBOUVZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3B0aW9uYWxcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEx5VGhlbWUyLFxuICBtaXhpbkJnLFxuICBtaXhpbkNvbG9yLFxuICBtaXhpbkRpc2FibGVkLFxuICBtaXhpbkRpc2FibGVSaXBwbGUsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgQWxpZ25BbGlhcyxcbiAgWVBvc2l0aW9uLFxuICBYUG9zaXRpb24sXG4gIERpcixcbiAgTHlSaXBwbGVTZXJ2aWNlLFxuICBMeUZvY3VzU3RhdGUsXG4gIFdpblJlc2l6ZSxcbiAgc2Nyb2xsV2l0aEFuaW1hdGlvbixcbiAgdG9Cb29sZWFuLFxuICBMeUhvc3RDbGFzcyxcbiAgc3R5bGVUZW1wbGF0ZVRvU3RyaW5nLFxuICBMWV9DT01NT05fU1RZTEVTLFxuICBUaGVtZVJlZixcbiAgU3R5bGVDb2xsZWN0aW9uLFxuICBMeUNsYXNzZXMsXG4gIFN0eWxlVGVtcGxhdGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCdXR0b24gfSBmcm9tICdAYWx5bGUvdWkvYnV0dG9uJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5VGFiVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBUYWIgQ29tcG9uZW50ICovXG4gIHJvb3Q/OiBTdHlsZUNvbGxlY3Rpb248KChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpPlxuICAgIHwgKChjbGFzc2VzOiBMeUNsYXNzZXM8dHlwZW9mIFNUWUxFUz4pID0+IFN0eWxlVGVtcGxhdGUpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEx5VGFiVmFyaWFibGVzIHtcbiAgdGFiPzogTHlUYWJUaGVtZTtcbn1cblxuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5jb25zdCBERUZBVUxUX0lORElDQVRPUl9DT0xPUiA9ICdhY2NlbnQnO1xuY29uc3QgREVGQVVMVF9FTEVWQVRJT04gPSA0O1xuY29uc3QgREVGQVVMVF9IRUFERVJfUExBQ0VNRU5UID0gJ2Fib3ZlJztcbmV4cG9ydCB0eXBlIEFsaWduVGFicyA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ3N0cmV0Y2gnIHwgJ2Jhc2VsaW5lJztcbmV4cG9ydCB0eXBlIEx5VGFic0hlYWRlclBsYWNlbWVudCA9ICdiZWZvcmUnIHwgJ2FmdGVyJyB8ICdhYm92ZScgfCAnYmVsb3cnO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5VGFiVmFyaWFibGVzLCByZWY6IFRoZW1lUmVmKSA9PiB7XG4gIGNvbnN0IF9fID0gcmVmLnNlbGVjdG9yc09mKFNUWUxFUyk7XG4gIHJldHVybiB7XG4gICAgJG5hbWU6IEx5VGFicy7QuCxcbiAgICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICAgIHJvb3Q6ICgpID0+IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmJsb2NrO30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoXG4gICAgICAgICAgKHRoZW1lLnRhYlxuICAgICAgICAgICAgJiYgdGhlbWUudGFiLnJvb3RcbiAgICAgICAgICAgICYmICh0aGVtZS50YWIucm9vdCBpbnN0YW5jZW9mIFN0eWxlQ29sbGVjdGlvblxuICAgICAgICAgICAgICA/IHRoZW1lLnRhYi5yb290LnNldFRyYW5zZm9ybWVyKGZuID0+IGZuKF9fKSkuY3NzXG4gICAgICAgICAgICAgIDogdGhlbWUudGFiLnJvb3QoX18pKVxuICAgICAgICAgICkpLCBgJHtjbGFzc05hbWV9YCl9YCxcbiAgICBjb250YWluZXI6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtkaXNwbGF5OmZsZXg7fWAsXG4gICAgdGFiOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtZmxleDt9YCxcbiAgICAvKiogVGFiIGNvbnRlbnQgKi9cbiAgICBjb250ZW50Q29udGFpbmVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17b3ZlcmZsb3c6aGlkZGVuO2ZsZXgtZ3JvdzoxO31gLFxuICAgIC8qKiBUYWIgaGVhZGVyICovXG4gICAgdGFic0xhYmVsczogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTt9YCxcbiAgICB0YWJzTGFiZWxzQ29udGFpbmVyOiAoKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17b3ZlcmZsb3c6aGlkZGVuO31AbWVkaWEgKGhvdmVyOiBub25lKXske19fLnNjcm9sbGFibGV9ICR7Y2xhc3NOYW1lfXtvdmVyZmxvdzphdXRvO319YCxcbiAgICBsYWJlbDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9ey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3VzZXItc2VsZWN0Om5vbmU7Ym9yZGVyOjA7bWluLXdpZHRoOjcycHg7cGFkZGluZzowIDI0cHg7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OjQ4cHg7ZGlzcGxheTppbmxpbmUtZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47Zm9udC1mYW1pbHk6JHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O2ZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSl9O2xldHRlci1zcGFjaW5nOjAuMDI4NTdlbTtjb2xvcjpjdXJyZW50Q29sb3I7b3V0bGluZTpub25lO3dpZHRoOjEwMCU7Zm9udC13ZWlnaHQ6NTAwO29wYWNpdHk6Ljc7fSR7Y2xhc3NOYW1lfSAke3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpfXtwYWRkaW5nOjAgMTJweDt9YCxcbiAgICB0YWJMYWJlbEFjdGl2ZTogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e29wYWNpdHk6MTt9YCxcbiAgICB0YWJDb250ZW50czogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e2Rpc3BsYXk6ZmxleDt0cmFuc2l0aW9uOjQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm07aGVpZ2h0OjEwMCU7fWAsXG4gICAgdGFiQ29udGVudDogKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ZmxleC1zaHJpbms6MDtwb3NpdGlvbjpyZWxhdGl2ZTt9YCxcbiAgICB0YWJzSW5kaWNhdG9yOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjJweDt0cmFuc2l0aW9uOjQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtiYWNrZ3JvdW5kOmN1cnJlbnRDb2xvcjt9YCxcbiAgICB0YWJzSW5kaWNhdG9yRm9yU2VydmVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDpjdXJyZW50Q29sb3I7fWAsXG4gICAgcmlwcGxlQ29udGFpbmVyOiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoTFlfQ09NTU9OX1NUWUxFUy5maWxsKSwgYCR7Y2xhc3NOYW1lfWApfSR7Y2xhc3NOYW1lfXtvdmVyZmxvdzpoaWRkZW47fWAsXG4gICAgc2Nyb2xsYWJsZTogbnVsbFxuICB9O1xufTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVRhYnNCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVRhYnNNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihtaXhpbkJnKG1peGluRWxldmF0aW9uKG1peGluU2hhZG93Q29sb3IoTHlUYWJzQmFzZSkpKSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlUYWJMYWJlbE1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlUYWJMYWJlbEJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJywgJ2VsZXZhdGlvbicsICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgZXh0ZW5kcyBMeVRhYnNNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgc3RhdGljINC4ID0gJ0x5VGFicyc7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLnJlbmRlclN0eWxlU2hlZXQoU1RZTEVTKTtcbiAgX3NlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkQmVmb3JlSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkVGFiOiBMeVRhYiB8IG51bGw7XG4gIF9zZWxlY3RlZEJlZm9yZVRhYjogTHlUYWIgfCBudWxsO1xuICBfaXNWaWV3SW5pdExvYWRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3JDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oZWFkZXJQbGFjZW1lbnQ6IEx5VGFic0hlYWRlclBsYWNlbWVudDtcbiAgcHJpdmF0ZSBfaGVhZGVyUGxhY2VtZW50Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfYWxpZ25UYWJzOiBBbGlnblRhYnM7XG4gIHByaXZhdGUgX2FsaWduVGFic0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RleHRDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF90ZXh0Q29sb3JDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGFiUmVzaXplU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbGFibGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgndGFicycsIHsgc3RhdGljOiB0cnVlIH0pIHRhYnNSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnRzJywgeyBzdGF0aWM6IHRydWUgfSkgdGFiQ29udGVudHM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYnNJbmRpY2F0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJzSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBzZWxlY3RlZEluZGV4T25DaGFuZ2U6ICdhdXRvJyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KClcbiAgc2V0IHNjcm9sbGFibGUodmFsOiBhbnkpIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNjcm9sbGFibGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc2Nyb2xsYWJsZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnNjcm9sbGFibGUpO1xuICAgIH1cbiAgICB0aGlzLl9zY3JvbGxhYmxlID0gbmV3VmFsO1xuICB9XG4gIGdldCBzY3JvbGxhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxhYmxlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBpbmRpY2F0b3JDb2xvcih2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuaW5kaWNhdG9yQ29sb3IpIHtcbiAgICAgIHRoaXMuX2NvbG9yID0gdmFsO1xuICAgICAgdGhpcy5fY29sb3JDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBrLXRhYi1pbmRpY2F0b3ItY29sb3I6JHt2YWx9YCxcbiAgICAgICAgdGhlbWUgPT4gKFxuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLmNvbG9yT2YodmFsKX07YFxuICAgICAgICApLFxuICAgICAgICB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGluZGljYXRvckNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBoZWFkZXJQbGFjZW1lbnQodmFsOiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmhlYWRlclBsYWNlbWVudCkge1xuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50ID0gdmFsO1xuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseVRhYnMuaGVhZGVyUGxhY2VtZW50OiR7dmFsfWAsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGxldCBmbGV4RGlyZWN0aW9uQ29udGFpbmVyOiBzdHJpbmc7XG4gICAgICAgIGxldCBmbGV4RGlyZWN0aW9uID0gdGhpcy5fZ2V0RmxleERpcmVjdGlvbih2YWwpO1xuICAgICAgICBsZXQgcG9zaXRpb246IHN0cmluZztcbiAgICAgICAgbGV0IGhlaWdodDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGxldCB3aWR0aDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGxldCBoZWlnaHRTZXJ2ZXI6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgd2lkdGhTZXJ2ZXI6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgICAgIGNhc2UgWVBvc2l0aW9uLmFib3ZlOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdjb2x1bW4nO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBZUG9zaXRpb24uYmVsb3c7XG4gICAgICAgICAgICBoZWlnaHQgPSAnMnB4JztcbiAgICAgICAgICAgIHdpZHRoU2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBZUG9zaXRpb24uYmVsb3c6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ2NvbHVtbi1yZXZlcnNlJztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWVBvc2l0aW9uLmFib3ZlO1xuICAgICAgICAgICAgaGVpZ2h0ID0gJzJweCc7XG4gICAgICAgICAgICB3aWR0aFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWFBvc2l0aW9uLmJlZm9yZTpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAncm93JztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWFBvc2l0aW9uLmFmdGVyO1xuICAgICAgICAgICAgd2lkdGggPSAnMnB4JztcbiAgICAgICAgICAgIGhlaWdodFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWFBvc2l0aW9uLmFmdGVyOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdyb3ctcmV2ZXJzZSc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFhQb3NpdGlvbi5iZWZvcmU7XG4gICAgICAgICAgICB3aWR0aCA9ICcycHgnO1xuICAgICAgICAgICAgaGVpZ2h0U2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMeVRhYnM6IHZhbHVlOiR7dmFsfSBkbyBub3QgaXMgdmFsaWQgZm9yIFxcYGhlYWRlclBsYWNlbWVudFxcYGApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB2YWwgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9YF06IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGZsZXhEaXJlY3Rpb25Db250YWluZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcn0sJiAuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcn1gXToge1xuICAgICAgICAgICAgW3Bvc2l0aW9uXTogMCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyfWBdOiB7XG4gICAgICAgICAgICB3aWR0aDogd2lkdGhTZXJ2ZXIsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFNlcnZlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfSwmIC4ke3RoaXMuY2xhc3Nlcy50YWJDb250ZW50c31gXTogeyBmbGV4RGlyZWN0aW9uIH0sXG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMudGFiQ29udGVudHN9YF06IHsgZmxleERpcmVjdGlvbiB9XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50Q2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWSk7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZXNPZlNlbGVjdGVkVGFiKCk7XG4gICAgfVxuICB9XG4gIGdldCBoZWFkZXJQbGFjZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlclBsYWNlbWVudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnblRhYnModmFsOiBBbGlnblRhYnMpIHtcbiAgICB0aGlzLl9hbGlnblRhYnMgPSB2YWw7XG4gICAgdGhpcy5fYWxpZ25UYWJzQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUFsaWduVGFiczogJHt2YWx9YCxcbiAgICAoXG4gICAgICB2YWwgPT09ICdzdHJldGNoJyA/IHtcbiAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfSAuJHt0aGlzLmNsYXNzZXMudGFifWBdOiB7XG4gICAgICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgICAgIGZsZXhHcm93OiAxXG4gICAgICAgIH1cbiAgICAgIH0gOiB7XG4gICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc31gXToge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB2YWwgaW4gQWxpZ25BbGlhcyA/IEFsaWduQWxpYXNbdmFsXSA6IHZhbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKSxcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fYWxpZ25UYWJzQ2xhc3MsXG4gICAgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBhbGlnblRhYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduVGFicztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0ZXh0Q29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZXh0Q29sb3IgPSB2YWw7XG4gICAgdGhpcy5fdGV4dENvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseVRhYnMudGV4dENvbG9yOiR7dmFsfWAsXG4gICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFiTGFiZWxBY3RpdmV9YF06IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKVxuICAgICAgfVxuICAgIH0pLFxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl90ZXh0Q29sb3JDbGFzcyxcbiAgICBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IHRleHRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dENvbG9yO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlSW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodmFsLCAnYXV0bycpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIgPSB0aGlzLl9zZWxlY3RlZFRhYiE7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVTdHlsZXNPZlNlbGVjdGVkVGFiKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cblxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVRhYikpIHRhYnNMaXN0OiBRdWVyeUxpc3Q8THlUYWI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3Jlc2l6ZVNlcnZpY2U6IFdpblJlc2l6ZVxuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLl9pc1ZpZXdJbml0TG9hZGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMudGFic1JlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgY29uc3QgdGFic0luZGljYXRvckVsID0gdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YWJzSW5kaWNhdG9yRWwsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgICAvKiogU2V0IGRlZmF1bHQgQ29sb3IgKi9cbiAgICBpZiAoIXRoaXMuaW5kaWNhdG9yQ29sb3IgJiYgIXRoaXMuYmcgJiYgIXRoaXMudGV4dENvbG9yICYmICF0aGlzLmVsZXZhdGlvbikge1xuICAgICAgdGhpcy5pbmRpY2F0b3JDb2xvciA9IERFRkFVTFRfSU5ESUNBVE9SX0NPTE9SO1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLmVsZXZhdGlvbiA9IERFRkFVTFRfRUxFVkFUSU9OO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGVhZGVyUGxhY2VtZW50KSB7XG4gICAgICB0aGlzLmhlYWRlclBsYWNlbWVudCA9IERFRkFVTFRfSEVBREVSX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fdGFic1N1YnNjcmlwdGlvbiA9IHRoaXMudGFic0xpc3QuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJbmRleE9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2ZpbmRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXgsIHRoaXMuc2VsZWN0ZWRJbmRleE9uQ2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLnRhYnNSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5faXNWaWV3SW5pdExvYWRlZCA9IHRydWU7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fdGFiUmVzaXplU3ViID0gdGhpcy5fcmVzaXplU2VydmljZS5yZXNpemUkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFRhYikge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0aGlzLl9zZWxlY3RlZFRhYik7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIuX3RhYkxhYmVsLl91cGRhdGVUYWJTY3JvbGwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLl90YWJSZXNpemVTdWIpIHtcbiAgICAgIHRoaXMuX3RhYlJlc2l6ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZpbmRJbmRleChzZWxlY3RlZEluZGV4OiBudW1iZXIsIGluZGV4OiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMudGFic0xpc3QpIHtcbiAgICAgIHJldHVybiBzZWxlY3RlZEluZGV4O1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mTGFzdFRhYiA9IHRoaXMudGFic0xpc3QubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInID8gaW5kZXggOiBzZWxlY3RlZEluZGV4O1xuICAgIHJldHVybiBjdXJyZW50SW5kZXggPCAwID8gMCA6IGN1cnJlbnRJbmRleCA+IGluZGV4T2ZMYXN0VGFiID8gaW5kZXhPZkxhc3RUYWIgOiBjdXJyZW50SW5kZXg7XG4gIH1cblxuICBfdXBkYXRlSW5kaWNhdG9yKGN1cnJlbnRUYWI6IEx5VGFiLCBiZWZvcmVUYWI/OiBMeVRhYik6IHZvaWQge1xuICAgIGlmIChjdXJyZW50VGFiKSB7XG4gICAgICBpZiAoYmVmb3JlVGFiKSB7XG4gICAgICAgIGJlZm9yZVRhYi5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGJlZm9yZVRhYi5fdGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdjbGFzcycpO1xuICAgICAgfVxuICAgICAgY29uc3QgZWwgPSBjdXJyZW50VGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgcmVjdHMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHRoaXMuaGVhZGVyUGxhY2VtZW50ID09PSBYUG9zaXRpb24uYWZ0ZXIgfHwgdGhpcy5oZWFkZXJQbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5iZWZvcmUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3JlY3RzLmhlaWdodH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAndG9wJywgYCR7ZWwub2Zmc2V0VG9wfXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnbGVmdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7cmVjdHMud2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBgJHtlbC5vZmZzZXRMZWZ0fXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3RvcCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlc09mU2VsZWN0ZWRUYWIoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHRoaXMuaGVhZGVyUGxhY2VtZW50O1xuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseVRhYnMuc2VsZWN0ZWRJbmRleDoke2luZGV4fSske3BsYWNlbWVudH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBsZXQgc2lnbiA9IDE7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2dldEZsZXhEaXJlY3Rpb24ocGxhY2VtZW50KSA9PT0gJ2NvbHVtbicgPyAnWScgOiAnWCc7XG4gICAgICBpZiAodGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyIHx8IHBvc2l0aW9uID09PSAnWScpIHtcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlJHtwb3NpdGlvbn0oJHtpbmRleCAqIDEwMCAqIHNpZ259JSlgXG4gICAgICB9O1xuICAgIH0sIHRoaXMudGFiQ29udGVudHMubmF0aXZlRWxlbWVudCwgdGhpcy5fc2VsZWN0ZWRJbmRleENsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcyk7XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBsb2FkVGVtcGxhdGUodGFiOiBMeVRhYiwgaW5kZXg6IG51bWJlcik6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD4gfCBudWxsIHtcbiAgICB0YWIuaW5kZXggPSBpbmRleDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIC8vIHNldCAwIGlmIGlzIG51bGxcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gdGFiO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZm9yIHNlcnZlclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQmVmb3JlVGFiID0gdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWI7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkQmVmb3JlVGFiKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHNlbGVjdGVkQmVmb3JlVGFiLl90YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhzZWxlY3RlZEJlZm9yZVRhYi5fdGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdGVkVGFiIS5fdGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdGVkVGFiIS5fdGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGFiLl90YWJMYWJlbC5fdXBkYXRlVGFiU3RhdGUoKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIHJldHVybiB0YWIuX3RlbXBsYXRlUmVmTGF6eSB8fCB0YWIuX3RlbXBsYXRlUmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRGbGV4RGlyZWN0aW9uKHZhbDogTHlUYWJzSGVhZGVyUGxhY2VtZW50KSB7XG4gICAgbGV0IGZsZXhEaXJlY3Rpb246IHN0cmluZztcbiAgICBpZiAodmFsID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdmFsID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgIGZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICB9IGVsc2Uge1xuICAgICAgZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgIH1cbiAgICByZXR1cm4gZmxleERpcmVjdGlvbjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKiBDdXJyZW50IHRhYiBpbmRleCAqL1xuICBpbmRleDogbnVtYmVyO1xuICBfaXNCcm93c2VyID0gUGxhdGZvcm0uaXNCcm93c2VyO1xuICBAQ29udGVudENoaWxkKEx5VGFiQ29udGVudCwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pIF90ZW1wbGF0ZVJlZkxhenk6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD47XG4gIEBWaWV3Q2hpbGQoJ190ZW1wbGF0ZU5nQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndGFiSW5kaWNhdG9yJywgeyBzdGF0aWM6IGZhbHNlIH0pIF90YWJJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeVRhYkxhYmVsKSwgeyBzdGF0aWM6IHRydWUgfSkgX3RhYkxhYmVsOiBMeVRhYkxhYmVsICYgeyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RhYnM6IEx5VGFicyxcbiAgICBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIF9lbDogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy50YWIpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltseS10YWItbGFiZWxdLCBhW2x5LXRhYi1sYWJlbF0nLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1sYWJlbC5odG1sJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdLFxuICBwcm92aWRlcnM6IFtMeUhvc3RDbGFzc11cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbCBleHRlbmRzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfYWN0aXZlVGFiU3R5bGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbjtcbiAgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcbiAgX2lzQnJvd3NlciA9IFBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgQElucHV0KClcbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG4gIHNldCBhY3RpdmUodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCAmJiB2YWwgIT09IHRoaXMuYWN0aXZlKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB0aGlzLl90YWJzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl90YWIuaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIF9vbkNsaWNrVGFiKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fdGFicy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fdGFiLmluZGV4O1xuICAgIH1cbiAgfVxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2VsOiBFbGVtZW50UmVmLFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF90aGVtZTogTHlUaGVtZTIsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgX2ZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBfaG9zdENsYXNzOiBMeUhvc3RDbGFzcyxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF90YWI6IEx5VGFiLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYnM6IEx5VGFic1xuICApIHtcbiAgICBzdXBlcihfZWwsIF9yZW5kZXJlciwgX3RoZW1lLCBfbmdab25lLCBfcmlwcGxlU2VydmljZSwgX2ZvY3VzU3RhdGUsIF9ob3N0Q2xhc3MsIG51bGwgYXMgYW55KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy5sYWJlbCk7XG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRhYlN0YXRlKCkge1xuICAgIC8vIHVwZGF0ZSBzdHlsZXMgZm9yIGFjdGl2ZSB0YWJcbiAgICBpZiAodGhpcy5fdGFicy5fc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5fdGFiLmluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2FjdGl2ZVRhYlN0eWxlKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhYlN0eWxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVGFiU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hY3RpdmVUYWJTdHlsZSkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFiU3R5bGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy50YWJMYWJlbEFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRhYlNjcm9sbCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMuX3RhYnMuc2Nyb2xsYWJsZSkge1xuICAgICAgY29uc3QgdGFiID0gdGhpcy5fdGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdGFiQ29udGFpbmVyID0gdGhpcy5fdGFicy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFiQ29udGFpbmVyLnNjcm9sbFdpZHRoICE9PSB0YWJDb250YWluZXIub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbjtcbiAgICAgICAgY29uc3QgbWF4ID0gdGFiQ29udGFpbmVyLnNjcm9sbFdpZHRoIC0gdGFiQ29udGFpbmVyLm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBvZmZzZXRCZWZvcmUgPSBkaXIgPT09IERpci5ydGxcbiAgICAgICAgPyBtYXggKyB0YWIub2Zmc2V0TGVmdFxuICAgICAgICA6IHRhYi5vZmZzZXRMZWZ0O1xuICAgICAgICBjb25zdCBsID0gb2Zmc2V0QmVmb3JlICsgdGFiLm9mZnNldFdpZHRoIC8gMiAtIHRhYkNvbnRhaW5lci5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IGwgPj0gbWF4ID8gbWF4IDogbCA8PSAwID8gMCA6IGw7XG4gICAgICAgIHNjcm9sbFdpdGhBbmltYXRpb24odGhpcy5fdGFicy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQsIG5ld1ZhbCwgMzUwLCAneCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgfVxufVxuXG4iXX0=