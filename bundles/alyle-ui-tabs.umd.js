(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/button'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/tabs', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/button', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.tabs = {}), global.ng.core, global.ly.core, global.ly.button, global.rxjs, global.ng.common));
}(this, function (exports, core, ui, button, rxjs, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var LyTabContent = /** @class */ (function () {
        function LyTabContent(template) {
            this.template = template;
        }
        LyTabContent = __decorate([
            core.Directive({ selector: '[ly-tab-content]' }),
            __metadata("design:paramtypes", [core.TemplateRef])
        ], LyTabContent);
        return LyTabContent;
    }());

    var DEFAULT_DISABLE_RIPPLE = false;
    var STYLE_PRIORITY = -2;
    var DEFAULT_BG = 'primary';
    var DEFAULT_INDICATOR_COLOR = 'accent';
    var DEFAULT_ELEVATION = 4;
    var DEFAULT_HEADER_PLACEMENT = 'above';
    var STYLES = function (theme) {
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
            rippleContainer: __assign({}, ui.LY_COMMON_STYLES.fill, { overflow: 'hidden' }),
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
    /** @docs-private */
    var LyTabsMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinElevation(ui.mixinShadowColor(LyTabsBase))));
    /** @docs-private */
    var LyTabLabelBase = /** @class */ (function () {
        function LyTabLabelBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyTabLabelBase;
    }());
    /** @docs-private */
    var LyTabLabelMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(ui.mixinDisableRipple(LyTabLabelBase)))))))));
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
            _this.classes = _this.theme.addStyleSheet(STYLES);
            _this._tabsSubscription = rxjs.Subscription.EMPTY;
            _this.selectedIndexOnChange = 'auto';
            _this.selectedIndexChange = new core.EventEmitter();
            _this.setAutoContrast();
            return _this;
        }
        Object.defineProperty(LyTabs.prototype, "scrollable", {
            get: function () {
                return this._scrollable;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
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
                            case ui.YPosition.above:
                                flexDirectionContainer = 'column';
                                position = ui.YPosition.below;
                                height = '2px';
                                widthServer = '100%';
                                break;
                            case ui.YPosition.below:
                                flexDirectionContainer = 'column-reverse';
                                position = ui.YPosition.above;
                                height = '2px';
                                widthServer = '100%';
                                break;
                            case ui.XPosition.before:
                                flexDirectionContainer = 'row';
                                position = ui.XPosition.after;
                                width = '2px';
                                heightServer = '100%';
                                break;
                            case ui.XPosition.after:
                                flexDirectionContainer = 'row-reverse';
                                position = ui.XPosition.before;
                                width = '2px';
                                heightServer = '100%';
                                break;
                            default:
                                throw new Error("LyTabs: value:" + val + " do not is valid for `headerPlacement`");
                        }
                        if (val === ui.YPosition.above || val === ui.YPosition.below) {
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
                        justifyContent: val in ui.AlignAlias ? ui.AlignAlias[val] : val
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
            if (ui.Platform.isBrowser) {
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
                if (this.headerPlacement === ui.XPosition.after || this.headerPlacement === ui.XPosition.before) {
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
                if (theme.direction === ui.Dir.ltr || position === 'Y') {
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
                    if (ui.Platform.isBrowser) {
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
            if (val === ui.YPosition.above || val === ui.YPosition.below) {
                flexDirection = 'row';
            }
            else {
                flexDirection = 'column';
            }
            return flexDirection;
        };
        __decorate([
            core.ViewChild('tabs', { static: true }),
            __metadata("design:type", core.ElementRef)
        ], LyTabs.prototype, "tabsRef", void 0);
        __decorate([
            core.ViewChild('tabContents', { static: true }),
            __metadata("design:type", core.ElementRef)
        ], LyTabs.prototype, "tabContents", void 0);
        __decorate([
            core.ViewChild('tabsIndicator', { static: true }),
            __metadata("design:type", core.ElementRef)
        ], LyTabs.prototype, "tabsIndicator", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], LyTabs.prototype, "selectedIndexOnChange", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], LyTabs.prototype, "scrollable", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyTabs.prototype, "indicatorColor", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyTabs.prototype, "headerPlacement", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyTabs.prototype, "alignTabs", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyTabs.prototype, "textColor", null);
        __decorate([
            core.Input(),
            __metadata("design:type", Number),
            __metadata("design:paramtypes", [Number])
        ], LyTabs.prototype, "selectedIndex", null);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], LyTabs.prototype, "selectedIndexChange", void 0);
        __decorate([
            core.ContentChildren(core.forwardRef(function () { return LyTab; })),
            __metadata("design:type", core.QueryList)
        ], LyTabs.prototype, "tabsList", void 0);
        LyTabs = __decorate([
            core.Component({
                selector: 'ly-tabs',
                template: "<div [className]=\"classes.container\">\n  <div #tabs [className]=\"classes.tabsLabelsContainer\">\n    <div [className]=\"classes.tabsLabels\">\n      <ng-content></ng-content>\n      <span #tabsIndicator></span>\n    </div>\n  </div>\n  <div [className]=\"classes.contentContainer\">\n    <div [className]=\"classes.tabContents\" #tabContents>\n      <ng-template ngFor let-item [ngForOf]=\"tabsList\" let-x=\"index\">\n        <div [className]=\"classes.tabContent\">\n          <ng-template [ngTransclude]=\"loadTemplate(item, x)\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                exportAs: 'lyTabs',
                inputs: [
                    'bg', 'elevation', 'shadowColor'
                ]
            }),
            __metadata("design:paramtypes", [ui.LyTheme2,
                core.Renderer2,
                core.ElementRef,
                core.ChangeDetectorRef,
                ui.WinResize])
        ], LyTabs);
        return LyTabs;
    }(LyTabsMixinBase));
    var LyTab = /** @class */ (function () {
        function LyTab(_tabs, _renderer, _el) {
            this._tabs = _tabs;
            this._renderer = _renderer;
            this._el = _el;
            this._isBrowser = ui.Platform.isBrowser;
        }
        LyTab.prototype.ngOnInit = function () {
            this._renderer.addClass(this._el.nativeElement, this._tabs.classes.tab);
        };
        __decorate([
            core.ContentChild(LyTabContent, { read: core.TemplateRef, static: true }),
            __metadata("design:type", core.TemplateRef)
        ], LyTab.prototype, "_templateRefLazy", void 0);
        __decorate([
            core.ViewChild('_templateNgContent', { static: true }),
            __metadata("design:type", core.TemplateRef)
        ], LyTab.prototype, "_templateRef", void 0);
        __decorate([
            core.ViewChild('tabIndicator', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], LyTab.prototype, "_tabIndicator", void 0);
        __decorate([
            core.ContentChild(core.forwardRef(function () { return LyTabLabel; }), { static: true }),
            __metadata("design:type", Object)
        ], LyTab.prototype, "_tabLabel", void 0);
        LyTab = __decorate([
            core.Component({
                selector: 'ly-tab',
                template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<div></div>\n<span *ngIf=\"!_isBrowser\" #tabIndicator></span>\n<ng-template #_templateNgContent>\n  <ng-content></ng-content>\n</ng-template>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [LyTabs,
                core.Renderer2,
                core.ElementRef])
        ], LyTab);
        return LyTab;
    }());
    var LyTabLabel = /** @class */ (function (_super) {
        __extends(LyTabLabel, _super);
        function LyTabLabel(_el, _renderer, _theme, _ngZone, _rippleService, _focusState, _tab, _tabs) {
            var _this = _super.call(this, _el, _renderer, _theme, _ngZone, _rippleService, _focusState) || this;
            _this._tab = _tab;
            _this._tabs = _tabs;
            _this._isBrowser = ui.Platform.isBrowser;
            return _this;
        }
        Object.defineProperty(LyTabLabel.prototype, "active", {
            get: function () {
                return this._active;
            },
            set: function (val) {
                var _this = this;
                var newVal = ui.toBoolean(val);
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
            if (ui.Platform.isBrowser && this._tabs.scrollable) {
                var tab = this._tab._el.nativeElement;
                var tabContainer = this._tabs.tabsRef.nativeElement;
                if (tabContainer.scrollWidth !== tabContainer.offsetWidth) {
                    var dir = this._theme.variables.direction;
                    var max = tabContainer.scrollWidth - tabContainer.offsetWidth;
                    var offsetBefore = dir === ui.Dir.rtl
                        ? max + tab.offsetLeft
                        : tab.offsetLeft;
                    var l = offsetBefore + tab.offsetWidth / 2 - tabContainer.offsetWidth / 2;
                    var newVal = l >= max ? max : l <= 0 ? 0 : l;
                    ui.scrollWithAnimation(this._tabs.tabsRef.nativeElement, newVal, 350, 'x');
                }
            }
        };
        LyTabLabel.prototype.ngAfterViewInit = function () { };
        __decorate([
            core.Input(),
            __metadata("design:type", Boolean),
            __metadata("design:paramtypes", [Boolean])
        ], LyTabLabel.prototype, "active", null);
        __decorate([
            core.ViewChild('rippleContainer', { static: false }),
            __metadata("design:type", core.ElementRef)
        ], LyTabLabel.prototype, "_rippleContainer", void 0);
        __decorate([
            core.HostListener('click'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], LyTabLabel.prototype, "_onClickTab", null);
        LyTabLabel = __decorate([
            core.Component({
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
            __param(6, core.Optional()),
            __param(7, core.Optional()),
            __metadata("design:paramtypes", [core.ElementRef,
                core.Renderer2,
                ui.LyTheme2,
                core.NgZone,
                ui.LyRippleService,
                ui.LyFocusState,
                LyTab,
                LyTabs])
        ], LyTabLabel);
        return LyTabLabel;
    }(button.LyButton));

    var LyTabsModule = /** @class */ (function () {
        function LyTabsModule() {
        }
        LyTabsModule = __decorate([
            core.NgModule({
                imports: [ui.LyThemeModule, common.CommonModule, ui.LyCommonModule, ui.NgTranscludeModule],
                exports: [ui.LyCommonModule, LyTabs, LyTab, LyTabLabel, LyTabContent],
                declarations: [LyTabs, LyTab, LyTabLabel, LyTabContent]
            })
        ], LyTabsModule);
        return LyTabsModule;
    }());

    exports.LyTab = LyTab;
    exports.LyTabLabel = LyTabLabel;
    exports.LyTabLabelBase = LyTabLabelBase;
    exports.LyTabLabelMixinBase = LyTabLabelMixinBase;
    exports.LyTabs = LyTabs;
    exports.LyTabsBase = LyTabsBase;
    exports.LyTabsMixinBase = LyTabsMixinBase;
    exports.LyTabsModule = LyTabsModule;
    exports.STYLES = STYLES;
    exports.ɵa = LyTabContent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-tabs.umd.js.map
