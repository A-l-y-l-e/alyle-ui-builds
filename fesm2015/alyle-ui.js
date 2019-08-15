import * as _chroma from 'chroma-js';
import { InjectionToken, ViewEncapsulation, ɵɵdefineInjectable, ɵɵinject, RendererFactory2, Injectable, Optional, Inject, isDevMode, NgZone, Input, TemplateRef, Directive, ViewContainerRef, NgModule, ElementRef, Renderer2, HostListener, Component, Injector, ComponentFactoryResolver, ApplicationRef, INJECTOR, ChangeDetectionStrategy } from '@angular/core';
import { __decorate, __param, __metadata } from 'tslib';
import { DOCUMENT } from '@angular/common';
import { Subject, ReplaySubject, fromEvent, empty, Subscription, merge } from 'rxjs';
import { takeUntil, auditTime, map, share } from 'rxjs/operators';
import { HammerGestureConfig } from '@angular/platform-browser';

function getContrastYIQ(hexcolor) {
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

const chroma = _chroma;
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
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
function shadowBuilderDeprecated(elevation = 2, color = '#000') {
    const Color = chroma(color);
    const colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    const e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return `box-shadow:${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px ${colors[0]},${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px ${colors[1]},${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px ${colors[2]};`;
}
function shadowBuilder(elevation, color) {
    let Color = chroma(color || '#000');
    const rgb = Color.get('rgb');
    if (!(rgb[0] === rgb[1] && rgb[0] === rgb[2])) {
        // Darken and saturate if the color is not in the grayscale
        Color = Color.darken().saturate(2);
    }
    const colors = [
        Color.alpha(shadowKeyUmbraOpacity).css(),
        Color.alpha(shadowKeyPenumbraOpacity).css(),
        Color.alpha(shadowAmbientShadowOpacity).css()
    ];
    const e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px ${colors[0]},${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px ${colors[1]},${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px ${colors[2]};`;
}

const THEME_VARIABLES = new InjectionToken('ly.theme.variables');
const IS_CORE_THEME = new InjectionToken('ly.is.root');

// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
const hasV8BreakIterator = (typeof (Intl) !== 'undefined' && Intl.v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
}
Platform.isBrowser = typeof document === 'object' && !!document;
/** Layout Engines */
Platform.EDGE = Platform.isBrowser && /(edge)/i.test(navigator.userAgent);
Platform.TRIDENT = Platform.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
// EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
Platform.BLINK = Platform.isBrowser &&
    (!!(window.chrome || hasV8BreakIterator) && !!CSS && !Platform.EDGE && !Platform.TRIDENT);
// Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
// ensure that Webkit runs standalone and is not used as another engine's base.
Platform.WEBKIT = Platform.isBrowser &&
    /AppleWebKit/i.test(navigator.userAgent) && !Platform.BLINK && !Platform.EDGE && !Platform.TRIDENT;
/** Browsers and Platform Types */
Platform.IOS = Platform.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
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

let supportsPassive;
function supportsPassiveEventListeners() {
    if (supportsPassive === void 0) {
        try {
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

const LY_THEME_GLOBAL_VARIABLES = new InjectionToken('ly.theme.global.variables');
const LY_THEME = new InjectionToken('ly_theme_config');
const LY_THEME_NAME = new InjectionToken('ly.theme.name');

/** Only for internal use */
const _STYLE_MAP = new Map();
var TypeStyle;
(function (TypeStyle) {
    TypeStyle[TypeStyle["Multiple"] = 0] = "Multiple";
    TypeStyle[TypeStyle["OnlyOne"] = 1] = "OnlyOne";
})(TypeStyle || (TypeStyle = {}));

class LyStyleUtils {
    pxToRem(value) {
        const size = this.typography.fontSize / 14;
        return `${value / this.typography.htmlFontSize * size}rem`;
    }
    colorOf(value, optional) {
        return get(this, value, optional);
    }
    getBreakpoint(key) {
        return `@media ${this.breakpoints[key] || key}`;
    }
    getClasses(styles) {
        const styleMap = _STYLE_MAP.get(styles);
        if (styleMap) {
            return styleMap.classes || styleMap[this.name];
        }
        else {
            throw Error('Classes not found');
        }
    }
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
var Dir;
(function (Dir) {
    Dir["rtl"] = "rtl";
    Dir["ltr"] = "ltr";
})(Dir || (Dir = {}));
var DirAlias;
(function (DirAlias) {
    DirAlias["before"] = "before";
    DirAlias["after"] = "after";
})(DirAlias || (DirAlias = {}));
var DirPosition;
(function (DirPosition) {
    DirPosition["left"] = "left";
    DirPosition["right"] = "right";
})(DirPosition || (DirPosition = {}));
/**
 * get color of object
 * @param obj object
 * @param path path
 * @param optional get optional value, if not exist return default if not is string
 */
function get(obj, path, optional) {
    const _path = path instanceof Array ? path : path.split(':');
    for (let i = 0; i < _path.length; i++) {
        const posibleOb = obj[_path[i]];
        if (posibleOb) {
            obj = posibleOb;
        }
        else {
            /** if not exist */
            return path;
        }
    }
    if (typeof obj === 'string') {
        return obj;
    }
    else if (optional) {
        return obj[optional] || obj['default'];
    }
    else {
        return obj['default'];
    }
    // return typeof obj === 'string' ? obj as string : obj['default'] as string;
}
function eachMedia(str, fn) {
    if (typeof str === 'string') {
        const values = str.split(/\s/g);
        for (let index = 0; index < values.length; index++) {
            const valItem = values[index].split(/\@/g);
            const value = valItem.shift();
            const len = valItem.length;
            if (len) {
                for (let j = 0; j < len; j++) {
                    fn.call(undefined, value, valItem[j], index);
                }
            }
            else {
                fn.call(undefined, value, null, index);
            }
        }
    }
    else {
        fn.call(undefined, str, null, 0);
    }
}
/**
 * Simple object check.
 * @param item
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep(target, ...sources) {
    if (!sources.length) {
        return target;
    }
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

let CoreTheme = class CoreTheme {
    constructor(themeConfig, globalVariables, rendererFactory, _document) {
        this.rendererFactory = rendererFactory;
        this.themes = new Set();
        this._themeMap = new Map();
        this._styleMap = new Map();
        if (!themeConfig) {
            throw new Error(`LY_THEME undefined: no theme has been added, please add at least one theme\n\n` +
                `Follow the steps of the documentation https://goo.gl/8V486A`);
        }
        this.renderer = this.rendererFactory.createRenderer(null, {
            id: 'ly',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {}
        });
        if (Platform.isBrowser) {
            const nodes = _document.body.querySelectorAll('ly-s-c');
            if (nodes.length) {
                for (let index = 0; index < nodes.length; index++) {
                    const element = nodes.item(index);
                    _document.body.removeChild(element);
                }
            }
        }
        this.firstElement = _document.body.firstChild;
        const themes = new Map();
        if (Array.isArray(themeConfig)) {
            themeConfig.forEach(item => {
                if (themes.has(item.name)) {
                    themes.get(item.name).push(item);
                }
                else {
                    themes.set(item.name, [item]);
                }
            });
            themes.forEach((items) => {
                if (globalVariables) {
                    items.push(globalVariables);
                }
                if (items.length > 1) {
                    mergeDeep(items[0], ...items.slice(1));
                }
                this.add(items[0]);
                this.themes.add(items[0].name);
            });
        }
        else {
            if (globalVariables) {
                mergeDeep(themeConfig, globalVariables);
            }
            this.add(themeConfig);
            this.themes.add(themeConfig.name);
        }
    }
    /**
     * add new theme
     * @param theme: ThemeVariables
     */
    add(theme) {
        this._themeMap.set(theme.name, theme);
        this._styleMap.set(theme.name, new Map());
    }
    hasTheme(theme) {
        const name = typeof theme === 'string' ? theme : theme.name;
        this._themeMap.has(name);
    }
    get(name) {
        return this._themeMap.get(name);
    }
    getStyleMap(name) {
        return this._styleMap.get(name);
    }
    updateClassName(element, renderer, newClassname, oldClassname) {
        if (oldClassname) {
            renderer.removeClass(element, oldClassname);
        }
        renderer.addClass(element, newClassname);
    }
};
CoreTheme.ngInjectableDef = ɵɵdefineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(ɵɵinject(LY_THEME, 8), ɵɵinject(LY_THEME_GLOBAL_VARIABLES, 8), ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
CoreTheme = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Optional()), __param(0, Inject(LY_THEME)),
    __param(1, Optional()), __param(1, Inject(LY_THEME_GLOBAL_VARIABLES)),
    __param(3, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Object, RendererFactory2, Object])
], CoreTheme);

