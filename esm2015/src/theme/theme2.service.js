/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject, isDevMode } from '@angular/core';
import { LY_THEME_NAME } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { Platform } from '../platform';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function StylesElementMap() { }
function StylesElementMap_tsickle_Closure_declarations() {
    /** @type {?} */
    StylesElementMap.prototype.el;
}
/** @enum {number} */
const TypeStyle = {
    Multiple: 0,
    OnlyOne: 1,
};
export { TypeStyle };
TypeStyle[TypeStyle.Multiple] = "Multiple";
TypeStyle[TypeStyle.OnlyOne] = "OnlyOne";
/**
 * @record
 */
function StyleMap03() { }
function StyleMap03_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [id: string]: { // example: lyTabs
        styles: StylesFn2<any> | Styles2,
        media?: string,
        typeStyle?: TypeStyle,
        themes: { // example: minima-dark
          __* Css __
          default?: string,
          [themeName: string]: string
        }
      };
    */
}
const /** @type {?} */ STYLE_MAP_03 = /** @type {?} */ ({});
const /** @type {?} */ STYLE_MAP = {};
const /** @type {?} */ CLASSES_MAP = {};
const /** @type {?} */ STYLE_KEYS_MAP = {};
let /** @type {?} */ nextId = 0;
/**
 * @return {?}
 */
function fn() {
    return CLASSES_MAP;
}
console.log({ fn });
/**
 * @return {?}
 */
