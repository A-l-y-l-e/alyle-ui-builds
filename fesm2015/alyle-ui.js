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
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClass
     * @param {?=} oldClass
     * @return {?}
     */
    updateClass(element, renderer, newClass, oldClass) {
        this.updateClassName(element, renderer, newClass, oldClass);
        return oldClass;
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
const /** @type {?} */ AUI_VERSION = '1.7.0-beta.461kq';
const /** @type {?} */ AUI_LAST_UPDATE = '2018-08-04T06:26:35.968Z';

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

export { getContrastYIQ, shadowBuilder, Shadows, RandomId, getParents, THEME_VARIABLES, IS_CORE_THEME, StyleMap, ThemeVariables, LyRootService, Platform, LyCommonModule, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, IsBoolean, defaultEntry, DomService, LY_OVERLAY_CONTAINER_PROVIDER_FACTORY, LY_OVERLAY_CONTAINER_PROVIDER, LxDomModule, LyFocusStateModule, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LY_GLOBAL_CONTRAST, LyBgColorAndRaised, LyShadowService, CoreTheme, THEME_CONFIG, LY_THEME_CONFIG, THEME_CONFIG_EXTRA, LY_THEME_NAME, LyThemeConfig, LyThemeContainer, toHyphenCase, LyTheme2, LyThemeModule, LyCoreStyles, Undefined, transformMediaQuery, InvertMediaQuery, LyStyleUtils, LyOverlayContainer as ɵb, LyNewRaised as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbHkvcmFuZG9tLWlkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3BhcmVudHMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcm9vdC5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbnRyYXN0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lLWNvbmZpZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL3RoZW1lMi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvY29tbW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvZWwvb2Zmc2V0LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21pbmltYWwvaXMtYm9vbGVhbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2RlZmF1bHQtZW50cnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvc2hhZG93LnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvYmctY29sb3ItYW5kLXJhaXNlZC5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvcmFpc2VkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9kb20uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbHgtZG9tLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3ZlcnNpb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZ2VzdHVyZS9nZXN0dXJlLWNvbmZpZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvc3R5bGVzL2NvcmUtc3R5bGVzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3VuZGVmaW5lZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZS11dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJhc3RZSVEoaGV4Y29sb3IpIHtcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoNCwgMiksIDE2KTtcbiAgY29uc3QgeWlxID0gKChyICogMjk5KSArIChnICogNTg3KSArIChiICogMTE0KSkgLyAxMDAwO1xuICByZXR1cm4gKHlpcSA+PSAxMjgpID8gJ2JsYWNrJyA6ICd3aGl0ZSc7XG59XG4iLCJpbXBvcnQgKiBhcyBfY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5jb25zdCBjaHJvbWEgPSBfY2hyb21hO1xuXG5jb25zdCBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG5jb25zdCBzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkgPSAwLjE0O1xuY29uc3Qgc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkgPSAwLjEyO1xuZXhwb3J0IGNvbnN0IFNoYWRvd3MgPSBbXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDEsIDMsIDAsIDAsIDEsIDEsIDAsIDAsIDIsIDEsIC0xXSxcbiAgWzAsIDEsIDUsIDAsIDAsIDIsIDIsIDAsIDAsIDMsIDEsIC0yXSxcbiAgWzAsIDEsIDgsIDAsIDAsIDMsIDQsIDAsIDAsIDMsIDMsIC0yXSxcbiAgWzAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMF0sXG4gIFswLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxXSxcbiAgWzAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDJdLFxuICBbMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMl0sXG4gIFswLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgM10sXG4gIFswLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgM10sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNF0sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNF0sXG4gIFswLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNF0sXG4gIFswLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNV0sXG4gIFswLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDVdLFxuICBbMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1XSxcbiAgWzAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNl0sXG4gIFswLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDZdLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgN10sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3XSxcbiAgWzAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDddLFxuICBbMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOF0sXG4gIFswLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4XVxuXTtcbmV4cG9ydCBmdW5jdGlvbiBzaGFkb3dCdWlsZGVyKGVsZXZhdGlvbjogbnVtYmVyIHwgc3RyaW5nID0gMiwgY29sb3IgPSAnIzAwMCcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IpO1xuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5VW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5KS5jc3MoKVxuICBdO1xuICBjb25zdCBlID0gU2hhZG93c1tlbGV2YXRpb25dO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgYm94LXNoYWRvdzoke2VbMF19cHggJHtlWzFdfXB4ICR7ZVsyXX1weCAke2VbM119cHggJHtjb2xvcnNbMF19LCR7ZVs0XX1weCAke2VbNV19cHggJHtlWzZdfXB4ICR7ZVs3XX1weCAke2NvbG9yc1sxXX0sJHtlWzhdfXB4ICR7ZVs5XX1weCAke2VbMTBdfXB4ICR7ZVsxMV19cHggJHtjb2xvcnNbMl19O2A7XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmFuZG9tSWQge1xuICBwdWJsaWMgZ2V0IGdlbmVyYXRlKCkge1xuICAgIGNvbnN0IGlkOiBhbnkgPSAoTWF0aC5yYW5kb20oKSArIERhdGUubm93KCkpO1xuICAgIHJldHVybiBpZDtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudHMoZWw6IEhUTUxFbGVtZW50LCBwYXJlbnRTZWxlY3Rvcjogc3RyaW5nKSB7XHJcblxyXG4gIC8vIElmIG5vIHBhcmVudFNlbGVjdG9yIGRlZmluZWQgd2lsbCBidWJibGUgdXAgYWxsIHRoZSB3YXkgdG8gKmRvY3VtZW50KlxyXG4gIGlmIChwYXJlbnRTZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBhcmVudFNlbGVjdG9yID0gJ2JvZHknO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyZW50czogQXJyYXk8YW55PiA9IFtdO1xyXG4gIGxldCBwOiBhbnkgPSBlbC5wYXJlbnROb2RlO1xyXG4gIGxldCBweHo6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuICB3aGlsZSAoIXB4eikge1xyXG4gICAgICBjb25zdCBvID0gcDtcclxuICAgICAgcGFyZW50cy5wdXNoKG8pO1xyXG4gICAgICBwID0gby5wYXJlbnROb2RlO1xyXG4gICAgICBweHogPSBwLnF1ZXJ5U2VsZWN0b3IocGFyZW50U2VsZWN0b3IpO1xyXG4gIH1cclxuICAvLyBwYXJlbnRzLnB1c2goX3BhcmVudFNlbGVjdG9yKTsgLy8gUHVzaCB0aGF0IHBhcmVudFNlbGVjdG9yIHlvdSB3YW50ZWQgdG8gc3RvcCBhdFxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSk7XHJcbiAgcmV0dXJuIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdHlsZURhdGEgfSBmcm9tICcuL3RoZW1lLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRIRU1FX1ZBUklBQkxFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQYWxldHRlVmFyaWFibGVzPignbHkudGhlbWUudmFyaWFibGVzJyk7XHJcbmV4cG9ydCBjb25zdCBJU19DT1JFX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPHRydWU+KCdseS5pcy5yb290Jyk7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R5bGVNYXAge1xyXG4gIHByaXZhdGUgc3R5bGVNYXA6IE1hcDxzdHJpbmcsIFN0eWxlRGF0YT47XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aGVtZU5hbWU6IHN0cmluZykge31cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRoZW1lVmFyaWFibGVzIHtcclxuICAvKiogVGhlbWUgbmFtZSAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmltYXJ5PzogUGFsZXR0ZVZhcmlhYmxlcztcclxuICBhY2NlbnQ/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4gIC8qKiB3YXJuIG9yIGVycm9yIGNvbG9yICovXHJcbiAgd2Fybj86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbiAgc2NoZW1lPzogc3RyaW5nO1xyXG4gIGNvbG9yU2NoZW1lcz86IHtcclxuICAgIFtrZXk6IHN0cmluZ106IENvbG9yU2NoZW1lXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xyXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XHJcbiAgY29udHJhc3Q/OiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcclxuICBiYWNrZ3JvdW5kPzoge1xyXG4gICAgZGVmYXVsdD86IHN0cmluZyxcclxuICAgIHBhcGVyPzogc3RyaW5nLFxyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbiAgdGV4dD86IHtcclxuICAgIGRlZmF1bHQ6IHN0cmluZyxcclxuICAgIHByaW1hcnk/OiBzdHJpbmcsXHJcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IHN0cmluZyxcclxuICAgIGhpbnQ/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICBkaXZpZGVyPzogc3RyaW5nO1xyXG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xyXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xyXG4gIGJhcj86IHN0cmluZztcclxuICBpbnB1dD86IHtcclxuICAgIGxhYmVsPzogc3RyaW5nLFxyXG4gICAgdW5kZXJsaW5lPzogc3RyaW5nXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBzdXBwb3J0cyB0aGUgVjggQnJlYWsgSXRlcmF0b3IuIFRoZSBWOCBjaGVja1xyXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cclxuY29uc3QgaGFzVjhCcmVha0l0ZXJhdG9yID0gKHR5cGVvZihJbnRsKSAhPT0gJ3VuZGVmaW5lZCcgJiYgKEludGwgYXMgYW55KS52OEJyZWFrSXRlcmF0b3IpO1xyXG4vKipcclxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcclxuICogY2hlY2tpbmcgYnJvd3Nlci1zcGVjaWZpYyBnbG9iYWwgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGlzQnJvd3NlcjogYm9vbGVhbiA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudDtcclxuICAvKiogTGF5b3V0IEVuZ2luZXMgKi9cclxuICBFREdFID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZWRnZSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gIFRSSURFTlQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gRWRnZUhUTUwgYW5kIFRyaWRlbnQgbW9jayBCbGluayBzcGVjaWZpYyB0aGluZ3MgYW5kIG5lZWQgdG8gYmUgZXhjbHVkZWQgZnJvbSB0aGlzIGNoZWNrLlxyXG4gIEJMSU5LID0gUGxhdGZvcm0uaXNCcm93c2VyICYmXHJcbiAgICAgICghISgod2luZG93IGFzIGFueSkuY2hyb21lIHx8IGhhc1Y4QnJlYWtJdGVyYXRvcikgJiYgISFDU1MgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UKTtcclxuXHJcbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXHJcbiAgLy8gZW5zdXJlIHRoYXQgV2Via2l0IHJ1bnMgc3RhbmRhbG9uZSBhbmQgaXMgbm90IHVzZWQgYXMgYW5vdGhlciBlbmdpbmUncyBiYXNlLlxyXG4gIFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxyXG4gICAgICAvQXBwbGVXZWJLaXQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLkJMSU5LICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xyXG4gIElPUyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhKHdpbmRvdyBhcyBhbnkpLk1TU3RyZWFtO1xyXG5cclxuICAvLyBJdCdzIGRpZmZpY3VsdCB0byBkZXRlY3QgdGhlIHBsYWluIEdlY2tvIGVuZ2luZSwgYmVjYXVzZSBtb3N0IG9mIHRoZSBicm93c2VycyBpZGVudGlmeVxyXG4gIC8vIHRoZW0gc2VsZiBhcyBHZWNrby1saWtlIGJyb3dzZXJzIGFuZCBtb2RpZnkgdGhlIHVzZXJBZ2VudCdzIGFjY29yZGluZyB0byB0aGF0LlxyXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxyXG4gIC8vIGluc3RlYWQgb2YgaGF2aW5nIGFuIHVuc3RhYmxlIGNoZWNrIGZvciBHZWNrby5cclxuICBGSVJFRk9YID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gVHJpZGVudCBvbiBtb2JpbGUgYWRkcyB0aGUgYW5kcm9pZCBwbGF0Zm9ybSB0byB0aGUgdXNlckFnZW50IHRvIHRyaWNrIGRldGVjdGlvbnMuXHJcbiAgQU5EUk9JRCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvYW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLy8gU2FmYXJpIGJyb3dzZXJzIHdpbGwgaW5jbHVkZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlaXIgdXNlckFnZW50LiBTb21lIGJyb3dzZXJzIG1heSBmYWtlXHJcbiAgLy8gdGhpcyBhbmQganVzdCBwbGFjZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlIHVzZXJBZ2VudC4gVG8gYmUgbW9yZSBzYWZlIGFib3V0IFNhZmFyaSBldmVyeVxyXG4gIC8vIFNhZmFyaSBicm93c2VyIHNob3VsZCBhbHNvIHVzZSBXZWJraXQgYXMgaXRzIGxheW91dCBlbmdpbmUuXHJcbiAgU0FGQVJJID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9zYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIHRoaXMuV0VCS0lUO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5qZWN0LCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgU3R5bGVEYXRhLCBEYXRhU3R5bGUgfSBmcm9tICcuL3RoZW1lLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVJvb3RTZXJ2aWNlIHtcbiAgLyoqIFN0eWxlIENvbnRhaW5lciAqL1xuICByb290Q29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgdGhlbWVSb290TWFwID0gbmV3IE1hcDxzdHJpbmcsIFN0eWxlRGF0YT4oKTtcbiAgcHJpdmF0ZSB0aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBTdHlsZURhdGE+PigpO1xuICBwcml2YXRlIHRoZW1lcyA9IG5ldyBNYXA8c3RyaW5nLCB7W2tleTogc3RyaW5nXTogYW55fT4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MlxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gICAgbGV0IGNvbnRhaW5lcjogYW55O1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgKGNvbnRhaW5lciA9IF9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdseS1jb3JlLXRoZW1lJykpKSB7XG4gICAgICB0aGlzLnJvb3RDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAvLyB0aGlzLl9zZXRVcFN0eWxlc0lmRXhpc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb290Q29udGFpbmVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdseS1jb3JlLXRoZW1lJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShfZG9jdW1lbnQuYm9keSwgdGhpcy5yb290Q29udGFpbmVyLCBfZG9jdW1lbnQuYm9keS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9zZXRVcFN0eWxlc0lmRXhpc3QoKSwgMTAwMDApO1xuICB9XG4gIHJlZ2lzdGVyVGhlbWUocGFsZXR0ZTogYW55KSB7XG4gICAgaWYgKCF0aGlzLnRoZW1lTWFwLmhhcyhwYWxldHRlLm5hbWUpKSB7XG4gICAgICB0aGlzLnRoZW1lTWFwLnNldChwYWxldHRlLm5hbWUsIG5ldyBNYXAoKSk7XG4gICAgICB0aGlzLnRoZW1lcy5zZXQocGFsZXR0ZS5uYW1lLCBwYWxldHRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hcDogdGhpcy50aGVtZU1hcC5nZXQocGFsZXR0ZS5uYW1lKSxcbiAgICAgIHBhbGV0dGU6IHRoaXMudGhlbWVzLmdldChwYWxldHRlLm5hbWUpXG4gICAgfTtcbiAgfVxuXG4gIGdldFRoZW1lKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnRoZW1lcy5nZXQobmFtZSk7XG4gIH1cblxuICAvLyBwcml2YXRlIF9zZXRVcFN0eWxlc0lmRXhpc3QoKSB7XG4gIC8vICAgY29uc29sZS50aW1lKCdpbml0Jyk7XG4gIC8vICAgY29uc3QgbGlzdCA9IHRoaXMucm9vdENvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAvLyAgIGxldCBpbmRleCA9IDA7XG4gIC8vICAgbGV0IHN0eWxlRWxlbWVudDogSFRNTFN0eWxlRWxlbWVudDtcbiAgLy8gICB3aGlsZSAoc3R5bGVFbGVtZW50ID0gbGlzdFtpbmRleF0gYXMgSFRNTFN0eWxlRWxlbWVudCkge1xuICAvLyAgICAgY29uc3QgYXR0cmlidXRlID0gc3R5bGVFbGVtZW50LmF0dHJpYnV0ZXMuaXRlbSgwKTtcbiAgLy8gICAgIGNvbnN0IG5hbWUgPSBhdHRyaWJ1dGUubmFtZTtcbiAgLy8gICAgIGNvbnN0IGlkID0gYXR0cmlidXRlLnZhbHVlO1xuICAvLyAgICAgdGhpcy5fc3R5bGVNYXAuc2V0KG5hbWUsIHtcbiAgLy8gICAgICAgaWQsXG4gIC8vICAgICAgIHN0eWxlRWxlbWVudFxuICAvLyAgICAgfSk7XG4gIC8vICAgICBpbmRleCsrO1xuICAvLyAgIH1cbiAgLy8gICBjb25zb2xlLnRpbWVFbmQoJ2luaXQnKTtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLl9zdHlsZU1hcCk7XG4gIC8vIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IExZX0dMT0JBTF9DT05UUkFTVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxib29sZWFuPignbHkuZ2xvYmFsLmNvbnRyYXN0Jyk7XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgVEhFTUVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPFRoZW1lQ29uZmlnIHwgVGhlbWVDb25maWdbXT4oJ2x5LnRoZW1lLmNvbmZpZy5yb290Jyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUVfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEx5VGhlbWVDb25maWc+KCdseV90aGVtZV9jb25maWcnKTtcbmV4cG9ydCBjb25zdCBUSEVNRV9DT05GSUdfRVhUUkEgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGhlbWVDb25maWcgfCBUaGVtZUNvbmZpZ1tdPignbHkudGhlbWUuY29uZmlnLmV4dHJhJyk7XG5leHBvcnQgY29uc3QgTFlfVEhFTUVfTkFNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdseS50aGVtZS5uYW1lJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaW1hcnk6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGFjY2VudDogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgd2FybjogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgY2xhc3MgTHlUaGVtZUNvbmZpZyB7XG4gIHRoZW1lczogYW55W10gPSBbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0VmFsIHtcbiAgZGVmYXVsdDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlQ29sb3Ige1xuICBjb250cmFzdDogc3RyaW5nO1xufVxuIiwiZXhwb3J0IGVudW0gSW52ZXJ0TWVkaWFRdWVyeSB7XG4gIE5vLFxuICBZZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1lZGlhUXVlcnkobWVkaWE6IHN0cmluZywgaW52ZXJ0TWVkaWFRdWVyeTogSW52ZXJ0TWVkaWFRdWVyeSA9IEludmVydE1lZGlhUXVlcnkuTm8pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gIGlmIChtZWRpYSAmJiBpbnZlcnRNZWRpYVF1ZXJ5ID09PSBJbnZlcnRNZWRpYVF1ZXJ5Llllcykge1xuICAgIGNvbnN0IG5ld1ZhbCA9IG1lZGlhLnNwbGl0KCcsJykubWFwKF8gPT4gYG5vdCAke199YCk7XG4gICAgcmV0dXJuIG5ld1ZhbDtcbiAgfVxuICByZXR1cm4gbWVkaWE7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVEhFTUVfQ09ORklHLCBUaGVtZUNvbmZpZywgVEhFTUVfQ09ORklHX0VYVFJBLCBMWV9USEVNRV9DT05GSUcsIEx5VGhlbWVDb25maWcgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdHlsZUNvbnRlbnQsIFN0eWxlRGF0YSwgRGF0YVN0eWxlLCBTdHlsZSwgTXVsdGlwbGVTdHlsZXMgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgSW52ZXJ0TWVkaWFRdWVyeSwgdHJhbnNmb3JtTWVkaWFRdWVyeSB9IGZyb20gJy4uL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeSc7XG5cbmxldCBjbGFzc0lkID0gMDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVRoZW1lIHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgbWVkaWFTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaW1hcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHNlY29uZGFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfdGhlbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgVGhlbWVDb25maWc+KCk7XG4gIHByaXZhdGUgX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIERhdGFTdHlsZT4+KCk7XG4gIHByaXZhdGUgX3N0eWxlQ29yZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUVfQ09ORklHKSB0aGVtZUNvbmZpZzogTHlUaGVtZUNvbmZpZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICApIHtcbiAgICBpZiAoIXRoZW1lQ29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xZX1RIRU1FX0NPTkZJRyB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IG1lZGlhU3R5bGVDb250YWluZXIgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdseS1tZWRpYS1zdHlsZS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IHByaW1hcnlTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LXByaW1hcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgICBjb25zdCBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lciA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2x5LXNlY29uZGFyeS1zdHlsZS1jb250YWluZXInKTtcbiAgICAgIGlmIChwcmltYXJ5U3R5bGVDb250YWluZXIpIHtcbiAgICAgICAgKF9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQobWVkaWFTdHlsZUNvbnRhaW5lcik7XG4gICAgICAgIC8vIG1lZGlhU3R5bGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHByaW1hcnlTdHlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktbWVkaWEtc3R5bGUtY29udGFpbmVyJyk7XG4gICAgdGhpcy5wcmltYXJ5U3R5bGVDb250YWluZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2x5LXByaW1hcnktc3R5bGUtY29udGFpbmVyJyk7XG4gICAgdGhpcy5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktc2Vjb25kYXJ5LXN0eWxlLWNvbnRhaW5lcicpO1xuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLm1lZGlhU3R5bGVDb250YWluZXIsIF9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKF9kb2N1bWVudC5ib2R5LCB0aGlzLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgdGhpcy5tZWRpYVN0eWxlQ29udGFpbmVyKTtcbiAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShfZG9jdW1lbnQuYm9keSwgdGhpcy5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciwgdGhpcy5wcmltYXJ5U3R5bGVDb250YWluZXIpO1xuICAgIHRoaXMuc2V0Q29yZVN0eWxlKCk7XG4gICAgaWYgKHRoZW1lQ29uZmlnKSB7XG4gICAgICB0aGVtZUNvbmZpZy50aGVtZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5hZGQobmV3IGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lOiBUaGVtZUNvbmZpZ1xuICAgKi9cbiAgYWRkKHRoZW1lOiBUaGVtZUNvbmZpZykge1xuICAgIHRoaXMuX3RoZW1lTWFwLnNldCh0aGVtZS5uYW1lLCB0aGVtZSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuc2V0KHRoZW1lLm5hbWUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuICBnZXRTdHlsZU1hcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgc2V0VXBTdHlsZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPG51bGw+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIHJldHVybiB0aGlzLl/DhMK4cmVhdGVTdHlsZSh1bmRlZmluZWQsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZUNvcmVNYXAsICdyb290JywgdGhpcy5wcmltYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBzZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8bnVsbD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuX8OEwrhyZWF0ZVN0eWxlKHVuZGVmaW5lZCwga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlQ29yZU1hcCwgJ3Jvb3QnLCB0aGlzLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cblxuICBfw4TCuHJlYXRlU3R5bGU8VD4odGhlbWVDb25maWc6IGFueSwga2V5LCBzdHlsZTogU3R5bGU8VD4sIG1hcFN0eWxlczogTWFwPHN0cmluZywgRGF0YVN0eWxlPiwgX2Zvcjogc3RyaW5nLCBfaW46IGFueSwgX21lZGlhPzogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeSkge1xuICAgIGlmIChtYXBTdHlsZXMuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBtYXBTdHlsZXMuZ2V0KGtleSkuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlkID0gYGskeyhjbGFzc0lkKyspLnRvU3RyaW5nKDM2KX1gO1xuICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgY29uc3QgbWVkaWEgPSB0cmFuc2Zvcm1NZWRpYVF1ZXJ5KF9tZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gICAgICBjb25zdCBzdHlsZUNvbnRlbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5fY3JlYXRlU3R5bGVDb250ZW50PFQ+KHRoZW1lQ29uZmlnLCBzdHlsZSwgaWQsIG1lZGlhKSk7XG4gICAgICBjb25zdCBzYXZlSW4gPSBtZWRpYSA/IHRoaXMubWVkaWFTdHlsZUNvbnRhaW5lciA6IF9pbjtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZUNvbnRlbnQpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChzYXZlSW4sIHN0eWxlRWxlbWVudCk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3R5bGVFbGVtZW50LCAnc3R5bGVfZGF0YScsIGAke19mb3J9w4LCt8OCwrfDgsK3JHtpZH3DgsK3w4LCt8OCwrcke2tleX1gKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGFTdHlsZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBzdHlsZUVsZW1lbnQsXG4gICAgICAgIG1lZGlhXG4gICAgICB9O1xuICAgICAgbWFwU3R5bGVzLnNldChrZXksIGRhdGFTdHlsZSk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqICNzdHlsZSAqL1xuICBfY3JlYXRlU3R5bGVDb250ZW50PFQ+KHRoZW1lQ29uZmlnOiBULCBzdHlsZXM6IFN0eWxlPFQ+LCBpZDogc3RyaW5nLCBtZWRpYT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgdHlwZiA9IHR5cGVvZiBzdHlsZXM7XG4gICAgaWYgKHR5cGYgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdG9NZWRpYShgLiR7aWR9eyR7c3R5bGVzfX1gLCBtZWRpYSk7XG4gICAgfSBlbHNlIGlmICh0eXBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdG9NZWRpYShgLiR7aWR9eyR7KHN0eWxlcyBhcyBTdHlsZUNvbnRlbnQ8VD4pKHRoZW1lQ29uZmlnKX19YCwgbWVkaWEpO1xuICAgIH1cbiAgICBsZXQgY29udGVudCA9ICcnO1xuICAgIGZvciAoY29uc3Qga2V5JCBpbiBzdHlsZXMgYXMgTXVsdGlwbGVTdHlsZXM8VD4pIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5JCkpIHtcbiAgICAgICAgY29uc3QgdmFsID0gc3R5bGVzW2tleSRdO1xuICAgICAgICBjb25zdCB0ZXh0ID0gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHZhbCh0aGVtZUNvbmZpZykgOiB2YWw7XG4gICAgICAgIGNvbnRlbnQgKz0gYC4ke2lkfSR7a2V5JH17JHt0ZXh0fX1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9NZWRpYShjb250ZW50LCBtZWRpYSk7XG4gIH1cblxuICBwcml2YXRlIHNldENvcmVTdHlsZSgpIHtcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0aGlzLnNldFVwU3R5bGUoJ3Jvb3Rib2R5Jywge1xuICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgYG1hcmdpbjowO2BcbiAgICAgICksXG4gICAgICAnLCAqLCAqOmFmdGVyLCAqOmJlZm9yZSc6ICgpID0+IChcbiAgICAgICAgYC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtgICtcbiAgICAgICAgYC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtgICtcbiAgICAgICAgYGJveC1zaXppbmc6IGJvcmRlci1ib3g7YFxuICAgICAgKVxuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZG9jdW1lbnQuYm9keSwgY2xhc3NuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAob2xkQ2xhc3NuYW1lKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvbGRDbGFzc25hbWUpO1xuICAgIH1cbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuZXdDbGFzc25hbWUpO1xuICB9XG5cbn1cblxuLyoqXG4gKiBDb252ZXJ0ZXIgdG8gbWVkaWEgcXVlcnkgaWYgYG1lZGlhYCBpcyBwcmVzZW50XG4gKiBAcGFyYW0gdGV4dCBzdHlsZSBjb250ZW50XG4gKiBAcGFyYW0gbWVkaWEgbWVkaWEgcXVlcnlcbiAqL1xuZnVuY3Rpb24gdG9NZWRpYSh0ZXh0OiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgaWYgKHR5cGVvZiBtZWRpYSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYEBtZWRpYSAke21lZGlhfXske3RleHR9fWA7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShtZWRpYSkpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgbWVkaWEuZm9yRWFjaChfID0+IHJlc3VsdCArPSBgQG1lZGlhICR7X317JHt0ZXh0fX1gKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiB0ZXh0O1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSwgU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IEx5VGhlbWVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZUNvbmZpZztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWVcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVOYW1lKTtcbiAgICAgIHRoaXMuX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBTdHlsZTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPFQ+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgIHJldHVybiB0aGlzLmNvcmUuX8OEwrhyZWF0ZVN0eWxlPFQ+KHRoaXMuY29uZmlnLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVNYXAsIG5hbWUsIHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBzZXRVcFN0eWxlU2Vjb25kYXJ5PFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fw4TCuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cbiAgY29sb3JPZih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMuY29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gICAgcmV0dXJuIG9sZENsYXNzO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuZm9yRWFjaCgoZGF0YVN0eWxlLCBrZXkpID0+IHtcbiAgICAgIGRhdGFTdHlsZS5zdHlsZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5jb3JlLl9jcmVhdGVTdHlsZUNvbnRlbnQodGhpcy5jb25maWcsIGRhdGFTdHlsZS5zdHlsZSwgZGF0YVN0eWxlLmlkKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IF9wYXRoOiBzdHJpbmdbXSA9IHBhdGggaW5zdGFuY2VvZiBBcnJheSA/IHBhdGggOiBwYXRoLnNwbGl0KCc6Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBvYmogPSBvYmpbX3BhdGhbaV1dIHx8IHBhdGg7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBOZ01vZHVsZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy52aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBPdXRwdXQoKSBuZ1RyYW5zY2x1ZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHB1YmxpYyBnZXQgbmdUcmFuc2NsdWRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICB0aGlzLnZpZXdSZWYgPSBfdmlld1JlZjtcclxuICB9XHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy5uZ1RyYW5zY2x1ZGVDaGFuZ2UuZW1pdCh0cnVlKTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnZpZXdSZWYuZGV0YWNoKCk7XHJcbiAgfVxyXG59XHJcbkBOZ01vZHVsZSh7XHJcbiAgZXhwb3J0czogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlTW9kdWxlIHtcclxuXHJcbn1cclxuIiwiZnVuY3Rpb24gaXNXaW5kb3cob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbTogYW55KSB7XHJcbiAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBleGFjdFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgZG9jRWxlbTogYW55LCB3aW46IGFueSxcclxuICAgICAgICBib3ggPSB7dG9wOiAwLCBsZWZ0OiAwfTtcclxuICAgIGNvbnN0IGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xyXG5cclxuICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcclxuICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG4gICAgd2luID0gZ2V0V2luZG93KGRvYyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxyXG4gICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWU6IGFueSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gSXNCb29sZWFuKCk6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwga2V5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICBnZXQ6IGRlZmluaXRpb24uZ2V0LFxuICAgICAgICBzZXQ6IG5ld1ZhbHVlID0+IHtcbiAgICAgICAgICBkZWZpbml0aW9uLnNldCh0b0Jvb2xlYW4obmV3VmFsdWUpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzWydfXycgKyBrZXldO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgIHRoaXNbJ19fJyArIGtleV0gPSB0b0Jvb2xlYW4obmV3VmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RW50cnkodmFsdWU6IHN0cmluZyB8IG51bWJlciwgZGVmYXVsdFZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2hhZG93QnVpbGRlciB9IGZyb20gJy4uL3NoYWRvdyc7XHJcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMeVNoYWRvd1NlcnZpY2Uge1xyXG4gIC8qKiBEZWZhdWx0IGVsZXZhdGlvbiAqL1xyXG4gIGVsZXZhdGlvbiA9IDE7XHJcbiAgLyoqIGRlbW86IHNldFNoYWRvdyguLi5bZWxldmF0aW9uLCBjb2xvcl0uLi4pICovXHJcbiAgc2V0U2hhZG93KHRoZW1lOiBMeVRoZW1lMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgdmFsOiBbbnVtYmVyLCBzdHJpbmddLCBvbGRDbGFzc05hbWU/OiBzdHJpbmcpIHtcclxuICAgIGxldCBrZXlzOiBzdHJpbmc7XHJcbiAgICBsZXQgZWxldmF0aW9uOiBudW1iZXI7XHJcbiAgICBsZXQgY29sb3IgPSAnY29sb3JTaGFkb3cnO1xyXG4gICAgaWYgKHZhbCkge1xyXG4gICAgICBrZXlzID0gdmFsLmpvaW4oJycpO1xyXG4gICAgICBlbGV2YXRpb24gPSB2YWxbMF07XHJcbiAgICAgIGNvbG9yID0gdmFsWzFdIHx8IGNvbG9yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5cyA9IGAke3RoaXMuZWxldmF0aW9ufSR7Y29sb3J9YDtcclxuICAgICAgZWxldmF0aW9uID0gdGhpcy5lbGV2YXRpb247XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0aGVtZS5zZXRVcFN0eWxlKGBzaGFkb3cke2tleXN9YCwgeycnOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHtzaGFkb3dCdWlsZGVyKGVsZXZhdGlvbiwgdGhlbWUuY29sb3JPZihjb2xvcikpfWA7XHJcbiAgICB9fSk7XHJcbiAgICB0aGVtZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCByZW5kZXJlciwgY2xhc3NuYW1lLCBvbGRDbGFzc05hbWUpO1xyXG4gICAgcmV0dXJuIGNsYXNzbmFtZTtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgU2tpcFNlbGYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEluamVjdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfR0xPQkFMX0NPTlRSQVNUIH0gZnJvbSAnLi9jb250cmFzdCc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbCc7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vYWx5bGUtY29uZmlnLXNlcnZpY2UnO1xuaW1wb3J0IHsgTHlTaGFkb3dTZXJ2aWNlIH0gZnJvbSAnLi9zaGFkb3cuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2JnXSwgW2NvbG9yXSwgW3JhaXNlZF0nXG59KVxuZXhwb3J0IGNsYXNzIEx5QmdDb2xvckFuZFJhaXNlZCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3JhaXNlZFN0YXRlOiBib29sZWFuO1xuICBwcml2YXRlIF9jdXJyZW50Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2JnOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBiZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmcgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLl9jc3NCZyA9IHRoaXMudGhlbWUuY29sb3JPZih2YWx1ZSk7XG4gIH1cbiAgZ2V0IGJnKCkge1xuICAgIHJldHVybiB0aGlzLl9iZztcbiAgfVxuICAvLyBnZXQgY3NzQmcoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2Nzc0JnO1xuICAvLyB9XG4gIEBJbnB1dCgpXG4gIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29sb3IgPSB2YWx1ZTtcbiAgICAvLyB0aGlzLl9jc3NDb2xvciA9IHRoaXMudGhlbWUuY29sb3JPZih2YWx1ZSk7XG4gIH1cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuICAvLyBnZXQgY3NzQ29sb3IoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMuX2Nzc0NvbG9yO1xuICAvLyB9XG4gIEBJbnB1dCgpIHNldCByYWlzZWQodmFsOiBib29sZWFuKSB7IHRoaXMuX3JhaXNlZFN0YXRlID0gdG9Cb29sZWFuKHZhbCk7IH1cbiAgZ2V0IHJhaXNlZCgpIHsgcmV0dXJuIHRoaXMuX3JhaXNlZFN0YXRlOyB9XG4gIEBJbnB1dCgpIGVsZXZhdGlvbiA9IDM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzaGFkb3c6IEx5U2hhZG93U2VydmljZSxcbiAgICBASW5qZWN0KExZX0dMT0JBTF9DT05UUkFTVCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBjb250cmFzdDogYm9vbGVhblxuICApIHsgfVxuXG4gIHB1YmxpYyBzZXRBdXRvQ29udHJhc3QoKSB7XG4gICAgdGhpcy5jb250cmFzdCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgbGV0IG5ld0NsYXNzTmFtZTtcbiAgICAvKip+ICovXG4gICAgY29uc3QgcmFpc2Vkw4TCuGV5ID0gdGhpcy5fcmFpc2VkU3RhdGUgPT09IHRydWUgPyAncmFpc2VkJyA6ICcnO1xuICAgIGxldCBrZXkgPSAnJztcbiAgICBpZiAoKHRoaXMuY29udHJhc3QgJiYgIXRoaXMuY29sb3IgfHwgdGhpcy5jb2xvciA9PT0gJ2F1dG8nKSAmJiB0aGlzLmJnKSB7XG4gICAgICBrZXkgPSBgY29udHJhc3Qke3RoaXMuYmd9JHt0aGlzLl9yYWlzZWRTdGF0ZX0ke3RoaXMuZWxldmF0aW9ufWA7XG4gICAgICBuZXdDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGx5LSR7a2V5fWAsIHsnJzogdGhpcy5jb250cmFzdFN0eWxlLmJpbmQodGhpcyl9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYmcgJiYgdGhpcy5jb2xvcikge1xuICAgICAga2V5ID0gYGImw4TCuCR7dGhpcy5iZ30ke3RoaXMuY29sb3J9JHt0aGlzLl9yYWlzZWRTdGF0ZX0ke3RoaXMuZWxldmF0aW9ufWA7XG4gICAgICBuZXdDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGx5LSR7a2V5fWAsIHsnJzogdGhpcy5iZ0NvbG9yU3R5bGUuYmluZCh0aGlzKX0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5yYWlzZWQgJiYgIXRoaXMuYmcpIHtcbiAgICAgIGtleSA9IHJhaXNlZMOEwrhleSArIHRoaXMuY29sb3IgfHwgJyc7XG4gICAgICBuZXdDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGx5LSR7a2V5fWAsIHsnJzogKCkgPT4ge1xuICAgICAgICBsZXQgc3R5bGVzID0gYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy5iYWNrZ3JvdW5kLnByaW1hcnl9O2A7XG4gICAgICAgIGxldCBjb2xvciA9ICcnO1xuICAgICAgICBsZXQgY29sb3JTaGFkb3c7XG4gICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgY29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5jb2xvcik7XG4gICAgICAgICAgY29sb3JTaGFkb3cgPSBjb2xvcjtcbiAgICAgICAgICBzdHlsZXMgKz0gYGNvbG9yOiR7Y29sb3J9O2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29sb3JTaGFkb3cgPSB0aGlzLnRoZW1lLmNvbmZpZy5jb2xvclNoYWRvdztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlcih0aGlzLmVsZXZhdGlvbiwgY29sb3JTaGFkb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9fSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJnIHx8IHRoaXMuY29sb3IpIHtcbiAgICAgIGNvbnN0IGNoYW5nZUtleSA9IHRoaXMuYmcgPyBbJ2JnJywgJ2JhY2tncm91bmQnLCB0aGlzLmJnXSA6IFsnw4TCuCcsICdjb2xvcicsIHRoaXMuY29sb3JdO1xuICAgICAgY29uc3QgY29sb3IgPSBjaGFuZ2VLZXlbMl07XG4gICAgICBrZXkgPSBgJHtjaGFuZ2VLZXlbMF19JHtjb2xvcn0ke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcblxuICAgICAgLyoqIENyZWF0ZSBzdHlsZSAqL1xuICAgICAgbmV3Q2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBseS0ke2tleX1gLCB7Jyc6ICgpID0+IHtcbiAgICAgICAgY29uc3QgX2NvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuYmcgfHwgdGhpcy5jb2xvcik7XG4gICAgICAgIGxldCBzdHlsZXMgPSBgJHtjaGFuZ2VLZXlbMV19OiR7X2NvbG9yfTtgO1xuICAgICAgICBpZiAodGhpcy5fcmFpc2VkU3RhdGUpIHtcbiAgICAgICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlcih0aGlzLmVsZXZhdGlvbiwgX2NvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgfX0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSA9IGByYWlzZWQke3RoaXMuX3JhaXNlZFN0YXRlfSR7dGhpcy5lbGV2YXRpb259YDtcbiAgICAgIG5ld0NsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgbHktJHtrZXl9YCwgeycnOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9yYWlzZWRTdGF0ZSkge1xuICAgICAgICAgIHJldHVybiBzaGFkb3dCdWlsZGVyKHRoaXMuZWxldmF0aW9uLCB0aGlzLnRoZW1lLmNvbmZpZy5jb2xvclNoYWRvdyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNoYWRvd0J1aWxkZXIoMCwgdGhpcy50aGVtZS5jb25maWcuY29sb3JTaGFkb3cpO1xuICAgICAgICB9XG4gICAgICB9fSk7XG4gICAgfVxuICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzc05hbWUsIHRoaXMuX2N1cnJlbnRDbGFzc05hbWUpO1xuICAgIHRoaXMuX2N1cnJlbnRDbGFzc05hbWUgPSBuZXdDbGFzc05hbWU7XG4gIH1cbiAgcHJpdmF0ZSBjb250cmFzdFN0eWxlKCkge1xuICAgIGNvbnN0IGNzc0JnID0gdGhpcy50aGVtZS5jb2xvck9mKHRoaXMuYmcpO1xuICAgIHRoaXMuX2NvbG9yID0gdGhpcy50aGVtZS5jb2xvck9mKGAke3RoaXMuYmd9OmNvbnRyYXN0YCk7XG4gICAgbGV0IHN0eWxlcyA9IGBiYWNrZ3JvdW5kOiR7Y3NzQmd9O2NvbG9yOiR7dGhpcy5fY29sb3J9O2A7XG4gICAgaWYgKHRoaXMuX3JhaXNlZFN0YXRlKSB7XG4gICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlcih0aGlzLmVsZXZhdGlvbiwgY3NzQmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBiZ0NvbG9yU3R5bGUoKSB7XG4gICAgY29uc3QgY3NzQmcgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5iZyk7XG4gICAgY29uc3QgY3NzQ29sb3IgPSB0aGlzLnRoZW1lLmNvbG9yT2YodGhpcy5jb2xvcik7XG4gICAgbGV0IHN0eWxlcyA9IGBiYWNrZ3JvdW5kOiR7Y3NzQmd9O2NvbG9yOiR7Y3NzQ29sb3J9O2A7XG4gICAgaWYgKHRoaXMuX3JhaXNlZFN0YXRlKSB7XG4gICAgICBzdHlsZXMgKz0gc2hhZG93QnVpbGRlcih0aGlzLmVsZXZhdGlvbiwgY3NzQmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTaGFkb3dTZXJ2aWNlIH0gZnJvbSAnLi9zaGFkb3cuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL2FseWxlLWNvbmZpZy1zZXJ2aWNlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJzpub3QoW3JhaXNlZF0pW25ld1JhaXNlZF0nIH0pXG5leHBvcnQgY2xhc3MgTHlOZXdSYWlzZWQge1xuICBlbGV2YXRpb24gPSAzO1xuICBwcml2YXRlIGN1cnJlbnRDbGFzc05hbWU6IHN0cmluZztcbiAgLyoqIERlZmF1bHQgcmFpc2VkICAqL1xuICBASW5wdXQoKVxuICBzZXQgbmV3UmFpc2VkKHZhbHVlOiBbbnVtYmVyLCBzdHJpbmddKSB7XG4gICAgdGhpcy5jdXJyZW50Q2xhc3NOYW1lID0gdGhpcy5zaGFkb3cuc2V0U2hhZG93KHRoaXMudGhlbWUsIHRoaXMuZWxlbWVudFJlZiwgdGhpcy5yZW5kZXJlciwgWyB2YWx1ZVswXSB8fCB0aGlzLmVsZXZhdGlvbiwgdmFsdWVbMV0gXSwgdGhpcy5jdXJyZW50Q2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBzaGFkb3c6IEx5U2hhZG93U2VydmljZVxuICApIHsgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlUaGVtZV0nLFxuICBwcm92aWRlcnM6IFtMeVRoZW1lMl0sXG4gIGV4cG9ydEFzOiAnbHlUaGVtZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlUaGVtZUNvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2x5VGhlbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIHNldCB0aGVtZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGx5VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhgdGhpcy50aGVtZS5jb25maWcubmFtZWAsIHRoaXMudGhlbWUuY29uZmlnLm5hbWUsIG5hbSk7XG4gICAgdGhpcy5fbHlUaGVtZSA9IG5hbTtcbiAgICB0aGlzLnRoZW1lLnNldFVwVGhlbWUobmFtZSk7XG4gIH1cbiAgZ2V0IGx5VGhlbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2x5VGhlbWU7XG4gIH1cblxuICBASW5wdXQoKSBzaGFyZWQ6IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc2V0Q29udGFpbmVyU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0Q29udGFpbmVyU3R5bGUoZWxlbWVudCwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgdGhlbWU6JHt0aGlzLnRoZW1lLmNvbmZpZy5uYW1lfWAsIHtcbiAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy50aGVtZS5jb25maWcuYmFja2dyb3VuZC5kZWZhdWx0fTtgICtcbiAgICAgICAgYGNvbG9yOiR7dGhpcy50aGVtZS5jb25maWcudGV4dC5kZWZhdWx0fTtgICtcbiAgICAgICAgYGZvbnQtZmFtaWx5OiR7dGhpcy50aGVtZS5jb25maWcudHlwb2dyYXBoeS5mb250RmFtaWx5fTtgXG4gICAgICApXG4gICAgfSk7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NuYW1lKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5QmdDb2xvckFuZFJhaXNlZCB9IGZyb20gJy4vYmctY29sb3ItYW5kLXJhaXNlZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTFlfR0xPQkFMX0NPTlRSQVNUIH0gZnJvbSAnLi9jb250cmFzdCc7XG5pbXBvcnQgeyBMeU5ld1JhaXNlZCB9IGZyb20gJy4vcmFpc2VkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVRoZW1lQ29udGFpbmVyIH0gZnJvbSAnLi90aGVtZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUaGVtZU1vZHVsZSB9IGZyb20gJy4vdGhlbWUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlCZ0NvbG9yQW5kUmFpc2VkLCBMeU5ld1JhaXNlZCwgTHlUaGVtZUNvbnRhaW5lcl0sXG4gIGV4cG9ydHM6IFtMeUJnQ29sb3JBbmRSYWlzZWQsIEx5TmV3UmFpc2VkLCBMeVRoZW1lQ29udGFpbmVyXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBMWV9HTE9CQUxfQ09OVFJBU1QsIHVzZVZhbHVlOiBmYWxzZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb25Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdGFibGUsIE9wdGlvbmFsLCBOZ01vZHVsZSwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5Q29udGFpbmVyIHtcbiAgcHJvdGVjdGVkIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbHktb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgfVxuICB9XG4gIGdldCBjb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgfVxufVxuXG4iLCJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEFwcGxpY2F0aW9uUmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG9tU2VydmljZSB7XG4gIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG4gIHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXJcbiAgKSB7IH1cblxuICBhdHRhY2g8VD4oX2hvc3RWaWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBjb21wb25lbnQ6IGFueSwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSBfaG9zdFZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlKTtcbiAgICAgIHZpZXdSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZjtcbiAgICAgIHZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2gocm9vdE5vZGUgPT4gdGhpcy5hZGRDaGlsZChyb290Tm9kZSkpO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQ6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5vdmVybGF5Q29udGFpbmVyLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG5cbiAgZ2V0RG9tRWxlbWVudEZyb21Db21wb25lbnRSZWYoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55Pik6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgZGVzdHJveVJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+LCBkZWxheTogbnVtYmVyKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmRldGFjaCgpO1xuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSwgZGVsYXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tU2VydmljZSB9IGZyb20gJy4vZG9tLnNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWShwYXJlbnRDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcikge1xuICByZXR1cm4gcGFyZW50Q29udGFpbmVyIHx8IG5ldyBMeU92ZXJsYXlDb250YWluZXIoKTtcbn1cblxuZXhwb3J0IGNvbnN0IExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIE92ZXJsYXlDb250YWluZXIgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogTHlPdmVybGF5Q29udGFpbmVyLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTHlPdmVybGF5Q29udGFpbmVyXV0sXG4gIHVzZUZhY3Rvcnk6IExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSX0ZBQ1RPUllcbn07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbW0RvbVNlcnZpY2UsIExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSXV1cbn0pXG5leHBvcnQgY2xhc3MgTHhEb21Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdGFibGUsIENoYW5nZURldGVjdG9yUmVmLCBOZ1pvbmUsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIsIE9uSW5pdCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIHBpcGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGVudW0gRm9jdXNTdGF0dXMge1xuICAvKiptb3VzZSBhbmQvb3IgdG91Y2gqL1xuICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICAvKioga2V5Ym9hcmQgYW5kL29yIHByb2dyYW0qL1xuICBLRVlCT0FSRCA9ICdrZXlib2FyZCcsXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseUZvY3VzU3RhdGVdJyxcbiAgZXhwb3J0QXM6ICdseUZvY3VzU3RhdGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHN0YXRlOiBGb2N1c1N0YXR1cztcbiAgc3RhdGVNYXAgPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogRWxlbWVudDtcbiAgcHJpdmF0ZSBfZXZlbnRIYW5kbGVycyA9IG5ldyBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgX3N0YXRlU3ViamVjdCA9IG5ldyBTdWJqZWN0PEZvY3VzU3RhdHVzPigpO1xuICBfc3RhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgQE91dHB1dCgpIGx5Rm9jdXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzU3RhdHVzPigpO1xuICBwcml2YXRlIF9ldmVudE9wdGlvbnMgPSB7cGFzc2l2ZTogdHJ1ZX0gYXMgYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzXG4gICAgICAuc2V0KCdmb2N1cycsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ2JsdXInLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCd0b3VjaHN0YXJ0JywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnbW91c2Vkb3duJywgdGhpcy5vbi5iaW5kKHRoaXMpKTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY29uc3Qgb24gPSAoZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlTWFwLnNldChldmVudC50eXBlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBvYjogT2JzZXJ2YWJsZTxGb2N1c1N0YXR1cz4gPSB0aGlzLl9zdGF0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbiA9IG9iXG4gICAgICAvLyAuZGVib3VuY2VUaW1lKDExMSlcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTExKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZTogRm9jdXNTdGF0dXMpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gICAgICAgIHRoaXMubHlGb2N1c0NoYW5nZS5lbWl0KGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3RhdGUoKSB7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnYmx1cicpKSB7XG4gICAgICB0aGlzLnN0YXRlTWFwLmNsZWFyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygnbW91c2Vkb3duJykgfHwgdGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykgJiYgdGhpcy5zdGF0ZU1hcC5oYXMoJ3RvdWNoc3RhcnQnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5ERUZBVUxUO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykpIHtcbiAgICAgIHN0YXRlID0gRm9jdXNTdGF0dXMuS0VZQk9BUkQ7XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlU3ViamVjdC5uZXh0KHN0YXRlKTtcbiAgfVxuXG4gIG9uKGV2ZW50OiBGb2N1c0V2ZW50IHwgVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnN0YXRlTWFwLnNldChldmVudC50eXBlLCB0cnVlKTtcbiAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRvZ2dsZUNsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nLCBzaG91bGRTZXQ6IGJvb2xlYW4pID0+IHNob3VsZFNldCA/IHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkgOiB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIHRvZ2dsZUNsYXNzKGBseS1mb2N1c2VkYCwgISFzdGF0ZSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gRm9jdXNTdGF0dXMpIHtcbiAgICAgIGlmIChGb2N1c1N0YXR1cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IEZvY3VzU3RhdHVzW2tleV07XG4gICAgICAgIHRvZ2dsZUNsYXNzKGBseS0ke2NsYXNzTmFtZX0tZm9jdXNlZGAsIHN0YXRlID09PSBjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KG51bGwpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUZvY3VzU3RhdGUgfSBmcm9tICcuL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlGb2N1c1N0YXRlXSxcbiAgZXhwb3J0czogW0x5Rm9jdXNTdGF0ZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGNvbnN0IEFVSV9WRVJTSU9OID0gJzEuNy4wLWJldGEuNDYxa3EnO1xuZXhwb3J0IGNvbnN0IEFVSV9MQVNUX1VQREFURSA9ICcyMDE4LTA4LTA0VDA2OjI2OjM1Ljk2OFonO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhBTU1FUl9HRVNUVVJFX0NPTkZJRywgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi4vdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhhbW1lck9wdGlvbnMsIEhhbW1lckluc3RhbmNlIH0gZnJvbSAnLi9nZXN0dXJlLWFubm90YXRpb25zJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuXG5leHBvcnQgY29uc3QgTFlfSEFNTUVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyT3B0aW9ucz4oJ0xZX0hBTU1FUl9PUFRJT05TJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeUhhbW1lckdlc3R1cmVDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgcHJpdmF0ZSBfaGFtbWVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyAod2luZG93IGFzIGFueSkuSGFtbWVyIDogbnVsbDtcbiAgZXZlbnRzOiBzdHJpbmdbXSA9IHRoaXMuX2hhbW1lciA/IFtcbiAgICAnc2xpZGUnLFxuICAgICdzbGlkZXN0YXJ0JyxcbiAgICAnc2xpZGVlbmQnLFxuICAgICdzbGlkZXJpZ2h0JyxcbiAgICAnc2xpZGVsZWZ0J1xuICBdIDogW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfSEFNTUVSX09QVElPTlMpIHByaXZhdGUgX2hhbW1lck9wdGlvbnM6IEhhbW1lck9wdGlvbnMsXG4gICAgLy8gcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBidWlsZEhhbW1lcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhhbW1lckluc3RhbmNlIHtcbiAgICAvLyBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgLy8gICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2staGFtbWVyLWNzcycsIHtcbiAgICAvLyAgICAgJyc6ICgpID0+IChcbiAgICAvLyAgICAgICBgdXNlci1zZWxlY3Q6IG5vbmU7YCArXG4gICAgLy8gICAgICAgYC13ZWJraXQtdXNlci1kcmFnOiBub25lO2AgK1xuICAgIC8vICAgICAgIGAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7YFxuICAgIC8vICAgICApXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgLy8gfVxuICAgIGNvbnN0IG1jID0gbmV3IHRoaXMuX2hhbW1lcihlbGVtZW50LCB0aGlzLl9oYW1tZXJPcHRpb25zIHx8IHVuZGVmaW5lZCk7XG5cbiAgICBjb25zdCBwYW4gPSBuZXcgdGhpcy5faGFtbWVyLlBhbigpO1xuICAgIGNvbnN0IHN3aXBlID0gbmV3IHRoaXMuX2hhbW1lci5Td2lwZSgpO1xuICAgIGNvbnN0IHNsaWRlID0gdGhpcy5fY3JlYXRlUmVjb2duaXplcihwYW4sIHtldmVudDogJ3NsaWRlJywgdGhyZXNob2xkOiAwfSwgc3dpcGUpO1xuXG4gICAgc2xpZGUucmVjb2duaXplV2l0aChzd2lwZSk7XG4gICAgcGFuLnJlY29nbml6ZVdpdGgoc3dpcGUpO1xuXG4gICAgLy8gQWRkIGN1c3RvbWl6ZWQgZ2VzdHVyZXMgdG8gSGFtbWVyIG1hbmFnZXJcbiAgICBtYy5hZGQoW3N3aXBlLCBwYW4sIHNsaWRlXSk7XG4gICAgcmV0dXJuIG1jO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBuZXcgcmVjb2duaXplciwgd2l0aG91dCBhZmZlY3RpbmcgdGhlIGRlZmF1bHQgcmVjb2duaXplcnMgb2YgSGFtbWVySlMgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUmVjb2duaXplcihiYXNlOiBhbnksIG9wdGlvbnM6IGFueSwgLi4uaW5oZXJpdGFuY2VzOiBhbnlbXSkge1xuICAgIGNvbnN0IHJlY29nbml6ZXIgPSBuZXcgKGJhc2UuY29uc3RydWN0b3IpKG9wdGlvbnMpO1xuXG4gICAgaW5oZXJpdGFuY2VzLnB1c2goYmFzZSk7XG4gICAgaW5oZXJpdGFuY2VzLmZvckVhY2goaXRlbSA9PiByZWNvZ25pemVyLnJlY29nbml6ZVdpdGgoaXRlbSkpO1xuXG4gICAgcmV0dXJuIHJlY29nbml6ZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFNlbGYsIEhvc3QsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVRoZW1lQ29udGFpbmVyIH0gZnJvbSAnLi90aGVtZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBUSEVNRTJfUFJPVklERVJfRkFDVE9SWShcbi8vICAgcGFyZW50UmVnaXN0cnk6IEx5VGhlbWUyLFxuLy8gICBjb3JlVGhlbWU6IENvcmVUaGVtZSkge1xuLy8gICByZXR1cm4gcGFyZW50UmVnaXN0cnkgfHwgbmV3IEx5VGhlbWUyKGNvcmVUaGVtZSk7XG4vLyB9XG5cbi8vIC8qKiBAZG9jcy1wcml2YXRlICovXG4vLyBleHBvcnQgY29uc3QgVEhFTUUyX1BST1ZJREVSID0ge1xuLy8gICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIEx5VGhlbWUyIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4vLyAgIHByb3ZpZGU6IEx5VGhlbWUyLFxuLy8gICBkZXBzOiBbXG4vLyAgICAgW25ldyBPcHRpb25hbCgpLCBMeVRoZW1lMl0sXG4vLyAgICAgW0NvcmVUaGVtZV1cbi8vICAgXSxcbi8vICAgdXNlRmFjdG9yeTogVEhFTUUyX1BST1ZJREVSX0ZBQ1RPUlksXG4vLyB9O1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWVNb2R1bGUge1xuICBzdGF0aWMgc2V0VGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEx5VGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTHlUaGVtZTIsXG4gICAgICAgIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6IHRoZW1lTmFtZSB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi4vdGhlbWUvY29yZS10aGVtZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNvcmVTdHlsZXMge1xuICBjbGFzc2VzID0ge1xuICAgIC8qKiBQb3NpdGlvbiBhYnNvbHV0ZSAqL1xuICAgIEZpbGw6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnay1hYnNvbHV0ZScsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgcG9zaXRpb246IGFic29sdXRlO2AgK1xuICAgICAgICAgIGB0b3A6IDA7YCArXG4gICAgICAgICAgYGJvdHRvbTogMDtgICtcbiAgICAgICAgICBgbGVmdDogMDtgICtcbiAgICAgICAgICBgcmlnaHQ6IDA7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKSxcbiAgICBWaXN1YWxseUhpZGRlbjogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdrLXZpc3VhbGx5LWhpZGRlbicsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgYm9yZGVyOiAwO2AgK1xuICAgICAgICAgIGBjbGlwOiByZWN0KDAgMCAwIDApO2AgK1xuICAgICAgICAgIGBoZWlnaHQ6IDFweDtgICtcbiAgICAgICAgICBgbWFyZ2luOiAtMXB4O2AgK1xuICAgICAgICAgIGBvdmVyZmxvdzogaGlkZGVuO2AgK1xuICAgICAgICAgIGBwYWRkaW5nOiAwO2AgK1xuICAgICAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICAgICAgYHdpZHRoOiAxcHg7YCArXG4gICAgICAgICAgYG91dGxpbmU6IDA7YCArXG4gICAgICAgICAgYC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtgICtcbiAgICAgICAgICBgLW1vei1hcHBlYXJhbmNlOiBub25lO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSkgeyB9XG59XG4iLCJleHBvcnQgY2xhc3MgVW5kZWZpbmVkIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgVHlwb2dyYXBoeUNvbmZpZyB7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIGZvbnRXZWlnaHQ/OiBudW1iZXI7XG4gIGxldHRlclNwYWNpbmc/OiBudW1iZXI7XG4gIHRleHRUcmFuc2Zvcm0/OiAndXBwZXJjYXNlJyB8ICdjYXBpdGFsaXplJyB8ICdsb3dlcmNhc2UnO1xuICBndXR0ZXJUb3A/OiBudW1iZXI7XG4gIGd1dHRlckJvdHRvbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBweFRvUmVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy50eXBvZ3JhcGh5LmZvbnRTaXplIC8gMTQ7XG4gICAgcmV0dXJuIGAke3ZhbHVlIC8gdGhpcy50eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSAqIHNpemV9cmVtYDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdCQUErQixRQUFRO0lBQ3JDLHVCQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsdUJBQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5Qyx1QkFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLHVCQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUN2RCxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQ3pDOzs7Ozs7QUNORCxBQUNBLHVCQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFFdkIsdUJBQU0scUJBQXFCLEdBQUcsR0FBRyxDQUFDO0FBQ2xDLHVCQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQztBQUN0Qyx1QkFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUM7QUFDeEMsdUJBQWEsT0FBTyxHQUFHO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFB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