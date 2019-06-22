import * as tslib_1 from "tslib";
import { Injectable, Inject, isDevMode, NgZone } from '@angular/core';
import { LY_THEME_NAME } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { Platform } from '../platform';
import { DOCUMENT } from '@angular/common';
import { DirAlias, Dir } from '../style-utils';
import { YPosition } from '../position/position';
import { TypeStyle, _STYLE_MAP } from './style';
import * as i0 from "@angular/core";
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
        this.themeMap = THEME_MAP;
        /** ssr or hmr */
        this.isDevOrServer = isDevMode() || !Platform.isBrowser;
        if (themeName) {
            this.setUpTheme(themeName);
        }
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
LyTheme2 = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(2, Inject(LY_THEME_NAME)),
    tslib_1.__param(3, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [StylesInDocument,
        CoreTheme, Object, Object, NgZone])
], LyTheme2);
export { LyTheme2 };
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
export function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}
function createNextClassId() {
    return `i${(nextClassId++).toString(36)}`;
}
function createNextKeyframeId() {
    return `k${(nextKeyFrameId++).toString(36)}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBa0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUF5QixTQUFTLEVBQWtCLFVBQVUsRUFBd0QsTUFBTSxTQUFTLENBQUM7O0FBRTdJLE1BQU0sV0FBVyxHQUFHLGVBQWUsQ0FBQztBQUVwQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDcEIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBS3ZCLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBSDdCO1FBSUUsV0FBTSxHQUVGLEVBQUUsQ0FBQztRQUNQLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7UUFDakQsMEJBQXFCLEdBQUcsSUFBSSxHQUFHLEVBQXFDLENBQUM7S0FDdEU7Q0FBQSxDQUFBOztBQU5ZLGdCQUFnQjtJQUg1QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZ0JBQWdCLENBTTVCO1NBTlksZ0JBQWdCO0FBUTdCLE1BQU0sU0FBUyxHQUFHLElBQUksR0FB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QUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUUsR0FBVyxFQUFFLGNBQThCLEVBQUUsR0FBYyxFQUFFLEVBQW9CO0lBQ2pILE1BQU0sR0FBRyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsb0RBQW9EO0lBQ3BELE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsR0FBVztJQUMvQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFFRCxTQUFTLGlCQUFpQjtJQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQzVDLENBQUM7QUFDRCxTQUFTLG9CQUFvQjtJQUMzQixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQy9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgaXNEZXZNb2RlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnLi9jb3JlLXRoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpckFsaWFzLCBEaXIgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5pbXBvcnQgeyBZUG9zaXRpb24gfSBmcm9tICcuLi9wb3NpdGlvbi9wb3NpdGlvbic7XG5pbXBvcnQgeyBTdHlsZU1hcDUsIFN0eWxlR3JvdXAsIFR5cGVTdHlsZSwgU3R5bGVDb250YWluZXIsIF9TVFlMRV9NQVAsIFN0eWxlcywgU3R5bGVEZWNsYXJhdGlvbnNCbG9jaywgS2V5ZnJhbWVzLCBMeUNsYXNzZXMgfSBmcm9tICcuL3N0eWxlJztcblxuY29uc3QgUkVGX1JFR19FWFAgPSAvXFx7KFtcXHctXSspXFx9L2c7XG5cbmxldCBuZXh0Q2xhc3NJZCA9IDA7XG5sZXQgbmV4dEtleUZyYW1lSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNJbkRvY3VtZW50IHtcbiAgc3R5bGVzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXTogTWFwPHN0cmluZyB8IFN0eWxlcywgSFRNTFN0eWxlRWxlbWVudD5cbiAgfSA9IHt9O1xuICBzdHlsZUNvbnRhaW5lcnMgPSBuZXcgTWFwPG51bWJlciwgSFRNTEVsZW1lbnQ+KCk7XG4gIHN0eWxlRWxlbWVudEdsb2JhbE1hcCA9IG5ldyBNYXA8c3RyaW5nIHwgU3R5bGVzLCBIVE1MU3R5bGVFbGVtZW50PigpO1xufVxuXG5jb25zdCBUSEVNRV9NQVAgPSBuZXcgTWFwPHN0cmluZywge1xuICBiYXNlOiBzdHJpbmdcbiAgY2hhbmdlOiBzdHJpbmcgfCBudWxsXG59PigpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGB0aGVtZVZhcmlhYmxlc2AgaW5zdGVhZFxuICAgKi9cbiAgY29uZmlnOiBUaGVtZVZhcmlhYmxlcztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBpbml0aWFsVGhlbWU6IHN0cmluZztcbiAgZWxlbWVudHM6IE1hcDxzdHJpbmcgfCBTdHlsZXMsIEhUTUxTdHlsZUVsZW1lbnQ+O1xuICBfZWxlbWVudHNNYXAgPSBuZXcgTWFwPGFueSwgSFRNTFN0eWxlRWxlbWVudD4oKTtcblxuICAvKiogR2V0IFRoZW1lIFZhcmlhYmxlcyAqL1xuICBnZXQgdmFyaWFibGVzKCk6IFRoZW1lVmFyaWFibGVzIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cbiAgcHJpdmF0ZSB0aGVtZU1hcCA9IFRIRU1FX01BUDtcbiAgLyoqIHNzciBvciBobXIgKi9cbiAgcHJpdmF0ZSBpc0Rldk9yU2VydmVyID0gaXNEZXZNb2RlKCkgfHwgIVBsYXRmb3JtLmlzQnJvd3NlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlc0luRG9jdW1lbnQ6IFN0eWxlc0luRG9jdW1lbnQsXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgY29uc3QgdGhlbWUgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICBpZiAodGhlbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZW1lICR7dGhlbWVOYW1lfSBub3QgZm91bmQgaW4gQ29yZVRoZW1lYCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoZW1lO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IHRoZW1lTmFtZSBpbiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzXG4gICAgICA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXVxuICAgICAgOiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV0gPSBuZXcgTWFwKCk7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbFRoZW1lKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRoZW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy50aGVtZU1hcC5oYXModGhpcy5pbml0aWFsVGhlbWUpKSB7XG4gICAgICAgIHRoaXMudGhlbWVNYXAuc2V0KHRoaXMuaW5pdGlhbFRoZW1lLCB7XG4gICAgICAgICAgYmFzZTogdGhpcy5pbml0aWFsVGhlbWUsXG4gICAgICAgICAgY2hhbmdlOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgZHluYW1pYyBzdHlsZSwgdXNlIG9ubHkgd2l0aGluIEBJbnB1dCgpXG4gICAqIEBwYXJhbSBpZCBVbmlxdWUgaWRcbiAgICogQHBhcmFtIHN0eWxlIFN0eWxlc1xuICAgKiBAcGFyYW0gZWwgRWxlbWVudFxuICAgKiBAcGFyYW0gaW5zdGFuY2UgVGhlIGluc3RhbmNlIG9mIHRoaXMsIHRoaXMgcmVwbGFjZXMgdGhlIGV4aXN0aW5nIHN0eWxlIHdpdGggYSBuZXcgb25lIHdoZW4gaXQgY2hhbmdlc1xuICAgKiBAcGFyYW0gcGFyZW50U3R5bGVcbiAgICovXG4gIGFkZFN0eWxlKGlkOiBzdHJpbmcsXG4gICAgc3R5bGU/OiBTdHlsZURlY2xhcmF0aW9uc0Jsb2NrLFxuICAgIGVsPzogYW55LFxuICAgIGluc3RhbmNlPzogc3RyaW5nIHwgbnVsbCxcbiAgICBwcmlvcml0eT86IG51bWJlciB8IG51bGwsXG4gICAgcGFyZW50U3R5bGU/OiBTdHlsZXMpIHtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGUsIGlkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBwYXJlbnRTdHlsZSkgYXMgc3RyaW5nO1xuICAgIGlmIChuZXdDbGFzcyA9PT0gaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgaWYgKGVsKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBiYXNpYyBzdHlsZVxuICAgKiBAcGFyYW0gc3R5bGUgU3R5bGVzLlxuICAgKiBOb3RlOiBVc2Ugb25seSB3aXRoIGlubXV0YWJsZSB2YXJpYWJsZS5cbiAgICogQHBhcmFtIHByaW9yaXR5IFByaW9yaXR5IG9mIHN0eWxlXG4gICAqIEBwYXJhbSBwYXJlbnRTdHlsZVxuICAgKi9cbiAgc3R5bGUoc3R5bGU6IFN0eWxlRGVjbGFyYXRpb25zQmxvY2ssIHByaW9yaXR5PzogbnVtYmVyIHwgbnVsbCwgcGFyZW50U3R5bGU/OiBTdHlsZXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlLFxuICAgICAgbnVsbCxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgVHlwZVN0eWxlLk9ubHlPbmUsXG4gICAgICBmYWxzZSwgcGFyZW50U3R5bGUpIGFzIHN0cmluZztcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0NsYXNzID09PSBvbGRDbGFzcykge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICBpZiAoIVBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcXGB0aGVtZS5zZXRUaGVtZSgndGhlbWUtbmFtZScpXFxgIGlzIG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIgcGxhdGZvcm1gKTtcbiAgICB9XG4gICAgaWYgKG5hbSAhPT0gdGhpcy5jb25maWcubmFtZSkge1xuICAgICAgY29uc3QgdGhlbWUgPSB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSk7XG4gICAgICBpZiAodGhlbWUgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZW1lICR7bmFtfSBub3QgZm91bmQgaW4gdGhlbWVNYXBgKTtcbiAgICAgIH1cbiAgICAgIHRoZW1lLmNoYW5nZSA9IG5hbTtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldChuYW0pITtcbiAgICAgIHRoaXMuX3VwZGF0ZUFsbFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBUb2dnbGUgcmlnaHQtdG8tbGVmdC9sZWZ0LXRvLXJpZ2h0ICovXG4gIHRvZ2dsZURpcmVjdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jb25maWcuZGlyZWN0aW9uO1xuICAgIHRoaXMuY29uZmlnLmRpcmVjdGlvbiA9IGN1cnJlbnQgPT09IERpci5sdHIgPyBEaXIucnRsIDogRGlyLmx0cjtcbiAgICB0aGlzLl91cGRhdGVBbGxTdHlsZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUFsbFN0eWxlcygpIHtcbiAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVEYXRhID0gX1NUWUxFX01BUC5nZXQoa2V5KSE7XG4gICAgICBpZiAoc3R5bGVEYXRhLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZURhdGEuc3R5bGVzLCBzdHlsZURhdGEuaWQsIHN0eWxlRGF0YS5wcmlvcml0eSwgc3R5bGVEYXRhLnR5cGUsIHRydWUsIHN0eWxlRGF0YS5wYXJlbnRTdHlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2ltcGxlIHN0eWxlXG4gICAqIHJldHVybiBjbGFzc05hbWVcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgb2JqZWN0IG9yIHN0cmluZ1xuICAgKiBAcGFyYW0gcHJpb3JpdHkgc3R5bGUgcHJpb3JpdHkoZGVmYXVsdDogMClcbiAgICovXG4gIGFkZFNpbXBsZVN0eWxlKGlkOiBzdHJpbmcsIGNzczogU3R5bGVDb250YWluZXIgfCAoKHRoZW1lKSA9PiBTdHlsZUNvbnRhaW5lciksIHByaW9yaXR5PzogbnVtYmVyLCBwYXJlbnRTdHlsZT86IFN0eWxlcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoY3NzIGFzIGFueSwgaWQsIHByaW9yaXR5LCBUeXBlU3R5bGUuT25seU9uZSwgZmFsc2UsIHBhcmVudFN0eWxlKSBhcyBzdHJpbmc7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGFkZCBhIG5ldyBzdHlsZSBzaGVldFxuICAgKiBAcGFyYW0gc3R5bGVzIHN0eWxlc1xuICAgKiBAcGFyYW0gcHJpb3JpdHkgcHJpb3JpdHkgZm9yIHN0eWxlXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIFN0eWxlcywgcHJpb3JpdHk/OiBudW1iZXIpOiBMeUNsYXNzZXM8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgbnVsbCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBzdHlsZSBleGlzdFxuICAgKiBAcGFyYW0gc3R5bGVzT3JJZCBTdHlsZSBvciBJZCBvZiBhIHN0eWxlXG4gICAqL1xuICBleGlzdFN0eWxlKHN0eWxlc09ySWQ6IHN0cmluZyB8IFN0eWxlcyB8IFN0eWxlRGVjbGFyYXRpb25zQmxvY2spOiBib29sZWFuIHtcbiAgICBpZiAoX1NUWUxFX01BUC5oYXMoc3R5bGVzT3JJZCkpIHtcbiAgICAgIGNvbnN0IHN0eWxlTWFwID0gX1NUWUxFX01BUC5nZXQoc3R5bGVzT3JJZCkhO1xuICAgICAgcmV0dXJuICEhKHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhpcy5pbml0aWFsVGhlbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU3R5bGVDb250ZW50MihcbiAgICBzdHlsZXM6IFN0eWxlcyB8IFN0eWxlRGVjbGFyYXRpb25zQmxvY2ssXG4gICAgaWQ6IHN0cmluZyB8IG51bGwsXG4gICAgcHJpb3JpdHk6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGwsXG4gICAgdHlwZTogVHlwZVN0eWxlLFxuICAgIGZvckNoYW5nZVRoZW1lPzogYm9vbGVhbixcbiAgICBwYXJlbnRTdHlsZT86IFN0eWxlc1xuICApIHtcbiAgICBjb25zdCBuZXdJZCA9IGlkIHx8IHN0eWxlcyBhcyBTdHlsZXM7XG4gICAgbGV0IGlzTmV3U3R5bGU6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcbiAgICBpZiAoIV9TVFlMRV9NQVAuaGFzKG5ld0lkKSkge1xuICAgICAgaXNOZXdTdHlsZSA9IHRydWU7XG4gICAgICBfU1RZTEVfTUFQLnNldChuZXdJZCwge1xuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMgYXMgU3R5bGVzLFxuICAgICAgICB0eXBlLFxuICAgICAgICBjc3M6IHt9LFxuICAgICAgICBpZCxcbiAgICAgICAgcGFyZW50U3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZU1hcCA9IF9TVFlMRV9NQVAuZ2V0KG5ld0lkKSE7XG4gICAgY29uc3QgdGhlbWVOYW1lID0gdGhpcy5pbml0aWFsVGhlbWU7XG4gICAgY29uc3QgaXNDcmVhdGVkID0gaXNOZXdTdHlsZSB8fCAhKHN0eWxlTWFwLmNsYXNzZXMgfHwgc3R5bGVNYXBbdGhlbWVOYW1lXSk7XG4gICAgaWYgKGlzQ3JlYXRlZCB8fCBmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgLyoqIGNyZWF0ZSBuZXcgc3R5bGUgZm9yIG5ldyB0aGVtZSAqL1xuICAgICAgbGV0IGNzczogc3RyaW5nIHwgeyBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmc7IH07XG4gICAgICBjb25zdCB0aGVtZU1hcCA9IHRoaXMudGhlbWVNYXAuZ2V0KHRoaXMuaW5pdGlhbFRoZW1lKSE7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTWFwLmNoYW5nZSB8fCB0aGVtZU5hbWUpIGFzIFRoZW1lVmFyaWFibGVzO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZU1hcCwgc3R5bGVzKGNvbmZpZywgdGhpcykgYXMgU3R5bGVHcm91cCwgdGhlbWVOYW1lLCBpZCwgdHlwZSwgY29uZmlnKTtcbiAgICAgICAgaWYgKCFmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICAgIHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdID0gY3NzO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogY3JlYXRlIGEgbmV3IGlkIGZvciBzdHlsZSB0aGF0IGRvZXMgbm90IDwtPHJlcXVpcmU+LT4gY2hhbmdlcyAqL1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVNYXAsIHN0eWxlcyBhcyBTdHlsZUdyb3VwLCB0aGVtZU5hbWUsIG5ld0lkIGFzIHN0cmluZywgdHlwZSwgY29uZmlnKTtcbiAgICAgICAgc3R5bGVNYXAuY3NzID0gY3NzO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgbmV3RWwgPSB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoY3NzKTtcbiAgICAgICAgaWYgKHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGZvciB3aGVuIGEgdGhlbWUgY2hhbmdlc1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMuc2V0KG5ld0lkLCBuZXdFbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Rldk9yU2VydmVyKSB7XG4gICAgICAgICAgLy8gaW4gZGV2IG1vZGUgb3Igc2VydmVyIGl0IGlzIG5vdCBuZWNlc3NhcnlcbiAgICAgICAgICAvLyBzaW5jZSB0aGUgc3R5bGVzIHdpbGwgbm90IGNoYW5nZVxuICAgICAgICAgIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZUVsZW1lbnRHbG9iYWxNYXAuc2V0KG5ld0lkLCBuZXdFbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgbmV3RWwpO1xuICAgICAgfVxuICAgICAgaWYgKGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50cy5nZXQobmV3SWQpIGFzIEhUTUxTdHlsZUVsZW1lbnQ7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IGNzcztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZXZPclNlcnZlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBhcHBlbmQgY2hpbGQgc3R5bGUgaWYgbm90IGV4aXN0IGluIGRvbVxuICAgICAgICogZm9yIHNzciBvciBobXJcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgX2NzcyA9IHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdIHx8IHN0eWxlTWFwLmNzcztcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlRWxlbWVudEdsb2JhbE1hcDtcbiAgICAgICAgaWYgKHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpKTtcbiAgICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXAuaGFzKG5ld0lkKSkge1xuICAgICAgICAgIG1hcC5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgbWFwLmdldChuZXdJZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKSB7XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxuICB0b0NsYXNzU2VsZWN0b3I8VD4oY2xhc3NlczogVCk6IFQge1xuICAgIGNvbnN0IG5ld0NsYXNzZXM6IG9iamVjdCA9IHsgfTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjbGFzc2VzIGFzIHVua25vd24gYXMgb2JqZWN0KSB7XG4gICAgICBpZiAoY2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG5ld0NsYXNzZXNba2V5XSA9IGAuJHtjbGFzc2VzW2tleV19YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0NsYXNzZXMgYXMgdW5rbm93biBhcyBUO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gZ3JvdXBTdHlsZVRvU3RyaW5nKFxuICBzdHlsZU1hcDogU3R5bGVNYXA1LFxuICBzdHlsZXM6IFN0eWxlR3JvdXAsXG4gIHRoZW1lTmFtZTogc3RyaW5nLFxuICBpZDogc3RyaW5nIHwgbnVsbCxcbiAgdHlwZVN0eWxlOiBUeXBlU3R5bGUsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlc1xuKSB7XG4gIC8vIGZvciBzdHlsZXMgdHlwZSBzdHJpbmdcbiAgaWYgKHR5cGVTdHlsZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUpIHtcbiAgICAvLyB1c2UgY3VycmVudCBjbGFzcyBvciBzZXQgbmV3XG4gICAgY29uc3QgY2xhc3NOYW1lID0gc3R5bGVNYXAucmVxdWlyZVVwZGF0ZVxuICAgID8gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IGNyZWF0ZU5leHRDbGFzc0lkKCkpXG4gICAgOiBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA/IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgIDogc3R5bGVNYXAuY2xhc3NlcyA9IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG4gICAgbGV0IHJ1bGVzOiBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBydWxlcyA9IGAuJHtjbGFzc05hbWV9eyR7c3R5bGVzfX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBydWxlcyA9IHN0eWxlVG9TdHJpbmcoaWQsIG51bGwsIHN0eWxlcyBhcyBTdHlsZUNvbnRhaW5lciwgdGhlbWVWYXJpYWJsZXMsIGNsYXNzTmFtZSBhcyBhbnkpO1xuICAgIH1cbiAgICBpZiAoc3R5bGVNYXAucGFyZW50U3R5bGUpIHtcbiAgICAgIGNvbnN0IHN0eWxlTWFwT2ZQYXJlbnRTdHlsZSA9IF9TVFlMRV9NQVAuZ2V0KHN0eWxlTWFwLnBhcmVudFN0eWxlKTtcbiAgICAgIGlmICghc3R5bGVNYXBPZlBhcmVudFN0eWxlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhcmVudFN0eWxlIG5vdCBleGlzdCBvciBpcyBjYWxsZWQgYmVmb3JlIGJlaW5nIGNyZWF0ZWQuYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVwbGFjZVJlZnMocnVsZXMsIHN0eWxlTWFwT2ZQYXJlbnRTdHlsZVt0aGVtZU5hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG4gIC8vIGZvciBtdWx0aXBsZXMgc3R5bGVzXG4gIGNvbnN0IGNsYXNzZXNNYXAgPSBzdHlsZU1hcFt0aGVtZU5hbWVdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVdID0ge30pO1xuICBsZXQgY29udGVudCA9ICcnO1xuICBjb25zdCBuYW1lID0gc3R5bGVzLiRuYW1lID8gYCR7c3R5bGVzLiRuYW1lfS1gIDogJyc7XG5cbiAgLy8gc2V0IHByaW9yaXR5XG4gIGlmIChzdHlsZXMuJHByaW9yaXR5ICE9IG51bGwpIHtcbiAgICBzdHlsZU1hcC5wcmlvcml0eSA9IHN0eWxlcy4kcHJpb3JpdHk7XG4gIH1cbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgaWYgKGtleSA9PT0gJyRrZXlmcmFtZXMnKSB7XG4gICAgICAgIGNvbnRlbnQgKz0ga2V5ZnJhbWVzVG9TdHJpbmcobmFtZSwgY2xhc3Nlc01hcCwgdmFsdWUgYXMgS2V5ZnJhbWVzLCB0aGVtZVZhcmlhYmxlcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgICAgY29uc3QgY3VycmVudENsYXNzTmFtZSA9IGtleSBpbiBjbGFzc2VzTWFwXG4gICAgICAgID8gY2xhc3Nlc01hcFtrZXldXG4gICAgICAgIDogY2xhc3Nlc01hcFtrZXldID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGB5LSR7bmFtZX0ke2tleX0tJHtjcmVhdGVOZXh0Q2xhc3NJZCgpfWApIDogY3JlYXRlTmV4dENsYXNzSWQoKTtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcoa2V5LCBzdHlsZXMuJG5hbWUsIHZhbHVlIGFzIFN0eWxlR3JvdXAsIHRoZW1lVmFyaWFibGVzLCBjdXJyZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2VSZWZzKGNvbnRlbnQsIGNsYXNzZXNNYXApO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUmVmcyhzdHI6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUZfUkVHX0VYUCwgKF9tYXRjaCwgdG9rZW4pID0+IHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBkYXRhW3Rva2VuXTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gYC4ke2RhdGFbdG9rZW5dfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhW2BA0LMuLT4tJHt0b2tlbn1gXTtcbiAgICB9XG4gIH1cbiAgKTtcbn1cblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhcbiAga2V5OiBzdHJpbmcgfCBudWxsLFxuICAkbmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgb2I6IFN0eWxlQ29udGFpbmVyLFxuICB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gIGN1cnJlbnRLZXk6IHN0cmluZyxcbiAgcGFyZW50S2V5Pzogc3RyaW5nXG4pIHtcblxuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgc3ViQ29udGVudCA9ICcnO1xuICBsZXQga2V5QW5kVmFsdWUgPSAnJztcbiAgbGV0IG5ld0tleTogc3RyaW5nO1xuICBpZiAocGFyZW50S2V5KSB7XG4gICAgaWYgKGN1cnJlbnRLZXkuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgICAgbmV3S2V5ID0gY3VycmVudEtleS5yZXBsYWNlKC8mL2csIHBhcmVudEtleSk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50S2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICBuZXdLZXkgPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50S2V5ID09PSAnQGdsb2JhbCcgfHwgcGFyZW50S2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICAgIG5ld0tleSA9IGN1cnJlbnRLZXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0tleSA9IGAke3BhcmVudEtleX0gJHtjdXJyZW50S2V5fWA7XG4gICAgfVxuICB9IGVsc2UgaWYgKGtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgbmV3S2V5ID0ga2V5O1xuICB9IGVsc2Uge1xuICAgIG5ld0tleSA9IGAuJHtjdXJyZW50S2V5fWA7XG4gIH1cbiAgZm9yIChjb25zdCBzdHlsZUtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBvYltzdHlsZUtleV07XG4gICAgICAvLyBPbWl0IHN0eWxlIHdpdGggdmFsdWUgbnVsbFxuICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAvLyBDaGVjayBpZiBpcyBPYmplY3QgbGl0ZXJhbFxuICAgICAgICBpZiAoZWxlbWVudC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgc3ViQ29udGVudCArPSBzdHlsZVRvU3RyaW5nKGtleSwgJG5hbWUsIGVsZW1lbnQgYXMgU3R5bGVHcm91cCwgdGhlbWVWYXJpYWJsZXMsIHN0eWxlS2V5LCBuZXdLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGtleUFuZFZhbHVlICs9IGNvbnZlcnRUb1N0eWxlVmFsdWUoc3R5bGVLZXksIGVsZW1lbnQgYXMgc3RyaW5nIHwgc3RyaW5nW10sIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoa2V5QW5kVmFsdWUpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGxldCBsaW4gPSAnXFxuXFxuJztcbiAgICAgIGlmICgkbmFtZSkge1xuICAgICAgICBsaW4gKz0gYC8qKiBTdHlsZSBTaGVldCBuYW1lOiAkeyRuYW1lfSAqL1xcbmA7XG4gICAgICB9XG4gICAgICBsaW4gKz0gYC8qKiBTdHlsZSBLZXk6ICR7a2V5fSAqL1xcbmA7XG4gICAgICBjb250ZW50ICs9IGAke2xpbn1gO1xuICAgIH1cbiAgICBpZiAobmV3S2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICBjb250ZW50ICs9IGAke25ld0tleX1gO1xuICAgICAga2V5QW5kVmFsdWUgPSBgJHtwYXJlbnRLZXl9eyR7a2V5QW5kVmFsdWV9fWA7XG4gICAgfSBlbHNlIGlmIChwYXJlbnRLZXkgJiYgcGFyZW50S2V5ID09PSAnQGdsb2JhbCcpIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ICs9IGAke25ld0tleX1gO1xuICAgIH1cbiAgICBjb250ZW50ICs9IGB7JHtrZXlBbmRWYWx1ZX19YDtcbiAgfVxuICByZXR1cm4gY29udGVudCArIHN1YkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1N0eWxlVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSwgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGNvbnN0IG5ld1N0eWxlS2V5ID0gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZUNhY2hlKGtleSwgdGhlbWVWYXJpYWJsZXMpO1xuICBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgbGV0IGxpbiA9ICcnO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWx1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGxpbiArPSBgJHtuZXdTdHlsZUtleX06JHt2YWx1ZVtpbmRleF19O2A7XG4gICAgfVxuICAgIHJldHVybiBsaW47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke25ld1N0eWxlS2V5fToke3ZhbHVlfTtgO1xuICB9XG59XG5cbmZ1bmN0aW9uIGtleWZyYW1lc1RvU3RyaW5nKHN0eWxlTmFtZTogc3RyaW5nLCBrZXlzTWFwOiBvYmplY3QsIGtleWZyYW1lczogS2V5ZnJhbWVzLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcblxuICBmb3IgKGNvbnN0IG5hbWUgaW4ga2V5ZnJhbWVzKSB7XG4gICAgaWYgKGtleWZyYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgY29uc3Qga2V5ZnJhbWUgPSBrZXlmcmFtZXNbbmFtZV07XG4gICAgICAvLyBTb21ldGltZXMgdGhlIG5hbWUgb2YgYSBjbGFzcyBjYW4gYmUgdGhlIHNhbWUgYXMgdGhlIG5hbWUgb2YgYSBrZXlmcmFtZSxcbiAgICAgIC8vIHNvIHdlIGFkZCBhIGNoYXJhY3RlciB0byBiZSBkaWZmZXJlbnRcbiAgICAgIGNvbnN0IG5ld1VuaXF1ZU5hbWUgPSBgQNCzLi0+LSR7bmFtZX1gO1xuICAgICAgLy8gc2V0IG5ldyBpZCBpZiBub3QgZXhpc3RcbiAgICAgIGNvbnN0IG5ld05hbWUgPSBuZXdVbmlxdWVOYW1lIGluIGtleXNNYXBcbiAgICAgID8ga2V5c01hcFtuZXdVbmlxdWVOYW1lXVxuICAgICAgOiBrZXlzTWFwW25ld1VuaXF1ZU5hbWVdID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGAke3N0eWxlTmFtZX0ke25hbWV9LSR7Y3JlYXRlTmV4dEtleWZyYW1lSWQoKX0tdmApIDogY3JlYXRlTmV4dEtleWZyYW1lSWQoKTtcbiAgICAgIGNvbnRlbnQgKz0gYEBrZXlmcmFtZXMgJHtuZXdOYW1lfXtgO1xuICAgICAgZm9yIChjb25zdCBwZXJjZW50IGluIGtleWZyYW1lKSB7XG4gICAgICAgIGlmIChrZXlmcmFtZS5oYXNPd25Qcm9wZXJ0eShwZXJjZW50KSkge1xuICAgICAgICAgIGNvbnRlbnQgKz0gYCR7cGVyY2VudH0le2A7XG4gICAgICAgICAgY29uc3Qgc3R5bGVzID0ga2V5ZnJhbWVbcGVyY2VudF07XG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gc3R5bGVzW2tleV07XG4gICAgICAgICAgICAgIGNvbnRlbnQgKz0gY29udmVydFRvU3R5bGVWYWx1ZShrZXksIHZhbCBhcyBzdHJpbmcgfCBzdHJpbmdbXSwgdGhlbWVWYXJpYWJsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250ZW50ICs9IGB9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29udGVudCArPSBgfWA7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZShzdHI6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGNvbnN0IGh5cGhlbkNhc2UgPSB0b0h5cGhlbkNhc2Uoc3RyKTtcbiAgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5iZWZvcmUpICE9PSAtMSkge1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5iZWZvcmUpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5hZnRlcikgIT09IC0xKSB7XG4gICAgcmV0dXJuIGRpckNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLmFmdGVyKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoWVBvc2l0aW9uLmFib3ZlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgWVBvc2l0aW9uLmFib3ZlLCBUT1ApO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihZUG9zaXRpb24uYmVsb3cpICE9PSAtMSkge1xuICAgIHJldHVybiBZUG9zaXRpb25DYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBZUG9zaXRpb24uYmVsb3csIEJPVFRPTSk7XG4gIH1cbiAgcmV0dXJuIGh5cGhlbkNhc2U7XG59XG5cbmZ1bmN0aW9uIHRvQ2xhc3NOYW1lVmFsaWQoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgcyA9IHN0ci5yZXBsYWNlKC9eWzAtOV18W15cXHdcXC1dL2csIF8gPT4ge1xuICAgIHJldHVybiBgXyR7Xy5jaGFyQ29kZUF0KDApfWA7XG4gIH0pO1xuICByZXR1cm4gdG9IeXBoZW5DYXNlKHMpO1xufVxuXG5cbmZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGVDYWNoZShzdHI6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKTogc3RyaW5nIHtcbiAgY29uc3QgbWFwID0gU1RZTEVfS0VZU19NQVBbdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uXTtcbiAgcmV0dXJuIHN0ciBpbiBtYXBcbiAgPyBtYXBbc3RyXVxuICA6IG1hcFtzdHJdID0gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZShzdHIsIHRoZW1lVmFyaWFibGVzKTtcbn1cblxuY29uc3QgaWdub3JlQ1NTS0VZID0ge1xuICAnYnJlYWstYWZ0ZXInOiAnYnJlYWstYWZ0ZXInLFxuICAnYnJlYWstYmVmb3JlJzogJ2JyZWFrLWJlZm9yZScsXG4gICdwYWdlLWJyZWFrLWFmdGVyJzogJ3BhZ2UtYnJlYWstYWZ0ZXInLFxuICAncGFnZS1icmVhay1iZWZvcmUnOiAncGFnZS1icmVhay1iZWZvcmUnXG59O1xuXG5jb25zdCBTVFlMRV9LRVlTX01BUCA9IHtcbiAgcnRsOiB7XG4gICAgLi4uaWdub3JlQ1NTS0VZXG4gIH0sXG4gIGx0cjoge1xuICAgIC4uLmlnbm9yZUNTU0tFWVxuICB9XG59O1xuXG5jb25zdCBCT1RUT00gPSAnYm90dG9tJztcbmNvbnN0IFRPUCA9ICd0b3AnO1xuXG5mdW5jdGlvbiBkaXJDYWNoZShvcmlnaW5hbCwgdmFsOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgZGlyQWxpYXM6IERpckFsaWFzKSB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIC8vIFJlcGxhY2UgaW4gb3JpZ2luYWwsIGZvciBkbyBub3QgcmVwZWF0IHRoaXMgYWdhaW5cbiAgcmV0dXJuIG1hcFtvcmlnaW5hbF0gPSB2YWwucmVwbGFjZShkaXJBbGlhcywgdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKGRpckFsaWFzKSk7XG59XG5cbmZ1bmN0aW9uIFlQb3NpdGlvbkNhY2hlKG9yaWdpbmFsLCB2YWw6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBwb3M6IFlQb3NpdGlvbiwgdG86ICd0b3AnIHwgJ2JvdHRvbScpIHtcbiAgY29uc3QgbWFwID0gU1RZTEVfS0VZU19NQVBbdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uXTtcbiAgLy8gUmVwbGFjZSBpbiBvcmlnaW5hbCwgZm9yIGRvIG5vdCByZXBlYXQgdGhpcyBhZ2FpblxuICByZXR1cm4gbWFwW29yaWdpbmFsXSA9IHZhbC5yZXBsYWNlKHBvcywgdG8pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dENsYXNzSWQoKSB7XG4gIHJldHVybiBgaSR7KG5leHRDbGFzc0lkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuZnVuY3Rpb24gY3JlYXRlTmV4dEtleWZyYW1lSWQoKSB7XG4gIHJldHVybiBgayR7KG5leHRLZXlGcmFtZUlkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lUmVmIGV4dGVuZHMgUGljazxMeVRoZW1lMiwgJ3RvQ2xhc3NTZWxlY3Rvcic+IHtcbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiBTdHlsZXMpOiBMeUNsYXNzZXM8VD47XG59XG4iXX0=