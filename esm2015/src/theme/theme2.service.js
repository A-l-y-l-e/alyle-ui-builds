import * as tslib_1 from "tslib";
import { Injectable, Renderer2, Inject, isDevMode, NgZone, Optional } from '@angular/core';
import { LY_THEME_NAME, LY_THEME, LY_THEME_GLOBAL_VARIABLES } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { Platform } from '../platform';
import { DOCUMENT } from '@angular/common';
import { DirAlias, Dir } from '../style-utils';
import { YPosition } from '../position/position';
import { TypeStyle, _STYLE_MAP, getThemeNameForSelectors } from './style';
import { Subject } from 'rxjs';
import { StringIdGenerator } from '../parse';
import * as i0 from "@angular/core";
const REF_REG_EXP = /\{([\w-]+)\}/g;
let nextKeyFrameId = 0;
const yClassID = new StringIdGenerator();
export const keyframesUniqueId = new StringIdGenerator();
let StylesInDocument = class StylesInDocument {
    constructor() {
        this.styles = {};
        this.styleContainers = new Map();
        this.styleElementGlobalMap = new Map();
    }
};
StylesInDocument.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
StylesInDocument = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], StylesInDocument);
export { StylesInDocument };
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
LyTheme2 = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(2, Inject(LY_THEME_NAME)),
    tslib_1.__param(3, Optional()), tslib_1.__param(3, Inject(LY_THEME)),
    tslib_1.__param(4, Optional()), tslib_1.__param(4, Inject(LY_THEME_GLOBAL_VARIABLES)),
    tslib_1.__param(5, Inject(DOCUMENT))
], LyTheme2);
export { LyTheme2 };
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
export function converterToCssKeyAndStyle(str, themeVariables) {
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
export function capitalizeFirstLetter(str) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFrQixRQUFRLEVBQUUseUJBQXlCLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBS1Ysd0JBQXdCLEVBQ2QsTUFBTSxTQUFTLENBQUM7QUFDNUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUU1RCxNQUFNLFdBQVcsR0FBRyxlQUFlLENBQUM7QUFFcEMsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLE1BQU0sUUFBUSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztBQUN6QyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFLekQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFIN0I7UUFJRSxXQUFNLEdBRUYsRUFBRSxDQUFDO1FBQ1Asb0JB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QVcsRUFBRSxjQUE4QixFQUFFLFFBQWtCO0lBQ3pGLE1BQU0sR0FBRyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsb0RBQW9EO0lBQ3BELE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUN0RixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsUUFBUSxFQUFFLEdBQVcsRUFBRSxjQUE4QixFQUFFLEdBQWMsRUFBRSxFQUFvQjtJQUNqSCxNQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELG9EQUFvRDtJQUNwRCxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLEdBQVc7SUFDL0MsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRUQsU0FBUyxpQkFBaUI7SUFDeEIsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsQ0FBQztBQUNELFNBQVMsbUJBQW1CO0lBQzFCLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLENBQUM7QUFDRCxTQUFTLG9CQUFvQjtJQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQy9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgaXNEZXZNb2RlLCBOZ1pvbmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBUaGVtZVZhcmlhYmxlcywgTFlfVEhFTUUsIExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMsIFRoZW1lQ29uZmlnIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpckFsaWFzLCBEaXIgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5pbXBvcnQgeyBZUG9zaXRpb24gfSBmcm9tICcuLi9wb3NpdGlvbi9wb3NpdGlvbic7XG5pbXBvcnQgeyBTdHlsZU1hcDUsXG4gIFN0eWxlR3JvdXAsXG4gIFR5cGVTdHlsZSxcbiAgU3R5bGVDb250YWluZXIsXG4gIF9TVFlMRV9NQVAsXG4gIFN0eWxlcyxcbiAgU3R5bGVEZWNsYXJhdGlvbnNCbG9jayxcbiAgS2V5ZnJhbWVzRGVwcmVjYXRlZCxcbiAgTHlDbGFzc2VzLFxuICBnZXRUaGVtZU5hbWVGb3JTZWxlY3RvcnMsXG4gIEx5U3R5bGVzIH0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdHlsZVRlbXBsYXRlLCBTdHJpbmdJZEdlbmVyYXRvciB9IGZyb20gJy4uL3BhcnNlJztcblxuY29uc3QgUkVGX1JFR19FWFAgPSAvXFx7KFtcXHctXSspXFx9L2c7XG5cbmxldCBuZXh0S2V5RnJhbWVJZCA9IDA7XG5jb25zdCB5Q2xhc3NJRCA9IG5ldyBTdHJpbmdJZEdlbmVyYXRvcigpO1xuZXhwb3J0IGNvbnN0IGtleWZyYW1lc1VuaXF1ZUlkID0gbmV3IFN0cmluZ0lkR2VuZXJhdG9yKCk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlc0luRG9jdW1lbnQge1xuICBzdHlsZXM6IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBNYXA8c3RyaW5nIHwgU3R5bGVzLCBIVE1MU3R5bGVFbGVtZW50PlxuICB9ID0ge307XG4gIHN0eWxlQ29udGFpbmVycyA9IG5ldyBNYXA8bnVtYmVyLCBIVE1MRWxlbWVudD4oKTtcbiAgc3R5bGVFbGVtZW50R2xvYmFsTWFwID0gbmV3IE1hcDxzdHJpbmcgfCBTdHlsZXMsIEhUTUxTdHlsZUVsZW1lbnQ+KCk7XG59XG5cbmNvbnN0IFRIRU1FX01BUCA9IG5ldyBNYXA8c3RyaW5nLCB7XG4gIGJhc2U6IHN0cmluZ1xuICBjaGFuZ2U6IHN0cmluZyB8IG51bGxcbn0+KCk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lMiB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYHRoZW1lVmFyaWFibGVzYCBpbnN0ZWFkXG4gICAqL1xuICBjb25maWc6IFRoZW1lVmFyaWFibGVzO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG4gIGluaXRpYWxUaGVtZTogc3RyaW5nO1xuICBlbGVtZW50czogTWFwPHN0cmluZyB8IFN0eWxlcywgSFRNTFN0eWxlRWxlbWVudD47XG4gIF9lbGVtZW50c01hcCA9IG5ldyBNYXA8YW55LCBIVE1MU3R5bGVFbGVtZW50PigpO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGRpcmVjdGlvbiBoYXMgY2hhbmdlZC4gKi9cbiAgcHJpdmF0ZSBfZGlyZWN0aW9uQ2hhbmdlZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGdldCBkaXJlY3Rpb25DaGFuZ2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb25DaGFuZ2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIEdldCBUaGVtZSBWYXJpYWJsZXMgKi9cbiAgZ2V0IHZhcmlhYmxlcygpOiBUaGVtZVZhcmlhYmxlcyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9XG4gIHByaXZhdGUgdGhlbWVNYXAgPSBUSEVNRV9NQVA7XG4gIC8qKiBzc3Igb3IgaG1yICovXG4gIHByaXZhdGUgaXNEZXZPclNlcnZlciA9IGlzRGV2TW9kZSgpIHx8ICFQbGF0Zm9ybS5pc0Jyb3dzZXI7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlc0luRG9jdW1lbnQ6IFN0eWxlc0luRG9jdW1lbnQsXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FKSB0aGVtZUNvbmZpZzogVGhlbWVDb25maWdbXSB8IFRoZW1lQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUykgZ2xvYmFsVmFyaWFibGVzOiBUaGVtZUNvbmZpZyxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIGlmICh0aGVtZUNvbmZpZykge1xuICAgICAgY29yZS5pbml0aWFsaXplVGhlbWUodGhlbWVDb25maWcsIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgfVxuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgY29uc3QgdGhlbWUgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICBpZiAodGhlbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZW1lICR7dGhlbWVOYW1lfSBub3QgZm91bmQgaW4gQ29yZVRoZW1lYCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoZW1lO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IHRoZW1lTmFtZSBpbiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzXG4gICAgICA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXVxuICAgICAgOiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV0gPSBuZXcgTWFwKCk7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbFRoZW1lKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRoZW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy50aGVtZU1hcC5oYXModGhpcy5pbml0aWFsVGhlbWUpKSB7XG4gICAgICAgIHRoaXMudGhlbWVNYXAuc2V0KHRoaXMuaW5pdGlhbFRoZW1lLCB7XG4gICAgICAgICAgYmFzZTogdGhpcy5pbml0aWFsVGhlbWUsXG4gICAgICAgICAgY2hhbmdlOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBtdWx0aXBsZSBzdHlsZXMgYW5kIHJlbmRlciB0aGVtIGluIHRoZSBET01cbiAgICovXG4gIHJlbmRlclN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgTHlTdHlsZXMpOiBMeUNsYXNzZXM8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgbnVsbCwgbnVsbCwgVHlwZVN0eWxlLk11bHRpcGxlKTtcbiAgfVxuXG4gIHJlbmRlclN0eWxlPFRIRU1FX1ZBUklBQkxFUz4oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBzdHlsZTogKHRoZW1lOiBUSEVNRV9WQVJJQUJMRVMsIHJlZjogVGhlbWVSZWYpID0+IFN0eWxlVGVtcGxhdGUsXG4gICAgcHJpb3JpdHk/OiBudW1iZXJcbiAgKTogc3RyaW5nO1xuXG4gIHJlbmRlclN0eWxlPFRIRU1FX1ZBUklBQkxFUz4oXG4gICAgc3R5bGU6ICh0aGVtZTogVEhFTUVfVkFSSUFCTEVTLCByZWY6IFRoZW1lUmVmKSA9PiBTdHlsZVRlbXBsYXRlLFxuICAgIHByaW9yaXR5PzogbnVtYmVyXG4gICk6IHN0cmluZztcbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBzdHlsZXMgYW5kIHJlbmRlciB0aGVtIGluIHRoZSBET01cbiAgICovXG4gIHJlbmRlclN0eWxlPFRIRU1FX1ZBUklBQkxFUz4oXG4gICAgc3R5bGVPcklkOiAoKHRoZW1lOiBUSEVNRV9WQVJJQUJMRVMsIHJlZjogVGhlbWVSZWYpID0+IFN0eWxlVGVtcGxhdGUpIHwgc3RyaW5nLFxuICAgIHByaW9yaXR5T3JTdHlsZT86IG51bWJlciB8ICgodGhlbWU6IFRIRU1FX1ZBUklBQkxFUywgcmVmOiBUaGVtZVJlZikgPT4gU3R5bGVUZW1wbGF0ZSksXG4gICAgcHJpb3JpdHk/OiBudW1iZXJcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHN0eWxlT3JJZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHByaW9yaXR5T3JTdHlsZSBhcyAodGhlbWU6IFRIRU1FX1ZBUklBQkxFUywgcmVmOiBUaGVtZVJlZikgPT4gU3R5bGVUZW1wbGF0ZSxcbiAgICAgICAgc3R5bGVPcklkLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgVHlwZVN0eWxlLkx5bFN0eWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVPcklkLFxuICAgICAgbnVsbCxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgVHlwZVN0eWxlLkx5bFN0eWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKiBAcGFyYW0gcGFyZW50U3R5bGVcbiAgICovXG4gIGFkZFN0eWxlKGlkOiBzdHJpbmcsXG4gICAgc3R5bGU/OiBTdHlsZURlY2xhcmF0aW9uc0Jsb2NrLFxuICAgIGVsPzogYW55LFxuICAgIGluc3RhbmNlPzogc3RyaW5nIHwgbnVsbCxcbiAgICBwcmlvcml0eT86IG51bWJlciB8IG51bGwsXG4gICAgcGFyZW50U3R5bGU/OiBTdHlsZXMpIHtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGUsIGlkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBwYXJlbnRTdHlsZSkgYXMgc3RyaW5nO1xuICAgIGlmIChuZXdDbGFzcyA9PT0gaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgaWYgKGVsKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBiYXNpYyBzdHlsZVxuICAgKiBAcGFyYW0gc3R5bGUgU3R5bGVzLlxuICAgKiBOb3RlOiBVc2Ugb25seSB3aXRoIGltbXV0YWJsZSB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHByaW9yaXR5IFByaW9yaXR5IG9mIHN0eWxlXG4gICAqIEBwYXJhbSBwYXJlbnRTdHlsZVxuICAgKi9cbiAgc3R5bGUoc3R5bGU6IFN0eWxlRGVjbGFyYXRpb25zQmxvY2ssIHByaW9yaXR5PzogbnVtYmVyIHwgbnVsbCwgcGFyZW50U3R5bGU/OiBTdHlsZXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlLFxuICAgICAgbnVsbCxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgVHlwZVN0eWxlLk9ubHlPbmUsXG4gICAgICBmYWxzZSwgcGFyZW50U3R5bGUpIGFzIHN0cmluZztcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0NsYXNzID09PSBvbGRDbGFzcykge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgaWYgKG5hbSAhPT0gdGhpcy5jb25maWcubmFtZSkge1xuICAgICAgY29uc3QgdGhlbWUgPSB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSk7XG4gICAgICBpZiAodGhlbWUgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZW1lICR7bmFtfSBub3QgZm91bmQgaW4gdGhlbWVNYXBgKTtcbiAgICAgIH1cbiAgICAgIHRoZW1lLmNoYW5nZSA9IG5hbTtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldChuYW0pITtcbiAgICAgIHRoaXMuX3VwZGF0ZUFsbFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBUb2dnbGUgcmlnaHQtdG8tbGVmdC9sZWZ0LXRvLXJpZ2h0ICovXG4gIHRvZ2dsZURpcmVjdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jb25maWcuZGlyZWN0aW9uO1xuICAgIHRoaXMuY29uZmlnLmRpcmVjdGlvbiA9IGN1cnJlbnQgPT09IERpci5sdHIgPyBEaXIucnRsIDogRGlyLmx0cjtcbiAgICB0aGlzLl91cGRhdGVBbGxTdHlsZXMoKTtcbiAgICB0aGlzLl9kaXJlY3Rpb25DaGFuZ2VkLm5leHQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUFsbFN0eWxlcygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVEYXRhID0gX1NUWUxFX01BUC5nZXQoa2V5KSE7XG4gICAgICBpZiAoc3R5bGVEYXRhLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZURhdGEuc3R5bGVzLCBzdHlsZURhdGEuaWQsIHN0eWxlRGF0YS5wcmlvcml0eSwgc3R5bGVEYXRhLnR5cGUsIHRydWUsIHN0eWxlRGF0YS5wYXJlbnRTdHlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2ltcGxlIHN0eWxlXG4gICAqIHJldHVybiBjbGFzc05hbWVcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgb2JqZWN0IG9yIHN0cmluZ1xuICAgKiBAcGFyYW0gcHJpb3JpdHkgc3R5bGUgcHJpb3JpdHkoZGVmYXVsdDogMClcbiAgICovXG4gIGFkZFNpbXBsZVN0eWxlKGlkOiBzdHJpbmcsIGNzczogU3R5bGVDb250YWluZXIgfCAoKHRoZW1lKSA9PiBTdHlsZUNvbnRhaW5lciksIHByaW9yaXR5PzogbnVtYmVyLCBwYXJlbnRTdHlsZT86IFN0eWxlcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoY3NzIGFzIGFueSwgaWQsIHByaW9yaXR5LCBUeXBlU3R5bGUuT25seU9uZSwgZmFsc2UsIHBhcmVudFN0eWxlKSBhcyBzdHJpbmc7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGFkZCBhIG5ldyBzdHlsZSBzaGVldFxuICAgKiBAcGFyYW0gc3R5bGVzIHN0eWxlc1xuICAgKiBAcGFyYW0gcHJpb3JpdHkgcHJpb3JpdHkgZm9yIHN0eWxlXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIFN0eWxlcywgcHJpb3JpdHk/OiBudW1iZXIpOiBMeUNsYXNzZXM8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgbnVsbCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBzdHlsZSBleGlzdFxuICAgKiBAcGFyYW0gc3R5bGVzT3JJZCBTdHlsZSBvciBJZCBvZiBhIHN0eWxlXG4gICAqL1xuICBleGlzdFN0eWxlKHN0eWxlc09ySWQ6IHN0cmluZyB8IFN0eWxlcyB8IFN0eWxlRGVjbGFyYXRpb25zQmxvY2spOiBib29sZWFuIHtcbiAgICBpZiAoX1NUWUxFX01BUC5oYXMoc3R5bGVzT3JJZCkpIHtcbiAgICAgIGNvbnN0IHN0eWxlTWFwID0gX1NUWUxFX01BUC5nZXQoc3R5bGVzT3JJZCkhO1xuICAgICAgcmV0dXJuICEhKHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhpcy5pbml0aWFsVGhlbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0b3JzT2Y8VD4oc3R5bGVzOiBUKTogTHlDbGFzc2VzPFQ+IHtcbiAgICBjb25zdCB0aGVtZU5hbWUgPSB0aGlzLmluaXRpYWxUaGVtZTtcbiAgICBpZiAoIV9TVFlMRV9NQVAuaGFzKHN0eWxlcykpIHtcbiAgICAgIF9TVFlMRV9NQVAuc2V0KHN0eWxlcywge1xuICAgICAgICBpc05ld1N0eWxlOiB0cnVlLFxuICAgICAgICBzdHlsZXM6IDxTdHlsZXM+PHVua25vd24+c3R5bGVzLFxuICAgICAgICB0eXBlOiBUeXBlU3R5bGUuTXVsdGlwbGUsXG4gICAgICAgIGNzczoge30sXG4gICAgICAgIGlkOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGVNYXAgPSBfU1RZTEVfTUFQLmdldChzdHlsZXMpITtcbiAgICBjb25zdCB0aGVtZU5hbWVGb3JTZWxlY3RvcnMgPSBnZXRUaGVtZU5hbWVGb3JTZWxlY3RvcnModGhlbWVOYW1lKTtcbiAgICBjb25zdCBjbGFzc2VzTWFwID0gc3R5bGVNYXBbdGhlbWVOYW1lRm9yU2VsZWN0b3JzXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lRm9yU2VsZWN0b3JzXSA9IHt9KTtcbiAgICByZXR1cm4gY2xhc3Nlc01hcDtcbiAgfVxuXG4gIGdldENsYXNzKHN0eWxlczogc3RyaW5nIHwgU3R5bGVUZW1wbGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gdGhpcy5pbml0aWFsVGhlbWU7XG4gICAgY29uc3Qgc3R5bGVNYXAgPSBfU1RZTEVfTUFQLmdldChzdHlsZXMpITtcbiAgICByZXR1cm4gc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBpbnRlcm5hbCB1c2Ugb25seVxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBfY3JlYXRlU3R5bGVDb250ZW50MihcbiAgICBzdHlsZXM6IFN0eWxlc1xuICAgICAgfCBTdHlsZURlY2xhcmF0aW9uc0Jsb2NrXG4gICAgICB8ICgodGhlbWU6IGFueSwgcmVmOiBUaGVtZVJlZikgPT4gU3R5bGVUZW1wbGF0ZSksXG4gICAgaWQ6IHN0cmluZyB8IG51bGwsXG4gICAgcHJpb3JpdHk6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGwsXG4gICAgdHlwZTogVHlwZVN0eWxlLFxuICAgIGZvckNoYW5nZVRoZW1lPzogYm9vbGVhbixcbiAgICBwYXJlbnRTdHlsZT86IFN0eWxlc1xuICApIHtcbiAgICBjb25zdCBuZXdJZCA9IGlkIHx8IHN0eWxlcyBhcyBTdHlsZXM7XG4gICAgaWYgKCFfU1RZTEVfTUFQLmhhcyhuZXdJZCkpIHtcbiAgICAgIF9TVFlMRV9NQVAuc2V0KG5ld0lkLCB7XG4gICAgICAgIGlzTmV3U3R5bGU6IHRydWUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyBhcyBTdHlsZXMsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGNzczoge30sXG4gICAgICAgIGlkLFxuICAgICAgICBwYXJlbnRTdHlsZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlTWFwID0gX1NUWUxFX01BUC5nZXQobmV3SWQpITtcbiAgICBjb25zdCB0aGVtZU5hbWUgPSB0aGlzLmluaXRpYWxUaGVtZTtcbiAgICBjb25zdCBpc0NyZWF0ZWQgPSBzdHlsZU1hcC5pc05ld1N0eWxlIHx8ICEoc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdKTtcbiAgICBpZiAoaXNDcmVhdGVkIHx8IGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICBzdHlsZU1hcC5pc05ld1N0eWxlID0gZmFsc2U7XG4gICAgICAvLyBjcmVhdGUgbmV3IHN0eWxlIGZvciBuZXcgdGhlbWVcbiAgICAgIGxldCBjc3M6IHN0cmluZyB8IHsgW3RoZW1lTmFtZTogc3RyaW5nXTogc3RyaW5nOyB9O1xuICAgICAgY29uc3QgdGhlbWVNYXAgPSB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSkhO1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU1hcC5jaGFuZ2UgfHwgdGhlbWVOYW1lKSBhcyBUaGVtZVZhcmlhYmxlcztcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUgPSB0cnVlO1xuICAgICAgICBjc3MgPSB0eXBlID09PSBUeXBlU3R5bGUuTHlsU3R5bGVcbiAgICAgICAgICA/IGNyZWF0ZUx5bFN0eWxlKFxuICAgICAgICAgICAgICBzdHlsZU1hcCxcbiAgICAgICAgICAgICAgKHN0eWxlcyBhcyAoKHRoZW1lOiBhbnksIHJlZjogVGhlbWVSZWYpID0+IFN0eWxlVGVtcGxhdGUpKShjb25maWcsIHRoaXMpLFxuICAgICAgICAgICAgICB0aGVtZU5hbWUpXG4gICAgICAgICAgOiBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVNYXAsIHN0eWxlcyhjb25maWcsIHRoaXMpIGFzIFN0eWxlR3JvdXAsIHRoZW1lTmFtZSwgaWQsIHR5cGUsIGNvbmZpZyk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIGNyZWF0ZSBhIG5ldyBpZCBmb3Igc3R5bGUgdGhhdCBkb2VzIG5vdCA8LTxyZXF1aXJlPi0+IGNoYW5nZXMgKi9cbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXMgYXMgU3R5bGVHcm91cCwgdGhlbWVOYW1lLCBuZXdJZCBhcyBzdHJpbmcsIHR5cGUsIGNvbmZpZyk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMobmV3SWQpKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsID0gdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKGNzcyk7XG4gICAgICAgIGlmIChzdHlsZU1hcC5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyByZXF1aXJlZCBmb3Igd2hlbiBhIHRoZW1lIGNoYW5nZXNcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgbmV3RWwpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZXZPclNlcnZlcikge1xuICAgICAgICAgIC8vIGluIGRldiBtb2RlIG9yIHNlcnZlciBpdCBpcyBub3QgbmVjZXNzYXJ5XG4gICAgICAgICAgLy8gc2luY2UgdGhlIHN0eWxlcyB3aWxsIG5vdCBjaGFuZ2VcbiAgICAgICAgICB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVFbGVtZW50R2xvYmFsTWFwLnNldChuZXdJZCwgbmV3RWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIG5ld0VsKTtcbiAgICAgIH1cbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKSBhcyBIVE1MU3R5bGVFbGVtZW50O1xuICAgICAgICBlbC5pbm5lclRleHQgPSBjc3M7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRGV2T3JTZXJ2ZXIpIHtcbiAgICAgIC8qKlxuICAgICAgICogYXBwZW5kIGNoaWxkIHN0eWxlIGlmIG5vdCBleGlzdCBpbiBkb21cbiAgICAgICAqIGZvciBzc3Igb3IgaG1yXG4gICAgICAgKi9cbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMobmV3SWQpKSB7XG4gICAgICAgIGNvbnN0IF9jc3MgPSBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSB8fCBzdHlsZU1hcC5jc3M7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZUVsZW1lbnRHbG9iYWxNYXA7XG4gICAgICAgIGlmIChzdHlsZU1hcC5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgdGhpcy5lbGVtZW50cy5nZXQobmV3SWQpKTtcbiAgICAgICAgfSBlbHNlIGlmICghbWFwLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgICBtYXAuc2V0KG5ld0lkLCB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoX2NzcykpO1xuICAgICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIG1hcC5nZXQobmV3SWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVDb250YWluZXIocHJpb3JpdHk6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICBwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG4gICAgY29uc3QgeyBzdHlsZUNvbnRhaW5lcnMgfSA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudDtcbiAgICBpZiAoIXN0eWxlQ29udGFpbmVycy5oYXMocHJpb3JpdHkpKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KGBseS1zLWNgKTtcbiAgICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAncHJpb3JpdHknLCBgJHtwcmlvcml0eX1gKTtcbiAgICAgIH1cbiAgICAgIHN0eWxlQ29udGFpbmVycy5zZXQocHJpb3JpdHksIGVsKTtcbiAgICAgIGlmIChzdHlsZUNvbnRhaW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2RvY3VtZW50LmJvZHksIGVsLCB0aGlzLl9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgICB9XG4gICAgY29uc3QgcmVmQ2hpbGQgPSB0aGlzLmZpbmROb2RlKHByaW9yaXR5KTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX2RvY3VtZW50LmJvZHksIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpLCByZWZDaGlsZCk7XG4gICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kTm9kZShpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBzdHlsZUNvbnRhaW5lcnMgfSA9IHRoaXMuc3R5bGVzSW5Eb2N1bWVudDtcbiAgICBjb25zdCBrZXlzID0gKEFycmF5LmZyb20oc3R5bGVDb250YWluZXJzLmtleXMoKSkpLnNvcnQoKTtcbiAgICBjb25zdCBrZXkgPSBrZXlzLmZpbmQoXyA9PiBpbmRleCA8IF8pO1xuICAgIHJldHVybiAoa2V5ICE9PSB1bmRlZmluZWQgJiYgc3R5bGVDb250YWluZXJzLmdldChrZXkpKSB8fCB0aGlzLmNvcmUuZmlyc3RFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlRWxlbWVudFN0eWxlKGNzczogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZVRleHQoY3NzKTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZVRleHQpO1xuICAgIHJldHVybiBzdHlsZUVsZW1lbnQ7XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCkge1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTHlsU3R5bGUoXG4gIHN0eWxlTWFwOiBTdHlsZU1hcDUsXG4gIHN0eWxlczogU3R5bGVUZW1wbGF0ZSxcbiAgdGhlbWVOYW1lOiBzdHJpbmdcbikge1xuICAvLyBjb25zdCBjbGFzc05hbWUgPSBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlXG4gIC8vID8gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IGNyZWF0ZU5leHRDbGFzc0lkKCkpXG4gIC8vIDogc3R5bGVNYXAuY2xhc3Nlc1xuICAvLyAgID8gc3R5bGVNYXAuY2xhc3Nlc1xuICAvLyAgIDogc3R5bGVNYXAuY2xhc3NlcyA9IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG5cbiAgLy8gdXNlIGN1cnJlbnQgY2xhc3Mgb3Igc2V0IG5ld1xuICBsZXQgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIGNsYXNzTmFtZSA9IHN0eWxlTWFwW3RoZW1lTmFtZV1cbiAgICB8fCAoXG4gICAgICBzdHlsZU1hcFt0aGVtZU5hbWVdID0gaXNEZXZNb2RlKClcbiAgICAgICAgPyBzdHlsZU1hcC5pZFxuICAgICAgICAgID8gYCR7dG9WYWxpZENsYXNzTmFtZShzdHlsZU1hcC5pZCEpfS0ke2NyZWF0ZU5leHRDbGFzc0lkKCl9YFxuICAgICAgICAgIDogYCR7KHN0eWxlTWFwLnN0eWxlcyBhcyBGdW5jdGlvbikubmFtZSB8fCAnaWknfS0ke2NyZWF0ZU5leHRDbGFzc0lkKCl9YFxuICAgICAgICA6IGNyZWF0ZU5leHRDbGFzc0lkKClcbiAgICApO1xuXG4gIHJldHVybiBzdHlsZXMoYC4ke2NsYXNzTmFtZX1gKTtcbn1cblxuZnVuY3Rpb24gZ3JvdXBTdHlsZVRvU3RyaW5nKFxuICBzdHlsZU1hcDogU3R5bGVNYXA1LFxuICBzdHlsZXM6IFN0eWxlR3JvdXAsXG4gIHRoZW1lTmFtZTogc3RyaW5nLFxuICBpZDogc3RyaW5nIHwgbnVsbCxcbiAgdHlwZVN0eWxlOiBUeXBlU3R5bGUsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlc1xuKSB7XG5cbiAgLy8gZm9yIHN0eWxlcyB0eXBlIHN0cmluZ1xuICBpZiAodHlwZVN0eWxlID09PSBUeXBlU3R5bGUuT25seU9uZSkge1xuICAgIC8vIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXdcbiAgICBjb25zdCBjbGFzc05hbWUgPSBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlXG4gICAgPyBzdHlsZU1hcFt0aGVtZU5hbWVdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVdID0gY3JlYXRlTmV4dENsYXNzSWQoKSlcbiAgICA6IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgID8gc3R5bGVNYXAuY2xhc3Nlc1xuICAgICAgOiBzdHlsZU1hcC5jbGFzc2VzID0gY3JlYXRlTmV4dENsYXNzSWQoKTtcbiAgICBsZXQgcnVsZXM6IHN0cmluZztcbiAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJ1bGVzID0gYC4ke2NsYXNzTmFtZX17JHtzdHlsZXN9fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bGVzID0gc3R5bGVUb1N0cmluZyhpZCwgbnVsbCwgc3R5bGVzIGFzIFN0eWxlQ29udGFpbmVyLCB0aGVtZVZhcmlhYmxlcywgY2xhc3NOYW1lIGFzIGFueSk7XG4gICAgfVxuICAgIGlmIChzdHlsZU1hcC5wYXJlbnRTdHlsZSkge1xuICAgICAgY29uc3Qgc3R5bGVNYXBPZlBhcmVudFN0eWxlID0gX1NUWUxFX01BUC5nZXQoc3R5bGVNYXAucGFyZW50U3R5bGUpO1xuICAgICAgaWYgKCFzdHlsZU1hcE9mUGFyZW50U3R5bGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFyZW50U3R5bGUgbm90IGV4aXN0IG9yIGlzIGNhbGxlZCBiZWZvcmUgYmVpbmcgY3JlYXRlZC5gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXBsYWNlUmVmcyhydWxlcywgc3R5bGVNYXBPZlBhcmVudFN0eWxlW3RoZW1lTmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICAvLyBmb3IgbXVsdGlwbGVzIHN0eWxlc1xuICBjb25zdCB0aGVtZU5hbWVGb3JTZWxlY3RvcnMgPSBnZXRUaGVtZU5hbWVGb3JTZWxlY3RvcnModGhlbWVOYW1lKTtcbiAgY29uc3QgY2xhc3Nlc01hcCA9IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSB7fSk7XG4gIGNvbnN0IHNlbGVjdG9yc01hcCA9IHN0eWxlTWFwW3RoZW1lTmFtZUZvclNlbGVjdG9yc10gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZUZvclNlbGVjdG9yc10gPSB7fSk7XG4gIGNvbnN0IHN0eWxlR3JvdXAgPSA8U3R5bGVHcm91cD5zdHlsZXM7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGNvbnN0IG5hbWUgPSBzdHlsZUdyb3VwLiRuYW1lID8gYCR7c3R5bGVHcm91cC4kbmFtZX0tYCA6ICcnO1xuXG4gIC8vIHNldCBwcmlvcml0eVxuICBpZiAoc3R5bGVHcm91cC4kcHJpb3JpdHkgIT0gbnVsbCkge1xuICAgIHN0eWxlTWFwLnByaW9yaXR5ID0gc3R5bGVHcm91cC4kcHJpb3JpdHk7XG4gIH1cblxuICBpZiAoIXN0eWxlTWFwLmtleXMpIHtcbiAgICBzdHlsZU1hcC5rZXlzID0gT2JqZWN0LmtleXMoc3R5bGVzKTtcbiAgfVxuXG4gIGNvbnN0IGtleXMgPSBzdHlsZU1hcC5rZXlzO1xuXG4gIC8qKiBUaGlzIGxvb3AgY3JlYXRlcyB0aGUgY2xhc3NlcyBpZiBuZWNlc3NhcnkgKi9cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGtleXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpbmRleF07XG4gICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICBpZiAoa2V5ID09PSAnJGdsb2JhbCcgfHwga2V5ID09PSAnJGtleWZyYW1lcycpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIGx5bFxuICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgIGlmICghKGtleSBpbiBjbGFzc2VzTWFwKSkge1xuICAgICAgICBjbGFzc2VzTWFwW2tleV0gPSBpc0Rldk1vZGUoKVxuICAgICAgICAgID8gYCR7dG9WYWxpZENsYXNzTmFtZShuYW1lICsga2V5KX0tJHtjcmVhdGVVbmlxdWVDbGFzc0lEKCl9YFxuICAgICAgICAgIDogY3JlYXRlVW5pcXVlQ2xhc3NJRCgpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAvLyBzZXQgbmV3IGlkIGlmIG5vdCBleGlzdFxuICAgICAgaWYgKCEoa2V5IGluIGNsYXNzZXNNYXApKSB7XG4gICAgICAgIGNsYXNzZXNNYXBba2V5XSA9IGlzRGV2TW9kZSgpID8gdG9WYWxpZENsYXNzTmFtZShgeS0ke25hbWV9JHtrZXl9LSR7Y3JlYXRlTmV4dENsYXNzSWQoKX1gKSA6IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCEoa2V5IGluIHNlbGVjdG9yc01hcCkpIHtcbiAgICAgIHNlbGVjdG9yc01hcFtrZXldID0gYC4ke2NsYXNzZXNNYXBba2V5XX1gO1xuICAgIH1cblxuICB9XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGtleXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpbmRleF07XG4gICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBseWxcbiAgICAgIGlmIChrZXkgPT09ICckZ2xvYmFsJykge1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGVudCArPSB2YWx1ZShgLyogR2xvYmFsIFN0eWxlICovYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGVudCArPSAodmFsdWUgYXMgKCgpID0+IFN0eWxlVGVtcGxhdGUpKSgpKGAvKiBHbG9iYWwgU3R5bGUgKi9gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvcnNNYXBba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRlbnQgKz0gdmFsdWUoc2VsZWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0ID0gKHZhbHVlIGFzICgoKSA9PiBTdHlsZVRlbXBsYXRlIHwgbnVsbCkpKCk7XG4gICAgICAgICAgaWYgKHN0KSB7XG4gICAgICAgICAgICBjb250ZW50ICs9IHN0KHNlbGVjdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnJGtleWZyYW1lcycpIHtcbiAgICAgIGNvbnRlbnQgKz0ga2V5ZnJhbWVzVG9TdHJpbmcobmFtZSwgY2xhc3Nlc01hcCwgdmFsdWUgYXMgS2V5ZnJhbWVzRGVwcmVjYXRlZCwgdGhlbWVWYXJpYWJsZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY3VycmVudENsYXNzTmFtZSA9IGNsYXNzZXNNYXBba2V5XTtcbiAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyhrZXksIHN0eWxlR3JvdXAuJG5hbWUsIHZhbHVlIGFzIFN0eWxlQ29udGFpbmVyLCB0aGVtZVZhcmlhYmxlcywgY3VycmVudENsYXNzTmFtZSk7XG4gICAgICBjb250ZW50ICs9IHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXBsYWNlUmVmcyhjb250ZW50LCBjbGFzc2VzTWFwKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVJlZnMoc3RyOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVGX1JFR19FWFAsIChfbWF0Y2gsIHRva2VuKSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gZGF0YVt0b2tlbl07XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGAuJHtkYXRhW3Rva2VuXX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YVtgQNCzLi0+LSR7dG9rZW59YF07XG4gICAgfVxuICB9XG4gICk7XG59XG5cbi8qKlxuICoge2NvbG9yOidyZWQnfSB0byAuY2xhc3NOYW1le2NvbG9yOiByZWR9XG4gKi9cbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmcoXG4gIGtleTogc3RyaW5nIHwgbnVsbCxcbiAgJG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsXG4gIG9iOiBTdHlsZUNvbnRhaW5lcixcbiAgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLFxuICBjdXJyZW50S2V5OiBzdHJpbmcsXG4gIHBhcmVudEtleT86IHN0cmluZ1xuKSB7XG5cbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IHN1YkNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGxldCBuZXdLZXk6IHN0cmluZztcbiAgaWYgKHBhcmVudEtleSkge1xuICAgIGlmIChjdXJyZW50S2V5LmluZGV4T2YoJyYnKSAhPT0gLTEpIHtcbiAgICAgIG5ld0tleSA9IGN1cnJlbnRLZXkucmVwbGFjZSgvJi9nLCBwYXJlbnRLZXkpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgbmV3S2V5ID0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEtleSA9PT0gJ0BnbG9iYWwnIHx8IHBhcmVudEtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgICBuZXdLZXkgPSBjdXJyZW50S2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdLZXkgPSBgJHtwYXJlbnRLZXl9ICR7Y3VycmVudEtleX1gO1xuICAgIH1cbiAgfSBlbHNlIGlmIChrZXkgPT09ICdAZ2xvYmFsJykge1xuICAgIG5ld0tleSA9IGtleTtcbiAgfSBlbHNlIHtcbiAgICBuZXdLZXkgPSBgLiR7Y3VycmVudEtleX1gO1xuICB9XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgLy8gT21pdCBzdHlsZSB3aXRoIHZhbHVlIG51bGxcbiAgICAgIGlmIChlbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXMgT2JqZWN0IGxpdGVyYWxcbiAgICAgICAgaWYgKGVsZW1lbnQuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgIHN1YkNvbnRlbnQgKz0gc3R5bGVUb1N0cmluZyhrZXksICRuYW1lLCBlbGVtZW50IGFzIFN0eWxlQ29udGFpbmVyLCB0aGVtZVZhcmlhYmxlcywgc3R5bGVLZXksIG5ld0tleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAga2V5QW5kVmFsdWUgKz0gY29udmVydFRvU3R5bGVWYWx1ZShzdHlsZUtleSwgZWxlbWVudCBhcyBzdHJpbmcgfCBzdHJpbmdbXSwgdGhlbWVWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChrZXlBbmRWYWx1ZSkge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgbGV0IGxpbiA9ICdcXG5cXG4nO1xuICAgICAgaWYgKCRuYW1lKSB7XG4gICAgICAgIGxpbiArPSBgLyoqIFN0eWxlIFNoZWV0IG5hbWU6ICR7JG5hbWV9ICovXFxuYDtcbiAgICAgIH1cbiAgICAgIGxpbiArPSBgLyoqIFN0eWxlIEtleTogJHtrZXl9ICovXFxuYDtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bGlufWA7XG4gICAgfVxuICAgIGlmIChuZXdLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgICBrZXlBbmRWYWx1ZSA9IGAke3BhcmVudEtleX17JHtrZXlBbmRWYWx1ZX19YDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudEtleSAmJiBwYXJlbnRLZXkgPT09ICdAZ2xvYmFsJykge1xuICAgICAgY29udGVudCArPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgfVxuICAgIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICB9XG4gIHJldHVybiBjb250ZW50ICsgc3ViQ29udGVudDtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvU3R5bGVWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpIHtcbiAgY29uc3QgbmV3U3R5bGVLZXkgPSBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlQ2FjaGUoa2V5LCB0aGVtZVZhcmlhYmxlcyk7XG4gIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICBsZXQgbGluID0gJyc7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgbGluICs9IGAke25ld1N0eWxlS2V5fToke3ZhbHVlW2luZGV4XX07YDtcbiAgICB9XG4gICAgcmV0dXJuIGxpbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYCR7bmV3U3R5bGVLZXl9OiR7dmFsdWV9O2A7XG4gIH1cbn1cblxuZnVuY3Rpb24ga2V5ZnJhbWVzVG9TdHJpbmcoc3R5bGVOYW1lOiBzdHJpbmcsIGtleXNNYXA6IG9iamVjdCwga2V5ZnJhbWVzOiBLZXlmcmFtZXNEZXByZWNhdGVkLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcblxuICBmb3IgKGNvbnN0IG5hbWUgaW4ga2V5ZnJhbWVzKSB7XG4gICAgaWYgKGtleWZyYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgY29uc3Qga2V5ZnJhbWUgPSBrZXlmcmFtZXNbbmFtZV07XG4gICAgICAvLyBTb21ldGltZXMgdGhlIG5hbWUgb2YgYSBjbGFzcyBjYW4gYmUgdGhlIHNhbWUgYXMgdGhlIG5hbWUgb2YgYSBrZXlmcmFtZSxcbiAgICAgIC8vIHNvIHdlIGFkZCBhIGNoYXJhY3RlciB0byBiZSBkaWZmZXJlbnRcbiAgICAgIGNvbnN0IG5ld1VuaXF1ZU5hbWUgPSBgQNCzLi0+LSR7bmFtZX1gO1xuICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgIGNvbnN0IG5ld05hbWUgPSBuZXdVbmlxdWVOYW1lIGluIGtleXNNYXBcbiAgICAgID8ga2V5c01hcFtuZXdVbmlxdWVOYW1lXVxuICAgICAgOiBrZXlzTWFwW25ld1VuaXF1ZU5hbWVdID0gaXNEZXZNb2RlKCkgPyB0b1ZhbGlkQ2xhc3NOYW1lKGAke3N0eWxlTmFtZX0ke25hbWV9LSR7Y3JlYXRlTmV4dEtleWZyYW1lSWQoKX0tdmApIDogY3JlYXRlTmV4dEtleWZyYW1lSWQoKTtcbiAgICAgIGNvbnRlbnQgKz0gYEBrZXlmcmFtZXMgJHtuZXdOYW1lfXtgO1xuICAgICAgZm9yIChjb25zdCBwZXJjZW50IGluIGtleWZyYW1lKSB7XG4gICAgICAgIGlmIChrZXlmcmFtZS5oYXNPd25Qcm9wZXJ0eShwZXJjZW50KSkge1xuICAgICAgICAgIGNvbnRlbnQgKz0gYCR7cGVyY2VudH0le2A7XG4gICAgICAgICAgY29uc3Qgc3R5bGVzID0ga2V5ZnJhbWVbcGVyY2VudF07XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gc3R5bGVzW2tleV07XG4gICAgICAgICAgICAgIGNvbnRlbnQgKz0gY29udmVydFRvU3R5bGVWYWx1ZShrZXksIHZhbCBhcyBzdHJpbmcgfCBzdHJpbmdbXSwgdGhlbWVWYXJpYWJsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250ZW50ICs9IGB9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29udGVudCArPSBgfWA7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZShzdHI6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGNvbnN0IGh5cGhlbkNhc2UgPSB0b0h5cGhlbkNhc2Uoc3RyKTtcbiAgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5iZWZvcmUpICE9PSAtMSkge1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5iZWZvcmUpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5hZnRlcikgIT09IC0xKSB7XG4gICAgcmV0dXJuIGRpckNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLmFmdGVyKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoWVBvc2l0aW9uLmFib3ZlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgWVBvc2l0aW9uLmFib3ZlLCBUT1ApO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihZUG9zaXRpb24uYmVsb3cpICE9PSAtMSkge1xuICAgIHJldHVybiBZUG9zaXRpb25DYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBZUG9zaXRpb24uYmVsb3csIEJPVFRPTSk7XG4gIH1cbiAgcmV0dXJuIGh5cGhlbkNhc2U7XG59XG5cbmZ1bmN0aW9uIHRvVmFsaWRDbGFzc05hbWUoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgcyA9IHN0ci5yZXBsYWNlKC9eWzAtOV18W15cXHdcXC1dL2csIF8gPT4ge1xuICAgIHJldHVybiBgXyR7Xy5jaGFyQ29kZUF0KDApfWA7XG4gIH0pO1xuICByZXR1cm4gcztcbn1cblxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChnKSA9PiBgLSR7Z1swXS50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlQ2FjaGUoc3RyOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyk6IHN0cmluZyB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIHJldHVybiBzdHIgaW4gbWFwXG4gID8gbWFwW3N0cl1cbiAgOiBtYXBbc3RyXSA9IGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGUoc3RyLCB0aGVtZVZhcmlhYmxlcyk7XG59XG5cbmNvbnN0IGlnbm9yZUNTU0tFWSA9IHtcbiAgJ2JyZWFrLWFmdGVyJzogJ2JyZWFrLWFmdGVyJyxcbiAgJ2JyZWFrLWJlZm9yZSc6ICdicmVhay1iZWZvcmUnLFxuICAncGFnZS1icmVhay1hZnRlcic6ICdwYWdlLWJyZWFrLWFmdGVyJyxcbiAgJ3BhZ2UtYnJlYWstYmVmb3JlJzogJ3BhZ2UtYnJlYWstYmVmb3JlJ1xufTtcblxuY29uc3QgU1RZTEVfS0VZU19NQVAgPSB7XG4gIHJ0bDoge1xuICAgIC4uLmlnbm9yZUNTU0tFWVxuICB9LFxuICBsdHI6IHtcbiAgICAuLi5pZ25vcmVDU1NLRVlcbiAgfVxufTtcblxuY29uc3QgQk9UVE9NID0gJ2JvdHRvbSc7XG5jb25zdCBUT1AgPSAndG9wJztcblxuZnVuY3Rpb24gZGlyQ2FjaGUob3JpZ2luYWwsIHZhbDogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIGRpckFsaWFzOiBEaXJBbGlhcykge1xuICBjb25zdCBtYXAgPSBTVFlMRV9LRVlTX01BUFt0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb25dO1xuICAvLyBSZXBsYWNlIGluIG9yaWdpbmFsLCBmb3IgZG8gbm90IHJlcGVhdCB0aGlzIGFnYWluXG4gIHJldHVybiBtYXBbb3JpZ2luYWxdID0gdmFsLnJlcGxhY2UoZGlyQWxpYXMsIHRoZW1lVmFyaWFibGVzLmdldERpcmVjdGlvbihkaXJBbGlhcykpO1xufVxuXG5mdW5jdGlvbiBZUG9zaXRpb25DYWNoZShvcmlnaW5hbCwgdmFsOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgcG9zOiBZUG9zaXRpb24sIHRvOiAndG9wJyB8ICdib3R0b20nKSB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIC8vIFJlcGxhY2UgaW4gb3JpZ2luYWwsIGZvciBkbyBub3QgcmVwZWF0IHRoaXMgYWdhaW5cbiAgcmV0dXJuIG1hcFtvcmlnaW5hbF0gPSB2YWwucmVwbGFjZShwb3MsIHRvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5leHRDbGFzc0lkKCkge1xuICByZXR1cm4geUNsYXNzSUQubmV4dCgpO1xufVxuZnVuY3Rpb24gY3JlYXRlVW5pcXVlQ2xhc3NJRCgpIHtcbiAgcmV0dXJuIHlDbGFzc0lELm5leHQoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU5leHRLZXlmcmFtZUlkKCkge1xuICByZXR1cm4gYGskeyhuZXh0S2V5RnJhbWVJZCsrKS50b1N0cmluZygzNil9YDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZVJlZiBleHRlbmRzIFBpY2s8THlUaGVtZTIsICdzZWxlY3RvcnNPZic+IHsgfVxuIl19