var YPosition;
(function (YPosition) {
    YPosition["above"] = "above";
    YPosition["below"] = "below";
})(YPosition || (YPosition = {}));
var XPosition;
(function (XPosition) {
    XPosition["before"] = "before";
    XPosition["after"] = "after";
    XPosition["left"] = "left";
    XPosition["right"] = "right";
})(XPosition || (XPosition = {}));
const INITIAL_V = 'initial';
class Positioning {
    constructor(placement, xPosition, yPosition, origin, overlayElement, _themeVariables, _offset = 0, _flip = true) {
        this.placement = placement;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.origin = origin;
        this.overlayElement = overlayElement;
        this._themeVariables = _themeVariables;
        this._offset = _offset;
        this._offsetCheck = 16;
        this._originRect = this.origin.getBoundingClientRect();
        this._overlayElementRect = this.overlayElement.getBoundingClientRect();
        this.width = INITIAL_V;
        this.height = INITIAL_V;
        const offsetCheckx2 = this._offsetCheck * 2;
        this.createPosition();
        if (_flip) {
            for (let index = 0; index < 2; index++) {
                if (this.checkAll(false, true)) {
                    this.createPosition();
                }
            }
        }
        // when there is not enough space
        if (this.checkAll(true, false)) {
            const _max_width = this._overlayElementRect.width + offsetCheckx2 > window.innerWidth;
            const _max_height = this._overlayElementRect.height + offsetCheckx2 > window.innerHeight;
            if (_max_height) {
                this.y = this._offsetCheck;
                this.height = `${window.innerHeight - offsetCheckx2}px`;
            }
            else if (this.checkBottom(false, false)) {
                this.y += this.checkBottom(true, false);
            }
            else if (this.checkTop(false, false)) {
                this.y -= this.checkTop(true, false);
            }
            if (_max_width) {
                this.x = this._offsetCheck;
                this.width = `${window.innerWidth - offsetCheckx2}px`;
            }
            else if (this.checkRight(false, false)) {
                this.x += this.checkRight(true, false);
            }
            else if (this.checkLeft(false, false)) {
                this.x -= this.checkLeft(true, false);
            }
            this.updateOrigin();
        }
        if (this._offset) {
            this.updateOrigin();
        }
        // round result
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.ax = Math.round(this.ax);
        this.ay = Math.round(this.ay);
    }
    get offsetX() {
        return typeof this._offset === 'number'
            ? this._offset
            : this._offset.x || 0;
    }
    get offsetY() {
        return typeof this._offset === 'number'
            ? this._offset
            : this._offset.y || 0;
    }
    createPosition() {
        if (this.xPosition && this.yPosition) {
            throw new Error(`You can not use \`xPosition\` and \`yPosition\` together, use only one of them.`);
        }
        if ((this.xPosition || this.yPosition) && !this.placement) {
            throw new Error(`\`placement\` is required.`);
        }
        let x = this._originRect.x, y = this._originRect.y, ox = 'center', oy = 'center';
        if (this.placement) {
            if (this.placement === YPosition.above) {
                x += (this._originRect.width - this._overlayElementRect.width) / 2;
                y += -this._overlayElementRect.height;
                oy = 'bottom';
                // set offset
                y -= this.offsetY;
            }
            else if (this.placement === YPosition.below) {
                x += (this._originRect.width - this._overlayElementRect.width) / 2;
                y += this._originRect.height;
                oy = 'top';
                // set offset
                y += this.offsetY;
            }
            else {
                const dir = this._themeVariables.getDirection(this.placement);
                if (dir === DirPosition.left) {
                    ox = '100%';
                    x += -this._overlayElementRect.width;
                    y += (this._originRect.height - this._overlayElementRect.height) / 2;
                    // set offset
                    x -= this.offsetX;
                }
                else if (dir === DirPosition.right) {
                    ox = '0%';
                    x += this._originRect.width;
                    y += (this._originRect.height - this._overlayElementRect.height) / 2;
                    // set offset
                    x += this.offsetX;
                }
            }
            if (this.xPosition) {
                const dir = this._themeVariables.getDirection(this.xPosition);
                if (dir === DirPosition.right) {
                    ox = '0%';
                    x = this._originRect.x;
                    // set offset
                    x += this.offsetX;
                }
                else if (dir === DirPosition.left) {
                    ox = '100%';
                    x = this._originRect.x + this._originRect.width - this._overlayElementRect.width;
                    // set offset
                    x -= this.offsetX;
                }
            }
            else if (this.yPosition) {
                if (this.yPosition === YPosition.above) {
                    y = this._originRect.y;
                    oy = '0%';
                    // set offset
                    y -= this.offsetY;
                }
                else if (this.yPosition === YPosition.below) {
                    y = this._originRect.y + this._originRect.height - this._overlayElementRect.height;
                    oy = '100%';
                    // set offset
                    y += this.offsetY;
                }
            }
        }
        this.x = x;
        this.y = y;
        this.ax = x;
        this.ay = y;
        this.ox = ox;
        this.oy = oy;
        return {
            x: Math.round(x),
            y: Math.round(y),
            ox,
            oy
        };
    }
    checkLeft(returnVal, invertIfNeed) {
        const rest = this.ax - this._offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.xPosition) {
                    this.xPosition = invertPlacement(this.xPosition);
                }
            }
            return true;
        }
        return false;
    }
    checkRight(returnVal, invertIfNeed) {
        const rest = window.innerWidth - (this.ax + this._overlayElementRect.width + this._offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement !== YPosition.above && this.placement !== YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.xPosition) {
                    this.xPosition = invertPlacement(this.xPosition);
                }
            }
            return true;
        }
        return false;
    }
    checkTop(returnVal, invertIfNeed) {
        const rest = this.ay - this._offsetCheck;
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement === YPosition.above || this.placement === YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.yPosition) {
                    this.yPosition = invertPlacement(this.yPosition);
                }
            }
            return true;
        }
        return false;
    }
    checkBottom(returnVal, invertIfNeed) {
        const rest = window.innerHeight - (this.ay + this._overlayElementRect.height + this._offsetCheck);
        if (returnVal) {
            return rest;
        }
        if (rest < 0) {
            if (invertIfNeed) {
                if (this.placement === YPosition.above || this.placement === YPosition.below) {
                    this.placement = invertPlacement(this.placement);
                }
                if (this.yPosition) {
                    this.yPosition = invertPlacement(this.yPosition);
                }
            }
            return true;
        }
        return false;
    }
    checkAll(returnVal, invertIfNeed) {
        return this.checkLeft(returnVal, invertIfNeed) ||
            this.checkRight(returnVal, invertIfNeed) ||
            this.checkTop(returnVal, invertIfNeed) ||
            this.checkBottom(returnVal, invertIfNeed);
    }
    updateOrigin() {
        // do not update if it is defined
        if (this._origin) {
            return;
        }
        this._origin = true;
        const oax = this._originRect.x + this._originRect.width / 2;
        const oay = this._originRect.y + this._originRect.height / 2;
        const vax = this.x + this._overlayElementRect.width / 2;
        const vay = this.y + this._overlayElementRect.height / 2;
        this.ox = `${oax - vax + this._overlayElementRect.width / 2}px`;
        this.oy = `${oay - vay + this._overlayElementRect.height / 2}px`;
    }
}
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
    return placement;
}

