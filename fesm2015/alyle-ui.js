import * as _chroma from 'chroma-js';
import { InjectionToken, Injectable, Optional, Inject, RendererFactory2, ViewEncapsulation, Directive, ElementRef, Input, NgModule, NgZone, Renderer2, Component, HostListener, TemplateRef, ApplicationRef, ComponentFactoryResolver, Injector, isDevMode, ViewContainerRef, defineInjectable, inject, INJECTOR } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject, fromEvent, empty, Subscription, merge } from 'rxjs';
import { HammerGestureConfig } from '@angular/platform-browser';
import { map, share, auditTime } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const THEME_VARIABLES = new InjectionToken('ly.theme.variables');
/** @type {?} */
const IS_CORE_THEME = new InjectionToken('ly.is.root');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */
const hasV8BreakIterator = (typeof (Intl) !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
}
Platform.isBrowser = typeof document === 'object' && !!document;
/**
 * Layout Engines
 */
Platform.EDGE = Platform.isBrowser && /(edge)/i.test(navigator.userAgent);
Platform.TRIDENT = Platform.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
// EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
Platform.BLINK = Platform.isBrowser &&
    (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) && !!CSS && !Platform.EDGE && !Platform.TRIDENT);
// Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
// ensure that Webkit runs standalone and is not used as another engine's base.
Platform.WEBKIT = Platform.isBrowser &&
    /AppleWebKit/i.test(navigator.userAgent) && !Platform.BLINK && !Platform.EDGE && !Platform.TRIDENT;
/**
 * Browsers and Platform Types
 */
