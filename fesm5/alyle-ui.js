import * as _chroma from 'chroma-js';
import { Injectable, InjectionToken, Inject, RendererFactory2, Directive, Input, ElementRef, Renderer2, NgModule, ComponentFactoryResolver, Optional, isDevMode, ViewContainerRef, Output, EventEmitter, ChangeDetectorRef, NgZone, SkipSelf, defineInjectable, inject } from '@angular/core';
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
function shadowBuilder(elevation, color) {
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RandomId = /** @class */ (function () {
    function RandomId() {
    }
    Object.defineProperty(RandomId.prototype, "generate", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ id = (Math.random() + Date.now());
            return id;
        },
        enumerable: true,
        configurable: true
    });
    RandomId.decorators = [
        { type: Injectable },
    ];
    return RandomId;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} el
 * @param {?} parentSelector
 * @return {?}
 */
function getParents(el, parentSelector) {
    // If no parentSelector defined will bubble up all the way to *document*
    if (parentSelector === undefined) {
        parentSelector = 'body';
    }
    var /** @type {?} */ parents = [];
    var /** @type {?} */ p = el.parentNode;
    var /** @type {?} */ pxz = null;
    while (!pxz) {
        var /** @type {?} */ o = p;
        parents.push(o);
        p = o.parentNode;
        pxz = p.querySelector(parentSelector);
    }
    // parents.push(_parentSelector); // Push that parentSelector you wanted to stop at
    // console.log(parents[parents.length - 1]);
    return parents[parents.length - 1];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ THEME_VARIABLES = new InjectionToken('ly.theme.variables');
var /** @type {?} */ IS_CORE_THEME = new InjectionToken('ly.is.root');
var StyleMap = /** @class */ (function () {
    function StyleMap(themeName) {
        this.themeName = themeName;
    }
    return StyleMap;
}());
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
var LyRootService = /** @class */ (function () {
    function LyRootService(_document, rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.themeRootMap = new Map();
        this.themeMap = new Map();
        this.themes = new Map();
        this._styleMap = new Map();
        this.renderer = this.rendererFactory.createRenderer(null, null);
        var /** @type {?} */ container;
        if (Platform.isBrowser && (container = _document.querySelector('ly-core-theme'))) {
            this.rootContainer = container;
            // this._setUpStylesIfExist();
        }
        else {
            this.rootContainer = this.renderer.createElement('ly-core-theme');
            this.renderer.insertBefore(_document.body, this.rootContainer, _document.body.firstElementChild);
        }
        // setTimeout(() => this._setUpStylesIfExist(), 10000);
    }
    /**
     * @param {?} palette
     * @return {?}
     */
    LyRootService.prototype.registerTheme = /**
     * @param {?} palette
     * @return {?}
     */
    function (palette) {
        if (!this.themeMap.has(palette.name)) {
            this.themeMap.set(palette.name, new Map());
            this.themes.set(palette.name, palette);
        }
        return {
            map: this.themeMap.get(palette.name),
            palette: this.themes.get(palette.name)
        };
    };
    /**
     * @param {?} name
     * @return {?}
     */
    LyRootService.prototype.getTheme = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.themes.get(name);
    };
    LyRootService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    // private _setUpStylesIfExist() {
    //   console.time('init');
    //   const list = this.rootContainer.childNodes;
    //   let index = 0;
    //   let styleElement: HTMLStyleElement;
    //   while (styleElement = list[index] as HTMLStyleElement) {
    //     const attribute = styleElement.attributes.item(0);
    //     const name = attribute.name;
    //     const id = attribute.value;
    //     this._styleMap.set(name, {
    //       id,
    //       styleElement
    //     });
    //     index++;
    //   }
    //   console.timeEnd('init');
    //   console.log(this._styleMap);
    // }
    /** @nocollapse */
    LyRootService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
        { type: RendererFactory2, },
    ]; };
    /** @nocollapse */ LyRootService.ngInjectableDef = defineInjectable({ factory: function LyRootService_Factory() { return new LyRootService(inject(DOCUMENT), inject(RendererFactory2)); }, token: LyRootService, providedIn: "root" });
    return LyRootService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LY_GLOBAL_CONTRAST = new InjectionToken('ly.global.contrast');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ THEME_CONFIG = new InjectionToken('ly.theme.config.root');
