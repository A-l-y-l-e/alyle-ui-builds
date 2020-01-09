(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/avatar'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/list', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/avatar', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.list = {}), global.ng.core, global.ly.core, global.ly.avatar, global.ng.common));
}(this, (function (exports, core, ui, avatar, common) { 'use strict';

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

    var STYLE_PRIORITY = 2;
    var DISABLE_PADDING = false;
    var STYLES = function (theme, ref) {
        var list = ref.selectorsOf(STYLES);
        var before = theme.before;
        return {
            $name: LyList.и,
            $priority: STYLE_PRIORITY,
            root: function () { return function (className) { return className + "{display:block;position:relative;padding-top:8px;padding-bottom:8px;}" + ui.st2c(((theme.list
                && theme.list.root
                && (theme.list.root instanceof ui.StyleCollection
                    ? theme.list.root.setTransformer(function (fn) { return fn(list); })
                    : theme.list.root(list)))), "" + className); }; },
            listItem: function () { return function (className) { return "" + ui.st2c((ui.LY_COMMON_STYLES.button), "" + className) + className + "{font-family:" + theme.typography.fontFamily + ";font-size:" + theme.pxToRem(16) + ";color:" + theme.text.default + ";display:flex;width:100%;position:relative;padding:0 16px;min-height:48px;overflow:hidden;text-align:left;align-items:flex-start;justify-content:flex-start;border-radius:0;}" + className + "::after{content:'';width:100%;height:100%;background:transparent;opacity:0;pointer-events:none;}" + ui.st2c((ui.LY_COMMON_STYLES.fill), className + "::after") + className + "::after }," + className + "::after" + list.onFocusByKeyboard + "::after," + className + "::after" + list.actionListItem + ":hover::after{background:currentColor;opacity:.13;border-radius:inherit;}"; }; },
            onFocusByKeyboard: null,
            listItemContent: function (className) { return className + "{display:flex;justify-content:inherit;align-items:inherit;align-content:inherit;font-size:inherit;width:100%;height:100%;box-sizing:border-box;}"; },
            oneLine: function (className) { return className + "{padding-top:8px;padding-bottom:8px;min-height:48px;}"; },
            twoLine: function () { return function (className) { return className + "{padding-top:16px;padding-bottom:16px;min-height:64px;}" + className + " " + list.lines + "{margin-bottom:-4px;}"; }; },
            actionListItem: function (className) { return className + "{cursor:pointer;user-select:none;}"; },
            lines: function (className) { return className + "{align-self:stretch;min-width:0;width:100%;justify-content:center;flex-direction:column;display:flex;}"; },
            listItemWithIcon: function () { return function (className) { return className + " " + list.lines + "{padding-" + before + ":16px;}"; }; },
            twoLineWithIcon: function () { return function (className) { return className + "{padding-top:16px;padding-bottom:16px;}" + className + " " + list.lines + "{margin-bottom:-4px;}"; }; }
        };
    };
    /** List container */
    var LyList = /** @class */ (function () {
        function LyList(theme) {
            this.theme = theme;
            /** @docs-private */
            this.classes = this.theme.addStyleSheet(STYLES);
        }
        LyList.и = 'LyList';
        LyList.ctorParameters = function () { return [
            { type: ui.LyTheme2 }
        ]; };
        LyList = __decorate([
            core.Directive({
                selector: 'ly-list',
                exportAs: 'lyList',
                host: {
                    '[className]': 'classes.root'
                }
            })
        ], LyList);
        return LyList;
    }());
    /** @docs-private */
    var LyListItemBase = /** @class */ (function () {
        function LyListItemBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyListItemBase;
    }());
    /** @docs-private */
    var LyListItemMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(ui.mixinDisableRipple(LyListItemBase)))))))));
    /** List Item */
    var LyListItem = /** @class */ (function (_super) {
        __extends(LyListItem, _super);
        function LyListItem(_el, _renderer, theme, ngZone, _rippleService, _focusState, _list, _cd) {
            var _this = _super.call(this, theme, ngZone) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._rippleService = _rippleService;
            _this._focusState = _focusState;
            _this._list = _list;
            _this._cd = _cd;
            /** @docs-private */
            _this.classes = _this._list.classes;
            _this._isBrowser = ui.Platform.isBrowser;
            _this.setAutoContrast();
            _this._triggerElement = _el;
            return _this;
        }
        Object.defineProperty(LyListItem.prototype, "_listItemClasses", {
            get: function () {
                var _a = this.classes, listItemContent = _a.listItemContent, twoLine = _a.twoLine, oneLine = _a.oneLine, listItemWithIcon = _a.listItemWithIcon, twoLineWithIcon = _a.twoLineWithIcon;
                var classes = [listItemContent];
                var hasIcon = this._icon || this._avatar;
                if (hasIcon) {
                    classes.push(listItemWithIcon);
                }
                if (this._lines && this._lines.length) {
                    if (hasIcon && this._lines.length > 1) {
                        classes.push(twoLineWithIcon);
                    }
                    else {
                        classes.push(this._lines.length > 1 ? twoLine : oneLine);
                    }
                }
                return classes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyListItem.prototype, "isActionListItem", {
            get: function () {
                return this._isActionListItem;
            },
            /** @docs-private */
            set: function (val) {
                this._isActionListItem = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        LyListItem.prototype.ngOnInit = function () {
            var _this = this;
            this._renderer.addClass(this._el.nativeElement, this._list.classes.listItem);
            if (this.disableRipple == null) {
                if (this.isActionListItem) {
                    this._renderer.addClass(this._el.nativeElement, this.classes.actionListItem);
                    this.disableRipple = false;
                    var focusState = this._focusState.listen(this._el);
                    if (focusState) {
                        focusState.subscribe(function (event) {
                            if (_this._onFocusByKeyboardState === true) {
                                _this._renderer.removeClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                                _this._onFocusByKeyboardState = false;
                            }
                            if (event === 'keyboard') {
                                _this._onFocusByKeyboardState = true;
                                _this._renderer.addClass(_this._el.nativeElement, _this.classes.onFocusByKeyboard);
                            }
                        });
                    }
                }
            }
        };
        LyListItem.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._lines.changes.subscribe(function () { return _this._cd.markForCheck(); });
        };
        LyListItem.prototype.ngOnDestroy = function () {
            this._focusState.unlisten(this._el);
        };
        LyListItem.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: ui.LyTheme2 },
            { type: core.NgZone },
            { type: ui.LyRippleService },
            { type: ui.LyFocusState },
            { type: LyList },
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.ViewChild('rippleContainer', { static: false })
        ], LyListItem.prototype, "_rippleContainer", void 0);
        __decorate([
            core.ContentChildren(core.forwardRef(function () { return LyLine; }))
        ], LyListItem.prototype, "_lines", void 0);
        __decorate([
            core.ContentChild(core.forwardRef(function () { return LyListIcon; }), { static: false })
        ], LyListItem.prototype, "_icon", void 0);
        __decorate([
            core.ContentChild(avatar.LyAvatar, { static: false })
        ], LyListItem.prototype, "_avatar", void 0);
        __decorate([
            core.Input('ly-list-item')
        ], LyListItem.prototype, "isActionListItem", null);
        LyListItem = __decorate([
            core.Component({
                selector: 'ly-list-item, a[ly-list-item], button[ly-list-item]',
                template: "<span [ngClass]=\"_listItemClasses\">\n  <ng-content></ng-content>\n  <div *ngIf=\"_lines?.length\" [className]=\"classes.lines\">\n    <ng-content select=\"[ly-line]\"></ng-content>\n  </div>\n</span>\n<div *ngIf=\"_isBrowser\" #rippleContainer [className]=\"_rippleService.classes.container\"></div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
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
                exportAs: 'lyListItem'
            })
        ], LyListItem);
        return LyListItem;
    }(LyListItemMixinBase));
    var LyListIcon = /** @class */ (function () {
        function LyListIcon(_theme, _el, _renderer) {
            this._theme = _theme;
            this._el = _el;
            this._renderer = _renderer;
            this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyListIcon', function (theme) { return ({
                color: theme.text.secondary,
                paddingAfter: '16px'
            }); }, STYLE_PRIORITY));
        }
        Object.defineProperty(LyListIcon.prototype, "disablePadding", {
            get: function () {
                return this._disablePadding;
            },
            /** Disable extra padding */
            set: function (val) {
                var newVal = this._disablePadding = ui.toBoolean(val);
                this._disablePaddingClass = this._theme.addStyle("lyIconPadding:" + newVal.toString(), function () { return ({
                    paddingTop: newVal ? '4px' : '8px',
                    paddingBottom: newVal ? '4px' : '8px'
                }); });
                this._renderer.addClass(this._el.nativeElement, this._disablePaddingClass);
            },
            enumerable: true,
            configurable: true
        });
        LyListIcon.prototype.ngOnInit = function () {
            if (this.disablePadding == null) {
                this.disablePadding = DISABLE_PADDING;
            }
        };
        LyListIcon.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input()
        ], LyListIcon.prototype, "disablePadding", null);
        LyListIcon = __decorate([
            core.Directive({
                selector: '[ly-list-icon]'
            })
        ], LyListIcon);
        return LyListIcon;
    }());
    var LyLine = /** @class */ (function () {
        function LyLine(_theme, _el, _renderer) {
            this._theme = _theme;
            this._el = _el;
            this._renderer = _renderer;
            this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyLine', function (theme) { return ({
                margin: 0,
                padding: 0,
                fontWeight: 400,
                textAlign: 'initial',
                '&:first-child': {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: 1,
                    fontSize: theme.pxToRem(16)
                },
                '&:nth-child(n+2)': {
                    lineHeight: '20px',
                    fontSize: theme.pxToRem(14)
                }
            }); }, STYLE_PRIORITY));
        }
        LyLine.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        LyLine = __decorate([
            core.Directive({
                selector: '[ly-line]'
            })
        ], LyLine);
        return LyLine;
    }());

    var LyListModule = /** @class */ (function () {
        function LyListModule() {
        }
        LyListModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                declarations: [LyList, LyListItem, LyListIcon, LyLine],
                exports: [ui.LyCommonModule, LyList, LyListItem, LyListIcon, LyLine]
            })
        ], LyListModule);
        return LyListModule;
    }());

    exports.LyLine = LyLine;
    exports.LyList = LyList;
    exports.LyListIcon = LyListIcon;
    exports.LyListItem = LyListItem;
    exports.LyListItemBase = LyListItemBase;
    exports.LyListItemMixinBase = LyListItemMixinBase;
    exports.LyListModule = LyListModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-list.umd.js.map
