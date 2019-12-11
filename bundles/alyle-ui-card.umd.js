(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/card', ['exports', '@angular/core', '@angular/common', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.card = {}), global.ng.core, global.ng.common, global.ly.core));
}(this, (function (exports, core, common, ui) { 'use strict';

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

    var STYLES = function (theme, ref) {
        var card = ref.selectorsOf(STYLES);
        return {
            $priority: STYLE_PRIORITY,
            $name: LyCard.и,
            root: function () { return function (className) { return className + "{display:block;overflow:hidden;border-radius:2px;}" + ui.styleTemplateToString(((theme.card
                && theme.card.root
                && (theme.card.root instanceof ui.StyleCollection
                    ? theme.card.root.setTransformer(function (fn) { return fn(card); })
                    : theme.card.root(card)))), "" + className); }; },
            bgImg: function (className) { return className + "{display:block;background-size:cover;background-repeat:no-repeat;background-position:center;}"; },
            content: function (className) { return className + "{display:block;padding:16px 24px;}" + className + " " + theme.getBreakpoint('XSmall') + "{padding:16px 16px;}"; },
            actions: function (className) { return className + "{display:block;padding:8px 12px;}" + className + " " + theme.getBreakpoint('XSmall') + "{padding:8px 4px;}"; },
            actionsItem: function (className) { return className + "{margin:0 4px;}"; }
        };
    };
    var DEFAULT_ASPECT_RATIO = '16:9';
    var STYLE_PRIORITY = -1;
    /** @docs-private */
    var LyCardBase = /** @class */ (function () {
        function LyCardBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyCardBase;
    }());
    /** @docs-private */
    var LyCardMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(ui.mixinDisableRipple(LyCardBase)))))))));
    var LyCard = /** @class */ (function (_super) {
        __extends(LyCard, _super);
        function LyCard(theme, _el, renderer, ngZone) {
            var _this = _super.call(this, theme, ngZone) || this;
            _this.theme = theme;
            _this._el = _el;
            _this.renderer = renderer;
            /**
             * styles
             * @docs-private
             */
            _this.classes = _this.theme.renderStyleSheet(STYLES);
            _this.setAutoContrast();
            return _this;
        }
        LyCard.prototype.ngOnChanges = function () {
            this.updateStyle(this._el);
        };
        LyCard.prototype.ngOnInit = function () {
            var requireOnChanges;
            if (!this.bg) {
                this.bg = 'background:primary';
                requireOnChanges = true;
            }
            if (!this.elevation) {
                this.elevation = 2;
                requireOnChanges = true;
            }
            if (requireOnChanges) {
                this.updateStyle(this._el);
            }
            this.renderer.addClass(this._el.nativeElement, this.classes.root);
        };
        LyCard.prototype.ngOnDestroy = function () {
            this._removeRippleEvents();
        };
        LyCard.и = 'LyCard';
        LyCard.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.NgZone }
        ]; };
        LyCard = __decorate([
            core.Directive({
                selector: 'ly-card',
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor',
                    'disableRipple',
                ],
                providers: [ui.StyleRenderer]
            })
        ], LyCard);
        return LyCard;
    }(LyCardMixinBase));
    var LyCardContent = /** @class */ (function () {
        function LyCardContent(el, renderer, card) {
            this.el = el;
            this.renderer = renderer;
            this.card = card;
        }
        LyCardContent.prototype.ngOnInit = function () {
            this.renderer.addClass(this.el.nativeElement, this.card.classes.content);
        };
        LyCardContent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: LyCard }
        ]; };
        LyCardContent = __decorate([
            core.Directive({
                selector: 'ly-card-content'
            })
        ], LyCardContent);
        return LyCardContent;
    }());
    var LyCardActions = /** @class */ (function () {
        function LyCardActions(el, renderer, card) {
            this.el = el;
            this.renderer = renderer;
            this.card = card;
        }
        LyCardActions.prototype.ngOnInit = function () {
            var _this = this;
            this.renderer.addClass(this.el.nativeElement, this.card.classes.actions);
            if (!ui.toBoolean(this.disableActionSpacing)) {
                this.el.nativeElement.childNodes.forEach(function (element) {
                    _this.renderer.addClass(element, _this.card.classes.actionsItem);
                });
            }
        };
        LyCardActions.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: LyCard }
        ]; };
        __decorate([
            core.Input()
        ], LyCardActions.prototype, "disableActionSpacing", void 0);
        LyCardActions = __decorate([
            core.Directive({
                selector: 'ly-card-actions'
            })
        ], LyCardActions);
        return LyCardActions;
    }());
    var ɵ0 = function (val) { return function () { return function (className) { return className + "{background-image:url('" + val + "');}"; }; }; };
    /**
     * @dynamic
     */
    var LyCardMedia = /** @class */ (function () {
        function LyCardMedia(sRenderer, card) {
            this.sRenderer = sRenderer;
            sRenderer.addClass(card.classes.bgImg);
        }
        LyCardMedia_1 = LyCardMedia;
        Object.defineProperty(LyCardMedia.prototype, "ratio", {
            get: function () {
                return this._ratio;
            },
            /**
             * Aspect ratio
             *
             * e.g:
             * 4:3
             * 1:1
             */
            set: function (val) {
                if (val !== this.ratio) {
                    this._ratio = val;
                    this[0x2] = this.sRenderer.add(LyCardMedia_1.и + "--ratio-" + val, function () { return function (className) { return className + "::before{content:'';display:block;padding-top:" + val
                        .split(':')
                        .reduce(function (prev, current) { return (+current / +prev * 100).toString(); }) + "%;}"; }; }, STYLE_PRIORITY, this[0x2]);
                }
            },
            enumerable: true,
            configurable: true
        });
        LyCardMedia.prototype.ngOnInit = function () {
            if (!this.ratio) {
                this.ratio = DEFAULT_ASPECT_RATIO;
            }
        };
        var LyCardMedia_1;
        LyCardMedia.и = 'LyCardMedia';
        LyCardMedia.$priority = STYLE_PRIORITY;
        LyCardMedia.ctorParameters = function () { return [
            { type: ui.StyleRenderer },
            { type: LyCard }
        ]; };
        __decorate([
            core.Input(),
            ui.Style(ɵ0)
        ], LyCardMedia.prototype, "bgImg", void 0);
        __decorate([
            core.Input()
        ], LyCardMedia.prototype, "ratio", null);
        LyCardMedia = LyCardMedia_1 = __decorate([
            core.Directive({
                selector: 'ly-card-media',
                providers: [
                    ui.StyleRenderer,
                    ui.LyHostClass
                ]
            })
        ], LyCardMedia);
        return LyCardMedia;
    }());

    var LyCardModule = /** @class */ (function () {
        function LyCardModule() {
        }
        LyCardModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                exports: [LyCard, LyCardContent, LyCardActions, LyCardMedia, ui.LyCommonModule],
                declarations: [LyCard, LyCardContent, LyCardActions, LyCardMedia]
            })
        ], LyCardModule);
        return LyCardModule;
    }());

    exports.LyCard = LyCard;
    exports.LyCardActions = LyCardActions;
    exports.LyCardBase = LyCardBase;
    exports.LyCardContent = LyCardContent;
    exports.LyCardMedia = LyCardMedia;
    exports.LyCardMixinBase = LyCardMixinBase;
    exports.LyCardModule = LyCardModule;
    exports.STYLES = STYLES;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-card.umd.js.map
