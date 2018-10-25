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
                if (val === 'end') {
                    return this.direction === 'rtl' ? 'left' : 'right';
                }
                else {
                    return this.direction === 'rtl' ? 'right' : 'left';
                }
            };
        return LyStyleUtils;
    }());
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
                if (i0.isDevMode() && void 0 === priority && typeof id === 'string') {
                    console.warn("the value `" + id + "` is no longer necessary for addStyleSheet, this will be an error in the next release.");
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
                        css = groupStyleToString(styleMap, styles(this.config), themeName, null, type, media);
                        if (!forChangeTheme) {
                            styleMap.css[themeName] = css;
                        }
                    }
                    else {
                        /** create a new id for style that does not <-<require>-> changes */
                        css = groupStyleToString(styleMap, styles, themeName, /** @type {?} */ (newId), type, media);
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
     * @param {?=} media
     * @return {?}
     */
    function groupStyleToString(styleMap, styles, themeName, id, typeStyle, media) {
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
                var rules = styleToString(id, styles, /** @type {?} */ (className));
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
                    var style = styleToString(key, /** @type {?} */ (value), currentClassName);
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
     * @param {?} currentKey
     * @param {?=} parentKey
     * @return {?}
     */
    function styleToString(key, ob, currentKey, parentKey) {
        /** @type {?} */
        var content = '';
        /** @type {?} */
        var subContent = '';
        /** @type {?} */
        var keyAndValue = '';
        /** @type {?} */
        var newKey;
        if (parentKey && currentKey.indexOf('&') !== -1) {
            newKey = currentKey.replace(/&/g, parentKey);
        }
        else if (key === '@global') {
            newKey = key;
        }
        else if (parentKey && currentKey.indexOf('@media') === 0) {
            newKey = "" + currentKey;
        }
        else if (parentKey) {
            newKey = parentKey + " " + currentKey;
        }
        else {
            newKey = "." + currentKey;
        }
        for (var styleKey in ob) {
            if (ob.hasOwnProperty(styleKey)) {
                /** @type {?} */
                var element = ob[styleKey];
                if (typeof element === 'object') {
                    subContent += styleToString(key, /** @type {?} */ (element), styleKey, newKey);
                }
                else {
                    /** @type {?} */
                    var newStyleKey = toHyphenCaseCache(styleKey);
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
     * @deprecated
     * @return {?}
     */
    function IsBoolean() {
        return function (target, key) {
            /** @type {?} */
            var definition = Object.getOwnPropertyDescriptor(target, key);
            if (definition) {
                Object.defineProperty(target, key, {
                    get: definition.get,
                    set: function (newValue) {
                        definition.set(toBoolean(newValue));
                    },
                    enumerable: true,
                    configurable: true
                });
            }
            else {
                Object.defineProperty(target, key, {
                    get: function () {
                        return this['__' + key];
                    },
                    set: function (newValue) {
                        this['__' + key] = toBoolean(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
            }
        };
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
                        selector: "\n            [bg],\n            [color],\n            [raised],\n            [raised][shadowColor],\n            [ly-button][outlined],\n            [elevation],\n            [elevation][shadowColor],\n            [disabled],\n            ly-card,\n            ly-toolbar\n            "
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
    var LyFocusState = /** @class */ (function () {
        function LyFocusState(elementRef, _ngZone, _renderer, _cd) {
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
        LyFocusState.prototype._updateState = /**
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
        LyFocusState.prototype.on = /**
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
        LyFocusState.prototype._updateClass = /**
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
        LyFocusState.prototype.setTriggerElement = /**
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
        LyFocusState.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (Platform.isBrowser) {
                    this._stateSubscription.unsubscribe();
                    this.setTriggerElement(null);
                }
            };
        LyFocusState.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[lyFocusState]',
                        exportAs: 'lyFocusState'
                    },] }
        ];
        /** @nocollapse */
        LyFocusState.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.NgZone },
                { type: i0.Renderer2 },
                { type: i0.ChangeDetectorRef }
            ];
        };
        LyFocusState.propDecorators = {
            lyFocusChange: [{ type: i0.Output }]
        };
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
                        declarations: [LyFocusState],
                        exports: [LyFocusState]
                    },] }
        ];
        return LyFocusStateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var AUI_VERSION = '1.7.5';
    /** @type {?} */
    var AUI_LAST_UPDATE = '2018-10-25T19:19:03.220Z';

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
    exports.LyCommonModule = LyCommonModule;
    exports.NgTranscludeDirective = NgTranscludeDirective;
    exports.NgTranscludeModule = NgTranscludeModule;
    exports.exactPosition = exactPosition;
    exports.toBoolean = toBoolean;
    exports.IsBoolean = IsBoolean;
    exports.defaultEntry = defaultEntry;
    exports.DomService = DomService;
    exports.LxDomModule = LxDomModule;
    exports.LyFocusStateModule = LyFocusStateModule;
    exports.FocusStatus = FocusStatus;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvc3JjL3BhbGV0dGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc2hhZG93LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2FseWxlLWNvbmZpZy1zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BsYXRmb3JtL3BsYXRmb3JtLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLWNvbmZpZy50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BhbHlsZS91aS9zcmMvc3R5bGUtdXRpbHMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lMi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvY29tbW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZWwvb2Zmc2V0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvaXMtYm9vbGVhbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2RlZmF1bHQtZW50cnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS93aXRoLWNsYXNzLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlcy9jb3JlLXN0eWxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS1jb250YWluZXIudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL2RvbS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9seC1kb20ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2ZvY3VzLXN0YXRlL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdmVyc2lvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9nZXN0dXJlL2dlc3R1cmUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy91bmRlZmluZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5Lm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbXV0YXRpb24tb2JzZXJ2ZXItZmFjdG9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJhc3RZSVEoaGV4Y29sb3IpIHtcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoNCwgMiksIDE2KTtcbiAgY29uc3QgeWlxID0gKChyICogMjk5KSArIChnICogNTg3KSArIChiICogMTE0KSkgLyAxMDAwO1xuICByZXR1cm4gKHlpcSA+PSAxMjgpID8gJ2JsYWNrJyA6ICd3aGl0ZSc7XG59XG4iLCJpbXBvcnQgKiBhcyBfY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5jb25zdCBjaHJvbWEgPSBfY2hyb21hO1xuXG5jb25zdCBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG5jb25zdCBzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkgPSAwLjE0O1xuY29uc3Qgc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkgPSAwLjEyO1xuZXhwb3J0IGNvbnN0IFNoYWRvd3MgPSBbXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDEsIDMsIDAsIDAsIDEsIDEsIDAsIDAsIDIsIDEsIC0xXSxcbiAgWzAsIDEsIDUsIDAsIDAsIDIsIDIsIDAsIDAsIDMsIDEsIC0yXSxcbiAgWzAsIDEsIDgsIDAsIDAsIDMsIDQsIDAsIDAsIDMsIDMsIC0yXSxcbiAgWzAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMF0sXG4gIFswLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxXSxcbiAgWzAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDJdLFxuICBbMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMl0sXG4gIFswLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgM10sXG4gIFswLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgM10sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNF0sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNF0sXG4gIFswLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNF0sXG4gIFswLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNV0sXG4gIFswLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDVdLFxuICBbMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1XSxcbiAgWzAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNl0sXG4gIFswLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDZdLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgN10sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3XSxcbiAgWzAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDddLFxuICBbMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOF0sXG4gIFswLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4XVxuXTtcbmV4cG9ydCBmdW5jdGlvbiBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZChlbGV2YXRpb246IG51bWJlciB8IHN0cmluZyA9IDIsIGNvbG9yID0gJyMwMDAnKSB7XG4gIGNvbnN0IENvbG9yID0gY2hyb21hKGNvbG9yKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYGJveC1zaGFkb3c6JHtlWzBdfXB4ICR7ZVsxXX1weCAke2VbMl19cHggJHtlWzNdfXB4ICR7Y29sb3JzWzBdfSwke2VbNF19cHggJHtlWzVdfXB4ICR7ZVs2XX1weCAke2VbN119cHggJHtjb2xvcnNbMV19LCR7ZVs4XX1weCAke2VbOV19cHggJHtlWzEwXX1weCAke2VbMTFdfXB4ICR7Y29sb3JzWzJdfTtgO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFkb3dCdWlsZGVyKGVsZXZhdGlvbjogbnVtYmVyIHwgc3RyaW5nLCBjb2xvcj86IHN0cmluZykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvciB8fCAnIzAwMCcpLmRhcmtlbigpLnNhdHVyYXRlKDIpO1xuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5VW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5KS5jc3MoKVxuICBdO1xuICBjb25zdCBlID0gU2hhZG93c1tlbGV2YXRpb25dO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgJHtlWzBdfXB4ICR7ZVsxXX1weCAke2VbMl19cHggJHtlWzNdfXB4ICR7Y29sb3JzWzBdfSwke2VbNF19cHggJHtlWzVdfXB4ICR7ZVs2XX1weCAke2VbN119cHggJHtjb2xvcnNbMV19LCR7ZVs4XX1weCAke2VbOV19cHggJHtlWzEwXX1weCAke2VbMTFdfXB4ICR7Y29sb3JzWzJdfTtgO1xuXG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRIRU1FX1ZBUklBQkxFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYWxldHRlVmFyaWFibGVzPignbHkudGhlbWUudmFyaWFibGVzJyk7XHJcbmV4cG9ydCBjb25zdCBJU19DT1JFX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPHRydWU+KCdseS5pcy5yb290Jyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHQge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4vLyBleHBvcnQgY2xhc3MgPGRlcHJlY2F0ZWQ+VGhlbWVWYXJpYWJsZXMge1xyXG4vLyAgIC8qKiBUaGVtZSBuYW1lICovXHJcbi8vICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgIHByaW1hcnk/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4vLyAgIGFjY2VudD86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbi8vICAgLyoqIHdhcm4gb3IgZXJyb3IgY29sb3IgKi9cclxuLy8gICB3YXJuPzogUGFsZXR0ZVZhcmlhYmxlcztcclxuLy8gICBzY2hlbWU/OiBzdHJpbmc7XHJcbi8vICAgY29sb3JTY2hlbWVzPzoge1xyXG4vLyAgICAgW2tleTogc3RyaW5nXTogQ29sb3JTY2hlbWVcclxuLy8gICB9O1xyXG4vLyAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZVZhcmlhYmxlcyB7XHJcbiAgZGVmYXVsdD86IHN0cmluZztcclxuICBjb250cmFzdD86IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JTY2hlbWUge1xyXG4gIGJhY2tncm91bmQ/OiB7XHJcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxyXG4gICAgcGFwZXI/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICB0ZXh0Pzoge1xyXG4gICAgZGVmYXVsdDogc3RyaW5nLFxyXG4gICAgcHJpbWFyeT86IHN0cmluZyxcclxuICAgIHNlY29uZGFyeT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogc3RyaW5nLFxyXG4gICAgaGludD86IHN0cmluZyxcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICB9O1xyXG4gIGRpdmlkZXI/OiBzdHJpbmc7XHJcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXHJcbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XHJcbiAgYmFyPzogc3RyaW5nO1xyXG4gIGlucHV0Pzoge1xyXG4gICAgbGFiZWw/OiBzdHJpbmcsXHJcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcclxuICB9O1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4iLCJcclxuLy8gV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBzdXBwb3J0cyB0aGUgVjggQnJlYWsgSXRlcmF0b3IuIFRoZSBWOCBjaGVja1xyXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cclxuY29uc3QgaGFzVjhCcmVha0l0ZXJhdG9yID0gKHR5cGVvZihJbnRsKSAhPT0gJ3VuZGVmaW5lZCcgJiYgKEludGwgYXMgYW55KS52OEJyZWFrSXRlcmF0b3IpO1xyXG4vKipcclxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcclxuICogY2hlY2tpbmcgYnJvd3Nlci1zcGVjaWZpYyBnbG9iYWwgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGlzQnJvd3NlcjogYm9vbGVhbiA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudDtcclxuICAvKiogTGF5b3V0IEVuZ2luZXMgKi9cclxuICBFREdFID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZWRnZSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gIFRSSURFTlQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gRWRnZUhUTUwgYW5kIFRyaWRlbnQgbW9jayBCbGluayBzcGVjaWZpYyB0aGluZ3MgYW5kIG5lZWQgdG8gYmUgZXhjbHVkZWQgZnJvbSB0aGlzIGNoZWNrLlxyXG4gIEJMSU5LID0gUGxhdGZvcm0uaXNCcm93c2VyICYmXHJcbiAgICAgICghISgod2luZG93IGFzIGFueSkuY2hyb21lIHx8IGhhc1Y4QnJlYWtJdGVyYXRvcikgJiYgISFDU1MgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UKTtcclxuXHJcbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXHJcbiAgLy8gZW5zdXJlIHRoYXQgV2Via2l0IHJ1bnMgc3RhbmRhbG9uZSBhbmQgaXMgbm90IHVzZWQgYXMgYW5vdGhlciBlbmdpbmUncyBiYXNlLlxyXG4gIFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxyXG4gICAgICAvQXBwbGVXZWJLaXQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLkJMSU5LICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xyXG4gIElPUyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhKHdpbmRvdyBhcyBhbnkpLk1TU3RyZWFtO1xyXG5cclxuICAvLyBJdCdzIGRpZmZpY3VsdCB0byBkZXRlY3QgdGhlIHBsYWluIEdlY2tvIGVuZ2luZSwgYmVjYXVzZSBtb3N0IG9mIHRoZSBicm93c2VycyBpZGVudGlmeVxyXG4gIC8vIHRoZW0gc2VsZiBhcyBHZWNrby1saWtlIGJyb3dzZXJzIGFuZCBtb2RpZnkgdGhlIHVzZXJBZ2VudCdzIGFjY29yZGluZyB0byB0aGF0LlxyXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxyXG4gIC8vIGluc3RlYWQgb2YgaGF2aW5nIGFuIHVuc3RhYmxlIGNoZWNrIGZvciBHZWNrby5cclxuICBGSVJFRk9YID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gVHJpZGVudCBvbiBtb2JpbGUgYWRkcyB0aGUgYW5kcm9pZCBwbGF0Zm9ybSB0byB0aGUgdXNlckFnZW50IHRvIHRyaWNrIGRldGVjdGlvbnMuXHJcbiAgQU5EUk9JRCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvYW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLy8gU2FmYXJpIGJyb3dzZXJzIHdpbGwgaW5jbHVkZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlaXIgdXNlckFnZW50LiBTb21lIGJyb3dzZXJzIG1heSBmYWtlXHJcbiAgLy8gdGhpcyBhbmQganVzdCBwbGFjZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlIHVzZXJBZ2VudC4gVG8gYmUgbW9yZSBzYWZlIGFib3V0IFNhZmFyaSBldmVyeVxyXG4gIC8vIFNhZmFyaSBicm93c2VyIHNob3VsZCBhbHNvIHVzZSBXZWJraXQgYXMgaXRzIGxheW91dCBlbmdpbmUuXHJcbiAgU0FGQVJJID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9zYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIHRoaXMuV0VCS0lUO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVN0eWxlVXRpbHMgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5pbXBvcnQgeyBTdHlsZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYXJ0aWFsVGhlbWVWYXJpYWJsZXM+KCdseS50aGVtZS5nbG9iYWwudmFyaWFibGVzJyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHlfdGhlbWVfY29uZmlnJyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUVfTkFNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdseS50aGVtZS5uYW1lJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaW1hcnk6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGFjY2VudDogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgd2FybjogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYmFja2dyb3VuZDoge1xuICAgIC8qKiBzZWNvbmRhcnkgKi9cbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcixcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICB0ZXJ0aWFyeTogc3RyaW5nLFxuICAgIGJhc2U6IHN0cmluZ1xuICB9O1xuICB0ZXh0OiB7XG4gICAgZGVmYXVsdDogc3RyaW5nLFxuICAgIHByaW1hcnk6IHN0cmluZyxcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICBkaXNhYmxlZDogc3RyaW5nLFxuICAgIGhpbnQ6IHN0cmluZ1xuICB9O1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgaHRtbEZvbnRTaXplOiBudW1iZXIsXG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgfTtcbiAgLyoqIGNvbG9yIGZvciBkaXZpZGVyICovXG4gIGRpdmlkZXI6IHN0cmluZztcbiAgc2hhZG93OiBzdHJpbmc7XG4gIC8qKiBAZGVwcmVjYXRlZCB1c2Ugc2hhZG93IGluc3RlYWQgKi9cbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XG4gIGJ1dHRvbjoge1xuICAgIGRpc2FibGVkOiBzdHJpbmc7XG4gIH07XG4gIHJhZGlvOiB7XG4gICAgLyoqIGNvbG9yIGZvciByYWRpbzpvdXRlckNpcmNsZSAqL1xuICAgIG91dGVyQ2lyY2xlPzogc3RyaW5nO1xuICAgIC8qKiBAZGVwcmVjYXRlZCB1c2Ugb3V0ZXJDaXJjbGUgaW5zdGVhZCAqL1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU/OiBzdHJpbmc7XG4gIH07XG4gIG1lbnU6IHtcbiAgICBiZzogc3RyaW5nO1xuICB9O1xuICBkcmF3ZXI6IHtcbiAgICAvKiogY29sb3IgZm9yIGRyYXdlcjpiYWNrZHJvcCAqL1xuICAgIGJhY2tkcm9wOiBzdHJpbmdcbiAgfTtcbiAgaW5wdXQ6IHtcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICBsYWJlbD86IHN0cmluZ1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHVuZGVybGluZT86IHN0cmluZ1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHdpdGhDb2xvcj86IHN0cmluZ1xuICAgIGJvcmRlckNvbG9yOiBzdHJpbmdcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBbYXBwZWFyYW5jZU5hbWU6IHN0cmluZ106IHtcbiAgICAgICAgY29udGFpbmVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmllbGRzZXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmaWVsZHNldEhvdmVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmllbGRzZXRGb2N1c2VkPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgY29udGFpbmVyRm9jdXNlZD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGxhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcGxhY2Vob2xkZXI/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBpbnB1dD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZsb2F0aW5nTGFiZWw/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBwcmVmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBpbmZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHN1ZmZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICB9XG4gICAgfVxuICB9O1xuICBpY29uQnV0dG9uOiB7XG4gICAgc2l6ZTogc3RyaW5nXG4gIH07XG4gIGljb246IHtcbiAgICBmb250U2l6ZTogc3RyaW5nXG4gIH07XG4gIHpJbmRleDoge1xuICAgIHRvb2xiYXI6IG51bWJlclxuICAgIGRyYXdlcjogbnVtYmVyXG4gICAgb3ZlcmxheTogbnVtYmVyXG4gICAgW2tleTogc3RyaW5nXTogbnVtYmVyXG4gIH07XG4gIGRpcmVjdGlvbj86ICdsdHInIHwgJ3J0bCc7XG4gIGFuaW1hdGlvbnM6IHtcbiAgICBjdXJ2ZXM6IHtcbiAgICAgIHN0YW5kYXJkOiBzdHJpbmdcbiAgICAgIGRlY2VsZXJhdGlvbjogc3RyaW5nXG4gICAgICBhY2NlbGVyYXRpb246IHN0cmluZ1xuICAgICAgc2hhcnA6IHN0cmluZ1xuICAgIH0sXG4gICAgZHVyYXRpb25zOiB7XG4gICAgICBjb21wbGV4OiBudW1iZXJcbiAgICAgIGVudGVyaW5nOiBudW1iZXJcbiAgICAgIGV4aXRpbmc6IG51bWJlclxuICAgIH1cbiAgfTtcbiAgcmlwcGxlOiBJUmlwcGxlVmFyaWFibGVzO1xufVxuXG5leHBvcnQgdHlwZSBUaGVtZVZhcmlhYmxlcyA9IEx5U3R5bGVVdGlscyAmIFRoZW1lQ29uZmlnO1xuZXhwb3J0IHR5cGUgUGFydGlhbFRoZW1lVmFyaWFibGVzID0gUGFydGlhbDxUaGVtZVZhcmlhYmxlcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFZhbCB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZUNvbG9yIHtcbiAgY29udHJhc3Q/OiBzdHJpbmc7XG4gIC8qKiBzaGFkb3cgY29sb3IgKi9cbiAgc2hhZG93Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSaXBwbGVWYXJpYWJsZXMge1xuICB0cmFuc2l0aW9uOiB7XG4gICAgb3BhY2l0eTogc3RyaW5nXG4gICAgdHJhbnNmb3JtOiBzdHJpbmdcbiAgfTtcbiAgZHVyYXRpb246IG51bWJlcjtcbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBUeXBvZ3JhcGh5Q29uZmlnIHtcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFdlaWdodD86IG51bWJlcjtcbiAgbGV0dGVyU3BhY2luZz86IG51bWJlcjtcbiAgdGV4dFRyYW5zZm9ybT86ICd1cHBlcmNhc2UnIHwgJ2NhcGl0YWxpemUnIHwgJ2xvd2VyY2FzZSc7XG4gIGd1dHRlclRvcD86IG51bWJlcjtcbiAgZ3V0dGVyQm90dG9tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgaHRtbEZvbnRTaXplOiBudW1iZXIsXG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgfTtcbiAgYnJlYWtwb2ludHM6IHtcbiAgICBYU21hbGw6IHN0cmluZyxcbiAgICBTbWFsbDogc3RyaW5nLFxuICAgIE1lZGl1bTogc3RyaW5nLFxuICAgIExhcmdlOiBzdHJpbmcsXG4gICAgWExhcmdlOiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0OiBzdHJpbmcsXG4gICAgVGFibGV0OiBzdHJpbmcsXG4gICAgV2ViOiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0UG9ydHJhaXQ6IHN0cmluZyxcbiAgICBUYWJsZXRQb3J0cmFpdDogc3RyaW5nLFxuICAgIFdlYlBvcnRyYWl0OiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0TGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgVGFibGV0TGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgV2ViTGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH07XG4gIGRpcmVjdGlvbj86ICdsdHInIHwgJ3J0bCc7XG4gIHB4VG9SZW0odmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLnR5cG9ncmFwaHkuZm9udFNpemUgLyAxNDtcbiAgICByZXR1cm4gYCR7dmFsdWUgLyB0aGlzLnR5cG9ncmFwaHkuaHRtbEZvbnRTaXplICogc2l6ZX1yZW1gO1xuICB9XG4gIGNvbG9yT2YodmFsdWU6IHN0cmluZywgb3B0aW9uYWw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcywgdmFsdWUsIG9wdGlvbmFsKTtcbiAgfVxuICBnZXRCcmVha3BvaW50KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBAbWVkaWEgJHt0aGlzLmJyZWFrcG9pbnRzW2tleV0gfHwga2V5fWA7XG4gIH1cblxuICBnZXREaXJlY3Rpb24odmFsOiAnc3RhcnQnIHwgJ2VuZCcpIHtcbiAgICBpZiAodmFsID09PSAnZW5kJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGdldCBjb2xvciBvZiBvYmplY3RcbiAqIEBwYXJhbSBvYmogb2JqZWN0XG4gKiBAcGFyYW0gcGF0aCBwYXRoXG4gKiBAcGFyYW0gb3B0aW9uYWwgZ2V0IG9wdGlvbmFsIHZhbHVlLCBpZiBub3QgZXhpc3QgcmV0dXJuIGRlZmF1bHQgaWYgbm90IGlzIHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IHN0cmluZ1tdIHwgc3RyaW5nLCBvcHRpb25hbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBvc2libGVPYiA9IG9ialtfcGF0aFtpXV07XG4gICAgaWYgKHBvc2libGVPYikge1xuICAgICAgb2JqID0gcG9zaWJsZU9iO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiogaWYgbm90IGV4aXN0ICovXG4gICAgICByZXR1cm4gcGF0aCBhcyBzdHJpbmc7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvYmogYXMgc3RyaW5nO1xuICB9IGVsc2UgaWYgKG9wdGlvbmFsKSB7XG4gICAgcmV0dXJuIG9ialtvcHRpb25hbF0gfHwgb2JqWydkZWZhdWx0J107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9ialsnZGVmYXVsdCddO1xuICB9XG4gIC8vIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYWNoTWVkaWEoc3RyOiBzdHJpbmcgfCBudW1iZXIsIGZuOiAoKHZhbDogc3RyaW5nLCBtZWRpYTogc3RyaW5nLCBpc01lZGlhOiBudW1iZXIpID0+IHZvaWQpKSB7XG4gIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHZhbHVlcyA9IHN0ci5zcGxpdCgvXFxzL2cpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB2YWxJdGVtID0gdmFsdWVzW2luZGV4XS5zcGxpdCgvXFxAL2cpO1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWxJdGVtLnNoaWZ0KCk7XG4gICAgICBjb25zdCBsZW4gPSB2YWxJdGVtLmxlbmd0aDtcbiAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdmFsSXRlbVtqXSwgdmFsSXRlbS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHVuZGVmaW5lZCwgbGVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm4uY2FsbCh1bmRlZmluZWQsIHN0ciwgdW5kZWZpbmVkLCAwKTtcbiAgfVxufVxuLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVT4odGFyZ2V0OiBULCBzb3VyY2U6IFUpOiBUICYgVTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVSwgVj4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWKTogVCAmIFUgJiBWO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWLCBXPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYsIHNvdXJjZTM6IFcpOiBUICYgVSAmIFYgJiBXO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQ6IG9iamVjdCwgLi4uc291cmNlczogYW55W10pOiBhbnk7XG5cbi8qKlxuICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSAuLi5zb3VyY2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHsgcmV0dXJuIHRhcmdldDsgfVxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7IE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KTsgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUUsIFRoZW1lVmFyaWFibGVzLCBMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IG1lcmdlRGVlcCB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVRoZW1lIHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgbWVkaWFTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaW1hcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHNlY29uZGFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgZmlyc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcmVhZG9ubHkgdGhlbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX3RoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lVmFyaWFibGVzPigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+PigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FKSB0aGVtZUNvbmZpZzogVGhlbWVDb25maWdbXSB8IFRoZW1lQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUykgZ2xvYmFsVmFyaWFibGVzOiBUaGVtZUNvbmZpZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAoIXRoZW1lQ29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xZX1RIRU1FIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwge1xuICAgICAgaWQ6ICdseScsXG4gICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0ID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnbHktcy1jJyk7XG4gICAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZXMuaXRlbShpbmRleCk7XG4gICAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5maXJzdEVsZW1lbnQgPSBfZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoZW1lQ29uZmlnKSkge1xuICAgICAgdGhlbWVDb25maWcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICAgIG1lcmdlRGVlcChpdGVtLCBnbG9iYWxWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkKGl0ZW0gYXMgYW55KTtcbiAgICAgICAgdGhpcy50aGVtZXMuYWRkKGl0ZW0ubmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICBtZXJnZURlZXAodGhlbWVDb25maWcsIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZCh0aGVtZUNvbmZpZyBhcyBhbnkpO1xuICAgICAgdGhpcy50aGVtZXMuYWRkKHRoZW1lQ29uZmlnLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbmV3IHRoZW1lXG4gICAqIEBwYXJhbSB0aGVtZTogVGhlbWVWYXJpYWJsZXNcbiAgICovXG4gIGFkZCh0aGVtZTogVGhlbWVWYXJpYWJsZXMpIHtcbiAgICB0aGlzLl90aGVtZU1hcC5zZXQodGhlbWUubmFtZSwgdGhlbWUpO1xuICAgIHRoaXMuX3N0eWxlTWFwLnNldCh0aGVtZS5uYW1lLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgZ2V0KG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl90aGVtZU1hcC5nZXQobmFtZSk7XG4gIH1cbiAgZ2V0U3R5bGVNYXAobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAob2xkQ2xhc3NuYW1lKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvbGRDbGFzc25hbWUpO1xuICAgIH1cbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuZXdDbGFzc25hbWUpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgSW5qZWN0LCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgJ0BnbG9iYWwnOiB7XG4gICAgJyosICo6YWZ0ZXIsICo6YmVmb3JlJzoge1xuICAgICAgJy13ZWJraXQtYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICctbW96LWJveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94J1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgUkVGX1JFR19FWFAgPSAvXFx7KFtcXHctXSspXFx9L2c7XG5cbmVudW0gVHlwZVN0eWxlIHtcbiAgTXVsdGlwbGUsXG4gIE9ubHlPbmVcbn1cblxuY29uc3QgU1RZTEVfTUFQNTogTWFwPGFueSwgU3R5bGVNYXA1PiA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZU1hcDUge1xuICBzdHlsZXM6IFN0eWxlc0ZuMjxhbnk+IHwgU3R5bGVzMjtcbiAgdHlwZTogVHlwZVN0eWxlO1xuICBwcmlvcml0eTogbnVtYmVyO1xuICBjc3M6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIGdsb2JhbCB0aGVtZSAqL1xuICBjbGFzc2VzPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogcmVxdWlyZVVwZGF0ZSAqL1xuICBjbGFzc2VzV2l0aFRoZW1lPzoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICAgIH0gfCBzdHJpbmdcbiAgfTtcbiAgcmVxdWlyZVVwZGF0ZT86IGJvb2xlYW47XG59XG5jb25zdCBDTEFTU0VTX01BUDoge1xuICBbaWRPclRoZW1lTmFtZTogc3RyaW5nXToge1xuICAgIFtjbGFzc05hbWU6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nXG59ID0ge307XG5jb25zdCBTVFlMRV9LRVlTX01BUCA9IHt9O1xubGV0IG5leHRDbGFzc0lkID0gMDtcbmZ1bmN0aW9uIGZuKCkge1xuICByZXR1cm4gQ0xBU1NFU19NQVA7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlc0luRG9jdW1lbnQge1xuICBzdHlsZXM6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PlxuICB9ID0ge307XG4gIHN0eWxlQ29udGFpbmVycyA9IG5ldyBNYXA8bnVtYmVyLCBIVE1MRWxlbWVudD4oKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZVZhcmlhYmxlcztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBpbml0aWFsVGhlbWU6IHN0cmluZztcbiAgZWxlbWVudHM6IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+O1xuICBfZWxlbWVudHNNYXAgPSBuZXcgTWFwPGFueSwgSFRNTFN0eWxlRWxlbWVudD4oKTtcblxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gQ0xBU1NFU19NQVA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlc0luRG9jdW1lbnQ6IFN0eWxlc0luRG9jdW1lbnQsXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICB0aGlzLl9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gdGhlbWVOYW1lIGluIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNcbiAgICAgID8gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdXG4gICAgICA6IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXSA9IG5ldyBNYXAoKTtcbiAgICAgIHRoaXMuX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lKTtcbiAgICAgIGlmICghdGhpcy5pbml0aWFsVGhlbWUpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVGhlbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWRkRGVmYXVsdFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKi9cbiAgYWRkU3R5bGUoaWQ6IHN0cmluZywgc3R5bGU6IFN0eWxlQ29udGFpbmVyIHwgKCh0aGVtZSkgPT4gU3R5bGVDb250YWluZXIpIHwgKCh0aGVtZSkgPT4gc3RyaW5nKSB8IHN0cmluZywgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5hZGRDc3MoaWQsIHN0eWxlIGFzIGFueSwgcHJpb3JpdHkpO1xuICAgIGlmIChuZXdDbGFzcyA9PT0gaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgaWYgKGVsKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0NsYXNzID09PSBvbGRDbGFzcykge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgaWYgKG5hbSAhPT0gdGhpcy5jb25maWcubmFtZSkge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZURhdGEgPSBTVFlMRV9NQVA1LmdldChrZXkpO1xuICAgICAgICBpZiAoc3R5bGVEYXRhLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlRGF0YS5zdHlsZXMsIGtleSwgc3R5bGVEYXRhLnByaW9yaXR5LCBzdHlsZURhdGEudHlwZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBtZWRpYSkgYXMgc3RyaW5nO1xuICB9XG4gIHByaXZhdGUgX2FkZERlZmF1bHRTdHlsZXMoKSB7XG4gICAgdGhpcy5hZGRTdHlsZVNoZWV0KGRlZmF1bHRTdHlsZXMpO1xuICB9XG5cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiAoU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiksIHByaW9yaXR5PzogbnVtYmVyKTogSUNsYXNzZXM8VD47XG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgKFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIpLCBpZDogc3RyaW5nKTogSUNsYXNzZXM8VD47XG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgKFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIpLCBpZDogc3RyaW5nIHwgc3RyaW5nLCBwcmlvcml0eTogbnVtYmVyKTogSUNsYXNzZXM8VD47XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBpZCBkZXByZWNhdGVkLCB1bmlxdWUgaWQgZm9yIHN0eWxlIGdyb3VwXG4gICAqIEBwYXJhbSBwcmlvcml0eSBwcmlvcml0eSBmb3Igc3R5bGVcbiAgICovXG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgKFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIpLCBpZD86IHN0cmluZyB8IG51bWJlciwgcHJpb3JpdHk/OiBudW1iZXIpOiBJQ2xhc3NlczxUPiB7XG4gICAgaWYgKGlzRGV2TW9kZSgpICYmIHZvaWQgMCA9PT0gcHJpb3JpdHkgJiYgdHlwZW9mIGlkID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc29sZS53YXJuKGB0aGUgdmFsdWUgXFxgJHtpZH1cXGAgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeSBmb3IgYWRkU3R5bGVTaGVldCwgdGhpcyB3aWxsIGJlIGFuIGVycm9yIGluIHRoZSBuZXh0IHJlbGVhc2UuYCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgaWQgYXMgYW55LCBwcmlvcml0eSwgVHlwZVN0eWxlLk11bHRpcGxlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlQ29udGVudDI8VD4oXG4gICAgc3R5bGVzOiBTdHlsZXNGbjI8VD4gfCBTdHlsZXMyLFxuICAgIGlkOiBzdHJpbmcgfCBvYmplY3QgfCBudW1iZXIsXG4gICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICB0eXBlOiBUeXBlU3R5bGUsXG4gICAgZm9yQ2hhbmdlVGhlbWU/OiBib29sZWFuLFxuICAgIG1lZGlhPzogc3RyaW5nXG4gICkge1xuICAgIGNvbnN0IG5ld0lkID0gdHlwZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUgPyBpZCBhcyBzdHJpbmcgOiBzdHlsZXM7XG4gICAgbGV0IGlzTmV3U3R5bGU6IGJvb2xlYW47XG4gICAgaWYgKCFTVFlMRV9NQVA1LmhhcyhuZXdJZCkpIHtcbiAgICAgIGlzTmV3U3R5bGUgPSB0cnVlO1xuICAgICAgU1RZTEVfTUFQNS5zZXQobmV3SWQsIHtcbiAgICAgICAgcHJpb3JpdHk6IHR5cGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lID8gcHJpb3JpdHkgOiBwcmlvcml0eSA9PT0gdm9pZCAwICYmIHR5cGVvZiBpZCA9PT0gJ251bWJlcicgPyBpZCBhcyBudW1iZXIgOiBwcmlvcml0eSxcbiAgICAgICAgc3R5bGVzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBjc3M6IHt9XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVNYXAgPSBTVFlMRV9NQVA1LmdldChuZXdJZCk7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gdGhpcy5pbml0aWFsVGhlbWU7XG4gICAgY29uc3QgaXNDcmVhdGVkID0gaXNOZXdTdHlsZSB8fCAhKHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhlbWVOYW1lXSk7XG4gICAgaWYgKGlzQ3JlYXRlZCB8fCBmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgLyoqIGNyZWF0ZSBuZXcgc3R5bGUgZm9yIG5ldyB0aGVtZSAqL1xuICAgICAgbGV0IGNzcztcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUgPSB0cnVlO1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVNYXAsIHN0eWxlcyh0aGlzLmNvbmZpZyksIHRoZW1lTmFtZSwgbnVsbCwgdHlwZSwgbWVkaWEpO1xuICAgICAgICBpZiAoIWZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgICAgc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV0gPSBjc3M7XG5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIGNyZWF0ZSBhIG5ldyBpZCBmb3Igc3R5bGUgdGhhdCBkb2VzIG5vdCA8LTxyZXF1aXJlPi0+IGNoYW5nZXMgKi9cbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXMsIHRoZW1lTmFtZSwgbmV3SWQgYXMgc3RyaW5nLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMobmV3SWQpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuc2V0KG5ld0lkLCB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoY3NzKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKTtcbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBlbC5pbm5lclRleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCBlbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKlxuICAgICAgICogYXBwZW5kIGNoaWxkIHN0eWxlIGlmIG5vdCBleGlzdCBpbiBkb21cbiAgICAgICAqIGZvciBzc3IgJiBobXJcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgX2NzcyA9IHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdIHx8IHN0eWxlTWFwLmNzcztcbiAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoISh0aGVtZU5hbWUgaW4gQ0xBU1NFU19NQVApKSB7XG4gICAgICBDTEFTU0VTX01BUFt0aGVtZU5hbWVdID0ge307XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lcjtcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoXG4gIHN0eWxlTWFwOiBTdHlsZU1hcDUsXG4gIHN0eWxlczogU3R5bGVzMixcbiAgdGhlbWVOYW1lOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcsXG4gIHR5cGVTdHlsZTogVHlwZVN0eWxlLFxuICBtZWRpYT86IHN0cmluZ1xuKSB7XG4gIGlmICh0eXBlU3R5bGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lKSB7XG4gICAgLy8gdXNlIGN1cnJlbnQgY2xhc3Mgb3Igc2V0IG5ld1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN0eWxlTWFwLnJlcXVpcmVVcGRhdGVcbiAgICA/IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSBjcmVhdGVOZXh0Q2xhc3NJZCgpKVxuICAgIDogc3R5bGVNYXAuY2xhc3Nlc1xuICAgICAgPyBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA6IHN0eWxlTWFwLmNsYXNzZXMgPSBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgY3NzID0gYC4ke2NsYXNzTmFtZX17JHtzdHlsZXN9fWA7XG4gICAgICByZXR1cm4gbWVkaWEgPyB0b01lZGlhKGNzcywgbWVkaWEpIDogY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlcyA9IHN0eWxlVG9TdHJpbmcoaWQsIHN0eWxlcywgY2xhc3NOYW1lIGFzIGFueSk7XG4gICAgICByZXR1cm4gcnVsZXM7XG4gICAgfVxuICB9XG4gIC8vIGZvciBtdWx0aXBsZXMgc3R5bGVzXG4gIGNvbnN0IGNsYXNzZXNNYXAgPSBzdHlsZU1hcFt0aGVtZU5hbWVdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVdID0ge30pO1xuICBsZXQgY29udGVudCA9ICcnO1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIC8vIHNldCBuZXcgaWQgaWYgbm90IGV4aXN0XG4gICAgICBjb25zdCBjdXJyZW50Q2xhc3NOYW1lID0ga2V5IGluIGNsYXNzZXNNYXBcbiAgICAgID8gY2xhc3Nlc01hcFtrZXldXG4gICAgICA6IGNsYXNzZXNNYXBba2V5XSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgaS0tLSR7a2V5fS0ke2NyZWF0ZU5leHRDbGFzc0lkKCl9YCkgOiBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyhrZXksIHZhbHVlIGFzIFN0eWxlczIsIGN1cnJlbnRDbGFzc05hbWUpO1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGlzIHN0cmluZycsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2VSZWZzKGNvbnRlbnQsIGNsYXNzZXNNYXApO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUmVmcyhzdHI6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUZfUkVHX0VYUCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIHJldHVybiBgLiR7ZGF0YVt0b2tlbl19YDtcbiAgfVxuICApO1xufVxuXG4vKipcbiAqIHtjb2xvcjoncmVkJ30gdG8gLmNsYXNzTmFtZXtjb2xvcjogcmVkfVxuICovXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKGtleTogc3RyaW5nLCBvYjogT2JqZWN0LCBjdXJyZW50S2V5OiBzdHJpbmcsIHBhcmVudEtleT86IHN0cmluZykge1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgc3ViQ29udGVudCA9ICcnO1xuICBsZXQga2V5QW5kVmFsdWUgPSAnJztcbiAgbGV0IG5ld0tleTtcbiAgaWYgKHBhcmVudEtleSAmJiBjdXJyZW50S2V5LmluZGV4T2YoJyYnKSAhPT0gLTEpIHtcbiAgICBuZXdLZXkgPSBjdXJyZW50S2V5LnJlcGxhY2UoLyYvZywgcGFyZW50S2V5KTtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdAZ2xvYmFsJykge1xuICAgIG5ld0tleSA9IGtleTtcbiAgfSBlbHNlIGlmIChwYXJlbnRLZXkgJiYgY3VycmVudEtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgIG5ld0tleSA9IGAke2N1cnJlbnRLZXl9YDtcbiAgfSBlbHNlIGlmIChwYXJlbnRLZXkpIHtcbiAgICBuZXdLZXkgPSBgJHtwYXJlbnRLZXl9ICR7Y3VycmVudEtleX1gO1xuICB9IGVsc2Uge1xuICAgIG5ld0tleSA9IGAuJHtjdXJyZW50S2V5fWA7XG4gIH1cbiAgZm9yIChjb25zdCBzdHlsZUtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBvYltzdHlsZUtleV07XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHN1YkNvbnRlbnQgKz0gc3R5bGVUb1N0cmluZyhrZXksIGVsZW1lbnQgYXMgU3R5bGVzMiwgc3R5bGVLZXksIG5ld0tleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdTdHlsZUtleSA9IHRvSHlwaGVuQ2FzZUNhY2hlKHN0eWxlS2V5KTtcbiAgICAgICAga2V5QW5kVmFsdWUgKz0gYCR7bmV3U3R5bGVLZXl9OiR7ZWxlbWVudH07YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGtleUFuZFZhbHVlKSB7XG4gICAgaWYgKG5ld0tleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICAgIGtleUFuZFZhbHVlID0gYCR7cGFyZW50S2V5fXske2tleUFuZFZhbHVlfX1gO1xuICAgIH0gZWxzZSBpZiAocGFyZW50S2V5ICYmIHBhcmVudEtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgICBjb250ZW50ICs9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICB9XG4gICAgY29udGVudCArPSBgeyR7a2V5QW5kVmFsdWV9fWA7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQgKyBzdWJDb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuZnVuY3Rpb24gdG9DbGFzc05hbWVWYWxpZChzdHI6IHN0cmluZykge1xuICBjb25zdCBzID0gc3RyLnJlcGxhY2UoL15bMC05XXxbXlxcd1xcLV0vZywgXyA9PiB7XG4gICAgcmV0dXJuIGBfJHtfLmNoYXJDb2RlQXQoMCl9YDtcbiAgfSk7XG4gIHJldHVybiB0b0h5cGhlbkNhc2Uocyk7XG59XG5cbmZ1bmN0aW9uIHRvSHlwaGVuQ2FzZUNhY2hlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIgaW4gU1RZTEVfS0VZU19NQVBcbiAgPyBTVFlMRV9LRVlTX01BUFtzdHJdXG4gIDogU1RZTEVfS0VZU19NQVBbc3RyXSA9IHRvSHlwaGVuQ2FzZShzdHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gdG9NZWRpYShjc3M6IHN0cmluZywgbWVkaWE6IHN0cmluZykge1xuICByZXR1cm4gYEBtZWRpYSAke21lZGlhfXske2Nzc319YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dENsYXNzSWQoKSB7XG4gIHJldHVybiBgaSR7KG5leHRDbGFzc0lkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuXG50eXBlIElDbGFzc2VzPFQ+ID0gUmVjb3JkPChUIGV4dGVuZHMgKCguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA/IChrZXlvZiBSZXR1cm5UeXBlPFQ+KSA6IGtleW9mIFQpLCBzdHJpbmc+O1xuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95LCBOZ01vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl92aWV3UmVmLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZU1vZHVsZSB7XHJcblxyXG59XHJcbiIsImZ1bmN0aW9uIGlzV2luZG93KG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW06IGFueSkge1xyXG4gICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0VmlldztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGRvY0VsZW06IGFueSwgd2luOiBhbnksXHJcbiAgICAgICAgYm94ID0ge3RvcDogMCwgbGVmdDogMH07XHJcbiAgICBjb25zdCBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcclxuXHJcbiAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH1cclxuICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcclxuICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxyXG4gICAgfTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIElzQm9vbGVhbigpOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBkZWZpbml0aW9uLmdldCxcbiAgICAgICAgc2V0OiBuZXdWYWx1ZSA9PiB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5zZXQodG9Cb29sZWFuKG5ld1ZhbHVlKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1snX18nICsga2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICB0aGlzWydfXycgKyBrZXldID0gdG9Cb29sZWFuKG5ld1ZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdEVudHJ5KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGRlZmF1bHRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbCc7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgXG4gICAgICAgICAgICBbYmddLFxuICAgICAgICAgICAgW2NvbG9yXSxcbiAgICAgICAgICAgIFtyYWlzZWRdLFxuICAgICAgICAgICAgW3JhaXNlZF1bc2hhZG93Q29sb3JdLFxuICAgICAgICAgICAgW2x5LWJ1dHRvbl1bb3V0bGluZWRdLFxuICAgICAgICAgICAgW2VsZXZhdGlvbl0sXG4gICAgICAgICAgICBbZWxldmF0aW9uXVtzaGFkb3dDb2xvcl0sXG4gICAgICAgICAgICBbZGlzYWJsZWRdLFxuICAgICAgICAgICAgbHktY2FyZCxcbiAgICAgICAgICAgIGx5LXRvb2xiYXJcbiAgICAgICAgICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb24gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9yYWlzZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX291dGxpbmVkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2F1dG9Db250cmFzdDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNDb250cmFzdDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBiZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2V0IHJhaXNlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fcmFpc2VkID0gdG9Cb29sZWFuKHZhbCk7IH1cbiAgZ2V0IHJhaXNlZCgpIHsgcmV0dXJuIHRoaXMuX3JhaXNlZDsgfVxuXG4gIEBJbnB1dCgpIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuXG4gIEBJbnB1dCgpIHNldCBvdXRsaW5lZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fb3V0bGluZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgb3V0bGluZWQoKSB7IHJldHVybiB0aGlzLl9vdXRsaW5lZDsgfVxuXG4gIEBJbnB1dCgpIGVsZXZhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBzaGFkb3dDb2xvcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBwdWJsaWMgc2V0QXV0b0NvbnRyYXN0KCkge1xuICAgIHRoaXMuX2F1dG9Db250cmFzdCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBjb25zdCBfX2JnID0gdGhpcy5iZztcbiAgICBjb25zdCBfX2NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICBjb25zdCBfX3JhaXNlZCA9IHRoaXMucmFpc2VkO1xuICAgIGNvbnN0IF9fZWxldmF0aW9uID0gdGhpcy5lbGV2YXRpb247XG4gICAgY29uc3QgX19kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgY29uc3QgX19vdXRsaW5lZCA9IHRoaXMub3V0bGluZWQ7XG4gICAgY29uc3QgX19zaGFkb3dDb2xvciA9IHRoaXMuc2hhZG93Q29sb3I7XG4gICAgY29uc3QgX19pc0NvbnRyYXN0ID0gdGhpcy5faXNDb250cmFzdCA9IHRoaXMuX2F1dG9Db250cmFzdCAmJiAhX19jb2xvciB8fCBfX2NvbG9yID09PSAnYXV0byc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGNvbW1vbi0tLS06JHtcbiAgICAgIF9fYmcgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgX19jb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgIF9fcmFpc2VkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICBfX2VsZXZhdGlvbiB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICBfX2Rpc2FibGVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgX19vdXRsaW5lZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgX19zaGFkb3dDb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICBfX2lzQ29udHJhc3QgfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUobmV3S2V5LCAodGhlbWUpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlOiB7XG4gICAgICAgIGJvcmRlcj86IHN0cmluZyxcbiAgICAgICAgYmFja2dyb3VuZD86IHN0cmluZyxcbiAgICAgICAgY29sb3I/OiBzdHJpbmcsXG4gICAgICAgIGJveFNoYWRvdz86IHN0cmluZyxcbiAgICAgICAgcG9pbnRlckV2ZW50cz86ICdub25lJztcbiAgICAgICAgJyY6aG92ZXInPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICAnJjphY3RpdmUnPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9XG4gICAgICB9ID0ge307XG4gICAgICBpZiAoX19vdXRsaW5lZCkge1xuICAgICAgICBzdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcic7XG4gICAgICB9XG4gICAgICBpZiAoX19kaXNhYmxlZCkge1xuICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLnRleHQuZGlzYWJsZWQ7XG4gICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIGlmIChfX2JnKSB7XG4gICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJ1dHRvbi5kaXNhYmxlZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9fYmcpIHtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuY29sb3JPZihfX2JnKTtcbiAgICAgICAgICBpZiAoX19pc0NvbnRyYXN0KSB7XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoYCR7X19iZ306Y29udHJhc3RgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdHlsZS5jb2xvciAmJiBfX2NvbG9yKSB7XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKF9fY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX3JhaXNlZCB8fCBfX2VsZXZhdGlvbikge1xuICAgICAgICAgIGlmICghX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JDc3MgPSBzdHlsZS5iYWNrZ3JvdW5kICE9PSBfX2JnICYmIHRoZW1lLmNvbG9yT2YoX19iZyB8fCAnYmFja2dyb3VuZDpwcmltYXJ5JywgJ3NoYWRvdycpO1xuICAgICAgICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gKF9fc2hhZG93Q29sb3IgJiYgdGhlbWUuY29sb3JPZihfX3NoYWRvd0NvbG9yKSkgfHwgYmFja2dyb3VuZENvbG9yQ3NzIHx8IHN0eWxlLmJhY2tncm91bmQgfHwgc3R5bGUuY29sb3IgfHwgdGhlbWUuc2hhZG93O1xuICAgICAgICAgIHN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd0J1aWxkZXIoX19lbGV2YXRpb24gfHwgMywgc2hhZG93Q29sb3IpO1xuICAgICAgICAgIGlmICghX19lbGV2YXRpb24pIHtcbiAgICAgICAgICAgIHN0eWxlWycmOmFjdGl2ZSddID0ge1xuICAgICAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoOCwgc2hhZG93Q29sb3IpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlIGFzIGFueTtcbiAgICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbd2l0aENsYXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlXaXRoQ2xhc3Mge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHt2YWx9JyBpcyBub3QgdmFsaWQgY2xhc3NOYW1lYCk7XG4gICAgfVxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlDb21tb24gfSBmcm9tICcuL2NvbW1vbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlXaXRoQ2xhc3MgfSBmcm9tICcuL3dpdGgtY2xhc3MuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlDb21tb24sIEx5V2l0aENsYXNzXSxcbiAgZXhwb3J0czogW0x5Q29tbW9uLCBMeVdpdGhDbGFzc11cbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IExZX0NPTU1PTl9TVFlMRVMgPSB7XG4gIGZpbGw6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gIH0sXG4gIHZpc3VhbGx5SGlkZGVuOiB7XG4gICAgYm9yZGVyOiAwLFxuICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICBoZWlnaHQ6ICcxcHgnLFxuICAgIG1hcmdpbjogJy0xcHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMXB4JyxcbiAgICBvdXRsaW5lOiAwLFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJ1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q29yZVN0eWxlcyB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoTFlfQ09NTU9OX1NUWUxFUyk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyKSB7IH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudCwgSW5qZWN0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMeUNvcmVTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvY29yZS1zdHlsZXMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50ICwgIE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIG92ZXJsYXlCYWNrZHJvcDoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5vdmVybGF5XG4gIH1cbn0pO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdpbmRvd1Njcm9sbFNlcnZpY2Uge1xuXG4gIHB1YmxpYyBzY3JvbGwkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJykucGlwZShcbiAgICAgICAgYXVkaXRUaW1lKDIwMCksXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZIHx8IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgfSksXG4gICAgICAgIHNoYXJlKClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Nyb2xsJCA9IGVtcHR5KCk7XG4gICAgfVxuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUNvbnRhaW5lciB7XG4gIHByaXZhdGUgX2NsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgU2V0PGFueT4oKTtcbiAgcHJpdmF0ZSBfaXNBY3RpdmVPdmVybGF5Q29udGFpbmVyOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdseS1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfYWRkKGl0ZW0pIHtcbiAgICB0aGlzLl9pdGVtcy5hZGQoaXRlbSk7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgICAvKipcbiAgICogUmVtb3ZlIGluc3RhbmNlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9yZW1vdmUoaXRlbSkge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5yZW1vdmVDaGlsZChpdGVtKTtcbiAgICB0aGlzLl9pdGVtcy5kZWxldGUoaXRlbSk7XG4gICAgdGhpcy5fdXBkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0eWxlcyBmb3Igb3ZlcmxheSBjb250YWluZXJcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9pdGVtcy5zaXplKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fY2xhc3Nlcy5vdmVybGF5QmFja2Ryb3ApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fY2xhc3Nlcy5vdmVybGF5QmFja2Ryb3ApO1xuICAgICAgdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LW92ZXJsYXktYmFja2Ryb3AnLFxuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5QmFja2Ryb3Age1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgdGhpcy5fb3ZlcmxheUNvbmZpZy5mbkRlc3Ryb3koKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIEBJbmplY3QoJ292ZXJsYXlDb25maWcnKSBwcml2YXRlIF9vdmVybGF5Q29uZmlnOiBhbnksXG4gICAgY29tbW9uU3R5bGVzOiBMeUNvcmVTdHlsZXNcbiAgKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY29tbW9uU3R5bGVzLmNsYXNzZXMuZmlsbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSBfdmlld1JlZjogVmlld1JlZjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lclxuICApIHsgfVxuXG4gIGF0dGFjaDxUPihfaG9zdFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGNvbXBvbmVudDogYW55LCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgY29uc3Qgdmlld1JlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xuICAgICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gX2hvc3RWaWV3Q29udGFpbmVyUmVmO1xuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChyb290Tm9kZSA9PiB0aGlzLmFkZENoaWxkKHJvb3ROb2RlKSk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm92ZXJsYXlDb250YWluZXIuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBnZXREb21FbGVtZW50RnJvbUNvbXBvbmVudFJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBkZXN0cm95UmVmKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4sIGRlbGF5OiBudW1iZXIpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSwgZGVsYXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERvbVNlcnZpY2UgfSBmcm9tICcuL2RvbS5zZXJ2aWNlJztcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIpIHtcbi8vICAgcmV0dXJuIHBhcmVudENvbnRhaW5lciB8fCBuZXcgTHlPdmVybGF5Q29udGFpbmVyKCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUiA9IHtcbi8vICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBPdmVybGF5Q29udGFpbmVyIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4vLyAgIHByb3ZpZGU6IEx5T3ZlcmxheUNvbnRhaW5lcixcbi8vICAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIEx5T3ZlcmxheUNvbnRhaW5lcl1dLFxuLy8gICB1c2VGYWN0b3J5OiBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZXG4vLyB9O1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIERvbVNlcnZpY2VcbiAgICAvLyBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUlxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx4RG9tTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lLCBSZW5kZXJlcjIsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBlbnVtIEZvY3VzU3RhdHVzIHtcbiAgLyoqbW91c2UgYW5kL29yIHRvdWNoKi9cbiAgREVGQVVMVCA9ICdkZWZhdWx0JyxcbiAgLyoqIGtleWJvYXJkIGFuZC9vciBwcm9ncmFtKi9cbiAgS0VZQk9BUkQgPSAna2V5Ym9hcmQnLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlGb2N1c1N0YXRlXScsXG4gIGV4cG9ydEFzOiAnbHlGb2N1c1N0YXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBzdGF0ZTogRm9jdXNTdGF0dXM7XG4gIHN0YXRlTWFwID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHByaXZhdGUgX2V2ZW50SGFuZGxlcnMgPSBuZXcgTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIF9zdGF0ZVN1YmplY3QgPSBuZXcgU3ViamVjdDxGb2N1c1N0YXR1cz4oKTtcbiAgX3N0YXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIEBPdXRwdXQoKSBseUZvY3VzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c1N0YXR1cz4oKTtcbiAgcHJpdmF0ZSBfZXZlbnRPcHRpb25zID0ge3Bhc3NpdmU6IHRydWV9IGFzIGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVyc1xuICAgICAgLnNldCgnZm9jdXMnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdibHVyJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgndG91Y2hzdGFydCcsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ21vdXNlZG93bicsIHRoaXMub24uYmluZCh0aGlzKSk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNvbnN0IG9uID0gKGV2ZW50OiBGb2N1c0V2ZW50IHwgVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZU1hcC5zZXQoZXZlbnQudHlwZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgb2I6IE9ic2VydmFibGU8Rm9jdXNTdGF0dXM+ID0gdGhpcy5fc3RhdGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24gPSBvYlxuICAgICAgLy8gLmRlYm91bmNlVGltZSgxMTEpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDExMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGU6IEZvY3VzU3RhdHVzKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBlO1xuICAgICAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICAgICAgICB0aGlzLmx5Rm9jdXNDaGFuZ2UuZW1pdChlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0YXRlKCkge1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2JsdXInKSkge1xuICAgICAgdGhpcy5zdGF0ZU1hcC5jbGVhcigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykgJiYgdGhpcy5zdGF0ZU1hcC5oYXMoJ21vdXNlZG93bicpIHx8IHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCd0b3VjaHN0YXJ0JykpIHtcbiAgICAgIHN0YXRlID0gRm9jdXNTdGF0dXMuREVGQVVMVDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLktFWUJPQVJEO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZVN1YmplY3QubmV4dChzdGF0ZSk7XG4gIH1cblxuICBvbihldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5zdGF0ZU1hcC5zZXQoZXZlbnQudHlwZSwgdHJ1ZSk7XG4gICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNsYXNzKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0b2dnbGVDbGFzcyA9IChjbGFzc05hbWU6IHN0cmluZywgc2hvdWxkU2V0OiBib29sZWFuKSA9PiBzaG91bGRTZXQgPyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIDogdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB0b2dnbGVDbGFzcyhgbHktZm9jdXNlZGAsICEhc3RhdGUpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIEZvY3VzU3RhdHVzKSB7XG4gICAgICBpZiAoRm9jdXNTdGF0dXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBGb2N1c1N0YXR1c1trZXldO1xuICAgICAgICB0b2dnbGVDbGFzcyhgbHktJHtjbGFzc05hbWV9LWZvY3VzZWRgLCBzdGF0ZSA9PT0gY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyRWxlbWVudCkge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChudWxsKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlGb2N1c1N0YXRlIH0gZnJvbSAnLi9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5Rm9jdXNTdGF0ZV0sXG4gIGV4cG9ydHM6IFtMeUZvY3VzU3RhdGVdXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZU1vZHVsZSB7IH1cbiIsImV4cG9ydCBjb25zdCBBVUlfVkVSU0lPTiA9ICcxLjcuNSc7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMTAtMjVUMTk6MTk6MDMuMjIwWic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgTFlfSEFNTUVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyT3B0aW9ucz4oJ0xZX0hBTU1FUl9PUFRJT05TJyk7XG5cbmNvbnN0IEhBTU1FUl9HRVNUVVJFU19FVkVOVFMgPSBbXG4gICdzbGlkZScsXG4gICdzbGlkZXN0YXJ0JyxcbiAgJ3NsaWRlZW5kJyxcbiAgJ3NsaWRlcmlnaHQnLFxuICAnc2xpZGVsZWZ0J1xuXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBldmVudHM6IHN0cmluZ1tdID0gSEFNTUVSX0dFU1RVUkVTX0VWRU5UUztcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIGNvbnN0IGhhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gICAgY29uc3QgbWMgPSBuZXcgaGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwgdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHBhbiA9IG5ldyBoYW1tZXIuUGFuKCk7XG4gICAgY29uc3Qgc3dpcGUgPSBuZXcgaGFtbWVyLlN3aXBlKCk7XG4gICAgY29uc3Qgc2xpZGUgPSB0aGlzLl9jcmVhdGVSZWNvZ25pemVyKHBhbiwge2V2ZW50OiAnc2xpZGUnLCB0aHJlc2hvbGQ6IDB9LCBzd2lwZSk7XG5cbiAgICBwYW4ucmVjb2duaXplV2l0aChzd2lwZSk7XG5cbiAgICAvLyBBZGQgY3VzdG9taXplZCBnZXN0dXJlcyB0byBIYW1tZXIgbWFuYWdlclxuICAgIG1jLmFkZChbc3dpcGUsIHBhbiwgc2xpZGVdKTtcbiAgICByZXR1cm4gbWM7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyByZWNvZ25pemVyLCB3aXRob3V0IGFmZmVjdGluZyB0aGUgZGVmYXVsdCByZWNvZ25pemVycyBvZiBIYW1tZXJKUyAqL1xuICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyKGJhc2U6IGFueSwgb3B0aW9uczogYW55LCAuLi5pbmhlcml0YW5jZXM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVjb2duaXplciA9IG5ldyAoYmFzZS5jb25zdHJ1Y3Rvcikob3B0aW9ucyk7XG5cbiAgICBpbmhlcml0YW5jZXMucHVzaChiYXNlKTtcbiAgICBpbmhlcml0YW5jZXMuZm9yRWFjaChpdGVtID0+IHJlY29nbml6ZXIucmVjb2duaXplV2l0aChpdGVtKSk7XG5cbiAgICByZXR1cm4gcmVjb2duaXplcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWVNb2R1bGUge1xuICBzdGF0aWMgc2V0VGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEx5VGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgW0x5VGhlbWUyXSxcbiAgICAgICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogdGhlbWVOYW1lIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVW5kZWZpbmVkIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IFVuZGVmaW5lZFZhbHVlID0gbmV3IFVuZGVmaW5lZCgpO1xuIiwiZXhwb3J0IGVudW0gSW52ZXJ0TWVkaWFRdWVyeSB7XG4gIE5vLFxuICBZZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1lZGlhUXVlcnkobWVkaWE6IHN0cmluZywgaW52ZXJ0TWVkaWFRdWVyeTogSW52ZXJ0TWVkaWFRdWVyeSA9IEludmVydE1lZGlhUXVlcnkuTm8pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gIGlmIChtZWRpYSAmJiBpbnZlcnRNZWRpYVF1ZXJ5ID09PSBJbnZlcnRNZWRpYVF1ZXJ5Llllcykge1xuICAgIGNvbnN0IG5ld1ZhbCA9IG1lZGlhLnNwbGl0KCcsJykubWFwKF8gPT4gYG5vdCAke199YCk7XG4gICAgcmV0dXJuIG5ld1ZhbDtcbiAgfVxuICByZXR1cm4gbWVkaWE7XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIsIEx5T3ZlcmxheUJhY2tkcm9wLCBXaW5kb3dTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW50ZXJmYWNlIE92ZXJsYXlDb25maWcge1xuICBzdHlsZXM6IE9iamVjdDtcbiAgZm5EZXN0cm95PzogKC4uLmFyZykgPT4gdm9pZDtcbiAgaG9zdD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgLyoqIERldGFjaGVzIGEgdmlldyBmcm9tIGRpcnR5IGNoZWNraW5nIGFnYWluIG9mIEFwcGxpY2F0aW9uUmVmLiAgKi9cbiAgZGV0YWNoOiAoKSA9PiB2b2lkO1xuXG4gIC8qKiBSZW1vdmUgZWxlbWVudCBvZiBET00gKi9cbiAgcmVtb3ZlOiAoKSA9PiB2b2lkO1xuXG4gIC8qKiBEZXRhY2ggJiByZW1vdmUgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbn1cbmNsYXNzIENyZWF0ZUZyb21UZW1wbGF0ZVJlZiBpbXBsZW1lbnRzIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICBwcml2YXRlIF92aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZWw6IGFueTtcbiAgcHJpdmF0ZSBfY29tcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHByaXZhdGUgX2NvbXBSZWZPdmVybGF5QmFja2Ryb3A6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3aW5kb3dTY3JvbGxTdWI6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIF9jb250ZXh0OiBhbnksXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHdpbmRvd1Njcm9sbDogV2luZG93U2Nyb2xsU2VydmljZSxcbiAgICBjb25maWc/OiBPdmVybGF5Q29uZmlnXG4gICkge1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYgPSBfdGVtcGxhdGVSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KF9jb250ZXh0KTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLl9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2gocm9vdE5vZGUgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3ROb2RlKSk7XG4gICAgY29uc3QgX19zdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgLi4uY29uZmlnLnN0eWxlc1xuICAgIH07XG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiAnb3ZlcmxheUNvbmZpZycsXG4gICAgICAgIHVzZVZhbHVlOiA8T3ZlcmxheUNvbmZpZz57XG4gICAgICAgICAgZm5EZXN0cm95OiB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKSxcbiAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgc3R5bGVzOiBfX3N0eWxlcyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sIHRoaXMuX2luamVjdG9yKTtcblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKF9fc3R5bGVzKTtcbiAgICBpZiAoY29uZmlnLmhvc3QpIHtcbiAgICAgIHRoaXMud2luZG93U2Nyb2xsU3ViID0gd2luZG93U2Nyb2xsLnNjcm9sbCQuc3Vic2NyaWJlKCh2YWwpID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGNvbmZpZy5ob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAocmVjdC50b3AgIT09IF9fc3R5bGVzLnRvcCB8fCByZWN0LmxlZnQgIT09IF9fc3R5bGVzLmxlZnQpIHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyhuZXdTdHlsZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCA9IHRoaXMuZ2VuZXJhdGVDb21wb25lbnQoTHlPdmVybGF5QmFja2Ryb3AsIG5ld0luamVjdG9yKTtcbiAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZChiYWNrZHJvcEVsKTtcbiAgICB0aGlzLl9hcHBlbmRDb21wb25lbnRUb0JvZHkoX3RlbXBsYXRlUmVmLCBfY29udGV4dCwgdGhpcy5faW5qZWN0b3IpO1xuXG4gIH1cblxuICB1cGRhdGVTdHlsZXMoX19zdHlsZXMpIHtcbiAgICAvKiogQXBwbHkgc3R5bGVzICovXG4gICAgLyoqIHNldCBzdHlsZXMgKi9cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBfX3N0eWxlcykge1xuICAgICAgaWYgKF9fc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVWYWwgPSBfX3N0eWxlc1trZXldO1xuICAgICAgICBpZiAoc3R5bGVWYWwpIHtcbiAgICAgICAgICB0aGlzLl9lbC5zdHlsZVtrZXldID0gdHlwZW9mIF9fc3R5bGVzW2tleV0gPT09ICdudW1iZXInID8gYCR7c3R5bGVWYWx9cHhgIDogc3R5bGVWYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDb21wb25lbnRUb0JvZHkodHlwZTogVGVtcGxhdGVSZWY8YW55PiB8IFR5cGU8YW55PiwgY29udGV4dCwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnRcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLl92aWV3UmVmID0gdHlwZS5jcmVhdGVFbWJlZGRlZFZpZXcoY29udGV4dCB8fCB7fSk7XG4gICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh2aWV3UmVmKTtcblxuICAgICAgLy8gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XG4gICAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKF8gPT4gdGhpcy5fZWwuYXBwZW5kQ2hpbGQoXykpO1xuXG4gICAgICAvLyBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBSZWYgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KHR5cGUsIGluamVjdG9yKTtcbiAgICAgIHRoaXMuX2VsID0gdGhpcy5fY29tcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUNvbXBvbmVudCh0eXBlOiBUeXBlPGFueT4sIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSk7XG4gICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fdmlld1JlZik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICB0aGlzLl92aWV3UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuZGVzdHJveSgpO1xuICAgICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZShiYWNrZHJvcEVsKTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3dTY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3dpbmRvd1Njcm9sbDogV2luZG93U2Nyb2xsU2VydmljZVxuICApIHsgfVxuXG4gIGNyZWF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgY29udGV4dD86IGFueSwgY29uZmlnPzogT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICAgIHJldHVybiBuZXcgQ3JlYXRlRnJvbVRlbXBsYXRlUmVmKHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5fYXBwUmVmLCB0ZW1wbGF0ZSwgdGhpcy5fb3ZlcmxheUNvbnRhaW5lciwgY29udGV4dCwgdGhpcy5faW5qZWN0b3IsIHRoaXMuX3dpbmRvd1Njcm9sbCwgY29uZmlnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUJhY2tkcm9wIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5T3ZlcmxheUJhY2tkcm9wXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTHlPdmVybGF5QmFja2Ryb3BdXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBNVVRBVElPTl9PQlNFUlZFUl9JTklUID0ge1xuICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICBjaGlsZExpc3Q6IHRydWUsXG4gIHN1YnRyZWU6IHRydWVcbn07XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE11dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5IHtcbiAgY3JlYXRlKGNhbGxiYWNrOiBNdXRhdGlvbkNhbGxiYWNrKTogTXV0YXRpb25PYnNlcnZlciB8IG51bGwge1xuICAgIHJldHVybiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEVsZW1lbnRPYnNlcnZlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX29ic2VydmVkRWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX211dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5OiBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeVxuICApIHsgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy5kZXN0cm95KGVsZW1lbnQpKTtcbiAgfVxuXG4gIG9ic2VydmUoZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50PiwgZm46IE11dGF0aW9uQ2FsbGJhY2ssIG9wdGlvbnM/OiBNdXRhdGlvbk9ic2VydmVySW5pdCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50T3JSZWYgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudE9yUmVmLm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50T3JSZWY7XG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLl9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeS5jcmVhdGUoZm4pO1xuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb3B0aW9ucyB8fCBNVVRBVElPTl9PQlNFUlZFUl9JTklUKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgT2JzZXJ2ZXJcbiAgICovXG4gIGRlc3Ryb3koZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50Pikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50T3JSZWYgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudE9yUmVmLm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50T3JSZWY7XG4gICAgaWYgKHRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KS5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3Rpb25Ub2tlbiIsIlZpZXdFbmNhcHN1bGF0aW9uIiwiSW5qZWN0YWJsZSIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiUmVuZGVyZXJGYWN0b3J5MiIsIkRPQ1VNRU5UIiwiaXNEZXZNb2RlIiwiRGlyZWN0aXZlIiwiVmlld0NvbnRhaW5lclJlZiIsIklucHV0IiwiTmdNb2R1bGUiLCJFbGVtZW50UmVmIiwiZnJvbUV2ZW50IiwiYXVkaXRUaW1lIiwibWFwIiwic2hhcmUiLCJlbXB0eSIsIkNvbXBvbmVudCIsIkhvc3RMaXN0ZW5lciIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIkNvbW1vbk1vZHVsZSIsIlN1YmplY3QiLCJFdmVudEVtaXR0ZXIiLCJkZWJvdW5jZVRpbWUiLCJOZ1pvbmUiLCJSZW5kZXJlcjIiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIk91dHB1dCIsInRzbGliXzEuX19leHRlbmRzIiwiSGFtbWVyR2VzdHVyZUNvbmZpZyIsIlN1YnNjcmlwdGlvbiIsIkluamVjdG9yIiwidHNsaWJfMS5fX2Fzc2lnbiIsIlRlbXBsYXRlUmVmIiwiQXBwbGljYXRpb25SZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsYUFBZ0IsY0FBYyxDQUFDLFFBQVE7O1FBQ3JDLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7UUFDOUMsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztRQUM5QyxJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O1FBQzlDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDekM7Ozs7OztBQ05EO0lBQ0EsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDOztJQUV2QixJQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQzs7SUFDbEMsSUFBTSx3QkFBd0IsR0FBRyxJQUFJLENBQUM7O0lBQ3RDLElBQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDOztBQUN4QyxRQUFhLE9BQU8sR0FBRztRQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQzNDLENBQUM7Ozs7OztBQUNGLGFBQWdCLHVCQUF1QixDQUFDLFNBQThCLEVBQUUsS0FBYztRQUE5QywwQkFBQTtZQUFBLGFBQThCOztRQUFFLHNCQUFBO1lBQUEsY0FBYzs7O1FBQ3BGLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFDNUIsSUFBTSxNQUFNLEdBQUc7WUFDYixLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ3hDLEtBQUssQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEdBQUcsRUFBRTtTQUM5QyxDQUFDOztRQUNGLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7UUFFN0IsT0FBTyxnQkFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBRyxDQUFDO0tBRXZMOzs7Ozs7QUFFRCxhQUFnQixhQUFhLENBQUMsU0FBMEIsRUFBRSxLQUFjOztRQUN0RSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFDM0QsSUFBTSxNQUFNLEdBQUc7WUFDYixLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsR0FBRyxFQUFFO1lBQ3hDLEtBQUssQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEdBQUcsRUFBRTtTQUM5QyxDQUFDOztRQUNGLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7UUFFN0IsT0FBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBRyxDQUFDO0tBRTVLOzs7Ozs7QUN6REQ7QUFFQSxRQUFhLGVBQWUsR0FBRyxJQUFJQSxpQkFBYyxDQUFtQixvQkFBb0IsQ0FBQyxDQUFDOztBQUMxRixRQUFhLGFBQWEsR0FBRyxJQUFJQSxpQkFBYyxDQUFPLFlBQVksQ0FBQzs7Ozs7OztJQ0FuRSxJQUFNLGtCQUFrQixJQUFJLFFBQU8sSUFBSSxDQUFDLEtBQUssV0FBVyxJQUFJLG1CQUFDLElBQVcsR0FBRSxlQUFlLENBQUMsQ0FBQzs7Ozs7Ozs7OztZQVF6RixZQUFPLFFBQVEsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakUsZUFBVSxRQUFRLENBQUMsU0FBUyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBRzVFLGFBQVEsUUFBUSxDQUFDLFNBQVM7aUJBQ3JCLENBQUMsRUFBRSxtQkFBQyxNQUFhLEdBQUUsTUFBTSxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7OztZQUkvRixjQUFTLFFBQVEsQ0FBQyxTQUFTO2dCQUN2QixjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7OztZQUczRixXQUFNLFFBQVEsQ0FBQyxTQUFTLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFDLE1BQWEsR0FBRSxRQUFRLENBQUM7Ozs7O1lBTXRHLGVBQVUsUUFBUSxDQUFDLFNBQVMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztZQUdqRixlQUFVLFFBQVEsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDOzs7O1lBS3RGLGNBQVMsUUFBUSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDOztRQTdCbEYscUJBQXFDLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO3VCQVRsRjs7Ozs7Ozs7Ozs7O0FDQUE7QUFJQSxRQUFhLHlCQUF5QixHQUFHLElBQUlBLGlCQUFjLENBQXdCLDJCQUEyQixDQUFDLENBQUM7O0FBQ2hILFFBQWEsUUFBUSxHQUFHLElBQUlBLGlCQUFjLENBQThCLGlCQUFpQixDQUFDLENBQUM7O0FBQzNGLFFBQWEsYUFBYSxHQUFHLElBQUlBLGlCQUFjLENBQVMsZUFBZSxDQUFDOztJQ054RTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsYUFBZ0IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsU0FBUyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7QUFFRCxJQUFPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztvQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNaLENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQTtBQUVELGFBNkVnQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7Z0JBQy9CO1lBQ0osSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO29CQUNPO2dCQUFFLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFBRTtTQUNwQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztBQUVELGFBQWdCLFFBQVE7UUFDcEIsS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDOUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7Ozs7UUNoSUQ7Ozs7Ozs7UUEyQkUsOEJBQU87Ozs7WUFBUCxVQUFRLEtBQWE7O2dCQUNuQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQzNDLE9BQVUsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksUUFBSyxDQUFDO2FBQzVEOzs7Ozs7UUFDRCw4QkFBTzs7Ozs7WUFBUCxVQUFRLEtBQWEsRUFBRSxRQUFpQjtnQkFDdEMsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNuQzs7Ozs7UUFDRCxvQ0FBYTs7OztZQUFiLFVBQWMsR0FBVztnQkFDdkIsT0FBTyxhQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFFLENBQUM7YUFDakQ7Ozs7O1FBRUQsbUNBQVk7Ozs7WUFBWixVQUFhLEdBQW9CO2dCQUMvQixJQUFJLEdBQUcsS0FBSyxLQUFLLEVBQUU7b0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztpQkFDcEQ7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO2lCQUNwRDthQUNGOzJCQXRESDtRQXVEQyxDQUFBO0FBN0NEOzs7Ozs7O0lBcURBLFNBQVMsR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUF1QixFQUFFLFFBQWdCOztRQUNqRSxJQUFNLEtBQUssR0FBYSxJQUFJLFlBQVksS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUNyQyxJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsR0FBRyxHQUFHLFNBQVMsQ0FBQzthQUNqQjtpQkFBTTs7Z0JBRUwseUJBQU8sSUFBYyxFQUFDO2FBQ3ZCO1NBQ0Y7UUFDRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQix5QkFBTyxHQUFhLEVBQUM7U0FDdEI7YUFBTSxJQUFJLFFBQVEsRUFBRTtZQUNuQixPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZCOztLQUVGOzs7Ozs7QUFFRCxhQUFnQixTQUFTLENBQUMsR0FBb0IsRUFBRSxFQUEyRDtRQUN6RyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTs7WUFDM0IsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7Z0JBQ2xELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUMzQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7O2dCQUM5QixJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUMzQixJQUFJLEdBQUcsRUFBRTtvQkFDUCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUM1QixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDdkQ7aUJBQ0Y7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDM0M7YUFDRjtTQUNGO2FBQU07WUFDTCxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0Y7Ozs7OztBQUtELGFBQWdCLFFBQVEsQ0FBQyxJQUFJO1FBQzNCLFFBQVEsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7S0FDbkU7Ozs7Ozs7QUFZRCxhQUFnQixTQUFTLENBQUMsTUFBTTtRQUFFLGlCQUFVO2FBQVYsVUFBVSxFQUFWLHFCQUFVLEVBQVYsSUFBVTtZQUFWLGdDQUFVOzs7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPLE1BQU0sQ0FBQztTQUFFOztRQUN2QyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFL0IsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hDLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUN4QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBSSxHQUFDLEdBQUcsSUFBRyxFQUFFLE1BQUcsQ0FBQztxQkFBRTtvQkFDM0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDckM7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQUksR0FBQyxHQUFHLElBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUM7aUJBQy9DO2FBQ0Y7U0FDRjtRQUVELE9BQU8sU0FBUyx5QkFBQyxNQUFNLEdBQUssT0FBTyxHQUFFO0tBQ3RDOzs7Ozs7QUN6SUQ7UUFtQkUsbUJBQ2dDLFdBQXdDLEVBQ3ZCLGVBQTRCLEVBQ25FLGlCQUNVLFNBQWM7WUFKbEMsaUJBd0NDO1lBckNTLG9CQUFlLEdBQWYsZUFBZTtZQU56QixjQUFrQixJQUFJLEdBQUcsRUFBVSxDQUFDOzZCQUNoQixJQUFJLEdBQUcsRUFBMEI7NkJBQ2pDLElBQUksR0FBRyxFQUFrQztZQU8zRCxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDdkM7WUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtnQkFDeEQsRUFBRSxFQUFFLElBQUk7Z0JBQ1IsYUFBYSxFQUFFQyxvQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxNQUFNLEVBQUUsRUFBRTtnQkFDVixJQUFJLEVBQUUsRUFBRTthQUNULENBQUMsQ0FBQztZQUNILElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTs7Z0JBQ3RCLElBQU0sS0FBSyxHQUFhLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xFLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7O3dCQUNqRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNsQyxtQkFBQyxTQUFTLENBQUMsSUFBdUIsR0FBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzFEO2lCQUNGO2FBQ0Y7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzlDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDOUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7b0JBQ3RCLElBQUksZUFBZSxFQUFFO3dCQUNuQixTQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO3FCQUNsQztvQkFDRCxLQUFJLENBQUMsR0FBRyxtQkFBQyxJQUFXLEVBQUMsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM1QixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxJQUFJLGVBQWUsRUFBRTtvQkFDbkIsU0FBUyxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQztpQkFDekM7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsbUJBQUMsV0FBa0IsRUFBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7U0FDRjs7Ozs7Ozs7OztRQU1ELHVCQUFHOzs7OztZQUFILFVBQUksS0FBcUI7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQzNDOzs7OztRQUVELHVCQUFHOzs7O1lBQUgsVUFBSSxJQUFZO2dCQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakM7Ozs7O1FBQ0QsK0JBQVc7Ozs7WUFBWCxVQUFZLElBQVk7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakM7Ozs7Ozs7O1FBRUQsbUNBQWU7Ozs7Ozs7WUFBZixVQUFnQixPQUFZLEVBQUUsUUFBbUIsRUFBRSxZQUFvQixFQUFFLFlBQXFCO2dCQUM1RixJQUFJLFlBQVksRUFBRTtvQkFDaEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7aUJBQzdDO2dCQUNELFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQzFDOztvQkEzRUZDLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dEQVdJQyxXQUFRLFlBQUlDLFNBQU0sU0FBQyxRQUFRO3dEQUMzQkQsV0FBUSxZQUFJQyxTQUFNLFNBQUMseUJBQXlCO3dCQXJCQ0MsbUJBQWdCO3dEQXVCN0RELFNBQU0sU0FBQ0UsV0FBUTs7Ozt3QkF2QnBCOzs7Ozs7O0FDQUE7SUFPQSxJQUFNLGFBQWEsR0FBRztRQUNwQixTQUFTLEVBQUU7WUFDVCxzQkFBc0IsRUFBRTtnQkFDdEIsb0JBQW9CLEVBQUUsWUFBWTtnQkFDbEMsaUJBQWlCLEVBQUUsWUFBWTtnQkFDL0IsWUFBWSxFQUFFLFlBQVk7YUFDM0I7U0FDRjtLQUNGLENBQUM7O0lBRUYsSUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDOzs7UUFHbEMsV0FBUTtRQUNSLFVBQU87O3dCQURQLFFBQVE7d0JBQ1IsT0FBTzs7SUFHVCxJQUFNLFVBQVUsR0FBd0IsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7SUFxQmxELElBQU0sV0FBVyxHQUliLEVBQUUsQ0FBQzs7SUFDUCxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7O0lBQzFCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQzs7O1lBU2xCLGNBRUksRUFBRSxDQUFDO1lBQ1AsdUJBQWtCLElBQUksR0FBRyxFQUF1QixDQUFDOzs7b0JBUGxESixhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7K0JBMUREOzs7UUE4RUUsa0JBQ1Usa0JBQ0QsTUFDZ0IsU0FBUyxFQUNOLFNBQWM7WUFIaEMscUJBQWdCLEdBQWhCLGdCQUFnQjtZQUNqQixTQUFJLEdBQUosSUFBSTtZQUVlLGNBQVMsR0FBVCxTQUFTLENBQUs7WUFWMUMsb0JBQWUsSUFBSSxHQUFHLEVBQXlCLENBQUM7WUFZOUMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QjtTQUNGO1FBYkQsc0JBQUksNkJBQU87OztnQkFBWDtnQkFDRSxPQUFPLFdBQVcsQ0FBQzthQUNwQjs7O1dBQUE7Ozs7O1FBWUQsNkJBQVU7Ozs7WUFBVixVQUFXLFNBQWlCO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBcUIsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU07MEJBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDOzBCQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7b0JBQ3RELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7d0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7cUJBQ3RDO29CQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2lCQUMxQjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztRQVNELDJCQUFROzs7Ozs7Ozs7WUFBUixVQUFTLEVBQVUsRUFBRSxLQUFrRixFQUFFLEVBQVEsRUFBRSxRQUFpQixFQUFFLFFBQWlCOztnQkFDckosSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLG9CQUFFLEtBQVksR0FBRSxRQUFRLENBQUMsQ0FBQztnQkFDekQsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO29CQUN6QixPQUFPLFFBQVEsQ0FBQztpQkFDakI7Z0JBQ0QsSUFBSSxFQUFFLEVBQUU7b0JBQ04sSUFBSSxRQUFRLEVBQUU7d0JBQ1osRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQy9CO29CQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM1QjtnQkFDRCxPQUFPLFFBQVEsQ0FBQzthQUNqQjs7Ozs7Ozs7UUFDTyxrQ0FBZTs7Ozs7OztzQkFBQyxPQUFZLEVBQUUsUUFBbUIsRUFBRSxZQUFvQixFQUFFLFlBQXFCO2dCQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzs7Ozs7Ozs7O1FBRTNFLDhCQUFXOzs7Ozs7O1lBQVgsVUFBWSxPQUFZLEVBQUUsUUFBbUIsRUFBRSxRQUFnQixFQUFFLFFBQWlCO2dCQUNoRixJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7b0JBQ3pCLE9BQU8sUUFBUSxDQUFDO2lCQUNqQjtnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxPQUFPLFFBQVEsQ0FBQzthQUNqQjs7Ozs7UUFDRCwyQkFBUTs7OztZQUFSLFVBQVMsR0FBVztnQkFBcEIsaUJBYUM7Z0JBWkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7b0JBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0VBQXdFLENBQUMsQ0FBQztpQkFDM0Y7Z0JBQ0QsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLEdBQUc7O3dCQUMzQixJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUU7NEJBQzNCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7eUJBQzVGO3FCQUNGLENBQUMsQ0FBQztpQkFDSjthQUNGOzs7Ozs7Ozs7UUFPTyx5QkFBTTs7Ozs7Ozs7c0JBQUMsRUFBVSxFQUFFLEdBQTZCLEVBQUUsUUFBZ0IsRUFBRSxLQUFjOztnQkFDeEYsSUFBTSxLQUFLLEdBQUcsT0FBSyxFQUFJLENBQUM7Z0JBQ3hCLHlCQUFPLElBQUksQ0FBQyxvQkFBb0IsbUJBQUMsR0FBVSxHQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFXLEVBQUM7Ozs7O1FBRW5HLG9DQUFpQjs7OztnQkFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztRQWFwQyxnQ0FBYTs7Ozs7Ozs7WUFBYixVQUFpQixNQUFvQyxFQUFFLEVBQW9CLEVBQUUsUUFBaUI7Z0JBQzVGLElBQUlLLFlBQVMsRUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUU7b0JBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWUsRUFBRSwyRkFBeUYsQ0FBQyxDQUFDO2lCQUMxSDtnQkFDRCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLG9CQUFFLEVBQVMsR0FBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25GOzs7Ozs7Ozs7OztRQUVPLHVDQUFvQjs7Ozs7Ozs7OztzQkFDMUIsTUFBOEIsRUFDOUIsRUFBNEIsRUFDNUIsUUFBZ0IsRUFDaEIsSUFBZSxFQUNmLGNBQXdCLEVBQ3hCLEtBQWM7O2dCQUVkLElBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxTQUFTLENBQUMsT0FBTyxxQkFBRyxFQUFZLElBQUcsTUFBTSxDQUFDOztnQkFDakUsSUFBSSxVQUFVLENBQVU7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMxQixVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUNsQixVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTt3QkFDcEIsUUFBUSxFQUFFLElBQUksS0FBSyxTQUFTLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxRQUFRLEtBQUssS0FBSyxDQUFDLElBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxxQkFBRyxFQUFZLElBQUcsUUFBUTt3QkFDekgsTUFBTSxRQUFBO3dCQUNOLElBQUksTUFBQTt3QkFDSixHQUFHLEVBQUUsRUFBRTtxQkFDUixDQUFDLENBQUM7aUJBQ0o7O2dCQUNELElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUN2QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDOztnQkFDcEMsSUFBTSxTQUFTLEdBQUcsVUFBVSxJQUFJLEVBQUUsUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDM0UsSUFBSSxTQUFTLElBQUksY0FBYyxFQUFFOzs7O29CQUUvQixJQUFJLEdBQUcsVUFBQztvQkFDUixJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRTt3QkFDaEMsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7d0JBQzlCLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDdEYsSUFBSSxDQUFDLGNBQWMsRUFBRTs0QkFDbkIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7eUJBRS9CO3FCQUNGO3lCQUFNOzt3QkFFTCxHQUFHLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLG9CQUFFLEtBQWUsR0FBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3BGLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO3FCQUNwQjtvQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDekQ7O29CQUNELElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQyxJQUFJLGNBQWMsRUFBRTt3QkFDbEIsRUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7cUJBQ3BCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3FCQUNuRjtpQkFDRjtxQkFBTTs7Ozs7b0JBS0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFOzt3QkFDN0IsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDO3dCQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQ3pHO2lCQUNGO2dCQUNELE9BQU8sUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7OztRQUd6Qyx3Q0FBcUI7Ozs7c0JBQUMsUUFBWTtnQkFBWix5QkFBQTtvQkFBQSxZQUFZOztnQkFDaEMsSUFBQSx1REFBZSxDQUEyQjtnQkFDbEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7O29CQUNsQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RELElBQUlBLFlBQVMsRUFBRSxFQUFFO3dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUcsUUFBVSxDQUFDLENBQUM7cUJBQ2hFO29CQUNELGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO3dCQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN6RixPQUFPLEVBQUUsQ0FBQztxQkFDWDtpQkFDRjtxQkFBTTtvQkFDTCxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3RDOztnQkFDRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDOUYsT0FBTyxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7UUFHL0IsMkJBQVE7Ozs7c0JBQUMsS0FBYTtnQkFDcEIsSUFBQSx1REFBZSxDQUEyQjs7Z0JBQ2xELElBQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7Z0JBQ3pELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFLLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7Ozs7O1FBRzNFLHNDQUFtQjs7OztzQkFBQyxHQUFXOztnQkFDckMsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztnQkFDL0QsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLFlBQVksQ0FBQzs7Ozs7O1FBR2QsMENBQXVCOzs7O3NCQUFDLFNBQWlCO2dCQUMvQyxJQUFJLEVBQUUsU0FBUyxJQUFJLFdBQVcsQ0FBQyxFQUFFO29CQUMvQixXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUM3Qjs7O29CQWpOSkwsYUFBVTs7Ozs7d0JBYW1CLGdCQUFnQjt3QkE3RXJDLFNBQVM7d0RBK0ViRSxTQUFNLFNBQUMsYUFBYTt3REFDcEJBLFNBQU0sU0FBQ0UsV0FBUTs7O3VCQWxGcEI7Ozs7Ozs7Ozs7O0lBaVNBLFNBQVMsa0JBQWtCLENBQ3pCLFFBQW1CLEVBQ25CLE1BQWUsRUFDZixTQUFpQixFQUNqQixFQUFVLEVBQ1YsU0FBb0IsRUFDcEIsS0FBYztRQUVkLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxPQUFPLEVBQUU7O1lBRW5DLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhO2tCQUN0QyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGlCQUFpQixFQUFFLENBQUM7a0JBQ2xFLFFBQVEsQ0FBQyxPQUFPO3NCQUNkLFFBQVEsQ0FBQyxPQUFPO3NCQUNoQixRQUFRLENBQUMsT0FBTyxHQUFHLGlCQUFpQixFQUFFLENBQUM7WUFDM0MsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7O2dCQUM5QixJQUFNLEdBQUcsR0FBRyxNQUFJLFNBQVMsU0FBSSxNQUFNLE1BQUcsQ0FBQztnQkFDdkMsT0FBTyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDMUM7aUJBQU07O2dCQUNMLElBQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxFQUFFLEVBQUUsTUFBTSxvQkFBRSxTQUFnQixFQUFDLENBQUM7Z0JBQzFELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjs7UUFFRCxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDOztRQUNyRSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztnQkFFOUIsSUFBTSxnQkFBZ0IsR0FBRyxHQUFHLElBQUksVUFBVTtzQkFDeEMsVUFBVSxDQUFDLEdBQUcsQ0FBQztzQkFDZixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUdDLFlBQVMsRUFBRSxHQUFHLGdCQUFnQixDQUFDLFNBQU8sR0FBRyxTQUFJLGlCQUFpQixFQUFJLENBQUMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDOztnQkFDOUcsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTs7b0JBQzdCLElBQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLG9CQUFFLEtBQWdCLEdBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFDckUsT0FBTyxJQUFJLEtBQUssQ0FBQztpQkFDbEI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDdkM7YUFDRjtTQUNGO1FBQ0QsT0FBTyxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ3pDOzs7Ozs7SUFFRCxTQUFTLFdBQVcsQ0FBQyxHQUFXLEVBQUUsSUFBWTtRQUM1QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDM0MsT0FBTyxNQUFJLElBQUksQ0FBQyxLQUFLLENBQUcsQ0FBQztTQUMxQixDQUNBLENBQUM7S0FDSDs7Ozs7Ozs7O0lBS0QsU0FBUyxhQUFhLENBQUMsR0FBVyxFQUFFLEVBQVUsRUFBRSxVQUFrQixFQUFFLFNBQWtCOztRQUNwRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7O1FBQ2pCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQzs7UUFDcEIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDOztRQUNyQixJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksU0FBUyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDL0MsTUFBTSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzlDO2FBQU0sSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQzVCLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDZDthQUFNLElBQUksU0FBUyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFELE1BQU0sR0FBRyxLQUFHLFVBQVksQ0FBQztTQUMxQjthQUFNLElBQUksU0FBUyxFQUFFO1lBQ3BCLE1BQU0sR0FBTSxTQUFTLFNBQUksVUFBWSxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxNQUFNLEdBQUcsTUFBSSxVQUFZLENBQUM7U0FDM0I7UUFDRCxLQUFLLElBQU0sUUFBUSxJQUFJLEVBQUUsRUFBRTtZQUN6QixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7O2dCQUMvQixJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdCLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO29CQUMvQixVQUFVLElBQUksYUFBYSxDQUFDLEdBQUcsb0JBQUUsT0FBa0IsR0FBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ3hFO3FCQUFNOztvQkFDTCxJQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEQsV0FBVyxJQUFPLFdBQVcsU0FBSSxPQUFPLE1BQUcsQ0FBQztpQkFDN0M7YUFDRjtTQUNGO1FBQ0QsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLElBQUksS0FBRyxNQUFRLENBQUM7Z0JBQ3ZCLFdBQVcsR0FBTSxTQUFTLFNBQUksV0FBVyxNQUFHLENBQUM7YUFDOUM7aUJBQU0sSUFBSSxTQUFTLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDL0MsT0FBTyxJQUFJLEtBQUcsVUFBWSxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxLQUFHLE1BQVEsQ0FBQzthQUN4QjtZQUNELE9BQU8sSUFBSSxNQUFJLFdBQVcsTUFBRyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxPQUFPLEdBQUcsVUFBVSxDQUFDO0tBQzdCOzs7OztBQUVELGFBQWdCLFlBQVksQ0FBQyxHQUFXO1FBQ3RDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxNQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUksR0FBQSxDQUFDLENBQUM7S0FDakU7Ozs7O0lBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFXOztRQUNuQyxJQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFVBQUEsQ0FBQztZQUN4QyxPQUFPLE1BQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUcsQ0FBQztTQUM5QixDQUFDLENBQUM7UUFDSCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN4Qjs7Ozs7SUFFRCxTQUFTLGlCQUFpQixDQUFDLEdBQVc7UUFDcEMsT0FBTyxHQUFHLElBQUksY0FBYztjQUMxQixjQUFjLENBQUMsR0FBRyxDQUFDO2NBQ25CLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDM0M7Ozs7O0FBRUQsYUFBZ0IscUJBQXFCLENBQUMsR0FBVztRQUMvQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVDOzs7Ozs7SUFFRCxTQUFTLE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUN6QyxPQUFPLFlBQVUsS0FBSyxTQUFJLEdBQUcsTUFBRyxDQUFDO0tBQ2xDOzs7O0lBRUQsU0FBUyxpQkFBaUI7UUFDeEIsT0FBTyxNQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBRyxDQUFDO0tBQzNDOzs7Ozs7QUMzWkQ7UUEyQkUsK0JBQW9CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7UUFabkQsc0JBQ0ksK0NBQVk7OztnQkFPaEI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQzNCOzs7O2dCQVZELFVBQ2lCLFdBQTZCO2dCQUM1QyxJQUFJLFdBQVcsRUFBRTtvQkFDZixJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztvQkFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDL0M7YUFDRjs7O1dBQUE7Ozs7UUFPRCwyQ0FBVzs7O1lBQVg7Z0JBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN4Qjs7b0JBdEJGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtxQkFDM0I7Ozs7O3dCQVRnQ0MsbUJBQWdCOzs7O21DQWM5Q0MsUUFBSzs7b0NBZlI7Ozs7OztvQkFnQ0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDaEMsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7cUJBQ3RDOztpQ0FuQ0Q7Ozs7Ozs7Ozs7O0lDQUEsU0FBUyxRQUFRLENBQUMsR0FBUTtRQUN0QixPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUM7S0FDN0M7Ozs7O0lBRUQsU0FBUyxTQUFTLENBQUMsSUFBUztRQUN4QixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUMxRTs7Ozs7QUFDRCxhQUFnQixhQUFhLENBQUMsSUFBaUI7O1FBQzNDLElBQUksT0FBTyxDQUNpQjs7UUFENUIsSUFBa0IsR0FBRyxDQUNPOztRQUQ1QixJQUNJLEdBQUcsR0FBRyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDOztRQUM1QixJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV2QyxPQUFPLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQztRQUU5QixJQUFJLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixLQUFLLE9BQU8sU0FBUyxFQUFFO1lBQ3hELEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUN0QztRQUNELEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsT0FBTztZQUNILEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVM7WUFDbEQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVTtTQUN4RCxDQUFDO0tBQ0w7Ozs7Ozs7Ozs7QUN0QkQsYUFBZ0IsU0FBUyxDQUFDLEtBQVU7UUFDbEMsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUcsS0FBTyxLQUFLLE9BQU8sQ0FBQztLQUNoRDs7Ozs7QUFFRCxhQUFnQixTQUFTO1FBQ3ZCLE9BQU8sVUFBQyxNQUFjLEVBQUUsR0FBVzs7WUFDakMsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNoRSxJQUFJLFVBQVUsRUFBRTtnQkFDZCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7b0JBQ2pDLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRztvQkFDbkIsR0FBRyxFQUFFLFVBQUEsUUFBUTt3QkFDWCxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3FCQUNyQztvQkFDRCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsWUFBWSxFQUFFLElBQUk7aUJBQ25CLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtvQkFDakMsR0FBRyxFQUFFO3dCQUNILE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztxQkFDekI7b0JBQ0QsR0FBRyxFQUFFLFVBQVUsUUFBUTt3QkFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3hDO29CQUNELFVBQVUsRUFBRSxJQUFJO29CQUNoQixZQUFZLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO2FBQ0o7U0FDRixDQUFDO0tBQ0g7Ozs7Ozs7Ozs7O0FDN0JELGFBQWdCLFlBQVksQ0FBQyxLQUFzQixFQUFFLFlBQTZCO1FBQ2hGLE9BQU8sS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLFlBQVksQ0FBQztLQUNoRTs7Ozs7Ozs7Ozs7QUNGRDtJQUtBLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQUMxQixJQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7O1FBdUN2QixrQkFDVSxPQUNBO1lBREEsVUFBSyxHQUFMLEtBQUs7WUFDTCxlQUFVLEdBQVYsVUFBVTtTQUNmO1FBZEwsc0JBQWEsNEJBQU07OztnQkFDbkIsY0FBZSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTs7OztnQkFEckMsVUFBb0IsR0FBWSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7OztXQUFBO1FBR3BFLHNCQUFhLDhCQUFROzs7Z0JBQ3JCLGNBQWlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzs7O2dCQUR6QyxVQUFzQixHQUFZLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs7O1dBQUE7UUFHeEUsc0JBQWEsOEJBQVE7OztnQkFDckIsY0FBaUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Ozs7Z0JBRHpDLFVBQXNCLEdBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOzs7V0FBQTs7OztRQVVqRSxrQ0FBZTs7OztnQkFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Ozs7O1FBRzVCLDhCQUFXOzs7WUFBWDs7Z0JBQ0UsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7Z0JBQ3JCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7O2dCQUMzQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDOztnQkFDN0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Z0JBQ25DLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7O2dCQUNqQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDOztnQkFDakMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Z0JBQ3ZDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLEtBQUssTUFBTSxDQUFDOztnQkFDN0YsSUFBTSxNQUFNLEdBQUcsaUJBQ2IsSUFBSSxJQUFJLGFBQWEsZ0JBQ25CLE9BQU8sSUFBSSxhQUFhLGdCQUN0QixRQUFRLElBQUksYUFBYSxnQkFDdkIsV0FBVyxJQUFJLGFBQWEsZ0JBQzFCLFVBQVUsSUFBSSxhQUFhLGdCQUN6QixVQUFVLElBQUksYUFBYSxnQkFDekIsYUFBYSxJQUFJLGFBQWEsZ0JBQzVCLFlBQVksSUFBSSxhQUFhLENBQUUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLOztvQkFDbEQsSUFBTSxLQUFLLEdBWVAsRUFBRSxDQUFDO29CQUNQLElBQUksVUFBVSxFQUFFO3dCQUNkLEtBQUssQ0FBQyxNQUFNLEdBQUcsd0JBQXdCLENBQUM7cUJBQ3pDO29CQUNELElBQUksVUFBVSxFQUFFO3dCQUNkLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ2xDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO3dCQUM3QixJQUFJLElBQUksRUFBRTs0QkFDUixLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO3lCQUMxQztxQkFDRjt5QkFBTTt3QkFDTCxJQUFJLElBQUksRUFBRTs0QkFDUixLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3ZDLElBQUksWUFBWSxFQUFFO2dDQUNoQixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUksSUFBSSxjQUFXLENBQUMsQ0FBQzs2QkFDakQ7eUJBQ0Y7d0JBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksT0FBTyxFQUFFOzRCQUMzQixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ3RDO3dCQUNELElBQUksUUFBUSxJQUFJLFdBQVcsRUFBRTs0QkFDM0IsSUFBSSxDQUFDLElBQUksRUFBRTtnQ0FDVCxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzs2QkFDckQ7OzRCQUNELElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksb0JBQW9CLEVBQUUsUUFBUSxDQUFDLENBQUM7OzRCQUM5RyxJQUFNLFdBQVcsR0FBRyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLGtCQUFrQixJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDOzRCQUM3SSxLQUFLLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDOzRCQUMvRCxJQUFJLENBQUMsV0FBVyxFQUFFO2dDQUNoQixLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUc7b0NBQ2xCLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQztpQ0FDekMsQ0FBQzs2QkFDSDt5QkFDRjtxQkFDRjtvQkFDRCx5QkFBTyxLQUFZLEVBQUM7aUJBQ3JCLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDN0Q7Ozs7UUFFTyxrQ0FBZTs7OztnQkFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQzs7O29CQXBIeENILFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ1NBV0M7cUJBQ1o7Ozs7O3dCQXBCUSxRQUFRO3dCQURxQkksYUFBVTs7Ozt5QkE4QjdDRixRQUFLOzRCQUVMQSxRQUFLOzZCQUVMQSxRQUFLOytCQUdMQSxRQUFLOytCQUdMQSxRQUFLO2dDQUdMQSxRQUFLO2tDQUNMQSxRQUFLOzt1QkE1Q1I7Ozs7Ozs7QUNBQTtRQWNFLHFCQUNVO1lBQUEsT0FBRSxHQUFGLEVBQUU7U0FDUDtRQVRMLHNCQUNJLGtDQUFTOzs7O2dCQURiLFVBQ2MsR0FBVztnQkFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDUixNQUFNLElBQUksS0FBSyxDQUFDLE1BQUksR0FBRyw2QkFBMEIsQ0FBQyxDQUFDO2lCQUNwRDtnQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzFDOzs7V0FBQTs7b0JBWEZGLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTtxQkFDeEI7Ozs7O3dCQUptQkksYUFBVTs7OztnQ0FPM0JGLFFBQUs7OzBCQVBSOzs7Ozs7O0FDQUE7Ozs7b0JBS0NDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO3dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDO3FCQUNqQzs7NkJBUkQ7Ozs7Ozs7QUNBQTtBQUdBLFFBQWEsZ0JBQWdCLEdBQUc7UUFDOUIsSUFBSSxFQUFFO1lBQ0osUUFBUSxFQUFFLFVBQVU7WUFDcEIsR0FBRyxFQUFFLENBQUM7WUFDTixNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLENBQUM7U0FDVDtRQUNELGNBQWMsRUFBRTtZQUNkLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxFQUFFLGVBQWU7WUFDckIsTUFBTSxFQUFFLEtBQUs7WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLFVBQVU7WUFDcEIsS0FBSyxFQUFFLEtBQUs7WUFDWixPQUFPLEVBQUUsQ0FBQztZQUNWLG9CQUFvQixFQUFFLE1BQU07WUFDNUIsaUJBQWlCLEVBQUUsTUFBTTtTQUMxQjtLQUNGLENBQUM7O1FBS0Esc0JBQW9CLEtBQWU7WUFBZixVQUFLLEdBQUwsS0FBSyxDQUFVO1lBRG5DLGVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNiOztvQkFIekNULGFBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7O3dCQXpCekIsUUFBUTs7OzsyQkFEakI7Ozs7Ozs7QUNBQTtJQVNBLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUI7UUFBSyxRQUFDO1lBQ3pDLGVBQWUsRUFBRTtnQkFDZixRQUFRLEVBQUUsT0FBTztnQkFDakIsR0FBRyxFQUFFLENBQUM7Z0JBQ04sSUFBSSxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTzthQUM3QjtTQUNGO0lBVHlDLENBU3hDLENBQUM7O1FBVUQsNkJBQzRCLFFBQWE7WUFEekMsaUJBY0M7WUFiMkIsYUFBUSxHQUFSLFFBQVEsQ0FBSztZQUV2QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUdXLGNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM3Q0MsbUJBQVMsQ0FBQyxHQUFHLENBQUMsRUFDZEMsYUFBRyxDQUFDO29CQUNGLE9BQU8sTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7aUJBQ2xFLENBQUMsRUFDRkMsZUFBSyxFQUFFLENBQ1IsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLEdBQUdDLFVBQUssRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7O29CQXJCRmYsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7d0RBTUlFLFNBQU0sU0FBQ0UsV0FBUTs7OztrQ0E3QnBCOzs7UUFxREUsNEJBQ1U7WUFBQSxVQUFLLEdBQUwsS0FBSzs0QkFMSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7MEJBRWxDLElBQUksR0FBRyxFQUFPO1lBSzdCLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTs7Z0JBQ3RCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDakUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7YUFDcEM7U0FDRjtRQUNELHNCQUFJLGdEQUFnQjs7O2dCQUFwQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzthQUMvQjs7O1dBQUE7Ozs7Ozs7Ozs7O1FBTUQsaUNBQUk7Ozs7OztZQUFKLFVBQUssSUFBSTtnQkFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hCOzs7Ozs7Ozs7OztRQU1ELG9DQUFPOzs7Ozs7WUFBUCxVQUFRLElBQUk7Z0JBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoQjs7Ozs7O1FBTU8sb0NBQU87Ozs7OztnQkFDYixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO29CQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO3dCQUNuQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO3dCQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO3FCQUNyRTtpQkFDRjtxQkFBTSxJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtvQkFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDdkUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztpQkFDeEM7OztvQkF0REpKLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dCQTdDUSxRQUFROzs7O2lDQUZqQjs7O1FBK0dFLDJCQUNVLElBQ3lCLGNBQW1CLEVBQ3BELFlBQTBCO1lBRmxCLE9BQUUsR0FBRixFQUFFO1lBQ3VCLG1CQUFjLEdBQWQsY0FBYyxDQUFLO1lBR3BELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRTs7OztRQVRzQixtQ0FBTzs7O1lBQTlCO2dCQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDakM7O29CQVBGZ0IsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFFBQVEsRUFBRSxFQUFFO3FCQUNiOzs7Ozt3QkExR3FETixhQUFVO3dEQWlIM0RSLFNBQU0sU0FBQyxlQUFlO3dCQTlHbEIsWUFBWTs7Ozs4QkF5R2xCZSxlQUFZLFNBQUMsT0FBTzs7Z0NBNUd2Qjs7Ozs7OztBQ0FBO1FBZUUsb0JBQ1UsMEJBQ0E7WUFEQSw2QkFBd0IsR0FBeEIsd0JBQXdCO1lBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0I7U0FDckI7Ozs7Ozs7O1FBRUwsMkJBQU07Ozs7Ozs7WUFBTixVQUFVLHFCQUF1QyxFQUFFLFNBQWMsRUFBRSxRQUEwQjtnQkFBN0YsaUJBS0M7O2dCQUpHLElBQU0sT0FBTyxHQUFHLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUNsRTs7Ozs7UUFFRCw2QkFBUTs7OztZQUFSLFVBQVMsS0FBa0I7Z0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0Q7Ozs7O1FBRUQsa0RBQTZCOzs7O1lBQTdCLFVBQThCLFlBQStCO2dCQUMzRCx5QkFBTyxtQkFBQyxZQUFZLENBQUMsUUFBZ0M7cUJBQ3BELFNBQVMsQ0FBQyxDQUFDLENBQWdCLEVBQUM7YUFDOUI7Ozs7OztRQUVELCtCQUFVOzs7OztZQUFWLFVBQVcsWUFBK0IsRUFBRSxLQUFhO2dCQUF6RCxpQkFNQztnQkFMQyxVQUFVLENBQUM7b0JBQ1QsSUFBSSxLQUFJLENBQUMsaUJBQWlCLEVBQUU7d0JBQzFCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztxQkFDakM7aUJBQ0YsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNYOztvQkEvQkZqQixhQUFVOzs7Ozt3QkFUVGtCLDJCQUF3Qjt3QkFPakIsa0JBQWtCOzs7eUJBVDNCOzs7Ozs7O0FDQUE7Ozs7b0JBZUNULFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BVLGVBQVk7eUJBQ2I7d0JBQ0QsU0FBUyxFQUFFOzRCQUNULFVBQVU7eUJBRVg7cUJBQ0Y7OzBCQXZCRDs7Ozs7OztBQ0FBOzs7UUFPRSxTQUFVLFNBQVM7O1FBRW5CLFVBQVcsVUFBVTs7O1FBZ0JyQixzQkFDRSxVQUFzQixFQUNkLFNBQ0EsV0FDUixHQUFzQjtZQUp4QixpQkE4QkM7WUE1QlMsWUFBTyxHQUFQLE9BQU87WUFDUCxjQUFTLEdBQVQsU0FBUztZQVZuQixnQkFBVyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztrQ0FFYixJQUFJLEdBQUcsRUFBOEI7aUNBQ3RDLElBQUlDLFlBQU8sRUFBZTtZQUVsRCxxQkFBMEIsSUFBSUMsZUFBWSxFQUFlLENBQUM7bURBQ2xDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBUTtZQU81QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjO3FCQUNsQixHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNoQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUMvQixHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNyQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O2dCQUN0QyxJQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7O2dCQUtoQyxJQUFNLEVBQUUsR0FBNEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUU7O3FCQUUzQixJQUFJLENBQ0hDLHNCQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCO3FCQUNBLFNBQVMsQ0FBQyxVQUFDLENBQWM7b0JBQ3hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNmLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVCLENBQUMsQ0FBQzthQUNKO1NBQ0Y7Ozs7UUFFTyxtQ0FBWTs7Ozs7Z0JBQ2xCLElBQUksS0FBSyxDQUFDO2dCQUNWLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3ZCO3FCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ3hJLEtBQUssR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO2lCQUM3QjtxQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNyQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztpQkFDOUI7Z0JBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztRQUdqQyx5QkFBRTs7OztZQUFGLFVBQUcsS0FBMkM7Z0JBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjs7OztRQUVPLG1DQUFZOzs7Ozs7Z0JBQ2xCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7Z0JBQ3ZDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7O2dCQUN6QixJQUFNLFdBQVcsR0FBRyxVQUFDLFNBQWlCLEVBQUUsU0FBa0IsSUFBSyxPQUFBLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxHQUFBLENBQUM7Z0JBQ3hLLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxLQUFLLElBQU0sR0FBRyxJQUFJLFdBQVcsRUFBRTtvQkFDN0IsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFOzt3QkFDbkMsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQyxXQUFXLENBQUMsUUFBTSxTQUFTLGFBQVUsRUFBRSxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUM7cUJBQzdEO2lCQUNGOzs7Ozs7UUFHSCx3Q0FBaUI7Ozs7WUFBakIsVUFBa0IsT0FBMkI7Z0JBQTdDLGlCQWNDO2dCQWJDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO29CQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUUsRUFBRSxJQUFJO3dCQUNuQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQzFFLENBQUMsQ0FBQztpQkFDSjtnQkFDRCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO3dCQUM3QixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFFLElBQUk7NEJBQzFDLE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3lCQUMvRCxDQUFDLENBQUM7cUJBQ0osQ0FBQyxDQUFDO2lCQUNKO2dCQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUM7YUFDbEM7Ozs7UUFFRCxrQ0FBVzs7O1lBQVg7Z0JBQ0UsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO29CQUN0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDOUI7YUFDRjs7b0JBaEdGaEIsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxjQUFjO3FCQUN6Qjs7Ozs7d0JBZm1CSSxhQUFVO3dCQUFxQmEsU0FBTTt3QkFBRUMsWUFBUzt3QkFBcENDLG9CQUFpQjs7OztvQ0F1QjlDQyxTQUFNOzsyQkF2QlQ7Ozs7Ozs7QUNBQTs7OztvQkFLQ2pCLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BVLGVBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUM1QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3hCOztpQ0FYRDs7Ozs7Ozs7QUNBQSxRQUFhLFdBQVcsR0FBRyxPQUFPLENBQUM7O0FBQ25DLFFBQWEsZUFBZSxHQUFHLDBCQUEwQjs7Ozs7OztBQ0d6RCxRQUFhLGlCQUFpQixHQUFHLElBQUlyQixpQkFBYyxDQUFnQixtQkFBbUIsQ0FBQyxDQUFDOztJQUV4RixJQUFNLHNCQUFzQixHQUFHO1FBQzdCLE9BQU87UUFDUCxZQUFZO1FBQ1osVUFBVTtRQUNWLFlBQVk7UUFDWixXQUFXO0tBQ1osQ0FBQzs7UUFHeUM2Qix5Q0FBbUI7UUFFNUQsK0JBQ2lELGNBQTZCO1lBRDlFLFlBR0UsaUJBQU8sU0FDUjtZQUhnRCxvQkFBYyxHQUFkLGNBQWMsQ0FBZTtZQUY5RSxlQUFtQixzQkFBc0IsQ0FBQzs7U0FLekM7Ozs7O1FBQ0QsMkNBQVc7Ozs7WUFBWCxVQUFZLE9BQW9COztnQkFDOUIsSUFBTSxNQUFNLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLG1CQUFDLE1BQWEsR0FBRSxNQUFNLEdBQUcsSUFBSSxDQUFDOztnQkFDN0UsSUFBTSxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDLENBQUM7O2dCQUVqRSxJQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7Z0JBQzdCLElBQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDOztnQkFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUVqRixHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFHekIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxFQUFFLENBQUM7YUFDWDs7Ozs7Ozs7UUFHTyxpREFBaUI7Ozs7Ozs7c0JBQUMsSUFBUyxFQUFFLE9BQVk7Z0JBQUUsc0JBQXNCO3FCQUF0QixVQUFzQixFQUF0QixxQkFBc0IsRUFBdEIsSUFBc0I7b0JBQXRCLHFDQUFzQjs7O2dCQUN2RSxJQUFNLFVBQVUsR0FBRyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRW5ELFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQztnQkFFN0QsT0FBTyxVQUFVLENBQUM7OztvQkE5QnJCM0IsYUFBVTs7Ozs7d0RBSU5DLFdBQVEsWUFBSUMsU0FBTSxTQUFDLGlCQUFpQjs7O29DQWxCekM7TUFlMkMwQixtQ0FBbUI7Ozs7OztBQ2Y5RDs7Ozs7OztRQU1TLHNCQUFROzs7O1lBQWYsVUFBZ0IsU0FBaUI7Z0JBQy9CLE9BQU87b0JBQ0wsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFNBQVMsRUFBRTt3QkFDVCxDQUFDLFFBQVEsQ0FBQzt3QkFDVixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtxQkFDaEQ7aUJBQ0YsQ0FBQzthQUNIOztvQkFWRm5CLFdBQVE7OzRCQUpUOzs7Ozs7O0FDQUEsUUFBQTtRQUNFO1NBQWlCO3dCQURuQjtRQUVDLENBQUE7QUFGRDtBQUlBLFFBQWEsY0FBYyxHQUFHLElBQUksU0FBUyxFQUFFOzs7Ozs7OztRQ0gzQyxLQUFFO1FBQ0YsTUFBRzs7c0NBREgsRUFBRTtzQ0FDRixHQUFHOzs7Ozs7QUFHTCxhQUFnQixtQkFBbUIsQ0FBQyxLQUFhLEVBQUUsZ0JBQXdEO1FBQXhELGlDQUFBO1lBQUEsbUJBQXFDLGdCQUFnQixDQUFDLEVBQUU7O1FBQ3pHLElBQUksS0FBSyxJQUFJLGdCQUFnQixLQUFLLGdCQUFnQixDQUFDLEdBQUcsRUFBRTs7WUFDdEQsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxTQUFPLENBQUcsR0FBQSxDQUFDLENBQUM7WUFDckQsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7OztJQ1NELElBQUE7UUFNRSwrQkFDVSwyQkFDQSxTQUNSLFlBQThCLEVBQ3RCLG1CQUNSLFFBQWEsRUFDTCxXQUNSLFlBQWlDLEVBQ2pDLE1BQXNCO1lBUnhCLGlCQXVEQztZQXREUyw4QkFBeUIsR0FBekIseUJBQXlCO1lBQ3pCLFlBQU8sR0FBUCxPQUFPO1lBRVAsc0JBQWlCLEdBQWpCLGlCQUFpQjtZQUVqQixjQUFTLEdBQVQsU0FBUztZQVBuQix1QkFBZ0NvQixpQkFBWSxDQUFDLEtBQUssQ0FBQzs7O1lBYWpELElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFFekMsSUFBTSxRQUFRLGNBQ1osUUFBUSxFQUFFLFVBQVUsRUFDcEIsT0FBTyxFQUFFLE1BQU0sRUFDZixHQUFHLEVBQUUsQ0FBQyxFQUNOLElBQUksRUFBRSxDQUFDLEVBQ1AsS0FBSyxFQUFFLENBQUMsRUFDUixNQUFNLEVBQUUsQ0FBQyxFQUNULGNBQWMsRUFBRSxRQUFRLEVBQ3hCLFVBQVUsRUFBRSxRQUFRLElBQ2pCLE1BQU0sQ0FBQyxNQUFNLEVBQ2hCOztZQUNGLElBQU0sV0FBVyxHQUFHQyxXQUFRLENBQUMsTUFBTSxDQUFDO2dCQUNsQztvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsUUFBUSxvQkFBRUMsV0FDUixTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQy9CLE1BQU0sSUFDVCxNQUFNLEVBQUUsUUFBUSxHQUNqQixDQUFBO2lCQUNGO2FBQ0YsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7O29CQUN4RCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ2pELElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRTs7d0JBQzVELElBQU0sU0FBUyxHQUFHOzRCQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7NEJBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3lCQUNoQixDQUFDO3dCQUNGLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzlCO2lCQUNGLENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBQy9ELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBRXJFOzs7OztRQUVELDRDQUFZOzs7O1lBQVosVUFBYSxRQUFROzs7Z0JBR25CLEtBQUssSUFBTSxHQUFHLElBQUksUUFBUSxFQUFFO29CQUMxQixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7O3dCQUNoQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQy9CLElBQUksUUFBUSxFQUFFOzRCQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsR0FBTSxRQUFRLE9BQUksR0FBRyxRQUFRLENBQUM7eUJBQ3RGO3FCQUNGO2lCQUNGO2FBQ0Y7Ozs7Ozs7UUFFTyxzREFBc0I7Ozs7OztzQkFBQyxJQUFrQyxFQUFFLE9BQU8sRUFBRSxRQUFrQjs7Z0JBQzVGLElBQUksSUFBSSxZQUFZQyxjQUFXLEVBQUU7O29CQUUvQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQ3ZFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztvQkFHakMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7O29CQUd4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztvQkFDaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3ZDOzs7Ozs7O1FBR0gsaURBQWlCOzs7OztZQUFqQixVQUFrQixJQUFlLEVBQUUsUUFBa0I7O2dCQUNuRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdFLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqQzs7OztRQUVELHNDQUFNOzs7WUFBTjtnQkFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDeEM7YUFDRjs7OztRQUVELHNDQUFNOzs7WUFBTjtnQkFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztpQkFDakI7cUJBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7aUJBQ2pCO2dCQUNELElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO29CQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQy9ELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7b0JBQ3ZDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO29CQUN2RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUM1QztnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BDOzs7O1FBRUQsdUNBQU87OztZQUFQO2dCQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtvQ0FuSkg7UUFvSkMsQ0FBQTs7UUFPQyxtQkFDVSxtQkFDQSwyQkFDQSxTQUNBLFdBQ0E7WUFKQSxzQkFBaUIsR0FBakIsaUJBQWlCO1lBQ2pCLDhCQUF5QixHQUF6Qix5QkFBeUI7WUFDekIsWUFBTyxHQUFQLE9BQU87WUFDUCxjQUFTLEdBQVQsU0FBUztZQUNULGtCQUFhLEdBQWIsYUFBYTtTQUNsQjs7Ozs7OztRQUVMLDBCQUFNOzs7Ozs7WUFBTixVQUFPLFFBQTBCLEVBQUUsT0FBYSxFQUFFLE1BQXNCO2dCQUN0RSxPQUFPLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZLOztvQkFmRmhDLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3dCQXZKUSxrQkFBa0I7d0JBRHdDa0IsMkJBQXdCO3dCQUF4Q2UsaUJBQWM7d0JBQTRCSCxXQUFRO3dCQUNyRCxtQkFBbUI7Ozs7d0JBRG5FOzs7Ozs7O0FDQUE7Ozs7b0JBR0NyQixXQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7d0JBQ2pDLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO3FCQUNyQzs7OEJBTkQ7Ozs7Ozs7QUNBQTtJQUVBLElBQU0sc0JBQXNCLEdBQUc7UUFDN0IsYUFBYSxFQUFFLElBQUk7UUFDbkIsU0FBUyxFQUFFLElBQUk7UUFDZixPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUM7Ozs7Ozs7O1FBSUEsd0NBQU07Ozs7WUFBTixVQUFPLFFBQTBCO2dCQUMvQixPQUFPLE9BQU8sZ0JBQWdCLEtBQUssV0FBVyxHQUFHLElBQUksR0FBRyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hGOztvQkFKRlQsYUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7O3NDQVJoQzs7O1FBbUJFLHlCQUNVO1lBQUEsNkJBQXdCLEdBQXhCLHdCQUF3QjtxQ0FITixJQUFJLEdBQUcsRUFBb0M7U0FJbEU7Ozs7UUFFTCxxQ0FBVzs7O1lBQVg7Z0JBQUEsaUJBRUM7Z0JBREMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUN2RTs7Ozs7OztRQUVELGlDQUFPOzs7Ozs7WUFBUCxVQUFRLFlBQTJDLEVBQUUsRUFBb0IsRUFBRSxPQUE4Qjs7Z0JBQ3ZHLElBQU0sT0FBTyxHQUFHLFlBQVksWUFBWVUsYUFBVSxHQUFHLFlBQVksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO2dCQUMvRixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTs7b0JBQ3hDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzFELElBQUksUUFBUSxFQUFFO3dCQUNaLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyxDQUFDO3FCQUM5RDtvQkFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDL0M7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzVDOzs7Ozs7Ozs7UUFLRCxpQ0FBTzs7Ozs7WUFBUCxVQUFRLFlBQTJDOztnQkFDakQsSUFBTSxPQUFPLEdBQUcsWUFBWSxZQUFZQSxhQUFVLEdBQUcsWUFBWSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7Z0JBQy9GLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDeEM7YUFDRjs7b0JBakNGVixhQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7Ozt3QkFLTSx1QkFBdUI7Ozs7OEJBcEI3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9