Platform.IOS = Platform.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !((/** @type {?} */ (window))).MSStream;
// It's difficult to detect the plain Gecko engine, because most of the browsers identify
// them self as Gecko-like browsers and modify the userAgent's according to that.
// Since we only cover one explicit Firefox case, we can simply check for Firefox
// instead of having an unstable check for Gecko.
Platform.FIREFOX = Platform.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
// Trident on mobile adds the android platform to the userAgent to trick detections.
Platform.ANDROID = Platform.isBrowser && /android/i.test(navigator.userAgent) && !Platform.TRIDENT;
// Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
// this and just place the Safari keyword in the userAgent. To be more safe about Safari every
// Safari browser should also use Webkit as its layout engine.
Platform.SAFARI = Platform.isBrowser && /safari/i.test(navigator.userAgent) && Platform.WEBKIT;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const LY_THEME_GLOBAL_VARIABLES = new InjectionToken('ly.theme.global.variables');
/** @type {?} */
const LY_THEME = new InjectionToken('ly_theme_config');
/** @type {?} */
const LY_THEME_NAME = new InjectionToken('ly.theme.name');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        if (val === DirAlias.start || val === DirAlias.before) {
            return this.direction === 'rtl' ? 'right' : 'left';
        }
        else if (val === DirAlias.end || val === DirAlias.after) {
            return this.direction === 'rtl' ? 'left' : 'right';
        }
        else {
            return val;
        }
    }
}
/** @enum {string} */
const Dir = {
    rtl: 'rtl',
    ltr: 'ltr',
};
/** @enum {string} */
const DirAlias = {
    /** @deprecated, use `before` instead */
    start: 'start',
    /** @deprecated, use `after` instead */
    end: 'end',
    before: 'before',
    after: 'after',
};
/** @enum {string} */
const DirPosition = {
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
            return (/** @type {?} */ (path));
        }
    }
    if (typeof obj === 'string') {
        return (/** @type {?} */ (obj));
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    ((/** @type {?} */ (_document.body))).removeChild(element);
                }
            }
        }
        this.firstElement = _document.body.firstChild;
        if (Array.isArray(themeConfig)) {
            themeConfig.forEach(item => {
                if (globalVariables) {
                    mergeDeep(item, globalVariables);
                }
                this.add((/** @type {?} */ (item)));
                this.themes.add(item.name);
            });
        }
        else {
            if (globalVariables) {
                mergeDeep(themeConfig, globalVariables);
            }
            this.add((/** @type {?} */ (themeConfig)));
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
const YPosition = {
    above: 'above',
    below: 'below',
};
/** @enum {string} */
const XPosition = {
    before: 'before',
    after: 'after',
    left: 'left',
    right: 'right',
};
/**
 * @param {?} placement
 * @param {?} xPosition
 * @param {?} yPosition
 * @param {?} origin
 * @param {?} overlayElement
 * @param {?} themeVariables
 * @param {?=} offset
 * @return {?}
 */
function getPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset = 0) {
    /** @type {?} */
    const originRect = (/** @type {?} */ (origin.getBoundingClientRect()));
    /** @type {?} */
    const overlayElementRect = (/** @type {?} */ (overlayElement.getBoundingClientRect()));
    if (xPosition && yPosition) {
        throw new Error(`You can not use \`xPosition\` and \`yPosition\` together, use only one of them.`);
    }
    if ((xPosition || yPosition) && !placement) {
        throw new Error(`\`placement\` is required.`);
    }
    /** @type {?} */
    let x = 0;
    /** @type {?} */
    let y = 0;
    /** @type {?} */
    let ox = 'center';
    /** @type {?} */
    let oy = 'center';
    if (placement || xPosition || yPosition) {
        if (placement) {
            if (placement === YPosition.above) {
                x = (originRect.width - overlayElementRect.width) / 2;
                y = -overlayElementRect.height - offset;
                oy = 'bottom';
            }
            else if (placement === YPosition.below) {
                x = (originRect.width - overlayElementRect.width) / 2;
                y = originRect.height + offset;
                oy = 'top';
            }
            else {
                /** @type {?} */
                const dir = themeVariables.getDirection((/** @type {?} */ (placement)));
                if (dir === DirPosition.left) {
                    ox = '100%';
                    x = -overlayElementRect.width - offset;
                    y = (originRect.height - overlayElementRect.height) / 2;
                }
                else if (dir === DirPosition.right) {
                    ox = '0%';
                    x = originRect.width + offset;
                    y = (originRect.height - overlayElementRect.height) / 2;
                }
            }
        }
        if (xPosition) {
            /** @type {?} */
            const dir = themeVariables.getDirection((/** @type {?} */ (xPosition)));
            if (dir === DirPosition.right) {
                ox = '0%';
                x = 0;
            }
            else if (dir === DirPosition.left) {
                ox = '100%';
                x = originRect.width - overlayElementRect.width;
            }
        }
        else if (yPosition) {
            if (yPosition === YPosition.above) {
                y = 0;
                oy = '0%';
            }
            else if (yPosition === YPosition.below) {
                y = originRect.height - overlayElementRect.height;
                oy = '100%';
            }
        }
    }
    return {
        x: Math.round(x),
        y: Math.round(y),
        ox,
        oy
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
const TypeStyle = {
    Multiple: 0,
    OnlyOne: 1,
};
TypeStyle[TypeStyle.Multiple] = 'Multiple';
TypeStyle[TypeStyle.OnlyOne] = 'OnlyOne';
/** @type {?} */
const STYLE_MAP5 = new Map();
/** @type {?} */
let nextClassId = 0;
/** @type {?} */
let nextKeyFrameId = 0;
class StylesInDocument {
    constructor() {
        this.styles = {};
        this.styleContainers = new Map();
        this.styleElementGlobalMap = new Map();
    }
}
StylesInDocument.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ StylesInDocument.ngInjectableDef = defineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
/** @type {?} */
const THEME_MAP = new Map();
class LyTheme2 {
    /**
     * @param {?} stylesInDocument
     * @param {?} core
     * @param {?} themeName
     * @param {?} _document
     * @param {?} _ngZone
     */
    constructor(stylesInDocument, core, themeName, _document, _ngZone) {
        this.stylesInDocument = stylesInDocument;
        this.core = core;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementsMap = new Map();
        this.themeMap = THEME_MAP;
        /**
         * ssr or hmr
         */
        this.isDevOrServer = isDevMode() || !Platform.isBrowser;
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
            this.elements = themeName in this.stylesInDocument.styles
                ? this.stylesInDocument.styles[themeName]
                : this.stylesInDocument.styles[themeName] = new Map();
            if (!this.initialTheme) {
                this.initialTheme = this.config.name;
            }
            if (!this.themeMap.has(this.initialTheme)) {
                this.themeMap.set(this.initialTheme, {
                    base: this.initialTheme,
                    change: null
                });
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
     * @param {?=} parentStyle
     * @return {?}
     */
    addStyle(id, style, el, instance, priority, parentStyle) {
        /** @type {?} */
        const newClass = (/** @type {?} */ (this._createStyleContent2((/** @type {?} */ (style)), id, priority, TypeStyle.OnlyOne, false, parentStyle)));
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
            this.themeMap.get(this.initialTheme).change = nam;
            this.config = this.core.get(nam);
            this._updateAllStyles();
        }
    }
    /**
     * Toggle right-to-left/left-to-right
     * @return {?}
     */
    toggleDirection() {
        /** @type {?} */
        const current = this.config.direction;
        this.config.direction = current === Dir.ltr ? Dir.rtl : Dir.ltr;
        this._updateAllStyles();
    }
    /**
     * @return {?}
     */
    _updateAllStyles() {
        this.elements.forEach((_, key) => {
            /** @type {?} */
            const styleData = STYLE_MAP5.get(key);
            if (styleData.requireUpdate) {
                this._createStyleContent2(styleData.styles, styleData.id, styleData.priority, styleData.type, true, styleData.parentStyle);
            }
        });
    }
    /**
     * Create a simple style
     * return className
     * @param {?} id id of style
     * @param {?} css style object or string
     * @param {?=} priority style priority
     * @return {?}
     */
    addSimpleStyle(id, css, priority) {
        return (/** @type {?} */ (this._createStyleContent2((/** @type {?} */ (css)), id, priority, TypeStyle.OnlyOne, false)));
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
     * @param {?=} priority priority for style
     * @return {?}
     */
    addStyleSheet(styles, priority) {
        return this._createStyleContent2(styles, null, priority, TypeStyle.Multiple);
    }
    /**
     * @param {?} styles
     * @param {?} id
     * @param {?} priority
     * @param {?} type
     * @param {?=} forChangeTheme
     * @param {?=} parentStyle
     * @return {?}
     */
    _createStyleContent2(styles, id, priority, type, forChangeTheme, parentStyle) {
        /** @type {?} */
        const newId = (/** @type {?} */ (id)) || styles;
        /** @type {?} */
        let isNewStyle;
        if (!STYLE_MAP5.has(newId)) {
            isNewStyle = true;
            STYLE_MAP5.set(newId, {
                priority,
                styles,
                type,
                css: {},
                id,
                parentStyle
            });
        }
        /** @type {?} */
        const styleMap = STYLE_MAP5.get(newId);
        /** @type {?} */
        const themeName = this.initialTheme;
        /** @type {?} */
        const isCreated = isNewStyle || !(styleMap.classes || styleMap[themeName]);
        if (isCreated || forChangeTheme) {
            /**
             * create new style for new theme
             * @type {?}
             */
            let css;
            /** @type {?} */
            const themeMap = this.themeMap.get(this.initialTheme);
            /** @type {?} */
            const config = this.core.get(themeMap.change || themeName);
            if (typeof styles === 'function') {
                styleMap.requireUpdate = true;
                css = groupStyleToString(styleMap, styles(config), themeName, id, type, config);
                if (!forChangeTheme) {
                    styleMap.css[themeName] = css;
                }
            }
            else {
                /** create a new id for style that does not <-<require>-> changes */
                css = groupStyleToString(styleMap, styles, themeName, (/** @type {?} */ (newId)), type, config);
                styleMap.css = css;
            }
            if (!this.elements.has(newId)) {
                /** @type {?} */
                const newEl = this._createElementStyle(css);
                if (styleMap.requireUpdate) {
                    // This is required for when a theme changes
                    this.elements.set(newId, newEl);
                }
                else if (this.isDevOrServer) {
                    // in dev mode or server it is not necessary
                    // since the styles will not change
                    this.stylesInDocument.styleElementGlobalMap.set(newId, newEl);
                }
                this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), newEl);
            }
            if (forChangeTheme) {
                /** @type {?} */
                const el = this.elements.get(newId);
                el.innerText = css;
            }
        }
        else if (this.isDevOrServer) {
            /**
             * append child style if not exist in dom
             * for ssr or hmr
             */
            if (!this.elements.has(newId)) {
                /** @type {?} */
                const _css = styleMap.css[themeName] || styleMap.css;
                /** @type {?} */
                const map$$1 = this.stylesInDocument.styleElementGlobalMap;
                if (styleMap.requireUpdate) {
                    this.elements.set(newId, this._createElementStyle(_css));
                    this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), this.elements.get(newId));
                }
                else if (!map$$1.has(newId)) {
                    map$$1.set(newId, this._createElementStyle(_css));
                    this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), map$$1.get(newId));
                }
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
     * @param {?} fn
     * @return {?}
     */
    requestAnimationFrame(fn) {
        if (typeof requestAnimationFrame === 'function') {
            this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => {
                    fn();
                });
            });
        }
        else {
            fn();
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
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
/**
 * @param {?} styleMap
 * @param {?} styles
 * @param {?} themeName
 * @param {?} id
 * @param {?} typeStyle
 * @param {?} themeVariables
 * @return {?}
 */
function groupStyleToString(styleMap, styles, themeName, id, typeStyle, themeVariables) {
    // for styles type string
    if (typeStyle === TypeStyle.OnlyOne) {
        // use current class or set new
        /** @type {?} */
        const className = styleMap.requireUpdate
            ? styleMap[themeName] || (styleMap[themeName] = createNextClassId())
            : styleMap.classes
                ? styleMap.classes
                : styleMap.classes = createNextClassId();
        /** @type {?} */
        let rules;
        if (typeof styles === 'string') {
            rules = `.${className}{${styles}}`;
        }
        else {
            rules = styleToString(id, null, styles, themeVariables, (/** @type {?} */ (className)));
        }
        if (styleMap.parentStyle) {
            /** @type {?} */
            const styleMapOfParentStyle = STYLE_MAP5.get(styleMap.parentStyle);
            return replaceRefs(rules, styleMapOfParentStyle[themeName]);
        }
        return rules;
    }
    // for multiples styles
    /** @type {?} */
    const classesMap = styleMap[themeName] || (styleMap[themeName] = {});
    /** @type {?} */
    let content = '';
    /** @type {?} */
    const name = styles.$name ? `${styles.$name}-` : '';
    for (const key in styles) {
        if (styles.hasOwnProperty(key)) {
            /** @type {?} */
            const value = styles[key];
            if (key === '$keyframes') {
                content += keyframesToString(name, classesMap, (/** @type {?} */ (value)), themeVariables);
            }
            else if (typeof value === 'object' || value === null) {
                // set new id if not exist
                /** @type {?} */
                const currentClassName = key in classesMap
                    ? classesMap[key]
                    : classesMap[key] = isDevMode() ? toClassNameValid(`y-${name}${key}-${createNextClassId()}`) : createNextClassId();
                /** @type {?} */
                const style = styleToString(key, styles.$name, (/** @type {?} */ (value)), themeVariables, currentClassName);
                content += style;
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
        /** @type {?} */
        const className = data[token];
        if (className) {
            return `.${data[token]}`;
        }
        else {
            return data[`@г.->-${token}`];
        }
    });
}
/**
 * {color:'red'} to .className{color: red}
 * @param {?} key
 * @param {?} $name
 * @param {?} ob
 * @param {?} themeVariables
 * @param {?} currentKey
 * @param {?=} parentKey
 * @return {?}
 */
function styleToString(key, $name, ob, themeVariables, currentKey, parentKey) {
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
            // Omit style with value null
            if (element != null) {
                // Check if is Object literal
                if (element.constructor === Object) {
                    subContent += styleToString(key, $name, (/** @type {?} */ (element)), themeVariables, styleKey, newKey);
                }
                else {
                    keyAndValue += convertToStyleValue(styleKey, element, themeVariables);
                }
            }
        }
    }
    if (keyAndValue) {
        if (isDevMode()) {
            /** @type {?} */
            let lin = '\n\n';
            if ($name) {
                lin += `/** Style Sheet name: ${$name} */\n`;
            }
            lin += `/** Style Key: ${key} */\n`;
            content += `${lin}`;
        }
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
 * @param {?} key
 * @param {?} value
 * @param {?} themeVariables
 * @return {?}
 */
function convertToStyleValue(key, value, themeVariables) {
    /** @type {?} */
    const newStyleKey = converterToCssKeyAndStyleCache(key, themeVariables);
    if (value.constructor === Array) {
        /** @type {?} */
        let lin = '';
        for (let index = 0; index < value.length; index++) {
            lin += `${newStyleKey}:${value[index]};`;
        }
        return lin;
    }
    else {
        return `${newStyleKey}:${value};`;
    }
}
/**
 * @param {?} styleName
 * @param {?} keysMap
 * @param {?} keyframes
 * @param {?} themeVariables
 * @return {?}
 */
function keyframesToString(styleName, keysMap, keyframes, themeVariables) {
    /** @type {?} */
    let content = '';
    for (const name in keyframes) {
        if (keyframes.hasOwnProperty(name)) {
            /** @type {?} */
            const keyframe = keyframes[name];
            // Sometimes the name of a class can be the same as the name of a keyframe,
            // so we add a character to be different
            /** @type {?} */
            const newUniqueName = `@г.->-${name}`;
            // set new id if not exist
            /** @type {?} */
            const newName = newUniqueName in keysMap
                ? keysMap[newUniqueName]
                : keysMap[newUniqueName] = isDevMode() ? toClassNameValid(`${styleName}${name}-${createNextKeyframeId()}-v`) : createNextKeyframeId();
            content += `@keyframes ${newName}{`;
            for (const percent in keyframe) {
                if (keyframe.hasOwnProperty(percent)) {
                    content += `${percent}%{`;
                    /** @type {?} */
                    const styles = keyframe[percent];
                    for (const key in styles) {
                        if (styles.hasOwnProperty(key)) {
                            /** @type {?} */
                            const val = styles[key];
                            content += convertToStyleValue(key, (/** @type {?} */ (val)), themeVariables);
                        }
                    }
                    content += `}`;
                }
            }
            content += `}`;
        }
    }
    return content;
}
/**
 * @param {?} str
 * @param {?} key
 * @param {?} to
 * @return {?}
 */
function warnDeprecatedKeyStyle(str, key, to) {
    console.warn(`Style key \`${key}\` deprecated for \`${str}\`, change \`${key}\` to \`${to}\`\n`);
}
/**
 * @param {?} str
 * @param {?} themeVariables
 * @return {?}
 */
function converterToCssKeyAndStyle(str, themeVariables) {
    /** @type {?} */
    const hyphenCase = toHyphenCase(str);
    if (hyphenCase.indexOf(DirAlias.start) !== -1) {
        warnDeprecatedKeyStyle(str, DirAlias.start, DirAlias.before);
        return dirCache(str, hyphenCase, themeVariables, DirAlias.start);
    }
    else if (hyphenCase.indexOf(DirAlias.end) !== -1) {
        warnDeprecatedKeyStyle(str, DirAlias.end, DirAlias.after);
        return dirCache(str, hyphenCase, themeVariables, DirAlias.end);
    }
    else if (hyphenCase.indexOf(DirAlias.before) !== -1) {
        return dirCache(str, hyphenCase, themeVariables, DirAlias.before);
    }
    else if (hyphenCase.indexOf(DirAlias.after) !== -1) {
        return dirCache(str, hyphenCase, themeVariables, DirAlias.after);
    }
    else if (hyphenCase.indexOf(YPosition.above) !== -1) {
        return YPositionCache(str, hyphenCase, themeVariables, YPosition.above, TOP);
    }
    else if (hyphenCase.indexOf(YPosition.below) !== -1) {
        return YPositionCache(str, hyphenCase, themeVariables, YPosition.below, BOTTOM);
    }
    return hyphenCase;
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
function toHyphenCase(str) {
    return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}
/**
 * @param {?} str
 * @param {?} themeVariables
 * @return {?}
 */
function converterToCssKeyAndStyleCache(str, themeVariables) {
    /** @type {?} */
    const map$$1 = STYLE_KEYS_MAP[themeVariables.direction];
    return str in map$$1
        ? map$$1[str]
        : map$$1[str] = converterToCssKeyAndStyle(str, themeVariables);
}
/** @type {?} */
const ignoreCSSKEY = {
    'break-after': 'break-after',
    'break-before': 'break-before',
    'page-break-after': 'page-break-after',
    'page-break-before': 'page-break-before'
};
/** @type {?} */
const STYLE_KEYS_MAP = {
    rtl: Object.assign({}, ignoreCSSKEY),
    ltr: Object.assign({}, ignoreCSSKEY)
};
/** @type {?} */
const BOTTOM = 'bottom';
/** @type {?} */
const TOP = 'top';
/**
 * @param {?} original
 * @param {?} val
 * @param {?} themeVariables
 * @param {?} dirAlias
 * @return {?}
 */
function dirCache(original, val, themeVariables, dirAlias) {
    /** @type {?} */
    const map$$1 = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map$$1[original] = val.replace(dirAlias, themeVariables.getDirection(dirAlias));
}
/**
 * @param {?} original
 * @param {?} val
 * @param {?} themeVariables
 * @param {?} pos
 * @param {?} to
 * @return {?}
 */
function YPositionCache(original, val, themeVariables, pos, to) {
    /** @type {?} */
    const map$$1 = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map$$1[original] = val.replace(pos, to);
}
/**
 * @param {?} str
 * @return {?}
 */
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}
/**
 * @return {?}
 */
function createNextClassId() {
    return `i${(nextClassId++).toString(36)}`;
}
/**
 * @return {?}
 */
function createNextKeyframeId() {
    return `k${(nextKeyFrameId++).toString(36)}`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        else {
            this._ngTransclude = null;
            this._viewRef.clear();
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE = '';
/** @type {?} */
const STYLE_PRIORITY = -1;
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinStyleUpdater(base) {
    return class extends base {
        /**
         * @return {?}
         */
        setAutoContrast() {
            this._autoContrast = true;
        }
        /**
         * @param {?} element
         * @return {?}
         */
        updateStyle(element) {
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
            const __isContrast = this._autoContrast && !__color || __color === 'auto';
            /** @type {?} */
            const newKey = `common----:${__bg || DEFAULT_VALUE}·${__color || DEFAULT_VALUE}·${__raised || DEFAULT_VALUE}·${__elevation || DEFAULT_VALUE}·${__disabled || DEFAULT_VALUE}·${__outlined || DEFAULT_VALUE}·${__shadowColor || DEFAULT_VALUE}·${__isContrast || DEFAULT_VALUE}`;
            this._classNameAnonymous = this._theme.addStyle(newKey, (theme) => {
                /** @type {?} */
                const style = {};
                if (__outlined) {
                    style.border = '1px solid currentColor';
                }
                if (__disabled) {
                    style.color = theme.text.disabled;
                    style.pointerEvents = 'none';
                    if (__bg) {
                        style.background = theme.disabled.default;
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
                return (/** @type {?} */ (style));
            }, getNativeElement(element), this._classNameAnonymous, STYLE_PRIORITY);
        }
        /**
         * @param {...?} args
         */
        constructor(...args) { super(...args); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class RippleRef {
    constructor() {
        this.state = true;
        this.timestamp = -Date.now();
        this.container = document.createElement('span');
    }
    /**
     * @return {?}
     */
    end() {
        this.state = false;
        this.timestamp += Date.now();
    }
}
class Ripple {
    /**
     * @param {?} _themeVariables
     * @param {?} _ngZone
     * @param {?} classes
     * @param {?} _containerElement
     * @param {?=} _triggerElement
     */
    constructor(_themeVariables, _ngZone, classes, _containerElement, _triggerElement) {
        this._themeVariables = _themeVariables;
        this._ngZone = _ngZone;
        this.classes = classes;
        this._containerElement = _containerElement;
        this._triggerElement = _triggerElement;
        this._eventHandlers = new Map();
        this.config = {};
        this._transitionDuration = this._themeVariables.ripple.duration;
        this._eventOptions = (/** @type {?} */ ({ passive: true }));
        if (Platform.isBrowser) {
            if (typeof PointerEvent === 'function' && typeof TouchEvent === 'function') {
                this._eventHandlers.set('pointerdown', this.onPointerDown.bind(this));
            }
            else {
                this._eventHandlers.set('mousedown', this.onPointerDown.bind(this));
            }
            this._eventHandlers.set('touchend', this.onPointerLeave.bind(this));
            this._eventHandlers.set('touchcancel', this.onPointerLeave.bind(this));
            this._eventHandlers.set('mouseup', this.onPointerLeave.bind(this));
            this._eventHandlers.set('mouseleave', this.onPointerLeave.bind(this));
            if (!_triggerElement) {
                _triggerElement = _containerElement;
            }
            this.setTriggerElement(_triggerElement);
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        this.config = config;
    }
    /**
     * @return {?}
     */
    get _rectContainer() {
        return this._containerElement.getBoundingClientRect();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    setTriggerElement(element) {
        if (element) {
            // element.classList.add(this.stylesData[0]);
            // this._renderer.addClass(element, this.stylesData[0].id);
            this._ngZone.runOutsideAngular(() => {
                this._eventHandlers.forEach((fn, type) => element.addEventListener(type, fn, this._eventOptions));
            });
        }
        this._triggerElement = element;
    }
    /**
     * @param {?} styles
     * @return {?}
     */
    createRipple(styles) {
        this._rippleRef = new RippleRef();
        /** @type {?} */
        const container = this._rippleRef.container;
        container.className = this.classes.rippleContainer;
        for (const key in styles) {
            if (styles.hasOwnProperty(key)) {
                /** @type {?} */
                const element = styles[key];
                if (typeof element === 'number') {
                    container.style[key] = `${element}px`;
                }
                else {
                    container.style[key] = element;
                }
            }
        }
        this._containerElement.appendChild(container);
        window.getComputedStyle(container).getPropertyValue('opacity');
        container.style.transform = `scale(1)`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPointerDown(event) {
        if (!this.config.disabled) {
            /**Destroy previous ripple if exist */
            this.endRipple();
            this.startRipple(event, this.config);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPointerLeave(event) {
        if (!this.config.disabled) {
            this.endRipple();
        }
    }
    /**
     * @param {?} event
     * @param {?} rippleConfig
     * @return {?}
     */
    startRipple(event, rippleConfig) {
        /** @type {?} */
        const containerRect = this._rectContainer;
        /** @type {?} */
        let x = event.clientX;
        /** @type {?} */
        let y = event.clientY;
        if (rippleConfig.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        /** @type {?} */
        const left = x - containerRect.left;
        /** @type {?} */
        const top = y - containerRect.top;
        /** @type {?} */
        let radius = rippleConfig.radius === 'containerSize' ? maxSize(containerRect) / 2 : rippleConfig.radius || rippleRadius(x, y, containerRect);
        if (rippleConfig.percentageToIncrease) {
            radius += radius * rippleConfig.percentageToIncrease / 100;
        }
        this.createRipple({
            left: left - radius,
            top: top - radius,
            width: radius * 2,
            height: radius * 2,
            transitionDuration: `${this._transitionDuration}ms`
        });
    }
    /**
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    runTimeoutOutsideZone(fn, delay = 0) {
        this._ngZone.runOutsideAngular(() => setTimeout(fn, delay));
    }
    /**
     * @return {?}
     */
    endRipple() {
        /** @type {?} */
        const rippleRef = this._rippleRef || null;
        /** @type {?} */
        const duration = this._transitionDuration;
        if (rippleRef && rippleRef.state) {
            rippleRef.end();
            this.runTimeoutOutsideZone(() => {
                rippleRef.container.style.opacity = '0';
                rippleRef.container.style.transitionDuration = `${this._transitionDuration / 5}ms`;
                // }, rippleRef.timestamp < duration ? duration : 0);
                // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) : 0);
            }, rippleRef.timestamp < duration ? duration * .15 : 0);
            this.runTimeoutOutsideZone(() => {
                rippleRef.container.parentNode.removeChild(rippleRef.container);
                // }, rippleRef.timestamp < duration ? duration * 2 : duration);
                // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) * 2 : duration);
            }, rippleRef.timestamp < duration ? duration * 2 : duration);
        }
    }
    /**
     * @return {?}
     */
    removeEvents() {
        if (this._triggerElement) {
            this._eventHandlers.forEach((fn, type) => {
                this._triggerElement.removeEventListener(type, fn, this._eventOptions);
            });
        }
    }
}
/**
 * @param {?} x
 * @param {?} y
 * @param {?} rect
 * @return {?}
 */
function rippleRadius(x, y, rect) {
    /** @type {?} */
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    /** @type {?} */
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}
/**
 * @param {?} rect
 * @return {?}
 */
function maxSize(rect) {
    return Math.max(rect.width, rect.height);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const styles = (theme) => ({
    rippleContainer: {
        position: 'absolute',
        width: '2px',
        height: '2px',
        background: 'currentColor',
        opacity: '.2',
        borderRadius: '50%',
        transform: 'scale(0)',
        transition: `opacity ${theme.ripple.transition.opacity},transform ${theme.ripple.transition.transform}`,
        pointerEvents: 'none'
    },
    container: Object.assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' })
});
class LyRippleService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles);
    }
}
LyRippleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyRippleService.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyRippleService.ngInjectableDef = defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(inject(LyTheme2)); }, token: LyRippleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisableRipple(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._rippleConfig = {};
            this._disableRipple = null;
        }
        /**
         * @return {?}
         */
        get disableRipple() { return this._disableRipple; }
        /**
         * @param {?} val
         * @return {?}
         */
        set disableRipple(val) {
            if (Platform.isBrowser && val !== this._disableRipple) {
                /** @type {?} */
                const newVal = this._disableRipple = toBoolean(val);
                // remove previous ripple if exist
                this._removeRippleEvents();
                if (!newVal) {
                    // add ripple
                    Promise.resolve(null).then(() => {
                        /** @type {?} */
                        const rippleContainer = this._rippleContainer.nativeElement;
                        /** @type {?} */
                        const triggerElement = this._triggerElement.nativeElement;
                        this._ripple = new Ripple(this._theme.config, this._ngZone, this._theme.addStyleSheet(styles), rippleContainer, triggerElement);
                        this._ripple.setConfig(this._rippleConfig);
                    });
                }
            }
        }
        /**
         * @return {?}
         */
        _removeRippleEvents() {
            if (Platform.isBrowser) {
                if (this._ripple) {
                    this._ripple.removeEvents();
                    this._ripple = null;
                }
            }
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisabled(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disabled = false;
        }
        /**
         * @return {?}
         */
        get disabled() { return this._disabled; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disabled(value) { this._disabled = toBoolean(value); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_COLOR = 'primary';
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinColor(base) {
    return class extends base {
        /**
         * @return {?}
         */
        get color() { return this._color; }
        /**
         * @param {?} val
         * @return {?}
         */
        set color(val) {
            /** @type {?} */
            const defaultColor = val || DEFAULT_COLOR;
            if (defaultColor !== this.color) {
                this._color = defaultColor;
            }
        }
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_BG = 'primary';
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinBg(base) {
    return class extends base {
        /**
         * @return {?}
         */
        get bg() { return this._bg; }
        /**
         * @param {?} val
         * @return {?}
         */
        set bg(val) {
            /** @type {?} */
            const defaultColor = val || DEFAULT_BG;
            if (defaultColor !== this.bg) {
                this._bg = defaultColor;
            }
        }
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinRaised(base) {
    return class extends base {
        /**
         * @return {?}
         */
        get raised() { return this._raised; }
        /**
         * @param {?} value
         * @return {?}
         */
        set raised(value) { this._raised = toBoolean(value); }
        /**
         * @param {...?} args
         */
        constructor(...args) { super(...args); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinOutlined(base) {
    return class extends base {
        /**
         * @return {?}
         */
        get outlined() { return this._outlined; }
        /**
         * @param {?} value
         * @return {?}
         */
        set outlined(value) { this._outlined = toBoolean(value); }
        /**
         * @param {...?} args
         */
        constructor(...args) { super(...args); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinElevation(base) {
    return class extends base {
        /**
         * @return {?}
         */
        get elevation() { return this._elevation; }
        /**
         * @param {?} value
         * @return {?}
         */
        set elevation(value) { this._elevation = value; }
        /**
         * @param {...?} args
         */
        constructor(...args) { super(...args); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinShadowColor(base) {
    return class extends base {
        /**
         * @return {?}
         */
        get shadowColor() { return this._shadowColor; }
        /**
         * @param {?} value
         * @return {?}
         */
        set shadowColor(value) { this._shadowColor = value; }
        /**
         * @param {...?} args
         */
        constructor(...args) { super(...args); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_BG$1 = 'paper';
class LyPaperBase {
    /**
     * @param {?} _theme
     * @param {?} _ngZone
     */
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
/** @type {?} */
const LyPaperMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyPaperBase))))))));
class LyPaper extends LyPaperMixinBase {
    /**
     * @param {?} theme
     * @param {?} ngZone
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(theme, ngZone, _el, _renderer) {
        super(theme, ngZone);
        this._el = _el;
        this._renderer = _renderer;
        this.setAutoContrast();
        this._triggerElement = this._el;
        this._rippleContainer = this._el;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set hasText(val) {
        this._hasText = toBoolean(val);
    }
    /**
     * @return {?}
     */
    get hasText() {
        return this._hasText;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.bg && !this.hasText) {
            this.bg = DEFAULT_BG$1;
            this.updateStyle(this._el);
            this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyPaper', ({
                display: 'block'
            })));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeRippleEvents();
    }
}
LyPaper.decorators = [
    { type: Directive, args: [{
                selector: `ly-paper, [ly-paper], [ly-text]`,
                inputs: [
                    'bg',
                    'flat',
                    'color',
                    'raised',
                    'outlined',
                    'elevation',
                    'shadowColor',
                    'disableRipple'
                ]
            },] }
];
/** @nocollapse */
LyPaper.ctorParameters = () => [
    { type: LyTheme2 },
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 }
];
LyPaper.propDecorators = {
    hasText: [{ type: Input, args: ['ly-text',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyCommonModule {
}
LyCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LyWithClass, LyPaper],
                exports: [LyWithClass, LyPaper]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        if (!Platform.isBrowser) {
            return;
        }
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const AUI_VERSION = '1.9.5';
/** @type {?} */
const AUI_LAST_UPDATE = '2018-12-11T23:23:33.217Z';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
/** @type {?} */
const HAMMER_GESTURES_EVENTS = [
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft',
    'slidecancel'
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
        const hammer = typeof window !== 'undefined' ? ((/** @type {?} */ (window))).Hammer : null;
        /** @type {?} */
        const mc = new hammer(element, this._hammerOptions || {});
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class Undefined {
    constructor() { }
}
/** @type {?} */
const UndefinedValue = new Undefined();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {number} */
const InvertMediaQuery = {
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const styles$1 = (theme) => ({
    overlayBackdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: theme.zIndex.overlay,
        pointerEvents: 'none'
    }
});
class WindowScrollService {
    /**
     * @param {?} document
     * @param {?} ngZone
     */
    constructor(document, ngZone) {
        this.document = document;
        if (Platform.isBrowser) {
            ngZone.runOutsideAngular(() => {
                this.scroll$ = fromEvent(window.document, 'scroll').pipe(auditTime(20), map(() => {
                    return window.scrollY || this.document.documentElement.scrollTop;
                }), share());
            });
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
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
/** @nocollapse */ WindowScrollService.ngInjectableDef = defineInjectable({ factory: function WindowScrollService_Factory() { return new WindowScrollService(inject(DOCUMENT), inject(NgZone)); }, token: WindowScrollService, providedIn: "root" });
class LyOverlayContainer {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this._classes = this.theme.addStyleSheet(styles$1);
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
/** @type {?} */
const BACKDROP_STYLES = ({
    backdrop: {
        pointerEvents: 'all',
        userSelect: 'none'
    }
});
class LyOverlayBackdrop {
    /**
     * @param {?} el
     * @param {?} _theme
     * @param {?} _overlayConfig
     * @param {?} commonStyles
     */
    constructor(el, _theme, _overlayConfig, commonStyles) {
        this._theme = _theme;
        this._overlayConfig = _overlayConfig;
        /**
         * @ignore
         */
        this.classes = this._theme.addStyleSheet(BACKDROP_STYLES);
        el.nativeElement.classList.add(commonStyles.classes.fill);
        if (_overlayConfig.backdrop) {
            el.nativeElement.classList.add(this.classes.backdrop);
        }
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
    { type: LyTheme2 },
    { type: undefined, decorators: [{ type: Inject, args: ['overlayConfig',] }] },
    { type: LyCoreStyles }
];
LyOverlayBackdrop.propDecorators = {
    onclick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ResizeService {
    /**
     * @param {?} document
     * @param {?} ngZone
     */
    constructor(document, ngZone) {
        this.document = document;
        if (Platform.isBrowser) {
            ngZone.runOutsideAngular(() => {
                this.resize$ = fromEvent(window, 'resize').pipe(auditTime(20), map(() => {
                    return window.innerHeight || this.document.documentElement.clientHeight;
                }), share());
            });
        }
        else {
            this.resize$ = empty();
        }
    }
}
ResizeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ResizeService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
/** @nocollapse */ ResizeService.ngInjectableDef = defineInjectable({ factory: function ResizeService_Factory() { return new ResizeService(inject(DOCUMENT), inject(NgZone)); }, token: ResizeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @param {?} resizeService
     * @param {?=} config
     */
    constructor(_componentFactoryResolver, _appRef, _templateRef, _overlayContainer, _context, _injector, windowScroll, resizeService, config) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._overlayContainer = _overlayContainer;
        this._injector = _injector;
        this.windowSRSub = Subscription.EMPTY;
        // this._viewRef = _templateRef.createEmbeddedView(_context);
        // this._viewRef.detectChanges();
        this._el = document.createElement('div');
        // this._viewRef.rootNodes.forEach(rootNode => container.appendChild(rootNode));
        /** @type {?} */
        const __styles = Object.assign({ position: 'absolute', display: 'flex', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', pointerEvents: 'all' }, config.styles);
        /** @type {?} */
        const newInjector = Injector.create([
            {
                provide: 'overlayConfig',
                useValue: (/** @type {?} */ (Object.assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles })))
            }
        ], this._injector);
        this.updateStyles(__styles);
        if (config.host) {
            this.windowSRSub = merge(windowScroll.scroll$, resizeService.resize$).subscribe(() => {
                /** @type {?} */
                const rect = config.host.getBoundingClientRect();
                /** @type {?} */
                const newStyles = {
                    top: rect.top,
                    left: rect.left
                };
                this.updateStyles(newStyles);
            });
        }
        /** @type {?} */
        const classes = config.classes;
        if (classes && classes.length) {
            classes.forEach((className) => ((/** @type {?} */ (this._el))).classList.add(className));
        }
        this._compRefOverlayBackdrop = this.generateComponent(LyOverlayBackdrop, newInjector);
        this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
        /** @type {?} */
        const backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
        this._overlayContainer._add(backdropEl);
        this._appendComponentToBody(_templateRef, _context, this._injector);
    }
    /**
     * @return {?}
     */
    get containerElement() {
        return this._el;
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
            // Create a component reference from the component
            /** @type {?} */
            const viewRef = this._viewRef = type.createEmbeddedView(context || {});
            this._appRef.attachView(viewRef);
            // Get DOM element from component
            viewRef.rootNodes.forEach(_ => this._el.appendChild(_));
            // Append DOM element to the body
            this._overlayContainer._add(this._el);
        }
        else if (typeof type === 'string') {
            this._el.innerText = type;
            this._overlayContainer._add(this._el);
        }
        else {
            this._compRef = this.generateComponent((/** @type {?} */ (type)), injector);
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
        else if (this._el) {
            // remove if content is string
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
        this.windowSRSub.unsubscribe();
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
     * @param {?} _resizeService
     */
    constructor(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _windowScroll, _resizeService) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._windowScroll = _windowScroll;
        this._resizeService = _resizeService;
    }
    /**
     * @param {?} template
     * @param {?=} context
     * @param {?=} config
     * @return {?}
     */
    create(template, context, config) {
        return new CreateFromTemplateRef(this._componentFactoryResolver, this._appRef, template, this._overlayContainer, context, this._injector, this._windowScroll, this._resizeService, config);
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
    { type: WindowScrollService },
    { type: ResizeService }
];
/** @nocollapse */ LyOverlay.ngInjectableDef = defineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(inject(LyOverlayContainer), inject(ComponentFactoryResolver), inject(ApplicationRef), inject(INJECTOR), inject(WindowScrollService), inject(ResizeService)); }, token: LyOverlay, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
const AlignAlias = {
    rowReverse: 'row-reverse',
    columnReverse: 'column-reverse',
    wrapReverse: 'wrap-reverse',
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { getContrastYIQ, shadowBuilderDeprecated, shadowBuilder, Shadows, THEME_VARIABLES, IS_CORE_THEME, Platform, supportsPassiveEventListeners, LyCommonModule, getNativeElement, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, defaultEntry, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LyPaperBase, LyPaperMixinBase, LyPaper, CoreTheme, LY_THEME_GLOBAL_VARIABLES, LY_THEME, LY_THEME_NAME, converterToCssKeyAndStyle, capitalizeFirstLetter, StylesInDocument, LyTheme2, LyThemeModule, LY_COMMON_STYLES, LyCoreStyles, Undefined, UndefinedValue, transformMediaQuery, InvertMediaQuery, eachMedia, isObject, mergeDeep, LyStyleUtils, Dir, DirAlias, DirPosition, WindowScrollService, LyOverlayContainer, LyOverlayBackdrop, LyOverlay, LyOverlayModule, MutationObserverFactory, ElementObserver, ResizeService, mixinStyleUpdater, mixinDisableRipple, mixinDisabled, mixinColor, mixinBg, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, Ripple, LyRippleService, getPosition, YPosition, XPosition, AlignAlias, LyWithClass as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGFzc2l2ZS1saXN0ZW5lcnMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlLXV0aWxzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9wb3NpdGlvbi9wb3NpdGlvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZTIuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2NvbW1vbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vYnVpbGQtY29tbW9uLWJlaGF2aW9ycy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2lzLWJvb2xlYW4udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcmlwcGxlL3JpcHBsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcmlwcGxlL3JpcHBsZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9kaXNhYmxlLXJpcHBsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vZGlzYWJsZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2NvbG9yLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9iZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vcmFpc2VkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9vdXRsaW5lZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vZWxldmF0aW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9zaGFkb3ctY29sb3IudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvcGFwZXIudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvd2l0aC1jbGFzcy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2VsL29mZnNldC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2RlZmF1bHQtZW50cnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdmVyc2lvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9nZXN0dXJlL2dlc3R1cmUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy91bmRlZmluZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5LWNvbnRhaW5lci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vcmVzaXplLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5Lm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vbXV0YXRpb24tb2JzZXJ2ZXItZmFjdG9yeS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9wb3NpdGlvbi9hbGlnbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJhc3RZSVEoaGV4Y29sb3IpIHtcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cigwLCAyKSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDIsIDIpLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoNCwgMiksIDE2KTtcbiAgY29uc3QgeWlxID0gKChyICogMjk5KSArIChnICogNTg3KSArIChiICogMTE0KSkgLyAxMDAwO1xuICByZXR1cm4gKHlpcSA+PSAxMjgpID8gJ2JsYWNrJyA6ICd3aGl0ZSc7XG59XG4iLCJpbXBvcnQgKiBhcyBfY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XG5jb25zdCBjaHJvbWEgPSBfY2hyb21hO1xuXG5jb25zdCBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG5jb25zdCBzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkgPSAwLjE0O1xuY29uc3Qgc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkgPSAwLjEyO1xuZXhwb3J0IGNvbnN0IFNoYWRvd3MgPSBbXG4gIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgWzAsIDEsIDMsIDAsIDAsIDEsIDEsIDAsIDAsIDIsIDEsIC0xXSxcbiAgWzAsIDEsIDUsIDAsIDAsIDIsIDIsIDAsIDAsIDMsIDEsIC0yXSxcbiAgWzAsIDEsIDgsIDAsIDAsIDMsIDQsIDAsIDAsIDMsIDMsIC0yXSxcbiAgWzAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDBdLFxuICBbMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMF0sXG4gIFswLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxXSxcbiAgWzAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDJdLFxuICBbMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMl0sXG4gIFswLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgM10sXG4gIFswLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgM10sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNF0sXG4gIFswLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNF0sXG4gIFswLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNF0sXG4gIFswLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNV0sXG4gIFswLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDVdLFxuICBbMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1XSxcbiAgWzAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNl0sXG4gIFswLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDZdLFxuICBbMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgN10sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3XSxcbiAgWzAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDddLFxuICBbMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOF0sXG4gIFswLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4XVxuXTtcbmV4cG9ydCBmdW5jdGlvbiBzaGFkb3dCdWlsZGVyRGVwcmVjYXRlZChlbGV2YXRpb246IG51bWJlciB8IHN0cmluZyA9IDIsIGNvbG9yID0gJyMwMDAnKSB7XG4gIGNvbnN0IENvbG9yID0gY2hyb21hKGNvbG9yKTtcbiAgY29uc3QgY29sb3JzID0gW1xuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSkuY3NzKClcbiAgXTtcbiAgY29uc3QgZSA9IFNoYWRvd3NbZWxldmF0aW9uXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICByZXR1cm4gYGJveC1zaGFkb3c6JHtlWzBdfXB4ICR7ZVsxXX1weCAke2VbMl19cHggJHtlWzNdfXB4ICR7Y29sb3JzWzBdfSwke2VbNF19cHggJHtlWzVdfXB4ICR7ZVs2XX1weCAke2VbN119cHggJHtjb2xvcnNbMV19LCR7ZVs4XX1weCAke2VbOV19cHggJHtlWzEwXX1weCAke2VbMTFdfXB4ICR7Y29sb3JzWzJdfTtgO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFkb3dCdWlsZGVyKGVsZXZhdGlvbjogbnVtYmVyIHwgc3RyaW5nLCBjb2xvcj86IHN0cmluZykge1xuICBjb25zdCBDb2xvciA9IGNocm9tYShjb2xvciB8fCAnIzAwMCcpLmRhcmtlbigpLnNhdHVyYXRlKDIpO1xuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5VW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5KS5jc3MoKVxuICBdO1xuICBjb25zdCBlID0gU2hhZG93c1tlbGV2YXRpb25dO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgJHtlWzBdfXB4ICR7ZVsxXX1weCAke2VbMl19cHggJHtlWzNdfXB4ICR7Y29sb3JzWzBdfSwke2VbNF19cHggJHtlWzVdfXB4ICR7ZVs2XX1weCAke2VbN119cHggJHtjb2xvcnNbMV19LCR7ZVs4XX1weCAke2VbOV19cHggJHtlWzEwXX1weCAke2VbMTFdfXB4ICR7Y29sb3JzWzJdfTtgO1xuXG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgVEhFTUVfVkFSSUFCTEVTID0gbmV3IEluamVjdGlvblRva2VuPFBhbGV0dGVWYXJpYWJsZXM+KCdseS50aGVtZS52YXJpYWJsZXMnKTtcbmV4cG9ydCBjb25zdCBJU19DT1JFX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPHRydWU+KCdseS5pcy5yb290Jyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlVmFyaWFibGVzIHtcbiAgZGVmYXVsdD86IHN0cmluZztcbiAgY29udHJhc3Q/OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvclNjaGVtZSB7XG4gIGJhY2tncm91bmQ/OiB7XG4gICAgZGVmYXVsdD86IHN0cmluZyxcbiAgICBwYXBlcj86IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG4gIHRleHQ/OiB7XG4gICAgZGVmYXVsdDogc3RyaW5nLFxuICAgIHByaW1hcnk/OiBzdHJpbmcsXG4gICAgc2Vjb25kYXJ5Pzogc3RyaW5nLFxuICAgIGRpc2FibGVkPzogc3RyaW5nLFxuICAgIGhpbnQ/OiBzdHJpbmcsXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9O1xuICBkaXZpZGVyPzogc3RyaW5nO1xuICAvKiogQ29tcG9uZW50cyB2YXJpYWJsZXMgKi9cbiAgY29sb3JTaGFkb3c/OiBzdHJpbmc7XG4gIGJhcj86IHN0cmluZztcbiAgaW5wdXQ/OiB7XG4gICAgbGFiZWw/OiBzdHJpbmcsXG4gICAgdW5kZXJsaW5lPzogc3RyaW5nXG4gIH07XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cbiIsIlxuLy8gV2hldGhlciB0aGUgY3VycmVudCBwbGF0Zm9ybSBzdXBwb3J0cyB0aGUgVjggQnJlYWsgSXRlcmF0b3IuIFRoZSBWOCBjaGVja1xuLy8gaXMgbmVjZXNzYXJ5IHRvIGRldGVjdCBhbGwgQmxpbmsgYmFzZWQgYnJvd3NlcnMuXG5jb25zdCBoYXNWOEJyZWFrSXRlcmF0b3IgPSAodHlwZW9mKEludGwpICE9PSAndW5kZWZpbmVkJyAmJiAoSW50bCBhcyBhbnkpLnY4QnJlYWtJdGVyYXRvcik7XG4vKipcbiAqIFNlcnZpY2UgdG8gZGV0ZWN0IHRoZSBjdXJyZW50IHBsYXRmb3JtIGJ5IGNvbXBhcmluZyB0aGUgdXNlckFnZW50IHN0cmluZ3MgYW5kXG4gKiBjaGVja2luZyBicm93c2VyLXNwZWNpZmljIGdsb2JhbCBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgY2xhc3MgUGxhdGZvcm0ge1xuICBzdGF0aWMgcmVhZG9ubHkgaXNCcm93c2VyOiBib29sZWFuID0gdHlwZW9mIGRvY3VtZW50ID09PSAnb2JqZWN0JyAmJiAhIWRvY3VtZW50O1xuICAvKiogTGF5b3V0IEVuZ2luZXMgKi9cbiAgc3RhdGljIHJlYWRvbmx5IEVER0UgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhlZGdlKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIHN0YXRpYyByZWFkb25seSBUUklERU5UID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgLy8gRWRnZUhUTUwgYW5kIFRyaWRlbnQgbW9jayBCbGluayBzcGVjaWZpYyB0aGluZ3MgYW5kIG5lZWQgdG8gYmUgZXhjbHVkZWQgZnJvbSB0aGlzIGNoZWNrLlxuICBzdGF0aWMgcmVhZG9ubHkgQkxJTksgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcbiAgICAgICghISgod2luZG93IGFzIGFueSkuY2hyb21lIHx8IGhhc1Y4QnJlYWtJdGVyYXRvcikgJiYgISFDU1MgJiYgIVBsYXRmb3JtLkVER0UgJiYgIVBsYXRmb3JtLlRSSURFTlQpO1xuXG4gIC8vIFdlYmtpdCBpcyBwYXJ0IG9mIHRoZSB1c2VyQWdlbnQgaW4gRWRnZUhUTUwsIEJsaW5rIGFuZCBUcmlkZW50LiBUaGVyZWZvcmUgd2UgbmVlZCB0b1xuICAvLyBlbnN1cmUgdGhhdCBXZWJraXQgcnVucyBzdGFuZGFsb25lIGFuZCBpcyBub3QgdXNlZCBhcyBhbm90aGVyIGVuZ2luZSdzIGJhc2UuXG4gIHN0YXRpYyByZWFkb25seSBXRUJLSVQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiZcbiAgICAgIC9BcHBsZVdlYktpdC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIVBsYXRmb3JtLkJMSU5LICYmICFQbGF0Zm9ybS5FREdFICYmICFQbGF0Zm9ybS5UUklERU5UO1xuXG4gIC8qKiBCcm93c2VycyBhbmQgUGxhdGZvcm0gVHlwZXMgKi9cbiAgc3RhdGljIHJlYWRvbmx5IElPUyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhKHdpbmRvdyBhcyBhbnkpLk1TU3RyZWFtO1xuXG4gIC8vIEl0J3MgZGlmZmljdWx0IHRvIGRldGVjdCB0aGUgcGxhaW4gR2Vja28gZW5naW5lLCBiZWNhdXNlIG1vc3Qgb2YgdGhlIGJyb3dzZXJzIGlkZW50aWZ5XG4gIC8vIHRoZW0gc2VsZiBhcyBHZWNrby1saWtlIGJyb3dzZXJzIGFuZCBtb2RpZnkgdGhlIHVzZXJBZ2VudCdzIGFjY29yZGluZyB0byB0aGF0LlxuICAvLyBTaW5jZSB3ZSBvbmx5IGNvdmVyIG9uZSBleHBsaWNpdCBGaXJlZm94IGNhc2UsIHdlIGNhbiBzaW1wbHkgY2hlY2sgZm9yIEZpcmVmb3hcbiAgLy8gaW5zdGVhZCBvZiBoYXZpbmcgYW4gdW5zdGFibGUgY2hlY2sgZm9yIEdlY2tvLlxuICBzdGF0aWMgcmVhZG9ubHkgRklSRUZPWCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGZpcmVmb3h8bWluZWZpZWxkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgLy8gVHJpZGVudCBvbiBtb2JpbGUgYWRkcyB0aGUgYW5kcm9pZCBwbGF0Zm9ybSB0byB0aGUgdXNlckFnZW50IHRvIHRyaWNrIGRldGVjdGlvbnMuXG4gIHN0YXRpYyByZWFkb25seSBBTkRST0lEID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9hbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhUGxhdGZvcm0uVFJJREVOVDtcblxuICAvLyBTYWZhcmkgYnJvd3NlcnMgd2lsbCBpbmNsdWRlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGVpciB1c2VyQWdlbnQuIFNvbWUgYnJvd3NlcnMgbWF5IGZha2VcbiAgLy8gdGhpcyBhbmQganVzdCBwbGFjZSB0aGUgU2FmYXJpIGtleXdvcmQgaW4gdGhlIHVzZXJBZ2VudC4gVG8gYmUgbW9yZSBzYWZlIGFib3V0IFNhZmFyaSBldmVyeVxuICAvLyBTYWZhcmkgYnJvd3NlciBzaG91bGQgYWxzbyB1c2UgV2Via2l0IGFzIGl0cyBsYXlvdXQgZW5naW5lLlxuICBzdGF0aWMgcmVhZG9ubHkgU0FGQVJJID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9zYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIFBsYXRmb3JtLldFQktJVDtcbn1cbiIsImxldCBzdXBwb3J0c1Bhc3NpdmU7XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMoKTogYm9vbGVhbiB7XG4gIGlmIChzdXBwb3J0c1Bhc3NpdmUgPT09IHZvaWQgMCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9XG4gIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTdHlsZVV0aWxzLCBEaXIgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5pbXBvcnQgeyBTdHlsZUNvbnRhaW5lciB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmlwcGxlVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvcmlwcGxlJztcbmltcG9ydCB7IFR5cG9ncmFwaHlWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IENoZWNrYm94VmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvY2hlY2tib3gnO1xuaW1wb3J0IHsgU25hY2tCYXJWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9zbmFjay1iYXInO1xuaW1wb3J0IHsgQnV0dG9uVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvYnV0dG9uJztcbmltcG9ydCB7IFRvb2x0aXBWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy90b29sdGlwJztcblxuZXhwb3J0IGNvbnN0IExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFydGlhbFRoZW1lVmFyaWFibGVzPignbHkudGhlbWUuZ2xvYmFsLnZhcmlhYmxlcycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPFRoZW1lQ29uZmlnIHwgVGhlbWVDb25maWdbXT4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignbHkudGhlbWUubmFtZScpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBhY2NlbnQ6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIHdhcm46IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGRpc2FibGVkOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBiYWNrZ3JvdW5kOiB7XG4gICAgLyoqIHNlY29uZGFyeSAqL1xuICAgIGRlZmF1bHQ6IHN0cmluZyxcbiAgICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yLFxuICAgIHNlY29uZGFyeTogc3RyaW5nLFxuICAgIHRlcnRpYXJ5OiBzdHJpbmcsXG4gICAgYmFzZTogc3RyaW5nXG4gIH07XG4gIHRleHQ6IHtcbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeTogc3RyaW5nLFxuICAgIHNlY29uZGFyeTogc3RyaW5nLFxuICAgIGRpc2FibGVkOiBzdHJpbmcsXG4gICAgaGludDogc3RyaW5nXG4gIH07XG4gIHR5cG9ncmFwaHk6IFR5cG9ncmFwaHlWYXJpYWJsZXM7XG4gIC8qKiBjb2xvciBmb3IgZGl2aWRlciAqL1xuICBkaXZpZGVyOiBzdHJpbmc7XG4gIHNoYWRvdzogc3RyaW5nO1xuICAvKiogQGRlcHJlY2F0ZWQgdXNlIHNoYWRvdyBpbnN0ZWFkICovXG4gIGNvbG9yU2hhZG93Pzogc3RyaW5nO1xuICByYWRpbzoge1xuICAgIC8qKiBjb2xvciBmb3IgcmFkaW86b3V0ZXJDaXJjbGUgKi9cbiAgICBvdXRlckNpcmNsZT86IHN0cmluZztcbiAgICAvKiogQGRlcHJlY2F0ZWQgdXNlIG91dGVyQ2lyY2xlIGluc3RlYWQgKi9cbiAgICByYWRpb091dGVyQ2lyY2xlPzogc3RyaW5nO1xuICB9O1xuICBtZW51OiB7XG4gICAgcm9vdD86IFN0eWxlQ29udGFpbmVyXG4gIH07XG4gIGRyYXdlcjoge1xuICAgIC8qKiBjb2xvciBmb3IgZHJhd2VyOmJhY2tkcm9wICovXG4gICAgYmFja2Ryb3A6IHN0cmluZ1xuICB9O1xuICBmaWVsZDoge1xuICAgIGJvcmRlckNvbG9yOiBzdHJpbmdcbiAgICBsYWJlbENvbG9yOiBzdHJpbmdcbiAgICBhcHBlYXJhbmNlOiB7XG4gICAgICBiYXNlPzoge1xuICAgICAgICByb290PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgY29udGFpbmVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmllbGRzZXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXJGb2N1c2VkPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgbGFiZWw/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBwbGFjZWhvbGRlcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGlucHV0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgZmxvYXRpbmdMYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHByZWZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGluZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgc3VmZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaGludD86IFN0eWxlQ29udGFpbmVyXG4gICAgICB9O1xuICAgICAgW2FwcGVhcmFuY2VOYW1lOiBzdHJpbmddOiB7XG4gICAgICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXI/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmaWVsZHNldD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lckZvY3VzZWQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBsYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHBsYWNlaG9sZGVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5wdXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmbG9hdGluZ0xhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcHJlZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5maXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBzdWZmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBoaW50PzogU3R5bGVDb250YWluZXJcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGljb25CdXR0b246IHtcbiAgICBzaXplOiBzdHJpbmdcbiAgfTtcbiAgaWNvbjoge1xuICAgIGZvbnRTaXplOiBzdHJpbmdcbiAgfTtcbiAgekluZGV4OiB7XG4gICAgdG9vbGJhcjogbnVtYmVyXG4gICAgZHJhd2VyOiBudW1iZXJcbiAgICBvdmVybGF5OiBudW1iZXJcbiAgICBba2V5OiBzdHJpbmddOiBudW1iZXJcbiAgfTtcbiAgZGlyZWN0aW9uPzogRGlyO1xuICBhbmltYXRpb25zOiB7XG4gICAgY3VydmVzOiB7XG4gICAgICBzdGFuZGFyZDogc3RyaW5nXG4gICAgICBkZWNlbGVyYXRpb246IHN0cmluZ1xuICAgICAgYWNjZWxlcmF0aW9uOiBzdHJpbmdcbiAgICAgIHNoYXJwOiBzdHJpbmdcbiAgICB9LFxuICAgIGR1cmF0aW9uczoge1xuICAgICAgY29tcGxleDogbnVtYmVyXG4gICAgICBlbnRlcmluZzogbnVtYmVyXG4gICAgICBleGl0aW5nOiBudW1iZXJcbiAgICB9XG4gIH07XG4gIHJpcHBsZTogUmlwcGxlVmFyaWFibGVzO1xuICBiYWRnZToge1xuICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lcixcbiAgICBwb3NpdGlvbj86IHtcbiAgICAgIFtwb3NpdGlvbk5hbWU6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyXG4gICAgfVxuICB9O1xuICBjaGVja2JveDogQ2hlY2tib3hWYXJpYWJsZXM7XG4gIHNuYWNrQmFyOiBTbmFja0JhclZhcmlhYmxlcztcbiAgYnV0dG9uOiBCdXR0b25WYXJpYWJsZXM7XG4gIHRvb2x0aXA6IFRvb2x0aXBWYXJpYWJsZXM7XG59XG5cbmV4cG9ydCB0eXBlIFRoZW1lVmFyaWFibGVzID0gTHlTdHlsZVV0aWxzICYgVGhlbWVDb25maWc7XG5leHBvcnQgdHlwZSBQYXJ0aWFsVGhlbWVWYXJpYWJsZXMgPSBQYXJ0aWFsPFRoZW1lVmFyaWFibGVzPjtcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0VmFsIHtcbiAgZGVmYXVsdDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlQ29sb3Ige1xuICBjb250cmFzdD86IHN0cmluZztcbiAgLyoqIHNoYWRvdyBjb2xvciAqL1xuICBzaGFkb3c/OiBzdHJpbmc7XG59XG4iLCJleHBvcnQgY2xhc3MgTHlTdHlsZVV0aWxzIHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgaHRtbEZvbnRTaXplOiBudW1iZXIsXG4gICAgZm9udFNpemU6IG51bWJlcjtcbiAgfTtcbiAgYnJlYWtwb2ludHM6IHtcbiAgICBYU21hbGw6IHN0cmluZyxcbiAgICBTbWFsbDogc3RyaW5nLFxuICAgIE1lZGl1bTogc3RyaW5nLFxuICAgIExhcmdlOiBzdHJpbmcsXG4gICAgWExhcmdlOiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0OiBzdHJpbmcsXG4gICAgVGFibGV0OiBzdHJpbmcsXG4gICAgV2ViOiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0UG9ydHJhaXQ6IHN0cmluZyxcbiAgICBUYWJsZXRQb3J0cmFpdDogc3RyaW5nLFxuICAgIFdlYlBvcnRyYWl0OiBzdHJpbmcsXG5cbiAgICBIYW5kc2V0TGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgVGFibGV0TGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgV2ViTGFuZHNjYXBlOiBzdHJpbmcsXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH07XG4gIGRpcmVjdGlvbjogRGlyO1xuICBweFRvUmVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBzaXplID0gdGhpcy50eXBvZ3JhcGh5LmZvbnRTaXplIC8gMTQ7XG4gICAgcmV0dXJuIGAke3ZhbHVlIC8gdGhpcy50eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZSAqIHNpemV9cmVtYDtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcsIG9wdGlvbmFsPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIHZhbHVlLCBvcHRpb25hbCk7XG4gIH1cbiAgZ2V0QnJlYWtwb2ludChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBgQG1lZGlhICR7dGhpcy5icmVha3BvaW50c1trZXldIHx8IGtleX1gO1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKHZhbDogRGlyQWxpYXMpIHtcbiAgICBpZiAodmFsID09PSBEaXJBbGlhcy5zdGFydCB8fCB2YWwgPT09IERpckFsaWFzLmJlZm9yZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgfSBlbHNlIGlmICh2YWwgPT09IERpckFsaWFzLmVuZCB8fCB2YWwgPT09IERpckFsaWFzLmFmdGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gRGlyIHtcbiAgcnRsID0gJ3J0bCcsXG4gIGx0ciA9ICdsdHInXG59XG5leHBvcnQgZW51bSBEaXJBbGlhcyB7XG4gIC8qKiBAZGVwcmVjYXRlZCwgdXNlIGBiZWZvcmVgIGluc3RlYWQgKi9cbiAgc3RhcnQgPSAnc3RhcnQnLFxuICAvKiogQGRlcHJlY2F0ZWQsIHVzZSBgYWZ0ZXJgIGluc3RlYWQgKi9cbiAgZW5kID0gJ2VuZCcsXG4gIGJlZm9yZSA9ICdiZWZvcmUnLFxuICBhZnRlciA9ICdhZnRlcidcbn1cbmV4cG9ydCBlbnVtIERpclBvc2l0aW9uIHtcbiAgbGVmdCA9ICdsZWZ0JyxcbiAgcmlnaHQgPSAncmlnaHQnXG59XG5cbi8qKlxuICogZ2V0IGNvbG9yIG9mIG9iamVjdFxuICogQHBhcmFtIG9iaiBvYmplY3RcbiAqIEBwYXJhbSBwYXRoIHBhdGhcbiAqIEBwYXJhbSBvcHRpb25hbCBnZXQgb3B0aW9uYWwgdmFsdWUsIGlmIG5vdCBleGlzdCByZXR1cm4gZGVmYXVsdCBpZiBub3QgaXMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogc3RyaW5nW10gfCBzdHJpbmcsIG9wdGlvbmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcG9zaWJsZU9iID0gb2JqW19wYXRoW2ldXTtcbiAgICBpZiAocG9zaWJsZU9iKSB7XG4gICAgICBvYmogPSBwb3NpYmxlT2I7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBpZiBub3QgZXhpc3QgKi9cbiAgICAgIHJldHVybiBwYXRoIGFzIHN0cmluZztcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG9iaiBhcyBzdHJpbmc7XG4gIH0gZWxzZSBpZiAob3B0aW9uYWwpIHtcbiAgICByZXR1cm4gb2JqW29wdGlvbmFsXSB8fCBvYmpbJ2RlZmF1bHQnXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqWydkZWZhdWx0J107XG4gIH1cbiAgLy8gcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hNZWRpYShzdHI6IHN0cmluZyB8IG51bWJlciwgZm46ICgodmFsOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcsIGlzTWVkaWE6IG51bWJlcikgPT4gdm9pZCkpIHtcbiAgaWYgKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgdmFsdWVzID0gc3RyLnNwbGl0KC9cXHMvZyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHZhbEl0ZW0gPSB2YWx1ZXNbaW5kZXhdLnNwbGl0KC9cXEAvZyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbEl0ZW0uc2hpZnQoKTtcbiAgICAgIGNvbnN0IGxlbiA9IHZhbEl0ZW0ubGVuZ3RoO1xuICAgICAgaWYgKGxlbikge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCB2YWxJdGVtW2pdLCB2YWxJdGVtLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdW5kZWZpbmVkLCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmbi5jYWxsKHVuZGVmaW5lZCwgc3RyLCB1bmRlZmluZWQsIDApO1xuICB9XG59XG4vKipcbiAqIFNpbXBsZSBvYmplY3QgY2hlY2suXG4gKiBAcGFyYW0gaXRlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVPih0YXJnZXQ6IFQsIHNvdXJjZTogVSk6IFQgJiBVO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYpOiBUICYgVSAmIFY7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFUsIFYsIFc+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogViwgc291cmNlMzogVyk6IFQgJiBVICYgViAmIFc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldDogb2JqZWN0LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueTtcblxuLyoqXG4gKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLlxuICogQHBhcmFtIHRhcmdldFxuICogQHBhcmFtIC4uLnNvdXJjZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgeyByZXR1cm4gdGFyZ2V0OyB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHsgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHt9IH0pOyB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRSwgVGhlbWVWYXJpYWJsZXMsIExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbWVyZ2VEZWVwIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBmaXJzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSB0aGVtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfdGhlbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgVGhlbWVWYXJpYWJsZXM+KCk7XG4gIHByaXZhdGUgX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIERhdGFTdHlsZT4+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUUpIHRoZW1lQ29uZmlnOiBUaGVtZUNvbmZpZ1tdIHwgVGhlbWVDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTKSBnbG9iYWxWYXJpYWJsZXM6IFRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUUgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCB7XG4gICAgICBpZDogJ2x5JyxcbiAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgZGF0YToge31cbiAgICB9KTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBub2RlczogTm9kZUxpc3QgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdseS1zLWMnKTtcbiAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2Rlcy5pdGVtKGluZGV4KTtcbiAgICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZpcnN0RWxlbWVudCA9IF9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhlbWVDb25maWcpKSB7XG4gICAgICB0aGVtZUNvbmZpZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgICAgbWVyZ2VEZWVwKGl0ZW0sIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGQoaXRlbSBhcyBhbnkpO1xuICAgICAgICB0aGlzLnRoZW1lcy5hZGQoaXRlbS5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgIG1lcmdlRGVlcCh0aGVtZUNvbmZpZywgZ2xvYmFsVmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkKHRoZW1lQ29uZmlnIGFzIGFueSk7XG4gICAgICB0aGlzLnRoZW1lcy5hZGQodGhlbWVDb25maWcubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lOiBUaGVtZVZhcmlhYmxlc1xuICAgKi9cbiAgYWRkKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykge1xuICAgIHRoaXMuX3RoZW1lTWFwLnNldCh0aGVtZS5uYW1lLCB0aGVtZSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuc2V0KHRoZW1lLm5hbWUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuICBnZXRTdHlsZU1hcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRGlyUG9zaXRpb24gfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5cbmV4cG9ydCBlbnVtIFlQb3NpdGlvbiB7XG4gIGFib3ZlID0gJ2Fib3ZlJyxcbiAgYmVsb3cgPSAnYmVsb3cnXG59XG5cbmV4cG9ydCBlbnVtIFhQb3NpdGlvbiB7XG4gIGJlZm9yZSA9ICdiZWZvcmUnLFxuICBhZnRlciA9ICdhZnRlcicsXG4gIGxlZnQgPSAnbGVmdCcsXG4gIHJpZ2h0ID0gJ3JpZ2h0J1xufVxuXG5leHBvcnQgdHlwZSBQbGFjZW1lbnQgPSBYUG9zaXRpb24gfCBZUG9zaXRpb247XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHhQb3NpdGlvbjogWFBvc2l0aW9uLFxuICB5UG9zaXRpb246IFlQb3NpdGlvbixcbiAgb3JpZ2luOiBFbGVtZW50LFxuICBvdmVybGF5RWxlbWVudDogRWxlbWVudCxcbiAgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICBvZmZzZXQgPSAwKSB7XG5cbiAgY29uc3Qgb3JpZ2luUmVjdCA9IG9yaWdpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICBjb25zdCBvdmVybGF5RWxlbWVudFJlY3QgPSBvdmVybGF5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICBpZiAoeFBvc2l0aW9uICYmIHlQb3NpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgWW91IGNhbiBub3QgdXNlIFxcYHhQb3NpdGlvblxcYCBhbmQgXFxgeVBvc2l0aW9uXFxgIHRvZ2V0aGVyLCB1c2Ugb25seSBvbmUgb2YgdGhlbS5gKTtcbiAgfVxuICBpZiAoKHhQb3NpdGlvbiB8fCB5UG9zaXRpb24pICYmICFwbGFjZW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHBsYWNlbWVudFxcYCBpcyByZXF1aXJlZC5gKTtcbiAgfVxuICBsZXQgeCA9IDAsXG4gICAgICB5ID0gMCxcbiAgICAgIG94ID0gJ2NlbnRlcicsXG4gICAgICBveSA9ICdjZW50ZXInO1xuICBpZiAocGxhY2VtZW50IHx8IHhQb3NpdGlvbiB8fCB5UG9zaXRpb24pIHtcbiAgICBpZiAocGxhY2VtZW50KSB7XG4gICAgICBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgeCA9IChvcmlnaW5SZWN0LndpZHRoIC0gb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoKSAvIDI7XG4gICAgICAgIHkgPSAtb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCAtIG9mZnNldDtcbiAgICAgICAgb3kgPSAnYm90dG9tJztcbiAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgeCA9IChvcmlnaW5SZWN0LndpZHRoIC0gb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoKSAvIDI7XG4gICAgICAgIHkgPSBvcmlnaW5SZWN0LmhlaWdodCArIG9mZnNldDtcbiAgICAgICAgb3kgPSAndG9wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbihwbGFjZW1lbnQgYXMgYW55KTtcbiAgICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ubGVmdCkge1xuICAgICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICAgIHggPSAtb3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoIC0gb2Zmc2V0O1xuICAgICAgICAgIHkgPSAob3JpZ2luUmVjdC5oZWlnaHQgLSBvdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgICB4ID0gb3JpZ2luUmVjdC53aWR0aCArIG9mZnNldDtcbiAgICAgICAgICB5ID0gKG9yaWdpblJlY3QuaGVpZ2h0IC0gb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCkgLyAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHhQb3NpdGlvbikge1xuICAgICAgY29uc3QgZGlyID0gdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKHhQb3NpdGlvbiBhcyBhbnkpO1xuICAgICAgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICB4ID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyID09PSBEaXJQb3NpdGlvbi5sZWZ0KSB7XG4gICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICB4ID0gb3JpZ2luUmVjdC53aWR0aCAtIG92ZXJsYXlFbGVtZW50UmVjdC53aWR0aDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHlQb3NpdGlvbikge1xuICAgICAgaWYgKHlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgIHkgPSAwO1xuICAgICAgICBveSA9ICcwJSc7XG4gICAgICB9IGVsc2UgaWYgKHlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHkgPSBvcmlnaW5SZWN0LmhlaWdodCAtIG92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQ7XG4gICAgICAgIG95ID0gJzEwMCUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IE1hdGgucm91bmQoeCksXG4gICAgeTogTWF0aC5yb3VuZCh5KSxcbiAgICBveCxcbiAgICBveVxuICB9O1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIGlzRGV2TW9kZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaXJBbGlhcywgRGlyIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgWVBvc2l0aW9uIH0gZnJvbSAnLi4vcG9zaXRpb24vcG9zaXRpb24nO1xuXG5jb25zdCBkZWZhdWx0U3R5bGVzID0ge1xuICAnQGdsb2JhbCc6IHtcbiAgICAnKiwgKjphZnRlciwgKjpiZWZvcmUnOiB7XG4gICAgICAnLXdlYmtpdC1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJy1tb3otYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBSRUZfUkVHX0VYUCA9IC9cXHsoW1xcdy1dKylcXH0vZztcblxuZW51bSBUeXBlU3R5bGUge1xuICBNdWx0aXBsZSxcbiAgT25seU9uZVxufVxuXG5jb25zdCBTVFlMRV9NQVA1OiBNYXA8YW55LCBTdHlsZU1hcDU+ID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlTWFwNSB7XG4gIHN0eWxlczogU3R5bGVzRm4yIHwgU3R5bGVzMjtcbiAgdHlwZTogVHlwZVN0eWxlO1xuICBwcmlvcml0eTogbnVtYmVyO1xuICBjc3M6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIGdsb2JhbCB0aGVtZSAqL1xuICBjbGFzc2VzPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogcmVxdWlyZVVwZGF0ZSAqL1xuICBjbGFzc2VzV2l0aFRoZW1lPzoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICAgIH0gfCBzdHJpbmdcbiAgfTtcbiAgLyoqIE9ubHkgZm9yIHN0eWxlcyBvZiBUeXBlU3R5bGUub25lICovXG4gIHBhcmVudFN0eWxlPzogU3R5bGVzO1xuICByZXF1aXJlVXBkYXRlPzogYm9vbGVhbjtcbiAgaWQ6IHN0cmluZztcbn1cblxubGV0IG5leHRDbGFzc0lkID0gMDtcbmxldCBuZXh0S2V5RnJhbWVJZCA9IDA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlc0luRG9jdW1lbnQge1xuICBzdHlsZXM6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PlxuICB9ID0ge307XG4gIHN0eWxlQ29udGFpbmVycyA9IG5ldyBNYXA8bnVtYmVyLCBIVE1MRWxlbWVudD4oKTtcbiAgc3R5bGVFbGVtZW50R2xvYmFsTWFwID0gbmV3IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+KCk7XG59XG5cbmNvbnN0IFRIRU1FX01BUCA9IG5ldyBNYXA8c3RyaW5nLCB7XG4gIGJhc2U6IHN0cmluZ1xuICBjaGFuZ2U6IHN0cmluZyB8IG51bGxcbn0+KCk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lMiB7XG4gIGNvbmZpZzogVGhlbWVWYXJpYWJsZXM7XG4gIF9zdHlsZU1hcDogTWFwPHN0cmluZywgRGF0YVN0eWxlPjtcbiAgaW5pdGlhbFRoZW1lOiBzdHJpbmc7XG4gIGVsZW1lbnRzOiBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PjtcbiAgX2VsZW1lbnRzTWFwID0gbmV3IE1hcDxhbnksIEhUTUxTdHlsZUVsZW1lbnQ+KCk7XG4gIHByaXZhdGUgdGhlbWVNYXAgPSBUSEVNRV9NQVA7XG4gIC8qKiBzc3Igb3IgaG1yICovXG4gIHByaXZhdGUgaXNEZXZPclNlcnZlciA9IGlzRGV2TW9kZSgpIHx8ICFQbGF0Zm9ybS5pc0Jyb3dzZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IHRoZW1lTmFtZSBpbiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzXG4gICAgICA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXVxuICAgICAgOiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV0gPSBuZXcgTWFwKCk7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbFRoZW1lKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRoZW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy50aGVtZU1hcC5oYXModGhpcy5pbml0aWFsVGhlbWUpKSB7XG4gICAgICAgIHRoaXMudGhlbWVNYXAuc2V0KHRoaXMuaW5pdGlhbFRoZW1lLCB7XG4gICAgICAgICAgYmFzZTogdGhpcy5pbml0aWFsVGhlbWUsXG4gICAgICAgICAgY2hhbmdlOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWRkRGVmYXVsdFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKiBAcGFyYW0gcGFyZW50U3R5bGVcbiAgICovXG4gIGFkZFN0eWxlKGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZUNvbnRhaW5lciB8ICgodGhlbWUpID0+IFN0eWxlQ29udGFpbmVyKSB8ICgodGhlbWUpID0+IHN0cmluZykgfCBzdHJpbmcsIGVsPzogYW55LCBpbnN0YW5jZT86IHN0cmluZywgcHJpb3JpdHk/OiBudW1iZXIsIHBhcmVudFN0eWxlPzogU3R5bGVzKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlIGFzIGFueSwgaWQsIHByaW9yaXR5LCBUeXBlU3R5bGUuT25seU9uZSwgZmFsc2UsIHBhcmVudFN0eWxlKSBhcyBzdHJpbmc7XG4gICAgaWYgKG5ld0NsYXNzID09PSBpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICBpZiAoZWwpIHtcbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICBpZiAobmV3Q2xhc3MgPT09IG9sZENsYXNzKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzcywgb2xkQ2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBzZXRUaGVtZShuYW06IHN0cmluZykge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHRoZW1lLnNldFRoZW1lKCd0aGVtZS1uYW1lJylcXGAgaXMgb25seSBhdmFpbGFibGUgaW4gYnJvd3NlciBwbGF0Zm9ybWApO1xuICAgIH1cbiAgICBpZiAobmFtICE9PSB0aGlzLmNvbmZpZy5uYW1lKSB7XG4gICAgICB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSkuY2hhbmdlID0gbmFtO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgICB0aGlzLl91cGRhdGVBbGxTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogVG9nZ2xlIHJpZ2h0LXRvLWxlZnQvbGVmdC10by1yaWdodCAqL1xuICB0b2dnbGVEaXJlY3Rpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuY29uZmlnLmRpcmVjdGlvbjtcbiAgICB0aGlzLmNvbmZpZy5kaXJlY3Rpb24gPSBjdXJyZW50ID09PSBEaXIubHRyID8gRGlyLnJ0bCA6IERpci5sdHI7XG4gICAgdGhpcy5fdXBkYXRlQWxsU3R5bGVzKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBbGxTdHlsZXMoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChfLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlRGF0YSA9IFNUWUxFX01BUDUuZ2V0KGtleSk7XG4gICAgICBpZiAoc3R5bGVEYXRhLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZURhdGEuc3R5bGVzLCBzdHlsZURhdGEuaWQsIHN0eWxlRGF0YS5wcmlvcml0eSwgc3R5bGVEYXRhLnR5cGUsIHRydWUsIHN0eWxlRGF0YS5wYXJlbnRTdHlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2ltcGxlIHN0eWxlXG4gICAqIHJldHVybiBjbGFzc05hbWVcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgb2JqZWN0IG9yIHN0cmluZ1xuICAgKiBAcGFyYW0gcHJpb3JpdHkgc3R5bGUgcHJpb3JpdHlcbiAgICovXG4gIGFkZFNpbXBsZVN0eWxlKGlkOiBzdHJpbmcsIGNzczogU3R5bGVDb250YWluZXIgfCAoKHRoZW1lKSA9PiBTdHlsZUNvbnRhaW5lciksIHByaW9yaXR5PzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50Mihjc3MgYXMgYW55LCBpZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5Pbmx5T25lLCBmYWxzZSkgYXMgc3RyaW5nO1xuICB9XG4gIHByaXZhdGUgX2FkZERlZmF1bHRTdHlsZXMoKSB7XG4gICAgdGhpcy5hZGRTdHlsZVNoZWV0KGRlZmF1bHRTdHlsZXMpO1xuICB9XG5cblxuICAvKipcbiAgICogQWRkIG5ldyBhZGQgYSBuZXcgc3R5bGUgc2hlZXRcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZXNcbiAgICogQHBhcmFtIHByaW9yaXR5IHByaW9yaXR5IGZvciBzdHlsZVxuICAgKi9cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiBTdHlsZXMsIHByaW9yaXR5PzogbnVtYmVyKTogT25seUNsYXNzZXM8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgbnVsbCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRlbnQyKFxuICAgIHN0eWxlczogU3R5bGVzLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICB0eXBlOiBUeXBlU3R5bGUsXG4gICAgZm9yQ2hhbmdlVGhlbWU/OiBib29sZWFuLFxuICAgIHBhcmVudFN0eWxlPzogU3R5bGVzXG4gICkge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgYXMgc3RyaW5nIHx8IHN0eWxlcztcbiAgICBsZXQgaXNOZXdTdHlsZTogYm9vbGVhbjtcbiAgICBpZiAoIVNUWUxFX01BUDUuaGFzKG5ld0lkKSkge1xuICAgICAgaXNOZXdTdHlsZSA9IHRydWU7XG4gICAgICBTVFlMRV9NQVA1LnNldChuZXdJZCwge1xuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgc3R5bGVzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBjc3M6IHt9LFxuICAgICAgICBpZCxcbiAgICAgICAgcGFyZW50U3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZU1hcCA9IFNUWUxFX01BUDUuZ2V0KG5ld0lkKTtcbiAgICBjb25zdCB0aGVtZU5hbWUgPSB0aGlzLmluaXRpYWxUaGVtZTtcbiAgICBjb25zdCBpc0NyZWF0ZWQgPSBpc05ld1N0eWxlIHx8ICEoc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdKTtcbiAgICBpZiAoaXNDcmVhdGVkIHx8IGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAvKiogY3JlYXRlIG5ldyBzdHlsZSBmb3IgbmV3IHRoZW1lICovXG4gICAgICBsZXQgY3NzO1xuICAgICAgY29uc3QgdGhlbWVNYXAgPSB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSk7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTWFwLmNoYW5nZSB8fCB0aGVtZU5hbWUpO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZU1hcCwgc3R5bGVzKGNvbmZpZyksIHRoZW1lTmFtZSwgaWQsIHR5cGUsIGNvbmZpZyk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIGNyZWF0ZSBhIG5ldyBpZCBmb3Igc3R5bGUgdGhhdCBkb2VzIG5vdCA8LTxyZXF1aXJlPi0+IGNoYW5nZXMgKi9cbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXMsIHRoZW1lTmFtZSwgbmV3SWQgYXMgc3RyaW5nLCB0eXBlLCBjb25maWcpO1xuICAgICAgICBzdHlsZU1hcC5jc3MgPSBjc3M7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuaGFzKG5ld0lkKSkge1xuICAgICAgICBjb25zdCBuZXdFbCA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShjc3MpO1xuICAgICAgICBpZiAoc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgZm9yIHdoZW4gYSB0aGVtZSBjaGFuZ2VzXG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIG5ld0VsKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRGV2T3JTZXJ2ZXIpIHtcbiAgICAgICAgICAvLyBpbiBkZXYgbW9kZSBvciBzZXJ2ZXIgaXQgaXMgbm90IG5lY2Vzc2FyeVxuICAgICAgICAgIC8vIHNpbmNlIHRoZSBzdHlsZXMgd2lsbCBub3QgY2hhbmdlXG4gICAgICAgICAgdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlRWxlbWVudEdsb2JhbE1hcC5zZXQobmV3SWQsIG5ld0VsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCBuZXdFbCk7XG4gICAgICB9XG4gICAgICBpZiAoZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCk7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IGNzcztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZXZPclNlcnZlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBhcHBlbmQgY2hpbGQgc3R5bGUgaWYgbm90IGV4aXN0IGluIGRvbVxuICAgICAgICogZm9yIHNzciBvciBobXJcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgX2NzcyA9IHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdIHx8IHN0eWxlTWFwLmNzcztcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlRWxlbWVudEdsb2JhbE1hcDtcbiAgICAgICAgaWYgKHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpKTtcbiAgICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXAuaGFzKG5ld0lkKSkge1xuICAgICAgICAgIG1hcC5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgbWFwLmdldChuZXdJZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKSB7XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXIgfCBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgLyoqIFByZWZpeCBuYW1lICovXG4gICRuYW1lPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMiA9IChUKSA9PiBTdHlsZXMyO1xuXG5leHBvcnQgdHlwZSBTdHlsZXMgPSBTdHlsZXNGbjIgfCBTdHlsZXMyO1xuXG5leHBvcnQgaW50ZXJmYWNlIEtleWZyYW1lcyB7XG4gIFtuYW1lOiBzdHJpbmddOiB7XG4gICAgW3BlcmNlbnQ6IG51bWJlcl06IFN0eWxlQ29udGFpbmVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdyb3VwU3R5bGVUb1N0cmluZyhcbiAgc3R5bGVNYXA6IFN0eWxlTWFwNSxcbiAgc3R5bGVzOiBTdHlsZXMyLFxuICB0aGVtZU5hbWU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyxcbiAgdHlwZVN0eWxlOiBUeXBlU3R5bGUsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlc1xuKSB7XG4gIC8vIGZvciBzdHlsZXMgdHlwZSBzdHJpbmdcbiAgaWYgKHR5cGVTdHlsZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUpIHtcbiAgICAvLyB1c2UgY3VycmVudCBjbGFzcyBvciBzZXQgbmV3XG4gICAgY29uc3QgY2xhc3NOYW1lID0gc3R5bGVNYXAucmVxdWlyZVVwZGF0ZVxuICAgID8gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IGNyZWF0ZU5leHRDbGFzc0lkKCkpXG4gICAgOiBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA/IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgIDogc3R5bGVNYXAuY2xhc3NlcyA9IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG4gICAgbGV0IHJ1bGVzOiBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBydWxlcyA9IGAuJHtjbGFzc05hbWV9eyR7c3R5bGVzfX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBydWxlcyA9IHN0eWxlVG9TdHJpbmcoaWQsIG51bGwsIHN0eWxlcywgdGhlbWVWYXJpYWJsZXMsIGNsYXNzTmFtZSBhcyBhbnkpO1xuICAgIH1cbiAgICBpZiAoc3R5bGVNYXAucGFyZW50U3R5bGUpIHtcbiAgICAgIGNvbnN0IHN0eWxlTWFwT2ZQYXJlbnRTdHlsZSA9IFNUWUxFX01BUDUuZ2V0KHN0eWxlTWFwLnBhcmVudFN0eWxlKTtcbiAgICAgIHJldHVybiByZXBsYWNlUmVmcyhydWxlcywgc3R5bGVNYXBPZlBhcmVudFN0eWxlW3RoZW1lTmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbiAgLy8gZm9yIG11bHRpcGxlcyBzdHlsZXNcbiAgY29uc3QgY2xhc3Nlc01hcCA9IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSB7fSk7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGNvbnN0IG5hbWUgPSBzdHlsZXMuJG5hbWUgPyBgJHtzdHlsZXMuJG5hbWV9LWAgOiAnJztcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgaWYgKGtleSA9PT0gJyRrZXlmcmFtZXMnKSB7XG4gICAgICAgIGNvbnRlbnQgKz0ga2V5ZnJhbWVzVG9TdHJpbmcobmFtZSwgY2xhc3Nlc01hcCwgdmFsdWUgYXMgS2V5ZnJhbWVzLCB0aGVtZVZhcmlhYmxlcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgICAgY29uc3QgY3VycmVudENsYXNzTmFtZSA9IGtleSBpbiBjbGFzc2VzTWFwXG4gICAgICAgID8gY2xhc3Nlc01hcFtrZXldXG4gICAgICAgIDogY2xhc3Nlc01hcFtrZXldID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGB5LSR7bmFtZX0ke2tleX0tJHtjcmVhdGVOZXh0Q2xhc3NJZCgpfWApIDogY3JlYXRlTmV4dENsYXNzSWQoKTtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcoa2V5LCBzdHlsZXMuJG5hbWUsIHZhbHVlIGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBjdXJyZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2VSZWZzKGNvbnRlbnQsIGNsYXNzZXNNYXApO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUmVmcyhzdHI6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUZfUkVHX0VYUCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGRhdGFbdG9rZW5dO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBgLiR7ZGF0YVt0b2tlbl19YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGFbYEDDkMKzLi0+LSR7dG9rZW59YF07XG4gICAgfVxuICB9XG4gICk7XG59XG5cbi8qKlxuICoge2NvbG9yOidyZWQnfSB0byAuY2xhc3NOYW1le2NvbG9yOiByZWR9XG4gKi9cbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmcoa2V5OiBzdHJpbmcsICRuYW1lOiBzdHJpbmcsIG9iOiBPYmplY3QsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgY3VycmVudEtleTogc3RyaW5nLCBwYXJlbnRLZXk/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IHN1YkNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGxldCBuZXdLZXk7XG4gIGlmIChwYXJlbnRLZXkpIHtcbiAgICBpZiAoY3VycmVudEtleS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgICBuZXdLZXkgPSBjdXJyZW50S2V5LnJlcGxhY2UoLyYvZywgcGFyZW50S2V5KTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIG5ld0tleSA9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3S2V5ID0gYCR7cGFyZW50S2V5fSAke2N1cnJlbnRLZXl9YDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICBuZXdLZXkgPSBrZXk7XG4gIH0gZWxzZSB7XG4gICAgbmV3S2V5ID0gYC4ke2N1cnJlbnRLZXl9YDtcbiAgfVxuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIC8vIE9taXQgc3R5bGUgd2l0aCB2YWx1ZSBudWxsXG4gICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGlzIE9iamVjdCBsaXRlcmFsXG4gICAgICAgIGlmIChlbGVtZW50LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICBzdWJDb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoa2V5LCAkbmFtZSwgZWxlbWVudCBhcyBTdHlsZXMyLCB0aGVtZVZhcmlhYmxlcywgc3R5bGVLZXksIG5ld0tleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAga2V5QW5kVmFsdWUgKz0gY29udmVydFRvU3R5bGVWYWx1ZShzdHlsZUtleSwgZWxlbWVudCwgdGhlbWVWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChrZXlBbmRWYWx1ZSkge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgbGV0IGxpbiA9ICdcXG5cXG4nO1xuICAgICAgaWYgKCRuYW1lKSB7XG4gICAgICAgIGxpbiArPSBgLyoqIFN0eWxlIFNoZWV0IG5hbWU6ICR7JG5hbWV9ICovXFxuYDtcbiAgICAgIH1cbiAgICAgIGxpbiArPSBgLyoqIFN0eWxlIEtleTogJHtrZXl9ICovXFxuYDtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bGlufWA7XG4gICAgfVxuICAgIGlmIChuZXdLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgICBrZXlBbmRWYWx1ZSA9IGAke3BhcmVudEtleX17JHtrZXlBbmRWYWx1ZX19YDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudEtleSAmJiBwYXJlbnRLZXkgPT09ICdAZ2xvYmFsJykge1xuICAgICAgY29udGVudCArPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgfVxuICAgIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICB9XG4gIHJldHVybiBjb250ZW50ICsgc3ViQ29udGVudDtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvU3R5bGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpIHtcbiAgY29uc3QgbmV3U3R5bGVLZXkgPSBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlQ2FjaGUoa2V5LCB0aGVtZVZhcmlhYmxlcyk7XG4gIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICBsZXQgbGluID0gJyc7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGluICs9IGAke25ld1N0eWxlS2V5fToke3ZhbHVlW2luZGV4XX07YDtcbiAgICB9XG4gICAgcmV0dXJuIGxpbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7bmV3U3R5bGVLZXl9OiR7dmFsdWV9O2A7XG4gIH1cbn1cblxuZnVuY3Rpb24ga2V5ZnJhbWVzVG9TdHJpbmcoc3R5bGVOYW1lOiBzdHJpbmcsIGtleXNNYXA6IG9iamVjdCwga2V5ZnJhbWVzOiBLZXlmcmFtZXMsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBsZXQgY29udGVudCA9ICcnO1xuXG4gIGZvciAoY29uc3QgbmFtZSBpbiBrZXlmcmFtZXMpIHtcbiAgICBpZiAoa2V5ZnJhbWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBjb25zdCBrZXlmcmFtZSA9IGtleWZyYW1lc1tuYW1lXTtcbiAgICAgIC8vIFNvbWV0aW1lcyB0aGUgbmFtZSBvZiBhIGNsYXNzIGNhbiBiZSB0aGUgc2FtZSBhcyB0aGUgbmFtZSBvZiBhIGtleWZyYW1lLFxuICAgICAgLy8gc28gd2UgYWRkIGEgY2hhcmFjdGVyIHRvIGJlIGRpZmZlcmVudFxuICAgICAgY29uc3QgbmV3VW5pcXVlTmFtZSA9IGBAw5DCsy4tPi0ke25hbWV9YDtcbiAgICAgIC8vIHNldCBuZXcgaWQgaWYgbm90IGV4aXN0XG4gICAgICBjb25zdCBuZXdOYW1lID0gbmV3VW5pcXVlTmFtZSBpbiBrZXlzTWFwXG4gICAgICA/IGtleXNNYXBbbmV3VW5pcXVlTmFtZV1cbiAgICAgIDoga2V5c01hcFtuZXdVbmlxdWVOYW1lXSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgJHtzdHlsZU5hbWV9JHtuYW1lfS0ke2NyZWF0ZU5leHRLZXlmcmFtZUlkKCl9LXZgKSA6IGNyZWF0ZU5leHRLZXlmcmFtZUlkKCk7XG4gICAgICBjb250ZW50ICs9IGBAa2V5ZnJhbWVzICR7bmV3TmFtZX17YDtcbiAgICAgIGZvciAoY29uc3QgcGVyY2VudCBpbiBrZXlmcmFtZSkge1xuICAgICAgICBpZiAoa2V5ZnJhbWUuaGFzT3duUHJvcGVydHkocGVyY2VudCkpIHtcbiAgICAgICAgICBjb250ZW50ICs9IGAke3BlcmNlbnR9JXtgO1xuICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IGtleWZyYW1lW3BlcmNlbnRdO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHN0eWxlc1trZXldO1xuICAgICAgICAgICAgICBjb250ZW50ICs9IGNvbnZlcnRUb1N0eWxlVmFsdWUoa2V5LCB2YWwgYXMgc3RyaW5nIHwgc3RyaW5nW10sIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudCArPSBgfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gYH1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gd2FybkRlcHJlY2F0ZWRLZXlTdHlsZShzdHI6IHN0cmluZywga2V5OiBzdHJpbmcsIHRvOiBzdHJpbmcpIHtcbiAgY29uc29sZS53YXJuKGBTdHlsZSBrZXkgXFxgJHtrZXl9XFxgIGRlcHJlY2F0ZWQgZm9yIFxcYCR7c3RyfVxcYCwgY2hhbmdlIFxcYCR7a2V5fVxcYCB0byBcXGAke3RvfVxcYFxcbmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZShzdHI6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGNvbnN0IGh5cGhlbkNhc2UgPSB0b0h5cGhlbkNhc2Uoc3RyKTtcbiAgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5zdGFydCkgIT09IC0xKSB7XG4gICAgd2FybkRlcHJlY2F0ZWRLZXlTdHlsZShzdHIsIERpckFsaWFzLnN0YXJ0LCBEaXJBbGlhcy5iZWZvcmUpO1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5zdGFydCk7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKERpckFsaWFzLmVuZCkgIT09IC0xKSB7XG4gICAgd2FybkRlcHJlY2F0ZWRLZXlTdHlsZShzdHIsIERpckFsaWFzLmVuZCwgRGlyQWxpYXMuYWZ0ZXIpO1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5lbmQpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5iZWZvcmUpICE9PSAtMSkge1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5iZWZvcmUpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5hZnRlcikgIT09IC0xKSB7XG4gICAgcmV0dXJuIGRpckNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLmFmdGVyKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoWVBvc2l0aW9uLmFib3ZlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgWVBvc2l0aW9uLmFib3ZlLCBUT1ApO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihZUG9zaXRpb24uYmVsb3cpICE9PSAtMSkge1xuICAgIHJldHVybiBZUG9zaXRpb25DYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBZUG9zaXRpb24uYmVsb3csIEJPVFRPTSk7XG4gIH1cbiAgcmV0dXJuIGh5cGhlbkNhc2U7XG59XG5cbmZ1bmN0aW9uIHRvQ2xhc3NOYW1lVmFsaWQoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgcyA9IHN0ci5yZXBsYWNlKC9eWzAtOV18W15cXHdcXC1dL2csIF8gPT4ge1xuICAgIHJldHVybiBgXyR7Xy5jaGFyQ29kZUF0KDApfWA7XG4gIH0pO1xuICByZXR1cm4gdG9IeXBoZW5DYXNlKHMpO1xufVxuXG5cbmZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGVDYWNoZShzdHI6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKTogc3RyaW5nIHtcbiAgY29uc3QgbWFwID0gU1RZTEVfS0VZU19NQVBbdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uXTtcbiAgcmV0dXJuIHN0ciBpbiBtYXBcbiAgPyBtYXBbc3RyXVxuICA6IG1hcFtzdHJdID0gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZShzdHIsIHRoZW1lVmFyaWFibGVzKTtcbn1cblxuY29uc3QgaWdub3JlQ1NTS0VZID0ge1xuICAnYnJlYWstYWZ0ZXInOiAnYnJlYWstYWZ0ZXInLFxuICAnYnJlYWstYmVmb3JlJzogJ2JyZWFrLWJlZm9yZScsXG4gICdwYWdlLWJyZWFrLWFmdGVyJzogJ3BhZ2UtYnJlYWstYWZ0ZXInLFxuICAncGFnZS1icmVhay1iZWZvcmUnOiAncGFnZS1icmVhay1iZWZvcmUnXG59O1xuXG5jb25zdCBTVFlMRV9LRVlTX01BUCA9IHtcbiAgcnRsOiB7XG4gICAgLi4uaWdub3JlQ1NTS0VZXG4gIH0sXG4gIGx0cjoge1xuICAgIC4uLmlnbm9yZUNTU0tFWVxuICB9XG59O1xuXG5jb25zdCBCT1RUT00gPSAnYm90dG9tJztcbmNvbnN0IFRPUCA9ICd0b3AnO1xuXG5mdW5jdGlvbiBkaXJDYWNoZShvcmlnaW5hbCwgdmFsOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgZGlyQWxpYXM6IERpckFsaWFzKSB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIC8vIFJlcGxhY2UgaW4gb3JpZ2luYWwsIGZvciBkbyBub3QgcmVwZWF0IHRoaXMgYWdhaW5cbiAgcmV0dXJuIG1hcFtvcmlnaW5hbF0gPSB2YWwucmVwbGFjZShkaXJBbGlhcywgdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKGRpckFsaWFzKSk7XG59XG5cbmZ1bmN0aW9uIFlQb3NpdGlvbkNhY2hlKG9yaWdpbmFsLCB2YWw6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBwb3M6IFlQb3NpdGlvbiwgdG86ICd0b3AnIHwgJ2JvdHRvbScpIHtcbiAgY29uc3QgbWFwID0gU1RZTEVfS0VZU19NQVBbdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uXTtcbiAgLy8gUmVwbGFjZSBpbiBvcmlnaW5hbCwgZm9yIGRvIG5vdCByZXBlYXQgdGhpcyBhZ2FpblxuICByZXR1cm4gbWFwW29yaWdpbmFsXSA9IHZhbC5yZXBsYWNlKHBvcywgdG8pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dENsYXNzSWQoKSB7XG4gIHJldHVybiBgaSR7KG5leHRDbGFzc0lkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuZnVuY3Rpb24gY3JlYXRlTmV4dEtleWZyYW1lSWQoKSB7XG4gIHJldHVybiBgayR7KG5leHRLZXlGcmFtZUlkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuXG50eXBlIE9ubHlDbGFzc2VzPFQ+ID0gUmVjb3JkPChcbiAgRXhjbHVkZTwoVCBleHRlbmRzICgoLi4uYXJnczogYW55W10pID0+IGFueSkgPyAoa2V5b2YgUmV0dXJuVHlwZTxUPikgOiBrZXlvZiBUKSxcbiAgJyRuYW1lJyB8ICckc2hlZXQnIHwgJyRrZXlmcmFtZXMnPlxuKSwgc3RyaW5nPjtcblxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYsIE9uRGVzdHJveSwgTmdNb2R1bGUsIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2V5QXR0cmlidXRlIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9uZ1RyYW5zY2x1ZGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgc2V0IG5nVHJhbnNjbHVkZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh0ZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XG4gICAgICB0aGlzLl92aWV3UmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IG51bGw7XG4gICAgICB0aGlzLl92aWV3UmVmLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG5nVHJhbnNjbHVkZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3ZpZXdSZWYucmVtb3ZlKCk7XG4gIH1cbn1cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZU1vZHVsZSB7XG5cbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pOiBIVE1MRWxlbWVudCB7XG4gIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnQubmF0aXZlRWxlbWVudCA6IGVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgc2hhZG93QnVpbGRlciB9IGZyb20gJy4uL3NoYWRvdyc7XG5pbXBvcnQgeyBDYW5Db2xvciB9IGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgQ2FuQmcgfSBmcm9tICcuL2JnJztcbmltcG9ydCB7IENhbkRpc2FibGUgfSBmcm9tICcuL2Rpc2FibGVkJztcbmltcG9ydCB7IENhblJhaXNlZCB9IGZyb20gJy4vcmFpc2VkJztcbmltcG9ydCB7IENhbkVsZXZhdGlvbiB9IGZyb20gJy4vZWxldmF0aW9uJztcbmltcG9ydCB7IENhbk91dGxpbmVkIH0gZnJvbSAnLi9vdXRsaW5lZCc7XG5pbXBvcnQgeyBDYW5TaGFkb3dDb2xvciB9IGZyb20gJy4vc2hhZG93LWNvbG9yJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0TmF0aXZlRWxlbWVudCB9IGZyb20gJy4uL21pbmltYWwvY29tbW9uJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuY29uc3QgREVGQVVMVF9WQUxVRSA9ICcnO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMTtcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1aXJlUGFyYW1zU3R5bGVVcGRhdGVyIHtcbiAgX3RoZW1lOiBMeVRoZW1lMjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW5TdHlsZVVwZGF0ZXIge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xuICB1cGRhdGVTdHlsZTogKGVsZW1lbnQ6IEVsZW1lbnRSZWYgfCBFbGVtZW50KSA9PiB2b2lkO1xuICBzZXRBdXRvQ29udHJhc3Q6ICgpID0+IHZvaWQ7XG59XG5leHBvcnQgdHlwZSBDYW5TdHlsZVVwZGF0ZXJDdG9yID0gQ29uc3RydWN0b3I8UmVxdWlyZVBhcmFtc1N0eWxlVXBkYXRlciAmIFBhcnRpYWw8Q2FuQ29sb3IgJiBDYW5CZyAmIENhbkRpc2FibGUgJiBDYW5SYWlzZWQgJiBDYW5FbGV2YXRpb24gJiBDYW5PdXRsaW5lZCAmIENhblNoYWRvd0NvbG9yPj47XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblN0eWxlVXBkYXRlcjxUIGV4dGVuZHMgQ2FuU3R5bGVVcGRhdGVyQ3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhblN0eWxlVXBkYXRlcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgX2NsYXNzTmFtZUFub255bW91czogc3RyaW5nO1xuICAgIF9hdXRvQ29udHJhc3Q6IGJvb2xlYW47XG4gICAgc2V0QXV0b0NvbnRyYXN0KCkge1xuICAgICAgdGhpcy5fYXV0b0NvbnRyYXN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgdXBkYXRlU3R5bGUoZWxlbWVudDogRWxlbWVudFJlZjxhbnk+IHwgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IF9fYmcgPSB0aGlzLmJnO1xuICAgICAgY29uc3QgX19jb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICBjb25zdCBfX3JhaXNlZCA9IHRoaXMucmFpc2VkO1xuICAgICAgY29uc3QgX19lbGV2YXRpb24gPSB0aGlzLmVsZXZhdGlvbjtcbiAgICAgIGNvbnN0IF9fZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgICAgY29uc3QgX19vdXRsaW5lZCA9IHRoaXMub3V0bGluZWQ7XG4gICAgICBjb25zdCBfX3NoYWRvd0NvbG9yID0gdGhpcy5zaGFkb3dDb2xvcjtcbiAgICAgIGNvbnN0IF9faXNDb250cmFzdCA9IHRoaXMuX2F1dG9Db250cmFzdCAmJiAhX19jb2xvciB8fCBfX2NvbG9yID09PSAnYXV0byc7XG4gICAgICBjb25zdCBuZXdLZXkgPSBgY29tbW9uLS0tLToke1xuICAgICAgICBfX2JnIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgX19jb2xvciB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgX19yYWlzZWQgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgX19lbGV2YXRpb24gfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICBfX2Rpc2FibGVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgICBfX291dGxpbmVkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgICAgIF9fc2hhZG93Q29sb3IgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgICAgICAgICAgICBfX2lzQ29udHJhc3QgfHwgREVGQVVMVF9WQUxVRX1gO1xuICAgICAgdGhpcy5fY2xhc3NOYW1lQW5vbnltb3VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUobmV3S2V5LCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlOiB7XG4gICAgICAgICAgYm9yZGVyPzogc3RyaW5nLFxuICAgICAgICAgIGJhY2tncm91bmQ/OiBzdHJpbmcsXG4gICAgICAgICAgY29sb3I/OiBzdHJpbmcsXG4gICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM/OiAnbm9uZSc7XG4gICAgICAgICAgJyY6aG92ZXInPzoge1xuICAgICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjphY3RpdmUnPzoge1xuICAgICAgICAgICAgYm94U2hhZG93Pzogc3RyaW5nXG4gICAgICAgICAgfVxuICAgICAgICB9ID0ge307XG4gICAgICAgIGlmIChfX291dGxpbmVkKSB7XG4gICAgICAgICAgc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBjdXJyZW50Q29sb3InO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfX2Rpc2FibGVkKSB7XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSB0aGVtZS50ZXh0LmRpc2FibGVkO1xuICAgICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgaWYgKF9fYmcpIHtcbiAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5kaXNhYmxlZC5kZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoX19iZykge1xuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmNvbG9yT2YoX19iZyk7XG4gICAgICAgICAgICBpZiAoX19pc0NvbnRyYXN0KSB7XG4gICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZihgJHtfX2JnfTpjb250cmFzdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXN0eWxlLmNvbG9yICYmIF9fY29sb3IpIHtcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUuY29sb3JPZihfX2NvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF9fcmFpc2VkIHx8IF9fZWxldmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAoIV9fYmcpIHtcbiAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmJhY2tncm91bmQucHJpbWFyeS5kZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9yQ3NzID0gc3R5bGUuYmFja2dyb3VuZCAhPT0gX19iZyAmJiB0aGVtZS5jb2xvck9mKF9fYmcgfHwgJ2JhY2tncm91bmQ6cHJpbWFyeScsICdzaGFkb3cnKTtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd0NvbG9yID0gKF9fc2hhZG93Q29sb3IgJiYgdGhlbWUuY29sb3JPZihfX3NoYWRvd0NvbG9yKSkgfHwgYmFja2dyb3VuZENvbG9yQ3NzIHx8IHN0eWxlLmJhY2tncm91bmQgfHwgc3R5bGUuY29sb3IgfHwgdGhlbWUuc2hhZG93O1xuICAgICAgICAgICAgc3R5bGUuYm94U2hhZG93ID0gc2hhZG93QnVpbGRlcihfX2VsZXZhdGlvbiB8fCAzLCBzaGFkb3dDb2xvcik7XG4gICAgICAgICAgICBpZiAoIV9fZWxldmF0aW9uKSB7XG4gICAgICAgICAgICAgIHN0eWxlWycmOmFjdGl2ZSddID0ge1xuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogc2hhZG93QnVpbGRlcig4LCBzaGFkb3dDb2xvcilcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlIGFzIGFueTtcbiAgICAgIH0sIGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudCksIHRoaXMuX2NsYXNzTmFtZUFub255bW91cywgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlOiBhbnkpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cbiIsImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmlwcGxlQ29uZmlnIHtcbiAgY2VudGVyZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHNlbnNpdGl2ZT86IGJvb2xlYW47XG4gIHJhZGl1cz86ICdjb250YWluZXJTaXplJyB8IG51bWJlcjtcbiAgcGVyY2VudGFnZVRvSW5jcmVhc2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVSZWYge1xuICBzdGF0ZSA9IHRydWU7XG4gIHRpbWVzdGFtcCA9IC1EYXRlLm5vdygpO1xuICByZWFkb25seSBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbmQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMudGltZXN0YW1wICs9IERhdGUubm93KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJpcHBsZSB7XG4gIHByaXZhdGUgX3JpcHBsZVJlZjogUmlwcGxlUmVmO1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzOiBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+ID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgY29uZmlnOiBSaXBwbGVDb25maWcgPSB7fTtcbiAgcHJpdmF0ZSBfdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5fdGhlbWVWYXJpYWJsZXMucmlwcGxlLmR1cmF0aW9uO1xuICBwcml2YXRlIF9ldmVudE9wdGlvbnMgPSB7cGFzc2l2ZTogdHJ1ZX0gYXMgYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBhbnksXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBfdHJpZ2dlckVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBpZiAodHlwZW9mIFBvaW50ZXJFdmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgVG91Y2hFdmVudCAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3BvaW50ZXJkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNlZG93bicsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCd0b3VjaGVuZCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgndG91Y2hjYW5jZWwnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNldXAnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNlbGVhdmUnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgaWYgKCFfdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgICAgX3RyaWdnZXJFbGVtZW50ID0gX2NvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KF90cmlnZ2VyRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q29uZmlnKGNvbmZpZzogUmlwcGxlQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcml2YXRlIGdldCBfcmVjdENvbnRhaW5lcigpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIC8vIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnN0eWxlc0RhdGFbMF0pO1xuICAgICAgLy8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5zdHlsZXNEYXRhWzBdLmlkKTtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJpcHBsZShzdHlsZXM6IHtba2V5OiBzdHJpbmddOiBudW1iZXIgfCBzdHJpbmd9KSB7XG4gICAgdGhpcy5fcmlwcGxlUmVmID0gbmV3IFJpcHBsZVJlZigpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZVJlZi5jb250YWluZXI7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHRoaXMuY2xhc3Nlcy5yaXBwbGVDb250YWluZXI7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHN0eWxlc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlW2tleV0gPSBgJHtlbGVtZW50fXB4YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuc3R5bGVba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZSgnb3BhY2l0eScpO1xuICAgIGNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoMSlgO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBvaW50ZXJEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgLyoqRGVzdHJveSBwcmV2aW91cyByaXBwbGUgaWYgZXhpc3QgKi9cbiAgICAgIHRoaXMuZW5kUmlwcGxlKCk7XG4gICAgICB0aGlzLnN0YXJ0UmlwcGxlKGV2ZW50LCB0aGlzLmNvbmZpZyk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgb25Qb2ludGVyTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmVuZFJpcHBsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UmlwcGxlKGV2ZW50OiBNb3VzZUV2ZW50IHwgUG9pbnRlckV2ZW50LCByaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLl9yZWN0Q29udGFpbmVyO1xuICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCxcbiAgICB5ID0gZXZlbnQuY2xpZW50WTtcbiAgICBpZiAocmlwcGxlQ29uZmlnLmNlbnRlcmVkKSB7XG4gICAgICB4ID0gY29udGFpbmVyUmVjdC5sZWZ0ICsgY29udGFpbmVyUmVjdC53aWR0aCAvIDI7XG4gICAgICB5ID0gY29udGFpbmVyUmVjdC50b3AgKyBjb250YWluZXJSZWN0LmhlaWdodCAvIDI7XG4gICAgfVxuICAgIGNvbnN0IGxlZnQgPSB4IC0gY29udGFpbmVyUmVjdC5sZWZ0O1xuICAgIGNvbnN0IHRvcCA9IHkgLSBjb250YWluZXJSZWN0LnRvcDtcbiAgICBsZXQgcmFkaXVzID0gcmlwcGxlQ29uZmlnLnJhZGl1cyA9PT0gJ2NvbnRhaW5lclNpemUnID8gbWF4U2l6ZShjb250YWluZXJSZWN0KSAvIDIgOiByaXBwbGVDb25maWcucmFkaXVzIHx8IHJpcHBsZVJhZGl1cyh4LCB5LCBjb250YWluZXJSZWN0KTtcbiAgICBpZiAocmlwcGxlQ29uZmlnLnBlcmNlbnRhZ2VUb0luY3JlYXNlKSB7XG4gICAgICByYWRpdXMgKz0gcmFkaXVzICogcmlwcGxlQ29uZmlnLnBlcmNlbnRhZ2VUb0luY3JlYXNlIC8gMTAwO1xuICAgIH1cbiAgICB0aGlzLmNyZWF0ZVJpcHBsZSh7XG4gICAgICBsZWZ0OiBsZWZ0IC0gcmFkaXVzLFxuICAgICAgdG9wOiB0b3AgLSByYWRpdXMsXG4gICAgICB3aWR0aDogcmFkaXVzICogMixcbiAgICAgIGhlaWdodDogcmFkaXVzICogMixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7dGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9ufW1zYFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5UaW1lb3V0T3V0c2lkZVpvbmUoZm46IEZ1bmN0aW9uLCBkZWxheSA9IDApIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dChmbiwgZGVsYXkpKTtcbiAgfVxuXG4gIGVuZFJpcHBsZSgpIHtcbiAgICBjb25zdCByaXBwbGVSZWY6IFJpcHBsZVJlZiA9IHRoaXMuX3JpcHBsZVJlZiB8fCBudWxsO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIGlmIChyaXBwbGVSZWYgJiYgcmlwcGxlUmVmLnN0YXRlKSB7XG4gICAgICByaXBwbGVSZWYuZW5kKCk7XG4gICAgICB0aGlzLnJ1blRpbWVvdXRPdXRzaWRlWm9uZSgoKSA9PiB7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt0aGlzLl90cmFuc2l0aW9uRHVyYXRpb24gLyA1fW1zYDtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIDogMCk7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAvIChkdXJhdGlvbiAqIC4wMDEgKyAxKSA6IDApO1xuICAgICAgfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAuMTUgOiAwKTtcbiAgICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJpcHBsZVJlZi5jb250YWluZXIpO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAyIDogZHVyYXRpb24pO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gLyAoZHVyYXRpb24gKiAuMDAxICsgMSkgKiAyIDogZHVyYXRpb24pO1xuICAgICAgfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAyIDogZHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiByaXBwbGVSYWRpdXMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJlY3Q6IENsaWVudFJlY3QpIHtcbiAgY29uc3QgZGlzdFggPSBNYXRoLm1heChNYXRoLmFicyh4IC0gcmVjdC5sZWZ0KSwgTWF0aC5hYnMoeCAtIHJlY3QucmlnaHQpKTtcbiAgY29uc3QgZGlzdFkgPSBNYXRoLm1heChNYXRoLmFicyh5IC0gcmVjdC50b3ApLCBNYXRoLmFicyh5IC0gcmVjdC5ib3R0b20pKTtcbiAgcmV0dXJuIE1hdGguc3FydChkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WSk7XG59XG5cbmZ1bmN0aW9uIG1heFNpemUocmVjdDogQ2xpZW50UmVjdCkge1xuICByZXR1cm4gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBMWV9DT01NT05fU1RZTEVTID0ge1xuICBmaWxsOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICB9LFxuICB2aXN1YWxseUhpZGRlbjoge1xuICAgIGJvcmRlcjogMCxcbiAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBtYXJnaW46ICctMXB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzFweCcsXG4gICAgb3V0bGluZTogMCxcbiAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgfVxufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNvcmVTdHlsZXMge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KExZX0NPTU1PTl9TVFlMRVMpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZW1lOiBMeVRoZW1lMikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnLi4vc3R5bGVzL2NvcmUtc3R5bGVzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcmlwcGxlQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcycHgnLFxuICAgIGhlaWdodDogJzJweCcsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgb3BhY2l0eTogJy4yJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLm9wYWNpdHl9LHRyYW5zZm9ybSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLnRyYW5zZm9ybVxuICAgIH1gLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICB9XG59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGVTZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG59XG4iLCJpbXBvcnQgeyBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IFJpcHBsZSwgUmlwcGxlQ29uZmlnIH0gZnJvbSAnLi4vcmlwcGxlL3JpcHBsZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuLi9yaXBwbGUvcmlwcGxlLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVpcmVQYXJhbXMge1xuICBfdGhlbWU6IEx5VGhlbWUyO1xuICBfbmdab25lOiBOZ1pvbmU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRGlzYWJsZVJpcHBsZSB7XG4gIF90cmlnZ2VyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcbiAgX3JpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnO1xuICBfcmVtb3ZlUmlwcGxlRXZlbnRzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EaXNhYmxlUmlwcGxlPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxSZXF1aXJlUGFyYW1zPj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkRpc2FibGVSaXBwbGU+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgX3RyaWdnZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIF9yaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZyA9IHt9O1xuICAgIHByaXZhdGUgX3JpcHBsZTogUmlwcGxlO1xuICAgIHByaXZhdGUgX2Rpc2FibGVSaXBwbGUgPSBudWxsO1xuXG4gICAgZ2V0IGRpc2FibGVSaXBwbGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlUmlwcGxlOyB9XG4gICAgc2V0IGRpc2FibGVSaXBwbGUodmFsOiBib29sZWFuKSB7XG4gICAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHZhbCAhPT0gdGhpcy5fZGlzYWJsZVJpcHBsZSkge1xuICAgICAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9kaXNhYmxlUmlwcGxlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICAgIC8vIHJlbW92ZSBwcmV2aW91cyByaXBwbGUgaWYgZXhpc3RcbiAgICAgICAgdGhpcy5fcmVtb3ZlUmlwcGxlRXZlbnRzKCk7XG4gICAgICAgIGlmICghbmV3VmFsKSB7XG4gICAgICAgICAgLy8gYWRkIHJpcHBsZVxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl90cmlnZ2VyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5fcmlwcGxlID0gbmV3IFJpcHBsZSh0aGlzLl90aGVtZS5jb25maWcsIHRoaXMuX25nWm9uZSwgdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpLCByaXBwbGVDb250YWluZXIsIHRyaWdnZXJFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuX3JpcHBsZS5zZXRDb25maWcodGhpcy5fcmlwcGxlQ29uZmlnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlUmlwcGxlRXZlbnRzKCkge1xuICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICBpZiAodGhpcy5fcmlwcGxlKSB7XG4gICAgICAgICAgdGhpcy5fcmlwcGxlLnJlbW92ZUV2ZW50cygpO1xuICAgICAgICAgIHRoaXMuX3JpcHBsZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5EaXNhYmxlIHtcbiAgZGlzYWJsZWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluRGlzYWJsZWQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuRGlzYWJsZT4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGdldCBkaXNhYmxlZCgpIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuY29uc3QgREVGQVVMVF9DT0xPUiA9ICdwcmltYXJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5Db2xvciB7XG4gIGNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkNvbG9yPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkNvbG9yPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuXG4gICAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9jb2xvcjsgfVxuICAgIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdmFsIHx8IERFRkFVTFRfQ09MT1I7XG4gICAgICBpZiAoZGVmYXVsdENvbG9yICE9PSB0aGlzLmNvbG9yKSB7XG4gICAgICAgIHRoaXMuX2NvbG9yID0gZGVmYXVsdENvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5jb25zdCBERUZBVUxUX0JHID0gJ3ByaW1hcnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkJnIHtcbiAgYmc6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluQmc8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuQmc+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2JnOiBzdHJpbmc7XG5cbiAgICBnZXQgYmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2JnOyB9XG4gICAgc2V0IGJnKHZhbDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB2YWwgfHwgREVGQVVMVF9CRztcbiAgICAgIGlmIChkZWZhdWx0Q29sb3IgIT09IHRoaXMuYmcpIHtcbiAgICAgICAgdGhpcy5fYmcgPSBkZWZhdWx0Q29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhblJhaXNlZCB7XG4gIHJhaXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluUmFpc2VkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhblJhaXNlZD4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfcmFpc2VkOiBib29sZWFuO1xuXG4gICAgZ2V0IHJhaXNlZCgpIHsgcmV0dXJuIHRoaXMuX3JhaXNlZDsgfVxuICAgIHNldCByYWlzZWQodmFsdWU6IGFueSkgeyB0aGlzLl9yYWlzZWQgPSB0b0Jvb2xlYW4odmFsdWUpOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuT3V0bGluZWQge1xuICBvdXRsaW5lZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluT3V0bGluZWQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuT3V0bGluZWQ+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX291dGxpbmVkOiBib29sZWFuO1xuXG4gICAgZ2V0IG91dGxpbmVkKCkgeyByZXR1cm4gdGhpcy5fb3V0bGluZWQ7IH1cbiAgICBzZXQgb3V0bGluZWQodmFsdWU6IGFueSkgeyB0aGlzLl9vdXRsaW5lZCA9IHRvQm9vbGVhbih2YWx1ZSk7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkVsZXZhdGlvbiB7XG4gIGVsZXZhdGlvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5FbGV2YXRpb248VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuRWxldmF0aW9uPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9lbGV2YXRpb246IG51bWJlcjtcblxuICAgIGdldCBlbGV2YXRpb24oKSB7IHJldHVybiB0aGlzLl9lbGV2YXRpb247IH1cbiAgICBzZXQgZWxldmF0aW9uKHZhbHVlOiBhbnkpIHsgdGhpcy5fZWxldmF0aW9uID0gdmFsdWU7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhblNoYWRvd0NvbG9yIHtcbiAgc2hhZG93Q29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluU2hhZG93Q29sb3I8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuU2hhZG93Q29sb3I+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX3NoYWRvd0NvbG9yOiBzdHJpbmc7XG5cbiAgICBnZXQgc2hhZG93Q29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3NoYWRvd0NvbG9yOyB9XG4gICAgc2V0IHNoYWRvd0NvbG9yKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy5fc2hhZG93Q29sb3IgPSB2YWx1ZTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uRGVzdHJveSwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgbWl4aW5TdHlsZVVwZGF0ZXIsIG1peGluQmcsIG1peGluUmFpc2VkLCBtaXhpbk91dGxpbmVkLCBtaXhpbkVsZXZhdGlvbiwgbWl4aW5TaGFkb3dDb2xvciwgbWl4aW5EaXNhYmxlUmlwcGxlLCBtaXhpbkNvbG9yIH0gZnJvbSAnLi4vY29tbW9uL2luZGV4JztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmNvbnN0IERFRkFVTFRfQkcgPSAncGFwZXInO1xuXG5leHBvcnQgY2xhc3MgTHlQYXBlckJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjb25zdCBMeVBhcGVyTWl4aW5CYXNlID0gbWl4aW5TdHlsZVVwZGF0ZXIoXG5taXhpbkJnKFxuICBtaXhpbkNvbG9yKFxuICAgIG1peGluUmFpc2VkKFxuICAgICAgbWl4aW5PdXRsaW5lZChcbiAgICAgICAgbWl4aW5FbGV2YXRpb24oXG4gICAgICAgICAgbWl4aW5TaGFkb3dDb2xvcihcbiAgICAgICAgICAgIG1peGluRGlzYWJsZVJpcHBsZShMeVBhcGVyQmFzZSkpKSkpKSkpO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBseS1wYXBlciwgW2x5LXBhcGVyXSwgW2x5LXRleHRdYCxcbiAgaW5wdXRzOiBbXG4gICAgJ2JnJyxcbiAgICAnZmxhdCcsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlQYXBlciBleHRlbmRzIEx5UGFwZXJNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgX2hhc1RleHQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCdseS10ZXh0JylcbiAgc2V0IGhhc1RleHQodmFsOiBhbnkpIHtcbiAgICB0aGlzLl9oYXNUZXh0ID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGhhc1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1RleHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWw7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fZWw7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5iZyAmJiAhdGhpcy5oYXNUZXh0KSB7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoXG4gICAgICAgICdseVBhcGVyJyxcbiAgICAgICAgKHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t3aXRoQ2xhc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVdpdGhDbGFzcyB7XG5cbiAgQElucHV0KClcbiAgc2V0IHdpdGhDbGFzcyh2YWw6IHN0cmluZykge1xuICAgIGlmICghdmFsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke3ZhbH0nIGlzIG5vdCB2YWxpZCBjbGFzc05hbWVgKTtcbiAgICB9XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVBhcGVyIH0gZnJvbSAnLi9wYXBlcic7XG5pbXBvcnQgeyBMeVdpdGhDbGFzcyB9IGZyb20gJy4vd2l0aC1jbGFzcy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeVdpdGhDbGFzcywgTHlQYXBlcl0sXG4gIGV4cG9ydHM6IFtMeVdpdGhDbGFzcywgTHlQYXBlcl1cbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb25Nb2R1bGUgeyB9XG4iLCJmdW5jdGlvbiBpc1dpbmRvdyhvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbTogYW55KSB7XG4gICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0Vmlldztcbn1cbmV4cG9ydCBmdW5jdGlvbiBleGFjdFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgbGV0IGRvY0VsZW06IGFueSwgd2luOiBhbnksXG4gICAgICAgIGJveCA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xuICAgIGNvbnN0IGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xuXG4gICAgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XG4gICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxuICAgIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdEVudHJ5KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGRlZmF1bHRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuIiwiaW1wb3J0IHsgRWxlbWVudFJlZiwgTmdab25lLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGdldE5hdGl2ZUVsZW1lbnQgfSBmcm9tICcuLi9taW5pbWFsL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIEZvY3VzU3RhdHVzIHtcbiAgLyoqbW91c2UgYW5kL29yIHRvdWNoKi9cbiAgREVGQVVMVCA9ICdkZWZhdWx0JyxcbiAgLyoqIGtleWJvYXJkIGFuZC9vciBwcm9ncmFtKi9cbiAgS0VZQk9BUkQgPSAna2V5Ym9hcmQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzU3RhdGVJbmZvIHtcbiAgdW5saXN0ZW46ICgpID0+IHZvaWQ7XG4gIHN1YmplY3Q6IFN1YmplY3Q8Rm9jdXNTdGF0ZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXNTdGF0ZSB7XG4gIGV2ZW50OiBGb2N1c0V2ZW50O1xuICBieTogJ2tleWJvYXJkJyB8ICdtb3VzZSc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2VsZW1lbnRNYXAgPSBuZXcgTWFwPEhUTUxFbGVtZW50LCBGb2N1c1N0YXRlSW5mbz4oKTtcbiAgcHJpdmF0ZSBfY3VycmVudEV2ZW50OiAnbW91c2UnIHwgJ2tleWJvYXJkJztcbiAgcHJpdmF0ZSBfcmVtb3ZlR2xvYmFsTGlzdGVuZXJzOiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9jb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cblxuICBsaXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwga2V5RWxlbWVudD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pOiBPYnNlcnZhYmxlPEZvY3VzU3RhdGU+IHwgbnVsbCB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIC8vIHJldHVybiBudWxsIGlmIGl0IGlzIG5vdCBicm93c2VyIHBsYXRmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KTtcbiAgICBjb25zdCBrZXkgPSBrZXlFbGVtZW50ICYmIGdldE5hdGl2ZUVsZW1lbnQoa2V5RWxlbWVudCkgfHwgbmF0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLl9lbGVtZW50TWFwLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudE1hcC5nZXQoa2V5KS5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvY3VzU3RhdGU6IEZvY3VzU3RhdGVJbmZvID0ge1xuICAgICAgdW5saXN0ZW46IG51bGwsXG4gICAgICBzdWJqZWN0OiBuZXcgU3ViamVjdDxGb2N1c1N0YXRlPigpXG4gICAgfTtcbiAgICB0aGlzLl9pbmNyZW1lbnRDb3VudCgpO1xuICAgIGNvbnN0IGZvY3VzTGlzdGVuZXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHRoaXMuX29uKGV2ZW50LCBmb2N1c1N0YXRlLnN1YmplY3QpO1xuICAgIGNvbnN0IGJsdXJMaXN0ZW5lciA9IChldmVudDogRm9jdXNFdmVudCkgPT4gdGhpcy5fb24oZXZlbnQsIGZvY3VzU3RhdGUuc3ViamVjdCk7XG5cbiAgICBmb2N1c1N0YXRlLnVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzTGlzdGVuZXIsIHRydWUpO1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fZWxlbWVudE1hcC5zZXQoa2V5LCBmb2N1c1N0YXRlKTtcblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm9jdXNMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVyTGlzdGVuZXIsIHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBmb2N1c1N0YXRlLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICB1bmxpc3RlbihlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZm9jdXNTdGF0ZUluZm8gPSB0aGlzLl9lbGVtZW50TWFwLmdldChnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpKTtcbiAgICBpZiAoZm9jdXNTdGF0ZUluZm8pIHtcbiAgICAgIGZvY3VzU3RhdGVJbmZvLnVubGlzdGVuKCk7XG4gICAgICB0aGlzLl9kZWNyZW1lbnRDb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uKGV2ZW50OiBGb2N1c0V2ZW50LCBzdWJqZWN0OiBTdWJqZWN0PEZvY3VzU3RhdGU+KSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiBzdWJqZWN0Lm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBieTogdGhpcy5fY3VycmVudEV2ZW50IHx8ICdrZXlib2FyZCdcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyT3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzXG4gICAgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0gOiBmYWxzZTtcblxuICAgIGNvbnN0IGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyID0gKCkgPT4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2N1cnJlbnRFdmVudCA9ICdrZXlib2FyZCcpO1xuICAgIGNvbnN0IGRvY3VtZW50TW91c2Vkb3duTGlzdGVuZXIgPSAoKSA9PiB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY3VycmVudEV2ZW50ID0gJ21vdXNlJyk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfSk7XG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2luY3JlbWVudENvdW50KCkge1xuICAgIGlmICgrK3RoaXMuX2NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLl9hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWNyZW1lbnRDb3VudCgpIHtcbiAgICBpZiAoIS0tdGhpcy5fY291bnQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnRNYXAuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy51bmxpc3RlbihlbGVtZW50KSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBBVUlfVkVSU0lPTiA9ICcxLjkuNSc7XG5leHBvcnQgY29uc3QgQVVJX0xBU1RfVVBEQVRFID0gJzIwMTgtMTItMTFUMjM6MjM6MzMuMjE3Wic7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSGFtbWVyT3B0aW9ucywgSGFtbWVySW5zdGFuY2UgfSBmcm9tICcuL2dlc3R1cmUtYW5ub3RhdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgTFlfSEFNTUVSX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SGFtbWVyT3B0aW9ucz4oJ0xZX0hBTU1FUl9PUFRJT05TJyk7XG5cbmNvbnN0IEhBTU1FUl9HRVNUVVJFU19FVkVOVFMgPSBbXG4gICdzbGlkZScsXG4gICdzbGlkZXN0YXJ0JyxcbiAgJ3NsaWRlZW5kJyxcbiAgJ3NsaWRlcmlnaHQnLFxuICAnc2xpZGVsZWZ0JyxcbiAgJ3NsaWRlY2FuY2VsJ1xuXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SGFtbWVyR2VzdHVyZUNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xuICBldmVudHM6IHN0cmluZ1tdID0gSEFNTUVSX0dFU1RVUkVTX0VWRU5UUztcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9IQU1NRVJfT1BUSU9OUykgcHJpdmF0ZSBfaGFtbWVyT3B0aW9uczogSGFtbWVyT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2Uge1xuICAgIGNvbnN0IGhhbW1lciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gKHdpbmRvdyBhcyBhbnkpLkhhbW1lciA6IG51bGw7XG4gICAgY29uc3QgbWMgPSBuZXcgaGFtbWVyKGVsZW1lbnQsIHRoaXMuX2hhbW1lck9wdGlvbnMgfHwge30pO1xuXG4gICAgY29uc3QgcGFuID0gbmV3IGhhbW1lci5QYW4oKTtcbiAgICBjb25zdCBzd2lwZSA9IG5ldyBoYW1tZXIuU3dpcGUoKTtcbiAgICBjb25zdCBzbGlkZSA9IHRoaXMuX2NyZWF0ZVJlY29nbml6ZXIocGFuLCB7ZXZlbnQ6ICdzbGlkZScsIHRocmVzaG9sZDogMH0sIHN3aXBlKTtcblxuICAgIHBhbi5yZWNvZ25pemVXaXRoKHN3aXBlKTtcblxuICAgIC8vIEFkZCBjdXN0b21pemVkIGdlc3R1cmVzIHRvIEhhbW1lciBtYW5hZ2VyXG4gICAgbWMuYWRkKFtzd2lwZSwgcGFuLCBzbGlkZV0pO1xuICAgIHJldHVybiBtYztcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIGEgbmV3IHJlY29nbml6ZXIsIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSBkZWZhdWx0IHJlY29nbml6ZXJzIG9mIEhhbW1lckpTICovXG4gIHByaXZhdGUgX2NyZWF0ZVJlY29nbml6ZXIoYmFzZTogYW55LCBvcHRpb25zOiBhbnksIC4uLmluaGVyaXRhbmNlczogYW55W10pIHtcbiAgICBjb25zdCByZWNvZ25pemVyID0gbmV3IChiYXNlLmNvbnN0cnVjdG9yKShvcHRpb25zKTtcblxuICAgIGluaGVyaXRhbmNlcy5wdXNoKGJhc2UpO1xuICAgIGluaGVyaXRhbmNlcy5mb3JFYWNoKGl0ZW0gPT4gcmVjb2duaXplci5yZWNvZ25pemVXaXRoKGl0ZW0pKTtcblxuICAgIHJldHVybiByZWNvZ25pemVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBbTHlUaGVtZTJdLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVbmRlZmluZWQge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5leHBvcnQgY29uc3QgVW5kZWZpbmVkVmFsdWUgPSBuZXcgVW5kZWZpbmVkKCk7XG4iLCJleHBvcnQgZW51bSBJbnZlcnRNZWRpYVF1ZXJ5IHtcbiAgTm8sXG4gIFllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWVkaWFRdWVyeShtZWRpYTogc3RyaW5nLCBpbnZlcnRNZWRpYVF1ZXJ5OiBJbnZlcnRNZWRpYVF1ZXJ5ID0gSW52ZXJ0TWVkaWFRdWVyeS5Obyk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgaWYgKG1lZGlhICYmIGludmVydE1lZGlhUXVlcnkgPT09IEludmVydE1lZGlhUXVlcnkuWWVzKSB7XG4gICAgY29uc3QgbmV3VmFsID0gbWVkaWEuc3BsaXQoJywnKS5tYXAoXyA9PiBgbm90ICR7X31gKTtcbiAgICByZXR1cm4gbmV3VmFsO1xuICB9XG4gIHJldHVybiBtZWRpYTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudCwgSW5qZWN0LCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IEx5Q29yZVN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9jb3JlLXN0eWxlcyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tRXZlbnQgLCBPYnNlcnZhYmxlLCBlbXB0eSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSwgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICBvdmVybGF5QmFja2Ryb3A6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXgub3ZlcmxheSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfVxufSk7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgV2luZG93U2Nyb2xsU2VydmljZSB7XG5cbiAgc2Nyb2xsJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBuZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LmRvY3VtZW50LCAnc2Nyb2xsJykucGlwZShcbiAgICAgICAgICBhdWRpdFRpbWUoMjApLFxuICAgICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcm9sbCQgPSBlbXB0eSgpO1xuICAgIH1cbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlDb250YWluZXIge1xuICBwcml2YXRlIF9jbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG4gIHByb3RlY3RlZCByZWFkb25seSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zID0gbmV3IFNldDxhbnk+KCk7XG4gIHByaXZhdGUgX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcjogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbHktb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgfVxuICB9XG4gIGdldCBjb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2FkZChpdGVtKSB7XG4gICAgdGhpcy5faXRlbXMuYWRkKGl0ZW0pO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgfVxuXG4gICAgLyoqXG4gICAqIFJlbW92ZSBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfcmVtb3ZlKGl0ZW0pIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgdGhpcy5faXRlbXMuZGVsZXRlKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdHlsZXMgZm9yIG92ZXJsYXkgY29udGFpbmVyXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXRlbXMuc2l6ZSkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lciA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBCQUNLRFJPUF9TVFlMRVMgPSAoe1xuICBiYWNrZHJvcDoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICB9XG59KTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktb3ZlcmxheS1iYWNrZHJvcCcsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlCYWNrZHJvcCB7XG4gIC8qKiBAaWdub3JlICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KEJBQ0tEUk9QX1NUWUxFUyk7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLl9vdmVybGF5Q29uZmlnLmZuRGVzdHJveSgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBASW5qZWN0KCdvdmVybGF5Q29uZmlnJykgcHJpdmF0ZSBfb3ZlcmxheUNvbmZpZzogYW55LFxuICAgIGNvbW1vblN0eWxlczogTHlDb3JlU3R5bGVzXG4gICkge1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb21tb25TdHlsZXMuY2xhc3Nlcy5maWxsKTtcbiAgICBpZiAoX292ZXJsYXlDb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYmFja2Ryb3ApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCAsIE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXNpemVTZXJ2aWNlIHtcblxuICByZXNpemUkOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIG5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICAgIGF1ZGl0VGltZSgyMCksXG4gICAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc2l6ZSQgPSBlbXB0eSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5Q29udGFpbmVyLCBMeU92ZXJsYXlCYWNrZHJvcCwgV2luZG93U2Nyb2xsU2VydmljZSB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmVzaXplU2VydmljZSB9IGZyb20gJy4vcmVzaXplJztcblxuaW50ZXJmYWNlIE92ZXJsYXlDb25maWcge1xuICBzdHlsZXM6IE9iamVjdDtcbiAgY2xhc3Nlcz86IHN0cmluZ1tdO1xuICBiYWNrZHJvcD86IGJvb2xlYW47XG4gIGZuRGVzdHJveT86ICguLi5hcmcpID0+IHZvaWQ7XG4gIGhvc3Q/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gIC8qKiBEZXRhY2hlcyBhIHZpZXcgZnJvbSBkaXJ0eSBjaGVja2luZyBhZ2FpbiBvZiBBcHBsaWNhdGlvblJlZi4gICovXG4gIGRldGFjaDogKCkgPT4gdm9pZDtcblxuICAvKiogUmVtb3ZlIGVsZW1lbnQgb2YgRE9NICovXG4gIHJlbW92ZTogKCkgPT4gdm9pZDtcblxuICAvKiogRGV0YWNoICYgcmVtb3ZlICovXG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG5cbiAgY29udGFpbmVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG5cbn1cbmNsYXNzIENyZWF0ZUZyb21UZW1wbGF0ZVJlZiBpbXBsZW1lbnRzIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICBwcml2YXRlIF92aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PjtcbiAgcHJpdmF0ZSBfZWw6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9jb21wUmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgcHJpdmF0ZSBfY29tcFJlZk92ZXJsYXlCYWNrZHJvcDogQ29tcG9uZW50UmVmPGFueT47XG4gIHdpbmRvd1NSU3ViOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIGdldCBjb250YWluZXJFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiB8IHN0cmluZyxcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgX2NvbnRleHQ6IGFueSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgd2luZG93U2Nyb2xsOiBXaW5kb3dTY3JvbGxTZXJ2aWNlLFxuICAgIHJlc2l6ZVNlcnZpY2U6IFJlc2l6ZVNlcnZpY2UsXG4gICAgY29uZmlnPzogT3ZlcmxheUNvbmZpZ1xuICApIHtcbiAgICAvLyB0aGlzLl92aWV3UmVmID0gX3RlbXBsYXRlUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhfY29udGV4dCk7XG4gICAgLy8gdGhpcy5fdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5fZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKHJvb3ROb2RlID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290Tm9kZSkpO1xuICAgIGNvbnN0IF9fc3R5bGVzID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnLFxuICAgICAgLi4uY29uZmlnLnN0eWxlc1xuICAgIH07XG4gICAgY29uc3QgbmV3SW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiAnb3ZlcmxheUNvbmZpZycsXG4gICAgICAgIHVzZVZhbHVlOiA8T3ZlcmxheUNvbmZpZz57XG4gICAgICAgICAgZm5EZXN0cm95OiB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKSxcbiAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgc3R5bGVzOiBfX3N0eWxlcyxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sIHRoaXMuX2luamVjdG9yKTtcblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKF9fc3R5bGVzKTtcbiAgICBpZiAoY29uZmlnLmhvc3QpIHtcbiAgICAgIHRoaXMud2luZG93U1JTdWIgPSBtZXJnZSh3aW5kb3dTY3JvbGwuc2Nyb2xsJCwgcmVzaXplU2VydmljZS5yZXNpemUkKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gY29uZmlnLmhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyhuZXdTdHlsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzO1xuICAgIGlmIChjbGFzc2VzICYmIGNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4gKHRoaXMuX2VsIGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AgPSB0aGlzLmdlbmVyYXRlQ29tcG9uZW50KEx5T3ZlcmxheUJhY2tkcm9wLCBuZXdJbmplY3Rvcik7XG4gICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQoYmFja2Ryb3BFbCk7XG4gICAgdGhpcy5fYXBwZW5kQ29tcG9uZW50VG9Cb2R5KF90ZW1wbGF0ZVJlZiwgX2NvbnRleHQsIHRoaXMuX2luamVjdG9yKTtcblxuICB9XG5cbiAgdXBkYXRlU3R5bGVzKF9fc3R5bGVzKSB7XG4gICAgLyoqIEFwcGx5IHN0eWxlcyAqL1xuICAgIC8qKiBzZXQgc3R5bGVzICovXG4gICAgZm9yIChjb25zdCBrZXkgaW4gX19zdHlsZXMpIHtcbiAgICAgIGlmIChfX3N0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlVmFsID0gX19zdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHN0eWxlVmFsKSB7XG4gICAgICAgICAgdGhpcy5fZWwuc3R5bGVba2V5XSA9IHR5cGVvZiBfX3N0eWxlc1trZXldID09PSAnbnVtYmVyJyA/IGAke3N0eWxlVmFsfXB4YCA6IHN0eWxlVmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kQ29tcG9uZW50VG9Cb2R5KHR5cGU6IFRlbXBsYXRlUmVmPGFueT4gfCBUeXBlPGFueT4gfCBzdHJpbmcsIGNvbnRleHQsIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIC8vIENyZWF0ZSBhIGNvbXBvbmVudCByZWZlcmVuY2UgZnJvbSB0aGUgY29tcG9uZW50XG4gICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy5fdmlld1JlZiA9IHR5cGUuY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRleHQgfHwge30pO1xuICAgICAgdGhpcy5fYXBwUmVmLmF0dGFjaFZpZXcodmlld1JlZik7XG5cbiAgICAgIC8vIEdldCBET00gZWxlbWVudCBmcm9tIGNvbXBvbmVudFxuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChfID0+IHRoaXMuX2VsLmFwcGVuZENoaWxkKF8pKTtcblxuICAgICAgLy8gQXBwZW5kIERPTSBlbGVtZW50IHRvIHRoZSBib2R5XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9lbC5pbm5lclRleHQgPSB0eXBlO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29tcFJlZiA9IHRoaXMuZ2VuZXJhdGVDb21wb25lbnQodHlwZSBhcyBUeXBlPGFueT4sIGluamVjdG9yKTtcbiAgICAgIHRoaXMuX2VsID0gdGhpcy5fY29tcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fYWRkKHRoaXMuX2VsKTtcbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUNvbXBvbmVudCh0eXBlOiBUeXBlPGFueT4sIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodHlwZSk7XG4gICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICBpZiAodGhpcy5fdmlld1JlZikge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fdmlld1JlZik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICB0aGlzLl92aWV3UmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb21wUmVmKSB7XG4gICAgICB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9lbCkge1xuICAgICAgLy8gcmVtb3ZlIGlmIGNvbnRlbnQgaXMgc3RyaW5nXG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fZWwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcodGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5ob3N0Vmlldyk7XG4gICAgICB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmRlc3Ryb3koKTtcbiAgICAgIGNvbnN0IGJhY2tkcm9wRWwgPSB0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9yZW1vdmUoYmFja2Ryb3BFbCk7XG4gICAgfVxuICAgIHRoaXMud2luZG93U1JTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXRhY2goKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5T3ZlcmxheSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgX2FwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgX3dpbmRvd1Njcm9sbDogV2luZG93U2Nyb2xsU2VydmljZSxcbiAgICBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBSZXNpemVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgY3JlYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nLCBjb250ZXh0PzogYW55LCBjb25maWc/OiBPdmVybGF5Q29uZmlnKTogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gICAgcmV0dXJuIG5ldyBDcmVhdGVGcm9tVGVtcGxhdGVSZWYoXG4gICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX2FwcFJlZiwgdGVtcGxhdGUsIHRoaXMuX292ZXJsYXlDb250YWluZXIsIGNvbnRleHQsIHRoaXMuX2luamVjdG9yLCB0aGlzLl93aW5kb3dTY3JvbGwsIHRoaXMuX3Jlc2l6ZVNlcnZpY2UsIGNvbmZpZyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeU92ZXJsYXlCYWNrZHJvcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0x5T3ZlcmxheUJhY2tkcm9wXVxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCA9IHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlXG59O1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeSB7XG4gIGNyZWF0ZShjYWxsYmFjazogTXV0YXRpb25DYWxsYmFjayk6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBFbGVtZW50T2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeTogTXV0YXRpb25PYnNlcnZlckZhY3RvcnlcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMuZGVzdHJveShlbGVtZW50KSk7XG4gIH1cblxuICBvYnNlcnZlKGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4sIGZuOiBNdXRhdGlvbkNhbGxiYWNrLCBvcHRpb25zPzogTXV0YXRpb25PYnNlcnZlckluaXQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5fbXV0YXRpb25PYnNlcnZlckZhY3RvcnkuY3JlYXRlKGZuKTtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9wdGlvbnMgfHwgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IE9ic2VydmVyXG4gICAqL1xuICBkZXN0cm95KGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkFsaWFzIHtcbiAgcm93UmV2ZXJzZSA9ICdyb3ctcmV2ZXJzZScsXG4gIGNvbHVtblJldmVyc2UgPSAnY29sdW1uLXJldmVyc2UnLFxuICB3cmFwUmV2ZXJzZSA9ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydCA9ICdmbGV4LXN0YXJ0JyxcbiAgZW5kID0gJ2ZsZXgtZW5kJyxcbiAgYmV0d2VlbiA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kID0gJ3NwYWNlLWFyb3VuZCcsXG4gIGV2ZW5seSA9ICdzcGFjZS1ldmVubHknXG59XG4iXSwibmFtZXMiOlsibWFwIiwiREVGQVVMVF9CRyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBZ0IsY0FBYyxDQUFDLFFBQVE7O1VBQy9CLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztVQUN2QyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7VUFDdkMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7O1VBQ3ZDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUk7SUFDdEQsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUN6Qzs7Ozs7Ozs7Ozs7QUNORDtNQUNNLE1BQU0sR0FBRyxPQUFPOztNQUVoQixxQkFBcUIsR0FBRyxHQUFHOztNQUMzQix3QkFBd0IsR0FBRyxJQUFJOztNQUMvQiwwQkFBMEIsR0FBRyxJQUFJOztBQUN2QyxNQUFhLE9BQU8sR0FBRztJQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFB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