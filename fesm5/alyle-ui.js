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
var THEME_CONFIG = new InjectionToken('ly.theme.config.root');
/** @type {?} */
var LY_THEME_CONFIG = new InjectionToken('ly_theme_config');
/** @type {?} */
var LY_THEME_NAME = new InjectionToken('ly.theme.name');
var LyThemeConfig = /** @class */ (function () {
    function LyThemeConfig() {
        this.themes = [];
    }
    return LyThemeConfig;
}());

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
    function CoreTheme(themeConfig, rendererFactory, _document) {
        var _this = this;
        this.rendererFactory = rendererFactory;
        this.themes = new Set();
        this._themeMap = new Map();
        this._styleMap = new Map();
        if (!themeConfig) {
            throw new Error('LY_THEME_CONFIG undefined');
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
        if (themeConfig) {
            /** @type {?} */
            var variables_1 = themeConfig.variables;
            /** @type {?} */
            var newVariables_1 = variables_1 && typeof variables_1 === 'function'
                ? new variables_1()
                : variables_1;
            themeConfig.themes.forEach(function (item) {
                /** @type {?} */
                var newTheme = typeof item === 'function' ? new item() : item;
                if (variables_1) {
                    mergeDeep(newTheme, newVariables_1);
                }
                _this.add(newTheme);
                _this.themes.add(newTheme.name);
            });
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
                },] },
    ];
    /** @nocollapse */
    CoreTheme.ctorParameters = function () { return [
        { type: LyThemeConfig, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_CONFIG,] }] },
        { type: RendererFactory2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ CoreTheme.ngInjectableDef = defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(inject(LY_THEME_CONFIG, 8), inject(RendererFactory2), inject(DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
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
                },] },
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
        { type: Injectable },
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
                },] },
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
                },] },
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
                },] },
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
                },] },
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
                },] },
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
        { type: Injectable, args: [{ providedIn: 'root' },] },
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
                },] },
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
                },] },
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
                },] },
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
        { type: Injectable },
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
                },] },
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
                },] },
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
                },] },
    ];
    return LyFocusStateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var AUI_VERSION = '1.7.0-beta.75cav';
/** @type {?} */
var AUI_LAST_UPDATE = '2018-10-01T05:01:38.736Z';

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
        { type: Injectable },
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
        { type: NgModule },
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
                },] },
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
                },] },
    ];
    return LyOverlayModule;
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

