(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('@angular/platform-browser'), require('@alyle/ui'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon', ['exports', '@angular/core', '@angular/common/http', '@angular/common', '@angular/platform-browser', '@alyle/ui', 'rxjs/operators'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.icon = {}),global.ng.core,global.ng.common.http,global.ng.common,global.ng.platformBrowser,global.ly.core,global.rxjs.operators));
}(this, (function (exports,i0,i1,i3,i2,i4,operators) { 'use strict';

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /**
     * The following styles will never be updated
     * @type {?}
     */
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
             * \@docs-private
             */
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            this.defaultSvgIcon = this._textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>');
        }
        Object.defineProperty(LyIconService.prototype, "defaultClass", {
            get: /**
             * @return {?}
             */ function () {
                return this._defaultClass;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyIconService.prototype, "defaultClassPrefix", {
            get: /**
             * @return {?}
             */ function () {
                return this._defaultClassPrefix;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} key
         * @param {?} url
         * @return {?}
         */
        LyIconService.prototype.setSvg = /**
         * @param {?} key
         * @param {?} url
         * @return {?}
         */
            function (key, url) {
                var _this = this;
                if (!this.svgMap.has(key)) {
                    /** @type {?} */
                    var urlSanitized = this._sanitizer.sanitize(i0.SecurityContext.RESOURCE_URL, url);
                    /** @type {?} */
                    var svgIcon_1 = {
                        obs: this.http.get(urlSanitized + ".svg", { responseType: 'text' })
                            .pipe(operators.share(), operators.map(function (svgText) {
                            if (svgIcon_1.svg) {
                                return svgIcon_1.svg;
                            }
                            /** @type {?} */
                            var svg = _this._textToSvg(svgText);
                            _this._cacheSvgIcon(svg, key);
                            return svg;
                        }))
                    };
                    this.svgMap.set(key, svgIcon_1);
                }
            };
        /**
         * @param {?} key
         * @param {?} literal
         * @return {?}
         */
        LyIconService.prototype.addSvgIconLiteral = /**
         * @param {?} key
         * @param {?} literal
         * @return {?}
         */
            function (key, literal) {
                if (!this.svgMap.has(key)) {
                    /** @type {?} */
                    var sanitizedLiteral = this._sanitizer.sanitize(i0.SecurityContext.HTML, literal);
                    /** @type {?} */
                    var svg = this._textToSvg(sanitizedLiteral);
                    this.svgMap.set(key, {
                        svg: svg
                    });
                }
            };
        /**
         * @param {?} str
         * @return {?}
         */
        LyIconService.prototype._textToSvg = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
                /** @type {?} */
                var div = this._document.createElement('DIV');
                div.innerHTML = str;
                /** @type {?} */
                var svg = ( /** @type {?} */(div.querySelector('svg')));
                return svg;
            };
        /**
         * @param {?} svg
         * @param {?} key
         * @return {?}
         */
        LyIconService.prototype._cacheSvgIcon = /**
         * @param {?} svg
         * @param {?} key
         * @return {?}
         */
            function (svg, key) {
                /** @type {?} */
                var svgIconInfo = this.svgMap.get(key);
                if (!svgIconInfo.svg) {
                    this.svgMap.get(key).svg = svg;
                }
            };
        /**
         * @param {?} key
         * @return {?}
         */
        LyIconService.prototype.getSvg = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
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
        /**
         * Set default className for `ly-icon`
         * @param {?} className class name
         * @param {?=} prefix Class prefix,
         * For example if you use FontAwesome your prefix would be `fa-`,
         * then in the template it is no longer necessary to use the prefix
         * Example: `<ly-icon fontIcon="alarm">`
         * @return {?}
         */
        LyIconService.prototype.setDefaultClass = /**
         * Set default className for `ly-icon`
         * @param {?} className class name
         * @param {?=} prefix Class prefix,
         * For example if you use FontAwesome your prefix would be `fa-`,
         * then in the template it is no longer necessary to use the prefix
         * Example: `<ly-icon fontIcon="alarm">`
         * @return {?}
         */
            function (className, prefix) {
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
        /**
         * Register new font class alias
         * demo:
         * For FontAwesome
         * registerFontClass({
         *   key: 'fa',
         *   class: 'fa'
         *   prefix: 'fa-'
         * })
         * @param {?} opt
         * @return {?}
         */
        LyIconService.prototype.registerFontClass = /**
         * Register new font class alias
         * demo:
         * For FontAwesome
         * registerFontClass({
         *   key: 'fa',
         *   class: 'fa'
         *   prefix: 'fa-'
         * })
         * @param {?} opt
         * @return {?}
         */
            function (opt) {
                this._fontClasses.set(opt.key, opt);
            };
        /**
         * @param {?} key
         * @return {?}
         */
        LyIconService.prototype.getFontClass = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this._fontClasses.get(key);
            };
        LyIconService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LyIconService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.DomSanitizer },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i3.DOCUMENT,] }] },
                { type: i4.LyTheme2 }
            ];
        };
        /** @nocollapse */ LyIconService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.inject(i1.HttpClient), i0.inject(i2.DomSanitizer), i0.inject(i3.DOCUMENT, 8), i0.inject(i4.LyTheme2)); }, token: LyIconService, providedIn: "root" });
        return LyIconService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY$1 = -2;
    /**
     * \@docs-private
     */
    var /**
     * \@docs-private
     */ LyIconBase = /** @class */ (function () {
        function LyIconBase(_theme) {
            this._theme = _theme;
        }
        return LyIconBase;
    }());
    /**
     * \@docs-private
     * @type {?}
     */
    var LyIconMixinBase = i4.mixinStyleUpdater(i4.mixinBg(i4.mixinColor(i4.mixinRaised(i4.mixinOutlined(i4.mixinElevation(i4.mixinShadowColor(LyIconBase)))))));
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
            get: /**
             * @return {?}
             */ function () {
                return this._icon;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._icon = val;
                if (i4.Platform.isBrowser) {
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
            get: /**
             * @return {?}
             */ function () {
                return this._fontSet;
            },
            set: /**
             * @param {?} key
             * @return {?}
             */ function (key) {
                this._fontSet = key;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyIcon.prototype, "fontIcon", {
            get: /**
             * @return {?}
             */ function () {
                return this._fontIcon;
            },
            set: /**
             * @param {?} key
             * @return {?}
             */ function (key) {
                this._fontIcon = key;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyIcon.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.fontSet || this.fontIcon) {
                    this._updateFontClass();
                }
                this.updateStyle(this._el);
            };
        /**
         * @return {?}
         */
        LyIcon.prototype._isDefault = /**
         * @return {?}
         */
            function () {
                return !(this.icon || this.fontSet);
            };
        /**
         * @param {?} svgIcon
         * @return {?}
         */
        LyIcon.prototype._prepareSvgIcon = /**
         * @param {?} svgIcon
         * @return {?}
         */
            function (svgIcon) {
                var _this = this;
                if (svgIcon.svg) {
                    this._appendChild(( /** @type {?} */(svgIcon.svg.cloneNode(true))));
                }
                else {
                    svgIcon.obs
                        .pipe(operators.take(1))
                        .subscribe(function (svgElement) {
                        _this._appendChild(( /** @type {?} */(svgElement.cloneNode(true))));
                    });
                }
            };
        /**
         * @param {?} svg
         * @return {?}
         */
        LyIcon.prototype._appendChild = /**
         * @param {?} svg
         * @return {?}
         */
            function (svg) {
                this._cleanIcon();
                this._iconElement = svg;
                this._renderer.addClass(svg, this.iconService.classes.svg);
                this._renderer.appendChild(this._el.nativeElement, svg);
            };
        /**
         * @return {?}
         */
        LyIcon.prototype._appendDefaultSvgIcon = /**
         * @return {?}
         */
            function () {
                this._appendChild(this.iconService.defaultSvgIcon);
            };
        /**
         * @return {?}
         */
        LyIcon.prototype._updateClass = /**
         * @return {?}
         */
            function () {
                if (this._isDefault()) {
                    this._renderer.addClass(this._el.nativeElement, this.iconService.defaultClass);
                }
            };
        /**
         * @return {?}
         */
        LyIcon.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._updateClass();
                this._theme.addStyle('lyIconRoot', function (theme) {
                    return ("font-size:" + theme.icon.fontSize + ";" +
                        "width:1em;" +
                        "position:relative;" +
                        "height:1em;" +
                        "display:inline-flex;" +
                        "-webkit-box-sizing: content-box;" +
                        "-moz-box-sizing: content-box;" +
                        "box-sizing: content-box;");
                }, this._el.nativeElement, undefined, STYLE_PRIORITY$1);
            };
        /**
         * @return {?}
         */
        LyIcon.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._cleanIcon();
            };
        /**
         * run only browser
         * remove current icon
         */
        /**
         * run only browser
         * remove current icon
         * @return {?}
         */
        LyIcon.prototype._cleanIcon = /**
         * run only browser
         * remove current icon
         * @return {?}
         */
            function () {
                /** @type {?} */
                var icon = this._iconElement;
                if (icon) {
                    this._renderer.removeChild(this._el.nativeElement, icon);
                    this._iconElement = null;
                }
            };
        /**
         * @return {?}
         */
        LyIcon.prototype._updateFontClass = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var currentClass = this._currentClass;
                /** @type {?} */
                var fontSetKey = this.fontSet;
                /** @type {?} */
                var icon = this.fontIcon;
                /** @type {?} */
                var el = this._el.nativeElement;
                /** @type {?} */
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
                this._currentClass = "" + iconClass.prefix + icon;
                this._renderer.addClass(el, this._currentClass);
            };
        LyIcon.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-icon',
                        inputs: [
                            'bg',
                            'color',
                            'raised',
                            'outlined',
                            'elevation',
                            'shadowColor',
                        ],
                    },] }
        ];
        /** @nocollapse */
        LyIcon.ctorParameters = function () {
            return [
                { type: LyIconService },
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i4.LyTheme2 }
            ];
        };
        LyIcon.propDecorators = {
            icon: [{ type: i0.Input }],
            fontSet: [{ type: i0.Input }],
            fontIcon: [{ type: i0.Input }]
        };
        return LyIcon;
    }(LyIconMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyIconModule = /** @class */ (function () {
        function LyIconModule() {
        }
        LyIconModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [LyIcon],
                        exports: [LyIcon, i4.LyCommonModule]
                    },] }
        ];
        return LyIconModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LyIconModule = LyIconModule;
    exports.LyIconService = LyIconService;
    exports.LyIconBase = LyIconBase;
    exports.LyIconMixinBase = LyIconMixinBase;
    exports.LyIcon = LyIcon;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-icon.umd.js.map