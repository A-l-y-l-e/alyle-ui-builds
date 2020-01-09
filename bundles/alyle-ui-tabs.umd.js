(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/button'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/tabs', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/button', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.tabs = {}), global.ng.core, global.ly.core, global.ly.button, global.rxjs, global.ng.common));
}(this, (function (exports, core, ui, button, rxjs, common) { 'use strict';

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

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

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

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var LyTabContent = /** @class */ (function () {
        function LyTabContent(template) {
            this.template = template;
        }
        LyTabContent.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        LyTabContent = __decorate([
            core.Directive({ selector: '[ly-tab-content]' })
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
            root: function () { return function (className) { return className + "{display:block;}" + ui.st2c(((theme.tab
                && theme.tab.root
                && (theme.tab.root instanceof ui.StyleCollection
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
            rippleContainer: function (className) { return "" + ui.st2c((ui.LY_COMMON_STYLES.fill), "" + className) + className + "{overflow:hidden;}"; },
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
            _this.classes = _this.theme.renderStyleSheet(STYLES);
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
        /** @docs-private */
        LyTabs.и = 'LyTabs';
        LyTabs.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: ui.WinResize }
        ]; };
        __decorate([
            core.ViewChild('tabs', { static: true })
        ], LyTabs.prototype, "tabsRef", void 0);
        __decorate([
            core.ViewChild('tabContents', { static: true })
        ], LyTabs.prototype, "tabContents", void 0);
        __decorate([
            core.ViewChild('tabsIndicator', { static: true })
        ], LyTabs.prototype, "tabsIndicator", void 0);
        __decorate([
            core.Input()
        ], LyTabs.prototype, "selectedIndexOnChange", void 0);
        __decorate([
            core.Input()
        ], LyTabs.prototype, "scrollable", null);
        __decorate([
            core.Input()
        ], LyTabs.prototype, "indicatorColor", null);
        __decorate([
            core.Input()
        ], LyTabs.prototype, "headerPlacement", null);
        __decorate([
            core.Input()
        ], LyTabs.prototype, "alignTabs", null);
        __decorate([
            core.Input()
        ], LyTabs.prototype, "textColor", null);
        __decorate([
            core.Input()
        ], LyTabs.prototype, "selectedIndex", null);
        __decorate([
            core.Output()
        ], LyTabs.prototype, "selectedIndexChange", void 0);
        __decorate([
            core.ContentChildren(core.forwardRef(function () { return LyTab; }))
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
            })
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
        LyTab.ctorParameters = function () { return [
            { type: LyTabs },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.ContentChild(LyTabContent, { read: core.TemplateRef, static: true })
        ], LyTab.prototype, "_templateRefLazy", void 0);
        __decorate([
            core.ViewChild('_templateNgContent', { static: true })
        ], LyTab.prototype, "_templateRef", void 0);
        __decorate([
            core.ViewChild('tabIndicator', { static: false })
        ], LyTab.prototype, "_tabIndicator", void 0);
        __decorate([
            core.ContentChild(core.forwardRef(function () { return LyTabLabel; }), { static: true })
        ], LyTab.prototype, "_tabLabel", void 0);
        LyTab = __decorate([
            core.Component({
                selector: 'ly-tab',
                template: "<ng-content select=\"ly-tab-label\"></ng-content>\n<ng-content select=\"[ly-tab-label]\"></ng-content>\n<ng-content select=\"[ly-tab-label-native]\"></ng-content>\n<div></div>\n<span *ngIf=\"!_isBrowser\" #tabIndicator></span>\n<ng-template #_templateNgContent>\n  <ng-content></ng-content>\n</ng-template>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None
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
        LyTabLabel.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: ui.LyTheme2 },
            { type: core.NgZone },
            { type: ui.LyRippleService },
            { type: ui.LyFocusState },
            { type: ui.LyHostClass },
            { type: LyTab, decorators: [{ type: core.Optional }] },
            { type: LyTabs, decorators: [{ type: core.Optional }] }
        ]; };
        __decorate([
            core.Input()
        ], LyTabLabel.prototype, "active", null);
        __decorate([
            core.ViewChild('rippleContainer', { static: false })
        ], LyTabLabel.prototype, "_rippleContainer", void 0);
        __decorate([
            core.HostListener('click')
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
                ],
                providers: [ui.LyHostClass]
            }),
            __param(7, core.Optional()),
            __param(8, core.Optional())
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

})));
//# sourceMappingURL=alyle-ui-tabs.umd.js.map
