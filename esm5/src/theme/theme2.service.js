/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject, Optional } from '@angular/core';
import { LY_THEME_NAME } from './theme-config';
import { CoreTheme } from './core-theme.service';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function StyleItem() { }
function StyleItem_tsickle_Closure_declarations() {
    /** @type {?} */
    StyleItem.prototype.id;
    /** @type {?} */
    StyleItem.prototype.el;
    /** @type {?} */
    StyleItem.prototype.styles;
}
var /** @type {?} */ STYLE_MAP = {};
var /** @type {?} */ CLASSES_MAP = {};
var /** @type {?} */ nextId = 0;
var LyTheme2 = /** @class */ (function () {
    function LyTheme2(core, themeName) {
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
        var /** @type {?} */ newClass = this.setUpStyle(id, style);
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
        this.config = this.core.get(nam);
        this._styleMap2.forEach(function (dataStyle) {
            dataStyle.el.innerText = _this._createStyleContent2(dataStyle.styles, dataStyle.id).content;
        });
        this._styleMap.forEach(function (dataStyle) {
            dataStyle.styleElement.innerText = _this.core._createStyleContent(_this.config, dataStyle.style, dataStyle.id);
        });
    };
    /**
     * Add new add a new style sheet
     * @param styles styles
     * @param id unique id for group
     */
    /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id unique id for group
     * @return {?}
     */
    LyTheme2.prototype.addStyleSheet = /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id unique id for group
     * @return {?}
     */
    function (styles, id) {
        var /** @type {?} */ newId = id || '';
        var /** @type {?} */ styleContent = this._createStyleContent2(styles, newId);
        var /** @type {?} */ styleText = this.core.renderer.createText(styleContent.content);
        var /** @type {?} */ styleElement = this.core.renderer.createElement('style');
        this.core.renderer.appendChild(styleElement, styleText);
        this.core.renderer.appendChild(this.core.primaryStyleContainer, styleElement);
        this._styleMap2.set(styleContent.key, {
            id: newId,
            el: styleElement,
            styles: styles
        });
    };
    /**
     * @template T
     * @param {?} styles
     * @param {?} id
     * @return {?}
     */
    LyTheme2.prototype._createStyleContent2 = /**
     * @template T
     * @param {?} styles
     * @param {?} id
     * @return {?}
     */
    function (styles, id) {
        if (typeof styles === 'function') {
            return groupStyleToString(styles(this.config), id);
        }
        else {
            return groupStyleToString(styles, id);
        }
    };
    LyTheme2.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LyTheme2.ctorParameters = function () { return [
        { type: CoreTheme, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_NAME,] },] },
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
    LyTheme2.prototype.core;
}
/**
 * @record
 */
export function Styles2() { }
function Styles2_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [key: string]: Styles2 | string;
    */
}
/**
 * @param {?} styles
 * @param {?} id
 * @return {?}
 */
