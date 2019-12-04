import * as tslib_1 from "tslib";
import { Injectable, Renderer2, Inject, isDevMode, NgZone } from '@angular/core';
import { LY_THEME_NAME } from './theme-config';
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
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone }
];
LyTheme2 = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(2, Inject(LY_THEME_NAME)),
    tslib_1.__param(3, Inject(DOCUMENT))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQWtCLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFFTCxTQUFTLEVBRVQsVUFBVSxFQUtWLHdCQUF3QixFQUNkLE1BQU0sU0FBUyxDQUFDO0FBQzVCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFNUQsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDO0FBRXBDLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN2QixNQUFNLFFBQVEsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFDekMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBS3pELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBSDdCO1FBSUUsV0FBTSxHQUVGLEVBQUUsQ0FBQztRQUNQLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7UUFD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QUMsQ0FBQztJQUNyRCxvREFBb0Q7SUFDcEQsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxHQUFXO0lBQy9DLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVELFNBQVMsaUJBQWlCO0lBQ3hCLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLENBQUM7QUFDRCxTQUFTLG1CQUFtQjtJQUMxQixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBQ0QsU0FBUyxvQkFBb0I7SUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIGlzRGV2TW9kZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaXJBbGlhcywgRGlyIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuaW1wb3J0IHsgWVBvc2l0aW9uIH0gZnJvbSAnLi4vcG9zaXRpb24vcG9zaXRpb24nO1xuaW1wb3J0IHsgU3R5bGVNYXA1LFxuICBTdHlsZUdyb3VwLFxuICBUeXBlU3R5bGUsXG4gIFN0eWxlQ29udGFpbmVyLFxuICBfU1RZTEVfTUFQLFxuICBTdHlsZXMsXG4gIFN0eWxlRGVjbGFyYXRpb25zQmxvY2ssXG4gIEtleWZyYW1lc0RlcHJlY2F0ZWQsXG4gIEx5Q2xhc3NlcyxcbiAgZ2V0VGhlbWVOYW1lRm9yU2VsZWN0b3JzLFxuICBMeVN0eWxlcyB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3R5bGVUZW1wbGF0ZSwgU3RyaW5nSWRHZW5lcmF0b3IgfSBmcm9tICcuLi9wYXJzZSc7XG5cbmNvbnN0IFJFRl9SRUdfRVhQID0gL1xceyhbXFx3LV0rKVxcfS9nO1xuXG5sZXQgbmV4dEtleUZyYW1lSWQgPSAwO1xuY29uc3QgeUNsYXNzSUQgPSBuZXcgU3RyaW5nSWRHZW5lcmF0b3IoKTtcbmV4cG9ydCBjb25zdCBrZXlmcmFtZXNVbmlxdWVJZCA9IG5ldyBTdHJpbmdJZEdlbmVyYXRvcigpO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNJbkRvY3VtZW50IHtcbiAgc3R5bGVzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXTogTWFwPHN0cmluZyB8IFN0eWxlcywgSFRNTFN0eWxlRWxlbWVudD5cbiAgfSA9IHt9O1xuICBzdHlsZUNvbnRhaW5lcnMgPSBuZXcgTWFwPG51bWJlciwgSFRNTEVsZW1lbnQ+KCk7XG4gIHN0eWxlRWxlbWVudEdsb2JhbE1hcCA9IG5ldyBNYXA8c3RyaW5nIHwgU3R5bGVzLCBIVE1MU3R5bGVFbGVtZW50PigpO1xufVxuXG5jb25zdCBUSEVNRV9NQVAgPSBuZXcgTWFwPHN0cmluZywge1xuICBiYXNlOiBzdHJpbmdcbiAgY2hhbmdlOiBzdHJpbmcgfCBudWxsXG59PigpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGB0aGVtZVZhcmlhYmxlc2AgaW5zdGVhZFxuICAgKi9cbiAgY29uZmlnOiBUaGVtZVZhcmlhYmxlcztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBpbml0aWFsVGhlbWU6IHN0cmluZztcbiAgZWxlbWVudHM6IE1hcDxzdHJpbmcgfCBTdHlsZXMsIEhUTUxTdHlsZUVsZW1lbnQ+O1xuICBfZWxlbWVudHNNYXAgPSBuZXcgTWFwPGFueSwgSFRNTFN0eWxlRWxlbWVudD4oKTtcblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBkaXJlY3Rpb24gaGFzIGNoYW5nZWQuICovXG4gIHByaXZhdGUgX2RpcmVjdGlvbkNoYW5nZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBnZXQgZGlyZWN0aW9uQ2hhbmdlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uQ2hhbmdlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiBHZXQgVGhlbWUgVmFyaWFibGVzICovXG4gIGdldCB2YXJpYWJsZXMoKTogVGhlbWVWYXJpYWJsZXMge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuICBwcml2YXRlIHRoZW1lTWFwID0gVEhFTUVfTUFQO1xuICAvKiogc3NyIG9yIGhtciAqL1xuICBwcml2YXRlIGlzRGV2T3JTZXJ2ZXIgPSBpc0Rldk1vZGUoKSB8fCAhUGxhdGZvcm0uaXNCcm93c2VyO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIGNvbnN0IHRoZW1lID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgaWYgKHRoZW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVtZSAke3RoZW1lTmFtZX0gbm90IGZvdW5kIGluIENvcmVUaGVtZWApO1xuICAgICAgfVxuICAgICAgdGhpcy5jb25maWcgPSB0aGVtZTtcbiAgICAgIHRoaXMuX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGVtZU5hbWUgaW4gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1xuICAgICAgPyB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV1cbiAgICAgIDogdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdID0gbmV3IE1hcCgpO1xuICAgICAgaWYgKCF0aGlzLmluaXRpYWxUaGVtZSkge1xuICAgICAgICB0aGlzLmluaXRpYWxUaGVtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudGhlbWVNYXAuaGFzKHRoaXMuaW5pdGlhbFRoZW1lKSkge1xuICAgICAgICB0aGlzLnRoZW1lTWFwLnNldCh0aGlzLmluaXRpYWxUaGVtZSwge1xuICAgICAgICAgIGJhc2U6IHRoaXMuaW5pdGlhbFRoZW1lLFxuICAgICAgICAgIGNoYW5nZTogbnVsbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgbXVsdGlwbGUgc3R5bGVzIGFuZCByZW5kZXIgdGhlbSBpbiB0aGUgRE9NXG4gICAqL1xuICByZW5kZXJTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIEx5U3R5bGVzKTogTHlDbGFzc2VzPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIG51bGwsIG51bGwsIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICByZW5kZXJTdHlsZTxUSEVNRV9WQVJJQUJMRVM+KFxuICAgIGlkOiBzdHJpbmcsXG4gICAgc3R5bGU6ICh0aGVtZTogVEhFTUVfVkFSSUFCTEVTLCByZWY6IFRoZW1lUmVmKSA9PiBTdHlsZVRlbXBsYXRlLFxuICAgIHByaW9yaXR5PzogbnVtYmVyXG4gICk6IHN0cmluZztcblxuICByZW5kZXJTdHlsZTxUSEVNRV9WQVJJQUJMRVM+KFxuICAgIHN0eWxlOiAodGhlbWU6IFRIRU1FX1ZBUklBQkxFUywgcmVmOiBUaGVtZVJlZikgPT4gU3R5bGVUZW1wbGF0ZSxcbiAgICBwcmlvcml0eT86IG51bWJlclxuICApOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgc3R5bGVzIGFuZCByZW5kZXIgdGhlbSBpbiB0aGUgRE9NXG4gICAqL1xuICByZW5kZXJTdHlsZTxUSEVNRV9WQVJJQUJMRVM+KFxuICAgIHN0eWxlT3JJZDogKCh0aGVtZTogVEhFTUVfVkFSSUFCTEVTLCByZWY6IFRoZW1lUmVmKSA9PiBTdHlsZVRlbXBsYXRlKSB8IHN0cmluZyxcbiAgICBwcmlvcml0eU9yU3R5bGU/OiBudW1iZXIgfCAoKHRoZW1lOiBUSEVNRV9WQVJJQUJMRVMsIHJlZjogVGhlbWVSZWYpID0+IFN0eWxlVGVtcGxhdGUpLFxuICAgIHByaW9yaXR5PzogbnVtYmVyXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBzdHlsZU9ySWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50Mihwcmlvcml0eU9yU3R5bGUgYXMgKHRoZW1lOiBUSEVNRV9WQVJJQUJMRVMsIHJlZjogVGhlbWVSZWYpID0+IFN0eWxlVGVtcGxhdGUsXG4gICAgICAgIHN0eWxlT3JJZCxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIFR5cGVTdHlsZS5MeWxTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlT3JJZCxcbiAgICAgIG51bGwsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIFR5cGVTdHlsZS5MeWxTdHlsZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICogQHBhcmFtIHBhcmVudFN0eWxlXG4gICAqL1xuICBhZGRTdHlsZShpZDogc3RyaW5nLFxuICAgIHN0eWxlPzogU3R5bGVEZWNsYXJhdGlvbnNCbG9jayxcbiAgICBlbD86IGFueSxcbiAgICBpbnN0YW5jZT86IHN0cmluZyB8IG51bGwsXG4gICAgcHJpb3JpdHk/OiBudW1iZXIgfCBudWxsLFxuICAgIHBhcmVudFN0eWxlPzogU3R5bGVzKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlLCBpZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5Pbmx5T25lLCBmYWxzZSwgcGFyZW50U3R5bGUpIGFzIHN0cmluZztcbiAgICBpZiAobmV3Q2xhc3MgPT09IGluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIGlmIChlbCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYmFzaWMgc3R5bGVcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlcy5cbiAgICogTm90ZTogVXNlIG9ubHkgd2l0aCBpbW11dGFibGUgdmFyaWFibGUuXG4gICAqIEBwYXJhbSBwcmlvcml0eSBQcmlvcml0eSBvZiBzdHlsZVxuICAgKiBAcGFyYW0gcGFyZW50U3R5bGVcbiAgICovXG4gIHN0eWxlKHN0eWxlOiBTdHlsZURlY2xhcmF0aW9uc0Jsb2NrLCBwcmlvcml0eT86IG51bWJlciB8IG51bGwsIHBhcmVudFN0eWxlPzogU3R5bGVzKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZSxcbiAgICAgIG51bGwsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIFR5cGVTdHlsZS5Pbmx5T25lLFxuICAgICAgZmFsc2UsIHBhcmVudFN0eWxlKSBhcyBzdHJpbmc7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzc25hbWUsIG9sZENsYXNzbmFtZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3MoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzczogc3RyaW5nLCBvbGRDbGFzcz86IHN0cmluZykge1xuICAgIGlmIChuZXdDbGFzcyA9PT0gb2xkQ2xhc3MpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgdGhlbWUuc2V0VGhlbWUoJ3RoZW1lLW5hbWUnKVxcYCBpcyBvbmx5IGF2YWlsYWJsZSBpbiBicm93c2VyIHBsYXRmb3JtYCk7XG4gICAgfVxuICAgIGlmIChuYW0gIT09IHRoaXMuY29uZmlnLm5hbWUpIHtcbiAgICAgIGNvbnN0IHRoZW1lID0gdGhpcy50aGVtZU1hcC5nZXQodGhpcy5pbml0aWFsVGhlbWUpO1xuICAgICAgaWYgKHRoZW1lID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVtZSAke25hbX0gbm90IGZvdW5kIGluIHRoZW1lTWFwYCk7XG4gICAgICB9XG4gICAgICB0aGVtZS5jaGFuZ2UgPSBuYW07XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQobmFtKSE7XG4gICAgICB0aGlzLl91cGRhdGVBbGxTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogVG9nZ2xlIHJpZ2h0LXRvLWxlZnQvbGVmdC10by1yaWdodCAqL1xuICB0b2dnbGVEaXJlY3Rpb24oKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuY29uZmlnLmRpcmVjdGlvbjtcbiAgICB0aGlzLmNvbmZpZy5kaXJlY3Rpb24gPSBjdXJyZW50ID09PSBEaXIubHRyID8gRGlyLnJ0bCA6IERpci5sdHI7XG4gICAgdGhpcy5fdXBkYXRlQWxsU3R5bGVzKCk7XG4gICAgdGhpcy5fZGlyZWN0aW9uQ2hhbmdlZC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBbGxTdHlsZXMoKSB7XG4gICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChfLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlRGF0YSA9IF9TVFlMRV9NQVAuZ2V0KGtleSkhO1xuICAgICAgaWYgKHN0eWxlRGF0YS5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVEYXRhLnN0eWxlcywgc3R5bGVEYXRhLmlkLCBzdHlsZURhdGEucHJpb3JpdHksIHN0eWxlRGF0YS50eXBlLCB0cnVlLCBzdHlsZURhdGEucGFyZW50U3R5bGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbXBsZSBzdHlsZVxuICAgKiByZXR1cm4gY2xhc3NOYW1lXG4gICAqIEBwYXJhbSBpZCBpZCBvZiBzdHlsZVxuICAgKiBAcGFyYW0gY3NzIHN0eWxlIG9iamVjdCBvciBzdHJpbmdcbiAgICogQHBhcmFtIHByaW9yaXR5IHN0eWxlIHByaW9yaXR5KGRlZmF1bHQ6IDApXG4gICAqL1xuICBhZGRTaW1wbGVTdHlsZShpZDogc3RyaW5nLCBjc3M6IFN0eWxlQ29udGFpbmVyIHwgKCh0aGVtZSkgPT4gU3R5bGVDb250YWluZXIpLCBwcmlvcml0eT86IG51bWJlciwgcGFyZW50U3R5bGU/OiBTdHlsZXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIGlkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBwYXJlbnRTdHlsZSkgYXMgc3RyaW5nO1xuICB9XG5cblxuICAvKipcbiAgICogQWRkIG5ldyBhZGQgYSBuZXcgc3R5bGUgc2hlZXRcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZXNcbiAgICogQHBhcmFtIHByaW9yaXR5IHByaW9yaXR5IGZvciBzdHlsZVxuICAgKi9cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiBTdHlsZXMsIHByaW9yaXR5PzogbnVtYmVyKTogTHlDbGFzc2VzPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIG51bGwsIHByaW9yaXR5LCBUeXBlU3R5bGUuTXVsdGlwbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgc3R5bGUgZXhpc3RcbiAgICogQHBhcmFtIHN0eWxlc09ySWQgU3R5bGUgb3IgSWQgb2YgYSBzdHlsZVxuICAgKi9cbiAgZXhpc3RTdHlsZShzdHlsZXNPcklkOiBzdHJpbmcgfCBTdHlsZXMgfCBTdHlsZURlY2xhcmF0aW9uc0Jsb2NrKTogYm9vbGVhbiB7XG4gICAgaWYgKF9TVFlMRV9NQVAuaGFzKHN0eWxlc09ySWQpKSB7XG4gICAgICBjb25zdCBzdHlsZU1hcCA9IF9TVFlMRV9NQVAuZ2V0KHN0eWxlc09ySWQpITtcbiAgICAgIHJldHVybiAhIShzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoaXMuaW5pdGlhbFRoZW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdG9yc09mPFQ+KHN0eWxlczogVCk6IEx5Q2xhc3NlczxUPiB7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gdGhpcy5pbml0aWFsVGhlbWU7XG4gICAgaWYgKCFfU1RZTEVfTUFQLmhhcyhzdHlsZXMpKSB7XG4gICAgICBfU1RZTEVfTUFQLnNldChzdHlsZXMsIHtcbiAgICAgICAgaXNOZXdTdHlsZTogdHJ1ZSxcbiAgICAgICAgc3R5bGVzOiA8U3R5bGVzPjx1bmtub3duPnN0eWxlcyxcbiAgICAgICAgdHlwZTogVHlwZVN0eWxlLk11bHRpcGxlLFxuICAgICAgICBjc3M6IHt9LFxuICAgICAgICBpZDogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlTWFwID0gX1NUWUxFX01BUC5nZXQoc3R5bGVzKSE7XG4gICAgY29uc3QgdGhlbWVOYW1lRm9yU2VsZWN0b3JzID0gZ2V0VGhlbWVOYW1lRm9yU2VsZWN0b3JzKHRoZW1lTmFtZSk7XG4gICAgY29uc3QgY2xhc3Nlc01hcCA9IHN0eWxlTWFwW3RoZW1lTmFtZUZvclNlbGVjdG9yc10gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZUZvclNlbGVjdG9yc10gPSB7fSk7XG4gICAgcmV0dXJuIGNsYXNzZXNNYXA7XG4gIH1cblxuICBnZXRDbGFzcyhzdHlsZXM6IHN0cmluZyB8IFN0eWxlVGVtcGxhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHRoaXMuaW5pdGlhbFRoZW1lO1xuICAgIGNvbnN0IHN0eWxlTWFwID0gX1NUWUxFX01BUC5nZXQoc3R5bGVzKSE7XG4gICAgcmV0dXJuIHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhlbWVOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVN0eWxlQ29udGVudDIoXG4gICAgc3R5bGVzOiBTdHlsZXNcbiAgICAgIHwgU3R5bGVEZWNsYXJhdGlvbnNCbG9ja1xuICAgICAgfCAoKHRoZW1lOiBhbnksIHJlZjogVGhlbWVSZWYpID0+IFN0eWxlVGVtcGxhdGUpLFxuICAgIGlkOiBzdHJpbmcgfCBudWxsLFxuICAgIHByaW9yaXR5OiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsLFxuICAgIHR5cGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgcGFyZW50U3R5bGU/OiBTdHlsZXNcbiAgKSB7XG4gICAgY29uc3QgbmV3SWQgPSBpZCB8fCBzdHlsZXMgYXMgU3R5bGVzO1xuICAgIGlmICghX1NUWUxFX01BUC5oYXMobmV3SWQpKSB7XG4gICAgICBfU1RZTEVfTUFQLnNldChuZXdJZCwge1xuICAgICAgICBpc05ld1N0eWxlOiB0cnVlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMgYXMgU3R5bGVzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBjc3M6IHt9LFxuICAgICAgICBpZCxcbiAgICAgICAgcGFyZW50U3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZU1hcCA9IF9TVFlMRV9NQVAuZ2V0KG5ld0lkKSE7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gdGhpcy5pbml0aWFsVGhlbWU7XG4gICAgY29uc3QgaXNDcmVhdGVkID0gc3R5bGVNYXAuaXNOZXdTdHlsZSB8fCAhKHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhlbWVOYW1lXSk7XG4gICAgaWYgKGlzQ3JlYXRlZCB8fCBmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgc3R5bGVNYXAuaXNOZXdTdHlsZSA9IGZhbHNlO1xuICAgICAgLy8gY3JlYXRlIG5ldyBzdHlsZSBmb3IgbmV3IHRoZW1lXG4gICAgICBsZXQgY3NzOiBzdHJpbmcgfCB7IFt0aGVtZU5hbWU6IHN0cmluZ106IHN0cmluZzsgfTtcbiAgICAgIGNvbnN0IHRoZW1lTWFwID0gdGhpcy50aGVtZU1hcC5nZXQodGhpcy5pbml0aWFsVGhlbWUpITtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVNYXAuY2hhbmdlIHx8IHRoZW1lTmFtZSkgYXMgVGhlbWVWYXJpYWJsZXM7XG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgY3NzID0gdHlwZSA9PT0gVHlwZVN0eWxlLkx5bFN0eWxlXG4gICAgICAgICAgPyBjcmVhdGVMeWxTdHlsZShcbiAgICAgICAgICAgICAgc3R5bGVNYXAsXG4gICAgICAgICAgICAgIChzdHlsZXMgYXMgKCh0aGVtZTogYW55LCByZWY6IFRoZW1lUmVmKSA9PiBTdHlsZVRlbXBsYXRlKSkoY29uZmlnLCB0aGlzKSxcbiAgICAgICAgICAgICAgdGhlbWVOYW1lKVxuICAgICAgICAgIDogZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXMoY29uZmlnLCB0aGlzKSBhcyBTdHlsZUdyb3VwLCB0aGVtZU5hbWUsIGlkLCB0eXBlLCBjb25maWcpO1xuICAgICAgICBpZiAoIWZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgICAgc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV0gPSBjc3M7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBjcmVhdGUgYSBuZXcgaWQgZm9yIHN0eWxlIHRoYXQgZG9lcyBub3QgPC08cmVxdWlyZT4tPiBjaGFuZ2VzICovXG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZU1hcCwgc3R5bGVzIGFzIFN0eWxlR3JvdXAsIHRoZW1lTmFtZSwgbmV3SWQgYXMgc3RyaW5nLCB0eXBlLCBjb25maWcpO1xuICAgICAgICBzdHlsZU1hcC5jc3MgPSBjc3M7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuaGFzKG5ld0lkKSkge1xuICAgICAgICBjb25zdCBuZXdFbCA9IHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShjc3MpO1xuICAgICAgICBpZiAoc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgZm9yIHdoZW4gYSB0aGVtZSBjaGFuZ2VzXG4gICAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIG5ld0VsKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRGV2T3JTZXJ2ZXIpIHtcbiAgICAgICAgICAvLyBpbiBkZXYgbW9kZSBvciBzZXJ2ZXIgaXQgaXMgbm90IG5lY2Vzc2FyeVxuICAgICAgICAgIC8vIHNpbmNlIHRoZSBzdHlsZXMgd2lsbCBub3QgY2hhbmdlXG4gICAgICAgICAgdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlRWxlbWVudEdsb2JhbE1hcC5zZXQobmV3SWQsIG5ld0VsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCBuZXdFbCk7XG4gICAgICB9XG4gICAgICBpZiAoZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCkgYXMgSFRNTFN0eWxlRWxlbWVudDtcbiAgICAgICAgZWwuaW5uZXJUZXh0ID0gY3NzO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Rldk9yU2VydmVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIGFwcGVuZCBjaGlsZCBzdHlsZSBpZiBub3QgZXhpc3QgaW4gZG9tXG4gICAgICAgKiBmb3Igc3NyIG9yIGhtclxuICAgICAgICovXG4gICAgICBpZiAoIXRoaXMuZWxlbWVudHMuaGFzKG5ld0lkKSkge1xuICAgICAgICBjb25zdCBfY3NzID0gc3R5bGVNYXAuY3NzW3RoZW1lTmFtZV0gfHwgc3R5bGVNYXAuY3NzO1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVFbGVtZW50R2xvYmFsTWFwO1xuICAgICAgICBpZiAoc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMuc2V0KG5ld0lkLCB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoX2NzcykpO1xuICAgICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW1hcC5oYXMobmV3SWQpKSB7XG4gICAgICAgICAgbWFwLnNldChuZXdJZCwgdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpKTtcbiAgICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCBtYXAuZ2V0KG5ld0lkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhlbWVOYW1lXTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHByaW9yaXR5OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gICAgcHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgaWYgKCFzdHlsZUNvbnRhaW5lcnMuaGFzKHByaW9yaXR5KSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudChgbHktcy1jYCk7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3ByaW9yaXR5JywgYCR7cHJpb3JpdHl9YCk7XG4gICAgICB9XG4gICAgICBzdHlsZUNvbnRhaW5lcnMuc2V0KHByaW9yaXR5LCBlbCk7XG4gICAgICBpZiAoc3R5bGVDb250YWluZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBlbCwgdGhpcy5fZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gICAgfVxuICAgIGNvbnN0IHJlZkNoaWxkID0gdGhpcy5maW5kTm9kZShwcmlvcml0eSk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9kb2N1bWVudC5ib2R5LCBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KSwgcmVmQ2hpbGQpO1xuICAgIHJldHVybiBzdHlsZUNvbnRhaW5lcnMuZ2V0KHByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE5vZGUoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgc3R5bGVDb250YWluZXJzIH0gPSB0aGlzLnN0eWxlc0luRG9jdW1lbnQ7XG4gICAgY29uc3Qga2V5cyA9IChBcnJheS5mcm9tKHN0eWxlQ29udGFpbmVycy5rZXlzKCkpKS5zb3J0KCk7XG4gICAgY29uc3Qga2V5ID0ga2V5cy5maW5kKF8gPT4gaW5kZXggPCBfKTtcbiAgICByZXR1cm4gKGtleSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlQ29udGFpbmVycy5nZXQoa2V5KSkgfHwgdGhpcy5jb3JlLmZpcnN0RWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUVsZW1lbnRTdHlsZShjc3M6IHN0cmluZykge1xuICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVUZXh0KGNzcyk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCwgc3R5bGVUZXh0KTtcbiAgICByZXR1cm4gc3R5bGVFbGVtZW50O1xuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZuOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpIHtcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbigpO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUx5bFN0eWxlKFxuICBzdHlsZU1hcDogU3R5bGVNYXA1LFxuICBzdHlsZXM6IFN0eWxlVGVtcGxhdGUsXG4gIHRoZW1lTmFtZTogc3RyaW5nXG4pIHtcbiAgLy8gY29uc3QgY2xhc3NOYW1lID0gc3R5bGVNYXAucmVxdWlyZVVwZGF0ZVxuICAvLyA/IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSBjcmVhdGVOZXh0Q2xhc3NJZCgpKVxuICAvLyA6IHN0eWxlTWFwLmNsYXNzZXNcbiAgLy8gICA/IHN0eWxlTWFwLmNsYXNzZXNcbiAgLy8gICA6IHN0eWxlTWFwLmNsYXNzZXMgPSBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuXG4gIC8vIHVzZSBjdXJyZW50IGNsYXNzIG9yIHNldCBuZXdcbiAgbGV0IGNsYXNzTmFtZTogc3RyaW5nO1xuICBjbGFzc05hbWUgPSBzdHlsZU1hcFt0aGVtZU5hbWVdXG4gICAgfHwgKFxuICAgICAgc3R5bGVNYXBbdGhlbWVOYW1lXSA9IGlzRGV2TW9kZSgpXG4gICAgICAgID8gc3R5bGVNYXAuaWRcbiAgICAgICAgICA/IGAke3RvVmFsaWRDbGFzc05hbWUoc3R5bGVNYXAuaWQhKX0tJHtjcmVhdGVOZXh0Q2xhc3NJZCgpfWBcbiAgICAgICAgICA6IGAkeyhzdHlsZU1hcC5zdHlsZXMgYXMgRnVuY3Rpb24pLm5hbWUgfHwgJ2lpJ30tJHtjcmVhdGVOZXh0Q2xhc3NJZCgpfWBcbiAgICAgICAgOiBjcmVhdGVOZXh0Q2xhc3NJZCgpXG4gICAgKTtcblxuICByZXR1cm4gc3R5bGVzKGAuJHtjbGFzc05hbWV9YCk7XG59XG5cbmZ1bmN0aW9uIGdyb3VwU3R5bGVUb1N0cmluZyhcbiAgc3R5bGVNYXA6IFN0eWxlTWFwNSxcbiAgc3R5bGVzOiBTdHlsZUdyb3VwLFxuICB0aGVtZU5hbWU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyB8IG51bGwsXG4gIHR5cGVTdHlsZTogVHlwZVN0eWxlLFxuICB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXNcbikge1xuXG4gIC8vIGZvciBzdHlsZXMgdHlwZSBzdHJpbmdcbiAgaWYgKHR5cGVTdHlsZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUpIHtcbiAgICAvLyB1c2UgY3VycmVudCBjbGFzcyBvciBzZXQgbmV3XG4gICAgY29uc3QgY2xhc3NOYW1lID0gc3R5bGVNYXAucmVxdWlyZVVwZGF0ZVxuICAgID8gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IGNyZWF0ZU5leHRDbGFzc0lkKCkpXG4gICAgOiBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA/IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgIDogc3R5bGVNYXAuY2xhc3NlcyA9IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG4gICAgbGV0IHJ1bGVzOiBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBydWxlcyA9IGAuJHtjbGFzc05hbWV9eyR7c3R5bGVzfX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBydWxlcyA9IHN0eWxlVG9TdHJpbmcoaWQsIG51bGwsIHN0eWxlcyBhcyBTdHlsZUNvbnRhaW5lciwgdGhlbWVWYXJpYWJsZXMsIGNsYXNzTmFtZSBhcyBhbnkpO1xuICAgIH1cbiAgICBpZiAoc3R5bGVNYXAucGFyZW50U3R5bGUpIHtcbiAgICAgIGNvbnN0IHN0eWxlTWFwT2ZQYXJlbnRTdHlsZSA9IF9TVFlMRV9NQVAuZ2V0KHN0eWxlTWFwLnBhcmVudFN0eWxlKTtcbiAgICAgIGlmICghc3R5bGVNYXBPZlBhcmVudFN0eWxlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcmVudFN0eWxlIG5vdCBleGlzdCBvciBpcyBjYWxsZWQgYmVmb3JlIGJlaW5nIGNyZWF0ZWQuYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVwbGFjZVJlZnMocnVsZXMsIHN0eWxlTWFwT2ZQYXJlbnRTdHlsZVt0aGVtZU5hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgLy8gZm9yIG11bHRpcGxlcyBzdHlsZXNcbiAgY29uc3QgdGhlbWVOYW1lRm9yU2VsZWN0b3JzID0gZ2V0VGhlbWVOYW1lRm9yU2VsZWN0b3JzKHRoZW1lTmFtZSk7XG4gIGNvbnN0IGNsYXNzZXNNYXAgPSBzdHlsZU1hcFt0aGVtZU5hbWVdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVdID0ge30pO1xuICBjb25zdCBzZWxlY3RvcnNNYXAgPSBzdHlsZU1hcFt0aGVtZU5hbWVGb3JTZWxlY3RvcnNdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVGb3JTZWxlY3RvcnNdID0ge30pO1xuICBjb25zdCBzdHlsZUdyb3VwID0gPFN0eWxlR3JvdXA+c3R5bGVzO1xuICBsZXQgY29udGVudCA9ICcnO1xuICBjb25zdCBuYW1lID0gc3R5bGVHcm91cC4kbmFtZSA/IGAke3N0eWxlR3JvdXAuJG5hbWV9LWAgOiAnJztcblxuICAvLyBzZXQgcHJpb3JpdHlcbiAgaWYgKHN0eWxlR3JvdXAuJHByaW9yaXR5ICE9IG51bGwpIHtcbiAgICBzdHlsZU1hcC5wcmlvcml0eSA9IHN0eWxlR3JvdXAuJHByaW9yaXR5O1xuICB9XG5cbiAgaWYgKCFzdHlsZU1hcC5rZXlzKSB7XG4gICAgc3R5bGVNYXAua2V5cyA9IE9iamVjdC5rZXlzKHN0eWxlcyk7XG4gIH1cblxuICBjb25zdCBrZXlzID0gc3R5bGVNYXAua2V5cztcblxuICAvKiogVGhpcyBsb29wIGNyZWF0ZXMgdGhlIGNsYXNzZXMgaWYgbmVjZXNzYXJ5ICovXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgaWYgKGtleSA9PT0gJyRnbG9iYWwnIHx8IGtleSA9PT0gJyRrZXlmcmFtZXMnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBseWxcbiAgICAgIC8vIHNldCBuZXcgaWQgaWYgbm90IGV4aXN0XG4gICAgICBpZiAoIShrZXkgaW4gY2xhc3Nlc01hcCkpIHtcbiAgICAgICAgY2xhc3Nlc01hcFtrZXldID0gaXNEZXZNb2RlKClcbiAgICAgICAgICA/IGAke3RvVmFsaWRDbGFzc05hbWUobmFtZSArIGtleSl9LSR7Y3JlYXRlVW5pcXVlQ2xhc3NJRCgpfWBcbiAgICAgICAgICA6IGNyZWF0ZVVuaXF1ZUNsYXNzSUQoKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgIGlmICghKGtleSBpbiBjbGFzc2VzTWFwKSkge1xuICAgICAgICBjbGFzc2VzTWFwW2tleV0gPSBpc0Rldk1vZGUoKSA/IHRvVmFsaWRDbGFzc05hbWUoYHktJHtuYW1lfSR7a2V5fS0ke2NyZWF0ZU5leHRDbGFzc0lkKCl9YCkgOiBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghKGtleSBpbiBzZWxlY3RvcnNNYXApKSB7XG4gICAgICBzZWxlY3RvcnNNYXBba2V5XSA9IGAuJHtjbGFzc2VzTWFwW2tleV19YDtcbiAgICB9XG5cbiAgfVxuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gbHlsXG4gICAgICBpZiAoa2V5ID09PSAnJGdsb2JhbCcpIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnRlbnQgKz0gdmFsdWUoYC8qIEdsb2JhbCBTdHlsZSAqL2ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRlbnQgKz0gKHZhbHVlIGFzICgoKSA9PiBTdHlsZVRlbXBsYXRlKSkoKShgLyogR2xvYmFsIFN0eWxlICovYCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JzTWFwW2tleV07XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICBjb250ZW50ICs9IHZhbHVlKHNlbGVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdCA9ICh2YWx1ZSBhcyAoKCkgPT4gU3R5bGVUZW1wbGF0ZSB8IG51bGwpKSgpO1xuICAgICAgICAgIGlmIChzdCkge1xuICAgICAgICAgICAgY29udGVudCArPSBzdChzZWxlY3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJyRrZXlmcmFtZXMnKSB7XG4gICAgICBjb250ZW50ICs9IGtleWZyYW1lc1RvU3RyaW5nKG5hbWUsIGNsYXNzZXNNYXAsIHZhbHVlIGFzIEtleWZyYW1lc0RlcHJlY2F0ZWQsIHRoZW1lVmFyaWFibGVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDbGFzc05hbWUgPSBjbGFzc2VzTWFwW2tleV07XG4gICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcoa2V5LCBzdHlsZUdyb3VwLiRuYW1lLCB2YWx1ZSBhcyBTdHlsZUNvbnRhaW5lciwgdGhlbWVWYXJpYWJsZXMsIGN1cnJlbnRDbGFzc05hbWUpO1xuICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVwbGFjZVJlZnMoY29udGVudCwgY2xhc3Nlc01hcCk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VSZWZzKHN0cjogc3RyaW5nLCBkYXRhOiBPYmplY3QpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFRl9SRUdfRVhQLCAoX21hdGNoLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGRhdGFbdG9rZW5dO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBgLiR7ZGF0YVt0b2tlbl19YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGFbYEDQsy4tPi0ke3Rva2VufWBdO1xuICAgIH1cbiAgfVxuICApO1xufVxuXG4vKipcbiAqIHtjb2xvcjoncmVkJ30gdG8gLmNsYXNzTmFtZXtjb2xvcjogcmVkfVxuICovXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKFxuICBrZXk6IHN0cmluZyB8IG51bGwsXG4gICRuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLFxuICBvYjogU3R5bGVDb250YWluZXIsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgY3VycmVudEtleTogc3RyaW5nLFxuICBwYXJlbnRLZXk/OiBzdHJpbmdcbikge1xuXG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBzdWJDb250ZW50ID0gJyc7XG4gIGxldCBrZXlBbmRWYWx1ZSA9ICcnO1xuICBsZXQgbmV3S2V5OiBzdHJpbmc7XG4gIGlmIChwYXJlbnRLZXkpIHtcbiAgICBpZiAoY3VycmVudEtleS5pbmRleE9mKCcmJykgIT09IC0xKSB7XG4gICAgICBuZXdLZXkgPSBjdXJyZW50S2V5LnJlcGxhY2UoLyYvZywgcGFyZW50S2V5KTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIG5ld0tleSA9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRLZXkgPT09ICdAZ2xvYmFsJyB8fCBwYXJlbnRLZXkgPT09ICdAZ2xvYmFsJykge1xuICAgICAgbmV3S2V5ID0gY3VycmVudEtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3S2V5ID0gYCR7cGFyZW50S2V5fSAke2N1cnJlbnRLZXl9YDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoa2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICBuZXdLZXkgPSBrZXk7XG4gIH0gZWxzZSB7XG4gICAgbmV3S2V5ID0gYC4ke2N1cnJlbnRLZXl9YDtcbiAgfVxuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIC8vIE9taXQgc3R5bGUgd2l0aCB2YWx1ZSBudWxsXG4gICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGlzIE9iamVjdCBsaXRlcmFsXG4gICAgICAgIGlmIChlbGVtZW50LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICBzdWJDb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoa2V5LCAkbmFtZSwgZWxlbWVudCBhcyBTdHlsZUNvbnRhaW5lciwgdGhlbWVWYXJpYWJsZXMsIHN0eWxlS2V5LCBuZXdLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGtleUFuZFZhbHVlICs9IGNvbnZlcnRUb1N0eWxlVmFsdWUoc3R5bGVLZXksIGVsZW1lbnQgYXMgc3RyaW5nIHwgc3RyaW5nW10sIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoa2V5QW5kVmFsdWUpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGxldCBsaW4gPSAnXFxuXFxuJztcbiAgICAgIGlmICgkbmFtZSkge1xuICAgICAgICBsaW4gKz0gYC8qKiBTdHlsZSBTaGVldCBuYW1lOiAkeyRuYW1lfSAqL1xcbmA7XG4gICAgICB9XG4gICAgICBsaW4gKz0gYC8qKiBTdHlsZSBLZXk6ICR7a2V5fSAqL1xcbmA7XG4gICAgICBjb250ZW50ICs9IGAke2xpbn1gO1xuICAgIH1cbiAgICBpZiAobmV3S2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICBjb250ZW50ICs9IGAke25ld0tleX1gO1xuICAgICAga2V5QW5kVmFsdWUgPSBgJHtwYXJlbnRLZXl9eyR7a2V5QW5kVmFsdWV9fWA7XG4gICAgfSBlbHNlIGlmIChwYXJlbnRLZXkgJiYgcGFyZW50S2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ICs9IGAke25ld0tleX1gO1xuICAgIH1cbiAgICBjb250ZW50ICs9IGB7JHtrZXlBbmRWYWx1ZX19YDtcbiAgfVxuICByZXR1cm4gY29udGVudCArIHN1YkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1N0eWxlVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSwgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGNvbnN0IG5ld1N0eWxlS2V5ID0gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZUNhY2hlKGtleSwgdGhlbWVWYXJpYWJsZXMpO1xuICBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgbGV0IGxpbiA9ICcnO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxpbiArPSBgJHtuZXdTdHlsZUtleX06JHt2YWx1ZVtpbmRleF19O2A7XG4gICAgfVxuICAgIHJldHVybiBsaW47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke25ld1N0eWxlS2V5fToke3ZhbHVlfTtgO1xuICB9XG59XG5cbmZ1bmN0aW9uIGtleWZyYW1lc1RvU3RyaW5nKHN0eWxlTmFtZTogc3RyaW5nLCBrZXlzTWFwOiBvYmplY3QsIGtleWZyYW1lczogS2V5ZnJhbWVzRGVwcmVjYXRlZCwgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG5cbiAgZm9yIChjb25zdCBuYW1lIGluIGtleWZyYW1lcykge1xuICAgIGlmIChrZXlmcmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIGNvbnN0IGtleWZyYW1lID0ga2V5ZnJhbWVzW25hbWVdO1xuICAgICAgLy8gU29tZXRpbWVzIHRoZSBuYW1lIG9mIGEgY2xhc3MgY2FuIGJlIHRoZSBzYW1lIGFzIHRoZSBuYW1lIG9mIGEga2V5ZnJhbWUsXG4gICAgICAvLyBzbyB3ZSBhZGQgYSBjaGFyYWN0ZXIgdG8gYmUgZGlmZmVyZW50XG4gICAgICBjb25zdCBuZXdVbmlxdWVOYW1lID0gYEDQsy4tPi0ke25hbWV9YDtcbiAgICAgIC8vIHNldCBuZXcgaWQgaWYgbm90IGV4aXN0XG4gICAgICBjb25zdCBuZXdOYW1lID0gbmV3VW5pcXVlTmFtZSBpbiBrZXlzTWFwXG4gICAgICA/IGtleXNNYXBbbmV3VW5pcXVlTmFtZV1cbiAgICAgIDoga2V5c01hcFtuZXdVbmlxdWVOYW1lXSA9IGlzRGV2TW9kZSgpID8gdG9WYWxpZENsYXNzTmFtZShgJHtzdHlsZU5hbWV9JHtuYW1lfS0ke2NyZWF0ZU5leHRLZXlmcmFtZUlkKCl9LXZgKSA6IGNyZWF0ZU5leHRLZXlmcmFtZUlkKCk7XG4gICAgICBjb250ZW50ICs9IGBAa2V5ZnJhbWVzICR7bmV3TmFtZX17YDtcbiAgICAgIGZvciAoY29uc3QgcGVyY2VudCBpbiBrZXlmcmFtZSkge1xuICAgICAgICBpZiAoa2V5ZnJhbWUuaGFzT3duUHJvcGVydHkocGVyY2VudCkpIHtcbiAgICAgICAgICBjb250ZW50ICs9IGAke3BlcmNlbnR9JXtgO1xuICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IGtleWZyYW1lW3BlcmNlbnRdO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHN0eWxlc1trZXldO1xuICAgICAgICAgICAgICBjb250ZW50ICs9IGNvbnZlcnRUb1N0eWxlVmFsdWUoa2V5LCB2YWwgYXMgc3RyaW5nIHwgc3RyaW5nW10sIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudCArPSBgfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gYH1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGUoc3RyOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBjb25zdCBoeXBoZW5DYXNlID0gdG9IeXBoZW5DYXNlKHN0cik7XG4gIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuYmVmb3JlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZGlyQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgRGlyQWxpYXMuYmVmb3JlKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoRGlyQWxpYXMuYWZ0ZXIpICE9PSAtMSkge1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5hZnRlcik7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKFlQb3NpdGlvbi5hYm92ZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIFlQb3NpdGlvbkNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIFlQb3NpdGlvbi5hYm92ZSwgVE9QKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoWVBvc2l0aW9uLmJlbG93KSAhPT0gLTEpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgWVBvc2l0aW9uLmJlbG93LCBCT1RUT00pO1xuICB9XG4gIHJldHVybiBoeXBoZW5DYXNlO1xufVxuXG5mdW5jdGlvbiB0b1ZhbGlkQ2xhc3NOYW1lKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IHMgPSBzdHIucmVwbGFjZSgvXlswLTldfFteXFx3XFwtXS9nLCBfID0+IHtcbiAgICByZXR1cm4gYF8ke18uY2hhckNvZGVBdCgwKX1gO1xuICB9KTtcbiAgcmV0dXJuIHM7XG59XG5cblxuZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuZnVuY3Rpb24gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZUNhY2hlKHN0cjogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpOiBzdHJpbmcge1xuICBjb25zdCBtYXAgPSBTVFlMRV9LRVlTX01BUFt0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb25dO1xuICByZXR1cm4gc3RyIGluIG1hcFxuICA/IG1hcFtzdHJdXG4gIDogbWFwW3N0cl0gPSBjb252ZXJ0ZXJUb0Nzc0tleUFuZFN0eWxlKHN0ciwgdGhlbWVWYXJpYWJsZXMpO1xufVxuXG5jb25zdCBpZ25vcmVDU1NLRVkgPSB7XG4gICdicmVhay1hZnRlcic6ICdicmVhay1hZnRlcicsXG4gICdicmVhay1iZWZvcmUnOiAnYnJlYWstYmVmb3JlJyxcbiAgJ3BhZ2UtYnJlYWstYWZ0ZXInOiAncGFnZS1icmVhay1hZnRlcicsXG4gICdwYWdlLWJyZWFrLWJlZm9yZSc6ICdwYWdlLWJyZWFrLWJlZm9yZSdcbn07XG5cbmNvbnN0IFNUWUxFX0tFWVNfTUFQID0ge1xuICBydGw6IHtcbiAgICAuLi5pZ25vcmVDU1NLRVlcbiAgfSxcbiAgbHRyOiB7XG4gICAgLi4uaWdub3JlQ1NTS0VZXG4gIH1cbn07XG5cbmNvbnN0IEJPVFRPTSA9ICdib3R0b20nO1xuY29uc3QgVE9QID0gJ3RvcCc7XG5cbmZ1bmN0aW9uIGRpckNhY2hlKG9yaWdpbmFsLCB2YWw6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBkaXJBbGlhczogRGlyQWxpYXMpIHtcbiAgY29uc3QgbWFwID0gU1RZTEVfS0VZU19NQVBbdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uXTtcbiAgLy8gUmVwbGFjZSBpbiBvcmlnaW5hbCwgZm9yIGRvIG5vdCByZXBlYXQgdGhpcyBhZ2FpblxuICByZXR1cm4gbWFwW29yaWdpbmFsXSA9IHZhbC5yZXBsYWNlKGRpckFsaWFzLCB0aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24oZGlyQWxpYXMpKTtcbn1cblxuZnVuY3Rpb24gWVBvc2l0aW9uQ2FjaGUob3JpZ2luYWwsIHZhbDogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIHBvczogWVBvc2l0aW9uLCB0bzogJ3RvcCcgfCAnYm90dG9tJykge1xuICBjb25zdCBtYXAgPSBTVFlMRV9LRVlTX01BUFt0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb25dO1xuICAvLyBSZXBsYWNlIGluIG9yaWdpbmFsLCBmb3IgZG8gbm90IHJlcGVhdCB0aGlzIGFnYWluXG4gIHJldHVybiBtYXBbb3JpZ2luYWxdID0gdmFsLnJlcGxhY2UocG9zLCB0byk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXh0Q2xhc3NJZCgpIHtcbiAgcmV0dXJuIHlDbGFzc0lELm5leHQoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVVuaXF1ZUNsYXNzSUQoKSB7XG4gIHJldHVybiB5Q2xhc3NJRC5uZXh0KCk7XG59XG5mdW5jdGlvbiBjcmVhdGVOZXh0S2V5ZnJhbWVJZCgpIHtcbiAgcmV0dXJuIGBrJHsobmV4dEtleUZyYW1lSWQrKykudG9TdHJpbmcoMzYpfWA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVSZWYgZXh0ZW5kcyBQaWNrPEx5VGhlbWUyLCAnc2VsZWN0b3JzT2YnPiB7IH1cbiJdfQ==