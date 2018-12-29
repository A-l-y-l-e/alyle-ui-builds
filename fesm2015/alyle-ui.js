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
    let Color = chroma(color || '#000');
    /** @type {?} */
    const rgb = (/** @type {?} */ ((/** @type {?} */ (Color.get('rgb')))));
    if (!(rgb[0] === rgb[1] && rgb[0] === rgb[2])) {
        // Darken and saturate if the color is not in the grayscale
        Color = Color.darken().saturate(2);
    }
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
        if (val === DirAlias.before) {
            return this.direction === 'rtl' ? 'right' : 'left';
        }
        else if (val === DirAlias.after) {
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
 * @deprecated in favor of `Positioning`
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
    return createPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset);
}
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
function createPosition(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset = 0) {
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
class Positioning {
    /**
     * @param {?} placement
     * @param {?} xPosition
     * @param {?} yPosition
     * @param {?} origin
     * @param {?} overlayElement
     * @param {?} themeVariables
     * @param {?=} offset
     */
    constructor(placement, xPosition, yPosition, origin, overlayElement, themeVariables, offset = 0) {
        this.placement = placement;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.origin = origin;
        this.overlayElement = overlayElement;
        this.themeVariables = themeVariables;
        this.offset = offset;
        this.offsetCheck = 16;
        this.originRect = (/** @type {?} */ (this.origin.getBoundingClientRect()));
        this.overlayElementRect = (/** @type {?} */ (this.overlayElement.getBoundingClientRect()));
        this.createPosition();
        for (let index = 0; index < 2; index++) {
            if (this.checkAll()) {
                this.createPosition();
            }
        }
        // Where there is not enough space
        if (this.checkAll()) {
            /** @type {?} */
            const _max_width = this.overlayElementRect.width + this.offsetCheck * 2 > window.innerWidth;
            /** @type {?} */
            const _max_height = this.overlayElementRect.height + this.offsetCheck * 2 > window.innerHeight;
            if (_max_width || _max_height) {
                if (_max_height) {
                    this.y = this.originRect.y - this.offsetCheck;
                    this.y *= -1;
                }
                if (_max_width) {
                    this.x = this.originRect.x - this.offsetCheck;
                    this.x *= -1;
                }
            }
            else if (this.checkBottom()) {
                this.y += (/** @type {?} */ (this.checkBottom(true)));
            }
            else if (this.checkTop()) {
                this.y -= (/** @type {?} */ (this.checkTop(true)));
            }
            if (this.checkRight()) {
                this.x += (/** @type {?} */ (this.checkRight(true)));
            }
            else if (this.checkLeft()) {
                this.x -= (/** @type {?} */ (this.checkLeft(true)));
            }
        }
        // round result
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.ax = Math.round(this.ax);
        this.ay = Math.round(this.ay);
    }
    /**
     * @return {?}
     */
    createPosition() {
        if (this.xPosition && this.yPosition) {
            throw new Error(`You can not use \`xPosition\` and \`yPosition\` together, use only one of them.`);
        }
        if ((this.xPosition || this.yPosition) && !this.placement) {
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
        if (this.placement || this.xPosition || this.yPosition) {
            if (this.placement) {
                if (this.placement === YPosition.above) {
                    x = (this.originRect.width - this.overlayElementRect.width) / 2;
                    y = -this.overlayElementRect.height - this.offset;
                    oy = 'bottom';
                }
                else if (this.placement === YPosition.below) {
                    x = (this.originRect.width - this.overlayElementRect.width) / 2;
                    y = this.originRect.height + this.offset;
                    oy = 'top';
                }
                else {
                    /** @type {?} */
                    const dir = this.themeVariables.getDirection((/** @type {?} */ (this.placement)));
                    if (dir === DirPosition.left) {
                        ox = '100%';
                        x = -this.overlayElementRect.width - this.offset;
                        y = (this.originRect.height - this.overlayElementRect.height) / 2;
                    }
                    else if (dir === DirPosition.right) {
                        ox = '0%';
                        x = this.originRect.width + this.offset;
                        y = (this.originRect.height - this.overlayElementRect.height) / 2;
                    }
                }
            }
            if (this.xPosition) {
                /** @type {?} */
                const dir = this.themeVariables.getDirection((/** @type {?} */ (this.xPosition)));
                if (dir === DirPosition.right) {
                    ox = '0%';
                    x = 0;
                }
                else if (dir === DirPosition.left) {
                    ox = '100%';
                    x = this.originRect.width - this.overlayElementRect.width;
                }
            }
            else if (this.yPosition) {
                if (this.yPosition === YPosition.above) {
                    y = 0;
                    oy = '0%';
                }
                else if (this.yPosition === YPosition.below) {
                    y = this.originRect.height - this.overlayElementRect.height;
                    oy = '100%';
                }
            }
        }
        this.x = x;
        this.y = y;
        this.ax = x + this.overlayElementRect.x;
        this.ay = y + this.overlayElementRect.y;
        this.ox = ox;
        this.oy = oy;
        return {
            x: Math.round(x),
            y: Math.round(y),
            ox,
            oy
        };
    }
    /**
     * @param {?=} returnVal
     * @return {?}
     */
    checkLeft(returnVal) {
        /** @type {?} */
        const rest = this.ax - this.offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.xPosition) {
                this.xPosition = (/** @type {?} */ (invertPlacement(this.xPosition)));
            }
            return true;
        }
        return false;
    }
    /**
     * @param {?=} returnVal
     * @return {?}
     */
    checkRight(returnVal) {
        /** @type {?} */
        const rest = window.innerWidth - (this.ax + this.overlayElementRect.width + this.offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.xPosition) {
                this.xPosition = (/** @type {?} */ (invertPlacement(this.xPosition)));
            }
            return true;
        }
        return false;
    }
    /**
     * @param {?=} returnVal
     * @return {?}
     */
    checkTop(returnVal) {
        /** @type {?} */
        const rest = this.ay - this.offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement === YPosition.above || this.placement === YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.yPosition) {
                this.yPosition = (/** @type {?} */ (invertPlacement(this.yPosition)));
            }
            return true;
        }
        return false;
    }
    /**
     * @param {?=} returnVal
     * @return {?}
     */
    checkBottom(returnVal) {
        /** @type {?} */
        const rest = window.innerHeight - (this.ay + this.overlayElementRect.height + this.offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (this.placement === YPosition.above || this.placement === YPosition.below) {
                this.placement = invertPlacement(this.placement);
            }
            if (this.yPosition) {
                this.yPosition = (/** @type {?} */ (invertPlacement(this.yPosition)));
            }
            return true;
        }
        return false;
    }
    /**
     * @return {?}
     */
    checkAll() {
        return this.checkLeft() ||
            this.checkRight() ||
            this.checkTop() ||
            this.checkBottom();
    }
}
/**
 * @param {?} placement
 * @return {?}
 */
