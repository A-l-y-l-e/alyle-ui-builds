/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject, isDevMode } from '@angular/core';
import { LY_THEME_NAME } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { Platform } from '../platform';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
/**
 * @record
 */
function StylesElementMap() { }
function StylesElementMap_tsickle_Closure_declarations() {
    /** @type {?} */
    StylesElementMap.prototype.el;
}
/** @enum {number} */
const TypeStyle = {
    Multiple: 0,
    OnlyOne: 1,
};
TypeStyle[TypeStyle.Multiple] = "Multiple";
TypeStyle[TypeStyle.OnlyOne] = "OnlyOne";
const /** @type {?} */ STYLE_MAP4 = {};
/**
 * @record
 */
export function StyleMap4() { }
function StyleMap4_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [id: string]: {
        styles: StylesFn2<any> | Styles2
        type: TypeStyle
        priority: number
        css: {
          [themeName: string]: string
        } | string
        requireUpdate?: boolean
      };
    */
}
// interface StyleMap03 {
//   [id: string]: { // example: lyTabs
//     styles: StylesFn2<any> | Styles2,
//     media?: string,
//     typeStyle?: TypeStyle,
//     themes: { // example: minima-dark
//       /** Css */
//       default?: string,
//       [themeName: string]: string
//     }
//   };
// }
// const STYLE_MAP_03: StyleMap03 = {} as any;
const /** @type {?} */ STYLE_MAP = {};
const /** @type {?} */ CLASSES_MAP = {};
const /** @type {?} */ STYLE_KEYS_MAP = {};
let /** @type {?} */ nextId = 0;
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
function StylesInDocument_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    StylesInDocument.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    StylesInDocument.ctorParameters;
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
        const /** @type {?} */ newClass = this.addCss(id, /** @type {?} */ (style), priority);
        if (instance) {
            el.classList.remove(instance);
        }
        el.classList.add(newClass);
        return newClass;
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
        // this._createInstanceForTheme(nam);
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
        const /** @type {?} */ currentStyles = this.elements;
        for (const /** @type {?} */ key in currentStyles) {
            if (currentStyles.hasOwnProperty(key)) {
                const /** @type {?} */ styleData = STYLE_MAP4[key];
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
        const /** @type {?} */ newId = `~>${id}`;
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
        const /** @type {?} */ newId = id || 'global';
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
        const /** @type {?} */ styleMap = id in STYLE_MAP4
            ? STYLE_MAP4[id]
            : STYLE_MAP4[id] = {
                priority,
                styles,
                type,
                css: {}
            };
        // const styles2 = this.config.name in this.stylesInDocument.styles
        // ? this.stylesInDocument.styles[this.config.name]
        // : this.stylesInDocument.styles[this.config.name] = {};
        // console.log(
        //   'ccc', typeof styleMap.css !== 'string' && !(id in styleMap.css),
        //   typeof CLASSES_MAP[id] === 'string' || typeof CLASSES_MAP[id] === 'object' || CLASSES_MAP[this.config.name][id]
        // );
        const /** @type {?} */ themeName = this.initialTheme;
        const /** @type {?} */ isCreated = (id in CLASSES_MAP) || CLASSES_MAP[themeName][id];
        if (!isCreated || forChangeTheme) {
            /**
             * create new style for new theme
             */
            let /** @type {?} */ css;
            if (typeof styles === 'function') {
                // CLASSES_MAP[id] = {};
                // const themeMap = this.config.name in styleMap.classes
                // ? styleMap.classes[this.config.name]
                // : styleMap.classes[this.config.name] = {};
                // const className = id in (themeMap as Object)
                // ? themeMap[id]
                // : themeMap[id] = this._nextId();
                css = groupStyleToString(styles(this.config), themeName, isCreated, id, type, media);
                styleMap.css[themeName] = css;
                styleMap.requireUpdate = true;
            }
            else {
                /** create a new id for style that does not <-<require>-> changes */
                CLASSES_MAP[id] = /** @type {?} */ (true);
                css = groupStyleToString(styles, themeName, isCreated, id, type, media);
                styleMap.css = css;
            }
            // this.core.renderer.appendChild(this.core.primaryStyleContainer, styleElement);
            // if (!this._styleMap2.has(id)) {
            //   const styleElement = this.core.renderer.createElement('style');
            //   const styleText = this.core.renderer.createText(css);
            //   this.core.renderer.appendChild(styleElement, styleText);
            //   this._styleMap2.set(id, {
            //     el: styleElement
            //   });
            // }
            const /** @type {?} */ el = this.elements[id]
                ? this.elements[id]
                : this.elements[id] = this._createElementStyle(typeof styleMap.css === 'string'
                    ? styleMap.css
                    : styleMap.css[themeName]);
            if (forChangeTheme) {
                this.elements[id].innerText = styleMap.css[themeName];
            }
            else {
                this.core.renderer.appendChild(this._createStyleContainer(priority), el);
            }
        }
        // if (!(id in this.elements)) {
        // const htmlStyle = this._createElementStyle(
        //   typeof styleMap.css === 'string'
        //   ? styleMap.css
        //   : styleMap.css[this.config.name]
        // );
        // this.elements[id] = htmlStyle;
        // this.core.renderer.appendChild(this.core.primaryStyleContainer, htmlStyle);
        // }
        const /** @type {?} */ classes = typeof CLASSES_MAP[id] === 'string'
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
     * @param {?} styles
     * @param {?} id
     * @param {?} priority
     * @param {?} type
     * @param {?=} forChangeTheme
     * @return {?}
     */
    _updateStylesBrowser(styles, id, priority, type, forChangeTheme) {
    }
    /**
     * @param {?=} priority
     * @return {?}
     */
    _createStyleContainer(priority = 0) {
        const { styleContainers } = this.stylesInDocument;
        if (!styleContainers.has(priority)) {
            const /** @type {?} */ el = this.core.renderer.createElement(`ly-s-c`);
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
        const /** @type {?} */ refChild = this.findNode(priority);
        this.core.renderer.insertBefore(this._document.body, styleContainers.get(priority), refChild);
        return styleContainers.get(priority);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    findNode(index) {
        const { styleContainers } = this.stylesInDocument;
        const /** @type {?} */ keys = (Array.from(styleContainers.keys())).sort();
        const /** @type {?} */ key = keys.find(_ => index < _);
        return (key && styleContainers.get(key)) || this.core.firstElement;
    }
    /**
     * @param {?} css
     * @return {?}
     */
    _createElementStyle(css) {
        const /** @type {?} */ styleElement = this.core.renderer.createElement('style');
        const /** @type {?} */ styleText = this.core.renderer.createText(css);
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
    { type: StylesInDocument, },
    { type: CoreTheme, },
    { type: undefined, decorators: [{ type: Inject, args: [LY_THEME_NAME,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
function LyTheme2_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyTheme2.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyTheme2.ctorParameters;
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
function StyleContainer_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [key: string]: StyleContainer | string | number;
    */
}
/**
 * @record
 */
export function Styles2() { }
function Styles2_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [key: string]: StyleContainer;
    */
}
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
        /**
         * use current class or set new
         */
        const /** @type {?} */ className = CLASSES_MAP[id]
            ? CLASSES_MAP[id] = _classes_ || createNextId()
            : CLASSES_MAP[themeName][id] = _classes_ || createNextId();
        if (typeof styles === 'string') {
            const /** @type {?} */ css = `.${className}{${styles}}`;
            // STYLE_MAP4[id].rules = styles;
            return media ? toMedia(css, media) : css;
        }
        else {
            const /** @type {?} */ rules = styleToString(styles, null, `.${className}`);
            return rules;
        }
    }
    let /** @type {?} */ content = '';
    // const classesMap = id in themeMap
    // ? themeMap[id]
    // : themeMap[id] = {};
    const /** @type {?} */ classes = CLASSES_MAP[id]
        ? CLASSES_MAP[id] = _classes_ || {}
        : CLASSES_MAP[themeName][id] = _classes_ || {};
    for (const /** @type {?} */ key in styles) {
        if (styles.hasOwnProperty(key)) {
            const /** @type {?} */ value = styles[key];
            if (typeof value === 'object') {
                const /** @type {?} */ className = classes[key] || (classes[key] = isDevMode() ? toClassNameValid(`${id}---${key}-${createNextId()}`) : createNextId());
                const /** @type {?} */ style = styleToString(/** @type {?} */ (value), null, `.${className}`);
                content += style;
            }
            else {
                console.log('value is string', value);
            }
        }
    }
    return content;
}
/**
 * {color:'red'} to .className{color: red}
 * @param {?} ob
 * @param {?} rulesMap
 * @param {?=} className
 * @param {?=} parentClassName
 * @return {?}
 */
function styleToString(ob, rulesMap, className, parentClassName) {
    let /** @type {?} */ content = '';
    let /** @type {?} */ keyAndValue = '';
    for (const /** @type {?} */ styleKey in ob) {
        if (ob.hasOwnProperty(styleKey)) {
            const /** @type {?} */ element = ob[styleKey];
            if (typeof element === 'object') {
                // rulesMap[styleKey] = null;
                content += styleToString(/** @type {?} */ (element), null, styleKey, className);
            }
            else {
                const /** @type {?} */ newStyleKey = toHyphenCaseCache(styleKey);
                // const style = rulesMap[newStyleKey] = element;
                keyAndValue += `${newStyleKey}:${element};`;
            }
        }
    }
    if (className) {
        let /** @type {?} */ newClassName = '';
        if (parentClassName) {
            newClassName += className.indexOf('&') === 0 ? `${parentClassName}${className.slice(1)}` : `${parentClassName} .${className}`;
        }
        else {
            newClassName += className;
        }
        content += `${newClassName}`;
    }
    content += `{${keyAndValue}}`;
    return content;
}
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
export function toHyphenCase(str) {
    return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
}
/**
 * @param {?} str
 * @return {?}
 */
function toClassNameValid(str) {
    const /** @type {?} */ s = str.replace(/^[0-9]|[^\w\-]/g, _ => {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFZLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVUzQyx1QkFBTSxVQUFVLEdBQWMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJqQyx1QkFBTSxTQUFTLEdBRVgsRUFBRSxDQUFDO0FBQ1AsdUJBQU0sV0FBVyxHQUliLEVBQUUsQ0FBQztBQUNQLHVCQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDMUIscUJBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQVNmLE1BQU07O3NCQUtBLEVBQUU7K0JBQ1ksSUFBSSxHQUFHLEVBQXVCOzs7O1lBVGpELFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7Ozs7Ozs7OztBQVdELE1BQU07Ozs7Ozs7SUFjSixZQUNVLGtCQUNELE1BQ2dCLFNBQVMsRUFDTjtRQUhsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ2pCLFNBQUksR0FBSixJQUFJO1FBRWUsY0FBUyxHQUFULFNBQVM7c0JBZjVCLEdBQUc7UUFpQlYsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7Ozs7SUFiRCxJQUFJLE9BQU87UUFD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OztBQUVELE1BQU0sZ0NBQWdDLEdBQVc7SUFDL0MsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM1Qzs7Ozs7O0FBRUQsaUJBQWlCLEdBQVcsRUFBRSxLQUFhO0lBQ3pDLE9BQU8sVUFBVSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUM7Q0FDbEM7Ozs7QUFFRDtJQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgT3B0aW9uYWwsIGlzRGV2TW9kZSwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlLCBTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW52ZXJ0TWVkaWFRdWVyeSB9IGZyb20gJy4uL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW50ZXJmYWNlIFN0eWxlc0VsZW1lbnRNYXAge1xuICBlbDogYW55O1xufVxuXG5lbnVtIFR5cGVTdHlsZSB7XG4gIE11bHRpcGxlLFxuICBPbmx5T25lXG59XG5jb25zdCBTVFlMRV9NQVA0OiBTdHlsZU1hcDQgPSB7fTtcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVNYXA0IHtcbiAgW2lkOiBzdHJpbmddOiB7XG4gICAgc3R5bGVzOiBTdHlsZXNGbjI8YW55PiB8IFN0eWxlczJcbiAgICB0eXBlOiBUeXBlU3R5bGVcbiAgICBwcmlvcml0eTogbnVtYmVyXG4gICAgY3NzOiB7XG4gICAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgICB9IHwgc3RyaW5nXG4gICAgcmVxdWlyZVVwZGF0ZT86IGJvb2xlYW5cbiAgfTtcbn1cblxuLy8gaW50ZXJmYWNlIFN0eWxlTWFwMDMge1xuLy8gICBbaWQ6IHN0cmluZ106IHsgLy8gZXhhbXBsZTogbHlUYWJzXG4vLyAgICAgc3R5bGVzOiBTdHlsZXNGbjI8YW55PiB8IFN0eWxlczIsXG4vLyAgICAgbWVkaWE/OiBzdHJpbmcsXG4vLyAgICAgdHlwZVN0eWxlPzogVHlwZVN0eWxlLFxuLy8gICAgIHRoZW1lczogeyAvLyBleGFtcGxlOiBtaW5pbWEtZGFya1xuLy8gICAgICAgLyoqIENzcyAqL1xuLy8gICAgICAgZGVmYXVsdD86IHN0cmluZyxcbi8vICAgICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHN0cmluZ1xuLy8gICAgIH1cbi8vICAgfTtcbi8vIH1cblxuLy8gY29uc3QgU1RZTEVfTUFQXzAzOiBTdHlsZU1hcDAzID0ge30gYXMgYW55O1xuXG5jb25zdCBTVFlMRV9NQVA6IHtcbiAgW2tleTogc3RyaW5nXTogTWFwPHN0cmluZywgU3R5bGVzRWxlbWVudE1hcD5cbn0gPSB7fTtcbmNvbnN0IENMQVNTRVNfTUFQOiB7XG4gIFtpZE9yVGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgW2NsYXNzTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmdcbn0gPSB7fTtcbmNvbnN0IFNUWUxFX0tFWVNfTUFQID0ge307XG5sZXQgbmV4dElkID0gMDtcbi8vIGZ1bmN0aW9uIGZuKCkge1xuLy8gICByZXR1cm4gQ0xBU1NFU19NQVA7XG4vLyB9XG4vLyBjb25zb2xlLmxvZyh7Zm59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVzSW5Eb2N1bWVudCB7XG4gIHN0eWxlczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IEhUTUxTdHlsZUVsZW1lbnRcbiAgICB9XG4gIH0gPSB7fTtcbiAgc3R5bGVDb250YWluZXJzID0gbmV3IE1hcDxudW1iZXIsIEhUTUxFbGVtZW50PigpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lQ29uZmlnO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG4gIHByZWZpeCA9ICdrJztcbiAgaW5pdGlhbFRoZW1lOiBzdHJpbmc7XG4gIGVsZW1lbnRzOiB7XG4gICAgW2tleTogc3RyaW5nXTogSFRNTFN0eWxlRWxlbWVudFxuICB9O1xuICBwcml2YXRlIF9zdHlsZU1hcDI6IE1hcDxzdHJpbmcsIFN0eWxlc0VsZW1lbnRNYXA+O1xuXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBDTEFTU0VTX01BUDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVzSW5Eb2N1bWVudDogU3R5bGVzSW5Eb2N1bWVudCxcbiAgICBwdWJsaWMgY29yZTogQ29yZVRoZW1lLFxuICAgIEBJbmplY3QoTFlfVEhFTUVfTkFNRSkgdGhlbWVOYW1lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLl9zdHlsZU1hcDIgPSB0aGVtZU5hbWUgaW4gU1RZTEVfTUFQXG4gICAgICA/IFNUWUxFX01BUFt0aGVtZU5hbWVdXG4gICAgICA6IFNUWUxFX01BUFt0aGVtZU5hbWVdID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICB0aGlzLl9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gdGhlbWVOYW1lIGluIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNcbiAgICAgID8gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdXG4gICAgICA6IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXSA9IHt9O1xuICAgICAgdGhpcy5fY3JlYXRlSW5zdGFuY2VGb3JUaGVtZSh0aGVtZU5hbWUpO1xuICAgICAgaWYgKCF0aGlzLmluaXRpYWxUaGVtZSkge1xuICAgICAgICB0aGlzLmluaXRpYWxUaGVtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldFVwU3R5bGU8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/EuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnk8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/EuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIGFkZFN0eWxlPFQ+KGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZTxUPiwgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5hZGRDc3MoaWQsIHN0eWxlIGFzIGFueSwgcHJpb3JpdHkpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgfVxuICAgIGVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgLy8gdGhpcy5fY3JlYXRlSW5zdGFuY2VGb3JUaGVtZShuYW0pO1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldChuYW0pO1xuICAgIC8vIHRoaXMuX3N0eWxlTWFwMi5mb3JFYWNoKGRhdGFTdHlsZSA9PiB7XG4gICAgLy8gICBkYXRhU3R5bGUuZWwuaW5uZXJUZXh0ID0gdGhpcy5fY3JlYXRlU3R5bGVDIG9udGVudDIoZGF0YVN0eWxlLnN0eWxlcywgZGF0YVN0eWxlLmlkKTtcbiAgICAvLyB9KTtcbiAgICAvLyBmb3IgKGNvbnN0IGtleSBpbiBTVFlMRV9NQVBfMDMpIHtcbiAgICAvLyAgIGlmIChTVFlMRV9NQVBfMDMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIC8vICAgICBjb25zdCB7IHN0eWxlcywgdHlwZVN0eWxlLCBtZWRpYSB9ID0gU1RZTEVfTUFQXzAzW2tleV07XG4gICAgLy8gICAgIC8vIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBrZXksIHR5cGVTdHlsZSwgdGhpcy5jb3JlLnJlbmRlcmVyLCB0cnVlLCBtZWRpYSk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIHRoaXMuX3N0eWxlTWFwLmZvckVhY2goKGRhdGFTdHlsZSkgPT4ge1xuICAgICAgZGF0YVN0eWxlLnN0eWxlRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmNvcmUuX2NyZWF0ZVN0eWxlQ29udGVudCh0aGlzLmNvbmZpZywgZGF0YVN0eWxlLnN0eWxlLCBkYXRhU3R5bGUuaWQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgeyBzdHlsZUNvbnRhaW5lcnMsIHN0eWxlcyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGN1cnJlbnRTdHlsZXMgPSB0aGlzLmVsZW1lbnRzO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGN1cnJlbnRTdHlsZXMpIHtcbiAgICAgIGlmIChjdXJyZW50U3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVEYXRhID0gU1RZTEVfTUFQNFtrZXldO1xuICAgICAgICBpZiAoc3R5bGVEYXRhLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlRGF0YS5zdHlsZXMsIGtleSwgc3R5bGVEYXRhLnByaW9yaXR5LCBzdHlsZURhdGEudHlwZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIHN0eWxlLCBzaW1pbGFyIHRvIHNldFVwU3R5bGUgYnV0IHRoaXMgb25seSBhY2NlcHQgc3RyaW5nXG4gICAqIEBwYXJhbSBpZCBpZCBvZiBzdHlsZVxuICAgKiBAcGFyYW0gY3NzIHN0eWxlIGluIHN0cmluZ1xuICAgKi9cbiAgcHJpdmF0ZSBhZGRDc3MoaWQ6IHN0cmluZywgY3NzOiAoKHQpID0+IHN0cmluZykgfCBzdHJpbmcsIHByaW9yaXR5OiBudW1iZXIsIG1lZGlhPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBuZXdJZCA9IGB+PiR7aWR9YDtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50Mihjc3MgYXMgYW55LCBuZXdJZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5Pbmx5T25lLCBmYWxzZSwgbWVkaWEpIGFzIHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGFkZCBhIG5ldyBzdHlsZSBzaGVldFxuICAgKiBAcGFyYW0gc3R5bGVzIHN0eWxlc1xuICAgKiBAcGFyYW0gaWQgdW5pcXVlIGlkIGZvciBzdHlsZSBncm91cFxuICAgKi9cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsIGlkPzogc3RyaW5nLCBwcmlvcml0eT86IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgfHwgJ2dsb2JhbCc7XG4gICAgLy8gY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBuZXdJZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBfY3JlYXRlU3R5bGVDb250ZW50MjxUPihcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcmlvcml0eTogbnVtYmVyLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgbWVkaWE/OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3Qgc3R5bGVNYXAgPSBpZCBpbiBTVFlMRV9NQVA0XG4gICAgPyBTVFlMRV9NQVA0W2lkXVxuICAgIDogU1RZTEVfTUFQNFtpZF0gPSB7XG4gICAgICBwcmlvcml0eSxcbiAgICAgIHN0eWxlcyxcbiAgICAgIHR5cGUsXG4gICAgICBjc3M6IHt9XG4gICAgfTtcbiAgICAvLyBjb25zdCBzdHlsZXMyID0gdGhpcy5jb25maWcubmFtZSBpbiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzXG4gICAgLy8gPyB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoaXMuY29uZmlnLm5hbWVdXG4gICAgLy8gOiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoaXMuY29uZmlnLm5hbWVdID0ge307XG4gICAgLy8gY29uc29sZS5sb2coXG4gICAgLy8gICAnY2NjJywgdHlwZW9mIHN0eWxlTWFwLmNzcyAhPT0gJ3N0cmluZycgJiYgIShpZCBpbiBzdHlsZU1hcC5jc3MpLFxuICAgIC8vICAgdHlwZW9mIENMQVNTRVNfTUFQW2lkXSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIENMQVNTRVNfTUFQW2lkXSA9PT0gJ29iamVjdCcgfHwgQ0xBU1NFU19NQVBbdGhpcy5jb25maWcubmFtZV1baWRdXG4gICAgLy8gKTtcbiAgICBjb25zdCB0aGVtZU5hbWUgPSB0aGlzLmluaXRpYWxUaGVtZTtcbiAgICBjb25zdCBpc0NyZWF0ZWQgPSAoaWQgaW4gQ0xBU1NFU19NQVApIHx8IENMQVNTRVNfTUFQW3RoZW1lTmFtZV1baWRdO1xuICAgIGlmICghaXNDcmVhdGVkIHx8IGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAvKiogY3JlYXRlIG5ldyBzdHlsZSBmb3IgbmV3IHRoZW1lICovXG4gICAgICBsZXQgY3NzO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gQ0xBU1NFU19NQVBbaWRdID0ge307XG4gICAgICAgIC8vIGNvbnN0IHRoZW1lTWFwID0gdGhpcy5jb25maWcubmFtZSBpbiBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICAgIC8vID8gc3R5bGVNYXAuY2xhc3Nlc1t0aGlzLmNvbmZpZy5uYW1lXVxuICAgICAgICAvLyA6IHN0eWxlTWFwLmNsYXNzZXNbdGhpcy5jb25maWcubmFtZV0gPSB7fTtcbiAgICAgICAgLy8gY29uc3QgY2xhc3NOYW1lID0gaWQgaW4gKHRoZW1lTWFwIGFzIE9iamVjdClcbiAgICAgICAgLy8gPyB0aGVtZU1hcFtpZF1cbiAgICAgICAgLy8gOiB0aGVtZU1hcFtpZF0gPSB0aGlzLl9uZXh0SWQoKTtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlcyh0aGlzLmNvbmZpZyksIHRoZW1lTmFtZSwgaXNDcmVhdGVkLCBpZCwgdHlwZSwgbWVkaWEpO1xuICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogY3JlYXRlIGEgbmV3IGlkIGZvciBzdHlsZSB0aGF0IGRvZXMgbm90IDwtPHJlcXVpcmU+LT4gY2hhbmdlcyAqL1xuICAgICAgICBDTEFTU0VTX01BUFtpZF0gPSB0cnVlIGFzIGFueTtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlcywgdGhlbWVOYW1lLCBpc0NyZWF0ZWQsIGlkLCB0eXBlLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIHN0eWxlRWxlbWVudCk7XG4gICAgICAvLyBpZiAoIXRoaXMuX3N0eWxlTWFwMi5oYXMoaWQpKSB7XG4gICAgICAvLyAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgLy8gICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgICAgLy8gICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZVRleHQpO1xuICAgICAgLy8gICB0aGlzLl9zdHlsZU1hcDIuc2V0KGlkLCB7XG4gICAgICAvLyAgICAgZWw6IHN0eWxlRWxlbWVudFxuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgID8gdGhpcy5lbGVtZW50c1tpZF1cbiAgICAgIDogdGhpcy5lbGVtZW50c1tpZF0gPSB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoXG4gICAgICAgIHR5cGVvZiBzdHlsZU1hcC5jc3MgPT09ICdzdHJpbmcnXG4gICAgICAgID8gc3R5bGVNYXAuY3NzXG4gICAgICAgIDogc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV1cbiAgICAgICk7XG4gICAgICBpZiAoZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1tpZF0uaW5uZXJUZXh0ID0gc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHkpLCBlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgKCEoaWQgaW4gdGhpcy5lbGVtZW50cykpIHtcbiAgICAgIC8vIGNvbnN0IGh0bWxTdHlsZSA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShcbiAgICAgIC8vICAgdHlwZW9mIHN0eWxlTWFwLmNzcyA9PT0gJ3N0cmluZydcbiAgICAgIC8vICAgPyBzdHlsZU1hcC5jc3NcbiAgICAgIC8vICAgOiBzdHlsZU1hcC5jc3NbdGhpcy5jb25maWcubmFtZV1cbiAgICAgIC8vICk7XG4gICAgICAvLyB0aGlzLmVsZW1lbnRzW2lkXSA9IGh0bWxTdHlsZTtcbiAgICAgIC8vIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNvcmUucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBodG1sU3R5bGUpO1xuICAgIC8vIH1cblxuICAgIGNvbnN0IGNsYXNzZXMgPSB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnc3RyaW5nJ1xuICAgID8gQ0xBU1NFU19NQVBbaWRdXG4gICAgOiB0eXBlb2YgQ0xBU1NFU19NQVBbaWRdID09PSAnb2JqZWN0J1xuICAgID8gQ0xBU1NFU19NQVBbaWRdXG4gICAgOiBDTEFTU0VTX01BUFt0aGVtZU5hbWVdW2lkXTtcbiAgICByZXR1cm4gY2xhc3NlcztcblxuICAgIC8vIGNvbnN0IHN0eWxlID0gdGhpcy5fc3R5bGVNYXAyLmdldChpZCk7XG4gICAgLy8gaWYgKCF0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzLmhhcyhpZCkpIHtcbiAgICAvLyAgIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXMuYWRkKGlkKTtcbiAgICAvLyAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNvcmUucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBzdHlsZS5lbCk7XG4gICAgLy8gfVxuICAgIC8vIGlmIChmb3JDaGFuZ2VUaGVtZSAmJiBzdHlsZU1hcC50aGVtZXNbdGhpcy5jb25maWcubmFtZV0pIHtcbiAgICAvLyAgIHN0eWxlLmVsLmlubmVyVGV4dCA9IHN0eWxlTWFwLnRoZW1lc1t0aGlzLmNvbmZpZy5uYW1lXTtcbiAgICAvLyB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdHlsZXNCcm93c2VyKFxuICAgIHN0eWxlczogU3R5bGVzRm4yPGFueT4gfCBTdHlsZXMyLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICB0eXBlOiBUeXBlU3R5bGUsXG4gICAgZm9yQ2hhbmdlVGhlbWU/OiBib29sZWFuXG4gICkge1xuXG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgJiYgc3R5bGVDb250YWluZXJzLmdldChrZXkpKSB8fCB0aGlzLmNvcmUuZmlyc3RFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxlbWVudFN0eWxlKGNzczogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZVRleHQoY3NzKTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZVRleHQpO1xuICAgIHJldHVybiBzdHlsZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVJbnN0YW5jZUZvclRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCEodGhlbWVOYW1lIGluIENMQVNTRVNfTUFQKSkge1xuICAgICAgQ0xBU1NFU19NQVBbdGhlbWVOYW1lXSA9IHt9O1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVDb250YWluZXIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXI7XG59XG5leHBvcnQgdHlwZSBTdHlsZXNGbjI8VD4gPSAoVCkgPT4gU3R5bGVzMjtcblxuZnVuY3Rpb24gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlczogU3R5bGVzMiwgdGhlbWVOYW1lOiBzdHJpbmcsIF9jbGFzc2VzXzogc3RyaW5nIHwge30sIGlkOiBzdHJpbmcsIHR5cGVTdHlsZTogVHlwZVN0eWxlLCBtZWRpYT86IHN0cmluZykge1xuICAvLyBsZXQgbmV3S2V5ID0gJyc7XG4gIC8vIGNvbnN0IHN0cmluZ1xuICAvLyBjb25zdCB0aGVtZU1hcCA9IGNsYXNzZXNbdGhlbWVOYW1lXSA/IGNsYXNzZXNbdGhlbWVOYW1lXSA6IGNsYXNzZXNbdGhlbWVOYW1lXSA9IHt9O1xuICBpZiAodHlwZVN0eWxlID09PSBUeXBlU3R5bGUuT25seU9uZSkge1xuICAgIC8qKiB1c2UgY3VycmVudCBjbGFzcyBvciBzZXQgbmV3ICovXG4gICAgY29uc3QgY2xhc3NOYW1lID0gQ0xBU1NFU19NQVBbaWRdXG4gICAgPyBDTEFTU0VTX01BUFtpZF0gPSBfY2xhc3Nlc18gfHwgY3JlYXRlTmV4dElkKClcbiAgICA6IENMQVNTRVNfTUFQW3RoZW1lTmFtZV1baWRdID0gX2NsYXNzZXNfIHx8IGNyZWF0ZU5leHRJZCgpO1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgY3NzID0gYC4ke2NsYXNzTmFtZX17JHtzdHlsZXN9fWA7XG4gICAgICAvLyBTVFlMRV9NQVA0W2lkXS5ydWxlcyA9IHN0eWxlcztcbiAgICAgIHJldHVybiBtZWRpYSA/IHRvTWVkaWEoY3NzLCBtZWRpYSkgOiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gc3R5bGVUb1N0cmluZyhzdHlsZXMsIG51bGwsIGAuJHtjbGFzc05hbWV9YCk7XG4gICAgICByZXR1cm4gcnVsZXM7XG4gICAgfVxuICB9XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIC8vIGNvbnN0IGNsYXNzZXNNYXAgPSBpZCBpbiB0aGVtZU1hcFxuICAvLyA/IHRoZW1lTWFwW2lkXVxuICAvLyA6IHRoZW1lTWFwW2lkXSA9IHt9O1xuICBjb25zdCBjbGFzc2VzID0gQ0xBU1NFU19NQVBbaWRdXG4gID8gQ0xBU1NFU19NQVBbaWRdID0gX2NsYXNzZXNfIHx8IHt9XG4gIDogQ0xBU1NFU19NQVBbdGhlbWVOYW1lXVtpZF0gPSBfY2xhc3Nlc18gfHwge307XG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzZXNba2V5XSB8fCAoY2xhc3Nlc1trZXldID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGAke2lkfS0tLSR7a2V5fS0ke2NyZWF0ZU5leHRJZCgpfWApIDogY3JlYXRlTmV4dElkKCkpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcodmFsdWUgYXMgU3R5bGVzMiwgbnVsbCwgYC4ke2NsYXNzTmFtZX1gKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBpcyBzdHJpbmcnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVLZXlGcmFtZShuYW1lOiBzdHJpbmcsIG9iOiBPYmplY3QpIHtcbi8vICAgbGV0IGNvbnRlbnQgPSBgQGtleWZyYW1lcyAke25hbWV9e2A7XG4vLyAgIGZvciAoY29uc3Qga2V5IGluIG9iKSB7XG4vLyAgICAgaWYgKG9iLmhhc093blByb3BlcnR5KGtleSkpIHtcbi8vICAgICAgIGNvbnN0IGVsZW1lbnQgPSBvYltrZXldO1xuLy8gICAgICAgY29udGVudCArPSBgJHtrZXl9JSAke3N0eWxlVG9TdHJpbmcoZWxlbWVudCwgJycpfWA7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGNvbnRlbnQgKz0gYH1gO1xuLy8gICByZXR1cm4gY29udGVudDtcbi8vIH1cbi8vIGNvbnNvbGUubG9nKCdrZXlmcmFtZScsIGNyZWF0ZUtleUZyYW1lKCdteWFuaW1hdGlvbicsIGtleUZyYW1lT2JqZWN0KSk7XG5cbi8qKlxuICoge2NvbG9yOidyZWQnfSB0byAuY2xhc3NOYW1le2NvbG9yOiByZWR9XG4gKi9cbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmcob2I6IE9iamVjdCwgcnVsZXNNYXA6IHt9IHwgc3RyaW5nLCBjbGFzc05hbWU/OiBzdHJpbmcsIHBhcmVudENsYXNzTmFtZT86IHN0cmluZykge1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQga2V5QW5kVmFsdWUgPSAnJztcbiAgZm9yIChjb25zdCBzdHlsZUtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBvYltzdHlsZUtleV07XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIHJ1bGVzTWFwW3N0eWxlS2V5XSA9IG51bGw7XG4gICAgICAgIGNvbnRlbnQgKz0gc3R5bGVUb1N0cmluZyhlbGVtZW50IGFzIFN0eWxlczIsIG51bGwsIHN0eWxlS2V5LCBjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3U3R5bGVLZXkgPSB0b0h5cGhlbkNhc2VDYWNoZShzdHlsZUtleSk7XG4gICAgICAgIC8vIGNvbnN0IHN0eWxlID0gcnVsZXNNYXBbbmV3U3R5bGVLZXldID0gZWxlbWVudDtcbiAgICAgICAga2V5QW5kVmFsdWUgKz0gYCR7bmV3U3R5bGVLZXl9OiR7ZWxlbWVudH07YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGxldCBuZXdDbGFzc05hbWUgPSAnJztcbiAgICBpZiAocGFyZW50Q2xhc3NOYW1lKSB7XG4gICAgICBuZXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lLmluZGV4T2YoJyYnKSA9PT0gMCA/IGAke3BhcmVudENsYXNzTmFtZX0ke2NsYXNzTmFtZS5zbGljZSgxKX1gIDogYCR7cGFyZW50Q2xhc3NOYW1lfSAuJHtjbGFzc05hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2xhc3NOYW1lICs9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgY29udGVudCArPSBgJHtuZXdDbGFzc05hbWV9YDtcbiAgfVxuICBjb250ZW50ICs9IGB7JHtrZXlBbmRWYWx1ZX19YDtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cblxuZnVuY3Rpb24gZ2V0KG9iajogT2JqZWN0LCBwYXRoOiBhbnkpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqID0gb2JqW19wYXRoW2ldXSB8fCBwYXRoO1xuICB9XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0h5cGhlbkNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChnKSA9PiBgLSR7Z1swXS50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiB0b0NsYXNzTmFtZVZhbGlkKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IHMgPSBzdHIucmVwbGFjZSgvXlswLTldfFteXFx3XFwtXS9nLCBfID0+IHtcbiAgICByZXR1cm4gYF8ke18uY2hhckNvZGVBdCgwKX1gO1xuICB9KTtcbiAgcmV0dXJuIHRvSHlwaGVuQ2FzZShzKTtcbn1cblxuZnVuY3Rpb24gdG9IeXBoZW5DYXNlQ2FjaGUoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ciBpbiBTVFlMRV9LRVlTX01BUFxuICA/IFNUWUxFX0tFWVNfTUFQW3N0cl1cbiAgOiBTVFlMRV9LRVlTX01BUFtzdHJdID0gdG9IeXBoZW5DYXNlKHN0cik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiB0b01lZGlhKGNzczogc3RyaW5nLCBtZWRpYTogc3RyaW5nKSB7XG4gIHJldHVybiBgQG1lZGlhICR7bWVkaWF9eyR7Y3NzfX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXh0SWQoKSB7XG4gIHJldHVybiBgZSR7KG5leHRJZCsrKS50b1N0cmluZygzNil9YDtcbn1cblxuIl19