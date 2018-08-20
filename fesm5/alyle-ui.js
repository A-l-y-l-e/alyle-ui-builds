import * as _chroma from 'chroma-js';
import { InjectionToken, Injectable, Optional, Inject, RendererFactory2, isDevMode, ViewEncapsulation, Directive, Input, ElementRef, Renderer2, NgModule, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, NgZone, EventEmitter, Output, defineInjectable, SkipSelf, inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { __extends } from 'tslib';
import { HammerGestureConfig } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} hexcolor
 * @return {?}
 */
function getContrastYIQ(hexcolor) {
    var /** @type {?} */ r = parseInt(hexcolor.substr(0, 2), 16);
    var /** @type {?} */ g = parseInt(hexcolor.substr(2, 2), 16);
    var /** @type {?} */ b = parseInt(hexcolor.substr(4, 2), 16);
    var /** @type {?} */ yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ chroma = _chroma;
var /** @type {?} */ shadowKeyUmbraOpacity = 0.2;
var /** @type {?} */ shadowKeyPenumbraOpacity = 0.14;
var /** @type {?} */ shadowAmbientShadowOpacity = 0.12;
var /** @type {?} */ Shadows = [
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
    var /** @type {?} */ Color = chroma(color);
    var /** @type {?} */ colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    var /** @type {?} */ e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return "box-shadow:" + e[0] + "px " + e[1] + "px " + e[2] + "px " + e[3] + "px " + colors[0] + "," + e[4] + "px " + e[5] + "px " + e[6] + "px " + e[7] + "px " + colors[1] + "," + e[8] + "px " + e[9] + "px " + e[10] + "px " + e[11] + "px " + colors[2] + ";";
}
/**
 * @param {?} elevation
 * @param {?=} color
 * @return {?}
 */
function shadowBuilder(elevation, color) {
    var /** @type {?} */ Color = chroma(color || '#000').darken().saturate(2);
    var /** @type {?} */ colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    var /** @type {?} */ e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return e[0] + "px " + e[1] + "px " + e[2] + "px " + e[3] + "px " + colors[0] + "," + e[4] + "px " + e[5] + "px " + e[6] + "px " + e[7] + "px " + colors[1] + "," + e[8] + "px " + e[9] + "px " + e[10] + "px " + e[11] + "px " + colors[2] + ";";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ THEME_VARIABLES = new InjectionToken('ly.theme.variables');
var /** @type {?} */ IS_CORE_THEME = new InjectionToken('ly.is.root');
var ThemeVariables = /** @class */ (function () {
    function ThemeVariables() {
    }
    return ThemeVariables;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
var /** @type {?} */ hasV8BreakIterator = (typeof (Intl) !== 'undefined' && (/** @type {?} */ (Intl)).v8BreakIterator);
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ THEME_CONFIG = new InjectionToken('ly.theme.config.root');
var /** @type {?} */ LY_THEME_CONFIG = new InjectionToken('ly_theme_config');
var /** @type {?} */ LY_THEME_NAME = new InjectionToken('ly.theme.name');
var LyThemeConfig = /** @class */ (function () {
    function LyThemeConfig() {
        this.themes = [];
    }
    return LyThemeConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var InvertMediaQuery = {
    No: 0,
    Yes: 1,
};
InvertMediaQuery[InvertMediaQuery.No] = "No";
InvertMediaQuery[InvertMediaQuery.Yes] = "Yes";
/**
 * @param {?} media
 * @param {?=} invertMediaQuery
 * @return {?}
 */
function transformMediaQuery(media, invertMediaQuery) {
    if (invertMediaQuery === void 0) { invertMediaQuery = InvertMediaQuery.No; }
    if (media && invertMediaQuery === InvertMediaQuery.Yes) {
        var /** @type {?} */ newVal = media.split(',').map(function (_) { return "not " + _; });
        return newVal;
    }
    return media;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ classId = 0;
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
            var /** @type {?} */ mediaStyleContainer = _document.body.querySelector('ly-media-style-container');
            var /** @type {?} */ primaryStyleContainer = _document.body.querySelector('ly-primary-style-container');
            var /** @type {?} */ secondaryStyleContainer = _document.body.querySelector('ly-secondary-style-container');
            if (primaryStyleContainer) {
                (/** @type {?} */ (_document.body)).removeChild(mediaStyleContainer);
                (/** @type {?} */ (_document.body)).removeChild(primaryStyleContainer);
                (/** @type {?} */ (_document.body)).removeChild(secondaryStyleContainer);
            }
        }
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
            var /** @type {?} */ id = "k" + (classId++).toString(36);
            var /** @type {?} */ styleElement = this.renderer.createElement('style');
            var /** @type {?} */ media = transformMediaQuery(_media, invertMediaQuery);
            var /** @type {?} */ styleContent = this.renderer.createText(this._createStyleContent(themeConfig, style, id, media));
            var /** @type {?} */ saveIn = media ? this.mediaStyleContainer : _in;
            this.renderer.appendChild(styleElement, styleContent);
            this.renderer.appendChild(saveIn, styleElement);
            if (isDevMode()) {
                this.renderer.setAttribute(styleElement, 'style_data', _for + "\u00B7\u00B7\u00B7" + id + "\u00B7\u00B7\u00B7" + key);
            }
            var /** @type {?} */ dataStyle = {
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
        var /** @type {?} */ typf = typeof styles;
        if (typf === 'string') {
            return toMedia("." + id + "{" + styles + "}", media);
        }
        else if (typf === 'function') {
            return toMedia("." + id + "{" + ((/** @type {?} */ (styles)))(themeConfig) + "}", media);
        }
        var /** @type {?} */ content = '';
        for (var /** @type {?} */ key$ in /** @type {?} */ (styles)) {
            if (styles.hasOwnProperty(key$)) {
                var /** @type {?} */ val = styles[key$];
                var /** @type {?} */ text = typeof val === 'function' ? val(themeConfig) : val;
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
        var /** @type {?} */ classname = this.setUpStyle('rootbody', {
            '': function () {
                return ("margin:0;");
            },
            ', *, *:after, *:before': function () {
                return ("-webkit-box-sizing: border-box;" +
                    "-moz-box-sizing: border-box;" +
                    "box-sizing: border-box;");
            }
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
        { type: LyThemeConfig, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_CONFIG,] },] },
        { type: RendererFactory2, },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
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
        var /** @type {?} */ result_1 = '';
        media.forEach(function (_) { return result_1 += "@media " + _ + "{" + text + "}"; });
        return result_1;
    }
    return text;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var TypeStyle = {
    Multiple: 0,
    OnlyOne: 1,
};
TypeStyle[TypeStyle.Multiple] = "Multiple";
TypeStyle[TypeStyle.OnlyOne] = "OnlyOne";
var /** @type {?} */ STYLE_MAP4 = {};
// interface StyleMap03 {
//   [id: string]: { // example: lyTabs
//     styles: StylesFn2<any> | Styles2,
//     media?: string,
//     typeStyle?: TypeStyle,
//     themes: { // example: minima-dark
//       /** Css */
//       default?: string,
//       [themeName: string]: string
//     }
//   };
// }
// const STYLE_MAP_03: StyleMap03 = {} as any;
var /** @type {?} */ STYLE_MAP = {};
var /** @type {?} */ CLASSES_MAP = {};
var /** @type {?} */ STYLE_KEYS_MAP = {};
var /** @type {?} */ nextId = 0;
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
            this._styleMap2 = themeName in STYLE_MAP
                ? STYLE_MAP[themeName]
                : STYLE_MAP[themeName] = new Map();
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
        var /** @type {?} */ name = this.config.name;
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
        var /** @type {?} */ name = this.config.name;
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
     * @template T
     * @param {?} id Unique id
     * @param {?} style Styles
     * @param {?=} el Element
     * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
     * @param {?=} priority
     * @return {?}
     */
    LyTheme2.prototype.addStyle = /**
     * Add a new dynamic style, use only within \@Input()
     * @template T
     * @param {?} id Unique id
     * @param {?} style Styles
     * @param {?=} el Element
     * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
     * @param {?=} priority
     * @return {?}
     */
    function (id, style, el, instance, priority) {
        var /** @type {?} */ newClass = this.addCss(id, /** @type {?} */ (style), priority);
        if (instance) {
            el.classList.remove(instance);
        }
        el.classList.add(newClass);
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
        var /** @type {?} */ currentStyles = this.elements;
        for (var /** @type {?} */ key in currentStyles) {
            if (currentStyles.hasOwnProperty(key)) {
                var /** @type {?} */ styleData = STYLE_MAP4[key];
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
        var /** @type {?} */ newId = "~>" + id;
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
        var /** @type {?} */ newId = id || 'global';
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
        var /** @type {?} */ styleMap = (id in STYLE_MAP4
            ? STYLE_MAP4[id]
            : STYLE_MAP4[id] = {
                priority: priority,
                styles: styles,
                type: type,
                css: {}
            });
        // const styles2 = this.config.name in this.stylesInDocument.styles
        // ? this.stylesInDocument.styles[this.config.name]
        // : this.stylesInDocument.styles[this.config.name] = {};
        // console.log(
        //   'ccc', typeof styleMap.css !== 'string' && !(id in styleMap.css),
        //   typeof CLASSES_MAP[id] === 'string' || typeof CLASSES_MAP[id] === 'object' || CLASSES_MAP[this.config.name][id]
        // );
        var /** @type {?} */ themeName = this.initialTheme;
        var /** @type {?} */ isCreated = (id in CLASSES_MAP) || CLASSES_MAP[themeName][id];
        if (!isCreated || forChangeTheme) {
            /**
             * create new style for new theme
             */
            var /** @type {?} */ css = void 0;
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
            // this.core.renderer.appendChild(this.core.primaryStyleContainer, styleElement);
            // if (!this._styleMap2.has(id)) {
            //   const styleElement = this.core.renderer.createElement('style');
            //   const styleText = this.core.renderer.createText(css);
            //   this.core.renderer.appendChild(styleElement, styleText);
            //   this._styleMap2.set(id, {
            //     el: styleElement
            //   });
            // }
            var /** @type {?} */ el = this.elements[id]
                ? this.elements[id]
                : this.elements[id] = this._createElementStyle(css);
            if (forChangeTheme) {
                el.innerText = css;
            }
            else {
                this.core.renderer.appendChild(this._createStyleContainer(priority), el);
            }
        }
        // if (!(id in this.elements)) {
        // const htmlStyle = this._createElementStyle(
        //   typeof styleMap.css === 'string'
        //   ? styleMap.css
        //   : styleMap.css[this.config.name]
        // );
        // this.elements[id] = htmlStyle;
        // this.core.renderer.appendChild(this.core.primaryStyleContainer, htmlStyle);
        // }
        var /** @type {?} */ classes = typeof CLASSES_MAP[id] === 'string'
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
     * @param {?} styles
     * @param {?} id
     * @param {?} priority
     * @param {?} type
     * @param {?=} forChangeTheme
     * @return {?}
     */
    LyTheme2.prototype._updateStylesBrowser = /**
     * @param {?} styles
     * @param {?} id
     * @param {?} priority
     * @param {?} type
     * @param {?=} forChangeTheme
     * @return {?}
     */
    function (styles, id, priority, type, forChangeTheme) {
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
            var /** @type {?} */ el = this.core.renderer.createElement("ly-s-c");
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
        var /** @type {?} */ refChild = this.findNode(priority);
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
        var /** @type {?} */ keys = (Array.from(styleContainers.keys())).sort();
        var /** @type {?} */ key = keys.find(function (_) { return index < _; });
        return (key && styleContainers.get(key)) || this.core.firstElement;
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
        var /** @type {?} */ styleElement = this.core.renderer.createElement('style');
        var /** @type {?} */ styleText = this.core.renderer.createText(css);
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
        { type: StylesInDocument, },
        { type: CoreTheme, },
        { type: undefined, decorators: [{ type: Inject, args: [LY_THEME_NAME,] },] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
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
        /**
         * use current class or set new
         */
        var /** @type {?} */ className = CLASSES_MAP[id]
            ? CLASSES_MAP[id] = _classes_ || createNextId()
            : CLASSES_MAP[themeName][id] = _classes_ || createNextId();
        if (typeof styles === 'string') {
            var /** @type {?} */ css = "." + className + "{" + styles + "}";
            // STYLE_MAP4[id].rules = styles;
            return media ? toMedia$1(css, media) : css;
        }
        else {
            var /** @type {?} */ rules = styleToString(styles, null, "." + className);
            return rules;
        }
    }
    var /** @type {?} */ content = '';
    // const classesMap = id in themeMap
    // ? themeMap[id]
    // : themeMap[id] = {};
    var /** @type {?} */ classes = CLASSES_MAP[id]
        ? CLASSES_MAP[id] = _classes_ || {}
        : CLASSES_MAP[themeName][id] = _classes_ || {};
    for (var /** @type {?} */ key in styles) {
        if (styles.hasOwnProperty(key)) {
            var /** @type {?} */ value = styles[key];
            if (typeof value === 'object') {
                var /** @type {?} */ className = classes[key] || (classes[key] = isDevMode() ? toClassNameValid(id + "---" + key + "-" + createNextId()) : createNextId());
                var /** @type {?} */ style = styleToString(/** @type {?} */ (value), null, "." + className);
                content += style;
            }
            else {
                console.log('value is string', value);
            }
        }
    }
    return content;
}
/**
 * {color:'red'} to .className{color: red}
 * @param {?} ob
 * @param {?} rulesMap
 * @param {?=} className
 * @param {?=} parentClassName
 * @return {?}
 */
function styleToString(ob, rulesMap, className, parentClassName) {
    var /** @type {?} */ content = '';
    var /** @type {?} */ keyAndValue = '';
    for (var /** @type {?} */ styleKey in ob) {
        if (ob.hasOwnProperty(styleKey)) {
            var /** @type {?} */ element = ob[styleKey];
            if (typeof element === 'object') {
                // rulesMap[styleKey] = null;
                content += styleToString(/** @type {?} */ (element), null, styleKey, className);
            }
            else {
                var /** @type {?} */ newStyleKey = toHyphenCaseCache(styleKey);
                // const style = rulesMap[newStyleKey] = element;
                keyAndValue += newStyleKey + ":" + element + ";";
            }
        }
    }
    if (className) {
        var /** @type {?} */ newClassName = '';
        if (parentClassName) {
            newClassName += className.indexOf('&') === 0 ? "" + parentClassName + className.slice(1) : parentClassName + " ." + className;
        }
        else {
            newClassName += className;
        }
        content += "" + newClassName;
    }
    content += "{" + keyAndValue + "}";
    return content;
}
/**
 * @deprecated
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function get(obj, path) {
    var /** @type {?} */ _path = path instanceof Array ? path : path.split(':');
    for (var /** @type {?} */ i = 0; i < _path.length; i++) {
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
    var /** @type {?} */ s = str.replace(/^[0-9]|[^\w\-]/g, function (_) {
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
 * @suppress {checkTypes} checked by tsc
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
        { type: ViewContainerRef, },
    ]; };
    NgTranscludeDirective.propDecorators = {
        "ngTransclude": [{ type: Input },],
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
 * @suppress {checkTypes} checked by tsc
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
    var /** @type {?} */ docElem, /** @type {?} */ win, /** @type {?} */
    box = { top: 0, left: 0 };
    var /** @type {?} */ doc = elem && elem.ownerDocument;
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
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ definition = Object.getOwnPropertyDescriptor(target, key);
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ newKey = "common----:" + (this.bg || DEFAULT_VALUE) + "\u00B7" + (this.color || DEFAULT_VALUE) + "\u00B7" + (this.raised || DEFAULT_VALUE) + "\u00B7" + (this.elevation || DEFAULT_VALUE) + "\u00B7" + (this.disabled || DEFAULT_VALUE) + "\u00B7" + (this.outlined || DEFAULT_VALUE) + "\u00B7" + (this.shadowColor || DEFAULT_VALUE) + "\u00B7" + (this._isContrast || DEFAULT_VALUE);
        this._className = this.theme.addStyle(newKey, function (theme) {
            var /** @type {?} */ style = {};
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
                    var /** @type {?} */ shadowColor = (_this.shadowColor && theme.colorOf(_this.shadowColor)) || style.background || style.color || theme.colorShadow;
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
        { type: LyTheme2, },
        { type: ElementRef, },
    ]; };
    LyCommon.propDecorators = {
        "bg": [{ type: Input },],
        "color": [{ type: Input },],
        "raised": [{ type: Input },],
        "disabled": [{ type: Input },],
        "outlined": [{ type: Input },],
        "elevation": [{ type: Input },],
        "shadowColor": [{ type: Input },],
    };
    return LyCommon;
}());
var /** @type {?} */ DEFAULT_VALUE = '';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @deprecated
 */
var /** @type {?} */ LY_GLOBAL_CONTRAST = new InjectionToken('ly.global.contrast');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ keys;
        var /** @type {?} */ elevation;
        var /** @type {?} */ color = 'colorShadow';
        if (val) {
            keys = val.join('');
            elevation = val[0];
            color = val[1] || color;
        }
        else {
            keys = "" + this.elevation + color;
            elevation = this.elevation;
        }
        var /** @type {?} */ classname = theme.setUpStyle("shadow" + keys, { '': function () {
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
 * @suppress {checkTypes} checked by tsc
 */
var LyNewRaised = /** @class */ (function () {
    function LyNewRaised(theme, elementRef, renderer, shadow) {
        this.theme = theme;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.shadow = shadow;
        this.elevation = 3;
    }
    Object.defineProperty(LyNewRaised.prototype, "newRaised", {
        set: /**
         * Default raised
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.currentClassName = this.shadow.setShadow(this.theme, this.elementRef, this.renderer, [value[0] || this.elevation, value[1]], this.currentClassName);
        },
        enumerable: true,
        configurable: true
    });
    LyNewRaised.decorators = [
        { type: Directive, args: [{ selector: ':not([raised])[newRaised]' },] },
    ];
    /** @nocollapse */
    LyNewRaised.ctorParameters = function () { return [
        { type: LyTheme2, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyShadowService, },
    ]; };
    LyNewRaised.propDecorators = {
        "newRaised": [{ type: Input },],
    };
    return LyNewRaised;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyThemeContainer = /** @class */ (function () {
    function LyThemeContainer(theme, elementRef, renderer) {
        this.theme = theme;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    Object.defineProperty(LyThemeContainer.prototype, "lyTheme", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lyTheme;
        },
        set: /**
         * set theme
         * @param {?} nam
         * @return {?}
         */
        function (nam) {
            this._lyTheme = nam;
            this.theme.setUpTheme(name);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyThemeContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._setContainerStyle(this.elementRef.nativeElement, this.renderer);
    };
    /**
     * @param {?} element
     * @param {?} renderer
     * @return {?}
     */
    LyThemeContainer.prototype._setContainerStyle = /**
     * @param {?} element
     * @param {?} renderer
     * @return {?}
     */
    function (element, renderer) {
        var _this = this;
        var /** @type {?} */ classname = this.theme.setUpStyle("theme:" + this.theme.config.name, {
            '': function () {
                return ("background-color:" + _this.theme.config["background"].default + ";" +
                    ("color:" + _this.theme.config["text"].default + ";") +
                    ("font-family:" + _this.theme.config["typography"].fontFamily + ";"));
            }
        });
        renderer.addClass(element, classname);
    };
    LyThemeContainer.decorators = [
        { type: Directive, args: [{
                    selector: '[lyTheme]',
                    providers: [LyTheme2],
                    exportAs: 'lyTheme'
                },] },
    ];
    /** @nocollapse */
    LyThemeContainer.ctorParameters = function () { return [
        { type: LyTheme2, },
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    LyThemeContainer.propDecorators = {
        "lyTheme": [{ type: Input },],
        "shared": [{ type: Input },],
    };
    return LyThemeContainer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: ElementRef, },
    ]; };
    LyWithClass.propDecorators = {
        "withClass": [{ type: Input },],
    };
    return LyWithClass;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyCommonModule = /** @class */ (function () {
    function LyCommonModule() {
    }
    LyCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LyCommon, LyNewRaised, LyThemeContainer, LyWithClass],
                    exports: [LyCommon, LyNewRaised, LyThemeContainer, LyWithClass],
                    providers: [
                        { provide: LY_GLOBAL_CONTRAST, useValue: false }
                    ]
                },] },
    ];
    return LyCommonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyOverlayContainer = /** @class */ (function () {
    function LyOverlayContainer() {
        if (Platform.isBrowser) {
            var /** @type {?} */ container = document.createElement('ly-overlay-container');
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
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ viewRef = _hostViewContainerRef.createEmbeddedView(template);
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
        { type: ComponentFactoryResolver, },
        { type: LyOverlayContainer, },
    ]; };
    return DomService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} parentContainer
 * @return {?}
 */
function LY_OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer) {
    return parentContainer || new LyOverlayContainer();
}
var /** @type {?} */ LY_OVERLAY_CONTAINER_PROVIDER = {
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
 * @suppress {checkTypes} checked by tsc
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
            var /** @type {?} */ element = elementRef.nativeElement;
            this.setTriggerElement(element);
            var /** @type {?} */ ob = this._stateSubject.asObservable();
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
        var /** @type {?} */ state;
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
        var /** @type {?} */ element = this._containerElement;
        var /** @type {?} */ state = this.state;
        var /** @type {?} */ toggleClass = function (className, shouldSet) { return shouldSet ? _this._renderer.addClass(element, className) : _this._renderer.removeClass(element, className); };
        toggleClass("ly-focused", !!state);
        for (var /** @type {?} */ key in FocusStatus) {
            if (FocusStatus.hasOwnProperty(key)) {
                var /** @type {?} */ className = FocusStatus[key];
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
        { type: ElementRef, },
        { type: NgZone, },
        { type: Renderer2, },
        { type: ChangeDetectorRef, },
    ]; };
    LyFocusState.propDecorators = {
        "lyFocusChange": [{ type: Output },],
    };
    return LyFocusState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ AUI_VERSION = '1.7.0-beta.50yre';
var /** @type {?} */ AUI_LAST_UPDATE = '2018-08-20T23:11:27.454Z';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
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
        // if (Platform.isBrowser) {
        //   const newClass = this.coreTheme.setUpStyle('k-hammer-css', {
        //     '': () => (
        //       `user-select: none;` +
        //       `-webkit-user-drag: none;` +
        //       `-webkit-tap-highlight-color: rgba(0, 0, 0, 0);`
        //     )
        //   });
        //   element.classList.add(newClass);
        // }
        var /** @type {?} */ mc = new this._hammer(element, this._hammerOptions || undefined);
        var /** @type {?} */ pan = new this._hammer.Pan();
        var /** @type {?} */ swipe = new this._hammer.Swipe();
        var /** @type {?} */ slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
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
        var /** @type {?} */ recognizer = new (base.constructor)(options);
        inheritances.push(base);
        inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
        return recognizer;
    };
    LyHammerGestureConfig.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LyHammerGestureConfig.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_HAMMER_OPTIONS,] },] },
    ]; };
    return LyHammerGestureConfig;
}(HammerGestureConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
var LyCoreStyles = /** @class */ (function () {
    function LyCoreStyles(coreTheme) {
        this.coreTheme = coreTheme;
        this.classes = {
            /** Position absolute */
            Fill: this.coreTheme.setUpStyle('k-absolute', {
                '': function () {
                    return ("position: absolute;" +
                        "top: 0;" +
                        "bottom: 0;" +
                        "left: 0;" +
                        "right: 0;");
                }
            }),
            VisuallyHidden: this.coreTheme.setUpStyle('k-visually-hidden', {
                '': function () {
                    return ("border: 0;" +
                        "clip: rect(0 0 0 0);" +
                        "height: 1px;" +
                        "margin: -1px;" +
                        "overflow: hidden;" +
                        "padding: 0;" +
                        "position: absolute;" +
                        "width: 1px;" +
                        "outline: 0;" +
                        "-webkit-appearance: none;" +
                        "-moz-appearance: none;");
                }
            })
        };
    }
    LyCoreStyles.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LyCoreStyles.ctorParameters = function () { return [
        { type: CoreTheme, },
    ]; };
    /** @nocollapse */ LyCoreStyles.ngInjectableDef = defineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(inject(CoreTheme)); }, token: LyCoreStyles, providedIn: "root" });
    return LyCoreStyles;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Undefined = /** @class */ (function () {
    function Undefined() {
    }
    return Undefined;
}());
var /** @type {?} */ UndefinedValue = new Undefined();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ size = this.typography.fontSize / 14;
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
    var /** @type {?} */ _path = path instanceof Array ? path : path.split(':');
    for (var /** @type {?} */ i = 0; i < _path.length; i++) {
        obj = obj[_path[i]] || path;
    }
    return typeof obj === 'string' ? /** @type {?} */ (obj) : /** @type {?} */ (obj['default']);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { getContrastYIQ, shadowBuilderDeprecated, shadowBuilder, Shadows, THEME_VARIABLES, IS_CORE_THEME, ThemeVariables, Platform, LyCommonModule, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, IsBoolean, defaultEntry, DomService, LY_OVERLAY_CONTAINER_PROVIDER_FACTORY, LY_OVERLAY_CONTAINER_PROVIDER, LxDomModule, LyFocusStateModule, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LY_GLOBAL_CONTRAST, LyCommon, LyShadowService, CoreTheme, THEME_CONFIG, LY_THEME_CONFIG, LY_THEME_NAME, LyThemeConfig, LyThemeContainer, toHyphenCase, capitalizeFirstLetter, StylesInDocument, LyTheme2, LyThemeModule, LyCoreStyles, Undefined, UndefinedValue, transformMediaQuery, InvertMediaQuery, LyStyleUtils, LyOverlayContainer as ɵc, LyNewRaised as ɵa, LyWithClass as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb3JlLXRoZW1lLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9jb21tb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9lbC9vZmZzZXQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9pcy1ib29sZWFuLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZGVmYXVsdC1lbnRyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb21tb24uZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbnRyYXN0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3NoYWRvdy5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3JhaXNlZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3dpdGgtY2xhc3MuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbW1vbi5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXktY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vZG9tLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL2x4LWRvbS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2ZvY3VzLXN0YXRlL2ZvY3VzLXN0YXRlLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy92ZXJzaW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2dlc3R1cmUvZ2VzdHVyZS1jb25maWcudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlcy9jb3JlLXN0eWxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy91bmRlZmluZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc3R5bGUtdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0WUlRKGhleGNvbG9yKSB7XG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigyLCAyKSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XG4gIGNvbnN0IHlpcSA9ICgociAqIDI5OSkgKyAoZyAqIDU4NykgKyAoYiAqIDExNCkpIC8gMTAwMDtcbiAgcmV0dXJuICh5aXEgPj0gMTI4KSA/ICdibGFjaycgOiAnd2hpdGUnO1xufVxuIiwiaW1wb3J0ICogYXMgX2Nocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuY29uc3QgY2hyb21hID0gX2Nocm9tYTtcblxuY29uc3Qgc2hhZG93S2V5VW1icmFPcGFjaXR5ID0gMC4yO1xuY29uc3Qgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbmNvbnN0IHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcbmV4cG9ydCBjb25zdCBTaGFkb3dzID0gW1xuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAxLCAzLCAwLCAwLCAxLCAxLCAwLCAwLCAyLCAxLCAtMV0sXG4gIFswLCAxLCA1LCAwLCAwLCAyLCAyLCAwLCAwLCAzLCAxLCAtMl0sXG4gIFswLCAxLCA4LCAwLCAwLCAzLCA0LCAwLCAwLCAzLCAzLCAtMl0sXG4gIFswLCAyLCA0LCAtMSwgMCwgNCwgNSwgMCwgMCwgMSwgMTAsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDUsIDgsIDAsIDAsIDEsIDE0LCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA2LCAxMCwgMCwgMCwgMSwgMTgsIDBdLFxuICBbMCwgNCwgNSwgLTIsIDAsIDcsIDEwLCAxLCAwLCAyLCAxNiwgMV0sXG4gIFswLCA1LCA1LCAtMywgMCwgOCwgMTAsIDEsIDAsIDMsIDE0LCAyXSxcbiAgWzAsIDUsIDYsIC0zLCAwLCA5LCAxMiwgMSwgMCwgMywgMTYsIDJdLFxuICBbMCwgNiwgNiwgLTMsIDAsIDEwLCAxNCwgMSwgMCwgNCwgMTgsIDNdLFxuICBbMCwgNiwgNywgLTQsIDAsIDExLCAxNSwgMSwgMCwgNCwgMjAsIDNdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEyLCAxNywgMiwgMCwgNSwgMjIsIDRdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEzLCAxOSwgMiwgMCwgNSwgMjQsIDRdLFxuICBbMCwgNywgOSwgLTQsIDAsIDE0LCAyMSwgMiwgMCwgNSwgMjYsIDRdLFxuICBbMCwgOCwgOSwgLTUsIDAsIDE1LCAyMiwgMiwgMCwgNiwgMjgsIDVdLFxuICBbMCwgOCwgMTAsIC01LCAwLCAxNiwgMjQsIDIsIDAsIDYsIDMwLCA1XSxcbiAgWzAsIDgsIDExLCAtNSwgMCwgMTcsIDI2LCAyLCAwLCA2LCAzMiwgNV0sXG4gIFswLCA5LCAxMSwgLTUsIDAsIDE4LCAyOCwgMiwgMCwgNywgMzQsIDZdLFxuICBbMCwgOSwgMTIsIC02LCAwLCAxOSwgMjksIDIsIDAsIDcsIDM2LCA2XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIwLCAzMSwgMywgMCwgOCwgMzgsIDddLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjEsIDMzLCAzLCAwLCA4LCA0MCwgN10sXG4gIFswLCAxMCwgMTQsIC02LCAwLCAyMiwgMzUsIDMsIDAsIDgsIDQyLCA3XSxcbiAgWzAsIDExLCAxNCwgLTcsIDAsIDIzLCAzNiwgMywgMCwgOSwgNDQsIDhdLFxuICBbMCwgMTEsIDE1LCAtNywgMCwgMjQsIDM4LCAzLCAwLCA5LCA0NiwgOF1cbl07XG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcgPSAyLCBjb2xvciA9ICcjMDAwJykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvcik7XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGBib3gtc2hhZG93OiR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlcihlbGV2YXRpb246IG51bWJlciB8IHN0cmluZywgY29sb3I/OiBzdHJpbmcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IgfHwgJyMwMDAnKS5kYXJrZW4oKS5zYXR1cmF0ZSgyKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYCR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xyXG5leHBvcnQgY29uc3QgSVNfQ09SRV9USEVNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjx0cnVlPignbHkuaXMucm9vdCcpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRoZW1lVmFyaWFibGVzIHtcclxuICAvKiogVGhlbWUgbmFtZSAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmltYXJ5PzogUGFsZXR0ZVZhcmlhYmxlcztcclxuICBhY2NlbnQ/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4gIC8qKiB3YXJuIG9yIGVycm9yIGNvbG9yICovXHJcbiAgd2Fybj86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbiAgc2NoZW1lPzogc3RyaW5nO1xyXG4gIGNvbG9yU2NoZW1lcz86IHtcclxuICAgIFtrZXk6IHN0cmluZ106IENvbG9yU2NoZW1lXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xyXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XHJcbiAgY29udHJhc3Q/OiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcclxuICBiYWNrZ3JvdW5kPzoge1xyXG4gICAgZGVmYXVsdD86IHN0cmluZyxcclxuICAgIHBhcGVyPzogc3RyaW5nLFxyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbiAgdGV4dD86IHtcclxuICAgIGRlZmF1bHQ6IHN0cmluZyxcclxuICAgIHByaW1hcnk/OiBzdHJpbmcsXHJcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IHN0cmluZyxcclxuICAgIGhpbnQ/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICBkaXZpZGVyPzogc3RyaW5nO1xyXG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xyXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xyXG4gIGJhcj86IHN0cmluZztcclxuICBpbnB1dD86IHtcclxuICAgIGxhYmVsPzogc3RyaW5nLFxyXG4gICAgdW5kZXJsaW5lPzogc3RyaW5nXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBzdXBwb3J0cyB0aGUgVjggQnJlYWsgSXRlcmF0b3IuIFRoZSBWOCBjaGVja1xyXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cclxuY29uc3QgaGFzVjhCcmVha0l0ZXJhdG9yID0gKHR5cGVvZihJbnRsKSAhPT0gJ3VuZGVmaW5lZCcgJiYgKEludGwgYXMgYW55KS52OEJyZWFrSXRlcmF0b3IpO1xyXG4vKipcclxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcclxuICogY2hlY2tpbmcgYnJvd3Nlci1zcGVjaWZpYyBnbG9iYWwgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGlzQnJvd3NlcjogYm9vbGVhbiA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudDtcclxuICAvKiogTGF5b3V0IEVuZ2luZXMgKi9cclxuICBFREdFID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZWRnZSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gIFRSSURFTlQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gRWRnZUhUTUwgYW5kIFRyaWRlbnQgbW9jayBCbGluayBzcGVjaWZpYyB0aGluZ3MgYW5kIG5lZWQgdG8gYmUgZXhjbHVkZWQgZnJvbSB0aGlzIGNoZWNrLlxyXG4gIEJMSU5LID0gUGxhdGZvcm0uaXNCcm93c2VyICYmXHJcbiAgICAgICghISgod2luZG93IGFzIGFueSkuY2hyb21lIHx8IGhhc1Y4QnJlYWtJdGVyYXRvcikgJiYgISFDU1MgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UKTtcclxuXHJcbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXHJcbiAgLy8gZW5zdXJlIHRoYXQgV2Via2l0IHJ1bnMgc3RhbmRhbG9uZSBhbmQgaXMgbm90IHVzZWQgYXMgYW5vdGhlciBlbmdpbmUncyBiYXNlLlxyXG4gIFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxyXG4gICAgICAvQXBwbGVXZWJLaXQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLkJMSU5LICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xyXG4gIElPUyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhKHdpbmRvdyBhcyBhbnkpLk1TU3RyZWFtO1xyXG5cclxuICAvLyBJdCdzIGRpZmZpY3VsdCB0byBkZXRlY3QgdGhlIHBsYWluIEdlY2tvIGVuZ2luZSwgYmVjYXVzZSBtb3N0IG9mIHRoZSBicm93c2VycyBpZGVudGlmeVxyXG4gIC8vIHRoZW0gc2VsZiBhcyBHZWNrby1saWtlIGJyb3dzZXJzIGFuZCBtb2RpZnkgdGhlIHVzZXJBZ2VudCdzIGFjY29yZGluZyB0byB0aGF0LlxyXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxyXG4gIC8vIGluc3RlYWQgb2YgaGF2aW5nIGFuIHVuc3RhYmxlIGNoZWNrIGZvciBHZWNrby5cclxuICBGSVJFRk9YID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gVHJpZGVudCBvbiBtb2JpbGUgYWRkcyB0aGUgYW5kcm9pZCBwbGF0Zm9ybSB0byB0aGUgdXNlckFnZW50IHRvIHRyaWNrIGRldGVjdGlvbnMuXHJcbiAgQU5EUk9JRCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvYW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLy8gU2FmYXJpIGJyb3dzZXJzIHdpbGwgaW5jbHVkZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlaXIgdXNlckFnZW50LiBTb21lIGJyb3dzZXJzIG1heSBmYWtlXHJcbiAgLy8gdGhpcyBhbmQganVzdCBwbGFjZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlIHVzZXJBZ2VudC4gVG8gYmUgbW9yZSBzYWZlIGFib3V0IFNhZmFyaSBldmVyeVxyXG4gIC8vIFNhZmFyaSBicm93c2VyIHNob3VsZCBhbHNvIHVzZSBXZWJraXQgYXMgaXRzIGxheW91dCBlbmdpbmUuXHJcbiAgU0FGQVJJID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9zYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIHRoaXMuV0VCS0lUO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHkudGhlbWUuY29uZmlnLnJvb3QnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48THlUaGVtZUNvbmZpZz4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignbHkudGhlbWUubmFtZScpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBhY2NlbnQ6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIHdhcm46IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIEx5VGhlbWVDb25maWcge1xuICB0aGVtZXM6IGFueVtdID0gW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFZhbCB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZUNvbG9yIHtcbiAgY29udHJhc3Q6IHN0cmluZztcbn1cbiIsImV4cG9ydCBlbnVtIEludmVydE1lZGlhUXVlcnkge1xuICBObyxcbiAgWWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NZWRpYVF1ZXJ5KG1lZGlhOiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk6IEludmVydE1lZGlhUXVlcnkgPSBJbnZlcnRNZWRpYVF1ZXJ5Lk5vKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICBpZiAobWVkaWEgJiYgaW52ZXJ0TWVkaWFRdWVyeSA9PT0gSW52ZXJ0TWVkaWFRdWVyeS5ZZXMpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBtZWRpYS5zcGxpdCgnLCcpLm1hcChfID0+IGBub3QgJHtffWApO1xuICAgIHJldHVybiBuZXdWYWw7XG4gIH1cbiAgcmV0dXJuIG1lZGlhO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBpc0Rldk1vZGUsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUVfQ09ORklHLCBMeVRoZW1lQ29uZmlnIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3R5bGVDb250ZW50LCBEYXRhU3R5bGUsIFN0eWxlLCBNdWx0aXBsZVN0eWxlcyB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5LCB0cmFuc2Zvcm1NZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcblxubGV0IGNsYXNzSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBmaXJzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZUNvbmZpZz4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgRGF0YVN0eWxlPj4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVDb3JlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9DT05GSUcpIHRoZW1lQ29uZmlnOiBMeVRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUVfQ09ORklHIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLmZpcnN0RWxlbWVudCA9IF9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQ7XG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIHtcbiAgICAgIGlkOiAnbHknLFxuICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTmF0aXZlLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgbWVkaWFTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LW1lZGlhLXN0eWxlLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgcHJpbWFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktc2Vjb25kYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHByaW1hcnlTdHlsZUNvbnRhaW5lcikge1xuICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChtZWRpYVN0eWxlQ29udGFpbmVyKTtcbiAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQocHJpbWFyeVN0eWxlQ29udGFpbmVyKTtcbiAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoc2Vjb25kYXJ5U3R5bGVDb250YWluZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LW1lZGlhLXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1wcmltYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LXNlY29uZGFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShfZG9jdW1lbnQuYm9keSwgdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyLCBfZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShfZG9jdW1lbnQuYm9keSwgdGhpcy5wcmltYXJ5U3R5bGVDb250YWluZXIsIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lcik7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyKTtcbiAgICB0aGlzLnNldENvcmVTdHlsZSgpO1xuICAgIGlmICh0aGVtZUNvbmZpZykge1xuICAgICAgdGhlbWVDb25maWcudGhlbWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuYWRkKG5ldyBpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbmV3IHRoZW1lXG4gICAqIEBwYXJhbSB0aGVtZTogVGhlbWVDb25maWdcbiAgICovXG4gIGFkZCh0aGVtZTogVGhlbWVDb25maWcpIHtcbiAgICB0aGlzLl90aGVtZU1hcC5zZXQodGhlbWUubmFtZSwgdGhlbWUpO1xuICAgIHRoaXMuX3N0eWxlTWFwLnNldCh0aGVtZS5uYW1lLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgZ2V0KG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl90aGVtZU1hcC5nZXQobmFtZSk7XG4gIH1cbiAgZ2V0U3R5bGVNYXAobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIHNldFVwU3R5bGUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxudWxsPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fw4TCuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cbiAgc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPG51bGw+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIHJldHVybiB0aGlzLl/DhMK4cmVhdGVTdHlsZSh1bmRlZmluZWQsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZUNvcmVNYXAsICdyb290JywgdGhpcy5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG5cbiAgX8OEwrhyZWF0ZVN0eWxlPFQ+KHRoZW1lQ29uZmlnOiBhbnksIGtleSwgc3R5bGU6IFN0eWxlPFQ+LCBtYXBTdHlsZXM6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4sIF9mb3I6IHN0cmluZywgX2luOiBhbnksIF9tZWRpYT86IHN0cmluZywgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnkpIHtcbiAgICBpZiAobWFwU3R5bGVzLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gbWFwU3R5bGVzLmdldChrZXkpLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpZCA9IGBrJHsoY2xhc3NJZCsrKS50b1N0cmluZygzNil9YDtcbiAgICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGNvbnN0IG1lZGlhID0gdHJhbnNmb3JtTWVkaWFRdWVyeShfbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICAgICAgY29uc3Qgc3R5bGVDb250ZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDxUPih0aGVtZUNvbmZpZywgc3R5bGUsIGlkLCBtZWRpYSkpO1xuICAgICAgY29uc3Qgc2F2ZUluID0gbWVkaWEgPyB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIgOiBfaW47XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCwgc3R5bGVDb250ZW50KTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc2F2ZUluLCBzdHlsZUVsZW1lbnQpO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN0eWxlRWxlbWVudCwgJ3N0eWxlX2RhdGEnLCBgJHtfZm9yfcOCwrfDgsK3w4LCtyR7aWR9w4LCt8OCwrfDgsK3JHtrZXl9YCk7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhU3R5bGUgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgc3R5bGVFbGVtZW50LFxuICAgICAgICBtZWRpYVxuICAgICAgfTtcbiAgICAgIG1hcFN0eWxlcy5zZXQoa2V5LCBkYXRhU3R5bGUpO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgfVxuXG4gIC8qKiAjc3R5bGUgKi9cbiAgX2NyZWF0ZVN0eWxlQ29udGVudDxUPih0aGVtZUNvbmZpZzogVCwgc3R5bGVzOiBTdHlsZTxUPiwgaWQ6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHR5cGYgPSB0eXBlb2Ygc3R5bGVzO1xuICAgIGlmICh0eXBmID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRvTWVkaWEoYC4ke2lkfXske3N0eWxlc319YCwgbWVkaWEpO1xuICAgIH0gZWxzZSBpZiAodHlwZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRvTWVkaWEoYC4ke2lkfXskeyhzdHlsZXMgYXMgU3R5bGVDb250ZW50PFQ+KSh0aGVtZUNvbmZpZyl9fWAsIG1lZGlhKTtcbiAgICB9XG4gICAgbGV0IGNvbnRlbnQgPSAnJztcbiAgICBmb3IgKGNvbnN0IGtleSQgaW4gc3R5bGVzIGFzIE11bHRpcGxlU3R5bGVzPFQ+KSB7XG4gICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSQpKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHN0eWxlc1trZXkkXTtcbiAgICAgICAgY29uc3QgdGV4dCA9IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgPyB2YWwodGhlbWVDb25maWcpIDogdmFsO1xuICAgICAgICBjb250ZW50ICs9IGAuJHtpZH0ke2tleSR9eyR7dGV4dH19YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvTWVkaWEoY29udGVudCwgbWVkaWEpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb3JlU3R5bGUoKSB7XG4gICAgY29uc3QgY2xhc3NuYW1lID0gdGhpcy5zZXRVcFN0eWxlKCdyb290Ym9keScsIHtcbiAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgIGBtYXJnaW46MDtgXG4gICAgICApLFxuICAgICAgJywgKiwgKjphZnRlciwgKjpiZWZvcmUnOiAoKSA9PiAoXG4gICAgICAgIGAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7YCArXG4gICAgICAgIGAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7YCArXG4gICAgICAgIGBib3gtc2l6aW5nOiBib3JkZXItYm94O2BcbiAgICAgIClcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2RvY3VtZW50LmJvZHksIGNsYXNzbmFtZSk7XG4gIH1cblxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgaWYgKG9sZENsYXNzbmFtZSkge1xuICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3NuYW1lKTtcbiAgICB9XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmV3Q2xhc3NuYW1lKTtcbiAgfVxuXG59XG5cbi8qKlxuICogQ29udmVydGVyIHRvIG1lZGlhIHF1ZXJ5IGlmIGBtZWRpYWAgaXMgcHJlc2VudFxuICogQHBhcmFtIHRleHQgc3R5bGUgY29udGVudFxuICogQHBhcmFtIG1lZGlhIG1lZGlhIHF1ZXJ5XG4gKi9cbmZ1bmN0aW9uIHRvTWVkaWEodGV4dDogc3RyaW5nLCBtZWRpYT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gIGlmICh0eXBlb2YgbWVkaWEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHt0ZXh0fX1gO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobWVkaWEpKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIG1lZGlhLmZvckVhY2goXyA9PiByZXN1bHQgKz0gYEBtZWRpYSAke199eyR7dGV4dH19YCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gdGV4dDtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgSW5qZWN0LCBPcHRpb25hbCwgaXNEZXZNb2RlLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3R5bGUsIFN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbnRlcmZhY2UgU3R5bGVzRWxlbWVudE1hcCB7XG4gIGVsOiBhbnk7XG59XG5cbmVudW0gVHlwZVN0eWxlIHtcbiAgTXVsdGlwbGUsXG4gIE9ubHlPbmVcbn1cbmNvbnN0IFNUWUxFX01BUDQ6IFN0eWxlTWFwNCA9IHt9O1xuZXhwb3J0IGludGVyZmFjZSBTdHlsZU1hcDQge1xuICBbaWQ6IHN0cmluZ106IHtcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMjxhbnk+IHwgU3R5bGVzMlxuICAgIHR5cGU6IFR5cGVTdHlsZVxuICAgIHByaW9yaXR5OiBudW1iZXJcbiAgICBjc3M6IHtcbiAgICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHN0cmluZ1xuICAgIH0gfCBzdHJpbmdcbiAgICByZXF1aXJlVXBkYXRlPzogYm9vbGVhblxuICB9O1xufVxuXG4vLyBpbnRlcmZhY2UgU3R5bGVNYXAwMyB7XG4vLyAgIFtpZDogc3RyaW5nXTogeyAvLyBleGFtcGxlOiBseVRhYnNcbi8vICAgICBzdHlsZXM6IFN0eWxlc0ZuMjxhbnk+IHwgU3R5bGVzMixcbi8vICAgICBtZWRpYT86IHN0cmluZyxcbi8vICAgICB0eXBlU3R5bGU/OiBUeXBlU3R5bGUsXG4vLyAgICAgdGhlbWVzOiB7IC8vIGV4YW1wbGU6IG1pbmltYS1kYXJrXG4vLyAgICAgICAvKiogQ3NzICovXG4vLyAgICAgICBkZWZhdWx0Pzogc3RyaW5nLFxuLy8gICAgICAgW3RoZW1lTmFtZTogc3RyaW5nXTogc3RyaW5nXG4vLyAgICAgfVxuLy8gICB9O1xuLy8gfVxuXG4vLyBjb25zdCBTVFlMRV9NQVBfMDM6IFN0eWxlTWFwMDMgPSB7fSBhcyBhbnk7XG5cbmNvbnN0IFNUWUxFX01BUDoge1xuICBba2V5OiBzdHJpbmddOiBNYXA8c3RyaW5nLCBTdHlsZXNFbGVtZW50TWFwPlxufSA9IHt9O1xuY29uc3QgQ0xBU1NFU19NQVA6IHtcbiAgW2lkT3JUaGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICBbY2xhc3NOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZ1xufSA9IHt9O1xuY29uc3QgU1RZTEVfS0VZU19NQVAgPSB7fTtcbmxldCBuZXh0SWQgPSAwO1xuLy8gZnVuY3Rpb24gZm4oKSB7XG4vLyAgIHJldHVybiBDTEFTU0VTX01BUDtcbi8vIH1cbi8vIGNvbnNvbGUubG9nKHtmbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNJbkRvY3VtZW50IHtcbiAgc3R5bGVzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXToge1xuICAgICAgW2tleTogc3RyaW5nXTogSFRNTFN0eWxlRWxlbWVudFxuICAgIH1cbiAgfSA9IHt9O1xuICBzdHlsZUNvbnRhaW5lcnMgPSBuZXcgTWFwPG51bWJlciwgSFRNTEVsZW1lbnQ+KCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lMiB7XG4gIGNvbmZpZzogVGhlbWVDb25maWc7XG4gIF9zdHlsZU1hcDogTWFwPHN0cmluZywgRGF0YVN0eWxlPjtcbiAgcHJlZml4ID0gJ2snO1xuICBpbml0aWFsVGhlbWU6IHN0cmluZztcbiAgZWxlbWVudHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBIVE1MU3R5bGVFbGVtZW50XG4gIH07XG4gIHByaXZhdGUgX3N0eWxlTWFwMjogTWFwPHN0cmluZywgU3R5bGVzRWxlbWVudE1hcD47XG5cbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuX3N0eWxlTWFwMiA9IHRoZW1lTmFtZSBpbiBTVFlMRV9NQVBcbiAgICAgID8gU1RZTEVfTUFQW3RoZW1lTmFtZV1cbiAgICAgIDogU1RZTEVfTUFQW3RoZW1lTmFtZV0gPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVOYW1lKTtcbiAgICAgIHRoaXMuX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGVtZU5hbWUgaW4gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1xuICAgICAgPyB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV1cbiAgICAgIDogdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdID0ge307XG4gICAgICB0aGlzLl9jcmVhdGVJbnN0YW5jZUZvclRoZW1lKHRoZW1lTmFtZSk7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbFRoZW1lKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRoZW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2V0VXBTdHlsZTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPFQ+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgIHJldHVybiB0aGlzLmNvcmUuX8OEwrhyZWF0ZVN0eWxlPFQ+KHRoaXMuY29uZmlnLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVNYXAsIG5hbWUsIHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBzZXRVcFN0eWxlU2Vjb25kYXJ5PFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fw4TCuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIGFkZFN0eWxlPFQ+KGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZTxUPiwgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5hZGRDc3MoaWQsIHN0eWxlIGFzIGFueSwgcHJpb3JpdHkpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgfVxuICAgIGVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgLy8gdGhpcy5fc3R5bGVNYXAyLmZvckVhY2goZGF0YVN0eWxlID0+IHtcbiAgICAvLyAgIGRhdGFTdHlsZS5lbC5pbm5lclRleHQgPSB0aGlzLl9jcmVhdGVTdHlsZUMgb250ZW50MihkYXRhU3R5bGUuc3R5bGVzLCBkYXRhU3R5bGUuaWQpO1xuICAgIC8vIH0pO1xuICAgIC8vIGZvciAoY29uc3Qga2V5IGluIFNUWUxFX01BUF8wMykge1xuICAgIC8vICAgaWYgKFNUWUxFX01BUF8wMy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgLy8gICAgIGNvbnN0IHsgc3R5bGVzLCB0eXBlU3R5bGUsIG1lZGlhIH0gPSBTVFlMRV9NQVBfMDNba2V5XTtcbiAgICAvLyAgICAgLy8gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIGtleSwgdHlwZVN0eWxlLCB0aGlzLmNvcmUucmVuZGVyZXIsIHRydWUsIG1lZGlhKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgdGhpcy5fc3R5bGVNYXAuZm9yRWFjaCgoZGF0YVN0eWxlKSA9PiB7XG4gICAgICBkYXRhU3R5bGUuc3R5bGVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuY29yZS5fY3JlYXRlU3R5bGVDb250ZW50KHRoaXMuY29uZmlnLCBkYXRhU3R5bGUuc3R5bGUsIGRhdGFTdHlsZS5pZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycywgc3R5bGVzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgY29uc3QgY3VycmVudFN0eWxlcyA9IHRoaXMuZWxlbWVudHM7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY3VycmVudFN0eWxlcykge1xuICAgICAgaWYgKGN1cnJlbnRTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBzdHlsZURhdGEgPSBTVFlMRV9NQVA0W2tleV07XG4gICAgICAgIGlmIChzdHlsZURhdGEucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVEYXRhLnN0eWxlcywga2V5LCBzdHlsZURhdGEucHJpb3JpdHksIHN0eWxlRGF0YS50eXBlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBtZWRpYSkgYXMgc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBpZCB1bmlxdWUgaWQgZm9yIHN0eWxlIGdyb3VwXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiwgaWQ/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3SWQgPSBpZCB8fCAnZ2xvYmFsJztcbiAgICAvLyBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk11bHRpcGxlKTtcbiAgfVxuXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQyPFQ+KFxuICAgIHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMixcbiAgICBpZDogc3RyaW5nLFxuICAgIHByaW9yaXR5OiBudW1iZXIsXG4gICAgdHlwZTogVHlwZVN0eWxlLFxuICAgIGZvckNoYW5nZVRoZW1lPzogYm9vbGVhbixcbiAgICBtZWRpYT86IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBzdHlsZU1hcCA9IChpZCBpbiBTVFlMRV9NQVA0XG4gICAgPyBTVFlMRV9NQVA0W2lkXVxuICAgIDogU1RZTEVfTUFQNFtpZF0gPSB7XG4gICAgICBwcmlvcml0eSxcbiAgICAgIHN0eWxlcyxcbiAgICAgIHR5cGUsXG4gICAgICBjc3M6IHt9XG4gICAgfSk7XG4gICAgLy8gY29uc3Qgc3R5bGVzMiA9IHRoaXMuY29uZmlnLm5hbWUgaW4gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1xuICAgIC8vID8gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGlzLmNvbmZpZy5uYW1lXVxuICAgIC8vIDogdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGlzLmNvbmZpZy5uYW1lXSA9IHt9O1xuICAgIC8vIGNvbnNvbGUubG9nKFxuICAgIC8vICAgJ2NjYycsIHR5cGVvZiBzdHlsZU1hcC5jc3MgIT09ICdzdHJpbmcnICYmICEoaWQgaW4gc3R5bGVNYXAuY3NzKSxcbiAgICAvLyAgIHR5cGVvZiBDTEFTU0VTX01BUFtpZF0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBDTEFTU0VTX01BUFtpZF0gPT09ICdvYmplY3QnIHx8IENMQVNTRVNfTUFQW3RoaXMuY29uZmlnLm5hbWVdW2lkXVxuICAgIC8vICk7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gdGhpcy5pbml0aWFsVGhlbWU7XG4gICAgY29uc3QgaXNDcmVhdGVkID0gKGlkIGluIENMQVNTRVNfTUFQKSB8fCBDTEFTU0VTX01BUFt0aGVtZU5hbWVdW2lkXTtcbiAgICBpZiAoIWlzQ3JlYXRlZCB8fCBmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgLyoqIGNyZWF0ZSBuZXcgc3R5bGUgZm9yIG5ldyB0aGVtZSAqL1xuICAgICAgbGV0IGNzcztcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIENMQVNTRVNfTUFQW2lkXSA9IHt9O1xuICAgICAgICAvLyBjb25zdCB0aGVtZU1hcCA9IHRoaXMuY29uZmlnLm5hbWUgaW4gc3R5bGVNYXAuY2xhc3Nlc1xuICAgICAgICAvLyA/IHN0eWxlTWFwLmNsYXNzZXNbdGhpcy5jb25maWcubmFtZV1cbiAgICAgICAgLy8gOiBzdHlsZU1hcC5jbGFzc2VzW3RoaXMuY29uZmlnLm5hbWVdID0ge307XG4gICAgICAgIC8vIGNvbnN0IGNsYXNzTmFtZSA9IGlkIGluICh0aGVtZU1hcCBhcyBPYmplY3QpXG4gICAgICAgIC8vID8gdGhlbWVNYXBbaWRdXG4gICAgICAgIC8vIDogdGhlbWVNYXBbaWRdID0gdGhpcy5fbmV4dElkKCk7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXModGhpcy5jb25maWcpLCB0aGVtZU5hbWUsIGlzQ3JlYXRlZCwgaWQsIHR5cGUsIG1lZGlhKTtcbiAgICAgICAgaWYgKCFmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICAgIHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdID0gY3NzO1xuICAgICAgICAgIHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBjcmVhdGUgYSBuZXcgaWQgZm9yIHN0eWxlIHRoYXQgZG9lcyBub3QgPC08cmVxdWlyZT4tPiBjaGFuZ2VzICovXG4gICAgICAgIENMQVNTRVNfTUFQW2lkXSA9IHRydWUgYXMgYW55O1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzLCB0aGVtZU5hbWUsIGlzQ3JlYXRlZCwgaWQsIHR5cGUsIG1lZGlhKTtcbiAgICAgICAgc3R5bGVNYXAuY3NzID0gY3NzO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgc3R5bGVFbGVtZW50KTtcbiAgICAgIC8vIGlmICghdGhpcy5fc3R5bGVNYXAyLmhhcyhpZCkpIHtcbiAgICAgIC8vICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAvLyAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVUZXh0KGNzcyk7XG4gICAgICAvLyAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgICAvLyAgIHRoaXMuX3N0eWxlTWFwMi5zZXQoaWQsIHtcbiAgICAgIC8vICAgICBlbDogc3R5bGVFbGVtZW50XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfVxuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRzW2lkXVxuICAgICAgPyB0aGlzLmVsZW1lbnRzW2lkXVxuICAgICAgOiB0aGlzLmVsZW1lbnRzW2lkXSA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShcbiAgICAgICAgY3NzXG4gICAgICApO1xuICAgICAgaWYgKGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSksIGVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiAoIShpZCBpbiB0aGlzLmVsZW1lbnRzKSkge1xuICAgICAgLy8gY29uc3QgaHRtbFN0eWxlID0gdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKFxuICAgICAgLy8gICB0eXBlb2Ygc3R5bGVNYXAuY3NzID09PSAnc3RyaW5nJ1xuICAgICAgLy8gICA/IHN0eWxlTWFwLmNzc1xuICAgICAgLy8gICA6IHN0eWxlTWFwLmNzc1t0aGlzLmNvbmZpZy5uYW1lXVxuICAgICAgLy8gKTtcbiAgICAgIC8vIHRoaXMuZWxlbWVudHNbaWRdID0gaHRtbFN0eWxlO1xuICAgICAgLy8gdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIGh0bWxTdHlsZSk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IHR5cGVvZiBDTEFTU0VTX01BUFtpZF0gPT09ICdzdHJpbmcnXG4gICAgPyBDTEFTU0VTX01BUFtpZF1cbiAgICA6IHR5cGVvZiBDTEFTU0VTX01BUFtpZF0gPT09ICdvYmplY3QnXG4gICAgPyBDTEFTU0VTX01BUFtpZF1cbiAgICA6IENMQVNTRVNfTUFQW3RoZW1lTmFtZV1baWRdO1xuICAgIHJldHVybiBjbGFzc2VzO1xuXG4gICAgLy8gY29uc3Qgc3R5bGUgPSB0aGlzLl9zdHlsZU1hcDIuZ2V0KGlkKTtcbiAgICAvLyBpZiAoIXRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXMuaGFzKGlkKSkge1xuICAgIC8vICAgdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlcy5hZGQoaWQpO1xuICAgIC8vICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIHN0eWxlLmVsKTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKGZvckNoYW5nZVRoZW1lICYmIHN0eWxlTWFwLnRoZW1lc1t0aGlzLmNvbmZpZy5uYW1lXSkge1xuICAgIC8vICAgc3R5bGUuZWwuaW5uZXJUZXh0ID0gc3R5bGVNYXAudGhlbWVzW3RoaXMuY29uZmlnLm5hbWVdO1xuICAgIC8vIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlc0Jyb3dzZXIoXG4gICAgc3R5bGVzOiBTdHlsZXNGbjI8YW55PiB8IFN0eWxlczIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW5cbiAgKSB7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHByaW9yaXR5ID0gMCkge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgaWYgKCFzdHlsZUNvbnRhaW5lcnMuaGFzKHByaW9yaXR5KSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudChgbHktcy1jYCk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3ByaW9yaXR5JywgYCR7cHJpb3JpdHl9YCk7XG4gICAgICB9XG4gICAgICBzdHlsZUNvbnRhaW5lcnMuc2V0KHByaW9yaXR5LCBlbCk7XG4gICAgICBpZiAoc3R5bGVDb250YWluZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBlbCwgdGhpcy5fZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gICAgfVxuICAgIGNvbnN0IHJlZkNoaWxkID0gdGhpcy5maW5kTm9kZShwcmlvcml0eSk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KSwgcmVmQ2hpbGQpO1xuICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE5vZGUoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgY29uc3Qga2V5cyA9IChBcnJheS5mcm9tKHN0eWxlQ29udGFpbmVycy5rZXlzKCkpKS5zb3J0KCk7XG4gICAgY29uc3Qga2V5ID0ga2V5cy5maW5kKF8gPT4gaW5kZXggPCBfKTtcbiAgICByZXR1cm4gKGtleSAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoISh0aGVtZU5hbWUgaW4gQ0xBU1NFU19NQVApKSB7XG4gICAgICBDTEFTU0VTX01BUFt0aGVtZU5hbWVdID0ge307XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lcjtcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzOiBTdHlsZXMyLCB0aGVtZU5hbWU6IHN0cmluZywgX2NsYXNzZXNfOiBzdHJpbmcgfCB7fSwgaWQ6IHN0cmluZywgdHlwZVN0eWxlOiBUeXBlU3R5bGUsIG1lZGlhPzogc3RyaW5nKSB7XG4gIC8vIGxldCBuZXdLZXkgPSAnJztcbiAgLy8gY29uc3Qgc3RyaW5nXG4gIC8vIGNvbnN0IHRoZW1lTWFwID0gY2xhc3Nlc1t0aGVtZU5hbWVdID8gY2xhc3Nlc1t0aGVtZU5hbWVdIDogY2xhc3Nlc1t0aGVtZU5hbWVdID0ge307XG4gIGlmICh0eXBlU3R5bGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lKSB7XG4gICAgLyoqIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXcgKi9cbiAgICBjb25zdCBjbGFzc05hbWUgPSBDTEFTU0VTX01BUFtpZF1cbiAgICA/IENMQVNTRVNfTUFQW2lkXSA9IF9jbGFzc2VzXyB8fCBjcmVhdGVOZXh0SWQoKVxuICAgIDogQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF0gPSBfY2xhc3Nlc18gfHwgY3JlYXRlTmV4dElkKCk7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBjc3MgPSBgLiR7Y2xhc3NOYW1lfXske3N0eWxlc319YDtcbiAgICAgIC8vIFNUWUxFX01BUDRbaWRdLnJ1bGVzID0gc3R5bGVzO1xuICAgICAgcmV0dXJuIG1lZGlhID8gdG9NZWRpYShjc3MsIG1lZGlhKSA6IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZXMgPSBzdHlsZVRvU3RyaW5nKHN0eWxlcywgbnVsbCwgYC4ke2NsYXNzTmFtZX1gKTtcbiAgICAgIHJldHVybiBydWxlcztcbiAgICB9XG4gIH1cbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgLy8gY29uc3QgY2xhc3Nlc01hcCA9IGlkIGluIHRoZW1lTWFwXG4gIC8vID8gdGhlbWVNYXBbaWRdXG4gIC8vIDogdGhlbWVNYXBbaWRdID0ge307XG4gIGNvbnN0IGNsYXNzZXMgPSBDTEFTU0VTX01BUFtpZF1cbiAgPyBDTEFTU0VTX01BUFtpZF0gPSBfY2xhc3Nlc18gfHwge31cbiAgOiBDTEFTU0VTX01BUFt0aGVtZU5hbWVdW2lkXSA9IF9jbGFzc2VzXyB8fCB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3Nlc1trZXldIHx8IChjbGFzc2VzW2tleV0gPSBpc0Rldk1vZGUoKSA/IHRvQ2xhc3NOYW1lVmFsaWQoYCR7aWR9LS0tJHtrZXl9LSR7Y3JlYXRlTmV4dElkKCl9YCkgOiBjcmVhdGVOZXh0SWQoKSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyh2YWx1ZSBhcyBTdHlsZXMyLCBudWxsLCBgLiR7Y2xhc3NOYW1lfWApO1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGlzIHN0cmluZycsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUtleUZyYW1lKG5hbWU6IHN0cmluZywgb2I6IE9iamVjdCkge1xuLy8gICBsZXQgY29udGVudCA9IGBAa2V5ZnJhbWVzICR7bmFtZX17YDtcbi8vICAgZm9yIChjb25zdCBrZXkgaW4gb2IpIHtcbi8vICAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuLy8gICAgICAgY29uc3QgZWxlbWVudCA9IG9iW2tleV07XG4vLyAgICAgICBjb250ZW50ICs9IGAke2tleX0lICR7c3R5bGVUb1N0cmluZyhlbGVtZW50LCAnJyl9YDtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgY29udGVudCArPSBgfWA7XG4vLyAgIHJldHVybiBjb250ZW50O1xuLy8gfVxuLy8gY29uc29sZS5sb2coJ2tleWZyYW1lJywgY3JlYXRlS2V5RnJhbWUoJ215YW5pbWF0aW9uJywga2V5RnJhbWVPYmplY3QpKTtcblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhvYjogT2JqZWN0LCBydWxlc01hcDoge30gfCBzdHJpbmcsIGNsYXNzTmFtZT86IHN0cmluZywgcGFyZW50Q2xhc3NOYW1lPzogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBrZXlBbmRWYWx1ZSA9ICcnO1xuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gcnVsZXNNYXBbc3R5bGVLZXldID0gbnVsbDtcbiAgICAgICAgY29udGVudCArPSBzdHlsZVRvU3RyaW5nKGVsZW1lbnQgYXMgU3R5bGVzMiwgbnVsbCwgc3R5bGVLZXksIGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdTdHlsZUtleSA9IHRvSHlwaGVuQ2FzZUNhY2hlKHN0eWxlS2V5KTtcbiAgICAgICAgLy8gY29uc3Qgc3R5bGUgPSBydWxlc01hcFtuZXdTdHlsZUtleV0gPSBlbGVtZW50O1xuICAgICAgICBrZXlBbmRWYWx1ZSArPSBgJHtuZXdTdHlsZUtleX06JHtlbGVtZW50fTtgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgbGV0IG5ld0NsYXNzTmFtZSA9ICcnO1xuICAgIGlmIChwYXJlbnRDbGFzc05hbWUpIHtcbiAgICAgIG5ld0NsYXNzTmFtZSArPSBjbGFzc05hbWUuaW5kZXhPZignJicpID09PSAwID8gYCR7cGFyZW50Q2xhc3NOYW1lfSR7Y2xhc3NOYW1lLnNsaWNlKDEpfWAgOiBgJHtwYXJlbnRDbGFzc05hbWV9IC4ke2NsYXNzTmFtZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBjb250ZW50ICs9IGAke25ld0NsYXNzTmFtZX1gO1xuICB9XG4gIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IF9wYXRoOiBzdHJpbmdbXSA9IHBhdGggaW5zdGFuY2VvZiBBcnJheSA/IHBhdGggOiBwYXRoLnNwbGl0KCc6Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBvYmogPSBvYmpbX3BhdGhbaV1dIHx8IHBhdGg7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cbmZ1bmN0aW9uIHRvQ2xhc3NOYW1lVmFsaWQoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgcyA9IHN0ci5yZXBsYWNlKC9eWzAtOV18W15cXHdcXC1dL2csIF8gPT4ge1xuICAgIHJldHVybiBgXyR7Xy5jaGFyQ29kZUF0KDApfWA7XG4gIH0pO1xuICByZXR1cm4gdG9IeXBoZW5DYXNlKHMpO1xufVxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2VDYWNoZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyIGluIFNUWUxFX0tFWVNfTUFQXG4gID8gU1RZTEVfS0VZU19NQVBbc3RyXVxuICA6IFNUWUxFX0tFWVNfTUFQW3N0cl0gPSB0b0h5cGhlbkNhc2Uoc3RyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHRvTWVkaWEoY3NzOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHtjc3N9fWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5leHRJZCgpIHtcbiAgcmV0dXJuIGBlJHsobmV4dElkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuXG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBOZ01vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl92aWV3UmVmLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZU1vZHVsZSB7XHJcblxyXG59XHJcbiIsImZ1bmN0aW9uIGlzV2luZG93KG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW06IGFueSkge1xyXG4gICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0VmlldztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGRvY0VsZW06IGFueSwgd2luOiBhbnksXHJcbiAgICAgICAgYm94ID0ge3RvcDogMCwgbGVmdDogMH07XHJcbiAgICBjb25zdCBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcclxuXHJcbiAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH1cclxuICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcclxuICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxyXG4gICAgfTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIElzQm9vbGVhbigpOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBkZWZpbml0aW9uLmdldCxcbiAgICAgICAgc2V0OiBuZXdWYWx1ZSA9PiB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5zZXQodG9Cb29sZWFuKG5ld1ZhbHVlKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1snX18nICsga2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICB0aGlzWydfXycgKyBrZXldID0gdG9Cb29sZWFuKG5ld1ZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdEVudHJ5KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGRlZmF1bHRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbCc7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgXG4gICAgICAgICAgICBbYmddLFxuICAgICAgICAgICAgW2NvbG9yXSxcbiAgICAgICAgICAgIFtyYWlzZWRdLFxuICAgICAgICAgICAgW3JhaXNlZF1bc2hhZG93Q29sb3JdLFxuICAgICAgICAgICAgW2x5LWJ1dHRvbl1bb3V0bGluZWRdLFxuICAgICAgICAgICAgW2VsZXZhdGlvbl0sXG4gICAgICAgICAgICBbZWxldmF0aW9uXVtzaGFkb3dDb2xvcl0sXG4gICAgICAgICAgICBbZGlzYWJsZWRdLFxuICAgICAgICAgICAgbHktY2FyZFxuICAgICAgICAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3JhaXNlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb3V0bGluZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXV0b0NvbnRyYXN0OiBib29sZWFuO1xuICBwcml2YXRlIF9pc0NvbnRyYXN0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGJnOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICBASW5wdXQoKSBzZXQgcmFpc2VkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9yYWlzZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkOyB9XG5cbiAgQElucHV0KCkgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG5cbiAgQElucHV0KCkgc2V0IG91dGxpbmVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9vdXRsaW5lZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBvdXRsaW5lZCgpIHsgcmV0dXJuIHRoaXMuX291dGxpbmVkOyB9XG5cbiAgQElucHV0KCkgZWxldmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNoYWRvd0NvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgcHVibGljIHNldEF1dG9Db250cmFzdCgpIHtcbiAgICB0aGlzLl9hdXRvQ29udHJhc3QgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5faXNDb250cmFzdCA9IHRoaXMuX2F1dG9Db250cmFzdCAmJiAhdGhpcy5jb2xvciB8fCB0aGlzLmNvbG9yID09PSAnYXV0byc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGNvbW1vbi0tLS06JHtcbiAgICAgIHRoaXMuYmcgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgdGhpcy5jb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgIHRoaXMucmFpc2VkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICB0aGlzLmVsZXZhdGlvbiB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRsaW5lZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgdGhpcy5zaGFkb3dDb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0NvbnRyYXN0IHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlPGFueT4obmV3S2V5LCAodGhlbWUpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlOiB7XG4gICAgICAgIGJvcmRlcj86IHN0cmluZyxcbiAgICAgICAgYmFja2dyb3VuZD86IHN0cmluZyxcbiAgICAgICAgY29sb3I/OiBzdHJpbmcsXG4gICAgICAgIGJveFNoYWRvdz86IHN0cmluZyxcbiAgICAgICAgcG9pbnRlckV2ZW50cz86ICdub25lJztcbiAgICAgICAgJyY6aG92ZXInPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICAnJjphY3RpdmUnPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9XG4gICAgICB9ID0ge307XG4gICAgICBpZiAodGhpcy5vdXRsaW5lZCkge1xuICAgICAgICBzdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcic7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLnRleHQuZGlzYWJsZWQ7XG4gICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIGlmICh0aGlzLmJnKSB7XG4gICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJ1dHRvbi5kaXNhYmxlZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuYmcpIHtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuY29sb3JPZih0aGlzLmJnKTtcbiAgICAgICAgICBpZiAodGhpcy5faXNDb250cmFzdCkge1xuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKGAke3RoaXMuYmd9OmNvbnRyYXN0YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghc3R5bGUuY29sb3IgJiYgdGhpcy5jb2xvcikge1xuICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yYWlzZWQgfHwgdGhpcy5lbGV2YXRpb24pIHtcbiAgICAgICAgICBjb25zdCBzaGFkb3dDb2xvciA9ICh0aGlzLnNoYWRvd0NvbG9yICYmIHRoZW1lLmNvbG9yT2YodGhpcy5zaGFkb3dDb2xvcikpIHx8IHN0eWxlLmJhY2tncm91bmQgfHwgc3R5bGUuY29sb3IgfHwgdGhlbWUuY29sb3JTaGFkb3c7XG4gICAgICAgICAgaWYgKCF0aGlzLmJnKSB7XG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uIHx8IDMsIHNoYWRvd0NvbG9yKTtcbiAgICAgICAgICBpZiAoIXRoaXMuZWxldmF0aW9uKSB7XG4gICAgICAgICAgICBzdHlsZVsnJjphY3RpdmUnXSA9IHtcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDgsIHNoYWRvd0NvbG9yKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHlsZSBhcyBhbnk7XG4gICAgfSwgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICAvKip+ICovXG4gICAgLy8gY29uc3QgcmFpc2Vkw4TCuGV5ID0gdGhpcy5yYWlzZWQgPT09IHRydWUgPyAncmFpc2VkJyA6ICcnO1xuICAgIC8vIGxldCBrZXkgPSAnJztcbiAgICAvLyBpZiAoKHRoaXMuY29udHJhc3QgJiYgIXRoaXMuY29sb3IgfHwgdGhpcy5jb2xvciA9PT0gJ2F1dG8nKSAmJiB0aGlzLmJnKSB7XG4gICAgLy8gICBrZXkgPSBgYmNyLWNvbnRyYXN0OiR7dGhpcy5iZ30ke3JhaXNlZMOEwrhleX0ke3RoaXMuZWxldmF0aW9ufWA7XG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS0ke2tleX1gLCB0aGlzLmNvbnRyYXN0U3R5bGUuYmluZCh0aGlzKSwgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuYmcgJiYgdGhpcy5jb2xvcikge1xuICAgIC8vICAga2V5ID0gYGImw4TCuCR7dGhpcy5iZ30ke3RoaXMuY29sb3J9JHt0aGlzLnJhaXNlZH0ke3RoaXMuZWxldmF0aW9ufWA7XG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS0ke2tleX1gLCB0aGlzLmJnQ29sb3JTdHlsZS5iaW5kKHRoaXMpLCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5yYWlzZWQgJiYgIXRoaXMuYmcpIHtcbiAgICAvLyAgIGtleSA9IHJhaXNlZMOEwrhleSArIHRoaXMuY29sb3IgfHwgJyc7XG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlPGFueT4oYGx5LSR7a2V5fWAsIHRoZW1lID0+IHtcbiAgICAvLyAgICAgbGV0IHN0eWxlcyA9IGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5fTtgO1xuICAgIC8vICAgICBsZXQgY29sb3IgPSAnJztcbiAgICAvLyAgICAgbGV0IGNvbG9yU2hhZG93O1xuICAgIC8vICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgIC8vICAgICAgIGNvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuY29sb3IpO1xuICAgIC8vICAgICAgIGNvbG9yU2hhZG93ID0gY29sb3I7XG4gICAgLy8gICAgICAgc3R5bGVzICs9IGBjb2xvcjoke2NvbG9yfTtgO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGNvbG9yU2hhZG93ID0gdGhlbWUuY29sb3JTaGFkb3c7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHRoaXMuX3JhaXNlZCkge1xuICAgIC8vICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgY29sb3JTaGFkb3cpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBzdHlsZXM7XG4gICAgLy8gICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5iZyB8fCB0aGlzLmNvbG9yKSB7XG4gICAgLy8gICBjb25zdCBjaGFuZ2VLZXkgPSB0aGlzLmJnID8gWydiZycsICdiYWNrZ3JvdW5kJywgdGhpcy5iZ10gOiBbJ8OEwrgnLCAnY29sb3InLCB0aGlzLmNvbG9yXTtcbiAgICAvLyAgIGNvbnN0IGNvbG9yID0gY2hhbmdlS2V5WzJdO1xuICAgIC8vICAga2V5ID0gYCR7Y2hhbmdlS2V5WzBdfSR7Y29sb3J9JHt0aGlzLl9yYWlzZWR9JHt0aGlzLmVsZXZhdGlvbn1gO1xuXG4gICAgLy8gICAvKiogQ3JlYXRlIHN0eWxlICovXG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS0ke2tleX1gLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IF9jb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmJnIHx8IHRoaXMuY29sb3IpO1xuICAgIC8vICAgICBsZXQgc3R5bGVzID0gYCR7Y2hhbmdlS2V5WzFdfToke19jb2xvcn07YDtcbiAgICAvLyAgICAgaWYgKHRoaXMuX3JhaXNlZCkge1xuICAgIC8vICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgX2NvbG9yKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gc3R5bGVzO1xuICAgIC8vICAgfSwgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY2xhc3NOYW1lKTtcblxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBrZXkgPSBgcmFpc2VkJHt0aGlzLl9yYWlzZWR9ZWx4eHh4eHh4eCR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAvLyAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5LSR7a2V5fWAsICgpID0+IHtcbiAgICAvLyAgICAgaWYgKHRoaXMuX3JhaXNlZCkge1xuICAgIC8vICAgICAgIHJldHVybiBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgdGhpcy50aGVtZS5jb25maWcuY29sb3JTaGFkb3cpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIHJldHVybiBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCgwLCB0aGlzLnRoZW1lLmNvbmZpZy5jb2xvclNoYWRvdyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgLy8gfVxuICB9XG4gIC8vIHByaXZhdGUgY29udHJhc3RTdHlsZSgpIHtcbiAgLy8gICBjb25zdCBjc3NCZyA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmJnKTtcbiAgLy8gICB0aGlzLl9jb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZihgJHt0aGlzLmJnfTpjb250cmFzdGApO1xuICAvLyAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZDoke2Nzc0JnfTtjb2xvcjoke3RoaXMuX2NvbG9yfTtgO1xuICAvLyAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgLy8gICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgY3NzQmcpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gc3R5bGVzO1xuICAvLyB9XG5cbiAgLy8gcHJpdmF0ZSBiZ0NvbG9yU3R5bGUoKSB7XG4gIC8vICAgY29uc3QgY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gIC8vICAgY29uc3QgY3NzQ29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5jb2xvcik7XG4gIC8vICAgbGV0IHN0eWxlcyA9IGBiYWNrZ3JvdW5kOiR7Y3NzQmd9O2NvbG9yOiR7Y3NzQ29sb3J9O2A7XG4gIC8vICAgaWYgKHRoaXMuX3JhaXNlZCkge1xuICAvLyAgICAgc3R5bGVzICs9IHNoYWRvd0J1aWxkZXJEZXByZWNhdGVkKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBzdHlsZXM7XG4gIC8vIH1cblxuICBwcml2YXRlIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuY29uc3QgREVGQVVMVF9WQUxVRSA9ICcnO1xuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgY29uc3QgTFlfR0xPQkFMX0NPTlRSQVNUID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCdseS5nbG9iYWwuY29udHJhc3QnKTtcbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCB9IGZyb20gJy4uL3NoYWRvdyc7XHJcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMeVNoYWRvd1NlcnZpY2Uge1xyXG4gIC8qKiBEZWZhdWx0IGVsZXZhdGlvbiAqL1xyXG4gIGVsZXZhdGlvbiA9IDE7XHJcbiAgLyoqIGRlbW86IHNldFNoYWRvdyguLi5bZWxldmF0aW9uLCBjb2xvcl0uLi4pICovXHJcbiAgc2V0U2hhZG93KHRoZW1lOiBMeVRoZW1lMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgdmFsOiBbbnVtYmVyLCBzdHJpbmddLCBvbGRDbGFzc05hbWU/OiBzdHJpbmcpIHtcclxuICAgIGxldCBrZXlzOiBzdHJpbmc7XHJcbiAgICBsZXQgZWxldmF0aW9uOiBudW1iZXI7XHJcbiAgICBsZXQgY29sb3IgPSAnY29sb3JTaGFkb3cnO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBrZXlzID0gdmFsLmpvaW4oJycpO1xyXG4gICAgICBlbGV2YXRpb24gPSB2YWxbMF07XHJcbiAgICAgIGNvbG9yID0gdmFsWzFdIHx8IGNvbG9yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5cyA9IGAke3RoaXMuZWxldmF0aW9ufSR7Y29sb3J9YDtcclxuICAgICAgZWxldmF0aW9uID0gdGhpcy5lbGV2YXRpb247XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0aGVtZS5zZXRVcFN0eWxlKGBzaGFkb3cke2tleXN9YCwgeycnOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHtzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZChlbGV2YXRpb24sIHRoZW1lLmNvbG9yT2YoY29sb3IpKX1gO1xyXG4gICAgfX0pO1xyXG4gICAgdGhlbWUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIGNsYXNzbmFtZSwgb2xkQ2xhc3NOYW1lKTtcclxuICAgIHJldHVybiBjbGFzc25hbWU7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTaGFkb3dTZXJ2aWNlIH0gZnJvbSAnLi9zaGFkb3cuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL2FseWxlLWNvbmZpZy1zZXJ2aWNlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJzpub3QoW3JhaXNlZF0pW25ld1JhaXNlZF0nIH0pXG5leHBvcnQgY2xhc3MgTHlOZXdSYWlzZWQge1xuICBlbGV2YXRpb24gPSAzO1xuICBwcml2YXRlIGN1cnJlbnRDbGFzc05hbWU6IHN0cmluZztcbiAgLyoqIERlZmF1bHQgcmFpc2VkICAqL1xuICBASW5wdXQoKVxuICBzZXQgbmV3UmFpc2VkKHZhbHVlOiBbbnVtYmVyLCBzdHJpbmddKSB7XG4gICAgdGhpcy5jdXJyZW50Q2xhc3NOYW1lID0gdGhpcy5zaGFkb3cuc2V0U2hhZG93KHRoaXMudGhlbWUsIHRoaXMuZWxlbWVudFJlZiwgdGhpcy5yZW5kZXJlciwgWyB2YWx1ZVswXSB8fCB0aGlzLmVsZXZhdGlvbiwgdmFsdWVbMV0gXSwgdGhpcy5jdXJyZW50Q2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBzaGFkb3c6IEx5U2hhZG93U2VydmljZVxuICApIHsgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVRoZW1lXScsXG4gIHByb3ZpZGVyczogW0x5VGhlbWUyXSxcbiAgZXhwb3J0QXM6ICdseVRoZW1lJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRoZW1lQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfbHlUaGVtZTogc3RyaW5nO1xuICAvKipcbiAgICogc2V0IHRoZW1lXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbHlUaGVtZShuYW06IHN0cmluZykge1xuICAgIHRoaXMuX2x5VGhlbWUgPSBuYW07XG4gICAgdGhpcy50aGVtZS5zZXRVcFRoZW1lKG5hbWUpO1xuICB9XG4gIGdldCBseVRoZW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9seVRoZW1lO1xuICB9XG5cbiAgQElucHV0KCkgc2hhcmVkOiB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3NldENvbnRhaW5lclN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldENvbnRhaW5lclN0eWxlKGVsZW1lbnQsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYHRoZW1lOiR7dGhpcy50aGVtZS5jb25maWcubmFtZX1gLCB7XG4gICAgICAnJzogKCkgPT4gKFxuICAgICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLmJhY2tncm91bmQuZGVmYXVsdH07YCArXG4gICAgICAgIGBjb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLnRleHQuZGVmYXVsdH07YCArXG4gICAgICAgIGBmb250LWZhbWlseToke3RoaXMudGhlbWUuY29uZmlnLnR5cG9ncmFwaHkuZm9udEZhbWlseX07YFxuICAgICAgKVxuICAgIH0pO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIGNsYXNzbmFtZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbd2l0aENsYXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlXaXRoQ2xhc3Mge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHt2YWx9JyBpcyBub3QgdmFsaWQgY2xhc3NOYW1lYCk7XG4gICAgfVxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5Q29tbW9uIH0gZnJvbSAnLi9jb21tb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IExZX0dMT0JBTF9DT05UUkFTVCB9IGZyb20gJy4vY29udHJhc3QnO1xuaW1wb3J0IHsgTHlOZXdSYWlzZWQgfSBmcm9tICcuL3JhaXNlZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUaGVtZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5V2l0aENsYXNzIH0gZnJvbSAnLi93aXRoLWNsYXNzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5Q29tbW9uLCBMeU5ld1JhaXNlZCwgTHlUaGVtZUNvbnRhaW5lciwgTHlXaXRoQ2xhc3NdLFxuICBleHBvcnRzOiBbTHlDb21tb24sIEx5TmV3UmFpc2VkLCBMeVRoZW1lQ29udGFpbmVyLCBMeVdpdGhDbGFzc10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTFlfR0xPQkFMX0NPTlRSQVNULCB1c2VWYWx1ZTogZmFsc2UgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q29tbW9uTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3RhYmxlLCBPcHRpb25hbCwgTmdNb2R1bGUsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUNvbnRhaW5lciB7XG4gIHByb3RlY3RlZCBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2x5LW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBBcHBsaWNhdGlvblJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld1JlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbVNlcnZpY2Uge1xuICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuICBwcml2YXRlIF92aWV3UmVmOiBWaWV3UmVmO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyXG4gICkgeyB9XG5cbiAgYXR0YWNoPFQ+KF9ob3N0Vmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgY29tcG9uZW50OiBhbnksIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgICBjb25zdCB2aWV3UmVmID0gX2hvc3RWaWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG4gICAgICB2aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYgPSBfaG9zdFZpZXdDb250YWluZXJSZWY7XG4gICAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IHRoaXMuYWRkQ2hpbGQocm9vdE5vZGUpKTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMub3ZlcmxheUNvbnRhaW5lci5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxuXG4gIGdldERvbUVsZW1lbnRGcm9tQ29tcG9uZW50UmVmKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGRlc3Ryb3lSZWYoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiwgZGVsYXk6IG51bWJlcikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgfVxuICAgIH0sIGRlbGF5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERvbVNlcnZpY2UgfSBmcm9tICcuL2RvbS5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIpIHtcbiAgcmV0dXJuIHBhcmVudENvbnRhaW5lciB8fCBuZXcgTHlPdmVybGF5Q29udGFpbmVyKCk7XG59XG5cbmV4cG9ydCBjb25zdCBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUiA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBPdmVybGF5Q29udGFpbmVyIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIEx5T3ZlcmxheUNvbnRhaW5lcl1dLFxuICB1c2VGYWN0b3J5OiBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZXG59O1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1tEb21TZXJ2aWNlLCBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl1dXG59KVxuZXhwb3J0IGNsYXNzIEx4RG9tTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lLCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBPbkluaXQsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBwaXBlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBlbnVtIEZvY3VzU3RhdHVzIHtcbiAgLyoqbW91c2UgYW5kL29yIHRvdWNoKi9cbiAgREVGQVVMVCA9ICdkZWZhdWx0JyxcbiAgLyoqIGtleWJvYXJkIGFuZC9vciBwcm9ncmFtKi9cbiAgS0VZQk9BUkQgPSAna2V5Ym9hcmQnLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlGb2N1c1N0YXRlXScsXG4gIGV4cG9ydEFzOiAnbHlGb2N1c1N0YXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBzdGF0ZTogRm9jdXNTdGF0dXM7XG4gIHN0YXRlTWFwID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHByaXZhdGUgX2V2ZW50SGFuZGxlcnMgPSBuZXcgTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIF9zdGF0ZVN1YmplY3QgPSBuZXcgU3ViamVjdDxGb2N1c1N0YXR1cz4oKTtcbiAgX3N0YXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIEBPdXRwdXQoKSBseUZvY3VzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c1N0YXR1cz4oKTtcbiAgcHJpdmF0ZSBfZXZlbnRPcHRpb25zID0ge3Bhc3NpdmU6IHRydWV9IGFzIGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVyc1xuICAgICAgLnNldCgnZm9jdXMnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdibHVyJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgndG91Y2hzdGFydCcsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ21vdXNlZG93bicsIHRoaXMub24uYmluZCh0aGlzKSk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNvbnN0IG9uID0gKGV2ZW50OiBGb2N1c0V2ZW50IHwgVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZU1hcC5zZXQoZXZlbnQudHlwZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgb2I6IE9ic2VydmFibGU8Rm9jdXNTdGF0dXM+ID0gdGhpcy5fc3RhdGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24gPSBvYlxuICAgICAgLy8gLmRlYm91bmNlVGltZSgxMTEpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDExMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGU6IEZvY3VzU3RhdHVzKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBlO1xuICAgICAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICAgICAgICB0aGlzLmx5Rm9jdXNDaGFuZ2UuZW1pdChlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0YXRlKCkge1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2JsdXInKSkge1xuICAgICAgdGhpcy5zdGF0ZU1hcC5jbGVhcigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykgJiYgdGhpcy5zdGF0ZU1hcC5oYXMoJ21vdXNlZG93bicpIHx8IHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCd0b3VjaHN0YXJ0JykpIHtcbiAgICAgIHN0YXRlID0gRm9jdXNTdGF0dXMuREVGQVVMVDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLktFWUJPQVJEO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZVN1YmplY3QubmV4dChzdGF0ZSk7XG4gIH1cblxuICBvbihldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5zdGF0ZU1hcC5zZXQoZXZlbnQudHlwZSwgdHJ1ZSk7XG4gICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNsYXNzKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0b2dnbGVDbGFzcyA9IChjbGFzc05hbWU6IHN0cmluZywgc2hvdWxkU2V0OiBib29sZWFuKSA9PiBzaG91bGRTZXQgPyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIDogdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB0b2dnbGVDbGFzcyhgbHktZm9jdXNlZGAsICEhc3RhdGUpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIEZvY3VzU3RhdHVzKSB7XG4gICAgICBpZiAoRm9jdXNTdGF0dXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBGb2N1c1N0YXR1c1trZXldO1xuICAgICAgICB0b2dnbGVDbGFzcyhgbHktJHtjbGFzc05hbWV9LWZvY3VzZWRgLCBzdGF0ZSA9PT0gY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyRWxlbWVudCkge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChudWxsKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlGb2N1c1N0YXRlIH0gZnJvbSAnLi9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5Rm9jdXNTdGF0ZV0sXG4gIGV4cG9ydHM6IFtMeUZvY3VzU3RhdGVdXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZU1vZHVsZSB7IH1cbiIsImV4cG9ydCBjb25zdCBBVUlfVkVSU0lPTiA9ICcxLjcuMC1iZXRhLjUweXJlJztcbmV4cG9ydCBjb25zdCBBVUlfTEFTVF9VUERBVEUgPSAnMjAxOC0wOC0yMFQyMzoxMToyNy40NTRaJztcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4uL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBIYW1tZXJPcHRpb25zLCBIYW1tZXJJbnN0YW5jZSB9IGZyb20gJy4vZ2VzdHVyZS1hbm5vdGF0aW9ucyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcblxuZXhwb3J0IGNvbnN0IExZX0hBTU1FUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPEhhbW1lck9wdGlvbnM+KCdMWV9IQU1NRVJfT1BUSU9OUycpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIHByaXZhdGUgX2hhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gIGV2ZW50czogc3RyaW5nW10gPSB0aGlzLl9oYW1tZXIgPyBbXG4gICAgJ3NsaWRlJyxcbiAgICAnc2xpZGVzdGFydCcsXG4gICAgJ3NsaWRlZW5kJyxcbiAgICAnc2xpZGVyaWdodCcsXG4gICAgJ3NsaWRlbGVmdCdcbiAgXSA6IFtdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX0hBTU1FUl9PUFRJT05TKSBwcml2YXRlIF9oYW1tZXJPcHRpb25zOiBIYW1tZXJPcHRpb25zLFxuICAgIC8vIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYnVpbGRIYW1tZXIoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIYW1tZXJJbnN0YW5jZSB7XG4gICAgLy8gaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgIC8vICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdrLWhhbW1lci1jc3MnLCB7XG4gICAgLy8gICAgICcnOiAoKSA9PiAoXG4gICAgLy8gICAgICAgYHVzZXItc2VsZWN0OiBub25lO2AgK1xuICAgIC8vICAgICAgIGAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtgICtcbiAgICAvLyAgICAgICBgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO2BcbiAgICAvLyAgICAgKVxuICAgIC8vICAgfSk7XG4gICAgLy8gICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIC8vIH1cbiAgICBjb25zdCBtYyA9IG5ldyB0aGlzLl9oYW1tZXIoZWxlbWVudCwgdGhpcy5faGFtbWVyT3B0aW9ucyB8fCB1bmRlZmluZWQpO1xuXG4gICAgY29uc3QgcGFuID0gbmV3IHRoaXMuX2hhbW1lci5QYW4oKTtcbiAgICBjb25zdCBzd2lwZSA9IG5ldyB0aGlzLl9oYW1tZXIuU3dpcGUoKTtcbiAgICBjb25zdCBzbGlkZSA9IHRoaXMuX2NyZWF0ZVJlY29nbml6ZXIocGFuLCB7ZXZlbnQ6ICdzbGlkZScsIHRocmVzaG9sZDogMH0sIHN3aXBlKTtcblxuICAgIHNsaWRlLnJlY29nbml6ZVdpdGgoc3dpcGUpO1xuICAgIHBhbi5yZWNvZ25pemVXaXRoKHN3aXBlKTtcblxuICAgIC8vIEFkZCBjdXN0b21pemVkIGdlc3R1cmVzIHRvIEhhbW1lciBtYW5hZ2VyXG4gICAgbWMuYWRkKFtzd2lwZSwgcGFuLCBzbGlkZV0pO1xuICAgIHJldHVybiBtYztcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgbmV3IHJlY29nbml6ZXIsIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBkZWZhdWx0IHJlY29nbml6ZXJzIG9mIEhhbW1lckpTICovXG4gIHByaXZhdGUgX2NyZWF0ZVJlY29nbml6ZXIoYmFzZTogYW55LCBvcHRpb25zOiBhbnksIC4uLmluaGVyaXRhbmNlczogYW55W10pIHtcbiAgICBjb25zdCByZWNvZ25pemVyID0gbmV3IChiYXNlLmNvbnN0cnVjdG9yKShvcHRpb25zKTtcblxuICAgIGluaGVyaXRhbmNlcy5wdXNoKGJhc2UpO1xuICAgIGluaGVyaXRhbmNlcy5mb3JFYWNoKGl0ZW0gPT4gcmVjb2duaXplci5yZWNvZ25pemVXaXRoKGl0ZW0pKTtcblxuICAgIHJldHVybiByZWNvZ25pemVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBbTHlUaGVtZTJdLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4uL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTHlDb3JlU3R5bGVzIHtcbiAgY2xhc3NlcyA9IHtcbiAgICAvKiogUG9zaXRpb24gYWJzb2x1dGUgKi9cbiAgICBGaWxsOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stYWJzb2x1dGUnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgdG9wOiAwO2AgK1xuICAgICAgICAgIGBib3R0b206IDA7YCArXG4gICAgICAgICAgYGxlZnQ6IDA7YCArXG4gICAgICAgICAgYHJpZ2h0OiAwO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgVmlzdWFsbHlIaWRkZW46IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnay12aXN1YWxseS1oaWRkZW4nLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGJvcmRlcjogMDtgICtcbiAgICAgICAgICBgY2xpcDogcmVjdCgwIDAgMCAwKTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxcHg7YCArXG4gICAgICAgICAgYG1hcmdpbjogLTFweDtgICtcbiAgICAgICAgICBgb3ZlcmZsb3c6IGhpZGRlbjtgICtcbiAgICAgICAgICBgcGFkZGluZzogMDtgICtcbiAgICAgICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgICAgIGB3aWR0aDogMXB4O2AgK1xuICAgICAgICAgIGBvdXRsaW5lOiAwO2AgK1xuICAgICAgICAgIGAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7YCArXG4gICAgICAgICAgYC1tb3otYXBwZWFyYW5jZTogbm9uZTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUpIHsgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVuZGVmaW5lZCB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBVbmRlZmluZWRWYWx1ZSA9IG5ldyBVbmRlZmluZWQoKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgVHlwb2dyYXBoeUNvbmZpZyB7XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBudW1iZXI7XG4gIGxldHRlclNwYWNpbmc/OiBudW1iZXI7XG4gIHRleHRUcmFuc2Zvcm0/OiAndXBwZXJjYXNlJyB8ICdjYXBpdGFsaXplJyB8ICdsb3dlcmNhc2UnO1xuICBndXR0ZXJUb3A/OiBudW1iZXI7XG4gIGd1dHRlckJvdHRvbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBweFRvUmVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy50eXBvZ3JhcGh5LmZvbnRTaXplIC8gMTQ7XG4gICAgcmV0dXJuIGAke3ZhbHVlIC8gdGhpcy50eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSAqIHNpemV9cmVtYDtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcywgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG9ialtfcGF0aFtpXV0gfHwgcGF0aDtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsidG9NZWRpYSIsInRzbGliXzEuX19leHRlbmRzIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQStCLFFBQVE7SUFDckMscUJBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QyxxQkFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLHFCQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMscUJBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDekM7Ozs7OztBQ05ELEFBQ0EscUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUV2QixxQkFBTSxxQkFBcUIsR0FBRyxHQUFHLENBQUM7QUFDbEMscUJBQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLHFCQUFNLDBCQUEwQixHQUFHLElBQUksQ0FBQztBQUN4QyxxQkFBYSxPQUFPLEdBQUc7SUFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENB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