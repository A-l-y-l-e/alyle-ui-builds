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
/**
 * @record
 */
function StyleMap03() { }
function StyleMap03_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [id: string]: { // example: lyTabs
        styles: StylesFn2<any> | Styles2,
        media?: string,
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
                const { styles, media } = STYLE_MAP_03[key];
                this._createStyleContent2(styles, key, true, media);
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
        this._createStyleContent2(/** @type {?} */ (css), newId, false, media);
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
        this._createStyleContent2(styles, newId);
        return CLASSES_MAP[newId];
    }
    /**
     * @template T
     * @param {?} styles
     * @param {?} id
     * @param {?=} forChangeTheme
     * @param {?=} media
     * @return {?}
     */
    _createStyleContent2(styles, id, forChangeTheme, media) {
        const /** @type {?} */ styleMap = id in STYLE_MAP_03
            ? STYLE_MAP_03[id]
            : STYLE_MAP_03[id] = {
                styles,
                media,
                themes: /** @type {?} */ ({})
            };
        if (!(styleMap.themes.default || this.config.name in styleMap.themes)) {
            let /** @type {?} */ css;
            if (typeof styles === 'function') {
                css = groupStyleToString(styles(this.config), id, media);
                styleMap.themes[this.config.name] = css;
            }
            else {
                css = groupStyleToString(styles, id, media);
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
 * @param {?} id
 * @param {?=} media
 * @return {?}
 */
function groupStyleToString(styles, id, media) {
    let /** @type {?} */ content = '';
    // let newKey = '';
    // const string
    if (typeof styles === 'string') {
        const /** @type {?} */ className = CLASSES_MAP[id] ? CLASSES_MAP[id] : CLASSES_MAP[id] = `e${(nextId++).toString(36)}`;
        const /** @type {?} */ css = `.${className}{${styles}}`;
        return media ? toMedia(css, media) : css;
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFZLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCdkMsdUJBQU0sWUFBWSxxQkFBZSxFQUFTLENBQUEsQ0FBQztBQUUzQyx1QkFBTSxTQUFTLEdBRVgsRUFBRSxDQUFDO0FBQ1AsdUJBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN2Qix1QkFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzFCLHFCQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFLZixNQUFNOztzQkFDSyxJQUFJLEdBQUcsRUFBVTs7OztZQUozQixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7Ozs7O0FBTUQsTUFBTTs7Ozs7O0lBVUosWUFDVSxrQkFDRCxNQUNnQixTQUFTO1FBRnhCLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDakIsU0FBSSxHQUFKLElBQUk7c0JBVEosR0FBRztRQVlWLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjtLQUNGOzs7O0lBWkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxXQUFXLENBQUM7S0FDcEI7Ozs7O0lBV0QsVUFBVSxDQUFDLFNBQWlCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FB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QyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDdEQ7Ozs7O0FBRUQsMkJBQTJCLEdBQVc7SUFDcEMsT0FBTyxHQUFHLElBQUksY0FBYztRQUM1QixDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztRQUNyQixDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUMzQzs7Ozs7QUFFRCxNQUFNLGdDQUFnQyxHQUFXO0lBQy9DLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDNUM7Ozs7OztBQUVELGlCQUFpQixHQUFXLEVBQUUsS0FBYTtJQUN6QyxPQUFPLFVBQVUsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDO0NBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIE9wdGlvbmFsLCBpc0Rldk1vZGUsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSwgU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IEludmVydE1lZGlhUXVlcnkgfSBmcm9tICcuLi9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVzRWxlbWVudE1hcCB7XG4gIGVsOiBhbnk7XG59XG5cbmludGVyZmFjZSBTdHlsZU1hcDAzIHtcbiAgW2lkOiBzdHJpbmddOiB7IC8vIGV4YW1wbGU6IGx5VGFic1xuICAgIHN0eWxlczogU3R5bGVzRm4yPGFueT4gfCBTdHlsZXMyLFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIHRoZW1lczogeyAvLyBleGFtcGxlOiBtaW5pbWEtZGFya1xuICAgICAgLyoqIENzcyAqL1xuICAgICAgZGVmYXVsdD86IHN0cmluZyxcbiAgICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHN0cmluZ1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgU1RZTEVfTUFQXzAzOiBTdHlsZU1hcDAzID0ge30gYXMgYW55O1xuXG5jb25zdCBTVFlMRV9NQVA6IHtcbiAgW2tleTogc3RyaW5nXTogTWFwPHN0cmluZywgU3R5bGVzRWxlbWVudE1hcD5cbn0gPSB7fTtcbmNvbnN0IENMQVNTRVNfTUFQID0ge307XG5jb25zdCBTVFlMRV9LRVlTX01BUCA9IHt9O1xubGV0IG5leHRJZCA9IDA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlc0luRG9jdW1lbnQge1xuICBzdHlsZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZUNvbmZpZztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBwcmVmaXggPSAnayc7XG4gIHByaXZhdGUgX3N0eWxlTWFwMjogTWFwPHN0cmluZywgU3R5bGVzRWxlbWVudE1hcD47XG5cbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWVcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLl9zdHlsZU1hcDIgPSB0aGVtZU5hbWUgaW4gU1RZTEVfTUFQXG4gICAgICA/IFNUWUxFX01BUFt0aGVtZU5hbWVdXG4gICAgICA6IFNUWUxFX01BUFt0aGVtZU5hbWVdID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICB0aGlzLl9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gICAgfVxuICB9XG4gIHNldFVwU3R5bGU8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/EuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnk8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/EuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIGFkZFN0eWxlPFQ+KGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZTxUPiwgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmFkZENzcyhpZCwgc3R5bGUgYXMgYW55KTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgY29sb3JPZih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMuY29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgdGhlbWUuc2V0VGhlbWUoJ3RoZW1lLW5hbWUnKVxcYCBpcyBvbmx5IGF2YWlsYWJsZSBpbiBicm93c2VyIHBsYXRmb3JtYCk7XG4gICAgfVxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldChuYW0pO1xuICAgIC8vIHRoaXMuX3N0eWxlTWFwMi5mb3JFYWNoKGRhdGFTdHlsZSA9PiB7XG4gICAgLy8gICBkYXRhU3R5bGUuZWwuaW5uZXJUZXh0ID0gdGhpcy5fY3JlYXRlU3R5bGVDIG9udGVudDIoZGF0YVN0eWxlLnN0eWxlcywgZGF0YVN0eWxlLmlkKTtcbiAgICAvLyB9KTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBTVFlMRV9NQVBfMDMpIHtcbiAgICAgIGlmIChTVFlMRV9NQVBfMDMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCB7IHN0eWxlcywgbWVkaWEgfSA9IFNUWUxFX01BUF8wM1trZXldO1xuICAgICAgICB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywga2V5LCB0cnVlLCBtZWRpYSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3N0eWxlTWFwLmZvckVhY2goKGRhdGFTdHlsZSkgPT4ge1xuICAgICAgZGF0YVN0eWxlLnN0eWxlRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmNvcmUuX2NyZWF0ZVN0eWxlQ29udGVudCh0aGlzLmNvbmZpZywgZGF0YVN0eWxlLnN0eWxlLCBkYXRhU3R5bGUuaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBzdHlsZSwgc2ltaWxhciB0byBzZXRVcFN0eWxlIGJ1dCB0aGlzIG9ubHkgYWNjZXB0IHN0cmluZ1xuICAgKiBAcGFyYW0gaWQgaWQgb2Ygc3R5bGVcbiAgICogQHBhcmFtIGNzcyBzdHlsZSBpbiBzdHJpbmdcbiAgICovXG4gIHByaXZhdGUgYWRkQ3NzKGlkOiBzdHJpbmcsIGNzczogKCh0KSA9PiBzdHJpbmcpIHwgc3RyaW5nLCBtZWRpYT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbmV3SWQgPSBgfj4ke2lkfWA7XG4gICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50Mihjc3MgYXMgYW55LCBuZXdJZCwgZmFsc2UsIG1lZGlhKTtcbiAgICByZXR1cm4gQ0xBU1NFU19NQVBbbmV3SWRdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBpZCB1bmlxdWUgaWQgZm9yIHN0eWxlIGdyb3VwXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiwgaWQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdJZCA9IGlkIHx8ICdnbG9iYWwnO1xuICAgIC8vIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBuZXdJZCk7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQW25ld0lkXTtcbiAgfVxuXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQyPFQ+KHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiwgaWQ6IHN0cmluZywgZm9yQ2hhbmdlVGhlbWU/OiBib29sZWFuLCBtZWRpYT86IHN0cmluZykge1xuICAgIGNvbnN0IHN0eWxlTWFwID0gaWQgaW4gU1RZTEVfTUFQXzAzXG4gICAgPyBTVFlMRV9NQVBfMDNbaWRdXG4gICAgOiBTVFlMRV9NQVBfMDNbaWRdID0ge1xuICAgICAgc3R5bGVzLFxuICAgICAgbWVkaWEsXG4gICAgICB0aGVtZXM6IHt9IGFzIGFueVxuICAgIH07XG4gICAgaWYgKCEoc3R5bGVNYXAudGhlbWVzLmRlZmF1bHQgfHwgdGhpcy5jb25maWcubmFtZSBpbiBzdHlsZU1hcC50aGVtZXMpKSB7XG4gICAgICBsZXQgY3NzO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlcyh0aGlzLmNvbmZpZyksIGlkLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLnRoZW1lc1t0aGlzLmNvbmZpZy5uYW1lXSA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXMsIGlkLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLnRoZW1lcy5kZWZhdWx0ID0gY3NzO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgc3R5bGVFbGVtZW50KTtcbiAgICAgIGlmICghdGhpcy5fc3R5bGVNYXAyLmhhcyhpZCkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVUZXh0KGNzcyk7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgICAgIHRoaXMuX3N0eWxlTWFwMi5zZXQoaWQsIHtcbiAgICAgICAgICBlbDogc3R5bGVFbGVtZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuX3N0eWxlTWFwMi5nZXQoaWQpO1xuICAgIGlmICghdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlcy5oYXMoaWQpKSB7XG4gICAgICB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzLmFkZChpZCk7XG4gICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgc3R5bGUuZWwpO1xuICAgIH1cbiAgICBpZiAoZm9yQ2hhbmdlVGhlbWUgJiYgc3R5bGVNYXAudGhlbWVzW3RoaXMuY29uZmlnLm5hbWVdKSB7XG4gICAgICBzdHlsZS5lbC5pbm5lclRleHQgPSBzdHlsZU1hcC50aGVtZXNbdGhpcy5jb25maWcubmFtZV07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVDb250YWluZXIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXI7XG59XG5leHBvcnQgdHlwZSBTdHlsZXNGbjI8VD4gPSAoVCkgPT4gU3R5bGVzMjtcblxuZnVuY3Rpb24gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlczogU3R5bGVzMiwgaWQ6IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgLy8gbGV0IG5ld0tleSA9ICcnO1xuICAvLyBjb25zdCBzdHJpbmdcbiAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gQ0xBU1NFU19NQVBbaWRdID8gQ0xBU1NFU19NQVBbaWRdIDogQ0xBU1NFU19NQVBbaWRdID0gYGUkeyhuZXh0SWQrKykudG9TdHJpbmcoMzYpfWA7XG4gICAgY29uc3QgY3NzID0gYC4ke2NsYXNzTmFtZX17JHtzdHlsZXN9fWA7XG4gICAgcmV0dXJuIG1lZGlhID8gdG9NZWRpYShjc3MsIG1lZGlhKSA6IGNzcztcbiAgfVxuICBjb25zdCBjbGFzc2VzTWFwID0gaWQgaW4gQ0xBU1NFU19NQVBcbiAgPyBDTEFTU0VTX01BUFtpZF1cbiAgOiBDTEFTU0VTX01BUFtpZF0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0ga2V5IGluIGNsYXNzZXNNYXBcbiAgICAgICAgPyBjbGFzc2VzTWFwW2tleV1cbiAgICAgICAgOiBjbGFzc2VzTWFwW2tleV0gPSBpc0Rldk1vZGUoKSA/IHRvQ2xhc3NOYW1lVmFsaWQoYCR7aWR9X18ke2tleX1gKSA6IGBlJHsobmV4dElkKyspLnRvU3RyaW5nKDM2KX1gO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcodmFsdWUgYXMgU3R5bGVzMiwgYC4ke2NsYXNzTmFtZX1gKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBpcyBzdHJpbmcnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlGcmFtZShuYW1lOiBzdHJpbmcsIG9iOiBPYmplY3QpIHtcbiAgbGV0IGNvbnRlbnQgPSBgQGtleWZyYW1lcyAke25hbWV9e2A7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBvYltrZXldO1xuICAgICAgY29udGVudCArPSBgJHtrZXl9JSAke3N0eWxlVG9TdHJpbmcoZWxlbWVudCwgJycpfWA7XG4gICAgfVxuICB9XG4gIGNvbnRlbnQgKz0gYH1gO1xuICByZXR1cm4gY29udGVudDtcbn1cbi8vIGNvbnNvbGUubG9nKCdrZXlmcmFtZScsIGNyZWF0ZUtleUZyYW1lKCdteWFuaW1hdGlvbicsIGtleUZyYW1lT2JqZWN0KSk7XG5cbi8qKlxuICoge2NvbG9yOidyZWQnfSB0byAuY2xhc3NOYW1le2NvbG9yOiByZWR9XG4gKi9cbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmcob2I6IE9iamVjdCwgY2xhc3NOYW1lPzogc3RyaW5nLCBwYXJlbnRDbGFzc05hbWU/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoZWxlbWVudCBhcyBTdHlsZXMyLCBzdHlsZUtleSwgY2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnN0IHN0eWxlS2V5SHlwaGVuQ2FzZSA9IHRvSHlwaGVuQ2FzZUNhY2hlKHN0eWxlS2V5KTtcbiAgICAgICAgLy8gY29uc3Qgc3R5bGVWYWx1ZSA9IHN0eWxlS2V5SHlwaGVuQ2FzZSA9PT0gJ2ZvbnQtc2l6ZScgJiYgdHlwZW9mIGVsZW1lbnQgPT09ICdudW1iZXInXG4gICAgICAgIC8vID8gdGhpcy5jb25maWcucHhUb1JlbShlbGVtZW50KVxuICAgICAgICAvLyA6IGVsZW1lbnQ7XG4gICAgICAgIGtleUFuZFZhbHVlICs9IGAke3RvSHlwaGVuQ2FzZUNhY2hlKHN0eWxlS2V5KX06JHtlbGVtZW50fTtgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgbGV0IG5ld0NsYXNzTmFtZSA9ICcnO1xuICAgIGlmIChwYXJlbnRDbGFzc05hbWUpIHtcbiAgICAgIG5ld0NsYXNzTmFtZSArPSBjbGFzc05hbWUuaW5kZXhPZignJicpID09PSAwID8gYCR7cGFyZW50Q2xhc3NOYW1lfSR7Y2xhc3NOYW1lLnNsaWNlKDEpfWAgOiBgJHtwYXJlbnRDbGFzc05hbWV9IC4ke2NsYXNzTmFtZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lO1xuICAgIH1cbiAgICBjb250ZW50ICs9IGAke25ld0NsYXNzTmFtZX1gO1xuICB9XG4gIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IF9wYXRoOiBzdHJpbmdbXSA9IHBhdGggaW5zdGFuY2VvZiBBcnJheSA/IHBhdGggOiBwYXRoLnNwbGl0KCc6Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBvYmogPSBvYmpbX3BhdGhbaV1dIHx8IHBhdGg7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cbmZ1bmN0aW9uIHRvQ2xhc3NOYW1lVmFsaWQoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgcyA9IHN0ci5yZXBsYWNlKC9bXFxXXS9nLCAnJyk7XG4gIHJldHVybiB0b0h5cGhlbkNhc2Uoc1swXS50b0xvd2VyQ2FzZSgpICsgcy5zbGljZSgxKSk7XG59XG5cbmZ1bmN0aW9uIHRvSHlwaGVuQ2FzZUNhY2hlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIgaW4gU1RZTEVfS0VZU19NQVBcbiAgPyBTVFlMRV9LRVlTX01BUFtzdHJdXG4gIDogU1RZTEVfS0VZU19NQVBbc3RyXSA9IHRvSHlwaGVuQ2FzZShzdHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gdG9NZWRpYShjc3M6IHN0cmluZywgbWVkaWE6IHN0cmluZykge1xuICByZXR1cm4gYEBtZWRpYSAke21lZGlhfXske2Nzc319YDtcbn1cblxuIl19