const REF_REG_EXP = /\{([\w-]+)\}/g;
let nextClassId = 0;
let nextKeyFrameId = 0;
let StylesInDocument = class StylesInDocument {
    constructor() {
        this.styles = {};
        this.styleContainers = new Map();
        this.styleElementGlobalMap = new Map();
    }
};
StylesInDocument.ngInjectableDef = ɵɵdefineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
StylesInDocument = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StylesInDocument);
const THEME_MAP = new Map();
let LyTheme2 = class LyTheme2 {
    constructor(stylesInDocument, core, themeName, _document, _ngZone) {
        this.stylesInDocument = stylesInDocument;
        this.core = core;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementsMap = new Map();
        /** Event emitted when the direction has changed. */
        this._directionChanged = new Subject();
        this.themeMap = THEME_MAP;
        /** ssr or hmr */
        this.isDevOrServer = isDevMode() || !Platform.isBrowser;
        if (themeName) {
            this.setUpTheme(themeName);
        }
    }
    get directionChanged() {
        return this._directionChanged.asObservable();
    }
    /** Get Theme Variables */
    get variables() {
        return this.config;
    }
    setUpTheme(themeName) {
        if (!this.config) {
            const theme = this.core.get(themeName);
            if (theme === undefined) {
                throw new Error(`Theme ${themeName} not found in CoreTheme`);
            }
            this.config = theme;
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
        }
    }
    /**
     * Add a new dynamic style, use only within @Input()
     * @param id Unique id
     * @param style Styles
     * @param el Element
     * @param instance The instance of this, this replaces the existing style with a new one when it changes
     * @param parentStyle
     */
    addStyle(id, style, el, instance, priority, parentStyle) {
        const newClass = this._createStyleContent2(style, id, priority, TypeStyle.OnlyOne, false, parentStyle);
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
     * Create basic style
     * @param style Styles.
     * Note: Use only with inmutable variable.
     * @param priority Priority of style
     * @param parentStyle
     */
    style(style, priority, parentStyle) {
        return this._createStyleContent2(style, null, priority, TypeStyle.OnlyOne, false, parentStyle);
    }
    updateClassName(element, renderer, newClassname, oldClassname) {
        this.core.updateClassName(element, renderer, newClassname, oldClassname);
    }
    updateClass(element, renderer, newClass, oldClass) {
        if (newClass === oldClass) {
            return newClass;
        }
        this.updateClassName(element, renderer, newClass, oldClass);
        return newClass;
    }
    setTheme(nam) {
        if (!Platform.isBrowser) {
            throw new Error(`\`theme.setTheme('theme-name')\` is only available in browser platform`);
        }
        if (nam !== this.config.name) {
            const theme = this.themeMap.get(this.initialTheme);
            if (theme == null) {
                throw new Error(`Theme ${nam} not found in themeMap`);
            }
            theme.change = nam;
            this.config = this.core.get(nam);
            this._updateAllStyles();
        }
    }
    /** Toggle right-to-left/left-to-right */
    toggleDirection() {
        const current = this.config.direction;
        this.config.direction = current === Dir.ltr ? Dir.rtl : Dir.ltr;
        this._updateAllStyles();
        this._directionChanged.next();
    }
    _updateAllStyles() {
        this.elements.forEach((_, key) => {
            const styleData = _STYLE_MAP.get(key);
            if (styleData.requireUpdate) {
                this._createStyleContent2(styleData.styles, styleData.id, styleData.priority, styleData.type, true, styleData.parentStyle);
            }
        });
    }
    /**
     * Create a simple style
     * return className
     * @param id id of style
     * @param css style object or string
     * @param priority style priority(default: 0)
     */
    addSimpleStyle(id, css, priority, parentStyle) {
        return this._createStyleContent2(css, id, priority, TypeStyle.OnlyOne, false, parentStyle);
    }
    /**
     * Add new add a new style sheet
     * @param styles styles
     * @param priority priority for style
     */
    addStyleSheet(styles, priority) {
        return this._createStyleContent2(styles, null, priority, TypeStyle.Multiple);
    }
    /**
     * Check if a style exist
     * @param stylesOrId Style or Id of a style
     */
    existStyle(stylesOrId) {
        if (_STYLE_MAP.has(stylesOrId)) {
            const styleMap = _STYLE_MAP.get(stylesOrId);
            return !!(styleMap.classes || styleMap[this.initialTheme]);
        }
        return false;
    }
    _createStyleContent2(styles, id, priority, type, forChangeTheme, parentStyle) {
        const newId = id || styles;
        let isNewStyle = null;
        if (!_STYLE_MAP.has(newId)) {
            isNewStyle = true;
            _STYLE_MAP.set(newId, {
                priority,
                styles: styles,
                type,
                css: {},
                id,
                parentStyle
            });
        }
        const styleMap = _STYLE_MAP.get(newId);
        const themeName = this.initialTheme;
        const isCreated = isNewStyle || !(styleMap.classes || styleMap[themeName]);
        if (isCreated || forChangeTheme) {
            /** create new style for new theme */
            let css;
            const themeMap = this.themeMap.get(this.initialTheme);
            const config = this.core.get(themeMap.change || themeName);
            if (typeof styles === 'function') {
                styleMap.requireUpdate = true;
                css = groupStyleToString(styleMap, styles(config, this), themeName, id, type, config);
                if (!forChangeTheme) {
                    styleMap.css[themeName] = css;
                }
            }
            else {
                /** create a new id for style that does not <-<require>-> changes */
                css = groupStyleToString(styleMap, styles, themeName, newId, type, config);
                styleMap.css = css;
            }
            if (!this.elements.has(newId)) {
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
                const _css = styleMap.css[themeName] || styleMap.css;
                const map = this.stylesInDocument.styleElementGlobalMap;
                if (styleMap.requireUpdate) {
                    this.elements.set(newId, this._createElementStyle(_css));
                    this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), this.elements.get(newId));
                }
                else if (!map.has(newId)) {
                    map.set(newId, this._createElementStyle(_css));
                    this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), map.get(newId));
                }
            }
        }
        return styleMap.classes || styleMap[themeName];
    }
    _createStyleContainer(priority) {
        priority = priority || 0;
        const { styleContainers } = this.stylesInDocument;
        if (!styleContainers.has(priority)) {
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
        const refChild = this.findNode(priority);
        this.core.renderer.insertBefore(this._document.body, styleContainers.get(priority), refChild);
        return styleContainers.get(priority);
    }
    findNode(index) {
        const { styleContainers } = this.stylesInDocument;
        const keys = (Array.from(styleContainers.keys())).sort();
        const key = keys.find(_ => index < _);
        return (key !== undefined && styleContainers.get(key)) || this.core.firstElement;
    }
    _createElementStyle(css) {
        const styleElement = this.core.renderer.createElement('style');
        const styleText = this.core.renderer.createText(css);
        this.core.renderer.appendChild(styleElement, styleText);
        return styleElement;
    }
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
    toClassSelector(classes) {
        const newClasses = {};
        for (const key in classes) {
            if (classes.hasOwnProperty(key)) {
                newClasses[key] = `.${classes[key]}`;
            }
        }
        return newClasses;
    }
};
LyTheme2 = __decorate([
    Injectable(),
    __param(2, Inject(LY_THEME_NAME)),
    __param(3, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [StylesInDocument,
        CoreTheme, Object, Object, NgZone])
], LyTheme2);
function groupStyleToString(styleMap, styles, themeName, id, typeStyle, themeVariables) {
    // for styles type string
    if (typeStyle === TypeStyle.OnlyOne) {
        // use current class or set new
        const className = styleMap.requireUpdate
            ? styleMap[themeName] || (styleMap[themeName] = createNextClassId())
            : styleMap.classes
                ? styleMap.classes
                : styleMap.classes = createNextClassId();
        let rules;
        if (typeof styles === 'string') {
            rules = `.${className}{${styles}}`;
        }
        else {
            rules = styleToString(id, null, styles, themeVariables, className);
        }
        if (styleMap.parentStyle) {
            const styleMapOfParentStyle = _STYLE_MAP.get(styleMap.parentStyle);
            if (!styleMapOfParentStyle) {
                throw new Error(`The parentStyle not exist or is called before being created.`);
            }
            return replaceRefs(rules, styleMapOfParentStyle[themeName]);
        }
        return rules;
    }
    // for multiples styles
    const classesMap = styleMap[themeName] || (styleMap[themeName] = {});
    let content = '';
    const name = styles.$name ? `${styles.$name}-` : '';
    // set priority
    if (styles.$priority != null) {
        styleMap.priority = styles.$priority;
    }
    for (const key in styles) {
        if (styles.hasOwnProperty(key)) {
            const value = styles[key];
            if (key === '$keyframes') {
                content += keyframesToString(name, classesMap, value, themeVariables);
            }
            else if (typeof value === 'object' || value === null) {
                // set new id if not exist
                const currentClassName = key in classesMap
                    ? classesMap[key]
                    : classesMap[key] = isDevMode() ? toClassNameValid(`y-${name}${key}-${createNextClassId()}`) : createNextClassId();
                const style = styleToString(key, styles.$name, value, themeVariables, currentClassName);
                content += style;
            }
        }
    }
    return replaceRefs(content, classesMap);
}
function replaceRefs(str, data) {
    return str.replace(REF_REG_EXP, (_match, token) => {
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
 */
function styleToString(key, $name, ob, themeVariables, currentKey, parentKey) {
    let content = '';
    let subContent = '';
    let keyAndValue = '';
    let newKey;
    if (parentKey) {
        if (currentKey.indexOf('&') !== -1) {
            newKey = currentKey.replace(/&/g, parentKey);
        }
        else if (currentKey.indexOf('@media') === 0) {
            newKey = `${currentKey}`;
        }
        else if (currentKey === '@global' || parentKey === '@global') {
            newKey = currentKey;
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
            const element = ob[styleKey];
            // Omit style with value null
            if (element != null) {
                // Check if is Object literal
                if (element.constructor === Object) {
                    subContent += styleToString(key, $name, element, themeVariables, styleKey, newKey);
                }
                else {
                    keyAndValue += convertToStyleValue(styleKey, element, themeVariables);
                }
            }
        }
    }
    if (keyAndValue) {
        if (isDevMode()) {
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
function convertToStyleValue(key, value, themeVariables) {
    const newStyleKey = converterToCssKeyAndStyleCache(key, themeVariables);
    if (value.constructor === Array) {
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
function keyframesToString(styleName, keysMap, keyframes, themeVariables) {
    let content = '';
    for (const name in keyframes) {
        if (keyframes.hasOwnProperty(name)) {
            const keyframe = keyframes[name];
            // Sometimes the name of a class can be the same as the name of a keyframe,
            // so we add a character to be different
            const newUniqueName = `@г.->-${name}`;
            // set new id if not exist
            const newName = newUniqueName in keysMap
                ? keysMap[newUniqueName]
                : keysMap[newUniqueName] = isDevMode() ? toClassNameValid(`${styleName}${name}-${createNextKeyframeId()}-v`) : createNextKeyframeId();
            content += `@keyframes ${newName}{`;
            for (const percent in keyframe) {
                if (keyframe.hasOwnProperty(percent)) {
                    content += `${percent}%{`;
                    const styles = keyframe[percent];
                    for (const key in styles) {
                        if (styles.hasOwnProperty(key)) {
                            const val = styles[key];
                            content += convertToStyleValue(key, val, themeVariables);
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
function converterToCssKeyAndStyle(str, themeVariables) {
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
function toClassNameValid(str) {
    const s = str.replace(/^[0-9]|[^\w\-]/g, _ => {
        return `_${_.charCodeAt(0)}`;
    });
    return toHyphenCase(s);
}
function toHyphenCase(str) {
    return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}
function converterToCssKeyAndStyleCache(str, themeVariables) {
    const map = STYLE_KEYS_MAP[themeVariables.direction];
    return str in map
        ? map[str]
        : map[str] = converterToCssKeyAndStyle(str, themeVariables);
}
const ignoreCSSKEY = {
    'break-after': 'break-after',
    'break-before': 'break-before',
    'page-break-after': 'page-break-after',
    'page-break-before': 'page-break-before'
};
const STYLE_KEYS_MAP = {
    rtl: Object.assign({}, ignoreCSSKEY),
    ltr: Object.assign({}, ignoreCSSKEY)
};
const BOTTOM = 'bottom';
const TOP = 'top';
function dirCache(original, val, themeVariables, dirAlias) {
    const map = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map[original] = val.replace(dirAlias, themeVariables.getDirection(dirAlias));
}
function YPositionCache(original, val, themeVariables, pos, to) {
    const map = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map[original] = val.replace(pos, to);
}
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}
function createNextClassId() {
    return `i${(nextClassId++).toString(36)}`;
}
function createNextKeyframeId() {
    return `k${(nextKeyFrameId++).toString(36)}`;
}

let NgTranscludeDirective = class NgTranscludeDirective {
    constructor(_viewRef) {
        this._viewRef = _viewRef;
    }
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
    get getNgTransclude() {
        return this._ngTransclude;
    }
    ngOnDestroy() {
        this._viewRef.remove();
    }
};
__decorate([
    Input(),
    __metadata("design:type", TemplateRef),
    __metadata("design:paramtypes", [TemplateRef])
], NgTranscludeDirective.prototype, "ngTransclude", null);
NgTranscludeDirective = __decorate([
    Directive({
        selector: '[ngTransclude]'
    }),
    __metadata("design:paramtypes", [ViewContainerRef])
], NgTranscludeDirective);
let NgTranscludeModule = class NgTranscludeModule {
};
NgTranscludeModule = __decorate([
    NgModule({
        exports: [NgTranscludeDirective],
        declarations: [NgTranscludeDirective]
    })
], NgTranscludeModule);
/**
 * @ignore
 */
function getNativeElement(element) {
    return element instanceof ElementRef ? element.nativeElement : element;
}

const DEFAULT_VALUE = '';
const STYLE_PRIORITY = -1;
function mixinStyleUpdater(base) {
    return class extends base {
        setAutoContrast() {
            this._autoContrast = true;
        }
        updateStyle(element) {
            const __bg = this._superHyperInternalPropertyBg;
            const __color = this._superHyperInternalPropertyColor;
            const __raised = this._superHyperInternalPropertyRaised;
            const __elevation = this._superHyperInternalPropertyElevation;
            const __disabled = this._superHyperInternalPropertyDisabled;
            const __outlined = this._superHyperInternalPropertyOutlined;
            const __shadowColor = this._superHyperInternalPropertyShadowColor;
            const __isContrast = this._autoContrast && !__color || __color === 'auto';
            const newKey = `common----:${__bg || DEFAULT_VALUE}·${__color || DEFAULT_VALUE}·${__raised}·${__elevation}·${__disabled || DEFAULT_VALUE}·${__outlined || DEFAULT_VALUE}·${__shadowColor || DEFAULT_VALUE}·${__isContrast || DEFAULT_VALUE}`;
            this._classNameAnonymous = this._theme.addStyle(newKey, (theme) => {
                const style = {};
                if (__outlined) {
                    style.border = '1px solid currentColor';
                }
                if (__disabled) {
                    style.color = theme.disabled.contrast;
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
                    if (__raised || (__elevation != null)) {
                        if (!__bg) {
                            style.background = theme.background.primary.default;
                        }
                        const backgroundColorCss = style.background !== __bg && theme.colorOf(__bg || 'background:primary', 'shadow');
                        const shadowColor = (__shadowColor && theme.colorOf(__shadowColor)) || backgroundColorCss || style.background || style.color || theme.shadow;
                        if (__elevation != null) {
                            style.boxShadow = shadowBuilder(__elevation, shadowColor);
                        }
                        else {
                            style.boxShadow = shadowBuilder(3, shadowColor);
                            style['&:active'] = {
                                boxShadow: shadowBuilder(8, shadowColor)
                            };
                        }
                    }
                }
                return style;
            }, getNativeElement(element), this._classNameAnonymous, STYLE_PRIORITY);
        }
        constructor(...args) { super(...args); }
    };
}

function toBoolean(value) {
    return value != null && `${value}` !== 'false';
}

class RippleRef {
    constructor() {
        this.state = true;
        this.timestamp = -Date.now();
        this.container = document.createElement('span');
    }
    end() {
        this.state = false;
        this.timestamp += Date.now();
    }
}
class Ripple {
    constructor(_themeVariables, _ngZone, classes, _containerElement, _triggerElement) {
        this._themeVariables = _themeVariables;
        this._ngZone = _ngZone;
        this.classes = classes;
        this._containerElement = _containerElement;
        this._triggerElement = _triggerElement;
        this._eventHandlers = new Map();
        this.config = {};
        this._transitionDuration = this._themeVariables.ripple.duration;
        this._eventOptions = { passive: true };
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
    setConfig(config) {
        this.config = config;
    }
    get _rectContainer() {
        return this._containerElement.getBoundingClientRect();
    }
    setTriggerElement(element) {
        if (element) {
            this._ngZone.runOutsideAngular(() => {
                this._eventHandlers.forEach((fn, type) => element.addEventListener(type, fn, this._eventOptions));
            });
        }
        this._triggerElement = element;
    }
    createRipple(styles) {
        this._rippleRef = new RippleRef();
        const container = this._rippleRef.container;
        container.className = this.classes.rippleContainer;
        for (const key in styles) {
            if (styles.hasOwnProperty(key)) {
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
    onPointerDown(event) {
        if (!this.config.disabled) {
            /**Destroy previous ripple if exist */
            this.endRipple();
            this.startRipple(event, this.config);
        }
    }
    onPointerLeave(_event) {
        if (!this.config.disabled) {
            this.endRipple();
        }
    }
    startRipple(event, rippleConfig) {
        const containerRect = this._rectContainer;
        let x = event.clientX, y = event.clientY;
        if (rippleConfig.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        const left = x - containerRect.left;
        const top = y - containerRect.top;
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
    runTimeoutOutsideZone(fn, delay = 0) {
        this._ngZone.runOutsideAngular(() => setTimeout(fn, delay));
    }
    endRipple() {
        const rippleRef = this._rippleRef;
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
            this._rippleRef = undefined;
        }
    }
    removeEvents() {
        if (this._triggerElement) {
            this._eventHandlers.forEach((fn, type) => {
                this._triggerElement.removeEventListener(type, fn, this._eventOptions);
            });
        }
    }
}
function rippleRadius(x, y, rect) {
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}
function maxSize(rect) {
    return Math.max(rect.width, rect.height);
}

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
let LyCoreStyles = class LyCoreStyles {
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(LY_COMMON_STYLES);
    }
};
LyCoreStyles.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(ɵɵinject(LyTheme2)); }, token: LyCoreStyles, providedIn: "root" });
LyCoreStyles = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [LyTheme2])
], LyCoreStyles);

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
let LyRippleService = class LyRippleService {
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles);
    }
};
LyRippleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(ɵɵinject(LyTheme2)); }, token: LyRippleService, providedIn: "root" });
LyRippleService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [LyTheme2])
], LyRippleService);

function mixinDisableRipple(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._rippleConfig = {};
        }
        get disableRipple() { return this._disableRipple; }
        set disableRipple(val) {
            if (Platform.isBrowser && val !== this._disableRipple) {
                const newVal = this._disableRipple = toBoolean(val);
                // remove previous ripple if exist
                this._removeRippleEvents();
                if (!newVal) {
                    // add ripple
                    Promise.resolve(null).then(() => {
                        const triggerElement = this._triggerElement.nativeElement;
                        const rippleContainer = (this._rippleContainer && this._rippleContainer.nativeElement) || triggerElement;
                        this._ripple = new Ripple(this._theme.variables, this._ngZone, this._theme.addStyleSheet(styles), rippleContainer, triggerElement);
                        this._ripple.setConfig(this._rippleConfig);
                    });
                }
            }
        }
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

function mixinDisabled(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._superHyperInternalPropertyDisabled = false;
        }
        get disabled() { return this._superHyperInternalPropertyDisabled; }
        set disabled(value) { this._superHyperInternalPropertyDisabled = toBoolean(value); }
    };
}

function mixinColor(base) {
    return class extends base {
        get color() { return this._superHyperInternalPropertyColor; }
        set color(val) {
            const defaultColor = val;
            if (defaultColor !== this.color) {
                this._superHyperInternalPropertyColor = defaultColor;
            }
        }
        constructor(...args) {
            super(...args);
        }
    };
}

function mixinBg(base) {
    return class extends base {
        get bg() { return this._superHyperInternalPropertyBg; }
        set bg(val) {
            const defaultColor = val;
            if (defaultColor !== this.bg) {
                this._superHyperInternalPropertyBg = defaultColor;
            }
        }
        constructor(...args) {
            super(...args);
        }
    };
}

function mixinRaised(base) {
    return class extends base {
        get raised() { return this._superHyperInternalPropertyRaised; }
        set raised(value) { this._superHyperInternalPropertyRaised = toBoolean(value); }
        constructor(...args) { super(...args); }
    };
}

function mixinOutlined(base) {
    return class extends base {
        get outlined() { return this._superHyperInternalPropertyOutlined; }
        set outlined(value) { this._superHyperInternalPropertyOutlined = toBoolean(value); }
        constructor(...args) { super(...args); }
    };
}

function mixinElevation(base) {
    return class extends base {
        get elevation() { return this._superHyperInternalPropertyElevation; }
        set elevation(value) { this._superHyperInternalPropertyElevation = value; }
        constructor(...args) { super(...args); }
    };
}

function mixinShadowColor(base) {
    return class extends base {
        get shadowColor() { return this._superHyperInternalPropertyShadowColor; }
        set shadowColor(value) { this._superHyperInternalPropertyShadowColor = value; }
        constructor(...args) { super(...args); }
    };
}

const DEFAULT_TAB_INDEX = 0;
function mixinTabIndex(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._tabIndex = DEFAULT_TAB_INDEX;
        }
        get tabIndex() {
            return this.disabled ? -1 : this._tabIndex;
        }
        set tabIndex(value) {
            this._tabIndex = value != null ? value : DEFAULT_TAB_INDEX;
        }
    };
}

const DEFAULT_BG = 'paper';
class LyPaperBase {
    constructor(_theme, _ngZone) {
        this._theme = _theme;
        this._ngZone = _ngZone;
    }
}
const LyPaperMixinBase = mixinStyleUpdater(mixinBg(mixinColor(mixinRaised(mixinOutlined(mixinElevation(mixinShadowColor(mixinDisableRipple(LyPaperBase))))))));
let LyPaper = class LyPaper extends LyPaperMixinBase {
    constructor(theme, ngZone, _el, _renderer) {
        super(theme, ngZone);
        this._el = _el;
        this._renderer = _renderer;
        this.setAutoContrast();
        this._triggerElement = this._el;
        this._rippleContainer = this._el;
    }
    set hasText(val) {
        this._hasText = toBoolean(val);
    }
    get hasText() {
        return this._hasText;
    }
    ngOnChanges() {
        this.updateStyle(this._el);
    }
    ngOnInit() {
        if (!this.bg && !this.hasText) {
            this.bg = DEFAULT_BG;
            this.updateStyle(this._el);
            this._renderer.addClass(this._el.nativeElement, this._theme.addSimpleStyle('lyPaper', ({
                display: 'block'
            })));
        }
    }
    ngOnDestroy() {
        this._removeRippleEvents();
    }
};
__decorate([
    Input('ly-text'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LyPaper.prototype, "hasText", null);
LyPaper = __decorate([
    Directive({
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
    }),
    __metadata("design:paramtypes", [LyTheme2,
        NgZone,
        ElementRef,
        Renderer2])
], LyPaper);

let LyWithClass = class LyWithClass {
    constructor(el) {
        this.el = el;
    }
    set withClass(val) {
        if (!val) {
            throw new Error(`'${val}' is not valid className`);
        }
        this.el.nativeElement.classList.add(val);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyWithClass.prototype, "withClass", null);
LyWithClass = __decorate([
    Directive({
        selector: '[withClass]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], LyWithClass);

let LyCommonModule = class LyCommonModule {
};
LyCommonModule = __decorate([
    NgModule({
        declarations: [LyWithClass, LyPaper],
        exports: [LyWithClass, LyPaper]
    })
], LyCommonModule);

function defaultEntry(value, defaultValue) {
    return value !== '' && value !== void 0 ? value : defaultValue;
}

// Element to move, time in ms to animate
function scrollTo(element, duration) {
    let e = document.documentElement;
    if (e.scrollTop === 0) {
        const t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}
// Element to move, element or px from, element or px to, time in ms to animate
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
function scrollWithAnimation(element, to, duration, p, motion) {
    const _motion = motion || easeOutCuaic;
    const { scrollLeft } = element;
    return createScrollWithAnimation(element, scrollLeft, to, 0, 1 / duration, 20, _motion, p);
}
function createScrollWithAnimation(element, xFrom, xTo, t01, speed, step, motion, p) {
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
function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
}
// function easeInOutCuaic(t: number) {
//   t /= 0.5;
//   if (t < 1) {return t * t * t / 2; }
//   t -= 2;
//   return (t * t * t + 2) / 2;
// }
// function easeInQuart(t: number) {
//   return t * t * t * t;
// }
// function easeOutQuart(t: number) {
//   t--;
//   return -(t * t * t * t - 1);
// }
// function easeInOutQuart(t: number) {
//   t /= 0.5;
//   if (t < 1) {return 0.5 * t * t * t * t; }
//   t -= 2;
//   return -(t * t * t * t - 2) / 2;
// }
// function easeInQuint(t: number) {
//   return t * t * t * t * t;
// }
// function easeOutQuint(t: number) {
//   t--;
//   return t * t * t * t * t + 1;
// }
// function easeInOutQuint(t: number) {
//   t /= 0.5;
//   if (t < 1) {return t * t * t * t * t / 2; }
//   t -= 2;
//   return (t * t * t * t * t + 2) / 2;
// }
// function easeInSine(t: number) {
//   return -Math.cos(t / (Math.PI / 2)) + 1;
// }
// function easeOutSine(t: number) {
//   return Math.sin(t / (Math.PI / 2));
// }
// function easeInOutSine(t: number) {
//   return -(Math.cos(Math.PI * t) - 1) / 2;
// }
// function easeInExpo(t: number) {
//   return Math.pow(2, 10 * (t - 1));
// }
// function easeOutExpo(t: number) {
//   return -Math.pow(2, -10 * t) + 1;
// }
// function easeInOutExpo(t: number) {
//   t /= 0.5;
//   if (t < 1) {return Math.pow(2, 10 * (t - 1)) / 2; }
//   t--;
//   return (-Math.pow(2, -10 * t) + 2) / 2;
// }
// function easeInCirc(t: number) {
//   return -Math.sqrt(1 - t * t) - 1;
// }
// function easeOutCirc(t: number) {
//   t--;
//   return Math.sqrt(1 - t * t);
// }
// function easeInOutCirc(t: number) {
//   t /= 0.5;
//   if (t < 1) {return -(Math.sqrt(1 - t * t) - 1) / 2; }
//   t -= 2;
//   return (Math.sqrt(1 - t * t) + 1) / 2;
// }

function toNumber(val, _default) {
    const num = typeof val === 'number'
        ? val
        : typeof val === 'string' && val.length
            ? +val
            : _default;
    return isNaN(num) ? (_default === void 0 ? 0 : _default) : num;
}

function componentDestroyed(component) {
    const modifiedComponent = component;
    if (modifiedComponent.__componentDestroyed$) {
        return modifiedComponent.__componentDestroyed$;
    }
    const oldNgOnDestroy = component.ngOnDestroy;
    const stop$ = new ReplaySubject();
    modifiedComponent.ngOnDestroy = function () {
        if (oldNgOnDestroy) {
            oldNgOnDestroy.apply(component);
        }
        stop$.next();
        stop$.complete();
    };
    return modifiedComponent.__componentDestroyed$ = stop$.asObservable();
}
function untilComponentDestroyed(component) {
    return (source) => source.pipe(takeUntil(componentDestroyed(component)));
}

let LyHostClass = class LyHostClass {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this._set = new Set();
    }
    add(className) {
        if (!this._set.has(className)) {
            this._set.add(className);
            this._renderer.addClass(this._el.nativeElement, className);
        }
    }
    remove(className) {
        if (this._set.has(className)) {
            this._set.delete(className);
            this._renderer.removeClass(this._el.nativeElement, className);
        }
    }
    toggle(className, enabled) {
        if (enabled) {
            this.add(className);
        }
        else {
            this.remove(className);
        }
    }
};
LyHostClass = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2])
], LyHostClass);

var FocusStatus;
(function (FocusStatus) {
    /**mouse and/or touch*/
    FocusStatus["DEFAULT"] = "default";
    /** keyboard and/or program*/
    FocusStatus["KEYBOARD"] = "keyboard";
})(FocusStatus || (FocusStatus = {}));
let LyFocusState = class LyFocusState {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this._elementMap = new Map();
        this._count = 0;
    }
    listen(element, keyElement) {
        if (!Platform.isBrowser) {
            // return null if it is not browser platform
            return null;
        }
        const nativeElement = getNativeElement(element);
        const key = keyElement && getNativeElement(keyElement) || nativeElement;
        if (this._elementMap.has(key)) {
            return this._elementMap.get(key).subject.asObservable();
        }
        const focusState = {
            unlisten: null,
            subject: new Subject()
        };
        this._incrementCount();
        const focusListener = (event) => this._on(event, focusState.subject);
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
    focusElement(element, origin, options) {
        const nativeElement = getNativeElement(element);
        this._currentEvent = origin;
        if (typeof nativeElement.focus === 'function') {
            nativeElement.focus(options);
        }
    }
    unlisten(element) {
        if (!Platform.isBrowser) {
            return;
        }
        const el = getNativeElement(element);
        const focusStateInfo = this._elementMap.get(el);
        if (focusStateInfo) {
            focusStateInfo.unlisten();
            this._elementMap.delete(el);
            this._decrementCount();
        }
    }
    _on(event, subject) {
        let by = null;
        if (event.type === 'focus') {
            by = this._currentEvent || 'keyboard';
        }
        this._ngZone.run(() => subject.next(by));
    }
    _addGlobalListeners() {
        if (!Platform.isBrowser) {
            return;
        }
        const eventListenerOptions = supportsPassiveEventListeners
            ? {
                passive: true,
                capture: true
            } : false;
        const documentKeydownListener = () => this._ngZone.runOutsideAngular(() => this._currentEvent = 'keyboard');
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
    _incrementCount() {
        if (++this._count === 1) {
            this._addGlobalListeners();
        }
    }
    _decrementCount() {
        if (!--this._count) {
            this._removeGlobalListeners();
        }
    }
    ngOnDestroy() {
        this._elementMap.forEach((_, element) => this.unlisten(element));
    }
};
LyFocusState.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyFocusState_Factory() { return new LyFocusState(ɵɵinject(NgZone)); }, token: LyFocusState, providedIn: "root" });
LyFocusState = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [NgZone])
], LyFocusState);

