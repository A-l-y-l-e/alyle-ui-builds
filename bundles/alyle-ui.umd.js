(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('chroma-js'), require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui', ['exports', 'chroma-js', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/platform-browser'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = {}),global.chroma,global.ng.core,global.ng.common,global.rxjs,global.rxjs.operators,global.ng.platformBrowser));
}(this, (function (exports,_chroma,i0,i2,rxjs,operators,platformBrowser) { 'use strict';

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
                { type: undefined, decorators: [{ type: i0.Inject, args: [i2.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ CoreTheme.ngInjectableDef = i0.defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.inject(LY_THEME, 8), i0.inject(LY_THEME_GLOBAL_VARIABLES, 8), i0.inject(i0.RendererFactory2), i0.inject(i2.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
        return CoreTheme;
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
                var newClass = this.addCss(id, ( /** @type {?} */(style)), priority);
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
         * @param id id of style
         * @param css style in string
         */
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
                return ( /** @type {?} */(this._createStyleContent2(( /** @type {?} */(css)), newId, priority, TypeStyle.OnlyOne, false, media)));
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
                return this._createStyleContent2(styles, ( /** @type {?} */(id)), priority, TypeStyle.Multiple);
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
                var newId = type === TypeStyle.OnlyOne ? ( /** @type {?} */(id)) : styles;
                /** @type {?} */
                var isNewStyle;
                if (!STYLE_MAP5.has(newId)) {
                    isNewStyle = true;
                    STYLE_MAP5.set(newId, {
                        priority: type === TypeStyle.OnlyOne ? priority : priority === void 0 && typeof id === 'number' ? ( /** @type {?} */(id)) : priority,
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
                    /**
                     * create new style for new theme
                     * @type {?}
                     */
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
                        css = groupStyleToString(styleMap, styles, themeName, ( /** @type {?} */(newId)), type, this.config, media);
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
            // use current class or set new
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
                var rules = styleToString(id, styles, themeVariables, ( /** @type {?} */(className)));
                return rules;
            }
        }
        // for multiples styles
        /** @type {?} */
        var classesMap = styleMap[themeName] || (styleMap[themeName] = {});
        /** @type {?} */
        var content = '';
        for (var key in styles) {
            if (styles.hasOwnProperty(key)) {
                // set new id if not exist
                /** @type {?} */
                var currentClassName = key in classesMap
                    ? classesMap[key]
                    : classesMap[key] = i0.isDevMode() ? toClassNameValid("i---" + key + "-" + createNextClassId()) : createNextClassId();
                /** @type {?} */
                var value = styles[key];
                if (typeof value === 'object') {
                    /** @type {?} */
                    var style = styleToString(key, ( /** @type {?} */(value)), themeVariables, currentClassName);
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
                    subContent += styleToString(key, ( /** @type {?} */(element)), themeVariables, styleKey, newKey);
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
                                style.background = theme.disabled;
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
                if (typeof PointerEvent === 'function' && !!TouchEvent) {
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
                    if (Platform.isBrowser && val !== this._disableRipple) {
                        /** @type {?} */
                        var newVal = this._disableRipple = toBoolean(val);
                        // remove previous ripple if exist
                        this._removeRippleEvents();
                        if (!newVal) {
                            // add ripple
                            /** @type {?} */
                            var rippleContainer = this._rippleContainer.nativeElement;
                            /** @type {?} */
                            var triggerElement = this._triggerElement.nativeElement;
                            this._ripple = new Ripple(this._theme.config, this._ngZone, this._theme.addStyleSheet(styles), rippleContainer, triggerElement);
                            this._ripple.setConfig(this._rippleConfig);
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
    function mixinFlat(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._flat = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "flat", {
                get: /**
                 * @return {?}
                 */ function () { return this._flat; },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) { this._flat = toBoolean(value); },
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
    var LyPaperBase = /** @class */ (function () {
        function LyPaperBase(_theme, _ngZone) {
            this._theme = _theme;
            this._ngZone = _ngZone;
        }
        return LyPaperBase;
    }());
    /** @type {?} */
    var LyPaperMixinBase = mixinStyleUpdater(mixinBg(mixinFlat(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyPaperBase)))))))));
    var LyPaper = /** @class */ (function (_super) {
        __extends(LyPaper, _super);
        function LyPaper(theme, ngZone, _el) {
            var _this = _super.call(this, theme, ngZone) || this;
            _this._el = _el;
            _this.setAutoContrast();
            _this._triggerElement = _this._el;
            _this._rippleContainer = _this._el;
            return _this;
        }
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
        LyPaper.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._removeRippleEvents();
            };
        LyPaper.decorators = [
            { type: i0.Directive, args: [{
                        selector: "ly-paper, [ly-paper]",
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
                { type: i0.ElementRef }
            ];
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
            pointerEvents: 'all'
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
                return ( /** @type {?} */((( /** @type {?} */(componentRef.hostView)))
                    .rootNodes[0]));
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    // export function LY_OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer: LyOverlayContainer) {
    //   return parentContainer || new LyOverlayContainer();
    // }
    // export const LY_OVERLAY_CONTAINER_PROVIDER = {
    //   // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    //   provide: LyOverlayContainer,
    //   deps: [[new Optional(), new SkipSelf(), LyOverlayContainer]],
    //   useFactory: LY_OVERLAY_CONTAINER_PROVIDER_FACTORY
    // };
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
                            // LY_OVERLAY_CONTAINER_PROVIDER
                        ]
                    },] }
        ];
        return LxDomModule;
    }());

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
    var LyFocusStateDeprecated = /** @class */ (function () {
        function LyFocusStateDeprecated(elementRef, _ngZone, _renderer, _cd) {
            var _this = this;
            this._ngZone = _ngZone;
            this._renderer = _renderer;
            this.stateMap = new Map();
            this._eventHandlers = new Map();
            this._stateSubject = new rxjs.Subject();
            this.lyFocusChange = new i0.EventEmitter();
            this._eventOptions = ( /** @type {?} */({ passive: true }));
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AUI_VERSION = '1.8.6';
    /** @type {?} */
    var AUI_LAST_UPDATE = '2018-11-24T06:47:32.416Z';

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
                var hammer = typeof window !== 'undefined' ? (( /** @type {?} */(window))).Hammer : null;
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
                this.windowScrollSub = windowScroll.scroll$.subscribe(function () {
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
    exports.LyPaperBase = LyPaperBase;
    exports.LyPaperMixinBase = LyPaperMixinBase;
    exports.LyPaper = LyPaper;
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
    exports.mixinStyleUpdater = mixinStyleUpdater;
    exports.mixinDisableRipple = mixinDisableRipple;
    exports.mixinDisabled = mixinDisabled;
    exports.mixinColor = mixinColor;
    exports.mixinBg = mixinBg;
    exports.mixinFlat = mixinFlat;
    exports.mixinRaised = mixinRaised;
    exports.mixinOutlined = mixinOutlined;
    exports.mixinElevation = mixinElevation;
    exports.mixinShadowColor = mixinShadowColor;
    exports.Ripple = Ripple;
    exports.LyRippleService = LyRippleService;
    exports.ɵa = LyWithClass;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc3JjL3BhbGV0dGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc2hhZG93LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2FseWxlLWNvbmZpZy1zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3BsYXRmb3JtLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3Bhc3NpdmUtbGlzdGVuZXJzLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZS1jb25maWcudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc3R5bGUtdXRpbHMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lMi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvY29tbW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9idWlsZC1jb21tb24tYmVoYXZpb3JzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvaXMtYm9vbGVhbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9yaXBwbGUvcmlwcGxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlcy9jb3JlLXN0eWxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9yaXBwbGUvcmlwcGxlLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2Rpc2FibGUtcmlwcGxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9kaXNhYmxlZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vY29sb3IudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2JnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9mbGF0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9yYWlzZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL291dGxpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9lbGV2YXRpb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL3NoYWRvdy1jb2xvci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9wYXBlci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS93aXRoLWNsYXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZWwvb2Zmc2V0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZGVmYXVsdC1lbnRyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS1jb250YWluZXIudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL2RvbS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9seC1kb20ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2ZvY3VzLXN0YXRlL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdmVyc2lvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9nZXN0dXJlL2dlc3R1cmUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy91bmRlZmluZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5Lm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbXV0YXRpb24tb2JzZXJ2ZXItZmFjdG9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJhc3RZSVEoaGV4Y29sb3IpIHtcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoNCwgMiksIDE2KTtcbiAgY29uc3QgeWlxID0gKChyICogMjk5KSArIChnICogNTg3KSArIChiICogMTE0KSkgLyAxMDAwO1xuICByZXR1cm4gKHlpcSA+PSAxMjgpID8gJ2JsYWNrJyA6ICd3aGl0ZSc7XG59XG4iLCJpbXBvcnQgKiBhcyBfY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5jb25zdCBjaHJvbWEgPSBfY2hyb21hO1xuXG5jb25zdCBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG5jb25zdCBzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkgPSAwLjE0O1xuY29uc3Qgc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkgPSAwLjEyO1xuZXhwb3J0IGNvbnN0IFNoYWRvd3MgPSBbXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDEsIDMsIDAsIDAsIDEsIDEsIDAsIDAsIDIsIDEsIC0xXSxcbiAgWzAsIDEsIDUsIDAsIDAsIDIsIDIsIDAsIDAsIDMsIDEsIC0yXSxcbiAgWzAsIDEsIDgsIDAsIDAsIDMsIDQsIDAsIDAsIDMsIDMsIC0yXSxcbiAgWzAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMF0sXG4gIFswLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxXSxcbiAgWzAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDJdLFxuICBbMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMl0sXG4gIFswLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgM10sXG4gIFswLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgM10sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNF0sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNF0sXG4gIFswLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNF0sXG4gIFswLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNV0sXG4gIFswLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDVdLFxuICBbMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1XSxcbiAgWzAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNl0sXG4gIFswLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDZdLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgN10sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3XSxcbiAgWzAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDddLFxuICBbMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOF0sXG4gIFswLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4XVxuXTtcbmV4cG9ydCBmdW5jdGlvbiBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZChlbGV2YXRpb246IG51bWJlciB8IHN0cmluZyA9IDIsIGNvbG9yID0gJyMwMDAnKSB7XG4gIGNvbnN0IENvbG9yID0gY2hyb21hKGNvbG9yKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYGJveC1zaGFkb3c6JHtlWzBdfXB4ICR7ZVsxXX1weCAke2VbMl19cHggJHtlWzNdfXB4ICR7Y29sb3JzWzBdfSwke2VbNF19cHggJHtlWzVdfXB4ICR7ZVs2XX1weCAke2VbN119cHggJHtjb2xvcnNbMV19LCR7ZVs4XX1weCAke2VbOV19cHggJHtlWzEwXX1weCAke2VbMTFdfXB4ICR7Y29sb3JzWzJdfTtgO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFkb3dCdWlsZGVyKGVsZXZhdGlvbjogbnVtYmVyIHwgc3RyaW5nLCBjb2xvcj86IHN0cmluZykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvciB8fCAnIzAwMCcpLmRhcmtlbigpLnNhdHVyYXRlKDIpO1xuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5VW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5KS5jc3MoKVxuICBdO1xuICBjb25zdCBlID0gU2hhZG93c1tlbGV2YXRpb25dO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgJHtlWzBdfXB4ICR7ZVsxXX1weCAke2VbMl19cHggJHtlWzNdfXB4ICR7Y29sb3JzWzBdfSwke2VbNF19cHggJHtlWzVdfXB4ICR7ZVs2XX1weCAke2VbN119cHggJHtjb2xvcnNbMV19LCR7ZVs4XX1weCAke2VbOV19cHggJHtlWzEwXX1weCAke2VbMTFdfXB4ICR7Y29sb3JzWzJdfTtgO1xuXG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRIRU1FX1ZBUklBQkxFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYWxldHRlVmFyaWFibGVzPignbHkudGhlbWUudmFyaWFibGVzJyk7XHJcbmV4cG9ydCBjb25zdCBJU19DT1JFX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPHRydWU+KCdseS5pcy5yb290Jyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHQge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4vLyBleHBvcnQgY2xhc3MgPGRlcHJlY2F0ZWQ+VGhlbWVWYXJpYWJsZXMge1xyXG4vLyAgIC8qKiBUaGVtZSBuYW1lICovXHJcbi8vICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgIHByaW1hcnk/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4vLyAgIGFjY2VudD86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbi8vICAgLyoqIHdhcm4gb3IgZXJyb3IgY29sb3IgKi9cclxuLy8gICB3YXJuPzogUGFsZXR0ZVZhcmlhYmxlcztcclxuLy8gICBzY2hlbWU/OiBzdHJpbmc7XHJcbi8vICAgY29sb3JTY2hlbWVzPzoge1xyXG4vLyAgICAgW2tleTogc3RyaW5nXTogQ29sb3JTY2hlbWVcclxuLy8gICB9O1xyXG4vLyAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZVZhcmlhYmxlcyB7XHJcbiAgZGVmYXVsdD86IHN0cmluZztcclxuICBjb250cmFzdD86IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JTY2hlbWUge1xyXG4gIGJhY2tncm91bmQ/OiB7XHJcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxyXG4gICAgcGFwZXI/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICB0ZXh0Pzoge1xyXG4gICAgZGVmYXVsdDogc3RyaW5nLFxyXG4gICAgcHJpbWFyeT86IHN0cmluZyxcclxuICAgIHNlY29uZGFyeT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogc3RyaW5nLFxyXG4gICAgaGludD86IHN0cmluZyxcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICB9O1xyXG4gIGRpdmlkZXI/OiBzdHJpbmc7XHJcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXHJcbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XHJcbiAgYmFyPzogc3RyaW5nO1xyXG4gIGlucHV0Pzoge1xyXG4gICAgbGFiZWw/OiBzdHJpbmcsXHJcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcclxuICB9O1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4iLCJcclxuLy8gV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBzdXBwb3J0cyB0aGUgVjggQnJlYWsgSXRlcmF0b3IuIFRoZSBWOCBjaGVja1xyXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cclxuY29uc3QgaGFzVjhCcmVha0l0ZXJhdG9yID0gKHR5cGVvZihJbnRsKSAhPT0gJ3VuZGVmaW5lZCcgJiYgKEludGwgYXMgYW55KS52OEJyZWFrSXRlcmF0b3IpO1xyXG4vKipcclxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcclxuICogY2hlY2tpbmcgYnJvd3Nlci1zcGVjaWZpYyBnbG9iYWwgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGlzQnJvd3NlcjogYm9vbGVhbiA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudDtcclxuICAvKiogTGF5b3V0IEVuZ2luZXMgKi9cclxuICBzdGF0aWMgcmVhZG9ubHkgRURHRSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGVkZ2UpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICBzdGF0aWMgcmVhZG9ubHkgVFJJREVOVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAvLyBFZGdlSFRNTCBhbmQgVHJpZGVudCBtb2NrIEJsaW5rIHNwZWNpZmljIHRoaW5ncyBhbmQgbmVlZCB0byBiZSBleGNsdWRlZCBmcm9tIHRoaXMgY2hlY2suXHJcbiAgc3RhdGljIHJlYWRvbmx5IEJMSU5LID0gUGxhdGZvcm0uaXNCcm93c2VyICYmXHJcbiAgICAgICghISgod2luZG93IGFzIGFueSkuY2hyb21lIHx8IGhhc1Y4QnJlYWtJdGVyYXRvcikgJiYgISFDU1MgJiYgIVBsYXRmb3JtLkVER0UgJiYgIVBsYXRmb3JtLlRSSURFTlQpO1xyXG5cclxuICAvLyBXZWJraXQgaXMgcGFydCBvZiB0aGUgdXNlckFnZW50IGluIEVkZ2VIVE1MLCBCbGluayBhbmQgVHJpZGVudC4gVGhlcmVmb3JlIHdlIG5lZWQgdG9cclxuICAvLyBlbnN1cmUgdGhhdCBXZWJraXQgcnVucyBzdGFuZGFsb25lIGFuZCBpcyBub3QgdXNlZCBhcyBhbm90aGVyIGVuZ2luZSdzIGJhc2UuXHJcbiAgc3RhdGljIHJlYWRvbmx5IFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxyXG4gICAgICAvQXBwbGVXZWJLaXQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICFQbGF0Zm9ybS5CTElOSyAmJiAhUGxhdGZvcm0uRURHRSAmJiAhUGxhdGZvcm0uVFJJREVOVDtcclxuXHJcbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xyXG4gIHN0YXRpYyByZWFkb25seSBJT1MgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgISh3aW5kb3cgYXMgYW55KS5NU1N0cmVhbTtcclxuXHJcbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcclxuICAvLyB0aGVtIHNlbGYgYXMgR2Vja28tbGlrZSBicm93c2VycyBhbmQgbW9kaWZ5IHRoZSB1c2VyQWdlbnQncyBhY2NvcmRpbmcgdG8gdGhhdC5cclxuICAvLyBTaW5jZSB3ZSBvbmx5IGNvdmVyIG9uZSBleHBsaWNpdCBGaXJlZm94IGNhc2UsIHdlIGNhbiBzaW1wbHkgY2hlY2sgZm9yIEZpcmVmb3hcclxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXHJcbiAgc3RhdGljIHJlYWRvbmx5IEZJUkVGT1ggPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhmaXJlZm94fG1pbmVmaWVsZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAvLyBUcmlkZW50IG9uIG1vYmlsZSBhZGRzIHRoZSBhbmRyb2lkIHBsYXRmb3JtIHRvIHRoZSB1c2VyQWdlbnQgdG8gdHJpY2sgZGV0ZWN0aW9ucy5cclxuICBzdGF0aWMgcmVhZG9ubHkgQU5EUk9JRCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvYW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIVBsYXRmb3JtLlRSSURFTlQ7XHJcblxyXG4gIC8vIFNhZmFyaSBicm93c2VycyB3aWxsIGluY2x1ZGUgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZWlyIHVzZXJBZ2VudC4gU29tZSBicm93c2VycyBtYXkgZmFrZVxyXG4gIC8vIHRoaXMgYW5kIGp1c3QgcGxhY2UgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZSB1c2VyQWdlbnQuIFRvIGJlIG1vcmUgc2FmZSBhYm91dCBTYWZhcmkgZXZlcnlcclxuICAvLyBTYWZhcmkgYnJvd3NlciBzaG91bGQgYWxzbyB1c2UgV2Via2l0IGFzIGl0cyBsYXlvdXQgZW5naW5lLlxyXG4gIHN0YXRpYyByZWFkb25seSBTQUZBUkkgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL3NhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgUGxhdGZvcm0uV0VCS0lUO1xyXG59XHJcbiIsImxldCBzdXBwb3J0c1Bhc3NpdmU7XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMoKTogYm9vbGVhbiB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmUgPT09IHZvaWQgMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9XG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVN0eWxlVXRpbHMsIERpciB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcbmltcG9ydCB7IFN0eWxlQ29udGFpbmVyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBSaXBwbGVWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9yaXBwbGUnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3R5cG9ncmFwaHknO1xuaW1wb3J0IHsgQ2hlY2tib3hWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9jaGVja2JveCc7XG5pbXBvcnQgeyBTbmFja0JhclZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBCdXR0b25WYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9idXR0b24nO1xuXG5leHBvcnQgY29uc3QgTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYXJ0aWFsVGhlbWVWYXJpYWJsZXM+KCdseS50aGVtZS5nbG9iYWwudmFyaWFibGVzJyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHlfdGhlbWVfY29uZmlnJyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUVfTkFNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdseS50aGVtZS5uYW1lJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaW1hcnk6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGFjY2VudDogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgd2FybjogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgZGlzYWJsZWQ6IHN0cmluZztcbiAgYmFja2dyb3VuZDoge1xuICAgIC8qKiBzZWNvbmRhcnkgKi9cbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcixcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICB0ZXJ0aWFyeTogc3RyaW5nLFxuICAgIGJhc2U6IHN0cmluZ1xuICB9O1xuICB0ZXh0OiB7XG4gICAgZGVmYXVsdDogc3RyaW5nLFxuICAgIHByaW1hcnk6IHN0cmluZyxcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICBkaXNhYmxlZDogc3RyaW5nLFxuICAgIGhpbnQ6IHN0cmluZ1xuICB9O1xuICB0eXBvZ3JhcGh5OiBUeXBvZ3JhcGh5VmFyaWFibGVzO1xuICAvKiogY29sb3IgZm9yIGRpdmlkZXIgKi9cbiAgZGl2aWRlcjogc3RyaW5nO1xuICBzaGFkb3c6IHN0cmluZztcbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBzaGFkb3cgaW5zdGVhZCAqL1xuICBjb2xvclNoYWRvdz86IHN0cmluZztcbiAgcmFkaW86IHtcbiAgICAvKiogY29sb3IgZm9yIHJhZGlvOm91dGVyQ2lyY2xlICovXG4gICAgb3V0ZXJDaXJjbGU/OiBzdHJpbmc7XG4gICAgLyoqIEBkZXByZWNhdGVkIHVzZSBvdXRlckNpcmNsZSBpbnN0ZWFkICovXG4gICAgcmFkaW9PdXRlckNpcmNsZT86IHN0cmluZztcbiAgfTtcbiAgbWVudToge1xuICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lclxuICB9O1xuICBkcmF3ZXI6IHtcbiAgICAvKiogY29sb3IgZm9yIGRyYXdlcjpiYWNrZHJvcCAqL1xuICAgIGJhY2tkcm9wOiBzdHJpbmdcbiAgfTtcbiAgZmllbGQ6IHtcbiAgICBib3JkZXJDb2xvcjogc3RyaW5nXG4gICAgbGFiZWxDb2xvcjogc3RyaW5nXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgW2FwcGVhcmFuY2VOYW1lOiBzdHJpbmddOiB7XG4gICAgICAgIGNvbnRhaW5lcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZpZWxkc2V0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmllbGRzZXRIb3Zlcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZpZWxkc2V0Rm9jdXNlZD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lckZvY3VzZWQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBsYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHBsYWNlaG9sZGVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5wdXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmbG9hdGluZ0xhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcHJlZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5maXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBzdWZmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBoaW50PzogU3R5bGVDb250YWluZXJcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGljb25CdXR0b246IHtcbiAgICBzaXplOiBzdHJpbmdcbiAgfTtcbiAgaWNvbjoge1xuICAgIGZvbnRTaXplOiBzdHJpbmdcbiAgfTtcbiAgekluZGV4OiB7XG4gICAgdG9vbGJhcjogbnVtYmVyXG4gICAgZHJhd2VyOiBudW1iZXJcbiAgICBvdmVybGF5OiBudW1iZXJcbiAgICBba2V5OiBzdHJpbmddOiBudW1iZXJcbiAgfTtcbiAgZGlyZWN0aW9uPzogRGlyO1xuICBhbmltYXRpb25zOiB7XG4gICAgY3VydmVzOiB7XG4gICAgICBzdGFuZGFyZDogc3RyaW5nXG4gICAgICBkZWNlbGVyYXRpb246IHN0cmluZ1xuICAgICAgYWNjZWxlcmF0aW9uOiBzdHJpbmdcbiAgICAgIHNoYXJwOiBzdHJpbmdcbiAgICB9LFxuICAgIGR1cmF0aW9uczoge1xuICAgICAgY29tcGxleDogbnVtYmVyXG4gICAgICBlbnRlcmluZzogbnVtYmVyXG4gICAgICBleGl0aW5nOiBudW1iZXJcbiAgICB9XG4gIH07XG4gIHJpcHBsZTogUmlwcGxlVmFyaWFibGVzO1xuICBiYWRnZToge1xuICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lcixcbiAgICBwb3NpdGlvbj86IHtcbiAgICAgIFtwb3NpdGlvbk5hbWU6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyXG4gICAgfVxuICB9O1xuICBjaGVja2JveDogQ2hlY2tib3hWYXJpYWJsZXM7XG4gIHNuYWNrQmFyOiBTbmFja0JhclZhcmlhYmxlcztcbiAgYnV0dG9uOiBCdXR0b25WYXJpYWJsZXM7XG59XG5cbmV4cG9ydCB0eXBlIFRoZW1lVmFyaWFibGVzID0gTHlTdHlsZVV0aWxzICYgVGhlbWVDb25maWc7XG5leHBvcnQgdHlwZSBQYXJ0aWFsVGhlbWVWYXJpYWJsZXMgPSBQYXJ0aWFsPFRoZW1lVmFyaWFibGVzPjtcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0VmFsIHtcbiAgZGVmYXVsdDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlQ29sb3Ige1xuICBjb250cmFzdD86IHN0cmluZztcbiAgLyoqIHNoYWRvdyBjb2xvciAqL1xuICBzaGFkb3c/OiBzdHJpbmc7XG59XG4iLCJleHBvcnQgY2xhc3MgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgaHRtbEZvbnRTaXplOiBudW1iZXIsXG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgfTtcbiAgYnJlYWtwb2ludHM6IHtcbiAgICBYU21hbGw6IHN0cmluZyxcbiAgICBTbWFsbDogc3RyaW5nLFxuICAgIE1lZGl1bTogc3RyaW5nLFxuICAgIExhcmdlOiBzdHJpbmcsXG4gICAgWExhcmdlOiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0OiBzdHJpbmcsXG4gICAgVGFibGV0OiBzdHJpbmcsXG4gICAgV2ViOiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0UG9ydHJhaXQ6IHN0cmluZyxcbiAgICBUYWJsZXRQb3J0cmFpdDogc3RyaW5nLFxuICAgIFdlYlBvcnRyYWl0OiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0TGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgVGFibGV0TGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgV2ViTGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH07XG4gIGRpcmVjdGlvbj86IERpcjtcbiAgcHhUb1JlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudHlwb2dyYXBoeS5mb250U2l6ZSAvIDE0O1xuICAgIHJldHVybiBgJHt2YWx1ZSAvIHRoaXMudHlwb2dyYXBoeS5odG1sRm9udFNpemUgKiBzaXplfXJlbWA7XG4gIH1cbiAgY29sb3JPZih2YWx1ZTogc3RyaW5nLCBvcHRpb25hbD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCB2YWx1ZSwgb3B0aW9uYWwpO1xuICB9XG4gIGdldEJyZWFrcG9pbnQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYEBtZWRpYSAke3RoaXMuYnJlYWtwb2ludHNba2V5XSB8fCBrZXl9YDtcbiAgfVxuXG4gIGdldERpcmVjdGlvbih2YWw6IERpckFsaWFzKSB7XG4gICAgaWYgKHZhbCA9PT0gRGlyQWxpYXMuZW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBlbnVtIERpciB7XG4gIHJ0bCA9ICdydGwnLFxuICBsdHIgPSAnbHRyJ1xufVxuZXhwb3J0IGVudW0gRGlyQWxpYXMge1xuICBzdGFydCA9ICdzdGFydCcsXG4gIGVuZCA9ICdlbmQnXG59XG5leHBvcnQgZW51bSBEaXJQb3NpdGlvbiB7XG4gIGxlZnQgPSAnbGVmdCcsXG4gIHJpZ2h0ID0gJ3JpZ2h0J1xufVxuXG4vKipcbiAqIGdldCBjb2xvciBvZiBvYmplY3RcbiAqIEBwYXJhbSBvYmogb2JqZWN0XG4gKiBAcGFyYW0gcGF0aCBwYXRoXG4gKiBAcGFyYW0gb3B0aW9uYWwgZ2V0IG9wdGlvbmFsIHZhbHVlLCBpZiBub3QgZXhpc3QgcmV0dXJuIGRlZmF1bHQgaWYgbm90IGlzIHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IHN0cmluZ1tdIHwgc3RyaW5nLCBvcHRpb25hbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBvc2libGVPYiA9IG9ialtfcGF0aFtpXV07XG4gICAgaWYgKHBvc2libGVPYikge1xuICAgICAgb2JqID0gcG9zaWJsZU9iO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiogaWYgbm90IGV4aXN0ICovXG4gICAgICByZXR1cm4gcGF0aCBhcyBzdHJpbmc7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvYmogYXMgc3RyaW5nO1xuICB9IGVsc2UgaWYgKG9wdGlvbmFsKSB7XG4gICAgcmV0dXJuIG9ialtvcHRpb25hbF0gfHwgb2JqWydkZWZhdWx0J107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9ialsnZGVmYXVsdCddO1xuICB9XG4gIC8vIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYWNoTWVkaWEoc3RyOiBzdHJpbmcgfCBudW1iZXIsIGZuOiAoKHZhbDogc3RyaW5nLCBtZWRpYTogc3RyaW5nLCBpc01lZGlhOiBudW1iZXIpID0+IHZvaWQpKSB7XG4gIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHZhbHVlcyA9IHN0ci5zcGxpdCgvXFxzL2cpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB2YWxJdGVtID0gdmFsdWVzW2luZGV4XS5zcGxpdCgvXFxAL2cpO1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWxJdGVtLnNoaWZ0KCk7XG4gICAgICBjb25zdCBsZW4gPSB2YWxJdGVtLmxlbmd0aDtcbiAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdmFsSXRlbVtqXSwgdmFsSXRlbS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHVuZGVmaW5lZCwgbGVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm4uY2FsbCh1bmRlZmluZWQsIHN0ciwgdW5kZWZpbmVkLCAwKTtcbiAgfVxufVxuLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVT4odGFyZ2V0OiBULCBzb3VyY2U6IFUpOiBUICYgVTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVSwgVj4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWKTogVCAmIFUgJiBWO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWLCBXPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYsIHNvdXJjZTM6IFcpOiBUICYgVSAmIFYgJiBXO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQ6IG9iamVjdCwgLi4uc291cmNlczogYW55W10pOiBhbnk7XG5cbi8qKlxuICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSAuLi5zb3VyY2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHsgcmV0dXJuIHRhcmdldDsgfVxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7IE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KTsgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUUsIFRoZW1lVmFyaWFibGVzLCBMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVRoZW1lIHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgbWVkaWFTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaW1hcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHNlY29uZGFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgZmlyc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcmVhZG9ubHkgdGhlbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX3RoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lVmFyaWFibGVzPigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+PigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FKSB0aGVtZUNvbmZpZzogVGhlbWVDb25maWdbXSB8IFRoZW1lQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUykgZ2xvYmFsVmFyaWFibGVzOiBUaGVtZUNvbmZpZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAoIXRoZW1lQ29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xZX1RIRU1FIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwge1xuICAgICAgaWQ6ICdseScsXG4gICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0ID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnbHktcy1jJyk7XG4gICAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZXMuaXRlbShpbmRleCk7XG4gICAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5maXJzdEVsZW1lbnQgPSBfZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoZW1lQ29uZmlnKSkge1xuICAgICAgdGhlbWVDb25maWcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICAgIG1lcmdlRGVlcChpdGVtLCBnbG9iYWxWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkKGl0ZW0gYXMgYW55KTtcbiAgICAgICAgdGhpcy50aGVtZXMuYWRkKGl0ZW0ubmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICBtZXJnZURlZXAodGhlbWVDb25maWcsIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZCh0aGVtZUNvbmZpZyBhcyBhbnkpO1xuICAgICAgdGhpcy50aGVtZXMuYWRkKHRoZW1lQ29uZmlnLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbmV3IHRoZW1lXG4gICAqIEBwYXJhbSB0aGVtZTogVGhlbWVWYXJpYWJsZXNcbiAgICovXG4gIGFkZCh0aGVtZTogVGhlbWVWYXJpYWJsZXMpIHtcbiAgICB0aGlzLl90aGVtZU1hcC5zZXQodGhlbWUubmFtZSwgdGhlbWUpO1xuICAgIHRoaXMuX3N0eWxlTWFwLnNldCh0aGVtZS5uYW1lLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgZ2V0KG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl90aGVtZU1hcC5nZXQobmFtZSk7XG4gIH1cbiAgZ2V0U3R5bGVNYXAobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAob2xkQ2xhc3NuYW1lKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvbGRDbGFzc25hbWUpO1xuICAgIH1cbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuZXdDbGFzc25hbWUpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgSW5qZWN0LCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpckFsaWFzIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5jb25zdCBkZWZhdWx0U3R5bGVzID0ge1xuICAnQGdsb2JhbCc6IHtcbiAgICAnKiwgKjphZnRlciwgKjpiZWZvcmUnOiB7XG4gICAgICAnLXdlYmtpdC1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJy1tb3otYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnXG4gICAgfVxuICB9XG59O1xuXG5cbmNvbnN0IFJFRl9SRUdfRVhQID0gL1xceyhbXFx3LV0rKVxcfS9nO1xuXG5lbnVtIFR5cGVTdHlsZSB7XG4gIE11bHRpcGxlLFxuICBPbmx5T25lXG59XG5cbmNvbnN0IFNUWUxFX01BUDU6IE1hcDxhbnksIFN0eWxlTWFwNT4gPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVNYXA1IHtcbiAgc3R5bGVzOiBTdHlsZXNGbjI8YW55PiB8IFN0eWxlczI7XG4gIHR5cGU6IFR5cGVTdHlsZTtcbiAgcHJpb3JpdHk6IG51bWJlcjtcbiAgY3NzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmc7XG4gIC8qKiBnbG9iYWwgdGhlbWUgKi9cbiAgY2xhc3Nlcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIHJlcXVpcmVVcGRhdGUgKi9cbiAgY2xhc3Nlc1dpdGhUaGVtZT86IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgICB9IHwgc3RyaW5nXG4gIH07XG4gIHJlcXVpcmVVcGRhdGU/OiBib29sZWFuO1xufVxuY29uc3QgQ0xBU1NFU19NQVA6IHtcbiAgW2lkT3JUaGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICBbY2xhc3NOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZ1xufSA9IHt9O1xuY29uc3QgU1RZTEVfS0VZU19NQVAgPSB7fTtcbmxldCBuZXh0Q2xhc3NJZCA9IDA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlc0luRG9jdW1lbnQge1xuICBzdHlsZXM6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PlxuICB9ID0ge307XG4gIHN0eWxlQ29udGFpbmVycyA9IG5ldyBNYXA8bnVtYmVyLCBIVE1MRWxlbWVudD4oKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZVZhcmlhYmxlcztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBpbml0aWFsVGhlbWU6IHN0cmluZztcbiAgZWxlbWVudHM6IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+O1xuICBfZWxlbWVudHNNYXAgPSBuZXcgTWFwPGFueSwgSFRNTFN0eWxlRWxlbWVudD4oKTtcblxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gQ0xBU1NFU19NQVA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlc0luRG9jdW1lbnQ6IFN0eWxlc0luRG9jdW1lbnQsXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICB0aGlzLl9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gdGhlbWVOYW1lIGluIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNcbiAgICAgID8gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdXG4gICAgICA6IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXSA9IG5ldyBNYXAoKTtcbiAgICAgIHRoaXMuX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lKTtcbiAgICAgIGlmICghdGhpcy5pbml0aWFsVGhlbWUpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVGhlbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWRkRGVmYXVsdFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKi9cbiAgYWRkU3R5bGUoaWQ6IHN0cmluZywgc3R5bGU6IFN0eWxlQ29udGFpbmVyIHwgKCh0aGVtZSkgPT4gU3R5bGVDb250YWluZXIpIHwgKCh0aGVtZSkgPT4gc3RyaW5nKSB8IHN0cmluZywgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5hZGRDc3MoaWQsIHN0eWxlIGFzIGFueSwgcHJpb3JpdHkpO1xuICAgIGlmIChuZXdDbGFzcyA9PT0gaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgaWYgKGVsKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0NsYXNzID09PSBvbGRDbGFzcykge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgaWYgKG5hbSAhPT0gdGhpcy5jb25maWcubmFtZSkge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZURhdGEgPSBTVFlMRV9NQVA1LmdldChrZXkpO1xuICAgICAgICBpZiAoc3R5bGVEYXRhLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlRGF0YS5zdHlsZXMsIGtleSwgc3R5bGVEYXRhLnByaW9yaXR5LCBzdHlsZURhdGEudHlwZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBtZWRpYSkgYXMgc3RyaW5nO1xuICB9XG4gIHByaXZhdGUgX2FkZERlZmF1bHRTdHlsZXMoKSB7XG4gICAgdGhpcy5hZGRTdHlsZVNoZWV0KGRlZmF1bHRTdHlsZXMpO1xuICB9XG5cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiAoU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiksIHByaW9yaXR5PzogbnVtYmVyKTogSUNsYXNzZXM8VD47XG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgKFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIpLCBpZDogc3RyaW5nKTogSUNsYXNzZXM8VD47XG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgKFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIpLCBpZDogc3RyaW5nIHwgc3RyaW5nLCBwcmlvcml0eTogbnVtYmVyKTogSUNsYXNzZXM8VD47XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBpZCBkZXByZWNhdGVkLCB1bmlxdWUgaWQgZm9yIHN0eWxlIGdyb3VwXG4gICAqIEBwYXJhbSBwcmlvcml0eSBwcmlvcml0eSBmb3Igc3R5bGVcbiAgICovXG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgKFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIpLCBpZD86IHN0cmluZyB8IG51bWJlciwgcHJpb3JpdHk/OiBudW1iZXIpOiBJQ2xhc3NlczxUPiB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBpZiAoKHZvaWQgMCA9PT0gcHJpb3JpdHkgJiYgdHlwZW9mIGlkID09PSAnc3RyaW5nJykgfHwgKHZvaWQgMCAhPT0gcHJpb3JpdHkgJiYgdHlwZW9mIGlkID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGB0aGUgdmFsdWUgXFxgJHtpZH1cXGAgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeSBmb3IgYWRkU3R5bGVTaGVldCwgdGhpcyB3aWxsIGJlIGFuIGVycm9yIGluIHRoZSBuZXh0IHJlbGVhc2UuYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgaWQgYXMgYW55LCBwcmlvcml0eSwgVHlwZVN0eWxlLk11bHRpcGxlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlQ29udGVudDI8VD4oXG4gICAgc3R5bGVzOiBTdHlsZXNGbjI8VD4gfCBTdHlsZXMyLFxuICAgIGlkOiBzdHJpbmcgfCBvYmplY3QgfCBudW1iZXIsXG4gICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICB0eXBlOiBUeXBlU3R5bGUsXG4gICAgZm9yQ2hhbmdlVGhlbWU/OiBib29sZWFuLFxuICAgIG1lZGlhPzogc3RyaW5nXG4gICkge1xuICAgIGNvbnN0IG5ld0lkID0gdHlwZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUgPyBpZCBhcyBzdHJpbmcgOiBzdHlsZXM7XG4gICAgbGV0IGlzTmV3U3R5bGU6IGJvb2xlYW47XG4gICAgaWYgKCFTVFlMRV9NQVA1LmhhcyhuZXdJZCkpIHtcbiAgICAgIGlzTmV3U3R5bGUgPSB0cnVlO1xuICAgICAgU1RZTEVfTUFQNS5zZXQobmV3SWQsIHtcbiAgICAgICAgcHJpb3JpdHk6IHR5cGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lID8gcHJpb3JpdHkgOiBwcmlvcml0eSA9PT0gdm9pZCAwICYmIHR5cGVvZiBpZCA9PT0gJ251bWJlcicgPyBpZCBhcyBudW1iZXIgOiBwcmlvcml0eSxcbiAgICAgICAgc3R5bGVzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBjc3M6IHt9XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVNYXAgPSBTVFlMRV9NQVA1LmdldChuZXdJZCk7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gdGhpcy5pbml0aWFsVGhlbWU7XG4gICAgY29uc3QgaXNDcmVhdGVkID0gaXNOZXdTdHlsZSB8fCAhKHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhlbWVOYW1lXSk7XG4gICAgaWYgKGlzQ3JlYXRlZCB8fCBmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgLyoqIGNyZWF0ZSBuZXcgc3R5bGUgZm9yIG5ldyB0aGVtZSAqL1xuICAgICAgbGV0IGNzcztcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUgPSB0cnVlO1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVNYXAsIHN0eWxlcyh0aGlzLmNvbmZpZyksIHRoZW1lTmFtZSwgbnVsbCwgdHlwZSwgdGhpcy5jb25maWcsIG1lZGlhKTtcbiAgICAgICAgaWYgKCFmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICAgIHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdID0gY3NzO1xuXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBjcmVhdGUgYSBuZXcgaWQgZm9yIHN0eWxlIHRoYXQgZG9lcyBub3QgPC08cmVxdWlyZT4tPiBjaGFuZ2VzICovXG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZU1hcCwgc3R5bGVzLCB0aGVtZU5hbWUsIG5ld0lkIGFzIHN0cmluZywgdHlwZSwgdGhpcy5jb25maWcsIG1lZGlhKTtcbiAgICAgICAgc3R5bGVNYXAuY3NzID0gY3NzO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShjc3MpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50cy5nZXQobmV3SWQpO1xuICAgICAgaWYgKGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIGVsKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiBhcHBlbmQgY2hpbGQgc3R5bGUgaWYgbm90IGV4aXN0IGluIGRvbVxuICAgICAgICogZm9yIHNzciAmIGhtclxuICAgICAgICovXG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuaGFzKG5ld0lkKSkge1xuICAgICAgICBjb25zdCBfY3NzID0gc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV0gfHwgc3R5bGVNYXAuY3NzO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpKTtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgdGhpcy5lbGVtZW50cy5nZXQobmV3SWQpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhlbWVOYW1lXTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHByaW9yaXR5ID0gMCkge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgaWYgKCFzdHlsZUNvbnRhaW5lcnMuaGFzKHByaW9yaXR5KSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudChgbHktcy1jYCk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3ByaW9yaXR5JywgYCR7cHJpb3JpdHl9YCk7XG4gICAgICB9XG4gICAgICBzdHlsZUNvbnRhaW5lcnMuc2V0KHByaW9yaXR5LCBlbCk7XG4gICAgICBpZiAoc3R5bGVDb250YWluZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBlbCwgdGhpcy5fZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gICAgfVxuICAgIGNvbnN0IHJlZkNoaWxkID0gdGhpcy5maW5kTm9kZShwcmlvcml0eSk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KSwgcmVmQ2hpbGQpO1xuICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE5vZGUoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgY29uc3Qga2V5cyA9IChBcnJheS5mcm9tKHN0eWxlQ29udGFpbmVycy5rZXlzKCkpKS5zb3J0KCk7XG4gICAgY29uc3Qga2V5ID0ga2V5cy5maW5kKF8gPT4gaW5kZXggPCBfKTtcbiAgICByZXR1cm4gKGtleSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlQ29udGFpbmVycy5nZXQoa2V5KSkgfHwgdGhpcy5jb3JlLmZpcnN0RWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVsZW1lbnRTdHlsZShjc3M6IHN0cmluZykge1xuICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVUZXh0KGNzcyk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCwgc3R5bGVUZXh0KTtcbiAgICByZXR1cm4gc3R5bGVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlSW5zdGFuY2VGb3JUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghKHRoZW1lTmFtZSBpbiBDTEFTU0VTX01BUCkpIHtcbiAgICAgIENMQVNTRVNfTUFQW3RoZW1lTmFtZV0gPSB7fTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXIgfCBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVzMiB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyO1xufVxuZXhwb3J0IHR5cGUgU3R5bGVzRm4yPFQ+ID0gKFQpID0+IFN0eWxlczI7XG5cbmZ1bmN0aW9uIGdyb3VwU3R5bGVUb1N0cmluZyhcbiAgc3R5bGVNYXA6IFN0eWxlTWFwNSxcbiAgc3R5bGVzOiBTdHlsZXMyLFxuICB0aGVtZU5hbWU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyxcbiAgdHlwZVN0eWxlOiBUeXBlU3R5bGUsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgbWVkaWE/OiBzdHJpbmdcbikge1xuICBpZiAodHlwZVN0eWxlID09PSBUeXBlU3R5bGUuT25seU9uZSkge1xuICAgIC8vIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXdcbiAgICBjb25zdCBjbGFzc05hbWUgPSBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlXG4gICAgPyBzdHlsZU1hcFt0aGVtZU5hbWVdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVdID0gY3JlYXRlTmV4dENsYXNzSWQoKSlcbiAgICA6IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgID8gc3R5bGVNYXAuY2xhc3Nlc1xuICAgICAgOiBzdHlsZU1hcC5jbGFzc2VzID0gY3JlYXRlTmV4dENsYXNzSWQoKTtcbiAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGNzcyA9IGAuJHtjbGFzc05hbWV9eyR7c3R5bGVzfX1gO1xuICAgICAgcmV0dXJuIG1lZGlhID8gdG9NZWRpYShjc3MsIG1lZGlhKSA6IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZXMgPSBzdHlsZVRvU3RyaW5nKGlkLCBzdHlsZXMsIHRoZW1lVmFyaWFibGVzLCBjbGFzc05hbWUgYXMgYW55KTtcbiAgICAgIHJldHVybiBydWxlcztcbiAgICB9XG4gIH1cbiAgLy8gZm9yIG11bHRpcGxlcyBzdHlsZXNcbiAgY29uc3QgY2xhc3Nlc01hcCA9IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSB7fSk7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc05hbWUgPSBrZXkgaW4gY2xhc3Nlc01hcFxuICAgICAgPyBjbGFzc2VzTWFwW2tleV1cbiAgICAgIDogY2xhc3Nlc01hcFtrZXldID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGBpLS0tJHtrZXl9LSR7Y3JlYXRlTmV4dENsYXNzSWQoKX1gKSA6IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZVRvU3RyaW5nKGtleSwgdmFsdWUgYXMgU3R5bGVzMiwgdGhlbWVWYXJpYWJsZXMsIGN1cnJlbnRDbGFzc05hbWUpO1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGlzIHN0cmluZycsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2VSZWZzKGNvbnRlbnQsIGNsYXNzZXNNYXApO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUmVmcyhzdHI6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUZfUkVHX0VYUCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIHJldHVybiBgLiR7ZGF0YVt0b2tlbl19YDtcbiAgfVxuICApO1xufVxuXG4vKipcbiAqIHtjb2xvcjoncmVkJ30gdG8gLmNsYXNzTmFtZXtjb2xvcjogcmVkfVxuICovXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKGtleTogc3RyaW5nLCBvYjogT2JqZWN0LCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIGN1cnJlbnRLZXk6IHN0cmluZywgcGFyZW50S2V5Pzogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBzdWJDb250ZW50ID0gJyc7XG4gIGxldCBrZXlBbmRWYWx1ZSA9ICcnO1xuICBsZXQgbmV3S2V5O1xuICBpZiAocGFyZW50S2V5KSB7XG4gICAgaWYgKGN1cnJlbnRLZXkuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgICAgbmV3S2V5ID0gY3VycmVudEtleS5yZXBsYWNlKC8mL2csIHBhcmVudEtleSk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50S2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICBuZXdLZXkgPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0tleSA9IGAke3BhcmVudEtleX0gJHtjdXJyZW50S2V5fWA7XG4gICAgfVxuICB9IGVsc2UgaWYgKGtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgbmV3S2V5ID0ga2V5O1xuICB9IGVsc2Uge1xuICAgIG5ld0tleSA9IGAuJHtjdXJyZW50S2V5fWA7XG4gIH1cbiAgZm9yIChjb25zdCBzdHlsZUtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBvYltzdHlsZUtleV07XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHN1YkNvbnRlbnQgKz0gc3R5bGVUb1N0cmluZyhrZXksIGVsZW1lbnQgYXMgU3R5bGVzMiwgdGhlbWVWYXJpYWJsZXMsIHN0eWxlS2V5LCBuZXdLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5ld1N0eWxlS2V5ID0gdG9IeXBoZW5DYXNlQ2FjaGUoc3R5bGVLZXkpO1xuICAgICAgICBpZiAobmV3U3R5bGVLZXkuaW5kZXhPZihEaXJBbGlhcy5zdGFydCkgIT09IC0xKSB7XG4gICAgICAgICAgbmV3U3R5bGVLZXkgPSBkaXJDYWNoZShuZXdTdHlsZUtleSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLnN0YXJ0KTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdTdHlsZUtleS5pbmRleE9mKERpckFsaWFzLmVuZCkgIT09IC0xKSB7XG4gICAgICAgICAgbmV3U3R5bGVLZXkgPSBkaXJDYWNoZShuZXdTdHlsZUtleSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLmVuZCk7XG4gICAgICAgIH1cbiAgICAgICAga2V5QW5kVmFsdWUgKz0gYCR7bmV3U3R5bGVLZXl9OiR7ZWxlbWVudH07YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGtleUFuZFZhbHVlKSB7XG4gICAgaWYgKG5ld0tleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICAgIGtleUFuZFZhbHVlID0gYCR7cGFyZW50S2V5fXske2tleUFuZFZhbHVlfX1gO1xuICAgIH0gZWxzZSBpZiAocGFyZW50S2V5ICYmIHBhcmVudEtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgICBjb250ZW50ICs9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICB9XG4gICAgY29udGVudCArPSBgeyR7a2V5QW5kVmFsdWV9fWA7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQgKyBzdWJDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuZnVuY3Rpb24gdG9DbGFzc05hbWVWYWxpZChzdHI6IHN0cmluZykge1xuICBjb25zdCBzID0gc3RyLnJlcGxhY2UoL15bMC05XXxbXlxcd1xcLV0vZywgXyA9PiB7XG4gICAgcmV0dXJuIGBfJHtfLmNoYXJDb2RlQXQoMCl9YDtcbiAgfSk7XG4gIHJldHVybiB0b0h5cGhlbkNhc2Uocyk7XG59XG5cbmZ1bmN0aW9uIHRvSHlwaGVuQ2FzZUNhY2hlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ciBpbiBTVFlMRV9LRVlTX01BUFxuICA/IFNUWUxFX0tFWVNfTUFQW3N0cl1cbiAgOiBTVFlMRV9LRVlTX01BUFtzdHJdID0gdG9IeXBoZW5DYXNlKHN0cik7XG59XG5cbmNvbnN0IFNUWUxFX0tFWVNfRElSRUNUSU9OU19NQVAgPSB7fTtcblxuZnVuY3Rpb24gZGlyQ2FjaGUodmFsOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgZGlyQWxpYXM6IERpckFsaWFzKSB7XG4gIGNvbnN0IG5ld0tleSA9IHRoZW1lVmFyaWFibGVzLmRpcmVjdGlvbiArIHZhbDtcbiAgcmV0dXJuIG5ld0tleSBpbiBTVFlMRV9LRVlTX0RJUkVDVElPTlNfTUFQXG4gID8gU1RZTEVfS0VZU19ESVJFQ1RJT05TX01BUFtuZXdLZXldXG4gIDogU1RZTEVfS0VZU19ESVJFQ1RJT05TX01BUFtuZXdLZXldID0gdmFsLnJlcGxhY2UoZGlyQWxpYXMsIHRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbihkaXJBbGlhcykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gdG9NZWRpYShjc3M6IHN0cmluZywgbWVkaWE6IHN0cmluZykge1xuICByZXR1cm4gYEBtZWRpYSAke21lZGlhfXske2Nzc319YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dENsYXNzSWQoKSB7XG4gIHJldHVybiBgaSR7KG5leHRDbGFzc0lkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuXG50eXBlIElDbGFzc2VzPFQ+ID0gUmVjb3JkPChUIGV4dGVuZHMgKCguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA/IChrZXlvZiBSZXR1cm5UeXBlPFQ+KSA6IGtleW9mIFQpLCBzdHJpbmc+O1xuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95LCBOZ01vZHVsZSwgRWxlbWVudFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl92aWV3UmVmLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZU1vZHVsZSB7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik6IEhUTUxFbGVtZW50IHtcclxuICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYgPyBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcbmltcG9ydCB7IENhbkNvbG9yIH0gZnJvbSAnLi9jb2xvcic7XG5pbXBvcnQgeyBDYW5CZyB9IGZyb20gJy4vYmcnO1xuaW1wb3J0IHsgQ2FuRGlzYWJsZSB9IGZyb20gJy4vZGlzYWJsZWQnO1xuaW1wb3J0IHsgQ2FuUmFpc2VkIH0gZnJvbSAnLi9yYWlzZWQnO1xuaW1wb3J0IHsgQ2FuRWxldmF0aW9uIH0gZnJvbSAnLi9lbGV2YXRpb24nO1xuaW1wb3J0IHsgQ2FuT3V0bGluZWQgfSBmcm9tICcuL291dGxpbmVkJztcbmltcG9ydCB7IENhblNoYWRvd0NvbG9yIH0gZnJvbSAnLi9zaGFkb3ctY29sb3InO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXROYXRpdmVFbGVtZW50IH0gZnJvbSAnLi4vbWluaW1hbC9jb21tb24nO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5jb25zdCBERUZBVUxUX1ZBTFVFID0gJyc7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0xO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVQYXJhbXNTdHlsZVVwZGF0ZXIge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhblN0eWxlVXBkYXRlciB7XG4gIF90aGVtZTogTHlUaGVtZTI7XG4gIHVwZGF0ZVN0eWxlOiAoZWxlbWVudDogRWxlbWVudFJlZiB8IEVsZW1lbnQpID0+IHZvaWQ7XG4gIHNldEF1dG9Db250cmFzdDogKCkgPT4gdm9pZDtcbn1cbmV4cG9ydCB0eXBlIENhblN0eWxlVXBkYXRlckN0b3IgPSBDb25zdHJ1Y3RvcjxSZXF1aXJlUGFyYW1zU3R5bGVVcGRhdGVyICYgUGFydGlhbDxDYW5Db2xvciAmIENhbkJnICYgQ2FuRGlzYWJsZSAmIENhblJhaXNlZCAmIENhbkVsZXZhdGlvbiAmIENhbk91dGxpbmVkICYgQ2FuU2hhZG93Q29sb3I+PjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluU3R5bGVVcGRhdGVyPFQgZXh0ZW5kcyBDYW5TdHlsZVVwZGF0ZXJDdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuU3R5bGVVcGRhdGVyPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBfY2xhc3NOYW1lQW5vbnltb3VzOiBzdHJpbmc7XG4gICAgX2F1dG9Db250cmFzdDogYm9vbGVhbjtcbiAgICBzZXRBdXRvQ29udHJhc3QoKSB7XG4gICAgICB0aGlzLl9hdXRvQ29udHJhc3QgPSB0cnVlO1xuICAgIH1cbiAgICB1cGRhdGVTdHlsZShlbGVtZW50OiBFbGVtZW50UmVmPGFueT4gfCBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgX19iZyA9IHRoaXMuYmc7XG4gICAgICBjb25zdCBfX2NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgIGNvbnN0IF9fcmFpc2VkID0gdGhpcy5yYWlzZWQ7XG4gICAgICBjb25zdCBfX2VsZXZhdGlvbiA9IHRoaXMuZWxldmF0aW9uO1xuICAgICAgY29uc3QgX19kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICBjb25zdCBfX291dGxpbmVkID0gdGhpcy5vdXRsaW5lZDtcbiAgICAgIGNvbnN0IF9fc2hhZG93Q29sb3IgPSB0aGlzLnNoYWRvd0NvbG9yO1xuICAgICAgY29uc3QgX19pc0NvbnRyYXN0ID0gdGhpcy5fYXV0b0NvbnRyYXN0ICYmICFfX2NvbG9yIHx8IF9fY29sb3IgPT09ICdhdXRvJztcbiAgICAgIGNvbnN0IG5ld0tleSA9IGBjb21tb24tLS0tOiR7XG4gICAgICAgIF9fYmcgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICBfX2NvbG9yIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICBfX3JhaXNlZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICBfX2VsZXZhdGlvbiB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgIF9fZGlzYWJsZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICAgIF9fb3V0bGluZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICAgICAgX19zaGFkb3dDb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICAgIF9faXNDb250cmFzdCB8fCBERUZBVUxUX1ZBTFVFfWA7XG4gICAgICB0aGlzLl9jbGFzc05hbWVBbm9ueW1vdXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShuZXdLZXksICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGU6IHtcbiAgICAgICAgICBib3JkZXI/OiBzdHJpbmcsXG4gICAgICAgICAgYmFja2dyb3VuZD86IHN0cmluZyxcbiAgICAgICAgICBjb2xvcj86IHN0cmluZyxcbiAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmcsXG4gICAgICAgICAgcG9pbnRlckV2ZW50cz86ICdub25lJztcbiAgICAgICAgICAnJjpob3Zlcic/OiB7XG4gICAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmdcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmFjdGl2ZSc/OiB7XG4gICAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmdcbiAgICAgICAgICB9XG4gICAgICAgIH0gPSB7fTtcbiAgICAgICAgaWYgKF9fb3V0bGluZWQpIHtcbiAgICAgICAgICBzdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fZGlzYWJsZWQpIHtcbiAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLnRleHQuZGlzYWJsZWQ7XG4gICAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmRpc2FibGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmNvbG9yT2YoX19iZyk7XG4gICAgICAgICAgICBpZiAoX19pc0NvbnRyYXN0KSB7XG4gICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZihgJHtfX2JnfTpjb250cmFzdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXN0eWxlLmNvbG9yICYmIF9fY29sb3IpIHtcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZihfX2NvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF9fcmFpc2VkIHx8IF9fZWxldmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAoIV9fYmcpIHtcbiAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9yQ3NzID0gc3R5bGUuYmFja2dyb3VuZCAhPT0gX19iZyAmJiB0aGVtZS5jb2xvck9mKF9fYmcgfHwgJ2JhY2tncm91bmQ6cHJpbWFyeScsICdzaGFkb3cnKTtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gKF9fc2hhZG93Q29sb3IgJiYgdGhlbWUuY29sb3JPZihfX3NoYWRvd0NvbG9yKSkgfHwgYmFja2dyb3VuZENvbG9yQ3NzIHx8IHN0eWxlLmJhY2tncm91bmQgfHwgc3R5bGUuY29sb3IgfHwgdGhlbWUuc2hhZG93O1xuICAgICAgICAgICAgc3R5bGUuYm94U2hhZG93ID0gc2hhZG93QnVpbGRlcihfX2VsZXZhdGlvbiB8fCAzLCBzaGFkb3dDb2xvcik7XG4gICAgICAgICAgICBpZiAoIV9fZWxldmF0aW9uKSB7XG4gICAgICAgICAgICAgIHN0eWxlWycmOmFjdGl2ZSddID0ge1xuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig4LCBzaGFkb3dDb2xvcilcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlIGFzIGFueTtcbiAgICAgIH0sIGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudCksIHRoaXMuX2NsYXNzTmFtZUFub255bW91cywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cbiIsImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmlwcGxlQ29uZmlnIHtcbiAgY2VudGVyZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHNlbnNpdGl2ZT86IGJvb2xlYW47XG4gIHJhZGl1cz86ICdjb250YWluZXJTaXplJyB8IG51bWJlcjtcbiAgcGVyY2VudGFnZVRvSW5jcmVhc2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVSZWYge1xuICBzdGF0ZSA9IHRydWU7XG4gIHRpbWVzdGFtcCA9IC1EYXRlLm5vdygpO1xuICByZWFkb25seSBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbmQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMudGltZXN0YW1wICs9IERhdGUubm93KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJpcHBsZSB7XG4gIHByaXZhdGUgX3JpcHBsZVJlZjogUmlwcGxlUmVmO1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzOiBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+ID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgY29uZmlnOiBSaXBwbGVDb25maWcgPSB7fTtcbiAgcHJpdmF0ZSBfdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5fdGhlbWVWYXJpYWJsZXMucmlwcGxlLmR1cmF0aW9uO1xuICBwcml2YXRlIF9ldmVudE9wdGlvbnMgPSB7cGFzc2l2ZTogdHJ1ZX0gYXMgYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBhbnksXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBfdHJpZ2dlckVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBpZiAodHlwZW9mIFBvaW50ZXJFdmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIVRvdWNoRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3BvaW50ZXJkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNlZG93bicsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCd0b3VjaGVuZCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgndG91Y2hjYW5jZWwnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNldXAnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNlbGVhdmUnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgaWYgKCFfdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgICAgX3RyaWdnZXJFbGVtZW50ID0gX2NvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KF90cmlnZ2VyRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q29uZmlnKGNvbmZpZzogUmlwcGxlQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcml2YXRlIGdldCBfcmVjdENvbnRhaW5lcigpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIC8vIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnN0eWxlc0RhdGFbMF0pO1xuICAgICAgLy8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5zdHlsZXNEYXRhWzBdLmlkKTtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJpcHBsZShzdHlsZXM6IHtba2V5OiBzdHJpbmddOiBudW1iZXIgfCBzdHJpbmd9KSB7XG4gICAgdGhpcy5fcmlwcGxlUmVmID0gbmV3IFJpcHBsZVJlZigpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZVJlZi5jb250YWluZXI7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHRoaXMuY2xhc3Nlcy5yaXBwbGVDb250YWluZXI7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHN0eWxlc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlW2tleV0gPSBgJHtlbGVtZW50fXB4YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuc3R5bGVba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZSgnb3BhY2l0eScpO1xuICAgIGNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoMSlgO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBvaW50ZXJEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgLyoqRGVzdHJveSBwcmV2aW91cyByaXBwbGUgaWYgZXhpc3QgKi9cbiAgICAgIHRoaXMuZW5kUmlwcGxlKCk7XG4gICAgICB0aGlzLnN0YXJ0UmlwcGxlKGV2ZW50LCB0aGlzLmNvbmZpZyk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgb25Qb2ludGVyTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmVuZFJpcHBsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UmlwcGxlKGV2ZW50OiBNb3VzZUV2ZW50IHwgUG9pbnRlckV2ZW50LCByaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLl9yZWN0Q29udGFpbmVyO1xuICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCxcbiAgICB5ID0gZXZlbnQuY2xpZW50WTtcbiAgICBpZiAocmlwcGxlQ29uZmlnLmNlbnRlcmVkKSB7XG4gICAgICB4ID0gY29udGFpbmVyUmVjdC5sZWZ0ICsgY29udGFpbmVyUmVjdC53aWR0aCAvIDI7XG4gICAgICB5ID0gY29udGFpbmVyUmVjdC50b3AgKyBjb250YWluZXJSZWN0LmhlaWdodCAvIDI7XG4gICAgfVxuICAgIGNvbnN0IGxlZnQgPSB4IC0gY29udGFpbmVyUmVjdC5sZWZ0O1xuICAgIGNvbnN0IHRvcCA9IHkgLSBjb250YWluZXJSZWN0LnRvcDtcbiAgICBsZXQgcmFkaXVzID0gcmlwcGxlQ29uZmlnLnJhZGl1cyA9PT0gJ2NvbnRhaW5lclNpemUnID8gbWF4U2l6ZShjb250YWluZXJSZWN0KSAvIDIgOiByaXBwbGVDb25maWcucmFkaXVzIHx8IHJpcHBsZVJhZGl1cyh4LCB5LCBjb250YWluZXJSZWN0KTtcbiAgICBpZiAocmlwcGxlQ29uZmlnLnBlcmNlbnRhZ2VUb0luY3JlYXNlKSB7XG4gICAgICByYWRpdXMgKz0gcmFkaXVzICogcmlwcGxlQ29uZmlnLnBlcmNlbnRhZ2VUb0luY3JlYXNlIC8gMTAwO1xuICAgIH1cbiAgICB0aGlzLmNyZWF0ZVJpcHBsZSh7XG4gICAgICBsZWZ0OiBsZWZ0IC0gcmFkaXVzLFxuICAgICAgdG9wOiB0b3AgLSByYWRpdXMsXG4gICAgICB3aWR0aDogcmFkaXVzICogMixcbiAgICAgIGhlaWdodDogcmFkaXVzICogMixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7dGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9ufW1zYFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5UaW1lb3V0T3V0c2lkZVpvbmUoZm46IEZ1bmN0aW9uLCBkZWxheSA9IDApIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dChmbiwgZGVsYXkpKTtcbiAgfVxuXG4gIGVuZFJpcHBsZSgpIHtcbiAgICBjb25zdCByaXBwbGVSZWY6IFJpcHBsZVJlZiA9IHRoaXMuX3JpcHBsZVJlZiB8fCBudWxsO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIGlmIChyaXBwbGVSZWYgJiYgcmlwcGxlUmVmLnN0YXRlKSB7XG4gICAgICByaXBwbGVSZWYuZW5kKCk7XG4gICAgICB0aGlzLnJ1blRpbWVvdXRPdXRzaWRlWm9uZSgoKSA9PiB7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt0aGlzLl90cmFuc2l0aW9uRHVyYXRpb24gLyA1fW1zYDtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIDogMCk7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAvIChkdXJhdGlvbiAqIC4wMDEgKyAxKSA6IDApO1xuICAgICAgfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAuMTUgOiAwKTtcbiAgICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJpcHBsZVJlZi5jb250YWluZXIpO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAyIDogZHVyYXRpb24pO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gLyAoZHVyYXRpb24gKiAuMDAxICsgMSkgKiAyIDogZHVyYXRpb24pO1xuICAgICAgfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAyIDogZHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiByaXBwbGVSYWRpdXMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJlY3Q6IENsaWVudFJlY3QpIHtcbiAgY29uc3QgZGlzdFggPSBNYXRoLm1heChNYXRoLmFicyh4IC0gcmVjdC5sZWZ0KSwgTWF0aC5hYnMoeCAtIHJlY3QucmlnaHQpKTtcbiAgY29uc3QgZGlzdFkgPSBNYXRoLm1heChNYXRoLmFicyh5IC0gcmVjdC50b3ApLCBNYXRoLmFicyh5IC0gcmVjdC5ib3R0b20pKTtcbiAgcmV0dXJuIE1hdGguc3FydChkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WSk7XG59XG5cbmZ1bmN0aW9uIG1heFNpemUocmVjdDogQ2xpZW50UmVjdCkge1xuICByZXR1cm4gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBMWV9DT01NT05fU1RZTEVTID0ge1xuICBmaWxsOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICB9LFxuICB2aXN1YWxseUhpZGRlbjoge1xuICAgIGJvcmRlcjogMCxcbiAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBtYXJnaW46ICctMXB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzFweCcsXG4gICAgb3V0bGluZTogMCxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgfVxufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNvcmVTdHlsZXMge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KExZX0NPTU1PTl9TVFlMRVMpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lOiBMeVRoZW1lMikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnLi4vc3R5bGVzL2NvcmUtc3R5bGVzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcmlwcGxlQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcycHgnLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgb3BhY2l0eTogJy4yJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLm9wYWNpdHl9LHRyYW5zZm9ybSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLnRyYW5zZm9ybVxuICAgIH1gLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICB9XG59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGVTZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IFJpcHBsZSwgUmlwcGxlQ29uZmlnIH0gZnJvbSAnLi4vcmlwcGxlL3JpcHBsZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi9yaXBwbGUvcmlwcGxlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVQYXJhbXMge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xuICBfbmdab25lOiBOZ1pvbmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRGlzYWJsZVJpcHBsZSB7XG4gIF90cmlnZ2VyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcbiAgX3JpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnO1xuICBfcmVtb3ZlUmlwcGxlRXZlbnRzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EaXNhYmxlUmlwcGxlPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxSZXF1aXJlUGFyYW1zPj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkRpc2FibGVSaXBwbGU+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgX3RyaWdnZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIF9yaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZyA9IHt9O1xuICAgIHByaXZhdGUgX3JpcHBsZTogUmlwcGxlO1xuICAgIHByaXZhdGUgX2Rpc2FibGVSaXBwbGUgPSBudWxsO1xuXG4gICAgZ2V0IGRpc2FibGVSaXBwbGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlUmlwcGxlOyB9XG4gICAgc2V0IGRpc2FibGVSaXBwbGUodmFsOiBib29sZWFuKSB7XG4gICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHZhbCAhPT0gdGhpcy5fZGlzYWJsZVJpcHBsZSkge1xuICAgICAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9kaXNhYmxlUmlwcGxlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICAgIC8vIHJlbW92ZSBwcmV2aW91cyByaXBwbGUgaWYgZXhpc3RcbiAgICAgICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gICAgICAgIGlmICghbmV3VmFsKSB7XG4gICAgICAgICAgLy8gYWRkIHJpcHBsZVxuICAgICAgICAgIGNvbnN0IHJpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIGNvbnN0IHRyaWdnZXJFbGVtZW50ID0gdGhpcy5fdHJpZ2dlckVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICB0aGlzLl9yaXBwbGUgPSBuZXcgUmlwcGxlKHRoaXMuX3RoZW1lLmNvbmZpZywgdGhpcy5fbmdab25lLCB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyksIHJpcHBsZUNvbnRhaW5lciwgdHJpZ2dlckVsZW1lbnQpO1xuICAgICAgICAgIHRoaXMuX3JpcHBsZS5zZXRDb25maWcodGhpcy5fcmlwcGxlQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlUmlwcGxlRXZlbnRzKCkge1xuICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICBpZiAodGhpcy5fcmlwcGxlKSB7XG4gICAgICAgICAgdGhpcy5fcmlwcGxlLnJlbW92ZUV2ZW50cygpO1xuICAgICAgICAgIHRoaXMuX3JpcHBsZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5EaXNhYmxlIHtcbiAgZGlzYWJsZWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluRGlzYWJsZWQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuRGlzYWJsZT4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuY29uc3QgREVGQVVMVF9DT0xPUiA9ICdwcmltYXJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5Db2xvciB7XG4gIGNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkNvbG9yPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkNvbG9yPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuXG4gICAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9jb2xvcjsgfVxuICAgIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdmFsIHx8IERFRkFVTFRfQ09MT1I7XG4gICAgICBpZiAoZGVmYXVsdENvbG9yICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgIHRoaXMuX2NvbG9yID0gZGVmYXVsdENvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkJnIHtcbiAgYmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluQmc8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuQmc+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2JnOiBzdHJpbmc7XG5cbiAgICBnZXQgYmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2JnOyB9XG4gICAgc2V0IGJnKHZhbDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB2YWwgfHwgREVGQVVMVF9CRztcbiAgICAgIGlmIChkZWZhdWx0Q29sb3IgIT09IHRoaXMuYmcpIHtcbiAgICAgICAgdGhpcy5fYmcgPSBkZWZhdWx0Q29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkZsYXQge1xuICBmbGF0OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5GbGF0PFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkZsYXQ+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2ZsYXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGdldCBmbGF0KCkgeyByZXR1cm4gdGhpcy5fZmxhdDsgfVxuICAgIHNldCBmbGF0KHZhbHVlOiBhbnkpIHsgdGhpcy5fZmxhdCA9IHRvQm9vbGVhbih2YWx1ZSk7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5SYWlzZWQge1xuICByYWlzZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblJhaXNlZDxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5SYWlzZWQ+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX3JhaXNlZDogYm9vbGVhbjtcblxuICAgIGdldCByYWlzZWQoKSB7IHJldHVybiB0aGlzLl9yYWlzZWQ7IH1cbiAgICBzZXQgcmFpc2VkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmFpc2VkID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbk91dGxpbmVkIHtcbiAgb3V0bGluZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbk91dGxpbmVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbk91dGxpbmVkPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9vdXRsaW5lZDogYm9vbGVhbjtcblxuICAgIGdldCBvdXRsaW5lZCgpIHsgcmV0dXJuIHRoaXMuX291dGxpbmVkOyB9XG4gICAgc2V0IG91dGxpbmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fb3V0bGluZWQgPSB0b0Jvb2xlYW4odmFsdWUpOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5FbGV2YXRpb24ge1xuICBlbGV2YXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluRWxldmF0aW9uPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkVsZXZhdGlvbj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZWxldmF0aW9uOiBudW1iZXI7XG5cbiAgICBnZXQgZWxldmF0aW9uKCkgeyByZXR1cm4gdGhpcy5fZWxldmF0aW9uOyB9XG4gICAgc2V0IGVsZXZhdGlvbih2YWx1ZTogYW55KSB7IHRoaXMuX2VsZXZhdGlvbiA9IHZhbHVlOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5TaGFkb3dDb2xvciB7XG4gIHNoYWRvd0NvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblNoYWRvd0NvbG9yPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhblNoYWRvd0NvbG9yPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9zaGFkb3dDb2xvcjogc3RyaW5nO1xuXG4gICAgZ2V0IHNoYWRvd0NvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zaGFkb3dDb2xvcjsgfVxuICAgIHNldCBzaGFkb3dDb2xvcih2YWx1ZTogc3RyaW5nKSB7IHRoaXMuX3NoYWRvd0NvbG9yID0gdmFsdWU7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgTmdab25lLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IG1peGluU3R5bGVVcGRhdGVyLCBtaXhpbkJnLCBtaXhpbkZsYXQsIG1peGluUmFpc2VkLCBtaXhpbk91dGxpbmVkLCBtaXhpbkVsZXZhdGlvbiwgbWl4aW5TaGFkb3dDb2xvciwgbWl4aW5EaXNhYmxlUmlwcGxlLCBtaXhpbkNvbG9yIH0gZnJvbSAnLi4vY29tbW9uL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIEx5UGFwZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlQYXBlck1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5GbGF0KFxuICAgIG1peGluQ29sb3IoXG4gICAgICBtaXhpblJhaXNlZChcbiAgICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgICBtaXhpbkVsZXZhdGlvbihcbiAgICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeVBhcGVyQmFzZSkpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgbHktcGFwZXIsIFtseS1wYXBlcl1gLFxuICBpbnB1dHM6IFtcbiAgICAnYmcnLFxuICAgICdmbGF0JyxcbiAgICAnY29sb3InLFxuICAgICdyYWlzZWQnLFxuICAgICdvdXRsaW5lZCcsXG4gICAgJ2VsZXZhdGlvbicsXG4gICAgJ3NoYWRvd0NvbG9yJyxcbiAgICAnZGlzYWJsZVJpcHBsZSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeVBhcGVyIGV4dGVuZHMgTHlQYXBlck1peGluQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgc3VwZXIodGhlbWUsIG5nWm9uZSk7XG4gICAgdGhpcy5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsO1xuICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IHRoaXMuX2VsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSh0aGlzLl9lbCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yZW1vdmVSaXBwbGVFdmVudHMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbd2l0aENsYXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlXaXRoQ2xhc3Mge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHt2YWx9JyBpcyBub3QgdmFsaWQgY2xhc3NOYW1lYCk7XG4gICAgfVxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlQYXBlciB9IGZyb20gJy4vcGFwZXInO1xuaW1wb3J0IHsgTHlXaXRoQ2xhc3MgfSBmcm9tICcuL3dpdGgtY2xhc3MuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlXaXRoQ2xhc3MsIEx5UGFwZXJdLFxuICBleHBvcnRzOiBbTHlXaXRoQ2xhc3MsIEx5UGFwZXJdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q29tbW9uTW9kdWxlIHsgfVxuIiwiZnVuY3Rpb24gaXNXaW5kb3cob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbTogYW55KSB7XHJcbiAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBleGFjdFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgZG9jRWxlbTogYW55LCB3aW46IGFueSxcclxuICAgICAgICBib3ggPSB7dG9wOiAwLCBsZWZ0OiAwfTtcclxuICAgIGNvbnN0IGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xyXG5cclxuICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcclxuICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG4gICAgd2luID0gZ2V0V2luZG93KGRvYyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxyXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RW50cnkodmFsdWU6IHN0cmluZyB8IG51bWJlciwgZGVmYXVsdFZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnQsIEluamVjdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMeUNvcmVTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvY29yZS1zdHlsZXMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50ICwgIE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIG92ZXJsYXlCYWNrZHJvcDoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5vdmVybGF5LFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICB9XG59KTtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBXaW5kb3dTY3JvbGxTZXJ2aWNlIHtcblxuICBwdWJsaWMgc2Nyb2xsJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpLnBpcGUoXG4gICAgICAgIGF1ZGl0VGltZSgyMDApLFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIH0pLFxuICAgICAgICBzaGFyZSgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcm9sbCQgPSBlbXB0eSgpO1xuICAgIH1cbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlDb250YWluZXIge1xuICBwcml2YXRlIF9jbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG4gIHByb3RlY3RlZCByZWFkb25seSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zID0gbmV3IFNldDxhbnk+KCk7XG4gIHByaXZhdGUgX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcjogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbHktb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgfVxuICB9XG4gIGdldCBjb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2FkZChpdGVtKSB7XG4gICAgdGhpcy5faXRlbXMuYWRkKGl0ZW0pO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgfVxuXG4gICAgLyoqXG4gICAqIFJlbW92ZSBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfcmVtb3ZlKGl0ZW0pIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgdGhpcy5faXRlbXMuZGVsZXRlKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdHlsZXMgZm9yIG92ZXJsYXkgY29udGFpbmVyXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXRlbXMuc2l6ZSkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lciA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBCQUNLRFJPUF9TVFlMRVMgPSAoe1xuICBiYWNrZHJvcDoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnXG4gIH1cbn0pO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1vdmVybGF5LWJhY2tkcm9wJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUJhY2tkcm9wIHtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoQkFDS0RST1BfU1RZTEVTKTtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuX292ZXJsYXlDb25maWcuZm5EZXN0cm95KCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIEBJbmplY3QoJ292ZXJsYXlDb25maWcnKSBwcml2YXRlIF9vdmVybGF5Q29uZmlnOiBhbnksXG4gICAgY29tbW9uU3R5bGVzOiBMeUNvcmVTdHlsZXNcbiAgKSB7XG4gICAgZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbW1vblN0eWxlcy5jbGFzc2VzLmZpbGwpO1xuICAgIGlmIChfb3ZlcmxheUNvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5iYWNrZHJvcCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgVGVtcGxhdGVSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld1JlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tU2VydmljZSB7XG4gIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG4gIHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXJcbiAgKSB7IH1cblxuICBhdHRhY2g8VD4oX2hvc3RWaWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBjb21wb25lbnQ6IGFueSwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBfaG9zdFZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlKTtcbiAgICAgIHZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZjtcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2gocm9vdE5vZGUgPT4gdGhpcy5hZGRDaGlsZChyb290Tm9kZSkpO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5vdmVybGF5Q29udGFpbmVyLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG5cbiAgZ2V0RG9tRWxlbWVudEZyb21Db21wb25lbnRSZWYoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pik6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgZGVzdHJveVJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+LCBkZWxheTogbnVtYmVyKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0sIGRlbGF5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21TZXJ2aWNlIH0gZnJvbSAnLi9kb20uc2VydmljZSc7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudENvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyKSB7XG4vLyAgIHJldHVybiBwYXJlbnRDb250YWluZXIgfHwgbmV3IEx5T3ZlcmxheUNvbnRhaW5lcigpO1xuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVIgPSB7XG4vLyAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gT3ZlcmxheUNvbnRhaW5lciBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuLy8gICBwcm92aWRlOiBMeU92ZXJsYXlDb250YWluZXIsXG4vLyAgIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMeU92ZXJsYXlDb250YWluZXJdXSxcbi8vICAgdXNlRmFjdG9yeTogTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWVxuLy8gfTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBEb21TZXJ2aWNlXG4gICAgLy8gTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeERvbU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgUmVuZGVyZXIyLCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGdldE5hdGl2ZUVsZW1lbnQgfSBmcm9tICcuLi9taW5pbWFsL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIEZvY3VzU3RhdHVzIHtcbiAgLyoqbW91c2UgYW5kL29yIHRvdWNoKi9cbiAgREVGQVVMVCA9ICdkZWZhdWx0JyxcbiAgLyoqIGtleWJvYXJkIGFuZC9vciBwcm9ncmFtKi9cbiAgS0VZQk9BUkQgPSAna2V5Ym9hcmQnLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlGb2N1c1N0YXRlXScsXG4gIGV4cG9ydEFzOiAnbHlGb2N1c1N0YXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGVEZXByZWNhdGVkIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RhdGU6IEZvY3VzU3RhdHVzO1xuICBzdGF0ZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBFbGVtZW50O1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBfc3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Rm9jdXNTdGF0dXM+KCk7XG4gIF9zdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBAT3V0cHV0KCkgbHlGb2N1c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNTdGF0dXM+KCk7XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNcbiAgICAgIC5zZXQoJ2ZvY3VzJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnYmx1cicsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uLmJpbmQodGhpcykpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjb25zdCBvbiA9IChldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9iOiBPYnNlcnZhYmxlPEZvY3VzU3RhdHVzPiA9IHRoaXMuX3N0YXRlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uID0gb2JcbiAgICAgIC8vIC5kZWJvdW5jZVRpbWUoMTExKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMTEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChlOiBGb2N1c1N0YXR1cykgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlID0gZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5seUZvY3VzQ2hhbmdlLmVtaXQoZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdGF0ZSgpIHtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdibHVyJykpIHtcbiAgICAgIHRoaXMuc3RhdGVNYXAuY2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCdtb3VzZWRvd24nKSB8fCB0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygndG91Y2hzdGFydCcpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLkRFRkFVTFQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5LRVlCT0FSRDtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGVTdWJqZWN0Lm5leHQoc3RhdGUpO1xuICB9XG5cbiAgb24oZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkge1xuICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIHNob3VsZFNldDogYm9vbGVhbikgPT4gc2hvdWxkU2V0ID8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSA6IHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgdG9nZ2xlQ2xhc3MoYGx5LWZvY3VzZWRgLCAhIXN0YXRlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBGb2N1c1N0YXR1cykge1xuICAgICAgaWYgKEZvY3VzU3RhdHVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gRm9jdXNTdGF0dXNba2V5XTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoYGx5LSR7Y2xhc3NOYW1lfS1mb2N1c2VkYCwgc3RhdGUgPT09IGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXNTdGF0ZUluZm8ge1xuICB1bmxpc3RlbjogKCkgPT4gdm9pZDtcbiAgc3ViamVjdDogU3ViamVjdDxGb2N1c1N0YXRlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c1N0YXRlIHtcbiAgZXZlbnQ6IEZvY3VzRXZlbnQ7XG4gIGJ5OiAna2V5Ym9hcmQnIHwgJ21vdXNlJztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZWxlbWVudE1hcCA9IG5ldyBNYXA8SFRNTEVsZW1lbnQsIEZvY3VzU3RhdGVJbmZvPigpO1xuICBwcml2YXRlIF9jdXJyZW50RXZlbnQ6ICdtb3VzZScgfCAna2V5Ym9hcmQnO1xuICBwcml2YXRlIF9yZW1vdmVHbG9iYWxMaXN0ZW5lcnM6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX2NvdW50ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxuXG4gIGxpc3RlbihlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBrZXlFbGVtZW50PzogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik6IE9ic2VydmFibGU8Rm9jdXNTdGF0ZT4gfCBudWxsIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgLy8gcmV0dXJuIG51bGwgaWYgaXQgaXMgbm90IGJyb3dzZXIgcGxhdGZvcm1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSBnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGNvbnN0IGtleSA9IGtleUVsZW1lbnQgJiYgZ2V0TmF0aXZlRWxlbWVudChrZXlFbGVtZW50KSB8fCBuYXRpdmVFbGVtZW50O1xuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnRNYXAuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50TWFwLmdldChrZXkpLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9jdXNTdGF0ZTogRm9jdXNTdGF0ZUluZm8gPSB7XG4gICAgICB1bmxpc3RlbjogbnVsbCxcbiAgICAgIHN1YmplY3Q6IG5ldyBTdWJqZWN0PEZvY3VzU3RhdGU+KClcbiAgICB9O1xuICAgIHRoaXMuX2luY3JlbWVudENvdW50KCk7XG4gICAgY29uc3QgZm9jdXNMaXN0ZW5lciA9IChldmVudDogRm9jdXNFdmVudCkgPT4gdGhpcy5fb24oZXZlbnQsIGZvY3VzU3RhdGUuc3ViamVjdCk7XG4gICAgY29uc3QgYmx1ckxpc3RlbmVyID0gKGV2ZW50OiBGb2N1c0V2ZW50KSA9PiB0aGlzLl9vbihldmVudCwgZm9jdXNTdGF0ZS5zdWJqZWN0KTtcblxuICAgIGZvY3VzU3RhdGUudW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICBuYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm9jdXNMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICBuYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVyTGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbiAgICB0aGlzLl9lbGVtZW50TWFwLnNldChrZXksIGZvY3VzU3RhdGUpO1xuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIG5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmb2N1c0xpc3RlbmVyLCB0cnVlKTtcbiAgICAgIG5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXJMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvY3VzU3RhdGUuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHVubGlzdGVuKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmb2N1c1N0YXRlSW5mbyA9IHRoaXMuX2VsZW1lbnRNYXAuZ2V0KGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudCkpO1xuICAgIGlmIChmb2N1c1N0YXRlSW5mbykge1xuICAgICAgZm9jdXNTdGF0ZUluZm8udW5saXN0ZW4oKTtcbiAgICAgIHRoaXMuX2RlY3JlbWVudENvdW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb24oZXZlbnQ6IEZvY3VzRXZlbnQsIHN1YmplY3Q6IFN1YmplY3Q8Rm9jdXNTdGF0ZT4pIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHN1YmplY3QubmV4dCh7XG4gICAgICBldmVudCxcbiAgICAgIGJ5OiB0aGlzLl9jdXJyZW50RXZlbnQgfHwgJ2tleWJvYXJkJ1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEdsb2JhbExpc3RlbmVycygpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJPcHRpb25zID0gc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnNcbiAgICA/IHtcbiAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICBjYXB0dXJlOiB0cnVlXG4gICAgfSA6IGZhbHNlO1xuXG4gICAgY29uc3QgZG9jdW1lbnRLZXlkb3duTGlzdGVuZXIgPSAoKSA9PiB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY3VycmVudEV2ZW50ID0gJ2tleWJvYXJkJyk7XG4gICAgY29uc3QgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciA9ICgpID0+IHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jdXJyZW50RXZlbnQgPSAnbW91c2UnKTtcblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG9jdW1lbnRLZXlkb3duTGlzdGVuZXIsIGV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvY3VtZW50TW91c2Vkb3duTGlzdGVuZXIsIGV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICB9KTtcbiAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG9jdW1lbnRLZXlkb3duTGlzdGVuZXIsIGV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvY3VtZW50TW91c2Vkb3duTGlzdGVuZXIsIGV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5jcmVtZW50Q291bnQoKSB7XG4gICAgaWYgKCsrdGhpcy5fY291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMuX2FkZEdsb2JhbExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlY3JlbWVudENvdW50KCkge1xuICAgIGlmICghLS10aGlzLl9jb3VudCkge1xuICAgICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZWxlbWVudE1hcC5mb3JFYWNoKChfLCBlbGVtZW50KSA9PiB0aGlzLnVubGlzdGVuKGVsZW1lbnQpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUZvY3VzU3RhdGVEZXByZWNhdGVkIH0gZnJvbSAnLi9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5Rm9jdXNTdGF0ZURlcHJlY2F0ZWRdLFxuICBleHBvcnRzOiBbTHlGb2N1c1N0YXRlRGVwcmVjYXRlZF1cbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGNvbnN0IEFVSV9WRVJTSU9OID0gJzEuOC42JztcbmV4cG9ydCBjb25zdCBBVUlfTEFTVF9VUERBVEUgPSAnMjAxOC0xMS0yNFQwNjo0NzozMi40MTZaJztcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBIYW1tZXJPcHRpb25zLCBIYW1tZXJJbnN0YW5jZSB9IGZyb20gJy4vZ2VzdHVyZS1hbm5vdGF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBMWV9IQU1NRVJfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxIYW1tZXJPcHRpb25zPignTFlfSEFNTUVSX09QVElPTlMnKTtcblxuY29uc3QgSEFNTUVSX0dFU1RVUkVTX0VWRU5UUyA9IFtcbiAgJ3NsaWRlJyxcbiAgJ3NsaWRlc3RhcnQnLFxuICAnc2xpZGVlbmQnLFxuICAnc2xpZGVyaWdodCcsXG4gICdzbGlkZWxlZnQnXG5dO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIGV2ZW50czogc3RyaW5nW10gPSBIQU1NRVJfR0VTVFVSRVNfRVZFTlRTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX0hBTU1FUl9PUFRJT05TKSBwcml2YXRlIF9oYW1tZXJPcHRpb25zOiBIYW1tZXJPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYnVpbGRIYW1tZXIoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIYW1tZXJJbnN0YW5jZSB7XG4gICAgY29uc3QgaGFtbWVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyAod2luZG93IGFzIGFueSkuSGFtbWVyIDogbnVsbDtcbiAgICBjb25zdCBtYyA9IG5ldyBoYW1tZXIoZWxlbWVudCwgdGhpcy5faGFtbWVyT3B0aW9ucyB8fCB1bmRlZmluZWQpO1xuXG4gICAgY29uc3QgcGFuID0gbmV3IGhhbW1lci5QYW4oKTtcbiAgICBjb25zdCBzd2lwZSA9IG5ldyBoYW1tZXIuU3dpcGUoKTtcbiAgICBjb25zdCBzbGlkZSA9IHRoaXMuX2NyZWF0ZVJlY29nbml6ZXIocGFuLCB7ZXZlbnQ6ICdzbGlkZScsIHRocmVzaG9sZDogMH0sIHN3aXBlKTtcblxuICAgIHBhbi5yZWNvZ25pemVXaXRoKHN3aXBlKTtcblxuICAgIC8vIEFkZCBjdXN0b21pemVkIGdlc3R1cmVzIHRvIEhhbW1lciBtYW5hZ2VyXG4gICAgbWMuYWRkKFtzd2lwZSwgcGFuLCBzbGlkZV0pO1xuICAgIHJldHVybiBtYztcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgbmV3IHJlY29nbml6ZXIsIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBkZWZhdWx0IHJlY29nbml6ZXJzIG9mIEhhbW1lckpTICovXG4gIHByaXZhdGUgX2NyZWF0ZVJlY29nbml6ZXIoYmFzZTogYW55LCBvcHRpb25zOiBhbnksIC4uLmluaGVyaXRhbmNlczogYW55W10pIHtcbiAgICBjb25zdCByZWNvZ25pemVyID0gbmV3IChiYXNlLmNvbnN0cnVjdG9yKShvcHRpb25zKTtcblxuICAgIGluaGVyaXRhbmNlcy5wdXNoKGJhc2UpO1xuICAgIGluaGVyaXRhbmNlcy5mb3JFYWNoKGl0ZW0gPT4gcmVjb2duaXplci5yZWNvZ25pemVXaXRoKGl0ZW0pKTtcblxuICAgIHJldHVybiByZWNvZ25pemVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBbTHlUaGVtZTJdLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVbmRlZmluZWQge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5leHBvcnQgY29uc3QgVW5kZWZpbmVkVmFsdWUgPSBuZXcgVW5kZWZpbmVkKCk7XG4iLCJleHBvcnQgZW51bSBJbnZlcnRNZWRpYVF1ZXJ5IHtcbiAgTm8sXG4gIFllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWVkaWFRdWVyeShtZWRpYTogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5OiBJbnZlcnRNZWRpYVF1ZXJ5ID0gSW52ZXJ0TWVkaWFRdWVyeS5Obyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgaWYgKG1lZGlhICYmIGludmVydE1lZGlhUXVlcnkgPT09IEludmVydE1lZGlhUXVlcnkuWWVzKSB7XG4gICAgY29uc3QgbmV3VmFsID0gbWVkaWEuc3BsaXQoJywnKS5tYXAoXyA9PiBgbm90ICR7X31gKTtcbiAgICByZXR1cm4gbmV3VmFsO1xuICB9XG4gIHJldHVybiBtZWRpYTtcbn1cbiIsImltcG9ydCB7IFRlbXBsYXRlUmVmLCBFbWJlZGRlZFZpZXdSZWYsIEluamVjdGFibGUsIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yLCBDb21wb25lbnRSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciwgTHlPdmVybGF5QmFja2Ryb3AsIFdpbmRvd1Njcm9sbFNlcnZpY2UgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbnRlcmZhY2UgT3ZlcmxheUNvbmZpZyB7XG4gIHN0eWxlczogT2JqZWN0O1xuICBjbGFzc2VzPzogc3RyaW5nW107XG4gIGJhY2tkcm9wPzogYm9vbGVhbjtcbiAgZm5EZXN0cm95PzogKC4uLmFyZykgPT4gdm9pZDtcbiAgaG9zdD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgLyoqIERldGFjaGVzIGEgdmlldyBmcm9tIGRpcnR5IGNoZWNraW5nIGFnYWluIG9mIEFwcGxpY2F0aW9uUmVmLiAgKi9cbiAgZGV0YWNoOiAoKSA9PiB2b2lkO1xuXG4gIC8qKiBSZW1vdmUgZWxlbWVudCBvZiBET00gKi9cbiAgcmVtb3ZlOiAoKSA9PiB2b2lkO1xuXG4gIC8qKiBEZXRhY2ggJiByZW1vdmUgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcblxuICBjb250YWluZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcblxufVxuY2xhc3MgQ3JlYXRlRnJvbVRlbXBsYXRlUmVmIGltcGxlbWVudHMgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gIHByaXZhdGUgX3ZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBwcml2YXRlIF9lbDogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2NvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcml2YXRlIF9jb21wUmVmT3ZlcmxheUJhY2tkcm9wOiBDb21wb25lbnRSZWY8YW55PjtcbiAgd2luZG93U2Nyb2xsU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIGdldCBjb250YWluZXJFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgX2NvbnRleHQ6IGFueSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgd2luZG93U2Nyb2xsOiBXaW5kb3dTY3JvbGxTZXJ2aWNlLFxuICAgIGNvbmZpZz86IE92ZXJsYXlDb25maWdcbiAgKSB7XG4gICAgLy8gdGhpcy5fdmlld1JlZiA9IF90ZW1wbGF0ZVJlZi5jcmVhdGVFbWJlZGRlZFZpZXcoX2NvbnRleHQpO1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gdGhpcy5fdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChyb290Tm9kZSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQocm9vdE5vZGUpKTtcbiAgICBjb25zdCBfX3N0eWxlcyA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgICAgIC4uLmNvbmZpZy5zdHlsZXNcbiAgICB9O1xuICAgIGNvbnN0IG5ld0luamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ292ZXJsYXlDb25maWcnLFxuICAgICAgICB1c2VWYWx1ZTogPE92ZXJsYXlDb25maWc+e1xuICAgICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXN0cm95LmJpbmQodGhpcyksXG4gICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgIHN0eWxlczogX19zdHlsZXMsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLCB0aGlzLl9pbmplY3Rvcik7XG5cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyhfX3N0eWxlcyk7XG4gICAgaWYgKGNvbmZpZy5ob3N0KSB7XG4gICAgICB0aGlzLndpbmRvd1Njcm9sbFN1YiA9IHdpbmRvd1Njcm9sbC5zY3JvbGwkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBjb25maWcuaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHJlY3QudG9wICE9PSBfX3N0eWxlcy50b3AgfHwgcmVjdC5sZWZ0ICE9PSBfX3N0eWxlcy5sZWZ0KSB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMobmV3U3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzO1xuICAgIGlmIChjbGFzc2VzICYmIGNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4gKHRoaXMuX2VsIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KEx5T3ZlcmxheUJhY2tkcm9wLCBuZXdJbmplY3Rvcik7XG4gICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQoYmFja2Ryb3BFbCk7XG4gICAgdGhpcy5fYXBwZW5kQ29tcG9uZW50VG9Cb2R5KF90ZW1wbGF0ZVJlZiwgX2NvbnRleHQsIHRoaXMuX2luamVjdG9yKTtcblxuICB9XG5cbiAgdXBkYXRlU3R5bGVzKF9fc3R5bGVzKSB7XG4gICAgLyoqIEFwcGx5IHN0eWxlcyAqL1xuICAgIC8qKiBzZXQgc3R5bGVzICovXG4gICAgZm9yIChjb25zdCBrZXkgaW4gX19zdHlsZXMpIHtcbiAgICAgIGlmIChfX3N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlVmFsID0gX19zdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHN0eWxlVmFsKSB7XG4gICAgICAgICAgdGhpcy5fZWwuc3R5bGVba2V5XSA9IHR5cGVvZiBfX3N0eWxlc1trZXldID09PSAnbnVtYmVyJyA/IGAke3N0eWxlVmFsfXB4YCA6IHN0eWxlVmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ29tcG9uZW50VG9Cb2R5KHR5cGU6IFRlbXBsYXRlUmVmPGFueT4gfCBUeXBlPGFueT4sIGNvbnRleHQsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIC8vIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy5fdmlld1JlZiA9IHR5cGUuY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRleHQgfHwge30pO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIC8vIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChfID0+IHRoaXMuX2VsLmFwcGVuZENoaWxkKF8pKTtcblxuICAgICAgLy8gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb21wUmVmID0gdGhpcy5nZW5lcmF0ZUNvbXBvbmVudCh0eXBlLCBpbmplY3Rvcik7XG4gICAgICB0aGlzLl9lbCA9IHRoaXMuX2NvbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb21wb25lbnQodHlwZTogVHlwZTxhbnk+LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpO1xuICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX3ZpZXdSZWYpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY29tcFJlZikge1xuICAgICAgdGhpcy5fY29tcFJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmRlc3Ryb3koKTtcbiAgICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUoYmFja2Ryb3BFbCk7XG4gICAgfVxuICAgIHRoaXMud2luZG93U2Nyb2xsU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF93aW5kb3dTY3JvbGw6IFdpbmRvd1Njcm9sbFNlcnZpY2VcbiAgKSB7IH1cblxuICBjcmVhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIGNvbnRleHQ/OiBhbnksIGNvbmZpZz86IE92ZXJsYXlDb25maWcpOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgICByZXR1cm4gbmV3IENyZWF0ZUZyb21UZW1wbGF0ZVJlZih0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX2FwcFJlZiwgdGVtcGxhdGUsIHRoaXMuX292ZXJsYXlDb250YWluZXIsIGNvbnRleHQsIHRoaXMuX2luamVjdG9yLCB0aGlzLl93aW5kb3dTY3JvbGwsIGNvbmZpZyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeU92ZXJsYXlCYWNrZHJvcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0x5T3ZlcmxheUJhY2tkcm9wXVxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCA9IHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlXG59O1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeSB7XG4gIGNyZWF0ZShjYWxsYmFjazogTXV0YXRpb25DYWxsYmFjayk6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBFbGVtZW50T2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeTogTXV0YXRpb25PYnNlcnZlckZhY3RvcnlcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMuZGVzdHJveShlbGVtZW50KSk7XG4gIH1cblxuICBvYnNlcnZlKGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4sIGZuOiBNdXRhdGlvbkNhbGxiYWNrLCBvcHRpb25zPzogTXV0YXRpb25PYnNlcnZlckluaXQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5fbXV0YXRpb25PYnNlcnZlckZhY3RvcnkuY3JlYXRlKGZuKTtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9wdGlvbnMgfHwgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IE9ic2VydmVyXG4gICAqL1xuICBkZXN0cm95KGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkluamVjdGFibGUiLCJPcHRpb25hbCIsIkluamVjdCIsIlJlbmRlcmVyRmFjdG9yeTIiLCJET0NVTUVOVCIsImlzRGV2TW9kZSIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIiwiRWxlbWVudFJlZiIsInRzbGliXzEuX19leHRlbmRzIiwiTmdab25lIiwic3R5bGVzIiwiZnJvbUV2ZW50IiwiYXVkaXRUaW1lIiwibWFwIiwic2hhcmUiLCJlbXB0eSIsIkNvbXBvbmVudCIsIkhvc3RMaXN0ZW5lciIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIkNvbW1vbk1vZHVsZSIsIlN1YmplY3QiLCJFdmVudEVtaXR0ZXIiLCJkZWJvdW5jZVRpbWUiLCJSZW5kZXJlcjIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIk91dHB1dCIsIkhhbW1lckdlc3R1cmVDb25maWciLCJTdWJzY3JpcHRpb24iLCJJbmplY3RvciIsIlRlbXBsYXRlUmVmIiwiQXBwbGljYXRpb25SZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsYUFBZ0IsY0FBYyxDQUFDLFFBQVE7O1lBQy9CLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztZQUN2QyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7WUFDdkMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7O1lBQ3ZDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUk7UUFDdEQsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMxQyxDQUFDOzs7Ozs7QUNORDtRQUNNLE1BQU0sR0FBRyxPQUFPOztRQUVoQixxQkFBcUIsR0FBRyxHQUFHOztRQUMzQix3QkFBd0IsR0FBRyxJQUFJOztRQUMvQiwwQkFBMEIsR0FBRyxJQUFJOztBQUN2QyxRQUFhLE9BQU8sR0FBRztRQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFF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