function invertPlacement(placement) {
    if (placement === YPosition.above) {
        return YPosition.below;
    }
    else if (placement === YPosition.below) {
        return YPosition.above;
    }
    else if (placement === XPosition.after) {
        return XPosition.before;
    }
    else if (placement === XPosition.before) {
        return XPosition.after;
    }
    else if (placement === XPosition.right) {
        return XPosition.left;
    }
    else if (placement === XPosition.left) {
        return XPosition.right;
    }
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
     * @param {?=} priority style priority(default: 0)
     * @param {?=} parentStyle
     * @return {?}
     */
    addSimpleStyle(id, css, priority, parentStyle) {
        return (/** @type {?} */ (this._createStyleContent2((/** @type {?} */ (css)), id, priority, TypeStyle.OnlyOne, false, parentStyle)));
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
 * @param {?} themeVariables
 * @return {?}
 */
function converterToCssKeyAndStyle(str, themeVariables) {
    /** @type {?} */
    const hyphenCase = toHyphenCase(str);
    if (hyphenCase.indexOf(DirAlias.before) !== -1) {
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
            this._rippleRef = null;
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
    },
    button: {
        '-webkit-tap-highlight-color': 'transparent',
        backgroundColor: `transparent`,
        border: 0,
        '-moz-appearance': 'none',
        '-webkit-appearance': 'none',
        margin: 0,
        outline: 'none',
        boxSizing: 'border-box',
        position: 'relative',
        textDecorationLine: 'none',
        '-webkit-text-decoration-line': 'none',
        '&::-moz-focus-inner': {
            border: 0
        }
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
                        const triggerElement = this._triggerElement.nativeElement;
                        /** @type {?} */
                        const rippleContainer = (this._rippleContainer && this._rippleContainer.nativeElement) || triggerElement;
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
// Element to move, time in ms to animate
/**
 * @param {?} element
 * @param {?} duration
 * @return {?}
 */
function scrollTo(element, duration) {
    /** @type {?} */
    let e = document.documentElement;
    if (e.scrollTop === 0) {
        /** @type {?} */
        const t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}
// Element to move, element or px from, element or px to, time in ms to animate
/**
 * @param {?} element
 * @param {?} from
 * @param {?} to
 * @param {?} duration
 * @return {?}
 */
function scrollToC(element, from, to, duration) {
    if (duration <= 0) {
        return;
    }
    if (typeof from === 'object') {
        from = from.offsetTop;
    }
    if (typeof to === 'object') {
        to = to.offsetTop;
    }
    createScrollWithAnimation(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}
/**
 * @param {?} element
 * @param {?} to
 * @param {?} duration
 * @param {?=} p
 * @param {?=} motion
 * @return {?}
 */
function scrollWithAnimation(element, to, duration, p, motion) {
    /** @type {?} */
    const _motion = motion || easeOutCuaic;
    const { scrollLeft } = element;
    return createScrollWithAnimation(element, scrollLeft, to, 0, 1 / duration, 20, _motion, p);
}
/**
 * @param {?} element
 * @param {?} xFrom
 * @param {?} xTo
 * @param {?} t01
 * @param {?} speed
 * @param {?} step
 * @param {?} motion
 * @param {?=} p
 * @return {?}
 */
function createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p) {
    /** @type {?} */
    const scrollT = p === 'y' ? 'scrollTop' : 'scrollLeft';
    if (t01 < 0 || t01 > 1 || speed <= 0) {
        element[scrollT] = xTo;
        return;
    }
    element[scrollT] = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;
    setTimeout(() => {
        createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p);
    }, step);
}
// function linearTween(t: number) {
//   return t;
// }
// function easeInQuad(t: number) {
//   return t * t;
// }
// function easeOutQuad(t: number) {
//   return -t * (t - 2);
// }
// function easeInOutQuad(t: number) {
//   t /= 0.5;
//   if (t < 1) {return t * t / 2; }
//   t--;
//   return (t * (t - 2) - 1) / 2;
// }
// function easeInCuaic(t: number) {
//   return t * t * t;
// }
/**
 * @param {?} t
 * @return {?}
 */
function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
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
        const el = getNativeElement(element);
        /** @type {?} */
        const focusStateInfo = this._elementMap.get(el);
        if (focusStateInfo) {
            focusStateInfo.unlisten();
            this._elementMap.delete(el);
            this._decrementCount();
        }
    }
    /**
     * @param {?} event
     * @param {?} subject
     * @return {?}
     */
    _on(event, subject) {
        /** @type {?} */
        let by = null;
        if (event.type === 'focus') {
            by = this._currentEvent || 'keyboard';
        }
        this._ngZone.run(() => subject.next(by));
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
const AUI_VERSION = '1.9.12-nightly.20181229-jq977qef';
/** @type {?} */
const AUI_LAST_UPDATE = '2018-12-29T08:22:52.261Z';

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
class WinResize {
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
WinResize.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WinResize.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
/** @nocollapse */ WinResize.ngInjectableDef = defineInjectable({ factory: function WinResize_Factory() { return new WinResize(inject(DOCUMENT), inject(NgZone)); }, token: WinResize, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class WinScroll {
    /**
     * @param {?} _document
     * @param {?} ngZone
     */
    constructor(_document, ngZone) {
        this._document = _document;
        if (Platform.isBrowser) {
            ngZone.runOutsideAngular(() => {
                this.scroll$ = fromEvent(window.document, 'scroll').pipe(auditTime(20), map(() => {
                    return window.scrollY || this._document.documentElement.scrollTop;
                }), share());
            });
        }
        else {
            this.scroll$ = empty();
        }
    }
}
WinScroll.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WinScroll.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
/** @nocollapse */ WinScroll.ngInjectableDef = defineInjectable({ factory: function WinScroll_Factory() { return new WinScroll(inject(DOCUMENT), inject(NgZone)); }, token: WinScroll, providedIn: "root" });

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
    { type: WinScroll },
    { type: WinResize }
];
/** @nocollapse */ LyOverlay.ngInjectableDef = defineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(inject(LyOverlayContainer), inject(ComponentFactoryResolver), inject(ApplicationRef), inject(INJECTOR), inject(WinScroll), inject(WinResize)); }, token: LyOverlay, providedIn: "root" });

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

export { getContrastYIQ, shadowBuilderDeprecated, shadowBuilder, Shadows, THEME_VARIABLES, IS_CORE_THEME, Platform, supportsPassiveEventListeners, LyCommonModule, getNativeElement, NgTranscludeDirective, NgTranscludeModule, exactPosition, toBoolean, defaultEntry, scrollTo, scrollToC, scrollWithAnimation, FocusStatus, LyFocusState, AUI_VERSION, AUI_LAST_UPDATE, LY_HAMMER_OPTIONS, LyHammerGestureConfig, LyPaperBase, LyPaperMixinBase, LyPaper, CoreTheme, LY_THEME_GLOBAL_VARIABLES, LY_THEME, LY_THEME_NAME, converterToCssKeyAndStyle, capitalizeFirstLetter, StylesInDocument, LyTheme2, LyThemeModule, LY_COMMON_STYLES, LyCoreStyles, Undefined, UndefinedValue, transformMediaQuery, InvertMediaQuery, eachMedia, isObject, mergeDeep, LyStyleUtils, Dir, DirAlias, DirPosition, LyOverlayContainer, LyOverlayBackdrop, LyOverlay, LyOverlayModule, MutationObserverFactory, ElementObserver, WinResize, WinScroll, mixinStyleUpdater, mixinDisableRipple, mixinDisabled, mixinColor, mixinBg, mixinRaised, mixinOutlined, mixinElevation, mixinShadowColor, Ripple, LyRippleService, getPosition, invertPlacement, YPosition, XPosition, Positioning, AlignAlias, LyWithClass as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9zcmMvcGFsZXR0ZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zaGFkb3cudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvYWx5bGUtY29uZmlnLXNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGxhdGZvcm0udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcGxhdGZvcm0vcGFzc2l2ZS1saXN0ZW5lcnMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvdGhlbWUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3N0eWxlLXV0aWxzLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9wb3NpdGlvbi9wb3NpdGlvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy90aGVtZS90aGVtZTIuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2NvbW1vbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vYnVpbGQtY29tbW9uLWJlaGF2aW9ycy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2lzLWJvb2xlYW4udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcmlwcGxlL3JpcHBsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9zdHlsZXMvY29yZS1zdHlsZXMudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvcmlwcGxlL3JpcHBsZS5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9kaXNhYmxlLXJpcHBsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vZGlzYWJsZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvY29tbW9uL2NvbG9yLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9iZy50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vcmFpc2VkLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9vdXRsaW5lZC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9jb21tb24vZWxldmF0aW9uLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2NvbW1vbi9zaGFkb3ctY29sb3IudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvcGFwZXIudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvd2l0aC1jbGFzcy5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdGhlbWUvY29tbW9uLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2VsL29mZnNldC50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9taW5pbWFsL2RlZmF1bHQtZW50cnkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWluaW1hbC9zY3JvbGwtdG8udHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvdmVyc2lvbi50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9nZXN0dXJlL2dlc3R1cmUtY29uZmlnLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy91bmRlZmluZWQudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9vdmVybGF5LWNvbnRhaW5lci50cyIsIm5nOi8vQGFseWxlL3VpL3NyYy9kb20vcmVzaXplLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9zY3JvbGwudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXkudHMiLCJuZzovL0BhbHlsZS91aS9zcmMvZG9tL292ZXJsYXkubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL2RvbS9tdXRhdGlvbi1vYnNlcnZlci1mYWN0b3J5LnRzIiwibmc6Ly9AYWx5bGUvdWkvc3JjL3Bvc2l0aW9uL2FsaWduLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDb250cmFzdFlJUShoZXhjb2xvcikge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4Y29sb3Iuc3Vic3RyKDAsIDIpLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXhjb2xvci5zdWJzdHIoMiwgMiksIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleGNvbG9yLnN1YnN0cig0LCAyKSwgMTYpO1xuICBjb25zdCB5aXEgPSAoKHIgKiAyOTkpICsgKGcgKiA1ODcpICsgKGIgKiAxMTQpKSAvIDEwMDA7XG4gIHJldHVybiAoeWlxID49IDEyOCkgPyAnYmxhY2snIDogJ3doaXRlJztcbn1cbiIsImltcG9ydCAqIGFzIF9jaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcbmNvbnN0IGNocm9tYSA9IF9jaHJvbWE7XG5cbmNvbnN0IHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbmNvbnN0IHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSA9IDAuMTQ7XG5jb25zdCBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5leHBvcnQgY29uc3QgU2hhZG93cyA9IFtcbiAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICBbMCwgMSwgMywgMCwgMCwgMSwgMSwgMCwgMCwgMiwgMSwgLTFdLFxuICBbMCwgMSwgNSwgMCwgMCwgMiwgMiwgMCwgMCwgMywgMSwgLTJdLFxuICBbMCwgMSwgOCwgMCwgMCwgMywgNCwgMCwgMCwgMywgMywgLTJdLFxuICBbMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwXSxcbiAgWzAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMF0sXG4gIFswLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwXSxcbiAgWzAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDFdLFxuICBbMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMl0sXG4gIFswLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyXSxcbiAgWzAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzXSxcbiAgWzAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzXSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0XSxcbiAgWzAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0XSxcbiAgWzAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0XSxcbiAgWzAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1XSxcbiAgWzAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNV0sXG4gIFswLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDVdLFxuICBbMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2XSxcbiAgWzAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNl0sXG4gIFswLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3XSxcbiAgWzAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDddLFxuICBbMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgN10sXG4gIFswLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4XSxcbiAgWzAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDhdXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXJEZXByZWNhdGVkKGVsZXZhdGlvbjogbnVtYmVyIHwgc3RyaW5nID0gMiwgY29sb3IgPSAnIzAwMCcpIHtcbiAgY29uc3QgQ29sb3IgPSBjaHJvbWEoY29sb3IpO1xuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93S2V5VW1icmFPcGFjaXR5KS5jc3MoKSxcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5KS5jc3MoKVxuICBdO1xuICBjb25zdCBlID0gU2hhZG93c1tlbGV2YXRpb25dO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgYm94LXNoYWRvdzoke2VbMF19cHggJHtlWzFdfXB4ICR7ZVsyXX1weCAke2VbM119cHggJHtjb2xvcnNbMF19LCR7ZVs0XX1weCAke2VbNV19cHggJHtlWzZdfXB4ICR7ZVs3XX1weCAke2NvbG9yc1sxXX0sJHtlWzhdfXB4ICR7ZVs5XX1weCAke2VbMTBdfXB4ICR7ZVsxMV19cHggJHtjb2xvcnNbMl19O2A7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWRvd0J1aWxkZXIoZWxldmF0aW9uOiBudW1iZXIgfCBzdHJpbmcsIGNvbG9yPzogc3RyaW5nKSB7XG4gIGxldCBDb2xvciA9IGNocm9tYShjb2xvciB8fCAnIzAwMCcpO1xuICBjb25zdCByZ2IgPSBDb2xvci5nZXQoJ3JnYicpIGFzIGFueSBhcyBudW1iZXJbXTtcbiAgaWYgKCEocmdiWzBdID09PSByZ2JbMV0gJiYgcmdiWzBdID09PSByZ2JbMl0pKSB7XG4gICAgLy8gRGFya2VuIGFuZCBzYXR1cmF0ZSBpZiB0aGUgY29sb3IgaXMgbm90IGluIHRoZSBncmF5c2NhbGVcbiAgICBDb2xvciA9IENvbG9yLmRhcmtlbigpLnNhdHVyYXRlKDIpO1xuICB9XG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICBDb2xvci5hbHBoYShzaGFkb3dLZXlVbWJyYU9wYWNpdHkpLmNzcygpLFxuICAgIENvbG9yLmFscGhhKHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSkuY3NzKCksXG4gICAgQ29sb3IuYWxwaGEoc2hhZG93QW1iaWVudFNoYWRvd09wYWNpdHkpLmNzcygpXG4gIF07XG4gIGNvbnN0IGUgPSBTaGFkb3dzW2VsZXZhdGlvbl07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGAke2VbMF19cHggJHtlWzFdfXB4ICR7ZVsyXX1weCAke2VbM119cHggJHtjb2xvcnNbMF19LCR7ZVs0XX1weCAke2VbNV19cHggJHtlWzZdfXB4ICR7ZVs3XX1weCAke2NvbG9yc1sxXX0sJHtlWzhdfXB4ICR7ZVs5XX1weCAke2VbMTBdfXB4ICR7ZVsxMV19cHggJHtjb2xvcnNbMl19O2A7XG5cbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFsZXR0ZVZhcmlhYmxlcz4oJ2x5LnRoZW1lLnZhcmlhYmxlcycpO1xuZXhwb3J0IGNvbnN0IElTX0NPUkVfVEhFTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48dHJ1ZT4oJ2x5LmlzLnJvb3QnKTtcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbGV0dGVWYXJpYWJsZXMge1xuICBkZWZhdWx0Pzogc3RyaW5nO1xuICBjb250cmFzdD86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yU2NoZW1lIHtcbiAgYmFja2dyb3VuZD86IHtcbiAgICBkZWZhdWx0Pzogc3RyaW5nLFxuICAgIHBhcGVyPzogc3RyaW5nLFxuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfTtcbiAgdGV4dD86IHtcbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeT86IHN0cmluZyxcbiAgICBzZWNvbmRhcnk/OiBzdHJpbmcsXG4gICAgZGlzYWJsZWQ/OiBzdHJpbmcsXG4gICAgaGludD86IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH07XG4gIGRpdmlkZXI/OiBzdHJpbmc7XG4gIC8qKiBDb21wb25lbnRzIHZhcmlhYmxlcyAqL1xuICBjb2xvclNoYWRvdz86IHN0cmluZztcbiAgYmFyPzogc3RyaW5nO1xuICBpbnB1dD86IHtcbiAgICBsYWJlbD86IHN0cmluZyxcbiAgICB1bmRlcmxpbmU/OiBzdHJpbmdcbiAgfTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuIiwiXG4vLyBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIHN1cHBvcnRzIHRoZSBWOCBCcmVhayBJdGVyYXRvci4gVGhlIFY4IGNoZWNrXG4vLyBpcyBuZWNlc3NhcnkgdG8gZGV0ZWN0IGFsbCBCbGluayBiYXNlZCBicm93c2Vycy5cbmNvbnN0IGhhc1Y4QnJlYWtJdGVyYXRvciA9ICh0eXBlb2YoSW50bCkgIT09ICd1bmRlZmluZWQnICYmIChJbnRsIGFzIGFueSkudjhCcmVha0l0ZXJhdG9yKTtcbi8qKlxuICogU2VydmljZSB0byBkZXRlY3QgdGhlIGN1cnJlbnQgcGxhdGZvcm0gYnkgY29tcGFyaW5nIHRoZSB1c2VyQWdlbnQgc3RyaW5ncyBhbmRcbiAqIGNoZWNraW5nIGJyb3dzZXItc3BlY2lmaWMgZ2xvYmFsIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybSB7XG4gIHN0YXRpYyByZWFkb25seSBpc0Jyb3dzZXI6IGJvb2xlYW4gPSB0eXBlb2YgZG9jdW1lbnQgPT09ICdvYmplY3QnICYmICEhZG9jdW1lbnQ7XG4gIC8qKiBMYXlvdXQgRW5naW5lcyAqL1xuICBzdGF0aWMgcmVhZG9ubHkgRURHRSA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJiAvKGVkZ2UpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgc3RhdGljIHJlYWRvbmx5IFRSSURFTlQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvLyBFZGdlSFRNTCBhbmQgVHJpZGVudCBtb2NrIEJsaW5rIHNwZWNpZmljIHRoaW5ncyBhbmQgbmVlZCB0byBiZSBleGNsdWRlZCBmcm9tIHRoaXMgY2hlY2suXG4gIHN0YXRpYyByZWFkb25seSBCTElOSyA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxuICAgICAgKCEhKCh3aW5kb3cgYXMgYW55KS5jaHJvbWUgfHwgaGFzVjhCcmVha0l0ZXJhdG9yKSAmJiAhIUNTUyAmJiAhUGxhdGZvcm0uRURHRSAmJiAhUGxhdGZvcm0uVFJJREVOVCk7XG5cbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXG4gIC8vIGVuc3VyZSB0aGF0IFdlYmtpdCBydW5zIHN0YW5kYWxvbmUgYW5kIGlzIG5vdCB1c2VkIGFzIGFub3RoZXIgZW5naW5lJ3MgYmFzZS5cbiAgc3RhdGljIHJlYWRvbmx5IFdFQktJVCA9IFBsYXRmb3JtLmlzQnJvd3NlciAmJlxuICAgICAgL0FwcGxlV2ViS2l0L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhUGxhdGZvcm0uQkxJTksgJiYgIVBsYXRmb3JtLkVER0UgJiYgIVBsYXRmb3JtLlRSSURFTlQ7XG5cbiAgLyoqIEJyb3dzZXJzIGFuZCBQbGF0Zm9ybSBUeXBlcyAqL1xuICBzdGF0aWMgcmVhZG9ubHkgSU9TID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEod2luZG93IGFzIGFueSkuTVNTdHJlYW07XG5cbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcbiAgLy8gdGhlbSBzZWxmIGFzIEdlY2tvLWxpa2UgYnJvd3NlcnMgYW5kIG1vZGlmeSB0aGUgdXNlckFnZW50J3MgYWNjb3JkaW5nIHRvIHRoYXQuXG4gIC8vIFNpbmNlIHdlIG9ubHkgY292ZXIgb25lIGV4cGxpY2l0IEZpcmVmb3ggY2FzZSwgd2UgY2FuIHNpbXBseSBjaGVjayBmb3IgRmlyZWZveFxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXG4gIHN0YXRpYyByZWFkb25seSBGSVJFRk9YID0gUGxhdGZvcm0uaXNCcm93c2VyICYmIC8oZmlyZWZveHxtaW5lZmllbGQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAvLyBUcmlkZW50IG9uIG1vYmlsZSBhZGRzIHRoZSBhbmRyb2lkIHBsYXRmb3JtIHRvIHRoZSB1c2VyQWdlbnQgdG8gdHJpY2sgZGV0ZWN0aW9ucy5cbiAgc3RhdGljIHJlYWRvbmx5IEFORFJPSUQgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICFQbGF0Zm9ybS5UUklERU5UO1xuXG4gIC8vIFNhZmFyaSBicm93c2VycyB3aWxsIGluY2x1ZGUgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZWlyIHVzZXJBZ2VudC4gU29tZSBicm93c2VycyBtYXkgZmFrZVxuICAvLyB0aGlzIGFuZCBqdXN0IHBsYWNlIHRoZSBTYWZhcmkga2V5d29yZCBpbiB0aGUgdXNlckFnZW50LiBUbyBiZSBtb3JlIHNhZmUgYWJvdXQgU2FmYXJpIGV2ZXJ5XG4gIC8vIFNhZmFyaSBicm93c2VyIHNob3VsZCBhbHNvIHVzZSBXZWJraXQgYXMgaXRzIGxheW91dCBlbmdpbmUuXG4gIHN0YXRpYyByZWFkb25seSBTQUZBUkkgPSBQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgL3NhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgUGxhdGZvcm0uV0VCS0lUO1xufVxuIiwibGV0IHN1cHBvcnRzUGFzc2l2ZTtcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycygpOiBib29sZWFuIHtcbiAgaWYgKHN1cHBvcnRzUGFzc2l2ZSA9PT0gdm9pZCAwKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICBnZXQ6ICgpID0+IHtcbiAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG4gICAgfSBjYXRjaCAoZSkgeyB9XG4gIH1cbiAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVN0eWxlVXRpbHMsIERpciB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcbmltcG9ydCB7IFN0eWxlQ29udGFpbmVyIH0gZnJvbSAnLi90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBSaXBwbGVWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9yaXBwbGUnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeVZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3R5cG9ncmFwaHknO1xuaW1wb3J0IHsgQ2hlY2tib3hWYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9jaGVja2JveCc7XG5pbXBvcnQgeyBTbmFja0JhclZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBCdXR0b25WYXJpYWJsZXMgfSBmcm9tICcuL3ZhcmlhYmxlcy9idXR0b24nO1xuaW1wb3J0IHsgVG9vbHRpcFZhcmlhYmxlcyB9IGZyb20gJy4vdmFyaWFibGVzL3Rvb2x0aXAnO1xuaW1wb3J0IHsgQXZhdGFyVmFyaWFibGVzIH0gZnJvbSAnLi92YXJpYWJsZXMvYXZhdGFyJztcblxuZXhwb3J0IGNvbnN0IExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMgPSBuZXcgSW5qZWN0aW9uVG9rZW48UGFydGlhbFRoZW1lVmFyaWFibGVzPignbHkudGhlbWUuZ2xvYmFsLnZhcmlhYmxlcycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FID0gbmV3IEluamVjdGlvblRva2VuPFRoZW1lQ29uZmlnIHwgVGhlbWVDb25maWdbXT4oJ2x5X3RoZW1lX2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IExZX1RIRU1FX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignbHkudGhlbWUubmFtZScpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmltYXJ5OiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBhY2NlbnQ6IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIHdhcm46IERlZmF1bHRWYWwgJiBQYWxldHRlQ29sb3I7XG4gIGRpc2FibGVkOiBEZWZhdWx0VmFsICYgUGFsZXR0ZUNvbG9yO1xuICBwYXBlcjogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcjtcbiAgYmFja2dyb3VuZDoge1xuICAgIC8qKiBzZWNvbmRhcnkgKi9cbiAgICBkZWZhdWx0OiBzdHJpbmcsXG4gICAgcHJpbWFyeTogRGVmYXVsdFZhbCAmIFBhbGV0dGVDb2xvcixcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICB0ZXJ0aWFyeTogc3RyaW5nLFxuICAgIGJhc2U6IHN0cmluZ1xuICB9O1xuICB0ZXh0OiB7XG4gICAgZGVmYXVsdDogc3RyaW5nLFxuICAgIHByaW1hcnk6IHN0cmluZyxcbiAgICBzZWNvbmRhcnk6IHN0cmluZyxcbiAgICBkaXNhYmxlZDogc3RyaW5nLFxuICAgIGhpbnQ6IHN0cmluZ1xuICB9O1xuICB0eXBvZ3JhcGh5OiBUeXBvZ3JhcGh5VmFyaWFibGVzO1xuICAvKiogY29sb3IgZm9yIGRpdmlkZXIgKi9cbiAgZGl2aWRlcjogc3RyaW5nO1xuICBzaGFkb3c6IHN0cmluZztcbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBzaGFkb3cgaW5zdGVhZCAqL1xuICBjb2xvclNoYWRvdz86IHN0cmluZztcbiAgcmFkaW86IHtcbiAgICAvKiogY29sb3IgZm9yIHJhZGlvOm91dGVyQ2lyY2xlICovXG4gICAgb3V0ZXJDaXJjbGU/OiBzdHJpbmc7XG4gIH07XG4gIG1lbnU6IHtcbiAgICByb290PzogU3R5bGVDb250YWluZXJcbiAgfTtcbiAgZHJhd2VyOiB7XG4gICAgLyoqIGNvbG9yIGZvciBkcmF3ZXI6YmFja2Ryb3AgKi9cbiAgICBiYWNrZHJvcDogc3RyaW5nXG4gIH07XG4gIGZpZWxkOiB7XG4gICAgYm9yZGVyQ29sb3I6IHN0cmluZ1xuICAgIGxhYmVsQ29sb3I6IHN0cmluZ1xuICAgIGFwcGVhcmFuY2U6IHtcbiAgICAgIGJhc2U/OiB7XG4gICAgICAgIHJvb3Q/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBjb250YWluZXI/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmaWVsZHNldD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lckZvY3VzZWQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBsYWJlbD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHBsYWNlaG9sZGVyPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5wdXQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBmbG9hdGluZ0xhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcHJlZml4PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgaW5maXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBzdWZmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBoaW50PzogU3R5bGVDb250YWluZXJcbiAgICAgIH07XG4gICAgICBbYXBwZWFyYW5jZU5hbWU6IHN0cmluZ106IHtcbiAgICAgICAgcm9vdD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lcj86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZpZWxkc2V0PzogU3R5bGVDb250YWluZXJcbiAgICAgICAgY29udGFpbmVyRm9jdXNlZD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGxhYmVsPzogU3R5bGVDb250YWluZXJcbiAgICAgICAgcGxhY2Vob2xkZXI/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBpbnB1dD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGZsb2F0aW5nTGFiZWw/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBwcmVmaXg/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgICBpbmZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIHN1ZmZpeD86IFN0eWxlQ29udGFpbmVyXG4gICAgICAgIGhpbnQ/OiBTdHlsZUNvbnRhaW5lclxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgaWNvbkJ1dHRvbjoge1xuICAgIHNpemU6IHN0cmluZ1xuICB9O1xuICBpY29uOiB7XG4gICAgZm9udFNpemU6IHN0cmluZ1xuICB9O1xuICB6SW5kZXg6IHtcbiAgICB0b29sYmFyOiBudW1iZXJcbiAgICBkcmF3ZXI6IG51bWJlclxuICAgIG92ZXJsYXk6IG51bWJlclxuICAgIFtrZXk6IHN0cmluZ106IG51bWJlclxuICB9O1xuICBkaXJlY3Rpb24/OiBEaXI7XG4gIGFuaW1hdGlvbnM6IHtcbiAgICBjdXJ2ZXM6IHtcbiAgICAgIHN0YW5kYXJkOiBzdHJpbmdcbiAgICAgIGRlY2VsZXJhdGlvbjogc3RyaW5nXG4gICAgICBhY2NlbGVyYXRpb246IHN0cmluZ1xuICAgICAgc2hhcnA6IHN0cmluZ1xuICAgIH0sXG4gICAgZHVyYXRpb25zOiB7XG4gICAgICBjb21wbGV4OiBudW1iZXJcbiAgICAgIGVudGVyaW5nOiBudW1iZXJcbiAgICAgIGV4aXRpbmc6IG51bWJlclxuICAgIH1cbiAgfTtcbiAgcmlwcGxlOiBSaXBwbGVWYXJpYWJsZXM7XG4gIGJhZGdlOiB7XG4gICAgcm9vdD86IFN0eWxlQ29udGFpbmVyLFxuICAgIHBvc2l0aW9uPzoge1xuICAgICAgW3Bvc2l0aW9uTmFtZTogc3RyaW5nXTogU3R5bGVDb250YWluZXJcbiAgICB9XG4gIH07XG4gIGNoZWNrYm94OiBDaGVja2JveFZhcmlhYmxlcztcbiAgc25hY2tCYXI6IFNuYWNrQmFyVmFyaWFibGVzO1xuICBidXR0b246IEJ1dHRvblZhcmlhYmxlcztcbiAgdG9vbHRpcDogVG9vbHRpcFZhcmlhYmxlcztcbiAgYXZhdGFyOiBBdmF0YXJWYXJpYWJsZXM7XG59XG5cbmV4cG9ydCB0eXBlIFRoZW1lVmFyaWFibGVzID0gTHlTdHlsZVV0aWxzICYgVGhlbWVDb25maWc7XG5leHBvcnQgdHlwZSBQYXJ0aWFsVGhlbWVWYXJpYWJsZXMgPSBSZWN1cnNpdmVQYXJ0aWFsPFRoZW1lVmFyaWFibGVzPjtcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0VmFsIHtcbiAgZGVmYXVsdDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlQ29sb3Ige1xuICBjb250cmFzdD86IHN0cmluZztcbiAgLyoqIHNoYWRvdyBjb2xvciAqL1xuICBzaGFkb3c/OiBzdHJpbmc7XG59XG5cbnR5cGUgUmVjdXJzaXZlUGFydGlhbDxUPiA9IHtcbiAgW1AgaW4ga2V5b2YgVF0/OiBSZWN1cnNpdmVQYXJ0aWFsPFRbUF0+O1xufTtcbiIsImV4cG9ydCBjbGFzcyBMeVN0eWxlVXRpbHMge1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICBodG1sRm9udFNpemU6IG51bWJlcixcbiAgICBmb250U2l6ZTogbnVtYmVyO1xuICB9O1xuICBicmVha3BvaW50czoge1xuICAgIFhTbWFsbDogc3RyaW5nLFxuICAgIFNtYWxsOiBzdHJpbmcsXG4gICAgTWVkaXVtOiBzdHJpbmcsXG4gICAgTGFyZ2U6IHN0cmluZyxcbiAgICBYTGFyZ2U6IHN0cmluZyxcblxuICAgIEhhbmRzZXQ6IHN0cmluZyxcbiAgICBUYWJsZXQ6IHN0cmluZyxcbiAgICBXZWI6IHN0cmluZyxcblxuICAgIEhhbmRzZXRQb3J0cmFpdDogc3RyaW5nLFxuICAgIFRhYmxldFBvcnRyYWl0OiBzdHJpbmcsXG4gICAgV2ViUG9ydHJhaXQ6IHN0cmluZyxcblxuICAgIEhhbmRzZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBUYWJsZXRMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBXZWJMYW5kc2NhcGU6IHN0cmluZyxcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfTtcbiAgZGlyZWN0aW9uOiBEaXI7XG4gIHB4VG9SZW0odmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLnR5cG9ncmFwaHkuZm9udFNpemUgLyAxNDtcbiAgICByZXR1cm4gYCR7dmFsdWUgLyB0aGlzLnR5cG9ncmFwaHkuaHRtbEZvbnRTaXplICogc2l6ZX1yZW1gO1xuICB9XG4gIGNvbG9yT2YodmFsdWU6IHN0cmluZywgb3B0aW9uYWw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcywgdmFsdWUsIG9wdGlvbmFsKTtcbiAgfVxuICBnZXRCcmVha3BvaW50KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGBAbWVkaWEgJHt0aGlzLmJyZWFrcG9pbnRzW2tleV0gfHwga2V5fWA7XG4gIH1cblxuICBnZXREaXJlY3Rpb24odmFsOiBEaXJBbGlhcykge1xuICAgIGlmICh2YWwgPT09IERpckFsaWFzLmJlZm9yZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgfSBlbHNlIGlmICh2YWwgPT09IERpckFsaWFzLmFmdGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09ICdydGwnID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gRGlyIHtcbiAgcnRsID0gJ3J0bCcsXG4gIGx0ciA9ICdsdHInXG59XG5leHBvcnQgZW51bSBEaXJBbGlhcyB7XG4gIGJlZm9yZSA9ICdiZWZvcmUnLFxuICBhZnRlciA9ICdhZnRlcidcbn1cbmV4cG9ydCBlbnVtIERpclBvc2l0aW9uIHtcbiAgbGVmdCA9ICdsZWZ0JyxcbiAgcmlnaHQgPSAncmlnaHQnXG59XG5cbi8qKlxuICogZ2V0IGNvbG9yIG9mIG9iamVjdFxuICogQHBhcmFtIG9iaiBvYmplY3RcbiAqIEBwYXJhbSBwYXRoIHBhdGhcbiAqIEBwYXJhbSBvcHRpb25hbCBnZXQgb3B0aW9uYWwgdmFsdWUsIGlmIG5vdCBleGlzdCByZXR1cm4gZGVmYXVsdCBpZiBub3QgaXMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogc3RyaW5nW10gfCBzdHJpbmcsIG9wdGlvbmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcG9zaWJsZU9iID0gb2JqW19wYXRoW2ldXTtcbiAgICBpZiAocG9zaWJsZU9iKSB7XG4gICAgICBvYmogPSBwb3NpYmxlT2I7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKiBpZiBub3QgZXhpc3QgKi9cbiAgICAgIHJldHVybiBwYXRoIGFzIHN0cmluZztcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG9iaiBhcyBzdHJpbmc7XG4gIH0gZWxzZSBpZiAob3B0aW9uYWwpIHtcbiAgICByZXR1cm4gb2JqW29wdGlvbmFsXSB8fCBvYmpbJ2RlZmF1bHQnXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqWydkZWZhdWx0J107XG4gIH1cbiAgLy8gcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhY2hNZWRpYShzdHI6IHN0cmluZyB8IG51bWJlciwgZm46ICgodmFsOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcsIGlzTWVkaWE6IG51bWJlcikgPT4gdm9pZCkpIHtcbiAgaWYgKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgdmFsdWVzID0gc3RyLnNwbGl0KC9cXHMvZyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IHZhbEl0ZW0gPSB2YWx1ZXNbaW5kZXhdLnNwbGl0KC9cXEAvZyk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbEl0ZW0uc2hpZnQoKTtcbiAgICAgIGNvbnN0IGxlbiA9IHZhbEl0ZW0ubGVuZ3RoO1xuICAgICAgaWYgKGxlbikge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgZm4uY2FsbCh1bmRlZmluZWQsIHZhbHVlLCB2YWxJdGVtW2pdLCB2YWxJdGVtLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuLmNhbGwodW5kZWZpbmVkLCB2YWx1ZSwgdW5kZWZpbmVkLCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmbi5jYWxsKHVuZGVmaW5lZCwgc3RyLCB1bmRlZmluZWQsIDApO1xuICB9XG59XG4vKipcbiAqIFNpbXBsZSBvYmplY3QgY2hlY2suXG4gKiBAcGFyYW0gaXRlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVPih0YXJnZXQ6IFQsIHNvdXJjZTogVSk6IFQgJiBVO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcDxULCBVLCBWPih0YXJnZXQ6IFQsIHNvdXJjZTE6IFUsIHNvdXJjZTI6IFYpOiBUICYgVSAmIFY7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwPFQsIFUsIFYsIFc+KHRhcmdldDogVCwgc291cmNlMTogVSwgc291cmNlMjogViwgc291cmNlMzogVyk6IFQgJiBVICYgViAmIFc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldDogb2JqZWN0LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueTtcblxuLyoqXG4gKiBEZWVwIG1lcmdlIHR3byBvYmplY3RzLlxuICogQHBhcmFtIHRhcmdldFxuICogQHBhcmFtIC4uLnNvdXJjZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgeyByZXR1cm4gdGFyZ2V0OyB9XG4gIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcblxuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHsgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHt9IH0pOyB9XG4gICAgICAgIG1lcmdlRGVlcCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZURlZXAodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRSwgVGhlbWVWYXJpYWJsZXMsIExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbWVyZ2VEZWVwIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBmaXJzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSB0aGVtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfdGhlbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgVGhlbWVWYXJpYWJsZXM+KCk7XG4gIHByaXZhdGUgX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIERhdGFTdHlsZT4+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUUpIHRoZW1lQ29uZmlnOiBUaGVtZUNvbmZpZ1tdIHwgVGhlbWVDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTKSBnbG9iYWxWYXJpYWJsZXM6IFRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIGlmICghdGhlbWVDb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTFlfVEhFTUUgdW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCB7XG4gICAgICBpZDogJ2x5JyxcbiAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgZGF0YToge31cbiAgICB9KTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBub2RlczogTm9kZUxpc3QgPSBfZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdseS1zLWMnKTtcbiAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2Rlcy5pdGVtKGluZGV4KTtcbiAgICAgICAgICAoX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZpcnN0RWxlbWVudCA9IF9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhlbWVDb25maWcpKSB7XG4gICAgICB0aGVtZUNvbmZpZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgICAgbWVyZ2VEZWVwKGl0ZW0sIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGQoaXRlbSBhcyBhbnkpO1xuICAgICAgICB0aGlzLnRoZW1lcy5hZGQoaXRlbS5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgIG1lcmdlRGVlcCh0aGVtZUNvbmZpZywgZ2xvYmFsVmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkKHRoZW1lQ29uZmlnIGFzIGFueSk7XG4gICAgICB0aGlzLnRoZW1lcy5hZGQodGhlbWVDb25maWcubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lOiBUaGVtZVZhcmlhYmxlc1xuICAgKi9cbiAgYWRkKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykge1xuICAgIHRoaXMuX3RoZW1lTWFwLnNldCh0aGVtZS5uYW1lLCB0aGVtZSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuc2V0KHRoZW1lLm5hbWUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuICBnZXRTdHlsZU1hcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRGlyUG9zaXRpb24gfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5cbmV4cG9ydCBlbnVtIFlQb3NpdGlvbiB7XG4gIGFib3ZlID0gJ2Fib3ZlJyxcbiAgYmVsb3cgPSAnYmVsb3cnXG59XG5cbmV4cG9ydCBlbnVtIFhQb3NpdGlvbiB7XG4gIGJlZm9yZSA9ICdiZWZvcmUnLFxuICBhZnRlciA9ICdhZnRlcicsXG4gIGxlZnQgPSAnbGVmdCcsXG4gIHJpZ2h0ID0gJ3JpZ2h0J1xufVxuXG5leHBvcnQgdHlwZSBQbGFjZW1lbnQgPSBYUG9zaXRpb24gfCBZUG9zaXRpb247XG5cbi8qKiBAZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBgUG9zaXRpb25pbmdgICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oXG4gIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICB4UG9zaXRpb246IFhQb3NpdGlvbixcbiAgeVBvc2l0aW9uOiBZUG9zaXRpb24sXG4gIG9yaWdpbjogRWxlbWVudCxcbiAgb3ZlcmxheUVsZW1lbnQ6IEVsZW1lbnQsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgb2Zmc2V0ID0gMFxuKSB7XG4gIHJldHVybiBjcmVhdGVQb3NpdGlvbihcbiAgICBwbGFjZW1lbnQsXG4gICAgeFBvc2l0aW9uLFxuICAgIHlQb3NpdGlvbixcbiAgICBvcmlnaW4sXG4gICAgb3ZlcmxheUVsZW1lbnQsXG4gICAgdGhlbWVWYXJpYWJsZXMsXG4gICAgb2Zmc2V0XG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uKFxuICBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgeFBvc2l0aW9uOiBYUG9zaXRpb24sXG4gIHlQb3NpdGlvbjogWVBvc2l0aW9uLFxuICBvcmlnaW46IEVsZW1lbnQsXG4gIG92ZXJsYXlFbGVtZW50OiBFbGVtZW50LFxuICB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gIG9mZnNldCA9IDBcbikge1xuXG4gIGNvbnN0IG9yaWdpblJlY3QgPSBvcmlnaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgY29uc3Qgb3ZlcmxheUVsZW1lbnRSZWN0ID0gb3ZlcmxheUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgaWYgKHhQb3NpdGlvbiAmJiB5UG9zaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBjYW4gbm90IHVzZSBcXGB4UG9zaXRpb25cXGAgYW5kIFxcYHlQb3NpdGlvblxcYCB0b2dldGhlciwgdXNlIG9ubHkgb25lIG9mIHRoZW0uYCk7XG4gIH1cbiAgaWYgKCh4UG9zaXRpb24gfHwgeVBvc2l0aW9uKSAmJiAhcGxhY2VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcXGBwbGFjZW1lbnRcXGAgaXMgcmVxdWlyZWQuYCk7XG4gIH1cbiAgbGV0IHggPSAwLFxuICAgICAgeSA9IDAsXG4gICAgICBveCA9ICdjZW50ZXInLFxuICAgICAgb3kgPSAnY2VudGVyJztcbiAgaWYgKHBsYWNlbWVudCB8fCB4UG9zaXRpb24gfHwgeVBvc2l0aW9uKSB7XG4gICAgaWYgKHBsYWNlbWVudCkge1xuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgIHggPSAob3JpZ2luUmVjdC53aWR0aCAtIG92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCkgLyAyO1xuICAgICAgICB5ID0gLW92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQgLSBvZmZzZXQ7XG4gICAgICAgIG95ID0gJ2JvdHRvbSc7XG4gICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgIHggPSAob3JpZ2luUmVjdC53aWR0aCAtIG92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCkgLyAyO1xuICAgICAgICB5ID0gb3JpZ2luUmVjdC5oZWlnaHQgKyBvZmZzZXQ7XG4gICAgICAgIG95ID0gJ3RvcCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkaXIgPSB0aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24ocGxhY2VtZW50IGFzIGFueSk7XG4gICAgICAgIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgICB4ID0gLW92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCAtIG9mZnNldDtcbiAgICAgICAgICB5ID0gKG9yaWdpblJlY3QuaGVpZ2h0IC0gb3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCkgLyAyO1xuICAgICAgICB9IGVsc2UgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ucmlnaHQpIHtcbiAgICAgICAgICBveCA9ICcwJSc7XG4gICAgICAgICAgeCA9IG9yaWdpblJlY3Qud2lkdGggKyBvZmZzZXQ7XG4gICAgICAgICAgeSA9IChvcmlnaW5SZWN0LmhlaWdodCAtIG92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4UG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGRpciA9IHRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbih4UG9zaXRpb24gYXMgYW55KTtcbiAgICAgIGlmIChkaXIgPT09IERpclBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgIG94ID0gJzAlJztcbiAgICAgICAgeCA9IDA7XG4gICAgICB9IGVsc2UgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ubGVmdCkge1xuICAgICAgICBveCA9ICcxMDAlJztcbiAgICAgICAgeCA9IG9yaWdpblJlY3Qud2lkdGggLSBvdmVybGF5RWxlbWVudFJlY3Qud2lkdGg7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh5UG9zaXRpb24pIHtcbiAgICAgIGlmICh5UG9zaXRpb24gPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICB5ID0gMDtcbiAgICAgICAgb3kgPSAnMCUnO1xuICAgICAgfSBlbHNlIGlmICh5UG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB5ID0gb3JpZ2luUmVjdC5oZWlnaHQgLSBvdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0O1xuICAgICAgICBveSA9ICcxMDAlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiBNYXRoLnJvdW5kKHgpLFxuICAgIHk6IE1hdGgucm91bmQoeSksXG4gICAgb3gsXG4gICAgb3lcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nIHtcbiAgcHJpdmF0ZSBvZmZzZXRDaGVjayA9IDE2O1xuICBwcml2YXRlIG9yaWdpblJlY3QgPSB0aGlzLm9yaWdpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBhcyBET01SZWN0O1xuICBwcml2YXRlIG92ZXJsYXlFbGVtZW50UmVjdCA9IHRoaXMub3ZlcmxheUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYXMgRE9NUmVjdDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGF4OiBudW1iZXI7XG4gIGF5OiBudW1iZXI7XG4gIG94OiBzdHJpbmc7XG4gIG95OiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICAgIHByaXZhdGUgeFBvc2l0aW9uOiBYUG9zaXRpb24sXG4gICAgcHJpdmF0ZSB5UG9zaXRpb246IFlQb3NpdGlvbixcbiAgICBwcml2YXRlIG9yaWdpbjogRWxlbWVudCxcbiAgICBwcml2YXRlIG92ZXJsYXlFbGVtZW50OiBFbGVtZW50LFxuICAgIHByaXZhdGUgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICAgIHByaXZhdGUgb2Zmc2V0ID0gMFxuICApIHtcbiAgICB0aGlzLmNyZWF0ZVBvc2l0aW9uKCk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjsgaW5kZXgrKykge1xuICAgICAgaWYgKHRoaXMuY2hlY2tBbGwoKSkge1xuICAgICAgICB0aGlzLmNyZWF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2hlcmUgdGhlcmUgaXMgbm90IGVub3VnaCBzcGFjZVxuICAgIGlmICh0aGlzLmNoZWNrQWxsKCkpIHtcbiAgICAgIGNvbnN0IF9tYXhfd2lkdGggPSB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCArIHRoaXMub2Zmc2V0Q2hlY2sgKiAyID4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjb25zdCBfbWF4X2hlaWdodCA9IHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCArIHRoaXMub2Zmc2V0Q2hlY2sgKiAyID4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgaWYgKF9tYXhfd2lkdGggfHwgX21heF9oZWlnaHQpIHtcbiAgICAgICAgaWYgKF9tYXhfaGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy55ID0gdGhpcy5vcmlnaW5SZWN0LnkgLSB0aGlzLm9mZnNldENoZWNrO1xuICAgICAgICAgIHRoaXMueSAqPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX21heF93aWR0aCkge1xuICAgICAgICAgIHRoaXMueCA9IHRoaXMub3JpZ2luUmVjdC54IC0gdGhpcy5vZmZzZXRDaGVjaztcbiAgICAgICAgICB0aGlzLnggKj0gLTE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja0JvdHRvbSgpKSB7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmNoZWNrQm90dG9tKHRydWUpIGFzIG51bWJlcjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja1RvcCgpKSB7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLmNoZWNrVG9wKHRydWUpIGFzIG51bWJlcjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNoZWNrUmlnaHQoKSkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5jaGVja1JpZ2h0KHRydWUpIGFzIG51bWJlcjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja0xlZnQoKSkge1xuICAgICAgICB0aGlzLnggLT0gdGhpcy5jaGVja0xlZnQodHJ1ZSkgYXMgbnVtYmVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJvdW5kIHJlc3VsdFxuICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKHRoaXMueSk7XG4gICAgdGhpcy5heCA9IE1hdGgucm91bmQodGhpcy5heCk7XG4gICAgdGhpcy5heSA9IE1hdGgucm91bmQodGhpcy5heSk7XG5cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUG9zaXRpb24oXG4gICkge1xuICAgIGlmICh0aGlzLnhQb3NpdGlvbiAmJiB0aGlzLnlQb3NpdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2FuIG5vdCB1c2UgXFxgeFBvc2l0aW9uXFxgIGFuZCBcXGB5UG9zaXRpb25cXGAgdG9nZXRoZXIsIHVzZSBvbmx5IG9uZSBvZiB0aGVtLmApO1xuICAgIH1cbiAgICBpZiAoKHRoaXMueFBvc2l0aW9uIHx8IHRoaXMueVBvc2l0aW9uKSAmJiAhdGhpcy5wbGFjZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgcGxhY2VtZW50XFxgIGlzIHJlcXVpcmVkLmApO1xuICAgIH1cbiAgICBsZXQgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICBveCA9ICdjZW50ZXInLFxuICAgICAgICBveSA9ICdjZW50ZXInO1xuICAgIGlmICh0aGlzLnBsYWNlbWVudCB8fCB0aGlzLnhQb3NpdGlvbiB8fCB0aGlzLnlQb3NpdGlvbikge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgICAgeCA9ICh0aGlzLm9yaWdpblJlY3Qud2lkdGggLSB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCkgLyAyO1xuICAgICAgICAgIHkgPSAtdGhpcy5vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0IC0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgb3kgPSAnYm90dG9tJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgeCA9ICh0aGlzLm9yaWdpblJlY3Qud2lkdGggLSB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCkgLyAyO1xuICAgICAgICAgIHkgPSB0aGlzLm9yaWdpblJlY3QuaGVpZ2h0ICsgdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgb3kgPSAndG9wJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkaXIgPSB0aGlzLnRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbih0aGlzLnBsYWNlbWVudCBhcyBhbnkpO1xuICAgICAgICAgIGlmIChkaXIgPT09IERpclBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICAgICAgeCA9IC10aGlzLm92ZXJsYXlFbGVtZW50UmVjdC53aWR0aCAtIHRoaXMub2Zmc2V0O1xuICAgICAgICAgICAgeSA9ICh0aGlzLm9yaWdpblJlY3QuaGVpZ2h0IC0gdGhpcy5vdmVybGF5RWxlbWVudFJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09IERpclBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgICBveCA9ICcwJSc7XG4gICAgICAgICAgICB4ID0gdGhpcy5vcmlnaW5SZWN0LndpZHRoICsgdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgICB5ID0gKHRoaXMub3JpZ2luUmVjdC5oZWlnaHQgLSB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQpIC8gMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMueFBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMudGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKHRoaXMueFBvc2l0aW9uIGFzIGFueSk7XG4gICAgICAgIGlmIChkaXIgPT09IERpclBvc2l0aW9uLnJpZ2h0KSB7XG4gICAgICAgICAgb3ggPSAnMCUnO1xuICAgICAgICAgIHggPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGRpciA9PT0gRGlyUG9zaXRpb24ubGVmdCkge1xuICAgICAgICAgIG94ID0gJzEwMCUnO1xuICAgICAgICAgIHggPSB0aGlzLm9yaWdpblJlY3Qud2lkdGggLSB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC53aWR0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnlQb3NpdGlvbikge1xuICAgICAgICBpZiAodGhpcy55UG9zaXRpb24gPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgIG95ID0gJzAlJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnlQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgeSA9IHRoaXMub3JpZ2luUmVjdC5oZWlnaHQgLSB0aGlzLm92ZXJsYXlFbGVtZW50UmVjdC5oZWlnaHQ7XG4gICAgICAgICAgb3kgPSAnMTAwJSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuYXggPSB4ICsgdGhpcy5vdmVybGF5RWxlbWVudFJlY3QueDtcbiAgICB0aGlzLmF5ID0geSArIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0Lnk7XG4gICAgdGhpcy5veCA9IG94O1xuICAgIHRoaXMub3kgPSBveTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogTWF0aC5yb3VuZCh4KSxcbiAgICAgIHk6IE1hdGgucm91bmQoeSksXG4gICAgICBveCxcbiAgICAgIG95XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tMZWZ0KHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gdGhpcy5heCAtIHRoaXMub2Zmc2V0Q2hlY2s7XG4gICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgfVxuICAgIGlmIChyZXN0IDwgMCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYWJvdmUgJiYgdGhpcy5wbGFjZW1lbnQgIT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IGludmVydFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy54UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy54UG9zaXRpb24gPSBpbnZlcnRQbGFjZW1lbnQodGhpcy54UG9zaXRpb24pIGFzIFhQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJpdmF0ZSBjaGVja1JpZ2h0KHJldHVyblZhbD86IGJvb2xlYW4pOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgICBjb25zdCByZXN0ID0gd2luZG93LmlubmVyV2lkdGggLSAodGhpcy5heCArIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LndpZHRoICsgdGhpcy5vZmZzZXRDaGVjayk7XG4gICAgaWYgKHJldHVyblZhbCkge1xuICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgfVxuICAgIGlmIChyZXN0IDwgMCkge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ICE9PSBZUG9zaXRpb24uYWJvdmUgJiYgdGhpcy5wbGFjZW1lbnQgIT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IGludmVydFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy54UG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy54UG9zaXRpb24gPSBpbnZlcnRQbGFjZW1lbnQodGhpcy54UG9zaXRpb24pIGFzIFhQb3NpdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJpdmF0ZSBjaGVja1RvcChyZXR1cm5WYWw/OiBib29sZWFuKTogYm9vbGVhbiB8IG51bWJlciB7XG4gICAgY29uc3QgcmVzdCA9IHRoaXMuYXkgLSB0aGlzLm9mZnNldENoZWNrO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBpbnZlcnRQbGFjZW1lbnQodGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMueVBvc2l0aW9uKSBhcyBZUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2hlY2tCb3R0b20ocmV0dXJuVmFsPzogYm9vbGVhbik6IGJvb2xlYW4gfCBudW1iZXIge1xuICAgIGNvbnN0IHJlc3QgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAodGhpcy5heSArIHRoaXMub3ZlcmxheUVsZW1lbnRSZWN0LmhlaWdodCArIHRoaXMub2Zmc2V0Q2hlY2spO1xuICAgIGlmIChyZXR1cm5WYWwpIHtcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH1cbiAgICBpZiAocmVzdCA8IDApIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmFib3ZlIHx8IHRoaXMucGxhY2VtZW50ID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBpbnZlcnRQbGFjZW1lbnQodGhpcy5wbGFjZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMueVBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0gaW52ZXJ0UGxhY2VtZW50KHRoaXMueVBvc2l0aW9uKSBhcyBZUG9zaXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0xlZnQoKSB8fFxuICAgIHRoaXMuY2hlY2tSaWdodCgpIHx8XG4gICAgdGhpcy5jaGVja1RvcCgpIHx8XG4gICAgdGhpcy5jaGVja0JvdHRvbSgpO1xuICB9XG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnRQbGFjZW1lbnQocGxhY2VtZW50OiBQbGFjZW1lbnQpOiBQbGFjZW1lbnQge1xuICBpZiAocGxhY2VtZW50ID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uLmJlbG93O1xuICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbi5hYm92ZTtcbiAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFhQb3NpdGlvbi5hZnRlcikge1xuICAgIHJldHVybiBYUG9zaXRpb24uYmVmb3JlO1xuICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gWFBvc2l0aW9uLmJlZm9yZSkge1xuICAgIHJldHVybiBYUG9zaXRpb24uYWZ0ZXI7XG4gIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24ucmlnaHQpIHtcbiAgICByZXR1cm4gWFBvc2l0aW9uLmxlZnQ7XG4gIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBYUG9zaXRpb24ubGVmdCkge1xuICAgIHJldHVybiBYUG9zaXRpb24ucmlnaHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgSW5qZWN0LCBpc0Rldk1vZGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTFlfVEhFTUVfTkFNRSwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGlyQWxpYXMsIERpciB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcbmltcG9ydCB7IFlQb3NpdGlvbiB9IGZyb20gJy4uL3Bvc2l0aW9uL3Bvc2l0aW9uJztcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgJ0BnbG9iYWwnOiB7XG4gICAgJyosICo6YWZ0ZXIsICo6YmVmb3JlJzoge1xuICAgICAgJy13ZWJraXQtYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICctbW96LWJveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94J1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgUkVGX1JFR19FWFAgPSAvXFx7KFtcXHctXSspXFx9L2c7XG5cbmVudW0gVHlwZVN0eWxlIHtcbiAgTXVsdGlwbGUsXG4gIE9ubHlPbmVcbn1cblxuY29uc3QgU1RZTEVfTUFQNTogTWFwPGFueSwgU3R5bGVNYXA1PiA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZU1hcDUge1xuICBzdHlsZXM6IFN0eWxlc0ZuMiB8IFN0eWxlczI7XG4gIHR5cGU6IFR5cGVTdHlsZTtcbiAgcHJpb3JpdHk6IG51bWJlcjtcbiAgY3NzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmc7XG4gIC8qKiBnbG9iYWwgdGhlbWUgKi9cbiAgY2xhc3Nlcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIHJlcXVpcmVVcGRhdGUgKi9cbiAgY2xhc3Nlc1dpdGhUaGVtZT86IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgICB9IHwgc3RyaW5nXG4gIH07XG4gIC8qKiBPbmx5IGZvciBzdHlsZXMgb2YgVHlwZVN0eWxlLm9uZSAqL1xuICBwYXJlbnRTdHlsZT86IFN0eWxlcztcbiAgcmVxdWlyZVVwZGF0ZT86IGJvb2xlYW47XG4gIGlkOiBzdHJpbmc7XG59XG5cbmxldCBuZXh0Q2xhc3NJZCA9IDA7XG5sZXQgbmV4dEtleUZyYW1lSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNJbkRvY3VtZW50IHtcbiAgc3R5bGVzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXTogTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD5cbiAgfSA9IHt9O1xuICBzdHlsZUNvbnRhaW5lcnMgPSBuZXcgTWFwPG51bWJlciwgSFRNTEVsZW1lbnQ+KCk7XG4gIHN0eWxlRWxlbWVudEdsb2JhbE1hcCA9IG5ldyBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PigpO1xufVxuXG5jb25zdCBUSEVNRV9NQVAgPSBuZXcgTWFwPHN0cmluZywge1xuICBiYXNlOiBzdHJpbmdcbiAgY2hhbmdlOiBzdHJpbmcgfCBudWxsXG59PigpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lVmFyaWFibGVzO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG4gIGluaXRpYWxUaGVtZTogc3RyaW5nO1xuICBlbGVtZW50czogTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD47XG4gIF9lbGVtZW50c01hcCA9IG5ldyBNYXA8YW55LCBIVE1MU3R5bGVFbGVtZW50PigpO1xuICBwcml2YXRlIHRoZW1lTWFwID0gVEhFTUVfTUFQO1xuICAvKiogc3NyIG9yIGhtciAqL1xuICBwcml2YXRlIGlzRGV2T3JTZXJ2ZXIgPSBpc0Rldk1vZGUoKSB8fCAhUGxhdGZvcm0uaXNCcm93c2VyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVzSW5Eb2N1bWVudDogU3R5bGVzSW5Eb2N1bWVudCxcbiAgICBwdWJsaWMgY29yZTogQ29yZVRoZW1lLFxuICAgIEBJbmplY3QoTFlfVEhFTUVfTkFNRSkgdGhlbWVOYW1lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVOYW1lKTtcbiAgICAgIHRoaXMuX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGVtZU5hbWUgaW4gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1xuICAgICAgPyB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV1cbiAgICAgIDogdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdID0gbmV3IE1hcCgpO1xuICAgICAgaWYgKCF0aGlzLmluaXRpYWxUaGVtZSkge1xuICAgICAgICB0aGlzLmluaXRpYWxUaGVtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudGhlbWVNYXAuaGFzKHRoaXMuaW5pdGlhbFRoZW1lKSkge1xuICAgICAgICB0aGlzLnRoZW1lTWFwLnNldCh0aGlzLmluaXRpYWxUaGVtZSwge1xuICAgICAgICAgIGJhc2U6IHRoaXMuaW5pdGlhbFRoZW1lLFxuICAgICAgICAgIGNoYW5nZTogbnVsbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FkZERlZmF1bHRTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICogQHBhcmFtIHBhcmVudFN0eWxlXG4gICAqL1xuICBhZGRTdHlsZShpZDogc3RyaW5nLCBzdHlsZTogU3R5bGVDb250YWluZXIgfCAoKHRoZW1lKSA9PiBTdHlsZUNvbnRhaW5lcikgfCAoKHRoZW1lKSA9PiBzdHJpbmcpIHwgc3RyaW5nLCBlbD86IGFueSwgaW5zdGFuY2U/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyLCBwYXJlbnRTdHlsZT86IFN0eWxlcykge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZSBhcyBhbnksIGlkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBwYXJlbnRTdHlsZSkgYXMgc3RyaW5nO1xuICAgIGlmIChuZXdDbGFzcyA9PT0gaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgaWYgKGVsKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0NsYXNzID09PSBvbGRDbGFzcykge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgaWYgKG5hbSAhPT0gdGhpcy5jb25maWcubmFtZSkge1xuICAgICAgdGhpcy50aGVtZU1hcC5nZXQodGhpcy5pbml0aWFsVGhlbWUpLmNoYW5nZSA9IG5hbTtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldChuYW0pO1xuICAgICAgdGhpcy5fdXBkYXRlQWxsU3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRvZ2dsZSByaWdodC10by1sZWZ0L2xlZnQtdG8tcmlnaHQgKi9cbiAgdG9nZ2xlRGlyZWN0aW9uKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmNvbmZpZy5kaXJlY3Rpb247XG4gICAgdGhpcy5jb25maWcuZGlyZWN0aW9uID0gY3VycmVudCA9PT0gRGlyLmx0ciA/IERpci5ydGwgOiBEaXIubHRyO1xuICAgIHRoaXMuX3VwZGF0ZUFsbFN0eWxlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQWxsU3R5bGVzKCkge1xuICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoXywga2V5KSA9PiB7XG4gICAgICBjb25zdCBzdHlsZURhdGEgPSBTVFlMRV9NQVA1LmdldChrZXkpO1xuICAgICAgaWYgKHN0eWxlRGF0YS5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVEYXRhLnN0eWxlcywgc3R5bGVEYXRhLmlkLCBzdHlsZURhdGEucHJpb3JpdHksIHN0eWxlRGF0YS50eXBlLCB0cnVlLCBzdHlsZURhdGEucGFyZW50U3R5bGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbXBsZSBzdHlsZVxuICAgKiByZXR1cm4gY2xhc3NOYW1lXG4gICAqIEBwYXJhbSBpZCBpZCBvZiBzdHlsZVxuICAgKiBAcGFyYW0gY3NzIHN0eWxlIG9iamVjdCBvciBzdHJpbmdcbiAgICogQHBhcmFtIHByaW9yaXR5IHN0eWxlIHByaW9yaXR5KGRlZmF1bHQ6IDApXG4gICAqL1xuICBhZGRTaW1wbGVTdHlsZShpZDogc3RyaW5nLCBjc3M6IFN0eWxlQ29udGFpbmVyIHwgKCh0aGVtZSkgPT4gU3R5bGVDb250YWluZXIpLCBwcmlvcml0eT86IG51bWJlciwgcGFyZW50U3R5bGU/OiBTdHlsZXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIGlkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBwYXJlbnRTdHlsZSkgYXMgc3RyaW5nO1xuICB9XG4gIHByaXZhdGUgX2FkZERlZmF1bHRTdHlsZXMoKSB7XG4gICAgdGhpcy5hZGRTdHlsZVNoZWV0KGRlZmF1bHRTdHlsZXMpO1xuICB9XG5cblxuICAvKipcbiAgICogQWRkIG5ldyBhZGQgYSBuZXcgc3R5bGUgc2hlZXRcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZXNcbiAgICogQHBhcmFtIHByaW9yaXR5IHByaW9yaXR5IGZvciBzdHlsZVxuICAgKi9cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiBTdHlsZXMsIHByaW9yaXR5PzogbnVtYmVyKTogT25seUNsYXNzZXM8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgbnVsbCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRlbnQyKFxuICAgIHN0eWxlczogU3R5bGVzLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICB0eXBlOiBUeXBlU3R5bGUsXG4gICAgZm9yQ2hhbmdlVGhlbWU/OiBib29sZWFuLFxuICAgIHBhcmVudFN0eWxlPzogU3R5bGVzXG4gICkge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgYXMgc3RyaW5nIHx8IHN0eWxlcztcbiAgICBsZXQgaXNOZXdTdHlsZTogYm9vbGVhbjtcbiAgICBpZiAoIVNUWUxFX01BUDUuaGFzKG5ld0lkKSkge1xuICAgICAgaXNOZXdTdHlsZSA9IHRydWU7XG4gICAgICBTVFlMRV9NQVA1LnNldChuZXdJZCwge1xuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgc3R5bGVzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBjc3M6IHt9LFxuICAgICAgICBpZCxcbiAgICAgICAgcGFyZW50U3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZU1hcCA9IFNUWUxFX01BUDUuZ2V0KG5ld0lkKTtcbiAgICBjb25zdCB0aGVtZU5hbWUgPSB0aGlzLmluaXRpYWxUaGVtZTtcbiAgICBjb25zdCBpc0NyZWF0ZWQgPSBpc05ld1N0eWxlIHx8ICEoc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdKTtcbiAgICBpZiAoaXNDcmVhdGVkIHx8IGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAvKiogY3JlYXRlIG5ldyBzdHlsZSBmb3IgbmV3IHRoZW1lICovXG4gICAgICBsZXQgY3NzO1xuICAgICAgY29uc3QgdGhlbWVNYXAgPSB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSk7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTWFwLmNoYW5nZSB8fCB0aGVtZU5hbWUpO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZU1hcCwgc3R5bGVzKGNvbmZpZyksIHRoZW1lTmFtZSwgaWQsIHR5cGUsIGNvbmZpZyk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIGNyZWF0ZSBhIG5ldyBpZCBmb3Igc3R5bGUgdGhhdCBkb2VzIG5vdCA8LTxyZXF1aXJlPi0+IGNoYW5nZXMgKi9cbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXMsIHRoZW1lTmFtZSwgbmV3SWQgYXMgc3RyaW5nLCB0eXBlLCBjb25maWcpO1xuICAgICAgICBzdHlsZU1hcC5jc3MgPSBjc3M7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuaGFzKG5ld0lkKSkge1xuICAgICAgICBjb25zdCBuZXdFbCA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShjc3MpO1xuICAgICAgICBpZiAoc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgZm9yIHdoZW4gYSB0aGVtZSBjaGFuZ2VzXG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIG5ld0VsKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRGV2T3JTZXJ2ZXIpIHtcbiAgICAgICAgICAvLyBpbiBkZXYgbW9kZSBvciBzZXJ2ZXIgaXQgaXMgbm90IG5lY2Vzc2FyeVxuICAgICAgICAgIC8vIHNpbmNlIHRoZSBzdHlsZXMgd2lsbCBub3QgY2hhbmdlXG4gICAgICAgICAgdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlRWxlbWVudEdsb2JhbE1hcC5zZXQobmV3SWQsIG5ld0VsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCBuZXdFbCk7XG4gICAgICB9XG4gICAgICBpZiAoZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCk7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IGNzcztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZXZPclNlcnZlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBhcHBlbmQgY2hpbGQgc3R5bGUgaWYgbm90IGV4aXN0IGluIGRvbVxuICAgICAgICogZm9yIHNzciBvciBobXJcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgX2NzcyA9IHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdIHx8IHN0eWxlTWFwLmNzcztcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlRWxlbWVudEdsb2JhbE1hcDtcbiAgICAgICAgaWYgKHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpKTtcbiAgICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXAuaGFzKG5ld0lkKSkge1xuICAgICAgICAgIG1hcC5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgbWFwLmdldChuZXdJZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKSB7XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXIgfCBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgLyoqIFByZWZpeCBuYW1lICovXG4gICRuYW1lPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMiA9IChUKSA9PiBTdHlsZXMyO1xuXG5leHBvcnQgdHlwZSBTdHlsZXMgPSBTdHlsZXNGbjIgfCBTdHlsZXMyO1xuXG5leHBvcnQgaW50ZXJmYWNlIEtleWZyYW1lcyB7XG4gIFtuYW1lOiBzdHJpbmddOiB7XG4gICAgW3BlcmNlbnQ6IG51bWJlcl06IFN0eWxlQ29udGFpbmVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdyb3VwU3R5bGVUb1N0cmluZyhcbiAgc3R5bGVNYXA6IFN0eWxlTWFwNSxcbiAgc3R5bGVzOiBTdHlsZXMyLFxuICB0aGVtZU5hbWU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyxcbiAgdHlwZVN0eWxlOiBUeXBlU3R5bGUsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlc1xuKSB7XG4gIC8vIGZvciBzdHlsZXMgdHlwZSBzdHJpbmdcbiAgaWYgKHR5cGVTdHlsZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUpIHtcbiAgICAvLyB1c2UgY3VycmVudCBjbGFzcyBvciBzZXQgbmV3XG4gICAgY29uc3QgY2xhc3NOYW1lID0gc3R5bGVNYXAucmVxdWlyZVVwZGF0ZVxuICAgID8gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IGNyZWF0ZU5leHRDbGFzc0lkKCkpXG4gICAgOiBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA/IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgIDogc3R5bGVNYXAuY2xhc3NlcyA9IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG4gICAgbGV0IHJ1bGVzOiBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBydWxlcyA9IGAuJHtjbGFzc05hbWV9eyR7c3R5bGVzfX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBydWxlcyA9IHN0eWxlVG9TdHJpbmcoaWQsIG51bGwsIHN0eWxlcywgdGhlbWVWYXJpYWJsZXMsIGNsYXNzTmFtZSBhcyBhbnkpO1xuICAgIH1cbiAgICBpZiAoc3R5bGVNYXAucGFyZW50U3R5bGUpIHtcbiAgICAgIGNvbnN0IHN0eWxlTWFwT2ZQYXJlbnRTdHlsZSA9IFNUWUxFX01BUDUuZ2V0KHN0eWxlTWFwLnBhcmVudFN0eWxlKTtcbiAgICAgIHJldHVybiByZXBsYWNlUmVmcyhydWxlcywgc3R5bGVNYXBPZlBhcmVudFN0eWxlW3RoZW1lTmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cbiAgLy8gZm9yIG11bHRpcGxlcyBzdHlsZXNcbiAgY29uc3QgY2xhc3Nlc01hcCA9IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSB7fSk7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGNvbnN0IG5hbWUgPSBzdHlsZXMuJG5hbWUgPyBgJHtzdHlsZXMuJG5hbWV9LWAgOiAnJztcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgaWYgKGtleSA9PT0gJyRrZXlmcmFtZXMnKSB7XG4gICAgICAgIGNvbnRlbnQgKz0ga2V5ZnJhbWVzVG9TdHJpbmcobmFtZSwgY2xhc3Nlc01hcCwgdmFsdWUgYXMgS2V5ZnJhbWVzLCB0aGVtZVZhcmlhYmxlcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgICAgY29uc3QgY3VycmVudENsYXNzTmFtZSA9IGtleSBpbiBjbGFzc2VzTWFwXG4gICAgICAgID8gY2xhc3Nlc01hcFtrZXldXG4gICAgICAgIDogY2xhc3Nlc01hcFtrZXldID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGB5LSR7bmFtZX0ke2tleX0tJHtjcmVhdGVOZXh0Q2xhc3NJZCgpfWApIDogY3JlYXRlTmV4dENsYXNzSWQoKTtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcoa2V5LCBzdHlsZXMuJG5hbWUsIHZhbHVlIGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBjdXJyZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2VSZWZzKGNvbnRlbnQsIGNsYXNzZXNNYXApO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUmVmcyhzdHI6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUZfUkVHX0VYUCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGRhdGFbdG9rZW5dO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBgLiR7ZGF0YVt0b2tlbl19YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGFbYEDDkMKzLi0+LSR7dG9rZW59YF07XG4gICAgfVxuICB9XG4gICk7XG59XG5cbi8qKlxuICoge2NvbG9yOidyZWQnfSB0byAuY2xhc3NOYW1le2NvbG9yOiByZWR9XG4gKi9cbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmcoa2V5OiBzdHJpbmcsICRuYW1lOiBzdHJpbmcsIG9iOiBPYmplY3QsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgY3VycmVudEtleTogc3RyaW5nLCBwYXJlbnRLZXk/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IHN1YkNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGxldCBuZXdLZXk7XG4gIGlmIChwYXJlbnRLZXkpIHtcbiAgICBpZiAoY3VycmVudEtleS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgICBuZXdLZXkgPSBjdXJyZW50S2V5LnJlcGxhY2UoLyYvZywgcGFyZW50S2V5KTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIG5ld0tleSA9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3S2V5ID0gYCR7cGFyZW50S2V5fSAke2N1cnJlbnRLZXl9YDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICBuZXdLZXkgPSBrZXk7XG4gIH0gZWxzZSB7XG4gICAgbmV3S2V5ID0gYC4ke2N1cnJlbnRLZXl9YDtcbiAgfVxuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIC8vIE9taXQgc3R5bGUgd2l0aCB2YWx1ZSBudWxsXG4gICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGlzIE9iamVjdCBsaXRlcmFsXG4gICAgICAgIGlmIChlbGVtZW50LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICBzdWJDb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoa2V5LCAkbmFtZSwgZWxlbWVudCBhcyBTdHlsZXMyLCB0aGVtZVZhcmlhYmxlcywgc3R5bGVLZXksIG5ld0tleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAga2V5QW5kVmFsdWUgKz0gY29udmVydFRvU3R5bGVWYWx1ZShzdHlsZUtleSwgZWxlbWVudCwgdGhlbWVWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChrZXlBbmRWYWx1ZSkge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgbGV0IGxpbiA9ICdcXG5cXG4nO1xuICAgICAgaWYgKCRuYW1lKSB7XG4gICAgICAgIGxpbiArPSBgLyoqIFN0eWxlIFNoZWV0IG5hbWU6ICR7JG5hbWV9ICovXFxuYDtcbiAgICAgIH1cbiAgICAgIGxpbiArPSBgLyoqIFN0eWxlIEtleTogJHtrZXl9ICovXFxuYDtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bGlufWA7XG4gICAgfVxuICAgIGlmIChuZXdLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgICBrZXlBbmRWYWx1ZSA9IGAke3BhcmVudEtleX17JHtrZXlBbmRWYWx1ZX19YDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudEtleSAmJiBwYXJlbnRLZXkgPT09ICdAZ2xvYmFsJykge1xuICAgICAgY29udGVudCArPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgfVxuICAgIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICB9XG4gIHJldHVybiBjb250ZW50ICsgc3ViQ29udGVudDtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvU3R5bGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpIHtcbiAgY29uc3QgbmV3U3R5bGVLZXkgPSBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlQ2FjaGUoa2V5LCB0aGVtZVZhcmlhYmxlcyk7XG4gIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICBsZXQgbGluID0gJyc7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGluICs9IGAke25ld1N0eWxlS2V5fToke3ZhbHVlW2luZGV4XX07YDtcbiAgICB9XG4gICAgcmV0dXJuIGxpbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7bmV3U3R5bGVLZXl9OiR7dmFsdWV9O2A7XG4gIH1cbn1cblxuZnVuY3Rpb24ga2V5ZnJhbWVzVG9TdHJpbmcoc3R5bGVOYW1lOiBzdHJpbmcsIGtleXNNYXA6IG9iamVjdCwga2V5ZnJhbWVzOiBLZXlmcmFtZXMsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBsZXQgY29udGVudCA9ICcnO1xuXG4gIGZvciAoY29uc3QgbmFtZSBpbiBrZXlmcmFtZXMpIHtcbiAgICBpZiAoa2V5ZnJhbWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBjb25zdCBrZXlmcmFtZSA9IGtleWZyYW1lc1tuYW1lXTtcbiAgICAgIC8vIFNvbWV0aW1lcyB0aGUgbmFtZSBvZiBhIGNsYXNzIGNhbiBiZSB0aGUgc2FtZSBhcyB0aGUgbmFtZSBvZiBhIGtleWZyYW1lLFxuICAgICAgLy8gc28gd2UgYWRkIGEgY2hhcmFjdGVyIHRvIGJlIGRpZmZlcmVudFxuICAgICAgY29uc3QgbmV3VW5pcXVlTmFtZSA9IGBAw5DCsy4tPi0ke25hbWV9YDtcbiAgICAgIC8vIHNldCBuZXcgaWQgaWYgbm90IGV4aXN0XG4gICAgICBjb25zdCBuZXdOYW1lID0gbmV3VW5pcXVlTmFtZSBpbiBrZXlzTWFwXG4gICAgICA/IGtleXNNYXBbbmV3VW5pcXVlTmFtZV1cbiAgICAgIDoga2V5c01hcFtuZXdVbmlxdWVOYW1lXSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgJHtzdHlsZU5hbWV9JHtuYW1lfS0ke2NyZWF0ZU5leHRLZXlmcmFtZUlkKCl9LXZgKSA6IGNyZWF0ZU5leHRLZXlmcmFtZUlkKCk7XG4gICAgICBjb250ZW50ICs9IGBAa2V5ZnJhbWVzICR7bmV3TmFtZX17YDtcbiAgICAgIGZvciAoY29uc3QgcGVyY2VudCBpbiBrZXlmcmFtZSkge1xuICAgICAgICBpZiAoa2V5ZnJhbWUuaGFzT3duUHJvcGVydHkocGVyY2VudCkpIHtcbiAgICAgICAgICBjb250ZW50ICs9IGAke3BlcmNlbnR9JXtgO1xuICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IGtleWZyYW1lW3BlcmNlbnRdO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHN0eWxlc1trZXldO1xuICAgICAgICAgICAgICBjb250ZW50ICs9IGNvbnZlcnRUb1N0eWxlVmFsdWUoa2V5LCB2YWwgYXMgc3RyaW5nIHwgc3RyaW5nW10sIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudCArPSBgfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gYH1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGUoc3RyOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBjb25zdCBoeXBoZW5DYXNlID0gdG9IeXBoZW5DYXNlKHN0cik7XG4gIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuYmVmb3JlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZGlyQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuYmVmb3JlKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuYWZ0ZXIpICE9PSAtMSkge1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5hZnRlcik7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKFlQb3NpdGlvbi5hYm92ZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbkNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIFlQb3NpdGlvbi5hYm92ZSwgVE9QKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoWVBvc2l0aW9uLmJlbG93KSAhPT0gLTEpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgWVBvc2l0aW9uLmJlbG93LCBCT1RUT00pO1xuICB9XG4gIHJldHVybiBoeXBoZW5DYXNlO1xufVxuXG5mdW5jdGlvbiB0b0NsYXNzTmFtZVZhbGlkKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IHMgPSBzdHIucmVwbGFjZSgvXlswLTldfFteXFx3XFwtXS9nLCBfID0+IHtcbiAgICByZXR1cm4gYF8ke18uY2hhckNvZGVBdCgwKX1gO1xuICB9KTtcbiAgcmV0dXJuIHRvSHlwaGVuQ2FzZShzKTtcbn1cblxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChnKSA9PiBgLSR7Z1swXS50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlQ2FjaGUoc3RyOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyk6IHN0cmluZyB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIHJldHVybiBzdHIgaW4gbWFwXG4gID8gbWFwW3N0cl1cbiAgOiBtYXBbc3RyXSA9IGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGUoc3RyLCB0aGVtZVZhcmlhYmxlcyk7XG59XG5cbmNvbnN0IGlnbm9yZUNTU0tFWSA9IHtcbiAgJ2JyZWFrLWFmdGVyJzogJ2JyZWFrLWFmdGVyJyxcbiAgJ2JyZWFrLWJlZm9yZSc6ICdicmVhay1iZWZvcmUnLFxuICAncGFnZS1icmVhay1hZnRlcic6ICdwYWdlLWJyZWFrLWFmdGVyJyxcbiAgJ3BhZ2UtYnJlYWstYmVmb3JlJzogJ3BhZ2UtYnJlYWstYmVmb3JlJ1xufTtcblxuY29uc3QgU1RZTEVfS0VZU19NQVAgPSB7XG4gIHJ0bDoge1xuICAgIC4uLmlnbm9yZUNTU0tFWVxuICB9LFxuICBsdHI6IHtcbiAgICAuLi5pZ25vcmVDU1NLRVlcbiAgfVxufTtcblxuY29uc3QgQk9UVE9NID0gJ2JvdHRvbSc7XG5jb25zdCBUT1AgPSAndG9wJztcblxuZnVuY3Rpb24gZGlyQ2FjaGUob3JpZ2luYWwsIHZhbDogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIGRpckFsaWFzOiBEaXJBbGlhcykge1xuICBjb25zdCBtYXAgPSBTVFlMRV9LRVlTX01BUFt0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb25dO1xuICAvLyBSZXBsYWNlIGluIG9yaWdpbmFsLCBmb3IgZG8gbm90IHJlcGVhdCB0aGlzIGFnYWluXG4gIHJldHVybiBtYXBbb3JpZ2luYWxdID0gdmFsLnJlcGxhY2UoZGlyQWxpYXMsIHRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbihkaXJBbGlhcykpO1xufVxuXG5mdW5jdGlvbiBZUG9zaXRpb25DYWNoZShvcmlnaW5hbCwgdmFsOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgcG9zOiBZUG9zaXRpb24sIHRvOiAndG9wJyB8ICdib3R0b20nKSB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIC8vIFJlcGxhY2UgaW4gb3JpZ2luYWwsIGZvciBkbyBub3QgcmVwZWF0IHRoaXMgYWdhaW5cbiAgcmV0dXJuIG1hcFtvcmlnaW5hbF0gPSB2YWwucmVwbGFjZShwb3MsIHRvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5leHRDbGFzc0lkKCkge1xuICByZXR1cm4gYGkkeyhuZXh0Q2xhc3NJZCsrKS50b1N0cmluZygzNil9YDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU5leHRLZXlmcmFtZUlkKCkge1xuICByZXR1cm4gYGskeyhuZXh0S2V5RnJhbWVJZCsrKS50b1N0cmluZygzNil9YDtcbn1cblxudHlwZSBPbmx5Q2xhc3NlczxUPiA9IFJlY29yZDwoXG4gIEV4Y2x1ZGU8KFQgZXh0ZW5kcyAoKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID8gKGtleW9mIFJldHVyblR5cGU8VD4pIDoga2V5b2YgVCksXG4gICckbmFtZScgfCAnJHNoZWV0JyB8ICcka2V5ZnJhbWVzJz5cbiksIHN0cmluZz47XG5cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPbkRlc3Ryb3ksIE5nTW9kdWxlLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEtleUF0dHJpYnV0ZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfbmdUcmFuc2NsdWRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuZ1RyYW5zY2x1ZGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IHRlbXBsYXRlUmVmO1xuICAgICAgdGhpcy5fdmlld1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uZ1RyYW5zY2x1ZGUgPSBudWxsO1xuICAgICAgdGhpcy5fdmlld1JlZi5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX25nVHJhbnNjbHVkZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl92aWV3UmVmLnJlbW92ZSgpO1xuICB9XG59XG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdUcmFuc2NsdWRlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVNb2R1bGUge1xuXG59XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KTogSFRNTEVsZW1lbnQge1xuICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYgPyBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHNoYWRvd0J1aWxkZXIgfSBmcm9tICcuLi9zaGFkb3cnO1xuaW1wb3J0IHsgQ2FuQ29sb3IgfSBmcm9tICcuL2NvbG9yJztcbmltcG9ydCB7IENhbkJnIH0gZnJvbSAnLi9iZyc7XG5pbXBvcnQgeyBDYW5EaXNhYmxlIH0gZnJvbSAnLi9kaXNhYmxlZCc7XG5pbXBvcnQgeyBDYW5SYWlzZWQgfSBmcm9tICcuL3JhaXNlZCc7XG5pbXBvcnQgeyBDYW5FbGV2YXRpb24gfSBmcm9tICcuL2VsZXZhdGlvbic7XG5pbXBvcnQgeyBDYW5PdXRsaW5lZCB9IGZyb20gJy4vb3V0bGluZWQnO1xuaW1wb3J0IHsgQ2FuU2hhZG93Q29sb3IgfSBmcm9tICcuL3NoYWRvdy1jb2xvcic7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldE5hdGl2ZUVsZW1lbnQgfSBmcm9tICcuLi9taW5pbWFsL2NvbW1vbic7XG5pbXBvcnQgeyBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4uL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbmNvbnN0IERFRkFVTFRfVkFMVUUgPSAnJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTE7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWlyZVBhcmFtc1N0eWxlVXBkYXRlciB7XG4gIF90aGVtZTogTHlUaGVtZTI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuU3R5bGVVcGRhdGVyIHtcbiAgX3RoZW1lOiBMeVRoZW1lMjtcbiAgdXBkYXRlU3R5bGU6IChlbGVtZW50OiBFbGVtZW50UmVmIHwgRWxlbWVudCkgPT4gdm9pZDtcbiAgc2V0QXV0b0NvbnRyYXN0OiAoKSA9PiB2b2lkO1xufVxuZXhwb3J0IHR5cGUgQ2FuU3R5bGVVcGRhdGVyQ3RvciA9IENvbnN0cnVjdG9yPFJlcXVpcmVQYXJhbXNTdHlsZVVwZGF0ZXIgJiBQYXJ0aWFsPENhbkNvbG9yICYgQ2FuQmcgJiBDYW5EaXNhYmxlICYgQ2FuUmFpc2VkICYgQ2FuRWxldmF0aW9uICYgQ2FuT3V0bGluZWQgJiBDYW5TaGFkb3dDb2xvcj4+O1xuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5TdHlsZVVwZGF0ZXI8VCBleHRlbmRzIENhblN0eWxlVXBkYXRlckN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5TdHlsZVVwZGF0ZXI+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9jbGFzc05hbWVBbm9ueW1vdXM6IHN0cmluZztcbiAgICBfYXV0b0NvbnRyYXN0OiBib29sZWFuO1xuICAgIHNldEF1dG9Db250cmFzdCgpIHtcbiAgICAgIHRoaXMuX2F1dG9Db250cmFzdCA9IHRydWU7XG4gICAgfVxuICAgIHVwZGF0ZVN0eWxlKGVsZW1lbnQ6IEVsZW1lbnRSZWY8YW55PiB8IEhUTUxFbGVtZW50KSB7XG4gICAgICBjb25zdCBfX2JnID0gdGhpcy5iZztcbiAgICAgIGNvbnN0IF9fY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgY29uc3QgX19yYWlzZWQgPSB0aGlzLnJhaXNlZDtcbiAgICAgIGNvbnN0IF9fZWxldmF0aW9uID0gdGhpcy5lbGV2YXRpb247XG4gICAgICBjb25zdCBfX2Rpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICAgIGNvbnN0IF9fb3V0bGluZWQgPSB0aGlzLm91dGxpbmVkO1xuICAgICAgY29uc3QgX19zaGFkb3dDb2xvciA9IHRoaXMuc2hhZG93Q29sb3I7XG4gICAgICBjb25zdCBfX2lzQ29udHJhc3QgPSB0aGlzLl9hdXRvQ29udHJhc3QgJiYgIV9fY29sb3IgfHwgX19jb2xvciA9PT0gJ2F1dG8nO1xuICAgICAgY29uc3QgbmV3S2V5ID0gYGNvbW1vbi0tLS06JHtcbiAgICAgICAgX19iZyB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgIF9fY29sb3IgfHwgREVGQVVMVF9WQUxVRX3DgsK3JHtcbiAgICAgICAgICAgIF9fcmFpc2VkIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgIF9fZWxldmF0aW9uIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgX19kaXNhYmxlZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgX19vdXRsaW5lZCB8fCBERUZBVUxUX1ZBTFVFfcOCwrcke1xuICAgICAgICAgICAgICAgICAgICBfX3NoYWRvd0NvbG9yIHx8IERFRkFVTFRfVkFMVUV9w4LCtyR7XG4gICAgICAgICAgICAgICAgICAgICAgX19pc0NvbnRyYXN0IHx8IERFRkFVTFRfVkFMVUV9YDtcbiAgICAgIHRoaXMuX2NsYXNzTmFtZUFub255bW91cyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKG5ld0tleSwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZToge1xuICAgICAgICAgIGJvcmRlcj86IHN0cmluZyxcbiAgICAgICAgICBiYWNrZ3JvdW5kPzogc3RyaW5nLFxuICAgICAgICAgIGNvbG9yPzogc3RyaW5nLFxuICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZyxcbiAgICAgICAgICBwb2ludGVyRXZlbnRzPzogJ25vbmUnO1xuICAgICAgICAgICcmOmhvdmVyJz86IHtcbiAgICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJyY6YWN0aXZlJz86IHtcbiAgICAgICAgICAgIGJveFNoYWRvdz86IHN0cmluZ1xuICAgICAgICAgIH1cbiAgICAgICAgfSA9IHt9O1xuICAgICAgICBpZiAoX19vdXRsaW5lZCkge1xuICAgICAgICAgIHN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgY3VycmVudENvbG9yJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoX19kaXNhYmxlZCkge1xuICAgICAgICAgIHN0eWxlLmNvbG9yID0gdGhlbWUudGV4dC5kaXNhYmxlZDtcbiAgICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgIGlmIChfX2JnKSB7XG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhlbWUuZGlzYWJsZWQuZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKF9fYmcpIHtcbiAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5jb2xvck9mKF9fYmcpO1xuICAgICAgICAgICAgaWYgKF9faXNDb250cmFzdCkge1xuICAgICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoYCR7X19iZ306Y29udHJhc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFzdHlsZS5jb2xvciAmJiBfX2NvbG9yKSB7XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9IHRoZW1lLmNvbG9yT2YoX19jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChfX3JhaXNlZCB8fCBfX2VsZXZhdGlvbikge1xuICAgICAgICAgICAgaWYgKCFfX2JnKSB7XG4gICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5iYWNrZ3JvdW5kLnByaW1hcnkuZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvckNzcyA9IHN0eWxlLmJhY2tncm91bmQgIT09IF9fYmcgJiYgdGhlbWUuY29sb3JPZihfX2JnIHx8ICdiYWNrZ3JvdW5kOnByaW1hcnknLCAnc2hhZG93Jyk7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dDb2xvciA9IChfX3NoYWRvd0NvbG9yICYmIHRoZW1lLmNvbG9yT2YoX19zaGFkb3dDb2xvcikpIHx8IGJhY2tncm91bmRDb2xvckNzcyB8fCBzdHlsZS5iYWNrZ3JvdW5kIHx8IHN0eWxlLmNvbG9yIHx8IHRoZW1lLnNoYWRvdztcbiAgICAgICAgICAgIHN0eWxlLmJveFNoYWRvdyA9IHNoYWRvd0J1aWxkZXIoX19lbGV2YXRpb24gfHwgMywgc2hhZG93Q29sb3IpO1xuICAgICAgICAgICAgaWYgKCFfX2VsZXZhdGlvbikge1xuICAgICAgICAgICAgICBzdHlsZVsnJjphY3RpdmUnXSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoOCwgc2hhZG93Q29sb3IpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZSBhcyBhbnk7XG4gICAgICB9LCBnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpLCB0aGlzLl9jbGFzc05hbWVBbm9ueW1vdXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbih2YWx1ZTogYW55KSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG4iLCJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJpcHBsZUNvbmZpZyB7XG4gIGNlbnRlcmVkPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBzZW5zaXRpdmU/OiBib29sZWFuO1xuICByYWRpdXM/OiAnY29udGFpbmVyU2l6ZScgfCBudW1iZXI7XG4gIHBlcmNlbnRhZ2VUb0luY3JlYXNlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmlwcGxlUmVmIHtcbiAgc3RhdGUgPSB0cnVlO1xuICB0aW1lc3RhbXAgPSAtRGF0ZS5ub3coKTtcbiAgcmVhZG9ubHkgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZW5kKCkge1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWVzdGFtcCArPSBEYXRlLm5vdygpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGUge1xuICBwcml2YXRlIF9yaXBwbGVSZWY6IFJpcHBsZVJlZjtcbiAgcHJpdmF0ZSBfZXZlbnRIYW5kbGVyczogTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPiA9IG5ldyBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+KCk7XG4gIGNvbmZpZzogUmlwcGxlQ29uZmlnID0ge307XG4gIHByaXZhdGUgX3RyYW5zaXRpb25EdXJhdGlvbiA9IHRoaXMuX3RoZW1lVmFyaWFibGVzLnJpcHBsZS5kdXJhdGlvbjtcbiAgcHJpdmF0ZSBfZXZlbnRPcHRpb25zID0ge3Bhc3NpdmU6IHRydWV9IGFzIGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgY2xhc3NlczogYW55LFxuICAgIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgX3RyaWdnZXJFbGVtZW50PzogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHR5cGVvZiBQb2ludGVyRXZlbnQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFRvdWNoRXZlbnQgID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdwb2ludGVyZG93bicsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgndG91Y2hlbmQnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3RvdWNoY2FuY2VsJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZXVwJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZWxlYXZlJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIGlmICghX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICAgIF90cmlnZ2VyRWxlbWVudCA9IF9jb250YWluZXJFbGVtZW50O1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChfdHJpZ2dlckVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldENvbmZpZyhjb25maWc6IFJpcHBsZUNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3JlY3RDb250YWluZXIoKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIHNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVSaXBwbGUoc3R5bGVzOiB7W2tleTogc3RyaW5nXTogbnVtYmVyIHwgc3RyaW5nfSkge1xuICAgIHRoaXMuX3JpcHBsZVJlZiA9IG5ldyBSaXBwbGVSZWYoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9yaXBwbGVSZWYuY29udGFpbmVyO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSB0aGlzLmNsYXNzZXMucmlwcGxlQ29udGFpbmVyO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gYCR7ZWxlbWVudH1weGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlW2tleV0gPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoJ29wYWNpdHknKTtcbiAgICBjb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKDEpYDtcbiAgfVxuXG4gIHByaXZhdGUgb25Qb2ludGVyRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIC8qKkRlc3Ryb3kgcHJldmlvdXMgcmlwcGxlIGlmIGV4aXN0ICovXG4gICAgICB0aGlzLmVuZFJpcHBsZSgpO1xuICAgICAgdGhpcy5zdGFydFJpcHBsZShldmVudCwgdGhpcy5jb25maWcpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIG9uUG9pbnRlckxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5lbmRSaXBwbGUoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFJpcHBsZShldmVudDogTW91c2VFdmVudCB8IFBvaW50ZXJFdmVudCwgcmlwcGxlQ29uZmlnOiBSaXBwbGVDb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5fcmVjdENvbnRhaW5lcjtcbiAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFgsXG4gICAgeSA9IGV2ZW50LmNsaWVudFk7XG4gICAgaWYgKHJpcHBsZUNvbmZpZy5jZW50ZXJlZCkge1xuICAgICAgeCA9IGNvbnRhaW5lclJlY3QubGVmdCArIGNvbnRhaW5lclJlY3Qud2lkdGggLyAyO1xuICAgICAgeSA9IGNvbnRhaW5lclJlY3QudG9wICsgY29udGFpbmVyUmVjdC5oZWlnaHQgLyAyO1xuICAgIH1cbiAgICBjb25zdCBsZWZ0ID0geCAtIGNvbnRhaW5lclJlY3QubGVmdDtcbiAgICBjb25zdCB0b3AgPSB5IC0gY29udGFpbmVyUmVjdC50b3A7XG4gICAgbGV0IHJhZGl1cyA9IHJpcHBsZUNvbmZpZy5yYWRpdXMgPT09ICdjb250YWluZXJTaXplJyA/IG1heFNpemUoY29udGFpbmVyUmVjdCkgLyAyIDogcmlwcGxlQ29uZmlnLnJhZGl1cyB8fCByaXBwbGVSYWRpdXMoeCwgeSwgY29udGFpbmVyUmVjdCk7XG4gICAgaWYgKHJpcHBsZUNvbmZpZy5wZXJjZW50YWdlVG9JbmNyZWFzZSkge1xuICAgICAgcmFkaXVzICs9IHJhZGl1cyAqIHJpcHBsZUNvbmZpZy5wZXJjZW50YWdlVG9JbmNyZWFzZSAvIDEwMDtcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVSaXBwbGUoe1xuICAgICAgbGVmdDogbGVmdCAtIHJhZGl1cyxcbiAgICAgIHRvcDogdG9wIC0gcmFkaXVzLFxuICAgICAgd2lkdGg6IHJhZGl1cyAqIDIsXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqIDIsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke3RoaXMuX3RyYW5zaXRpb25EdXJhdGlvbn1tc2BcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuVGltZW91dE91dHNpZGVab25lKGZuOiBGdW5jdGlvbiwgZGVsYXkgPSAwKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoZm4sIGRlbGF5KSk7XG4gIH1cblxuICBlbmRSaXBwbGUoKSB7XG4gICAgY29uc3QgcmlwcGxlUmVmOiBSaXBwbGVSZWYgPSB0aGlzLl9yaXBwbGVSZWYgfHwgbnVsbDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuX3RyYW5zaXRpb25EdXJhdGlvbjtcbiAgICBpZiAocmlwcGxlUmVmICYmIHJpcHBsZVJlZi5zdGF0ZSkge1xuICAgICAgcmlwcGxlUmVmLmVuZCgpO1xuICAgICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9uIC8gNX1tc2A7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiA6IDApO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gLyAoZHVyYXRpb24gKiAuMDAxICsgMSkgOiAwKTtcbiAgICAgIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogLjE1IDogMCk7XG4gICAgICB0aGlzLnJ1blRpbWVvdXRPdXRzaWRlWm9uZSgoKSA9PiB7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyaXBwbGVSZWYuY29udGFpbmVyKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIC8gKGR1cmF0aW9uICogLjAwMSArIDEpICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIHRoaXMuX3JpcHBsZVJlZiA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJlbW92ZUV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHJpcHBsZVJhZGl1cyh4OiBudW1iZXIsIHk6IG51bWJlciwgcmVjdDogQ2xpZW50UmVjdCkge1xuICBjb25zdCBkaXN0WCA9IE1hdGgubWF4KE1hdGguYWJzKHggLSByZWN0LmxlZnQpLCBNYXRoLmFicyh4IC0gcmVjdC5yaWdodCkpO1xuICBjb25zdCBkaXN0WSA9IE1hdGgubWF4KE1hdGguYWJzKHkgLSByZWN0LnRvcCksIE1hdGguYWJzKHkgLSByZWN0LmJvdHRvbSkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZKTtcbn1cblxuZnVuY3Rpb24gbWF4U2l6ZShyZWN0OiBDbGllbnRSZWN0KSB7XG4gIHJldHVybiBNYXRoLm1heChyZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4uL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IExZX0NPTU1PTl9TVFlMRVMgPSB7XG4gIGZpbGw6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gIH0sXG4gIHZpc3VhbGx5SGlkZGVuOiB7XG4gICAgYm9yZGVyOiAwLFxuICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICBoZWlnaHQ6ICcxcHgnLFxuICAgIG1hcmdpbjogJy0xcHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMXB4JyxcbiAgICBvdXRsaW5lOiAwLFxuICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJ1xuICB9LFxuICBidXR0b246IHtcbiAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGB0cmFuc3BhcmVudGAsXG4gICAgYm9yZGVyOiAwLFxuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICBtYXJnaW46IDAsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnLFxuICAgICctd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lJzogJ25vbmUnLFxuICAgICcmOjotbW96LWZvY3VzLWlubmVyJzoge1xuICAgICAgYm9yZGVyOiAwXG4gICAgfVxuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEx5Q29yZVN0eWxlcyB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoTFlfQ09NTU9OX1NUWUxFUyk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyKSB7IH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IExZX0NPTU1PTl9TVFlMRVMgfSBmcm9tICcuLi9zdHlsZXMvY29yZS1zdHlsZXMnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByaXBwbGVDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzJweCcsXG4gICAgaGVpZ2h0OiAnMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICBvcGFjaXR5OiAnLjInLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhlbWUucmlwcGxlLnRyYW5zaXRpb24ub3BhY2l0eX0sdHJhbnNmb3JtICR7dGhlbWUucmlwcGxlLnRyYW5zaXRpb24udHJhbnNmb3JtXG4gICAgfWAsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gIH1cbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVJpcHBsZVNlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG5cbn1cbiIsImltcG9ydCB7IEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmlwcGxlLCBSaXBwbGVDb25maWcgfSBmcm9tICcuLi9yaXBwbGUvcmlwcGxlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uL3JpcHBsZS9yaXBwbGUuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWlyZVBhcmFtcyB7XG4gIF90aGVtZTogTHlUaGVtZTI7XG4gIF9uZ1pvbmU6IE5nWm9uZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW5EaXNhYmxlUmlwcGxlIHtcbiAgX3RyaWdnZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBkaXNhYmxlUmlwcGxlOiBib29sZWFuO1xuICBfcmlwcGxlQ29uZmlnOiBSaXBwbGVDb25maWc7XG4gIF9yZW1vdmVSaXBwbGVFdmVudHM6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVSaXBwbGU8VCBleHRlbmRzIENvbnN0cnVjdG9yPFJlcXVpcmVQYXJhbXM+PihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuRGlzYWJsZVJpcHBsZT4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBfdHJpZ2dlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICAgX3JpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnID0ge307XG4gICAgcHJpdmF0ZSBfcmlwcGxlOiBSaXBwbGU7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZVJpcHBsZTtcblxuICAgIGdldCBkaXNhYmxlUmlwcGxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZVJpcHBsZTsgfVxuICAgIHNldCBkaXNhYmxlUmlwcGxlKHZhbDogYm9vbGVhbikge1xuICAgICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiB2YWwgIT09IHRoaXMuX2Rpc2FibGVSaXBwbGUpIHtcbiAgICAgICAgY29uc3QgbmV3VmFsID0gdGhpcy5fZGlzYWJsZVJpcHBsZSA9IHRvQm9vbGVhbih2YWwpO1xuICAgICAgICAvLyByZW1vdmUgcHJldmlvdXMgcmlwcGxlIGlmIGV4aXN0XG4gICAgICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICAgICAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgICAgIC8vIGFkZCByaXBwbGVcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyRWxlbWVudCA9IHRoaXMuX3RyaWdnZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCByaXBwbGVDb250YWluZXIgPSAodGhpcy5fcmlwcGxlQ29udGFpbmVyICYmIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50KSB8fCB0cmlnZ2VyRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuX3JpcHBsZSA9IG5ldyBSaXBwbGUodGhpcy5fdGhlbWUuY29uZmlnLCB0aGlzLl9uZ1pvbmUsIHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKSwgcmlwcGxlQ29udGFpbmVyLCB0cmlnZ2VyRWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLl9yaXBwbGUuc2V0Q29uZmlnKHRoaXMuX3JpcHBsZUNvbmZpZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgX3JlbW92ZVJpcHBsZUV2ZW50cygpIHtcbiAgICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JpcHBsZSkge1xuICAgICAgICAgIHRoaXMuX3JpcHBsZS5yZW1vdmVFdmVudHMoKTtcbiAgICAgICAgICB0aGlzLl9yaXBwbGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL21pbmltYWwvaXMtYm9vbGVhbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRGlzYWJsZSB7XG4gIGRpc2FibGVkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkRpc2FibGU+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAncHJpbWFyeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuQ29sb3Ige1xuICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Db2xvcjxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5Db2xvcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcblxuICAgIGdldCBjb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fY29sb3I7IH1cbiAgICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHZhbCB8fCBERUZBVUxUX0NPTE9SO1xuICAgICAgaWYgKGRlZmF1bHRDb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICB0aGlzLl9jb2xvciA9IGRlZmF1bHRDb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuY29uc3QgREVGQVVMVF9CRyA9ICdwcmltYXJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5CZyB7XG4gIGJnOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkJnPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkJnPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9iZzogc3RyaW5nO1xuXG4gICAgZ2V0IGJnKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9iZzsgfVxuICAgIHNldCBiZyh2YWw6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdmFsIHx8IERFRkFVTFRfQkc7XG4gICAgICBpZiAoZGVmYXVsdENvbG9yICE9PSB0aGlzLmJnKSB7XG4gICAgICAgIHRoaXMuX2JnID0gZGVmYXVsdENvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5SYWlzZWQge1xuICByYWlzZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblJhaXNlZDxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5SYWlzZWQ+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX3JhaXNlZDogYm9vbGVhbjtcblxuICAgIGdldCByYWlzZWQoKSB7IHJldHVybiB0aGlzLl9yYWlzZWQ7IH1cbiAgICBzZXQgcmFpc2VkKHZhbHVlOiBhbnkpIHsgdGhpcy5fcmFpc2VkID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbk91dGxpbmVkIHtcbiAgb3V0bGluZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbk91dGxpbmVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbk91dGxpbmVkPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9vdXRsaW5lZDogYm9vbGVhbjtcblxuICAgIGdldCBvdXRsaW5lZCgpIHsgcmV0dXJuIHRoaXMuX291dGxpbmVkOyB9XG4gICAgc2V0IG91dGxpbmVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fb3V0bGluZWQgPSB0b0Jvb2xlYW4odmFsdWUpOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5FbGV2YXRpb24ge1xuICBlbGV2YXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluRWxldmF0aW9uPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkVsZXZhdGlvbj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZWxldmF0aW9uOiBudW1iZXI7XG5cbiAgICBnZXQgZWxldmF0aW9uKCkgeyByZXR1cm4gdGhpcy5fZWxldmF0aW9uOyB9XG4gICAgc2V0IGVsZXZhdGlvbih2YWx1ZTogYW55KSB7IHRoaXMuX2VsZXZhdGlvbiA9IHZhbHVlOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5TaGFkb3dDb2xvciB7XG4gIHNoYWRvd0NvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblNoYWRvd0NvbG9yPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhblNoYWRvd0NvbG9yPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBwcml2YXRlIF9zaGFkb3dDb2xvcjogc3RyaW5nO1xuXG4gICAgZ2V0IHNoYWRvd0NvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zaGFkb3dDb2xvcjsgfVxuICAgIHNldCBzaGFkb3dDb2xvcih2YWx1ZTogc3RyaW5nKSB7IHRoaXMuX3NoYWRvd0NvbG9yID0gdmFsdWU7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3ksIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IG1peGluU3R5bGVVcGRhdGVyLCBtaXhpbkJnLCBtaXhpblJhaXNlZCwgbWl4aW5PdXRsaW5lZCwgbWl4aW5FbGV2YXRpb24sIG1peGluU2hhZG93Q29sb3IsIG1peGluRGlzYWJsZVJpcHBsZSwgbWl4aW5Db2xvciB9IGZyb20gJy4uL2NvbW1vbi9pbmRleCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5jb25zdCBERUZBVUxUX0JHID0gJ3BhcGVyJztcblxuZXhwb3J0IGNsYXNzIEx5UGFwZXJCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIF9uZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxufVxuXG5leHBvcnQgY29uc3QgTHlQYXBlck1peGluQmFzZSA9IG1peGluU3R5bGVVcGRhdGVyKFxubWl4aW5CZyhcbiAgbWl4aW5Db2xvcihcbiAgICBtaXhpblJhaXNlZChcbiAgICAgIG1peGluT3V0bGluZWQoXG4gICAgICAgIG1peGluRWxldmF0aW9uKFxuICAgICAgICAgIG1peGluU2hhZG93Q29sb3IoXG4gICAgICAgICAgICBtaXhpbkRpc2FibGVSaXBwbGUoTHlQYXBlckJhc2UpKSkpKSkpKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgbHktcGFwZXIsIFtseS1wYXBlcl0sIFtseS10ZXh0XWAsXG4gIGlucHV0czogW1xuICAgICdiZycsXG4gICAgJ2NvbG9yJyxcbiAgICAncmFpc2VkJyxcbiAgICAnb3V0bGluZWQnLFxuICAgICdlbGV2YXRpb24nLFxuICAgICdzaGFkb3dDb2xvcicsXG4gICAgJ2Rpc2FibGVSaXBwbGUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlQYXBlciBleHRlbmRzIEx5UGFwZXJNaXhpbkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgX2hhc1RleHQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCdseS10ZXh0JylcbiAgc2V0IGhhc1RleHQodmFsOiBhbnkpIHtcbiAgICB0aGlzLl9oYXNUZXh0ID0gdG9Cb29sZWFuKHZhbCk7XG4gIH1cbiAgZ2V0IGhhc1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1RleHQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICB0aGVtZTogTHlUaGVtZTIsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBzdXBlcih0aGVtZSwgbmdab25lKTtcbiAgICB0aGlzLnNldEF1dG9Db250cmFzdCgpO1xuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWw7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fZWw7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZVN0eWxlKHRoaXMuX2VsKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5iZyAmJiAhdGhpcy5oYXNUZXh0KSB7XG4gICAgICB0aGlzLmJnID0gREVGQVVMVF9CRztcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUodGhpcy5fZWwpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoXG4gICAgICAgICdseVBhcGVyJyxcbiAgICAgICAgKHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3JlbW92ZVJpcHBsZUV2ZW50cygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t3aXRoQ2xhc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVdpdGhDbGFzcyB7XG5cbiAgQElucHV0KClcbiAgc2V0IHdpdGhDbGFzcyh2YWw6IHN0cmluZykge1xuICAgIGlmICghdmFsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCcke3ZhbH0nIGlzIG5vdCB2YWxpZCBjbGFzc05hbWVgKTtcbiAgICB9XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkgeyB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVBhcGVyIH0gZnJvbSAnLi9wYXBlcic7XG5pbXBvcnQgeyBMeVdpdGhDbGFzcyB9IGZyb20gJy4vd2l0aC1jbGFzcy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeVdpdGhDbGFzcywgTHlQYXBlcl0sXG4gIGV4cG9ydHM6IFtMeVdpdGhDbGFzcywgTHlQYXBlcl1cbn0pXG5leHBvcnQgY2xhc3MgTHlDb21tb25Nb2R1bGUgeyB9XG4iLCJmdW5jdGlvbiBpc1dpbmRvdyhvYmo6IGFueSkge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3coZWxlbTogYW55KSB7XG4gICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0Vmlldztcbn1cbmV4cG9ydCBmdW5jdGlvbiBleGFjdFBvc2l0aW9uKGVsZW06IEhUTUxFbGVtZW50KSB7XG4gICAgbGV0IGRvY0VsZW06IGFueSwgd2luOiBhbnksXG4gICAgICAgIGJveCA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xuICAgIGNvbnN0IGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xuXG4gICAgZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XG4gICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxuICAgIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdEVudHJ5KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsIGRlZmF1bHRWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xufVxuIiwiLy8gRWxlbWVudCB0byBtb3ZlLCB0aW1lIGluIG1zIHRvIGFuaW1hdGVcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxUbyhlbGVtZW50OiBIVE1MRWxlbWVudCwgZHVyYXRpb246IG51bWJlcikge1xuICBsZXQgZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgaWYgKGUuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgY29uc3QgdCA9IGUuc2Nyb2xsVG9wO1xuICAgICsrZS5zY3JvbGxUb3A7XG4gICAgZSA9IHQgKyAxID09PSBlLnNjcm9sbFRvcC0tID8gZSA6IGRvY3VtZW50LmJvZHk7XG4gIH1cbiAgc2Nyb2xsVG9DKGUsIGUuc2Nyb2xsVG9wLCBlbGVtZW50LCBkdXJhdGlvbik7XG59XG5cbi8vIEVsZW1lbnQgdG8gbW92ZSwgZWxlbWVudCBvciBweCBmcm9tLCBlbGVtZW50IG9yIHB4IHRvLCB0aW1lIGluIG1zIHRvIGFuaW1hdGVcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxUb0MoZWxlbWVudDogSFRNTEVsZW1lbnQsIGZyb206IGFueSwgdG86IG51bWJlciB8IEhUTUxFbGVtZW50LCBkdXJhdGlvbjogbnVtYmVyKSB7XG4gIGlmIChkdXJhdGlvbiA8PSAwKSB7IHJldHVybjsgfVxuICBpZiAodHlwZW9mIGZyb20gPT09ICdvYmplY3QnKSB7ZnJvbSA9IGZyb20ub2Zmc2V0VG9wOyB9XG4gIGlmICh0eXBlb2YgdG8gPT09ICdvYmplY3QnKSB7dG8gPSB0by5vZmZzZXRUb3A7IH1cblxuICBjcmVhdGVTY3JvbGxXaXRoQW5pbWF0aW9uKGVsZW1lbnQsIGZyb20sIHRvLCAwLCAxIC8gZHVyYXRpb24sIDIwLCBlYXNlT3V0Q3VhaWMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsV2l0aEFuaW1hdGlvbihcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHRvOiBudW1iZXIsXG4gIGR1cmF0aW9uOiBudW1iZXIsXG4gIHA/OiAneCcgfCAneScsXG4gIG1vdGlvbj86ICh0OiBudW1iZXIpID0+IG51bWJlclxuKSB7XG4gIGNvbnN0IF9tb3Rpb24gPSBtb3Rpb24gfHwgZWFzZU91dEN1YWljO1xuICBjb25zdCB7IHNjcm9sbExlZnQgfSA9IGVsZW1lbnQ7XG4gIHJldHVybiBjcmVhdGVTY3JvbGxXaXRoQW5pbWF0aW9uKGVsZW1lbnQsIHNjcm9sbExlZnQsIHRvLCAwLCAxIC8gZHVyYXRpb24sIDIwLCBfbW90aW9uLCBwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2Nyb2xsV2l0aEFuaW1hdGlvbihcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHhGcm9tOiBudW1iZXIsXG4gIHhUbzogbnVtYmVyLFxuICB0MDE6IG51bWJlcixcbiAgc3BlZWQ6IG51bWJlcixcbiAgc3RlcDogbnVtYmVyLFxuICBtb3Rpb246ICh0OiBudW1iZXIpID0+IG51bWJlcixcbiAgcD86ICd4JyB8ICd5J1xuKSB7XG4gIGNvbnN0IHNjcm9sbFQgPSBwID09PSAneScgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgaWYgKHQwMSA8IDAgfHwgdDAxID4gMSB8fCBzcGVlZCA8PSAwKSB7XG4gICAgZWxlbWVudFtzY3JvbGxUXSA9IHhUbztcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudFtzY3JvbGxUXSA9IHhGcm9tIC0gKHhGcm9tIC0geFRvKSAqIG1vdGlvbih0MDEpO1xuICB0MDEgKz0gc3BlZWQgKiBzdGVwO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNyZWF0ZVNjcm9sbFdpdGhBbmltYXRpb24oZWxlbWVudCwgeEZyb20sIHhUbywgdDAxLCBzcGVlZCwgc3RlcCwgbW90aW9uLCBwKTtcbiAgfSwgc3RlcCk7XG59XG5cblxuLy8gZnVuY3Rpb24gbGluZWFyVHdlZW4odDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB0O1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5RdWFkKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gdCAqIHQ7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VPdXRRdWFkKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gLXQgKiAodCAtIDIpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIHQgKiB0IC8gMjsgfVxuLy8gICB0LS07XG4vLyAgIHJldHVybiAodCAqICh0IC0gMikgLSAxKSAvIDI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbkN1YWljKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gdCAqIHQgKiB0O1xuLy8gfVxuXG5mdW5jdGlvbiBlYXNlT3V0Q3VhaWModDogbnVtYmVyKSB7XG4gIHQtLTtcbiAgcmV0dXJuIHQgKiB0ICogdCArIDE7XG59XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dEN1YWljKHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIHQgKiB0ICogdCAvIDI7IH1cbi8vICAgdCAtPSAyO1xuLy8gICByZXR1cm4gKHQgKiB0ICogdCArIDIpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluUXVhcnQodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB0ICogdCAqIHQgKiB0O1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlT3V0UXVhcnQodDogbnVtYmVyKSB7XG4vLyAgIHQtLTtcbi8vICAgcmV0dXJuIC0odCAqIHQgKiB0ICogdCAtIDEpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRRdWFydCh0OiBudW1iZXIpIHtcbi8vICAgdCAvPSAwLjU7XG4vLyAgIGlmICh0IDwgMSkge3JldHVybiAwLjUgKiB0ICogdCAqIHQgKiB0OyB9XG4vLyAgIHQgLT0gMjtcbi8vICAgcmV0dXJuIC0odCAqIHQgKiB0ICogdCAtIDIpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluUXVpbnQodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dFF1aW50KHQ6IG51bWJlcikge1xuLy8gICB0LS07XG4vLyAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdCArIDE7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dFF1aW50KHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0IC8gMjsgfVxuLy8gICB0IC09IDI7XG4vLyAgIHJldHVybiAodCAqIHQgKiB0ICogdCAqIHQgKyAyKSAvIDI7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJblNpbmUodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiAtTWF0aC5jb3ModCAvIChNYXRoLlBJIC8gMikpICsgMTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dFNpbmUodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiBNYXRoLnNpbih0IC8gKE1hdGguUEkgLyAyKSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VJbk91dFNpbmUodDogbnVtYmVyKSB7XG4vLyAgIHJldHVybiAtKE1hdGguY29zKE1hdGguUEkgKiB0KSAtIDEpIC8gMjtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluRXhwbyh0OiBudW1iZXIpIHtcbi8vICAgcmV0dXJuIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGVhc2VPdXRFeHBvKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gLU1hdGgucG93KDIsIC0xMCAqIHQpICsgMTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZUluT3V0RXhwbyh0OiBudW1iZXIpIHtcbi8vICAgdCAvPSAwLjU7XG4vLyAgIGlmICh0IDwgMSkge3JldHVybiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpIC8gMjsgfVxuLy8gICB0LS07XG4vLyAgIHJldHVybiAoLU1hdGgucG93KDIsIC0xMCAqIHQpICsgMikgLyAyO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5DaXJjKHQ6IG51bWJlcikge1xuLy8gICByZXR1cm4gLU1hdGguc3FydCgxIC0gdCAqIHQpIC0gMTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZWFzZU91dENpcmModDogbnVtYmVyKSB7XG4vLyAgIHQtLTtcbi8vICAgcmV0dXJuIE1hdGguc3FydCgxIC0gdCAqIHQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBlYXNlSW5PdXRDaXJjKHQ6IG51bWJlcikge1xuLy8gICB0IC89IDAuNTtcbi8vICAgaWYgKHQgPCAxKSB7cmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKSAvIDI7IH1cbi8vICAgdCAtPSAyO1xuLy8gICByZXR1cm4gKE1hdGguc3FydCgxIC0gdCAqIHQpICsgMSkgLyAyO1xuLy8gfVxuIiwiaW1wb3J0IHsgRWxlbWVudFJlZiwgTmdab25lLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGdldE5hdGl2ZUVsZW1lbnQgfSBmcm9tICcuLi9taW5pbWFsL2NvbW1vbic7XG5cbmV4cG9ydCBlbnVtIEZvY3VzU3RhdHVzIHtcbiAgLyoqbW91c2UgYW5kL29yIHRvdWNoKi9cbiAgREVGQVVMVCA9ICdkZWZhdWx0JyxcbiAgLyoqIGtleWJvYXJkIGFuZC9vciBwcm9ncmFtKi9cbiAgS0VZQk9BUkQgPSAna2V5Ym9hcmQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzU3RhdGVJbmZvIHtcbiAgdW5saXN0ZW46ICgpID0+IHZvaWQ7XG4gIHN1YmplY3Q6IFN1YmplY3Q8Rm9jdXNTdGF0ZT47XG59XG5cbmV4cG9ydCB0eXBlIEZvY3VzU3RhdGUgPSAna2V5Ym9hcmQnIHwgJ21vdXNlJyB8IG51bGw7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2VsZW1lbnRNYXAgPSBuZXcgTWFwPEhUTUxFbGVtZW50LCBGb2N1c1N0YXRlSW5mbz4oKTtcbiAgcHJpdmF0ZSBfY3VycmVudEV2ZW50OiAnbW91c2UnIHwgJ2tleWJvYXJkJztcbiAgcHJpdmF0ZSBfcmVtb3ZlR2xvYmFsTGlzdGVuZXJzOiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9jb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cblxuICBsaXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwga2V5RWxlbWVudD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pOiBPYnNlcnZhYmxlPEZvY3VzU3RhdGU+IHwgbnVsbCB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIC8vIHJldHVybiBudWxsIGlmIGl0IGlzIG5vdCBicm93c2VyIHBsYXRmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KTtcbiAgICBjb25zdCBrZXkgPSBrZXlFbGVtZW50ICYmIGdldE5hdGl2ZUVsZW1lbnQoa2V5RWxlbWVudCkgfHwgbmF0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLl9lbGVtZW50TWFwLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudE1hcC5nZXQoa2V5KS5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvY3VzU3RhdGU6IEZvY3VzU3RhdGVJbmZvID0ge1xuICAgICAgdW5saXN0ZW46IG51bGwsXG4gICAgICBzdWJqZWN0OiBuZXcgU3ViamVjdDxGb2N1c1N0YXRlPigpXG4gICAgfTtcbiAgICB0aGlzLl9pbmNyZW1lbnRDb3VudCgpO1xuICAgIGNvbnN0IGZvY3VzTGlzdGVuZXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHRoaXMuX29uKGV2ZW50LCBmb2N1c1N0YXRlLnN1YmplY3QpO1xuICAgIGNvbnN0IGJsdXJMaXN0ZW5lciA9IChldmVudDogRm9jdXNFdmVudCkgPT4gdGhpcy5fb24oZXZlbnQsIGZvY3VzU3RhdGUuc3ViamVjdCk7XG5cbiAgICBmb2N1c1N0YXRlLnVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzTGlzdGVuZXIsIHRydWUpO1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fZWxlbWVudE1hcC5zZXQoa2V5LCBmb2N1c1N0YXRlKTtcblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm9jdXNMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVyTGlzdGVuZXIsIHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBmb2N1c1N0YXRlLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICB1bmxpc3RlbihlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWwgPSBnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGNvbnN0IGZvY3VzU3RhdGVJbmZvID0gdGhpcy5fZWxlbWVudE1hcC5nZXQoZWwpO1xuICAgIGlmIChmb2N1c1N0YXRlSW5mbykge1xuICAgICAgZm9jdXNTdGF0ZUluZm8udW5saXN0ZW4oKTtcbiAgICAgIHRoaXMuX2VsZW1lbnRNYXAuZGVsZXRlKGVsKTtcbiAgICAgIHRoaXMuX2RlY3JlbWVudENvdW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb24oZXZlbnQ6IEZvY3VzRXZlbnQsIHN1YmplY3Q6IFN1YmplY3Q8Rm9jdXNTdGF0ZT4pIHtcbiAgICBsZXQgYnk6IEZvY3VzU3RhdGUgPSBudWxsO1xuICAgIGlmIChldmVudC50eXBlID09PSAnZm9jdXMnKSB7XG4gICAgICBieSA9IHRoaXMuX2N1cnJlbnRFdmVudCB8fCAna2V5Ym9hcmQnO1xuICAgIH1cbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHN1YmplY3QubmV4dChieSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkR2xvYmFsTGlzdGVuZXJzKCkge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lck9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVyc1xuICAgID8ge1xuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IHRydWVcbiAgICB9IDogZmFsc2U7XG5cbiAgICBjb25zdCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciA9ICgpID0+IHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jdXJyZW50RXZlbnQgPSAna2V5Ym9hcmQnKTtcbiAgICBjb25zdCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyID0gKCkgPT4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2N1cnJlbnRFdmVudCA9ICdtb3VzZScpO1xuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9pbmNyZW1lbnRDb3VudCgpIHtcbiAgICBpZiAoKyt0aGlzLl9jb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5fYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVjcmVtZW50Q291bnQoKSB7XG4gICAgaWYgKCEtLXRoaXMuX2NvdW50KSB7XG4gICAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9lbGVtZW50TWFwLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMudW5saXN0ZW4oZWxlbWVudCkpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQVVJX1ZFUlNJT04gPSAnMS45LjEyLW5pZ2h0bHkuMjAxODEyMjktanE5NzdxZWYnO1xuZXhwb3J0IGNvbnN0IEFVSV9MQVNUX1VQREFURSA9ICcyMDE4LTEyLTI5VDA4OjIyOjUyLjI2MVonO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEhhbW1lck9wdGlvbnMsIEhhbW1lckluc3RhbmNlIH0gZnJvbSAnLi9nZXN0dXJlLWFubm90YXRpb25zJztcblxuZXhwb3J0IGNvbnN0IExZX0hBTU1FUl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPEhhbW1lck9wdGlvbnM+KCdMWV9IQU1NRVJfT1BUSU9OUycpO1xuXG5jb25zdCBIQU1NRVJfR0VTVFVSRVNfRVZFTlRTID0gW1xuICAnc2xpZGUnLFxuICAnc2xpZGVzdGFydCcsXG4gICdzbGlkZWVuZCcsXG4gICdzbGlkZXJpZ2h0JyxcbiAgJ3NsaWRlbGVmdCcsXG4gICdzbGlkZWNhbmNlbCdcbl07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeUhhbW1lckdlc3R1cmVDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnIHtcbiAgZXZlbnRzOiBzdHJpbmdbXSA9IEhBTU1FUl9HRVNUVVJFU19FVkVOVFM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfSEFNTUVSX09QVElPTlMpIHByaXZhdGUgX2hhbW1lck9wdGlvbnM6IEhhbW1lck9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBidWlsZEhhbW1lcihlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhhbW1lckluc3RhbmNlIHtcbiAgICBjb25zdCBoYW1tZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/ICh3aW5kb3cgYXMgYW55KS5IYW1tZXIgOiBudWxsO1xuICAgIGNvbnN0IG1jID0gbmV3IGhhbW1lcihlbGVtZW50LCB0aGlzLl9oYW1tZXJPcHRpb25zIHx8IHt9KTtcblxuICAgIGNvbnN0IHBhbiA9IG5ldyBoYW1tZXIuUGFuKCk7XG4gICAgY29uc3Qgc3dpcGUgPSBuZXcgaGFtbWVyLlN3aXBlKCk7XG4gICAgY29uc3Qgc2xpZGUgPSB0aGlzLl9jcmVhdGVSZWNvZ25pemVyKHBhbiwge2V2ZW50OiAnc2xpZGUnLCB0aHJlc2hvbGQ6IDB9LCBzd2lwZSk7XG5cbiAgICBwYW4ucmVjb2duaXplV2l0aChzd2lwZSk7XG5cbiAgICAvLyBBZGQgY3VzdG9taXplZCBnZXN0dXJlcyB0byBIYW1tZXIgbWFuYWdlclxuICAgIG1jLmFkZChbc3dpcGUsIHBhbiwgc2xpZGVdKTtcbiAgICByZXR1cm4gbWM7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyByZWNvZ25pemVyLCB3aXRob3V0IGFmZmVjdGluZyB0aGUgZGVmYXVsdCByZWNvZ25pemVycyBvZiBIYW1tZXJKUyAqL1xuICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyKGJhc2U6IGFueSwgb3B0aW9uczogYW55LCAuLi5pbmhlcml0YW5jZXM6IGFueVtdKSB7XG4gICAgY29uc3QgcmVjb2duaXplciA9IG5ldyAoYmFzZS5jb25zdHJ1Y3Rvcikob3B0aW9ucyk7XG5cbiAgICBpbmhlcml0YW5jZXMucHVzaChiYXNlKTtcbiAgICBpbmhlcml0YW5jZXMuZm9yRWFjaChpdGVtID0+IHJlY29nbml6ZXIucmVjb2duaXplV2l0aChpdGVtKSk7XG5cbiAgICByZXR1cm4gcmVjb2duaXplcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS90aGVtZS1jb25maWcnO1xuXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWVNb2R1bGUge1xuICBzdGF0aWMgc2V0VGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEx5VGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgW0x5VGhlbWUyXSxcbiAgICAgICAgeyBwcm92aWRlOiBMWV9USEVNRV9OQU1FLCB1c2VWYWx1ZTogdGhlbWVOYW1lIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVW5kZWZpbmVkIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuZXhwb3J0IGNvbnN0IFVuZGVmaW5lZFZhbHVlID0gbmV3IFVuZGVmaW5lZCgpO1xuIiwiZXhwb3J0IGVudW0gSW52ZXJ0TWVkaWFRdWVyeSB7XG4gIE5vLFxuICBZZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1lZGlhUXVlcnkobWVkaWE6IHN0cmluZywgaW52ZXJ0TWVkaWFRdWVyeTogSW52ZXJ0TWVkaWFRdWVyeSA9IEludmVydE1lZGlhUXVlcnkuTm8pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gIGlmIChtZWRpYSAmJiBpbnZlcnRNZWRpYVF1ZXJ5ID09PSBJbnZlcnRNZWRpYVF1ZXJ5Llllcykge1xuICAgIGNvbnN0IG5ld1ZhbCA9IG1lZGlhLnNwbGl0KCcsJykubWFwKF8gPT4gYG5vdCAke199YCk7XG4gICAgcmV0dXJuIG5ld1ZhbDtcbiAgfVxuICByZXR1cm4gbWVkaWE7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnQsIEluamVjdCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlDb3JlU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL2NvcmUtc3R5bGVzJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgb3ZlcmxheUJhY2tkcm9wOiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4Lm92ZXJsYXksXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH1cbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlDb250YWluZXIge1xuICBwcml2YXRlIF9jbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG4gIHByb3RlY3RlZCByZWFkb25seSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2l0ZW1zID0gbmV3IFNldDxhbnk+KCk7XG4gIHByaXZhdGUgX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcjogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbHktb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgfVxuICB9XG4gIGdldCBjb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgaW5zdGFuY2VcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgX2FkZChpdGVtKSB7XG4gICAgdGhpcy5faXRlbXMuYWRkKGl0ZW0pO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB0aGlzLl91cGRhdGUoKTtcbiAgfVxuXG4gICAgLyoqXG4gICAqIFJlbW92ZSBpbnN0YW5jZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBfcmVtb3ZlKGl0ZW0pIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgdGhpcy5faXRlbXMuZGVsZXRlKGl0ZW0pO1xuICAgIHRoaXMuX3VwZGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdHlsZXMgZm9yIG92ZXJsYXkgY29udGFpbmVyXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXRlbXMuc2l6ZSkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZU92ZXJsYXlDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmVPdmVybGF5Q29udGFpbmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2NsYXNzZXMub3ZlcmxheUJhY2tkcm9wKTtcbiAgICAgIHRoaXMuX2lzQWN0aXZlT3ZlcmxheUNvbnRhaW5lciA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBCQUNLRFJPUF9TVFlMRVMgPSAoe1xuICBiYWNrZHJvcDoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICB9XG59KTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktb3ZlcmxheS1iYWNrZHJvcCcsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlCYWNrZHJvcCB7XG4gIC8qKiBAaWdub3JlICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KEJBQ0tEUk9QX1NUWUxFUyk7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLl9vdmVybGF5Q29uZmlnLmZuRGVzdHJveSgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBASW5qZWN0KCdvdmVybGF5Q29uZmlnJykgcHJpdmF0ZSBfb3ZlcmxheUNvbmZpZzogYW55LFxuICAgIGNvbW1vblN0eWxlczogTHlDb3JlU3R5bGVzXG4gICkge1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb21tb25TdHlsZXMuY2xhc3Nlcy5maWxsKTtcbiAgICBpZiAoX292ZXJsYXlDb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYmFja2Ryb3ApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb21FdmVudCAsIE9ic2VydmFibGUsIGVtcHR5IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlLCBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBXaW5SZXNpemUge1xuXG4gIHJlc2l6ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgICAgYXVkaXRUaW1lKDIwKSxcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzaXplJCA9IGVtcHR5KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZW1wdHksIGZyb21FdmVudCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybS9wbGF0Zm9ybSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFdpblNjcm9sbCB7XG5cbiAgc2Nyb2xsJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHdpbmRvdy5kb2N1bWVudCwgJ3Njcm9sbCcpLnBpcGUoXG4gICAgICAgICAgYXVkaXRUaW1lKDIwKSxcbiAgICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZIHx8IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc2hhcmUoKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Nyb2xsJCA9IGVtcHR5KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIsIEx5T3ZlcmxheUJhY2tkcm9wIH0gZnJvbSAnLi9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBXaW5SZXNpemUgfSBmcm9tICcuL3Jlc2l6ZSc7XG5pbXBvcnQgeyBXaW5TY3JvbGwgfSBmcm9tICcuL3Njcm9sbCc7XG5cbmludGVyZmFjZSBPdmVybGF5Q29uZmlnIHtcbiAgc3R5bGVzOiBPYmplY3Q7XG4gIGNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgYmFja2Ryb3A/OiBib29sZWFuO1xuICBmbkRlc3Ryb3k/OiAoLi4uYXJnKSA9PiB2b2lkO1xuICBob3N0PzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYge1xuICAvKiogRGV0YWNoZXMgYSB2aWV3IGZyb20gZGlydHkgY2hlY2tpbmcgYWdhaW4gb2YgQXBwbGljYXRpb25SZWYuICAqL1xuICBkZXRhY2g6ICgpID0+IHZvaWQ7XG5cbiAgLyoqIFJlbW92ZSBlbGVtZW50IG9mIERPTSAqL1xuICByZW1vdmU6ICgpID0+IHZvaWQ7XG5cbiAgLyoqIERldGFjaCAmIHJlbW92ZSAqL1xuICBkZXN0cm95OiAoKSA9PiB2b2lkO1xuXG4gIGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuXG59XG5jbGFzcyBDcmVhdGVGcm9tVGVtcGxhdGVSZWYgaW1wbGVtZW50cyBPdmVybGF5RnJvbVRlbXBsYXRlUmVmIHtcbiAgcHJpdmF0ZSBfdmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT47XG4gIHByaXZhdGUgX2VsOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfY29tcFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHByaXZhdGUgX2NvbXBSZWZPdmVybGF5QmFja2Ryb3A6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3aW5kb3dTUlN1YjogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBnZXQgY29udGFpbmVyRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWw7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4gfCBzdHJpbmcsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogTHlPdmVybGF5Q29udGFpbmVyLFxuICAgIF9jb250ZXh0OiBhbnksXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHdpbmRvd1Njcm9sbDogV2luU2Nyb2xsLFxuICAgIHJlc2l6ZVNlcnZpY2U6IFdpblJlc2l6ZSxcbiAgICBjb25maWc/OiBPdmVybGF5Q29uZmlnXG4gICkge1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYgPSBfdGVtcGxhdGVSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KF9jb250ZXh0KTtcbiAgICAvLyB0aGlzLl92aWV3UmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLl9lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHRoaXMuX3ZpZXdSZWYucm9vdE5vZGVzLmZvckVhY2gocm9vdE5vZGUgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3ROb2RlKSk7XG4gICAgY29uc3QgX19zdHlsZXMgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgICAuLi5jb25maWcuc3R5bGVzXG4gICAgfTtcbiAgICBjb25zdCBuZXdJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZShbXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6ICdvdmVybGF5Q29uZmlnJyxcbiAgICAgICAgdXNlVmFsdWU6IDxPdmVybGF5Q29uZmlnPntcbiAgICAgICAgICBmbkRlc3Ryb3k6IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpLFxuICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICBzdHlsZXM6IF9fc3R5bGVzLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSwgdGhpcy5faW5qZWN0b3IpO1xuXG4gICAgdGhpcy51cGRhdGVTdHlsZXMoX19zdHlsZXMpO1xuICAgIGlmIChjb25maWcuaG9zdCkge1xuICAgICAgdGhpcy53aW5kb3dTUlN1YiA9IG1lcmdlKHdpbmRvd1Njcm9sbC5zY3JvbGwkLCByZXNpemVTZXJ2aWNlLnJlc2l6ZSQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBjb25maWcuaG9zdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgbmV3U3R5bGVzID0ge1xuICAgICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgICAgbGVmdDogcmVjdC5sZWZ0XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKG5ld1N0eWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29uZmlnLmNsYXNzZXM7XG4gICAgaWYgKGNsYXNzZXMgJiYgY2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgIGNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiAodGhpcy5fZWwgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcCA9IHRoaXMuZ2VuZXJhdGVDb21wb25lbnQoTHlPdmVybGF5QmFja2Ryb3AsIG5ld0luamVjdG9yKTtcbiAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICBjb25zdCBiYWNrZHJvcEVsID0gdGhpcy5fY29tcFJlZk92ZXJsYXlCYWNrZHJvcC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZChiYWNrZHJvcEVsKTtcbiAgICB0aGlzLl9hcHBlbmRDb21wb25lbnRUb0JvZHkoX3RlbXBsYXRlUmVmLCBfY29udGV4dCwgdGhpcy5faW5qZWN0b3IpO1xuXG4gIH1cblxuICB1cGRhdGVTdHlsZXMoX19zdHlsZXMpIHtcbiAgICAvKiogQXBwbHkgc3R5bGVzICovXG4gICAgLyoqIHNldCBzdHlsZXMgKi9cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBfX3N0eWxlcykge1xuICAgICAgaWYgKF9fc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVWYWwgPSBfX3N0eWxlc1trZXldO1xuICAgICAgICBpZiAoc3R5bGVWYWwpIHtcbiAgICAgICAgICB0aGlzLl9lbC5zdHlsZVtrZXldID0gdHlwZW9mIF9fc3R5bGVzW2tleV0gPT09ICdudW1iZXInID8gYCR7c3R5bGVWYWx9cHhgIDogc3R5bGVWYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmRDb21wb25lbnRUb0JvZHkodHlwZTogVGVtcGxhdGVSZWY8YW55PiB8IFR5cGU8YW55PiB8IHN0cmluZywgY29udGV4dCwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgaWYgKHR5cGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgLy8gQ3JlYXRlIGEgY29tcG9uZW50IHJlZmVyZW5jZSBmcm9tIHRoZSBjb21wb25lbnRcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB0aGlzLl92aWV3UmVmID0gdHlwZS5jcmVhdGVFbWJlZGRlZFZpZXcoY29udGV4dCB8fCB7fSk7XG4gICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh2aWV3UmVmKTtcblxuICAgICAgLy8gR2V0IERPTSBlbGVtZW50IGZyb20gY29tcG9uZW50XG4gICAgICB2aWV3UmVmLnJvb3ROb2Rlcy5mb3JFYWNoKF8gPT4gdGhpcy5fZWwuYXBwZW5kQ2hpbGQoXykpO1xuXG4gICAgICAvLyBBcHBlbmQgRE9NIGVsZW1lbnQgdG8gdGhlIGJvZHlcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX2FkZCh0aGlzLl9lbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2VsLmlubmVyVGV4dCA9IHR5cGU7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb21wUmVmID0gdGhpcy5nZW5lcmF0ZUNvbXBvbmVudCh0eXBlIGFzIFR5cGU8YW55PiwgaW5qZWN0b3IpO1xuICAgICAgdGhpcy5fZWwgPSB0aGlzLl9jb21wUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLl9hZGQodGhpcy5fZWwpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQ29tcG9uZW50KHR5cGU6IFR5cGU8YW55PiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlKTtcbiAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl92aWV3UmVmKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl92aWV3UmVmKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX3ZpZXdSZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX2VsID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbXBSZWYpIHtcbiAgICAgIHRoaXMuX2NvbXBSZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRhaW5lci5fcmVtb3ZlKHRoaXMuX2VsKTtcbiAgICAgIHRoaXMuX2VsID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2VsKSB7XG4gICAgICAvLyByZW1vdmUgaWYgY29udGVudCBpcyBzdHJpbmdcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZSh0aGlzLl9lbCk7XG4gICAgICB0aGlzLl9lbCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9hcHBSZWYuZGV0YWNoVmlldyh0aGlzLl9jb21wUmVmT3ZlcmxheUJhY2tkcm9wLmhvc3RWaWV3KTtcbiAgICAgIHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AuZGVzdHJveSgpO1xuICAgICAgY29uc3QgYmFja2Ryb3BFbCA9IHRoaXMuX2NvbXBSZWZPdmVybGF5QmFja2Ryb3AubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuX3JlbW92ZShiYWNrZHJvcEVsKTtcbiAgICB9XG4gICAgdGhpcy53aW5kb3dTUlN1Yi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRldGFjaCgpO1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlPdmVybGF5IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyOiBMeU92ZXJsYXlDb250YWluZXIsXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBfd2luZG93U2Nyb2xsOiBXaW5TY3JvbGwsXG4gICAgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogV2luUmVzaXplXG4gICkgeyB9XG5cbiAgY3JlYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nLCBjb250ZXh0PzogYW55LCBjb25maWc/OiBPdmVybGF5Q29uZmlnKTogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiB7XG4gICAgcmV0dXJuIG5ldyBDcmVhdGVGcm9tVGVtcGxhdGVSZWYoXG4gICAgICB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHRoaXMuX2FwcFJlZiwgdGVtcGxhdGUsIHRoaXMuX292ZXJsYXlDb250YWluZXIsIGNvbnRleHQsIHRoaXMuX2luamVjdG9yLCB0aGlzLl93aW5kb3dTY3JvbGwsIHRoaXMuX3Jlc2l6ZVNlcnZpY2UsIGNvbmZpZyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlCYWNrZHJvcCB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeU92ZXJsYXlCYWNrZHJvcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0x5T3ZlcmxheUJhY2tkcm9wXVxufSlcbmV4cG9ydCBjbGFzcyBMeU92ZXJsYXlNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCA9IHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlXG59O1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeSB7XG4gIGNyZWF0ZShjYWxsYmFjazogTXV0YXRpb25DYWxsYmFjayk6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBFbGVtZW50T2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeTogTXV0YXRpb25PYnNlcnZlckZhY3RvcnlcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMuZGVzdHJveShlbGVtZW50KSk7XG4gIH1cblxuICBvYnNlcnZlKGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4sIGZuOiBNdXRhdGlvbkNhbGxiYWNrLCBvcHRpb25zPzogTXV0YXRpb25PYnNlcnZlckluaXQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5fbXV0YXRpb25PYnNlcnZlckZhY3RvcnkuY3JlYXRlKGZuKTtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9wdGlvbnMgfHwgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IE9ic2VydmVyXG4gICAqL1xuICBkZXN0cm95KGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZW51bSBBbGlnbkFsaWFzIHtcbiAgcm93UmV2ZXJzZSA9ICdyb3ctcmV2ZXJzZScsXG4gIGNvbHVtblJldmVyc2UgPSAnY29sdW1uLXJldmVyc2UnLFxuICB3cmFwUmV2ZXJzZSA9ICd3cmFwLXJldmVyc2UnLFxuICBzdGFydCA9ICdmbGV4LXN0YXJ0JyxcbiAgZW5kID0gJ2ZsZXgtZW5kJyxcbiAgYmV0d2VlbiA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYXJvdW5kID0gJ3NwYWNlLWFyb3VuZCcsXG4gIGV2ZW5seSA9ICdzcGFjZS1ldmVubHknXG59XG4iXSwibmFtZXMiOlsibWFwIiwiREVGQVVMVF9CRyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBZ0IsY0FBYyxDQUFDLFFBQVE7O1VBQy9CLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztVQUN2QyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7VUFDdkMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7O1VBQ3ZDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUk7SUFDdEQsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUN6Qzs7Ozs7Ozs7Ozs7QUNORDtNQUNNLE1BQU0sR0FBRyxPQUFPOztNQUVoQixxQkFBcUIsR0FBRyxHQUFHOztNQUMzQix3QkFBd0IsR0FBRyxJQUFJOztNQUMvQiwwQkFBMEIsR0FBRyxJQUFJOztBQUN2QyxNQUFhLE9BQU8sR0FBRztJQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQzNDOzs7Ozs7QUFDRCxTQUFnQix1QkFBdUIsQ0FBQyxZQUE2QixDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU07O1VBQzlFLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDOztVQUNyQixNQUFNLEdBQUc7UUFDYixLQUFLLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsR0FBRyxFQUFFO1FBQ3hDLEtBQUssQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxHQUFHLEVBQUU7UUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEdBQUcsRUFBRTtLQUM5Qzs7VUFDSyxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7SUFFNUIsT0FBTyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Q0FFdkw7Ozs7OztBQUVELFNBQWdCLGFBQWEsQ0FBQyxTQUEwQixFQUFFLEtBQWM7O1FBQ2xFLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQzs7VUFDN0IsR0FBRyx5Q0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFtQjtJQUMvQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O1FBRTdDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BDOztVQUNLLE1BQU0sR0FBRztRQUNiLEtBQUssQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxHQUFHLEVBQUU7UUFDeEMsS0FBSyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsR0FBRyxFQUFFO0tBQzlDOztVQUNLLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDOztJQUU1QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztDQUU1Szs7Ozs7O0FDOUREO0FBRUEsTUFBYSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQW1CLG9CQUFvQixDQUFDOztBQUN6RixNQUFhLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBTyxZQUFZLENBQUM7Ozs7Ozs7OztNQ0E3RCxrQkFBa0IsSUFBSSxRQUFPLElBQUksQ0FBQyxLQUFLLFdBQVcsSUFBSSxvQkFBQyxJQUFJLElBQVMsZUFBZSxDQUFDOzs7OztBQUsxRixNQUFhLFFBQVE7O0FBQ0gsa0JBQVMsR0FBWSxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQzs7OztBQUVoRSxhQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRSxnQkFBTyxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFHNUUsY0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTO0tBQ3JDLENBQUMsRUFBRSxvQkFBQyxNQUFNLElBQVMsTUFBTSxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7OztBQUl2RixlQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVM7SUFDdkMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Ozs7QUFHdkYsWUFBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFDLE1BQU0sSUFBUyxRQUFRLENBQUM7Ozs7O0FBTXRHLGdCQUFPLEdBQUcsUUFBUSxDQUFDLFNBQVMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUdqRixnQkFBTyxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOzs7O0FBSzFGLGVBQU0sR0FBRyxRQUFRLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7SUN0Q3BHLGVBQWU7Ozs7QUFDbkIsU0FBZ0IsNkJBQTZCO0lBQzNDLElBQUksZUFBZSxLQUFLLEtBQUssQ0FBQyxFQUFFO1FBQzlCLElBQUk7O2tCQUNJLElBQUksR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUU7Z0JBQ2hELEdBQUcsRUFBRTtvQkFDSCxlQUFlLEdBQUcsSUFBSSxDQUFDO2lCQUN4QjthQUNGLENBQUM7WUFDRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2RDtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUc7S0FDaEI7SUFDRCxPQUFPLGVBQWUsQ0FBQztDQUN4Qjs7Ozs7Ozs7Ozs7QUNkRDtBQVdBLE1BQWEseUJBQXlCLEdBQUcsSUFBSSxjQUFjLENBQXdCLDJCQUEyQixDQUFDOztBQUMvRyxNQUFhLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBOEIsaUJBQWlCLENBQUM7O0FBQzFGLE1BQWEsYUFBYSxHQUFHLElBQUksY0FBYyxDQUFTLGVBQWUsQ0FBQzs7Ozs7O0FDYnhFLE1BQWEsWUFBWTs7Ozs7SUEyQnZCLE9BQU8sQ0FBQyxLQUFhOztjQUNiLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFO1FBQzFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQUM7S0FDNUQ7Ozs7OztJQUNELE9BQU8sQ0FBQyxLQUFhLEVBQUUsUUFBaUI7UUFDdEMsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNuQzs7Ozs7SUFDRCxhQUFhLENBQUMsR0FBVztRQUN2QixPQUFPLFVBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztLQUNqRDs7Ozs7SUFFRCxZQUFZLENBQUMsR0FBYTtRQUN4QixJQUFJLEdBQUcsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUNwRDthQUFNLElBQUksR0FBRyxLQUFLLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1NBQ3BEO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQztTQUNaO0tBQ0Y7Q0FDRjs7O0lBR0MsS0FBTSxLQUFLO0lBQ1gsS0FBTSxLQUFLOzs7O0lBR1gsUUFBUyxRQUFRO0lBQ2pCLE9BQVEsT0FBTzs7OztJQUdmLE1BQU8sTUFBTTtJQUNiLE9BQVEsT0FBTzs7Ozs7Ozs7O0FBU2pCLFNBQVMsR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUF1QixFQUFFLFFBQWdCOztVQUMzRCxLQUFLLEdBQWEsSUFBSSxZQUFZLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2NBQy9CLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksU0FBUyxFQUFFO1lBQ2IsR0FBRyxHQUFHLFNBQVMsQ0FBQztTQUNqQjthQUFNOztZQUVMLDBCQUFPLElBQUksR0FBVztTQUN2QjtLQUNGO0lBQ0QsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDM0IsMEJBQU8sR0FBRyxHQUFXO0tBQ3RCO1NBQU0sSUFBSSxRQUFRLEVBQUU7UUFDbkIsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3hDO1NBQU07UUFDTCxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN2Qjs7Q0FFRjs7Ozs7O0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEdBQW9CLEVBQUUsRUFBMkQ7SUFDekcsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7O2NBQ3JCLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMvQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7a0JBQzVDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzs7a0JBQ3BDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFOztrQkFDdkIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNO1lBQzFCLElBQUksR0FBRyxFQUFFO2dCQUNQLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN2RDthQUNGO2lCQUFNO2dCQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDM0M7U0FDRjtLQUNGO1NBQU07UUFDTCxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3ZDO0NBQ0Y7Ozs7OztBQUtELFNBQWdCLFFBQVEsQ0FBQyxJQUFJO0lBQzNCLFFBQVEsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Q0FDbkU7Ozs7Ozs7QUFZRCxTQUFnQixTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTztJQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7O1VBQ2pDLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFO0lBRTlCLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN4QyxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQUU7Z0JBQzNELFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7S0FDRjtJQUVELE9BQU8sU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0NBQ3RDOzs7Ozs7QUM5SUQsTUFVYSxTQUFTOzs7Ozs7O0lBU3BCLFlBQ2dDLFdBQXdDLEVBQ3ZCLGVBQTRCLEVBQ25FLGVBQWlDLEVBQ3ZCLFNBQWM7UUFEeEIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBTmxDLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztRQUM5QyxjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQWtDLENBQUM7UUFPNUQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtZQUN4RCxFQUFFLEVBQUUsSUFBSTtZQUNSLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDLENBQUM7UUFDSCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7O2tCQUNoQixLQUFLLEdBQWEsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7WUFDakUsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNoQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7MEJBQzNDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDakMsb0JBQUMsU0FBUyxDQUFDLElBQUksSUFBcUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMxRDthQUNGO1NBQ0Y7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM5QixXQUFXLENBQUMsT0FBTyxDQUFDLElBQUk7Z0JBQ3RCLElBQUksZUFBZSxFQUFFO29CQUNuQixTQUFTLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2lCQUNsQztnQkFDRCxJQUFJLENBQUMsR0FBRyxvQkFBQyxJQUFJLEdBQVEsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLGVBQWUsRUFBRTtnQkFDbkIsU0FBUyxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQzthQUN6QztZQUNELElBQUksQ0FBQyxHQUFHLG9CQUFDLFdBQVcsR0FBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztLQUNGOzs7Ozs7SUFNRCxHQUFHLENBQUMsS0FBcUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztLQUMzQzs7Ozs7SUFFRCxHQUFHLENBQUMsSUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakM7Ozs7O0lBQ0QsV0FBVyxDQUFDLElBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqQzs7Ozs7Ozs7SUFFRCxlQUFlLENBQUMsT0FBWSxFQUFFLFFBQW1CLEVBQUUsWUFBb0IsRUFBRSxZQUFxQjtRQUM1RixJQUFJLFlBQVksRUFBRTtZQUNoQixRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztTQUM3QztRQUNELFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQzFDOzs7WUEzRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQVdJLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs0Q0FDM0IsUUFBUSxZQUFJLE1BQU0sU0FBQyx5QkFBeUI7WUFyQkMsZ0JBQWdCOzRDQXVCN0QsTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7O0FDdEJwQjs7SUFHRSxPQUFRLE9BQU87SUFDZixPQUFRLE9BQU87Ozs7SUFJZixRQUFTLFFBQVE7SUFDakIsT0FBUSxPQUFPO0lBQ2YsTUFBTyxNQUFNO0lBQ2IsT0FBUSxPQUFPOzs7Ozs7Ozs7Ozs7O0FBTWpCLFNBQWdCLFdBQVcsQ0FDekIsU0FBb0IsRUFDcEIsU0FBb0IsRUFDcEIsU0FBb0IsRUFDcEIsTUFBZSxFQUNmLGNBQXVCLEVBQ3ZCLGNBQThCLEVBQzlCLE1BQU0sR0FBRyxDQUFDO0lBRVYsT0FBTyxjQUFjLENBQ25CLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFDTixjQUFjLEVBQ2QsY0FBYyxFQUNkLE1BQU0sQ0FDUCxDQUFDO0NBQ0g7Ozs7Ozs7Ozs7O0FBRUQsU0FBUyxjQUFjLENBQ3JCLFNBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLE1BQWUsRUFDZixjQUF1QixFQUN2QixjQUE4QixFQUM5QixNQUFNLEdBQUcsQ0FBQzs7VUFHSixVQUFVLHNCQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFXOztVQUN0RCxrQkFBa0Isc0JBQUcsY0FBYyxDQUFDLHFCQUFxQixFQUFFLEVBQVc7SUFDNUUsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFO1FBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUZBQWlGLENBQUMsQ0FBQztLQUNwRztJQUNELElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxLQUFLLENBQUMsU0FBUyxFQUFFO1FBQzFDLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztLQUMvQzs7UUFDRyxDQUFDLEdBQUcsQ0FBQzs7UUFDTCxDQUFDLEdBQUcsQ0FBQzs7UUFDTCxFQUFFLEdBQUcsUUFBUTs7UUFDYixFQUFFLEdBQUcsUUFBUTtJQUNqQixJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFO1FBQ3ZDLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtnQkFDakMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO2dCQUN0RCxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN4QyxFQUFFLEdBQUcsUUFBUSxDQUFDO2FBQ2Y7aUJBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtnQkFDeEMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO2dCQUN0RCxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQy9CLEVBQUUsR0FBRyxLQUFLLENBQUM7YUFDWjtpQkFBTTs7c0JBQ0MsR0FBRyxHQUFHLGNBQWMsQ0FBQyxZQUFZLG9CQUFDLFNBQVMsR0FBUTtnQkFDekQsSUFBSSxHQUFHLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTtvQkFDNUIsRUFBRSxHQUFHLE1BQU0sQ0FBQztvQkFDWixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO29CQUN2QyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7aUJBQ3pEO3FCQUFNLElBQUksR0FBRyxLQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUU7b0JBQ3BDLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQ1YsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO29CQUM5QixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7aUJBQ3pEO2FBQ0Y7U0FDRjtRQUVELElBQUksU0FBUyxFQUFFOztrQkFDUCxHQUFHLEdBQUcsY0FBYyxDQUFDLFlBQVksb0JBQUMsU0FBUyxHQUFRO1lBQ3pELElBQUksR0FBRyxLQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBQzdCLEVBQUUsR0FBRyxJQUFJLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNQO2lCQUFNLElBQUksR0FBRyxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ25DLEVBQUUsR0FBRyxNQUFNLENBQUM7Z0JBQ1osQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDO2FBQ2pEO1NBQ0Y7YUFBTSxJQUFJLFNBQVMsRUFBRTtZQUNwQixJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUNqQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLEVBQUUsR0FBRyxJQUFJLENBQUM7YUFDWDtpQkFBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUN4QyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xELEVBQUUsR0FBRyxNQUFNLENBQUM7YUFDYjtTQUNGO0tBQ0Y7SUFDRCxPQUFPO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoQixFQUFFO1FBQ0YsRUFBRTtLQUNILENBQUM7Q0FDSDtBQUVELE1BQWEsV0FBVzs7Ozs7Ozs7OztJQVl0QixZQUNVLFNBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLE1BQWUsRUFDZixjQUF1QixFQUN2QixjQUE4QixFQUM5QixTQUFTLENBQUM7UUFOVixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsbUJBQWMsR0FBZCxjQUFjLENBQVM7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQUk7UUFsQlosZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZUFBVSxzQkFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQVcsQ0FBQztRQUM1RCx1QkFBa0Isc0JBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxFQUFXLENBQUM7UUFrQmxGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3RDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdkI7U0FDRjs7UUFHRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTs7a0JBQ2IsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVU7O2tCQUNyRixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVztZQUM5RixJQUFJLFVBQVUsSUFBSSxXQUFXLEVBQUU7Z0JBQzdCLElBQUksV0FBVyxFQUFFO29CQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDZDtnQkFDRCxJQUFJLFVBQVUsRUFBRTtvQkFDZCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQzlDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ2Q7YUFDRjtpQkFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLENBQUMsdUJBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBVSxDQUFDO2FBQzVDO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUMxQixJQUFJLENBQUMsQ0FBQyx1QkFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFVLENBQUM7YUFDekM7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDckIsSUFBSSxDQUFDLENBQUMsdUJBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBVSxDQUFDO2FBQzNDO2lCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUMzQixJQUFJLENBQUMsQ0FBQyx1QkFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFVLENBQUM7YUFDMUM7U0FDRjs7UUFHRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBRS9COzs7O0lBRU8sY0FBYztRQUVwQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLGlGQUFpRixDQUFDLENBQUM7U0FDcEc7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6RCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDL0M7O1lBQ0csQ0FBQyxHQUFHLENBQUM7O1lBQ0wsQ0FBQyxHQUFHLENBQUM7O1lBQ0wsRUFBRSxHQUFHLFFBQVE7O1lBQ2IsRUFBRSxHQUFHLFFBQVE7UUFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN0RCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO29CQUN0QyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDaEUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNsRCxFQUFFLEdBQUcsUUFBUSxDQUFDO2lCQUNmO3FCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO29CQUM3QyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDaEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ3pDLEVBQUUsR0FBRyxLQUFLLENBQUM7aUJBQ1o7cUJBQU07OzBCQUNDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksb0JBQUMsSUFBSSxDQUFDLFNBQVMsR0FBUTtvQkFDbkUsSUFBSSxHQUFHLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTt3QkFDNUIsRUFBRSxHQUFHLE1BQU0sQ0FBQzt3QkFDWixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBQ2pELENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO3FCQUNuRTt5QkFBTSxJQUFJLEdBQUcsS0FBSyxXQUFXLENBQUMsS0FBSyxFQUFFO3dCQUNwQyxFQUFFLEdBQUcsSUFBSSxDQUFDO3dCQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUN4QyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztxQkFDbkU7aUJBQ0Y7YUFDRjtZQUVELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7c0JBQ1osR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxvQkFBQyxJQUFJLENBQUMsU0FBUyxHQUFRO2dCQUNuRSxJQUFJLEdBQUcsS0FBSyxXQUFXLENBQUMsS0FBSyxFQUFFO29CQUM3QixFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNWLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ1A7cUJBQU0sSUFBSSxHQUFHLEtBQUssV0FBVyxDQUFDLElBQUksRUFBRTtvQkFDbkMsRUFBRSxHQUFHLE1BQU0sQ0FBQztvQkFDWixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQztpQkFDM0Q7YUFDRjtpQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO29CQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNOLEVBQUUsR0FBRyxJQUFJLENBQUM7aUJBQ1g7cUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7b0JBQzdDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO29CQUM1RCxFQUFFLEdBQUcsTUFBTSxDQUFDO2lCQUNiO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQU87WUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEVBQUU7WUFDRixFQUFFO1NBQ0gsQ0FBQztLQUNIOzs7OztJQUVPLFNBQVMsQ0FBQyxTQUFtQjs7Y0FDN0IsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFDdkMsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLHNCQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQWEsQ0FBQzthQUMvRDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7OztJQUNPLFVBQVUsQ0FBQyxTQUFtQjs7Y0FDOUIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0YsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLHNCQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQWEsQ0FBQzthQUMvRDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7OztJQUNPLFFBQVEsQ0FBQyxTQUFtQjs7Y0FDNUIsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFDdkMsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLHNCQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQWEsQ0FBQzthQUMvRDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7OztJQUNPLFdBQVcsQ0FBQyxTQUFtQjs7Y0FDL0IsSUFBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDL0YsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLHNCQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQWEsQ0FBQzthQUMvRDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7O0lBRU8sUUFBUTtRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Q0FFRjs7Ozs7QUFDRCxTQUFnQixlQUFlLENBQUMsU0FBb0I7SUFDbEQsSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRTtRQUNqQyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDeEI7U0FBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBQ3hDLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQztLQUN4QjtTQUFNLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFDeEMsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDO0tBQ3pCO1NBQU0sSUFBSSxTQUFTLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUN6QyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDeEI7U0FBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFO1FBQ3hDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQztLQUN2QjtTQUFNLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7UUFDdkMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDO0tBQ3hCO0NBQ0Y7Ozs7OztBQ3pVRDtNQVNNLGFBQWEsR0FBRztJQUNwQixTQUFTLEVBQUU7UUFDVCxzQkFBc0IsRUFBRTtZQUN0QixvQkFBb0IsRUFBRSxZQUFZO1lBQ2xDLGlCQUFpQixFQUFFLFlBQVk7WUFDL0IsWUFBWSxFQUFFLFlBQVk7U0FDM0I7S0FDRjtDQUNGOztNQUVLLFdBQVcsR0FBRyxlQUFlOzs7SUFHakMsV0FBUTtJQUNSLFVBQU87Ozs7O01BR0gsVUFBVSxHQUF3QixJQUFJLEdBQUcsRUFBRTs7SUF5QjdDLFdBQVcsR0FBRyxDQUFDOztJQUNmLGNBQWMsR0FBRyxDQUFDO0FBS3RCLE1BQWEsZ0JBQWdCO0lBSDdCO1FBSUUsV0FBTSxHQUVGLEVBQUUsQ0FBQztRQUNQLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7UUFDakQsMEJBQXFCLEdBQUcsSUFBSSxHQUFHLEVBQXFDLENBQUM7S0FDdEU7OztZQVRBLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztNQVNLLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFHckI7QUFHSixNQUFhLFFBQVE7Ozs7Ozs7O0lBVW5CLFlBQ1UsZ0JBQWtDLEVBQ25DLElBQWUsRUFDQyxTQUFTLEVBQ04sU0FBYyxFQUNoQyxPQUFlO1FBSmYscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNuQyxTQUFJLEdBQUosSUFBSSxDQUFXO1FBRUksY0FBUyxHQUFULFNBQVMsQ0FBSztRQUNoQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBVnpCLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7UUFDeEMsYUFBUSxHQUFHLFNBQVMsQ0FBQzs7OztRQUVyQixrQkFBYSxHQUFHLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQVN6RCxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7S0FDRjs7Ozs7SUFDRCxVQUFVLENBQUMsU0FBaUI7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFxQixDQUFDO1lBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNO2tCQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztrQkFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3RDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZO29CQUN2QixNQUFNLEVBQUUsSUFBSTtpQkFDYixDQUFDLENBQUM7YUFDSjtZQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7Ozs7Ozs7O0lBVUQsUUFBUSxDQUFDLEVBQVUsRUFBRSxLQUFrRixFQUFFLEVBQVEsRUFBRSxRQUFpQixFQUFFLFFBQWlCLEVBQUUsV0FBb0I7O2NBQ3JLLFFBQVEsc0JBQUcsSUFBSSxDQUFDLG9CQUFvQixvQkFBQyxLQUFLLElBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsRUFBVTtRQUN2SCxJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDekIsT0FBTyxRQUFRLENBQUM7U0FDakI7UUFDRCxJQUFJLEVBQUUsRUFBRTtZQUNOLElBQUksUUFBUSxFQUFFO2dCQUNaLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLFFBQVEsQ0FBQztLQUNqQjs7Ozs7Ozs7SUFDTyxlQUFlLENBQUMsT0FBWSxFQUFFLFFBQW1CLEVBQUUsWUFBb0IsRUFBRSxZQUFxQjtRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztLQUMxRTs7Ozs7Ozs7SUFDRCxXQUFXLENBQUMsT0FBWSxFQUFFLFFBQW1CLEVBQUUsUUFBZ0IsRUFBRSxRQUFpQjtRQUNoRixJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDekIsT0FBTyxRQUFRLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELE9BQU8sUUFBUSxDQUFDO0tBQ2pCOzs7OztJQUNELFFBQVEsQ0FBQyxHQUFXO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztTQUMzRjtRQUNELElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7S0FDRjs7Ozs7SUFHRCxlQUFlOztjQUNQLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUc7O2tCQUNyQixTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDckMsSUFBSSxTQUFTLENBQUMsYUFBYSxFQUFFO2dCQUMzQixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzVIO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7Ozs7SUFTRCxjQUFjLENBQUMsRUFBVSxFQUFFLEdBQWlELEVBQUUsUUFBaUIsRUFBRSxXQUFvQjtRQUNuSCwwQkFBTyxJQUFJLENBQUMsb0JBQW9CLG9CQUFDLEdBQUcsSUFBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxHQUFXO0tBQzdHOzs7O0lBQ08saUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDbkM7Ozs7Ozs7O0lBUUQsYUFBYSxDQUFJLE1BQWtCLEVBQUUsUUFBaUI7UUFDcEQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzlFOzs7Ozs7Ozs7O0lBRU8sb0JBQW9CLENBQzFCLE1BQWMsRUFDZCxFQUFVLEVBQ1YsUUFBZ0IsRUFDaEIsSUFBZSxFQUNmLGNBQXdCLEVBQ3hCLFdBQW9COztjQUVkLEtBQUssR0FBRyxtQkFBQSxFQUFFLE1BQWMsTUFBTTs7WUFDaEMsVUFBbUI7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNsQixVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDcEIsUUFBUTtnQkFDUixNQUFNO2dCQUNOLElBQUk7Z0JBQ0osR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsRUFBRTtnQkFDRixXQUFXO2FBQ1osQ0FBQyxDQUFDO1NBQ0o7O2NBQ0ssUUFBUSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDOztjQUNoQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVk7O2NBQzdCLFNBQVMsR0FBRyxVQUFVLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRSxJQUFJLFNBQVMsSUFBSSxjQUFjLEVBQUU7Ozs7O2dCQUUzQixHQUFHOztrQkFDRCxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7a0JBQy9DLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQztZQUMxRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRTtnQkFDaEMsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRixJQUFJLENBQUMsY0FBYyxFQUFFO29CQUNuQixRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDL0I7YUFDRjtpQkFBTTs7Z0JBRUwsR0FBRyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxxQkFBRSxLQUFLLElBQVksSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNyRixRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUNwQjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTs7c0JBQ3ZCLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDO2dCQUMzQyxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7O29CQUUxQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2pDO3FCQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTs7O29CQUc3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDL0Q7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdEY7WUFDRCxJQUFJLGNBQWMsRUFBRTs7c0JBQ1osRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDbkMsRUFBRSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7YUFDcEI7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTs7Ozs7WUFLN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFOztzQkFDdkIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksUUFBUSxDQUFDLEdBQUc7O3NCQUM5Q0EsTUFBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUI7Z0JBQ3ZELElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUN6RztxQkFBTSxJQUFJLENBQUNBLE1BQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzFCQSxNQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUVBLE1BQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDL0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNoRDs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxRQUFRLEdBQUcsQ0FBQztjQUNsQyxFQUFFLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7UUFDakQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7O2tCQUM1QixFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUNyRCxJQUFJLFNBQVMsRUFBRSxFQUFFO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUNoRTtZQUNELGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLElBQUksZUFBZSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3pGLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRjthQUFNO1lBQ0wsT0FBTyxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3RDOztjQUNLLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5RixPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEM7Ozs7O0lBRU8sUUFBUSxDQUFDLEtBQWE7Y0FDdEIsRUFBRSxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCOztjQUMzQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRTs7Y0FDbEQsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztLQUNsRjs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxHQUFXOztjQUMvQixZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzs7Y0FDeEQsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4RCxPQUFPLFlBQVksQ0FBQztLQUNyQjs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxFQUE0QjtRQUNoRCxJQUFJLE9BQU8scUJBQXFCLEtBQUssVUFBVSxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7Z0JBQzdCLHFCQUFxQixDQUFDO29CQUNwQixFQUFFLEVBQUUsQ0FBQztpQkFDTixDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsRUFBRSxFQUFFLENBQUM7U0FDTjtLQUNGOzs7WUFwUEYsVUFBVTs7OztZQVltQixnQkFBZ0I7WUFoRnJDLFNBQVM7NENBa0ZiLE1BQU0sU0FBQyxhQUFhOzRDQUNwQixNQUFNLFNBQUMsUUFBUTtZQXJGK0IsTUFBTTs7Ozs7Ozs7Ozs7QUFpVnpELFNBQVMsa0JBQWtCLENBQ3pCLFFBQW1CLEVBQ25CLE1BQWUsRUFDZixTQUFpQixFQUNqQixFQUFVLEVBQ1YsU0FBb0IsRUFDcEIsY0FBOEI7O0lBRzlCLElBQUksU0FBUyxLQUFLLFNBQVMsQ0FBQyxPQUFPLEVBQUU7OztjQUU3QixTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWE7Y0FDdEMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO2NBQ2xFLFFBQVEsQ0FBQyxPQUFPO2tCQUNkLFFBQVEsQ0FBQyxPQUFPO2tCQUNoQixRQUFRLENBQUMsT0FBTyxHQUFHLGlCQUFpQixFQUFFOztZQUN0QyxLQUFhO1FBQ2pCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCLEtBQUssR0FBRyxJQUFJLFNBQVMsSUFBSSxNQUFNLEdBQUcsQ0FBQztTQUNwQzthQUFNO1lBQ0wsS0FBSyxHQUFHLGFBQWEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxjQUFjLHFCQUFFLFNBQVMsR0FBUSxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFOztrQkFDbEIscUJBQXFCLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQ2xFLE9BQU8sV0FBVyxDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDs7O1VBRUssVUFBVSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDOztRQUNoRSxPQUFPLEdBQUcsRUFBRTs7VUFDVixJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFO0lBQ25ELEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1FBQ3hCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTs7a0JBQ3hCLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ3pCLElBQUksR0FBRyxLQUFLLFlBQVksRUFBRTtnQkFDeEIsT0FBTyxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRSxVQUFVLHFCQUFFLEtBQUssSUFBZSxjQUFjLENBQUMsQ0FBQzthQUNwRjtpQkFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFOzs7c0JBRWhELGdCQUFnQixHQUFHLEdBQUcsSUFBSSxVQUFVO3NCQUN4QyxVQUFVLENBQUMsR0FBRyxDQUFDO3NCQUNmLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLElBQUksR0FBRyxHQUFHLElBQUksaUJBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLEVBQUU7O3NCQUU1RyxLQUFLLEdBQUcsYUFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxxQkFBRSxLQUFLLElBQWEsY0FBYyxFQUFFLGdCQUFnQixDQUFDO2dCQUNsRyxPQUFPLElBQUksS0FBSyxDQUFDO2FBQ2xCO1NBQ0Y7S0FDRjtJQUNELE9BQU8sV0FBVyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztDQUN6Qzs7Ozs7O0FBRUQsU0FBUyxXQUFXLENBQUMsR0FBVyxFQUFFLElBQVk7SUFDNUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLOztjQUNyQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLFNBQVMsRUFBRTtZQUNiLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO0tBQ0YsQ0FDQSxDQUFDO0NBQ0g7Ozs7Ozs7Ozs7O0FBS0QsU0FBUyxhQUFhLENBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxFQUFVLEVBQUUsY0FBOEIsRUFBRSxVQUFrQixFQUFFLFNBQWtCOztRQUMvSCxPQUFPLEdBQUcsRUFBRTs7UUFDWixVQUFVLEdBQUcsRUFBRTs7UUFDZixXQUFXLEdBQUcsRUFBRTs7UUFDaEIsTUFBTTtJQUNWLElBQUksU0FBUyxFQUFFO1FBQ2IsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM5QzthQUFNLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0MsTUFBTSxHQUFHLEdBQUcsVUFBVSxFQUFFLENBQUM7U0FDMUI7YUFBTTtZQUNMLE1BQU0sR0FBRyxHQUFHLFNBQVMsSUFBSSxVQUFVLEVBQUUsQ0FBQztTQUN2QztLQUNGO1NBQU0sSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQzVCLE1BQU0sR0FBRyxHQUFHLENBQUM7S0FDZDtTQUFNO1FBQ0wsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7S0FDM0I7SUFDRCxLQUFLLE1BQU0sUUFBUSxJQUFJLEVBQUUsRUFBRTtRQUN6QixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7O2tCQUN6QixPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7WUFFNUIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFOztnQkFFbkIsSUFBSSxPQUFPLENBQUMsV0FBVyxLQUFLLE1BQU0sRUFBRTtvQkFDbEMsVUFBVSxJQUFJLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxxQkFBRSxPQUFPLElBQWEsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDL0Y7cUJBQU07b0JBQ0wsV0FBVyxJQUFJLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7aUJBQ3ZFO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsSUFBSSxXQUFXLEVBQUU7UUFDZixJQUFJLFNBQVMsRUFBRSxFQUFFOztnQkFDWCxHQUFHLEdBQUcsTUFBTTtZQUNoQixJQUFJLEtBQUssRUFBRTtnQkFDVCxHQUFHLElBQUkseUJBQXlCLEtBQUssT0FBTyxDQUFDO2FBQzlDO1lBQ0QsR0FBRyxJQUFJLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztZQUNwQyxPQUFPLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsT0FBTyxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFDdkIsV0FBVyxHQUFHLEdBQUcsU0FBUyxJQUFJLFdBQVcsR0FBRyxDQUFDO1NBQzlDO2FBQU0sSUFBSSxTQUFTLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMvQyxPQUFPLElBQUksR0FBRyxVQUFVLEVBQUUsQ0FBQztTQUM1QjthQUFNO1lBQ0wsT0FBTyxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUM7U0FDeEI7UUFDRCxPQUFPLElBQUksSUFBSSxXQUFXLEdBQUcsQ0FBQztLQUMvQjtJQUNELE9BQU8sT0FBTyxHQUFHLFVBQVUsQ0FBQztDQUM3Qjs7Ozs7OztBQUVELFNBQVMsbUJBQW1CLENBQUMsR0FBVyxFQUFFLEtBQXdCLEVBQUUsY0FBOEI7O1VBQzFGLFdBQVcsR0FBRyw4QkFBOEIsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDO0lBQ3ZFLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7O1lBQzNCLEdBQUcsR0FBRyxFQUFFO1FBQ1osS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDakQsR0FBRyxJQUFJLEdBQUcsV0FBVyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7S0FDWjtTQUFNO1FBQ0wsT0FBTyxHQUFHLFdBQVcsSUFBSSxLQUFLLEdBQUcsQ0FBQztLQUNuQztDQUNGOzs7Ozs7OztBQUVELFNBQVMsaUJBQWlCLENBQUMsU0FBaUIsRUFBRSxPQUFlLEVBQUUsU0FBb0IsRUFBRSxjQUE4Qjs7UUFDN0csT0FBTyxHQUFHLEVBQUU7SUFFaEIsS0FBSyxNQUFNLElBQUksSUFBSSxTQUFTLEVBQUU7UUFDNUIsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFOztrQkFDNUIsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7Ozs7a0JBRzFCLGFBQWEsR0FBRyxTQUFTLElBQUksRUFBRTs7O2tCQUUvQixPQUFPLEdBQUcsYUFBYSxJQUFJLE9BQU87a0JBQ3RDLE9BQU8sQ0FBQyxhQUFhLENBQUM7a0JBQ3RCLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLFNBQVMsR0FBRyxJQUFJLElBQUksb0JBQW9CLEVBQUUsSUFBSSxDQUFDLEdBQUcsb0JBQW9CLEVBQUU7WUFDckksT0FBTyxJQUFJLGNBQWMsT0FBTyxHQUFHLENBQUM7WUFDcEMsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUU7Z0JBQzlCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDcEMsT0FBTyxJQUFJLEdBQUcsT0FBTyxJQUFJLENBQUM7OzBCQUNwQixNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFDaEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7d0JBQ3hCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTs7a0NBQ3hCLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDOzRCQUN2QixPQUFPLElBQUksbUJBQW1CLENBQUMsR0FBRyxxQkFBRSxHQUFHLElBQXVCLGNBQWMsQ0FBQyxDQUFDO3lCQUMvRTtxQkFDRjtvQkFDRCxPQUFPLElBQUksR0FBRyxDQUFDO2lCQUNoQjthQUNGO1lBQ0QsT0FBTyxJQUFJLEdBQUcsQ0FBQztTQUNoQjtLQUNGO0lBQ0QsT0FBTyxPQUFPLENBQUM7Q0FDaEI7Ozs7OztBQUVELFNBQWdCLHlCQUF5QixDQUFDLEdBQVcsRUFBRSxjQUE4Qjs7VUFDN0UsVUFBVSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7SUFDcEMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUM5QyxPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkU7U0FBTSxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3BELE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsRTtTQUFNLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDckQsT0FBTyxjQUFjLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUM5RTtTQUFNLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDckQsT0FBTyxjQUFjLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNqRjtJQUNELE9BQU8sVUFBVSxDQUFDO0NBQ25COzs7OztBQUVELFNBQVMsZ0JBQWdCLENBQUMsR0FBVzs7VUFDN0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQzlCLENBQUM7SUFDRixPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN4Qjs7Ozs7QUFHRCxTQUFTLFlBQVksQ0FBQyxHQUFXO0lBQy9CLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ2pFOzs7Ozs7QUFFRCxTQUFTLDhCQUE4QixDQUFDLEdBQVcsRUFBRSxjQUE4Qjs7VUFDM0VBLE1BQUcsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUNwRCxPQUFPLEdBQUcsSUFBSUEsTUFBRztVQUNmQSxNQUFHLENBQUMsR0FBRyxDQUFDO1VBQ1JBLE1BQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7Q0FDN0Q7O01BRUssWUFBWSxHQUFHO0lBQ25CLGFBQWEsRUFBRSxhQUFhO0lBQzVCLGNBQWMsRUFBRSxjQUFjO0lBQzlCLGtCQUFrQixFQUFFLGtCQUFrQjtJQUN0QyxtQkFBbUIsRUFBRSxtQkFBbUI7Q0FDekM7O01BRUssY0FBYyxHQUFHO0lBQ3JCLEdBQUcsb0JBQ0UsWUFBWSxDQUNoQjtJQUNELEdBQUcsb0JBQ0UsWUFBWSxDQUNoQjtDQUNGOztNQUVLLE1BQU0sR0FBRyxRQUFROztNQUNqQixHQUFHLEdBQUcsS0FBSzs7Ozs7Ozs7QUFFakIsU0FBUyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQVcsRUFBRSxjQUE4QixFQUFFLFFBQWtCOztVQUNuRkEsTUFBRyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDOztJQUVwRCxPQUFPQSxNQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0NBQ3JGOzs7Ozs7Ozs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUUsR0FBVyxFQUFFLGNBQThCLEVBQUUsR0FBYyxFQUFFLEVBQW9COztVQUMzR0EsTUFBRyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDOztJQUVwRCxPQUFPQSxNQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDN0M7Ozs7O0FBRUQsU0FBZ0IscUJBQXFCLENBQUMsR0FBVztJQUMvQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVDOzs7O0FBRUQsU0FBUyxpQkFBaUI7SUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDM0M7Ozs7QUFDRCxTQUFTLG9CQUFvQjtJQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUM5Qzs7Ozs7O0FDaGtCRCxNQVdhLHFCQUFxQjs7OztJQW1CaEMsWUFBb0IsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FBSzs7Ozs7SUFmbkQsSUFDSSxZQUFZLENBQUMsV0FBNkI7UUFDNUMsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Ozs7SUFHRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUN4Qjs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBVGdDLGdCQUFnQjs7OzJCQWM5QyxLQUFLOztNQXdCSyxrQkFBa0I7OztZQUo5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2hDLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ3RDOzs7Ozs7O0FBUUQsU0FBZ0IsZ0JBQWdCLENBQUMsT0FBOEM7SUFDN0UsT0FBTyxPQUFPLFlBQVksVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0NBQ3hFOzs7Ozs7QUMvQ0Q7TUFhTSxhQUFhLEdBQUcsRUFBRTs7TUFDbEIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7Ozs7O0FBYXpCLFNBQWdCLGlCQUFpQixDQUFnQyxJQUFPO0lBQ3RFLE9BQU8sY0FBYyxJQUFJOzs7O1FBR3ZCLGVBQWU7WUFDYixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjs7Ozs7UUFDRCxXQUFXLENBQUMsT0FBc0M7O2tCQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7O2tCQUNkLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSzs7a0JBQ3BCLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTTs7a0JBQ3RCLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUzs7a0JBQzVCLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUTs7a0JBQzFCLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUTs7a0JBQzFCLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVzs7a0JBQ2hDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sS0FBSyxNQUFNOztrQkFDbkUsTUFBTSxHQUFHLGNBQ2IsSUFBSSxJQUFJLGFBQWEsSUFDbkIsT0FBTyxJQUFJLGFBQWEsSUFDdEIsUUFBUSxJQUFJLGFBQWEsSUFDdkIsV0FBVyxJQUFJLGFBQWEsSUFDMUIsVUFBVSxJQUFJLGFBQWEsSUFDekIsVUFBVSxJQUFJLGFBQWEsSUFDekIsYUFBYSxJQUFJLGFBQWEsSUFDNUIsWUFBWSxJQUFJLGFBQWEsRUFBRTtZQUMvQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBcUI7O3NCQUN0RSxLQUFLLEdBWVAsRUFBRTtnQkFDTixJQUFJLFVBQVUsRUFBRTtvQkFDZCxLQUFLLENBQUMsTUFBTSxHQUFHLHdCQUF3QixDQUFDO2lCQUN6QztnQkFDRCxJQUFJLFVBQVUsRUFBRTtvQkFDZCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNsQyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxJQUFJLEVBQUU7d0JBQ1IsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztxQkFDM0M7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxJQUFJLEVBQUU7d0JBQ1IsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLFlBQVksRUFBRTs0QkFDaEIsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQzt5QkFDakQ7cUJBQ0Y7b0JBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksT0FBTyxFQUFFO3dCQUMzQixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3RDO29CQUNELElBQUksUUFBUSxJQUFJLFdBQVcsRUFBRTt3QkFDM0IsSUFBSSxDQUFDLElBQUksRUFBRTs0QkFDVCxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzt5QkFDckQ7OzhCQUNLLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLG9CQUFvQixFQUFFLFFBQVEsQ0FBQzs7OEJBQ3ZHLFdBQVcsR0FBRyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLGtCQUFrQixJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTTt3QkFDNUksS0FBSyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQzt3QkFDL0QsSUFBSSxDQUFDLFdBQVcsRUFBRTs0QkFDaEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHO2dDQUNsQixTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUM7NkJBQ3pDLENBQUM7eUJBQ0g7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsMEJBQU8sS0FBSyxHQUFRO2FBQ3JCLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3pFOzs7O1FBRUQsWUFBWSxHQUFHLElBQVcsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFO0tBQ2hELENBQUM7Q0FDSDs7Ozs7Ozs7OztBQzFHRCxTQUFnQixTQUFTLENBQUMsS0FBVTtJQUNsQyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUM7Q0FDaEQ7Ozs7OztBQ0RELE1BV2EsU0FBUztJQUF0QjtRQUNFLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixjQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDZixjQUFTLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FLbEU7Ozs7SUFKQyxHQUFHO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDOUI7Q0FDRjtNQUVZLE1BQU07Ozs7Ozs7O0lBTWpCLFlBQ1UsZUFBK0IsRUFDL0IsT0FBZSxFQUNmLE9BQVksRUFDWixpQkFBOEIsRUFDOUIsZUFBNkI7UUFKN0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBQ1osc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFjO1FBVC9CLG1CQUFjLEdBQW9DLElBQUksR0FBRyxFQUE4QixDQUFDO1FBQ2hHLFdBQU0sR0FBaUIsRUFBRSxDQUFDO1FBQ2xCLHdCQUFtQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMzRCxrQkFBYSxzQkFBRyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsRUFBTyxDQUFDO1FBUTdDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLE9BQU8sWUFBWSxLQUFLLFVBQVUsSUFBSSxPQUFPLFVBQVUsS0FBTSxVQUFVLEVBQUU7Z0JBQzNFLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3ZFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JFO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDcEIsZUFBZSxHQUFHLGlCQUFpQixDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQW9CO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3RCOzs7O0lBRUQsSUFBWSxjQUFjO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDdkQ7Ozs7O0lBRU8saUJBQWlCLENBQUMsT0FBMkI7UUFDbkQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEtBQUssT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDbkcsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztLQUNoQzs7Ozs7SUFFTyxZQUFZLENBQUMsTUFBd0M7UUFDM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDOztjQUM1QixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO1FBQzNDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDbkQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztzQkFDeEIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQzNCLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO29CQUMvQixTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNMLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO2lCQUNoQzthQUNGO1NBQ0Y7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7S0FDeEM7Ozs7O0lBRU8sYUFBYSxDQUFDLEtBQWlCO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTs7WUFFekIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztLQUNGOzs7OztJQUNPLGNBQWMsQ0FBQyxLQUFpQjtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0tBQ0Y7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUFnQyxFQUFFLFlBQTBCOztjQUNoRSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWM7O1lBQ3JDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTzs7WUFDckIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1FBQ2pCLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUN6QixDQUFDLEdBQUcsYUFBYSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNqRCxDQUFDLEdBQUcsYUFBYSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNsRDs7Y0FDSyxJQUFJLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJOztjQUM3QixHQUFHLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHOztZQUM3QixNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sS0FBSyxlQUFlLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQztRQUM1SSxJQUFJLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTtZQUNyQyxNQUFNLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7U0FDNUQ7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLElBQUksRUFBRSxJQUFJLEdBQUcsTUFBTTtZQUNuQixHQUFHLEVBQUUsR0FBRyxHQUFHLE1BQU07WUFDakIsS0FBSyxFQUFFLE1BQU0sR0FBRyxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQztZQUNsQixrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsSUFBSTtTQUNwRCxDQUFDLENBQUM7S0FDSjs7Ozs7O0lBRU8scUJBQXFCLENBQUMsRUFBWSxFQUFFLEtBQUssR0FBRyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxVQUFVLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDN0Q7Ozs7SUFFRCxTQUFTOztjQUNELFNBQVMsR0FBYyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUk7O2NBQzlDLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CO1FBQ3pDLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDaEMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztnQkFDekIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDeEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLENBQUM7OzthQUdwRixFQUFFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2dCQUN6QixTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7YUFHakUsRUFBRSxTQUFTLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0tBQ0Y7Ozs7SUFDRCxZQUFZO1FBQ1YsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUk7Z0JBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDeEUsQ0FBQyxDQUFDO1NBQ0o7S0FDRjtDQUVGOzs7Ozs7O0FBRUQsU0FBUyxZQUFZLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxJQUFnQjs7VUFDcEQsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7VUFDbkUsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7Q0FDakQ7Ozs7O0FBRUQsU0FBUyxPQUFPLENBQUMsSUFBZ0I7SUFDL0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQzFDOzs7Ozs7QUN0S0Q7QUFHQSxNQUFhLGdCQUFnQixHQUFHO0lBQzlCLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxDQUFDO1FBQ04sTUFBTSxFQUFFLENBQUM7UUFDVCxJQUFJLEVBQUUsQ0FBQztRQUNQLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRCxjQUFjLEVBQUU7UUFDZCxNQUFNLEVBQUUsQ0FBQztRQUNULElBQUksRUFBRSxlQUFlO1FBQ3JCLE1BQU0sRUFBRSxLQUFLO1FBQ2IsTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsUUFBUTtRQUNsQixPQUFPLEVBQUUsQ0FBQztRQUNWLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxLQUFLO1FBQ1osT0FBTyxFQUFFLENBQUM7UUFDVixvQkFBb0IsRUFBRSxNQUFNO1FBQzVCLGlCQUFpQixFQUFFLE1BQU07S0FDMUI7SUFDRCxNQUFNLEVBQUU7UUFDTiw2QkFBNkIsRUFBRSxhQUFhO1FBQzVDLGVBQWUsRUFBRSxhQUFhO1FBQzlCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsaUJBQWlCLEVBQUUsTUFBTTtRQUN6QixvQkFBb0IsRUFBRSxNQUFNO1FBQzVCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsT0FBTyxFQUFFLE1BQU07UUFDZixTQUFTLEVBQUUsWUFBWTtRQUN2QixRQUFRLEVBQUUsVUFBVTtRQUNwQixrQkFBa0IsRUFBRSxNQUFNO1FBQzFCLDhCQUE4QixFQUFFLE1BQU07UUFDdEMscUJBQXFCLEVBQUU7WUFDckIsTUFBTSxFQUFFLENBQUM7U0FDVjtLQUNGO0NBQ0Y7QUFHRCxNQUFhLFlBQVk7Ozs7SUFFdkIsWUFBb0IsS0FBZTtRQUFmLFVBQUssR0FBTCxLQUFLLENBQVU7UUFEbkMsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDYjs7O1lBSHpDLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUF6Q3pCLFFBQVE7Ozs7Ozs7O0FDRGpCO0FBS0EsTUFBYSxNQUFNLEdBQUcsQ0FBQyxLQUFxQixNQUFNO0lBQ2hELGVBQWUsRUFBRTtRQUNmLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLEtBQUs7UUFDYixVQUFVLEVBQUUsY0FBYztRQUMxQixPQUFPLEVBQUUsSUFBSTtRQUNiLFlBQVksRUFBRSxLQUFLO1FBQ25CLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLFVBQVUsRUFBRSxXQUFXLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sY0FBYyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUM1RixFQUFFO1FBQ0YsYUFBYSxFQUFFLE1BQU07S0FDdEI7SUFDRCxTQUFTLG9CQUNKLGdCQUFnQixDQUFDLElBQUksSUFDeEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsYUFBYSxFQUFFLE1BQU0sRUFDckIsWUFBWSxFQUFFLFNBQVMsR0FDeEI7Q0FDRixDQUFDO0FBS0YsTUFBYSxlQUFlOzs7O0lBRTFCLFlBQ1UsS0FBZTtRQUFmLFVBQUssR0FBTCxLQUFLLENBQVU7UUFGekIsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBR3RDOzs7WUFQTixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUF6QlEsUUFBUTs7Ozs7Ozs7QUNEakI7Ozs7O0FBbUJBLFNBQWdCLGtCQUFrQixDQUF1QyxJQUFPO0lBQzlFLE9BQU8sY0FBYyxJQUFJOzs7O1FBeUJ2QixZQUFZLEdBQUcsSUFBVztZQUN4QixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQXZCakIsa0JBQWEsR0FBaUIsRUFBRSxDQUFDO1NBd0JoQzs7OztRQXBCRCxJQUFJLGFBQWEsS0FBYyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTs7Ozs7UUFDNUQsSUFBSSxhQUFhLENBQUMsR0FBWTtZQUM1QixJQUFJLFFBQVEsQ0FBQyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxjQUFjLEVBQUU7O3NCQUMvQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDOztnQkFFbkQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLEVBQUU7O29CQUVYLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDOzs4QkFDbkIsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYTs7OEJBQ25ELGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxLQUFLLGNBQWM7d0JBQ3hHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7d0JBQ2hJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztxQkFDNUMsQ0FBQyxDQUFDO2lCQUNKO2FBQ0Y7U0FDRjs7OztRQU1ELG1CQUFtQjtZQUNqQixJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7aUJBQ3JCO2FBQ0Y7U0FDRjtLQUNGLENBQUM7Q0FDSDs7Ozs7O0FDM0REOzs7OztBQU1BLFNBQWdCLGFBQWEsQ0FBd0IsSUFBTztJQUMxRCxPQUFPLGNBQWMsSUFBSTs7OztRQU12QixZQUFZLEdBQUcsSUFBVztZQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBTHJDLGNBQVMsR0FBWSxLQUFLLENBQUM7U0FLWTs7OztRQUgvQyxJQUFJLFFBQVEsS0FBSyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7Ozs7UUFDekMsSUFBSSxRQUFRLENBQUMsS0FBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7S0FHaEUsQ0FBQztDQUNIOzs7Ozs7O01DZEssYUFBYSxHQUFHLFNBQVM7Ozs7OztBQU0vQixTQUFnQixVQUFVLENBQXdCLElBQU87SUFDdkQsT0FBTyxjQUFjLElBQUk7Ozs7UUFHdkIsSUFBSSxLQUFLLEtBQWEsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Ozs7O1FBQzNDLElBQUksS0FBSyxDQUFDLEdBQVc7O2tCQUNiLFlBQVksR0FBRyxHQUFHLElBQUksYUFBYTtZQUN6QyxJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQzthQUM1QjtTQUNGOzs7O1FBRUQsWUFBWSxHQUFHLElBQVc7WUFDeEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDaEI7S0FDRixDQUFDO0NBQ0g7Ozs7Ozs7TUN0QkssVUFBVSxHQUFHLFNBQVM7Ozs7OztBQU01QixTQUFnQixPQUFPLENBQXdCLElBQU87SUFDcEQsT0FBTyxjQUFjLElBQUk7Ozs7UUFHdkIsSUFBSSxFQUFFLEtBQWEsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7O1FBQ3JDLElBQUksRUFBRSxDQUFDLEdBQVc7O2tCQUNWLFlBQVksR0FBRyxHQUFHLElBQUksVUFBVTtZQUN0QyxJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQzthQUN6QjtTQUNGOzs7O1FBRUQsWUFBWSxHQUFHLElBQVc7WUFDeEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDaEI7S0FDRixDQUFDO0NBQ0g7Ozs7OztBQ3ZCRDs7Ozs7QUFNQSxTQUFnQixXQUFXLENBQXdCLElBQU87SUFDeEQsT0FBTyxjQUFjLElBQUk7Ozs7UUFHdkIsSUFBSSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Ozs7O1FBQ3JDLElBQUksTUFBTSxDQUFDLEtBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzs7O1FBRTNELFlBQVksR0FBRyxJQUFXLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtLQUNoRCxDQUFDO0NBQ0g7Ozs7OztBQ2ZEOzs7OztBQU1BLFNBQWdCLGFBQWEsQ0FBd0IsSUFBTztJQUMxRCxPQUFPLGNBQWMsSUFBSTs7OztRQUd2QixJQUFJLFFBQVEsS0FBSyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7Ozs7UUFDekMsSUFBSSxRQUFRLENBQUMsS0FBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Ozs7UUFFL0QsWUFBWSxHQUFHLElBQVcsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFO0tBQ2hELENBQUM7Q0FDSDs7Ozs7Ozs7Ozs7QUNWRCxTQUFnQixjQUFjLENBQXdCLElBQU87SUFDM0QsT0FBTyxjQUFjLElBQUk7Ozs7UUFHdkIsSUFBSSxTQUFTLEtBQUssT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Ozs7O1FBQzNDLElBQUksU0FBUyxDQUFDLEtBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxFQUFFOzs7O1FBRXRELFlBQVksR0FBRyxJQUFXLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtLQUNoRCxDQUFDO0NBQ0g7Ozs7Ozs7Ozs7O0FDVEQsU0FBZ0IsZ0JBQWdCLENBQXdCLElBQU87SUFDN0QsT0FBTyxjQUFjLElBQUk7Ozs7UUFHdkIsSUFBSSxXQUFXLEtBQWEsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Ozs7O1FBQ3ZELElBQUksV0FBVyxDQUFDLEtBQWEsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxFQUFFOzs7O1FBRTdELFlBQVksR0FBRyxJQUFXLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtLQUNoRCxDQUFDO0NBQ0g7Ozs7Ozs7Ozs7O0FDZkQ7TUFLTUMsWUFBVSxHQUFHLE9BQU87QUFFMUIsTUFBYSxXQUFXOzs7OztJQUN0QixZQUNTLE1BQWdCLEVBQ2hCLE9BQWU7UUFEZixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVE7S0FDbkI7Q0FDTjs7QUFFRCxNQUFhLGdCQUFnQixHQUFHLGlCQUFpQixDQUNqRCxPQUFPLENBQ0wsVUFBVSxDQUNSLFdBQVcsQ0FDVCxhQUFhLENBQ1gsY0FBYyxDQUNaLGdCQUFnQixDQUNkLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBY2xELE1BQWEsT0FBUSxTQUFRLGdCQUFnQjs7Ozs7OztJQVczQyxZQUNFLEtBQWUsRUFDZixNQUFjLEVBQ04sR0FBZSxFQUNmLFNBQW9CO1FBRTVCLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFIYixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUc1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0tBQ2xDOzs7OztJQWxCRCxJQUNJLE9BQU8sQ0FBQyxHQUFRO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hDOzs7O0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7O0lBY0QsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVCOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHQSxZQUFVLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQ3hFLFNBQVMsR0FDUjtnQkFDQyxPQUFPLEVBQUUsT0FBTzthQUNqQixFQUNBLENBQUMsQ0FBQztTQUNOO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsTUFBTSxFQUFFO29CQUNOLElBQUk7b0JBQ0osT0FBTztvQkFDUCxRQUFRO29CQUNSLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxhQUFhO29CQUNiLGVBQWU7aUJBQ2hCO2FBQ0Y7Ozs7WUFqQ1EsUUFBUTtZQUQwQixNQUFNO1lBQWxCLFVBQVU7WUFBb0MsU0FBUzs7O3NCQXNDbkYsS0FBSyxTQUFDLFNBQVM7Ozs7Ozs7QUN0Q2xCLE1BS2EsV0FBVzs7OztJQVN0QixZQUNVLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBQ25COzs7OztJQVRMLElBQ0ksU0FBUyxDQUFDLEdBQVc7UUFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLDBCQUEwQixDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7YUFDeEI7Ozs7WUFKbUIsVUFBVTs7O3dCQU8zQixLQUFLOzs7Ozs7O0FDUFIsTUFTYSxjQUFjOzs7WUFKMUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUM7YUFDaEM7Ozs7Ozs7Ozs7O0FDUkQsU0FBUyxRQUFRLENBQUMsR0FBUTtJQUN0QixPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUM7Q0FDN0M7Ozs7O0FBRUQsU0FBUyxTQUFTLENBQUMsSUFBUztJQUN4QixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztDQUMxRTs7Ozs7QUFDRCxTQUFnQixhQUFhLENBQUMsSUFBaUI7O1FBQ3ZDLE9BQVk7O1FBQUUsR0FBUTs7UUFDdEIsR0FBRyxHQUFHLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDOztVQUNyQixHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhO0lBRXRDLE9BQU8sR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBRTlCLElBQUksT0FBTyxJQUFJLENBQUMscUJBQXFCLEtBQUssT0FBTyxTQUFTLEVBQUU7UUFDeEQsR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQ3RDO0lBQ0QsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixPQUFPO1FBQ0gsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUztRQUNsRCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVO0tBQ3hELENBQUM7Q0FDTDs7Ozs7Ozs7Ozs7QUN0QkQsU0FBZ0IsWUFBWSxDQUFDLEtBQXNCLEVBQUUsWUFBNkI7SUFDaEYsT0FBTyxLQUFLLEtBQUssRUFBRSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsWUFBWSxDQUFDO0NBQ2hFOzs7Ozs7Ozs7Ozs7QUNERCxTQUFnQixRQUFRLENBQUMsT0FBb0IsRUFBRSxRQUFnQjs7UUFDekQsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxlQUFlO0lBQ2hDLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxDQUFDLEVBQUU7O2NBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNkLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztLQUNqRDtJQUNELFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7Q0FDOUM7Ozs7Ozs7OztBQUdELFNBQWdCLFNBQVMsQ0FBQyxPQUFvQixFQUFFLElBQVMsRUFBRSxFQUF3QixFQUFFLFFBQWdCO0lBQ25HLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtRQUFFLE9BQU87S0FBRTtJQUM5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQUU7SUFDdkQsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUU7UUFBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztLQUFFO0lBRWpELHlCQUF5QixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztDQUNqRjs7Ozs7Ozs7O0FBRUQsU0FBZ0IsbUJBQW1CLENBQ2pDLE9BQW9CLEVBQ3BCLEVBQVUsRUFDVixRQUFnQixFQUNoQixDQUFhLEVBQ2IsTUFBOEI7O1VBRXhCLE9BQU8sR0FBRyxNQUFNLElBQUksWUFBWTtVQUNoQyxFQUFFLFVBQVUsRUFBRSxHQUFHLE9BQU87SUFDOUIsT0FBTyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzVGOzs7Ozs7Ozs7Ozs7QUFFRCxTQUFTLHlCQUF5QixDQUNoQyxPQUFvQixFQUNwQixLQUFhLEVBQ2IsR0FBVyxFQUNYLEdBQVcsRUFDWCxLQUFhLEVBQ2IsSUFBWSxFQUNaLE1BQTZCLEVBQzdCLENBQWE7O1VBRVAsT0FBTyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsV0FBVyxHQUFHLFlBQVk7SUFDdEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtRQUNwQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLE9BQU87S0FDUjtJQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxHQUFHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztJQUVwQixVQUFVLENBQUM7UUFDVCx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDN0UsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCRCxTQUFTLFlBQVksQ0FBQyxDQUFTO0lBQzdCLENBQUMsRUFBRSxDQUFDO0lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDdEI7Ozs7Ozs7Ozs7O0FDbEZEOzs7SUFPRSxTQUFVLFNBQVM7O0lBRW5CLFVBQVcsVUFBVTs7TUFhVixZQUFZOzs7O0lBTXZCLFlBQ1UsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFOakIsZ0JBQVcsR0FBRyxJQUFJLEdBQUcsRUFBK0IsQ0FBQztRQUdyRCxXQUFNLEdBQUcsQ0FBQyxDQUFDO0tBSWQ7Ozs7OztJQUVMLE1BQU0sQ0FBQyxPQUE4QyxFQUFFLFVBQWtEO1FBQ3ZHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFOztZQUV2QixPQUFPLElBQUksQ0FBQztTQUNiOztjQUVLLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7O2NBQ3pDLEdBQUcsR0FBRyxVQUFVLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksYUFBYTtRQUV2RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pEOztjQUVLLFVBQVUsR0FBbUI7WUFDakMsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUUsSUFBSSxPQUFPLEVBQWM7U0FDbkM7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7O2NBQ2pCLGFBQWEsR0FBRyxDQUFDLEtBQWlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQzs7Y0FDMUUsWUFBWSxHQUFHLENBQUMsS0FBaUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBRS9FLFVBQVUsQ0FBQyxRQUFRLEdBQUc7WUFDcEIsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEUsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0QsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQzdCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdELGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVELENBQUMsQ0FBQztRQUNILE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUMxQzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBOEM7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsT0FBTztTQUNSOztjQUNLLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7O2NBQzlCLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDL0MsSUFBSSxjQUFjLEVBQUU7WUFDbEIsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtLQUNGOzs7Ozs7SUFFTyxHQUFHLENBQUMsS0FBaUIsRUFBRSxPQUE0Qjs7WUFDckQsRUFBRSxHQUFlLElBQUk7UUFDekIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUMxQixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxVQUFVLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMxQzs7OztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPO1NBQ1I7O2NBRUssb0JBQW9CLEdBQUcsNkJBQTZCO2NBQ3hEO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2FBQ2QsR0FBRyxLQUFLOztjQUVILHVCQUF1QixHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDOztjQUNyRyx5QkFBeUIsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUUxRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQzdCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUNwRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLHlCQUF5QixFQUFFLG9CQUFvQixDQUFDLENBQUM7U0FDekYsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHNCQUFzQixHQUFHO1lBQzVCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUN2RixRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLHlCQUF5QixFQUFFLG9CQUFvQixDQUFDLENBQUM7U0FDNUYsQ0FBQztLQUNIOzs7O0lBRU8sZUFBZTtRQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7S0FDRjs7OztJQUVPLGVBQWU7UUFDckIsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtLQUNGOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDbEU7OztZQTNHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFyQm9CLE1BQU07Ozs7Ozs7OztBQ0EzQixNQUFhLFdBQVcsR0FBRyxrQ0FBa0M7O0FBQzdELE1BQWEsZUFBZSxHQUFHLDBCQUEwQjs7Ozs7O0FDRHpEO0FBSUEsTUFBYSxpQkFBaUIsR0FBRyxJQUFJLGNBQWMsQ0FBZ0IsbUJBQW1CLENBQUM7O01BRWpGLHNCQUFzQixHQUFHO0lBQzdCLE9BQU87SUFDUCxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtDQUNkO0FBR0QsTUFBYSxxQkFBc0IsU0FBUSxtQkFBbUI7Ozs7SUFFNUQsWUFDaUQsY0FBNkI7UUFFNUUsS0FBSyxFQUFFLENBQUM7UUFGdUMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFGOUUsV0FBTSxHQUFhLHNCQUFzQixDQUFDO0tBS3pDOzs7OztJQUNELFdBQVcsQ0FBQyxPQUFvQjs7Y0FDeEIsTUFBTSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxvQkFBQyxNQUFNLElBQVMsTUFBTSxHQUFHLElBQUk7O2NBQ3RFLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7O2NBRW5ELEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7O2NBQ3RCLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7O2NBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFDLEVBQUUsS0FBSyxDQUFDO1FBRWhGLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBR3pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUM7S0FDWDs7Ozs7Ozs7SUFHTyxpQkFBaUIsQ0FBQyxJQUFTLEVBQUUsT0FBWSxFQUFFLEdBQUcsWUFBbUI7O2NBQ2pFLFVBQVUsR0FBRyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO1FBRWxELFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTdELE9BQU8sVUFBVSxDQUFDO0tBQ25COzs7WUEvQkYsVUFBVTs7Ozs0Q0FJTixRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs7Ozs7OztBQ25CekMsTUFLYSxhQUFhOzs7OztJQUN4QixPQUFPLFFBQVEsQ0FBQyxTQUFpQjtRQUMvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNULENBQUMsUUFBUSxDQUFDO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO2FBQ2hEO1NBQ0YsQ0FBQztLQUNIOzs7WUFWRixRQUFROzs7Ozs7O0FDSlQsTUFBYSxTQUFTO0lBQ3BCLGlCQUFpQjtDQUNsQjs7QUFFRCxNQUFhLGNBQWMsR0FBRyxJQUFJLFNBQVMsRUFBRTs7Ozs7Ozs7SUNIM0MsS0FBRTtJQUNGLE1BQUc7Ozs7Ozs7OztBQUdMLFNBQWdCLG1CQUFtQixDQUFDLEtBQWEsRUFBRSxtQkFBcUMsZ0JBQWdCLENBQUMsRUFBRTtJQUN6RyxJQUFJLEtBQUssSUFBSSxnQkFBZ0IsS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7O2NBQ2hELE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNwRCxPQUFPLE1BQU0sQ0FBQztLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUM7Q0FDZDs7Ozs7O0FDWEQ7TUFNTUMsUUFBTSxHQUFHLENBQUMsS0FBcUIsTUFBTTtJQUN6QyxlQUFlLEVBQUU7UUFDZixRQUFRLEVBQUUsT0FBTztRQUNqQixHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxDQUFDO1FBQ1AsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQztRQUNULE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDNUIsYUFBYSxFQUFFLE1BQU07S0FDdEI7Q0FDRixDQUFDO01BS1csa0JBQWtCOzs7O0lBSzdCLFlBQ1UsS0FBZTtRQUFmLFVBQUssR0FBTCxLQUFLLENBQVU7UUFMakIsYUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDQSxRQUFNLENBQUMsQ0FBQztRQUU1QyxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQU8sQ0FBQztRQUs5QixJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7O2tCQUNoQixTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztZQUNoRSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO1NBQ3BDO0tBQ0Y7Ozs7SUFDRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztLQUMvQjs7Ozs7OztJQU1ELElBQUksQ0FBQyxJQUFJO1FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDaEI7Ozs7Ozs7SUFNRCxPQUFPLENBQUMsSUFBSTtRQUNWLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2hCOzs7Ozs7SUFNTyxPQUFPO1FBQ2IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO2dCQUNuQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3JFO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7U0FDeEM7S0FDRjs7O1lBdkRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWxCUSxRQUFROzs7O01BMEVYLGVBQWUsSUFBSTtJQUN2QixRQUFRLEVBQUU7UUFDUixhQUFhLEVBQUUsS0FBSztRQUNwQixVQUFVLEVBQUUsTUFBTTtLQUNuQjtDQUNGLENBQUM7QUFNRixNQUFhLGlCQUFpQjs7Ozs7OztJQU01QixZQUNFLEVBQWMsRUFDTixNQUFnQixFQUNTLGNBQW1CLEVBQ3BELFlBQTBCO1FBRmxCLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDUyxtQkFBYyxHQUFkLGNBQWMsQ0FBSzs7OztRQVB0RCxZQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFVbkQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQzNCLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZEO0tBQ0Y7Ozs7SUFic0IsT0FBTztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2pDOzs7WUFURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQXRGcUQsVUFBVTtZQUV2RCxRQUFROzRDQThGWixNQUFNLFNBQUMsZUFBZTtZQTdGbEIsWUFBWTs7O3NCQXVGbEIsWUFBWSxTQUFDLE9BQU87Ozs7Ozs7QUMxRnZCLE1BVWEsU0FBUzs7Ozs7SUFJcEIsWUFDNEIsUUFBYSxFQUN2QyxNQUFjO1FBRFksYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUd2QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2dCQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM3QyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2IsR0FBRyxDQUFDO29CQUNGLE9BQU8sTUFBTSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7aUJBQ3pFLENBQUMsRUFDRixLQUFLLEVBQUUsQ0FDUixDQUFDO2FBQ0gsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLENBQUM7U0FDeEI7S0FDRjs7O1lBeEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0FNSSxNQUFNLFNBQUMsUUFBUTtZQWZTLE1BQU07Ozs7Ozs7O0FDQW5DLE1BU2EsU0FBUzs7Ozs7SUFJcEIsWUFDNEIsU0FBYyxFQUN4QyxNQUFjO1FBRFksY0FBUyxHQUFULFNBQVMsQ0FBSztRQUd4QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2dCQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDdEQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUcsQ0FBQztvQkFDRixPQUFPLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO2lCQUNuRSxDQUFDLEVBQ0YsS0FBSyxFQUFFLENBQ1IsQ0FBQzthQUNILENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0tBQ0Y7OztZQXhCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBTUksTUFBTSxTQUFDLFFBQVE7WUFkUyxNQUFNOzs7Ozs7OztBQ0FuQyxBQTJCQSxNQUFNLHFCQUFxQjs7Ozs7Ozs7Ozs7O0lBU3pCLFlBQ1UseUJBQW1ELEVBQ25ELE9BQXVCLEVBQy9CLFlBQXVDLEVBQy9CLGlCQUFxQyxFQUM3QyxRQUFhLEVBQ0wsU0FBbUIsRUFDM0IsWUFBdUIsRUFDdkIsYUFBd0IsRUFDeEIsTUFBc0I7UUFSZCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRXZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7UUFFckMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQVY3QixnQkFBVyxHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDOzs7UUFpQjdDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O2NBRW5DLFFBQVEsbUJBQ1osUUFBUSxFQUFFLFVBQVUsRUFDcEIsT0FBTyxFQUFFLE1BQU0sRUFDZixHQUFHLEVBQUUsQ0FBQyxFQUNOLElBQUksRUFBRSxDQUFDLEVBQ1AsS0FBSyxFQUFFLENBQUMsRUFDUixNQUFNLEVBQUUsQ0FBQyxFQUNULGNBQWMsRUFBRSxRQUFRLEVBQ3hCLFVBQVUsRUFBRSxRQUFRLEVBQ3BCLGFBQWEsRUFBRSxLQUFLLElBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQ2pCOztjQUNLLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2xDO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixRQUFRLHFDQUNOLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFDL0IsTUFBTSxJQUNULE1BQU0sRUFBRSxRQUFRLEtBQ2pCO2FBQ0Y7U0FDRixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUM7O3NCQUN4RSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7c0JBQzFDLFNBQVMsR0FBRztvQkFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtpQkFDaEI7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5QixDQUFDLENBQUM7U0FDSjs7Y0FFSyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87UUFDOUIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUM3QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxLQUFLLG9CQUFDLElBQUksQ0FBQyxHQUFHLElBQW9CLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN2RjtRQUVELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDOztjQUN6RCxVQUFVLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxhQUFhO1FBQ3RFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBRXJFOzs7O0lBaEVELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUNqQjs7Ozs7SUFnRUQsWUFBWSxDQUFDLFFBQVE7OztRQUduQixLQUFLLE1BQU0sR0FBRyxJQUFJLFFBQVEsRUFBRTtZQUMxQixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7O3NCQUMxQixRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQkFDOUIsSUFBSSxRQUFRLEVBQUU7b0JBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxHQUFHLEdBQUcsUUFBUSxJQUFJLEdBQUcsUUFBUSxDQUFDO2lCQUN0RjthQUNGO1NBQ0Y7S0FDRjs7Ozs7OztJQUVPLHNCQUFzQixDQUFDLElBQTJDLEVBQUUsT0FBTyxFQUFFLFFBQWtCO1FBQ3JHLElBQUksSUFBSSxZQUFZLFdBQVcsRUFBRTs7O2tCQUV6QixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUN0RSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFHakMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBR3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsb0JBQUMsSUFBSSxJQUFlLFFBQVEsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0Y7Ozs7OztJQUVELGlCQUFpQixDQUFDLElBQWUsRUFBRSxRQUFrQjs7Y0FDN0MsT0FBTyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7UUFDNUUsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEM7S0FDRjs7OztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNqQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO2FBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFOztZQUVuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUNELElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLENBQUM7O2tCQUNqQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxhQUFhO1lBQ3RFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ2hDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNmO0NBQ0Y7TUFLWSxTQUFTOzs7Ozs7Ozs7SUFFcEIsWUFDVSxpQkFBcUMsRUFDckMseUJBQW1ELEVBQ25ELE9BQXVCLEVBQ3ZCLFNBQW1CLEVBQ25CLGFBQXdCLEVBQ3hCLGNBQXlCO1FBTHpCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7UUFDckMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNuRCxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGtCQUFhLEdBQWIsYUFBYSxDQUFXO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFXO0tBQzlCOzs7Ozs7O0lBRUwsTUFBTSxDQUFDLFFBQW1DLEVBQUUsT0FBYSxFQUFFLE1BQXNCO1FBQy9FLE9BQU8sSUFBSSxxQkFBcUIsQ0FDOUIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0o7OztZQWpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUE5S1Esa0JBQWtCO1lBRHdDLHdCQUF3QjtZQUF4QyxjQUFjO1lBQTRCLFFBQVE7WUFJNUYsU0FBUztZQURULFNBQVM7Ozs7Ozs7O0FDSGxCLE1BT2EsZUFBZTs7O1lBSjNCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDckM7Ozs7Ozs7QUNORDtNQUVNLHNCQUFzQixHQUFHO0lBQzdCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxJQUFJO0lBQ2YsT0FBTyxFQUFFLElBQUk7Q0FDZDtBQUdELE1BQWEsdUJBQXVCOzs7OztJQUNsQyxNQUFNLENBQUMsUUFBMEI7UUFDL0IsT0FBTyxPQUFPLGdCQUFnQixLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN4Rjs7O1lBSkYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7O0FBUWhDLE1BQWEsZUFBZTs7OztJQUcxQixZQUNVLHdCQUFpRDtRQUFqRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBSG5ELHNCQUFpQixHQUFHLElBQUksR0FBRyxFQUFvQyxDQUFDO0tBSW5FOzs7O0lBRUwsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUN2RTs7Ozs7OztJQUVELE9BQU8sQ0FBQyxZQUEyQyxFQUFFLEVBQW9CLEVBQUUsT0FBOEI7O2NBQ2pHLE9BQU8sR0FBRyxZQUFZLFlBQVksVUFBVSxHQUFHLFlBQVksQ0FBQyxhQUFhLEdBQUcsWUFBWTtRQUM5RixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTs7a0JBQ2xDLFFBQVEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUN6RCxJQUFJLFFBQVEsRUFBRTtnQkFDWixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLElBQUksc0JBQXNCLENBQUMsQ0FBQzthQUM5RDtZQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzVDOzs7Ozs7SUFLRCxPQUFPLENBQUMsWUFBMkM7O2NBQzNDLE9BQU8sR0FBRyxZQUFZLFlBQVksVUFBVSxHQUFHLFlBQVksQ0FBQyxhQUFhLEdBQUcsWUFBWTtRQUM5RixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO0tBQ0Y7OztZQWpDRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O1lBS00sdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7SUNuQjNELFlBQWEsYUFBYTtJQUMxQixlQUFnQixnQkFBZ0I7SUFDaEMsYUFBYyxjQUFjO0lBQzVCLE9BQVEsWUFBWTtJQUNwQixLQUFNLFVBQVU7SUFDaEIsU0FBVSxlQUFlO0lBQ3pCLFFBQVMsY0FBYztJQUN2QixRQUFTLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9