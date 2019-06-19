(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@angular/common/http'), require('@angular/common'), require('rxjs/operators'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon', ['exports', '@angular/core', '@alyle/ui', '@angular/common/http', '@angular/common', 'rxjs/operators', '@angular/platform-browser'], factory) :
    (global = global || self, factory((global.ly = global.ly || {}, global.ly.icon = {}), global.ng.core, global.ly.core, global.ng.common.http, global.ng.common, global.rxjs.operators, global.ng.platformBrowser));
}(this, function (exports, core, ui, http, common, operators, platformBrowser) { 'use strict';

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
            this.defaultSvgIcon = this._textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>');
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
        LyIconService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(platformBrowser.DomSanitizer), core.ɵɵinject(common.DOCUMENT, 8), core.ɵɵinject(ui.LyTheme2)); }, token: LyIconService, providedIn: "root" });
        LyIconService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(2, core.Optional()), __param(2, core.Inject(common.DOCUMENT)),
            __metadata("design:paramtypes", [http.HttpClient,
                platformBrowser.DomSanitizer, Object, ui.LyTheme2])
        ], LyIconService);
        return LyIconService;
    }());

    var STYLE_PRIORITY$1 = -2;
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
        function LyIcon(iconService, _el, _renderer, theme) {
            var _this = _super.call(this, theme) || this;
            _this.iconService = iconService;
            _this._el = _el;
            _this._renderer = _renderer;
            _this.setAutoContrast();
            return _this;
        }
        Object.defineProperty(LyIcon.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (val) {
                this._icon = val;
                if (ui.Platform.isBrowser) {
                    this._prepareSvgIcon(this.iconService.getSvg(val));
                }
                else {
                    this._appendDefaultSvgIcon();
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
        LyIcon.prototype._appendDefaultSvgIcon = function () {
            this._appendChild(this.iconService.defaultSvgIcon);
        };
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
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyIcon.prototype, "icon", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
        ], LyIcon.prototype, "fontSet", null);
        __decorate([
            core.Input(),
            __metadata("design:type", String),
            __metadata("design:paramtypes", [String])
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
            }),
            __metadata("design:paramtypes", [LyIconService,
                core.ElementRef,
                core.Renderer2,
                ui.LyTheme2])
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

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=alyle-ui-icon.umd.js.map
