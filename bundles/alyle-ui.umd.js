(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('chroma-js'), require('@angular/core'), require('@angular/common'), require('rxjs'), require('@angular/platform-browser'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui', ['exports', 'chroma-js', '@angular/core', '@angular/common', 'rxjs', '@angular/platform-browser', 'rxjs/operators'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.core = {}),global.chroma,global.ng.core,global.ng.common,global.rxjs,global.ng.platformBrowser,global.rxjs.operators));
}(this, (function (exports,_chroma,i0,i1,rxjs,platformBrowser,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @param {?} hexcolor
     * @return {?}
     */
    function getContrastYIQ(hexcolor) {
        /** @type {?} */
        var r = parseInt(hexcolor.substr(0, 2), 16);
        /** @type {?} */
        var g = parseInt(hexcolor.substr(2, 2), 16);
        /** @type {?} */
        var b = parseInt(hexcolor.substr(4, 2), 16);
        /** @type {?} */
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? 'black' : 'white';
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var chroma = _chroma;
    /** @type {?} */
    var shadowKeyUmbraOpacity = 0.2;
    /** @type {?} */
    var shadowKeyPenumbraOpacity = 0.14;
    /** @type {?} */
    var shadowAmbientShadowOpacity = 0.12;
    /** @type {?} */
    var Shadows = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1],
        [0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2],
        [0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2],
        [0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0],
        [0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0],
        [0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0],
        [0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1],
        [0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2],
        [0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2],
        [0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3],
        [0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3],
        [0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4],
        [0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4],
        [0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4],
        [0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5],
        [0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5],
        [0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5],
        [0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6],
        [0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6],
        [0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7],
        [0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7],
        [0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7],
        [0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8],
        [0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8]
    ];
    /**
     * @param {?=} elevation
     * @param {?=} color
     * @return {?}
     */
    function shadowBuilderDeprecated(elevation, color) {
        if (elevation === void 0) {
            elevation = 2;
        }
        if (color === void 0) {
            color = '#000';
        }
        /** @type {?} */
        var Color = chroma(color);
        /** @type {?} */
        var colors = [
            Color.alpha(shadowKeyUmbraOpacity).css(),
            Color.alpha(shadowKeyPenumbraOpacity).css(),
            Color.alpha(shadowAmbientShadowOpacity).css()
        ];
        /** @type {?} */
        var e = Shadows[elevation];
        // tslint:disable-next-line:max-line-length
        return "box-shadow:" + e[0] + "px " + e[1] + "px " + e[2] + "px " + e[3] + "px " + colors[0] + "," + e[4] + "px " + e[5] + "px " + e[6] + "px " + e[7] + "px " + colors[1] + "," + e[8] + "px " + e[9] + "px " + e[10] + "px " + e[11] + "px " + colors[2] + ";";
    }
    /**
     * @param {?} elevation
     * @param {?=} color
     * @return {?}
     */
    function shadowBuilder(elevation, color) {
        /** @type {?} */
        var Color = chroma(color || '#000');
        /** @type {?} */
        var rgb = ( /** @type {?} */(( /** @type {?} */(Color.get('rgb')))));
        if (!(rgb[0] === rgb[1] && rgb[0] === rgb[2])) {
            // Darken and saturate if the color is not in the grayscale
            Color = Color.darken().saturate(2);
        }
        /** @type {?} */
        var colors = [
            Color.alpha(shadowKeyUmbraOpacity).css(),
            Color.alpha(shadowKeyPenumbraOpacity).css(),
            Color.alpha(shadowAmbientShadowOpacity).css()
        ];
        /** @type {?} */
        var e = Shadows[elevation];
        // tslint:disable-next-line:max-line-length
        return e[0] + "px " + e[1] + "px " + e[2] + "px " + e[3] + "px " + colors[0] + "," + e[4] + "px " + e[5] + "px " + e[6] + "px " + e[7] + "px " + colors[1] + "," + e[8] + "px " + e[9] + "px " + e[10] + "px " + e[11] + "px " + colors[2] + ";";
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var THEME_VARIABLES = new i0.InjectionToken('ly.theme.variables');
    /** @type {?} */
    var IS_CORE_THEME = new i0.InjectionToken('ly.is.root');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    // Whether the current platform supports the V8 Break Iterator. The V8 check
    // is necessary to detect all Blink based browsers.
    /** @type {?} */
    var hasV8BreakIterator = (typeof (Intl) !== 'undefined' && (( /** @type {?} */(Intl))).v8BreakIterator);
    /**
     * Service to detect the current platform by comparing the userAgent strings and
     * checking browser-specific global properties.
     */
    var Platform = /** @class */ (function () {
        function Platform() {
        }
        Platform.isBrowser = typeof document === 'object' && !!document;
        /**
         * Layout Engines
         */
        Platform.EDGE = Platform.isBrowser && /(edge)/i.test(navigator.userAgent);
        Platform.TRIDENT = Platform.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        Platform.BLINK = Platform.isBrowser &&
            (!!((( /** @type {?} */(window))).chrome || hasV8BreakIterator) && !!CSS && !Platform.EDGE && !Platform.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        Platform.WEBKIT = Platform.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !Platform.BLINK && !Platform.EDGE && !Platform.TRIDENT;
        /**
         * Browsers and Platform Types
         */
        Platform.IOS = Platform.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !(( /** @type {?} */(window))).MSStream;
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        Platform.FIREFOX = Platform.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        Platform.ANDROID = Platform.isBrowser && /android/i.test(navigator.userAgent) && !Platform.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        Platform.SAFARI = Platform.isBrowser && /safari/i.test(navigator.userAgent) && Platform.WEBKIT;
        return Platform;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var supportsPassive;
    /**
     * @return {?}
     */
    function supportsPassiveEventListeners() {
        if (supportsPassive === void 0) {
            try {
                /** @type {?} */
                var opts = Object.defineProperty({}, 'passive', {
                    get: function () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener('testPassive', null, opts);
                window.removeEventListener('testPassive', null, opts);
            }
            catch (e) { }
        }
        return supportsPassive;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

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
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LY_THEME_GLOBAL_VARIABLES = new i0.InjectionToken('ly.theme.global.variables');
    /** @type {?} */
    var LY_THEME = new i0.InjectionToken('ly_theme_config');
    /** @type {?} */
    var LY_THEME_NAME = new i0.InjectionToken('ly.theme.name');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyStyleUtils = /** @class */ (function () {
        function LyStyleUtils() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        LyStyleUtils.prototype.pxToRem = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var size = this.typography.fontSize / 14;
                return value / this.typography.htmlFontSize * size + "rem";
            };
        /**
         * @param {?} value
         * @param {?=} optional
         * @return {?}
         */
        LyStyleUtils.prototype.colorOf = /**
         * @param {?} value
         * @param {?=} optional
         * @return {?}
         */
            function (value, optional) {
                return get(this, value, optional);
            };
        /**
         * @param {?} key
         * @return {?}
         */
        LyStyleUtils.prototype.getBreakpoint = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return "@media " + (this.breakpoints[key] || key);
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LyStyleUtils.prototype.getDirection = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (val === DirAlias.start || val === DirAlias.before) {
                    return this.direction === 'rtl' ? 'right' : 'left';
                }
                else if (val === DirAlias.end || val === DirAlias.after) {
                    return this.direction === 'rtl' ? 'left' : 'right';
                }
                else {
                    return val;
                }
            };
        return LyStyleUtils;
    }());
    /** @enum {string} */
    var Dir = {
        rtl: 'rtl',
        ltr: 'ltr',
    };
    /** @enum {string} */
    var DirAlias = {
        /** @deprecated, use `before` instead */
        start: 'start',
        /** @deprecated, use `after` instead */
        end: 'end',
        before: 'before',
        after: 'after',
    };
    /** @enum {string} */
    var DirPosition = {
        left: 'left',
        right: 'right',
    };
    /**
     * get color of object
     * @param {?} obj object
     * @param {?} path path
     * @param {?} optional get optional value, if not exist return default if not is string
     * @return {?}
     */
    function get(obj, path, optional) {
        /** @type {?} */
        var _path = path instanceof Array ? path : path.split(':');
        for (var i = 0; i < _path.length; i++) {
            /** @type {?} */
            var posibleOb = obj[_path[i]];
            if (posibleOb) {
                obj = posibleOb;
            }
            else {
                /** if not exist */
                return ( /** @type {?} */(path));
            }
        }
        if (typeof obj === 'string') {
            return ( /** @type {?} */(obj));
        }
        else if (optional) {
            return obj[optional] || obj['default'];
        }
        else {
            return obj['default'];
        }
        // return typeof obj === 'string' ? obj as string : obj['default'] as string;
    }
    /**
     * @param {?} str
     * @param {?} fn
     * @return {?}
     */
    function eachMedia(str, fn) {
        if (typeof str === 'string') {
            /** @type {?} */
            var values = str.split(/\s/g);
            for (var index = 0; index < values.length; index++) {
                /** @type {?} */
                var valItem = values[index].split(/\@/g);
                /** @type {?} */
                var value = valItem.shift();
                /** @type {?} */
                var len = valItem.length;
                if (len) {
                    for (var j = 0; j < len; j++) {
                        fn.call(undefined, value, valItem[j], valItem.length);
                    }
                }
                else {
                    fn.call(undefined, value, undefined, len);
                }
            }
        }
        else {
            fn.call(undefined, str, undefined, 0);
        }
    }
    /**
     * Simple object check.
     * @param {?} item
     * @return {?}
     */
    function isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }
    /**
     * Deep merge two objects.
     * @param {?} target
     * @param {...?} sources
     * @return {?}
     */
    function mergeDeep(target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        var _a, _b;
        if (!sources.length) {
            return target;
        }
        /** @type {?} */
        var source = sources.shift();
        if (isObject(target) && isObject(source)) {
            for (var key in source) {
                if (isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    }
                    mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return mergeDeep.apply(void 0, __spread([target], sources));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CoreTheme = /** @class */ (function () {
        function CoreTheme(themeConfig, globalVariables, rendererFactory, _document) {
            var _this = this;
            this.rendererFactory = rendererFactory;
            this.themes = new Set();
            this._themeMap = new Map();
            this._styleMap = new Map();
            if (!themeConfig) {
                throw new Error('LY_THEME undefined');
            }
            this.renderer = this.rendererFactory.createRenderer(null, {
                id: 'ly',
                encapsulation: i0.ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            if (Platform.isBrowser) {
                /** @type {?} */
                var nodes = _document.body.querySelectorAll('ly-s-c');
                if (nodes.length) {
                    for (var index = 0; index < nodes.length; index++) {
                        /** @type {?} */
                        var element = nodes.item(index);
                        (( /** @type {?} */(_document.body))).removeChild(element);
                    }
                }
            }
            this.firstElement = _document.body.firstChild;
            if (Array.isArray(themeConfig)) {
                themeConfig.forEach(function (item) {
                    if (globalVariables) {
                        mergeDeep(item, globalVariables);
                    }
                    _this.add(( /** @type {?} */(item)));
                    _this.themes.add(item.name);
                });
            }
            else {
                if (globalVariables) {
                    mergeDeep(themeConfig, globalVariables);
                }
                this.add(( /** @type {?} */(themeConfig)));
                this.themes.add(themeConfig.name);
            }
        }
        /**
         * add new theme
         * @param theme: ThemeVariables
         */
        /**
         * add new theme
         * @param {?} theme
         * @return {?}
         */
        CoreTheme.prototype.add = /**
         * add new theme
         * @param {?} theme
         * @return {?}
         */
            function (theme) {
                this._themeMap.set(theme.name, theme);
                this._styleMap.set(theme.name, new Map());
            };
        /**
         * @param {?} name
         * @return {?}
         */
        CoreTheme.prototype.get = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this._themeMap.get(name);
            };
        /**
         * @param {?} name
         * @return {?}
         */
        CoreTheme.prototype.getStyleMap = /**
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this._styleMap.get(name);
            };
        /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClassname
         * @param {?=} oldClassname
         * @return {?}
         */
        CoreTheme.prototype.updateClassName = /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClassname
         * @param {?=} oldClassname
         * @return {?}
         */
            function (element, renderer, newClassname, oldClassname) {
                if (oldClassname) {
                    renderer.removeClass(element, oldClassname);
                }
                renderer.addClass(element, newClassname);
            };
        CoreTheme.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CoreTheme.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [LY_THEME,] }] },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [LY_THEME_GLOBAL_VARIABLES,] }] },
                { type: i0.RendererFactory2 },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ CoreTheme.ngInjectableDef = i0.defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.inject(LY_THEME, 8), i0.inject(LY_THEME_GLOBAL_VARIABLES, 8), i0.inject(i0.RendererFactory2), i0.inject(i1.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
        return CoreTheme;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var YPosition = {
        above: 'above',
        below: 'below',
    };
    /** @enum {string} */
    var XPosition = {
        before: 'before',
        after: 'after',
        left: 'left',
        right: 'right',
    };
    /**
     * @deprecated in favor of `Positioning`
     * @param {?} placement
     * @param {?} xPosition
     * @param {?} yPosition
     * @param {?} origin
     * @param {?} overlayElement
     * @param {?} themeVariables
     * @param {?=} offset
     * @return {?}
     */
    function getPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset) {
        if (offset === void 0) {
            offset = 0;
        }
        return createPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset);
    }
    /**
     * @param {?} placement
     * @param {?} xPosition
     * @param {?} yPosition
     * @param {?} origin
     * @param {?} overlayElement
     * @param {?} themeVariables
     * @param {?=} offset
     * @return {?}
     */
    function createPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset) {
        if (offset === void 0) {
            offset = 0;
        }
        /** @type {?} */
        var originRect = ( /** @type {?} */(origin.getBoundingClientRect()));
        /** @type {?} */
        var overlayElementRect = ( /** @type {?} */(overlayElement.getBoundingClientRect()));
        if (xPosition && yPosition) {
            throw new Error("You can not use `xPosition` and `yPosition` together, use only one of them.");
        }
        if ((xPosition || yPosition) && !placement) {
            throw new Error("`placement` is required.");
        }
        /** @type {?} */
        var x = 0;
        /** @type {?} */
        var y = 0;
        /** @type {?} */
        var ox = 'center';
        /** @type {?} */
        var oy = 'center';
        if (placement || xPosition || yPosition) {
            if (placement) {
                if (placement === YPosition.above) {
                    x = (originRect.width - overlayElementRect.width) / 2;
                    y = -overlayElementRect.height - offset;
                    oy = 'bottom';
                }
                else if (placement === YPosition.below) {
                    x = (originRect.width - overlayElementRect.width) / 2;
                    y = originRect.height + offset;
                    oy = 'top';
                }
                else {
                    /** @type {?} */
                    var dir = themeVariables.getDirection(( /** @type {?} */(placement)));
                    if (dir === DirPosition.left) {
                        ox = '100%';
                        x = -overlayElementRect.width - offset;
                        y = (originRect.height - overlayElementRect.height) / 2;
                    }
                    else if (dir === DirPosition.right) {
                        ox = '0%';
                        x = originRect.width + offset;
                        y = (originRect.height - overlayElementRect.height) / 2;
                    }
                }
            }
            if (xPosition) {
                /** @type {?} */
                var dir = themeVariables.getDirection(( /** @type {?} */(xPosition)));
                if (dir === DirPosition.right) {
                    ox = '0%';
                    x = 0;
                }
                else if (dir === DirPosition.left) {
                    ox = '100%';
                    x = originRect.width - overlayElementRect.width;
                }
            }
            else if (yPosition) {
                if (yPosition === YPosition.above) {
                    y = 0;
                    oy = '0%';
                }
                else if (yPosition === YPosition.below) {
                    y = originRect.height - overlayElementRect.height;
                    oy = '100%';
                }
            }
        }
        return {
            x: Math.round(x),
            y: Math.round(y),
            ox: ox,
            oy: oy
        };
    }
    var Positioning = /** @class */ (function () {
        function Positioning(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset) {
            if (offset === void 0) {
                offset = 0;
            }
            this.placement = placement;
            this.xPosition = xPosition;
            this.yPosition = yPosition;
            this.origin = origin;
            this.overlayElement = overlayElement;
            this.themeVariables = themeVariables;
            this.offset = offset;
            this.offsetCheck = 16;
            this.originRect = ( /** @type {?} */(this.origin.getBoundingClientRect()));
            this.overlayElementRect = ( /** @type {?} */(this.overlayElement.getBoundingClientRect()));
            this.createPosition();
            for (var index = 0; index < 2; index++) {
                if (this.checkAll()) {
                    this.createPosition();
                }
            }
            // Where there is not enough space
            if (this.checkAll()) {
                /** @type {?} */
                var _max_width = this.overlayElementRect.width + this.offsetCheck * 2 > window.innerWidth;
                /** @type {?} */
                var _max_height = this.overlayElementRect.height + this.offsetCheck * 2 > window.innerHeight;
                if (_max_width || _max_height) {
                    if (_max_height) {
                        this.y = this.originRect.y - this.offsetCheck;
                        this.y *= -1;
                    }
                    if (_max_width) {
                        this.x = this.originRect.x - this.offsetCheck;
                        this.x *= -1;
                    }
                }
                else if (this.checkBottom()) {
                    this.y += ( /** @type {?} */(this.checkBottom(true)));
                }
                else if (this.checkTop()) {
                    this.y -= ( /** @type {?} */(this.checkTop(true)));
                }
                if (this.checkRight()) {
                    this.x += ( /** @type {?} */(this.checkRight(true)));
                }
                else if (this.checkLeft()) {
                    this.x -= ( /** @type {?} */(this.checkLeft(true)));
                }
            }
            // round result
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.ax = Math.round(this.ax);
            this.ay = Math.round(this.ay);
        }
        /**
         * @return {?}
         */
        Positioning.prototype.createPosition = /**
         * @return {?}
         */
            function () {
                if (this.xPosition && this.yPosition) {
                    throw new Error("You can not use `xPosition` and `yPosition` together, use only one of them.");
                }
                if ((this.xPosition || this.yPosition) && !this.placement) {
                    throw new Error("`placement` is required.");
                }
                /** @type {?} */
                var x = 0;
                /** @type {?} */
                var y = 0;
                /** @type {?} */
                var ox = 'center';
                /** @type {?} */
                var oy = 'center';
                if (this.placement || this.xPosition || this.yPosition) {
                    if (this.placement) {
                        if (this.placement === YPosition.above) {
                            x = (this.originRect.width - this.overlayElementRect.width) / 2;
                            y = -this.overlayElementRect.height - this.offset;
                            oy = 'bottom';
                        }
                        else if (this.placement === YPosition.below) {
                            x = (this.originRect.width - this.overlayElementRect.width) / 2;
                            y = this.originRect.height + this.offset;
                            oy = 'top';
                        }
                        else {
                            /** @type {?} */
                            var dir = this.themeVariables.getDirection(( /** @type {?} */(this.placement)));
                            if (dir === DirPosition.left) {
                                ox = '100%';
                                x = -this.overlayElementRect.width - this.offset;
                                y = (this.originRect.height - this.overlayElementRect.height) / 2;
                            }
                            else if (dir === DirPosition.right) {
                                ox = '0%';
                                x = this.originRect.width + this.offset;
                                y = (this.originRect.height - this.overlayElementRect.height) / 2;
                            }
                        }
                    }
                    if (this.xPosition) {
                        /** @type {?} */
                        var dir = this.themeVariables.getDirection(( /** @type {?} */(this.xPosition)));
                        if (dir === DirPosition.right) {
                            ox = '0%';
                            x = 0;
                        }
                        else if (dir === DirPosition.left) {
                            ox = '100%';
                            x = this.originRect.width - this.overlayElementRect.width;
                        }
                    }
                    else if (this.yPosition) {
                        if (this.yPosition === YPosition.above) {
                            y = 0;
                            oy = '0%';
                        }
                        else if (this.yPosition === YPosition.below) {
                            y = this.originRect.height - this.overlayElementRect.height;
                            oy = '100%';
                        }
                    }
                }
                this.x = x;
                this.y = y;
                this.ax = x + this.overlayElementRect.x;
                this.ay = y + this.overlayElementRect.y;
                this.ox = ox;
                this.oy = oy;
                return {
                    x: Math.round(x),
                    y: Math.round(y),
                    ox: ox,
                    oy: oy
                };
            };
        /**
         * @param {?=} returnVal
         * @return {?}
         */
        Positioning.prototype.checkLeft = /**
         * @param {?=} returnVal
         * @return {?}
         */
            function (returnVal) {
                /** @type {?} */
                var rest = this.ax - this.offsetCheck;
                if (returnVal) {
                    return rest;
                }
                if (rest < 0) {
                    if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                        this.placement = this.invertPosition(this.placement);
                    }
                    if (this.xPosition) {
                        this.xPosition = ( /** @type {?} */(this.invertPosition(this.xPosition)));
                    }
                    return true;
                }
                return false;
            };
        /**
         * @param {?=} returnVal
         * @return {?}
         */
        Positioning.prototype.checkRight = /**
         * @param {?=} returnVal
         * @return {?}
         */
            function (returnVal) {
                /** @type {?} */
                var rest = window.innerWidth - (this.ax + this.overlayElementRect.width + this.offsetCheck);
                if (returnVal) {
                    return rest;
                }
                if (rest < 0) {
                    if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                        this.placement = this.invertPosition(this.placement);
                    }
                    if (this.xPosition) {
                        this.xPosition = ( /** @type {?} */(this.invertPosition(this.xPosition)));
                    }
                    return true;
                }
                return false;
            };
        /**
         * @param {?=} returnVal
         * @return {?}
         */
        Positioning.prototype.checkTop = /**
         * @param {?=} returnVal
         * @return {?}
         */
            function (returnVal) {
                /** @type {?} */
                var rest = this.ay - this.offsetCheck;
                if (returnVal) {
                    return rest;
                }
                if (rest < 0) {
                    if (this.placement === YPosition.above || this.placement === YPosition.below) {
                        this.placement = this.invertPosition(this.placement);
                    }
                    if (this.yPosition) {
                        this.yPosition = ( /** @type {?} */(this.invertPosition(this.yPosition)));
                    }
                    return true;
                }
                return false;
            };
        /**
         * @param {?=} returnVal
         * @return {?}
         */
        Positioning.prototype.checkBottom = /**
         * @param {?=} returnVal
         * @return {?}
         */
            function (returnVal) {
                /** @type {?} */
                var rest = window.innerHeight - (this.ay + this.overlayElementRect.height + this.offsetCheck);
                if (returnVal) {
                    return rest;
                }
                if (rest < 0) {
                    if (this.placement === YPosition.above || this.placement === YPosition.below) {
                        this.placement = this.invertPosition(this.placement);
                    }
                    if (this.yPosition) {
                        this.yPosition = ( /** @type {?} */(this.invertPosition(this.yPosition)));
                    }
                    return true;
                }
                return false;
            };
        /**
         * @return {?}
         */
        Positioning.prototype.checkAll = /**
         * @return {?}
         */
            function () {
                return this.checkLeft() ||
                    this.checkRight() ||
                    this.checkTop() ||
                    this.checkBottom();
            };
        /**
         * @param {?} placement
         * @return {?}
         */
        Positioning.prototype.invertPosition = /**
         * @param {?} placement
         * @return {?}
         */
            function (placement) {
                if (placement === YPosition.above) {
                    return YPosition.below;
                }
                else if (placement === YPosition.below) {
                    return YPosition.above;
                }
                else if (placement === XPosition.after) {
                    return XPosition.before;
                }
                else if (placement === XPosition.before) {
                    return XPosition.after;
                }
                else if (placement === XPosition.right) {
                    return XPosition.left;
                }
                else if (placement === XPosition.left) {
                    return XPosition.right;
                }
            };
        return Positioning;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultStyles = {
        '@global': {
            '*, *:after, *:before': {
                '-webkit-box-sizing': 'border-box',
                '-moz-box-sizing': 'border-box',
                'box-sizing': 'border-box'
            }
        }
    };
    /** @type {?} */
    var REF_REG_EXP = /\{([\w-]+)\}/g;
    /** @enum {number} */
    var TypeStyle = {
        Multiple: 0,
        OnlyOne: 1,
    };
    TypeStyle[TypeStyle.Multiple] = 'Multiple';
    TypeStyle[TypeStyle.OnlyOne] = 'OnlyOne';
    /** @type {?} */
    var STYLE_MAP5 = new Map();
    /** @type {?} */
    var nextClassId = 0;
    /** @type {?} */
    var nextKeyFrameId = 0;
    var StylesInDocument = /** @class */ (function () {
        function StylesInDocument() {
            this.styles = {};
            this.styleContainers = new Map();
            this.styleElementGlobalMap = new Map();
        }
        StylesInDocument.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ StylesInDocument.ngInjectableDef = i0.defineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
        return StylesInDocument;
    }());
    /** @type {?} */
    var THEME_MAP = new Map();
    var LyTheme2 = /** @class */ (function () {
        function LyTheme2(stylesInDocument, core, themeName, _document, _ngZone) {
            this.stylesInDocument = stylesInDocument;
            this.core = core;
            this._document = _document;
            this._ngZone = _ngZone;
            this._elementsMap = new Map();
            this.themeMap = THEME_MAP;
            /**
             * ssr or hmr
             */
            this.isDevOrServer = i0.isDevMode() || !Platform.isBrowser;
            if (themeName) {
                this.setUpTheme(themeName);
            }
        }
        /**
         * @param {?} themeName
         * @return {?}
         */
        LyTheme2.prototype.setUpTheme = /**
         * @param {?} themeName
         * @return {?}
         */
            function (themeName) {
                if (!this.config) {
                    this.config = this.core.get(themeName);
                    this._styleMap = new Map();
                    this.elements = themeName in this.stylesInDocument.styles
                        ? this.stylesInDocument.styles[themeName]
                        : this.stylesInDocument.styles[themeName] = new Map();
                    if (!this.initialTheme) {
                        this.initialTheme = this.config.name;
                    }
                    if (!this.themeMap.has(this.initialTheme)) {
                        this.themeMap.set(this.initialTheme, {
                            base: this.initialTheme,
                            change: null
                        });
                    }
                    this._addDefaultStyles();
                }
            };
        /**
         * Add a new dynamic style, use only within @Input()
         * @param id Unique id
         * @param style Styles
         * @param el Element
         * @param instance The instance of this, this replaces the existing style with a new one when it changes
         * @param parentStyle
         */
        /**
         * Add a new dynamic style, use only within \@Input()
         * @param {?} id Unique id
         * @param {?} style Styles
         * @param {?=} el Element
         * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
         * @param {?=} priority
         * @param {?=} parentStyle
         * @return {?}
         */
        LyTheme2.prototype.addStyle = /**
         * Add a new dynamic style, use only within \@Input()
         * @param {?} id Unique id
         * @param {?} style Styles
         * @param {?=} el Element
         * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
         * @param {?=} priority
         * @param {?=} parentStyle
         * @return {?}
         */
            function (id, style, el, instance, priority, parentStyle) {
                /** @type {?} */
                var newClass = ( /** @type {?} */(this._createStyleContent2(( /** @type {?} */(style)), id, priority, TypeStyle.OnlyOne, false, parentStyle)));
                if (newClass === instance) {
                    return newClass;
                }
                if (el) {
                    if (instance) {
                        el.classList.remove(instance);
                    }
                    el.classList.add(newClass);
                }
                return newClass;
            };
        /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClassname
         * @param {?=} oldClassname
         * @return {?}
         */
        LyTheme2.prototype.updateClassName = /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClassname
         * @param {?=} oldClassname
         * @return {?}
         */
            function (element, renderer, newClassname, oldClassname) {
                this.core.updateClassName(element, renderer, newClassname, oldClassname);
            };
        /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClass
         * @param {?=} oldClass
         * @return {?}
         */
        LyTheme2.prototype.updateClass = /**
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClass
         * @param {?=} oldClass
         * @return {?}
         */
            function (element, renderer, newClass, oldClass) {
                if (newClass === oldClass) {
                    return newClass;
                }
                this.updateClassName(element, renderer, newClass, oldClass);
                return newClass;
            };
        /**
         * @param {?} nam
         * @return {?}
         */
        LyTheme2.prototype.setTheme = /**
         * @param {?} nam
         * @return {?}
         */
            function (nam) {
                if (!Platform.isBrowser) {
                    throw new Error("`theme.setTheme('theme-name')` is only available in browser platform");
                }
                if (nam !== this.config.name) {
                    this.themeMap.get(this.initialTheme).change = nam;
                    this.config = this.core.get(nam);
                    this._updateAllStyles();
                }
            };
        /** Toggle right-to-left/left-to-right */
        /**
         * Toggle right-to-left/left-to-right
         * @return {?}
         */
        LyTheme2.prototype.toggleDirection = /**
         * Toggle right-to-left/left-to-right
         * @return {?}
         */
            function () {
                /** @type {?} */
                var current = this.config.direction;
                this.config.direction = current === Dir.ltr ? Dir.rtl : Dir.ltr;
                this._updateAllStyles();
            };
        /**
         * @return {?}
         */
        LyTheme2.prototype._updateAllStyles = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.elements.forEach(function (_, key) {
                    /** @type {?} */
                    var styleData = STYLE_MAP5.get(key);
                    if (styleData.requireUpdate) {
                        _this._createStyleContent2(styleData.styles, styleData.id, styleData.priority, styleData.type, true, styleData.parentStyle);
                    }
                });
            };
        /**
         * Create a simple style
         * return className
         * @param id id of style
         * @param css style object or string
         * @param priority style priority
         */
        /**
         * Create a simple style
         * return className
         * @param {?} id id of style
         * @param {?} css style object or string
         * @param {?=} priority style priority
         * @return {?}
         */
        LyTheme2.prototype.addSimpleStyle = /**
         * Create a simple style
         * return className
         * @param {?} id id of style
         * @param {?} css style object or string
         * @param {?=} priority style priority
         * @return {?}
         */
            function (id, css, priority) {
                return ( /** @type {?} */(this._createStyleContent2(( /** @type {?} */(css)), id, priority, TypeStyle.OnlyOne, false)));
            };
        /**
         * @return {?}
         */
        LyTheme2.prototype._addDefaultStyles = /**
         * @return {?}
         */
            function () {
                this.addStyleSheet(defaultStyles);
            };
        /**
         * Add new add a new style sheet
         * @param styles styles
         * @param priority priority for style
         */
        /**
         * Add new add a new style sheet
         * @template T
         * @param {?} styles styles
         * @param {?=} priority priority for style
         * @return {?}
         */
        LyTheme2.prototype.addStyleSheet = /**
         * Add new add a new style sheet
         * @template T
         * @param {?} styles styles
         * @param {?=} priority priority for style
         * @return {?}
         */
            function (styles, priority) {
                return this._createStyleContent2(styles, null, priority, TypeStyle.Multiple);
            };
        /**
         * @param {?} styles
         * @param {?} id
         * @param {?} priority
         * @param {?} type
         * @param {?=} forChangeTheme
         * @param {?=} parentStyle
         * @return {?}
         */
        LyTheme2.prototype._createStyleContent2 = /**
         * @param {?} styles
         * @param {?} id
         * @param {?} priority
         * @param {?} type
         * @param {?=} forChangeTheme
         * @param {?=} parentStyle
         * @return {?}
         */
            function (styles, id, priority, type, forChangeTheme, parentStyle) {
                /** @type {?} */
                var newId = ( /** @type {?} */(id)) || styles;
                /** @type {?} */
                var isNewStyle;
                if (!STYLE_MAP5.has(newId)) {
                    isNewStyle = true;
                    STYLE_MAP5.set(newId, {
                        priority: priority,
                        styles: styles,
                        type: type,
                        css: {},
                        id: id,
                        parentStyle: parentStyle
                    });
                }
                /** @type {?} */
                var styleMap = STYLE_MAP5.get(newId);
                /** @type {?} */
                var themeName = this.initialTheme;
                /** @type {?} */
                var isCreated = isNewStyle || !(styleMap.classes || styleMap[themeName]);
                if (isCreated || forChangeTheme) {
                    /**
                     * create new style for new theme
                     * @type {?}
                     */
                    var css = void 0;
                    /** @type {?} */
                    var themeMap = this.themeMap.get(this.initialTheme);
                    /** @type {?} */
                    var config = this.core.get(themeMap.change || themeName);
                    if (typeof styles === 'function') {
                        styleMap.requireUpdate = true;
                        css = groupStyleToString(styleMap, styles(config), themeName, id, type, config);
                        if (!forChangeTheme) {
                            styleMap.css[themeName] = css;
                        }
                    }
                    else {
                        /** create a new id for style that does not <-<require>-> changes */
                        css = groupStyleToString(styleMap, styles, themeName, ( /** @type {?} */(newId)), type, config);
                        styleMap.css = css;
                    }
                    if (!this.elements.has(newId)) {
                        /** @type {?} */
                        var newEl = this._createElementStyle(css);
                        if (styleMap.requireUpdate) {
                            // This is required for when a theme changes
                            this.elements.set(newId, newEl);
                        }
                        else if (this.isDevOrServer) {
                            // in dev mode or server it is not necessary
                            // since the styles will not change
                            this.stylesInDocument.styleElementGlobalMap.set(newId, newEl);
                        }
                        this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), newEl);
                    }
                    if (forChangeTheme) {
                        /** @type {?} */
                        var el = this.elements.get(newId);
                        el.innerText = css;
                    }
                }
                else if (this.isDevOrServer) {
                    /**
                     * append child style if not exist in dom
                     * for ssr or hmr
                     */
                    if (!this.elements.has(newId)) {
                        /** @type {?} */
                        var _css = styleMap.css[themeName] || styleMap.css;
                        /** @type {?} */
                        var map = this.stylesInDocument.styleElementGlobalMap;
                        if (styleMap.requireUpdate) {
                            this.elements.set(newId, this._createElementStyle(_css));
                            this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), this.elements.get(newId));
                        }
                        else if (!map.has(newId)) {
                            map.set(newId, this._createElementStyle(_css));
                            this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), map.get(newId));
                        }
                    }
                }
                return styleMap.classes || styleMap[themeName];
            };
        /**
         * @param {?=} priority
         * @return {?}
         */
        LyTheme2.prototype._createStyleContainer = /**
         * @param {?=} priority
         * @return {?}
         */
            function (priority) {
                if (priority === void 0) {
                    priority = 0;
                }
                var styleContainers = this.stylesInDocument.styleContainers;
                if (!styleContainers.has(priority)) {
                    /** @type {?} */
                    var el = this.core.renderer.createElement("ly-s-c");
                    if (i0.isDevMode()) {
                        this.core.renderer.setAttribute(el, 'priority', "" + priority);
                    }
                    styleContainers.set(priority, el);
                    if (styleContainers.size === 0) {
                        this.core.renderer.insertBefore(this._document.body, el, this._document.body.firstChild);
                        return el;
                    }
                }
                else {
                    return styleContainers.get(priority);
                }
                /** @type {?} */
                var refChild = this.findNode(priority);
                this.core.renderer.insertBefore(this._document.body, styleContainers.get(priority), refChild);
                return styleContainers.get(priority);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        LyTheme2.prototype.findNode = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                var styleContainers = this.stylesInDocument.styleContainers;
                /** @type {?} */
                var keys = (Array.from(styleContainers.keys())).sort();
                /** @type {?} */
                var key = keys.find(function (_) { return index < _; });
                return (key !== undefined && styleContainers.get(key)) || this.core.firstElement;
            };
        /**
         * @param {?} css
         * @return {?}
         */
        LyTheme2.prototype._createElementStyle = /**
         * @param {?} css
         * @return {?}
         */
            function (css) {
                /** @type {?} */
                var styleElement = this.core.renderer.createElement('style');
                /** @type {?} */
                var styleText = this.core.renderer.createText(css);
                this.core.renderer.appendChild(styleElement, styleText);
                return styleElement;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        LyTheme2.prototype.requestAnimationFrame = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                if (typeof requestAnimationFrame === 'function') {
                    this._ngZone.runOutsideAngular(function () {
                        requestAnimationFrame(function () {
                            fn();
                        });
                    });
                }
                else {
                    fn();
                }
            };
        LyTheme2.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        LyTheme2.ctorParameters = function () {
            return [
                { type: StylesInDocument },
                { type: CoreTheme },
                { type: undefined, decorators: [{ type: i0.Inject, args: [LY_THEME_NAME,] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.NgZone }
            ];
        };
        return LyTheme2;
    }());
    /**
     * @param {?} styleMap
     * @param {?} styles
     * @param {?} themeName
     * @param {?} id
     * @param {?} typeStyle
     * @param {?} themeVariables
     * @return {?}
     */
    function groupStyleToString(styleMap, styles, themeName, id, typeStyle, themeVariables) {
        // for styles type string
        if (typeStyle === TypeStyle.OnlyOne) {
            // use current class or set new
            /** @type {?} */
            var className = styleMap.requireUpdate
                ? styleMap[themeName] || (styleMap[themeName] = createNextClassId())
                : styleMap.classes
                    ? styleMap.classes
                    : styleMap.classes = createNextClassId();
            /** @type {?} */
            var rules = void 0;
            if (typeof styles === 'string') {
                rules = "." + className + "{" + styles + "}";
            }
            else {
                rules = styleToString(id, null, styles, themeVariables, ( /** @type {?} */(className)));
            }
            if (styleMap.parentStyle) {
                /** @type {?} */
                var styleMapOfParentStyle = STYLE_MAP5.get(styleMap.parentStyle);
                return replaceRefs(rules, styleMapOfParentStyle[themeName]);
            }
            return rules;
        }
        // for multiples styles
        /** @type {?} */
        var classesMap = styleMap[themeName] || (styleMap[themeName] = {});
        /** @type {?} */
        var content = '';
        /** @type {?} */
        var name = styles.$name ? styles.$name + "-" : '';
        for (var key in styles) {
            if (styles.hasOwnProperty(key)) {
                /** @type {?} */
                var value = styles[key];
                if (key === '$keyframes') {
                    content += keyframesToString(name, classesMap, ( /** @type {?} */(value)), themeVariables);
                }
                else if (typeof value === 'object' || value === null) {
                    // set new id if not exist
                    /** @type {?} */
                    var currentClassName = key in classesMap
                        ? classesMap[key]
                        : classesMap[key] = i0.isDevMode() ? toClassNameValid("y-" + name + key + "-" + createNextClassId()) : createNextClassId();
                    /** @type {?} */
                    var style = styleToString(key, styles.$name, ( /** @type {?} */(value)), themeVariables, currentClassName);
                    content += style;
                }
            }
        }
        return replaceRefs(content, classesMap);
    }
    /**
     * @param {?} str
     * @param {?} data
     * @return {?}
     */
    function replaceRefs(str, data) {
        return str.replace(REF_REG_EXP, function (match, token) {
            /** @type {?} */
            var className = data[token];
            if (className) {
                return "." + data[token];
            }
            else {
                return data["@\u0433.->-" + token];
            }
        });
    }
    /**
     * {color:'red'} to .className{color: red}
     * @param {?} key
     * @param {?} $name
     * @param {?} ob
     * @param {?} themeVariables
     * @param {?} currentKey
     * @param {?=} parentKey
     * @return {?}
     */
    function styleToString(key, $name, ob, themeVariables, currentKey, parentKey) {
        /** @type {?} */
        var content = '';
        /** @type {?} */
        var subContent = '';
        /** @type {?} */
        var keyAndValue = '';
        /** @type {?} */
        var newKey;
        if (parentKey) {
            if (currentKey.indexOf('&') !== -1) {
                newKey = currentKey.replace(/&/g, parentKey);
            }
            else if (currentKey.indexOf('@media') === 0) {
                newKey = "" + currentKey;
            }
            else {
                newKey = parentKey + " " + currentKey;
            }
        }
        else if (key === '@global') {
            newKey = key;
        }
        else {
            newKey = "." + currentKey;
        }
        for (var styleKey in ob) {
            if (ob.hasOwnProperty(styleKey)) {
                /** @type {?} */
                var element = ob[styleKey];
                // Omit style with value null
                if (element != null) {
                    // Check if is Object literal
                    if (element.constructor === Object) {
                        subContent += styleToString(key, $name, ( /** @type {?} */(element)), themeVariables, styleKey, newKey);
                    }
                    else {
                        keyAndValue += convertToStyleValue(styleKey, element, themeVariables);
                    }
                }
            }
        }
        if (keyAndValue) {
            if (i0.isDevMode()) {
                /** @type {?} */
                var lin = '\n\n';
                if ($name) {
                    lin += "/** Style Sheet name: " + $name + " */\n";
                }
                lin += "/** Style Key: " + key + " */\n";
                content += "" + lin;
            }
            if (newKey.indexOf('@media') === 0) {
                content += "" + newKey;
                keyAndValue = parentKey + "{" + keyAndValue + "}";
            }
            else if (parentKey && parentKey === '@global') {
                content += "" + currentKey;
            }
            else {
                content += "" + newKey;
            }
            content += "{" + keyAndValue + "}";
        }
        return content + subContent;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @param {?} themeVariables
     * @return {?}
     */
    function convertToStyleValue(key, value, themeVariables) {
        /** @type {?} */
        var newStyleKey = converterToCssKeyAndStyleCache(key, themeVariables);
        if (value.constructor === Array) {
            /** @type {?} */
            var lin = '';
            for (var index = 0; index < value.length; index++) {
                lin += newStyleKey + ":" + value[index] + ";";
            }
            return lin;
        }
        else {
            return newStyleKey + ":" + value + ";";
        }
    }
    /**
     * @param {?} styleName
     * @param {?} keysMap
     * @param {?} keyframes
     * @param {?} themeVariables
     * @return {?}
     */
    function keyframesToString(styleName, keysMap, keyframes, themeVariables) {
        /** @type {?} */
        var content = '';
        for (var name_1 in keyframes) {
            if (keyframes.hasOwnProperty(name_1)) {
                /** @type {?} */
                var keyframe = keyframes[name_1];
                // Sometimes the name of a class can be the same as the name of a keyframe,
                // so we add a character to be different
                /** @type {?} */
                var newUniqueName = "@\u0433.->-" + name_1;
                // set new id if not exist
                /** @type {?} */
                var newName = newUniqueName in keysMap
                    ? keysMap[newUniqueName]
                    : keysMap[newUniqueName] = i0.isDevMode() ? toClassNameValid("" + styleName + name_1 + "-" + createNextKeyframeId() + "-v") : createNextKeyframeId();
                content += "@keyframes " + newName + "{";
                for (var percent in keyframe) {
                    if (keyframe.hasOwnProperty(percent)) {
                        content += percent + "%{";
                        /** @type {?} */
                        var styles = keyframe[percent];
                        for (var key in styles) {
                            if (styles.hasOwnProperty(key)) {
                                /** @type {?} */
                                var val = styles[key];
                                content += convertToStyleValue(key, ( /** @type {?} */(val)), themeVariables);
                            }
                        }
                        content += "}";
                    }
                }
                content += "}";
            }
        }
        return content;
    }
    /**
     * @param {?} str
     * @param {?} key
     * @param {?} to
     * @return {?}
     */
    function warnDeprecatedKeyStyle(str, key, to) {
        console.warn("Style key `" + key + "` deprecated for `" + str + "`, change `" + key + "` to `" + to + "`\n");
    }
    /**
     * @param {?} str
     * @param {?} themeVariables
     * @return {?}
     */
    function converterToCssKeyAndStyle(str, themeVariables) {
        /** @type {?} */
        var hyphenCase = toHyphenCase(str);
        if (hyphenCase.indexOf(DirAlias.start) !== -1) {
            warnDeprecatedKeyStyle(str, DirAlias.start, DirAlias.before);
            return dirCache(str, hyphenCase, themeVariables, DirAlias.start);
        }
        else if (hyphenCase.indexOf(DirAlias.end) !== -1) {
            warnDeprecatedKeyStyle(str, DirAlias.end, DirAlias.after);
            return dirCache(str, hyphenCase, themeVariables, DirAlias.end);
        }
        else if (hyphenCase.indexOf(DirAlias.before) !== -1) {
            return dirCache(str, hyphenCase, themeVariables, DirAlias.before);
        }
        else if (hyphenCase.indexOf(DirAlias.after) !== -1) {
            return dirCache(str, hyphenCase, themeVariables, DirAlias.after);
        }
        else if (hyphenCase.indexOf(YPosition.above) !== -1) {
            return YPositionCache(str, hyphenCase, themeVariables, YPosition.above, TOP);
        }
        else if (hyphenCase.indexOf(YPosition.below) !== -1) {
            return YPositionCache(str, hyphenCase, themeVariables, YPosition.below, BOTTOM);
        }
        return hyphenCase;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function toClassNameValid(str) {
        /** @type {?} */
        var s = str.replace(/^[0-9]|[^\w\-]/g, function (_) {
            return "_" + _.charCodeAt(0);
        });
        return toHyphenCase(s);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function toHyphenCase(str) {
        return str.replace(/([A-Z])/g, function (g) { return "-" + g[0].toLowerCase(); });
    }
    /**
     * @param {?} str
     * @param {?} themeVariables
     * @return {?}
     */
    function converterToCssKeyAndStyleCache(str, themeVariables) {
        /** @type {?} */
        var map = STYLE_KEYS_MAP[themeVariables.direction];
        return str in map
            ? map[str]
            : map[str] = converterToCssKeyAndStyle(str, themeVariables);
    }
    /** @type {?} */
    var ignoreCSSKEY = {
        'break-after': 'break-after',
        'break-before': 'break-before',
        'page-break-after': 'page-break-after',
        'page-break-before': 'page-break-before'
    };
    /** @type {?} */
    var STYLE_KEYS_MAP = {
        rtl: __assign({}, ignoreCSSKEY),
        ltr: __assign({}, ignoreCSSKEY)
    };
    /** @type {?} */
    var BOTTOM = 'bottom';
    /** @type {?} */
    var TOP = 'top';
    /**
     * @param {?} original
     * @param {?} val
     * @param {?} themeVariables
     * @param {?} dirAlias
     * @return {?}
     */
    function dirCache(original, val, themeVariables, dirAlias) {
        /** @type {?} */
        var map = STYLE_KEYS_MAP[themeVariables.direction];
        // Replace in original, for do not repeat this again
        return map[original] = val.replace(dirAlias, themeVariables.getDirection(dirAlias));
    }
    /**
     * @param {?} original
     * @param {?} val
     * @param {?} themeVariables
     * @param {?} pos
     * @param {?} to
     * @return {?}
     */
    function YPositionCache(original, val, themeVariables, pos, to) {
        /** @type {?} */
        var map = STYLE_KEYS_MAP[themeVariables.direction];
        // Replace in original, for do not repeat this again
        return map[original] = val.replace(pos, to);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    /**
     * @return {?}
     */
    function createNextClassId() {
        return "i" + (nextClassId++).toString(36);
    }
    /**
     * @return {?}
     */
    function createNextKeyframeId() {
        return "k" + (nextKeyFrameId++).toString(36);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NgTranscludeDirective = /** @class */ (function () {
        function NgTranscludeDirective(_viewRef) {
            this._viewRef = _viewRef;
        }
        Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngTransclude;
            },
            set: /**
             * @param {?} templateRef
             * @return {?}
             */ function (templateRef) {
                if (templateRef) {
                    this._ngTransclude = templateRef;
                    this._viewRef.createEmbeddedView(templateRef);
                }
                else {
                    this._ngTransclude = null;
                    this._viewRef.clear();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgTranscludeDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._viewRef.remove();
            };
        NgTranscludeDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngTransclude]'
                    },] }
        ];
        /** @nocollapse */
        NgTranscludeDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef }
            ];
        };
        NgTranscludeDirective.propDecorators = {
            ngTransclude: [{ type: i0.Input }]
        };
        return NgTranscludeDirective;
    }());
    var NgTranscludeModule = /** @class */ (function () {
        function NgTranscludeModule() {
        }
        NgTranscludeModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [NgTranscludeDirective],
                        declarations: [NgTranscludeDirective]
                    },] }
        ];
        return NgTranscludeModule;
    }());
    /**
     * @ignore
     * @param {?} element
     * @return {?}
     */
    function getNativeElement(element) {
        return element instanceof i0.ElementRef ? element.nativeElement : element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_VALUE = '';
    /** @type {?} */
    var STYLE_PRIORITY = -1;
    /**
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinStyleUpdater(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            /**
             * @return {?}
             */
            class_1.prototype.setAutoContrast = /**
             * @return {?}
             */
                function () {
                    this._autoContrast = true;
                };
            /**
             * @param {?} element
             * @return {?}
             */
            class_1.prototype.updateStyle = /**
             * @param {?} element
             * @return {?}
             */
                function (element) {
                    /** @type {?} */
                    var __bg = this.bg;
                    /** @type {?} */
                    var __color = this.color;
                    /** @type {?} */
                    var __raised = this.raised;
                    /** @type {?} */
                    var __elevation = this.elevation;
                    /** @type {?} */
                    var __disabled = this.disabled;
                    /** @type {?} */
                    var __outlined = this.outlined;
                    /** @type {?} */
                    var __shadowColor = this.shadowColor;
                    /** @type {?} */
                    var __isContrast = this._autoContrast && !__color || __color === 'auto';
                    /** @type {?} */
                    var newKey = "common----:" + (__bg || DEFAULT_VALUE) + "\u00B7" + (__color || DEFAULT_VALUE) + "\u00B7" + (__raised || DEFAULT_VALUE) + "\u00B7" + (__elevation || DEFAULT_VALUE) + "\u00B7" + (__disabled || DEFAULT_VALUE) + "\u00B7" + (__outlined || DEFAULT_VALUE) + "\u00B7" + (__shadowColor || DEFAULT_VALUE) + "\u00B7" + (__isContrast || DEFAULT_VALUE);
                    this._classNameAnonymous = this._theme.addStyle(newKey, function (theme) {
                        /** @type {?} */
                        var style = {};
                        if (__outlined) {
                            style.border = '1px solid currentColor';
                        }
                        if (__disabled) {
                            style.color = theme.text.disabled;
                            style.pointerEvents = 'none';
                            if (__bg) {
                                style.background = theme.disabled.default;
                            }
                        }
                        else {
                            if (__bg) {
                                style.background = theme.colorOf(__bg);
                                if (__isContrast) {
                                    style.color = theme.colorOf(__bg + ":contrast");
                                }
                            }
                            if (!style.color && __color) {
                                style.color = theme.colorOf(__color);
                            }
                            if (__raised || __elevation) {
                                if (!__bg) {
                                    style.background = theme.background.primary.default;
                                }
                                /** @type {?} */
                                var backgroundColorCss = style.background !== __bg && theme.colorOf(__bg || 'background:primary', 'shadow');
                                /** @type {?} */
                                var shadowColor = (__shadowColor && theme.colorOf(__shadowColor)) || backgroundColorCss || style.background || style.color || theme.shadow;
                                style.boxShadow = shadowBuilder(__elevation || 3, shadowColor);
                                if (!__elevation) {
                                    style['&:active'] = {
                                        boxShadow: shadowBuilder(8, shadowColor)
                                    };
                                }
                            }
                        }
                        return ( /** @type {?} */(style));
                    }, getNativeElement(element), this._classNameAnonymous, STYLE_PRIORITY);
                };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function toBoolean(value) {
        return value != null && "" + value !== 'false';
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var RippleRef = /** @class */ (function () {
        function RippleRef() {
            this.state = true;
            this.timestamp = -Date.now();
            this.container = document.createElement('span');
        }
        /**
         * @return {?}
         */
        RippleRef.prototype.end = /**
         * @return {?}
         */
            function () {
                this.state = false;
                this.timestamp += Date.now();
            };
        return RippleRef;
    }());
    var Ripple = /** @class */ (function () {
        function Ripple(_themeVariables, _ngZone, classes, _containerElement, _triggerElement) {
            this._themeVariables = _themeVariables;
            this._ngZone = _ngZone;
            this.classes = classes;
            this._containerElement = _containerElement;
            this._triggerElement = _triggerElement;
            this._eventHandlers = new Map();
            this.config = {};
            this._transitionDuration = this._themeVariables.ripple.duration;
            this._eventOptions = ( /** @type {?} */({ passive: true }));
            if (Platform.isBrowser) {
                if (typeof PointerEvent === 'function' && typeof TouchEvent === 'function') {
                    this._eventHandlers.set('pointerdown', this.onPointerDown.bind(this));
                }
                else {
                    this._eventHandlers.set('mousedown', this.onPointerDown.bind(this));
                }
                this._eventHandlers.set('touchend', this.onPointerLeave.bind(this));
                this._eventHandlers.set('touchcancel', this.onPointerLeave.bind(this));
                this._eventHandlers.set('mouseup', this.onPointerLeave.bind(this));
                this._eventHandlers.set('mouseleave', this.onPointerLeave.bind(this));
                if (!_triggerElement) {
                    _triggerElement = _containerElement;
                }
                this.setTriggerElement(_triggerElement);
            }
        }
        /**
         * @param {?} config
         * @return {?}
         */
        Ripple.prototype.setConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                this.config = config;
            };
        Object.defineProperty(Ripple.prototype, "_rectContainer", {
            get: /**
             * @return {?}
             */ function () {
                return this._containerElement.getBoundingClientRect();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} element
         * @return {?}
         */
        Ripple.prototype.setTriggerElement = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                var _this = this;
                if (element) {
                    this._ngZone.runOutsideAngular(function () {
                        _this._eventHandlers.forEach(function (fn, type) { return element.addEventListener(type, fn, _this._eventOptions); });
                    });
                }
                this._triggerElement = element;
            };
        /**
         * @param {?} styles
         * @return {?}
         */
        Ripple.prototype.createRipple = /**
         * @param {?} styles
         * @return {?}
         */
            function (styles) {
                this._rippleRef = new RippleRef();
                /** @type {?} */
                var container = this._rippleRef.container;
                container.className = this.classes.rippleContainer;
                for (var key in styles) {
                    if (styles.hasOwnProperty(key)) {
                        /** @type {?} */
                        var element = styles[key];
                        if (typeof element === 'number') {
                            container.style[key] = element + "px";
                        }
                        else {
                            container.style[key] = element;
                        }
                    }
                }
                this._containerElement.appendChild(container);
                window.getComputedStyle(container).getPropertyValue('opacity');
                container.style.transform = "scale(1)";
            };
        /**
         * @param {?} event
         * @return {?}
         */
        Ripple.prototype.onPointerDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.config.disabled) {
                    /**Destroy previous ripple if exist */
                    this.endRipple();
                    this.startRipple(event, this.config);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        Ripple.prototype.onPointerLeave = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.config.disabled) {
                    this.endRipple();
                }
            };
        /**
         * @param {?} event
         * @param {?} rippleConfig
         * @return {?}
         */
        Ripple.prototype.startRipple = /**
         * @param {?} event
         * @param {?} rippleConfig
         * @return {?}
         */
            function (event, rippleConfig) {
                /** @type {?} */
                var containerRect = this._rectContainer;
                /** @type {?} */
                var x = event.clientX;
                /** @type {?} */
                var y = event.clientY;
                if (rippleConfig.centered) {
                    x = containerRect.left + containerRect.width / 2;
                    y = containerRect.top + containerRect.height / 2;
                }
                /** @type {?} */
                var left = x - containerRect.left;
                /** @type {?} */
                var top = y - containerRect.top;
                /** @type {?} */
                var radius = rippleConfig.radius === 'containerSize' ? maxSize(containerRect) / 2 : rippleConfig.radius || rippleRadius(x, y, containerRect);
                if (rippleConfig.percentageToIncrease) {
                    radius += radius * rippleConfig.percentageToIncrease / 100;
                }
                this.createRipple({
                    left: left - radius,
                    top: top - radius,
                    width: radius * 2,
                    height: radius * 2,
                    transitionDuration: this._transitionDuration + "ms"
                });
            };
        /**
         * @param {?} fn
         * @param {?=} delay
         * @return {?}
         */
        Ripple.prototype.runTimeoutOutsideZone = /**
         * @param {?} fn
         * @param {?=} delay
         * @return {?}
         */
            function (fn, delay) {
                if (delay === void 0) {
                    delay = 0;
                }
                this._ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
            };
        /**
         * @return {?}
         */
        Ripple.prototype.endRipple = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var rippleRef = this._rippleRef || null;
                /** @type {?} */
                var duration = this._transitionDuration;
                if (rippleRef && rippleRef.state) {
                    rippleRef.end();
                    this.runTimeoutOutsideZone(function () {
                        rippleRef.container.style.opacity = '0';
                        rippleRef.container.style.transitionDuration = _this._transitionDuration / 5 + "ms";
                        // }, rippleRef.timestamp < duration ? duration : 0);
                        // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) : 0);
                    }, rippleRef.timestamp < duration ? duration * .15 : 0);
                    this.runTimeoutOutsideZone(function () {
                        rippleRef.container.parentNode.removeChild(rippleRef.container);
                        // }, rippleRef.timestamp < duration ? duration * 2 : duration);
                        // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) * 2 : duration);
                    }, rippleRef.timestamp < duration ? duration * 2 : duration);
                    this._rippleRef = null;
                }
            };
        /**
         * @return {?}
         */
        Ripple.prototype.removeEvents = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._triggerElement) {
                    this._eventHandlers.forEach(function (fn, type) {
                        _this._triggerElement.removeEventListener(type, fn, _this._eventOptions);
                    });
                }
            };
        return Ripple;
    }());
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} rect
     * @return {?}
     */
    function rippleRadius(x, y, rect) {
        /** @type {?} */
        var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
        /** @type {?} */
        var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
        return Math.sqrt(distX * distX + distY * distY);
    }
    /**
     * @param {?} rect
     * @return {?}
     */
    function maxSize(rect) {
        return Math.max(rect.width, rect.height);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LY_COMMON_STYLES = {
        fill: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            width: '1px',
            outline: 0,
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none'
        },
        button: {
            '-webkit-tap-highlight-color': 'transparent',
            backgroundColor: "transparent",
            border: 0,
            '-moz-appearance': 'none',
            '-webkit-appearance': 'none',
            margin: 0,
            outline: 'none',
            boxSizing: 'border-box',
            position: 'relative',
            textDecorationLine: 'none',
            '-webkit-text-decoration-line': 'none',
            '&::-moz-focus-inner': {
                border: 0
            }
        }
    };
    var LyCoreStyles = /** @class */ (function () {
        function LyCoreStyles(theme) {
            this.theme = theme;
            this.classes = this.theme.addStyleSheet(LY_COMMON_STYLES);
        }
        LyCoreStyles.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        LyCoreStyles.ctorParameters = function () {
            return [
                { type: LyTheme2 }
            ];
        };
        /** @nocollapse */ LyCoreStyles.ngInjectableDef = i0.defineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(i0.inject(LyTheme2)); }, token: LyCoreStyles, providedIn: "root" });
        return LyCoreStyles;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var styles = function (theme) {
        return ({
            rippleContainer: {
                position: 'absolute',
                width: '2px',
                height: '2px',
                background: 'currentColor',
                opacity: '.2',
                borderRadius: '50%',
                transform: 'scale(0)',
                transition: "opacity " + theme.ripple.transition.opacity + ",transform " + theme.ripple.transition.transform,
                pointerEvents: 'none'
            },
            container: __assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' })
        });
    };
    var LyRippleService = /** @class */ (function () {
        function LyRippleService(theme) {
            this.theme = theme;
            this.classes = this.theme.addStyleSheet(styles);
        }
        LyRippleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LyRippleService.ctorParameters = function () {
            return [
                { type: LyTheme2 }
            ];
        };
        /** @nocollapse */ LyRippleService.ngInjectableDef = i0.defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(i0.inject(LyTheme2)); }, token: LyRippleService, providedIn: "root" });
        return LyRippleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinDisableRipple(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._rippleConfig = {};
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disableRipple", {
                get: /**
                 * @return {?}
                 */ function () { return this._disableRipple; },
                set: /**
                 * @param {?} val
                 * @return {?}
                 */ function (val) {
                    var _this = this;
                    if (Platform.isBrowser && val !== this._disableRipple) {
                        /** @type {?} */
                        var newVal = this._disableRipple = toBoolean(val);
                        // remove previous ripple if exist
                        this._removeRippleEvents();
                        if (!newVal) {
                            // add ripple
                            Promise.resolve(null).then(function () {
                                /** @type {?} */
                                var triggerElement = _this._triggerElement.nativeElement;
                                /** @type {?} */
                                var rippleContainer = (_this._rippleContainer && _this._rippleContainer.nativeElement) || triggerElement;
                                _this._ripple = new Ripple(_this._theme.config, _this._ngZone, _this._theme.addStyleSheet(styles), rippleContainer, triggerElement);
                                _this._ripple.setConfig(_this._rippleConfig);
                            });
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @return {?}
             */
            class_1.prototype._removeRippleEvents = /**
             * @return {?}
             */
                function () {
                    if (Platform.isBrowser) {
                        if (this._ripple) {
                            this._ripple.removeEvents();
                            this._ripple = null;
                        }
                    }
                };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinDisabled(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._disabled = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disabled", {
                get: /**
                 * @return {?}
                 */ function () { return this._disabled; },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) { this._disabled = toBoolean(value); },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_COLOR = 'primary';
    /**
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinColor(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "color", {
                get: /**
                 * @return {?}
                 */ function () { return this._color; },
                set: /**
                 * @param {?} val
                 * @return {?}
                 */ function (val) {
                    /** @type {?} */
                    var defaultColor = val || DEFAULT_COLOR;
                    if (defaultColor !== this.color) {
                        this._color = defaultColor;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_BG = 'primary';
    /**
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinBg(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "bg", {
                get: /**
                 * @return {?}
                 */ function () { return this._bg; },
                set: /**
                 * @param {?} val
                 * @return {?}
                 */ function (val) {
                    /** @type {?} */
                    var defaultColor = val || DEFAULT_BG;
                    if (defaultColor !== this.bg) {
                        this._bg = defaultColor;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinRaised(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "raised", {
                get: /**
                 * @return {?}
                 */ function () { return this._raised; },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) { this._raised = toBoolean(value); },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinOutlined(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "outlined", {
                get: /**
                 * @return {?}
                 */ function () { return this._outlined; },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) { this._outlined = toBoolean(value); },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinElevation(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "elevation", {
                get: /**
                 * @return {?}
                 */ function () { return this._elevation; },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) { this._elevation = value; },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinShadowColor(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args)) || this;
            }
            Object.defineProperty(class_1.prototype, "shadowColor", {
                get: /**
                 * @return {?}
                 */ function () { return this._shadowColor; },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) { this._shadowColor = value; },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_BG$1 = 'paper';
    var LyPaperBase = /** @class */ (function () {
        function LyPaperBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyPaperBase;
    }());
    /** @type {?} */
    var LyPaperMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyPaperBase))))))));
    var LyPaper = /** @class */ (function (_super) {
        __extends(LyPaper, _super);
        function LyPaper(theme, ngZone, _el, _renderer) {
            var _this = _super.call(this, theme, ngZone) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            _this.setAutoContrast();
            _this._triggerElement = _this._el;
            _this._rippleContainer = _this._el;
            return _this;
        }
        Object.defineProperty(LyPaper.prototype, "hasText", {
            get: /**
             * @return {?}
             */ function () {
                return this._hasText;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._hasText = toBoolean(val);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyPaper.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.updateStyle(this._el);
            };
        /**
         * @return {?}
         */
        LyPaper.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.bg && !this.hasText) {
                    this.bg = DEFAULT_BG$1;
                    this.updateStyle(this._el);
                    this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyPaper', ({
                        display: 'block'
                    })));
                }
            };
        /**
         * @return {?}
         */
        LyPaper.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._removeRippleEvents();
            };
        LyPaper.decorators = [
            { type: i0.Directive, args: [{
                        selector: "ly-paper, [ly-paper], [ly-text]",
                        inputs: [
                            'bg',
                            'color',
                            'raised',
                            'outlined',
                            'elevation',
                            'shadowColor',
                            'disableRipple'
                        ]
                    },] }
        ];
        /** @nocollapse */
        LyPaper.ctorParameters = function () {
            return [
                { type: LyTheme2 },
                { type: i0.NgZone },
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        LyPaper.propDecorators = {
            hasText: [{ type: i0.Input, args: ['ly-text',] }]
        };
        return LyPaper;
    }(LyPaperMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyWithClass = /** @class */ (function () {
        function LyWithClass(el) {
            this.el = el;
        }
        Object.defineProperty(LyWithClass.prototype, "withClass", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (!val) {
                    throw new Error("'" + val + "' is not valid className");
                }
                this.el.nativeElement.classList.add(val);
            },
            enumerable: true,
            configurable: true
        });
        LyWithClass.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[withClass]'
                    },] }
        ];
        /** @nocollapse */
        LyWithClass.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        LyWithClass.propDecorators = {
            withClass: [{ type: i0.Input }]
        };
        return LyWithClass;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyCommonModule = /** @class */ (function () {
        function LyCommonModule() {
        }
        LyCommonModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [LyWithClass, LyPaper],
                        exports: [LyWithClass, LyPaper]
                    },] }
        ];
        return LyCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @param {?} obj
     * @return {?}
     */
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    function exactPosition(elem) {
        /** @type {?} */
        var docElem;
        /** @type {?} */
        var win;
        /** @type {?} */
        var box = { top: 0, left: 0 };
        /** @type {?} */
        var doc = elem && elem.ownerDocument;
        docElem = doc.documentElement;
        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @param {?} defaultValue
     * @return {?}
     */
    function defaultEntry(value, defaultValue) {
        return value !== '' && value !== void 0 ? value : defaultValue;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    // Element to move, time in ms to animate
    /**
     * @param {?} element
     * @param {?} duration
     * @return {?}
     */
    function scrollTo(element, duration) {
        /** @type {?} */
        var e = document.documentElement;
        if (e.scrollTop === 0) {
            /** @type {?} */
            var t = e.scrollTop;
            ++e.scrollTop;
            e = t + 1 === e.scrollTop-- ? e : document.body;
        }
        scrollToC(e, e.scrollTop, element, duration);
    }
    // Element to move, element or px from, element or px to, time in ms to animate
    /**
     * @param {?} element
     * @param {?} from
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    function scrollToC(element, from, to, duration) {
        if (duration <= 0) {
            return;
        }
        if (typeof from === 'object') {
            from = from.offsetTop;
        }
        if (typeof to === 'object') {
            to = to.offsetTop;
        }
        createScrollWithAnimation(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
    }
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @param {?=} p
     * @param {?=} motion
     * @return {?}
     */
    function scrollWithAnimation(element, to, duration, p, motion) {
        /** @type {?} */
        var _motion = motion || easeOutCuaic;
        var scrollLeft = element.scrollLeft;
        return createScrollWithAnimation(element, scrollLeft, to, 0, 1 / duration, 20, _motion, p);
    }
    /**
     * @param {?} element
     * @param {?} xFrom
     * @param {?} xTo
     * @param {?} t01
     * @param {?} speed
     * @param {?} step
     * @param {?} motion
     * @param {?=} p
     * @return {?}
     */
    function createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p) {
        /** @type {?} */
        var scrollT = p === 'y' ? 'scrollTop' : 'scrollLeft';
        if (t01 < 0 || t01 > 1 || speed <= 0) {
            element[scrollT] = xTo;
            return;
        }
        element[scrollT] = xFrom - (xFrom - xTo) * motion(t01);
        t01 += speed * step;
        setTimeout(function () {
            createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p);
        }, step);
    }
    // function linearTween(t: number) {
    //   return t;
    // }
    // function easeInQuad(t: number) {
    //   return t * t;
    // }
    // function easeOutQuad(t: number) {
    //   return -t * (t - 2);
    // }
    // function easeInOutQuad(t: number) {
    //   t /= 0.5;
    //   if (t < 1) {return t * t / 2; }
    //   t--;
    //   return (t * (t - 2) - 1) / 2;
    // }
    // function easeInCuaic(t: number) {
    //   return t * t * t;
    // }
    /**
     * @param {?} t
     * @return {?}
     */
    function easeOutCuaic(t) {
        t--;
        return t * t * t + 1;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var FocusStatus = {
        /**mouse and/or touch*/
        DEFAULT: 'default',
        /** keyboard and/or program*/
        KEYBOARD: 'keyboard',
    };
    var LyFocusState = /** @class */ (function () {
        function LyFocusState(_ngZone) {
            this._ngZone = _ngZone;
            this._elementMap = new Map();
            this._count = 0;
        }
        /**
         * @param {?} element
         * @param {?=} keyElement
         * @return {?}
         */
        LyFocusState.prototype.listen = /**
         * @param {?} element
         * @param {?=} keyElement
         * @return {?}
         */
            function (element, keyElement) {
                var _this = this;
                if (!Platform.isBrowser) {
                    // return null if it is not browser platform
                    return null;
                }
                /** @type {?} */
                var nativeElement = getNativeElement(element);
                /** @type {?} */
                var key = keyElement && getNativeElement(keyElement) || nativeElement;
                if (this._elementMap.has(key)) {
                    return this._elementMap.get(key).subject.asObservable();
                }
                /** @type {?} */
                var focusState = {
                    unlisten: null,
                    subject: new rxjs.Subject()
                };
                this._incrementCount();
                /** @type {?} */
                var focusListener = function (event) { return _this._on(event, focusState.subject); };
                /** @type {?} */
                var blurListener = function (event) { return _this._on(event, focusState.subject); };
                focusState.unlisten = function () {
                    nativeElement.removeEventListener('focus', focusListener, true);
                    nativeElement.removeEventListener('blur', blurListener, true);
                };
                this._elementMap.set(key, focusState);
                this._ngZone.runOutsideAngular(function () {
                    nativeElement.addEventListener('focus', focusListener, true);
                    nativeElement.addEventListener('blur', blurListener, true);
                });
                return focusState.subject.asObservable();
            };
        /**
         * @param {?} element
         * @return {?}
         */
        LyFocusState.prototype.unlisten = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                if (!Platform.isBrowser) {
                    return;
                }
                /** @type {?} */
                var el = getNativeElement(element);
                /** @type {?} */
                var focusStateInfo = this._elementMap.get(el);
                if (focusStateInfo) {
                    focusStateInfo.unlisten();
                    this._elementMap.delete(el);
                    this._decrementCount();
                }
            };
        /**
         * @param {?} event
         * @param {?} subject
         * @return {?}
         */
        LyFocusState.prototype._on = /**
         * @param {?} event
         * @param {?} subject
         * @return {?}
         */
            function (event, subject) {
                var _this = this;
                this._ngZone.run(function () {
                    return subject.next({
                        event: event,
                        by: _this._currentEvent || 'keyboard'
                    });
                });
            };
        /**
         * @return {?}
         */
        LyFocusState.prototype._addGlobalListeners = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!Platform.isBrowser) {
                    return;
                }
                /** @type {?} */
                var eventListenerOptions = supportsPassiveEventListeners
                    ? {
                        passive: true,
                        capture: true
                    } : false;
                /** @type {?} */
                var documentKeydownListener = function () { return _this._ngZone.runOutsideAngular(function () { return _this._currentEvent = 'keyboard'; }); };
                /** @type {?} */
                var documentMousedownListener = function () { return _this._ngZone.runOutsideAngular(function () { return _this._currentEvent = 'mouse'; }); };
                this._ngZone.runOutsideAngular(function () {
                    document.addEventListener('keydown', documentKeydownListener, eventListenerOptions);
                    document.addEventListener('mousedown', documentMousedownListener, eventListenerOptions);
                });
                this._removeGlobalListeners = function () {
                    document.removeEventListener('keydown', documentKeydownListener, eventListenerOptions);
                    document.removeEventListener('mousedown', documentMousedownListener, eventListenerOptions);
                };
            };
        /**
         * @return {?}
         */
        LyFocusState.prototype._incrementCount = /**
         * @return {?}
         */
            function () {
                if (++this._count === 1) {
                    this._addGlobalListeners();
                }
            };
        /**
         * @return {?}
         */
        LyFocusState.prototype._decrementCount = /**
         * @return {?}
         */
            function () {
                if (!--this._count) {
                    this._removeGlobalListeners();
                }
            };
        /**
         * @return {?}
         */
        LyFocusState.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._elementMap.forEach(function (_, element) { return _this.unlisten(element); });
            };
        LyFocusState.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LyFocusState.ctorParameters = function () {
            return [
                { type: i0.NgZone }
            ];
        };
        /** @nocollapse */ LyFocusState.ngInjectableDef = i0.defineInjectable({ factory: function LyFocusState_Factory() { return new LyFocusState(i0.inject(i0.NgZone)); }, token: LyFocusState, providedIn: "root" });
        return LyFocusState;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AUI_VERSION = '1.9.10-nightly.20181220-jpwc94wi';
    /** @type {?} */
    var AUI_LAST_UPDATE = '2018-12-20T08:22:55.504Z';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LY_HAMMER_OPTIONS = new i0.InjectionToken('LY_HAMMER_OPTIONS');
    /** @type {?} */
    var HAMMER_GESTURES_EVENTS = [
        'slide',
        'slidestart',
        'slideend',
        'slideright',
        'slideleft',
        'slidecancel'
    ];
    var LyHammerGestureConfig = /** @class */ (function (_super) {
        __extends(LyHammerGestureConfig, _super);
        function LyHammerGestureConfig(_hammerOptions) {
            var _this = _super.call(this) || this;
            _this._hammerOptions = _hammerOptions;
            _this.events = HAMMER_GESTURES_EVENTS;
            return _this;
        }
        /**
         * @param {?} element
         * @return {?}
         */
        LyHammerGestureConfig.prototype.buildHammer = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                /** @type {?} */
                var hammer = typeof window !== 'undefined' ? (( /** @type {?} */(window))).Hammer : null;
                /** @type {?} */
                var mc = new hammer(element, this._hammerOptions || {});
                /** @type {?} */
                var pan = new hammer.Pan();
                /** @type {?} */
                var swipe = new hammer.Swipe();
                /** @type {?} */
                var slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
                pan.recognizeWith(swipe);
                // Add customized gestures to Hammer manager
                mc.add([swipe, pan, slide]);
                return mc;
            };
        /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
        /**
         * Creates a new recognizer, without affecting the default recognizers of HammerJS
         * @param {?} base
         * @param {?} options
         * @param {...?} inheritances
         * @return {?}
         */
        LyHammerGestureConfig.prototype._createRecognizer = /**
         * Creates a new recognizer, without affecting the default recognizers of HammerJS
         * @param {?} base
         * @param {?} options
         * @param {...?} inheritances
         * @return {?}
         */
            function (base, options) {
                var inheritances = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    inheritances[_i - 2] = arguments[_i];
                }
                /** @type {?} */
                var recognizer = new (base.constructor)(options);
                inheritances.push(base);
                inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
                return recognizer;
            };
        LyHammerGestureConfig.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        LyHammerGestureConfig.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [LY_HAMMER_OPTIONS,] }] }
            ];
        };
        return LyHammerGestureConfig;
    }(platformBrowser.HammerGestureConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyThemeModule = /** @class */ (function () {
        function LyThemeModule() {
        }
        /**
         * @param {?} themeName
         * @return {?}
         */
        LyThemeModule.setTheme = /**
         * @param {?} themeName
         * @return {?}
         */
            function (themeName) {
                return {
                    ngModule: LyThemeModule,
                    providers: [
                        [LyTheme2],
                        { provide: LY_THEME_NAME, useValue: themeName }
                    ]
                };
            };
        LyThemeModule.decorators = [
            { type: i0.NgModule }
        ];
        return LyThemeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var Undefined = /** @class */ (function () {
        function Undefined() {
        }
        return Undefined;
    }());
    /** @type {?} */
    var UndefinedValue = new Undefined();

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var InvertMediaQuery = {
        No: 0,
        Yes: 1,
    };
    InvertMediaQuery[InvertMediaQuery.No] = 'No';
    InvertMediaQuery[InvertMediaQuery.Yes] = 'Yes';
    /**
     * @param {?} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function transformMediaQuery(media, invertMediaQuery) {
        if (invertMediaQuery === void 0) {
            invertMediaQuery = InvertMediaQuery.No;
        }
        if (media && invertMediaQuery === InvertMediaQuery.Yes) {
            /** @type {?} */
            var newVal = media.split(',').map(function (_) { return "not " + _; });
            return newVal;
        }
        return media;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var styles$1 = function (theme) {
        return ({
            overlayBackdrop: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: theme.zIndex.overlay,
                pointerEvents: 'none'
            }
        });
    };
    var WindowScrollService = /** @class */ (function () {
        function WindowScrollService(document, ngZone) {
            var _this = this;
            this.document = document;
            if (Platform.isBrowser) {
                ngZone.runOutsideAngular(function () {
                    _this.scroll$ = rxjs.fromEvent(window.document, 'scroll').pipe(operators.auditTime(20), operators.map(function () {
                        return window.scrollY || _this.document.documentElement.scrollTop;
                    }), operators.share());
                });
            }
            else {
                this.scroll$ = rxjs.empty();
            }
        }
        WindowScrollService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        WindowScrollService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.NgZone }
            ];
        };
        /** @nocollapse */ WindowScrollService.ngInjectableDef = i0.defineInjectable({ factory: function WindowScrollService_Factory() { return new WindowScrollService(i0.inject(i1.DOCUMENT), i0.inject(i0.NgZone)); }, token: WindowScrollService, providedIn: "root" });
        return WindowScrollService;
    }());
    var LyOverlayContainer = /** @class */ (function () {
        function LyOverlayContainer(theme) {
            this.theme = theme;
            this._classes = this.theme.addStyleSheet(styles$1);
            this._items = new Set();
            if (Platform.isBrowser) {
                /** @type {?} */
                var container = document.createElement('ly-overlay-container');
                document.body.appendChild(container);
                this._containerElement = container;
            }
        }
        Object.defineProperty(LyOverlayContainer.prototype, "containerElement", {
            get: /**
             * @return {?}
             */ function () {
                return this._containerElement;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Add instance
         * @ignore
         */
        /**
         * Add instance
         * @ignore
         * @param {?} item
         * @return {?}
         */
        LyOverlayContainer.prototype._add = /**
         * Add instance
         * @ignore
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this._items.add(item);
                this.containerElement.appendChild(item);
                this._update();
            };
        /**
       * Remove instance
       * @ignore
       */
        /**
         * Remove instance
         * @ignore
         * @param {?} item
         * @return {?}
         */
        LyOverlayContainer.prototype._remove = /**
         * Remove instance
         * @ignore
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.containerElement.removeChild(item);
                this._items.delete(item);
                this._update();
            };
        /**
         * Update styles for overlay container
         * @ignore
         */
        /**
         * Update styles for overlay container
         * @ignore
         * @return {?}
         */
        LyOverlayContainer.prototype._update = /**
         * Update styles for overlay container
         * @ignore
         * @return {?}
         */
            function () {
                if (this._items.size) {
                    if (!this._isActiveOverlayContainer) {
                        this._isActiveOverlayContainer = true;
                        this._containerElement.classList.add(this._classes.overlayBackdrop);
                    }
                }
                else if (this._isActiveOverlayContainer) {
                    this._containerElement.classList.remove(this._classes.overlayBackdrop);
                    this._isActiveOverlayContainer = false;
                }
            };
        LyOverlayContainer.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LyOverlayContainer.ctorParameters = function () {
            return [
                { type: LyTheme2 }
            ];
        };
        /** @nocollapse */ LyOverlayContainer.ngInjectableDef = i0.defineInjectable({ factory: function LyOverlayContainer_Factory() { return new LyOverlayContainer(i0.inject(LyTheme2)); }, token: LyOverlayContainer, providedIn: "root" });
        return LyOverlayContainer;
    }());
    /** @type {?} */
    var BACKDROP_STYLES = ({
        backdrop: {
            pointerEvents: 'all',
            userSelect: 'none'
        }
    });
    var LyOverlayBackdrop = /** @class */ (function () {
        function LyOverlayBackdrop(el, _theme, _overlayConfig, commonStyles) {
            this._theme = _theme;
            this._overlayConfig = _overlayConfig;
            /**
             * @ignore
             */
            this.classes = this._theme.addStyleSheet(BACKDROP_STYLES);
            el.nativeElement.classList.add(commonStyles.classes.fill);
            if (_overlayConfig.backdrop) {
                el.nativeElement.classList.add(this.classes.backdrop);
            }
        }
        /**
         * @return {?}
         */
        LyOverlayBackdrop.prototype.onclick = /**
         * @return {?}
         */
            function () {
                this._overlayConfig.fnDestroy();
            };
        LyOverlayBackdrop.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ly-overlay-backdrop',
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        LyOverlayBackdrop.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: LyTheme2 },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['overlayConfig',] }] },
                { type: LyCoreStyles }
            ];
        };
        LyOverlayBackdrop.propDecorators = {
            onclick: [{ type: i0.HostListener, args: ['click',] }]
        };
        return LyOverlayBackdrop;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ResizeService = /** @class */ (function () {
        function ResizeService(document, ngZone) {
            var _this = this;
            this.document = document;
            if (Platform.isBrowser) {
                ngZone.runOutsideAngular(function () {
                    _this.resize$ = rxjs.fromEvent(window, 'resize').pipe(operators.auditTime(20), operators.map(function () {
                        return window.innerHeight || _this.document.documentElement.clientHeight;
                    }), operators.share());
                });
            }
            else {
                this.resize$ = rxjs.empty();
            }
        }
        ResizeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ResizeService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.NgZone }
            ];
        };
        /** @nocollapse */ ResizeService.ngInjectableDef = i0.defineInjectable({ factory: function ResizeService_Factory() { return new ResizeService(i0.inject(i1.DOCUMENT), i0.inject(i0.NgZone)); }, token: ResizeService, providedIn: "root" });
        return ResizeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CreateFromTemplateRef = /** @class */ (function () {
        function CreateFromTemplateRef(_componentFactoryResolver, _appRef, _templateRef, _overlayContainer, _context, _injector, windowScroll, resizeService, config) {
            var _this = this;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._appRef = _appRef;
            this._overlayContainer = _overlayContainer;
            this._injector = _injector;
            this.windowSRSub = rxjs.Subscription.EMPTY;
            // this._viewRef = _templateRef.createEmbeddedView(_context);
            // this._viewRef.detectChanges();
            this._el = document.createElement('div');
            // this._viewRef.rootNodes.forEach(rootNode => container.appendChild(rootNode));
            /** @type {?} */
            var __styles = __assign({ position: 'absolute', display: 'flex', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', pointerEvents: 'all' }, config.styles);
            /** @type {?} */
            var newInjector = i0.Injector.create([
                {
                    provide: 'overlayConfig',
                    useValue: ( /** @type {?} */(__assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles })))
                }
            ], this._injector);
            this.updateStyles(__styles);
            if (config.host) {
                this.windowSRSub = rxjs.merge(windowScroll.scroll$, resizeService.resize$).subscribe(function () {
                    /** @type {?} */
                    var rect = config.host.getBoundingClientRect();
                    /** @type {?} */
                    var newStyles = {
                        top: rect.top,
                        left: rect.left
                    };
                    _this.updateStyles(newStyles);
                });
            }
            /** @type {?} */
            var classes = config.classes;
            if (classes && classes.length) {
                classes.forEach(function (className) { return (( /** @type {?} */(_this._el))).classList.add(className); });
            }
            this._compRefOverlayBackdrop = this.generateComponent(LyOverlayBackdrop, newInjector);
            this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
            /** @type {?} */
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._add(backdropEl);
            this._appendComponentToBody(_templateRef, _context, this._injector);
        }
        Object.defineProperty(CreateFromTemplateRef.prototype, "containerElement", {
            get: /**
             * @return {?}
             */ function () {
                return this._el;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} __styles
         * @return {?}
         */
        CreateFromTemplateRef.prototype.updateStyles = /**
         * @param {?} __styles
         * @return {?}
         */
            function (__styles) {
                /** Apply styles */
                /** set styles */
                for (var key in __styles) {
                    if (__styles.hasOwnProperty(key)) {
                        /** @type {?} */
                        var styleVal = __styles[key];
                        if (styleVal) {
                            this._el.style[key] = typeof __styles[key] === 'number' ? styleVal + "px" : styleVal;
                        }
                    }
                }
            };
        /**
         * @param {?} type
         * @param {?} context
         * @param {?} injector
         * @return {?}
         */
        CreateFromTemplateRef.prototype._appendComponentToBody = /**
         * @param {?} type
         * @param {?} context
         * @param {?} injector
         * @return {?}
         */
            function (type, context, injector) {
                var _this = this;
                if (type instanceof i0.TemplateRef) {
                    // Create a component reference from the component
                    /** @type {?} */
                    var viewRef = this._viewRef = type.createEmbeddedView(context || {});
                    this._appRef.attachView(viewRef);
                    // Get DOM element from component
                    viewRef.rootNodes.forEach(function (_) { return _this._el.appendChild(_); });
                    // Append DOM element to the body
                    this._overlayContainer._add(this._el);
                }
                else if (typeof type === 'string') {
                    this._el.innerText = type;
                    this._overlayContainer._add(this._el);
                }
                else {
                    this._compRef = this.generateComponent(( /** @type {?} */(type)), injector);
                    this._el = this._compRef.location.nativeElement;
                    this._overlayContainer._add(this._el);
                }
            };
        /**
         * @param {?} type
         * @param {?} injector
         * @return {?}
         */
        CreateFromTemplateRef.prototype.generateComponent = /**
         * @param {?} type
         * @param {?} injector
         * @return {?}
         */
            function (type, injector) {
                /** @type {?} */
                var factory = this._componentFactoryResolver.resolveComponentFactory(type);
                return factory.create(injector);
            };
        /**
         * @return {?}
         */
        CreateFromTemplateRef.prototype.detach = /**
         * @return {?}
         */
            function () {
                if (this._viewRef) {
                    this._appRef.detachView(this._viewRef);
                }
            };
        /**
         * @return {?}
         */
        CreateFromTemplateRef.prototype.remove = /**
         * @return {?}
         */
            function () {
                if (this._viewRef) {
                    this._viewRef.destroy();
                    this._overlayContainer._remove(this._el);
                    this._el = null;
                }
                else if (this._compRef) {
                    this._compRef.destroy();
                    this._overlayContainer._remove(this._el);
                    this._el = null;
                }
                else if (this._el) {
                    // remove if content is string
                    this._overlayContainer._remove(this._el);
                    this._el = null;
                }
                if (this._compRefOverlayBackdrop) {
                    this._appRef.detachView(this._compRefOverlayBackdrop.hostView);
                    this._compRefOverlayBackdrop.destroy();
                    /** @type {?} */
                    var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
                    this._overlayContainer._remove(backdropEl);
                }
                this.windowSRSub.unsubscribe();
            };
        /**
         * @return {?}
         */
        CreateFromTemplateRef.prototype.destroy = /**
         * @return {?}
         */
            function () {
                this.detach();
                this.remove();
            };
        return CreateFromTemplateRef;
    }());
    var LyOverlay = /** @class */ (function () {
        function LyOverlay(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _windowScroll, _resizeService) {
            this._overlayContainer = _overlayContainer;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._appRef = _appRef;
            this._injector = _injector;
            this._windowScroll = _windowScroll;
            this._resizeService = _resizeService;
        }
        /**
         * @param {?} template
         * @param {?=} context
         * @param {?=} config
         * @return {?}
         */
        LyOverlay.prototype.create = /**
         * @param {?} template
         * @param {?=} context
         * @param {?=} config
         * @return {?}
         */
            function (template, context, config) {
                return new CreateFromTemplateRef(this._componentFactoryResolver, this._appRef, template, this._overlayContainer, context, this._injector, this._windowScroll, this._resizeService, config);
            };
        LyOverlay.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LyOverlay.ctorParameters = function () {
            return [
                { type: LyOverlayContainer },
                { type: i0.ComponentFactoryResolver },
                { type: i0.ApplicationRef },
                { type: i0.Injector },
                { type: WindowScrollService },
                { type: ResizeService }
            ];
        };
        /** @nocollapse */ LyOverlay.ngInjectableDef = i0.defineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(i0.inject(LyOverlayContainer), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR), i0.inject(WindowScrollService), i0.inject(ResizeService)); }, token: LyOverlay, providedIn: "root" });
        return LyOverlay;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LyOverlayModule = /** @class */ (function () {
        function LyOverlayModule() {
        }
        LyOverlayModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [LyOverlayBackdrop],
                        entryComponents: [LyOverlayBackdrop]
                    },] }
        ];
        return LyOverlayModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MUTATION_OBSERVER_INIT = {
        characterData: true,
        childList: true,
        subtree: true
    };
    var MutationObserverFactory = /** @class */ (function () {
        function MutationObserverFactory() {
        }
        /**
         * @param {?} callback
         * @return {?}
         */
        MutationObserverFactory.prototype.create = /**
         * @param {?} callback
         * @return {?}
         */
            function (callback) {
                return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
            };
        MutationObserverFactory.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ MutationObserverFactory.ngInjectableDef = i0.defineInjectable({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
        return MutationObserverFactory;
    }());
    var ElementObserver = /** @class */ (function () {
        function ElementObserver(_mutationObserverFactory) {
            this._mutationObserverFactory = _mutationObserverFactory;
            this._observedElements = new Map();
        }
        /**
         * @return {?}
         */
        ElementObserver.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._observedElements.forEach(function (_, element) { return _this.destroy(element); });
            };
        /**
         * @param {?} elementOrRef
         * @param {?} fn
         * @param {?=} options
         * @return {?}
         */
        ElementObserver.prototype.observe = /**
         * @param {?} elementOrRef
         * @param {?} fn
         * @param {?=} options
         * @return {?}
         */
            function (elementOrRef, fn, options) {
                /** @type {?} */
                var element = elementOrRef instanceof i0.ElementRef ? elementOrRef.nativeElement : elementOrRef;
                if (!this._observedElements.has(element)) {
                    /** @type {?} */
                    var observer = this._mutationObserverFactory.create(fn);
                    if (observer) {
                        observer.observe(element, options || MUTATION_OBSERVER_INIT);
                    }
                    this._observedElements.set(element, observer);
                }
                return this._observedElements.get(element);
            };
        /**
         * Destroy Observer
         */
        /**
         * Destroy Observer
         * @param {?} elementOrRef
         * @return {?}
         */
        ElementObserver.prototype.destroy = /**
         * Destroy Observer
         * @param {?} elementOrRef
         * @return {?}
         */
            function (elementOrRef) {
                /** @type {?} */
                var element = elementOrRef instanceof i0.ElementRef ? elementOrRef.nativeElement : elementOrRef;
                if (this._observedElements.has(element)) {
                    this._observedElements.get(element).disconnect();
                    this._observedElements.delete(element);
                }
            };
        ElementObserver.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ElementObserver.ctorParameters = function () {
            return [
                { type: MutationObserverFactory }
            ];
        };
        /** @nocollapse */ ElementObserver.ngInjectableDef = i0.defineInjectable({ factory: function ElementObserver_Factory() { return new ElementObserver(i0.inject(MutationObserverFactory)); }, token: ElementObserver, providedIn: "root" });
        return ElementObserver;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var AlignAlias = {
        rowReverse: 'row-reverse',
        columnReverse: 'column-reverse',
        wrapReverse: 'wrap-reverse',
        start: 'flex-start',
        end: 'flex-end',
        between: 'space-between',
        around: 'space-around',
        evenly: 'space-evenly',
    };

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

    exports.getContrastYIQ = getContrastYIQ;
    exports.shadowBuilderDeprecated = shadowBuilderDeprecated;
    exports.shadowBuilder = shadowBuilder;
    exports.Shadows = Shadows;
    exports.THEME_VARIABLES = THEME_VARIABLES;
    exports.IS_CORE_THEME = IS_CORE_THEME;
    exports.Platform = Platform;
    exports.supportsPassiveEventListeners = supportsPassiveEventListeners;
    exports.LyCommonModule = LyCommonModule;
    exports.getNativeElement = getNativeElement;
    exports.NgTranscludeDirective = NgTranscludeDirective;
    exports.NgTranscludeModule = NgTranscludeModule;
    exports.exactPosition = exactPosition;
    exports.toBoolean = toBoolean;
    exports.defaultEntry = defaultEntry;
    exports.scrollTo = scrollTo;
    exports.scrollToC = scrollToC;
    exports.scrollWithAnimation = scrollWithAnimation;
    exports.FocusStatus = FocusStatus;
    exports.LyFocusState = LyFocusState;
    exports.AUI_VERSION = AUI_VERSION;
    exports.AUI_LAST_UPDATE = AUI_LAST_UPDATE;
    exports.LY_HAMMER_OPTIONS = LY_HAMMER_OPTIONS;
    exports.LyHammerGestureConfig = LyHammerGestureConfig;
    exports.LyPaperBase = LyPaperBase;
    exports.LyPaperMixinBase = LyPaperMixinBase;
    exports.LyPaper = LyPaper;
    exports.CoreTheme = CoreTheme;
    exports.LY_THEME_GLOBAL_VARIABLES = LY_THEME_GLOBAL_VARIABLES;
    exports.LY_THEME = LY_THEME;
    exports.LY_THEME_NAME = LY_THEME_NAME;
    exports.converterToCssKeyAndStyle = converterToCssKeyAndStyle;
    exports.capitalizeFirstLetter = capitalizeFirstLetter;
    exports.StylesInDocument = StylesInDocument;
    exports.LyTheme2 = LyTheme2;
    exports.LyThemeModule = LyThemeModule;
    exports.LY_COMMON_STYLES = LY_COMMON_STYLES;
    exports.LyCoreStyles = LyCoreStyles;
    exports.Undefined = Undefined;
    exports.UndefinedValue = UndefinedValue;
    exports.transformMediaQuery = transformMediaQuery;
    exports.InvertMediaQuery = InvertMediaQuery;
    exports.eachMedia = eachMedia;
    exports.isObject = isObject;
    exports.mergeDeep = mergeDeep;
    exports.LyStyleUtils = LyStyleUtils;
    exports.Dir = Dir;
    exports.DirAlias = DirAlias;
    exports.DirPosition = DirPosition;
    exports.WindowScrollService = WindowScrollService;
    exports.LyOverlayContainer = LyOverlayContainer;
    exports.LyOverlayBackdrop = LyOverlayBackdrop;
    exports.LyOverlay = LyOverlay;
    exports.LyOverlayModule = LyOverlayModule;
    exports.MutationObserverFactory = MutationObserverFactory;
    exports.ElementObserver = ElementObserver;
    exports.ResizeService = ResizeService;
    exports.mixinStyleUpdater = mixinStyleUpdater;
    exports.mixinDisableRipple = mixinDisableRipple;
    exports.mixinDisabled = mixinDisabled;
    exports.mixinColor = mixinColor;
    exports.mixinBg = mixinBg;
    exports.mixinRaised = mixinRaised;
    exports.mixinOutlined = mixinOutlined;
    exports.mixinElevation = mixinElevation;
    exports.mixinShadowColor = mixinShadowColor;
    exports.Ripple = Ripple;
    exports.LyRippleService = LyRippleService;
    exports.getPosition = getPosition;
    exports.YPosition = YPosition;
    exports.XPosition = XPosition;
    exports.Positioning = Positioning;
    exports.AlignAlias = AlignAlias;
    exports.ɵa = LyWithClass;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc3JjL3BhbGV0dGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc2hhZG93LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2FseWxlLWNvbmZpZy1zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3BsYXRmb3JtLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3Bhc3NpdmUtbGlzdGVuZXJzLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZS1jb25maWcudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc3R5bGUtdXRpbHMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3Bvc2l0aW9uL3Bvc2l0aW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lMi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvY29tbW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9idWlsZC1jb21tb24tYmVoYXZpb3JzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvaXMtYm9vbGVhbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9yaXBwbGUvcmlwcGxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlcy9jb3JlLXN0eWxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9yaXBwbGUvcmlwcGxlLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2Rpc2FibGUtcmlwcGxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9kaXNhYmxlZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vY29sb3IudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2JnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9yYWlzZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL291dGxpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9lbGV2YXRpb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL3NoYWRvdy1jb2xvci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9wYXBlci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS93aXRoLWNsYXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZWwvb2Zmc2V0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZGVmYXVsdC1lbnRyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL3Njcm9sbC10by50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy92ZXJzaW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2dlc3R1cmUvZ2VzdHVyZS1jb25maWcudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3VuZGVmaW5lZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXktY29udGFpbmVyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9yZXNpemUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXkubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9tdXRhdGlvbi1vYnNlcnZlci1mYWN0b3J5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3Bvc2l0aW9uL2FsaWduLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFlJUShoZXhjb2xvcikge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xuICBjb25zdCB5aXEgPSAoKHIgKiAyOTkpICsgKGcgKiA1ODcpICsgKGIgKiAxMTQpKSAvIDEwMDA7XG4gIHJldHVybiAoeWlxID49IDEyOCkgPyAnYmxhY2snIDogJ3doaXRlJztcbn1cbiIsImltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbmNvbnN0IHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG5jb25zdCBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5leHBvcnQgY29uc3QgU2hhZG93cyA9IFtcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMywgMCwgMCwgMSwgMSwgMCwgMCwgMiwgMSwgLTFdLFxuICBbMCwgMSwgNSwgMCwgMCwgMiwgMiwgMCwgMCwgMywgMSwgLTJdLFxuICBbMCwgMSwgOCwgMCwgMCwgMywgNCwgMCwgMCwgMywgMywgLTJdLFxuICBbMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwXSxcbiAgWzAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDFdLFxuICBbMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMl0sXG4gIFswLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyXSxcbiAgWzAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzXSxcbiAgWzAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzXSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0XSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0XSxcbiAgWzAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0XSxcbiAgWzAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1XSxcbiAgWzAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNV0sXG4gIFswLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDVdLFxuICBbMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2XSxcbiAgWzAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNl0sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDddLFxuICBbMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgN10sXG4gIFswLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4XSxcbiAgWzAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDhdXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXJEZXByZWNhdGVkKGVsZXZhdGlvbjogbnVtYmVyIHwgc3RyaW5nID0gMiwgY29sb3IgPSAnIzAwMCcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IpO1xuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5VW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5KS5jc3MoKVxuICBdO1xuICBjb25zdCBlID0gU2hhZG93c1tlbGV2YXRpb25dO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgYm94LXNoYWRvdzoke2VbMF19cHggJHtlWzFdfXB4ICR7ZVsyXX1weCAke2VbM119cHggJHtjb2xvcnNbMF19LCR7ZVs0XX1weCAke2VbNV19cHggJHtlWzZdfXB4ICR7ZVs3XX1weCAke2NvbG9yc1sxXX0sJHtlWzhdfXB4ICR7ZVs5XX1weCAke2VbMTBdfXB4ICR7ZVsxMV19cHggJHtjb2xvcnNbMl19O2A7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXIoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcsIGNvbG9yPzogc3RyaW5nKSB7XG4gIGxldCBDb2xvciA9IGNocm9tYShjb2xvciB8fCAnIzAwMCcpO1xuICBjb25zdCByZ2IgPSBDb2xvci5nZXQoJ3JnYicpIGFzIGFueSBhcyBudW1iZXJbXTtcbiAgaWYgKCEocmdiWzBdID09PSByZ2JbMV0gJiYgcmdiWzBdID09PSByZ2JbMl0pKSB7XG4gICAgLy8gRGFya2VuIGFuZCBzYXR1cmF0ZSBpZiB0aGUgY29sb3IgaXMgbm90IGluIHRoZSBncmF5c2NhbGVcbiAgICBDb2xvciA9IENvbG9yLmRhcmtlbigpLnNhdHVyYXRlKDIpO1xuICB9XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGAke2VbMF19cHggJHtlWzFdfXB4ICR7ZVsyXX1weCAke2VbM119cHggJHtjb2xvcnNbMF19LCR7ZVs0XX1weCAke2VbNV19cHggJHtlWzZdfXB4ICR7ZVs3XX1weCAke2NvbG9yc1sxXX0sJHtlWzhdfXB4ICR7ZVs5XX1weCAke2VbMTBdfXB4ICR7ZVsxMV19cHggJHtjb2xvcnNbMl19O2A7XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xuZXhwb3J0IGNvbnN0IElTX0NPUkVfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48dHJ1ZT4oJ2x5LmlzLnJvb3QnKTtcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xuICBkZWZhdWx0Pzogc3RyaW5nO1xuICBjb250cmFzdD86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcbiAgYmFja2dyb3VuZD86IHtcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxuICAgIHBhcGVyPzogc3RyaW5nLFxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfTtcbiAgdGV4dD86IHtcbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeT86IHN0cmluZyxcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXG4gICAgZGlzYWJsZWQ/OiBzdHJpbmcsXG4gICAgaGludD86IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG4gIGRpdmlkZXI/OiBzdHJpbmc7XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICBjb2xvclNoYWRvdz86IHN0cmluZztcbiAgYmFyPzogc3RyaW5nO1xuICBpbnB1dD86IHtcbiAgICBsYWJlbD86IHN0cmluZyxcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcbiAgfTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuIiwiXG4vLyBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIHN1cHBvcnRzIHRoZSBWOCBCcmVhayBJdGVyYXRvci4gVGhlIFY4IGNoZWNrXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cbmNvbnN0IGhhc1Y4QnJlYWtJdGVyYXRvciA9ICh0eXBlb2YoSW50bCkgIT09ICd1bmRlZmluZWQnICYmIChJbnRsIGFzIGFueSkudjhCcmVha0l0ZXJhdG9yKTtcbi8qKlxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcbiAqIGNoZWNraW5nIGJyb3dzZXItc3BlY2lmaWMgZ2xvYmFsIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XG4gIHN0YXRpYyByZWFkb25seSBpc0Jyb3dzZXI6IGJvb2xlYW4gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQ7XG4gIC8qKiBMYXlvdXQgRW5naW5lcyAqL1xuICBzdGF0aWMgcmVhZG9ubHkgRURHRSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGVkZ2UpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgc3RhdGljIHJlYWRvbmx5IFRSSURFTlQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvLyBFZGdlSFRNTCBhbmQgVHJpZGVudCBtb2NrIEJsaW5rIHNwZWNpZmljIHRoaW5ncyBhbmQgbmVlZCB0byBiZSBleGNsdWRlZCBmcm9tIHRoaXMgY2hlY2suXG4gIHN0YXRpYyByZWFkb25seSBCTElOSyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxuICAgICAgKCEhKCh3aW5kb3cgYXMgYW55KS5jaHJvbWUgfHwgaGFzVjhCcmVha0l0ZXJhdG9yKSAmJiAhIUNTUyAmJiAhUGxhdGZvcm0uRURHRSAmJiAhUGxhdGZvcm0uVFJJREVOVCk7XG5cbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXG4gIC8vIGVuc3VyZSB0aGF0IFdlYmtpdCBydW5zIHN0YW5kYWxvbmUgYW5kIGlzIG5vdCB1c2VkIGFzIGFub3RoZXIgZW5naW5lJ3MgYmFzZS5cbiAgc3RhdGljIHJlYWRvbmx5IFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxuICAgICAgL0FwcGxlV2ViS2l0L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhUGxhdGZvcm0uQkxJTksgJiYgIVBsYXRmb3JtLkVER0UgJiYgIVBsYXRmb3JtLlRSSURFTlQ7XG5cbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xuICBzdGF0aWMgcmVhZG9ubHkgSU9TID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEod2luZG93IGFzIGFueSkuTVNTdHJlYW07XG5cbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcbiAgLy8gdGhlbSBzZWxmIGFzIEdlY2tvLWxpa2UgYnJvd3NlcnMgYW5kIG1vZGlmeSB0aGUgdXNlckFnZW50J3MgYWNjb3JkaW5nIHRvIHRoYXQuXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXG4gIHN0YXRpYyByZWFkb25seSBGSVJFRk9YID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvLyBUcmlkZW50IG9uIG1vYmlsZSBhZGRzIHRoZSBhbmRyb2lkIHBsYXRmb3JtIHRvIHRoZSB1c2VyQWdlbnQgdG8gdHJpY2sgZGV0ZWN0aW9ucy5cbiAgc3RhdGljIHJlYWRvbmx5IEFORFJPSUQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICFQbGF0Zm9ybS5UUklERU5UO1xuXG4gIC8vIFNhZmFyaSBicm93c2VycyB3aWxsIGluY2x1ZGUgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZWlyIHVzZXJBZ2VudC4gU29tZSBicm93c2VycyBtYXkgZmFrZVxuICAvLyB0aGlzIGFuZCBqdXN0IHBsYWNlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGUgdXNlckFnZW50LiBUbyBiZSBtb3JlIHNhZmUgYWJvdXQgU2FmYXJpIGV2ZXJ5XG4gIC8vIFNhZmFyaSBicm93c2VyIHNob3VsZCBhbHNvIHVzZSBXZWJraXQgYXMgaXRzIGxheW91dCBlbmdpbmUuXG4gIHN0YXRpYyByZWFkb25seSBTQUZBUkkgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL3NhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgUGxhdGZvcm0uV0VCS0lUO1xufVxuIiwibGV0IHN1cHBvcnRzUGFzc2l2ZTtcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycygpOiBib29sZWFuIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5U3R5bGVVdGlscywgRGlyIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgU3R5bGVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IFJpcHBsZVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3JpcHBsZSc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5VmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDaGVja2JveFZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL2NoZWNrYm94JztcbmltcG9ydCB7IFNuYWNrQmFyVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvc25hY2stYmFyJztcbmltcG9ydCB7IEJ1dHRvblZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL2J1dHRvbic7XG5pbXBvcnQgeyBUb29sdGlwVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvdG9vbHRpcCc7XG5pbXBvcnQgeyBBdmF0YXJWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9hdmF0YXInO1xuXG5leHBvcnQgY29uc3QgTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYXJ0aWFsVGhlbWVWYXJpYWJsZXM+KCdseS50aGVtZS5nbG9iYWwudmFyaWFibGVzJyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHlfdGhlbWVfY29uZmlnJyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUVfTkFNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdseS50aGVtZS5uYW1lJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaW1hcnk6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGFjY2VudDogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgd2FybjogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgZGlzYWJsZWQ6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIHBhcGVyOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBiYWNrZ3JvdW5kOiB7XG4gICAgLyoqIHNlY29uZGFyeSAqL1xuICAgIGRlZmF1bHQ6IHN0cmluZyxcbiAgICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yLFxuICAgIHNlY29uZGFyeTogc3RyaW5nLFxuICAgIHRlcnRpYXJ5OiBzdHJpbmcsXG4gICAgYmFzZTogc3RyaW5nXG4gIH07XG4gIHRleHQ6IHtcbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeTogc3RyaW5nLFxuICAgIHNlY29uZGFyeTogc3RyaW5nLFxuICAgIGRpc2FibGVkOiBzdHJpbmcsXG4gICAgaGludDogc3RyaW5nXG4gIH07XG4gIHR5cG9ncmFwaHk6IFR5cG9ncmFwaHlWYXJpYWJsZXM7XG4gIC8qKiBjb2xvciBmb3IgZGl2aWRlciAqL1xuICBkaXZpZGVyOiBzdHJpbmc7XG4gIHNoYWRvdzogc3RyaW5nO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIHNoYWRvdyBpbnN0ZWFkICovXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xuICByYWRpbzoge1xuICAgIC8qKiBjb2xvciBmb3IgcmFkaW86b3V0ZXJDaXJjbGUgKi9cbiAgICBvdXRlckNpcmNsZT86IHN0cmluZztcbiAgICAvKiogQGRlcHJlY2F0ZWQgdXNlIG91dGVyQ2lyY2xlIGluc3RlYWQgKi9cbiAgICByYWRpb091dGVyQ2lyY2xlPzogc3RyaW5nO1xuICB9O1xuICBtZW51OiB7XG4gICAgcm9vdD86IFN0eWxlQ29udGFpbmVyXG4gIH07XG4gIGRyYXdlcjoge1xuICAgIC8qKiBjb2xvciBmb3IgZHJhd2VyOmJhY2tkcm9wICovXG4gICAgYmFja2Ryb3A6IHN0cmluZ1xuICB9O1xuICBmaWVsZDoge1xuICAgIGJvcmRlckNvbG9yOiBzdHJpbmdcbiAgICBsYWJlbENvbG9yOiBzdHJpbmdcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBiYXNlPzoge1xuICAgICAgICByb290PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgY29udGFpbmVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmllbGRzZXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXJGb2N1c2VkPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgbGFiZWw/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBwbGFjZWhvbGRlcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGlucHV0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmxvYXRpbmdMYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHByZWZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGluZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgc3VmZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaGludD86IFN0eWxlQ29udGFpbmVyXG4gICAgICB9O1xuICAgICAgW2FwcGVhcmFuY2VOYW1lOiBzdHJpbmddOiB7XG4gICAgICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXI/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmaWVsZHNldD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lckZvY3VzZWQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBsYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHBsYWNlaG9sZGVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5wdXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmbG9hdGluZ0xhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcHJlZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5maXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBzdWZmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBoaW50PzogU3R5bGVDb250YWluZXJcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGljb25CdXR0b246IHtcbiAgICBzaXplOiBzdHJpbmdcbiAgfTtcbiAgaWNvbjoge1xuICAgIGZvbnRTaXplOiBzdHJpbmdcbiAgfTtcbiAgekluZGV4OiB7XG4gICAgdG9vbGJhcjogbnVtYmVyXG4gICAgZHJhd2VyOiBudW1iZXJcbiAgICBvdmVybGF5OiBudW1iZXJcbiAgICBba2V5OiBzdHJpbmddOiBudW1iZXJcbiAgfTtcbiAgZGlyZWN0aW9uPzogRGlyO1xuICBhbmltYXRpb25zOiB7XG4gICAgY3VydmVzOiB7XG4gICAgICBzdGFuZGFyZDogc3RyaW5nXG4gICAgICBkZWNlbGVyYXRpb246IHN0cmluZ1xuICAgICAgYWNjZWxlcmF0aW9uOiBzdHJpbmdcbiAgICAgIHNoYXJwOiBzdHJpbmdcbiAgICB9LFxuICAgIGR1cmF0aW9uczoge1xuICAgICAgY29tcGxleDogbnVtYmVyXG4gICAgICBlbnRlcmluZzogbnVtYmVyXG4gICAgICBleGl0aW5nOiBudW1iZXJcbiAgICB9XG4gIH07XG4gIHJpcHBsZTogUmlwcGxlVmFyaWFibGVzO1xuICBiYWRnZToge1xuICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lcixcbiAgICBwb3NpdGlvbj86IHtcbiAgICAgIFtwb3NpdGlvbk5hbWU6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyXG4gICAgfVxuICB9O1xuICBjaGVja2JveDogQ2hlY2tib3hWYXJpYWJsZXM7XG4gIHNuYWNrQmFyOiBTbmFja0JhclZhcmlhYmxlcztcbiAgYnV0dG9uOiBCdXR0b25WYXJpYWJsZXM7XG4gIHRvb2x0aXA6IFRvb2x0aXBWYXJpYWJsZXM7XG4gIGF2YXRhcjogQXZhdGFyVmFyaWFibGVzO1xufVxuXG5leHBvcnQgdHlwZSBUaGVtZVZhcmlhYmxlcyA9IEx5U3R5bGVVdGlscyAmIFRoZW1lQ29uZmlnO1xuZXhwb3J0IHR5cGUgUGFydGlhbFRoZW1lVmFyaWFibGVzID0gUGFydGlhbDxUaGVtZVZhcmlhYmxlcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFZhbCB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZUNvbG9yIHtcbiAgY29udHJhc3Q/OiBzdHJpbmc7XG4gIC8qKiBzaGFkb3cgY29sb3IgKi9cbiAgc2hhZG93Pzogc3RyaW5nO1xufVxuIiwiZXhwb3J0IGNsYXNzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgIGh0bWxGb250U2l6ZTogbnVtYmVyLFxuICAgIGZvbnRTaXplOiBudW1iZXI7XG4gIH07XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgWFNtYWxsOiBzdHJpbmcsXG4gICAgU21hbGw6IHN0cmluZyxcbiAgICBNZWRpdW06IHN0cmluZyxcbiAgICBMYXJnZTogc3RyaW5nLFxuICAgIFhMYXJnZTogc3RyaW5nLFxuXG4gICAgSGFuZHNldDogc3RyaW5nLFxuICAgIFRhYmxldDogc3RyaW5nLFxuICAgIFdlYjogc3RyaW5nLFxuXG4gICAgSGFuZHNldFBvcnRyYWl0OiBzdHJpbmcsXG4gICAgVGFibGV0UG9ydHJhaXQ6IHN0cmluZyxcbiAgICBXZWJQb3J0cmFpdDogc3RyaW5nLFxuXG4gICAgSGFuZHNldExhbmRzY2FwZTogc3RyaW5nLFxuICAgIFRhYmxldExhbmRzY2FwZTogc3RyaW5nLFxuICAgIFdlYkxhbmRzY2FwZTogc3RyaW5nLFxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9O1xuICBkaXJlY3Rpb246IERpcjtcbiAgcHhUb1JlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudHlwb2dyYXBoeS5mb250U2l6ZSAvIDE0O1xuICAgIHJldHVybiBgJHt2YWx1ZSAvIHRoaXMudHlwb2dyYXBoeS5odG1sRm9udFNpemUgKiBzaXplfXJlbWA7XG4gIH1cbiAgY29sb3JPZih2YWx1ZTogc3RyaW5nLCBvcHRpb25hbD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCB2YWx1ZSwgb3B0aW9uYWwpO1xuICB9XG4gIGdldEJyZWFrcG9pbnQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYEBtZWRpYSAke3RoaXMuYnJlYWtwb2ludHNba2V5XSB8fCBrZXl9YDtcbiAgfVxuXG4gIGdldERpcmVjdGlvbih2YWw6IERpckFsaWFzKSB7XG4gICAgaWYgKHZhbCA9PT0gRGlyQWxpYXMuc3RhcnQgfHwgdmFsID09PSBEaXJBbGlhcy5iZWZvcmUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH0gZWxzZSBpZiAodmFsID09PSBEaXJBbGlhcy5lbmQgfHwgdmFsID09PSBEaXJBbGlhcy5hZnRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBlbnVtIERpciB7XG4gIHJ0bCA9ICdydGwnLFxuICBsdHIgPSAnbHRyJ1xufVxuZXhwb3J0IGVudW0gRGlyQWxpYXMge1xuICAvKiogQGRlcHJlY2F0ZWQsIHVzZSBgYmVmb3JlYCBpbnN0ZWFkICovXG4gIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgLyoqIEBkZXByZWNhdGVkLCB1c2UgYGFmdGVyYCBpbnN0ZWFkICovXG4gIGVuZCA9ICdlbmQnLFxuICBiZWZvcmUgPSAnYmVmb3JlJyxcbiAgYWZ0ZXIgPSAnYWZ0ZXInXG59XG5leHBvcnQgZW51bSBEaXJQb3NpdGlvbiB7XG4gIGxlZnQgPSAnbGVmdCcsXG4gIHJpZ2h0ID0gJ3JpZ2h0J1xufVxuXG4vKipcbiAqIGdldCBjb2xvciBvZiBvYmplY3RcbiAqIEBwYXJhbSBvYmogb2JqZWN0XG4gKiBAcGFyYW0gcGF0aCBwYXRoXG4gKiBAcGFyYW0gb3B0aW9uYWwgZ2V0IG9wdGlvbmFsIHZhbHVlLCBpZiBub3QgZXhpc3QgcmV0dXJuIGRlZmF1bHQgaWYgbm90IGlzIHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IHN0cmluZ1tdIHwgc3RyaW5nLCBvcHRpb25hbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBvc2libGVPYiA9IG9ialtfcGF0aFtpXV07XG4gICAgaWYgKHBvc2libGVPYikge1xuICAgICAgb2JqID0gcG9zaWJsZU9iO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiogaWYgbm90IGV4aXN0ICovXG4gICAgICByZXR1cm4gcGF0aCBhcyBzdHJpbmc7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvYmogYXMgc3RyaW5nO1xuICB9IGVsc2UgaWYgKG9wdGlvbmFsKSB7XG4gICAgcmV0dXJuIG9ialtvcHRpb25hbF0gfHwgb2JqWydkZWZhdWx0J107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9ialsnZGVmYXVsdCddO1xuICB9XG4gIC8vIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYWNoTWVkaWEoc3RyOiBzdHJpbmcgfCBudW1iZXIsIGZuOiAoKHZhbDogc3RyaW5nLCBtZWRpYTogc3RyaW5nLCBpc01lZGlhOiBudW1iZXIpID0+IHZvaWQpKSB7XG4gIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHZhbHVlcyA9IHN0ci5zcGxpdCgvXFxzL2cpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB2YWxJdGVtID0gdmFsdWVzW2luZGV4XS5zcGxpdCgvXFxAL2cpO1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWxJdGVtLnNoaWZ0KCk7XG4gICAgICBjb25zdCBsZW4gPSB2YWxJdGVtLmxlbmd0aDtcbiAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdmFsSXRlbVtqXSwgdmFsSXRlbS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHVuZGVmaW5lZCwgbGVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm4uY2FsbCh1bmRlZmluZWQsIHN0ciwgdW5kZWZpbmVkLCAwKTtcbiAgfVxufVxuLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVT4odGFyZ2V0OiBULCBzb3VyY2U6IFUpOiBUICYgVTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVSwgVj4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWKTogVCAmIFUgJiBWO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWLCBXPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYsIHNvdXJjZTM6IFcpOiBUICYgVSAmIFYgJiBXO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQ6IG9iamVjdCwgLi4uc291cmNlczogYW55W10pOiBhbnk7XG5cbi8qKlxuICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSAuLi5zb3VyY2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHsgcmV0dXJuIHRhcmdldDsgfVxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7IE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KTsgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUUsIFRoZW1lVmFyaWFibGVzLCBMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVRoZW1lIHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgbWVkaWFTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaW1hcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHNlY29uZGFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgZmlyc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcmVhZG9ubHkgdGhlbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX3RoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lVmFyaWFibGVzPigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+PigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FKSB0aGVtZUNvbmZpZzogVGhlbWVDb25maWdbXSB8IFRoZW1lQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUykgZ2xvYmFsVmFyaWFibGVzOiBUaGVtZUNvbmZpZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAoIXRoZW1lQ29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xZX1RIRU1FIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwge1xuICAgICAgaWQ6ICdseScsXG4gICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0ID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnbHktcy1jJyk7XG4gICAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZXMuaXRlbShpbmRleCk7XG4gICAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5maXJzdEVsZW1lbnQgPSBfZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoZW1lQ29uZmlnKSkge1xuICAgICAgdGhlbWVDb25maWcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICAgIG1lcmdlRGVlcChpdGVtLCBnbG9iYWxWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkKGl0ZW0gYXMgYW55KTtcbiAgICAgICAgdGhpcy50aGVtZXMuYWRkKGl0ZW0ubmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICBtZXJnZURlZXAodGhlbWVDb25maWcsIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZCh0aGVtZUNvbmZpZyBhcyBhbnkpO1xuICAgICAgdGhpcy50aGVtZXMuYWRkKHRoZW1lQ29uZmlnLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbmV3IHRoZW1lXG4gICAqIEBwYXJhbSB0aGVtZTogVGhlbWVWYXJpYWJsZXNcbiAgICovXG4gIGFkZCh0aGVtZTogVGhlbWVWYXJpYWJsZXMpIHtcbiAgICB0aGlzLl90aGVtZU1hcC5zZXQodGhlbWUubmFtZSwgdGhlbWUpO1xuICAgIHRoaXMuX3N0eWxlTWFwLnNldCh0aGVtZS5uYW1lLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgZ2V0KG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl90aGVtZU1hcC5nZXQobmFtZSk7XG4gIH1cbiAgZ2V0U3R5bGVNYXAobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAob2xkQ2xhc3NuYW1lKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvbGRDbGFzc25hbWUpO1xuICAgIH1cbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuZXdDbGFzc25hbWUpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERpclBvc2l0aW9uIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5leHBvcnQgZW51bSBZUG9zaXRpb24ge1xuICBhYm92ZSA9ICdhYm92ZScsXG4gIGJlbG93ID0gJ2JlbG93J1xufVxuXG5leHBvcnQgZW51bSBYUG9zaXRpb24ge1xuICBiZWZvcmUgPSAnYmVmb3JlJyxcbiAgYWZ0ZXIgPSAnYWZ0ZXInLFxuICBsZWZ0ID0gJ2xlZnQnLFxuICByaWdodCA9ICdyaWdodCdcbn1cblxuZXhwb3J0IHR5cGUgUGxhY2VtZW50ID0gWFBvc2l0aW9uIHwgWVBvc2l0aW9uO1xuXG4vKiogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgYFBvc2l0aW9uaW5nYCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uKFxuICBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgeFBvc2l0aW9uOiBYUG9zaXRpb24sXG4gIHlQb3NpdGlvbjogWVBvc2l0aW9uLFxuICBvcmlnaW46IEVsZW1lbnQsXG4gIG92ZXJsYXlFbGVtZW50OiBFbGVtZW50LFxuICB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gIG9mZnNldCA9IDBcbikge1xuICByZXR1cm4gY3JlYXRlUG9zaXRpb24oXG4gICAgcGxhY2VtZW50LFxuICAgIHhQb3NpdGlvbixcbiAgICB5UG9zaXRpb24sXG4gICAgb3JpZ2luLFxuICAgIG92ZXJsYXlFbGVtZW50LFxuICAgIHRoZW1lVmFyaWFibGVzLFxuICAgIG9mZnNldFxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3NpdGlvbihcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHhQb3NpdGlvbjogWFBvc2l0aW9uLFxuICB5UG9zaXRpb246IFlQb3NpdGlvbixcbiAgb3JpZ2luOiBFbGVtZW50LFxuICBvdmVybGF5RWxlbWVudDogRWxlbWVudCxcbiAgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICBvZmZzZXQgPSAwXG4pIHtcblxuICBjb25zdCBvcmlnaW5SZWN0ID0gb3JpZ2luLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIGNvbnN0IG92ZXJsYXlFbGVtZW50UmVjdCA9IG92ZXJsYXlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIGlmICh4UG9zaXRpb24gJiYgeVBvc2l0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2FuIG5vdCB1c2UgXFxgeFBvc2l0aW9uXFxgIGFuZCBcXGB5UG9zaXRpb25cXGAgdG9nZXRoZXIsIHVzZSBvbmx5IG9uZSBvZiB0aGVtLmApO1xuICB9XG4gIGlmICgoeFBvc2l0aW9uIHx8IHlQb3NpdGlvbikgJiYgIXBsYWNlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXFxgcGxhY2VtZW50XFxgIGlzIHJlcXVpcmVkLmApO1xuICB9XG4gIGxldCB4ID0gMCxcbiAgICAgIHkgPSAwLFxuICAgICAgb3ggPSAnY2VudGVyJyxcbiAgICAgIG95ID0gJ2NlbnRlcic7XG4gIGlmIChwbGFjZW1lbnQgfHwgeFBvc2l0aW9uIHx8IHlQb3NpdGlvbikge1xuICAgIGlmIChwbGFjZW1lbnQpIHtcbiAgICAgIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICB4ID0gKG9yaWdpblJlY3Qud2lkdGggLSBvdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgeSA9IC1vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0IC0gb2Zmc2V0O1xuICAgICAgICBveSA9ICdib3R0b20nO1xuICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB4ID0gKG9yaWdpblJlY3Qud2lkdGggLSBvdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgeSA9IG9yaWdpblJlY3QuaGVpZ2h0ICsgb2Zmc2V0O1xuICAgICAgICBveSA9ICd0b3AnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKHBsYWNlbWVudCBhcyBhbnkpO1xuICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgICAgeCA9IC1vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggLSBvZmZzZXQ7XG4gICAgICAgICAgeSA9IChvcmlnaW5SZWN0LmhlaWdodCAtIG92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgIHggPSBvcmlnaW5SZWN0LndpZHRoICsgb2Zmc2V0O1xuICAgICAgICAgIHkgPSAob3JpZ2luUmVjdC5oZWlnaHQgLSBvdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBkaXIgPSB0aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24oeFBvc2l0aW9uIGFzIGFueSk7XG4gICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICBveCA9ICcwJSc7XG4gICAgICAgIHggPSAwO1xuICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgIHggPSBvcmlnaW5SZWN0LndpZHRoIC0gb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoeVBvc2l0aW9uKSB7XG4gICAgICBpZiAoeVBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgeSA9IDA7XG4gICAgICAgIG95ID0gJzAlJztcbiAgICAgIH0gZWxzZSBpZiAoeVBvc2l0aW9uID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgeSA9IG9yaWdpblJlY3QuaGVpZ2h0IC0gb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodDtcbiAgICAgICAgb3kgPSAnMTAwJSc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5yb3VuZCh4KSxcbiAgICB5OiBNYXRoLnJvdW5kKHkpLFxuICAgIG94LFxuICAgIG95XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZyB7XG4gIHByaXZhdGUgb2Zmc2V0Q2hlY2sgPSAxNjtcbiAgcHJpdmF0ZSBvcmlnaW5SZWN0ID0gdGhpcy5vcmlnaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgcHJpdmF0ZSBvdmVybGF5RWxlbWVudFJlY3QgPSB0aGlzLm92ZXJsYXlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBheDogbnVtYmVyO1xuICBheTogbnVtYmVyO1xuICBveDogc3RyaW5nO1xuICBveTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgICBwcml2YXRlIHhQb3NpdGlvbjogWFBvc2l0aW9uLFxuICAgIHByaXZhdGUgeVBvc2l0aW9uOiBZUG9zaXRpb24sXG4gICAgcHJpdmF0ZSBvcmlnaW46IEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBvdmVybGF5RWxlbWVudDogRWxlbWVudCxcbiAgICBwcml2YXRlIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgICBwcml2YXRlIG9mZnNldCA9IDBcbiAgKSB7XG4gICAgdGhpcy5jcmVhdGVQb3NpdGlvbigpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrQWxsKCkpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdoZXJlIHRoZXJlIGlzIG5vdCBlbm91Z2ggc3BhY2VcbiAgICBpZiAodGhpcy5jaGVja0FsbCgpKSB7XG4gICAgICBjb25zdCBfbWF4X3dpZHRoID0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggKyB0aGlzLm9mZnNldENoZWNrICogMiA+IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3QgX21heF9oZWlnaHQgPSB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgKyB0aGlzLm9mZnNldENoZWNrICogMiA+IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGlmIChfbWF4X3dpZHRoIHx8IF9tYXhfaGVpZ2h0KSB7XG4gICAgICAgIGlmIChfbWF4X2hlaWdodCkge1xuICAgICAgICAgIHRoaXMueSA9IHRoaXMub3JpZ2luUmVjdC55IC0gdGhpcy5vZmZzZXRDaGVjaztcbiAgICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9tYXhfd2lkdGgpIHtcbiAgICAgICAgICB0aGlzLnggPSB0aGlzLm9yaWdpblJlY3QueCAtIHRoaXMub2Zmc2V0Q2hlY2s7XG4gICAgICAgICAgdGhpcy54ICo9IC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tCb3R0b20oKSkge1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5jaGVja0JvdHRvbSh0cnVlKSBhcyBudW1iZXI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tUb3AoKSkge1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5jaGVja1RvcCh0cnVlKSBhcyBudW1iZXI7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja1JpZ2h0KCkpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuY2hlY2tSaWdodCh0cnVlKSBhcyBudW1iZXI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tMZWZ0KCkpIHtcbiAgICAgICAgdGhpcy54IC09IHRoaXMuY2hlY2tMZWZ0KHRydWUpIGFzIG51bWJlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByb3VuZCByZXN1bHRcbiAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgIHRoaXMuYXggPSBNYXRoLnJvdW5kKHRoaXMuYXgpO1xuICAgIHRoaXMuYXkgPSBNYXRoLnJvdW5kKHRoaXMuYXkpO1xuXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBvc2l0aW9uKFxuICApIHtcbiAgICBpZiAodGhpcy54UG9zaXRpb24gJiYgdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGNhbiBub3QgdXNlIFxcYHhQb3NpdGlvblxcYCBhbmQgXFxgeVBvc2l0aW9uXFxgIHRvZ2V0aGVyLCB1c2Ugb25seSBvbmUgb2YgdGhlbS5gKTtcbiAgICB9XG4gICAgaWYgKCh0aGlzLnhQb3NpdGlvbiB8fCB0aGlzLnlQb3NpdGlvbikgJiYgIXRoaXMucGxhY2VtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHBsYWNlbWVudFxcYCBpcyByZXF1aXJlZC5gKTtcbiAgICB9XG4gICAgbGV0IHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgb3ggPSAnY2VudGVyJyxcbiAgICAgICAgb3kgPSAnY2VudGVyJztcbiAgICBpZiAodGhpcy5wbGFjZW1lbnQgfHwgdGhpcy54UG9zaXRpb24gfHwgdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICAgIHggPSAodGhpcy5vcmlnaW5SZWN0LndpZHRoIC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgICB5ID0gLXRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCAtIHRoaXMub2Zmc2V0O1xuICAgICAgICAgIG95ID0gJ2JvdHRvbSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIHggPSAodGhpcy5vcmlnaW5SZWN0LndpZHRoIC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgICB5ID0gdGhpcy5vcmlnaW5SZWN0LmhlaWdodCArIHRoaXMub2Zmc2V0O1xuICAgICAgICAgIG95ID0gJ3RvcCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGlyID0gdGhpcy50aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24odGhpcy5wbGFjZW1lbnQgYXMgYW55KTtcbiAgICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICAgIHggPSAtdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggLSB0aGlzLm9mZnNldDtcbiAgICAgICAgICAgIHkgPSAodGhpcy5vcmlnaW5SZWN0LmhlaWdodCAtIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCkgLyAyO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgICAgeCA9IHRoaXMub3JpZ2luUmVjdC53aWR0aCArIHRoaXMub2Zmc2V0O1xuICAgICAgICAgICAgeSA9ICh0aGlzLm9yaWdpblJlY3QuaGVpZ2h0IC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnhQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLnRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbih0aGlzLnhQb3NpdGlvbiBhcyBhbnkpO1xuICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICB4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICB4ID0gdGhpcy5vcmlnaW5SZWN0LndpZHRoIC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy55UG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMueVBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICBveSA9ICcwJSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy55UG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIHkgPSB0aGlzLm9yaWdpblJlY3QuaGVpZ2h0IC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICAgIG95ID0gJzEwMCUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmF4ID0geCArIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0Lng7XG4gICAgdGhpcy5heSA9IHkgKyB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC55O1xuICAgIHRoaXMub3ggPSBveDtcbiAgICB0aGlzLm95ID0gb3k7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgucm91bmQoeCksXG4gICAgICB5OiBNYXRoLnJvdW5kKHkpLFxuICAgICAgb3gsXG4gICAgICBveVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNoZWNrTGVmdChyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHRoaXMuYXggLSB0aGlzLm9mZnNldENoZWNrO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmFib3ZlICYmIHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSB0aGlzLmludmVydFBvc2l0aW9uKHRoaXMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnhQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnhQb3NpdGlvbiA9IHRoaXMuaW52ZXJ0UG9zaXRpb24odGhpcy54UG9zaXRpb24pIGFzIFhQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJpdmF0ZSBjaGVja1JpZ2h0KHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gd2luZG93LmlubmVyV2lkdGggLSAodGhpcy5heCArIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoICsgdGhpcy5vZmZzZXRDaGVjayk7XG4gICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgfVxuICAgIGlmIChyZXN0IDwgMCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYWJvdmUgJiYgdGhpcy5wbGFjZW1lbnQgIT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IHRoaXMuaW52ZXJ0UG9zaXRpb24odGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0gdGhpcy5pbnZlcnRQb3NpdGlvbih0aGlzLnhQb3NpdGlvbikgYXMgWFBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNoZWNrVG9wKHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gdGhpcy5heSAtIHRoaXMub2Zmc2V0Q2hlY2s7XG4gICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgfVxuICAgIGlmIChyZXN0IDwgMCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IHRoaXMuaW52ZXJ0UG9zaXRpb24odGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0gdGhpcy5pbnZlcnRQb3NpdGlvbih0aGlzLnlQb3NpdGlvbikgYXMgWVBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNoZWNrQm90dG9tKHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKHRoaXMuYXkgKyB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgKyB0aGlzLm9mZnNldENoZWNrKTtcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gdGhpcy5pbnZlcnRQb3NpdGlvbih0aGlzLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy55UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy55UG9zaXRpb24gPSB0aGlzLmludmVydFBvc2l0aW9uKHRoaXMueVBvc2l0aW9uKSBhcyBZUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0xlZnQoKSB8fFxuICAgIHRoaXMuY2hlY2tSaWdodCgpIHx8XG4gICAgdGhpcy5jaGVja1RvcCgpIHx8XG4gICAgdGhpcy5jaGVja0JvdHRvbSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnZlcnRQb3NpdGlvbihwbGFjZW1lbnQ6IFBsYWNlbWVudCk6IFBsYWNlbWVudCB7XG4gICAgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICByZXR1cm4gWVBvc2l0aW9uLmJlbG93O1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgIHJldHVybiBZUG9zaXRpb24uYWJvdmU7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5hZnRlcikge1xuICAgICAgcmV0dXJuIFhQb3NpdGlvbi5iZWZvcmU7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5iZWZvcmUpIHtcbiAgICAgIHJldHVybiBYUG9zaXRpb24uYWZ0ZXI7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5yaWdodCkge1xuICAgICAgcmV0dXJuIFhQb3NpdGlvbi5sZWZ0O1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24ubGVmdCkge1xuICAgICAgcmV0dXJuIFhQb3NpdGlvbi5yaWdodDtcbiAgICB9XG4gIH1cblxufVxuXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgaXNEZXZNb2RlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpckFsaWFzLCBEaXIgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5pbXBvcnQgeyBZUG9zaXRpb24gfSBmcm9tICcuLi9wb3NpdGlvbi9wb3NpdGlvbic7XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICdAZ2xvYmFsJzoge1xuICAgICcqLCAqOmFmdGVyLCAqOmJlZm9yZSc6IHtcbiAgICAgICctd2Via2l0LWJveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnLW1vei1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCdcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IFJFRl9SRUdfRVhQID0gL1xceyhbXFx3LV0rKVxcfS9nO1xuXG5lbnVtIFR5cGVTdHlsZSB7XG4gIE11bHRpcGxlLFxuICBPbmx5T25lXG59XG5cbmNvbnN0IFNUWUxFX01BUDU6IE1hcDxhbnksIFN0eWxlTWFwNT4gPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVNYXA1IHtcbiAgc3R5bGVzOiBTdHlsZXNGbjIgfCBTdHlsZXMyO1xuICB0eXBlOiBUeXBlU3R5bGU7XG4gIHByaW9yaXR5OiBudW1iZXI7XG4gIGNzczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogZ2xvYmFsIHRoZW1lICovXG4gIGNsYXNzZXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmc7XG4gIC8qKiByZXF1aXJlVXBkYXRlICovXG4gIGNsYXNzZXNXaXRoVGhlbWU/OiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXToge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gICAgfSB8IHN0cmluZ1xuICB9O1xuICAvKiogT25seSBmb3Igc3R5bGVzIG9mIFR5cGVTdHlsZS5vbmUgKi9cbiAgcGFyZW50U3R5bGU/OiBTdHlsZXM7XG4gIHJlcXVpcmVVcGRhdGU/OiBib29sZWFuO1xuICBpZDogc3RyaW5nO1xufVxuXG5sZXQgbmV4dENsYXNzSWQgPSAwO1xubGV0IG5leHRLZXlGcmFtZUlkID0gMDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVzSW5Eb2N1bWVudCB7XG4gIHN0eWxlczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+XG4gIH0gPSB7fTtcbiAgc3R5bGVDb250YWluZXJzID0gbmV3IE1hcDxudW1iZXIsIEhUTUxFbGVtZW50PigpO1xuICBzdHlsZUVsZW1lbnRHbG9iYWxNYXAgPSBuZXcgTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD4oKTtcbn1cblxuY29uc3QgVEhFTUVfTUFQID0gbmV3IE1hcDxzdHJpbmcsIHtcbiAgYmFzZTogc3RyaW5nXG4gIGNoYW5nZTogc3RyaW5nIHwgbnVsbFxufT4oKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZVZhcmlhYmxlcztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBpbml0aWFsVGhlbWU6IHN0cmluZztcbiAgZWxlbWVudHM6IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+O1xuICBfZWxlbWVudHNNYXAgPSBuZXcgTWFwPGFueSwgSFRNTFN0eWxlRWxlbWVudD4oKTtcbiAgcHJpdmF0ZSB0aGVtZU1hcCA9IFRIRU1FX01BUDtcbiAgLyoqIHNzciBvciBobXIgKi9cbiAgcHJpdmF0ZSBpc0Rldk9yU2VydmVyID0gaXNEZXZNb2RlKCkgfHwgIVBsYXRmb3JtLmlzQnJvd3NlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlc0luRG9jdW1lbnQ6IFN0eWxlc0luRG9jdW1lbnQsXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICB0aGlzLl9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gdGhlbWVOYW1lIGluIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNcbiAgICAgID8gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdXG4gICAgICA6IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXSA9IG5ldyBNYXAoKTtcbiAgICAgIGlmICghdGhpcy5pbml0aWFsVGhlbWUpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVGhlbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnRoZW1lTWFwLmhhcyh0aGlzLmluaXRpYWxUaGVtZSkpIHtcbiAgICAgICAgdGhpcy50aGVtZU1hcC5zZXQodGhpcy5pbml0aWFsVGhlbWUsIHtcbiAgICAgICAgICBiYXNlOiB0aGlzLmluaXRpYWxUaGVtZSxcbiAgICAgICAgICBjaGFuZ2U6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hZGREZWZhdWx0U3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBkeW5hbWljIHN0eWxlLCB1c2Ugb25seSB3aXRoaW4gQElucHV0KClcbiAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZFxuICAgKiBAcGFyYW0gc3R5bGUgU3R5bGVzXG4gICAqIEBwYXJhbSBlbCBFbGVtZW50XG4gICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2Ugb2YgdGhpcywgdGhpcyByZXBsYWNlcyB0aGUgZXhpc3Rpbmcgc3R5bGUgd2l0aCBhIG5ldyBvbmUgd2hlbiBpdCBjaGFuZ2VzXG4gICAqIEBwYXJhbSBwYXJlbnRTdHlsZVxuICAgKi9cbiAgYWRkU3R5bGUoaWQ6IHN0cmluZywgc3R5bGU6IFN0eWxlQ29udGFpbmVyIHwgKCh0aGVtZSkgPT4gU3R5bGVDb250YWluZXIpIHwgKCh0aGVtZSkgPT4gc3RyaW5nKSB8IHN0cmluZywgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlciwgcGFyZW50U3R5bGU/OiBTdHlsZXMpIHtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGUgYXMgYW55LCBpZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5Pbmx5T25lLCBmYWxzZSwgcGFyZW50U3R5bGUpIGFzIHN0cmluZztcbiAgICBpZiAobmV3Q2xhc3MgPT09IGluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIGlmIChlbCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBwcml2YXRlIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzc25hbWUsIG9sZENsYXNzbmFtZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3MoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzczogc3RyaW5nLCBvbGRDbGFzcz86IHN0cmluZykge1xuICAgIGlmIChuZXdDbGFzcyA9PT0gb2xkQ2xhc3MpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgdGhlbWUuc2V0VGhlbWUoJ3RoZW1lLW5hbWUnKVxcYCBpcyBvbmx5IGF2YWlsYWJsZSBpbiBicm93c2VyIHBsYXRmb3JtYCk7XG4gICAgfVxuICAgIGlmIChuYW0gIT09IHRoaXMuY29uZmlnLm5hbWUpIHtcbiAgICAgIHRoaXMudGhlbWVNYXAuZ2V0KHRoaXMuaW5pdGlhbFRoZW1lKS5jaGFuZ2UgPSBuYW07XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQobmFtKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUFsbFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBUb2dnbGUgcmlnaHQtdG8tbGVmdC9sZWZ0LXRvLXJpZ2h0ICovXG4gIHRvZ2dsZURpcmVjdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jb25maWcuZGlyZWN0aW9uO1xuICAgIHRoaXMuY29uZmlnLmRpcmVjdGlvbiA9IGN1cnJlbnQgPT09IERpci5sdHIgPyBEaXIucnRsIDogRGlyLmx0cjtcbiAgICB0aGlzLl91cGRhdGVBbGxTdHlsZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUFsbFN0eWxlcygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVEYXRhID0gU1RZTEVfTUFQNS5nZXQoa2V5KTtcbiAgICAgIGlmIChzdHlsZURhdGEucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlRGF0YS5zdHlsZXMsIHN0eWxlRGF0YS5pZCwgc3R5bGVEYXRhLnByaW9yaXR5LCBzdHlsZURhdGEudHlwZSwgdHJ1ZSwgc3R5bGVEYXRhLnBhcmVudFN0eWxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzaW1wbGUgc3R5bGVcbiAgICogcmV0dXJuIGNsYXNzTmFtZVxuICAgKiBAcGFyYW0gaWQgaWQgb2Ygc3R5bGVcbiAgICogQHBhcmFtIGNzcyBzdHlsZSBvYmplY3Qgb3Igc3RyaW5nXG4gICAqIEBwYXJhbSBwcmlvcml0eSBzdHlsZSBwcmlvcml0eVxuICAgKi9cbiAgYWRkU2ltcGxlU3R5bGUoaWQ6IHN0cmluZywgY3NzOiBTdHlsZUNvbnRhaW5lciB8ICgodGhlbWUpID0+IFN0eWxlQ29udGFpbmVyKSwgcHJpb3JpdHk/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIGlkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlKSBhcyBzdHJpbmc7XG4gIH1cbiAgcHJpdmF0ZSBfYWRkRGVmYXVsdFN0eWxlcygpIHtcbiAgICB0aGlzLmFkZFN0eWxlU2hlZXQoZGVmYXVsdFN0eWxlcyk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGFkZCBhIG5ldyBzdHlsZSBzaGVldFxuICAgKiBAcGFyYW0gc3R5bGVzIHN0eWxlc1xuICAgKiBAcGFyYW0gcHJpb3JpdHkgcHJpb3JpdHkgZm9yIHN0eWxlXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIFN0eWxlcywgcHJpb3JpdHk/OiBudW1iZXIpOiBPbmx5Q2xhc3NlczxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBudWxsLCBwcmlvcml0eSwgVHlwZVN0eWxlLk11bHRpcGxlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlQ29udGVudDIoXG4gICAgc3R5bGVzOiBTdHlsZXMsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgcGFyZW50U3R5bGU/OiBTdHlsZXNcbiAgKSB7XG4gICAgY29uc3QgbmV3SWQgPSBpZCBhcyBzdHJpbmcgfHwgc3R5bGVzO1xuICAgIGxldCBpc05ld1N0eWxlOiBib29sZWFuO1xuICAgIGlmICghU1RZTEVfTUFQNS5oYXMobmV3SWQpKSB7XG4gICAgICBpc05ld1N0eWxlID0gdHJ1ZTtcbiAgICAgIFNUWUxFX01BUDUuc2V0KG5ld0lkLCB7XG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBzdHlsZXMsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGNzczoge30sXG4gICAgICAgIGlkLFxuICAgICAgICBwYXJlbnRTdHlsZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlTWFwID0gU1RZTEVfTUFQNS5nZXQobmV3SWQpO1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHRoaXMuaW5pdGlhbFRoZW1lO1xuICAgIGNvbnN0IGlzQ3JlYXRlZCA9IGlzTmV3U3R5bGUgfHwgIShzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV0pO1xuICAgIGlmIChpc0NyZWF0ZWQgfHwgZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgIC8qKiBjcmVhdGUgbmV3IHN0eWxlIGZvciBuZXcgdGhlbWUgKi9cbiAgICAgIGxldCBjc3M7XG4gICAgICBjb25zdCB0aGVtZU1hcCA9IHRoaXMudGhlbWVNYXAuZ2V0KHRoaXMuaW5pdGlhbFRoZW1lKTtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVNYXAuY2hhbmdlIHx8IHRoZW1lTmFtZSk7XG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXMoY29uZmlnKSwgdGhlbWVOYW1lLCBpZCwgdHlwZSwgY29uZmlnKTtcbiAgICAgICAgaWYgKCFmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICAgIHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdID0gY3NzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogY3JlYXRlIGEgbmV3IGlkIGZvciBzdHlsZSB0aGF0IGRvZXMgbm90IDwtPHJlcXVpcmU+LT4gY2hhbmdlcyAqL1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVNYXAsIHN0eWxlcywgdGhlbWVOYW1lLCBuZXdJZCBhcyBzdHJpbmcsIHR5cGUsIGNvbmZpZyk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMobmV3SWQpKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsID0gdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKGNzcyk7XG4gICAgICAgIGlmIChzdHlsZU1hcC5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyByZXF1aXJlZCBmb3Igd2hlbiBhIHRoZW1lIGNoYW5nZXNcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgbmV3RWwpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZXZPclNlcnZlcikge1xuICAgICAgICAgIC8vIGluIGRldiBtb2RlIG9yIHNlcnZlciBpdCBpcyBub3QgbmVjZXNzYXJ5XG4gICAgICAgICAgLy8gc2luY2UgdGhlIHN0eWxlcyB3aWxsIG5vdCBjaGFuZ2VcbiAgICAgICAgICB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVFbGVtZW50R2xvYmFsTWFwLnNldChuZXdJZCwgbmV3RWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIG5ld0VsKTtcbiAgICAgIH1cbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKTtcbiAgICAgICAgZWwuaW5uZXJUZXh0ID0gY3NzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Rldk9yU2VydmVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIGFwcGVuZCBjaGlsZCBzdHlsZSBpZiBub3QgZXhpc3QgaW4gZG9tXG4gICAgICAgKiBmb3Igc3NyIG9yIGhtclxuICAgICAgICovXG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuaGFzKG5ld0lkKSkge1xuICAgICAgICBjb25zdCBfY3NzID0gc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV0gfHwgc3R5bGVNYXAuY3NzO1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVFbGVtZW50R2xvYmFsTWFwO1xuICAgICAgICBpZiAoc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMuc2V0KG5ld0lkLCB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoX2NzcykpO1xuICAgICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW1hcC5oYXMobmV3SWQpKSB7XG4gICAgICAgICAgbWFwLnNldChuZXdJZCwgdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpKTtcbiAgICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCBtYXAuZ2V0KG5ld0lkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhlbWVOYW1lXTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHByaW9yaXR5ID0gMCkge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgaWYgKCFzdHlsZUNvbnRhaW5lcnMuaGFzKHByaW9yaXR5KSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudChgbHktcy1jYCk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3ByaW9yaXR5JywgYCR7cHJpb3JpdHl9YCk7XG4gICAgICB9XG4gICAgICBzdHlsZUNvbnRhaW5lcnMuc2V0KHByaW9yaXR5LCBlbCk7XG4gICAgICBpZiAoc3R5bGVDb250YWluZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBlbCwgdGhpcy5fZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gICAgfVxuICAgIGNvbnN0IHJlZkNoaWxkID0gdGhpcy5maW5kTm9kZShwcmlvcml0eSk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KSwgcmVmQ2hpbGQpO1xuICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE5vZGUoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgY29uc3Qga2V5cyA9IChBcnJheS5mcm9tKHN0eWxlQ29udGFpbmVycy5rZXlzKCkpKS5zb3J0KCk7XG4gICAgY29uc3Qga2V5ID0ga2V5cy5maW5kKF8gPT4gaW5kZXggPCBfKTtcbiAgICByZXR1cm4gKGtleSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlQ29udGFpbmVycy5nZXQoa2V5KSkgfHwgdGhpcy5jb3JlLmZpcnN0RWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVsZW1lbnRTdHlsZShjc3M6IHN0cmluZykge1xuICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVUZXh0KGNzcyk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCwgc3R5bGVUZXh0KTtcbiAgICByZXR1cm4gc3R5bGVFbGVtZW50O1xuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpIHtcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbigpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVDb250YWluZXIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICAvKiogUHJlZml4IG5hbWUgKi9cbiAgJG5hbWU/OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU3R5bGVzRm4yID0gKFQpID0+IFN0eWxlczI7XG5cbmV4cG9ydCB0eXBlIFN0eWxlcyA9IFN0eWxlc0ZuMiB8IFN0eWxlczI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2V5ZnJhbWVzIHtcbiAgW25hbWU6IHN0cmluZ106IHtcbiAgICBbcGVyY2VudDogbnVtYmVyXTogU3R5bGVDb250YWluZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ3JvdXBTdHlsZVRvU3RyaW5nKFxuICBzdHlsZU1hcDogU3R5bGVNYXA1LFxuICBzdHlsZXM6IFN0eWxlczIsXG4gIHRoZW1lTmFtZTogc3RyaW5nLFxuICBpZDogc3RyaW5nLFxuICB0eXBlU3R5bGU6IFR5cGVTdHlsZSxcbiAgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzXG4pIHtcbiAgLy8gZm9yIHN0eWxlcyB0eXBlIHN0cmluZ1xuICBpZiAodHlwZVN0eWxlID09PSBUeXBlU3R5bGUuT25seU9uZSkge1xuICAgIC8vIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXdcbiAgICBjb25zdCBjbGFzc05hbWUgPSBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlXG4gICAgPyBzdHlsZU1hcFt0aGVtZU5hbWVdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVdID0gY3JlYXRlTmV4dENsYXNzSWQoKSlcbiAgICA6IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgID8gc3R5bGVNYXAuY2xhc3Nlc1xuICAgICAgOiBzdHlsZU1hcC5jbGFzc2VzID0gY3JlYXRlTmV4dENsYXNzSWQoKTtcbiAgICBsZXQgcnVsZXM6IHN0cmluZztcbiAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJ1bGVzID0gYC4ke2NsYXNzTmFtZX17JHtzdHlsZXN9fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bGVzID0gc3R5bGVUb1N0cmluZyhpZCwgbnVsbCwgc3R5bGVzLCB0aGVtZVZhcmlhYmxlcywgY2xhc3NOYW1lIGFzIGFueSk7XG4gICAgfVxuICAgIGlmIChzdHlsZU1hcC5wYXJlbnRTdHlsZSkge1xuICAgICAgY29uc3Qgc3R5bGVNYXBPZlBhcmVudFN0eWxlID0gU1RZTEVfTUFQNS5nZXQoc3R5bGVNYXAucGFyZW50U3R5bGUpO1xuICAgICAgcmV0dXJuIHJlcGxhY2VSZWZzKHJ1bGVzLCBzdHlsZU1hcE9mUGFyZW50U3R5bGVbdGhlbWVOYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBydWxlcztcbiAgfVxuICAvLyBmb3IgbXVsdGlwbGVzIHN0eWxlc1xuICBjb25zdCBjbGFzc2VzTWFwID0gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IHt9KTtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgY29uc3QgbmFtZSA9IHN0eWxlcy4kbmFtZSA/IGAke3N0eWxlcy4kbmFtZX0tYCA6ICcnO1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgICBpZiAoa2V5ID09PSAnJGtleWZyYW1lcycpIHtcbiAgICAgICAgY29udGVudCArPSBrZXlmcmFtZXNUb1N0cmluZyhuYW1lLCBjbGFzc2VzTWFwLCB2YWx1ZSBhcyBLZXlmcmFtZXMsIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyBzZXQgbmV3IGlkIGlmIG5vdCBleGlzdFxuICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NOYW1lID0ga2V5IGluIGNsYXNzZXNNYXBcbiAgICAgICAgPyBjbGFzc2VzTWFwW2tleV1cbiAgICAgICAgOiBjbGFzc2VzTWFwW2tleV0gPSBpc0Rldk1vZGUoKSA/IHRvQ2xhc3NOYW1lVmFsaWQoYHktJHtuYW1lfSR7a2V5fS0ke2NyZWF0ZU5leHRDbGFzc0lkKCl9YCkgOiBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyhrZXksIHN0eWxlcy4kbmFtZSwgdmFsdWUgYXMgU3R5bGVzMiwgdGhlbWVWYXJpYWJsZXMsIGN1cnJlbnRDbGFzc05hbWUpO1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVwbGFjZVJlZnMoY29udGVudCwgY2xhc3Nlc01hcCk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VSZWZzKHN0cjogc3RyaW5nLCBkYXRhOiBPYmplY3QpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFRl9SRUdfRVhQLCAobWF0Y2gsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gZGF0YVt0b2tlbl07XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGAuJHtkYXRhW3Rva2VuXX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YVtgQMOQwrMuLT4tJHt0b2tlbn1gXTtcbiAgICB9XG4gIH1cbiAgKTtcbn1cblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhrZXk6IHN0cmluZywgJG5hbWU6IHN0cmluZywgb2I6IE9iamVjdCwgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBjdXJyZW50S2V5OiBzdHJpbmcsIHBhcmVudEtleT86IHN0cmluZykge1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgc3ViQ29udGVudCA9ICcnO1xuICBsZXQga2V5QW5kVmFsdWUgPSAnJztcbiAgbGV0IG5ld0tleTtcbiAgaWYgKHBhcmVudEtleSkge1xuICAgIGlmIChjdXJyZW50S2V5LmluZGV4T2YoJyYnKSAhPT0gLTEpIHtcbiAgICAgIG5ld0tleSA9IGN1cnJlbnRLZXkucmVwbGFjZSgvJi9nLCBwYXJlbnRLZXkpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgbmV3S2V5ID0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdLZXkgPSBgJHtwYXJlbnRLZXl9ICR7Y3VycmVudEtleX1gO1xuICAgIH1cbiAgfSBlbHNlIGlmIChrZXkgPT09ICdAZ2xvYmFsJykge1xuICAgIG5ld0tleSA9IGtleTtcbiAgfSBlbHNlIHtcbiAgICBuZXdLZXkgPSBgLiR7Y3VycmVudEtleX1gO1xuICB9XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgLy8gT21pdCBzdHlsZSB3aXRoIHZhbHVlIG51bGxcbiAgICAgIGlmIChlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXMgT2JqZWN0IGxpdGVyYWxcbiAgICAgICAgaWYgKGVsZW1lbnQuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgIHN1YkNvbnRlbnQgKz0gc3R5bGVUb1N0cmluZyhrZXksICRuYW1lLCBlbGVtZW50IGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBzdHlsZUtleSwgbmV3S2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBrZXlBbmRWYWx1ZSArPSBjb252ZXJ0VG9TdHlsZVZhbHVlKHN0eWxlS2V5LCBlbGVtZW50LCB0aGVtZVZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGtleUFuZFZhbHVlKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBsZXQgbGluID0gJ1xcblxcbic7XG4gICAgICBpZiAoJG5hbWUpIHtcbiAgICAgICAgbGluICs9IGAvKiogU3R5bGUgU2hlZXQgbmFtZTogJHskbmFtZX0gKi9cXG5gO1xuICAgICAgfVxuICAgICAgbGluICs9IGAvKiogU3R5bGUgS2V5OiAke2tleX0gKi9cXG5gO1xuICAgICAgY29udGVudCArPSBgJHtsaW59YDtcbiAgICB9XG4gICAgaWYgKG5ld0tleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICAgIGtleUFuZFZhbHVlID0gYCR7cGFyZW50S2V5fXske2tleUFuZFZhbHVlfX1gO1xuICAgIH0gZWxzZSBpZiAocGFyZW50S2V5ICYmIHBhcmVudEtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgICBjb250ZW50ICs9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICB9XG4gICAgY29udGVudCArPSBgeyR7a2V5QW5kVmFsdWV9fWA7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQgKyBzdWJDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9TdHlsZVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10sIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBjb25zdCBuZXdTdHlsZUtleSA9IGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGVDYWNoZShrZXksIHRoZW1lVmFyaWFibGVzKTtcbiAgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgIGxldCBsaW4gPSAnJztcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsaW4gKz0gYCR7bmV3U3R5bGVLZXl9OiR7dmFsdWVbaW5kZXhdfTtgO1xuICAgIH1cbiAgICByZXR1cm4gbGluO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtuZXdTdHlsZUtleX06JHt2YWx1ZX07YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBrZXlmcmFtZXNUb1N0cmluZyhzdHlsZU5hbWU6IHN0cmluZywga2V5c01hcDogb2JqZWN0LCBrZXlmcmFtZXM6IEtleWZyYW1lcywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG5cbiAgZm9yIChjb25zdCBuYW1lIGluIGtleWZyYW1lcykge1xuICAgIGlmIChrZXlmcmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIGNvbnN0IGtleWZyYW1lID0ga2V5ZnJhbWVzW25hbWVdO1xuICAgICAgLy8gU29tZXRpbWVzIHRoZSBuYW1lIG9mIGEgY2xhc3MgY2FuIGJlIHRoZSBzYW1lIGFzIHRoZSBuYW1lIG9mIGEga2V5ZnJhbWUsXG4gICAgICAvLyBzbyB3ZSBhZGQgYSBjaGFyYWN0ZXIgdG8gYmUgZGlmZmVyZW50XG4gICAgICBjb25zdCBuZXdVbmlxdWVOYW1lID0gYEDDkMKzLi0+LSR7bmFtZX1gO1xuICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgIGNvbnN0IG5ld05hbWUgPSBuZXdVbmlxdWVOYW1lIGluIGtleXNNYXBcbiAgICAgID8ga2V5c01hcFtuZXdVbmlxdWVOYW1lXVxuICAgICAgOiBrZXlzTWFwW25ld1VuaXF1ZU5hbWVdID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGAke3N0eWxlTmFtZX0ke25hbWV9LSR7Y3JlYXRlTmV4dEtleWZyYW1lSWQoKX0tdmApIDogY3JlYXRlTmV4dEtleWZyYW1lSWQoKTtcbiAgICAgIGNvbnRlbnQgKz0gYEBrZXlmcmFtZXMgJHtuZXdOYW1lfXtgO1xuICAgICAgZm9yIChjb25zdCBwZXJjZW50IGluIGtleWZyYW1lKSB7XG4gICAgICAgIGlmIChrZXlmcmFtZS5oYXNPd25Qcm9wZXJ0eShwZXJjZW50KSkge1xuICAgICAgICAgIGNvbnRlbnQgKz0gYCR7cGVyY2VudH0le2A7XG4gICAgICAgICAgY29uc3Qgc3R5bGVzID0ga2V5ZnJhbWVbcGVyY2VudF07XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gc3R5bGVzW2tleV07XG4gICAgICAgICAgICAgIGNvbnRlbnQgKz0gY29udmVydFRvU3R5bGVWYWx1ZShrZXksIHZhbCBhcyBzdHJpbmcgfCBzdHJpbmdbXSwgdGhlbWVWYXJpYWJsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250ZW50ICs9IGB9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29udGVudCArPSBgfWA7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiB3YXJuRGVwcmVjYXRlZEtleVN0eWxlKHN0cjogc3RyaW5nLCBrZXk6IHN0cmluZywgdG86IHN0cmluZykge1xuICBjb25zb2xlLndhcm4oYFN0eWxlIGtleSBcXGAke2tleX1cXGAgZGVwcmVjYXRlZCBmb3IgXFxgJHtzdHJ9XFxgLCBjaGFuZ2UgXFxgJHtrZXl9XFxgIHRvIFxcYCR7dG99XFxgXFxuYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlKHN0cjogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpIHtcbiAgY29uc3QgaHlwaGVuQ2FzZSA9IHRvSHlwaGVuQ2FzZShzdHIpO1xuICBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKERpckFsaWFzLnN0YXJ0KSAhPT0gLTEpIHtcbiAgICB3YXJuRGVwcmVjYXRlZEtleVN0eWxlKHN0ciwgRGlyQWxpYXMuc3RhcnQsIERpckFsaWFzLmJlZm9yZSk7XG4gICAgcmV0dXJuIGRpckNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLnN0YXJ0KTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuZW5kKSAhPT0gLTEpIHtcbiAgICB3YXJuRGVwcmVjYXRlZEtleVN0eWxlKHN0ciwgRGlyQWxpYXMuZW5kLCBEaXJBbGlhcy5hZnRlcik7XG4gICAgcmV0dXJuIGRpckNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLmVuZCk7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKERpckFsaWFzLmJlZm9yZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIGRpckNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLmJlZm9yZSk7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKERpckFsaWFzLmFmdGVyKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZGlyQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuYWZ0ZXIpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihZUG9zaXRpb24uYWJvdmUpICE9PSAtMSkge1xuICAgIHJldHVybiBZUG9zaXRpb25DYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBZUG9zaXRpb24uYWJvdmUsIFRPUCk7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKFlQb3NpdGlvbi5iZWxvdykgIT09IC0xKSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbkNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIFlQb3NpdGlvbi5iZWxvdywgQk9UVE9NKTtcbiAgfVxuICByZXR1cm4gaHlwaGVuQ2FzZTtcbn1cblxuZnVuY3Rpb24gdG9DbGFzc05hbWVWYWxpZChzdHI6IHN0cmluZykge1xuICBjb25zdCBzID0gc3RyLnJlcGxhY2UoL15bMC05XXxbXlxcd1xcLV0vZywgXyA9PiB7XG4gICAgcmV0dXJuIGBfJHtfLmNoYXJDb2RlQXQoMCl9YDtcbiAgfSk7XG4gIHJldHVybiB0b0h5cGhlbkNhc2Uocyk7XG59XG5cblxuZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuZnVuY3Rpb24gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZUNhY2hlKHN0cjogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpOiBzdHJpbmcge1xuICBjb25zdCBtYXAgPSBTVFlMRV9LRVlTX01BUFt0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb25dO1xuICByZXR1cm4gc3RyIGluIG1hcFxuICA/IG1hcFtzdHJdXG4gIDogbWFwW3N0cl0gPSBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlKHN0ciwgdGhlbWVWYXJpYWJsZXMpO1xufVxuXG5jb25zdCBpZ25vcmVDU1NLRVkgPSB7XG4gICdicmVhay1hZnRlcic6ICdicmVhay1hZnRlcicsXG4gICdicmVhay1iZWZvcmUnOiAnYnJlYWstYmVmb3JlJyxcbiAgJ3BhZ2UtYnJlYWstYWZ0ZXInOiAncGFnZS1icmVhay1hZnRlcicsXG4gICdwYWdlLWJyZWFrLWJlZm9yZSc6ICdwYWdlLWJyZWFrLWJlZm9yZSdcbn07XG5cbmNvbnN0IFNUWUxFX0tFWVNfTUFQID0ge1xuICBydGw6IHtcbiAgICAuLi5pZ25vcmVDU1NLRVlcbiAgfSxcbiAgbHRyOiB7XG4gICAgLi4uaWdub3JlQ1NTS0VZXG4gIH1cbn07XG5cbmNvbnN0IEJPVFRPTSA9ICdib3R0b20nO1xuY29uc3QgVE9QID0gJ3RvcCc7XG5cbmZ1bmN0aW9uIGRpckNhY2hlKG9yaWdpbmFsLCB2YWw6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBkaXJBbGlhczogRGlyQWxpYXMpIHtcbiAgY29uc3QgbWFwID0gU1RZTEVfS0VZU19NQVBbdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uXTtcbiAgLy8gUmVwbGFjZSBpbiBvcmlnaW5hbCwgZm9yIGRvIG5vdCByZXBlYXQgdGhpcyBhZ2FpblxuICByZXR1cm4gbWFwW29yaWdpbmFsXSA9IHZhbC5yZXBsYWNlKGRpckFsaWFzLCB0aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24oZGlyQWxpYXMpKTtcbn1cblxuZnVuY3Rpb24gWVBvc2l0aW9uQ2FjaGUob3JpZ2luYWwsIHZhbDogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIHBvczogWVBvc2l0aW9uLCB0bzogJ3RvcCcgfCAnYm90dG9tJykge1xuICBjb25zdCBtYXAgPSBTVFlMRV9LRVlTX01BUFt0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb25dO1xuICAvLyBSZXBsYWNlIGluIG9yaWdpbmFsLCBmb3IgZG8gbm90IHJlcGVhdCB0aGlzIGFnYWluXG4gIHJldHVybiBtYXBbb3JpZ2luYWxdID0gdmFsLnJlcGxhY2UocG9zLCB0byk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXh0Q2xhc3NJZCgpIHtcbiAgcmV0dXJuIGBpJHsobmV4dENsYXNzSWQrKykudG9TdHJpbmcoMzYpfWA7XG59XG5mdW5jdGlvbiBjcmVhdGVOZXh0S2V5ZnJhbWVJZCgpIHtcbiAgcmV0dXJuIGBrJHsobmV4dEtleUZyYW1lSWQrKykudG9TdHJpbmcoMzYpfWA7XG59XG5cbnR5cGUgT25seUNsYXNzZXM8VD4gPSBSZWNvcmQ8KFxuICBFeGNsdWRlPChUIGV4dGVuZHMgKCguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA/IChrZXlvZiBSZXR1cm5UeXBlPFQ+KSA6IGtleW9mIFQpLFxuICAnJG5hbWUnIHwgJyRzaGVldCcgfCAnJGtleWZyYW1lcyc+XG4pLCBzdHJpbmc+O1xuXG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95LCBOZ01vZHVsZSwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ1RyYW5zY2x1ZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9uZ1RyYW5zY2x1ZGUgPSB0ZW1wbGF0ZVJlZjtcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gbnVsbDtcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbmdUcmFuc2NsdWRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9uZ1RyYW5zY2x1ZGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdmlld1JlZi5yZW1vdmUoKTtcbiAgfVxufVxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlTW9kdWxlIHtcblxufVxuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik6IEhUTUxFbGVtZW50IHtcbiAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudC5uYXRpdmVFbGVtZW50IDogZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcbmltcG9ydCB7IENhbkNvbG9yIH0gZnJvbSAnLi9jb2xvcic7XG5pbXBvcnQgeyBDYW5CZyB9IGZyb20gJy4vYmcnO1xuaW1wb3J0IHsgQ2FuRGlzYWJsZSB9IGZyb20gJy4vZGlzYWJsZWQnO1xuaW1wb3J0IHsgQ2FuUmFpc2VkIH0gZnJvbSAnLi9yYWlzZWQnO1xuaW1wb3J0IHsgQ2FuRWxldmF0aW9uIH0gZnJvbSAnLi9lbGV2YXRpb24nO1xuaW1wb3J0IHsgQ2FuT3V0bGluZWQgfSBmcm9tICcuL291dGxpbmVkJztcbmltcG9ydCB7IENhblNoYWRvd0NvbG9yIH0gZnJvbSAnLi9zaGFkb3ctY29sb3InO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXROYXRpdmVFbGVtZW50IH0gZnJvbSAnLi4vbWluaW1hbC9jb21tb24nO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5jb25zdCBERUZBVUxUX1ZBTFVFID0gJyc7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVQYXJhbXNTdHlsZVVwZGF0ZXIge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhblN0eWxlVXBkYXRlciB7XG4gIF90aGVtZTogTHlUaGVtZTI7XG4gIHVwZGF0ZVN0eWxlOiAoZWxlbWVudDogRWxlbWVudFJlZiB8IEVsZW1lbnQpID0+IHZvaWQ7XG4gIHNldEF1dG9Db250cmFzdDogKCkgPT4gdm9pZDtcbn1cbmV4cG9ydCB0eXBlIENhblN0eWxlVXBkYXRlckN0b3IgPSBDb25zdHJ1Y3RvcjxSZXF1aXJlUGFyYW1zU3R5bGVVcGRhdGVyICYgUGFydGlhbDxDYW5Db2xvciAmIENhbkJnICYgQ2FuRGlzYWJsZSAmIENhblJhaXNlZCAmIENhbkVsZXZhdGlvbiAmIENhbk91dGxpbmVkICYgQ2FuU2hhZG93Q29sb3I+PjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluU3R5bGVVcGRhdGVyPFQgZXh0ZW5kcyBDYW5TdHlsZVVwZGF0ZXJDdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuU3R5bGVVcGRhdGVyPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBfY2xhc3NOYW1lQW5vbnltb3VzOiBzdHJpbmc7XG4gICAgX2F1dG9Db250cmFzdDogYm9vbGVhbjtcbiAgICBzZXRBdXRvQ29udHJhc3QoKSB7XG4gICAgICB0aGlzLl9hdXRvQ29udHJhc3QgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGVTdHlsZShlbGVtZW50OiBFbGVtZW50UmVmPGFueT4gfCBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgX19iZyA9IHRoaXMuYmc7XG4gICAgICBjb25zdCBfX2NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgIGNvbnN0IF9fcmFpc2VkID0gdGhpcy5yYWlzZWQ7XG4gICAgICBjb25zdCBfX2VsZXZhdGlvbiA9IHRoaXMuZWxldmF0aW9uO1xuICAgICAgY29uc3QgX19kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICBjb25zdCBfX291dGxpbmVkID0gdGhpcy5vdXRsaW5lZDtcbiAgICAgIGNvbnN0IF9fc2hhZG93Q29sb3IgPSB0aGlzLnNoYWRvd0NvbG9yO1xuICAgICAgY29uc3QgX19pc0NvbnRyYXN0ID0gdGhpcy5fYXV0b0NvbnRyYXN0ICYmICFfX2NvbG9yIHx8IF9fY29sb3IgPT09ICdhdXRvJztcbiAgICAgIGNvbnN0IG5ld0tleSA9IGBjb21tb24tLS0tOiR7XG4gICAgICAgIF9fYmcgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICBfX2NvbG9yIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICBfX3JhaXNlZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICBfX2VsZXZhdGlvbiB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgIF9fZGlzYWJsZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICAgIF9fb3V0bGluZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICAgICAgX19zaGFkb3dDb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICAgIF9faXNDb250cmFzdCB8fCBERUZBVUxUX1ZBTFVFfWA7XG4gICAgICB0aGlzLl9jbGFzc05hbWVBbm9ueW1vdXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXksICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGU6IHtcbiAgICAgICAgICBib3JkZXI/OiBzdHJpbmcsXG4gICAgICAgICAgYmFja2dyb3VuZD86IHN0cmluZyxcbiAgICAgICAgICBjb2xvcj86IHN0cmluZyxcbiAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmcsXG4gICAgICAgICAgcG9pbnRlckV2ZW50cz86ICdub25lJztcbiAgICAgICAgICAnJjpob3Zlcic/OiB7XG4gICAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmdcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmFjdGl2ZSc/OiB7XG4gICAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmdcbiAgICAgICAgICB9XG4gICAgICAgIH0gPSB7fTtcbiAgICAgICAgaWYgKF9fb3V0bGluZWQpIHtcbiAgICAgICAgICBzdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fZGlzYWJsZWQpIHtcbiAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLnRleHQuZGlzYWJsZWQ7XG4gICAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmRpc2FibGVkLmRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChfX2JnKSB7XG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuY29sb3JPZihfX2JnKTtcbiAgICAgICAgICAgIGlmIChfX2lzQ29udHJhc3QpIHtcbiAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKGAke19fYmd9OmNvbnRyYXN0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghc3R5bGUuY29sb3IgJiYgX19jb2xvcikge1xuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKF9fY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoX19yYWlzZWQgfHwgX19lbGV2YXRpb24pIHtcbiAgICAgICAgICAgIGlmICghX19iZykge1xuICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JDc3MgPSBzdHlsZS5iYWNrZ3JvdW5kICE9PSBfX2JnICYmIHRoZW1lLmNvbG9yT2YoX19iZyB8fCAnYmFja2dyb3VuZDpwcmltYXJ5JywgJ3NoYWRvdycpO1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Q29sb3IgPSAoX19zaGFkb3dDb2xvciAmJiB0aGVtZS5jb2xvck9mKF9fc2hhZG93Q29sb3IpKSB8fCBiYWNrZ3JvdW5kQ29sb3JDc3MgfHwgc3R5bGUuYmFja2dyb3VuZCB8fCBzdHlsZS5jb2xvciB8fCB0aGVtZS5zaGFkb3c7XG4gICAgICAgICAgICBzdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3dCdWlsZGVyKF9fZWxldmF0aW9uIHx8IDMsIHNoYWRvd0NvbG9yKTtcbiAgICAgICAgICAgIGlmICghX19lbGV2YXRpb24pIHtcbiAgICAgICAgICAgICAgc3R5bGVbJyY6YWN0aXZlJ10gPSB7XG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDgsIHNoYWRvd0NvbG9yKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGUgYXMgYW55O1xuICAgICAgfSwgZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KSwgdGhpcy5fY2xhc3NOYW1lQW5vbnltb3VzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGFueSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuIiwiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBSaXBwbGVDb25maWcge1xuICBjZW50ZXJlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgc2Vuc2l0aXZlPzogYm9vbGVhbjtcbiAgcmFkaXVzPzogJ2NvbnRhaW5lclNpemUnIHwgbnVtYmVyO1xuICBwZXJjZW50YWdlVG9JbmNyZWFzZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJpcHBsZVJlZiB7XG4gIHN0YXRlID0gdHJ1ZTtcbiAgdGltZXN0YW1wID0gLURhdGUubm93KCk7XG4gIHJlYWRvbmx5IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGVuZCgpIHtcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy50aW1lc3RhbXAgKz0gRGF0ZS5ub3coKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmlwcGxlIHtcbiAgcHJpdmF0ZSBfcmlwcGxlUmVmOiBSaXBwbGVSZWY7XG4gIHByaXZhdGUgX2V2ZW50SGFuZGxlcnM6IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4gPSBuZXcgTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPigpO1xuICBjb25maWc6IFJpcHBsZUNvbmZpZyA9IHt9O1xuICBwcml2YXRlIF90cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLl90aGVtZVZhcmlhYmxlcy5yaXBwbGUuZHVyYXRpb247XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNsYXNzZXM6IGFueSxcbiAgICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIF90cmlnZ2VyRWxlbWVudD86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBUb3VjaEV2ZW50ICA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgncG9pbnRlcmRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2Vkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3RvdWNoZW5kJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCd0b3VjaGNhbmNlbCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2V1cCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2VsZWF2ZScsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICBpZiAoIV90cmlnZ2VyRWxlbWVudCkge1xuICAgICAgICBfdHJpZ2dlckVsZW1lbnQgPSBfY29udGFpbmVyRWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoX3RyaWdnZXJFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRDb25maWcoY29uZmlnOiBSaXBwbGVDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9yZWN0Q29udGFpbmVyKCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUmlwcGxlKHN0eWxlczoge1trZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZ30pIHtcbiAgICB0aGlzLl9yaXBwbGVSZWYgPSBuZXcgUmlwcGxlUmVmKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fcmlwcGxlUmVmLmNvbnRhaW5lcjtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gdGhpcy5jbGFzc2VzLnJpcHBsZUNvbnRhaW5lcjtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3R5bGVzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBjb250YWluZXIuc3R5bGVba2V5XSA9IGAke2VsZW1lbnR9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdvcGFjaXR5Jyk7XG4gICAgY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgxKWA7XG4gIH1cblxuICBwcml2YXRlIG9uUG9pbnRlckRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICAvKipEZXN0cm95IHByZXZpb3VzIHJpcHBsZSBpZiBleGlzdCAqL1xuICAgICAgdGhpcy5lbmRSaXBwbGUoKTtcbiAgICAgIHRoaXMuc3RhcnRSaXBwbGUoZXZlbnQsIHRoaXMuY29uZmlnKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBvblBvaW50ZXJMZWF2ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5kUmlwcGxlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRSaXBwbGUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBQb2ludGVyRXZlbnQsIHJpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuX3JlY3RDb250YWluZXI7XG4gICAgbGV0IHggPSBldmVudC5jbGllbnRYLFxuICAgIHkgPSBldmVudC5jbGllbnRZO1xuICAgIGlmIChyaXBwbGVDb25maWcuY2VudGVyZWQpIHtcbiAgICAgIHggPSBjb250YWluZXJSZWN0LmxlZnQgKyBjb250YWluZXJSZWN0LndpZHRoIC8gMjtcbiAgICAgIHkgPSBjb250YWluZXJSZWN0LnRvcCArIGNvbnRhaW5lclJlY3QuaGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgY29uc3QgbGVmdCA9IHggLSBjb250YWluZXJSZWN0LmxlZnQ7XG4gICAgY29uc3QgdG9wID0geSAtIGNvbnRhaW5lclJlY3QudG9wO1xuICAgIGxldCByYWRpdXMgPSByaXBwbGVDb25maWcucmFkaXVzID09PSAnY29udGFpbmVyU2l6ZScgPyBtYXhTaXplKGNvbnRhaW5lclJlY3QpIC8gMiA6IHJpcHBsZUNvbmZpZy5yYWRpdXMgfHwgcmlwcGxlUmFkaXVzKHgsIHksIGNvbnRhaW5lclJlY3QpO1xuICAgIGlmIChyaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UpIHtcbiAgICAgIHJhZGl1cyArPSByYWRpdXMgKiByaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UgLyAxMDA7XG4gICAgfVxuICAgIHRoaXMuY3JlYXRlUmlwcGxlKHtcbiAgICAgIGxlZnQ6IGxlZnQgLSByYWRpdXMsXG4gICAgICB0b3A6IHRvcCAtIHJhZGl1cyxcbiAgICAgIHdpZHRoOiByYWRpdXMgKiAyLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAyLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHt0aGlzLl90cmFuc2l0aW9uRHVyYXRpb259bXNgXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJ1blRpbWVvdXRPdXRzaWRlWm9uZShmbjogRnVuY3Rpb24sIGRlbGF5ID0gMCkge1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KGZuLCBkZWxheSkpO1xuICB9XG5cbiAgZW5kUmlwcGxlKCkge1xuICAgIGNvbnN0IHJpcHBsZVJlZjogUmlwcGxlUmVmID0gdGhpcy5fcmlwcGxlUmVmIHx8IG51bGw7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLl90cmFuc2l0aW9uRHVyYXRpb247XG4gICAgaWYgKHJpcHBsZVJlZiAmJiByaXBwbGVSZWYuc3RhdGUpIHtcbiAgICAgIHJpcHBsZVJlZi5lbmQoKTtcbiAgICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3RoaXMuX3RyYW5zaXRpb25EdXJhdGlvbiAvIDV9bXNgO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gOiAwKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIC8gKGR1cmF0aW9uICogLjAwMSArIDEpIDogMCk7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIC4xNSA6IDApO1xuICAgICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmlwcGxlUmVmLmNvbnRhaW5lcik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAvIChkdXJhdGlvbiAqIC4wMDEgKyAxKSAqIDIgOiBkdXJhdGlvbik7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgICB0aGlzLl9yaXBwbGVSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiByaXBwbGVSYWRpdXMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJlY3Q6IENsaWVudFJlY3QpIHtcbiAgY29uc3QgZGlzdFggPSBNYXRoLm1heChNYXRoLmFicyh4IC0gcmVjdC5sZWZ0KSwgTWF0aC5hYnMoeCAtIHJlY3QucmlnaHQpKTtcbiAgY29uc3QgZGlzdFkgPSBNYXRoLm1heChNYXRoLmFicyh5IC0gcmVjdC50b3ApLCBNYXRoLmFicyh5IC0gcmVjdC5ib3R0b20pKTtcbiAgcmV0dXJuIE1hdGguc3FydChkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WSk7XG59XG5cbmZ1bmN0aW9uIG1heFNpemUocmVjdDogQ2xpZW50UmVjdCkge1xuICByZXR1cm4gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBMWV9DT01NT05fU1RZTEVTID0ge1xuICBmaWxsOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICB9LFxuICB2aXN1YWxseUhpZGRlbjoge1xuICAgIGJvcmRlcjogMCxcbiAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBtYXJnaW46ICctMXB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzFweCcsXG4gICAgb3V0bGluZTogMCxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBgdHJhbnNwYXJlbnRgLFxuICAgIGJvcmRlcjogMCxcbiAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgbWFyZ2luOiAwLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJyxcbiAgICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZSc6ICdub25lJyxcbiAgICAnJjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgIGJvcmRlcjogMFxuICAgIH1cbiAgfVxufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNvcmVTdHlsZXMge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KExZX0NPTU1PTl9TVFlMRVMpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lOiBMeVRoZW1lMikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnLi4vc3R5bGVzL2NvcmUtc3R5bGVzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcmlwcGxlQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcycHgnLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgb3BhY2l0eTogJy4yJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLm9wYWNpdHl9LHRyYW5zZm9ybSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLnRyYW5zZm9ybVxuICAgIH1gLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICB9XG59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGVTZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IFJpcHBsZSwgUmlwcGxlQ29uZmlnIH0gZnJvbSAnLi4vcmlwcGxlL3JpcHBsZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi9yaXBwbGUvcmlwcGxlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVQYXJhbXMge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xuICBfbmdab25lOiBOZ1pvbmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRGlzYWJsZVJpcHBsZSB7XG4gIF90cmlnZ2VyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcbiAgX3JpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnO1xuICBfcmVtb3ZlUmlwcGxlRXZlbnRzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EaXNhYmxlUmlwcGxlPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxSZXF1aXJlUGFyYW1zPj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkRpc2FibGVSaXBwbGU+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgX3RyaWdnZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIF9yaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZyA9IHt9O1xuICAgIHByaXZhdGUgX3JpcHBsZTogUmlwcGxlO1xuICAgIHByaXZhdGUgX2Rpc2FibGVSaXBwbGU7XG5cbiAgICBnZXQgZGlzYWJsZVJpcHBsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVSaXBwbGU7IH1cbiAgICBzZXQgZGlzYWJsZVJpcHBsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdmFsICE9PSB0aGlzLl9kaXNhYmxlUmlwcGxlKSB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2Rpc2FibGVSaXBwbGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzIHJpcHBsZSBpZiBleGlzdFxuICAgICAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgICAgICAgaWYgKCFuZXdWYWwpIHtcbiAgICAgICAgICAvLyBhZGQgcmlwcGxlXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl90cmlnZ2VyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgcmlwcGxlQ29udGFpbmVyID0gKHRoaXMuX3JpcHBsZUNvbnRhaW5lciAmJiB0aGlzLl9yaXBwbGVDb250YWluZXIubmF0aXZlRWxlbWVudCkgfHwgdHJpZ2dlckVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9yaXBwbGUgPSBuZXcgUmlwcGxlKHRoaXMuX3RoZW1lLmNvbmZpZywgdGhpcy5fbmdab25lLCB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyksIHJpcHBsZUNvbnRhaW5lciwgdHJpZ2dlckVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5fcmlwcGxlLnNldENvbmZpZyh0aGlzLl9yaXBwbGVDb25maWcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIF9yZW1vdmVSaXBwbGVFdmVudHMoKSB7XG4gICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAgIGlmICh0aGlzLl9yaXBwbGUpIHtcbiAgICAgICAgICB0aGlzLl9yaXBwbGUucmVtb3ZlRXZlbnRzKCk7XG4gICAgICAgICAgdGhpcy5fcmlwcGxlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkRpc2FibGUge1xuICBkaXNhYmxlZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EaXNhYmxlZDxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5EaXNhYmxlPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkgeyB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5jb25zdCBERUZBVUxUX0NPTE9SID0gJ3ByaW1hcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkNvbG9yIHtcbiAgY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluQ29sb3I8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuQ29sb3I+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG5cbiAgICBnZXQgY29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2NvbG9yOyB9XG4gICAgc2V0IGNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB2YWwgfHwgREVGQVVMVF9DT0xPUjtcbiAgICAgIGlmIChkZWZhdWx0Q29sb3IgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgdGhpcy5fY29sb3IgPSBkZWZhdWx0Q29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuQmcge1xuICBiZzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5CZzxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5CZz4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfYmc6IHN0cmluZztcblxuICAgIGdldCBiZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fYmc7IH1cbiAgICBzZXQgYmcodmFsOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHZhbCB8fCBERUZBVUxUX0JHO1xuICAgICAgaWYgKGRlZmF1bHRDb2xvciAhPT0gdGhpcy5iZykge1xuICAgICAgICB0aGlzLl9iZyA9IGRlZmF1bHRDb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuUmFpc2VkIHtcbiAgcmFpc2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5SYWlzZWQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuUmFpc2VkPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9yYWlzZWQ6IGJvb2xlYW47XG5cbiAgICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkOyB9XG4gICAgc2V0IHJhaXNlZCh2YWx1ZTogYW55KSB7IHRoaXMuX3JhaXNlZCA9IHRvQm9vbGVhbih2YWx1ZSk7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5PdXRsaW5lZCB7XG4gIG91dGxpbmVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5PdXRsaW5lZDxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5PdXRsaW5lZD4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfb3V0bGluZWQ6IGJvb2xlYW47XG5cbiAgICBnZXQgb3V0bGluZWQoKSB7IHJldHVybiB0aGlzLl9vdXRsaW5lZDsgfVxuICAgIHNldCBvdXRsaW5lZCh2YWx1ZTogYW55KSB7IHRoaXMuX291dGxpbmVkID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRWxldmF0aW9uIHtcbiAgZWxldmF0aW9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkVsZXZhdGlvbjxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5FbGV2YXRpb24+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2VsZXZhdGlvbjogbnVtYmVyO1xuXG4gICAgZ2V0IGVsZXZhdGlvbigpIHsgcmV0dXJuIHRoaXMuX2VsZXZhdGlvbjsgfVxuICAgIHNldCBlbGV2YXRpb24odmFsdWU6IGFueSkgeyB0aGlzLl9lbGV2YXRpb24gPSB2YWx1ZTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuU2hhZG93Q29sb3Ige1xuICBzaGFkb3dDb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5TaGFkb3dDb2xvcjxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5TaGFkb3dDb2xvcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfc2hhZG93Q29sb3I6IHN0cmluZztcblxuICAgIGdldCBzaGFkb3dDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc2hhZG93Q29sb3I7IH1cbiAgICBzZXQgc2hhZG93Q29sb3IodmFsdWU6IHN0cmluZykgeyB0aGlzLl9zaGFkb3dDb2xvciA9IHZhbHVlOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIE5nWm9uZSwgT25EZXN0cm95LCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBtaXhpblN0eWxlVXBkYXRlciwgbWl4aW5CZywgbWl4aW5SYWlzZWQsIG1peGluT3V0bGluZWQsIG1peGluRWxldmF0aW9uLCBtaXhpblNoYWRvd0NvbG9yLCBtaXhpbkRpc2FibGVSaXBwbGUsIG1peGluQ29sb3IgfSBmcm9tICcuLi9jb21tb24vaW5kZXgnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuY29uc3QgREVGQVVMVF9CRyA9ICdwYXBlcic7XG5cbmV4cG9ydCBjbGFzcyBMeVBhcGVyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IEx5UGFwZXJNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluQ29sb3IoXG4gICAgbWl4aW5SYWlzZWQoXG4gICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5UGFwZXJCYXNlKSkpKSkpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGx5LXBhcGVyLCBbbHktcGFwZXJdLCBbbHktdGV4dF1gLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5UGFwZXIgZXh0ZW5kcyBMeVBhcGVyTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIF9oYXNUZXh0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgnbHktdGV4dCcpXG4gIHNldCBoYXNUZXh0KHZhbDogYW55KSB7XG4gICAgdGhpcy5faGFzVGV4dCA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBoYXNUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNUZXh0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsO1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX2VsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYmcgJiYgIXRoaXMuaGFzVGV4dCkge1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlQYXBlcicsXG4gICAgICAgICh7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbd2l0aENsYXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlXaXRoQ2xhc3Mge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHt2YWx9JyBpcyBub3QgdmFsaWQgY2xhc3NOYW1lYCk7XG4gICAgfVxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlQYXBlciB9IGZyb20gJy4vcGFwZXInO1xuaW1wb3J0IHsgTHlXaXRoQ2xhc3MgfSBmcm9tICcuL3dpdGgtY2xhc3MuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlXaXRoQ2xhc3MsIEx5UGFwZXJdLFxuICBleHBvcnRzOiBbTHlXaXRoQ2xhc3MsIEx5UGFwZXJdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q29tbW9uTW9kdWxlIHsgfVxuIiwiZnVuY3Rpb24gaXNXaW5kb3cob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW06IGFueSkge1xuICAgIHJldHVybiBpc1dpbmRvdyhlbGVtKSA/IGVsZW0gOiBlbGVtLm5vZGVUeXBlID09PSA5ICYmIGVsZW0uZGVmYXVsdFZpZXc7XG59XG5leHBvcnQgZnVuY3Rpb24gZXhhY3RQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCkge1xuICAgIGxldCBkb2NFbGVtOiBhbnksIHdpbjogYW55LFxuICAgICAgICBib3ggPSB7dG9wOiAwLCBsZWZ0OiAwfTtcbiAgICBjb25zdCBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcblxuICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xuICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgICB3aW4gPSBnZXRXaW5kb3coZG9jKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcbiAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcbiAgICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRFbnRyeSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBkZWZhdWx0VmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICByZXR1cm4gdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cbiIsIi8vIEVsZW1lbnQgdG8gbW92ZSwgdGltZSBpbiBtcyB0byBhbmltYXRlXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG8oZWxlbWVudDogSFRNTEVsZW1lbnQsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgbGV0IGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGlmIChlLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgIGNvbnN0IHQgPSBlLnNjcm9sbFRvcDtcbiAgICArK2Uuc2Nyb2xsVG9wO1xuICAgIGUgPSB0ICsgMSA9PT0gZS5zY3JvbGxUb3AtLSA/IGUgOiBkb2N1bWVudC5ib2R5O1xuICB9XG4gIHNjcm9sbFRvQyhlLCBlLnNjcm9sbFRvcCwgZWxlbWVudCwgZHVyYXRpb24pO1xufVxuXG4vLyBFbGVtZW50IHRvIG1vdmUsIGVsZW1lbnQgb3IgcHggZnJvbSwgZWxlbWVudCBvciBweCB0bywgdGltZSBpbiBtcyB0byBhbmltYXRlXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG9DKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBmcm9tOiBhbnksIHRvOiBudW1iZXIgfCBIVE1MRWxlbWVudCwgZHVyYXRpb246IG51bWJlcikge1xuICBpZiAoZHVyYXRpb24gPD0gMCkgeyByZXR1cm47IH1cbiAgaWYgKHR5cGVvZiBmcm9tID09PSAnb2JqZWN0Jykge2Zyb20gPSBmcm9tLm9mZnNldFRvcDsgfVxuICBpZiAodHlwZW9mIHRvID09PSAnb2JqZWN0Jykge3RvID0gdG8ub2Zmc2V0VG9wOyB9XG5cbiAgY3JlYXRlU2Nyb2xsV2l0aEFuaW1hdGlvbihlbGVtZW50LCBmcm9tLCB0bywgMCwgMSAvIGR1cmF0aW9uLCAyMCwgZWFzZU91dEN1YWljKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFdpdGhBbmltYXRpb24oXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICB0bzogbnVtYmVyLFxuICBkdXJhdGlvbjogbnVtYmVyLFxuICBwPzogJ3gnIHwgJ3knLFxuICBtb3Rpb24/OiAodDogbnVtYmVyKSA9PiBudW1iZXJcbikge1xuICBjb25zdCBfbW90aW9uID0gbW90aW9uIHx8IGVhc2VPdXRDdWFpYztcbiAgY29uc3QgeyBzY3JvbGxMZWZ0IH0gPSBlbGVtZW50O1xuICByZXR1cm4gY3JlYXRlU2Nyb2xsV2l0aEFuaW1hdGlvbihlbGVtZW50LCBzY3JvbGxMZWZ0LCB0bywgMCwgMSAvIGR1cmF0aW9uLCAyMCwgX21vdGlvbiwgcCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNjcm9sbFdpdGhBbmltYXRpb24oXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICB4RnJvbTogbnVtYmVyLFxuICB4VG86IG51bWJlcixcbiAgdDAxOiBudW1iZXIsXG4gIHNwZWVkOiBudW1iZXIsXG4gIHN0ZXA6IG51bWJlcixcbiAgbW90aW9uOiAodDogbnVtYmVyKSA9PiBudW1iZXIsXG4gIHA/OiAneCcgfCAneSdcbikge1xuICBjb25zdCBzY3JvbGxUID0gcCA9PT0gJ3knID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gIGlmICh0MDEgPCAwIHx8IHQwMSA+IDEgfHwgc3BlZWQgPD0gMCkge1xuICAgIGVsZW1lbnRbc2Nyb2xsVF0gPSB4VG87XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnRbc2Nyb2xsVF0gPSB4RnJvbSAtICh4RnJvbSAtIHhUbykgKiBtb3Rpb24odDAxKTtcbiAgdDAxICs9IHNwZWVkICogc3RlcDtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjcmVhdGVTY3JvbGxXaXRoQW5pbWF0aW9uKGVsZW1lbnQsIHhGcm9tLCB4VG8sIHQwMSwgc3BlZWQsIHN0ZXAsIG1vdGlvbiwgcCk7XG4gIH0sIHN0ZXApO1xufVxuXG5cbi8vIGZ1bmN0aW9uIGxpbmVhclR3ZWVuKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gdDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluUXVhZCh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIHQgKiB0O1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlT3V0UXVhZCh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIC10ICogKHQgLSAyKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluT3V0UXVhZCh0OiBudW1iZXIpIHtcbi8vICAgdCAvPSAwLjU7XG4vLyAgIGlmICh0IDwgMSkge3JldHVybiB0ICogdCAvIDI7IH1cbi8vICAgdC0tO1xuLy8gICByZXR1cm4gKHQgKiAodCAtIDIpIC0gMSkgLyAyO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5DdWFpYyh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIHQgKiB0ICogdDtcbi8vIH1cblxuZnVuY3Rpb24gZWFzZU91dEN1YWljKHQ6IG51bWJlcikge1xuICB0LS07XG4gIHJldHVybiB0ICogdCAqIHQgKyAxO1xufVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRDdWFpYyh0OiBudW1iZXIpIHtcbi8vICAgdCAvPSAwLjU7XG4vLyAgIGlmICh0IDwgMSkge3JldHVybiB0ICogdCAqIHQgLyAyOyB9XG4vLyAgIHQgLT0gMjtcbi8vICAgcmV0dXJuICh0ICogdCAqIHQgKyAyKSAvIDI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJblF1YXJ0KHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gdCAqIHQgKiB0ICogdDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dFF1YXJ0KHQ6IG51bWJlcikge1xuLy8gICB0LS07XG4vLyAgIHJldHVybiAtKHQgKiB0ICogdCAqIHQgLSAxKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluT3V0UXVhcnQodDogbnVtYmVyKSB7XG4vLyAgIHQgLz0gMC41O1xuLy8gICBpZiAodCA8IDEpIHtyZXR1cm4gMC41ICogdCAqIHQgKiB0ICogdDsgfVxuLy8gICB0IC09IDI7XG4vLyAgIHJldHVybiAtKHQgKiB0ICogdCAqIHQgLSAyKSAvIDI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJblF1aW50KHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHQ7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VPdXRRdWludCh0OiBudW1iZXIpIHtcbi8vICAgdC0tO1xuLy8gICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHQgKyAxO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRRdWludCh0OiBudW1iZXIpIHtcbi8vICAgdCAvPSAwLjU7XG4vLyAgIGlmICh0IDwgMSkge3JldHVybiB0ICogdCAqIHQgKiB0ICogdCAvIDI7IH1cbi8vICAgdCAtPSAyO1xuLy8gICByZXR1cm4gKHQgKiB0ICogdCAqIHQgKiB0ICsgMikgLyAyO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5TaW5lKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gLU1hdGguY29zKHQgLyAoTWF0aC5QSSAvIDIpKSArIDE7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VPdXRTaW5lKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gTWF0aC5zaW4odCAvIChNYXRoLlBJIC8gMikpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRTaW5lKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gLShNYXRoLmNvcyhNYXRoLlBJICogdCkgLSAxKSAvIDI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbkV4cG8odDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlT3V0RXhwbyh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIC1NYXRoLnBvdygyLCAtMTAgKiB0KSArIDE7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dEV4cG8odDogbnVtYmVyKSB7XG4vLyAgIHQgLz0gMC41O1xuLy8gICBpZiAodCA8IDEpIHtyZXR1cm4gTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSAvIDI7IH1cbi8vICAgdC0tO1xuLy8gICByZXR1cm4gKC1NYXRoLnBvdygyLCAtMTAgKiB0KSArIDIpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluQ2lyYyh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIC1NYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDE7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VPdXRDaXJjKHQ6IG51bWJlcikge1xuLy8gICB0LS07XG4vLyAgIHJldHVybiBNYXRoLnNxcnQoMSAtIHQgKiB0KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluT3V0Q2lyYyh0OiBudW1iZXIpIHtcbi8vICAgdCAvPSAwLjU7XG4vLyAgIGlmICh0IDwgMSkge3JldHVybiAtKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSkgLyAyOyB9XG4vLyAgIHQgLT0gMjtcbi8vICAgcmV0dXJuIChNYXRoLnNxcnQoMSAtIHQgKiB0KSArIDEpIC8gMjtcbi8vIH1cbiIsImltcG9ydCB7IEVsZW1lbnRSZWYsIE5nWm9uZSwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBnZXROYXRpdmVFbGVtZW50IH0gZnJvbSAnLi4vbWluaW1hbC9jb21tb24nO1xuXG5leHBvcnQgZW51bSBGb2N1c1N0YXR1cyB7XG4gIC8qKm1vdXNlIGFuZC9vciB0b3VjaCovXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIC8qKiBrZXlib2FyZCBhbmQvb3IgcHJvZ3JhbSovXG4gIEtFWUJPQVJEID0gJ2tleWJvYXJkJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c1N0YXRlSW5mbyB7XG4gIHVubGlzdGVuOiAoKSA9PiB2b2lkO1xuICBzdWJqZWN0OiBTdWJqZWN0PEZvY3VzU3RhdGU+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzU3RhdGUge1xuICBldmVudDogRm9jdXNFdmVudDtcbiAgYnk6ICdrZXlib2FyZCcgfCAnbW91c2UnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9lbGVtZW50TWFwID0gbmV3IE1hcDxIVE1MRWxlbWVudCwgRm9jdXNTdGF0ZUluZm8+KCk7XG4gIHByaXZhdGUgX2N1cnJlbnRFdmVudDogJ21vdXNlJyB8ICdrZXlib2FyZCc7XG4gIHByaXZhdGUgX3JlbW92ZUdsb2JhbExpc3RlbmVyczogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfY291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG5cbiAgbGlzdGVuKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIGtleUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KTogT2JzZXJ2YWJsZTxGb2N1c1N0YXRlPiB8IG51bGwge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAvLyByZXR1cm4gbnVsbCBpZiBpdCBpcyBub3QgYnJvd3NlciBwbGF0Zm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgY29uc3Qga2V5ID0ga2V5RWxlbWVudCAmJiBnZXROYXRpdmVFbGVtZW50KGtleUVsZW1lbnQpIHx8IG5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudE1hcC5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRNYXAuZ2V0KGtleSkuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb2N1c1N0YXRlOiBGb2N1c1N0YXRlSW5mbyA9IHtcbiAgICAgIHVubGlzdGVuOiBudWxsLFxuICAgICAgc3ViamVjdDogbmV3IFN1YmplY3Q8Rm9jdXNTdGF0ZT4oKVxuICAgIH07XG4gICAgdGhpcy5faW5jcmVtZW50Q291bnQoKTtcbiAgICBjb25zdCBmb2N1c0xpc3RlbmVyID0gKGV2ZW50OiBGb2N1c0V2ZW50KSA9PiB0aGlzLl9vbihldmVudCwgZm9jdXNTdGF0ZS5zdWJqZWN0KTtcbiAgICBjb25zdCBibHVyTGlzdGVuZXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHRoaXMuX29uKGV2ZW50LCBmb2N1c1N0YXRlLnN1YmplY3QpO1xuXG4gICAgZm9jdXNTdGF0ZS51bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmb2N1c0xpc3RlbmVyLCB0cnVlKTtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXJMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHRoaXMuX2VsZW1lbnRNYXAuc2V0KGtleSwgZm9jdXNTdGF0ZSk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzTGlzdGVuZXIsIHRydWUpO1xuICAgICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckxpc3RlbmVyLCB0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9jdXNTdGF0ZS5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgdW5saXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsID0gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KTtcbiAgICBjb25zdCBmb2N1c1N0YXRlSW5mbyA9IHRoaXMuX2VsZW1lbnRNYXAuZ2V0KGVsKTtcbiAgICBpZiAoZm9jdXNTdGF0ZUluZm8pIHtcbiAgICAgIGZvY3VzU3RhdGVJbmZvLnVubGlzdGVuKCk7XG4gICAgICB0aGlzLl9lbGVtZW50TWFwLmRlbGV0ZShlbCk7XG4gICAgICB0aGlzLl9kZWNyZW1lbnRDb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uKGV2ZW50OiBGb2N1c0V2ZW50LCBzdWJqZWN0OiBTdWJqZWN0PEZvY3VzU3RhdGU+KSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiBzdWJqZWN0Lm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBieTogdGhpcy5fY3VycmVudEV2ZW50IHx8ICdrZXlib2FyZCdcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyT3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzXG4gICAgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0gOiBmYWxzZTtcblxuICAgIGNvbnN0IGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyID0gKCkgPT4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2N1cnJlbnRFdmVudCA9ICdrZXlib2FyZCcpO1xuICAgIGNvbnN0IGRvY3VtZW50TW91c2Vkb3duTGlzdGVuZXIgPSAoKSA9PiB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY3VycmVudEV2ZW50ID0gJ21vdXNlJyk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfSk7XG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2luY3JlbWVudENvdW50KCkge1xuICAgIGlmICgrK3RoaXMuX2NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLl9hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWNyZW1lbnRDb3VudCgpIHtcbiAgICBpZiAoIS0tdGhpcy5fY291bnQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnRNYXAuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy51bmxpc3RlbihlbGVtZW50KSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBBVUlfVkVSU0lPTiA9ICcxLjkuMTAtbmlnaHRseS4yMDE4MTIyMC1qcHdjOTR3aSc7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMTItMjBUMDg6MjI6NTUuNTA0Wic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgTFlfSEFNTUVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyT3B0aW9ucz4oJ0xZX0hBTU1FUl9PUFRJT05TJyk7XG5cbmNvbnN0IEhBTU1FUl9HRVNUVVJFU19FVkVOVFMgPSBbXG4gICdzbGlkZScsXG4gICdzbGlkZXN0YXJ0JyxcbiAgJ3NsaWRlZW5kJyxcbiAgJ3NsaWRlcmlnaHQnLFxuICAnc2xpZGVsZWZ0JyxcbiAgJ3NsaWRlY2FuY2VsJ1xuXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBldmVudHM6IHN0cmluZ1tdID0gSEFNTUVSX0dFU1RVUkVTX0VWRU5UUztcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIGNvbnN0IGhhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gICAgY29uc3QgbWMgPSBuZXcgaGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwge30pO1xuXG4gICAgY29uc3QgcGFuID0gbmV3IGhhbW1lci5QYW4oKTtcbiAgICBjb25zdCBzd2lwZSA9IG5ldyBoYW1tZXIuU3dpcGUoKTtcbiAgICBjb25zdCBzbGlkZSA9IHRoaXMuX2NyZWF0ZVJlY29nbml6ZXIocGFuLCB7ZXZlbnQ6ICdzbGlkZScsIHRocmVzaG9sZDogMH0sIHN3aXBlKTtcblxuICAgIHBhbi5yZWNvZ25pemVXaXRoKHN3aXBlKTtcblxuICAgIC8vIEFkZCBjdXN0b21pemVkIGdlc3R1cmVzIHRvIEhhbW1lciBtYW5hZ2VyXG4gICAgbWMuYWRkKFtzd2lwZSwgcGFuLCBzbGlkZV0pO1xuICAgIHJldHVybiBtYztcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgbmV3IHJlY29nbml6ZXIsIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBkZWZhdWx0IHJlY29nbml6ZXJzIG9mIEhhbW1lckpTICovXG4gIHByaXZhdGUgX2NyZWF0ZVJlY29nbml6ZXIoYmFzZTogYW55LCBvcHRpb25zOiBhbnksIC4uLmluaGVyaXRhbmNlczogYW55W10pIHtcbiAgICBjb25zdCByZWNvZ25pemVyID0gbmV3IChiYXNlLmNvbnN0cnVjdG9yKShvcHRpb25zKTtcblxuICAgIGluaGVyaXRhbmNlcy5wdXNoKGJhc2UpO1xuICAgIGluaGVyaXRhbmNlcy5mb3JFYWNoKGl0ZW0gPT4gcmVjb2duaXplci5yZWNvZ25pemVXaXRoKGl0ZW0pKTtcblxuICAgIHJldHVybiByZWNvZ25pemVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBbTHlUaGVtZTJdLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVbmRlZmluZWQge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5leHBvcnQgY29uc3QgVW5kZWZpbmVkVmFsdWUgPSBuZXcgVW5kZWZpbmVkKCk7XG4iLCJleHBvcnQgZW51bSBJbnZlcnRNZWRpYVF1ZXJ5IHtcbiAgTm8sXG4gIFllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWVkaWFRdWVyeShtZWRpYTogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5OiBJbnZlcnRNZWRpYVF1ZXJ5ID0gSW52ZXJ0TWVkaWFRdWVyeS5Obyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgaWYgKG1lZGlhICYmIGludmVydE1lZGlhUXVlcnkgPT09IEludmVydE1lZGlhUXVlcnkuWWVzKSB7XG4gICAgY29uc3QgbmV3VmFsID0gbWVkaWEuc3BsaXQoJywnKS5tYXAoXyA9PiBgbm90ICR7X31gKTtcbiAgICByZXR1cm4gbmV3VmFsO1xuICB9XG4gIHJldHVybiBtZWRpYTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudCwgSW5qZWN0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IEx5Q29yZVN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9jb3JlLXN0eWxlcyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tRXZlbnQgLCBPYnNlcnZhYmxlLCBlbXB0eSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSwgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBvdmVybGF5QmFja2Ryb3A6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgub3ZlcmxheSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfVxufSk7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV2luZG93U2Nyb2xsU2VydmljZSB7XG5cbiAgc2Nyb2xsJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBuZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnc2Nyb2xsJykucGlwZShcbiAgICAgICAgICBhdWRpdFRpbWUoMjApLFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcm9sbCQgPSBlbXB0eSgpO1xuICAgIH1cbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlDb250YWluZXIge1xuICBwcml2YXRlIF9jbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG4gIHByb3RlY3RlZCByZWFkb25seSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zID0gbmV3IFNldDxhbnk+KCk7XG4gIHByaXZhdGUgX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcjogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbHktb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgfVxuICB9XG4gIGdldCBjb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2FkZChpdGVtKSB7XG4gICAgdGhpcy5faXRlbXMuYWRkKGl0ZW0pO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgfVxuXG4gICAgLyoqXG4gICAqIFJlbW92ZSBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfcmVtb3ZlKGl0ZW0pIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgdGhpcy5faXRlbXMuZGVsZXRlKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdHlsZXMgZm9yIG92ZXJsYXkgY29udGFpbmVyXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXRlbXMuc2l6ZSkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lciA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBCQUNLRFJPUF9TVFlMRVMgPSAoe1xuICBiYWNrZHJvcDoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICB9XG59KTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktb3ZlcmxheS1iYWNrZHJvcCcsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlCYWNrZHJvcCB7XG4gIC8qKiBAaWdub3JlICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KEJBQ0tEUk9QX1NUWUxFUyk7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLl9vdmVybGF5Q29uZmlnLmZuRGVzdHJveSgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBASW5qZWN0KCdvdmVybGF5Q29uZmlnJykgcHJpdmF0ZSBfb3ZlcmxheUNvbmZpZzogYW55LFxuICAgIGNvbW1vblN0eWxlczogTHlDb3JlU3R5bGVzXG4gICkge1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb21tb25TdHlsZXMuY2xhc3Nlcy5maWxsKTtcbiAgICBpZiAoX292ZXJsYXlDb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYmFja2Ryb3ApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCAsIE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXNpemVTZXJ2aWNlIHtcblxuICByZXNpemUkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICAgIGF1ZGl0VGltZSgyMCksXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2l6ZSQgPSBlbXB0eSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyLCBMeU92ZXJsYXlCYWNrZHJvcCwgV2luZG93U2Nyb2xsU2VydmljZSB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmVzaXplU2VydmljZSB9IGZyb20gJy4vcmVzaXplJztcblxuaW50ZXJmYWNlIE92ZXJsYXlDb25maWcge1xuICBzdHlsZXM6IE9iamVjdDtcbiAgY2xhc3Nlcz86IHN0cmluZ1tdO1xuICBiYWNrZHJvcD86IGJvb2xlYW47XG4gIGZuRGVzdHJveT86ICguLi5hcmcpID0+IHZvaWQ7XG4gIGhvc3Q/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gIC8qKiBEZXRhY2hlcyBhIHZpZXcgZnJvbSBkaXJ0eSBjaGVja2luZyBhZ2FpbiBvZiBBcHBsaWNhdGlvblJlZi4gICovXG4gIGRldGFjaDogKCkgPT4gdm9pZDtcblxuICAvKiogUmVtb3ZlIGVsZW1lbnQgb2YgRE9NICovXG4gIHJlbW92ZTogKCkgPT4gdm9pZDtcblxuICAvKiogRGV0YWNoICYgcmVtb3ZlICovXG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG5cbiAgY29udGFpbmVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG5cbn1cbmNsYXNzIENyZWF0ZUZyb21UZW1wbGF0ZVJlZiBpbXBsZW1lbnRzIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICBwcml2YXRlIF92aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZWw6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9jb21wUmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgcHJpdmF0ZSBfY29tcFJlZk92ZXJsYXlCYWNrZHJvcDogQ29tcG9uZW50UmVmPGFueT47XG4gIHdpbmRvd1NSU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIGdldCBjb250YWluZXJFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiB8IHN0cmluZyxcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgX2NvbnRleHQ6IGFueSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgd2luZG93U2Nyb2xsOiBXaW5kb3dTY3JvbGxTZXJ2aWNlLFxuICAgIHJlc2l6ZVNlcnZpY2U6IFJlc2l6ZVNlcnZpY2UsXG4gICAgY29uZmlnPzogT3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICAvLyB0aGlzLl92aWV3UmVmID0gX3RlbXBsYXRlUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhfY29udGV4dCk7XG4gICAgLy8gdGhpcy5fdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5fZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290Tm9kZSkpO1xuICAgIGNvbnN0IF9fc3R5bGVzID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnLFxuICAgICAgLi4uY29uZmlnLnN0eWxlc1xuICAgIH07XG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiAnb3ZlcmxheUNvbmZpZycsXG4gICAgICAgIHVzZVZhbHVlOiA8T3ZlcmxheUNvbmZpZz57XG4gICAgICAgICAgZm5EZXN0cm95OiB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKSxcbiAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgc3R5bGVzOiBfX3N0eWxlcyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sIHRoaXMuX2luamVjdG9yKTtcblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKF9fc3R5bGVzKTtcbiAgICBpZiAoY29uZmlnLmhvc3QpIHtcbiAgICAgIHRoaXMud2luZG93U1JTdWIgPSBtZXJnZSh3aW5kb3dTY3JvbGwuc2Nyb2xsJCwgcmVzaXplU2VydmljZS5yZXNpemUkKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gY29uZmlnLmhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyhuZXdTdHlsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzO1xuICAgIGlmIChjbGFzc2VzICYmIGNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4gKHRoaXMuX2VsIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KEx5T3ZlcmxheUJhY2tkcm9wLCBuZXdJbmplY3Rvcik7XG4gICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQoYmFja2Ryb3BFbCk7XG4gICAgdGhpcy5fYXBwZW5kQ29tcG9uZW50VG9Cb2R5KF90ZW1wbGF0ZVJlZiwgX2NvbnRleHQsIHRoaXMuX2luamVjdG9yKTtcblxuICB9XG5cbiAgdXBkYXRlU3R5bGVzKF9fc3R5bGVzKSB7XG4gICAgLyoqIEFwcGx5IHN0eWxlcyAqL1xuICAgIC8qKiBzZXQgc3R5bGVzICovXG4gICAgZm9yIChjb25zdCBrZXkgaW4gX19zdHlsZXMpIHtcbiAgICAgIGlmIChfX3N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlVmFsID0gX19zdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHN0eWxlVmFsKSB7XG4gICAgICAgICAgdGhpcy5fZWwuc3R5bGVba2V5XSA9IHR5cGVvZiBfX3N0eWxlc1trZXldID09PSAnbnVtYmVyJyA/IGAke3N0eWxlVmFsfXB4YCA6IHN0eWxlVmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ29tcG9uZW50VG9Cb2R5KHR5cGU6IFRlbXBsYXRlUmVmPGFueT4gfCBUeXBlPGFueT4gfCBzdHJpbmcsIGNvbnRleHQsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIC8vIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy5fdmlld1JlZiA9IHR5cGUuY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRleHQgfHwge30pO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIC8vIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChfID0+IHRoaXMuX2VsLmFwcGVuZENoaWxkKF8pKTtcblxuICAgICAgLy8gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9lbC5pbm5lclRleHQgPSB0eXBlO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tcFJlZiA9IHRoaXMuZ2VuZXJhdGVDb21wb25lbnQodHlwZSBhcyBUeXBlPGFueT4sIGluamVjdG9yKTtcbiAgICAgIHRoaXMuX2VsID0gdGhpcy5fY29tcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUNvbXBvbmVudCh0eXBlOiBUeXBlPGFueT4sIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSk7XG4gICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fdmlld1JlZik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICB0aGlzLl92aWV3UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9lbCkge1xuICAgICAgLy8gcmVtb3ZlIGlmIGNvbnRlbnQgaXMgc3RyaW5nXG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmRlc3Ryb3koKTtcbiAgICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUoYmFja2Ryb3BFbCk7XG4gICAgfVxuICAgIHRoaXMud2luZG93U1JTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3dpbmRvd1Njcm9sbDogV2luZG93U2Nyb2xsU2VydmljZSxcbiAgICBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBSZXNpemVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgY3JlYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nLCBjb250ZXh0PzogYW55LCBjb25maWc/OiBPdmVybGF5Q29uZmlnKTogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gICAgcmV0dXJuIG5ldyBDcmVhdGVGcm9tVGVtcGxhdGVSZWYoXG4gICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX2FwcFJlZiwgdGVtcGxhdGUsIHRoaXMuX292ZXJsYXlDb250YWluZXIsIGNvbnRleHQsIHRoaXMuX2luamVjdG9yLCB0aGlzLl93aW5kb3dTY3JvbGwsIHRoaXMuX3Jlc2l6ZVNlcnZpY2UsIGNvbmZpZyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeU92ZXJsYXlCYWNrZHJvcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0x5T3ZlcmxheUJhY2tkcm9wXVxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCA9IHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlXG59O1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeSB7XG4gIGNyZWF0ZShjYWxsYmFjazogTXV0YXRpb25DYWxsYmFjayk6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBFbGVtZW50T2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeTogTXV0YXRpb25PYnNlcnZlckZhY3RvcnlcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMuZGVzdHJveShlbGVtZW50KSk7XG4gIH1cblxuICBvYnNlcnZlKGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4sIGZuOiBNdXRhdGlvbkNhbGxiYWNrLCBvcHRpb25zPzogTXV0YXRpb25PYnNlcnZlckluaXQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5fbXV0YXRpb25PYnNlcnZlckZhY3RvcnkuY3JlYXRlKGZuKTtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9wdGlvbnMgfHwgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IE9ic2VydmVyXG4gICAqL1xuICBkZXN0cm95KGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkFsaWFzIHtcbiAgcm93UmV2ZXJzZSA9ICdyb3ctcmV2ZXJzZScsXG4gIGNvbHVtblJldmVyc2UgPSAnY29sdW1uLXJldmVyc2UnLFxuICB3cmFwUmV2ZXJzZSA9ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydCA9ICdmbGV4LXN0YXJ0JyxcbiAgZW5kID0gJ2ZsZXgtZW5kJyxcbiAgYmV0d2VlbiA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kID0gJ3NwYWNlLWFyb3VuZCcsXG4gIGV2ZW5seSA9ICdzcGFjZS1ldmVubHknXG59XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkluamVjdGFibGUiLCJPcHRpb25hbCIsIkluamVjdCIsIlJlbmRlcmVyRmFjdG9yeTIiLCJET0NVTUVOVCIsImlzRGV2TW9kZSIsIk5nWm9uZSIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIiwiRWxlbWVudFJlZiIsInRzbGliXzEuX19leHRlbmRzIiwiREVGQVVMVF9CRyIsIlJlbmRlcmVyMiIsIlN1YmplY3QiLCJIYW1tZXJHZXN0dXJlQ29uZmlnIiwic3R5bGVzIiwiZnJvbUV2ZW50IiwiYXVkaXRUaW1lIiwibWFwIiwic2hhcmUiLCJlbXB0eSIsIkNvbXBvbmVudCIsIkhvc3RMaXN0ZW5lciIsIlN1YnNjcmlwdGlvbiIsIkluamVjdG9yIiwibWVyZ2UiLCJUZW1wbGF0ZVJlZiIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIkFwcGxpY2F0aW9uUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGFBQWdCLGNBQWMsQ0FBQyxRQUFROztZQUMvQixDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7WUFDdkMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7O1lBQ3ZDLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztZQUN2QyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0FDTkQ7UUFDTSxNQUFNLEdBQUcsT0FBTzs7UUFFaEIscUJBQXFCLEdBQUcsR0FBRzs7UUFDM0Isd0JBQXdCLEdBQUcsSUFBSTs7UUFDL0IsMEJBQTBCLEdBQUcsSUFBSTs7QUFDdkMsUUFBYSxPQUFPLEdBQUc7UUFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMs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