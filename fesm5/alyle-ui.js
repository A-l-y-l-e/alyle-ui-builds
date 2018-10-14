import * as _chroma from 'chroma-js';
import { InjectionToken, Injectable, Optional, Inject, RendererFactory2, ViewEncapsulation, Directive, ElementRef, Input, NgModule, ComponentFactoryResolver, Component, HostListener, isDevMode, TemplateRef, ViewContainerRef, ChangeDetectorRef, NgZone, Renderer2, EventEmitter, Output, defineInjectable, inject, Injector, ApplicationRef, INJECTOR } from '@angular/core';
import { __extends, __spread, __assign } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import { fromEvent, empty, Subject, Subscription } from 'rxjs';
import { map, share, auditTime, debounceTime } from 'rxjs/operators';
import { HammerGestureConfig } from '@angular/platform-browser';

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
    if (elevation === void 0) { elevation = 2; }
    if (color === void 0) { color = '#000'; }
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
var THEME_VARIABLES = new InjectionToken('ly.theme.variables');
/** @type {?} */
var IS_CORE_THEME = new InjectionToken('ly.is.root');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var hasV8BreakIterator = (typeof (Intl) !== 'undefined' && (/** @type {?} */ (Intl)).v8BreakIterator);
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
            (!!((/** @type {?} */ (window)).chrome || hasV8BreakIterator) && !!CSS && !this.EDGE && !this.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        this.WEBKIT = Platform.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Browsers and Platform Types
         */
        this.IOS = Platform.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !(/** @type {?} */ (window)).MSStream;
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
var LY_THEME_GLOBAL_VARIABLES = new InjectionToken('ly.theme.global.variables');
/** @type {?} */
var LY_THEME = new InjectionToken('ly_theme_config');
/** @type {?} */
var LY_THEME_NAME = new InjectionToken('ly.theme.name');

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
            encapsulation: ViewEncapsulation.None,
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
                    (/** @type {?} */ (_document.body)).removeChild(element);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CoreTheme.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_GLOBAL_VARIABLES,] }] },
        { type: RendererFactory2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ CoreTheme.ngInjectableDef = defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(inject(LY_THEME, 8), inject(LY_THEME_GLOBAL_VARIABLES, 8), inject(RendererFactory2), inject(DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
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
var STYLE_MAP4 = {};
/** @type {?} */
var CLASSES_MAP = {};
/** @type {?} */
var STYLE_KEYS_MAP = {};
/** @type {?} */
var nextId = 0;
var StylesInDocument = /** @class */ (function () {
    function StylesInDocument() {
        this.styles = {};
        this.styleContainers = new Map();
    }
    StylesInDocument.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ StylesInDocument.ngInjectableDef = defineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
    return StylesInDocument;
}());
var LyTheme2 = /** @class */ (function () {
    function LyTheme2(stylesInDocument, core, themeName, _document) {
        this.stylesInDocument = stylesInDocument;
        this.core = core;
        this._document = _document;
        if (themeName) {
            this.setUpTheme(themeName);
        }
    }
    Object.defineProperty(LyTheme2.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
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
                : this.stylesInDocument.styles[themeName] = {};
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
        if (!Platform.isBrowser) {
            throw new Error("`theme.setTheme('theme-name')` is only available in browser platform");
        }
        if (nam !== this.config.name) {
            this.config = this.core.get(nam);
            /** @type {?} */
            var currentStyles = this.elements;
            for (var key in currentStyles) {
                if (currentStyles.hasOwnProperty(key)) {
                    /** @type {?} */
                    var styleData = STYLE_MAP4[key];
                    if (styleData.requireUpdate) {
                        this._createStyleContent2(styleData.styles, key, styleData.priority, styleData.type, true);
                    }
                }
            }
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
        this.addStyleSheet(defaultStyles, 'ly--defaultStyles');
    };
    /**
     * Add new add a new style sheet
     * @param styles styles
     * @param id unique id for style group
     */
    /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id unique id for style group
     * @param {?=} priority
     * @return {?}
     */
    LyTheme2.prototype.addStyleSheet = /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id unique id for style group
     * @param {?=} priority
     * @return {?}
     */
    function (styles, id, priority) {
        /** @type {?} */
        var newId = id || 'global';
        // const styleElement = this.core.renderer.createElement('style');
        return this._createStyleContent2(styles, newId, priority, TypeStyle.Multiple);
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
        var styleMap = (id in STYLE_MAP4
            ? STYLE_MAP4[id]
            : STYLE_MAP4[id] = {
                priority: priority,
                styles: styles,
                type: type,
                css: {}
            });
        /** @type {?} */
        var themeName = this.initialTheme;
        /** @type {?} */
        var isCreated = (id in CLASSES_MAP) || CLASSES_MAP[themeName][id];
        if (!isCreated || forChangeTheme) {
            /** *
             * create new style for new theme
              @type {?} */
            var css = void 0;
            if (typeof styles === 'function') {
                css = groupStyleToString(styles(this.config), themeName, isCreated, id, type, media);
                if (!forChangeTheme) {
                    styleMap.css[themeName] = css;
                    styleMap.requireUpdate = true;
                }
            }
            else {
                /** create a new id for style that does not <-<require>-> changes */
                CLASSES_MAP[id] = /** @type {?} */ (true);
                css = groupStyleToString(styles, themeName, isCreated, id, type, media);
                styleMap.css = css;
            }
            /** @type {?} */
            var el = this.elements[id]
                ? this.elements[id]
                : this.elements[id] = this._createElementStyle(css);
            if (forChangeTheme) {
                el.innerText = css;
            }
            else {
                this.core.renderer.appendChild(this._createStyleContainer(priority), el);
            }
        }
        else {
            /**
                   * append child style if not exist in dom
                   * for ssr or hmr
                   */
            if (!this.elements[id]) {
                /** @type {?} */
                var _css = styleMap.css[themeName] || styleMap.css;
                /** @type {?} */
                var element = this.elements[id] = this._createElementStyle(_css);
                this.core.renderer.appendChild(this._createStyleContainer(priority), element);
            }
        }
        /** @type {?} */
        var classes = typeof CLASSES_MAP[id] === 'string'
            ? CLASSES_MAP[id]
            : typeof CLASSES_MAP[id] === 'object'
                ? CLASSES_MAP[id]
                : CLASSES_MAP[themeName][id];
        return classes;
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
        if (priority === void 0) { priority = 0; }
        var styleContainers = this.stylesInDocument.styleContainers;
        if (!styleContainers.has(priority)) {
            /** @type {?} */
            var el = this.core.renderer.createElement("ly-s-c");
            if (isDevMode()) {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    LyTheme2.ctorParameters = function () { return [
        { type: StylesInDocument },
        { type: CoreTheme },
        { type: undefined, decorators: [{ type: Inject, args: [LY_THEME_NAME,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return LyTheme2;
}());
/**
 * @param {?} styles
 * @param {?} themeName
 * @param {?} _classes_
 * @param {?} id
 * @param {?} typeStyle
 * @param {?=} media
 * @return {?}
 */
function groupStyleToString(styles, themeName, _classes_, id, typeStyle, media) {
    if (typeStyle === TypeStyle.OnlyOne) {
        /** *
         * use current class or set new
          @type {?} */
        var className = CLASSES_MAP[id]
            ? CLASSES_MAP[id] = _classes_ || createNextId()
            : CLASSES_MAP[themeName][id] = _classes_ || createNextId();
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
    var content = '';
    /** @type {?} */
    var classes = CLASSES_MAP[id]
        ? CLASSES_MAP[id] = _classes_ || {}
        : CLASSES_MAP[themeName][id] = _classes_ || {};
    for (var key in styles) {
        if (styles.hasOwnProperty(key)) {
            /** @type {?} */
            var value = styles[key];
            if (typeof value === 'object') {
                /** @type {?} */
                var _className = classes[key] || (classes[key] = isDevMode() ? toClassNameValid(id + "---" + key + "-" + createNextId()) : createNextId());
                /** @type {?} */
                var style = styleToString(key, /** @type {?} */ (value), _className);
                content += style;
            }
            else {
                console.log('value is string', value);
            }
        }
    }
    return replaceRefs(content, classes);
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
        newKey = currentKey.replace('&', parentKey);
    }
    else if (key === '@global') {
        newKey = key;
    }
    else {
        newKey = currentKey;
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
            keyAndValue = "." + parentKey + "{" + keyAndValue + "}";
        }
        else if (parentKey && parentKey === '@global') {
            content += "" + currentKey;
        }
        else {
            content += "." + newKey;
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
function createNextId() {
    return "e" + (nextId++).toString(36);
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
         */
        function () {
            return this._ngTransclude;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
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
        { type: Directive, args: [{
                    selector: '[ngTransclude]'
                },] }
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NgTranscludeDirective.propDecorators = {
        ngTransclude: [{ type: Input }]
    };
    return NgTranscludeDirective;
}());
var NgTranscludeModule = /** @class */ (function () {
    function NgTranscludeModule() {
    }
    NgTranscludeModule.decorators = [
        { type: NgModule, args: [{
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
         */
        function () { return this._raised; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._raised = toBoolean(val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCommon.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._disabled = toBoolean(val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyCommon.prototype, "outlined", {
        get: /**
         * @return {?}
         */
        function () { return this._outlined; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._outlined = toBoolean(val); },
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
        { type: Directive, args: [{
                    selector: "\n            [bg],\n            [color],\n            [raised],\n            [raised][shadowColor],\n            [ly-button][outlined],\n            [elevation],\n            [elevation][shadowColor],\n            [disabled],\n            ly-card,\n            ly-toolbar\n            "
                },] }
    ];
    /** @nocollapse */
    LyCommon.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: ElementRef }
    ]; };
    LyCommon.propDecorators = {
        bg: [{ type: Input }],
        color: [{ type: Input }],
        raised: [{ type: Input }],
        disabled: [{ type: Input }],
        outlined: [{ type: Input }],
        elevation: [{ type: Input }],
        shadowColor: [{ type: Input }]
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
         */
        function (val) {
            if (!val) {
                throw new Error("'" + val + "' is not valid className");
            }
            this.el.nativeElement.classList.add(val);
        },
        enumerable: true,
        configurable: true
    });
    LyWithClass.decorators = [
        { type: Directive, args: [{
                    selector: '[withClass]'
                },] }
    ];
    /** @nocollapse */
    LyWithClass.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    LyWithClass.propDecorators = {
        withClass: [{ type: Input }]
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
        { type: NgModule, args: [{
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
        this.classes = this.theme.addStyleSheet(LY_COMMON_STYLES, 'lyCommonStyles');
    }
    LyCoreStyles.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LyCoreStyles.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyCoreStyles.ngInjectableDef = defineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(inject(LyTheme2)); }, token: LyCoreStyles, providedIn: "root" });
    return LyCoreStyles;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var styles = function (theme) { return ({
    overlayBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: theme.zIndex.overlay
    }
}); };
var WindowScrollService = /** @class */ (function () {
    function WindowScrollService(document) {
        var _this = this;
        this.document = document;
        if (Platform.isBrowser) {
            this.scroll$ = fromEvent(window, 'scroll').pipe(auditTime(200), map(function () {
                return window.scrollY || _this.document.documentElement.scrollTop;
            }), share());
        }
        else {
            this.scroll$ = empty();
        }
    }
    WindowScrollService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WindowScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ WindowScrollService.ngInjectableDef = defineInjectable({ factory: function WindowScrollService_Factory() { return new WindowScrollService(inject(DOCUMENT)); }, token: WindowScrollService, providedIn: "root" });
    return WindowScrollService;
}());
var LyOverlayContainer = /** @class */ (function () {
    function LyOverlayContainer(theme) {
        this.theme = theme;
        this._classes = this.theme.addStyleSheet(styles, 'lyOverlayContainer');
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
         */
        function () {
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyOverlayContainer.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyOverlayContainer.ngInjectableDef = defineInjectable({ factory: function LyOverlayContainer_Factory() { return new LyOverlayContainer(inject(LyTheme2)); }, token: LyOverlayContainer, providedIn: "root" });
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
        { type: Component, args: [{
                    selector: 'ly-overlay-backdrop',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    LyOverlayBackdrop.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: ['overlayConfig',] }] },
        { type: LyCoreStyles }
    ]; };
    LyOverlayBackdrop.propDecorators = {
        onclick: [{ type: HostListener, args: ['click',] }]
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
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView))
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
        { type: Injectable }
    ];
    /** @nocollapse */
    DomService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: LyOverlayContainer }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
        this._stateSubject = new Subject();
        this.lyFocusChange = new EventEmitter();
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
                .pipe(debounceTime(111))
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
        { type: Directive, args: [{
                    selector: '[lyFocusState]',
                    exportAs: 'lyFocusState'
                },] }
    ];
    /** @nocollapse */
    LyFocusState.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    LyFocusState.propDecorators = {
        lyFocusChange: [{ type: Output }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
var AUI_VERSION = '1.7.2-nightly.20181014-jn8luapr';
/** @type {?} */
var AUI_LAST_UPDATE = '2018-10-14T08:25:26.460Z';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
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
        var hammer = typeof window !== 'undefined' ? (/** @type {?} */ (window)).Hammer : null;
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
        { type: Injectable }
    ];
    /** @nocollapse */
    LyHammerGestureConfig.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_HAMMER_OPTIONS,] }] }
    ]; };
    return LyHammerGestureConfig;
}(HammerGestureConfig));

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
        { type: NgModule }
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
    if (invertMediaQuery === void 0) { invertMediaQuery = InvertMediaQuery.No; }
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
        this.windowScrollSub = Subscription.EMPTY;
        // this._viewRef = _templateRef.createEmbeddedView(_context);
        // this._viewRef.detectChanges();
        this._el = document.createElement('div');
        /** @type {?} */
        var __styles = __assign({ position: 'absolute', display: 'flex', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }, config.styles);
        /** @type {?} */
        var newInjector = Injector.create([
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
        if (type instanceof TemplateRef) {
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyOverlay.ctorParameters = function () { return [
        { type: LyOverlayContainer },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: WindowScrollService }
    ]; };
    /** @nocollapse */ LyOverlay.ngInjectableDef = defineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(inject(LyOverlayContainer), inject(ComponentFactoryResolver), inject(ApplicationRef), inject(INJECTOR), inject(WindowScrollService)); }, token: LyOverlay, providedIn: "root" });
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
        { type: NgModule, args: [{
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MutationObserverFactory.ngInjectableDef = defineInjectable({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
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
        var element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
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
        var element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
        if (this._observedElements.has(element)) {
            this._observedElements.get(element).disconnect();
            this._observedElements.delete(element);
        }
    };
    ElementObserver.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ElementObserver.ctorParameters = function () { return [
        { type: MutationObserverFactory }
    ]; };
    /** @nocollapse */ ElementObserver.ngInjectableDef = defineInjectable({ factory: function ElementObserver_Factory() { return new ElementObserver(inject(MutationObserverFactory)); }, token: ElementObserver, providedIn: "root" });
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

export { getContrastYIQ, shadowBuilderDeprecated, shadowBuilder, Shadows, THEME_VARIABLES, IS_CORE_THEME, Platform, LyCommonModule, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, IsBoolean, defaultEntry, DomService, LxDomModule, LyFocusStateModule, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LyCommon, CoreTheme, LY_THEME_GLOBAL_VARIABLES, LY_THEME, LY_THEME_NAME, toHyphenCase, capitalizeFirstLetter, StylesInDocument, LyTheme2, LyThemeModule, LY_COMMON_STYLES, LyCoreStyles, Undefined, UndefinedValue, transformMediaQuery, InvertMediaQuery, eachMedia, isObject, mergeDeep, LyStyleUtils, WindowScrollService, LyOverlayContainer, LyOverlayBackdrop, LyOverlay, LyOverlayModule, MutationObserverFactory, ElementObserver, LyWithClass as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlLXV0aWxzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZTIuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2NvbW1vbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2VsL29mZnNldC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2lzLWJvb2xlYW4udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9kZWZhdWx0LWVudHJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbW1vbi5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvd2l0aC1jbGFzcy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXktY29udGFpbmVyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9kb20uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbHgtZG9tLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3ZlcnNpb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZ2VzdHVyZS9nZXN0dXJlLWNvbmZpZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdW5kZWZpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL211dGF0aW9uLW9ic2VydmVyLWZhY3RvcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0WUlRKGhleGNvbG9yKSB7XG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigyLCAyKSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XG4gIGNvbnN0IHlpcSA9ICgociAqIDI5OSkgKyAoZyAqIDU4NykgKyAoYiAqIDExNCkpIC8gMTAwMDtcbiAgcmV0dXJuICh5aXEgPj0gMTI4KSA/ICdibGFjaycgOiAnd2hpdGUnO1xufVxuIiwiaW1wb3J0ICogYXMgX2Nocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuY29uc3QgY2hyb21hID0gX2Nocm9tYTtcblxuY29uc3Qgc2hhZG93S2V5VW1icmFPcGFjaXR5ID0gMC4yO1xuY29uc3Qgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbmNvbnN0IHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcbmV4cG9ydCBjb25zdCBTaGFkb3dzID0gW1xuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAxLCAzLCAwLCAwLCAxLCAxLCAwLCAwLCAyLCAxLCAtMV0sXG4gIFswLCAxLCA1LCAwLCAwLCAyLCAyLCAwLCAwLCAzLCAxLCAtMl0sXG4gIFswLCAxLCA4LCAwLCAwLCAzLCA0LCAwLCAwLCAzLCAzLCAtMl0sXG4gIFswLCAyLCA0LCAtMSwgMCwgNCwgNSwgMCwgMCwgMSwgMTAsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDUsIDgsIDAsIDAsIDEsIDE0LCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA2LCAxMCwgMCwgMCwgMSwgMTgsIDBdLFxuICBbMCwgNCwgNSwgLTIsIDAsIDcsIDEwLCAxLCAwLCAyLCAxNiwgMV0sXG4gIFswLCA1LCA1LCAtMywgMCwgOCwgMTAsIDEsIDAsIDMsIDE0LCAyXSxcbiAgWzAsIDUsIDYsIC0zLCAwLCA5LCAxMiwgMSwgMCwgMywgMTYsIDJdLFxuICBbMCwgNiwgNiwgLTMsIDAsIDEwLCAxNCwgMSwgMCwgNCwgMTgsIDNdLFxuICBbMCwgNiwgNywgLTQsIDAsIDExLCAxNSwgMSwgMCwgNCwgMjAsIDNdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEyLCAxNywgMiwgMCwgNSwgMjIsIDRdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEzLCAxOSwgMiwgMCwgNSwgMjQsIDRdLFxuICBbMCwgNywgOSwgLTQsIDAsIDE0LCAyMSwgMiwgMCwgNSwgMjYsIDRdLFxuICBbMCwgOCwgOSwgLTUsIDAsIDE1LCAyMiwgMiwgMCwgNiwgMjgsIDVdLFxuICBbMCwgOCwgMTAsIC01LCAwLCAxNiwgMjQsIDIsIDAsIDYsIDMwLCA1XSxcbiAgWzAsIDgsIDExLCAtNSwgMCwgMTcsIDI2LCAyLCAwLCA2LCAzMiwgNV0sXG4gIFswLCA5LCAxMSwgLTUsIDAsIDE4LCAyOCwgMiwgMCwgNywgMzQsIDZdLFxuICBbMCwgOSwgMTIsIC02LCAwLCAxOSwgMjksIDIsIDAsIDcsIDM2LCA2XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIwLCAzMSwgMywgMCwgOCwgMzgsIDddLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjEsIDMzLCAzLCAwLCA4LCA0MCwgN10sXG4gIFswLCAxMCwgMTQsIC02LCAwLCAyMiwgMzUsIDMsIDAsIDgsIDQyLCA3XSxcbiAgWzAsIDExLCAxNCwgLTcsIDAsIDIzLCAzNiwgMywgMCwgOSwgNDQsIDhdLFxuICBbMCwgMTEsIDE1LCAtNywgMCwgMjQsIDM4LCAzLCAwLCA5LCA0NiwgOF1cbl07XG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcgPSAyLCBjb2xvciA9ICcjMDAwJykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvcik7XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGBib3gtc2hhZG93OiR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlcihlbGV2YXRpb246IG51bWJlciB8IHN0cmluZywgY29sb3I/OiBzdHJpbmcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IgfHwgJyMwMDAnKS5kYXJrZW4oKS5zYXR1cmF0ZSgyKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYCR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xyXG5leHBvcnQgY29uc3QgSVNfQ09SRV9USEVNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjx0cnVlPignbHkuaXMucm9vdCcpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuLy8gZXhwb3J0IGNsYXNzIDxkZXByZWNhdGVkPlRoZW1lVmFyaWFibGVzIHtcclxuLy8gICAvKiogVGhlbWUgbmFtZSAqL1xyXG4vLyAgIG5hbWU6IHN0cmluZztcclxuLy8gICBwcmltYXJ5PzogUGFsZXR0ZVZhcmlhYmxlcztcclxuLy8gICBhY2NlbnQ/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4vLyAgIC8qKiB3YXJuIG9yIGVycm9yIGNvbG9yICovXHJcbi8vICAgd2Fybj86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbi8vICAgc2NoZW1lPzogc3RyaW5nO1xyXG4vLyAgIGNvbG9yU2NoZW1lcz86IHtcclxuLy8gICAgIFtrZXk6IHN0cmluZ106IENvbG9yU2NoZW1lXHJcbi8vICAgfTtcclxuLy8gICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4vLyB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xyXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XHJcbiAgY29udHJhc3Q/OiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcclxuICBiYWNrZ3JvdW5kPzoge1xyXG4gICAgZGVmYXVsdD86IHN0cmluZyxcclxuICAgIHBhcGVyPzogc3RyaW5nLFxyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbiAgdGV4dD86IHtcclxuICAgIGRlZmF1bHQ6IHN0cmluZyxcclxuICAgIHByaW1hcnk/OiBzdHJpbmcsXHJcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IHN0cmluZyxcclxuICAgIGhpbnQ/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICBkaXZpZGVyPzogc3RyaW5nO1xyXG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xyXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xyXG4gIGJhcj86IHN0cmluZztcclxuICBpbnB1dD86IHtcclxuICAgIGxhYmVsPzogc3RyaW5nLFxyXG4gICAgdW5kZXJsaW5lPzogc3RyaW5nXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuIiwiXHJcbi8vIFdoZXRoZXIgdGhlIGN1cnJlbnQgcGxhdGZvcm0gc3VwcG9ydHMgdGhlIFY4IEJyZWFrIEl0ZXJhdG9yLiBUaGUgVjggY2hlY2tcclxuLy8gaXMgbmVjZXNzYXJ5IHRvIGRldGVjdCBhbGwgQmxpbmsgYmFzZWQgYnJvd3NlcnMuXHJcbmNvbnN0IGhhc1Y4QnJlYWtJdGVyYXRvciA9ICh0eXBlb2YoSW50bCkgIT09ICd1bmRlZmluZWQnICYmIChJbnRsIGFzIGFueSkudjhCcmVha0l0ZXJhdG9yKTtcclxuLyoqXHJcbiAqIFNlcnZpY2UgdG8gZGV0ZWN0IHRoZSBjdXJyZW50IHBsYXRmb3JtIGJ5IGNvbXBhcmluZyB0aGUgdXNlckFnZW50IHN0cmluZ3MgYW5kXHJcbiAqIGNoZWNraW5nIGJyb3dzZXItc3BlY2lmaWMgZ2xvYmFsIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm0ge1xyXG4gIHN0YXRpYyByZWFkb25seSBpc0Jyb3dzZXI6IGJvb2xlYW4gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQ7XHJcbiAgLyoqIExheW91dCBFbmdpbmVzICovXHJcbiAgRURHRSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGVkZ2UpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICBUUklERU5UID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gIC8vIEVkZ2VIVE1MIGFuZCBUcmlkZW50IG1vY2sgQmxpbmsgc3BlY2lmaWMgdGhpbmdzIGFuZCBuZWVkIHRvIGJlIGV4Y2x1ZGVkIGZyb20gdGhpcyBjaGVjay5cclxuICBCTElOSyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxyXG4gICAgICAoISEoKHdpbmRvdyBhcyBhbnkpLmNocm9tZSB8fCBoYXNWOEJyZWFrSXRlcmF0b3IpICYmICEhQ1NTICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVCk7XHJcblxyXG4gIC8vIFdlYmtpdCBpcyBwYXJ0IG9mIHRoZSB1c2VyQWdlbnQgaW4gRWRnZUhUTUwsIEJsaW5rIGFuZCBUcmlkZW50LiBUaGVyZWZvcmUgd2UgbmVlZCB0b1xyXG4gIC8vIGVuc3VyZSB0aGF0IFdlYmtpdCBydW5zIHN0YW5kYWxvbmUgYW5kIGlzIG5vdCB1c2VkIGFzIGFub3RoZXIgZW5naW5lJ3MgYmFzZS5cclxuICBXRUJLSVQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcclxuICAgICAgL0FwcGxlV2ViS2l0L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhdGhpcy5CTElOSyAmJiAhdGhpcy5FREdFICYmICF0aGlzLlRSSURFTlQ7XHJcblxyXG4gIC8qKiBCcm93c2VycyBhbmQgUGxhdGZvcm0gVHlwZXMgKi9cclxuICBJT1MgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgISh3aW5kb3cgYXMgYW55KS5NU1N0cmVhbTtcclxuXHJcbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcclxuICAvLyB0aGVtIHNlbGYgYXMgR2Vja28tbGlrZSBicm93c2VycyBhbmQgbW9kaWZ5IHRoZSB1c2VyQWdlbnQncyBhY2NvcmRpbmcgdG8gdGhhdC5cclxuICAvLyBTaW5jZSB3ZSBvbmx5IGNvdmVyIG9uZSBleHBsaWNpdCBGaXJlZm94IGNhc2UsIHdlIGNhbiBzaW1wbHkgY2hlY2sgZm9yIEZpcmVmb3hcclxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXHJcbiAgRklSRUZPWCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGZpcmVmb3h8bWluZWZpZWxkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gIC8vIFRyaWRlbnQgb24gbW9iaWxlIGFkZHMgdGhlIGFuZHJvaWQgcGxhdGZvcm0gdG8gdGhlIHVzZXJBZ2VudCB0byB0cmljayBkZXRlY3Rpb25zLlxyXG4gIEFORFJPSUQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLlRSSURFTlQ7XHJcblxyXG4gIC8vIFNhZmFyaSBicm93c2VycyB3aWxsIGluY2x1ZGUgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZWlyIHVzZXJBZ2VudC4gU29tZSBicm93c2VycyBtYXkgZmFrZVxyXG4gIC8vIHRoaXMgYW5kIGp1c3QgcGxhY2UgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZSB1c2VyQWdlbnQuIFRvIGJlIG1vcmUgc2FmZSBhYm91dCBTYWZhcmkgZXZlcnlcclxuICAvLyBTYWZhcmkgYnJvd3NlciBzaG91bGQgYWxzbyB1c2UgV2Via2l0IGFzIGl0cyBsYXlvdXQgZW5naW5lLlxyXG4gIFNBRkFSSSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiB0aGlzLldFQktJVDtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTdHlsZVV0aWxzIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgU3R5bGVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFydGlhbFRoZW1lVmFyaWFibGVzPignbHkudGhlbWUuZ2xvYmFsLnZhcmlhYmxlcycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPFRoZW1lQ29uZmlnIHwgVGhlbWVDb25maWdbXT4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignbHkudGhlbWUubmFtZScpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBhY2NlbnQ6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIHdhcm46IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGJhY2tncm91bmQ6IHtcbiAgICAvKiogc2Vjb25kYXJ5ICovXG4gICAgZGVmYXVsdDogc3RyaW5nLFxuICAgIHByaW1hcnk6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3IsXG4gICAgc2Vjb25kYXJ5OiBzdHJpbmcsXG4gICAgdGVydGlhcnk6IHN0cmluZyxcbiAgICBiYXNlOiBzdHJpbmdcbiAgfTtcbiAgdGV4dDoge1xuICAgIGRlZmF1bHQ6IHN0cmluZyxcbiAgICBwcmltYXJ5OiBzdHJpbmcsXG4gICAgc2Vjb25kYXJ5OiBzdHJpbmcsXG4gICAgZGlzYWJsZWQ6IHN0cmluZyxcbiAgICBoaW50OiBzdHJpbmdcbiAgfTtcbiAgdHlwb2dyYXBoeToge1xuICAgIGh0bWxGb250U2l6ZTogbnVtYmVyLFxuICAgIGZvbnRTaXplOiBudW1iZXI7XG4gIH07XG4gIC8qKiBjb2xvciBmb3IgZGl2aWRlciAqL1xuICBkaXZpZGVyOiBzdHJpbmc7XG4gIHNoYWRvdzogc3RyaW5nO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIHNoYWRvdyBpbnN0ZWFkICovXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xuICBidXR0b246IHtcbiAgICBkaXNhYmxlZDogc3RyaW5nO1xuICB9O1xuICByYWRpbzoge1xuICAgIC8qKiBjb2xvciBmb3IgcmFkaW86b3V0ZXJDaXJjbGUgKi9cbiAgICBvdXRlckNpcmNsZT86IHN0cmluZztcbiAgICAvKiogQGRlcHJlY2F0ZWQgdXNlIG91dGVyQ2lyY2xlIGluc3RlYWQgKi9cbiAgICByYWRpb091dGVyQ2lyY2xlPzogc3RyaW5nO1xuICB9O1xuICBtZW51OiB7XG4gICAgYmc6IHN0cmluZztcbiAgfTtcbiAgZHJhd2VyOiB7XG4gICAgLyoqIGNvbG9yIGZvciBkcmF3ZXI6YmFja2Ryb3AgKi9cbiAgICBiYWNrZHJvcDogc3RyaW5nXG4gIH07XG4gIGlucHV0OiB7XG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgbGFiZWw/OiBzdHJpbmdcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICB3aXRoQ29sb3I/OiBzdHJpbmdcbiAgICBib3JkZXJDb2xvcjogc3RyaW5nXG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgW2FwcGVhcmFuY2VOYW1lOiBzdHJpbmddOiB7XG4gICAgICAgIGNvbnRhaW5lcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZpZWxkc2V0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmllbGRzZXRIb3Zlcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZpZWxkc2V0Rm9jdXNlZD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lckZvY3VzZWQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBsYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHBsYWNlaG9sZGVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5wdXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmbG9hdGluZ0xhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcHJlZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5maXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBzdWZmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgaWNvbkJ1dHRvbjoge1xuICAgIHNpemU6IHN0cmluZ1xuICB9O1xuICBpY29uOiB7XG4gICAgZm9udFNpemU6IHN0cmluZ1xuICB9O1xuICB6SW5kZXg6IHtcbiAgICB0b29sYmFyOiBudW1iZXJcbiAgICBkcmF3ZXI6IG51bWJlclxuICAgIG92ZXJsYXk6IG51bWJlclxuICAgIFtrZXk6IHN0cmluZ106IG51bWJlclxuICB9O1xuICBkaXJlY3Rpb24/OiAnbHRyJyB8ICdydGwnO1xuICBhbmltYXRpb25zOiB7XG4gICAgY3VydmVzOiB7XG4gICAgICBzdGFuZGFyZDogc3RyaW5nXG4gICAgICBkZWNlbGVyYXRpb246IHN0cmluZ1xuICAgICAgYWNjZWxlcmF0aW9uOiBzdHJpbmdcbiAgICAgIHNoYXJwOiBzdHJpbmdcbiAgICB9LFxuICAgIGR1cmF0aW9uczoge1xuICAgICAgY29tcGxleDogbnVtYmVyXG4gICAgICBlbnRlcmluZzogbnVtYmVyXG4gICAgICBleGl0aW5nOiBudW1iZXJcbiAgICB9XG4gIH07XG4gIHJpcHBsZTogSVJpcHBsZVZhcmlhYmxlcztcbn1cblxuZXhwb3J0IHR5cGUgVGhlbWVWYXJpYWJsZXMgPSBMeVN0eWxlVXRpbHMgJiBUaGVtZUNvbmZpZztcbmV4cG9ydCB0eXBlIFBhcnRpYWxUaGVtZVZhcmlhYmxlcyA9IFBhcnRpYWw8VGhlbWVWYXJpYWJsZXM+O1xuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRWYWwge1xuICBkZWZhdWx0OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVDb2xvciB7XG4gIGNvbnRyYXN0Pzogc3RyaW5nO1xuICAvKiogc2hhZG93IGNvbG9yICovXG4gIHNoYWRvdz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmlwcGxlVmFyaWFibGVzIHtcbiAgdHJhbnNpdGlvbjoge1xuICAgIG9wYWNpdHk6IHN0cmluZ1xuICAgIHRyYW5zZm9ybTogc3RyaW5nXG4gIH07XG4gIGR1cmF0aW9uOiBudW1iZXI7XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFR5cG9ncmFwaHlDb25maWcge1xuICBmb250U2l6ZTogbnVtYmVyO1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICBmb250V2VpZ2h0PzogbnVtYmVyO1xuICBsZXR0ZXJTcGFjaW5nPzogbnVtYmVyO1xuICB0ZXh0VHJhbnNmb3JtPzogJ3VwcGVyY2FzZScgfCAnY2FwaXRhbGl6ZScgfCAnbG93ZXJjYXNlJztcbiAgZ3V0dGVyVG9wPzogbnVtYmVyO1xuICBndXR0ZXJCb3R0b20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBicmVha3BvaW50czoge1xuICAgIFhTbWFsbDogc3RyaW5nLFxuICAgIFNtYWxsOiBzdHJpbmcsXG4gICAgTWVkaXVtOiBzdHJpbmcsXG4gICAgTGFyZ2U6IHN0cmluZyxcbiAgICBYTGFyZ2U6IHN0cmluZyxcblxuICAgIEhhbmRzZXQ6IHN0cmluZyxcbiAgICBUYWJsZXQ6IHN0cmluZyxcbiAgICBXZWI6IHN0cmluZyxcblxuICAgIEhhbmRzZXRQb3J0cmFpdDogc3RyaW5nLFxuICAgIFRhYmxldFBvcnRyYWl0OiBzdHJpbmcsXG4gICAgV2ViUG9ydHJhaXQ6IHN0cmluZyxcblxuICAgIEhhbmRzZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBUYWJsZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBXZWJMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfTtcbiAgZGlyZWN0aW9uPzogJ2x0cicgfCAncnRsJztcbiAgcHhUb1JlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudHlwb2dyYXBoeS5mb250U2l6ZSAvIDE0O1xuICAgIHJldHVybiBgJHt2YWx1ZSAvIHRoaXMudHlwb2dyYXBoeS5odG1sRm9udFNpemUgKiBzaXplfXJlbWA7XG4gIH1cbiAgY29sb3JPZih2YWx1ZTogc3RyaW5nLCBvcHRpb25hbD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCB2YWx1ZSwgb3B0aW9uYWwpO1xuICB9XG4gIGdldEJyZWFrcG9pbnQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYEBtZWRpYSAke3RoaXMuYnJlYWtwb2ludHNba2V5XSB8fCBrZXl9YDtcbiAgfVxuXG4gIGdldERpcmVjdGlvbih2YWw6ICdzdGFydCcgfCAnZW5kJykge1xuICAgIGlmICh2YWwgPT09ICdlbmQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogZ2V0IGNvbG9yIG9mIG9iamVjdFxuICogQHBhcmFtIG9iaiBvYmplY3RcbiAqIEBwYXJhbSBwYXRoIHBhdGhcbiAqIEBwYXJhbSBvcHRpb25hbCBnZXQgb3B0aW9uYWwgdmFsdWUsIGlmIG5vdCBleGlzdCByZXR1cm4gZGVmYXVsdCBpZiBub3QgaXMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogc3RyaW5nW10gfCBzdHJpbmcsIG9wdGlvbmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcG9zaWJsZU9iID0gb2JqW19wYXRoW2ldXTtcbiAgICBpZiAocG9zaWJsZU9iKSB7XG4gICAgICBvYmogPSBwb3NpYmxlT2I7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBpZiBub3QgZXhpc3QgKi9cbiAgICAgIHJldHVybiBwYXRoIGFzIHN0cmluZztcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG9iaiBhcyBzdHJpbmc7XG4gIH0gZWxzZSBpZiAob3B0aW9uYWwpIHtcbiAgICByZXR1cm4gb2JqW29wdGlvbmFsXSB8fCBvYmpbJ2RlZmF1bHQnXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqWydkZWZhdWx0J107XG4gIH1cbiAgLy8gcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hNZWRpYShzdHI6IHN0cmluZyB8IG51bWJlciwgZm46ICgodmFsOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcsIGlzTWVkaWE6IG51bWJlcikgPT4gdm9pZCkpIHtcbiAgaWYgKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgdmFsdWVzID0gc3RyLnNwbGl0KC9cXHMvZyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHZhbEl0ZW0gPSB2YWx1ZXNbaW5kZXhdLnNwbGl0KC9cXEAvZyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbEl0ZW0uc2hpZnQoKTtcbiAgICAgIGNvbnN0IGxlbiA9IHZhbEl0ZW0ubGVuZ3RoO1xuICAgICAgaWYgKGxlbikge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCB2YWxJdGVtW2pdLCB2YWxJdGVtLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdW5kZWZpbmVkLCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmbi5jYWxsKHVuZGVmaW5lZCwgc3RyLCB1bmRlZmluZWQsIDApO1xuICB9XG59XG4vKipcbiAqIFNpbXBsZSBvYmplY3QgY2hlY2suXG4gKiBAcGFyYW0gaXRlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVPih0YXJnZXQ6IFQsIHNvdXJjZTogVSk6IFQgJiBVO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYpOiBUICYgVSAmIFY7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFUsIFYsIFc+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogViwgc291cmNlMzogVyk6IFQgJiBVICYgViAmIFc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldDogb2JqZWN0LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueTtcblxuLyoqXG4gKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLlxuICogQHBhcmFtIHRhcmdldFxuICogQHBhcmFtIC4uLnNvdXJjZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgeyByZXR1cm4gdGFyZ2V0OyB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHsgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHt9IH0pOyB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRSwgVGhlbWVWYXJpYWJsZXMsIExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbWVyZ2VEZWVwIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBmaXJzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSB0aGVtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfdGhlbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgVGhlbWVWYXJpYWJsZXM+KCk7XG4gIHByaXZhdGUgX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIERhdGFTdHlsZT4+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUUpIHRoZW1lQ29uZmlnOiBUaGVtZUNvbmZpZ1tdIHwgVGhlbWVDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTKSBnbG9iYWxWYXJpYWJsZXM6IFRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUUgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCB7XG4gICAgICBpZDogJ2x5JyxcbiAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgZGF0YToge31cbiAgICB9KTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBub2RlczogTm9kZUxpc3QgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdseS1zLWMnKTtcbiAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2Rlcy5pdGVtKGluZGV4KTtcbiAgICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZpcnN0RWxlbWVudCA9IF9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhlbWVDb25maWcpKSB7XG4gICAgICB0aGVtZUNvbmZpZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgICAgbWVyZ2VEZWVwKGl0ZW0sIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGQoaXRlbSBhcyBhbnkpO1xuICAgICAgICB0aGlzLnRoZW1lcy5hZGQoaXRlbS5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgIG1lcmdlRGVlcCh0aGVtZUNvbmZpZywgZ2xvYmFsVmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkKHRoZW1lQ29uZmlnIGFzIGFueSk7XG4gICAgICB0aGlzLnRoZW1lcy5hZGQodGhlbWVDb25maWcubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lOiBUaGVtZVZhcmlhYmxlc1xuICAgKi9cbiAgYWRkKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykge1xuICAgIHRoaXMuX3RoZW1lTWFwLnNldCh0aGVtZS5uYW1lLCB0aGVtZSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuc2V0KHRoZW1lLm5hbWUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuICBnZXRTdHlsZU1hcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBkZWZhdWx0U3R5bGVzID0ge1xuICAnQGdsb2JhbCc6IHtcbiAgICAnKiwgKjphZnRlciwgKjpiZWZvcmUnOiB7XG4gICAgICAnLXdlYmtpdC1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJy1tb3otYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBSRUZfUkVHX0VYUCA9IC9cXHsoW1xcdy1dKylcXH0vZztcblxuZW51bSBUeXBlU3R5bGUge1xuICBNdWx0aXBsZSxcbiAgT25seU9uZVxufVxuY29uc3QgU1RZTEVfTUFQNDogU3R5bGVNYXA0ID0ge307XG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlTWFwNCB7XG4gIFtpZDogc3RyaW5nXToge1xuICAgIHN0eWxlczogU3R5bGVzRm4yPGFueT4gfCBTdHlsZXMyXG4gICAgdHlwZTogVHlwZVN0eWxlXG4gICAgcHJpb3JpdHk6IG51bWJlclxuICAgIGNzczoge1xuICAgICAgW3RoZW1lTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gICAgfSB8IHN0cmluZ1xuICAgIHJlcXVpcmVVcGRhdGU/OiBib29sZWFuXG4gIH07XG59XG5jb25zdCBDTEFTU0VTX01BUDoge1xuICBbaWRPclRoZW1lTmFtZTogc3RyaW5nXToge1xuICAgIFtjbGFzc05hbWU6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nXG59ID0ge307XG5jb25zdCBTVFlMRV9LRVlTX01BUCA9IHt9O1xubGV0IG5leHRJZCA9IDA7XG4vLyBmdW5jdGlvbiBmbigpIHtcbi8vICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuLy8gfVxuLy8gY29uc29sZS5sb2coe2ZufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlc0luRG9jdW1lbnQge1xuICBzdHlsZXM6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBIVE1MU3R5bGVFbGVtZW50XG4gICAgfVxuICB9ID0ge307XG4gIHN0eWxlQ29udGFpbmVycyA9IG5ldyBNYXA8bnVtYmVyLCBIVE1MRWxlbWVudD4oKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZVZhcmlhYmxlcztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBpbml0aWFsVGhlbWU6IHN0cmluZztcbiAgZWxlbWVudHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBIVE1MU3R5bGVFbGVtZW50XG4gIH07XG5cbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IHRoZW1lTmFtZSBpbiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzXG4gICAgICA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXVxuICAgICAgOiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV0gPSB7fTtcbiAgICAgIHRoaXMuX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lKTtcbiAgICAgIGlmICghdGhpcy5pbml0aWFsVGhlbWUpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVGhlbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWRkRGVmYXVsdFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKi9cbiAgYWRkU3R5bGUoaWQ6IHN0cmluZywgc3R5bGU6IFN0eWxlQ29udGFpbmVyIHwgKCh0aGVtZSkgPT4gU3R5bGVDb250YWluZXIpIHwgKCh0aGVtZSkgPT4gc3RyaW5nKSB8IHN0cmluZywgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5hZGRDc3MoaWQsIHN0eWxlIGFzIGFueSwgcHJpb3JpdHkpO1xuICAgIGlmIChuZXdDbGFzcyA9PT0gaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgaWYgKGVsKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0NsYXNzID09PSBvbGRDbGFzcykge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgaWYgKG5hbSAhPT0gdGhpcy5jb25maWcubmFtZSkge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRTdHlsZXMgPSB0aGlzLmVsZW1lbnRzO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3VycmVudFN0eWxlcykge1xuICAgICAgICBpZiAoY3VycmVudFN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29uc3Qgc3R5bGVEYXRhID0gU1RZTEVfTUFQNFtrZXldO1xuICAgICAgICAgIGlmIChzdHlsZURhdGEucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZURhdGEuc3R5bGVzLCBrZXksIHN0eWxlRGF0YS5wcmlvcml0eSwgc3R5bGVEYXRhLnR5cGUsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBtZWRpYSkgYXMgc3RyaW5nO1xuICB9XG4gIHByaXZhdGUgX2FkZERlZmF1bHRTdHlsZXMoKSB7XG4gICAgdGhpcy5hZGRTdHlsZVNoZWV0KGRlZmF1bHRTdHlsZXMsICdseS0tZGVmYXVsdFN0eWxlcycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBpZCB1bmlxdWUgaWQgZm9yIHN0eWxlIGdyb3VwXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgaWQ/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyKTogSUNsYXNzZXM8VD4ge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgfHwgJ2dsb2JhbCc7XG4gICAgLy8gY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBuZXdJZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBfY3JlYXRlU3R5bGVDb250ZW50MjxUPihcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgbWVkaWE/OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3Qgc3R5bGVNYXAgPSAoaWQgaW4gU1RZTEVfTUFQNFxuICAgID8gU1RZTEVfTUFQNFtpZF1cbiAgICA6IFNUWUxFX01BUDRbaWRdID0ge1xuICAgICAgcHJpb3JpdHksXG4gICAgICBzdHlsZXMsXG4gICAgICB0eXBlLFxuICAgICAgY3NzOiB7fVxuICAgIH0pO1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHRoaXMuaW5pdGlhbFRoZW1lO1xuICAgIGNvbnN0IGlzQ3JlYXRlZCA9IChpZCBpbiBDTEFTU0VTX01BUCkgfHwgQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF07XG4gICAgaWYgKCFpc0NyZWF0ZWQgfHwgZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgIC8qKiBjcmVhdGUgbmV3IHN0eWxlIGZvciBuZXcgdGhlbWUgKi9cbiAgICAgIGxldCBjc3M7XG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzKHRoaXMuY29uZmlnKSwgdGhlbWVOYW1lLCBpc0NyZWF0ZWQsIGlkLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgICBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogY3JlYXRlIGEgbmV3IGlkIGZvciBzdHlsZSB0aGF0IGRvZXMgbm90IDwtPHJlcXVpcmU+LT4gY2hhbmdlcyAqL1xuICAgICAgICBDTEFTU0VTX01BUFtpZF0gPSB0cnVlIGFzIGFueTtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlcywgdGhlbWVOYW1lLCBpc0NyZWF0ZWQsIGlkLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgID8gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgIDogdGhpcy5lbGVtZW50c1tpZF0gPSB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoXG4gICAgICAgIGNzc1xuICAgICAgKTtcbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBlbC5pbm5lclRleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkpLCBlbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKlxuICAgICAgICogYXBwZW5kIGNoaWxkIHN0eWxlIGlmIG5vdCBleGlzdCBpbiBkb21cbiAgICAgICAqIGZvciBzc3Igb3IgaG1yXG4gICAgICAgKi9cbiAgICAgIGlmICghdGhpcy5lbGVtZW50c1tpZF0pIHtcbiAgICAgICAgY29uc3QgX2NzcyA9IHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdIHx8IHN0eWxlTWFwLmNzcztcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudHNbaWRdID0gdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpO1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkpLCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdHlwZW9mIENMQVNTRVNfTUFQW2lkXSA9PT0gJ3N0cmluZydcbiAgICA/IENMQVNTRVNfTUFQW2lkXVxuICAgIDogdHlwZW9mIENMQVNTRVNfTUFQW2lkXSA9PT0gJ29iamVjdCdcbiAgICA/IENMQVNTRVNfTUFQW2lkXVxuICAgIDogQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF07XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoISh0aGVtZU5hbWUgaW4gQ0xBU1NFU19NQVApKSB7XG4gICAgICBDTEFTU0VTX01BUFt0aGVtZU5hbWVdID0ge307XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lcjtcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzOiBTdHlsZXMyLCB0aGVtZU5hbWU6IHN0cmluZywgX2NsYXNzZXNfOiBzdHJpbmcgfCB7fSwgaWQ6IHN0cmluZywgdHlwZVN0eWxlOiBUeXBlU3R5bGUsIG1lZGlhPzogc3RyaW5nKSB7XG4gIGlmICh0eXBlU3R5bGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lKSB7XG4gICAgLyoqIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXcgKi9cbiAgICBjb25zdCBjbGFzc05hbWUgPSBDTEFTU0VTX01BUFtpZF1cbiAgICA/IENMQVNTRVNfTUFQW2lkXSA9IF9jbGFzc2VzXyB8fCBjcmVhdGVOZXh0SWQoKVxuICAgIDogQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF0gPSBfY2xhc3Nlc18gfHwgY3JlYXRlTmV4dElkKCk7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBjc3MgPSBgLiR7Y2xhc3NOYW1lfXske3N0eWxlc319YDtcbiAgICAgIHJldHVybiBtZWRpYSA/IHRvTWVkaWEoY3NzLCBtZWRpYSkgOiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gc3R5bGVUb1N0cmluZyhpZCwgc3R5bGVzLCBjbGFzc05hbWUgYXMgYW55KTtcbiAgICAgIHJldHVybiBydWxlcztcbiAgICB9XG4gIH1cbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgY29uc3QgY2xhc3NlcyA9IENMQVNTRVNfTUFQW2lkXVxuICA/IENMQVNTRVNfTUFQW2lkXSA9IF9jbGFzc2VzXyB8fCB7fVxuICA6IENMQVNTRVNfTUFQW3RoZW1lTmFtZV1baWRdID0gX2NsYXNzZXNfIHx8IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBfY2xhc3NOYW1lID0gY2xhc3Nlc1trZXldIHx8IChjbGFzc2VzW2tleV0gPSBpc0Rldk1vZGUoKSA/IHRvQ2xhc3NOYW1lVmFsaWQoYCR7aWR9LS0tJHtrZXl9LSR7Y3JlYXRlTmV4dElkKCl9YCkgOiBjcmVhdGVOZXh0SWQoKSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyhrZXksIHZhbHVlIGFzIFN0eWxlczIsIF9jbGFzc05hbWUpO1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGlzIHN0cmluZycsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2VSZWZzKGNvbnRlbnQsIGNsYXNzZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUmVmcyhzdHI6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUZfUkVHX0VYUCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIHJldHVybiBgLiR7ZGF0YVt0b2tlbl19YDtcbiAgfVxuICApO1xufVxuXG4vKipcbiAqIHtjb2xvcjoncmVkJ30gdG8gLmNsYXNzTmFtZXtjb2xvcjogcmVkfVxuICovXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKGtleTogc3RyaW5nLCBvYjogT2JqZWN0LCBjdXJyZW50S2V5OiBzdHJpbmcsIHBhcmVudEtleT86IHN0cmluZykge1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgc3ViQ29udGVudCA9ICcnO1xuICBsZXQga2V5QW5kVmFsdWUgPSAnJztcbiAgbGV0IG5ld0tleTtcbiAgaWYgKHBhcmVudEtleSAmJiBjdXJyZW50S2V5LmluZGV4T2YoJyYnKSAhPT0gLTEpIHtcbiAgICBuZXdLZXkgPSBjdXJyZW50S2V5LnJlcGxhY2UoJyYnLCBwYXJlbnRLZXkpO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgbmV3S2V5ID0ga2V5O1xuICB9IGVsc2Uge1xuICAgIG5ld0tleSA9IGN1cnJlbnRLZXk7XG4gIH1cbiAgZm9yIChjb25zdCBzdHlsZUtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBvYltzdHlsZUtleV07XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHN1YkNvbnRlbnQgKz0gc3R5bGVUb1N0cmluZyhrZXksIGVsZW1lbnQgYXMgU3R5bGVzMiwgc3R5bGVLZXksIG5ld0tleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdTdHlsZUtleSA9IHRvSHlwaGVuQ2FzZUNhY2hlKHN0eWxlS2V5KTtcbiAgICAgICAga2V5QW5kVmFsdWUgKz0gYCR7bmV3U3R5bGVLZXl9OiR7ZWxlbWVudH07YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGtleUFuZFZhbHVlKSB7XG4gICAgaWYgKG5ld0tleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICAgIGtleUFuZFZhbHVlID0gYC4ke3BhcmVudEtleX17JHtrZXlBbmRWYWx1ZX19YDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudEtleSAmJiBwYXJlbnRLZXkgPT09ICdAZ2xvYmFsJykge1xuICAgICAgY29udGVudCArPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gYC4ke25ld0tleX1gO1xuICAgIH1cbiAgICBjb250ZW50ICs9IGB7JHtrZXlBbmRWYWx1ZX19YDtcbiAgfVxuICByZXR1cm4gY29udGVudCArIHN1YkNvbnRlbnQ7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZnVuY3Rpb24gZ2V0KG9iajogT2JqZWN0LCBwYXRoOiBhbnkpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqID0gb2JqW19wYXRoW2ldXSB8fCBwYXRoO1xuICB9XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0h5cGhlbkNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChnKSA9PiBgLSR7Z1swXS50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiB0b0NsYXNzTmFtZVZhbGlkKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IHMgPSBzdHIucmVwbGFjZSgvXlswLTldfFteXFx3XFwtXS9nLCBfID0+IHtcbiAgICByZXR1cm4gYF8ke18uY2hhckNvZGVBdCgwKX1gO1xuICB9KTtcbiAgcmV0dXJuIHRvSHlwaGVuQ2FzZShzKTtcbn1cblxuZnVuY3Rpb24gdG9IeXBoZW5DYXNlQ2FjaGUoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ciBpbiBTVFlMRV9LRVlTX01BUFxuICA/IFNUWUxFX0tFWVNfTUFQW3N0cl1cbiAgOiBTVFlMRV9LRVlTX01BUFtzdHJdID0gdG9IeXBoZW5DYXNlKHN0cik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiB0b01lZGlhKGNzczogc3RyaW5nLCBtZWRpYTogc3RyaW5nKSB7XG4gIHJldHVybiBgQG1lZGlhICR7bWVkaWF9eyR7Y3NzfX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXh0SWQoKSB7XG4gIHJldHVybiBgZSR7KG5leHRJZCsrKS50b1N0cmluZygzNil9YDtcbn1cblxudHlwZSBJQ2xhc3NlczxUPiA9IFJlY29yZDwoVCBleHRlbmRzICgoLi4uYXJnczogYW55W10pID0+IGFueSkgPyAoa2V5b2YgUmV0dXJuVHlwZTxUPikgOiBrZXlvZiBUKSwgc3RyaW5nPjtcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSwgTmdNb2R1bGVcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2V5QXR0cmlidXRlIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIF9uZ1RyYW5zY2x1ZGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IHRlbXBsYXRlUmVmO1xyXG4gICAgICB0aGlzLl92aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbmdUcmFuc2NsdWRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fdmlld1JlZi5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVNb2R1bGUge1xyXG5cclxufVxyXG4iLCJmdW5jdGlvbiBpc1dpbmRvdyhvYmo6IGFueSkge1xyXG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtOiBhbnkpIHtcclxuICAgIHJldHVybiBpc1dpbmRvdyhlbGVtKSA/IGVsZW0gOiBlbGVtLm5vZGVUeXBlID09PSA5ICYmIGVsZW0uZGVmYXVsdFZpZXc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0UG9zaXRpb24oZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBkb2NFbGVtOiBhbnksIHdpbjogYW55LFxyXG4gICAgICAgIGJveCA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xyXG4gICAgY29uc3QgZG9jID0gZWxlbSAmJiBlbGVtLm93bmVyRG9jdW1lbnQ7XHJcblxyXG4gICAgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB9XHJcbiAgICB3aW4gPSBnZXRXaW5kb3coZG9jKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiBib3gudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXHJcbiAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYW55KSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBJc0Jvb2xlYW4oKTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBrZXk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIGdldDogZGVmaW5pdGlvbi5nZXQsXG4gICAgICAgIHNldDogbmV3VmFsdWUgPT4ge1xuICAgICAgICAgIGRlZmluaXRpb24uc2V0KHRvQm9vbGVhbihuZXdWYWx1ZSkpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbJ19fJyArIGtleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgdGhpc1snX18nICsga2V5XSA9IHRvQm9vbGVhbihuZXdWYWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRFbnRyeSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBkZWZhdWx0VmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICByZXR1cm4gdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwnO1xuaW1wb3J0IHsgc2hhZG93QnVpbGRlciB9IGZyb20gJy4uL3NoYWRvdyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5jb25zdCBERUZBVUxUX1ZBTFVFID0gJyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFxuICAgICAgICAgICAgW2JnXSxcbiAgICAgICAgICAgIFtjb2xvcl0sXG4gICAgICAgICAgICBbcmFpc2VkXSxcbiAgICAgICAgICAgIFtyYWlzZWRdW3NoYWRvd0NvbG9yXSxcbiAgICAgICAgICAgIFtseS1idXR0b25dW291dGxpbmVkXSxcbiAgICAgICAgICAgIFtlbGV2YXRpb25dLFxuICAgICAgICAgICAgW2VsZXZhdGlvbl1bc2hhZG93Q29sb3JdLFxuICAgICAgICAgICAgW2Rpc2FibGVkXSxcbiAgICAgICAgICAgIGx5LWNhcmQsXG4gICAgICAgICAgICBseS10b29sYmFyXG4gICAgICAgICAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEx5Q29tbW9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfcmFpc2VkOiBib29sZWFuO1xuICBwcml2YXRlIF9vdXRsaW5lZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9hdXRvQ29udHJhc3Q6IGJvb2xlYW47XG4gIHByaXZhdGUgX2lzQ29udHJhc3Q6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgYmc6IHN0cmluZztcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNldCByYWlzZWQodmFsOiBib29sZWFuKSB7IHRoaXMuX3JhaXNlZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCByYWlzZWQoKSB7IHJldHVybiB0aGlzLl9yYWlzZWQ7IH1cblxuICBASW5wdXQoKSBzZXQgZGlzYWJsZWQodmFsOiBib29sZWFuKSB7IHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbCk7IH1cbiAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cblxuICBASW5wdXQoKSBzZXQgb3V0bGluZWQodmFsOiBib29sZWFuKSB7IHRoaXMuX291dGxpbmVkID0gdG9Cb29sZWFuKHZhbCk7IH1cbiAgZ2V0IG91dGxpbmVkKCkgeyByZXR1cm4gdGhpcy5fb3V0bGluZWQ7IH1cblxuICBASW5wdXQoKSBlbGV2YXRpb246IG51bWJlcjtcbiAgQElucHV0KCkgc2hhZG93Q29sb3I6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgcHVibGljIHNldEF1dG9Db250cmFzdCgpIHtcbiAgICB0aGlzLl9hdXRvQ29udHJhc3QgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc3QgX19iZyA9IHRoaXMuYmc7XG4gICAgY29uc3QgX19jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgY29uc3QgX19yYWlzZWQgPSB0aGlzLnJhaXNlZDtcbiAgICBjb25zdCBfX2VsZXZhdGlvbiA9IHRoaXMuZWxldmF0aW9uO1xuICAgIGNvbnN0IF9fZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgIGNvbnN0IF9fb3V0bGluZWQgPSB0aGlzLm91dGxpbmVkO1xuICAgIGNvbnN0IF9fc2hhZG93Q29sb3IgPSB0aGlzLnNoYWRvd0NvbG9yO1xuICAgIGNvbnN0IF9faXNDb250cmFzdCA9IHRoaXMuX2lzQ29udHJhc3QgPSB0aGlzLl9hdXRvQ29udHJhc3QgJiYgIV9fY29sb3IgfHwgX19jb2xvciA9PT0gJ2F1dG8nO1xuICAgIGNvbnN0IG5ld0tleSA9IGBjb21tb24tLS0tOiR7XG4gICAgICBfX2JnIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgIF9fY29sb3IgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICBfX3JhaXNlZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgX19lbGV2YXRpb24gfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgX19kaXNhYmxlZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgIF9fb3V0bGluZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICAgIF9fc2hhZG93Q29sb3IgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICAgICAgX19pc0NvbnRyYXN0IHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKG5ld0tleSwgKHRoZW1lKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZToge1xuICAgICAgICBib3JkZXI/OiBzdHJpbmcsXG4gICAgICAgIGJhY2tncm91bmQ/OiBzdHJpbmcsXG4gICAgICAgIGNvbG9yPzogc3RyaW5nLFxuICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmcsXG4gICAgICAgIHBvaW50ZXJFdmVudHM/OiAnbm9uZSc7XG4gICAgICAgICcmOmhvdmVyJz86IHtcbiAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgJyY6YWN0aXZlJz86IHtcbiAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmdcbiAgICAgICAgfVxuICAgICAgfSA9IHt9O1xuICAgICAgaWYgKF9fb3V0bGluZWQpIHtcbiAgICAgICAgc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBjdXJyZW50Q29sb3InO1xuICAgICAgfVxuICAgICAgaWYgKF9fZGlzYWJsZWQpIHtcbiAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS50ZXh0LmRpc2FibGVkO1xuICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5idXR0b24uZGlzYWJsZWQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfX2JnKSB7XG4gICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmNvbG9yT2YoX19iZyk7XG4gICAgICAgICAgaWYgKF9faXNDb250cmFzdCkge1xuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKGAke19fYmd9OmNvbnRyYXN0YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghc3R5bGUuY29sb3IgJiYgX19jb2xvcikge1xuICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZihfX2NvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19yYWlzZWQgfHwgX19lbGV2YXRpb24pIHtcbiAgICAgICAgICBpZiAoIV9fYmcpIHtcbiAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9yQ3NzID0gc3R5bGUuYmFja2dyb3VuZCAhPT0gX19iZyAmJiB0aGVtZS5jb2xvck9mKF9fYmcgfHwgJ2JhY2tncm91bmQ6cHJpbWFyeScsICdzaGFkb3cnKTtcbiAgICAgICAgICBjb25zdCBzaGFkb3dDb2xvciA9IChfX3NoYWRvd0NvbG9yICYmIHRoZW1lLmNvbG9yT2YoX19zaGFkb3dDb2xvcikpIHx8IGJhY2tncm91bmRDb2xvckNzcyB8fCBzdHlsZS5iYWNrZ3JvdW5kIHx8IHN0eWxlLmNvbG9yIHx8IHRoZW1lLnNoYWRvdztcbiAgICAgICAgICBzdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3dCdWlsZGVyKF9fZWxldmF0aW9uIHx8IDMsIHNoYWRvd0NvbG9yKTtcbiAgICAgICAgICBpZiAoIV9fZWxldmF0aW9uKSB7XG4gICAgICAgICAgICBzdHlsZVsnJjphY3RpdmUnXSA9IHtcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDgsIHNoYWRvd0NvbG9yKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHlsZSBhcyBhbnk7XG4gICAgfSwgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY2xhc3NOYW1lLCBTVFlMRV9QUklPUklUWSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3dpdGhDbGFzc10nXG59KVxuZXhwb3J0IGNsYXNzIEx5V2l0aENsYXNzIHtcblxuICBASW5wdXQoKVxuICBzZXQgd2l0aENsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7dmFsfScgaXMgbm90IHZhbGlkIGNsYXNzTmFtZWApO1xuICAgIH1cbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh2YWwpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5Q29tbW9uIH0gZnJvbSAnLi9jb21tb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5V2l0aENsYXNzIH0gZnJvbSAnLi93aXRoLWNsYXNzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5Q29tbW9uLCBMeVdpdGhDbGFzc10sXG4gIGV4cG9ydHM6IFtMeUNvbW1vbiwgTHlXaXRoQ2xhc3NdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q29tbW9uTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBMWV9DT01NT05fU1RZTEVTID0ge1xuICBmaWxsOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICB9LFxuICB2aXN1YWxseUhpZGRlbjoge1xuICAgIGJvcmRlcjogMCxcbiAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBtYXJnaW46ICctMXB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzFweCcsXG4gICAgb3V0bGluZTogMCxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgfVxufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNvcmVTdHlsZXMge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KExZX0NPTU1PTl9TVFlMRVMsICdseUNvbW1vblN0eWxlcycpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lOiBMeVRoZW1lMikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnQsIEluamVjdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlDb3JlU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL2NvcmUtc3R5bGVzJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCAsICBPYnNlcnZhYmxlLCBlbXB0eSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSwgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBvdmVybGF5QmFja2Ryb3A6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgub3ZlcmxheVxuICB9XG59KTtcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBXaW5kb3dTY3JvbGxTZXJ2aWNlIHtcblxuICBwdWJsaWMgc2Nyb2xsJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpLnBpcGUoXG4gICAgICAgIGF1ZGl0VGltZSgyMDApLFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIH0pLFxuICAgICAgICBzaGFyZSgpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcm9sbCQgPSBlbXB0eSgpO1xuICAgIH1cbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlDb250YWluZXIge1xuICBwcml2YXRlIF9jbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5T3ZlcmxheUNvbnRhaW5lcicpO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9pdGVtcyA9IG5ldyBTZXQ8YW55PigpO1xuICBwcml2YXRlIF9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXI6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2x5LW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGluc3RhbmNlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9hZGQoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW1zLmFkZChpdGVtKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgdGhpcy5fdXBkYXRlKCk7XG4gIH1cblxuICAgIC8qKlxuICAgKiBSZW1vdmUgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX3JlbW92ZShpdGVtKSB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIHRoaXMuX2l0ZW1zLmRlbGV0ZShpdGVtKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc3R5bGVzIGZvciBvdmVybGF5IGNvbnRhaW5lclxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2l0ZW1zLnNpemUpIHtcbiAgICAgIGlmICghdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9jbGFzc2VzLm92ZXJsYXlCYWNrZHJvcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jbGFzc2VzLm92ZXJsYXlCYWNrZHJvcCk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktb3ZlcmxheS1iYWNrZHJvcCcsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlCYWNrZHJvcCB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLl9vdmVybGF5Q29uZmlnLmZuRGVzdHJveSgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdCgnb3ZlcmxheUNvbmZpZycpIHByaXZhdGUgX292ZXJsYXlDb25maWc6IGFueSxcbiAgICBjb21tb25TdHlsZXM6IEx5Q29yZVN0eWxlc1xuICApIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb21tb25TdHlsZXMuY2xhc3Nlcy5maWxsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbVNlcnZpY2Uge1xuICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuICBwcml2YXRlIF92aWV3UmVmOiBWaWV3UmVmO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyXG4gICkgeyB9XG5cbiAgYXR0YWNoPFQ+KF9ob3N0Vmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgY29tcG9uZW50OiBhbnksIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgICBjb25zdCB2aWV3UmVmID0gX2hvc3RWaWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG4gICAgICB2aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYgPSBfaG9zdFZpZXdDb250YWluZXJSZWY7XG4gICAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IHRoaXMuYWRkQ2hpbGQocm9vdE5vZGUpKTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMub3ZlcmxheUNvbnRhaW5lci5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxuXG4gIGdldERvbUVsZW1lbnRGcm9tQ29tcG9uZW50UmVmKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGRlc3Ryb3lSZWYoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiwgZGVsYXk6IG51bWJlcikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tU2VydmljZSB9IGZyb20gJy4vZG9tLnNlcnZpY2UnO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWShwYXJlbnRDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcikge1xuLy8gICByZXR1cm4gcGFyZW50Q29udGFpbmVyIHx8IG5ldyBMeU92ZXJsYXlDb250YWluZXIoKTtcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSID0ge1xuLy8gICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIE92ZXJsYXlDb250YWluZXIgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbi8vICAgcHJvdmlkZTogTHlPdmVybGF5Q29udGFpbmVyLFxuLy8gICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTHlPdmVybGF5Q29udGFpbmVyXV0sXG4vLyAgIHVzZUZhY3Rvcnk6IExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSX0ZBQ1RPUllcbi8vIH07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRG9tU2VydmljZVxuICAgIC8vIExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHhEb21Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBOZ1pvbmUsIFJlbmRlcmVyMiwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGVudW0gRm9jdXNTdGF0dXMge1xuICAvKiptb3VzZSBhbmQvb3IgdG91Y2gqL1xuICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICAvKioga2V5Ym9hcmQgYW5kL29yIHByb2dyYW0qL1xuICBLRVlCT0FSRCA9ICdrZXlib2FyZCcsXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseUZvY3VzU3RhdGVdJyxcbiAgZXhwb3J0QXM6ICdseUZvY3VzU3RhdGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHN0YXRlOiBGb2N1c1N0YXR1cztcbiAgc3RhdGVNYXAgPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogRWxlbWVudDtcbiAgcHJpdmF0ZSBfZXZlbnRIYW5kbGVycyA9IG5ldyBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgX3N0YXRlU3ViamVjdCA9IG5ldyBTdWJqZWN0PEZvY3VzU3RhdHVzPigpO1xuICBfc3RhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgQE91dHB1dCgpIGx5Rm9jdXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzU3RhdHVzPigpO1xuICBwcml2YXRlIF9ldmVudE9wdGlvbnMgPSB7cGFzc2l2ZTogdHJ1ZX0gYXMgYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzXG4gICAgICAuc2V0KCdmb2N1cycsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ2JsdXInLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCd0b3VjaHN0YXJ0JywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnbW91c2Vkb3duJywgdGhpcy5vbi5iaW5kKHRoaXMpKTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY29uc3Qgb24gPSAoZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlTWFwLnNldChldmVudC50eXBlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBvYjogT2JzZXJ2YWJsZTxGb2N1c1N0YXR1cz4gPSB0aGlzLl9zdGF0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbiA9IG9iXG4gICAgICAvLyAuZGVib3VuY2VUaW1lKDExMSlcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTExKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZTogRm9jdXNTdGF0dXMpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gICAgICAgIHRoaXMubHlGb2N1c0NoYW5nZS5lbWl0KGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3RhdGUoKSB7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnYmx1cicpKSB7XG4gICAgICB0aGlzLnN0YXRlTWFwLmNsZWFyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygnbW91c2Vkb3duJykgfHwgdGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykgJiYgdGhpcy5zdGF0ZU1hcC5oYXMoJ3RvdWNoc3RhcnQnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5ERUZBVUxUO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykpIHtcbiAgICAgIHN0YXRlID0gRm9jdXNTdGF0dXMuS0VZQk9BUkQ7XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlU3ViamVjdC5uZXh0KHN0YXRlKTtcbiAgfVxuXG4gIG9uKGV2ZW50OiBGb2N1c0V2ZW50IHwgVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnN0YXRlTWFwLnNldChldmVudC50eXBlLCB0cnVlKTtcbiAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRvZ2dsZUNsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nLCBzaG91bGRTZXQ6IGJvb2xlYW4pID0+IHNob3VsZFNldCA/IHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkgOiB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIHRvZ2dsZUNsYXNzKGBseS1mb2N1c2VkYCwgISFzdGF0ZSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gRm9jdXNTdGF0dXMpIHtcbiAgICAgIGlmIChGb2N1c1N0YXR1cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IEZvY3VzU3RhdHVzW2tleV07XG4gICAgICAgIHRvZ2dsZUNsYXNzKGBseS0ke2NsYXNzTmFtZX0tZm9jdXNlZGAsIHN0YXRlID09PSBjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KG51bGwpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUZvY3VzU3RhdGUgfSBmcm9tICcuL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlGb2N1c1N0YXRlXSxcbiAgZXhwb3J0czogW0x5Rm9jdXNTdGF0ZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGNvbnN0IEFVSV9WRVJTSU9OID0gJzEuNy4yLW5pZ2h0bHkuMjAxODEwMTQtam44bHVhcHInO1xuZXhwb3J0IGNvbnN0IEFVSV9MQVNUX1VQREFURSA9ICcyMDE4LTEwLTE0VDA4OjI1OjI2LjQ2MFonO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEhhbW1lck9wdGlvbnMsIEhhbW1lckluc3RhbmNlIH0gZnJvbSAnLi9nZXN0dXJlLWFubm90YXRpb25zJztcblxuZXhwb3J0IGNvbnN0IExZX0hBTU1FUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPEhhbW1lck9wdGlvbnM+KCdMWV9IQU1NRVJfT1BUSU9OUycpO1xuXG5jb25zdCBIQU1NRVJfR0VTVFVSRVNfRVZFTlRTID0gW1xuICAnc2xpZGUnLFxuICAnc2xpZGVzdGFydCcsXG4gICdzbGlkZWVuZCcsXG4gICdzbGlkZXJpZ2h0JyxcbiAgJ3NsaWRlbGVmdCdcbl07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeUhhbW1lckdlc3R1cmVDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgZXZlbnRzOiBzdHJpbmdbXSA9IEhBTU1FUl9HRVNUVVJFU19FVkVOVFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfSEFNTUVSX09QVElPTlMpIHByaXZhdGUgX2hhbW1lck9wdGlvbnM6IEhhbW1lck9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBidWlsZEhhbW1lcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhhbW1lckluc3RhbmNlIHtcbiAgICBjb25zdCBoYW1tZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/ICh3aW5kb3cgYXMgYW55KS5IYW1tZXIgOiBudWxsO1xuICAgIGNvbnN0IG1jID0gbmV3IGhhbW1lcihlbGVtZW50LCB0aGlzLl9oYW1tZXJPcHRpb25zIHx8IHVuZGVmaW5lZCk7XG5cbiAgICBjb25zdCBwYW4gPSBuZXcgaGFtbWVyLlBhbigpO1xuICAgIGNvbnN0IHN3aXBlID0gbmV3IGhhbW1lci5Td2lwZSgpO1xuICAgIGNvbnN0IHNsaWRlID0gdGhpcy5fY3JlYXRlUmVjb2duaXplcihwYW4sIHtldmVudDogJ3NsaWRlJywgdGhyZXNob2xkOiAwfSwgc3dpcGUpO1xuXG4gICAgcGFuLnJlY29nbml6ZVdpdGgoc3dpcGUpO1xuXG4gICAgLy8gQWRkIGN1c3RvbWl6ZWQgZ2VzdHVyZXMgdG8gSGFtbWVyIG1hbmFnZXJcbiAgICBtYy5hZGQoW3N3aXBlLCBwYW4sIHNsaWRlXSk7XG4gICAgcmV0dXJuIG1jO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBuZXcgcmVjb2duaXplciwgd2l0aG91dCBhZmZlY3RpbmcgdGhlIGRlZmF1bHQgcmVjb2duaXplcnMgb2YgSGFtbWVySlMgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUmVjb2duaXplcihiYXNlOiBhbnksIG9wdGlvbnM6IGFueSwgLi4uaW5oZXJpdGFuY2VzOiBhbnlbXSkge1xuICAgIGNvbnN0IHJlY29nbml6ZXIgPSBuZXcgKGJhc2UuY29uc3RydWN0b3IpKG9wdGlvbnMpO1xuXG4gICAgaW5oZXJpdGFuY2VzLnB1c2goYmFzZSk7XG4gICAgaW5oZXJpdGFuY2VzLmZvckVhY2goaXRlbSA9PiByZWNvZ25pemVyLnJlY29nbml6ZVdpdGgoaXRlbSkpO1xuXG4gICAgcmV0dXJuIHJlY29nbml6ZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lTW9kdWxlIHtcbiAgc3RhdGljIHNldFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMeVRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFtMeVRoZW1lMl0sXG4gICAgICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6IHRoZW1lTmFtZSB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVuZGVmaW5lZCB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBVbmRlZmluZWRWYWx1ZSA9IG5ldyBVbmRlZmluZWQoKTtcbiIsImV4cG9ydCBlbnVtIEludmVydE1lZGlhUXVlcnkge1xuICBObyxcbiAgWWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NZWRpYVF1ZXJ5KG1lZGlhOiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk6IEludmVydE1lZGlhUXVlcnkgPSBJbnZlcnRNZWRpYVF1ZXJ5Lk5vKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICBpZiAobWVkaWEgJiYgaW52ZXJ0TWVkaWFRdWVyeSA9PT0gSW52ZXJ0TWVkaWFRdWVyeS5ZZXMpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBtZWRpYS5zcGxpdCgnLCcpLm1hcChfID0+IGBub3QgJHtffWApO1xuICAgIHJldHVybiBuZXdWYWw7XG4gIH1cbiAgcmV0dXJuIG1lZGlhO1xufVxuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyLCBMeU92ZXJsYXlCYWNrZHJvcCwgV2luZG93U2Nyb2xsU2VydmljZSB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmludGVyZmFjZSBPdmVybGF5Q29uZmlnIHtcbiAgc3R5bGVzOiBPYmplY3Q7XG4gIGZuRGVzdHJveT86ICguLi5hcmcpID0+IHZvaWQ7XG4gIGhvc3Q/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gIC8qKiBEZXRhY2hlcyBhIHZpZXcgZnJvbSBkaXJ0eSBjaGVja2luZyBhZ2FpbiBvZiBBcHBsaWNhdGlvblJlZi4gICovXG4gIGRldGFjaDogKCkgPT4gdm9pZDtcblxuICAvKiogUmVtb3ZlIGVsZW1lbnQgb2YgRE9NICovXG4gIHJlbW92ZTogKCkgPT4gdm9pZDtcblxuICAvKiogRGV0YWNoICYgcmVtb3ZlICovXG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG59XG5jbGFzcyBDcmVhdGVGcm9tVGVtcGxhdGVSZWYgaW1wbGVtZW50cyBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2VsOiBhbnk7XG4gIHByaXZhdGUgX2NvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcml2YXRlIF9jb21wUmVmT3ZlcmxheUJhY2tkcm9wOiBDb21wb25lbnRSZWY8YW55PjtcbiAgd2luZG93U2Nyb2xsU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBfY29udGV4dDogYW55LFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICB3aW5kb3dTY3JvbGw6IFdpbmRvd1Njcm9sbFNlcnZpY2UsXG4gICAgY29uZmlnPzogT3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICAvLyB0aGlzLl92aWV3UmVmID0gX3RlbXBsYXRlUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhfY29udGV4dCk7XG4gICAgLy8gdGhpcy5fdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5fZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290Tm9kZSkpO1xuICAgIGNvbnN0IF9fc3R5bGVzID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIC4uLmNvbmZpZy5zdHlsZXNcbiAgICB9O1xuICAgIGNvbnN0IG5ld0luamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ292ZXJsYXlDb25maWcnLFxuICAgICAgICB1c2VWYWx1ZTogPE92ZXJsYXlDb25maWc+e1xuICAgICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXN0cm95LmJpbmQodGhpcyksXG4gICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgIHN0eWxlczogX19zdHlsZXMsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLCB0aGlzLl9pbmplY3Rvcik7XG5cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyhfX3N0eWxlcyk7XG4gICAgaWYgKGNvbmZpZy5ob3N0KSB7XG4gICAgICB0aGlzLndpbmRvd1Njcm9sbFN1YiA9IHdpbmRvd1Njcm9sbC5zY3JvbGwkLnN1YnNjcmliZSgodmFsKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBjb25maWcuaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHJlY3QudG9wICE9PSBfX3N0eWxlcy50b3AgfHwgcmVjdC5sZWZ0ICE9PSBfX3N0eWxlcy5sZWZ0KSB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMobmV3U3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KEx5T3ZlcmxheUJhY2tkcm9wLCBuZXdJbmplY3Rvcik7XG4gICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQoYmFja2Ryb3BFbCk7XG4gICAgdGhpcy5fYXBwZW5kQ29tcG9uZW50VG9Cb2R5KF90ZW1wbGF0ZVJlZiwgX2NvbnRleHQsIHRoaXMuX2luamVjdG9yKTtcblxuICB9XG5cbiAgdXBkYXRlU3R5bGVzKF9fc3R5bGVzKSB7XG4gICAgLyoqIEFwcGx5IHN0eWxlcyAqL1xuICAgIC8qKiBzZXQgc3R5bGVzICovXG4gICAgZm9yIChjb25zdCBrZXkgaW4gX19zdHlsZXMpIHtcbiAgICAgIGlmIChfX3N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlVmFsID0gX19zdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHN0eWxlVmFsKSB7XG4gICAgICAgICAgdGhpcy5fZWwuc3R5bGVba2V5XSA9IHR5cGVvZiBfX3N0eWxlc1trZXldID09PSAnbnVtYmVyJyA/IGAke3N0eWxlVmFsfXB4YCA6IHN0eWxlVmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ29tcG9uZW50VG9Cb2R5KHR5cGU6IFRlbXBsYXRlUmVmPGFueT4gfCBUeXBlPGFueT4sIGNvbnRleHQsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIC8vIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy5fdmlld1JlZiA9IHR5cGUuY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRleHQgfHwge30pO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIC8vIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChfID0+IHRoaXMuX2VsLmFwcGVuZENoaWxkKF8pKTtcblxuICAgICAgLy8gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb21wUmVmID0gdGhpcy5nZW5lcmF0ZUNvbXBvbmVudCh0eXBlLCBpbmplY3Rvcik7XG4gICAgICB0aGlzLl9lbCA9IHRoaXMuX2NvbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb21wb25lbnQodHlwZTogVHlwZTxhbnk+LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpO1xuICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX3ZpZXdSZWYpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY29tcFJlZikge1xuICAgICAgdGhpcy5fY29tcFJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmRlc3Ryb3koKTtcbiAgICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUoYmFja2Ryb3BFbCk7XG4gICAgfVxuICAgIHRoaXMud2luZG93U2Nyb2xsU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF93aW5kb3dTY3JvbGw6IFdpbmRvd1Njcm9sbFNlcnZpY2VcbiAgKSB7IH1cblxuICBjcmVhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIGNvbnRleHQ/OiBhbnksIGNvbmZpZz86IE92ZXJsYXlDb25maWcpOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgICByZXR1cm4gbmV3IENyZWF0ZUZyb21UZW1wbGF0ZVJlZih0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX2FwcFJlZiwgdGVtcGxhdGUsIHRoaXMuX292ZXJsYXlDb250YWluZXIsIGNvbnRleHQsIHRoaXMuX2luamVjdG9yLCB0aGlzLl93aW5kb3dTY3JvbGwsIGNvbmZpZyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeU92ZXJsYXlCYWNrZHJvcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0x5T3ZlcmxheUJhY2tkcm9wXVxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCA9IHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlXG59O1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeSB7XG4gIGNyZWF0ZShjYWxsYmFjazogTXV0YXRpb25DYWxsYmFjayk6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBFbGVtZW50T2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeTogTXV0YXRpb25PYnNlcnZlckZhY3RvcnlcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMuZGVzdHJveShlbGVtZW50KSk7XG4gIH1cblxuICBvYnNlcnZlKGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4sIGZuOiBNdXRhdGlvbkNhbGxiYWNrLCBvcHRpb25zPzogTXV0YXRpb25PYnNlcnZlckluaXQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5fbXV0YXRpb25PYnNlcnZlckZhY3RvcnkuY3JlYXRlKGZuKTtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9wdGlvbnMgfHwgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IE9ic2VydmVyXG4gICAqL1xuICBkZXN0cm95KGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBZ0IsY0FBYyxDQUFDLFFBQVE7O0lBQ3JDLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7SUFDOUMsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUM5QyxJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBQzlDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDekM7Ozs7OztBQ05EO0FBQ0EsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDOztBQUV2QixJQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQzs7QUFDbEMsSUFBTSx3QkFBd0IsR0FBRyxJQUFJLENBQUM7O0FBQ3RDLElBQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDOztBQUN4QyxJQUFhLE9BQU8sR0FBRztJQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQzNDLENBQUM7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