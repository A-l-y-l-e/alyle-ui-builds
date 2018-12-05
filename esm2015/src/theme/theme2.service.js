/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Inject, isDevMode, NgZone } from '@angular/core';
import { LY_THEME_NAME } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { Platform } from '../platform';
import { DOCUMENT } from '@angular/common';
import { DirAlias, Dir } from '../style-utils';
import { YPosition } from '../position/position';
import * as i0 from "@angular/core";
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
/**
 * @record
 */
export function StyleMap5() { }
if (false) {
    /** @type {?} */
    StyleMap5.prototype.styles;
    /** @type {?} */
    StyleMap5.prototype.type;
    /** @type {?} */
    StyleMap5.prototype.priority;
    /** @type {?} */
    StyleMap5.prototype.css;
    /**
     * global theme
     * @type {?|undefined}
     */
    StyleMap5.prototype.classes;
    /**
     * requireUpdate
     * @type {?|undefined}
     */
    StyleMap5.prototype.classesWithTheme;
    /** @type {?|undefined} */
    StyleMap5.prototype.requireUpdate;
    /** @type {?} */
    StyleMap5.prototype.id;
}
/** @type {?} */
let nextClassId = 0;
/** @type {?} */
let nextKeyFrameId = 0;
export class StylesInDocument {
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
/** @nocollapse */ StylesInDocument.ngInjectableDef = i0.defineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
if (false) {
    /** @type {?} */
    StylesInDocument.prototype.styles;
    /** @type {?} */
    StylesInDocument.prototype.styleContainers;
    /** @type {?} */
    StylesInDocument.prototype.styleElementGlobalMap;
}
/** @type {?} */
const THEME_MAP = new Map();
export class LyTheme2 {
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
     * @return {?}
     */
    addStyle(id, style, el, instance, priority) {
        /** @type {?} */
        const newClass = this.addCss(id, (/** @type {?} */ (style)), priority);
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
                this._createStyleContent2(styleData.styles, styleData.id, styleData.priority, styleData.type, true);
            }
        });
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
        return (/** @type {?} */ (this._createStyleContent2((/** @type {?} */ (css)), newId, priority, TypeStyle.OnlyOne, false, media)));
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
                id
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
                css = groupStyleToString(styleMap, styles(config), themeName, null, type, config, media);
                if (!forChangeTheme) {
                    styleMap.css[themeName] = css;
                }
            }
            else {
                /** create a new id for style that does not <-<require>-> changes */
                css = groupStyleToString(styleMap, styles, themeName, (/** @type {?} */ (newId)), type, config, media);
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
             * for ssr & hmr
             */
            if (!this.elements.has(newId)) {
                /** @type {?} */
                const _css = styleMap.css[themeName] || styleMap.css;
                /** @type {?} */
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
if (false) {
    /** @type {?} */
    LyTheme2.prototype.config;
    /** @type {?} */
    LyTheme2.prototype._styleMap;
    /** @type {?} */
    LyTheme2.prototype.initialTheme;
    /** @type {?} */
    LyTheme2.prototype.elements;
    /** @type {?} */
    LyTheme2.prototype._elementsMap;
    /** @type {?} */
    LyTheme2.prototype.themeMap;
    /** @type {?} */
    LyTheme2.prototype.isDevOrServer;
    /** @type {?} */
    LyTheme2.prototype.stylesInDocument;
    /** @type {?} */
    LyTheme2.prototype.core;
    /** @type {?} */
    LyTheme2.prototype._document;
    /** @type {?} */
    LyTheme2.prototype._ngZone;
}
/**
 * @record
 */
export function StyleContainer() { }
/**
 * @record
 */
export function Styles2() { }
if (false) {
    /**
     * Prefix name
     * @type {?|undefined}
     */
    Styles2.prototype.$name;
    /* Skipping unhandled member: [key: string]: StyleContainer | string;*/
}
/**
 * @record
 */
export function Keyframes() { }
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
    // for styles type string
    if (typeStyle === TypeStyle.OnlyOne) {
        // use current class or set new
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
            const rules = styleToString(id, styles, themeVariables, (/** @type {?} */ (className)));
            return rules;
        }
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
                const style = styleToString(key, (/** @type {?} */ (value)), themeVariables, currentClassName);
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
            // Check if is Object literal
            if (element.constructor === Object) {
                subContent += styleToString(key, (/** @type {?} */ (element)), themeVariables, styleKey, newKey);
            }
            else {
                keyAndValue += convertToStyleValue(styleKey, element, themeVariables);
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
export function converterToCssKeyAndStyle(str, themeVariables) {
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
    const map = STYLE_KEYS_MAP[themeVariables.direction];
    return str in map
        ? map[str]
        : map[str] = converterToCssKeyAndStyle(str, themeVariables);
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
    const map = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map[original] = val.replace(dirAlias, themeVariables.getDirection(dirAlias));
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
    const map = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map[original] = val.replace(pos, to);
}
/**
 * @param {?} str
 * @return {?}
 */
export function capitalizeFirstLetter(str) {
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
 * @return {?}
 */
function createNextKeyframeId() {
    return `k${(nextKeyFrameId++).toString(36)}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBa0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztNQUUzQyxhQUFhLEdBQUc7SUFDcEIsU0FBUyxFQUFFO1FBQ1Qsc0JBQXNCLEVBQUU7WUFDdEIsb0JBQW9CLEVBQUUsWUFBWTtZQUNsQyxpQkFBaUIsRUFBRSxZQUFZO1lBQy9CLFlBQVksRUFBRSxZQUFZO1NBQzNCO0tBQ0Y7Q0FDRjs7TUFFSyxXQUFXLEdBQUcsZUFBZTs7O0lBR2pDLFdBQVE7SUFDUixVQUFPOzs7OztNQUdILFVBQVUsR0FBd0IsSUFBSSxHQUFHLEVBQUU7Ozs7QUFFakQsK0JBbUJDOzs7SUFsQkMsMkJBQTRCOztJQUM1Qix5QkFBZ0I7O0lBQ2hCLDZCQUFpQjs7SUFDakIsd0JBRVc7Ozs7O0lBRVgsNEJBRVc7Ozs7O0lBRVgscUNBSUU7O0lBQ0Ysa0NBQXdCOztJQUN4Qix1QkFBVzs7O0lBR1QsV0FBVyxHQUFHLENBQUM7O0lBQ2YsY0FBYyxHQUFHLENBQUM7QUFLdEIsTUFBTSxPQUFPLGdCQUFnQjtJQUg3QjtRQUlFLFdBQU0s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QUFDOzs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxHQUFXO0lBQy9DLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxPQUFPLENBQUMsR0FBVyxFQUFFLEtBQWE7SUFDekMsT0FBTyxVQUFVLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNuQyxDQUFDOzs7O0FBRUQsU0FBUyxpQkFBaUI7SUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDOzs7O0FBQ0QsU0FBUyxvQkFBb0I7SUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIGlzRGV2TW9kZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaXJBbGlhcywgRGlyIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgWVBvc2l0aW9uIH0gZnJvbSAnLi4vcG9zaXRpb24vcG9zaXRpb24nO1xuXG5jb25zdCBkZWZhdWx0U3R5bGVzID0ge1xuICAnQGdsb2JhbCc6IHtcbiAgICAnKiwgKjphZnRlciwgKjpiZWZvcmUnOiB7XG4gICAgICAnLXdlYmtpdC1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJy1tb3otYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBSRUZfUkVHX0VYUCA9IC9cXHsoW1xcdy1dKylcXH0vZztcblxuZW51bSBUeXBlU3R5bGUge1xuICBNdWx0aXBsZSxcbiAgT25seU9uZVxufVxuXG5jb25zdCBTVFlMRV9NQVA1OiBNYXA8YW55LCBTdHlsZU1hcDU+ID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlTWFwNSB7XG4gIHN0eWxlczogU3R5bGVzRm4yIHwgU3R5bGVzMjtcbiAgdHlwZTogVHlwZVN0eWxlO1xuICBwcmlvcml0eTogbnVtYmVyO1xuICBjc3M6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIGdsb2JhbCB0aGVtZSAqL1xuICBjbGFzc2VzPzoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogcmVxdWlyZVVwZGF0ZSAqL1xuICBjbGFzc2VzV2l0aFRoZW1lPzoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICAgIH0gfCBzdHJpbmdcbiAgfTtcbiAgcmVxdWlyZVVwZGF0ZT86IGJvb2xlYW47XG4gIGlkOiBzdHJpbmc7XG59XG5cbmxldCBuZXh0Q2xhc3NJZCA9IDA7XG5sZXQgbmV4dEtleUZyYW1lSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNJbkRvY3VtZW50IHtcbiAgc3R5bGVzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXTogTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD5cbiAgfSA9IHt9O1xuICBzdHlsZUNvbnRhaW5lcnMgPSBuZXcgTWFwPG51bWJlciwgSFRNTEVsZW1lbnQ+KCk7XG4gIHN0eWxlRWxlbWVudEdsb2JhbE1hcCA9IG5ldyBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PigpO1xufVxuXG5jb25zdCBUSEVNRV9NQVAgPSBuZXcgTWFwPHN0cmluZywge1xuICBiYXNlOiBzdHJpbmdcbiAgY2hhbmdlOiBzdHJpbmcgfCBudWxsXG59PigpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lVmFyaWFibGVzO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG4gIGluaXRpYWxUaGVtZTogc3RyaW5nO1xuICBlbGVtZW50czogTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD47XG4gIF9lbGVtZW50c01hcCA9IG5ldyBNYXA8YW55LCBIVE1MU3R5bGVFbGVtZW50PigpO1xuICBwcml2YXRlIHRoZW1lTWFwID0gVEhFTUVfTUFQO1xuICBwcml2YXRlIGlzRGV2T3JTZXJ2ZXIgPSBpc0Rldk1vZGUoKSB8fCAhUGxhdGZvcm0uaXNCcm93c2VyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVzSW5Eb2N1bWVudDogU3R5bGVzSW5Eb2N1bWVudCxcbiAgICBwdWJsaWMgY29yZTogQ29yZVRoZW1lLFxuICAgIEBJbmplY3QoTFlfVEhFTUVfTkFNRSkgdGhlbWVOYW1lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVOYW1lKTtcbiAgICAgIHRoaXMuX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGVtZU5hbWUgaW4gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1xuICAgICAgPyB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV1cbiAgICAgIDogdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdID0gbmV3IE1hcCgpO1xuICAgICAgaWYgKCF0aGlzLmluaXRpYWxUaGVtZSkge1xuICAgICAgICB0aGlzLmluaXRpYWxUaGVtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudGhlbWVNYXAuaGFzKHRoaXMuaW5pdGlhbFRoZW1lKSkge1xuICAgICAgICB0aGlzLnRoZW1lTWFwLnNldCh0aGlzLmluaXRpYWxUaGVtZSwge1xuICAgICAgICAgIGJhc2U6IHRoaXMuaW5pdGlhbFRoZW1lLFxuICAgICAgICAgIGNoYW5nZTogbnVsbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FkZERlZmF1bHRTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIGFkZFN0eWxlKGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZUNvbnRhaW5lciB8ICgodGhlbWUpID0+IFN0eWxlQ29udGFpbmVyKSB8ICgodGhlbWUpID0+IHN0cmluZykgfCBzdHJpbmcsIGVsPzogYW55LCBpbnN0YW5jZT86IHN0cmluZywgcHJpb3JpdHk/OiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuYWRkQ3NzKGlkLCBzdHlsZSBhcyBhbnksIHByaW9yaXR5KTtcbiAgICBpZiAobmV3Q2xhc3MgPT09IGluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIGlmIChlbCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBwcml2YXRlIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzc25hbWUsIG9sZENsYXNzbmFtZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3MoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzczogc3RyaW5nLCBvbGRDbGFzcz86IHN0cmluZykge1xuICAgIGlmIChuZXdDbGFzcyA9PT0gb2xkQ2xhc3MpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgdGhlbWUuc2V0VGhlbWUoJ3RoZW1lLW5hbWUnKVxcYCBpcyBvbmx5IGF2YWlsYWJsZSBpbiBicm93c2VyIHBsYXRmb3JtYCk7XG4gICAgfVxuICAgIGlmIChuYW0gIT09IHRoaXMuY29uZmlnLm5hbWUpIHtcbiAgICAgIHRoaXMudGhlbWVNYXAuZ2V0KHRoaXMuaW5pdGlhbFRoZW1lKS5jaGFuZ2UgPSBuYW07XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQobmFtKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUFsbFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBUb2dnbGUgcmlnaHQtdG8tbGVmdC9sZWZ0LXRvLXJpZ2h0ICovXG4gIHRvZ2dsZURpcmVjdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jb25maWcuZGlyZWN0aW9uO1xuICAgIHRoaXMuY29uZmlnLmRpcmVjdGlvbiA9IGN1cnJlbnQgPT09IERpci5sdHIgPyBEaXIucnRsIDogRGlyLmx0cjtcbiAgICB0aGlzLl91cGRhdGVBbGxTdHlsZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUFsbFN0eWxlcygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVEYXRhID0gU1RZTEVfTUFQNS5nZXQoa2V5KTtcbiAgICAgIGlmIChzdHlsZURhdGEucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlRGF0YS5zdHlsZXMsIHN0eWxlRGF0YS5pZCwgc3R5bGVEYXRhLnByaW9yaXR5LCBzdHlsZURhdGEudHlwZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogYWRkIHN0eWxlLCBzaW1pbGFyIHRvIHNldFVwU3R5bGUgYnV0IHRoaXMgb25seSBhY2NlcHQgc3RyaW5nXG4gICAqIEBwYXJhbSBpZCBpZCBvZiBzdHlsZVxuICAgKiBAcGFyYW0gY3NzIHN0eWxlIGluIHN0cmluZ1xuICAgKi9cbiAgcHJpdmF0ZSBhZGRDc3MoaWQ6IHN0cmluZywgY3NzOiAoKHQpID0+IHN0cmluZykgfCBzdHJpbmcsIHByaW9yaXR5OiBudW1iZXIsIG1lZGlhPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBuZXdJZCA9IGB+PiR7aWR9YDtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50Mihjc3MgYXMgYW55LCBuZXdJZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5Pbmx5T25lLCBmYWxzZSwgbWVkaWEpIGFzIHN0cmluZztcbiAgfVxuICBwcml2YXRlIF9hZGREZWZhdWx0U3R5bGVzKCkge1xuICAgIHRoaXMuYWRkU3R5bGVTaGVldChkZWZhdWx0U3R5bGVzKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBwcmlvcml0eSBwcmlvcml0eSBmb3Igc3R5bGVcbiAgICovXG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgU3R5bGVzLCBwcmlvcml0eT86IG51bWJlcik6IE9ubHlDbGFzc2VzPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIG51bGwsIHByaW9yaXR5LCBUeXBlU3R5bGUuTXVsdGlwbGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVDb250ZW50MjxUPihcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMiB8IFN0eWxlczIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgbWVkaWE/OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3QgbmV3SWQgPSBpZCBhcyBzdHJpbmcgfHwgc3R5bGVzO1xuICAgIGxldCBpc05ld1N0eWxlOiBib29sZWFuO1xuICAgIGlmICghU1RZTEVfTUFQNS5oYXMobmV3SWQpKSB7XG4gICAgICBpc05ld1N0eWxlID0gdHJ1ZTtcbiAgICAgIFNUWUxFX01BUDUuc2V0KG5ld0lkLCB7XG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBzdHlsZXMsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGNzczoge30sXG4gICAgICAgIGlkXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVNYXAgPSBTVFlMRV9NQVA1LmdldChuZXdJZCk7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gdGhpcy5pbml0aWFsVGhlbWU7XG4gICAgY29uc3QgaXNDcmVhdGVkID0gaXNOZXdTdHlsZSB8fCAhKHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhlbWVOYW1lXSk7XG4gICAgaWYgKGlzQ3JlYXRlZCB8fCBmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgLyoqIGNyZWF0ZSBuZXcgc3R5bGUgZm9yIG5ldyB0aGVtZSAqL1xuICAgICAgbGV0IGNzcztcbiAgICAgIGNvbnN0IHRoZW1lTWFwID0gdGhpcy50aGVtZU1hcC5nZXQodGhpcy5pbml0aWFsVGhlbWUpO1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU1hcC5jaGFuZ2UgfHwgdGhlbWVOYW1lKTtcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUgPSB0cnVlO1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVNYXAsIHN0eWxlcyhjb25maWcpLCB0aGVtZU5hbWUsIG51bGwsIHR5cGUsIGNvbmZpZywgbWVkaWEpO1xuICAgICAgICBpZiAoIWZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgICAgc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV0gPSBjc3M7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBjcmVhdGUgYSBuZXcgaWQgZm9yIHN0eWxlIHRoYXQgZG9lcyBub3QgPC08cmVxdWlyZT4tPiBjaGFuZ2VzICovXG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZU1hcCwgc3R5bGVzLCB0aGVtZU5hbWUsIG5ld0lkIGFzIHN0cmluZywgdHlwZSwgY29uZmlnLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMobmV3SWQpKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsID0gdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKGNzcyk7XG4gICAgICAgIGlmIChzdHlsZU1hcC5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyByZXF1aXJlZCBmb3Igd2hlbiBhIHRoZW1lIGNoYW5nZXNcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgbmV3RWwpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZXZPclNlcnZlcikge1xuICAgICAgICAgIC8vIGluIGRldiBtb2RlIG9yIHNlcnZlciBpdCBpcyBub3QgbmVjZXNzYXJ5XG4gICAgICAgICAgLy8gc2luY2UgdGhlIHN0eWxlcyB3aWxsIG5vdCBjaGFuZ2VcbiAgICAgICAgICB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVFbGVtZW50R2xvYmFsTWFwLnNldChuZXdJZCwgbmV3RWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIG5ld0VsKTtcbiAgICAgIH1cbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKTtcbiAgICAgICAgZWwuaW5uZXJUZXh0ID0gY3NzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Rldk9yU2VydmVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIGFwcGVuZCBjaGlsZCBzdHlsZSBpZiBub3QgZXhpc3QgaW4gZG9tXG4gICAgICAgKiBmb3Igc3NyICYgaG1yXG4gICAgICAgKi9cbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMobmV3SWQpKSB7XG4gICAgICAgIGNvbnN0IF9jc3MgPSBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSB8fCBzdHlsZU1hcC5jc3M7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZUVsZW1lbnRHbG9iYWxNYXA7XG4gICAgICAgIGlmIChzdHlsZU1hcC5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgdGhpcy5lbGVtZW50cy5nZXQobmV3SWQpKTtcbiAgICAgICAgfSBlbHNlIGlmICghbWFwLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgICBtYXAuc2V0KG5ld0lkLCB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoX2NzcykpO1xuICAgICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIG1hcC5nZXQobmV3SWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkgPSAwKSB7XG4gICAgY29uc3QgeyBzdHlsZUNvbnRhaW5lcnMgfSA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudDtcbiAgICBpZiAoIXN0eWxlQ29udGFpbmVycy5oYXMocHJpb3JpdHkpKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KGBseS1zLWNgKTtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAncHJpb3JpdHknLCBgJHtwcmlvcml0eX1gKTtcbiAgICAgIH1cbiAgICAgIHN0eWxlQ29udGFpbmVycy5zZXQocHJpb3JpdHksIGVsKTtcbiAgICAgIGlmIChzdHlsZUNvbnRhaW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2RvY3VtZW50LmJvZHksIGVsLCB0aGlzLl9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgICB9XG4gICAgY29uc3QgcmVmQ2hpbGQgPSB0aGlzLmZpbmROb2RlKHByaW9yaXR5KTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2RvY3VtZW50LmJvZHksIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpLCByZWZDaGlsZCk7XG4gICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kTm9kZShpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBzdHlsZUNvbnRhaW5lcnMgfSA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudDtcbiAgICBjb25zdCBrZXlzID0gKEFycmF5LmZyb20oc3R5bGVDb250YWluZXJzLmtleXMoKSkpLnNvcnQoKTtcbiAgICBjb25zdCBrZXkgPSBrZXlzLmZpbmQoXyA9PiBpbmRleCA8IF8pO1xuICAgIHJldHVybiAoa2V5ICE9PSB1bmRlZmluZWQgJiYgc3R5bGVDb250YWluZXJzLmdldChrZXkpKSB8fCB0aGlzLmNvcmUuZmlyc3RFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxlbWVudFN0eWxlKGNzczogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZVRleHQoY3NzKTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZVRleHQpO1xuICAgIHJldHVybiBzdHlsZUVsZW1lbnQ7XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkge1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVzMiB7XG4gIC8qKiBQcmVmaXggbmFtZSAqL1xuICAkbmFtZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXIgfCBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTdHlsZXNGbjIgPSAoVCkgPT4gU3R5bGVzMjtcblxuZXhwb3J0IHR5cGUgU3R5bGVzID0gU3R5bGVzRm4yIHwgU3R5bGVzMjtcblxuZXhwb3J0IGludGVyZmFjZSBLZXlmcmFtZXMge1xuICBbbmFtZTogc3RyaW5nXToge1xuICAgIFtwZXJjZW50OiBudW1iZXJdOiBTdHlsZUNvbnRhaW5lclxuICB9O1xufVxuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoXG4gIHN0eWxlTWFwOiBTdHlsZU1hcDUsXG4gIHN0eWxlczogU3R5bGVzMixcbiAgdGhlbWVOYW1lOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcsXG4gIHR5cGVTdHlsZTogVHlwZVN0eWxlLFxuICB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gIG1lZGlhPzogc3RyaW5nXG4pIHtcbiAgLy8gZm9yIHN0eWxlcyB0eXBlIHN0cmluZ1xuICBpZiAodHlwZVN0eWxlID09PSBUeXBlU3R5bGUuT25seU9uZSkge1xuICAgIC8vIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXdcbiAgICBjb25zdCBjbGFzc05hbWUgPSBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlXG4gICAgPyBzdHlsZU1hcFt0aGVtZU5hbWVdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVdID0gY3JlYXRlTmV4dENsYXNzSWQoKSlcbiAgICA6IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgID8gc3R5bGVNYXAuY2xhc3Nlc1xuICAgICAgOiBzdHlsZU1hcC5jbGFzc2VzID0gY3JlYXRlTmV4dENsYXNzSWQoKTtcbiAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGNzcyA9IGAuJHtjbGFzc05hbWV9eyR7c3R5bGVzfX1gO1xuICAgICAgcmV0dXJuIG1lZGlhID8gdG9NZWRpYShjc3MsIG1lZGlhKSA6IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZXMgPSBzdHlsZVRvU3RyaW5nKGlkLCBzdHlsZXMsIHRoZW1lVmFyaWFibGVzLCBjbGFzc05hbWUgYXMgYW55KTtcbiAgICAgIHJldHVybiBydWxlcztcbiAgICB9XG4gIH1cbiAgLy8gZm9yIG11bHRpcGxlcyBzdHlsZXNcbiAgY29uc3QgY2xhc3Nlc01hcCA9IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSB7fSk7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGNvbnN0IG5hbWUgPSBzdHlsZXMuJG5hbWUgPyBgJHtzdHlsZXMuJG5hbWV9LWAgOiAnJztcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgaWYgKGtleSA9PT0gJyRrZXlmcmFtZXMnKSB7XG4gICAgICAgIGNvbnRlbnQgKz0ga2V5ZnJhbWVzVG9TdHJpbmcobmFtZSwgY2xhc3Nlc01hcCwgdmFsdWUgYXMgS2V5ZnJhbWVzLCB0aGVtZVZhcmlhYmxlcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgICAgY29uc3QgY3VycmVudENsYXNzTmFtZSA9IGtleSBpbiBjbGFzc2VzTWFwXG4gICAgICAgID8gY2xhc3Nlc01hcFtrZXldXG4gICAgICAgIDogY2xhc3Nlc01hcFtrZXldID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGB5LSR7bmFtZX0ke2tleX0tJHtjcmVhdGVOZXh0Q2xhc3NJZCgpfWApIDogY3JlYXRlTmV4dENsYXNzSWQoKTtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcoa2V5LCB2YWx1ZSBhcyBTdHlsZXMyLCB0aGVtZVZhcmlhYmxlcywgY3VycmVudENsYXNzTmFtZSk7XG4gICAgICAgIGNvbnRlbnQgKz0gc3R5bGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXBsYWNlUmVmcyhjb250ZW50LCBjbGFzc2VzTWFwKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVJlZnMoc3RyOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVGX1JFR19FWFAsIChtYXRjaCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBkYXRhW3Rva2VuXTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gYC4ke2RhdGFbdG9rZW5dfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhW2BA0LMuLT4tJHt0b2tlbn1gXTtcbiAgICB9XG4gIH1cbiAgKTtcbn1cblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhrZXk6IHN0cmluZywgb2I6IE9iamVjdCwgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBjdXJyZW50S2V5OiBzdHJpbmcsIHBhcmVudEtleT86IHN0cmluZykge1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgc3ViQ29udGVudCA9ICcnO1xuICBsZXQga2V5QW5kVmFsdWUgPSAnJztcbiAgbGV0IG5ld0tleTtcbiAgaWYgKHBhcmVudEtleSkge1xuICAgIGlmIChjdXJyZW50S2V5LmluZGV4T2YoJyYnKSAhPT0gLTEpIHtcbiAgICAgIG5ld0tleSA9IGN1cnJlbnRLZXkucmVwbGFjZSgvJi9nLCBwYXJlbnRLZXkpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgbmV3S2V5ID0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdLZXkgPSBgJHtwYXJlbnRLZXl9ICR7Y3VycmVudEtleX1gO1xuICAgIH1cbiAgfSBlbHNlIGlmIChrZXkgPT09ICdAZ2xvYmFsJykge1xuICAgIG5ld0tleSA9IGtleTtcbiAgfSBlbHNlIHtcbiAgICBuZXdLZXkgPSBgLiR7Y3VycmVudEtleX1gO1xuICB9XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgLy8gQ2hlY2sgaWYgaXMgT2JqZWN0IGxpdGVyYWxcbiAgICAgIGlmIChlbGVtZW50LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgc3ViQ29udGVudCArPSBzdHlsZVRvU3RyaW5nKGtleSwgZWxlbWVudCBhcyBTdHlsZXMyLCB0aGVtZVZhcmlhYmxlcywgc3R5bGVLZXksIG5ld0tleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlBbmRWYWx1ZSArPSBjb252ZXJ0VG9TdHlsZVZhbHVlKHN0eWxlS2V5LCBlbGVtZW50LCB0aGVtZVZhcmlhYmxlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChrZXlBbmRWYWx1ZSkge1xuICAgIGlmIChuZXdLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgICBrZXlBbmRWYWx1ZSA9IGAke3BhcmVudEtleX17JHtrZXlBbmRWYWx1ZX19YDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudEtleSAmJiBwYXJlbnRLZXkgPT09ICdAZ2xvYmFsJykge1xuICAgICAgY29udGVudCArPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgfVxuICAgIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICB9XG4gIHJldHVybiBjb250ZW50ICsgc3ViQ29udGVudDtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvU3R5bGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpIHtcbiAgY29uc3QgbmV3U3R5bGVLZXkgPSBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlQ2FjaGUoa2V5LCB0aGVtZVZhcmlhYmxlcyk7XG4gIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICBsZXQgbGluID0gJyc7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGluICs9IGAke25ld1N0eWxlS2V5fToke3ZhbHVlW2luZGV4XX07YDtcbiAgICB9XG4gICAgcmV0dXJuIGxpbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7bmV3U3R5bGVLZXl9OiR7dmFsdWV9O2A7XG4gIH1cbn1cblxuZnVuY3Rpb24ga2V5ZnJhbWVzVG9TdHJpbmcoc3R5bGVOYW1lOiBzdHJpbmcsIGtleXNNYXA6IG9iamVjdCwga2V5ZnJhbWVzOiBLZXlmcmFtZXMsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBsZXQgY29udGVudCA9ICcnO1xuXG4gIGZvciAoY29uc3QgbmFtZSBpbiBrZXlmcmFtZXMpIHtcbiAgICBpZiAoa2V5ZnJhbWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBjb25zdCBrZXlmcmFtZSA9IGtleWZyYW1lc1tuYW1lXTtcbiAgICAgIC8vIFNvbWV0aW1lcyB0aGUgbmFtZSBvZiBhIGNsYXNzIGNhbiBiZSB0aGUgc2FtZSBhcyB0aGUgbmFtZSBvZiBhIGtleWZyYW1lLFxuICAgICAgLy8gc28gd2UgYWRkIGEgY2hhcmFjdGVyIHRvIGJlIGRpZmZlcmVudFxuICAgICAgY29uc3QgbmV3VW5pcXVlTmFtZSA9IGBA0LMuLT4tJHtuYW1lfWA7XG4gICAgICAvLyBzZXQgbmV3IGlkIGlmIG5vdCBleGlzdFxuICAgICAgY29uc3QgbmV3TmFtZSA9IG5ld1VuaXF1ZU5hbWUgaW4ga2V5c01hcFxuICAgICAgPyBrZXlzTWFwW25ld1VuaXF1ZU5hbWVdXG4gICAgICA6IGtleXNNYXBbbmV3VW5pcXVlTmFtZV0gPSBpc0Rldk1vZGUoKSA/IHRvQ2xhc3NOYW1lVmFsaWQoYCR7c3R5bGVOYW1lfSR7bmFtZX0tJHtjcmVhdGVOZXh0S2V5ZnJhbWVJZCgpfS12YCkgOiBjcmVhdGVOZXh0S2V5ZnJhbWVJZCgpO1xuICAgICAgY29udGVudCArPSBgQGtleWZyYW1lcyAke25ld05hbWV9e2A7XG4gICAgICBmb3IgKGNvbnN0IHBlcmNlbnQgaW4ga2V5ZnJhbWUpIHtcbiAgICAgICAgaWYgKGtleWZyYW1lLmhhc093blByb3BlcnR5KHBlcmNlbnQpKSB7XG4gICAgICAgICAgY29udGVudCArPSBgJHtwZXJjZW50fSV7YDtcbiAgICAgICAgICBjb25zdCBzdHlsZXMgPSBrZXlmcmFtZVtwZXJjZW50XTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICAgICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICBjb25zdCB2YWwgPSBzdHlsZXNba2V5XTtcbiAgICAgICAgICAgICAgY29udGVudCArPSBjb252ZXJ0VG9TdHlsZVZhbHVlKGtleSwgdmFsIGFzIHN0cmluZyB8IHN0cmluZ1tdLCB0aGVtZVZhcmlhYmxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRlbnQgKz0gYH1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGB9YDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5EZXByZWNhdGVkS2V5U3R5bGUoc3RyOiBzdHJpbmcsIGtleTogc3RyaW5nLCB0bzogc3RyaW5nKSB7XG4gIGNvbnNvbGUud2FybihgU3R5bGUga2V5IFxcYCR7a2V5fVxcYCBkZXByZWNhdGVkIGZvciBcXGAke3N0cn1cXGAsIGNoYW5nZSBcXGAke2tleX1cXGAgdG8gXFxgJHt0b31cXGBcXG5gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGUoc3RyOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBjb25zdCBoeXBoZW5DYXNlID0gdG9IeXBoZW5DYXNlKHN0cik7XG4gIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuc3RhcnQpICE9PSAtMSkge1xuICAgIHdhcm5EZXByZWNhdGVkS2V5U3R5bGUoc3RyLCBEaXJBbGlhcy5zdGFydCwgRGlyQWxpYXMuYmVmb3JlKTtcbiAgICByZXR1cm4gZGlyQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuc3RhcnQpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5lbmQpICE9PSAtMSkge1xuICAgIHdhcm5EZXByZWNhdGVkS2V5U3R5bGUoc3RyLCBEaXJBbGlhcy5lbmQsIERpckFsaWFzLmFmdGVyKTtcbiAgICByZXR1cm4gZGlyQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuZW5kKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuYmVmb3JlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZGlyQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuYmVmb3JlKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuYWZ0ZXIpICE9PSAtMSkge1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5hZnRlcik7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKFlQb3NpdGlvbi5hYm92ZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbkNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIFlQb3NpdGlvbi5hYm92ZSwgVE9QKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoWVBvc2l0aW9uLmJlbG93KSAhPT0gLTEpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgWVBvc2l0aW9uLmJlbG93LCBCT1RUT00pO1xuICB9XG4gIHJldHVybiBoeXBoZW5DYXNlO1xufVxuXG5mdW5jdGlvbiB0b0NsYXNzTmFtZVZhbGlkKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IHMgPSBzdHIucmVwbGFjZSgvXlswLTldfFteXFx3XFwtXS9nLCBfID0+IHtcbiAgICByZXR1cm4gYF8ke18uY2hhckNvZGVBdCgwKX1gO1xuICB9KTtcbiAgcmV0dXJuIHRvSHlwaGVuQ2FzZShzKTtcbn1cblxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChnKSA9PiBgLSR7Z1swXS50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlQ2FjaGUoc3RyOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyk6IHN0cmluZyB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIHJldHVybiBzdHIgaW4gbWFwXG4gID8gbWFwW3N0cl1cbiAgOiBtYXBbc3RyXSA9IGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGUoc3RyLCB0aGVtZVZhcmlhYmxlcyk7XG59XG5cbmNvbnN0IGlnbm9yZUNTU0tFWSA9IHtcbiAgJ2JyZWFrLWFmdGVyJzogJ2JyZWFrLWFmdGVyJyxcbiAgJ2JyZWFrLWJlZm9yZSc6ICdicmVhay1iZWZvcmUnLFxuICAncGFnZS1icmVhay1hZnRlcic6ICdwYWdlLWJyZWFrLWFmdGVyJyxcbiAgJ3BhZ2UtYnJlYWstYmVmb3JlJzogJ3BhZ2UtYnJlYWstYmVmb3JlJ1xufTtcblxuY29uc3QgU1RZTEVfS0VZU19NQVAgPSB7XG4gIHJ0bDoge1xuICAgIC4uLmlnbm9yZUNTU0tFWVxuICB9LFxuICBsdHI6IHtcbiAgICAuLi5pZ25vcmVDU1NLRVlcbiAgfVxufTtcblxuY29uc3QgQk9UVE9NID0gJ2JvdHRvbSc7XG5jb25zdCBUT1AgPSAndG9wJztcblxuZnVuY3Rpb24gZGlyQ2FjaGUob3JpZ2luYWwsIHZhbDogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIGRpckFsaWFzOiBEaXJBbGlhcykge1xuICBjb25zdCBtYXAgPSBTVFlMRV9LRVlTX01BUFt0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb25dO1xuICAvLyBSZXBsYWNlIGluIG9yaWdpbmFsLCBmb3IgZG8gbm90IHJlcGVhdCB0aGlzIGFnYWluXG4gIHJldHVybiBtYXBbb3JpZ2luYWxdID0gdmFsLnJlcGxhY2UoZGlyQWxpYXMsIHRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbihkaXJBbGlhcykpO1xufVxuXG5mdW5jdGlvbiBZUG9zaXRpb25DYWNoZShvcmlnaW5hbCwgdmFsOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgcG9zOiBZUG9zaXRpb24sIHRvOiAndG9wJyB8ICdib3R0b20nKSB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIC8vIFJlcGxhY2UgaW4gb3JpZ2luYWwsIGZvciBkbyBub3QgcmVwZWF0IHRoaXMgYWdhaW5cbiAgcmV0dXJuIG1hcFtvcmlnaW5hbF0gPSB2YWwucmVwbGFjZShwb3MsIHRvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHRvTWVkaWEoY3NzOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHtjc3N9fWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5leHRDbGFzc0lkKCkge1xuICByZXR1cm4gYGkkeyhuZXh0Q2xhc3NJZCsrKS50b1N0cmluZygzNil9YDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU5leHRLZXlmcmFtZUlkKCkge1xuICByZXR1cm4gYGskeyhuZXh0S2V5RnJhbWVJZCsrKS50b1N0cmluZygzNil9YDtcbn1cblxudHlwZSBPbmx5Q2xhc3NlczxUPiA9IFJlY29yZDwoXG4gIEV4Y2x1ZGU8KFQgZXh0ZW5kcyAoKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID8gKGtleW9mIFJldHVyblR5cGU8VD4pIDoga2V5b2YgVCksXG4gICckbmFtZScgfCAnJHNoZWV0JyB8ICcka2V5ZnJhbWVzJz5cbiksIHN0cmluZz47XG5cbiJdfQ==