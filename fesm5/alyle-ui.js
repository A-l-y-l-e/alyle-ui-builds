import * as _chroma from 'chroma-js';
import { InjectionToken, Injectable, Optional, Inject, RendererFactory2, ViewEncapsulation, Directive, ElementRef, Input, NgModule, ComponentFactoryResolver, Component, HostListener, isDevMode, TemplateRef, ViewContainerRef, ChangeDetectorRef, NgZone, Renderer2, EventEmitter, Output, defineInjectable, inject, Injector, ApplicationRef, INJECTOR } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { fromEvent, empty, Subject, Subscription } from 'rxjs';
import { map, share, auditTime, debounceTime } from 'rxjs/operators';
import { __extends, __assign } from 'tslib';
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
var ThemeVariables = /** @class */ (function () {
    function ThemeVariables() {
    }
    return ThemeVariables;
}());

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
            themeConfig.themes.forEach(function (item) {
                /** @type {?} */
                var newTheme = new item;
                _this.add(newTheme);
                _this.themes.add(newTheme.name);
            });
        }
    }
    /**
     * add new theme
     * @param theme: ThemeConfig
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
        if (el) {
            if (instance) {
                el.classList.remove(instance);
            }
            el.classList.add(newClass);
        }
        return newClass;
    };
    /** @deprecated */
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    LyTheme2.prototype.colorOf = /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return get(this.config, value);
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
 * @deprecated
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function get(obj, path) {
    /** @type {?} */
    var _path = path instanceof Array ? path : path.split(':');
    for (var i = 0; i < _path.length; i++) {
        obj = obj[_path[i]] || path;
    }
    return typeof obj === 'string' ? /** @type {?} */ (obj) : /** @type {?} */ (obj['default']);
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
                    /** @type {?} */
                    var shadowColor = (__shadowColor && theme.colorOf(__shadowColor)) || style.background || style.color || theme.colorShadow;
                    if (!__bg) {
                        style.background = theme.background.primary;
                    }
                    style.boxShadow = shadowBuilder(__elevation || 3, shadowColor);
                    if (!__elevation) {
                        style['&:active'] = {
                            boxShadow: shadowBuilder(8, shadowColor)
                        };
                    }
                }
            }
            return /** @type {?} */ (style);
        }, this._getHostElement(), this._className);
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
                    selector: "\n            [bg],\n            [color],\n            [raised],\n            [raised][shadowColor],\n            [ly-button][outlined],\n            [elevation],\n            [elevation][shadowColor],\n            [disabled],\n            ly-card\n            "
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
var styles = {
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
        this.classes = this.theme.addStyleSheet(styles, 'lyCoreStyles');
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
var styles$1 = {
    overlayBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000
    }
};
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
        this._classes = this.theme.addStyleSheet(styles$1, 'lyOverlayContainer');
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
var AUI_VERSION = '1.7.0-beta.603x9';
/** @type {?} */
var AUI_LAST_UPDATE = '2018-09-08T22:39:02.566Z';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
var LyHammerGestureConfig = /** @class */ (function (_super) {
    __extends(LyHammerGestureConfig, _super);
    function LyHammerGestureConfig(_hammerOptions) {
        var _this = _super.call(this) || this;
        _this._hammerOptions = _hammerOptions;
        _this._hammer = typeof window !== 'undefined' ? (/** @type {?} */ (window)).Hammer : null;
        _this.events = _this._hammer ? [
            'slide',
            'slidestart',
            'slideend',
            'slideright',
            'slideleft'
        ] : [];
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
        var mc = new this._hammer(element, this._hammerOptions || undefined);
        /** @type {?} */
        var pan = new this._hammer.Pan();
        /** @type {?} */
        var swipe = new this._hammer.Swipe();
        /** @type {?} */
        var slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        slide.recognizeWith(swipe);
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
     * @return {?}
     */
    LyStyleUtils.prototype.colorOf = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return get$1(this, value);
    };
    return LyStyleUtils;
}());
/**
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function get$1(obj, path) {
    /** @type {?} */
    var _path = path instanceof Array ? path : path.split(':');
    for (var i = 0; i < _path.length; i++) {
        obj = obj[_path[i]] || path;
    }
    return typeof obj === 'string' ? /** @type {?} */ (obj) : /** @type {?} */ (obj['default']);
}
/**
 * @param {?} str
 * @param {?} fn
 * @return {?}
 */