const AUI_VERSION = '2.9.3';
const AUI_LAST_UPDATE = '2019-08-01T04:23:33.591Z';

const LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
const HAMMER_GESTURES_EVENTS = [
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft',
    'slidecancel'
];
const ɵ0 = () => { }, ɵ1 = () => { };
/**
 * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
 * been loaded on the page.
 */
const noopHammerInstance = {
    on: ɵ0,
    off: ɵ1,
};
let LyHammerGestureConfig = class LyHammerGestureConfig extends HammerGestureConfig {
    constructor(_hammerOptions) {
        super();
        this._hammerOptions = _hammerOptions;
        this.events = HAMMER_GESTURES_EVENTS;
    }
    buildHammer(element) {
        const hammer = typeof window !== 'undefined' ? window.Hammer : null;
        if (!hammer) {
            return noopHammerInstance;
        }
        const mc = new hammer(element, this._hammerOptions || {});
        const pan = new hammer.Pan();
        const swipe = new hammer.Swipe();
        const slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, pan, slide]);
        return mc;
    }
    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
    _createRecognizer(base, options, ...inheritances) {
        const recognizer = new (base.constructor)(options);
        inheritances.push(base);
        inheritances.forEach(item => recognizer.recognizeWith(item));
        return recognizer;
    }
};
LyHammerGestureConfig = __decorate([
    Injectable(),
    __param(0, Optional()), __param(0, Inject(LY_HAMMER_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], LyHammerGestureConfig);

var LyThemeModule_1;
let LyThemeModule = LyThemeModule_1 = class LyThemeModule {
    static setTheme(themeName) {
        return {
            ngModule: LyThemeModule_1,
            providers: [
                [LyTheme2],
                { provide: LY_THEME_NAME, useValue: themeName }
            ]
        };
    }
};
LyThemeModule = LyThemeModule_1 = __decorate([
    NgModule()
], LyThemeModule);

class Undefined {
    constructor() { }
}
const UndefinedValue = new Undefined();

// @Injectable()
class LyOverlayRef {
}

const styles$1 = (theme) => ({
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: theme.zIndex.overlay,
        pointerEvents: 'none'
    }
});
let LyOverlayContainer = class LyOverlayContainer {
    constructor(theme) {
        this.theme = theme;
        this._classes = this.theme.addStyleSheet(styles$1);
        this._items = new Set();
        if (Platform.isBrowser) {
            const container = document.createElement('ly-overlay-container');
            document.body.appendChild(container);
            this._containerElement = container;
        }
    }
    get overlayLen() {
        return this._items.size;
    }
    get containerElement() {
        return this._containerElement;
    }
    /**
     * Add instance
     * @ignore
     */
    _add(item) {
        this._items.add(item);
        this.containerElement.appendChild(item);
        this._update();
    }
    /**
   * Remove instance
   * @ignore
   */
    _remove(item) {
        this.containerElement.removeChild(item);
        this._items.delete(item);
        this._update();
    }
    /**
     * Update styles for overlay container
     * @ignore
     */
    _update() {
        if (this._items.size) {
            if (!this._isActiveOverlayContainer) {
                this._isActiveOverlayContainer = true;
                this._containerElement.classList.add(this._classes.overlay);
            }
        }
        else if (this._isActiveOverlayContainer) {
            this._containerElement.classList.remove(this._classes.overlay);
            this._isActiveOverlayContainer = false;
        }
    }
};
LyOverlayContainer.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyOverlayContainer_Factory() { return new LyOverlayContainer(ɵɵinject(LyTheme2)); }, token: LyOverlayContainer, providedIn: "root" });
LyOverlayContainer = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [LyTheme2])
], LyOverlayContainer);

