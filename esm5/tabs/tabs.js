import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, forwardRef, HostListener, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, Optional } from '@angular/core';
import { LyTheme2, mixinBg, mixinColor, mixinDisabled, mixinDisableRipple, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, Platform, AlignAlias, YPosition, XPosition, Dir, LyRippleService, LyFocusState, LY_COMMON_STYLES, WinResize, scrollWithAnimation, toBoolean } from '@alyle/ui';
import { LyButton } from '@alyle/ui/button';
import { LyTabContent } from './tab-content.directive';
import { Subscription } from 'rxjs';
var DEFAULT_DISABLE_RIPPLE = false;
var STYLE_PRIORITY = -2;
var DEFAULT_BG = 'primary';
var DEFAULT_INDICATOR_COLOR = 'accent';
var DEFAULT_ELEVATION = 4;
var DEFAULT_HEADER_PLACEMENT = 'above';
export var STYLES = function (theme) {
    var _a;
    return ({
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
        rippleContainer: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden' }),
        scrollable: null
    });
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
        _this.classes = _this.theme.addStyleSheet(STYLES);
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
                    /** for server */
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
        ContentChildren(forwardRef(function () { return LyTab; })),
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
        ContentChild(forwardRef(function () { return LyTabLabel; })),
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
    return LyTab;
}());
export { LyTab };
var LyTabLabel = /** @class */ (function (_super) {
    tslib_1.__extends(LyTabLabel, _super);
    function LyTabLabel(_el, _renderer, _theme, _ngZone, _rippleService, _focusState, _tab, _tabs) {
        var _this = _super.call(this, _el, _renderer, _theme, _ngZone, _rippleService, _focusState) || this;
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
    return LyTabLabel;
}(LyButton));
export { LyTabLabel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90YWJzLyIsInNvdXJjZXMiOlsidGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsUUFBUSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFVBQVUsRUFDVixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxhQUFhLEVBQ2IsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsUUFBUSxFQUVSLFVBQVUsRUFDVixTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDSCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLFNBQVMsRUFDUixNQUFNLFdBQVcsQ0FBQztBQUNyQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsSUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFDckMsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQzdCLElBQU0sdUJBQXVCLEdBQUcsUUFBUSxDQUFDO0FBQ3pDLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLElBQU0sd0JBQXdCLEdB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QUFVO1FBZHRCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1Q0FBdUM7WUFDakQsOExBQTZCO1lBQzdCLE1BQU0sRUFBRTtnQkFDTixJQUFJO2dCQUNKLE9BQU87Z0JBQ1AsUUFBUTtnQkFDUixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxhQUFhO2dCQUNiLGVBQWU7YUFDaEI7U0FDRixDQUFDO1FBK0JHLG1CQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBUE4sVUFBVTtZQUNKLFNBQVM7WUFDWixRQUFRO1lBQ1AsTUFBTTtZQUNDLGVBQWU7WUFDbEIsWUFBWTtZQUNDLEtBQUs7WUFDSixNQUFNO09BL0J4QixVQUFVLENBNEV0QjtJQUFELGlCQUFDO0NBQUEsQUE1RUQsQ0FBZ0MsUUFBUSxHQTRFdkM7U0E1RVksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPcHRpb25hbFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBBbGlnbkFsaWFzLFxuICBZUG9zaXRpb24sXG4gIFhQb3NpdGlvbixcbiAgRGlyLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgV2luUmVzaXplLFxuICBzY3JvbGxXaXRoQW5pbWF0aW9uLFxuICB0b0Jvb2xlYW5cbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCdXR0b24gfSBmcm9tICdAYWx5bGUvdWkvYnV0dG9uJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5jb25zdCBERUZBVUxUX0lORElDQVRPUl9DT0xPUiA9ICdhY2NlbnQnO1xuY29uc3QgREVGQVVMVF9FTEVWQVRJT04gPSA0O1xuY29uc3QgREVGQVVMVF9IRUFERVJfUExBQ0VNRU5UID0gJ2Fib3ZlJztcbmV4cG9ydCB0eXBlIEFsaWduVGFicyA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ3N0cmV0Y2gnIHwgJ2Jhc2VsaW5lJztcbmV4cG9ydCB0eXBlIEx5VGFic0hlYWRlclBsYWNlbWVudCA9ICdiZWZvcmUnIHwgJ2FmdGVyJyB8ICdhYm92ZScgfCAnYmVsb3cnO1xuXG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIHRhYjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCdcbiAgfSxcbiAgLyoqIFRhYiBjb250ZW50ICovXG4gIGNvbnRlbnRDb250YWluZXI6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgLyoqIFRhYiBoZWFkZXIgKi9cbiAgdGFic0xhYmVsczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0YWJzTGFiZWxzQ29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICd7c2Nyb2xsYWJsZX0gJic6IHtcbiAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbGFiZWw6IHtcbiAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgYm9yZGVyOiAwLFxuICAgIG1pbldpZHRoOiAnNzJweCcsXG4gICAgcGFkZGluZzogJzAgMjRweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplKSxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMjg1N2VtJyxcbiAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIG9wYWNpdHk6IC43LFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIHBhZGRpbmc6ICcwIDEycHgnXG4gICAgfVxuICB9LFxuICB0YWJMYWJlbEFjdGl2ZToge1xuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgdGFiQ29udGVudHM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfSxcbiAgdGFiQ29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZmxleFNocmluazogMCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgaGVpZ2h0OiAnMnB4JyxcbiAgICB0cmFuc2l0aW9uOiAnNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJyxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICB0YWJzSW5kaWNhdG9yRm9yU2VydmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgcmlwcGxlQ29udGFpbmVyOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBzY3JvbGxhYmxlOiBudWxsXG59KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVRhYnNCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVRhYnNNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihtaXhpbkJnKG1peGluRWxldmF0aW9uKG1peGluU2hhZG93Q29sb3IoTHlUYWJzQmFzZSkpKSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlUYWJMYWJlbE1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluRGlzYWJsZWQoXG4gICAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlUYWJMYWJlbEJhc2UpKSkpKSkpKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbHlUYWJzJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJywgJ2VsZXZhdGlvbicsICdzaGFkb3dDb2xvcidcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnMgZXh0ZW5kcyBMeVRhYnNNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBfc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICBfc2VsZWN0ZWRCZWZvcmVJbmRleDogbnVtYmVyO1xuICBfc2VsZWN0ZWRUYWI6IEx5VGFiIHwgbnVsbDtcbiAgX3NlbGVjdGVkQmVmb3JlVGFiOiBMeVRhYjtcbiAgX2lzVmlld0luaXRMb2FkZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3RhYnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGVhZGVyUGxhY2VtZW50OiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQ7XG4gIHByaXZhdGUgX2hlYWRlclBsYWNlbWVudENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FsaWduVGFiczogQWxpZ25UYWJzO1xuICBwcml2YXRlIF9hbGlnblRhYnNDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF90ZXh0Q29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGV4dENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RhYlJlc2l6ZVN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zY3JvbGxhYmxlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ3RhYnMnKSB0YWJzUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJDb250ZW50cycpIHRhYkNvbnRlbnRzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJzSW5kaWNhdG9yJykgdGFic0luZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleE9uQ2hhbmdlOiAnYXV0bycgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgpXG4gIHNldCBzY3JvbGxhYmxlKHZhbDogYW55KSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zY3JvbGxhYmxlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3Njcm9sbGFibGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zY3JvbGxhYmxlKTtcbiAgICB9XG4gICAgdGhpcy5fc2Nyb2xsYWJsZSA9IG5ld1ZhbDtcbiAgfVxuICBnZXQgc2Nyb2xsYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsYWJsZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgaW5kaWNhdG9yQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmluZGljYXRvckNvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgay10YWItaW5kaWNhdG9yLWNvbG9yOiR7dmFsfWAsXG4gICAgICAgIHRoZW1lID0+IChcbiAgICAgICAgICBgY29sb3I6JHt0aGVtZS5jb2xvck9mKHZhbCl9O2BcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3NcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCBpbmRpY2F0b3JDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGVhZGVyUGxhY2VtZW50KHZhbDogTHlUYWJzSGVhZGVyUGxhY2VtZW50KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5oZWFkZXJQbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudCA9IHZhbDtcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudENsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlUYWJzLmhlYWRlclBsYWNlbWVudDoke3ZhbH1gLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBsZXQgZmxleERpcmVjdGlvbkNvbnRhaW5lcjogc3RyaW5nO1xuICAgICAgICBsZXQgZmxleERpcmVjdGlvbiA9IHRoaXMuX2dldEZsZXhEaXJlY3Rpb24odmFsKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgICAgIGxldCBoZWlnaHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgd2lkdGg6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgaGVpZ2h0U2VydmVyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgICAgbGV0IHdpZHRoU2VydmVyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgICAgc3dpdGNoICh2YWwpIHtcbiAgICAgICAgICBjYXNlIFlQb3NpdGlvbi5hYm92ZTpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAnY29sdW1uJztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWVBvc2l0aW9uLmJlbG93O1xuICAgICAgICAgICAgaGVpZ2h0ID0gJzJweCc7XG4gICAgICAgICAgICB3aWR0aFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWVBvc2l0aW9uLmJlbG93OlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdjb2x1bW4tcmV2ZXJzZSc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFlQb3NpdGlvbi5hYm92ZTtcbiAgICAgICAgICAgIGhlaWdodCA9ICcycHgnO1xuICAgICAgICAgICAgd2lkdGhTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFhQb3NpdGlvbi5iZWZvcmU6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ3Jvdyc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFhQb3NpdGlvbi5hZnRlcjtcbiAgICAgICAgICAgIHdpZHRoID0gJzJweCc7XG4gICAgICAgICAgICBoZWlnaHRTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFhQb3NpdGlvbi5hZnRlcjpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAncm93LXJldmVyc2UnO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBYUG9zaXRpb24uYmVmb3JlO1xuICAgICAgICAgICAgd2lkdGggPSAnMnB4JztcbiAgICAgICAgICAgIGhlaWdodFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTHlUYWJzOiB2YWx1ZToke3ZhbH0gZG8gbm90IGlzIHZhbGlkIGZvciBcXGBoZWFkZXJQbGFjZW1lbnRcXGBgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdmFsID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uID0gJ3Jvdyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfWBdOiB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBmbGV4RGlyZWN0aW9uQ29udGFpbmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3J9LCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXJ9YF06IHtcbiAgICAgICAgICAgIFtwb3NpdGlvbl06IDAsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICB3aWR0aFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcn1gXToge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoU2VydmVyLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRTZXJ2ZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc30sJiAuJHt0aGlzLmNsYXNzZXMudGFiQ29udGVudHN9YF06IHsgZmxleERpcmVjdGlvbiB9LFxuICAgICAgICAgIFtgLiR7dGhpcy5jbGFzc2VzLnRhYkNvbnRlbnRzfWBdOiB7IGZsZXhEaXJlY3Rpb24gfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudENsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgdGhpcy5fdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpO1xuICAgIH1cbiAgfVxuICBnZXQgaGVhZGVyUGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJQbGFjZW1lbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWxpZ25UYWJzKHZhbDogQWxpZ25UYWJzKSB7XG4gICAgdGhpcy5fYWxpZ25UYWJzID0gdmFsO1xuICAgIHRoaXMuX2FsaWduVGFic0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlBbGlnblRhYnM6ICR7dmFsfWAsXG4gICAgKFxuICAgICAgdmFsID09PSAnc3RyZXRjaCcgPyB7XG4gICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc30gLiR7dGhpcy5jbGFzc2VzLnRhYn1gXToge1xuICAgICAgICAgIGZsZXhCYXNpczogMCxcbiAgICAgICAgICBmbGV4R3JvdzogMVxuICAgICAgICB9XG4gICAgICB9IDoge1xuICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNMYWJlbHN9YF06IHtcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogdmFsIGluIEFsaWduQWxpYXMgPyBBbGlnbkFsaWFzW3ZhbF0gOiB2YWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICksXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX2FsaWduVGFic0NsYXNzLFxuICAgIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICBnZXQgYWxpZ25UYWJzKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnblRhYnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdGV4dENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGV4dENvbG9yID0gdmFsO1xuICAgIHRoaXMuX3RleHRDb2xvckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlUYWJzLnRleHRDb2xvcjoke3ZhbH1gLFxuICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlfWBdOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbClcbiAgICAgIH1cbiAgICB9KSxcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fdGV4dENvbG9yQ2xhc3MsXG4gICAgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCB0ZXh0Q29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRDb2xvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZUluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCBhcyBudW1iZXI7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHZhbCwgJ2F1dG8nKTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlVGFiID0gdGhpcy5fc2VsZWN0ZWRUYWIhO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQodGhpcy5fc2VsZWN0ZWRJbmRleCk7XG4gICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldCBzZWxlY3RlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTHlUYWIpKSB0YWJzTGlzdDogUXVlcnlMaXN0PEx5VGFiPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBXaW5SZXNpemVcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5faXNWaWV3SW5pdExvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLnRhYnNSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGNvbnN0IHRhYnNJbmRpY2F0b3JFbCA9IHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFic0luZGljYXRvckVsLCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcik7XG4gICAgLyoqIFNldCBkZWZhdWx0IENvbG9yICovXG4gICAgaWYgKCF0aGlzLmluZGljYXRvckNvbG9yICYmICF0aGlzLmJnICYmICF0aGlzLnRleHRDb2xvciAmJiAhdGhpcy5lbGV2YXRpb24pIHtcbiAgICAgIHRoaXMuaW5kaWNhdG9yQ29sb3IgPSBERUZBVUxUX0lORElDQVRPUl9DT0xPUjtcbiAgICAgIHRoaXMuYmcgPSBERUZBVUxUX0JHO1xuICAgICAgdGhpcy5lbGV2YXRpb24gPSBERUZBVUxUX0VMRVZBVElPTjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhlYWRlclBsYWNlbWVudCkge1xuICAgICAgdGhpcy5oZWFkZXJQbGFjZW1lbnQgPSBERUZBVUxUX0hFQURFUl9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24gPSB0aGlzLnRhYnNMaXN0LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4LCB0aGlzLnNlbGVjdGVkSW5kZXhPbkNoYW5nZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX2lzVmlld0luaXRMb2FkZWQgPSB0cnVlO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3RhYlJlc2l6ZVN1YiA9IHRoaXMuX3Jlc2l6ZVNlcnZpY2UucmVzaXplJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUYWIpIHtcbiAgICAgICAgICB0aGlzLl91cGRhdGVJbmRpY2F0b3IodGhpcy5fc2VsZWN0ZWRUYWIpO1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkVGFiLl90YWJMYWJlbC5fdXBkYXRlVGFiU2Nyb2xsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5fdGFiUmVzaXplU3ViKSB7XG4gICAgICB0aGlzLl90YWJSZXNpemVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW5kZXgoc2VsZWN0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYnNMaXN0KSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkxhc3RUYWIgPSB0aGlzLnRhYnNMaXN0Lmxlbmd0aCAtIDE7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJyA/IGluZGV4IDogc2VsZWN0ZWRJbmRleDtcbiAgICByZXR1cm4gY3VycmVudEluZGV4IDwgMCA/IDAgOiBjdXJyZW50SW5kZXggPiBpbmRleE9mTGFzdFRhYiA/IGluZGV4T2ZMYXN0VGFiIDogY3VycmVudEluZGV4O1xuICB9XG5cbiAgX3VwZGF0ZUluZGljYXRvcihjdXJyZW50VGFiOiBMeVRhYiwgYmVmb3JlVGFiPzogTHlUYWIpOiB2b2lkIHtcbiAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgaWYgKGJlZm9yZVRhYikge1xuICAgICAgICBiZWZvcmVUYWIuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShiZWZvcmVUYWIuX3RhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCAnY2xhc3MnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsID0gY3VycmVudFRhYi5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHJlY3RzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmICh0aGlzLmhlYWRlclBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmFmdGVyIHx8IHRoaXMuaGVhZGVyUGxhY2VtZW50ID09PSBYUG9zaXRpb24uYmVmb3JlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBgJHtyZWN0cy5oZWlnaHR9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGAke2VsLm9mZnNldFRvcH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3JlY3RzLndpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgYCR7ZWwub2Zmc2V0TGVmdH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd0b3AnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdHlsZXNPZlNlbGVjdGVkVGFiKCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLmhlYWRlclBsYWNlbWVudDtcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlUYWJzLnNlbGVjdGVkSW5kZXg6JHtpbmRleH0rJHtwbGFjZW1lbnR9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgbGV0IHNpZ24gPSAxO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLl9nZXRGbGV4RGlyZWN0aW9uKHBsYWNlbWVudCkgPT09ICdjb2x1bW4nID8gJ1knIDogJ1gnO1xuICAgICAgaWYgKHRoZW1lLmRpcmVjdGlvbiA9PT0gRGlyLmx0ciB8fCBwb3NpdGlvbiA9PT0gJ1knKSB7XG4gICAgICAgIHNpZ24gPSAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSR7cG9zaXRpb259KCR7aW5kZXggKiAxMDAgKiBzaWdufSUpYFxuICAgICAgfTtcbiAgICB9LCB0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJDb250ZW50cy5uYXRpdmVFbGVtZW50LCB0aGlzLl9zZWxlY3RlZEluZGV4Q2xhc3MpO1xuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbG9hZFRlbXBsYXRlKHRhYjogTHlUYWIsIGluZGV4OiBudW1iZXIpOiBUZW1wbGF0ZVJlZjxMeVRhYkNvbnRlbnQ+IHwgbnVsbCB7XG4gICAgdGFiLmluZGV4ID0gaW5kZXg7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICAvLyBzZXQgMCBpZiBpcyBudWxsXG4gICAgICB0aGlzLl9zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0YWIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKiBmb3Igc2VydmVyICovXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYiEuX3RhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcik7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYiEuX3RhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xvckNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRhYi5fdGFiTGFiZWwuX3VwZGF0ZVRhYlN0YXRlKCk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICByZXR1cm4gdGFiLl90ZW1wbGF0ZVJlZkxhenkgfHwgdGFiLl90ZW1wbGF0ZVJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RmxleERpcmVjdGlvbih2YWw6IEx5VGFic0hlYWRlclBsYWNlbWVudCkge1xuICAgIGxldCBmbGV4RGlyZWN0aW9uOiBzdHJpbmc7XG4gICAgaWYgKHZhbCA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IHZhbCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICBmbGV4RGlyZWN0aW9uID0gJ3Jvdyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgICB9XG4gICAgcmV0dXJuIGZsZXhEaXJlY3Rpb247XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWIgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKiogQ3VycmVudCB0YWIgaW5kZXggKi9cbiAgaW5kZXg6IG51bWJlcjtcbiAgX2lzQnJvd3NlciA9IFBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgQENvbnRlbnRDaGlsZChMeVRhYkNvbnRlbnQsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgX3RlbXBsYXRlUmVmTGF6eTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PjtcbiAgQFZpZXdDaGlsZCgnX3RlbXBsYXRlTmdDb250ZW50JykgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0YWJJbmRpY2F0b3InKSBfdGFiSW5kaWNhdG9yOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gTHlUYWJMYWJlbCkpIF90YWJMYWJlbDogTHlUYWJMYWJlbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90YWJzOiBMeVRhYnMsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMudGFiKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbHktdGFiLWxhYmVsXSwgYVtseS10YWItbGFiZWxdJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItbGFiZWwuaHRtbCcsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYkxhYmVsIGV4dGVuZHMgTHlCdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9hY3RpdmVUYWJTdHlsZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuO1xuICBfaXNCcm93c2VyID0gUGxhdGZvcm0uaXNCcm93c2VyO1xuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cbiAgc2V0IGFjdGl2ZSh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWwgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICBpZiAobmV3VmFsICYmIHZhbCAhPT0gdGhpcy5hY3RpdmUpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX3RhYi5pbmRleCk7XG4gICAgfVxuICB9XG5cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBfb25DbGlja1RhYigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3RhYnMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX3RhYi5pbmRleDtcbiAgICB9XG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIF9lbDogRWxlbWVudFJlZixcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfdGFiOiBMeVRhYixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF90YWJzOiBMeVRhYnNcbiAgKSB7XG4gICAgc3VwZXIoX2VsLCBfcmVuZGVyZXIsIF90aGVtZSwgX25nWm9uZSwgX3JpcHBsZVNlcnZpY2UsIF9mb2N1c1N0YXRlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy5sYWJlbCk7XG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRhYlN0YXRlKCkge1xuICAgIC8vIHVwZGF0ZSBzdHlsZXMgZm9yIGFjdGl2ZSB0YWJcbiAgICBpZiAodGhpcy5fdGFicy5fc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5fdGFiLmluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2FjdGl2ZVRhYlN0eWxlKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZVRhYlN0eWxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVGFiU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hY3RpdmVUYWJTdHlsZSkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFiU3R5bGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy50YWJMYWJlbEFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRhYlNjcm9sbCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMuX3RhYnMuc2Nyb2xsYWJsZSkge1xuICAgICAgY29uc3QgdGFiID0gdGhpcy5fdGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdGFiQ29udGFpbmVyID0gdGhpcy5fdGFicy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFiQ29udGFpbmVyLnNjcm9sbFdpZHRoICE9PSB0YWJDb250YWluZXIub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5fdGhlbWUudmFyaWFibGVzLmRpcmVjdGlvbjtcbiAgICAgICAgY29uc3QgbWF4ID0gdGFiQ29udGFpbmVyLnNjcm9sbFdpZHRoIC0gdGFiQ29udGFpbmVyLm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCBvZmZzZXRCZWZvcmUgPSBkaXIgPT09IERpci5ydGxcbiAgICAgICAgPyBtYXggKyB0YWIub2Zmc2V0TGVmdFxuICAgICAgICA6IHRhYi5vZmZzZXRMZWZ0O1xuICAgICAgICBjb25zdCBsID0gb2Zmc2V0QmVmb3JlICsgdGFiLm9mZnNldFdpZHRoIC8gMiAtIHRhYkNvbnRhaW5lci5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IGwgPj0gbWF4ID8gbWF4IDogbCA8PSAwID8gMCA6IGw7XG4gICAgICAgIHNjcm9sbFdpdGhBbmltYXRpb24odGhpcy5fdGFicy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQsIG5ld1ZhbCwgMzUwLCAneCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgfVxufVxuXG4iXX0=