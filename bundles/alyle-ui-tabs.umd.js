(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/button'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/tabs', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/button', 'rxjs', '@angular/common'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.tabs = {}),global.ng.core,global.ly.core,global.ly.button,global.rxjs,global.ng.common));
}(this, (function (exports,core,ui,button,rxjs,common) { 'use strict';

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyTabContent = /** @class */ (function () {
        function LyTabContent(template) {
            this.template = template;
        }
        LyTabContent.decorators = [
            { type: core.Directive, args: [{ selector: '[ly-tab-content]' },] }
        ];
        /** @nocollapse */
        LyTabContent.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
            ];
        };
        return LyTabContent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
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
            tabsLabelsContainer: {
                overflow: 'hidden',
                '&{scrollable}': {
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
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyTabsBase = /** @class */ (function () {
        function LyTabsBase(_theme) {
            this._theme = _theme;
        }
        return LyTabsBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
    var LyTabsMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinElevation(ui.mixinShadowColor(LyTabsBase))));
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyTabLabelBase = /** @class */ (function () {
        function LyTabLabelBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyTabLabelBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
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
            /**
             * \@docs-private
             */
            _this.classes = _this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            _this._selectedIndex = 0;
            _this._tabsSubscription = rxjs.Subscription.EMPTY;
            _this.selectedIndexOnChange = 'auto';
            _this.selectedIndexChange = new core.EventEmitter();
            _this.setAutoContrast();
            return _this;
        }
        Object.defineProperty(LyTabs.prototype, "scrollable", {
            get: /**
             * @return {?}
             */ function () {
                return this._scrollable;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                /** @type {?} */
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
            get: /**
             * @return {?}
             */ function () {
                return this._color;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.indicatorColor) {
                    this._color = val;
                    this._colorClass = this.theme.addStyle("k-tab-indicator-color:" + val, function (theme) { return ("color:" + theme.colorOf(val) + ";"); }, this.tabsIndicator.nativeElement, this._colorClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyTabs.prototype, "headerPlacement", {
            get: /**
             * @return {?}
             */ function () {
                return this._headerPlacement;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
            get: /**
             * @return {?}
             */ function () {
                return this._alignTabs;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
            get: /**
             * @return {?}
             */ function () {
                return this._textColor;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
             */ function () {
                return this._selectedIndex;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                var _this = this;
                if (val !== this.selectedIndex) {
                    this._selectedBeforeIndex = ( /** @type {?} */(this._selectedIndex));
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
                if (ui.Platform.isBrowser) {
                    this._tabResizeSub = this._resizeService.resize$.subscribe(function () {
                        _this._updateIndicator(_this._selectedTab);
                        _this._selectedTab._tabLabel._updateTabScroll();
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
                if (currentTab) {
                    if (beforeTab) {
                        beforeTab._renderer.removeAttribute(beforeTab.tabIndicator.nativeElement, 'class');
                    }
                    /** @type {?} */
                    var el = ( /** @type {?} */(currentTab._el.nativeElement));
                    /** @type {?} */
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
                    if (theme.direction === ui.Dir.ltr || position === 'Y') {
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
                            /** for server */
                            _this.renderer.addClass(_this._selectedTab.tabIndicator.nativeElement, _this.classes.tabsIndicatorForServer);
                            _this.renderer.addClass(_this._selectedTab.tabIndicator.nativeElement, _this._colorClass);
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
                if (val === ui.YPosition.above || val === ui.YPosition.below) {
                    flexDirection = 'row';
                }
                else {
                    flexDirection = 'column';
                }
                return flexDirection;
            };
        LyTabs.decorators = [
            { type: core.Component, args: [{
                        selector: 'ly-tabs',
                        template: "<div [className]=\"classes.container\">\n  <div #tabs [className]=\"classes.tabsLabelsContainer\">\n    <div [className]=\"classes.tabsLabels\">\n      <ng-content></ng-content>\n      <span #tabsIndicator></span>\n    </div>\n  </div>\n  <div [className]=\"classes.contentContainer\">\n    <div [className]=\"classes.tabContents\" #tabContents>\n      <ng-template ngFor let-item [ngForOf]=\"tabsList\" let-x=\"index\">\n        <div [className]=\"classes.tabContent\">\n          <ng-template [ngTransclude]=\"loadTemplate(item, x)\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        exportAs: 'lyTabs',
                        inputs: [
                            'bg', 'elevation', 'shadowColor'
                        ]
                    }] }
        ];
        /** @nocollapse */
        LyTabs.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef },
                { type: ui.WinResize }
            ];
        };
        LyTabs.propDecorators = {
            tabsRef: [{ type: core.ViewChild, args: ['tabs',] }],
            tabContents: [{ type: core.ViewChild, args: ['tabContents',] }],
            tabsIndicator: [{ type: core.ViewChild, args: ['tabsIndicator',] }],
            selectedIndexOnChange: [{ type: core.Input }],
            scrollable: [{ type: core.Input }],
            indicatorColor: [{ type: core.Input }],
            headerPlacement: [{ type: core.Input }],
            alignTabs: [{ type: core.Input }],
            textColor: [{ type: core.Input }],
            selectedIndex: [{ type: core.Input }],
            selectedIndexChange: [{ type: core.Output }],
            tabsList: [{ type: core.ContentChildren, args: [core.forwardRef(function () { return LyTab; }),] }]
        };
        return LyTabs;
    }(LyTabsMixinBase));
    var LyTab = /** @class */ (function () {
        function LyTab(_tabs, _renderer, _el) {
            this._tabs = _tabs;
            this._renderer = _renderer;
            this._el = _el;
            this._isBrowser = ui.Platform.isBrowser;
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
            { type: core.Component, args: [{
                        selector: 'ly-tab',
                        template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<div></div>\n<span *ngIf=\"!_isBrowser\" #tabIndicator></span>\n<ng-template #_templateNgContent>\n  <ng-content></ng-content>\n</ng-template>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        LyTab.ctorParameters = function () {
            return [
                { type: LyTabs },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        LyTab.propDecorators = {
            templateRefLazy: [{ type: core.ContentChild, args: [LyTabContent, { read: core.TemplateRef },] }],
            templateRef: [{ type: core.ViewChild, args: ['_templateNgContent',] }],
            tabIndicator: [{ type: core.ViewChild, args: ['tabIndicator',] }],
            _tabLabel: [{ type: core.ContentChild, args: [core.forwardRef(function () { return LyTabLabel; }),] }]
        };
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
                if (this.disableRipple == null) {
                    this.disableRipple = DEFAULT_DISABLE_RIPPLE;
                }
            };
        /**
         * @return {?}
         */
        LyTabLabel.prototype._updateTabState = /**
         * @return {?}
         */
            function () {
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
            };
        /**
         * @return {?}
         */
        LyTabLabel.prototype._updateTabScroll = /**
         * @return {?}
         */
            function () {
                if (ui.Platform.isBrowser && this._tabs.scrollable) {
                    /** @type {?} */
                    var tab = ( /** @type {?} */(this._tab._el.nativeElement));
                    /** @type {?} */
                    var tabContainer = ( /** @type {?} */(this._tabs.tabsRef.nativeElement));
                    if (tabContainer.scrollWidth !== tabContainer.offsetWidth) {
                        /** @type {?} */
                        var dir = this._theme.config.direction;
                        /** @type {?} */
                        var max = tabContainer.scrollWidth - tabContainer.offsetWidth;
                        /** @type {?} */
                        var offsetBefore = dir === ui.Dir.rtl
                            ? max + tab.offsetLeft
                            : tab.offsetLeft;
                        /** @type {?} */
                        var l = offsetBefore + tab.offsetWidth / 2 - tabContainer.offsetWidth / 2;
                        /** @type {?} */
                        var newVal = l >= max ? max : l <= 0 ? 0 : l;
                        ui.scrollWithAnimation(this._tabs.tabsRef.nativeElement, newVal, 350, 'x');
                    }
                }
            };
        /**
         * @return {?}
         */
        LyTabLabel.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () { };
        LyTabLabel.decorators = [
            { type: core.Component, args: [{
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
        LyTabLabel.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.LyTheme2 },
                { type: core.NgZone },
                { type: ui.LyRippleService },
                { type: ui.LyFocusState },
                { type: LyTab, decorators: [{ type: core.Optional }] },
                { type: LyTabs, decorators: [{ type: core.Optional }] }
            ];
        };
        LyTabLabel.propDecorators = {
            _rippleContainer: [{ type: core.ViewChild, args: ['rippleContainer',] }],
            onClickTab: [{ type: core.HostListener, args: ['click',] }]
        };
        return LyTabLabel;
    }(button.LyButton));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyTabsModule = /** @class */ (function () {
        function LyTabsModule() {
        }
        LyTabsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [ui.LyThemeModule, common.CommonModule, ui.LyCommonModule, ui.NgTranscludeModule],
                        exports: [ui.LyCommonModule, LyTabs, LyTab, LyTabLabel, LyTabContent],
                        declarations: [LyTabs, LyTab, LyTabLabel, LyTabContent]
                    },] }
        ];
        return LyTabsModule;
    }());

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

    exports.LyTabsBase = LyTabsBase;
    exports.LyTabsMixinBase = LyTabsMixinBase;
    exports.LyTabLabelBase = LyTabLabelBase;
    exports.LyTabLabelMixinBase = LyTabLabelMixinBase;
    exports.LyTabs = LyTabs;
    exports.LyTab = LyTab;
    exports.LyTabLabel = LyTabLabel;
    exports.LyTabsModule = LyTabsModule;
    exports.ɵa = LyTabContent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWItY29udGVudC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbbHktdGFiLWNvbnRlbnRdJ30pXG5leHBvcnQgY2xhc3MgTHlUYWJDb250ZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPcHRpb25hbFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBBbGlnbkFsaWFzLFxuICBZUG9zaXRpb24sXG4gIFhQb3NpdGlvbixcbiAgRGlyLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgV2luUmVzaXplLFxuICBzY3JvbGxXaXRoQW5pbWF0aW9uLFxuICB0b0Jvb2xlYW5cbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCdXR0b24gfSBmcm9tICdAYWx5bGUvdWkvYnV0dG9uJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5jb25zdCBERUZBVUxUX0lORElDQVRPUl9DT0xPUiA9ICdhY2NlbnQnO1xuY29uc3QgREVGQVVMVF9FTEVWQVRJT04gPSA0O1xuY29uc3QgREVGQVVMVF9IRUFERVJfUExBQ0VNRU5UID0gJ2Fib3ZlJztcbmV4cG9ydCB0eXBlIEFsaWduVGFicyA9ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJ3N0cmV0Y2gnIHwgJ2Jhc2VsaW5lJztcbmV4cG9ydCB0eXBlIEx5VGFic0hlYWRlclBsYWNlbWVudCA9ICdiZWZvcmUnIHwgJ2FmdGVyJyB8ICdhYm92ZScgfCAnYmVsb3cnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgdGFiOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4J1xuICB9LFxuICAvKiogVGFiIGNvbnRlbnQgKi9cbiAgY29udGVudENvbnRhaW5lcjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBmbGV4R3JvdzogMVxuICB9LFxuICAvKiogVGFiIGhlYWRlciAqL1xuICB0YWJzTGFiZWxzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHRhYnNMYWJlbHNDb250YWluZXI6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgJyZ7c2Nyb2xsYWJsZX0nOiB7XG4gICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIGJvcmRlcjogMCxcbiAgICBtaW5XaWR0aDogJzcycHgnLFxuICAgIHBhZGRpbmc6ICcwIDI0cHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGhlaWdodDogJzQ4cHgnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSksXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMDI4NTdlbScsXG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBvcGFjaXR5OiAuNyxcbiAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICBwYWRkaW5nOiAnMCAxMnB4J1xuICAgIH1cbiAgfSxcbiAgdGFiTGFiZWxBY3RpdmU6IHtcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRhYkNvbnRlbnRzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHRyYW5zaXRpb246ICc0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgIGhlaWdodDogJzEwMCUnXG4gIH0sXG4gIHRhYkNvbnRlbnQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgdGFic0luZGljYXRvcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgdHJhbnNpdGlvbjogJzQ1MG1zIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKScsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcidcbiAgfSxcbiAgdGFic0luZGljYXRvckZvclNlcnZlcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIHJpcHBsZUNvbnRhaW5lcjoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSxcbiAgc2Nyb2xsYWJsZTogbnVsbFxufSk7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlUYWJzQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlUYWJzTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIobWl4aW5CZyhtaXhpbkVsZXZhdGlvbihtaXhpblNoYWRvd0NvbG9yKEx5VGFic0Jhc2UpKSkpO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5VGFiTGFiZWxCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5VGFiTGFiZWxNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluQ29sb3IoXG4gICAgbWl4aW5SYWlzZWQoXG4gICAgICBtaXhpbkRpc2FibGVkKFxuICAgICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5VGFiTGFiZWxCYXNlKSkpKSkpKSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ2x5VGFicycsXG4gIGlucHV0czogW1xuICAgICdiZycsICdlbGV2YXRpb24nLCAnc2hhZG93Q29sb3InXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJzIGV4dGVuZHMgTHlUYWJzTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIF9zZWxlY3RlZEluZGV4ID0gMDtcbiAgX3NlbGVjdGVkQmVmb3JlSW5kZXg6IG51bWJlcjtcbiAgX3NlbGVjdGVkVGFiOiBMeVRhYjtcbiAgX3NlbGVjdGVkQmVmb3JlVGFiOiBMeVRhYjtcbiAgX2lzVmlld0luaXRMb2FkZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX3RhYnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGVhZGVyUGxhY2VtZW50OiBMeVRhYnNIZWFkZXJQbGFjZW1lbnQ7XG4gIHByaXZhdGUgX2hlYWRlclBsYWNlbWVudENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FsaWduVGFiczogQWxpZ25UYWJzO1xuICBwcml2YXRlIF9hbGlnblRhYnNDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF90ZXh0Q29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGV4dENvbG9yQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RhYlJlc2l6ZVN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zY3JvbGxhYmxlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ3RhYnMnKSB0YWJzUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJDb250ZW50cycpIHRhYkNvbnRlbnRzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJzSW5kaWNhdG9yJykgdGFic0luZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgc2VsZWN0ZWRJbmRleE9uQ2hhbmdlOiAnYXV0bycgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgpXG4gIHNldCBzY3JvbGxhYmxlKHZhbDogYW55KSB7XG4gICAgY29uc3QgbmV3VmFsID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zY3JvbGxhYmxlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3Njcm9sbGFibGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5zY3JvbGxhYmxlKTtcbiAgICB9XG4gICAgdGhpcy5fc2Nyb2xsYWJsZSA9IG5ld1ZhbDtcbiAgfVxuICBnZXQgc2Nyb2xsYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsYWJsZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgaW5kaWNhdG9yQ29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmluZGljYXRvckNvbG9yKSB7XG4gICAgICB0aGlzLl9jb2xvciA9IHZhbDtcbiAgICAgIHRoaXMuX2NvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgay10YWItaW5kaWNhdG9yLWNvbG9yOiR7dmFsfWAsXG4gICAgICAgIHRoZW1lID0+IChcbiAgICAgICAgICBgY29sb3I6JHt0aGVtZS5jb2xvck9mKHZhbCl9O2BcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3NcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCBpbmRpY2F0b3JDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgaGVhZGVyUGxhY2VtZW50KHZhbDogTHlUYWJzSGVhZGVyUGxhY2VtZW50KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5oZWFkZXJQbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudCA9IHZhbDtcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudENsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlUYWJzLmhlYWRlclBsYWNlbWVudDoke3ZhbH1gLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBsZXQgZmxleERpcmVjdGlvbkNvbnRhaW5lcjogc3RyaW5nO1xuICAgICAgICBsZXQgZmxleERpcmVjdGlvbiA9IHRoaXMuX2dldEZsZXhEaXJlY3Rpb24odmFsKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBzdHJpbmc7XG4gICAgICAgIGxldCBoZWlnaHQ6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIGxldCB3aWR0aDogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgbGV0IGhlaWdodFNlcnZlcjogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgbGV0IHdpZHRoU2VydmVyOiBzdHJpbmcgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgICAgIGNhc2UgWVBvc2l0aW9uLmFib3ZlOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdjb2x1bW4nO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBZUG9zaXRpb24uYmVsb3c7XG4gICAgICAgICAgICBoZWlnaHQgPSAnMnB4JztcbiAgICAgICAgICAgIHdpZHRoU2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBZUG9zaXRpb24uYmVsb3c6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ2NvbHVtbi1yZXZlcnNlJztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWVBvc2l0aW9uLmFib3ZlO1xuICAgICAgICAgICAgaGVpZ2h0ID0gJzJweCc7XG4gICAgICAgICAgICB3aWR0aFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWFBvc2l0aW9uLmJlZm9yZTpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAncm93JztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWFBvc2l0aW9uLmFmdGVyO1xuICAgICAgICAgICAgd2lkdGggPSAnMnB4JztcbiAgICAgICAgICAgIGhlaWdodFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWFBvc2l0aW9uLmFmdGVyOlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdyb3ctcmV2ZXJzZSc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFhQb3NpdGlvbi5iZWZvcmU7XG4gICAgICAgICAgICB3aWR0aCA9ICcycHgnO1xuICAgICAgICAgICAgaGVpZ2h0U2VydmVyID0gJzEwMCUnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMeVRhYnM6IHZhbHVlOiR7dmFsfSBkbyBub3QgaXMgdmFsaWQgZm9yIFxcYGhlYWRlclBsYWNlbWVudFxcYGApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB2YWwgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIGZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy5jb250YWluZXJ9YF06IHtcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGZsZXhEaXJlY3Rpb25Db250YWluZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvcn0sJiAuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcn1gXToge1xuICAgICAgICAgICAgW3Bvc2l0aW9uXTogMCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYC4ke3RoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yRm9yU2VydmVyfWBdOiB7XG4gICAgICAgICAgICB3aWR0aDogd2lkdGhTZXJ2ZXIsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFNlcnZlclxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfSwmIC4ke3RoaXMuY2xhc3Nlcy50YWJDb250ZW50c31gXTogeyBmbGV4RGlyZWN0aW9uIH0sXG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMudGFiQ29udGVudHN9YF06IHsgZmxleERpcmVjdGlvbiB9XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5faGVhZGVyUGxhY2VtZW50Q2xhc3MsXG4gICAgICBTVFlMRV9QUklPUklUWSk7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZXNPZlNlbGVjdGVkVGFiKCk7XG4gICAgfVxuICB9XG4gIGdldCBoZWFkZXJQbGFjZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlclBsYWNlbWVudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnblRhYnModmFsOiBBbGlnblRhYnMpIHtcbiAgICB0aGlzLl9hbGlnblRhYnMgPSB2YWw7XG4gICAgdGhpcy5fYWxpZ25UYWJzQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseUFsaWduVGFiczogJHt2YWx9YCxcbiAgICAoXG4gICAgICB2YWwgPT09ICdzdHJldGNoJyA/IHtcbiAgICAgICAgW2AmIC4ke3RoaXMuY2xhc3Nlcy50YWJzTGFiZWxzfSAuJHt0aGlzLmNsYXNzZXMudGFifWBdOiB7XG4gICAgICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgICAgIGZsZXhHcm93OiAxXG4gICAgICAgIH1cbiAgICAgIH0gOiB7XG4gICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc31gXToge1xuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiB2YWwgaW4gQWxpZ25BbGlhcyA/IEFsaWduQWxpYXNbdmFsXSA6IHZhbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKSxcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fYWxpZ25UYWJzQ2xhc3MsXG4gICAgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCBhbGlnblRhYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduVGFicztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0ZXh0Q29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90ZXh0Q29sb3IgPSB2YWw7XG4gICAgdGhpcy5fdGV4dENvbG9yQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseVRhYnMudGV4dENvbG9yOiR7dmFsfWAsXG4gICAgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFiTGFiZWxBY3RpdmV9YF06IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yT2YodmFsKVxuICAgICAgfVxuICAgIH0pLFxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl90ZXh0Q29sb3JDbGFzcyxcbiAgICBTVFlMRV9QUklPUklUWSk7XG4gIH1cbiAgZ2V0IHRleHRDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dENvbG9yO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlSW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4IGFzIG51bWJlcjtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB0aGlzLl9maW5kSW5kZXgodmFsLCAnYXV0bycpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRCZWZvcmVUYWIgPSB0aGlzLl9zZWxlY3RlZFRhYjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkSW5kZXgpO1xuICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlc09mU2VsZWN0ZWRUYWIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXQgc2VsZWN0ZWRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IEx5VGFiKSkgdGFic0xpc3Q6IFF1ZXJ5TGlzdDxMeVRhYj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogV2luUmVzaXplXG4gICkge1xuICAgIHN1cGVyKHRoZW1lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmlld0luaXRMb2FkZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy50YWJzUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgY29uc3QgdGFic0luZGljYXRvckVsID0gdGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YWJzSW5kaWNhdG9yRWwsIHRoaXMuY2xhc3Nlcy50YWJzSW5kaWNhdG9yKTtcbiAgICAvKiogU2V0IGRlZmF1bHQgQ29sb3IgKi9cbiAgICBpZiAoIXRoaXMuaW5kaWNhdG9yQ29sb3IgJiYgIXRoaXMuYmcgJiYgIXRoaXMudGV4dENvbG9yICYmICF0aGlzLmVsZXZhdGlvbikge1xuICAgICAgdGhpcy5pbmRpY2F0b3JDb2xvciA9IERFRkFVTFRfSU5ESUNBVE9SX0NPTE9SO1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLmVsZXZhdGlvbiA9IERFRkFVTFRfRUxFVkFUSU9OO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGVhZGVyUGxhY2VtZW50KSB7XG4gICAgICB0aGlzLmhlYWRlclBsYWNlbWVudCA9IERFRkFVTFRfSEVBREVSX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fdGFic1N1YnNjcmlwdGlvbiA9IHRoaXMudGFic0xpc3QuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJbmRleE9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2ZpbmRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXgsIHRoaXMuc2VsZWN0ZWRJbmRleE9uQ2hhbmdlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLnRhYnNSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5faXNWaWV3SW5pdExvYWRlZCA9IHRydWU7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fdGFiUmVzaXplU3ViID0gdGhpcy5fcmVzaXplU2VydmljZS5yZXNpemUkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0aGlzLl9zZWxlY3RlZFRhYik7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVGFiLl90YWJMYWJlbC5fdXBkYXRlVGFiU2Nyb2xsKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuX3RhYlJlc2l6ZVN1Yikge1xuICAgICAgdGhpcy5fdGFiUmVzaXplU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmluZEluZGV4KHNlbGVjdGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICghdGhpcy50YWJzTGlzdCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkSW5kZXg7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZMYXN0VGFiID0gdGhpcy50YWJzTGlzdC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicgPyBpbmRleCA6IHNlbGVjdGVkSW5kZXg7XG4gICAgcmV0dXJuIGN1cnJlbnRJbmRleCA8IDAgPyAwIDogY3VycmVudEluZGV4ID4gaW5kZXhPZkxhc3RUYWIgPyBpbmRleE9mTGFzdFRhYiA6IGN1cnJlbnRJbmRleDtcbiAgfVxuXG4gIF91cGRhdGVJbmRpY2F0b3IoY3VycmVudFRhYjogTHlUYWIsIGJlZm9yZVRhYj86IEx5VGFiKTogdm9pZCB7XG4gICAgaWYgKGN1cnJlbnRUYWIpIHtcbiAgICAgIGlmIChiZWZvcmVUYWIpIHtcbiAgICAgICAgYmVmb3JlVGFiLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoYmVmb3JlVGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCAnY2xhc3MnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsID0gY3VycmVudFRhYi5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHJlY3RzID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmICh0aGlzLmhlYWRlclBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmFmdGVyIHx8IHRoaXMuaGVhZGVyUGxhY2VtZW50ID09PSBYUG9zaXRpb24uYmVmb3JlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBgJHtyZWN0cy5oZWlnaHR9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGAke2VsLm9mZnNldFRvcH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3JlY3RzLndpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgYCR7ZWwub2Zmc2V0TGVmdH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd0b3AnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdHlsZXNPZlNlbGVjdGVkVGFiKCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLmhlYWRlclBsYWNlbWVudDtcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4Q2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShgbHlUYWJzLnNlbGVjdGVkSW5kZXg6JHtpbmRleH0rJHtwbGFjZW1lbnR9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgbGV0IHNpZ24gPSAxO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLl9nZXRGbGV4RGlyZWN0aW9uKHBsYWNlbWVudCkgPT09ICdjb2x1bW4nID8gJ1knIDogJ1gnO1xuICAgICAgaWYgKHRoZW1lLmRpcmVjdGlvbiA9PT0gRGlyLmx0ciB8fCBwb3NpdGlvbiA9PT0gJ1knKSB7XG4gICAgICAgIHNpZ24gPSAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSR7cG9zaXRpb259KCR7aW5kZXggKiAxMDAgKiBzaWdufSUpYFxuICAgICAgfTtcbiAgICB9LCB0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJDb250ZW50cy5uYXRpdmVFbGVtZW50LCB0aGlzLl9zZWxlY3RlZEluZGV4Q2xhc3MpO1xuICB9XG5cbiAgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbG9hZFRlbXBsYXRlKHRhYjogTHlUYWIsIGluZGV4OiBudW1iZXIpOiBUZW1wbGF0ZVJlZjxMeVRhYkNvbnRlbnQ+IHwgbnVsbCB7XG4gICAgdGFiLmluZGV4ID0gaW5kZXg7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gdGFiLmluZGV4KSB7XG4gICAgICAvLyBzZXQgMCBpZiBpcyBudWxsXG4gICAgICB0aGlzLl9zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUluZGljYXRvcih0YWIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKiBmb3Igc2VydmVyICovXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXIpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fc2VsZWN0ZWRUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbG9yQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGFiLl90YWJMYWJlbC5fdXBkYXRlVGFiU3RhdGUoKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIHJldHVybiB0YWIudGVtcGxhdGVSZWZMYXp5IHx8IHRhYi50ZW1wbGF0ZVJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RmxleERpcmVjdGlvbih2YWw6IEx5VGFic0hlYWRlclBsYWNlbWVudCkge1xuICAgIGxldCBmbGV4RGlyZWN0aW9uOiBzdHJpbmc7XG4gICAgaWYgKHZhbCA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IHZhbCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICBmbGV4RGlyZWN0aW9uID0gJ3Jvdyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgICB9XG4gICAgcmV0dXJuIGZsZXhEaXJlY3Rpb247XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlUYWIgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbmRleDogbnVtYmVyO1xuICBfaXNCcm93c2VyID0gUGxhdGZvcm0uaXNCcm93c2VyO1xuICBAQ29udGVudENoaWxkKEx5VGFiQ29udGVudCwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0ZW1wbGF0ZVJlZkxhenk6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD47XG4gIEBWaWV3Q2hpbGQoJ190ZW1wbGF0ZU5nQ29udGVudCcpIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0YWJJbmRpY2F0b3InKSB0YWJJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBMeVRhYkxhYmVsKSkgX3RhYkxhYmVsOiBMeVRhYkxhYmVsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RhYnM6IEx5VGFicyxcbiAgICBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIF9lbDogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy50YWIpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltseS10YWItbGFiZWxdJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItbGFiZWwuaHRtbCcsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXSxcbiAgaG9zdDoge1xuICAgICdbZGlzYWJsZWRdJzogJ2Rpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5VGFiTGFiZWwgZXh0ZW5kcyBMeUJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbjtcbiAgX2lzQnJvd3NlciA9IFBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrVGFiKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fdGFicy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fdGFiLmluZGV4O1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBfZWw6IEVsZW1lbnRSZWYsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3RhYjogTHlUYWIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfdGFiczogTHlUYWJzXG4gICkge1xuICAgIHN1cGVyKF9lbCwgX3JlbmRlcmVyLCBfdGhlbWUsIF9uZ1pvbmUsIF9yaXBwbGVTZXJ2aWNlLCBfZm9jdXNTdGF0ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMubGFiZWwpO1xuICAgIC8vIHNldCBkZWZhdWx0IGRpc2FibGUgcmlwcGxlXG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVUYWJTdGF0ZSgpIHtcbiAgICAvLyB1cGRhdGUgc3R5bGVzIGZvciBhY3RpdmUgdGFiXG4gICAgaWYgKHRoaXMuX3RhYnMuX3NlbGVjdGVkSW5kZXggPT09IHRoaXMuX3RhYi5pbmRleCkge1xuICAgICAgaWYgKCF0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVGFiU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlVGFiU2Nyb2xsKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdGhpcy5fdGFicy5zY3JvbGxhYmxlKSB7XG4gICAgICBjb25zdCB0YWIgPSB0aGlzLl90YWIuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB0YWJDb250YWluZXIgPSB0aGlzLl90YWJzLnRhYnNSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0YWJDb250YWluZXIuc2Nyb2xsV2lkdGggIT09IHRhYkNvbnRhaW5lci5vZmZzZXRXaWR0aCkge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLl90aGVtZS5jb25maWcuZGlyZWN0aW9uO1xuICAgICAgICBjb25zdCBtYXggPSB0YWJDb250YWluZXIuc2Nyb2xsV2lkdGggLSB0YWJDb250YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IG9mZnNldEJlZm9yZSA9IGRpciA9PT0gRGlyLnJ0bFxuICAgICAgICA/IG1heCArIHRhYi5vZmZzZXRMZWZ0XG4gICAgICAgIDogdGFiLm9mZnNldExlZnQ7XG4gICAgICAgIGNvbnN0IGwgPSBvZmZzZXRCZWZvcmUgKyB0YWIub2Zmc2V0V2lkdGggLyAyIC0gdGFiQ29udGFpbmVyLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgbmV3VmFsID0gbCA+PSBtYXggPyBtYXggOiBsIDw9IDAgPyAwIDogbDtcbiAgICAgICAgc2Nyb2xsV2l0aEFuaW1hdGlvbih0aGlzLl90YWJzLnRhYnNSZWYubmF0aXZlRWxlbWVudCwgbmV3VmFsLCAzNTAsICd4Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkgeyB9XG59XG5cbi8qKlxuICogZGVtbyBiYXNpY1xuICogPGx5LXRhYnMgd2l0aENvbG9yPVwiYWNjZW50XCI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWw+SE9NRTwvYnV0dG9uPlxuICogICAgIENvbnRlbnRcbiAqICAgPC9seS10YWI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWw+SE9NRTwvYnV0dG9uPlxuICogICAgIENvbnRlbnRcbiAqICAgPC9seS10YWI+XG4gKiAgIC4uLlxuICogPC9seS10YWJzPlxuICpcbiAqIGRlbW8gbGF6eSBsb2FkaW5nXG4gKiA8bHktdGFicyB3aXRoQmc9XCJwcmltYXJ5XCI+XG4gKiAgIDxseS10YWI+XG4gKiAgICAgPGJ1dHRvbiBseS10YWItbGFiZWw+SE9NRTwvYnV0dG9uPlxuICogICAgIDxuZy10ZW1wbGF0ZSBseS10YWItY29udGVudD48L25nLXRlbXBsYXRlPlxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKiA9PiBzZWxlY3RlZEluZGV4T25DaGFuZ2UsIGRlZmF1bHQ6IGF1dG8sIG9wdHM6IG51bWJlciwgd2l0aCBhdXRvLCB0aGUgc2VsZWN0ZWRJbmRleCA9IGN1cnJlbnQgbyBjdXJyZW50LTEgb3IgbGF0ZXN0XG4gKi9cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdUcmFuc2NsdWRlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTHlUaGVtZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVRhYnMsIEx5VGFiTGFiZWwsIEx5VGFiIH0gZnJvbSAnLi90YWJzJztcbmltcG9ydCB7IEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0x5VGhlbWVNb2R1bGUsIENvbW1vbk1vZHVsZSwgTHlDb21tb25Nb2R1bGUsIE5nVHJhbnNjbHVkZU1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUNvbW1vbk1vZHVsZSwgTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUYWJzLCBMeVRhYiwgTHlUYWJMYWJlbCwgTHlUYWJDb250ZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJMWV9DT01NT05fU1RZTEVTIiwibWl4aW5TdHlsZVVwZGF0ZXIiLCJtaXhpbkJnIiwibWl4aW5FbGV2YXRpb24iLCJtaXhpblNoYWRvd0NvbG9yIiwibWl4aW5Db2xvciIsIm1peGluUmFpc2VkIiwibWl4aW5EaXNhYmxlZCIsIm1peGluT3V0bGluZWQiLCJtaXhpbkRpc2FibGVSaXBwbGUiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIlN1YnNjcmlwdGlvbiIsIkV2ZW50RW1pdHRlciIsInRvQm9vbGVhbiIsIllQb3NpdGlvbiIsIlhQb3NpdGlvbiIsIkFsaWduQWxpYXMiLCJQbGF0Zm9ybSIsIkRpciIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJMeVRoZW1lMiIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIldpblJlc2l6ZSIsIlZpZXdDaGlsZCIsIklucHV0IiwiT3V0cHV0IiwiQ29udGVudENoaWxkcmVuIiwiZm9yd2FyZFJlZiIsIkNvbnRlbnRDaGlsZCIsInNjcm9sbFdpdGhBbmltYXRpb24iLCJOZ1pvbmUiLCJMeVJpcHBsZVNlcnZpY2UiLCJMeUZvY3VzU3RhdGUiLCJPcHRpb25hbCIsIkhvc3RMaXN0ZW5lciIsIkx5QnV0dG9uIiwiTmdNb2R1bGUiLCJMeVRoZW1lTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiLCJOZ1RyYW5zY2x1ZGVNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7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