let WinResize = class WinResize {
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
};
WinResize.ngInjectableDef = ɵɵdefineInjectable({ factory: function WinResize_Factory() { return new WinResize(ɵɵinject(DOCUMENT), ɵɵinject(NgZone)); }, token: WinResize, providedIn: "root" });
WinResize = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, NgZone])
], WinResize);

let WinScroll = class WinScroll {
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
};
WinScroll.ngInjectableDef = ɵɵdefineInjectable({ factory: function WinScroll_Factory() { return new WinScroll(ɵɵinject(DOCUMENT), ɵɵinject(NgZone)); }, token: WinScroll, providedIn: "root" });
WinScroll = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, NgZone])
], WinScroll);

class LyOverlayConfig {
    constructor() {
        this.hasBackdrop = true;
        /**
         * Whether the user can click on the backdrop to close the overlay.
         */
        this.disableClose = false;
    }
}

const STYLE_PRIORITY$1 = -2;
const STYLES_BACKDROP_ROOT = (Object.assign({}, LY_COMMON_STYLES.fill, { width: '100vw', height: '100vh', pointerEvents: 'all', userSelect: 'none' }));
let LyOverlayBackdrop = class LyOverlayBackdrop {
    constructor(_el, _theme, _config) {
        this._el = _el;
        this._config = _config;
        _el.nativeElement.classList.add(_theme.style(STYLES_BACKDROP_ROOT, STYLE_PRIORITY$1));
        // this applies custom class for backdrop,
        // if one is not defined, do nothing.
        const backdropClass = _config.backdropClass;
        if (backdropClass) {
            this._el.nativeElement.classList.add(backdropClass);
        }
    }
    onclick() {
        if (!this._config.disableClose) {
            this._config.fnDestroy();
        }
    }
};
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LyOverlayBackdrop.prototype, "onclick", null);
LyOverlayBackdrop = __decorate([
    Component({
        selector: 'ly-overlay-backdrop',
        template: ``
    }),
    __metadata("design:paramtypes", [ElementRef,
        LyTheme2,
        LyOverlayConfig])
], LyOverlayBackdrop);

