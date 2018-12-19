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
                            'flat',
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
    var AUI_VERSION = '1.9.9';
    /** @type {?} */
    var AUI_LAST_UPDATE = '2018-12-19T19:08:58.003Z';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc3JjL3BhbGV0dGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc2hhZG93LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2FseWxlLWNvbmZpZy1zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3BsYXRmb3JtLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3Bhc3NpdmUtbGlzdGVuZXJzLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZS1jb25maWcudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc3R5bGUtdXRpbHMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3Bvc2l0aW9uL3Bvc2l0aW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lMi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvY29tbW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9idWlsZC1jb21tb24tYmVoYXZpb3JzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvaXMtYm9vbGVhbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9yaXBwbGUvcmlwcGxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlcy9jb3JlLXN0eWxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9yaXBwbGUvcmlwcGxlLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2Rpc2FibGUtcmlwcGxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9kaXNhYmxlZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vY29sb3IudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2JnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9yYWlzZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL291dGxpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9lbGV2YXRpb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL3NoYWRvdy1jb2xvci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9wYXBlci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS93aXRoLWNsYXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZWwvb2Zmc2V0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZGVmYXVsdC1lbnRyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL3Njcm9sbC10by50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy92ZXJzaW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2dlc3R1cmUvZ2VzdHVyZS1jb25maWcudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3VuZGVmaW5lZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXktY29udGFpbmVyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9yZXNpemUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXkubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9tdXRhdGlvbi1vYnNlcnZlci1mYWN0b3J5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3Bvc2l0aW9uL2FsaWduLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFlJUShoZXhjb2xvcikge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xuICBjb25zdCB5aXEgPSAoKHIgKiAyOTkpICsgKGcgKiA1ODcpICsgKGIgKiAxMTQpKSAvIDEwMDA7XG4gIHJldHVybiAoeWlxID49IDEyOCkgPyAnYmxhY2snIDogJ3doaXRlJztcbn1cbiIsImltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbmNvbnN0IHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG5jb25zdCBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5leHBvcnQgY29uc3QgU2hhZG93cyA9IFtcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMywgMCwgMCwgMSwgMSwgMCwgMCwgMiwgMSwgLTFdLFxuICBbMCwgMSwgNSwgMCwgMCwgMiwgMiwgMCwgMCwgMywgMSwgLTJdLFxuICBbMCwgMSwgOCwgMCwgMCwgMywgNCwgMCwgMCwgMywgMywgLTJdLFxuICBbMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwXSxcbiAgWzAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDFdLFxuICBbMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMl0sXG4gIFswLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyXSxcbiAgWzAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzXSxcbiAgWzAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzXSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0XSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0XSxcbiAgWzAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0XSxcbiAgWzAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1XSxcbiAgWzAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNV0sXG4gIFswLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDVdLFxuICBbMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2XSxcbiAgWzAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNl0sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDddLFxuICBbMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgN10sXG4gIFswLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4XSxcbiAgWzAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDhdXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXJEZXByZWNhdGVkKGVsZXZhdGlvbjogbnVtYmVyIHwgc3RyaW5nID0gMiwgY29sb3IgPSAnIzAwMCcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IpO1xuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5VW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5KS5jc3MoKVxuICBdO1xuICBjb25zdCBlID0gU2hhZG93c1tlbGV2YXRpb25dO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgYm94LXNoYWRvdzoke2VbMF19cHggJHtlWzFdfXB4ICR7ZVsyXX1weCAke2VbM119cHggJHtjb2xvcnNbMF19LCR7ZVs0XX1weCAke2VbNV19cHggJHtlWzZdfXB4ICR7ZVs3XX1weCAke2NvbG9yc1sxXX0sJHtlWzhdfXB4ICR7ZVs5XX1weCAke2VbMTBdfXB4ICR7ZVsxMV19cHggJHtjb2xvcnNbMl19O2A7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXIoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcsIGNvbG9yPzogc3RyaW5nKSB7XG4gIGxldCBDb2xvciA9IGNocm9tYShjb2xvciB8fCAnIzAwMCcpO1xuICBjb25zdCByZ2IgPSBDb2xvci5nZXQoJ3JnYicpIGFzIGFueSBhcyBudW1iZXJbXTtcbiAgaWYgKCEocmdiWzBdID09PSByZ2JbMV0gJiYgcmdiWzBdID09PSByZ2JbMl0pKSB7XG4gICAgLy8gRGFya2VuIGFuZCBzYXR1cmF0ZSBpZiB0aGUgY29sb3IgaXMgbm90IGluIHRoZSBncmF5c2NhbGVcbiAgICBDb2xvciA9IENvbG9yLmRhcmtlbigpLnNhdHVyYXRlKDIpO1xuICB9XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGAke2VbMF19cHggJHtlWzFdfXB4ICR7ZVsyXX1weCAke2VbM119cHggJHtjb2xvcnNbMF19LCR7ZVs0XX1weCAke2VbNV19cHggJHtlWzZdfXB4ICR7ZVs3XX1weCAke2NvbG9yc1sxXX0sJHtlWzhdfXB4ICR7ZVs5XX1weCAke2VbMTBdfXB4ICR7ZVsxMV19cHggJHtjb2xvcnNbMl19O2A7XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xuZXhwb3J0IGNvbnN0IElTX0NPUkVfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48dHJ1ZT4oJ2x5LmlzLnJvb3QnKTtcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xuICBkZWZhdWx0Pzogc3RyaW5nO1xuICBjb250cmFzdD86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcbiAgYmFja2dyb3VuZD86IHtcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxuICAgIHBhcGVyPzogc3RyaW5nLFxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfTtcbiAgdGV4dD86IHtcbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeT86IHN0cmluZyxcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXG4gICAgZGlzYWJsZWQ/OiBzdHJpbmcsXG4gICAgaGludD86IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG4gIGRpdmlkZXI/OiBzdHJpbmc7XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICBjb2xvclNoYWRvdz86IHN0cmluZztcbiAgYmFyPzogc3RyaW5nO1xuICBpbnB1dD86IHtcbiAgICBsYWJlbD86IHN0cmluZyxcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcbiAgfTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuIiwiXG4vLyBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIHN1cHBvcnRzIHRoZSBWOCBCcmVhayBJdGVyYXRvci4gVGhlIFY4IGNoZWNrXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cbmNvbnN0IGhhc1Y4QnJlYWtJdGVyYXRvciA9ICh0eXBlb2YoSW50bCkgIT09ICd1bmRlZmluZWQnICYmIChJbnRsIGFzIGFueSkudjhCcmVha0l0ZXJhdG9yKTtcbi8qKlxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcbiAqIGNoZWNraW5nIGJyb3dzZXItc3BlY2lmaWMgZ2xvYmFsIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XG4gIHN0YXRpYyByZWFkb25seSBpc0Jyb3dzZXI6IGJvb2xlYW4gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQ7XG4gIC8qKiBMYXlvdXQgRW5naW5lcyAqL1xuICBzdGF0aWMgcmVhZG9ubHkgRURHRSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGVkZ2UpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgc3RhdGljIHJlYWRvbmx5IFRSSURFTlQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvLyBFZGdlSFRNTCBhbmQgVHJpZGVudCBtb2NrIEJsaW5rIHNwZWNpZmljIHRoaW5ncyBhbmQgbmVlZCB0byBiZSBleGNsdWRlZCBmcm9tIHRoaXMgY2hlY2suXG4gIHN0YXRpYyByZWFkb25seSBCTElOSyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxuICAgICAgKCEhKCh3aW5kb3cgYXMgYW55KS5jaHJvbWUgfHwgaGFzVjhCcmVha0l0ZXJhdG9yKSAmJiAhIUNTUyAmJiAhUGxhdGZvcm0uRURHRSAmJiAhUGxhdGZvcm0uVFJJREVOVCk7XG5cbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXG4gIC8vIGVuc3VyZSB0aGF0IFdlYmtpdCBydW5zIHN0YW5kYWxvbmUgYW5kIGlzIG5vdCB1c2VkIGFzIGFub3RoZXIgZW5naW5lJ3MgYmFzZS5cbiAgc3RhdGljIHJlYWRvbmx5IFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxuICAgICAgL0FwcGxlV2ViS2l0L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhUGxhdGZvcm0uQkxJTksgJiYgIVBsYXRmb3JtLkVER0UgJiYgIVBsYXRmb3JtLlRSSURFTlQ7XG5cbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xuICBzdGF0aWMgcmVhZG9ubHkgSU9TID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEod2luZG93IGFzIGFueSkuTVNTdHJlYW07XG5cbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcbiAgLy8gdGhlbSBzZWxmIGFzIEdlY2tvLWxpa2UgYnJvd3NlcnMgYW5kIG1vZGlmeSB0aGUgdXNlckFnZW50J3MgYWNjb3JkaW5nIHRvIHRoYXQuXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXG4gIHN0YXRpYyByZWFkb25seSBGSVJFRk9YID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvLyBUcmlkZW50IG9uIG1vYmlsZSBhZGRzIHRoZSBhbmRyb2lkIHBsYXRmb3JtIHRvIHRoZSB1c2VyQWdlbnQgdG8gdHJpY2sgZGV0ZWN0aW9ucy5cbiAgc3RhdGljIHJlYWRvbmx5IEFORFJPSUQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICFQbGF0Zm9ybS5UUklERU5UO1xuXG4gIC8vIFNhZmFyaSBicm93c2VycyB3aWxsIGluY2x1ZGUgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZWlyIHVzZXJBZ2VudC4gU29tZSBicm93c2VycyBtYXkgZmFrZVxuICAvLyB0aGlzIGFuZCBqdXN0IHBsYWNlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGUgdXNlckFnZW50LiBUbyBiZSBtb3JlIHNhZmUgYWJvdXQgU2FmYXJpIGV2ZXJ5XG4gIC8vIFNhZmFyaSBicm93c2VyIHNob3VsZCBhbHNvIHVzZSBXZWJraXQgYXMgaXRzIGxheW91dCBlbmdpbmUuXG4gIHN0YXRpYyByZWFkb25seSBTQUZBUkkgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL3NhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgUGxhdGZvcm0uV0VCS0lUO1xufVxuIiwibGV0IHN1cHBvcnRzUGFzc2l2ZTtcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycygpOiBib29sZWFuIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5U3R5bGVVdGlscywgRGlyIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgU3R5bGVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IFJpcHBsZVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3JpcHBsZSc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5VmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDaGVja2JveFZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL2NoZWNrYm94JztcbmltcG9ydCB7IFNuYWNrQmFyVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvc25hY2stYmFyJztcbmltcG9ydCB7IEJ1dHRvblZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL2J1dHRvbic7XG5pbXBvcnQgeyBUb29sdGlwVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvdG9vbHRpcCc7XG5pbXBvcnQgeyBBdmF0YXJWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9hdmF0YXInO1xuXG5leHBvcnQgY29uc3QgTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYXJ0aWFsVGhlbWVWYXJpYWJsZXM+KCdseS50aGVtZS5nbG9iYWwudmFyaWFibGVzJyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHlfdGhlbWVfY29uZmlnJyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUVfTkFNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdseS50aGVtZS5uYW1lJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaW1hcnk6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGFjY2VudDogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgd2FybjogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgZGlzYWJsZWQ6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIHBhcGVyOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBiYWNrZ3JvdW5kOiB7XG4gICAgLyoqIHNlY29uZGFyeSAqL1xuICAgIGRlZmF1bHQ6IHN0cmluZyxcbiAgICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yLFxuICAgIHNlY29uZGFyeTogc3RyaW5nLFxuICAgIHRlcnRpYXJ5OiBzdHJpbmcsXG4gICAgYmFzZTogc3RyaW5nXG4gIH07XG4gIHRleHQ6IHtcbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeTogc3RyaW5nLFxuICAgIHNlY29uZGFyeTogc3RyaW5nLFxuICAgIGRpc2FibGVkOiBzdHJpbmcsXG4gICAgaGludDogc3RyaW5nXG4gIH07XG4gIHR5cG9ncmFwaHk6IFR5cG9ncmFwaHlWYXJpYWJsZXM7XG4gIC8qKiBjb2xvciBmb3IgZGl2aWRlciAqL1xuICBkaXZpZGVyOiBzdHJpbmc7XG4gIHNoYWRvdzogc3RyaW5nO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIHNoYWRvdyBpbnN0ZWFkICovXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xuICByYWRpbzoge1xuICAgIC8qKiBjb2xvciBmb3IgcmFkaW86b3V0ZXJDaXJjbGUgKi9cbiAgICBvdXRlckNpcmNsZT86IHN0cmluZztcbiAgICAvKiogQGRlcHJlY2F0ZWQgdXNlIG91dGVyQ2lyY2xlIGluc3RlYWQgKi9cbiAgICByYWRpb091dGVyQ2lyY2xlPzogc3RyaW5nO1xuICB9O1xuICBtZW51OiB7XG4gICAgcm9vdD86IFN0eWxlQ29udGFpbmVyXG4gIH07XG4gIGRyYXdlcjoge1xuICAgIC8qKiBjb2xvciBmb3IgZHJhd2VyOmJhY2tkcm9wICovXG4gICAgYmFja2Ryb3A6IHN0cmluZ1xuICB9O1xuICBmaWVsZDoge1xuICAgIGJvcmRlckNvbG9yOiBzdHJpbmdcbiAgICBsYWJlbENvbG9yOiBzdHJpbmdcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBiYXNlPzoge1xuICAgICAgICByb290PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgY29udGFpbmVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmllbGRzZXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXJGb2N1c2VkPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgbGFiZWw/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBwbGFjZWhvbGRlcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGlucHV0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmxvYXRpbmdMYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHByZWZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGluZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgc3VmZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaGludD86IFN0eWxlQ29udGFpbmVyXG4gICAgICB9O1xuICAgICAgW2FwcGVhcmFuY2VOYW1lOiBzdHJpbmddOiB7XG4gICAgICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXI/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmaWVsZHNldD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lckZvY3VzZWQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBsYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHBsYWNlaG9sZGVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5wdXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmbG9hdGluZ0xhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcHJlZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5maXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBzdWZmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBoaW50PzogU3R5bGVDb250YWluZXJcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGljb25CdXR0b246IHtcbiAgICBzaXplOiBzdHJpbmdcbiAgfTtcbiAgaWNvbjoge1xuICAgIGZvbnRTaXplOiBzdHJpbmdcbiAgfTtcbiAgekluZGV4OiB7XG4gICAgdG9vbGJhcjogbnVtYmVyXG4gICAgZHJhd2VyOiBudW1iZXJcbiAgICBvdmVybGF5OiBudW1iZXJcbiAgICBba2V5OiBzdHJpbmddOiBudW1iZXJcbiAgfTtcbiAgZGlyZWN0aW9uPzogRGlyO1xuICBhbmltYXRpb25zOiB7XG4gICAgY3VydmVzOiB7XG4gICAgICBzdGFuZGFyZDogc3RyaW5nXG4gICAgICBkZWNlbGVyYXRpb246IHN0cmluZ1xuICAgICAgYWNjZWxlcmF0aW9uOiBzdHJpbmdcbiAgICAgIHNoYXJwOiBzdHJpbmdcbiAgICB9LFxuICAgIGR1cmF0aW9uczoge1xuICAgICAgY29tcGxleDogbnVtYmVyXG4gICAgICBlbnRlcmluZzogbnVtYmVyXG4gICAgICBleGl0aW5nOiBudW1iZXJcbiAgICB9XG4gIH07XG4gIHJpcHBsZTogUmlwcGxlVmFyaWFibGVzO1xuICBiYWRnZToge1xuICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lcixcbiAgICBwb3NpdGlvbj86IHtcbiAgICAgIFtwb3NpdGlvbk5hbWU6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyXG4gICAgfVxuICB9O1xuICBjaGVja2JveDogQ2hlY2tib3hWYXJpYWJsZXM7XG4gIHNuYWNrQmFyOiBTbmFja0JhclZhcmlhYmxlcztcbiAgYnV0dG9uOiBCdXR0b25WYXJpYWJsZXM7XG4gIHRvb2x0aXA6IFRvb2x0aXBWYXJpYWJsZXM7XG4gIGF2YXRhcjogQXZhdGFyVmFyaWFibGVzO1xufVxuXG5leHBvcnQgdHlwZSBUaGVtZVZhcmlhYmxlcyA9IEx5U3R5bGVVdGlscyAmIFRoZW1lQ29uZmlnO1xuZXhwb3J0IHR5cGUgUGFydGlhbFRoZW1lVmFyaWFibGVzID0gUGFydGlhbDxUaGVtZVZhcmlhYmxlcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFZhbCB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZUNvbG9yIHtcbiAgY29udHJhc3Q/OiBzdHJpbmc7XG4gIC8qKiBzaGFkb3cgY29sb3IgKi9cbiAgc2hhZG93Pzogc3RyaW5nO1xufVxuIiwiZXhwb3J0IGNsYXNzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgIGh0bWxGb250U2l6ZTogbnVtYmVyLFxuICAgIGZvbnRTaXplOiBudW1iZXI7XG4gIH07XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgWFNtYWxsOiBzdHJpbmcsXG4gICAgU21hbGw6IHN0cmluZyxcbiAgICBNZWRpdW06IHN0cmluZyxcbiAgICBMYXJnZTogc3RyaW5nLFxuICAgIFhMYXJnZTogc3RyaW5nLFxuXG4gICAgSGFuZHNldDogc3RyaW5nLFxuICAgIFRhYmxldDogc3RyaW5nLFxuICAgIFdlYjogc3RyaW5nLFxuXG4gICAgSGFuZHNldFBvcnRyYWl0OiBzdHJpbmcsXG4gICAgVGFibGV0UG9ydHJhaXQ6IHN0cmluZyxcbiAgICBXZWJQb3J0cmFpdDogc3RyaW5nLFxuXG4gICAgSGFuZHNldExhbmRzY2FwZTogc3RyaW5nLFxuICAgIFRhYmxldExhbmRzY2FwZTogc3RyaW5nLFxuICAgIFdlYkxhbmRzY2FwZTogc3RyaW5nLFxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9O1xuICBkaXJlY3Rpb246IERpcjtcbiAgcHhUb1JlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudHlwb2dyYXBoeS5mb250U2l6ZSAvIDE0O1xuICAgIHJldHVybiBgJHt2YWx1ZSAvIHRoaXMudHlwb2dyYXBoeS5odG1sRm9udFNpemUgKiBzaXplfXJlbWA7XG4gIH1cbiAgY29sb3JPZih2YWx1ZTogc3RyaW5nLCBvcHRpb25hbD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCB2YWx1ZSwgb3B0aW9uYWwpO1xuICB9XG4gIGdldEJyZWFrcG9pbnQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYEBtZWRpYSAke3RoaXMuYnJlYWtwb2ludHNba2V5XSB8fCBrZXl9YDtcbiAgfVxuXG4gIGdldERpcmVjdGlvbih2YWw6IERpckFsaWFzKSB7XG4gICAgaWYgKHZhbCA9PT0gRGlyQWxpYXMuc3RhcnQgfHwgdmFsID09PSBEaXJBbGlhcy5iZWZvcmUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH0gZWxzZSBpZiAodmFsID09PSBEaXJBbGlhcy5lbmQgfHwgdmFsID09PSBEaXJBbGlhcy5hZnRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBlbnVtIERpciB7XG4gIHJ0bCA9ICdydGwnLFxuICBsdHIgPSAnbHRyJ1xufVxuZXhwb3J0IGVudW0gRGlyQWxpYXMge1xuICAvKiogQGRlcHJlY2F0ZWQsIHVzZSBgYmVmb3JlYCBpbnN0ZWFkICovXG4gIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgLyoqIEBkZXByZWNhdGVkLCB1c2UgYGFmdGVyYCBpbnN0ZWFkICovXG4gIGVuZCA9ICdlbmQnLFxuICBiZWZvcmUgPSAnYmVmb3JlJyxcbiAgYWZ0ZXIgPSAnYWZ0ZXInXG59XG5leHBvcnQgZW51bSBEaXJQb3NpdGlvbiB7XG4gIGxlZnQgPSAnbGVmdCcsXG4gIHJpZ2h0ID0gJ3JpZ2h0J1xufVxuXG4vKipcbiAqIGdldCBjb2xvciBvZiBvYmplY3RcbiAqIEBwYXJhbSBvYmogb2JqZWN0XG4gKiBAcGFyYW0gcGF0aCBwYXRoXG4gKiBAcGFyYW0gb3B0aW9uYWwgZ2V0IG9wdGlvbmFsIHZhbHVlLCBpZiBub3QgZXhpc3QgcmV0dXJuIGRlZmF1bHQgaWYgbm90IGlzIHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IHN0cmluZ1tdIHwgc3RyaW5nLCBvcHRpb25hbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBvc2libGVPYiA9IG9ialtfcGF0aFtpXV07XG4gICAgaWYgKHBvc2libGVPYikge1xuICAgICAgb2JqID0gcG9zaWJsZU9iO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiogaWYgbm90IGV4aXN0ICovXG4gICAgICByZXR1cm4gcGF0aCBhcyBzdHJpbmc7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvYmogYXMgc3RyaW5nO1xuICB9IGVsc2UgaWYgKG9wdGlvbmFsKSB7XG4gICAgcmV0dXJuIG9ialtvcHRpb25hbF0gfHwgb2JqWydkZWZhdWx0J107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9ialsnZGVmYXVsdCddO1xuICB9XG4gIC8vIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYWNoTWVkaWEoc3RyOiBzdHJpbmcgfCBudW1iZXIsIGZuOiAoKHZhbDogc3RyaW5nLCBtZWRpYTogc3RyaW5nLCBpc01lZGlhOiBudW1iZXIpID0+IHZvaWQpKSB7XG4gIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHZhbHVlcyA9IHN0ci5zcGxpdCgvXFxzL2cpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB2YWxJdGVtID0gdmFsdWVzW2luZGV4XS5zcGxpdCgvXFxAL2cpO1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWxJdGVtLnNoaWZ0KCk7XG4gICAgICBjb25zdCBsZW4gPSB2YWxJdGVtLmxlbmd0aDtcbiAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdmFsSXRlbVtqXSwgdmFsSXRlbS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHVuZGVmaW5lZCwgbGVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm4uY2FsbCh1bmRlZmluZWQsIHN0ciwgdW5kZWZpbmVkLCAwKTtcbiAgfVxufVxuLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVT4odGFyZ2V0OiBULCBzb3VyY2U6IFUpOiBUICYgVTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVSwgVj4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWKTogVCAmIFUgJiBWO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWLCBXPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYsIHNvdXJjZTM6IFcpOiBUICYgVSAmIFYgJiBXO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQ6IG9iamVjdCwgLi4uc291cmNlczogYW55W10pOiBhbnk7XG5cbi8qKlxuICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSAuLi5zb3VyY2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHsgcmV0dXJuIHRhcmdldDsgfVxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7IE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KTsgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUUsIFRoZW1lVmFyaWFibGVzLCBMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVRoZW1lIHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgbWVkaWFTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaW1hcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHNlY29uZGFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgZmlyc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcmVhZG9ubHkgdGhlbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX3RoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lVmFyaWFibGVzPigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+PigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FKSB0aGVtZUNvbmZpZzogVGhlbWVDb25maWdbXSB8IFRoZW1lQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUykgZ2xvYmFsVmFyaWFibGVzOiBUaGVtZUNvbmZpZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAoIXRoZW1lQ29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xZX1RIRU1FIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwge1xuICAgICAgaWQ6ICdseScsXG4gICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0ID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnbHktcy1jJyk7XG4gICAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZXMuaXRlbShpbmRleCk7XG4gICAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5maXJzdEVsZW1lbnQgPSBfZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoZW1lQ29uZmlnKSkge1xuICAgICAgdGhlbWVDb25maWcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICAgIG1lcmdlRGVlcChpdGVtLCBnbG9iYWxWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkKGl0ZW0gYXMgYW55KTtcbiAgICAgICAgdGhpcy50aGVtZXMuYWRkKGl0ZW0ubmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICBtZXJnZURlZXAodGhlbWVDb25maWcsIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZCh0aGVtZUNvbmZpZyBhcyBhbnkpO1xuICAgICAgdGhpcy50aGVtZXMuYWRkKHRoZW1lQ29uZmlnLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbmV3IHRoZW1lXG4gICAqIEBwYXJhbSB0aGVtZTogVGhlbWVWYXJpYWJsZXNcbiAgICovXG4gIGFkZCh0aGVtZTogVGhlbWVWYXJpYWJsZXMpIHtcbiAgICB0aGlzLl90aGVtZU1hcC5zZXQodGhlbWUubmFtZSwgdGhlbWUpO1xuICAgIHRoaXMuX3N0eWxlTWFwLnNldCh0aGVtZS5uYW1lLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgZ2V0KG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl90aGVtZU1hcC5nZXQobmFtZSk7XG4gIH1cbiAgZ2V0U3R5bGVNYXAobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAob2xkQ2xhc3NuYW1lKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvbGRDbGFzc25hbWUpO1xuICAgIH1cbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuZXdDbGFzc25hbWUpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERpclBvc2l0aW9uIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5leHBvcnQgZW51bSBZUG9zaXRpb24ge1xuICBhYm92ZSA9ICdhYm92ZScsXG4gIGJlbG93ID0gJ2JlbG93J1xufVxuXG5leHBvcnQgZW51bSBYUG9zaXRpb24ge1xuICBiZWZvcmUgPSAnYmVmb3JlJyxcbiAgYWZ0ZXIgPSAnYWZ0ZXInLFxuICBsZWZ0ID0gJ2xlZnQnLFxuICByaWdodCA9ICdyaWdodCdcbn1cblxuZXhwb3J0IHR5cGUgUGxhY2VtZW50ID0gWFBvc2l0aW9uIHwgWVBvc2l0aW9uO1xuXG4vKiogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgYFBvc2l0aW9uaW5nYCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uKFxuICBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgeFBvc2l0aW9uOiBYUG9zaXRpb24sXG4gIHlQb3NpdGlvbjogWVBvc2l0aW9uLFxuICBvcmlnaW46IEVsZW1lbnQsXG4gIG92ZXJsYXlFbGVtZW50OiBFbGVtZW50LFxuICB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gIG9mZnNldCA9IDBcbikge1xuICByZXR1cm4gY3JlYXRlUG9zaXRpb24oXG4gICAgcGxhY2VtZW50LFxuICAgIHhQb3NpdGlvbixcbiAgICB5UG9zaXRpb24sXG4gICAgb3JpZ2luLFxuICAgIG92ZXJsYXlFbGVtZW50LFxuICAgIHRoZW1lVmFyaWFibGVzLFxuICAgIG9mZnNldFxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQb3NpdGlvbihcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHhQb3NpdGlvbjogWFBvc2l0aW9uLFxuICB5UG9zaXRpb246IFlQb3NpdGlvbixcbiAgb3JpZ2luOiBFbGVtZW50LFxuICBvdmVybGF5RWxlbWVudDogRWxlbWVudCxcbiAgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICBvZmZzZXQgPSAwXG4pIHtcblxuICBjb25zdCBvcmlnaW5SZWN0ID0gb3JpZ2luLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIGNvbnN0IG92ZXJsYXlFbGVtZW50UmVjdCA9IG92ZXJsYXlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIGlmICh4UG9zaXRpb24gJiYgeVBvc2l0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2FuIG5vdCB1c2UgXFxgeFBvc2l0aW9uXFxgIGFuZCBcXGB5UG9zaXRpb25cXGAgdG9nZXRoZXIsIHVzZSBvbmx5IG9uZSBvZiB0aGVtLmApO1xuICB9XG4gIGlmICgoeFBvc2l0aW9uIHx8IHlQb3NpdGlvbikgJiYgIXBsYWNlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXFxgcGxhY2VtZW50XFxgIGlzIHJlcXVpcmVkLmApO1xuICB9XG4gIGxldCB4ID0gMCxcbiAgICAgIHkgPSAwLFxuICAgICAgb3ggPSAnY2VudGVyJyxcbiAgICAgIG95ID0gJ2NlbnRlcic7XG4gIGlmIChwbGFjZW1lbnQgfHwgeFBvc2l0aW9uIHx8IHlQb3NpdGlvbikge1xuICAgIGlmIChwbGFjZW1lbnQpIHtcbiAgICAgIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICB4ID0gKG9yaWdpblJlY3Qud2lkdGggLSBvdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgeSA9IC1vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0IC0gb2Zmc2V0O1xuICAgICAgICBveSA9ICdib3R0b20nO1xuICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB4ID0gKG9yaWdpblJlY3Qud2lkdGggLSBvdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgeSA9IG9yaWdpblJlY3QuaGVpZ2h0ICsgb2Zmc2V0O1xuICAgICAgICBveSA9ICd0b3AnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGlyID0gdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKHBsYWNlbWVudCBhcyBhbnkpO1xuICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgICAgeCA9IC1vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggLSBvZmZzZXQ7XG4gICAgICAgICAgeSA9IChvcmlnaW5SZWN0LmhlaWdodCAtIG92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgIHggPSBvcmlnaW5SZWN0LndpZHRoICsgb2Zmc2V0O1xuICAgICAgICAgIHkgPSAob3JpZ2luUmVjdC5oZWlnaHQgLSBvdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBkaXIgPSB0aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24oeFBvc2l0aW9uIGFzIGFueSk7XG4gICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICBveCA9ICcwJSc7XG4gICAgICAgIHggPSAwO1xuICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgb3ggPSAnMTAwJSc7XG4gICAgICAgIHggPSBvcmlnaW5SZWN0LndpZHRoIC0gb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoeVBvc2l0aW9uKSB7XG4gICAgICBpZiAoeVBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgeSA9IDA7XG4gICAgICAgIG95ID0gJzAlJztcbiAgICAgIH0gZWxzZSBpZiAoeVBvc2l0aW9uID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgeSA9IG9yaWdpblJlY3QuaGVpZ2h0IC0gb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodDtcbiAgICAgICAgb3kgPSAnMTAwJSc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5yb3VuZCh4KSxcbiAgICB5OiBNYXRoLnJvdW5kKHkpLFxuICAgIG94LFxuICAgIG95XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZyB7XG4gIHByaXZhdGUgb2Zmc2V0Q2hlY2sgPSAxNjtcbiAgcHJpdmF0ZSBvcmlnaW5SZWN0ID0gdGhpcy5vcmlnaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgcHJpdmF0ZSBvdmVybGF5RWxlbWVudFJlY3QgPSB0aGlzLm92ZXJsYXlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGFzIERPTVJlY3Q7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBheDogbnVtYmVyO1xuICBheTogbnVtYmVyO1xuICBveDogc3RyaW5nO1xuICBveTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgICBwcml2YXRlIHhQb3NpdGlvbjogWFBvc2l0aW9uLFxuICAgIHByaXZhdGUgeVBvc2l0aW9uOiBZUG9zaXRpb24sXG4gICAgcHJpdmF0ZSBvcmlnaW46IEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBvdmVybGF5RWxlbWVudDogRWxlbWVudCxcbiAgICBwcml2YXRlIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgICBwcml2YXRlIG9mZnNldCA9IDBcbiAgKSB7XG4gICAgdGhpcy5jcmVhdGVQb3NpdGlvbigpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDI7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrQWxsKCkpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdoZXJlIHRoZXJlIGlzIG5vdCBlbm91Z2ggc3BhY2VcbiAgICBpZiAodGhpcy5jaGVja0FsbCgpKSB7XG4gICAgICBjb25zdCBfbWF4X3dpZHRoID0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggKyB0aGlzLm9mZnNldENoZWNrICogMiA+IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3QgX21heF9oZWlnaHQgPSB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgKyB0aGlzLm9mZnNldENoZWNrICogMiA+IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGlmIChfbWF4X3dpZHRoIHx8IF9tYXhfaGVpZ2h0KSB7XG4gICAgICAgIGlmIChfbWF4X2hlaWdodCkge1xuICAgICAgICAgIHRoaXMueSA9IHRoaXMub3JpZ2luUmVjdC55IC0gdGhpcy5vZmZzZXRDaGVjaztcbiAgICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9tYXhfd2lkdGgpIHtcbiAgICAgICAgICB0aGlzLnggPSB0aGlzLm9yaWdpblJlY3QueCAtIHRoaXMub2Zmc2V0Q2hlY2s7XG4gICAgICAgICAgdGhpcy54ICo9IC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tCb3R0b20oKSkge1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5jaGVja0JvdHRvbSh0cnVlKSBhcyBudW1iZXI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tUb3AoKSkge1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5jaGVja1RvcCh0cnVlKSBhcyBudW1iZXI7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja1JpZ2h0KCkpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuY2hlY2tSaWdodCh0cnVlKSBhcyBudW1iZXI7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tMZWZ0KCkpIHtcbiAgICAgICAgdGhpcy54IC09IHRoaXMuY2hlY2tMZWZ0KHRydWUpIGFzIG51bWJlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByb3VuZCByZXN1bHRcbiAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgIHRoaXMuYXggPSBNYXRoLnJvdW5kKHRoaXMuYXgpO1xuICAgIHRoaXMuYXkgPSBNYXRoLnJvdW5kKHRoaXMuYXkpO1xuXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBvc2l0aW9uKFxuICApIHtcbiAgICBpZiAodGhpcy54UG9zaXRpb24gJiYgdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGNhbiBub3QgdXNlIFxcYHhQb3NpdGlvblxcYCBhbmQgXFxgeVBvc2l0aW9uXFxgIHRvZ2V0aGVyLCB1c2Ugb25seSBvbmUgb2YgdGhlbS5gKTtcbiAgICB9XG4gICAgaWYgKCh0aGlzLnhQb3NpdGlvbiB8fCB0aGlzLnlQb3NpdGlvbikgJiYgIXRoaXMucGxhY2VtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHBsYWNlbWVudFxcYCBpcyByZXF1aXJlZC5gKTtcbiAgICB9XG4gICAgbGV0IHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgb3ggPSAnY2VudGVyJyxcbiAgICAgICAgb3kgPSAnY2VudGVyJztcbiAgICBpZiAodGhpcy5wbGFjZW1lbnQgfHwgdGhpcy54UG9zaXRpb24gfHwgdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICAgIHggPSAodGhpcy5vcmlnaW5SZWN0LndpZHRoIC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgICB5ID0gLXRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCAtIHRoaXMub2Zmc2V0O1xuICAgICAgICAgIG95ID0gJ2JvdHRvbSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIHggPSAodGhpcy5vcmlnaW5SZWN0LndpZHRoIC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGgpIC8gMjtcbiAgICAgICAgICB5ID0gdGhpcy5vcmlnaW5SZWN0LmhlaWdodCArIHRoaXMub2Zmc2V0O1xuICAgICAgICAgIG95ID0gJ3RvcCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGlyID0gdGhpcy50aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24odGhpcy5wbGFjZW1lbnQgYXMgYW55KTtcbiAgICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICAgIHggPSAtdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGggLSB0aGlzLm9mZnNldDtcbiAgICAgICAgICAgIHkgPSAodGhpcy5vcmlnaW5SZWN0LmhlaWdodCAtIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCkgLyAyO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgICAgeCA9IHRoaXMub3JpZ2luUmVjdC53aWR0aCArIHRoaXMub2Zmc2V0O1xuICAgICAgICAgICAgeSA9ICh0aGlzLm9yaWdpblJlY3QuaGVpZ2h0IC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnhQb3NpdGlvbikge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGlzLnRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbih0aGlzLnhQb3NpdGlvbiBhcyBhbnkpO1xuICAgICAgICBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICB4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICB4ID0gdGhpcy5vcmlnaW5SZWN0LndpZHRoIC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3Qud2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy55UG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMueVBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICBveSA9ICcwJSc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy55UG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgIHkgPSB0aGlzLm9yaWdpblJlY3QuaGVpZ2h0IC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICAgIG95ID0gJzEwMCUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmF4ID0geCArIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0Lng7XG4gICAgdGhpcy5heSA9IHkgKyB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC55O1xuICAgIHRoaXMub3ggPSBveDtcbiAgICB0aGlzLm95ID0gb3k7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgucm91bmQoeCksXG4gICAgICB5OiBNYXRoLnJvdW5kKHkpLFxuICAgICAgb3gsXG4gICAgICBveVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNoZWNrTGVmdChyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHRoaXMuYXggLSB0aGlzLm9mZnNldENoZWNrO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCAhPT0gWVBvc2l0aW9uLmFib3ZlICYmIHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSB0aGlzLmludmVydFBvc2l0aW9uKHRoaXMucGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnhQb3NpdGlvbikge1xuICAgICAgICB0aGlzLnhQb3NpdGlvbiA9IHRoaXMuaW52ZXJ0UG9zaXRpb24odGhpcy54UG9zaXRpb24pIGFzIFhQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJpdmF0ZSBjaGVja1JpZ2h0KHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gd2luZG93LmlubmVyV2lkdGggLSAodGhpcy5heCArIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoICsgdGhpcy5vZmZzZXRDaGVjayk7XG4gICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgfVxuICAgIGlmIChyZXN0IDwgMCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYWJvdmUgJiYgdGhpcy5wbGFjZW1lbnQgIT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IHRoaXMuaW52ZXJ0UG9zaXRpb24odGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0gdGhpcy5pbnZlcnRQb3NpdGlvbih0aGlzLnhQb3NpdGlvbikgYXMgWFBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNoZWNrVG9wKHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gdGhpcy5heSAtIHRoaXMub2Zmc2V0Q2hlY2s7XG4gICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgfVxuICAgIGlmIChyZXN0IDwgMCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUgfHwgdGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IHRoaXMuaW52ZXJ0UG9zaXRpb24odGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0gdGhpcy5pbnZlcnRQb3NpdGlvbih0aGlzLnlQb3NpdGlvbikgYXMgWVBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNoZWNrQm90dG9tKHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKHRoaXMuYXkgKyB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgKyB0aGlzLm9mZnNldENoZWNrKTtcbiAgICBpZiAocmV0dXJuVmFsKSB7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9XG4gICAgaWYgKHJlc3QgPCAwKSB7XG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09IFlQb3NpdGlvbi5hYm92ZSB8fCB0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gdGhpcy5pbnZlcnRQb3NpdGlvbih0aGlzLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy55UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy55UG9zaXRpb24gPSB0aGlzLmludmVydFBvc2l0aW9uKHRoaXMueVBvc2l0aW9uKSBhcyBZUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0xlZnQoKSB8fFxuICAgIHRoaXMuY2hlY2tSaWdodCgpIHx8XG4gICAgdGhpcy5jaGVja1RvcCgpIHx8XG4gICAgdGhpcy5jaGVja0JvdHRvbSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnZlcnRQb3NpdGlvbihwbGFjZW1lbnQ6IFBsYWNlbWVudCk6IFBsYWNlbWVudCB7XG4gICAgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICByZXR1cm4gWVBvc2l0aW9uLmJlbG93O1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgIHJldHVybiBZUG9zaXRpb24uYWJvdmU7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5hZnRlcikge1xuICAgICAgcmV0dXJuIFhQb3NpdGlvbi5iZWZvcmU7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5iZWZvcmUpIHtcbiAgICAgIHJldHVybiBYUG9zaXRpb24uYWZ0ZXI7XG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5yaWdodCkge1xuICAgICAgcmV0dXJuIFhQb3NpdGlvbi5sZWZ0O1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24ubGVmdCkge1xuICAgICAgcmV0dXJuIFhQb3NpdGlvbi5yaWdodDtcbiAgICB9XG4gIH1cblxufVxuXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgaXNEZXZNb2RlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpckFsaWFzLCBEaXIgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5pbXBvcnQgeyBZUG9zaXRpb24gfSBmcm9tICcuLi9wb3NpdGlvbi9wb3NpdGlvbic7XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICdAZ2xvYmFsJzoge1xuICAgICcqLCAqOmFmdGVyLCAqOmJlZm9yZSc6IHtcbiAgICAgICctd2Via2l0LWJveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnLW1vei1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCdcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IFJFRl9SRUdfRVhQID0gL1xceyhbXFx3LV0rKVxcfS9nO1xuXG5lbnVtIFR5cGVTdHlsZSB7XG4gIE11bHRpcGxlLFxuICBPbmx5T25lXG59XG5cbmNvbnN0IFNUWUxFX01BUDU6IE1hcDxhbnksIFN0eWxlTWFwNT4gPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVNYXA1IHtcbiAgc3R5bGVzOiBTdHlsZXNGbjIgfCBTdHlsZXMyO1xuICB0eXBlOiBUeXBlU3R5bGU7XG4gIHByaW9yaXR5OiBudW1iZXI7XG4gIGNzczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogZ2xvYmFsIHRoZW1lICovXG4gIGNsYXNzZXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmc7XG4gIC8qKiByZXF1aXJlVXBkYXRlICovXG4gIGNsYXNzZXNXaXRoVGhlbWU/OiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXToge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gICAgfSB8IHN0cmluZ1xuICB9O1xuICAvKiogT25seSBmb3Igc3R5bGVzIG9mIFR5cGVTdHlsZS5vbmUgKi9cbiAgcGFyZW50U3R5bGU/OiBTdHlsZXM7XG4gIHJlcXVpcmVVcGRhdGU/OiBib29sZWFuO1xuICBpZDogc3RyaW5nO1xufVxuXG5sZXQgbmV4dENsYXNzSWQgPSAwO1xubGV0IG5leHRLZXlGcmFtZUlkID0gMDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVzSW5Eb2N1bWVudCB7XG4gIHN0eWxlczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+XG4gIH0gPSB7fTtcbiAgc3R5bGVDb250YWluZXJzID0gbmV3IE1hcDxudW1iZXIsIEhUTUxFbGVtZW50PigpO1xuICBzdHlsZUVsZW1lbnRHbG9iYWxNYXAgPSBuZXcgTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD4oKTtcbn1cblxuY29uc3QgVEhFTUVfTUFQID0gbmV3IE1hcDxzdHJpbmcsIHtcbiAgYmFzZTogc3RyaW5nXG4gIGNoYW5nZTogc3RyaW5nIHwgbnVsbFxufT4oKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZVZhcmlhYmxlcztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBpbml0aWFsVGhlbWU6IHN0cmluZztcbiAgZWxlbWVudHM6IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+O1xuICBfZWxlbWVudHNNYXAgPSBuZXcgTWFwPGFueSwgSFRNTFN0eWxlRWxlbWVudD4oKTtcbiAgcHJpdmF0ZSB0aGVtZU1hcCA9IFRIRU1FX01BUDtcbiAgLyoqIHNzciBvciBobXIgKi9cbiAgcHJpdmF0ZSBpc0Rldk9yU2VydmVyID0gaXNEZXZNb2RlKCkgfHwgIVBsYXRmb3JtLmlzQnJvd3NlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlc0luRG9jdW1lbnQ6IFN0eWxlc0luRG9jdW1lbnQsXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICB0aGlzLl9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gdGhlbWVOYW1lIGluIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNcbiAgICAgID8gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdXG4gICAgICA6IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXSA9IG5ldyBNYXAoKTtcbiAgICAgIGlmICghdGhpcy5pbml0aWFsVGhlbWUpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVGhlbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnRoZW1lTWFwLmhhcyh0aGlzLmluaXRpYWxUaGVtZSkpIHtcbiAgICAgICAgdGhpcy50aGVtZU1hcC5zZXQodGhpcy5pbml0aWFsVGhlbWUsIHtcbiAgICAgICAgICBiYXNlOiB0aGlzLmluaXRpYWxUaGVtZSxcbiAgICAgICAgICBjaGFuZ2U6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hZGREZWZhdWx0U3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBkeW5hbWljIHN0eWxlLCB1c2Ugb25seSB3aXRoaW4gQElucHV0KClcbiAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZFxuICAgKiBAcGFyYW0gc3R5bGUgU3R5bGVzXG4gICAqIEBwYXJhbSBlbCBFbGVtZW50XG4gICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2Ugb2YgdGhpcywgdGhpcyByZXBsYWNlcyB0aGUgZXhpc3Rpbmcgc3R5bGUgd2l0aCBhIG5ldyBvbmUgd2hlbiBpdCBjaGFuZ2VzXG4gICAqIEBwYXJhbSBwYXJlbnRTdHlsZVxuICAgKi9cbiAgYWRkU3R5bGUoaWQ6IHN0cmluZywgc3R5bGU6IFN0eWxlQ29udGFpbmVyIHwgKCh0aGVtZSkgPT4gU3R5bGVDb250YWluZXIpIHwgKCh0aGVtZSkgPT4gc3RyaW5nKSB8IHN0cmluZywgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlciwgcGFyZW50U3R5bGU/OiBTdHlsZXMpIHtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGUgYXMgYW55LCBpZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5Pbmx5T25lLCBmYWxzZSwgcGFyZW50U3R5bGUpIGFzIHN0cmluZztcbiAgICBpZiAobmV3Q2xhc3MgPT09IGluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIGlmIChlbCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBwcml2YXRlIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzc25hbWUsIG9sZENsYXNzbmFtZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3MoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzczogc3RyaW5nLCBvbGRDbGFzcz86IHN0cmluZykge1xuICAgIGlmIChuZXdDbGFzcyA9PT0gb2xkQ2xhc3MpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgdGhlbWUuc2V0VGhlbWUoJ3RoZW1lLW5hbWUnKVxcYCBpcyBvbmx5IGF2YWlsYWJsZSBpbiBicm93c2VyIHBsYXRmb3JtYCk7XG4gICAgfVxuICAgIGlmIChuYW0gIT09IHRoaXMuY29uZmlnLm5hbWUpIHtcbiAgICAgIHRoaXMudGhlbWVNYXAuZ2V0KHRoaXMuaW5pdGlhbFRoZW1lKS5jaGFuZ2UgPSBuYW07XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQobmFtKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUFsbFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBUb2dnbGUgcmlnaHQtdG8tbGVmdC9sZWZ0LXRvLXJpZ2h0ICovXG4gIHRvZ2dsZURpcmVjdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jb25maWcuZGlyZWN0aW9uO1xuICAgIHRoaXMuY29uZmlnLmRpcmVjdGlvbiA9IGN1cnJlbnQgPT09IERpci5sdHIgPyBEaXIucnRsIDogRGlyLmx0cjtcbiAgICB0aGlzLl91cGRhdGVBbGxTdHlsZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUFsbFN0eWxlcygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVEYXRhID0gU1RZTEVfTUFQNS5nZXQoa2V5KTtcbiAgICAgIGlmIChzdHlsZURhdGEucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlRGF0YS5zdHlsZXMsIHN0eWxlRGF0YS5pZCwgc3R5bGVEYXRhLnByaW9yaXR5LCBzdHlsZURhdGEudHlwZSwgdHJ1ZSwgc3R5bGVEYXRhLnBhcmVudFN0eWxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzaW1wbGUgc3R5bGVcbiAgICogcmV0dXJuIGNsYXNzTmFtZVxuICAgKiBAcGFyYW0gaWQgaWQgb2Ygc3R5bGVcbiAgICogQHBhcmFtIGNzcyBzdHlsZSBvYmplY3Qgb3Igc3RyaW5nXG4gICAqIEBwYXJhbSBwcmlvcml0eSBzdHlsZSBwcmlvcml0eVxuICAgKi9cbiAgYWRkU2ltcGxlU3R5bGUoaWQ6IHN0cmluZywgY3NzOiBTdHlsZUNvbnRhaW5lciB8ICgodGhlbWUpID0+IFN0eWxlQ29udGFpbmVyKSwgcHJpb3JpdHk/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIGlkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlKSBhcyBzdHJpbmc7XG4gIH1cbiAgcHJpdmF0ZSBfYWRkRGVmYXVsdFN0eWxlcygpIHtcbiAgICB0aGlzLmFkZFN0eWxlU2hlZXQoZGVmYXVsdFN0eWxlcyk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGFkZCBhIG5ldyBzdHlsZSBzaGVldFxuICAgKiBAcGFyYW0gc3R5bGVzIHN0eWxlc1xuICAgKiBAcGFyYW0gcHJpb3JpdHkgcHJpb3JpdHkgZm9yIHN0eWxlXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIFN0eWxlcywgcHJpb3JpdHk/OiBudW1iZXIpOiBPbmx5Q2xhc3NlczxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBudWxsLCBwcmlvcml0eSwgVHlwZVN0eWxlLk11bHRpcGxlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlQ29udGVudDIoXG4gICAgc3R5bGVzOiBTdHlsZXMsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgcGFyZW50U3R5bGU/OiBTdHlsZXNcbiAgKSB7XG4gICAgY29uc3QgbmV3SWQgPSBpZCBhcyBzdHJpbmcgfHwgc3R5bGVzO1xuICAgIGxldCBpc05ld1N0eWxlOiBib29sZWFuO1xuICAgIGlmICghU1RZTEVfTUFQNS5oYXMobmV3SWQpKSB7XG4gICAgICBpc05ld1N0eWxlID0gdHJ1ZTtcbiAgICAgIFNUWUxFX01BUDUuc2V0KG5ld0lkLCB7XG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBzdHlsZXMsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGNzczoge30sXG4gICAgICAgIGlkLFxuICAgICAgICBwYXJlbnRTdHlsZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlTWFwID0gU1RZTEVfTUFQNS5nZXQobmV3SWQpO1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHRoaXMuaW5pdGlhbFRoZW1lO1xuICAgIGNvbnN0IGlzQ3JlYXRlZCA9IGlzTmV3U3R5bGUgfHwgIShzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV0pO1xuICAgIGlmIChpc0NyZWF0ZWQgfHwgZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgIC8qKiBjcmVhdGUgbmV3IHN0eWxlIGZvciBuZXcgdGhlbWUgKi9cbiAgICAgIGxldCBjc3M7XG4gICAgICBjb25zdCB0aGVtZU1hcCA9IHRoaXMudGhlbWVNYXAuZ2V0KHRoaXMuaW5pdGlhbFRoZW1lKTtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVNYXAuY2hhbmdlIHx8IHRoZW1lTmFtZSk7XG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXMoY29uZmlnKSwgdGhlbWVOYW1lLCBpZCwgdHlwZSwgY29uZmlnKTtcbiAgICAgICAgaWYgKCFmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICAgIHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdID0gY3NzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogY3JlYXRlIGEgbmV3IGlkIGZvciBzdHlsZSB0aGF0IGRvZXMgbm90IDwtPHJlcXVpcmU+LT4gY2hhbmdlcyAqL1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVNYXAsIHN0eWxlcywgdGhlbWVOYW1lLCBuZXdJZCBhcyBzdHJpbmcsIHR5cGUsIGNvbmZpZyk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMobmV3SWQpKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsID0gdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKGNzcyk7XG4gICAgICAgIGlmIChzdHlsZU1hcC5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyByZXF1aXJlZCBmb3Igd2hlbiBhIHRoZW1lIGNoYW5nZXNcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgbmV3RWwpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZXZPclNlcnZlcikge1xuICAgICAgICAgIC8vIGluIGRldiBtb2RlIG9yIHNlcnZlciBpdCBpcyBub3QgbmVjZXNzYXJ5XG4gICAgICAgICAgLy8gc2luY2UgdGhlIHN0eWxlcyB3aWxsIG5vdCBjaGFuZ2VcbiAgICAgICAgICB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVFbGVtZW50R2xvYmFsTWFwLnNldChuZXdJZCwgbmV3RWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIG5ld0VsKTtcbiAgICAgIH1cbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKTtcbiAgICAgICAgZWwuaW5uZXJUZXh0ID0gY3NzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Rldk9yU2VydmVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIGFwcGVuZCBjaGlsZCBzdHlsZSBpZiBub3QgZXhpc3QgaW4gZG9tXG4gICAgICAgKiBmb3Igc3NyIG9yIGhtclxuICAgICAgICovXG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuaGFzKG5ld0lkKSkge1xuICAgICAgICBjb25zdCBfY3NzID0gc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV0gfHwgc3R5bGVNYXAuY3NzO1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVFbGVtZW50R2xvYmFsTWFwO1xuICAgICAgICBpZiAoc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMuc2V0KG5ld0lkLCB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoX2NzcykpO1xuICAgICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW1hcC5oYXMobmV3SWQpKSB7XG4gICAgICAgICAgbWFwLnNldChuZXdJZCwgdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpKTtcbiAgICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCBtYXAuZ2V0KG5ld0lkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhlbWVOYW1lXTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHByaW9yaXR5ID0gMCkge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgaWYgKCFzdHlsZUNvbnRhaW5lcnMuaGFzKHByaW9yaXR5KSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudChgbHktcy1jYCk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3ByaW9yaXR5JywgYCR7cHJpb3JpdHl9YCk7XG4gICAgICB9XG4gICAgICBzdHlsZUNvbnRhaW5lcnMuc2V0KHByaW9yaXR5LCBlbCk7XG4gICAgICBpZiAoc3R5bGVDb250YWluZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBlbCwgdGhpcy5fZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gICAgfVxuICAgIGNvbnN0IHJlZkNoaWxkID0gdGhpcy5maW5kTm9kZShwcmlvcml0eSk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KSwgcmVmQ2hpbGQpO1xuICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE5vZGUoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgY29uc3Qga2V5cyA9IChBcnJheS5mcm9tKHN0eWxlQ29udGFpbmVycy5rZXlzKCkpKS5zb3J0KCk7XG4gICAgY29uc3Qga2V5ID0ga2V5cy5maW5kKF8gPT4gaW5kZXggPCBfKTtcbiAgICByZXR1cm4gKGtleSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlQ29udGFpbmVycy5nZXQoa2V5KSkgfHwgdGhpcy5jb3JlLmZpcnN0RWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVsZW1lbnRTdHlsZShjc3M6IHN0cmluZykge1xuICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVUZXh0KGNzcyk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCwgc3R5bGVUZXh0KTtcbiAgICByZXR1cm4gc3R5bGVFbGVtZW50O1xuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpIHtcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbigpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVDb250YWluZXIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICAvKiogUHJlZml4IG5hbWUgKi9cbiAgJG5hbWU/OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgU3R5bGVzRm4yID0gKFQpID0+IFN0eWxlczI7XG5cbmV4cG9ydCB0eXBlIFN0eWxlcyA9IFN0eWxlc0ZuMiB8IFN0eWxlczI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2V5ZnJhbWVzIHtcbiAgW25hbWU6IHN0cmluZ106IHtcbiAgICBbcGVyY2VudDogbnVtYmVyXTogU3R5bGVDb250YWluZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ3JvdXBTdHlsZVRvU3RyaW5nKFxuICBzdHlsZU1hcDogU3R5bGVNYXA1LFxuICBzdHlsZXM6IFN0eWxlczIsXG4gIHRoZW1lTmFtZTogc3RyaW5nLFxuICBpZDogc3RyaW5nLFxuICB0eXBlU3R5bGU6IFR5cGVTdHlsZSxcbiAgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzXG4pIHtcbiAgLy8gZm9yIHN0eWxlcyB0eXBlIHN0cmluZ1xuICBpZiAodHlwZVN0eWxlID09PSBUeXBlU3R5bGUuT25seU9uZSkge1xuICAgIC8vIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXdcbiAgICBjb25zdCBjbGFzc05hbWUgPSBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlXG4gICAgPyBzdHlsZU1hcFt0aGVtZU5hbWVdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVdID0gY3JlYXRlTmV4dENsYXNzSWQoKSlcbiAgICA6IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgID8gc3R5bGVNYXAuY2xhc3Nlc1xuICAgICAgOiBzdHlsZU1hcC5jbGFzc2VzID0gY3JlYXRlTmV4dENsYXNzSWQoKTtcbiAgICBsZXQgcnVsZXM6IHN0cmluZztcbiAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJ1bGVzID0gYC4ke2NsYXNzTmFtZX17JHtzdHlsZXN9fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bGVzID0gc3R5bGVUb1N0cmluZyhpZCwgbnVsbCwgc3R5bGVzLCB0aGVtZVZhcmlhYmxlcywgY2xhc3NOYW1lIGFzIGFueSk7XG4gICAgfVxuICAgIGlmIChzdHlsZU1hcC5wYXJlbnRTdHlsZSkge1xuICAgICAgY29uc3Qgc3R5bGVNYXBPZlBhcmVudFN0eWxlID0gU1RZTEVfTUFQNS5nZXQoc3R5bGVNYXAucGFyZW50U3R5bGUpO1xuICAgICAgcmV0dXJuIHJlcGxhY2VSZWZzKHJ1bGVzLCBzdHlsZU1hcE9mUGFyZW50U3R5bGVbdGhlbWVOYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBydWxlcztcbiAgfVxuICAvLyBmb3IgbXVsdGlwbGVzIHN0eWxlc1xuICBjb25zdCBjbGFzc2VzTWFwID0gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IHt9KTtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgY29uc3QgbmFtZSA9IHN0eWxlcy4kbmFtZSA/IGAke3N0eWxlcy4kbmFtZX0tYCA6ICcnO1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgICBpZiAoa2V5ID09PSAnJGtleWZyYW1lcycpIHtcbiAgICAgICAgY29udGVudCArPSBrZXlmcmFtZXNUb1N0cmluZyhuYW1lLCBjbGFzc2VzTWFwLCB2YWx1ZSBhcyBLZXlmcmFtZXMsIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyBzZXQgbmV3IGlkIGlmIG5vdCBleGlzdFxuICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NOYW1lID0ga2V5IGluIGNsYXNzZXNNYXBcbiAgICAgICAgPyBjbGFzc2VzTWFwW2tleV1cbiAgICAgICAgOiBjbGFzc2VzTWFwW2tleV0gPSBpc0Rldk1vZGUoKSA/IHRvQ2xhc3NOYW1lVmFsaWQoYHktJHtuYW1lfSR7a2V5fS0ke2NyZWF0ZU5leHRDbGFzc0lkKCl9YCkgOiBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyhrZXksIHN0eWxlcy4kbmFtZSwgdmFsdWUgYXMgU3R5bGVzMiwgdGhlbWVWYXJpYWJsZXMsIGN1cnJlbnRDbGFzc05hbWUpO1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVwbGFjZVJlZnMoY29udGVudCwgY2xhc3Nlc01hcCk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VSZWZzKHN0cjogc3RyaW5nLCBkYXRhOiBPYmplY3QpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFRl9SRUdfRVhQLCAobWF0Y2gsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gZGF0YVt0b2tlbl07XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGAuJHtkYXRhW3Rva2VuXX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YVtgQMOQwrMuLT4tJHt0b2tlbn1gXTtcbiAgICB9XG4gIH1cbiAgKTtcbn1cblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhrZXk6IHN0cmluZywgJG5hbWU6IHN0cmluZywgb2I6IE9iamVjdCwgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBjdXJyZW50S2V5OiBzdHJpbmcsIHBhcmVudEtleT86IHN0cmluZykge1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgc3ViQ29udGVudCA9ICcnO1xuICBsZXQga2V5QW5kVmFsdWUgPSAnJztcbiAgbGV0IG5ld0tleTtcbiAgaWYgKHBhcmVudEtleSkge1xuICAgIGlmIChjdXJyZW50S2V5LmluZGV4T2YoJyYnKSAhPT0gLTEpIHtcbiAgICAgIG5ld0tleSA9IGN1cnJlbnRLZXkucmVwbGFjZSgvJi9nLCBwYXJlbnRLZXkpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgbmV3S2V5ID0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdLZXkgPSBgJHtwYXJlbnRLZXl9ICR7Y3VycmVudEtleX1gO1xuICAgIH1cbiAgfSBlbHNlIGlmIChrZXkgPT09ICdAZ2xvYmFsJykge1xuICAgIG5ld0tleSA9IGtleTtcbiAgfSBlbHNlIHtcbiAgICBuZXdLZXkgPSBgLiR7Y3VycmVudEtleX1gO1xuICB9XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgLy8gT21pdCBzdHlsZSB3aXRoIHZhbHVlIG51bGxcbiAgICAgIGlmIChlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXMgT2JqZWN0IGxpdGVyYWxcbiAgICAgICAgaWYgKGVsZW1lbnQuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgIHN1YkNvbnRlbnQgKz0gc3R5bGVUb1N0cmluZyhrZXksICRuYW1lLCBlbGVtZW50IGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBzdHlsZUtleSwgbmV3S2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBrZXlBbmRWYWx1ZSArPSBjb252ZXJ0VG9TdHlsZVZhbHVlKHN0eWxlS2V5LCBlbGVtZW50LCB0aGVtZVZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGtleUFuZFZhbHVlKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBsZXQgbGluID0gJ1xcblxcbic7XG4gICAgICBpZiAoJG5hbWUpIHtcbiAgICAgICAgbGluICs9IGAvKiogU3R5bGUgU2hlZXQgbmFtZTogJHskbmFtZX0gKi9cXG5gO1xuICAgICAgfVxuICAgICAgbGluICs9IGAvKiogU3R5bGUgS2V5OiAke2tleX0gKi9cXG5gO1xuICAgICAgY29udGVudCArPSBgJHtsaW59YDtcbiAgICB9XG4gICAgaWYgKG5ld0tleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICAgIGtleUFuZFZhbHVlID0gYCR7cGFyZW50S2V5fXske2tleUFuZFZhbHVlfX1gO1xuICAgIH0gZWxzZSBpZiAocGFyZW50S2V5ICYmIHBhcmVudEtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgICBjb250ZW50ICs9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICB9XG4gICAgY29udGVudCArPSBgeyR7a2V5QW5kVmFsdWV9fWA7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQgKyBzdWJDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9TdHlsZVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10sIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBjb25zdCBuZXdTdHlsZUtleSA9IGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGVDYWNoZShrZXksIHRoZW1lVmFyaWFibGVzKTtcbiAgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgIGxldCBsaW4gPSAnJztcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsaW4gKz0gYCR7bmV3U3R5bGVLZXl9OiR7dmFsdWVbaW5kZXhdfTtgO1xuICAgIH1cbiAgICByZXR1cm4gbGluO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtuZXdTdHlsZUtleX06JHt2YWx1ZX07YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBrZXlmcmFtZXNUb1N0cmluZyhzdHlsZU5hbWU6IHN0cmluZywga2V5c01hcDogb2JqZWN0LCBrZXlmcmFtZXM6IEtleWZyYW1lcywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG5cbiAgZm9yIChjb25zdCBuYW1lIGluIGtleWZyYW1lcykge1xuICAgIGlmIChrZXlmcmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIGNvbnN0IGtleWZyYW1lID0ga2V5ZnJhbWVzW25hbWVdO1xuICAgICAgLy8gU29tZXRpbWVzIHRoZSBuYW1lIG9mIGEgY2xhc3MgY2FuIGJlIHRoZSBzYW1lIGFzIHRoZSBuYW1lIG9mIGEga2V5ZnJhbWUsXG4gICAgICAvLyBzbyB3ZSBhZGQgYSBjaGFyYWN0ZXIgdG8gYmUgZGlmZmVyZW50XG4gICAgICBjb25zdCBuZXdVbmlxdWVOYW1lID0gYEDDkMKzLi0+LSR7bmFtZX1gO1xuICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgIGNvbnN0IG5ld05hbWUgPSBuZXdVbmlxdWVOYW1lIGluIGtleXNNYXBcbiAgICAgID8ga2V5c01hcFtuZXdVbmlxdWVOYW1lXVxuICAgICAgOiBrZXlzTWFwW25ld1VuaXF1ZU5hbWVdID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGAke3N0eWxlTmFtZX0ke25hbWV9LSR7Y3JlYXRlTmV4dEtleWZyYW1lSWQoKX0tdmApIDogY3JlYXRlTmV4dEtleWZyYW1lSWQoKTtcbiAgICAgIGNvbnRlbnQgKz0gYEBrZXlmcmFtZXMgJHtuZXdOYW1lfXtgO1xuICAgICAgZm9yIChjb25zdCBwZXJjZW50IGluIGtleWZyYW1lKSB7XG4gICAgICAgIGlmIChrZXlmcmFtZS5oYXNPd25Qcm9wZXJ0eShwZXJjZW50KSkge1xuICAgICAgICAgIGNvbnRlbnQgKz0gYCR7cGVyY2VudH0le2A7XG4gICAgICAgICAgY29uc3Qgc3R5bGVzID0ga2V5ZnJhbWVbcGVyY2VudF07XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gc3R5bGVzW2tleV07XG4gICAgICAgICAgICAgIGNvbnRlbnQgKz0gY29udmVydFRvU3R5bGVWYWx1ZShrZXksIHZhbCBhcyBzdHJpbmcgfCBzdHJpbmdbXSwgdGhlbWVWYXJpYWJsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250ZW50ICs9IGB9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29udGVudCArPSBgfWA7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiB3YXJuRGVwcmVjYXRlZEtleVN0eWxlKHN0cjogc3RyaW5nLCBrZXk6IHN0cmluZywgdG86IHN0cmluZykge1xuICBjb25zb2xlLndhcm4oYFN0eWxlIGtleSBcXGAke2tleX1cXGAgZGVwcmVjYXRlZCBmb3IgXFxgJHtzdHJ9XFxgLCBjaGFuZ2UgXFxgJHtrZXl9XFxgIHRvIFxcYCR7dG99XFxgXFxuYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlKHN0cjogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpIHtcbiAgY29uc3QgaHlwaGVuQ2FzZSA9IHRvSHlwaGVuQ2FzZShzdHIpO1xuICBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKERpckFsaWFzLnN0YXJ0KSAhPT0gLTEpIHtcbiAgICB3YXJuRGVwcmVjYXRlZEtleVN0eWxlKHN0ciwgRGlyQWxpYXMuc3RhcnQsIERpckFsaWFzLmJlZm9yZSk7XG4gICAgcmV0dXJuIGRpckNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLnN0YXJ0KTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuZW5kKSAhPT0gLTEpIHtcbiAgICB3YXJuRGVwcmVjYXRlZEtleVN0eWxlKHN0ciwgRGlyQWxpYXMuZW5kLCBEaXJBbGlhcy5hZnRlcik7XG4gICAgcmV0dXJuIGRpckNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLmVuZCk7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKERpckFsaWFzLmJlZm9yZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIGRpckNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLmJlZm9yZSk7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKERpckFsaWFzLmFmdGVyKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZGlyQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuYWZ0ZXIpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihZUG9zaXRpb24uYWJvdmUpICE9PSAtMSkge1xuICAgIHJldHVybiBZUG9zaXRpb25DYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBZUG9zaXRpb24uYWJvdmUsIFRPUCk7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKFlQb3NpdGlvbi5iZWxvdykgIT09IC0xKSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbkNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIFlQb3NpdGlvbi5iZWxvdywgQk9UVE9NKTtcbiAgfVxuICByZXR1cm4gaHlwaGVuQ2FzZTtcbn1cblxuZnVuY3Rpb24gdG9DbGFzc05hbWVWYWxpZChzdHI6IHN0cmluZykge1xuICBjb25zdCBzID0gc3RyLnJlcGxhY2UoL15bMC05XXxbXlxcd1xcLV0vZywgXyA9PiB7XG4gICAgcmV0dXJuIGBfJHtfLmNoYXJDb2RlQXQoMCl9YDtcbiAgfSk7XG4gIHJldHVybiB0b0h5cGhlbkNhc2Uocyk7XG59XG5cblxuZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuZnVuY3Rpb24gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZUNhY2hlKHN0cjogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpOiBzdHJpbmcge1xuICBjb25zdCBtYXAgPSBTVFlMRV9LRVlTX01BUFt0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb25dO1xuICByZXR1cm4gc3RyIGluIG1hcFxuICA/IG1hcFtzdHJdXG4gIDogbWFwW3N0cl0gPSBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlKHN0ciwgdGhlbWVWYXJpYWJsZXMpO1xufVxuXG5jb25zdCBpZ25vcmVDU1NLRVkgPSB7XG4gICdicmVhay1hZnRlcic6ICdicmVhay1hZnRlcicsXG4gICdicmVhay1iZWZvcmUnOiAnYnJlYWstYmVmb3JlJyxcbiAgJ3BhZ2UtYnJlYWstYWZ0ZXInOiAncGFnZS1icmVhay1hZnRlcicsXG4gICdwYWdlLWJyZWFrLWJlZm9yZSc6ICdwYWdlLWJyZWFrLWJlZm9yZSdcbn07XG5cbmNvbnN0IFNUWUxFX0tFWVNfTUFQID0ge1xuICBydGw6IHtcbiAgICAuLi5pZ25vcmVDU1NLRVlcbiAgfSxcbiAgbHRyOiB7XG4gICAgLi4uaWdub3JlQ1NTS0VZXG4gIH1cbn07XG5cbmNvbnN0IEJPVFRPTSA9ICdib3R0b20nO1xuY29uc3QgVE9QID0gJ3RvcCc7XG5cbmZ1bmN0aW9uIGRpckNhY2hlKG9yaWdpbmFsLCB2YWw6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBkaXJBbGlhczogRGlyQWxpYXMpIHtcbiAgY29uc3QgbWFwID0gU1RZTEVfS0VZU19NQVBbdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uXTtcbiAgLy8gUmVwbGFjZSBpbiBvcmlnaW5hbCwgZm9yIGRvIG5vdCByZXBlYXQgdGhpcyBhZ2FpblxuICByZXR1cm4gbWFwW29yaWdpbmFsXSA9IHZhbC5yZXBsYWNlKGRpckFsaWFzLCB0aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24oZGlyQWxpYXMpKTtcbn1cblxuZnVuY3Rpb24gWVBvc2l0aW9uQ2FjaGUob3JpZ2luYWwsIHZhbDogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIHBvczogWVBvc2l0aW9uLCB0bzogJ3RvcCcgfCAnYm90dG9tJykge1xuICBjb25zdCBtYXAgPSBTVFlMRV9LRVlTX01BUFt0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb25dO1xuICAvLyBSZXBsYWNlIGluIG9yaWdpbmFsLCBmb3IgZG8gbm90IHJlcGVhdCB0aGlzIGFnYWluXG4gIHJldHVybiBtYXBbb3JpZ2luYWxdID0gdmFsLnJlcGxhY2UocG9zLCB0byk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXh0Q2xhc3NJZCgpIHtcbiAgcmV0dXJuIGBpJHsobmV4dENsYXNzSWQrKykudG9TdHJpbmcoMzYpfWA7XG59XG5mdW5jdGlvbiBjcmVhdGVOZXh0S2V5ZnJhbWVJZCgpIHtcbiAgcmV0dXJuIGBrJHsobmV4dEtleUZyYW1lSWQrKykudG9TdHJpbmcoMzYpfWA7XG59XG5cbnR5cGUgT25seUNsYXNzZXM8VD4gPSBSZWNvcmQ8KFxuICBFeGNsdWRlPChUIGV4dGVuZHMgKCguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA/IChrZXlvZiBSZXR1cm5UeXBlPFQ+KSA6IGtleW9mIFQpLFxuICAnJG5hbWUnIHwgJyRzaGVldCcgfCAnJGtleWZyYW1lcyc+XG4pLCBzdHJpbmc+O1xuXG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95LCBOZ01vZHVsZSwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ1RyYW5zY2x1ZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9uZ1RyYW5zY2x1ZGUgPSB0ZW1wbGF0ZVJlZjtcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gbnVsbDtcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbmdUcmFuc2NsdWRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9uZ1RyYW5zY2x1ZGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdmlld1JlZi5yZW1vdmUoKTtcbiAgfVxufVxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlTW9kdWxlIHtcblxufVxuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik6IEhUTUxFbGVtZW50IHtcbiAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudC5uYXRpdmVFbGVtZW50IDogZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcbmltcG9ydCB7IENhbkNvbG9yIH0gZnJvbSAnLi9jb2xvcic7XG5pbXBvcnQgeyBDYW5CZyB9IGZyb20gJy4vYmcnO1xuaW1wb3J0IHsgQ2FuRGlzYWJsZSB9IGZyb20gJy4vZGlzYWJsZWQnO1xuaW1wb3J0IHsgQ2FuUmFpc2VkIH0gZnJvbSAnLi9yYWlzZWQnO1xuaW1wb3J0IHsgQ2FuRWxldmF0aW9uIH0gZnJvbSAnLi9lbGV2YXRpb24nO1xuaW1wb3J0IHsgQ2FuT3V0bGluZWQgfSBmcm9tICcuL291dGxpbmVkJztcbmltcG9ydCB7IENhblNoYWRvd0NvbG9yIH0gZnJvbSAnLi9zaGFkb3ctY29sb3InO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXROYXRpdmVFbGVtZW50IH0gZnJvbSAnLi4vbWluaW1hbC9jb21tb24nO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5jb25zdCBERUZBVUxUX1ZBTFVFID0gJyc7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVQYXJhbXNTdHlsZVVwZGF0ZXIge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhblN0eWxlVXBkYXRlciB7XG4gIF90aGVtZTogTHlUaGVtZTI7XG4gIHVwZGF0ZVN0eWxlOiAoZWxlbWVudDogRWxlbWVudFJlZiB8IEVsZW1lbnQpID0+IHZvaWQ7XG4gIHNldEF1dG9Db250cmFzdDogKCkgPT4gdm9pZDtcbn1cbmV4cG9ydCB0eXBlIENhblN0eWxlVXBkYXRlckN0b3IgPSBDb25zdHJ1Y3RvcjxSZXF1aXJlUGFyYW1zU3R5bGVVcGRhdGVyICYgUGFydGlhbDxDYW5Db2xvciAmIENhbkJnICYgQ2FuRGlzYWJsZSAmIENhblJhaXNlZCAmIENhbkVsZXZhdGlvbiAmIENhbk91dGxpbmVkICYgQ2FuU2hhZG93Q29sb3I+PjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluU3R5bGVVcGRhdGVyPFQgZXh0ZW5kcyBDYW5TdHlsZVVwZGF0ZXJDdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuU3R5bGVVcGRhdGVyPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBfY2xhc3NOYW1lQW5vbnltb3VzOiBzdHJpbmc7XG4gICAgX2F1dG9Db250cmFzdDogYm9vbGVhbjtcbiAgICBzZXRBdXRvQ29udHJhc3QoKSB7XG4gICAgICB0aGlzLl9hdXRvQ29udHJhc3QgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGVTdHlsZShlbGVtZW50OiBFbGVtZW50UmVmPGFueT4gfCBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgX19iZyA9IHRoaXMuYmc7XG4gICAgICBjb25zdCBfX2NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgIGNvbnN0IF9fcmFpc2VkID0gdGhpcy5yYWlzZWQ7XG4gICAgICBjb25zdCBfX2VsZXZhdGlvbiA9IHRoaXMuZWxldmF0aW9uO1xuICAgICAgY29uc3QgX19kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICBjb25zdCBfX291dGxpbmVkID0gdGhpcy5vdXRsaW5lZDtcbiAgICAgIGNvbnN0IF9fc2hhZG93Q29sb3IgPSB0aGlzLnNoYWRvd0NvbG9yO1xuICAgICAgY29uc3QgX19pc0NvbnRyYXN0ID0gdGhpcy5fYXV0b0NvbnRyYXN0ICYmICFfX2NvbG9yIHx8IF9fY29sb3IgPT09ICdhdXRvJztcbiAgICAgIGNvbnN0IG5ld0tleSA9IGBjb21tb24tLS0tOiR7XG4gICAgICAgIF9fYmcgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICBfX2NvbG9yIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICBfX3JhaXNlZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICBfX2VsZXZhdGlvbiB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgIF9fZGlzYWJsZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICAgIF9fb3V0bGluZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICAgICAgX19zaGFkb3dDb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICAgIF9faXNDb250cmFzdCB8fCBERUZBVUxUX1ZBTFVFfWA7XG4gICAgICB0aGlzLl9jbGFzc05hbWVBbm9ueW1vdXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXksICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGU6IHtcbiAgICAgICAgICBib3JkZXI/OiBzdHJpbmcsXG4gICAgICAgICAgYmFja2dyb3VuZD86IHN0cmluZyxcbiAgICAgICAgICBjb2xvcj86IHN0cmluZyxcbiAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmcsXG4gICAgICAgICAgcG9pbnRlckV2ZW50cz86ICdub25lJztcbiAgICAgICAgICAnJjpob3Zlcic/OiB7XG4gICAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmdcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmFjdGl2ZSc/OiB7XG4gICAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmdcbiAgICAgICAgICB9XG4gICAgICAgIH0gPSB7fTtcbiAgICAgICAgaWYgKF9fb3V0bGluZWQpIHtcbiAgICAgICAgICBzdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fZGlzYWJsZWQpIHtcbiAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLnRleHQuZGlzYWJsZWQ7XG4gICAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmRpc2FibGVkLmRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChfX2JnKSB7XG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuY29sb3JPZihfX2JnKTtcbiAgICAgICAgICAgIGlmIChfX2lzQ29udHJhc3QpIHtcbiAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKGAke19fYmd9OmNvbnRyYXN0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghc3R5bGUuY29sb3IgJiYgX19jb2xvcikge1xuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKF9fY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoX19yYWlzZWQgfHwgX19lbGV2YXRpb24pIHtcbiAgICAgICAgICAgIGlmICghX19iZykge1xuICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JDc3MgPSBzdHlsZS5iYWNrZ3JvdW5kICE9PSBfX2JnICYmIHRoZW1lLmNvbG9yT2YoX19iZyB8fCAnYmFja2dyb3VuZDpwcmltYXJ5JywgJ3NoYWRvdycpO1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Q29sb3IgPSAoX19zaGFkb3dDb2xvciAmJiB0aGVtZS5jb2xvck9mKF9fc2hhZG93Q29sb3IpKSB8fCBiYWNrZ3JvdW5kQ29sb3JDc3MgfHwgc3R5bGUuYmFja2dyb3VuZCB8fCBzdHlsZS5jb2xvciB8fCB0aGVtZS5zaGFkb3c7XG4gICAgICAgICAgICBzdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3dCdWlsZGVyKF9fZWxldmF0aW9uIHx8IDMsIHNoYWRvd0NvbG9yKTtcbiAgICAgICAgICAgIGlmICghX19lbGV2YXRpb24pIHtcbiAgICAgICAgICAgICAgc3R5bGVbJyY6YWN0aXZlJ10gPSB7XG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDgsIHNoYWRvd0NvbG9yKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGUgYXMgYW55O1xuICAgICAgfSwgZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KSwgdGhpcy5fY2xhc3NOYW1lQW5vbnltb3VzLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGFueSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuIiwiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBSaXBwbGVDb25maWcge1xuICBjZW50ZXJlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgc2Vuc2l0aXZlPzogYm9vbGVhbjtcbiAgcmFkaXVzPzogJ2NvbnRhaW5lclNpemUnIHwgbnVtYmVyO1xuICBwZXJjZW50YWdlVG9JbmNyZWFzZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJpcHBsZVJlZiB7XG4gIHN0YXRlID0gdHJ1ZTtcbiAgdGltZXN0YW1wID0gLURhdGUubm93KCk7XG4gIHJlYWRvbmx5IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGVuZCgpIHtcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy50aW1lc3RhbXAgKz0gRGF0ZS5ub3coKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmlwcGxlIHtcbiAgcHJpdmF0ZSBfcmlwcGxlUmVmOiBSaXBwbGVSZWY7XG4gIHByaXZhdGUgX2V2ZW50SGFuZGxlcnM6IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4gPSBuZXcgTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPigpO1xuICBjb25maWc6IFJpcHBsZUNvbmZpZyA9IHt9O1xuICBwcml2YXRlIF90cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLl90aGVtZVZhcmlhYmxlcy5yaXBwbGUuZHVyYXRpb247XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNsYXNzZXM6IGFueSxcbiAgICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIF90cmlnZ2VyRWxlbWVudD86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBUb3VjaEV2ZW50ICA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgncG9pbnRlcmRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2Vkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3RvdWNoZW5kJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCd0b3VjaGNhbmNlbCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2V1cCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2VsZWF2ZScsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICBpZiAoIV90cmlnZ2VyRWxlbWVudCkge1xuICAgICAgICBfdHJpZ2dlckVsZW1lbnQgPSBfY29udGFpbmVyRWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoX3RyaWdnZXJFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRDb25maWcoY29uZmlnOiBSaXBwbGVDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9yZWN0Q29udGFpbmVyKCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUmlwcGxlKHN0eWxlczoge1trZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZ30pIHtcbiAgICB0aGlzLl9yaXBwbGVSZWYgPSBuZXcgUmlwcGxlUmVmKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fcmlwcGxlUmVmLmNvbnRhaW5lcjtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gdGhpcy5jbGFzc2VzLnJpcHBsZUNvbnRhaW5lcjtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3R5bGVzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBjb250YWluZXIuc3R5bGVba2V5XSA9IGAke2VsZW1lbnR9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdvcGFjaXR5Jyk7XG4gICAgY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgxKWA7XG4gIH1cblxuICBwcml2YXRlIG9uUG9pbnRlckRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICAvKipEZXN0cm95IHByZXZpb3VzIHJpcHBsZSBpZiBleGlzdCAqL1xuICAgICAgdGhpcy5lbmRSaXBwbGUoKTtcbiAgICAgIHRoaXMuc3RhcnRSaXBwbGUoZXZlbnQsIHRoaXMuY29uZmlnKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBvblBvaW50ZXJMZWF2ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5kUmlwcGxlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRSaXBwbGUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBQb2ludGVyRXZlbnQsIHJpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuX3JlY3RDb250YWluZXI7XG4gICAgbGV0IHggPSBldmVudC5jbGllbnRYLFxuICAgIHkgPSBldmVudC5jbGllbnRZO1xuICAgIGlmIChyaXBwbGVDb25maWcuY2VudGVyZWQpIHtcbiAgICAgIHggPSBjb250YWluZXJSZWN0LmxlZnQgKyBjb250YWluZXJSZWN0LndpZHRoIC8gMjtcbiAgICAgIHkgPSBjb250YWluZXJSZWN0LnRvcCArIGNvbnRhaW5lclJlY3QuaGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgY29uc3QgbGVmdCA9IHggLSBjb250YWluZXJSZWN0LmxlZnQ7XG4gICAgY29uc3QgdG9wID0geSAtIGNvbnRhaW5lclJlY3QudG9wO1xuICAgIGxldCByYWRpdXMgPSByaXBwbGVDb25maWcucmFkaXVzID09PSAnY29udGFpbmVyU2l6ZScgPyBtYXhTaXplKGNvbnRhaW5lclJlY3QpIC8gMiA6IHJpcHBsZUNvbmZpZy5yYWRpdXMgfHwgcmlwcGxlUmFkaXVzKHgsIHksIGNvbnRhaW5lclJlY3QpO1xuICAgIGlmIChyaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UpIHtcbiAgICAgIHJhZGl1cyArPSByYWRpdXMgKiByaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UgLyAxMDA7XG4gICAgfVxuICAgIHRoaXMuY3JlYXRlUmlwcGxlKHtcbiAgICAgIGxlZnQ6IGxlZnQgLSByYWRpdXMsXG4gICAgICB0b3A6IHRvcCAtIHJhZGl1cyxcbiAgICAgIHdpZHRoOiByYWRpdXMgKiAyLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAyLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHt0aGlzLl90cmFuc2l0aW9uRHVyYXRpb259bXNgXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJ1blRpbWVvdXRPdXRzaWRlWm9uZShmbjogRnVuY3Rpb24sIGRlbGF5ID0gMCkge1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KGZuLCBkZWxheSkpO1xuICB9XG5cbiAgZW5kUmlwcGxlKCkge1xuICAgIGNvbnN0IHJpcHBsZVJlZjogUmlwcGxlUmVmID0gdGhpcy5fcmlwcGxlUmVmIHx8IG51bGw7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLl90cmFuc2l0aW9uRHVyYXRpb247XG4gICAgaWYgKHJpcHBsZVJlZiAmJiByaXBwbGVSZWYuc3RhdGUpIHtcbiAgICAgIHJpcHBsZVJlZi5lbmQoKTtcbiAgICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3RoaXMuX3RyYW5zaXRpb25EdXJhdGlvbiAvIDV9bXNgO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gOiAwKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIC8gKGR1cmF0aW9uICogLjAwMSArIDEpIDogMCk7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIC4xNSA6IDApO1xuICAgICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmlwcGxlUmVmLmNvbnRhaW5lcik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAvIChkdXJhdGlvbiAqIC4wMDEgKyAxKSAqIDIgOiBkdXJhdGlvbik7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgICB0aGlzLl9yaXBwbGVSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiByaXBwbGVSYWRpdXMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJlY3Q6IENsaWVudFJlY3QpIHtcbiAgY29uc3QgZGlzdFggPSBNYXRoLm1heChNYXRoLmFicyh4IC0gcmVjdC5sZWZ0KSwgTWF0aC5hYnMoeCAtIHJlY3QucmlnaHQpKTtcbiAgY29uc3QgZGlzdFkgPSBNYXRoLm1heChNYXRoLmFicyh5IC0gcmVjdC50b3ApLCBNYXRoLmFicyh5IC0gcmVjdC5ib3R0b20pKTtcbiAgcmV0dXJuIE1hdGguc3FydChkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WSk7XG59XG5cbmZ1bmN0aW9uIG1heFNpemUocmVjdDogQ2xpZW50UmVjdCkge1xuICByZXR1cm4gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBMWV9DT01NT05fU1RZTEVTID0ge1xuICBmaWxsOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICB9LFxuICB2aXN1YWxseUhpZGRlbjoge1xuICAgIGJvcmRlcjogMCxcbiAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBtYXJnaW46ICctMXB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzFweCcsXG4gICAgb3V0bGluZTogMCxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBgdHJhbnNwYXJlbnRgLFxuICAgIGJvcmRlcjogMCxcbiAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgbWFyZ2luOiAwLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJyxcbiAgICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZSc6ICdub25lJyxcbiAgICAnJjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgIGJvcmRlcjogMFxuICAgIH1cbiAgfVxufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNvcmVTdHlsZXMge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KExZX0NPTU1PTl9TVFlMRVMpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lOiBMeVRoZW1lMikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnLi4vc3R5bGVzL2NvcmUtc3R5bGVzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcmlwcGxlQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcycHgnLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgb3BhY2l0eTogJy4yJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLm9wYWNpdHl9LHRyYW5zZm9ybSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLnRyYW5zZm9ybVxuICAgIH1gLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICB9XG59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGVTZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IFJpcHBsZSwgUmlwcGxlQ29uZmlnIH0gZnJvbSAnLi4vcmlwcGxlL3JpcHBsZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi9yaXBwbGUvcmlwcGxlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVQYXJhbXMge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xuICBfbmdab25lOiBOZ1pvbmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRGlzYWJsZVJpcHBsZSB7XG4gIF90cmlnZ2VyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcbiAgX3JpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnO1xuICBfcmVtb3ZlUmlwcGxlRXZlbnRzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EaXNhYmxlUmlwcGxlPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxSZXF1aXJlUGFyYW1zPj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkRpc2FibGVSaXBwbGU+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgX3RyaWdnZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIF9yaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZyA9IHt9O1xuICAgIHByaXZhdGUgX3JpcHBsZTogUmlwcGxlO1xuICAgIHByaXZhdGUgX2Rpc2FibGVSaXBwbGU7XG5cbiAgICBnZXQgZGlzYWJsZVJpcHBsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVSaXBwbGU7IH1cbiAgICBzZXQgZGlzYWJsZVJpcHBsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdmFsICE9PSB0aGlzLl9kaXNhYmxlUmlwcGxlKSB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2Rpc2FibGVSaXBwbGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzIHJpcHBsZSBpZiBleGlzdFxuICAgICAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgICAgICAgaWYgKCFuZXdWYWwpIHtcbiAgICAgICAgICAvLyBhZGQgcmlwcGxlXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl90cmlnZ2VyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgcmlwcGxlQ29udGFpbmVyID0gKHRoaXMuX3JpcHBsZUNvbnRhaW5lciAmJiB0aGlzLl9yaXBwbGVDb250YWluZXIubmF0aXZlRWxlbWVudCkgfHwgdHJpZ2dlckVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLl9yaXBwbGUgPSBuZXcgUmlwcGxlKHRoaXMuX3RoZW1lLmNvbmZpZywgdGhpcy5fbmdab25lLCB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyksIHJpcHBsZUNvbnRhaW5lciwgdHJpZ2dlckVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5fcmlwcGxlLnNldENvbmZpZyh0aGlzLl9yaXBwbGVDb25maWcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIF9yZW1vdmVSaXBwbGVFdmVudHMoKSB7XG4gICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAgIGlmICh0aGlzLl9yaXBwbGUpIHtcbiAgICAgICAgICB0aGlzLl9yaXBwbGUucmVtb3ZlRXZlbnRzKCk7XG4gICAgICAgICAgdGhpcy5fcmlwcGxlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkRpc2FibGUge1xuICBkaXNhYmxlZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EaXNhYmxlZDxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5EaXNhYmxlPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkgeyB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5jb25zdCBERUZBVUxUX0NPTE9SID0gJ3ByaW1hcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkNvbG9yIHtcbiAgY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluQ29sb3I8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuQ29sb3I+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG5cbiAgICBnZXQgY29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2NvbG9yOyB9XG4gICAgc2V0IGNvbG9yKHZhbDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB2YWwgfHwgREVGQVVMVF9DT0xPUjtcbiAgICAgIGlmIChkZWZhdWx0Q29sb3IgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgdGhpcy5fY29sb3IgPSBkZWZhdWx0Q29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmNvbnN0IERFRkFVTFRfQkcgPSAncHJpbWFyeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuQmcge1xuICBiZzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5CZzxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5CZz4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfYmc6IHN0cmluZztcblxuICAgIGdldCBiZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fYmc7IH1cbiAgICBzZXQgYmcodmFsOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHZhbCB8fCBERUZBVUxUX0JHO1xuICAgICAgaWYgKGRlZmF1bHRDb2xvciAhPT0gdGhpcy5iZykge1xuICAgICAgICB0aGlzLl9iZyA9IGRlZmF1bHRDb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuUmFpc2VkIHtcbiAgcmFpc2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5SYWlzZWQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuUmFpc2VkPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9yYWlzZWQ6IGJvb2xlYW47XG5cbiAgICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkOyB9XG4gICAgc2V0IHJhaXNlZCh2YWx1ZTogYW55KSB7IHRoaXMuX3JhaXNlZCA9IHRvQm9vbGVhbih2YWx1ZSk7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5PdXRsaW5lZCB7XG4gIG91dGxpbmVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5PdXRsaW5lZDxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5PdXRsaW5lZD4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfb3V0bGluZWQ6IGJvb2xlYW47XG5cbiAgICBnZXQgb3V0bGluZWQoKSB7IHJldHVybiB0aGlzLl9vdXRsaW5lZDsgfVxuICAgIHNldCBvdXRsaW5lZCh2YWx1ZTogYW55KSB7IHRoaXMuX291dGxpbmVkID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRWxldmF0aW9uIHtcbiAgZWxldmF0aW9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkVsZXZhdGlvbjxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5FbGV2YXRpb24+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2VsZXZhdGlvbjogbnVtYmVyO1xuXG4gICAgZ2V0IGVsZXZhdGlvbigpIHsgcmV0dXJuIHRoaXMuX2VsZXZhdGlvbjsgfVxuICAgIHNldCBlbGV2YXRpb24odmFsdWU6IGFueSkgeyB0aGlzLl9lbGV2YXRpb24gPSB2YWx1ZTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuU2hhZG93Q29sb3Ige1xuICBzaGFkb3dDb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5TaGFkb3dDb2xvcjxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5TaGFkb3dDb2xvcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfc2hhZG93Q29sb3I6IHN0cmluZztcblxuICAgIGdldCBzaGFkb3dDb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc2hhZG93Q29sb3I7IH1cbiAgICBzZXQgc2hhZG93Q29sb3IodmFsdWU6IHN0cmluZykgeyB0aGlzLl9zaGFkb3dDb2xvciA9IHZhbHVlOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIE5nWm9uZSwgT25EZXN0cm95LCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBtaXhpblN0eWxlVXBkYXRlciwgbWl4aW5CZywgbWl4aW5SYWlzZWQsIG1peGluT3V0bGluZWQsIG1peGluRWxldmF0aW9uLCBtaXhpblNoYWRvd0NvbG9yLCBtaXhpbkRpc2FibGVSaXBwbGUsIG1peGluQ29sb3IgfSBmcm9tICcuLi9jb21tb24vaW5kZXgnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuY29uc3QgREVGQVVMVF9CRyA9ICdwYXBlcic7XG5cbmV4cG9ydCBjbGFzcyBMeVBhcGVyQmFzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IEx5UGFwZXJNaXhpbkJhc2UgPSBtaXhpblN0eWxlVXBkYXRlcihcbm1peGluQmcoXG4gIG1peGluQ29sb3IoXG4gICAgbWl4aW5SYWlzZWQoXG4gICAgICBtaXhpbk91dGxpbmVkKFxuICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICBtaXhpblNoYWRvd0NvbG9yKFxuICAgICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlKEx5UGFwZXJCYXNlKSkpKSkpKSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGx5LXBhcGVyLCBbbHktcGFwZXJdLCBbbHktdGV4dF1gLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdmbGF0JyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVBhcGVyIGV4dGVuZHMgTHlQYXBlck1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBfaGFzVGV4dDogYm9vbGVhbjtcblxuICBASW5wdXQoJ2x5LXRleHQnKVxuICBzZXQgaGFzVGV4dCh2YWw6IGFueSkge1xuICAgIHRoaXMuX2hhc1RleHQgPSB0b0Jvb2xlYW4odmFsKTtcbiAgfVxuICBnZXQgaGFzVGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzVGV4dDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHRoZW1lOiBMeVRoZW1lMixcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHN1cGVyKHRoZW1lLCBuZ1pvbmUpO1xuICAgIHRoaXMuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbDtcbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLl9lbDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmJnICYmICF0aGlzLmhhc1RleHQpIHtcbiAgICAgIHRoaXMuYmcgPSBERUZBVUxUX0JHO1xuICAgICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl90aGVtZS5hZGRTaW1wbGVTdHlsZShcbiAgICAgICAgJ2x5UGFwZXInLFxuICAgICAgICAoe1xuICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgfSlcbiAgICAgICAgKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3dpdGhDbGFzc10nXG59KVxuZXhwb3J0IGNsYXNzIEx5V2l0aENsYXNzIHtcblxuICBASW5wdXQoKVxuICBzZXQgd2l0aENsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7dmFsfScgaXMgbm90IHZhbGlkIGNsYXNzTmFtZWApO1xuICAgIH1cbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh2YWwpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5UGFwZXIgfSBmcm9tICcuL3BhcGVyJztcbmltcG9ydCB7IEx5V2l0aENsYXNzIH0gZnJvbSAnLi93aXRoLWNsYXNzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5V2l0aENsYXNzLCBMeVBhcGVyXSxcbiAgZXhwb3J0czogW0x5V2l0aENsYXNzLCBMeVBhcGVyXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbk1vZHVsZSB7IH1cbiIsImZ1bmN0aW9uIGlzV2luZG93KG9iajogYW55KSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtOiBhbnkpIHtcbiAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0UG9zaXRpb24oZWxlbTogSFRNTEVsZW1lbnQpIHtcbiAgICBsZXQgZG9jRWxlbTogYW55LCB3aW46IGFueSxcbiAgICAgICAgYm94ID0ge3RvcDogMCwgbGVmdDogMH07XG4gICAgY29uc3QgZG9jID0gZWxlbSAmJiBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cbiAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcbiAgICAgICAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG4gICAgd2luID0gZ2V0V2luZG93KGRvYyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBib3gudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XG4gICAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RW50cnkodmFsdWU6IHN0cmluZyB8IG51bWJlciwgZGVmYXVsdFZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59XG4iLCIvLyBFbGVtZW50IHRvIG1vdmUsIHRpbWUgaW4gbXMgdG8gYW5pbWF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gIGxldCBlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBpZiAoZS5zY3JvbGxUb3AgPT09IDApIHtcbiAgICBjb25zdCB0ID0gZS5zY3JvbGxUb3A7XG4gICAgKytlLnNjcm9sbFRvcDtcbiAgICBlID0gdCArIDEgPT09IGUuc2Nyb2xsVG9wLS0gPyBlIDogZG9jdW1lbnQuYm9keTtcbiAgfVxuICBzY3JvbGxUb0MoZSwgZS5zY3JvbGxUb3AsIGVsZW1lbnQsIGR1cmF0aW9uKTtcbn1cblxuLy8gRWxlbWVudCB0byBtb3ZlLCBlbGVtZW50IG9yIHB4IGZyb20sIGVsZW1lbnQgb3IgcHggdG8sIHRpbWUgaW4gbXMgdG8gYW5pbWF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvQyhlbGVtZW50OiBIVE1MRWxlbWVudCwgZnJvbTogYW55LCB0bzogbnVtYmVyIHwgSFRNTEVsZW1lbnQsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgaWYgKGR1cmF0aW9uIDw9IDApIHsgcmV0dXJuOyB9XG4gIGlmICh0eXBlb2YgZnJvbSA9PT0gJ29iamVjdCcpIHtmcm9tID0gZnJvbS5vZmZzZXRUb3A7IH1cbiAgaWYgKHR5cGVvZiB0byA9PT0gJ29iamVjdCcpIHt0byA9IHRvLm9mZnNldFRvcDsgfVxuXG4gIGNyZWF0ZVNjcm9sbFdpdGhBbmltYXRpb24oZWxlbWVudCwgZnJvbSwgdG8sIDAsIDEgLyBkdXJhdGlvbiwgMjAsIGVhc2VPdXRDdWFpYyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxXaXRoQW5pbWF0aW9uKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgdG86IG51bWJlcixcbiAgZHVyYXRpb246IG51bWJlcixcbiAgcD86ICd4JyB8ICd5JyxcbiAgbW90aW9uPzogKHQ6IG51bWJlcikgPT4gbnVtYmVyXG4pIHtcbiAgY29uc3QgX21vdGlvbiA9IG1vdGlvbiB8fCBlYXNlT3V0Q3VhaWM7XG4gIGNvbnN0IHsgc2Nyb2xsTGVmdCB9ID0gZWxlbWVudDtcbiAgcmV0dXJuIGNyZWF0ZVNjcm9sbFdpdGhBbmltYXRpb24oZWxlbWVudCwgc2Nyb2xsTGVmdCwgdG8sIDAsIDEgLyBkdXJhdGlvbiwgMjAsIF9tb3Rpb24sIHApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTY3JvbGxXaXRoQW5pbWF0aW9uKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgeEZyb206IG51bWJlcixcbiAgeFRvOiBudW1iZXIsXG4gIHQwMTogbnVtYmVyLFxuICBzcGVlZDogbnVtYmVyLFxuICBzdGVwOiBudW1iZXIsXG4gIG1vdGlvbjogKHQ6IG51bWJlcikgPT4gbnVtYmVyLFxuICBwPzogJ3gnIHwgJ3knXG4pIHtcbiAgY29uc3Qgc2Nyb2xsVCA9IHAgPT09ICd5JyA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICBpZiAodDAxIDwgMCB8fCB0MDEgPiAxIHx8IHNwZWVkIDw9IDApIHtcbiAgICBlbGVtZW50W3Njcm9sbFRdID0geFRvO1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50W3Njcm9sbFRdID0geEZyb20gLSAoeEZyb20gLSB4VG8pICogbW90aW9uKHQwMSk7XG4gIHQwMSArPSBzcGVlZCAqIHN0ZXA7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY3JlYXRlU2Nyb2xsV2l0aEFuaW1hdGlvbihlbGVtZW50LCB4RnJvbSwgeFRvLCB0MDEsIHNwZWVkLCBzdGVwLCBtb3Rpb24sIHApO1xuICB9LCBzdGVwKTtcbn1cblxuXG4vLyBmdW5jdGlvbiBsaW5lYXJUd2Vlbih0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIHQ7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJblF1YWQodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB0ICogdDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dFF1YWQodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiAtdCAqICh0IC0gMik7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dFF1YWQodDogbnVtYmVyKSB7XG4vLyAgIHQgLz0gMC41O1xuLy8gICBpZiAodCA8IDEpIHtyZXR1cm4gdCAqIHQgLyAyOyB9XG4vLyAgIHQtLTtcbi8vICAgcmV0dXJuICh0ICogKHQgLSAyKSAtIDEpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluQ3VhaWModDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB0ICogdCAqIHQ7XG4vLyB9XG5cbmZ1bmN0aW9uIGVhc2VPdXRDdWFpYyh0OiBudW1iZXIpIHtcbiAgdC0tO1xuICByZXR1cm4gdCAqIHQgKiB0ICsgMTtcbn1cblxuLy8gZnVuY3Rpb24gZWFzZUluT3V0Q3VhaWModDogbnVtYmVyKSB7XG4vLyAgIHQgLz0gMC41O1xuLy8gICBpZiAodCA8IDEpIHtyZXR1cm4gdCAqIHQgKiB0IC8gMjsgfVxuLy8gICB0IC09IDI7XG4vLyAgIHJldHVybiAodCAqIHQgKiB0ICsgMikgLyAyO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5RdWFydCh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIHQgKiB0ICogdCAqIHQ7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VPdXRRdWFydCh0OiBudW1iZXIpIHtcbi8vICAgdC0tO1xuLy8gICByZXR1cm4gLSh0ICogdCAqIHQgKiB0IC0gMSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dFF1YXJ0KHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIDAuNSAqIHQgKiB0ICogdCAqIHQ7IH1cbi8vICAgdCAtPSAyO1xuLy8gICByZXR1cm4gLSh0ICogdCAqIHQgKiB0IC0gMikgLyAyO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5RdWludCh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0O1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlT3V0UXVpbnQodDogbnVtYmVyKSB7XG4vLyAgIHQtLTtcbi8vICAgcmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0ICsgMTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluT3V0UXVpbnQodDogbnVtYmVyKSB7XG4vLyAgIHQgLz0gMC41O1xuLy8gICBpZiAodCA8IDEpIHtyZXR1cm4gdCAqIHQgKiB0ICogdCAqIHQgLyAyOyB9XG4vLyAgIHQgLT0gMjtcbi8vICAgcmV0dXJuICh0ICogdCAqIHQgKiB0ICogdCArIDIpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluU2luZSh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIC1NYXRoLmNvcyh0IC8gKE1hdGguUEkgLyAyKSkgKyAxO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlT3V0U2luZSh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIE1hdGguc2luKHQgLyAoTWF0aC5QSSAvIDIpKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluT3V0U2luZSh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIC0oTWF0aC5jb3MoTWF0aC5QSSAqIHQpIC0gMSkgLyAyO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5FeHBvKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dEV4cG8odDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiAtTWF0aC5wb3coMiwgLTEwICogdCkgKyAxO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRFeHBvKHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgLyAyOyB9XG4vLyAgIHQtLTtcbi8vICAgcmV0dXJuICgtTWF0aC5wb3coMiwgLTEwICogdCkgKyAyKSAvIDI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbkNpcmModDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiAtTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlT3V0Q2lyYyh0OiBudW1iZXIpIHtcbi8vICAgdC0tO1xuLy8gICByZXR1cm4gTWF0aC5zcXJ0KDEgLSB0ICogdCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dENpcmModDogbnVtYmVyKSB7XG4vLyAgIHQgLz0gMC41O1xuLy8gICBpZiAodCA8IDEpIHtyZXR1cm4gLShNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpIC8gMjsgfVxuLy8gICB0IC09IDI7XG4vLyAgIHJldHVybiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgKyAxKSAvIDI7XG4vLyB9XG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmLCBOZ1pvbmUsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZ2V0TmF0aXZlRWxlbWVudCB9IGZyb20gJy4uL21pbmltYWwvY29tbW9uJztcblxuZXhwb3J0IGVudW0gRm9jdXNTdGF0dXMge1xuICAvKiptb3VzZSBhbmQvb3IgdG91Y2gqL1xuICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICAvKioga2V5Ym9hcmQgYW5kL29yIHByb2dyYW0qL1xuICBLRVlCT0FSRCA9ICdrZXlib2FyZCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXNTdGF0ZUluZm8ge1xuICB1bmxpc3RlbjogKCkgPT4gdm9pZDtcbiAgc3ViamVjdDogU3ViamVjdDxGb2N1c1N0YXRlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c1N0YXRlIHtcbiAgZXZlbnQ6IEZvY3VzRXZlbnQ7XG4gIGJ5OiAna2V5Ym9hcmQnIHwgJ21vdXNlJztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZWxlbWVudE1hcCA9IG5ldyBNYXA8SFRNTEVsZW1lbnQsIEZvY3VzU3RhdGVJbmZvPigpO1xuICBwcml2YXRlIF9jdXJyZW50RXZlbnQ6ICdtb3VzZScgfCAna2V5Ym9hcmQnO1xuICBwcml2YXRlIF9yZW1vdmVHbG9iYWxMaXN0ZW5lcnM6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX2NvdW50ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxuXG4gIGxpc3RlbihlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBrZXlFbGVtZW50PzogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik6IE9ic2VydmFibGU8Rm9jdXNTdGF0ZT4gfCBudWxsIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgLy8gcmV0dXJuIG51bGwgaWYgaXQgaXMgbm90IGJyb3dzZXIgcGxhdGZvcm1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSBnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGNvbnN0IGtleSA9IGtleUVsZW1lbnQgJiYgZ2V0TmF0aXZlRWxlbWVudChrZXlFbGVtZW50KSB8fCBuYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnRNYXAuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50TWFwLmdldChrZXkpLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9jdXNTdGF0ZTogRm9jdXNTdGF0ZUluZm8gPSB7XG4gICAgICB1bmxpc3RlbjogbnVsbCxcbiAgICAgIHN1YmplY3Q6IG5ldyBTdWJqZWN0PEZvY3VzU3RhdGU+KClcbiAgICB9O1xuICAgIHRoaXMuX2luY3JlbWVudENvdW50KCk7XG4gICAgY29uc3QgZm9jdXNMaXN0ZW5lciA9IChldmVudDogRm9jdXNFdmVudCkgPT4gdGhpcy5fb24oZXZlbnQsIGZvY3VzU3RhdGUuc3ViamVjdCk7XG4gICAgY29uc3QgYmx1ckxpc3RlbmVyID0gKGV2ZW50OiBGb2N1c0V2ZW50KSA9PiB0aGlzLl9vbihldmVudCwgZm9jdXNTdGF0ZS5zdWJqZWN0KTtcblxuICAgIGZvY3VzU3RhdGUudW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICBuYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm9jdXNMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICBuYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVyTGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbiAgICB0aGlzLl9lbGVtZW50TWFwLnNldChrZXksIGZvY3VzU3RhdGUpO1xuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIG5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmb2N1c0xpc3RlbmVyLCB0cnVlKTtcbiAgICAgIG5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXJMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvY3VzU3RhdGUuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHVubGlzdGVuKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbCA9IGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgY29uc3QgZm9jdXNTdGF0ZUluZm8gPSB0aGlzLl9lbGVtZW50TWFwLmdldChlbCk7XG4gICAgaWYgKGZvY3VzU3RhdGVJbmZvKSB7XG4gICAgICBmb2N1c1N0YXRlSW5mby51bmxpc3RlbigpO1xuICAgICAgdGhpcy5fZWxlbWVudE1hcC5kZWxldGUoZWwpO1xuICAgICAgdGhpcy5fZGVjcmVtZW50Q291bnQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vbihldmVudDogRm9jdXNFdmVudCwgc3ViamVjdDogU3ViamVjdDxGb2N1c1N0YXRlPikge1xuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gc3ViamVjdC5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgYnk6IHRoaXMuX2N1cnJlbnRFdmVudCB8fCAna2V5Ym9hcmQnXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkR2xvYmFsTGlzdGVuZXJzKCkge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lck9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVyc1xuICAgID8ge1xuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IHRydWVcbiAgICB9IDogZmFsc2U7XG5cbiAgICBjb25zdCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciA9ICgpID0+IHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jdXJyZW50RXZlbnQgPSAna2V5Ym9hcmQnKTtcbiAgICBjb25zdCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyID0gKCkgPT4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2N1cnJlbnRFdmVudCA9ICdtb3VzZScpO1xuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9pbmNyZW1lbnRDb3VudCgpIHtcbiAgICBpZiAoKyt0aGlzLl9jb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5fYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVjcmVtZW50Q291bnQoKSB7XG4gICAgaWYgKCEtLXRoaXMuX2NvdW50KSB7XG4gICAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9lbGVtZW50TWFwLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMudW5saXN0ZW4oZWxlbWVudCkpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQVVJX1ZFUlNJT04gPSAnMS45LjknO1xuZXhwb3J0IGNvbnN0IEFVSV9MQVNUX1VQREFURSA9ICcyMDE4LTEyLTE5VDE5OjA4OjU4LjAwM1onO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEhhbW1lck9wdGlvbnMsIEhhbW1lckluc3RhbmNlIH0gZnJvbSAnLi9nZXN0dXJlLWFubm90YXRpb25zJztcblxuZXhwb3J0IGNvbnN0IExZX0hBTU1FUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPEhhbW1lck9wdGlvbnM+KCdMWV9IQU1NRVJfT1BUSU9OUycpO1xuXG5jb25zdCBIQU1NRVJfR0VTVFVSRVNfRVZFTlRTID0gW1xuICAnc2xpZGUnLFxuICAnc2xpZGVzdGFydCcsXG4gICdzbGlkZWVuZCcsXG4gICdzbGlkZXJpZ2h0JyxcbiAgJ3NsaWRlbGVmdCcsXG4gICdzbGlkZWNhbmNlbCdcbl07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeUhhbW1lckdlc3R1cmVDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgZXZlbnRzOiBzdHJpbmdbXSA9IEhBTU1FUl9HRVNUVVJFU19FVkVOVFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfSEFNTUVSX09QVElPTlMpIHByaXZhdGUgX2hhbW1lck9wdGlvbnM6IEhhbW1lck9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBidWlsZEhhbW1lcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhhbW1lckluc3RhbmNlIHtcbiAgICBjb25zdCBoYW1tZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/ICh3aW5kb3cgYXMgYW55KS5IYW1tZXIgOiBudWxsO1xuICAgIGNvbnN0IG1jID0gbmV3IGhhbW1lcihlbGVtZW50LCB0aGlzLl9oYW1tZXJPcHRpb25zIHx8IHt9KTtcblxuICAgIGNvbnN0IHBhbiA9IG5ldyBoYW1tZXIuUGFuKCk7XG4gICAgY29uc3Qgc3dpcGUgPSBuZXcgaGFtbWVyLlN3aXBlKCk7XG4gICAgY29uc3Qgc2xpZGUgPSB0aGlzLl9jcmVhdGVSZWNvZ25pemVyKHBhbiwge2V2ZW50OiAnc2xpZGUnLCB0aHJlc2hvbGQ6IDB9LCBzd2lwZSk7XG5cbiAgICBwYW4ucmVjb2duaXplV2l0aChzd2lwZSk7XG5cbiAgICAvLyBBZGQgY3VzdG9taXplZCBnZXN0dXJlcyB0byBIYW1tZXIgbWFuYWdlclxuICAgIG1jLmFkZChbc3dpcGUsIHBhbiwgc2xpZGVdKTtcbiAgICByZXR1cm4gbWM7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyByZWNvZ25pemVyLCB3aXRob3V0IGFmZmVjdGluZyB0aGUgZGVmYXVsdCByZWNvZ25pemVycyBvZiBIYW1tZXJKUyAqL1xuICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyKGJhc2U6IGFueSwgb3B0aW9uczogYW55LCAuLi5pbmhlcml0YW5jZXM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVjb2duaXplciA9IG5ldyAoYmFzZS5jb25zdHJ1Y3Rvcikob3B0aW9ucyk7XG5cbiAgICBpbmhlcml0YW5jZXMucHVzaChiYXNlKTtcbiAgICBpbmhlcml0YW5jZXMuZm9yRWFjaChpdGVtID0+IHJlY29nbml6ZXIucmVjb2duaXplV2l0aChpdGVtKSk7XG5cbiAgICByZXR1cm4gcmVjb2duaXplcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWVNb2R1bGUge1xuICBzdGF0aWMgc2V0VGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEx5VGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgW0x5VGhlbWUyXSxcbiAgICAgICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogdGhlbWVOYW1lIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVW5kZWZpbmVkIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IFVuZGVmaW5lZFZhbHVlID0gbmV3IFVuZGVmaW5lZCgpO1xuIiwiZXhwb3J0IGVudW0gSW52ZXJ0TWVkaWFRdWVyeSB7XG4gIE5vLFxuICBZZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1lZGlhUXVlcnkobWVkaWE6IHN0cmluZywgaW52ZXJ0TWVkaWFRdWVyeTogSW52ZXJ0TWVkaWFRdWVyeSA9IEludmVydE1lZGlhUXVlcnkuTm8pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gIGlmIChtZWRpYSAmJiBpbnZlcnRNZWRpYVF1ZXJ5ID09PSBJbnZlcnRNZWRpYVF1ZXJ5Llllcykge1xuICAgIGNvbnN0IG5ld1ZhbCA9IG1lZGlhLnNwbGl0KCcsJykubWFwKF8gPT4gYG5vdCAke199YCk7XG4gICAgcmV0dXJuIG5ld1ZhbDtcbiAgfVxuICByZXR1cm4gbWVkaWE7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnQsIEluamVjdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMeUNvcmVTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvY29yZS1zdHlsZXMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50ICwgT2JzZXJ2YWJsZSwgZW1wdHkgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmUsIGF1ZGl0VGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgb3ZlcmxheUJhY2tkcm9wOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm92ZXJsYXksXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH1cbn0pO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdpbmRvd1Njcm9sbFNlcnZpY2Uge1xuXG4gIHNjcm9sbCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHdpbmRvdy5kb2N1bWVudCwgJ3Njcm9sbCcpLnBpcGUoXG4gICAgICAgICAgYXVkaXRUaW1lKDIwKSxcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZIHx8IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JvbGwkID0gZW1wdHkoKTtcbiAgICB9XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5Q29udGFpbmVyIHtcbiAgcHJpdmF0ZSBfY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9pdGVtcyA9IG5ldyBTZXQ8YW55PigpO1xuICBwcml2YXRlIF9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXI6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2x5LW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGluc3RhbmNlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9hZGQoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW1zLmFkZChpdGVtKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgdGhpcy5fdXBkYXRlKCk7XG4gIH1cblxuICAgIC8qKlxuICAgKiBSZW1vdmUgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX3JlbW92ZShpdGVtKSB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIHRoaXMuX2l0ZW1zLmRlbGV0ZShpdGVtKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc3R5bGVzIGZvciBvdmVybGF5IGNvbnRhaW5lclxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2l0ZW1zLnNpemUpIHtcbiAgICAgIGlmICghdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9jbGFzc2VzLm92ZXJsYXlCYWNrZHJvcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jbGFzc2VzLm92ZXJsYXlCYWNrZHJvcCk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgQkFDS0RST1BfU1RZTEVTID0gKHtcbiAgYmFja2Ryb3A6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfVxufSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW92ZXJsYXktYmFja2Ryb3AnLFxuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5QmFja2Ryb3Age1xuICAvKiogQGlnbm9yZSAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChCQUNLRFJPUF9TVFlMRVMpO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgdGhpcy5fb3ZlcmxheUNvbmZpZy5mbkRlc3Ryb3koKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgQEluamVjdCgnb3ZlcmxheUNvbmZpZycpIHByaXZhdGUgX292ZXJsYXlDb25maWc6IGFueSxcbiAgICBjb21tb25TdHlsZXM6IEx5Q29yZVN0eWxlc1xuICApIHtcbiAgICBlbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY29tbW9uU3R5bGVzLmNsYXNzZXMuZmlsbCk7XG4gICAgaWYgKF9vdmVybGF5Q29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICBlbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmJhY2tkcm9wKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tRXZlbnQgLCBPYnNlcnZhYmxlLCBlbXB0eSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSwgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVzaXplU2VydmljZSB7XG5cbiAgcmVzaXplJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBuZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgICBhdWRpdFRpbWUoMjApLFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzaGFyZSgpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXNpemUkID0gZW1wdHkoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFRlbXBsYXRlUmVmLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdGFibGUsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yLCBDb21wb25lbnRSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciwgTHlPdmVybGF5QmFja2Ryb3AsIFdpbmRvd1Njcm9sbFNlcnZpY2UgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJlc2l6ZVNlcnZpY2UgfSBmcm9tICcuL3Jlc2l6ZSc7XG5cbmludGVyZmFjZSBPdmVybGF5Q29uZmlnIHtcbiAgc3R5bGVzOiBPYmplY3Q7XG4gIGNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgYmFja2Ryb3A/OiBib29sZWFuO1xuICBmbkRlc3Ryb3k/OiAoLi4uYXJnKSA9PiB2b2lkO1xuICBob3N0PzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICAvKiogRGV0YWNoZXMgYSB2aWV3IGZyb20gZGlydHkgY2hlY2tpbmcgYWdhaW4gb2YgQXBwbGljYXRpb25SZWYuICAqL1xuICBkZXRhY2g6ICgpID0+IHZvaWQ7XG5cbiAgLyoqIFJlbW92ZSBlbGVtZW50IG9mIERPTSAqL1xuICByZW1vdmU6ICgpID0+IHZvaWQ7XG5cbiAgLyoqIERldGFjaCAmIHJlbW92ZSAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuXG4gIGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuXG59XG5jbGFzcyBDcmVhdGVGcm9tVGVtcGxhdGVSZWYgaW1wbGVtZW50cyBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2VsOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfY29tcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHByaXZhdGUgX2NvbXBSZWZPdmVybGF5QmFja2Ryb3A6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3aW5kb3dTUlN1YjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBnZXQgY29udGFpbmVyRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWw7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4gfCBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIF9jb250ZXh0OiBhbnksXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHdpbmRvd1Njcm9sbDogV2luZG93U2Nyb2xsU2VydmljZSxcbiAgICByZXNpemVTZXJ2aWNlOiBSZXNpemVTZXJ2aWNlLFxuICAgIGNvbmZpZz86IE92ZXJsYXlDb25maWdcbiAgKSB7XG4gICAgLy8gdGhpcy5fdmlld1JlZiA9IF90ZW1wbGF0ZVJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoX2NvbnRleHQpO1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gdGhpcy5fdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChyb290Tm9kZSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQocm9vdE5vZGUpKTtcbiAgICBjb25zdCBfX3N0eWxlcyA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgICAgIC4uLmNvbmZpZy5zdHlsZXNcbiAgICB9O1xuICAgIGNvbnN0IG5ld0luamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ292ZXJsYXlDb25maWcnLFxuICAgICAgICB1c2VWYWx1ZTogPE92ZXJsYXlDb25maWc+e1xuICAgICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXN0cm95LmJpbmQodGhpcyksXG4gICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgIHN0eWxlczogX19zdHlsZXMsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLCB0aGlzLl9pbmplY3Rvcik7XG5cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyhfX3N0eWxlcyk7XG4gICAgaWYgKGNvbmZpZy5ob3N0KSB7XG4gICAgICB0aGlzLndpbmRvd1NSU3ViID0gbWVyZ2Uod2luZG93U2Nyb2xsLnNjcm9sbCQsIHJlc2l6ZVNlcnZpY2UucmVzaXplJCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGNvbmZpZy5ob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICBsZWZ0OiByZWN0LmxlZnRcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMobmV3U3R5bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb25maWcuY2xhc3NlcztcbiAgICBpZiAoY2xhc3NlcyAmJiBjbGFzc2VzLmxlbmd0aCkge1xuICAgICAgY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+ICh0aGlzLl9lbCBhcyBIVE1MRGl2RWxlbWVudCkuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wID0gdGhpcy5nZW5lcmF0ZUNvbXBvbmVudChMeU92ZXJsYXlCYWNrZHJvcCwgbmV3SW5qZWN0b3IpO1xuICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuaG9zdFZpZXcpO1xuICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKGJhY2tkcm9wRWwpO1xuICAgIHRoaXMuX2FwcGVuZENvbXBvbmVudFRvQm9keShfdGVtcGxhdGVSZWYsIF9jb250ZXh0LCB0aGlzLl9pbmplY3Rvcik7XG5cbiAgfVxuXG4gIHVwZGF0ZVN0eWxlcyhfX3N0eWxlcykge1xuICAgIC8qKiBBcHBseSBzdHlsZXMgKi9cbiAgICAvKiogc2V0IHN0eWxlcyAqL1xuICAgIGZvciAoY29uc3Qga2V5IGluIF9fc3R5bGVzKSB7XG4gICAgICBpZiAoX19zdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBzdHlsZVZhbCA9IF9fc3R5bGVzW2tleV07XG4gICAgICAgIGlmIChzdHlsZVZhbCkge1xuICAgICAgICAgIHRoaXMuX2VsLnN0eWxlW2tleV0gPSB0eXBlb2YgX19zdHlsZXNba2V5XSA9PT0gJ251bWJlcicgPyBgJHtzdHlsZVZhbH1weGAgOiBzdHlsZVZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZENvbXBvbmVudFRvQm9keSh0eXBlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgVHlwZTxhbnk+IHwgc3RyaW5nLCBjb250ZXh0LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBpZiAodHlwZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICAvLyBDcmVhdGUgYSBjb21wb25lbnQgcmVmZXJlbmNlIGZyb20gdGhlIGNvbXBvbmVudFxuICAgICAgY29uc3Qgdmlld1JlZiA9IHRoaXMuX3ZpZXdSZWYgPSB0eXBlLmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZXh0IHx8IHt9KTtcbiAgICAgIHRoaXMuX2FwcFJlZi5hdHRhY2hWaWV3KHZpZXdSZWYpO1xuXG4gICAgICAvLyBHZXQgRE9NIGVsZW1lbnQgZnJvbSBjb21wb25lbnRcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2goXyA9PiB0aGlzLl9lbC5hcHBlbmRDaGlsZChfKSk7XG5cbiAgICAgIC8vIEFwcGVuZCBET00gZWxlbWVudCB0byB0aGUgYm9keVxuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZWwuaW5uZXJUZXh0ID0gdHlwZTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBSZWYgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KHR5cGUgYXMgVHlwZTxhbnk+LCBpbmplY3Rvcik7XG4gICAgICB0aGlzLl9lbCA9IHRoaXMuX2NvbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb21wb25lbnQodHlwZTogVHlwZTxhbnk+LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpO1xuICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX3ZpZXdSZWYpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY29tcFJlZikge1xuICAgICAgdGhpcy5fY29tcFJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fZWwpIHtcbiAgICAgIC8vIHJlbW92ZSBpZiBjb250ZW50IGlzIHN0cmluZ1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX2VsID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5kZXN0cm95KCk7XG4gICAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKGJhY2tkcm9wRWwpO1xuICAgIH1cbiAgICB0aGlzLndpbmRvd1NSU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF93aW5kb3dTY3JvbGw6IFdpbmRvd1Njcm9sbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogUmVzaXplU2VydmljZVxuICApIHsgfVxuXG4gIGNyZWF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IHN0cmluZywgY29udGV4dD86IGFueSwgY29uZmlnPzogT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICAgIHJldHVybiBuZXcgQ3JlYXRlRnJvbVRlbXBsYXRlUmVmKFxuICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB0aGlzLl9hcHBSZWYsIHRlbXBsYXRlLCB0aGlzLl9vdmVybGF5Q29udGFpbmVyLCBjb250ZXh0LCB0aGlzLl9pbmplY3RvciwgdGhpcy5fd2luZG93U2Nyb2xsLCB0aGlzLl9yZXNpemVTZXJ2aWNlLCBjb25maWcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5QmFja2Ryb3AgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlPdmVybGF5QmFja2Ryb3BdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtMeU92ZXJsYXlCYWNrZHJvcF1cbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5TW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IE1VVEFUSU9OX09CU0VSVkVSX0lOSVQgPSB7XG4gIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gIGNoaWxkTGlzdDogdHJ1ZSxcbiAgc3VidHJlZTogdHJ1ZVxufTtcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTXV0YXRpb25PYnNlcnZlckZhY3Rvcnkge1xuICBjcmVhdGUoY2FsbGJhY2s6IE11dGF0aW9uQ2FsbGJhY2spOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgRWxlbWVudE9ic2VydmVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZWRFbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgTXV0YXRpb25PYnNlcnZlciB8IG51bGw+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbXV0YXRpb25PYnNlcnZlckZhY3Rvcnk6IE11dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5XG4gICkgeyB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5mb3JFYWNoKChfLCBlbGVtZW50KSA9PiB0aGlzLmRlc3Ryb3koZWxlbWVudCkpO1xuICB9XG5cbiAgb2JzZXJ2ZShlbGVtZW50T3JSZWY6IEVsZW1lbnQgfCBFbGVtZW50UmVmPEVsZW1lbnQ+LCBmbjogTXV0YXRpb25DYWxsYmFjaywgb3B0aW9ucz86IE11dGF0aW9uT2JzZXJ2ZXJJbml0KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRPclJlZiBpbnN0YW5jZW9mIEVsZW1lbnRSZWYgPyBlbGVtZW50T3JSZWYubmF0aXZlRWxlbWVudCA6IGVsZW1lbnRPclJlZjtcbiAgICBpZiAoIXRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IHRoaXMuX211dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5LmNyZWF0ZShmbik7XG4gICAgICBpZiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvcHRpb25zIHx8IE1VVEFUSU9OX09CU0VSVkVSX0lOSVQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5zZXQoZWxlbWVudCwgb2JzZXJ2ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSBPYnNlcnZlclxuICAgKi9cbiAgZGVzdHJveShlbGVtZW50T3JSZWY6IEVsZW1lbnQgfCBFbGVtZW50UmVmPEVsZW1lbnQ+KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRPclJlZiBpbnN0YW5jZW9mIEVsZW1lbnRSZWYgPyBlbGVtZW50T3JSZWYubmF0aXZlRWxlbWVudCA6IGVsZW1lbnRPclJlZjtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gQWxpZ25BbGlhcyB7XG4gIHJvd1JldmVyc2UgPSAncm93LXJldmVyc2UnLFxuICBjb2x1bW5SZXZlcnNlID0gJ2NvbHVtbi1yZXZlcnNlJyxcbiAgd3JhcFJldmVyc2UgPSAnd3JhcC1yZXZlcnNlJyxcbiAgc3RhcnQgPSAnZmxleC1zdGFydCcsXG4gIGVuZCA9ICdmbGV4LWVuZCcsXG4gIGJldHdlZW4gPSAnc3BhY2UtYmV0d2VlbicsXG4gIGFyb3VuZCA9ICdzcGFjZS1hcm91bmQnLFxuICBldmVubHkgPSAnc3BhY2UtZXZlbmx5J1xufVxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwiVmlld0VuY2Fwc3VsYXRpb24iLCJJbmplY3RhYmxlIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJSZW5kZXJlckZhY3RvcnkyIiwiRE9DVU1FTlQiLCJpc0Rldk1vZGUiLCJOZ1pvbmUiLCJEaXJlY3RpdmUiLCJWaWV3Q29udGFpbmVyUmVmIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkVsZW1lbnRSZWYiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkRFRkFVTFRfQkciLCJSZW5kZXJlcjIiLCJTdWJqZWN0IiwiSGFtbWVyR2VzdHVyZUNvbmZpZyIsInN0eWxlcyIsImZyb21FdmVudCIsImF1ZGl0VGltZSIsIm1hcCIsInNoYXJlIiwiZW1wdHkiLCJDb21wb25lbnQiLCJIb3N0TGlzdGVuZXIiLCJTdWJzY3JpcHRpb24iLCJJbmplY3RvciIsIm1lcmdlIiwiVGVtcGxhdGVSZWYiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJBcHBsaWNhdGlvblJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxhQUFnQixjQUFjLENBQUMsUUFBUTs7WUFDL0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7O1lBQ3ZDLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztZQUN2QyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7WUFDdkMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSTtRQUN0RCxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzFDLENBQUM7Ozs7OztBQ05EO1FBQ00sTUFBTSxHQUFHLE9BQU87O1FBRWhCLHFCQUFxQixHQUFHLEdBQUc7O1FBQzNCLHdCQUF3QixHQUFHLElBQUk7O1FBQy9CLDBCQUEwQixHQUFHLElBQUk7O0FBQ3ZDLFFBQWEsT0FBTyxHQUFHO1FBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFF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