var /** @type {?} */ LY_THEME_CONFIG = new InjectionToken('ly_theme_config');
var /** @type {?} */ THEME_CONFIG_EXTRA = new InjectionToken('ly.theme.config.extra');
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
        this.renderer = this.rendererFactory.createRenderer(null, null);
        if (Platform.isBrowser) {
            var /** @type {?} */ mediaStyleContainer = _document.body.querySelector('ly-media-style-container');
            var /** @type {?} */ primaryStyleContainer = _document.body.querySelector('ly-primary-style-container');
            var /** @type {?} */ secondaryStyleContainer = _document.body.querySelector('ly-secondary-style-container');
            if (primaryStyleContainer) {
                (/** @type {?} */ (_document.body)).removeChild(mediaStyleContainer);
                // mediaStyleContainer.innerHTML = '';
                primaryStyleContainer.innerHTML = '';
                secondaryStyleContainer.innerHTML = '';
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
var LyTheme2 = /** @class */ (function () {
    function LyTheme2(core, themeName) {
        this.core = core;
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
     * @param {?} value
     * @return {?}
     */
    LyTheme2.prototype.colorOf = /**
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
     * @param {?} nam
     * @return {?}
     */
    LyTheme2.prototype.setTheme = /**
     * @param {?} nam
     * @return {?}
     */
    function (nam) {
        var _this = this;
        this.config = this.core.get(nam);
        this._styleMap.forEach(function (dataStyle, key) {
            dataStyle.styleElement.innerText = _this.core._createStyleContent(_this.config, dataStyle.style, dataStyle.id);
        });
    };
    LyTheme2.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LyTheme2.ctorParameters = function () { return [
        { type: CoreTheme, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_NAME,] },] },
    ]; };
    return LyTheme2;
}());
/**
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(_viewRef) {
        this._viewRef = _viewRef;
        this.ngTranscludeChange = new EventEmitter();
        this.viewRef = _viewRef;
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
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgTranscludeDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.ngTranscludeChange.emit(true);
    };
    /**
     * @return {?}
     */
    NgTranscludeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.viewRef.detach();
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
        "ngTranscludeChange": [{ type: Output },],
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
                return "" + shadowBuilder(elevation, theme.colorOf(color));
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
var LyBgColorAndRaised = /** @class */ (function () {
    function LyBgColorAndRaised(theme, renderer, elementRef, shadow, contrast) {
        this.theme = theme;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.shadow = shadow;
        this.contrast = contrast;
        this.elevation = 3;
    }
    Object.defineProperty(LyBgColorAndRaised.prototype, "bg", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bg;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bg = value;
            // this._cssBg = this.theme.colorOf(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBgColorAndRaised.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._color = value;
            // this._cssColor = this.theme.colorOf(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyBgColorAndRaised.prototype, "raised", {
        get: /**
         * @return {?}
         */
        function () { return this._raisedState; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._raisedState = toBoolean(val); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyBgColorAndRaised.prototype.setAutoContrast = /**
     * @return {?}
     */
    function () {
        this.contrast = true;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LyBgColorAndRaised.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        var /** @type {?} */ newClassName;
        /**
         * ~
         */
        var /** @type {?} */ raisedĸey = this._raisedState === true ? 'raised' : '';
        var /** @type {?} */ key = '';
        if ((this.contrast && !this.color || this.color === 'auto') && this.bg) {
            key = "contrast" + this.bg + this._raisedState + this.elevation;
            newClassName = this.theme.setUpStyle("ly-" + key, { '': this.contrastStyle.bind(this) });
        }
        else if (this.bg && this.color) {
            key = "b&\u0138" + this.bg + this.color + this._raisedState + this.elevation;
            newClassName = this.theme.setUpStyle("ly-" + key, { '': this.bgColorStyle.bind(this) });
        }
        else if (this.raised && !this.bg) {
            key = raisedĸey + this.color || '';
            newClassName = this.theme.setUpStyle("ly-" + key, { '': function () {
                    var /** @type {?} */ styles = "background-color:" + _this.theme.config["background"].primary + ";";
                    var /** @type {?} */ color = '';
                    var /** @type {?} */ colorShadow;
                    if (_this.color) {
                        color = _this.theme.colorOf(_this.color);
                        colorShadow = color;
                        styles += "color:" + color + ";";
                    }
                    else {
                        colorShadow = _this.theme.config["colorShadow"];
                    }
                    if (_this._raisedState) {
                        styles += shadowBuilder(_this.elevation, colorShadow);
                    }
                    return styles;
                } });
        }
        else if (this.bg || this.color) {
            var /** @type {?} */ changeKey_1 = this.bg ? ['bg', 'background', this.bg] : ['ĸ', 'color', this.color];
            var /** @type {?} */ color = changeKey_1[2];
            key = "" + changeKey_1[0] + color + this._raisedState + this.elevation;
            /** Create style */
            newClassName = this.theme.setUpStyle("ly-" + key, { '': function () {
                    var /** @type {?} */ _color = _this.theme.colorOf(_this.bg || _this.color);
                    var /** @type {?} */ styles = changeKey_1[1] + ":" + _color + ";";
                    if (_this._raisedState) {
                        styles += shadowBuilder(_this.elevation, _color);
                    }
                    return styles;
                } });
        }
        else {
            key = "raised" + this._raisedState + this.elevation;
            newClassName = this.theme.setUpStyle("ly-" + key, { '': function () {
                    if (_this._raisedState) {
                        return shadowBuilder(_this.elevation, _this.theme.config["colorShadow"]);
                    }
                    else {
                        return shadowBuilder(0, _this.theme.config["colorShadow"]);
                    }
                } });
        }
        this.theme.updateClassName(this.elementRef.nativeElement, this.renderer, newClassName, this._currentClassName);
        this._currentClassName = newClassName;
    };
    /**
     * @return {?}
     */
    LyBgColorAndRaised.prototype.contrastStyle = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ cssBg = this.theme.colorOf(this.bg);
        this._color = this.theme.colorOf(this.bg + ":contrast");
        var /** @type {?} */ styles = "background:" + cssBg + ";color:" + this._color + ";";
        if (this._raisedState) {
            styles += shadowBuilder(this.elevation, cssBg);
        }
        return styles;
    };
    /**
     * @return {?}
     */
    LyBgColorAndRaised.prototype.bgColorStyle = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ cssBg = this.theme.colorOf(this.bg);
        var /** @type {?} */ cssColor = this.theme.colorOf(this.color);
        var /** @type {?} */ styles = "background:" + cssBg + ";color:" + cssColor + ";";
        if (this._raisedState) {
            styles += shadowBuilder(this.elevation, cssBg);
        }
        return styles;
    };
    LyBgColorAndRaised.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[bg], [color], [raised]'
                },] },
    ];
    /** @nocollapse */
    LyBgColorAndRaised.ctorParameters = function () { return [
        { type: LyTheme2, },
        { type: Renderer2, },
        { type: ElementRef, },
        { type: LyShadowService, },
        { type: undefined, decorators: [{ type: Inject, args: [LY_GLOBAL_CONTRAST,] }, { type: Optional },] },
    ]; };
    LyBgColorAndRaised.propDecorators = {
        "bg": [{ type: Input },],
        "color": [{ type: Input },],
        "raised": [{ type: Input },],
        "elevation": [{ type: Input },],
    };
    return LyBgColorAndRaised;
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
            console.log("this.theme.config.name", this.theme.config.name, nam);
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
var LyCommonModule = /** @class */ (function () {
    function LyCommonModule() {
    }
    LyCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LyBgColorAndRaised, LyNewRaised, LyThemeContainer],
                    exports: [LyBgColorAndRaised, LyNewRaised, LyThemeContainer],
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
var /** @type {?} */ AUI_VERSION = '1.7.0-beta.3wtkb';
var /** @type {?} */ AUI_LAST_UPDATE = '2018-07-30T06:55:08.604Z';

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
                LyTheme2,
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
    return LyStyleUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { getContrastYIQ, shadowBuilder, Shadows, RandomId, getParents, THEME_VARIABLES, IS_CORE_THEME, StyleMap, ThemeVariables, LyRootService, Platform, LyCommonModule, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, IsBoolean, DomService, LY_OVERLAY_CONTAINER_PROVIDER_FACTORY, LY_OVERLAY_CONTAINER_PROVIDER, LxDomModule, LyFocusStateModule, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LY_GLOBAL_CONTRAST, LyBgColorAndRaised, LyShadowService, CoreTheme, THEME_CONFIG, LY_THEME_CONFIG, THEME_CONFIG_EXTRA, LY_THEME_NAME, LyThemeConfig, LyThemeContainer, toHyphenCase, LyTheme2, LyThemeModule, LyCoreStyles, Undefined, transformMediaQuery, InvertMediaQuery, LyStyleUtils, LyOverlayContainer as ɵb, LyNewRaised as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbHkvcmFuZG9tLWlkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BhcmVudHMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcm9vdC5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbnRyYXN0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLWNvbmZpZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lMi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvY29tbW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZWwvb2Zmc2V0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvaXMtYm9vbGVhbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9zaGFkb3cuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9iZy1jb2xvci1hbmQtcmFpc2VkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9yYWlzZWQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL2RvbS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9seC1kb20ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2ZvY3VzLXN0YXRlL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdmVyc2lvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9nZXN0dXJlL2dlc3R1cmUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdW5kZWZpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlLXV0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFlJUShoZXhjb2xvcikge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xuICBjb25zdCB5aXEgPSAoKHIgKiAyOTkpICsgKGcgKiA1ODcpICsgKGIgKiAxMTQpKSAvIDEwMDA7XG4gIHJldHVybiAoeWlxID49IDEyOCkgPyAnYmxhY2snIDogJ3doaXRlJztcbn1cbiIsImltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbmNvbnN0IHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG5jb25zdCBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5leHBvcnQgY29uc3QgU2hhZG93cyA9IFtcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMywgMCwgMCwgMSwgMSwgMCwgMCwgMiwgMSwgLTFdLFxuICBbMCwgMSwgNSwgMCwgMCwgMiwgMiwgMCwgMCwgMywgMSwgLTJdLFxuICBbMCwgMSwgOCwgMCwgMCwgMywgNCwgMCwgMCwgMywgMywgLTJdLFxuICBbMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwXSxcbiAgWzAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDFdLFxuICBbMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMl0sXG4gIFswLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyXSxcbiAgWzAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzXSxcbiAgWzAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzXSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0XSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0XSxcbiAgWzAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0XSxcbiAgWzAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1XSxcbiAgWzAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNV0sXG4gIFswLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDVdLFxuICBbMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2XSxcbiAgWzAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNl0sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDddLFxuICBbMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgN10sXG4gIFswLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4XSxcbiAgWzAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDhdXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXIoZWxldmF0aW9uOiBudW1iZXIgPSAyLCBjb2xvciA9ICcjMDAwJykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvcik7XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGBib3gtc2hhZG93OiR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSYW5kb21JZCB7XG4gIHB1YmxpYyBnZXQgZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgaWQ6IGFueSA9IChNYXRoLnJhbmRvbSgpICsgRGF0ZS5ub3coKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50cyhlbDogSFRNTEVsZW1lbnQsIHBhcmVudFNlbGVjdG9yOiBzdHJpbmcpIHtcclxuXHJcbiAgLy8gSWYgbm8gcGFyZW50U2VsZWN0b3IgZGVmaW5lZCB3aWxsIGJ1YmJsZSB1cCBhbGwgdGhlIHdheSB0byAqZG9jdW1lbnQqXHJcbiAgaWYgKHBhcmVudFNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGFyZW50U2VsZWN0b3IgPSAnYm9keSc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnRzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgbGV0IHA6IGFueSA9IGVsLnBhcmVudE5vZGU7XHJcbiAgbGV0IHB4ejogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gIHdoaWxlICghcHh6KSB7XHJcbiAgICAgIGNvbnN0IG8gPSBwO1xyXG4gICAgICBwYXJlbnRzLnB1c2gobyk7XHJcbiAgICAgIHAgPSBvLnBhcmVudE5vZGU7XHJcbiAgICAgIHB4eiA9IHAucXVlcnlTZWxlY3RvcihwYXJlbnRTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIC8vIHBhcmVudHMucHVzaChfcGFyZW50U2VsZWN0b3IpOyAvLyBQdXNoIHRoYXQgcGFyZW50U2VsZWN0b3IgeW91IHdhbnRlZCB0byBzdG9wIGF0XHJcbiAgLy8gY29uc29sZS5sb2cocGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdKTtcclxuICByZXR1cm4gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0eWxlRGF0YSB9IGZyb20gJy4vdGhlbWUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVEhFTUVfVkFSSUFCTEVTID0gbmV3IEluamVjdGlvblRva2VuPFBhbGV0dGVWYXJpYWJsZXM+KCdseS50aGVtZS52YXJpYWJsZXMnKTtcclxuZXhwb3J0IGNvbnN0IElTX0NPUkVfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48dHJ1ZT4oJ2x5LmlzLnJvb3QnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHlsZU1hcCB7XHJcbiAgcHJpdmF0ZSBzdHlsZU1hcDogTWFwPHN0cmluZywgU3R5bGVEYXRhPjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lTmFtZTogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHQge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgY2xhc3MgVGhlbWVWYXJpYWJsZXMge1xyXG4gIC8qKiBUaGVtZSBuYW1lICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByaW1hcnk/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4gIGFjY2VudD86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbiAgLyoqIHdhcm4gb3IgZXJyb3IgY29sb3IgKi9cclxuICB3YXJuPzogUGFsZXR0ZVZhcmlhYmxlcztcclxuICBzY2hlbWU/OiBzdHJpbmc7XHJcbiAgY29sb3JTY2hlbWVzPzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogQ29sb3JTY2hlbWVcclxuICB9O1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZVZhcmlhYmxlcyB7XHJcbiAgZGVmYXVsdD86IHN0cmluZztcclxuICBjb250cmFzdD86IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JTY2hlbWUge1xyXG4gIGJhY2tncm91bmQ/OiB7XHJcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxyXG4gICAgcGFwZXI/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICB0ZXh0Pzoge1xyXG4gICAgZGVmYXVsdDogc3RyaW5nLFxyXG4gICAgcHJpbWFyeT86IHN0cmluZyxcclxuICAgIHNlY29uZGFyeT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogc3RyaW5nLFxyXG4gICAgaGludD86IHN0cmluZyxcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICB9O1xyXG4gIGRpdmlkZXI/OiBzdHJpbmc7XHJcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXHJcbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XHJcbiAgYmFyPzogc3RyaW5nO1xyXG4gIGlucHV0Pzoge1xyXG4gICAgbGFiZWw/OiBzdHJpbmcsXHJcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcclxuICB9O1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIHN1cHBvcnRzIHRoZSBWOCBCcmVhayBJdGVyYXRvci4gVGhlIFY4IGNoZWNrXHJcbi8vIGlzIG5lY2Vzc2FyeSB0byBkZXRlY3QgYWxsIEJsaW5rIGJhc2VkIGJyb3dzZXJzLlxyXG5jb25zdCBoYXNWOEJyZWFrSXRlcmF0b3IgPSAodHlwZW9mKEludGwpICE9PSAndW5kZWZpbmVkJyAmJiAoSW50bCBhcyBhbnkpLnY4QnJlYWtJdGVyYXRvcik7XHJcbi8qKlxyXG4gKiBTZXJ2aWNlIHRvIGRldGVjdCB0aGUgY3VycmVudCBwbGF0Zm9ybSBieSBjb21wYXJpbmcgdGhlIHVzZXJBZ2VudCBzdHJpbmdzIGFuZFxyXG4gKiBjaGVja2luZyBicm93c2VyLXNwZWNpZmljIGdsb2JhbCBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgaXNCcm93c2VyOiBib29sZWFuID0gdHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JyAmJiAhIWRvY3VtZW50O1xyXG4gIC8qKiBMYXlvdXQgRW5naW5lcyAqL1xyXG4gIEVER0UgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhlZGdlKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgVFJJREVOVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAvLyBFZGdlSFRNTCBhbmQgVHJpZGVudCBtb2NrIEJsaW5rIHNwZWNpZmljIHRoaW5ncyBhbmQgbmVlZCB0byBiZSBleGNsdWRlZCBmcm9tIHRoaXMgY2hlY2suXHJcbiAgQkxJTksgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcclxuICAgICAgKCEhKCh3aW5kb3cgYXMgYW55KS5jaHJvbWUgfHwgaGFzVjhCcmVha0l0ZXJhdG9yKSAmJiAhIUNTUyAmJiAhdGhpcy5FREdFICYmICF0aGlzLlRSSURFTlQpO1xyXG5cclxuICAvLyBXZWJraXQgaXMgcGFydCBvZiB0aGUgdXNlckFnZW50IGluIEVkZ2VIVE1MLCBCbGluayBhbmQgVHJpZGVudC4gVGhlcmVmb3JlIHdlIG5lZWQgdG9cclxuICAvLyBlbnN1cmUgdGhhdCBXZWJraXQgcnVucyBzdGFuZGFsb25lIGFuZCBpcyBub3QgdXNlZCBhcyBhbm90aGVyIGVuZ2luZSdzIGJhc2UuXHJcbiAgV0VCS0lUID0gUGxhdGZvcm0uaXNCcm93c2VyICYmXHJcbiAgICAgIC9BcHBsZVdlYktpdC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuQkxJTksgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UO1xyXG5cclxuICAvKiogQnJvd3NlcnMgYW5kIFBsYXRmb3JtIFR5cGVzICovXHJcbiAgSU9TID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEod2luZG93IGFzIGFueSkuTVNTdHJlYW07XHJcblxyXG4gIC8vIEl0J3MgZGlmZmljdWx0IHRvIGRldGVjdCB0aGUgcGxhaW4gR2Vja28gZW5naW5lLCBiZWNhdXNlIG1vc3Qgb2YgdGhlIGJyb3dzZXJzIGlkZW50aWZ5XHJcbiAgLy8gdGhlbSBzZWxmIGFzIEdlY2tvLWxpa2UgYnJvd3NlcnMgYW5kIG1vZGlmeSB0aGUgdXNlckFnZW50J3MgYWNjb3JkaW5nIHRvIHRoYXQuXHJcbiAgLy8gU2luY2Ugd2Ugb25seSBjb3ZlciBvbmUgZXhwbGljaXQgRmlyZWZveCBjYXNlLCB3ZSBjYW4gc2ltcGx5IGNoZWNrIGZvciBGaXJlZm94XHJcbiAgLy8gaW5zdGVhZCBvZiBoYXZpbmcgYW4gdW5zdGFibGUgY2hlY2sgZm9yIEdlY2tvLlxyXG4gIEZJUkVGT1ggPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhmaXJlZm94fG1pbmVmaWVsZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAvLyBUcmlkZW50IG9uIG1vYmlsZSBhZGRzIHRoZSBhbmRyb2lkIHBsYXRmb3JtIHRvIHRoZSB1c2VyQWdlbnQgdG8gdHJpY2sgZGV0ZWN0aW9ucy5cclxuICBBTkRST0lEID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9hbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhdGhpcy5UUklERU5UO1xyXG5cclxuICAvLyBTYWZhcmkgYnJvd3NlcnMgd2lsbCBpbmNsdWRlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGVpciB1c2VyQWdlbnQuIFNvbWUgYnJvd3NlcnMgbWF5IGZha2VcclxuICAvLyB0aGlzIGFuZCBqdXN0IHBsYWNlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGUgdXNlckFnZW50LiBUbyBiZSBtb3JlIHNhZmUgYWJvdXQgU2FmYXJpIGV2ZXJ5XHJcbiAgLy8gU2FmYXJpIGJyb3dzZXIgc2hvdWxkIGFsc28gdXNlIFdlYmtpdCBhcyBpdHMgbGF5b3V0IGVuZ2luZS5cclxuICBTQUZBUkkgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL3NhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgdGhpcy5XRUJLSVQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbmplY3QsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBTdHlsZURhdGEsIERhdGFTdHlsZSB9IGZyb20gJy4vdGhlbWUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5Um9vdFNlcnZpY2Uge1xuICAvKiogU3R5bGUgQ29udGFpbmVyICovXG4gIHJvb3RDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICB0aGVtZVJvb3RNYXAgPSBuZXcgTWFwPHN0cmluZywgU3R5bGVEYXRhPigpO1xuICBwcml2YXRlIHRoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIFN0eWxlRGF0YT4+KCk7XG4gIHByaXZhdGUgdGhlbWVzID0gbmV3IE1hcDxzdHJpbmcsIHtba2V5OiBzdHJpbmddOiBhbnl9PigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgICBsZXQgY29udGFpbmVyOiBhbnk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiAoY29udGFpbmVyID0gX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2x5LWNvcmUtdGhlbWUnKSkpIHtcbiAgICAgIHRoaXMucm9vdENvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgIC8vIHRoaXMuX3NldFVwU3R5bGVzSWZFeGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvb3RDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LWNvcmUtdGhlbWUnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnJvb3RDb250YWluZXIsIF9kb2N1bWVudC5ib2R5LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3NldFVwU3R5bGVzSWZFeGlzdCgpLCAxMDAwMCk7XG4gIH1cbiAgcmVnaXN0ZXJUaGVtZShwYWxldHRlOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMudGhlbWVNYXAuaGFzKHBhbGV0dGUubmFtZSkpIHtcbiAgICAgIHRoaXMudGhlbWVNYXAuc2V0KHBhbGV0dGUubmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgIHRoaXMudGhlbWVzLnNldChwYWxldHRlLm5hbWUsIHBhbGV0dGUpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbWFwOiB0aGlzLnRoZW1lTWFwLmdldChwYWxldHRlLm5hbWUpLFxuICAgICAgcGFsZXR0ZTogdGhpcy50aGVtZXMuZ2V0KHBhbGV0dGUubmFtZSlcbiAgICB9O1xuICB9XG5cbiAgZ2V0VGhlbWUobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWVzLmdldChuYW1lKTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgX3NldFVwU3R5bGVzSWZFeGlzdCgpIHtcbiAgLy8gICBjb25zb2xlLnRpbWUoJ2luaXQnKTtcbiAgLy8gICBjb25zdCBsaXN0ID0gdGhpcy5yb290Q29udGFpbmVyLmNoaWxkTm9kZXM7XG4gIC8vICAgbGV0IGluZGV4ID0gMDtcbiAgLy8gICBsZXQgc3R5bGVFbGVtZW50OiBIVE1MU3R5bGVFbGVtZW50O1xuICAvLyAgIHdoaWxlIChzdHlsZUVsZW1lbnQgPSBsaXN0W2luZGV4XSBhcyBIVE1MU3R5bGVFbGVtZW50KSB7XG4gIC8vICAgICBjb25zdCBhdHRyaWJ1dGUgPSBzdHlsZUVsZW1lbnQuYXR0cmlidXRlcy5pdGVtKDApO1xuICAvLyAgICAgY29uc3QgbmFtZSA9IGF0dHJpYnV0ZS5uYW1lO1xuICAvLyAgICAgY29uc3QgaWQgPSBhdHRyaWJ1dGUudmFsdWU7XG4gIC8vICAgICB0aGlzLl9zdHlsZU1hcC5zZXQobmFtZSwge1xuICAvLyAgICAgICBpZCxcbiAgLy8gICAgICAgc3R5bGVFbGVtZW50XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIGluZGV4Kys7XG4gIC8vICAgfVxuICAvLyAgIGNvbnNvbGUudGltZUVuZCgnaW5pdCcpO1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuX3N0eWxlTWFwKTtcbiAgLy8gfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTFlfR0xPQkFMX0NPTlRSQVNUID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCdseS5nbG9iYWwuY29udHJhc3QnKTtcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHkudGhlbWUuY29uZmlnLnJvb3QnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48THlUaGVtZUNvbmZpZz4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IFRIRU1FX0NPTkZJR19FWFRSQSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUaGVtZUNvbmZpZyB8IFRoZW1lQ29uZmlnW10+KCdseS50aGVtZS5jb25maWcuZXh0cmEnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2x5LnRoZW1lLm5hbWUnKTtcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYWNjZW50OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICB3YXJuOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBMeVRoZW1lQ29uZmlnIHtcbiAgdGhlbWVzOiBhbnlbXSA9IFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRWYWwge1xuICBkZWZhdWx0OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVDb2xvciB7XG4gIGNvbnRyYXN0OiBzdHJpbmc7XG59XG4iLCJleHBvcnQgZW51bSBJbnZlcnRNZWRpYVF1ZXJ5IHtcbiAgTm8sXG4gIFllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWVkaWFRdWVyeShtZWRpYTogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5OiBJbnZlcnRNZWRpYVF1ZXJ5ID0gSW52ZXJ0TWVkaWFRdWVyeS5Obyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgaWYgKG1lZGlhICYmIGludmVydE1lZGlhUXVlcnkgPT09IEludmVydE1lZGlhUXVlcnkuWWVzKSB7XG4gICAgY29uc3QgbmV3VmFsID0gbWVkaWEuc3BsaXQoJywnKS5tYXAoXyA9PiBgbm90ICR7X31gKTtcbiAgICByZXR1cm4gbmV3VmFsO1xuICB9XG4gIHJldHVybiBtZWRpYTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUSEVNRV9DT05GSUcsIFRoZW1lQ29uZmlnLCBUSEVNRV9DT05GSUdfRVhUUkEsIExZX1RIRU1FX0NPTkZJRywgTHlUaGVtZUNvbmZpZyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0eWxlQ29udGVudCwgU3R5bGVEYXRhLCBEYXRhU3R5bGUsIFN0eWxlLCBNdWx0aXBsZVN0eWxlcyB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5LCB0cmFuc2Zvcm1NZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcblxubGV0IGNsYXNzSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZUNvbmZpZz4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgRGF0YVN0eWxlPj4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVDb3JlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9DT05GSUcpIHRoZW1lQ29uZmlnOiBMeVRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUVfQ09ORklHIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgbWVkaWFTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LW1lZGlhLXN0eWxlLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgcHJpbWFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktc2Vjb25kYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHByaW1hcnlTdHlsZUNvbnRhaW5lcikge1xuICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChtZWRpYVN0eWxlQ29udGFpbmVyKTtcbiAgICAgICAgLy8gbWVkaWFTdHlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJpbWFyeVN0eWxlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1tZWRpYS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1zZWNvbmRhcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciwgX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lcik7XG4gICAgdGhpcy5zZXRDb3JlU3R5bGUoKTtcbiAgICBpZiAodGhlbWVDb25maWcpIHtcbiAgICAgIHRoZW1lQ29uZmlnLnRoZW1lcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLmFkZChuZXcgaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIG5ldyB0aGVtZVxuICAgKiBAcGFyYW0gdGhlbWU6IFRoZW1lQ29uZmlnXG4gICAqL1xuICBhZGQodGhlbWU6IFRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy5fdGhlbWVNYXAuc2V0KHRoZW1lLm5hbWUsIHRoZW1lKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5zZXQodGhlbWUubmFtZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVNYXAuZ2V0KG5hbWUpO1xuICB9XG4gIGdldFN0eWxlTWFwKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZU1hcC5nZXQobmFtZSk7XG4gIH1cblxuICBzZXRVcFN0eWxlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8bnVsbD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX8OEwrhyZWF0ZVN0eWxlKHVuZGVmaW5lZCwga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlQ29yZU1hcCwgJ3Jvb3QnLCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxudWxsPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fw4TCuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuXG4gIF/DhMK4cmVhdGVTdHlsZTxUPih0aGVtZUNvbmZpZzogYW55LCBrZXksIHN0eWxlOiBTdHlsZTxUPiwgbWFwU3R5bGVzOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+LCBfZm9yOiBzdHJpbmcsIF9pbjogYW55LCBfbWVkaWE/OiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKG1hcFN0eWxlcy5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIG1hcFN0eWxlcy5nZXQoa2V5KS5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaWQgPSBgayR7KGNsYXNzSWQrKykudG9TdHJpbmcoMzYpfWA7XG4gICAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBjb25zdCBtZWRpYSA9IHRyYW5zZm9ybU1lZGlhUXVlcnkoX21lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgICAgIGNvbnN0IHN0eWxlQ29udGVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQ8VD4odGhlbWVDb25maWcsIHN0eWxlLCBpZCwgbWVkaWEpKTtcbiAgICAgIGNvbnN0IHNhdmVJbiA9IG1lZGlhID8gdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyIDogX2luO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlQ29udGVudCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHNhdmVJbiwgc3R5bGVFbGVtZW50KTtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdHlsZUVsZW1lbnQsICdzdHlsZV9kYXRhJywgYCR7X2Zvcn3DgsK3w4LCt8OCwrcke2lkfcOCwrfDgsK3w4LCtyR7a2V5fWApO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YVN0eWxlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIHN0eWxlRWxlbWVudCxcbiAgICAgICAgbWVkaWFcbiAgICAgIH07XG4gICAgICBtYXBTdHlsZXMuc2V0KGtleSwgZGF0YVN0eWxlKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gIH1cblxuICAvKiogI3N0eWxlICovXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQ8VD4odGhlbWVDb25maWc6IFQsIHN0eWxlczogU3R5bGU8VD4sIGlkOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBjb25zdCB0eXBmID0gdHlwZW9mIHN0eWxlcztcbiAgICBpZiAodHlwZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0b01lZGlhKGAuJHtpZH17JHtzdHlsZXN9fWAsIG1lZGlhKTtcbiAgICB9IGVsc2UgaWYgKHR5cGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0b01lZGlhKGAuJHtpZH17JHsoc3R5bGVzIGFzIFN0eWxlQ29udGVudDxUPikodGhlbWVDb25maWcpfX1gLCBtZWRpYSk7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgZm9yIChjb25zdCBrZXkkIGluIHN0eWxlcyBhcyBNdWx0aXBsZVN0eWxlczxUPikge1xuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkkKSkge1xuICAgICAgICBjb25zdCB2YWwgPSBzdHlsZXNba2V5JF07XG4gICAgICAgIGNvbnN0IHRleHQgPSB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nID8gdmFsKHRoZW1lQ29uZmlnKSA6IHZhbDtcbiAgICAgICAgY29udGVudCArPSBgLiR7aWR9JHtrZXkkfXske3RleHR9fWA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b01lZGlhKGNvbnRlbnQsIG1lZGlhKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29yZVN0eWxlKCkge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoaXMuc2V0VXBTdHlsZSgncm9vdGJvZHknLCB7XG4gICAgICAnJzogKCkgPT4gKFxuICAgICAgICBgbWFyZ2luOjA7YFxuICAgICAgKSxcbiAgICAgICcsICosICo6YWZ0ZXIsICo6YmVmb3JlJzogKCkgPT4gKFxuICAgICAgICBgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICBgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kb2N1bWVudC5ib2R5LCBjbGFzc25hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuXG4vKipcbiAqIENvbnZlcnRlciB0byBtZWRpYSBxdWVyeSBpZiBgbWVkaWFgIGlzIHByZXNlbnRcbiAqIEBwYXJhbSB0ZXh0IHN0eWxlIGNvbnRlbnRcbiAqIEBwYXJhbSBtZWRpYSBtZWRpYSBxdWVyeVxuICovXG5mdW5jdGlvbiB0b01lZGlhKHRleHQ6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICBpZiAodHlwZW9mIG1lZGlhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBgQG1lZGlhICR7bWVkaWF9eyR7dGV4dH19YDtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG1lZGlhKSkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBtZWRpYS5mb3JFYWNoKF8gPT4gcmVzdWx0ICs9IGBAbWVkaWEgJHtffXske3RleHR9fWApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlLCBTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEludmVydE1lZGlhUXVlcnkgfSBmcm9tICcuLi9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lQ29uZmlnO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgIH1cbiAgfVxuICBzZXRVcFN0eWxlPFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fw4TCuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnk8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/DhMK4cmVhdGVTdHlsZTxUPih0aGlzLmNvbmZpZywga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlTWFwLCBuYW1lLCB0aGlzLmNvcmUuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuZm9yRWFjaCgoZGF0YVN0eWxlLCBrZXkpID0+IHtcbiAgICAgIGRhdGFTdHlsZS5zdHlsZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5jb3JlLl9jcmVhdGVTdHlsZUNvbnRlbnQodGhpcy5jb25maWcsIGRhdGFTdHlsZS5zdHlsZSwgZGF0YVN0eWxlLmlkKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IF9wYXRoOiBzdHJpbmdbXSA9IHBhdGggaW5zdGFuY2VvZiBBcnJheSA/IHBhdGggOiBwYXRoLnNwbGl0KCc6Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBvYmogPSBvYmpbX3BhdGhbaV1dIHx8IHBhdGg7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBOZ01vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy52aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBPdXRwdXQoKSBuZ1RyYW5zY2x1ZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHB1YmxpYyBnZXQgbmdUcmFuc2NsdWRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICB0aGlzLnZpZXdSZWYgPSBfdmlld1JlZjtcclxuICB9XHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5uZ1RyYW5zY2x1ZGVDaGFuZ2UuZW1pdCh0cnVlKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnZpZXdSZWYuZGV0YWNoKCk7XHJcbiAgfVxyXG59XHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiZnVuY3Rpb24gaXNXaW5kb3cob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbTogYW55KSB7XHJcbiAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBleGFjdFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgZG9jRWxlbTogYW55LCB3aW46IGFueSxcclxuICAgICAgICBib3ggPSB7dG9wOiAwLCBsZWZ0OiAwfTtcclxuICAgIGNvbnN0IGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xyXG5cclxuICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcclxuICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG4gICAgd2luID0gZ2V0V2luZG93KGRvYyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxyXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGFueSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gSXNCb29sZWFuKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwga2V5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBnZXQ6IGRlZmluaXRpb24uZ2V0LFxuICAgICAgICBzZXQ6IG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICBkZWZpbml0aW9uLnNldCh0b0Jvb2xlYW4obmV3VmFsdWUpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzWydfXycgKyBrZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgIHRoaXNbJ19fJyArIGtleV0gPSB0b0Jvb2xlYW4obmV3VmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcclxuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEx5U2hhZG93U2VydmljZSB7XHJcbiAgLyoqIERlZmF1bHQgZWxldmF0aW9uICovXHJcbiAgZWxldmF0aW9uID0gMTtcclxuICAvKiogZGVtbzogc2V0U2hhZG93KC4uLltlbGV2YXRpb24sIGNvbG9yXS4uLikgKi9cclxuICBzZXRTaGFkb3codGhlbWU6IEx5VGhlbWUyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCB2YWw6IFtudW1iZXIsIHN0cmluZ10sIG9sZENsYXNzTmFtZT86IHN0cmluZykge1xyXG4gICAgbGV0IGtleXM6IHN0cmluZztcclxuICAgIGxldCBlbGV2YXRpb246IG51bWJlcjtcclxuICAgIGxldCBjb2xvciA9ICdjb2xvclNoYWRvdyc7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGtleXMgPSB2YWwuam9pbignJyk7XHJcbiAgICAgIGVsZXZhdGlvbiA9IHZhbFswXTtcclxuICAgICAgY29sb3IgPSB2YWxbMV0gfHwgY29sb3I7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBrZXlzID0gYCR7dGhpcy5lbGV2YXRpb259JHtjb2xvcn1gO1xyXG4gICAgICBlbGV2YXRpb24gPSB0aGlzLmVsZXZhdGlvbjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoZW1lLnNldFVwU3R5bGUoYHNoYWRvdyR7a2V5c31gLCB7Jyc6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGAke3NoYWRvd0J1aWxkZXIoZWxldmF0aW9uLCB0aGVtZS5jb2xvck9mKGNvbG9yKSl9YDtcclxuICAgIH19KTtcclxuICAgIHRoZW1lLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCBjbGFzc25hbWUsIG9sZENsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gY2xhc3NuYW1lO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBTa2lwU2VsZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSW5qZWN0LCBPcHRpb25hbCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0LCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9HTE9CQUxfQ09OVFJBU1QgfSBmcm9tICcuL2NvbnRyYXN0JztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsJztcbmltcG9ydCB7IHNoYWRvd0J1aWxkZXIgfSBmcm9tICcuLi9zaGFkb3cnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi9hbHlsZS1jb25maWctc2VydmljZSc7XG5pbXBvcnQgeyBMeVNoYWRvd1NlcnZpY2UgfSBmcm9tICcuL3NoYWRvdy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbYmddLCBbY29sb3JdLCBbcmFpc2VkXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlCZ0NvbG9yQW5kUmFpc2VkIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfcmFpc2VkU3RhdGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2N1cnJlbnRDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYmc6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGJnKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iZyA9IHZhbHVlO1xuICAgIC8vIHRoaXMuX2Nzc0JnID0gdGhpcy50aGVtZS5jb2xvck9mKHZhbHVlKTtcbiAgfVxuICBnZXQgYmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnO1xuICB9XG4gIC8vIGdldCBjc3NCZygpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fY3NzQmc7XG4gIC8vIH1cbiAgQElucHV0KClcbiAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICAgIC8vIHRoaXMuX2Nzc0NvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHZhbHVlKTtcbiAgfVxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIC8vIGdldCBjc3NDb2xvcigpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fY3NzQ29sb3I7XG4gIC8vIH1cbiAgQElucHV0KCkgc2V0IHJhaXNlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fcmFpc2VkU3RhdGUgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkU3RhdGU7IH1cbiAgQElucHV0KCkgZWxldmF0aW9uID0gMztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNoYWRvdzogTHlTaGFkb3dTZXJ2aWNlLFxuICAgIEBJbmplY3QoTFlfR0xPQkFMX0NPTlRSQVNUKSBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbnRyYXN0OiBib29sZWFuXG4gICkgeyB9XG5cbiAgcHVibGljIHNldEF1dG9Db250cmFzdCgpIHtcbiAgICB0aGlzLmNvbnRyYXN0ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBsZXQgbmV3Q2xhc3NOYW1lO1xuICAgIC8qKn4gKi9cbiAgICBjb25zdCByYWlzZWTDhMK4ZXkgPSB0aGlzLl9yYWlzZWRTdGF0ZSA9PT0gdHJ1ZSA/ICdyYWlzZWQnIDogJyc7XG4gICAgbGV0IGtleSA9ICcnO1xuICAgIGlmICgodGhpcy5jb250cmFzdCAmJiAhdGhpcy5jb2xvciB8fCB0aGlzLmNvbG9yID09PSAnYXV0bycpICYmIHRoaXMuYmcpIHtcbiAgICAgIGtleSA9IGBjb250cmFzdCR7dGhpcy5iZ30ke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiB0aGlzLmNvbnRyYXN0U3R5bGUuYmluZCh0aGlzKX0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iZyAmJiB0aGlzLmNvbG9yKSB7XG4gICAgICBrZXkgPSBgYibDhMK4JHt0aGlzLmJnfSR7dGhpcy5jb2xvcn0ke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiB0aGlzLmJnQ29sb3JTdHlsZS5iaW5kKHRoaXMpfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJhaXNlZCAmJiAhdGhpcy5iZykge1xuICAgICAga2V5ID0gcmFpc2Vkw4TCuGV5ICsgdGhpcy5jb2xvciB8fCAnJztcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiAoKSA9PiB7XG4gICAgICAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLmJhY2tncm91bmQucHJpbWFyeX07YDtcbiAgICAgICAgbGV0IGNvbG9yID0gJyc7XG4gICAgICAgIGxldCBjb2xvclNoYWRvdztcbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICBjb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICAgICAgICBjb2xvclNoYWRvdyA9IGNvbG9yO1xuICAgICAgICAgIHN0eWxlcyArPSBgY29sb3I6JHtjb2xvcn07YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xvclNoYWRvdyA9IHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjb2xvclNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgIH19KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmcgfHwgdGhpcy5jb2xvcikge1xuICAgICAgY29uc3QgY2hhbmdlS2V5ID0gdGhpcy5iZyA/IFsnYmcnLCAnYmFja2dyb3VuZCcsIHRoaXMuYmddIDogWyfDhMK4JywgJ2NvbG9yJywgdGhpcy5jb2xvcl07XG4gICAgICBjb25zdCBjb2xvciA9IGNoYW5nZUtleVsyXTtcbiAgICAgIGtleSA9IGAke2NoYW5nZUtleVswXX0ke2NvbG9yfSR7dGhpcy5fcmFpc2VkU3RhdGV9JHt0aGlzLmVsZXZhdGlvbn1gO1xuXG4gICAgICAvKiogQ3JlYXRlIHN0eWxlICovXG4gICAgICBuZXdDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGx5LSR7a2V5fWAsIHsnJzogKCkgPT4ge1xuICAgICAgICBjb25zdCBfY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyB8fCB0aGlzLmNvbG9yKTtcbiAgICAgICAgbGV0IHN0eWxlcyA9IGAke2NoYW5nZUtleVsxXX06JHtfY29sb3J9O2A7XG4gICAgICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBfY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9fSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gYHJhaXNlZCR7dGhpcy5fcmFpc2VkU3RhdGV9JHt0aGlzLmVsZXZhdGlvbn1gO1xuICAgICAgbmV3Q2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBseS0ke2tleX1gLCB7Jyc6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3JhaXNlZFN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHNoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24sIHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlcigwLCB0aGlzLnRoZW1lLmNvbmZpZy5jb2xvclNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgIH19KTtcbiAgICB9XG4gICAgdGhpcy50aGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzTmFtZSwgdGhpcy5fY3VycmVudENsYXNzTmFtZSk7XG4gICAgdGhpcy5fY3VycmVudENsYXNzTmFtZSA9IG5ld0NsYXNzTmFtZTtcbiAgfVxuICBwcml2YXRlIGNvbnRyYXN0U3R5bGUoKSB7XG4gICAgY29uc3QgY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gICAgdGhpcy5fY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YoYCR7dGhpcy5iZ306Y29udHJhc3RgKTtcbiAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHt0aGlzLl9jb2xvcn07YDtcbiAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBwcml2YXRlIGJnQ29sb3JTdHlsZSgpIHtcbiAgICBjb25zdCBjc3NCZyA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmJnKTtcbiAgICBjb25zdCBjc3NDb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHtjc3NDb2xvcn07YDtcbiAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVNoYWRvd1NlcnZpY2UgfSBmcm9tICcuL3NoYWRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vYWx5bGUtY29uZmlnLXNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnOm5vdChbcmFpc2VkXSlbbmV3UmFpc2VkXScgfSlcbmV4cG9ydCBjbGFzcyBMeU5ld1JhaXNlZCB7XG4gIGVsZXZhdGlvbiA9IDM7XG4gIHByaXZhdGUgY3VycmVudENsYXNzTmFtZTogc3RyaW5nO1xuICAvKiogRGVmYXVsdCByYWlzZWQgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuZXdSYWlzZWQodmFsdWU6IFtudW1iZXIsIHN0cmluZ10pIHtcbiAgICB0aGlzLmN1cnJlbnRDbGFzc05hbWUgPSB0aGlzLnNoYWRvdy5zZXRTaGFkb3codGhpcy50aGVtZSwgdGhpcy5lbGVtZW50UmVmLCB0aGlzLnJlbmRlcmVyLCBbIHZhbHVlWzBdIHx8IHRoaXMuZWxldmF0aW9uLCB2YWx1ZVsxXSBdLCB0aGlzLmN1cnJlbnRDbGFzc05hbWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNoYWRvdzogTHlTaGFkb3dTZXJ2aWNlXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVRoZW1lXScsXG4gIHByb3ZpZGVyczogW0x5VGhlbWUyXSxcbiAgZXhwb3J0QXM6ICdseVRoZW1lJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRoZW1lQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfbHlUaGVtZTogc3RyaW5nO1xuICAvKipcbiAgICogc2V0IHRoZW1lXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbHlUaGVtZShuYW06IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKGB0aGlzLnRoZW1lLmNvbmZpZy5uYW1lYCwgdGhpcy50aGVtZS5jb25maWcubmFtZSwgbmFtKTtcbiAgICB0aGlzLl9seVRoZW1lID0gbmFtO1xuICAgIHRoaXMudGhlbWUuc2V0VXBUaGVtZShuYW1lKTtcbiAgfVxuICBnZXQgbHlUaGVtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUaGVtZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNoYXJlZDogdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zZXRDb250YWluZXJTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlcik7XG4gIH1cblxuICBwcml2YXRlIF9zZXRDb250YWluZXJTdHlsZShlbGVtZW50LCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgY29uc3QgY2xhc3NuYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGB0aGVtZToke3RoaXMudGhlbWUuY29uZmlnLm5hbWV9YCwge1xuICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy5iYWNrZ3JvdW5kLmRlZmF1bHR9O2AgK1xuICAgICAgICBgY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy50ZXh0LmRlZmF1bHR9O2AgK1xuICAgICAgICBgZm9udC1mYW1pbHk6JHt0aGlzLnRoZW1lLmNvbmZpZy50eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O2BcbiAgICAgIClcbiAgICB9KTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBjbGFzc25hbWUpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlCZ0NvbG9yQW5kUmFpc2VkIH0gZnJvbSAnLi9iZy1jb2xvci1hbmQtcmFpc2VkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMWV9HTE9CQUxfQ09OVFJBU1QgfSBmcm9tICcuL2NvbnRyYXN0JztcbmltcG9ydCB7IEx5TmV3UmFpc2VkIH0gZnJvbSAnLi9yYWlzZWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5VGhlbWVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRoZW1lTW9kdWxlIH0gZnJvbSAnLi90aGVtZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeUJnQ29sb3JBbmRSYWlzZWQsIEx5TmV3UmFpc2VkLCBMeVRoZW1lQ29udGFpbmVyXSxcbiAgZXhwb3J0czogW0x5QmdDb2xvckFuZFJhaXNlZCwgTHlOZXdSYWlzZWQsIEx5VGhlbWVDb250YWluZXJdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IExZX0dMT0JBTF9DT05UUkFTVCwgdXNlVmFsdWU6IGZhbHNlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbk1vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIE5nTW9kdWxlLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlDb250YWluZXIge1xuICBwcm90ZWN0ZWQgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdseS1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG59XG5cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQXBwbGljYXRpb25SZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSBfdmlld1JlZjogVmlld1JlZjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lclxuICApIHsgfVxuXG4gIGF0dGFjaDxUPihfaG9zdFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGNvbXBvbmVudDogYW55LCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgY29uc3Qgdmlld1JlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xuICAgICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gX2hvc3RWaWV3Q29udGFpbmVyUmVmO1xuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChyb290Tm9kZSA9PiB0aGlzLmFkZENoaWxkKHJvb3ROb2RlKSk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm92ZXJsYXlDb250YWluZXIuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBnZXREb21FbGVtZW50RnJvbUNvbXBvbmVudFJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBkZXN0cm95UmVmKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4sIGRlbGF5OiBudW1iZXIpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21TZXJ2aWNlIH0gZnJvbSAnLi9kb20uc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudENvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyKSB7XG4gIHJldHVybiBwYXJlbnRDb250YWluZXIgfHwgbmV3IEx5T3ZlcmxheUNvbnRhaW5lcigpO1xufVxuXG5leHBvcnQgY29uc3QgTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gT3ZlcmxheUNvbnRhaW5lciBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBMeU92ZXJsYXlDb250YWluZXIsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMeU92ZXJsYXlDb250YWluZXJdXSxcbiAgdXNlRmFjdG9yeTogTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWVxufTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtbRG9tU2VydmljZSwgTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJdXVxufSlcbmV4cG9ydCBjbGFzcyBMeERvbU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiwgT25Jbml0LCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgcGlwZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZW51bSBGb2N1c1N0YXR1cyB7XG4gIC8qKm1vdXNlIGFuZC9vciB0b3VjaCovXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIC8qKiBrZXlib2FyZCBhbmQvb3IgcHJvZ3JhbSovXG4gIEtFWUJPQVJEID0gJ2tleWJvYXJkJyxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5Rm9jdXNTdGF0ZV0nLFxuICBleHBvcnRBczogJ2x5Rm9jdXNTdGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RhdGU6IEZvY3VzU3RhdHVzO1xuICBzdGF0ZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBFbGVtZW50O1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBfc3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Rm9jdXNTdGF0dXM+KCk7XG4gIF9zdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBAT3V0cHV0KCkgbHlGb2N1c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNTdGF0dXM+KCk7XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNcbiAgICAgIC5zZXQoJ2ZvY3VzJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnYmx1cicsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uLmJpbmQodGhpcykpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjb25zdCBvbiA9IChldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9iOiBPYnNlcnZhYmxlPEZvY3VzU3RhdHVzPiA9IHRoaXMuX3N0YXRlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uID0gb2JcbiAgICAgIC8vIC5kZWJvdW5jZVRpbWUoMTExKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMTEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChlOiBGb2N1c1N0YXR1cykgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlID0gZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5seUZvY3VzQ2hhbmdlLmVtaXQoZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdGF0ZSgpIHtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdibHVyJykpIHtcbiAgICAgIHRoaXMuc3RhdGVNYXAuY2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCdtb3VzZWRvd24nKSB8fCB0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygndG91Y2hzdGFydCcpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLkRFRkFVTFQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5LRVlCT0FSRDtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGVTdWJqZWN0Lm5leHQoc3RhdGUpO1xuICB9XG5cbiAgb24oZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkge1xuICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIHNob3VsZFNldDogYm9vbGVhbikgPT4gc2hvdWxkU2V0ID8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSA6IHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgdG9nZ2xlQ2xhc3MoYGx5LWZvY3VzZWRgLCAhIXN0YXRlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBGb2N1c1N0YXR1cykge1xuICAgICAgaWYgKEZvY3VzU3RhdHVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gRm9jdXNTdGF0dXNba2V5XTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoYGx5LSR7Y2xhc3NOYW1lfS1mb2N1c2VkYCwgc3RhdGUgPT09IGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQobnVsbCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Rm9jdXNTdGF0ZSB9IGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUZvY3VzU3RhdGVdLFxuICBleHBvcnRzOiBbTHlGb2N1c1N0YXRlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGVNb2R1bGUgeyB9XG4iLCJleHBvcnQgY29uc3QgQVVJX1ZFUlNJT04gPSAnMS43LjAtYmV0YS4zd3RrYic7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMDctMzBUMDY6NTU6MDguNjA0Wic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSEFNTUVSX0dFU1RVUkVfQ09ORklHLCBIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuLi90aGVtZS9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBjb25zdCBMWV9IQU1NRVJfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxIYW1tZXJPcHRpb25zPignTFlfSEFNTUVSX09QVElPTlMnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBwcml2YXRlIF9oYW1tZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/ICh3aW5kb3cgYXMgYW55KS5IYW1tZXIgOiBudWxsO1xuICBldmVudHM6IHN0cmluZ1tdID0gdGhpcy5faGFtbWVyID8gW1xuICAgICdzbGlkZScsXG4gICAgJ3NsaWRlc3RhcnQnLFxuICAgICdzbGlkZWVuZCcsXG4gICAgJ3NsaWRlcmlnaHQnLFxuICAgICdzbGlkZWxlZnQnXG4gIF0gOiBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9ucyxcbiAgICAvLyBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIC8vIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAvLyAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgnay1oYW1tZXItY3NzJywge1xuICAgIC8vICAgICAnJzogKCkgPT4gKFxuICAgIC8vICAgICAgIGB1c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAvLyAgICAgICBgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7YCArXG4gICAgLy8gICAgICAgYC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtgXG4gICAgLy8gICAgIClcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICAvLyB9XG4gICAgY29uc3QgbWMgPSBuZXcgdGhpcy5faGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwgdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHBhbiA9IG5ldyB0aGlzLl9oYW1tZXIuUGFuKCk7XG4gICAgY29uc3Qgc3dpcGUgPSBuZXcgdGhpcy5faGFtbWVyLlN3aXBlKCk7XG4gICAgY29uc3Qgc2xpZGUgPSB0aGlzLl9jcmVhdGVSZWNvZ25pemVyKHBhbiwge2V2ZW50OiAnc2xpZGUnLCB0aHJlc2hvbGQ6IDB9LCBzd2lwZSk7XG5cbiAgICBzbGlkZS5yZWNvZ25pemVXaXRoKHN3aXBlKTtcbiAgICBwYW4ucmVjb2duaXplV2l0aChzd2lwZSk7XG5cbiAgICAvLyBBZGQgY3VzdG9taXplZCBnZXN0dXJlcyB0byBIYW1tZXIgbWFuYWdlclxuICAgIG1jLmFkZChbc3dpcGUsIHBhbiwgc2xpZGVdKTtcbiAgICByZXR1cm4gbWM7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyByZWNvZ25pemVyLCB3aXRob3V0IGFmZmVjdGluZyB0aGUgZGVmYXVsdCByZWNvZ25pemVycyBvZiBIYW1tZXJKUyAqL1xuICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyKGJhc2U6IGFueSwgb3B0aW9uczogYW55LCAuLi5pbmhlcml0YW5jZXM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVjb2duaXplciA9IG5ldyAoYmFzZS5jb25zdHJ1Y3Rvcikob3B0aW9ucyk7XG5cbiAgICBpbmhlcml0YW5jZXMucHVzaChiYXNlKTtcbiAgICBpbmhlcml0YW5jZXMuZm9yRWFjaChpdGVtID0+IHJlY29nbml6ZXIucmVjb2duaXplV2l0aChpdGVtKSk7XG5cbiAgICByZXR1cm4gcmVjb2duaXplcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgU2VsZiwgSG9zdCwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5VGhlbWVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIFRIRU1FMl9QUk9WSURFUl9GQUNUT1JZKFxuLy8gICBwYXJlbnRSZWdpc3RyeTogTHlUaGVtZTIsXG4vLyAgIGNvcmVUaGVtZTogQ29yZVRoZW1lKSB7XG4vLyAgIHJldHVybiBwYXJlbnRSZWdpc3RyeSB8fCBuZXcgTHlUaGVtZTIoY29yZVRoZW1lKTtcbi8vIH1cblxuLy8gLyoqIEBkb2NzLXByaXZhdGUgKi9cbi8vIGV4cG9ydCBjb25zdCBUSEVNRTJfUFJPVklERVIgPSB7XG4vLyAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gTHlUaGVtZTIgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbi8vICAgcHJvdmlkZTogTHlUaGVtZTIsXG4vLyAgIGRlcHM6IFtcbi8vICAgICBbbmV3IE9wdGlvbmFsKCksIEx5VGhlbWUyXSxcbi8vICAgICBbQ29yZVRoZW1lXVxuLy8gICBdLFxuLy8gICB1c2VGYWN0b3J5OiBUSEVNRTJfUFJPVklERVJfRkFDVE9SWSxcbi8vIH07XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBMeVRoZW1lMixcbiAgICAgICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogdGhlbWVOYW1lIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuLi90aGVtZS9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q29yZVN0eWxlcyB7XG4gIGNsYXNzZXMgPSB7XG4gICAgLyoqIFBvc2l0aW9uIGFic29sdXRlICovXG4gICAgRmlsbDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdrLWFic29sdXRlJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICAgICAgYHRvcDogMDtgICtcbiAgICAgICAgICBgYm90dG9tOiAwO2AgK1xuICAgICAgICAgIGBsZWZ0OiAwO2AgK1xuICAgICAgICAgIGByaWdodDogMDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIFZpc3VhbGx5SGlkZGVuOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stdmlzdWFsbHktaGlkZGVuJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBib3JkZXI6IDA7YCArXG4gICAgICAgICAgYGNsaXA6IHJlY3QoMCAwIDAgMCk7YCArXG4gICAgICAgICAgYGhlaWdodDogMXB4O2AgK1xuICAgICAgICAgIGBtYXJnaW46IC0xcHg7YCArXG4gICAgICAgICAgYG92ZXJmbG93OiBoaWRkZW47YCArXG4gICAgICAgICAgYHBhZGRpbmc6IDA7YCArXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgd2lkdGg6IDFweDtgICtcbiAgICAgICAgICBgb3V0bGluZTogMDtgICtcbiAgICAgICAgICBgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO2AgK1xuICAgICAgICAgIGAtbW96LWFwcGVhcmFuY2U6IG5vbmU7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lKSB7IH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVbmRlZmluZWQge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBUeXBvZ3JhcGh5Q29uZmlnIHtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udFdlaWdodD86IG51bWJlcjtcbiAgbGV0dGVyU3BhY2luZz86IG51bWJlcjtcbiAgdGV4dFRyYW5zZm9ybT86ICd1cHBlcmNhc2UnIHwgJ2NhcGl0YWxpemUnIHwgJ2xvd2VyY2FzZSc7XG59XG5cbmV4cG9ydCBjbGFzcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgaHRtbEZvbnRTaXplOiBudW1iZXIsXG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgfTtcbiAgcHhUb1JlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudHlwb2dyYXBoeS5mb250U2l6ZSAvIDE0O1xuICAgIHJldHVybiBgJHt2YWx1ZSAvIHRoaXMudHlwb2dyYXBoeS5odG1sRm9udFNpemUgKiBzaXplfXJlbWA7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdCQUErQixRQUFRO0lBQ3JDLHFCQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMscUJBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QyxxQkFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLHFCQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUN2RCxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQ3pDOzs7Ozs7QUNORCxBQUNBLHFCQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFFdkIscUJBQU0scUJBQXFCLEdBQUcsR0FBRyxDQUFDO0FBQ2xDLHFCQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQztBQUN0QyxxQkFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUM7QUFDeEMscUJBQWEsT0FBTyxHQUFHO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDM0MsQ0FBQzs7Ozs7O0FBQ0YsdUJBQThCLFNBQXFCLEVBQUUsS0FBYztJQUFyQywwQkFBQSxFQUFBLGFBQXFCO0lBQUUsc0JBQUEsRUFBQSxjQUFjO0lBQ2pFLHFCQUFNLEtB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