export { getContrastYIQ, shadowBuilderDeprecated, shadowBuilder, Shadows, THEME_VARIABLES, IS_CORE_THEME, Platform, LyCommonModule, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, IsBoolean, defaultEntry, DomService, LxDomModule, LyFocusStateModule, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LyCommon, CoreTheme, THEME_CONFIG, LY_THEME_CONFIG, LY_THEME_NAME, LyThemeConfig, toHyphenCase, capitalizeFirstLetter, StylesInDocument, LyTheme2, LyThemeModule, LY_COMMON_STYLES, LyCoreStyles, Undefined, UndefinedValue, transformMediaQuery, InvertMediaQuery, eachMedia, isObject, mergeDeep, LyStyleUtils, WindowScrollService, LyOverlayContainer, LyOverlayBackdrop, LyOverlay, LyOverlayModule, LyWithClass as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlLXV0aWxzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZTIuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2NvbW1vbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2VsL29mZnNldC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2lzLWJvb2xlYW4udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9kZWZhdWx0LWVudHJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbW1vbi5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvd2l0aC1jbGFzcy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXktY29udGFpbmVyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9kb20uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbHgtZG9tLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3ZlcnNpb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZ2VzdHVyZS9nZXN0dXJlLWNvbmZpZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdW5kZWZpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0WUlRKGhleGNvbG9yKSB7XG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigyLCAyKSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XG4gIGNvbnN0IHlpcSA9ICgociAqIDI5OSkgKyAoZyAqIDU4NykgKyAoYiAqIDExNCkpIC8gMTAwMDtcbiAgcmV0dXJuICh5aXEgPj0gMTI4KSA/ICdibGFjaycgOiAnd2hpdGUnO1xufVxuIiwiaW1wb3J0ICogYXMgX2Nocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuY29uc3QgY2hyb21hID0gX2Nocm9tYTtcblxuY29uc3Qgc2hhZG93S2V5VW1icmFPcGFjaXR5ID0gMC4yO1xuY29uc3Qgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbmNvbnN0IHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcbmV4cG9ydCBjb25zdCBTaGFkb3dzID0gW1xuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAxLCAzLCAwLCAwLCAxLCAxLCAwLCAwLCAyLCAxLCAtMV0sXG4gIFswLCAxLCA1LCAwLCAwLCAyLCAyLCAwLCAwLCAzLCAxLCAtMl0sXG4gIFswLCAxLCA4LCAwLCAwLCAzLCA0LCAwLCAwLCAzLCAzLCAtMl0sXG4gIFswLCAyLCA0LCAtMSwgMCwgNCwgNSwgMCwgMCwgMSwgMTAsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDUsIDgsIDAsIDAsIDEsIDE0LCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA2LCAxMCwgMCwgMCwgMSwgMTgsIDBdLFxuICBbMCwgNCwgNSwgLTIsIDAsIDcsIDEwLCAxLCAwLCAyLCAxNiwgMV0sXG4gIFswLCA1LCA1LCAtMywgMCwgOCwgMTAsIDEsIDAsIDMsIDE0LCAyXSxcbiAgWzAsIDUsIDYsIC0zLCAwLCA5LCAxMiwgMSwgMCwgMywgMTYsIDJdLFxuICBbMCwgNiwgNiwgLTMsIDAsIDEwLCAxNCwgMSwgMCwgNCwgMTgsIDNdLFxuICBbMCwgNiwgNywgLTQsIDAsIDExLCAxNSwgMSwgMCwgNCwgMjAsIDNdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEyLCAxNywgMiwgMCwgNSwgMjIsIDRdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEzLCAxOSwgMiwgMCwgNSwgMjQsIDRdLFxuICBbMCwgNywgOSwgLTQsIDAsIDE0LCAyMSwgMiwgMCwgNSwgMjYsIDRdLFxuICBbMCwgOCwgOSwgLTUsIDAsIDE1LCAyMiwgMiwgMCwgNiwgMjgsIDVdLFxuICBbMCwgOCwgMTAsIC01LCAwLCAxNiwgMjQsIDIsIDAsIDYsIDMwLCA1XSxcbiAgWzAsIDgsIDExLCAtNSwgMCwgMTcsIDI2LCAyLCAwLCA2LCAzMiwgNV0sXG4gIFswLCA5LCAxMSwgLTUsIDAsIDE4LCAyOCwgMiwgMCwgNywgMzQsIDZdLFxuICBbMCwgOSwgMTIsIC02LCAwLCAxOSwgMjksIDIsIDAsIDcsIDM2LCA2XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIwLCAzMSwgMywgMCwgOCwgMzgsIDddLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjEsIDMzLCAzLCAwLCA4LCA0MCwgN10sXG4gIFswLCAxMCwgMTQsIC02LCAwLCAyMiwgMzUsIDMsIDAsIDgsIDQyLCA3XSxcbiAgWzAsIDExLCAxNCwgLTcsIDAsIDIzLCAzNiwgMywgMCwgOSwgNDQsIDhdLFxuICBbMCwgMTEsIDE1LCAtNywgMCwgMjQsIDM4LCAzLCAwLCA5LCA0NiwgOF1cbl07XG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcgPSAyLCBjb2xvciA9ICcjMDAwJykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvcik7XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGBib3gtc2hhZG93OiR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlcihlbGV2YXRpb246IG51bWJlciB8IHN0cmluZywgY29sb3I/OiBzdHJpbmcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IgfHwgJyMwMDAnKS5kYXJrZW4oKS5zYXR1cmF0ZSgyKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYCR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xyXG5leHBvcnQgY29uc3QgSVNfQ09SRV9USEVNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjx0cnVlPignbHkuaXMucm9vdCcpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuLy8gZXhwb3J0IGNsYXNzIDxkZXByZWNhdGVkPlRoZW1lVmFyaWFibGVzIHtcclxuLy8gICAvKiogVGhlbWUgbmFtZSAqL1xyXG4vLyAgIG5hbWU6IHN0cmluZztcclxuLy8gICBwcmltYXJ5PzogUGFsZXR0ZVZhcmlhYmxlcztcclxuLy8gICBhY2NlbnQ/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4vLyAgIC8qKiB3YXJuIG9yIGVycm9yIGNvbG9yICovXHJcbi8vICAgd2Fybj86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbi8vICAgc2NoZW1lPzogc3RyaW5nO1xyXG4vLyAgIGNvbG9yU2NoZW1lcz86IHtcclxuLy8gICAgIFtrZXk6IHN0cmluZ106IENvbG9yU2NoZW1lXHJcbi8vICAgfTtcclxuLy8gICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4vLyB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xyXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XHJcbiAgY29udHJhc3Q/OiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcclxuICBiYWNrZ3JvdW5kPzoge1xyXG4gICAgZGVmYXVsdD86IHN0cmluZyxcclxuICAgIHBhcGVyPzogc3RyaW5nLFxyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbiAgdGV4dD86IHtcclxuICAgIGRlZmF1bHQ6IHN0cmluZyxcclxuICAgIHByaW1hcnk/OiBzdHJpbmcsXHJcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IHN0cmluZyxcclxuICAgIGhpbnQ/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICBkaXZpZGVyPzogc3RyaW5nO1xyXG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xyXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xyXG4gIGJhcj86IHN0cmluZztcclxuICBpbnB1dD86IHtcclxuICAgIGxhYmVsPzogc3RyaW5nLFxyXG4gICAgdW5kZXJsaW5lPzogc3RyaW5nXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuIiwiXHJcbi8vIFdoZXRoZXIgdGhlIGN1cnJlbnQgcGxhdGZvcm0gc3VwcG9ydHMgdGhlIFY4IEJyZWFrIEl0ZXJhdG9yLiBUaGUgVjggY2hlY2tcclxuLy8gaXMgbmVjZXNzYXJ5IHRvIGRldGVjdCBhbGwgQmxpbmsgYmFzZWQgYnJvd3NlcnMuXHJcbmNvbnN0IGhhc1Y4QnJlYWtJdGVyYXRvciA9ICh0eXBlb2YoSW50bCkgIT09ICd1bmRlZmluZWQnICYmIChJbnRsIGFzIGFueSkudjhCcmVha0l0ZXJhdG9yKTtcclxuLyoqXHJcbiAqIFNlcnZpY2UgdG8gZGV0ZWN0IHRoZSBjdXJyZW50IHBsYXRmb3JtIGJ5IGNvbXBhcmluZyB0aGUgdXNlckFnZW50IHN0cmluZ3MgYW5kXHJcbiAqIGNoZWNraW5nIGJyb3dzZXItc3BlY2lmaWMgZ2xvYmFsIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm0ge1xyXG4gIHN0YXRpYyByZWFkb25seSBpc0Jyb3dzZXI6IGJvb2xlYW4gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQ7XHJcbiAgLyoqIExheW91dCBFbmdpbmVzICovXHJcbiAgRURHRSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGVkZ2UpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICBUUklERU5UID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gIC8vIEVkZ2VIVE1MIGFuZCBUcmlkZW50IG1vY2sgQmxpbmsgc3BlY2lmaWMgdGhpbmdzIGFuZCBuZWVkIHRvIGJlIGV4Y2x1ZGVkIGZyb20gdGhpcyBjaGVjay5cclxuICBCTElOSyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxyXG4gICAgICAoISEoKHdpbmRvdyBhcyBhbnkpLmNocm9tZSB8fCBoYXNWOEJyZWFrSXRlcmF0b3IpICYmICEhQ1NTICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVCk7XHJcblxyXG4gIC8vIFdlYmtpdCBpcyBwYXJ0IG9mIHRoZSB1c2VyQWdlbnQgaW4gRWRnZUhUTUwsIEJsaW5rIGFuZCBUcmlkZW50LiBUaGVyZWZvcmUgd2UgbmVlZCB0b1xyXG4gIC8vIGVuc3VyZSB0aGF0IFdlYmtpdCBydW5zIHN0YW5kYWxvbmUgYW5kIGlzIG5vdCB1c2VkIGFzIGFub3RoZXIgZW5naW5lJ3MgYmFzZS5cclxuICBXRUJLSVQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcclxuICAgICAgL0FwcGxlV2ViS2l0L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhdGhpcy5CTElOSyAmJiAhdGhpcy5FREdFICYmICF0aGlzLlRSSURFTlQ7XHJcblxyXG4gIC8qKiBCcm93c2VycyBhbmQgUGxhdGZvcm0gVHlwZXMgKi9cclxuICBJT1MgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgISh3aW5kb3cgYXMgYW55KS5NU1N0cmVhbTtcclxuXHJcbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcclxuICAvLyB0aGVtIHNlbGYgYXMgR2Vja28tbGlrZSBicm93c2VycyBhbmQgbW9kaWZ5IHRoZSB1c2VyQWdlbnQncyBhY2NvcmRpbmcgdG8gdGhhdC5cclxuICAvLyBTaW5jZSB3ZSBvbmx5IGNvdmVyIG9uZSBleHBsaWNpdCBGaXJlZm94IGNhc2UsIHdlIGNhbiBzaW1wbHkgY2hlY2sgZm9yIEZpcmVmb3hcclxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXHJcbiAgRklSRUZPWCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGZpcmVmb3h8bWluZWZpZWxkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gIC8vIFRyaWRlbnQgb24gbW9iaWxlIGFkZHMgdGhlIGFuZHJvaWQgcGxhdGZvcm0gdG8gdGhlIHVzZXJBZ2VudCB0byB0cmljayBkZXRlY3Rpb25zLlxyXG4gIEFORFJPSUQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLlRSSURFTlQ7XHJcblxyXG4gIC8vIFNhZmFyaSBicm93c2VycyB3aWxsIGluY2x1ZGUgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZWlyIHVzZXJBZ2VudC4gU29tZSBicm93c2VycyBtYXkgZmFrZVxyXG4gIC8vIHRoaXMgYW5kIGp1c3QgcGxhY2UgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZSB1c2VyQWdlbnQuIFRvIGJlIG1vcmUgc2FmZSBhYm91dCBTYWZhcmkgZXZlcnlcclxuICAvLyBTYWZhcmkgYnJvd3NlciBzaG91bGQgYWxzbyB1c2UgV2Via2l0IGFzIGl0cyBsYXlvdXQgZW5naW5lLlxyXG4gIFNBRkFSSSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiB0aGlzLldFQktJVDtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTdHlsZVV0aWxzIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgVEhFTUVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFRoZW1lQ29uZmlnIHwgVGhlbWVDb25maWdbXT4oJ2x5LnRoZW1lLmNvbmZpZy5yb290Jyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEx5VGhlbWVDb25maWc+KCdseV90aGVtZV9jb25maWcnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2x5LnRoZW1lLm5hbWUnKTtcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYWNjZW50OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICB3YXJuOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBiYWNrZ3JvdW5kOiB7XG4gICAgLyoqIHNlY29uZGFyeSAqL1xuICAgIGRlZmF1bHQ6IHN0cmluZyxcbiAgICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yLFxuICAgIHNlY29uZGFyeTogc3RyaW5nLFxuICAgIHRlcnRpYXJ5OiBzdHJpbmcsXG4gICAgYmFzZTogc3RyaW5nXG4gIH07XG4gIHRleHQ6IHtcbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeTogc3RyaW5nLFxuICAgIHNlY29uZGFyeTogc3RyaW5nLFxuICAgIGRpc2FibGVkOiBzdHJpbmcsXG4gICAgaGludDogc3RyaW5nXG4gIH07XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICAvKiogY29sb3IgZm9yIGRpdmlkZXIgKi9cbiAgZGl2aWRlcjogc3RyaW5nO1xuICBzaGFkb3c6IHN0cmluZztcbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBzaGFkb3cgaW5zdGVhZCAqL1xuICBjb2xvclNoYWRvdz86IHN0cmluZztcbiAgYnV0dG9uOiB7XG4gICAgZGlzYWJsZWQ6IHN0cmluZztcbiAgfTtcbiAgcmFkaW86IHtcbiAgICAvKiogY29sb3IgZm9yIHJhZGlvOm91dGVyQ2lyY2xlICovXG4gICAgb3V0ZXJDaXJjbGU/OiBzdHJpbmc7XG4gICAgLyoqIEBkZXByZWNhdGVkIHVzZSBvdXRlckNpcmNsZSBpbnN0ZWFkICovXG4gICAgcmFkaW9PdXRlckNpcmNsZT86IHN0cmluZztcbiAgfTtcbiAgbWVudToge1xuICAgIGJnOiBzdHJpbmc7XG4gIH07XG4gIGRyYXdlcjoge1xuICAgIC8qKiBjb2xvciBmb3IgZHJhd2VyOmJhY2tkcm9wICovXG4gICAgYmFja2Ryb3A6IHN0cmluZ1xuICB9O1xuICBpbnB1dDoge1xuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgdW5kZXJsaW5lOiBzdHJpbmcsXG4gICAgLyoqIGRlZmF1bHQgY29sb3IgKi9cbiAgICB3aXRoQ29sb3I6IHN0cmluZ1xuICB9O1xuICBpY29uQnV0dG9uOiB7XG4gICAgc2l6ZTogc3RyaW5nXG4gIH07XG4gIGljb246IHtcbiAgICBmb250U2l6ZTogc3RyaW5nXG4gIH07XG4gIHpJbmRleDoge1xuICAgIHRvb2xiYXI6IG51bWJlclxuICAgIGRyYXdlcjogbnVtYmVyXG4gICAgb3ZlcmxheTogbnVtYmVyXG4gICAgW2tleTogc3RyaW5nXTogbnVtYmVyXG4gIH07XG4gIGFuaW1hdGlvbnM6IHtcbiAgICBjdXJ2ZXM6IHtcbiAgICAgIHN0YW5kYXJkOiBzdHJpbmdcbiAgICAgIGRlY2VsZXJhdGlvbjogc3RyaW5nXG4gICAgICBhY2NlbGVyYXRpb246IHN0cmluZ1xuICAgICAgc2hhcnA6IHN0cmluZ1xuICAgIH0sXG4gICAgZHVyYXRpb25zOiB7XG4gICAgICBjb21wbGV4OiBudW1iZXJcbiAgICAgIGVudGVyaW5nOiBudW1iZXJcbiAgICAgIGV4aXRpbmc6IG51bWJlclxuICAgIH1cbiAgfTtcbiAgcmlwcGxlOiBJUmlwcGxlVmFyaWFibGVzO1xufVxuXG5leHBvcnQgdHlwZSBQYXJ0aWFsVGhlbWVDb25maWcgPSBQYXJ0aWFsPFRoZW1lQ29uZmlnPjtcblxuZXhwb3J0IHR5cGUgVGhlbWVWYXJpYWJsZXMgPSBMeVN0eWxlVXRpbHMgJiBUaGVtZUNvbmZpZztcblxuZXhwb3J0IGNsYXNzIEx5VGhlbWVDb25maWcge1xuICB0aGVtZXM6IGFueVtdID0gW107XG4gIC8qKiBnbG9iYWwgdmFyaWFibGVzICovXG4gIHZhcmlhYmxlcz86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0VmFsIHtcbiAgZGVmYXVsdDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlQ29sb3Ige1xuICBjb250cmFzdD86IHN0cmluZztcbiAgLyoqIHNoYWRvdyBjb2xvciAqL1xuICBzaGFkb3c/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJpcHBsZVZhcmlhYmxlcyB7XG4gIHRyYW5zaXRpb246IHtcbiAgICBvcGFjaXR5OiBzdHJpbmdcbiAgICB0cmFuc2Zvcm06IHN0cmluZ1xuICB9O1xuICBkdXJhdGlvbjogbnVtYmVyO1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBUeXBvZ3JhcGh5Q29uZmlnIHtcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFdlaWdodD86IG51bWJlcjtcbiAgbGV0dGVyU3BhY2luZz86IG51bWJlcjtcbiAgdGV4dFRyYW5zZm9ybT86ICd1cHBlcmNhc2UnIHwgJ2NhcGl0YWxpemUnIHwgJ2xvd2VyY2FzZSc7XG4gIGd1dHRlclRvcD86IG51bWJlcjtcbiAgZ3V0dGVyQm90dG9tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgaHRtbEZvbnRTaXplOiBudW1iZXIsXG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgfTtcbiAgYnJlYWtwb2ludHM6IHtcbiAgICBYU21hbGw6IHN0cmluZyxcbiAgICBTbWFsbDogc3RyaW5nLFxuICAgIE1lZGl1bTogc3RyaW5nLFxuICAgIExhcmdlOiBzdHJpbmcsXG4gICAgWExhcmdlOiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0OiBzdHJpbmcsXG4gICAgVGFibGV0OiBzdHJpbmcsXG4gICAgV2ViOiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0UG9ydHJhaXQ6IHN0cmluZyxcbiAgICBUYWJsZXRQb3J0cmFpdDogc3RyaW5nLFxuICAgIFdlYlBvcnRyYWl0OiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0TGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgVGFibGV0TGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgV2ViTGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH07XG4gIGRpcmVjdGlvbj86ICdsdHInIHwgJ3J0bCc7XG4gIHB4VG9SZW0odmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLnR5cG9ncmFwaHkuZm9udFNpemUgLyAxNDtcbiAgICByZXR1cm4gYCR7dmFsdWUgLyB0aGlzLnR5cG9ncmFwaHkuaHRtbEZvbnRTaXplICogc2l6ZX1yZW1gO1xuICB9XG4gIGNvbG9yT2YodmFsdWU6IHN0cmluZywgb3B0aW9uYWw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcywgdmFsdWUsIG9wdGlvbmFsKTtcbiAgfVxuICBnZXRCcmVha3BvaW50KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBAbWVkaWEgJHt0aGlzLmJyZWFrcG9pbnRzW2tleV0gfHwga2V5fWA7XG4gIH1cblxuICBnZXREaXJlY3Rpb24odmFsOiAnc3RhcnQnIHwgJ2VuZCcpIHtcbiAgICBpZiAodmFsID09PSAnZW5kJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGdldCBjb2xvciBvZiBvYmplY3RcbiAqIEBwYXJhbSBvYmogb2JqZWN0XG4gKiBAcGFyYW0gcGF0aCBwYXRoXG4gKiBAcGFyYW0gb3B0aW9uYWwgZ2V0IG9wdGlvbmFsIHZhbHVlLCBpZiBub3QgZXhpc3QgcmV0dXJuIGRlZmF1bHQgaWYgbm90IGlzIHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IHN0cmluZ1tdIHwgc3RyaW5nLCBvcHRpb25hbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBvc2libGVPYiA9IG9ialtfcGF0aFtpXV07XG4gICAgaWYgKHBvc2libGVPYikge1xuICAgICAgb2JqID0gcG9zaWJsZU9iO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiogaWYgbm90IGV4aXN0ICovXG4gICAgICByZXR1cm4gcGF0aCBhcyBzdHJpbmc7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvYmogYXMgc3RyaW5nO1xuICB9IGVsc2UgaWYgKG9wdGlvbmFsKSB7XG4gICAgcmV0dXJuIG9ialtvcHRpb25hbF0gfHwgb2JqWydkZWZhdWx0J107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9ialsnZGVmYXVsdCddO1xuICB9XG4gIC8vIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYWNoTWVkaWEoc3RyOiBzdHJpbmcgfCBudW1iZXIsIGZuOiAoKHZhbDogc3RyaW5nLCBtZWRpYTogc3RyaW5nLCBpc01lZGlhOiBudW1iZXIpID0+IHZvaWQpKSB7XG4gIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHZhbHVlcyA9IHN0ci5zcGxpdCgvXFxzL2cpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCB2YWxJdGVtID0gdmFsdWVzW2luZGV4XS5zcGxpdCgvXFxAL2cpO1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWxJdGVtLnNoaWZ0KCk7XG4gICAgICBjb25zdCBsZW4gPSB2YWxJdGVtLmxlbmd0aDtcbiAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdmFsSXRlbVtqXSwgdmFsSXRlbS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHVuZGVmaW5lZCwgbGVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm4uY2FsbCh1bmRlZmluZWQsIHN0ciwgdW5kZWZpbmVkLCAwKTtcbiAgfVxufVxuLyoqXG4gKiBTaW1wbGUgb2JqZWN0IGNoZWNrLlxuICogQHBhcmFtIGl0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5cbi8qKlxuICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSAuLi5zb3VyY2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICghc291cmNlcy5sZW5ndGgpIHsgcmV0dXJuIHRhcmdldDsgfVxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XG5cbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7IE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiB7fSB9KTsgfVxuICAgICAgICBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUVfQ09ORklHLCBMeVRoZW1lQ29uZmlnLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBtZXJnZURlZXAgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVUaGVtZSB7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIG1lZGlhU3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcmltYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIGZpcnN0RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHJlYWRvbmx5IHRoZW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIF90aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZVZhcmlhYmxlcz4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgRGF0YVN0eWxlPj4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9DT05GSUcpIHRoZW1lQ29uZmlnOiBMeVRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUVfQ09ORklHIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwge1xuICAgICAgaWQ6ICdseScsXG4gICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0ID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnbHktcy1jJyk7XG4gICAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZXMuaXRlbShpbmRleCk7XG4gICAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5maXJzdEVsZW1lbnQgPSBfZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICAgIGlmICh0aGVtZUNvbmZpZykge1xuICAgICAgY29uc3QgdmFyaWFibGVzID0gdGhlbWVDb25maWcudmFyaWFibGVzO1xuICAgICAgY29uc3QgbmV3VmFyaWFibGVzID0gdmFyaWFibGVzICYmIHR5cGVvZiB2YXJpYWJsZXMgPT09ICdmdW5jdGlvbidcbiAgICAgID8gbmV3IHZhcmlhYmxlcygpXG4gICAgICA6IHZhcmlhYmxlcztcbiAgICAgIHRoZW1lQ29uZmlnLnRoZW1lcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBuZXdUaGVtZSA9IHR5cGVvZiBpdGVtID09PSAnZnVuY3Rpb24nID8gbmV3IGl0ZW0oKSA6IGl0ZW07XG4gICAgICAgIGlmICh2YXJpYWJsZXMpIHtcbiAgICAgICAgICBtZXJnZURlZXAobmV3VGhlbWUsIG5ld1ZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGQobmV3VGhlbWUpO1xuICAgICAgICB0aGlzLnRoZW1lcy5hZGQobmV3VGhlbWUubmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIG5ldyB0aGVtZVxuICAgKiBAcGFyYW0gdGhlbWU6IFRoZW1lVmFyaWFibGVzXG4gICAqL1xuICBhZGQodGhlbWU6IFRoZW1lVmFyaWFibGVzKSB7XG4gICAgdGhpcy5fdGhlbWVNYXAuc2V0KHRoZW1lLm5hbWUsIHRoZW1lKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5zZXQodGhlbWUubmFtZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVNYXAuZ2V0KG5hbWUpO1xuICB9XG4gIGdldFN0eWxlTWFwKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZU1hcC5nZXQobmFtZSk7XG4gIH1cblxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgaWYgKG9sZENsYXNzbmFtZSkge1xuICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3NuYW1lKTtcbiAgICB9XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmV3Q2xhc3NuYW1lKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICdAZ2xvYmFsJzoge1xuICAgICcqLCAqOmFmdGVyLCAqOmJlZm9yZSc6IHtcbiAgICAgICctd2Via2l0LWJveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnLW1vei1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCdcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IFJFRl9SRUdfRVhQID0gL1xceyhbXFx3LV0rKVxcfS9nO1xuXG5lbnVtIFR5cGVTdHlsZSB7XG4gIE11bHRpcGxlLFxuICBPbmx5T25lXG59XG5jb25zdCBTVFlMRV9NQVA0OiBTdHlsZU1hcDQgPSB7fTtcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVNYXA0IHtcbiAgW2lkOiBzdHJpbmddOiB7XG4gICAgc3R5bGVzOiBTdHlsZXNGbjI8YW55PiB8IFN0eWxlczJcbiAgICB0eXBlOiBUeXBlU3R5bGVcbiAgICBwcmlvcml0eTogbnVtYmVyXG4gICAgY3NzOiB7XG4gICAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgICB9IHwgc3RyaW5nXG4gICAgcmVxdWlyZVVwZGF0ZT86IGJvb2xlYW5cbiAgfTtcbn1cbmNvbnN0IENMQVNTRVNfTUFQOiB7XG4gIFtpZE9yVGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgW2NsYXNzTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmdcbn0gPSB7fTtcbmNvbnN0IFNUWUxFX0tFWVNfTUFQID0ge307XG5sZXQgbmV4dElkID0gMDtcbi8vIGZ1bmN0aW9uIGZuKCkge1xuLy8gICByZXR1cm4gQ0xBU1NFU19NQVA7XG4vLyB9XG4vLyBjb25zb2xlLmxvZyh7Zm59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVzSW5Eb2N1bWVudCB7XG4gIHN0eWxlczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IEhUTUxTdHlsZUVsZW1lbnRcbiAgICB9XG4gIH0gPSB7fTtcbiAgc3R5bGVDb250YWluZXJzID0gbmV3IE1hcDxudW1iZXIsIEhUTUxFbGVtZW50PigpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lVmFyaWFibGVzO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG4gIGluaXRpYWxUaGVtZTogc3RyaW5nO1xuICBlbGVtZW50czoge1xuICAgIFtrZXk6IHN0cmluZ106IEhUTUxTdHlsZUVsZW1lbnRcbiAgfTtcblxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gQ0xBU1NFU19NQVA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlc0luRG9jdW1lbnQ6IFN0eWxlc0luRG9jdW1lbnQsXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICB0aGlzLl9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gdGhlbWVOYW1lIGluIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNcbiAgICAgID8gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdXG4gICAgICA6IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXSA9IHt9O1xuICAgICAgdGhpcy5fY3JlYXRlSW5zdGFuY2VGb3JUaGVtZSh0aGVtZU5hbWUpO1xuICAgICAgaWYgKCF0aGlzLmluaXRpYWxUaGVtZSkge1xuICAgICAgICB0aGlzLmluaXRpYWxUaGVtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgICB9XG4gICAgICB0aGlzLl9hZGREZWZhdWx0U3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBkeW5hbWljIHN0eWxlLCB1c2Ugb25seSB3aXRoaW4gQElucHV0KClcbiAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZFxuICAgKiBAcGFyYW0gc3R5bGUgU3R5bGVzXG4gICAqIEBwYXJhbSBlbCBFbGVtZW50XG4gICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2Ugb2YgdGhpcywgdGhpcyByZXBsYWNlcyB0aGUgZXhpc3Rpbmcgc3R5bGUgd2l0aCBhIG5ldyBvbmUgd2hlbiBpdCBjaGFuZ2VzXG4gICAqL1xuICBhZGRTdHlsZShpZDogc3RyaW5nLCBzdHlsZTogU3R5bGVDb250YWluZXIgfCAoKHRoZW1lKSA9PiBTdHlsZUNvbnRhaW5lcikgfCAoKHRoZW1lKSA9PiBzdHJpbmcpIHwgc3RyaW5nLCBlbD86IGFueSwgaW5zdGFuY2U/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmFkZENzcyhpZCwgc3R5bGUgYXMgYW55LCBwcmlvcml0eSk7XG4gICAgaWYgKG5ld0NsYXNzID09PSBpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICBpZiAoZWwpIHtcbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICBpZiAobmV3Q2xhc3MgPT09IG9sZENsYXNzKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzcywgb2xkQ2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBzZXRUaGVtZShuYW06IHN0cmluZykge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHRoZW1lLnNldFRoZW1lKCd0aGVtZS1uYW1lJylcXGAgaXMgb25seSBhdmFpbGFibGUgaW4gYnJvd3NlciBwbGF0Zm9ybWApO1xuICAgIH1cbiAgICBpZiAobmFtICE9PSB0aGlzLmNvbmZpZy5uYW1lKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQobmFtKTtcblxuICAgICAgY29uc3QgY3VycmVudFN0eWxlcyA9IHRoaXMuZWxlbWVudHM7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBjdXJyZW50U3R5bGVzKSB7XG4gICAgICAgIGlmIChjdXJyZW50U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb25zdCBzdHlsZURhdGEgPSBTVFlMRV9NQVA0W2tleV07XG4gICAgICAgICAgaWYgKHN0eWxlRGF0YS5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlRGF0YS5zdHlsZXMsIGtleSwgc3R5bGVEYXRhLnByaW9yaXR5LCBzdHlsZURhdGEudHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBzdHlsZSwgc2ltaWxhciB0byBzZXRVcFN0eWxlIGJ1dCB0aGlzIG9ubHkgYWNjZXB0IHN0cmluZ1xuICAgKiBAcGFyYW0gaWQgaWQgb2Ygc3R5bGVcbiAgICogQHBhcmFtIGNzcyBzdHlsZSBpbiBzdHJpbmdcbiAgICovXG4gIHByaXZhdGUgYWRkQ3NzKGlkOiBzdHJpbmcsIGNzczogKCh0KSA9PiBzdHJpbmcpIHwgc3RyaW5nLCBwcmlvcml0eTogbnVtYmVyLCBtZWRpYT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbmV3SWQgPSBgfj4ke2lkfWA7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoY3NzIGFzIGFueSwgbmV3SWQsIHByaW9yaXR5LCBUeXBlU3R5bGUuT25seU9uZSwgZmFsc2UsIG1lZGlhKSBhcyBzdHJpbmc7XG4gIH1cbiAgcHJpdmF0ZSBfYWRkRGVmYXVsdFN0eWxlcygpIHtcbiAgICB0aGlzLmFkZFN0eWxlU2hlZXQoZGVmYXVsdFN0eWxlcywgJ2x5LS1kZWZhdWx0U3R5bGVzJyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5ldyBhZGQgYSBuZXcgc3R5bGUgc2hlZXRcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZXNcbiAgICogQHBhcmFtIGlkIHVuaXF1ZSBpZCBmb3Igc3R5bGUgZ3JvdXBcbiAgICovXG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgKFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIpLCBpZD86IHN0cmluZywgcHJpb3JpdHk/OiBudW1iZXIpOiBJQ2xhc3NlczxUPiB7XG4gICAgY29uc3QgbmV3SWQgPSBpZCB8fCAnZ2xvYmFsJztcbiAgICAvLyBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk11bHRpcGxlKTtcbiAgfVxuXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQyPFQ+KFxuICAgIHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMixcbiAgICBpZDogc3RyaW5nLFxuICAgIHByaW9yaXR5OiBudW1iZXIsXG4gICAgdHlwZTogVHlwZVN0eWxlLFxuICAgIGZvckNoYW5nZVRoZW1lPzogYm9vbGVhbixcbiAgICBtZWRpYT86IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBzdHlsZU1hcCA9IChpZCBpbiBTVFlMRV9NQVA0XG4gICAgPyBTVFlMRV9NQVA0W2lkXVxuICAgIDogU1RZTEVfTUFQNFtpZF0gPSB7XG4gICAgICBwcmlvcml0eSxcbiAgICAgIHN0eWxlcyxcbiAgICAgIHR5cGUsXG4gICAgICBjc3M6IHt9XG4gICAgfSk7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gdGhpcy5pbml0aWFsVGhlbWU7XG4gICAgY29uc3QgaXNDcmVhdGVkID0gKGlkIGluIENMQVNTRVNfTUFQKSB8fCBDTEFTU0VTX01BUFt0aGVtZU5hbWVdW2lkXTtcbiAgICBpZiAoIWlzQ3JlYXRlZCB8fCBmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgLyoqIGNyZWF0ZSBuZXcgc3R5bGUgZm9yIG5ldyB0aGVtZSAqL1xuICAgICAgbGV0IGNzcztcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXModGhpcy5jb25maWcpLCB0aGVtZU5hbWUsIGlzQ3JlYXRlZCwgaWQsIHR5cGUsIG1lZGlhKTtcbiAgICAgICAgaWYgKCFmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICAgIHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdID0gY3NzO1xuICAgICAgICAgIHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBjcmVhdGUgYSBuZXcgaWQgZm9yIHN0eWxlIHRoYXQgZG9lcyBub3QgPC08cmVxdWlyZT4tPiBjaGFuZ2VzICovXG4gICAgICAgIENMQVNTRVNfTUFQW2lkXSA9IHRydWUgYXMgYW55O1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzLCB0aGVtZU5hbWUsIGlzQ3JlYXRlZCwgaWQsIHR5cGUsIG1lZGlhKTtcbiAgICAgICAgc3R5bGVNYXAuY3NzID0gY3NzO1xuICAgICAgfVxuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRzW2lkXVxuICAgICAgPyB0aGlzLmVsZW1lbnRzW2lkXVxuICAgICAgOiB0aGlzLmVsZW1lbnRzW2lkXSA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShcbiAgICAgICAgY3NzXG4gICAgICApO1xuICAgICAgaWYgKGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSksIGVsKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyoqXG4gICAgICAgKiBhcHBlbmQgY2hpbGQgc3R5bGUgaWYgbm90IGV4aXN0IGluIGRvbVxuICAgICAgICogZm9yIHNzciBvciBobXJcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzW2lkXSkge1xuICAgICAgICBjb25zdCBfY3NzID0gc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV0gfHwgc3R5bGVNYXAuY3NzO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50c1tpZF0gPSB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoX2Nzcyk7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSksIGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzZXMgPSB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnc3RyaW5nJ1xuICAgID8gQ0xBU1NFU19NQVBbaWRdXG4gICAgOiB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnb2JqZWN0J1xuICAgID8gQ0xBU1NFU19NQVBbaWRdXG4gICAgOiBDTEFTU0VTX01BUFt0aGVtZU5hbWVdW2lkXTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHByaW9yaXR5ID0gMCkge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgaWYgKCFzdHlsZUNvbnRhaW5lcnMuaGFzKHByaW9yaXR5KSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudChgbHktcy1jYCk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3ByaW9yaXR5JywgYCR7cHJpb3JpdHl9YCk7XG4gICAgICB9XG4gICAgICBzdHlsZUNvbnRhaW5lcnMuc2V0KHByaW9yaXR5LCBlbCk7XG4gICAgICBpZiAoc3R5bGVDb250YWluZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBlbCwgdGhpcy5fZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gICAgfVxuICAgIGNvbnN0IHJlZkNoaWxkID0gdGhpcy5maW5kTm9kZShwcmlvcml0eSk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KSwgcmVmQ2hpbGQpO1xuICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE5vZGUoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgY29uc3Qga2V5cyA9IChBcnJheS5mcm9tKHN0eWxlQ29udGFpbmVycy5rZXlzKCkpKS5zb3J0KCk7XG4gICAgY29uc3Qga2V5ID0ga2V5cy5maW5kKF8gPT4gaW5kZXggPCBfKTtcbiAgICByZXR1cm4gKGtleSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlQ29udGFpbmVycy5nZXQoa2V5KSkgfHwgdGhpcy5jb3JlLmZpcnN0RWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVsZW1lbnRTdHlsZShjc3M6IHN0cmluZykge1xuICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVUZXh0KGNzcyk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCwgc3R5bGVUZXh0KTtcbiAgICByZXR1cm4gc3R5bGVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlSW5zdGFuY2VGb3JUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghKHRoZW1lTmFtZSBpbiBDTEFTU0VTX01BUCkpIHtcbiAgICAgIENMQVNTRVNfTUFQW3RoZW1lTmFtZV0gPSB7fTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXIgfCBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVzMiB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyO1xufVxuZXhwb3J0IHR5cGUgU3R5bGVzRm4yPFQ+ID0gKFQpID0+IFN0eWxlczI7XG5cbmZ1bmN0aW9uIGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXM6IFN0eWxlczIsIHRoZW1lTmFtZTogc3RyaW5nLCBfY2xhc3Nlc186IHN0cmluZyB8IHt9LCBpZDogc3RyaW5nLCB0eXBlU3R5bGU6IFR5cGVTdHlsZSwgbWVkaWE/OiBzdHJpbmcpIHtcbiAgaWYgKHR5cGVTdHlsZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUpIHtcbiAgICAvKiogdXNlIGN1cnJlbnQgY2xhc3Mgb3Igc2V0IG5ldyAqL1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IENMQVNTRVNfTUFQW2lkXVxuICAgID8gQ0xBU1NFU19NQVBbaWRdID0gX2NsYXNzZXNfIHx8IGNyZWF0ZU5leHRJZCgpXG4gICAgOiBDTEFTU0VTX01BUFt0aGVtZU5hbWVdW2lkXSA9IF9jbGFzc2VzXyB8fCBjcmVhdGVOZXh0SWQoKTtcbiAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGNzcyA9IGAuJHtjbGFzc05hbWV9eyR7c3R5bGVzfX1gO1xuICAgICAgcmV0dXJuIG1lZGlhID8gdG9NZWRpYShjc3MsIG1lZGlhKSA6IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZXMgPSBzdHlsZVRvU3RyaW5nKGlkLCBzdHlsZXMsIGNsYXNzTmFtZSBhcyBhbnkpO1xuICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH1cbiAgfVxuICBsZXQgY29udGVudCA9ICcnO1xuICBjb25zdCBjbGFzc2VzID0gQ0xBU1NFU19NQVBbaWRdXG4gID8gQ0xBU1NFU19NQVBbaWRdID0gX2NsYXNzZXNfIHx8IHt9XG4gIDogQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF0gPSBfY2xhc3Nlc18gfHwge307XG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IF9jbGFzc05hbWUgPSBjbGFzc2VzW2tleV0gfHwgKGNsYXNzZXNba2V5XSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgJHtpZH0tLS0ke2tleX0tJHtjcmVhdGVOZXh0SWQoKX1gKSA6IGNyZWF0ZU5leHRJZCgpKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZVRvU3RyaW5nKGtleSwgdmFsdWUgYXMgU3R5bGVzMiwgX2NsYXNzTmFtZSk7XG4gICAgICAgIGNvbnRlbnQgKz0gc3R5bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsdWUgaXMgc3RyaW5nJywgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVwbGFjZVJlZnMoY29udGVudCwgY2xhc3Nlcyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VSZWZzKHN0cjogc3RyaW5nLCBkYXRhOiBPYmplY3QpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFRl9SRUdfRVhQLCAobWF0Y2gsIHRva2VuKSA9PiB7XG4gICAgcmV0dXJuIGAuJHtkYXRhW3Rva2VuXX1gO1xuICB9XG4gICk7XG59XG5cbi8qKlxuICoge2NvbG9yOidyZWQnfSB0byAuY2xhc3NOYW1le2NvbG9yOiByZWR9XG4gKi9cbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmcoa2V5OiBzdHJpbmcsIG9iOiBPYmplY3QsIGN1cnJlbnRLZXk6IHN0cmluZywgcGFyZW50S2V5Pzogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBzdWJDb250ZW50ID0gJyc7XG4gIGxldCBrZXlBbmRWYWx1ZSA9ICcnO1xuICBsZXQgbmV3S2V5O1xuICBpZiAocGFyZW50S2V5ICYmIGN1cnJlbnRLZXkuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgIG5ld0tleSA9IGN1cnJlbnRLZXkucmVwbGFjZSgnJicsIHBhcmVudEtleSk7XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICBuZXdLZXkgPSBrZXk7XG4gIH0gZWxzZSB7XG4gICAgbmV3S2V5ID0gY3VycmVudEtleTtcbiAgfVxuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc3ViQ29udGVudCArPSBzdHlsZVRvU3RyaW5nKGtleSwgZWxlbWVudCBhcyBTdHlsZXMyLCBzdHlsZUtleSwgbmV3S2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlS2V5ID0gdG9IeXBoZW5DYXNlQ2FjaGUoc3R5bGVLZXkpO1xuICAgICAgICBrZXlBbmRWYWx1ZSArPSBgJHtuZXdTdHlsZUtleX06JHtlbGVtZW50fTtgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoa2V5QW5kVmFsdWUpIHtcbiAgICBpZiAobmV3S2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICBjb250ZW50ICs9IGAke25ld0tleX1gO1xuICAgICAga2V5QW5kVmFsdWUgPSBgLiR7cGFyZW50S2V5fXske2tleUFuZFZhbHVlfX1gO1xuICAgIH0gZWxzZSBpZiAocGFyZW50S2V5ICYmIHBhcmVudEtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgICBjb250ZW50ICs9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCArPSBgLiR7bmV3S2V5fWA7XG4gICAgfVxuICAgIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICB9XG4gIHJldHVybiBjb250ZW50ICsgc3ViQ29udGVudDtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IF9wYXRoOiBzdHJpbmdbXSA9IHBhdGggaW5zdGFuY2VvZiBBcnJheSA/IHBhdGggOiBwYXRoLnNwbGl0KCc6Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBvYmogPSBvYmpbX3BhdGhbaV1dIHx8IHBhdGg7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cbmZ1bmN0aW9uIHRvQ2xhc3NOYW1lVmFsaWQoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgcyA9IHN0ci5yZXBsYWNlKC9eWzAtOV18W15cXHdcXC1dL2csIF8gPT4ge1xuICAgIHJldHVybiBgXyR7Xy5jaGFyQ29kZUF0KDApfWA7XG4gIH0pO1xuICByZXR1cm4gdG9IeXBoZW5DYXNlKHMpO1xufVxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2VDYWNoZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyIGluIFNUWUxFX0tFWVNfTUFQXG4gID8gU1RZTEVfS0VZU19NQVBbc3RyXVxuICA6IFNUWUxFX0tFWVNfTUFQW3N0cl0gPSB0b0h5cGhlbkNhc2Uoc3RyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHRvTWVkaWEoY3NzOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHtjc3N9fWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5leHRJZCgpIHtcbiAgcmV0dXJuIGBlJHsobmV4dElkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuXG50eXBlIElDbGFzc2VzPFQ+ID0gUmVjb3JkPChUIGV4dGVuZHMgKCguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA/IChrZXlvZiBSZXR1cm5UeXBlPFQ+KSA6IGtleW9mIFQpLCBzdHJpbmc+O1xuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95LCBOZ01vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl92aWV3UmVmLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZU1vZHVsZSB7XHJcblxyXG59XHJcbiIsImZ1bmN0aW9uIGlzV2luZG93KG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW06IGFueSkge1xyXG4gICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0VmlldztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGRvY0VsZW06IGFueSwgd2luOiBhbnksXHJcbiAgICAgICAgYm94ID0ge3RvcDogMCwgbGVmdDogMH07XHJcbiAgICBjb25zdCBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcclxuXHJcbiAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH1cclxuICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcclxuICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxyXG4gICAgfTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIElzQm9vbGVhbigpOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBkZWZpbml0aW9uLmdldCxcbiAgICAgICAgc2V0OiBuZXdWYWx1ZSA9PiB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5zZXQodG9Cb29sZWFuKG5ld1ZhbHVlKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1snX18nICsga2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICB0aGlzWydfXycgKyBrZXldID0gdG9Cb29sZWFuKG5ld1ZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdEVudHJ5KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGRlZmF1bHRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbCc7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgXG4gICAgICAgICAgICBbYmddLFxuICAgICAgICAgICAgW2NvbG9yXSxcbiAgICAgICAgICAgIFtyYWlzZWRdLFxuICAgICAgICAgICAgW3JhaXNlZF1bc2hhZG93Q29sb3JdLFxuICAgICAgICAgICAgW2x5LWJ1dHRvbl1bb3V0bGluZWRdLFxuICAgICAgICAgICAgW2VsZXZhdGlvbl0sXG4gICAgICAgICAgICBbZWxldmF0aW9uXVtzaGFkb3dDb2xvcl0sXG4gICAgICAgICAgICBbZGlzYWJsZWRdLFxuICAgICAgICAgICAgbHktY2FyZCxcbiAgICAgICAgICAgIGx5LXRvb2xiYXJcbiAgICAgICAgICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb24gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9yYWlzZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX291dGxpbmVkOiBib29sZWFuO1xuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2F1dG9Db250cmFzdDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaXNDb250cmFzdDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBiZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2V0IHJhaXNlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fcmFpc2VkID0gdG9Cb29sZWFuKHZhbCk7IH1cbiAgZ2V0IHJhaXNlZCgpIHsgcmV0dXJuIHRoaXMuX3JhaXNlZDsgfVxuXG4gIEBJbnB1dCgpIHNldCBkaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuXG4gIEBJbnB1dCgpIHNldCBvdXRsaW5lZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fb3V0bGluZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgb3V0bGluZWQoKSB7IHJldHVybiB0aGlzLl9vdXRsaW5lZDsgfVxuXG4gIEBJbnB1dCgpIGVsZXZhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBzaGFkb3dDb2xvcjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBwdWJsaWMgc2V0QXV0b0NvbnRyYXN0KCkge1xuICAgIHRoaXMuX2F1dG9Db250cmFzdCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBjb25zdCBfX2JnID0gdGhpcy5iZztcbiAgICBjb25zdCBfX2NvbG9yID0gdGhpcy5jb2xvcjtcbiAgICBjb25zdCBfX3JhaXNlZCA9IHRoaXMucmFpc2VkO1xuICAgIGNvbnN0IF9fZWxldmF0aW9uID0gdGhpcy5lbGV2YXRpb247XG4gICAgY29uc3QgX19kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgY29uc3QgX19vdXRsaW5lZCA9IHRoaXMub3V0bGluZWQ7XG4gICAgY29uc3QgX19zaGFkb3dDb2xvciA9IHRoaXMuc2hhZG93Q29sb3I7XG4gICAgY29uc3QgX19pc0NvbnRyYXN0ID0gdGhpcy5faXNDb250cmFzdCA9IHRoaXMuX2F1dG9Db250cmFzdCAmJiAhX19jb2xvciB8fCBfX2NvbG9yID09PSAnYXV0byc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGNvbW1vbi0tLS06JHtcbiAgICAgIF9fYmcgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgX19jb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgIF9fcmFpc2VkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICBfX2VsZXZhdGlvbiB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICBfX2Rpc2FibGVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgX19vdXRsaW5lZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgX19zaGFkb3dDb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICBfX2lzQ29udHJhc3QgfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUobmV3S2V5LCAodGhlbWUpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlOiB7XG4gICAgICAgIGJvcmRlcj86IHN0cmluZyxcbiAgICAgICAgYmFja2dyb3VuZD86IHN0cmluZyxcbiAgICAgICAgY29sb3I/OiBzdHJpbmcsXG4gICAgICAgIGJveFNoYWRvdz86IHN0cmluZyxcbiAgICAgICAgcG9pbnRlckV2ZW50cz86ICdub25lJztcbiAgICAgICAgJyY6aG92ZXInPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICAnJjphY3RpdmUnPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9XG4gICAgICB9ID0ge307XG4gICAgICBpZiAoX19vdXRsaW5lZCkge1xuICAgICAgICBzdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcic7XG4gICAgICB9XG4gICAgICBpZiAoX19kaXNhYmxlZCkge1xuICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLnRleHQuZGlzYWJsZWQ7XG4gICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIGlmIChfX2JnKSB7XG4gICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJ1dHRvbi5kaXNhYmxlZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKF9fYmcpIHtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuY29sb3JPZihfX2JnKTtcbiAgICAgICAgICBpZiAoX19pc0NvbnRyYXN0KSB7XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoYCR7X19iZ306Y29udHJhc3RgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdHlsZS5jb2xvciAmJiBfX2NvbG9yKSB7XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKF9fY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX3JhaXNlZCB8fCBfX2VsZXZhdGlvbikge1xuICAgICAgICAgIGlmICghX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JDc3MgPSBzdHlsZS5iYWNrZ3JvdW5kICE9PSBfX2JnICYmIHRoZW1lLmNvbG9yT2YoX19iZyB8fCAnYmFja2dyb3VuZDpwcmltYXJ5JywgJ3NoYWRvdycpO1xuICAgICAgICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gKF9fc2hhZG93Q29sb3IgJiYgdGhlbWUuY29sb3JPZihfX3NoYWRvd0NvbG9yKSkgfHwgYmFja2dyb3VuZENvbG9yQ3NzIHx8IHN0eWxlLmJhY2tncm91bmQgfHwgc3R5bGUuY29sb3IgfHwgdGhlbWUuc2hhZG93O1xuICAgICAgICAgIHN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd0J1aWxkZXIoX19lbGV2YXRpb24gfHwgMywgc2hhZG93Q29sb3IpO1xuICAgICAgICAgIGlmICghX19lbGV2YXRpb24pIHtcbiAgICAgICAgICAgIHN0eWxlWycmOmFjdGl2ZSddID0ge1xuICAgICAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoOCwgc2hhZG93Q29sb3IpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0eWxlIGFzIGFueTtcbiAgICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUsIFNUWUxFX1BSSU9SSVRZKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbd2l0aENsYXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlXaXRoQ2xhc3Mge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHt2YWx9JyBpcyBub3QgdmFsaWQgY2xhc3NOYW1lYCk7XG4gICAgfVxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHsgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlDb21tb24gfSBmcm9tICcuL2NvbW1vbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlXaXRoQ2xhc3MgfSBmcm9tICcuL3dpdGgtY2xhc3MuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlDb21tb24sIEx5V2l0aENsYXNzXSxcbiAgZXhwb3J0czogW0x5Q29tbW9uLCBMeVdpdGhDbGFzc11cbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IExZX0NPTU1PTl9TVFlMRVMgPSB7XG4gIGZpbGw6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gIH0sXG4gIHZpc3VhbGx5SGlkZGVuOiB7XG4gICAgYm9yZGVyOiAwLFxuICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICBoZWlnaHQ6ICcxcHgnLFxuICAgIG1hcmdpbjogJy0xcHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMXB4JyxcbiAgICBvdXRsaW5lOiAwLFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJ1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q29yZVN0eWxlcyB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoTFlfQ09NTU9OX1NUWUxFUywgJ2x5Q29tbW9uU3R5bGVzJyk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyKSB7IH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudCwgSW5qZWN0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMeUNvcmVTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvY29yZS1zdHlsZXMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50ICwgIE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIG92ZXJsYXlCYWNrZHJvcDoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5vdmVybGF5XG4gIH1cbn0pO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdpbmRvd1Njcm9sbFNlcnZpY2Uge1xuXG4gIHB1YmxpYyBzY3JvbGwkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJykucGlwZShcbiAgICAgICAgYXVkaXRUaW1lKDIwMCksXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZIHx8IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgfSksXG4gICAgICAgIHNoYXJlKClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Nyb2xsJCA9IGVtcHR5KCk7XG4gICAgfVxuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUNvbnRhaW5lciB7XG4gIHByaXZhdGUgX2NsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlPdmVybGF5Q29udGFpbmVyJyk7XG4gIHByb3RlY3RlZCByZWFkb25seSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zID0gbmV3IFNldDxhbnk+KCk7XG4gIHByaXZhdGUgX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcjogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbHktb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgfVxuICB9XG4gIGdldCBjb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2FkZChpdGVtKSB7XG4gICAgdGhpcy5faXRlbXMuYWRkKGl0ZW0pO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgfVxuXG4gICAgLyoqXG4gICAqIFJlbW92ZSBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfcmVtb3ZlKGl0ZW0pIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgdGhpcy5faXRlbXMuZGVsZXRlKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdHlsZXMgZm9yIG92ZXJsYXkgY29udGFpbmVyXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXRlbXMuc2l6ZSkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lciA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1vdmVybGF5LWJhY2tkcm9wJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUJhY2tkcm9wIHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuX292ZXJsYXlDb25maWcuZm5EZXN0cm95KCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KCdvdmVybGF5Q29uZmlnJykgcHJpdmF0ZSBfb3ZlcmxheUNvbmZpZzogYW55LFxuICAgIGNvbW1vblN0eWxlczogTHlDb3JlU3R5bGVzXG4gICkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbW1vblN0eWxlcy5jbGFzc2VzLmZpbGwpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgVGVtcGxhdGVSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld1JlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tU2VydmljZSB7XG4gIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG4gIHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXJcbiAgKSB7IH1cblxuICBhdHRhY2g8VD4oX2hvc3RWaWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBjb21wb25lbnQ6IGFueSwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBfaG9zdFZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlKTtcbiAgICAgIHZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZjtcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2gocm9vdE5vZGUgPT4gdGhpcy5hZGRDaGlsZChyb290Tm9kZSkpO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5vdmVybGF5Q29udGFpbmVyLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG5cbiAgZ2V0RG9tRWxlbWVudEZyb21Db21wb25lbnRSZWYoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pik6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgZGVzdHJveVJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+LCBkZWxheTogbnVtYmVyKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0sIGRlbGF5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21TZXJ2aWNlIH0gZnJvbSAnLi9kb20uc2VydmljZSc7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudENvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyKSB7XG4vLyAgIHJldHVybiBwYXJlbnRDb250YWluZXIgfHwgbmV3IEx5T3ZlcmxheUNvbnRhaW5lcigpO1xuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVIgPSB7XG4vLyAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gT3ZlcmxheUNvbnRhaW5lciBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuLy8gICBwcm92aWRlOiBMeU92ZXJsYXlDb250YWluZXIsXG4vLyAgIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMeU92ZXJsYXlDb250YWluZXJdXSxcbi8vICAgdXNlRmFjdG9yeTogTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWVxuLy8gfTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBEb21TZXJ2aWNlXG4gICAgLy8gTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeERvbU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgUmVuZGVyZXIyLCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZW51bSBGb2N1c1N0YXR1cyB7XG4gIC8qKm1vdXNlIGFuZC9vciB0b3VjaCovXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIC8qKiBrZXlib2FyZCBhbmQvb3IgcHJvZ3JhbSovXG4gIEtFWUJPQVJEID0gJ2tleWJvYXJkJyxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5Rm9jdXNTdGF0ZV0nLFxuICBleHBvcnRBczogJ2x5Rm9jdXNTdGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RhdGU6IEZvY3VzU3RhdHVzO1xuICBzdGF0ZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBFbGVtZW50O1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBfc3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Rm9jdXNTdGF0dXM+KCk7XG4gIF9zdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBAT3V0cHV0KCkgbHlGb2N1c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNTdGF0dXM+KCk7XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNcbiAgICAgIC5zZXQoJ2ZvY3VzJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnYmx1cicsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uLmJpbmQodGhpcykpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjb25zdCBvbiA9IChldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9iOiBPYnNlcnZhYmxlPEZvY3VzU3RhdHVzPiA9IHRoaXMuX3N0YXRlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uID0gb2JcbiAgICAgIC8vIC5kZWJvdW5jZVRpbWUoMTExKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMTEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChlOiBGb2N1c1N0YXR1cykgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlID0gZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5seUZvY3VzQ2hhbmdlLmVtaXQoZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdGF0ZSgpIHtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdibHVyJykpIHtcbiAgICAgIHRoaXMuc3RhdGVNYXAuY2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCdtb3VzZWRvd24nKSB8fCB0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygndG91Y2hzdGFydCcpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLkRFRkFVTFQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5LRVlCT0FSRDtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGVTdWJqZWN0Lm5leHQoc3RhdGUpO1xuICB9XG5cbiAgb24oZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkge1xuICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIHNob3VsZFNldDogYm9vbGVhbikgPT4gc2hvdWxkU2V0ID8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSA6IHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgdG9nZ2xlQ2xhc3MoYGx5LWZvY3VzZWRgLCAhIXN0YXRlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBGb2N1c1N0YXR1cykge1xuICAgICAgaWYgKEZvY3VzU3RhdHVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gRm9jdXNTdGF0dXNba2V5XTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoYGx5LSR7Y2xhc3NOYW1lfS1mb2N1c2VkYCwgc3RhdGUgPT09IGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQobnVsbCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Rm9jdXNTdGF0ZSB9IGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUZvY3VzU3RhdGVdLFxuICBleHBvcnRzOiBbTHlGb2N1c1N0YXRlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGVNb2R1bGUgeyB9XG4iLCJleHBvcnQgY29uc3QgQVVJX1ZFUlNJT04gPSAnMS43LjAtYmV0YS43NWNhdic7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMTAtMDFUMDU6MDE6MzguNzM2Wic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgTFlfSEFNTUVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyT3B0aW9ucz4oJ0xZX0hBTU1FUl9PUFRJT05TJyk7XG5cbmNvbnN0IEhBTU1FUl9HRVNUVVJFU19FVkVOVFMgPSBbXG4gICdzbGlkZScsXG4gICdzbGlkZXN0YXJ0JyxcbiAgJ3NsaWRlZW5kJyxcbiAgJ3NsaWRlcmlnaHQnLFxuICAnc2xpZGVsZWZ0J1xuXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBldmVudHM6IHN0cmluZ1tdID0gSEFNTUVSX0dFU1RVUkVTX0VWRU5UUztcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIGNvbnN0IGhhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gICAgY29uc3QgbWMgPSBuZXcgaGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwgdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHBhbiA9IG5ldyBoYW1tZXIuUGFuKCk7XG4gICAgY29uc3Qgc3dpcGUgPSBuZXcgaGFtbWVyLlN3aXBlKCk7XG4gICAgY29uc3Qgc2xpZGUgPSB0aGlzLl9jcmVhdGVSZWNvZ25pemVyKHBhbiwge2V2ZW50OiAnc2xpZGUnLCB0aHJlc2hvbGQ6IDB9LCBzd2lwZSk7XG5cbiAgICBwYW4ucmVjb2duaXplV2l0aChzd2lwZSk7XG5cbiAgICAvLyBBZGQgY3VzdG9taXplZCBnZXN0dXJlcyB0byBIYW1tZXIgbWFuYWdlclxuICAgIG1jLmFkZChbc3dpcGUsIHBhbiwgc2xpZGVdKTtcbiAgICByZXR1cm4gbWM7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyByZWNvZ25pemVyLCB3aXRob3V0IGFmZmVjdGluZyB0aGUgZGVmYXVsdCByZWNvZ25pemVycyBvZiBIYW1tZXJKUyAqL1xuICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyKGJhc2U6IGFueSwgb3B0aW9uczogYW55LCAuLi5pbmhlcml0YW5jZXM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVjb2duaXplciA9IG5ldyAoYmFzZS5jb25zdHJ1Y3Rvcikob3B0aW9ucyk7XG5cbiAgICBpbmhlcml0YW5jZXMucHVzaChiYXNlKTtcbiAgICBpbmhlcml0YW5jZXMuZm9yRWFjaChpdGVtID0+IHJlY29nbml6ZXIucmVjb2duaXplV2l0aChpdGVtKSk7XG5cbiAgICByZXR1cm4gcmVjb2duaXplcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWVNb2R1bGUge1xuICBzdGF0aWMgc2V0VGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEx5VGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgW0x5VGhlbWUyXSxcbiAgICAgICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogdGhlbWVOYW1lIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVW5kZWZpbmVkIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IFVuZGVmaW5lZFZhbHVlID0gbmV3IFVuZGVmaW5lZCgpO1xuIiwiZXhwb3J0IGVudW0gSW52ZXJ0TWVkaWFRdWVyeSB7XG4gIE5vLFxuICBZZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1lZGlhUXVlcnkobWVkaWE6IHN0cmluZywgaW52ZXJ0TWVkaWFRdWVyeTogSW52ZXJ0TWVkaWFRdWVyeSA9IEludmVydE1lZGlhUXVlcnkuTm8pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gIGlmIChtZWRpYSAmJiBpbnZlcnRNZWRpYVF1ZXJ5ID09PSBJbnZlcnRNZWRpYVF1ZXJ5Llllcykge1xuICAgIGNvbnN0IG5ld1ZhbCA9IG1lZGlhLnNwbGl0KCcsJykubWFwKF8gPT4gYG5vdCAke199YCk7XG4gICAgcmV0dXJuIG5ld1ZhbDtcbiAgfVxuICByZXR1cm4gbWVkaWE7XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIsIEx5T3ZlcmxheUJhY2tkcm9wLCBXaW5kb3dTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW50ZXJmYWNlIE92ZXJsYXlDb25maWcge1xuICBzdHlsZXM6IE9iamVjdDtcbiAgZm5EZXN0cm95PzogKC4uLmFyZykgPT4gdm9pZDtcbiAgaG9zdD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgLyoqIERldGFjaGVzIGEgdmlldyBmcm9tIGRpcnR5IGNoZWNraW5nIGFnYWluIG9mIEFwcGxpY2F0aW9uUmVmLiAgKi9cbiAgZGV0YWNoOiAoKSA9PiB2b2lkO1xuXG4gIC8qKiBSZW1vdmUgZWxlbWVudCBvZiBET00gKi9cbiAgcmVtb3ZlOiAoKSA9PiB2b2lkO1xuXG4gIC8qKiBEZXRhY2ggJiByZW1vdmUgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbn1cbmNsYXNzIENyZWF0ZUZyb21UZW1wbGF0ZVJlZiBpbXBsZW1lbnRzIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICBwcml2YXRlIF92aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZWw6IGFueTtcbiAgcHJpdmF0ZSBfY29tcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHByaXZhdGUgX2NvbXBSZWZPdmVybGF5QmFja2Ryb3A6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3aW5kb3dTY3JvbGxTdWI6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIF9jb250ZXh0OiBhbnksXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHdpbmRvd1Njcm9sbDogV2luZG93U2Nyb2xsU2VydmljZSxcbiAgICBjb25maWc/OiBPdmVybGF5Q29uZmlnXG4gICkge1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYgPSBfdGVtcGxhdGVSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KF9jb250ZXh0KTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLl9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2gocm9vdE5vZGUgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3ROb2RlKSk7XG4gICAgY29uc3QgX19zdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgLi4uY29uZmlnLnN0eWxlc1xuICAgIH07XG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiAnb3ZlcmxheUNvbmZpZycsXG4gICAgICAgIHVzZVZhbHVlOiA8T3ZlcmxheUNvbmZpZz57XG4gICAgICAgICAgZm5EZXN0cm95OiB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKSxcbiAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgc3R5bGVzOiBfX3N0eWxlcyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sIHRoaXMuX2luamVjdG9yKTtcblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKF9fc3R5bGVzKTtcbiAgICBpZiAoY29uZmlnLmhvc3QpIHtcbiAgICAgIHRoaXMud2luZG93U2Nyb2xsU3ViID0gd2luZG93U2Nyb2xsLnNjcm9sbCQuc3Vic2NyaWJlKCh2YWwpID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGNvbmZpZy5ob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAocmVjdC50b3AgIT09IF9fc3R5bGVzLnRvcCB8fCByZWN0LmxlZnQgIT09IF9fc3R5bGVzLmxlZnQpIHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyhuZXdTdHlsZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCA9IHRoaXMuZ2VuZXJhdGVDb21wb25lbnQoTHlPdmVybGF5QmFja2Ryb3AsIG5ld0luamVjdG9yKTtcbiAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZChiYWNrZHJvcEVsKTtcbiAgICB0aGlzLl9hcHBlbmRDb21wb25lbnRUb0JvZHkoX3RlbXBsYXRlUmVmLCBfY29udGV4dCwgdGhpcy5faW5qZWN0b3IpO1xuXG4gIH1cblxuICB1cGRhdGVTdHlsZXMoX19zdHlsZXMpIHtcbiAgICAvKiogQXBwbHkgc3R5bGVzICovXG4gICAgLyoqIHNldCBzdHlsZXMgKi9cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBfX3N0eWxlcykge1xuICAgICAgaWYgKF9fc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVWYWwgPSBfX3N0eWxlc1trZXldO1xuICAgICAgICBpZiAoc3R5bGVWYWwpIHtcbiAgICAgICAgICB0aGlzLl9lbC5zdHlsZVtrZXldID0gdHlwZW9mIF9fc3R5bGVzW2tleV0gPT09ICdudW1iZXInID8gYCR7c3R5bGVWYWx9cHhgIDogc3R5bGVWYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDb21wb25lbnRUb0JvZHkodHlwZTogVGVtcGxhdGVSZWY8YW55PiB8IFR5cGU8YW55PiwgY29udGV4dCwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnRcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLl92aWV3UmVmID0gdHlwZS5jcmVhdGVFbWJlZGRlZFZpZXcoY29udGV4dCB8fCB7fSk7XG4gICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh2aWV3UmVmKTtcblxuICAgICAgLy8gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XG4gICAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKF8gPT4gdGhpcy5fZWwuYXBwZW5kQ2hpbGQoXykpO1xuXG4gICAgICAvLyBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBSZWYgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KHR5cGUsIGluamVjdG9yKTtcbiAgICAgIHRoaXMuX2VsID0gdGhpcy5fY29tcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUNvbXBvbmVudCh0eXBlOiBUeXBlPGFueT4sIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSk7XG4gICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fdmlld1JlZik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICB0aGlzLl92aWV3UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuZGVzdHJveSgpO1xuICAgICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZShiYWNrZHJvcEVsKTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3dTY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3dpbmRvd1Njcm9sbDogV2luZG93U2Nyb2xsU2VydmljZVxuICApIHsgfVxuXG4gIGNyZWF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgY29udGV4dD86IGFueSwgY29uZmlnPzogT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICAgIHJldHVybiBuZXcgQ3JlYXRlRnJvbVRlbXBsYXRlUmVmKHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5fYXBwUmVmLCB0ZW1wbGF0ZSwgdGhpcy5fb3ZlcmxheUNvbnRhaW5lciwgY29udGV4dCwgdGhpcy5faW5qZWN0b3IsIHRoaXMuX3dpbmRvd1Njcm9sbCwgY29uZmlnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUJhY2tkcm9wIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5T3ZlcmxheUJhY2tkcm9wXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTHlPdmVybGF5QmFja2Ryb3BdXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX19hc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBK0IsUUFBUTs7SUFDckMsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUM5QyxJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBQzlDLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7SUFDOUMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDdkQsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUN6Qzs7Ozs7O0FDTkQ7QUFDQSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7O0FBRXZCLElBQU0scUJBQXFCLEdBQUcsR0FBRyxDQUFDOztBQUNsQyxJQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQzs7QUFDdEMsSUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUM7O0FBQ3hDLElBQWEsT0FBTyxHQUFHO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDM0MsQ0FBQzs7Ozs7O0FBQ0YsaUNBQXdDLFNBQThCLEVBQUUsS0FBYztJQUE5QywwQkFBQSxFQUFBLGFBQThCO0lBQUUsc0JBQUEsRUFBQSxjQUFjOztJQUNwRixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBQzVCLElBQU0sTUFBTSxHQUFHO1FBQ2IsS0FBSyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUN4QyxLQUFLLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsR0FBRyxFQUFFO1FBQzNDLEtBQUssQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxHQUFHLEVBQUU7S0FDOUMsQ0FBQzs7SUFDRixJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBRTdCLE9BQU8sZ0JBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQztDQUV2TDs7Ozs7O0FBRUQsdUJBQThCLFNBQTBCLEVBQUUsS0FBYzs7SUFDdEUsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBQzNELElBQU0sTUFBTSxHQUFHO1FBQ2IsS0FBSyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUN4QyxLQUFLLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsR0FBRyxFQUFFO1FBQzNDLEtBQUssQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxHQUFHLEVBQUU7S0FDOUMsQ0FBQzs7SUFDRixJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBRTdCLE9BQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQztDQUU1Szs7Ozs7O0FDekREO0FBRUEsSUFBYSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQW1CLG9CQUFvQixDQUFDLENBQUM7O0FBQzFGLElBQWEsYUFBYSxHQUFHLElBQUksY0FBYyxDQUFPLFlBQVksQ0FBQzs7Ozs7OztBQ0FuRSxJQUFNLGtCQUFrQixJQUFJLFFBQU8sSUFBSSxDQUFDLEtBQUssV0FBVyxJQUFJLG1CQUFDLElBQVcsR0FBRSxlQUFlLENBQUMsQ0FBQzs7Ozs7Ozs7OztvQkFRbEYsUUFBUSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7dUJBQ3RELFFBQVEsQ0FBQyxTQUFTLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7O3FCQUduRSxRQUFRLENBQUMsU0FBUzthQUNyQixDQUFDLEVBQUUsbUJBQUMsTUFBYSxHQUFFLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7O3NCQUlyRixRQUFRLENBQUMsU0FBUztZQUN2QixjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7bUJBR3BGLFFBQVEsQ0FBQyxTQUFTLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFDLE1BQWEsR0FBRSxRQUFROzs7Ozt1QkFNM0YsUUFBUSxDQUFDLFNBQVMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzs7dUJBR3RFLFFBQVEsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztzQkFLNUUsUUFBUSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTTs7eUJBN0I1QyxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVE7bUJBVGpGOzs7Ozs7Ozs7Ozs7QUNBQTtBQUdBLElBQWEsWUFBWSxHQUFHLElBQUksY0FBYyxDQUE4QixzQkFBc0IsQ0FBQyxDQUFDOztBQUNwRyxJQUFhLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsaUJBQWlCLENBQUMsQ0FBQzs7QUFDcEYsSUFBYSxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQVMsZUFBZSxDQUFDLENBQUM7SUFxRnpFOztzQkFDa0IsRUFBRTs7d0JBM0ZwQjtJQThGQzs7Ozs7O0lDcEZEOzs7Ozs7O0lBMkJFLDhCQUFPOzs7O0lBQVAsVUFBUSxLQUFhOztRQUNuQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDM0MsT0FBVSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxRQUFLLENBQUM7S0FDNUQ7Ozs7OztJQUNELDhCQUFPOzs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLFFBQWlCO1FBQ3RDLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDbkM7Ozs7O0lBQ0Qsb0NBQWE7Ozs7SUFBYixVQUFjLEdBQVc7UUFDdkIsT0FBTyxhQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFFLENBQUM7S0FDakQ7Ozs7O0lBRUQsbUNBQVk7Ozs7SUFBWixVQUFhLEdBQW9CO1FBQy9CLElBQUksR0FBRyxLQUFLLEtBQUssRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDcEQ7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUNwRDtLQUNGO3VCQXRESDtJQXVEQyxDQUFBO0FBN0NEOzs7Ozs7O0FBcURBLGFBQWEsR0FBVyxFQUFFLElBQXVCLEVBQUUsUUFBZ0I7O0lBQ2pFLElBQU0sS0FBSyxHQUFhLElBQUksWUFBWSxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1FBQ3JDLElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLFNBQVMsRUFBRTtZQUNiLEdBQUcsR0FBRyxTQUFTLENBQUM7U0FDakI7YUFBTTs7WUFFTCx5QkFBTyxJQUFjLEVBQUM7U0FDdkI7S0FDRjtJQUNELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQzNCLHlCQUFPLEdBQWEsRUFBQztLQUN0QjtTQUFNLElBQUksUUFBUSxFQUFFO1FBQ25CLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN4QztTQUFNO1FBQ0wsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDdkI7O0NBRUY7Ozs7OztBQUVELG1CQUEwQixHQUFvQixFQUFFLEVBQTJEO0lBQ3pHLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFOztRQUMzQixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOztZQUNsRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOztZQUMzQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBQzlCLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDNUIsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3ZEO2FBQ0Y7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUMzQztTQUNGO0tBQ0Y7U0FBTTtRQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkM7Q0FDRjs7Ozs7O0FBS0Qsa0JBQXlCLElBQUk7SUFDM0IsUUFBUSxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtDQUNuRTs7Ozs7OztBQU9ELG1CQUEwQixNQUFNO0lBQUUsaUJBQVU7U0FBVixVQUFVLEVBQVYscUJBQVUsRUFBVixJQUFVO1FBQVYsZ0NBQVU7OztJQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7O0lBQ3ZDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUUvQixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDeEMsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQUksR0FBQyxHQUFHLElBQUcsRUFBRSxNQUFHLENBQUM7aUJBQUU7Z0JBQzNELFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQUksR0FBQyxHQUFHLElBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUM7YUFDL0M7U0FDRjtLQUNGO0lBRUQsT0FBTyxTQUFTLHlCQUFDLE1BQU0sR0FBSyxPQUFPLEdBQUU7Q0FDdEM7Ozs7OztBQ3BJRDtJQW1CRSxtQkFDdUMsV0FBMEIsRUFDdkQsaUJBQ1UsU0FBYztRQUhsQyxpQkFzQ0M7UUFwQ1Msb0JBQWUsR0FBZixlQUFlO3NCQUxQLElBQUksR0FBRyxFQUFVO3lCQUNmLElBQUksR0FBRyxFQUEwQjt5QkFDakMsSUFBSSxHQUFHLEVBQWtDO1FBTTNELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDeEQsRUFBRSxFQUFFLElBQUk7WUFDUixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFOztZQUN0QixJQUFNLEtBQUssR0FBYSxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7O29CQUNqRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxtQkFBQyxTQUFTLENBQUMsSUFBdUIsR0FBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzFEO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxXQUFXLEVBQUU7O1lBQ2YsSUFBTSxXQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQzs7WUFDeEMsSUFBTSxjQUFZLEdBQUcsV0FBUyxJQUFJLE9BQU8sV0FBUyxLQUFLLFVBQVU7a0JBQy9ELElBQUksV0FBUyxFQUFFO2tCQUNmLFdBQVMsQ0FBQztZQUNaLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs7Z0JBQzdCLElBQU0sUUFBUSxHQUFHLE9BQU8sSUFBSSxLQUFLLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztnQkFDaEUsSUFBSSxXQUFTLEVBQUU7b0JBQ2IsU0FBUyxDQUFDLFFBQVEsRUFBRSxjQUFZLENBQUMsQ0FBQztpQkFDbkM7Z0JBQ0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7Ozs7Ozs7SUFNRCx1QkFBRzs7Ozs7SUFBSCxVQUFJLEtBQXFCO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDM0M7Ozs7O0lBRUQsdUJBQUc7Ozs7SUFBSCxVQUFJLElBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pDOzs7OztJQUNELCtCQUFXOzs7O0lBQVgsVUFBWSxJQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakM7Ozs7Ozs7O0lBRUQsbUNBQWU7Ozs7Ozs7SUFBZixVQUFnQixPQUFZLEVBQUUsUUFBbUIsRUFBRSxZQUFvQixFQUFFLFlBQXFCO1FBQzVGLElBQUksWUFBWSxFQUFFO1lBQ2hCLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDMUM7O2dCQXpFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJzQyxhQUFhLHVCQW1CL0MsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlO2dCQXBCVyxnQkFBZ0I7Z0RBc0I3RCxNQUFNLFNBQUMsUUFBUTs7O29CQXRCcEI7Ozs7Ozs7QUNBQTtBQU9BLElBQU0sYUFBYSxHQUFHO0lBQ3BCLFNBQVMsRUFBRTtRQUNULHNCQUFzQixFQUFFO1lBQ3RCLG9CQUFvQixFQUFFLFlBQVk7WUFDbEMsaUJBQWlCLEVBQUUsWUFBWTtZQUMvQixZQUFZLEVBQUUsWUFBWTtTQUMzQjtLQUNGO0NBQ0YsQ0FBQzs7QUFFRixJQUFNLFdBQVcsR0FBRyxlQUFlLENBQUM7OztJQUdsQyxXQUFRO0lBQ1IsVUFBTzs7b0JBRFAsUUFBUTtvQkFDUixPQUFPOztBQUVULElBQU0sVUFBVSxHQUFjLEVBQUUsQ0FBQzs7QUFZakMsSUFBTSxXQUFXLEdBSWIsRUFBRSxDQUFDOztBQUNQLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQzs7QUFDMUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDOzs7c0JBY1QsRUFBRTsrQkFDWSxJQUFJLEdBQUcsRUFBdUI7OztnQkFUakQsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzJCQWpERDs7O0lBd0VFLGtCQUNVLGtCQUNELE1BQ2dCLFNBQVMsRUFDTixTQUFjO1FBSGhDLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDakIsU0FBSSxHQUFKLElBQUk7UUFFZSxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBRXhDLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjtLQUNGO0lBYkQsc0JBQUksNkJBQU87Ozs7UUFBWDtZQUNFLE9BQU8sV0FBVyxDQUFDO1NBQ3BCOzs7T0FBQTs7Ozs7SUFZRCw2QkFBVTs7OztJQUFWLFVBQVcsU0FBaUI7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFxQixDQUFDO1lBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNO2tCQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztrQkFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDL0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3RDO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7S0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTRCwyQkFBUTs7Ozs7Ozs7O0lBQVIsVUFBUyxFQUFVLEVBQUUsS0FBa0YsRUFBRSxFQUFRLEVBQUUsUUFBaUIsRUFBRSxRQUFpQjs7UUFDckosSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLG9CQUFFLEtBQVksR0FBRSxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDekIsT0FBTyxRQUFRLENBQUM7U0FDakI7UUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNOLElBQUksUUFBUSxFQUFFO2dCQUNaLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLFFBQVEsQ0FBQztLQUNqQjs7Ozs7Ozs7SUFDTyxrQ0FBZTs7Ozs7OztjQUFDLE9BQVksRUFBRSxRQUFtQixFQUFFLFlBQW9CLEVBQUUsWUFBcUI7UUFDcEcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7Ozs7Ozs7OztJQUUzRSw4QkFBVzs7Ozs7OztJQUFYLFVBQVksT0FBWSxFQUFFLFFBQW1CLEVBQUUsUUFBZ0IsRUFBRSxRQUFpQjtRQUNoRixJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDekIsT0FBTyxRQUFRLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELE9BQU8sUUFBUSxDQUFDO0tBQ2pCOzs7OztJQUNELDJCQUFROzs7O0lBQVIsVUFBUyxHQUFXO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0VBQXdFLENBQUMsQ0FBQztTQUMzRjtRQUNELElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBRWpDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDcEMsS0FBSyxJQUFNLEdBQUcsSUFBSSxhQUFhLEVBQUU7Z0JBQy9CLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTs7b0JBQ3JDLElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFO3dCQUMzQixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUM1RjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjs7Ozs7Ozs7O0lBT08seUJBQU07Ozs7Ozs7O2NBQUMsRUFBVSxFQUFFLEdBQTZCLEVBQUUsUUFBZ0IsRUFBRSxLQUFjOztRQUN4RixJQUFNLEtBQUssR0FBRyxPQUFLLEVBQUksQ0FBQztRQUN4Qix5QkFBTyxJQUFJLENBQUMsb0JBQW9CLG1CQUFDLEdBQVUsR0FBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBVyxFQUFDOzs7OztJQUVuRyxvQ0FBaUI7Ozs7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lBUXpELGdDQUFhOzs7Ozs7OztJQUFiLFVBQWlCLE1BQW9DLEVBQUUsRUFBVyxFQUFFLFFBQWlCOztRQUNuRixJQUFNLEtBQUssR0FBRyxFQUFFLElBQUksUUFBUSxDQUFDOztRQUU3QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDL0U7Ozs7Ozs7Ozs7O0lBRUQsdUNBQW9COzs7Ozs7Ozs7O0lBQXBCLFVBQ0UsTUFBOEIsRUFDOUIsRUFBVSxFQUNWLFFBQWdCLEVBQ2hCLElBQWUsRUFDZixjQUF3QixFQUN4QixLQUFjOztRQUVkLElBQU0sUUFBUSxJQUFJLEVBQUUsSUFBSSxVQUFVO2NBQ2hDLFVBQVUsQ0FBQyxFQUFFLENBQUM7Y0FDZCxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUc7Z0JBQ2pCLFFBQVEsVUFBQTtnQkFDUixNQUFNLFFBQUE7Z0JBQ04sSUFBSSxNQUFBO2dCQUNKLEdBQUcsRUFBRSxFQUFFO2FBQ1IsQ0FBQyxDQUFDOztRQUNILElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O1FBQ3BDLElBQU0sU0FBUyxHQUFHLENBQUMsRUFBRSxJQUFJLFdBQVcsS0FBSyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsSUFBSSxjQUFjLEVBQUU7Ozs7WUFFaEMsSUFBSSxHQUFHLFVBQUM7WUFDUixJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRTtnQkFDaEMsR0FBRyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNyRixJQUFJLENBQUMsY0FBYyxFQUFFO29CQUNuQixRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDOUIsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7aUJBRS9CO2FBQ0Y7aUJBQU07O2dCQUVMLFdBQVcsQ0FBQyxFQUFFLENBQUMscUJBQUcsSUFBVyxDQUFBLENBQUM7Z0JBQzlCLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN4RSxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNwQjs7WUFDRCxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztrQkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7a0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUM1QyxHQUFHLENBQ0osQ0FBQztZQUNGLElBQUksY0FBYyxFQUFFO2dCQUNsQixFQUFFLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzFFO1NBQ0Y7YUFBTTs7Ozs7WUFLTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRTs7Z0JBQ3RCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQzs7Z0JBQ3JELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQy9FO1NBQ0Y7O1FBRUQsSUFBTSxPQUFPLEdBQUcsT0FBTyxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssUUFBUTtjQUNqRCxXQUFXLENBQUMsRUFBRSxDQUFDO2NBQ2YsT0FBTyxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssUUFBUTtrQkFDbkMsV0FBVyxDQUFDLEVBQUUsQ0FBQztrQkFDZixXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsT0FBTyxPQUFPLENBQUM7S0FDaEI7Ozs7O0lBRU8sd0NBQXFCOzs7O2NBQUMsUUFBWTtRQUFaLHlCQUFBLEVBQUEsWUFBWTtRQUNoQyxJQUFBLHVEQUFlLENBQTJCO1FBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFOztZQUNsQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEQsSUFBSSxTQUFTLEVBQUUsRUFBRTtnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFHLFFBQVUsQ0FBQyxDQUFDO2FBQ2hFO1lBQ0QsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEMsSUFBSSxlQUFlLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDekYsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO2FBQU07WUFDTCxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7O1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5RixPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7OztJQUcvQiwyQkFBUTs7OztjQUFDLEtBQWE7UUFDcEIsSUFBQSx1REFBZSxDQUEyQjs7UUFDbEQsSUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDOztRQUN6RCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxHQUFHLENBQUMsR0FBQSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7Ozs7O0lBRzNFLHNDQUFtQjs7OztjQUFDLEdBQVc7O1FBQ3JDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFDL0QsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeEQsT0FBTyxZQUFZLENBQUM7Ozs7OztJQUdkLDBDQUF1Qjs7OztjQUFDLFNBQWlCO1FBQy9DLElBQUksRUFBRSxTQUFTLElBQUksV0FBVyxDQUFDLEVBQUU7WUFDL0IsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM3Qjs7O2dCQXBOSixVQUFVOzs7O2dCQWNtQixnQkFBZ0I7Z0JBdkVyQyxTQUFTO2dEQXlFYixNQUFNLFNBQUMsYUFBYTtnREFDcEIsTUFBTSxTQUFDLFFBQVE7O21CQTVFcEI7Ozs7Ozs7Ozs7O0FBNlJBLDRCQUE0QixNQUFlLEVBQUUsU0FBaUIsRUFBRSxTQUFzQixFQUFFLEVBQVUsRUFBRSxTQUFvQixFQUFFLEtBQWM7SUFDdEksSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLE9BQU8sRUFBRTs7OztRQUVuQyxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO2NBQy9CLFdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLElBQUksWUFBWSxFQUFFO2NBQzdDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0QsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7O1lBQzlCLElBQU0sR0FBRyxHQUFHLE1BQUksU0FBUyxTQUFJLE1BQU0sTUFBRyxDQUFDO1lBQ3ZDLE9BQU8sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzFDO2FBQU07O1lBQ0wsSUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDLEVBQUUsRUFBRSxNQUFNLG9CQUFFLFNBQWdCLEVBQUMsQ0FBQztZQUMxRCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7O0lBQ0QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOztJQUNqQixJQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO1VBQzdCLFdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLElBQUksRUFBRTtVQUNqQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztJQUMvQyxLQUFLLElBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtRQUN4QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7O1lBQzlCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTs7Z0JBQzdCLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxFQUFFLEdBQUcsZ0JBQWdCLENBQUksRUFBRSxXQUFNLEdBQUcsU0FBSSxZQUFZLEVBQUksQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLENBQUM7O2dCQUN4SSxJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsR0FBRyxvQkFBRSxLQUFnQixHQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLElBQUksS0FBSyxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdkM7U0FDRjtLQUNGO0lBQ0QsT0FBTyxXQUFXLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQ3RDOzs7Ozs7QUFFRCxxQkFBcUIsR0FBVyxFQUFFLElBQVk7SUFDNUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO1FBQzNDLE9BQU8sTUFBSSxJQUFJLENBQUMsS0FBSyxDQUFHLENBQUM7S0FDMUIsQ0FDQSxDQUFDO0NBQ0g7Ozs7Ozs7OztBQUtELHVCQUF1QixHQUFXLEVBQUUsRUFBVSxFQUFFLFVBQWtCLEVBQUUsU0FBa0I7O0lBQ3BGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7SUFDakIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDOztJQUNwQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7O0lBQ3JCLElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSSxTQUFTLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUMvQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDN0M7U0FBTSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7UUFDNUIsTUFBTSxHQUFHLEdBQUcsQ0FBQztLQUNkO1NBQU07UUFDTCxNQUFNLEdBQUcsVUFBVSxDQUFDO0tBQ3JCO0lBQ0QsS0FBSyxJQUFNLFFBQVEsSUFBSSxFQUFFLEVBQUU7UUFDekIsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFOztZQUMvQixJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0IsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLFVBQVUsSUFBSSxhQUFhLENBQUMsR0FBRyxvQkFBRSxPQUFrQixHQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUN4RTtpQkFBTTs7Z0JBQ0wsSUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hELFdBQVcsSUFBTyxXQUFXLFNBQUksT0FBTyxNQUFHLENBQUM7YUFDN0M7U0FDRjtLQUNGO0lBQ0QsSUFBSSxXQUFXLEVBQUU7UUFDZixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxLQUFHLE1BQVEsQ0FBQztZQUN2QixXQUFXLEdBQUcsTUFBSSxTQUFTLFNBQUksV0FBVyxNQUFHLENBQUM7U0FDL0M7YUFBTSxJQUFJLFNBQVMsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQy9DLE9BQU8sSUFBSSxLQUFHLFVBQVksQ0FBQztTQUM1QjthQUFNO1lBQ0wsT0FBTyxJQUFJLE1BQUksTUFBUSxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxJQUFJLE1BQUksV0FBVyxNQUFHLENBQUM7S0FDL0I7SUFDRCxPQUFPLE9BQU8sR0FBRyxVQUFVLENBQUM7Q0FDN0I7Ozs7O0FBV0Qsc0JBQTZCLEdBQVc7SUFDdEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLE1BQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBSSxHQUFBLENBQUMsQ0FBQztDQUNqRTs7Ozs7QUFFRCwwQkFBMEIsR0FBVzs7SUFDbkMsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxVQUFBLENBQUM7UUFDeEMsT0FBTyxNQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFHLENBQUM7S0FDOUIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDeEI7Ozs7O0FBRUQsMkJBQTJCLEdBQVc7SUFDcEMsT0FBTyxHQUFHLElBQUksY0FBYztVQUMxQixjQUFjLENBQUMsR0FBRyxDQUFDO1VBQ25CLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDM0M7Ozs7O0FBRUQsK0JBQXNDLEdBQVc7SUFDL0MsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM1Qzs7Ozs7O0FBRUQsaUJBQWlCLEdBQVcsRUFBRSxLQUFhO0lBQ3pDLE9BQU8sWUFBVSxLQUFLLFNBQUksR0FBRyxNQUFHLENBQUM7Q0FDbEM7Ozs7QUFFRDtJQUNFLE9BQU8sTUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUcsQ0FBQztDQUN0Qzs7Ozs7O0FDalpEO0lBMkJFLCtCQUFvQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUFLO0lBWm5ELHNCQUNJLCtDQUFZOzs7O1FBT2hCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNCOzs7OztRQVZELFVBQ2lCLFdBQTZCO1lBQzVDLElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7OztPQUFBOzs7O0lBT0QsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUN4Qjs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFUZ0MsZ0JBQWdCOzs7K0JBYzlDLEtBQUs7O2dDQWZSOzs7Ozs7Z0JBZ0NDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDaEMsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7aUJBQ3RDOzs2QkFuQ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0JBQWtCLEdBQVE7SUFDdEIsT0FBTyxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDO0NBQzdDOzs7OztBQUVELG1CQUFtQixJQUFTO0lBQ3hCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0NBQzFFOzs7OztBQUNELHVCQUE4QixJQUFpQjs7SUFDM0MsSUFBSSxPQUFPLENBQ2lCOztJQUQ1QixJQUFrQixHQUFHLENBQ087O0lBRDVCLElBQ0ksR0FBRyxHQUFHLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUM7O0lBQzVCLElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO0lBRXZDLE9BQU8sR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBRTlCLElBQUksT0FBTyxJQUFJLENBQUMscUJBQXFCLEtBQUssT0FBTyxTQUFTLEVBQUU7UUFDeEQsR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQ3RDO0lBQ0QsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixPQUFPO1FBQ0gsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUztRQUNsRCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVO0tBQ3hELENBQUM7Q0FDTDs7Ozs7Ozs7OztBQ3RCRCxtQkFBMEIsS0FBVTtJQUNsQyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksS0FBRyxLQUFPLEtBQUssT0FBTyxDQUFDO0NBQ2hEOzs7OztBQUVEO0lBQ0UsT0FBTyxVQUFDLE1BQWMsRUFBRSxHQUFXOztRQUNqQyxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLElBQUksVUFBVSxFQUFFO1lBQ2QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO2dCQUNqQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUc7Z0JBQ25CLEdBQUcsRUFBRSxVQUFBLFFBQVE7b0JBQ1gsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDckM7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0JBQ2pDLEdBQUcsRUFBRTtvQkFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7aUJBQ3pCO2dCQUNELEdBQUcsRUFBRSxVQUFVLFFBQVE7b0JBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN4QztnQkFDRCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1NBQ0o7S0FDRixDQUFDO0NBQ0g7Ozs7Ozs7Ozs7O0FDN0JELHNCQUE2QixLQUFzQixFQUFFLFlBQTZCO0lBQ2hGLE9BQU8sS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLFlBQVksQ0FBQztDQUNoRTs7Ozs7Ozs7Ozs7QUNGRDtBQUtBLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUMxQixJQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7O0lBdUN2QixrQkFDVSxPQUNBO1FBREEsVUFBSyxHQUFMLEtBQUs7UUFDTCxlQUFVLEdBQVYsVUFBVTtLQUNmO0lBZEwsc0JBQWEsNEJBQU07Ozs7UUFDbkIsY0FBZSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTs7Ozs7UUFEckMsVUFBb0IsR0FBWSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7OztPQUFBO0lBR3BFLHNCQUFhLDhCQUFROzs7O1FBQ3JCLGNBQWlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzs7OztRQUR6QyxVQUFzQixHQUFZLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTs7O09BQUE7SUFHeEUsc0JBQWEsOEJBQVE7Ozs7UUFDckIsY0FBaUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Ozs7O1FBRHpDLFVBQXNCLEdBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOzs7T0FBQTs7OztJQVVqRSxrQ0FBZTs7OztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzs7Ozs7SUFHNUIsOEJBQVc7OztJQUFYOztRQUNFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7O1FBQ3JCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7O1FBQzNCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7O1FBQzdCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7O1FBQ25DLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7O1FBQ2pDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7O1FBQ2pDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7O1FBQ3ZDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLEtBQUssTUFBTSxDQUFDOztRQUM3RixJQUFNLE1BQU0sR0FBRyxpQkFDYixJQUFJLElBQUksYUFBYSxnQkFDbkIsT0FBTyxJQUFJLGFBQWEsZ0JBQ3RCLFFBQVEsSUFBSSxhQUFhLGdCQUN2QixXQUFXLElBQUksYUFBYSxnQkFDMUIsVUFBVSxJQUFJLGFBQWEsZ0JBQ3pCLFVBQVUsSUFBSSxhQUFhLGdCQUN6QixhQUFhLElBQUksYUFBYSxnQkFDNUIsWUFBWSxJQUFJLGFBQWEsQ0FBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBSzs7WUFDbEQsSUFBTSxLQUFLLEdBWVAsRUFBRSxDQUFDO1lBQ1AsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsS0FBSyxDQUFDLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQzthQUN6QztZQUNELElBQUksVUFBVSxFQUFFO2dCQUNkLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUM3QixJQUFJLElBQUksRUFBRTtvQkFDUixLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2lCQUMxQzthQUNGO2lCQUFNO2dCQUNMLElBQUksSUFBSSxFQUFFO29CQUNSLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxZQUFZLEVBQUU7d0JBQ2hCLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBSSxJQUFJLGNBQVcsQ0FBQyxDQUFDO3FCQUNqRDtpQkFDRjtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxPQUFPLEVBQUU7b0JBQzNCLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDdEM7Z0JBQ0QsSUFBSSxRQUFRLElBQUksV0FBVyxFQUFFO29CQUMzQixJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNULEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO3FCQUNyRDs7b0JBQ0QsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxvQkFBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQzs7b0JBQzlHLElBQU0sV0FBVyxHQUFHLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssa0JBQWtCLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7b0JBQzdJLEtBQUssQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7b0JBQy9ELElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ2hCLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRzs0QkFDbEIsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDO3lCQUN6QyxDQUFDO3FCQUNIO2lCQUNGO2FBQ0Y7WUFDRCx5QkFBTyxLQUFZLEVBQUM7U0FDckIsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztLQUM3RDs7OztJQUVPLGtDQUFlOzs7O1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7OztnQkFwSHhDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ1NBV0M7aUJBQ1o7Ozs7Z0JBcEJRLFFBQVE7Z0JBRHFCLFVBQVU7OztxQkE4QjdDLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLOzJCQUdMLEtBQUs7MkJBR0wsS0FBSzs0QkFHTCxLQUFLOzhCQUNMLEtBQUs7O21CQTVDUjs7Ozs7OztBQ0FBO0lBY0UscUJBQ1U7UUFBQSxPQUFFLEdBQUYsRUFBRTtLQUNQO0lBVEwsc0JBQ0ksa0NBQVM7Ozs7O1FBRGIsVUFDYyxHQUFXO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFJLEdBQUcsNkJBQTBCLENBQUMsQ0FBQzthQUNwRDtZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUM7OztPQUFBOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQUptQixVQUFVOzs7NEJBTzNCLEtBQUs7O3NCQVBSOzs7Ozs7O0FDQUE7Ozs7Z0JBS0MsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7b0JBQ3JDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7aUJBQ2pDOzt5QkFSRDs7Ozs7OztBQ0FBO0FBR0EsSUFBYSxnQkFBZ0IsR0FBRztJQUM5QixJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDO1FBQ1QsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsTUFBTSxFQUFFLENBQUM7UUFDVCxJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUsS0FBSztRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsT0FBTyxFQUFFLENBQUM7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsS0FBSztRQUNaLE9BQU8sRUFBRSxDQUFDO1FBQ1Ysb0JBQW9CLEVBQUUsTUFBTTtRQUM1QixpQkFBaUIsRUFBRSxNQUFNO0tBQzFCO0NBQ0YsQ0FBQzs7SUFLQSxzQkFBb0IsS0FBZTtRQUFmLFVBQUssR0FBTCxLQUFLLENBQVU7dUJBRHpCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO0tBQzlCOztnQkFIekMsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkF6QnpCLFFBQVE7Ozt1QkFEakI7Ozs7Ozs7QUNBQTtBQVNBLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxRQUFDO0lBQ3pDLGVBQWUsRUFBRTtRQUNmLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDO1FBQ1QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztLQUM3QjtDQUNGLElBQUMsQ0FBQzs7SUFVRCw2QkFDNEIsUUFBYTtRQUR6QyxpQkFjQztRQWIyQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRXZDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM3QyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2QsR0FBRyxDQUFDO2dCQUNGLE9BQU8sTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7YUFDbEUsQ0FBQyxFQUNGLEtBQUssRUFBRSxDQUNSLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtLQUNGOztnQkFyQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFNSSxNQUFNLFNBQUMsUUFBUTs7OzhCQTdCcEI7OztJQXFERSw0QkFDVTtRQUFBLFVBQUssR0FBTCxLQUFLO3dCQUxJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQztzQkFFeEQsSUFBSSxHQUFHLEVBQU87UUFLN0IsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFOztZQUN0QixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDakUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztTQUNwQztLQUNGO0lBQ0Qsc0JBQUksZ0RBQWdCOzs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7OztPQUFBOzs7Ozs7Ozs7OztJQU1ELGlDQUFJOzs7Ozs7SUFBSixVQUFLLElBQUk7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoQjs7Ozs7Ozs7Ozs7SUFNRCxvQ0FBTzs7Ozs7O0lBQVAsVUFBUSxJQUFJO1FBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDaEI7Ozs7OztJQU1PLG9DQUFPOzs7Ozs7UUFDYixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDckU7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztTQUN4Qzs7O2dCQXRESixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQTdDUSxRQUFROzs7NkJBRmpCOzs7SUErR0UsMkJBQ1UsSUFDeUIsY0FBbUIsRUFDcEQsWUFBMEI7UUFGbEIsT0FBRSxHQUFGLEVBQUU7UUFDdUIsbUJBQWMsR0FBZCxjQUFjLENBQUs7UUFHcEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hFOzs7O0lBVHNCLG1DQUFPOzs7SUFBOUI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2pDOztnQkFQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBMUdxRCxVQUFVO2dEQWlIM0QsTUFBTSxTQUFDLGVBQWU7Z0JBOUdsQixZQUFZOzs7MEJBeUdsQixZQUFZLFNBQUMsT0FBTzs7NEJBNUd2Qjs7Ozs7OztBQ0FBO0lBZUUsb0JBQ1UsMEJBQ0E7UUFEQSw2QkFBd0IsR0FBeEIsd0JBQXdCO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0I7S0FDckI7Ozs7Ozs7O0lBRUwsMkJBQU07Ozs7Ozs7SUFBTixVQUFVLHFCQUF1QyxFQUFFLFNBQWMsRUFBRSxRQUEwQjtRQUE3RixpQkFLQzs7UUFKRyxJQUFNLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBQSxDQUFDLENBQUM7S0FDbEU7Ozs7O0lBRUQsNkJBQVE7Ozs7SUFBUixVQUFTLEtBQWtCO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDM0Q7Ozs7O0lBRUQsa0RBQTZCOzs7O0lBQTdCLFVBQThCLFlBQStCO1FBQzNELHlCQUFPLG1CQUFDLFlBQVksQ0FBQyxRQUFnQzthQUNwRCxTQUFTLENBQUMsQ0FBQyxDQUFnQixFQUFDO0tBQzlCOzs7Ozs7SUFFRCwrQkFBVTs7Ozs7SUFBVixVQUFXLFlBQStCLEVBQUUsS0FBYTtRQUF6RCxpQkFNQztRQUxDLFVBQVUsQ0FBQztZQUNULElBQUksS0FBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQixLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDakM7U0FDRixFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ1g7O2dCQS9CRixVQUFVOzs7O2dCQVRULHdCQUF3QjtnQkFPakIsa0JBQWtCOztxQkFUM0I7Ozs7Ozs7QUNBQTs7OztnQkFlQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULFVBQVU7cUJBRVg7aUJBQ0Y7O3NCQXZCRDs7Ozs7OztBQ0FBOzs7SUFPRSxTQUFVLFNBQVM7O0lBRW5CLFVBQVcsVUFBVTs7O0lBZ0JyQixzQkFDRSxVQUFzQixFQUNkLFNBQ0EsV0FDUixHQUFzQjtRQUp4QixpQkE4QkM7UUE1QlMsWUFBTyxHQUFQLE9BQU87UUFDUCxjQUFTLEdBQVQsU0FBUzt3QkFWUixJQUFJLEdBQUcsRUFBbUI7OEJBRVosSUFBSSxHQUFHLEVBQThCOzZCQUN0QyxJQUFJLE9BQU8sRUFBZTs2QkFFeEIsSUFBSSxZQUFZLEVBQWU7K0NBQ2pDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBUTtRQU81QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGNBQWM7aUJBQ2xCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7WUFDdEMsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBS2hDLElBQU0sRUFBRSxHQUE0QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFOztpQkFFM0IsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEI7aUJBQ0EsU0FBUyxDQUFDLFVBQUMsQ0FBYztnQkFDeEIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QixDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBRU8sbUNBQVk7Ozs7O1FBQ2xCLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN4SSxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztTQUM3QjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O0lBR2pDLHlCQUFFOzs7O0lBQUYsVUFBRyxLQUEyQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVPLG1DQUFZOzs7Ozs7UUFDbEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDOztRQUN2QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztRQUN6QixJQUFNLFdBQVcsR0FBRyxVQUFDLFNBQWlCLEVBQUUsU0FBa0IsSUFBSyxPQUFBLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxHQUFBLENBQUM7UUFDeEssV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsS0FBSyxJQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUU7WUFDN0IsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztnQkFDbkMsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxXQUFXLENBQUMsUUFBTSxTQUFTLGFBQVUsRUFBRSxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUM7YUFDN0Q7U0FDRjs7Ozs7O0lBR0gsd0NBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQTJCO1FBQTdDLGlCQWNDO1FBYkMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFLEVBQUUsSUFBSTtnQkFDbkMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzFFLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUM3QixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFFLElBQUk7b0JBQzFDLE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUMvRCxDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUM7S0FDbEM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtLQUNGOztnQkFoR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFmbUIsVUFBVTtnQkFBcUIsTUFBTTtnQkFBRSxTQUFTO2dCQUFwQyxpQkFBaUI7OztnQ0F1QjlDLE1BQU07O3VCQXZCVDs7Ozs7OztBQ0FBOzs7O2dCQUtDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEI7OzZCQVhEOzs7Ozs7OztBQ0FBLElBQWEsV0FBVyxHQUFHLGtCQUFrQixDQUFDOztBQUM5QyxJQUFhLGVBQWUsR0FBRywwQkFBMEI7Ozs7Ozs7QUNHekQsSUFBYSxpQkFBaUIsR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsbUJBQW1CLENBQUMsQ0FBQzs7QUFFeEYsSUFBTSxzQkFBc0IsR0FBRztJQUM3QixPQUFPO0lBQ1AsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztDQUNaLENBQUM7O0lBR3lDQSx5Q0FBbUI7SUFFNUQsK0JBQ2lELGNBQTZCO1FBRDlFLFlBR0UsaUJBQU8sU0FDUjtRQUhnRCxvQkFBYyxHQUFkLGNBQWMsQ0FBZTt1QkFGM0Qsc0JBQXNCOztLQUt4Qzs7Ozs7SUFDRCwyQ0FBVzs7OztJQUFYLFVBQVksT0FBb0I7O1FBQzlCLElBQU0sTUFBTSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxtQkFBQyxNQUFhLEdBQUUsTUFBTSxHQUFHLElBQUksQ0FBQzs7UUFDN0UsSUFBTSxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDLENBQUM7O1FBRWpFLElBQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDOztRQUM3QixJQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7UUFDakMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWpGLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBR3pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUM7S0FDWDs7Ozs7Ozs7SUFHTyxpREFBaUI7Ozs7Ozs7Y0FBQyxJQUFTLEVBQUUsT0FBWTtRQUFFLHNCQUFzQjthQUF0QixVQUFzQixFQUF0QixxQkFBc0IsRUFBdEIsSUFBc0I7WUFBdEIscUNBQXNCOzs7UUFDdkUsSUFBTSxVQUFVLEdBQUcsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRW5ELFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO1FBRTdELE9BQU8sVUFBVSxDQUFDOzs7Z0JBOUJyQixVQUFVOzs7O2dEQUlOLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUJBQWlCOztnQ0FsQnpDO0VBZTJDLG1CQUFtQjs7Ozs7O0FDZjlEOzs7Ozs7O0lBTVMsc0JBQVE7Ozs7SUFBZixVQUFnQixTQUFpQjtRQUMvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNULENBQUMsUUFBUSxDQUFDO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO2FBQ2hEO1NBQ0YsQ0FBQztLQUNIOztnQkFWRixRQUFROzt3QkFKVDs7Ozs7OztBQ0FBLElBQUE7SUFDRTtLQUFpQjtvQkFEbkI7SUFFQyxDQUFBO0FBRkQ7QUFJQSxJQUFhLGNBQWMsR0FBRyxJQUFJLFNBQVMsRUFBRTs7Ozs7Ozs7SUNIM0MsS0FBRTtJQUNGLE1BQUc7O2tDQURILEVBQUU7a0NBQ0YsR0FBRzs7Ozs7O0FBR0wsNkJBQW9DLEtBQWEsRUFBRSxnQkFBd0Q7SUFBeEQsaUNBQUEsRUFBQSxtQkFBcUMsZ0JBQWdCLENBQUMsRUFBRTtJQUN6RyxJQUFJLEtBQUssSUFBSSxnQkFBZ0IsS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7O1FBQ3RELElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsU0FBTyxDQUFHLEdBQUEsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQztDQUNkOzs7Ozs7QUNTRCxJQUFBO0lBTUUsK0JBQ1UsMkJBQ0EsU0FDUixZQUE4QixFQUN0QixtQkFDUixRQUFhLEVBQ0wsV0FDUixZQUFpQyxFQUNqQyxNQUFzQjtRQVJ4QixpQkF1REM7UUF0RFMsOEJBQXlCLEdBQXpCLHlCQUF5QjtRQUN6QixZQUFPLEdBQVAsT0FBTztRQUVQLHNCQUFpQixHQUFqQixpQkFBaUI7UUFFakIsY0FBUyxHQUFULFNBQVM7K0JBUGEsWUFBWSxDQUFDLEtBQUs7OztRQWFoRCxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBRXpDLElBQU0sUUFBUSxjQUNaLFFBQVEsRUFBRSxVQUFVLEVBQ3BCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsR0FBRyxFQUFFLENBQUMsRUFDTixJQUFJLEVBQUUsQ0FBQyxFQUNQLEtBQUssRUFBRSxDQUFDLEVBQ1IsTUFBTSxFQUFFLENBQUMsRUFDVCxjQUFjLEVBQUUsUUFBUSxFQUN4QixVQUFVLEVBQUUsUUFBUSxJQUNqQixNQUFNLENBQUMsTUFBTSxFQUNoQjs7UUFDRixJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xDO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixRQUFRLG9CQUFFQyxXQUNSLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFDL0IsTUFBTSxJQUNULE1BQU0sRUFBRSxRQUFRLEdBQ2pCLENBQUE7YUFDRjtTQUNGLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7O2dCQUN4RCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQ2pELElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRTs7b0JBQzVELElBQU0sU0FBUyxHQUFHO3dCQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7d0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3FCQUNoQixDQUFDO29CQUNGLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzlCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7UUFDL0QsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDdkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FFckU7Ozs7O0lBRUQsNENBQVk7Ozs7SUFBWixVQUFhLFFBQVE7OztRQUduQixLQUFLLElBQU0sR0FBRyxJQUFJLFFBQVEsRUFBRTtZQUMxQixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7O2dCQUNoQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLElBQUksUUFBUSxFQUFFO29CQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsR0FBTSxRQUFRLE9BQUksR0FBRyxRQUFRLENBQUM7aUJBQ3RGO2FBQ0Y7U0FDRjtLQUNGOzs7Ozs7O0lBRU8sc0RBQXNCOzs7Ozs7Y0FBQyxJQUFrQyxFQUFFLE9BQU8sRUFBRSxRQUFrQjs7UUFDNUYsSUFBSSxJQUFJLFlBQVksV0FBVyxFQUFFOztZQUUvQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBR2pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDOztZQUd4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDOzs7Ozs7O0lBR0gsaURBQWlCOzs7OztJQUFqQixVQUFrQixJQUFlLEVBQUUsUUFBa0I7O1FBQ25ELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakM7Ozs7SUFFRCxzQ0FBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0Y7Ozs7SUFFRCxzQ0FBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNqQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7WUFDdkMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDdkUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7Ozs7SUFFRCx1Q0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZjtnQ0FuSkg7SUFvSkMsQ0FBQTs7SUFPQyxtQkFDVSxtQkFDQSwyQkFDQSxTQUNBLFdBQ0E7UUFKQSxzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLDhCQUF5QixHQUF6Qix5QkFBeUI7UUFDekIsWUFBTyxHQUFQLE9BQU87UUFDUCxjQUFTLEdBQVQsU0FBUztRQUNULGtCQUFhLEdBQWIsYUFBYTtLQUNsQjs7Ozs7OztJQUVMLDBCQUFNOzs7Ozs7SUFBTixVQUFPLFFBQTBCLEVBQUUsT0FBYSxFQUFFLE1BQXNCO1FBQ3RFLE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDdks7O2dCQWZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBdkpRLGtCQUFrQjtnQkFEd0Msd0JBQXdCO2dCQUF4QyxjQUFjO2dCQUE0QixRQUFRO2dCQUNyRCxtQkFBbUI7OztvQkFEbkU7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUNyQzs7MEJBTkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9