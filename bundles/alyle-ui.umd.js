(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('chroma-js'), require('@angular/platform-browser'), require('@angular/common'), require('rxjs/operators'), require('rxjs'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui', ['exports', 'chroma-js', '@angular/platform-browser', '@angular/common', 'rxjs/operators', 'rxjs', '@angular/core'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.core = {}),global.chroma,global.ng.platformBrowser,global.ng.common,global.rxjs.operators,global.rxjs,global.ng.core));
}(this, (function (exports,_chroma,platformBrowser,i1,operators,rxjs,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var THEME_VARIABLES = new i0.InjectionToken('ly.theme.variables');
    /** @type {?} */
    var IS_CORE_THEME = new i0.InjectionToken('ly.is.root');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                window.addEventListener('testPassive', ( /** @type {?} */(null)), opts);
                window.removeEventListener('testPassive', ( /** @type {?} */(null)), opts);
            }
            catch (e) { }
        }
        return supportsPassive;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LY_THEME_GLOBAL_VARIABLES = new i0.InjectionToken('ly.theme.global.variables');
    /** @type {?} */
    var LY_THEME = new i0.InjectionToken('ly_theme_config');
    /** @type {?} */
    var LY_THEME_NAME = new i0.InjectionToken('ly.theme.name');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                if (val === DirAlias.before) {
                    return this.direction === 'rtl' ? 'right' : 'left';
                }
                else if (val === DirAlias.after) {
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
     * @param {?=} optional get optional value, if not exist return default if not is string
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
                        fn.call(undefined, value, valItem[j], index);
                    }
                }
                else {
                    fn.call(undefined, value, null, index);
                }
            }
        }
        else {
            fn.call(undefined, str, null, 0);
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        var element = ( /** @type {?} */(nodes.item(index)));
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @type {?} */
    var INITIAL_WH = 'initial';
    var Positioning = /** @class */ (function () {
        function Positioning(placement, xPosition, yPosition, origin, overlayElement, _themeVariables, _offset, _flip) {
            if (_offset === void 0) {
                _offset = 0;
            }
            if (_flip === void 0) {
                _flip = true;
            }
            this.placement = placement;
            this.xPosition = xPosition;
            this.yPosition = yPosition;
            this.origin = origin;
            this.overlayElement = overlayElement;
            this._themeVariables = _themeVariables;
            this._offset = _offset;
            this._offsetCheck = 16;
            this._originRect = ( /** @type {?} */(this.origin.getBoundingClientRect()));
            this._overlayElementRect = ( /** @type {?} */(this.overlayElement.getBoundingClientRect()));
            this.width = INITIAL_WH;
            this.height = INITIAL_WH;
            /** @type {?} */
            var offsetCheckx2 = this._offsetCheck * 2;
            this.createPosition();
            if (_flip) {
                for (var index = 0; index < 2; index++) {
                    if (this.checkAll()) {
                        this.createPosition();
                    }
                }
            }
            // when there is not enough space
            if (this.checkAll()) {
                /** @type {?} */
                var _max_width = this._overlayElementRect.width + offsetCheckx2 > window.innerWidth;
                /** @type {?} */
                var _max_height = this._overlayElementRect.height + offsetCheckx2 > window.innerHeight;
                if (_max_width || _max_height) {
                    if (_max_height) {
                        this.y = this._offsetCheck;
                        this.height = window.innerHeight - offsetCheckx2 + "px";
                    }
                    if (_max_width) {
                        this.x = this._offsetCheck;
                        this.width = window.innerWidth - offsetCheckx2 + "px";
                    }
                }
                else {
                    if (this.checkBottom()) {
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
                this.updateOrigin();
            }
            if (this._offset) {
                this.updateOrigin();
            }
            // round result
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.ax = Math.round(this.ax);
            this.ay = Math.round(this.ay);
        }
        Object.defineProperty(Positioning.prototype, "offsetX", {
            get: /**
             * @return {?}
             */ function () {
                return typeof this._offset === 'number'
                    ? this._offset
                    : this._offset.x || 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Positioning.prototype, "offsetY", {
            get: /**
             * @return {?}
             */ function () {
                return typeof this._offset === 'number'
                    ? this._offset
                    : this._offset.y || 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        Positioning.prototype.createPosition = /**
         * @private
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
                var x = this._originRect.x;
                /** @type {?} */
                var y = this._originRect.y;
                /** @type {?} */
                var ox = 'center';
                /** @type {?} */
                var oy = 'center';
                if (this.placement) {
                    if (this.placement === YPosition.above) {
                        x += (this._originRect.width - this._overlayElementRect.width) / 2;
                        y += -this._overlayElementRect.height;
                        oy = 'bottom';
                        // set offset
                        y -= this.offsetY;
                    }
                    else if (this.placement === YPosition.below) {
                        x += (this._originRect.width - this._overlayElementRect.width) / 2;
                        y += this._originRect.height;
                        oy = 'top';
                        // set offset
                        y += this.offsetY;
                    }
                    else {
                        /** @type {?} */
                        var dir = this._themeVariables.getDirection(( /** @type {?} */(this.placement)));
                        if (dir === DirPosition.left) {
                            ox = '100%';
                            x += -this._overlayElementRect.width;
                            y += (this._originRect.height - this._overlayElementRect.height) / 2;
                            // set offset
                            x -= this.offsetX;
                        }
                        else if (dir === DirPosition.right) {
                            ox = '0%';
                            x += this._originRect.width;
                            y += (this._originRect.height - this._overlayElementRect.height) / 2;
                            // set offset
                            x += this.offsetX;
                        }
                    }
                    if (this.xPosition) {
                        /** @type {?} */
                        var dir = this._themeVariables.getDirection(( /** @type {?} */(this.xPosition)));
                        if (dir === DirPosition.right) {
                            ox = '0%';
                            x = this._originRect.x;
                            // set offset
                            x += this.offsetX;
                        }
                        else if (dir === DirPosition.left) {
                            ox = '100%';
                            x = this._originRect.x + this._originRect.width - this._overlayElementRect.width;
                            // set offset
                            x -= this.offsetX;
                        }
                    }
                    else if (this.yPosition) {
                        if (this.yPosition === YPosition.above) {
                            y = this._originRect.y;
                            oy = '0%';
                            // set offset
                            y -= this.offsetY;
                        }
                        else if (this.yPosition === YPosition.below) {
                            y = this._originRect.y + this._originRect.height - this._overlayElementRect.height;
                            oy = '100%';
                            // set offset
                            y += this.offsetY;
                        }
                    }
                }
                this.x = x;
                this.y = y;
                this.ax = x;
                this.ay = y;
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
         * @private
         * @param {?=} returnVal
         * @return {?}
         */
        Positioning.prototype.checkLeft = /**
         * @private
         * @param {?=} returnVal
         * @return {?}
         */
            function (returnVal) {
                /** @type {?} */
                var rest = this.ax - this._offsetCheck;
                if (returnVal) {
                    return rest;
                }
                if (rest < 0) {
                    if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                        this.placement = invertPlacement(this.placement);
                    }
                    if (this.xPosition) {
                        this.xPosition = ( /** @type {?} */(invertPlacement(this.xPosition)));
                    }
                    return true;
                }
                return false;
            };
        /**
         * @private
         * @param {?=} returnVal
         * @return {?}
         */
        Positioning.prototype.checkRight = /**
         * @private
         * @param {?=} returnVal
         * @return {?}
         */
            function (returnVal) {
                /** @type {?} */
                var rest = window.innerWidth - (this.ax + this._overlayElementRect.width + this._offsetCheck);
                if (returnVal) {
                    return rest;
                }
                if (rest < 0) {
                    if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                        this.placement = invertPlacement(this.placement);
                    }
                    if (this.xPosition) {
                        this.xPosition = ( /** @type {?} */(invertPlacement(this.xPosition)));
                    }
                    return true;
                }
                return false;
            };
        /**
         * @private
         * @param {?=} returnVal
         * @return {?}
         */
        Positioning.prototype.checkTop = /**
         * @private
         * @param {?=} returnVal
         * @return {?}
         */
            function (returnVal) {
                /** @type {?} */
                var rest = this.ay - this._offsetCheck;
                if (returnVal) {
                    return rest;
                }
                if (rest < 0) {
                    if (this.placement === YPosition.above || this.placement === YPosition.below) {
                        this.placement = invertPlacement(this.placement);
                    }
                    if (this.yPosition) {
                        this.yPosition = ( /** @type {?} */(invertPlacement(this.yPosition)));
                    }
                    return true;
                }
                return false;
            };
        /**
         * @private
         * @param {?=} returnVal
         * @return {?}
         */
        Positioning.prototype.checkBottom = /**
         * @private
         * @param {?=} returnVal
         * @return {?}
         */
            function (returnVal) {
                /** @type {?} */
                var rest = window.innerHeight - (this.ay + this._overlayElementRect.height + this._offsetCheck);
                if (returnVal) {
                    return rest;
                }
                if (rest < 0) {
                    if (this.placement === YPosition.above || this.placement === YPosition.below) {
                        this.placement = invertPlacement(this.placement);
                    }
                    if (this.yPosition) {
                        this.yPosition = ( /** @type {?} */(invertPlacement(this.yPosition)));
                    }
                    return true;
                }
                return false;
            };
        /**
         * @private
         * @return {?}
         */
        Positioning.prototype.checkAll = /**
         * @private
         * @return {?}
         */
            function () {
                return this.checkLeft() ||
                    this.checkRight() ||
                    this.checkTop() ||
                    this.checkBottom();
            };
        /**
         * @private
         * @return {?}
         */
        Positioning.prototype.updateOrigin = /**
         * @private
         * @return {?}
         */
            function () {
                // do not update if it is defined
                if (this._origin) {
                    return;
                }
                this._origin = true;
                /** @type {?} */
                var oax = this._originRect.x + this._originRect.width / 2;
                /** @type {?} */
                var oay = this._originRect.y + this._originRect.height / 2;
                /** @type {?} */
                var vax = this.x + this._overlayElementRect.width / 2;
                /** @type {?} */
                var vay = this.y + this._overlayElementRect.height / 2;
                this.ox = oax - vax + this._overlayElementRect.width / 2 + "px";
                this.oy = oay - vay + this._overlayElementRect.height / 2 + "px";
            };
        return Positioning;
    }());
    /**
     * @param {?} placement
     * @return {?}
     */
    function invertPlacement(placement) {
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
        return placement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        Object.defineProperty(LyTheme2.prototype, "variables", {
            /** Get Theme Variables */
            get: /**
             * Get Theme Variables
             * @return {?}
             */ function () {
                return this.config;
            },
            enumerable: true,
            configurable: true
        });
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
                    /** @type {?} */
                    var theme = this.core.get(themeName);
                    if (theme === undefined) {
                        throw new Error("Theme " + themeName + " not found in CoreTheme");
                    }
                    this.config = theme;
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
         * @param {?=} style Styles
         * @param {?=} el Element
         * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
         * @param {?=} priority
         * @param {?=} parentStyle
         * @return {?}
         */
        LyTheme2.prototype.addStyle = /**
         * Add a new dynamic style, use only within \@Input()
         * @param {?} id Unique id
         * @param {?=} style Styles
         * @param {?=} el Element
         * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
         * @param {?=} priority
         * @param {?=} parentStyle
         * @return {?}
         */
            function (id, style, el, instance, priority, parentStyle) {
                /** @type {?} */
                var newClass = ( /** @type {?} */(this._createStyleContent2(style, id, priority, TypeStyle.OnlyOne, false, parentStyle)));
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
         * @private
         * @param {?} element
         * @param {?} renderer
         * @param {?} newClassname
         * @param {?=} oldClassname
         * @return {?}
         */
        LyTheme2.prototype.updateClassName = /**
         * @private
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
                    /** @type {?} */
                    var theme = this.themeMap.get(this.initialTheme);
                    if (theme == null) {
                        throw new Error("Theme " + nam + " not found in themeMap");
                    }
                    theme.change = nam;
                    this.config = ( /** @type {?} */(this.core.get(nam)));
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
         * @private
         * @return {?}
         */
        LyTheme2.prototype._updateAllStyles = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.elements.forEach(function (_, key) {
                    /** @type {?} */
                    var styleData = ( /** @type {?} */(STYLE_MAP5.get(key)));
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
         * @param priority style priority(default: 0)
         */
        /**
         * Create a simple style
         * return className
         * @param {?} id id of style
         * @param {?} css style object or string
         * @param {?=} priority style priority(default: 0)
         * @param {?=} parentStyle
         * @return {?}
         */
        LyTheme2.prototype.addSimpleStyle = /**
         * Create a simple style
         * return className
         * @param {?} id id of style
         * @param {?} css style object or string
         * @param {?=} priority style priority(default: 0)
         * @param {?=} parentStyle
         * @return {?}
         */
            function (id, css, priority, parentStyle) {
                return ( /** @type {?} */(this._createStyleContent2(( /** @type {?} */(css)), id, priority, TypeStyle.OnlyOne, false, parentStyle)));
            };
        /**
         * @private
         * @return {?}
         */
        LyTheme2.prototype._addDefaultStyles = /**
         * @private
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
         * @private
         * @param {?} styles
         * @param {?} id
         * @param {?} priority
         * @param {?} type
         * @param {?=} forChangeTheme
         * @param {?=} parentStyle
         * @return {?}
         */
        LyTheme2.prototype._createStyleContent2 = /**
         * @private
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
                var newId = id || ( /** @type {?} */(styles));
                /** @type {?} */
                var isNewStyle = null;
                if (!STYLE_MAP5.has(newId)) {
                    isNewStyle = true;
                    STYLE_MAP5.set(newId, {
                        priority: priority,
                        styles: ( /** @type {?} */(styles)),
                        type: type,
                        css: {},
                        id: id,
                        parentStyle: parentStyle
                    });
                }
                /** @type {?} */
                var styleMap = ( /** @type {?} */(STYLE_MAP5.get(newId)));
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
                    var themeMap = ( /** @type {?} */(this.themeMap.get(this.initialTheme)));
                    /** @type {?} */
                    var config = ( /** @type {?} */(this.core.get(themeMap.change || themeName)));
                    if (typeof styles === 'function') {
                        styleMap.requireUpdate = true;
                        css = groupStyleToString(styleMap, ( /** @type {?} */(styles(config))), themeName, id, type, config);
                        if (!forChangeTheme) {
                            styleMap.css[themeName] = css;
                        }
                    }
                    else {
                        /** create a new id for style that does not <-<require>-> changes */
                        css = groupStyleToString(styleMap, ( /** @type {?} */(styles)), themeName, ( /** @type {?} */(newId)), type, config);
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
                        var el = ( /** @type {?} */(this.elements.get(newId)));
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
         * @private
         * @param {?} priority
         * @return {?}
         */
        LyTheme2.prototype._createStyleContainer = /**
         * @private
         * @param {?} priority
         * @return {?}
         */
            function (priority) {
                priority = priority || 0;
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
         * @private
         * @param {?} index
         * @return {?}
         */
        LyTheme2.prototype.findNode = /**
         * @private
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
         * @private
         * @param {?} css
         * @return {?}
         */
        LyTheme2.prototype._createElementStyle = /**
         * @private
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
                rules = styleToString(id, null, ( /** @type {?} */(styles)), themeVariables, ( /** @type {?} */(className)));
            }
            if (styleMap.parentStyle) {
                /** @type {?} */
                var styleMapOfParentStyle = STYLE_MAP5.get(styleMap.parentStyle);
                if (!styleMapOfParentStyle) {
                    throw new Error("The parentStyle not exist or is called before being created.");
                }
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
        return str.replace(REF_REG_EXP, function (_match, token) {
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
                        keyAndValue += convertToStyleValue(styleKey, ( /** @type {?} */(element)), themeVariables);
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
     * @param {?} themeVariables
     * @return {?}
     */
    function converterToCssKeyAndStyle(str, themeVariables) {
        /** @type {?} */
        var hyphenCase = toHyphenCase(str);
        if (hyphenCase.indexOf(DirAlias.before) !== -1) {
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgTranscludeDirective = /** @class */ (function () {
        function NgTranscludeDirective(_viewRef) {
            this._viewRef = _viewRef;
        }
        Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
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
        Object.defineProperty(NgTranscludeDirective.prototype, "getNgTransclude", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngTransclude;
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
             * @private
             * @return {?}
             */ function () {
                return this._containerElement.getBoundingClientRect();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        Ripple.prototype.setTriggerElement = /**
         * @private
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
         * @private
         * @param {?} styles
         * @return {?}
         */
        Ripple.prototype.createRipple = /**
         * @private
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
         * @private
         * @param {?} event
         * @return {?}
         */
        Ripple.prototype.onPointerDown = /**
         * @private
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
         * @private
         * @param {?} _event
         * @return {?}
         */
        Ripple.prototype.onPointerLeave = /**
         * @private
         * @param {?} _event
         * @return {?}
         */
            function (_event) {
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
         * @private
         * @param {?} fn
         * @param {?=} delay
         * @return {?}
         */
        Ripple.prototype.runTimeoutOutsideZone = /**
         * @private
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
                var rippleRef = this._rippleRef;
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
                        ( /** @type {?} */(rippleRef.container.parentNode)).removeChild(rippleRef.container);
                        // }, rippleRef.timestamp < duration ? duration * 2 : duration);
                        // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) * 2 : duration);
                    }, rippleRef.timestamp < duration ? duration * 2 : duration);
                    this._rippleRef = undefined;
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
                        ( /** @type {?} */(_this._triggerElement)).removeEventListener(type, fn, _this._eventOptions);
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                                _this._ripple = new Ripple(_this._theme.variables, _this._ngZone, _this._theme.addStyleSheet(styles), rippleContainer, triggerElement);
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_TAB_INDEX = 0;
    /**
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinTabIndex(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._tabIndex = DEFAULT_TAB_INDEX;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "tabIndex", {
                get: /**
                 * @return {?}
                 */ function () {
                    return this.disabled ? -1 : this._tabIndex;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
                    this._tabIndex = value != null ? value : DEFAULT_TAB_INDEX;
                },
                enumerable: true,
                configurable: true
            });
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    return ( /** @type {?} */(this._elementMap.get(key))).subject.asObservable();
                }
                /** @type {?} */
                var focusState = {
                    unlisten: ( /** @type {?} */(null)),
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
         * @param {?} origin
         * @param {?} options
         * @return {?}
         */
        LyFocusState.prototype.focusElement = /**
         * @param {?} element
         * @param {?} origin
         * @param {?} options
         * @return {?}
         */
            function (element, origin, options) {
                /** @type {?} */
                var nativeElement = getNativeElement(element);
                this._currentEvent = origin;
                if (typeof nativeElement.focus === 'function') {
                    nativeElement.focus(options);
                }
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
         * @private
         * @param {?} event
         * @param {?} subject
         * @return {?}
         */
        LyFocusState.prototype._on = /**
         * @private
         * @param {?} event
         * @param {?} subject
         * @return {?}
         */
            function (event, subject) {
                /** @type {?} */
                var by = null;
                if (event.type === 'focus') {
                    by = this._currentEvent || 'keyboard';
                }
                this._ngZone.run(function () { return subject.next(by); });
            };
        /**
         * @private
         * @return {?}
         */
        LyFocusState.prototype._addGlobalListeners = /**
         * @private
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
         * @private
         * @return {?}
         */
        LyFocusState.prototype._incrementCount = /**
         * @private
         * @return {?}
         */
            function () {
                if (++this._count === 1) {
                    this._addGlobalListeners();
                }
            };
        /**
         * @private
         * @return {?}
         */
        LyFocusState.prototype._decrementCount = /**
         * @private
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AUI_VERSION = '2.1.2-nightly.20190131-jrkxgif3';
    /** @type {?} */
    var AUI_LAST_UPDATE = '2019-01-31T18:02:42.110Z';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
         * @private
         * @param {?} base
         * @param {?} options
         * @param {...?} inheritances
         * @return {?}
         */
        LyHammerGestureConfig.prototype._createRecognizer = /**
         * Creates a new recognizer, without affecting the default recognizers of HammerJS
         * @private
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
         * @private
         * @return {?}
         */
        LyOverlayContainer.prototype._update = /**
         * Update styles for overlay container
         * @ignore
         * @private
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
             * \@docs-private
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WinResize = /** @class */ (function () {
        function WinResize(document, ngZone) {
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
        WinResize.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        WinResize.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.NgZone }
            ];
        };
        /** @nocollapse */ WinResize.ngInjectableDef = i0.defineInjectable({ factory: function WinResize_Factory() { return new WinResize(i0.inject(i1.DOCUMENT), i0.inject(i0.NgZone)); }, token: WinResize, providedIn: "root" });
        return WinResize;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WinScroll = /** @class */ (function () {
        function WinScroll(_document, ngZone) {
            var _this = this;
            this._document = _document;
            if (Platform.isBrowser) {
                ngZone.runOutsideAngular(function () {
                    _this.scroll$ = rxjs.fromEvent(window.document, 'scroll').pipe(operators.auditTime(20), operators.map(function () {
                        return window.scrollY || _this._document.documentElement.scrollTop;
                    }), operators.share());
                });
            }
            else {
                this.scroll$ = rxjs.empty();
            }
        }
        WinScroll.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        WinScroll.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.NgZone }
            ];
        };
        /** @nocollapse */ WinScroll.ngInjectableDef = i0.defineInjectable({ factory: function WinScroll_Factory() { return new WinScroll(i0.inject(i1.DOCUMENT), i0.inject(i0.NgZone)); }, token: WinScroll, providedIn: "root" });
        return WinScroll;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            var __styles = {
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: 'all'
            };
            if (config) {
                Object.assign(__styles, config.styles);
            }
            /** @type {?} */
            var newInjector = i0.Injector.create([
                {
                    provide: 'overlayConfig',
                    useValue: ( /** @type {?} */(__assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles })))
                }
            ], this._injector);
            this.updateStyles(__styles);
            if (config) {
                if (config.onResizeScroll) {
                    this.onResizeScroll = config.onResizeScroll;
                }
                this.windowSRSub = rxjs.merge(windowScroll.scroll$, resizeService.resize$).subscribe(function () {
                    if (_this.onResizeScroll) {
                        _this.onResizeScroll();
                    }
                    else {
                        /** @type {?} */
                        var rect = config.host.getBoundingClientRect();
                        /** @type {?} */
                        var newStyles = {
                            top: rect.top,
                            left: rect.left
                        };
                        _this.updateStyles(newStyles);
                    }
                });
                if (config.classes) {
                    /** @type {?} */
                    var classes = config.classes;
                    classes.forEach(function (className) { return (( /** @type {?} */(_this._el))).classList.add(className); });
                }
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
                return ( /** @type {?} */(this._el));
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
                        if (styleVal != null) {
                            ( /** @type {?} */(this._el)).style[key] = typeof __styles[key] === 'number' ? styleVal + "px" : styleVal;
                        }
                    }
                }
            };
        /**
         * @private
         * @param {?} type
         * @param {?} context
         * @param {?} injector
         * @return {?}
         */
        CreateFromTemplateRef.prototype._appendComponentToBody = /**
         * @private
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
                    viewRef.rootNodes.forEach(function (_) { return ( /** @type {?} */(_this._el)).appendChild(_); });
                    // Append DOM element to the body
                    this._overlayContainer._add(this._el);
                }
                else if (typeof type === 'string') {
                    ( /** @type {?} */(this._el)).innerText = type;
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
                    this._el = undefined;
                }
                else if (this._compRef) {
                    this._compRef.destroy();
                    this._overlayContainer._remove(this._el);
                    this._el = undefined;
                }
                else if (this._el) {
                    // remove if template is string
                    this._overlayContainer._remove(this._el);
                    this._el = undefined;
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
                { type: WinScroll },
                { type: WinResize }
            ];
        };
        /** @nocollapse */ LyOverlay.ngInjectableDef = i0.defineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(i0.inject(LyOverlayContainer), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR), i0.inject(WinScroll), i0.inject(WinResize)); }, token: LyOverlay, providedIn: "root" });
        return LyOverlay;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    /** @type {?} */
                    var observer = this._observedElements.get(element);
                    if (observer) {
                        ( /** @type {?} */(this._observedElements.get(element))).disconnect();
                    }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} o
     * @return {?}
     */
    function same(o) {
        return o;
    }
    /**
     * @template T
     */
    var /**
     * @template T
     */ LySelectionModel = /** @class */ (function () {
        function LySelectionModel(opts) {
            this._selectionMap = new Map();
            this._getKeyFn = same;
            if (!opts) {
                return;
            }
            var multiple = opts.multiple, getKey = opts.getKey;
            if (getKey) {
                this._getKeyFn = getKey;
            }
            if (multiple === true) {
                this._multiple = true;
                var selecteds = opts.selecteds;
                if (Array.isArray(selecteds) && selecteds.length) {
                    this.select.apply(this, __spread(selecteds));
                }
            }
            else {
                var selecteds = ( /** @type {?} */(opts)).selecteds;
                if (selecteds) {
                    this._markSelected(selecteds);
                }
            }
        }
        Object.defineProperty(LySelectionModel.prototype, "selected", {
            /** Selected values. */
            get: /**
             * Selected values.
             * @return {?}
             */ function () {
                if (!this._selected) {
                    this._selected = Array.from(this._selectionMap.values());
                }
                return this._selected;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Toggles a value between selected and deselected.
         */
        /**
         * Toggles a value between selected and deselected.
         * @param {?} value
         * @return {?}
         */
        LySelectionModel.prototype.toggle = /**
         * Toggles a value between selected and deselected.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.isSelected(value) ? this.deselect(value) : this.select(value);
            };
        /**
         * Selects one or several values.
         */
        /**
         * Selects one or several values.
         * @param {...?} values
         * @return {?}
         */
        LySelectionModel.prototype.select = /**
         * Selects one or several values.
         * @param {...?} values
         * @return {?}
         */
            function () {
                var _this = this;
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
                values.forEach(function (value) { return _this._markSelected(value); });
                this._clearSelectedValues();
            };
        /**
         * Deselects a value or an array of values.
         */
        /**
         * Deselects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */
        LySelectionModel.prototype.deselect = /**
         * Deselects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */
            function () {
                var _this = this;
                var values = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    values[_i] = arguments[_i];
                }
                values.forEach(function (value) { return _this._unmarkSelected(value); });
                this._clearSelectedValues();
            };
        /**
         * Determines whether a value is selected.
         */
        /**
         * Determines whether a value is selected.
         * @param {?} value
         * @return {?}
         */
        LySelectionModel.prototype.isSelected = /**
         * Determines whether a value is selected.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var key = this._getKeyFn(value);
                return this._selectionMap.has(key);
            };
        /**
         * Determines whether the model does not have a value.
         */
        /**
         * Determines whether the model does not have a value.
         * @return {?}
         */
        LySelectionModel.prototype.isEmpty = /**
         * Determines whether the model does not have a value.
         * @return {?}
         */
            function () {
                return this._selectionMap.size === 0;
            };
        /**
         * Determines whether the model has a value.
         */
        /**
         * Determines whether the model has a value.
         * @return {?}
         */
        LySelectionModel.prototype.hasValue = /**
         * Determines whether the model has a value.
         * @return {?}
         */
            function () {
                return this._selectionMap.size !== 0;
            };
        /**
         * Gets whether multiple values can be selected.
         */
        /**
         * Gets whether multiple values can be selected.
         * @return {?}
         */
        LySelectionModel.prototype.isMultipleSelection = /**
         * Gets whether multiple values can be selected.
         * @return {?}
         */
            function () {
                return this._multiple;
            };
        /**
         * Clears all of the selected values.
         */
        /**
         * Clears all of the selected values.
         * @return {?}
         */
        LySelectionModel.prototype.clear = /**
         * Clears all of the selected values.
         * @return {?}
         */
            function () {
                this._unmarkAll();
                this._clearSelectedValues();
            };
        /** Selects a value. */
        /**
         * Selects a value.
         * @private
         * @param {?} value
         * @return {?}
         */
        LySelectionModel.prototype._markSelected = /**
         * Selects a value.
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!this.isSelected(value)) {
                    if (!this._multiple) {
                        this._unmarkAll();
                    }
                    /** @type {?} */
                    var key = this._getKeyFn(value);
                    this._selectionMap.set(key, value);
                }
            };
        /** Deselects a value. */
        /**
         * Deselects a value.
         * @private
         * @param {?} value
         * @return {?}
         */
        LySelectionModel.prototype._unmarkSelected = /**
         * Deselects a value.
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.isSelected(value)) {
                    /** @type {?} */
                    var key = this._getKeyFn(value);
                    this._selectionMap.delete(key);
                }
            };
        /** Clears out the selected values. */
        /**
         * Clears out the selected values.
         * @private
         * @return {?}
         */
        LySelectionModel.prototype._unmarkAll = /**
         * Clears out the selected values.
         * @private
         * @return {?}
         */
            function () {
                if (!this.isEmpty()) {
                    this._selectionMap.clear();
                }
            };
        /** Clear the selected values so they can be re-cached. */
        /**
         * Clear the selected values so they can be re-cached.
         * @private
         * @return {?}
         */
        LySelectionModel.prototype._clearSelectedValues = /**
         * Clear the selected values so they can be re-cached.
         * @private
         * @return {?}
         */
            function () {
                this._selected = null;
            };
        return LySelectionModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    exports.eachMedia = eachMedia;
    exports.isObject = isObject;
    exports.mergeDeep = mergeDeep;
    exports.LyStyleUtils = LyStyleUtils;
    exports.Dir = Dir;
    exports.DirAlias = DirAlias;
    exports.DirPosition = DirPosition;
    exports.LyOverlayContainer = LyOverlayContainer;
    exports.LyOverlayBackdrop = LyOverlayBackdrop;
    exports.LyOverlay = LyOverlay;
    exports.LyOverlayModule = LyOverlayModule;
    exports.MutationObserverFactory = MutationObserverFactory;
    exports.ElementObserver = ElementObserver;
    exports.WinResize = WinResize;
    exports.WinScroll = WinScroll;
    exports.mixinStyleUpdater = mixinStyleUpdater;
    exports.mixinDisableRipple = mixinDisableRipple;
    exports.mixinColor = mixinColor;
    exports.mixinBg = mixinBg;
    exports.mixinRaised = mixinRaised;
    exports.mixinOutlined = mixinOutlined;
    exports.mixinElevation = mixinElevation;
    exports.mixinShadowColor = mixinShadowColor;
    exports.mixinDisabled = mixinDisabled;
    exports.mixinTabIndex = mixinTabIndex;
    exports.Ripple = Ripple;
    exports.LyRippleService = LyRippleService;
    exports.invertPlacement = invertPlacement;
    exports.YPosition = YPosition;
    exports.XPosition = XPosition;
    exports.Positioning = Positioning;
    exports.AlignAlias = AlignAlias;
    exports.LySelectionModel = LySelectionModel;
    exports.ɵa = LyWithClass;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui.umd.js.map