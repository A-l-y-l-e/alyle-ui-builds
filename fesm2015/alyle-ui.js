import * as _chroma from 'chroma-js';
import { InjectionToken, Injectable, Optional, Inject, RendererFactory2, ViewEncapsulation, Directive, ElementRef, Input, NgModule, ComponentFactoryResolver, Component, HostListener, TemplateRef, ApplicationRef, Injector, isDevMode, ViewContainerRef, ChangeDetectorRef, NgZone, Renderer2, EventEmitter, Output, defineInjectable, inject, INJECTOR } from '@angular/core';
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
    const r = parseInt(hexcolor.substr(0, 2), 16);
    /** @type {?} */
    const g = parseInt(hexcolor.substr(2, 2), 16);
    /** @type {?} */
    const b = parseInt(hexcolor.substr(4, 2), 16);
    /** @type {?} */
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const chroma = _chroma;
/** @type {?} */
const shadowKeyUmbraOpacity = 0.2;
/** @type {?} */
const shadowKeyPenumbraOpacity = 0.14;
/** @type {?} */
const shadowAmbientShadowOpacity = 0.12;
/** @type {?} */
const Shadows = [
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
    /** @type {?} */
    const Color = chroma(color);
    /** @type {?} */
    const colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    /** @type {?} */
    const e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return `box-shadow:${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px ${colors[0]},${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px ${colors[1]},${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px ${colors[2]};`;
}
/**
 * @param {?} elevation
 * @param {?=} color
 * @return {?}
 */
