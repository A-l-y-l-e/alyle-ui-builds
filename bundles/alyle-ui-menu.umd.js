(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/animations'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/menu', ['exports', '@angular/core', '@alyle/ui', '@angular/animations', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.menu = {}), global.ng.core, global.ly.core, global.ng.animations, global.ng.forms, global.ng.common));
}(this, (function (exports, core, ui, animations, forms, common) { 'use strict';

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
    var DEFAULT_PLACEMENT = ui.YPosition.below;
    var DEFAULT_XPOSITION = ui.XPosition.after;
    var STYLES = function (theme, ref) {
        var menu = ref.selectorsOf(STYLES);
        return {
            $priority: STYLE_PRIORITY,
            root: function () { return (theme.menu
                && theme.menu.root
                && (theme.menu.root instanceof ui.StyleCollection
                    ? theme.menu.root.setTransformer(function (fn) { return fn(menu); }).css
                    : theme.menu.root(menu))); },
            container: function (className) { return className + "{background:" + theme.background.primary.default + ";border-radius:2px;box-shadow:" + ui.shadowBuilder(4) + ";display:block;padding-top:8px;padding-bottom:8px;transform-origin:inherit;pointer-events:all;overflow:auto;max-height:inherit;max-width:inherit;box-sizing:border-box;}"; },
            item: function (className) { return className + "{display:flex;min-height:48px;border-radius:0;width:100%;justify-content:flex-start;}"; }
        };
    };
    var ANIMATIONS = [
        animations.trigger('menuEnter', [
            animations.transition('void => in', [
                animations.animate('125ms cubic-bezier(0, 0, 0.2, 1)', animations.keyframes([
                    animations.style({
                        opacity: 0,
                        transform: 'scale(0.8)'
                    }),
                    animations.style({
                        opacity: 1,
                        transform: 'scale(1)'
                    })
                ]))
            ]),
        ]),
        animations.trigger('menuLeave', [
            animations.transition('* => void', animations.animate('150ms linear', animations.style({ opacity: 0 })))
        ])
    ];
    /** Menu container */
    var LyMenu = /** @class */ (function () {
        function LyMenu(_theme, _el, _renderer) {
            this._theme = _theme;
            this._el = _el;
            this._renderer = _renderer;
            /**
             * styles
             * @docs-private
             */
            this.classes = this._theme.renderStyleSheet(STYLES);
            this._hasBackdrop = true;
            this._renderer.addClass(this._el.nativeElement, this.classes.root);
        }
        Object.defineProperty(LyMenu.prototype, "hasBackdrop", {
            /** Whether the menu has a backdrop. */
            get: function () {
                return this._hasBackdrop;
            },
            set: function (value) {
                this._hasBackdrop = ui.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        LyMenu.prototype.endAnimation = function (e) {
            if (e.toState === 'void') {
                this.ref.destroy();
            }
        };
        LyMenu.prototype.ngOnInit = function () {
            if (!this.ref) {
                throw new Error('LyMenu: require @Input() ref');
            }
            if (!this.placement && !this.xPosition && !this.yPosition) {
                this.xPosition = DEFAULT_XPOSITION;
                this.placement = DEFAULT_PLACEMENT;
            }
        };
        LyMenu.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.ref._menuRef) {
                this.ref._menuRef.onResizeScroll = this._updatePlacement.bind(this);
                this.ref._menuRef.updateBackdrop(this.hasBackdrop);
            }
            this._updatePlacement();
            this.ref.menuOpened.emit();
            Promise.resolve(null).then(function () {
                _this.ref._setMenuOpenToTrue();
            });
        };
        LyMenu.prototype._updatePlacement = function () {
            var el = this.ref._menuRef.containerElement;
            var container = this._container.nativeElement;
            // reset height & width
            this._renderer.setStyle(container, 'height', 'initial');
            this._renderer.setStyle(container, 'width', 'initial');
            var position = new ui.Positioning(this.placement, this.xPosition, this.yPosition, this.ref._getHostElement(), el, this._theme.variables);
            // set position
            this._renderer.setStyle(el, 'transform', "translate3d(" + position.x + "px, " + position.y + "px, 0)");
            this._renderer.setStyle(this._el.nativeElement, 'transform-origin', position.ox + " " + position.oy + " 0");
            // set height & width
            this._renderer.setStyle(container, 'height', position.height === 'initial' ? '100%' : position.height);
            this._renderer.setStyle(container, 'width', position.width === 'initial' ? '100%' : position.width);
        };
        LyMenu.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.ViewChild('container', { static: false })
        ], LyMenu.prototype, "_container", void 0);
        __decorate([
            core.Input()
        ], LyMenu.prototype, "ref", void 0);
        __decorate([
            core.Input()
        ], LyMenu.prototype, "placement", void 0);
        __decorate([
            core.Input()
        ], LyMenu.prototype, "xPosition", void 0);
        __decorate([
            core.Input()
        ], LyMenu.prototype, "yPosition", void 0);
        __decorate([
            core.Input()
        ], LyMenu.prototype, "hasBackdrop", null);
        __decorate([
            core.HostBinding('@menuLeave')
        ], LyMenu.prototype, "menuLeave2", void 0);
        __decorate([
            core.HostListener('@menuLeave.done', ['$event'])
        ], LyMenu.prototype, "endAnimation", null);
        LyMenu = __decorate([
            core.Component({
                selector: 'ly-menu',
                animations: __spread(ANIMATIONS),
                template: "<div #container\n  [class]=\"classes.container\"\n  [@menuEnter]=\"'in'\">\n  <ng-content></ng-content>\n</div>",
                exportAs: 'lyMenu'
            })
        ], LyMenu);
        return LyMenu;
    }());
    var LyMenuItem = /** @class */ (function () {
        function LyMenuItem(_menu, el, renderer) {
            this._menu = _menu;
            renderer.addClass(el.nativeElement, _menu.classes.item);
        }
        LyMenuItem.prototype._click = function () {
            if (this._menu.ref && this._menu.ref._menuRef) {
                this._menu.ref.closeMenu();
            }
        };
        LyMenuItem.ctorParameters = function () { return [
            { type: LyMenu, decorators: [{ type: core.Optional }] },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.HostListener('click')
        ], LyMenuItem.prototype, "_click", null);
        LyMenuItem = __decorate([
            core.Directive({
                selector: '[ly-menu-item]'
            }),
            __param(0, core.Optional())
        ], LyMenuItem);
        return LyMenuItem;
    }());
    var LyMenuTriggerFor = /** @class */ (function () {
        function LyMenuTriggerFor(elementRef, overlay) {
            this.elementRef = elementRef;
            this.overlay = overlay;
            this._menuOpen = false;
            this.menuOpened = new core.EventEmitter();
            this.menuClosed = new core.EventEmitter();
        }
        Object.defineProperty(LyMenuTriggerFor.prototype, "menuOpen", {
            /** Whether the menu is open. */
            get: function () {
                return this._menuOpen;
            },
            enumerable: true,
            configurable: true
        });
        LyMenuTriggerFor.prototype.ngOnDestroy = function () {
            // Not force destruction if it is already being destroyed
            if (!this._destroying) {
                this.closeMenu();
            }
        };
        LyMenuTriggerFor.prototype._handleClick = function () {
            this.toggleMenu();
        };
        /** Opens the menu */
        LyMenuTriggerFor.prototype.openMenu = function () {
            if (!this._menuRef) {
                this._menuRef = this.overlay.create(this.lyMenuTriggerFor, {
                    $implicit: this
                }, {
                    styles: {
                        top: 0,
                        left: 0,
                        pointerEvents: null
                    },
                    fnDestroy: this.detach.bind(this),
                    hasBackdrop: false
                });
            }
        };
        /** Closes the menu */
        LyMenuTriggerFor.prototype.closeMenu = function () {
            this.detach();
        };
        /** Toggle menu */
        LyMenuTriggerFor.prototype.toggleMenu = function () {
            if (this._menuRef) {
                this.closeMenu();
            }
            else {
                this.openMenu();
            }
        };
        /** @docs-private */
        LyMenuTriggerFor.prototype.detach = function () {
            if (this._menuRef) {
                this._destroying = true;
                this._menuRef.detach();
            }
        };
        /** @docs-private */
        LyMenuTriggerFor.prototype.destroy = function () {
            var _this = this;
            if (this._menuRef) {
                this.menuClosed.emit(null);
                this._menuRef.remove();
                this._menuRef = null;
                this._destroying = false;
                Promise.resolve(null).then(function () { return _this._menuOpen = false; });
            }
        };
        LyMenuTriggerFor.prototype._getHostElement = function () {
            return this.elementRef.nativeElement;
        };
        LyMenuTriggerFor.prototype._setMenuOpenToTrue = function () {
            this._menuOpen = true;
        };
        LyMenuTriggerFor.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: ui.LyOverlay }
        ]; };
        __decorate([
            core.Input()
        ], LyMenuTriggerFor.prototype, "lyMenuTriggerFor", void 0);
        __decorate([
            core.Output()
        ], LyMenuTriggerFor.prototype, "menuOpened", void 0);
        __decorate([
            core.Output()
        ], LyMenuTriggerFor.prototype, "menuClosed", void 0);
        LyMenuTriggerFor = __decorate([
            core.Directive({
                selector: '[lyMenuTriggerFor]',
                host: {
                    '(click)': '_handleClick()'
                },
                exportAs: 'lyMenuTriggerFor'
            })
        ], LyMenuTriggerFor);
        return LyMenuTriggerFor;
    }());

    var LyMenuModule = /** @class */ (function () {
        function LyMenuModule() {
        }
        LyMenuModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule, forms.FormsModule, ui.LyCommonModule, ui.LyOverlayModule],
                exports: [LyMenu, LyMenuItem, LyMenuTriggerFor],
                declarations: [LyMenu, LyMenuItem, LyMenuTriggerFor],
            })
        ], LyMenuModule);
        return LyMenuModule;
    }());

    exports.LyMenu = LyMenu;
    exports.LyMenuItem = LyMenuItem;
    exports.LyMenuModule = LyMenuModule;
    exports.LyMenuTriggerFor = LyMenuTriggerFor;
    exports.STYLES = STYLES;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-menu.umd.js.map
