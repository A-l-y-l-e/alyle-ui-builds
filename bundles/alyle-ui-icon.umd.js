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
    /** @type {?} */
    var styles = {
        svg: {
            width: 'inherit',
            height: 'inherit',
            fill: 'currentColor',
        }
    };
    var LyIconService = /** @class */ (function () {
        function LyIconService(http, _sanitizer, document, theme) {
            this.http = http;
            this._sanitizer = _sanitizer;
            this.document = document;
            this.theme = theme;
            this._defaultClass = 'material-icons';
            this.svgMap = new Map();
            this._fontClasses = new Map();
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
                var div = this.document.createElement('DIV');
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
         * registerFontClass('fa', 'fa', 'fa-')
         * @param key
         * @param className
         * @param prefix Class prefix
         */
        /**
         * Register new font class alias
         * demo:
         * For FontAwesome
         * registerFontClass('fa', 'fa', 'fa-')
         * @param {?} opt
         * @return {?}
         */
        LyIconService.prototype.registerFontClass = /**
         * Register new font class alias
         * demo:
         * For FontAwesome
         * registerFontClass('fa', 'fa', 'fa-')
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
                    this._cleanIcon();
                    this._appendChild(( /** @type {?} */(svgIcon.svg.cloneNode(true))));
                }
                else {
                    svgIcon.obs
                        .pipe(operators.take(1))
                        .subscribe(function (svgElement) {
                        _this._cleanIcon();
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
                        "display:inline-flex;");
                }, this._el.nativeElement, undefined, STYLE_PRIORITY$1);
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
                var icon = this._el.nativeElement.querySelector('svg');
                if (icon) {
                    this._renderer.removeChild(this._el, icon);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9pY29uL2ljb24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uL2ljb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFNhZmVIdG1sLCBEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvbnRDbGFzc09wdGlvbnMge1xuICBrZXk6IHN0cmluZztcbiAgLyoqIENsYXNzIG5hbWUgKi9cbiAgY2xhc3M/OiBzdHJpbmc7XG4gIC8qKiBGcmVmaXggY2xhc3MgKi9cbiAgcHJlZml4Pzogc3RyaW5nO1xufVxuY29uc3Qgc3R5bGVzID0ge1xuICBzdmc6IHtcbiAgICB3aWR0aDogJ2luaGVyaXQnLFxuICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb24ge1xuICBvYnM/OiBPYnNlcnZhYmxlPFNWR0VsZW1lbnQ+O1xuICBzdmc/OiBTVkdFbGVtZW50O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZGVmYXVsdENsYXNzID0gJ21hdGVyaWFsLWljb25zJztcbiAgcHJpdmF0ZSBfZGVmYXVsdENsYXNzUHJlZml4OiBzdHJpbmc7XG4gIHByaXZhdGUgc3ZnTWFwID0gbmV3IE1hcDxzdHJpbmcsIFN2Z0ljb24+KCk7XG4gIHByaXZhdGUgX2ZvbnRDbGFzc2VzID0gbmV3IE1hcDxzdHJpbmcsIEZvbnRDbGFzc09wdGlvbnM+KCk7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHJlYWRvbmx5IGRlZmF1bHRTdmdJY29uOiBTVkdFbGVtZW50O1xuICBnZXQgZGVmYXVsdENsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q2xhc3M7XG4gIH1cbiAgZ2V0IGRlZmF1bHRDbGFzc1ByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENsYXNzUHJlZml4O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGlzLmRlZmF1bHRTdmdJY29uID0gdGhpcy5fdGV4dFRvU3ZnKCc8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCI+PC9jaXJjbGU+PC9zdmc+Jyk7XG4gIH1cblxuICBzZXRTdmcoa2V5OiBzdHJpbmcsIHVybDogU2FmZVJlc291cmNlVXJsKSB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgY29uc3QgdXJsU2FuaXRpemVkID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5SRVNPVVJDRV9VUkwsIHVybCk7XG4gICAgICBjb25zdCBzdmdJY29uOiBTdmdJY29uID0ge1xuICAgICAgICBvYnM6IHRoaXMuaHR0cC5nZXQoYCR7dXJsU2FuaXRpemVkfS5zdmdgLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNoYXJlKCksXG4gICAgICAgICAgbWFwKHN2Z1RleHQgPT4ge1xuICAgICAgICAgICAgaWYgKHN2Z0ljb24uc3ZnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdmdJY29uLnN2ZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3RleHRUb1N2ZyhzdmdUZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlU3ZnSWNvbihzdmcsIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gc3ZnO1xuICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICB9O1xuICAgICAgdGhpcy5zdmdNYXAuc2V0KGtleSwgc3ZnSWNvbik7XG4gICAgfVxuICB9XG5cbiAgYWRkU3ZnSWNvbkxpdGVyYWwoa2V5OiBzdHJpbmcsIGxpdGVyYWw6IFNhZmVIdG1sKSB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgY29uc3Qgc2FuaXRpemVkTGl0ZXJhbCA9IHRoaXMuX3Nhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgbGl0ZXJhbCk7XG4gICAgICBjb25zdCBzdmcgPSB0aGlzLl90ZXh0VG9Tdmcoc2FuaXRpemVkTGl0ZXJhbCk7XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LCB7XG4gICAgICAgIHN2Z1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdGV4dFRvU3ZnKHN0cjogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gc3RyO1xuICAgIGNvbnN0IHN2ZyA9IGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKSBhcyBTVkdFbGVtZW50O1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBwcml2YXRlIF9jYWNoZVN2Z0ljb24oc3ZnOiBTVkdFbGVtZW50LCBrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IHN2Z0ljb25JbmZvID0gdGhpcy5zdmdNYXAuZ2V0KGtleSk7XG4gICAgaWYgKCFzdmdJY29uSW5mby5zdmcpIHtcbiAgICAgIHRoaXMuc3ZnTWFwLmdldChrZXkpLnN2ZyA9IHN2ZztcbiAgICB9XG4gIH1cblxuICBnZXRTdmcoa2V5OiBzdHJpbmcpOiBTdmdJY29uIHtcbiAgICByZXR1cm4gdGhpcy5zdmdNYXAuZ2V0KGtleSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBkZWZhdWx0IGNsYXNzTmFtZSBmb3IgYGx5LWljb25gXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgY2xhc3MgbmFtZVxuICAgKiBAcGFyYW0gcHJlZml4IENsYXNzIHByZWZpeCxcbiAgICogRm9yIGV4YW1wbGUgaWYgeW91IHVzZSBGb250QXdlc29tZSB5b3VyIHByZWZpeCB3b3VsZCBiZSBgZmEtYCxcbiAgICogdGhlbiBpbiB0aGUgdGVtcGxhdGUgaXQgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeSB0byB1c2UgdGhlIHByZWZpeFxuICAgKiBFeGFtcGxlOiBgPGx5LWljb24gZm9udEljb249XCJhbGFybVwiPmBcbiAgICovXG4gIHNldERlZmF1bHRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyB8IG51bGwsIHByZWZpeD86IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRDbGFzcyA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLl9kZWZhdWx0Q2xhc3NQcmVmaXggPSBwcmVmaXg7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgbmV3IGZvbnQgY2xhc3MgYWxpYXNcbiAgICogZGVtbzpcbiAgICogRm9yIEZvbnRBd2Vzb21lXG4gICAqIHJlZ2lzdGVyRm9udENsYXNzKCdmYScsICdmYScsICdmYS0nKVxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEBwYXJhbSBjbGFzc05hbWVcbiAgICogQHBhcmFtIHByZWZpeCBDbGFzcyBwcmVmaXhcbiAgICovXG4gIHJlZ2lzdGVyRm9udENsYXNzKG9wdDogRm9udENsYXNzT3B0aW9ucykge1xuICAgIHRoaXMuX2ZvbnRDbGFzc2VzLnNldChvcHQua2V5LCBvcHQpO1xuICB9XG5cbiAgZ2V0Rm9udENsYXNzKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRDbGFzc2VzLmdldChrZXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUljb25TZXJ2aWNlLCBTdmdJY29uLCBGb250Q2xhc3NPcHRpb25zIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiwgbWl4aW5TdHlsZVVwZGF0ZXIsIG1peGluQmcsIG1peGluQ29sb3IsIG1peGluUmFpc2VkLCBtaXhpbk91dGxpbmVkLCBtaXhpbkVsZXZhdGlvbiwgbWl4aW5TaGFkb3dDb2xvciB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY2xhc3MgTHlJY29uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgY29uc3QgTHlJY29uTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihMeUljb25CYXNlKSkpKSkpKTtcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1pY29uJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uIGV4dGVuZHMgTHlJY29uTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIF9zcmM6IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICBwcml2YXRlIF9mb250U2V0OiBzdHJpbmc7XG4gIHByaXZhdGUgX3ByZXZpb3VzRm9udFNldDogRm9udENsYXNzT3B0aW9ucztcbiAgcHJpdmF0ZSBfY3VycmVudENsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvbnRJY29uOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgc2V0IGljb24odmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdmFsO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKHZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBlbmREZWZhdWx0U3ZnSWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBmb250U2V0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRTZXQ7XG4gIH1cbiAgc2V0IGZvbnRTZXQoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9mb250U2V0ID0ga2V5O1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGZvbnRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRJY29uO1xuICB9XG4gIHNldCBmb250SWNvbihrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2ZvbnRJY29uID0ga2V5O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpY29uU2VydmljZTogTHlJY29uU2VydmljZSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmZvbnRTZXQgfHwgdGhpcy5mb250SWNvbikge1xuICAgICAgdGhpcy5fdXBkYXRlRm9udENsYXNzKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNEZWZhdWx0KCkge1xuICAgIHJldHVybiAhKHRoaXMuaWNvbiB8fCB0aGlzLmZvbnRTZXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJlcGFyZVN2Z0ljb24oc3ZnSWNvbjogU3ZnSWNvbikge1xuICAgIGlmIChzdmdJY29uLnN2Zykge1xuICAgICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdJY29uLnN2Zy5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN2Z0ljb24ub2JzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChzdmdFbGVtZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5fY2xlYW5JY29uKCk7XG4gICAgICAgICAgdGhpcy5fYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENoaWxkKHN2ZzogU1ZHRWxlbWVudCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHN2ZywgdGhpcy5pY29uU2VydmljZS5jbGFzc2VzLnN2Zyk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgc3ZnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERlZmF1bHRTdmdJY29uKCkge1xuICAgIHRoaXMuX2FwcGVuZENoaWxkKHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFN2Z0ljb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVmYXVsdCgpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnbHlJY29uUm9vdCcsIHRoZW1lID0+IChcbiAgICAgIGBmb250LXNpemU6JHt0aGVtZS5pY29uLmZvbnRTaXplfTtgICtcbiAgICAgIGB3aWR0aDoxZW07YCArXG4gICAgICBgcG9zaXRpb246cmVsYXRpdmU7YCArXG4gICAgICBgaGVpZ2h0OjFlbTtgICtcbiAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2BcbiAgICApLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBydW4gb25seSBicm93c2VyXG4gICAqIHJlbW92ZSBjdXJyZW50IGljb25cbiAgICovXG4gIHByaXZhdGUgX2NsZWFuSWNvbigpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWwsIGljb24pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUZvbnRDbGFzcygpIHtcblxuICAgIGNvbnN0IGN1cnJlbnRDbGFzcyA9IHRoaXMuX2N1cnJlbnRDbGFzcztcbiAgICBjb25zdCBmb250U2V0S2V5ID0gdGhpcy5mb250U2V0O1xuICAgIGNvbnN0IGljb24gPSB0aGlzLmZvbnRJY29uO1xuICAgIGNvbnN0IGVsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpY29uQ2xhc3MgPSB0aGlzLmljb25TZXJ2aWNlLmdldEZvbnRDbGFzcyhmb250U2V0S2V5KTtcbiAgICBpZiAoY3VycmVudENsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgY3VycmVudENsYXNzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzRm9udFNldCkge1xuICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzRm9udFNldC5jbGFzcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgdGhpcy5fcHJldmlvdXNGb250U2V0LmNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGljb25DbGFzcykge1xuICAgICAgdGhpcy5fcHJldmlvdXNGb250U2V0ID0gaWNvbkNsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICBFcnJvcihgSWNvbiB3aXRoIGtleSR7Zm9udFNldEtleX0gbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRDbGFzcyA9IGAke2ljb25DbGFzcy5wcmVmaXh9JHtpY29ufWA7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWwsIHRoaXMuX2N1cnJlbnRDbGFzcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUljb24gfSBmcm9tICcuL2ljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeUljb25dLFxuICBleHBvcnRzOiBbTHlJY29uLCBMeUNvbW1vbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIlNlY3VyaXR5Q29udGV4dCIsInNoYXJlIiwibWFwIiwiSW5qZWN0YWJsZSIsIkh0dHBDbGllbnQiLCJEb21TYW5pdGl6ZXIiLCJPcHRpb25hbCIsIkluamVjdCIsIkRPQ1VNRU5UIiwiTHlUaGVtZTIiLCJTVFlMRV9QUklPUklUWSIsIm1peGluU3R5bGVVcGRhdGVyIiwibWl4aW5CZyIsIm1peGluQ29sb3IiLCJtaXhpblJhaXNlZCIsIm1peGluT3V0bGluZWQiLCJtaXhpbkVsZXZhdGlvbiIsIm1peGluU2hhZG93Q29sb3IiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIlBsYXRmb3JtIiwidGFrZSIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJJbnB1dCIsIk5nTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9FLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7QUFFRixhQUFnQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUIsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixT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