function createOverlayInjector(parent, config, overlayFactory) {
    return Injector.create({
        providers: [
            {
                provide: LyOverlayConfig,
                useValue: config
            },
            {
                provide: LyOverlayRef,
                useValue: overlayFactory
            }
        ],
        parent
    });
}

class OverlayFactory {
    constructor(_componentFactoryResolver, _appRef, _templateRefOrComponent, _overlayContainer, _context, _injector, windowScroll, resizeService, config) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._overlayContainer = _overlayContainer;
        this._injector = _injector;
        this._windowSRSub = Subscription.EMPTY;
        this._config = config = Object.assign({}, new LyOverlayConfig(), config);
        this._el = document.createElement('div');
        const __styles = {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'all'
        };
        if (config) {
            Object.assign(__styles, config.styles);
        }
        const newInjector = createOverlayInjector(this._injector, Object.assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles }), this);
        this._updateStyles(__styles);
        if (config) {
            if (config.onResizeScroll) {
                this.onResizeScroll = config.onResizeScroll;
            }
            this._windowSRSub = merge(windowScroll.scroll$, resizeService.resize$).subscribe(() => {
                if (this.onResizeScroll) {
                    this.onResizeScroll();
                }
            });
            if (config.classes) {
                const classes = config.classes;
                classes.forEach((className) => this._el.classList.add(className));
            }
        }
        if (config.hasBackdrop) {
            this._compRefOverlayBackdrop = this._generateComponent(LyOverlayBackdrop, newInjector);
            this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
            const backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._add(backdropEl);
        }
        this._appendComponentToBody(_templateRefOrComponent, _context, newInjector);
        this._hiddeScroll();
    }
    get containerElement() {
        return this._el;
    }
    get componentRef() {
        return this._compRef;
    }
    _updateStyles(__styles) {
        /** Apply styles */
        /** set styles */
        for (const key in __styles) {
            if (__styles.hasOwnProperty(key)) {
                const styleVal = __styles[key];
                if (styleVal != null) {
                    this._el.style[key] = typeof __styles[key] === 'number' ? `${styleVal}px` : styleVal;
                }
            }
        }
    }
    _appendComponentToBody(type, context, injector) {
        if (type instanceof TemplateRef) {
            // Create a component reference from the component
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
            this._compRef = this._generateComponent(type, injector);
            this._appRef.attachView(this._compRef.hostView);
            this._el.appendChild(this._compRef.location.nativeElement);
            this._overlayContainer._add(this._el);
        }
    }
    _generateComponent(type, injector) {
        const factory = this._componentFactoryResolver.resolveComponentFactory(type);
        return factory.create(injector);
    }
    /** Detaches a view from dirty checking again of ApplicationRef. */
    detach() {
        if (this._viewRef) {
            this._appRef.detachView(this._viewRef);
        }
        if (this._compRef) {
            this._appRef.detachView(this._compRef.hostView);
        }
    }
    /** Remove element of DOM */
    remove() {
        this._resetScroll();
        if (this._viewRef) {
            this._viewRef.destroy();
            this._overlayContainer._remove(this._el);
            this._el = undefined;
        }
        else if (this._compRef) {
            this._compRef.destroy();
            this._overlayContainer._remove(this._el);
            this._el = undefined;
            this._compRef = null;
        }
        else if (this._el) {
            // remove if template is string
            this._overlayContainer._remove(this._el);
            this._el = undefined;
        }
        if (this._compRefOverlayBackdrop) {
            this._appRef.detachView(this._compRefOverlayBackdrop.hostView);
            this._compRefOverlayBackdrop.destroy();
            const backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._remove(backdropEl);
        }
        this._windowSRSub.unsubscribe();
    }
    /** Detach & remove */
    destroy() {
        this.detach();
        this.remove();
    }
    _hiddeScroll() {
        if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
            const scrollWidth = window.innerWidth - window.document.body.clientWidth;
            if (scrollWidth) {
                const computedStyle = getComputedStyle(window.document.body);
                this._paddingRight = computedStyle.getPropertyValue('padding-right');
                window.document.body.style.paddingRight = `calc(${scrollWidth}px + ${this._paddingRight})`;
            }
            window.document.body.style.overflow = 'hidden';
        }
    }
    _resetScroll() {
        if (Platform.isBrowser && this._config.hasBackdrop && this._overlayContainer.overlayLen) {
            if (this._paddingRight) {
                window.document.body.style.paddingRight = this._paddingRight;
                this._paddingRight = null;
            }
            window.document.body.style.overflow = null;
        }
    }
}

