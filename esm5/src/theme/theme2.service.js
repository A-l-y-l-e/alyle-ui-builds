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
var TypeStyle = {
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
var /** @type {?} */ STYLE_MAP_03 = /** @type {?} */ ({});
var /** @type {?} */ STYLE_MAP = {};
var /** @type {?} */ CLASSES_MAP = {};
var /** @type {?} */ STYLE_KEYS_MAP = {};
var /** @type {?} */ nextId = 0;
/**
 * @return {?}
 */
function fn() {
    return CLASSES_MAP;
}
console.log({ fn: fn });
/**
 * @return {?}
 */
function fn2() {
    return STYLE_MAP_03;
}
console.log({ fn2: fn2 });
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
            console.log(themeName, this.config);
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
                var _a = STYLE_MAP_03[key], styles = _a.styles, typeStyle = _a.typeStyle, media = _a.media;
                this._createStyleContent2(styles, key, typeStyle, true, media);
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
        this._createStyleContent2(/** @type {?} */ (css), newId, TypeStyle.OnlyOne, false, media);
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
        this._createStyleContent2(styles, newId, TypeStyle.Multiple);
        return CLASSES_MAP[newId];
    };
    /**
     * @template T
     * @param {?} styles
     * @param {?} id
     * @param {?} typeStyle
     * @param {?=} forChangeTheme
     * @param {?=} media
     * @return {?}
     */
    LyTheme2.prototype._createStyleContent2 = /**
     * @template T
     * @param {?} styles
     * @param {?} id
     * @param {?} typeStyle
     * @param {?=} forChangeTheme
     * @param {?=} media
     * @return {?}
     */
    function (styles, id, typeStyle, forChangeTheme, media) {
        var /** @type {?} */ styleMap = id in STYLE_MAP_03
            ? STYLE_MAP_03[id]
            : STYLE_MAP_03[id] = {
                styles: styles,
                media: media,
                typeStyle: typeStyle,
                themes: /** @type {?} */ ({})
            };
        if (!(styleMap.themes.default || this.config.name in styleMap.themes)) {
            var /** @type {?} */ css = void 0;
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
        var /** @type {?} */ className = CLASSES_MAP[id] ? CLASSES_MAP[id] : CLASSES_MAP[id] = "e" + (nextId++).toString(36);
        if (typeof styles === 'string') {
            var /** @type {?} */ css = "." + className + "{" + styles + "}";
            return media ? toMedia(css, media) : css;
        }
        else {
            return styleToString(styles, "." + className);
        }
    }
    var /** @type {?} */ content = '';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFZLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCdkMscUJBQU0sWUFBWSxxQkFBZSxFQUFTLENBQUEsQ0FBQztBQUUzQyxxQkFBTSxTQUFTLEdBRVgsRUFBRSxDQUFDO0FBQ1AscUJBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN2QixxQkFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzFCLHFCQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7Ozs7QUFDZjtJQUNFLE9BQU8sV0FBVyxDQUFDO0NBQ3BCO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsSUFBQSxFQUFDLENBQUMsQ0FBQzs7OztBQUNsQjtJQUNFLE9BQU8sWUFBWSxDQUFDO0NBQ3JCO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEdBQUcsS0FBQSxFQUFDLENBQUMsQ0FBQzs7O3NCQU1SLElBQUksR0FBRyxFQUFVOzs7Z0JBSjNCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzsyQkFoREQ7O1NBaURhLGdCQUFnQjs7Ozs7Ozs7Ozs7OztJQWUzQixrQkFDVSxrQkFDRCxNQUNnQixTQUFTO1FBRnhCLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDakIsU0FBSSxHQUFKLElBQUk7c0JBVEosR0FBRztR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QUFnQyxHQUFXO0lBQy9DLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDNUM7Ozs7OztBQUVELGlCQUFpQixHQUFXLEVBQUUsS0FBYTtJQUN6QyxPQUFPLFlBQVUsS0FBSyxTQUFJLEdBQUcsTUFBRyxDQUFDO0NBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIE9wdGlvbmFsLCBpc0Rldk1vZGUsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSwgU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IEludmVydE1lZGlhUXVlcnkgfSBmcm9tICcuLi9tZWRpYS9pbnZlcnQtbWVkaWEtcXVlcnknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVzRWxlbWVudE1hcCB7XG4gIGVsOiBhbnk7XG59XG5cbmV4cG9ydCBlbnVtIFR5cGVTdHlsZSB7XG4gIE11bHRpcGxlLFxuICBPbmx5T25lXG59XG5cbmludGVyZmFjZSBTdHlsZU1hcDAzIHtcbiAgW2lkOiBzdHJpbmddOiB7IC8vIGV4YW1wbGU6IGx5VGFic1xuICAgIHN0eWxlczogU3R5bGVzRm4yPGFueT4gfCBTdHlsZXMyLFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIHR5cGVTdHlsZT86IFR5cGVTdHlsZSxcbiAgICB0aGVtZXM6IHsgLy8gZXhhbXBsZTogbWluaW1hLWRhcmtcbiAgICAgIC8qKiBDc3MgKi9cbiAgICAgIGRlZmF1bHQ/OiBzdHJpbmcsXG4gICAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiBzdHJpbmdcbiAgICB9XG4gIH07XG59XG5cbmNvbnN0IFNUWUxFX01BUF8wMzogU3R5bGVNYXAwMyA9IHt9IGFzIGFueTtcblxuY29uc3QgU1RZTEVfTUFQOiB7XG4gIFtrZXk6IHN0cmluZ106IE1hcDxzdHJpbmcsIFN0eWxlc0VsZW1lbnRNYXA+XG59ID0ge307XG5jb25zdCBDTEFTU0VTX01BUCA9IHt9O1xuY29uc3QgU1RZTEVfS0VZU19NQVAgPSB7fTtcbmxldCBuZXh0SWQgPSAwO1xuZnVuY3Rpb24gZm4oKSB7XG4gIHJldHVybiBDTEFTU0VTX01BUDtcbn1cbmNvbnNvbGUubG9nKHtmbn0pO1xuZnVuY3Rpb24gZm4yKCkge1xuICByZXR1cm4gU1RZTEVfTUFQXzAzO1xufVxuY29uc29sZS5sb2coe2ZuMn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNJbkRvY3VtZW50IHtcbiAgc3R5bGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lMiB7XG4gIGNvbmZpZzogVGhlbWVDb25maWc7XG4gIF9zdHlsZU1hcDogTWFwPHN0cmluZywgRGF0YVN0eWxlPjtcbiAgcHJlZml4ID0gJ2snO1xuICBwcml2YXRlIF9zdHlsZU1hcDI6IE1hcDxzdHJpbmcsIFN0eWxlc0VsZW1lbnRNYXA+O1xuXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBDTEFTU0VTX01BUDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3R5bGVzSW5Eb2N1bWVudDogU3R5bGVzSW5Eb2N1bWVudCxcbiAgICBwdWJsaWMgY29yZTogQ29yZVRoZW1lLFxuICAgIEBJbmplY3QoTFlfVEhFTUVfTkFNRSkgdGhlbWVOYW1lXG4gICkge1xuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5fc3R5bGVNYXAyID0gdGhlbWVOYW1lIGluIFNUWUxFX01BUFxuICAgICAgPyBTVFlMRV9NQVBbdGhlbWVOYW1lXVxuICAgICAgOiBTVFlMRV9NQVBbdGhlbWVOYW1lXSA9IG5ldyBNYXAoKTtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgICAgY29uc29sZS5sb2codGhlbWVOYW1lLCB0aGlzLmNvbmZpZyk7XG4gICAgfVxuICB9XG4gIHNldFVwU3R5bGU8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/EuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnk8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/EuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIGFkZFN0eWxlPFQ+KGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZTxUPiwgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmFkZENzcyhpZCwgc3R5bGUgYXMgYW55KTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgY29sb3JPZih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMuY29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgdGhlbWUuc2V0VGhlbWUoJ3RoZW1lLW5hbWUnKVxcYCBpcyBvbmx5IGF2YWlsYWJsZSBpbiBicm93c2VyIHBsYXRmb3JtYCk7XG4gICAgfVxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldChuYW0pO1xuICAgIC8vIHRoaXMuX3N0eWxlTWFwMi5mb3JFYWNoKGRhdGFTdHlsZSA9PiB7XG4gICAgLy8gICBkYXRhU3R5bGUuZWwuaW5uZXJUZXh0ID0gdGhpcy5fY3JlYXRlU3R5bGVDIG9udGVudDIoZGF0YVN0eWxlLnN0eWxlcywgZGF0YVN0eWxlLmlkKTtcbiAgICAvLyB9KTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBTVFlMRV9NQVBfMDMpIHtcbiAgICAgIGlmIChTVFlMRV9NQVBfMDMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCB7IHN0eWxlcywgdHlwZVN0eWxlLCBtZWRpYSB9ID0gU1RZTEVfTUFQXzAzW2tleV07XG4gICAgICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBrZXksIHR5cGVTdHlsZSwgdHJ1ZSwgbWVkaWEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zdHlsZU1hcC5mb3JFYWNoKChkYXRhU3R5bGUpID0+IHtcbiAgICAgIGRhdGFTdHlsZS5zdHlsZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5jb3JlLl9jcmVhdGVTdHlsZUNvbnRlbnQodGhpcy5jb25maWcsIGRhdGFTdHlsZS5zdHlsZSwgZGF0YVN0eWxlLmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoY3NzIGFzIGFueSwgbmV3SWQsIFR5cGVTdHlsZS5Pbmx5T25lLCBmYWxzZSwgbWVkaWEpO1xuICAgIHJldHVybiBDTEFTU0VTX01BUFtuZXdJZF07XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5ldyBhZGQgYSBuZXcgc3R5bGUgc2hlZXRcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZXNcbiAgICogQHBhcmFtIGlkIHVuaXF1ZSBpZCBmb3Igc3R5bGUgZ3JvdXBcbiAgICovXG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBTdHlsZXNGbjI8VD4gfCBTdHlsZXMyLCBpZD86IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgfHwgJ2dsb2JhbCc7XG4gICAgLy8gY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIG5ld0lkLCBUeXBlU3R5bGUuTXVsdGlwbGUpO1xuICAgIHJldHVybiBDTEFTU0VTX01BUFtuZXdJZF07XG4gIH1cblxuICBfY3JlYXRlU3R5bGVDb250ZW50MjxUPihcbiAgICBzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsXG4gICAgaWQ6IHN0cmluZyxcbiAgICB0eXBlU3R5bGU6IFR5cGVTdHlsZSxcbiAgICBmb3JDaGFuZ2VUaGVtZT86IGJvb2xlYW4sXG4gICAgbWVkaWE/OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3Qgc3R5bGVNYXAgPSBpZCBpbiBTVFlMRV9NQVBfMDNcbiAgICA/IFNUWUxFX01BUF8wM1tpZF1cbiAgICA6IFNUWUxFX01BUF8wM1tpZF0gPSB7XG4gICAgICBzdHlsZXMsXG4gICAgICBtZWRpYSxcbiAgICAgIHR5cGVTdHlsZSxcbiAgICAgIHRoZW1lczoge30gYXMgYW55XG4gICAgfTtcbiAgICBpZiAoIShzdHlsZU1hcC50aGVtZXMuZGVmYXVsdCB8fCB0aGlzLmNvbmZpZy5uYW1lIGluIHN0eWxlTWFwLnRoZW1lcykpIHtcbiAgICAgIGxldCBjc3M7XG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzKHRoaXMuY29uZmlnKSwgdGhpcy5jb25maWcubmFtZSwgaWQsIHR5cGVTdHlsZSwgbWVkaWEpO1xuICAgICAgICBzdHlsZU1hcC50aGVtZXNbdGhpcy5jb25maWcubmFtZV0gPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzLCB0aGlzLmNvbmZpZy5uYW1lLCBpZCwgdHlwZVN0eWxlLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLnRoZW1lcy5kZWZhdWx0ID0gY3NzO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgc3R5bGVFbGVtZW50KTtcbiAgICAgIGlmICghdGhpcy5fc3R5bGVNYXAyLmhhcyhpZCkpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIGNvbnN0IHN0eWxlVGV4dCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVUZXh0KGNzcyk7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgICAgIHRoaXMuX3N0eWxlTWFwMi5zZXQoaWQsIHtcbiAgICAgICAgICBlbDogc3R5bGVFbGVtZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuX3N0eWxlTWFwMi5nZXQoaWQpO1xuICAgIGlmICghdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlcy5oYXMoaWQpKSB7XG4gICAgICB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzLmFkZChpZCk7XG4gICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgc3R5bGUuZWwpO1xuICAgIH1cbiAgICBpZiAoZm9yQ2hhbmdlVGhlbWUgJiYgc3R5bGVNYXAudGhlbWVzW3RoaXMuY29uZmlnLm5hbWVdKSB7XG4gICAgICBzdHlsZS5lbC5pbm5lclRleHQgPSBzdHlsZU1hcC50aGVtZXNbdGhpcy5jb25maWcubmFtZV07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVDb250YWluZXIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXI7XG59XG5leHBvcnQgdHlwZSBTdHlsZXNGbjI8VD4gPSAoVCkgPT4gU3R5bGVzMjtcblxuZnVuY3Rpb24gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlczogU3R5bGVzMiwgdGhlbWVOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIHR5cGVTdHlsZTogVHlwZVN0eWxlLCBtZWRpYT86IHN0cmluZykge1xuICAvLyBsZXQgbmV3S2V5ID0gJyc7XG4gIC8vIGNvbnN0IHN0cmluZ1xuICBpZiAodHlwZVN0eWxlID09PSBUeXBlU3R5bGUuT25seU9uZSkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IENMQVNTRVNfTUFQW2lkXSA/IENMQVNTRVNfTUFQW2lkXSA6IENMQVNTRVNfTUFQW2lkXSA9IGBlJHsobmV4dElkKyspLnRvU3RyaW5nKDM2KX1gO1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgY3NzID0gYC4ke2NsYXNzTmFtZX17JHtzdHlsZXN9fWA7XG4gICAgICByZXR1cm4gbWVkaWEgPyB0b01lZGlhKGNzcywgbWVkaWEpIDogY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3R5bGVUb1N0cmluZyhzdHlsZXMsIGAuJHtjbGFzc05hbWV9YCk7XG4gICAgfVxuICB9XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGNvbnN0IGNsYXNzZXNNYXAgPSBpZCBpbiBDTEFTU0VTX01BUFxuICA/IENMQVNTRVNfTUFQW2lkXVxuICA6IENMQVNTRVNfTUFQW2lkXSA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBrZXkgaW4gY2xhc3Nlc01hcFxuICAgICAgICA/IGNsYXNzZXNNYXBba2V5XVxuICAgICAgICA6IGNsYXNzZXNNYXBba2V5XSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgJHtpZH1fXyR7a2V5fWApIDogYGUkeyhuZXh0SWQrKykudG9TdHJpbmcoMzYpfWA7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyh2YWx1ZSBhcyBTdHlsZXMyLCBgLiR7Y2xhc3NOYW1lfWApO1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGlzIHN0cmluZycsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleUZyYW1lKG5hbWU6IHN0cmluZywgb2I6IE9iamVjdCkge1xuICBsZXQgY29udGVudCA9IGBAa2V5ZnJhbWVzICR7bmFtZX17YDtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW2tleV07XG4gICAgICBjb250ZW50ICs9IGAke2tleX0lICR7c3R5bGVUb1N0cmluZyhlbGVtZW50LCAnJyl9YDtcbiAgICB9XG4gIH1cbiAgY29udGVudCArPSBgfWA7XG4gIHJldHVybiBjb250ZW50O1xufVxuLy8gY29uc29sZS5sb2coJ2tleWZyYW1lJywgY3JlYXRlS2V5RnJhbWUoJ215YW5pbWF0aW9uJywga2V5RnJhbWVPYmplY3QpKTtcblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhvYjogT2JqZWN0LCBjbGFzc05hbWU/OiBzdHJpbmcsIHBhcmVudENsYXNzTmFtZT86IHN0cmluZykge1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQga2V5QW5kVmFsdWUgPSAnJztcbiAgZm9yIChjb25zdCBzdHlsZUtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBvYltzdHlsZUtleV07XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gc3R5bGVUb1N0cmluZyhlbGVtZW50IGFzIFN0eWxlczIsIHN0eWxlS2V5LCBjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc3Qgc3R5bGVLZXlIeXBoZW5DYXNlID0gdG9IeXBoZW5DYXNlQ2FjaGUoc3R5bGVLZXkpO1xuICAgICAgICAvLyBjb25zdCBzdHlsZVZhbHVlID0gc3R5bGVLZXlIeXBoZW5DYXNlID09PSAnZm9udC1zaXplJyAmJiB0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcidcbiAgICAgICAgLy8gPyB0aGlzLmNvbmZpZy5weFRvUmVtKGVsZW1lbnQpXG4gICAgICAgIC8vIDogZWxlbWVudDtcbiAgICAgICAga2V5QW5kVmFsdWUgKz0gYCR7dG9IeXBoZW5DYXNlQ2FjaGUoc3R5bGVLZXkpfToke2VsZW1lbnR9O2A7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBsZXQgbmV3Q2xhc3NOYW1lID0gJyc7XG4gICAgaWYgKHBhcmVudENsYXNzTmFtZSkge1xuICAgICAgbmV3Q2xhc3NOYW1lICs9IGNsYXNzTmFtZS5pbmRleE9mKCcmJykgPT09IDAgPyBgJHtwYXJlbnRDbGFzc05hbWV9JHtjbGFzc05hbWUuc2xpY2UoMSl9YCA6IGAke3BhcmVudENsYXNzTmFtZX0gLiR7Y2xhc3NOYW1lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NsYXNzTmFtZSArPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGNvbnRlbnQgKz0gYCR7bmV3Q2xhc3NOYW1lfWA7XG4gIH1cbiAgY29udGVudCArPSBgeyR7a2V5QW5kVmFsdWV9fWA7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG9ialtfcGF0aFtpXV0gfHwgcGF0aDtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuZnVuY3Rpb24gdG9DbGFzc05hbWVWYWxpZChzdHI6IHN0cmluZykge1xuICBjb25zdCBzID0gc3RyLnJlcGxhY2UoL1tcXFddL2csICcnKTtcbiAgcmV0dXJuIHRvSHlwaGVuQ2FzZShzWzBdLnRvTG93ZXJDYXNlKCkgKyBzLnNsaWNlKDEpKTtcbn1cblxuZnVuY3Rpb24gdG9IeXBoZW5DYXNlQ2FjaGUoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ciBpbiBTVFlMRV9LRVlTX01BUFxuICA/IFNUWUxFX0tFWVNfTUFQW3N0cl1cbiAgOiBTVFlMRV9LRVlTX01BUFtzdHJdID0gdG9IeXBoZW5DYXNlKHN0cik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiB0b01lZGlhKGNzczogc3RyaW5nLCBtZWRpYTogc3RyaW5nKSB7XG4gIHJldHVybiBgQG1lZGlhICR7bWVkaWF9eyR7Y3NzfX1gO1xufVxuXG4iXX0=