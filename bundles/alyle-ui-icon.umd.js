(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common'), require('rxjs/operators'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/icon', ['exports', '@angular/core', '@angular/common/http', '@angular/common', 'rxjs/operators', '@alyle/ui'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.icon = {}),global.ng.core,global.ng.common.http,global.ng.common,global.rxjs.operators,global.alyle.ui));
}(this, (function (exports,i0,i1,i2,operators,i3) { 'use strict';

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
        function LyIconService(http, document, theme) {
            this.http = http;
            this.document = document;
            this.theme = theme;
            this.svgMap = new Map();
            this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
            this.defaultSvgIcon = this._textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>');
        }
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
                    url = url + ".svg";
                    /** @type {?} */
                    var svgIcon_1 = {
                        obs: this.http.get(url, { responseType: 'text' })
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
        LyIconService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LyIconService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i2.DOCUMENT,] }] },
                { type: i3.LyTheme2 }
            ];
        };
        /** @nocollapse */ LyIconService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.inject(i1.HttpClient), i0.inject(i2.DOCUMENT, 8), i0.inject(i3.LyTheme2)); }, token: LyIconService, providedIn: "root" });
        return LyIconService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY$1 = -2;
    var LyButtonBase = /** @class */ (function () {
        function LyButtonBase(_theme) {
            this._theme = _theme;
        }
        return LyButtonBase;
    }());
    /** @type {?} */
    var LyButtonMixinBase = i3.mixinStyleUpdater(i3.mixinBg(i3.mixinFlat(i3.mixinColor(i3.mixinRaised(i3.mixinOutlined(i3.mixinElevation(i3.mixinShadowColor(LyButtonBase))))))));
    var Icon = /** @class */ (function (_super) {
        __extends(Icon, _super);
        function Icon(iconService, _el, _renderer, theme) {
            var _this = _super.call(this, theme) || this;
            _this.iconService = iconService;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._defaultClass = 'material-icons';
            _this.setAutoContrast();
            return _this;
        }
        Object.defineProperty(Icon.prototype, "src", {
            get: /**
             * @return {?}
             */ function () {
                return this._src;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._src = val;
                if (i3.Platform.isBrowser) {
                    if (val) {
                        /** @type {?} */
                        var key = "_url:" + val;
                        this.iconService.setSvg(key, val);
                        this._prepareSvgIcon(this.iconService.getSvg(key));
                    }
                }
                else {
                    this._appendDefaultSvgIcon();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Icon.prototype, "icon", {
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
                if (i3.Platform.isBrowser) {
                    this._prepareSvgIcon(this.iconService.getSvg(val));
                }
                else {
                    this._appendDefaultSvgIcon();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        Icon.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.updateStyle(this._el);
            };
        /**
         * @return {?}
         */
        Icon.prototype._isDefault = /**
         * @return {?}
         */
            function () {
                return !(this.src || this.icon);
            };
        /**
         * @param {?} svgIcon
         * @return {?}
         */
        Icon.prototype._prepareSvgIcon = /**
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
        Icon.prototype._appendChild = /**
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
        Icon.prototype._appendDefaultSvgIcon = /**
         * @return {?}
         */
            function () {
                this._appendChild(this.iconService.defaultSvgIcon);
            };
        /**
         * @return {?}
         */
        Icon.prototype._updateClass = /**
         * @return {?}
         */
            function () {
                if (this._isDefault()) {
                    this._renderer.addClass(this._el.nativeElement, this._defaultClass);
                }
            };
        /**
         * @return {?}
         */
        Icon.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._updateClass();
                this._theme.addStyle('lyIconRoot', function (theme) {
                    return ("font-size:" + theme.icon.fontSize + ";" +
                        "width:1em;" +
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
        Icon.prototype._cleanIcon = /**
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
        Icon.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'ly-icon',
                        inputs: [
                            'bg',
                            'flat',
                            'color',
                            'raised',
                            'outlined',
                            'elevation',
                            'shadowColor',
                        ],
                    },] }
        ];
        /** @nocollapse */
        Icon.ctorParameters = function () {
            return [
                { type: LyIconService },
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i3.LyTheme2 }
            ];
        };
        Icon.propDecorators = {
            src: [{ type: i0.Input }],
            icon: [{ type: i0.Input }]
        };
        return Icon;
    }(LyButtonMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyIconModule = /** @class */ (function () {
        function LyIconModule() {
        }
        LyIconModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [Icon],
                        exports: [Icon, i3.LyCommonModule]
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
    exports.LyButtonBase = LyButtonBase;
    exports.LyButtonMixinBase = LyButtonMixinBase;
    exports.Icon = Icon;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktaWNvbi51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvaWNvbi9pY29uLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9pY29uL2ljb24udHMiLCJuZzovL0BhbHlsZS91aS9pY29uL2ljb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3ZnOiB7XG4gICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBTdmdJY29uIHtcbiAgb2JzOiBPYnNlcnZhYmxlPFNWR0VsZW1lbnQ+O1xuICBzdmc/OiBTVkdFbGVtZW50O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdmdNYXAgPSBuZXcgTWFwPHN0cmluZywgU3ZnSWNvbj4oKTtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcmVhZG9ubHkgZGVmYXVsdFN2Z0ljb246IFNWR0VsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhpcy5kZWZhdWx0U3ZnSWNvbiA9IHRoaXMuX3RleHRUb1N2ZygnPHN2ZyB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIxMFwiPjwvY2lyY2xlPjwvc3ZnPicpO1xuICB9XG5cbiAgc2V0U3ZnKGtleTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIHVybCA9IGAke3VybH0uc3ZnYDtcbiAgICAgIGNvbnN0IHN2Z0ljb246IFN2Z0ljb24gPSB7XG4gICAgICAgIG9iczogdGhpcy5odHRwLmdldCh1cmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgICBtYXAoc3ZnVGV4dCA9PiB7XG4gICAgICAgICAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN2Z0ljb24uc3ZnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fdGV4dFRvU3ZnKHN2Z1RleHQpO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVTdmdJY29uKHN2Zywga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBzdmc7XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LCBzdmdJY29uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90ZXh0VG9Tdmcoc3RyOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdHI7XG4gICAgY29uc3Qgc3ZnID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIGFzIFNWR0VsZW1lbnQ7XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHByaXZhdGUgX2NhY2hlU3ZnSWNvbihzdmc6IFNWR0VsZW1lbnQsIGtleTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3ZnSWNvbkluZm8gPSB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgICBpZiAoIXN2Z0ljb25JbmZvLnN2Zykge1xuICAgICAgdGhpcy5zdmdNYXAuZ2V0KGtleSkuc3ZnID0gc3ZnO1xuICAgIH1cbiAgfVxuXG4gIGdldFN2ZyhrZXk6IHN0cmluZyk6IFN2Z0ljb24ge1xuICAgIHJldHVybiB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUljb25TZXJ2aWNlLCBTdmdJY29uIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsYXRmb3JtLCBMeVRoZW1lMiwgbWl4aW5TdHlsZVVwZGF0ZXIsIG1peGluQmcsIG1peGluRmxhdCwgbWl4aW5Db2xvciwgbWl4aW5SYWlzZWQsIG1peGluT3V0bGluZWQsIG1peGluRWxldmF0aW9uLCBtaXhpblNoYWRvd0NvbG9yIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBMeUJ1dHRvbk1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5GbGF0KFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoTHlCdXR0b25CYXNlKSkpKSkpKSk7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktaWNvbicsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2ZsYXQnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uIGV4dGVuZHMgTHlCdXR0b25NaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIHByaXZhdGUgX2RlZmF1bHRDbGFzcyA9ICdtYXRlcmlhbC1pY29ucyc7XG4gIHByaXZhdGUgX3NyYzogc3RyaW5nO1xuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzcmModmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zcmMgPSB2YWw7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBjb25zdCBrZXkgPSBgX3VybDoke3ZhbH1gO1xuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLnNldFN2ZyhrZXksIHZhbCk7XG4gICAgICAgIHRoaXMuX3ByZXBhcmVTdmdJY29uKHRoaXMuaWNvblNlcnZpY2UuZ2V0U3ZnKGtleSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBlbmREZWZhdWx0U3ZnSWNvbigpO1xuICAgIH1cbiAgfVxuICBnZXQgc3JjKCkge1xuICAgIHJldHVybiB0aGlzLl9zcmM7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgaWNvbih2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSB2YWw7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcHJlcGFyZVN2Z0ljb24odGhpcy5pY29uU2VydmljZS5nZXRTdmcodmFsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGVuZERlZmF1bHRTdmdJY29uKCk7XG4gICAgfVxuICB9XG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpY29uU2VydmljZTogTHlJY29uU2VydmljZSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBzdXBlcih0aGVtZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNEZWZhdWx0KCkge1xuICAgIHJldHVybiAhKHRoaXMuc3JjIHx8IHRoaXMuaWNvbik7XG4gIH1cblxuICBwcml2YXRlIF9wcmVwYXJlU3ZnSWNvbihzdmdJY29uOiBTdmdJY29uKSB7XG4gICAgaWYgKHN2Z0ljb24uc3ZnKSB7XG4gICAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgICAgIHRoaXMuX2FwcGVuZENoaWxkKHN2Z0ljb24uc3ZnLmNsb25lTm9kZSh0cnVlKSBhcyBTVkdFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnSWNvbi5vYnNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZSgxKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHN2Z0VsZW1lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLl9jbGVhbkljb24oKTtcbiAgICAgICAgICB0aGlzLl9hcHBlbmRDaGlsZChzdmdFbGVtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBTVkdFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ2hpbGQoc3ZnOiBTVkdFbGVtZW50KSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3Moc3ZnLCB0aGlzLmljb25TZXJ2aWNlLmNsYXNzZXMuc3ZnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBzdmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kRGVmYXVsdFN2Z0ljb24oKSB7XG4gICAgdGhpcy5fYXBwZW5kQ2hpbGQodGhpcy5pY29uU2VydmljZS5kZWZhdWx0U3ZnSWNvbik7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBpZiAodGhpcy5faXNEZWZhdWx0KCkpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2RlZmF1bHRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnbHlJY29uUm9vdCcsIHRoZW1lID0+IChcbiAgICAgIGBmb250LXNpemU6JHt0aGVtZS5pY29uLmZvbnRTaXplfTtgICtcbiAgICAgIGB3aWR0aDoxZW07YCArXG4gICAgICBgaGVpZ2h0OjFlbTtgICtcbiAgICAgIGBkaXNwbGF5OmlubGluZS1mbGV4O2BcbiAgICApLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBydW4gb25seSBicm93c2VyXG4gICAqIHJlbW92ZSBjdXJyZW50IGljb25cbiAgICovXG4gIHByaXZhdGUgX2NsZWFuSWNvbigpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgICBpZiAoaWNvbikge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZWwsIGljb24pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuL2ljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtJY29uXSxcbiAgZXhwb3J0czogW0ljb24sIEx5Q29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUljb25Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsic2hhcmUiLCJtYXAiLCJJbmplY3RhYmxlIiwiSHR0cENsaWVudCIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiRE9DVU1FTlQiLCJMeVRoZW1lMiIsIlNUWUxFX1BSSU9SSVRZIiwibWl4aW5TdHlsZVVwZGF0ZXIiLCJtaXhpbkJnIiwibWl4aW5GbGF0IiwibWl4aW5Db2xvciIsIm1peGluUmFpc2VkIiwibWl4aW5PdXRsaW5lZCIsIm1peGluRWxldmF0aW9uIiwibWl4aW5TaGFkb3dDb2xvciIsInRzbGliXzEuX19leHRlbmRzIiwiUGxhdGZvcm0iLCJ0YWtlIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIklucHV0IiwiTmdNb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUVGLGFBQWdCLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsRUFB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