function eachMedia(str, fn) {
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
        var __styles = __assign({ position: 'absolute', zIndex: 1000, display: 'flex', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }, config.styles);
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

export { getContrastYIQ, shadowBuilderDeprecated, shadowBuilder, Shadows, THEME_VARIABLES, IS_CORE_THEME, ThemeVariables, Platform, LyCommonModule, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, IsBoolean, defaultEntry, DomService, LxDomModule, LyFocusStateModule, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LyCommon, CoreTheme, THEME_CONFIG, LY_THEME_CONFIG, LY_THEME_NAME, LyThemeConfig, toHyphenCase, capitalizeFirstLetter, StylesInDocument, LyTheme2, LyThemeModule, LyCoreStyles, Undefined, UndefinedValue, transformMediaQuery, InvertMediaQuery, eachMedia, LyStyleUtils, WindowScrollService, LyOverlayContainer, LyOverlayBackdrop, LyOverlay, LyOverlayModule, LyWithClass as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZTIuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2NvbW1vbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2VsL29mZnNldC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2lzLWJvb2xlYW4udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9kZWZhdWx0LWVudHJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbW1vbi5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvd2l0aC1jbGFzcy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXktY29udGFpbmVyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9kb20uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbHgtZG9tLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3ZlcnNpb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZ2VzdHVyZS9nZXN0dXJlLWNvbmZpZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdW5kZWZpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZS11dGlscy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0WUlRKGhleGNvbG9yKSB7XG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigyLCAyKSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XG4gIGNvbnN0IHlpcSA9ICgociAqIDI5OSkgKyAoZyAqIDU4NykgKyAoYiAqIDExNCkpIC8gMTAwMDtcbiAgcmV0dXJuICh5aXEgPj0gMTI4KSA/ICdibGFjaycgOiAnd2hpdGUnO1xufVxuIiwiaW1wb3J0ICogYXMgX2Nocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuY29uc3QgY2hyb21hID0gX2Nocm9tYTtcblxuY29uc3Qgc2hhZG93S2V5VW1icmFPcGFjaXR5ID0gMC4yO1xuY29uc3Qgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbmNvbnN0IHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcbmV4cG9ydCBjb25zdCBTaGFkb3dzID0gW1xuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAxLCAzLCAwLCAwLCAxLCAxLCAwLCAwLCAyLCAxLCAtMV0sXG4gIFswLCAxLCA1LCAwLCAwLCAyLCAyLCAwLCAwLCAzLCAxLCAtMl0sXG4gIFswLCAxLCA4LCAwLCAwLCAzLCA0LCAwLCAwLCAzLCAzLCAtMl0sXG4gIFswLCAyLCA0LCAtMSwgMCwgNCwgNSwgMCwgMCwgMSwgMTAsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDUsIDgsIDAsIDAsIDEsIDE0LCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA2LCAxMCwgMCwgMCwgMSwgMTgsIDBdLFxuICBbMCwgNCwgNSwgLTIsIDAsIDcsIDEwLCAxLCAwLCAyLCAxNiwgMV0sXG4gIFswLCA1LCA1LCAtMywgMCwgOCwgMTAsIDEsIDAsIDMsIDE0LCAyXSxcbiAgWzAsIDUsIDYsIC0zLCAwLCA5LCAxMiwgMSwgMCwgMywgMTYsIDJdLFxuICBbMCwgNiwgNiwgLTMsIDAsIDEwLCAxNCwgMSwgMCwgNCwgMTgsIDNdLFxuICBbMCwgNiwgNywgLTQsIDAsIDExLCAxNSwgMSwgMCwgNCwgMjAsIDNdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEyLCAxNywgMiwgMCwgNSwgMjIsIDRdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEzLCAxOSwgMiwgMCwgNSwgMjQsIDRdLFxuICBbMCwgNywgOSwgLTQsIDAsIDE0LCAyMSwgMiwgMCwgNSwgMjYsIDRdLFxuICBbMCwgOCwgOSwgLTUsIDAsIDE1LCAyMiwgMiwgMCwgNiwgMjgsIDVdLFxuICBbMCwgOCwgMTAsIC01LCAwLCAxNiwgMjQsIDIsIDAsIDYsIDMwLCA1XSxcbiAgWzAsIDgsIDExLCAtNSwgMCwgMTcsIDI2LCAyLCAwLCA2LCAzMiwgNV0sXG4gIFswLCA5LCAxMSwgLTUsIDAsIDE4LCAyOCwgMiwgMCwgNywgMzQsIDZdLFxuICBbMCwgOSwgMTIsIC02LCAwLCAxOSwgMjksIDIsIDAsIDcsIDM2LCA2XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIwLCAzMSwgMywgMCwgOCwgMzgsIDddLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjEsIDMzLCAzLCAwLCA4LCA0MCwgN10sXG4gIFswLCAxMCwgMTQsIC02LCAwLCAyMiwgMzUsIDMsIDAsIDgsIDQyLCA3XSxcbiAgWzAsIDExLCAxNCwgLTcsIDAsIDIzLCAzNiwgMywgMCwgOSwgNDQsIDhdLFxuICBbMCwgMTEsIDE1LCAtNywgMCwgMjQsIDM4LCAzLCAwLCA5LCA0NiwgOF1cbl07XG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcgPSAyLCBjb2xvciA9ICcjMDAwJykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvcik7XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGBib3gtc2hhZG93OiR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlcihlbGV2YXRpb246IG51bWJlciB8IHN0cmluZywgY29sb3I/OiBzdHJpbmcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IgfHwgJyMwMDAnKS5kYXJrZW4oKS5zYXR1cmF0ZSgyKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYCR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xyXG5leHBvcnQgY29uc3QgSVNfQ09SRV9USEVNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjx0cnVlPignbHkuaXMucm9vdCcpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRoZW1lVmFyaWFibGVzIHtcclxuICAvKiogVGhlbWUgbmFtZSAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmltYXJ5PzogUGFsZXR0ZVZhcmlhYmxlcztcclxuICBhY2NlbnQ/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4gIC8qKiB3YXJuIG9yIGVycm9yIGNvbG9yICovXHJcbiAgd2Fybj86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbiAgc2NoZW1lPzogc3RyaW5nO1xyXG4gIGNvbG9yU2NoZW1lcz86IHtcclxuICAgIFtrZXk6IHN0cmluZ106IENvbG9yU2NoZW1lXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xyXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XHJcbiAgY29udHJhc3Q/OiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcclxuICBiYWNrZ3JvdW5kPzoge1xyXG4gICAgZGVmYXVsdD86IHN0cmluZyxcclxuICAgIHBhcGVyPzogc3RyaW5nLFxyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbiAgdGV4dD86IHtcclxuICAgIGRlZmF1bHQ6IHN0cmluZyxcclxuICAgIHByaW1hcnk/OiBzdHJpbmcsXHJcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IHN0cmluZyxcclxuICAgIGhpbnQ/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICBkaXZpZGVyPzogc3RyaW5nO1xyXG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xyXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xyXG4gIGJhcj86IHN0cmluZztcclxuICBpbnB1dD86IHtcclxuICAgIGxhYmVsPzogc3RyaW5nLFxyXG4gICAgdW5kZXJsaW5lPzogc3RyaW5nXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuIiwiXHJcbi8vIFdoZXRoZXIgdGhlIGN1cnJlbnQgcGxhdGZvcm0gc3VwcG9ydHMgdGhlIFY4IEJyZWFrIEl0ZXJhdG9yLiBUaGUgVjggY2hlY2tcclxuLy8gaXMgbmVjZXNzYXJ5IHRvIGRldGVjdCBhbGwgQmxpbmsgYmFzZWQgYnJvd3NlcnMuXHJcbmNvbnN0IGhhc1Y4QnJlYWtJdGVyYXRvciA9ICh0eXBlb2YoSW50bCkgIT09ICd1bmRlZmluZWQnICYmIChJbnRsIGFzIGFueSkudjhCcmVha0l0ZXJhdG9yKTtcclxuLyoqXHJcbiAqIFNlcnZpY2UgdG8gZGV0ZWN0IHRoZSBjdXJyZW50IHBsYXRmb3JtIGJ5IGNvbXBhcmluZyB0aGUgdXNlckFnZW50IHN0cmluZ3MgYW5kXHJcbiAqIGNoZWNraW5nIGJyb3dzZXItc3BlY2lmaWMgZ2xvYmFsIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm0ge1xyXG4gIHN0YXRpYyByZWFkb25seSBpc0Jyb3dzZXI6IGJvb2xlYW4gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQ7XHJcbiAgLyoqIExheW91dCBFbmdpbmVzICovXHJcbiAgRURHRSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGVkZ2UpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICBUUklERU5UID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gIC8vIEVkZ2VIVE1MIGFuZCBUcmlkZW50IG1vY2sgQmxpbmsgc3BlY2lmaWMgdGhpbmdzIGFuZCBuZWVkIHRvIGJlIGV4Y2x1ZGVkIGZyb20gdGhpcyBjaGVjay5cclxuICBCTElOSyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxyXG4gICAgICAoISEoKHdpbmRvdyBhcyBhbnkpLmNocm9tZSB8fCBoYXNWOEJyZWFrSXRlcmF0b3IpICYmICEhQ1NTICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVCk7XHJcblxyXG4gIC8vIFdlYmtpdCBpcyBwYXJ0IG9mIHRoZSB1c2VyQWdlbnQgaW4gRWRnZUhUTUwsIEJsaW5rIGFuZCBUcmlkZW50LiBUaGVyZWZvcmUgd2UgbmVlZCB0b1xyXG4gIC8vIGVuc3VyZSB0aGF0IFdlYmtpdCBydW5zIHN0YW5kYWxvbmUgYW5kIGlzIG5vdCB1c2VkIGFzIGFub3RoZXIgZW5naW5lJ3MgYmFzZS5cclxuICBXRUJLSVQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcclxuICAgICAgL0FwcGxlV2ViS2l0L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhdGhpcy5CTElOSyAmJiAhdGhpcy5FREdFICYmICF0aGlzLlRSSURFTlQ7XHJcblxyXG4gIC8qKiBCcm93c2VycyBhbmQgUGxhdGZvcm0gVHlwZXMgKi9cclxuICBJT1MgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgISh3aW5kb3cgYXMgYW55KS5NU1N0cmVhbTtcclxuXHJcbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcclxuICAvLyB0aGVtIHNlbGYgYXMgR2Vja28tbGlrZSBicm93c2VycyBhbmQgbW9kaWZ5IHRoZSB1c2VyQWdlbnQncyBhY2NvcmRpbmcgdG8gdGhhdC5cclxuICAvLyBTaW5jZSB3ZSBvbmx5IGNvdmVyIG9uZSBleHBsaWNpdCBGaXJlZm94IGNhc2UsIHdlIGNhbiBzaW1wbHkgY2hlY2sgZm9yIEZpcmVmb3hcclxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXHJcbiAgRklSRUZPWCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGZpcmVmb3h8bWluZWZpZWxkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gIC8vIFRyaWRlbnQgb24gbW9iaWxlIGFkZHMgdGhlIGFuZHJvaWQgcGxhdGZvcm0gdG8gdGhlIHVzZXJBZ2VudCB0byB0cmljayBkZXRlY3Rpb25zLlxyXG4gIEFORFJPSUQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLlRSSURFTlQ7XHJcblxyXG4gIC8vIFNhZmFyaSBicm93c2VycyB3aWxsIGluY2x1ZGUgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZWlyIHVzZXJBZ2VudC4gU29tZSBicm93c2VycyBtYXkgZmFrZVxyXG4gIC8vIHRoaXMgYW5kIGp1c3QgcGxhY2UgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZSB1c2VyQWdlbnQuIFRvIGJlIG1vcmUgc2FmZSBhYm91dCBTYWZhcmkgZXZlcnlcclxuICAvLyBTYWZhcmkgYnJvd3NlciBzaG91bGQgYWxzbyB1c2UgV2Via2l0IGFzIGl0cyBsYXlvdXQgZW5naW5lLlxyXG4gIFNBRkFSSSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiB0aGlzLldFQktJVDtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgVEhFTUVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFRoZW1lQ29uZmlnIHwgVGhlbWVDb25maWdbXT4oJ2x5LnRoZW1lLmNvbmZpZy5yb290Jyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEx5VGhlbWVDb25maWc+KCdseV90aGVtZV9jb25maWcnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2x5LnRoZW1lLm5hbWUnKTtcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYWNjZW50OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICB3YXJuOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBMeVRoZW1lQ29uZmlnIHtcbiAgdGhlbWVzOiBhbnlbXSA9IFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRWYWwge1xuICBkZWZhdWx0OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVDb2xvciB7XG4gIGNvbnRyYXN0OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUVfQ09ORklHLCBMeVRoZW1lQ29uZmlnIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVRoZW1lIHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgbWVkaWFTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaW1hcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHNlY29uZGFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgZmlyc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcmVhZG9ubHkgdGhlbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX3RoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lQ29uZmlnPigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+PigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX0NPTkZJRykgdGhlbWVDb25maWc6IEx5VGhlbWVDb25maWcsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnksXG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUVfQ09ORklHIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwge1xuICAgICAgaWQ6ICdseScsXG4gICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0ID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnbHktcy1jJyk7XG4gICAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZXMuaXRlbShpbmRleCk7XG4gICAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5maXJzdEVsZW1lbnQgPSBfZG9jdW1lbnQuYm9keS5maXJzdENoaWxkO1xuICAgIGlmICh0aGVtZUNvbmZpZykge1xuICAgICAgdGhlbWVDb25maWcudGhlbWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RoZW1lID0gbmV3IGl0ZW07XG4gICAgICAgIHRoaXMuYWRkKG5ld1RoZW1lKTtcbiAgICAgICAgdGhpcy50aGVtZXMuYWRkKG5ld1RoZW1lLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lOiBUaGVtZUNvbmZpZ1xuICAgKi9cbiAgYWRkKHRoZW1lOiBUaGVtZUNvbmZpZykge1xuICAgIHRoaXMuX3RoZW1lTWFwLnNldCh0aGVtZS5uYW1lLCB0aGVtZSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuc2V0KHRoZW1lLm5hbWUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuICBnZXRTdHlsZU1hcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3R5bGUsIFN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBkZWZhdWx0U3R5bGVzID0ge1xuICAnQGdsb2JhbCc6IHtcbiAgICAnKiwgKjphZnRlciwgKjpiZWZvcmUnOiB7XG4gICAgICAnLXdlYmtpdC1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJy1tb3otYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBSRUZfUkVHX0VYUCA9IC9cXHsoW1xcdy1dKylcXH0vZztcblxuZW51bSBUeXBlU3R5bGUge1xuICBNdWx0aXBsZSxcbiAgT25seU9uZVxufVxuY29uc3QgU1RZTEVfTUFQNDogU3R5bGVNYXA0ID0ge307XG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlTWFwNCB7XG4gIFtpZDogc3RyaW5nXToge1xuICAgIHN0eWxlczogU3R5bGVzRm4yPGFueT4gfCBTdHlsZXMyXG4gICAgdHlwZTogVHlwZVN0eWxlXG4gICAgcHJpb3JpdHk6IG51bWJlclxuICAgIGNzczoge1xuICAgICAgW3RoZW1lTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gICAgfSB8IHN0cmluZ1xuICAgIHJlcXVpcmVVcGRhdGU/OiBib29sZWFuXG4gIH07XG59XG5jb25zdCBDTEFTU0VTX01BUDoge1xuICBbaWRPclRoZW1lTmFtZTogc3RyaW5nXToge1xuICAgIFtjbGFzc05hbWU6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nXG59ID0ge307XG5jb25zdCBTVFlMRV9LRVlTX01BUCA9IHt9O1xubGV0IG5leHRJZCA9IDA7XG4vLyBmdW5jdGlvbiBmbigpIHtcbi8vICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuLy8gfVxuLy8gY29uc29sZS5sb2coe2ZufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlc0luRG9jdW1lbnQge1xuICBzdHlsZXM6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBIVE1MU3R5bGVFbGVtZW50XG4gICAgfVxuICB9ID0ge307XG4gIHN0eWxlQ29udGFpbmVycyA9IG5ldyBNYXA8bnVtYmVyLCBIVE1MRWxlbWVudD4oKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZUNvbmZpZztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBpbml0aWFsVGhlbWU6IHN0cmluZztcbiAgZWxlbWVudHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBIVE1MU3R5bGVFbGVtZW50XG4gIH07XG5cbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IHRoZW1lTmFtZSBpbiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzXG4gICAgICA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXVxuICAgICAgOiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV0gPSB7fTtcbiAgICAgIHRoaXMuX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lKTtcbiAgICAgIGlmICghdGhpcy5pbml0aWFsVGhlbWUpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVGhlbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWRkRGVmYXVsdFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKi9cbiAgYWRkU3R5bGUoaWQ6IHN0cmluZywgc3R5bGU6IFN0eWxlQ29udGFpbmVyIHwgKCh0aGVtZSkgPT4gU3R5bGVDb250YWluZXIpIHwgKCh0aGVtZSkgPT4gc3RyaW5nKSB8IHN0cmluZywgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5hZGRDc3MoaWQsIHN0eWxlIGFzIGFueSwgcHJpb3JpdHkpO1xuICAgIGlmIChlbCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgaWYgKG5hbSAhPT0gdGhpcy5jb25maWcubmFtZSkge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRTdHlsZXMgPSB0aGlzLmVsZW1lbnRzO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3VycmVudFN0eWxlcykge1xuICAgICAgICBpZiAoY3VycmVudFN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29uc3Qgc3R5bGVEYXRhID0gU1RZTEVfTUFQNFtrZXldO1xuICAgICAgICAgIGlmIChzdHlsZURhdGEucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZURhdGEuc3R5bGVzLCBrZXksIHN0eWxlRGF0YS5wcmlvcml0eSwgc3R5bGVEYXRhLnR5cGUsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBtZWRpYSkgYXMgc3RyaW5nO1xuICB9XG4gIHByaXZhdGUgX2FkZERlZmF1bHRTdHlsZXMoKSB7XG4gICAgdGhpcy5hZGRTdHlsZVNoZWV0KGRlZmF1bHRTdHlsZXMsICdseS0tZGVmYXVsdFN0eWxlcycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBpZCB1bmlxdWUgaWQgZm9yIHN0eWxlIGdyb3VwXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgaWQ/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyKTogSUNsYXNzZXM8VD4ge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgfHwgJ2dsb2JhbCc7XG4gICAgLy8gY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBuZXdJZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBfY3JlYXRlU3R5bGVDb250ZW50MjxUPihcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgbWVkaWE/OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3Qgc3R5bGVNYXAgPSAoaWQgaW4gU1RZTEVfTUFQNFxuICAgID8gU1RZTEVfTUFQNFtpZF1cbiAgICA6IFNUWUxFX01BUDRbaWRdID0ge1xuICAgICAgcHJpb3JpdHksXG4gICAgICBzdHlsZXMsXG4gICAgICB0eXBlLFxuICAgICAgY3NzOiB7fVxuICAgIH0pO1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHRoaXMuaW5pdGlhbFRoZW1lO1xuICAgIGNvbnN0IGlzQ3JlYXRlZCA9IChpZCBpbiBDTEFTU0VTX01BUCkgfHwgQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF07XG4gICAgaWYgKCFpc0NyZWF0ZWQgfHwgZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgIC8qKiBjcmVhdGUgbmV3IHN0eWxlIGZvciBuZXcgdGhlbWUgKi9cbiAgICAgIGxldCBjc3M7XG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzKHRoaXMuY29uZmlnKSwgdGhlbWVOYW1lLCBpc0NyZWF0ZWQsIGlkLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgICBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogY3JlYXRlIGEgbmV3IGlkIGZvciBzdHlsZSB0aGF0IGRvZXMgbm90IDwtPHJlcXVpcmU+LT4gY2hhbmdlcyAqL1xuICAgICAgICBDTEFTU0VTX01BUFtpZF0gPSB0cnVlIGFzIGFueTtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlcywgdGhlbWVOYW1lLCBpc0NyZWF0ZWQsIGlkLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgID8gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgIDogdGhpcy5lbGVtZW50c1tpZF0gPSB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoXG4gICAgICAgIGNzc1xuICAgICAgKTtcbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBlbC5pbm5lclRleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkpLCBlbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKlxuICAgICAgICogYXBwZW5kIGNoaWxkIHN0eWxlIGlmIG5vdCBleGlzdCBpbiBkb21cbiAgICAgICAqIGZvciBzc3Igb3IgaG1yXG4gICAgICAgKi9cbiAgICAgIGlmICghdGhpcy5lbGVtZW50c1tpZF0pIHtcbiAgICAgICAgY29uc3QgX2NzcyA9IHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdIHx8IHN0eWxlTWFwLmNzcztcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudHNbaWRdID0gdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpO1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkpLCBlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc2VzID0gdHlwZW9mIENMQVNTRVNfTUFQW2lkXSA9PT0gJ3N0cmluZydcbiAgICA/IENMQVNTRVNfTUFQW2lkXVxuICAgIDogdHlwZW9mIENMQVNTRVNfTUFQW2lkXSA9PT0gJ29iamVjdCdcbiAgICA/IENMQVNTRVNfTUFQW2lkXVxuICAgIDogQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF07XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoISh0aGVtZU5hbWUgaW4gQ0xBU1NFU19NQVApKSB7XG4gICAgICBDTEFTU0VTX01BUFt0aGVtZU5hbWVdID0ge307XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lcjtcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzOiBTdHlsZXMyLCB0aGVtZU5hbWU6IHN0cmluZywgX2NsYXNzZXNfOiBzdHJpbmcgfCB7fSwgaWQ6IHN0cmluZywgdHlwZVN0eWxlOiBUeXBlU3R5bGUsIG1lZGlhPzogc3RyaW5nKSB7XG4gIGlmICh0eXBlU3R5bGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lKSB7XG4gICAgLyoqIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXcgKi9cbiAgICBjb25zdCBjbGFzc05hbWUgPSBDTEFTU0VTX01BUFtpZF1cbiAgICA/IENMQVNTRVNfTUFQW2lkXSA9IF9jbGFzc2VzXyB8fCBjcmVhdGVOZXh0SWQoKVxuICAgIDogQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF0gPSBfY2xhc3Nlc18gfHwgY3JlYXRlTmV4dElkKCk7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBjc3MgPSBgLiR7Y2xhc3NOYW1lfXske3N0eWxlc319YDtcbiAgICAgIHJldHVybiBtZWRpYSA/IHRvTWVkaWEoY3NzLCBtZWRpYSkgOiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gc3R5bGVUb1N0cmluZyhpZCwgc3R5bGVzLCBjbGFzc05hbWUgYXMgYW55KTtcbiAgICAgIHJldHVybiBydWxlcztcbiAgICB9XG4gIH1cbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgY29uc3QgY2xhc3NlcyA9IENMQVNTRVNfTUFQW2lkXVxuICA/IENMQVNTRVNfTUFQW2lkXSA9IF9jbGFzc2VzXyB8fCB7fVxuICA6IENMQVNTRVNfTUFQW3RoZW1lTmFtZV1baWRdID0gX2NsYXNzZXNfIHx8IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBfY2xhc3NOYW1lID0gY2xhc3Nlc1trZXldIHx8IChjbGFzc2VzW2tleV0gPSBpc0Rldk1vZGUoKSA/IHRvQ2xhc3NOYW1lVmFsaWQoYCR7aWR9LS0tJHtrZXl9LSR7Y3JlYXRlTmV4dElkKCl9YCkgOiBjcmVhdGVOZXh0SWQoKSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyhrZXksIHZhbHVlIGFzIFN0eWxlczIsIF9jbGFzc05hbWUpO1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGlzIHN0cmluZycsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2VSZWZzKGNvbnRlbnQsIGNsYXNzZXMpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUmVmcyhzdHI6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUZfUkVHX0VYUCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIHJldHVybiBgLiR7ZGF0YVt0b2tlbl19YDtcbiAgfVxuICApO1xufVxuXG4vKipcbiAqIHtjb2xvcjoncmVkJ30gdG8gLmNsYXNzTmFtZXtjb2xvcjogcmVkfVxuICovXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKGtleTogc3RyaW5nLCBvYjogT2JqZWN0LCBjdXJyZW50S2V5OiBzdHJpbmcsIHBhcmVudEtleT86IHN0cmluZykge1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgc3ViQ29udGVudCA9ICcnO1xuICBsZXQga2V5QW5kVmFsdWUgPSAnJztcbiAgbGV0IG5ld0tleTtcbiAgaWYgKHBhcmVudEtleSAmJiBjdXJyZW50S2V5LmluZGV4T2YoJyYnKSAhPT0gLTEpIHtcbiAgICBuZXdLZXkgPSBjdXJyZW50S2V5LnJlcGxhY2UoJyYnLCBwYXJlbnRLZXkpO1xuICB9IGVsc2UgaWYgKGtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgbmV3S2V5ID0ga2V5O1xuICB9IGVsc2Uge1xuICAgIG5ld0tleSA9IGN1cnJlbnRLZXk7XG4gIH1cbiAgZm9yIChjb25zdCBzdHlsZUtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBvYltzdHlsZUtleV07XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHN1YkNvbnRlbnQgKz0gc3R5bGVUb1N0cmluZyhrZXksIGVsZW1lbnQgYXMgU3R5bGVzMiwgc3R5bGVLZXksIG5ld0tleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdTdHlsZUtleSA9IHRvSHlwaGVuQ2FzZUNhY2hlKHN0eWxlS2V5KTtcbiAgICAgICAga2V5QW5kVmFsdWUgKz0gYCR7bmV3U3R5bGVLZXl9OiR7ZWxlbWVudH07YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGtleUFuZFZhbHVlKSB7XG4gICAgaWYgKG5ld0tleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICAgIGtleUFuZFZhbHVlID0gYC4ke3BhcmVudEtleX17JHtrZXlBbmRWYWx1ZX19YDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudEtleSAmJiBwYXJlbnRLZXkgPT09ICdAZ2xvYmFsJykge1xuICAgICAgY29udGVudCArPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gYC4ke25ld0tleX1gO1xuICAgIH1cbiAgICBjb250ZW50ICs9IGB7JHtrZXlBbmRWYWx1ZX19YDtcbiAgfVxuICByZXR1cm4gY29udGVudCArIHN1YkNvbnRlbnQ7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZnVuY3Rpb24gZ2V0KG9iajogT2JqZWN0LCBwYXRoOiBhbnkpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqID0gb2JqW19wYXRoW2ldXSB8fCBwYXRoO1xuICB9XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0h5cGhlbkNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChnKSA9PiBgLSR7Z1swXS50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiB0b0NsYXNzTmFtZVZhbGlkKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IHMgPSBzdHIucmVwbGFjZSgvXlswLTldfFteXFx3XFwtXS9nLCBfID0+IHtcbiAgICByZXR1cm4gYF8ke18uY2hhckNvZGVBdCgwKX1gO1xuICB9KTtcbiAgcmV0dXJuIHRvSHlwaGVuQ2FzZShzKTtcbn1cblxuZnVuY3Rpb24gdG9IeXBoZW5DYXNlQ2FjaGUoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ciBpbiBTVFlMRV9LRVlTX01BUFxuICA/IFNUWUxFX0tFWVNfTUFQW3N0cl1cbiAgOiBTVFlMRV9LRVlTX01BUFtzdHJdID0gdG9IeXBoZW5DYXNlKHN0cik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiB0b01lZGlhKGNzczogc3RyaW5nLCBtZWRpYTogc3RyaW5nKSB7XG4gIHJldHVybiBgQG1lZGlhICR7bWVkaWF9eyR7Y3NzfX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXh0SWQoKSB7XG4gIHJldHVybiBgZSR7KG5leHRJZCsrKS50b1N0cmluZygzNil9YDtcbn1cblxudHlwZSBJQ2xhc3NlczxUPiA9IFJlY29yZDwoVCBleHRlbmRzICgoLi4uYXJnczogYW55W10pID0+IGFueSkgPyAoa2V5b2YgUmV0dXJuVHlwZTxUPikgOiBrZXlvZiBUKSwgc3RyaW5nPjtcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSwgTmdNb2R1bGVcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2V5QXR0cmlidXRlIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIF9uZ1RyYW5zY2x1ZGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IHRlbXBsYXRlUmVmO1xyXG4gICAgICB0aGlzLl92aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbmdUcmFuc2NsdWRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fdmlld1JlZi5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVNb2R1bGUge1xyXG5cclxufVxyXG4iLCJmdW5jdGlvbiBpc1dpbmRvdyhvYmo6IGFueSkge1xyXG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtOiBhbnkpIHtcclxuICAgIHJldHVybiBpc1dpbmRvdyhlbGVtKSA/IGVsZW0gOiBlbGVtLm5vZGVUeXBlID09PSA5ICYmIGVsZW0uZGVmYXVsdFZpZXc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0UG9zaXRpb24oZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBkb2NFbGVtOiBhbnksIHdpbjogYW55LFxyXG4gICAgICAgIGJveCA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xyXG4gICAgY29uc3QgZG9jID0gZWxlbSAmJiBlbGVtLm93bmVyRG9jdW1lbnQ7XHJcblxyXG4gICAgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB9XHJcbiAgICB3aW4gPSBnZXRXaW5kb3coZG9jKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiBib3gudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXHJcbiAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYW55KSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBJc0Jvb2xlYW4oKTogUHJvcGVydHlEZWNvcmF0b3Ige1xuICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBrZXk6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIGdldDogZGVmaW5pdGlvbi5nZXQsXG4gICAgICAgIHNldDogbmV3VmFsdWUgPT4ge1xuICAgICAgICAgIGRlZmluaXRpb24uc2V0KHRvQm9vbGVhbihuZXdWYWx1ZSkpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbJ19fJyArIGtleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgdGhpc1snX18nICsga2V5XSA9IHRvQm9vbGVhbihuZXdWYWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRFbnRyeSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCBkZWZhdWx0VmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICByZXR1cm4gdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwnO1xuaW1wb3J0IHsgc2hhZG93QnVpbGRlciB9IGZyb20gJy4uL3NoYWRvdyc7XG5cbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgXG4gICAgICAgICAgICBbYmddLFxuICAgICAgICAgICAgW2NvbG9yXSxcbiAgICAgICAgICAgIFtyYWlzZWRdLFxuICAgICAgICAgICAgW3JhaXNlZF1bc2hhZG93Q29sb3JdLFxuICAgICAgICAgICAgW2x5LWJ1dHRvbl1bb3V0bGluZWRdLFxuICAgICAgICAgICAgW2VsZXZhdGlvbl0sXG4gICAgICAgICAgICBbZWxldmF0aW9uXVtzaGFkb3dDb2xvcl0sXG4gICAgICAgICAgICBbZGlzYWJsZWRdLFxuICAgICAgICAgICAgbHktY2FyZFxuICAgICAgICAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3JhaXNlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb3V0bGluZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXV0b0NvbnRyYXN0OiBib29sZWFuO1xuICBwcml2YXRlIF9pc0NvbnRyYXN0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGJnOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICBASW5wdXQoKSBzZXQgcmFpc2VkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9yYWlzZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkOyB9XG5cbiAgQElucHV0KCkgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG5cbiAgQElucHV0KCkgc2V0IG91dGxpbmVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9vdXRsaW5lZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBvdXRsaW5lZCgpIHsgcmV0dXJuIHRoaXMuX291dGxpbmVkOyB9XG5cbiAgQElucHV0KCkgZWxldmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNoYWRvd0NvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIHB1YmxpYyBzZXRBdXRvQ29udHJhc3QoKSB7XG4gICAgdGhpcy5fYXV0b0NvbnRyYXN0ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGNvbnN0IF9fYmcgPSB0aGlzLmJnO1xuICAgIGNvbnN0IF9fY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgIGNvbnN0IF9fcmFpc2VkID0gdGhpcy5yYWlzZWQ7XG4gICAgY29uc3QgX19lbGV2YXRpb24gPSB0aGlzLmVsZXZhdGlvbjtcbiAgICBjb25zdCBfX2Rpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICBjb25zdCBfX291dGxpbmVkID0gdGhpcy5vdXRsaW5lZDtcbiAgICBjb25zdCBfX3NoYWRvd0NvbG9yID0gdGhpcy5zaGFkb3dDb2xvcjtcbiAgICBjb25zdCBfX2lzQ29udHJhc3QgPSB0aGlzLl9pc0NvbnRyYXN0ID0gdGhpcy5fYXV0b0NvbnRyYXN0ICYmICFfX2NvbG9yIHx8IF9fY29sb3IgPT09ICdhdXRvJztcbiAgICBjb25zdCBuZXdLZXkgPSBgY29tbW9uLS0tLToke1xuICAgICAgX19iZyB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICBfX2NvbG9yIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgX19yYWlzZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgIF9fZWxldmF0aW9uIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgIF9fZGlzYWJsZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICBfX291dGxpbmVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgICBfX3NoYWRvd0NvbG9yIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgICAgIF9faXNDb250cmFzdCB8fCBERUZBVUxUX1ZBTFVFfWA7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShuZXdLZXksICh0aGVtZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGU6IHtcbiAgICAgICAgYm9yZGVyPzogc3RyaW5nLFxuICAgICAgICBiYWNrZ3JvdW5kPzogc3RyaW5nLFxuICAgICAgICBjb2xvcj86IHN0cmluZyxcbiAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nLFxuICAgICAgICBwb2ludGVyRXZlbnRzPzogJ25vbmUnO1xuICAgICAgICAnJjpob3Zlcic/OiB7XG4gICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgICcmOmFjdGl2ZSc/OiB7XG4gICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nXG4gICAgICAgIH1cbiAgICAgIH0gPSB7fTtcbiAgICAgIGlmIChfX291dGxpbmVkKSB7XG4gICAgICAgIHN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgY3VycmVudENvbG9yJztcbiAgICAgIH1cbiAgICAgIGlmIChfX2Rpc2FibGVkKSB7XG4gICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUudGV4dC5kaXNhYmxlZDtcbiAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgaWYgKF9fYmcpIHtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuYnV0dG9uLmRpc2FibGVkO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5jb2xvck9mKF9fYmcpO1xuICAgICAgICAgIGlmIChfX2lzQ29udHJhc3QpIHtcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZihgJHtfX2JnfTpjb250cmFzdGApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0eWxlLmNvbG9yICYmIF9fY29sb3IpIHtcbiAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoX19jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fcmFpc2VkIHx8IF9fZWxldmF0aW9uKSB7XG4gICAgICAgICAgY29uc3Qgc2hhZG93Q29sb3IgPSAoX19zaGFkb3dDb2xvciAmJiB0aGVtZS5jb2xvck9mKF9fc2hhZG93Q29sb3IpKSB8fCBzdHlsZS5iYWNrZ3JvdW5kIHx8IHN0eWxlLmNvbG9yIHx8IHRoZW1lLmNvbG9yU2hhZG93O1xuICAgICAgICAgIGlmICghX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3R5bGUuYm94U2hhZG93ID0gc2hhZG93QnVpbGRlcihfX2VsZXZhdGlvbiB8fCAzLCBzaGFkb3dDb2xvcik7XG4gICAgICAgICAgaWYgKCFfX2VsZXZhdGlvbikge1xuICAgICAgICAgICAgc3R5bGVbJyY6YWN0aXZlJ10gPSB7XG4gICAgICAgICAgICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig4LCBzaGFkb3dDb2xvcilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3R5bGUgYXMgYW55O1xuICAgIH0sIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3dpdGhDbGFzc10nXG59KVxuZXhwb3J0IGNsYXNzIEx5V2l0aENsYXNzIHtcblxuICBASW5wdXQoKVxuICBzZXQgd2l0aENsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7dmFsfScgaXMgbm90IHZhbGlkIGNsYXNzTmFtZWApO1xuICAgIH1cbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh2YWwpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeUNvbW1vbiB9IGZyb20gJy4vY29tbW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVdpdGhDbGFzcyB9IGZyb20gJy4vd2l0aC1jbGFzcy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeUNvbW1vbiwgTHlXaXRoQ2xhc3NdLFxuICBleHBvcnRzOiBbTHlDb21tb24sIEx5V2l0aENsYXNzXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbk1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZpbGw6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gIH0sXG4gIHZpc3VhbGx5SGlkZGVuOiB7XG4gICAgYm9yZGVyOiAwLFxuICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICBoZWlnaHQ6ICcxcHgnLFxuICAgIG1hcmdpbjogJy0xcHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMXB4JyxcbiAgICBvdXRsaW5lOiAwLFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJ1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q29yZVN0eWxlcyB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlDb3JlU3R5bGVzJyk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyKSB7IH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudCwgSW5qZWN0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMeUNvcmVTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvY29yZS1zdHlsZXMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50ICwgIE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgb3ZlcmxheUJhY2tkcm9wOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogMTAwMFxuICB9XG59O1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdpbmRvd1Njcm9sbFNlcnZpY2Uge1xuXG4gIHB1YmxpYyBzY3JvbGwkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJykucGlwZShcbiAgICAgICAgYXVkaXRUaW1lKDIwMCksXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZIHx8IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgfSksXG4gICAgICAgIHNoYXJlKClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Nyb2xsJCA9IGVtcHR5KCk7XG4gICAgfVxuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUNvbnRhaW5lciB7XG4gIHByaXZhdGUgX2NsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlPdmVybGF5Q29udGFpbmVyJyk7XG4gIHByb3RlY3RlZCByZWFkb25seSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zID0gbmV3IFNldDxhbnk+KCk7XG4gIHByaXZhdGUgX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcjogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbHktb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgfVxuICB9XG4gIGdldCBjb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2FkZChpdGVtKSB7XG4gICAgdGhpcy5faXRlbXMuYWRkKGl0ZW0pO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgfVxuXG4gICAgLyoqXG4gICAqIFJlbW92ZSBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfcmVtb3ZlKGl0ZW0pIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgdGhpcy5faXRlbXMuZGVsZXRlKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdHlsZXMgZm9yIG92ZXJsYXkgY29udGFpbmVyXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXRlbXMuc2l6ZSkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lciA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1vdmVybGF5LWJhY2tkcm9wJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUJhY2tkcm9wIHtcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuX292ZXJsYXlDb25maWcuZm5EZXN0cm95KCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KCdvdmVybGF5Q29uZmlnJykgcHJpdmF0ZSBfb3ZlcmxheUNvbmZpZzogYW55LFxuICAgIGNvbW1vblN0eWxlczogTHlDb3JlU3R5bGVzXG4gICkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbW1vblN0eWxlcy5jbGFzc2VzLmZpbGwpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgVGVtcGxhdGVSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld1JlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tU2VydmljZSB7XG4gIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG4gIHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXJcbiAgKSB7IH1cblxuICBhdHRhY2g8VD4oX2hvc3RWaWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBjb21wb25lbnQ6IGFueSwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBfaG9zdFZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlKTtcbiAgICAgIHZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZjtcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2gocm9vdE5vZGUgPT4gdGhpcy5hZGRDaGlsZChyb290Tm9kZSkpO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5vdmVybGF5Q29udGFpbmVyLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG5cbiAgZ2V0RG9tRWxlbWVudEZyb21Db21wb25lbnRSZWYoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pik6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgZGVzdHJveVJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+LCBkZWxheTogbnVtYmVyKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0sIGRlbGF5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21TZXJ2aWNlIH0gZnJvbSAnLi9kb20uc2VydmljZSc7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudENvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyKSB7XG4vLyAgIHJldHVybiBwYXJlbnRDb250YWluZXIgfHwgbmV3IEx5T3ZlcmxheUNvbnRhaW5lcigpO1xuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVIgPSB7XG4vLyAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gT3ZlcmxheUNvbnRhaW5lciBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuLy8gICBwcm92aWRlOiBMeU92ZXJsYXlDb250YWluZXIsXG4vLyAgIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMeU92ZXJsYXlDb250YWluZXJdXSxcbi8vICAgdXNlRmFjdG9yeTogTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWVxuLy8gfTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBEb21TZXJ2aWNlXG4gICAgLy8gTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeERvbU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgUmVuZGVyZXIyLCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZW51bSBGb2N1c1N0YXR1cyB7XG4gIC8qKm1vdXNlIGFuZC9vciB0b3VjaCovXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIC8qKiBrZXlib2FyZCBhbmQvb3IgcHJvZ3JhbSovXG4gIEtFWUJPQVJEID0gJ2tleWJvYXJkJyxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5Rm9jdXNTdGF0ZV0nLFxuICBleHBvcnRBczogJ2x5Rm9jdXNTdGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RhdGU6IEZvY3VzU3RhdHVzO1xuICBzdGF0ZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBFbGVtZW50O1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBfc3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Rm9jdXNTdGF0dXM+KCk7XG4gIF9zdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBAT3V0cHV0KCkgbHlGb2N1c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNTdGF0dXM+KCk7XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNcbiAgICAgIC5zZXQoJ2ZvY3VzJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnYmx1cicsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uLmJpbmQodGhpcykpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjb25zdCBvbiA9IChldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9iOiBPYnNlcnZhYmxlPEZvY3VzU3RhdHVzPiA9IHRoaXMuX3N0YXRlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uID0gb2JcbiAgICAgIC8vIC5kZWJvdW5jZVRpbWUoMTExKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMTEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChlOiBGb2N1c1N0YXR1cykgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlID0gZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5seUZvY3VzQ2hhbmdlLmVtaXQoZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdGF0ZSgpIHtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdibHVyJykpIHtcbiAgICAgIHRoaXMuc3RhdGVNYXAuY2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCdtb3VzZWRvd24nKSB8fCB0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygndG91Y2hzdGFydCcpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLkRFRkFVTFQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5LRVlCT0FSRDtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGVTdWJqZWN0Lm5leHQoc3RhdGUpO1xuICB9XG5cbiAgb24oZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkge1xuICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIHNob3VsZFNldDogYm9vbGVhbikgPT4gc2hvdWxkU2V0ID8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSA6IHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgdG9nZ2xlQ2xhc3MoYGx5LWZvY3VzZWRgLCAhIXN0YXRlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBGb2N1c1N0YXR1cykge1xuICAgICAgaWYgKEZvY3VzU3RhdHVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gRm9jdXNTdGF0dXNba2V5XTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoYGx5LSR7Y2xhc3NOYW1lfS1mb2N1c2VkYCwgc3RhdGUgPT09IGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQobnVsbCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Rm9jdXNTdGF0ZSB9IGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUZvY3VzU3RhdGVdLFxuICBleHBvcnRzOiBbTHlGb2N1c1N0YXRlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGVNb2R1bGUgeyB9XG4iLCJleHBvcnQgY29uc3QgQVVJX1ZFUlNJT04gPSAnMS43LjAtYmV0YS42MDN4OSc7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMDktMDhUMjI6Mzk6MDIuNTY2Wic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgTFlfSEFNTUVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyT3B0aW9ucz4oJ0xZX0hBTU1FUl9PUFRJT05TJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeUhhbW1lckdlc3R1cmVDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgcHJpdmF0ZSBfaGFtbWVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyAod2luZG93IGFzIGFueSkuSGFtbWVyIDogbnVsbDtcbiAgZXZlbnRzOiBzdHJpbmdbXSA9IHRoaXMuX2hhbW1lciA/IFtcbiAgICAnc2xpZGUnLFxuICAgICdzbGlkZXN0YXJ0JyxcbiAgICAnc2xpZGVlbmQnLFxuICAgICdzbGlkZXJpZ2h0JyxcbiAgICAnc2xpZGVsZWZ0J1xuICBdIDogW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfSEFNTUVSX09QVElPTlMpIHByaXZhdGUgX2hhbW1lck9wdGlvbnM6IEhhbW1lck9wdGlvbnMsXG4gICAgLy8gcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBidWlsZEhhbW1lcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhhbW1lckluc3RhbmNlIHtcbiAgICAvLyBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgLy8gICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2staGFtbWVyLWNzcycsIHtcbiAgICAvLyAgICAgJyc6ICgpID0+IChcbiAgICAvLyAgICAgICBgdXNlci1zZWxlY3Q6IG5vbmU7YCArXG4gICAgLy8gICAgICAgYC13ZWJraXQtdXNlci1kcmFnOiBub25lO2AgK1xuICAgIC8vICAgICAgIGAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7YFxuICAgIC8vICAgICApXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgLy8gfVxuICAgIGNvbnN0IG1jID0gbmV3IHRoaXMuX2hhbW1lcihlbGVtZW50LCB0aGlzLl9oYW1tZXJPcHRpb25zIHx8IHVuZGVmaW5lZCk7XG5cbiAgICBjb25zdCBwYW4gPSBuZXcgdGhpcy5faGFtbWVyLlBhbigpO1xuICAgIGNvbnN0IHN3aXBlID0gbmV3IHRoaXMuX2hhbW1lci5Td2lwZSgpO1xuICAgIGNvbnN0IHNsaWRlID0gdGhpcy5fY3JlYXRlUmVjb2duaXplcihwYW4sIHtldmVudDogJ3NsaWRlJywgdGhyZXNob2xkOiAwfSwgc3dpcGUpO1xuXG4gICAgc2xpZGUucmVjb2duaXplV2l0aChzd2lwZSk7XG4gICAgcGFuLnJlY29nbml6ZVdpdGgoc3dpcGUpO1xuXG4gICAgLy8gQWRkIGN1c3RvbWl6ZWQgZ2VzdHVyZXMgdG8gSGFtbWVyIG1hbmFnZXJcbiAgICBtYy5hZGQoW3N3aXBlLCBwYW4sIHNsaWRlXSk7XG4gICAgcmV0dXJuIG1jO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBuZXcgcmVjb2duaXplciwgd2l0aG91dCBhZmZlY3RpbmcgdGhlIGRlZmF1bHQgcmVjb2duaXplcnMgb2YgSGFtbWVySlMgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUmVjb2duaXplcihiYXNlOiBhbnksIG9wdGlvbnM6IGFueSwgLi4uaW5oZXJpdGFuY2VzOiBhbnlbXSkge1xuICAgIGNvbnN0IHJlY29nbml6ZXIgPSBuZXcgKGJhc2UuY29uc3RydWN0b3IpKG9wdGlvbnMpO1xuXG4gICAgaW5oZXJpdGFuY2VzLnB1c2goYmFzZSk7XG4gICAgaW5oZXJpdGFuY2VzLmZvckVhY2goaXRlbSA9PiByZWNvZ25pemVyLnJlY29nbml6ZVdpdGgoaXRlbSkpO1xuXG4gICAgcmV0dXJuIHJlY29nbml6ZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lTW9kdWxlIHtcbiAgc3RhdGljIHNldFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMeVRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFtMeVRoZW1lMl0sXG4gICAgICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6IHRoZW1lTmFtZSB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVuZGVmaW5lZCB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBVbmRlZmluZWRWYWx1ZSA9IG5ldyBVbmRlZmluZWQoKTtcbiIsImV4cG9ydCBlbnVtIEludmVydE1lZGlhUXVlcnkge1xuICBObyxcbiAgWWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NZWRpYVF1ZXJ5KG1lZGlhOiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk6IEludmVydE1lZGlhUXVlcnkgPSBJbnZlcnRNZWRpYVF1ZXJ5Lk5vKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICBpZiAobWVkaWEgJiYgaW52ZXJ0TWVkaWFRdWVyeSA9PT0gSW52ZXJ0TWVkaWFRdWVyeS5ZZXMpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBtZWRpYS5zcGxpdCgnLCcpLm1hcChfID0+IGBub3QgJHtffWApO1xuICAgIHJldHVybiBuZXdWYWw7XG4gIH1cbiAgcmV0dXJuIG1lZGlhO1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBUeXBvZ3JhcGh5Q29uZmlnIHtcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFdlaWdodD86IG51bWJlcjtcbiAgbGV0dGVyU3BhY2luZz86IG51bWJlcjtcbiAgdGV4dFRyYW5zZm9ybT86ICd1cHBlcmNhc2UnIHwgJ2NhcGl0YWxpemUnIHwgJ2xvd2VyY2FzZSc7XG4gIGd1dHRlclRvcD86IG51bWJlcjtcbiAgZ3V0dGVyQm90dG9tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGh0bWxGb250U2l6ZTogbnVtYmVyLFxuICAgIGZvbnRTaXplOiBudW1iZXI7XG4gIH07XG4gIHB4VG9SZW0odmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLnR5cG9ncmFwaHkuZm9udFNpemUgLyAxNDtcbiAgICByZXR1cm4gYCR7dmFsdWUgLyB0aGlzLnR5cG9ncmFwaHkuaHRtbEZvbnRTaXplICogc2l6ZX1yZW1gO1xuICB9XG4gIGNvbG9yT2YodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0KG9iajogT2JqZWN0LCBwYXRoOiBhbnkpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqID0gb2JqW19wYXRoW2ldXSB8fCBwYXRoO1xuICB9XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYWNoTWVkaWEoc3RyOiBzdHJpbmcsIGZuOiAoKHZhbDogc3RyaW5nLCBtZWRpYTogc3RyaW5nLCBsZW46IG51bWJlcikgPT4gdm9pZCkpIHtcbiAgY29uc3QgdmFsdWVzID0gc3RyLnNwbGl0KC9cXHMvZyk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgdmFsSXRlbSA9IHZhbHVlc1tpbmRleF0uc3BsaXQoL1xcQC9nKTtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbEl0ZW0uc2hpZnQoKTtcbiAgICBjb25zdCBsZW4gPSB2YWxJdGVtLmxlbmd0aDtcbiAgICBpZiAobGVuKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdmFsSXRlbVtqXSwgdmFsSXRlbS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHVuZGVmaW5lZCwgbGVuKTtcbiAgICB9XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyLCBMeU92ZXJsYXlCYWNrZHJvcCwgV2luZG93U2Nyb2xsU2VydmljZSB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmludGVyZmFjZSBPdmVybGF5Q29uZmlnIHtcbiAgc3R5bGVzOiBPYmplY3Q7XG4gIGZuRGVzdHJveT86ICguLi5hcmcpID0+IHZvaWQ7XG4gIGhvc3Q/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gIC8qKiBEZXRhY2hlcyBhIHZpZXcgZnJvbSBkaXJ0eSBjaGVja2luZyBhZ2FpbiBvZiBBcHBsaWNhdGlvblJlZi4gICovXG4gIGRldGFjaDogKCkgPT4gdm9pZDtcblxuICAvKiogUmVtb3ZlIGVsZW1lbnQgb2YgRE9NICovXG4gIHJlbW92ZTogKCkgPT4gdm9pZDtcblxuICAvKiogRGV0YWNoICYgcmVtb3ZlICovXG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG59XG5jbGFzcyBDcmVhdGVGcm9tVGVtcGxhdGVSZWYgaW1wbGVtZW50cyBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2VsOiBhbnk7XG4gIHByaXZhdGUgX2NvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwcml2YXRlIF9jb21wUmVmT3ZlcmxheUJhY2tkcm9wOiBDb21wb25lbnRSZWY8YW55PjtcbiAgd2luZG93U2Nyb2xsU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBfY29udGV4dDogYW55LFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICB3aW5kb3dTY3JvbGw6IFdpbmRvd1Njcm9sbFNlcnZpY2UsXG4gICAgY29uZmlnPzogT3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICAvLyB0aGlzLl92aWV3UmVmID0gX3RlbXBsYXRlUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhfY29udGV4dCk7XG4gICAgLy8gdGhpcy5fdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5fZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290Tm9kZSkpO1xuICAgIGNvbnN0IF9fc3R5bGVzID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB6SW5kZXg6IDEwMDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIC4uLmNvbmZpZy5zdHlsZXNcbiAgICB9O1xuICAgIGNvbnN0IG5ld0luamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFtcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogJ292ZXJsYXlDb25maWcnLFxuICAgICAgICB1c2VWYWx1ZTogPE92ZXJsYXlDb25maWc+e1xuICAgICAgICAgIGZuRGVzdHJveTogdGhpcy5kZXN0cm95LmJpbmQodGhpcyksXG4gICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgIHN0eWxlczogX19zdHlsZXMsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLCB0aGlzLl9pbmplY3Rvcik7XG5cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcyhfX3N0eWxlcyk7XG4gICAgaWYgKGNvbmZpZy5ob3N0KSB7XG4gICAgICB0aGlzLndpbmRvd1Njcm9sbFN1YiA9IHdpbmRvd1Njcm9sbC5zY3JvbGwkLnN1YnNjcmliZSgodmFsKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBjb25maWcuaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHJlY3QudG9wICE9PSBfX3N0eWxlcy50b3AgfHwgcmVjdC5sZWZ0ICE9PSBfX3N0eWxlcy5sZWZ0KSB7XG4gICAgICAgICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMobmV3U3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KEx5T3ZlcmxheUJhY2tkcm9wLCBuZXdJbmplY3Rvcik7XG4gICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQoYmFja2Ryb3BFbCk7XG4gICAgdGhpcy5fYXBwZW5kQ29tcG9uZW50VG9Cb2R5KF90ZW1wbGF0ZVJlZiwgX2NvbnRleHQsIHRoaXMuX2luamVjdG9yKTtcblxuICB9XG5cbiAgdXBkYXRlU3R5bGVzKF9fc3R5bGVzKSB7XG4gICAgLyoqIEFwcGx5IHN0eWxlcyAqL1xuICAgIC8qKiBzZXQgc3R5bGVzICovXG4gICAgZm9yIChjb25zdCBrZXkgaW4gX19zdHlsZXMpIHtcbiAgICAgIGlmIChfX3N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlVmFsID0gX19zdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHN0eWxlVmFsKSB7XG4gICAgICAgICAgdGhpcy5fZWwuc3R5bGVba2V5XSA9IHR5cGVvZiBfX3N0eWxlc1trZXldID09PSAnbnVtYmVyJyA/IGAke3N0eWxlVmFsfXB4YCA6IHN0eWxlVmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ29tcG9uZW50VG9Cb2R5KHR5cGU6IFRlbXBsYXRlUmVmPGFueT4gfCBUeXBlPGFueT4sIGNvbnRleHQsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIC8vIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy5fdmlld1JlZiA9IHR5cGUuY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRleHQgfHwge30pO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIC8vIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChfID0+IHRoaXMuX2VsLmFwcGVuZENoaWxkKF8pKTtcblxuICAgICAgLy8gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb21wUmVmID0gdGhpcy5nZW5lcmF0ZUNvbXBvbmVudCh0eXBlLCBpbmplY3Rvcik7XG4gICAgICB0aGlzLl9lbCA9IHRoaXMuX2NvbXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDb21wb25lbnQodHlwZTogVHlwZTxhbnk+LCBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHR5cGUpO1xuICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX2FwcFJlZi5kZXRhY2hWaWV3KHRoaXMuX3ZpZXdSZWYpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fdmlld1JlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fY29tcFJlZikge1xuICAgICAgdGhpcy5fY29tcFJlZi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmRlc3Ryb3koKTtcbiAgICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUoYmFja2Ryb3BFbCk7XG4gICAgfVxuICAgIHRoaXMud2luZG93U2Nyb2xsU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXkge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX292ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIF93aW5kb3dTY3JvbGw6IFdpbmRvd1Njcm9sbFNlcnZpY2VcbiAgKSB7IH1cblxuICBjcmVhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIGNvbnRleHQ/OiBhbnksIGNvbmZpZz86IE92ZXJsYXlDb25maWcpOiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgICByZXR1cm4gbmV3IENyZWF0ZUZyb21UZW1wbGF0ZVJlZih0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX2FwcFJlZiwgdGVtcGxhdGUsIHRoaXMuX292ZXJsYXlDb250YWluZXIsIGNvbnRleHQsIHRoaXMuX2luamVjdG9yLCB0aGlzLl93aW5kb3dTY3JvbGwsIGNvbmZpZyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeU92ZXJsYXlCYWNrZHJvcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0x5T3ZlcmxheUJhY2tkcm9wXVxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJnZXQiLCJ0c2xpYl8xLl9fYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQStCLFFBQVE7O0lBQ3JDLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7SUFDOUMsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUM5QyxJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBQzlDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDekM7Ozs7OztBQ05EO0FBQ0EsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDOztBQUV2QixJQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQzs7QUFDbEMsSUFBTSx3QkFBd0IsR0FBRyxJQUFJLENBQUM7O0FBQ3RDLElBQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDOztBQUN4QyxJQUFhLE9BQU8sR0FBRztJQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQzNDLENBQUM7Ozs7OztBQUNGLGlDQUF3QyxTQUE4QixFQUFFLEtBQWM7SUFBOUMsMEJBQUEsRUFBQSxhQUE4QjtJQUFFLHNCQUFBLEVBQUEsY0FBYzs7SUFDcEYsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOztJQUM1QixJQUFNLE1BQU0sR0FBRztRQUNiLEtBQUssQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxHQUFHLEVBQUU7UUFDeEMsS0FBSyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsR0FBRyxFQUFFO0tBQzlDLENBQUM7O0lBQ0YsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUU3QixPQUFPLGdCQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFHLENBQUM7Q0FFdkw7Ozs7OztBQUVELHVCQUE4QixTQUEwQixFQUFFLEtBQWM7O0lBQ3RFLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUMzRCxJQUFNLE1BQU0sR0FBRztRQUNiLEtBQUssQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxHQUFHLEVBQUU7UUFDeEMsS0FBSyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsR0FBRyxFQUFFO0tBQzlDLENBQUM7O0lBQ0YsSUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUU3QixPQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBTSxDQUFDLENBQUMsRUFB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