let LyOverlay = class LyOverlay {
    constructor(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _windowScroll, _resizeService) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._windowScroll = _windowScroll;
        this._resizeService = _resizeService;
    }
    create(templateOrComponent, context, config) {
        return new OverlayFactory(this._componentFactoryResolver, this._appRef, templateOrComponent, this._overlayContainer, context, this._injector, this._windowScroll, this._resizeService, config);
    }
};
LyOverlay.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyOverlay_Factory() { return new LyOverlay(ɵɵinject(LyOverlayContainer), ɵɵinject(ComponentFactoryResolver), ɵɵinject(ApplicationRef), ɵɵinject(INJECTOR), ɵɵinject(WinScroll), ɵɵinject(WinResize)); }, token: LyOverlay, providedIn: "root" });
LyOverlay = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [LyOverlayContainer,
        ComponentFactoryResolver,
        ApplicationRef,
        Injector,
        WinScroll,
        WinResize])
], LyOverlay);

let LyOverlayModule = class LyOverlayModule {
};
LyOverlayModule = __decorate([
    NgModule({
        declarations: [LyOverlayBackdrop],
        entryComponents: [LyOverlayBackdrop]
    })
], LyOverlayModule);

const STYLES_BACKDROP_DARK = ({
    backgroundColor: 'rgba(0,0,0,.32)'
});

