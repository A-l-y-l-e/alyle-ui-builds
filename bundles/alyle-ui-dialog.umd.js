(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/animations'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/dialog', ['exports', '@angular/core', '@alyle/ui', '@angular/animations', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.dialog = {}), global.ng.core, global.ly.core, global.ng.animations, global.rxjs, global.ng.common));
}(this, (function (exports, core, ui, animations, rxjs, common) { 'use strict';

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

    var LyDialogRef = /** @class */ (function () {
        function LyDialogRef(_overlayRef) {
            this._overlayRef = _overlayRef;
        }
        Object.defineProperty(LyDialogRef.prototype, "afterOpened", {
            get: function () {
                return this._overlayRef.componentRef.instance._afterOpened.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDialogRef.prototype, "beforeClosed", {
            get: function () {
                return this._overlayRef.componentRef.instance._beforeClosed.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDialogRef.prototype, "afterClosed", {
            get: function () {
                return this._overlayRef.componentRef.instance._afterClosed.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyDialogRef.prototype, "result", {
            /**
             * @internal
             * @docs-private
             */
            get: function () {
                return this._result;
            },
            enumerable: true,
            configurable: true
        });
        LyDialogRef.prototype.close = function (result) {
            var dialogContainer = this._overlayRef.componentRef.instance;
            dialogContainer._beforeClosed.next(result);
            dialogContainer._beforeClosed.complete();
            dialogContainer._startClose();
            this._result = result;
        };
        LyDialogRef.ctorParameters = function () { return [
            { type: ui.LyOverlayRef }
        ]; };
        LyDialogRef = __decorate([
            core.Injectable()
        ], LyDialogRef);
        return LyDialogRef;
    }());

    /**
     * Configuration for opening a modal dialog with the LyDialog service.
     */
    var LyDialogConfig = /** @class */ (function () {
        function LyDialogConfig() {
            /**
             * Max-height of the dialog. If a number is provided, pixel units are assumed.
             * Defaults to calc(100vw - 90px)
             */
            this.maxHeight = 'calc(100vh - 64px)';
            /**
             * Max-width of the dialog. If a number is provided, pixel units are assumed.
             * Defaults to calc(100vw - 90px)
             */
            this.maxWidth = 'calc(100vw - 64px)';
            /** Whether the dialog has a backdrop. */
            this.hasBackdrop = true;
        }
        return LyDialogConfig;
    }());

    var LY_DIALOG_DATA = new core.InjectionToken('LyDialogData');

    var STYLE_PRIORITY = -2;
    /** @docs-private */
    var STYLES = function (theme, ref) {
        var dialog = ref.selectorsOf(STYLES);
        return {
            root: function () { return function (className) { return className + "{display:flex;position:relative;background-color:" + theme.background.primary.default + ";border-radius:4px;box-shadow:" + ui.shadowBuilder(12) + ";overflow:auto;}" + ui.st2c(((theme.dialog
                && theme.dialog.root
                && (theme.dialog.root instanceof ui.StyleCollection
                    ? theme.dialog.root.setTransformer(function (fn) { return fn(dialog); })
                    : theme.dialog.root(dialog)))), "" + className) + className + " > :first-child{display:flex;flex-direction:column;width:100%;}"; }; }
        };
    };
    var ɵ0 = STYLES;
    /** @docs-private */
    var LyDialogContainer = /** @class */ (function () {
        function LyDialogContainer(_appRef, _overlayRef, _theme, _el, _cd, _renderer) {
            this._appRef = _appRef;
            this._overlayRef = _overlayRef;
            this._theme = _theme;
            this._el = _el;
            this._cd = _cd;
            this._renderer = _renderer;
            /** @docs-private */
            this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
            /** @internal */
            this._afterOpened = new rxjs.Subject();
            /** @internal */
            this._beforeClosed = new rxjs.Subject();
            /** @internal */
            this._afterClosed = new rxjs.Subject();
            /**
             * State of the dialog animation.
             * @internal
             */
            this._state = 'enter';
            _renderer.addClass(_el.nativeElement, this.classes.root);
        }
        LyDialogContainer.prototype.ngOnInit = function () {
            if (this._componentFactoryOrTemplate instanceof core.TemplateRef) {
                var context = new LyDialogContext(this._newInjector);
                this._embeddedViewRef = this.viewContainerRef
                    .createEmbeddedView(this._componentFactoryOrTemplate, context);
            }
            else {
                this._componentRef = this.viewContainerRef
                    .createComponent(this._componentFactoryOrTemplate, undefined, this._newInjector);
            }
            // If exist dialogStyleBlock apply for this component, else do nothing.
            var containerClass = this._newInjector.get(LyDialogConfig).containerClass;
            if (containerClass) {
                this._renderer.addClass(this._el.nativeElement, containerClass);
            }
        };
        LyDialogContainer.prototype.ngDoCheck = function () {
            this._overlayRef.onResizeScroll();
        };
        /** @internal */
        LyDialogContainer.prototype._init = function (componentFactoryOrTemplate, newInjector) {
            this._componentFactoryOrTemplate = componentFactoryOrTemplate;
            this._newInjector = newInjector;
        };
        /**
         * Start to close, starts the dialog exit animation.
         * @internal
         */
        LyDialogContainer.prototype._startClose = function () {
            this._state = 'exit';
            this._cd.markForCheck();
        };
        LyDialogContainer.prototype._onAnimationStart = function (event) {
            if (event.toState === 'enter') {
                this._overlayRef.onResizeScroll();
            }
        };
        /** @internal */
        LyDialogContainer.prototype._onAnimationDone = function (event) {
            if (event.toState === 'exit') {
                var dialogRef = this._newInjector.get(LyDialogRef);
                this._destroy();
                this._overlayRef.destroy();
                this._afterClosed.next(dialogRef.result);
                this._afterClosed.complete();
            }
            else if (event.toState === 'enter') {
                this._afterOpened.next();
                this._afterOpened.complete();
            }
        };
        LyDialogContainer.prototype._destroy = function () {
            if (this._componentRef) {
                this._appRef.detachView(this._componentRef.hostView);
                this._componentRef.destroy();
            }
            else {
                this._appRef.detachView(this._embeddedViewRef);
                this._embeddedViewRef.detach();
                this._embeddedViewRef.destroy();
            }
        };
        /** @internal */
        LyDialogContainer.prototype._getHostElement = function () {
            return this._el.nativeElement;
        };
        LyDialogContainer.ctorParameters = function () { return [
            { type: core.ApplicationRef },
            { type: ui.LyOverlayRef },
            { type: ui.LyTheme2 },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.Renderer2 }
        ]; };
        __decorate([
            core.ViewChild(core.TemplateRef, { read: core.ViewContainerRef, static: true })
        ], LyDialogContainer.prototype, "viewContainerRef", void 0);
        LyDialogContainer = __decorate([
            core.Component({
                selector: 'ly-dialog-container',
                template: '<ng-template></ng-template>',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                animations: [
                    animations.trigger('dialogContainer', [
                        animations.state('void, exit', animations.style({ opacity: 0, transform: 'scale(0.7)' })),
                        animations.state('enter', animations.style({ transform: 'none' })),
                        animations.transition('* => enter', animations.animate('150ms cubic-bezier(0, 0, 0.2, 1)', animations.style({ transform: 'none', opacity: 1 }))),
                        animations.transition('* => void, * => exit', animations.animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', animations.style({ opacity: 0 })))
                    ])
                ],
                host: {
                    '[@dialogContainer]': '_state',
                    '(@dialogContainer.start)': '_onAnimationStart($event)',
                    '(@dialogContainer.done)': '_onAnimationDone($event)'
                }
            })
        ], LyDialogContainer);
        return LyDialogContainer;
    }());
    var LyDialogContext = /** @class */ (function () {
        function LyDialogContext(_injector) {
            this._injector = _injector;
            this.$implicit = this._injector.get(LyDialogRef);
            this.dialogRef = this._injector.get(LyDialogRef);
        }
        Object.defineProperty(LyDialogContext.prototype, "data", {
            get: function () {
                return this._injector.get(LY_DIALOG_DATA);
            },
            enumerable: true,
            configurable: true
        });
        return LyDialogContext;
    }());

    var DynamicInjector = /** @class */ (function () {
        function DynamicInjector(_newInjector, _parentInjector) {
            this._newInjector = _newInjector;
            this._parentInjector = _parentInjector;
        }
        DynamicInjector.prototype.get = function (token, notFoundValue, _flags) {
            var value = this._newInjector.get(token, notFoundValue);
            if (value) {
                return value;
            }
            return this._parentInjector.get(token, notFoundValue);
        };
        return DynamicInjector;
    }());

    var LyDialog = /** @class */ (function () {
        function LyDialog(_overlay, _componentFactoryResolver, _theme, _injector) {
            this._overlay = _overlay;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._theme = _theme;
            this._injector = _injector;
        }
        LyDialog.prototype.open = function (componentOrTemplateRef, config) {
            // merge with default config
            config = __assign({}, new LyDialogConfig(), config);
            var componentFactoryOrTemplate;
            if (componentOrTemplateRef instanceof core.TemplateRef) {
                componentFactoryOrTemplate = componentOrTemplateRef;
            }
            else {
                componentFactoryOrTemplate = this._componentFactoryResolver.resolveComponentFactory(componentOrTemplateRef);
            }
            var onReziseScroll = function () {
                // I would have used FlexBox to position, but not,
                // because it creates a blurring effect in the text
                // when the `dialog` is opened
                var dialogContainerElement = overlayRef.containerElement;
                var x = window.innerWidth / 2 - dialogContainerElement.offsetWidth / 2;
                var y = window.innerHeight / 2 - dialogContainerElement.offsetHeight / 2;
                dialogContainerElement.style.transform = "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
            };
            var overlayRef = this._overlay.create(LyDialogContainer, null, {
                styles: {
                    top: 0,
                    left: 0
                },
                hasBackdrop: config.hasBackdrop,
                onResizeScroll: onReziseScroll,
                disableClose: config.disableClose,
                backdropClass: config.backdropClass || this._theme.style(ui.STYLES_BACKDROP_DARK),
                fnDestroy: function () {
                    dialogRef.close();
                }
            });
            var instance = overlayRef.componentRef.instance;
            var dialogContainerStyle = instance._getHostElement().style;
            dialogContainerStyle.width = toPx(config.width);
            dialogContainerStyle.maxWidth = toPx(config.maxWidth);
            dialogContainerStyle.minWidth = toPx(config.minWidth);
            dialogContainerStyle.height = toPx(config.height);
            dialogContainerStyle.maxHeight = toPx(config.maxHeight);
            dialogContainerStyle.minHeight = toPx(config.minHeight);
            var providers = [
                {
                    provide: LyDialogRef,
                    useValue: new LyDialogRef(overlayRef.componentRef.injector.get(ui.LyOverlayRef))
                },
                {
                    provide: LyDialogConfig,
                    useValue: config
                }
            ];
            if (config.data != null) {
                providers.push({
                    provide: LY_DIALOG_DATA,
                    useValue: config.data
                });
            }
            var newInjector = new DynamicInjector(core.Injector.create(providers, overlayRef.componentRef.injector), this._injector);
            instance._init(componentFactoryOrTemplate, newInjector);
            var dialogRef = newInjector.get(LyDialogRef);
            return dialogRef;
        };
        LyDialog.ctorParameters = function () { return [
            { type: ui.LyOverlay },
            { type: core.ComponentFactoryResolver },
            { type: ui.LyTheme2 },
            { type: core.Injector }
        ]; };
        LyDialog = __decorate([
            core.Injectable()
        ], LyDialog);
        return LyDialog;
    }());
    /**
     * convert number to px
     */
    function toPx(val) {
        if (typeof val === 'number') {
            return val + "px";
        }
        else if (val) {
            return val;
        }
        return null;
    }

    /** @docs-private */
    var STYLE_PRIORITY$1 = -2;
    /** @docs-private */
    var STYLES_DIALOG_TITLE = function (theme) { return function (className) { return className + "{display:block;flex:0 0 auto;margin:20px 0 16px;padding:0 24px;font-size:20px;line-height:24px;font-weight:500;font-family:" + theme.typography.fontFamily + ";}"; }; };
    var ɵ0$1 = STYLES_DIALOG_TITLE;
    var LyDialogTitle = /** @class */ (function () {
        function LyDialogTitle(_renderer, _el, _theme) {
            this._renderer = _renderer;
            this._el = _el;
            this._theme = _theme;
        }
        LyDialogTitle.prototype.ngOnInit = function () {
            this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_TITLE, STYLE_PRIORITY$1));
        };
        LyDialogTitle.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: ui.LyTheme2 }
        ]; };
        LyDialogTitle = __decorate([
            core.Directive({
                selector: '[ly-dialog-title], [lyDialogTitle]',
                exportAs: 'lyDialogTitle'
            })
        ], LyDialogTitle);
        return LyDialogTitle;
    }());

    /** @docs-private */
    var STYLE_PRIORITY$2 = -2;
    /** @docs-private */
    var STYLES_DIALOG_CONTENT = function () { return function (className) { return className + "{display:block;overflow-y:auto;flex:1 1 auto;padding:0 24px 24px;-webkit-overflow-scrolling:touch;}"; }; };
    var ɵ0$2 = STYLES_DIALOG_CONTENT;
    var LyDialogContent = /** @class */ (function () {
        function LyDialogContent(_renderer, _el, _theme) {
            this._renderer = _renderer;
            this._el = _el;
            this._theme = _theme;
        }
        LyDialogContent.prototype.ngOnInit = function () {
            this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_CONTENT, STYLE_PRIORITY$2));
        };
        LyDialogContent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: ui.LyTheme2 }
        ]; };
        LyDialogContent = __decorate([
            core.Directive({
                selector: 'ly-dialog-content, [ly-dialog-content], [lyDialogContent]',
                exportAs: 'lyDialogContent'
            })
        ], LyDialogContent);
        return LyDialogContent;
    }());

    /** @docs-private */
    var STYLE_PRIORITY$3 = -2;
    /** @docs-private */
    var STYLES_DIALOG_ACTIONS = function () { return function (className) { return className + "{display:flex;flex:0 0 auto;padding:8px;flex-wrap:wrap;min-height:52px;align-items:center;}"; }; };
    var ɵ0$3 = STYLES_DIALOG_ACTIONS;
    var LyDialogActions = /** @class */ (function () {
        function LyDialogActions(_renderer, _el, _theme) {
            this._renderer = _renderer;
            this._el = _el;
            this._theme = _theme;
        }
        LyDialogActions.prototype.ngOnInit = function () {
            this._renderer.addClass(this._el.nativeElement, this._theme.renderStyle(STYLES_DIALOG_ACTIONS, STYLE_PRIORITY$3));
        };
        LyDialogActions.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: ui.LyTheme2 }
        ]; };
        LyDialogActions = __decorate([
            core.Directive({
                selector: 'ly-dialog-actions, [ly-dialog-actions], [lyDialogActions]',
                exportAs: 'lyDialogActions'
            })
        ], LyDialogActions);
        return LyDialogActions;
    }());

    var LyDialogModule = /** @class */ (function () {
        function LyDialogModule() {
        }
        LyDialogModule = __decorate([
            core.NgModule({
                entryComponents: [
                    LyDialogContainer
                ],
                declarations: [
                    LyDialogContainer,
                    LyDialogTitle,
                    LyDialogContent,
                    LyDialogActions
                ],
                imports: [
                    common.CommonModule,
                    ui.LyCommonModule,
                    ui.LyOverlayModule
                ],
                exports: [
                    ui.LyCommonModule,
                    LyDialogContainer,
                    LyDialogTitle,
                    LyDialogContent,
                    LyDialogActions
                ],
                providers: [
                    LyDialog
                ]
            })
        ], LyDialogModule);
        return LyDialogModule;
    }());

    exports.LY_DIALOG_DATA = LY_DIALOG_DATA;
    exports.LyDialog = LyDialog;
    exports.LyDialogModule = LyDialogModule;
    exports.LyDialogRef = LyDialogRef;
    exports.ɵa = LyDialogContainer;
    exports.ɵb = LyDialogTitle;
    exports.ɵc = LyDialogContent;
    exports.ɵd = LyDialogActions;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=alyle-ui-dialog.umd.js.map
