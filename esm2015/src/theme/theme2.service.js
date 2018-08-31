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
const STYLE_MAP4 = {};
/**
 * @record
 */
export function StyleMap4() { }
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
            this.config = this.core.get(themeName);
            this._styleMap = new Map();
            this.elements = themeName in this.stylesInDocument.styles
                ? this.stylesInDocument.styles[themeName]
                : this.stylesInDocument.styles[themeName] = {};
            this._createInstanceForTheme(themeName);
            if (!this.initialTheme) {
                this.initialTheme = this.config.name;
            }
            this._addDefaultStyles();
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
        if (el) {
            if (instance) {
                el.classList.remove(instance);
            }
            el.classList.add(newClass);
        }
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
        if (nam !== this.config.name) {
            this.config = this.core.get(nam);
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
        this.addStyleSheet(defaultStyles, 'ly--defaultStyles');
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
        else {
            /**
                   * for ssr
                   * append child style if not exist in dom
                   */
            if (!Platform.isBrowser && !this.elements[id]) {
                /** @type {?} */
                const _css = styleMap.css[themeName] || styleMap.css;
                /** @type {?} */
                const element = this.elements[id] = this._createElementStyle(_css);
                this.core.renderer.appendChild(this._createStyleContainer(priority), element);
            }
        }
        /** @type {?} */
        const classes = typeof CLASSES_MAP[id] === 'string'
            ? CLASSES_MAP[id]
            : typeof CLASSES_MAP[id] === 'object'
                ? CLASSES_MAP[id]
                : CLASSES_MAP[themeName][id];
        return classes;
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
                const _className = classes[key] || (classes[key] = isDevMode() ? toClassNameValid(`${id}---${key}-${createNextId()}`) : createNextId());
                /** @type {?} */
                const style = styleToString(key, /** @type {?} */ (value), _className);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFM0MsTUFBTSxhQUFhLEdBQUc7SUFDcEIsU0FBUyxFQUFFO1FBQ1Qsc0JBQXNCLEVBQUU7WUFDdEIsb0JBQW9CLEVBQUUsWUFBWTtZQUNsQyxpQkFBaUIsRUFBRSxZQUFZO1lBQy9CLFlBQVksRUFBRSxZQUFZO1NBQzNCO0tBQ0Y7Q0FDRixDQUFDOztBQUVGLE1BQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQzs7O0lBR2xDLFdBQVE7SUFDUixVQUFPOztvQkFEUCxRQUFRO29CQUNSLE9BQU87O0FBRVQsTUFBTSxVQUFVLEdBQWMsRUFBRSxDQUFDOzs7Ozs7QUFZakMsTUFBTSxXQUFXLEdBSWIsRUFBRSxDQUFDOztBQUNQLE1BQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQzs7QUFDMUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBU2YsTUFBTTs7c0JBS0EsRUFBRTsrQkFDWSxJQUFJLEdBQUcsRUFBdUI7Ozs7WUFUakQsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7QUFXRCxNQUFNOzs7Ozs7O0lBYUosWUFDVSxrQkFDRCxNQUNnQixTQUFTLEVBQ04sU0FBYztRQUhoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FB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QUN0QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDakU7Ozs7O0FBRUQsMEJBQTBCLEdBQVc7O0lBQ25DLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDM0MsT0FBTyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUM5QixDQUFDLENBQUM7SUFDSCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN4Qjs7Ozs7QUFFRCwyQkFBMkIsR0FBVztJQUNwQyxPQUFPLEdBQUcsSUFBSSxjQUFjO1FBQzVCLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQzNDOzs7OztBQUVELE1BQU0sZ0NBQWdDLEdBQVc7SUFDL0MsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM1Qzs7Ozs7O0FBRUQsaUJBQWlCLEdBQVcsRUFBRSxLQUFhO0lBQ3pDLE9BQU8sVUFBVSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUM7Q0FDbEM7Ozs7QUFFRDtJQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSwgU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IEludmVydE1lZGlhUXVlcnkgfSBmcm9tICcuLi9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICdAZ2xvYmFsJzoge1xuICAgICcqLCAqOmFmdGVyLCAqOmJlZm9yZSc6IHtcbiAgICAgICctd2Via2l0LWJveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnLW1vei1ib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCdcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IFJFRl9SRUdfRVhQID0gL1xceyhbXFx3LV0rKVxcfS9nO1xuXG5lbnVtIFR5cGVTdHlsZSB7XG4gIE11bHRpcGxlLFxuICBPbmx5T25lXG59XG5jb25zdCBTVFlMRV9NQVA0OiBTdHlsZU1hcDQgPSB7fTtcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVNYXA0IHtcbiAgW2lkOiBzdHJpbmddOiB7XG4gICAgc3R5bGVzOiBTdHlsZXNGbjI8YW55PiB8IFN0eWxlczJcbiAgICB0eXBlOiBUeXBlU3R5bGVcbiAgICBwcmlvcml0eTogbnVtYmVyXG4gICAgY3NzOiB7XG4gICAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgICB9IHwgc3RyaW5nXG4gICAgcmVxdWlyZVVwZGF0ZT86IGJvb2xlYW5cbiAgfTtcbn1cbmNvbnN0IENMQVNTRVNfTUFQOiB7XG4gIFtpZE9yVGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgW2NsYXNzTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmdcbn0gPSB7fTtcbmNvbnN0IFNUWUxFX0tFWVNfTUFQID0ge307XG5sZXQgbmV4dElkID0gMDtcbi8vIGZ1bmN0aW9uIGZuKCkge1xuLy8gICByZXR1cm4gQ0xBU1NFU19NQVA7XG4vLyB9XG4vLyBjb25zb2xlLmxvZyh7Zm59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVzSW5Eb2N1bWVudCB7XG4gIHN0eWxlczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IEhUTUxTdHlsZUVsZW1lbnRcbiAgICB9XG4gIH0gPSB7fTtcbiAgc3R5bGVDb250YWluZXJzID0gbmV3IE1hcDxudW1iZXIsIEhUTUxFbGVtZW50PigpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lQ29uZmlnO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG4gIHByZWZpeCA9ICdrJztcbiAgaW5pdGlhbFRoZW1lOiBzdHJpbmc7XG4gIGVsZW1lbnRzOiB7XG4gICAgW2tleTogc3RyaW5nXTogSFRNTFN0eWxlRWxlbWVudFxuICB9O1xuXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBDTEFTU0VTX01BUDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVzSW5Eb2N1bWVudDogU3R5bGVzSW5Eb2N1bWVudCxcbiAgICBwdWJsaWMgY29yZTogQ29yZVRoZW1lLFxuICAgIEBJbmplY3QoTFlfVEhFTUVfTkFNRSkgdGhlbWVOYW1lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVOYW1lKTtcbiAgICAgIHRoaXMuX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGVtZU5hbWUgaW4gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1xuICAgICAgPyB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV1cbiAgICAgIDogdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdID0ge307XG4gICAgICB0aGlzLl9jcmVhdGVJbnN0YW5jZUZvclRoZW1lKHRoZW1lTmFtZSk7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbFRoZW1lKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRoZW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FkZERlZmF1bHRTdHlsZXMoKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBTdHlsZTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPFQ+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgIHJldHVybiB0aGlzLmNvcmUuX8S4cmVhdGVTdHlsZTxUPih0aGlzLmNvbmZpZywga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlTWFwLCBuYW1lLCB0aGlzLmNvcmUucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cbiAgc2V0VXBTdHlsZVNlY29uZGFyeTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPFQ+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgIHJldHVybiB0aGlzLmNvcmUuX8S4cmVhdGVTdHlsZTxUPih0aGlzLmNvbmZpZywga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlTWFwLCBuYW1lLCB0aGlzLmNvcmUuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKi9cbiAgYWRkU3R5bGUoaWQ6IHN0cmluZywgc3R5bGU6IFN0eWxlQ29udGFpbmVyIHwgKCh0aGVtZSkgPT4gU3R5bGVDb250YWluZXIpIHwgKCh0aGVtZSkgPT4gc3RyaW5nKSB8IHN0cmluZywgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5hZGRDc3MoaWQsIHN0eWxlIGFzIGFueSwgcHJpb3JpdHkpO1xuICAgIGlmIChlbCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgaWYgKG5hbSAhPT0gdGhpcy5jb25maWcubmFtZSkge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRTdHlsZXMgPSB0aGlzLmVsZW1lbnRzO1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3VycmVudFN0eWxlcykge1xuICAgICAgICBpZiAoY3VycmVudFN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29uc3Qgc3R5bGVEYXRhID0gU1RZTEVfTUFQNFtrZXldO1xuICAgICAgICAgIGlmIChzdHlsZURhdGEucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZURhdGEuc3R5bGVzLCBrZXksIHN0eWxlRGF0YS5wcmlvcml0eSwgc3R5bGVEYXRhLnR5cGUsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBtZWRpYSkgYXMgc3RyaW5nO1xuICB9XG4gIHByaXZhdGUgX2FkZERlZmF1bHRTdHlsZXMoKSB7XG4gICAgdGhpcy5hZGRTdHlsZVNoZWV0KGRlZmF1bHRTdHlsZXMsICdseS0tZGVmYXVsdFN0eWxlcycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBpZCB1bmlxdWUgaWQgZm9yIHN0eWxlIGdyb3VwXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgaWQ/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyKTogSUNsYXNzZXM8VD4ge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgfHwgJ2dsb2JhbCc7XG4gICAgLy8gY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBuZXdJZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBfY3JlYXRlU3R5bGVDb250ZW50MjxUPihcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgbWVkaWE/OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3Qgc3R5bGVNYXAgPSAoaWQgaW4gU1RZTEVfTUFQNFxuICAgID8gU1RZTEVfTUFQNFtpZF1cbiAgICA6IFNUWUxFX01BUDRbaWRdID0ge1xuICAgICAgcHJpb3JpdHksXG4gICAgICBzdHlsZXMsXG4gICAgICB0eXBlLFxuICAgICAgY3NzOiB7fVxuICAgIH0pO1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHRoaXMuaW5pdGlhbFRoZW1lO1xuICAgIGNvbnN0IGlzQ3JlYXRlZCA9IChpZCBpbiBDTEFTU0VTX01BUCkgfHwgQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF07XG4gICAgaWYgKCFpc0NyZWF0ZWQgfHwgZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgIC8qKiBjcmVhdGUgbmV3IHN0eWxlIGZvciBuZXcgdGhlbWUgKi9cbiAgICAgIGxldCBjc3M7XG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzKHRoaXMuY29uZmlnKSwgdGhlbWVOYW1lLCBpc0NyZWF0ZWQsIGlkLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgICBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogY3JlYXRlIGEgbmV3IGlkIGZvciBzdHlsZSB0aGF0IGRvZXMgbm90IDwtPHJlcXVpcmU+LT4gY2hhbmdlcyAqL1xuICAgICAgICBDTEFTU0VTX01BUFtpZF0gPSB0cnVlIGFzIGFueTtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlcywgdGhlbWVOYW1lLCBpc0NyZWF0ZWQsIGlkLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgID8gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgIDogdGhpcy5lbGVtZW50c1tpZF0gPSB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoXG4gICAgICAgIGNzc1xuICAgICAgKTtcbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBlbC5pbm5lclRleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkpLCBlbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKlxuICAgICAgICogZm9yIHNzclxuICAgICAgICogYXBwZW5kIGNoaWxkIHN0eWxlIGlmIG5vdCBleGlzdCBpbiBkb21cbiAgICAgICAqL1xuICAgICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgIXRoaXMuZWxlbWVudHNbaWRdKSB7XG4gICAgICAgIGNvbnN0IF9jc3MgPSBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSB8fCBzdHlsZU1hcC5jc3M7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2lkXSA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKTtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHByaW9yaXR5KSwgZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IHR5cGVvZiBDTEFTU0VTX01BUFtpZF0gPT09ICdzdHJpbmcnXG4gICAgPyBDTEFTU0VTX01BUFtpZF1cbiAgICA6IHR5cGVvZiBDTEFTU0VTX01BUFtpZF0gPT09ICdvYmplY3QnXG4gICAgPyBDTEFTU0VTX01BUFtpZF1cbiAgICA6IENMQVNTRVNfTUFQW3RoZW1lTmFtZV1baWRdO1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkgPSAwKSB7XG4gICAgY29uc3QgeyBzdHlsZUNvbnRhaW5lcnMgfSA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudDtcbiAgICBpZiAoIXN0eWxlQ29udGFpbmVycy5oYXMocHJpb3JpdHkpKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KGBseS1zLWNgKTtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAncHJpb3JpdHknLCBgJHtwcmlvcml0eX1gKTtcbiAgICAgIH1cbiAgICAgIHN0eWxlQ29udGFpbmVycy5zZXQocHJpb3JpdHksIGVsKTtcbiAgICAgIGlmIChzdHlsZUNvbnRhaW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2RvY3VtZW50LmJvZHksIGVsLCB0aGlzLl9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgICB9XG4gICAgY29uc3QgcmVmQ2hpbGQgPSB0aGlzLmZpbmROb2RlKHByaW9yaXR5KTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2RvY3VtZW50LmJvZHksIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpLCByZWZDaGlsZCk7XG4gICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kTm9kZShpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBzdHlsZUNvbnRhaW5lcnMgfSA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudDtcbiAgICBjb25zdCBrZXlzID0gKEFycmF5LmZyb20oc3R5bGVDb250YWluZXJzLmtleXMoKSkpLnNvcnQoKTtcbiAgICBjb25zdCBrZXkgPSBrZXlzLmZpbmQoXyA9PiBpbmRleCA8IF8pO1xuICAgIHJldHVybiAoa2V5ICE9PSB1bmRlZmluZWQgJiYgc3R5bGVDb250YWluZXJzLmdldChrZXkpKSB8fCB0aGlzLmNvcmUuZmlyc3RFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxlbWVudFN0eWxlKGNzczogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZVRleHQoY3NzKTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZVRleHQpO1xuICAgIHJldHVybiBzdHlsZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVJbnN0YW5jZUZvclRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCEodGhlbWVOYW1lIGluIENMQVNTRVNfTUFQKSkge1xuICAgICAgQ0xBU1NFU19NQVBbdGhlbWVOYW1lXSA9IHt9O1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVDb250YWluZXIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXI7XG59XG5leHBvcnQgdHlwZSBTdHlsZXNGbjI8VD4gPSAoVCkgPT4gU3R5bGVzMjtcblxuZnVuY3Rpb24gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlczogU3R5bGVzMiwgdGhlbWVOYW1lOiBzdHJpbmcsIF9jbGFzc2VzXzogc3RyaW5nIHwge30sIGlkOiBzdHJpbmcsIHR5cGVTdHlsZTogVHlwZVN0eWxlLCBtZWRpYT86IHN0cmluZykge1xuICBpZiAodHlwZVN0eWxlID09PSBUeXBlU3R5bGUuT25seU9uZSkge1xuICAgIC8qKiB1c2UgY3VycmVudCBjbGFzcyBvciBzZXQgbmV3ICovXG4gICAgY29uc3QgY2xhc3NOYW1lID0gQ0xBU1NFU19NQVBbaWRdXG4gICAgPyBDTEFTU0VTX01BUFtpZF0gPSBfY2xhc3Nlc18gfHwgY3JlYXRlTmV4dElkKClcbiAgICA6IENMQVNTRVNfTUFQW3RoZW1lTmFtZV1baWRdID0gX2NsYXNzZXNfIHx8IGNyZWF0ZU5leHRJZCgpO1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgY3NzID0gYC4ke2NsYXNzTmFtZX17JHtzdHlsZXN9fWA7XG4gICAgICByZXR1cm4gbWVkaWEgPyB0b01lZGlhKGNzcywgbWVkaWEpIDogY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlcyA9IHN0eWxlVG9TdHJpbmcoaWQsIHN0eWxlcywgY2xhc3NOYW1lIGFzIGFueSk7XG4gICAgICByZXR1cm4gcnVsZXM7XG4gICAgfVxuICB9XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGNvbnN0IGNsYXNzZXMgPSBDTEFTU0VTX01BUFtpZF1cbiAgPyBDTEFTU0VTX01BUFtpZF0gPSBfY2xhc3Nlc18gfHwge31cbiAgOiBDTEFTU0VTX01BUFt0aGVtZU5hbWVdW2lkXSA9IF9jbGFzc2VzXyB8fCB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgX2NsYXNzTmFtZSA9IGNsYXNzZXNba2V5XSB8fCAoY2xhc3Nlc1trZXldID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGAke2lkfS0tLSR7a2V5fS0ke2NyZWF0ZU5leHRJZCgpfWApIDogY3JlYXRlTmV4dElkKCkpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcoa2V5LCB2YWx1ZSBhcyBTdHlsZXMyLCBfY2xhc3NOYW1lKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBpcyBzdHJpbmcnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXBsYWNlUmVmcyhjb250ZW50LCBjbGFzc2VzKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVJlZnMoc3RyOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVGX1JFR19FWFAsIChtYXRjaCwgdG9rZW4pID0+IHtcbiAgICByZXR1cm4gYC4ke2RhdGFbdG9rZW5dfWA7XG4gIH1cbiAgKTtcbn1cblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhrZXk6IHN0cmluZywgb2I6IE9iamVjdCwgY3VycmVudEtleTogc3RyaW5nLCBwYXJlbnRLZXk/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IHN1YkNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGxldCBuZXdLZXk7XG4gIGlmIChwYXJlbnRLZXkgJiYgY3VycmVudEtleS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgbmV3S2V5ID0gY3VycmVudEtleS5yZXBsYWNlKCcmJywgcGFyZW50S2V5KTtcbiAgfSBlbHNlIGlmIChrZXkgPT09ICdAZ2xvYmFsJykge1xuICAgIG5ld0tleSA9IGtleTtcbiAgfSBlbHNlIHtcbiAgICBuZXdLZXkgPSBjdXJyZW50S2V5O1xuICB9XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzdWJDb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoa2V5LCBlbGVtZW50IGFzIFN0eWxlczIsIHN0eWxlS2V5LCBuZXdLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3U3R5bGVLZXkgPSB0b0h5cGhlbkNhc2VDYWNoZShzdHlsZUtleSk7XG4gICAgICAgIGtleUFuZFZhbHVlICs9IGAke25ld1N0eWxlS2V5fToke2VsZW1lbnR9O2A7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChrZXlBbmRWYWx1ZSkge1xuICAgIGlmIChuZXdLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgICBrZXlBbmRWYWx1ZSA9IGAuJHtwYXJlbnRLZXl9eyR7a2V5QW5kVmFsdWV9fWA7XG4gICAgfSBlbHNlIGlmIChwYXJlbnRLZXkgJiYgcGFyZW50S2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ICs9IGAuJHtuZXdLZXl9YDtcbiAgICB9XG4gICAgY29udGVudCArPSBgeyR7a2V5QW5kVmFsdWV9fWA7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQgKyBzdWJDb250ZW50O1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG9ialtfcGF0aFtpXV0gfHwgcGF0aDtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuZnVuY3Rpb24gdG9DbGFzc05hbWVWYWxpZChzdHI6IHN0cmluZykge1xuICBjb25zdCBzID0gc3RyLnJlcGxhY2UoL15bMC05XXxbXlxcd1xcLV0vZywgXyA9PiB7XG4gICAgcmV0dXJuIGBfJHtfLmNoYXJDb2RlQXQoMCl9YDtcbiAgfSk7XG4gIHJldHVybiB0b0h5cGhlbkNhc2Uocyk7XG59XG5cbmZ1bmN0aW9uIHRvSHlwaGVuQ2FzZUNhY2hlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIgaW4gU1RZTEVfS0VZU19NQVBcbiAgPyBTVFlMRV9LRVlTX01BUFtzdHJdXG4gIDogU1RZTEVfS0VZU19NQVBbc3RyXSA9IHRvSHlwaGVuQ2FzZShzdHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gdG9NZWRpYShjc3M6IHN0cmluZywgbWVkaWE6IHN0cmluZykge1xuICByZXR1cm4gYEBtZWRpYSAke21lZGlhfXske2Nzc319YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dElkKCkge1xuICByZXR1cm4gYGUkeyhuZXh0SWQrKykudG9TdHJpbmcoMzYpfWA7XG59XG5cbnR5cGUgSUNsYXNzZXM8VD4gPSBSZWNvcmQ8KFQgZXh0ZW5kcyAoKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID8gKGtleW9mIFJldHVyblR5cGU8VD4pIDoga2V5b2YgVCksIHN0cmluZz47XG4iXX0=