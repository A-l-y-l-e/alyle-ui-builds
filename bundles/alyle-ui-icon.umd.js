(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common/http'), require('@angular/common'), require('rxjs/operators'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon', ['exports', '@angular/core', '@alyle/ui', '@angular/common/http', '@angular/common', 'rxjs/operators', '@angular/platform-browser'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.icon = {}), global.ng.core, global.ly.core, global.ng.common.http, global.ng.common, global.rxjs.operators, global.ng.platformBrowser));
}(this, (function (exports, core, ui, http, common, operators, platformBrowser) { 'use strict';

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

    var STYLE_PRIORITY = -2;
    /** The following styles will never be updated */
    var styles = {
        svg: {
            width: 'inherit',
            height: 'inherit',
            fill: 'currentColor',
        }
    };
    var LyIconService = /** @class */ (function () {
        function LyIconService(http, _sanitizer, _document, theme) {
            this.http = http;
            this._sanitizer = _sanitizer;
            this._document = _document;
            this.theme = theme;
            this._defaultClass = 'material-icons';
            this.svgMap = new Map();
            this._fontClasses = new Map();
            /**
             * Styles
             * @docs-private
             */
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            this.defaultSvgIcon = '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>';
        }
        Object.defineProperty(LyIconService.prototype, "defaultClass", {
            get: function () {
                return this._defaultClass;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyIconService.prototype, "defaultClassPrefix", {
            get: function () {
                return this._defaultClassPrefix;
            },
            enumerable: true,
            configurable: true
        });
        LyIconService.prototype.setSvg = function (key, url) {
            var _this = this;
            if (!this.svgMap.has(key)) {
                var urlSanitized = this._sanitizer.sanitize(core.SecurityContext.RESOURCE_URL, url);
                var svgIcon_1 = {
                    obs: this.http.get(urlSanitized + ".svg", { responseType: 'text' })
                        .pipe(operators.share(), operators.map(function (svgText) {
                        if (svgIcon_1.svg) {
                            return svgIcon_1.svg;
                        }
                        var svg = _this._textToSvg(svgText);
                        _this._cacheSvgIcon(svg, key);
                        return svg;
                    }))
                };
                this.svgMap.set(key, svgIcon_1);
            }
        };
        LyIconService.prototype.addSvgIconLiteral = function (key, literal) {
            if (!this.svgMap.has(key)) {
                var sanitizedLiteral = this._sanitizer.sanitize(core.SecurityContext.HTML, literal);
                if (!sanitizedLiteral) {
                    throw new Error("LyIconService: Failed sanitize '" + key + "'");
                }
                var svg = this._textToSvg(sanitizedLiteral);
                this.svgMap.set(key, {
                    svg: svg
                });
            }
        };
        /** String to SVG */
        LyIconService.prototype._textToSvg = function (str) {
            var div = this._document.createElement('DIV');
            div.innerHTML = str;
            var svg = div.querySelector('svg');
            return svg;
        };
        LyIconService.prototype._cacheSvgIcon = function (svg, key) {
            var svgIconInfo = this.svgMap.get(key);
            if (!svgIconInfo.svg) {
                this.svgMap.get(key).svg = svg;
            }
        };
        LyIconService.prototype.getSvg = function (key) {
            if (!this.svgMap.has(key)) {
                throw new Error("LyIconService: Icon " + key + " not found");
            }
            return this.svgMap.get(key);
        };
        /**
         * Set default className for `ly-icon`
         * @param className class name
         * @param prefix Class prefix,
         * For example if you use FontAwesome your prefix would be `fa-`,
         * then in the template it is no longer necessary to use the prefix
         * Example: `<ly-icon fontIcon="alarm">`
         */
        LyIconService.prototype.setDefaultClass = function (className, prefix) {
            this._defaultClass = className;
            this._defaultClassPrefix = prefix;
        };
        /**
         * Register new font class alias
         * demo:
         * For FontAwesome
         * registerFontClass({
         *   key: 'fa',
         *   class: 'fa'
         *   prefix: 'fa-'
         * })
         */
        LyIconService.prototype.registerFontClass = function (opt) {
            this._fontClasses.set(opt.key, opt);
        };
        LyIconService.prototype.getFontClass = function (key) {
            return this._fontClasses.get(key);
        };
        LyIconService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: platformBrowser.DomSanitizer },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: ui.LyTheme2 }
        ]; };
        LyIconService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(platformBrowser.DomSanitizer), core.ɵɵinject(common.DOCUMENT, 8), core.ɵɵinject(ui.LyTheme2)); }, token: LyIconService, providedIn: "root" });
        LyIconService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(2, core.Optional()), __param(2, core.Inject(common.DOCUMENT))
        ], LyIconService);
        return LyIconService;
    }());

    var STYLE_PRIORITY$1 = -2;
    var STYLES = function (theme) {
        var loading = ui.keyframesUniqueId.next();
        var _a = theme.background, primary = _a.primary, secondary = _a.secondary, tertiary = _a.tertiary;
        var lum = primary.default.luminance();
        var one = (lum < .5
            ? tertiary
            : secondary);
        var two = (lum < .5
            ? secondary
            : tertiary);
        one = one.darken(.25 * (lum < .5 ? -1 : 1.1));
        two = two.darken(.25 * (lum < .5 ? -1 : 1.1));
        return {
            $priority: STYLE_PRIORITY$1,
            $global: function (className) { return "@keyframes " + loading + "{" + className + " 0%{background-position:200% 50%;}" + className + " 100%{background-position:-200% 50%;}}"; },
            loading: function (className) { return className + "{background:" + ("linear-gradient(270deg, " + one + ", " + two + ", " + two + ", " + one + ")") + ";background-size:400% 400%;animation:" + loading + " 8s ease-in-out infinite;}"; },
            defaultIcon: function (className) { return className + "{border-radius:50px;}"; }
        };
    };
    var ɵ0 = STYLES;
    /** @docs-private */
    var LyIconBase = /** @class */ (function () {
        function LyIconBase(_theme) {
            this._theme = _theme;
        }
        return LyIconBase;
    }());
    /** @docs-private */
    var LyIconMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(LyIconBase)))))));
    var LyIcon = /** @class */ (function (_super) {
        __extends(LyIcon, _super);
        function LyIcon(iconService, _el, _renderer, theme, _hostClass) {
            var _this = _super.call(this, theme) || this;
            _this.iconService = iconService;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._hostClass = _hostClass;
            _this.classes = _this._theme.addStyleSheet(STYLES);
            _this.setAutoContrast();
            return _this;
        }
        Object.defineProperty(LyIcon.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (val) {
                this._icon = val;
                this._addDefaultIcon();
                if (ui.Platform.isBrowser) {
                    this._prepareSvgIcon(this.iconService.getSvg(val));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyIcon.prototype, "fontSet", {
            get: function () {
                return this._fontSet;
            },
            set: function (key) {
                this._fontSet = key;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyIcon.prototype, "fontIcon", {
            get: function () {
                return this._fontIcon;
            },
            set: function (key) {
                this._fontIcon = key;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyIcon.prototype, "hostElement", {
            /** @docs-private */
            get: function () {
                return this._el.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        LyIcon.prototype.ngOnChanges = function () {
            if (this.fontSet || this.fontIcon) {
                this._updateFontClass();
            }
            this.updateStyle(this._el);
        };
        LyIcon.prototype._isDefault = function () {
            return !(this.icon || this.fontSet);
        };
        LyIcon.prototype._prepareSvgIcon = function (svgIcon) {
            var _this = this;
            if (svgIcon.svg) {
                this._appendChild(svgIcon.svg.cloneNode(true));
            }
            else {
                svgIcon.obs
                    .pipe(operators.take(1))
                    .subscribe(function (svgElement) {
                    _this._appendChild(svgElement.cloneNode(true));
                });
            }
        };
        LyIcon.prototype._appendChild = function (svg) {
            this._cleanIcon();
            this._iconElement = svg;
            this._renderer.addClass(svg, this.iconService.classes.svg);
            this._renderer.appendChild(this._el.nativeElement, svg);
        };
        LyIcon.prototype._addDefaultIcon = function () {
            this._hostClass.add(this.classes.defaultIcon);
            this._hostClass.add(this.classes.loading);
        };
        // private _appendDefaultSvgIcon() {
        //   const svgIcon = this.iconService._textToSvg(this.iconService.defaultSvgIcon) as SVGAElement;
        //   svgIcon.classList.add(this.classes.loading);
        //   this._appendChild(svgIcon);
        // }
        LyIcon.prototype._updateClass = function () {
            if (this._isDefault() && this.iconService.defaultClass) {
                this._renderer.addClass(this._el.nativeElement, this.iconService.defaultClass);
            }
        };
        LyIcon.prototype.ngOnInit = function () {
            this._updateClass();
            this._theme.addStyle('lyIconRoot', function (theme) { return ("font-size:" + theme.icon.fontSize + ";" +
                "width:1em;" +
                "position:relative;" +
                "height:1em;" +
                "display:inline-flex;" +
                "-webkit-box-sizing: content-box;" +
                "-moz-box-sizing: content-box;" +
                "box-sizing: content-box;"); }, this._el.nativeElement, undefined, STYLE_PRIORITY$1);
        };
        LyIcon.prototype.ngOnDestroy = function () {
            this._cleanIcon();
        };
        /**
         * run only browser
         * remove current icon
         */
        LyIcon.prototype._cleanIcon = function () {
            var icon = this._iconElement;
            this._hostClass.remove(this.classes.defaultIcon);
            this._hostClass.remove(this.classes.loading);
            if (icon) {
                this._renderer.removeChild(this._el.nativeElement, icon);
                this._iconElement = undefined;
            }
        };
        LyIcon.prototype._updateFontClass = function () {
            var currentClass = this._currentClass;
            var fontSetKey = this.fontSet;
            var icon = this.fontIcon;
            var el = this._el.nativeElement;
            var iconClass = this.iconService.getFontClass(fontSetKey);
            if (currentClass) {
                this._renderer.removeClass(el, currentClass);
            }
            if (this._previousFontSet) {
                if (this._previousFontSet.class) {
                    this._renderer.removeClass(el, this._previousFontSet.class);
                }
            }
            if (iconClass) {
                this._previousFontSet = iconClass;
            }
            else {
                throw new Error("Icon with key" + fontSetKey + " not found");
            }
            this._currentClass = "" + iconClass.prefix + icon;
            this._renderer.addClass(el, this._currentClass);
        };
        LyIcon.ctorParameters = function () { return [
            { type: LyIconService },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: ui.LyTheme2 },
            { type: ui.LyHostClass }
        ]; };
        __decorate([
            core.Input()
        ], LyIcon.prototype, "icon", null);
        __decorate([
            core.Input()
        ], LyIcon.prototype, "fontSet", null);
        __decorate([
            core.Input()
        ], LyIcon.prototype, "fontIcon", null);
        LyIcon = __decorate([
            core.Directive({
                selector: 'ly-icon',
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor',
                ],
                exportAs: 'lyIcon',
                providers: [
                    ui.LyHostClass
                ]
            })
        ], LyIcon);
        return LyIcon;
    }(LyIconMixinBase));

    var LyIconModule = /** @class */ (function () {
        function LyIconModule() {
        }
        LyIconModule = __decorate([
            core.NgModule({
                declarations: [LyIcon],
                exports: [LyIcon, ui.LyCommonModule]
            })
        ], LyIconModule);
        return LyIconModule;
    }());

    exports.LyIcon = LyIcon;
    exports.LyIconBase = LyIconBase;
    exports.LyIconMixinBase = LyIconMixinBase;
    exports.LyIconModule = LyIconModule;
    exports.LyIconService = LyIconService;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-icon.umd.js.map
