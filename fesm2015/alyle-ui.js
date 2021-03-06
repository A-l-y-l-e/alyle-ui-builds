import { Color, hexColorToInt } from '@alyle/ui/color';
import { InjectionToken, ViewEncapsulation, RendererFactory2, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, isDevMode, Optional, NgZone, ViewContainerRef, Input, Directive, NgModule, ElementRef, Renderer2, HostListener, Component, Injector, TemplateRef, ComponentFactoryResolver, ApplicationRef, ChangeDetectionStrategy } from '@angular/core';
import { __decorate, __param } from 'tslib';
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
function shadowBuilder(elevation, color) {
    let _color = color || new Color(0, 0, 0);
    const rgb = _color.rgba();
    if (!(rgb[0] === rgb[1] && rgb[0] === rgb[2])) {
        // Darken and saturate if the color is not in the grayscale
        _color = _color.darken().saturate(2);
    }
    const colors = [
        _color.alpha(shadowKeyUmbraOpacity).css(),
        _color.alpha(shadowKeyPenumbraOpacity).css(),
        _color.alpha(shadowAmbientShadowOpacity).css()
    ];
    const e = Shadows[elevation];
    // tslint:disable-next-line:max-line-length
    return `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px ${colors[0]},${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px ${colors[1]},${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px ${colors[2]}`;
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

/**
 * For internal use only
 * @docsPrivate
 */
const _STYLE_MAP = new Map();
var TypeStyle;
(function (TypeStyle) {
    TypeStyle[TypeStyle["Multiple"] = 0] = "Multiple";
    TypeStyle[TypeStyle["OnlyOne"] = 1] = "OnlyOne";
    /**
     * A lyl Style
     */
    TypeStyle[TypeStyle["LylStyle"] = 2] = "LylStyle";
})(TypeStyle || (TypeStyle = {}));
function getThemeNameForSelectors(themeId) {
    return `${themeId}<~(selectors)`;
}

const LINE_FEED_REGEX = () => /(\n?[^\n]+\n?)/g;
const ɵ0 = LINE_FEED_REGEX;
const AMPERSAND_REGEX = () => /&/g;
const ɵ1 = AMPERSAND_REGEX;
const STYLE_TEMPLATE_REGEX = () => /__LY_EXPRESSION__\[[\w]+\]/g;
const ɵ2 = STYLE_TEMPLATE_REGEX;
let id = 0;
/**
 * Transform a lyl style block to CSS
 *
 * Allowed blocks:
 *
 * // Simple
 * const BUTTON_STYLE = lyl `{
 *   padding: 8px 12px
 *   font-size: 14px
 *   border-radius: 9px
 *   border: 1px solid #e0e0e0
 * }`
 *
 * // Nesting
 * const style = lyl `{
 *   ul > {
 *     li {
 *       list-style-type: none;
 *     }
 *   }
 *   p {
 *     ~ {
 *       span {
 *         opacity: 0.8;
 *       }
 *     }
 *   }
 * }`
 *
 */
class LylParse {
    constructor(_template, _className = '${className}') {
        this._template = _template;
        this._className = _className;
    }
    toCss() {
        const selectors = [];
        let selector = null;
        const rules = new Map();
        this._template
            .replace(/(\/\/\s[^\n\r]*(?:[\n\r]+|$))/g, '')
            .replace(/,\n/g, ',')
            .replace(LINE_FEED_REGEX(), (_ex, fullLine) => {
            fullLine = fullLine.trim();
            if (fullLine.endsWith('{')) {
                if (selectors.length === 0) {
                    selectors.push([this._className]);
                    selector = selectors[0][0];
                }
                else {
                    const line_1 = fullLine.slice(0, fullLine.length - 1).trim();
                    const isMediaQuery = line_1.includes('@');
                    if (isMediaQuery) {
                        selectors.push([line_1.trim()]);
                        if (!rules.has(line_1)) {
                            rules.set(line_1, []);
                        }
                    }
                    else {
                        selectors.push(line_1
                            .split(',')
                            .map(_ => _.trim()));
                    }
                    selector = this._resolveSelectors(selectors);
                }
                if (!rules.has(selector)) {
                    rules.set(selector, []);
                }
            }
            else if (fullLine.length === 1 && fullLine.endsWith('}')) {
                selectors.pop();
                if (selectors.length) {
                    selector = this._resolveSelectors(selectors);
                    if (!rules.has(selector)) {
                        rules.set(selector, []);
                    }
                }
            }
            else if (fullLine.startsWith('/* >> ds')) {
                selector = this._resolveSelectors(selectors);
                const lin = fullLine;
                // Ignore compiled css
                rules.get(selector).push(lin);
                // fullLine = lin;
                // /** For non LylModule< */else {
                //   fullLine = `\${(${lin.slice(2, lin.length - 1)})(\`${selector}\`)}`;
                //   rules.set(createUniqueCommentSelector('ds'), fullLine);
                // } /** for non LylModule>  */
            }
            else if (fullLine.startsWith('...')) {
                // for non LylModule>
                const content = fullLine.slice(3);
                selector = this._resolveSelectors(selectors);
                // Ignore compiled css
                rules.get(selector).push(`${createUniqueCommentSelector('cc')}${content}`);
            }
            else {
                if (fullLine) {
                    if (fullLine.includes('undefined') || fullLine.startsWith('// ')) {
                        return '';
                    }
                    if (fullLine.endsWith(';')) {
                        throw new Error(`Do not require semicolon in [${fullLine}]`);
                    }
                    if (fullLine.includes(': ')) {
                        fullLine = fullLine.replace(': ', ':');
                    }
                    fullLine += ';';
                    rules.get(selector).push(fullLine);
                }
            }
            return '';
        });
        // Join media queries & keyframes
        rules.forEach((val, key) => {
            const matchArray = key.match(/(@[^\${]*(?:\${[^{]*)*){/);
            if (matchArray) {
                const media = matchArray[1];
                if (media !== key && val.length) {
                    const after = rules.get(media);
                    const sel = key.replace(media + '{', '');
                    const newValue = after + val.reduce((previous, current) => {
                        const last = previous[previous.length - 1];
                        // __READY__ is added to be ignored by content.startsWith ('/ * >> xx')
                        if (current.startsWith('/* >> ds')) {
                            previous.push('/* __READY__ */' + current.replace(/\|\|\&\|\|/g, sel));
                        }
                        else if (current.startsWith('/* >> cc')) {
                            previous.push('/* __READY__ */' + transformCC(current, sel));
                        }
                        else {
                            if (Array.isArray(last)) {
                                last.push(current);
                            }
                            else {
                                previous.push([current]);
                            }
                        }
                        return previous;
                    }, [])
                        .map(item => Array.isArray(item) ? `${sel}{${item.join('')}}` : item).join('');
                    // const newValue = after
                    // + sel
                    // + `{${val.join('')}}`;
                    rules.set(media, [newValue]);
                    rules.delete(key);
                }
            }
        });
        return Array.from(rules.entries())
            .filter(rule => rule[1])
            .map(rule => {
            const sel = rule[0];
            const contents = rule[1];
            const css = [];
            const contentRendered = [];
            const set = new Set();
            for (let index = 0; index < contents.length; index++) {
                const content = contents[index];
                if (content) {
                    if (content.startsWith('/* >> ds')) {
                        contentRendered.push(content.replace(/\|\|\&\|\|/g, sel));
                        set.add(contentRendered);
                    }
                    else if (content.startsWith('/* >> cc')) {
                        contentRendered.push(transformCC(content, sel));
                        set.add(contentRendered);
                    }
                    else {
                        // css += `${sel}{${content}}`;
                        css.push(content);
                        set.add(css);
                    }
                }
            }
            return Array.from(set).map((_) => {
                if (_ === css) {
                    return css.length
                        ? `${sel}{${css.join('')}}`
                        : '';
                }
                else {
                    return _.join('');
                }
            }).join('');
        }).join('');
    }
    _resolveSelectors(selectors) {
        let media = null;
        const sel = selectors
            .map(_ => _.filter(__ => {
            if (__.startsWith('@')) {
                // save media
                media = __;
                return false;
            }
            return __;
        }))
            .filter(_ => _.length)
            .reduce((prev, current) => {
            const result = prev.map(item => current.map(cu => {
                if (cu.includes('&')) {
                    return cu.replace(AMPERSAND_REGEX(), item);
                }
                return `${item} ${cu}`;
            }));
            return Array.prototype.concat.apply([], result);
        })
            .join(',');
        if (media) {
            return `${media}{${sel}`;
        }
        return sel;
    }
}
function transformCC(content, sel) {
    content = content.replace(/\/\* >> cc[^\/\*]+\*\//g, '');
    let expression = content.slice(2, content.length - 1);
    expression = `st2c((${expression}), \`${sel}\`)`;
    return `\${${expression}}`;
}
function lyl(literals, ...placeholders) {
    return (className) => {
        let result = '';
        // Save expressions
        const exMap = {};
        for (let i = 0; i < placeholders.length; i++) {
            const placeholder = placeholders[i];
            result += literals[i];
            if (result.endsWith('...')) {
                result = result.slice(0, result.length - 3);
                if (typeof placeholder === 'function'
                    || placeholder instanceof StyleCollection) {
                    result += `${createUniqueCommentSelector('ds')}${st2c(placeholder, '||&||')}`;
                }
            }
            else {
                const newID = `__LY_EXPRESSION__[__${(id++).toString(36)}]`;
                result += newID;
                exMap[newID] = `${placeholder}`;
            }
        }
        // add the last literal
        result += literals[literals.length - 1];
        const css = new LylParse(result, className).toCss();
        return css.replace(STYLE_TEMPLATE_REGEX(), (str) => {
            if (str in exMap) {
                return exMap[str];
            }
            return '';
        });
    };
}
function createUniqueCommentSelector(text = 'id') {
    return `/* >> ${text} -- ${Math.floor(new Date().valueOf() * Math.random()).toString(36)} */`;
}
class StyleCollection {
    constructor(...templates) {
        this._templates = templates;
        this.css = this.css.bind(this);
    }
    add(...templates) {
        // return new StyleCollection(...[...this._templates, ...templates]);
        this._templates.push(...templates);
        return this;
    }
    /** Transform style */
    setTransformer(transformer) {
        this._transformer = transformer;
        return this;
    }
    /**
     * @return StyleTemplate
     * @docs-private
     */
    css(className) {
        let lin = '';
        const templates = this._templates;
        for (let index = 0; index < templates.length; index++) {
            let template;
            if (this._transformer) {
                template = ((this._transformer(templates[index])));
            }
            else {
                template = templates[index];
            }
            lin += template(className);
        }
        return lin;
    }
}
/**
 * Transform a ...{style} to css
 * For internal use purposes only
 * @param fn StyleTemplate or StyleCollection
 * @param className class name
 */
function st2c(fn, className) {
    if (fn == null) {
        return '';
    }
    if (fn instanceof StyleCollection) {
        return fn.css(className);
    }
    return fn(className);
}
// export function normalizeStyleTemplate(
//   fn: StyleTemplate
//   ) {
//   if (fn.length) {
//     return fn as StyleTemplate;
//   } else {
//     return (fn as (() => StyleTemplate))();
//   }
// }
class StringIdGenerator {
    constructor(chars = 'abcdefghijklmnopqrstuvwxyz') {
        this._chars = chars;
        this._nextId = [0];
    }
    next() {
        const r = [];
        for (const char of this._nextId) {
            r.unshift(this._chars[char]);
        }
        this._increment();
        return r.join('');
    }
    _increment() {
        for (let i = 0; i < this._nextId.length; i++) {
            const val = ++this._nextId[i];
            if (val >= this._chars.length) {
                this._nextId[i] = 0;
            }
            else {
                return;
            }
        }
        this._nextId.push(0);
    }
}

class LyStyleUtils {
    constructor() {
        /** Returns top */
        this.above = 'top';
        /** Returns bottom */
        this.below = 'bottom';
    }
    /** Returns left or right according to the direction */
    get before() {
        return this.getDirection(DirAlias.before);
    }
    /** Returns left or right according to the direction */
    get after() {
        return this.getDirection(DirAlias.after);
    }
    pxToRem(value) {
        const size = this.typography.fontSize / 14;
        return `${value / this.typography.htmlFontSize * size}rem`;
    }
    colorOf(value, optional) {
        if (typeof value === 'number') {
            return new Color(value);
        }
        if (value.includes('#') && value.length === 7) {
            return new Color(hexColorToInt(value));
        }
        const color = get(this, value, optional);
        if (color) {
            return color;
        }
        /** Create invalid color */
        return new Color();
    }
    getBreakpoint(key) {
        return `@media ${this.breakpoints[key] || key}`;
    }
    selectorsOf(styles) {
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
        else if (val === 'above') {
            return 'top';
        }
        else if (val === 'below') {
            return 'bottom';
        }
        return val;
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
    if (path === 'transparent') {
        return new Color(0, 0, 0, 0);
    }
    const _path = path instanceof Array ? path : path.split(':');
    for (let i = 0; i < _path.length; i++) {
        const posibleOb = obj[_path[i]];
        if (posibleOb) {
            obj = posibleOb;
        }
        else {
            /** if not exist */
            return new Color();
        }
    }
    if (obj instanceof Color) {
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
function eachMedia(str, fn, withStyleCollection) {
    let styleCollection;
    if (withStyleCollection) {
        styleCollection = new StyleCollection();
    }
    if (typeof str === 'string') {
        const values = str.split(/\ /g);
        for (let index = 0; index < values.length; index++) {
            const valItem = values[index].split(/\@/g);
            const strValue = valItem.shift();
            const len = valItem.length;
            const value = isNaN(+strValue) ? strValue : +strValue;
            if (len) {
                for (let j = 0; j < len; j++) {
                    resolveMediaEachItemStyle(fn, value, valItem[j], index, styleCollection);
                }
            }
            else {
                resolveMediaEachItemStyle(fn, value, null, index, styleCollection);
            }
        }
    }
    else if (Array.isArray(str)) {
        for (let index = 0; index < str.length; index++) {
            const val = str[index];
            if (typeof val === 'number' || typeof val === 'string') {
                resolveMediaEachItemStyle(fn, val, null, index, styleCollection);
            }
            else {
                const medias = val[1].split(/\@/g).filter(media => media);
                const strValue = val[0];
                const len = medias.length;
                if (len) {
                    for (let ii = 0; ii < len; ii++) {
                        resolveMediaEachItemStyle(fn, strValue, medias[ii], index, styleCollection);
                    }
                }
                else {
                    resolveMediaEachItemStyle(fn, strValue, null, index, styleCollection);
                }
            }
        }
    }
    else {
        resolveMediaEachItemStyle(fn, str, null, 0, styleCollection);
    }
    if (styleCollection) {
        return styleCollection.css;
    }
}
function resolveMediaEachItemStyle(fn, val, media, index, styleCollection) {
    const styl = fn(val, media, index);
    if (styleCollection && styl) {
        styleCollection.add(styl);
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
/**
 * Simple object check.
 * @param item
 */
function isObjectForTheme(item) {
    return (item && typeof item === 'object' && !Array.isArray(item))
        && !(item instanceof StyleCollection)
        && !(item instanceof Color);
}
function mergeThemes(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    const source = sources.shift();
    if (isObjectForTheme(target) && isObjectForTheme(source)) {
        for (const key in source) {
            if (isObjectForTheme(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                mergeThemes(target[key], source[key]);
            }
            else {
                const targetKey = target[key];
                const sourceKey = source[key];
                // Merge styles
                if (targetKey instanceof StyleCollection && typeof sourceKey === 'function') {
                    target[key] = target[key].add(sourceKey);
                }
                else if (sourceKey instanceof Color) {
                    target[key] = sourceKey;
                }
                else {
                    Object.assign(target, { [key]: source[key] });
                }
            }
        }
    }
    return mergeThemes(target, ...sources);
}

let CoreTheme = class CoreTheme {
    constructor(rendererFactory, _document) {
        this.rendererFactory = rendererFactory;
        this.themes = new Set();
        this._themeMap = new Map();
        this._styleMap = new Map();
        this._document = _document;
        if (Platform.isBrowser) {
            // Clean
            const nodes = this._document.body.querySelectorAll('ly-s-c');
            if (nodes.length) {
                for (let index = 0; index < nodes.length; index++) {
                    const element = nodes.item(index);
                    this._document.body.removeChild(element);
                }
            }
        }
        this.firstElement = this._document.body.firstChild;
        this.renderer = this.rendererFactory.createRenderer(null, {
            id: 'ly',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {}
        });
    }
    initializeTheme(themeConfig, globalVariables) {
        const allThemes = Array.isArray(themeConfig) ? themeConfig : [themeConfig];
        const themes = new Map();
        allThemes.forEach(item => {
            // Do not install themes that are already initialized.
            if (this.hasTheme(item.name)) {
                // throw new Error(`Theme '${item.name}' is already initialized.`);
                // }
            }
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
                mergeThemes(items[0], ...items.slice(1));
            }
            this._add(items[0]);
            this.themes.add(items[0].name);
        });
    }
    /**
     * add new theme
     * @param theme: ThemeVariables
     */
    _add(theme) {
        this._themeMap.set(theme.name, theme);
        this._styleMap.set(theme.name, new Map());
    }
    hasTheme(theme) {
        const name = typeof theme === 'string' ? theme : theme.name;
        return this._themeMap.has(name);
    }
    get(name) {
        return this._themeMap.get(name);
    }
    updateClassName(element, renderer, newClassname, oldClassname) {
        if (oldClassname) {
            renderer.removeClass(element, oldClassname);
        }
        renderer.addClass(element, newClassname);
    }
};
CoreTheme.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
CoreTheme.ngInjectableDef = ɵɵdefineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
CoreTheme = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(1, Inject(DOCUMENT))
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
            let requireUpdateOrigin = false;
            const _max_width = this._overlayElementRect.width + offsetCheckx2 > window.innerWidth;
            const _max_height = this._overlayElementRect.height + offsetCheckx2 > window.innerHeight;
            if (_max_height) {
                this.y = this._offsetCheck;
                this.height = `${window.innerHeight - offsetCheckx2}px`;
                requireUpdateOrigin = true;
            }
            else if (this.checkBottom(false, false)) {
                this.y += this.checkBottom(true, false);
                requireUpdateOrigin = true;
            }
            else if (this.checkTop(false, false)) {
                this.y -= this.checkTop(true, false);
                requireUpdateOrigin = true;
            }
            if (_max_width) {
                this.x = this._offsetCheck;
                this.width = `${window.innerWidth - offsetCheckx2}px`;
                requireUpdateOrigin = true;
            }
            else if (this.checkRight(false, false)) {
                this.x += this.checkRight(true, false);
                requireUpdateOrigin = true;
            }
            else if (this.checkLeft(false, false)) {
                this.x -= this.checkLeft(true, false);
                requireUpdateOrigin = true;
            }
            if (requireUpdateOrigin) {
                this.updateOrigin();
            }
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
let nextKeyFrameId = 0;
const yClassID = new StringIdGenerator();
const keyframesUniqueId = new StringIdGenerator();
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
    constructor(stylesInDocument, core, themeName, themeConfig, globalVariables, _document, _ngZone) {
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
        if (themeConfig) {
            core.initializeTheme(themeConfig, globalVariables);
        }
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
     * Build multiple styles and render them in the DOM
     */
    renderStyleSheet(styles) {
        return this._createStyleContent2(styles, null, null, TypeStyle.Multiple);
    }
    /**
     * Build the styles and render them in the DOM
     */
    renderStyle(styleOrId, priorityOrStyle, priority) {
        if (typeof styleOrId === 'string') {
            return this._createStyleContent2(priorityOrStyle, styleOrId, priority, TypeStyle.LylStyle);
        }
        return this._createStyleContent2(styleOrId, null, priority, TypeStyle.LylStyle);
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
     * Note: Use only with immutable variable.
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
    selectorsOf(styles) {
        const themeName = this.initialTheme;
        if (!_STYLE_MAP.has(styles)) {
            _STYLE_MAP.set(styles, {
                isNewStyle: true,
                styles: styles,
                type: TypeStyle.Multiple,
                css: {},
                id: null
            });
        }
        const styleMap = _STYLE_MAP.get(styles);
        const themeNameForSelectors = getThemeNameForSelectors(themeName);
        const classesMap = styleMap[themeNameForSelectors] || (styleMap[themeNameForSelectors] = {});
        return classesMap;
    }
    getClass(styles) {
        const themeName = this.initialTheme;
        const styleMap = _STYLE_MAP.get(styles);
        return styleMap.classes || styleMap[themeName];
    }
    /**
     * For internal use only
     * @docs-private
     */
    _createStyleContent2(styles, id, priority, type, forChangeTheme, parentStyle) {
        const newId = id || styles;
        if (!_STYLE_MAP.has(newId)) {
            _STYLE_MAP.set(newId, {
                isNewStyle: true,
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
        const isCreated = styleMap.isNewStyle || !(styleMap.classes || styleMap[themeName]);
        if (isCreated || forChangeTheme) {
            styleMap.isNewStyle = false;
            // create new style for new theme
            let css;
            const themeMap = this.themeMap.get(this.initialTheme);
            const config = this.core.get(themeMap.change || themeName);
            if (typeof styles === 'function') {
                styleMap.requireUpdate = true;
                css = type === TypeStyle.LylStyle
                    ? createLylStyle(styleMap, styles(config, this), themeName)
                    : groupStyleToString(styleMap, styles(config, this), themeName, id, type, config);
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
};
LyTheme2.ctorParameters = () => [
    { type: StylesInDocument },
    { type: CoreTheme },
    { type: undefined, decorators: [{ type: Inject, args: [LY_THEME_NAME,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_GLOBAL_VARIABLES,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
LyTheme2 = __decorate([
    Injectable(),
    __param(2, Inject(LY_THEME_NAME)),
    __param(3, Optional()), __param(3, Inject(LY_THEME)),
    __param(4, Optional()), __param(4, Inject(LY_THEME_GLOBAL_VARIABLES)),
    __param(5, Inject(DOCUMENT))
], LyTheme2);
function createLylStyle(styleMap, styles, themeName) {
    // const className = styleMap.requireUpdate
    // ? styleMap[themeName] || (styleMap[themeName] = createNextClassId())
    // : styleMap.classes
    //   ? styleMap.classes
    //   : styleMap.classes = createNextClassId();
    // use current class or set new
    let className;
    className = styleMap[themeName]
        || (styleMap[themeName] = isDevMode()
            ? styleMap.id
                ? `${toValidClassName(styleMap.id)}-${createNextClassId()}`
                : `${styleMap.styles.name || 'ii'}-${createNextClassId()}`
            : createNextClassId());
    return styles(`.${className}`);
}
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
    const themeNameForSelectors = getThemeNameForSelectors(themeName);
    const classesMap = styleMap[themeName] || (styleMap[themeName] = {});
    const selectorsMap = styleMap[themeNameForSelectors] || (styleMap[themeNameForSelectors] = {});
    const styleGroup = styles;
    let content = '';
    const name = styleGroup.$name ? `${styleGroup.$name}-` : '';
    // set priority
    if (styleGroup.$priority != null) {
        styleMap.priority = styleGroup.$priority;
    }
    if (!styleMap.keys) {
        styleMap.keys = Object.keys(styles);
    }
    const keys = styleMap.keys;
    /** This loop creates the classes if necessary */
    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        const value = styles[key];
        if (key === '$global' || key === '$keyframes') {
            continue;
        }
        if (typeof value === 'function') {
            // lyl
            // set new id if not exist
            if (!(key in classesMap)) {
                classesMap[key] = isDevMode()
                    ? `${toValidClassName(name + key)}-${createUniqueClassID()}`
                    : createUniqueClassID();
            }
        }
        else if (typeof value === 'object' || value === null) {
            // set new id if not exist
            if (!(key in classesMap)) {
                classesMap[key] = isDevMode() ? toValidClassName(`y-${name}${key}-${createNextClassId()}`) : createNextClassId();
            }
        }
        else {
            continue;
        }
        if (!(key in selectorsMap)) {
            selectorsMap[key] = `.${classesMap[key]}`;
        }
    }
    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        const value = styles[key];
        if (typeof value === 'function') {
            // lyl
            if (key === '$global') {
                if (value.length) {
                    content += value(`/* Global Style */`);
                }
                else {
                    content += value()(`/* Global Style */`);
                }
            }
            else {
                const selector = selectorsMap[key];
                if (value.length) {
                    content += value(selector);
                }
                else {
                    const st = value();
                    if (st) {
                        content += st(selector);
                    }
                }
            }
        }
        else if (key === '$keyframes') {
            content += keyframesToString(name, classesMap, value, themeVariables);
        }
        else if (typeof value === 'object' || value === null) {
            const currentClassName = classesMap[key];
            const style = styleToString(key, styleGroup.$name, value, themeVariables, currentClassName);
            content += style;
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
                : keysMap[newUniqueName] = isDevMode() ? toValidClassName(`${styleName}${name}-${createNextKeyframeId()}-v`) : createNextKeyframeId();
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
function toValidClassName(str) {
    const s = str.replace(/^[0-9]|[^\w\-]/g, _ => {
        return `_${_.charCodeAt(0)}`;
    });
    return s;
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
    return yClassID.next();
}
function createUniqueClassID() {
    return yClassID.next();
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
NgTranscludeDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
__decorate([
    Input()
], NgTranscludeDirective.prototype, "ngTransclude", null);
NgTranscludeDirective = __decorate([
    Directive({
        selector: '[ngTransclude]'
    })
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
            const __color = this._superHyperInternalPropertyColor === 'auto'
                ? ''
                : this._superHyperInternalPropertyColor;
            const __raised = this._superHyperInternalPropertyRaised;
            const __elevation = this._superHyperInternalPropertyElevation;
            const __disabled = this._superHyperInternalPropertyDisabled;
            const __outlined = this._superHyperInternalPropertyOutlined;
            const __shadowColor = this._superHyperInternalPropertyShadowColor;
            const __isContrast = this._autoContrast || this._superHyperInternalPropertyColor === 'auto';
            const el = getNativeElement(element);
            const newKey = `c--${__bg || DEFAULT_VALUE}_${__color || DEFAULT_VALUE}_${__raised || DEFAULT_VALUE}_${__elevation || DEFAULT_VALUE}_${__disabled || DEFAULT_VALUE}_${__outlined || DEFAULT_VALUE}_${__shadowColor || DEFAULT_VALUE}_${__isContrast || DEFAULT_VALUE}`;
            const newClass = this._theme.renderStyle(newKey, (theme) => {
                let sColor;
                let sBackground;
                let sBorder;
                let sPointerEvents;
                let sBoxShadow;
                let sBoxShadowActive;
                if (__outlined) {
                    sBorder = '1px solid currentColor';
                }
                if (__disabled) {
                    sColor = theme.disabled.contrast;
                    sPointerEvents = 'none';
                    if (__bg) {
                        sBackground = theme.disabled.default;
                    }
                }
                else {
                    if (__bg) {
                        sBackground = colorOf(theme, __bg);
                        if (__isContrast && !__color) {
                            sColor = theme.colorOf(`${__bg}:contrast`);
                            // Generate auto contrast if is necessary
                            if (sColor.css().includes('invalid')) {
                                const lum = (__bg instanceof Color ? __bg : theme.colorOf(__bg)).luminance();
                                sColor = lum < 0.5 ? theme.text.light : theme.text.dark;
                            }
                        }
                    }
                    if (!sColor && __color) {
                        sColor = colorOf(theme, __color);
                    }
                    if (__raised || (__elevation != null)) {
                        if (!__bg) {
                            sBackground = theme.background.primary.default;
                        }
                        const backgroundColorCss = sBackground !== __bg && colorOf(theme, __bg || 'background:primary', 'shadow');
                        const shadowColor = (__shadowColor && colorOf(theme, __shadowColor)) || backgroundColorCss || sBackground || sColor || theme.shadow;
                        if (__elevation != null) {
                            sBoxShadow = shadowBuilder(__elevation, shadowColor);
                        }
                        else {
                            sBoxShadow = shadowBuilder(3, shadowColor);
                            sBoxShadowActive = shadowBuilder(8, shadowColor);
                        }
                    }
                }
                return (className) => `${className}{${sColor ? 'color:' + sColor : ''};${sBackground ? 'background:' + sBackground : ''};${sBorder ? 'border:' + sBorder : ''};${sPointerEvents ? 'pointer-events:' + sPointerEvents : ''};${sBoxShadow ? 'box-shadow:' + sBoxShadow : ''};}${className}:active{${sBoxShadowActive ? 'box-shadow:' + sBoxShadowActive : ''};}`;
            }, STYLE_PRIORITY);
            el.classList.remove(this._classNameAnonymous);
            el.classList.add(newClass);
            this._classNameAnonymous = newClass;
        }
        constructor(...args) { super(...args); }
    };
}
function colorOf(theme, color, optional) {
    return color instanceof Color ? color : theme.colorOf(color, optional);
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

const ɵ0$1 = (className) => `${className}{position:absolute;top:0;bottom:0;left:0;right:0;}`, ɵ1$1 = (className) => `${className}{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none;}`, ɵ2$1 = (className) => `${className}{-webkit-tap-highlight-color:transparent;background-color:transparent;border:0;-moz-appearance:none;-webkit-appearance:none;margin:0;outline:none;box-sizing:border-box;position:relative;text-decoration-line:none;-webkit-text-decoration-line:none;}${className}::-moz-focus-inner:{border:0;}`;
const LY_COMMON_STYLES = {
    fill: ɵ0$1,
    visuallyHidden: ɵ1$1,
    button: ɵ2$1
};
const LY_COMMON_STYLES_DEPRECATED = {
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
        this.classes = this.theme.addStyleSheet(LY_COMMON_STYLES_DEPRECATED);
    }
};
LyCoreStyles.ctorParameters = () => [
    { type: LyTheme2 }
];
LyCoreStyles.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyCoreStyles_Factory() { return new LyCoreStyles(ɵɵinject(LyTheme2)); }, token: LyCoreStyles, providedIn: "root" });
LyCoreStyles = __decorate([
    Injectable({ providedIn: 'root' })
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
    container: Object.assign({}, LY_COMMON_STYLES_DEPRECATED.fill, { overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' })
});
let LyRippleService = class LyRippleService {
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles);
    }
};
LyRippleService.ctorParameters = () => [
    { type: LyTheme2 }
];
LyRippleService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(ɵɵinject(LyTheme2)); }, token: LyRippleService, providedIn: "root" });
LyRippleService = __decorate([
    Injectable({
        providedIn: 'root'
    })
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
LyPaper.ctorParameters = () => [
    { type: LyTheme2 },
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('ly-text')
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
    })
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
LyWithClass.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], LyWithClass.prototype, "withClass", null);
LyWithClass = __decorate([
    Directive({
        selector: '[withClass]'
    })
], LyWithClass);

const __CLASS_NAME__ = '__CLASS_NAME__';
let StyleRenderer = class StyleRenderer {
    constructor(_theme, _el, _renderer) {
        this._theme = _theme;
        this._renderer = _renderer;
        this._set = new Set();
        if (_el) {
            this._nEl = _el.nativeElement;
            this._set = new Set();
        }
    }
    /**
     * Build multiple styles and render them in the DOM.
     * @param styles Styles
     * @param applyRootClass If `applyToRoot` is `true` and the root property is defined,
     * it will automatically be added to the component.
     *
     * e.g.
     *
     * ```ts
     * const STYLES = () => ({
     *   root: lyl `{...}` // this class will be added to the root component
     * })
     * ```
     *
     */
    renderSheet(styles, applyRootClass) {
        const classes = this._theme._createStyleContent2(styles, null, null, TypeStyle.Multiple);
        if (applyRootClass && classes.root) {
            this.addClass(classes.root);
        }
        return classes;
    }
    /**
     * Render style and apply class name to host Component or Directive,
     * require provide `StyleRenderer` in your Component.
     * e.g.
     * @Component({
     *   ...
     *   providers: [ StyleRenderer ]
     * })
     */
    add(id, style, priority, oldClass) {
        const args = arguments;
        /** Class name or keyframe name */
        let className;
        let len = args.length;
        // clean
        if (len === 4 && args[3] == null) {
            len -= 1;
        }
        if (len === 3 && args[2] == null) {
            len -= 1;
        }
        if (len === 1) {
            className = this._theme._createStyleContent2(id, null, null, TypeStyle.LylStyle);
        }
        else if (len === 2) {
            if (typeof id === 'string') {
                className = this._theme._createStyleContent2(style, id, null, TypeStyle.LylStyle);
            }
            else if (typeof style === 'number') {
                className = this._theme._createStyleContent2(id, null, style, TypeStyle.LylStyle);
            }
            else {
                className = this._theme._createStyleContent2(id, null, null, TypeStyle.LylStyle);
                oldClass = style;
            }
        }
        else if (len === 3) {
            if (typeof id === 'string') {
                if (typeof priority === 'number') {
                    // (id, style, priority)
                    className = this._theme._createStyleContent2(style, id, priority, TypeStyle.LylStyle);
                }
                else {
                    // (id, style, oldClass)
                    className = this._theme._createStyleContent2(style, id, null, TypeStyle.LylStyle);
                    oldClass = priority;
                }
            }
            else {
                // (style, priority, oldClass)
                className = this._theme._createStyleContent2(id, null, style, TypeStyle.LylStyle);
                oldClass = priority;
            }
        }
        else if (len === 4) {
            className = this._theme._createStyleContent2(style, id, priority, TypeStyle.LylStyle);
        }
        if (this._nEl) {
            return this.updateClass(className, oldClass);
        }
        throw new Error(`StyleRenderer is required on the Component!\n`
            + `Add provider for StyleRenderer in Component or Directive:\n\n`
            + `e.g:\n\n`
            + `@Component({\n`
            + `  providers: [ StyleRenderer ]\n`
            + `})\n`);
    }
    /**
     * Only render style and return class name.
     */
    render(styleOrId, priorityOrStyle, priority) {
        if (typeof styleOrId === 'string') {
            return this._theme._createStyleContent2(priorityOrStyle, styleOrId, priority, TypeStyle.LylStyle);
        }
        return this._theme._createStyleContent2(styleOrId, null, priority, TypeStyle.LylStyle);
    }
    addClass(className) {
        if (!this._set.has(className)) {
            this._set.add(className);
            this._renderer.addClass(this._nEl, className);
        }
    }
    removeClass(className) {
        if (className && this._set.has(className)) {
            this._set.delete(className);
            this._renderer.removeClass(this._nEl, className);
        }
    }
    toggleClass(className, enabled) {
        if (enabled) {
            this.addClass(className);
        }
        else {
            this.removeClass(className);
        }
    }
    updateClass(newClassName, oldClassName) {
        this.removeClass(oldClassName);
        this.addClass(newClassName);
        return newClassName;
    }
};
StyleRenderer.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef, decorators: [{ type: Optional }] },
    { type: Renderer2, decorators: [{ type: Optional }] }
];
StyleRenderer = __decorate([
    Injectable(),
    __param(1, Optional()),
    __param(2, Optional())
], StyleRenderer);
/**
 * Parameter decorator to be used for create Dynamic style together with `@Input`
 * @param style style
 * @param priority priority of style, default: 0
 * @decorator
 */
function Style(style, priority) {
    return function (target, propertyKey, descriptor) {
        const index = `${__CLASS_NAME__}${propertyKey}`;
        if (descriptor) {
            const set = descriptor.set;
            descriptor.set = function (val) {
                const that = this;
                if (val == null) {
                    that.sRenderer.removeClass(that[index]);
                }
                else {
                    that[index] = that.sRenderer.add(`${getComponentName(that)}--${propertyKey}-${val}`, style(val, that), priority || that.$priority || that.constructor.$priority || 0, that[index]);
                }
                set.call(that, val);
            };
        }
        else {
            Object.defineProperty(target, propertyKey, {
                configurable: true,
                enumerable: true,
                set(val) {
                    const that = this;
                    if (val == null) {
                        that.sRenderer.removeClass(that[index]);
                    }
                    else {
                        that[`_${propertyKey}`] = val;
                        that[index] = that.sRenderer.add(`${getComponentName(that)}--${propertyKey}-${val}`, style(val, that), priority || that.$priority || that.constructor.$priority || 0, that[index]);
                    }
                },
                get() {
                    return this[`_${propertyKey}`];
                }
            });
        }
    };
}
function getComponentName(comp) {
    return comp.constructor.и || comp.constructor.name || 'unnamed';
}

var LyStyle_1;
const STYLE_PRIORITY$1 = -0.5;
const ɵ0$2 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{padding:${to8Px(val)};}}`), true), ɵ1$2 = value => ({ breakpoints, after }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{padding-${after}:${to8Px(val)};}}`), true), ɵ2$2 = value => ({ breakpoints, before }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{padding-${before}:${to8Px(val)};}}`), true), ɵ3 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{padding-top:${to8Px(val)};}}`), true), ɵ4 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{padding-bottom:${to8Px(val)};}}`), true), ɵ5 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{padding:0 ${to8Px(val)};}}`), true), ɵ6 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{padding:${to8Px(val)} 0;}}`), true), ɵ7 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{margin:${to8Px(val)};}}`), true), ɵ8 = value => ({ breakpoints, after }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{margin-${after}:${to8Px(val)};}}`), true), ɵ9 = value => ({ breakpoints, before }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{margin-${before}:${to8Px(val)};}}`), true), ɵ10 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{margin-top:${to8Px(val)};}}`), true), ɵ11 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{margin-bottom:${to8Px(val)};}}`), true), ɵ12 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{margin:0 ${to8Px(val)};}}`), true), ɵ13 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{margin:${to8Px(val)} 0;}}`), true), ɵ14 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{width:${transform(val)};}}`), true), ɵ15 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{max-width:${transform(val)};}}`), true), ɵ16 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{min-width:${transform(val)};}}`), true), ɵ17 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{height:${transform(val)};}}`), true), ɵ18 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{max-height:${transform(val)};}}`), true), ɵ19 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{min-height:${transform(val)};}}`), true), ɵ20 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{display:${val};}}`), true), ɵ21 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{flex:${val};}}`), true), ɵ22 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{flex-basis:${val};}}`), true), ɵ23 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{flex-direction:${val};}}`), true), ɵ24 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{flex-grow:${val};}}`), true), ɵ25 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{flex-self:${val};}}`), true), ɵ26 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{flex-shrink:${val};}}`), true), ɵ27 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{flex-wrap:${val};}}`), true), ɵ28 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{justify-content:${val};}}`), true), ɵ29 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{justify-items:${val};}}`), true), ɵ30 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{justify-self:${val};}}`), true), ɵ31 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{align-content:${val};}}`), true), ɵ32 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{align-items:${val};}}`), true), ɵ33 = value => ({ breakpoints }) => eachMedia(value, (val, media) => ((className) => `@media ${(media && breakpoints[media]) || 'all'}{${className}{order:${val};}}`), true);
/**
 * @dynamic
 * Spacing
 * [p], [pf], [pe], [pt], [pb], [px], [py],
 * [m], [mf], [me], [mt], [mb], [mx], [my],
 * Sizing
 * [size],
 * [width], [maxWidth], [minWidth],
 * [height], [maxHeight], [minHeight],
 * Others
 * [lyStyle]
 * [width]
 */
let LyStyle = LyStyle_1 = class LyStyle {
    constructor(sRenderer) {
        this.sRenderer = sRenderer;
    }
    set size(value) {
        this.width = value;
        this.height = value;
    }
    get lyStyle() {
        return this._lyStyle;
    }
    set lyStyle(val) {
        if (typeof val === 'function') {
            this[0xa] = this.sRenderer.add(val, this[0xa]);
        }
        else if (val != null) {
            this[0xa] = this.sRenderer.add(`${LyStyle_1.и}--style-${val}`, ({ breakpoints }) => eachMedia(val, (v, media) => ((className) => `@media ${(media && (breakpoints[media] || media)) || 'all'}{${className}{${v};}}`), true), STYLE_PRIORITY$1, this[0xa]);
        }
        else {
            this.sRenderer.removeClass(this[0xa]);
        }
    }
};
/** @docs-private */
LyStyle.и = 'LyStyle';
LyStyle.ctorParameters = () => [
    { type: StyleRenderer }
];
__decorate([
    Input(),
    Style(ɵ0$2)
], LyStyle.prototype, "p", void 0);
__decorate([
    Input(),
    Style(ɵ1$2)
], LyStyle.prototype, "pf", void 0);
__decorate([
    Input(),
    Style(ɵ2$2)
], LyStyle.prototype, "pe", void 0);
__decorate([
    Input(),
    Style(ɵ3)
], LyStyle.prototype, "pt", void 0);
__decorate([
    Input(),
    Style(ɵ4)
], LyStyle.prototype, "pb", void 0);
__decorate([
    Input(),
    Style(ɵ5)
], LyStyle.prototype, "px", void 0);
__decorate([
    Input(),
    Style(ɵ6)
], LyStyle.prototype, "py", void 0);
__decorate([
    Input(),
    Style(ɵ7)
], LyStyle.prototype, "m", void 0);
__decorate([
    Input(),
    Style(ɵ8)
], LyStyle.prototype, "mf", void 0);
__decorate([
    Input(),
    Style(ɵ9)
], LyStyle.prototype, "me", void 0);
__decorate([
    Input(),
    Style(ɵ10)
], LyStyle.prototype, "mt", void 0);
__decorate([
    Input(),
    Style(ɵ11)
], LyStyle.prototype, "mb", void 0);
__decorate([
    Input(),
    Style(ɵ12)
], LyStyle.prototype, "mx", void 0);
__decorate([
    Input(),
    Style(ɵ13)
], LyStyle.prototype, "my", void 0);
__decorate([
    Input(),
    Style(ɵ14)
], LyStyle.prototype, "width", void 0);
__decorate([
    Input(),
    Style(ɵ15)
], LyStyle.prototype, "maxWidth", void 0);
__decorate([
    Input(),
    Style(ɵ16)
], LyStyle.prototype, "minWidth", void 0);
__decorate([
    Input(),
    Style(ɵ17)
], LyStyle.prototype, "height", void 0);
__decorate([
    Input(),
    Style(ɵ18)
], LyStyle.prototype, "maxHeight", void 0);
__decorate([
    Input(),
    Style(ɵ19)
], LyStyle.prototype, "minHeight", void 0);
__decorate([
    Input()
], LyStyle.prototype, "size", null);
__decorate([
    Input(),
    Style(ɵ20)
], LyStyle.prototype, "display", void 0);
__decorate([
    Input(),
    Style(ɵ21)
], LyStyle.prototype, "flex", void 0);
__decorate([
    Input(),
    Style(ɵ22)
], LyStyle.prototype, "flexBasis", void 0);
__decorate([
    Input(),
    Style(ɵ23)
], LyStyle.prototype, "flexDirection", void 0);
__decorate([
    Input(),
    Style(ɵ24)
], LyStyle.prototype, "flexGrow", void 0);
__decorate([
    Input(),
    Style(ɵ25)
], LyStyle.prototype, "flexSelf", void 0);
__decorate([
    Input(),
    Style(ɵ26)
], LyStyle.prototype, "flexShrink", void 0);
__decorate([
    Input(),
    Style(ɵ27)
], LyStyle.prototype, "flexWrap", void 0);
__decorate([
    Input(),
    Style(ɵ28)
], LyStyle.prototype, "justifyContent", void 0);
__decorate([
    Input(),
    Style(ɵ29)
], LyStyle.prototype, "justifyItems", void 0);
__decorate([
    Input(),
    Style(ɵ30)
], LyStyle.prototype, "justifySelf", void 0);
__decorate([
    Input(),
    Style(ɵ31)
], LyStyle.prototype, "alignContent", void 0);
__decorate([
    Input(),
    Style(ɵ32)
], LyStyle.prototype, "alignItems", void 0);
__decorate([
    Input(),
    Style(ɵ33)
], LyStyle.prototype, "order", void 0);
__decorate([
    Input()
], LyStyle.prototype, "lyStyle", null);
LyStyle = LyStyle_1 = __decorate([
    Directive({
        selector: `[lyStyle],
              [p], [pf], [pe], [pt], [pb], [px], [py],
              [m], [mf], [me], [mt], [mb], [mx], [my],
              [size],
              [width], [maxWidth], [minWidth],
              [height], [maxHeight], [minHeight],
              [display],
              [flex],
              [flexBasis],
              [flexDirection],
              [flexGrow],
              [flexSelf],
              [flexShrink],
              [flexWrap],
              [justifyContent],
              [justifyItems],
              [justifySelf],
              [alignContent],
              [alignItems],
              [order]`,
        providers: [
            StyleRenderer
        ]
    })
], LyStyle);
/**
 * Convert to px if the value is a number, otherwise leave it as is
 * @docs-private
 */
function to8Px(val) {
    return typeof val === 'number'
        ? `${val * 8}px`
        : val;
}
function transform(value) {
    return value <= 1
        ? `${value * 100}%`
        : typeof value === 'string'
            ? value
            : `${value}px`;
}

let LyCommonModule = class LyCommonModule {
};
LyCommonModule = __decorate([
    NgModule({
        declarations: [LyStyle, LyWithClass, LyPaper],
        exports: [LyStyle, LyWithClass, LyPaper]
    })
], LyCommonModule);

function defaultEntry(value, defaultValue) {
    return value !== '' && value !== void 0 ? value : defaultValue;
}

/**
 * @experimental
 * Element to move, time in ms to animate
 */
function scrollTo(element, duration) {
    let e = document.documentElement;
    if (e.scrollTop === 0) {
        const t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToFromTo(e, e.scrollTop, element, duration);
}
// Element to move, element or px from, element or px to, time in ms to animate
function scrollToFromTo(element, from, to, duration) {
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
 * @experimental
 */
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
        this._renderer = _renderer;
        this._set = new Set();
        this._nEl = _el.nativeElement;
    }
    add(className) {
        if (!this._set.has(className)) {
            this._set.add(className);
            this._renderer.addClass(this._nEl, className);
        }
    }
    remove(className) {
        if (className && this._set.has(className)) {
            this._set.delete(className);
            this._renderer.removeClass(this._nEl, className);
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
    update(newClassName, oldClassName) {
        this.remove(oldClassName);
        this.add(newClassName);
        return newClassName;
    }
};
LyHostClass.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
LyHostClass = __decorate([
    Injectable()
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
LyFocusState.ctorParameters = () => [
    { type: NgZone }
];
LyFocusState.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyFocusState_Factory() { return new LyFocusState(ɵɵinject(NgZone)); }, token: LyFocusState, providedIn: "root" });
LyFocusState = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LyFocusState);

const AUI_VERSION = '2.9.8-preview.c39ea2';
const AUI_LAST_UPDATE = '2020-02-04T21:24:24.052Z';

const LY_HAMMER_OPTIONS = new InjectionToken('LY_HAMMER_OPTIONS');
const HAMMER_GESTURES_EVENTS = [
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft',
    'slidecancel'
];
const ɵ0$3 = () => { }, ɵ1$3 = () => { };
/**
 * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
 * been loaded on the page.
 */
const noopHammerInstance = {
    on: ɵ0$3,
    off: ɵ1$3,
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
LyHammerGestureConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_HAMMER_OPTIONS,] }] }
];
LyHammerGestureConfig = __decorate([
    Injectable(),
    __param(0, Optional()), __param(0, Inject(LY_HAMMER_OPTIONS))
], LyHammerGestureConfig);

var LyThemeModule_1;
let LyThemeModule = LyThemeModule_1 = class LyThemeModule {
    static setTheme(themeName) {
        return {
            ngModule: LyThemeModule_1,
            providers: [
                [LyTheme2],
                [StyleRenderer],
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
const ɵ0$4 = styles$1;
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
    _add(item, insertBefore) {
        this._items.add(item);
        if (insertBefore) {
            this.containerElement.insertBefore(item, this.containerElement.firstChild);
        }
        else {
            this.containerElement.appendChild(item);
        }
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
LyOverlayContainer.ctorParameters = () => [
    { type: LyTheme2 }
];
LyOverlayContainer.ngInjectableDef = ɵɵdefineInjectable({ factory: function LyOverlayContainer_Factory() { return new LyOverlayContainer(ɵɵinject(LyTheme2)); }, token: LyOverlayContainer, providedIn: "root" });
LyOverlayContainer = __decorate([
    Injectable({
        providedIn: 'root'
    })
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
WinResize.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
WinResize.ngInjectableDef = ɵɵdefineInjectable({ factory: function WinResize_Factory() { return new WinResize(ɵɵinject(DOCUMENT), ɵɵinject(NgZone)); }, token: WinResize, providedIn: "root" });
WinResize = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(DOCUMENT))
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
WinScroll.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
WinScroll.ngInjectableDef = ɵɵdefineInjectable({ factory: function WinScroll_Factory() { return new WinScroll(ɵɵinject(DOCUMENT), ɵɵinject(NgZone)); }, token: WinScroll, providedIn: "root" });
WinScroll = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(DOCUMENT))
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

const STYLE_PRIORITY$2 = -2;
const STYLES_BACKDROP_ROOT = (Object.assign({}, LY_COMMON_STYLES_DEPRECATED.fill, { width: '100vw', height: '100vh', pointerEvents: 'all', userSelect: 'none' }));
let LyOverlayBackdrop = class LyOverlayBackdrop {
    constructor(_el, _theme, _config) {
        this._el = _el;
        this._config = _config;
        _el.nativeElement.classList.add(_theme.style(STYLES_BACKDROP_ROOT, STYLE_PRIORITY$2));
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
LyOverlayBackdrop.ctorParameters = () => [
    { type: ElementRef },
    { type: LyTheme2 },
    { type: LyOverlayConfig }
];
__decorate([
    HostListener('click')
], LyOverlayBackdrop.prototype, "onclick", null);
LyOverlayBackdrop = __decorate([
    Component({
        selector: 'ly-overlay-backdrop',
        template: ``
    })
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
        const newInjector = this._newInjector = createOverlayInjector(this._injector, Object.assign({ fnDestroy: this.destroy.bind(this) }, config, { styles: __styles }), this);
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
        this.updateBackdrop(!!config.hasBackdrop);
        this._appendComponentToBody(_templateRefOrComponent, _context, newInjector);
        this._hiddeScroll();
    }
    get containerElement() {
        return this._el;
    }
    get componentRef() {
        return this._compRef;
    }
    updateBackdrop(hasBackdrop) {
        if (hasBackdrop) {
            this._compRefOverlayBackdrop = this._generateComponent(LyOverlayBackdrop, this._newInjector);
            this._appRef.attachView(this._compRefOverlayBackdrop.hostView);
            const backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._add(backdropEl, true);
        }
        else if (this._compRefOverlayBackdrop) {
            this._resetScroll();
            this._appRef.detachView(this._compRefOverlayBackdrop.hostView);
            const backdropEl = this._compRefOverlayBackdrop.location.nativeElement;
            this._overlayContainer._remove(backdropEl);
            this._compRefOverlayBackdrop = null;
        }
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
        this.updateBackdrop(false);
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
            window.document.body.style.overflow = '';
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
LyOverlay.ctorParameters = () => [
    { type: LyOverlayContainer },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: WinScroll },
    { type: WinResize }
];
LyOverlay = __decorate([
    Injectable()
], LyOverlay);

let LyOverlayModule = class LyOverlayModule {
};
LyOverlayModule = __decorate([
    NgModule({
        declarations: [LyOverlayBackdrop],
        entryComponents: [LyOverlayBackdrop],
        providers: [
            LyOverlay
        ]
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
ElementObserver.ctorParameters = () => [
    { type: MutationObserverFactory }
];
ElementObserver.ngInjectableDef = ɵɵdefineInjectable({ factory: function ElementObserver_Factory() { return new ElementObserver(ɵɵinject(MutationObserverFactory)); }, token: ElementObserver, providedIn: "root" });
ElementObserver = __decorate([
    Injectable({ providedIn: 'root' })
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
const ɵ0$5 = STYLES;
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
LyExpansionIcon.ctorParameters = () => [
    { type: LyTheme2 },
    { type: Renderer2 },
    { type: ElementRef }
];
__decorate([
    Input()
], LyExpansionIcon.prototype, "color", null);
__decorate([
    Input()
], LyExpansionIcon.prototype, "up", null);
LyExpansionIcon = __decorate([
    Component({
        selector: 'ly-expansion-icon',
        template: "<span [className]=\"classes.line\"></span>\n<span [className]=\"classes.line\"></span>",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], LyExpansionIcon);

let LyExpansionIconModule = class LyExpansionIconModule {
};
LyExpansionIconModule = __decorate([
    NgModule({
        declarations: [LyExpansionIcon],
        exports: [LyExpansionIcon]
    })
], LyExpansionIconModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AUI_LAST_UPDATE, AUI_VERSION, AlignAlias, CoreTheme, Dir, DirAlias, DirPosition, ElementObserver, FocusStatus, IS_CORE_THEME, LY_COMMON_STYLES, LY_COMMON_STYLES_DEPRECATED, LY_HAMMER_OPTIONS, LY_THEME, LY_THEME_GLOBAL_VARIABLES, LY_THEME_NAME, LyCommonModule, LyCoreStyles, LyExpansionIcon, LyExpansionIconModule, LyFocusState, LyHammerGestureConfig, LyHostClass, LyOverlay, LyOverlayConfig, LyOverlayContainer, LyOverlayModule, LyOverlayRef, LyPaper, LyPaperBase, LyPaperMixinBase, LyRippleService, LySelectionModel, LyStyle, LyStyleUtils, LyTheme2, LyThemeModule, LylParse, MutationObserverFactory, NgTranscludeDirective, NgTranscludeModule, OverlayFactory, Platform, Positioning, Ripple, STYLES_BACKDROP_DARK, Shadows, StringIdGenerator, Style, StyleCollection, StyleRenderer, StylesInDocument, THEME_VARIABLES, TypeStyle, Undefined, UndefinedValue, WinResize, WinScroll, XPosition, YPosition, _STYLE_MAP, capitalizeFirstLetter, converterToCssKeyAndStyle, createOverlayInjector, defaultEntry, eachMedia, getContrastYIQ, getLyThemeStyleUndefinedError, getLyThemeVariableOptionUndefinedError, getLyThemeVariableUndefinedError, getNativeElement, getThemeNameForSelectors, invertPlacement, keyframesUniqueId, lyl, mergeDeep, mergeThemes, mixinBg, mixinColor, mixinDisableRipple, mixinDisabled, mixinElevation, mixinOutlined, mixinRaised, mixinShadowColor, mixinStyleUpdater, mixinTabIndex, scrollTo, scrollWithAnimation, shadowBuilder, st2c, supportsPassiveEventListeners, toBoolean, toNumber, untilComponentDestroyed, ɵ0$2 as ɵ0, ɵ1$2 as ɵ1, ɵ10, ɵ11, ɵ12, ɵ13, ɵ14, ɵ15, ɵ16, ɵ17, ɵ18, ɵ19, ɵ2$2 as ɵ2, ɵ20, ɵ21, ɵ22, ɵ23, ɵ24, ɵ25, ɵ26, ɵ27, ɵ28, ɵ29, ɵ3, ɵ30, ɵ31, ɵ32, ɵ33, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, LyWithClass as ɵa, LyOverlayBackdrop as ɵb };
//# sourceMappingURL=alyle-ui.js.map