function groupStyleToString(styles, id) {
    var /** @type {?} */ content = '';
    var /** @type {?} */ newKey = '';
    for (var /** @type {?} */ key in styles) {
        if (styles.hasOwnProperty(key)) {
            newKey += key;
            // if (styleMap.has(key)) {
            //   content += styleMap.get(key);
            // } else {
            var /** @type {?} */ value = styles[key];
            if (typeof value === 'object') {
                var /** @type {?} */ classId = id + capitalizeFirstLetter(key);
                var /** @type {?} */ className = classId in CLASSES_MAP
                    ? CLASSES_MAP[classId]
                    : CLASSES_MAP[classId] = "e" + nextId++;
                var /** @type {?} */ style = styleToString(/** @type {?} */ (value), "." + className);
                // styleMap.set((key), style);
                content += style;
            }
            else {
                console.log('value is string', value);
            }
            // }
        }
    }
    return {
        key: id + newKey,
        content: content
    };
}
/**
 * {color:'red'} to .className{color: red}
 * @param {?} ob
 * @param {?} className
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
                keyAndValue += styleKey + ":" + element + ";";
            }
        }
    }
    var /** @type {?} */ newClassName = '';
    if (parentClassName) {
        newClassName += className.indexOf('&') === 0 ? "" + parentClassName + className.slice(1) : parentClassName + " ." + className;
    }
    else {
        newClassName += className;
    }
    content += newClassName + "{" + keyAndValue + "}";
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
export function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}
var LyClasses = /** @class */ (function () {
    function LyClasses() {
    }
    Object.defineProperty(LyClasses.prototype, "classes", {
        get: /**
         * @return {?}
         */
        function () {
            return CLASSES_MAP;
        },
        enumerable: true,
        configurable: true
    });
    LyClasses.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ LyClasses.ngInjectableDef = i0.defineInjectable({ factory: function LyClasses_Factory() { return new LyClasses(); }, token: LyClasses, providedIn: "root" });
    return LyClasses;
}());
export { LyClasses };
function LyClasses_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyClasses.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyClasses.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVdqRCxxQkFBTSxTQUFTLEdBRVgsRUFBRSxDQUFDO0FBQ1AscUJBQU0sV0FBVyxHQUViLEVBQUUsQ0FBQztBQUNQLHFCQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7O0lBWWIsa0JBQ1MsTUFDNEIsU0FBUztRQURyQyxTQUFJLEdBQUosSUFBSTtzQkFSSixHQUFHO1FBV1YsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7SUFYRCxzQkFBSSw2QkFBTzs7OztRQUFYO1lBQ0UsT0FBTyxXQUFXLENBQUM7U0FDcEI7OztPQUFBOzs7OztJQVVELDZCQUFVOzs7O0lBQVYsVUFBVyxTQUFpQjtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsSUFBSSxTQUFTO2dCQUN4QyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBcUIsQ0FBQztTQUMvQztLQUNGOzs7Ozs7Ozs7SUFDRCw2QkFBVTs7Ozs7Ozs7SUFBVixVQUNFLEdBQVcsRUFDWCxNQUFnQixFQUNoQixLQUFjLEVBQ2QsZ0JBQW1DO1FBRW5DLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0tBQzVJOzs7Ozs7Ozs7SUFDRCxzQ0FBbUI7Ozs7Ozs7O0lBQW5CLFVBQ0UsR0FBVyxFQUNYLE1BQWdCLEVBQ2hCLEtBQWMsRUFDZCxnQkFBbUM7UUFFbkMscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7S0FDOUk7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7Ozs7SUFDSCwyQkFBUTs7Ozs7Ozs7O0lBQVIsVUFBWSxFQUFVLEVBQUUsS0FBZSxFQUFFLEVBQVEsRUFBRSxRQUFpQjtRQUNsRSxxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxRQUFRLEVBQUU7WUFDWixFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQjtRQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sUUFBUSxDQUFDO0tBQ2pCOzs7OztJQUNELDBCQUFPOzs7O0lBQVAsVUFBUSxLQUFhO1FBQ25CLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7Ozs7O0lBQ0Qsa0NBQWU7Ozs7Ozs7SUFBZixVQUFnQixPQUFZLEVBQUUsUUFBbUIsRUFBRSxZQUFvQixFQUFFLFlBQXFCO1FBQzVGLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQzFFOzs7Ozs7OztJQUNELDhCQUFXOzs7Ozs7O0lBQVgsVUFBWSxPQUFZLEVBQUUsUUFBbUIsRUFBRSxRQUFnQixFQUFFLFFBQWlCO1FBQ2hGLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUQsT0FBTyxRQUFRLENBQUM7S0FDakI7Ozs7O0lBQ0QsMkJBQVE7Ozs7SUFBUixVQUFTLEdBQVc7UUFBcEIsaUJBUUM7UUFQQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUztZQUMvQixTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQzVGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUMvQixTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUcsQ0FBQyxDQUFDO0tBQ0o7SUFDRDs7OztPQUlHOzs7Ozs7OztJQUNILGdDQUFhOzs7Ozs7O0lBQWIsVUFBaUIsTUFBOEIsRUFBRSxFQUFXO1FBQzFELHFCQUFNLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3ZCLHFCQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlELHFCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RFLHFCQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO1lBQ3BDLEVBQUUsRUFBRSxLQUFLO1lBQ1QsRUFBRSxFQUFFLFlBQVk7WUFDaEIsTUFBTSxRQUFBO1NBQ1AsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7SUFFRCx1Q0FBb0I7Ozs7OztJQUFwQixVQUF3QixNQUE4QixFQUFFLEVBQVU7UUFDaEUsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLEVBQUU7WUFDaEMsT0FBTyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEO2FBQU07WUFDTCxPQUFPLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN2QztLQUNGOztnQkExR0YsVUFBVTs7OztnQkFsQkYsU0FBUztnREErQmIsUUFBUSxZQUFJLE1BQU0sU0FBQyxhQUFhOzttQkFqQ3JDOztTQXFCYSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUhyQiw0QkFBNEIsTUFBZSxFQUFFLEVBQVU7SUFDckQscUJBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixxQkFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLEtBQUsscUJBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtRQUN4QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEdBQUcsQ0FBQzs7OztZQUlaLHFCQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzdCLHFCQUFNLE9BQU8sR0FBRyxFQUFFLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hELHFCQUFNLFNBQVMsR0FBRyxPQUFPLElBQUksV0FBVztvQkFDeEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBSSxNQUFNLEVBQUksQ0FBQztnQkFDeEMscUJBQU0sS0FBSyxHQUFHLGFBQWEsbUJBQUMsS0FBZ0IsR0FBRSxNQUFJLFNBQVcsQ0FBQyxDQUFDOztnQkFFL0QsT0FBTyxJQUFJLEtBQUssQ0FBQzthQUNsQjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3ZDOztTQUVKO0tBQ0Y7SUFDRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEVBQUUsR0FBRyxNQUFNO1FBQ2hCLE9BQU8sU0FBQTtLQUNSLENBQUM7Q0FDSDs7Ozs7Ozs7QUFLRCx1QkFBdUIsRUFBVSxFQUFFLFNBQWlCLEVBQUUsZUFBd0I7SUFDNUUscUJBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixxQkFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLEtBQUsscUJBQU0sUUFBUSxJQUFJLEVBQUUsRUFBRTtRQUN6QixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDL0IscUJBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsT0FBTyxJQUFJLGFBQWEsbUJBQUMsT0FBa0IsR0FBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDbkU7aUJBQU07Z0JBQ0wsV0FBVyxJQUFPLFFBQVEsU0FBSSxPQUFPLE1BQUcsQ0FBQzthQUMxQztTQUNGO0tBQ0Y7SUFDRCxxQkFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQUksZUFBZSxFQUFFO1FBQ25CLFlBQVksSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRyxlQUFlLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDLENBQUksZUFBZSxVQUFLLFNBQVcsQ0FBQztLQUMvSDtTQUFNO1FBQ0wsWUFBWSxJQUFJLFNBQVMsQ0FBQztLQUMzQjtJQUNELE9BQU8sSUFBTyxZQUFZLFNBQUksV0FBVyxNQUFHLENBQUM7SUFDN0MsT0FBTyxPQUFPLENBQUM7Q0FDaEI7Ozs7OztBQUdELGFBQWEsR0FBVyxFQUFFLElBQVM7SUFDakMscUJBQU0sS0FBSyxHQUFhLElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RSxLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7S0FDN0I7SUFDRCxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLG1CQUFDLEdBQWEsRUFBQyxDQUFDLG1CQUFDLEdBQUcsQ0FBQyxTQUFTLENBQVcsQ0FBQSxDQUFDO0NBQzNFOzs7OztBQUVELE1BQU0sdUJBQXVCLEdBQVc7SUFDdEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLE1BQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBSSxFQUF4QixDQUF3QixDQUFDLENBQUM7Q0FDakU7Ozs7O0FBRUQsTUFBTSxnQ0FBZ0MsR0FBVztJQUMvQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzVDOzs7O0lBTUMsc0JBQUksOEJBQU87Ozs7UUFBWDtZQUNFLE9BQU8sV0FBVyxDQUFDO1NBQ3BCOzs7T0FBQTs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7O29CQWpORDs7U0FrTmEsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICcuL2NvcmUtdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3R5bGUsIFN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBMeVRoZW1lQ29udGFpbmVyIH0gZnJvbSAnLi90aGVtZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW52ZXJ0TWVkaWFRdWVyeSB9IGZyb20gJy4uL21lZGlhL2ludmVydC1tZWRpYS1xdWVyeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVJdGVtIHtcbiAgaWQ6IHN0cmluZztcbiAgZWw6IGFueTtcbiAgc3R5bGVzOiBTdHlsZXNGbjI8YW55PiB8IFN0eWxlczI7XG59XG5cbmNvbnN0IFNUWUxFX01BUDoge1xuICBba2V5OiBzdHJpbmddOiBNYXA8c3RyaW5nLCBTdHlsZUl0ZW0+XG59ID0ge307XG5jb25zdCBDTEFTU0VTX01BUDoge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbn0gPSB7fTtcbmxldCBuZXh0SWQgPSAwO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZUNvbmZpZztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuICBwcmVmaXggPSAnayc7XG4gIHByaXZhdGUgX3N0eWxlTWFwMjogTWFwPHN0cmluZywgU3R5bGVJdGVtPjtcblxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gQ0xBU1NFU19NQVA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29yZTogQ29yZVRoZW1lLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUVfTkFNRSkgdGhlbWVOYW1lXG4gICkge1xuICAgIGlmICh0aGVtZU5hbWUpIHtcbiAgICAgIHRoaXMuc2V0VXBUaGVtZSh0aGVtZU5hbWUpO1xuICAgIH1cbiAgfVxuICBzZXRVcFRoZW1lKHRoZW1lTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5fc3R5bGVNYXAyID0gdGhlbWVOYW1lIGluIFNUWUxFX01BUFxuICAgICAgPyBTVFlMRV9NQVBbdGhlbWVOYW1lXVxuICAgICAgOiBTVFlMRV9NQVBbdGhlbWVOYW1lXSA9IG5ldyBNYXAoKTtcbiAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldCh0aGVtZU5hbWUpO1xuICAgICAgdGhpcy5fc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgRGF0YVN0eWxlPigpO1xuICAgIH1cbiAgfVxuICBzZXRVcFN0eWxlPFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fxLhyZWF0ZVN0eWxlPFQ+KHRoaXMuY29uZmlnLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVNYXAsIG5hbWUsIHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBzZXRVcFN0eWxlU2Vjb25kYXJ5PFQ+KFxuICAgIGtleTogc3RyaW5nLFxuICAgIHN0eWxlczogU3R5bGU8VD4sXG4gICAgbWVkaWE/OiBzdHJpbmcsXG4gICAgaW52ZXJ0TWVkaWFRdWVyeT86IEludmVydE1lZGlhUXVlcnlcbiAgKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29uZmlnLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuY29yZS5fxLhyZWF0ZVN0eWxlPFQ+KHRoaXMuY29uZmlnLCBrZXksIHN0eWxlcywgdGhpcy5fc3R5bGVNYXAsIG5hbWUsIHRoaXMuY29yZS5zZWNvbmRhcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG5ldyBkeW5hbWljIHN0eWxlLCB1c2Ugb25seSB3aXRoaW4gQElucHV0KClcbiAgICogQHBhcmFtIGlkIFVuaXF1ZSBpZFxuICAgKiBAcGFyYW0gc3R5bGUgU3R5bGVzXG4gICAqIEBwYXJhbSBlbCBFbGVtZW50XG4gICAqIEBwYXJhbSBpbnN0YW5jZSBUaGUgaW5zdGFuY2Ugb2YgdGhpcywgdGhpcyByZXBsYWNlcyB0aGUgZXhpc3Rpbmcgc3R5bGUgd2l0aCBhIG5ldyBvbmUgd2hlbiBpdCBjaGFuZ2VzXG4gICAqL1xuICBhZGRTdHlsZTxUPihpZDogc3RyaW5nLCBzdHlsZTogU3R5bGU8VD4sIGVsPzogYW55LCBpbnN0YW5jZT86IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5zZXRVcFN0eWxlPFQ+KGlkLCBzdHlsZSk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWwuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIGNvbG9yT2YodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldCh0aGlzLmNvbmZpZywgdmFsdWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvcmUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzc25hbWUsIG9sZENsYXNzbmFtZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3MoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzczogc3RyaW5nLCBvbGRDbGFzcz86IHN0cmluZykge1xuICAgIHRoaXMudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIHJlbmRlcmVyLCBuZXdDbGFzcywgb2xkQ2xhc3MpO1xuICAgIHJldHVybiBuZXdDbGFzcztcbiAgfVxuICBzZXRUaGVtZShuYW06IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb3JlLmdldChuYW0pO1xuICAgIHRoaXMuX3N0eWxlTWFwMi5mb3JFYWNoKGRhdGFTdHlsZSA9PiB7XG4gICAgICBkYXRhU3R5bGUuZWwuaW5uZXJUZXh0ID0gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihkYXRhU3R5bGUuc3R5bGVzLCBkYXRhU3R5bGUuaWQpLmNvbnRlbnQ7XG4gICAgfSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuZm9yRWFjaCgoZGF0YVN0eWxlKSA9PiB7XG4gICAgICBkYXRhU3R5bGUuc3R5bGVFbGVtZW50LmlubmVyVGV4dCA9IHRoaXMuY29yZS5fY3JlYXRlU3R5bGVDb250ZW50KHRoaXMuY29uZmlnLCBkYXRhU3R5bGUuc3R5bGUsIGRhdGFTdHlsZS5pZCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBuZXcgYWRkIGEgbmV3IHN0eWxlIHNoZWV0XG4gICAqIEBwYXJhbSBzdHlsZXMgc3R5bGVzXG4gICAqIEBwYXJhbSBpZCB1bmlxdWUgaWQgZm9yIGdyb3VwXG4gICAqL1xuICBhZGRTdHlsZVNoZWV0PFQ+KHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiwgaWQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdJZCA9IGlkIHx8ICcnO1xuICAgIGNvbnN0IHN0eWxlQ29udGVudCA9IHRoaXMuX2NyZWF0ZVN0eWxlQ29udGVudDIoc3R5bGVzLCBuZXdJZCk7XG4gICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZVRleHQoc3R5bGVDb250ZW50LmNvbnRlbnQpO1xuICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMuY29yZS5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHRoaXMuY29yZS5yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQsIHN0eWxlVGV4dCk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY29yZS5wcmltYXJ5U3R5bGVDb250YWluZXIsIHN0eWxlRWxlbWVudCk7XG4gICAgdGhpcy5fc3R5bGVNYXAyLnNldChzdHlsZUNvbnRlbnQua2V5LCB7XG4gICAgICBpZDogbmV3SWQsXG4gICAgICBlbDogc3R5bGVFbGVtZW50LFxuICAgICAgc3R5bGVzXG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlU3R5bGVDb250ZW50MjxUPihzdHlsZXM6IFN0eWxlc0ZuMjxUPiB8IFN0eWxlczIsIGlkOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXModGhpcy5jb25maWcpLCBpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzLCBpZCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVzMiB7XG4gIFtrZXk6IHN0cmluZ106IFN0eWxlczIgfCBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBTdHlsZXNGbjI8VD4gPSAoVCkgPT4gU3R5bGVzMjtcblxuZnVuY3Rpb24gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlczogU3R5bGVzMiwgaWQ6IHN0cmluZykge1xuICBsZXQgY29udGVudCA9ICcnO1xuICBsZXQgbmV3S2V5ID0gJyc7XG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgbmV3S2V5ICs9IGtleTtcbiAgICAgIC8vIGlmIChzdHlsZU1hcC5oYXMoa2V5KSkge1xuICAgICAgLy8gICBjb250ZW50ICs9IHN0eWxlTWFwLmdldChrZXkpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjb25zdCBjbGFzc0lkID0gaWQgKyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoa2V5KTtcbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc0lkIGluIENMQVNTRVNfTUFQXG4gICAgICAgICAgPyBDTEFTU0VTX01BUFtjbGFzc0lkXVxuICAgICAgICAgIDogQ0xBU1NFU19NQVBbY2xhc3NJZF0gPSBgZSR7bmV4dElkKyt9YDtcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlVG9TdHJpbmcodmFsdWUgYXMgU3R5bGVzMiwgYC4ke2NsYXNzTmFtZX1gKTtcbiAgICAgICAgICAvLyBzdHlsZU1hcC5zZXQoKGtleSksIHN0eWxlKTtcbiAgICAgICAgICBjb250ZW50ICs9IHN0eWxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBpcyBzdHJpbmcnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXk6IGlkICsgbmV3S2V5LFxuICAgIGNvbnRlbnRcbiAgfTtcbn1cblxuLyoqXG4gKiB7Y29sb3I6J3JlZCd9IHRvIC5jbGFzc05hbWV7Y29sb3I6IHJlZH1cbiAqL1xuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhvYjogT2JqZWN0LCBjbGFzc05hbWU6IHN0cmluZywgcGFyZW50Q2xhc3NOYW1lPzogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBrZXlBbmRWYWx1ZSA9ICcnO1xuICBmb3IgKGNvbnN0IHN0eWxlS2V5IGluIG9iKSB7XG4gICAgaWYgKG9iLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG9iW3N0eWxlS2V5XTtcbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29udGVudCArPSBzdHlsZVRvU3RyaW5nKGVsZW1lbnQgYXMgU3R5bGVzMiwgc3R5bGVLZXksIGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlBbmRWYWx1ZSArPSBgJHtzdHlsZUtleX06JHtlbGVtZW50fTtgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgbmV3Q2xhc3NOYW1lID0gJyc7XG4gIGlmIChwYXJlbnRDbGFzc05hbWUpIHtcbiAgICBuZXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lLmluZGV4T2YoJyYnKSA9PT0gMCA/IGAke3BhcmVudENsYXNzTmFtZX0ke2NsYXNzTmFtZS5zbGljZSgxKX1gIDogYCR7cGFyZW50Q2xhc3NOYW1lfSAuJHtjbGFzc05hbWV9YDtcbiAgfSBlbHNlIHtcbiAgICBuZXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lO1xuICB9XG4gIGNvbnRlbnQgKz0gYCR7bmV3Q2xhc3NOYW1lfXske2tleUFuZFZhbHVlfX1gO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuXG5mdW5jdGlvbiBnZXQob2JqOiBPYmplY3QsIHBhdGg6IGFueSk6IHN0cmluZyB7XG4gIGNvbnN0IF9wYXRoOiBzdHJpbmdbXSA9IHBhdGggaW5zdGFuY2VvZiBBcnJheSA/IHBhdGggOiBwYXRoLnNwbGl0KCc6Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgX3BhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBvYmogPSBvYmpbX3BhdGhbaV1dIHx8IHBhdGg7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnID8gb2JqIGFzIHN0cmluZyA6IG9ialsnZGVmYXVsdCddIGFzIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSHlwaGVuQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKGcpID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUNsYXNzZXMge1xuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4gQ0xBU1NFU19NQVA7XG4gIH1cbn1cbiJdfQ==