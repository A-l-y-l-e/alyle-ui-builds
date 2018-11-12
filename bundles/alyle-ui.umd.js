(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('chroma-js'), require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui', ['exports', 'chroma-js', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/platform-browser'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = {}),global.chroma,global.ng.core,global.ng.common,global.rxjs,global.rxjs.operators,global.ng.platformBrowser));
}(this, (function (exports,_chroma,i0,i2,rxjs,operators,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        var Color = chroma(color || '#000').darken().saturate(2);
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var THEME_VARIABLES = new i0.InjectionToken('ly.theme.variables');
    /** @type {?} */
    var IS_CORE_THEME = new i0.InjectionToken('ly.is.root');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var hasV8BreakIterator = (typeof (Intl) !== 'undefined' && ( /** @type {?} */(Intl)).v8BreakIterator);
    /**
     * Service to detect the current platform by comparing the userAgent strings and
     * checking browser-specific global properties.
     */
    var Platform = /** @class */ (function () {
        function Platform() {
            /**
             * Layout Engines
             */
            this.EDGE = Platform.isBrowser && /(edge)/i.test(navigator.userAgent);
            this.TRIDENT = Platform.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
            // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
            this.BLINK = Platform.isBrowser &&
                (!!(( /** @type {?} */(window)).chrome || hasV8BreakIterator) && !!CSS && !this.EDGE && !this.TRIDENT);
            // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
            // ensure that Webkit runs standalone and is not used as another engine's base.
            this.WEBKIT = Platform.isBrowser &&
                /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
            /**
             * Browsers and Platform Types
             */
            this.IOS = Platform.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !( /** @type {?} */(window)).MSStream;
            // It's difficult to detect the plain Gecko engine, because most of the browsers identify
            // them self as Gecko-like browsers and modify the userAgent's according to that.
            // Since we only cover one explicit Firefox case, we can simply check for Firefox
            // instead of having an unstable check for Gecko.
            this.FIREFOX = Platform.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
            // Trident on mobile adds the android platform to the userAgent to trick detections.
            this.ANDROID = Platform.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
            // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
            // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
            // Safari browser should also use Webkit as its layout engine.
            this.SAFARI = Platform.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
        }
        Platform.isBrowser = typeof document === 'object' && !!document;
        return Platform;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LY_THEME_GLOBAL_VARIABLES = new i0.InjectionToken('ly.theme.global.variables');
    /** @type {?} */
    var LY_THEME = new i0.InjectionToken('ly_theme_config');
    /** @type {?} */
    var LY_THEME_NAME = new i0.InjectionToken('ly.theme.name');

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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                if (val === DirAlias.end) {
                    return this.direction === 'rtl' ? 'left' : 'right';
                }
                else {
                    return this.direction === 'rtl' ? 'right' : 'left';
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
        start: 'start',
        end: 'end',
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
                return /** @type {?} */ (path);
            }
        }
        if (typeof obj === 'string') {
            return /** @type {?} */ (obj);
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                        ( /** @type {?} */(_document.body)).removeChild(element);
                    }
                }
            }
            this.firstElement = _document.body.firstChild;
            if (Array.isArray(themeConfig)) {
                themeConfig.forEach(function (item) {
                    if (globalVariables) {
                        mergeDeep(item, globalVariables);
                    }
                    _this.add(/** @type {?} */ (item));
                    _this.themes.add(item.name);
                });
            }
            else {
                if (globalVariables) {
                    mergeDeep(themeConfig, globalVariables);
                }
                this.add(/** @type {?} */ (themeConfig));
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
                { type: undefined, decorators: [{ type: i0.Inject, args: [i2.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ CoreTheme.ngInjectableDef = i0.defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.inject(LY_THEME, 8), i0.inject(LY_THEME_GLOBAL_VARIABLES, 8), i0.inject(i0.RendererFactory2), i0.inject(i2.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
        return CoreTheme;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    var CLASSES_MAP = {};
    /** @type {?} */
    var STYLE_KEYS_MAP = {};
    /** @type {?} */
    var nextClassId = 0;
    var StylesInDocument = /** @class */ (function () {
        function StylesInDocument() {
            this.styles = {};
            this.styleContainers = new Map();
        }
        StylesInDocument.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ StylesInDocument.ngInjectableDef = i0.defineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
        return StylesInDocument;
    }());
    var LyTheme2 = /** @class */ (function () {
        function LyTheme2(stylesInDocument, core, themeName, _document) {
            this.stylesInDocument = stylesInDocument;
            this.core = core;
            this._document = _document;
            this._elementsMap = new Map();
            if (themeName) {
                this.setUpTheme(themeName);
            }
        }
        Object.defineProperty(LyTheme2.prototype, "classes", {
            get: /**
             * @return {?}
             */ function () {
                return CLASSES_MAP;
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
                    this.config = this.core.get(themeName);
                    this._styleMap = new Map();
                    this.elements = themeName in this.stylesInDocument.styles
                        ? this.stylesInDocument.styles[themeName]
                        : this.stylesInDocument.styles[themeName] = new Map();
                    this._createInstanceForTheme(themeName);
                    if (!this.initialTheme) {
                        this.initialTheme = this.config.name;
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
         */
        /**
         * Add a new dynamic style, use only within \@Input()
         * @param {?} id Unique id
         * @param {?} style Styles
         * @param {?=} el Element
         * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
         * @param {?=} priority
         * @return {?}
         */
        LyTheme2.prototype.addStyle = /**
         * Add a new dynamic style, use only within \@Input()
         * @param {?} id Unique id
         * @param {?} style Styles
         * @param {?=} el Element
         * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
         * @param {?=} priority
         * @return {?}
         */
            function (id, style, el, instance, priority) {
                /** @type {?} */
                var newClass = this.addCss(id, /** @type {?} */ (style), priority);
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
                var _this = this;
                if (!Platform.isBrowser) {
                    throw new Error("`theme.setTheme('theme-name')` is only available in browser platform");
                }
                if (nam !== this.config.name) {
                    this.config = this.core.get(nam);
                    this.elements.forEach(function (_, key) {
                        /** @type {?} */
                        var styleData = STYLE_MAP5.get(key);
                        if (styleData.requireUpdate) {
                            _this._createStyleContent2(styleData.styles, key, styleData.priority, styleData.type, true);
                        }
                    });
                }
            };
        /**
         * add style, similar to setUpStyle but this only accept string
         * @param {?} id id of style
         * @param {?} css style in string
         * @param {?} priority
         * @param {?=} media
         * @return {?}
         */
        LyTheme2.prototype.addCss = /**
         * add style, similar to setUpStyle but this only accept string
         * @param {?} id id of style
         * @param {?} css style in string
         * @param {?} priority
         * @param {?=} media
         * @return {?}
         */
            function (id, css, priority, media) {
                /** @type {?} */
                var newId = "~>" + id;
                return /** @type {?} */ (this._createStyleContent2(/** @type {?} */ (css), newId, priority, TypeStyle.OnlyOne, false, media));
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
         * @param id deprecated, unique id for style group
         * @param priority priority for style
         */
        /**
         * Add new add a new style sheet
         * @template T
         * @param {?} styles styles
         * @param {?=} id deprecated, unique id for style group
         * @param {?=} priority priority for style
         * @return {?}
         */
        LyTheme2.prototype.addStyleSheet = /**
         * Add new add a new style sheet
         * @template T
         * @param {?} styles styles
         * @param {?=} id deprecated, unique id for style group
         * @param {?=} priority priority for style
         * @return {?}
         */
            function (styles, id, priority) {
                if (i0.isDevMode()) {
                    if ((void 0 === priority && typeof id === 'string') || (void 0 !== priority && typeof id === 'string')) {
                        console.warn("the value `" + id + "` is no longer necessary for addStyleSheet, this will be an error in the next release.");
                    }
                }
                return this._createStyleContent2(styles, /** @type {?} */ (id), priority, TypeStyle.Multiple);
            };
        /**
         * @template T
         * @param {?} styles
         * @param {?} id
         * @param {?} priority
         * @param {?} type
         * @param {?=} forChangeTheme
         * @param {?=} media
         * @return {?}
         */
        LyTheme2.prototype._createStyleContent2 = /**
         * @template T
         * @param {?} styles
         * @param {?} id
         * @param {?} priority
         * @param {?} type
         * @param {?=} forChangeTheme
         * @param {?=} media
         * @return {?}
         */
            function (styles, id, priority, type, forChangeTheme, media) {
                /** @type {?} */
                var newId = type === TypeStyle.OnlyOne ? /** @type {?} */ (id) : styles;
                /** @type {?} */
                var isNewStyle;
                if (!STYLE_MAP5.has(newId)) {
                    isNewStyle = true;
                    STYLE_MAP5.set(newId, {
                        priority: type === TypeStyle.OnlyOne ? priority : priority === void 0 && typeof id === 'number' ? /** @type {?} */ (id) : priority,
                        styles: styles,
                        type: type,
                        css: {}
                    });
                }
                /** @type {?} */
                var styleMap = STYLE_MAP5.get(newId);
                /** @type {?} */
                var themeName = this.initialTheme;
                /** @type {?} */
                var isCreated = isNewStyle || !(styleMap.classes || styleMap[themeName]);
                if (isCreated || forChangeTheme) {
                    /** *
                     * create new style for new theme
                      @type {?} */
                    var css = void 0;
                    if (typeof styles === 'function') {
                        styleMap.requireUpdate = true;
                        css = groupStyleToString(styleMap, styles(this.config), themeName, null, type, this.config, media);
                        if (!forChangeTheme) {
                            styleMap.css[themeName] = css;
                        }
                    }
                    else {
                        /** create a new id for style that does not <-<require>-> changes */
                        css = groupStyleToString(styleMap, styles, themeName, /** @type {?} */ (newId), type, this.config, media);
                        styleMap.css = css;
                    }
                    if (!this.elements.has(newId)) {
                        this.elements.set(newId, this._createElementStyle(css));
                    }
                    /** @type {?} */
                    var el = this.elements.get(newId);
                    if (forChangeTheme) {
                        el.innerText = css;
                    }
                    else {
                        this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), el);
                    }
                }
                else {
                    /**
                           * append child style if not exist in dom
                           * for ssr & hmr
                           */
                    if (!this.elements.has(newId)) {
                        /** @type {?} */
                        var _css = styleMap.css[themeName] || styleMap.css;
                        this.elements.set(newId, this._createElementStyle(_css));
                        this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), this.elements.get(newId));
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
         * @param {?} themeName
         * @return {?}
         */
        LyTheme2.prototype._createInstanceForTheme = /**
         * @param {?} themeName
         * @return {?}
         */
            function (themeName) {
                if (!(themeName in CLASSES_MAP)) {
                    CLASSES_MAP[themeName] = {};
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
                { type: undefined, decorators: [{ type: i0.Inject, args: [i2.DOCUMENT,] }] }
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
     * @param {?=} media
     * @return {?}
     */
    function groupStyleToString(styleMap, styles, themeName, id, typeStyle, themeVariables, media) {
        if (typeStyle === TypeStyle.OnlyOne) {
            /** @type {?} */
            var className = styleMap.requireUpdate
                ? styleMap[themeName] || (styleMap[themeName] = createNextClassId())
                : styleMap.classes
                    ? styleMap.classes
                    : styleMap.classes = createNextClassId();
            if (typeof styles === 'string') {
                /** @type {?} */
                var css = "." + className + "{" + styles + "}";
                return media ? toMedia(css, media) : css;
            }
            else {
                /** @type {?} */
                var rules = styleToString(id, styles, themeVariables, /** @type {?} */ (className));
                return rules;
            }
        }
        /** @type {?} */
        var classesMap = styleMap[themeName] || (styleMap[themeName] = {});
        /** @type {?} */
        var content = '';
        for (var key in styles) {
            if (styles.hasOwnProperty(key)) {
                /** @type {?} */
                var currentClassName = key in classesMap
                    ? classesMap[key]
                    : classesMap[key] = i0.isDevMode() ? toClassNameValid("i---" + key + "-" + createNextClassId()) : createNextClassId();
                /** @type {?} */
                var value = styles[key];
                if (typeof value === 'object') {
                    /** @type {?} */
                    var style = styleToString(key, /** @type {?} */ (value), themeVariables, currentClassName);
                    content += style;
                }
                else {
                    console.log('value is string', value);
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
            return "." + data[token];
        });
    }
    /**
     * {color:'red'} to .className{color: red}
     * @param {?} key
     * @param {?} ob
     * @param {?} themeVariables
     * @param {?} currentKey
     * @param {?=} parentKey
     * @return {?}
     */
    function styleToString(key, ob, themeVariables, currentKey, parentKey) {
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
                if (typeof element === 'object') {
                    subContent += styleToString(key, /** @type {?} */ (element), themeVariables, styleKey, newKey);
                }
                else {
                    /** @type {?} */
                    var newStyleKey = toHyphenCaseCache(styleKey);
                    if (newStyleKey.indexOf(DirAlias.start) !== -1) {
                        newStyleKey = dirCache(newStyleKey, themeVariables, DirAlias.start);
                    }
                    else if (newStyleKey.indexOf(DirAlias.end) !== -1) {
                        newStyleKey = dirCache(newStyleKey, themeVariables, DirAlias.end);
                    }
                    keyAndValue += newStyleKey + ":" + element + ";";
                }
            }
        }
        if (keyAndValue) {
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
     * @param {?} str
     * @return {?}
     */
    function toHyphenCase(str) {
        return str.replace(/([A-Z])/g, function (g) { return "-" + g[0].toLowerCase(); });
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
    function toHyphenCaseCache(str) {
        return str in STYLE_KEYS_MAP
            ? STYLE_KEYS_MAP[str]
            : STYLE_KEYS_MAP[str] = toHyphenCase(str);
    }
    /** @type {?} */
    var STYLE_KEYS_DIRECTIONS_MAP = {};
    /**
     * @param {?} val
     * @param {?} themeVariables
     * @param {?} dirAlias
     * @return {?}
     */
    function dirCache(val, themeVariables, dirAlias) {
        /** @type {?} */
        var newKey = themeVariables.direction + val;
        return newKey in STYLE_KEYS_DIRECTIONS_MAP
            ? STYLE_KEYS_DIRECTIONS_MAP[newKey]
            : STYLE_KEYS_DIRECTIONS_MAP[newKey] = val.replace(dirAlias, themeVariables.getDirection(dirAlias));
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function capitalizeFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    /**
     * @param {?} css
     * @param {?} media
     * @return {?}
     */
    function toMedia(css, media) {
        return "@media " + media + "{" + css + "}";
    }
    /**
     * @return {?}
     */
    function createNextClassId() {
        return "i" + (nextClassId++).toString(36);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STYLE_PRIORITY = -1;
    /** @type {?} */
    var DEFAULT_VALUE = '';
    var LyCommon = /** @class */ (function () {
        function LyCommon(theme, elementRef) {
            this.theme = theme;
            this.elementRef = elementRef;
        }
        Object.defineProperty(LyCommon.prototype, "raised", {
            get: /**
             * @return {?}
             */ function () { return this._raised; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) { this._raised = toBoolean(val); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCommon.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () { return this._disabled; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) { this._disabled = toBoolean(val); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyCommon.prototype, "outlined", {
            get: /**
             * @return {?}
             */ function () { return this._outlined; },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) { this._outlined = toBoolean(val); },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyCommon.prototype.setAutoContrast = /**
         * @return {?}
         */
            function () {
                this._autoContrast = true;
            };
        /**
         * @return {?}
         */
        LyCommon.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
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
                var __isContrast = this._isContrast = this._autoContrast && !__color || __color === 'auto';
                /** @type {?} */
                var newKey = "common----:" + (__bg || DEFAULT_VALUE) + "\u00B7" + (__color || DEFAULT_VALUE) + "\u00B7" + (__raised || DEFAULT_VALUE) + "\u00B7" + (__elevation || DEFAULT_VALUE) + "\u00B7" + (__disabled || DEFAULT_VALUE) + "\u00B7" + (__outlined || DEFAULT_VALUE) + "\u00B7" + (__shadowColor || DEFAULT_VALUE) + "\u00B7" + (__isContrast || DEFAULT_VALUE);
                this._className = this.theme.addStyle(newKey, function (theme) {
                    /** @type {?} */
                    var style = {};
                    if (__outlined) {
                        style.border = '1px solid currentColor';
                    }
                    if (__disabled) {
                        style.color = theme.text.disabled;
                        style.pointerEvents = 'none';
                        if (__bg) {
                            style.background = theme.button.disabled;
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
                    return /** @type {?} */ (style);
                }, this._getHostElement(), this._className, STYLE_PRIORITY);
            };
        /**
         * @return {?}
         */
        LyCommon.prototype._getHostElement = /**
         * @return {?}
         */
            function () {
                return this.elementRef.nativeElement;
            };
        LyCommon.decorators = [
            { type: i0.Directive, args: [{
                        selector: "\n            [bg],\n            [color],\n            [raised],\n            [raised][shadowColor],\n            [ly-button][outlined],\n            [elevation],\n            [elevation][shadowColor],\n            [disabled],\n            ly-card,\n            ly-toolbar,\n            ly-checkbox\n            "
                    },] }
        ];
        /** @nocollapse */
        LyCommon.ctorParameters = function () {
            return [
                { type: LyTheme2 },
                { type: i0.ElementRef }
            ];
        };
        LyCommon.propDecorators = {
            bg: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            raised: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            outlined: [{ type: i0.Input }],
            elevation: [{ type: i0.Input }],
            shadowColor: [{ type: i0.Input }]
        };
        return LyCommon;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyCommonModule = /** @class */ (function () {
        function LyCommonModule() {
        }
        LyCommonModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [LyCommon, LyWithClass],
                        exports: [LyCommon, LyWithClass]
                    },] }
        ];
        return LyCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var styles = function (theme) {
        return ({
            overlayBackdrop: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: theme.zIndex.overlay
            }
        });
    };
    var WindowScrollService = /** @class */ (function () {
        function WindowScrollService(document) {
            var _this = this;
            this.document = document;
            if (Platform.isBrowser) {
                this.scroll$ = rxjs.fromEvent(window, 'scroll').pipe(operators.auditTime(200), operators.map(function () {
                    return window.scrollY || _this.document.documentElement.scrollTop;
                }), operators.share());
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
                { type: undefined, decorators: [{ type: i0.Inject, args: [i2.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ WindowScrollService.ngInjectableDef = i0.defineInjectable({ factory: function WindowScrollService_Factory() { return new WindowScrollService(i0.inject(i2.DOCUMENT)); }, token: WindowScrollService, providedIn: "root" });
        return WindowScrollService;
    }());
    var LyOverlayContainer = /** @class */ (function () {
        function LyOverlayContainer(theme) {
            this.theme = theme;
            this._classes = this.theme.addStyleSheet(styles);
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
    var LyOverlayBackdrop = /** @class */ (function () {
        function LyOverlayBackdrop(el, _overlayConfig, commonStyles) {
            this.el = el;
            this._overlayConfig = _overlayConfig;
            this.el.nativeElement.classList.add(commonStyles.classes.fill);
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DomService = /** @class */ (function () {
        function DomService(componentFactoryResolver, overlayContainer) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.overlayContainer = overlayContainer;
        }
        /**
         * @template T
         * @param {?} _hostViewContainerRef
         * @param {?} component
         * @param {?} template
         * @return {?}
         */
        DomService.prototype.attach = /**
         * @template T
         * @param {?} _hostViewContainerRef
         * @param {?} component
         * @param {?} template
         * @return {?}
         */
            function (_hostViewContainerRef, component, template) {
                var _this = this;
                /** @type {?} */
                var viewRef = _hostViewContainerRef.createEmbeddedView(template);
                viewRef.detectChanges();
                this._viewContainerRef = _hostViewContainerRef;
                viewRef.rootNodes.forEach(function (rootNode) { return _this.addChild(rootNode); });
            };
        /**
         * @param {?} child
         * @return {?}
         */
        DomService.prototype.addChild = /**
         * @param {?} child
         * @return {?}
         */
            function (child) {
                this.overlayContainer.containerElement.appendChild(child);
            };
        /**
         * @param {?} componentRef
         * @return {?}
         */
        DomService.prototype.getDomElementFromComponentRef = /**
         * @param {?} componentRef
         * @return {?}
         */
            function (componentRef) {
                return /** @type {?} */ (( /** @type {?} */(componentRef.hostView))
                    .rootNodes[0]);
            };
        /**
         * @param {?} componentRef
         * @param {?} delay
         * @return {?}
         */
        DomService.prototype.destroyRef = /**
         * @param {?} componentRef
         * @param {?} delay
         * @return {?}
         */
            function (componentRef, delay) {
                var _this = this;
                setTimeout(function () {
                    if (_this._viewContainerRef) {
                        _this._viewContainerRef.remove();
                    }
                }, delay);
            };
        DomService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        DomService.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: LyOverlayContainer }
            ];
        };
        return DomService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LxDomModule = /** @class */ (function () {
        function LxDomModule() {
        }
        LxDomModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.CommonModule
                        ],
                        providers: [
                            DomService
                        ]
                    },] }
        ];
        return LxDomModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var FocusStatus = {
        /**mouse and/or touch*/
        DEFAULT: 'default',
        /** keyboard and/or program*/
        KEYBOARD: 'keyboard',
    };
    var LyFocusStateDeprecated = /** @class */ (function () {
        function LyFocusStateDeprecated(elementRef, _ngZone, _renderer, _cd) {
            var _this = this;
            this._ngZone = _ngZone;
            this._renderer = _renderer;
            this.stateMap = new Map();
            this._eventHandlers = new Map();
            this._stateSubject = new rxjs.Subject();
            this.lyFocusChange = new i0.EventEmitter();
            this._eventOptions = /** @type {?} */ ({ passive: true });
            if (Platform.isBrowser) {
                this._eventHandlers
                    .set('focus', this.on.bind(this))
                    .set('blur', this.on.bind(this))
                    .set('touchstart', this.on.bind(this))
                    .set('mousedown', this.on.bind(this));
                /** @type {?} */
                var element = elementRef.nativeElement;
                this.setTriggerElement(element);
                /** @type {?} */
                var ob = this._stateSubject.asObservable();
                this._stateSubscription = ob
                    // .debounceTime(111)
                    .pipe(operators.debounceTime(111))
                    .subscribe(function (e) {
                    _this.state = e;
                    _this._updateClass();
                    _this.lyFocusChange.emit(e);
                });
            }
        }
        /**
         * @return {?}
         */
        LyFocusStateDeprecated.prototype._updateState = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var state;
                if (this.stateMap.has('blur')) {
                    this.stateMap.clear();
                }
                else if (this.stateMap.has('focus') && this.stateMap.has('mousedown') || this.stateMap.has('focus') && this.stateMap.has('touchstart')) {
                    state = FocusStatus.DEFAULT;
                }
                else if (this.stateMap.has('focus')) {
                    state = FocusStatus.KEYBOARD;
                }
                this._stateSubject.next(state);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LyFocusStateDeprecated.prototype.on = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.stateMap.set(event.type, true);
                this._updateState();
            };
        /**
         * @return {?}
         */
        LyFocusStateDeprecated.prototype._updateClass = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var element = this._containerElement;
                /** @type {?} */
                var state = this.state;
                /** @type {?} */
                var toggleClass = function (className, shouldSet) { return shouldSet ? _this._renderer.addClass(element, className) : _this._renderer.removeClass(element, className); };
                toggleClass("ly-focused", !!state);
                for (var key in FocusStatus) {
                    if (FocusStatus.hasOwnProperty(key)) {
                        /** @type {?} */
                        var className = FocusStatus[key];
                        toggleClass("ly-" + className + "-focused", state === className);
                    }
                }
            };
        /**
         * @param {?} element
         * @return {?}
         */
        LyFocusStateDeprecated.prototype.setTriggerElement = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                var _this = this;
                if (this._containerElement) {
                    this._eventHandlers.forEach(function (fn, type) {
                        _this._containerElement.removeEventListener(type, fn, _this._eventOptions);
                    });
                }
                if (element) {
                    this._ngZone.runOutsideAngular(function () {
                        return _this._eventHandlers.forEach(function (fn, type) {
                            return element.addEventListener(type, fn, _this._eventOptions);
                        });
                    });
                }
                this._containerElement = element;
            };
        /**
         * @return {?}
         */
        LyFocusStateDeprecated.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (Platform.isBrowser) {
                    this._stateSubscription.unsubscribe();
                    this.setTriggerElement(null);
                }
            };
        LyFocusStateDeprecated.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[lyFocusState]',
                        exportAs: 'lyFocusState'
                    },] }
        ];
        /** @nocollapse */
        LyFocusStateDeprecated.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.NgZone },
                { type: i0.Renderer2 },
                { type: i0.ChangeDetectorRef }
            ];
        };
        LyFocusStateDeprecated.propDecorators = {
            lyFocusChange: [{ type: i0.Output }]
        };
        return LyFocusStateDeprecated;
    }());
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyFocusStateModule = /** @class */ (function () {
        function LyFocusStateModule() {
        }
        LyFocusStateModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.CommonModule
                        ],
                        declarations: [LyFocusStateDeprecated],
                        exports: [LyFocusStateDeprecated]
                    },] }
        ];
        return LyFocusStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AUI_VERSION = '1.7.11-nightly.20181112-joe0zbhx';
    /** @type {?} */
    var AUI_LAST_UPDATE = '2018-11-12T08:07:48.211Z';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LY_HAMMER_OPTIONS = new i0.InjectionToken('LY_HAMMER_OPTIONS');
    /** @type {?} */
    var HAMMER_GESTURES_EVENTS = [
        'slide',
        'slidestart',
        'slideend',
        'slideright',
        'slideleft'
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
                var hammer = typeof window !== 'undefined' ? ( /** @type {?} */(window)).Hammer : null;
                /** @type {?} */
                var mc = new hammer(element, this._hammerOptions || undefined);
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CreateFromTemplateRef = /** @class */ (function () {
        function CreateFromTemplateRef(_componentFactoryResolver, _appRef, _templateRef, _overlayContainer, _context, _injector, windowScroll, config) {
            var _this = this;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._appRef = _appRef;
            this._overlayContainer = _overlayContainer;
            this._injector = _injector;
            this.windowScrollSub = rxjs.Subscription.EMPTY;
            // this._viewRef = _templateRef.createEmbeddedView(_context);
            // this._viewRef.detectChanges();
            this._el = document.createElement('div');
            /** @type {?} */
            var __styles = __assign({ position: 'absolute', display: 'flex', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }, config.styles);
            /** @type {?} */
            var newInjector = i0.Injector.create([
                {
                    provide: 'overlayConfig',
                    useValue: /** @type {?} */ (__assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles }))
                }
            ], this._injector);
            this.updateStyles(__styles);
            if (config.host) {
                this.windowScrollSub = windowScroll.scroll$.subscribe(function (val) {
                    /** @type {?} */
                    var rect = config.host.getBoundingClientRect();
                    if (rect.top !== __styles.top || rect.left !== __styles.left) {
                        /** @type {?} */
                        var newStyles = {
                            top: rect.top,
                            left: rect.left
                        };
                        _this.updateStyles(newStyles);
                    }
                });
            }
            this._compRefOverlayBackdrop = this.generateComponent(LyOverlayBackdrop, newInjector);
            this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
            /** @type {?} */
            var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._add(backdropEl);
            this._appendComponentToBody(_templateRef, _context, this._injector);
        }
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
                    /** @type {?} */
                    var viewRef = this._viewRef = type.createEmbeddedView(context || {});
                    this._appRef.attachView(viewRef);
                    // Get DOM element from component
                    viewRef.rootNodes.forEach(function (_) { return _this._el.appendChild(_); });
                    // Append DOM element to the body
                    this._overlayContainer._add(this._el);
                }
                else {
                    this._compRef = this.generateComponent(type, injector);
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
                if (this._compRefOverlayBackdrop) {
                    this._appRef.detachView(this._compRefOverlayBackdrop.hostView);
                    this._compRefOverlayBackdrop.destroy();
                    /** @type {?} */
                    var backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
                    this._overlayContainer._remove(backdropEl);
                }
                this.windowScrollSub.unsubscribe();
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
        function LyOverlay(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _windowScroll) {
            this._overlayContainer = _overlayContainer;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._appRef = _appRef;
            this._injector = _injector;
            this._windowScroll = _windowScroll;
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
                return new CreateFromTemplateRef(this._componentFactoryResolver, this._appRef, template, this._overlayContainer, context, this._injector, this._windowScroll, config);
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
                { type: WindowScrollService }
            ];
        };
        /** @nocollapse */ LyOverlay.ngInjectableDef = i0.defineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(i0.inject(LyOverlayContainer), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR), i0.inject(WindowScrollService)); }, token: LyOverlay, providedIn: "root" });
        return LyOverlay;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    exports.DomService = DomService;
    exports.LxDomModule = LxDomModule;
    exports.LyFocusStateModule = LyFocusStateModule;
    exports.FocusStatus = FocusStatus;
    exports.LyFocusStateDeprecated = LyFocusStateDeprecated;
    exports.LyFocusState = LyFocusState;
    exports.AUI_VERSION = AUI_VERSION;
    exports.AUI_LAST_UPDATE = AUI_LAST_UPDATE;
    exports.LY_HAMMER_OPTIONS = LY_HAMMER_OPTIONS;
    exports.LyHammerGestureConfig = LyHammerGestureConfig;
    exports.LyCommon = LyCommon;
    exports.CoreTheme = CoreTheme;
    exports.LY_THEME_GLOBAL_VARIABLES = LY_THEME_GLOBAL_VARIABLES;
    exports.LY_THEME = LY_THEME;
    exports.LY_THEME_NAME = LY_THEME_NAME;
    exports.toHyphenCase = toHyphenCase;
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
    exports.ɵa = LyWithClass;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc3JjL3BhbGV0dGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc2hhZG93LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2FseWxlLWNvbmZpZy1zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3BsYXRmb3JtLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3Bhc3NpdmUtbGlzdGVuZXJzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLWNvbmZpZy50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BhbHlsZS91aS9zcmMvc3R5bGUtdXRpbHMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lMi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvY29tbW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZWwvb2Zmc2V0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvaXMtYm9vbGVhbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2RlZmF1bHQtZW50cnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS93aXRoLWNsYXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlcy9jb3JlLXN0eWxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS1jb250YWluZXIudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL2RvbS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9seC1kb20ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2ZvY3VzLXN0YXRlL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdmVyc2lvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9nZXN0dXJlL2dlc3R1cmUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy91bmRlZmluZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5Lm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbXV0YXRpb24tb2JzZXJ2ZXItZmFjdG9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJhc3RZSVEoaGV4Y29sb3IpIHtcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoNCwgMiksIDE2KTtcbiAgY29uc3QgeWlxID0gKChyICogMjk5KSArIChnICogNTg3KSArIChiICogMTE0KSkgLyAxMDAwO1xuICByZXR1cm4gKHlpcSA+PSAxMjgpID8gJ2JsYWNrJyA6ICd3aGl0ZSc7XG59XG4iLCJpbXBvcnQgKiBhcyBfY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5jb25zdCBjaHJvbWEgPSBfY2hyb21hO1xuXG5jb25zdCBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG5jb25zdCBzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkgPSAwLjE0O1xuY29uc3Qgc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkgPSAwLjEyO1xuZXhwb3J0IGNvbnN0IFNoYWRvd3MgPSBbXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDEsIDMsIDAsIDAsIDEsIDEsIDAsIDAsIDIsIDEsIC0xXSxcbiAgWzAsIDEsIDUsIDAsIDAsIDIsIDIsIDAsIDAsIDMsIDEsIC0yXSxcbiAgWzAsIDEsIDgsIDAsIDAsIDMsIDQsIDAsIDAsIDMsIDMsIC0yXSxcbiAgWzAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMF0sXG4gIFswLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxXSxcbiAgWzAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDJdLFxuICBbMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMl0sXG4gIFswLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgM10sXG4gIFswLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgM10sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNF0sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNF0sXG4gIFswLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNF0sXG4gIFswLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNV0sXG4gIFswLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDVdLFxuICBbMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1XSxcbiAgWzAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNl0sXG4gIFswLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDZdLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgN10sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3XSxcbiAgWzAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDddLFxuICBbMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOF0sXG4gIFswLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4XVxuXTtcbmV4cG9ydCBmdW5jdGlvbiBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZChlbGV2YXRpb246IG51bWJlciB8IHN0cmluZyA9IDIsIGNvbG9yID0gJyMwMDAnKSB7XG4gIGNvbnN0IENvbG9yID0gY2hyb21hKGNvbG9yKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYGJveC1zaGFkb3c6JHtlWzBdfXB4ICR7ZVsxXX1weCAke2VbMl19cHggJHtlWzNdfXB4ICR7Y29sb3JzWzBdfSwke2VbNF19cHggJHtlWzVdfXB4ICR7ZVs2XX1weCAke2VbN119cHggJHtjb2xvcnNbMV19LCR7ZVs4XX1weCAke2VbOV19cHggJHtlWzEwXX1weCAke2VbMTFdfXB4ICR7Y29sb3JzWzJdfTtgO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFkb3dCdWlsZGVyKGVsZXZhdGlvbjogbnVtYmVyIHwgc3RyaW5nLCBjb2xvcj86IHN0cmluZykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvciB8fCAnIzAwMCcpLmRhcmtlbigpLnNhdHVyYXRlKDIpO1xuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5VW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5KS5jc3MoKVxuICBdO1xuICBjb25zdCBlID0gU2hhZG93c1tlbGV2YXRpb25dO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgJHtlWzBdfXB4ICR7ZVsxXX1weCAke2VbMl19cHggJHtlWzNdfXB4ICR7Y29sb3JzWzBdfSwke2VbNF19cHggJHtlWzVdfXB4ICR7ZVs2XX1weCAke2VbN119cHggJHtjb2xvcnNbMV19LCR7ZVs4XX1weCAke2VbOV19cHggJHtlWzEwXX1weCAke2VbMTFdfXB4ICR7Y29sb3JzWzJdfTtgO1xuXG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRIRU1FX1ZBUklBQkxFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYWxldHRlVmFyaWFibGVzPignbHkudGhlbWUudmFyaWFibGVzJyk7XHJcbmV4cG9ydCBjb25zdCBJU19DT1JFX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPHRydWU+KCdseS5pcy5yb290Jyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHQge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4vLyBleHBvcnQgY2xhc3MgPGRlcHJlY2F0ZWQ+VGhlbWVWYXJpYWJsZXMge1xyXG4vLyAgIC8qKiBUaGVtZSBuYW1lICovXHJcbi8vICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgIHByaW1hcnk/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4vLyAgIGFjY2VudD86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbi8vICAgLyoqIHdhcm4gb3IgZXJyb3IgY29sb3IgKi9cclxuLy8gICB3YXJuPzogUGFsZXR0ZVZhcmlhYmxlcztcclxuLy8gICBzY2hlbWU/OiBzdHJpbmc7XHJcbi8vICAgY29sb3JTY2hlbWVzPzoge1xyXG4vLyAgICAgW2tleTogc3RyaW5nXTogQ29sb3JTY2hlbWVcclxuLy8gICB9O1xyXG4vLyAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZVZhcmlhYmxlcyB7XHJcbiAgZGVmYXVsdD86IHN0cmluZztcclxuICBjb250cmFzdD86IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JTY2hlbWUge1xyXG4gIGJhY2tncm91bmQ/OiB7XHJcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxyXG4gICAgcGFwZXI/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICB0ZXh0Pzoge1xyXG4gICAgZGVmYXVsdDogc3RyaW5nLFxyXG4gICAgcHJpbWFyeT86IHN0cmluZyxcclxuICAgIHNlY29uZGFyeT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogc3RyaW5nLFxyXG4gICAgaGludD86IHN0cmluZyxcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICB9O1xyXG4gIGRpdmlkZXI/OiBzdHJpbmc7XHJcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXHJcbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XHJcbiAgYmFyPzogc3RyaW5nO1xyXG4gIGlucHV0Pzoge1xyXG4gICAgbGFiZWw/OiBzdHJpbmcsXHJcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcclxuICB9O1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4iLCJcclxuLy8gV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBzdXBwb3J0cyB0aGUgVjggQnJlYWsgSXRlcmF0b3IuIFRoZSBWOCBjaGVja1xyXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cclxuY29uc3QgaGFzVjhCcmVha0l0ZXJhdG9yID0gKHR5cGVvZihJbnRsKSAhPT0gJ3VuZGVmaW5lZCcgJiYgKEludGwgYXMgYW55KS52OEJyZWFrSXRlcmF0b3IpO1xyXG4vKipcclxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcclxuICogY2hlY2tpbmcgYnJvd3Nlci1zcGVjaWZpYyBnbG9iYWwgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGlzQnJvd3NlcjogYm9vbGVhbiA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudDtcclxuICAvKiogTGF5b3V0IEVuZ2luZXMgKi9cclxuICBFREdFID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZWRnZSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gIFRSSURFTlQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gRWRnZUhUTUwgYW5kIFRyaWRlbnQgbW9jayBCbGluayBzcGVjaWZpYyB0aGluZ3MgYW5kIG5lZWQgdG8gYmUgZXhjbHVkZWQgZnJvbSB0aGlzIGNoZWNrLlxyXG4gIEJMSU5LID0gUGxhdGZvcm0uaXNCcm93c2VyICYmXHJcbiAgICAgICghISgod2luZG93IGFzIGFueSkuY2hyb21lIHx8IGhhc1Y4QnJlYWtJdGVyYXRvcikgJiYgISFDU1MgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UKTtcclxuXHJcbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXHJcbiAgLy8gZW5zdXJlIHRoYXQgV2Via2l0IHJ1bnMgc3RhbmRhbG9uZSBhbmQgaXMgbm90IHVzZWQgYXMgYW5vdGhlciBlbmdpbmUncyBiYXNlLlxyXG4gIFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxyXG4gICAgICAvQXBwbGVXZWJLaXQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLkJMSU5LICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xyXG4gIElPUyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhKHdpbmRvdyBhcyBhbnkpLk1TU3RyZWFtO1xyXG5cclxuICAvLyBJdCdzIGRpZmZpY3VsdCB0byBkZXRlY3QgdGhlIHBsYWluIEdlY2tvIGVuZ2luZSwgYmVjYXVzZSBtb3N0IG9mIHRoZSBicm93c2VycyBpZGVudGlmeVxyXG4gIC8vIHRoZW0gc2VsZiBhcyBHZWNrby1saWtlIGJyb3dzZXJzIGFuZCBtb2RpZnkgdGhlIHVzZXJBZ2VudCdzIGFjY29yZGluZyB0byB0aGF0LlxyXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxyXG4gIC8vIGluc3RlYWQgb2YgaGF2aW5nIGFuIHVuc3RhYmxlIGNoZWNrIGZvciBHZWNrby5cclxuICBGSVJFRk9YID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gVHJpZGVudCBvbiBtb2JpbGUgYWRkcyB0aGUgYW5kcm9pZCBwbGF0Zm9ybSB0byB0aGUgdXNlckFnZW50IHRvIHRyaWNrIGRldGVjdGlvbnMuXHJcbiAgQU5EUk9JRCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvYW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLy8gU2FmYXJpIGJyb3dzZXJzIHdpbGwgaW5jbHVkZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlaXIgdXNlckFnZW50LiBTb21lIGJyb3dzZXJzIG1heSBmYWtlXHJcbiAgLy8gdGhpcyBhbmQganVzdCBwbGFjZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlIHVzZXJBZ2VudC4gVG8gYmUgbW9yZSBzYWZlIGFib3V0IFNhZmFyaSBldmVyeVxyXG4gIC8vIFNhZmFyaSBicm93c2VyIHNob3VsZCBhbHNvIHVzZSBXZWJraXQgYXMgaXRzIGxheW91dCBlbmdpbmUuXHJcbiAgU0FGQVJJID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9zYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIHRoaXMuV0VCS0lUO1xyXG59XHJcbiIsImxldCBzdXBwb3J0c1Bhc3NpdmU7XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMoKTogYm9vbGVhbiB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmUgPT09IHZvaWQgMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9XG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTdHlsZVV0aWxzLCBEaXIgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5pbXBvcnQgeyBTdHlsZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmlwcGxlVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvcmlwcGxlJztcbmltcG9ydCB7IFR5cG9ncmFwaHlWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IENoZWNrYm94VmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvY2hlY2tib3gnO1xuXG5leHBvcnQgY29uc3QgTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYXJ0aWFsVGhlbWVWYXJpYWJsZXM+KCdseS50aGVtZS5nbG9iYWwudmFyaWFibGVzJyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHlfdGhlbWVfY29uZmlnJyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUVfTkFNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdseS50aGVtZS5uYW1lJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaW1hcnk6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGFjY2VudDogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgd2FybjogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYmFja2dyb3VuZDoge1xuICAgIC8qKiBzZWNvbmRhcnkgKi9cbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcixcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICB0ZXJ0aWFyeTogc3RyaW5nLFxuICAgIGJhc2U6IHN0cmluZ1xuICB9O1xuICB0ZXh0OiB7XG4gICAgZGVmYXVsdDogc3RyaW5nLFxuICAgIHByaW1hcnk6IHN0cmluZyxcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICBkaXNhYmxlZDogc3RyaW5nLFxuICAgIGhpbnQ6IHN0cmluZ1xuICB9O1xuICB0eXBvZ3JhcGh5OiBUeXBvZ3JhcGh5VmFyaWFibGVzO1xuICAvKiogY29sb3IgZm9yIGRpdmlkZXIgKi9cbiAgZGl2aWRlcjogc3RyaW5nO1xuICBzaGFkb3c6IHN0cmluZztcbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBzaGFkb3cgaW5zdGVhZCAqL1xuICBjb2xvclNoYWRvdz86IHN0cmluZztcbiAgYnV0dG9uOiB7XG4gICAgZGlzYWJsZWQ6IHN0cmluZztcbiAgfTtcbiAgcmFkaW86IHtcbiAgICAvKiogY29sb3IgZm9yIHJhZGlvOm91dGVyQ2lyY2xlICovXG4gICAgb3V0ZXJDaXJjbGU/OiBzdHJpbmc7XG4gICAgLyoqIEBkZXByZWNhdGVkIHVzZSBvdXRlckNpcmNsZSBpbnN0ZWFkICovXG4gICAgcmFkaW9PdXRlckNpcmNsZT86IHN0cmluZztcbiAgfTtcbiAgbWVudToge1xuICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lclxuICB9O1xuICBkcmF3ZXI6IHtcbiAgICAvKiogY29sb3IgZm9yIGRyYXdlcjpiYWNrZHJvcCAqL1xuICAgIGJhY2tkcm9wOiBzdHJpbmdcbiAgfTtcbiAgZmllbGQ6IHtcbiAgICBib3JkZXJDb2xvcjogc3RyaW5nXG4gICAgbGFiZWxDb2xvcjogc3RyaW5nXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgW2FwcGVhcmFuY2VOYW1lOiBzdHJpbmddOiB7XG4gICAgICAgIGNvbnRhaW5lcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZpZWxkc2V0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmllbGRzZXRIb3Zlcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZpZWxkc2V0Rm9jdXNlZD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lckZvY3VzZWQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBsYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHBsYWNlaG9sZGVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5wdXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmbG9hdGluZ0xhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcHJlZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5maXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBzdWZmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBoaW50PzogU3R5bGVDb250YWluZXJcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGljb25CdXR0b246IHtcbiAgICBzaXplOiBzdHJpbmdcbiAgfTtcbiAgaWNvbjoge1xuICAgIGZvbnRTaXplOiBzdHJpbmdcbiAgfTtcbiAgekluZGV4OiB7XG4gICAgdG9vbGJhcjogbnVtYmVyXG4gICAgZHJhd2VyOiBudW1iZXJcbiAgICBvdmVybGF5OiBudW1iZXJcbiAgICBba2V5OiBzdHJpbmddOiBudW1iZXJcbiAgfTtcbiAgZGlyZWN0aW9uPzogRGlyO1xuICBhbmltYXRpb25zOiB7XG4gICAgY3VydmVzOiB7XG4gICAgICBzdGFuZGFyZDogc3RyaW5nXG4gICAgICBkZWNlbGVyYXRpb246IHN0cmluZ1xuICAgICAgYWNjZWxlcmF0aW9uOiBzdHJpbmdcbiAgICAgIHNoYXJwOiBzdHJpbmdcbiAgICB9LFxuICAgIGR1cmF0aW9uczoge1xuICAgICAgY29tcGxleDogbnVtYmVyXG4gICAgICBlbnRlcmluZzogbnVtYmVyXG4gICAgICBleGl0aW5nOiBudW1iZXJcbiAgICB9XG4gIH07XG4gIHJpcHBsZTogUmlwcGxlVmFyaWFibGVzO1xuICBiYWRnZToge1xuICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lcixcbiAgICBwb3NpdGlvbj86IHtcbiAgICAgIFtwb3NpdGlvbk5hbWU6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyXG4gICAgfVxuICB9O1xuICBjaGVja2JveDogQ2hlY2tib3hWYXJpYWJsZXM7XG59XG5cbmV4cG9ydCB0eXBlIFRoZW1lVmFyaWFibGVzID0gTHlTdHlsZVV0aWxzICYgVGhlbWVDb25maWc7XG5leHBvcnQgdHlwZSBQYXJ0aWFsVGhlbWVWYXJpYWJsZXMgPSBQYXJ0aWFsPFRoZW1lVmFyaWFibGVzPjtcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0VmFsIHtcbiAgZGVmYXVsdDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlQ29sb3Ige1xuICBjb250cmFzdD86IHN0cmluZztcbiAgLyoqIHNoYWRvdyBjb2xvciAqL1xuICBzaGFkb3c/OiBzdHJpbmc7XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBicmVha3BvaW50czoge1xuICAgIFhTbWFsbDogc3RyaW5nLFxuICAgIFNtYWxsOiBzdHJpbmcsXG4gICAgTWVkaXVtOiBzdHJpbmcsXG4gICAgTGFyZ2U6IHN0cmluZyxcbiAgICBYTGFyZ2U6IHN0cmluZyxcblxuICAgIEhhbmRzZXQ6IHN0cmluZyxcbiAgICBUYWJsZXQ6IHN0cmluZyxcbiAgICBXZWI6IHN0cmluZyxcblxuICAgIEhhbmRzZXRQb3J0cmFpdDogc3RyaW5nLFxuICAgIFRhYmxldFBvcnRyYWl0OiBzdHJpbmcsXG4gICAgV2ViUG9ydHJhaXQ6IHN0cmluZyxcblxuICAgIEhhbmRzZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBUYWJsZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBXZWJMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfTtcbiAgZGlyZWN0aW9uPzogRGlyO1xuICBweFRvUmVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy50eXBvZ3JhcGh5LmZvbnRTaXplIC8gMTQ7XG4gICAgcmV0dXJuIGAke3ZhbHVlIC8gdGhpcy50eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSAqIHNpemV9cmVtYDtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcsIG9wdGlvbmFsPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIHZhbHVlLCBvcHRpb25hbCk7XG4gIH1cbiAgZ2V0QnJlYWtwb2ludChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBgQG1lZGlhICR7dGhpcy5icmVha3BvaW50c1trZXldIHx8IGtleX1gO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKHZhbDogRGlyQWxpYXMpIHtcbiAgICBpZiAodmFsID09PSBEaXJBbGlhcy5lbmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gRGlyIHtcbiAgcnRsID0gJ3J0bCcsXG4gIGx0ciA9ICdsdHInXG59XG5leHBvcnQgZW51bSBEaXJBbGlhcyB7XG4gIHN0YXJ0ID0gJ3N0YXJ0JyxcbiAgZW5kID0gJ2VuZCdcbn1cbmV4cG9ydCBlbnVtIERpclBvc2l0aW9uIHtcbiAgbGVmdCA9ICdsZWZ0JyxcbiAgcmlnaHQgPSAncmlnaHQnXG59XG5cbi8qKlxuICogZ2V0IGNvbG9yIG9mIG9iamVjdFxuICogQHBhcmFtIG9iaiBvYmplY3RcbiAqIEBwYXJhbSBwYXRoIHBhdGhcbiAqIEBwYXJhbSBvcHRpb25hbCBnZXQgb3B0aW9uYWwgdmFsdWUsIGlmIG5vdCBleGlzdCByZXR1cm4gZGVmYXVsdCBpZiBub3QgaXMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogc3RyaW5nW10gfCBzdHJpbmcsIG9wdGlvbmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcG9zaWJsZU9iID0gb2JqW19wYXRoW2ldXTtcbiAgICBpZiAocG9zaWJsZU9iKSB7XG4gICAgICBvYmogPSBwb3NpYmxlT2I7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBpZiBub3QgZXhpc3QgKi9cbiAgICAgIHJldHVybiBwYXRoIGFzIHN0cmluZztcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG9iaiBhcyBzdHJpbmc7XG4gIH0gZWxzZSBpZiAob3B0aW9uYWwpIHtcbiAgICByZXR1cm4gb2JqW29wdGlvbmFsXSB8fCBvYmpbJ2RlZmF1bHQnXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqWydkZWZhdWx0J107XG4gIH1cbiAgLy8gcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hNZWRpYShzdHI6IHN0cmluZyB8IG51bWJlciwgZm46ICgodmFsOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcsIGlzTWVkaWE6IG51bWJlcikgPT4gdm9pZCkpIHtcbiAgaWYgKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgdmFsdWVzID0gc3RyLnNwbGl0KC9cXHMvZyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHZhbEl0ZW0gPSB2YWx1ZXNbaW5kZXhdLnNwbGl0KC9cXEAvZyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbEl0ZW0uc2hpZnQoKTtcbiAgICAgIGNvbnN0IGxlbiA9IHZhbEl0ZW0ubGVuZ3RoO1xuICAgICAgaWYgKGxlbikge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCB2YWxJdGVtW2pdLCB2YWxJdGVtLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdW5kZWZpbmVkLCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmbi5jYWxsKHVuZGVmaW5lZCwgc3RyLCB1bmRlZmluZWQsIDApO1xuICB9XG59XG4vKipcbiAqIFNpbXBsZSBvYmplY3QgY2hlY2suXG4gKiBAcGFyYW0gaXRlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVPih0YXJnZXQ6IFQsIHNvdXJjZTogVSk6IFQgJiBVO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYpOiBUICYgVSAmIFY7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFUsIFYsIFc+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogViwgc291cmNlMzogVyk6IFQgJiBVICYgViAmIFc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldDogb2JqZWN0LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueTtcblxuLyoqXG4gKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLlxuICogQHBhcmFtIHRhcmdldFxuICogQHBhcmFtIC4uLnNvdXJjZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgeyByZXR1cm4gdGFyZ2V0OyB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHsgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHt9IH0pOyB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRSwgVGhlbWVWYXJpYWJsZXMsIExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbWVyZ2VEZWVwIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBmaXJzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSB0aGVtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfdGhlbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgVGhlbWVWYXJpYWJsZXM+KCk7XG4gIHByaXZhdGUgX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIERhdGFTdHlsZT4+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUUpIHRoZW1lQ29uZmlnOiBUaGVtZUNvbmZpZ1tdIHwgVGhlbWVDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTKSBnbG9iYWxWYXJpYWJsZXM6IFRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUUgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCB7XG4gICAgICBpZDogJ2x5JyxcbiAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgZGF0YToge31cbiAgICB9KTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBub2RlczogTm9kZUxpc3QgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdseS1zLWMnKTtcbiAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2Rlcy5pdGVtKGluZGV4KTtcbiAgICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZpcnN0RWxlbWVudCA9IF9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhlbWVDb25maWcpKSB7XG4gICAgICB0aGVtZUNvbmZpZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgICAgbWVyZ2VEZWVwKGl0ZW0sIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGQoaXRlbSBhcyBhbnkpO1xuICAgICAgICB0aGlzLnRoZW1lcy5hZGQoaXRlbS5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgIG1lcmdlRGVlcCh0aGVtZUNvbmZpZywgZ2xvYmFsVmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkKHRoZW1lQ29uZmlnIGFzIGFueSk7XG4gICAgICB0aGlzLnRoZW1lcy5hZGQodGhlbWVDb25maWcubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lOiBUaGVtZVZhcmlhYmxlc1xuICAgKi9cbiAgYWRkKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykge1xuICAgIHRoaXMuX3RoZW1lTWFwLnNldCh0aGVtZS5uYW1lLCB0aGVtZSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuc2V0KHRoZW1lLm5hbWUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuICBnZXRTdHlsZU1hcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGlyQWxpYXMgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICdAZ2xvYmFsJzoge1xuICAgICcqLCAqOmFmdGVyLCAqOmJlZm9yZSc6IHtcbiAgICAgICctd2Via2l0LWJveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnLW1vei1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCdcbiAgICB9XG4gIH1cbn07XG5cblxuY29uc3QgUkVGX1JFR19FWFAgPSAvXFx7KFtcXHctXSspXFx9L2c7XG5cbmVudW0gVHlwZVN0eWxlIHtcbiAgTXVsdGlwbGUsXG4gIE9ubHlPbmVcbn1cblxuY29uc3QgU1RZTEVfTUFQNTogTWFwPGFueSwgU3R5bGVNYXA1PiA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZU1hcDUge1xuICBzdHlsZXM6IFN0eWxlc0ZuMjxhbnk+IHwgU3R5bGVzMjtcbiAgdHlwZTogVHlwZVN0eWxlO1xuICBwcmlvcml0eTogbnVtYmVyO1xuICBjc3M6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIGdsb2JhbCB0aGVtZSAqL1xuICBjbGFzc2VzPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogcmVxdWlyZVVwZGF0ZSAqL1xuICBjbGFzc2VzV2l0aFRoZW1lPzoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICAgIH0gfCBzdHJpbmdcbiAgfTtcbiAgcmVxdWlyZVVwZGF0ZT86IGJvb2xlYW47XG59XG5jb25zdCBDTEFTU0VTX01BUDoge1xuICBbaWRPclRoZW1lTmFtZTogc3RyaW5nXToge1xuICAgIFtjbGFzc05hbWU6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nXG59ID0ge307XG5jb25zdCBTVFlMRV9LRVlTX01BUCA9IHt9O1xubGV0IG5leHRDbGFzc0lkID0gMDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVzSW5Eb2N1bWVudCB7XG4gIHN0eWxlczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+XG4gIH0gPSB7fTtcbiAgc3R5bGVDb250YWluZXJzID0gbmV3IE1hcDxudW1iZXIsIEhUTUxFbGVtZW50PigpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lVmFyaWFibGVzO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG4gIGluaXRpYWxUaGVtZTogc3RyaW5nO1xuICBlbGVtZW50czogTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD47XG4gIF9lbGVtZW50c01hcCA9IG5ldyBNYXA8YW55LCBIVE1MU3R5bGVFbGVtZW50PigpO1xuXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBDTEFTU0VTX01BUDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVzSW5Eb2N1bWVudDogU3R5bGVzSW5Eb2N1bWVudCxcbiAgICBwdWJsaWMgY29yZTogQ29yZVRoZW1lLFxuICAgIEBJbmplY3QoTFlfVEhFTUVfTkFNRSkgdGhlbWVOYW1lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVOYW1lKTtcbiAgICAgIHRoaXMuX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGVtZU5hbWUgaW4gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1xuICAgICAgPyB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV1cbiAgICAgIDogdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5fY3JlYXRlSW5zdGFuY2VGb3JUaGVtZSh0aGVtZU5hbWUpO1xuICAgICAgaWYgKCF0aGlzLmluaXRpYWxUaGVtZSkge1xuICAgICAgICB0aGlzLmluaXRpYWxUaGVtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgICB9XG4gICAgICB0aGlzLl9hZGREZWZhdWx0U3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBkeW5hbWljIHN0eWxlLCB1c2Ugb25seSB3aXRoaW4gQElucHV0KClcbiAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZFxuICAgKiBAcGFyYW0gc3R5bGUgU3R5bGVzXG4gICAqIEBwYXJhbSBlbCBFbGVtZW50XG4gICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2Ugb2YgdGhpcywgdGhpcyByZXBsYWNlcyB0aGUgZXhpc3Rpbmcgc3R5bGUgd2l0aCBhIG5ldyBvbmUgd2hlbiBpdCBjaGFuZ2VzXG4gICAqL1xuICBhZGRTdHlsZShpZDogc3RyaW5nLCBzdHlsZTogU3R5bGVDb250YWluZXIgfCAoKHRoZW1lKSA9PiBTdHlsZUNvbnRhaW5lcikgfCAoKHRoZW1lKSA9PiBzdHJpbmcpIHwgc3RyaW5nLCBlbD86IGFueSwgaW5zdGFuY2U/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmFkZENzcyhpZCwgc3R5bGUgYXMgYW55LCBwcmlvcml0eSk7XG4gICAgaWYgKG5ld0NsYXNzID09PSBpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICBpZiAoZWwpIHtcbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICBpZiAobmV3Q2xhc3MgPT09IG9sZENsYXNzKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzcywgb2xkQ2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBzZXRUaGVtZShuYW06IHN0cmluZykge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHRoZW1lLnNldFRoZW1lKCd0aGVtZS1uYW1lJylcXGAgaXMgb25seSBhdmFpbGFibGUgaW4gYnJvd3NlciBwbGF0Zm9ybWApO1xuICAgIH1cbiAgICBpZiAobmFtICE9PSB0aGlzLmNvbmZpZy5uYW1lKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQobmFtKTtcbiAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoXywga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlRGF0YSA9IFNUWUxFX01BUDUuZ2V0KGtleSk7XG4gICAgICAgIGlmIChzdHlsZURhdGEucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVEYXRhLnN0eWxlcywga2V5LCBzdHlsZURhdGEucHJpb3JpdHksIHN0eWxlRGF0YS50eXBlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBzdHlsZSwgc2ltaWxhciB0byBzZXRVcFN0eWxlIGJ1dCB0aGlzIG9ubHkgYWNjZXB0IHN0cmluZ1xuICAgKiBAcGFyYW0gaWQgaWQgb2Ygc3R5bGVcbiAgICogQHBhcmFtIGNzcyBzdHlsZSBpbiBzdHJpbmdcbiAgICovXG4gIHByaXZhdGUgYWRkQ3NzKGlkOiBzdHJpbmcsIGNzczogKCh0KSA9PiBzdHJpbmcpIHwgc3RyaW5nLCBwcmlvcml0eTogbnVtYmVyLCBtZWRpYT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbmV3SWQgPSBgfj4ke2lkfWA7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoY3NzIGFzIGFueSwgbmV3SWQsIHByaW9yaXR5LCBUeXBlU3R5bGUuT25seU9uZSwgZmFsc2UsIG1lZGlhKSBhcyBzdHJpbmc7XG4gIH1cbiAgcHJpdmF0ZSBfYWRkRGVmYXVsdFN0eWxlcygpIHtcbiAgICB0aGlzLmFkZFN0eWxlU2hlZXQoZGVmYXVsdFN0eWxlcyk7XG4gIH1cblxuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgcHJpb3JpdHk/OiBudW1iZXIpOiBJQ2xhc3NlczxUPjtcbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiAoU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiksIGlkOiBzdHJpbmcpOiBJQ2xhc3NlczxUPjtcbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiAoU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiksIGlkOiBzdHJpbmcgfCBzdHJpbmcsIHByaW9yaXR5OiBudW1iZXIpOiBJQ2xhc3NlczxUPjtcblxuICAvKipcbiAgICogQWRkIG5ldyBhZGQgYSBuZXcgc3R5bGUgc2hlZXRcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZXNcbiAgICogQHBhcmFtIGlkIGRlcHJlY2F0ZWQsIHVuaXF1ZSBpZCBmb3Igc3R5bGUgZ3JvdXBcbiAgICogQHBhcmFtIHByaW9yaXR5IHByaW9yaXR5IGZvciBzdHlsZVxuICAgKi9cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiAoU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiksIGlkPzogc3RyaW5nIHwgbnVtYmVyLCBwcmlvcml0eT86IG51bWJlcik6IElDbGFzc2VzPFQ+IHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGlmICgodm9pZCAwID09PSBwcmlvcml0eSAmJiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB8fCAodm9pZCAwICE9PSBwcmlvcml0eSAmJiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYHRoZSB2YWx1ZSBcXGAke2lkfVxcYCBpcyBubyBsb25nZXIgbmVjZXNzYXJ5IGZvciBhZGRTdHlsZVNoZWV0LCB0aGlzIHdpbGwgYmUgYW4gZXJyb3IgaW4gdGhlIG5leHQgcmVsZWFzZS5gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBpZCBhcyBhbnksIHByaW9yaXR5LCBUeXBlU3R5bGUuTXVsdGlwbGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVDb250ZW50MjxUPihcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsXG4gICAgaWQ6IHN0cmluZyB8IG9iamVjdCB8IG51bWJlcixcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgbWVkaWE/OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3QgbmV3SWQgPSB0eXBlID09PSBUeXBlU3R5bGUuT25seU9uZSA/IGlkIGFzIHN0cmluZyA6IHN0eWxlcztcbiAgICBsZXQgaXNOZXdTdHlsZTogYm9vbGVhbjtcbiAgICBpZiAoIVNUWUxFX01BUDUuaGFzKG5ld0lkKSkge1xuICAgICAgaXNOZXdTdHlsZSA9IHRydWU7XG4gICAgICBTVFlMRV9NQVA1LnNldChuZXdJZCwge1xuICAgICAgICBwcmlvcml0eTogdHlwZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUgPyBwcmlvcml0eSA6IHByaW9yaXR5ID09PSB2b2lkIDAgJiYgdHlwZW9mIGlkID09PSAnbnVtYmVyJyA/IGlkIGFzIG51bWJlciA6IHByaW9yaXR5LFxuICAgICAgICBzdHlsZXMsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGNzczoge31cbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZU1hcCA9IFNUWUxFX01BUDUuZ2V0KG5ld0lkKTtcbiAgICBjb25zdCB0aGVtZU5hbWUgPSB0aGlzLmluaXRpYWxUaGVtZTtcbiAgICBjb25zdCBpc0NyZWF0ZWQgPSBpc05ld1N0eWxlIHx8ICEoc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdKTtcbiAgICBpZiAoaXNDcmVhdGVkIHx8IGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAvKiogY3JlYXRlIG5ldyBzdHlsZSBmb3IgbmV3IHRoZW1lICovXG4gICAgICBsZXQgY3NzO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZU1hcCwgc3R5bGVzKHRoaXMuY29uZmlnKSwgdGhlbWVOYW1lLCBudWxsLCB0eXBlLCB0aGlzLmNvbmZpZywgbWVkaWEpO1xuICAgICAgICBpZiAoIWZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgICAgc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV0gPSBjc3M7XG5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIGNyZWF0ZSBhIG5ldyBpZCBmb3Igc3R5bGUgdGhhdCBkb2VzIG5vdCA8LTxyZXF1aXJlPi0+IGNoYW5nZXMgKi9cbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXMsIHRoZW1lTmFtZSwgbmV3SWQgYXMgc3RyaW5nLCB0eXBlLCB0aGlzLmNvbmZpZywgbWVkaWEpO1xuICAgICAgICBzdHlsZU1hcC5jc3MgPSBjc3M7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuaGFzKG5ld0lkKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKGNzcykpO1xuICAgICAgfVxuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCk7XG4gICAgICBpZiAoZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgZWwuaW5uZXJUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgZWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIGFwcGVuZCBjaGlsZCBzdHlsZSBpZiBub3QgZXhpc3QgaW4gZG9tXG4gICAgICAgKiBmb3Igc3NyICYgaG1yXG4gICAgICAgKi9cbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMobmV3SWQpKSB7XG4gICAgICAgIGNvbnN0IF9jc3MgPSBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSB8fCBzdHlsZU1hcC5jc3M7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuc2V0KG5ld0lkLCB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoX2NzcykpO1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkgPSAwKSB7XG4gICAgY29uc3QgeyBzdHlsZUNvbnRhaW5lcnMgfSA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudDtcbiAgICBpZiAoIXN0eWxlQ29udGFpbmVycy5oYXMocHJpb3JpdHkpKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KGBseS1zLWNgKTtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAncHJpb3JpdHknLCBgJHtwcmlvcml0eX1gKTtcbiAgICAgIH1cbiAgICAgIHN0eWxlQ29udGFpbmVycy5zZXQocHJpb3JpdHksIGVsKTtcbiAgICAgIGlmIChzdHlsZUNvbnRhaW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2RvY3VtZW50LmJvZHksIGVsLCB0aGlzLl9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgICB9XG4gICAgY29uc3QgcmVmQ2hpbGQgPSB0aGlzLmZpbmROb2RlKHByaW9yaXR5KTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2RvY3VtZW50LmJvZHksIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpLCByZWZDaGlsZCk7XG4gICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kTm9kZShpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBzdHlsZUNvbnRhaW5lcnMgfSA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudDtcbiAgICBjb25zdCBrZXlzID0gKEFycmF5LmZyb20oc3R5bGVDb250YWluZXJzLmtleXMoKSkpLnNvcnQoKTtcbiAgICBjb25zdCBrZXkgPSBrZXlzLmZpbmQoXyA9PiBpbmRleCA8IF8pO1xuICAgIHJldHVybiAoa2V5ICE9PSB1bmRlZmluZWQgJiYgc3R5bGVDb250YWluZXJzLmdldChrZXkpKSB8fCB0aGlzLmNvcmUuZmlyc3RFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxlbWVudFN0eWxlKGNzczogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZVRleHQoY3NzKTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZVRleHQpO1xuICAgIHJldHVybiBzdHlsZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVJbnN0YW5jZUZvclRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCEodGhlbWVOYW1lIGluIENMQVNTRVNfTUFQKSkge1xuICAgICAgQ0xBU1NFU19NQVBbdGhlbWVOYW1lXSA9IHt9O1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVDb250YWluZXIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXI7XG59XG5leHBvcnQgdHlwZSBTdHlsZXNGbjI8VD4gPSAoVCkgPT4gU3R5bGVzMjtcblxuZnVuY3Rpb24gZ3JvdXBTdHlsZVRvU3RyaW5nKFxuICBzdHlsZU1hcDogU3R5bGVNYXA1LFxuICBzdHlsZXM6IFN0eWxlczIsXG4gIHRoZW1lTmFtZTogc3RyaW5nLFxuICBpZDogc3RyaW5nLFxuICB0eXBlU3R5bGU6IFR5cGVTdHlsZSxcbiAgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICBtZWRpYT86IHN0cmluZ1xuKSB7XG4gIGlmICh0eXBlU3R5bGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lKSB7XG4gICAgLy8gdXNlIGN1cnJlbnQgY2xhc3Mgb3Igc2V0IG5ld1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN0eWxlTWFwLnJlcXVpcmVVcGRhdGVcbiAgICA/IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSBjcmVhdGVOZXh0Q2xhc3NJZCgpKVxuICAgIDogc3R5bGVNYXAuY2xhc3Nlc1xuICAgICAgPyBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA6IHN0eWxlTWFwLmNsYXNzZXMgPSBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgY3NzID0gYC4ke2NsYXNzTmFtZX17JHtzdHlsZXN9fWA7XG4gICAgICByZXR1cm4gbWVkaWEgPyB0b01lZGlhKGNzcywgbWVkaWEpIDogY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlcyA9IHN0eWxlVG9TdHJpbmcoaWQsIHN0eWxlcywgdGhlbWVWYXJpYWJsZXMsIGNsYXNzTmFtZSBhcyBhbnkpO1xuICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH1cbiAgfVxuICAvLyBmb3IgbXVsdGlwbGVzIHN0eWxlc1xuICBjb25zdCBjbGFzc2VzTWFwID0gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IHt9KTtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAvLyBzZXQgbmV3IGlkIGlmIG5vdCBleGlzdFxuICAgICAgY29uc3QgY3VycmVudENsYXNzTmFtZSA9IGtleSBpbiBjbGFzc2VzTWFwXG4gICAgICA/IGNsYXNzZXNNYXBba2V5XVxuICAgICAgOiBjbGFzc2VzTWFwW2tleV0gPSBpc0Rldk1vZGUoKSA/IHRvQ2xhc3NOYW1lVmFsaWQoYGktLS0ke2tleX0tJHtjcmVhdGVOZXh0Q2xhc3NJZCgpfWApIDogY3JlYXRlTmV4dENsYXNzSWQoKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcoa2V5LCB2YWx1ZSBhcyBTdHlsZXMyLCB0aGVtZVZhcmlhYmxlcywgY3VycmVudENsYXNzTmFtZSk7XG4gICAgICAgIGNvbnRlbnQgKz0gc3R5bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsdWUgaXMgc3RyaW5nJywgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVwbGFjZVJlZnMoY29udGVudCwgY2xhc3Nlc01hcCk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VSZWZzKHN0cjogc3RyaW5nLCBkYXRhOiBPYmplY3QpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFRl9SRUdfRVhQLCAobWF0Y2gsIHRva2VuKSA9PiB7XG4gICAgcmV0dXJuIGAuJHtkYXRhW3Rva2VuXX1gO1xuICB9XG4gICk7XG59XG5cbi8qKlxuICoge2NvbG9yOidyZWQnfSB0byAuY2xhc3NOYW1le2NvbG9yOiByZWR9XG4gKi9cbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmcoa2V5OiBzdHJpbmcsIG9iOiBPYmplY3QsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgY3VycmVudEtleTogc3RyaW5nLCBwYXJlbnRLZXk/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IHN1YkNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGxldCBuZXdLZXk7XG4gIGlmIChwYXJlbnRLZXkpIHtcbiAgICBpZiAoY3VycmVudEtleS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgICBuZXdLZXkgPSBjdXJyZW50S2V5LnJlcGxhY2UoLyYvZywgcGFyZW50S2V5KTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIG5ld0tleSA9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3S2V5ID0gYCR7cGFyZW50S2V5fSAke2N1cnJlbnRLZXl9YDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICBuZXdLZXkgPSBrZXk7XG4gIH0gZWxzZSB7XG4gICAgbmV3S2V5ID0gYC4ke2N1cnJlbnRLZXl9YDtcbiAgfVxuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc3ViQ29udGVudCArPSBzdHlsZVRvU3RyaW5nKGtleSwgZWxlbWVudCBhcyBTdHlsZXMyLCB0aGVtZVZhcmlhYmxlcywgc3R5bGVLZXksIG5ld0tleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3U3R5bGVLZXkgPSB0b0h5cGhlbkNhc2VDYWNoZShzdHlsZUtleSk7XG4gICAgICAgIGlmIChuZXdTdHlsZUtleS5pbmRleE9mKERpckFsaWFzLnN0YXJ0KSAhPT0gLTEpIHtcbiAgICAgICAgICBuZXdTdHlsZUtleSA9IGRpckNhY2hlKG5ld1N0eWxlS2V5LCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuc3RhcnQpO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1N0eWxlS2V5LmluZGV4T2YoRGlyQWxpYXMuZW5kKSAhPT0gLTEpIHtcbiAgICAgICAgICBuZXdTdHlsZUtleSA9IGRpckNhY2hlKG5ld1N0eWxlS2V5LCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuZW5kKTtcbiAgICAgICAgfVxuICAgICAgICBrZXlBbmRWYWx1ZSArPSBgJHtuZXdTdHlsZUtleX06JHtlbGVtZW50fTtgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoa2V5QW5kVmFsdWUpIHtcbiAgICBpZiAobmV3S2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICBjb250ZW50ICs9IGAke25ld0tleX1gO1xuICAgICAga2V5QW5kVmFsdWUgPSBgJHtwYXJlbnRLZXl9eyR7a2V5QW5kVmFsdWV9fWA7XG4gICAgfSBlbHNlIGlmIChwYXJlbnRLZXkgJiYgcGFyZW50S2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ICs9IGAke25ld0tleX1gO1xuICAgIH1cbiAgICBjb250ZW50ICs9IGB7JHtrZXlBbmRWYWx1ZX19YDtcbiAgfVxuICByZXR1cm4gY29udGVudCArIHN1YkNvbnRlbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0h5cGhlbkNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChnKSA9PiBgLSR7Z1swXS50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiB0b0NsYXNzTmFtZVZhbGlkKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IHMgPSBzdHIucmVwbGFjZSgvXlswLTldfFteXFx3XFwtXS9nLCBfID0+IHtcbiAgICByZXR1cm4gYF8ke18uY2hhckNvZGVBdCgwKX1gO1xuICB9KTtcbiAgcmV0dXJuIHRvSHlwaGVuQ2FzZShzKTtcbn1cblxuZnVuY3Rpb24gdG9IeXBoZW5DYXNlQ2FjaGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyIGluIFNUWUxFX0tFWVNfTUFQXG4gID8gU1RZTEVfS0VZU19NQVBbc3RyXVxuICA6IFNUWUxFX0tFWVNfTUFQW3N0cl0gPSB0b0h5cGhlbkNhc2Uoc3RyKTtcbn1cblxuY29uc3QgU1RZTEVfS0VZU19ESVJFQ1RJT05TX01BUCA9IHt9O1xuXG5mdW5jdGlvbiBkaXJDYWNoZSh2YWw6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBkaXJBbGlhczogRGlyQWxpYXMpIHtcbiAgY29uc3QgbmV3S2V5ID0gdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uICsgdmFsO1xuICByZXR1cm4gbmV3S2V5IGluIFNUWUxFX0tFWVNfRElSRUNUSU9OU19NQVBcbiAgPyBTVFlMRV9LRVlTX0RJUkVDVElPTlNfTUFQW25ld0tleV1cbiAgOiBTVFlMRV9LRVlTX0RJUkVDVElPTlNfTUFQW25ld0tleV0gPSB2YWwucmVwbGFjZShkaXJBbGlhcywgdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKGRpckFsaWFzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiB0b01lZGlhKGNzczogc3RyaW5nLCBtZWRpYTogc3RyaW5nKSB7XG4gIHJldHVybiBgQG1lZGlhICR7bWVkaWF9eyR7Y3NzfX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXh0Q2xhc3NJZCgpIHtcbiAgcmV0dXJuIGBpJHsobmV4dENsYXNzSWQrKykudG9TdHJpbmcoMzYpfWA7XG59XG5cbnR5cGUgSUNsYXNzZXM8VD4gPSBSZWNvcmQ8KFQgZXh0ZW5kcyAoKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID8gKGtleW9mIFJldHVyblR5cGU8VD4pIDoga2V5b2YgVCksIHN0cmluZz47XG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPbkRlc3Ryb3ksIE5nTW9kdWxlLCBFbGVtZW50UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtleUF0dHJpYnV0ZSB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ1RyYW5zY2x1ZGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfbmdUcmFuc2NsdWRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuZ1RyYW5zY2x1ZGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh0ZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9uZ1RyYW5zY2x1ZGUgPSB0ZW1wbGF0ZVJlZjtcclxuICAgICAgdGhpcy5fdmlld1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG5nVHJhbnNjbHVkZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9uZ1RyYW5zY2x1ZGU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX3ZpZXdSZWYucmVtb3ZlKCk7XHJcbiAgfVxyXG59XHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlTW9kdWxlIHtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KTogSFRNTEVsZW1lbnQge1xyXG4gIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnQubmF0aXZlRWxlbWVudCA6IGVsZW1lbnQ7XHJcbn1cclxuIiwiZnVuY3Rpb24gaXNXaW5kb3cob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbTogYW55KSB7XHJcbiAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBleGFjdFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgZG9jRWxlbTogYW55LCB3aW46IGFueSxcclxuICAgICAgICBib3ggPSB7dG9wOiAwLCBsZWZ0OiAwfTtcclxuICAgIGNvbnN0IGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xyXG5cclxuICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcclxuICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG4gICAgd2luID0gZ2V0V2luZG93KGRvYyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxyXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGFueSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRFbnRyeSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBkZWZhdWx0VmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICByZXR1cm4gdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwnO1xuaW1wb3J0IHsgc2hhZG93QnVpbGRlciB9IGZyb20gJy4uL3NoYWRvdyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5jb25zdCBERUZBVUxUX1ZBTFVFID0gJyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFxuICAgICAgICAgICAgW2JnXSxcbiAgICAgICAgICAgIFtjb2xvcl0sXG4gICAgICAgICAgICBbcmFpc2VkXSxcbiAgICAgICAgICAgIFtyYWlzZWRdW3NoYWRvd0NvbG9yXSxcbiAgICAgICAgICAgIFtseS1idXR0b25dW291dGxpbmVkXSxcbiAgICAgICAgICAgIFtlbGV2YXRpb25dLFxuICAgICAgICAgICAgW2VsZXZhdGlvbl1bc2hhZG93Q29sb3JdLFxuICAgICAgICAgICAgW2Rpc2FibGVkXSxcbiAgICAgICAgICAgIGx5LWNhcmQsXG4gICAgICAgICAgICBseS10b29sYmFyLFxuICAgICAgICAgICAgbHktY2hlY2tib3hcbiAgICAgICAgICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb24gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9yYWlzZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX291dGxpbmVkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2F1dG9Db250cmFzdDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNDb250cmFzdDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBiZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2V0IHJhaXNlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fcmFpc2VkID0gdG9Cb29sZWFuKHZhbCk7IH1cbiAgZ2V0IHJhaXNlZCgpIHsgcmV0dXJuIHRoaXMuX3JhaXNlZDsgfVxuXG4gIEBJbnB1dCgpIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuXG4gIEBJbnB1dCgpIHNldCBvdXRsaW5lZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fb3V0bGluZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgb3V0bGluZWQoKSB7IHJldHVybiB0aGlzLl9vdXRsaW5lZDsgfVxuXG4gIEBJbnB1dCgpIGVsZXZhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBzaGFkb3dDb2xvcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBwdWJsaWMgc2V0QXV0b0NvbnRyYXN0KCkge1xuICAgIHRoaXMuX2F1dG9Db250cmFzdCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBjb25zdCBfX2JnID0gdGhpcy5iZztcbiAgICBjb25zdCBfX2NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICBjb25zdCBfX3JhaXNlZCA9IHRoaXMucmFpc2VkO1xuICAgIGNvbnN0IF9fZWxldmF0aW9uID0gdGhpcy5lbGV2YXRpb247XG4gICAgY29uc3QgX19kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgY29uc3QgX19vdXRsaW5lZCA9IHRoaXMub3V0bGluZWQ7XG4gICAgY29uc3QgX19zaGFkb3dDb2xvciA9IHRoaXMuc2hhZG93Q29sb3I7XG4gICAgY29uc3QgX19pc0NvbnRyYXN0ID0gdGhpcy5faXNDb250cmFzdCA9IHRoaXMuX2F1dG9Db250cmFzdCAmJiAhX19jb2xvciB8fCBfX2NvbG9yID09PSAnYXV0byc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGNvbW1vbi0tLS06JHtcbiAgICAgIF9fYmcgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgX19jb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgIF9fcmFpc2VkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICBfX2VsZXZhdGlvbiB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICBfX2Rpc2FibGVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgX19vdXRsaW5lZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgX19zaGFkb3dDb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICBfX2lzQ29udHJhc3QgfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUobmV3S2V5LCAodGhlbWUpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlOiB7XG4gICAgICAgIGJvcmRlcj86IHN0cmluZyxcbiAgICAgICAgYmFja2dyb3VuZD86IHN0cmluZyxcbiAgICAgICAgY29sb3I/OiBzdHJpbmcsXG4gICAgICAgIGJveFNoYWRvdz86IHN0cmluZyxcbiAgICAgICAgcG9pbnRlckV2ZW50cz86ICdub25lJztcbiAgICAgICAgJyY6aG92ZXInPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICAnJjphY3RpdmUnPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9XG4gICAgICB9ID0ge307XG4gICAgICBpZiAoX19vdXRsaW5lZCkge1xuICAgICAgICBzdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcic7XG4gICAgICB9XG4gICAgICBpZiAoX19kaXNhYmxlZCkge1xuICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLnRleHQuZGlzYWJsZWQ7XG4gICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIGlmIChfX2JnKSB7XG4gICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJ1dHRvbi5kaXNhYmxlZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9fYmcpIHtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuY29sb3JPZihfX2JnKTtcbiAgICAgICAgICBpZiAoX19pc0NvbnRyYXN0KSB7XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoYCR7X19iZ306Y29udHJhc3RgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdHlsZS5jb2xvciAmJiBfX2NvbG9yKSB7XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKF9fY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX3JhaXNlZCB8fCBfX2VsZXZhdGlvbikge1xuICAgICAgICAgIGlmICghX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JDc3MgPSBzdHlsZS5iYWNrZ3JvdW5kICE9PSBfX2JnICYmIHRoZW1lLmNvbG9yT2YoX19iZyB8fCAnYmFja2dyb3VuZDpwcmltYXJ5JywgJ3NoYWRvdycpO1xuICAgICAgICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gKF9fc2hhZG93Q29sb3IgJiYgdGhlbWUuY29sb3JPZihfX3NoYWRvd0NvbG9yKSkgfHwgYmFja2dyb3VuZENvbG9yQ3NzIHx8IHN0eWxlLmJhY2tncm91bmQgfHwgc3R5bGUuY29sb3IgfHwgdGhlbWUuc2hhZG93O1xuICAgICAgICAgIHN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd0J1aWxkZXIoX19lbGV2YXRpb24gfHwgMywgc2hhZG93Q29sb3IpO1xuICAgICAgICAgIGlmICghX19lbGV2YXRpb24pIHtcbiAgICAgICAgICAgIHN0eWxlWycmOmFjdGl2ZSddID0ge1xuICAgICAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoOCwgc2hhZG93Q29sb3IpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlIGFzIGFueTtcbiAgICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbd2l0aENsYXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlXaXRoQ2xhc3Mge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHt2YWx9JyBpcyBub3QgdmFsaWQgY2xhc3NOYW1lYCk7XG4gICAgfVxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlDb21tb24gfSBmcm9tICcuL2NvbW1vbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlXaXRoQ2xhc3MgfSBmcm9tICcuL3dpdGgtY2xhc3MuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlDb21tb24sIEx5V2l0aENsYXNzXSxcbiAgZXhwb3J0czogW0x5Q29tbW9uLCBMeVdpdGhDbGFzc11cbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IExZX0NPTU1PTl9TVFlMRVMgPSB7XG4gIGZpbGw6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gIH0sXG4gIHZpc3VhbGx5SGlkZGVuOiB7XG4gICAgYm9yZGVyOiAwLFxuICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICBoZWlnaHQ6ICcxcHgnLFxuICAgIG1hcmdpbjogJy0xcHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMXB4JyxcbiAgICBvdXRsaW5lOiAwLFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJ1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q29yZVN0eWxlcyB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoTFlfQ09NTU9OX1NUWUxFUyk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyKSB7IH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudCwgSW5qZWN0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMeUNvcmVTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvY29yZS1zdHlsZXMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50ICwgIE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIG92ZXJsYXlCYWNrZHJvcDoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5vdmVybGF5XG4gIH1cbn0pO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdpbmRvd1Njcm9sbFNlcnZpY2Uge1xuXG4gIHB1YmxpYyBzY3JvbGwkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJykucGlwZShcbiAgICAgICAgYXVkaXRUaW1lKDIwMCksXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZIHx8IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgfSksXG4gICAgICAgIHNoYXJlKClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Nyb2xsJCA9IGVtcHR5KCk7XG4gICAgfVxuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUNvbnRhaW5lciB7XG4gIHByaXZhdGUgX2NsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgU2V0PGFueT4oKTtcbiAgcHJpdmF0ZSBfaXNBY3RpdmVPdmVybGF5Q29udGFpbmVyOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdseS1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfYWRkKGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtcy5hZGQoaXRlbSk7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgICAvKipcbiAgICogUmVtb3ZlIGluc3RhbmNlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9yZW1vdmUoaXRlbSkge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB0aGlzLl9pdGVtcy5kZWxldGUoaXRlbSk7XG4gICAgdGhpcy5fdXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0eWxlcyBmb3Igb3ZlcmxheSBjb250YWluZXJcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9pdGVtcy5zaXplKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY2xhc3Nlcy5vdmVybGF5QmFja2Ryb3ApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY2xhc3Nlcy5vdmVybGF5QmFja2Ryb3ApO1xuICAgICAgdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW92ZXJsYXktYmFja2Ryb3AnLFxuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5QmFja2Ryb3Age1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgdGhpcy5fb3ZlcmxheUNvbmZpZy5mbkRlc3Ryb3koKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIEBJbmplY3QoJ292ZXJsYXlDb25maWcnKSBwcml2YXRlIF9vdmVybGF5Q29uZmlnOiBhbnksXG4gICAgY29tbW9uU3R5bGVzOiBMeUNvcmVTdHlsZXNcbiAgKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY29tbW9uU3R5bGVzLmNsYXNzZXMuZmlsbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSBfdmlld1JlZjogVmlld1JlZjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lclxuICApIHsgfVxuXG4gIGF0dGFjaDxUPihfaG9zdFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGNvbXBvbmVudDogYW55LCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgY29uc3Qgdmlld1JlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xuICAgICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gX2hvc3RWaWV3Q29udGFpbmVyUmVmO1xuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChyb290Tm9kZSA9PiB0aGlzLmFkZENoaWxkKHJvb3ROb2RlKSk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm92ZXJsYXlDb250YWluZXIuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBnZXREb21FbGVtZW50RnJvbUNvbXBvbmVudFJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBkZXN0cm95UmVmKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4sIGRlbGF5OiBudW1iZXIpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSwgZGVsYXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERvbVNlcnZpY2UgfSBmcm9tICcuL2RvbS5zZXJ2aWNlJztcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIpIHtcbi8vICAgcmV0dXJuIHBhcmVudENvbnRhaW5lciB8fCBuZXcgTHlPdmVybGF5Q29udGFpbmVyKCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUiA9IHtcbi8vICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBPdmVybGF5Q29udGFpbmVyIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4vLyAgIHByb3ZpZGU6IEx5T3ZlcmxheUNvbnRhaW5lcixcbi8vICAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIEx5T3ZlcmxheUNvbnRhaW5lcl1dLFxuLy8gICB1c2VGYWN0b3J5OiBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZXG4vLyB9O1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIERvbVNlcnZpY2VcbiAgICAvLyBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUlxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx4RG9tTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lLCBSZW5kZXJlcjIsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZ2V0TmF0aXZlRWxlbWVudCB9IGZyb20gJy4uL21pbmltYWwvY29tbW9uJztcblxuZXhwb3J0IGVudW0gRm9jdXNTdGF0dXMge1xuICAvKiptb3VzZSBhbmQvb3IgdG91Y2gqL1xuICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICAvKioga2V5Ym9hcmQgYW5kL29yIHByb2dyYW0qL1xuICBLRVlCT0FSRCA9ICdrZXlib2FyZCcsXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseUZvY3VzU3RhdGVdJyxcbiAgZXhwb3J0QXM6ICdseUZvY3VzU3RhdGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZURlcHJlY2F0ZWQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBzdGF0ZTogRm9jdXNTdGF0dXM7XG4gIHN0YXRlTWFwID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHByaXZhdGUgX2V2ZW50SGFuZGxlcnMgPSBuZXcgTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIF9zdGF0ZVN1YmplY3QgPSBuZXcgU3ViamVjdDxGb2N1c1N0YXR1cz4oKTtcbiAgX3N0YXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIEBPdXRwdXQoKSBseUZvY3VzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c1N0YXR1cz4oKTtcbiAgcHJpdmF0ZSBfZXZlbnRPcHRpb25zID0ge3Bhc3NpdmU6IHRydWV9IGFzIGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVyc1xuICAgICAgLnNldCgnZm9jdXMnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdibHVyJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgndG91Y2hzdGFydCcsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ21vdXNlZG93bicsIHRoaXMub24uYmluZCh0aGlzKSk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNvbnN0IG9uID0gKGV2ZW50OiBGb2N1c0V2ZW50IHwgVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZU1hcC5zZXQoZXZlbnQudHlwZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgb2I6IE9ic2VydmFibGU8Rm9jdXNTdGF0dXM+ID0gdGhpcy5fc3RhdGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24gPSBvYlxuICAgICAgLy8gLmRlYm91bmNlVGltZSgxMTEpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDExMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGU6IEZvY3VzU3RhdHVzKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBlO1xuICAgICAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICAgICAgICB0aGlzLmx5Rm9jdXNDaGFuZ2UuZW1pdChlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0YXRlKCkge1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2JsdXInKSkge1xuICAgICAgdGhpcy5zdGF0ZU1hcC5jbGVhcigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykgJiYgdGhpcy5zdGF0ZU1hcC5oYXMoJ21vdXNlZG93bicpIHx8IHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCd0b3VjaHN0YXJ0JykpIHtcbiAgICAgIHN0YXRlID0gRm9jdXNTdGF0dXMuREVGQVVMVDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLktFWUJPQVJEO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZVN1YmplY3QubmV4dChzdGF0ZSk7XG4gIH1cblxuICBvbihldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5zdGF0ZU1hcC5zZXQoZXZlbnQudHlwZSwgdHJ1ZSk7XG4gICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNsYXNzKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0b2dnbGVDbGFzcyA9IChjbGFzc05hbWU6IHN0cmluZywgc2hvdWxkU2V0OiBib29sZWFuKSA9PiBzaG91bGRTZXQgPyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIDogdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB0b2dnbGVDbGFzcyhgbHktZm9jdXNlZGAsICEhc3RhdGUpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIEZvY3VzU3RhdHVzKSB7XG4gICAgICBpZiAoRm9jdXNTdGF0dXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBGb2N1c1N0YXR1c1trZXldO1xuICAgICAgICB0b2dnbGVDbGFzcyhgbHktJHtjbGFzc05hbWV9LWZvY3VzZWRgLCBzdGF0ZSA9PT0gY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyRWxlbWVudCkge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c1N0YXRlSW5mbyB7XG4gIHVubGlzdGVuOiAoKSA9PiB2b2lkO1xuICBzdWJqZWN0OiBTdWJqZWN0PEZvY3VzU3RhdGU+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzU3RhdGUge1xuICBldmVudDogRm9jdXNFdmVudDtcbiAgYnk6ICdrZXlib2FyZCcgfCAnbW91c2UnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9lbGVtZW50TWFwID0gbmV3IE1hcDxIVE1MRWxlbWVudCwgRm9jdXNTdGF0ZUluZm8+KCk7XG4gIHByaXZhdGUgX2N1cnJlbnRFdmVudDogJ21vdXNlJyB8ICdrZXlib2FyZCc7XG4gIHByaXZhdGUgX3JlbW92ZUdsb2JhbExpc3RlbmVyczogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfY291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG5cbiAgbGlzdGVuKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIGtleUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KTogT2JzZXJ2YWJsZTxGb2N1c1N0YXRlPiB8IG51bGwge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAvLyByZXR1cm4gbnVsbCBpZiBpdCBpcyBub3QgYnJvd3NlciBwbGF0Zm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgY29uc3Qga2V5ID0ga2V5RWxlbWVudCAmJiBnZXROYXRpdmVFbGVtZW50KGtleUVsZW1lbnQpIHx8IG5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudE1hcC5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRNYXAuZ2V0KGtleSkuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb2N1c1N0YXRlOiBGb2N1c1N0YXRlSW5mbyA9IHtcbiAgICAgIHVubGlzdGVuOiBudWxsLFxuICAgICAgc3ViamVjdDogbmV3IFN1YmplY3Q8Rm9jdXNTdGF0ZT4oKVxuICAgIH07XG4gICAgdGhpcy5faW5jcmVtZW50Q291bnQoKTtcbiAgICBjb25zdCBmb2N1c0xpc3RlbmVyID0gKGV2ZW50OiBGb2N1c0V2ZW50KSA9PiB0aGlzLl9vbihldmVudCwgZm9jdXNTdGF0ZS5zdWJqZWN0KTtcbiAgICBjb25zdCBibHVyTGlzdGVuZXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHRoaXMuX29uKGV2ZW50LCBmb2N1c1N0YXRlLnN1YmplY3QpO1xuXG4gICAgZm9jdXNTdGF0ZS51bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmb2N1c0xpc3RlbmVyLCB0cnVlKTtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXJMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHRoaXMuX2VsZW1lbnRNYXAuc2V0KGtleSwgZm9jdXNTdGF0ZSk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzTGlzdGVuZXIsIHRydWUpO1xuICAgICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckxpc3RlbmVyLCB0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9jdXNTdGF0ZS5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgdW5saXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIGNvbnN0IGZvY3VzU3RhdGVJbmZvID0gdGhpcy5fZWxlbWVudE1hcC5nZXQoZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KSk7XG4gICAgaWYgKGZvY3VzU3RhdGVJbmZvKSB7XG4gICAgICBmb2N1c1N0YXRlSW5mby51bmxpc3RlbigpO1xuICAgICAgdGhpcy5fZGVjcmVtZW50Q291bnQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vbihldmVudDogRm9jdXNFdmVudCwgc3ViamVjdDogU3ViamVjdDxGb2N1c1N0YXRlPikge1xuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gc3ViamVjdC5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgYnk6IHRoaXMuX2N1cnJlbnRFdmVudCB8fCAna2V5Ym9hcmQnXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkR2xvYmFsTGlzdGVuZXJzKCkge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lck9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVyc1xuICAgID8ge1xuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IHRydWVcbiAgICB9IDogZmFsc2U7XG5cbiAgICBjb25zdCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciA9ICgpID0+IHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jdXJyZW50RXZlbnQgPSAna2V5Ym9hcmQnKTtcbiAgICBjb25zdCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyID0gKCkgPT4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2N1cnJlbnRFdmVudCA9ICdtb3VzZScpO1xuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9pbmNyZW1lbnRDb3VudCgpIHtcbiAgICBpZiAoKyt0aGlzLl9jb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5fYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVjcmVtZW50Q291bnQoKSB7XG4gICAgaWYgKCEtLXRoaXMuX2NvdW50KSB7XG4gICAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9lbGVtZW50TWFwLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMudW5saXN0ZW4oZWxlbWVudCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Rm9jdXNTdGF0ZURlcHJlY2F0ZWQgfSBmcm9tICcuL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlGb2N1c1N0YXRlRGVwcmVjYXRlZF0sXG4gIGV4cG9ydHM6IFtMeUZvY3VzU3RhdGVEZXByZWNhdGVkXVxufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGVNb2R1bGUgeyB9XG4iLCJleHBvcnQgY29uc3QgQVVJX1ZFUlNJT04gPSAnMS43LjExLW5pZ2h0bHkuMjAxODExMTItam9lMHpiaHgnO1xuZXhwb3J0IGNvbnN0IEFVSV9MQVNUX1VQREFURSA9ICcyMDE4LTExLTEyVDA4OjA3OjQ4LjIxMVonO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEhhbW1lck9wdGlvbnMsIEhhbW1lckluc3RhbmNlIH0gZnJvbSAnLi9nZXN0dXJlLWFubm90YXRpb25zJztcblxuZXhwb3J0IGNvbnN0IExZX0hBTU1FUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPEhhbW1lck9wdGlvbnM+KCdMWV9IQU1NRVJfT1BUSU9OUycpO1xuXG5jb25zdCBIQU1NRVJfR0VTVFVSRVNfRVZFTlRTID0gW1xuICAnc2xpZGUnLFxuICAnc2xpZGVzdGFydCcsXG4gICdzbGlkZWVuZCcsXG4gICdzbGlkZXJpZ2h0JyxcbiAgJ3NsaWRlbGVmdCdcbl07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeUhhbW1lckdlc3R1cmVDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgZXZlbnRzOiBzdHJpbmdbXSA9IEhBTU1FUl9HRVNUVVJFU19FVkVOVFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfSEFNTUVSX09QVElPTlMpIHByaXZhdGUgX2hhbW1lck9wdGlvbnM6IEhhbW1lck9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBidWlsZEhhbW1lcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhhbW1lckluc3RhbmNlIHtcbiAgICBjb25zdCBoYW1tZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/ICh3aW5kb3cgYXMgYW55KS5IYW1tZXIgOiBudWxsO1xuICAgIGNvbnN0IG1jID0gbmV3IGhhbW1lcihlbGVtZW50LCB0aGlzLl9oYW1tZXJPcHRpb25zIHx8IHVuZGVmaW5lZCk7XG5cbiAgICBjb25zdCBwYW4gPSBuZXcgaGFtbWVyLlBhbigpO1xuICAgIGNvbnN0IHN3aXBlID0gbmV3IGhhbW1lci5Td2lwZSgpO1xuICAgIGNvbnN0IHNsaWRlID0gdGhpcy5fY3JlYXRlUmVjb2duaXplcihwYW4sIHtldmVudDogJ3NsaWRlJywgdGhyZXNob2xkOiAwfSwgc3dpcGUpO1xuXG4gICAgcGFuLnJlY29nbml6ZVdpdGgoc3dpcGUpO1xuXG4gICAgLy8gQWRkIGN1c3RvbWl6ZWQgZ2VzdHVyZXMgdG8gSGFtbWVyIG1hbmFnZXJcbiAgICBtYy5hZGQoW3N3aXBlLCBwYW4sIHNsaWRlXSk7XG4gICAgcmV0dXJuIG1jO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBuZXcgcmVjb2duaXplciwgd2l0aG91dCBhZmZlY3RpbmcgdGhlIGRlZmF1bHQgcmVjb2duaXplcnMgb2YgSGFtbWVySlMgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUmVjb2duaXplcihiYXNlOiBhbnksIG9wdGlvbnM6IGFueSwgLi4uaW5oZXJpdGFuY2VzOiBhbnlbXSkge1xuICAgIGNvbnN0IHJlY29nbml6ZXIgPSBuZXcgKGJhc2UuY29uc3RydWN0b3IpKG9wdGlvbnMpO1xuXG4gICAgaW5oZXJpdGFuY2VzLnB1c2goYmFzZSk7XG4gICAgaW5oZXJpdGFuY2VzLmZvckVhY2goaXRlbSA9PiByZWNvZ25pemVyLnJlY29nbml6ZVdpdGgoaXRlbSkpO1xuXG4gICAgcmV0dXJuIHJlY29nbml6ZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lTW9kdWxlIHtcbiAgc3RhdGljIHNldFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMeVRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFtMeVRoZW1lMl0sXG4gICAgICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6IHRoZW1lTmFtZSB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVuZGVmaW5lZCB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBVbmRlZmluZWRWYWx1ZSA9IG5ldyBVbmRlZmluZWQoKTtcbiIsImV4cG9ydCBlbnVtIEludmVydE1lZGlhUXVlcnkge1xuICBObyxcbiAgWWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NZWRpYVF1ZXJ5KG1lZGlhOiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk6IEludmVydE1lZGlhUXVlcnkgPSBJbnZlcnRNZWRpYVF1ZXJ5Lk5vKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICBpZiAobWVkaWEgJiYgaW52ZXJ0TWVkaWFRdWVyeSA9PT0gSW52ZXJ0TWVkaWFRdWVyeS5ZZXMpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBtZWRpYS5zcGxpdCgnLCcpLm1hcChfID0+IGBub3QgJHtffWApO1xuICAgIHJldHVybiBuZXdWYWw7XG4gIH1cbiAgcmV0dXJuIG1lZGlhO1xufVxuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyLCBMeU92ZXJsYXlCYWNrZHJvcCwgV2luZG93U2Nyb2xsU2VydmljZSB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmludGVyZmFjZSBPdmVybGF5Q29uZmlnIHtcbiAgc3R5bGVzOiBPYmplY3Q7XG4gIGZuRGVzdHJveT86ICguLi5hcmcpID0+IHZvaWQ7XG4gIGhvc3Q/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gIC8qKiBEZXRhY2hlcyBhIHZpZXcgZnJvbSBkaXJ0eSBjaGVja2luZyBhZ2FpbiBvZiBBcHBsaWNhdGlvblJlZi4gICovXG4gIGRldGFjaDogKCkgPT4gdm9pZDtcblxuICAvKiogUmVtb3ZlIGVsZW1lbnQgb2YgRE9NICovXG4gIHJlbW92ZTogKCkgPT4gdm9pZDtcblxuICAvKiogRGV0YWNoICYgcmVtb3ZlICovXG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG59XG5jbGFzcyBDcmVhdGVGcm9tVGVtcGxhdGVSZWYgaW1wbGVtZW50cyBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2VsOiBhbnk7XG4gIHByaXZhdGUgX2NvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcml2YXRlIF9jb21wUmVmT3ZlcmxheUJhY2tkcm9wOiBDb21wb25lbnRSZWY8YW55PjtcbiAgd2luZG93U2Nyb2xsU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBfY29udGV4dDogYW55LFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICB3aW5kb3dTY3JvbGw6IFdpbmRvd1Njcm9sbFNlcnZpY2UsXG4gICAgY29uZmlnPzogT3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICAvLyB0aGlzLl92aWV3UmVmID0gX3RlbXBsYXRlUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhfY29udGV4dCk7XG4gICAgLy8gdGhpcy5fdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5fZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290Tm9kZSkpO1xuICAgIGNvbnN0IF9fc3R5bGVzID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIC4uLmNvbmZpZy5zdHlsZXNcbiAgICB9O1xuICAgIGNvbnN0IG5ld0luamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ292ZXJsYXlDb25maWcnLFxuICAgICAgICB1c2VWYWx1ZTogPE92ZXJsYXlDb25maWc+e1xuICAgICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXN0cm95LmJpbmQodGhpcyksXG4gICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgIHN0eWxlczogX19zdHlsZXMsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLCB0aGlzLl9pbmplY3Rvcik7XG5cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyhfX3N0eWxlcyk7XG4gICAgaWYgKGNvbmZpZy5ob3N0KSB7XG4gICAgICB0aGlzLndpbmRvd1Njcm9sbFN1YiA9IHdpbmRvd1Njcm9sbC5zY3JvbGwkLnN1YnNjcmliZSgodmFsKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBjb25maWcuaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHJlY3QudG9wICE9PSBfX3N0eWxlcy50b3AgfHwgcmVjdC5sZWZ0ICE9PSBfX3N0eWxlcy5sZWZ0KSB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMobmV3U3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KEx5T3ZlcmxheUJhY2tkcm9wLCBuZXdJbmplY3Rvcik7XG4gICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQoYmFja2Ryb3BFbCk7XG4gICAgdGhpcy5fYXBwZW5kQ29tcG9uZW50VG9Cb2R5KF90ZW1wbGF0ZVJlZiwgX2NvbnRleHQsIHRoaXMuX2luamVjdG9yKTtcblxuICB9XG5cbiAgdXBkYXRlU3R5bGVzKF9fc3R5bGVzKSB7XG4gICAgLyoqIEFwcGx5IHN0eWxlcyAqL1xuICAgIC8qKiBzZXQgc3R5bGVzICovXG4gICAgZm9yIChjb25zdCBrZXkgaW4gX19zdHlsZXMpIHtcbiAgICAgIGlmIChfX3N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlVmFsID0gX19zdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHN0eWxlVmFsKSB7XG4gICAgICAgICAgdGhpcy5fZWwuc3R5bGVba2V5XSA9IHR5cGVvZiBfX3N0eWxlc1trZXldID09PSAnbnVtYmVyJyA/IGAke3N0eWxlVmFsfXB4YCA6IHN0eWxlVmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ29tcG9uZW50VG9Cb2R5KHR5cGU6IFRlbXBsYXRlUmVmPGFueT4gfCBUeXBlPGFueT4sIGNvbnRleHQsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIC8vIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy5fdmlld1JlZiA9IHR5cGUuY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRleHQgfHwge30pO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIC8vIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChfID0+IHRoaXMuX2VsLmFwcGVuZENoaWxkKF8pKTtcblxuICAgICAgLy8gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb21wUmVmID0gdGhpcy5nZW5lcmF0ZUNvbXBvbmVudCh0eXBlLCBpbmplY3Rvcik7XG4gICAgICB0aGlzLl9lbCA9IHRoaXMuX2NvbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb21wb25lbnQodHlwZTogVHlwZTxhbnk+LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpO1xuICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX3ZpZXdSZWYpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY29tcFJlZikge1xuICAgICAgdGhpcy5fY29tcFJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmRlc3Ryb3koKTtcbiAgICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUoYmFja2Ryb3BFbCk7XG4gICAgfVxuICAgIHRoaXMud2luZG93U2Nyb2xsU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF93aW5kb3dTY3JvbGw6IFdpbmRvd1Njcm9sbFNlcnZpY2VcbiAgKSB7IH1cblxuICBjcmVhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIGNvbnRleHQ/OiBhbnksIGNvbmZpZz86IE92ZXJsYXlDb25maWcpOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgICByZXR1cm4gbmV3IENyZWF0ZUZyb21UZW1wbGF0ZVJlZih0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX2FwcFJlZiwgdGVtcGxhdGUsIHRoaXMuX292ZXJsYXlDb250YWluZXIsIGNvbnRleHQsIHRoaXMuX2luamVjdG9yLCB0aGlzLl93aW5kb3dTY3JvbGwsIGNvbmZpZyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeU92ZXJsYXlCYWNrZHJvcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0x5T3ZlcmxheUJhY2tkcm9wXVxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCA9IHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlXG59O1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeSB7XG4gIGNyZWF0ZShjYWxsYmFjazogTXV0YXRpb25DYWxsYmFjayk6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBFbGVtZW50T2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeTogTXV0YXRpb25PYnNlcnZlckZhY3RvcnlcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMuZGVzdHJveShlbGVtZW50KSk7XG4gIH1cblxuICBvYnNlcnZlKGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4sIGZuOiBNdXRhdGlvbkNhbGxiYWNrLCBvcHRpb25zPzogTXV0YXRpb25PYnNlcnZlckluaXQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5fbXV0YXRpb25PYnNlcnZlckZhY3RvcnkuY3JlYXRlKGZuKTtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9wdGlvbnMgfHwgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IE9ic2VydmVyXG4gICAqL1xuICBkZXN0cm95KGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkluamVjdGFibGUiLCJPcHRpb25hbCIsIkluamVjdCIsIlJlbmRlcmVyRmFjdG9yeTIiLCJET0NVTUVOVCIsImlzRGV2TW9kZSIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIiwiRWxlbWVudFJlZiIsImZyb21FdmVudCIsImF1ZGl0VGltZSIsIm1hcCIsInNoYXJlIiwiZW1wdHkiLCJDb21wb25lbnQiLCJIb3N0TGlzdGVuZXIiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJDb21tb25Nb2R1bGUiLCJTdWJqZWN0IiwiRXZlbnRFbWl0dGVyIiwiZGVib3VuY2VUaW1lIiwiTmdab25lIiwiUmVuZGVyZXIyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJPdXRwdXQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkhhbW1lckdlc3R1cmVDb25maWciLCJTdWJzY3JpcHRpb24iLCJJbmplY3RvciIsInRzbGliXzEuX19hc3NpZ24iLCJUZW1wbGF0ZVJlZiIsIkFwcGxpY2F0aW9uUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGFBQWdCLGNBQWMsQ0FBQyxRQUFROztRQUNyQyxJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O1FBQzlDLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7UUFDOUMsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztRQUM5QyxJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUN2RCxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3pDOzs7Ozs7QUNORDtJQUNBLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQzs7SUFFdkIsSUFBTSxxQkFBcUIsR0FBRyxHQUFHLENBQUM7O0lBQ2xDLElBQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDOztJQUN0QyxJQUFNLDBCQUEwQixHQUFHLElBQUksQ0FBQzs7QUFDeEMsUUFBYSxPQUFPLEdBQUc7UUFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUMzQyxDQUFDOzs7Ozs7QUFDRixhQUFnQix1QkFBdUIsQ0FBQyxTQUE4QixFQUFFLEtBQWM7UUFBOUMsMEJBQUE7WUFBQSxhQUE4Qjs7UUFBRSxzQkFBQTtZQUFB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