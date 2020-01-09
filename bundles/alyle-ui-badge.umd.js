(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/badge', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.badge = {}), global.ng.core, global.ly.core));
}(this, (function (exports, core, ui) { 'use strict';

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

    var LY_BADGE_DEFAULT_OPTIONS = new core.InjectionToken('BADGE_DEFAULT_OPTIONS');
    var STYLE_PRIORITY = -2;
    var DEFAULT_H_POSITION = 'after';
    var DEFAULT_V_POSITION = 'above';
    var DEFAULT_BG = 'primary';
    var DEFAULT_APPEARANCE = 'default';
    var DEFAULT_OVERLAP = 'rectangle';
    var STYLES = function (theme, ref) {
        var badge = ref.selectorsOf(STYLES);
        return {
            $name: LyBadge.и,
            $priority: STYLE_PRIORITY,
            root: function () { return function (className) { return className + "{position:absolute;display:flex;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:" + theme.pxToRem(12) + ";font-family:" + theme.typography.fontFamily + ";justify-content:center;align-items:center;box-sizing:border-box;z-index:1;}" + ui.st2c(((theme.badge
                && theme.badge.root
                && (theme.badge.root instanceof ui.StyleCollection
                    ? theme.badge.root.setTransformer(function (fn) { return fn(badge); })
                    : theme.badge.root(badge)))), "" + className); }; },
            relative: function (className) { return className + "{position:relative;}"; }
        };
    };
    /** @docs-private */
    var LyBadgeBase = /** @class */ (function () {
        function LyBadgeBase(_theme) {
            this._theme = _theme;
        }
        return LyBadgeBase;
    }());
    /** @docs-private */
    var LyBadgeMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinRaised(ui.mixinDisabled(ui.mixinOutlined(ui.mixinElevation(ui.mixinShadowColor(LyBadgeBase))))))));
    var LyBadge = /** @class */ (function (_super) {
        __extends(LyBadge, _super);
        function LyBadge(_el, _theme, _renderer) {
            var _this = _super.call(this, _theme) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            /**
             * Styles
             * @docs-private
             */
            _this.classes = _this._theme.renderStyleSheet(STYLES);
            _this.setAutoContrast();
            _this._badgeElementRef = _this._el.nativeElement;
            return _this;
        }
        LyBadge_1 = LyBadge;
        Object.defineProperty(LyBadge.prototype, "content", {
            get: function () {
                return this._content;
            },
            /** The content for the badge */
            set: function (val) {
                if (val !== this.content) {
                    this._content = val;
                    this._createBadge();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBadge.prototype, "container", {
            get: function () {
                return this._container;
            },
            set: function (container) {
                if (container == null) {
                    throw new Error(LyBadge_1.и + ": [container] is undefined.");
                }
                if (this.content != null) {
                    throw new Error(LyBadge_1.и + ": [container] with [content] don't work together.");
                }
                if (!container.tagName) {
                    throw new Error(LyBadge_1.и + ": the value given to container is not an HTMLElement");
                }
                this._container = container;
                this._renderer.appendChild(container, this._el.nativeElement);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBadge.prototype, "overlap", {
            get: function () {
                return this._overlap;
            },
            set: function (val) {
                var _this = this;
                if (val !== this.overlap) {
                    this._overlap = val;
                    Promise.resolve(null).then(function () {
                        var overlap = val;
                        var hp = _this.hPosition;
                        var vp = _this.vPosition;
                        var newClass = _this._theme.renderStyle(LyBadge_1.и + "-overlap-" + val + "&" + hp + "&" + vp, function (theme) {
                            var p = overlap === 'circle'
                                ? 14 : 0;
                            return function (className) { return className + "{" + theme.getDirection(vp) + ":" + p + "%;" + theme.getDirection(hp) + ":" + p + "%;}"; };
                        }, STYLE_PRIORITY);
                        _this._overlapClass = _this._hostClass.update(newClass, _this._overlapClass);
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBadge.prototype, "bg", {
            /** The color of the badge */
            get: function () {
                return this._lyBadgeBg;
            },
            set: function (val) {
                if (this.content == null) {
                    this.lyBadgeBg = val;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBadge.prototype, "lyBadgeBg", {
            /** The color of the badge */
            get: function () {
                return this._lyBadgeBg;
            },
            set: function (val) {
                var _this = this;
                if (val !== this.lyBadgeBg) {
                    this._lyBadgeBg = val;
                    var newClass_1 = this._theme.renderStyle(LyBadge_1.и + "--bg-" + val, function (theme) { return function (className) { return className + "{background-color:" + theme.colorOf(val) + ";color:" + theme.colorOf(val + ":contrast") + ";}"; }; }, STYLE_PRIORITY);
                    Promise.resolve(null).then(function () {
                        _this[0x1] = _this._hostClass.update(newClass_1, _this[0x1]);
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBadge.prototype, "appearance", {
            get: function () {
                return this._appearance;
            },
            set: function (val) {
                if (this.content == null) {
                    this.lyBadgeAppearance = val;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyBadge.prototype, "lyBadgeAppearance", {
            get: function () {
                return this._appearance;
            },
            set: function (val) {
                var _this = this;
                if (val !== this.appearance) {
                    this._appearance = val;
                    var styleID_1 = LyBadge_1.и + "--appearance-" + val;
                    var newClass_2 = this._theme.renderStyle(styleID_1, function (theme) {
                        var appearance = theme.badge
                            && theme.badge.appearance
                            && theme.badge.appearance[val]
                            && theme.badge.appearance[val](_this.classes);
                        if (appearance) {
                            return appearance;
                        }
                        throw new Error(styleID_1 + " is not defined in the theme.");
                    }, STYLE_PRIORITY);
                    Promise.resolve(null).then(function () {
                        _this._appearanceClass = _this._hostClass.update(newClass_2, _this._appearanceClass);
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        LyBadge.prototype.ngOnChanges = function () {
            if (this.content == null) {
                this.updateStyle(this._el);
            }
            this._updatePosition();
            if (!this._hostClass) {
                this._hostClass = new ui.LyHostClass(this._el, this._renderer);
            }
        };
        LyBadge.prototype.ngOnInit = function () {
            /** Add root styles */
            this._renderer.addClass(this._badgeElementRef, this.classes.root);
            /** Set default bg */
            if (!this.bg) {
                this.lyBadgeBg = DEFAULT_BG;
            }
            /** Set default position */
            var requireUpdate = false;
            if (!this.hPosition) {
                requireUpdate = true;
                this.hPosition = DEFAULT_H_POSITION;
            }
            if (!this.vPosition) {
                requireUpdate = true;
                this.vPosition = DEFAULT_V_POSITION;
            }
            if (requireUpdate) {
                this._updatePosition();
            }
            /** Set default appearance */
            if (!this.appearance) {
                this.lyBadgeAppearance = DEFAULT_APPEARANCE;
            }
            /** Set default overlap */
            if (!this.overlap) {
                this.overlap = DEFAULT_OVERLAP;
            }
        };
        LyBadge.prototype.ngOnDestroy = function () {
            if (this._badgeEl) {
                this._renderer.removeChild(this._el.nativeElement, this._badgeEl);
            }
        };
        LyBadge.prototype._updatePosition = function () {
            var _this = this;
            var hp = this.hPosition;
            var vp = this.vPosition;
            if (hp && vp) {
                var y_1;
                var x_1;
                if (hp && vp) {
                    if (hp === 'after') {
                        x_1 = 50;
                    }
                    else {
                        x_1 = -50;
                    }
                    if (vp === 'above') {
                        y_1 = -50;
                    }
                    else {
                        y_1 = 50;
                    }
                }
                var newClass_3 = this._theme.renderStyle(LyBadge_1.и + "--position-" + hp + "-" + vp, function (theme) { return function (className) { return className + "{transform:translate(" + (theme.after === 'right'
                    ? x_1 : -x_1) + "%, " + y_1 + "%);}"; }; }, STYLE_PRIORITY);
                Promise.resolve(null).then(function () {
                    _this._positionClass = _this._hostClass.update(newClass_3, _this._positionClass);
                });
            }
        };
        LyBadge.prototype._createBadge = function () {
            if (!this._badgeEl) {
                var badge = this._badgeEl = this._renderer.createElement('div');
                this._renderer.appendChild((this.container) || this._el.nativeElement, badge);
                this._badgeElementRef = badge;
                this._hostClass = new ui.LyHostClass(new core.ElementRef(badge), this._renderer);
                /** Add position relative */
                this._renderer.addClass(this._el.nativeElement, this.classes.relative);
            }
            this._badgeEl.textContent = "" + this.content;
        };
        var LyBadge_1;
        LyBadge.и = 'LyBadge';
        LyBadge.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: ui.LyTheme2 },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.Input('lyBadge')
        ], LyBadge.prototype, "content", null);
        __decorate([
            core.Input()
        ], LyBadge.prototype, "container", null);
        __decorate([
            core.Input()
        ], LyBadge.prototype, "hPosition", void 0);
        __decorate([
            core.Input()
        ], LyBadge.prototype, "vPosition", void 0);
        __decorate([
            core.Input()
        ], LyBadge.prototype, "overlap", null);
        __decorate([
            core.Input()
        ], LyBadge.prototype, "bg", null);
        __decorate([
            core.Input()
        ], LyBadge.prototype, "lyBadgeBg", null);
        __decorate([
            core.Input()
        ], LyBadge.prototype, "appearance", null);
        __decorate([
            core.Input()
        ], LyBadge.prototype, "lyBadgeAppearance", null);
        LyBadge = LyBadge_1 = __decorate([
            core.Directive({
                selector: 'ly-badge, [lyBadge]',
                inputs: [
                    'bg',
                    'color',
                    'raised',
                    'disabled',
                    'outlined',
                    'elevation',
                    'shadowColor'
                ]
            })
        ], LyBadge);
        return LyBadge;
    }(LyBadgeMixinBase));

    var LyBadgeModule = /** @class */ (function () {
        function LyBadgeModule() {
        }
        LyBadgeModule = __decorate([
            core.NgModule({
                exports: [LyBadge, ui.LyCommonModule],
                declarations: [LyBadge]
            })
        ], LyBadgeModule);
        return LyBadgeModule;
    }());

    exports.LY_BADGE_DEFAULT_OPTIONS = LY_BADGE_DEFAULT_OPTIONS;
    exports.LyBadge = LyBadge;
    exports.LyBadgeBase = LyBadgeBase;
    exports.LyBadgeMixinBase = LyBadgeMixinBase;
    exports.LyBadgeModule = LyBadgeModule;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-badge.umd.js.map
