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
var /** @type {?} */ STYLE_MAP_03 = /** @type {?} */ ({});
var /** @type {?} */ STYLE_MAP = {};
var /** @type {?} */ CLASSES_MAP = {};
var /** @type {?} */ STYLE_KEYS_MAP = {};
var /** @type {?} */ nextId = 0;
var StylesInDocument = /** @class */ (function () {
    function StylesInDocument() {
        this.styles = new Set();
    }
    StylesInDocument.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ StylesInDocument.ngInjectableDef = i0.defineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
    return StylesInDocument;
}());
export { StylesInDocument };
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
var LyTheme2 = /** @class */ (function () {
    function LyTheme2(stylesInDocument, core, themeName) {
        this.stylesInDocument = stylesInDocument;
        this.core = core;
        this.prefix = 'k';
        if (themeName) {
            this.setUpTheme(themeName);
        }
    }
    Object.defineProperty(LyTheme2.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return CLASSES_MAP;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} themeName
     * @return {?}
     */
    LyTheme2.prototype.setUpTheme = /**
     * @param {?} themeName
     * @return {?}
     */
    function (themeName) {
        if (!this.config) {
            this._styleMap2 = themeName in STYLE_MAP
                ? STYLE_MAP[themeName]
                : STYLE_MAP[themeName] = new Map();
            this.config = this.core.get(themeName);
            this._styleMap = new Map();
        }
    };
    /**
     * @template T
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    LyTheme2.prototype.setUpStyle = /**
     * @template T
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function (key, styles, media, invertMediaQuery) {
        var /** @type {?} */ name = this.config.name;
        return this.core._ĸreateStyle(this.config, key, styles, this._styleMap, name, this.core.primaryStyleContainer, media, invertMediaQuery);
    };
    /**
     * @template T
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    LyTheme2.prototype.setUpStyleSecondary = /**
     * @template T
     * @param {?} key
     * @param {?} styles
     * @param {?=} media
     * @param {?=} invertMediaQuery
     * @return {?}
     */
    function (key, styles, media, invertMediaQuery) {
        var /** @type {?} */ name = this.config.name;
        return this.core._ĸreateStyle(this.config, key, styles, this._styleMap, name, this.core.secondaryStyleContainer, media, invertMediaQuery);
    };
    /**
     * Add a new dynamic style, use only within @Input()
     * @param id Unique id
     * @param style Styles
     * @param el Element
     * @param instance The instance of this, this replaces the existing style with a new one when it changes
     */
    /**
     * Add a new dynamic style, use only within \@Input()
     * @template T
     * @param {?} id Unique id
     * @param {?} style Styles
     * @param {?=} el Element
     * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
     * @return {?}
     */
    LyTheme2.prototype.addStyle = /**
     * Add a new dynamic style, use only within \@Input()
     * @template T
     * @param {?} id Unique id
     * @param {?} style Styles
     * @param {?=} el Element
     * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
     * @return {?}
     */
    function (id, style, el, instance) {
        var /** @type {?} */ newClass = this.addCss(id, /** @type {?} */ (style));
        if (instance) {
            el.classList.remove(instance);
        }
        el.classList.add(newClass);
        return newClass;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LyTheme2.prototype.colorOf = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return get(this.config, value);
    };
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClassname
     * @param {?=} oldClassname
     * @return {?}
     */
    LyTheme2.prototype.updateClassName = /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClassname
     * @param {?=} oldClassname
     * @return {?}
     */
    function (element, renderer, newClassname, oldClassname) {
        this.core.updateClassName(element, renderer, newClassname, oldClassname);
    };
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClass
     * @param {?=} oldClass
     * @return {?}
     */
    LyTheme2.prototype.updateClass = /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClass
     * @param {?=} oldClass
     * @return {?}
     */
    function (element, renderer, newClass, oldClass) {
        this.updateClassName(element, renderer, newClass, oldClass);
        return newClass;
    };
    /**
     * @param {?} nam
     * @return {?}
     */
    LyTheme2.prototype.setTheme = /**
     * @param {?} nam
     * @return {?}
     */
    function (nam) {
        var _this = this;
        if (!Platform.isBrowser) {
            throw new Error("`theme.setTheme('theme-name')` is only available in browser platform");
        }
        this.config = this.core.get(nam);
        // this._styleMap2.forEach(dataStyle => {
        //   dataStyle.el.innerText = this._createStyleC ontent2(dataStyle.styles, dataStyle.id);
        // });
        for (var /** @type {?} */ key in STYLE_MAP_03) {
            if (STYLE_MAP_03.hasOwnProperty(key)) {
                var _a = STYLE_MAP_03[key], styles = _a.styles, media = _a.media;
                this._createStyleContent2(styles, key, true, media);
            }
        }
        this._styleMap.forEach(function (dataStyle) {
            dataStyle.styleElement.innerText = _this.core._createStyleContent(_this.config, dataStyle.style, dataStyle.id);
        });
    };
    /**
     * add style, similar to setUpStyle but this only accept string
     * @param {?} id id of style
     * @param {?} css style in string
     * @param {?=} media
     * @return {?}
     */
    LyTheme2.prototype.addCss = /**
     * add style, similar to setUpStyle but this only accept string
     * @param {?} id id of style
     * @param {?} css style in string
     * @param {?=} media
     * @return {?}
     */
    function (id, css, media) {
        var /** @type {?} */ newId = "~>" + id;
        this._createStyleContent2(/** @type {?} */ (css), newId, false, media);
        return CLASSES_MAP[newId];
    };
    /**
     * Add new add a new style sheet
     * @param styles styles
     * @param id unique id for style group
     */
    /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id unique id for style group
     * @return {?}
     */
    LyTheme2.prototype.addStyleSheet = /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id unique id for style group
     * @return {?}
     */
    function (styles, id) {
        var /** @type {?} */ newId = id || 'global';
        // const styleElement = this.core.renderer.createElement('style');
        this._createStyleContent2(styles, newId);
        return CLASSES_MAP[newId];
    };
    /**
     * @template T
     * @param {?} styles
     * @param {?} id
     * @param {?=} forChangeTheme
     * @param {?=} media
     * @return {?}
     */
    LyTheme2.prototype._createStyleContent2 = /**
     * @template T
     * @param {?} styles
     * @param {?} id
     * @param {?=} forChangeTheme
     * @param {?=} media
     * @return {?}
     */
    function (styles, id, forChangeTheme, media) {
        var /** @type {?} */ styleMap = id in STYLE_MAP_03
            ? STYLE_MAP_03[id]
            : STYLE_MAP_03[id] = {
                styles: styles,
                media: media,
                themes: /** @type {?} */ ({})
            };
        if (!(styleMap.themes.default || this.config.name in styleMap.themes)) {
            var /** @type {?} */ css = void 0;
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
                var /** @type {?} */ styleElement = this.core.renderer.createElement('style');
                var /** @type {?} */ styleText = this.core.renderer.createText(css);
                this.core.renderer.appendChild(styleElement, styleText);
                this._styleMap2.set(id, {
                    el: styleElement
                });
            }
        }
        var /** @type {?} */ style = this._styleMap2.get(id);
        if (!this.stylesInDocument.styles.has(id)) {
            this.stylesInDocument.styles.add(id);
            this.core.renderer.appendChild(this.core.primaryStyleContainer, style.el);
        }
        if (forChangeTheme && styleMap.themes[this.config.name]) {
            style.el.innerText = styleMap.themes[this.config.name];
        }
    };
    LyTheme2.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LyTheme2.ctorParameters = function () { return [
        { type: StylesInDocument, },
        { type: CoreTheme, },
        { type: undefined, decorators: [{ type: Inject, args: [LY_THEME_NAME,] },] },
    ]; };
    return LyTheme2;
}());
export { LyTheme2 };
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
    var /** @type {?} */ content = '';
    // let newKey = '';
    // const string
    if (typeof styles === 'string') {
        var /** @type {?} */ className = CLASSES_MAP[id] ? CLASSES_MAP[id] : CLASSES_MAP[id] = "e" + (nextId++).toString(36);
        var /** @type {?} */ css = "." + className + "{" + styles + "}";
        return media ? toMedia(css, media) : css;
    }
    var /** @type {?} */ classesMap = id in CLASSES_MAP
        ? CLASSES_MAP[id]
        : CLASSES_MAP[id] = {};
    for (var /** @type {?} */ key in styles) {
        if (styles.hasOwnProperty(key)) {
            var /** @type {?} */ value = styles[key];
            if (typeof value === 'object') {
                var /** @type {?} */ className = key in classesMap
                    ? classesMap[key]
                    : classesMap[key] = isDevMode() ? toClassNameValid(id + "__" + key) : "e" + (nextId++).toString(36);
                var /** @type {?} */ style = styleToString(/** @type {?} */ (value), "." + className);
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
    var /** @type {?} */ content = "@keyframes " + name + "{";
    for (var /** @type {?} */ key in ob) {
        if (ob.hasOwnProperty(key)) {
            var /** @type {?} */ element = ob[key];
            content += key + "% " + styleToString(element, '');
        }
    }
    content += "}";
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
    var /** @type {?} */ content = '';
    var /** @type {?} */ keyAndValue = '';
    for (var /** @type {?} */ styleKey in ob) {
        if (ob.hasOwnProperty(styleKey)) {
            var /** @type {?} */ element = ob[styleKey];
            if (typeof element === 'object') {
                content += styleToString(/** @type {?} */ (element), styleKey, className);
            }
            else {
                // const styleKeyHyphenCase = toHyphenCaseCache(styleKey);
                // const styleValue = styleKeyHyphenCase === 'font-size' && typeof element === 'number'
                // ? this.config.pxToRem(element)
                // : element;
                keyAndValue += toHyphenCaseCache(styleKey) + ":" + element + ";";
            }
        }
    }
    if (className) {
        var /** @type {?} */ newClassName = '';
        if (parentClassName) {
            newClassName += className.indexOf('&') === 0 ? "" + parentClassName + className.slice(1) : parentClassName + " ." + className;
        }
        else {
            newClassName += className;
        }
        content += "" + newClassName;
    }
    content += "{" + keyAndValue + "}";
    return content;
}
/**
 * @param {?} obj
 * @param {?} path
 * @return {?}
 */
function get(obj, path) {
    var /** @type {?} */ _path = path instanceof Array ? path : path.split(':');
    for (var /** @type {?} */ i = 0; i < _path.length; i++) {
        obj = obj[_path[i]] || path;
    }
    return typeof obj === 'string' ? /** @type {?} */ (obj) : /** @type {?} */ (obj['default']);
}
/**
 * @param {?} str
 * @return {?}
 */
export function toHyphenCase(str) {
    return str.replace(/([A-Z])/g, function (g) { return "-" + g[0].toLowerCase(); });
}
/**
 * @param {?} str
 * @return {?}
 */
function toClassNameValid(str) {
    var /** @type {?} */ s = str.replace(/[\W]/g, '');
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
    return "@media " + media + "{" + css + "}";
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFZLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCdkMscUJBQU0sWUFBWSxxQkFBZSxFQUFTLENBQUEsQ0FBQztBQUUzQyxxQkFBTSxTQUFTLEdBRVgsRUFBRSxDQUFDO0FBQ1AscUJBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN2QixxQkFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzFCLHFCQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7OztzQkFNSixJQUFJLEdBQUcsRUFBVTs7O2dCQUozQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7MkJBbENEOztTQW1DYSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7SUFlM0Isa0JBQ1Usa0JBQ0QsTUFDZ0IsU0FBUztRQUZ4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ2pCLFNBQUksR0FBSixJQUFJO3NCQVRKLEdBQUc7UUFZVixJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7S0FDRjtJQVpELHNCQUFJLDZCQUFPOzs7O1FBQVg7WUFDRSxPQUFPLFdBQVcsQ0FBQztTQUNwQjs7O09BQUE7Ozs7O0lBV0QsNkJBQVU7Ozs7SUFBVixVQUFXLFNBQWlCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMs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QUFXO0lBQ25DLHFCQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuQyxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3REOzs7OztBQUVELDJCQUEyQixHQUFXO0lBQ3BDLE9BQU8sR0FBRyxJQUFJLGNBQWM7UUFDNUIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7UUFDckIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDM0M7Ozs7O0FBRUQsTUFBTSxnQ0FBZ0MsR0FBVztJQUMvQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVDOzs7Ozs7QUFFRCxpQkFBaUIsR0FBVyxFQUFFLEtBQWE7SUFDekMsT0FBTyxZQUFVLEtBQUssU0FBSSxHQUFHLE1BQUcsQ0FBQztDQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgSW5qZWN0LCBPcHRpb25hbCwgaXNEZXZNb2RlLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3R5bGUsIFN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlc0VsZW1lbnRNYXAge1xuICBlbDogYW55O1xufVxuXG5pbnRlcmZhY2UgU3R5bGVNYXAwMyB7XG4gIFtpZDogc3RyaW5nXTogeyAvLyBleGFtcGxlOiBseVRhYnNcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMjxhbnk+IHwgU3R5bGVzMixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICB0aGVtZXM6IHsgLy8gZXhhbXBsZTogbWluaW1hLWRhcmtcbiAgICAgIC8qKiBDc3MgKi9cbiAgICAgIGRlZmF1bHQ/OiBzdHJpbmcsXG4gICAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IFNUWUxFX01BUF8wMzogU3R5bGVNYXAwMyA9IHt9IGFzIGFueTtcblxuY29uc3QgU1RZTEVfTUFQOiB7XG4gIFtrZXk6IHN0cmluZ106IE1hcDxzdHJpbmcsIFN0eWxlc0VsZW1lbnRNYXA+XG59ID0ge307XG5jb25zdCBDTEFTU0VTX01BUCA9IHt9O1xuY29uc3QgU1RZTEVfS0VZU19NQVAgPSB7fTtcbmxldCBuZXh0SWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNJbkRvY3VtZW50IHtcbiAgc3R5bGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lMiB7XG4gIGNvbmZpZzogVGhlbWVDb25maWc7XG4gIF9zdHlsZU1hcDogTWFwPHN0cmluZywgRGF0YVN0eWxlPjtcbiAgcHJlZml4ID0gJ2snO1xuICBwcml2YXRlIF9zdHlsZU1hcDI6IE1hcDxzdHJpbmcsIFN0eWxlc0VsZW1lbnRNYXA+O1xuXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBDTEFTU0VTX01BUDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVzSW5Eb2N1bWVudDogU3R5bGVzSW5Eb2N1bWVudCxcbiAgICBwdWJsaWMgY29yZTogQ29yZVRoZW1lLFxuICAgIEBJbmplY3QoTFlfVEhFTUVfTkFNRSkgdGhlbWVOYW1lXG4gICkge1xuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5fc3R5bGVNYXAyID0gdGhlbWVOYW1lIGluIFNUWUxFX01BUFxuICAgICAgPyBTVFlMRV9NQVBbdGhlbWVOYW1lXVxuICAgICAgOiBTVFlMRV9NQVBbdGhlbWVOYW1lXSA9IG5ldyBNYXAoKTtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgIH1cbiAgfVxuICBzZXRVcFN0eWxlPFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fxLhyZWF0ZVN0eWxlPFQ+KHRoaXMuY29uZmlnLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVNYXAsIG5hbWUsIHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBzZXRVcFN0eWxlU2Vjb25kYXJ5PFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fxLhyZWF0ZVN0eWxlPFQ+KHRoaXMuY29uZmlnLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVNYXAsIG5hbWUsIHRoaXMuY29yZS5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBkeW5hbWljIHN0eWxlLCB1c2Ugb25seSB3aXRoaW4gQElucHV0KClcbiAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZFxuICAgKiBAcGFyYW0gc3R5bGUgU3R5bGVzXG4gICAqIEBwYXJhbSBlbCBFbGVtZW50XG4gICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2Ugb2YgdGhpcywgdGhpcyByZXBsYWNlcyB0aGUgZXhpc3Rpbmcgc3R5bGUgd2l0aCBhIG5ldyBvbmUgd2hlbiBpdCBjaGFuZ2VzXG4gICAqL1xuICBhZGRTdHlsZTxUPihpZDogc3RyaW5nLCBzdHlsZTogU3R5bGU8VD4sIGVsPzogYW55LCBpbnN0YW5jZT86IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5hZGRDc3MoaWQsIHN0eWxlIGFzIGFueSk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIGNvbG9yT2YodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldCh0aGlzLmNvbmZpZywgdmFsdWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzc25hbWUsIG9sZENsYXNzbmFtZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3MoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzczogc3RyaW5nLCBvbGRDbGFzcz86IHN0cmluZykge1xuICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzcywgb2xkQ2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBzZXRUaGVtZShuYW06IHN0cmluZykge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHRoZW1lLnNldFRoZW1lKCd0aGVtZS1uYW1lJylcXGAgaXMgb25seSBhdmFpbGFibGUgaW4gYnJvd3NlciBwbGF0Zm9ybWApO1xuICAgIH1cbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQobmFtKTtcbiAgICAvLyB0aGlzLl9zdHlsZU1hcDIuZm9yRWFjaChkYXRhU3R5bGUgPT4ge1xuICAgIC8vICAgZGF0YVN0eWxlLmVsLmlubmVyVGV4dCA9IHRoaXMuX2NyZWF0ZVN0eWxlQyBvbnRlbnQyKGRhdGFTdHlsZS5zdHlsZXMsIGRhdGFTdHlsZS5pZCk7XG4gICAgLy8gfSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gU1RZTEVfTUFQXzAzKSB7XG4gICAgICBpZiAoU1RZTEVfTUFQXzAzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgeyBzdHlsZXMsIG1lZGlhIH0gPSBTVFlMRV9NQVBfMDNba2V5XTtcbiAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIGtleSwgdHJ1ZSwgbWVkaWEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zdHlsZU1hcC5mb3JFYWNoKChkYXRhU3R5bGUpID0+IHtcbiAgICAgIGRhdGFTdHlsZS5zdHlsZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5jb3JlLl9jcmVhdGVTdHlsZUNvbnRlbnQodGhpcy5jb25maWcsIGRhdGFTdHlsZS5zdHlsZSwgZGF0YVN0eWxlLmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoY3NzIGFzIGFueSwgbmV3SWQsIGZhbHNlLCBtZWRpYSk7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQW25ld0lkXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGFkZCBhIG5ldyBzdHlsZSBzaGVldFxuICAgKiBAcGFyYW0gc3R5bGVzIHN0eWxlc1xuICAgKiBAcGFyYW0gaWQgdW5pcXVlIGlkIGZvciBzdHlsZSBncm91cFxuICAgKi9cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsIGlkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3SWQgPSBpZCB8fCAnZ2xvYmFsJztcbiAgICAvLyBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgbmV3SWQpO1xuICAgIHJldHVybiBDTEFTU0VTX01BUFtuZXdJZF07XG4gIH1cblxuICBfY3JlYXRlU3R5bGVDb250ZW50MjxUPihzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsIGlkOiBzdHJpbmcsIGZvckNoYW5nZVRoZW1lPzogYm9vbGVhbiwgbWVkaWE/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZU1hcCA9IGlkIGluIFNUWUxFX01BUF8wM1xuICAgID8gU1RZTEVfTUFQXzAzW2lkXVxuICAgIDogU1RZTEVfTUFQXzAzW2lkXSA9IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIG1lZGlhLFxuICAgICAgdGhlbWVzOiB7fSBhcyBhbnlcbiAgICB9O1xuICAgIGlmICghKHN0eWxlTWFwLnRoZW1lcy5kZWZhdWx0IHx8IHRoaXMuY29uZmlnLm5hbWUgaW4gc3R5bGVNYXAudGhlbWVzKSkge1xuICAgICAgbGV0IGNzcztcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXModGhpcy5jb25maWcpLCBpZCwgbWVkaWEpO1xuICAgICAgICBzdHlsZU1hcC50aGVtZXNbdGhpcy5jb25maWcubmFtZV0gPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzLCBpZCwgbWVkaWEpO1xuICAgICAgICBzdHlsZU1hcC50aGVtZXMuZGVmYXVsdCA9IGNzcztcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIHN0eWxlRWxlbWVudCk7XG4gICAgICBpZiAoIXRoaXMuX3N0eWxlTWFwMi5oYXMoaWQpKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50LCBzdHlsZVRleHQpO1xuICAgICAgICB0aGlzLl9zdHlsZU1hcDIuc2V0KGlkLCB7XG4gICAgICAgICAgZWw6IHN0eWxlRWxlbWVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLl9zdHlsZU1hcDIuZ2V0KGlkKTtcbiAgICBpZiAoIXRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXMuaGFzKGlkKSkge1xuICAgICAgdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlcy5hZGQoaWQpO1xuICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIHN0eWxlLmVsKTtcbiAgICB9XG4gICAgaWYgKGZvckNoYW5nZVRoZW1lICYmIHN0eWxlTWFwLnRoZW1lc1t0aGlzLmNvbmZpZy5uYW1lXSkge1xuICAgICAgc3R5bGUuZWwuaW5uZXJUZXh0ID0gc3R5bGVNYXAudGhlbWVzW3RoaXMuY29uZmlnLm5hbWVdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXIgfCBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVzMiB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyO1xufVxuZXhwb3J0IHR5cGUgU3R5bGVzRm4yPFQ+ID0gKFQpID0+IFN0eWxlczI7XG5cbmZ1bmN0aW9uIGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXM6IFN0eWxlczIsIGlkOiBzdHJpbmcsIG1lZGlhPzogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIC8vIGxldCBuZXdLZXkgPSAnJztcbiAgLy8gY29uc3Qgc3RyaW5nXG4gIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IENMQVNTRVNfTUFQW2lkXSA/IENMQVNTRVNfTUFQW2lkXSA6IENMQVNTRVNfTUFQW2lkXSA9IGBlJHsobmV4dElkKyspLnRvU3RyaW5nKDM2KX1gO1xuICAgIGNvbnN0IGNzcyA9IGAuJHtjbGFzc05hbWV9eyR7c3R5bGVzfX1gO1xuICAgIHJldHVybiBtZWRpYSA/IHRvTWVkaWEoY3NzLCBtZWRpYSkgOiBjc3M7XG4gIH1cbiAgY29uc3QgY2xhc3Nlc01hcCA9IGlkIGluIENMQVNTRVNfTUFQXG4gID8gQ0xBU1NFU19NQVBbaWRdXG4gIDogQ0xBU1NFU19NQVBbaWRdID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGtleSBpbiBjbGFzc2VzTWFwXG4gICAgICAgID8gY2xhc3Nlc01hcFtrZXldXG4gICAgICAgIDogY2xhc3Nlc01hcFtrZXldID0gaXNEZXZNb2RlKCkgPyB0b0NsYXNzTmFtZVZhbGlkKGAke2lkfV9fJHtrZXl9YCkgOiBgZSR7KG5leHRJZCsrKS50b1N0cmluZygzNil9YDtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBzdHlsZVRvU3RyaW5nKHZhbHVlIGFzIFN0eWxlczIsIGAuJHtjbGFzc05hbWV9YCk7XG4gICAgICAgIGNvbnRlbnQgKz0gc3R5bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsdWUgaXMgc3RyaW5nJywgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5RnJhbWUobmFtZTogc3RyaW5nLCBvYjogT2JqZWN0KSB7XG4gIGxldCBjb250ZW50ID0gYEBrZXlmcmFtZXMgJHtuYW1lfXtgO1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jba2V5XTtcbiAgICAgIGNvbnRlbnQgKz0gYCR7a2V5fSUgJHtzdHlsZVRvU3RyaW5nKGVsZW1lbnQsICcnKX1gO1xuICAgIH1cbiAgfVxuICBjb250ZW50ICs9IGB9YDtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4vLyBjb25zb2xlLmxvZygna2V5ZnJhbWUnLCBjcmVhdGVLZXlGcmFtZSgnbXlhbmltYXRpb24nLCBrZXlGcmFtZU9iamVjdCkpO1xuXG4vKipcbiAqIHtjb2xvcjoncmVkJ30gdG8gLmNsYXNzTmFtZXtjb2xvcjogcmVkfVxuICovXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKG9iOiBPYmplY3QsIGNsYXNzTmFtZT86IHN0cmluZywgcGFyZW50Q2xhc3NOYW1lPzogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBrZXlBbmRWYWx1ZSA9ICcnO1xuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29udGVudCArPSBzdHlsZVRvU3RyaW5nKGVsZW1lbnQgYXMgU3R5bGVzMiwgc3R5bGVLZXksIGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zdCBzdHlsZUtleUh5cGhlbkNhc2UgPSB0b0h5cGhlbkNhc2VDYWNoZShzdHlsZUtleSk7XG4gICAgICAgIC8vIGNvbnN0IHN0eWxlVmFsdWUgPSBzdHlsZUtleUh5cGhlbkNhc2UgPT09ICdmb250LXNpemUnICYmIHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJ1xuICAgICAgICAvLyA/IHRoaXMuY29uZmlnLnB4VG9SZW0oZWxlbWVudClcbiAgICAgICAgLy8gOiBlbGVtZW50O1xuICAgICAgICBrZXlBbmRWYWx1ZSArPSBgJHt0b0h5cGhlbkNhc2VDYWNoZShzdHlsZUtleSl9OiR7ZWxlbWVudH07YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGxldCBuZXdDbGFzc05hbWUgPSAnJztcbiAgICBpZiAocGFyZW50Q2xhc3NOYW1lKSB7XG4gICAgICBuZXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lLmluZGV4T2YoJyYnKSA9PT0gMCA/IGAke3BhcmVudENsYXNzTmFtZX0ke2NsYXNzTmFtZS5zbGljZSgxKX1gIDogYCR7cGFyZW50Q2xhc3NOYW1lfSAuJHtjbGFzc05hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2xhc3NOYW1lICs9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgY29udGVudCArPSBgJHtuZXdDbGFzc05hbWV9YDtcbiAgfVxuICBjb250ZW50ICs9IGB7JHtrZXlBbmRWYWx1ZX19YDtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cblxuZnVuY3Rpb24gZ2V0KG9iajogT2JqZWN0LCBwYXRoOiBhbnkpOiBzdHJpbmcge1xuICBjb25zdCBfcGF0aDogc3RyaW5nW10gPSBwYXRoIGluc3RhbmNlb2YgQXJyYXkgPyBwYXRoIDogcGF0aC5zcGxpdCgnOicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgb2JqID0gb2JqW19wYXRoW2ldXSB8fCBwYXRoO1xuICB9XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyA/IG9iaiBhcyBzdHJpbmcgOiBvYmpbJ2RlZmF1bHQnXSBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0h5cGhlbkNhc2Uoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChnKSA9PiBgLSR7Z1swXS50b0xvd2VyQ2FzZSgpfWApO1xufVxuXG5mdW5jdGlvbiB0b0NsYXNzTmFtZVZhbGlkKHN0cjogc3RyaW5nKSB7XG4gIGNvbnN0IHMgPSBzdHIucmVwbGFjZSgvW1xcV10vZywgJycpO1xuICByZXR1cm4gdG9IeXBoZW5DYXNlKHNbMF0udG9Mb3dlckNhc2UoKSArIHMuc2xpY2UoMSkpO1xufVxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2VDYWNoZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyIGluIFNUWUxFX0tFWVNfTUFQXG4gID8gU1RZTEVfS0VZU19NQVBbc3RyXVxuICA6IFNUWUxFX0tFWVNfTUFQW3N0cl0gPSB0b0h5cGhlbkNhc2Uoc3RyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHRvTWVkaWEoY3NzOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHtjc3N9fWA7XG59XG5cbiJdfQ==