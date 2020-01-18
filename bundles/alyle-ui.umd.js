(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui/color'), require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui', ['exports', '@alyle/ui/color', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/platform-browser'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.core = {}), global.ly.color, global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators, global.ng.platformBrowser));
}(this, (function (exports, color, core, common, rxjs, operators, platformBrowser) { 'use strict';

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

    function getContrastYIQ(hexcolor) {
        var r = parseInt(hexcolor.substr(0, 2), 16);
        var g = parseInt(hexcolor.substr(2, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? 'black' : 'white';
    }

    var shadowKeyUmbraOpacity = 0.2;
    var shadowKeyPenumbraOpacity = 0.14;
    var shadowAmbientShadowOpacity = 0.12;
    var Shadows = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1],
        [0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2],
        [0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2],
        [0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0],
        [0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0],
        [0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0],
        [0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1],
        [0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2],
        [0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2],
        [0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3],
        [0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3],
        [0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4],
        [0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4],
        [0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4],
        [0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5],
        [0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5],
        [0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5],
        [0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6],
        [0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6],
        [0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7],
        [0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7],
        [0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7],
        [0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8],
        [0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8]
    ];
    function shadowBuilder(elevation, color$1) {
        var _color = color$1 || new color.Color(0, 0, 0);
        var rgb = _color.rgba();
        if (!(rgb[0] === rgb[1] && rgb[0] === rgb[2])) {
            // Darken and saturate if the color is not in the grayscale
            _color = _color.darken().saturate(2);
        }
        var colors = [
            _color.alpha(shadowKeyUmbraOpacity).css(),
            _color.alpha(shadowKeyPenumbraOpacity).css(),
            _color.alpha(shadowAmbientShadowOpacity).css()
        ];
        var e = Shadows[elevation];
        // tslint:disable-next-line:max-line-length
        return e[0] + "px " + e[1] + "px " + e[2] + "px " + e[3] + "px " + colors[0] + "," + e[4] + "px " + e[5] + "px " + e[6] + "px " + e[7] + "px " + colors[1] + "," + e[8] + "px " + e[9] + "px " + e[10] + "px " + e[11] + "px " + colors[2];
    }

    var THEME_VARIABLES = new core.InjectionToken('ly.theme.variables');
    var IS_CORE_THEME = new core.InjectionToken('ly.is.root');

    // Whether the current platform supports the V8 Break Iterator. The V8 check
    // is necessary to detect all Blink based browsers.
    var hasV8BreakIterator = (typeof (Intl) !== 'undefined' && Intl.v8BreakIterator);
    /**
     * Service to detect the current platform by comparing the userAgent strings and
     * checking browser-specific global properties.
     */
    var Platform = /** @class */ (function () {
        function Platform() {
        }
        Platform.isBrowser = typeof document === 'object' && !!document;
        /** Layout Engines */
        Platform.EDGE = Platform.isBrowser && /(edge)/i.test(navigator.userAgent);
        Platform.TRIDENT = Platform.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        Platform.BLINK = Platform.isBrowser &&
            (!!(window.chrome || hasV8BreakIterator) && !!CSS && !Platform.EDGE && !Platform.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        Platform.WEBKIT = Platform.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !Platform.BLINK && !Platform.EDGE && !Platform.TRIDENT;
        /** Browsers and Platform Types */
        Platform.IOS = Platform.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        Platform.FIREFOX = Platform.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        Platform.ANDROID = Platform.isBrowser && /android/i.test(navigator.userAgent) && !Platform.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        Platform.SAFARI = Platform.isBrowser && /safari/i.test(navigator.userAgent) && Platform.WEBKIT;
        return Platform;
    }());

    var supportsPassive;
    function supportsPassiveEventListeners() {
        if (supportsPassive === void 0) {
            try {
                var opts = Object.defineProperty({}, 'passive', {
                    get: function () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener('testPassive', null, opts);
                window.removeEventListener('testPassive', null, opts);
            }
            catch (e) { }
        }
        return supportsPassive;
    }

    var LY_THEME_GLOBAL_VARIABLES = new core.InjectionToken('ly.theme.global.variables');
    var LY_THEME = new core.InjectionToken('ly_theme_config');
    var LY_THEME_NAME = new core.InjectionToken('ly.theme.name');

    /**
     * For internal use only
     * @docsPrivate
     */
    var _STYLE_MAP = new Map();

    (function (TypeStyle) {
        TypeStyle[TypeStyle["Multiple"] = 0] = "Multiple";
        TypeStyle[TypeStyle["OnlyOne"] = 1] = "OnlyOne";
        /**
         * A lyl Style
         */
        TypeStyle[TypeStyle["LylStyle"] = 2] = "LylStyle";
    })(exports.TypeStyle || (exports.TypeStyle = {}));
    function getThemeNameForSelectors(themeId) {
        return themeId + "<~(selectors)";
    }

    var LINE_FEED_REGEX = function () { return /(\n?[^\n]+\n?)/g; };
    var ɵ0 = LINE_FEED_REGEX;
    var AMPERSAND_REGEX = function () { return /&/g; };
    var ɵ1 = AMPERSAND_REGEX;
    var STYLE_TEMPLATE_REGEX = function () { return /__LY_EXPRESSION__\[[\w]+\]/g; };
    var ɵ2 = STYLE_TEMPLATE_REGEX;
    var id = 0;
    /**
     * Transform a lyl style block to CSS
     *
     * Allowed blocks:
     *
     * // Simple
     * const BUTTON_STYLE = lyl `{
     *   padding: 8px 12px
     *   font-size: 14px
     *   border-radius: 9px
     *   border: 1px solid #e0e0e0
     * }`
     *
     * // Nesting
     * const style = lyl `{
     *   ul > {
     *     li {
     *       list-style-type: none;
     *     }
     *   }
     *   p {
     *     ~ {
     *       span {
     *         opacity: 0.8;
     *       }
     *     }
     *   }
     * }`
     *
     */
    var LylParse = /** @class */ (function () {
        function LylParse(_template, _className) {
            if (_className === void 0) { _className = '${className}'; }
            this._template = _template;
            this._className = _className;
        }
        LylParse.prototype.toCss = function () {
            var _this = this;
            var selectors = [];
            var selector = null;
            var rules = new Map();
            this._template
                .replace(/(\/\/\s[^\n\r]*(?:[\n\r]+|$))/g, '')
                .replace(/,\n/g, ',')
                .replace(LINE_FEED_REGEX(), function (_ex, fullLine) {
                fullLine = fullLine.trim();
                if (fullLine.endsWith('{')) {
                    if (selectors.length === 0) {
                        selectors.push([_this._className]);
                        selector = selectors[0][0];
                    }
                    else {
                        var line_1 = fullLine.slice(0, fullLine.length - 1).trim();
                        var isMediaQuery = line_1.includes('@');
                        if (isMediaQuery) {
                            selectors.push([line_1.trim()]);
                            if (!rules.has(line_1)) {
                                rules.set(line_1, []);
                            }
                        }
                        else {
                            selectors.push(line_1
                                .split(',')
                                .map(function (_) { return _.trim(); }));
                        }
                        selector = _this._resolveSelectors(selectors);
                    }
                    if (!rules.has(selector)) {
                        rules.set(selector, []);
                    }
                }
                else if (fullLine.length === 1 && fullLine.endsWith('}')) {
                    selectors.pop();
                    if (selectors.length) {
                        selector = _this._resolveSelectors(selectors);
                        if (!rules.has(selector)) {
                            rules.set(selector, []);
                        }
                    }
                }
                else if (fullLine.startsWith('/* >> ds')) {
                    selector = _this._resolveSelectors(selectors);
                    var lin = fullLine;
                    // Ignore compiled css
                    rules.get(selector).push(lin);
                    // fullLine = lin;
                    // /** For non LylModule< */else {
                    //   fullLine = `\${(${lin.slice(2, lin.length - 1)})(\`${selector}\`)}`;
                    //   rules.set(createUniqueCommentSelector('ds'), fullLine);
                    // } /** for non LylModule>  */
                }
                else if (fullLine.startsWith('...')) {
                    // for non LylModule>
                    var content = fullLine.slice(3);
                    selector = _this._resolveSelectors(selectors);
                    // Ignore compiled css
                    rules.get(selector).push("" + createUniqueCommentSelector('cc') + content);
                }
                else {
                    if (fullLine) {
                        if (fullLine.includes('undefined') || fullLine.startsWith('// ')) {
                            return '';
                        }
                        if (fullLine.endsWith(';')) {
                            throw new Error("Do not require semicolon in [" + fullLine + "]");
                        }
                        if (fullLine.includes(': ')) {
                            fullLine = fullLine.replace(': ', ':');
                        }
                        fullLine += ';';
                        rules.get(selector).push(fullLine);
                    }
                }
                return '';
            });
            // Join media queries & keyframes
            rules.forEach(function (val, key) {
                var matchArray = key.match(/(@[^\${]*(?:\${[^{]*)*){/);
                if (matchArray) {
                    var media = matchArray[1];
                    if (media !== key && val.length) {
                        var after = rules.get(media);
                        var sel_1 = key.replace(media + '{', '');
                        var newValue = after + val.reduce(function (previous, current) {
                            var last = previous[previous.length - 1];
                            // __READY__ is added to be ignored by content.startsWith ('/ * >> xx')
                            if (current.startsWith('/* >> ds')) {
                                previous.push('/* __READY__ */' + current.replace(/\|\|\&\|\|/g, sel_1));
                            }
                            else if (current.startsWith('/* >> cc')) {
                                previous.push('/* __READY__ */' + transformCC(current, sel_1));
                            }
                            else {
                                if (Array.isArray(last)) {
                                    last.push(current);
                                }
                                else {
                                    previous.push([current]);
                                }
                            }
                            return previous;
                        }, [])
                            .map(function (item) { return Array.isArray(item) ? sel_1 + "{" + item.join('') + "}" : item; }).join('');
                        // const newValue = after
                        // + sel
                        // + `{${val.join('')}}`;
                        rules.set(media, [newValue]);
                        rules.delete(key);
                    }
                }
            });
            return Array.from(rules.entries())
                .filter(function (rule) { return rule[1]; })
                .map(function (rule) {
                var sel = rule[0];
                var contents = rule[1];
                var css = [];
                var contentRendered = [];
                var set = new Set();
                for (var index = 0; index < contents.length; index++) {
                    var content = contents[index];
                    if (content) {
                        if (content.startsWith('/* >> ds')) {
                            contentRendered.push(content.replace(/\|\|\&\|\|/g, sel));
                            set.add(contentRendered);
                        }
                        else if (content.startsWith('/* >> cc')) {
                            contentRendered.push(transformCC(content, sel));
                            set.add(contentRendered);
                        }
                        else {
                            // css += `${sel}{${content}}`;
                            css.push(content);
                            set.add(css);
                        }
                    }
                }
                return Array.from(set).map(function (_) {
                    if (_ === css) {
                        return css.length
                            ? sel + "{" + css.join('') + "}"
                            : '';
                    }
                    else {
                        return _.join('');
                    }
                }).join('');
            }).join('');
        };
        LylParse.prototype._resolveSelectors = function (selectors) {
            var media = null;
            var sel = selectors
                .map(function (_) { return _.filter(function (__) {
                if (__.startsWith('@')) {
                    // save media
                    media = __;
                    return false;
                }
                return __;
            }); })
                .filter(function (_) { return _.length; })
                .reduce(function (prev, current) {
                var result = prev.map(function (item) { return current.map(function (cu) {
                    if (cu.includes('&')) {
                        return cu.replace(AMPERSAND_REGEX(), item);
                    }
                    return item + " " + cu;
                }); });
                return Array.prototype.concat.apply([], result);
            })
                .join(',');
            if (media) {
                return media + "{" + sel;
            }
            return sel;
        };
        return LylParse;
    }());
    function transformCC(content, sel) {
        content = content.replace(/\/\* >> cc[^\/\*]+\*\//g, '');
        var expression = content.slice(2, content.length - 1);
        expression = "st2c((" + expression + "), `" + sel + "`)";
        return "${" + expression + "}";
    }
    function lyl(literals) {
        var placeholders = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            placeholders[_i - 1] = arguments[_i];
        }
        return function (className) {
            var result = '';
            // Save expressions
            var exMap = {};
            for (var i = 0; i < placeholders.length; i++) {
                var placeholder = placeholders[i];
                result += literals[i];
                if (result.endsWith('...')) {
                    result = result.slice(0, result.length - 3);
                    if (typeof placeholder === 'function'
                        || placeholder instanceof StyleCollection) {
                        result += "" + createUniqueCommentSelector('ds') + st2c(placeholder, '||&||');
                    }
                }
                else {
                    var newID = "__LY_EXPRESSION__[__" + (id++).toString(36) + "]";
                    result += newID;
                    exMap[newID] = "" + placeholder;
                }
            }
            // add the last literal
            result += literals[literals.length - 1];
            var css = new LylParse(result, className).toCss();
            return css.replace(STYLE_TEMPLATE_REGEX(), function (str) {
                if (str in exMap) {
                    return exMap[str];
                }
                return '';
            });
        };
    }
    function createUniqueCommentSelector(text) {
        if (text === void 0) { text = 'id'; }
        return "/* >> " + text + " -- " + Math.floor(new Date().valueOf() * Math.random()).toString(36) + " */";
    }
    var StyleCollection = /** @class */ (function () {
        function StyleCollection() {
            var templates = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                templates[_i] = arguments[_i];
            }
            this._templates = templates;
            this.css = this.css.bind(this);
        }
        StyleCollection.prototype.add = function () {
            var _a;
            var templates = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                templates[_i] = arguments[_i];
            }
            // return new StyleCollection(...[...this._templates, ...templates]);
            (_a = this._templates).push.apply(_a, __spread(templates));
            return this;
        };
        /** Transform style */
        StyleCollection.prototype.setTransformer = function (transformer) {
            this._transformer = transformer;
            return this;
        };
        /**
         * @return StyleTemplate
         * @docs-private
         */
        StyleCollection.prototype.css = function (className) {
            var lin = '';
            var templates = this._templates;
            for (var index = 0; index < templates.length; index++) {
                var template = void 0;
                if (this._transformer) {
                    template = ((this._transformer(templates[index])));
                }
                else {
                    template = templates[index];
                }
                lin += template(className);
            }
            return lin;
        };
        return StyleCollection;
    }());
    /**
     * Transform a ...{style} to css
     * For internal use purposes only
     * @param fn StyleTemplate or StyleCollection
     * @param className class name
     */
    function st2c(fn, className) {
        if (fn == null) {
            return '';
        }
        if (fn instanceof StyleCollection) {
            return fn.css(className);
        }
        return fn(className);
    }
    // export function normalizeStyleTemplate(
    //   fn: StyleTemplate
    //   ) {
    //   if (fn.length) {
    //     return fn as StyleTemplate;
    //   } else {
    //     return (fn as (() => StyleTemplate))();
    //   }
    // }
    var StringIdGenerator = /** @class */ (function () {
        function StringIdGenerator(chars) {
            if (chars === void 0) { chars = 'abcdefghijklmnopqrstuvwxyz'; }
            this._chars = chars;
            this._nextId = [0];
        }
        StringIdGenerator.prototype.next = function () {
            var e_1, _a;
            var r = [];
            try {
                for (var _b = __values(this._nextId), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var char = _c.value;
                    r.unshift(this._chars[char]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._increment();
            return r.join('');
        };
        StringIdGenerator.prototype._increment = function () {
            for (var i = 0; i < this._nextId.length; i++) {
                var val = ++this._nextId[i];
                if (val >= this._chars.length) {
                    this._nextId[i] = 0;
                }
                else {
                    return;
                }
            }
            this._nextId.push(0);
        };
        return StringIdGenerator;
    }());

    var LyStyleUtils = /** @class */ (function () {
        function LyStyleUtils() {
            /** Returns top */
            this.above = 'top';
            /** Returns bottom */
            this.below = 'bottom';
        }
        Object.defineProperty(LyStyleUtils.prototype, "before", {
            /** Returns left or right according to the direction */
            get: function () {
                return this.getDirection(exports.DirAlias.before);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyStyleUtils.prototype, "after", {
            /** Returns left or right according to the direction */
            get: function () {
                return this.getDirection(exports.DirAlias.after);
            },
            enumerable: true,
            configurable: true
        });
        LyStyleUtils.prototype.pxToRem = function (value) {
            var size = this.typography.fontSize / 14;
            return value / this.typography.htmlFontSize * size + "rem";
        };
        LyStyleUtils.prototype.colorOf = function (value, optional) {
            if (typeof value === 'number') {
                return new color.Color(value);
            }
            if (value.includes('#') && value.length === 7) {
                return new color.Color(color.hexColorToInt(value));
            }
            var color$1 = get(this, value, optional);
            if (color$1) {
                return color$1;
            }
            /** Create invalid color */
            return new color.Color();
        };
        LyStyleUtils.prototype.getBreakpoint = function (key) {
            return "@media " + (this.breakpoints[key] || key);
        };
        LyStyleUtils.prototype.selectorsOf = function (styles) {
            var styleMap = _STYLE_MAP.get(styles);
            if (styleMap) {
                return styleMap.classes || styleMap[this.name];
            }
            else {
                throw Error('Classes not found');
            }
        };
        LyStyleUtils.prototype.getDirection = function (val) {
            if (val === exports.DirAlias.before) {
                return this.direction === 'rtl' ? 'right' : 'left';
            }
            else if (val === exports.DirAlias.after) {
                return this.direction === 'rtl' ? 'left' : 'right';
            }
            else if (val === 'above') {
                return 'top';
            }
            else if (val === 'below') {
                return 'bottom';
            }
            return val;
        };
        return LyStyleUtils;
    }());

    (function (Dir) {
        Dir["rtl"] = "rtl";
        Dir["ltr"] = "ltr";
    })(exports.Dir || (exports.Dir = {}));

    (function (DirAlias) {
        DirAlias["before"] = "before";
        DirAlias["after"] = "after";
    })(exports.DirAlias || (exports.DirAlias = {}));

    (function (DirPosition) {
        DirPosition["left"] = "left";
        DirPosition["right"] = "right";
    })(exports.DirPosition || (exports.DirPosition = {}));
    /**
     * get color of object
     * @param obj object
     * @param path path
     * @param optional get optional value, if not exist return default if not is string
     */
    function get(obj, path, optional) {
        if (path === 'transparent') {
            return new color.Color(0, 0, 0, 0);
        }
        var _path = path instanceof Array ? path : path.split(':');
        for (var i = 0; i < _path.length; i++) {
            var posibleOb = obj[_path[i]];
            if (posibleOb) {
                obj = posibleOb;
            }
            else {
                /** if not exist */
                return new color.Color();
            }
        }
        if (obj instanceof color.Color) {
            return obj;
        }
        else if (optional) {
            return obj[optional] || obj['default'];
        }
        else {
            return obj['default'];
        }
        // return typeof obj === 'string' ? obj as string : obj['default'] as string;
    }
    function eachMedia(str, fn, withStyleCollection) {
        var styleCollection;
        if (withStyleCollection) {
            styleCollection = new StyleCollection();
        }
        if (typeof str === 'string') {
            var values = str.split(/\ /g);
            for (var index = 0; index < values.length; index++) {
                var valItem = values[index].split(/\@/g);
                var strValue = valItem.shift();
                var len = valItem.length;
                var value = isNaN(+strValue) ? strValue : +strValue;
                if (len) {
                    for (var j = 0; j < len; j++) {
                        resolveMediaEachItemStyle(fn, value, valItem[j], index, styleCollection);
                    }
                }
                else {
                    resolveMediaEachItemStyle(fn, value, null, index, styleCollection);
                }
            }
        }
        else if (Array.isArray(str)) {
            for (var index = 0; index < str.length; index++) {
                var val = str[index];
                if (typeof val === 'number' || typeof val === 'string') {
                    resolveMediaEachItemStyle(fn, val, null, index, styleCollection);
                }
                else {
                    var medias = val[1].split(/\@/g).filter(function (media) { return media; });
                    var strValue = val[0];
                    var len = medias.length;
                    if (len) {
                        for (var ii = 0; ii < len; ii++) {
                            resolveMediaEachItemStyle(fn, strValue, medias[ii], index, styleCollection);
                        }
                    }
                    else {
                        resolveMediaEachItemStyle(fn, strValue, null, index, styleCollection);
                    }
                }
            }
        }
        else {
            resolveMediaEachItemStyle(fn, str, null, 0, styleCollection);
        }
        if (styleCollection) {
            return styleCollection.css;
        }
    }
    function resolveMediaEachItemStyle(fn, val, media, index, styleCollection) {
        var styl = fn(val, media, index);
        if (styleCollection && styl) {
            styleCollection.add(styl);
        }
    }
    /**
     * Simple object check.
     * @param item
     */
    function isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }
    /**
     * Deep merge two objects.
     * @param target
     * @param ...sources
     */
    function mergeDeep(target) {
        var _a, _b;
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (!sources.length) {
            return target;
        }
        var source = sources.shift();
        if (isObject(target) && isObject(source)) {
            for (var key in source) {
                if (isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    }
                    mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return mergeDeep.apply(void 0, __spread([target], sources));
    }
    /**
     * Simple object check.
     * @param item
     */
    function isObjectForTheme(item) {
        return (item && typeof item === 'object' && !Array.isArray(item))
            && !(item instanceof StyleCollection)
            && !(item instanceof color.Color);
    }
    function mergeThemes(target) {
        var _a, _b;
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (!sources.length) {
            return target;
        }
        var source = sources.shift();
        if (isObjectForTheme(target) && isObjectForTheme(source)) {
            for (var key in source) {
                if (isObjectForTheme(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    }
                    mergeThemes(target[key], source[key]);
                }
                else {
                    var targetKey = target[key];
                    var sourceKey = source[key];
                    // Merge styles
                    if (targetKey instanceof StyleCollection && typeof sourceKey === 'function') {
                        target[key] = target[key].add(sourceKey);
                    }
                    else if (sourceKey instanceof color.Color) {
                        target[key] = sourceKey;
                    }
                    else {
                        Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                    }
                }
            }
        }
        return mergeThemes.apply(void 0, __spread([target], sources));
    }

    var CoreTheme = /** @class */ (function () {
        function CoreTheme(rendererFactory, _document) {
            this.rendererFactory = rendererFactory;
            this.themes = new Set();
            this._themeMap = new Map();
            this._styleMap = new Map();
            this._document = _document;
            if (Platform.isBrowser) {
                // Clean
                var nodes = this._document.body.querySelectorAll('ly-s-c');
                if (nodes.length) {
                    for (var index = 0; index < nodes.length; index++) {
                        var element = nodes.item(index);
                        this._document.body.removeChild(element);
                    }
                }
            }
            this.firstElement = this._document.body.firstChild;
            this.renderer = this.rendererFactory.createRenderer(null, {
                id: 'ly',
                encapsulation: core.ViewEncapsulation.None,
                styles: [],
                data: {}
            });
        }
        CoreTheme.prototype.initializeTheme = function (themeConfig, globalVariables) {
            var _this = this;
            var allThemes = Array.isArray(themeConfig) ? themeConfig : [themeConfig];
            var themes = new Map();
            allThemes.forEach(function (item) {
                // Do not install themes that are already initialized.
                if (_this.hasTheme(item.name)) {
                    // throw new Error(`Theme '${item.name}' is already initialized.`);
                    // }
                }
                if (themes.has(item.name)) {
                    themes.get(item.name).push(item);
                }
                else {
                    themes.set(item.name, [item]);
                }
            });
            themes.forEach(function (items) {
                if (globalVariables) {
                    items.push(globalVariables);
                }
                if (items.length > 1) {
                    mergeThemes.apply(void 0, __spread([items[0]], items.slice(1)));
                }
                _this._add(items[0]);
                _this.themes.add(items[0].name);
            });
        };
        /**
         * add new theme
         * @param theme: ThemeVariables
         */
        CoreTheme.prototype._add = function (theme) {
            this._themeMap.set(theme.name, theme);
            this._styleMap.set(theme.name, new Map());
        };
        CoreTheme.prototype.hasTheme = function (theme) {
            var name = typeof theme === 'string' ? theme : theme.name;
            return this._themeMap.has(name);
        };
        CoreTheme.prototype.get = function (name) {
            return this._themeMap.get(name);
        };
        CoreTheme.prototype.updateClassName = function (element, renderer, newClassname, oldClassname) {
            if (oldClassname) {
                renderer.removeClass(element, oldClassname);
            }
            renderer.addClass(element, newClassname);
        };
        CoreTheme.ctorParameters = function () { return [
            { type: core.RendererFactory2 },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        CoreTheme.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(core.ɵɵinject(core.RendererFactory2), core.ɵɵinject(common.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
        CoreTheme = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(1, core.Inject(common.DOCUMENT))
        ], CoreTheme);
        return CoreTheme;
    }());


    (function (YPosition) {
        YPosition["above"] = "above";
        YPosition["below"] = "below";
    })(exports.YPosition || (exports.YPosition = {}));

    (function (XPosition) {
        XPosition["before"] = "before";
        XPosition["after"] = "after";
        XPosition["left"] = "left";
        XPosition["right"] = "right";
    })(exports.XPosition || (exports.XPosition = {}));
    var INITIAL_V = 'initial';
    var Positioning = /** @class */ (function () {
        function Positioning(placement, xPosition, yPosition, origin, overlayElement, _themeVariables, _offset, _flip) {
            if (_offset === void 0) { _offset = 0; }
            if (_flip === void 0) { _flip = true; }
            this.placement = placement;
            this.xPosition = xPosition;
            this.yPosition = yPosition;
            this.origin = origin;
            this.overlayElement = overlayElement;
            this._themeVariables = _themeVariables;
            this._offset = _offset;
            this._offsetCheck = 16;
            this._originRect = this.origin.getBoundingClientRect();
            this._overlayElementRect = this.overlayElement.getBoundingClientRect();
            this.width = INITIAL_V;
            this.height = INITIAL_V;
            var offsetCheckx2 = this._offsetCheck * 2;
            this.createPosition();
            if (_flip) {
                for (var index = 0; index < 2; index++) {
                    if (this.checkAll(false, true)) {
                        this.createPosition();
                    }
                }
            }
            // when there is not enough space
            if (this.checkAll(true, false)) {
                var requireUpdateOrigin = false;
                var _max_width = this._overlayElementRect.width + offsetCheckx2 > window.innerWidth;
                var _max_height = this._overlayElementRect.height + offsetCheckx2 > window.innerHeight;
                if (_max_height) {
                    this.y = this._offsetCheck;
                    this.height = window.innerHeight - offsetCheckx2 + "px";
                    requireUpdateOrigin = true;
                }
                else if (this.checkBottom(false, false)) {
                    this.y += this.checkBottom(true, false);
                    requireUpdateOrigin = true;
                }
                else if (this.checkTop(false, false)) {
                    this.y -= this.checkTop(true, false);
                    requireUpdateOrigin = true;
                }
                if (_max_width) {
                    this.x = this._offsetCheck;
                    this.width = window.innerWidth - offsetCheckx2 + "px";
                    requireUpdateOrigin = true;
                }
                else if (this.checkRight(false, false)) {
                    this.x += this.checkRight(true, false);
                    requireUpdateOrigin = true;
                }
                else if (this.checkLeft(false, false)) {
                    this.x -= this.checkLeft(true, false);
                    requireUpdateOrigin = true;
                }
                if (requireUpdateOrigin) {
                    this.updateOrigin();
                }
            }
            if (this._offset) {
                this.updateOrigin();
            }
            // round result
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.ax = Math.round(this.ax);
            this.ay = Math.round(this.ay);
        }
        Object.defineProperty(Positioning.prototype, "offsetX", {
            get: function () {
                return typeof this._offset === 'number'
                    ? this._offset
                    : this._offset.x || 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Positioning.prototype, "offsetY", {
            get: function () {
                return typeof this._offset === 'number'
                    ? this._offset
                    : this._offset.y || 0;
            },
            enumerable: true,
            configurable: true
        });
        Positioning.prototype.createPosition = function () {
            if (this.xPosition && this.yPosition) {
                throw new Error("You can not use `xPosition` and `yPosition` together, use only one of them.");
            }
            if ((this.xPosition || this.yPosition) && !this.placement) {
                throw new Error("`placement` is required.");
            }
            var x = this._originRect.x, y = this._originRect.y, ox = 'center', oy = 'center';
            if (this.placement) {
                if (this.placement === exports.YPosition.above) {
                    x += (this._originRect.width - this._overlayElementRect.width) / 2;
                    y += -this._overlayElementRect.height;
                    oy = 'bottom';
                    // set offset
                    y -= this.offsetY;
                }
                else if (this.placement === exports.YPosition.below) {
                    x += (this._originRect.width - this._overlayElementRect.width) / 2;
                    y += this._originRect.height;
                    oy = 'top';
                    // set offset
                    y += this.offsetY;
                }
                else {
                    var dir = this._themeVariables.getDirection(this.placement);
                    if (dir === exports.DirPosition.left) {
                        ox = '100%';
                        x += -this._overlayElementRect.width;
                        y += (this._originRect.height - this._overlayElementRect.height) / 2;
                        // set offset
                        x -= this.offsetX;
                    }
                    else if (dir === exports.DirPosition.right) {
                        ox = '0%';
                        x += this._originRect.width;
                        y += (this._originRect.height - this._overlayElementRect.height) / 2;
                        // set offset
                        x += this.offsetX;
                    }
                }
                if (this.xPosition) {
                    var dir = this._themeVariables.getDirection(this.xPosition);
                    if (dir === exports.DirPosition.right) {
                        ox = '0%';
                        x = this._originRect.x;
                        // set offset
                        x += this.offsetX;
                    }
                    else if (dir === exports.DirPosition.left) {
                        ox = '100%';
                        x = this._originRect.x + this._originRect.width - this._overlayElementRect.width;
                        // set offset
                        x -= this.offsetX;
                    }
                }
                else if (this.yPosition) {
                    if (this.yPosition === exports.YPosition.above) {
                        y = this._originRect.y;
                        oy = '0%';
                        // set offset
                        y -= this.offsetY;
                    }
                    else if (this.yPosition === exports.YPosition.below) {
                        y = this._originRect.y + this._originRect.height - this._overlayElementRect.height;
                        oy = '100%';
                        // set offset
                        y += this.offsetY;
                    }
                }
            }
            this.x = x;
            this.y = y;
            this.ax = x;
            this.ay = y;
            this.ox = ox;
            this.oy = oy;
            return {
                x: Math.round(x),
                y: Math.round(y),
                ox: ox,
                oy: oy
            };
        };
        Positioning.prototype.checkLeft = function (returnVal, invertIfNeed) {
            var rest = this.ax - this._offsetCheck;
            if (returnVal) {
                return rest;
            }
            if (rest < 0) {
                if (invertIfNeed) {
                    if (this.placement !== exports.YPosition.above && this.placement !== exports.YPosition.below) {
                        this.placement = invertPlacement(this.placement);
                    }
                    if (this.xPosition) {
                        this.xPosition = invertPlacement(this.xPosition);
                    }
                }
                return true;
            }
            return false;
        };
        Positioning.prototype.checkRight = function (returnVal, invertIfNeed) {
            var rest = window.innerWidth - (this.ax + this._overlayElementRect.width + this._offsetCheck);
            if (returnVal) {
                return rest;
            }
            if (rest < 0) {
                if (invertIfNeed) {
                    if (this.placement !== exports.YPosition.above && this.placement !== exports.YPosition.below) {
                        this.placement = invertPlacement(this.placement);
                    }
                    if (this.xPosition) {
                        this.xPosition = invertPlacement(this.xPosition);
                    }
                }
                return true;
            }
            return false;
        };
        Positioning.prototype.checkTop = function (returnVal, invertIfNeed) {
            var rest = this.ay - this._offsetCheck;
            if (returnVal) {
                return rest;
            }
            if (rest < 0) {
                if (invertIfNeed) {
                    if (this.placement === exports.YPosition.above || this.placement === exports.YPosition.below) {
                        this.placement = invertPlacement(this.placement);
                    }
                    if (this.yPosition) {
                        this.yPosition = invertPlacement(this.yPosition);
                    }
                }
                return true;
            }
            return false;
        };
        Positioning.prototype.checkBottom = function (returnVal, invertIfNeed) {
            var rest = window.innerHeight - (this.ay + this._overlayElementRect.height + this._offsetCheck);
            if (returnVal) {
                return rest;
            }
            if (rest < 0) {
                if (invertIfNeed) {
                    if (this.placement === exports.YPosition.above || this.placement === exports.YPosition.below) {
                        this.placement = invertPlacement(this.placement);
                    }
                    if (this.yPosition) {
                        this.yPosition = invertPlacement(this.yPosition);
                    }
                }
                return true;
            }
            return false;
        };
        Positioning.prototype.checkAll = function (returnVal, invertIfNeed) {
            return this.checkLeft(returnVal, invertIfNeed) ||
                this.checkRight(returnVal, invertIfNeed) ||
                this.checkTop(returnVal, invertIfNeed) ||
                this.checkBottom(returnVal, invertIfNeed);
        };
        Positioning.prototype.updateOrigin = function () {
            // do not update if it is defined
            if (this._origin) {
                return;
            }
            this._origin = true;
            var oax = this._originRect.x + this._originRect.width / 2;
            var oay = this._originRect.y + this._originRect.height / 2;
            var vax = this.x + this._overlayElementRect.width / 2;
            var vay = this.y + this._overlayElementRect.height / 2;
            this.ox = oax - vax + this._overlayElementRect.width / 2 + "px";
            this.oy = oay - vay + this._overlayElementRect.height / 2 + "px";
        };
        return Positioning;
    }());
    function invertPlacement(placement) {
        if (placement === exports.YPosition.above) {
            return exports.YPosition.below;
        }
        else if (placement === exports.YPosition.below) {
            return exports.YPosition.above;
        }
        else if (placement === exports.XPosition.after) {
            return exports.XPosition.before;
        }
        else if (placement === exports.XPosition.before) {
            return exports.XPosition.after;
        }
        else if (placement === exports.XPosition.right) {
            return exports.XPosition.left;
        }
        else if (placement === exports.XPosition.left) {
            return exports.XPosition.right;
        }
        return placement;
    }

    var REF_REG_EXP = /\{([\w-]+)\}/g;
    var nextKeyFrameId = 0;
    var yClassID = new StringIdGenerator();
    var keyframesUniqueId = new StringIdGenerator();
    var StylesInDocument = /** @class */ (function () {
        function StylesInDocument() {
            this.styles = {};
            this.styleContainers = new Map();
            this.styleElementGlobalMap = new Map();
        }
        StylesInDocument.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
        StylesInDocument = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], StylesInDocument);
        return StylesInDocument;
    }());
    var THEME_MAP = new Map();
    var LyTheme2 = /** @class */ (function () {
        function LyTheme2(stylesInDocument, core$1, themeName, themeConfig, globalVariables, _document, _ngZone) {
            this.stylesInDocument = stylesInDocument;
            this.core = core$1;
            this._document = _document;
            this._ngZone = _ngZone;
            this._elementsMap = new Map();
            /** Event emitted when the direction has changed. */
            this._directionChanged = new rxjs.Subject();
            this.themeMap = THEME_MAP;
            /** ssr or hmr */
            this.isDevOrServer = core.isDevMode() || !Platform.isBrowser;
            if (themeConfig) {
                core$1.initializeTheme(themeConfig, globalVariables);
            }
            if (themeName) {
                this.setUpTheme(themeName);
            }
        }
        Object.defineProperty(LyTheme2.prototype, "directionChanged", {
            get: function () {
                return this._directionChanged.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyTheme2.prototype, "variables", {
            /** Get Theme Variables */
            get: function () {
                return this.config;
            },
            enumerable: true,
            configurable: true
        });
        LyTheme2.prototype.setUpTheme = function (themeName) {
            if (!this.config) {
                var theme = this.core.get(themeName);
                if (theme === undefined) {
                    throw new Error("Theme " + themeName + " not found in CoreTheme");
                }
                this.config = theme;
                this._styleMap = new Map();
                this.elements = themeName in this.stylesInDocument.styles
                    ? this.stylesInDocument.styles[themeName]
                    : this.stylesInDocument.styles[themeName] = new Map();
                if (!this.initialTheme) {
                    this.initialTheme = this.config.name;
                }
                if (!this.themeMap.has(this.initialTheme)) {
                    this.themeMap.set(this.initialTheme, {
                        base: this.initialTheme,
                        change: null
                    });
                }
            }
        };
        /**
         * Build multiple styles and render them in the DOM
         */
        LyTheme2.prototype.renderStyleSheet = function (styles) {
            return this._createStyleContent2(styles, null, null, exports.TypeStyle.Multiple);
        };
        /**
         * Build the styles and render them in the DOM
         */
        LyTheme2.prototype.renderStyle = function (styleOrId, priorityOrStyle, priority) {
            if (typeof styleOrId === 'string') {
                return this._createStyleContent2(priorityOrStyle, styleOrId, priority, exports.TypeStyle.LylStyle);
            }
            return this._createStyleContent2(styleOrId, null, priority, exports.TypeStyle.LylStyle);
        };
        /**
         * Add a new dynamic style, use only within @Input()
         * @param id Unique id
         * @param style Styles
         * @param el Element
         * @param instance The instance of this, this replaces the existing style with a new one when it changes
         * @param parentStyle
         */
        LyTheme2.prototype.addStyle = function (id, style, el, instance, priority, parentStyle) {
            var newClass = this._createStyleContent2(style, id, priority, exports.TypeStyle.OnlyOne, false, parentStyle);
            if (newClass === instance) {
                return newClass;
            }
            if (el) {
                if (instance) {
                    el.classList.remove(instance);
                }
                el.classList.add(newClass);
            }
            return newClass;
        };
        /**
         * Create basic style
         * @param style Styles.
         * Note: Use only with immutable variable.
         * @param priority Priority of style
         * @param parentStyle
         */
        LyTheme2.prototype.style = function (style, priority, parentStyle) {
            return this._createStyleContent2(style, null, priority, exports.TypeStyle.OnlyOne, false, parentStyle);
        };
        LyTheme2.prototype.updateClassName = function (element, renderer, newClassname, oldClassname) {
            this.core.updateClassName(element, renderer, newClassname, oldClassname);
        };
        LyTheme2.prototype.updateClass = function (element, renderer, newClass, oldClass) {
            if (newClass === oldClass) {
                return newClass;
            }
            this.updateClassName(element, renderer, newClass, oldClass);
            return newClass;
        };
        LyTheme2.prototype.setTheme = function (nam) {
            if (!Platform.isBrowser) {
                throw new Error("`theme.setTheme('theme-name')` is only available in browser platform");
            }
            if (nam !== this.config.name) {
                var theme = this.themeMap.get(this.initialTheme);
                if (theme == null) {
                    throw new Error("Theme " + nam + " not found in themeMap");
                }
                theme.change = nam;
                this.config = this.core.get(nam);
                this._updateAllStyles();
            }
        };
        /** Toggle right-to-left/left-to-right */
        LyTheme2.prototype.toggleDirection = function () {
            var current = this.config.direction;
            this.config.direction = current === exports.Dir.ltr ? exports.Dir.rtl : exports.Dir.ltr;
            this._updateAllStyles();
            this._directionChanged.next();
        };
        LyTheme2.prototype._updateAllStyles = function () {
            var _this = this;
            this.elements.forEach(function (_, key) {
                var styleData = _STYLE_MAP.get(key);
                if (styleData.requireUpdate) {
                    _this._createStyleContent2(styleData.styles, styleData.id, styleData.priority, styleData.type, true, styleData.parentStyle);
                }
            });
        };
        /**
         * Create a simple style
         * return className
         * @param id id of style
         * @param css style object or string
         * @param priority style priority(default: 0)
         */
        LyTheme2.prototype.addSimpleStyle = function (id, css, priority, parentStyle) {
            return this._createStyleContent2(css, id, priority, exports.TypeStyle.OnlyOne, false, parentStyle);
        };
        /**
         * Add new add a new style sheet
         * @param styles styles
         * @param priority priority for style
         */
        LyTheme2.prototype.addStyleSheet = function (styles, priority) {
            return this._createStyleContent2(styles, null, priority, exports.TypeStyle.Multiple);
        };
        /**
         * Check if a style exist
         * @param stylesOrId Style or Id of a style
         */
        LyTheme2.prototype.existStyle = function (stylesOrId) {
            if (_STYLE_MAP.has(stylesOrId)) {
                var styleMap = _STYLE_MAP.get(stylesOrId);
                return !!(styleMap.classes || styleMap[this.initialTheme]);
            }
            return false;
        };
        LyTheme2.prototype.selectorsOf = function (styles) {
            var themeName = this.initialTheme;
            if (!_STYLE_MAP.has(styles)) {
                _STYLE_MAP.set(styles, {
                    isNewStyle: true,
                    styles: styles,
                    type: exports.TypeStyle.Multiple,
                    css: {},
                    id: null
                });
            }
            var styleMap = _STYLE_MAP.get(styles);
            var themeNameForSelectors = getThemeNameForSelectors(themeName);
            var classesMap = styleMap[themeNameForSelectors] || (styleMap[themeNameForSelectors] = {});
            return classesMap;
        };
        LyTheme2.prototype.getClass = function (styles) {
            var themeName = this.initialTheme;
            var styleMap = _STYLE_MAP.get(styles);
            return styleMap.classes || styleMap[themeName];
        };
        /**
         * For internal use only
         * @docs-private
         */
        LyTheme2.prototype._createStyleContent2 = function (styles, id, priority, type, forChangeTheme, parentStyle) {
            var newId = id || styles;
            if (!_STYLE_MAP.has(newId)) {
                _STYLE_MAP.set(newId, {
                    isNewStyle: true,
                    priority: priority,
                    styles: styles,
                    type: type,
                    css: {},
                    id: id,
                    parentStyle: parentStyle
                });
            }
            var styleMap = _STYLE_MAP.get(newId);
            var themeName = this.initialTheme;
            var isCreated = styleMap.isNewStyle || !(styleMap.classes || styleMap[themeName]);
            if (isCreated || forChangeTheme) {
                styleMap.isNewStyle = false;
                // create new style for new theme
                var css = void 0;
                var themeMap = this.themeMap.get(this.initialTheme);
                var config = this.core.get(themeMap.change || themeName);
                if (typeof styles === 'function') {
                    styleMap.requireUpdate = true;
                    css = type === exports.TypeStyle.LylStyle
                        ? createLylStyle(styleMap, styles(config, this), themeName)
                        : groupStyleToString(styleMap, styles(config, this), themeName, id, type, config);
                    if (!forChangeTheme) {
                        styleMap.css[themeName] = css;
                    }
                }
                else {
                    /** create a new id for style that does not <-<require>-> changes */
                    css = groupStyleToString(styleMap, styles, themeName, newId, type, config);
                    styleMap.css = css;
                }
                if (!this.elements.has(newId)) {
                    var newEl = this._createElementStyle(css);
                    if (styleMap.requireUpdate) {
                        // This is required for when a theme changes
                        this.elements.set(newId, newEl);
                    }
                    else if (this.isDevOrServer) {
                        // in dev mode or server it is not necessary
                        // since the styles will not change
                        this.stylesInDocument.styleElementGlobalMap.set(newId, newEl);
                    }
                    this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), newEl);
                }
                if (forChangeTheme) {
                    var el = this.elements.get(newId);
                    el.innerText = css;
                }
            }
            else if (this.isDevOrServer) {
                /**
                 * append child style if not exist in dom
                 * for ssr or hmr
                 */
                if (!this.elements.has(newId)) {
                    var _css = styleMap.css[themeName] || styleMap.css;
                    var map = this.stylesInDocument.styleElementGlobalMap;
                    if (styleMap.requireUpdate) {
                        this.elements.set(newId, this._createElementStyle(_css));
                        this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), this.elements.get(newId));
                    }
                    else if (!map.has(newId)) {
                        map.set(newId, this._createElementStyle(_css));
                        this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), map.get(newId));
                    }
                }
            }
            return styleMap.classes || styleMap[themeName];
        };
        LyTheme2.prototype._createStyleContainer = function (priority) {
            priority = priority || 0;
            var styleContainers = this.stylesInDocument.styleContainers;
            if (!styleContainers.has(priority)) {
                var el = this.core.renderer.createElement("ly-s-c");
                if (core.isDevMode()) {
                    this.core.renderer.setAttribute(el, 'priority', "" + priority);
                }
                styleContainers.set(priority, el);
                if (styleContainers.size === 0) {
                    this.core.renderer.insertBefore(this._document.body, el, this._document.body.firstChild);
                    return el;
                }
            }
            else {
                return styleContainers.get(priority);
            }
            var refChild = this.findNode(priority);
            this.core.renderer.insertBefore(this._document.body, styleContainers.get(priority), refChild);
            return styleContainers.get(priority);
        };
        LyTheme2.prototype.findNode = function (index) {
            var styleContainers = this.stylesInDocument.styleContainers;
            var keys = (Array.from(styleContainers.keys())).sort();
            var key = keys.find(function (_) { return index < _; });
            return (key !== undefined && styleContainers.get(key)) || this.core.firstElement;
        };
        LyTheme2.prototype._createElementStyle = function (css) {
            var styleElement = this.core.renderer.createElement('style');
            var styleText = this.core.renderer.createText(css);
            this.core.renderer.appendChild(styleElement, styleText);
            return styleElement;
        };
        LyTheme2.prototype.requestAnimationFrame = function (fn) {
            if (typeof requestAnimationFrame === 'function') {
                this._ngZone.runOutsideAngular(function () {
                    requestAnimationFrame(function () {
                        fn();
                    });
                });
            }
            else {
                fn();
            }
        };
        LyTheme2.ctorParameters = function () { return [
            { type: StylesInDocument },
            { type: CoreTheme },
            { type: undefined, decorators: [{ type: core.Inject, args: [LY_THEME_NAME,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [LY_THEME,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [LY_THEME_GLOBAL_VARIABLES,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.NgZone }
        ]; };
        LyTheme2 = __decorate([
            core.Injectable(),
            __param(2, core.Inject(LY_THEME_NAME)),
            __param(3, core.Optional()), __param(3, core.Inject(LY_THEME)),
            __param(4, core.Optional()), __param(4, core.Inject(LY_THEME_GLOBAL_VARIABLES)),
            __param(5, core.Inject(common.DOCUMENT))
        ], LyTheme2);
        return LyTheme2;
    }());
    function createLylStyle(styleMap, styles, themeName) {
        // const className = styleMap.requireUpdate
        // ? styleMap[themeName] || (styleMap[themeName] = createNextClassId())
        // : styleMap.classes
        //   ? styleMap.classes
        //   : styleMap.classes = createNextClassId();
        // use current class or set new
        var className;
        className = styleMap[themeName]
            || (styleMap[themeName] = core.isDevMode()
                ? styleMap.id
                    ? toValidClassName(styleMap.id) + "-" + createNextClassId()
                    : (styleMap.styles.name || 'ii') + "-" + createNextClassId()
                : createNextClassId());
        return styles("." + className);
    }
    function groupStyleToString(styleMap, styles, themeName, id, typeStyle, themeVariables) {
        // for styles type string
        if (typeStyle === exports.TypeStyle.OnlyOne) {
            // use current class or set new
            var className = styleMap.requireUpdate
                ? styleMap[themeName] || (styleMap[themeName] = createNextClassId())
                : styleMap.classes
                    ? styleMap.classes
                    : styleMap.classes = createNextClassId();
            var rules = void 0;
            if (typeof styles === 'string') {
                rules = "." + className + "{" + styles + "}";
            }
            else {
                rules = styleToString(id, null, styles, themeVariables, className);
            }
            if (styleMap.parentStyle) {
                var styleMapOfParentStyle = _STYLE_MAP.get(styleMap.parentStyle);
                if (!styleMapOfParentStyle) {
                    throw new Error("The parentStyle not exist or is called before being created.");
                }
                return replaceRefs(rules, styleMapOfParentStyle[themeName]);
            }
            return rules;
        }
        // for multiples styles
        var themeNameForSelectors = getThemeNameForSelectors(themeName);
        var classesMap = styleMap[themeName] || (styleMap[themeName] = {});
        var selectorsMap = styleMap[themeNameForSelectors] || (styleMap[themeNameForSelectors] = {});
        var styleGroup = styles;
        var content = '';
        var name = styleGroup.$name ? styleGroup.$name + "-" : '';
        // set priority
        if (styleGroup.$priority != null) {
            styleMap.priority = styleGroup.$priority;
        }
        if (!styleMap.keys) {
            styleMap.keys = Object.keys(styles);
        }
        var keys = styleMap.keys;
        /** This loop creates the classes if necessary */
        for (var index = 0; index < keys.length; index++) {
            var key = keys[index];
            var value = styles[key];
            if (key === '$global' || key === '$keyframes') {
                continue;
            }
            if (typeof value === 'function') {
                // lyl
                // set new id if not exist
                if (!(key in classesMap)) {
                    classesMap[key] = core.isDevMode()
                        ? toValidClassName(name + key) + "-" + createUniqueClassID()
                        : createUniqueClassID();
                }
            }
            else if (typeof value === 'object' || value === null) {
                // set new id if not exist
                if (!(key in classesMap)) {
                    classesMap[key] = core.isDevMode() ? toValidClassName("y-" + name + key + "-" + createNextClassId()) : createNextClassId();
                }
            }
            else {
                continue;
            }
            if (!(key in selectorsMap)) {
                selectorsMap[key] = "." + classesMap[key];
            }
        }
        for (var index = 0; index < keys.length; index++) {
            var key = keys[index];
            var value = styles[key];
            if (typeof value === 'function') {
                // lyl
                if (key === '$global') {
                    if (value.length) {
                        content += value("/* Global Style */");
                    }
                    else {
                        content += value()("/* Global Style */");
                    }
                }
                else {
                    var selector = selectorsMap[key];
                    if (value.length) {
                        content += value(selector);
                    }
                    else {
                        var st = value();
                        if (st) {
                            content += st(selector);
                        }
                    }
                }
            }
            else if (key === '$keyframes') {
                content += keyframesToString(name, classesMap, value, themeVariables);
            }
            else if (typeof value === 'object' || value === null) {
                var currentClassName = classesMap[key];
                var style = styleToString(key, styleGroup.$name, value, themeVariables, currentClassName);
                content += style;
            }
        }
        return replaceRefs(content, classesMap);
    }
    function replaceRefs(str, data) {
        return str.replace(REF_REG_EXP, function (_match, token) {
            var className = data[token];
            if (className) {
                return "." + data[token];
            }
            else {
                return data["@\u0433.->-" + token];
            }
        });
    }
    /**
     * {color:'red'} to .className{color: red}
     */
    function styleToString(key, $name, ob, themeVariables, currentKey, parentKey) {
        var content = '';
        var subContent = '';
        var keyAndValue = '';
        var newKey;
        if (parentKey) {
            if (currentKey.indexOf('&') !== -1) {
                newKey = currentKey.replace(/&/g, parentKey);
            }
            else if (currentKey.indexOf('@media') === 0) {
                newKey = "" + currentKey;
            }
            else if (currentKey === '@global' || parentKey === '@global') {
                newKey = currentKey;
            }
            else {
                newKey = parentKey + " " + currentKey;
            }
        }
        else if (key === '@global') {
            newKey = key;
        }
        else {
            newKey = "." + currentKey;
        }
        for (var styleKey in ob) {
            if (ob.hasOwnProperty(styleKey)) {
                var element = ob[styleKey];
                // Omit style with value null
                if (element != null) {
                    // Check if is Object literal
                    if (element.constructor === Object) {
                        subContent += styleToString(key, $name, element, themeVariables, styleKey, newKey);
                    }
                    else {
                        keyAndValue += convertToStyleValue(styleKey, element, themeVariables);
                    }
                }
            }
        }
        if (keyAndValue) {
            if (core.isDevMode()) {
                var lin = '\n\n';
                if ($name) {
                    lin += "/** Style Sheet name: " + $name + " */\n";
                }
                lin += "/** Style Key: " + key + " */\n";
                content += "" + lin;
            }
            if (newKey.indexOf('@media') === 0) {
                content += "" + newKey;
                keyAndValue = parentKey + "{" + keyAndValue + "}";
            }
            else if (parentKey && parentKey === '@global') {
                content += "" + currentKey;
            }
            else {
                content += "" + newKey;
            }
            content += "{" + keyAndValue + "}";
        }
        return content + subContent;
    }
    function convertToStyleValue(key, value, themeVariables) {
        var newStyleKey = converterToCssKeyAndStyleCache(key, themeVariables);
        if (value.constructor === Array) {
            var lin = '';
            for (var index = 0; index < value.length; index++) {
                lin += newStyleKey + ":" + value[index] + ";";
            }
            return lin;
        }
        else {
            return newStyleKey + ":" + value + ";";
        }
    }
    function keyframesToString(styleName, keysMap, keyframes, themeVariables) {
        var content = '';
        for (var name_1 in keyframes) {
            if (keyframes.hasOwnProperty(name_1)) {
                var keyframe = keyframes[name_1];
                // Sometimes the name of a class can be the same as the name of a keyframe,
                // so we add a character to be different
                var newUniqueName = "@\u0433.->-" + name_1;
                // set new id if not exist
                var newName = newUniqueName in keysMap
                    ? keysMap[newUniqueName]
                    : keysMap[newUniqueName] = core.isDevMode() ? toValidClassName("" + styleName + name_1 + "-" + createNextKeyframeId() + "-v") : createNextKeyframeId();
                content += "@keyframes " + newName + "{";
                for (var percent in keyframe) {
                    if (keyframe.hasOwnProperty(percent)) {
                        content += percent + "%{";
                        var styles = keyframe[percent];
                        for (var key in styles) {
                            if (styles.hasOwnProperty(key)) {
                                var val = styles[key];
                                content += convertToStyleValue(key, val, themeVariables);
                            }
                        }
                        content += "}";
                    }
                }
                content += "}";
            }
        }
        return content;
    }
    function converterToCssKeyAndStyle(str, themeVariables) {
        var hyphenCase = toHyphenCase(str);
        if (hyphenCase.indexOf(exports.DirAlias.before) !== -1) {
            return dirCache(str, hyphenCase, themeVariables, exports.DirAlias.before);
        }
        else if (hyphenCase.indexOf(exports.DirAlias.after) !== -1) {
            return dirCache(str, hyphenCase, themeVariables, exports.DirAlias.after);
        }
        else if (hyphenCase.indexOf(exports.YPosition.above) !== -1) {
            return YPositionCache(str, hyphenCase, themeVariables, exports.YPosition.above, TOP);
        }
        else if (hyphenCase.indexOf(exports.YPosition.below) !== -1) {
            return YPositionCache(str, hyphenCase, themeVariables, exports.YPosition.below, BOTTOM);
        }
        return hyphenCase;
    }
    function toValidClassName(str) {
        var s = str.replace(/^[0-9]|[^\w\-]/g, function (_) {
            return "_" + _.charCodeAt(0);
        });
        return s;
    }
    function toHyphenCase(str) {
        return str.replace(/([A-Z])/g, function (g) { return "-" + g[0].toLowerCase(); });
    }
    function converterToCssKeyAndStyleCache(str, themeVariables) {
        var map = STYLE_KEYS_MAP[themeVariables.direction];
        return str in map
            ? map[str]
            : map[str] = converterToCssKeyAndStyle(str, themeVariables);
    }
    var ignoreCSSKEY = {
        'break-after': 'break-after',
        'break-before': 'break-before',
        'page-break-after': 'page-break-after',
        'page-break-before': 'page-break-before'
    };
    var STYLE_KEYS_MAP = {
        rtl: __assign({}, ignoreCSSKEY),
        ltr: __assign({}, ignoreCSSKEY)
    };
    var BOTTOM = 'bottom';
    var TOP = 'top';
    function dirCache(original, val, themeVariables, dirAlias) {
        var map = STYLE_KEYS_MAP[themeVariables.direction];
        // Replace in original, for do not repeat this again
        return map[original] = val.replace(dirAlias, themeVariables.getDirection(dirAlias));
    }
    function YPositionCache(original, val, themeVariables, pos, to) {
        var map = STYLE_KEYS_MAP[themeVariables.direction];
        // Replace in original, for do not repeat this again
        return map[original] = val.replace(pos, to);
    }
    function capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    function createNextClassId() {
        return yClassID.next();
    }
    function createUniqueClassID() {
        return yClassID.next();
    }
    function createNextKeyframeId() {
        return "k" + (nextKeyFrameId++).toString(36);
    }

    var NgTranscludeDirective = /** @class */ (function () {
        function NgTranscludeDirective(_viewRef) {
            this._viewRef = _viewRef;
        }
        Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
            set: function (templateRef) {
                if (templateRef) {
                    this._ngTransclude = templateRef;
                    this._viewRef.createEmbeddedView(templateRef);
                }
                else {
                    this._ngTransclude = null;
                    this._viewRef.clear();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgTranscludeDirective.prototype, "getNgTransclude", {
            get: function () {
                return this._ngTransclude;
            },
            enumerable: true,
            configurable: true
        });
        NgTranscludeDirective.prototype.ngOnDestroy = function () {
            this._viewRef.remove();
        };
        NgTranscludeDirective.ctorParameters = function () { return [
            { type: core.ViewContainerRef }
        ]; };
        __decorate([
            core.Input()
        ], NgTranscludeDirective.prototype, "ngTransclude", null);
        NgTranscludeDirective = __decorate([
            core.Directive({
                selector: '[ngTransclude]'
            })
        ], NgTranscludeDirective);
        return NgTranscludeDirective;
    }());
    var NgTranscludeModule = /** @class */ (function () {
        function NgTranscludeModule() {
        }
        NgTranscludeModule = __decorate([
            core.NgModule({
                exports: [NgTranscludeDirective],
                declarations: [NgTranscludeDirective]
            })
        ], NgTranscludeModule);
        return NgTranscludeModule;
    }());
    /**
     * @ignore
     */
    function getNativeElement(element) {
        return element instanceof core.ElementRef ? element.nativeElement : element;
    }

    var DEFAULT_VALUE = '';
    var STYLE_PRIORITY = -1;
    function mixinStyleUpdater(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            class_1.prototype.setAutoContrast = function () {
                this._autoContrast = true;
            };
            class_1.prototype.updateStyle = function (element) {
                var __bg = this._superHyperInternalPropertyBg;
                var __color = this._superHyperInternalPropertyColor === 'auto'
                    ? ''
                    : this._superHyperInternalPropertyColor;
                var __raised = this._superHyperInternalPropertyRaised;
                var __elevation = this._superHyperInternalPropertyElevation;
                var __disabled = this._superHyperInternalPropertyDisabled;
                var __outlined = this._superHyperInternalPropertyOutlined;
                var __shadowColor = this._superHyperInternalPropertyShadowColor;
                var __isContrast = this._autoContrast || this._superHyperInternalPropertyColor === 'auto';
                var el = getNativeElement(element);
                var newKey = "c--" + (__bg || DEFAULT_VALUE) + "_" + (__color || DEFAULT_VALUE) + "_" + (__raised || DEFAULT_VALUE) + "_" + (__elevation || DEFAULT_VALUE) + "_" + (__disabled || DEFAULT_VALUE) + "_" + (__outlined || DEFAULT_VALUE) + "_" + (__shadowColor || DEFAULT_VALUE) + "_" + (__isContrast || DEFAULT_VALUE);
                var newClass = this._theme.renderStyle(newKey, function (theme) {
                    var sColor;
                    var sBackground;
                    var sBorder;
                    var sPointerEvents;
                    var sBoxShadow;
                    var sBoxShadowActive;
                    if (__outlined) {
                        sBorder = '1px solid currentColor';
                    }
                    if (__disabled) {
                        sColor = theme.disabled.contrast;
                        sPointerEvents = 'none';
                        if (__bg) {
                            sBackground = theme.disabled.default;
                        }
                    }
                    else {
                        if (__bg) {
                            sBackground = colorOf(theme, __bg);
                            if (__isContrast && !__color) {
                                sColor = theme.colorOf(__bg + ":contrast");
                                // Generate auto contrast if is necessary
                                if (sColor.css().includes('invalid')) {
                                    var lum = (__bg instanceof color.Color ? __bg : theme.colorOf(__bg)).luminance();
                                    sColor = lum < 0.5 ? theme.text.light : theme.text.dark;
                                }
                            }
                        }
                        if (!sColor && __color) {
                            sColor = colorOf(theme, __color);
                        }
                        if (__raised || (__elevation != null)) {
                            if (!__bg) {
                                sBackground = theme.background.primary.default;
                            }
                            var backgroundColorCss = sBackground !== __bg && colorOf(theme, __bg || 'background:primary', 'shadow');
                            var shadowColor = (__shadowColor && colorOf(theme, __shadowColor)) || backgroundColorCss || sBackground || sColor || theme.shadow;
                            if (__elevation != null) {
                                sBoxShadow = shadowBuilder(__elevation, shadowColor);
                            }
                            else {
                                sBoxShadow = shadowBuilder(3, shadowColor);
                                sBoxShadowActive = shadowBuilder(8, shadowColor);
                            }
                        }
                    }
                    return function (className) { return className + "{" + (sColor ? 'color:' + sColor : '') + ";" + (sBackground ? 'background:' + sBackground : '') + ";" + (sBorder ? 'border:' + sBorder : '') + ";" + (sPointerEvents ? 'pointer-events:' + sPointerEvents : '') + ";" + (sBoxShadow ? 'box-shadow:' + sBoxShadow : '') + ";}" + className + ":active{" + (sBoxShadowActive ? 'box-shadow:' + sBoxShadowActive : '') + ";}"; };
                }, STYLE_PRIORITY);
                el.classList.remove(this._classNameAnonymous);
                el.classList.add(newClass);
                this._classNameAnonymous = newClass;
            };
            return class_1;
        }(base));
    }
    function colorOf(theme, color$1, optional) {
        return color$1 instanceof color.Color ? color$1 : theme.colorOf(color$1, optional);
    }

    function toBoolean(value) {
        return value != null && "" + value !== 'false';
    }

    var RippleRef = /** @class */ (function () {
        function RippleRef() {
            this.state = true;
            this.timestamp = -Date.now();
            this.container = document.createElement('span');
        }
        RippleRef.prototype.end = function () {
            this.state = false;
            this.timestamp += Date.now();
        };
        return RippleRef;
    }());
    var Ripple = /** @class */ (function () {
        function Ripple(_themeVariables, _ngZone, classes, _containerElement, _triggerElement) {
            this._themeVariables = _themeVariables;
            this._ngZone = _ngZone;
            this.classes = classes;
            this._containerElement = _containerElement;
            this._triggerElement = _triggerElement;
            this._eventHandlers = new Map();
            this.config = {};
            this._transitionDuration = this._themeVariables.ripple.duration;
            this._eventOptions = { passive: true };
            if (Platform.isBrowser) {
                if (typeof PointerEvent === 'function' && typeof TouchEvent === 'function') {
                    this._eventHandlers.set('pointerdown', this.onPointerDown.bind(this));
                }
                else {
                    this._eventHandlers.set('mousedown', this.onPointerDown.bind(this));
                }
                this._eventHandlers.set('touchend', this.onPointerLeave.bind(this));
                this._eventHandlers.set('touchcancel', this.onPointerLeave.bind(this));
                this._eventHandlers.set('mouseup', this.onPointerLeave.bind(this));
                this._eventHandlers.set('mouseleave', this.onPointerLeave.bind(this));
                if (!_triggerElement) {
                    _triggerElement = _containerElement;
                }
                this.setTriggerElement(_triggerElement);
            }
        }
        Ripple.prototype.setConfig = function (config) {
            this.config = config;
        };
        Object.defineProperty(Ripple.prototype, "_rectContainer", {
            get: function () {
                return this._containerElement.getBoundingClientRect();
            },
            enumerable: true,
            configurable: true
        });
        Ripple.prototype.setTriggerElement = function (element) {
            var _this = this;
            if (element) {
                this._ngZone.runOutsideAngular(function () {
                    _this._eventHandlers.forEach(function (fn, type) { return element.addEventListener(type, fn, _this._eventOptions); });
                });
            }
            this._triggerElement = element;
        };
        Ripple.prototype.createRipple = function (styles) {
            this._rippleRef = new RippleRef();
            var container = this._rippleRef.container;
            container.className = this.classes.rippleContainer;
            for (var key in styles) {
                if (styles.hasOwnProperty(key)) {
                    var element = styles[key];
                    if (typeof element === 'number') {
                        container.style[key] = element + "px";
                    }
                    else {
                        container.style[key] = element;
                    }
                }
            }
            this._containerElement.appendChild(container);
            window.getComputedStyle(container).getPropertyValue('opacity');
            container.style.transform = "scale(1)";
        };
        Ripple.prototype.onPointerDown = function (event) {
            if (!this.config.disabled) {
                /**Destroy previous ripple if exist */
                this.endRipple();
                this.startRipple(event, this.config);
            }
        };
        Ripple.prototype.onPointerLeave = function (_event) {
            if (!this.config.disabled) {
                this.endRipple();
            }
        };
        Ripple.prototype.startRipple = function (event, rippleConfig) {
            var containerRect = this._rectContainer;
            var x = event.clientX, y = event.clientY;
            if (rippleConfig.centered) {
                x = containerRect.left + containerRect.width / 2;
                y = containerRect.top + containerRect.height / 2;
            }
            var left = x - containerRect.left;
            var top = y - containerRect.top;
            var radius = rippleConfig.radius === 'containerSize' ? maxSize(containerRect) / 2 : rippleConfig.radius || rippleRadius(x, y, containerRect);
            if (rippleConfig.percentageToIncrease) {
                radius += radius * rippleConfig.percentageToIncrease / 100;
            }
            this.createRipple({
                left: left - radius,
                top: top - radius,
                width: radius * 2,
                height: radius * 2,
                transitionDuration: this._transitionDuration + "ms"
            });
        };
        Ripple.prototype.runTimeoutOutsideZone = function (fn, delay) {
            if (delay === void 0) { delay = 0; }
            this._ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
        };
        Ripple.prototype.endRipple = function () {
            var _this = this;
            var rippleRef = this._rippleRef;
            var duration = this._transitionDuration;
            if (rippleRef && rippleRef.state) {
                rippleRef.end();
                this.runTimeoutOutsideZone(function () {
                    rippleRef.container.style.opacity = '0';
                    rippleRef.container.style.transitionDuration = _this._transitionDuration / 5 + "ms";
                    // }, rippleRef.timestamp < duration ? duration : 0);
                    // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) : 0);
                }, rippleRef.timestamp < duration ? duration * .15 : 0);
                this.runTimeoutOutsideZone(function () {
                    rippleRef.container.parentNode.removeChild(rippleRef.container);
                    // }, rippleRef.timestamp < duration ? duration * 2 : duration);
                    // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) * 2 : duration);
                }, rippleRef.timestamp < duration ? duration * 2 : duration);
                this._rippleRef = undefined;
            }
        };
        Ripple.prototype.removeEvents = function () {
            var _this = this;
            if (this._triggerElement) {
                this._eventHandlers.forEach(function (fn, type) {
                    _this._triggerElement.removeEventListener(type, fn, _this._eventOptions);
                });
            }
        };
        return Ripple;
    }());
    function rippleRadius(x, y, rect) {
        var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
        var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
        return Math.sqrt(distX * distX + distY * distY);
    }
    function maxSize(rect) {
        return Math.max(rect.width, rect.height);
    }

    var ɵ0$1 = function (className) { return className + "{position:absolute;top:0;bottom:0;left:0;right:0;}"; }, ɵ1$1 = function (className) { return className + "{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none;}"; }, ɵ2$1 = function (className) { return className + "{-webkit-tap-highlight-color:transparent;background-color:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;margin:0;outline:none;box-sizing:border-box;position:relative;text-decoration-line:none;-webkit-text-decoration-line:none;}" + className + "::-moz-focus-inner:{border:0;}"; };
    var LY_COMMON_STYLES = {
        fill: ɵ0$1,
        visuallyHidden: ɵ1$1,
        button: ɵ2$1
    };
    var LY_COMMON_STYLES_DEPRECATED = {
        fill: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            width: '1px',
            outline: 0,
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none'
        },
        button: {
            '-webkit-tap-highlight-color': 'transparent',
            backgroundColor: "transparent",
            border: 0,
            '-moz-appearance': 'none',
            '-webkit-appearance': 'none',
            margin: 0,
            outline: 'none',
            boxSizing: 'border-box',
            position: 'relative',
            textDecorationLine: 'none',
            '-webkit-text-decoration-line': 'none',
            '&::-moz-focus-inner': {
                border: 0
            }
        }
    };
    var LyCoreStyles = /** @class */ (function () {
        function LyCoreStyles(theme) {
            this.theme = theme;
            this.classes = this.theme.addStyleSheet(LY_COMMON_STYLES_DEPRECATED);
        }
        LyCoreStyles.ctorParameters = function () { return [
            { type: LyTheme2 }
        ]; };
        LyCoreStyles.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(core.ɵɵinject(LyTheme2)); }, token: LyCoreStyles, providedIn: "root" });
        LyCoreStyles = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], LyCoreStyles);
        return LyCoreStyles;
    }());

    var styles = function (theme) { return ({
        rippleContainer: {
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: 'currentColor',
            opacity: '.2',
            borderRadius: '50%',
            transform: 'scale(0)',
            transition: "opacity " + theme.ripple.transition.opacity + ",transform " + theme.ripple.transition.transform,
            pointerEvents: 'none'
        },
        container: __assign({}, LY_COMMON_STYLES_DEPRECATED.fill, { overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' })
    }); };
    var LyRippleService = /** @class */ (function () {
        function LyRippleService(theme) {
            this.theme = theme;
            this.classes = this.theme.addStyleSheet(styles);
        }
        LyRippleService.ctorParameters = function () { return [
            { type: LyTheme2 }
        ]; };
        LyRippleService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(core.ɵɵinject(LyTheme2)); }, token: LyRippleService, providedIn: "root" });
        LyRippleService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], LyRippleService);
        return LyRippleService;
    }());

    function mixinDisableRipple(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._rippleConfig = {};
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disableRipple", {
                get: function () { return this._disableRipple; },
                set: function (val) {
                    var _this = this;
                    if (Platform.isBrowser && val !== this._disableRipple) {
                        var newVal = this._disableRipple = toBoolean(val);
                        // remove previous ripple if exist
                        this._removeRippleEvents();
                        if (!newVal) {
                            // add ripple
                            Promise.resolve(null).then(function () {
                                var triggerElement = _this._triggerElement.nativeElement;
                                var rippleContainer = (_this._rippleContainer && _this._rippleContainer.nativeElement) || triggerElement;
                                _this._ripple = new Ripple(_this._theme.variables, _this._ngZone, _this._theme.addStyleSheet(styles), rippleContainer, triggerElement);
                                _this._ripple.setConfig(_this._rippleConfig);
                            });
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            class_1.prototype._removeRippleEvents = function () {
                if (Platform.isBrowser) {
                    if (this._ripple) {
                        this._ripple.removeEvents();
                        this._ripple = null;
                    }
                }
            };
            return class_1;
        }(base));
    }

    function mixinDisabled(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._superHyperInternalPropertyDisabled = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disabled", {
                get: function () { return this._superHyperInternalPropertyDisabled; },
                set: function (value) { this._superHyperInternalPropertyDisabled = toBoolean(value); },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    function mixinColor(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "color", {
                get: function () { return this._superHyperInternalPropertyColor; },
                set: function (val) {
                    var defaultColor = val;
                    if (defaultColor !== this.color) {
                        this._superHyperInternalPropertyColor = defaultColor;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    function mixinBg(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "bg", {
                get: function () { return this._superHyperInternalPropertyBg; },
                set: function (val) {
                    var defaultColor = val;
                    if (defaultColor !== this.bg) {
                        this._superHyperInternalPropertyBg = defaultColor;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    function mixinRaised(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "raised", {
                get: function () { return this._superHyperInternalPropertyRaised; },
                set: function (value) { this._superHyperInternalPropertyRaised = toBoolean(value); },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    function mixinOutlined(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "outlined", {
                get: function () { return this._superHyperInternalPropertyOutlined; },
                set: function (value) { this._superHyperInternalPropertyOutlined = toBoolean(value); },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    function mixinElevation(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "elevation", {
                get: function () { return this._superHyperInternalPropertyElevation; },
                set: function (value) { this._superHyperInternalPropertyElevation = value; },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    function mixinShadowColor(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "shadowColor", {
                get: function () { return this._superHyperInternalPropertyShadowColor; },
                set: function (value) { this._superHyperInternalPropertyShadowColor = value; },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    var DEFAULT_TAB_INDEX = 0;
    function mixinTabIndex(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._tabIndex = DEFAULT_TAB_INDEX;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "tabIndex", {
                get: function () {
                    return this.disabled ? -1 : this._tabIndex;
                },
                set: function (value) {
                    this._tabIndex = value != null ? value : DEFAULT_TAB_INDEX;
                },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    var DEFAULT_BG = 'paper';
    var LyPaperBase = /** @class */ (function () {
        function LyPaperBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyPaperBase;
    }());
    var LyPaperMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyPaperBase))))))));
    var LyPaper = /** @class */ (function (_super) {
        __extends(LyPaper, _super);
        function LyPaper(theme, ngZone, _el, _renderer) {
            var _this = _super.call(this, theme, ngZone) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            _this.setAutoContrast();
            _this._triggerElement = _this._el;
            _this._rippleContainer = _this._el;
            return _this;
        }
        Object.defineProperty(LyPaper.prototype, "hasText", {
            get: function () {
                return this._hasText;
            },
            set: function (val) {
                this._hasText = toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        LyPaper.prototype.ngOnChanges = function () {
            this.updateStyle(this._el);
        };
        LyPaper.prototype.ngOnInit = function () {
            if (!this.bg && !this.hasText) {
                this.bg = DEFAULT_BG;
                this.updateStyle(this._el);
                this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyPaper', ({
                    display: 'block'
                })));
            }
        };
        LyPaper.prototype.ngOnDestroy = function () {
            this._removeRippleEvents();
        };
        LyPaper.ctorParameters = function () { return [
            { type: LyTheme2 },
            { type: core.NgZone },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input('ly-text')
        ], LyPaper.prototype, "hasText", null);
        LyPaper = __decorate([
            core.Directive({
                selector: "ly-paper, [ly-paper], [ly-text]",
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor',
                    'disableRipple'
                ]
            })
        ], LyPaper);
        return LyPaper;
    }(LyPaperMixinBase));

    var LyWithClass = /** @class */ (function () {
        function LyWithClass(el) {
            this.el = el;
        }
        Object.defineProperty(LyWithClass.prototype, "withClass", {
            set: function (val) {
                if (!val) {
                    throw new Error("'" + val + "' is not valid className");
                }
                this.el.nativeElement.classList.add(val);
            },
            enumerable: true,
            configurable: true
        });
        LyWithClass.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], LyWithClass.prototype, "withClass", null);
        LyWithClass = __decorate([
            core.Directive({
                selector: '[withClass]'
            })
        ], LyWithClass);
        return LyWithClass;
    }());

    var __CLASS_NAME__ = '__CLASS_NAME__';
    var StyleRenderer = /** @class */ (function () {
        function StyleRenderer(_theme, _el, _renderer) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._set = new Set();
            if (_el) {
                this._nEl = _el.nativeElement;
                this._set = new Set();
            }
        }
        /**
         * Build multiple styles and render them in the DOM.
         * @param styles Styles
         * @param applyRootClass If `applyToRoot` is `true` and the root property is defined,
         * it will automatically be added to the component.
         *
         * e.g.
         *
         * ```ts
         * const STYLES = () => ({
         *   root: lyl `{...}` // this class will be added to the root component
         * })
         * ```
         *
         */
        StyleRenderer.prototype.renderSheet = function (styles, applyRootClass) {
            var classes = this._theme._createStyleContent2(styles, null, null, exports.TypeStyle.Multiple);
            if (applyRootClass && classes.root) {
                this.addClass(classes.root);
            }
            return classes;
        };
        /**
         * Render style and apply class name to host Component or Directive,
         * require provide `StyleRenderer` in your Component.
         * e.g.
         * @Component({
         *   ...
         *   providers: [ StyleRenderer ]
         * })
         */
        StyleRenderer.prototype.add = function (id, style, priority, oldClass) {
            var args = arguments;
            /** Class name or keyframe name */
            var className;
            var len = args.length;
            // clean
            if (len === 4 && args[3] == null) {
                len -= 1;
            }
            if (len === 3 && args[2] == null) {
                len -= 1;
            }
            if (len === 1) {
                className = this._theme._createStyleContent2(id, null, null, exports.TypeStyle.LylStyle);
            }
            else if (len === 2) {
                if (typeof id === 'string') {
                    className = this._theme._createStyleContent2(style, id, null, exports.TypeStyle.LylStyle);
                }
                else if (typeof style === 'number') {
                    className = this._theme._createStyleContent2(id, null, style, exports.TypeStyle.LylStyle);
                }
                else {
                    className = this._theme._createStyleContent2(id, null, null, exports.TypeStyle.LylStyle);
                    oldClass = style;
                }
            }
            else if (len === 3) {
                if (typeof id === 'string') {
                    if (typeof priority === 'number') {
                        // (id, style, priority)
                        className = this._theme._createStyleContent2(style, id, priority, exports.TypeStyle.LylStyle);
                    }
                    else {
                        // (id, style, oldClass)
                        className = this._theme._createStyleContent2(style, id, null, exports.TypeStyle.LylStyle);
                        oldClass = priority;
                    }
                }
                else {
                    // (style, priority, oldClass)
                    className = this._theme._createStyleContent2(id, null, style, exports.TypeStyle.LylStyle);
                    oldClass = priority;
                }
            }
            else if (len === 4) {
                className = this._theme._createStyleContent2(style, id, priority, exports.TypeStyle.LylStyle);
            }
            if (this._nEl) {
                return this.updateClass(className, oldClass);
            }
            throw new Error("StyleRenderer is required on the Component!\n"
                + "Add provider for StyleRenderer in Component or Directive:\n\n"
                + "e.g:\n\n"
                + "@Component({\n"
                + "  providers: [ StyleRenderer ]\n"
                + "})\n");
        };
        /**
         * Only render style and return class name.
         */
        StyleRenderer.prototype.render = function (styleOrId, priorityOrStyle, priority) {
            if (typeof styleOrId === 'string') {
                return this._theme._createStyleContent2(priorityOrStyle, styleOrId, priority, exports.TypeStyle.LylStyle);
            }
            return this._theme._createStyleContent2(styleOrId, null, priority, exports.TypeStyle.LylStyle);
        };
        StyleRenderer.prototype.addClass = function (className) {
            if (!this._set.has(className)) {
                this._set.add(className);
                this._renderer.addClass(this._nEl, className);
            }
        };
        StyleRenderer.prototype.removeClass = function (className) {
            if (className && this._set.has(className)) {
                this._set.delete(className);
                this._renderer.removeClass(this._nEl, className);
            }
        };
        StyleRenderer.prototype.toggleClass = function (className, enabled) {
            if (enabled) {
                this.addClass(className);
            }
            else {
                this.removeClass(className);
            }
        };
        StyleRenderer.prototype.updateClass = function (newClassName, oldClassName) {
            this.removeClass(oldClassName);
            this.addClass(newClassName);
            return newClassName;
        };
        StyleRenderer.ctorParameters = function () { return [
            { type: LyTheme2 },
            { type: core.ElementRef, decorators: [{ type: core.Optional }] },
            { type: core.Renderer2, decorators: [{ type: core.Optional }] }
        ]; };
        StyleRenderer = __decorate([
            core.Injectable(),
            __param(1, core.Optional()),
            __param(2, core.Optional())
        ], StyleRenderer);
        return StyleRenderer;
    }());
    /**
     * Parameter decorator to be used for create Dynamic style together with `@Input`
     * @param style style
     * @param priority priority of style, default: 0
     * @decorator
     */
    function Style(style, priority) {
        return function (target, propertyKey, descriptor) {
            var index = "" + __CLASS_NAME__ + propertyKey;
            if (descriptor) {
                var set_1 = descriptor.set;
                descriptor.set = function (val) {
                    var that = this;
                    if (val == null) {
                        that.sRenderer.removeClass(that[index]);
                    }
                    else {
                        that[index] = that.sRenderer.add(getComponentName(that) + "--" + propertyKey + "-" + val, style(val, that), priority || that.$priority || that.constructor.$priority || 0, that[index]);
                    }
                    set_1.call(that, val);
                };
            }
            else {
                Object.defineProperty(target, propertyKey, {
                    configurable: true,
                    enumerable: true,
                    set: function (val) {
                        var that = this;
                        if (val == null) {
                            that.sRenderer.removeClass(that[index]);
                        }
                        else {
                            that["_" + propertyKey] = val;
                            that[index] = that.sRenderer.add(getComponentName(that) + "--" + propertyKey + "-" + val, style(val, that), priority || that.$priority || that.constructor.$priority || 0, that[index]);
                        }
                    },
                    get: function () {
                        return this["_" + propertyKey];
                    }
                });
            }
        };
    }
    function getComponentName(comp) {
        return comp.constructor.и || comp.constructor.name || 'unnamed';
    }

    var STYLE_PRIORITY$1 = -0.5;
    var ɵ0$2 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding:" + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ1$2 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints, after = _a.after;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding-" + after + ":" + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ2$2 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints, before = _a.before;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding-" + before + ":" + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ3 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding-top:" + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ4 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding-bottom:" + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ5 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding:0 " + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ6 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{padding:" + to8Px(val) + " 0;}}"; }); }, true);
    }; }, ɵ7 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin:" + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ8 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints, after = _a.after;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin-" + after + ":" + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ9 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints, before = _a.before;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin-" + before + ":" + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ10 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin-top:" + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ11 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin-bottom:" + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ12 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin:0 " + to8Px(val) + ";}}"; }); }, true);
    }; }, ɵ13 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{margin:" + to8Px(val) + " 0;}}"; }); }, true);
    }; }, ɵ14 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{width:" + transform(val) + ";}}"; }); }, true);
    }; }, ɵ15 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{max-width:" + transform(val) + ";}}"; }); }, true);
    }; }, ɵ16 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{min-width:" + transform(val) + ";}}"; }); }, true);
    }; }, ɵ17 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{height:" + transform(val) + ";}}"; }); }, true);
    }; }, ɵ18 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{max-height:" + transform(val) + ";}}"; }); }, true);
    }; }, ɵ19 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{min-height:" + transform(val) + ";}}"; }); }, true);
    }; }, ɵ20 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{display:" + val + ";}}"; }); }, true);
    }; }, ɵ21 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex:" + val + ";}}"; }); }, true);
    }; }, ɵ22 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-basis:" + val + ";}}"; }); }, true);
    }; }, ɵ23 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-direction:" + val + ";}}"; }); }, true);
    }; }, ɵ24 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-grow:" + val + ";}}"; }); }, true);
    }; }, ɵ25 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-self:" + val + ";}}"; }); }, true);
    }; }, ɵ26 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-shrink:" + val + ";}}"; }); }, true);
    }; }, ɵ27 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{flex-wrap:" + val + ";}}"; }); }, true);
    }; }, ɵ28 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{justify-content:" + val + ";}}"; }); }, true);
    }; }, ɵ29 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{justify-items:" + val + ";}}"; }); }, true);
    }; }, ɵ30 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{justify-self:" + val + ";}}"; }); }, true);
    }; }, ɵ31 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{align-content:" + val + ";}}"; }); }, true);
    }; }, ɵ32 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{align-items:" + val + ";}}"; }); }, true);
    }; }, ɵ33 = function (value) { return function (_a) {
        var breakpoints = _a.breakpoints;
        return eachMedia(value, function (val, media) { return (function (className) { return "@media " + ((media && breakpoints[media]) || 'all') + "{" + className + "{order:" + val + ";}}"; }); }, true);
    }; };
    /**
     * @dynamic
     * Spacing
     * [p], [pf], [pe], [pt], [pb], [px], [py],
     * [m], [mf], [me], [mt], [mb], [mx], [my],
     * Sizing
     * [size],
     * [width], [maxWidth], [minWidth],
     * [height], [maxHeight], [minHeight],
     * Others
     * [lyStyle]
     * [width]
     */
    var LyStyle = /** @class */ (function () {
        function LyStyle(sRenderer) {
            this.sRenderer = sRenderer;
        }
        LyStyle_1 = LyStyle;
        Object.defineProperty(LyStyle.prototype, "size", {
            set: function (value) {
                this.width = value;
                this.height = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyStyle.prototype, "lyStyle", {
            get: function () {
                return this._lyStyle;
            },
            set: function (val) {
                if (typeof val === 'function') {
                    this[0xa] = this.sRenderer.add(val, this[0xa]);
                }
                else if (val != null) {
                    this[0xa] = this.sRenderer.add(LyStyle_1.и + "--style-" + val, function (_a) {
                        var breakpoints = _a.breakpoints;
                        return eachMedia(val, function (v, media) { return (function (className) { return "@media " + ((media && (breakpoints[media] || media)) || 'all') + "{" + className + "{" + v + ";}}"; }); }, true);
                    }, STYLE_PRIORITY$1, this[0xa]);
                }
                else {
                    this.sRenderer.removeClass(this[0xa]);
                }
            },
            enumerable: true,
            configurable: true
        });
        var LyStyle_1;
        /** @docs-private */
        LyStyle.и = 'LyStyle';
        LyStyle.ctorParameters = function () { return [
            { type: StyleRenderer }
        ]; };
        __decorate([
            core.Input(),
            Style(ɵ0$2)
        ], LyStyle.prototype, "p", void 0);
        __decorate([
            core.Input(),
            Style(ɵ1$2)
        ], LyStyle.prototype, "pf", void 0);
        __decorate([
            core.Input(),
            Style(ɵ2$2)
        ], LyStyle.prototype, "pe", void 0);
        __decorate([
            core.Input(),
            Style(ɵ3)
        ], LyStyle.prototype, "pt", void 0);
        __decorate([
            core.Input(),
            Style(ɵ4)
        ], LyStyle.prototype, "pb", void 0);
        __decorate([
            core.Input(),
            Style(ɵ5)
        ], LyStyle.prototype, "px", void 0);
        __decorate([
            core.Input(),
            Style(ɵ6)
        ], LyStyle.prototype, "py", void 0);
        __decorate([
            core.Input(),
            Style(ɵ7)
        ], LyStyle.prototype, "m", void 0);
        __decorate([
            core.Input(),
            Style(ɵ8)
        ], LyStyle.prototype, "mf", void 0);
        __decorate([
            core.Input(),
            Style(ɵ9)
        ], LyStyle.prototype, "me", void 0);
        __decorate([
            core.Input(),
            Style(ɵ10)
        ], LyStyle.prototype, "mt", void 0);
        __decorate([
            core.Input(),
            Style(ɵ11)
        ], LyStyle.prototype, "mb", void 0);
        __decorate([
            core.Input(),
            Style(ɵ12)
        ], LyStyle.prototype, "mx", void 0);
        __decorate([
            core.Input(),
            Style(ɵ13)
        ], LyStyle.prototype, "my", void 0);
        __decorate([
            core.Input(),
            Style(ɵ14)
        ], LyStyle.prototype, "width", void 0);
        __decorate([
            core.Input(),
            Style(ɵ15)
        ], LyStyle.prototype, "maxWidth", void 0);
        __decorate([
            core.Input(),
            Style(ɵ16)
        ], LyStyle.prototype, "minWidth", void 0);
        __decorate([
            core.Input(),
            Style(ɵ17)
        ], LyStyle.prototype, "height", void 0);
        __decorate([
            core.Input(),
            Style(ɵ18)
        ], LyStyle.prototype, "maxHeight", void 0);
        __decorate([
            core.Input(),
            Style(ɵ19)
        ], LyStyle.prototype, "minHeight", void 0);
        __decorate([
            core.Input()
        ], LyStyle.prototype, "size", null);
        __decorate([
            core.Input(),
            Style(ɵ20)
        ], LyStyle.prototype, "display", void 0);
        __decorate([
            core.Input(),
            Style(ɵ21)
        ], LyStyle.prototype, "flex", void 0);
        __decorate([
            core.Input(),
            Style(ɵ22)
        ], LyStyle.prototype, "flexBasis", void 0);
        __decorate([
            core.Input(),
            Style(ɵ23)
        ], LyStyle.prototype, "flexDirection", void 0);
        __decorate([
            core.Input(),
            Style(ɵ24)
        ], LyStyle.prototype, "flexGrow", void 0);
        __decorate([
            core.Input(),
            Style(ɵ25)
        ], LyStyle.prototype, "flexSelf", void 0);
        __decorate([
            core.Input(),
            Style(ɵ26)
        ], LyStyle.prototype, "flexShrink", void 0);
        __decorate([
            core.Input(),
            Style(ɵ27)
        ], LyStyle.prototype, "flexWrap", void 0);
        __decorate([
            core.Input(),
            Style(ɵ28)
        ], LyStyle.prototype, "justifyContent", void 0);
        __decorate([
            core.Input(),
            Style(ɵ29)
        ], LyStyle.prototype, "justifyItems", void 0);
        __decorate([
            core.Input(),
            Style(ɵ30)
        ], LyStyle.prototype, "justifySelf", void 0);
        __decorate([
            core.Input(),
            Style(ɵ31)
        ], LyStyle.prototype, "alignContent", void 0);
        __decorate([
            core.Input(),
            Style(ɵ32)
        ], LyStyle.prototype, "alignItems", void 0);
        __decorate([
            core.Input(),
            Style(ɵ33)
        ], LyStyle.prototype, "order", void 0);
        __decorate([
            core.Input()
        ], LyStyle.prototype, "lyStyle", null);
        LyStyle = LyStyle_1 = __decorate([
            core.Directive({
                selector: "[lyStyle],\n              [p], [pf], [pe], [pt], [pb], [px], [py],\n              [m], [mf], [me], [mt], [mb], [mx], [my],\n              [size],\n              [width], [maxWidth], [minWidth],\n              [height], [maxHeight], [minHeight],\n              [display],\n              [flex],\n              [flexBasis],\n              [flexDirection],\n              [flexGrow],\n              [flexSelf],\n              [flexShrink],\n              [flexWrap],\n              [justifyContent],\n              [justifyItems],\n              [justifySelf],\n              [alignContent],\n              [alignItems],\n              [order]",
                providers: [
                    StyleRenderer
                ]
            })
        ], LyStyle);
        return LyStyle;
    }());
    /**
     * Convert to px if the value is a number, otherwise leave it as is
     * @docs-private
     */
    function to8Px(val) {
        return typeof val === 'number'
            ? val * 8 + "px"
            : val;
    }
    function transform(value) {
        return value <= 1
            ? value * 100 + "%"
            : typeof value === 'string'
                ? value
                : value + "px";
    }

    var LyCommonModule = /** @class */ (function () {
        function LyCommonModule() {
        }
        LyCommonModule = __decorate([
            core.NgModule({
                declarations: [LyStyle, LyWithClass, LyPaper],
                exports: [LyStyle, LyWithClass, LyPaper]
            })
        ], LyCommonModule);
        return LyCommonModule;
    }());

    function defaultEntry(value, defaultValue) {
        return value !== '' && value !== void 0 ? value : defaultValue;
    }

    /**
     * @experimental
     * Element to move, time in ms to animate
     */
    function scrollTo(element, duration) {
        var e = document.documentElement;
        if (e.scrollTop === 0) {
            var t = e.scrollTop;
            ++e.scrollTop;
            e = t + 1 === e.scrollTop-- ? e : document.body;
        }
        scrollToFromTo(e, e.scrollTop, element, duration);
    }
    // Element to move, element or px from, element or px to, time in ms to animate
    function scrollToFromTo(element, from, to, duration) {
        if (duration <= 0) {
            return;
        }
        if (typeof from === 'object') {
            from = from.offsetTop;
        }
        if (typeof to === 'object') {
            to = to.offsetTop;
        }
        createScrollWithAnimation(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
    }
    /**
     * @experimental
     */
    function scrollWithAnimation(element, to, duration, p, motion) {
        var _motion = motion || easeOutCuaic;
        var scrollLeft = element.scrollLeft;
        return createScrollWithAnimation(element, scrollLeft, to, 0, 1 / duration, 20, _motion, p);
    }
    function createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p) {
        var scrollT = p === 'y' ? 'scrollTop' : 'scrollLeft';
        if (t01 < 0 || t01 > 1 || speed <= 0) {
            element[scrollT] = xTo;
            return;
        }
        element[scrollT] = xFrom - (xFrom - xTo) * motion(t01);
        t01 += speed * step;
        setTimeout(function () {
            createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p);
        }, step);
    }
    // function linearTween(t: number) {
    //   return t;
    // }
    // function easeInQuad(t: number) {
    //   return t * t;
    // }
    // function easeOutQuad(t: number) {
    //   return -t * (t - 2);
    // }
    // function easeInOutQuad(t: number) {
    //   t /= 0.5;
    //   if (t < 1) {return t * t / 2; }
    //   t--;
    //   return (t * (t - 2) - 1) / 2;
    // }
    // function easeInCuaic(t: number) {
    //   return t * t * t;
    // }
    function easeOutCuaic(t) {
        t--;
        return t * t * t + 1;
    }
    // function easeInOutCuaic(t: number) {
    //   t /= 0.5;
    //   if (t < 1) {return t * t * t / 2; }
    //   t -= 2;
    //   return (t * t * t + 2) / 2;
    // }
    // function easeInQuart(t: number) {
    //   return t * t * t * t;
    // }
    // function easeOutQuart(t: number) {
    //   t--;
    //   return -(t * t * t * t - 1);
    // }
    // function easeInOutQuart(t: number) {
    //   t /= 0.5;
    //   if (t < 1) {return 0.5 * t * t * t * t; }
    //   t -= 2;
    //   return -(t * t * t * t - 2) / 2;
    // }
    // function easeInQuint(t: number) {
    //   return t * t * t * t * t;
    // }
    // function easeOutQuint(t: number) {
    //   t--;
    //   return t * t * t * t * t + 1;
    // }
    // function easeInOutQuint(t: number) {
    //   t /= 0.5;
    //   if (t < 1) {return t * t * t * t * t / 2; }
    //   t -= 2;
    //   return (t * t * t * t * t + 2) / 2;
    // }
    // function easeInSine(t: number) {
    //   return -Math.cos(t / (Math.PI / 2)) + 1;
    // }
    // function easeOutSine(t: number) {
    //   return Math.sin(t / (Math.PI / 2));
    // }
    // function easeInOutSine(t: number) {
    //   return -(Math.cos(Math.PI * t) - 1) / 2;
    // }
    // function easeInExpo(t: number) {
    //   return Math.pow(2, 10 * (t - 1));
    // }
    // function easeOutExpo(t: number) {
    //   return -Math.pow(2, -10 * t) + 1;
    // }
    // function easeInOutExpo(t: number) {
    //   t /= 0.5;
    //   if (t < 1) {return Math.pow(2, 10 * (t - 1)) / 2; }
    //   t--;
    //   return (-Math.pow(2, -10 * t) + 2) / 2;
    // }
    // function easeInCirc(t: number) {
    //   return -Math.sqrt(1 - t * t) - 1;
    // }
    // function easeOutCirc(t: number) {
    //   t--;
    //   return Math.sqrt(1 - t * t);
    // }
    // function easeInOutCirc(t: number) {
    //   t /= 0.5;
    //   if (t < 1) {return -(Math.sqrt(1 - t * t) - 1) / 2; }
    //   t -= 2;
    //   return (Math.sqrt(1 - t * t) + 1) / 2;
    // }

    function toNumber(val, _default) {
        var num = typeof val === 'number'
            ? val
            : typeof val === 'string' && val.length
                ? +val
                : _default;
        return isNaN(num) ? (_default === void 0 ? 0 : _default) : num;
    }

    function componentDestroyed(component) {
        var modifiedComponent = component;
        if (modifiedComponent.__componentDestroyed$) {
            return modifiedComponent.__componentDestroyed$;
        }
        var oldNgOnDestroy = component.ngOnDestroy;
        var stop$ = new rxjs.ReplaySubject();
        modifiedComponent.ngOnDestroy = function () {
            if (oldNgOnDestroy) {
                oldNgOnDestroy.apply(component);
            }
            stop$.next();
            stop$.complete();
        };
        return modifiedComponent.__componentDestroyed$ = stop$.asObservable();
    }
    function untilComponentDestroyed(component) {
        return function (source) { return source.pipe(operators.takeUntil(componentDestroyed(component))); };
    }

    var LyHostClass = /** @class */ (function () {
        function LyHostClass(_el, _renderer) {
            this._renderer = _renderer;
            this._set = new Set();
            this._nEl = _el.nativeElement;
        }
        LyHostClass.prototype.add = function (className) {
            if (!this._set.has(className)) {
                this._set.add(className);
                this._renderer.addClass(this._nEl, className);
            }
        };
        LyHostClass.prototype.remove = function (className) {
            if (className && this._set.has(className)) {
                this._set.delete(className);
                this._renderer.removeClass(this._nEl, className);
            }
        };
        LyHostClass.prototype.toggle = function (className, enabled) {
            if (enabled) {
                this.add(className);
            }
            else {
                this.remove(className);
            }
        };
        LyHostClass.prototype.update = function (newClassName, oldClassName) {
            this.remove(oldClassName);
            this.add(newClassName);
            return newClassName;
        };
        LyHostClass.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        LyHostClass = __decorate([
            core.Injectable()
        ], LyHostClass);
        return LyHostClass;
    }());


    (function (FocusStatus) {
        /**mouse and/or touch*/
        FocusStatus["DEFAULT"] = "default";
        /** keyboard and/or program*/
        FocusStatus["KEYBOARD"] = "keyboard";
    })(exports.FocusStatus || (exports.FocusStatus = {}));
    var LyFocusState = /** @class */ (function () {
        function LyFocusState(_ngZone) {
            this._ngZone = _ngZone;
            this._elementMap = new Map();
            this._count = 0;
        }
        LyFocusState.prototype.listen = function (element, keyElement) {
            var _this = this;
            if (!Platform.isBrowser) {
                // return null if it is not browser platform
                return null;
            }
            var nativeElement = getNativeElement(element);
            var key = keyElement && getNativeElement(keyElement) || nativeElement;
            if (this._elementMap.has(key)) {
                return this._elementMap.get(key).subject.asObservable();
            }
            var focusState = {
                unlisten: null,
                subject: new rxjs.Subject()
            };
            this._incrementCount();
            var focusListener = function (event) { return _this._on(event, focusState.subject); };
            var blurListener = function (event) { return _this._on(event, focusState.subject); };
            focusState.unlisten = function () {
                nativeElement.removeEventListener('focus', focusListener, true);
                nativeElement.removeEventListener('blur', blurListener, true);
            };
            this._elementMap.set(key, focusState);
            this._ngZone.runOutsideAngular(function () {
                nativeElement.addEventListener('focus', focusListener, true);
                nativeElement.addEventListener('blur', blurListener, true);
            });
            return focusState.subject.asObservable();
        };
        LyFocusState.prototype.focusElement = function (element, origin, options) {
            var nativeElement = getNativeElement(element);
            this._currentEvent = origin;
            if (typeof nativeElement.focus === 'function') {
                nativeElement.focus(options);
            }
        };
        LyFocusState.prototype.unlisten = function (element) {
            if (!Platform.isBrowser) {
                return;
            }
            var el = getNativeElement(element);
            var focusStateInfo = this._elementMap.get(el);
            if (focusStateInfo) {
                focusStateInfo.unlisten();
                this._elementMap.delete(el);
                this._decrementCount();
            }
        };
        LyFocusState.prototype._on = function (event, subject) {
            var by = null;
            if (event.type === 'focus') {
                by = this._currentEvent || 'keyboard';
            }
            this._ngZone.run(function () { return subject.next(by); });
        };
        LyFocusState.prototype._addGlobalListeners = function () {
            var _this = this;
            if (!Platform.isBrowser) {
                return;
            }
            var eventListenerOptions = supportsPassiveEventListeners
                ? {
                    passive: true,
                    capture: true
                } : false;
            var documentKeydownListener = function () { return _this._ngZone.runOutsideAngular(function () { return _this._currentEvent = 'keyboard'; }); };
            var documentMousedownListener = function () { return _this._ngZone.runOutsideAngular(function () { return _this._currentEvent = 'mouse'; }); };
            this._ngZone.runOutsideAngular(function () {
                document.addEventListener('keydown', documentKeydownListener, eventListenerOptions);
                document.addEventListener('mousedown', documentMousedownListener, eventListenerOptions);
            });
            this._removeGlobalListeners = function () {
                document.removeEventListener('keydown', documentKeydownListener, eventListenerOptions);
                document.removeEventListener('mousedown', documentMousedownListener, eventListenerOptions);
            };
        };
        LyFocusState.prototype._incrementCount = function () {
            if (++this._count === 1) {
                this._addGlobalListeners();
            }
        };
        LyFocusState.prototype._decrementCount = function () {
            if (!--this._count) {
                this._removeGlobalListeners();
            }
        };
        LyFocusState.prototype.ngOnDestroy = function () {
            var _this = this;
            this._elementMap.forEach(function (_, element) { return _this.unlisten(element); });
        };
        LyFocusState.ctorParameters = function () { return [
            { type: core.NgZone }
        ]; };
        LyFocusState.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LyFocusState_Factory() { return new LyFocusState(core.ɵɵinject(core.NgZone)); }, token: LyFocusState, providedIn: "root" });
        LyFocusState = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], LyFocusState);
        return LyFocusState;
    }());

    var AUI_VERSION = '2.9.8-nightly.2001172359';
    var AUI_LAST_UPDATE = '2020-01-17T23:59:41.611Z';

    var LY_HAMMER_OPTIONS = new core.InjectionToken('LY_HAMMER_OPTIONS');
    var HAMMER_GESTURES_EVENTS = [
        'slide',
        'slidestart',
        'slideend',
        'slideright',
        'slideleft',
        'slidecancel'
    ];
    var ɵ0$3 = function () { }, ɵ1$3 = function () { };
    /**
     * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
     * been loaded on the page.
     */
    var noopHammerInstance = {
        on: ɵ0$3,
        off: ɵ1$3,
    };
    var LyHammerGestureConfig = /** @class */ (function (_super) {
        __extends(LyHammerGestureConfig, _super);
        function LyHammerGestureConfig(_hammerOptions) {
            var _this = _super.call(this) || this;
            _this._hammerOptions = _hammerOptions;
            _this.events = HAMMER_GESTURES_EVENTS;
            return _this;
        }
        LyHammerGestureConfig.prototype.buildHammer = function (element) {
            var hammer = typeof window !== 'undefined' ? window.Hammer : null;
            if (!hammer) {
                return noopHammerInstance;
            }
            var mc = new hammer(element, this._hammerOptions || {});
            var pan = new hammer.Pan();
            var swipe = new hammer.Swipe();
            var slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
            pan.recognizeWith(swipe);
            // Add customized gestures to Hammer manager
            mc.add([swipe, pan, slide]);
            return mc;
        };
        /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
        LyHammerGestureConfig.prototype._createRecognizer = function (base, options) {
            var inheritances = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                inheritances[_i - 2] = arguments[_i];
            }
            var recognizer = new (base.constructor)(options);
            inheritances.push(base);
            inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
            return recognizer;
        };
        LyHammerGestureConfig.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [LY_HAMMER_OPTIONS,] }] }
        ]; };
        LyHammerGestureConfig = __decorate([
            core.Injectable(),
            __param(0, core.Optional()), __param(0, core.Inject(LY_HAMMER_OPTIONS))
        ], LyHammerGestureConfig);
        return LyHammerGestureConfig;
    }(platformBrowser.HammerGestureConfig));

    var LyThemeModule = /** @class */ (function () {
        function LyThemeModule() {
        }
        LyThemeModule_1 = LyThemeModule;
        LyThemeModule.setTheme = function (themeName) {
            return {
                ngModule: LyThemeModule_1,
                providers: [
                    [LyTheme2],
                    [StyleRenderer],
                    { provide: LY_THEME_NAME, useValue: themeName }
                ]
            };
        };
        var LyThemeModule_1;
        LyThemeModule = LyThemeModule_1 = __decorate([
            core.NgModule()
        ], LyThemeModule);
        return LyThemeModule;
    }());

    var Undefined = /** @class */ (function () {
        function Undefined() {
        }
        return Undefined;
    }());
    var UndefinedValue = new Undefined();

    // @Injectable()
    var LyOverlayRef = /** @class */ (function () {
        function LyOverlayRef() {
        }
        return LyOverlayRef;
    }());

    var styles$1 = function (theme) { return ({
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: theme.zIndex.overlay,
            pointerEvents: 'none'
        }
    }); };
    var ɵ0$4 = styles$1;
    var LyOverlayContainer = /** @class */ (function () {
        function LyOverlayContainer(theme) {
            this.theme = theme;
            this._classes = this.theme.addStyleSheet(styles$1);
            this._items = new Set();
            if (Platform.isBrowser) {
                var container = document.createElement('ly-overlay-container');
                document.body.appendChild(container);
                this._containerElement = container;
            }
        }
        Object.defineProperty(LyOverlayContainer.prototype, "overlayLen", {
            get: function () {
                return this._items.size;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyOverlayContainer.prototype, "containerElement", {
            get: function () {
                return this._containerElement;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Add instance
         * @ignore
         */
        LyOverlayContainer.prototype._add = function (item, insertBefore) {
            this._items.add(item);
            if (insertBefore) {
                this.containerElement.insertBefore(item, this.containerElement.firstChild);
            }
            else {
                this.containerElement.appendChild(item);
            }
            this._update();
        };
        /**
       * Remove instance
       * @ignore
       */
        LyOverlayContainer.prototype._remove = function (item) {
            this.containerElement.removeChild(item);
            this._items.delete(item);
            this._update();
        };
        /**
         * Update styles for overlay container
         * @ignore
         */
        LyOverlayContainer.prototype._update = function () {
            if (this._items.size) {
                if (!this._isActiveOverlayContainer) {
                    this._isActiveOverlayContainer = true;
                    this._containerElement.classList.add(this._classes.overlay);
                }
            }
            else if (this._isActiveOverlayContainer) {
                this._containerElement.classList.remove(this._classes.overlay);
                this._isActiveOverlayContainer = false;
            }
        };
        LyOverlayContainer.ctorParameters = function () { return [
            { type: LyTheme2 }
        ]; };
        LyOverlayContainer.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LyOverlayContainer_Factory() { return new LyOverlayContainer(core.ɵɵinject(LyTheme2)); }, token: LyOverlayContainer, providedIn: "root" });
        LyOverlayContainer = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], LyOverlayContainer);
        return LyOverlayContainer;
    }());

    var WinResize = /** @class */ (function () {
        function WinResize(document, ngZone) {
            var _this = this;
            this.document = document;
            if (Platform.isBrowser) {
                ngZone.runOutsideAngular(function () {
                    _this.resize$ = rxjs.fromEvent(window, 'resize').pipe(operators.auditTime(20), operators.map(function () {
                        return window.innerHeight || _this.document.documentElement.clientHeight;
                    }), operators.share());
                });
            }
            else {
                this.resize$ = rxjs.empty();
            }
        }
        WinResize.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.NgZone }
        ]; };
        WinResize.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function WinResize_Factory() { return new WinResize(core.ɵɵinject(common.DOCUMENT), core.ɵɵinject(core.NgZone)); }, token: WinResize, providedIn: "root" });
        WinResize = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(0, core.Inject(common.DOCUMENT))
        ], WinResize);
        return WinResize;
    }());

    var WinScroll = /** @class */ (function () {
        function WinScroll(_document, ngZone) {
            var _this = this;
            this._document = _document;
            if (Platform.isBrowser) {
                ngZone.runOutsideAngular(function () {
                    _this.scroll$ = rxjs.fromEvent(window.document, 'scroll').pipe(operators.auditTime(20), operators.map(function () {
                        return window.scrollY || _this._document.documentElement.scrollTop;
                    }), operators.share());
                });
            }
            else {
                this.scroll$ = rxjs.empty();
            }
        }
        WinScroll.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.NgZone }
        ]; };
        WinScroll.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function WinScroll_Factory() { return new WinScroll(core.ɵɵinject(common.DOCUMENT), core.ɵɵinject(core.NgZone)); }, token: WinScroll, providedIn: "root" });
        WinScroll = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(0, core.Inject(common.DOCUMENT))
        ], WinScroll);
        return WinScroll;
    }());

    var LyOverlayConfig = /** @class */ (function () {
        function LyOverlayConfig() {
            this.hasBackdrop = true;
            /**
             * Whether the user can click on the backdrop to close the overlay.
             */
            this.disableClose = false;
        }
        return LyOverlayConfig;
    }());

    var STYLE_PRIORITY$2 = -2;
    var STYLES_BACKDROP_ROOT = (__assign({}, LY_COMMON_STYLES_DEPRECATED.fill, { width: '100vw', height: '100vh', pointerEvents: 'all', userSelect: 'none' }));
    var LyOverlayBackdrop = /** @class */ (function () {
        function LyOverlayBackdrop(_el, _theme, _config) {
            this._el = _el;
            this._config = _config;
            _el.nativeElement.classList.add(_theme.style(STYLES_BACKDROP_ROOT, STYLE_PRIORITY$2));
            // this applies custom class for backdrop,
            // if one is not defined, do nothing.
            var backdropClass = _config.backdropClass;
            if (backdropClass) {
                this._el.nativeElement.classList.add(backdropClass);
            }
        }
        LyOverlayBackdrop.prototype.onclick = function () {
            if (!this._config.disableClose) {
                this._config.fnDestroy();
            }
        };
        LyOverlayBackdrop.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: LyTheme2 },
            { type: LyOverlayConfig }
        ]; };
        __decorate([
            core.HostListener('click')
        ], LyOverlayBackdrop.prototype, "onclick", null);
        LyOverlayBackdrop = __decorate([
            core.Component({
                selector: 'ly-overlay-backdrop',
                template: ""
            })
        ], LyOverlayBackdrop);
        return LyOverlayBackdrop;
    }());

    function createOverlayInjector(parent, config, overlayFactory) {
        return core.Injector.create({
            providers: [
                {
                    provide: LyOverlayConfig,
                    useValue: config
                },
                {
                    provide: LyOverlayRef,
                    useValue: overlayFactory
                }
            ],
            parent: parent
        });
    }

    var OverlayFactory = /** @class */ (function () {
        function OverlayFactory(_componentFactoryResolver, _appRef, _templateRefOrComponent, _overlayContainer, _context, _injector, windowScroll, resizeService, config) {
            var _this = this;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._appRef = _appRef;
            this._overlayContainer = _overlayContainer;
            this._injector = _injector;
            this._windowSRSub = rxjs.Subscription.EMPTY;
            this._config = config = __assign({}, new LyOverlayConfig(), config);
            this._el = document.createElement('div');
            var __styles = {
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: 'all'
            };
            if (config) {
                Object.assign(__styles, config.styles);
            }
            var newInjector = this._newInjector = createOverlayInjector(this._injector, __assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles }), this);
            this._updateStyles(__styles);
            if (config) {
                if (config.onResizeScroll) {
                    this.onResizeScroll = config.onResizeScroll;
                }
                this._windowSRSub = rxjs.merge(windowScroll.scroll$, resizeService.resize$).subscribe(function () {
                    if (_this.onResizeScroll) {
                        _this.onResizeScroll();
                    }
                });
                if (config.classes) {
                    var classes = config.classes;
                    classes.forEach(function (className) { return _this._el.classList.add(className); });
                }
            }
            this.updateBackdrop(!!config.hasBackdrop);
            this._appendComponentToBody(_templateRefOrComponent, _context, newInjector);
            this._hiddeScroll();
        }
        Object.defineProperty(OverlayFactory.prototype, "containerElement", {
            get: function () {
                return this._el;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OverlayFactory.prototype, "componentRef", {
            get: function () {
                return this._compRef;
            },
            enumerable: true,
            configurable: true
        });
        OverlayFactory.prototype.updateBackdrop = function (hasBackdrop) {
            if (hasBackdrop) {
                this._compRefOverlayBackdrop = this._generateComponent(LyOverlayBackdrop, this._newInjector);
                this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
                var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
                this._overlayContainer._add(backdropEl, true);
            }
            else if (this._compRefOverlayBackdrop) {
                this._resetScroll();
                this._appRef.detachView(this._compRefOverlayBackdrop.hostView);
                var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
                this._overlayContainer._remove(backdropEl);
                this._compRefOverlayBackdrop = null;
            }
        };
        OverlayFactory.prototype._updateStyles = function (__styles) {
            /** Apply styles */
            /** set styles */
            for (var key in __styles) {
                if (__styles.hasOwnProperty(key)) {
                    var styleVal = __styles[key];
                    if (styleVal != null) {
                        this._el.style[key] = typeof __styles[key] === 'number' ? styleVal + "px" : styleVal;
                    }
                }
            }
        };
        OverlayFactory.prototype._appendComponentToBody = function (type, context, injector) {
            var _this = this;
            if (type instanceof core.TemplateRef) {
                // Create a component reference from the component
                var viewRef = this._viewRef = type.createEmbeddedView(context || {});
                this._appRef.attachView(viewRef);
                // Get DOM element from component
                viewRef.rootNodes.forEach(function (_) { return _this._el.appendChild(_); });
                // Append DOM element to the body
                this._overlayContainer._add(this._el);
            }
            else if (typeof type === 'string') {
                this._el.innerText = type;
                this._overlayContainer._add(this._el);
            }
            else {
                this._compRef = this._generateComponent(type, injector);
                this._appRef.attachView(this._compRef.hostView);
                this._el.appendChild(this._compRef.location.nativeElement);
                this._overlayContainer._add(this._el);
            }
        };
        OverlayFactory.prototype._generateComponent = function (type, injector) {
            var factory = this._componentFactoryResolver.resolveComponentFactory(type);
            return factory.create(injector);
        };
        /** Detaches a view from dirty checking again of ApplicationRef. */
        OverlayFactory.prototype.detach = function () {
            if (this._viewRef) {
                this._appRef.detachView(this._viewRef);
            }
            if (this._compRef) {
                this._appRef.detachView(this._compRef.hostView);
            }
        };
        /** Remove element of DOM */
        OverlayFactory.prototype.remove = function () {
            this._resetScroll();
            if (this._viewRef) {
                this._viewRef.destroy();
                this._overlayContainer._remove(this._el);
                this._el = undefined;
            }
            else if (this._compRef) {
                this._compRef.destroy();
                this._overlayContainer._remove(this._el);
                this._el = undefined;
                this._compRef = null;
            }
            else if (this._el) {
                // remove if template is string
                this._overlayContainer._remove(this._el);
                this._el = undefined;
            }
            this.updateBackdrop(false);
            this._windowSRSub.unsubscribe();
        };
        /** Detach & remove */
        OverlayFactory.prototype.destroy = function () {
            this.detach();
            this.remove();
        };
        OverlayFactory.prototype._hiddeScroll = function () {
            if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
                var scrollWidth = window.innerWidth - window.document.body.clientWidth;
                if (scrollWidth) {
                    var computedStyle = getComputedStyle(window.document.body);
                    this._paddingRight = computedStyle.getPropertyValue('padding-right');
                    window.document.body.style.paddingRight = "calc(" + scrollWidth + "px + " + this._paddingRight + ")";
                }
                window.document.body.style.overflow = 'hidden';
            }
        };
        OverlayFactory.prototype._resetScroll = function () {
            if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
                if (this._paddingRight) {
                    window.document.body.style.paddingRight = this._paddingRight;
                    this._paddingRight = null;
                }
                window.document.body.style.overflow = '';
            }
        };
        return OverlayFactory;
    }());

    var LyOverlay = /** @class */ (function () {
        function LyOverlay(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _windowScroll, _resizeService) {
            this._overlayContainer = _overlayContainer;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._appRef = _appRef;
            this._injector = _injector;
            this._windowScroll = _windowScroll;
            this._resizeService = _resizeService;
        }
        LyOverlay.prototype.create = function (templateOrComponent, context, config) {
            return new OverlayFactory(this._componentFactoryResolver, this._appRef, templateOrComponent, this._overlayContainer, context, this._injector, this._windowScroll, this._resizeService, config);
        };
        LyOverlay.ctorParameters = function () { return [
            { type: LyOverlayContainer },
            { type: core.ComponentFactoryResolver },
            { type: core.ApplicationRef },
            { type: core.Injector },
            { type: WinScroll },
            { type: WinResize }
        ]; };
        LyOverlay = __decorate([
            core.Injectable()
        ], LyOverlay);
        return LyOverlay;
    }());

    var LyOverlayModule = /** @class */ (function () {
        function LyOverlayModule() {
        }
        LyOverlayModule = __decorate([
            core.NgModule({
                declarations: [LyOverlayBackdrop],
                entryComponents: [LyOverlayBackdrop],
                providers: [
                    LyOverlay
                ]
            })
        ], LyOverlayModule);
        return LyOverlayModule;
    }());

    var STYLES_BACKDROP_DARK = ({
        backgroundColor: 'rgba(0,0,0,.32)'
    });

    var MUTATION_OBSERVER_INIT = {
        characterData: true,
        childList: true,
        subtree: true
    };
    var MutationObserverFactory = /** @class */ (function () {
        function MutationObserverFactory() {
        }
        MutationObserverFactory.prototype.create = function (callback) {
            return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
        };
        MutationObserverFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
        MutationObserverFactory = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], MutationObserverFactory);
        return MutationObserverFactory;
    }());
    var ElementObserver = /** @class */ (function () {
        function ElementObserver(_mutationObserverFactory) {
            this._mutationObserverFactory = _mutationObserverFactory;
            this._observedElements = new Map();
        }
        ElementObserver.prototype.ngOnDestroy = function () {
            var _this = this;
            this._observedElements.forEach(function (_, element) { return _this.destroy(element); });
        };
        ElementObserver.prototype.observe = function (elementOrRef, fn, options) {
            var element = elementOrRef instanceof core.ElementRef ? elementOrRef.nativeElement : elementOrRef;
            if (!this._observedElements.has(element)) {
                var observer = this._mutationObserverFactory.create(fn);
                if (observer) {
                    observer.observe(element, options || MUTATION_OBSERVER_INIT);
                }
                this._observedElements.set(element, observer);
            }
            return this._observedElements.get(element);
        };
        /**
         * Destroy Observer
         */
        ElementObserver.prototype.destroy = function (elementOrRef) {
            var element = elementOrRef instanceof core.ElementRef ? elementOrRef.nativeElement : elementOrRef;
            if (this._observedElements.has(element)) {
                var observer = this._observedElements.get(element);
                if (observer) {
                    this._observedElements.get(element).disconnect();
                }
                this._observedElements.delete(element);
            }
        };
        ElementObserver.ctorParameters = function () { return [
            { type: MutationObserverFactory }
        ]; };
        ElementObserver.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ElementObserver_Factory() { return new ElementObserver(core.ɵɵinject(MutationObserverFactory)); }, token: ElementObserver, providedIn: "root" });
        ElementObserver = __decorate([
            core.Injectable({ providedIn: 'root' })
        ], ElementObserver);
        return ElementObserver;
    }());


    (function (AlignAlias) {
        AlignAlias["rowReverse"] = "row-reverse";
        AlignAlias["columnReverse"] = "column-reverse";
        AlignAlias["wrapReverse"] = "wrap-reverse";
        AlignAlias["start"] = "flex-start";
        AlignAlias["end"] = "flex-end";
        AlignAlias["between"] = "space-between";
        AlignAlias["around"] = "space-around";
        AlignAlias["evenly"] = "space-evenly";
    })(exports.AlignAlias || (exports.AlignAlias = {}));

    function same(o) {
        return o;
    }
    var LySelectionModel = /** @class */ (function () {
        function LySelectionModel(opts) {
            this._selectionMap = new Map();
            this._getKeyFn = same;
            if (!opts) {
                return;
            }
            var multiple = opts.multiple, getKey = opts.getKey;
            if (getKey) {
                this._getKeyFn = getKey;
            }
            if (multiple === true) {
                this._multiple = true;
                var selecteds = opts.selecteds;
                if (Array.isArray(selecteds) && selecteds.length) {
                    this.select.apply(this, __spread(selecteds));
                }
            }
            else {
                var selecteds = opts.selecteds;
                if (selecteds) {
                    this._markSelected(selecteds);
                }
            }
        }
        Object.defineProperty(LySelectionModel.prototype, "selected", {
            /** Selected values. */
            get: function () {
                if (!this._selected) {
                    this._selected = Array.from(this._selectionMap.values());
                }
                return this._selected;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Toggles a value between selected and deselected.
         */
        LySelectionModel.prototype.toggle = function (value) {
            this.isSelected(value) ? this.deselect(value) : this.select(value);
        };
        /**
         * Selects one or several values.
         */
        LySelectionModel.prototype.select = function () {
            var _this = this;
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            values.forEach(function (value) { return _this._markSelected(value); });
            this._clearSelectedValues();
        };
        /**
         * Deselects a value or an array of values.
         */
        LySelectionModel.prototype.deselect = function () {
            var _this = this;
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            values.forEach(function (value) { return _this._unmarkSelected(value); });
            this._clearSelectedValues();
        };
        /**
         * Determines whether a value is selected.
         */
        LySelectionModel.prototype.isSelected = function (value) {
            var key = this._getKeyFn(value);
            return this._selectionMap.has(key);
        };
        /**
         * Determines whether the model does not have a value.
         */
        LySelectionModel.prototype.isEmpty = function () {
            return this._selectionMap.size === 0;
        };
        /**
         * Determines whether the model has a value.
         */
        LySelectionModel.prototype.hasValue = function () {
            return this._selectionMap.size !== 0;
        };
        /**
         * Gets whether multiple values can be selected.
         */
        LySelectionModel.prototype.isMultipleSelection = function () {
            return this._multiple;
        };
        /**
         * Clears all of the selected values.
         */
        LySelectionModel.prototype.clear = function () {
            this._unmarkAll();
            this._clearSelectedValues();
        };
        /** Selects a value. */
        LySelectionModel.prototype._markSelected = function (value) {
            if (!this.isSelected(value)) {
                if (!this._multiple) {
                    this._unmarkAll();
                }
                var key = this._getKeyFn(value);
                this._selectionMap.set(key, value);
            }
        };
        /** Deselects a value. */
        LySelectionModel.prototype._unmarkSelected = function (value) {
            if (this.isSelected(value)) {
                var key = this._getKeyFn(value);
                this._selectionMap.delete(key);
            }
        };
        /** Clears out the selected values. */
        LySelectionModel.prototype._unmarkAll = function () {
            if (!this.isEmpty()) {
                this._selectionMap.clear();
            }
        };
        /** Clear the selected values so they can be re-cached. */
        LySelectionModel.prototype._clearSelectedValues = function () {
            this._selected = null;
        };
        return LySelectionModel;
    }());

    function getLyThemeVariableUndefinedError(variable) {
        return Error("Variable '" + variable + "' undefined in Theme.");
    }
    function getLyThemeVariableOptionUndefinedError(comp, variable) {
        return Error(comp + ": variable " + variable + " is undefined in Theme.");
    }
    function getLyThemeStyleUndefinedError(comp, input, val) {
        return Error(comp + ": no styles defined in the theme have been found for `@Input() " + input + "`,"
            + (" the value given is `" + val + "`."));
    }

    var STYLES = function (theme) { return ({
        root: {
            width: '1em',
            height: '1em',
            display: 'inline-block',
            position: 'relative',
            fontSize: '24px'
        },
        line: {
            top: 'calc(0.5em - 1px)',
            position: 'absolute',
            width: 1 / 3 + "em",
            height: '2px',
            backgroundColor: 'currentColor',
            display: 'inline-block',
            transition: "all " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard,
            '&:first-of-type': {
                left: '0.25em',
                '-webkit-transform': 'rotate(45deg)',
                transform: 'rotate(45deg)'
            },
            '&:last-of-type': {
                right: '0.25em',
                '-webkit-transform': 'rotate(-45deg)',
                transform: 'rotate(-45deg)'
            }
        },
        up: {
            '{line}:first-of-type': {
                '-webkit-transform': 'rotate(-45deg)',
                transform: 'rotate(-45deg)'
            },
            '{line}:last-of-type': {
                '-webkit-transform': 'rotate(45deg)',
                transform: 'rotate(45deg)'
            }
        }
    }); };
    var ɵ0$5 = STYLES;
    var LyExpansionIcon = /** @class */ (function () {
        function LyExpansionIcon(_theme, _renderer, _el) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._el = _el;
            this.classes = this._theme.addStyleSheet(STYLES);
            this._up = false;
            _renderer.addClass(_el.nativeElement, this.classes.root);
        }
        Object.defineProperty(LyExpansionIcon.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (val) {
                this._colorClass = this._theme.addStyle('LyExpansionIcon.color', function (theme) { return ({
                    '{line}': {
                        backgroundColor: theme.colorOf(val)
                    }
                }); }, this._el.nativeElement, this._colorClass, null, STYLES);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyExpansionIcon.prototype, "up", {
            get: function () {
                return this._up;
            },
            set: function (val) {
                var newVal = toBoolean(val);
                if (newVal !== this.up) {
                    this._up = newVal;
                    if (newVal) {
                        this._renderer.addClass(this._el.nativeElement, this.classes.up);
                    }
                    else {
                        this._renderer.removeClass(this._el.nativeElement, this.classes.up);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        LyExpansionIcon.prototype.toggle = function () {
            this.up = !this.up;
        };
        LyExpansionIcon.ctorParameters = function () { return [
            { type: LyTheme2 },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], LyExpansionIcon.prototype, "color", null);
        __decorate([
            core.Input()
        ], LyExpansionIcon.prototype, "up", null);
        LyExpansionIcon = __decorate([
            core.Component({
                selector: 'ly-expansion-icon',
                template: "<span [className]=\"classes.line\"></span>\n<span [className]=\"classes.line\"></span>",
                changeDetection: core.ChangeDetectionStrategy.OnPush
            })
        ], LyExpansionIcon);
        return LyExpansionIcon;
    }());

    var LyExpansionIconModule = /** @class */ (function () {
        function LyExpansionIconModule() {
        }
        LyExpansionIconModule = __decorate([
            core.NgModule({
                declarations: [LyExpansionIcon],
                exports: [LyExpansionIcon]
            })
        ], LyExpansionIconModule);
        return LyExpansionIconModule;
    }());

    exports.AUI_LAST_UPDATE = AUI_LAST_UPDATE;
    exports.AUI_VERSION = AUI_VERSION;
    exports.CoreTheme = CoreTheme;
    exports.ElementObserver = ElementObserver;
    exports.IS_CORE_THEME = IS_CORE_THEME;
    exports.LY_COMMON_STYLES = LY_COMMON_STYLES;
    exports.LY_COMMON_STYLES_DEPRECATED = LY_COMMON_STYLES_DEPRECATED;
    exports.LY_HAMMER_OPTIONS = LY_HAMMER_OPTIONS;
    exports.LY_THEME = LY_THEME;
    exports.LY_THEME_GLOBAL_VARIABLES = LY_THEME_GLOBAL_VARIABLES;
    exports.LY_THEME_NAME = LY_THEME_NAME;
    exports.LyCommonModule = LyCommonModule;
    exports.LyCoreStyles = LyCoreStyles;
    exports.LyExpansionIcon = LyExpansionIcon;
    exports.LyExpansionIconModule = LyExpansionIconModule;
    exports.LyFocusState = LyFocusState;
    exports.LyHammerGestureConfig = LyHammerGestureConfig;
    exports.LyHostClass = LyHostClass;
    exports.LyOverlay = LyOverlay;
    exports.LyOverlayConfig = LyOverlayConfig;
    exports.LyOverlayContainer = LyOverlayContainer;
    exports.LyOverlayModule = LyOverlayModule;
    exports.LyOverlayRef = LyOverlayRef;
    exports.LyPaper = LyPaper;
    exports.LyPaperBase = LyPaperBase;
    exports.LyPaperMixinBase = LyPaperMixinBase;
    exports.LyRippleService = LyRippleService;
    exports.LySelectionModel = LySelectionModel;
    exports.LyStyle = LyStyle;
    exports.LyStyleUtils = LyStyleUtils;
    exports.LyTheme2 = LyTheme2;
    exports.LyThemeModule = LyThemeModule;
    exports.LylParse = LylParse;
    exports.MutationObserverFactory = MutationObserverFactory;
    exports.NgTranscludeDirective = NgTranscludeDirective;
    exports.NgTranscludeModule = NgTranscludeModule;
    exports.OverlayFactory = OverlayFactory;
    exports.Platform = Platform;
    exports.Positioning = Positioning;
    exports.Ripple = Ripple;
    exports.STYLES_BACKDROP_DARK = STYLES_BACKDROP_DARK;
    exports.Shadows = Shadows;
    exports.StringIdGenerator = StringIdGenerator;
    exports.Style = Style;
    exports.StyleCollection = StyleCollection;
    exports.StyleRenderer = StyleRenderer;
    exports.StylesInDocument = StylesInDocument;
    exports.THEME_VARIABLES = THEME_VARIABLES;
    exports.Undefined = Undefined;
    exports.UndefinedValue = UndefinedValue;
    exports.WinResize = WinResize;
    exports.WinScroll = WinScroll;
    exports._STYLE_MAP = _STYLE_MAP;
    exports.capitalizeFirstLetter = capitalizeFirstLetter;
    exports.converterToCssKeyAndStyle = converterToCssKeyAndStyle;
    exports.createOverlayInjector = createOverlayInjector;
    exports.defaultEntry = defaultEntry;
    exports.eachMedia = eachMedia;
    exports.getContrastYIQ = getContrastYIQ;
    exports.getLyThemeStyleUndefinedError = getLyThemeStyleUndefinedError;
    exports.getLyThemeVariableOptionUndefinedError = getLyThemeVariableOptionUndefinedError;
    exports.getLyThemeVariableUndefinedError = getLyThemeVariableUndefinedError;
    exports.getNativeElement = getNativeElement;
    exports.getThemeNameForSelectors = getThemeNameForSelectors;
    exports.invertPlacement = invertPlacement;
    exports.keyframesUniqueId = keyframesUniqueId;
    exports.lyl = lyl;
    exports.mergeDeep = mergeDeep;
    exports.mergeThemes = mergeThemes;
    exports.mixinBg = mixinBg;
    exports.mixinColor = mixinColor;
    exports.mixinDisableRipple = mixinDisableRipple;
    exports.mixinDisabled = mixinDisabled;
    exports.mixinElevation = mixinElevation;
    exports.mixinOutlined = mixinOutlined;
    exports.mixinRaised = mixinRaised;
    exports.mixinShadowColor = mixinShadowColor;
    exports.mixinStyleUpdater = mixinStyleUpdater;
    exports.mixinTabIndex = mixinTabIndex;
    exports.scrollTo = scrollTo;
    exports.scrollWithAnimation = scrollWithAnimation;
    exports.shadowBuilder = shadowBuilder;
    exports.st2c = st2c;
    exports.supportsPassiveEventListeners = supportsPassiveEventListeners;
    exports.toBoolean = toBoolean;
    exports.toNumber = toNumber;
    exports.untilComponentDestroyed = untilComponentDestroyed;
    exports.ɵ0 = ɵ0$2;
    exports.ɵ1 = ɵ1$2;
    exports.ɵ10 = ɵ10;
    exports.ɵ11 = ɵ11;
    exports.ɵ12 = ɵ12;
    exports.ɵ13 = ɵ13;
    exports.ɵ14 = ɵ14;
    exports.ɵ15 = ɵ15;
    exports.ɵ16 = ɵ16;
    exports.ɵ17 = ɵ17;
    exports.ɵ18 = ɵ18;
    exports.ɵ19 = ɵ19;
    exports.ɵ2 = ɵ2$2;
    exports.ɵ20 = ɵ20;
    exports.ɵ21 = ɵ21;
    exports.ɵ22 = ɵ22;
    exports.ɵ23 = ɵ23;
    exports.ɵ24 = ɵ24;
    exports.ɵ25 = ɵ25;
    exports.ɵ26 = ɵ26;
    exports.ɵ27 = ɵ27;
    exports.ɵ28 = ɵ28;
    exports.ɵ29 = ɵ29;
    exports.ɵ3 = ɵ3;
    exports.ɵ30 = ɵ30;
    exports.ɵ31 = ɵ31;
    exports.ɵ32 = ɵ32;
    exports.ɵ33 = ɵ33;
    exports.ɵ4 = ɵ4;
    exports.ɵ5 = ɵ5;
    exports.ɵ6 = ɵ6;
    exports.ɵ7 = ɵ7;
    exports.ɵ8 = ɵ8;
    exports.ɵ9 = ɵ9;
    exports.ɵa = LyWithClass;
    exports.ɵb = LyOverlayBackdrop;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui.umd.js.map
