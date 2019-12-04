(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('rxjs'), require('@angular/common'), require('@angular/animations'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/expansion', ['exports', '@angular/core', '@alyle/ui', 'rxjs', '@angular/common', '@angular/animations', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.expansion = {}), global.ng.core, global.ly.core, global.rxjs, global.ng.common, global.ng.animations, global.rxjs.operators));
}(this, (function (exports, core, ui, rxjs, common, animations, operators) { 'use strict';

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

    var STYLE_PRIORITY = -0.9;
    var STYLES = function (theme, ref) {
        var classes = ref.selectorsOf(STYLES);
        var after = theme.after;
        return {
            $priority: STYLE_PRIORITY,
            $name: LyAccordion.и,
            $global: function () { return function (className) { return className + " " + classes.panelTitle + "," + className + " " + classes.panelDescription + "{display:flex;margin-" + after + ":16px;}" + className + " " + classes.panel + ":not(" + classes.disabled + ") " + classes.panelTitle + "{color:" + theme.text.default + ";}" + className + " " + classes.panel + ":not(" + classes.disabled + ") " + classes.panelDescription + "{color:" + theme.text.secondary + ";}"; }; },
            root: (theme.expansion && theme.expansion.root) ? function () { return theme.expansion.root(classes); } : null,
            panel: function () { return function (className) { return className + "{display:block;overflow:hidden;position:relative;}" + className + ":not(" + classes.disabled + ") " + classes.panelHeader + "{cursor:pointer;}"; }; },
            panelHeader: function () { return function (className) { return className + "{display:flex;position:relative;flex-direction:row;align-items:center;padding:0 24px;transition:height " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard + ";font-family:" + theme.typography.fontFamily + ";font-size:" + theme.pxToRem(15) + ";font-weight:400;}" + classes.panel + ":not(" + classes.expanded + "):not(" + classes.disabled + ") " + className + ":hover{background:" + theme.hover + ";}@media (hover: none){" + classes.panel + ":not(" + classes.expanded + "):not(" + classes.disabled + ") " + className + ":hover{background:none;}}"; }; },
            panelHeaderContent: function (className) { return className + "{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden;}"; },
            panelContent: function (className) { return className + "{display:flex;flex-direction:column;overflow:visible;}"; },
            panelBody: function (className) { return className + "{visibility:hidden;padding:0 24px 16px;transition:visibility " + theme.animations.durations.entering + "ms " + theme.animations.curves.standard + ";font-family:" + theme.typography.fontFamily + ";font-size:" + theme.pxToRem(14) + ";font-weight:400;line-height:" + theme.pxToRem(20) + ";}"; },
            panelTitle: function (className) { return className + "{flex-grow:1;}"; },
            panelDescription: function (className) { return className + "{flex-grow:2;}"; },
            panelActionRow: function (className) { return className + "{border-top:1px solid " + theme.divider + ";display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;}"; },
            expanded: function () { return function (className) { return className + " " + classes.panelBody + "{visibility:visible;}"; }; },
            disabled: function (className) { return className + "{color:" + theme.disabled.contrast + ";}"; }
        };
    };
    var LyAccordion = /** @class */ (function () {
        function LyAccordion(_theme, _renderer, _el) {
            this._theme = _theme;
            this._renderer = _renderer;
            this._el = _el;
            /** @docs-private */
            this.classes = this._theme.addStyleSheet(STYLES);
            this._hasToggle = true;
            /** Stream that emits true/false when openAll/closeAll is triggered. */
            this._openCloseAllActions = new rxjs.Subject();
        }
        Object.defineProperty(LyAccordion.prototype, "appearance", {
            get: function () {
                return this._appearance;
            },
            set: function (val) {
                this._appearance = val;
                this._appearanceClass = this._theme.addStyle("lyAccordion.appearance:" + val, function (theme, ref) {
                    if (!(theme.expansion.appearance && theme.expansion.appearance[val])) {
                        throw new Error("Value expansion.appearance['" + val + "'] not found in ThemeVariables");
                    }
                    var classes = ref.selectorsOf(STYLES);
                    return theme.expansion.appearance[val](classes);
                }, this._el.nativeElement, this._appearanceClass, STYLE_PRIORITY);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyAccordion.prototype, "multiple", {
            get: function () {
                return this._multiple;
            },
            set: function (val) {
                this._multiple = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyAccordion.prototype, "hasToggle", {
            get: function () {
                return this._hasToggle;
            },
            set: function (val) {
                this._hasToggle = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        LyAccordion.prototype.ngOnInit = function () {
            var expansion = this._theme.variables.expansion;
            if (expansion) {
                this._renderer.addClass(this._el.nativeElement, this.classes.root);
                // Apply default config
                if (expansion.defaultConfig && expansion.defaultConfig.appearance) {
                    if (this.appearance == null) {
                        this.appearance = expansion.defaultConfig.appearance;
                    }
                }
            }
            else {
                throw ui.getLyThemeVariableUndefinedError('expansion');
            }
        };
        LyAccordion.prototype.closeAll = function () {
            this._openCloseAll(true);
        };
        LyAccordion.prototype.openAll = function () {
            this._openCloseAll(false);
        };
        LyAccordion.prototype._openCloseAll = function (expanded) {
            if (this.multiple) {
                this._openCloseAllActions.next(expanded);
            }
        };
        /** @docs-private */
        LyAccordion.и = 'LyAccordion';
        LyAccordion.ctorParameters = function () { return [
            { type: ui.LyTheme2 },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], LyAccordion.prototype, "appearance", null);
        __decorate([
            core.Input()
        ], LyAccordion.prototype, "multiple", null);
        __decorate([
            core.Input()
        ], LyAccordion.prototype, "hasToggle", null);
        LyAccordion = __decorate([
            core.Directive({
                selector: 'ly-accordion',
                exportAs: 'lyAccordion'
            })
        ], LyAccordion);
        return LyAccordion;
    }());

    var lyExpansionAnimations = {
        contentExpansion: animations.trigger('contentExpansion', [
            animations.state('collapsed, void', animations.style({ height: '0px', visibility: 'hidden' })),
            animations.state('expanded', animations.style({ height: '*', visibility: 'visible' })),
            animations.transition('expanded <=> collapsed, void => collapsed', animations.animate('{{panelAnimationTiming}}')),
        ])
    };

    var LyExpansionPanelContent = /** @class */ (function () {
        function LyExpansionPanelContent(_template) {
            this._template = _template;
        }
        LyExpansionPanelContent.ctorParameters = function () { return [
            { type: core.TemplateRef }
        ]; };
        LyExpansionPanelContent = __decorate([
            core.Directive({
                selector: 'ng-template[lyExpansionPanelContent]'
            })
        ], LyExpansionPanelContent);
        return LyExpansionPanelContent;
    }());

    /** @docs-private */
    var LyExpansionPanelBase = /** @class */ (function () {
        function LyExpansionPanelBase(_theme) {
            this._theme = _theme;
        }
        return LyExpansionPanelBase;
    }());
    /** @docs-private */
    var LyButtonMixinBase = ui.mixinStyleUpdater(ui.mixinBg(ui.mixinColor(ui.mixinElevation(ui.mixinShadowColor(LyExpansionPanelBase)))));
    var LyExpansionPanel = /** @class */ (function (_super) {
        __extends(LyExpansionPanel, _super);
        function LyExpansionPanel(_el, _renderer, _cd, _theme, _accordion) {
            var _this = _super.call(this, _theme) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._cd = _cd;
            _this._accordion = _accordion;
            /** @docs-private */
            _this.classes = _this._accordion.classes;
            _this._panelAnimationTiming = _this._theme.variables.animations.durations.entering + "ms " + _this._theme.variables.animations.curves.standard;
            /** Subscription to openAll/closeAll events. */
            _this._openCloseAllSubscription = rxjs.Subscription.EMPTY;
            _this._hasToggle = !!_this._accordion.hasToggle;
            /** Event emitted every time the LyExpansionPanel is closed. */
            _this.closed = new core.EventEmitter();
            /** Event emitted every time the LyExpansionPanel is opened. */
            _this.opened = new core.EventEmitter();
            /** An event emitted after the body's collapse animation happens. */
            _this.afterCollapse = new core.EventEmitter();
            /** An event emitted after the body's expansion animation happens. */
            _this.afterExpand = new core.EventEmitter();
            /** Event emitted when the LyExpansionPanel is destroyed. */
            _this.destroyed = new core.EventEmitter();
            /** Stream of body animation done events. */
            _this._bodyAnimationDone = new rxjs.Subject();
            _renderer.addClass(_el.nativeElement, _this._accordion.classes.panel);
            _this._openCloseAllSubscription = _this._subscribeToOpenCloseAllActions();
            _this._bodyAnimationDone.pipe(operators.distinctUntilChanged(function (x, y) {
                return x.fromState === y.fromState && x.toState === y.toState;
            })).subscribe(function (event) {
                if (event.fromState !== 'void') {
                    if (event.toState === 'expanded') {
                        _this.afterExpand.emit();
                    }
                    else if (event.toState === 'collapsed') {
                        _this.afterCollapse.emit();
                    }
                }
            });
            return _this;
        }
        Object.defineProperty(LyExpansionPanel.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                if (newVal !== this.disabled) {
                    this._disabled = newVal;
                    if (newVal) {
                        this._renderer.addClass(this._el.nativeElement, this._accordion.classes.disabled);
                    }
                    else {
                        this._renderer.removeClass(this._el.nativeElement, this._accordion.classes.disabled);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyExpansionPanel.prototype, "expanded", {
            get: function () {
                return this._expanded;
            },
            set: function (val) {
                var newVal = ui.toBoolean(val);
                if (newVal !== this.expanded && !this.disabled) {
                    // unselect other panels
                    if (newVal && !this._accordion.multiple) {
                        this._accordion._openCloseAllActions.next(false);
                    }
                    this._expanded = newVal;
                    if (newVal) {
                        this._renderer.addClass(this._el.nativeElement, this._accordion.classes.expanded);
                        this.opened.emit();
                    }
                    else {
                        this._renderer.removeClass(this._el.nativeElement, this._accordion.classes.expanded);
                        this.closed.emit();
                    }
                    this._cd.markForCheck();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyExpansionPanel.prototype, "hasToggle", {
            get: function () {
                return this._hasToggle == null ? this._accordion.hasToggle : this._hasToggle;
            },
            set: function (val) {
                this._hasToggle = ui.toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        LyExpansionPanel.prototype.ngOnChanges = function () {
            this.updateStyle(this._el);
        };
        LyExpansionPanel.prototype.ngOnInit = function () {
            var requireUpdate = false;
            if (this.bg == null) {
                this.bg = 'paper';
                requireUpdate = true;
            }
            if (this.color == null) {
                this.color = 'text';
                requireUpdate = true;
            }
            if (this.elevation == null) {
                this.elevation = 2;
                requireUpdate = true;
            }
            if (requireUpdate) {
                this.ngOnChanges();
            }
        };
        LyExpansionPanel.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this._lazyContent) {
                this.opened.pipe(operators.startWith(null), operators.filter(function () { return !!_this.expanded && !_this._lazyContentRef; }), operators.first()).subscribe(function () { return _this._lazyContentRef = _this._lazyContent._template; });
            }
        };
        LyExpansionPanel.prototype.ngOnDestroy = function () {
            this._openCloseAllSubscription.unsubscribe();
        };
        LyExpansionPanel.prototype.close = function () {
            this.expanded = false;
        };
        LyExpansionPanel.prototype.open = function () {
            this.expanded = true;
        };
        LyExpansionPanel.prototype.toggle = function () {
            this.expanded = !this.expanded;
        };
        /** Gets the expanded state string. */
        LyExpansionPanel.prototype._getExpandedState = function () {
            return this.expanded ? 'expanded' : 'collapsed';
        };
        LyExpansionPanel.prototype._subscribeToOpenCloseAllActions = function () {
            var _this = this;
            return this._accordion._openCloseAllActions.subscribe(function (expanded) {
                _this.expanded = expanded;
            });
        };
        LyExpansionPanel.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: ui.LyTheme2 },
            { type: LyAccordion, decorators: [{ type: core.Inject, args: [LyAccordion,] }] }
        ]; };
        __decorate([
            core.ContentChild(LyExpansionPanelContent, { static: false })
        ], LyExpansionPanel.prototype, "_lazyContent", void 0);
        __decorate([
            core.Output()
        ], LyExpansionPanel.prototype, "closed", void 0);
        __decorate([
            core.Output()
        ], LyExpansionPanel.prototype, "opened", void 0);
        __decorate([
            core.Output()
        ], LyExpansionPanel.prototype, "afterCollapse", void 0);
        __decorate([
            core.Output()
        ], LyExpansionPanel.prototype, "afterExpand", void 0);
        __decorate([
            core.Output()
        ], LyExpansionPanel.prototype, "destroyed", void 0);
        __decorate([
            core.Input()
        ], LyExpansionPanel.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], LyExpansionPanel.prototype, "expanded", null);
        __decorate([
            core.Input()
        ], LyExpansionPanel.prototype, "hasToggle", null);
        LyExpansionPanel = __decorate([
            core.Component({
                selector: 'ly-expansion-panel',
                template: "<ng-content select=\"ly-expansion-panel-header\"></ng-content>\n<div [className]=\"classes.panelContent\"\n  [@contentExpansion]=\"{\n    value: _getExpandedState(),\n    params: {\n      panelAnimationTiming: _panelAnimationTiming\n    }\n  }\"\n  (@contentExpansion.done)=\"_bodyAnimationDone.next($event)\"\n>\n  <div [className]=\"classes.panelBody\">\n    <ng-content></ng-content>\n    <ng-template [ngTransclude]=\"_lazyContentRef\"></ng-template>\n  </div>\n  <ng-content select=\"ly-action-row\"></ng-content>\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                exportAs: 'lyExpansionPanel',
                animations: [
                    lyExpansionAnimations.contentExpansion
                ],
                inputs: [
                    'bg',
                    'color',
                    'elevation',
                    'shadowColor'
                ]
            }),
            __param(4, core.Inject(LyAccordion))
        ], LyExpansionPanel);
        return LyExpansionPanel;
    }(LyButtonMixinBase));

    var LyExpansionPanelHeader = /** @class */ (function () {
        function LyExpansionPanelHeader(el, renderer, _accordion, _expansionPanel) {
            this._accordion = _accordion;
            this._expansionPanel = _expansionPanel;
            /** @docs-private */
            this.classes = this._accordion.classes;
            renderer.addClass(el.nativeElement, this._accordion.classes.panelHeader);
        }
        LyExpansionPanelHeader.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: LyAccordion, decorators: [{ type: core.Inject, args: [LyAccordion,] }] },
            { type: LyExpansionPanel, decorators: [{ type: core.Inject, args: [LyExpansionPanel,] }] }
        ]; };
        LyExpansionPanelHeader = __decorate([
            core.Component({
                selector: 'ly-expansion-panel-header',
                template: "<span [className]=\"classes.panelHeaderContent\">\n  <ng-content select=\"ly-panel-title\"></ng-content>\n  <ng-content select=\"ly-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<ly-expansion-icon\n  *ngIf=\"!_expansionPanel.disabled && _expansionPanel.hasToggle\"\n  [up]=\"_expansionPanel.expanded\"\n></ly-expansion-icon>",
                host: {
                    '(click)': '_expansionPanel.toggle()'
                }
            }),
            __param(2, core.Inject(LyAccordion)),
            __param(3, core.Inject(LyExpansionPanel))
        ], LyExpansionPanelHeader);
        return LyExpansionPanelHeader;
    }());

    var LyExpansionPanelTitle = /** @class */ (function () {
        function LyExpansionPanelTitle(el, renderer, accordion) {
            renderer.addClass(el.nativeElement, accordion.classes.panelTitle);
        }
        LyExpansionPanelTitle.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: LyAccordion, decorators: [{ type: core.Inject, args: [LyAccordion,] }] }
        ]; };
        LyExpansionPanelTitle = __decorate([
            core.Directive({
                selector: 'ly-panel-title'
            }),
            __param(2, core.Inject(LyAccordion))
        ], LyExpansionPanelTitle);
        return LyExpansionPanelTitle;
    }());

    var LyExpansionPanelDescription = /** @class */ (function () {
        function LyExpansionPanelDescription(el, renderer, accordion) {
            renderer.addClass(el.nativeElement, accordion.classes.panelDescription);
        }
        LyExpansionPanelDescription.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: LyAccordion, decorators: [{ type: core.Inject, args: [LyAccordion,] }] }
        ]; };
        LyExpansionPanelDescription = __decorate([
            core.Directive({
                selector: 'ly-panel-description'
            }),
            __param(2, core.Inject(LyAccordion))
        ], LyExpansionPanelDescription);
        return LyExpansionPanelDescription;
    }());

    var LyExpansionPanelAction = /** @class */ (function () {
        function LyExpansionPanelAction(el, renderer, accordion) {
            renderer.addClass(el.nativeElement, accordion.classes.panelActionRow);
        }
        LyExpansionPanelAction.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: LyAccordion, decorators: [{ type: core.Inject, args: [LyAccordion,] }] }
        ]; };
        LyExpansionPanelAction = __decorate([
            core.Directive({
                selector: 'ly-action-row'
            }),
            __param(2, core.Inject(LyAccordion))
        ], LyExpansionPanelAction);
        return LyExpansionPanelAction;
    }());

    var LyExpansionModule = /** @class */ (function () {
        function LyExpansionModule() {
        }
        LyExpansionModule = __decorate([
            core.NgModule({
                declarations: [
                    LyAccordion,
                    LyExpansionPanel,
                    LyExpansionPanelHeader,
                    LyExpansionPanelContent,
                    LyExpansionPanelTitle,
                    LyExpansionPanelDescription,
                    LyExpansionPanelAction
                ],
                imports: [
                    common.CommonModule,
                    ui.LyExpansionIconModule,
                    ui.NgTranscludeModule
                ],
                exports: [
                    LyAccordion,
                    LyExpansionPanel,
                    LyExpansionPanelHeader,
                    LyExpansionPanelContent,
                    LyExpansionPanelTitle,
                    LyExpansionPanelDescription,
                    LyExpansionPanelAction
                ]
            })
        ], LyExpansionModule);
        return LyExpansionModule;
    }());

    exports.LyAccordion = LyAccordion;
    exports.LyButtonMixinBase = LyButtonMixinBase;
    exports.LyExpansionModule = LyExpansionModule;
    exports.LyExpansionPanel = LyExpansionPanel;
    exports.LyExpansionPanelBase = LyExpansionPanelBase;
    exports.LyExpansionPanelContent = LyExpansionPanelContent;
    exports.LyExpansionPanelDescription = LyExpansionPanelDescription;
    exports.LyExpansionPanelHeader = LyExpansionPanelHeader;
    exports.LyExpansionPanelTitle = LyExpansionPanelTitle;
    exports.STYLES = STYLES;
    exports.ɵa = lyExpansionAnimations;
    exports.ɵb = LyExpansionPanelAction;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-expansion.umd.js.map
