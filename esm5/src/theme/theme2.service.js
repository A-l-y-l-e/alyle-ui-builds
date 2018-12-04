/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject, isDevMode, NgZone } from '@angular/core';
import { LY_THEME_NAME } from './theme-config';
import { CoreTheme } from './core-theme.service';
import { Platform } from '../platform';
import { DOCUMENT } from '@angular/common';
import { DirAlias } from '../style-utils';
import { YPosition } from '../position/position';
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
    /** @type {?} */
    StyleMap5.prototype.id;
}
/** @type {?} */
var nextClassId = 0;
/** @type {?} */
var nextKeyFrameId = 0;
var StylesInDocument = /** @class */ (function () {
    function StylesInDocument() {
        this.styles = {};
        this.styleContainers = new Map();
        this.styleElementGlobalMap = new Map();
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
    /** @type {?} */
    StylesInDocument.prototype.styleElementGlobalMap;
}
/** @type {?} */
var THEME_MAP = new Map();
var LyTheme2 = /** @class */ (function () {
    function LyTheme2(stylesInDocument, core, themeName, _document, _ngZone) {
        this.stylesInDocument = stylesInDocument;
        this.core = core;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementsMap = new Map();
        this.themeMap = THEME_MAP;
        this.isDevOrServer = isDevMode() || !Platform.isBrowser;
        if (themeName) {
            this.setUpTheme(themeName);
        }
    }
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
            if (!this.initialTheme) {
                this.initialTheme = this.config.name;
            }
            if (!this.themeMap.has(this.initialTheme)) {
                this.themeMap.set(this.initialTheme, {
                    base: this.initialTheme,
                    change: null
                });
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
            this.themeMap.get(this.initialTheme).change = nam;
            this.config = this.core.get(nam);
            this.elements.forEach(function (_, key) {
                /** @type {?} */
                var styleData = STYLE_MAP5.get(key);
                if (styleData.requireUpdate) {
                    _this._createStyleContent2(styleData.styles, styleData.id, styleData.priority, styleData.type, true);
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
     * @param priority priority for style
     */
    /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} priority priority for style
     * @return {?}
     */
    LyTheme2.prototype.addStyleSheet = /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} priority priority for style
     * @return {?}
     */
    function (styles, priority) {
        return this._createStyleContent2(styles, null, priority, TypeStyle.Multiple);
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
        var newId = (/** @type {?} */ (id)) || styles;
        /** @type {?} */
        var isNewStyle;
        if (!STYLE_MAP5.has(newId)) {
            isNewStyle = true;
            STYLE_MAP5.set(newId, {
                priority: priority,
                styles: styles,
                type: type,
                css: {},
                id: id
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
            /** @type {?} */
            var themeMap = this.themeMap.get(this.initialTheme);
            /** @type {?} */
            var config = this.core.get(themeMap.change || themeName);
            if (typeof styles === 'function') {
                styleMap.requireUpdate = true;
                css = groupStyleToString(styleMap, styles(config), themeName, null, type, config, media);
                if (!forChangeTheme) {
                    styleMap.css[themeName] = css;
                }
            }
            else {
                /** create a new id for style that does not <-<require>-> changes */
                css = groupStyleToString(styleMap, styles, themeName, (/** @type {?} */ (newId)), type, config, media);
                styleMap.css = css;
            }
            if (!this.elements.has(newId)) {
                /** @type {?} */
                var newEl = this._createElementStyle(css);
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
                /** @type {?} */
                var el = this.elements.get(newId);
                el.innerText = css;
            }
        }
        else if (this.isDevOrServer) {
            /**
             * append child style if not exist in dom
             * for ssr & hmr
             */
            if (!this.elements.has(newId)) {
                /** @type {?} */
                var _css = styleMap.css[themeName] || styleMap.css;
                /** @type {?} */
                var map = this.stylesInDocument.styleElementGlobalMap;
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
     * @param {?} fn
     * @return {?}
     */
    LyTheme2.prototype.requestAnimationFrame = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (typeof requestAnimationFrame === 'function') {
            this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    fn();
                });
            });
        }
        else {
            fn();
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
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
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
    LyTheme2.prototype.themeMap;
    /** @type {?} */
    LyTheme2.prototype.isDevOrServer;
    /** @type {?} */
    LyTheme2.prototype.stylesInDocument;
    /** @type {?} */
    LyTheme2.prototype.core;
    /** @type {?} */
    LyTheme2.prototype._document;
    /** @type {?} */
    LyTheme2.prototype._ngZone;
}
/**
 * @record
 */
export function StyleContainer() { }
/**
 * @record
 */
export function Styles2() { }
if (false) {
    /**
     * Prefix name
     * @type {?|undefined}
     */
    Styles2.prototype.$name;
    /* Skipping unhandled member: [key: string]: StyleContainer | string;*/
}
/**
 * @record
 */
export function Keyframes() { }
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
    // for styles type string
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
    /** @type {?} */
    var name = styles.$name ? styles.$name + "-" : '';
    for (var key in styles) {
        if (styles.hasOwnProperty(key)) {
            /** @type {?} */
            var value = styles[key];
            if (key === '$keyframes') {
                content += keyframesToString(name, classesMap, (/** @type {?} */ (value)), themeVariables);
            }
            else if (typeof value === 'object' || value === null) {
                // set new id if not exist
                /** @type {?} */
                var currentClassName = key in classesMap
                    ? classesMap[key]
                    : classesMap[key] = isDevMode() ? toClassNameValid("y-" + name + key + "-" + createNextClassId()) : createNextClassId();
                /** @type {?} */
                var style = styleToString(key, (/** @type {?} */ (value)), themeVariables, currentClassName);
                content += style;
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
        /** @type {?} */
        var className = data[token];
        if (className) {
            return "." + data[token];
        }
        else {
            return data["@\u0433.->-" + token];
        }
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
            // Check if is Object literal
            if (element.constructor === Object) {
                subContent += styleToString(key, (/** @type {?} */ (element)), themeVariables, styleKey, newKey);
            }
            else {
                keyAndValue += convertToStyleValue(styleKey, element, themeVariables);
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
 * @param {?} key
 * @param {?} value
 * @param {?} themeVariables
 * @return {?}
 */
function convertToStyleValue(key, value, themeVariables) {
    /** @type {?} */
    var newStyleKey = converterToCssKeyAndStyleCache(key, themeVariables);
    if (value.constructor === Array) {
        /** @type {?} */
        var lin = '';
        for (var index = 0; index < value.length; index++) {
            lin += newStyleKey + ":" + value[index] + ";";
        }
        return lin;
    }
    else {
        return newStyleKey + ":" + value + ";";
    }
}
/**
 * @param {?} styleName
 * @param {?} keysMap
 * @param {?} keyframes
 * @param {?} themeVariables
 * @return {?}
 */
function keyframesToString(styleName, keysMap, keyframes, themeVariables) {
    /** @type {?} */
    var content = '';
    for (var name_1 in keyframes) {
        if (keyframes.hasOwnProperty(name_1)) {
            /** @type {?} */
            var keyframe = keyframes[name_1];
            // Sometimes the name of a class can be the same as the name of a keyframe,
            // so we add a character to be different
            /** @type {?} */
            var newUniqueName = "@\u0433.->-" + name_1;
            // set new id if not exist
            /** @type {?} */
            var newName = newUniqueName in keysMap
                ? keysMap[newUniqueName]
                : keysMap[newUniqueName] = isDevMode() ? toClassNameValid("" + styleName + name_1 + "-" + createNextKeyframeId() + "-v") : createNextKeyframeId();
            content += "@keyframes " + newName + "{";
            for (var percent in keyframe) {
                if (keyframe.hasOwnProperty(percent)) {
                    content += percent + "%{";
                    /** @type {?} */
                    var styles = keyframe[percent];
                    for (var key in styles) {
                        if (styles.hasOwnProperty(key)) {
                            /** @type {?} */
                            var val = styles[key];
                            content += convertToStyleValue(key, (/** @type {?} */ (val)), themeVariables);
                        }
                    }
                    content += "}";
                }
            }
            content += "}";
        }
    }
    return content;
}
/**
 * @param {?} str
 * @param {?} key
 * @param {?} to
 * @return {?}
 */
function warnDeprecatedKeyStyle(str, key, to) {
    console.warn("Style key `" + key + "` deprecated for `" + str + "`, change `" + key + "` to `" + to + "`\n");
}
/**
 * @param {?} str
 * @param {?} themeVariables
 * @return {?}
 */
export function converterToCssKeyAndStyle(str, themeVariables) {
    /** @type {?} */
    var hyphenCase = toHyphenCase(str);
    if (hyphenCase.indexOf(DirAlias.start) !== -1) {
        warnDeprecatedKeyStyle(str, DirAlias.start, DirAlias.before);
        return dirCache(str, hyphenCase, themeVariables, DirAlias.start);
    }
    else if (hyphenCase.indexOf(DirAlias.end) !== -1) {
        warnDeprecatedKeyStyle(str, DirAlias.end, DirAlias.after);
        return dirCache(str, hyphenCase, themeVariables, DirAlias.end);
    }
    else if (hyphenCase.indexOf(DirAlias.before) !== -1) {
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
function toHyphenCase(str) {
    return str.replace(/([A-Z])/g, function (g) { return "-" + g[0].toLowerCase(); });
}
/**
 * @param {?} str
 * @param {?} themeVariables
 * @return {?}
 */
function converterToCssKeyAndStyleCache(str, themeVariables) {
    /** @type {?} */
    var map = STYLE_KEYS_MAP[themeVariables.direction];
    return str in map
        ? map[str]
        : map[str] = converterToCssKeyAndStyle(str, themeVariables);
}
/** @type {?} */
var ignoreCSSKEY = {
    'break-after': 'break-after',
    'break-before': 'break-before',
    'page-break-after': 'page-break-after',
    'page-break-before': 'page-break-before'
};
/** @type {?} */
var STYLE_KEYS_MAP = {
    rtl: tslib_1.__assign({}, ignoreCSSKEY),
    ltr: tslib_1.__assign({}, ignoreCSSKEY)
};
/** @type {?} */
var BOTTOM = 'bottom';
/** @type {?} */
var TOP = 'top';
/**
 * @param {?} original
 * @param {?} val
 * @param {?} themeVariables
 * @param {?} dirAlias
 * @return {?}
 */
function dirCache(original, val, themeVariables, dirAlias) {
    /** @type {?} */
    var map = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map[original] = val.replace(dirAlias, themeVariables.getDirection(dirAlias));
}
/**
 * @param {?} original
 * @param {?} val
 * @param {?} themeVariables
 * @param {?} pos
 * @param {?} to
 * @return {?}
 */
function YPositionCache(original, val, themeVariables, pos, to) {
    /** @type {?} */
    var map = STYLE_KEYS_MAP[themeVariables.direction];
    // Replace in original, for do not repeat this again
    return map[original] = val.replace(pos, to);
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
/**
 * @return {?}
 */
function createNextKeyframeId() {
    return "k" + (nextKeyFrameId++).toString(36);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQWtCLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztJQUUzQyxhQUFhLEdBQUc7SUFDcEIsU0FBUyxFQUFFO1FBQ1Qsc0JBQXNCLEVBQUU7WUFDdEIsb0JBQW9CLEVBQUUsWUFBWTtZQUNsQyxpQkFBaUIsRUFBRSxZQUFZO1lBQy9CLFlBQVksRUFBRSxZQUFZO1NBQzNCO0tBQ0Y7Q0FDRjs7SUFFSyxXQUFXLEdBQUcsZUFBZTs7O0lBR2pDLFdBQVE7SUFDUixVQUFPOzs7OztJQUdILFVBQVUsR0FBd0IsSUFBSSxHQUFHLEVBQUU7Ozs7QUFFakQsK0JBbUJDOzs7SUFsQkMsMkJBQTRCOztJQUM1Qix5QkFBZ0I7O0lBQ2hCLDZCQUFpQjs7SUFDakIsd0JBRVc7Ozs7O0lBRVgsNEJBRVc7Ozs7O0lBRVgscUNBSUU7O0lBQ0Ysa0NBQXdCOztJQUN4Qix1QkFBVzs7O0lBR1QsV0FBVyxHQUFHLENBQUM7O0lBQ2YsY0FBYyxHQUFHLENBQUM7QUFFdEI7SUFBQTtRQUlFLFdBQU0sR0FFRixFQUFFLENBQUM7UUFDUCxvQkFBZSxH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QUFLLFNBQUksR0FBRyxNQUFHLENBQUM7QUFDbkMsQ0FBQzs7OztBQUVELFNBQVMsaUJBQWlCO0lBQ3hCLE9BQU8sTUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBRyxDQUFDO0FBQzVDLENBQUM7Ozs7QUFDRCxTQUFTLG9CQUFvQjtJQUMzQixPQUFPLE1BQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUcsQ0FBQztBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIGlzRGV2TW9kZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEaXJBbGlhcyB9IGZyb20gJy4uL3N0eWxlLXV0aWxzJztcbmltcG9ydCB7IFlQb3NpdGlvbiB9IGZyb20gJy4uL3Bvc2l0aW9uL3Bvc2l0aW9uJztcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgJ0BnbG9iYWwnOiB7XG4gICAgJyosICo6YWZ0ZXIsICo6YmVmb3JlJzoge1xuICAgICAgJy13ZWJraXQtYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcbiAgICAgICctbW96LWJveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94J1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgUkVGX1JFR19FWFAgPSAvXFx7KFtcXHctXSspXFx9L2c7XG5cbmVudW0gVHlwZVN0eWxlIHtcbiAgTXVsdGlwbGUsXG4gIE9ubHlPbmVcbn1cblxuY29uc3QgU1RZTEVfTUFQNTogTWFwPGFueSwgU3R5bGVNYXA1PiA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZU1hcDUge1xuICBzdHlsZXM6IFN0eWxlc0ZuMiB8IFN0eWxlczI7XG4gIHR5cGU6IFR5cGVTdHlsZTtcbiAgcHJpb3JpdHk6IG51bWJlcjtcbiAgY3NzOiB7XG4gICAgW3RoZW1lTmFtZTogc3RyaW5nXTogc3RyaW5nXG4gIH0gfCBzdHJpbmc7XG4gIC8qKiBnbG9iYWwgdGhlbWUgKi9cbiAgY2xhc3Nlcz86IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfSB8IHN0cmluZztcbiAgLyoqIHJlcXVpcmVVcGRhdGUgKi9cbiAgY2xhc3Nlc1dpdGhUaGVtZT86IHtcbiAgICBbdGhlbWVOYW1lOiBzdHJpbmddOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgICB9IHwgc3RyaW5nXG4gIH07XG4gIHJlcXVpcmVVcGRhdGU/OiBib29sZWFuO1xuICBpZDogc3RyaW5nO1xufVxuXG5sZXQgbmV4dENsYXNzSWQgPSAwO1xubGV0IG5leHRLZXlGcmFtZUlkID0gMDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVzSW5Eb2N1bWVudCB7XG4gIHN0eWxlczoge1xuICAgIFt0aGVtZU5hbWU6IHN0cmluZ106IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+XG4gIH0gPSB7fTtcbiAgc3R5bGVDb250YWluZXJzID0gbmV3IE1hcDxudW1iZXIsIEhUTUxFbGVtZW50PigpO1xuICBzdHlsZUVsZW1lbnRHbG9iYWxNYXAgPSBuZXcgTWFwPHN0cmluZyB8IG9iamVjdCwgSFRNTFN0eWxlRWxlbWVudD4oKTtcbn1cblxuY29uc3QgVEhFTUVfTUFQID0gbmV3IE1hcDxzdHJpbmcsIHtcbiAgYmFzZTogc3RyaW5nXG4gIGNoYW5nZTogc3RyaW5nIHwgbnVsbFxufT4oKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZVZhcmlhYmxlcztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBpbml0aWFsVGhlbWU6IHN0cmluZztcbiAgZWxlbWVudHM6IE1hcDxzdHJpbmcgfCBvYmplY3QsIEhUTUxTdHlsZUVsZW1lbnQ+O1xuICBfZWxlbWVudHNNYXAgPSBuZXcgTWFwPGFueSwgSFRNTFN0eWxlRWxlbWVudD4oKTtcbiAgcHJpdmF0ZSB0aGVtZU1hcCA9IFRIRU1FX01BUDtcbiAgcHJpdmF0ZSBpc0Rldk9yU2VydmVyID0gaXNEZXZNb2RlKCkgfHwgIVBsYXRmb3JtLmlzQnJvd3NlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0eWxlc0luRG9jdW1lbnQ6IFN0eWxlc0luRG9jdW1lbnQsXG4gICAgcHVibGljIGNvcmU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX1RIRU1FX05BTUUpIHRoZW1lTmFtZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkge1xuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICB0aGlzLl9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gdGhlbWVOYW1lIGluIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNcbiAgICAgID8gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlc1t0aGVtZU5hbWVdXG4gICAgICA6IHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZXNbdGhlbWVOYW1lXSA9IG5ldyBNYXAoKTtcbiAgICAgIGlmICghdGhpcy5pbml0aWFsVGhlbWUpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVGhlbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnRoZW1lTWFwLmhhcyh0aGlzLmluaXRpYWxUaGVtZSkpIHtcbiAgICAgICAgdGhpcy50aGVtZU1hcC5zZXQodGhpcy5pbml0aWFsVGhlbWUsIHtcbiAgICAgICAgICBiYXNlOiB0aGlzLmluaXRpYWxUaGVtZSxcbiAgICAgICAgICBjaGFuZ2U6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hZGREZWZhdWx0U3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBkeW5hbWljIHN0eWxlLCB1c2Ugb25seSB3aXRoaW4gQElucHV0KClcbiAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZFxuICAgKiBAcGFyYW0gc3R5bGUgU3R5bGVzXG4gICAqIEBwYXJhbSBlbCBFbGVtZW50XG4gICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2Ugb2YgdGhpcywgdGhpcyByZXBsYWNlcyB0aGUgZXhpc3Rpbmcgc3R5bGUgd2l0aCBhIG5ldyBvbmUgd2hlbiBpdCBjaGFuZ2VzXG4gICAqL1xuICBhZGRTdHlsZShpZDogc3RyaW5nLCBzdHlsZTogU3R5bGVDb250YWluZXIgfCAoKHRoZW1lKSA9PiBTdHlsZUNvbnRhaW5lcikgfCAoKHRoZW1lKSA9PiBzdHJpbmcpIHwgc3RyaW5nLCBlbD86IGFueSwgaW5zdGFuY2U/OiBzdHJpbmcsIHByaW9yaXR5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmFkZENzcyhpZCwgc3R5bGUgYXMgYW55LCBwcmlvcml0eSk7XG4gICAgaWYgKG5ld0NsYXNzID09PSBpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIG5ld0NsYXNzO1xuICAgIH1cbiAgICBpZiAoZWwpIHtcbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICBpZiAobmV3Q2xhc3MgPT09IG9sZENsYXNzKSB7XG4gICAgICByZXR1cm4gbmV3Q2xhc3M7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzcywgb2xkQ2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBzZXRUaGVtZShuYW06IHN0cmluZykge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxcYHRoZW1lLnNldFRoZW1lKCd0aGVtZS1uYW1lJylcXGAgaXMgb25seSBhdmFpbGFibGUgaW4gYnJvd3NlciBwbGF0Zm9ybWApO1xuICAgIH1cbiAgICBpZiAobmFtICE9PSB0aGlzLmNvbmZpZy5uYW1lKSB7XG4gICAgICB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSkuY2hhbmdlID0gbmFtO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZURhdGEgPSBTVFlMRV9NQVA1LmdldChrZXkpO1xuICAgICAgICBpZiAoc3R5bGVEYXRhLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlRGF0YS5zdHlsZXMsIHN0eWxlRGF0YS5pZCwgc3R5bGVEYXRhLnByaW9yaXR5LCBzdHlsZURhdGEudHlwZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgc3R5bGUsIHNpbWlsYXIgdG8gc2V0VXBTdHlsZSBidXQgdGhpcyBvbmx5IGFjY2VwdCBzdHJpbmdcbiAgICogQHBhcmFtIGlkIGlkIG9mIHN0eWxlXG4gICAqIEBwYXJhbSBjc3Mgc3R5bGUgaW4gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGFkZENzcyhpZDogc3RyaW5nLCBjc3M6ICgodCkgPT4gc3RyaW5nKSB8IHN0cmluZywgcHJpb3JpdHk6IG51bWJlciwgbWVkaWE/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5ld0lkID0gYH4+JHtpZH1gO1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGNzcyBhcyBhbnksIG5ld0lkLCBwcmlvcml0eSwgVHlwZVN0eWxlLk9ubHlPbmUsIGZhbHNlLCBtZWRpYSkgYXMgc3RyaW5nO1xuICB9XG4gIHByaXZhdGUgX2FkZERlZmF1bHRTdHlsZXMoKSB7XG4gICAgdGhpcy5hZGRTdHlsZVNoZWV0KGRlZmF1bHRTdHlsZXMpO1xuICB9XG5cblxuICAvKipcbiAgICogQWRkIG5ldyBhZGQgYSBuZXcgc3R5bGUgc2hlZXRcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZXNcbiAgICogQHBhcmFtIHByaW9yaXR5IHByaW9yaXR5IGZvciBzdHlsZVxuICAgKi9cbiAgYWRkU3R5bGVTaGVldDxUPihzdHlsZXM6IFQgJiBTdHlsZXMsIHByaW9yaXR5PzogbnVtYmVyKTogT25seUNsYXNzZXM8VD4ge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKHN0eWxlcywgbnVsbCwgcHJpb3JpdHksIFR5cGVTdHlsZS5NdWx0aXBsZSk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRlbnQyPFQ+KFxuICAgIHN0eWxlczogU3R5bGVzRm4yIHwgU3R5bGVzMixcbiAgICBpZDogc3RyaW5nLFxuICAgIHByaW9yaXR5OiBudW1iZXIsXG4gICAgdHlwZTogVHlwZVN0eWxlLFxuICAgIGZvckNoYW5nZVRoZW1lPzogYm9vbGVhbixcbiAgICBtZWRpYT86IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBuZXdJZCA9IGlkIGFzIHN0cmluZyB8fCBzdHlsZXM7XG4gICAgbGV0IGlzTmV3U3R5bGU6IGJvb2xlYW47XG4gICAgaWYgKCFTVFlMRV9NQVA1LmhhcyhuZXdJZCkpIHtcbiAgICAgIGlzTmV3U3R5bGUgPSB0cnVlO1xuICAgICAgU1RZTEVfTUFQNS5zZXQobmV3SWQsIHtcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgY3NzOiB7fSxcbiAgICAgICAgaWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZU1hcCA9IFNUWUxFX01BUDUuZ2V0KG5ld0lkKTtcbiAgICBjb25zdCB0aGVtZU5hbWUgPSB0aGlzLmluaXRpYWxUaGVtZTtcbiAgICBjb25zdCBpc0NyZWF0ZWQgPSBpc05ld1N0eWxlIHx8ICEoc3R5bGVNYXAuY2xhc3NlcyB8fCBzdHlsZU1hcFt0aGVtZU5hbWVdKTtcbiAgICBpZiAoaXNDcmVhdGVkIHx8IGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAvKiogY3JlYXRlIG5ldyBzdHlsZSBmb3IgbmV3IHRoZW1lICovXG4gICAgICBsZXQgY3NzO1xuICAgICAgY29uc3QgdGhlbWVNYXAgPSB0aGlzLnRoZW1lTWFwLmdldCh0aGlzLmluaXRpYWxUaGVtZSk7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTWFwLmNoYW5nZSB8fCB0aGVtZU5hbWUpO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3R5bGVNYXAucmVxdWlyZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGNzcyA9IGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZU1hcCwgc3R5bGVzKGNvbmZpZyksIHRoZW1lTmFtZSwgbnVsbCwgdHlwZSwgY29uZmlnLCBtZWRpYSk7XG4gICAgICAgIGlmICghZm9yQ2hhbmdlVGhlbWUpIHtcbiAgICAgICAgICBzdHlsZU1hcC5jc3NbdGhlbWVOYW1lXSA9IGNzcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIGNyZWF0ZSBhIG5ldyBpZCBmb3Igc3R5bGUgdGhhdCBkb2VzIG5vdCA8LTxyZXF1aXJlPi0+IGNoYW5nZXMgKi9cbiAgICAgICAgY3NzID0gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlTWFwLCBzdHlsZXMsIHRoZW1lTmFtZSwgbmV3SWQgYXMgc3RyaW5nLCB0eXBlLCBjb25maWcsIG1lZGlhKTtcbiAgICAgICAgc3R5bGVNYXAuY3NzID0gY3NzO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgbmV3RWwgPSB0aGlzLl9jcmVhdGVFbGVtZW50U3R5bGUoY3NzKTtcbiAgICAgICAgaWYgKHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGZvciB3aGVuIGEgdGhlbWUgY2hhbmdlc1xuICAgICAgICAgIHRoaXMuZWxlbWVudHMuc2V0KG5ld0lkLCBuZXdFbCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Rldk9yU2VydmVyKSB7XG4gICAgICAgICAgLy8gaW4gZGV2IG1vZGUgb3Igc2VydmVyIGl0IGlzIG5vdCBuZWNlc3NhcnlcbiAgICAgICAgICAvLyBzaW5jZSB0aGUgc3R5bGVzIHdpbGwgbm90IGNoYW5nZVxuICAgICAgICAgIHRoaXMuc3R5bGVzSW5Eb2N1bWVudC5zdHlsZUVsZW1lbnRHbG9iYWxNYXAuc2V0KG5ld0lkLCBuZXdFbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgbmV3RWwpO1xuICAgICAgfVxuICAgICAgaWYgKGZvckNoYW5nZVRoZW1lKSB7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50cy5nZXQobmV3SWQpO1xuICAgICAgICBlbC5pbm5lclRleHQgPSBjc3M7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRGV2T3JTZXJ2ZXIpIHtcbiAgICAgIC8qKlxuICAgICAgICogYXBwZW5kIGNoaWxkIHN0eWxlIGlmIG5vdCBleGlzdCBpbiBkb21cbiAgICAgICAqIGZvciBzc3IgJiBobXJcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmhhcyhuZXdJZCkpIHtcbiAgICAgICAgY29uc3QgX2NzcyA9IHN0eWxlTWFwLmNzc1t0aGVtZU5hbWVdIHx8IHN0eWxlTWFwLmNzcztcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50LnN0eWxlRWxlbWVudEdsb2JhbE1hcDtcbiAgICAgICAgaWYgKHN0eWxlTWFwLnJlcXVpcmVVcGRhdGUpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChuZXdJZCwgdGhpcy5fY3JlYXRlRWxlbWVudFN0eWxlKF9jc3MpKTtcbiAgICAgICAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlU3R5bGVDb250YWluZXIoc3R5bGVNYXAucHJpb3JpdHkpLCB0aGlzLmVsZW1lbnRzLmdldChuZXdJZCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCFtYXAuaGFzKG5ld0lkKSkge1xuICAgICAgICAgIG1hcC5zZXQobmV3SWQsIHRoaXMuX2NyZWF0ZUVsZW1lbnRTdHlsZShfY3NzKSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZVN0eWxlQ29udGFpbmVyKHN0eWxlTWFwLnByaW9yaXR5KSwgbWFwLmdldChuZXdJZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHlsZU1hcC5jbGFzc2VzIHx8IHN0eWxlTWFwW3RoZW1lTmFtZV07XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTdHlsZUNvbnRhaW5lcihwcmlvcml0eSA9IDApIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGlmICghc3R5bGVDb250YWluZXJzLmhhcyhwcmlvcml0eSkpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoYGx5LXMtY2ApO1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICdwcmlvcml0eScsIGAke3ByaW9yaXR5fWApO1xuICAgICAgfVxuICAgICAgc3R5bGVDb250YWluZXJzLnNldChwcmlvcml0eSwgZWwpO1xuICAgICAgaWYgKHN0eWxlQ29udGFpbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgZWwsIHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN0eWxlQ29udGFpbmVycy5nZXQocHJpb3JpdHkpO1xuICAgIH1cbiAgICBjb25zdCByZWZDaGlsZCA9IHRoaXMuZmluZE5vZGUocHJpb3JpdHkpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5fZG9jdW1lbnQuYm9keSwgc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSksIHJlZkNoaWxkKTtcbiAgICByZXR1cm4gc3R5bGVDb250YWluZXJzLmdldChwcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROb2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHN0eWxlQ29udGFpbmVycyB9ID0gdGhpcy5zdHlsZXNJbkRvY3VtZW50O1xuICAgIGNvbnN0IGtleXMgPSAoQXJyYXkuZnJvbShzdHlsZUNvbnRhaW5lcnMua2V5cygpKSkuc29ydCgpO1xuICAgIGNvbnN0IGtleSA9IGtleXMuZmluZChfID0+IGluZGV4IDwgXyk7XG4gICAgcmV0dXJuIChrZXkgIT09IHVuZGVmaW5lZCAmJiBzdHlsZUNvbnRhaW5lcnMuZ2V0KGtleSkpIHx8IHRoaXMuY29yZS5maXJzdEVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVFbGVtZW50U3R5bGUoY3NzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChjc3MpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKSB7XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQ29udGFpbmVyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVDb250YWluZXIgfCBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgLyoqIFByZWZpeCBuYW1lICovXG4gICRuYW1lPzogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBTdHlsZUNvbnRhaW5lciB8IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMiA9IChUKSA9PiBTdHlsZXMyO1xuXG5leHBvcnQgdHlwZSBTdHlsZXMgPSBTdHlsZXNGbjIgfCBTdHlsZXMyO1xuXG5leHBvcnQgaW50ZXJmYWNlIEtleWZyYW1lcyB7XG4gIFtuYW1lOiBzdHJpbmddOiB7XG4gICAgW3BlcmNlbnQ6IG51bWJlcl06IFN0eWxlQ29udGFpbmVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdyb3VwU3R5bGVUb1N0cmluZyhcbiAgc3R5bGVNYXA6IFN0eWxlTWFwNSxcbiAgc3R5bGVzOiBTdHlsZXMyLFxuICB0aGVtZU5hbWU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyxcbiAgdHlwZVN0eWxlOiBUeXBlU3R5bGUsXG4gIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgbWVkaWE/OiBzdHJpbmdcbikge1xuICAvLyBmb3Igc3R5bGVzIHR5cGUgc3RyaW5nXG4gIGlmICh0eXBlU3R5bGUgPT09IFR5cGVTdHlsZS5Pbmx5T25lKSB7XG4gICAgLy8gdXNlIGN1cnJlbnQgY2xhc3Mgb3Igc2V0IG5ld1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN0eWxlTWFwLnJlcXVpcmVVcGRhdGVcbiAgICA/IHN0eWxlTWFwW3RoZW1lTmFtZV0gfHwgKHN0eWxlTWFwW3RoZW1lTmFtZV0gPSBjcmVhdGVOZXh0Q2xhc3NJZCgpKVxuICAgIDogc3R5bGVNYXAuY2xhc3Nlc1xuICAgICAgPyBzdHlsZU1hcC5jbGFzc2VzXG4gICAgICA6IHN0eWxlTWFwLmNsYXNzZXMgPSBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgY3NzID0gYC4ke2NsYXNzTmFtZX17JHtzdHlsZXN9fWA7XG4gICAgICByZXR1cm4gbWVkaWEgPyB0b01lZGlhKGNzcywgbWVkaWEpIDogY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlcyA9IHN0eWxlVG9TdHJpbmcoaWQsIHN0eWxlcywgdGhlbWVWYXJpYWJsZXMsIGNsYXNzTmFtZSBhcyBhbnkpO1xuICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH1cbiAgfVxuICAvLyBmb3IgbXVsdGlwbGVzIHN0eWxlc1xuICBjb25zdCBjbGFzc2VzTWFwID0gc3R5bGVNYXBbdGhlbWVOYW1lXSB8fCAoc3R5bGVNYXBbdGhlbWVOYW1lXSA9IHt9KTtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgY29uc3QgbmFtZSA9IHN0eWxlcy4kbmFtZSA/IGAke3N0eWxlcy4kbmFtZX0tYCA6ICcnO1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgICBpZiAoa2V5ID09PSAnJGtleWZyYW1lcycpIHtcbiAgICAgICAgY29udGVudCArPSBrZXlmcmFtZXNUb1N0cmluZyhuYW1lLCBjbGFzc2VzTWFwLCB2YWx1ZSBhcyBLZXlmcmFtZXMsIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyBzZXQgbmV3IGlkIGlmIG5vdCBleGlzdFxuICAgICAgICBjb25zdCBjdXJyZW50Q2xhc3NOYW1lID0ga2V5IGluIGNsYXNzZXNNYXBcbiAgICAgICAgPyBjbGFzc2VzTWFwW2tleV1cbiAgICAgICAgOiBjbGFzc2VzTWFwW2tleV0gPSBpc0Rldk1vZGUoKSA/IHRvQ2xhc3NOYW1lVmFsaWQoYHktJHtuYW1lfSR7a2V5fS0ke2NyZWF0ZU5leHRDbGFzc0lkKCl9YCkgOiBjcmVhdGVOZXh0Q2xhc3NJZCgpO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyhrZXksIHZhbHVlIGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBjdXJyZW50Q2xhc3NOYW1lKTtcbiAgICAgICAgY29udGVudCArPSBzdHlsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2VSZWZzKGNvbnRlbnQsIGNsYXNzZXNNYXApO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUmVmcyhzdHI6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUZfUkVHX0VYUCwgKG1hdGNoLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGRhdGFbdG9rZW5dO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBgLiR7ZGF0YVt0b2tlbl19YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGFbYEDQsy4tPi0ke3Rva2VufWBdO1xuICAgIH1cbiAgfVxuICApO1xufVxuXG4vKipcbiAqIHtjb2xvcjoncmVkJ30gdG8gLmNsYXNzTmFtZXtjb2xvcjogcmVkfVxuICovXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKGtleTogc3RyaW5nLCBvYjogT2JqZWN0LCB0aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsIGN1cnJlbnRLZXk6IHN0cmluZywgcGFyZW50S2V5Pzogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBzdWJDb250ZW50ID0gJyc7XG4gIGxldCBrZXlBbmRWYWx1ZSA9ICcnO1xuICBsZXQgbmV3S2V5O1xuICBpZiAocGFyZW50S2V5KSB7XG4gICAgaWYgKGN1cnJlbnRLZXkuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgICAgbmV3S2V5ID0gY3VycmVudEtleS5yZXBsYWNlKC8mL2csIHBhcmVudEtleSk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50S2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICBuZXdLZXkgPSBgJHtjdXJyZW50S2V5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0tleSA9IGAke3BhcmVudEtleX0gJHtjdXJyZW50S2V5fWA7XG4gICAgfVxuICB9IGVsc2UgaWYgKGtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgbmV3S2V5ID0ga2V5O1xuICB9IGVsc2Uge1xuICAgIG5ld0tleSA9IGAuJHtjdXJyZW50S2V5fWA7XG4gIH1cbiAgZm9yIChjb25zdCBzdHlsZUtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBvYltzdHlsZUtleV07XG4gICAgICAvLyBDaGVjayBpZiBpcyBPYmplY3QgbGl0ZXJhbFxuICAgICAgaWYgKGVsZW1lbnQuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBzdWJDb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoa2V5LCBlbGVtZW50IGFzIFN0eWxlczIsIHRoZW1lVmFyaWFibGVzLCBzdHlsZUtleSwgbmV3S2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleUFuZFZhbHVlICs9IGNvbnZlcnRUb1N0eWxlVmFsdWUoc3R5bGVLZXksIGVsZW1lbnQsIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGtleUFuZFZhbHVlKSB7XG4gICAgaWYgKG5ld0tleS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMCkge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICAgIGtleUFuZFZhbHVlID0gYCR7cGFyZW50S2V5fXske2tleUFuZFZhbHVlfX1gO1xuICAgIH0gZWxzZSBpZiAocGFyZW50S2V5ICYmIHBhcmVudEtleSA9PT0gJ0BnbG9iYWwnKSB7XG4gICAgICBjb250ZW50ICs9IGAke2N1cnJlbnRLZXl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudCArPSBgJHtuZXdLZXl9YDtcbiAgICB9XG4gICAgY29udGVudCArPSBgeyR7a2V5QW5kVmFsdWV9fWA7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQgKyBzdWJDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9TdHlsZVZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10sIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcykge1xuICBjb25zdCBuZXdTdHlsZUtleSA9IGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGVDYWNoZShrZXksIHRoZW1lVmFyaWFibGVzKTtcbiAgaWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgIGxldCBsaW4gPSAnJztcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBsaW4gKz0gYCR7bmV3U3R5bGVLZXl9OiR7dmFsdWVbaW5kZXhdfTtgO1xuICAgIH1cbiAgICByZXR1cm4gbGluO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgJHtuZXdTdHlsZUtleX06JHt2YWx1ZX07YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBrZXlmcmFtZXNUb1N0cmluZyhzdHlsZU5hbWU6IHN0cmluZywga2V5c01hcDogb2JqZWN0LCBrZXlmcmFtZXM6IEtleWZyYW1lcywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG5cbiAgZm9yIChjb25zdCBuYW1lIGluIGtleWZyYW1lcykge1xuICAgIGlmIChrZXlmcmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIGNvbnN0IGtleWZyYW1lID0ga2V5ZnJhbWVzW25hbWVdO1xuICAgICAgLy8gU29tZXRpbWVzIHRoZSBuYW1lIG9mIGEgY2xhc3MgY2FuIGJlIHRoZSBzYW1lIGFzIHRoZSBuYW1lIG9mIGEga2V5ZnJhbWUsXG4gICAgICAvLyBzbyB3ZSBhZGQgYSBjaGFyYWN0ZXIgdG8gYmUgZGlmZmVyZW50XG4gICAgICBjb25zdCBuZXdVbmlxdWVOYW1lID0gYEDQsy4tPi0ke25hbWV9YDtcbiAgICAgIC8vIHNldCBuZXcgaWQgaWYgbm90IGV4aXN0XG4gICAgICBjb25zdCBuZXdOYW1lID0gbmV3VW5pcXVlTmFtZSBpbiBrZXlzTWFwXG4gICAgICA/IGtleXNNYXBbbmV3VW5pcXVlTmFtZV1cbiAgICAgIDoga2V5c01hcFtuZXdVbmlxdWVOYW1lXSA9IGlzRGV2TW9kZSgpID8gdG9DbGFzc05hbWVWYWxpZChgJHtzdHlsZU5hbWV9JHtuYW1lfS0ke2NyZWF0ZU5leHRLZXlmcmFtZUlkKCl9LXZgKSA6IGNyZWF0ZU5leHRLZXlmcmFtZUlkKCk7XG4gICAgICBjb250ZW50ICs9IGBAa2V5ZnJhbWVzICR7bmV3TmFtZX17YDtcbiAgICAgIGZvciAoY29uc3QgcGVyY2VudCBpbiBrZXlmcmFtZSkge1xuICAgICAgICBpZiAoa2V5ZnJhbWUuaGFzT3duUHJvcGVydHkocGVyY2VudCkpIHtcbiAgICAgICAgICBjb250ZW50ICs9IGAke3BlcmNlbnR9JXtgO1xuICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IGtleWZyYW1lW3BlcmNlbnRdO1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHN0eWxlc1trZXldO1xuICAgICAgICAgICAgICBjb250ZW50ICs9IGNvbnZlcnRUb1N0eWxlVmFsdWUoa2V5LCB2YWwgYXMgc3RyaW5nIHwgc3RyaW5nW10sIHRoZW1lVmFyaWFibGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudCArPSBgfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gYH1gO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gd2FybkRlcHJlY2F0ZWRLZXlTdHlsZShzdHI6IHN0cmluZywga2V5OiBzdHJpbmcsIHRvOiBzdHJpbmcpIHtcbiAgY29uc29sZS53YXJuKGBTdHlsZSBrZXkgXFxgJHtrZXl9XFxgIGRlcHJlY2F0ZWQgZm9yIFxcYCR7c3RyfVxcYCwgY2hhbmdlIFxcYCR7a2V5fVxcYCB0byBcXGAke3RvfVxcYFxcbmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZShzdHI6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKSB7XG4gIGNvbnN0IGh5cGhlbkNhc2UgPSB0b0h5cGhlbkNhc2Uoc3RyKTtcbiAgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5zdGFydCkgIT09IC0xKSB7XG4gICAgd2FybkRlcHJlY2F0ZWRLZXlTdHlsZShzdHIsIERpckFsaWFzLnN0YXJ0LCBEaXJBbGlhcy5iZWZvcmUpO1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5zdGFydCk7XG4gIH0gZWxzZSBpZiAoaHlwaGVuQ2FzZS5pbmRleE9mKERpckFsaWFzLmVuZCkgIT09IC0xKSB7XG4gICAgd2FybkRlcHJlY2F0ZWRLZXlTdHlsZShzdHIsIERpckFsaWFzLmVuZCwgRGlyQWxpYXMuYWZ0ZXIpO1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5lbmQpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5iZWZvcmUpICE9PSAtMSkge1xuICAgIHJldHVybiBkaXJDYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBEaXJBbGlhcy5iZWZvcmUpO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihEaXJBbGlhcy5hZnRlcikgIT09IC0xKSB7XG4gICAgcmV0dXJuIGRpckNhY2hlKHN0ciwgaHlwaGVuQ2FzZSwgdGhlbWVWYXJpYWJsZXMsIERpckFsaWFzLmFmdGVyKTtcbiAgfSBlbHNlIGlmIChoeXBoZW5DYXNlLmluZGV4T2YoWVBvc2l0aW9uLmFib3ZlKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gWVBvc2l0aW9uQ2FjaGUoc3RyLCBoeXBoZW5DYXNlLCB0aGVtZVZhcmlhYmxlcywgWVBvc2l0aW9uLmFib3ZlLCBUT1ApO1xuICB9IGVsc2UgaWYgKGh5cGhlbkNhc2UuaW5kZXhPZihZUG9zaXRpb24uYmVsb3cpICE9PSAtMSkge1xuICAgIHJldHVybiBZUG9zaXRpb25DYWNoZShzdHIsIGh5cGhlbkNhc2UsIHRoZW1lVmFyaWFibGVzLCBZUG9zaXRpb24uYmVsb3csIEJPVFRPTSk7XG4gIH1cbiAgcmV0dXJuIGh5cGhlbkNhc2U7XG59XG5cbmZ1bmN0aW9uIHRvQ2xhc3NOYW1lVmFsaWQoc3RyOiBzdHJpbmcpIHtcbiAgY29uc3QgcyA9IHN0ci5yZXBsYWNlKC9eWzAtOV18W15cXHdcXC1dL2csIF8gPT4ge1xuICAgIHJldHVybiBgXyR7Xy5jaGFyQ29kZUF0KDApfWA7XG4gIH0pO1xuICByZXR1cm4gdG9IeXBoZW5DYXNlKHMpO1xufVxuXG5cbmZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRlclRvQ3NzS2V5QW5kU3R5bGVDYWNoZShzdHI6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzKTogc3RyaW5nIHtcbiAgY29uc3QgbWFwID0gU1RZTEVfS0VZU19NQVBbdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uXTtcbiAgcmV0dXJuIHN0ciBpbiBtYXBcbiAgPyBtYXBbc3RyXVxuICA6IG1hcFtzdHJdID0gY29udmVydGVyVG9Dc3NLZXlBbmRTdHlsZShzdHIsIHRoZW1lVmFyaWFibGVzKTtcbn1cblxuY29uc3QgaWdub3JlQ1NTS0VZID0ge1xuICAnYnJlYWstYWZ0ZXInOiAnYnJlYWstYWZ0ZXInLFxuICAnYnJlYWstYmVmb3JlJzogJ2JyZWFrLWJlZm9yZScsXG4gICdwYWdlLWJyZWFrLWFmdGVyJzogJ3BhZ2UtYnJlYWstYWZ0ZXInLFxuICAncGFnZS1icmVhay1iZWZvcmUnOiAncGFnZS1icmVhay1iZWZvcmUnXG59O1xuXG5jb25zdCBTVFlMRV9LRVlTX01BUCA9IHtcbiAgcnRsOiB7XG4gICAgLi4uaWdub3JlQ1NTS0VZXG4gIH0sXG4gIGx0cjoge1xuICAgIC4uLmlnbm9yZUNTU0tFWVxuICB9XG59O1xuXG5jb25zdCBCT1RUT00gPSAnYm90dG9tJztcbmNvbnN0IFRPUCA9ICd0b3AnO1xuXG5mdW5jdGlvbiBkaXJDYWNoZShvcmlnaW5hbCwgdmFsOiBzdHJpbmcsIHRoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcywgZGlyQWxpYXM6IERpckFsaWFzKSB7XG4gIGNvbnN0IG1hcCA9IFNUWUxFX0tFWVNfTUFQW3RoZW1lVmFyaWFibGVzLmRpcmVjdGlvbl07XG4gIC8vIFJlcGxhY2UgaW4gb3JpZ2luYWwsIGZvciBkbyBub3QgcmVwZWF0IHRoaXMgYWdhaW5cbiAgcmV0dXJuIG1hcFtvcmlnaW5hbF0gPSB2YWwucmVwbGFjZShkaXJBbGlhcywgdGhlbWVWYXJpYWJsZXMuZ2V0RGlyZWN0aW9uKGRpckFsaWFzKSk7XG59XG5cbmZ1bmN0aW9uIFlQb3NpdGlvbkNhY2hlKG9yaWdpbmFsLCB2YWw6IHN0cmluZywgdGhlbWVWYXJpYWJsZXM6IFRoZW1lVmFyaWFibGVzLCBwb3M6IFlQb3NpdGlvbiwgdG86ICd0b3AnIHwgJ2JvdHRvbScpIHtcbiAgY29uc3QgbWFwID0gU1RZTEVfS0VZU19NQVBbdGhlbWVWYXJpYWJsZXMuZGlyZWN0aW9uXTtcbiAgLy8gUmVwbGFjZSBpbiBvcmlnaW5hbCwgZm9yIGRvIG5vdCByZXBlYXQgdGhpcyBhZ2FpblxuICByZXR1cm4gbWFwW29yaWdpbmFsXSA9IHZhbC5yZXBsYWNlKHBvcywgdG8pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gdG9NZWRpYShjc3M6IHN0cmluZywgbWVkaWE6IHN0cmluZykge1xuICByZXR1cm4gYEBtZWRpYSAke21lZGlhfXske2Nzc319YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV4dENsYXNzSWQoKSB7XG4gIHJldHVybiBgaSR7KG5leHRDbGFzc0lkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuZnVuY3Rpb24gY3JlYXRlTmV4dEtleWZyYW1lSWQoKSB7XG4gIHJldHVybiBgayR7KG5leHRLZXlGcmFtZUlkKyspLnRvU3RyaW5nKDM2KX1gO1xufVxuXG50eXBlIE9ubHlDbGFzc2VzPFQ+ID0gUmVjb3JkPChcbiAgRXhjbHVkZTwoVCBleHRlbmRzICgoLi4uYXJnczogYW55W10pID0+IGFueSkgPyAoa2V5b2YgUmV0dXJuVHlwZTxUPikgOiBrZXlvZiBUKSxcbiAgJyRuYW1lJyB8ICckc2hlZXQnIHwgJyRrZXlmcmFtZXMnPlxuKSwgc3RyaW5nPjtcblxuIl19