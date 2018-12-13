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
                    // element.classList.add(this.stylesData[0]);
                    // this._renderer.addClass(element, this.stylesData[0].id);
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
                _this._disableRipple = null;
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
                                var rippleContainer = _this._rippleContainer.nativeElement;
                                /** @type {?} */
                                var triggerElement = _this._triggerElement.nativeElement;
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
                var focusStateInfo = this._elementMap.get(getNativeElement(element));
                if (focusStateInfo) {
                    focusStateInfo.unlisten();
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
    var AUI_VERSION = '1.9.7-nightly.20181213-jpmc6zgx';
    /** @type {?} */
    var AUI_LAST_UPDATE = '2018-12-13T08:23:33.392Z';

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
    exports.AlignAlias = AlignAlias;
    exports.ɵa = LyWithClass;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc3JjL3BhbGV0dGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc2hhZG93LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2FseWxlLWNvbmZpZy1zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3BsYXRmb3JtLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3Bhc3NpdmUtbGlzdGVuZXJzLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZS1jb25maWcudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc3R5bGUtdXRpbHMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3Bvc2l0aW9uL3Bvc2l0aW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lMi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvY29tbW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9idWlsZC1jb21tb24tYmVoYXZpb3JzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvaXMtYm9vbGVhbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9yaXBwbGUvcmlwcGxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlcy9jb3JlLXN0eWxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9yaXBwbGUvcmlwcGxlLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2Rpc2FibGUtcmlwcGxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9kaXNhYmxlZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vY29sb3IudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2JnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9yYWlzZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL291dGxpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9lbGV2YXRpb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL3NoYWRvdy1jb2xvci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9wYXBlci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS93aXRoLWNsYXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZWwvb2Zmc2V0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZGVmYXVsdC1lbnRyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy92ZXJzaW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2dlc3R1cmUvZ2VzdHVyZS1jb25maWcudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3VuZGVmaW5lZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXktY29udGFpbmVyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9yZXNpemUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXkubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9tdXRhdGlvbi1vYnNlcnZlci1mYWN0b3J5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3Bvc2l0aW9uL2FsaWduLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFlJUShoZXhjb2xvcikge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xuICBjb25zdCB5aXEgPSAoKHIgKiAyOTkpICsgKGcgKiA1ODcpICsgKGIgKiAxMTQpKSAvIDEwMDA7XG4gIHJldHVybiAoeWlxID49IDEyOCkgPyAnYmxhY2snIDogJ3doaXRlJztcbn1cbiIsImltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbmNvbnN0IHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG5jb25zdCBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5leHBvcnQgY29uc3QgU2hhZG93cyA9IFtcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMywgMCwgMCwgMSwgMSwgMCwgMCwgMiwgMSwgLTFdLFxuICBbMCwgMSwgNSwgMCwgMCwgMiwgMiwgMCwgMCwgMywgMSwgLTJdLFxuICBbMCwgMSwgOCwgMCwgMCwgMywgNCwgMCwgMCwgMywgMywgLTJdLFxuICBbMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwXSxcbiAgWzAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDFdLFxuICBbMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMl0sXG4gIFswLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyXSxcbiAgWzAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzXSxcbiAgWzAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzXSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0XSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0XSxcbiAgWzAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0XSxcbiAgWzAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1XSxcbiAgWzAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNV0sXG4gIFswLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDVdLFxuICBbMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2XSxcbiAgWzAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNl0sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDddLFxuICBbMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgN10sXG4gIFswLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4XSxcbiAgWzAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDhdXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXJEZXByZWNhdGVkKGVsZXZhdGlvbjogbnVtYmVyIHwgc3RyaW5nID0gMiwgY29sb3IgPSAnIzAwMCcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IpO1xuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5VW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5KS5jc3MoKVxuICBdO1xuICBjb25zdCBlID0gU2hhZG93c1tlbGV2YXRpb25dO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgYm94LXNoYWRvdzoke2VbMF19cHggJHtlWzFdfXB4ICR7ZVsyXX1weCAke2VbM119cHggJHtjb2xvcnNbMF19LCR7ZVs0XX1weCAke2VbNV19cHggJHtlWzZdfXB4ICR7ZVs3XX1weCAke2NvbG9yc1sxXX0sJHtlWzhdfXB4ICR7ZVs5XX1weCAke2VbMTBdfXB4ICR7ZVsxMV19cHggJHtjb2xvcnNbMl19O2A7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXIoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcsIGNvbG9yPzogc3RyaW5nKSB7XG4gIGxldCBDb2xvciA9IGNocm9tYShjb2xvciB8fCAnIzAwMCcpO1xuICBjb25zdCByZ2IgPSBDb2xvci5nZXQoJ3JnYicpIGFzIGFueSBhcyBudW1iZXJbXTtcbiAgaWYgKCEocmdiWzBdID09PSByZ2JbMV0gJiYgcmdiWzBdID09PSByZ2JbMl0pKSB7XG4gICAgLy8gRGFya2VuIGFuZCBzYXR1cmF0ZSBpZiB0aGUgY29sb3IgaXMgbm90IGluIHRoZSBncmF5c2NhbGVcbiAgICBDb2xvciA9IENvbG9yLmRhcmtlbigpLnNhdHVyYXRlKDIpO1xuICB9XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGAke2VbMF19cHggJHtlWzFdfXB4ICR7ZVsyXX1weCAke2VbM119cHggJHtjb2xvcnNbMF19LCR7ZVs0XX1weCAke2VbNV19cHggJHtlWzZdfXB4ICR7ZVs3XX1weCAke2NvbG9yc1sxXX0sJHtlWzhdfXB4ICR7ZVs5XX1weCAke2VbMTBdfXB4ICR7ZVsxMV19cHggJHtjb2xvcnNbMl19O2A7XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xuZXhwb3J0IGNvbnN0IElTX0NPUkVfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48dHJ1ZT4oJ2x5LmlzLnJvb3QnKTtcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xuICBkZWZhdWx0Pzogc3RyaW5nO1xuICBjb250cmFzdD86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcbiAgYmFja2dyb3VuZD86IHtcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxuICAgIHBhcGVyPzogc3RyaW5nLFxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfTtcbiAgdGV4dD86IHtcbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeT86IHN0cmluZyxcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXG4gICAgZGlzYWJsZWQ/OiBzdHJpbmcsXG4gICAgaGludD86IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG4gIGRpdmlkZXI/OiBzdHJpbmc7XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICBjb2xvclNoYWRvdz86IHN0cmluZztcbiAgYmFyPzogc3RyaW5nO1xuICBpbnB1dD86IHtcbiAgICBsYWJlbD86IHN0cmluZyxcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcbiAgfTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuIiwiXG4vLyBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIHN1cHBvcnRzIHRoZSBWOCBCcmVhayBJdGVyYXRvci4gVGhlIFY4IGNoZWNrXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cbmNvbnN0IGhhc1Y4QnJlYWtJdGVyYXRvciA9ICh0eXBlb2YoSW50bCkgIT09ICd1bmRlZmluZWQnICYmIChJbnRsIGFzIGFueSkudjhCcmVha0l0ZXJhdG9yKTtcbi8qKlxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcbiAqIGNoZWNraW5nIGJyb3dzZXItc3BlY2lmaWMgZ2xvYmFsIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XG4gIHN0YXRpYyByZWFkb25seSBpc0Jyb3dzZXI6IGJvb2xlYW4gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQ7XG4gIC8qKiBMYXlvdXQgRW5naW5lcyAqL1xuICBzdGF0aWMgcmVhZG9ubHkgRURHRSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGVkZ2UpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgc3RhdGljIHJlYWRvbmx5IFRSSURFTlQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvLyBFZGdlSFRNTCBhbmQgVHJpZGVudCBtb2NrIEJsaW5rIHNwZWNpZmljIHRoaW5ncyBhbmQgbmVlZCB0byBiZSBleGNsdWRlZCBmcm9tIHRoaXMgY2hlY2suXG4gIHN0YXRpYyByZWFkb25seSBCTElOSyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxuICAgICAgKCEhKCh3aW5kb3cgYXMgYW55KS5jaHJvbWUgfHwgaGFzVjhCcmVha0l0ZXJhdG9yKSAmJiAhIUNTUyAmJiAhUGxhdGZvcm0uRURHRSAmJiAhUGxhdGZvcm0uVFJJREVOVCk7XG5cbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXG4gIC8vIGVuc3VyZSB0aGF0IFdlYmtpdCBydW5zIHN0YW5kYWxvbmUgYW5kIGlzIG5vdCB1c2VkIGFzIGFub3RoZXIgZW5naW5lJ3MgYmFzZS5cbiAgc3RhdGljIHJlYWRvbmx5IFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxuICAgICAgL0FwcGxlV2ViS2l0L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhUGxhdGZvcm0uQkxJTksgJiYgIVBsYXRmb3JtLkVER0UgJiYgIVBsYXRmb3JtLlRSSURFTlQ7XG5cbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xuICBzdGF0aWMgcmVhZG9ubHkgSU9TID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEod2luZG93IGFzIGFueSkuTVNTdHJlYW07XG5cbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcbiAgLy8gdGhlbSBzZWxmIGFzIEdlY2tvLWxpa2UgYnJvd3NlcnMgYW5kIG1vZGlmeSB0aGUgdXNlckFnZW50J3MgYWNjb3JkaW5nIHRvIHRoYXQuXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXG4gIHN0YXRpYyByZWFkb25seSBGSVJFRk9YID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvLyBUcmlkZW50IG9uIG1vYmlsZSBhZGRzIHRoZSBhbmRyb2lkIHBsYXRmb3JtIHRvIHRoZSB1c2VyQWdlbnQgdG8gdHJpY2sgZGV0ZWN0aW9ucy5cbiAgc3RhdGljIHJlYWRvbmx5IEFORFJPSUQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICFQbGF0Zm9ybS5UUklERU5UO1xuXG4gIC8vIFNhZmFyaSBicm93c2VycyB3aWxsIGluY2x1ZGUgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZWlyIHVzZXJBZ2VudC4gU29tZSBicm93c2VycyBtYXkgZmFrZVxuICAvLyB0aGlzIGFuZCBqdXN0IHBsYWNlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGUgdXNlckFnZW50LiBUbyBiZSBtb3JlIHNhZmUgYWJvdXQgU2FmYXJpIGV2ZXJ5XG4gIC8vIFNhZmFyaSBicm93c2VyIHNob3VsZCBhbHNvIHVzZSBXZWJraXQgYXMgaXRzIGxheW91dCBlbmdpbmUuXG4gIHN0YXRpYyByZWFkb25seSBTQUZBUkkgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL3NhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgUGxhdGZvcm0uV0VCS0lUO1xufVxuIiwibGV0IHN1cHBvcnRzUGFzc2l2ZTtcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycygpOiBib29sZWFuIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5U3R5bGVVdGlscywgRGlyIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgU3R5bGVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IFJpcHBsZVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3JpcHBsZSc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5VmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDaGVja2JveFZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL2NoZWNrYm94JztcbmltcG9ydCB7IFNuYWNrQmFyVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvc25hY2stYmFyJztcbmltcG9ydCB7IEJ1dHRvblZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL2J1dHRvbic7XG5pbXBvcnQgeyBUb29sdGlwVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvdG9vbHRpcCc7XG5cbmV4cG9ydCBjb25zdCBMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTID0gbmV3IEluamVjdGlvblRva2VuPFBhcnRpYWxUaGVtZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLmdsb2JhbC52YXJpYWJsZXMnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUaGVtZUNvbmZpZyB8IFRoZW1lQ29uZmlnW10+KCdseV90aGVtZV9jb25maWcnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2x5LnRoZW1lLm5hbWUnKTtcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYWNjZW50OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICB3YXJuOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBkaXNhYmxlZDogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYmFja2dyb3VuZDoge1xuICAgIC8qKiBzZWNvbmRhcnkgKi9cbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcixcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICB0ZXJ0aWFyeTogc3RyaW5nLFxuICAgIGJhc2U6IHN0cmluZ1xuICB9O1xuICB0ZXh0OiB7XG4gICAgZGVmYXVsdDogc3RyaW5nLFxuICAgIHByaW1hcnk6IHN0cmluZyxcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICBkaXNhYmxlZDogc3RyaW5nLFxuICAgIGhpbnQ6IHN0cmluZ1xuICB9O1xuICB0eXBvZ3JhcGh5OiBUeXBvZ3JhcGh5VmFyaWFibGVzO1xuICAvKiogY29sb3IgZm9yIGRpdmlkZXIgKi9cbiAgZGl2aWRlcjogc3RyaW5nO1xuICBzaGFkb3c6IHN0cmluZztcbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBzaGFkb3cgaW5zdGVhZCAqL1xuICBjb2xvclNoYWRvdz86IHN0cmluZztcbiAgcmFkaW86IHtcbiAgICAvKiogY29sb3IgZm9yIHJhZGlvOm91dGVyQ2lyY2xlICovXG4gICAgb3V0ZXJDaXJjbGU/OiBzdHJpbmc7XG4gICAgLyoqIEBkZXByZWNhdGVkIHVzZSBvdXRlckNpcmNsZSBpbnN0ZWFkICovXG4gICAgcmFkaW9PdXRlckNpcmNsZT86IHN0cmluZztcbiAgfTtcbiAgbWVudToge1xuICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lclxuICB9O1xuICBkcmF3ZXI6IHtcbiAgICAvKiogY29sb3IgZm9yIGRyYXdlcjpiYWNrZHJvcCAqL1xuICAgIGJhY2tkcm9wOiBzdHJpbmdcbiAgfTtcbiAgZmllbGQ6IHtcbiAgICBib3JkZXJDb2xvcjogc3RyaW5nXG4gICAgbGFiZWxDb2xvcjogc3RyaW5nXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgYmFzZT86IHtcbiAgICAgICAgcm9vdD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZpZWxkc2V0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgY29udGFpbmVyRm9jdXNlZD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGxhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcGxhY2Vob2xkZXI/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBpbnB1dD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZsb2F0aW5nTGFiZWw/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBwcmVmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBpbmZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHN1ZmZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGhpbnQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgfTtcbiAgICAgIFthcHBlYXJhbmNlTmFtZTogc3RyaW5nXToge1xuICAgICAgICByb290PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgY29udGFpbmVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmllbGRzZXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXJGb2N1c2VkPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgbGFiZWw/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBwbGFjZWhvbGRlcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGlucHV0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmxvYXRpbmdMYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHByZWZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGluZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgc3VmZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaGludD86IFN0eWxlQ29udGFpbmVyXG4gICAgICB9XG4gICAgfVxuICB9O1xuICBpY29uQnV0dG9uOiB7XG4gICAgc2l6ZTogc3RyaW5nXG4gIH07XG4gIGljb246IHtcbiAgICBmb250U2l6ZTogc3RyaW5nXG4gIH07XG4gIHpJbmRleDoge1xuICAgIHRvb2xiYXI6IG51bWJlclxuICAgIGRyYXdlcjogbnVtYmVyXG4gICAgb3ZlcmxheTogbnVtYmVyXG4gICAgW2tleTogc3RyaW5nXTogbnVtYmVyXG4gIH07XG4gIGRpcmVjdGlvbj86IERpcjtcbiAgYW5pbWF0aW9uczoge1xuICAgIGN1cnZlczoge1xuICAgICAgc3RhbmRhcmQ6IHN0cmluZ1xuICAgICAgZGVjZWxlcmF0aW9uOiBzdHJpbmdcbiAgICAgIGFjY2VsZXJhdGlvbjogc3RyaW5nXG4gICAgICBzaGFycDogc3RyaW5nXG4gICAgfSxcbiAgICBkdXJhdGlvbnM6IHtcbiAgICAgIGNvbXBsZXg6IG51bWJlclxuICAgICAgZW50ZXJpbmc6IG51bWJlclxuICAgICAgZXhpdGluZzogbnVtYmVyXG4gICAgfVxuICB9O1xuICByaXBwbGU6IFJpcHBsZVZhcmlhYmxlcztcbiAgYmFkZ2U6IHtcbiAgICByb290PzogU3R5bGVDb250YWluZXIsXG4gICAgcG9zaXRpb24/OiB7XG4gICAgICBbcG9zaXRpb25OYW1lOiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lclxuICAgIH1cbiAgfTtcbiAgY2hlY2tib3g6IENoZWNrYm94VmFyaWFibGVzO1xuICBzbmFja0JhcjogU25hY2tCYXJWYXJpYWJsZXM7XG4gIGJ1dHRvbjogQnV0dG9uVmFyaWFibGVzO1xuICB0b29sdGlwOiBUb29sdGlwVmFyaWFibGVzO1xufVxuXG5leHBvcnQgdHlwZSBUaGVtZVZhcmlhYmxlcyA9IEx5U3R5bGVVdGlscyAmIFRoZW1lQ29uZmlnO1xuZXhwb3J0IHR5cGUgUGFydGlhbFRoZW1lVmFyaWFibGVzID0gUGFydGlhbDxUaGVtZVZhcmlhYmxlcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFZhbCB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZUNvbG9yIHtcbiAgY29udHJhc3Q/OiBzdHJpbmc7XG4gIC8qKiBzaGFkb3cgY29sb3IgKi9cbiAgc2hhZG93Pzogc3RyaW5nO1xufVxuIiwiZXhwb3J0IGNsYXNzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgIGh0bWxGb250U2l6ZTogbnVtYmVyLFxuICAgIGZvbnRTaXplOiBudW1iZXI7XG4gIH07XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgWFNtYWxsOiBzdHJpbmcsXG4gICAgU21hbGw6IHN0cmluZyxcbiAgICBNZWRpdW06IHN0cmluZyxcbiAgICBMYXJnZTogc3RyaW5nLFxuICAgIFhMYXJnZTogc3RyaW5nLFxuXG4gICAgSGFuZHNldDogc3RyaW5nLFxuICAgIFRhYmxldDogc3RyaW5nLFxuICAgIFdlYjogc3RyaW5nLFxuXG4gICAgSGFuZHNldFBvcnRyYWl0OiBzdHJpbmcsXG4gICAgVGFibGV0UG9ydHJhaXQ6IHN0cmluZyxcbiAgICBXZWJQb3J0cmFpdDogc3RyaW5nLFxuXG4gICAgSGFuZHNldExhbmRzY2FwZTogc3RyaW5nLFxuICAgIFRhYmxldExhbmRzY2FwZTogc3RyaW5nLFxuICAgIFdlYkxhbmRzY2FwZTogc3RyaW5nLFxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9O1xuICBkaXJlY3Rpb246IERpcjtcbiAgcHhUb1JlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudHlwb2dyYXBoeS5mb250U2l6ZSAvIDE0O1xuICAgIHJldHVybiBgJHt2YWx1ZSAvIHRoaXMudHlwb2dyYXBoeS5odG1sRm9udFNpemUgKiBzaXplfXJlbWA7XG4gIH1cbiAgY29sb3JPZih2YWx1ZTogc3RyaW5nLCBvcHRpb25hbD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCB2YWx1ZSwgb3B0aW9uYWwpO1xuICB9XG4gIGdldEJyZWFrcG9pbnQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYEBtZWRpYSAke3RoaXMuYnJlYWtwb2ludHNba2V5XSB8fCBrZXl9YDtcbiAgfVxuXG4gIGdldERpcmVjdGlvbih2YWw6IERpckFsaWFzKSB7XG4gICAgaWYgKHZhbCA9PT0gRGlyQWxpYXMuc3RhcnQgfHwgdmFsID09PSBEaXJBbGlhcy5iZWZvcmUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH0gZWxzZSBpZiAodmFsID09PSBEaXJBbGlhcy5lbmQgfHwgdmFsID09PSBEaXJBbGlhcy5hZnRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBlbnVtIERpciB7XG4gIHJ0bCA9ICdydGwnLFxuICBsdHIgPSAnbHRyJ1xufVxuZXhwb3J0IGVudW0gRGlyQWxpYXMge1xuICAvKiogQGRlcHJlY2F0ZWQsIHVzZSBgYmVmb3JlYCBpbnN0ZWFkICovXG4gIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgLyoqIEBkZXByZWNhdGVkLCB1c2UgYGFmdGVyYCBpbnN0ZWFkICovXG4gIGVuZCA9ICdlbmQnLFxuICBiZWZvcmUgPSAnYmVmb3JlJyxcbiAgYWZ0ZXIgPSAnYWZ0ZXInXG59XG5leHBvcnQgZW51bSBEaXJQb3NpdGlvbiB7XG4gIGxlZnQgPSAnbGVmdCcsXG4gIHJpZ2h0ID0gJ3JpZ2h0J1xufVxuXG4vKipcbiAqIGdldCBjb2xvciBvZiBvYmplY3RcbiAqIEBwYXJhbSBvYmogb2JqZWN0XG4gKiBAcGFyYW0gcGF0aCBwYXRoXG4gKiBAcGFyYW0gb3B0aW9uYWwgZ2V0IG9wdGlvbmFsIHZhbHVlLCBpZiBub3QgZXhpc3QgcmV0dXJuIGRlZmF1bHQgaWYgbm90IGlzIHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IHN0cmluZ1tdIHwgc3RyaW5nLCBvcHRpb25hbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBvc2libGVPYiA9IG9ialtfcGF0aFtpXV07XG4gICAgaWYgKHBvc2libGVPYikge1xuICAgICAgb2JqID0gcG9zaWJsZU9iO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiogaWYgbm90IGV4aXN0ICovXG4gICAgICByZXR1cm4gcGF0aCBhcyBzdHJpbmc7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvYmogYXMgc3RyaW5nO1xuICB9IGVsc2UgaWYgKG9wdGlvbmFsKSB7XG4gICAgcmV0dXJuIG9ialtvcHRpb25hbF0gfHwgb2JqWydkZWZhdWx0J107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9ialsnZGVmYXVsdCddO1xuICB9XG4gIC8vIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYWNoTWVkaWEoc3RyOiBzdHJpbmcgfCBudW1iZXIsIGZuOiAoKHZhbDogc3RyaW5nLCBtZWRpYTogc3RyaW5nLCBpc01lZGlhOiBudW1iZXIpID0+IHZvaWQpKSB7XG4gIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHZhbHVlcyA9IHN0ci5zcGxpdCgvXFxzL2cpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB2YWxJdGVtID0gdmFsdWVzW2luZGV4XS5zcGxpdCgvXFxAL2cpO1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWxJdGVtLnNoaWZ0KCk7XG4gICAgICBjb25zdCBsZW4gPSB2YWxJdGVtLmxlbmd0aDtcbiAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdmFsSXRlbVtqXSwgdmFsSXRlbS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHVuZGVmaW5lZCwgbGVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm4uY2FsbCh1bmRlZmluZWQsIHN0ciwgdW5kZWZpbmVkLCAwKTtcbiAgfVxufVxuLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVT4odGFyZ2V0OiBULCBzb3VyY2U6IFUpOiBUICYgVTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVSwgVj4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWKTogVCAmIFUgJiBWO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWLCBXPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYsIHNvdXJjZTM6IFcpOiBUICYgVSAmIFYgJiBXO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQ6IG9iamVjdCwgLi4uc291cmNlczogYW55W10pOiBhbnk7XG5cbi8qKlxuICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSAuLi5zb3VyY2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHsgcmV0dXJuIHRhcmdldDsgfVxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7IE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KTsgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUUsIFRoZW1lVmFyaWFibGVzLCBMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVRoZW1lIHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgbWVkaWFTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaW1hcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHNlY29uZGFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgZmlyc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcmVhZG9ubHkgdGhlbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX3RoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lVmFyaWFibGVzPigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+PigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FKSB0aGVtZUNvbmZpZzogVGhlbWVDb25maWdbXSB8IFRoZW1lQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUykgZ2xvYmFsVmFyaWFibGVzOiBUaGVtZUNvbmZpZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAoIXRoZW1lQ29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xZX1RIRU1FIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwge1xuICAgICAgaWQ6ICdseScsXG4gICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0ID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnbHktcy1jJyk7XG4gICAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZXMuaXRlbShpbmRleCk7XG4gICAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5maXJzdEVsZW1lbnQgPSBfZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoZW1lQ29uZmlnKSkge1xuICAgICAgdGhlbWVDb25maWcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICAgIG1lcmdlRGVlcChpdGVtLCBnbG9iYWxWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkKGl0ZW0gYXMgYW55KTtcbiAgICAgICAgdGhpcy50aGVtZXMuYWRkKGl0ZW0ubmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICBtZXJnZURlZXAodGhlbWVDb25maWcsIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZCh0aGVtZUNvbmZpZyBhcyBhbnkpO1xuICAgICAgdGhpcy50aGVtZXMuYWRkKHRoZW1lQ29uZmlnLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbmV3IHRoZW1lXG4gICAqIEBwYXJhbSB0aGVtZTogVGhlbWVWYXJpYWJsZXNcbiAgICovXG4gIGFkZCh0aGVtZTogVGhlbWVWYXJpYWJsZXMpIHtcbiAgICB0aGlzLl90aGVtZU1hcC5zZXQodGhlbWUubmFtZSwgdGhlbWUpO1xuICAgIHRoaXMuX3N0eWxlTWFwLnNldCh0aGVtZS5uYW1lLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgZ2V0KG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl90aGVtZU1hcC5nZXQobmFtZSk7XG4gIH1cbiAgZ2V0U3R5bGVNYXAobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAob2xkQ2xhc3NuYW1lKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvbGRDbGFzc25hbWUpO1xuICAgIH1cbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuZXdDbGFzc25hbWUpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERpclBvc2l0aW9uIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5leHBvcnQgZW51bSBZUG9zaXRpb24ge1xuICBhYm92ZSA9ICdhYm92ZScsXG4gIGJlbG93ID0gJ2JlbG93J1xufVxuXG5leHBvcnQgZW51bSBYUG9zaXRpb24ge1xuICBiZWZvcmUgPSAnYmVmb3JlJyxcbiAgYWZ0ZXIgPSAnYWZ0ZXInLFxuICBsZWZ0ID0gJ2xlZnQnLFxuICByaWdodCA9ICdyaWdodCdcbn1cblxuZXhwb3J0IHR5cGUgUGxhY2VtZW50ID0gWFBvc2l0aW9uIHwgWVBvc2l0aW9uO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oXG4gIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICB4UG9zaXRpb246IFhQb3NpdGlvbixcbiAgeVBvc2l0aW9uOiBZUG9zaXRpb24sXG4gIG9yaWdpbjogRWxlbWVudCxcbiAgb3ZlcmxheUVsZW1lbnQ6IEVsZW1lbnQsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgb2Zmc2V0ID0gMCkge1xuXG4gIGNvbnN0IG9yaWdpblJlY3QgPSBvcmlnaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgY29uc3Qgb3ZlcmxheUVsZW1lbnRSZWN0ID0gb3ZlcmxheUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgaWYgKHhQb3NpdGlvbiAmJiB5UG9zaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBjYW4gbm90IHVzZSBcXGB4UG9zaXRpb25cXGAgYW5kIFxcYHlQb3NpdGlvblxcYCB0b2dldGhlciwgdXNlIG9ubHkgb25lIG9mIHRoZW0uYCk7XG4gIH1cbiAgaWYgKCh4UG9zaXRpb24gfHwgeVBvc2l0aW9uKSAmJiAhcGxhY2VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcXGBwbGFjZW1lbnRcXGAgaXMgcmVxdWlyZWQuYCk7XG4gIH1cbiAgbGV0IHggPSAwLFxuICAgICAgeSA9IDAsXG4gICAgICBveCA9ICdjZW50ZXInLFxuICAgICAgb3kgPSAnY2VudGVyJztcbiAgaWYgKHBsYWNlbWVudCB8fCB4UG9zaXRpb24gfHwgeVBvc2l0aW9uKSB7XG4gICAgaWYgKHBsYWNlbWVudCkge1xuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgIHggPSAob3JpZ2luUmVjdC53aWR0aCAtIG92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCkgLyAyO1xuICAgICAgICB5ID0gLW92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgLSBvZmZzZXQ7XG4gICAgICAgIG95ID0gJ2JvdHRvbSc7XG4gICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHggPSAob3JpZ2luUmVjdC53aWR0aCAtIG92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCkgLyAyO1xuICAgICAgICB5ID0gb3JpZ2luUmVjdC5oZWlnaHQgKyBvZmZzZXQ7XG4gICAgICAgIG95ID0gJ3RvcCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24ocGxhY2VtZW50IGFzIGFueSk7XG4gICAgICAgIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICB4ID0gLW92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCAtIG9mZnNldDtcbiAgICAgICAgICB5ID0gKG9yaWdpblJlY3QuaGVpZ2h0IC0gb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCkgLyAyO1xuICAgICAgICB9IGVsc2UgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgICBveCA9ICcwJSc7XG4gICAgICAgICAgeCA9IG9yaWdpblJlY3Qud2lkdGggKyBvZmZzZXQ7XG4gICAgICAgICAgeSA9IChvcmlnaW5SZWN0LmhlaWdodCAtIG92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4UG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGRpciA9IHRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbih4UG9zaXRpb24gYXMgYW55KTtcbiAgICAgIGlmIChkaXIgPT09IERpclBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgeCA9IDA7XG4gICAgICB9IGVsc2UgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ubGVmdCkge1xuICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgeCA9IG9yaWdpblJlY3Qud2lkdGggLSBvdmVybGF5RWxlbWVudFJlY3Qud2lkdGg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh5UG9zaXRpb24pIHtcbiAgICAgIGlmICh5UG9zaXRpb24gPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICB5ID0gMDtcbiAgICAgICAgb3kgPSAnMCUnO1xuICAgICAgfSBlbHNlIGlmICh5UG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB5ID0gb3JpZ2luUmVjdC5oZWlnaHQgLSBvdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICBveSA9ICcxMDAlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiBNYXRoLnJvdW5kKHgpLFxuICAgIHk6IE1hdGgucm91bmQoeSksXG4gICAgb3gsXG4gICAgb3lcbiAgfTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgSW5qZWN0LCBpc0Rldk1vZGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGlyQWxpYXMsIERpciB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcbmltcG9ydCB7IFlQb3NpdGlvbiB9IGZyb20gJy4uL3Bvc2l0aW9uL3Bvc2l0aW9uJztcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgJ0BnbG9iYWwnOiB7XG4gICAgJyosICo6YWZ0ZXIsICo6YmVmb3JlJzoge1xuICAgICAgJy13ZWJraXQtYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICctbW96LWJveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94J1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgUkVGX1JFR19FWFAgPSAvXFx7KFtcXHctXSspXFx9L2c7XG5cbmVudW0gVHlwZVN0eWxlIHtcbiAgTXVsdGlwbGUsXG4gIE9ubHlPbmVcbn1cblxuY29uc3QgU1RZTEVfTUFQNTogTWFwPGFueSwgU3R5bGVNYXA1PiA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZU1hcDUge1xuICBzdHlsZXM6IFN0eWxlc0ZuMiB8IFN0eWxlczI7XG4gIHR5cGU6IFR5cGVTdHlsZTtcbiAgcHJpb3JpdHk6IG51bWJlcjtcbiAgY3NzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmc7XG4gIC8qKiBnbG9iYWwgdGhlbWUgKi9cbiAgY2xhc3Nlcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIHJlcXVpcmVVcGRhdGUgKi9cbiAgY2xhc3Nlc1dpdGhUaGVtZT86IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgICB9IHwgc3RyaW5nXG4gIH07XG4gIC8qKiBPbmx5IGZvciBzdHlsZXMgb2YgVHlwZVN0eWxlLm9uZSAqL1xuICBwYXJlbnRTdHlsZT86IFN0eWxlcztcbiAgcmVxdWlyZVVwZGF0ZT86IGJvb2xlYW47XG4gIGlkOiBzdHJpbmc7XG59XG5cbmxldCBuZXh0Q2xhc3NJZCA9IDA7XG5sZXQgbmV4dEtleUZyYW1lSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNJbkRvY3VtZW50IHtcbiAgc3R5bGVzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXTogTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD5cbiAgfSA9IHt9O1xuICBzdHlsZUNvbnRhaW5lcnMgPSBuZXcgTWFwPG51bWJlciwgSFRNTEVsZW1lbnQ+KCk7XG4gIHN0eWxlRWxlbWVudEdsb2JhbE1hcCA9IG5ldyBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PigpO1xufVxuXG5jb25zdCBUSEVNRV9NQVAgPSBuZXcgTWFwPHN0cmluZywge1xuICBiYXNlOiBzdHJpbmdcbiAgY2hhbmdlOiBzdHJpbmcgfCBudWxsXG59PigpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lVmFyaWFibGVzO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG4gIGluaXRpYWxUaGVtZTogc3RyaW5nO1xuICBlbGVtZW50czogTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD47XG4gIF9lbGVtZW50c01hcCA9IG5ldyBNYXA8YW55LCBIVE1MU3R5bGVFbGVtZW50PigpO1xuICBwcml2YXRlIHRoZW1lTWFwID0gVEhFTUVfTUFQO1xuICAvKiogc3NyIG9yIGhtciAqL1xuICBwcml2YXRlIGlzRGV2T3JTZXJ2ZXIgPSBpc0Rldk1vZGUoKSB8fCAhUGxhdGZvcm0uaXNCcm93c2VyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVzSW5Eb2N1bWVudDogU3R5bGVzSW5Eb2N1bWVudCxcbiAgICBwdWJsaWMgY29yZTogQ29yZVRoZW1lLFxuICAgIEBJbmplY3QoTFlfVEhFTUVfTkFNRSkgdGhlbWVOYW1lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVOYW1lKTtcbiAgICAgIHRoaXMuX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGVtZU5hbWUgaW4gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1xuICAgICAgPyB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV1cbiAgICAgIDogdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdID0gbmV3IE1hcCgpO1xuICAgICAgaWYgKCF0aGlzLmluaXRpYWxUaGVtZSkge1xuICAgICAgICB0aGlzLmluaXRpYWxUaGVtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudGhlbWVNYXAuaGFzKHRoaXMuaW5pdGlhbFRoZW1lKSkge1xuICAgICAgICB0aGlzLnRoZW1lTWFwLnNldCh0aGlzLmluaXRpYWxUaGVtZSwge1xuICAgICAgICAgIGJhc2U6IHRoaXMuaW5pdGlhbFRoZW1lLFxuICAgICAgICAgIGNoYW5nZTogbnVsbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FkZERlZmF1bHRTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICogQHBhcmFtIHBhcmVudFN0eWxlXG4gICAqL1xuICBhZGRTdHlsZShpZDogc3RyaW5nLCBzdHlsZTogU3R5bGVDb250YWluZXIgfCAoKHRoZW1lKSA9PiBTdHlsZUNvbnRhaW5lcikgfCAoKHRoZW1lKSA9PiBzdHJpbmcpIHwgc3RyaW5nLCBlbD86IGFueSwgaW5zdGFuY2U/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyLCBwYXJlbnRTdHlsZT86IFN0eWxlcykge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZSBhcyBhbnksIGlkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBwYXJlbnRTdHlsZSkgYXMgc3RyaW5nO1xuICAgIGlmIChuZXdDbGFzcyA9PT0gaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgaWYgKGVsKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0NsYXNzID09PSBvbGRDbGFzcykge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgaWYgKG5hbSAhPT0gdGhpcy5jb25maWcubmFtZSkge1xuICAgICAgdGhpcy50aGVtZU1hcC5nZXQodGhpcy5pbml0aWFsVGhlbWUpLmNoYW5nZSA9IG5hbTtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldChuYW0pO1xuICAgICAgdGhpcy5fdXBkYXRlQWxsU3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRvZ2dsZSByaWdodC10by1sZWZ0L2xlZnQtdG8tcmlnaHQgKi9cbiAgdG9nZ2xlRGlyZWN0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmNvbmZpZy5kaXJlY3Rpb247XG4gICAgdGhpcy5jb25maWcuZGlyZWN0aW9uID0gY3VycmVudCA9PT0gRGlyLmx0ciA/IERpci5ydGwgOiBEaXIubHRyO1xuICAgIHRoaXMuX3VwZGF0ZUFsbFN0eWxlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQWxsU3R5bGVzKCkge1xuICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoXywga2V5KSA9PiB7XG4gICAgICBjb25zdCBzdHlsZURhdGEgPSBTVFlMRV9NQVA1LmdldChrZXkpO1xuICAgICAgaWYgKHN0eWxlRGF0YS5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVEYXRhLnN0eWxlcywgc3R5bGVEYXRhLmlkLCBzdHlsZURhdGEucHJpb3JpdHksIHN0eWxlRGF0YS50eXBlLCB0cnVlLCBzdHlsZURhdGEucGFyZW50U3R5bGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbXBsZSBzdHlsZVxuICAgKiByZXR1cm4gY2xhc3NOYW1lXG4gICAqIEBwYXJhbSBpZCBpZCBvZiBzdHlsZVxuICAgKiBAcGFyYW0gY3NzIHN0eWxlIG9iamVjdCBvciBzdHJpbmdcbiAgICogQHBhcmFtIHByaW9yaXR5IHN0eWxlIHByaW9yaXR5XG4gICAqL1xuICBhZGRTaW1wbGVTdHlsZShpZDogc3RyaW5nLCBjc3M6IFN0eWxlQ29udGFpbmVyIHwgKCh0aGVtZSkgPT4gU3R5bGVDb250YWluZXIpLCBwcmlvcml0eT86IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoY3NzIGFzIGFueSwgaWQsIHByaW9yaXR5LCBUeXBlU3R5bGUuT25seU9uZSwgZmFsc2UpIGFzIHN0cmluZztcbiAgfVxuICBwcml2YXRlIF9hZGREZWZhdWx0U3R5bGVzKCkge1xuICAgIHRoaXMuYWRkU3R5bGVTaGVldChkZWZhdWx0U3R5bGVzKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBwcmlvcml0eSBwcmlvcml0eSBmb3Igc3R5bGVcbiAgICovXG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgU3R5bGVzLCBwcmlvcml0eT86IG51bWJlcik6IE9ubHlDbGFzc2VzPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIG51bGwsIHByaW9yaXR5LCBUeXBlU3R5bGUuTXVsdGlwbGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVDb250ZW50MihcbiAgICBzdHlsZXM6IFN0eWxlcyxcbiAgICBpZDogc3RyaW5nLFxuICAgIHByaW9yaXR5OiBudW1iZXIsXG4gICAgdHlwZTogVHlwZVN0eWxlLFxuICAgIGZvckNoYW5nZVRoZW1lPzogYm9vbGVhbixcbiAgICBwYXJlbnRTdHlsZT86IFN0eWxlc1xuICApIHtcbiAgICBjb25zdCBuZXdJZCA9IGlkIGFzIHN0cmluZyB8fCBzdHlsZXM7XG4gICAgbGV0IGlzTmV3U3R5bGU6IGJvb2xlYW47XG4gICAgaWYgKCFTVFlMRV9NQVA1LmhhcyhuZXdJZCkpIHtcbiAgICAgIGlzTmV3U3R5bGUgPSB0cnVlO1xuICAgICAgU1RZTEVfTUFQNS5zZXQobmV3SWQsIHtcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgY3NzOiB7fSxcbiAgICAgICAgaWQsXG4gICAgICAgIHBhcmVudFN0eWxlXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVNYXAgPSBTVFlMRV9NQVA1LmdldChuZXdJZCk7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gdGhpcy5pbml0aWFsVGhlbWU7XG4gICAgY29uc3QgaXNDcmVhdGVkID0gaXNOZXdTdHlsZSB8fCAhKHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhlbWVOYW1lXSk7XG4gICAgaWYgKGlzQ3JlYXRlZCB8fCBmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgLyoqIGNyZWF0ZSBuZXcgc3R5bGUgZm9yIG5ldyB0aGVtZSAqL1xuICAgICAgbGV0IGNzcztcbiAgICAgIGNvbnN0IHRoZW1lTWFwID0gdGhpcy50aGVtZU1hcC5nZXQodGhpcy5pbml0aWFsVGhlbWUpO1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU1hcC5jaGFuZ2UgfHwgdGhlbWVOYW1lKTtcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUgPSB0cnVlO1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVNYXAsIHN0eWxlcyhjb25maWcpLCB0aGVtZU5hbWUsIGlkLCB0eXBlLCBjb25maWcpO1xuICAgICAgICBpZiAoIWZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgICAgc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV0gPSBjc3M7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBjcmVhdGUgYSBuZXcgaWQgZm9yIHN0eWxlIHRoYXQgZG9lcyBub3QgPC08cmVxdWlyZT4tPiBjaGFuZ2VzICovXG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZU1hcCwgc3R5bGVzLCB0aGVtZU5hbWUsIG5ld0lkIGFzIHN0cmluZywgdHlwZSwgY29uZmlnKTtcbiAgICAgICAgc3R5bGVNYXAuY3NzID0gY3NzO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgbmV3RWwgPSB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoY3NzKTtcbiAgICAgICAgaWYgKHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGZvciB3aGVuIGEgdGhlbWUgY2hhbmdlc1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMuc2V0KG5ld0lkLCBuZXdFbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Rldk9yU2VydmVyKSB7XG4gICAgICAgICAgLy8gaW4gZGV2IG1vZGUgb3Igc2VydmVyIGl0IGlzIG5vdCBuZWNlc3NhcnlcbiAgICAgICAgICAvLyBzaW5jZSB0aGUgc3R5bGVzIHdpbGwgbm90IGNoYW5nZVxuICAgICAgICAgIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZUVsZW1lbnRHbG9iYWxNYXAuc2V0KG5ld0lkLCBuZXdFbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgbmV3RWwpO1xuICAgICAgfVxuICAgICAgaWYgKGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50cy5nZXQobmV3SWQpO1xuICAgICAgICBlbC5pbm5lclRleHQgPSBjc3M7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRGV2T3JTZXJ2ZXIpIHtcbiAgICAgIC8qKlxuICAgICAgICogYXBwZW5kIGNoaWxkIHN0eWxlIGlmIG5vdCBleGlzdCBpbiBkb21cbiAgICAgICAqIGZvciBzc3Igb3IgaG1yXG4gICAgICAgKi9cbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMobmV3SWQpKSB7XG4gICAgICAgIGNvbnN0IF9jc3MgPSBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSB8fCBzdHlsZU1hcC5jc3M7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZUVsZW1lbnRHbG9iYWxNYXA7XG4gICAgICAgIGlmIChzdHlsZU1hcC5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgdGhpcy5lbGVtZW50cy5nZXQobmV3SWQpKTtcbiAgICAgICAgfSBlbHNlIGlmICghbWFwLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgICBtYXAuc2V0KG5ld0lkLCB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoX2NzcykpO1xuICAgICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIG1hcC5nZXQobmV3SWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkgPSAwKSB7XG4gICAgY29uc3QgeyBzdHlsZUNvbnRhaW5lcnMgfSA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudDtcbiAgICBpZiAoIXN0eWxlQ29udGFpbmVycy5oYXMocHJpb3JpdHkpKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KGBseS1zLWNgKTtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAncHJpb3JpdHknLCBgJHtwcmlvcml0eX1gKTtcbiAgICAgIH1cbiAgICAgIHN0eWxlQ29udGFpbmVycy5zZXQocHJpb3JpdHksIGVsKTtcbiAgICAgIGlmIChzdHlsZUNvbnRhaW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2RvY3VtZW50LmJvZHksIGVsLCB0aGlzLl9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgICB9XG4gICAgY29uc3QgcmVmQ2hpbGQgPSB0aGlzLmZpbmROb2RlKHByaW9yaXR5KTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2RvY3VtZW50LmJvZHksIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpLCByZWZDaGlsZCk7XG4gICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kTm9kZShpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBzdHlsZUNvbnRhaW5lcnMgfSA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudDtcbiAgICBjb25zdCBrZXlzID0gKEFycmF5LmZyb20oc3R5bGVDb250YWluZXJzLmtleXMoKSkpLnNvcnQoKTtcbiAgICBjb25zdCBrZXkgPSBrZXlzLmZpbmQoXyA9PiBpbmRleCA8IF8pO1xuICAgIHJldHVybiAoa2V5ICE9PSB1bmRlZmluZWQgJiYgc3R5bGVDb250YWluZXJzLmdldChrZXkpKSB8fCB0aGlzLmNvcmUuZmlyc3RFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxlbWVudFN0eWxlKGNzczogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZVRleHQoY3NzKTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZVRleHQpO1xuICAgIHJldHVybiBzdHlsZUVsZW1lbnQ7XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkge1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVzMiB7XG4gIC8qKiBQcmVmaXggbmFtZSAqL1xuICAkbmFtZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXIgfCBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTdHlsZXNGbjIgPSAoVCkgPT4gU3R5bGVzMjtcblxuZXhwb3J0IHR5cGUgU3R5bGVzID0gU3R5bGVzRm4yIHwgU3R5bGVzMjtcblxuZXhwb3J0IGludGVyZmFjZSBLZXlmcmFtZXMge1xuICBbbmFtZTogc3RyaW5nXToge1xuICAgIFtwZXJjZW50OiBudW1iZXJdOiBTdHlsZUNvbnRhaW5lclxuICB9O1xufVxuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoXG4gIHN0eWxlTWFwOiBTdHlsZU1hcDUsXG4gIHN0eWxlczogU3R5bGVzMixcbiAgdGhlbWVOYW1lOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcsXG4gIHR5cGVTdHlsZTogVHlwZVN0eWxlLFxuICB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXNcbikge1xuICAvLyBmb3Igc3R5bGVzIHR5cGUgc3RyaW5nXG4gIGlmICh0eXBlU3R5bGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lKSB7XG4gICAgLy8gdXNlIGN1cnJlbnQgY2xhc3Mgb3Igc2V0IG5ld1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN0eWxlTWFwLnJlcXVpcmVVcGRhdGVcbiAgICA/IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSBjcmVhdGVOZXh0Q2xhc3NJZCgpKVxuICAgIDogc3R5bGVNYXAuY2xhc3Nlc1xuICAgICAgPyBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA6IHN0eWxlTWFwLmNsYXNzZXMgPSBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuICAgIGxldCBydWxlczogc3RyaW5nO1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgcnVsZXMgPSBgLiR7Y2xhc3NOYW1lfXske3N0eWxlc319YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcnVsZXMgPSBzdHlsZVRvU3RyaW5nKGlkLCBudWxsLCBzdHlsZXMsIHRoZW1lVmFyaWFibGVzLCBjbGFzc05hbWUgYXMgYW55KTtcbiAgICB9XG4gICAgaWYgKHN0eWxlTWFwLnBhcmVudFN0eWxlKSB7XG4gICAgICBjb25zdCBzdHlsZU1hcE9mUGFyZW50U3R5bGUgPSBTVFlMRV9NQVA1LmdldChzdHlsZU1hcC5wYXJlbnRTdHlsZSk7XG4gICAgICByZXR1cm4gcmVwbGFjZVJlZnMocnVsZXMsIHN0eWxlTWFwT2ZQYXJlbnRTdHlsZVt0aGVtZU5hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG4gIC8vIGZvciBtdWx0aXBsZXMgc3R5bGVzXG4gIGNvbnN0IGNsYXNzZXNNYXAgPSBzdHlsZU1hcFt0aGVtZU5hbWVdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVdID0ge30pO1xuICBsZXQgY29udGVudCA9ICcnO1xuICBjb25zdCBuYW1lID0gc3R5bGVzLiRuYW1lID8gYCR7c3R5bGVzLiRuYW1lfS1gIDogJyc7XG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICAgIGlmIChrZXkgPT09ICcka2V5ZnJhbWVzJykge1xuICAgICAgICBjb250ZW50ICs9IGtleWZyYW1lc1RvU3RyaW5nKG5hbWUsIGNsYXNzZXNNYXAsIHZhbHVlIGFzIEtleWZyYW1lcywgdGhlbWVWYXJpYWJsZXMpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIC8vIHNldCBuZXcgaWQgaWYgbm90IGV4aXN0XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc05hbWUgPSBrZXkgaW4gY2xhc3Nlc01hcFxuICAgICAgICA/IGNsYXNzZXNNYXBba2V5XVxuICAgICAgICA6IGNsYXNzZXNNYXBba2V5XSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgeS0ke25hbWV9JHtrZXl9LSR7Y3JlYXRlTmV4dENsYXNzSWQoKX1gKSA6IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZVRvU3RyaW5nKGtleSwgc3R5bGVzLiRuYW1lLCB2YWx1ZSBhcyBTdHlsZXMyLCB0aGVtZVZhcmlhYmxlcywgY3VycmVudENsYXNzTmFtZSk7XG4gICAgICAgIGNvbnRlbnQgKz0gc3R5bGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXBsYWNlUmVmcyhjb250ZW50LCBjbGFzc2VzTWFwKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVJlZnMoc3RyOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVGX1JFR19FWFAsIChtYXRjaCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBkYXRhW3Rva2VuXTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gYC4ke2RhdGFbdG9rZW5dfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhW2BAw5DCsy4tPi0ke3Rva2VufWBdO1xuICAgIH1cbiAgfVxuICApO1xufVxuXG4vKipcbiAqIHtjb2xvcjoncmVkJ30gdG8gLmNsYXNzTmFtZXtjb2xvcjogcmVkfVxuICovXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKGtleTogc3RyaW5nLCAkbmFtZTogc3RyaW5nLCBvYjogT2JqZWN0LCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIGN1cnJlbnRLZXk6IHN0cmluZywgcGFyZW50S2V5Pzogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBzdWJDb250ZW50ID0gJyc7XG4gIGxldCBrZXlBbmRWYWx1ZSA9ICcnO1xuICBsZXQgbmV3S2V5O1xuICBpZiAocGFyZW50S2V5KSB7XG4gICAgaWYgKGN1cnJlbnRLZXkuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgICAgbmV3S2V5ID0gY3VycmVudEtleS5yZXBsYWNlKC8mL2csIHBhcmVudEtleSk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50S2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICBuZXdLZXkgPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0tleSA9IGAke3BhcmVudEtleX0gJHtjdXJyZW50S2V5fWA7XG4gICAgfVxuICB9IGVsc2UgaWYgKGtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgbmV3S2V5ID0ga2V5O1xuICB9IGVsc2Uge1xuICAgIG5ld0tleSA9IGAuJHtjdXJyZW50S2V5fWA7XG4gIH1cbiAgZm9yIChjb25zdCBzdHlsZUtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBvYltzdHlsZUtleV07XG4gICAgICAvLyBPbWl0IHN0eWxlIHdpdGggdmFsdWUgbnVsbFxuICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAvLyBDaGVjayBpZiBpcyBPYmplY3QgbGl0ZXJhbFxuICAgICAgICBpZiAoZWxlbWVudC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgc3ViQ29udGVudCArPSBzdHlsZVRvU3RyaW5nKGtleSwgJG5hbWUsIGVsZW1lbnQgYXMgU3R5bGVzMiwgdGhlbWVWYXJpYWJsZXMsIHN0eWxlS2V5LCBuZXdLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGtleUFuZFZhbHVlICs9IGNvbnZlcnRUb1N0eWxlVmFsdWUoc3R5bGVLZXksIGVsZW1lbnQsIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoa2V5QW5kVmFsdWUpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGxldCBsaW4gPSAnXFxuXFxuJztcbiAgICAgIGlmICgkbmFtZSkge1xuICAgICAgICBsaW4gKz0gYC8qKiBTdHlsZSBTaGVldCBuYW1lOiAkeyRuYW1lfSAqL1xcbmA7XG4gICAgICB9XG4gICAgICBsaW4gKz0gYC8qKiBTdHlsZSBLZXk6ICR7a2V5fSAqL1xcbmA7XG4gICAgICBjb250ZW50ICs9IGAke2xpbn1gO1xuICAgIH1cbiAgICBpZiAobmV3S2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICBjb250ZW50ICs9IGAke25ld0tleX1gO1xuICAgICAga2V5QW5kVmFsdWUgPSBgJHtwYXJlbnRLZXl9eyR7a2V5QW5kVmFsdWV9fWA7XG4gICAgfSBlbHNlIGlmIChwYXJlbnRLZXkgJiYgcGFyZW50S2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ICs9IGAke25ld0tleX1gO1xuICAgIH1cbiAgICBjb250ZW50ICs9IGB7JHtrZXlBbmRWYWx1ZX19YDtcbiAgfVxuICByZXR1cm4gY29udGVudCArIHN1YkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1N0eWxlVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSwgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGNvbnN0IG5ld1N0eWxlS2V5ID0gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZUNhY2hlKGtleSwgdGhlbWVWYXJpYWJsZXMpO1xuICBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgbGV0IGxpbiA9ICcnO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxpbiArPSBgJHtuZXdTdHlsZUtleX06JHt2YWx1ZVtpbmRleF19O2A7XG4gICAgfVxuICAgIHJldHVybiBsaW47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke25ld1N0eWxlS2V5fToke3ZhbHVlfTtgO1xuICB9XG59XG5cbmZ1bmN0aW9uIGtleWZyYW1lc1RvU3RyaW5nKHN0eWxlTmFtZTogc3RyaW5nLCBrZXlzTWFwOiBvYmplY3QsIGtleWZyYW1lczogS2V5ZnJhbWVzLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcblxuICBmb3IgKGNvbnN0IG5hbWUgaW4ga2V5ZnJhbWVzKSB7XG4gICAgaWYgKGtleWZyYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgY29uc3Qga2V5ZnJhbWUgPSBrZXlmcmFtZXNbbmFtZV07XG4gICAgICAvLyBTb21ldGltZXMgdGhlIG5hbWUgb2YgYSBjbGFzcyBjYW4gYmUgdGhlIHNhbWUgYXMgdGhlIG5hbWUgb2YgYSBrZXlmcmFtZSxcbiAgICAgIC8vIHNvIHdlIGFkZCBhIGNoYXJhY3RlciB0byBiZSBkaWZmZXJlbnRcbiAgICAgIGNvbnN0IG5ld1VuaXF1ZU5hbWUgPSBgQMOQwrMuLT4tJHtuYW1lfWA7XG4gICAgICAvLyBzZXQgbmV3IGlkIGlmIG5vdCBleGlzdFxuICAgICAgY29uc3QgbmV3TmFtZSA9IG5ld1VuaXF1ZU5hbWUgaW4ga2V5c01hcFxuICAgICAgPyBrZXlzTWFwW25ld1VuaXF1ZU5hbWVdXG4gICAgICA6IGtleXNNYXBbbmV3VW5pcXVlTmFtZV0gPSBpc0Rldk1vZGUoKSA/IHRvQ2xhc3NOYW1lVmFsaWQoYCR7c3R5bGVOYW1lfSR7bmFtZX0tJHtjcmVhdGVOZXh0S2V5ZnJhbWVJZCgpfS12YCkgOiBjcmVhdGVOZXh0S2V5ZnJhbWVJZCgpO1xuICAgICAgY29udGVudCArPSBgQGtleWZyYW1lcyAke25ld05hbWV9e2A7XG4gICAgICBmb3IgKGNvbnN0IHBlcmNlbnQgaW4ga2V5ZnJhbWUpIHtcbiAgICAgICAgaWYgKGtleWZyYW1lLmhhc093blByb3BlcnR5KHBlcmNlbnQpKSB7XG4gICAgICAgICAgY29udGVudCArPSBgJHtwZXJjZW50fSV7YDtcbiAgICAgICAgICBjb25zdCBzdHlsZXMgPSBrZXlmcmFtZVtwZXJjZW50XTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICAgICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICBjb25zdCB2YWwgPSBzdHlsZXNba2V5XTtcbiAgICAgICAgICAgICAgY29udGVudCArPSBjb252ZXJ0VG9TdHlsZVZhbHVlKGtleSwgdmFsIGFzIHN0cmluZyB8IHN0cmluZ1tdLCB0aGVtZVZhcmlhYmxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRlbnQgKz0gYH1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGB9YDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5EZXByZWNhdGVkS2V5U3R5bGUoc3RyOiBzdHJpbmcsIGtleTogc3RyaW5nLCB0bzogc3RyaW5nKSB7XG4gIGNvbnNvbGUud2FybihgU3R5bGUga2V5IFxcYCR7a2V5fVxcYCBkZXByZWNhdGVkIGZvciBcXGAke3N0cn1cXGAsIGNoYW5nZSBcXGAke2tleX1cXGAgdG8gXFxgJHt0b31cXGBcXG5gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGUoc3RyOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBjb25zdCBoeXBoZW5DYXNlID0gdG9IeXBoZW5DYXNlKHN0cik7XG4gIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuc3RhcnQpICE9PSAtMSkge1xuICAgIHdhcm5EZXByZWNhdGVkS2V5U3R5bGUoc3RyLCBEaXJBbGlhcy5zdGFydCwgRGlyQWxpYXMuYmVmb3JlKTtcbiAgICByZXR1cm4gZGlyQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuc3RhcnQpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5lbmQpICE9PSAtMSkge1xuICAgIHdhcm5EZXByZWNhdGVkS2V5U3R5bGUoc3RyLCBEaXJBbGlhcy5lbmQsIERpckFsaWFzLmFmdGVyKTtcbiAgICByZXR1cm4gZGlyQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuZW5kKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuYmVmb3JlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZGlyQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuYmVmb3JlKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuYWZ0ZXIpICE9PSAtMSkge1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5hZnRlcik7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKFlQb3NpdGlvbi5hYm92ZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbkNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIFlQb3NpdGlvbi5hYm92ZSwgVE9QKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoWVBvc2l0aW9uLmJlbG93KSAhPT0gLTEpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgWVBvc2l0aW9uLmJlbG93LCBCT1RUT00pO1xuICB9XG4gIHJldHVybiBoeXBoZW5DYXNlO1xufVxuXG5mdW5jdGlvbiB0b0NsYXNzTmFtZVZhbGlkKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IHMgPSBzdHIucmVwbGFjZSgvXlswLTldfFteXFx3XFwtXS9nLCBfID0+IHtcbiAgICByZXR1cm4gYF8ke18uY2hhckNvZGVBdCgwKX1gO1xuICB9KTtcbiAgcmV0dXJuIHRvSHlwaGVuQ2FzZShzKTtcbn1cblxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChnKSA9PiBgLSR7Z1swXS50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlQ2FjaGUoc3RyOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyk6IHN0cmluZyB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIHJldHVybiBzdHIgaW4gbWFwXG4gID8gbWFwW3N0cl1cbiAgOiBtYXBbc3RyXSA9IGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGUoc3RyLCB0aGVtZVZhcmlhYmxlcyk7XG59XG5cbmNvbnN0IGlnbm9yZUNTU0tFWSA9IHtcbiAgJ2JyZWFrLWFmdGVyJzogJ2JyZWFrLWFmdGVyJyxcbiAgJ2JyZWFrLWJlZm9yZSc6ICdicmVhay1iZWZvcmUnLFxuICAncGFnZS1icmVhay1hZnRlcic6ICdwYWdlLWJyZWFrLWFmdGVyJyxcbiAgJ3BhZ2UtYnJlYWstYmVmb3JlJzogJ3BhZ2UtYnJlYWstYmVmb3JlJ1xufTtcblxuY29uc3QgU1RZTEVfS0VZU19NQVAgPSB7XG4gIHJ0bDoge1xuICAgIC4uLmlnbm9yZUNTU0tFWVxuICB9LFxuICBsdHI6IHtcbiAgICAuLi5pZ25vcmVDU1NLRVlcbiAgfVxufTtcblxuY29uc3QgQk9UVE9NID0gJ2JvdHRvbSc7XG5jb25zdCBUT1AgPSAndG9wJztcblxuZnVuY3Rpb24gZGlyQ2FjaGUob3JpZ2luYWwsIHZhbDogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIGRpckFsaWFzOiBEaXJBbGlhcykge1xuICBjb25zdCBtYXAgPSBTVFlMRV9LRVlTX01BUFt0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb25dO1xuICAvLyBSZXBsYWNlIGluIG9yaWdpbmFsLCBmb3IgZG8gbm90IHJlcGVhdCB0aGlzIGFnYWluXG4gIHJldHVybiBtYXBbb3JpZ2luYWxdID0gdmFsLnJlcGxhY2UoZGlyQWxpYXMsIHRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbihkaXJBbGlhcykpO1xufVxuXG5mdW5jdGlvbiBZUG9zaXRpb25DYWNoZShvcmlnaW5hbCwgdmFsOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgcG9zOiBZUG9zaXRpb24sIHRvOiAndG9wJyB8ICdib3R0b20nKSB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIC8vIFJlcGxhY2UgaW4gb3JpZ2luYWwsIGZvciBkbyBub3QgcmVwZWF0IHRoaXMgYWdhaW5cbiAgcmV0dXJuIG1hcFtvcmlnaW5hbF0gPSB2YWwucmVwbGFjZShwb3MsIHRvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5leHRDbGFzc0lkKCkge1xuICByZXR1cm4gYGkkeyhuZXh0Q2xhc3NJZCsrKS50b1N0cmluZygzNil9YDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU5leHRLZXlmcmFtZUlkKCkge1xuICByZXR1cm4gYGskeyhuZXh0S2V5RnJhbWVJZCsrKS50b1N0cmluZygzNil9YDtcbn1cblxudHlwZSBPbmx5Q2xhc3NlczxUPiA9IFJlY29yZDwoXG4gIEV4Y2x1ZGU8KFQgZXh0ZW5kcyAoKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID8gKGtleW9mIFJldHVyblR5cGU8VD4pIDoga2V5b2YgVCksXG4gICckbmFtZScgfCAnJHNoZWV0JyB8ICcka2V5ZnJhbWVzJz5cbiksIHN0cmluZz47XG5cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPbkRlc3Ryb3ksIE5nTW9kdWxlLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEtleUF0dHJpYnV0ZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfbmdUcmFuc2NsdWRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuZ1RyYW5zY2x1ZGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IHRlbXBsYXRlUmVmO1xuICAgICAgdGhpcy5fdmlld1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uZ1RyYW5zY2x1ZGUgPSBudWxsO1xuICAgICAgdGhpcy5fdmlld1JlZi5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl92aWV3UmVmLnJlbW92ZSgpO1xuICB9XG59XG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVNb2R1bGUge1xuXG59XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KTogSFRNTEVsZW1lbnQge1xuICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYgPyBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHNoYWRvd0J1aWxkZXIgfSBmcm9tICcuLi9zaGFkb3cnO1xuaW1wb3J0IHsgQ2FuQ29sb3IgfSBmcm9tICcuL2NvbG9yJztcbmltcG9ydCB7IENhbkJnIH0gZnJvbSAnLi9iZyc7XG5pbXBvcnQgeyBDYW5EaXNhYmxlIH0gZnJvbSAnLi9kaXNhYmxlZCc7XG5pbXBvcnQgeyBDYW5SYWlzZWQgfSBmcm9tICcuL3JhaXNlZCc7XG5pbXBvcnQgeyBDYW5FbGV2YXRpb24gfSBmcm9tICcuL2VsZXZhdGlvbic7XG5pbXBvcnQgeyBDYW5PdXRsaW5lZCB9IGZyb20gJy4vb3V0bGluZWQnO1xuaW1wb3J0IHsgQ2FuU2hhZG93Q29sb3IgfSBmcm9tICcuL3NoYWRvdy1jb2xvcic7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldE5hdGl2ZUVsZW1lbnQgfSBmcm9tICcuLi9taW5pbWFsL2NvbW1vbic7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWlyZVBhcmFtc1N0eWxlVXBkYXRlciB7XG4gIF90aGVtZTogTHlUaGVtZTI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuU3R5bGVVcGRhdGVyIHtcbiAgX3RoZW1lOiBMeVRoZW1lMjtcbiAgdXBkYXRlU3R5bGU6IChlbGVtZW50OiBFbGVtZW50UmVmIHwgRWxlbWVudCkgPT4gdm9pZDtcbiAgc2V0QXV0b0NvbnRyYXN0OiAoKSA9PiB2b2lkO1xufVxuZXhwb3J0IHR5cGUgQ2FuU3R5bGVVcGRhdGVyQ3RvciA9IENvbnN0cnVjdG9yPFJlcXVpcmVQYXJhbXNTdHlsZVVwZGF0ZXIgJiBQYXJ0aWFsPENhbkNvbG9yICYgQ2FuQmcgJiBDYW5EaXNhYmxlICYgQ2FuUmFpc2VkICYgQ2FuRWxldmF0aW9uICYgQ2FuT3V0bGluZWQgJiBDYW5TaGFkb3dDb2xvcj4+O1xuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5TdHlsZVVwZGF0ZXI8VCBleHRlbmRzIENhblN0eWxlVXBkYXRlckN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5TdHlsZVVwZGF0ZXI+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9jbGFzc05hbWVBbm9ueW1vdXM6IHN0cmluZztcbiAgICBfYXV0b0NvbnRyYXN0OiBib29sZWFuO1xuICAgIHNldEF1dG9Db250cmFzdCgpIHtcbiAgICAgIHRoaXMuX2F1dG9Db250cmFzdCA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZVN0eWxlKGVsZW1lbnQ6IEVsZW1lbnRSZWY8YW55PiB8IEhUTUxFbGVtZW50KSB7XG4gICAgICBjb25zdCBfX2JnID0gdGhpcy5iZztcbiAgICAgIGNvbnN0IF9fY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgY29uc3QgX19yYWlzZWQgPSB0aGlzLnJhaXNlZDtcbiAgICAgIGNvbnN0IF9fZWxldmF0aW9uID0gdGhpcy5lbGV2YXRpb247XG4gICAgICBjb25zdCBfX2Rpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICAgIGNvbnN0IF9fb3V0bGluZWQgPSB0aGlzLm91dGxpbmVkO1xuICAgICAgY29uc3QgX19zaGFkb3dDb2xvciA9IHRoaXMuc2hhZG93Q29sb3I7XG4gICAgICBjb25zdCBfX2lzQ29udHJhc3QgPSB0aGlzLl9hdXRvQ29udHJhc3QgJiYgIV9fY29sb3IgfHwgX19jb2xvciA9PT0gJ2F1dG8nO1xuICAgICAgY29uc3QgbmV3S2V5ID0gYGNvbW1vbi0tLS06JHtcbiAgICAgICAgX19iZyB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgIF9fY29sb3IgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgIF9fcmFpc2VkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgIF9fZWxldmF0aW9uIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgX19kaXNhYmxlZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgX19vdXRsaW5lZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICBfX3NoYWRvd0NvbG9yIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgICAgICAgX19pc0NvbnRyYXN0IHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICAgIHRoaXMuX2NsYXNzTmFtZUFub255bW91cyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKG5ld0tleSwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZToge1xuICAgICAgICAgIGJvcmRlcj86IHN0cmluZyxcbiAgICAgICAgICBiYWNrZ3JvdW5kPzogc3RyaW5nLFxuICAgICAgICAgIGNvbG9yPzogc3RyaW5nLFxuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZyxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzPzogJ25vbmUnO1xuICAgICAgICAgICcmOmhvdmVyJz86IHtcbiAgICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6YWN0aXZlJz86IHtcbiAgICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgfSA9IHt9O1xuICAgICAgICBpZiAoX19vdXRsaW5lZCkge1xuICAgICAgICAgIHN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgY3VycmVudENvbG9yJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19kaXNhYmxlZCkge1xuICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUudGV4dC5kaXNhYmxlZDtcbiAgICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgIGlmIChfX2JnKSB7XG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuZGlzYWJsZWQuZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKF9fYmcpIHtcbiAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5jb2xvck9mKF9fYmcpO1xuICAgICAgICAgICAgaWYgKF9faXNDb250cmFzdCkge1xuICAgICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoYCR7X19iZ306Y29udHJhc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFzdHlsZS5jb2xvciAmJiBfX2NvbG9yKSB7XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoX19jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChfX3JhaXNlZCB8fCBfX2VsZXZhdGlvbikge1xuICAgICAgICAgICAgaWYgKCFfX2JnKSB7XG4gICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckNzcyA9IHN0eWxlLmJhY2tncm91bmQgIT09IF9fYmcgJiYgdGhlbWUuY29sb3JPZihfX2JnIHx8ICdiYWNrZ3JvdW5kOnByaW1hcnknLCAnc2hhZG93Jyk7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dDb2xvciA9IChfX3NoYWRvd0NvbG9yICYmIHRoZW1lLmNvbG9yT2YoX19zaGFkb3dDb2xvcikpIHx8IGJhY2tncm91bmRDb2xvckNzcyB8fCBzdHlsZS5iYWNrZ3JvdW5kIHx8IHN0eWxlLmNvbG9yIHx8IHRoZW1lLnNoYWRvdztcbiAgICAgICAgICAgIHN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd0J1aWxkZXIoX19lbGV2YXRpb24gfHwgMywgc2hhZG93Q29sb3IpO1xuICAgICAgICAgICAgaWYgKCFfX2VsZXZhdGlvbikge1xuICAgICAgICAgICAgICBzdHlsZVsnJjphY3RpdmUnXSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoOCwgc2hhZG93Q29sb3IpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZSBhcyBhbnk7XG4gICAgICB9LCBnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpLCB0aGlzLl9jbGFzc05hbWVBbm9ueW1vdXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYW55KSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG4iLCJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJpcHBsZUNvbmZpZyB7XG4gIGNlbnRlcmVkPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBzZW5zaXRpdmU/OiBib29sZWFuO1xuICByYWRpdXM/OiAnY29udGFpbmVyU2l6ZScgfCBudW1iZXI7XG4gIHBlcmNlbnRhZ2VUb0luY3JlYXNlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmlwcGxlUmVmIHtcbiAgc3RhdGUgPSB0cnVlO1xuICB0aW1lc3RhbXAgPSAtRGF0ZS5ub3coKTtcbiAgcmVhZG9ubHkgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZW5kKCkge1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWVzdGFtcCArPSBEYXRlLm5vdygpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGUge1xuICBwcml2YXRlIF9yaXBwbGVSZWY6IFJpcHBsZVJlZjtcbiAgcHJpdmF0ZSBfZXZlbnRIYW5kbGVyczogTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPiA9IG5ldyBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+KCk7XG4gIGNvbmZpZzogUmlwcGxlQ29uZmlnID0ge307XG4gIHByaXZhdGUgX3RyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMuX3RoZW1lVmFyaWFibGVzLnJpcHBsZS5kdXJhdGlvbjtcbiAgcHJpdmF0ZSBfZXZlbnRPcHRpb25zID0ge3Bhc3NpdmU6IHRydWV9IGFzIGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2xhc3NlczogYW55LFxuICAgIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgX3RyaWdnZXJFbGVtZW50PzogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHR5cGVvZiBQb2ludGVyRXZlbnQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFRvdWNoRXZlbnQgID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdwb2ludGVyZG93bicsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgndG91Y2hlbmQnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZXVwJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZWxlYXZlJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIGlmICghX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICAgIF90cmlnZ2VyRWxlbWVudCA9IF9jb250YWluZXJFbGVtZW50O1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChfdHJpZ2dlckVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldENvbmZpZyhjb25maWc6IFJpcHBsZUNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3JlY3RDb250YWluZXIoKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIHNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAvLyBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zdHlsZXNEYXRhWzBdKTtcbiAgICAgIC8vIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIHRoaXMuc3R5bGVzRGF0YVswXS5pZCk7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVSaXBwbGUoc3R5bGVzOiB7W2tleTogc3RyaW5nXTogbnVtYmVyIHwgc3RyaW5nfSkge1xuICAgIHRoaXMuX3JpcHBsZVJlZiA9IG5ldyBSaXBwbGVSZWYoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9yaXBwbGVSZWYuY29udGFpbmVyO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSB0aGlzLmNsYXNzZXMucmlwcGxlQ29udGFpbmVyO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gYCR7ZWxlbWVudH1weGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlW2tleV0gPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoJ29wYWNpdHknKTtcbiAgICBjb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKDEpYDtcbiAgfVxuXG4gIHByaXZhdGUgb25Qb2ludGVyRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIC8qKkRlc3Ryb3kgcHJldmlvdXMgcmlwcGxlIGlmIGV4aXN0ICovXG4gICAgICB0aGlzLmVuZFJpcHBsZSgpO1xuICAgICAgdGhpcy5zdGFydFJpcHBsZShldmVudCwgdGhpcy5jb25maWcpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIG9uUG9pbnRlckxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5lbmRSaXBwbGUoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFJpcHBsZShldmVudDogTW91c2VFdmVudCB8IFBvaW50ZXJFdmVudCwgcmlwcGxlQ29uZmlnOiBSaXBwbGVDb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5fcmVjdENvbnRhaW5lcjtcbiAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFgsXG4gICAgeSA9IGV2ZW50LmNsaWVudFk7XG4gICAgaWYgKHJpcHBsZUNvbmZpZy5jZW50ZXJlZCkge1xuICAgICAgeCA9IGNvbnRhaW5lclJlY3QubGVmdCArIGNvbnRhaW5lclJlY3Qud2lkdGggLyAyO1xuICAgICAgeSA9IGNvbnRhaW5lclJlY3QudG9wICsgY29udGFpbmVyUmVjdC5oZWlnaHQgLyAyO1xuICAgIH1cbiAgICBjb25zdCBsZWZ0ID0geCAtIGNvbnRhaW5lclJlY3QubGVmdDtcbiAgICBjb25zdCB0b3AgPSB5IC0gY29udGFpbmVyUmVjdC50b3A7XG4gICAgbGV0IHJhZGl1cyA9IHJpcHBsZUNvbmZpZy5yYWRpdXMgPT09ICdjb250YWluZXJTaXplJyA/IG1heFNpemUoY29udGFpbmVyUmVjdCkgLyAyIDogcmlwcGxlQ29uZmlnLnJhZGl1cyB8fCByaXBwbGVSYWRpdXMoeCwgeSwgY29udGFpbmVyUmVjdCk7XG4gICAgaWYgKHJpcHBsZUNvbmZpZy5wZXJjZW50YWdlVG9JbmNyZWFzZSkge1xuICAgICAgcmFkaXVzICs9IHJhZGl1cyAqIHJpcHBsZUNvbmZpZy5wZXJjZW50YWdlVG9JbmNyZWFzZSAvIDEwMDtcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVSaXBwbGUoe1xuICAgICAgbGVmdDogbGVmdCAtIHJhZGl1cyxcbiAgICAgIHRvcDogdG9wIC0gcmFkaXVzLFxuICAgICAgd2lkdGg6IHJhZGl1cyAqIDIsXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqIDIsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke3RoaXMuX3RyYW5zaXRpb25EdXJhdGlvbn1tc2BcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuVGltZW91dE91dHNpZGVab25lKGZuOiBGdW5jdGlvbiwgZGVsYXkgPSAwKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoZm4sIGRlbGF5KSk7XG4gIH1cblxuICBlbmRSaXBwbGUoKSB7XG4gICAgY29uc3QgcmlwcGxlUmVmOiBSaXBwbGVSZWYgPSB0aGlzLl9yaXBwbGVSZWYgfHwgbnVsbDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuX3RyYW5zaXRpb25EdXJhdGlvbjtcbiAgICBpZiAocmlwcGxlUmVmICYmIHJpcHBsZVJlZi5zdGF0ZSkge1xuICAgICAgcmlwcGxlUmVmLmVuZCgpO1xuICAgICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9uIC8gNX1tc2A7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiA6IDApO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gLyAoZHVyYXRpb24gKiAuMDAxICsgMSkgOiAwKTtcbiAgICAgIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogLjE1IDogMCk7XG4gICAgICB0aGlzLnJ1blRpbWVvdXRPdXRzaWRlWm9uZSgoKSA9PiB7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyaXBwbGVSZWYuY29udGFpbmVyKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIC8gKGR1cmF0aW9uICogLjAwMSArIDEpICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogMiA6IGR1cmF0aW9uKTtcbiAgICB9XG4gIH1cbiAgcmVtb3ZlRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLl90cmlnZ2VyRWxlbWVudCkge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICB0aGlzLl90cmlnZ2VyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gcmlwcGxlUmFkaXVzKHg6IG51bWJlciwgeTogbnVtYmVyLCByZWN0OiBDbGllbnRSZWN0KSB7XG4gIGNvbnN0IGRpc3RYID0gTWF0aC5tYXgoTWF0aC5hYnMoeCAtIHJlY3QubGVmdCksIE1hdGguYWJzKHggLSByZWN0LnJpZ2h0KSk7XG4gIGNvbnN0IGRpc3RZID0gTWF0aC5tYXgoTWF0aC5hYnMoeSAtIHJlY3QudG9wKSwgTWF0aC5hYnMoeSAtIHJlY3QuYm90dG9tKSk7XG4gIHJldHVybiBNYXRoLnNxcnQoZGlzdFggKiBkaXN0WCArIGRpc3RZICogZGlzdFkpO1xufVxuXG5mdW5jdGlvbiBtYXhTaXplKHJlY3Q6IENsaWVudFJlY3QpIHtcbiAgcmV0dXJuIE1hdGgubWF4KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgTFlfQ09NTU9OX1NUWUxFUyA9IHtcbiAgZmlsbDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgfSxcbiAgdmlzdWFsbHlIaWRkZW46IHtcbiAgICBib3JkZXI6IDAsXG4gICAgY2xpcDogJ3JlY3QoMCAwIDAgMCknLFxuICAgIGhlaWdodDogJzFweCcsXG4gICAgbWFyZ2luOiAnLTFweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcxcHgnLFxuICAgIG91dGxpbmU6IDAsXG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnXG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTHlDb3JlU3R5bGVzIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChMWV9DT01NT05fU1RZTEVTKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIpIHsgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJy4uL3N0eWxlcy9jb3JlLXN0eWxlcyc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJpcHBsZUNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMnB4JyxcbiAgICBoZWlnaHQ6ICcycHgnLFxuICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgIG9wYWNpdHk6ICcuMicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGVtZS5yaXBwbGUudHJhbnNpdGlvbi5vcGFjaXR5fSx0cmFuc2Zvcm0gJHt0aGVtZS5yaXBwbGUudHJhbnNpdGlvbi50cmFuc2Zvcm1cbiAgICB9YCxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxufVxuIiwiaW1wb3J0IHsgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBSaXBwbGUsIFJpcHBsZUNvbmZpZyB9IGZyb20gJy4uL3JpcHBsZS9yaXBwbGUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi4vcmlwcGxlL3JpcHBsZS5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1aXJlUGFyYW1zIHtcbiAgX3RoZW1lOiBMeVRoZW1lMjtcbiAgX25nWm9uZTogTmdab25lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbkRpc2FibGVSaXBwbGUge1xuICBfdHJpZ2dlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIGRpc2FibGVSaXBwbGU6IGJvb2xlYW47XG4gIF9yaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZztcbiAgX3JlbW92ZVJpcHBsZUV2ZW50czogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluRGlzYWJsZVJpcHBsZTxUIGV4dGVuZHMgQ29uc3RydWN0b3I8UmVxdWlyZVBhcmFtcz4+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5EaXNhYmxlUmlwcGxlPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAgIF90cmlnZ2VyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgICBfcmlwcGxlQ29uZmlnOiBSaXBwbGVDb25maWcgPSB7fTtcbiAgICBwcml2YXRlIF9yaXBwbGU6IFJpcHBsZTtcbiAgICBwcml2YXRlIF9kaXNhYmxlUmlwcGxlID0gbnVsbDtcblxuICAgIGdldCBkaXNhYmxlUmlwcGxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZVJpcHBsZTsgfVxuICAgIHNldCBkaXNhYmxlUmlwcGxlKHZhbDogYm9vbGVhbikge1xuICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiB2YWwgIT09IHRoaXMuX2Rpc2FibGVSaXBwbGUpIHtcbiAgICAgICAgY29uc3QgbmV3VmFsID0gdGhpcy5fZGlzYWJsZVJpcHBsZSA9IHRvQm9vbGVhbih2YWwpO1xuICAgICAgICAvLyByZW1vdmUgcHJldmlvdXMgcmlwcGxlIGlmIGV4aXN0XG4gICAgICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICAgICAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgICAgIC8vIGFkZCByaXBwbGVcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByaXBwbGVDb250YWluZXIgPSB0aGlzLl9yaXBwbGVDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXJFbGVtZW50ID0gdGhpcy5fdHJpZ2dlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuX3JpcHBsZSA9IG5ldyBSaXBwbGUodGhpcy5fdGhlbWUuY29uZmlnLCB0aGlzLl9uZ1pvbmUsIHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKSwgcmlwcGxlQ29udGFpbmVyLCB0cmlnZ2VyRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLl9yaXBwbGUuc2V0Q29uZmlnKHRoaXMuX3JpcHBsZUNvbmZpZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgX3JlbW92ZVJpcHBsZUV2ZW50cygpIHtcbiAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JpcHBsZSkge1xuICAgICAgICAgIHRoaXMuX3JpcHBsZS5yZW1vdmVFdmVudHMoKTtcbiAgICAgICAgICB0aGlzLl9yaXBwbGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRGlzYWJsZSB7XG4gIGRpc2FibGVkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkRpc2FibGU+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAncHJpbWFyeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuQ29sb3Ige1xuICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Db2xvcjxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5Db2xvcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcblxuICAgIGdldCBjb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fY29sb3I7IH1cbiAgICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHZhbCB8fCBERUZBVUxUX0NPTE9SO1xuICAgICAgaWYgKGRlZmF1bHRDb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICB0aGlzLl9jb2xvciA9IGRlZmF1bHRDb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuY29uc3QgREVGQVVMVF9CRyA9ICdwcmltYXJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5CZyB7XG4gIGJnOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkJnPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkJnPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9iZzogc3RyaW5nO1xuXG4gICAgZ2V0IGJnKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9iZzsgfVxuICAgIHNldCBiZyh2YWw6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdmFsIHx8IERFRkFVTFRfQkc7XG4gICAgICBpZiAoZGVmYXVsdENvbG9yICE9PSB0aGlzLmJnKSB7XG4gICAgICAgIHRoaXMuX2JnID0gZGVmYXVsdENvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5SYWlzZWQge1xuICByYWlzZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblJhaXNlZDxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5SYWlzZWQ+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX3JhaXNlZDogYm9vbGVhbjtcblxuICAgIGdldCByYWlzZWQoKSB7IHJldHVybiB0aGlzLl9yYWlzZWQ7IH1cbiAgICBzZXQgcmFpc2VkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmFpc2VkID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbk91dGxpbmVkIHtcbiAgb3V0bGluZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbk91dGxpbmVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbk91dGxpbmVkPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9vdXRsaW5lZDogYm9vbGVhbjtcblxuICAgIGdldCBvdXRsaW5lZCgpIHsgcmV0dXJuIHRoaXMuX291dGxpbmVkOyB9XG4gICAgc2V0IG91dGxpbmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fb3V0bGluZWQgPSB0b0Jvb2xlYW4odmFsdWUpOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5FbGV2YXRpb24ge1xuICBlbGV2YXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluRWxldmF0aW9uPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkVsZXZhdGlvbj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZWxldmF0aW9uOiBudW1iZXI7XG5cbiAgICBnZXQgZWxldmF0aW9uKCkgeyByZXR1cm4gdGhpcy5fZWxldmF0aW9uOyB9XG4gICAgc2V0IGVsZXZhdGlvbih2YWx1ZTogYW55KSB7IHRoaXMuX2VsZXZhdGlvbiA9IHZhbHVlOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5TaGFkb3dDb2xvciB7XG4gIHNoYWRvd0NvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblNoYWRvd0NvbG9yPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhblNoYWRvd0NvbG9yPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9zaGFkb3dDb2xvcjogc3RyaW5nO1xuXG4gICAgZ2V0IHNoYWRvd0NvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zaGFkb3dDb2xvcjsgfVxuICAgIHNldCBzaGFkb3dDb2xvcih2YWx1ZTogc3RyaW5nKSB7IHRoaXMuX3NoYWRvd0NvbG9yID0gdmFsdWU7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3ksIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IG1peGluU3R5bGVVcGRhdGVyLCBtaXhpbkJnLCBtaXhpblJhaXNlZCwgbWl4aW5PdXRsaW5lZCwgbWl4aW5FbGV2YXRpb24sIG1peGluU2hhZG93Q29sb3IsIG1peGluRGlzYWJsZVJpcHBsZSwgbWl4aW5Db2xvciB9IGZyb20gJy4uL2NvbW1vbi9pbmRleCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5jb25zdCBERUZBVUxUX0JHID0gJ3BhcGVyJztcblxuZXhwb3J0IGNsYXNzIEx5UGFwZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlQYXBlck1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlQYXBlckJhc2UpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgbHktcGFwZXIsIFtseS1wYXBlcl0sIFtseS10ZXh0XWAsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2ZsYXQnLFxuICAgICdjb2xvcicsXG4gICAgJ3JhaXNlZCcsXG4gICAgJ291dGxpbmVkJyxcbiAgICAnZWxldmF0aW9uJyxcbiAgICAnc2hhZG93Q29sb3InLFxuICAgICdkaXNhYmxlUmlwcGxlJ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5UGFwZXIgZXh0ZW5kcyBMeVBhcGVyTWl4aW5CYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIF9oYXNUZXh0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgnbHktdGV4dCcpXG4gIHNldCBoYXNUZXh0KHZhbDogYW55KSB7XG4gICAgdGhpcy5faGFzVGV4dCA9IHRvQm9vbGVhbih2YWwpO1xuICB9XG4gIGdldCBoYXNUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNUZXh0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdGhlbWU6IEx5VGhlbWUyLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsO1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX2VsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuYmcgJiYgIXRoaXMuaGFzVGV4dCkge1xuICAgICAgdGhpcy5iZyA9IERFRkFVTFRfQkc7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3RoZW1lLmFkZFNpbXBsZVN0eWxlKFxuICAgICAgICAnbHlQYXBlcicsXG4gICAgICAgICh7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbd2l0aENsYXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlXaXRoQ2xhc3Mge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHt2YWx9JyBpcyBub3QgdmFsaWQgY2xhc3NOYW1lYCk7XG4gICAgfVxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlQYXBlciB9IGZyb20gJy4vcGFwZXInO1xuaW1wb3J0IHsgTHlXaXRoQ2xhc3MgfSBmcm9tICcuL3dpdGgtY2xhc3MuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlXaXRoQ2xhc3MsIEx5UGFwZXJdLFxuICBleHBvcnRzOiBbTHlXaXRoQ2xhc3MsIEx5UGFwZXJdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q29tbW9uTW9kdWxlIHsgfVxuIiwiZnVuY3Rpb24gaXNXaW5kb3cob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW06IGFueSkge1xuICAgIHJldHVybiBpc1dpbmRvdyhlbGVtKSA/IGVsZW0gOiBlbGVtLm5vZGVUeXBlID09PSA5ICYmIGVsZW0uZGVmYXVsdFZpZXc7XG59XG5leHBvcnQgZnVuY3Rpb24gZXhhY3RQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCkge1xuICAgIGxldCBkb2NFbGVtOiBhbnksIHdpbjogYW55LFxuICAgICAgICBib3ggPSB7dG9wOiAwLCBsZWZ0OiAwfTtcbiAgICBjb25zdCBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcblxuICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xuICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgICB3aW4gPSBnZXRXaW5kb3coZG9jKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcbiAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcbiAgICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRFbnRyeSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBkZWZhdWx0VmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICByZXR1cm4gdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cbiIsImltcG9ydCB7IEVsZW1lbnRSZWYsIE5nWm9uZSwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBnZXROYXRpdmVFbGVtZW50IH0gZnJvbSAnLi4vbWluaW1hbC9jb21tb24nO1xuXG5leHBvcnQgZW51bSBGb2N1c1N0YXR1cyB7XG4gIC8qKm1vdXNlIGFuZC9vciB0b3VjaCovXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIC8qKiBrZXlib2FyZCBhbmQvb3IgcHJvZ3JhbSovXG4gIEtFWUJPQVJEID0gJ2tleWJvYXJkJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c1N0YXRlSW5mbyB7XG4gIHVubGlzdGVuOiAoKSA9PiB2b2lkO1xuICBzdWJqZWN0OiBTdWJqZWN0PEZvY3VzU3RhdGU+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzU3RhdGUge1xuICBldmVudDogRm9jdXNFdmVudDtcbiAgYnk6ICdrZXlib2FyZCcgfCAnbW91c2UnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9lbGVtZW50TWFwID0gbmV3IE1hcDxIVE1MRWxlbWVudCwgRm9jdXNTdGF0ZUluZm8+KCk7XG4gIHByaXZhdGUgX2N1cnJlbnRFdmVudDogJ21vdXNlJyB8ICdrZXlib2FyZCc7XG4gIHByaXZhdGUgX3JlbW92ZUdsb2JhbExpc3RlbmVyczogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfY291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG5cbiAgbGlzdGVuKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIGtleUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KTogT2JzZXJ2YWJsZTxGb2N1c1N0YXRlPiB8IG51bGwge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAvLyByZXR1cm4gbnVsbCBpZiBpdCBpcyBub3QgYnJvd3NlciBwbGF0Zm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgY29uc3Qga2V5ID0ga2V5RWxlbWVudCAmJiBnZXROYXRpdmVFbGVtZW50KGtleUVsZW1lbnQpIHx8IG5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudE1hcC5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRNYXAuZ2V0KGtleSkuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb2N1c1N0YXRlOiBGb2N1c1N0YXRlSW5mbyA9IHtcbiAgICAgIHVubGlzdGVuOiBudWxsLFxuICAgICAgc3ViamVjdDogbmV3IFN1YmplY3Q8Rm9jdXNTdGF0ZT4oKVxuICAgIH07XG4gICAgdGhpcy5faW5jcmVtZW50Q291bnQoKTtcbiAgICBjb25zdCBmb2N1c0xpc3RlbmVyID0gKGV2ZW50OiBGb2N1c0V2ZW50KSA9PiB0aGlzLl9vbihldmVudCwgZm9jdXNTdGF0ZS5zdWJqZWN0KTtcbiAgICBjb25zdCBibHVyTGlzdGVuZXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHRoaXMuX29uKGV2ZW50LCBmb2N1c1N0YXRlLnN1YmplY3QpO1xuXG4gICAgZm9jdXNTdGF0ZS51bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmb2N1c0xpc3RlbmVyLCB0cnVlKTtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXJMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHRoaXMuX2VsZW1lbnRNYXAuc2V0KGtleSwgZm9jdXNTdGF0ZSk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzTGlzdGVuZXIsIHRydWUpO1xuICAgICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckxpc3RlbmVyLCB0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9jdXNTdGF0ZS5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgdW5saXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvY3VzU3RhdGVJbmZvID0gdGhpcy5fZWxlbWVudE1hcC5nZXQoZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KSk7XG4gICAgaWYgKGZvY3VzU3RhdGVJbmZvKSB7XG4gICAgICBmb2N1c1N0YXRlSW5mby51bmxpc3RlbigpO1xuICAgICAgdGhpcy5fZGVjcmVtZW50Q291bnQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vbihldmVudDogRm9jdXNFdmVudCwgc3ViamVjdDogU3ViamVjdDxGb2N1c1N0YXRlPikge1xuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gc3ViamVjdC5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgYnk6IHRoaXMuX2N1cnJlbnRFdmVudCB8fCAna2V5Ym9hcmQnXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkR2xvYmFsTGlzdGVuZXJzKCkge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lck9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVyc1xuICAgID8ge1xuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IHRydWVcbiAgICB9IDogZmFsc2U7XG5cbiAgICBjb25zdCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciA9ICgpID0+IHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jdXJyZW50RXZlbnQgPSAna2V5Ym9hcmQnKTtcbiAgICBjb25zdCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyID0gKCkgPT4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2N1cnJlbnRFdmVudCA9ICdtb3VzZScpO1xuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9pbmNyZW1lbnRDb3VudCgpIHtcbiAgICBpZiAoKyt0aGlzLl9jb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5fYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVjcmVtZW50Q291bnQoKSB7XG4gICAgaWYgKCEtLXRoaXMuX2NvdW50KSB7XG4gICAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9lbGVtZW50TWFwLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMudW5saXN0ZW4oZWxlbWVudCkpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQVVJX1ZFUlNJT04gPSAnMS45LjctbmlnaHRseS4yMDE4MTIxMy1qcG1jNnpneCc7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMTItMTNUMDg6MjM6MzMuMzkyWic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgTFlfSEFNTUVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyT3B0aW9ucz4oJ0xZX0hBTU1FUl9PUFRJT05TJyk7XG5cbmNvbnN0IEhBTU1FUl9HRVNUVVJFU19FVkVOVFMgPSBbXG4gICdzbGlkZScsXG4gICdzbGlkZXN0YXJ0JyxcbiAgJ3NsaWRlZW5kJyxcbiAgJ3NsaWRlcmlnaHQnLFxuICAnc2xpZGVsZWZ0JyxcbiAgJ3NsaWRlY2FuY2VsJ1xuXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBldmVudHM6IHN0cmluZ1tdID0gSEFNTUVSX0dFU1RVUkVTX0VWRU5UUztcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIGNvbnN0IGhhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gICAgY29uc3QgbWMgPSBuZXcgaGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwge30pO1xuXG4gICAgY29uc3QgcGFuID0gbmV3IGhhbW1lci5QYW4oKTtcbiAgICBjb25zdCBzd2lwZSA9IG5ldyBoYW1tZXIuU3dpcGUoKTtcbiAgICBjb25zdCBzbGlkZSA9IHRoaXMuX2NyZWF0ZVJlY29nbml6ZXIocGFuLCB7ZXZlbnQ6ICdzbGlkZScsIHRocmVzaG9sZDogMH0sIHN3aXBlKTtcblxuICAgIHBhbi5yZWNvZ25pemVXaXRoKHN3aXBlKTtcblxuICAgIC8vIEFkZCBjdXN0b21pemVkIGdlc3R1cmVzIHRvIEhhbW1lciBtYW5hZ2VyXG4gICAgbWMuYWRkKFtzd2lwZSwgcGFuLCBzbGlkZV0pO1xuICAgIHJldHVybiBtYztcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgbmV3IHJlY29nbml6ZXIsIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBkZWZhdWx0IHJlY29nbml6ZXJzIG9mIEhhbW1lckpTICovXG4gIHByaXZhdGUgX2NyZWF0ZVJlY29nbml6ZXIoYmFzZTogYW55LCBvcHRpb25zOiBhbnksIC4uLmluaGVyaXRhbmNlczogYW55W10pIHtcbiAgICBjb25zdCByZWNvZ25pemVyID0gbmV3IChiYXNlLmNvbnN0cnVjdG9yKShvcHRpb25zKTtcblxuICAgIGluaGVyaXRhbmNlcy5wdXNoKGJhc2UpO1xuICAgIGluaGVyaXRhbmNlcy5mb3JFYWNoKGl0ZW0gPT4gcmVjb2duaXplci5yZWNvZ25pemVXaXRoKGl0ZW0pKTtcblxuICAgIHJldHVybiByZWNvZ25pemVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBbTHlUaGVtZTJdLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVbmRlZmluZWQge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5leHBvcnQgY29uc3QgVW5kZWZpbmVkVmFsdWUgPSBuZXcgVW5kZWZpbmVkKCk7XG4iLCJleHBvcnQgZW51bSBJbnZlcnRNZWRpYVF1ZXJ5IHtcbiAgTm8sXG4gIFllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWVkaWFRdWVyeShtZWRpYTogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5OiBJbnZlcnRNZWRpYVF1ZXJ5ID0gSW52ZXJ0TWVkaWFRdWVyeS5Obyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgaWYgKG1lZGlhICYmIGludmVydE1lZGlhUXVlcnkgPT09IEludmVydE1lZGlhUXVlcnkuWWVzKSB7XG4gICAgY29uc3QgbmV3VmFsID0gbWVkaWEuc3BsaXQoJywnKS5tYXAoXyA9PiBgbm90ICR7X31gKTtcbiAgICByZXR1cm4gbmV3VmFsO1xuICB9XG4gIHJldHVybiBtZWRpYTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudCwgSW5qZWN0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IEx5Q29yZVN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9jb3JlLXN0eWxlcyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tRXZlbnQgLCBPYnNlcnZhYmxlLCBlbXB0eSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSwgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBvdmVybGF5QmFja2Ryb3A6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgub3ZlcmxheSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfVxufSk7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV2luZG93U2Nyb2xsU2VydmljZSB7XG5cbiAgc2Nyb2xsJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBuZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnc2Nyb2xsJykucGlwZShcbiAgICAgICAgICBhdWRpdFRpbWUoMjApLFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcm9sbCQgPSBlbXB0eSgpO1xuICAgIH1cbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlDb250YWluZXIge1xuICBwcml2YXRlIF9jbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG4gIHByb3RlY3RlZCByZWFkb25seSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zID0gbmV3IFNldDxhbnk+KCk7XG4gIHByaXZhdGUgX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcjogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbHktb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgfVxuICB9XG4gIGdldCBjb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2FkZChpdGVtKSB7XG4gICAgdGhpcy5faXRlbXMuYWRkKGl0ZW0pO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgfVxuXG4gICAgLyoqXG4gICAqIFJlbW92ZSBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfcmVtb3ZlKGl0ZW0pIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgdGhpcy5faXRlbXMuZGVsZXRlKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdHlsZXMgZm9yIG92ZXJsYXkgY29udGFpbmVyXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXRlbXMuc2l6ZSkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lciA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBCQUNLRFJPUF9TVFlMRVMgPSAoe1xuICBiYWNrZHJvcDoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICB9XG59KTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktb3ZlcmxheS1iYWNrZHJvcCcsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlCYWNrZHJvcCB7XG4gIC8qKiBAaWdub3JlICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KEJBQ0tEUk9QX1NUWUxFUyk7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLl9vdmVybGF5Q29uZmlnLmZuRGVzdHJveSgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBASW5qZWN0KCdvdmVybGF5Q29uZmlnJykgcHJpdmF0ZSBfb3ZlcmxheUNvbmZpZzogYW55LFxuICAgIGNvbW1vblN0eWxlczogTHlDb3JlU3R5bGVzXG4gICkge1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb21tb25TdHlsZXMuY2xhc3Nlcy5maWxsKTtcbiAgICBpZiAoX292ZXJsYXlDb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYmFja2Ryb3ApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCAsIE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXNpemVTZXJ2aWNlIHtcblxuICByZXNpemUkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICAgIGF1ZGl0VGltZSgyMCksXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2l6ZSQgPSBlbXB0eSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyLCBMeU92ZXJsYXlCYWNrZHJvcCwgV2luZG93U2Nyb2xsU2VydmljZSB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmVzaXplU2VydmljZSB9IGZyb20gJy4vcmVzaXplJztcblxuaW50ZXJmYWNlIE92ZXJsYXlDb25maWcge1xuICBzdHlsZXM6IE9iamVjdDtcbiAgY2xhc3Nlcz86IHN0cmluZ1tdO1xuICBiYWNrZHJvcD86IGJvb2xlYW47XG4gIGZuRGVzdHJveT86ICguLi5hcmcpID0+IHZvaWQ7XG4gIGhvc3Q/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gIC8qKiBEZXRhY2hlcyBhIHZpZXcgZnJvbSBkaXJ0eSBjaGVja2luZyBhZ2FpbiBvZiBBcHBsaWNhdGlvblJlZi4gICovXG4gIGRldGFjaDogKCkgPT4gdm9pZDtcblxuICAvKiogUmVtb3ZlIGVsZW1lbnQgb2YgRE9NICovXG4gIHJlbW92ZTogKCkgPT4gdm9pZDtcblxuICAvKiogRGV0YWNoICYgcmVtb3ZlICovXG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG5cbiAgY29udGFpbmVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG5cbn1cbmNsYXNzIENyZWF0ZUZyb21UZW1wbGF0ZVJlZiBpbXBsZW1lbnRzIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICBwcml2YXRlIF92aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZWw6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9jb21wUmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgcHJpdmF0ZSBfY29tcFJlZk92ZXJsYXlCYWNrZHJvcDogQ29tcG9uZW50UmVmPGFueT47XG4gIHdpbmRvd1NSU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIGdldCBjb250YWluZXJFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiB8IHN0cmluZyxcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgX2NvbnRleHQ6IGFueSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgd2luZG93U2Nyb2xsOiBXaW5kb3dTY3JvbGxTZXJ2aWNlLFxuICAgIHJlc2l6ZVNlcnZpY2U6IFJlc2l6ZVNlcnZpY2UsXG4gICAgY29uZmlnPzogT3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICAvLyB0aGlzLl92aWV3UmVmID0gX3RlbXBsYXRlUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhfY29udGV4dCk7XG4gICAgLy8gdGhpcy5fdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5fZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290Tm9kZSkpO1xuICAgIGNvbnN0IF9fc3R5bGVzID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnLFxuICAgICAgLi4uY29uZmlnLnN0eWxlc1xuICAgIH07XG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiAnb3ZlcmxheUNvbmZpZycsXG4gICAgICAgIHVzZVZhbHVlOiA8T3ZlcmxheUNvbmZpZz57XG4gICAgICAgICAgZm5EZXN0cm95OiB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKSxcbiAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgc3R5bGVzOiBfX3N0eWxlcyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sIHRoaXMuX2luamVjdG9yKTtcblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKF9fc3R5bGVzKTtcbiAgICBpZiAoY29uZmlnLmhvc3QpIHtcbiAgICAgIHRoaXMud2luZG93U1JTdWIgPSBtZXJnZSh3aW5kb3dTY3JvbGwuc2Nyb2xsJCwgcmVzaXplU2VydmljZS5yZXNpemUkKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gY29uZmlnLmhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyhuZXdTdHlsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzO1xuICAgIGlmIChjbGFzc2VzICYmIGNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4gKHRoaXMuX2VsIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KEx5T3ZlcmxheUJhY2tkcm9wLCBuZXdJbmplY3Rvcik7XG4gICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQoYmFja2Ryb3BFbCk7XG4gICAgdGhpcy5fYXBwZW5kQ29tcG9uZW50VG9Cb2R5KF90ZW1wbGF0ZVJlZiwgX2NvbnRleHQsIHRoaXMuX2luamVjdG9yKTtcblxuICB9XG5cbiAgdXBkYXRlU3R5bGVzKF9fc3R5bGVzKSB7XG4gICAgLyoqIEFwcGx5IHN0eWxlcyAqL1xuICAgIC8qKiBzZXQgc3R5bGVzICovXG4gICAgZm9yIChjb25zdCBrZXkgaW4gX19zdHlsZXMpIHtcbiAgICAgIGlmIChfX3N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlVmFsID0gX19zdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHN0eWxlVmFsKSB7XG4gICAgICAgICAgdGhpcy5fZWwuc3R5bGVba2V5XSA9IHR5cGVvZiBfX3N0eWxlc1trZXldID09PSAnbnVtYmVyJyA/IGAke3N0eWxlVmFsfXB4YCA6IHN0eWxlVmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ29tcG9uZW50VG9Cb2R5KHR5cGU6IFRlbXBsYXRlUmVmPGFueT4gfCBUeXBlPGFueT4gfCBzdHJpbmcsIGNvbnRleHQsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIC8vIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy5fdmlld1JlZiA9IHR5cGUuY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRleHQgfHwge30pO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIC8vIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChfID0+IHRoaXMuX2VsLmFwcGVuZENoaWxkKF8pKTtcblxuICAgICAgLy8gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9lbC5pbm5lclRleHQgPSB0eXBlO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tcFJlZiA9IHRoaXMuZ2VuZXJhdGVDb21wb25lbnQodHlwZSBhcyBUeXBlPGFueT4sIGluamVjdG9yKTtcbiAgICAgIHRoaXMuX2VsID0gdGhpcy5fY29tcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUNvbXBvbmVudCh0eXBlOiBUeXBlPGFueT4sIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSk7XG4gICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fdmlld1JlZik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICB0aGlzLl92aWV3UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9lbCkge1xuICAgICAgLy8gcmVtb3ZlIGlmIGNvbnRlbnQgaXMgc3RyaW5nXG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmRlc3Ryb3koKTtcbiAgICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUoYmFja2Ryb3BFbCk7XG4gICAgfVxuICAgIHRoaXMud2luZG93U1JTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3dpbmRvd1Njcm9sbDogV2luZG93U2Nyb2xsU2VydmljZSxcbiAgICBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBSZXNpemVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgY3JlYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nLCBjb250ZXh0PzogYW55LCBjb25maWc/OiBPdmVybGF5Q29uZmlnKTogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gICAgcmV0dXJuIG5ldyBDcmVhdGVGcm9tVGVtcGxhdGVSZWYoXG4gICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX2FwcFJlZiwgdGVtcGxhdGUsIHRoaXMuX292ZXJsYXlDb250YWluZXIsIGNvbnRleHQsIHRoaXMuX2luamVjdG9yLCB0aGlzLl93aW5kb3dTY3JvbGwsIHRoaXMuX3Jlc2l6ZVNlcnZpY2UsIGNvbmZpZyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeU92ZXJsYXlCYWNrZHJvcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0x5T3ZlcmxheUJhY2tkcm9wXVxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCA9IHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlXG59O1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeSB7XG4gIGNyZWF0ZShjYWxsYmFjazogTXV0YXRpb25DYWxsYmFjayk6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBFbGVtZW50T2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeTogTXV0YXRpb25PYnNlcnZlckZhY3RvcnlcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMuZGVzdHJveShlbGVtZW50KSk7XG4gIH1cblxuICBvYnNlcnZlKGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4sIGZuOiBNdXRhdGlvbkNhbGxiYWNrLCBvcHRpb25zPzogTXV0YXRpb25PYnNlcnZlckluaXQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5fbXV0YXRpb25PYnNlcnZlckZhY3RvcnkuY3JlYXRlKGZuKTtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9wdGlvbnMgfHwgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IE9ic2VydmVyXG4gICAqL1xuICBkZXN0cm95KGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkFsaWFzIHtcbiAgcm93UmV2ZXJzZSA9ICdyb3ctcmV2ZXJzZScsXG4gIGNvbHVtblJldmVyc2UgPSAnY29sdW1uLXJldmVyc2UnLFxuICB3cmFwUmV2ZXJzZSA9ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydCA9ICdmbGV4LXN0YXJ0JyxcbiAgZW5kID0gJ2ZsZXgtZW5kJyxcbiAgYmV0d2VlbiA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kID0gJ3NwYWNlLWFyb3VuZCcsXG4gIGV2ZW5seSA9ICdzcGFjZS1ldmVubHknXG59XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkluamVjdGFibGUiLCJPcHRpb25hbCIsIkluamVjdCIsIlJlbmRlcmVyRmFjdG9yeTIiLCJET0NVTUVOVCIsImlzRGV2TW9kZSIsIk5nWm9uZSIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIiwiRWxlbWVudFJlZiIsInRzbGliXzEuX19leHRlbmRzIiwiREVGQVVMVF9CRyIsIlJlbmRlcmVyMiIsIlN1YmplY3QiLCJIYW1tZXJHZXN0dXJlQ29uZmlnIiwic3R5bGVzIiwiZnJvbUV2ZW50IiwiYXVkaXRUaW1lIiwibWFwIiwic2hhcmUiLCJlbXB0eSIsIkNvbXBvbmVudCIsIkhvc3RMaXN0ZW5lciIsIlN1YnNjcmlwdGlvbiIsIkluamVjdG9yIiwibWVyZ2UiLCJUZW1wbGF0ZVJlZiIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIkFwcGxpY2F0aW9uUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGFBQWdCLGNBQWMsQ0FBQyxRQUFROztZQUMvQixDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7WUFDdkMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7O1lBQ3ZDLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztZQUN2QyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0FDTkQ7UUFDTSxNQUFNLEdBQUcsT0FBTzs7UUFFaEIscUJBQXFCLEdBQUcsR0FBRzs7UUFDM0Isd0JBQXdCLEdBQUcsSUFBSTs7UUFDL0IsMEJBQTBCLEdBQUcsSUFBSTs7QUFDdkMsUUFBYSxPQUFPLEdBQUc7UUFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUMzQzs7Ozs7O0FBQ0QsYUFBZ0IsdUJBQXVCLENBQUMsU0FBOEIsRUFBRSxLQUFjO1FBQTlDLDBCQUFBO1lBQUEsYUFBOEI7O1FBQUUsc0JBQUE7WUFBQSxjQUFj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