function shadowBuilder(elevation, color) {
    /** @type {?} */
    const Color = chroma(color || '#000').darken().saturate(2);
    /** @type {?} */
    const colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    /** @type {?} */
    const e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px ${colors[0]},${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px ${colors[1]},${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px ${colors[2]};`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const THEME_VARIABLES = new InjectionToken('ly.theme.variables');
/** @type {?} */
const IS_CORE_THEME = new InjectionToken('ly.is.root');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const hasV8BreakIterator = (typeof (Intl) !== 'undefined' && (/** @type {?} */ (Intl)).v8BreakIterator);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
let supportsPassive;
/**
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassive === void 0) {
        try {
            /** @type {?} */
            const opts = Object.defineProperty({}, 'passive', {
                get: () => {
                    supportsPassive = true;
                }
            });
            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
        }
        catch (e) { }
    }
    return supportsPassive;
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
const LY_THEME_GLOBAL_VARIABLES = new InjectionToken('ly.theme.global.variables');
/** @type {?} */
const LY_THEME = new InjectionToken('ly_theme_config');
/** @type {?} */
const LY_THEME_NAME = new InjectionToken('ly.theme.name');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyStyleUtils {
    /**
     * @param {?} value
     * @return {?}
     */
    pxToRem(value) {
        /** @type {?} */
        const size = this.typography.fontSize / 14;
        return `${value / this.typography.htmlFontSize * size}rem`;
    }
    /**
     * @param {?} value
     * @param {?=} optional
     * @return {?}
     */
    colorOf(value, optional) {
        return get(this, value, optional);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getBreakpoint(key) {
        return `@media ${this.breakpoints[key] || key}`;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    getDirection(val) {
        if (val === DirAlias.end) {
            return this.direction === 'rtl' ? 'left' : 'right';
        }
        else {
            return this.direction === 'rtl' ? 'right' : 'left';
        }
    }
}
/** @enum {string} */
var Dir = {
    rtl: 'rtl',
    ltr: 'ltr',
};
/** @enum {string} */
var DirAlias = {
    start: 'start',
    end: 'end',
};
/** @enum {string} */
var DirPosition = {
    left: 'left',
    right: 'right',
};
/**
 * get color of object
 * @param {?} obj object
 * @param {?} path path
 * @param {?} optional get optional value, if not exist return default if not is string
 * @return {?}
 */
function get(obj, path, optional) {
    /** @type {?} */
    const _path = path instanceof Array ? path : path.split(':');
    for (let i = 0; i < _path.length; i++) {
        /** @type {?} */
        const posibleOb = obj[_path[i]];
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
        const values = str.split(/\s/g);
        for (let index = 0; index < values.length; index++) {
            /** @type {?} */
            const valItem = values[index].split(/\@/g);
            /** @type {?} */
            const value = valItem.shift();
            /** @type {?} */
            const len = valItem.length;
            if (len) {
                for (let j = 0; j < len; j++) {
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
function mergeDeep(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    /** @type {?} */
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CoreTheme {
    /**
     * @param {?} themeConfig
     * @param {?} globalVariables
     * @param {?} rendererFactory
     * @param {?} _document
     */
    constructor(themeConfig, globalVariables, rendererFactory, _document) {
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
            const nodes = _document.body.querySelectorAll('ly-s-c');
            if (nodes.length) {
                for (let index = 0; index < nodes.length; index++) {
                    /** @type {?} */
                    const element = nodes.item(index);
                    (/** @type {?} */ (_document.body)).removeChild(element);
                }
            }
        }
        this.firstElement = _document.body.firstChild;
        if (Array.isArray(themeConfig)) {
            themeConfig.forEach(item => {
                if (globalVariables) {
                    mergeDeep(item, globalVariables);
                }
                this.add(/** @type {?} */ (item));
                this.themes.add(item.name);
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
            },] }
];
/** @nocollapse */
CoreTheme.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_GLOBAL_VARIABLES,] }] },
    { type: RendererFactory2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ CoreTheme.ngInjectableDef = defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(inject(LY_THEME, 8), inject(LY_THEME_GLOBAL_VARIABLES, 8), inject(RendererFactory2), inject(DOCUMENT)); }, token: CoreTheme, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultStyles = {
    '@global': {
        '*, *:after, *:before': {
            '-webkit-box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            'box-sizing': 'border-box'
        }
    }
};
/** @type {?} */
const REF_REG_EXP = /\{([\w-]+)\}/g;
/** @enum {number} */
var TypeStyle = {
    Multiple: 0,
    OnlyOne: 1,
};
TypeStyle[TypeStyle.Multiple] = 'Multiple';
TypeStyle[TypeStyle.OnlyOne] = 'OnlyOne';
/** @type {?} */
const STYLE_MAP5 = new Map();
/** @type {?} */
const CLASSES_MAP = {};
/** @type {?} */
const STYLE_KEYS_MAP = {};
/** @type {?} */
let nextClassId = 0;
class StylesInDocument {
    constructor() {
        this.styles = {};
        this.styleContainers = new Map();
    }
}
StylesInDocument.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
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
        this._elementsMap = new Map();
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
    }
    /**
     * Add a new dynamic style, use only within \@Input()
     * @param {?} id Unique id
     * @param {?} style Styles
     * @param {?=} el Element
     * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
     * @param {?=} priority
     * @return {?}
     */
    addStyle(id, style, el, instance, priority) {
        /** @type {?} */
        const newClass = this.addCss(id, /** @type {?} */ (style), priority);
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
        if (newClass === oldClass) {
            return newClass;
        }
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
        if (nam !== this.config.name) {
            this.config = this.core.get(nam);
            this.elements.forEach((_, key) => {
                /** @type {?} */
                const styleData = STYLE_MAP5.get(key);
                if (styleData.requireUpdate) {
                    this._createStyleContent2(styleData.styles, key, styleData.priority, styleData.type, true);
                }
            });
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
        /** @type {?} */
        const newId = `~>${id}`;
        return /** @type {?} */ (this._createStyleContent2(/** @type {?} */ (css), newId, priority, TypeStyle.OnlyOne, false, media));
    }
    /**
     * @return {?}
     */
    _addDefaultStyles() {
        this.addStyleSheet(defaultStyles);
    }
    /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id deprecated, unique id for style group
     * @param {?=} priority priority for style
     * @return {?}
     */
    addStyleSheet(styles, id, priority) {
        if (isDevMode()) {
            if ((void 0 === priority && typeof id === 'string') || (void 0 !== priority && typeof id === 'string')) {
                console.warn(`the value \`${id}\` is no longer necessary for addStyleSheet, this will be an error in the next release.`);
            }
        }
        return this._createStyleContent2(styles, /** @type {?} */ (id), priority, TypeStyle.Multiple);
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
        /** @type {?} */
        const newId = type === TypeStyle.OnlyOne ? /** @type {?} */ (id) : styles;
        /** @type {?} */
        let isNewStyle;
        if (!STYLE_MAP5.has(newId)) {
            isNewStyle = true;
            STYLE_MAP5.set(newId, {
                priority: type === TypeStyle.OnlyOne ? priority : priority === void 0 && typeof id === 'number' ? /** @type {?} */ (id) : priority,
                styles,
                type,
                css: {}
            });
        }
        /** @type {?} */
        const styleMap = STYLE_MAP5.get(newId);
        /** @type {?} */
        const themeName = this.initialTheme;
        /** @type {?} */
        const isCreated = isNewStyle || !(styleMap.classes || styleMap[themeName]);
        if (isCreated || forChangeTheme) {
            /** *
             * create new style for new theme
              @type {?} */
            let css;
            if (typeof styles === 'function') {
                styleMap.requireUpdate = true;
                css = groupStyleToString(styleMap, styles(this.config), themeName, null, type, this.config, media);
                if (!forChangeTheme) {
                    styleMap.css[themeName] = css;
                }
            }
            else {
                /** create a new id for style that does not <-<require>-> changes */
                css = groupStyleToString(styleMap, styles, themeName, /** @type {?} */ (newId), type, this.config, media);
                styleMap.css = css;
            }
            if (!this.elements.has(newId)) {
                this.elements.set(newId, this._createElementStyle(css));
            }
            /** @type {?} */
            const el = this.elements.get(newId);
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
                const _css = styleMap.css[themeName] || styleMap.css;
                this.elements.set(newId, this._createElementStyle(_css));
                this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), this.elements.get(newId));
            }
        }
        return styleMap.classes || styleMap[themeName];
    }
    /**
     * @param {?=} priority
     * @return {?}
     */
    _createStyleContainer(priority = 0) {
        const { styleContainers } = this.stylesInDocument;
        if (!styleContainers.has(priority)) {
            /** @type {?} */
            const el = this.core.renderer.createElement(`ly-s-c`);
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
        /** @type {?} */
        const refChild = this.findNode(priority);
        this.core.renderer.insertBefore(this._document.body, styleContainers.get(priority), refChild);
        return styleContainers.get(priority);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    findNode(index) {
        const { styleContainers } = this.stylesInDocument;
        /** @type {?} */
        const keys = (Array.from(styleContainers.keys())).sort();
        /** @type {?} */
        const key = keys.find(_ => index < _);
        return (key !== undefined && styleContainers.get(key)) || this.core.firstElement;
    }
    /**
     * @param {?} css
     * @return {?}
     */
    _createElementStyle(css) {
        /** @type {?} */
        const styleElement = this.core.renderer.createElement('style');
        /** @type {?} */
        const styleText = this.core.renderer.createText(css);
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
    { type: Injectable }
];
/** @nocollapse */
LyTheme2.ctorParameters = () => [
    { type: StylesInDocument },
    { type: CoreTheme },
    { type: undefined, decorators: [{ type: Inject, args: [LY_THEME_NAME,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/**
 * @param {?} styleMap
 * @param {?} styles
 * @param {?} themeName
 * @param {?} id
 * @param {?} typeStyle
 * @param {?} themeVariables
 * @param {?=} media
 * @return {?}
 */
function groupStyleToString(styleMap, styles, themeName, id, typeStyle, themeVariables, media) {
    if (typeStyle === TypeStyle.OnlyOne) {
        /** @type {?} */
        const className = styleMap.requireUpdate
            ? styleMap[themeName] || (styleMap[themeName] = createNextClassId())
            : styleMap.classes
                ? styleMap.classes
                : styleMap.classes = createNextClassId();
        if (typeof styles === 'string') {
            /** @type {?} */
            const css = `.${className}{${styles}}`;
            return media ? toMedia(css, media) : css;
        }
        else {
            /** @type {?} */
            const rules = styleToString(id, styles, themeVariables, /** @type {?} */ (className));
            return rules;
        }
    }
    /** @type {?} */
    const classesMap = styleMap[themeName] || (styleMap[themeName] = {});
    /** @type {?} */
    let content = '';
    for (const key in styles) {
        if (styles.hasOwnProperty(key)) {
            /** @type {?} */
            const currentClassName = key in classesMap
                ? classesMap[key]
                : classesMap[key] = isDevMode() ? toClassNameValid(`i---${key}-${createNextClassId()}`) : createNextClassId();
            /** @type {?} */
            const value = styles[key];
            if (typeof value === 'object') {
                /** @type {?} */
                const style = styleToString(key, /** @type {?} */ (value), themeVariables, currentClassName);
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
    return str.replace(REF_REG_EXP, (match, token) => {
        return `.${data[token]}`;
    });
}
/**
 * {color:'red'} to .className{color: red}
 * @param {?} key
 * @param {?} ob
 * @param {?} themeVariables
 * @param {?} currentKey
 * @param {?=} parentKey
 * @return {?}
 */
function styleToString(key, ob, themeVariables, currentKey, parentKey) {
    /** @type {?} */
    let content = '';
    /** @type {?} */
    let subContent = '';
    /** @type {?} */
    let keyAndValue = '';
    /** @type {?} */
    let newKey;
    if (parentKey) {
        if (currentKey.indexOf('&') !== -1) {
            newKey = currentKey.replace(/&/g, parentKey);
        }
        else if (currentKey.indexOf('@media') === 0) {
            newKey = `${currentKey}`;
        }
        else {
            newKey = `${parentKey} ${currentKey}`;
        }
    }
    else if (key === '@global') {
        newKey = key;
    }
    else {
        newKey = `.${currentKey}`;
    }
    for (const styleKey in ob) {
        if (ob.hasOwnProperty(styleKey)) {
            /** @type {?} */
            const element = ob[styleKey];
            if (typeof element === 'object') {
                subContent += styleToString(key, /** @type {?} */ (element), themeVariables, styleKey, newKey);
            }
            else {
                /** @type {?} */
                let newStyleKey = toHyphenCaseCache(styleKey);
                if (newStyleKey.indexOf(DirAlias.start) !== -1) {
                    newStyleKey = dirCache(newStyleKey, themeVariables, DirAlias.start);
                }
                else if (newStyleKey.indexOf(DirAlias.end) !== -1) {
                    newStyleKey = dirCache(newStyleKey, themeVariables, DirAlias.end);
                }
                keyAndValue += `${newStyleKey}:${element};`;
            }
        }
    }
    if (keyAndValue) {
        if (newKey.indexOf('@media') === 0) {
            content += `${newKey}`;
            keyAndValue = `${parentKey}{${keyAndValue}}`;
        }
        else if (parentKey && parentKey === '@global') {
            content += `${currentKey}`;
        }
        else {
            content += `${newKey}`;
        }
        content += `{${keyAndValue}}`;
    }
    return content + subContent;
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
    /** @type {?} */
    const s = str.replace(/^[0-9]|[^\w\-]/g, _ => {
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
/** @type {?} */
const STYLE_KEYS_DIRECTIONS_MAP = {};
/**
 * @param {?} val
 * @param {?} themeVariables
 * @param {?} dirAlias
 * @return {?}
 */
function dirCache(val, themeVariables, dirAlias) {
    /** @type {?} */
    const newKey = themeVariables.direction + val;
    return newKey in STYLE_KEYS_DIRECTIONS_MAP
        ? STYLE_KEYS_DIRECTIONS_MAP[newKey]
        : STYLE_KEYS_DIRECTIONS_MAP[newKey] = val.replace(dirAlias, themeVariables.getDirection(dirAlias));
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
    return `@media ${media}{${css}}`;
}
/**
 * @return {?}
 */
function createNextClassId() {
    return `i${(nextClassId++).toString(36)}`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            },] }
];
/** @nocollapse */
NgTranscludeDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
NgTranscludeDirective.propDecorators = {
    ngTransclude: [{ type: Input }]
};
class NgTranscludeModule {
}
NgTranscludeModule.decorators = [
    { type: NgModule, args: [{
                exports: [NgTranscludeDirective],
                declarations: [NgTranscludeDirective]
            },] }
];
/**
 * @ignore
 * @param {?} element
 * @return {?}
 */
function getNativeElement(element) {
    return element instanceof ElementRef ? element.nativeElement : element;
}

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
    let docElem;
    /** @type {?} */
    let win;
    /** @type {?} */
    let box = { top: 0, left: 0 };
    /** @type {?} */
    const doc = elem && elem.ownerDocument;
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
    return value != null && `${value}` !== 'false';
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
const STYLE_PRIORITY = -1;
/** @type {?} */
const DEFAULT_VALUE = '';
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
        /** @type {?} */
        const __bg = this.bg;
        /** @type {?} */
        const __color = this.color;
        /** @type {?} */
        const __raised = this.raised;
        /** @type {?} */
        const __elevation = this.elevation;
        /** @type {?} */
        const __disabled = this.disabled;
        /** @type {?} */
        const __outlined = this.outlined;
        /** @type {?} */
        const __shadowColor = this.shadowColor;
        /** @type {?} */
        const __isContrast = this._isContrast = this._autoContrast && !__color || __color === 'auto';
        /** @type {?} */
        const newKey = `common----:${__bg || DEFAULT_VALUE}·${__color || DEFAULT_VALUE}·${__raised || DEFAULT_VALUE}·${__elevation || DEFAULT_VALUE}·${__disabled || DEFAULT_VALUE}·${__outlined || DEFAULT_VALUE}·${__shadowColor || DEFAULT_VALUE}·${__isContrast || DEFAULT_VALUE}`;
        this._className = this.theme.addStyle(newKey, (theme) => {
            /** @type {?} */
            const style = {};
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
                        style.color = theme.colorOf(`${__bg}:contrast`);
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
                    const backgroundColorCss = style.background !== __bg && theme.colorOf(__bg || 'background:primary', 'shadow');
                    /** @type {?} */
                    const shadowColor = (__shadowColor && theme.colorOf(__shadowColor)) || backgroundColorCss || style.background || style.color || theme.shadow;
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
            ly-card,
            ly-toolbar,
            ly-checkbox
            `
            },] }
];
/** @nocollapse */
LyCommon.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef }
];
LyCommon.propDecorators = {
    bg: [{ type: Input }],
    color: [{ type: Input }],
    raised: [{ type: Input }],
    disabled: [{ type: Input }],
    outlined: [{ type: Input }],
    elevation: [{ type: Input }],
    shadowColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            },] }
];
/** @nocollapse */
LyWithClass.ctorParameters = () => [
    { type: ElementRef }
];
LyWithClass.propDecorators = {
    withClass: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyCommonModule {
}
LyCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LyCommon, LyWithClass],
                exports: [LyCommon, LyWithClass]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const LY_COMMON_STYLES = {
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
class LyCoreStyles {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(LY_COMMON_STYLES);
    }
}
LyCoreStyles.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LyCoreStyles.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyCoreStyles.ngInjectableDef = defineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(inject(LyTheme2)); }, token: LyCoreStyles, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const styles = (theme) => ({
    overlayBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: theme.zIndex.overlay
    }
});
class WindowScrollService {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        if (Platform.isBrowser) {
            this.scroll$ = fromEvent(window, 'scroll').pipe(auditTime(200), map(() => {
                return window.scrollY || this.document.documentElement.scrollTop;
            }), share());
        }
        else {
            this.scroll$ = empty();
        }
    }
}
WindowScrollService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WindowScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ WindowScrollService.ngInjectableDef = defineInjectable({ factory: function WindowScrollService_Factory() { return new WindowScrollService(inject(DOCUMENT)); }, token: WindowScrollService, providedIn: "root" });
class LyOverlayContainer {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this._classes = this.theme.addStyleSheet(styles);
        this._items = new Set();
        if (Platform.isBrowser) {
            /** @type {?} */
            const container = document.createElement('ly-overlay-container');
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
    /**
     * Add instance
     * @ignore
     * @param {?} item
     * @return {?}
     */
    _add(item) {
        this._items.add(item);
        this.containerElement.appendChild(item);
        this._update();
    }
    /**
     * Remove instance
     * @ignore
     * @param {?} item
     * @return {?}
     */
    _remove(item) {
        this.containerElement.removeChild(item);
        this._items.delete(item);
        this._update();
    }
    /**
     * Update styles for overlay container
     * @ignore
     * @return {?}
     */
    _update() {
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
    }
}
LyOverlayContainer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyOverlayContainer.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyOverlayContainer.ngInjectableDef = defineInjectable({ factory: function LyOverlayContainer_Factory() { return new LyOverlayContainer(inject(LyTheme2)); }, token: LyOverlayContainer, providedIn: "root" });
class LyOverlayBackdrop {
    /**
     * @param {?} el
     * @param {?} _overlayConfig
     * @param {?} commonStyles
     */
    constructor(el, _overlayConfig, commonStyles) {
        this.el = el;
        this._overlayConfig = _overlayConfig;
        this.el.nativeElement.classList.add(commonStyles.classes.fill);
    }
    /**
     * @return {?}
     */
    onclick() {
        this._overlayConfig.fnDestroy();
    }
}
LyOverlayBackdrop.decorators = [
    { type: Component, args: [{
                selector: 'ly-overlay-backdrop',
                template: ``
            }] }
];
/** @nocollapse */
LyOverlayBackdrop.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: ['overlayConfig',] }] },
    { type: LyCoreStyles }
];
LyOverlayBackdrop.propDecorators = {
    onclick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        /** @type {?} */
        const viewRef = _hostViewContainerRef.createEmbeddedView(template);
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
                this._viewContainerRef.remove();
            }
        }, delay);
    }
}
DomService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DomService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: LyOverlayContainer }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LxDomModule {
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
class LyFocusStateDeprecated {
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
            /** @type {?} */
            const element = elementRef.nativeElement;
            this.setTriggerElement(element);
            /** @type {?} */
            const ob = this._stateSubject.asObservable();
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
        /** @type {?} */
        let state;
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
        /** @type {?} */
        const element = this._containerElement;
        /** @type {?} */
        const state = this.state;
        /** @type {?} */
        const toggleClass = (className, shouldSet) => shouldSet ? this._renderer.addClass(element, className) : this._renderer.removeClass(element, className);
        toggleClass(`ly-focused`, !!state);
        for (const key in FocusStatus) {
            if (FocusStatus.hasOwnProperty(key)) {
                /** @type {?} */
                const className = FocusStatus[key];
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
LyFocusStateDeprecated.decorators = [
    { type: Directive, args: [{
                selector: '[lyFocusState]',
                exportAs: 'lyFocusState'
            },] }
];
/** @nocollapse */
LyFocusStateDeprecated.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
LyFocusStateDeprecated.propDecorators = {
    lyFocusChange: [{ type: Output }]
};
class LyFocusState {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this._elementMap = new Map();
        this._count = 0;
    }
    /**
     * @param {?} element
     * @param {?=} keyElement
     * @return {?}
     */
    listen(element, keyElement) {
        if (!Platform.isBrowser) {
            // return null if it is not browser platform
            return null;
        }
        /** @type {?} */
        const nativeElement = getNativeElement(element);
        /** @type {?} */
        const key = keyElement && getNativeElement(keyElement) || nativeElement;
        if (this._elementMap.has(key)) {
            return this._elementMap.get(key).subject.asObservable();
        }
        /** @type {?} */
        const focusState = {
            unlisten: null,
            subject: new Subject()
        };
        this._incrementCount();
        /** @type {?} */
        const focusListener = (event) => this._on(event, focusState.subject);
        /** @type {?} */
        const blurListener = (event) => this._on(event, focusState.subject);
        focusState.unlisten = () => {
            nativeElement.removeEventListener('focus', focusListener, true);
            nativeElement.removeEventListener('blur', blurListener, true);
        };
        this._elementMap.set(key, focusState);
        this._ngZone.runOutsideAngular(() => {
            nativeElement.addEventListener('focus', focusListener, true);
            nativeElement.addEventListener('blur', blurListener, true);
        });
        return focusState.subject.asObservable();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    unlisten(element) {
        /** @type {?} */
        const focusStateInfo = this._elementMap.get(getNativeElement(element));
        if (focusStateInfo) {
            focusStateInfo.unlisten();
            this._decrementCount();
        }
    }
    /**
     * @param {?} event
     * @param {?} subject
     * @return {?}
     */
    _on(event, subject) {
        this._ngZone.run(() => subject.next({
            event,
            by: this._currentEvent || 'keyboard'
        }));
    }
    /**
     * @return {?}
     */
    _addGlobalListeners() {
        if (!Platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const eventListenerOptions = supportsPassiveEventListeners
            ? {
                passive: true,
                capture: true
            } : false;
        /** @type {?} */
        const documentKeydownListener = () => this._ngZone.runOutsideAngular(() => this._currentEvent = 'keyboard');
        /** @type {?} */
        const documentMousedownListener = () => this._ngZone.runOutsideAngular(() => this._currentEvent = 'mouse');
        this._ngZone.runOutsideAngular(() => {
            document.addEventListener('keydown', documentKeydownListener, eventListenerOptions);
            document.addEventListener('mousedown', documentMousedownListener, eventListenerOptions);
        });
        this._removeGlobalListeners = () => {
            document.removeEventListener('keydown', documentKeydownListener, eventListenerOptions);
            document.removeEventListener('mousedown', documentMousedownListener, eventListenerOptions);
        };
    }
    /**
     * @return {?}
     */
    _incrementCount() {
        if (++this._count === 1) {
            this._addGlobalListeners();
        }
    }
    /**
     * @return {?}
     */
    _decrementCount() {
        if (!--this._count) {
            this._removeGlobalListeners();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._elementMap.forEach((_, element) => this.unlisten(element));
    }
}
LyFocusState.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyFocusState.ctorParameters = () => [
    { type: NgZone }
];
/** @nocollapse */ LyFocusState.ngInjectableDef = defineInjectable({ factory: function LyFocusState_Factory() { return new LyFocusState(inject(NgZone)); }, token: LyFocusState, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyFocusStateModule {
}
LyFocusStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [LyFocusStateDeprecated],
                exports: [LyFocusStateDeprecated]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const AUI_VERSION = '1.7.11-nightly.20181112-joe0zbhx';
/** @type {?} */
const AUI_LAST_UPDATE = '2018-11-12T08:07:48.211Z';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
/** @type {?} */
const HAMMER_GESTURES_EVENTS = [
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft'
];
class LyHammerGestureConfig extends HammerGestureConfig {
    /**
     * @param {?} _hammerOptions
     */
    constructor(_hammerOptions) {
        super();
        this._hammerOptions = _hammerOptions;
        this.events = HAMMER_GESTURES_EVENTS;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    buildHammer(element) {
        /** @type {?} */
        const hammer = typeof window !== 'undefined' ? (/** @type {?} */ (window)).Hammer : null;
        /** @type {?} */
        const mc = new hammer(element, this._hammerOptions || undefined);
        /** @type {?} */
        const pan = new hammer.Pan();
        /** @type {?} */
        const swipe = new hammer.Swipe();
        /** @type {?} */
        const slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
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
        /** @type {?} */
        const recognizer = new (base.constructor)(options);
        inheritances.push(base);
        inheritances.forEach(item => recognizer.recognizeWith(item));
        return recognizer;
    }
}
LyHammerGestureConfig.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LyHammerGestureConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_HAMMER_OPTIONS,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    { type: NgModule }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Undefined {
    constructor() { }
}
/** @type {?} */
const UndefinedValue = new Undefined();

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
function transformMediaQuery(media, invertMediaQuery = InvertMediaQuery.No) {
    if (media && invertMediaQuery === InvertMediaQuery.Yes) {
        /** @type {?} */
        const newVal = media.split(',').map(_ => `not ${_}`);
        return newVal;
    }
    return media;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CreateFromTemplateRef {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     * @param {?} _templateRef
     * @param {?} _overlayContainer
     * @param {?} _context
     * @param {?} _injector
     * @param {?} windowScroll
     * @param {?=} config
     */
    constructor(_componentFactoryResolver, _appRef, _templateRef, _overlayContainer, _context, _injector, windowScroll, config) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._overlayContainer = _overlayContainer;
        this._injector = _injector;
        this.windowScrollSub = Subscription.EMPTY;
        // this._viewRef = _templateRef.createEmbeddedView(_context);
        // this._viewRef.detectChanges();
        this._el = document.createElement('div');
        /** @type {?} */
        const __styles = Object.assign({ position: 'absolute', display: 'flex', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }, config.styles);
        /** @type {?} */
        const newInjector = Injector.create([
            {
                provide: 'overlayConfig',
                useValue: /** @type {?} */ (Object.assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles }))
            }
        ], this._injector);
        this.updateStyles(__styles);
        if (config.host) {
            this.windowScrollSub = windowScroll.scroll$.subscribe((val) => {
                /** @type {?} */
                const rect = config.host.getBoundingClientRect();
                if (rect.top !== __styles.top || rect.left !== __styles.left) {
                    /** @type {?} */
                    const newStyles = {
                        top: rect.top,
                        left: rect.left
                    };
                    this.updateStyles(newStyles);
                }
            });
        }
        this._compRefOverlayBackdrop = this.generateComponent(LyOverlayBackdrop, newInjector);
        this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
        /** @type {?} */
        const backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
        this._overlayContainer._add(backdropEl);
        this._appendComponentToBody(_templateRef, _context, this._injector);
    }
    /**
     * @param {?} __styles
     * @return {?}
     */
    updateStyles(__styles) {
        /** Apply styles */
        /** set styles */
        for (const key in __styles) {
            if (__styles.hasOwnProperty(key)) {
                /** @type {?} */
                const styleVal = __styles[key];
                if (styleVal) {
                    this._el.style[key] = typeof __styles[key] === 'number' ? `${styleVal}px` : styleVal;
                }
            }
        }
    }
    /**
     * @param {?} type
     * @param {?} context
     * @param {?} injector
     * @return {?}
     */
    _appendComponentToBody(type, context, injector) {
        if (type instanceof TemplateRef) {
            /** @type {?} */
            const viewRef = this._viewRef = type.createEmbeddedView(context || {});
            this._appRef.attachView(viewRef);
            // Get DOM element from component
            viewRef.rootNodes.forEach(_ => this._el.appendChild(_));
            // Append DOM element to the body
            this._overlayContainer._add(this._el);
        }
        else {
            this._compRef = this.generateComponent(type, injector);
            this._el = this._compRef.location.nativeElement;
            this._overlayContainer._add(this._el);
        }
    }
    /**
     * @param {?} type
     * @param {?} injector
     * @return {?}
     */
    generateComponent(type, injector) {
        /** @type {?} */
        const factory = this._componentFactoryResolver.resolveComponentFactory(type);
        return factory.create(injector);
    }
    /**
     * @return {?}
     */
    detach() {
        if (this._viewRef) {
            this._appRef.detachView(this._viewRef);
        }
    }
    /**
     * @return {?}
     */
    remove() {
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
            const backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._remove(backdropEl);
        }
        this.windowScrollSub.unsubscribe();
    }
    /**
     * @return {?}
     */
    destroy() {
        this.detach();
        this.remove();
    }
}
class LyOverlay {
    /**
     * @param {?} _overlayContainer
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     * @param {?} _injector
     * @param {?} _windowScroll
     */
    constructor(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _windowScroll) {
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
    create(template, context, config) {
        return new CreateFromTemplateRef(this._componentFactoryResolver, this._appRef, template, this._overlayContainer, context, this._injector, this._windowScroll, config);
    }
}
LyOverlay.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyOverlay.ctorParameters = () => [
    { type: LyOverlayContainer },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: WindowScrollService }
];
/** @nocollapse */ LyOverlay.ngInjectableDef = defineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(inject(LyOverlayContainer), inject(ComponentFactoryResolver), inject(ApplicationRef), inject(INJECTOR), inject(WindowScrollService)); }, token: LyOverlay, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyOverlayModule {
}
LyOverlayModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LyOverlayBackdrop],
                entryComponents: [LyOverlayBackdrop]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MUTATION_OBSERVER_INIT = {
    characterData: true,
    childList: true,
    subtree: true
};
class MutationObserverFactory {
    /**
     * @param {?} callback
     * @return {?}
     */
    create(callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }
}
MutationObserverFactory.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MutationObserverFactory.ngInjectableDef = defineInjectable({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
class ElementObserver {
    /**
     * @param {?} _mutationObserverFactory
     */
    constructor(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        this._observedElements = new Map();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._observedElements.forEach((_, element) => this.destroy(element));
    }
    /**
     * @param {?} elementOrRef
     * @param {?} fn
     * @param {?=} options
     * @return {?}
     */
    observe(elementOrRef, fn, options) {
        /** @type {?} */
        const element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
        if (!this._observedElements.has(element)) {
            /** @type {?} */
            const observer = this._mutationObserverFactory.create(fn);
            if (observer) {
                observer.observe(element, options || MUTATION_OBSERVER_INIT);
            }
            this._observedElements.set(element, observer);
        }
        return this._observedElements.get(element);
    }
    /**
     * Destroy Observer
     * @param {?} elementOrRef
     * @return {?}
     */
    destroy(elementOrRef) {
        /** @type {?} */
        const element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
        if (this._observedElements.has(element)) {
            this._observedElements.get(element).disconnect();
            this._observedElements.delete(element);
        }
    }
}
ElementObserver.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ElementObserver.ctorParameters = () => [
    { type: MutationObserverFactory }
];
/** @nocollapse */ ElementObserver.ngInjectableDef = defineInjectable({ factory: function ElementObserver_Factory() { return new ElementObserver(inject(MutationObserverFactory)); }, token: ElementObserver, providedIn: "root" });

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

export { getContrastYIQ, shadowBuilderDeprecated, shadowBuilder, Shadows, THEME_VARIABLES, IS_CORE_THEME, Platform, supportsPassiveEventListeners, LyCommonModule, getNativeElement, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, defaultEntry, DomService, LxDomModule, LyFocusStateModule, FocusStatus, LyFocusStateDeprecated, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LyCommon, CoreTheme, LY_THEME_GLOBAL_VARIABLES, LY_THEME, LY_THEME_NAME, toHyphenCase, capitalizeFirstLetter, StylesInDocument, LyTheme2, LyThemeModule, LY_COMMON_STYLES, LyCoreStyles, Undefined, UndefinedValue, transformMediaQuery, InvertMediaQuery, eachMedia, isObject, mergeDeep, LyStyleUtils, Dir, DirAlias, DirPosition, WindowScrollService, LyOverlayContainer, LyOverlayBackdrop, LyOverlay, LyOverlayModule, MutationObserverFactory, ElementObserver, LyWithClass as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGFzc2l2ZS1saXN0ZW5lcnMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlLXV0aWxzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZTIuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2NvbW1vbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2VsL29mZnNldC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2lzLWJvb2xlYW4udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9kZWZhdWx0LWVudHJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvbW1vbi5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvd2l0aC1jbGFzcy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXktY29udGFpbmVyLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9kb20uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbHgtZG9tLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9mb2N1cy1zdGF0ZS9mb2N1cy1zdGF0ZS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3ZlcnNpb24udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZ2VzdHVyZS9nZXN0dXJlLWNvbmZpZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdW5kZWZpbmVkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vb3ZlcmxheS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL211dGF0aW9uLW9ic2VydmVyLWZhY3RvcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0WUlRKGhleGNvbG9yKSB7XG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMCwgMiksIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigyLCAyKSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDQsIDIpLCAxNik7XG4gIGNvbnN0IHlpcSA9ICgociAqIDI5OSkgKyAoZyAqIDU4NykgKyAoYiAqIDExNCkpIC8gMTAwMDtcbiAgcmV0dXJuICh5aXEgPj0gMTI4KSA/ICdibGFjaycgOiAnd2hpdGUnO1xufVxuIiwiaW1wb3J0ICogYXMgX2Nocm9tYSBmcm9tICdjaHJvbWEtanMnO1xuY29uc3QgY2hyb21hID0gX2Nocm9tYTtcblxuY29uc3Qgc2hhZG93S2V5VW1icmFPcGFjaXR5ID0gMC4yO1xuY29uc3Qgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbmNvbnN0IHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcbmV4cG9ydCBjb25zdCBTaGFkb3dzID0gW1xuICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gIFswLCAxLCAzLCAwLCAwLCAxLCAxLCAwLCAwLCAyLCAxLCAtMV0sXG4gIFswLCAxLCA1LCAwLCAwLCAyLCAyLCAwLCAwLCAzLCAxLCAtMl0sXG4gIFswLCAxLCA4LCAwLCAwLCAzLCA0LCAwLCAwLCAzLCAzLCAtMl0sXG4gIFswLCAyLCA0LCAtMSwgMCwgNCwgNSwgMCwgMCwgMSwgMTAsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDUsIDgsIDAsIDAsIDEsIDE0LCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA2LCAxMCwgMCwgMCwgMSwgMTgsIDBdLFxuICBbMCwgNCwgNSwgLTIsIDAsIDcsIDEwLCAxLCAwLCAyLCAxNiwgMV0sXG4gIFswLCA1LCA1LCAtMywgMCwgOCwgMTAsIDEsIDAsIDMsIDE0LCAyXSxcbiAgWzAsIDUsIDYsIC0zLCAwLCA5LCAxMiwgMSwgMCwgMywgMTYsIDJdLFxuICBbMCwgNiwgNiwgLTMsIDAsIDEwLCAxNCwgMSwgMCwgNCwgMTgsIDNdLFxuICBbMCwgNiwgNywgLTQsIDAsIDExLCAxNSwgMSwgMCwgNCwgMjAsIDNdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEyLCAxNywgMiwgMCwgNSwgMjIsIDRdLFxuICBbMCwgNywgOCwgLTQsIDAsIDEzLCAxOSwgMiwgMCwgNSwgMjQsIDRdLFxuICBbMCwgNywgOSwgLTQsIDAsIDE0LCAyMSwgMiwgMCwgNSwgMjYsIDRdLFxuICBbMCwgOCwgOSwgLTUsIDAsIDE1LCAyMiwgMiwgMCwgNiwgMjgsIDVdLFxuICBbMCwgOCwgMTAsIC01LCAwLCAxNiwgMjQsIDIsIDAsIDYsIDMwLCA1XSxcbiAgWzAsIDgsIDExLCAtNSwgMCwgMTcsIDI2LCAyLCAwLCA2LCAzMiwgNV0sXG4gIFswLCA5LCAxMSwgLTUsIDAsIDE4LCAyOCwgMiwgMCwgNywgMzQsIDZdLFxuICBbMCwgOSwgMTIsIC02LCAwLCAxOSwgMjksIDIsIDAsIDcsIDM2LCA2XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIwLCAzMSwgMywgMCwgOCwgMzgsIDddLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjEsIDMzLCAzLCAwLCA4LCA0MCwgN10sXG4gIFswLCAxMCwgMTQsIC02LCAwLCAyMiwgMzUsIDMsIDAsIDgsIDQyLCA3XSxcbiAgWzAsIDExLCAxNCwgLTcsIDAsIDIzLCAzNiwgMywgMCwgOSwgNDQsIDhdLFxuICBbMCwgMTEsIDE1LCAtNywgMCwgMjQsIDM4LCAzLCAwLCA5LCA0NiwgOF1cbl07XG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcgPSAyLCBjb2xvciA9ICcjMDAwJykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvcik7XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGBib3gtc2hhZG93OiR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhZG93QnVpbGRlcihlbGV2YXRpb246IG51bWJlciB8IHN0cmluZywgY29sb3I/OiBzdHJpbmcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IgfHwgJyMwMDAnKS5kYXJrZW4oKS5zYXR1cmF0ZSgyKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYCR7ZVswXX1weCAke2VbMV19cHggJHtlWzJdfXB4ICR7ZVszXX1weCAke2NvbG9yc1swXX0sJHtlWzRdfXB4ICR7ZVs1XX1weCAke2VbNl19cHggJHtlWzddfXB4ICR7Y29sb3JzWzFdfSwke2VbOF19cHggJHtlWzldfXB4ICR7ZVsxMF19cHggJHtlWzExXX1weCAke2NvbG9yc1syXX07YDtcblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xyXG5leHBvcnQgY29uc3QgSVNfQ09SRV9USEVNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjx0cnVlPignbHkuaXMucm9vdCcpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuLy8gZXhwb3J0IGNsYXNzIDxkZXByZWNhdGVkPlRoZW1lVmFyaWFibGVzIHtcclxuLy8gICAvKiogVGhlbWUgbmFtZSAqL1xyXG4vLyAgIG5hbWU6IHN0cmluZztcclxuLy8gICBwcmltYXJ5PzogUGFsZXR0ZVZhcmlhYmxlcztcclxuLy8gICBhY2NlbnQ/OiBQYWxldHRlVmFyaWFibGVzO1xyXG4vLyAgIC8qKiB3YXJuIG9yIGVycm9yIGNvbG9yICovXHJcbi8vICAgd2Fybj86IFBhbGV0dGVWYXJpYWJsZXM7XHJcbi8vICAgc2NoZW1lPzogc3RyaW5nO1xyXG4vLyAgIGNvbG9yU2NoZW1lcz86IHtcclxuLy8gICAgIFtrZXk6IHN0cmluZ106IENvbG9yU2NoZW1lXHJcbi8vICAgfTtcclxuLy8gICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4vLyB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xyXG4gIGRlZmF1bHQ/OiBzdHJpbmc7XHJcbiAgY29udHJhc3Q/OiBzdHJpbmc7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcclxuICBiYWNrZ3JvdW5kPzoge1xyXG4gICAgZGVmYXVsdD86IHN0cmluZyxcclxuICAgIHBhcGVyPzogc3RyaW5nLFxyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH07XHJcbiAgdGV4dD86IHtcclxuICAgIGRlZmF1bHQ6IHN0cmluZyxcclxuICAgIHByaW1hcnk/OiBzdHJpbmcsXHJcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXHJcbiAgICBkaXNhYmxlZD86IHN0cmluZyxcclxuICAgIGhpbnQ/OiBzdHJpbmcsXHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfTtcclxuICBkaXZpZGVyPzogc3RyaW5nO1xyXG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xyXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xyXG4gIGJhcj86IHN0cmluZztcclxuICBpbnB1dD86IHtcclxuICAgIGxhYmVsPzogc3RyaW5nLFxyXG4gICAgdW5kZXJsaW5lPzogc3RyaW5nXHJcbiAgfTtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuIiwiXHJcbi8vIFdoZXRoZXIgdGhlIGN1cnJlbnQgcGxhdGZvcm0gc3VwcG9ydHMgdGhlIFY4IEJyZWFrIEl0ZXJhdG9yLiBUaGUgVjggY2hlY2tcclxuLy8gaXMgbmVjZXNzYXJ5IHRvIGRldGVjdCBhbGwgQmxpbmsgYmFzZWQgYnJvd3NlcnMuXHJcbmNvbnN0IGhhc1Y4QnJlYWtJdGVyYXRvciA9ICh0eXBlb2YoSW50bCkgIT09ICd1bmRlZmluZWQnICYmIChJbnRsIGFzIGFueSkudjhCcmVha0l0ZXJhdG9yKTtcclxuLyoqXHJcbiAqIFNlcnZpY2UgdG8gZGV0ZWN0IHRoZSBjdXJyZW50IHBsYXRmb3JtIGJ5IGNvbXBhcmluZyB0aGUgdXNlckFnZW50IHN0cmluZ3MgYW5kXHJcbiAqIGNoZWNraW5nIGJyb3dzZXItc3BlY2lmaWMgZ2xvYmFsIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm0ge1xyXG4gIHN0YXRpYyByZWFkb25seSBpc0Jyb3dzZXI6IGJvb2xlYW4gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQ7XHJcbiAgLyoqIExheW91dCBFbmdpbmVzICovXHJcbiAgRURHRSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGVkZ2UpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICBUUklERU5UID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gIC8vIEVkZ2VIVE1MIGFuZCBUcmlkZW50IG1vY2sgQmxpbmsgc3BlY2lmaWMgdGhpbmdzIGFuZCBuZWVkIHRvIGJlIGV4Y2x1ZGVkIGZyb20gdGhpcyBjaGVjay5cclxuICBCTElOSyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxyXG4gICAgICAoISEoKHdpbmRvdyBhcyBhbnkpLmNocm9tZSB8fCBoYXNWOEJyZWFrSXRlcmF0b3IpICYmICEhQ1NTICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVCk7XHJcblxyXG4gIC8vIFdlYmtpdCBpcyBwYXJ0IG9mIHRoZSB1c2VyQWdlbnQgaW4gRWRnZUhUTUwsIEJsaW5rIGFuZCBUcmlkZW50LiBUaGVyZWZvcmUgd2UgbmVlZCB0b1xyXG4gIC8vIGVuc3VyZSB0aGF0IFdlYmtpdCBydW5zIHN0YW5kYWxvbmUgYW5kIGlzIG5vdCB1c2VkIGFzIGFub3RoZXIgZW5naW5lJ3MgYmFzZS5cclxuICBXRUJLSVQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcclxuICAgICAgL0FwcGxlV2ViS2l0L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhdGhpcy5CTElOSyAmJiAhdGhpcy5FREdFICYmICF0aGlzLlRSSURFTlQ7XHJcblxyXG4gIC8qKiBCcm93c2VycyBhbmQgUGxhdGZvcm0gVHlwZXMgKi9cclxuICBJT1MgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgISh3aW5kb3cgYXMgYW55KS5NU1N0cmVhbTtcclxuXHJcbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcclxuICAvLyB0aGVtIHNlbGYgYXMgR2Vja28tbGlrZSBicm93c2VycyBhbmQgbW9kaWZ5IHRoZSB1c2VyQWdlbnQncyBhY2NvcmRpbmcgdG8gdGhhdC5cclxuICAvLyBTaW5jZSB3ZSBvbmx5IGNvdmVyIG9uZSBleHBsaWNpdCBGaXJlZm94IGNhc2UsIHdlIGNhbiBzaW1wbHkgY2hlY2sgZm9yIEZpcmVmb3hcclxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXHJcbiAgRklSRUZPWCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGZpcmVmb3h8bWluZWZpZWxkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gIC8vIFRyaWRlbnQgb24gbW9iaWxlIGFkZHMgdGhlIGFuZHJvaWQgcGxhdGZvcm0gdG8gdGhlIHVzZXJBZ2VudCB0byB0cmljayBkZXRlY3Rpb25zLlxyXG4gIEFORFJPSUQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLlRSSURFTlQ7XHJcblxyXG4gIC8vIFNhZmFyaSBicm93c2VycyB3aWxsIGluY2x1ZGUgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZWlyIHVzZXJBZ2VudC4gU29tZSBicm93c2VycyBtYXkgZmFrZVxyXG4gIC8vIHRoaXMgYW5kIGp1c3QgcGxhY2UgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZSB1c2VyQWdlbnQuIFRvIGJlIG1vcmUgc2FmZSBhYm91dCBTYWZhcmkgZXZlcnlcclxuICAvLyBTYWZhcmkgYnJvd3NlciBzaG91bGQgYWxzbyB1c2UgV2Via2l0IGFzIGl0cyBsYXlvdXQgZW5naW5lLlxyXG4gIFNBRkFSSSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiB0aGlzLldFQktJVDtcclxufVxyXG4iLCJsZXQgc3VwcG9ydHNQYXNzaXZlO1xuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzKCk6IGJvb2xlYW4ge1xuICBpZiAoc3VwcG9ydHNQYXNzaXZlID09PSB2b2lkIDApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgICB9IGNhdGNoIChlKSB7IH1cbiAgfVxuICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5U3R5bGVVdGlscywgRGlyIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgU3R5bGVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IFJpcHBsZVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3JpcHBsZSc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5VmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvdHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBDaGVja2JveFZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL2NoZWNrYm94JztcblxuZXhwb3J0IGNvbnN0IExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFydGlhbFRoZW1lVmFyaWFibGVzPignbHkudGhlbWUuZ2xvYmFsLnZhcmlhYmxlcycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPFRoZW1lQ29uZmlnIHwgVGhlbWVDb25maWdbXT4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignbHkudGhlbWUubmFtZScpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBhY2NlbnQ6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIHdhcm46IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGJhY2tncm91bmQ6IHtcbiAgICAvKiogc2Vjb25kYXJ5ICovXG4gICAgZGVmYXVsdDogc3RyaW5nLFxuICAgIHByaW1hcnk6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3IsXG4gICAgc2Vjb25kYXJ5OiBzdHJpbmcsXG4gICAgdGVydGlhcnk6IHN0cmluZyxcbiAgICBiYXNlOiBzdHJpbmdcbiAgfTtcbiAgdGV4dDoge1xuICAgIGRlZmF1bHQ6IHN0cmluZyxcbiAgICBwcmltYXJ5OiBzdHJpbmcsXG4gICAgc2Vjb25kYXJ5OiBzdHJpbmcsXG4gICAgZGlzYWJsZWQ6IHN0cmluZyxcbiAgICBoaW50OiBzdHJpbmdcbiAgfTtcbiAgdHlwb2dyYXBoeTogVHlwb2dyYXBoeVZhcmlhYmxlcztcbiAgLyoqIGNvbG9yIGZvciBkaXZpZGVyICovXG4gIGRpdmlkZXI6IHN0cmluZztcbiAgc2hhZG93OiBzdHJpbmc7XG4gIC8qKiBAZGVwcmVjYXRlZCB1c2Ugc2hhZG93IGluc3RlYWQgKi9cbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XG4gIGJ1dHRvbjoge1xuICAgIGRpc2FibGVkOiBzdHJpbmc7XG4gIH07XG4gIHJhZGlvOiB7XG4gICAgLyoqIGNvbG9yIGZvciByYWRpbzpvdXRlckNpcmNsZSAqL1xuICAgIG91dGVyQ2lyY2xlPzogc3RyaW5nO1xuICAgIC8qKiBAZGVwcmVjYXRlZCB1c2Ugb3V0ZXJDaXJjbGUgaW5zdGVhZCAqL1xuICAgIHJhZGlvT3V0ZXJDaXJjbGU/OiBzdHJpbmc7XG4gIH07XG4gIG1lbnU6IHtcbiAgICByb290PzogU3R5bGVDb250YWluZXJcbiAgfTtcbiAgZHJhd2VyOiB7XG4gICAgLyoqIGNvbG9yIGZvciBkcmF3ZXI6YmFja2Ryb3AgKi9cbiAgICBiYWNrZHJvcDogc3RyaW5nXG4gIH07XG4gIGZpZWxkOiB7XG4gICAgYm9yZGVyQ29sb3I6IHN0cmluZ1xuICAgIGxhYmVsQ29sb3I6IHN0cmluZ1xuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIFthcHBlYXJhbmNlTmFtZTogc3RyaW5nXToge1xuICAgICAgICBjb250YWluZXI/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmaWVsZHNldD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZpZWxkc2V0SG92ZXI/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmaWVsZHNldEZvY3VzZWQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXJGb2N1c2VkPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgbGFiZWw/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBwbGFjZWhvbGRlcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGlucHV0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmxvYXRpbmdMYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHByZWZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGluZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgc3VmZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaGludD86IFN0eWxlQ29udGFpbmVyXG4gICAgICB9XG4gICAgfVxuICB9O1xuICBpY29uQnV0dG9uOiB7XG4gICAgc2l6ZTogc3RyaW5nXG4gIH07XG4gIGljb246IHtcbiAgICBmb250U2l6ZTogc3RyaW5nXG4gIH07XG4gIHpJbmRleDoge1xuICAgIHRvb2xiYXI6IG51bWJlclxuICAgIGRyYXdlcjogbnVtYmVyXG4gICAgb3ZlcmxheTogbnVtYmVyXG4gICAgW2tleTogc3RyaW5nXTogbnVtYmVyXG4gIH07XG4gIGRpcmVjdGlvbj86IERpcjtcbiAgYW5pbWF0aW9uczoge1xuICAgIGN1cnZlczoge1xuICAgICAgc3RhbmRhcmQ6IHN0cmluZ1xuICAgICAgZGVjZWxlcmF0aW9uOiBzdHJpbmdcbiAgICAgIGFjY2VsZXJhdGlvbjogc3RyaW5nXG4gICAgICBzaGFycDogc3RyaW5nXG4gICAgfSxcbiAgICBkdXJhdGlvbnM6IHtcbiAgICAgIGNvbXBsZXg6IG51bWJlclxuICAgICAgZW50ZXJpbmc6IG51bWJlclxuICAgICAgZXhpdGluZzogbnVtYmVyXG4gICAgfVxuICB9O1xuICByaXBwbGU6IFJpcHBsZVZhcmlhYmxlcztcbiAgYmFkZ2U6IHtcbiAgICByb290PzogU3R5bGVDb250YWluZXIsXG4gICAgcG9zaXRpb24/OiB7XG4gICAgICBbcG9zaXRpb25OYW1lOiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lclxuICAgIH1cbiAgfTtcbiAgY2hlY2tib3g6IENoZWNrYm94VmFyaWFibGVzO1xufVxuXG5leHBvcnQgdHlwZSBUaGVtZVZhcmlhYmxlcyA9IEx5U3R5bGVVdGlscyAmIFRoZW1lQ29uZmlnO1xuZXhwb3J0IHR5cGUgUGFydGlhbFRoZW1lVmFyaWFibGVzID0gUGFydGlhbDxUaGVtZVZhcmlhYmxlcz47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFZhbCB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGFsZXR0ZUNvbG9yIHtcbiAgY29udHJhc3Q/OiBzdHJpbmc7XG4gIC8qKiBzaGFkb3cgY29sb3IgKi9cbiAgc2hhZG93Pzogc3RyaW5nO1xufVxuIiwiZXhwb3J0IGNsYXNzIEx5U3R5bGVVdGlscyB7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgIGh0bWxGb250U2l6ZTogbnVtYmVyLFxuICAgIGZvbnRTaXplOiBudW1iZXI7XG4gIH07XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgWFNtYWxsOiBzdHJpbmcsXG4gICAgU21hbGw6IHN0cmluZyxcbiAgICBNZWRpdW06IHN0cmluZyxcbiAgICBMYXJnZTogc3RyaW5nLFxuICAgIFhMYXJnZTogc3RyaW5nLFxuXG4gICAgSGFuZHNldDogc3RyaW5nLFxuICAgIFRhYmxldDogc3RyaW5nLFxuICAgIFdlYjogc3RyaW5nLFxuXG4gICAgSGFuZHNldFBvcnRyYWl0OiBzdHJpbmcsXG4gICAgVGFibGV0UG9ydHJhaXQ6IHN0cmluZyxcbiAgICBXZWJQb3J0cmFpdDogc3RyaW5nLFxuXG4gICAgSGFuZHNldExhbmRzY2FwZTogc3RyaW5nLFxuICAgIFRhYmxldExhbmRzY2FwZTogc3RyaW5nLFxuICAgIFdlYkxhbmRzY2FwZTogc3RyaW5nLFxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9O1xuICBkaXJlY3Rpb24/OiBEaXI7XG4gIHB4VG9SZW0odmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLnR5cG9ncmFwaHkuZm9udFNpemUgLyAxNDtcbiAgICByZXR1cm4gYCR7dmFsdWUgLyB0aGlzLnR5cG9ncmFwaHkuaHRtbEZvbnRTaXplICogc2l6ZX1yZW1gO1xuICB9XG4gIGNvbG9yT2YodmFsdWU6IHN0cmluZywgb3B0aW9uYWw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcywgdmFsdWUsIG9wdGlvbmFsKTtcbiAgfVxuICBnZXRCcmVha3BvaW50KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBAbWVkaWEgJHt0aGlzLmJyZWFrcG9pbnRzW2tleV0gfHwga2V5fWA7XG4gIH1cblxuICBnZXREaXJlY3Rpb24odmFsOiBEaXJBbGlhcykge1xuICAgIGlmICh2YWwgPT09IERpckFsaWFzLmVuZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZW51bSBEaXIge1xuICBydGwgPSAncnRsJyxcbiAgbHRyID0gJ2x0cidcbn1cbmV4cG9ydCBlbnVtIERpckFsaWFzIHtcbiAgc3RhcnQgPSAnc3RhcnQnLFxuICBlbmQgPSAnZW5kJ1xufVxuZXhwb3J0IGVudW0gRGlyUG9zaXRpb24ge1xuICBsZWZ0ID0gJ2xlZnQnLFxuICByaWdodCA9ICdyaWdodCdcbn1cblxuLyoqXG4gKiBnZXQgY29sb3Igb2Ygb2JqZWN0XG4gKiBAcGFyYW0gb2JqIG9iamVjdFxuICogQHBhcmFtIHBhdGggcGF0aFxuICogQHBhcmFtIG9wdGlvbmFsIGdldCBvcHRpb25hbCB2YWx1ZSwgaWYgbm90IGV4aXN0IHJldHVybiBkZWZhdWx0IGlmIG5vdCBpcyBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iajogT2JqZWN0LCBwYXRoOiBzdHJpbmdbXSB8IHN0cmluZywgb3B0aW9uYWw6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IF9wYXRoOiBzdHJpbmdbXSA9IHBhdGggaW5zdGFuY2VvZiBBcnJheSA/IHBhdGggOiBwYXRoLnNwbGl0KCc6Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwb3NpYmxlT2IgPSBvYmpbX3BhdGhbaV1dO1xuICAgIGlmIChwb3NpYmxlT2IpIHtcbiAgICAgIG9iaiA9IHBvc2libGVPYjtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIGlmIG5vdCBleGlzdCAqL1xuICAgICAgcmV0dXJuIHBhdGggYXMgc3RyaW5nO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gb2JqIGFzIHN0cmluZztcbiAgfSBlbHNlIGlmIChvcHRpb25hbCkge1xuICAgIHJldHVybiBvYmpbb3B0aW9uYWxdIHx8IG9ialsnZGVmYXVsdCddO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmpbJ2RlZmF1bHQnXTtcbiAgfVxuICAvLyByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWFjaE1lZGlhKHN0cjogc3RyaW5nIHwgbnVtYmVyLCBmbjogKCh2YWw6IHN0cmluZywgbWVkaWE6IHN0cmluZywgaXNNZWRpYTogbnVtYmVyKSA9PiB2b2lkKSkge1xuICBpZiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBzdHIuc3BsaXQoL1xccy9nKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgdmFsSXRlbSA9IHZhbHVlc1tpbmRleF0uc3BsaXQoL1xcQC9nKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsSXRlbS5zaGlmdCgpO1xuICAgICAgY29uc3QgbGVuID0gdmFsSXRlbS5sZW5ndGg7XG4gICAgICBpZiAobGVuKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBmbi5jYWxsKHVuZGVmaW5lZCwgdmFsdWUsIHZhbEl0ZW1bal0sIHZhbEl0ZW0ubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCB1bmRlZmluZWQsIGxlbik7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZuLmNhbGwodW5kZWZpbmVkLCBzdHIsIHVuZGVmaW5lZCwgMCk7XG4gIH1cbn1cbi8qKlxuICogU2ltcGxlIG9iamVjdCBjaGVjay5cbiAqIEBwYXJhbSBpdGVtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFU+KHRhcmdldDogVCwgc291cmNlOiBVKTogVCAmIFU7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFUsIFY+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogVik6IFQgJiBVICYgVjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXA8VCwgVSwgViwgVz4odGFyZ2V0OiBULCBzb3VyY2UxOiBVLCBzb3VyY2UyOiBWLCBzb3VyY2UzOiBXKTogVCAmIFUgJiBWICYgVztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURlZXAodGFyZ2V0OiBvYmplY3QsIC4uLnNvdXJjZXM6IGFueVtdKTogYW55O1xuXG4vKipcbiAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gLi4uc291cmNlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcykge1xuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7IHJldHVybiB0YXJnZXQ7IH1cbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkgeyBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XToge30gfSk7IH1cbiAgICAgICAgbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIExZX1RIRU1FLCBUaGVtZVZhcmlhYmxlcywgTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBtZXJnZURlZXAgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVUaGVtZSB7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIG1lZGlhU3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcmltYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIGZpcnN0RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHJlYWRvbmx5IHRoZW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIF90aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZVZhcmlhYmxlcz4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgRGF0YVN0eWxlPj4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRSkgdGhlbWVDb25maWc6IFRoZW1lQ29uZmlnW10gfCBUaGVtZUNvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMpIGdsb2JhbFZhcmlhYmxlczogVGhlbWVDb25maWcsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgaWYgKCF0aGVtZUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMWV9USEVNRSB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIHtcbiAgICAgIGlkOiAnbHknLFxuICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICAgIHN0eWxlczogW10sXG4gICAgICBkYXRhOiB7fVxuICAgIH0pO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IG5vZGVzOiBOb2RlTGlzdCA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2x5LXMtYycpO1xuICAgICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IG5vZGVzLml0ZW0oaW5kZXgpO1xuICAgICAgICAgIChfZG9jdW1lbnQuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQpLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmlyc3RFbGVtZW50ID0gX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGVtZUNvbmZpZykpIHtcbiAgICAgIHRoZW1lQ29uZmlnLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMpIHtcbiAgICAgICAgICBtZXJnZURlZXAoaXRlbSwgZ2xvYmFsVmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZChpdGVtIGFzIGFueSk7XG4gICAgICAgIHRoaXMudGhlbWVzLmFkZChpdGVtLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMpIHtcbiAgICAgICAgbWVyZ2VEZWVwKHRoZW1lQ29uZmlnLCBnbG9iYWxWYXJpYWJsZXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5hZGQodGhlbWVDb25maWcgYXMgYW55KTtcbiAgICAgIHRoaXMudGhlbWVzLmFkZCh0aGVtZUNvbmZpZy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIG5ldyB0aGVtZVxuICAgKiBAcGFyYW0gdGhlbWU6IFRoZW1lVmFyaWFibGVzXG4gICAqL1xuICBhZGQodGhlbWU6IFRoZW1lVmFyaWFibGVzKSB7XG4gICAgdGhpcy5fdGhlbWVNYXAuc2V0KHRoZW1lLm5hbWUsIHRoZW1lKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5zZXQodGhlbWUubmFtZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVNYXAuZ2V0KG5hbWUpO1xuICB9XG4gIGdldFN0eWxlTWFwKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZU1hcC5nZXQobmFtZSk7XG4gIH1cblxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgaWYgKG9sZENsYXNzbmFtZSkge1xuICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3NuYW1lKTtcbiAgICB9XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmV3Q2xhc3NuYW1lKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaXJBbGlhcyB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgJ0BnbG9iYWwnOiB7XG4gICAgJyosICo6YWZ0ZXIsICo6YmVmb3JlJzoge1xuICAgICAgJy13ZWJraXQtYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICctbW96LWJveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94J1xuICAgIH1cbiAgfVxufTtcblxuXG5jb25zdCBSRUZfUkVHX0VYUCA9IC9cXHsoW1xcdy1dKylcXH0vZztcblxuZW51bSBUeXBlU3R5bGUge1xuICBNdWx0aXBsZSxcbiAgT25seU9uZVxufVxuXG5jb25zdCBTVFlMRV9NQVA1OiBNYXA8YW55LCBTdHlsZU1hcDU+ID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlTWFwNSB7XG4gIHN0eWxlczogU3R5bGVzRm4yPGFueT4gfCBTdHlsZXMyO1xuICB0eXBlOiBUeXBlU3R5bGU7XG4gIHByaW9yaXR5OiBudW1iZXI7XG4gIGNzczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogZ2xvYmFsIHRoZW1lICovXG4gIGNsYXNzZXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmc7XG4gIC8qKiByZXF1aXJlVXBkYXRlICovXG4gIGNsYXNzZXNXaXRoVGhlbWU/OiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXToge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gICAgfSB8IHN0cmluZ1xuICB9O1xuICByZXF1aXJlVXBkYXRlPzogYm9vbGVhbjtcbn1cbmNvbnN0IENMQVNTRVNfTUFQOiB7XG4gIFtpZE9yVGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgW2NsYXNzTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmdcbn0gPSB7fTtcbmNvbnN0IFNUWUxFX0tFWVNfTUFQID0ge307XG5sZXQgbmV4dENsYXNzSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNJbkRvY3VtZW50IHtcbiAgc3R5bGVzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXTogTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD5cbiAgfSA9IHt9O1xuICBzdHlsZUNvbnRhaW5lcnMgPSBuZXcgTWFwPG51bWJlciwgSFRNTEVsZW1lbnQ+KCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lMiB7XG4gIGNvbmZpZzogVGhlbWVWYXJpYWJsZXM7XG4gIF9zdHlsZU1hcDogTWFwPHN0cmluZywgRGF0YVN0eWxlPjtcbiAgaW5pdGlhbFRoZW1lOiBzdHJpbmc7XG4gIGVsZW1lbnRzOiBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PjtcbiAgX2VsZW1lbnRzTWFwID0gbmV3IE1hcDxhbnksIEhUTUxTdHlsZUVsZW1lbnQ+KCk7XG5cbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IHRoZW1lTmFtZSBpbiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzXG4gICAgICA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXVxuICAgICAgOiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV0gPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9jcmVhdGVJbnN0YW5jZUZvclRoZW1lKHRoZW1lTmFtZSk7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbFRoZW1lKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRoZW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FkZERlZmF1bHRTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIGFkZFN0eWxlKGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZUNvbnRhaW5lciB8ICgodGhlbWUpID0+IFN0eWxlQ29udGFpbmVyKSB8ICgodGhlbWUpID0+IHN0cmluZykgfCBzdHJpbmcsIGVsPzogYW55LCBpbnN0YW5jZT86IHN0cmluZywgcHJpb3JpdHk/OiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuYWRkQ3NzKGlkLCBzdHlsZSBhcyBhbnksIHByaW9yaXR5KTtcbiAgICBpZiAobmV3Q2xhc3MgPT09IGluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIGlmIChlbCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBwcml2YXRlIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzc25hbWUsIG9sZENsYXNzbmFtZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3MoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzczogc3RyaW5nLCBvbGRDbGFzcz86IHN0cmluZykge1xuICAgIGlmIChuZXdDbGFzcyA9PT0gb2xkQ2xhc3MpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgdGhlbWUuc2V0VGhlbWUoJ3RoZW1lLW5hbWUnKVxcYCBpcyBvbmx5IGF2YWlsYWJsZSBpbiBicm93c2VyIHBsYXRmb3JtYCk7XG4gICAgfVxuICAgIGlmIChuYW0gIT09IHRoaXMuY29uZmlnLm5hbWUpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldChuYW0pO1xuICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChfLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVEYXRhID0gU1RZTEVfTUFQNS5nZXQoa2V5KTtcbiAgICAgICAgaWYgKHN0eWxlRGF0YS5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZURhdGEuc3R5bGVzLCBrZXksIHN0eWxlRGF0YS5wcmlvcml0eSwgc3R5bGVEYXRhLnR5cGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIHN0eWxlLCBzaW1pbGFyIHRvIHNldFVwU3R5bGUgYnV0IHRoaXMgb25seSBhY2NlcHQgc3RyaW5nXG4gICAqIEBwYXJhbSBpZCBpZCBvZiBzdHlsZVxuICAgKiBAcGFyYW0gY3NzIHN0eWxlIGluIHN0cmluZ1xuICAgKi9cbiAgcHJpdmF0ZSBhZGRDc3MoaWQ6IHN0cmluZywgY3NzOiAoKHQpID0+IHN0cmluZykgfCBzdHJpbmcsIHByaW9yaXR5OiBudW1iZXIsIG1lZGlhPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBuZXdJZCA9IGB+PiR7aWR9YDtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50Mihjc3MgYXMgYW55LCBuZXdJZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5Pbmx5T25lLCBmYWxzZSwgbWVkaWEpIGFzIHN0cmluZztcbiAgfVxuICBwcml2YXRlIF9hZGREZWZhdWx0U3R5bGVzKCkge1xuICAgIHRoaXMuYWRkU3R5bGVTaGVldChkZWZhdWx0U3R5bGVzKTtcbiAgfVxuXG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgKFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIpLCBwcmlvcml0eT86IG51bWJlcik6IElDbGFzc2VzPFQ+O1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgaWQ6IHN0cmluZyk6IElDbGFzc2VzPFQ+O1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgaWQ6IHN0cmluZyB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcik6IElDbGFzc2VzPFQ+O1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGFkZCBhIG5ldyBzdHlsZSBzaGVldFxuICAgKiBAcGFyYW0gc3R5bGVzIHN0eWxlc1xuICAgKiBAcGFyYW0gaWQgZGVwcmVjYXRlZCwgdW5pcXVlIGlkIGZvciBzdHlsZSBncm91cFxuICAgKiBAcGFyYW0gcHJpb3JpdHkgcHJpb3JpdHkgZm9yIHN0eWxlXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgaWQ/OiBzdHJpbmcgfCBudW1iZXIsIHByaW9yaXR5PzogbnVtYmVyKTogSUNsYXNzZXM8VD4ge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgaWYgKCh2b2lkIDAgPT09IHByaW9yaXR5ICYmIHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHx8ICh2b2lkIDAgIT09IHByaW9yaXR5ICYmIHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgdGhlIHZhbHVlIFxcYCR7aWR9XFxgIGlzIG5vIGxvbmdlciBuZWNlc3NhcnkgZm9yIGFkZFN0eWxlU2hlZXQsIHRoaXMgd2lsbCBiZSBhbiBlcnJvciBpbiB0aGUgbmV4dCByZWxlYXNlLmApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIGlkIGFzIGFueSwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRlbnQyPFQ+KFxuICAgIHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMixcbiAgICBpZDogc3RyaW5nIHwgb2JqZWN0IHwgbnVtYmVyLFxuICAgIHByaW9yaXR5OiBudW1iZXIsXG4gICAgdHlwZTogVHlwZVN0eWxlLFxuICAgIGZvckNoYW5nZVRoZW1lPzogYm9vbGVhbixcbiAgICBtZWRpYT86IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBuZXdJZCA9IHR5cGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lID8gaWQgYXMgc3RyaW5nIDogc3R5bGVzO1xuICAgIGxldCBpc05ld1N0eWxlOiBib29sZWFuO1xuICAgIGlmICghU1RZTEVfTUFQNS5oYXMobmV3SWQpKSB7XG4gICAgICBpc05ld1N0eWxlID0gdHJ1ZTtcbiAgICAgIFNUWUxFX01BUDUuc2V0KG5ld0lkLCB7XG4gICAgICAgIHByaW9yaXR5OiB0eXBlID09PSBUeXBlU3R5bGUuT25seU9uZSA/IHByaW9yaXR5IDogcHJpb3JpdHkgPT09IHZvaWQgMCAmJiB0eXBlb2YgaWQgPT09ICdudW1iZXInID8gaWQgYXMgbnVtYmVyIDogcHJpb3JpdHksXG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgY3NzOiB7fVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlTWFwID0gU1RZTEVfTUFQNS5nZXQobmV3SWQpO1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHRoaXMuaW5pdGlhbFRoZW1lO1xuICAgIGNvbnN0IGlzQ3JlYXRlZCA9IGlzTmV3U3R5bGUgfHwgIShzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV0pO1xuICAgIGlmIChpc0NyZWF0ZWQgfHwgZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgIC8qKiBjcmVhdGUgbmV3IHN0eWxlIGZvciBuZXcgdGhlbWUgKi9cbiAgICAgIGxldCBjc3M7XG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXModGhpcy5jb25maWcpLCB0aGVtZU5hbWUsIG51bGwsIHR5cGUsIHRoaXMuY29uZmlnLCBtZWRpYSk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcblxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogY3JlYXRlIGEgbmV3IGlkIGZvciBzdHlsZSB0aGF0IGRvZXMgbm90IDwtPHJlcXVpcmU+LT4gY2hhbmdlcyAqL1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVNYXAsIHN0eWxlcywgdGhlbWVOYW1lLCBuZXdJZCBhcyBzdHJpbmcsIHR5cGUsIHRoaXMuY29uZmlnLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMobmV3SWQpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuc2V0KG5ld0lkLCB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoY3NzKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKTtcbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBlbC5pbm5lclRleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCBlbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKlxuICAgICAgICogYXBwZW5kIGNoaWxkIHN0eWxlIGlmIG5vdCBleGlzdCBpbiBkb21cbiAgICAgICAqIGZvciBzc3IgJiBobXJcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgX2NzcyA9IHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdIHx8IHN0eWxlTWFwLmNzcztcbiAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoISh0aGVtZU5hbWUgaW4gQ0xBU1NFU19NQVApKSB7XG4gICAgICBDTEFTU0VTX01BUFt0aGVtZU5hbWVdID0ge307XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lcjtcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoXG4gIHN0eWxlTWFwOiBTdHlsZU1hcDUsXG4gIHN0eWxlczogU3R5bGVzMixcbiAgdGhlbWVOYW1lOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcsXG4gIHR5cGVTdHlsZTogVHlwZVN0eWxlLFxuICB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gIG1lZGlhPzogc3RyaW5nXG4pIHtcbiAgaWYgKHR5cGVTdHlsZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUpIHtcbiAgICAvLyB1c2UgY3VycmVudCBjbGFzcyBvciBzZXQgbmV3XG4gICAgY29uc3QgY2xhc3NOYW1lID0gc3R5bGVNYXAucmVxdWlyZVVwZGF0ZVxuICAgID8gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IGNyZWF0ZU5leHRDbGFzc0lkKCkpXG4gICAgOiBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA/IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgIDogc3R5bGVNYXAuY2xhc3NlcyA9IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBjc3MgPSBgLiR7Y2xhc3NOYW1lfXske3N0eWxlc319YDtcbiAgICAgIHJldHVybiBtZWRpYSA/IHRvTWVkaWEoY3NzLCBtZWRpYSkgOiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gc3R5bGVUb1N0cmluZyhpZCwgc3R5bGVzLCB0aGVtZVZhcmlhYmxlcywgY2xhc3NOYW1lIGFzIGFueSk7XG4gICAgICByZXR1cm4gcnVsZXM7XG4gICAgfVxuICB9XG4gIC8vIGZvciBtdWx0aXBsZXMgc3R5bGVzXG4gIGNvbnN0IGNsYXNzZXNNYXAgPSBzdHlsZU1hcFt0aGVtZU5hbWVdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVdID0ge30pO1xuICBsZXQgY29udGVudCA9ICcnO1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIC8vIHNldCBuZXcgaWQgaWYgbm90IGV4aXN0XG4gICAgICBjb25zdCBjdXJyZW50Q2xhc3NOYW1lID0ga2V5IGluIGNsYXNzZXNNYXBcbiAgICAgID8gY2xhc3Nlc01hcFtrZXldXG4gICAgICA6IGNsYXNzZXNNYXBba2V5XSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgaS0tLSR7a2V5fS0ke2NyZWF0ZU5leHRDbGFzc0lkKCl9YCkgOiBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyhrZXksIHZhbHVlIGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBjdXJyZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBpcyBzdHJpbmcnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXBsYWNlUmVmcyhjb250ZW50LCBjbGFzc2VzTWFwKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVJlZnMoc3RyOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVGX1JFR19FWFAsIChtYXRjaCwgdG9rZW4pID0+IHtcbiAgICByZXR1cm4gYC4ke2RhdGFbdG9rZW5dfWA7XG4gIH1cbiAgKTtcbn1cblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhrZXk6IHN0cmluZywgb2I6IE9iamVjdCwgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBjdXJyZW50S2V5OiBzdHJpbmcsIHBhcmVudEtleT86IHN0cmluZykge1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgc3ViQ29udGVudCA9ICcnO1xuICBsZXQga2V5QW5kVmFsdWUgPSAnJztcbiAgbGV0IG5ld0tleTtcbiAgaWYgKHBhcmVudEtleSkge1xuICAgIGlmIChjdXJyZW50S2V5LmluZGV4T2YoJyYnKSAhPT0gLTEpIHtcbiAgICAgIG5ld0tleSA9IGN1cnJlbnRLZXkucmVwbGFjZSgvJi9nLCBwYXJlbnRLZXkpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgbmV3S2V5ID0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdLZXkgPSBgJHtwYXJlbnRLZXl9ICR7Y3VycmVudEtleX1gO1xuICAgIH1cbiAgfSBlbHNlIGlmIChrZXkgPT09ICdAZ2xvYmFsJykge1xuICAgIG5ld0tleSA9IGtleTtcbiAgfSBlbHNlIHtcbiAgICBuZXdLZXkgPSBgLiR7Y3VycmVudEtleX1gO1xuICB9XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzdWJDb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoa2V5LCBlbGVtZW50IGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBzdHlsZUtleSwgbmV3S2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdTdHlsZUtleSA9IHRvSHlwaGVuQ2FzZUNhY2hlKHN0eWxlS2V5KTtcbiAgICAgICAgaWYgKG5ld1N0eWxlS2V5LmluZGV4T2YoRGlyQWxpYXMuc3RhcnQpICE9PSAtMSkge1xuICAgICAgICAgIG5ld1N0eWxlS2V5ID0gZGlyQ2FjaGUobmV3U3R5bGVLZXksIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5zdGFydCk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3U3R5bGVLZXkuaW5kZXhPZihEaXJBbGlhcy5lbmQpICE9PSAtMSkge1xuICAgICAgICAgIG5ld1N0eWxlS2V5ID0gZGlyQ2FjaGUobmV3U3R5bGVLZXksIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5lbmQpO1xuICAgICAgICB9XG4gICAgICAgIGtleUFuZFZhbHVlICs9IGAke25ld1N0eWxlS2V5fToke2VsZW1lbnR9O2A7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChrZXlBbmRWYWx1ZSkge1xuICAgIGlmIChuZXdLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgICBrZXlBbmRWYWx1ZSA9IGAke3BhcmVudEtleX17JHtrZXlBbmRWYWx1ZX19YDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudEtleSAmJiBwYXJlbnRLZXkgPT09ICdAZ2xvYmFsJykge1xuICAgICAgY29udGVudCArPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgfVxuICAgIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICB9XG4gIHJldHVybiBjb250ZW50ICsgc3ViQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cbmZ1bmN0aW9uIHRvQ2xhc3NOYW1lVmFsaWQoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgcyA9IHN0ci5yZXBsYWNlKC9eWzAtOV18W15cXHdcXC1dL2csIF8gPT4ge1xuICAgIHJldHVybiBgXyR7Xy5jaGFyQ29kZUF0KDApfWA7XG4gIH0pO1xuICByZXR1cm4gdG9IeXBoZW5DYXNlKHMpO1xufVxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2VDYWNoZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHIgaW4gU1RZTEVfS0VZU19NQVBcbiAgPyBTVFlMRV9LRVlTX01BUFtzdHJdXG4gIDogU1RZTEVfS0VZU19NQVBbc3RyXSA9IHRvSHlwaGVuQ2FzZShzdHIpO1xufVxuXG5jb25zdCBTVFlMRV9LRVlTX0RJUkVDVElPTlNfTUFQID0ge307XG5cbmZ1bmN0aW9uIGRpckNhY2hlKHZhbDogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIGRpckFsaWFzOiBEaXJBbGlhcykge1xuICBjb25zdCBuZXdLZXkgPSB0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb24gKyB2YWw7XG4gIHJldHVybiBuZXdLZXkgaW4gU1RZTEVfS0VZU19ESVJFQ1RJT05TX01BUFxuICA/IFNUWUxFX0tFWVNfRElSRUNUSU9OU19NQVBbbmV3S2V5XVxuICA6IFNUWUxFX0tFWVNfRElSRUNUSU9OU19NQVBbbmV3S2V5XSA9IHZhbC5yZXBsYWNlKGRpckFsaWFzLCB0aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24oZGlyQWxpYXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHRvTWVkaWEoY3NzOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHtjc3N9fWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5leHRDbGFzc0lkKCkge1xuICByZXR1cm4gYGkkeyhuZXh0Q2xhc3NJZCsrKS50b1N0cmluZygzNil9YDtcbn1cblxudHlwZSBJQ2xhc3NlczxUPiA9IFJlY29yZDwoVCBleHRlbmRzICgoLi4uYXJnczogYW55W10pID0+IGFueSkgPyAoa2V5b2YgUmV0dXJuVHlwZTxUPikgOiBrZXlvZiBUKSwgc3RyaW5nPjtcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSwgTmdNb2R1bGUsIEVsZW1lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2V5QXR0cmlidXRlIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIF9uZ1RyYW5zY2x1ZGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IHRlbXBsYXRlUmVmO1xyXG4gICAgICB0aGlzLl92aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbmdUcmFuc2NsdWRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fdmlld1JlZi5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuQE5nTW9kdWxlKHtcclxuICBleHBvcnRzOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVNb2R1bGUge1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pOiBIVE1MRWxlbWVudCB7XHJcbiAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudC5uYXRpdmVFbGVtZW50IDogZWxlbWVudDtcclxufVxyXG4iLCJmdW5jdGlvbiBpc1dpbmRvdyhvYmo6IGFueSkge1xyXG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtOiBhbnkpIHtcclxuICAgIHJldHVybiBpc1dpbmRvdyhlbGVtKSA/IGVsZW0gOiBlbGVtLm5vZGVUeXBlID09PSA5ICYmIGVsZW0uZGVmYXVsdFZpZXc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0UG9zaXRpb24oZWxlbTogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBkb2NFbGVtOiBhbnksIHdpbjogYW55LFxyXG4gICAgICAgIGJveCA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xyXG4gICAgY29uc3QgZG9jID0gZWxlbSAmJiBlbGVtLm93bmVyRG9jdW1lbnQ7XHJcblxyXG4gICAgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB9XHJcbiAgICB3aW4gPSBnZXRXaW5kb3coZG9jKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdG9wOiBib3gudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXHJcbiAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcclxuICAgIH07XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYW55KSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdEVudHJ5KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGRlZmF1bHRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbCc7XG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgXG4gICAgICAgICAgICBbYmddLFxuICAgICAgICAgICAgW2NvbG9yXSxcbiAgICAgICAgICAgIFtyYWlzZWRdLFxuICAgICAgICAgICAgW3JhaXNlZF1bc2hhZG93Q29sb3JdLFxuICAgICAgICAgICAgW2x5LWJ1dHRvbl1bb3V0bGluZWRdLFxuICAgICAgICAgICAgW2VsZXZhdGlvbl0sXG4gICAgICAgICAgICBbZWxldmF0aW9uXVtzaGFkb3dDb2xvcl0sXG4gICAgICAgICAgICBbZGlzYWJsZWRdLFxuICAgICAgICAgICAgbHktY2FyZCxcbiAgICAgICAgICAgIGx5LXRvb2xiYXIsXG4gICAgICAgICAgICBseS1jaGVja2JveFxuICAgICAgICAgICAgYFxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3JhaXNlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfb3V0bGluZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBwcml2YXRlIF9jbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXV0b0NvbnRyYXN0OiBib29sZWFuO1xuICBwcml2YXRlIF9pc0NvbnRyYXN0OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGJnOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICBASW5wdXQoKSBzZXQgcmFpc2VkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9yYWlzZWQgPSB0b0Jvb2xlYW4odmFsKTsgfVxuICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fcmFpc2VkOyB9XG5cbiAgQElucHV0KCkgc2V0IGRpc2FibGVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG5cbiAgQElucHV0KCkgc2V0IG91dGxpbmVkKHZhbDogYm9vbGVhbikgeyB0aGlzLl9vdXRsaW5lZCA9IHRvQm9vbGVhbih2YWwpOyB9XG4gIGdldCBvdXRsaW5lZCgpIHsgcmV0dXJuIHRoaXMuX291dGxpbmVkOyB9XG5cbiAgQElucHV0KCkgZWxldmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNoYWRvd0NvbG9yOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIHB1YmxpYyBzZXRBdXRvQ29udHJhc3QoKSB7XG4gICAgdGhpcy5fYXV0b0NvbnRyYXN0ID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGNvbnN0IF9fYmcgPSB0aGlzLmJnO1xuICAgIGNvbnN0IF9fY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgIGNvbnN0IF9fcmFpc2VkID0gdGhpcy5yYWlzZWQ7XG4gICAgY29uc3QgX19lbGV2YXRpb24gPSB0aGlzLmVsZXZhdGlvbjtcbiAgICBjb25zdCBfX2Rpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICBjb25zdCBfX291dGxpbmVkID0gdGhpcy5vdXRsaW5lZDtcbiAgICBjb25zdCBfX3NoYWRvd0NvbG9yID0gdGhpcy5zaGFkb3dDb2xvcjtcbiAgICBjb25zdCBfX2lzQ29udHJhc3QgPSB0aGlzLl9pc0NvbnRyYXN0ID0gdGhpcy5fYXV0b0NvbnRyYXN0ICYmICFfX2NvbG9yIHx8IF9fY29sb3IgPT09ICdhdXRvJztcbiAgICBjb25zdCBuZXdLZXkgPSBgY29tbW9uLS0tLToke1xuICAgICAgX19iZyB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICBfX2NvbG9yIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgX19yYWlzZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgIF9fZWxldmF0aW9uIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgIF9fZGlzYWJsZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICBfX291dGxpbmVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgICBfX3NoYWRvd0NvbG9yIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgICAgIF9faXNDb250cmFzdCB8fCBERUZBVUxUX1ZBTFVFfWA7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdGhpcy50aGVtZS5hZGRTdHlsZShuZXdLZXksICh0aGVtZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGU6IHtcbiAgICAgICAgYm9yZGVyPzogc3RyaW5nLFxuICAgICAgICBiYWNrZ3JvdW5kPzogc3RyaW5nLFxuICAgICAgICBjb2xvcj86IHN0cmluZyxcbiAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nLFxuICAgICAgICBwb2ludGVyRXZlbnRzPzogJ25vbmUnO1xuICAgICAgICAnJjpob3Zlcic/OiB7XG4gICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgICcmOmFjdGl2ZSc/OiB7XG4gICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nXG4gICAgICAgIH1cbiAgICAgIH0gPSB7fTtcbiAgICAgIGlmIChfX291dGxpbmVkKSB7XG4gICAgICAgIHN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgY3VycmVudENvbG9yJztcbiAgICAgIH1cbiAgICAgIGlmIChfX2Rpc2FibGVkKSB7XG4gICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUudGV4dC5kaXNhYmxlZDtcbiAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgaWYgKF9fYmcpIHtcbiAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuYnV0dG9uLmRpc2FibGVkO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5jb2xvck9mKF9fYmcpO1xuICAgICAgICAgIGlmIChfX2lzQ29udHJhc3QpIHtcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZihgJHtfX2JnfTpjb250cmFzdGApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0eWxlLmNvbG9yICYmIF9fY29sb3IpIHtcbiAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoX19jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9fcmFpc2VkIHx8IF9fZWxldmF0aW9uKSB7XG4gICAgICAgICAgaWYgKCFfX2JnKSB7XG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuYmFja2dyb3VuZC5wcmltYXJ5LmRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckNzcyA9IHN0eWxlLmJhY2tncm91bmQgIT09IF9fYmcgJiYgdGhlbWUuY29sb3JPZihfX2JnIHx8ICdiYWNrZ3JvdW5kOnByaW1hcnknLCAnc2hhZG93Jyk7XG4gICAgICAgICAgY29uc3Qgc2hhZG93Q29sb3IgPSAoX19zaGFkb3dDb2xvciAmJiB0aGVtZS5jb2xvck9mKF9fc2hhZG93Q29sb3IpKSB8fCBiYWNrZ3JvdW5kQ29sb3JDc3MgfHwgc3R5bGUuYmFja2dyb3VuZCB8fCBzdHlsZS5jb2xvciB8fCB0aGVtZS5zaGFkb3c7XG4gICAgICAgICAgc3R5bGUuYm94U2hhZG93ID0gc2hhZG93QnVpbGRlcihfX2VsZXZhdGlvbiB8fCAzLCBzaGFkb3dDb2xvcik7XG4gICAgICAgICAgaWYgKCFfX2VsZXZhdGlvbikge1xuICAgICAgICAgICAgc3R5bGVbJyY6YWN0aXZlJ10gPSB7XG4gICAgICAgICAgICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig4LCBzaGFkb3dDb2xvcilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3R5bGUgYXMgYW55O1xuICAgIH0sIHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX2NsYXNzTmFtZSwgU1RZTEVfUFJJT1JJVFkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t3aXRoQ2xhc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVdpdGhDbGFzcyB7XG5cbiAgQElucHV0KClcbiAgc2V0IHdpdGhDbGFzcyh2YWw6IHN0cmluZykge1xuICAgIGlmICghdmFsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke3ZhbH0nIGlzIG5vdCB2YWxpZCBjbGFzc05hbWVgKTtcbiAgICB9XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeUNvbW1vbiB9IGZyb20gJy4vY29tbW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeVdpdGhDbGFzcyB9IGZyb20gJy4vd2l0aC1jbGFzcy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeUNvbW1vbiwgTHlXaXRoQ2xhc3NdLFxuICBleHBvcnRzOiBbTHlDb21tb24sIEx5V2l0aENsYXNzXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNvbW1vbk1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgTFlfQ09NTU9OX1NUWUxFUyA9IHtcbiAgZmlsbDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgfSxcbiAgdmlzdWFsbHlIaWRkZW46IHtcbiAgICBib3JkZXI6IDAsXG4gICAgY2xpcDogJ3JlY3QoMCAwIDAgMCknLFxuICAgIGhlaWdodDogJzFweCcsXG4gICAgbWFyZ2luOiAnLTFweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcxcHgnLFxuICAgIG91dGxpbmU6IDAsXG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnXG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTHlDb3JlU3R5bGVzIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChMWV9DT01NT05fU1RZTEVTKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIpIHsgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50LCBJbmplY3QsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IEx5Q29yZVN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9jb3JlLXN0eWxlcyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tRXZlbnQgLCAgT2JzZXJ2YWJsZSwgZW1wdHkgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmUsIGF1ZGl0VGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgb3ZlcmxheUJhY2tkcm9wOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm92ZXJsYXlcbiAgfVxufSk7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV2luZG93U2Nyb2xsU2VydmljZSB7XG5cbiAgcHVibGljIHNjcm9sbCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKS5waXBlKFxuICAgICAgICBhdWRpdFRpbWUoMjAwKSxcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICB9KSxcbiAgICAgICAgc2hhcmUoKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JvbGwkID0gZW1wdHkoKTtcbiAgICB9XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5Q29udGFpbmVyIHtcbiAgcHJpdmF0ZSBfY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9pdGVtcyA9IG5ldyBTZXQ8YW55PigpO1xuICBwcml2YXRlIF9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXI6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2x5LW92ZXJsYXktY29udGFpbmVyJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyO1xuICAgIH1cbiAgfVxuICBnZXQgY29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGluc3RhbmNlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIF9hZGQoaXRlbSkge1xuICAgIHRoaXMuX2l0ZW1zLmFkZChpdGVtKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgdGhpcy5fdXBkYXRlKCk7XG4gIH1cblxuICAgIC8qKlxuICAgKiBSZW1vdmUgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX3JlbW92ZShpdGVtKSB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIHRoaXMuX2l0ZW1zLmRlbGV0ZShpdGVtKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc3R5bGVzIGZvciBvdmVybGF5IGNvbnRhaW5lclxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2l0ZW1zLnNpemUpIHtcbiAgICAgIGlmICghdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9jbGFzc2VzLm92ZXJsYXlCYWNrZHJvcCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jbGFzc2VzLm92ZXJsYXlCYWNrZHJvcCk7XG4gICAgICB0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktb3ZlcmxheS1iYWNrZHJvcCcsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlCYWNrZHJvcCB7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLl9vdmVybGF5Q29uZmlnLmZuRGVzdHJveSgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdCgnb3ZlcmxheUNvbmZpZycpIHByaXZhdGUgX292ZXJsYXlDb25maWc6IGFueSxcbiAgICBjb21tb25TdHlsZXM6IEx5Q29yZVN0eWxlc1xuICApIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb21tb25TdHlsZXMuY2xhc3Nlcy5maWxsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERvbVNlcnZpY2Uge1xuICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuICBwcml2YXRlIF92aWV3UmVmOiBWaWV3UmVmO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyXG4gICkgeyB9XG5cbiAgYXR0YWNoPFQ+KF9ob3N0Vmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgY29tcG9uZW50OiBhbnksIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgICBjb25zdCB2aWV3UmVmID0gX2hvc3RWaWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSk7XG4gICAgICB2aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYgPSBfaG9zdFZpZXdDb250YWluZXJSZWY7XG4gICAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IHRoaXMuYWRkQ2hpbGQocm9vdE5vZGUpKTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMub3ZlcmxheUNvbnRhaW5lci5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxuXG4gIGdldERvbUVsZW1lbnRGcm9tQ29tcG9uZW50UmVmKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGRlc3Ryb3lSZWYoY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiwgZGVsYXk6IG51bWJlcikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tU2VydmljZSB9IGZyb20gJy4vZG9tLnNlcnZpY2UnO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gTFlfT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWShwYXJlbnRDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lcikge1xuLy8gICByZXR1cm4gcGFyZW50Q29udGFpbmVyIHx8IG5ldyBMeU92ZXJsYXlDb250YWluZXIoKTtcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSID0ge1xuLy8gICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIE92ZXJsYXlDb250YWluZXIgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbi8vICAgcHJvdmlkZTogTHlPdmVybGF5Q29udGFpbmVyLFxuLy8gICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTHlPdmVybGF5Q29udGFpbmVyXV0sXG4vLyAgIHVzZUZhY3Rvcnk6IExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSX0ZBQ1RPUllcbi8vIH07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRG9tU2VydmljZVxuICAgIC8vIExZX09WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHhEb21Nb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBOZ1pvbmUsIFJlbmRlcmVyMiwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXROYXRpdmVFbGVtZW50IH0gZnJvbSAnLi4vbWluaW1hbC9jb21tb24nO1xuXG5leHBvcnQgZW51bSBGb2N1c1N0YXR1cyB7XG4gIC8qKm1vdXNlIGFuZC9vciB0b3VjaCovXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIC8qKiBrZXlib2FyZCBhbmQvb3IgcHJvZ3JhbSovXG4gIEtFWUJPQVJEID0gJ2tleWJvYXJkJyxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5Rm9jdXNTdGF0ZV0nLFxuICBleHBvcnRBczogJ2x5Rm9jdXNTdGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlRGVwcmVjYXRlZCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHN0YXRlOiBGb2N1c1N0YXR1cztcbiAgc3RhdGVNYXAgPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogRWxlbWVudDtcbiAgcHJpdmF0ZSBfZXZlbnRIYW5kbGVycyA9IG5ldyBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgX3N0YXRlU3ViamVjdCA9IG5ldyBTdWJqZWN0PEZvY3VzU3RhdHVzPigpO1xuICBfc3RhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgQE91dHB1dCgpIGx5Rm9jdXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzU3RhdHVzPigpO1xuICBwcml2YXRlIF9ldmVudE9wdGlvbnMgPSB7cGFzc2l2ZTogdHJ1ZX0gYXMgYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzXG4gICAgICAuc2V0KCdmb2N1cycsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ2JsdXInLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCd0b3VjaHN0YXJ0JywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnbW91c2Vkb3duJywgdGhpcy5vbi5iaW5kKHRoaXMpKTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY29uc3Qgb24gPSAoZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlTWFwLnNldChldmVudC50eXBlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBvYjogT2JzZXJ2YWJsZTxGb2N1c1N0YXR1cz4gPSB0aGlzLl9zdGF0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbiA9IG9iXG4gICAgICAvLyAuZGVib3VuY2VUaW1lKDExMSlcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTExKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZTogRm9jdXNTdGF0dXMpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gICAgICAgIHRoaXMubHlGb2N1c0NoYW5nZS5lbWl0KGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3RhdGUoKSB7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnYmx1cicpKSB7XG4gICAgICB0aGlzLnN0YXRlTWFwLmNsZWFyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygnbW91c2Vkb3duJykgfHwgdGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykgJiYgdGhpcy5zdGF0ZU1hcC5oYXMoJ3RvdWNoc3RhcnQnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5ERUZBVUxUO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykpIHtcbiAgICAgIHN0YXRlID0gRm9jdXNTdGF0dXMuS0VZQk9BUkQ7XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlU3ViamVjdC5uZXh0KHN0YXRlKTtcbiAgfVxuXG4gIG9uKGV2ZW50OiBGb2N1c0V2ZW50IHwgVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnN0YXRlTWFwLnNldChldmVudC50eXBlLCB0cnVlKTtcbiAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRvZ2dsZUNsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nLCBzaG91bGRTZXQ6IGJvb2xlYW4pID0+IHNob3VsZFNldCA/IHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkgOiB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIHRvZ2dsZUNsYXNzKGBseS1mb2N1c2VkYCwgISFzdGF0ZSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gRm9jdXNTdGF0dXMpIHtcbiAgICAgIGlmIChGb2N1c1N0YXR1cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IEZvY3VzU3RhdHVzW2tleV07XG4gICAgICAgIHRvZ2dsZUNsYXNzKGBseS0ke2NsYXNzTmFtZX0tZm9jdXNlZGAsIHN0YXRlID09PSBjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzU3RhdGVJbmZvIHtcbiAgdW5saXN0ZW46ICgpID0+IHZvaWQ7XG4gIHN1YmplY3Q6IFN1YmplY3Q8Rm9jdXNTdGF0ZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXNTdGF0ZSB7XG4gIGV2ZW50OiBGb2N1c0V2ZW50O1xuICBieTogJ2tleWJvYXJkJyB8ICdtb3VzZSc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2VsZW1lbnRNYXAgPSBuZXcgTWFwPEhUTUxFbGVtZW50LCBGb2N1c1N0YXRlSW5mbz4oKTtcbiAgcHJpdmF0ZSBfY3VycmVudEV2ZW50OiAnbW91c2UnIHwgJ2tleWJvYXJkJztcbiAgcHJpdmF0ZSBfcmVtb3ZlR2xvYmFsTGlzdGVuZXJzOiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9jb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cblxuICBsaXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwga2V5RWxlbWVudD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pOiBPYnNlcnZhYmxlPEZvY3VzU3RhdGU+IHwgbnVsbCB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIC8vIHJldHVybiBudWxsIGlmIGl0IGlzIG5vdCBicm93c2VyIHBsYXRmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KTtcbiAgICBjb25zdCBrZXkgPSBrZXlFbGVtZW50ICYmIGdldE5hdGl2ZUVsZW1lbnQoa2V5RWxlbWVudCkgfHwgbmF0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLl9lbGVtZW50TWFwLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudE1hcC5nZXQoa2V5KS5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvY3VzU3RhdGU6IEZvY3VzU3RhdGVJbmZvID0ge1xuICAgICAgdW5saXN0ZW46IG51bGwsXG4gICAgICBzdWJqZWN0OiBuZXcgU3ViamVjdDxGb2N1c1N0YXRlPigpXG4gICAgfTtcbiAgICB0aGlzLl9pbmNyZW1lbnRDb3VudCgpO1xuICAgIGNvbnN0IGZvY3VzTGlzdGVuZXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHRoaXMuX29uKGV2ZW50LCBmb2N1c1N0YXRlLnN1YmplY3QpO1xuICAgIGNvbnN0IGJsdXJMaXN0ZW5lciA9IChldmVudDogRm9jdXNFdmVudCkgPT4gdGhpcy5fb24oZXZlbnQsIGZvY3VzU3RhdGUuc3ViamVjdCk7XG5cbiAgICBmb2N1c1N0YXRlLnVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzTGlzdGVuZXIsIHRydWUpO1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fZWxlbWVudE1hcC5zZXQoa2V5LCBmb2N1c1N0YXRlKTtcblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm9jdXNMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVyTGlzdGVuZXIsIHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBmb2N1c1N0YXRlLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICB1bmxpc3RlbihlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgY29uc3QgZm9jdXNTdGF0ZUluZm8gPSB0aGlzLl9lbGVtZW50TWFwLmdldChnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpKTtcbiAgICBpZiAoZm9jdXNTdGF0ZUluZm8pIHtcbiAgICAgIGZvY3VzU3RhdGVJbmZvLnVubGlzdGVuKCk7XG4gICAgICB0aGlzLl9kZWNyZW1lbnRDb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uKGV2ZW50OiBGb2N1c0V2ZW50LCBzdWJqZWN0OiBTdWJqZWN0PEZvY3VzU3RhdGU+KSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiBzdWJqZWN0Lm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBieTogdGhpcy5fY3VycmVudEV2ZW50IHx8ICdrZXlib2FyZCdcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyT3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzXG4gICAgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0gOiBmYWxzZTtcblxuICAgIGNvbnN0IGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyID0gKCkgPT4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2N1cnJlbnRFdmVudCA9ICdrZXlib2FyZCcpO1xuICAgIGNvbnN0IGRvY3VtZW50TW91c2Vkb3duTGlzdGVuZXIgPSAoKSA9PiB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY3VycmVudEV2ZW50ID0gJ21vdXNlJyk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfSk7XG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2luY3JlbWVudENvdW50KCkge1xuICAgIGlmICgrK3RoaXMuX2NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLl9hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWNyZW1lbnRDb3VudCgpIHtcbiAgICBpZiAoIS0tdGhpcy5fY291bnQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnRNYXAuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy51bmxpc3RlbihlbGVtZW50KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlGb2N1c1N0YXRlRGVwcmVjYXRlZCB9IGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZm9jdXMtc3RhdGUuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUZvY3VzU3RhdGVEZXByZWNhdGVkXSxcbiAgZXhwb3J0czogW0x5Rm9jdXNTdGF0ZURlcHJlY2F0ZWRdXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZU1vZHVsZSB7IH1cbiIsImV4cG9ydCBjb25zdCBBVUlfVkVSU0lPTiA9ICcxLjcuMTEtbmlnaHRseS4yMDE4MTExMi1qb2UwemJoeCc7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMTEtMTJUMDg6MDc6NDguMjExWic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgTFlfSEFNTUVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyT3B0aW9ucz4oJ0xZX0hBTU1FUl9PUFRJT05TJyk7XG5cbmNvbnN0IEhBTU1FUl9HRVNUVVJFU19FVkVOVFMgPSBbXG4gICdzbGlkZScsXG4gICdzbGlkZXN0YXJ0JyxcbiAgJ3NsaWRlZW5kJyxcbiAgJ3NsaWRlcmlnaHQnLFxuICAnc2xpZGVsZWZ0J1xuXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBldmVudHM6IHN0cmluZ1tdID0gSEFNTUVSX0dFU1RVUkVTX0VWRU5UUztcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIGNvbnN0IGhhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gICAgY29uc3QgbWMgPSBuZXcgaGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwgdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHBhbiA9IG5ldyBoYW1tZXIuUGFuKCk7XG4gICAgY29uc3Qgc3dpcGUgPSBuZXcgaGFtbWVyLlN3aXBlKCk7XG4gICAgY29uc3Qgc2xpZGUgPSB0aGlzLl9jcmVhdGVSZWNvZ25pemVyKHBhbiwge2V2ZW50OiAnc2xpZGUnLCB0aHJlc2hvbGQ6IDB9LCBzd2lwZSk7XG5cbiAgICBwYW4ucmVjb2duaXplV2l0aChzd2lwZSk7XG5cbiAgICAvLyBBZGQgY3VzdG9taXplZCBnZXN0dXJlcyB0byBIYW1tZXIgbWFuYWdlclxuICAgIG1jLmFkZChbc3dpcGUsIHBhbiwgc2xpZGVdKTtcbiAgICByZXR1cm4gbWM7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyByZWNvZ25pemVyLCB3aXRob3V0IGFmZmVjdGluZyB0aGUgZGVmYXVsdCByZWNvZ25pemVycyBvZiBIYW1tZXJKUyAqL1xuICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyKGJhc2U6IGFueSwgb3B0aW9uczogYW55LCAuLi5pbmhlcml0YW5jZXM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVjb2duaXplciA9IG5ldyAoYmFzZS5jb25zdHJ1Y3Rvcikob3B0aW9ucyk7XG5cbiAgICBpbmhlcml0YW5jZXMucHVzaChiYXNlKTtcbiAgICBpbmhlcml0YW5jZXMuZm9yRWFjaChpdGVtID0+IHJlY29nbml6ZXIucmVjb2duaXplV2l0aChpdGVtKSk7XG5cbiAgICByZXR1cm4gcmVjb2duaXplcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWVNb2R1bGUge1xuICBzdGF0aWMgc2V0VGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEx5VGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgW0x5VGhlbWUyXSxcbiAgICAgICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogdGhlbWVOYW1lIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVW5kZWZpbmVkIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IFVuZGVmaW5lZFZhbHVlID0gbmV3IFVuZGVmaW5lZCgpO1xuIiwiZXhwb3J0IGVudW0gSW52ZXJ0TWVkaWFRdWVyeSB7XG4gIE5vLFxuICBZZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1lZGlhUXVlcnkobWVkaWE6IHN0cmluZywgaW52ZXJ0TWVkaWFRdWVyeTogSW52ZXJ0TWVkaWFRdWVyeSA9IEludmVydE1lZGlhUXVlcnkuTm8pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gIGlmIChtZWRpYSAmJiBpbnZlcnRNZWRpYVF1ZXJ5ID09PSBJbnZlcnRNZWRpYVF1ZXJ5Llllcykge1xuICAgIGNvbnN0IG5ld1ZhbCA9IG1lZGlhLnNwbGl0KCcsJykubWFwKF8gPT4gYG5vdCAke199YCk7XG4gICAgcmV0dXJuIG5ld1ZhbDtcbiAgfVxuICByZXR1cm4gbWVkaWE7XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIsIEx5T3ZlcmxheUJhY2tkcm9wLCBXaW5kb3dTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW50ZXJmYWNlIE92ZXJsYXlDb25maWcge1xuICBzdHlsZXM6IE9iamVjdDtcbiAgZm5EZXN0cm95PzogKC4uLmFyZykgPT4gdm9pZDtcbiAgaG9zdD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgLyoqIERldGFjaGVzIGEgdmlldyBmcm9tIGRpcnR5IGNoZWNraW5nIGFnYWluIG9mIEFwcGxpY2F0aW9uUmVmLiAgKi9cbiAgZGV0YWNoOiAoKSA9PiB2b2lkO1xuXG4gIC8qKiBSZW1vdmUgZWxlbWVudCBvZiBET00gKi9cbiAgcmVtb3ZlOiAoKSA9PiB2b2lkO1xuXG4gIC8qKiBEZXRhY2ggJiByZW1vdmUgKi9cbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbn1cbmNsYXNzIENyZWF0ZUZyb21UZW1wbGF0ZVJlZiBpbXBsZW1lbnRzIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICBwcml2YXRlIF92aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZWw6IGFueTtcbiAgcHJpdmF0ZSBfY29tcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHByaXZhdGUgX2NvbXBSZWZPdmVybGF5QmFja2Ryb3A6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3aW5kb3dTY3JvbGxTdWI6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIF9jb250ZXh0OiBhbnksXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHdpbmRvd1Njcm9sbDogV2luZG93U2Nyb2xsU2VydmljZSxcbiAgICBjb25maWc/OiBPdmVybGF5Q29uZmlnXG4gICkge1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYgPSBfdGVtcGxhdGVSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KF9jb250ZXh0KTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLl9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2gocm9vdE5vZGUgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3ROb2RlKSk7XG4gICAgY29uc3QgX19zdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgLi4uY29uZmlnLnN0eWxlc1xuICAgIH07XG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiAnb3ZlcmxheUNvbmZpZycsXG4gICAgICAgIHVzZVZhbHVlOiA8T3ZlcmxheUNvbmZpZz57XG4gICAgICAgICAgZm5EZXN0cm95OiB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKSxcbiAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgc3R5bGVzOiBfX3N0eWxlcyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sIHRoaXMuX2luamVjdG9yKTtcblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKF9fc3R5bGVzKTtcbiAgICBpZiAoY29uZmlnLmhvc3QpIHtcbiAgICAgIHRoaXMud2luZG93U2Nyb2xsU3ViID0gd2luZG93U2Nyb2xsLnNjcm9sbCQuc3Vic2NyaWJlKCh2YWwpID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGNvbmZpZy5ob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAocmVjdC50b3AgIT09IF9fc3R5bGVzLnRvcCB8fCByZWN0LmxlZnQgIT09IF9fc3R5bGVzLmxlZnQpIHtcbiAgICAgICAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyhuZXdTdHlsZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCA9IHRoaXMuZ2VuZXJhdGVDb21wb25lbnQoTHlPdmVybGF5QmFja2Ryb3AsIG5ld0luamVjdG9yKTtcbiAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZChiYWNrZHJvcEVsKTtcbiAgICB0aGlzLl9hcHBlbmRDb21wb25lbnRUb0JvZHkoX3RlbXBsYXRlUmVmLCBfY29udGV4dCwgdGhpcy5faW5qZWN0b3IpO1xuXG4gIH1cblxuICB1cGRhdGVTdHlsZXMoX19zdHlsZXMpIHtcbiAgICAvKiogQXBwbHkgc3R5bGVzICovXG4gICAgLyoqIHNldCBzdHlsZXMgKi9cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBfX3N0eWxlcykge1xuICAgICAgaWYgKF9fc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVWYWwgPSBfX3N0eWxlc1trZXldO1xuICAgICAgICBpZiAoc3R5bGVWYWwpIHtcbiAgICAgICAgICB0aGlzLl9lbC5zdHlsZVtrZXldID0gdHlwZW9mIF9fc3R5bGVzW2tleV0gPT09ICdudW1iZXInID8gYCR7c3R5bGVWYWx9cHhgIDogc3R5bGVWYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDb21wb25lbnRUb0JvZHkodHlwZTogVGVtcGxhdGVSZWY8YW55PiB8IFR5cGU8YW55PiwgY29udGV4dCwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnRcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLl92aWV3UmVmID0gdHlwZS5jcmVhdGVFbWJlZGRlZFZpZXcoY29udGV4dCB8fCB7fSk7XG4gICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh2aWV3UmVmKTtcblxuICAgICAgLy8gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XG4gICAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKF8gPT4gdGhpcy5fZWwuYXBwZW5kQ2hpbGQoXykpO1xuXG4gICAgICAvLyBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbXBSZWYgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KHR5cGUsIGluamVjdG9yKTtcbiAgICAgIHRoaXMuX2VsID0gdGhpcy5fY29tcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUNvbXBvbmVudCh0eXBlOiBUeXBlPGFueT4sIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSk7XG4gICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fdmlld1JlZik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICB0aGlzLl92aWV3UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuZGVzdHJveSgpO1xuICAgICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZShiYWNrZHJvcEVsKTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3dTY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3dpbmRvd1Njcm9sbDogV2luZG93U2Nyb2xsU2VydmljZVxuICApIHsgfVxuXG4gIGNyZWF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgY29udGV4dD86IGFueSwgY29uZmlnPzogT3ZlcmxheUNvbmZpZyk6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICAgIHJldHVybiBuZXcgQ3JlYXRlRnJvbVRlbXBsYXRlUmVmKHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdGhpcy5fYXBwUmVmLCB0ZW1wbGF0ZSwgdGhpcy5fb3ZlcmxheUNvbnRhaW5lciwgY29udGV4dCwgdGhpcy5faW5qZWN0b3IsIHRoaXMuX3dpbmRvd1Njcm9sbCwgY29uZmlnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheUJhY2tkcm9wIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5T3ZlcmxheUJhY2tkcm9wXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTHlPdmVybGF5QmFja2Ryb3BdXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBNVVRBVElPTl9PQlNFUlZFUl9JTklUID0ge1xuICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICBjaGlsZExpc3Q6IHRydWUsXG4gIHN1YnRyZWU6IHRydWVcbn07XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE11dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5IHtcbiAgY3JlYXRlKGNhbGxiYWNrOiBNdXRhdGlvbkNhbGxiYWNrKTogTXV0YXRpb25PYnNlcnZlciB8IG51bGwge1xuICAgIHJldHVybiB0eXBlb2YgTXV0YXRpb25PYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEVsZW1lbnRPYnNlcnZlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX29ic2VydmVkRWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX211dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5OiBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeVxuICApIHsgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy5kZXN0cm95KGVsZW1lbnQpKTtcbiAgfVxuXG4gIG9ic2VydmUoZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50PiwgZm46IE11dGF0aW9uQ2FsbGJhY2ssIG9wdGlvbnM/OiBNdXRhdGlvbk9ic2VydmVySW5pdCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50T3JSZWYgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudE9yUmVmLm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50T3JSZWY7XG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLl9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeS5jcmVhdGUoZm4pO1xuICAgICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb3B0aW9ucyB8fCBNVVRBVElPTl9PQlNFUlZFUl9JTklUKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIG9ic2VydmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgT2JzZXJ2ZXJcbiAgICovXG4gIGRlc3Ryb3koZWxlbWVudE9yUmVmOiBFbGVtZW50IHwgRWxlbWVudFJlZjxFbGVtZW50Pikge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50T3JSZWYgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudE9yUmVmLm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50T3JSZWY7XG4gICAgaWYgKHRoaXMuX29ic2VydmVkRWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KS5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFnQixjQUFjLENBQUMsUUFBUTs7SUFDckMsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUM5QyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBQzlDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7SUFDOUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDdkQsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUN6Qzs7Ozs7O0FDTkQ7QUFDQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7O0FBRXZCLE1BQU0scUJBQXFCLEdBQUcsR0FBRyxDQUFDOztBQUNsQyxNQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQzs7QUFDdEMsTUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUM7O0FBQ3hDLE1BQWEsT0FBTyxHQUFHO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxD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