const MUTATION_OBSERVER_INIT = {
    characterData: true,
    childList: true,
    subtree: true
};
let MutationObserverFactory = class MutationObserverFactory {
    create(callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }
};
MutationObserverFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
MutationObserverFactory = __decorate([
    Injectable({ providedIn: 'root' })
], MutationObserverFactory);
let ElementObserver = class ElementObserver {
    constructor(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        this._observedElements = new Map();
    }
    ngOnDestroy() {
        this._observedElements.forEach((_, element) => this.destroy(element));
    }
    observe(elementOrRef, fn, options) {
        const element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
        if (!this._observedElements.has(element)) {
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
     */
    destroy(elementOrRef) {
        const element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
        if (this._observedElements.has(element)) {
            const observer = this._observedElements.get(element);
            if (observer) {
                this._observedElements.get(element).disconnect();
            }
            this._observedElements.delete(element);
        }
    }
};
ElementObserver.ngInjectableDef = ɵɵdefineInjectable({ factory: function ElementObserver_Factory() { return new ElementObserver(ɵɵinject(MutationObserverFactory)); }, token: ElementObserver, providedIn: "root" });
ElementObserver = __decorate([
    Injectable({ providedIn: 'root' }),
    __metadata("design:paramtypes", [MutationObserverFactory])
], ElementObserver);

var AlignAlias;
(function (AlignAlias) {
    AlignAlias["rowReverse"] = "row-reverse";
    AlignAlias["columnReverse"] = "column-reverse";
    AlignAlias["wrapReverse"] = "wrap-reverse";
    AlignAlias["start"] = "flex-start";
    AlignAlias["end"] = "flex-end";
    AlignAlias["between"] = "space-between";
    AlignAlias["around"] = "space-around";
    AlignAlias["evenly"] = "space-evenly";
})(AlignAlias || (AlignAlias = {}));

function same(o) {
    return o;
}
class LySelectionModel {
    constructor(opts) {
        this._selectionMap = new Map();
        this._getKeyFn = same;
        if (!opts) {
            return;
        }
        const { multiple, getKey } = opts;
        if (getKey) {
            this._getKeyFn = getKey;
        }
        if (multiple === true) {
            this._multiple = true;
            const { selecteds } = opts;
            if (Array.isArray(selecteds) && selecteds.length) {
                this.select(...selecteds);
            }
        }
        else {
            const { selecteds } = opts;
            if (selecteds) {
                this._markSelected(selecteds);
            }
        }
    }
    /** Selected values. */
    get selected() {
        if (!this._selected) {
            this._selected = Array.from(this._selectionMap.values());
        }
        return this._selected;
    }
    /**
     * Toggles a value between selected and deselected.
     */
    toggle(value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    }
    /**
     * Selects one or several values.
     */
    select(...values) {
        values.forEach(value => this._markSelected(value));
        this._clearSelectedValues();
    }
    /**
     * Deselects a value or an array of values.
     */
    deselect(...values) {
        values.forEach(value => this._unmarkSelected(value));
        this._clearSelectedValues();
    }
    /**
     * Determines whether a value is selected.
     */
    isSelected(value) {
        const key = this._getKeyFn(value);
        return this._selectionMap.has(key);
    }
    /**
     * Determines whether the model does not have a value.
     */
    isEmpty() {
        return this._selectionMap.size === 0;
    }
    /**
     * Determines whether the model has a value.
     */
    hasValue() {
        return this._selectionMap.size !== 0;
    }
    /**
     * Gets whether multiple values can be selected.
     */
    isMultipleSelection() {
        return this._multiple;
    }
    /**
     * Clears all of the selected values.
     */
    clear() {
        this._unmarkAll();
        this._clearSelectedValues();
    }
    /** Selects a value. */
    _markSelected(value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            const key = this._getKeyFn(value);
            this._selectionMap.set(key, value);
        }
    }
    /** Deselects a value. */
    _unmarkSelected(value) {
        if (this.isSelected(value)) {
            const key = this._getKeyFn(value);
            this._selectionMap.delete(key);
        }
    }
    /** Clears out the selected values. */
    _unmarkAll() {
        if (!this.isEmpty()) {
            this._selectionMap.clear();
        }
    }
    /** Clear the selected values so they can be re-cached. */
    _clearSelectedValues() {
        this._selected = null;
    }
}

function getLyThemeVariableUndefinedError(variable) {
    return Error(`Variable '${variable}' undefined in Theme.`);
}
function getLyThemeVariableOptionUndefinedError(comp, variable) {
    return Error(`${comp}: variable ${variable} is undefined in Theme.`);
}
function getLyThemeStyleUndefinedError(comp, input, val) {
    return Error(`${comp}: no styles defined in the theme have been found for \`@Input() ${input}\`,`
        + ` the value given is \`${val}\`.`);
}

const STYLES = (theme) => ({
    root: {
        width: '1em',
        height: '1em',
        display: 'inline-block',
        position: 'relative',
        fontSize: '24px'
    },
    line: {
        top: 'calc(0.5em - 1px)',
        position: 'absolute',
        width: `${1 / 3}em`,
        height: '2px',
        backgroundColor: 'currentColor',
        display: 'inline-block',
        transition: `all ${theme.animations.durations.entering}ms ${theme.animations.curves.standard}`,
        '&:first-of-type': {
            left: '0.25em',
            '-webkit-transform': 'rotate(45deg)',
            transform: 'rotate(45deg)'
        },
        '&:last-of-type': {
            right: '0.25em',
            '-webkit-transform': 'rotate(-45deg)',
            transform: 'rotate(-45deg)'
        }
    },
    up: {
        '{line}:first-of-type': {
            '-webkit-transform': 'rotate(-45deg)',
            transform: 'rotate(-45deg)'
        },
        '{line}:last-of-type': {
            '-webkit-transform': 'rotate(45deg)',
            transform: 'rotate(45deg)'
        }
    }
});
let LyExpansionIcon = class LyExpansionIcon {
    constructor(_theme, _renderer, _el) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._el = _el;
        this.classes = this._theme.addStyleSheet(STYLES);
        this._up = false;
        _renderer.addClass(_el.nativeElement, this.classes.root);
    }
    set color(val) {
        this._colorClass = this._theme.addStyle('LyExpansionIcon.color', (theme) => ({
            '{line}': {
                backgroundColor: theme.colorOf(val)
            }
        }), this._el.nativeElement, this._colorClass, null, STYLES);
    }
    get color() {
        return this._color;
    }
    set up(val) {
        const newVal = toBoolean(val);
        if (newVal !== this.up) {
            this._up = newVal;
            if (newVal) {
                this._renderer.addClass(this._el.nativeElement, this.classes.up);
            }
            else {
                this._renderer.removeClass(this._el.nativeElement, this.classes.up);
            }
        }
    }
    get up() {
        return this._up;
    }
    toggle() {
        this.up = !this.up;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], LyExpansionIcon.prototype, "color", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LyExpansionIcon.prototype, "up", null);
LyExpansionIcon = __decorate([
    Component({
        selector: 'ly-expansion-icon',
        template: "<span [className]=\"classes.line\"></span>\n<span [className]=\"classes.line\"></span>",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [LyTheme2,
        Renderer2,
        ElementRef])
], LyExpansionIcon);

let LyExpansionIconModule = class LyExpansionIconModule {
};
LyExpansionIconModule = __decorate([
    NgModule({
        declarations: [LyExpansionIcon],
        exports: [LyExpansionIcon]
    })
], LyExpansionIconModule);

export { AUI_LAST_UPDATE, AUI_VERSION, AlignAlias, CoreTheme, Dir, DirAlias, DirPosition, ElementObserver, FocusStatus, IS_CORE_THEME, LY_COMMON_STYLES, LY_HAMMER_OPTIONS, LY_THEME, LY_THEME_GLOBAL_VARIABLES, LY_THEME_NAME, LyCommonModule, LyCoreStyles, LyExpansionIcon, LyExpansionIconModule, LyFocusState, LyHammerGestureConfig, LyHostClass, LyOverlay, LyOverlayConfig, LyOverlayContainer, LyOverlayModule, LyOverlayRef, LyPaper, LyPaperBase, LyPaperMixinBase, LyRippleService, LySelectionModel, LyStyleUtils, LyTheme2, LyThemeModule, MutationObserverFactory, NgTranscludeDirective, NgTranscludeModule, OverlayFactory, Platform, Positioning, Ripple, STYLES_BACKDROP_DARK, Shadows, StylesInDocument, THEME_VARIABLES, TypeStyle, Undefined, UndefinedValue, WinResize, WinScroll, XPosition, YPosition, _STYLE_MAP, capitalizeFirstLetter, converterToCssKeyAndStyle, createOverlayInjector, defaultEntry, eachMedia, getContrastYIQ, getLyThemeStyleUndefinedError, getLyThemeVariableOptionUndefinedError, getLyThemeVariableUndefinedError, getNativeElement, invertPlacement, isObject, mergeDeep, mixinBg, mixinColor, mixinDisableRipple, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, mixinTabIndex, scrollTo, scrollToC, scrollWithAnimation, shadowBuilder, shadowBuilderDeprecated, supportsPassiveEventListeners, toBoolean, toNumber, untilComponentDestroyed, ɵ0, ɵ1, LyWithClass as ɵa, LyOverlayBackdrop as ɵb };
//# sourceMappingURL=alyle-ui.js.map
