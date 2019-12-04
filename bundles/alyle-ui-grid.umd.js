(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/grid', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.grid = {}), global.ng.core, global.ly.core));
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

    var STYLE_PRIORITY = -1;
    var ALIGN_ALIAS = {
        rowReverse: 'row-reverse',
        columnReverse: 'column-reverse',
        wrapReverse: 'wrap-reverse',
        start: 'flex-start',
        end: 'flex-end',
        between: 'space-between',
        around: 'space-around',
        evenly: 'space-evenly',
    };
    var styles = function () { return ({
        $priority: STYLE_PRIORITY,
        $name: LyGrid.и,
        root: function (className) { return className + "{width:100%;display:flex;flex-wrap:wrap;box-sizing:border-box;}"; },
        item: function (className) { return className + "," + className + " :first-child{box-sizing:border-box;}"; }
    }); };
    var ɵ0 = styles;
    /**
     * Grid container
     */
    var LyGrid = /** @class */ (function () {
        function LyGrid(theme, el) {
            this.theme = theme;
            this.el = el;
            /**
             * Styles
             * @docs-private
             */
            this.classes = this.theme.renderStyleSheet(styles);
            this.el.nativeElement.classList.add(this.classes.root);
        }
        Object.defineProperty(LyGrid.prototype, "spacingX", {
            get: function () {
                return this._spacingX;
            },
            set: function (val) {
                if (val !== this.spacingX) {
                    this._spacingX = val;
                    this._createSpacingClass(undefined, val);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyGrid.prototype, "spacingY", {
            get: function () {
                return this._spacingY;
            },
            set: function (val) {
                if (val !== this.spacingY) {
                    this._spacingY = val;
                    this._createSpacingClass(undefined, undefined, val);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyGrid.prototype, "spacing", {
            /**
             * Defines the space between the component with the `item` attribute.
             * Support breakpoints
             */
            get: function () {
                return this._spacing;
            },
            set: function (val) {
                if (val !== this.spacing) {
                    this._spacing = val;
                    this._createSpacingClass(val);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Only one param must be defined
         */
        LyGrid.prototype._createSpacingClass = function (xy, x, y) {
            var newSpacingClass = this.theme.addStyle("lyGrid-spacing:" + xy + "\u00B7" + x + "\u00B7" + y, function (theme) {
                var val = xy || x || y;
                var spacingStyles = {};
                ui.eachMedia(val, function (value, media) {
                    var valuePadding = (+value) / 2 + "px";
                    var padding = xy != null
                        ? valuePadding
                        : x != null
                            ? "0 " + valuePadding
                            : valuePadding + " 0";
                    if (media) {
                        spacingStyles[theme.getBreakpoint(media)] = {
                            padding: padding
                        };
                    }
                    else {
                        spacingStyles.padding = padding;
                    }
                });
                return spacingStyles;
            }, undefined, undefined, STYLE_PRIORITY);
            if (xy) {
                this._spacingClass = newSpacingClass;
            }
            else {
                if (x) {
                    this._spacingXClass = newSpacingClass;
                }
                if (y) {
                    this._spacingYClass = newSpacingClass;
                }
            }
            this._negativeMarginClass = this.theme.addStyle("lyGrid-negative-margin:" + xy + "\u00B7" + x + "\u00B7" + y, function (theme) {
                var val = xy || x || y;
                var negativeMarginStyles;
                ui.eachMedia(val, function (value, media) {
                    var valueMargin = (-value) / 2 + "px";
                    var margin = xy != null
                        ? valueMargin
                        : x != null
                            ? "0 " + valueMargin
                            : valueMargin + " 0";
                    var negativeMarginstyles = { margin: margin };
                    if (xy != null || x != null) {
                        negativeMarginstyles.width = "calc(100% + " + value + "px)";
                    }
                    if (media) {
                        if (!negativeMarginStyles) {
                            negativeMarginStyles = {};
                        }
                        negativeMarginStyles[theme.getBreakpoint(media)] = negativeMarginstyles;
                    }
                    else {
                        negativeMarginStyles = negativeMarginstyles;
                    }
                });
                return negativeMarginStyles;
            }, this.el.nativeElement, this._negativeMarginClass, STYLE_PRIORITY);
        };
        Object.defineProperty(LyGrid.prototype, "justify", {
            /**
             * Defines the justify-content style property.
             * Support breakpoints
             */
            get: function () {
                return this._justify;
            },
            set: function (val) {
                if (val !== this.justify) {
                    this._justify = val;
                    this._justifyClass = this.theme.addStyle("lyGrid-justify:" + val, function (theme) {
                        var justifyStyles;
                        ui.eachMedia(val, function (value, media) {
                            var newJustifyStyles = {
                                justifyContent: value in ALIGN_ALIAS
                                    ? ALIGN_ALIAS[value]
                                    : value
                            };
                            if (media) {
                                if (!justifyStyles) {
                                    justifyStyles = {};
                                }
                                justifyStyles[theme.getBreakpoint(media)] = newJustifyStyles;
                            }
                            else {
                                justifyStyles = newJustifyStyles;
                            }
                        });
                        return justifyStyles;
                    }, this.el.nativeElement, this._justifyClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyGrid.prototype, "direction", {
            /**
             * Defines the justify-content style property.
             * Support breakpoints
             */
            get: function () {
                return this._direction;
            },
            set: function (val) {
                if (val !== this.direction) {
                    this._direction = val;
                    this._directionClass = this.theme.addStyle("lyGrid-direction:" + val, function (theme) {
                        var directionStyles;
                        ui.eachMedia(val, function (value, media) {
                            var newDirectionStyles = {
                                flexDirection: value in ALIGN_ALIAS
                                    ? ALIGN_ALIAS[value]
                                    : value
                            };
                            if (media) {
                                if (!directionStyles) {
                                    directionStyles = {};
                                }
                                directionStyles[theme.getBreakpoint(media)] = newDirectionStyles;
                            }
                            else {
                                directionStyles = newDirectionStyles;
                            }
                        });
                        return directionStyles;
                    }, this.el.nativeElement, this._directionClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyGrid.prototype, "alignItems", {
            get: function () {
                return this._alignItems;
            },
            /**
             * Defines the `align-items` style property.
             * Support breakpoints
             */
            set: function (val) {
                this._alignItems = val;
                this._alignItemsClass = this.theme.addStyle("lyGrid.align:" + val, function (theme) {
                    var alignItemsStyles;
                    ui.eachMedia(val, function (value, media) {
                        var newAlignItemsStyles = {
                            alignItems: value in ALIGN_ALIAS
                                ? ALIGN_ALIAS[value]
                                : value
                        };
                        if (media) {
                            if (!alignItemsStyles) {
                                alignItemsStyles = {};
                            }
                            alignItemsStyles[theme.getBreakpoint(media)] = newAlignItemsStyles;
                        }
                        else {
                            alignItemsStyles = newAlignItemsStyles;
                        }
                    });
                    return alignItemsStyles;
                }, this.el.nativeElement, this._alignItemsClass, STYLE_PRIORITY);
            },
            enumerable: true,
            configurable: true
        });
        LyGrid.и = 'LyGrid';
        LyGrid.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], LyGrid.prototype, "spacingX", null);
        __decorate([
            core.Input()
        ], LyGrid.prototype, "spacingY", null);
        __decorate([
            core.Input()
        ], LyGrid.prototype, "spacing", null);
        __decorate([
            core.Input()
        ], LyGrid.prototype, "justify", null);
        __decorate([
            core.Input()
        ], LyGrid.prototype, "direction", null);
        __decorate([
            core.Input()
        ], LyGrid.prototype, "alignItems", null);
        LyGrid = __decorate([
            core.Directive({
                selector: 'ly-grid[container]'
            })
        ], LyGrid);
        return LyGrid;
    }());
    var LyGridItem = /** @class */ (function () {
        function LyGridItem(gridContainer, el, renderer, theme, _sr) {
            this.gridContainer = gridContainer;
            this.el = el;
            this.theme = theme;
            this._sr = _sr;
            if (!gridContainer) {
                throw new Error("Require parent <ly-grid container>");
            }
            renderer.addClass(el.nativeElement, this.gridContainer.classes.item);
        }
        LyGridItem_1 = LyGridItem;
        Object.defineProperty(LyGridItem.prototype, "col", {
            /**
             * Defines the number of grids
             * Support breakpoints
             */
            get: function () {
                return this._col;
            },
            set: function (val) {
                var newVal = this._col = val || 0;
                this._colClass = this._sr.add(LyGridItem_1.и + "--col-" + newVal, function (theme) {
                    var medias = new ui.StyleCollection();
                    ui.eachMedia(newVal, function (value, media) {
                        if (typeof value === 'string') {
                            throw new Error(LyGridItem_1.и + ": '" + val + "' is not valid.");
                        }
                        var maxWidth = value ? value * 100 / 12 : 100;
                        var flexBasis = value ? value * 100 / 12 : 0;
                        var flexGrow = value ? 0 : 1;
                        if (media) {
                            medias.add(function (className) { return "@media " + theme.breakpoints[media] + "{" + className + "{max-width:" + maxWidth + "%;,flex-basis:" + flexBasis + "%;,flex-grow:" + flexGrow + ";}}"; });
                        }
                        else {
                            medias.add(function (className) { return className + "{max-width:" + maxWidth + "%;flex-basis:" + flexBasis + "%;flex-grow:" + flexGrow + ";}"; });
                        }
                    });
                    return medias.css;
                }, STYLE_PRIORITY, this._colClass);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyGridItem.prototype, "gridItemCol", {
            get: function () {
                return this.col;
            },
            set: function (val) {
                this.col = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyGridItem.prototype, "order", {
            /**
             * Defines the order style property.
             * Support breakpoints
             */
            get: function () {
                return this._order;
            },
            set: function (val) {
                if (val !== this.order) {
                    this._order = val;
                    this._orderClass = this.theme.addStyle("lyGrid-order:" + val, function (theme) {
                        var orderStyles;
                        ui.eachMedia("" + val, function (value, media) {
                            var newOrderStyles = {
                                order: value
                            };
                            if (media) {
                                if (!orderStyles) {
                                    orderStyles = {};
                                }
                                orderStyles[theme.getBreakpoint(media)] = newOrderStyles;
                            }
                            else {
                                orderStyles = newOrderStyles;
                            }
                        });
                        return orderStyles;
                    }, this.el.nativeElement, this._orderClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        LyGridItem.prototype.ngOnInit = function () {
            this._updateSpacing();
        };
        LyGridItem.prototype._updateSpacing = function () {
            if (this.gridContainer._spacingClass) {
                this.el.nativeElement.classList.add(this.gridContainer._spacingClass);
            }
            else {
                if (this.gridContainer._spacingXClass) {
                    this.el.nativeElement.classList.add(this.gridContainer._spacingXClass);
                }
                if (this.gridContainer._spacingYClass) {
                    this.el.nativeElement.classList.add(this.gridContainer._spacingYClass);
                }
            }
        };
        var LyGridItem_1;
        LyGridItem.и = 'LyGridItem';
        LyGridItem.ctorParameters = function () { return [
            { type: LyGrid },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: ui.LyTheme2 },
            { type: ui.StyleRenderer }
        ]; };
        __decorate([
            core.Input()
        ], LyGridItem.prototype, "col", null);
        __decorate([
            core.Input('lyGridItem')
        ], LyGridItem.prototype, "gridItemCol", null);
        __decorate([
            core.Input()
        ], LyGridItem.prototype, "order", null);
        LyGridItem = LyGridItem_1 = __decorate([
            core.Directive({
                selector: 'ly-grid[item], [ly-grid-item], [lyGridItem]',
                providers: [
                    ui.LyHostClass,
                    ui.StyleRenderer
                ]
            })
        ], LyGridItem);
        return LyGridItem;
    }());

    var LyGridModule = /** @class */ (function () {
        function LyGridModule() {
        }
        LyGridModule = __decorate([
            core.NgModule({
                exports: [LyGrid, LyGridItem],
                declarations: [LyGrid, LyGridItem]
            })
        ], LyGridModule);
        return LyGridModule;
    }());

    exports.LyGrid = LyGrid;
    exports.LyGridItem = LyGridItem;
    exports.LyGridModule = LyGridModule;
    exports.ɵ0 = ɵ0;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-grid.umd.js.map
