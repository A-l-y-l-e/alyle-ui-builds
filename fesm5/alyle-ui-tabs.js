import { __decorate, __extends, __param } from 'tslib';
import { TemplateRef, Directive, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef, ViewChild, Input, Output, ContentChildren, forwardRef, Component, ChangeDetectionStrategy, ViewEncapsulation, ContentChild, NgZone, Optional, HostListener, NgModule } from '@angular/core';
import { st2c, StyleCollection, LY_COMMON_STYLES, mixinStyleUpdater, mixinBg, mixinElevation, mixinShadowColor, mixinColor, mixinRaised, mixinDisabled, mixinOutlined, mixinDisableRipple, toBoolean, XPosition, YPosition, AlignAlias, Platform, Dir, LyTheme2, WinResize, scrollWithAnimation, LyRippleService, LyFocusState, LyHostClass, LyThemeModule, LyCommonModule, NgTranscludeModule } from '@alyle/ui';
import { LyButton } from '@alyle/ui/button';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

var LyTabContent = /** @class */ (function () {
    function LyTabContent(template) {
        this.template = template;
    }
    LyTabContent.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    LyTabContent = __decorate([
        Directive({ selector: '[ly-tab-content]' })
    ], LyTabContent);
    return LyTabContent;
}());

var DEFAULT_DISABLE_RIPPLE = false;
var STYLE_PRIORITY = -2;
var DEFAULT_BG = 'primary';
var DEFAULT_INDICATOR_COLOR = 'accent';
var DEFAULT_ELEVATION = 4;
var DEFAULT_HEADER_PLACEMENT = 'above';
var STYLES = function (theme, ref) {
    var __ = ref.selectorsOf(STYLES);
    return {
        $name: LyTabs.и,
        $priority: STYLE_PRIORITY,
        root: function () { return function (className) { return className + "{display:block;}" + st2c(((theme.tab
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
        rippleContainer: function (className) { return "" + st2c((LY_COMMON_STYLES.fill), "" + className) + className + "{overflow:hidden;}"; },
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
/** @docs-private */
var LyTabsMixinBase = mixinStyleUpdater(mixinBg(mixinElevation(mixinShadowColor(LyTabsBase))));
/** @docs-private */
var LyTabLabelBase = /** @class */ (function () {
    function LyTabLabelBase(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
    return LyTabLabelBase;
}());
/** @docs-private */
var LyTabLabelMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinDisabled(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyTabLabelBase)))))))));
var LyTabs = /** @class */ (function (_super) {
    __extends(LyTabs, _super);
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
        ContentChildren(forwardRef(function () { return LyTab; }))
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
    return LyTabs;
}(LyTabsMixinBase));
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
        ContentChild(forwardRef(function () { return LyTabLabel; }), { static: true })
    ], LyTab.prototype, "_tabLabel", void 0);
    LyTab = __decorate([
        Component({
            selector: 'ly-tab',
            template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<div></div>\n<span *ngIf=\"!_isBrowser\" #tabIndicator></span>\n<ng-template #_templateNgContent>\n  <ng-content></ng-content>\n</ng-template>",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None
        })
    ], LyTab);
    return LyTab;
}());
var LyTabLabel = /** @class */ (function (_super) {
    __extends(LyTabLabel, _super);
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
    return LyTabLabel;
}(LyButton));

var LyTabsModule = /** @class */ (function () {
    function LyTabsModule() {
    }
    LyTabsModule = __decorate([
        NgModule({
            imports: [LyThemeModule, CommonModule, LyCommonModule, NgTranscludeModule],
            exports: [LyCommonModule, LyTabs, LyTab, LyTabLabel, LyTabContent],
            declarations: [LyTabs, LyTab, LyTabLabel, LyTabContent]
        })
    ], LyTabsModule);
    return LyTabsModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { LyTab, LyTabLabel, LyTabLabelBase, LyTabLabelMixinBase, LyTabs, LyTabsBase, LyTabsMixinBase, LyTabsModule, STYLES, LyTabContent as ɵa };
//# sourceMappingURL=alyle-ui-tabs.js.map
