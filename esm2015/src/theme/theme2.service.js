/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject, isDevMode } from '@angular/core';
import { LY_THEME_NAME } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { Platform } from '../platform';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
/** @type {?} */
const REF_REG_EXP = /\{([\w-]+)\}/g;
/**
 * @record
 */
function StylesElementMap() { }
/** @type {?} */
StylesElementMap.prototype.el;
/** @enum {number} */
const TypeStyle = {
    Multiple: 0,
    OnlyOne: 1,
};
TypeStyle[TypeStyle.Multiple] = 'Multiple';
TypeStyle[TypeStyle.OnlyOne] = 'OnlyOne';
/** @type {?} */
const STYLE_MAP4 = {};
/**
 * @record
 */
export function StyleMap4() { }
/** @type {?} */
const STYLE_MAP = {};
/** @type {?} */
const CLASSES_MAP = {};
/** @type {?} */
const STYLE_KEYS_MAP = {};
/** @type {?} */
let nextId = 0;
export class StylesInDocument {
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
/** @nocollapse */ StylesInDocument.ngInjectableDef = i0.defineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
if (false) {
    /** @type {?} */
    StylesInDocument.prototype.styles;
    /** @type {?} */
    StylesInDocument.prototype.styleContainers;
}
export class LyTheme2 {
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
        /** @type {?} */
        const name = this.config.name;
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
        /** @type {?} */
        const name = this.config.name;
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
        /** @type {?} */
        const newClass = this.addCss(id, /** @type {?} */ (style), priority);
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
        /** @type {?} */
        const currentStyles = this.elements;
        for (const key in currentStyles) {
            if (currentStyles.hasOwnProperty(key)) {
                /** @type {?} */
                const styleData = STYLE_MAP4[key];
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
        /** @type {?} */
        const newId = `~>${id}`;
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
        /** @type {?} */
        const newId = id || 'global';
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
        /** @type {?} */
        const styleMap = (id in STYLE_MAP4
            ? STYLE_MAP4[id]
            : STYLE_MAP4[id] = {
                priority,
                styles,
                type,
                css: {}
            });
        /** @type {?} */
        const themeName = this.initialTheme;
        /** @type {?} */
        const isCreated = (id in CLASSES_MAP) || CLASSES_MAP[themeName][id];
        if (!isCreated || forChangeTheme) {
            /** *
             * create new style for new theme
              @type {?} */
            let css;
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
            /** @type {?} */
            const el = this.elements[id]
                ? this.elements[id]
                : this.elements[id] = this._createElementStyle(css);
            if (forChangeTheme) {
                el.innerText = css;
            }
            else {
                this.core.renderer.appendChild(this._createStyleContainer(priority), el);
            }
        }
        /** @type {?} */
        const classes = typeof CLASSES_MAP[id] === 'string'
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
    { type: Injectable },
];
/** @nocollapse */
LyTheme2.ctorParameters = () => [
    { type: StylesInDocument },
    { type: CoreTheme },
    { type: undefined, decorators: [{ type: Inject, args: [LY_THEME_NAME,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /** @type {?} */
    LyTheme2.prototype.config;
    /** @type {?} */
    LyTheme2.prototype._styleMap;
    /** @type {?} */
    LyTheme2.prototype.prefix;
    /** @type {?} */
    LyTheme2.prototype.initialTheme;
    /** @type {?} */
    LyTheme2.prototype.elements;
    /** @type {?} */
    LyTheme2.prototype._styleMap2;
    /** @type {?} */
    LyTheme2.prototype.stylesInDocument;
    /** @type {?} */
    LyTheme2.prototype.core;
    /** @type {?} */
    LyTheme2.prototype._document;
}
/**
 * @record
 */
export function StyleContainer() { }
/**
 * @record
 */
export function Styles2() { }
/** @typedef {?} */
var StylesFn2;
export { StylesFn2 };
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
        /** *
         * use current class or set new
          @type {?} */
        const className = CLASSES_MAP[id]
            ? CLASSES_MAP[id] = _classes_ || createNextId()
            : CLASSES_MAP[themeName][id] = _classes_ || createNextId();
        if (typeof styles === 'string') {
            /** @type {?} */
            const css = `.${className}{${styles}}`;
            // STYLE_MAP4[id].rules = styles;
            return media ? toMedia(css, media) : css;
        }
        else {
            /** @type {?} */
            const rules = styleToString(id, styles, /** @type {?} */ (className));
            return rules;
        }
    }
    /** @type {?} */
    let content = '';
    /** @type {?} */
    const classes = CLASSES_MAP[id]
        ? CLASSES_MAP[id] = _classes_ || {}
        : CLASSES_MAP[themeName][id] = _classes_ || {};
    for (const key in styles) {
        if (styles.hasOwnProperty(key)) {
            /** @type {?} */
            const value = styles[key];
            if (typeof value === 'object') {
                /** @type {?} */
                const className = classes[key] || (classes[key] = isDevMode() ? toClassNameValid(`${id}---${key}-${createNextId()}`) : createNextId());
                /** @type {?} */
                const style = styleToString(key, /** @type {?} */ (value), className);
                content += style;
            }
            else {
                console.log('value is string', value);
            }
        }
    }
    return replaceRefs(content, classes);
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
 * @param {?} currentKey
 * @param {?=} parentKey
 * @return {?}
 */
function styleToString(key, ob, currentKey, parentKey) {
    /** @type {?} */
    let content = '';
    /** @type {?} */
    let subContent = '';
    /** @type {?} */
    let keyAndValue = '';
    /** @type {?} */
    let newKey;
    if (parentKey && currentKey.indexOf('&') !== -1) {
        newKey = currentKey.replace('&', parentKey);
    }
    else if (key === '@global') {
        newKey = key;
    }
    else {
        newKey = currentKey;
    }
    for (const styleKey in ob) {
        if (ob.hasOwnProperty(styleKey)) {
            /** @type {?} */
            const element = ob[styleKey];
            if (typeof element === 'object') {
                subContent += styleToString(key, /** @type {?} */ (element), styleKey, newKey);
            }
            else {
                /** @type {?} */
                const newStyleKey = toHyphenCaseCache(styleKey);
                keyAndValue += `${newStyleKey}:${element};`;
            }
        }
    }
    // if (!parentKey) {
    //   console.log({currentKey, key, subContent});
    // }
    if (keyAndValue) {
        if (newKey.indexOf('@media') === 0) {
            content += `${newKey}`;
            keyAndValue = `.${parentKey}{${keyAndValue}}`;
        }
        else if (parentKey && parentKey === '@global') {
            content += `${currentKey}`;
        }
        else {
            content += `.${newKey}`;
        }
        content += `{${keyAndValue}}`;
    }
    return content + subContent;
}
/**
 * @deprecated
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function get(obj, path) {
    /** @type {?} */
    const _path = path instanceof Array ? path : path.split(':');
    for (let i = 0; i < _path.length; i++) {
        obj = obj[_path[i]] || path;
    }
    return typeof obj === 'string' ? /** @type {?} */ (obj) : /** @type {?} */ (obj['default']);
}
/**
 * @param {?} str
 * @return {?}
 */
export function toHyphenCase(str) {
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
function createNextId() {
    return `e${(nextId++).toString(36)}`;
}
/** @typedef {?} */
var IClasses;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFZLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFM0MsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDOzs7Ozs7Ozs7SUFPbEMsV0FBUTtJQUNSLFVBQU87O29CQURQLFFBQVE7b0JBQ1IsT0FBTzs7QUFFVCxNQUFNLFVBQVUsR0FBYyxFQUFFLENBQUM7Ozs7OztBQTRCakMsTUFBTSxTQUFTLEdBRVgsRUFBRSxDQUFDOztBQUNQLE1BQU0sV0FBVyxHQUliLEVBQUUsQ0FBQzs7QUFDUCxNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7O0FBQzFCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQVNmLE1BQU07O3NCQUtBLEVBQUU7K0JBQ1ksSUFBSSxHQUFHLEVBQXVCOzs7O1lBVGpELFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7O0FBV0QsTUFBTTs7Ozs7OztJQWNKLFlBQ1Usa0JBQ0QsTUFDZ0IsU0FBUyxFQUNOLFNBQWM7UUFIaEMscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNqQixTQUFJLEdBQUosSUFBSTtRQUVlLGNBQVMsR0FBVCxTQUFTLENBQUs7c0JBZmpDLEdBQUc7UUFpQlYsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFNB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QUMzQyxPQUFPLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQzlCLENBQUMsQ0FBQztJQUNILE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3hCOzs7OztBQUVELDJCQUEyQixHQUFXO0lBQ3BDLE9BQU8sR0FBRyxJQUFJLGNBQWM7UUFDNUIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7UUFDckIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDM0M7Ozs7O0FBRUQsTUFBTSxnQ0FBZ0MsR0FBVztJQUMvQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVDOzs7Ozs7QUFFRCxpQkFBaUIsR0FBVyxFQUFFLEtBQWE7SUFDekMsT0FBTyxVQUFVLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQztDQUNsQzs7OztBQUVEO0lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztDQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgSW5qZWN0LCBPcHRpb25hbCwgaXNEZXZNb2RlLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3R5bGUsIFN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBSRUZfUkVHX0VYUCA9IC9cXHsoW1xcdy1dKylcXH0vZztcblxuaW50ZXJmYWNlIFN0eWxlc0VsZW1lbnRNYXAge1xuICBlbDogYW55O1xufVxuXG5lbnVtIFR5cGVTdHlsZSB7XG4gIE11bHRpcGxlLFxuICBPbmx5T25lXG59XG5jb25zdCBTVFlMRV9NQVA0OiBTdHlsZU1hcDQgPSB7fTtcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVNYXA0IHtcbiAgW2lkOiBzdHJpbmddOiB7XG4gICAgc3R5bGVzOiBTdHlsZXNGbjI8YW55PiB8IFN0eWxlczJcbiAgICB0eXBlOiBUeXBlU3R5bGVcbiAgICBwcmlvcml0eTogbnVtYmVyXG4gICAgY3NzOiB7XG4gICAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgICB9IHwgc3RyaW5nXG4gICAgcmVxdWlyZVVwZGF0ZT86IGJvb2xlYW5cbiAgfTtcbn1cblxuLy8gaW50ZXJmYWNlIFN0eWxlTWFwMDMge1xuLy8gICBbaWQ6IHN0cmluZ106IHsgLy8gZXhhbXBsZTogbHlUYWJzXG4vLyAgICAgc3R5bGVzOiBTdHlsZXNGbjI8YW55PiB8IFN0eWxlczIsXG4vLyAgICAgbWVkaWE/OiBzdHJpbmcsXG4vLyAgICAgdHlwZVN0eWxlPzogVHlwZVN0eWxlLFxuLy8gICAgIHRoZW1lczogeyAvLyBleGFtcGxlOiBtaW5pbWEtZGFya1xuLy8gICAgICAgLyoqIENzcyAqL1xuLy8gICAgICAgZGVmYXVsdD86IHN0cmluZyxcbi8vICAgICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHN0cmluZ1xuLy8gICAgIH1cbi8vICAgfTtcbi8vIH1cblxuLy8gY29uc3QgU1RZTEVfTUFQXzAzOiBTdHlsZU1hcDAzID0ge30gYXMgYW55O1xuXG5jb25zdCBTVFlMRV9NQVA6IHtcbiAgW2tleTogc3RyaW5nXTogTWFwPHN0cmluZywgU3R5bGVzRWxlbWVudE1hcD5cbn0gPSB7fTtcbmNvbnN0IENMQVNTRVNfTUFQOiB7XG4gIFtpZE9yVGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgW2NsYXNzTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmdcbn0gPSB7fTtcbmNvbnN0IFNUWUxFX0tFWVNfTUFQID0ge307XG5sZXQgbmV4dElkID0gMDtcbi8vIGZ1bmN0aW9uIGZuKCkge1xuLy8gICByZXR1cm4gQ0xBU1NFU19NQVA7XG4vLyB9XG4vLyBjb25zb2xlLmxvZyh7Zm59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVzSW5Eb2N1bWVudCB7XG4gIHN0eWxlczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IEhUTUxTdHlsZUVsZW1lbnRcbiAgICB9XG4gIH0gPSB7fTtcbiAgc3R5bGVDb250YWluZXJzID0gbmV3IE1hcDxudW1iZXIsIEhUTUxFbGVtZW50PigpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lQ29uZmlnO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG4gIHByZWZpeCA9ICdrJztcbiAgaW5pdGlhbFRoZW1lOiBzdHJpbmc7XG4gIGVsZW1lbnRzOiB7XG4gICAgW2tleTogc3RyaW5nXTogSFRNTFN0eWxlRWxlbWVudFxuICB9O1xuICBwcml2YXRlIF9zdHlsZU1hcDI6IE1hcDxzdHJpbmcsIFN0eWxlc0VsZW1lbnRNYXA+O1xuXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBDTEFTU0VTX01BUDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVzSW5Eb2N1bWVudDogU3R5bGVzSW5Eb2N1bWVudCxcbiAgICBwdWJsaWMgY29yZTogQ29yZVRoZW1lLFxuICAgIEBJbmplY3QoTFlfVEhFTUVfTkFNRSkgdGhlbWVOYW1lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLl9zdHlsZU1hcDIgPSB0aGVtZU5hbWUgaW4gU1RZTEVfTUFQXG4gICAgICA/IFNUWUxFX01BUFt0aGVtZU5hbWVdXG4gICAgICA6IFNUWUxFX01BUFt0aGVtZU5hbWVdID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICB0aGlzLl9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gdGhlbWVOYW1lIGluIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNcbiAgICAgID8gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdXG4gICAgICA6IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXSA9IHt9O1xuICAgICAgdGhpcy5fY3JlYXRlSW5zdGFuY2VGb3JUaGVtZSh0aGVtZU5hbWUpO1xuICAgICAgaWYgKCF0aGlzLmluaXRpYWxUaGVtZSkge1xuICAgICAgICB0aGlzLmluaXRpYWxUaGVtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldFVwU3R5bGU8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/EuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnk8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/EuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIGFkZFN0eWxlPFQ+KGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZTxUPiwgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5hZGRDc3MoaWQsIHN0eWxlIGFzIGFueSwgcHJpb3JpdHkpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgfVxuICAgIGVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgLy8gdGhpcy5fc3R5bGVNYXAyLmZvckVhY2goZGF0YVN0eWxlID0+IHtcbiAgICAvLyAgIGRhdGFTdHlsZS5lbC5pbm5lclRleHQgPSB0aGlzLl9jcmVhdGVTdHlsZUMgb250ZW50MihkYXRhU3R5bGUuc3R5bGVzLCBkYXRhU3R5bGUuaWQpO1xuICAgIC8vIH0pO1xuICAgIC8vIGZvciAoY29uc3Qga2V5IGluIFNUWUxFX01BUF8wMykge1xuICAgIC8vICAgaWYgKFNUWUxFX01BUF8wMy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgLy8gICAgIGNvbnN0IHsgc3R5bGVzLCB0eXBlU3R5bGUsIG1lZGlhIH0gPSBTVFlMRV9NQVBfMDNba2V5XTtcbiAgICAvLyAgICAgLy8gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIGtleSwgdHlwZVN0eWxlLCB0aGlzLmNvcmUucmVuZGVyZXIsIHRydWUsIG1lZGlhKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgdGhpcy5fc3R5bGVNYXAuZm9yRWFjaCgoZGF0YVN0eWxlKSA9PiB7XG4gICAgICBkYXRhU3R5bGUuc3R5bGVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuY29yZS5fY3JlYXRlU3R5bGVDb250ZW50KHRoaXMuY29uZmlnLCBkYXRhU3R5bGUuc3R5bGUsIGRhdGFTdHlsZS5pZCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycywgc3R5bGVzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgY29uc3QgY3VycmVudFN0eWxlcyA9IHRoaXMuZWxlbWVudHM7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY3VycmVudFN0eWxlcykge1xuICAgICAgaWYgKGN1cnJlbnRTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBzdHlsZURhdGEgPSBTVFlMRV9NQVA0W2tleV07XG4gICAgICAgIGlmIChzdHlsZURhdGEucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVEYXRhLnN0eWxlcywga2V5LCBzdHlsZURhdGEucHJpb3JpdHksIHN0eWxlRGF0YS50eXBlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBtZWRpYSkgYXMgc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBpZCB1bmlxdWUgaWQgZm9yIHN0eWxlIGdyb3VwXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgaWQ/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyKTogSUNsYXNzZXM8VD4ge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgfHwgJ2dsb2JhbCc7XG4gICAgLy8gY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBuZXdJZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBfY3JlYXRlU3R5bGVDb250ZW50MjxUPihcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgbWVkaWE/OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3Qgc3R5bGVNYXAgPSAoaWQgaW4gU1RZTEVfTUFQNFxuICAgID8gU1RZTEVfTUFQNFtpZF1cbiAgICA6IFNUWUxFX01BUDRbaWRdID0ge1xuICAgICAgcHJpb3JpdHksXG4gICAgICBzdHlsZXMsXG4gICAgICB0eXBlLFxuICAgICAgY3NzOiB7fVxuICAgIH0pO1xuICAgIC8vIGNvbnN0IHN0eWxlczIgPSB0aGlzLmNvbmZpZy5uYW1lIGluIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNcbiAgICAvLyA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhpcy5jb25maWcubmFtZV1cbiAgICAvLyA6IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhpcy5jb25maWcubmFtZV0gPSB7fTtcbiAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAvLyAgICdjY2MnLCB0eXBlb2Ygc3R5bGVNYXAuY3NzICE9PSAnc3RyaW5nJyAmJiAhKGlkIGluIHN0eWxlTWFwLmNzcyksXG4gICAgLy8gICB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnb2JqZWN0JyB8fCBDTEFTU0VTX01BUFt0aGlzLmNvbmZpZy5uYW1lXVtpZF1cbiAgICAvLyApO1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHRoaXMuaW5pdGlhbFRoZW1lO1xuICAgIGNvbnN0IGlzQ3JlYXRlZCA9IChpZCBpbiBDTEFTU0VTX01BUCkgfHwgQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF07XG4gICAgaWYgKCFpc0NyZWF0ZWQgfHwgZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgIC8qKiBjcmVhdGUgbmV3IHN0eWxlIGZvciBuZXcgdGhlbWUgKi9cbiAgICAgIGxldCBjc3M7XG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBDTEFTU0VTX01BUFtpZF0gPSB7fTtcbiAgICAgICAgLy8gY29uc3QgdGhlbWVNYXAgPSB0aGlzLmNvbmZpZy5uYW1lIGluIHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgICAgLy8gPyBzdHlsZU1hcC5jbGFzc2VzW3RoaXMuY29uZmlnLm5hbWVdXG4gICAgICAgIC8vIDogc3R5bGVNYXAuY2xhc3Nlc1t0aGlzLmNvbmZpZy5uYW1lXSA9IHt9O1xuICAgICAgICAvLyBjb25zdCBjbGFzc05hbWUgPSBpZCBpbiAodGhlbWVNYXAgYXMgT2JqZWN0KVxuICAgICAgICAvLyA/IHRoZW1lTWFwW2lkXVxuICAgICAgICAvLyA6IHRoZW1lTWFwW2lkXSA9IHRoaXMuX25leHRJZCgpO1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzKHRoaXMuY29uZmlnKSwgdGhlbWVOYW1lLCBpc0NyZWF0ZWQsIGlkLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgICBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogY3JlYXRlIGEgbmV3IGlkIGZvciBzdHlsZSB0aGF0IGRvZXMgbm90IDwtPHJlcXVpcmU+LT4gY2hhbmdlcyAqL1xuICAgICAgICBDTEFTU0VTX01BUFtpZF0gPSB0cnVlIGFzIGFueTtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlcywgdGhlbWVOYW1lLCBpc0NyZWF0ZWQsIGlkLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIHN0eWxlRWxlbWVudCk7XG4gICAgICAvLyBpZiAoIXRoaXMuX3N0eWxlTWFwMi5oYXMoaWQpKSB7XG4gICAgICAvLyAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgLy8gICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgICAgLy8gICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZVRleHQpO1xuICAgICAgLy8gICB0aGlzLl9zdHlsZU1hcDIuc2V0KGlkLCB7XG4gICAgICAvLyAgICAgZWw6IHN0eWxlRWxlbWVudFxuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgID8gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgIDogdGhpcy5lbGVtZW50c1tpZF0gPSB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoXG4gICAgICAgIGNzc1xuICAgICAgKTtcbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBlbC5pbm5lclRleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkpLCBlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgKCEoaWQgaW4gdGhpcy5lbGVtZW50cykpIHtcbiAgICAgIC8vIGNvbnN0IGh0bWxTdHlsZSA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShcbiAgICAgIC8vICAgdHlwZW9mIHN0eWxlTWFwLmNzcyA9PT0gJ3N0cmluZydcbiAgICAgIC8vICAgPyBzdHlsZU1hcC5jc3NcbiAgICAgIC8vICAgOiBzdHlsZU1hcC5jc3NbdGhpcy5jb25maWcubmFtZV1cbiAgICAgIC8vICk7XG4gICAgICAvLyB0aGlzLmVsZW1lbnRzW2lkXSA9IGh0bWxTdHlsZTtcbiAgICAgIC8vIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNvcmUucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBodG1sU3R5bGUpO1xuICAgIC8vIH1cblxuICAgIGNvbnN0IGNsYXNzZXMgPSB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnc3RyaW5nJ1xuICAgID8gQ0xBU1NFU19NQVBbaWRdXG4gICAgOiB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnb2JqZWN0J1xuICAgID8gQ0xBU1NFU19NQVBbaWRdXG4gICAgOiBDTEFTU0VTX01BUFt0aGVtZU5hbWVdW2lkXTtcbiAgICByZXR1cm4gY2xhc3NlcztcblxuICAgIC8vIGNvbnN0IHN0eWxlID0gdGhpcy5fc3R5bGVNYXAyLmdldChpZCk7XG4gICAgLy8gaWYgKCF0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzLmhhcyhpZCkpIHtcbiAgICAvLyAgIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXMuYWRkKGlkKTtcbiAgICAvLyAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNvcmUucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBzdHlsZS5lbCk7XG4gICAgLy8gfVxuICAgIC8vIGlmIChmb3JDaGFuZ2VUaGVtZSAmJiBzdHlsZU1hcC50aGVtZXNbdGhpcy5jb25maWcubmFtZV0pIHtcbiAgICAvLyAgIHN0eWxlLmVsLmlubmVyVGV4dCA9IHN0eWxlTWFwLnRoZW1lc1t0aGlzLmNvbmZpZy5uYW1lXTtcbiAgICAvLyB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoISh0aGVtZU5hbWUgaW4gQ0xBU1NFU19NQVApKSB7XG4gICAgICBDTEFTU0VTX01BUFt0aGVtZU5hbWVdID0ge307XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lcjtcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzOiBTdHlsZXMyLCB0aGVtZU5hbWU6IHN0cmluZywgX2NsYXNzZXNfOiBzdHJpbmcgfCB7fSwgaWQ6IHN0cmluZywgdHlwZVN0eWxlOiBUeXBlU3R5bGUsIG1lZGlhPzogc3RyaW5nKSB7XG4gIC8vIGxldCBuZXdLZXkgPSAnJztcbiAgLy8gY29uc3Qgc3RyaW5nXG4gIC8vIGNvbnN0IHRoZW1lTWFwID0gY2xhc3Nlc1t0aGVtZU5hbWVdID8gY2xhc3Nlc1t0aGVtZU5hbWVdIDogY2xhc3Nlc1t0aGVtZU5hbWVdID0ge307XG4gIGlmICh0eXBlU3R5bGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lKSB7XG4gICAgLyoqIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXcgKi9cbiAgICBjb25zdCBjbGFzc05hbWUgPSBDTEFTU0VTX01BUFtpZF1cbiAgICA/IENMQVNTRVNfTUFQW2lkXSA9IF9jbGFzc2VzXyB8fCBjcmVhdGVOZXh0SWQoKVxuICAgIDogQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF0gPSBfY2xhc3Nlc18gfHwgY3JlYXRlTmV4dElkKCk7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBjc3MgPSBgLiR7Y2xhc3NOYW1lfXske3N0eWxlc319YDtcbiAgICAgIC8vIFNUWUxFX01BUDRbaWRdLnJ1bGVzID0gc3R5bGVzO1xuICAgICAgcmV0dXJuIG1lZGlhID8gdG9NZWRpYShjc3MsIG1lZGlhKSA6IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZXMgPSBzdHlsZVRvU3RyaW5nKGlkLCBzdHlsZXMsIGNsYXNzTmFtZSBhcyBhbnkpO1xuICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH1cbiAgfVxuICBsZXQgY29udGVudCA9ICcnO1xuICAvLyBjb25zdCBjbGFzc2VzTWFwID0gaWQgaW4gdGhlbWVNYXBcbiAgLy8gPyB0aGVtZU1hcFtpZF1cbiAgLy8gOiB0aGVtZU1hcFtpZF0gPSB7fTtcbiAgY29uc3QgY2xhc3NlcyA9IENMQVNTRVNfTUFQW2lkXVxuICA/IENMQVNTRVNfTUFQW2lkXSA9IF9jbGFzc2VzXyB8fCB7fVxuICA6IENMQVNTRVNfTUFQW3RoZW1lTmFtZV1baWRdID0gX2NsYXNzZXNfIHx8IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc2VzW2tleV0gfHwgKGNsYXNzZXNba2V5XSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgJHtpZH0tLS0ke2tleX0tJHtjcmVhdGVOZXh0SWQoKX1gKSA6IGNyZWF0ZU5leHRJZCgpKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZVRvU3RyaW5nKGtleSwgdmFsdWUgYXMgU3R5bGVzMiwgY2xhc3NOYW1lKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBpcyBzdHJpbmcnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXBsYWNlUmVmcyhjb250ZW50LCBjbGFzc2VzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVJlZnMoc3RyOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVGX1JFR19FWFAsIChtYXRjaCwgdG9rZW4pID0+IHtcbiAgICByZXR1cm4gYC4ke2RhdGFbdG9rZW5dfWA7XG4gIH1cbiAgKTtcbn1cblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhrZXk6IHN0cmluZywgb2I6IE9iamVjdCwgY3VycmVudEtleTogc3RyaW5nLCBwYXJlbnRLZXk/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IHN1YkNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGxldCBuZXdLZXk7XG4gIGlmIChwYXJlbnRLZXkgJiYgY3VycmVudEtleS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgbmV3S2V5ID0gY3VycmVudEtleS5yZXBsYWNlKCcmJywgcGFyZW50S2V5KTtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdAZ2xvYmFsJykge1xuICAgIG5ld0tleSA9IGtleTtcbiAgfSBlbHNlIHtcbiAgICBuZXdLZXkgPSBjdXJyZW50S2V5O1xuICB9XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzdWJDb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoa2V5LCBlbGVtZW50IGFzIFN0eWxlczIsIHN0eWxlS2V5LCBuZXdLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3U3R5bGVLZXkgPSB0b0h5cGhlbkNhc2VDYWNoZShzdHlsZUtleSk7XG4gICAgICAgIGtleUFuZFZhbHVlICs9IGAke25ld1N0eWxlS2V5fToke2VsZW1lbnR9O2A7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGlmICghcGFyZW50S2V5KSB7XG4gIC8vICAgY29uc29sZS5sb2coe2N1cnJlbnRLZXksIGtleSwgc3ViQ29udGVudH0pO1xuICAvLyB9XG4gIGlmIChrZXlBbmRWYWx1ZSkge1xuICAgIGlmIChuZXdLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgICBrZXlBbmRWYWx1ZSA9IGAuJHtwYXJlbnRLZXl9eyR7a2V5QW5kVmFsdWV9fWA7XG4gICAgfSBlbHNlIGlmIChwYXJlbnRLZXkgJiYgcGFyZW50S2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ICs9IGAuJHtuZXdLZXl9YDtcbiAgICB9XG4gICAgY29udGVudCArPSBgeyR7a2V5QW5kVmFsdWV9fWA7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQgKyBzdWJDb250ZW50O1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG9ialtfcGF0aFtpXV0gfHwgcGF0aDtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuZnVuY3Rpb24gdG9DbGFzc05hbWVWYWxpZChzdHI6IHN0cmluZykge1xuICBjb25zdCBzID0gc3RyLnJlcGxhY2UoL15bMC05XXxbXlxcd1xcLV0vZywgXyA9PiB7XG4gICAgcmV0dXJuIGBfJHtfLmNoYXJDb2RlQXQoMCl9YDtcbiAgfSk7XG4gIHJldHVybiB0b0h5cGhlbkNhc2Uocyk7XG59XG5cbmZ1bmN0aW9uIHRvSHlwaGVuQ2FzZUNhY2hlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIgaW4gU1RZTEVfS0VZU19NQVBcbiAgPyBTVFlMRV9LRVlTX01BUFtzdHJdXG4gIDogU1RZTEVfS0VZU19NQVBbc3RyXSA9IHRvSHlwaGVuQ2FzZShzdHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gdG9NZWRpYShjc3M6IHN0cmluZywgbWVkaWE6IHN0cmluZykge1xuICByZXR1cm4gYEBtZWRpYSAke21lZGlhfXske2Nzc319YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dElkKCkge1xuICByZXR1cm4gYGUkeyhuZXh0SWQrKykudG9TdHJpbmcoMzYpfWA7XG59XG5cbnR5cGUgSUNsYXNzZXM8VD4gPSBSZWNvcmQ8KFQgZXh0ZW5kcyAoKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID8gKGtleW9mIFJldHVyblR5cGU8VD4pIDoga2V5b2YgVCksIHN0cmluZz47XG4iXX0=