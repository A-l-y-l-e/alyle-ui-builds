/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Inject, isDevMode } from '@angular/core';
import { LY_THEME_NAME } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { Platform } from '../platform';
import { DOCUMENT } from '@angular/common';
import { DirAlias } from '../style-utils';
import * as i0 from "@angular/core";
/** @type {?} */
var defaultStyles = {
    '@global': {
        '*, *:after, *:before': {
            '-webkit-box-sizing': 'border-box',
            '-moz-box-sizing': 'border-box',
            'box-sizing': 'border-box'
        }
    }
};
/** @type {?} */
var REF_REG_EXP = /\{([\w-]+)\}/g;
/** @enum {number} */
var TypeStyle = {
    Multiple: 0,
    OnlyOne: 1,
};
TypeStyle[TypeStyle.Multiple] = 'Multiple';
TypeStyle[TypeStyle.OnlyOne] = 'OnlyOne';
/** @type {?} */
var STYLE_MAP5 = new Map();
/**
 * @record
 */
export function StyleMap5() { }
if (false) {
    /** @type {?} */
    StyleMap5.prototype.styles;
    /** @type {?} */
    StyleMap5.prototype.type;
    /** @type {?} */
    StyleMap5.prototype.priority;
    /** @type {?} */
    StyleMap5.prototype.css;
    /**
     * global theme
     * @type {?|undefined}
     */
    StyleMap5.prototype.classes;
    /**
     * requireUpdate
     * @type {?|undefined}
     */
    StyleMap5.prototype.classesWithTheme;
    /** @type {?|undefined} */
    StyleMap5.prototype.requireUpdate;
}
/** @type {?} */
var CLASSES_MAP = {};
/** @type {?} */
var STYLE_KEYS_MAP = {};
/** @type {?} */
var nextClassId = 0;
var StylesInDocument = /** @class */ (function () {
    function StylesInDocument() {
        this.styles = {};
        this.styleContainers = new Map();
    }
    StylesInDocument.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ StylesInDocument.ngInjectableDef = i0.defineInjectable({ factory: function StylesInDocument_Factory() { return new StylesInDocument(); }, token: StylesInDocument, providedIn: "root" });
    return StylesInDocument;
}());
export { StylesInDocument };
if (false) {
    /** @type {?} */
    StylesInDocument.prototype.styles;
    /** @type {?} */
    StylesInDocument.prototype.styleContainers;
}
var LyTheme2 = /** @class */ (function () {
    function LyTheme2(stylesInDocument, core, themeName, _document) {
        this.stylesInDocument = stylesInDocument;
        this.core = core;
        this._document = _document;
        this._elementsMap = new Map();
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
            this.config = this.core.get(themeName);
            this._styleMap = new Map();
            this.elements = themeName in this.stylesInDocument.styles
                ? this.stylesInDocument.styles[themeName]
                : this.stylesInDocument.styles[themeName] = new Map();
            this._createInstanceForTheme(themeName);
            if (!this.initialTheme) {
                this.initialTheme = this.config.name;
            }
            this._addDefaultStyles();
        }
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
     * @param {?} id Unique id
     * @param {?} style Styles
     * @param {?=} el Element
     * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
     * @param {?=} priority
     * @return {?}
     */
    LyTheme2.prototype.addStyle = /**
     * Add a new dynamic style, use only within \@Input()
     * @param {?} id Unique id
     * @param {?} style Styles
     * @param {?=} el Element
     * @param {?=} instance The instance of this, this replaces the existing style with a new one when it changes
     * @param {?=} priority
     * @return {?}
     */
    function (id, style, el, instance, priority) {
        /** @type {?} */
        var newClass = this.addCss(id, (/** @type {?} */ (style)), priority);
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
        if (newClass === oldClass) {
            return newClass;
        }
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
        if (nam !== this.config.name) {
            this.config = this.core.get(nam);
            this.elements.forEach(function (_, key) {
                /** @type {?} */
                var styleData = STYLE_MAP5.get(key);
                if (styleData.requireUpdate) {
                    _this._createStyleContent2(styleData.styles, key, styleData.priority, styleData.type, true);
                }
            });
        }
    };
    /**
     * add style, similar to setUpStyle but this only accept string
     * @param id id of style
     * @param css style in string
     */
    /**
     * add style, similar to setUpStyle but this only accept string
     * @param {?} id id of style
     * @param {?} css style in string
     * @param {?} priority
     * @param {?=} media
     * @return {?}
     */
    LyTheme2.prototype.addCss = /**
     * add style, similar to setUpStyle but this only accept string
     * @param {?} id id of style
     * @param {?} css style in string
     * @param {?} priority
     * @param {?=} media
     * @return {?}
     */
    function (id, css, priority, media) {
        /** @type {?} */
        var newId = "~>" + id;
        return (/** @type {?} */ (this._createStyleContent2((/** @type {?} */ (css)), newId, priority, TypeStyle.OnlyOne, false, media)));
    };
    /**
     * @return {?}
     */
    LyTheme2.prototype._addDefaultStyles = /**
     * @return {?}
     */
    function () {
        this.addStyleSheet(defaultStyles);
    };
    /**
     * Add new add a new style sheet
     * @param styles styles
     * @param id deprecated, unique id for style group
     * @param priority priority for style
     */
    /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id deprecated, unique id for style group
     * @param {?=} priority priority for style
     * @return {?}
     */
    LyTheme2.prototype.addStyleSheet = /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id deprecated, unique id for style group
     * @param {?=} priority priority for style
     * @return {?}
     */
    function (styles, id, priority) {
        if (isDevMode()) {
            if ((void 0 === priority && typeof id === 'string') || (void 0 !== priority && typeof id === 'string')) {
                console.warn("the value `" + id + "` is no longer necessary for addStyleSheet, this will be an error in the next release.");
            }
        }
        return this._createStyleContent2(styles, (/** @type {?} */ (id)), priority, TypeStyle.Multiple);
    };
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
    LyTheme2.prototype._createStyleContent2 = /**
     * @template T
     * @param {?} styles
     * @param {?} id
     * @param {?} priority
     * @param {?} type
     * @param {?=} forChangeTheme
     * @param {?=} media
     * @return {?}
     */
    function (styles, id, priority, type, forChangeTheme, media) {
        /** @type {?} */
        var newId = type === TypeStyle.OnlyOne ? (/** @type {?} */ (id)) : styles;
        /** @type {?} */
        var isNewStyle;
        if (!STYLE_MAP5.has(newId)) {
            isNewStyle = true;
            STYLE_MAP5.set(newId, {
                priority: type === TypeStyle.OnlyOne ? priority : priority === void 0 && typeof id === 'number' ? (/** @type {?} */ (id)) : priority,
                styles: styles,
                type: type,
                css: {}
            });
        }
        /** @type {?} */
        var styleMap = STYLE_MAP5.get(newId);
        /** @type {?} */
        var themeName = this.initialTheme;
        /** @type {?} */
        var isCreated = isNewStyle || !(styleMap.classes || styleMap[themeName]);
        if (isCreated || forChangeTheme) {
            /**
             * create new style for new theme
             * @type {?}
             */
            var css = void 0;
            if (typeof styles === 'function') {
                styleMap.requireUpdate = true;
                css = groupStyleToString(styleMap, styles(this.config), themeName, null, type, this.config, media);
                if (!forChangeTheme) {
                    styleMap.css[themeName] = css;
                }
            }
            else {
                /** create a new id for style that does not <-<require>-> changes */
                css = groupStyleToString(styleMap, styles, themeName, (/** @type {?} */ (newId)), type, this.config, media);
                styleMap.css = css;
            }
            if (!this.elements.has(newId)) {
                this.elements.set(newId, this._createElementStyle(css));
            }
            /** @type {?} */
            var el = this.elements.get(newId);
            if (forChangeTheme) {
                el.innerText = css;
            }
            else {
                this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), el);
            }
        }
        else {
            /**
             * append child style if not exist in dom
             * for ssr & hmr
             */
            if (!this.elements.has(newId)) {
                /** @type {?} */
                var _css = styleMap.css[themeName] || styleMap.css;
                this.elements.set(newId, this._createElementStyle(_css));
                this.core.renderer.appendChild(this._createStyleContainer(styleMap.priority), this.elements.get(newId));
            }
        }
        return styleMap.classes || styleMap[themeName];
    };
    /**
     * @param {?=} priority
     * @return {?}
     */
    LyTheme2.prototype._createStyleContainer = /**
     * @param {?=} priority
     * @return {?}
     */
    function (priority) {
        if (priority === void 0) { priority = 0; }
        var styleContainers = this.stylesInDocument.styleContainers;
        if (!styleContainers.has(priority)) {
            /** @type {?} */
            var el = this.core.renderer.createElement("ly-s-c");
            if (isDevMode()) {
                this.core.renderer.setAttribute(el, 'priority', "" + priority);
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
        var refChild = this.findNode(priority);
        this.core.renderer.insertBefore(this._document.body, styleContainers.get(priority), refChild);
        return styleContainers.get(priority);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    LyTheme2.prototype.findNode = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var styleContainers = this.stylesInDocument.styleContainers;
        /** @type {?} */
        var keys = (Array.from(styleContainers.keys())).sort();
        /** @type {?} */
        var key = keys.find(function (_) { return index < _; });
        return (key !== undefined && styleContainers.get(key)) || this.core.firstElement;
    };
    /**
     * @param {?} css
     * @return {?}
     */
    LyTheme2.prototype._createElementStyle = /**
     * @param {?} css
     * @return {?}
     */
    function (css) {
        /** @type {?} */
        var styleElement = this.core.renderer.createElement('style');
        /** @type {?} */
        var styleText = this.core.renderer.createText(css);
        this.core.renderer.appendChild(styleElement, styleText);
        return styleElement;
    };
    /**
     * @param {?} themeName
     * @return {?}
     */
    LyTheme2.prototype._createInstanceForTheme = /**
     * @param {?} themeName
     * @return {?}
     */
    function (themeName) {
        if (!(themeName in CLASSES_MAP)) {
            CLASSES_MAP[themeName] = {};
        }
    };
    LyTheme2.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LyTheme2.ctorParameters = function () { return [
        { type: StylesInDocument },
        { type: CoreTheme },
        { type: undefined, decorators: [{ type: Inject, args: [LY_THEME_NAME,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return LyTheme2;
}());
export { LyTheme2 };
if (false) {
    /** @type {?} */
    LyTheme2.prototype.config;
    /** @type {?} */
    LyTheme2.prototype._styleMap;
    /** @type {?} */
    LyTheme2.prototype.initialTheme;
    /** @type {?} */
    LyTheme2.prototype.elements;
    /** @type {?} */
    LyTheme2.prototype._elementsMap;
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
/**
 * @param {?} styleMap
 * @param {?} styles
 * @param {?} themeName
 * @param {?} id
 * @param {?} typeStyle
 * @param {?} themeVariables
 * @param {?=} media
 * @return {?}
 */
function groupStyleToString(styleMap, styles, themeName, id, typeStyle, themeVariables, media) {
    if (typeStyle === TypeStyle.OnlyOne) {
        // use current class or set new
        /** @type {?} */
        var className = styleMap.requireUpdate
            ? styleMap[themeName] || (styleMap[themeName] = createNextClassId())
            : styleMap.classes
                ? styleMap.classes
                : styleMap.classes = createNextClassId();
        if (typeof styles === 'string') {
            /** @type {?} */
            var css = "." + className + "{" + styles + "}";
            return media ? toMedia(css, media) : css;
        }
        else {
            /** @type {?} */
            var rules = styleToString(id, styles, themeVariables, (/** @type {?} */ (className)));
            return rules;
        }
    }
    // for multiples styles
    /** @type {?} */
    var classesMap = styleMap[themeName] || (styleMap[themeName] = {});
    /** @type {?} */
    var content = '';
    for (var key in styles) {
        if (styles.hasOwnProperty(key)) {
            // set new id if not exist
            /** @type {?} */
            var currentClassName = key in classesMap
                ? classesMap[key]
                : classesMap[key] = isDevMode() ? toClassNameValid("i---" + key + "-" + createNextClassId()) : createNextClassId();
            /** @type {?} */
            var value = styles[key];
            if (typeof value === 'object') {
                /** @type {?} */
                var style = styleToString(key, (/** @type {?} */ (value)), themeVariables, currentClassName);
                content += style;
            }
            else {
                console.log('value is string', value);
            }
        }
    }
    return replaceRefs(content, classesMap);
}
/**
 * @param {?} str
 * @param {?} data
 * @return {?}
 */
function replaceRefs(str, data) {
    return str.replace(REF_REG_EXP, function (match, token) {
        return "." + data[token];
    });
}
/**
 * {color:'red'} to .className{color: red}
 * @param {?} key
 * @param {?} ob
 * @param {?} themeVariables
 * @param {?} currentKey
 * @param {?=} parentKey
 * @return {?}
 */
function styleToString(key, ob, themeVariables, currentKey, parentKey) {
    /** @type {?} */
    var content = '';
    /** @type {?} */
    var subContent = '';
    /** @type {?} */
    var keyAndValue = '';
    /** @type {?} */
    var newKey;
    if (parentKey) {
        if (currentKey.indexOf('&') !== -1) {
            newKey = currentKey.replace(/&/g, parentKey);
        }
        else if (currentKey.indexOf('@media') === 0) {
            newKey = "" + currentKey;
        }
        else {
            newKey = parentKey + " " + currentKey;
        }
    }
    else if (key === '@global') {
        newKey = key;
    }
    else {
        newKey = "." + currentKey;
    }
    for (var styleKey in ob) {
        if (ob.hasOwnProperty(styleKey)) {
            /** @type {?} */
            var element = ob[styleKey];
            if (typeof element === 'object') {
                subContent += styleToString(key, (/** @type {?} */ (element)), themeVariables, styleKey, newKey);
            }
            else {
                /** @type {?} */
                var newStyleKey = toHyphenCaseCache(styleKey);
                if (newStyleKey.indexOf(DirAlias.start) !== -1) {
                    newStyleKey = dirCache(newStyleKey, themeVariables, DirAlias.start);
                }
                else if (newStyleKey.indexOf(DirAlias.end) !== -1) {
                    newStyleKey = dirCache(newStyleKey, themeVariables, DirAlias.end);
                }
                keyAndValue += newStyleKey + ":" + element + ";";
            }
        }
    }
    if (keyAndValue) {
        if (newKey.indexOf('@media') === 0) {
            content += "" + newKey;
            keyAndValue = parentKey + "{" + keyAndValue + "}";
        }
        else if (parentKey && parentKey === '@global') {
            content += "" + currentKey;
        }
        else {
            content += "" + newKey;
        }
        content += "{" + keyAndValue + "}";
    }
    return content + subContent;
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
    /** @type {?} */
    var s = str.replace(/^[0-9]|[^\w\-]/g, function (_) {
        return "_" + _.charCodeAt(0);
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
/** @type {?} */
var STYLE_KEYS_DIRECTIONS_MAP = {};
/**
 * @param {?} val
 * @param {?} themeVariables
 * @param {?} dirAlias
 * @return {?}
 */
function dirCache(val, themeVariables, dirAlias) {
    /** @type {?} */
    var newKey = themeVariables.direction + val;
    return newKey in STYLE_KEYS_DIRECTIONS_MAP
        ? STYLE_KEYS_DIRECTIONS_MAP[newKey]
        : STYLE_KEYS_DIRECTIONS_MAP[newKey] = val.replace(dirAlias, themeVariables.getDirection(dirAlias));
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
/**
 * @return {?}
 */
function createNextClassId() {
    return "i" + (nextClassId++).toString(36);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFrQixNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQUVwQyxhQUFhLEdBQUc7SUFDcEIsU0FBUyxFQUFFO1FBQ1Qsc0JBQXNCLEVBQUU7WUFDdEIsb0JBQW9CLEVBQUUsWUFBWTtZQUNsQyxpQkFBaUIsRUFBRSxZQUFZO1lBQy9CLFlBQVksRUFBRSxZQUFZO1NBQzNCO0tBQ0Y7Q0FDRjs7SUFHSyxXQUFXLEdBQUcsZUFBZTs7O0lBR2pDLFdBQVE7SUFDUixVQUFPOzs7OztJQUdILFVBQVUsR0FBd0IsSUFBSSxHQUFHLEVBQUU7Ozs7QUFFakQsK0JBa0JDOzs7SUFqQkMsMkJBQWlDOztJQUNqQyx5QkFBZ0I7O0lBQ2hCLDZCQUFpQjs7SUFDakIsd0JBRVc7Ozs7O0lBRVgsNEJBRVc7Ozs7O0lBRVgscUNBSUU7O0lBQ0Ysa0NBQXdCOzs7SUFFcEIsV0FBVyxHQUliLEVBQUU7O0lBQ0EsY0FBYyxHQUFHLEVBQUU7O0lBQ3JCLFdBQVcsR0FBRyxDQUFDO0FBRW5CO0lBQUE7UUFJRSxXQUFNLEdBRUYsRUFBRSxDQUFDO1FBQ1Asb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztLQUNsRDs7Z0JBUkEsVUFBVSxT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LEdBQVcsRUFBRSxjQUE4QixFQUFFLFFBQWtCOztRQUN6RSxNQUFNLEdBQUcsY0FBYyxDQUFDLFNBQVMsR0FBRyxHQUFHO0lBQzdDLE9BQU8sTUFBTSxJQUFJLHlCQUF5QjtRQUMxQyxDQUFDLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDO1FBQ25DLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDckcsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsR0FBVztJQUMvQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLENBQUM7Ozs7OztBQUVELFNBQVMsT0FBTyxDQUFDLEdBQVcsRUFBRSxLQUFhO0lBQ3pDLE9BQU8sWUFBVSxLQUFLLFNBQUksR0FBRyxNQUFHLENBQUM7QUFDbkMsQ0FBQzs7OztBQUVELFNBQVMsaUJBQWlCO0lBQ3hCLE9BQU8sTUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBRyxDQUFDO0FBQzVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaXJBbGlhcyB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgJ0BnbG9iYWwnOiB7XG4gICAgJyosICo6YWZ0ZXIsICo6YmVmb3JlJzoge1xuICAgICAgJy13ZWJraXQtYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICctbW96LWJveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94J1xuICAgIH1cbiAgfVxufTtcblxuXG5jb25zdCBSRUZfUkVHX0VYUCA9IC9cXHsoW1xcdy1dKylcXH0vZztcblxuZW51bSBUeXBlU3R5bGUge1xuICBNdWx0aXBsZSxcbiAgT25seU9uZVxufVxuXG5jb25zdCBTVFlMRV9NQVA1OiBNYXA8YW55LCBTdHlsZU1hcDU+ID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlTWFwNSB7XG4gIHN0eWxlczogU3R5bGVzRm4yPGFueT4gfCBTdHlsZXMyO1xuICB0eXBlOiBUeXBlU3R5bGU7XG4gIHByaW9yaXR5OiBudW1iZXI7XG4gIGNzczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IHN0cmluZ1xuICB9IHwgc3RyaW5nO1xuICAvKiogZ2xvYmFsIHRoZW1lICovXG4gIGNsYXNzZXM/OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmc7XG4gIC8qKiByZXF1aXJlVXBkYXRlICovXG4gIGNsYXNzZXNXaXRoVGhlbWU/OiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXToge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gICAgfSB8IHN0cmluZ1xuICB9O1xuICByZXF1aXJlVXBkYXRlPzogYm9vbGVhbjtcbn1cbmNvbnN0IENMQVNTRVNfTUFQOiB7XG4gIFtpZE9yVGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgW2NsYXNzTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmdcbn0gPSB7fTtcbmNvbnN0IFNUWUxFX0tFWVNfTUFQID0ge307XG5sZXQgbmV4dENsYXNzSWQgPSAwO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNJbkRvY3VtZW50IHtcbiAgc3R5bGVzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXTogTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD5cbiAgfSA9IHt9O1xuICBzdHlsZUNvbnRhaW5lcnMgPSBuZXcgTWFwPG51bWJlciwgSFRNTEVsZW1lbnQ+KCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeVRoZW1lMiB7XG4gIGNvbmZpZzogVGhlbWVWYXJpYWJsZXM7XG4gIF9zdHlsZU1hcDogTWFwPHN0cmluZywgRGF0YVN0eWxlPjtcbiAgaW5pdGlhbFRoZW1lOiBzdHJpbmc7XG4gIGVsZW1lbnRzOiBNYXA8c3RyaW5nIHwgb2JqZWN0LCBIVE1MU3R5bGVFbGVtZW50PjtcbiAgX2VsZW1lbnRzTWFwID0gbmV3IE1hcDxhbnksIEhUTUxTdHlsZUVsZW1lbnQ+KCk7XG5cbiAgZ2V0IGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIENMQVNTRVNfTUFQO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdHlsZXNJbkRvY3VtZW50OiBTdHlsZXNJbkRvY3VtZW50LFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAodGhlbWVOYW1lKSB7XG4gICAgICB0aGlzLnNldFVwVGhlbWUodGhlbWVOYW1lKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBUaGVtZSh0aGVtZU5hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IHRoZW1lTmFtZSBpbiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzXG4gICAgICA/IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXVxuICAgICAgOiB0aGlzLnN0eWxlc0luRG9jdW1lbnQuc3R5bGVzW3RoZW1lTmFtZV0gPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLl9jcmVhdGVJbnN0YW5jZUZvclRoZW1lKHRoZW1lTmFtZSk7XG4gICAgICBpZiAoIXRoaXMuaW5pdGlhbFRoZW1lKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFRoZW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FkZERlZmF1bHRTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIGFkZFN0eWxlKGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZUNvbnRhaW5lciB8ICgodGhlbWUpID0+IFN0eWxlQ29udGFpbmVyKSB8ICgodGhlbWUpID0+IHN0cmluZykgfCBzdHJpbmcsIGVsPzogYW55LCBpbnN0YW5jZT86IHN0cmluZywgcHJpb3JpdHk/OiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuYWRkQ3NzKGlkLCBzdHlsZSBhcyBhbnksIHByaW9yaXR5KTtcbiAgICBpZiAobmV3Q2xhc3MgPT09IGluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIGlmIChlbCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBwcml2YXRlIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzc25hbWUsIG9sZENsYXNzbmFtZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3MoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzczogc3RyaW5nLCBvbGRDbGFzcz86IHN0cmluZykge1xuICAgIGlmIChuZXdDbGFzcyA9PT0gb2xkQ2xhc3MpIHtcbiAgICAgIHJldHVybiBuZXdDbGFzcztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXFxgdGhlbWUuc2V0VGhlbWUoJ3RoZW1lLW5hbWUnKVxcYCBpcyBvbmx5IGF2YWlsYWJsZSBpbiBicm93c2VyIHBsYXRmb3JtYCk7XG4gICAgfVxuICAgIGlmIChuYW0gIT09IHRoaXMuY29uZmlnLm5hbWUpIHtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldChuYW0pO1xuICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChfLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVEYXRhID0gU1RZTEVfTUFQNS5nZXQoa2V5KTtcbiAgICAgICAgaWYgKHN0eWxlRGF0YS5yZXF1aXJlVXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZURhdGEuc3R5bGVzLCBrZXksIHN0eWxlRGF0YS5wcmlvcml0eSwgc3R5bGVEYXRhLnR5cGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIHN0eWxlLCBzaW1pbGFyIHRvIHNldFVwU3R5bGUgYnV0IHRoaXMgb25seSBhY2NlcHQgc3RyaW5nXG4gICAqIEBwYXJhbSBpZCBpZCBvZiBzdHlsZVxuICAgKiBAcGFyYW0gY3NzIHN0eWxlIGluIHN0cmluZ1xuICAgKi9cbiAgcHJpdmF0ZSBhZGRDc3MoaWQ6IHN0cmluZywgY3NzOiAoKHQpID0+IHN0cmluZykgfCBzdHJpbmcsIHByaW9yaXR5OiBudW1iZXIsIG1lZGlhPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBuZXdJZCA9IGB+PiR7aWR9YDtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50Mihjc3MgYXMgYW55LCBuZXdJZCwgcHJpb3JpdHksIFR5cGVTdHlsZS5Pbmx5T25lLCBmYWxzZSwgbWVkaWEpIGFzIHN0cmluZztcbiAgfVxuICBwcml2YXRlIF9hZGREZWZhdWx0U3R5bGVzKCkge1xuICAgIHRoaXMuYWRkU3R5bGVTaGVldChkZWZhdWx0U3R5bGVzKTtcbiAgfVxuXG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBUICYgKFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIpLCBwcmlvcml0eT86IG51bWJlcik6IElDbGFzc2VzPFQ+O1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgaWQ6IHN0cmluZyk6IElDbGFzc2VzPFQ+O1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgaWQ6IHN0cmluZyB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcik6IElDbGFzc2VzPFQ+O1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGFkZCBhIG5ldyBzdHlsZSBzaGVldFxuICAgKiBAcGFyYW0gc3R5bGVzIHN0eWxlc1xuICAgKiBAcGFyYW0gaWQgZGVwcmVjYXRlZCwgdW5pcXVlIGlkIGZvciBzdHlsZSBncm91cFxuICAgKiBAcGFyYW0gcHJpb3JpdHkgcHJpb3JpdHkgZm9yIHN0eWxlXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogVCAmIChTdHlsZXNGbjI8VD4gfCBTdHlsZXMyKSwgaWQ/OiBzdHJpbmcgfCBudW1iZXIsIHByaW9yaXR5PzogbnVtYmVyKTogSUNsYXNzZXM8VD4ge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgaWYgKCh2b2lkIDAgPT09IHByaW9yaXR5ICYmIHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHx8ICh2b2lkIDAgIT09IHByaW9yaXR5ICYmIHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgdGhlIHZhbHVlIFxcYCR7aWR9XFxgIGlzIG5vIGxvbmdlciBuZWNlc3NhcnkgZm9yIGFkZFN0eWxlU2hlZXQsIHRoaXMgd2lsbCBiZSBhbiBlcnJvciBpbiB0aGUgbmV4dCByZWxlYXNlLmApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIGlkIGFzIGFueSwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRlbnQyPFQ+KFxuICAgIHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMixcbiAgICBpZDogc3RyaW5nIHwgb2JqZWN0IHwgbnVtYmVyLFxuICAgIHByaW9yaXR5OiBudW1iZXIsXG4gICAgdHlwZTogVHlwZVN0eWxlLFxuICAgIGZvckNoYW5nZVRoZW1lPzogYm9vbGVhbixcbiAgICBtZWRpYT86IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBuZXdJZCA9IHR5cGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lID8gaWQgYXMgc3RyaW5nIDogc3R5bGVzO1xuICAgIGxldCBpc05ld1N0eWxlOiBib29sZWFuO1xuICAgIGlmICghU1RZTEVfTUFQNS5oYXMobmV3SWQpKSB7XG4gICAgICBpc05ld1N0eWxlID0gdHJ1ZTtcbiAgICAgIFNUWUxFX01BUDUuc2V0KG5ld0lkLCB7XG4gICAgICAgIHByaW9yaXR5OiB0eXBlID09PSBUeXBlU3R5bGUuT25seU9uZSA/IHByaW9yaXR5IDogcHJpb3JpdHkgPT09IHZvaWQgMCAmJiB0eXBlb2YgaWQgPT09ICdudW1iZXInID8gaWQgYXMgbnVtYmVyIDogcHJpb3JpdHksXG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgY3NzOiB7fVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlTWFwID0gU1RZTEVfTUFQNS5nZXQobmV3SWQpO1xuICAgIGNvbnN0IHRoZW1lTmFtZSA9IHRoaXMuaW5pdGlhbFRoZW1lO1xuICAgIGNvbnN0IGlzQ3JlYXRlZCA9IGlzTmV3U3R5bGUgfHwgIShzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV0pO1xuICAgIGlmIChpc0NyZWF0ZWQgfHwgZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgIC8qKiBjcmVhdGUgbmV3IHN0eWxlIGZvciBuZXcgdGhlbWUgKi9cbiAgICAgIGxldCBjc3M7XG4gICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzdHlsZU1hcC5yZXF1aXJlVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXModGhpcy5jb25maWcpLCB0aGVtZU5hbWUsIG51bGwsIHR5cGUsIHRoaXMuY29uZmlnLCBtZWRpYSk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcblxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogY3JlYXRlIGEgbmV3IGlkIGZvciBzdHlsZSB0aGF0IGRvZXMgbm90IDwtPHJlcXVpcmU+LT4gY2hhbmdlcyAqL1xuICAgICAgICBjc3MgPSBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVNYXAsIHN0eWxlcywgdGhlbWVOYW1lLCBuZXdJZCBhcyBzdHJpbmcsIHR5cGUsIHRoaXMuY29uZmlnLCBtZWRpYSk7XG4gICAgICAgIHN0eWxlTWFwLmNzcyA9IGNzcztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5lbGVtZW50cy5oYXMobmV3SWQpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuc2V0KG5ld0lkLCB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoY3NzKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKTtcbiAgICAgIGlmIChmb3JDaGFuZ2VUaGVtZSkge1xuICAgICAgICBlbC5pbm5lclRleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCBlbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKlxuICAgICAgICogYXBwZW5kIGNoaWxkIHN0eWxlIGlmIG5vdCBleGlzdCBpbiBkb21cbiAgICAgICAqIGZvciBzc3IgJiBobXJcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgX2NzcyA9IHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdIHx8IHN0eWxlTWFwLmNzcztcbiAgICAgICAgdGhpcy5lbGVtZW50cy5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVTdHlsZUNvbnRhaW5lcihzdHlsZU1hcC5wcmlvcml0eSksIHRoaXMuZWxlbWVudHMuZ2V0KG5ld0lkKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUluc3RhbmNlRm9yVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoISh0aGVtZU5hbWUgaW4gQ0xBU1NFU19NQVApKSB7XG4gICAgICBDTEFTU0VTX01BUFt0aGVtZU5hbWVdID0ge307XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlQ29udGFpbmVyIHwgc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlczIge1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lcjtcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoXG4gIHN0eWxlTWFwOiBTdHlsZU1hcDUsXG4gIHN0eWxlczogU3R5bGVzMixcbiAgdGhlbWVOYW1lOiBzdHJpbmcsXG4gIGlkOiBzdHJpbmcsXG4gIHR5cGVTdHlsZTogVHlwZVN0eWxlLFxuICB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gIG1lZGlhPzogc3RyaW5nXG4pIHtcbiAgaWYgKHR5cGVTdHlsZSA9PT0gVHlwZVN0eWxlLk9ubHlPbmUpIHtcbiAgICAvLyB1c2UgY3VycmVudCBjbGFzcyBvciBzZXQgbmV3XG4gICAgY29uc3QgY2xhc3NOYW1lID0gc3R5bGVNYXAucmVxdWlyZVVwZGF0ZVxuICAgID8gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IGNyZWF0ZU5leHRDbGFzc0lkKCkpXG4gICAgOiBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA/IHN0eWxlTWFwLmNsYXNzZXNcbiAgICAgIDogc3R5bGVNYXAuY2xhc3NlcyA9IGNyZWF0ZU5leHRDbGFzc0lkKCk7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBjc3MgPSBgLiR7Y2xhc3NOYW1lfXske3N0eWxlc319YDtcbiAgICAgIHJldHVybiBtZWRpYSA/IHRvTWVkaWEoY3NzLCBtZWRpYSkgOiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gc3R5bGVUb1N0cmluZyhpZCwgc3R5bGVzLCB0aGVtZVZhcmlhYmxlcywgY2xhc3NOYW1lIGFzIGFueSk7XG4gICAgICByZXR1cm4gcnVsZXM7XG4gICAgfVxuICB9XG4gIC8vIGZvciBtdWx0aXBsZXMgc3R5bGVzXG4gIGNvbnN0IGNsYXNzZXNNYXAgPSBzdHlsZU1hcFt0aGVtZU5hbWVdIHx8IChzdHlsZU1hcFt0aGVtZU5hbWVdID0ge30pO1xuICBsZXQgY29udGVudCA9ICcnO1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIC8vIHNldCBuZXcgaWQgaWYgbm90IGV4aXN0XG4gICAgICBjb25zdCBjdXJyZW50Q2xhc3NOYW1lID0ga2V5IGluIGNsYXNzZXNNYXBcbiAgICAgID8gY2xhc3Nlc01hcFtrZXldXG4gICAgICA6IGNsYXNzZXNNYXBba2V5XSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgaS0tLSR7a2V5fS0ke2NyZWF0ZU5leHRDbGFzc0lkKCl9YCkgOiBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyhrZXksIHZhbHVlIGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBjdXJyZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBpcyBzdHJpbmcnLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXBsYWNlUmVmcyhjb250ZW50LCBjbGFzc2VzTWFwKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVJlZnMoc3RyOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVGX1JFR19FWFAsIChtYXRjaCwgdG9rZW4pID0+IHtcbiAgICByZXR1cm4gYC4ke2RhdGFbdG9rZW5dfWA7XG4gIH1cbiAgKTtcbn1cblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhrZXk6IHN0cmluZywgb2I6IE9iamVjdCwgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBjdXJyZW50S2V5OiBzdHJpbmcsIHBhcmVudEtleT86IHN0cmluZykge1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgc3ViQ29udGVudCA9ICcnO1xuICBsZXQga2V5QW5kVmFsdWUgPSAnJztcbiAgbGV0IG5ld0tleTtcbiAgaWYgKHBhcmVudEtleSkge1xuICAgIGlmIChjdXJyZW50S2V5LmluZGV4T2YoJyYnKSAhPT0gLTEpIHtcbiAgICAgIG5ld0tleSA9IGN1cnJlbnRLZXkucmVwbGFjZSgvJi9nLCBwYXJlbnRLZXkpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudEtleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgbmV3S2V5ID0gYCR7Y3VycmVudEtleX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdLZXkgPSBgJHtwYXJlbnRLZXl9ICR7Y3VycmVudEtleX1gO1xuICAgIH1cbiAgfSBlbHNlIGlmIChrZXkgPT09ICdAZ2xvYmFsJykge1xuICAgIG5ld0tleSA9IGtleTtcbiAgfSBlbHNlIHtcbiAgICBuZXdLZXkgPSBgLiR7Y3VycmVudEtleX1gO1xuICB9XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzdWJDb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoa2V5LCBlbGVtZW50IGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBzdHlsZUtleSwgbmV3S2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdTdHlsZUtleSA9IHRvSHlwaGVuQ2FzZUNhY2hlKHN0eWxlS2V5KTtcbiAgICAgICAgaWYgKG5ld1N0eWxlS2V5LmluZGV4T2YoRGlyQWxpYXMuc3RhcnQpICE9PSAtMSkge1xuICAgICAgICAgIG5ld1N0eWxlS2V5ID0gZGlyQ2FjaGUobmV3U3R5bGVLZXksIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5zdGFydCk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3U3R5bGVLZXkuaW5kZXhPZihEaXJBbGlhcy5lbmQpICE9PSAtMSkge1xuICAgICAgICAgIG5ld1N0eWxlS2V5ID0gZGlyQ2FjaGUobmV3U3R5bGVLZXksIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5lbmQpO1xuICAgICAgICB9XG4gICAgICAgIGtleUFuZFZhbHVlICs9IGAke25ld1N0eWxlS2V5fToke2VsZW1lbnR9O2A7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChrZXlBbmRWYWx1ZSkge1xuICAgIGlmIChuZXdLZXkuaW5kZXhPZignQG1lZGlhJykgPT09IDApIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgICBrZXlBbmRWYWx1ZSA9IGAke3BhcmVudEtleX17JHtrZXlBbmRWYWx1ZX19YDtcbiAgICB9IGVsc2UgaWYgKHBhcmVudEtleSAmJiBwYXJlbnRLZXkgPT09ICdAZ2xvYmFsJykge1xuICAgICAgY29udGVudCArPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgKz0gYCR7bmV3S2V5fWA7XG4gICAgfVxuICAgIGNvbnRlbnQgKz0gYHske2tleUFuZFZhbHVlfX1gO1xuICB9XG4gIHJldHVybiBjb250ZW50ICsgc3ViQ29udGVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cbmZ1bmN0aW9uIHRvQ2xhc3NOYW1lVmFsaWQoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgcyA9IHN0ci5yZXBsYWNlKC9eWzAtOV18W15cXHdcXC1dL2csIF8gPT4ge1xuICAgIHJldHVybiBgXyR7Xy5jaGFyQ29kZUF0KDApfWA7XG4gIH0pO1xuICByZXR1cm4gdG9IeXBoZW5DYXNlKHMpO1xufVxuXG5mdW5jdGlvbiB0b0h5cGhlbkNhc2VDYWNoZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHIgaW4gU1RZTEVfS0VZU19NQVBcbiAgPyBTVFlMRV9LRVlTX01BUFtzdHJdXG4gIDogU1RZTEVfS0VZU19NQVBbc3RyXSA9IHRvSHlwaGVuQ2FzZShzdHIpO1xufVxuXG5jb25zdCBTVFlMRV9LRVlTX0RJUkVDVElPTlNfTUFQID0ge307XG5cbmZ1bmN0aW9uIGRpckNhY2hlKHZhbDogc3RyaW5nLCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIGRpckFsaWFzOiBEaXJBbGlhcykge1xuICBjb25zdCBuZXdLZXkgPSB0aGVtZVZhcmlhYmxlcy5kaXJlY3Rpb24gKyB2YWw7XG4gIHJldHVybiBuZXdLZXkgaW4gU1RZTEVfS0VZU19ESVJFQ1RJT05TX01BUFxuICA/IFNUWUxFX0tFWVNfRElSRUNUSU9OU19NQVBbbmV3S2V5XVxuICA6IFNUWUxFX0tFWVNfRElSRUNUSU9OU19NQVBbbmV3S2V5XSA9IHZhbC5yZXBsYWNlKGRpckFsaWFzLCB0aGVtZVZhcmlhYmxlcy5nZXREaXJlY3Rpb24oZGlyQWxpYXMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHRvTWVkaWEoY3NzOiBzdHJpbmcsIG1lZGlhOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGBAbWVkaWEgJHttZWRpYX17JHtjc3N9fWA7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5leHRDbGFzc0lkKCkge1xuICByZXR1cm4gYGkkeyhuZXh0Q2xhc3NJZCsrKS50b1N0cmluZygzNil9YDtcbn1cblxudHlwZSBJQ2xhc3NlczxUPiA9IFJlY29yZDwoVCBleHRlbmRzICgoLi4uYXJnczogYW55W10pID0+IGFueSkgPyAoa2V5b2YgUmV0dXJuVHlwZTxUPikgOiBrZXlvZiBUKSwgc3RyaW5nPjtcbiJdfQ==