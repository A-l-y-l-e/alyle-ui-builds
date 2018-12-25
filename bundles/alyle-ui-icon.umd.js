(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('rxjs/operators'), require('@alyle/ui'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon', ['exports', '@angular/core', '@angular/common/http', '@angular/common', 'rxjs/operators', '@alyle/ui', '@angular/platform-browser'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.icon = {}),global.ng.core,global.ng.common.http,global.ng.common,global.rxjs.operators,global.ly.core,global.ng.platformBrowser));
}(this, (function (exports,i0,i1,i3,operators,i4,i2) { 'use strict';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9pY29uL2ljb24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uL2ljb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFNhZmVIdG1sLCBEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvbnRDbGFzc09wdGlvbnMge1xuICBrZXk6IHN0cmluZztcbiAgLyoqIENsYXNzIG5hbWUgKi9cbiAgY2xhc3M/OiBzdHJpbmc7XG4gIC8qKiBGcmVmaXggY2xhc3MgKi9cbiAgcHJlZml4Pzogc3RyaW5nO1xufVxuXG4vKiogVGhlIGZvbGxvd2luZyBzdHlsZXMgd2lsbCBuZXZlciBiZSB1cGRhdGVkICovXG5jb25zdCBzdHlsZXMgPSB7XG4gIHN2Zzoge1xuICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvbiB7XG4gIG9icz86IE9ic2VydmFibGU8U1ZHRWxlbWVudD47XG4gIHN2Zz86IFNWR0VsZW1lbnQ7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvblNlcnZpY2Uge1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3MgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3NQcmVmaXg6IHN0cmluZztcbiAgcHJpdmF0ZSBzdmdNYXAgPSBuZXcgTWFwPHN0cmluZywgU3ZnSWNvbj4oKTtcbiAgcHJpdmF0ZSBfZm9udENsYXNzZXMgPSBuZXcgTWFwPHN0cmluZywgRm9udENsYXNzT3B0aW9ucz4oKTtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICByZWFkb25seSBkZWZhdWx0U3ZnSWNvbjogU1ZHRWxlbWVudDtcbiAgZ2V0IGRlZmF1bHRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENsYXNzO1xuICB9XG4gIGdldCBkZWZhdWx0Q2xhc3NQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDbGFzc1ByZWZpeDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoaXMuZGVmYXVsdFN2Z0ljb24gPSB0aGlzLl90ZXh0VG9TdmcoJzxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIj48L2NpcmNsZT48L3N2Zz4nKTtcbiAgfVxuXG4gIHNldFN2ZyhrZXk6IHN0cmluZywgdXJsOiBTYWZlUmVzb3VyY2VVcmwpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCB1cmxTYW5pdGl6ZWQgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgdXJsKTtcbiAgICAgIGNvbnN0IHN2Z0ljb246IFN2Z0ljb24gPSB7XG4gICAgICAgIG9iczogdGhpcy5odHRwLmdldChgJHt1cmxTYW5pdGl6ZWR9LnN2Z2AsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgICBtYXAoc3ZnVGV4dCA9PiB7XG4gICAgICAgICAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN2Z0ljb24uc3ZnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fdGV4dFRvU3ZnKHN2Z1RleHQpO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVTdmdJY29uKHN2Zywga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBzdmc7XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LCBzdmdJY29uKTtcbiAgICB9XG4gIH1cblxuICBhZGRTdmdJY29uTGl0ZXJhbChrZXk6IHN0cmluZywgbGl0ZXJhbDogU2FmZUh0bWwpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRMaXRlcmFsID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBsaXRlcmFsKTtcbiAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3RleHRUb1N2ZyhzYW5pdGl6ZWRMaXRlcmFsKTtcbiAgICAgIHRoaXMuc3ZnTWFwLnNldChrZXksIHtcbiAgICAgICAgc3ZnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90ZXh0VG9Tdmcoc3RyOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gc3RyO1xuICAgIGNvbnN0IHN2ZyA9IGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKSBhcyBTVkdFbGVtZW50O1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBwcml2YXRlIF9jYWNoZVN2Z0ljb24oc3ZnOiBTVkdFbGVtZW50LCBrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IHN2Z0ljb25JbmZvID0gdGhpcy5zdmdNYXAuZ2V0KGtleSk7XG4gICAgaWYgKCFzdmdJY29uSW5mby5zdmcpIHtcbiAgICAgIHRoaXMuc3ZnTWFwLmdldChrZXkpLnN2ZyA9IHN2ZztcbiAgICB9XG4gIH1cblxuICBnZXRTdmcoa2V5OiBzdHJpbmcpOiBTdmdJY29uIHtcbiAgICByZXR1cm4gdGhpcy5zdmdNYXAuZ2V0KGtleSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBkZWZhdWx0IGNsYXNzTmFtZSBmb3IgYGx5LWljb25gXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgY2xhc3MgbmFtZVxuICAgKiBAcGFyYW0gcHJlZml4IENsYXNzIHByZWZpeCxcbiAgICogRm9yIGV4YW1wbGUgaWYgeW91IHVzZSBGb250QXdlc29tZSB5b3VyIHByZWZpeCB3b3VsZCBiZSBgZmEtYCxcbiAgICogdGhlbiBpbiB0aGUgdGVtcGxhdGUgaXQgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeSB0byB1c2UgdGhlIHByZWZpeFxuICAgKiBFeGFtcGxlOiBgPGx5LWljb24gZm9udEljb249XCJhbGFybVwiPmBcbiAgICovXG4gIHNldERlZmF1bHRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyB8IG51bGwsIHByZWZpeD86IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRDbGFzcyA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLl9kZWZhdWx0Q2xhc3NQcmVmaXggPSBwcmVmaXg7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgbmV3IGZvbnQgY2xhc3MgYWxpYXNcbiAgICogZGVtbzpcbiAgICogRm9yIEZvbnRBd2Vzb21lXG4gICAqIHJlZ2lzdGVyRm9udENsYXNzKHtcbiAgICogICBrZXk6ICdmYScsXG4gICAqICAgY2xhc3M6ICdmYSdcbiAgICogICBwcmVmaXg6ICdmYS0nXG4gICAqIH0pXG4gICAqL1xuICByZWdpc3RlckZvbnRDbGFzcyhvcHQ6IEZvbnRDbGFzc09wdGlvbnMpIHtcbiAgICB0aGlzLl9mb250Q2xhc3Nlcy5zZXQob3B0LmtleSwgb3B0KTtcbiAgfVxuXG4gIGdldEZvbnRDbGFzcyhrZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9mb250Q2xhc3Nlcy5nZXQoa2V5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb250Q2xhc3NPcHRpb25zLCBMeUljb25TZXJ2aWNlLCBTdmdJY29uIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIG1peGluQmcsXG4gIG1peGluQ29sb3IsXG4gIG1peGluRWxldmF0aW9uLFxuICBtaXhpbk91dGxpbmVkLFxuICBtaXhpblJhaXNlZCxcbiAgbWl4aW5TaGFkb3dDb2xvcixcbiAgbWl4aW5TdHlsZVVwZGF0ZXIsXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlc1xuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNsYXNzIEx5SWNvbkJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGNvbnN0IEx5SWNvbk1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoTHlJY29uQmFzZSkpKSkpKSk7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktaWNvbicsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbiBleHRlbmRzIEx5SWNvbk1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvbnRTZXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfcHJldmlvdXNGb250U2V0OiBGb250Q2xhc3NPcHRpb25zO1xuICBwcml2YXRlIF9jdXJyZW50Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZm9udEljb246IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbkVsZW1lbnQ6IFNWR0VsZW1lbnQ7XG5cbiAgQElucHV0KClcbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgc2V0IGljb24odmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBlbmREZWZhdWx0U3ZnSWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBmb250U2V0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRTZXQ7XG4gIH1cbiAgc2V0IGZvbnRTZXQoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb250U2V0ID0ga2V5O1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGZvbnRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRJY29uO1xuICB9XG4gIHNldCBmb250SWNvbihrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvbnRJY29uID0ga2V5O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpY29uU2VydmljZTogTHlJY29uU2VydmljZSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmZvbnRTZXQgfHwgdGhpcy5mb250SWNvbikge1xuICAgICAgdGhpcy5fdXBkYXRlRm9udENsYXNzKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNEZWZhdWx0KCkge1xuICAgIHJldHVybiAhKHRoaXMuaWNvbiB8fCB0aGlzLmZvbnRTZXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJlcGFyZVN2Z0ljb24oc3ZnSWNvbjogU3ZnSWNvbikge1xuICAgIGlmIChzdmdJY29uLnN2Zykge1xuICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnSWNvbi5zdmcuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdmdJY29uLm9ic1xuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlKDEpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoc3ZnRWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0VsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDaGlsZChzdmc6IFNWR0VsZW1lbnQpIHtcbiAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgICB0aGlzLl9pY29uRWxlbWVudCA9IHN2ZztcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhzdmcsIHRoaXMuaWNvblNlcnZpY2UuY2xhc3Nlcy5zdmcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHN2Zyk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmREZWZhdWx0U3ZnSWNvbigpIHtcbiAgICB0aGlzLl9hcHBlbmRDaGlsZCh0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRTdmdJY29uKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNsYXNzKCkge1xuICAgIGlmICh0aGlzLl9pc0RlZmF1bHQoKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uU2VydmljZS5kZWZhdWx0Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2x5SWNvblJvb3QnLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoXG4gICAgICBgZm9udC1zaXplOiR7dGhlbWUuaWNvbi5mb250U2l6ZX07YCArXG4gICAgICBgd2lkdGg6MWVtO2AgK1xuICAgICAgYHBvc2l0aW9uOnJlbGF0aXZlO2AgK1xuICAgICAgYGhlaWdodDoxZW07YCArXG4gICAgICBgZGlzcGxheTppbmxpbmUtZmxleDtgICtcbiAgICAgIGAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O2AgK1xuICAgICAgYC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7YCArXG4gICAgICBgYm94LXNpemluZzogY29udGVudC1ib3g7YFxuICAgICksIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gIH1cblxuICAvKipcbiAgICogcnVuIG9ubHkgYnJvd3NlclxuICAgKiByZW1vdmUgY3VycmVudCBpY29uXG4gICAqL1xuICBwcml2YXRlIF9jbGVhbkljb24oKSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuX2ljb25FbGVtZW50O1xuICAgIGlmIChpY29uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBpY29uKTtcbiAgICAgIHRoaXMuX2ljb25FbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVGb250Q2xhc3MoKSB7XG5cbiAgICBjb25zdCBjdXJyZW50Q2xhc3MgPSB0aGlzLl9jdXJyZW50Q2xhc3M7XG4gICAgY29uc3QgZm9udFNldEtleSA9IHRoaXMuZm9udFNldDtcbiAgICBjb25zdCBpY29uID0gdGhpcy5mb250SWNvbjtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaWNvbkNsYXNzID0gdGhpcy5pY29uU2VydmljZS5nZXRGb250Q2xhc3MoZm9udFNldEtleSk7XG4gICAgaWYgKGN1cnJlbnRDbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGN1cnJlbnRDbGFzcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcmV2aW91c0ZvbnRTZXQpIHtcbiAgICAgIGlmICh0aGlzLl9wcmV2aW91c0ZvbnRTZXQuY2xhc3MpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIHRoaXMuX3ByZXZpb3VzRm9udFNldC5jbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpY29uQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzRm9udFNldCA9IGljb25DbGFzcztcbiAgICB9IGVsc2Uge1xuICAgICAgRXJyb3IoYEljb24gd2l0aCBrZXkke2ZvbnRTZXRLZXl9IG5vdCBmb3VuZGApO1xuICAgIH1cbiAgICB0aGlzLl9jdXJyZW50Q2xhc3MgPSBgJHtpY29uQ2xhc3MucHJlZml4fSR7aWNvbn1gO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsLCB0aGlzLl9jdXJyZW50Q2xhc3MpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlJY29uIH0gZnJvbSAnLi9pY29uJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlJY29uXSxcbiAgZXhwb3J0czogW0x5SWNvbiwgTHlDb21tb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJTZWN1cml0eUNvbnRleHQiLCJzaGFyZSIsIm1hcCIsIkluamVjdGFibGUiLCJIdHRwQ2xpZW50IiwiRG9tU2FuaXRpemVyIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJET0NVTUVOVCIsIkx5VGhlbWUyIiwiU1RZTEVfUFJJT1JJVFkiLCJtaXhpblN0eWxlVXBkYXRlciIsIm1peGluQmciLCJtaXhpbkNvbG9yIiwibWl4aW5SYWlzZWQiLCJtaXhpbk91dGxpbmVkIiwibWl4aW5FbGV2YXRpb24iLCJtaXhpblNoYWRvd0NvbG9yIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJQbGF0Zm9ybSIsInRha2UiLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkx5Q29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FB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