function fn2() {
    return STYLE_MAP_03;
}
console.log({ fn2 });
export class StylesInDocument {
    constructor() {
        this.styles = new Set();
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
}
export class LyTheme2 {
    /**
     * @param {?} stylesInDocument
     * @param {?} core
     * @param {?} themeName
     */
    constructor(stylesInDocument, core, themeName) {
        this.stylesInDocument = stylesInDocument;
        this.core = core;
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
            console.log(themeName, this.config);
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
     * @return {?}
     */
    addStyle(id, style, el, instance) {
        const /** @type {?} */ newClass = this.addCss(id, /** @type {?} */ (style));
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
        this.config = this.core.get(nam);
        // this._styleMap2.forEach(dataStyle => {
        //   dataStyle.el.innerText = this._createStyleC ontent2(dataStyle.styles, dataStyle.id);
        // });
        for (const /** @type {?} */ key in STYLE_MAP_03) {
            if (STYLE_MAP_03.hasOwnProperty(key)) {
                const { styles, typeStyle, media } = STYLE_MAP_03[key];
                this._createStyleContent2(styles, key, typeStyle, true, media);
            }
        }
        this._styleMap.forEach((dataStyle) => {
            dataStyle.styleElement.innerText = this.core._createStyleContent(this.config, dataStyle.style, dataStyle.id);
        });
    }
    /**
     * add style, similar to setUpStyle but this only accept string
     * @param {?} id id of style
     * @param {?} css style in string
     * @param {?=} media
     * @return {?}
     */
    addCss(id, css, media) {
        const /** @type {?} */ newId = `~>${id}`;
        this._createStyleContent2(/** @type {?} */ (css), newId, TypeStyle.OnlyOne, false, media);
        return CLASSES_MAP[newId];
    }
    /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id unique id for style group
     * @return {?}
     */
    addStyleSheet(styles, id) {
        const /** @type {?} */ newId = id || 'global';
        // const styleElement = this.core.renderer.createElement('style');
        this._createStyleContent2(styles, newId, TypeStyle.Multiple);
        return CLASSES_MAP[newId];
    }
    /**
     * @template T
     * @param {?} styles
     * @param {?} id
     * @param {?} typeStyle
     * @param {?=} forChangeTheme
     * @param {?=} media
     * @return {?}
     */
    _createStyleContent2(styles, id, typeStyle, forChangeTheme, media) {
        const /** @type {?} */ styleMap = id in STYLE_MAP_03
            ? STYLE_MAP_03[id]
            : STYLE_MAP_03[id] = {
                styles,
                media,
                typeStyle,
                themes: /** @type {?} */ ({})
            };
        if (!(styleMap.themes.default || this.config.name in styleMap.themes)) {
            let /** @type {?} */ css;
            if (typeof styles === 'function') {
                css = groupStyleToString(styles(this.config), this.config.name, id, typeStyle, media);
                styleMap.themes[this.config.name] = css;
            }
            else {
                css = groupStyleToString(styles, this.config.name, id, typeStyle, media);
                styleMap.themes.default = css;
            }
            // this.core.renderer.appendChild(this.core.primaryStyleContainer, styleElement);
            if (!this._styleMap2.has(id)) {
                const /** @type {?} */ styleElement = this.core.renderer.createElement('style');
                const /** @type {?} */ styleText = this.core.renderer.createText(css);
                this.core.renderer.appendChild(styleElement, styleText);
                this._styleMap2.set(id, {
                    el: styleElement
                });
            }
        }
        const /** @type {?} */ style = this._styleMap2.get(id);
        if (!this.stylesInDocument.styles.has(id)) {
            this.stylesInDocument.styles.add(id);
            this.core.renderer.appendChild(this.core.primaryStyleContainer, style.el);
        }
        if (forChangeTheme && styleMap.themes[this.config.name]) {
            style.el.innerText = styleMap.themes[this.config.name];
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
    LyTheme2.prototype._styleMap2;
    /** @type {?} */
    LyTheme2.prototype.stylesInDocument;
    /** @type {?} */
    LyTheme2.prototype.core;
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
 * @param {?} id
 * @param {?} typeStyle
 * @param {?=} media
 * @return {?}
 */
function groupStyleToString(styles, themeName, id, typeStyle, media) {
    // let newKey = '';
    // const string
    if (typeStyle === TypeStyle.OnlyOne) {
        const /** @type {?} */ className = CLASSES_MAP[id] ? CLASSES_MAP[id] : CLASSES_MAP[id] = `e${(nextId++).toString(36)}`;
        if (typeof styles === 'string') {
            const /** @type {?} */ css = `.${className}{${styles}}`;
            return media ? toMedia(css, media) : css;
        }
        else {
            return styleToString(styles, `.${className}`);
        }
    }
    let /** @type {?} */ content = '';
    const /** @type {?} */ classesMap = id in CLASSES_MAP
        ? CLASSES_MAP[id]
        : CLASSES_MAP[id] = {};
    for (const /** @type {?} */ key in styles) {
        if (styles.hasOwnProperty(key)) {
            const /** @type {?} */ value = styles[key];
            if (typeof value === 'object') {
                const /** @type {?} */ className = key in classesMap
                    ? classesMap[key]
                    : classesMap[key] = isDevMode() ? toClassNameValid(`${id}__${key}`) : `e${(nextId++).toString(36)}`;
                const /** @type {?} */ style = styleToString(/** @type {?} */ (value), `.${className}`);
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
 * @param {?} name
 * @param {?} ob
 * @return {?}
 */
function createKeyFrame(name, ob) {
    let /** @type {?} */ content = `@keyframes ${name}{`;
    for (const /** @type {?} */ key in ob) {
        if (ob.hasOwnProperty(key)) {
            const /** @type {?} */ element = ob[key];
            content += `${key}% ${styleToString(element, '')}`;
        }
    }
    content += `}`;
    return content;
}
/**
 * {color:'red'} to .className{color: red}
 * @param {?} ob
 * @param {?=} className
 * @param {?=} parentClassName
 * @return {?}
 */
function styleToString(ob, className, parentClassName) {
    let /** @type {?} */ content = '';
    let /** @type {?} */ keyAndValue = '';
    for (const /** @type {?} */ styleKey in ob) {
        if (ob.hasOwnProperty(styleKey)) {
            const /** @type {?} */ element = ob[styleKey];
            if (typeof element === 'object') {
                content += styleToString(/** @type {?} */ (element), styleKey, className);
            }
            else {
                // const styleKeyHyphenCase = toHyphenCaseCache(styleKey);
                // const styleValue = styleKeyHyphenCase === 'font-size' && typeof element === 'number'
                // ? this.config.pxToRem(element)
                // : element;
                keyAndValue += `${toHyphenCaseCache(styleKey)}:${element};`;
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
    const /** @type {?} */ s = str.replace(/[\W]/g, '');
    return toHyphenCase(s[0].toLowerCase() + s.slice(1));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFZLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCdkMsdUJBQU0sWUFBWSxxQkFBZSxFQUFTLENBQUEsQ0FBQztBQUUzQyx1QkFBTSxTQUFTLEdBRVgsRUFBRSxDQUFDO0FBQ1AsdUJBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN2Qix1QkFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzFCLHFCQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7Ozs7QUFDZjtJQUNFLE9BQU8sV0FBVyxDQUFDO0NBQ3BCO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7Ozs7QUFDbEI7SUFDRSxPQUFPLFlBQVksQ0FBQztDQUNyQjtBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO0FBS25CLE1BQU07O3NCQUNLLElBQUksR0FBRyxFQUFVOzs7O1lBSjNCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7Ozs7Ozs7QUFNRCxNQUFNOzs7Ozs7SUFVSixZQUNVLGtCQUNELE1BQ2dCLFNBQVM7UUFGeEIscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNqQixTQUFJLEdBQUosSUFBSTtzQkFUSixHQUFHO1FBWVYsSUFBSSxT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RUFBRSxLQUFhO0lBQ3pDLE9BQU8sVUFBVSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUM7Q0FDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgT3B0aW9uYWwsIGlzRGV2TW9kZSwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlLCBTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW52ZXJ0TWVkaWFRdWVyeSB9IGZyb20gJy4uL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXNFbGVtZW50TWFwIHtcbiAgZWw6IGFueTtcbn1cblxuZXhwb3J0IGVudW0gVHlwZVN0eWxlIHtcbiAgTXVsdGlwbGUsXG4gIE9ubHlPbmVcbn1cblxuaW50ZXJmYWNlIFN0eWxlTWFwMDMge1xuICBbaWQ6IHN0cmluZ106IHsgLy8gZXhhbXBsZTogbHlUYWJzXG4gICAgc3R5bGVzOiBTdHlsZXNGbjI8YW55PiB8IFN0eWxlczIsXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgdHlwZVN0eWxlPzogVHlwZVN0eWxlLFxuICAgIHRoZW1lczogeyAvLyBleGFtcGxlOiBtaW5pbWEtZGFya1xuICAgICAgLyoqIENzcyAqL1xuICAgICAgZGVmYXVsdD86IHN0cmluZyxcbiAgICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHN0cmluZ1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgU1RZTEVfTUFQXzAzOiBTdHlsZU1hcDAzID0ge30gYXMgYW55O1xuXG5jb25zdCBTVFlMRV9NQVA6IHtcbiAgW2tleTogc3RyaW5nXTogTWFwPHN0cmluZywgU3R5bGVzRWxlbWVudE1hcD5cbn0gPSB7fTtcbmNvbnN0IENMQVNTRVNfTUFQID0ge307XG5jb25zdCBTVFlMRV9LRVlTX01BUCA9IHt9O1xubGV0IG5leHRJZCA9IDA7XG5mdW5jdGlvbiBmbigpIHtcbiAgcmV0dXJuIENMQVNTRVNfTUFQO1xufVxuY29uc29sZS5sb2coe2ZufSk7XG5mdW5jdGlvbiBmbjIoKSB7XG4gIHJldHVybiBTVFlMRV9NQVBfMDM7XG59XG5jb25zb2xlLmxvZyh7Zm4yfSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlc0luRG9jdW1lbnQge1xuICBzdHlsZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZUNvbmZpZztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBwcmVmaXggPSAnayc7XG4gIHByaXZhdGUgX3N0eWxlTWFwMjogTWFwPHN0cmluZywgU3R5bGVzRWxlbWVudE1hcD47XG5cbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWVcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLl9zdHlsZU1hcDIgPSB0aGVtZU5hbWUgaW4gU1RZTEVfTUFQXG4gICAgICA/IFNUWUxFX01BUFt0aGVtZU5hbWVdXG4gICAgICA6IFNUWUxFX01BUFt0aGVtZU5hbWVdID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICB0aGlzLl9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGVtZU5hbWUsIHRoaXMuY29uZmlnKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBTdHlsZTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPFQ+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgIHJldHVybiB0aGlzLmNvcmUuX8S4cmVhdGVTdHlsZTxUPih0aGlzLmNvbmZpZywga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlTWFwLCBuYW1lLCB0aGlzLmNvcmUucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cbiAgc2V0VXBTdHlsZVNlY29uZGFyeTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPFQ+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgIHJldHVybiB0aGlzLmNvcmUuX8S4cmVhdGVTdHlsZTxUPih0aGlzLmNvbmZpZywga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlTWFwLCBuYW1lLCB0aGlzLmNvcmUuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKi9cbiAgYWRkU3R5bGU8VD4oaWQ6IHN0cmluZywgc3R5bGU6IFN0eWxlPFQ+LCBlbD86IGFueSwgaW5zdGFuY2U/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuYWRkQ3NzKGlkLCBzdHlsZSBhcyBhbnkpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgfVxuICAgIGVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgLy8gdGhpcy5fc3R5bGVNYXAyLmZvckVhY2goZGF0YVN0eWxlID0+IHtcbiAgICAvLyAgIGRhdGFTdHlsZS5lbC5pbm5lclRleHQgPSB0aGlzLl9jcmVhdGVTdHlsZUMgb250ZW50MihkYXRhU3R5bGUuc3R5bGVzLCBkYXRhU3R5bGUuaWQpO1xuICAgIC8vIH0pO1xuICAgIGZvciAoY29uc3Qga2V5IGluIFNUWUxFX01BUF8wMykge1xuICAgICAgaWYgKFNUWUxFX01BUF8wMy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHsgc3R5bGVzLCB0eXBlU3R5bGUsIG1lZGlhIH0gPSBTVFlMRV9NQVBfMDNba2V5XTtcbiAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIGtleSwgdHlwZVN0eWxlLCB0cnVlLCBtZWRpYSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3N0eWxlTWFwLmZvckVhY2goKGRhdGFTdHlsZSkgPT4ge1xuICAgICAgZGF0YVN0eWxlLnN0eWxlRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmNvcmUuX2NyZWF0ZVN0eWxlQ29udGVudCh0aGlzLmNvbmZpZywgZGF0YVN0eWxlLnN0eWxlLCBkYXRhU3R5bGUuaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBzdHlsZSwgc2ltaWxhciB0byBzZXRVcFN0eWxlIGJ1dCB0aGlzIG9ubHkgYWNjZXB0IHN0cmluZ1xuICAgKiBAcGFyYW0gaWQgaWQgb2Ygc3R5bGVcbiAgICogQHBhcmFtIGNzcyBzdHlsZSBpbiBzdHJpbmdcbiAgICovXG4gIHByaXZhdGUgYWRkQ3NzKGlkOiBzdHJpbmcsIGNzczogKCh0KSA9PiBzdHJpbmcpIHwgc3RyaW5nLCBtZWRpYT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbmV3SWQgPSBgfj4ke2lkfWA7XG4gICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50Mihjc3MgYXMgYW55LCBuZXdJZCwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBtZWRpYSk7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQW25ld0lkXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGFkZCBhIG5ldyBzdHlsZSBzaGVldFxuICAgKiBAcGFyYW0gc3R5bGVzIHN0eWxlc1xuICAgKiBAcGFyYW0gaWQgdW5pcXVlIGlkIGZvciBzdHlsZSBncm91cFxuICAgKi9cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsIGlkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3SWQgPSBpZCB8fCAnZ2xvYmFsJztcbiAgICAvLyBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgbmV3SWQsIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQW25ld0lkXTtcbiAgfVxuXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQyPFQ+KFxuICAgIHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMixcbiAgICBpZDogc3RyaW5nLFxuICAgIHR5cGVTdHlsZTogVHlwZVN0eWxlLFxuICAgIGZvckNoYW5nZVRoZW1lPzogYm9vbGVhbixcbiAgICBtZWRpYT86IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBzdHlsZU1hcCA9IGlkIGluIFNUWUxFX01BUF8wM1xuICAgID8gU1RZTEVfTUFQXzAzW2lkXVxuICAgIDogU1RZTEVfTUFQXzAzW2lkXSA9IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIG1lZGlhLFxuICAgICAgdHlwZVN0eWxlLFxuICAgICAgdGhlbWVzOiB7fSBhcyBhbnlcbiAgICB9O1xuICAgIGlmICghKHN0eWxlTWFwLnRoZW1lcy5kZWZhdWx0IHx8IHRoaXMuY29uZmlnLm5hbWUgaW4gc3R5bGVNYXAudGhlbWVzKSkge1xuICAgICAgbGV0IGNzcztcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXModGhpcy5jb25maWcpLCB0aGlzLmNvbmZpZy5uYW1lLCBpZCwgdHlwZVN0eWxlLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLnRoZW1lc1t0aGlzLmNvbmZpZy5uYW1lXSA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXMsIHRoaXMuY29uZmlnLm5hbWUsIGlkLCB0eXBlU3R5bGUsIG1lZGlhKTtcbiAgICAgICAgc3R5bGVNYXAudGhlbWVzLmRlZmF1bHQgPSBjc3M7XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNvcmUucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBzdHlsZUVsZW1lbnQpO1xuICAgICAgaWYgKCF0aGlzLl9zdHlsZU1hcDIuaGFzKGlkKSkge1xuICAgICAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZVRleHQoY3NzKTtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCwgc3R5bGVUZXh0KTtcbiAgICAgICAgdGhpcy5fc3R5bGVNYXAyLnNldChpZCwge1xuICAgICAgICAgIGVsOiBzdHlsZUVsZW1lbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5fc3R5bGVNYXAyLmdldChpZCk7XG4gICAgaWYgKCF0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzLmhhcyhpZCkpIHtcbiAgICAgIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXMuYWRkKGlkKTtcbiAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNvcmUucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBzdHlsZS5lbCk7XG4gICAgfVxuICAgIGlmIChmb3JDaGFuZ2VUaGVtZSAmJiBzdHlsZU1hcC50aGVtZXNbdGhpcy5jb25maWcubmFtZV0pIHtcbiAgICAgIHN0eWxlLmVsLmlubmVyVGV4dCA9IHN0eWxlTWFwLnRoZW1lc1t0aGlzLmNvbmZpZy5uYW1lXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lcjtcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzOiBTdHlsZXMyLCB0aGVtZU5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgdHlwZVN0eWxlOiBUeXBlU3R5bGUsIG1lZGlhPzogc3RyaW5nKSB7XG4gIC8vIGxldCBuZXdLZXkgPSAnJztcbiAgLy8gY29uc3Qgc3RyaW5nXG4gIGlmICh0eXBlU3R5bGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gQ0xBU1NFU19NQVBbaWRdID8gQ0xBU1NFU19NQVBbaWRdIDogQ0xBU1NFU19NQVBbaWRdID0gYGUkeyhuZXh0SWQrKykudG9TdHJpbmcoMzYpfWA7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBjc3MgPSBgLiR7Y2xhc3NOYW1lfXske3N0eWxlc319YDtcbiAgICAgIHJldHVybiBtZWRpYSA/IHRvTWVkaWEoY3NzLCBtZWRpYSkgOiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHlsZVRvU3RyaW5nKHN0eWxlcywgYC4ke2NsYXNzTmFtZX1gKTtcbiAgICB9XG4gIH1cbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgY29uc3QgY2xhc3Nlc01hcCA9IGlkIGluIENMQVNTRVNfTUFQXG4gID8gQ0xBU1NFU19NQVBbaWRdXG4gIDogQ0xBU1NFU19NQVBbaWRdID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGtleSBpbiBjbGFzc2VzTWFwXG4gICAgICAgID8gY2xhc3Nlc01hcFtrZXldXG4gICAgICAgIDogY2xhc3Nlc01hcFtrZXldID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGAke2lkfV9fJHtrZXl9YCkgOiBgZSR7KG5leHRJZCsrKS50b1N0cmluZygzNil9YDtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZVRvU3RyaW5nKHZhbHVlIGFzIFN0eWxlczIsIGAuJHtjbGFzc05hbWV9YCk7XG4gICAgICAgIGNvbnRlbnQgKz0gc3R5bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsdWUgaXMgc3RyaW5nJywgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5RnJhbWUobmFtZTogc3RyaW5nLCBvYjogT2JqZWN0KSB7XG4gIGxldCBjb250ZW50ID0gYEBrZXlmcmFtZXMgJHtuYW1lfXtgO1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jba2V5XTtcbiAgICAgIGNvbnRlbnQgKz0gYCR7a2V5fSUgJHtzdHlsZVRvU3RyaW5nKGVsZW1lbnQsICcnKX1gO1xuICAgIH1cbiAgfVxuICBjb250ZW50ICs9IGB9YDtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4vLyBjb25zb2xlLmxvZygna2V5ZnJhbWUnLCBjcmVhdGVLZXlGcmFtZSgnbXlhbmltYXRpb24nLCBrZXlGcmFtZU9iamVjdCkpO1xuXG4vKipcbiAqIHtjb2xvcjoncmVkJ30gdG8gLmNsYXNzTmFtZXtjb2xvcjogcmVkfVxuICovXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKG9iOiBPYmplY3QsIGNsYXNzTmFtZT86IHN0cmluZywgcGFyZW50Q2xhc3NOYW1lPzogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBrZXlBbmRWYWx1ZSA9ICcnO1xuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29udGVudCArPSBzdHlsZVRvU3RyaW5nKGVsZW1lbnQgYXMgU3R5bGVzMiwgc3R5bGVLZXksIGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zdCBzdHlsZUtleUh5cGhlbkNhc2UgPSB0b0h5cGhlbkNhc2VDYWNoZShzdHlsZUtleSk7XG4gICAgICAgIC8vIGNvbnN0IHN0eWxlVmFsdWUgPSBzdHlsZUtleUh5cGhlbkNhc2UgPT09ICdmb250LXNpemUnICYmIHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJ1xuICAgICAgICAvLyA/IHRoaXMuY29uZmlnLnB4VG9SZW0oZWxlbWVudClcbiAgICAgICAgLy8gOiBlbGVtZW50O1xuICAgICAgICBrZXlBbmRWYWx1ZSArPSBgJHt0b0h5cGhlbkNhc2VDYWNoZShzdHlsZUtleSl9OiR7ZWxlbWVudH07YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGxldCBuZXdDbGFzc05hbWUgPSAnJztcbiAgICBpZiAocGFyZW50Q2xhc3NOYW1lKSB7XG4gICAgICBuZXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lLmluZGV4T2YoJyYnKSA9PT0gMCA/IGAke3BhcmVudENsYXNzTmFtZX0ke2NsYXNzTmFtZS5zbGljZSgxKX1gIDogYCR7cGFyZW50Q2xhc3NOYW1lfSAuJHtjbGFzc05hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2xhc3NOYW1lICs9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgY29udGVudCArPSBgJHtuZXdDbGFzc05hbWV9YDtcbiAgfVxuICBjb250ZW50ICs9IGB7JHtrZXlBbmRWYWx1ZX19YDtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cblxuZnVuY3Rpb24gZ2V0KG9iajogT2JqZWN0LCBwYXRoOiBhbnkpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqID0gb2JqW19wYXRoW2ldXSB8fCBwYXRoO1xuICB9XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0h5cGhlbkNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChnKSA9PiBgLSR7Z1swXS50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiB0b0NsYXNzTmFtZVZhbGlkKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IHMgPSBzdHIucmVwbGFjZSgvW1xcV10vZywgJycpO1xuICByZXR1cm4gdG9IeXBoZW5DYXNlKHNbMF0udG9Mb3dlckNhc2UoKSArIHMuc2xpY2UoMSkpO1xufVxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2VDYWNoZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyIGluIFNUWUxFX0tFWVNfTUFQXG4gID8gU1RZTEVfS0VZU19NQVBbc3RyXVxuICA6IFNUWUxFX0tFWVNfTUFQW3N0cl0gPSB0b0h5cGhlbkNhc2Uoc3RyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHRvTWVkaWEoY3NzOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHtjc3N9fWA7XG59XG5cbiJdfQ==