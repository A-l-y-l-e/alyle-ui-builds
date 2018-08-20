import * as _chroma from 'chroma-js';
import { InjectionToken, Injectable, Optional, Inject, RendererFactory2, isDevMode, ViewEncapsulation, Directive, Input, ElementRef, Renderer2, NgModule, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, NgZone, EventEmitter, Output, defineInjectable, SkipSelf, inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
    const /** @type {?} */ r = parseInt(hexcolor.substr(0, 2), 16);
    const /** @type {?} */ g = parseInt(hexcolor.substr(2, 2), 16);
    const /** @type {?} */ b = parseInt(hexcolor.substr(4, 2), 16);
    const /** @type {?} */ yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ chroma = _chroma;
const /** @type {?} */ shadowKeyUmbraOpacity = 0.2;
const /** @type {?} */ shadowKeyPenumbraOpacity = 0.14;
const /** @type {?} */ shadowAmbientShadowOpacity = 0.12;
const /** @type {?} */ Shadows = [
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
function shadowBuilderDeprecated(elevation = 2, color = '#000') {
    const /** @type {?} */ Color = chroma(color);
    const /** @type {?} */ colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    const /** @type {?} */ e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return `box-shadow:${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px ${colors[0]},${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px ${colors[1]},${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px ${colors[2]};`;
}
/**
 * @param {?} elevation
 * @param {?=} color
 * @return {?}
 */
function shadowBuilder(elevation, color) {
    const /** @type {?} */ Color = chroma(color || '#000').darken().saturate(2);
    const /** @type {?} */ colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    const /** @type {?} */ e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px ${colors[0]},${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px ${colors[1]},${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px ${colors[2]};`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ THEME_VARIABLES = new InjectionToken('ly.theme.variables');
const /** @type {?} */ IS_CORE_THEME = new InjectionToken('ly.is.root');
class ThemeVariables {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
const /** @type {?} */ hasV8BreakIterator = (typeof (Intl) !== 'undefined' && (/** @type {?} */ (Intl)).v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
    constructor() {
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
}
Platform.isBrowser = typeof document === 'object' && !!document;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ THEME_CONFIG = new InjectionToken('ly.theme.config.root');
const /** @type {?} */ LY_THEME_CONFIG = new InjectionToken('ly_theme_config');
const /** @type {?} */ LY_THEME_NAME = new InjectionToken('ly.theme.name');
class LyThemeConfig {
    constructor() {
        this.themes = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const InvertMediaQuery = {
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
function transformMediaQuery(media, invertMediaQuery = InvertMediaQuery.No) {
    if (media && invertMediaQuery === InvertMediaQuery.Yes) {
        const /** @type {?} */ newVal = media.split(',').map(_ => `not ${_}`);
        return newVal;
    }
    return media;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let /** @type {?} */ classId = 0;
class CoreTheme {
    /**
     * @param {?} themeConfig
     * @param {?} rendererFactory
     * @param {?} _document
     */
    constructor(themeConfig, rendererFactory, _document) {
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
            const /** @type {?} */ mediaStyleContainer = _document.body.querySelector('ly-media-style-container');
            const /** @type {?} */ primaryStyleContainer = _document.body.querySelector('ly-primary-style-container');
            const /** @type {?} */ secondaryStyleContainer = _document.body.querySelector('ly-secondary-style-container');
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
            themeConfig.themes.forEach(item => {
                this.add(new item);
            });
        }
    }
    /**
     * add new theme
     * @param {?} theme
     * @return {?}
     */
    add(theme) {
        this._themeMap.set(theme.name, theme);
        this._styleMap.set(theme.name, new Map());
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        return this._themeMap.get(name);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getStyleMap(name) {
        return this._styleMap.get(name);
    }
    /**
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    setUpStyle(key, styles, media, invertMediaQuery) {
        return this._ĸreateStyle(undefined, key, styles, this._styleCoreMap, 'root', this.primaryStyleContainer, media, invertMediaQuery);
    }
    /**
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    setUpStyleSecondary(key, styles, media, invertMediaQuery) {
        return this._ĸreateStyle(undefined, key, styles, this._styleCoreMap, 'root', this.secondaryStyleContainer, media, invertMediaQuery);
    }
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
    _ĸreateStyle(themeConfig, key, style, mapStyles, _for, _in, _media, invertMediaQuery) {
        if (mapStyles.has(key)) {
            return mapStyles.get(key).id;
        }
        else {
            const /** @type {?} */ id = `k${(classId++).toString(36)}`;
            const /** @type {?} */ styleElement = this.renderer.createElement('style');
            const /** @type {?} */ media = transformMediaQuery(_media, invertMediaQuery);
            const /** @type {?} */ styleContent = this.renderer.createText(this._createStyleContent(themeConfig, style, id, media));
            const /** @type {?} */ saveIn = media ? this.mediaStyleContainer : _in;
            this.renderer.appendChild(styleElement, styleContent);
            this.renderer.appendChild(saveIn, styleElement);
            if (isDevMode()) {
                this.renderer.setAttribute(styleElement, 'style_data', `${_for}···${id}···${key}`);
            }
            const /** @type {?} */ dataStyle = {
                id,
                style,
                styleElement,
                media
            };
            mapStyles.set(key, dataStyle);
            return id;
        }
    }
    /**
     * #style
     * @template T
     * @param {?} themeConfig
     * @param {?} styles
     * @param {?} id
     * @param {?=} media
     * @return {?}
     */
    _createStyleContent(themeConfig, styles, id, media) {
        const /** @type {?} */ typf = typeof styles;
        if (typf === 'string') {
            return toMedia(`.${id}{${styles}}`, media);
        }
        else if (typf === 'function') {
            return toMedia(`.${id}{${((/** @type {?} */ (styles)))(themeConfig)}}`, media);
        }
        let /** @type {?} */ content = '';
        for (const /** @type {?} */ key$ in /** @type {?} */ (styles)) {
            if (styles.hasOwnProperty(key$)) {
                const /** @type {?} */ val = styles[key$];
                const /** @type {?} */ text = typeof val === 'function' ? val(themeConfig) : val;
                content += `.${id}${key$}{${text}}`;
            }
        }
        return toMedia(content, media);
    }
    /**
     * @return {?}
     */
    setCoreStyle() {
        const /** @type {?} */ classname = this.setUpStyle('rootbody', {
            '': () => (`margin:0;`),
            ', *, *:after, *:before': () => (`-webkit-box-sizing: border-box;` +
                `-moz-box-sizing: border-box;` +
                `box-sizing: border-box;`)
        });
        this.renderer.addClass(this._document.body, classname);
    }
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClassname
     * @param {?=} oldClassname
     * @return {?}
     */
    updateClassName(element, renderer, newClassname, oldClassname) {
        if (oldClassname) {
            renderer.removeClass(element, oldClassname);
        }
        renderer.addClass(element, newClassname);
    }
}
CoreTheme.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
CoreTheme.ctorParameters = () => [
    { type: LyThemeConfig, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_CONFIG,] },] },
    { type: RendererFactory2, },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
/** @nocollapse */ CoreTheme.ngInjectableDef = defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(inject(LY_THEME_CONFIG, 8), inject(RendererFactory2), inject(DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
/**
 * Converter to media query if `media` is present
 * @param {?} text style content
 * @param {?=} media media query
 * @return {?}
 */
function toMedia(text, media) {
    if (typeof media === 'string') {
        return `@media ${media}{${text}}`;
    }
    else if (Array.isArray(media)) {
        let /** @type {?} */ result = '';
        media.forEach(_ => result += `@media ${_}{${text}}`);
        return result;
    }
    return text;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const TypeStyle = {
    Multiple: 0,
    OnlyOne: 1,
};
TypeStyle[TypeStyle.Multiple] = "Multiple";
TypeStyle[TypeStyle.OnlyOne] = "OnlyOne";
const /** @type {?} */ STYLE_MAP4 = {};
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
const /** @type {?} */ STYLE_MAP = {};
const /** @type {?} */ CLASSES_MAP = {};
const /** @type {?} */ STYLE_KEYS_MAP = {};
let /** @type {?} */ nextId = 0;
class StylesInDocument {
    constructor() {
        this.styles = {};
        this.styleContainers = new Map();
    }
}
StylesInDocument.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ StylesInDocument.ngInjectableDef = defineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
class LyTheme2 {
    /**
     * @param {?} stylesInDocument
     * @param {?} core
     * @param {?} themeName
     * @param {?} _document
     */
    constructor(stylesInDocument, core, themeName, _document) {
        this.stylesInDocument = stylesInDocument;
        this.core = core;
        this._document = _document;
        this.prefix = 'k';
        if (themeName) {
            this.setUpTheme(themeName);
        }
    }
    /**
     * @return {?}
     */
    get classes() {
        return CLASSES_MAP;
    }
    /**
     * @param {?} themeName
     * @return {?}
     */
    setUpTheme(themeName) {
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
    }
    /**
     * @template T
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    setUpStyle(key, styles, media, invertMediaQuery) {
        const /** @type {?} */ name = this.config.name;
        return this.core._ĸreateStyle(this.config, key, styles, this._styleMap, name, this.core.primaryStyleContainer, media, invertMediaQuery);
    }
    /**
     * @template T
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    setUpStyleSecondary(key, styles, media, invertMediaQuery) {
        const /** @type {?} */ name = this.config.name;
        return this.core._ĸreateStyle(this.config, key, styles, this._styleMap, name, this.core.secondaryStyleContainer, media, invertMediaQuery);
    }
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
    addStyle(id, style, el, instance, priority) {
        const /** @type {?} */ newClass = this.addCss(id, /** @type {?} */ (style), priority);
        if (instance) {
            el.classList.remove(instance);
        }
        el.classList.add(newClass);
        return newClass;
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    colorOf(value) {
        return get(this.config, value);
    }
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClassname
     * @param {?=} oldClassname
     * @return {?}
     */
    updateClassName(element, renderer, newClassname, oldClassname) {
        this.core.updateClassName(element, renderer, newClassname, oldClassname);
    }
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClass
     * @param {?=} oldClass
     * @return {?}
     */
    updateClass(element, renderer, newClass, oldClass) {
        this.updateClassName(element, renderer, newClass, oldClass);
        return newClass;
    }
    /**
     * @param {?} nam
     * @return {?}
     */
    setTheme(nam) {
        if (!Platform.isBrowser) {
            throw new Error(`\`theme.setTheme('theme-name')\` is only available in browser platform`);
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
        this._styleMap.forEach((dataStyle) => {
            dataStyle.styleElement.innerText = this.core._createStyleContent(this.config, dataStyle.style, dataStyle.id);
        });
        const { styleContainers, styles } = this.stylesInDocument;
        const /** @type {?} */ currentStyles = this.elements;
        for (const /** @type {?} */ key in currentStyles) {
            if (currentStyles.hasOwnProperty(key)) {
                const /** @type {?} */ styleData = STYLE_MAP4[key];
                if (styleData.requireUpdate) {
                    this._createStyleContent2(styleData.styles, key, styleData.priority, styleData.type, true);
                }
            }
        }
    }
    /**
     * add style, similar to setUpStyle but this only accept string
     * @param {?} id id of style
     * @param {?} css style in string
     * @param {?} priority
     * @param {?=} media
     * @return {?}
     */
    addCss(id, css, priority, media) {
        const /** @type {?} */ newId = `~>${id}`;
        return /** @type {?} */ (this._createStyleContent2(/** @type {?} */ (css), newId, priority, TypeStyle.OnlyOne, false, media));
    }
    /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id unique id for style group
     * @param {?=} priority
     * @return {?}
     */
    addStyleSheet(styles, id, priority) {
        const /** @type {?} */ newId = id || 'global';
        // const styleElement = this.core.renderer.createElement('style');
        return this._createStyleContent2(styles, newId, priority, TypeStyle.Multiple);
    }
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
    _createStyleContent2(styles, id, priority, type, forChangeTheme, media) {
        const /** @type {?} */ styleMap = (id in STYLE_MAP4
            ? STYLE_MAP4[id]
            : STYLE_MAP4[id] = {
                priority,
                styles,
                type,
                css: {}
            });
        // const styles2 = this.config.name in this.stylesInDocument.styles
        // ? this.stylesInDocument.styles[this.config.name]
        // : this.stylesInDocument.styles[this.config.name] = {};
        // console.log(
        //   'ccc', typeof styleMap.css !== 'string' && !(id in styleMap.css),
        //   typeof CLASSES_MAP[id] === 'string' || typeof CLASSES_MAP[id] === 'object' || CLASSES_MAP[this.config.name][id]
        // );
        const /** @type {?} */ themeName = this.initialTheme;
        const /** @type {?} */ isCreated = (id in CLASSES_MAP) || CLASSES_MAP[themeName][id];
        if (!isCreated || forChangeTheme) {
            /**
             * create new style for new theme
             */
            let /** @type {?} */ css;
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
            const /** @type {?} */ el = this.elements[id]
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
        const /** @type {?} */ classes = typeof CLASSES_MAP[id] === 'string'
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
    }
    /**
     * @param {?} styles
     * @param {?} id
     * @param {?} priority
     * @param {?} type
     * @param {?=} forChangeTheme
     * @return {?}
     */
    _updateStylesBrowser(styles, id, priority, type, forChangeTheme) {
    }
    /**
     * @param {?=} priority
     * @return {?}
     */
    _createStyleContainer(priority = 0) {
        const { styleContainers } = this.stylesInDocument;
        if (!styleContainers.has(priority)) {
            const /** @type {?} */ el = this.core.renderer.createElement(`ly-s-c`);
            if (isDevMode()) {
                this.core.renderer.setAttribute(el, 'priority', `${priority}`);
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
        const /** @type {?} */ refChild = this.findNode(priority);
        this.core.renderer.insertBefore(this._document.body, styleContainers.get(priority), refChild);
        return styleContainers.get(priority);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    findNode(index) {
        const { styleContainers } = this.stylesInDocument;
        const /** @type {?} */ keys = (Array.from(styleContainers.keys())).sort();
        const /** @type {?} */ key = keys.find(_ => index < _);
        return (key && styleContainers.get(key)) || this.core.firstElement;
    }
    /**
     * @param {?} css
     * @return {?}
     */
    _createElementStyle(css) {
        const /** @type {?} */ styleElement = this.core.renderer.createElement('style');
        const /** @type {?} */ styleText = this.core.renderer.createText(css);
        this.core.renderer.appendChild(styleElement, styleText);
        return styleElement;
    }
    /**
     * @param {?} themeName
     * @return {?}
     */
    _createInstanceForTheme(themeName) {
        if (!(themeName in CLASSES_MAP)) {
            CLASSES_MAP[themeName] = {};
        }
    }
}
LyTheme2.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LyTheme2.ctorParameters = () => [
    { type: StylesInDocument, },
    { type: CoreTheme, },
    { type: undefined, decorators: [{ type: Inject, args: [LY_THEME_NAME,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
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
        const /** @type {?} */ className = CLASSES_MAP[id]
            ? CLASSES_MAP[id] = _classes_ || createNextId()
            : CLASSES_MAP[themeName][id] = _classes_ || createNextId();
        if (typeof styles === 'string') {
            const /** @type {?} */ css = `.${className}{${styles}}`;
            // STYLE_MAP4[id].rules = styles;
            return media ? toMedia$1(css, media) : css;
        }
        else {
            const /** @type {?} */ rules = styleToString(styles, null, `.${className}`);
            return rules;
        }
    }
    let /** @type {?} */ content = '';
    // const classesMap = id in themeMap
    // ? themeMap[id]
    // : themeMap[id] = {};
    const /** @type {?} */ classes = CLASSES_MAP[id]
        ? CLASSES_MAP[id] = _classes_ || {}
        : CLASSES_MAP[themeName][id] = _classes_ || {};
    for (const /** @type {?} */ key in styles) {
        if (styles.hasOwnProperty(key)) {
            const /** @type {?} */ value = styles[key];
            if (typeof value === 'object') {
                const /** @type {?} */ className = classes[key] || (classes[key] = isDevMode() ? toClassNameValid(`${id}---${key}-${createNextId()}`) : createNextId());
                const /** @type {?} */ style = styleToString(/** @type {?} */ (value), null, `.${className}`);
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
    let /** @type {?} */ content = '';
    let /** @type {?} */ keyAndValue = '';
    for (const /** @type {?} */ styleKey in ob) {
        if (ob.hasOwnProperty(styleKey)) {
            const /** @type {?} */ element = ob[styleKey];
            if (typeof element === 'object') {
                // rulesMap[styleKey] = null;
                content += styleToString(/** @type {?} */ (element), null, styleKey, className);
            }
            else {
                const /** @type {?} */ newStyleKey = toHyphenCaseCache(styleKey);
                // const style = rulesMap[newStyleKey] = element;
                keyAndValue += `${newStyleKey}:${element};`;
            }
        }
    }
    if (className) {
        let /** @type {?} */ newClassName = '';
        if (parentClassName) {
            newClassName += className.indexOf('&') === 0 ? `${parentClassName}${className.slice(1)}` : `${parentClassName} .${className}`;
        }
        else {
            newClassName += className;
        }
        content += `${newClassName}`;
    }
    content += `{${keyAndValue}}`;
    return content;
}
/**
 * @deprecated
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function get(obj, path) {
    const /** @type {?} */ _path = path instanceof Array ? path : path.split(':');
    for (let /** @type {?} */ i = 0; i < _path.length; i++) {
        obj = obj[_path[i]] || path;
    }
    return typeof obj === 'string' ? /** @type {?} */ (obj) : /** @type {?} */ (obj['default']);
}
/**
 * @param {?} str
 * @return {?}
 */
function toHyphenCase(str) {
    return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}
/**
 * @param {?} str
 * @return {?}
 */
function toClassNameValid(str) {
    const /** @type {?} */ s = str.replace(/^[0-9]|[^\w\-]/g, _ => {
        return `_${_.charCodeAt(0)}`;
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
    return `@media ${media}{${css}}`;
}
/**
 * @return {?}
 */
function createNextId() {
    return `e${(nextId++).toString(36)}`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgTranscludeDirective {
    /**
     * @param {?} _viewRef
     */
    constructor(_viewRef) {
        this._viewRef = _viewRef;
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    set ngTransclude(templateRef) {
        if (templateRef) {
            this._ngTransclude = templateRef;
            this._viewRef.createEmbeddedView(templateRef);
        }
    }
    /**
     * @return {?}
     */
    get ngTransclude() {
        return this._ngTransclude;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._viewRef.remove();
    }
}
NgTranscludeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngTransclude]'
            },] },
];
/** @nocollapse */
NgTranscludeDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
NgTranscludeDirective.propDecorators = {
    "ngTransclude": [{ type: Input },],
};
class NgTranscludeModule {
}
NgTranscludeModule.decorators = [
    { type: NgModule, args: [{
                exports: [NgTranscludeDirective],
                declarations: [NgTranscludeDirective]
            },] },
];

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
    let /** @type {?} */ docElem, /** @type {?} */ win, /** @type {?} */
    box = { top: 0, left: 0 };
    const /** @type {?} */ doc = elem && elem.ownerDocument;
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
    return value != null && `${value}` !== 'false';
}
/**
 * @deprecated
 * @return {?}
 */
function IsBoolean() {
    return (target, key) => {
        const /** @type {?} */ definition = Object.getOwnPropertyDescriptor(target, key);
        if (definition) {
            Object.defineProperty(target, key, {
                get: definition.get,
                set: newValue => {
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
class LyCommon {
    /**
     * @param {?} theme
     * @param {?} elementRef
     */
    constructor(theme, elementRef) {
        this.theme = theme;
        this.elementRef = elementRef;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set raised(val) { this._raised = toBoolean(val); }
    /**
     * @return {?}
     */
    get raised() { return this._raised; }
    /**
     * @param {?} val
     * @return {?}
     */
    set disabled(val) { this._disabled = toBoolean(val); }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} val
     * @return {?}
     */
    set outlined(val) { this._outlined = toBoolean(val); }
    /**
     * @return {?}
     */
    get outlined() { return this._outlined; }
    /**
     * @return {?}
     */
    setAutoContrast() {
        this._autoContrast = true;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._isContrast = this._autoContrast && !this.color || this.color === 'auto';
        const /** @type {?} */ newKey = `common----:${this.bg || DEFAULT_VALUE}·${this.color || DEFAULT_VALUE}·${this.raised || DEFAULT_VALUE}·${this.elevation || DEFAULT_VALUE}·${this.disabled || DEFAULT_VALUE}·${this.outlined || DEFAULT_VALUE}·${this.shadowColor || DEFAULT_VALUE}·${this._isContrast || DEFAULT_VALUE}`;
        this._className = this.theme.addStyle(newKey, (theme) => {
            const /** @type {?} */ style = {};
            if (this.outlined) {
                style.border = '1px solid currentColor';
            }
            if (this.disabled) {
                style.color = theme.text.disabled;
                style.pointerEvents = 'none';
                if (this.bg) {
                    style.background = theme.button.disabled;
                }
            }
            else {
                if (this.bg) {
                    style.background = theme.colorOf(this.bg);
                    if (this._isContrast) {
                        style.color = theme.colorOf(`${this.bg}:contrast`);
                    }
                }
                if (!style.color && this.color) {
                    style.color = theme.colorOf(this.color);
                }
                if (this.raised || this.elevation) {
                    const /** @type {?} */ shadowColor = (this.shadowColor && theme.colorOf(this.shadowColor)) || style.background || style.color || theme.colorShadow;
                    if (!this.bg) {
                        style.background = theme.background.primary;
                    }
                    style.boxShadow = shadowBuilder(this.elevation || 3, shadowColor);
                    if (!this.elevation) {
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
    }
    /**
     * @return {?}
     */
    _getHostElement() {
        return this.elementRef.nativeElement;
    }
}
LyCommon.decorators = [
    { type: Directive, args: [{
                selector: `
            [bg],
            [color],
            [raised],
            [raised][shadowColor],
            [ly-button][outlined],
            [elevation],
            [elevation][shadowColor],
            [disabled],
            ly-card
            `
            },] },
];
/** @nocollapse */
LyCommon.ctorParameters = () => [
    { type: LyTheme2, },
    { type: ElementRef, },
];
LyCommon.propDecorators = {
    "bg": [{ type: Input },],
    "color": [{ type: Input },],
    "raised": [{ type: Input },],
    "disabled": [{ type: Input },],
    "outlined": [{ type: Input },],
    "elevation": [{ type: Input },],
    "shadowColor": [{ type: Input },],
};
const /** @type {?} */ DEFAULT_VALUE = '';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @deprecated
 */
const /** @type {?} */ LY_GLOBAL_CONTRAST = new InjectionToken('ly.global.contrast');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyShadowService {
    constructor() {
        /**
         * Default elevation
         */
        this.elevation = 1;
    }
    /**
     * demo: setShadow(...[elevation, color]...)
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} val
     * @param {?=} oldClassName
     * @return {?}
     */
    setShadow(theme, elementRef, renderer, val, oldClassName) {
        let /** @type {?} */ keys;
        let /** @type {?} */ elevation;
        let /** @type {?} */ color = 'colorShadow';
        if (val) {
            keys = val.join('');
            elevation = val[0];
            color = val[1] || color;
        }
        else {
            keys = `${this.elevation}${color}`;
            elevation = this.elevation;
        }
        const /** @type {?} */ classname = theme.setUpStyle(`shadow${keys}`, { '': () => {
                return `${shadowBuilderDeprecated(elevation, theme.colorOf(color))}`;
            } });
        theme.updateClassName(elementRef.nativeElement, renderer, classname, oldClassName);
        return classname;
    }
}
LyShadowService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ LyShadowService.ngInjectableDef = defineInjectable({ factory: function LyShadowService_Factory() { return new LyShadowService(); }, token: LyShadowService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyNewRaised {
    /**
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} shadow
     */
    constructor(theme, elementRef, renderer, shadow) {
        this.theme = theme;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.shadow = shadow;
        this.elevation = 3;
    }
    /**
     * Default raised
     * @param {?} value
     * @return {?}
     */
    set newRaised(value) {
        this.currentClassName = this.shadow.setShadow(this.theme, this.elementRef, this.renderer, [value[0] || this.elevation, value[1]], this.currentClassName);
    }
}
LyNewRaised.decorators = [
    { type: Directive, args: [{ selector: ':not([raised])[newRaised]' },] },
];
/** @nocollapse */
LyNewRaised.ctorParameters = () => [
    { type: LyTheme2, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LyShadowService, },
];
LyNewRaised.propDecorators = {
    "newRaised": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyThemeContainer {
    /**
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(theme, elementRef, renderer) {
        this.theme = theme;
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * set theme
     * @param {?} nam
     * @return {?}
     */
    set lyTheme(nam) {
        this._lyTheme = nam;
        this.theme.setUpTheme(name);
    }
    /**
     * @return {?}
     */
    get lyTheme() {
        return this._lyTheme;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setContainerStyle(this.elementRef.nativeElement, this.renderer);
    }
    /**
     * @param {?} element
     * @param {?} renderer
     * @return {?}
     */
    _setContainerStyle(element, renderer) {
        const /** @type {?} */ classname = this.theme.setUpStyle(`theme:${this.theme.config.name}`, {
            '': () => (`background-color:${this.theme.config["background"].default};` +
                `color:${this.theme.config["text"].default};` +
                `font-family:${this.theme.config["typography"].fontFamily};`)
        });
        renderer.addClass(element, classname);
    }
}
LyThemeContainer.decorators = [
    { type: Directive, args: [{
                selector: '[lyTheme]',
                providers: [LyTheme2],
                exportAs: 'lyTheme'
            },] },
];
/** @nocollapse */
LyThemeContainer.ctorParameters = () => [
    { type: LyTheme2, },
    { type: ElementRef, },
    { type: Renderer2, },
];
LyThemeContainer.propDecorators = {
    "lyTheme": [{ type: Input },],
    "shared": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyWithClass {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set withClass(val) {
        if (!val) {
            throw new Error(`'${val}' is not valid className`);
        }
        this.el.nativeElement.classList.add(val);
    }
}
LyWithClass.decorators = [
    { type: Directive, args: [{
                selector: '[withClass]'
            },] },
];
/** @nocollapse */
LyWithClass.ctorParameters = () => [
    { type: ElementRef, },
];
LyWithClass.propDecorators = {
    "withClass": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyCommonModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyOverlayContainer {
    constructor() {
        if (Platform.isBrowser) {
            const /** @type {?} */ container = document.createElement('ly-overlay-container');
            document.body.appendChild(container);
            this._containerElement = container;
        }
    }
    /**
     * @return {?}
     */
    get containerElement() {
        return this._containerElement;
    }
}
LyOverlayContainer.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LyOverlayContainer.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DomService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} overlayContainer
     */
    constructor(componentFactoryResolver, overlayContainer) {
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
    attach(_hostViewContainerRef, component, template) {
        const /** @type {?} */ viewRef = _hostViewContainerRef.createEmbeddedView(template);
        viewRef.detectChanges();
        this._viewContainerRef = _hostViewContainerRef;
        viewRef.rootNodes.forEach(rootNode => this.addChild(rootNode));
    }
    /**
     * @param {?} child
     * @return {?}
     */
    addChild(child) {
        this.overlayContainer.containerElement.appendChild(child);
    }
    /**
     * @param {?} componentRef
     * @return {?}
     */
    getDomElementFromComponentRef(componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView))
            .rootNodes[0]);
    }
    /**
     * @param {?} componentRef
     * @param {?} delay
     * @return {?}
     */
    destroyRef(componentRef, delay) {
        setTimeout(() => {
            if (this._viewContainerRef) {
                this._viewContainerRef.detach();
                this._viewContainerRef.clear();
            }
        }, delay);
    }
}
DomService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DomService.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: LyOverlayContainer, },
];

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
const /** @type {?} */ LY_OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: LyOverlayContainer,
    deps: [[new Optional(), new SkipSelf(), LyOverlayContainer]],
    useFactory: LY_OVERLAY_CONTAINER_PROVIDER_FACTORY
};
class LxDomModule {
}
LxDomModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [[DomService, LY_OVERLAY_CONTAINER_PROVIDER]]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const FocusStatus = {
    /**mouse and/or touch*/
    DEFAULT: 'default',
    /** keyboard and/or program*/
    KEYBOARD: 'keyboard',
};
class LyFocusState {
    /**
     * @param {?} elementRef
     * @param {?} _ngZone
     * @param {?} _renderer
     * @param {?} _cd
     */
    constructor(elementRef, _ngZone, _renderer, _cd) {
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
            const /** @type {?} */ element = elementRef.nativeElement;
            this.setTriggerElement(element);
            const /** @type {?} */ ob = this._stateSubject.asObservable();
            this._stateSubscription = ob
                // .debounceTime(111)
                .pipe(debounceTime(111))
                .subscribe((e) => {
                this.state = e;
                this._updateClass();
                this.lyFocusChange.emit(e);
            });
        }
    }
    /**
     * @return {?}
     */
    _updateState() {
        let /** @type {?} */ state;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    on(event) {
        this.stateMap.set(event.type, true);
        this._updateState();
    }
    /**
     * @return {?}
     */
    _updateClass() {
        const /** @type {?} */ element = this._containerElement;
        const /** @type {?} */ state = this.state;
        const /** @type {?} */ toggleClass = (className, shouldSet) => shouldSet ? this._renderer.addClass(element, className) : this._renderer.removeClass(element, className);
        toggleClass(`ly-focused`, !!state);
        for (const /** @type {?} */ key in FocusStatus) {
            if (FocusStatus.hasOwnProperty(key)) {
                const /** @type {?} */ className = FocusStatus[key];
                toggleClass(`ly-${className}-focused`, state === className);
            }
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    setTriggerElement(element) {
        if (this._containerElement) {
            this._eventHandlers.forEach((fn, type) => {
                this._containerElement.removeEventListener(type, fn, this._eventOptions);
            });
        }
        if (element) {
            this._ngZone.runOutsideAngular(() => {
                return this._eventHandlers.forEach((fn, type) => {
                    return element.addEventListener(type, fn, this._eventOptions);
                });
            });
        }
        this._containerElement = element;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Platform.isBrowser) {
            this._stateSubscription.unsubscribe();
            this.setTriggerElement(null);
        }
    }
}
LyFocusState.decorators = [
    { type: Directive, args: [{
                selector: '[lyFocusState]',
                exportAs: 'lyFocusState'
            },] },
];
/** @nocollapse */
LyFocusState.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgZone, },
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
LyFocusState.propDecorators = {
    "lyFocusChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyFocusStateModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ AUI_VERSION = '1.7.0-beta.50yre';
const /** @type {?} */ AUI_LAST_UPDATE = '2018-08-20T23:11:27.454Z';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
class LyHammerGestureConfig extends HammerGestureConfig {
    /**
     * @param {?} _hammerOptions
     */
    constructor(_hammerOptions) {
        super();
        this._hammerOptions = _hammerOptions;
        this._hammer = typeof window !== 'undefined' ? (/** @type {?} */ (window)).Hammer : null;
        this.events = this._hammer ? [
            'slide',
            'slidestart',
            'slideend',
            'slideright',
            'slideleft'
        ] : [];
    }
    /**
     * @param {?} element
     * @return {?}
     */
    buildHammer(element) {
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
        const /** @type {?} */ mc = new this._hammer(element, this._hammerOptions || undefined);
        const /** @type {?} */ pan = new this._hammer.Pan();
        const /** @type {?} */ swipe = new this._hammer.Swipe();
        const /** @type {?} */ slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        slide.recognizeWith(swipe);
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, pan, slide]);
        return mc;
    }
    /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    _createRecognizer(base, options, ...inheritances) {
        const /** @type {?} */ recognizer = new (base.constructor)(options);
        inheritances.push(base);
        inheritances.forEach(item => recognizer.recognizeWith(item));
        return recognizer;
    }
}
LyHammerGestureConfig.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LyHammerGestureConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_HAMMER_OPTIONS,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyThemeModule {
    /**
     * @param {?} themeName
     * @return {?}
     */
    static setTheme(themeName) {
        return {
            ngModule: LyThemeModule,
            providers: [
                [LyTheme2],
                { provide: LY_THEME_NAME, useValue: themeName }
            ]
        };
    }
}
LyThemeModule.decorators = [
    { type: NgModule },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyCoreStyles {
    /**
     * @param {?} coreTheme
     */
    constructor(coreTheme) {
        this.coreTheme = coreTheme;
        this.classes = {
            /** Position absolute */
            Fill: this.coreTheme.setUpStyle('k-absolute', {
                '': () => (`position: absolute;` +
                    `top: 0;` +
                    `bottom: 0;` +
                    `left: 0;` +
                    `right: 0;`)
            }),
            VisuallyHidden: this.coreTheme.setUpStyle('k-visually-hidden', {
                '': () => (`border: 0;` +
                    `clip: rect(0 0 0 0);` +
                    `height: 1px;` +
                    `margin: -1px;` +
                    `overflow: hidden;` +
                    `padding: 0;` +
                    `position: absolute;` +
                    `width: 1px;` +
                    `outline: 0;` +
                    `-webkit-appearance: none;` +
                    `-moz-appearance: none;`)
            })
        };
    }
}
LyCoreStyles.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
LyCoreStyles.ctorParameters = () => [
    { type: CoreTheme, },
];
/** @nocollapse */ LyCoreStyles.ngInjectableDef = defineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(inject(CoreTheme)); }, token: LyCoreStyles, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Undefined {
    constructor() { }
}
const /** @type {?} */ UndefinedValue = new Undefined();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyStyleUtils {
    /**
     * @param {?} value
     * @return {?}
     */
    pxToRem(value) {
        const /** @type {?} */ size = this.typography.fontSize / 14;
        return `${value / this.typography.htmlFontSize * size}rem`;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    colorOf(value) {
        return get$1(this, value);
    }
}
/**
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function get$1(obj, path) {
    const /** @type {?} */ _path = path instanceof Array ? path : path.split(':');
    for (let /** @type {?} */ i = 0; i < _path.length; i++) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb3JlLXRoZW1lLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9jb21tb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9lbC9vZmZzZXQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9pcy1ib29sZWFuLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZGVmYXVsdC1lbnRyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb21tb24uZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbnRyYXN0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3NoYWRvdy5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3JhaXNlZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3dpdGgtY2xhc3MuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbW1vbi5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXktY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vZG9tLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL2x4LWRvbS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2ZvY3VzLXN0YXRlL2ZvY3VzLXN0YXRlLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy92ZXJzaW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2dlc3R1cmUvZ2VzdHVyZS1jb25maWcudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlcy9jb3JlLXN0eWxlcy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy91bmRlZmluZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc3R5bGUtdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0WUlRKGhleGNvbG9yKSB7XG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigyLCAyKSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XG4gIGNvbnN0IHlpcSA9ICgociAqIDI5OSkgKyAoZyAqIDU4NykgKyAoYiAqIDExNCkpIC8gMTAwMDtcbiAgcmV0dXJuICh5aXEgPj0gMTI4KSA/ICdibGFjaycgOiAnd2hpdGUnO1xufVxuIiwiaW1wb3J0ICogYXMgX2Nocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuY29uc3QgY2hyb21hID0gX2Nocm9tYTtcblxuY29uc3Qgc2hhZG93S2V5VW1icmFPcGFjaXR5ID0gMC4yO1xuY29uc3Qgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbmNvbnN0IHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcbmV4cG9ydCBjb25zdCBTaGFkb3dzID0gW1xuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAxLCAzLCAwLCAwLCAxLCAxLCAwLCAwLCAyLCAxLCAtMV0sXG4gIFswLCAxLCA1LCAwLCAwLCAyLCAyLCAwLCAwLCAzLCAxLCAtMl0sXG4gIFswLCAxLCA4LCAwLCAwLCAzLCA0LCAwLCAwLCAzLCAzLCAtMl0sXG4gIFswLCAyLCA0LCAtMSwgMCwgNCwgNSwgMCwgMCwgMSwgMTAsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDUsIDgsIDAsIDAsIDEsIDE0LCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA2LCAxMCwgMCwgMCwgMSwgMTgsIDBdLFxuICBbMCwgNCwgNSwgLTIsIDAsIDcsIDEwLCAxLCAwLCAyLCAxNiwgMV0sXG4gIFswLCA1LCA1LCAtMywgMCwgOCwgMTAsIDEsIDAsIDMsIDE0LCAyXSxcbiAgWzAsIDUsIDYsIC0zLCAwLCA5LCAxMiwgMSwgMCwgMywgMTYsIDJdLFxuICBbMCwgNiwgNiwgLTMsIDAsIDEwLCAxNCwgMSwgMCwgNCwgMTgsIDNdLFxuICBbMCwgNiwgNywgLTQsIDAsIDExLCAxNSwgMSwgMCwgNCwgMjAsIDNdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEyLCAxNywgMiwgMCwgNSwgMjIsIDRdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEzLCAxOSwgMiwgMCwgNSwgMjQsIDRdLFxuICBbMCwgNywgOSwgLTQsIDAsIDE0LCAyMSwgMiwgMCwgNSwgMjYsIDRdLFxuICBbMCwgOCwgOSwgLTUsIDAsIDE1LCAyMiwgMiwgMCwgNiwgMjgsIDVdLFxuICBbMCwgOCwgMTAsIC01LCAwLCAxNiwgMjQsIDIsIDAsIDYsIDMwLCA1XSxcbiAgWzAsIDgsIDExLCAtNSwgMCwgMTcsIDI2LCAyLCAwLCA2LCAzMiwgNV0sXG4gIFswLCA5LCAxMSwgLTUsIDAsIDE4LCAyOCwgMiwgMCwgNywgMzQsIDZdLFxuICBbMCwgOSwgMTIsIC02LCAwLCAxOSwgMjksIDIsIDAsIDcsIDM2LCA2XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIwLCAzMSwgMywgMCwgOCwgMzgsIDddLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjEsIDMzLCAzLCAwLCA4LCA0MCwgN10sXG4gIFswLCAxMCwgMTQsIC02LCAwLCAyMiwgMzUsIDMsIDAsIDgsIDQyLCA3XSxcbiAgWzAsIDExLCAxNCwgLTcsIDAsIDIzLCAzNiwgMywgMCwgOSwgNDQsIDhdLFxuICBbMCwgMTEsIDE1LCAtNywgMCwgMjQsIDM4LCAzLCAwLCA5LCA0NiwgOF1cbl07XG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcgPSAyLCBjb2xvciA9ICcjMDAwJykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvcik7XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGBib3gtc2hhZG93OiR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlcihlbGV2YXRpb246IG51bWJlciB8IHN0cmluZywgY29sb3I/OiBzdHJpbmcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IgfHwgJyMwMDAnKS5kYXJrZW4oKS5zYXR1cmF0ZSgyKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYCR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xyXG5leHBvcnQgY29uc3QgSVNfQ09SRV9USEVNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjx0cnVlPignbHkuaXMucm9vdCcpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRoZW1lVmFyaWFibGVzIHtcclxuICAvKiogVGhlbWUgbmFtZSAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmltYXJ5PzogUGFsZXR0ZVZhcmlhYmxlcztcclxuICBhY2NlbnQ/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4gIC8qKiB3YXJuIG9yIGVycm9yIGNvbG9yICovXHJcbiAgd2Fybj86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbiAgc2NoZW1lPzogc3RyaW5nO1xyXG4gIGNvbG9yU2NoZW1lcz86IHtcclxuICAgIFtrZXk6IHN0cmluZ106IENvbG9yU2NoZW1lXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xyXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XHJcbiAgY29udHJhc3Q/OiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcclxuICBiYWNrZ3JvdW5kPzoge1xyXG4gICAgZGVmYXVsdD86IHN0cmluZyxcclxuICAgIHBhcGVyPzogc3RyaW5nLFxyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbiAgdGV4dD86IHtcclxuICAgIGRlZmF1bHQ6IHN0cmluZyxcclxuICAgIHByaW1hcnk/OiBzdHJpbmcsXHJcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IHN0cmluZyxcclxuICAgIGhpbnQ/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICBkaXZpZGVyPzogc3RyaW5nO1xyXG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xyXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xyXG4gIGJhcj86IHN0cmluZztcclxuICBpbnB1dD86IHtcclxuICAgIGxhYmVsPzogc3RyaW5nLFxyXG4gICAgdW5kZXJsaW5lPzogc3RyaW5nXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBzdXBwb3J0cyB0aGUgVjggQnJlYWsgSXRlcmF0b3IuIFRoZSBWOCBjaGVja1xyXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cclxuY29uc3QgaGFzVjhCcmVha0l0ZXJhdG9yID0gKHR5cGVvZihJbnRsKSAhPT0gJ3VuZGVmaW5lZCcgJiYgKEludGwgYXMgYW55KS52OEJyZWFrSXRlcmF0b3IpO1xyXG4vKipcclxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcclxuICogY2hlY2tpbmcgYnJvd3Nlci1zcGVjaWZpYyBnbG9iYWwgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGlzQnJvd3NlcjogYm9vbGVhbiA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudDtcclxuICAvKiogTGF5b3V0IEVuZ2luZXMgKi9cclxuICBFREdFID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZWRnZSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gIFRSSURFTlQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gRWRnZUhUTUwgYW5kIFRyaWRlbnQgbW9jayBCbGluayBzcGVjaWZpYyB0aGluZ3MgYW5kIG5lZWQgdG8gYmUgZXhjbHVkZWQgZnJvbSB0aGlzIGNoZWNrLlxyXG4gIEJMSU5LID0gUGxhdGZvcm0uaXNCcm93c2VyICYmXHJcbiAgICAgICghISgod2luZG93IGFzIGFueSkuY2hyb21lIHx8IGhhc1Y4QnJlYWtJdGVyYXRvcikgJiYgISFDU1MgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UKTtcclxuXHJcbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXHJcbiAgLy8gZW5zdXJlIHRoYXQgV2Via2l0IHJ1bnMgc3RhbmRhbG9uZSBhbmQgaXMgbm90IHVzZWQgYXMgYW5vdGhlciBlbmdpbmUncyBiYXNlLlxyXG4gIFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxyXG4gICAgICAvQXBwbGVXZWJLaXQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLkJMSU5LICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xyXG4gIElPUyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhKHdpbmRvdyBhcyBhbnkpLk1TU3RyZWFtO1xyXG5cclxuICAvLyBJdCdzIGRpZmZpY3VsdCB0byBkZXRlY3QgdGhlIHBsYWluIEdlY2tvIGVuZ2luZSwgYmVjYXVzZSBtb3N0IG9mIHRoZSBicm93c2VycyBpZGVudGlmeVxyXG4gIC8vIHRoZW0gc2VsZiBhcyBHZWNrby1saWtlIGJyb3dzZXJzIGFuZCBtb2RpZnkgdGhlIHVzZXJBZ2VudCdzIGFjY29yZGluZyB0byB0aGF0LlxyXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxyXG4gIC8vIGluc3RlYWQgb2YgaGF2aW5nIGFuIHVuc3RhYmxlIGNoZWNrIGZvciBHZWNrby5cclxuICBGSVJFRk9YID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gVHJpZGVudCBvbiBtb2JpbGUgYWRkcyB0aGUgYW5kcm9pZCBwbGF0Zm9ybSB0byB0aGUgdXNlckFnZW50IHRvIHRyaWNrIGRldGVjdGlvbnMuXHJcbiAgQU5EUk9JRCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvYW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLy8gU2FmYXJpIGJyb3dzZXJzIHdpbGwgaW5jbHVkZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlaXIgdXNlckFnZW50LiBTb21lIGJyb3dzZXJzIG1heSBmYWtlXHJcbiAgLy8gdGhpcyBhbmQganVzdCBwbGFjZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlIHVzZXJBZ2VudC4gVG8gYmUgbW9yZSBzYWZlIGFib3V0IFNhZmFyaSBldmVyeVxyXG4gIC8vIFNhZmFyaSBicm93c2VyIHNob3VsZCBhbHNvIHVzZSBXZWJraXQgYXMgaXRzIGxheW91dCBlbmdpbmUuXHJcbiAgU0FGQVJJID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9zYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIHRoaXMuV0VCS0lUO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHkudGhlbWUuY29uZmlnLnJvb3QnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48THlUaGVtZUNvbmZpZz4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignbHkudGhlbWUubmFtZScpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBhY2NlbnQ6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIHdhcm46IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIEx5VGhlbWVDb25maWcge1xuICB0aGVtZXM6IGFueVtdID0gW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFZhbCB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZUNvbG9yIHtcbiAgY29udHJhc3Q6IHN0cmluZztcbn1cbiIsImV4cG9ydCBlbnVtIEludmVydE1lZGlhUXVlcnkge1xuICBObyxcbiAgWWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NZWRpYVF1ZXJ5KG1lZGlhOiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk6IEludmVydE1lZGlhUXVlcnkgPSBJbnZlcnRNZWRpYVF1ZXJ5Lk5vKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICBpZiAobWVkaWEgJiYgaW52ZXJ0TWVkaWFRdWVyeSA9PT0gSW52ZXJ0TWVkaWFRdWVyeS5ZZXMpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBtZWRpYS5zcGxpdCgnLCcpLm1hcChfID0+IGBub3QgJHtffWApO1xuICAgIHJldHVybiBuZXdWYWw7XG4gIH1cbiAgcmV0dXJuIG1lZGlhO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBpc0Rldk1vZGUsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUVfQ09ORklHLCBMeVRoZW1lQ29uZmlnIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3R5bGVDb250ZW50LCBEYXRhU3R5bGUsIFN0eWxlLCBNdWx0aXBsZVN0eWxlcyB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5LCB0cmFuc2Zvcm1NZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcblxubGV0IGNsYXNzSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBmaXJzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZUNvbmZpZz4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgRGF0YVN0eWxlPj4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVDb3JlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9DT05GSUcpIHRoZW1lQ29uZmlnOiBMeVRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUVfQ09ORklHIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLmZpcnN0RWxlbWVudCA9IF9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQ7XG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIHtcbiAgICAgIGlkOiAnbHknLFxuICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTmF0aXZlLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgbWVkaWFTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LW1lZGlhLXN0eWxlLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgcHJpbWFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktc2Vjb25kYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHByaW1hcnlTdHlsZUNvbnRhaW5lcikge1xuICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChtZWRpYVN0eWxlQ29udGFpbmVyKTtcbiAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQocHJpbWFyeVN0eWxlQ29udGFpbmVyKTtcbiAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoc2Vjb25kYXJ5U3R5bGVDb250YWluZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LW1lZGlhLXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1wcmltYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LXNlY29uZGFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShfZG9jdW1lbnQuYm9keSwgdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyLCBfZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShfZG9jdW1lbnQuYm9keSwgdGhpcy5wcmltYXJ5U3R5bGVDb250YWluZXIsIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lcik7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyKTtcbiAgICB0aGlzLnNldENvcmVTdHlsZSgpO1xuICAgIGlmICh0aGVtZUNvbmZpZykge1xuICAgICAgdGhlbWVDb25maWcudGhlbWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuYWRkKG5ldyBpdGVtKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbmV3IHRoZW1lXG4gICAqIEBwYXJhbSB0aGVtZTogVGhlbWVDb25maWdcbiAgICovXG4gIGFkZCh0aGVtZTogVGhlbWVDb25maWcpIHtcbiAgICB0aGlzLl90aGVtZU1hcC5zZXQodGhlbWUubmFtZSwgdGhlbWUpO1xuICAgIHRoaXMuX3N0eWxlTWFwLnNldCh0aGVtZS5uYW1lLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgZ2V0KG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl90aGVtZU1hcC5nZXQobmFtZSk7XG4gIH1cbiAgZ2V0U3R5bGVNYXAobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIHNldFVwU3R5bGUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxudWxsPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fw4TCuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cbiAgc2V0VXBTdHlsZVNlY29uZGFyeShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPG51bGw+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIHJldHVybiB0aGlzLl/DhMK4cmVhdGVTdHlsZSh1bmRlZmluZWQsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZUNvcmVNYXAsICdyb290JywgdGhpcy5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG5cbiAgX8OEwrhyZWF0ZVN0eWxlPFQ+KHRoZW1lQ29uZmlnOiBhbnksIGtleSwgc3R5bGU6IFN0eWxlPFQ+LCBtYXBTdHlsZXM6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4sIF9mb3I6IHN0cmluZywgX2luOiBhbnksIF9tZWRpYT86IHN0cmluZywgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnkpIHtcbiAgICBpZiAobWFwU3R5bGVzLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gbWFwU3R5bGVzLmdldChrZXkpLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpZCA9IGBrJHsoY2xhc3NJZCsrKS50b1N0cmluZygzNil9YDtcbiAgICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGNvbnN0IG1lZGlhID0gdHJhbnNmb3JtTWVkaWFRdWVyeShfbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICAgICAgY29uc3Qgc3R5bGVDb250ZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDxUPih0aGVtZUNvbmZpZywgc3R5bGUsIGlkLCBtZWRpYSkpO1xuICAgICAgY29uc3Qgc2F2ZUluID0gbWVkaWEgPyB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIgOiBfaW47XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCwgc3R5bGVDb250ZW50KTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc2F2ZUluLCBzdHlsZUVsZW1lbnQpO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN0eWxlRWxlbWVudCwgJ3N0eWxlX2RhdGEnLCBgJHtfZm9yfcOCwrfDgsK3w4LCtyR7aWR9w4LCt8OCwrfDgsK3JHtrZXl9YCk7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhU3R5bGUgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgc3R5bGVFbGVtZW50LFxuICAgICAgICBtZWRpYVxuICAgICAgfTtcbiAgICAgIG1hcFN0eWxlcy5zZXQoa2V5LCBkYXRhU3R5bGUpO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgfVxuXG4gIC8qKiAjc3R5bGUgKi9cbiAgX2NyZWF0ZVN0eWxlQ29udGVudDxUPih0aGVtZUNvbmZpZzogVCwgc3R5bGVzOiBTdHlsZTxUPiwgaWQ6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHR5cGYgPSB0eXBlb2Ygc3R5bGVzO1xuICAgIGlmICh0eXBmID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRvTWVkaWEoYC4ke2lkfXske3N0eWxlc319YCwgbWVkaWEpO1xuICAgIH0gZWxzZSBpZiAodHlwZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRvTWVkaWEoYC4ke2lkfXskeyhzdHlsZXMgYXMgU3R5bGVDb250ZW50PFQ+KSh0aGVtZUNvbmZpZyl9fWAsIG1lZGlhKTtcbiAgICB9XG4gICAgbGV0IGNvbnRlbnQgPSAnJztcbiAgICBmb3IgKGNvbnN0IGtleSQgaW4gc3R5bGVzIGFzIE11bHRpcGxlU3R5bGVzPFQ+KSB7XG4gICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSQpKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHN0eWxlc1trZXkkXTtcbiAgICAgICAgY29uc3QgdGV4dCA9IHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgPyB2YWwodGhlbWVDb25maWcpIDogdmFsO1xuICAgICAgICBjb250ZW50ICs9IGAuJHtpZH0ke2tleSR9eyR7dGV4dH19YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvTWVkaWEoY29udGVudCwgbWVkaWEpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb3JlU3R5bGUoKSB7XG4gICAgY29uc3QgY2xhc3NuYW1lID0gdGhpcy5zZXRVcFN0eWxlKCdyb290Ym9keScsIHtcbiAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgIGBtYXJnaW46MDtgXG4gICAgICApLFxuICAgICAgJywgKiwgKjphZnRlciwgKjpiZWZvcmUnOiAoKSA9PiAoXG4gICAgICAgIGAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7YCArXG4gICAgICAgIGAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7YCArXG4gICAgICAgIGBib3gtc2l6aW5nOiBib3JkZXItYm94O2BcbiAgICAgIClcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2RvY3VtZW50LmJvZHksIGNsYXNzbmFtZSk7XG4gIH1cblxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgaWYgKG9sZENsYXNzbmFtZSkge1xuICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3NuYW1lKTtcbiAgICB9XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmV3Q2xhc3NuYW1lKTtcbiAgfVxuXG59XG5cbi8qKlxuICogQ29udmVydGVyIHRvIG1lZGlhIHF1ZXJ5IGlmIGBtZWRpYWAgaXMgcHJlc2VudFxuICogQHBhcmFtIHRleHQgc3R5bGUgY29udGVudFxuICogQHBhcmFtIG1lZGlhIG1lZGlhIHF1ZXJ5XG4gKi9cbmZ1bmN0aW9uIHRvTWVkaWEodGV4dDogc3RyaW5nLCBtZWRpYT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gIGlmICh0eXBlb2YgbWVkaWEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHt0ZXh0fX1gO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobWVkaWEpKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIG1lZGlhLmZvckVhY2goXyA9PiByZXN1bHQgKz0gYEBtZWRpYSAke199eyR7dGV4dH19YCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gdGV4dDtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgSW5qZWN0LCBPcHRpb25hbCwgaXNEZXZNb2RlLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3R5bGUsIFN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbnRlcmZhY2UgU3R5bGVzRWxlbWVudE1hcCB7XG4gIGVsOiBhbnk7XG59XG5cbmVudW0gVHlwZVN0eWxlIHtcbiAgTXVsdGlwbGUsXG4gIE9ubHlPbmVcbn1cbmNvbnN0IFNUWUxFX01BUDQ6IFN0eWxlTWFwNCA9IHt9O1xuZXhwb3J0IGludGVyZmFjZSBTdHlsZU1hcDQge1xuICBbaWQ6IHN0cmluZ106IHtcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMjxhbnk+IHwgU3R5bGVzMlxuICAgIHR5cGU6IFR5cGVTdHlsZVxuICAgIHByaW9yaXR5OiBudW1iZXJcbiAgICBjc3M6IHtcbiAgICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHN0cmluZ1xuICAgIH0gfCBzdHJpbmdcbiAgICByZXF1aXJlVXBkYXRlPzogYm9vbGVhblxuICB9O1xufVxuXG4vLyBpbnRlcmZhY2UgU3R5bGVNYXAwMyB7XG4vLyAgIFtpZDogc3RyaW5nXTogeyAvLyBleGFtcGxlOiBseVRhYnNcbi8vICAgICBzdHlsZXM6IFN0eWxlc0ZuMjxhbnk+IHwgU3R5bGVzMixcbi8vICAgICBtZWRpYT86IHN0cmluZyxcbi8vICAgICB0eXBlU3R5bGU/OiBUeXBlU3R5bGUsXG4vLyAgICAgdGhlbWVzOiB7IC8vIGV4YW1wbGU6IG1pbmltYS1kYXJrXG4vLyAgICAgICAvKiogQ3NzICovXG4vLyAgICAgICBkZWZhdWx0Pzogc3RyaW5nLFxuLy8gICAgICAgW3RoZW1lTmFtZTogc3RyaW5nXTogc3RyaW5nXG4vLyAgICAgfVxuLy8gICB9O1xuLy8gfVxuXG4vLyBjb25zdCBTVFlMRV9NQVBfMDM6IFN0eWxlTWFwMDMgPSB7fSBhcyBhbnk7XG5cbmNvbnN0IFNUWUxFX01BUDoge1xuICBba2V5OiBzdHJpbmddOiBNYXA8c3RyaW5nLCBTdHlsZXNFbGVtZW50TWFwPlxufSA9IHt9O1xuY29uc3QgQ0xBU1NFU19NQVA6IHtcbiAgW2lkT3JUaGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICBbY2xhc3NOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZ1xufSA9IHt9O1xuY29uc3QgU1RZTEVfS0VZU19NQVAgPSB7fTtcbmxldCBuZXh0SWQgPSAwO1xuLy8gZnVuY3Rpb24gZm4oKSB7XG4vLyAgIHJldHVybiBDTEFTU0VTX01BUDtcbi8vIH1cbi8vIGNvbnNvbGUubG9nKHtmbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNJbkRvY3VtZW50IHtcbiAgc3R5bGVzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXToge1xuICAgICAgW2tleTogc3RyaW5nXTogSFRNTFN0eWxlRWxlbWVudFxuICAgIH1cbiAgfSA9IHt9O1xuICBzdHlsZUNvbnRhaW5lcnMgPSBuZXcgTWFwPG51bWJlciwgSFRNTEVsZW1lbnQ+KCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lMiB7XG4gIGNvbmZpZzogVGhlbWVDb25maWc7XG4gIF9zdHlsZU1hcDogTWFwPHN0cmluZywgRGF0YVN0eWxlPjtcbiAgcHJlZml4ID0gJ2snO1xuICBpbml0aWFsVGhlbWU6IHN0cmluZztcbiAgZWxlbWVudHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBIVE1MU3R5bGVFbGVtZW50XG4gIH07XG4gIHByaXZhdGUgX3N0eWxlTWFwMjogTWFwPHN0cmluZywgU3R5bGVzRWxlbWVudE1hcD47XG5cbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuX3N0eWxlTWFwMiA9IHRoZW1lTmFtZSBpbiBTVFlMRV9NQVBcbiAgICAgID8gU1RZTEVfTUFQW3RoZW1lTmFtZV1cbiAgICAgIDogU1RZTEVfTUFQW3RoZW1lTmFtZV0gPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVOYW1lKTtcbiAgICAgIHRoaXMuX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGVtZU5hbWUgaW4gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1xuICAgICAgPyB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV1cbiAgICAgIDogdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdID0ge307XG4gICAgICB0aGlzLl9jcmVhdGVJbnN0YW5jZUZvclRoZW1lKHRoZW1lTmFtZSk7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbFRoZW1lKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRoZW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2V0VXBTdHlsZTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPFQ+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgIHJldHVybiB0aGlzLmNvcmUuX8OEwrhyZWF0ZVN0eWxlPFQ+KHRoaXMuY29uZmlnLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVNYXAsIG5hbWUsIHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBzZXRVcFN0eWxlU2Vjb25kYXJ5PFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fw4TCuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIGFkZFN0eWxlPFQ+KGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZTxUPiwgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5hZGRDc3MoaWQsIHN0eWxlIGFzIGFueSwgcHJpb3JpdHkpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgfVxuICAgIGVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgLy8gdGhpcy5fc3R5bGVNYXAyLmZvckVhY2goZGF0YVN0eWxlID0+IHtcbiAgICAvLyAgIGRhdGFTdHlsZS5lbC5pbm5lclRleHQgPSB0aGlzLl9jcmVhdGVTdHlsZUMgb250ZW50MihkYXRhU3R5bGUuc3R5bGVzLCBkYXRhU3R5bGUuaWQpO1xuICAgIC8vIH0pO1xuICAgIC8vIGZvciAoY29uc3Qga2V5IGluIFNUWUxFX01BUF8wMykge1xuICAgIC8vICAgaWYgKFNUWUxFX01BUF8wMy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgLy8gICAgIGNvbnN0IHsgc3R5bGVzLCB0eXBlU3R5bGUsIG1lZGlhIH0gPSBTVFlMRV9NQVBfMDNba2V5XTtcbiAgICAvLyAgICAgLy8gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIGtleSwgdHlwZVN0eWxlLCB0aGlzLmNvcmUucmVuZGVyZXIsIHRydWUsIG1lZGlhKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgdGhpcy5fc3R5bGVNYXAuZm9yRWFjaCgoZGF0YVN0eWxlKSA9PiB7XG4gICAgICBkYXRhU3R5bGUuc3R5bGVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuY29yZS5fY3JlYXRlU3R5bGVDb250ZW50KHRoaXMuY29uZmlnLCBkYXRhU3R5bGUuc3R5bGUsIGRhdGFTdHlsZS5pZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycywgc3R5bGVzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgY29uc3QgY3VycmVudFN0eWxlcyA9IHRoaXMuZWxlbWVudHM7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY3VycmVudFN0eWxlcykge1xuICAgICAgaWYgKGN1cnJlbnRTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBzdHlsZURhdGEgPSBTVFlMRV9NQVA0W2tleV07XG4gICAgICAgIGlmIChzdHlsZURhdGEucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVEYXRhLnN0eWxlcywga2V5LCBzdHlsZURhdGEucHJpb3JpdHksIHN0eWxlRGF0YS50eXBlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBtZWRpYSkgYXMgc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBpZCB1bmlxdWUgaWQgZm9yIHN0eWxlIGdyb3VwXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiwgaWQ/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3SWQgPSBpZCB8fCAnZ2xvYmFsJztcbiAgICAvLyBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk11bHRpcGxlKTtcbiAgfVxuXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQyPFQ+KFxuICAgIHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMixcbiAgICBpZDogc3RyaW5nLFxuICAgIHByaW9yaXR5OiBudW1iZXIsXG4gICAgdHlwZTogVHlwZVN0eWxlLFxuICAgIGZvckNoYW5nZVRoZW1lPzogYm9vbGVhbixcbiAgICBtZWRpYT86IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBzdHlsZU1hcCA9IChpZCBpbiBTVFlMRV9NQVA0XG4gICAgPyBTVFlMRV9NQVA0W2lkXVxuICAgIDogU1RZTEVfTUFQNFtpZF0gPSB7XG4gICAgICBwcmlvcml0eSxcbiAgICAgIHN0eWxlcyxcbiAgICAgIHR5cGUsXG4gICAgICBjc3M6IHt9XG4gICAgfSk7XG4gICAgLy8gY29uc3Qgc3R5bGVzMiA9IHRoaXMuY29uZmlnLm5hbWUgaW4gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1xuICAgIC8vID8gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGlzLmNvbmZpZy5uYW1lXVxuICAgIC8vIDogdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGlzLmNvbmZpZy5uYW1lXSA9IHt9O1xuICAgIC8vIGNvbnNvbGUubG9nKFxuICAgIC8vICAgJ2NjYycsIHR5cGVvZiBzdHlsZU1hcC5jc3MgIT09ICdzdHJpbmcnICYmICEoaWQgaW4gc3R5bGVNYXAuY3NzKSxcbiAgICAvLyAgIHR5cGVvZiBDTEFTU0VTX01BUFtpZF0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBDTEFTU0VTX01BUFtpZF0gPT09ICdvYmplY3QnIHx8IENMQVNTRVNfTUFQW3RoaXMuY29uZmlnLm5hbWVdW2lkXVxuICAgIC8vICk7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gdGhpcy5pbml0aWFsVGhlbWU7XG4gICAgY29uc3QgaXNDcmVhdGVkID0gKGlkIGluIENMQVNTRVNfTUFQKSB8fCBDTEFTU0VTX01BUFt0aGVtZU5hbWVdW2lkXTtcbiAgICBpZiAoIWlzQ3JlYXRlZCB8fCBmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgLyoqIGNyZWF0ZSBuZXcgc3R5bGUgZm9yIG5ldyB0aGVtZSAqL1xuICAgICAgbGV0IGNzcztcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIENMQVNTRVNfTUFQW2lkXSA9IHt9O1xuICAgICAgICAvLyBjb25zdCB0aGVtZU1hcCA9IHRoaXMuY29uZmlnLm5hbWUgaW4gc3R5bGVNYXAuY2xhc3Nlc1xuICAgICAgICAvLyA/IHN0eWxlTWFwLmNsYXNzZXNbdGhpcy5jb25maWcubmFtZV1cbiAgICAgICAgLy8gOiBzdHlsZU1hcC5jbGFzc2VzW3RoaXMuY29uZmlnLm5hbWVdID0ge307XG4gICAgICAgIC8vIGNvbnN0IGNsYXNzTmFtZSA9IGlkIGluICh0aGVtZU1hcCBhcyBPYmplY3QpXG4gICAgICAgIC8vID8gdGhlbWVNYXBbaWRdXG4gICAgICAgIC8vIDogdGhlbWVNYXBbaWRdID0gdGhpcy5fbmV4dElkKCk7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXModGhpcy5jb25maWcpLCB0aGVtZU5hbWUsIGlzQ3JlYXRlZCwgaWQsIHR5cGUsIG1lZGlhKTtcbiAgICAgICAgaWYgKCFmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICAgIHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdID0gY3NzO1xuICAgICAgICAgIHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBjcmVhdGUgYSBuZXcgaWQgZm9yIHN0eWxlIHRoYXQgZG9lcyBub3QgPC08cmVxdWlyZT4tPiBjaGFuZ2VzICovXG4gICAgICAgIENMQVNTRVNfTUFQW2lkXSA9IHRydWUgYXMgYW55O1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzLCB0aGVtZU5hbWUsIGlzQ3JlYXRlZCwgaWQsIHR5cGUsIG1lZGlhKTtcbiAgICAgICAgc3R5bGVNYXAuY3NzID0gY3NzO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgc3R5bGVFbGVtZW50KTtcbiAgICAgIC8vIGlmICghdGhpcy5fc3R5bGVNYXAyLmhhcyhpZCkpIHtcbiAgICAgIC8vICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAvLyAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVUZXh0KGNzcyk7XG4gICAgICAvLyAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgICAvLyAgIHRoaXMuX3N0eWxlTWFwMi5zZXQoaWQsIHtcbiAgICAgIC8vICAgICBlbDogc3R5bGVFbGVtZW50XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfVxuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRzW2lkXVxuICAgICAgPyB0aGlzLmVsZW1lbnRzW2lkXVxuICAgICAgOiB0aGlzLmVsZW1lbnRzW2lkXSA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShcbiAgICAgICAgY3NzXG4gICAgICApO1xuICAgICAgaWYgKGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSksIGVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiAoIShpZCBpbiB0aGlzLmVsZW1lbnRzKSkge1xuICAgICAgLy8gY29uc3QgaHRtbFN0eWxlID0gdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKFxuICAgICAgLy8gICB0eXBlb2Ygc3R5bGVNYXAuY3NzID09PSAnc3RyaW5nJ1xuICAgICAgLy8gICA/IHN0eWxlTWFwLmNzc1xuICAgICAgLy8gICA6IHN0eWxlTWFwLmNzc1t0aGlzLmNvbmZpZy5uYW1lXVxuICAgICAgLy8gKTtcbiAgICAgIC8vIHRoaXMuZWxlbWVudHNbaWRdID0gaHRtbFN0eWxlO1xuICAgICAgLy8gdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIGh0bWxTdHlsZSk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IHR5cGVvZiBDTEFTU0VTX01BUFtpZF0gPT09ICdzdHJpbmcnXG4gICAgPyBDTEFTU0VTX01BUFtpZF1cbiAgICA6IHR5cGVvZiBDTEFTU0VTX01BUFtpZF0gPT09ICdvYmplY3QnXG4gICAgPyBDTEFTU0VTX01BUFtpZF1cbiAgICA6IENMQVNTRVNfTUFQW3RoZW1lTmFtZV1baWRdO1xuICAgIHJldHVybiBjbGFzc2VzO1xuXG4gICAgLy8gY29uc3Qgc3R5bGUgPSB0aGlzLl9zdHlsZU1hcDIuZ2V0KGlkKTtcbiAgICAvLyBpZiAoIXRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXMuaGFzKGlkKSkge1xuICAgIC8vICAgdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlcy5hZGQoaWQpO1xuICAgIC8vICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIHN0eWxlLmVsKTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKGZvckNoYW5nZVRoZW1lICYmIHN0eWxlTWFwLnRoZW1lc1t0aGlzLmNvbmZpZy5uYW1lXSkge1xuICAgIC8vICAgc3R5bGUuZWwuaW5uZXJUZXh0ID0gc3R5bGVNYXAudGhlbWVzW3RoaXMuY29uZmlnLm5hbWVdO1xuICAgIC8vIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlc0Jyb3dzZXIoXG4gICAgc3R5bGVzOiBTdHlsZXNGbjI8YW55PiB8IFN0eWxlczIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW5cbiAgKSB7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHByaW9yaXR5ID0gMCkge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgaWYgKCFzdHlsZUNvbnRhaW5lcnMuaGFzKHByaW9yaXR5KSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudChgbHktcy1jYCk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3ByaW9yaXR5JywgYCR7cHJpb3JpdHl9YCk7XG4gICAgICB9XG4gICAgICBzdHlsZUNvbnRhaW5lcnMuc2V0KHByaW9yaXR5LCBlbCk7XG4gICAgICBpZiAoc3R5bGVDb250YWluZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBlbCwgdGhpcy5fZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gICAgfVxuICAgIGNvbnN0IHJlZkNoaWxkID0gdGhpcy5maW5kTm9kZShwcmlvcml0eSk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KSwgcmVmQ2hpbGQpO1xuICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE5vZGUoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgY29uc3Qga2V5cyA9IChBcnJheS5mcm9tKHN0eWxlQ29udGFpbmVycy5rZXlzKCkpKS5zb3J0KCk7XG4gICAgY29uc3Qga2V5ID0ga2V5cy5maW5kKF8gPT4gaW5kZXggPCBfKTtcbiAgICByZXR1cm4gKGtleSAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoISh0aGVtZU5hbWUgaW4gQ0xBU1NFU19NQVApKSB7XG4gICAgICBDTEFTU0VTX01BUFt0aGVtZU5hbWVdID0ge307XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lcjtcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzOiBTdHlsZXMyLCB0aGVtZU5hbWU6IHN0cmluZywgX2NsYXNzZXNfOiBzdHJpbmcgfCB7fSwgaWQ6IHN0cmluZywgdHlwZVN0eWxlOiBUeXBlU3R5bGUsIG1lZGlhPzogc3RyaW5nKSB7XG4gIC8vIGxldCBuZXdLZXkgPSAnJztcbiAgLy8gY29uc3Qgc3RyaW5nXG4gIC8vIGNvbnN0IHRoZW1lTWFwID0gY2xhc3Nlc1t0aGVtZU5hbWVdID8gY2xhc3Nlc1t0aGVtZU5hbWVdIDogY2xhc3Nlc1t0aGVtZU5hbWVdID0ge307XG4gIGlmICh0eXBlU3R5bGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lKSB7XG4gICAgLyoqIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXcgKi9cbiAgICBjb25zdCBjbGFzc05hbWUgPSBDTEFTU0VTX01BUFtpZF1cbiAgICA/IENMQVNTRVNfTUFQW2lkXSA9IF9jbGFzc2VzXyB8fCBjcmVhdGVOZXh0SWQoKVxuICAgIDogQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF0gPSBfY2xhc3Nlc18gfHwgY3JlYXRlTmV4dElkKCk7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBjc3MgPSBgLiR7Y2xhc3NOYW1lfXske3N0eWxlc319YDtcbiAgICAgIC8vIFNUWUxFX01BUDRbaWRdLnJ1bGVzID0gc3R5bGVzO1xuICAgICAgcmV0dXJuIG1lZGlhID8gdG9NZWRpYShjc3MsIG1lZGlhKSA6IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZXMgPSBzdHlsZVRvU3RyaW5nKHN0eWxlcywgbnVsbCwgYC4ke2NsYXNzTmFtZX1gKTtcbiAgICAgIHJldHVybiBydWxlcztcbiAgICB9XG4gIH1cbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgLy8gY29uc3QgY2xhc3Nlc01hcCA9IGlkIGluIHRoZW1lTWFwXG4gIC8vID8gdGhlbWVNYXBbaWRdXG4gIC8vIDogdGhlbWVNYXBbaWRdID0ge307XG4gIGNvbnN0IGNsYXNzZXMgPSBDTEFTU0VTX01BUFtpZF1cbiAgPyBDTEFTU0VTX01BUFtpZF0gPSBfY2xhc3Nlc18gfHwge31cbiAgOiBDTEFTU0VTX01BUFt0aGVtZU5hbWVdW2lkXSA9IF9jbGFzc2VzXyB8fCB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3Nlc1trZXldIHx8IChjbGFzc2VzW2tleV0gPSBpc0Rldk1vZGUoKSA/IHRvQ2xhc3NOYW1lVmFsaWQoYCR7aWR9LS0tJHtrZXl9LSR7Y3JlYXRlTmV4dElkKCl9YCkgOiBjcmVhdGVOZXh0SWQoKSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyh2YWx1ZSBhcyBTdHlsZXMyLCBudWxsLCBgLiR7Y2xhc3NOYW1lfWApO1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGlzIHN0cmluZycsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUtleUZyYW1lKG5hbWU6IHN0cmluZywgb2I6IE9iamVjdCkge1xuLy8gICBsZXQgY29udGVudCA9IGBAa2V5ZnJhbWVzICR7bmFtZX17YDtcbi8vICAgZm9yIChjb25zdCBrZXkgaW4gb2IpIHtcbi8vICAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuLy8gICAgICAgY29uc3QgZWxlbWVudCA9IG9iW2tleV07XG4vLyAgICAgICBjb250ZW50ICs9IGAke2tleX0lICR7c3R5bGVUb1N0cmluZyhlbGVtZW50LCAnJyl9YDtcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgY29udGVudCArPSBgfWA7XG4vLyAgIHJldHVybiBjb250ZW50O1xuLy8gfVxuLy8gY29uc29sZS5sb2coJ2tleWZyYW1lJywgY3JlYXRlS2V5RnJhbWUoJ215YW5pbWF0aW9uJywga2V5RnJhbWVPYmplY3QpKTtcblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhvYjogT2JqZWN0LCBydWxlc01hcDoge30gfCBzdHJpbmcsIGNsYXNzTmFtZT86IHN0cmluZywgcGFyZW50Q2xhc3NOYW1lPzogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBrZXlBbmRWYWx1ZSA9ICcnO1xuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gcnVsZXNNYXBbc3R5bGVLZXldID0gbnVsbDtcbiAgICAgICAgY29udGVudCArPSBzdHlsZVRvU3RyaW5nKGVsZW1lbnQgYXMgU3R5bGVzMiwgbnVsbCwgc3R5bGVLZXksIGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdTdHlsZUtleSA9IHRvSHlwaGVuQ2FzZUNhY2hlKHN0eWxlS2V5KTtcbiAgICAgICAgLy8gY29uc3Qgc3R5bGUgPSBydWxlc01hcFtuZXdTdHlsZUtleV0gPSBlbGVtZW50O1xuICAgICAgICBrZXlBbmRWYWx1ZSArPSBgJHtuZXdTdHlsZUtleX06JHtlbGVtZW50fTtgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgbGV0IG5ld0NsYXNzTmFtZSA9ICcnO1xuICAgIGlmIChwYXJlbnRDbGFzc05hbWUpIHtcbiAgICAgIG5ld0NsYXNzTmFtZSArPSBjbGFzc05hbWUuaW5kZXhPZignJicpID09PSAwID8gYCR7cGFyZW50Q2xhc3NOYW1lfSR7Y2xhc3NOYW1lLnNsaWNlKDEpfWAgOiBgJHtwYXJlbnRDbGFzc05hbWV9IC4ke2NsYXNzTmFtZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBjb250ZW50ICs9IGAke25ld0NsYXNzTmFtZX1gO1xuICB9XG4gIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IF9wYXRoOiBzdHJpbmdbXSA9IHBhdGggaW5zdGFuY2VvZiBBcnJheSA/IHBhdGggOiBwYXRoLnNwbGl0KCc6Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBvYmogPSBvYmpbX3BhdGhbaV1dIHx8IHBhdGg7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cbmZ1bmN0aW9uIHRvQ2xhc3NOYW1lVmFsaWQoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgcyA9IHN0ci5yZXBsYWNlKC9eWzAtOV18W15cXHdcXC1dL2csIF8gPT4ge1xuICAgIHJldHVybiBgXyR7Xy5jaGFyQ29kZUF0KDApfWA7XG4gIH0pO1xuICByZXR1cm4gdG9IeXBoZW5DYXNlKHMpO1xufVxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2VDYWNoZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyIGluIFNUWUxFX0tFWVNfTUFQXG4gID8gU1RZTEVfS0VZU19NQVBbc3RyXVxuICA6IFNUWUxFX0tFWVNfTUFQW3N0cl0gPSB0b0h5cGhlbkNhc2Uoc3RyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHRvTWVkaWEoY3NzOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHtjc3N9fWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5leHRJZCgpIHtcbiAgcmV0dXJuIGBlJHsobmV4dElkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuXG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBOZ01vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl92aWV3UmVmLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZU1vZHVsZSB7XHJcblxyXG59XHJcbiIsImZ1bmN0aW9uIGlzV2luZG93KG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW06IGFueSkge1xyXG4gICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0VmlldztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RQb3NpdGlvbihlbGVtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgbGV0IGRvY0VsZW06IGFueSwgd2luOiBhbnksXHJcbiAgICAgICAgYm94ID0ge3RvcDogMCwgbGVmdDogMH07XHJcbiAgICBjb25zdCBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcclxuXHJcbiAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH1cclxuICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcclxuICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxyXG4gICAgfTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIElzQm9vbGVhbigpOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgZ2V0OiBkZWZpbml0aW9uLmdldCxcbiAgICAgICAgc2V0OiBuZXdWYWx1ZSA9PiB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5zZXQodG9Cb29sZWFuKG5ld1ZhbHVlKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1snX18nICsga2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICB0aGlzWydfXycgKyBrZXldID0gdG9Cb29sZWFuKG5ld1ZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdEVudHJ5KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGRlZmF1bHRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbCc7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgXG4gICAgICAgICAgICBbYmddLFxuICAgICAgICAgICAgW2NvbG9yXSxcbiAgICAgICAgICAgIFtyYWlzZWRdLFxuICAgICAgICAgICAgW3JhaXNlZF1bc2hhZG93Q29sb3JdLFxuICAgICAgICAgICAgW2x5LWJ1dHRvbl1bb3V0bGluZWRdLFxuICAgICAgICAgICAgW2VsZXZhdGlvbl0sXG4gICAgICAgICAgICBbZWxldmF0aW9uXVtzaGFkb3dDb2xvcl0sXG4gICAgICAgICAgICBbZGlzYWJsZWRdLFxuICAgICAgICAgICAgbHktY2FyZFxuICAgICAgICAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3JhaXNlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb3V0bGluZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXV0b0NvbnRyYXN0OiBib29sZWFuO1xuICBwcml2YXRlIF9pc0NvbnRyYXN0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGJnOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICBASW5wdXQoKSBzZXQgcmFpc2VkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9yYWlzZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkOyB9XG5cbiAgQElucHV0KCkgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG5cbiAgQElucHV0KCkgc2V0IG91dGxpbmVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9vdXRsaW5lZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBvdXRsaW5lZCgpIHsgcmV0dXJuIHRoaXMuX291dGxpbmVkOyB9XG5cbiAgQElucHV0KCkgZWxldmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNoYWRvd0NvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgcHVibGljIHNldEF1dG9Db250cmFzdCgpIHtcbiAgICB0aGlzLl9hdXRvQ29udHJhc3QgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5faXNDb250cmFzdCA9IHRoaXMuX2F1dG9Db250cmFzdCAmJiAhdGhpcy5jb2xvciB8fCB0aGlzLmNvbG9yID09PSAnYXV0byc7XG4gICAgY29uc3QgbmV3S2V5ID0gYGNvbW1vbi0tLS06JHtcbiAgICAgIHRoaXMuYmcgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgdGhpcy5jb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgIHRoaXMucmFpc2VkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICB0aGlzLmVsZXZhdGlvbiB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRsaW5lZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgdGhpcy5zaGFkb3dDb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0NvbnRyYXN0IHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlPGFueT4obmV3S2V5LCAodGhlbWUpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlOiB7XG4gICAgICAgIGJvcmRlcj86IHN0cmluZyxcbiAgICAgICAgYmFja2dyb3VuZD86IHN0cmluZyxcbiAgICAgICAgY29sb3I/OiBzdHJpbmcsXG4gICAgICAgIGJveFNoYWRvdz86IHN0cmluZyxcbiAgICAgICAgcG9pbnRlckV2ZW50cz86ICdub25lJztcbiAgICAgICAgJyY6aG92ZXInPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICAnJjphY3RpdmUnPzoge1xuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICB9XG4gICAgICB9ID0ge307XG4gICAgICBpZiAodGhpcy5vdXRsaW5lZCkge1xuICAgICAgICBzdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcic7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLnRleHQuZGlzYWJsZWQ7XG4gICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIGlmICh0aGlzLmJnKSB7XG4gICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJ1dHRvbi5kaXNhYmxlZDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuYmcpIHtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuY29sb3JPZih0aGlzLmJnKTtcbiAgICAgICAgICBpZiAodGhpcy5faXNDb250cmFzdCkge1xuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS5jb2xvck9mKGAke3RoaXMuYmd9OmNvbnRyYXN0YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghc3R5bGUuY29sb3IgJiYgdGhpcy5jb2xvcikge1xuICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yYWlzZWQgfHwgdGhpcy5lbGV2YXRpb24pIHtcbiAgICAgICAgICBjb25zdCBzaGFkb3dDb2xvciA9ICh0aGlzLnNoYWRvd0NvbG9yICYmIHRoZW1lLmNvbG9yT2YodGhpcy5zaGFkb3dDb2xvcikpIHx8IHN0eWxlLmJhY2tncm91bmQgfHwgc3R5bGUuY29sb3IgfHwgdGhlbWUuY29sb3JTaGFkb3c7XG4gICAgICAgICAgaWYgKCF0aGlzLmJnKSB7XG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHlsZS5ib3hTaGFkb3cgPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uIHx8IDMsIHNoYWRvd0NvbG9yKTtcbiAgICAgICAgICBpZiAoIXRoaXMuZWxldmF0aW9uKSB7XG4gICAgICAgICAgICBzdHlsZVsnJjphY3RpdmUnXSA9IHtcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDgsIHNoYWRvd0NvbG9yKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHlsZSBhcyBhbnk7XG4gICAgfSwgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICAvKip+ICovXG4gICAgLy8gY29uc3QgcmFpc2Vkw4TCuGV5ID0gdGhpcy5yYWlzZWQgPT09IHRydWUgPyAncmFpc2VkJyA6ICcnO1xuICAgIC8vIGxldCBrZXkgPSAnJztcbiAgICAvLyBpZiAoKHRoaXMuY29udHJhc3QgJiYgIXRoaXMuY29sb3IgfHwgdGhpcy5jb2xvciA9PT0gJ2F1dG8nKSAmJiB0aGlzLmJnKSB7XG4gICAgLy8gICBrZXkgPSBgYmNyLWNvbnRyYXN0OiR7dGhpcy5iZ30ke3JhaXNlZMOEwrhleX0ke3RoaXMuZWxldmF0aW9ufWA7XG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS0ke2tleX1gLCB0aGlzLmNvbnRyYXN0U3R5bGUuYmluZCh0aGlzKSwgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuYmcgJiYgdGhpcy5jb2xvcikge1xuICAgIC8vICAga2V5ID0gYGImw4TCuCR7dGhpcy5iZ30ke3RoaXMuY29sb3J9JHt0aGlzLnJhaXNlZH0ke3RoaXMuZWxldmF0aW9ufWA7XG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS0ke2tleX1gLCB0aGlzLmJnQ29sb3JTdHlsZS5iaW5kKHRoaXMpLCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5yYWlzZWQgJiYgIXRoaXMuYmcpIHtcbiAgICAvLyAgIGtleSA9IHJhaXNlZMOEwrhleSArIHRoaXMuY29sb3IgfHwgJyc7XG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlPGFueT4oYGx5LSR7a2V5fWAsIHRoZW1lID0+IHtcbiAgICAvLyAgICAgbGV0IHN0eWxlcyA9IGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5fTtgO1xuICAgIC8vICAgICBsZXQgY29sb3IgPSAnJztcbiAgICAvLyAgICAgbGV0IGNvbG9yU2hhZG93O1xuICAgIC8vICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgIC8vICAgICAgIGNvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuY29sb3IpO1xuICAgIC8vICAgICAgIGNvbG9yU2hhZG93ID0gY29sb3I7XG4gICAgLy8gICAgICAgc3R5bGVzICs9IGBjb2xvcjoke2NvbG9yfTtgO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGNvbG9yU2hhZG93ID0gdGhlbWUuY29sb3JTaGFkb3c7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHRoaXMuX3JhaXNlZCkge1xuICAgIC8vICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgY29sb3JTaGFkb3cpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBzdHlsZXM7XG4gICAgLy8gICB9LCB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5iZyB8fCB0aGlzLmNvbG9yKSB7XG4gICAgLy8gICBjb25zdCBjaGFuZ2VLZXkgPSB0aGlzLmJnID8gWydiZycsICdiYWNrZ3JvdW5kJywgdGhpcy5iZ10gOiBbJ8OEwrgnLCAnY29sb3InLCB0aGlzLmNvbG9yXTtcbiAgICAvLyAgIGNvbnN0IGNvbG9yID0gY2hhbmdlS2V5WzJdO1xuICAgIC8vICAga2V5ID0gYCR7Y2hhbmdlS2V5WzBdfSR7Y29sb3J9JHt0aGlzLl9yYWlzZWR9JHt0aGlzLmVsZXZhdGlvbn1gO1xuXG4gICAgLy8gICAvKiogQ3JlYXRlIHN0eWxlICovXG4gICAgLy8gICB0aGlzLl9jbGFzc05hbWUgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseS0ke2tleX1gLCAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IF9jb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmJnIHx8IHRoaXMuY29sb3IpO1xuICAgIC8vICAgICBsZXQgc3R5bGVzID0gYCR7Y2hhbmdlS2V5WzFdfToke19jb2xvcn07YDtcbiAgICAvLyAgICAgaWYgKHRoaXMuX3JhaXNlZCkge1xuICAgIC8vICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgX2NvbG9yKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gc3R5bGVzO1xuICAgIC8vICAgfSwgdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fY2xhc3NOYW1lKTtcblxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBrZXkgPSBgcmFpc2VkJHt0aGlzLl9yYWlzZWR9ZWx4eHh4eHh4eCR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAvLyAgIHRoaXMuX2NsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5LSR7a2V5fWAsICgpID0+IHtcbiAgICAvLyAgICAgaWYgKHRoaXMuX3JhaXNlZCkge1xuICAgIC8vICAgICAgIHJldHVybiBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgdGhpcy50aGVtZS5jb25maWcuY29sb3JTaGFkb3cpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIHJldHVybiBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCgwLCB0aGlzLnRoZW1lLmNvbmZpZy5jb2xvclNoYWRvdyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgLy8gfVxuICB9XG4gIC8vIHByaXZhdGUgY29udHJhc3RTdHlsZSgpIHtcbiAgLy8gICBjb25zdCBjc3NCZyA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmJnKTtcbiAgLy8gICB0aGlzLl9jb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZihgJHt0aGlzLmJnfTpjb250cmFzdGApO1xuICAvLyAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZDoke2Nzc0JnfTtjb2xvcjoke3RoaXMuX2NvbG9yfTtgO1xuICAvLyAgIGlmICh0aGlzLl9yYWlzZWQpIHtcbiAgLy8gICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCh0aGlzLmVsZXZhdGlvbiwgY3NzQmcpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gc3R5bGVzO1xuICAvLyB9XG5cbiAgLy8gcHJpdmF0ZSBiZ0NvbG9yU3R5bGUoKSB7XG4gIC8vICAgY29uc3QgY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gIC8vICAgY29uc3QgY3NzQ29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5jb2xvcik7XG4gIC8vICAgbGV0IHN0eWxlcyA9IGBiYWNrZ3JvdW5kOiR7Y3NzQmd9O2NvbG9yOiR7Y3NzQ29sb3J9O2A7XG4gIC8vICAgaWYgKHRoaXMuX3JhaXNlZCkge1xuICAvLyAgICAgc3R5bGVzICs9IHNoYWRvd0J1aWxkZXJEZXByZWNhdGVkKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBzdHlsZXM7XG4gIC8vIH1cblxuICBwcml2YXRlIF9nZXRIb3N0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuY29uc3QgREVGQVVMVF9WQUxVRSA9ICcnO1xuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgY29uc3QgTFlfR0xPQkFMX0NPTlRSQVNUID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCdseS5nbG9iYWwuY29udHJhc3QnKTtcbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZCB9IGZyb20gJy4uL3NoYWRvdyc7XHJcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMeVNoYWRvd1NlcnZpY2Uge1xyXG4gIC8qKiBEZWZhdWx0IGVsZXZhdGlvbiAqL1xyXG4gIGVsZXZhdGlvbiA9IDE7XHJcbiAgLyoqIGRlbW86IHNldFNoYWRvdyguLi5bZWxldmF0aW9uLCBjb2xvcl0uLi4pICovXHJcbiAgc2V0U2hhZG93KHRoZW1lOiBMeVRoZW1lMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgdmFsOiBbbnVtYmVyLCBzdHJpbmddLCBvbGRDbGFzc05hbWU/OiBzdHJpbmcpIHtcclxuICAgIGxldCBrZXlzOiBzdHJpbmc7XHJcbiAgICBsZXQgZWxldmF0aW9uOiBudW1iZXI7XHJcbiAgICBsZXQgY29sb3IgPSAnY29sb3JTaGFkb3cnO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBrZXlzID0gdmFsLmpvaW4oJycpO1xyXG4gICAgICBlbGV2YXRpb24gPSB2YWxbMF07XHJcbiAgICAgIGNvbG9yID0gdmFsWzFdIHx8IGNvbG9yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5cyA9IGAke3RoaXMuZWxldmF0aW9ufSR7Y29sb3J9YDtcclxuICAgICAgZWxldmF0aW9uID0gdGhpcy5lbGV2YXRpb247XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0aGVtZS5zZXRVcFN0eWxlKGBzaGFkb3cke2tleXN9YCwgeycnOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHtzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZChlbGV2YXRpb24sIHRoZW1lLmNvbG9yT2YoY29sb3IpKX1gO1xyXG4gICAgfX0pO1xyXG4gICAgdGhlbWUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIGNsYXNzbmFtZSwgb2xkQ2xhc3NOYW1lKTtcclxuICAgIHJldHVybiBjbGFzc25hbWU7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTaGFkb3dTZXJ2aWNlIH0gZnJvbSAnLi9zaGFkb3cuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL2FseWxlLWNvbmZpZy1zZXJ2aWNlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJzpub3QoW3JhaXNlZF0pW25ld1JhaXNlZF0nIH0pXG5leHBvcnQgY2xhc3MgTHlOZXdSYWlzZWQge1xuICBlbGV2YXRpb24gPSAzO1xuICBwcml2YXRlIGN1cnJlbnRDbGFzc05hbWU6IHN0cmluZztcbiAgLyoqIERlZmF1bHQgcmFpc2VkICAqL1xuICBASW5wdXQoKVxuICBzZXQgbmV3UmFpc2VkKHZhbHVlOiBbbnVtYmVyLCBzdHJpbmddKSB7XG4gICAgdGhpcy5jdXJyZW50Q2xhc3NOYW1lID0gdGhpcy5zaGFkb3cuc2V0U2hhZG93KHRoaXMudGhlbWUsIHRoaXMuZWxlbWVudFJlZiwgdGhpcy5yZW5kZXJlciwgWyB2YWx1ZVswXSB8fCB0aGlzLmVsZXZhdGlvbiwgdmFsdWVbMV0gXSwgdGhpcy5jdXJyZW50Q2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBzaGFkb3c6IEx5U2hhZG93U2VydmljZVxuICApIHsgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVRoZW1lXScsXG4gIHByb3ZpZGVyczogW0x5VGhlbWUyXSxcbiAgZXhwb3J0QXM6ICdseVRoZW1lJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRoZW1lQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfbHlUaGVtZTogc3RyaW5nO1xuICAvKipcbiAgICogc2V0IHRoZW1lXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbHlUaGVtZShuYW06IHN0cmluZykge1xuICAgIHRoaXMuX2x5VGhlbWUgPSBuYW07XG4gICAgdGhpcy50aGVtZS5zZXRVcFRoZW1lKG5hbWUpO1xuICB9XG4gIGdldCBseVRoZW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9seVRoZW1lO1xuICB9XG5cbiAgQElucHV0KCkgc2hhcmVkOiB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3NldENvbnRhaW5lclN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldENvbnRhaW5lclN0eWxlKGVsZW1lbnQsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYHRoZW1lOiR7dGhpcy50aGVtZS5jb25maWcubmFtZX1gLCB7XG4gICAgICAnJzogKCkgPT4gKFxuICAgICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLmJhY2tncm91bmQuZGVmYXVsdH07YCArXG4gICAgICAgIGBjb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLnRleHQuZGVmYXVsdH07YCArXG4gICAgICAgIGBmb250LWZhbWlseToke3RoaXMudGhlbWUuY29uZmlnLnR5cG9ncmFwaHkuZm9udEZhbWlseX07YFxuICAgICAgKVxuICAgIH0pO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIGNsYXNzbmFtZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbd2l0aENsYXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlXaXRoQ2xhc3Mge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB3aXRoQ2xhc3ModmFsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHt2YWx9JyBpcyBub3QgdmFsaWQgY2xhc3NOYW1lYCk7XG4gICAgfVxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgKSB7IH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5Q29tbW9uIH0gZnJvbSAnLi9jb21tb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IExZX0dMT0JBTF9DT05UUkFTVCB9IGZyb20gJy4vY29udHJhc3QnO1xuaW1wb3J0IHsgTHlOZXdSYWlzZWQgfSBmcm9tICcuL3JhaXNlZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUaGVtZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5V2l0aENsYXNzIH0gZnJvbSAnLi93aXRoLWNsYXNzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5Q29tbW9uLCBMeU5ld1JhaXNlZCwgTHlUaGVtZUNvbnRhaW5lciwgTHlXaXRoQ2xhc3NdLFxuICBleHBvcnRzOiBbTHlDb21tb24sIEx5TmV3UmFpc2VkLCBMeVRoZW1lQ29udGFpbmVyLCBMeVdpdGhDbGFzc10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTFlfR0xPQkFMX0NPTlRSQVNULCB1c2VWYWx1ZTogZmFsc2UgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5Q29tbW9uTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3RhYmxlLCBPcHRpb25hbCwgTmdNb2R1bGUsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheUNvbnRhaW5lciB7XG4gIHByb3RlY3RlZCBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2x5LW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBBcHBsaWNhdGlvblJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld1JlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbVNlcnZpY2Uge1xuICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuICBwcml2YXRlIF92aWV3UmVmOiBWaWV3UmVmO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyXG4gICkgeyB9XG5cbiAgYXR0YWNoPFQ+KF9ob3N0Vmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgY29tcG9uZW50OiBhbnksIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgICBjb25zdCB2aWV3UmVmID0gX2hvc3RWaWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG4gICAgICB2aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYgPSBfaG9zdFZpZXdDb250YWluZXJSZWY7XG4gICAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IHRoaXMuYWRkQ2hpbGQocm9vdE5vZGUpKTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMub3ZlcmxheUNvbnRhaW5lci5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxuXG4gIGdldERvbUVsZW1lbnRGcm9tQ29tcG9uZW50UmVmKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGRlc3Ryb3lSZWYoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiwgZGVsYXk6IG51bWJlcikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgfVxuICAgIH0sIGRlbGF5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERvbVNlcnZpY2UgfSBmcm9tICcuL2RvbS5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIpIHtcbiAgcmV0dXJuIHBhcmVudENvbnRhaW5lciB8fCBuZXcgTHlPdmVybGF5Q29udGFpbmVyKCk7XG59XG5cbmV4cG9ydCBjb25zdCBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUiA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhbiBPdmVybGF5Q29udGFpbmVyIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IEx5T3ZlcmxheUNvbnRhaW5lcixcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIEx5T3ZlcmxheUNvbnRhaW5lcl1dLFxuICB1c2VGYWN0b3J5OiBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZXG59O1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1tEb21TZXJ2aWNlLCBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl1dXG59KVxuZXhwb3J0IGNsYXNzIEx4RG9tTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lLCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBPbkluaXQsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBwaXBlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBlbnVtIEZvY3VzU3RhdHVzIHtcbiAgLyoqbW91c2UgYW5kL29yIHRvdWNoKi9cbiAgREVGQVVMVCA9ICdkZWZhdWx0JyxcbiAgLyoqIGtleWJvYXJkIGFuZC9vciBwcm9ncmFtKi9cbiAgS0VZQk9BUkQgPSAna2V5Ym9hcmQnLFxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlGb2N1c1N0YXRlXScsXG4gIGV4cG9ydEFzOiAnbHlGb2N1c1N0YXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBzdGF0ZTogRm9jdXNTdGF0dXM7XG4gIHN0YXRlTWFwID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHByaXZhdGUgX2V2ZW50SGFuZGxlcnMgPSBuZXcgTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIF9zdGF0ZVN1YmplY3QgPSBuZXcgU3ViamVjdDxGb2N1c1N0YXR1cz4oKTtcbiAgX3N0YXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIEBPdXRwdXQoKSBseUZvY3VzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c1N0YXR1cz4oKTtcbiAgcHJpdmF0ZSBfZXZlbnRPcHRpb25zID0ge3Bhc3NpdmU6IHRydWV9IGFzIGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVyc1xuICAgICAgLnNldCgnZm9jdXMnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdibHVyJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgndG91Y2hzdGFydCcsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ21vdXNlZG93bicsIHRoaXMub24uYmluZCh0aGlzKSk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNvbnN0IG9uID0gKGV2ZW50OiBGb2N1c0V2ZW50IHwgVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZU1hcC5zZXQoZXZlbnQudHlwZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgb2I6IE9ic2VydmFibGU8Rm9jdXNTdGF0dXM+ID0gdGhpcy5fc3RhdGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24gPSBvYlxuICAgICAgLy8gLmRlYm91bmNlVGltZSgxMTEpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDExMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGU6IEZvY3VzU3RhdHVzKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBlO1xuICAgICAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICAgICAgICB0aGlzLmx5Rm9jdXNDaGFuZ2UuZW1pdChlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0YXRlKCkge1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2JsdXInKSkge1xuICAgICAgdGhpcy5zdGF0ZU1hcC5jbGVhcigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykgJiYgdGhpcy5zdGF0ZU1hcC5oYXMoJ21vdXNlZG93bicpIHx8IHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCd0b3VjaHN0YXJ0JykpIHtcbiAgICAgIHN0YXRlID0gRm9jdXNTdGF0dXMuREVGQVVMVDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLktFWUJPQVJEO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZVN1YmplY3QubmV4dChzdGF0ZSk7XG4gIH1cblxuICBvbihldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5zdGF0ZU1hcC5zZXQoZXZlbnQudHlwZSwgdHJ1ZSk7XG4gICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNsYXNzKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0b2dnbGVDbGFzcyA9IChjbGFzc05hbWU6IHN0cmluZywgc2hvdWxkU2V0OiBib29sZWFuKSA9PiBzaG91bGRTZXQgPyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIDogdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB0b2dnbGVDbGFzcyhgbHktZm9jdXNlZGAsICEhc3RhdGUpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIEZvY3VzU3RhdHVzKSB7XG4gICAgICBpZiAoRm9jdXNTdGF0dXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBGb2N1c1N0YXR1c1trZXldO1xuICAgICAgICB0b2dnbGVDbGFzcyhgbHktJHtjbGFzc05hbWV9LWZvY3VzZWRgLCBzdGF0ZSA9PT0gY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyRWxlbWVudCkge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChudWxsKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlGb2N1c1N0YXRlIH0gZnJvbSAnLi9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5Rm9jdXNTdGF0ZV0sXG4gIGV4cG9ydHM6IFtMeUZvY3VzU3RhdGVdXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZU1vZHVsZSB7IH1cbiIsImV4cG9ydCBjb25zdCBBVUlfVkVSU0lPTiA9ICcxLjcuMC1iZXRhLjUweXJlJztcbmV4cG9ydCBjb25zdCBBVUlfTEFTVF9VUERBVEUgPSAnMjAxOC0wOC0yMFQyMzoxMToyNy40NTRaJztcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4uL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBIYW1tZXJPcHRpb25zLCBIYW1tZXJJbnN0YW5jZSB9IGZyb20gJy4vZ2VzdHVyZS1hbm5vdGF0aW9ucyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcblxuZXhwb3J0IGNvbnN0IExZX0hBTU1FUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPEhhbW1lck9wdGlvbnM+KCdMWV9IQU1NRVJfT1BUSU9OUycpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gIHByaXZhdGUgX2hhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gIGV2ZW50czogc3RyaW5nW10gPSB0aGlzLl9oYW1tZXIgPyBbXG4gICAgJ3NsaWRlJyxcbiAgICAnc2xpZGVzdGFydCcsXG4gICAgJ3NsaWRlZW5kJyxcbiAgICAnc2xpZGVyaWdodCcsXG4gICAgJ3NsaWRlbGVmdCdcbiAgXSA6IFtdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX0hBTU1FUl9PUFRJT05TKSBwcml2YXRlIF9oYW1tZXJPcHRpb25zOiBIYW1tZXJPcHRpb25zLFxuICAgIC8vIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgYnVpbGRIYW1tZXIoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIYW1tZXJJbnN0YW5jZSB7XG4gICAgLy8gaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgIC8vICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdrLWhhbW1lci1jc3MnLCB7XG4gICAgLy8gICAgICcnOiAoKSA9PiAoXG4gICAgLy8gICAgICAgYHVzZXItc2VsZWN0OiBub25lO2AgK1xuICAgIC8vICAgICAgIGAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtgICtcbiAgICAvLyAgICAgICBgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO2BcbiAgICAvLyAgICAgKVxuICAgIC8vICAgfSk7XG4gICAgLy8gICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIC8vIH1cbiAgICBjb25zdCBtYyA9IG5ldyB0aGlzLl9oYW1tZXIoZWxlbWVudCwgdGhpcy5faGFtbWVyT3B0aW9ucyB8fCB1bmRlZmluZWQpO1xuXG4gICAgY29uc3QgcGFuID0gbmV3IHRoaXMuX2hhbW1lci5QYW4oKTtcbiAgICBjb25zdCBzd2lwZSA9IG5ldyB0aGlzLl9oYW1tZXIuU3dpcGUoKTtcbiAgICBjb25zdCBzbGlkZSA9IHRoaXMuX2NyZWF0ZVJlY29nbml6ZXIocGFuLCB7ZXZlbnQ6ICdzbGlkZScsIHRocmVzaG9sZDogMH0sIHN3aXBlKTtcblxuICAgIHNsaWRlLnJlY29nbml6ZVdpdGgoc3dpcGUpO1xuICAgIHBhbi5yZWNvZ25pemVXaXRoKHN3aXBlKTtcblxuICAgIC8vIEFkZCBjdXN0b21pemVkIGdlc3R1cmVzIHRvIEhhbW1lciBtYW5hZ2VyXG4gICAgbWMuYWRkKFtzd2lwZSwgcGFuLCBzbGlkZV0pO1xuICAgIHJldHVybiBtYztcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgbmV3IHJlY29nbml6ZXIsIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBkZWZhdWx0IHJlY29nbml6ZXJzIG9mIEhhbW1lckpTICovXG4gIHByaXZhdGUgX2NyZWF0ZVJlY29nbml6ZXIoYmFzZTogYW55LCBvcHRpb25zOiBhbnksIC4uLmluaGVyaXRhbmNlczogYW55W10pIHtcbiAgICBjb25zdCByZWNvZ25pemVyID0gbmV3IChiYXNlLmNvbnN0cnVjdG9yKShvcHRpb25zKTtcblxuICAgIGluaGVyaXRhbmNlcy5wdXNoKGJhc2UpO1xuICAgIGluaGVyaXRhbmNlcy5mb3JFYWNoKGl0ZW0gPT4gcmVjb2duaXplci5yZWNvZ25pemVXaXRoKGl0ZW0pKTtcblxuICAgIHJldHVybiByZWNvZ25pemVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBbTHlUaGVtZTJdLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4uL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTHlDb3JlU3R5bGVzIHtcbiAgY2xhc3NlcyA9IHtcbiAgICAvKiogUG9zaXRpb24gYWJzb2x1dGUgKi9cbiAgICBGaWxsOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stYWJzb2x1dGUnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgdG9wOiAwO2AgK1xuICAgICAgICAgIGBib3R0b206IDA7YCArXG4gICAgICAgICAgYGxlZnQ6IDA7YCArXG4gICAgICAgICAgYHJpZ2h0OiAwO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgICksXG4gICAgVmlzdWFsbHlIaWRkZW46IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnay12aXN1YWxseS1oaWRkZW4nLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGJvcmRlcjogMDtgICtcbiAgICAgICAgICBgY2xpcDogcmVjdCgwIDAgMCAwKTtgICtcbiAgICAgICAgICBgaGVpZ2h0OiAxcHg7YCArXG4gICAgICAgICAgYG1hcmdpbjogLTFweDtgICtcbiAgICAgICAgICBgb3ZlcmZsb3c6IGhpZGRlbjtgICtcbiAgICAgICAgICBgcGFkZGluZzogMDtgICtcbiAgICAgICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgICAgIGB3aWR0aDogMXB4O2AgK1xuICAgICAgICAgIGBvdXRsaW5lOiAwO2AgK1xuICAgICAgICAgIGAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7YCArXG4gICAgICAgICAgYC1tb3otYXBwZWFyYW5jZTogbm9uZTtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUpIHsgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVuZGVmaW5lZCB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBVbmRlZmluZWRWYWx1ZSA9IG5ldyBVbmRlZmluZWQoKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgVHlwb2dyYXBoeUNvbmZpZyB7XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBudW1iZXI7XG4gIGxldHRlclNwYWNpbmc/OiBudW1iZXI7XG4gIHRleHRUcmFuc2Zvcm0/OiAndXBwZXJjYXNlJyB8ICdjYXBpdGFsaXplJyB8ICdsb3dlcmNhc2UnO1xuICBndXR0ZXJUb3A/OiBudW1iZXI7XG4gIGd1dHRlckJvdHRvbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBweFRvUmVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy50eXBvZ3JhcGh5LmZvbnRTaXplIC8gMTQ7XG4gICAgcmV0dXJuIGAke3ZhbHVlIC8gdGhpcy50eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSAqIHNpemV9cmVtYDtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcywgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG9ialtfcGF0aFtpXV0gfHwgcGF0aDtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsidG9NZWRpYSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQStCLFFBQVE7SUFDckMsdUJBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5Qyx1QkFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLHVCQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsdUJBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDekM7Ozs7OztBQ05ELEFBQ0EsdUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUV2Qix1QkFBTSxxQkFBcUIsR0FBRyxHQUFHLENBQUM7QUFDbEMsdUJBQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLHVCQUFNLDBCQUEwQixHQUFHLElBQUksQ0FBQztBQUN4Qyx1QkFBYSxPQUFPLEdBQUc7SUFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FB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