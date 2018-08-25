import * as _chroma from 'chroma-js';
import { InjectionToken, Injectable, Optional, Inject, RendererFactory2, isDevMode, ViewEncapsulation, Directive, ElementRef, Input, NgModule, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, NgZone, Renderer2, EventEmitter, Output, SkipSelf, defineInjectable, inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { __extends } from 'tslib';
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
/** @type {?} */
var classId = 0;
var CoreTheme = /** @class */ (function () {
    function CoreTheme(themeConfig, rendererFactory, _document) {
        var _this = this;
        this.rendererFactory = rendererFactory;
        this._document = _document;
        this._themeMap = new Map();
        this._styleMap = new Map();
        this._styleCoreMap = new Map();
        if (!themeConfig) {
            throw new Error('LY_THEME_CONFIG undefined');
        }
        this.firstElement = _document.body.firstChild;
        this.renderer = this.rendererFactory.createRenderer(null, {
            id: 'ly',
            encapsulation: ViewEncapsulation.Native,
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
        // if (Platform.isBrowser) {
        //   const mediaStyleContainer = _document.body.querySelector('ly-media-style-container');
        //   const primaryStyleContainer = _document.body.querySelector('ly-primary-style-container');
        //   const secondaryStyleContainer = _document.body.querySelector('ly-secondary-style-container');
        //   if (primaryStyleContainer) {
        //     (_document.body as HTMLBodyElement).removeChild(mediaStyleContainer);
        //     (_document.body as HTMLBodyElement).removeChild(primaryStyleContainer);
        //     (_document.body as HTMLBodyElement).removeChild(secondaryStyleContainer);
        //   }
        // }
        this.mediaStyleContainer = this.renderer.createElement('ly-media-style-container');
        this.primaryStyleContainer = this.renderer.createElement('ly-primary-style-container');
        this.secondaryStyleContainer = this.renderer.createElement('ly-secondary-style-container');
        this.renderer.insertBefore(_document.body, this.mediaStyleContainer, _document.body.firstChild);
        this.renderer.insertBefore(_document.body, this.primaryStyleContainer, this.mediaStyleContainer);
        this.renderer.insertBefore(_document.body, this.secondaryStyleContainer, this.primaryStyleContainer);
        this.setCoreStyle();
        if (themeConfig) {
            themeConfig.themes.forEach(function (item) {
                _this.add(new item);
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
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    CoreTheme.prototype.setUpStyle = /**
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function (key, styles, media, invertMediaQuery) {
        return this._ĸreateStyle(undefined, key, styles, this._styleCoreMap, 'root', this.primaryStyleContainer, media, invertMediaQuery);
    };
    /**
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    CoreTheme.prototype.setUpStyleSecondary = /**
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function (key, styles, media, invertMediaQuery) {
        return this._ĸreateStyle(undefined, key, styles, this._styleCoreMap, 'root', this.secondaryStyleContainer, media, invertMediaQuery);
    };
    /**
     * @template T
     * @param {?} themeConfig
     * @param {?} key
     * @param {?} style
     * @param {?} mapStyles
     * @param {?} _for
     * @param {?} _in
     * @param {?=} _media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    CoreTheme.prototype._ĸreateStyle = /**
     * @template T
     * @param {?} themeConfig
     * @param {?} key
     * @param {?} style
     * @param {?} mapStyles
     * @param {?} _for
     * @param {?} _in
     * @param {?=} _media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function (themeConfig, key, style, mapStyles, _for, _in, _media, invertMediaQuery) {
        if (mapStyles.has(key)) {
            return mapStyles.get(key).id;
        }
        else {
            /** @type {?} */
            var id = "k" + (classId++).toString(36);
            /** @type {?} */
            var styleElement = this.renderer.createElement('style');
            /** @type {?} */
            var media = transformMediaQuery(_media, invertMediaQuery);
            /** @type {?} */
            var styleContent = this.renderer.createText(this._createStyleContent(themeConfig, style, id, media));
            /** @type {?} */
            var saveIn = media ? this.mediaStyleContainer : _in;
            this.renderer.appendChild(styleElement, styleContent);
            this.renderer.appendChild(saveIn, styleElement);
            if (isDevMode()) {
                this.renderer.setAttribute(styleElement, 'style_data', _for + "\u00B7\u00B7\u00B7" + id + "\u00B7\u00B7\u00B7" + key);
            }
            /** @type {?} */
            var dataStyle = {
                id: id,
                style: style,
                styleElement: styleElement,
                media: media
            };
            mapStyles.set(key, dataStyle);
            return id;
        }
    };
    /** #style */
    /**
     * #style
     * @template T
     * @param {?} themeConfig
     * @param {?} styles
     * @param {?} id
     * @param {?=} media
     * @return {?}
     */
    CoreTheme.prototype._createStyleContent = /**
     * #style
     * @template T
     * @param {?} themeConfig
     * @param {?} styles
     * @param {?} id
     * @param {?=} media
     * @return {?}
     */
    function (themeConfig, styles, id, media) {
        /** @type {?} */
        var typf = typeof styles;
        if (typf === 'string') {
            return toMedia("." + id + "{" + styles + "}", media);
        }
        else if (typf === 'function') {
            return toMedia("." + id + "{" + ((/** @type {?} */ (styles)))(themeConfig) + "}", media);
        }
        /** @type {?} */
        var content = '';
        for (var key$ in /** @type {?} */ (styles)) {
            if (styles.hasOwnProperty(key$)) {
                /** @type {?} */
                var val = styles[key$];
                /** @type {?} */
                var text = typeof val === 'function' ? val(themeConfig) : val;
                content += "." + id + key$ + "{" + text + "}";
            }
        }
        return toMedia(content, media);
    };
    /**
     * @return {?}
     */
    CoreTheme.prototype.setCoreStyle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classname = this.setUpStyle('rootbody', {
            '': function () { return ("margin:0;"); },
            ', *, *:after, *:before': function () { return ("-webkit-box-sizing: border-box;" +
                "-moz-box-sizing: border-box;" +
                "box-sizing: border-box;"); }
        });
        this.renderer.addClass(this._document.body, classname);
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
 * Converter to media query if `media` is present
 * @param {?} text style content
 * @param {?=} media media query
 * @return {?}
 */
function toMedia(text, media) {
    if (typeof media === 'string') {
        return "@media " + media + "{" + text + "}";
    }
    else if (Array.isArray(media)) {
        /** @type {?} */
        var result_1 = '';
        media.forEach(function (_) { return result_1 += "@media " + _ + "{" + text + "}"; });
        return result_1;
    }
    return text;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        this.prefix = 'k';
        if (themeName) {
            this.setUpTheme(themeName);
        }
    }
    Object.defineProperty(LyTheme2.prototype, "classes", {
        // private _styleMap2: Map<string, StylesElementMap>;
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
            // this._styleMap2 = themeName in STYLE_MAP
            // ? STYLE_MAP[themeName]
            // : STYLE_MAP[themeName] = new Map();
            this.config = this.core.get(themeName);
            this._styleMap = new Map();
            this.elements = themeName in this.stylesInDocument.styles
                ? this.stylesInDocument.styles[themeName]
                : this.stylesInDocument.styles[themeName] = {};
            this._createInstanceForTheme(themeName);
            if (!this.initialTheme) {
                this.initialTheme = this.config.name;
            }
        }
    };
    /**
     * @template T
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    LyTheme2.prototype.setUpStyle = /**
     * @template T
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function (key, styles, media, invertMediaQuery) {
        /** @type {?} */
        var name = this.config.name;
        return this.core._ĸreateStyle(this.config, key, styles, this._styleMap, name, this.core.primaryStyleContainer, media, invertMediaQuery);
    };
    /**
     * @template T
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    LyTheme2.prototype.setUpStyleSecondary = /**
     * @template T
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function (key, styles, media, invertMediaQuery) {
        /** @type {?} */
        var name = this.config.name;
        return this.core._ĸreateStyle(this.config, key, styles, this._styleMap, name, this.core.secondaryStyleContainer, media, invertMediaQuery);
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
        var _this = this;
        if (!Platform.isBrowser) {
            throw new Error("`theme.setTheme('theme-name')` is only available in browser platform");
        }
        this.config = this.core.get(nam);
        // this._styleMap2.forEach(dataStyle => {
        //   dataStyle.el.innerText = this._createStyleC ontent2(dataStyle.styles, dataStyle.id);
        // });
        // for (const key in STYLE_MAP_03) {
        //   if (STYLE_MAP_03.hasOwnProperty(key)) {
        //     const { styles, typeStyle, media } = STYLE_MAP_03[key];
        //     // this._createStyleContent2(styles, key, typeStyle, this.core.renderer, true, media);
        //   }
        // }
        this._styleMap.forEach(function (dataStyle) {
            dataStyle.styleElement.innerText = _this.core._createStyleContent(_this.config, dataStyle.style, dataStyle.id);
        });
        var _a = this.stylesInDocument, styleContainers = _a.styleContainers, styles = _a.styles;
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
                // CLASSES_MAP[id] = {};
                // const themeMap = this.config.name in styleMap.classes
                // ? styleMap.classes[this.config.name]
                // : styleMap.classes[this.config.name] = {};
                // const className = id in (themeMap as Object)
                // ? themeMap[id]
                // : themeMap[id] = this._nextId();
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
        /** @type {?} */
        var classes = typeof CLASSES_MAP[id] === 'string'
            ? CLASSES_MAP[id]
            : typeof CLASSES_MAP[id] === 'object'
                ? CLASSES_MAP[id]
                : CLASSES_MAP[themeName][id];
        return classes;
        // const style = this._styleMap2.get(id);
        // if (!this.stylesInDocument.styles.has(id)) {
        //   this.stylesInDocument.styles.add(id);
        //   this.core.renderer.appendChild(this.core.primaryStyleContainer, style.el);
        // }
        // if (forChangeTheme && styleMap.themes[this.config.name]) {
        //   style.el.innerText = styleMap.themes[this.config.name];
        // }
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
    // let newKey = '';
    // const string
    // const themeMap = classes[themeName] ? classes[themeName] : classes[themeName] = {};
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
            // STYLE_MAP4[id].rules = styles;
            return media ? toMedia$1(css, media) : css;
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
                var className = classes[key] || (classes[key] = isDevMode() ? toClassNameValid(id + "---" + key + "-" + createNextId()) : createNextId());
                /** @type {?} */
                var style = styleToString(key, /** @type {?} */ (value), className);
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
    // if (!parentKey) {
    //   console.log({currentKey, key, subContent});
    // }
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
function toMedia$1(css, media) {
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
        var _this = this;
        this._isContrast = this._autoContrast && !this.color || this.color === 'auto';
        /** @type {?} */
        var newKey = "common----:" + (this.bg || DEFAULT_VALUE) + "\u00B7" + (this.color || DEFAULT_VALUE) + "\u00B7" + (this.raised || DEFAULT_VALUE) + "\u00B7" + (this.elevation || DEFAULT_VALUE) + "\u00B7" + (this.disabled || DEFAULT_VALUE) + "\u00B7" + (this.outlined || DEFAULT_VALUE) + "\u00B7" + (this.shadowColor || DEFAULT_VALUE) + "\u00B7" + (this._isContrast || DEFAULT_VALUE);
        this._className = this.theme.addStyle(newKey, function (theme) {
            /** @type {?} */
            var style = {};
            if (_this.outlined) {
                style.border = '1px solid currentColor';
            }
            if (_this.disabled) {
                style.color = theme.text.disabled;
                style.pointerEvents = 'none';
                if (_this.bg) {
                    style.background = theme.button.disabled;
                }
            }
            else {
                if (_this.bg) {
                    style.background = theme.colorOf(_this.bg);
                    if (_this._isContrast) {
                        style.color = theme.colorOf(_this.bg + ":contrast");
                    }
                }
                if (!style.color && _this.color) {
                    style.color = theme.colorOf(_this.color);
                }
                if (_this.raised || _this.elevation) {
                    /** @type {?} */
                    var shadowColor = (_this.shadowColor && theme.colorOf(_this.shadowColor)) || style.background || style.color || theme.colorShadow;
                    if (!_this.bg) {
                        style.background = theme.background.primary;
                    }
                    style.boxShadow = shadowBuilder(_this.elevation || 3, shadowColor);
                    if (!_this.elevation) {
                        style['&:active'] = {
                            boxShadow: shadowBuilder(8, shadowColor)
                        };
                    }
                }
            }
            return /** @type {?} */ (style);
        }, this._getHostElement(), this._className);
        /**~ */
        // const raisedĸey = this.raised === true ? 'raised' : '';
        // let key = '';
        // if ((this.contrast && !this.color || this.color === 'auto') && this.bg) {
        //   key = `bcr-contrast:${this.bg}${raisedĸey}${this.elevation}`;
        //   this._className = this.theme.addStyle(`ly-${key}`, this.contrastStyle.bind(this), this._getHostElement(), this._className);
        // } else if (this.bg && this.color) {
        //   key = `b&ĸ${this.bg}${this.color}${this.raised}${this.elevation}`;
        //   this._className = this.theme.addStyle(`ly-${key}`, this.bgColorStyle.bind(this), this._getHostElement(), this._className);
        // } else if (this.raised && !this.bg) {
        //   key = raisedĸey + this.color || '';
        //   this._className = this.theme.addStyle<any>(`ly-${key}`, theme => {
        //     let styles = `background-color:${theme.background.primary};`;
        //     let color = '';
        //     let colorShadow;
        //     if (this.color) {
        //       color = this.theme.colorOf(this.color);
        //       colorShadow = color;
        //       styles += `color:${color};`;
        //     } else {
        //       colorShadow = theme.colorShadow;
        //     }
        //     if (this._raised) {
        //       styles += shadowBuilderDeprecated(this.elevation, colorShadow);
        //     }
        //     return styles;
        //   }, this._getHostElement(), this._className);
        // } else if (this.bg || this.color) {
        //   const changeKey = this.bg ? ['bg', 'background', this.bg] : ['ĸ', 'color', this.color];
        //   const color = changeKey[2];
        //   key = `${changeKey[0]}${color}${this._raised}${this.elevation}`;
        //   /** Create style */
        //   this._className = this.theme.addStyle(`ly-${key}`, () => {
        //     const _color = this.theme.colorOf(this.bg || this.color);
        //     let styles = `${changeKey[1]}:${_color};`;
        //     if (this._raised) {
        //       styles += shadowBuilderDeprecated(this.elevation, _color);
        //     }
        //     return styles;
        //   }, this._getHostElement(), this._className);
        // } else {
        //   key = `raised${this._raised}elxxxxxxxx${this.elevation}`;
        //   this._className = this.theme.addStyle(`ly-${key}`, () => {
        //     if (this._raised) {
        //       return shadowBuilderDeprecated(this.elevation, this.theme.config.colorShadow);
        //     } else {
        //       return shadowBuilderDeprecated(0, this.theme.config.colorShadow);
        //     }
        //   }, this._getHostElement(), this._className);
        // }
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
/** @type {?} */
var DEFAULT_VALUE = '';

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
var LyOverlayContainer = /** @class */ (function () {
    function LyOverlayContainer() {
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
    LyOverlayContainer.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LyOverlayContainer.ctorParameters = function () { return []; };
    return LyOverlayContainer;
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
                _this._viewContainerRef.detach();
                _this._viewContainerRef.clear();
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
/**
 * @param {?} parentContainer
 * @return {?}
 */
function LY_OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer) {
    return parentContainer || new LyOverlayContainer();
}
/** @type {?} */
var LY_OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: LyOverlayContainer,
    deps: [[new Optional(), new SkipSelf(), LyOverlayContainer]],
    useFactory: LY_OVERLAY_CONTAINER_PROVIDER_FACTORY
};
var LxDomModule = /** @class */ (function () {
    function LxDomModule() {
    }
    LxDomModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [[DomService, LY_OVERLAY_CONTAINER_PROVIDER]]
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
var AUI_VERSION = '1.7.0-beta.54p91';
/** @type {?} */
var AUI_LAST_UPDATE = '2018-08-22T23:36:27.330Z';

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
/** *
 * @deprecated
  @type {?} */
var LY_GLOBAL_CONTRAST = new InjectionToken('ly.global.contrast');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyShadowService = /** @class */ (function () {
    function LyShadowService() {
        /**
         * Default elevation
         */
        this.elevation = 1;
    }
    /** demo: setShadow(...[elevation, color]...) */
    /**
     * demo: setShadow(...[elevation, color]...)
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} val
     * @param {?=} oldClassName
     * @return {?}
     */
    LyShadowService.prototype.setShadow = /**
     * demo: setShadow(...[elevation, color]...)
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} val
     * @param {?=} oldClassName
     * @return {?}
     */
    function (theme, elementRef, renderer, val, oldClassName) {
        /** @type {?} */
        var keys;
        /** @type {?} */
        var elevation;
        /** @type {?} */
        var color = 'colorShadow';
        if (val) {
            keys = val.join('');
            elevation = val[0];
            color = val[1] || color;
        }
        else {
            keys = "" + this.elevation + color;
            elevation = this.elevation;
        }
        /** @type {?} */
        var classname = theme.setUpStyle("shadow" + keys, { '': function () {
                return "" + shadowBuilderDeprecated(elevation, theme.colorOf(color));
            } });
        theme.updateClassName(elementRef.nativeElement, renderer, classname, oldClassName);
        return classname;
    };
    LyShadowService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ LyShadowService.ngInjectableDef = defineInjectable({ factory: function LyShadowService_Factory() { return new LyShadowService(); }, token: LyShadowService, providedIn: "root" });
    return LyShadowService;
}());

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
var LyCoreStyles = /** @class */ (function () {
    function LyCoreStyles(coreTheme) {
        this.coreTheme = coreTheme;
        this.classes = {
            /** Position absolute */
            Fill: this.coreTheme.setUpStyle('k-absolute', {
                '': function () { return ("position: absolute;" +
                    "top: 0;" +
                    "bottom: 0;" +
                    "left: 0;" +
                    "right: 0;"); }
            }),
            VisuallyHidden: this.coreTheme.setUpStyle('k-visually-hidden', {
                '': function () { return ("border: 0;" +
                    "clip: rect(0 0 0 0);" +
                    "height: 1px;" +
                    "margin: -1px;" +
                    "overflow: hidden;" +
                    "padding: 0;" +
                    "position: absolute;" +
                    "width: 1px;" +
                    "outline: 0;" +
                    "-webkit-appearance: none;" +
                    "-moz-appearance: none;"); }
            })
        };
    }
    LyCoreStyles.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LyCoreStyles.ctorParameters = function () { return [
        { type: CoreTheme }
    ]; };
    /** @nocollapse */ LyCoreStyles.ngInjectableDef = defineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(inject(CoreTheme)); }, token: LyCoreStyles, providedIn: "root" });
    return LyCoreStyles;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { getContrastYIQ, shadowBuilderDeprecated, shadowBuilder, Shadows, THEME_VARIABLES, IS_CORE_THEME, ThemeVariables, Platform, LyCommonModule, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, IsBoolean, defaultEntry, DomService, LY_OVERLAY_CONTAINER_PROVIDER_FACTORY, LY_OVERLAY_CONTAINER_PROVIDER, LxDomModule, LyFocusStateModule, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LY_GLOBAL_CONTRAST, LyCommon, LyShadowService, CoreTheme, THEME_CONFIG, LY_THEME_CONFIG, LY_THEME_NAME, LyThemeConfig, toHyphenCase, capitalizeFirstLetter, StylesInDocument, LyTheme2, LyThemeModule, LyCoreStyles, Undefined, UndefinedValue, transformMediaQuery, InvertMediaQuery, eachMedia, LyStyleUtils, LyOverlayContainer as ɵb, LyWithClass as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb3JlLXRoZW1lLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9jb21tb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9lbC9vZmZzZXQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9pcy1ib29sZWFuLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZGVmYXVsdC1lbnRyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb21tb24uZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3dpdGgtY2xhc3MuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbW1vbi5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXktY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vZG9tLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL2x4LWRvbS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2ZvY3VzLXN0YXRlL2ZvY3VzLXN0YXRlLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy92ZXJzaW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2dlc3R1cmUvZ2VzdHVyZS1jb25maWcudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29udHJhc3QudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvc2hhZG93LnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlcy9jb3JlLXN0eWxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy91bmRlZmluZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc3R5bGUtdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0WUlRKGhleGNvbG9yKSB7XG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigyLCAyKSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XG4gIGNvbnN0IHlpcSA9ICgociAqIDI5OSkgKyAoZyAqIDU4NykgKyAoYiAqIDExNCkpIC8gMTAwMDtcbiAgcmV0dXJuICh5aXEgPj0gMTI4KSA/ICdibGFjaycgOiAnd2hpdGUnO1xufVxuIiwiaW1wb3J0ICogYXMgX2Nocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuY29uc3QgY2hyb21hID0gX2Nocm9tYTtcblxuY29uc3Qgc2hhZG93S2V5VW1icmFPcGFjaXR5ID0gMC4yO1xuY29uc3Qgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbmNvbnN0IHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcbmV4cG9ydCBjb25zdCBTaGFkb3dzID0gW1xuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAxLCAzLCAwLCAwLCAxLCAxLCAwLCAwLCAyLCAxLCAtMV0sXG4gIFswLCAxLCA1LCAwLCAwLCAyLCAyLCAwLCAwLCAzLCAxLCAtMl0sXG4gIFswLCAxLCA4LCAwLCAwLCAzLCA0LCAwLCAwLCAzLCAzLCAtMl0sXG4gIFswLCAyLCA0LCAtMSwgMCwgNCwgNSwgMCwgMCwgMSwgMTAsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDUsIDgsIDAsIDAsIDEsIDE0LCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA2LCAxMCwgMCwgMCwgMSwgMTgsIDBdLFxuICBbMCwgNCwgNSwgLTIsIDAsIDcsIDEwLCAxLCAwLCAyLCAxNiwgMV0sXG4gIFswLCA1LCA1LCAtMywgMCwgOCwgMTAsIDEsIDAsIDMsIDE0LCAyXSxcbiAgWzAsIDUsIDYsIC0zLCAwLCA5LCAxMiwgMSwgMCwgMywgMTYsIDJdLFxuICBbMCwgNiwgNiwgLTMsIDAsIDEwLCAxNCwgMSwgMCwgNCwgMTgsIDNdLFxuICBbMCwgNiwgNywgLTQsIDAsIDExLCAxNSwgMSwgMCwgNCwgMjAsIDNdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEyLCAxNywgMiwgMCwgNSwgMjIsIDRdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEzLCAxOSwgMiwgMCwgNSwgMjQsIDRdLFxuICBbMCwgNywgOSwgLTQsIDAsIDE0LCAyMSwgMiwgMCwgNSwgMjYsIDRdLFxuICBbMCwgOCwgOSwgLTUsIDAsIDE1LCAyMiwgMiwgMCwgNiwgMjgsIDVdLFxuICBbMCwgOCwgMTAsIC01LCAwLCAxNiwgMjQsIDIsIDAsIDYsIDMwLCA1XSxcbiAgWzAsIDgsIDExLCAtNSwgMCwgMTcsIDI2LCAyLCAwLCA2LCAzMiwgNV0sXG4gIFswLCA5LCAxMSwgLTUsIDAsIDE4LCAyOCwgMiwgMCwgNywgMzQsIDZdLFxuICBbMCwgOSwgMTIsIC02LCAwLCAxOSwgMjksIDIsIDAsIDcsIDM2LCA2XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIwLCAzMSwgMywgMCwgOCwgMzgsIDddLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjEsIDMzLCAzLCAwLCA4LCA0MCwgN10sXG4gIFswLCAxMCwgMTQsIC02LCAwLCAyMiwgMzUsIDMsIDAsIDgsIDQyLCA3XSxcbiAgWzAsIDExLCAxNCwgLTcsIDAsIDIzLCAzNiwgMywgMCwgOSwgNDQsIDhdLFxuICBbMCwgMTEsIDE1LCAtNywgMCwgMjQsIDM4LCAzLCAwLCA5LCA0NiwgOF1cbl07XG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcgPSAyLCBjb2xvciA9ICcjMDAwJykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvcik7XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGBib3gtc2hhZG93OiR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlcihlbGV2YXRpb246IG51bWJlciB8IHN0cmluZywgY29sb3I/OiBzdHJpbmcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IgfHwgJyMwMDAnKS5kYXJrZW4oKS5zYXR1cmF0ZSgyKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYCR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xyXG5leHBvcnQgY29uc3QgSVNfQ09SRV9USEVNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjx0cnVlPignbHkuaXMucm9vdCcpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRoZW1lVmFyaWFibGVzIHtcclxuICAvKiogVGhlbWUgbmFtZSAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmltYXJ5PzogUGFsZXR0ZVZhcmlhYmxlcztcclxuICBhY2NlbnQ/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4gIC8qKiB3YXJuIG9yIGVycm9yIGNvbG9yICovXHJcbiAgd2Fybj86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbiAgc2NoZW1lPzogc3RyaW5nO1xyXG4gIGNvbG9yU2NoZW1lcz86IHtcclxuICAgIFtrZXk6IHN0cmluZ106IENvbG9yU2NoZW1lXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xyXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XHJcbiAgY29udHJhc3Q/OiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcclxuICBiYWNrZ3JvdW5kPzoge1xyXG4gICAgZGVmYXVsdD86IHN0cmluZyxcclxuICAgIHBhcGVyPzogc3RyaW5nLFxyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbiAgdGV4dD86IHtcclxuICAgIGRlZmF1bHQ6IHN0cmluZyxcclxuICAgIHByaW1hcnk/OiBzdHJpbmcsXHJcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IHN0cmluZyxcclxuICAgIGhpbnQ/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICBkaXZpZGVyPzogc3RyaW5nO1xyXG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xyXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xyXG4gIGJhcj86IHN0cmluZztcclxuICBpbnB1dD86IHtcclxuICAgIGxhYmVsPzogc3RyaW5nLFxyXG4gICAgdW5kZXJsaW5lPzogc3RyaW5nXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBzdXBwb3J0cyB0aGUgVjggQnJlYWsgSXRlcmF0b3IuIFRoZSBWOCBjaGVja1xyXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cclxuY29uc3QgaGFzVjhCcmVha0l0ZXJhdG9yID0gKHR5cGVvZihJbnRsKSAhPT0gJ3VuZGVmaW5lZCcgJiYgKEludGwgYXMgYW55KS52OEJyZWFrSXRlcmF0b3IpO1xyXG4vKipcclxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcclxuICogY2hlY2tpbmcgYnJvd3Nlci1zcGVjaWZpYyBnbG9iYWwgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGlzQnJvd3NlcjogYm9vbGVhbiA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudDtcclxuICAvKiogTGF5b3V0IEVuZ2luZXMgKi9cclxuICBFREdFID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZWRnZSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gIFRSSURFTlQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gRWRnZUhUTUwgYW5kIFRyaWRlbnQgbW9jayBCbGluayBzcGVjaWZpYyB0aGluZ3MgYW5kIG5lZWQgdG8gYmUgZXhjbHVkZWQgZnJvbSB0aGlzIGNoZWNrLlxyXG4gIEJMSU5LID0gUGxhdGZvcm0uaXNCcm93c2VyICYmXHJcbiAgICAgICghISgod2luZG93IGFzIGFueSkuY2hyb21lIHx8IGhhc1Y4QnJlYWtJdGVyYXRvcikgJiYgISFDU1MgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UKTtcclxuXHJcbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXHJcbiAgLy8gZW5zdXJlIHRoYXQgV2Via2l0IHJ1bnMgc3RhbmRhbG9uZSBhbmQgaXMgbm90IHVzZWQgYXMgYW5vdGhlciBlbmdpbmUncyBiYXNlLlxyXG4gIFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxyXG4gICAgICAvQXBwbGVXZWJLaXQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLkJMSU5LICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xyXG4gIElPUyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhKHdpbmRvdyBhcyBhbnkpLk1TU3RyZWFtO1xyXG5cclxuICAvLyBJdCdzIGRpZmZpY3VsdCB0byBkZXRlY3QgdGhlIHBsYWluIEdlY2tvIGVuZ2luZSwgYmVjYXVzZSBtb3N0IG9mIHRoZSBicm93c2VycyBpZGVudGlmeVxyXG4gIC8vIHRoZW0gc2VsZiBhcyBHZWNrby1saWtlIGJyb3dzZXJzIGFuZCBtb2RpZnkgdGhlIHVzZXJBZ2VudCdzIGFjY29yZGluZyB0byB0aGF0LlxyXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxyXG4gIC8vIGluc3RlYWQgb2YgaGF2aW5nIGFuIHVuc3RhYmxlIGNoZWNrIGZvciBHZWNrby5cclxuICBGSVJFRk9YID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gVHJpZGVudCBvbiBtb2JpbGUgYWRkcyB0aGUgYW5kcm9pZCBwbGF0Zm9ybSB0byB0aGUgdXNlckFnZW50IHRvIHRyaWNrIGRldGVjdGlvbnMuXHJcbiAgQU5EUk9JRCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvYW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLy8gU2FmYXJpIGJyb3dzZXJzIHdpbGwgaW5jbHVkZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlaXIgdXNlckFnZW50LiBTb21lIGJyb3dzZXJzIG1heSBmYWtlXHJcbiAgLy8gdGhpcyBhbmQganVzdCBwbGFjZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlIHVzZXJBZ2VudC4gVG8gYmUgbW9yZSBzYWZlIGFib3V0IFNhZmFyaSBldmVyeVxyXG4gIC8vIFNhZmFyaSBicm93c2VyIHNob3VsZCBhbHNvIHVzZSBXZWJraXQgYXMgaXRzIGxheW91dCBlbmdpbmUuXHJcbiAgU0FGQVJJID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9zYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIHRoaXMuV0VCS0lUO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHkudGhlbWUuY29uZmlnLnJvb3QnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48THlUaGVtZUNvbmZpZz4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignbHkudGhlbWUubmFtZScpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBhY2NlbnQ6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIHdhcm46IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIEx5VGhlbWVDb25maWcge1xuICB0aGVtZXM6IGFueVtdID0gW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFZhbCB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZUNvbG9yIHtcbiAgY29udHJhc3Q6IHN0cmluZztcbn1cbiIsImV4cG9ydCBlbnVtIEludmVydE1lZGlhUXVlcnkge1xuICBObyxcbiAgWWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NZWRpYVF1ZXJ5KG1lZGlhOiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk6IEludmVydE1lZGlhUXVlcnkgPSBJbnZlcnRNZWRpYVF1ZXJ5Lk5vKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICBpZiAobWVkaWEgJiYgaW52ZXJ0TWVkaWFRdWVyeSA9PT0gSW52ZXJ0TWVkaWFRdWVyeS5ZZXMpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBtZWRpYS5zcGxpdCgnLCcpLm1hcChfID0+IGBub3QgJHtffWApO1xuICAgIHJldHVybiBuZXdWYWw7XG4gIH1cbiAgcmV0dXJuIG1lZGlhO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBpc0Rldk1vZGUsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUVfQ09ORklHLCBMeVRoZW1lQ29uZmlnIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3R5bGVDb250ZW50LCBEYXRhU3R5bGUsIFN0eWxlLCBNdWx0aXBsZVN0eWxlcyB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5LCB0cmFuc2Zvcm1NZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcblxubGV0IGNsYXNzSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBmaXJzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZUNvbmZpZz4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgRGF0YVN0eWxlPj4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVDb3JlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9DT05GSUcpIHRoZW1lQ29uZmlnOiBMeVRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUVfQ09ORklHIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLmZpcnN0RWxlbWVudCA9IF9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQ7XG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIHtcbiAgICAgIGlkOiAnbHknLFxuICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTmF0aXZlLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0ID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnbHktcy1jJyk7XG4gICAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZXMuaXRlbShpbmRleCk7XG4gICAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgIC8vICAgY29uc3QgbWVkaWFTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LW1lZGlhLXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIC8vICAgY29uc3QgcHJpbWFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICAvLyAgIGNvbnN0IHNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktc2Vjb25kYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIC8vICAgaWYgKHByaW1hcnlTdHlsZUNvbnRhaW5lcikge1xuICAgIC8vICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChtZWRpYVN0eWxlQ29udGFpbmVyKTtcbiAgICAvLyAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQocHJpbWFyeVN0eWxlQ29udGFpbmVyKTtcbiAgICAvLyAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoc2Vjb25kYXJ5U3R5bGVDb250YWluZXIpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LW1lZGlhLXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1wcmltYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LXNlY29uZGFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShfZG9jdW1lbnQuYm9keSwgdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyLCBfZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShfZG9jdW1lbnQuYm9keSwgdGhpcy5wcmltYXJ5U3R5bGVDb250YWluZXIsIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lcik7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyKTtcbiAgICB0aGlzLnNldENvcmVTdHlsZSgpO1xuICAgIGlmICh0aGVtZUNvbmZpZykge1xuICAgICAgdGhlbWVDb25maWcudGhlbWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuYWRkKG5ldyBpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbmV3IHRoZW1lXG4gICAqIEBwYXJhbSB0aGVtZTogVGhlbWVDb25maWdcbiAgICovXG4gIGFkZCh0aGVtZTogVGhlbWVDb25maWcpIHtcbiAgICB0aGlzLl90aGVtZU1hcC5zZXQodGhlbWUubmFtZSwgdGhlbWUpO1xuICAgIHRoaXMuX3N0eWxlTWFwLnNldCh0aGVtZS5uYW1lLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgZ2V0KG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl90aGVtZU1hcC5nZXQobmFtZSk7XG4gIH1cbiAgZ2V0U3R5bGVNYXAobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIHNldFVwU3R5bGUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxudWxsPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fw4TCuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cbiAgc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPG51bGw+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIHJldHVybiB0aGlzLl/DhMK4cmVhdGVTdHlsZSh1bmRlZmluZWQsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZUNvcmVNYXAsICdyb290JywgdGhpcy5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG5cbiAgX8OEwrhyZWF0ZVN0eWxlPFQ+KHRoZW1lQ29uZmlnOiBhbnksIGtleSwgc3R5bGU6IFN0eWxlPFQ+LCBtYXBTdHlsZXM6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4sIF9mb3I6IHN0cmluZywgX2luOiBhbnksIF9tZWRpYT86IHN0cmluZywgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnkpIHtcbiAgICBpZiAobWFwU3R5bGVzLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gbWFwU3R5bGVzLmdldChrZXkpLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpZCA9IGBrJHsoY2xhc3NJZCsrKS50b1N0cmluZygzNil9YDtcbiAgICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGNvbnN0IG1lZGlhID0gdHJhbnNmb3JtTWVkaWFRdWVyeShfbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICAgICAgY29uc3Qgc3R5bGVDb250ZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDxUPih0aGVtZUNvbmZpZywgc3R5bGUsIGlkLCBtZWRpYSkpO1xuICAgICAgY29uc3Qgc2F2ZUluID0gbWVkaWEgPyB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIgOiBfaW47XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCwgc3R5bGVDb250ZW50KTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc2F2ZUluLCBzdHlsZUVsZW1lbnQpO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN0eWxlRWxlbWVudCwgJ3N0eWxlX2RhdGEnLCBgJHtfZm9yfcOCwrfDgsK3w4LCtyR7aWR9w4LCt8OCwrfDgsK3JHtrZXl9YCk7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhU3R5bGUgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgc3R5bGVFbGVtZW50LFxuICAgICAgICBtZWRpYVxuICAgICAgfTtcbiAgICAgIG1hcFN0eWxlcy5zZXQoa2V5LCBkYXRhU3R5bGUpO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgfVxuXG4gIC8qKiAjc3R5bGUgKi9cbiAgX2NyZWF0ZVN0eWxlQ29udGVudDxUPih0aGVtZUNvbmZpZzogVCwgc3R5bGVzOiBTdHlsZTxUPiwgaWQ6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHR5cGYgPSB0eXBlb2Ygc3R5bGVzO1xuICAgIGlmICh0eXBmID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRvTWVkaWEoYC4ke2lkfXske3N0eWxlc319YCwgbWVkaWEpO1xuICAgIH0gZWxzZSBpZiAodHlwZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRvTWVkaWEoYC4ke2lkfXskeyhzdHlsZXMgYXMgU3R5bGVDb250ZW50PFQ+KSh0aGVtZUNvbmZpZyl9fWAsIG1lZGlhKTtcbiAgICB9XG4gICAgbGV0IGNvbnRlbnQgPSAnJztcbiAgICBmb3IgKGNvbnN0IGtleSQgaW4gc3R5bGVzIGFzIE11bHRpcGxlU3R5bGVzPFQ+KSB7XG4gICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSQpKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHN0eWxlc1trZXkkXTtcbiAgICAgICAgY29uc3QgdGV4dCA9IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgPyB2YWwodGhlbWVDb25maWcpIDogdmFsO1xuICAgICAgICBjb250ZW50ICs9IGAuJHtpZH0ke2tleSR9eyR7dGV4dH19YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvTWVkaWEoY29udGVudCwgbWVkaWEpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb3JlU3R5bGUoKSB7XG4gICAgY29uc3QgY2xhc3NuYW1lID0gdGhpcy5zZXRVcFN0eWxlKCdyb290Ym9keScsIHtcbiAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgIGBtYXJnaW46MDtgXG4gICAgICApLFxuICAgICAgJywgKiwgKjphZnRlciwgKjpiZWZvcmUnOiAoKSA9PiAoXG4gICAgICAgIGAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7YCArXG4gICAgICAgIGAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7YCArXG4gICAgICAgIGBib3gtc2l6aW5nOiBib3JkZXItYm94O2BcbiAgICAgIClcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2RvY3VtZW50LmJvZHksIGNsYXNzbmFtZSk7XG4gIH1cblxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgaWYgKG9sZENsYXNzbmFtZSkge1xuICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3NuYW1lKTtcbiAgICB9XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmV3Q2xhc3NuYW1lKTtcbiAgfVxuXG59XG5cbi8qKlxuICogQ29udmVydGVyIHRvIG1lZGlhIHF1ZXJ5IGlmIGBtZWRpYWAgaXMgcHJlc2VudFxuICogQHBhcmFtIHRleHQgc3R5bGUgY29udGVudFxuICogQHBhcmFtIG1lZGlhIG1lZGlhIHF1ZXJ5XG4gKi9cbmZ1bmN0aW9uIHRvTWVkaWEodGV4dDogc3RyaW5nLCBtZWRpYT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gIGlmICh0eXBlb2YgbWVkaWEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHt0ZXh0fX1gO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobWVkaWEpKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIG1lZGlhLmZvckVhY2goXyA9PiByZXN1bHQgKz0gYEBtZWRpYSAke199eyR7dGV4dH19YCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gdGV4dDtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgSW5qZWN0LCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlLCBTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW52ZXJ0TWVkaWFRdWVyeSB9IGZyb20gJy4uL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgUkVGX1JFR19FWFAgPSAvXFx7KFtcXHctXSspXFx9L2c7XG5cbmludGVyZmFjZSBTdHlsZXNFbGVtZW50TWFwIHtcbiAgZWw6IGFueTtcbn1cblxuZW51bSBUeXBlU3R5bGUge1xuICBNdWx0aXBsZSxcbiAgT25seU9uZVxufVxuY29uc3QgU1RZTEVfTUFQNDogU3R5bGVNYXA0ID0ge307XG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlTWFwNCB7XG4gIFtpZDogc3RyaW5nXToge1xuICAgIHN0eWxlczogU3R5bGVzRm4yPGFueT4gfCBTdHlsZXMyXG4gICAgdHlwZTogVHlwZVN0eWxlXG4gICAgcHJpb3JpdHk6IG51bWJlclxuICAgIGNzczoge1xuICAgICAgW3RoZW1lTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gICAgfSB8IHN0cmluZ1xuICAgIHJlcXVpcmVVcGRhdGU/OiBib29sZWFuXG4gIH07XG59XG5cbi8vIGludGVyZmFjZSBTdHlsZU1hcDAzIHtcbi8vICAgW2lkOiBzdHJpbmddOiB7IC8vIGV4YW1wbGU6IGx5VGFic1xuLy8gICAgIHN0eWxlczogU3R5bGVzRm4yPGFueT4gfCBTdHlsZXMyLFxuLy8gICAgIG1lZGlhPzogc3RyaW5nLFxuLy8gICAgIHR5cGVTdHlsZT86IFR5cGVTdHlsZSxcbi8vICAgICB0aGVtZXM6IHsgLy8gZXhhbXBsZTogbWluaW1hLWRhcmtcbi8vICAgICAgIC8qKiBDc3MgKi9cbi8vICAgICAgIGRlZmF1bHQ/OiBzdHJpbmcsXG4vLyAgICAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbi8vICAgICB9XG4vLyAgIH07XG4vLyB9XG5cbi8vIGNvbnN0IFNUWUxFX01BUF8wMzogU3R5bGVNYXAwMyA9IHt9IGFzIGFueTtcblxuLy8gY29uc3QgU1RZTEVfTUFQOiB7XG4vLyAgIFtrZXk6IHN0cmluZ106IE1hcDxzdHJpbmcsIFN0eWxlc0VsZW1lbnRNYXA+XG4vLyB9ID0ge307XG5jb25zdCBDTEFTU0VTX01BUDoge1xuICBbaWRPclRoZW1lTmFtZTogc3RyaW5nXToge1xuICAgIFtjbGFzc05hbWU6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nXG59ID0ge307XG5jb25zdCBTVFlMRV9LRVlTX01BUCA9IHt9O1xubGV0IG5leHRJZCA9IDA7XG4vLyBmdW5jdGlvbiBmbigpIHtcbi8vICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuLy8gfVxuLy8gY29uc29sZS5sb2coe2ZufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlc0luRG9jdW1lbnQge1xuICBzdHlsZXM6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBIVE1MU3R5bGVFbGVtZW50XG4gICAgfVxuICB9ID0ge307XG4gIHN0eWxlQ29udGFpbmVycyA9IG5ldyBNYXA8bnVtYmVyLCBIVE1MRWxlbWVudD4oKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZUNvbmZpZztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBwcmVmaXggPSAnayc7XG4gIGluaXRpYWxUaGVtZTogc3RyaW5nO1xuICBlbGVtZW50czoge1xuICAgIFtrZXk6IHN0cmluZ106IEhUTUxTdHlsZUVsZW1lbnRcbiAgfTtcbiAgLy8gcHJpdmF0ZSBfc3R5bGVNYXAyOiBNYXA8c3RyaW5nLCBTdHlsZXNFbGVtZW50TWFwPjtcblxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gQ0xBU1NFU19NQVA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlc0luRG9jdW1lbnQ6IFN0eWxlc0luRG9jdW1lbnQsXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgLy8gdGhpcy5fc3R5bGVNYXAyID0gdGhlbWVOYW1lIGluIFNUWUxFX01BUFxuICAgICAgLy8gPyBTVFlMRV9NQVBbdGhlbWVOYW1lXVxuICAgICAgLy8gOiBTVFlMRV9NQVBbdGhlbWVOYW1lXSA9IG5ldyBNYXAoKTtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IHRoZW1lTmFtZSBpbiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzXG4gICAgICA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXVxuICAgICAgOiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV0gPSB7fTtcbiAgICAgIHRoaXMuX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lKTtcbiAgICAgIGlmICghdGhpcy5pbml0aWFsVGhlbWUpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVGhlbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZXRVcFN0eWxlPFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fw4TCuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnk8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/DhMK4cmVhdGVTdHlsZTxUPih0aGlzLmNvbmZpZywga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlTWFwLCBuYW1lLCB0aGlzLmNvcmUuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKi9cbiAgYWRkU3R5bGUoaWQ6IHN0cmluZywgc3R5bGU6IFN0eWxlQ29udGFpbmVyIHwgKCh0aGVtZSkgPT4gU3R5bGVDb250YWluZXIpIHwgKCh0aGVtZSkgPT4gc3RyaW5nKSB8IHN0cmluZywgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5hZGRDc3MoaWQsIHN0eWxlIGFzIGFueSwgcHJpb3JpdHkpO1xuICAgIGlmIChlbCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgLy8gdGhpcy5fc3R5bGVNYXAyLmZvckVhY2goZGF0YVN0eWxlID0+IHtcbiAgICAvLyAgIGRhdGFTdHlsZS5lbC5pbm5lclRleHQgPSB0aGlzLl9jcmVhdGVTdHlsZUMgb250ZW50MihkYXRhU3R5bGUuc3R5bGVzLCBkYXRhU3R5bGUuaWQpO1xuICAgIC8vIH0pO1xuICAgIC8vIGZvciAoY29uc3Qga2V5IGluIFNUWUxFX01BUF8wMykge1xuICAgIC8vICAgaWYgKFNUWUxFX01BUF8wMy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgLy8gICAgIGNvbnN0IHsgc3R5bGVzLCB0eXBlU3R5bGUsIG1lZGlhIH0gPSBTVFlMRV9NQVBfMDNba2V5XTtcbiAgICAvLyAgICAgLy8gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIGtleSwgdHlwZVN0eWxlLCB0aGlzLmNvcmUucmVuZGVyZXIsIHRydWUsIG1lZGlhKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgdGhpcy5fc3R5bGVNYXAuZm9yRWFjaCgoZGF0YVN0eWxlKSA9PiB7XG4gICAgICBkYXRhU3R5bGUuc3R5bGVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuY29yZS5fY3JlYXRlU3R5bGVDb250ZW50KHRoaXMuY29uZmlnLCBkYXRhU3R5bGUuc3R5bGUsIGRhdGFTdHlsZS5pZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycywgc3R5bGVzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgY29uc3QgY3VycmVudFN0eWxlcyA9IHRoaXMuZWxlbWVudHM7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY3VycmVudFN0eWxlcykge1xuICAgICAgaWYgKGN1cnJlbnRTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBzdHlsZURhdGEgPSBTVFlMRV9NQVA0W2tleV07XG4gICAgICAgIGlmIChzdHlsZURhdGEucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVEYXRhLnN0eWxlcywga2V5LCBzdHlsZURhdGEucHJpb3JpdHksIHN0eWxlRGF0YS50eXBlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBtZWRpYSkgYXMgc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBpZCB1bmlxdWUgaWQgZm9yIHN0eWxlIGdyb3VwXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgaWQ/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyKTogSUNsYXNzZXM8VD4ge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgfHwgJ2dsb2JhbCc7XG4gICAgLy8gY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBuZXdJZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBfY3JlYXRlU3R5bGVDb250ZW50MjxUPihcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgbWVkaWE/OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3Qgc3R5bGVNYXAgPSAoaWQgaW4gU1RZTEVfTUFQNFxuICAgID8gU1RZTEVfTUFQNFtpZF1cbiAgICA6IFNUWUxFX01BUDRbaWRdID0ge1xuICAgICAgcHJpb3JpdHksXG4gICAgICBzdHlsZXMsXG4gICAgICB0eXBlLFxuICAgICAgY3NzOiB7fVxuICAgIH0pO1xuICAgIC8vIGNvbnN0IHN0eWxlczIgPSB0aGlzLmNvbmZpZy5uYW1lIGluIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNcbiAgICAvLyA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhpcy5jb25maWcubmFtZV1cbiAgICAvLyA6IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhpcy5jb25maWcubmFtZV0gPSB7fTtcbiAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAvLyAgICdjY2MnLCB0eXBlb2Ygc3R5bGVNYXAuY3NzICE9PSAnc3RyaW5nJyAmJiAhKGlkIGluIHN0eWxlTWFwLmNzcyksXG4gICAgLy8gICB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnb2JqZWN0JyB8fCBDTEFTU0VTX01BUFt0aGlzLmNvbmZpZy5uYW1lXVtpZF1cbiAgICAvLyApO1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHRoaXMuaW5pdGlhbFRoZW1lO1xuICAgIGNvbnN0IGlzQ3JlYXRlZCA9IChpZCBpbiBDTEFTU0VTX01BUCkgfHwgQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF07XG4gICAgaWYgKCFpc0NyZWF0ZWQgfHwgZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgIC8qKiBjcmVhdGUgbmV3IHN0eWxlIGZvciBuZXcgdGhlbWUgKi9cbiAgICAgIGxldCBjc3M7XG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBDTEFTU0VTX01BUFtpZF0gPSB7fTtcbiAgICAgICAgLy8gY29uc3QgdGhlbWVNYXAgPSB0aGlzLmNvbmZpZy5uYW1lIGluIHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgICAgLy8gPyBzdHlsZU1hcC5jbGFzc2VzW3RoaXMuY29uZmlnLm5hbWVdXG4gICAgICAgIC8vIDogc3R5bGVNYXAuY2xhc3Nlc1t0aGlzLmNvbmZpZy5uYW1lXSA9IHt9O1xuICAgICAgICAvLyBjb25zdCBjbGFzc05hbWUgPSBpZCBpbiAodGhlbWVNYXAgYXMgT2JqZWN0KVxuICAgICAgICAvLyA/IHRoZW1lTWFwW2lkXVxuICAgICAgICAvLyA6IHRoZW1lTWFwW2lkXSA9IHRoaXMuX25leHRJZCgpO1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzKHRoaXMuY29uZmlnKSwgdGhlbWVOYW1lLCBpc0NyZWF0ZWQsIGlkLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgICBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogY3JlYXRlIGEgbmV3IGlkIGZvciBzdHlsZSB0aGF0IGRvZXMgbm90IDwtPHJlcXVpcmU+LT4gY2hhbmdlcyAqL1xuICAgICAgICBDTEFTU0VTX01BUFtpZF0gPSB0cnVlIGFzIGFueTtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlcywgdGhlbWVOYW1lLCBpc0NyZWF0ZWQsIGlkLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIHN0eWxlRWxlbWVudCk7XG4gICAgICAvLyBpZiAoIXRoaXMuX3N0eWxlTWFwMi5oYXMoaWQpKSB7XG4gICAgICAvLyAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgLy8gICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgICAgLy8gICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZVRleHQpO1xuICAgICAgLy8gICB0aGlzLl9zdHlsZU1hcDIuc2V0KGlkLCB7XG4gICAgICAvLyAgICAgZWw6IHN0eWxlRWxlbWVudFxuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgID8gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgIDogdGhpcy5lbGVtZW50c1tpZF0gPSB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoXG4gICAgICAgIGNzc1xuICAgICAgKTtcbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBlbC5pbm5lclRleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkpLCBlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgKCEoaWQgaW4gdGhpcy5lbGVtZW50cykpIHtcbiAgICAgIC8vIGNvbnN0IGh0bWxTdHlsZSA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShcbiAgICAgIC8vICAgdHlwZW9mIHN0eWxlTWFwLmNzcyA9PT0gJ3N0cmluZydcbiAgICAgIC8vICAgPyBzdHlsZU1hcC5jc3NcbiAgICAgIC8vICAgOiBzdHlsZU1hcC5jc3NbdGhpcy5jb25maWcubmFtZV1cbiAgICAgIC8vICk7XG4gICAgICAvLyB0aGlzLmVsZW1lbnRzW2lkXSA9IGh0bWxTdHlsZTtcbiAgICAgIC8vIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNvcmUucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBodG1sU3R5bGUpO1xuICAgIC8vIH1cblxuICAgIGNvbnN0IGNsYXNzZXMgPSB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnc3RyaW5nJ1xuICAgID8gQ0xBU1NFU19NQVBbaWRdXG4gICAgOiB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnb2JqZWN0J1xuICAgID8gQ0xBU1NFU19NQVBbaWRdXG4gICAgOiBDTEFTU0VTX01BUFt0aGVtZU5hbWVdW2lkXTtcbiAgICByZXR1cm4gY2xhc3NlcztcblxuICAgIC8vIGNvbnN0IHN0eWxlID0gdGhpcy5fc3R5bGVNYXAyLmdldChpZCk7XG4gICAgLy8gaWYgKCF0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzLmhhcyhpZCkpIHtcbiAgICAvLyAgIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXMuYWRkKGlkKTtcbiAgICAvLyAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNvcmUucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBzdHlsZS5lbCk7XG4gICAgLy8gfVxuICAgIC8vIGlmIChmb3JDaGFuZ2VUaGVtZSAmJiBzdHlsZU1hcC50aGVtZXNbdGhpcy5jb25maWcubmFtZV0pIHtcbiAgICAvLyAgIHN0eWxlLmVsLmlubmVyVGV4dCA9IHN0eWxlTWFwLnRoZW1lc1t0aGlzLmNvbmZpZy5uYW1lXTtcbiAgICAvLyB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoISh0aGVtZU5hbWUgaW4gQ0xBU1NFU19NQVApKSB7XG4gICAgICBDTEFTU0VTX01BUFt0aGVtZU5hbWVdID0ge307XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lcjtcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzOiBTdHlsZXMyLCB0aGVtZU5hbWU6IHN0cmluZywgX2NsYXNzZXNfOiBzdHJpbmcgfCB7fSwgaWQ6IHN0cmluZywgdHlwZVN0eWxlOiBUeXBlU3R5bGUsIG1lZGlhPzogc3RyaW5nKSB7XG4gIC8vIGxldCBuZXdLZXkgPSAnJztcbiAgLy8gY29uc3Qgc3RyaW5nXG4gIC8vIGNvbnN0IHRoZW1lTWFwID0gY2xhc3Nlc1t0aGVtZU5hbWVdID8gY2xhc3Nlc1t0aGVtZU5hbWVdIDogY2xhc3Nlc1t0aGVtZU5hbWVdID0ge307XG4gIGlmICh0eXBlU3R5bGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lKSB7XG4gICAgLyoqIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXcgKi9cbiAgICBjb25zdCBjbGFzc05hbWUgPSBDTEFTU0VTX01BUFtpZF1cbiAgICA/IENMQVNTRVNfTUFQW2lkXSA9IF9jbGFzc2VzXyB8fCBjcmVhdGVOZXh0SWQoKVxuICAgIDogQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF0gPSBfY2xhc3Nlc18gfHwgY3JlYXRlTmV4dElkKCk7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBjc3MgPSBgLiR7Y2xhc3NOYW1lfXske3N0eWxlc319YDtcbiAgICAgIC8vIFNUWUxFX01BUDRbaWRdLnJ1bGVzID0gc3R5bGVzO1xuICAgICAgcmV0dXJuIG1lZGlhID8gdG9NZWRpYShjc3MsIG1lZGlhKSA6IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZXMgPSBzdHlsZVRvU3RyaW5nKGlkLCBzdHlsZXMsIGNsYXNzTmFtZSBhcyBhbnkpO1xuICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH1cbiAgfVxuICBsZXQgY29udGVudCA9ICcnO1xuICAvLyBjb25zdCBjbGFzc2VzTWFwID0gaWQgaW4gdGhlbWVNYXBcbiAgLy8gPyB0aGVtZU1hcFtpZF1cbiAgLy8gOiB0aGVtZU1hcFtpZF0gPSB7fTtcbiAgY29uc3QgY2xhc3NlcyA9IENMQVNTRVNfTUFQW2lkXVxuICA/IENMQVNTRVNfTUFQW2lkXSA9IF9jbGFzc2VzXyB8fCB7fVxuICA6IENMQVNTRVNfTUFQW3RoZW1lTmFtZV1baWRdID0gX2NsYXNzZXNfIHx8IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc2VzW2tleV0gfHwgKGNsYXNzZXNba2V5XSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgJHtpZH0tLS0ke2tleX0tJHtjcmVhdGVOZXh0SWQoKX1gKSA6IGNyZWF0ZU5leHRJZCgpKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZVRvU3RyaW5nKGtleSwgdmFsdWUgYXMgU3R5bGVzMiwgY2xhc3NOYW1lKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBpcyBzdHJpbmcnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXBsYWNlUmVmcyhjb250ZW50LCBjbGFzc2VzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVJlZnMoc3RyOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVGX1JFR19FWFAsIChtYXRjaCwgdG9rZW4pID0+IHtcbiAgICByZXR1cm4gYC4ke2RhdGFbdG9rZW5dfWA7XG4gIH1cbiAgKTtcbn1cblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhrZXk6IHN0cmluZywgb2I6IE9iamVjdCwgY3VycmVudEtleTogc3RyaW5nLCBwYXJlbnRLZXk/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IHN1YkNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGxldCBuZXdLZXk7XG4gIGlmIChwYXJlbnRLZXkgJiYgY3VycmVudEtleS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgbmV3S2V5ID0gY3VycmVudEtleS5yZXBsYWNlKCcmJywgcGFyZW50S2V5KTtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdAZ2xvYmFsJykge1xuICAgIG5ld0tleSA9IGtleTtcbiAgfSBlbHNlIHtcbiAgICBuZXdLZXkgPSBjdXJyZW50S2V5O1xuICB9XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzdWJDb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoa2V5LCBlbGVtZW50IGFzIFN0eWxlczIsIHN0eWxlS2V5LCBuZXdLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3U3R5bGVLZXkgPSB0b0h5cGhlbkNhc2VDYWNoZShzdHlsZUtleSk7XG4gICAgICAgIGtleUFuZFZhbHVlICs9IGAke25ld1N0eWxlS2V5fToke2VsZW1lbnR9O2A7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGlmICghcGFyZW50S2V5KSB7XG4gIC8vICAgY29uc29sZS5sb2coe2N1cnJlbnRLZXksIGtleSwgc3ViQ29udGVudH0pO1xuICAvLyB9XG4gIGlmIChrZXlBbmRWYWx1ZSkge1xuICAgIGlmIChuZXdLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgICBrZXlBbmRWYWx1ZSA9IGAuJHtwYXJlbnRLZXl9eyR7a2V5QW5kVmFsdWV9fWA7XG4gICAgfSBlbHNlIGlmIChwYXJlbnRLZXkgJiYgcGFyZW50S2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ICs9IGAuJHtuZXdLZXl9YDtcbiAgICB9XG4gICAgY29udGVudCArPSBgeyR7a2V5QW5kVmFsdWV9fWA7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQgKyBzdWJDb250ZW50O1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG9ialtfcGF0aFtpXV0gfHwgcGF0aDtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuZnVuY3Rpb24gdG9DbGFzc05hbWVWYWxpZChzdHI6IHN0cmluZykge1xuICBjb25zdCBzID0gc3RyLnJlcGxhY2UoL15bMC05XXxbXlxcd1xcLV0vZywgXyA9PiB7XG4gICAgcmV0dXJuIGBfJHtfLmNoYXJDb2RlQXQoMCl9YDtcbiAgfSk7XG4gIHJldHVybiB0b0h5cGhlbkNhc2Uocyk7XG59XG5cbmZ1bmN0aW9uIHRvSHlwaGVuQ2FzZUNhY2hlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIgaW4gU1RZTEVfS0VZU19NQVBcbiAgPyBTVFlMRV9LRVlTX01BUFtzdHJdXG4gIDogU1RZTEVfS0VZU19NQVBbc3RyXSA9IHRvSHlwaGVuQ2FzZShzdHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gdG9NZWRpYShjc3M6IHN0cmluZywgbWVkaWE6IHN0cmluZykge1xuICByZXR1cm4gYEBtZWRpYSAke21lZGlhfXske2Nzc319YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dElkKCkge1xuICByZXR1cm4gYGUkeyhuZXh0SWQrKykudG9TdHJpbmcoMzYpfWA7XG59XG5cbnR5cGUgSUNsYXNzZXM8VD4gPSBSZWNvcmQ8KFQgZXh0ZW5kcyAoKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID8gKGtleW9mIFJldHVyblR5cGU8VD4pIDoga2V5b2YgVCksIHN0cmluZz47XG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBOZ01vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl92aWV3UmVmLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZU1vZHVsZSB7XHJcblxyXG59XHJcbiIsImZ1bmN0aW9uIGlzV2luZG93KG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW06IGFueSkge1xyXG4gICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0VmlldztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGRvY0VsZW06IGFueSwgd2luOiBhbnksXHJcbiAgICAgICAgYm94ID0ge3RvcDogMCwgbGVmdDogMH07XHJcbiAgICBjb25zdCBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcclxuXHJcbiAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH1cclxuICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcclxuICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxyXG4gICAgfTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIElzQm9vbGVhbigpOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBkZWZpbml0aW9uLmdldCxcbiAgICAgICAgc2V0OiBuZXdWYWx1ZSA9PiB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5zZXQodG9Cb29sZWFuKG5ld1ZhbHVlKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1snX18nICsga2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICB0aGlzWydfXycgKyBrZXldID0gdG9Cb29sZWFuKG5ld1ZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdEVudHJ5KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGRlZmF1bHRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbCc7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgXG4gICAgICAgICAgICBbYmddLFxuICAgICAgICAgICAgW2NvbG9yXSxcbiAgICAgICAgICAgIFtyYWlzZWRdLFxuICAgICAgICAgICAgW3JhaXNlZF1bc2hhZG93Q29sb3JdLFxuICAgICAgICAgICAgW2x5LWJ1dHRvbl1bb3V0bGluZWRdLFxuICAgICAgICAgICAgW2VsZXZhdGlvbl0sXG4gICAgICAgICAgICBbZWxldmF0aW9uXVtzaGFkb3dDb2xvcl0sXG4gICAgICAgICAgICBbZGlzYWJsZWRdLFxuICAgICAgICAgICAgbHktY2FyZFxuICAgICAgICAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3JhaXNlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb3V0bGluZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXV0b0NvbnRyYXN0OiBib29sZWFuO1xuICBwcml2YXRlIF9pc0NvbnRyYXN0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGJnOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICBASW5wdXQoKSBzZXQgcmFpc2VkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9yYWlzZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkOyB9XG5cbiAgQElucHV0KCkgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG5cbiAgQElucHV0KCkgc2V0IG91dGxpbmVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9vdXRsaW5lZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBvdXRsaW5lZCgpIHsgcmV0dXJuIHRoaXMuX291dGxpbmVkOyB9XG5cbiAgQElucHV0KCkgZWxldmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNoYWRvd0NvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgcHVibGljIHNldEF1dG9Db250cmFzdCgpIHtcbiAgICB0aGlzLl9hdXRvQ29udHJhc3QgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5faXNDb250cmFzdCA9IHRoaXMuX2F1dG9Db250cmFzdCAmJiAhdGhpcy5jb2xvciB8fCB0aGlzLmNvbG9yID09PSAnYXV0byc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGNvbW1vbi0tLS06JHtcbiAgICAgIHRoaXMuYmcgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgdGhpcy5jb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgIHRoaXMucmFpc2VkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICB0aGlzLmVsZXZhdGlvbiB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRsaW5lZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgdGhpcy5zaGFkb3dDb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0NvbnRyYXN0IHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKG5ld0tleSwgKHRoZW1lKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZToge1xuICAgICAgICBib3JkZXI/OiBzdHJpbmcsXG4gICAgICAgIGJhY2tncm91bmQ/OiBzdHJpbmcsXG4gICAgICAgIGNvbG9yPzogc3RyaW5nLFxuICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmcsXG4gICAgICAgIHBvaW50ZXJFdmVudHM/OiAnbm9uZSc7XG4gICAgICAgICcmOmhvdmVyJz86IHtcbiAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgJyY6YWN0aXZlJz86IHtcbiAgICAgICAgICBib3hTaGFkb3c/OiBzdHJpbmdcbiAgICAgICAgfVxuICAgICAgfSA9IHt9O1xuICAgICAgaWYgKHRoaXMub3V0bGluZWQpIHtcbiAgICAgICAgc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBjdXJyZW50Q29sb3InO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS50ZXh0LmRpc2FibGVkO1xuICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBpZiAodGhpcy5iZykge1xuICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5idXR0b24uZGlzYWJsZWQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmJnKSB7XG4gICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzQ29udHJhc3QpIHtcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZihgJHt0aGlzLmJnfTpjb250cmFzdGApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0eWxlLmNvbG9yICYmIHRoaXMuY29sb3IpIHtcbiAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YodGhpcy5jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmFpc2VkIHx8IHRoaXMuZWxldmF0aW9uKSB7XG4gICAgICAgICAgY29uc3Qgc2hhZG93Q29sb3IgPSAodGhpcy5zaGFkb3dDb2xvciAmJiB0aGVtZS5jb2xvck9mKHRoaXMuc2hhZG93Q29sb3IpKSB8fCBzdHlsZS5iYWNrZ3JvdW5kIHx8IHN0eWxlLmNvbG9yIHx8IHRoZW1lLmNvbG9yU2hhZG93O1xuICAgICAgICAgIGlmICghdGhpcy5iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3R5bGUuYm94U2hhZG93ID0gc2hhZG93QnVpbGRlcih0aGlzLmVsZXZhdGlvbiB8fCAzLCBzaGFkb3dDb2xvcik7XG4gICAgICAgICAgaWYgKCF0aGlzLmVsZXZhdGlvbikge1xuICAgICAgICAgICAgc3R5bGVbJyY6YWN0aXZlJ10gPSB7XG4gICAgICAgICAgICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig4LCBzaGFkb3dDb2xvcilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3R5bGUgYXMgYW55O1xuICAgIH0sIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgLyoqfiAqL1xuICAgIC8vIGNvbnN0IHJhaXNlZMOEwrhleSA9IHRoaXMucmFpc2VkID09PSB0cnVlID8gJ3JhaXNlZCcgOiAnJztcbiAgICAvLyBsZXQga2V5ID0gJyc7XG4gICAgLy8gaWYgKCh0aGlzLmNvbnRyYXN0ICYmICF0aGlzLmNvbG9yIHx8IHRoaXMuY29sb3IgPT09ICdhdXRvJykgJiYgdGhpcy5iZykge1xuICAgIC8vICAga2V5ID0gYGJjci1jb250cmFzdDoke3RoaXMuYmd9JHtyYWlzZWTDhMK4ZXl9JHt0aGlzLmVsZXZhdGlvbn1gO1xuICAgIC8vICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHktJHtrZXl9YCwgdGhpcy5jb250cmFzdFN0eWxlLmJpbmQodGhpcyksIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmJnICYmIHRoaXMuY29sb3IpIHtcbiAgICAvLyAgIGtleSA9IGBiJsOEwrgke3RoaXMuYmd9JHt0aGlzLmNvbG9yfSR7dGhpcy5yYWlzZWR9JHt0aGlzLmVsZXZhdGlvbn1gO1xuICAgIC8vICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHktJHtrZXl9YCwgdGhpcy5iZ0NvbG9yU3R5bGUuYmluZCh0aGlzKSwgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMucmFpc2VkICYmICF0aGlzLmJnKSB7XG4gICAgLy8gICBrZXkgPSByYWlzZWTDhMK4ZXkgKyB0aGlzLmNvbG9yIHx8ICcnO1xuICAgIC8vICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZTxhbnk+KGBseS0ke2tleX1gLCB0aGVtZSA9PiB7XG4gICAgLy8gICAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZC1jb2xvcjoke3RoZW1lLmJhY2tncm91bmQucHJpbWFyeX07YDtcbiAgICAvLyAgICAgbGV0IGNvbG9yID0gJyc7XG4gICAgLy8gICAgIGxldCBjb2xvclNoYWRvdztcbiAgICAvLyAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAvLyAgICAgICBjb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICAvLyAgICAgICBjb2xvclNoYWRvdyA9IGNvbG9yO1xuICAgIC8vICAgICAgIHN0eWxlcyArPSBgY29sb3I6JHtjb2xvcn07YDtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICBjb2xvclNoYWRvdyA9IHRoZW1lLmNvbG9yU2hhZG93O1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgICAvLyAgICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQodGhpcy5lbGV2YXRpb24sIGNvbG9yU2hhZG93KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gc3R5bGVzO1xuICAgIC8vICAgfSwgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuYmcgfHwgdGhpcy5jb2xvcikge1xuICAgIC8vICAgY29uc3QgY2hhbmdlS2V5ID0gdGhpcy5iZyA/IFsnYmcnLCAnYmFja2dyb3VuZCcsIHRoaXMuYmddIDogWyfDhMK4JywgJ2NvbG9yJywgdGhpcy5jb2xvcl07XG4gICAgLy8gICBjb25zdCBjb2xvciA9IGNoYW5nZUtleVsyXTtcbiAgICAvLyAgIGtleSA9IGAke2NoYW5nZUtleVswXX0ke2NvbG9yfSR7dGhpcy5fcmFpc2VkfSR7dGhpcy5lbGV2YXRpb259YDtcblxuICAgIC8vICAgLyoqIENyZWF0ZSBzdHlsZSAqL1xuICAgIC8vICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHktJHtrZXl9YCwgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBfY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyB8fCB0aGlzLmNvbG9yKTtcbiAgICAvLyAgICAgbGV0IHN0eWxlcyA9IGAke2NoYW5nZUtleVsxXX06JHtfY29sb3J9O2A7XG4gICAgLy8gICAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgICAvLyAgICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQodGhpcy5lbGV2YXRpb24sIF9jb2xvcik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAvLyAgIH0sIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG5cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAga2V5ID0gYHJhaXNlZCR7dGhpcy5fcmFpc2VkfWVseHh4eHh4eHgke3RoaXMuZWxldmF0aW9ufWA7XG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS0ke2tleX1gLCAoKSA9PiB7XG4gICAgLy8gICAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgICAvLyAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQodGhpcy5lbGV2YXRpb24sIHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93KTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQoMCwgdGhpcy50aGVtZS5jb25maWcuY29sb3JTaGFkb3cpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIC8vIH1cbiAgfVxuICAvLyBwcml2YXRlIGNvbnRyYXN0U3R5bGUoKSB7XG4gIC8vICAgY29uc3QgY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gIC8vICAgdGhpcy5fY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YoYCR7dGhpcy5iZ306Y29udHJhc3RgKTtcbiAgLy8gICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHt0aGlzLl9jb2xvcn07YDtcbiAgLy8gICBpZiAodGhpcy5fcmFpc2VkKSB7XG4gIC8vICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQodGhpcy5lbGV2YXRpb24sIGNzc0JnKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIHN0eWxlcztcbiAgLy8gfVxuXG4gIC8vIHByaXZhdGUgYmdDb2xvclN0eWxlKCkge1xuICAvLyAgIGNvbnN0IGNzc0JnID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuYmcpO1xuICAvLyAgIGNvbnN0IGNzc0NvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuY29sb3IpO1xuICAvLyAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZDoke2Nzc0JnfTtjb2xvcjoke2Nzc0NvbG9yfTtgO1xuICAvLyAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgLy8gICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgY3NzQmcpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gc3R5bGVzO1xuICAvLyB9XG5cbiAgcHJpdmF0ZSBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3dpdGhDbGFzc10nXG59KVxuZXhwb3J0IGNsYXNzIEx5V2l0aENsYXNzIHtcblxuICBASW5wdXQoKVxuICBzZXQgd2l0aENsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7dmFsfScgaXMgbm90IHZhbGlkIGNsYXNzTmFtZWApO1xuICAgIH1cbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh2YWwpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeUNvbW1vbiB9IGZyb20gJy4vY29tbW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVdpdGhDbGFzcyB9IGZyb20gJy4vd2l0aC1jbGFzcy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeUNvbW1vbiwgTHlXaXRoQ2xhc3NdLFxuICBleHBvcnRzOiBbTHlDb21tb24sIEx5V2l0aENsYXNzXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbk1vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIE5nTW9kdWxlLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlDb250YWluZXIge1xuICBwcm90ZWN0ZWQgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdseS1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG59XG5cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQXBwbGljYXRpb25SZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSBfdmlld1JlZjogVmlld1JlZjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lclxuICApIHsgfVxuXG4gIGF0dGFjaDxUPihfaG9zdFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGNvbXBvbmVudDogYW55LCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgY29uc3Qgdmlld1JlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xuICAgICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gX2hvc3RWaWV3Q29udGFpbmVyUmVmO1xuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChyb290Tm9kZSA9PiB0aGlzLmFkZENoaWxkKHJvb3ROb2RlKSk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm92ZXJsYXlDb250YWluZXIuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBnZXREb21FbGVtZW50RnJvbUNvbXBvbmVudFJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBkZXN0cm95UmVmKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4sIGRlbGF5OiBudW1iZXIpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21TZXJ2aWNlIH0gZnJvbSAnLi9kb20uc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudENvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyKSB7XG4gIHJldHVybiBwYXJlbnRDb250YWluZXIgfHwgbmV3IEx5T3ZlcmxheUNvbnRhaW5lcigpO1xufVxuXG5leHBvcnQgY29uc3QgTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gT3ZlcmxheUNvbnRhaW5lciBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBMeU92ZXJsYXlDb250YWluZXIsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMeU92ZXJsYXlDb250YWluZXJdXSxcbiAgdXNlRmFjdG9yeTogTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWVxufTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtbRG9tU2VydmljZSwgTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJdXVxufSlcbmV4cG9ydCBjbGFzcyBMeERvbU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiwgT25Jbml0LCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgcGlwZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZW51bSBGb2N1c1N0YXR1cyB7XG4gIC8qKm1vdXNlIGFuZC9vciB0b3VjaCovXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIC8qKiBrZXlib2FyZCBhbmQvb3IgcHJvZ3JhbSovXG4gIEtFWUJPQVJEID0gJ2tleWJvYXJkJyxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5Rm9jdXNTdGF0ZV0nLFxuICBleHBvcnRBczogJ2x5Rm9jdXNTdGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RhdGU6IEZvY3VzU3RhdHVzO1xuICBzdGF0ZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBFbGVtZW50O1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBfc3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Rm9jdXNTdGF0dXM+KCk7XG4gIF9zdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBAT3V0cHV0KCkgbHlGb2N1c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNTdGF0dXM+KCk7XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNcbiAgICAgIC5zZXQoJ2ZvY3VzJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnYmx1cicsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uLmJpbmQodGhpcykpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjb25zdCBvbiA9IChldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9iOiBPYnNlcnZhYmxlPEZvY3VzU3RhdHVzPiA9IHRoaXMuX3N0YXRlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uID0gb2JcbiAgICAgIC8vIC5kZWJvdW5jZVRpbWUoMTExKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMTEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChlOiBGb2N1c1N0YXR1cykgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlID0gZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5seUZvY3VzQ2hhbmdlLmVtaXQoZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdGF0ZSgpIHtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdibHVyJykpIHtcbiAgICAgIHRoaXMuc3RhdGVNYXAuY2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCdtb3VzZWRvd24nKSB8fCB0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygndG91Y2hzdGFydCcpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLkRFRkFVTFQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5LRVlCT0FSRDtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGVTdWJqZWN0Lm5leHQoc3RhdGUpO1xuICB9XG5cbiAgb24oZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkge1xuICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIHNob3VsZFNldDogYm9vbGVhbikgPT4gc2hvdWxkU2V0ID8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSA6IHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgdG9nZ2xlQ2xhc3MoYGx5LWZvY3VzZWRgLCAhIXN0YXRlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBGb2N1c1N0YXR1cykge1xuICAgICAgaWYgKEZvY3VzU3RhdHVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gRm9jdXNTdGF0dXNba2V5XTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoYGx5LSR7Y2xhc3NOYW1lfS1mb2N1c2VkYCwgc3RhdGUgPT09IGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQobnVsbCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Rm9jdXNTdGF0ZSB9IGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUZvY3VzU3RhdGVdLFxuICBleHBvcnRzOiBbTHlGb2N1c1N0YXRlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGVNb2R1bGUgeyB9XG4iLCJleHBvcnQgY29uc3QgQVVJX1ZFUlNJT04gPSAnMS43LjAtYmV0YS41NHA5MSc7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMDgtMjJUMjM6MzY6MjcuMzMwWic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSEFNTUVSX0dFU1RVUkVfQ09ORklHLCBIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuLi90aGVtZS9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBjb25zdCBMWV9IQU1NRVJfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxIYW1tZXJPcHRpb25zPignTFlfSEFNTUVSX09QVElPTlMnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBwcml2YXRlIF9oYW1tZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/ICh3aW5kb3cgYXMgYW55KS5IYW1tZXIgOiBudWxsO1xuICBldmVudHM6IHN0cmluZ1tdID0gdGhpcy5faGFtbWVyID8gW1xuICAgICdzbGlkZScsXG4gICAgJ3NsaWRlc3RhcnQnLFxuICAgICdzbGlkZWVuZCcsXG4gICAgJ3NsaWRlcmlnaHQnLFxuICAgICdzbGlkZWxlZnQnXG4gIF0gOiBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9ucyxcbiAgICAvLyBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIC8vIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAvLyAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgnay1oYW1tZXItY3NzJywge1xuICAgIC8vICAgICAnJzogKCkgPT4gKFxuICAgIC8vICAgICAgIGB1c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAvLyAgICAgICBgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7YCArXG4gICAgLy8gICAgICAgYC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtgXG4gICAgLy8gICAgIClcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICAvLyB9XG4gICAgY29uc3QgbWMgPSBuZXcgdGhpcy5faGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwgdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHBhbiA9IG5ldyB0aGlzLl9oYW1tZXIuUGFuKCk7XG4gICAgY29uc3Qgc3dpcGUgPSBuZXcgdGhpcy5faGFtbWVyLlN3aXBlKCk7XG4gICAgY29uc3Qgc2xpZGUgPSB0aGlzLl9jcmVhdGVSZWNvZ25pemVyKHBhbiwge2V2ZW50OiAnc2xpZGUnLCB0aHJlc2hvbGQ6IDB9LCBzd2lwZSk7XG5cbiAgICBzbGlkZS5yZWNvZ25pemVXaXRoKHN3aXBlKTtcbiAgICBwYW4ucmVjb2duaXplV2l0aChzd2lwZSk7XG5cbiAgICAvLyBBZGQgY3VzdG9taXplZCBnZXN0dXJlcyB0byBIYW1tZXIgbWFuYWdlclxuICAgIG1jLmFkZChbc3dpcGUsIHBhbiwgc2xpZGVdKTtcbiAgICByZXR1cm4gbWM7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyByZWNvZ25pemVyLCB3aXRob3V0IGFmZmVjdGluZyB0aGUgZGVmYXVsdCByZWNvZ25pemVycyBvZiBIYW1tZXJKUyAqL1xuICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyKGJhc2U6IGFueSwgb3B0aW9uczogYW55LCAuLi5pbmhlcml0YW5jZXM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVjb2duaXplciA9IG5ldyAoYmFzZS5jb25zdHJ1Y3Rvcikob3B0aW9ucyk7XG5cbiAgICBpbmhlcml0YW5jZXMucHVzaChiYXNlKTtcbiAgICBpbmhlcml0YW5jZXMuZm9yRWFjaChpdGVtID0+IHJlY29nbml6ZXIucmVjb2duaXplV2l0aChpdGVtKSk7XG5cbiAgICByZXR1cm4gcmVjb2duaXplcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgY29uc3QgTFlfR0xPQkFMX0NPTlRSQVNUID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCdseS5nbG9iYWwuY29udHJhc3QnKTtcbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCB9IGZyb20gJy4uL3NoYWRvdyc7XHJcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMeVNoYWRvd1NlcnZpY2Uge1xyXG4gIC8qKiBEZWZhdWx0IGVsZXZhdGlvbiAqL1xyXG4gIGVsZXZhdGlvbiA9IDE7XHJcbiAgLyoqIGRlbW86IHNldFNoYWRvdyguLi5bZWxldmF0aW9uLCBjb2xvcl0uLi4pICovXHJcbiAgc2V0U2hhZG93KHRoZW1lOiBMeVRoZW1lMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgdmFsOiBbbnVtYmVyLCBzdHJpbmddLCBvbGRDbGFzc05hbWU/OiBzdHJpbmcpIHtcclxuICAgIGxldCBrZXlzOiBzdHJpbmc7XHJcbiAgICBsZXQgZWxldmF0aW9uOiBudW1iZXI7XHJcbiAgICBsZXQgY29sb3IgPSAnY29sb3JTaGFkb3cnO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBrZXlzID0gdmFsLmpvaW4oJycpO1xyXG4gICAgICBlbGV2YXRpb24gPSB2YWxbMF07XHJcbiAgICAgIGNvbG9yID0gdmFsWzFdIHx8IGNvbG9yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5cyA9IGAke3RoaXMuZWxldmF0aW9ufSR7Y29sb3J9YDtcclxuICAgICAgZWxldmF0aW9uID0gdGhpcy5lbGV2YXRpb247XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0aGVtZS5zZXRVcFN0eWxlKGBzaGFkb3cke2tleXN9YCwgeycnOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHtzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZChlbGV2YXRpb24sIHRoZW1lLmNvbG9yT2YoY29sb3IpKX1gO1xyXG4gICAgfX0pO1xyXG4gICAgdGhlbWUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIGNsYXNzbmFtZSwgb2xkQ2xhc3NOYW1lKTtcclxuICAgIHJldHVybiBjbGFzc25hbWU7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBbTHlUaGVtZTJdLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4uL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTHlDb3JlU3R5bGVzIHtcbiAgY2xhc3NlcyA9IHtcbiAgICAvKiogUG9zaXRpb24gYWJzb2x1dGUgKi9cbiAgICBGaWxsOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stYWJzb2x1dGUnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgdG9wOiAwO2AgK1xuICAgICAgICAgIGBib3R0b206IDA7YCArXG4gICAgICAgICAgYGxlZnQ6IDA7YCArXG4gICAgICAgICAgYHJpZ2h0OiAwO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgVmlzdWFsbHlIaWRkZW46IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnay12aXN1YWxseS1oaWRkZW4nLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGJvcmRlcjogMDtgICtcbiAgICAgICAgICBgY2xpcDogcmVjdCgwIDAgMCAwKTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxcHg7YCArXG4gICAgICAgICAgYG1hcmdpbjogLTFweDtgICtcbiAgICAgICAgICBgb3ZlcmZsb3c6IGhpZGRlbjtgICtcbiAgICAgICAgICBgcGFkZGluZzogMDtgICtcbiAgICAgICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgICAgIGB3aWR0aDogMXB4O2AgK1xuICAgICAgICAgIGBvdXRsaW5lOiAwO2AgK1xuICAgICAgICAgIGAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7YCArXG4gICAgICAgICAgYC1tb3otYXBwZWFyYW5jZTogbm9uZTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUpIHsgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVuZGVmaW5lZCB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBVbmRlZmluZWRWYWx1ZSA9IG5ldyBVbmRlZmluZWQoKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgVHlwb2dyYXBoeUNvbmZpZyB7XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBudW1iZXI7XG4gIGxldHRlclNwYWNpbmc/OiBudW1iZXI7XG4gIHRleHRUcmFuc2Zvcm0/OiAndXBwZXJjYXNlJyB8ICdjYXBpdGFsaXplJyB8ICdsb3dlcmNhc2UnO1xuICBndXR0ZXJUb3A/OiBudW1iZXI7XG4gIGd1dHRlckJvdHRvbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBweFRvUmVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy50eXBvZ3JhcGh5LmZvbnRTaXplIC8gMTQ7XG4gICAgcmV0dXJuIGAke3ZhbHVlIC8gdGhpcy50eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSAqIHNpemV9cmVtYDtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcywgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG9ialtfcGF0aFtpXV0gfHwgcGF0aDtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFjaE1lZGlhKHN0cjogc3RyaW5nLCBmbjogKCh2YWw6IHN0cmluZywgbWVkaWE6IHN0cmluZywgbGVuOiBudW1iZXIpID0+IHZvaWQpKSB7XG4gIGNvbnN0IHZhbHVlcyA9IHN0ci5zcGxpdCgvXFxzL2cpO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHZhbEl0ZW0gPSB2YWx1ZXNbaW5kZXhdLnNwbGl0KC9cXEAvZyk7XG4gICAgY29uc3QgdmFsdWUgPSB2YWxJdGVtLnNoaWZ0KCk7XG4gICAgY29uc3QgbGVuID0gdmFsSXRlbS5sZW5ndGg7XG4gICAgaWYgKGxlbikge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW47IGorKykge1xuICAgICAgICBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHZhbEl0ZW1bal0sIHZhbEl0ZW0ubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCB1bmRlZmluZWQsIGxlbik7XG4gICAgfVxuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJ0b01lZGlhIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBK0IsUUFBUTs7SUFDckMsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUM5QyxJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBQzlDLElBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7SUFDOUMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDdkQsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUN6Qzs7Ozs7O0FDTkQ7QUFDQSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7O0FBRXZCLElBQU0scUJBQXFCLEdBQUcsR0FBRyxDQUFDOztBQUNsQyxJQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQzs7QUFDdEMsSUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUM7O0FBQ3hDLElBQWEsT0FBTyxHQUFHO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lB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