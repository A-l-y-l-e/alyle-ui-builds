import * as _chroma from 'chroma-js';
import { Injectable, InjectionToken, Inject, RendererFactory2, Directive, Input, ElementRef, Renderer2, NgModule, ComponentFactoryResolver, Optional, isDevMode, ViewContainerRef, Output, EventEmitter, ChangeDetectorRef, NgZone, SkipSelf, defineInjectable, inject } from '@angular/core';
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
function shadowBuilder(elevation = 2, color = '#000') {
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RandomId {
    /**
     * @return {?}
     */
    get generate() {
        const /** @type {?} */ id = (Math.random() + Date.now());
        return id;
    }
}
RandomId.decorators = [
    { type: Injectable },
];

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
    const /** @type {?} */ parents = [];
    let /** @type {?} */ p = el.parentNode;
    let /** @type {?} */ pxz = null;
    while (!pxz) {
        const /** @type {?} */ o = p;
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
const /** @type {?} */ THEME_VARIABLES = new InjectionToken('ly.theme.variables');
const /** @type {?} */ IS_CORE_THEME = new InjectionToken('ly.is.root');
class StyleMap {
    /**
     * @param {?} themeName
     */
    constructor(themeName) {
        this.themeName = themeName;
    }
}
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
class LyRootService {
    /**
     * @param {?} _document
     * @param {?} rendererFactory
     */
    constructor(_document, rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.themeRootMap = new Map();
        this.themeMap = new Map();
        this.themes = new Map();
        this._styleMap = new Map();
        this.renderer = this.rendererFactory.createRenderer(null, null);
        let /** @type {?} */ container;
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
    registerTheme(palette) {
        if (!this.themeMap.has(palette.name)) {
            this.themeMap.set(palette.name, new Map());
            this.themes.set(palette.name, palette);
        }
        return {
            map: this.themeMap.get(palette.name),
            palette: this.themes.get(palette.name)
        };
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getTheme(name) {
        return this.themes.get(name);
    }
}
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
LyRootService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    { type: RendererFactory2, },
];
/** @nocollapse */ LyRootService.ngInjectableDef = defineInjectable({ factory: function LyRootService_Factory() { return new LyRootService(inject(DOCUMENT), inject(RendererFactory2)); }, token: LyRootService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ LY_GLOBAL_CONTRAST = new InjectionToken('ly.global.contrast');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ THEME_CONFIG = new InjectionToken('ly.theme.config.root');
const /** @type {?} */ LY_THEME_CONFIG = new InjectionToken('ly_theme_config');
const /** @type {?} */ THEME_CONFIG_EXTRA = new InjectionToken('ly.theme.config.extra');
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
        this.renderer = this.rendererFactory.createRenderer(null, null);
        if (Platform.isBrowser) {
            const /** @type {?} */ mediaStyleContainer = _document.body.querySelector('ly-media-style-container');
            const /** @type {?} */ primaryStyleContainer = _document.body.querySelector('ly-primary-style-container');
            const /** @type {?} */ secondaryStyleContainer = _document.body.querySelector('ly-secondary-style-container');
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
class LyTheme2 {
    /**
     * @param {?} core
     * @param {?} themeName
     */
    constructor(core, themeName) {
        this.core = core;
        if (themeName) {
            this.setUpTheme(themeName);
        }
    }
    /**
     * @param {?} themeName
     * @return {?}
     */
    setUpTheme(themeName) {
        if (!this.config) {
            this.config = this.core.get(themeName);
            this._styleMap = new Map();
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
     * @param {?} nam
     * @return {?}
     */
    setTheme(nam) {
        this.config = this.core.get(nam);
        this._styleMap.forEach((dataStyle, key) => {
            dataStyle.styleElement.innerText = this.core._createStyleContent(this.config, dataStyle.style, dataStyle.id);
        });
    }
}
LyTheme2.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LyTheme2.ctorParameters = () => [
    { type: CoreTheme, },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_NAME,] },] },
];
/**
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
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgTranscludeDirective {
    /**
     * @param {?} _viewRef
     */
    constructor(_viewRef) {
        this._viewRef = _viewRef;
        this.ngTranscludeChange = new EventEmitter();
        this.viewRef = _viewRef;
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    set ngTransclude(templateRef) {
        this._ngTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
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
    ngAfterContentInit() {
        this.ngTranscludeChange.emit(true);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.viewRef.detach();
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
    "ngTranscludeChange": [{ type: Output },],
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
                return `${shadowBuilder(elevation, theme.colorOf(color))}`;
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
class LyBgColorAndRaised {
    /**
     * @param {?} theme
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} shadow
     * @param {?} contrast
     */
    constructor(theme, renderer, elementRef, shadow, contrast) {
        this.theme = theme;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.shadow = shadow;
        this.contrast = contrast;
        this.elevation = 3;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set bg(value) {
        this._bg = value;
        // this._cssBg = this.theme.colorOf(value);
    }
    /**
     * @return {?}
     */
    get bg() {
        return this._bg;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._color = value;
        // this._cssColor = this.theme.colorOf(value);
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set raised(val) { this._raisedState = toBoolean(val); }
    /**
     * @return {?}
     */
    get raised() { return this._raisedState; }
    /**
     * @return {?}
     */
    setAutoContrast() {
        this.contrast = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        let /** @type {?} */ newClassName;
        /**
         * ~
         */
        const /** @type {?} */ raisedĸey = this._raisedState === true ? 'raised' : '';
        let /** @type {?} */ key = '';
        if ((this.contrast && !this.color || this.color === 'auto') && this.bg) {
            key = `contrast${this.bg}${this._raisedState}${this.elevation}`;
            newClassName = this.theme.setUpStyle(`ly-${key}`, { '': this.contrastStyle.bind(this) });
        }
        else if (this.bg && this.color) {
            key = `b&ĸ${this.bg}${this.color}${this._raisedState}${this.elevation}`;
            newClassName = this.theme.setUpStyle(`ly-${key}`, { '': this.bgColorStyle.bind(this) });
        }
        else if (this.raised && !this.bg) {
            key = raisedĸey + this.color || '';
            newClassName = this.theme.setUpStyle(`ly-${key}`, { '': () => {
                    let /** @type {?} */ styles = `background-color:${this.theme.config["background"].primary};`;
                    let /** @type {?} */ color = '';
                    let /** @type {?} */ colorShadow;
                    if (this.color) {
                        color = this.theme.colorOf(this.color);
                        colorShadow = color;
                        styles += `color:${color};`;
                    }
                    else {
                        colorShadow = this.theme.config["colorShadow"];
                    }
                    if (this._raisedState) {
                        styles += shadowBuilder(this.elevation, colorShadow);
                    }
                    return styles;
                } });
        }
        else if (this.bg || this.color) {
            const /** @type {?} */ changeKey = this.bg ? ['bg', 'background', this.bg] : ['ĸ', 'color', this.color];
            const /** @type {?} */ color = changeKey[2];
            key = `${changeKey[0]}${color}${this._raisedState}${this.elevation}`;
            /** Create style */
            newClassName = this.theme.setUpStyle(`ly-${key}`, { '': () => {
                    const /** @type {?} */ _color = this.theme.colorOf(this.bg || this.color);
                    let /** @type {?} */ styles = `${changeKey[1]}:${_color};`;
                    if (this._raisedState) {
                        styles += shadowBuilder(this.elevation, _color);
                    }
                    return styles;
                } });
        }
        else {
            key = `raised${this._raisedState}${this.elevation}`;
            newClassName = this.theme.setUpStyle(`ly-${key}`, { '': () => {
                    if (this._raisedState) {
                        return shadowBuilder(this.elevation, this.theme.config["colorShadow"]);
                    }
                    else {
                        return shadowBuilder(0, this.theme.config["colorShadow"]);
                    }
                } });
        }
        this.theme.updateClassName(this.elementRef.nativeElement, this.renderer, newClassName, this._currentClassName);
        this._currentClassName = newClassName;
    }
    /**
     * @return {?}
     */
    contrastStyle() {
        const /** @type {?} */ cssBg = this.theme.colorOf(this.bg);
        this._color = this.theme.colorOf(`${this.bg}:contrast`);
        let /** @type {?} */ styles = `background:${cssBg};color:${this._color};`;
        if (this._raisedState) {
            styles += shadowBuilder(this.elevation, cssBg);
        }
        return styles;
    }
    /**
     * @return {?}
     */
    bgColorStyle() {
        const /** @type {?} */ cssBg = this.theme.colorOf(this.bg);
        const /** @type {?} */ cssColor = this.theme.colorOf(this.color);
        let /** @type {?} */ styles = `background:${cssBg};color:${cssColor};`;
        if (this._raisedState) {
            styles += shadowBuilder(this.elevation, cssBg);
        }
        return styles;
    }
}
LyBgColorAndRaised.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[bg], [color], [raised]'
            },] },
];
/** @nocollapse */
LyBgColorAndRaised.ctorParameters = () => [
    { type: LyTheme2, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: LyShadowService, },
    { type: undefined, decorators: [{ type: Inject, args: [LY_GLOBAL_CONTRAST,] }, { type: Optional },] },
];
LyBgColorAndRaised.propDecorators = {
    "bg": [{ type: Input },],
    "color": [{ type: Input },],
    "raised": [{ type: Input },],
    "elevation": [{ type: Input },],
};

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
        console.log(`this.theme.config.name`, this.theme.config.name, nam);
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
class LyCommonModule {
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
const /** @type {?} */ AUI_VERSION = '1.7.0-beta.3wtkb';
const /** @type {?} */ AUI_LAST_UPDATE = '2018-07-30T06:55:08.604Z';

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
                LyTheme2,
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { getContrastYIQ, shadowBuilder, Shadows, RandomId, getParents, THEME_VARIABLES, IS_CORE_THEME, StyleMap, ThemeVariables, LyRootService, Platform, LyCommonModule, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, IsBoolean, DomService, LY_OVERLAY_CONTAINER_PROVIDER_FACTORY, LY_OVERLAY_CONTAINER_PROVIDER, LxDomModule, LyFocusStateModule, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LY_GLOBAL_CONTRAST, LyBgColorAndRaised, LyShadowService, CoreTheme, THEME_CONFIG, LY_THEME_CONFIG, THEME_CONFIG_EXTRA, LY_THEME_NAME, LyThemeConfig, LyThemeContainer, toHyphenCase, LyTheme2, LyThemeModule, LyCoreStyles, Undefined, transformMediaQuery, InvertMediaQuery, LyStyleUtils, LyOverlayContainer as ɵb, LyNewRaised as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbHkvcmFuZG9tLWlkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BhcmVudHMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcm9vdC5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbnRyYXN0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLWNvbmZpZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lMi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvY29tbW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZWwvb2Zmc2V0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvaXMtYm9vbGVhbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9zaGFkb3cuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9iZy1jb2xvci1hbmQtcmFpc2VkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9yYWlzZWQuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS9jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL2RvbS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9seC1kb20ubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2ZvY3VzLXN0YXRlL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdmVyc2lvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9nZXN0dXJlL2dlc3R1cmUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdW5kZWZpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlLXV0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFlJUShoZXhjb2xvcikge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xuICBjb25zdCB5aXEgPSAoKHIgKiAyOTkpICsgKGcgKiA1ODcpICsgKGIgKiAxMTQpKSAvIDEwMDA7XG4gIHJldHVybiAoeWlxID49IDEyOCkgPyAnYmxhY2snIDogJ3doaXRlJztcbn1cbiIsImltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbmNvbnN0IHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG5jb25zdCBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5leHBvcnQgY29uc3QgU2hhZG93cyA9IFtcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMywgMCwgMCwgMSwgMSwgMCwgMCwgMiwgMSwgLTFdLFxuICBbMCwgMSwgNSwgMCwgMCwgMiwgMiwgMCwgMCwgMywgMSwgLTJdLFxuICBbMCwgMSwgOCwgMCwgMCwgMywgNCwgMCwgMCwgMywgMywgLTJdLFxuICBbMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwXSxcbiAgWzAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDFdLFxuICBbMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMl0sXG4gIFswLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyXSxcbiAgWzAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzXSxcbiAgWzAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzXSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0XSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0XSxcbiAgWzAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0XSxcbiAgWzAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1XSxcbiAgWzAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNV0sXG4gIFswLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDVdLFxuICBbMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2XSxcbiAgWzAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNl0sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDddLFxuICBbMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgN10sXG4gIFswLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4XSxcbiAgWzAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDhdXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXIoZWxldmF0aW9uOiBudW1iZXIgPSAyLCBjb2xvciA9ICcjMDAwJykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvcik7XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGBib3gtc2hhZG93OiR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSYW5kb21JZCB7XG4gIHB1YmxpYyBnZXQgZ2VuZXJhdGUoKSB7XG4gICAgY29uc3QgaWQ6IGFueSA9IChNYXRoLnJhbmRvbSgpICsgRGF0ZS5ub3coKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50cyhlbDogSFRNTEVsZW1lbnQsIHBhcmVudFNlbGVjdG9yOiBzdHJpbmcpIHtcclxuXHJcbiAgLy8gSWYgbm8gcGFyZW50U2VsZWN0b3IgZGVmaW5lZCB3aWxsIGJ1YmJsZSB1cCBhbGwgdGhlIHdheSB0byAqZG9jdW1lbnQqXHJcbiAgaWYgKHBhcmVudFNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGFyZW50U2VsZWN0b3IgPSAnYm9keSc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnRzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgbGV0IHA6IGFueSA9IGVsLnBhcmVudE5vZGU7XHJcbiAgbGV0IHB4ejogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gIHdoaWxlICghcHh6KSB7XHJcbiAgICAgIGNvbnN0IG8gPSBwO1xyXG4gICAgICBwYXJlbnRzLnB1c2gobyk7XHJcbiAgICAgIHAgPSBvLnBhcmVudE5vZGU7XHJcbiAgICAgIHB4eiA9IHAucXVlcnlTZWxlY3RvcihwYXJlbnRTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIC8vIHBhcmVudHMucHVzaChfcGFyZW50U2VsZWN0b3IpOyAvLyBQdXNoIHRoYXQgcGFyZW50U2VsZWN0b3IgeW91IHdhbnRlZCB0byBzdG9wIGF0XHJcbiAgLy8gY29uc29sZS5sb2cocGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdKTtcclxuICByZXR1cm4gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0eWxlRGF0YSB9IGZyb20gJy4vdGhlbWUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVEhFTUVfVkFSSUFCTEVTID0gbmV3IEluamVjdGlvblRva2VuPFBhbGV0dGVWYXJpYWJsZXM+KCdseS50aGVtZS52YXJpYWJsZXMnKTtcclxuZXhwb3J0IGNvbnN0IElTX0NPUkVfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48dHJ1ZT4oJ2x5LmlzLnJvb3QnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHlsZU1hcCB7XHJcbiAgcHJpdmF0ZSBzdHlsZU1hcDogTWFwPHN0cmluZywgU3R5bGVEYXRhPjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lTmFtZTogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHQge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5leHBvcnQgY2xhc3MgVGhlbWVWYXJpYWJsZXMge1xyXG4gIC8qKiBUaGVtZSBuYW1lICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHByaW1hcnk/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4gIGFjY2VudD86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbiAgLyoqIHdhcm4gb3IgZXJyb3IgY29sb3IgKi9cclxuICB3YXJuPzogUGFsZXR0ZVZhcmlhYmxlcztcclxuICBzY2hlbWU/OiBzdHJpbmc7XHJcbiAgY29sb3JTY2hlbWVzPzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogQ29sb3JTY2hlbWVcclxuICB9O1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZVZhcmlhYmxlcyB7XHJcbiAgZGVmYXVsdD86IHN0cmluZztcclxuICBjb250cmFzdD86IHN0cmluZztcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JTY2hlbWUge1xyXG4gIGJhY2tncm91bmQ/OiB7XHJcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxyXG4gICAgcGFwZXI/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICB0ZXh0Pzoge1xyXG4gICAgZGVmYXVsdDogc3RyaW5nLFxyXG4gICAgcHJpbWFyeT86IHN0cmluZyxcclxuICAgIHNlY29uZGFyeT86IHN0cmluZyxcclxuICAgIGRpc2FibGVkPzogc3RyaW5nLFxyXG4gICAgaGludD86IHN0cmluZyxcclxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICB9O1xyXG4gIGRpdmlkZXI/OiBzdHJpbmc7XHJcbiAgLyoqIENvbXBvbmVudHMgdmFyaWFibGVzICovXHJcbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XHJcbiAgYmFyPzogc3RyaW5nO1xyXG4gIGlucHV0Pzoge1xyXG4gICAgbGFiZWw/OiBzdHJpbmcsXHJcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcclxuICB9O1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIHN1cHBvcnRzIHRoZSBWOCBCcmVhayBJdGVyYXRvci4gVGhlIFY4IGNoZWNrXHJcbi8vIGlzIG5lY2Vzc2FyeSB0byBkZXRlY3QgYWxsIEJsaW5rIGJhc2VkIGJyb3dzZXJzLlxyXG5jb25zdCBoYXNWOEJyZWFrSXRlcmF0b3IgPSAodHlwZW9mKEludGwpICE9PSAndW5kZWZpbmVkJyAmJiAoSW50bCBhcyBhbnkpLnY4QnJlYWtJdGVyYXRvcik7XHJcbi8qKlxyXG4gKiBTZXJ2aWNlIHRvIGRldGVjdCB0aGUgY3VycmVudCBwbGF0Zm9ybSBieSBjb21wYXJpbmcgdGhlIHVzZXJBZ2VudCBzdHJpbmdzIGFuZFxyXG4gKiBjaGVja2luZyBicm93c2VyLXNwZWNpZmljIGdsb2JhbCBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgaXNCcm93c2VyOiBib29sZWFuID0gdHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JyAmJiAhIWRvY3VtZW50O1xyXG4gIC8qKiBMYXlvdXQgRW5naW5lcyAqL1xyXG4gIEVER0UgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhlZGdlKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgVFJJREVOVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAvLyBFZGdlSFRNTCBhbmQgVHJpZGVudCBtb2NrIEJsaW5rIHNwZWNpZmljIHRoaW5ncyBhbmQgbmVlZCB0byBiZSBleGNsdWRlZCBmcm9tIHRoaXMgY2hlY2suXHJcbiAgQkxJTksgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcclxuICAgICAgKCEhKCh3aW5kb3cgYXMgYW55KS5jaHJvbWUgfHwgaGFzVjhCcmVha0l0ZXJhdG9yKSAmJiAhIUNTUyAmJiAhdGhpcy5FREdFICYmICF0aGlzLlRSSURFTlQpO1xyXG5cclxuICAvLyBXZWJraXQgaXMgcGFydCBvZiB0aGUgdXNlckFnZW50IGluIEVkZ2VIVE1MLCBCbGluayBhbmQgVHJpZGVudC4gVGhlcmVmb3JlIHdlIG5lZWQgdG9cclxuICAvLyBlbnN1cmUgdGhhdCBXZWJraXQgcnVucyBzdGFuZGFsb25lIGFuZCBpcyBub3QgdXNlZCBhcyBhbm90aGVyIGVuZ2luZSdzIGJhc2UuXHJcbiAgV0VCS0lUID0gUGxhdGZvcm0uaXNCcm93c2VyICYmXHJcbiAgICAgIC9BcHBsZVdlYktpdC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuQkxJTksgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UO1xyXG5cclxuICAvKiogQnJvd3NlcnMgYW5kIFBsYXRmb3JtIFR5cGVzICovXHJcbiAgSU9TID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEod2luZG93IGFzIGFueSkuTVNTdHJlYW07XHJcblxyXG4gIC8vIEl0J3MgZGlmZmljdWx0IHRvIGRldGVjdCB0aGUgcGxhaW4gR2Vja28gZW5naW5lLCBiZWNhdXNlIG1vc3Qgb2YgdGhlIGJyb3dzZXJzIGlkZW50aWZ5XHJcbiAgLy8gdGhlbSBzZWxmIGFzIEdlY2tvLWxpa2UgYnJvd3NlcnMgYW5kIG1vZGlmeSB0aGUgdXNlckFnZW50J3MgYWNjb3JkaW5nIHRvIHRoYXQuXHJcbiAgLy8gU2luY2Ugd2Ugb25seSBjb3ZlciBvbmUgZXhwbGljaXQgRmlyZWZveCBjYXNlLCB3ZSBjYW4gc2ltcGx5IGNoZWNrIGZvciBGaXJlZm94XHJcbiAgLy8gaW5zdGVhZCBvZiBoYXZpbmcgYW4gdW5zdGFibGUgY2hlY2sgZm9yIEdlY2tvLlxyXG4gIEZJUkVGT1ggPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhmaXJlZm94fG1pbmVmaWVsZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuICAvLyBUcmlkZW50IG9uIG1vYmlsZSBhZGRzIHRoZSBhbmRyb2lkIHBsYXRmb3JtIHRvIHRoZSB1c2VyQWdlbnQgdG8gdHJpY2sgZGV0ZWN0aW9ucy5cclxuICBBTkRST0lEID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9hbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhdGhpcy5UUklERU5UO1xyXG5cclxuICAvLyBTYWZhcmkgYnJvd3NlcnMgd2lsbCBpbmNsdWRlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGVpciB1c2VyQWdlbnQuIFNvbWUgYnJvd3NlcnMgbWF5IGZha2VcclxuICAvLyB0aGlzIGFuZCBqdXN0IHBsYWNlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGUgdXNlckFnZW50LiBUbyBiZSBtb3JlIHNhZmUgYWJvdXQgU2FmYXJpIGV2ZXJ5XHJcbiAgLy8gU2FmYXJpIGJyb3dzZXIgc2hvdWxkIGFsc28gdXNlIFdlYmtpdCBhcyBpdHMgbGF5b3V0IGVuZ2luZS5cclxuICBTQUZBUkkgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL3NhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgdGhpcy5XRUJLSVQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbmplY3QsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBTdHlsZURhdGEsIERhdGFTdHlsZSB9IGZyb20gJy4vdGhlbWUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5Um9vdFNlcnZpY2Uge1xuICAvKiogU3R5bGUgQ29udGFpbmVyICovXG4gIHJvb3RDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICB0aGVtZVJvb3RNYXAgPSBuZXcgTWFwPHN0cmluZywgU3R5bGVEYXRhPigpO1xuICBwcml2YXRlIHRoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIFN0eWxlRGF0YT4+KCk7XG4gIHByaXZhdGUgdGhlbWVzID0gbmV3IE1hcDxzdHJpbmcsIHtba2V5OiBzdHJpbmddOiBhbnl9PigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgICBsZXQgY29udGFpbmVyOiBhbnk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiAoY29udGFpbmVyID0gX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2x5LWNvcmUtdGhlbWUnKSkpIHtcbiAgICAgIHRoaXMucm9vdENvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgIC8vIHRoaXMuX3NldFVwU3R5bGVzSWZFeGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvb3RDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LWNvcmUtdGhlbWUnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnJvb3RDb250YWluZXIsIF9kb2N1bWVudC5ib2R5LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG5cbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3NldFVwU3R5bGVzSWZFeGlzdCgpLCAxMDAwMCk7XG4gIH1cbiAgcmVnaXN0ZXJUaGVtZShwYWxldHRlOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMudGhlbWVNYXAuaGFzKHBhbGV0dGUubmFtZSkpIHtcbiAgICAgIHRoaXMudGhlbWVNYXAuc2V0KHBhbGV0dGUubmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgIHRoaXMudGhlbWVzLnNldChwYWxldHRlLm5hbWUsIHBhbGV0dGUpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbWFwOiB0aGlzLnRoZW1lTWFwLmdldChwYWxldHRlLm5hbWUpLFxuICAgICAgcGFsZXR0ZTogdGhpcy50aGVtZXMuZ2V0KHBhbGV0dGUubmFtZSlcbiAgICB9O1xuICB9XG5cbiAgZ2V0VGhlbWUobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWVzLmdldChuYW1lKTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgX3NldFVwU3R5bGVzSWZFeGlzdCgpIHtcbiAgLy8gICBjb25zb2xlLnRpbWUoJ2luaXQnKTtcbiAgLy8gICBjb25zdCBsaXN0ID0gdGhpcy5yb290Q29udGFpbmVyLmNoaWxkTm9kZXM7XG4gIC8vICAgbGV0IGluZGV4ID0gMDtcbiAgLy8gICBsZXQgc3R5bGVFbGVtZW50OiBIVE1MU3R5bGVFbGVtZW50O1xuICAvLyAgIHdoaWxlIChzdHlsZUVsZW1lbnQgPSBsaXN0W2luZGV4XSBhcyBIVE1MU3R5bGVFbGVtZW50KSB7XG4gIC8vICAgICBjb25zdCBhdHRyaWJ1dGUgPSBzdHlsZUVsZW1lbnQuYXR0cmlidXRlcy5pdGVtKDApO1xuICAvLyAgICAgY29uc3QgbmFtZSA9IGF0dHJpYnV0ZS5uYW1lO1xuICAvLyAgICAgY29uc3QgaWQgPSBhdHRyaWJ1dGUudmFsdWU7XG4gIC8vICAgICB0aGlzLl9zdHlsZU1hcC5zZXQobmFtZSwge1xuICAvLyAgICAgICBpZCxcbiAgLy8gICAgICAgc3R5bGVFbGVtZW50XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIGluZGV4Kys7XG4gIC8vICAgfVxuICAvLyAgIGNvbnNvbGUudGltZUVuZCgnaW5pdCcpO1xuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuX3N0eWxlTWFwKTtcbiAgLy8gfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTFlfR0xPQkFMX0NPTlRSQVNUID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCdseS5nbG9iYWwuY29udHJhc3QnKTtcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHkudGhlbWUuY29uZmlnLnJvb3QnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48THlUaGVtZUNvbmZpZz4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IFRIRU1FX0NPTkZJR19FWFRSQSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUaGVtZUNvbmZpZyB8IFRoZW1lQ29uZmlnW10+KCdseS50aGVtZS5jb25maWcuZXh0cmEnKTtcbmV4cG9ydCBjb25zdCBMWV9USEVNRV9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2x5LnRoZW1lLm5hbWUnKTtcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYWNjZW50OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICB3YXJuOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBMeVRoZW1lQ29uZmlnIHtcbiAgdGhlbWVzOiBhbnlbXSA9IFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlZmF1bHRWYWwge1xuICBkZWZhdWx0OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVDb2xvciB7XG4gIGNvbnRyYXN0OiBzdHJpbmc7XG59XG4iLCJleHBvcnQgZW51bSBJbnZlcnRNZWRpYVF1ZXJ5IHtcbiAgTm8sXG4gIFllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWVkaWFRdWVyeShtZWRpYTogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5OiBJbnZlcnRNZWRpYVF1ZXJ5ID0gSW52ZXJ0TWVkaWFRdWVyeS5Obyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgaWYgKG1lZGlhICYmIGludmVydE1lZGlhUXVlcnkgPT09IEludmVydE1lZGlhUXVlcnkuWWVzKSB7XG4gICAgY29uc3QgbmV3VmFsID0gbWVkaWEuc3BsaXQoJywnKS5tYXAoXyA9PiBgbm90ICR7X31gKTtcbiAgICByZXR1cm4gbmV3VmFsO1xuICB9XG4gIHJldHVybiBtZWRpYTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUSEVNRV9DT05GSUcsIFRoZW1lQ29uZmlnLCBUSEVNRV9DT05GSUdfRVhUUkEsIExZX1RIRU1FX0NPTkZJRywgTHlUaGVtZUNvbmZpZyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0eWxlQ29udGVudCwgU3R5bGVEYXRhLCBEYXRhU3R5bGUsIFN0eWxlLCBNdWx0aXBsZVN0eWxlcyB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5LCB0cmFuc2Zvcm1NZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcblxubGV0IGNsYXNzSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF90aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZUNvbmZpZz4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgRGF0YVN0eWxlPj4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVDb3JlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9DT05GSUcpIHRoZW1lQ29uZmlnOiBMeVRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUVfQ09ORklHIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgbWVkaWFTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LW1lZGlhLXN0eWxlLWNvbnRhaW5lcicpO1xuICAgICAgY29uc3QgcHJpbWFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbHktc2Vjb25kYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgICAgaWYgKHByaW1hcnlTdHlsZUNvbnRhaW5lcikge1xuICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChtZWRpYVN0eWxlQ29udGFpbmVyKTtcbiAgICAgICAgLy8gbWVkaWFTdHlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJpbWFyeVN0eWxlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1tZWRpYS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktcHJpbWFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1zZWNvbmRhcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciwgX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMucHJpbWFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lcik7XG4gICAgdGhpcy5zZXRDb3JlU3R5bGUoKTtcbiAgICBpZiAodGhlbWVDb25maWcpIHtcbiAgICAgIHRoZW1lQ29uZmlnLnRoZW1lcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLmFkZChuZXcgaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIG5ldyB0aGVtZVxuICAgKiBAcGFyYW0gdGhlbWU6IFRoZW1lQ29uZmlnXG4gICAqL1xuICBhZGQodGhlbWU6IFRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy5fdGhlbWVNYXAuc2V0KHRoZW1lLm5hbWUsIHRoZW1lKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5zZXQodGhlbWUubmFtZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVNYXAuZ2V0KG5hbWUpO1xuICB9XG4gIGdldFN0eWxlTWFwKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZU1hcC5nZXQobmFtZSk7XG4gIH1cblxuICBzZXRVcFN0eWxlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8bnVsbD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX8OEwrhyZWF0ZVN0eWxlKHVuZGVmaW5lZCwga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlQ29yZU1hcCwgJ3Jvb3QnLCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxudWxsPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICByZXR1cm4gdGhpcy5fw4TCuHJlYXRlU3R5bGUodW5kZWZpbmVkLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVDb3JlTWFwLCAncm9vdCcsIHRoaXMuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuXG4gIF/DhMK4cmVhdGVTdHlsZTxUPih0aGVtZUNvbmZpZzogYW55LCBrZXksIHN0eWxlOiBTdHlsZTxUPiwgbWFwU3R5bGVzOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+LCBfZm9yOiBzdHJpbmcsIF9pbjogYW55LCBfbWVkaWE/OiBzdHJpbmcsIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKG1hcFN0eWxlcy5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIG1hcFN0eWxlcy5nZXQoa2V5KS5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaWQgPSBgayR7KGNsYXNzSWQrKykudG9TdHJpbmcoMzYpfWA7XG4gICAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBjb25zdCBtZWRpYSA9IHRyYW5zZm9ybU1lZGlhUXVlcnkoX21lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgICAgIGNvbnN0IHN0eWxlQ29udGVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQ8VD4odGhlbWVDb25maWcsIHN0eWxlLCBpZCwgbWVkaWEpKTtcbiAgICAgIGNvbnN0IHNhdmVJbiA9IG1lZGlhID8gdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyIDogX2luO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlQ29udGVudCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHNhdmVJbiwgc3R5bGVFbGVtZW50KTtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdHlsZUVsZW1lbnQsICdzdHlsZV9kYXRhJywgYCR7X2Zvcn3DgsK3w4LCt8OCwrcke2lkfcOCwrfDgsK3w4LCtyR7a2V5fWApO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YVN0eWxlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIHN0eWxlRWxlbWVudCxcbiAgICAgICAgbWVkaWFcbiAgICAgIH07XG4gICAgICBtYXBTdHlsZXMuc2V0KGtleSwgZGF0YVN0eWxlKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gIH1cblxuICAvKiogI3N0eWxlICovXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQ8VD4odGhlbWVDb25maWc6IFQsIHN0eWxlczogU3R5bGU8VD4sIGlkOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBjb25zdCB0eXBmID0gdHlwZW9mIHN0eWxlcztcbiAgICBpZiAodHlwZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0b01lZGlhKGAuJHtpZH17JHtzdHlsZXN9fWAsIG1lZGlhKTtcbiAgICB9IGVsc2UgaWYgKHR5cGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0b01lZGlhKGAuJHtpZH17JHsoc3R5bGVzIGFzIFN0eWxlQ29udGVudDxUPikodGhlbWVDb25maWcpfX1gLCBtZWRpYSk7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gJyc7XG4gICAgZm9yIChjb25zdCBrZXkkIGluIHN0eWxlcyBhcyBNdWx0aXBsZVN0eWxlczxUPikge1xuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkkKSkge1xuICAgICAgICBjb25zdCB2YWwgPSBzdHlsZXNba2V5JF07XG4gICAgICAgIGNvbnN0IHRleHQgPSB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nID8gdmFsKHRoZW1lQ29uZmlnKSA6IHZhbDtcbiAgICAgICAgY29udGVudCArPSBgLiR7aWR9JHtrZXkkfXske3RleHR9fWA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b01lZGlhKGNvbnRlbnQsIG1lZGlhKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29yZVN0eWxlKCkge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoaXMuc2V0VXBTdHlsZSgncm9vdGJvZHknLCB7XG4gICAgICAnJzogKCkgPT4gKFxuICAgICAgICBgbWFyZ2luOjA7YFxuICAgICAgKSxcbiAgICAgICcsICosICo6YWZ0ZXIsICo6YmVmb3JlJzogKCkgPT4gKFxuICAgICAgICBgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICBgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9kb2N1bWVudC5ib2R5LCBjbGFzc25hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuXG4vKipcbiAqIENvbnZlcnRlciB0byBtZWRpYSBxdWVyeSBpZiBgbWVkaWFgIGlzIHByZXNlbnRcbiAqIEBwYXJhbSB0ZXh0IHN0eWxlIGNvbnRlbnRcbiAqIEBwYXJhbSBtZWRpYSBtZWRpYSBxdWVyeVxuICovXG5mdW5jdGlvbiB0b01lZGlhKHRleHQ6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICBpZiAodHlwZW9mIG1lZGlhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBgQG1lZGlhICR7bWVkaWF9eyR7dGV4dH19YDtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG1lZGlhKSkge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBtZWRpYS5mb3JFYWNoKF8gPT4gcmVzdWx0ICs9IGBAbWVkaWEgJHtffXske3RleHR9fWApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlLCBTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEludmVydE1lZGlhUXVlcnkgfSBmcm9tICcuLi9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lQ29uZmlnO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgIH1cbiAgfVxuICBzZXRVcFN0eWxlPFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fw4TCuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnk8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/DhMK4cmVhdGVTdHlsZTxUPih0aGlzLmNvbmZpZywga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlTWFwLCBuYW1lLCB0aGlzLmNvcmUuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuZm9yRWFjaCgoZGF0YVN0eWxlLCBrZXkpID0+IHtcbiAgICAgIGRhdGFTdHlsZS5zdHlsZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5jb3JlLl9jcmVhdGVTdHlsZUNvbnRlbnQodGhpcy5jb25maWcsIGRhdGFTdHlsZS5zdHlsZSwgZGF0YVN0eWxlLmlkKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IF9wYXRoOiBzdHJpbmdbXSA9IHBhdGggaW5zdGFuY2VvZiBBcnJheSA/IHBhdGggOiBwYXRoLnNwbGl0KCc6Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBvYmogPSBvYmpbX3BhdGhbaV1dIHx8IHBhdGg7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBOZ01vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy52aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBPdXRwdXQoKSBuZ1RyYW5zY2x1ZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHB1YmxpYyBnZXQgbmdUcmFuc2NsdWRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICB0aGlzLnZpZXdSZWYgPSBfdmlld1JlZjtcclxuICB9XHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5uZ1RyYW5zY2x1ZGVDaGFuZ2UuZW1pdCh0cnVlKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnZpZXdSZWYuZGV0YWNoKCk7XHJcbiAgfVxyXG59XHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiZnVuY3Rpb24gaXNXaW5kb3cob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbTogYW55KSB7XHJcbiAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBleGFjdFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgZG9jRWxlbTogYW55LCB3aW46IGFueSxcclxuICAgICAgICBib3ggPSB7dG9wOiAwLCBsZWZ0OiAwfTtcclxuICAgIGNvbnN0IGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xyXG5cclxuICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcclxuICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG4gICAgd2luID0gZ2V0V2luZG93KGRvYyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxyXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGFueSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gSXNCb29sZWFuKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwga2V5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBnZXQ6IGRlZmluaXRpb24uZ2V0LFxuICAgICAgICBzZXQ6IG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICBkZWZpbml0aW9uLnNldCh0b0Jvb2xlYW4obmV3VmFsdWUpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzWydfXycgKyBrZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgIHRoaXNbJ19fJyArIGtleV0gPSB0b0Jvb2xlYW4obmV3VmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcclxuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEx5U2hhZG93U2VydmljZSB7XHJcbiAgLyoqIERlZmF1bHQgZWxldmF0aW9uICovXHJcbiAgZWxldmF0aW9uID0gMTtcclxuICAvKiogZGVtbzogc2V0U2hhZG93KC4uLltlbGV2YXRpb24sIGNvbG9yXS4uLikgKi9cclxuICBzZXRTaGFkb3codGhlbWU6IEx5VGhlbWUyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCB2YWw6IFtudW1iZXIsIHN0cmluZ10sIG9sZENsYXNzTmFtZT86IHN0cmluZykge1xyXG4gICAgbGV0IGtleXM6IHN0cmluZztcclxuICAgIGxldCBlbGV2YXRpb246IG51bWJlcjtcclxuICAgIGxldCBjb2xvciA9ICdjb2xvclNoYWRvdyc7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGtleXMgPSB2YWwuam9pbignJyk7XHJcbiAgICAgIGVsZXZhdGlvbiA9IHZhbFswXTtcclxuICAgICAgY29sb3IgPSB2YWxbMV0gfHwgY29sb3I7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBrZXlzID0gYCR7dGhpcy5lbGV2YXRpb259JHtjb2xvcn1gO1xyXG4gICAgICBlbGV2YXRpb24gPSB0aGlzLmVsZXZhdGlvbjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoZW1lLnNldFVwU3R5bGUoYHNoYWRvdyR7a2V5c31gLCB7Jyc6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGAke3NoYWRvd0J1aWxkZXIoZWxldmF0aW9uLCB0aGVtZS5jb2xvck9mKGNvbG9yKSl9YDtcclxuICAgIH19KTtcclxuICAgIHRoZW1lLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCBjbGFzc25hbWUsIG9sZENsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gY2xhc3NuYW1lO1xyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBTa2lwU2VsZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSW5qZWN0LCBPcHRpb25hbCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBIb3N0LCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9HTE9CQUxfQ09OVFJBU1QgfSBmcm9tICcuL2NvbnRyYXN0JztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsJztcbmltcG9ydCB7IHNoYWRvd0J1aWxkZXIgfSBmcm9tICcuLi9zaGFkb3cnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi9hbHlsZS1jb25maWctc2VydmljZSc7XG5pbXBvcnQgeyBMeVNoYWRvd1NlcnZpY2UgfSBmcm9tICcuL3NoYWRvdy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbYmddLCBbY29sb3JdLCBbcmFpc2VkXSdcbn0pXG5leHBvcnQgY2xhc3MgTHlCZ0NvbG9yQW5kUmFpc2VkIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfcmFpc2VkU3RhdGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2N1cnJlbnRDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYmc6IHN0cmluZztcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGJnKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iZyA9IHZhbHVlO1xuICAgIC8vIHRoaXMuX2Nzc0JnID0gdGhpcy50aGVtZS5jb2xvck9mKHZhbHVlKTtcbiAgfVxuICBnZXQgYmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JnO1xuICB9XG4gIC8vIGdldCBjc3NCZygpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fY3NzQmc7XG4gIC8vIH1cbiAgQElucHV0KClcbiAgc2V0IGNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICAgIC8vIHRoaXMuX2Nzc0NvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHZhbHVlKTtcbiAgfVxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIC8vIGdldCBjc3NDb2xvcigpIHtcbiAgLy8gICByZXR1cm4gdGhpcy5fY3NzQ29sb3I7XG4gIC8vIH1cbiAgQElucHV0KCkgc2V0IHJhaXNlZCh2YWw6IGJvb2xlYW4pIHsgdGhpcy5fcmFpc2VkU3RhdGUgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkU3RhdGU7IH1cbiAgQElucHV0KCkgZWxldmF0aW9uID0gMztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHNoYWRvdzogTHlTaGFkb3dTZXJ2aWNlLFxuICAgIEBJbmplY3QoTFlfR0xPQkFMX0NPTlRSQVNUKSBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbnRyYXN0OiBib29sZWFuXG4gICkgeyB9XG5cbiAgcHVibGljIHNldEF1dG9Db250cmFzdCgpIHtcbiAgICB0aGlzLmNvbnRyYXN0ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBsZXQgbmV3Q2xhc3NOYW1lO1xuICAgIC8qKn4gKi9cbiAgICBjb25zdCByYWlzZWTDhMK4ZXkgPSB0aGlzLl9yYWlzZWRTdGF0ZSA9PT0gdHJ1ZSA/ICdyYWlzZWQnIDogJyc7XG4gICAgbGV0IGtleSA9ICcnO1xuICAgIGlmICgodGhpcy5jb250cmFzdCAmJiAhdGhpcy5jb2xvciB8fCB0aGlzLmNvbG9yID09PSAnYXV0bycpICYmIHRoaXMuYmcpIHtcbiAgICAgIGtleSA9IGBjb250cmFzdCR7dGhpcy5iZ30ke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiB0aGlzLmNvbnRyYXN0U3R5bGUuYmluZCh0aGlzKX0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5iZyAmJiB0aGlzLmNvbG9yKSB7XG4gICAgICBrZXkgPSBgYibDhMK4JHt0aGlzLmJnfSR7dGhpcy5jb2xvcn0ke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiB0aGlzLmJnQ29sb3JTdHlsZS5iaW5kKHRoaXMpfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJhaXNlZCAmJiAhdGhpcy5iZykge1xuICAgICAga2V5ID0gcmFpc2Vkw4TCuGV5ICsgdGhpcy5jb2xvciB8fCAnJztcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiAoKSA9PiB7XG4gICAgICAgIGxldCBzdHlsZXMgPSBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLmJhY2tncm91bmQucHJpbWFyeX07YDtcbiAgICAgICAgbGV0IGNvbG9yID0gJyc7XG4gICAgICAgIGxldCBjb2xvclNoYWRvdztcbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICBjb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICAgICAgICBjb2xvclNoYWRvdyA9IGNvbG9yO1xuICAgICAgICAgIHN0eWxlcyArPSBgY29sb3I6JHtjb2xvcn07YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb2xvclNoYWRvdyA9IHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjb2xvclNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgIH19KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmcgfHwgdGhpcy5jb2xvcikge1xuICAgICAgY29uc3QgY2hhbmdlS2V5ID0gdGhpcy5iZyA/IFsnYmcnLCAnYmFja2dyb3VuZCcsIHRoaXMuYmddIDogWyfDhMK4JywgJ2NvbG9yJywgdGhpcy5jb2xvcl07XG4gICAgICBjb25zdCBjb2xvciA9IGNoYW5nZUtleVsyXTtcbiAgICAgIGtleSA9IGAke2NoYW5nZUtleVswXX0ke2NvbG9yfSR7dGhpcy5fcmFpc2VkU3RhdGV9JHt0aGlzLmVsZXZhdGlvbn1gO1xuXG4gICAgICAvKiogQ3JlYXRlIHN0eWxlICovXG4gICAgICBuZXdDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGx5LSR7a2V5fWAsIHsnJzogKCkgPT4ge1xuICAgICAgICBjb25zdCBfY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyB8fCB0aGlzLmNvbG9yKTtcbiAgICAgICAgbGV0IHN0eWxlcyA9IGAke2NoYW5nZUtleVsxXX06JHtfY29sb3J9O2A7XG4gICAgICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBfY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9fSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gYHJhaXNlZCR7dGhpcy5fcmFpc2VkU3RhdGV9JHt0aGlzLmVsZXZhdGlvbn1gO1xuICAgICAgbmV3Q2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBseS0ke2tleX1gLCB7Jyc6ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3JhaXNlZFN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHNoYWRvd0J1aWxkZXIodGhpcy5lbGV2YXRpb24sIHRoaXMudGhlbWUuY29uZmlnLmNvbG9yU2hhZG93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2hhZG93QnVpbGRlcigwLCB0aGlzLnRoZW1lLmNvbmZpZy5jb2xvclNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgIH19KTtcbiAgICB9XG4gICAgdGhpcy50aGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzTmFtZSwgdGhpcy5fY3VycmVudENsYXNzTmFtZSk7XG4gICAgdGhpcy5fY3VycmVudENsYXNzTmFtZSA9IG5ld0NsYXNzTmFtZTtcbiAgfVxuICBwcml2YXRlIGNvbnRyYXN0U3R5bGUoKSB7XG4gICAgY29uc3QgY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gICAgdGhpcy5fY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YoYCR7dGhpcy5iZ306Y29udHJhc3RgKTtcbiAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHt0aGlzLl9jb2xvcn07YDtcbiAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxuICBwcml2YXRlIGJnQ29sb3JTdHlsZSgpIHtcbiAgICBjb25zdCBjc3NCZyA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmJnKTtcbiAgICBjb25zdCBjc3NDb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih0aGlzLmNvbG9yKTtcbiAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQ6JHtjc3NCZ307Y29sb3I6JHtjc3NDb2xvcn07YDtcbiAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgIHN0eWxlcyArPSBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCBjc3NCZyk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVNoYWRvd1NlcnZpY2UgfSBmcm9tICcuL3NoYWRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vYWx5bGUtY29uZmlnLXNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnOm5vdChbcmFpc2VkXSlbbmV3UmFpc2VkXScgfSlcbmV4cG9ydCBjbGFzcyBMeU5ld1JhaXNlZCB7XG4gIGVsZXZhdGlvbiA9IDM7XG4gIHByaXZhdGUgY3VycmVudENsYXNzTmFtZTogc3RyaW5nO1xuICAvKiogRGVmYXVsdCByYWlzZWQgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuZXdSYWlzZWQodmFsdWU6IFtudW1iZXIsIHN0cmluZ10pIHtcbiAgICB0aGlzLmN1cnJlbnRDbGFzc05hbWUgPSB0aGlzLnNoYWRvdy5zZXRTaGFkb3codGhpcy50aGVtZSwgdGhpcy5lbGVtZW50UmVmLCB0aGlzLnJlbmRlcmVyLCBbIHZhbHVlWzBdIHx8IHRoaXMuZWxldmF0aW9uLCB2YWx1ZVsxXSBdLCB0aGlzLmN1cnJlbnRDbGFzc05hbWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNoYWRvdzogTHlTaGFkb3dTZXJ2aWNlXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVRoZW1lXScsXG4gIHByb3ZpZGVyczogW0x5VGhlbWUyXSxcbiAgZXhwb3J0QXM6ICdseVRoZW1lJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRoZW1lQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfbHlUaGVtZTogc3RyaW5nO1xuICAvKipcbiAgICogc2V0IHRoZW1lXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbHlUaGVtZShuYW06IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKGB0aGlzLnRoZW1lLmNvbmZpZy5uYW1lYCwgdGhpcy50aGVtZS5jb25maWcubmFtZSwgbmFtKTtcbiAgICB0aGlzLl9seVRoZW1lID0gbmFtO1xuICAgIHRoaXMudGhlbWUuc2V0VXBUaGVtZShuYW1lKTtcbiAgfVxuICBnZXQgbHlUaGVtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbHlUaGVtZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNoYXJlZDogdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zZXRDb250YWluZXJTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlcik7XG4gIH1cblxuICBwcml2YXRlIF9zZXRDb250YWluZXJTdHlsZShlbGVtZW50LCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgY29uc3QgY2xhc3NuYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGB0aGVtZToke3RoaXMudGhlbWUuY29uZmlnLm5hbWV9YCwge1xuICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy5iYWNrZ3JvdW5kLmRlZmF1bHR9O2AgK1xuICAgICAgICBgY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy50ZXh0LmRlZmF1bHR9O2AgK1xuICAgICAgICBgZm9udC1mYW1pbHk6JHt0aGlzLnRoZW1lLmNvbmZpZy50eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O2BcbiAgICAgIClcbiAgICB9KTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBjbGFzc25hbWUpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlCZ0NvbG9yQW5kUmFpc2VkIH0gZnJvbSAnLi9iZy1jb2xvci1hbmQtcmFpc2VkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMWV9HTE9CQUxfQ09OVFJBU1QgfSBmcm9tICcuL2NvbnRyYXN0JztcbmltcG9ydCB7IEx5TmV3UmFpc2VkIH0gZnJvbSAnLi9yYWlzZWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5VGhlbWVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRoZW1lTW9kdWxlIH0gZnJvbSAnLi90aGVtZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeUJnQ29sb3JBbmRSYWlzZWQsIEx5TmV3UmFpc2VkLCBMeVRoZW1lQ29udGFpbmVyXSxcbiAgZXhwb3J0czogW0x5QmdDb2xvckFuZFJhaXNlZCwgTHlOZXdSYWlzZWQsIEx5VGhlbWVDb250YWluZXJdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IExZX0dMT0JBTF9DT05UUkFTVCwgdXNlVmFsdWU6IGZhbHNlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbk1vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIE5nTW9kdWxlLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlDb250YWluZXIge1xuICBwcm90ZWN0ZWQgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdseS1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICB9XG59XG5cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQXBwbGljYXRpb25SZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSBfdmlld1JlZjogVmlld1JlZjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lclxuICApIHsgfVxuXG4gIGF0dGFjaDxUPihfaG9zdFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGNvbXBvbmVudDogYW55LCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgY29uc3Qgdmlld1JlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xuICAgICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gX2hvc3RWaWV3Q29udGFpbmVyUmVmO1xuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChyb290Tm9kZSA9PiB0aGlzLmFkZENoaWxkKHJvb3ROb2RlKSk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm92ZXJsYXlDb250YWluZXIuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBnZXREb21FbGVtZW50RnJvbUNvbXBvbmVudFJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBkZXN0cm95UmVmKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4sIGRlbGF5OiBudW1iZXIpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEx5T3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21TZXJ2aWNlIH0gZnJvbSAnLi9kb20uc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBMWV9PVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudENvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyKSB7XG4gIHJldHVybiBwYXJlbnRDb250YWluZXIgfHwgbmV3IEx5T3ZlcmxheUNvbnRhaW5lcigpO1xufVxuXG5leHBvcnQgY29uc3QgTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gT3ZlcmxheUNvbnRhaW5lciBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBMeU92ZXJsYXlDb250YWluZXIsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMeU92ZXJsYXlDb250YWluZXJdXSxcbiAgdXNlRmFjdG9yeTogTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWVxufTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtbRG9tU2VydmljZSwgTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJdXVxufSlcbmV4cG9ydCBjbGFzcyBMeERvbU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE5nWm9uZSwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiwgT25Jbml0LCBPbkRlc3Ryb3ksIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgcGlwZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZW51bSBGb2N1c1N0YXR1cyB7XG4gIC8qKm1vdXNlIGFuZC9vciB0b3VjaCovXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIC8qKiBrZXlib2FyZCBhbmQvb3IgcHJvZ3JhbSovXG4gIEtFWUJPQVJEID0gJ2tleWJvYXJkJyxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5Rm9jdXNTdGF0ZV0nLFxuICBleHBvcnRBczogJ2x5Rm9jdXNTdGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgc3RhdGU6IEZvY3VzU3RhdHVzO1xuICBzdGF0ZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBFbGVtZW50O1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSBfc3RhdGVTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Rm9jdXNTdGF0dXM+KCk7XG4gIF9zdGF0ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBAT3V0cHV0KCkgbHlGb2N1c0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNTdGF0dXM+KCk7XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNcbiAgICAgIC5zZXQoJ2ZvY3VzJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnYmx1cicsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uLmJpbmQodGhpcykpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjb25zdCBvbiA9IChldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgICAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9iOiBPYnNlcnZhYmxlPEZvY3VzU3RhdHVzPiA9IHRoaXMuX3N0YXRlU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uID0gb2JcbiAgICAgIC8vIC5kZWJvdW5jZVRpbWUoMTExKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMTEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChlOiBGb2N1c1N0YXR1cykgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlID0gZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcbiAgICAgICAgdGhpcy5seUZvY3VzQ2hhbmdlLmVtaXQoZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdGF0ZSgpIHtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdibHVyJykpIHtcbiAgICAgIHRoaXMuc3RhdGVNYXAuY2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCdtb3VzZWRvd24nKSB8fCB0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygndG91Y2hzdGFydCcpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLkRFRkFVTFQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5LRVlCT0FSRDtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGVTdWJqZWN0Lm5leHQoc3RhdGUpO1xuICB9XG5cbiAgb24oZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkge1xuICAgIHRoaXMuc3RhdGVNYXAuc2V0KGV2ZW50LnR5cGUsIHRydWUpO1xuICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVDbGFzcygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcsIHNob3VsZFNldDogYm9vbGVhbikgPT4gc2hvdWxkU2V0ID8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSA6IHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgdG9nZ2xlQ2xhc3MoYGx5LWZvY3VzZWRgLCAhIXN0YXRlKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBGb2N1c1N0YXR1cykge1xuICAgICAgaWYgKEZvY3VzU3RhdHVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gRm9jdXNTdGF0dXNba2V5XTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoYGx5LSR7Y2xhc3NOYW1lfS1mb2N1c2VkYCwgc3RhdGUgPT09IGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQobnVsbCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Rm9jdXNTdGF0ZSB9IGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUZvY3VzU3RhdGVdLFxuICBleHBvcnRzOiBbTHlGb2N1c1N0YXRlXVxufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGVNb2R1bGUgeyB9XG4iLCJleHBvcnQgY29uc3QgQVVJX1ZFUlNJT04gPSAnMS43LjAtYmV0YS4zd3RrYic7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMDctMzBUMDY6NTU6MDguNjA0Wic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSEFNTUVSX0dFU1RVUkVfQ09ORklHLCBIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuLi90aGVtZS9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBjb25zdCBMWV9IQU1NRVJfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxIYW1tZXJPcHRpb25zPignTFlfSEFNTUVSX09QVElPTlMnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBwcml2YXRlIF9oYW1tZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/ICh3aW5kb3cgYXMgYW55KS5IYW1tZXIgOiBudWxsO1xuICBldmVudHM6IHN0cmluZ1tdID0gdGhpcy5faGFtbWVyID8gW1xuICAgICdzbGlkZScsXG4gICAgJ3NsaWRlc3RhcnQnLFxuICAgICdzbGlkZWVuZCcsXG4gICAgJ3NsaWRlcmlnaHQnLFxuICAgICdzbGlkZWxlZnQnXG4gIF0gOiBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9ucyxcbiAgICAvLyBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIC8vIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAvLyAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgnay1oYW1tZXItY3NzJywge1xuICAgIC8vICAgICAnJzogKCkgPT4gKFxuICAgIC8vICAgICAgIGB1c2VyLXNlbGVjdDogbm9uZTtgICtcbiAgICAvLyAgICAgICBgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7YCArXG4gICAgLy8gICAgICAgYC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtgXG4gICAgLy8gICAgIClcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICAvLyB9XG4gICAgY29uc3QgbWMgPSBuZXcgdGhpcy5faGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwgdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHBhbiA9IG5ldyB0aGlzLl9oYW1tZXIuUGFuKCk7XG4gICAgY29uc3Qgc3dpcGUgPSBuZXcgdGhpcy5faGFtbWVyLlN3aXBlKCk7XG4gICAgY29uc3Qgc2xpZGUgPSB0aGlzLl9jcmVhdGVSZWNvZ25pemVyKHBhbiwge2V2ZW50OiAnc2xpZGUnLCB0aHJlc2hvbGQ6IDB9LCBzd2lwZSk7XG5cbiAgICBzbGlkZS5yZWNvZ25pemVXaXRoKHN3aXBlKTtcbiAgICBwYW4ucmVjb2duaXplV2l0aChzd2lwZSk7XG5cbiAgICAvLyBBZGQgY3VzdG9taXplZCBnZXN0dXJlcyB0byBIYW1tZXIgbWFuYWdlclxuICAgIG1jLmFkZChbc3dpcGUsIHBhbiwgc2xpZGVdKTtcbiAgICByZXR1cm4gbWM7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyByZWNvZ25pemVyLCB3aXRob3V0IGFmZmVjdGluZyB0aGUgZGVmYXVsdCByZWNvZ25pemVycyBvZiBIYW1tZXJKUyAqL1xuICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyKGJhc2U6IGFueSwgb3B0aW9uczogYW55LCAuLi5pbmhlcml0YW5jZXM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVjb2duaXplciA9IG5ldyAoYmFzZS5jb25zdHJ1Y3Rvcikob3B0aW9ucyk7XG5cbiAgICBpbmhlcml0YW5jZXMucHVzaChiYXNlKTtcbiAgICBpbmhlcml0YW5jZXMuZm9yRWFjaChpdGVtID0+IHJlY29nbml6ZXIucmVjb2duaXplV2l0aChpdGVtKSk7XG5cbiAgICByZXR1cm4gcmVjb2duaXplcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgU2VsZiwgSG9zdCwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5VGhlbWVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIFRIRU1FMl9QUk9WSURFUl9GQUNUT1JZKFxuLy8gICBwYXJlbnRSZWdpc3RyeTogTHlUaGVtZTIsXG4vLyAgIGNvcmVUaGVtZTogQ29yZVRoZW1lKSB7XG4vLyAgIHJldHVybiBwYXJlbnRSZWdpc3RyeSB8fCBuZXcgTHlUaGVtZTIoY29yZVRoZW1lKTtcbi8vIH1cblxuLy8gLyoqIEBkb2NzLXByaXZhdGUgKi9cbi8vIGV4cG9ydCBjb25zdCBUSEVNRTJfUFJPVklERVIgPSB7XG4vLyAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYW4gTHlUaGVtZTIgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbi8vICAgcHJvdmlkZTogTHlUaGVtZTIsXG4vLyAgIGRlcHM6IFtcbi8vICAgICBbbmV3IE9wdGlvbmFsKCksIEx5VGhlbWUyXSxcbi8vICAgICBbQ29yZVRoZW1lXVxuLy8gICBdLFxuLy8gICB1c2VGYWN0b3J5OiBUSEVNRTJfUFJPVklERVJfRkFDVE9SWSxcbi8vIH07XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBMeVRoZW1lMixcbiAgICAgICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogdGhlbWVOYW1lIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuLi90aGVtZS9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q29yZVN0eWxlcyB7XG4gIGNsYXNzZXMgPSB7XG4gICAgLyoqIFBvc2l0aW9uIGFic29sdXRlICovXG4gICAgRmlsbDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdrLWFic29sdXRlJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICAgICAgYHRvcDogMDtgICtcbiAgICAgICAgICBgYm90dG9tOiAwO2AgK1xuICAgICAgICAgIGBsZWZ0OiAwO2AgK1xuICAgICAgICAgIGByaWdodDogMDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApLFxuICAgIFZpc3VhbGx5SGlkZGVuOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2stdmlzdWFsbHktaGlkZGVuJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGBib3JkZXI6IDA7YCArXG4gICAgICAgICAgYGNsaXA6IHJlY3QoMCAwIDAgMCk7YCArXG4gICAgICAgICAgYGhlaWdodDogMXB4O2AgK1xuICAgICAgICAgIGBtYXJnaW46IC0xcHg7YCArXG4gICAgICAgICAgYG92ZXJmbG93OiBoaWRkZW47YCArXG4gICAgICAgICAgYHBhZGRpbmc6IDA7YCArXG4gICAgICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgICAgICBgd2lkdGg6IDFweDtgICtcbiAgICAgICAgICBgb3V0bGluZTogMDtgICtcbiAgICAgICAgICBgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO2AgK1xuICAgICAgICAgIGAtbW96LWFwcGVhcmFuY2U6IG5vbmU7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lKSB7IH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVbmRlZmluZWQge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBUeXBvZ3JhcGh5Q29uZmlnIHtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udFdlaWdodD86IG51bWJlcjtcbiAgbGV0dGVyU3BhY2luZz86IG51bWJlcjtcbiAgdGV4dFRyYW5zZm9ybT86ICd1cHBlcmNhc2UnIHwgJ2NhcGl0YWxpemUnIHwgJ2xvd2VyY2FzZSc7XG59XG5cbmV4cG9ydCBjbGFzcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgaHRtbEZvbnRTaXplOiBudW1iZXIsXG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgfTtcbiAgcHhUb1JlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudHlwb2dyYXBoeS5mb250U2l6ZSAvIDE0O1xuICAgIHJldHVybiBgJHt2YWx1ZSAvIHRoaXMudHlwb2dyYXBoeS5odG1sRm9udFNpemUgKiBzaXplfXJlbWA7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3QkFBK0IsUUFBUTtJQUNyQyx1QkFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLHVCQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsdUJBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5Qyx1QkFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDdkQsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUN6Qzs7Ozs7O0FDTkQsQUFDQSx1QkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBRXZCLHVCQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQztBQUNsQyx1QkFBTSx3QkFBd0IsR0FBRyxJQUFJLENBQUM7QUFDdEMsdUJBQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDO0FBQ3hDLHVCQUFhLE9BQU8sR0FBRztJQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQzNDLENBQUM7Ozs7OztBQUNGLHVCQUE4QixZQUFvQixDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU07SUFDakUsdUJBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1Qix1QkFBTSxNQUFN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