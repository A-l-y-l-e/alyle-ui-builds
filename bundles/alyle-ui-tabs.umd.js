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
                { type: ui.ResizeService }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdGFicy51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvdGFicy90YWItY29udGVudC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMudHMiLCJuZzovL0BhbHlsZS91aS90YWJzL3RhYnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbbHktdGFiLWNvbnRlbnRdJ30pXG5leHBvcnQgY2xhc3MgTHlUYWJDb250ZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPcHRpb25hbFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRGlzYWJsZWQsXG4gIG1peGluRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5FbGV2YXRpb24sXG4gIG1peGluT3V0bGluZWQsXG4gIG1peGluUmFpc2VkLFxuICBtaXhpblNoYWRvd0NvbG9yLFxuICBtaXhpblN0eWxlVXBkYXRlcixcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBBbGlnbkFsaWFzLFxuICBZUG9zaXRpb24sXG4gIFhQb3NpdGlvbixcbiAgRGlyLFxuICBMeVJpcHBsZVNlcnZpY2UsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgUmVzaXplU2VydmljZSxcbiAgc2Nyb2xsV2l0aEFuaW1hdGlvbixcbiAgdG9Cb29sZWFuXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnQGFseWxlL3VpL2J1dHRvbic7XG5pbXBvcnQgeyBMeVRhYkNvbnRlbnQgfSBmcm9tICcuL3RhYi1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuY29uc3QgREVGQVVMVF9JTkRJQ0FUT1JfQ09MT1IgPSAnYWNjZW50JztcbmNvbnN0IERFRkFVTFRfRUxFVkFUSU9OID0gNDtcbmNvbnN0IERFRkFVTFRfSEVBREVSX1BMQUNFTUVOVCA9ICdhYm92ZSc7XG5leHBvcnQgdHlwZSBBbGlnblRhYnMgPSAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdzdHJldGNoJyB8ICdiYXNlbGluZSc7XG5leHBvcnQgdHlwZSBMeVRhYnNIZWFkZXJQbGFjZW1lbnQgPSAnYmVmb3JlJyB8ICdhZnRlcicgfCAnYWJvdmUnIHwgJ2JlbG93JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnXG4gIH0sXG4gIHRhYjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCdcbiAgfSxcbiAgLyoqIFRhYiBjb250ZW50ICovXG4gIGNvbnRlbnRDb250YWluZXI6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgLyoqIFRhYiBoZWFkZXIgKi9cbiAgdGFic0xhYmVsczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0YWJzTGFiZWxzQ29udGFpbmVyOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICcme3Njcm9sbGFibGV9Jzoge1xuICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBsYWJlbDoge1xuICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICBib3JkZXI6IDAsXG4gICAgbWluV2lkdGg6ICc3MnB4JyxcbiAgICBwYWRkaW5nOiAnMCAyNHB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUpLFxuICAgIGxldHRlclNwYWNpbmc6ICcwLjAyODU3ZW0nLFxuICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgb3BhY2l0eTogLjcsXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgcGFkZGluZzogJzAgMTJweCdcbiAgICB9XG4gIH0sXG4gIHRhYkxhYmVsQWN0aXZlOiB7XG4gICAgb3BhY2l0eTogMVxuICB9LFxuICB0YWJDb250ZW50czoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB0cmFuc2l0aW9uOiAnNDUwbXMgY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpJyxcbiAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xuICB9LFxuICB0YWJDb250ZW50OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIHRhYnNJbmRpY2F0b3I6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBoZWlnaHQ6ICcycHgnLFxuICAgIHRyYW5zaXRpb246ICc0NTBtcyBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSknLFxuICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InXG4gIH0sXG4gIHRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJ1xuICB9LFxuICByaXBwbGVDb250YWluZXI6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIHNjcm9sbGFibGU6IG51bGxcbn0pO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5VGFic0Jhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5VGFic01peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKG1peGluQmcobWl4aW5FbGV2YXRpb24obWl4aW5TaGFkb3dDb2xvcihMeVRhYnNCYXNlKSkpKTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjbGFzcyBMeVRhYkxhYmVsQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBjb25zdCBMeVRhYkxhYmVsTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5EaXNhYmxlZChcbiAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeVRhYkxhYmVsQmFzZSkpKSkpKSkpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJzLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgZXhwb3J0QXM6ICdseVRhYnMnLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLCAnZWxldmF0aW9uJywgJ3NoYWRvd0NvbG9yJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFicyBleHRlbmRzIEx5VGFic01peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBfc2VsZWN0ZWRJbmRleCA9IDA7XG4gIF9zZWxlY3RlZEJlZm9yZUluZGV4OiBudW1iZXI7XG4gIF9zZWxlY3RlZFRhYjogTHlUYWI7XG4gIF9zZWxlY3RlZEJlZm9yZVRhYjogTHlUYWI7XG4gIF9pc1ZpZXdJbml0TG9hZGVkOiBib29sZWFuO1xuICBwcml2YXRlIF90YWJzU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9jb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hlYWRlclBsYWNlbWVudDogTHlUYWJzSGVhZGVyUGxhY2VtZW50O1xuICBwcml2YXRlIF9oZWFkZXJQbGFjZW1lbnRDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9hbGlnblRhYnM6IEFsaWduVGFicztcbiAgcHJpdmF0ZSBfYWxpZ25UYWJzQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfdGV4dENvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX3RleHRDb2xvckNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXhDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF90YWJSZXNpemVTdWI6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfc2Nyb2xsYWJsZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCd0YWJzJykgdGFic1JlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudHMnKSB0YWJDb250ZW50czogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFic0luZGljYXRvcicpIHRhYnNJbmRpY2F0b3I6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIHNlbGVjdGVkSW5kZXhPbkNoYW5nZTogJ2F1dG8nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoKVxuICBzZXQgc2Nyb2xsYWJsZSh2YWw6IGFueSkge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRvQm9vbGVhbih2YWwpO1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2Nyb2xsYWJsZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zY3JvbGxhYmxlICE9IG51bGwpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuc2Nyb2xsYWJsZSk7XG4gICAgfVxuICAgIHRoaXMuX3Njcm9sbGFibGUgPSBuZXdWYWw7XG4gIH1cbiAgZ2V0IHNjcm9sbGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGFibGU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGluZGljYXRvckNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5pbmRpY2F0b3JDb2xvcikge1xuICAgICAgdGhpcy5fY29sb3IgPSB2YWw7XG4gICAgICB0aGlzLl9jb2xvckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGstdGFiLWluZGljYXRvci1jb2xvcjoke3ZhbH1gLFxuICAgICAgICB0aGVtZSA9PiAoXG4gICAgICAgICAgYGNvbG9yOiR7dGhlbWUuY29sb3JPZih2YWwpfTtgXG4gICAgICAgICksXG4gICAgICAgIHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb2xvckNsYXNzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBnZXQgaW5kaWNhdG9yQ29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGhlYWRlclBsYWNlbWVudCh2YWw6IEx5VGFic0hlYWRlclBsYWNlbWVudCkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuaGVhZGVyUGxhY2VtZW50KSB7XG4gICAgICB0aGlzLl9oZWFkZXJQbGFjZW1lbnQgPSB2YWw7XG4gICAgICB0aGlzLl9oZWFkZXJQbGFjZW1lbnRDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5VGFicy5oZWFkZXJQbGFjZW1lbnQ6JHt2YWx9YCxcbiAgICAgICgpID0+IHtcbiAgICAgICAgbGV0IGZsZXhEaXJlY3Rpb25Db250YWluZXI6IHN0cmluZztcbiAgICAgICAgbGV0IGZsZXhEaXJlY3Rpb24gPSB0aGlzLl9nZXRGbGV4RGlyZWN0aW9uKHZhbCk7XG4gICAgICAgIGxldCBwb3NpdGlvbjogc3RyaW5nO1xuICAgICAgICBsZXQgaGVpZ2h0OiBzdHJpbmcgPSBudWxsO1xuICAgICAgICBsZXQgd2lkdGg6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIGxldCBoZWlnaHRTZXJ2ZXI6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIGxldCB3aWR0aFNlcnZlcjogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgc3dpdGNoICh2YWwpIHtcbiAgICAgICAgICBjYXNlIFlQb3NpdGlvbi5hYm92ZTpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAnY29sdW1uJztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gWVBvc2l0aW9uLmJlbG93O1xuICAgICAgICAgICAgaGVpZ2h0ID0gJzJweCc7XG4gICAgICAgICAgICB3aWR0aFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgWVBvc2l0aW9uLmJlbG93OlxuICAgICAgICAgICAgZmxleERpcmVjdGlvbkNvbnRhaW5lciA9ICdjb2x1bW4tcmV2ZXJzZSc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFlQb3NpdGlvbi5hYm92ZTtcbiAgICAgICAgICAgIGhlaWdodCA9ICcycHgnO1xuICAgICAgICAgICAgd2lkdGhTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFhQb3NpdGlvbi5iZWZvcmU6XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uQ29udGFpbmVyID0gJ3Jvdyc7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IFhQb3NpdGlvbi5hZnRlcjtcbiAgICAgICAgICAgIHdpZHRoID0gJzJweCc7XG4gICAgICAgICAgICBoZWlnaHRTZXJ2ZXIgPSAnMTAwJSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFhQb3NpdGlvbi5hZnRlcjpcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb25Db250YWluZXIgPSAncm93LXJldmVyc2UnO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBYUG9zaXRpb24uYmVmb3JlO1xuICAgICAgICAgICAgd2lkdGggPSAnMnB4JztcbiAgICAgICAgICAgIGhlaWdodFNlcnZlciA9ICcxMDAlJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTHlUYWJzOiB2YWx1ZToke3ZhbH0gZG8gbm90IGlzIHZhbGlkIGZvciBcXGBoZWFkZXJQbGFjZW1lbnRcXGBgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdmFsID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uID0gJ3Jvdyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMuY29udGFpbmVyfWBdOiB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBmbGV4RGlyZWN0aW9uQ29udGFpbmVyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3J9LCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3JGb3JTZXJ2ZXJ9YF06IHtcbiAgICAgICAgICAgIFtwb3NpdGlvbl06IDAsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICB3aWR0aFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2AuJHt0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcn1gXToge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoU2VydmVyLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRTZXJ2ZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc30sJiAuJHt0aGlzLmNsYXNzZXMudGFiQ29udGVudHN9YF06IHsgZmxleERpcmVjdGlvbiB9LFxuICAgICAgICAgIFtgLiR7dGhpcy5jbGFzc2VzLnRhYkNvbnRlbnRzfWBdOiB7IGZsZXhEaXJlY3Rpb24gfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuX2hlYWRlclBsYWNlbWVudENsYXNzLFxuICAgICAgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgdGhpcy5fdXBkYXRlU3R5bGVzT2ZTZWxlY3RlZFRhYigpO1xuICAgIH1cbiAgfVxuICBnZXQgaGVhZGVyUGxhY2VtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJQbGFjZW1lbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWxpZ25UYWJzKHZhbDogQWxpZ25UYWJzKSB7XG4gICAgdGhpcy5fYWxpZ25UYWJzID0gdmFsO1xuICAgIHRoaXMuX2FsaWduVGFic0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlBbGlnblRhYnM6ICR7dmFsfWAsXG4gICAgKFxuICAgICAgdmFsID09PSAnc3RyZXRjaCcgPyB7XG4gICAgICAgIFtgJiAuJHt0aGlzLmNsYXNzZXMudGFic0xhYmVsc30gLiR7dGhpcy5jbGFzc2VzLnRhYn1gXToge1xuICAgICAgICAgIGZsZXhCYXNpczogMCxcbiAgICAgICAgICBmbGV4R3JvdzogMVxuICAgICAgICB9XG4gICAgICB9IDoge1xuICAgICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYnNMYWJlbHN9YF06IHtcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogdmFsIGluIEFsaWduQWxpYXMgPyBBbGlnbkFsaWFzW3ZhbF0gOiB2YWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICksXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX2FsaWduVGFic0NsYXNzLFxuICAgIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuICBnZXQgYWxpZ25UYWJzKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnblRhYnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdGV4dENvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGV4dENvbG9yID0gdmFsO1xuICAgIHRoaXMuX3RleHRDb2xvckNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlUYWJzLnRleHRDb2xvcjoke3ZhbH1gLFxuICAgICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICBbYCYgLiR7dGhpcy5jbGFzc2VzLnRhYkxhYmVsQWN0aXZlfWBdOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvck9mKHZhbClcbiAgICAgIH1cbiAgICB9KSxcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fdGV4dENvbG9yQ2xhc3MsXG4gICAgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG4gIGdldCB0ZXh0Q29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRDb2xvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEJlZm9yZUluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJbmRleCBhcyBudW1iZXI7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHZhbCwgJ2F1dG8nKTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQmVmb3JlVGFiID0gdGhpcy5fc2VsZWN0ZWRUYWI7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcbiAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVTdHlsZXNPZlNlbGVjdGVkVGFiKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cblxuICBAT3V0cHV0KCkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBMeVRhYikpIHRhYnNMaXN0OiBRdWVyeUxpc3Q8THlUYWI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3Jlc2l6ZVNlcnZpY2U6IFJlc2l6ZVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5faXNWaWV3SW5pdExvYWRlZCkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLnRhYnNSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBjb25zdCB0YWJzSW5kaWNhdG9yRWwgPSB0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRhYnNJbmRpY2F0b3JFbCwgdGhpcy5jbGFzc2VzLnRhYnNJbmRpY2F0b3IpO1xuICAgIC8qKiBTZXQgZGVmYXVsdCBDb2xvciAqL1xuICAgIGlmICghdGhpcy5pbmRpY2F0b3JDb2xvciAmJiAhdGhpcy5iZyAmJiAhdGhpcy50ZXh0Q29sb3IgJiYgIXRoaXMuZWxldmF0aW9uKSB7XG4gICAgICB0aGlzLmluZGljYXRvckNvbG9yID0gREVGQVVMVF9JTkRJQ0FUT1JfQ09MT1I7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICAgIHRoaXMuZWxldmF0aW9uID0gREVGQVVMVF9FTEVWQVRJT047XG4gICAgfVxuICAgIGlmICghdGhpcy5oZWFkZXJQbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuaGVhZGVyUGxhY2VtZW50ID0gREVGQVVMVF9IRUFERVJfUExBQ0VNRU5UO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl90YWJzU3Vic2NyaXB0aW9uID0gdGhpcy50YWJzTGlzdC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fZmluZEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCwgdGhpcy5zZWxlY3RlZEluZGV4T25DaGFuZ2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMudGFic1JlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9pc1ZpZXdJbml0TG9hZGVkID0gdHJ1ZTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl90YWJSZXNpemVTdWIgPSB0aGlzLl9yZXNpemVTZXJ2aWNlLnJlc2l6ZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRoaXMuX3NlbGVjdGVkVGFiKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRUYWIuX3RhYkxhYmVsLl91cGRhdGVUYWJTY3JvbGwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3RhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5fdGFiUmVzaXplU3ViKSB7XG4gICAgICB0aGlzLl90YWJSZXNpemVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW5kZXgoc2VsZWN0ZWRJbmRleDogbnVtYmVyLCBpbmRleDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRhYnNMaXN0KSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkxhc3RUYWIgPSB0aGlzLnRhYnNMaXN0Lmxlbmd0aCAtIDE7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJyA/IGluZGV4IDogc2VsZWN0ZWRJbmRleDtcbiAgICByZXR1cm4gY3VycmVudEluZGV4IDwgMCA/IDAgOiBjdXJyZW50SW5kZXggPiBpbmRleE9mTGFzdFRhYiA/IGluZGV4T2ZMYXN0VGFiIDogY3VycmVudEluZGV4O1xuICB9XG5cbiAgX3VwZGF0ZUluZGljYXRvcihjdXJyZW50VGFiOiBMeVRhYiwgYmVmb3JlVGFiPzogTHlUYWIpOiB2b2lkIHtcbiAgICBpZiAoY3VycmVudFRhYikge1xuICAgICAgaWYgKGJlZm9yZVRhYikge1xuICAgICAgICBiZWZvcmVUYWIuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShiZWZvcmVUYWIudGFiSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdjbGFzcycpO1xuICAgICAgfVxuICAgICAgY29uc3QgZWwgPSBjdXJyZW50VGFiLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgcmVjdHMgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHRoaXMuaGVhZGVyUGxhY2VtZW50ID09PSBYUG9zaXRpb24uYWZ0ZXIgfHwgdGhpcy5oZWFkZXJQbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5iZWZvcmUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3JlY3RzLmhlaWdodH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAndG9wJywgYCR7ZWwub2Zmc2V0VG9wfXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMudGFic0luZGljYXRvci5uYXRpdmVFbGVtZW50LCAnbGVmdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgYCR7cmVjdHMud2lkdGh9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBgJHtlbC5vZmZzZXRMZWZ0fXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy50YWJzSW5kaWNhdG9yLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnRhYnNJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgJ3RvcCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlc09mU2VsZWN0ZWRUYWIoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHRoaXMuaGVhZGVyUGxhY2VtZW50O1xuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBseVRhYnMuc2VsZWN0ZWRJbmRleDoke2luZGV4fSske3BsYWNlbWVudH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICBsZXQgc2lnbiA9IDE7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2dldEZsZXhEaXJlY3Rpb24ocGxhY2VtZW50KSA9PT0gJ2NvbHVtbicgPyAnWScgOiAnWCc7XG4gICAgICBpZiAodGhlbWUuZGlyZWN0aW9uID09PSBEaXIubHRyIHx8IHBvc2l0aW9uID09PSAnWScpIHtcbiAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlJHtwb3NpdGlvbn0oJHtpbmRleCAqIDEwMCAqIHNpZ259JSlgXG4gICAgICB9O1xuICAgIH0sIHRoaXMudGFiQ29udGVudHMubmF0aXZlRWxlbWVudCwgdGhpcy5fc2VsZWN0ZWRJbmRleENsYXNzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYkNvbnRlbnRzLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3NlbGVjdGVkSW5kZXhDbGFzcyk7XG4gIH1cblxuICBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBsb2FkVGVtcGxhdGUodGFiOiBMeVRhYiwgaW5kZXg6IG51bWJlcik6IFRlbXBsYXRlUmVmPEx5VGFiQ29udGVudD4gfCBudWxsIHtcbiAgICB0YWIuaW5kZXggPSBpbmRleDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID09PSB0YWIuaW5kZXgpIHtcbiAgICAgIC8vIHNldCAwIGlmIGlzIG51bGxcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGFiID0gdGFiO1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlSW5kaWNhdG9yKHRhYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqIGZvciBzZXJ2ZXIgKi9cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX3NlbGVjdGVkVGFiLnRhYkluZGljYXRvci5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMudGFic0luZGljYXRvckZvclNlcnZlcik7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3RlZFRhYi50YWJJbmRpY2F0b3IubmF0aXZlRWxlbWVudCwgdGhpcy5fY29sb3JDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0YWIuX3RhYkxhYmVsLl91cGRhdGVUYWJTdGF0ZSgpO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggPT09IHRhYi5pbmRleCkge1xuICAgICAgcmV0dXJuIHRhYi50ZW1wbGF0ZVJlZkxhenkgfHwgdGFiLnRlbXBsYXRlUmVmO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRGbGV4RGlyZWN0aW9uKHZhbDogTHlUYWJzSGVhZGVyUGxhY2VtZW50KSB7XG4gICAgbGV0IGZsZXhEaXJlY3Rpb246IHN0cmluZztcbiAgICBpZiAodmFsID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdmFsID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgIGZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgICB9IGVsc2Uge1xuICAgICAgZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgIH1cbiAgICByZXR1cm4gZmxleERpcmVjdGlvbjtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluZGV4OiBudW1iZXI7XG4gIF9pc0Jyb3dzZXIgPSBQbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gIEBDb250ZW50Q2hpbGQoTHlUYWJDb250ZW50LCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHRlbXBsYXRlUmVmTGF6eTogVGVtcGxhdGVSZWY8THlUYWJDb250ZW50PjtcbiAgQFZpZXdDaGlsZCgnX3RlbXBsYXRlTmdDb250ZW50JykgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3RhYkluZGljYXRvcicpIHRhYkluZGljYXRvcjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZChmb3J3YXJkUmVmKCgpID0+IEx5VGFiTGFiZWwpKSBfdGFiTGFiZWw6IEx5VGFiTGFiZWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGFiczogTHlUYWJzLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgX2VsOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGFicy5jbGFzc2VzLnRhYik7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW2x5LXRhYi1sYWJlbF0nLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1sYWJlbC5odG1sJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdLFxuICBob3N0OiB7XG4gICAgJ1tkaXNhYmxlZF0nOiAnZGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlUYWJMYWJlbCBleHRlbmRzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuO1xuICBfaXNCcm93c2VyID0gUGxhdGZvcm0uaXNCcm93c2VyO1xuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2tUYWIoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl90YWJzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl90YWIuaW5kZXg7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9lbDogRWxlbWVudFJlZixcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfdGFiOiBMeVRhYixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIF90YWJzOiBMeVRhYnNcbiAgKSB7XG4gICAgc3VwZXIoX2VsLCBfcmVuZGVyZXIsIF90aGVtZSwgX25nWm9uZSwgX3JpcHBsZVNlcnZpY2UsIF9mb2N1c1N0YXRlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RhYnMuY2xhc3Nlcy5sYWJlbCk7XG4gICAgLy8gc2V0IGRlZmF1bHQgZGlzYWJsZSByaXBwbGVcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRhYlN0YXRlKCkge1xuICAgIC8vIHVwZGF0ZSBzdHlsZXMgZm9yIGFjdGl2ZSB0YWJcbiAgICBpZiAodGhpcy5fdGFicy5fc2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5fdGFiLmluZGV4KSB7XG4gICAgICBpZiAoIXRoaXMuX2FjdGl2ZSkge1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMudGFiTGFiZWxBY3RpdmUpO1xuICAgICAgICB0aGlzLl91cGRhdGVUYWJTY3JvbGwoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90YWJzLmNsYXNzZXMudGFiTGFiZWxBY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVUYWJTY3JvbGwoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiB0aGlzLl90YWJzLnNjcm9sbGFibGUpIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRoaXMuX3RhYi5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHRhYkNvbnRhaW5lciA9IHRoaXMuX3RhYnMudGFic1JlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhYkNvbnRhaW5lci5zY3JvbGxXaWR0aCAhPT0gdGFiQ29udGFpbmVyLm9mZnNldFdpZHRoKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuX3RoZW1lLmNvbmZpZy5kaXJlY3Rpb247XG4gICAgICAgIGNvbnN0IG1heCA9IHRhYkNvbnRhaW5lci5zY3JvbGxXaWR0aCAtIHRhYkNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0QmVmb3JlID0gZGlyID09PSBEaXIucnRsXG4gICAgICAgID8gbWF4ICsgdGFiLm9mZnNldExlZnRcbiAgICAgICAgOiB0YWIub2Zmc2V0TGVmdDtcbiAgICAgICAgY29uc3QgbCA9IG9mZnNldEJlZm9yZSArIHRhYi5vZmZzZXRXaWR0aCAvIDIgLSB0YWJDb250YWluZXIub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICBjb25zdCBuZXdWYWwgPSBsID49IG1heCA/IG1heCA6IGwgPD0gMCA/IDAgOiBsO1xuICAgICAgICBzY3JvbGxXaXRoQW5pbWF0aW9uKHRoaXMuX3RhYnMudGFic1JlZi5uYXRpdmVFbGVtZW50LCBuZXdWYWwsIDM1MCwgJ3gnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7IH1cbn1cblxuLyoqXG4gKiBkZW1vIGJhc2ljXG4gKiA8bHktdGFicyB3aXRoQ29sb3I9XCJhY2NlbnRcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbD5IT01FPC9idXR0b24+XG4gKiAgICAgQ29udGVudFxuICogICA8L2x5LXRhYj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbD5IT01FPC9idXR0b24+XG4gKiAgICAgQ29udGVudFxuICogICA8L2x5LXRhYj5cbiAqICAgLi4uXG4gKiA8L2x5LXRhYnM+XG4gKlxuICogZGVtbyBsYXp5IGxvYWRpbmdcbiAqIDxseS10YWJzIHdpdGhCZz1cInByaW1hcnlcIj5cbiAqICAgPGx5LXRhYj5cbiAqICAgICA8YnV0dG9uIGx5LXRhYi1sYWJlbD5IT01FPC9idXR0b24+XG4gKiAgICAgPG5nLXRlbXBsYXRlIGx5LXRhYi1jb250ZW50PjwvbmctdGVtcGxhdGU+XG4gKiAgIDwvbHktdGFiPlxuICogICAuLi5cbiAqIDwvbHktdGFicz5cbiAqID0+IHNlbGVjdGVkSW5kZXhPbkNoYW5nZSwgZGVmYXVsdDogYXV0bywgb3B0czogbnVtYmVyLCB3aXRoIGF1dG8sIHRoZSBzZWxlY3RlZEluZGV4ID0gY3VycmVudCBvIGN1cnJlbnQtMSBvciBsYXRlc3RcbiAqL1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1RyYW5zY2x1ZGVNb2R1bGUsIEx5Q29tbW9uTW9kdWxlLCBMeVRoZW1lTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5VGFicywgTHlUYWJMYWJlbCwgTHlUYWIgfSBmcm9tICcuL3RhYnMnO1xuaW1wb3J0IHsgTHlUYWJDb250ZW50IH0gZnJvbSAnLi90YWItY29udGVudC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTHlUaGVtZU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBMeUNvbW1vbk1vZHVsZSwgTmdUcmFuc2NsdWRlTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5Q29tbW9uTW9kdWxlLCBMeVRhYnMsIEx5VGFiLCBMeVRhYkxhYmVsLCBMeVRhYkNvbnRlbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVRhYnMsIEx5VGFiLCBMeVRhYkxhYmVsLCBMeVRhYkNvbnRlbnRdXG59KVxuZXhwb3J0IGNsYXNzIEx5VGFic01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJUZW1wbGF0ZVJlZiIsIkxZX0NPTU1PTl9TVFlMRVMiLCJtaXhpblN0eWxlVXBkYXRlciIsIm1peGluQmciLCJtaXhpbkVsZXZhdGlvbiIsIm1peGluU2hhZG93Q29sb3IiLCJtaXhpbkNvbG9yIiwibWl4aW5SYWlzZWQiLCJtaXhpbkRpc2FibGVkIiwibWl4aW5PdXRsaW5lZCIsIm1peGluRGlzYWJsZVJpcHBsZSIsInRzbGliXzEuX19leHRlbmRzIiwiU3Vic2NyaXB0aW9uIiwiRXZlbnRFbWl0dGVyIiwidG9Cb29sZWFuIiwiWVBvc2l0aW9uIiwiWFBvc2l0aW9uIiwiQWxpZ25BbGlhcyIsIlBsYXRmb3JtIiwiRGlyIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkx5VGhlbWUyIiwiUmVuZGVyZXIyIiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwiUmVzaXplU2VydmljZSIsIlZpZXdDaGlsZCIsIklucHV0IiwiT3V0cHV0IiwiQ29udGVudENoaWxkcmVuIiwiZm9yd2FyZFJlZiIsIkNvbnRlbnRDaGlsZCIsInNjcm9sbFdpdGhBbmltYXRpb24iLCJOZ1pvbmUiLCJMeVJpcHBsZVNlcnZpY2UiLCJMeUZvY3VzU3RhdGUiLCJPcHRpb25hbCIsIkhvc3RMaXN0ZW5lciIsIkx5QnV0dG9uIiwiTmdNb2R1bGUiLCJMeVRoZW1lTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiLCJOZ1RyYW5zY2x1ZGVNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FB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