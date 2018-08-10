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
const /** @type {?} */ STYLE_MAP = {};
const /** @type {?} */ CLASSES_MAP = {};
let /** @type {?} */ nextId = 0;
export class LyTheme2 {
    /**
     * @param {?} core
     * @param {?} themeName
     */
    constructor(core, themeName) {
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
        const /** @type {?} */ newClass = this.setUpStyle(id, style);
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
        this.config = this.core.get(nam);
        this._styleMap2.forEach(dataStyle => {
            dataStyle.el.innerText = this._createStyleContent2(dataStyle.styles, dataStyle.id).content;
        });
        this._styleMap.forEach((dataStyle) => {
            dataStyle.styleElement.innerText = this.core._createStyleContent(this.config, dataStyle.style, dataStyle.id);
        });
    }
    /**
     * Add new add a new style sheet
     * @template T
     * @param {?} styles styles
     * @param {?=} id unique id for group
     * @return {?}
     */
    addStyleSheet(styles, id) {
        const /** @type {?} */ newId = id || '';
        const /** @type {?} */ styleContent = this._createStyleContent2(styles, newId);
        const /** @type {?} */ styleText = this.core.renderer.createText(styleContent.content);
        const /** @type {?} */ styleElement = this.core.renderer.createElement('style');
        this.core.renderer.appendChild(styleElement, styleText);
        this.core.renderer.appendChild(this.core.primaryStyleContainer, styleElement);
        this._styleMap2.set(styleContent.key, {
            id: newId,
            el: styleElement,
            styles
        });
    }
    /**
     * @template T
     * @param {?} styles
     * @param {?} id
     * @return {?}
     */
    _createStyleContent2(styles, id) {
        if (typeof styles === 'function') {
            return groupStyleToString(styles(this.config), id);
        }
        else {
            return groupStyleToString(styles, id);
        }
    }
}
LyTheme2.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LyTheme2.ctorParameters = () => [
    { type: CoreTheme, },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_NAME,] },] },
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
    let /** @type {?} */ content = '';
    let /** @type {?} */ newKey = '';
    for (const /** @type {?} */ key in styles) {
        if (styles.hasOwnProperty(key)) {
            newKey += key;
            // if (styleMap.has(key)) {
            //   content += styleMap.get(key);
            // } else {
            const /** @type {?} */ value = styles[key];
            if (typeof value === 'object') {
                const /** @type {?} */ classId = id + capitalizeFirstLetter(key);
                const /** @type {?} */ className = classId in CLASSES_MAP
                    ? CLASSES_MAP[classId]
                    : CLASSES_MAP[classId] = `e${nextId++}`;
                const /** @type {?} */ style = styleToString(/** @type {?} */ (value), `.${className}`);
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
        content
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
    let /** @type {?} */ content = '';
    let /** @type {?} */ keyAndValue = '';
    for (const /** @type {?} */ styleKey in ob) {
        if (ob.hasOwnProperty(styleKey)) {
            const /** @type {?} */ element = ob[styleKey];
            if (typeof element === 'object') {
                content += styleToString(/** @type {?} */ (element), styleKey, className);
            }
            else {
                keyAndValue += `${styleKey}:${element};`;
            }
        }
    }
    let /** @type {?} */ newClassName = '';
    if (parentClassName) {
        newClassName += className.indexOf('&') === 0 ? `${parentClassName}${className.slice(1)}` : `${parentClassName} .${className}`;
    }
    else {
        newClassName += className;
    }
    content += `${newClassName}{${keyAndValue}}`;
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
export function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}
export class LyClasses {
    /**
     * @return {?}
     */
    get classes() {
        return CLASSES_MAP;
    }
}
LyClasses.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ LyClasses.ngInjectableDef = i0.defineInjectable({ factory: function LyClasses_Factory() { return new LyClasses(); }, token: LyClasses, providedIn: "root" });
function LyClasses_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyClasses.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyClasses.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQVdqRCx1QkFBTSxTQUFTLEdBRVgsRUFBRSxDQUFDO0FBQ1AsdUJBQU0sV0FBVyxHQUViLEVBQUUsQ0FBQztBQUNQLHFCQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFZixNQUFNOzs7OztJQVVKLFlBQ1MsTUFDNEIsU0FBUztRQURyQyxTQUFJLEdBQUosSUFBSTtzQkFSSixHQUFHO1FBV1YsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7Ozs7SUFYRCxJQUFJLE9BQU87UUFDVCxPQUFPLFdBQVcsQ0FBQztLQUNwQjs7Ozs7SUFVRCxVQUFVLENBQUMsU0FBaUI7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLElBQUksU0FBUztnQkFDeEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXFCLENBQUM7U0FDL0M7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QUcsQ0FBQyxTQUFTLENBQVcsQ0FBQSxDQUFDO0NBQzNFOzs7OztBQUVELE1BQU0sdUJBQXVCLEdBQVc7SUFDdEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ2pFOzs7OztBQUVELE1BQU0sZ0NBQWdDLEdBQVc7SUFDL0MsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM1QztBQUtELE1BQU07Ozs7SUFDSixJQUFJLE9BQU87UUFDVCxPQUFPLFdBQVcsQ0FBQztLQUNwQjs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSwgU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IEx5VGhlbWVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUl0ZW0ge1xuICBpZDogc3RyaW5nO1xuICBlbDogYW55O1xuICBzdHlsZXM6IFN0eWxlc0ZuMjxhbnk+IHwgU3R5bGVzMjtcbn1cblxuY29uc3QgU1RZTEVfTUFQOiB7XG4gIFtrZXk6IHN0cmluZ106IE1hcDxzdHJpbmcsIFN0eWxlSXRlbT5cbn0gPSB7fTtcbmNvbnN0IENMQVNTRVNfTUFQOiB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xufSA9IHt9O1xubGV0IG5leHRJZCA9IDA7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZTIge1xuICBjb25maWc6IFRoZW1lQ29uZmlnO1xuICBfc3R5bGVNYXA6IE1hcDxzdHJpbmcsIERhdGFTdHlsZT47XG4gIHByZWZpeCA9ICdrJztcbiAgcHJpdmF0ZSBfc3R5bGVNYXAyOiBNYXA8c3RyaW5nLCBTdHlsZUl0ZW0+O1xuXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBDTEFTU0VTX01BUDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWVcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLl9zdHlsZU1hcDIgPSB0aGVtZU5hbWUgaW4gU1RZTEVfTUFQXG4gICAgICA/IFNUWUxFX01BUFt0aGVtZU5hbWVdXG4gICAgICA6IFNUWUxFX01BUFt0aGVtZU5hbWVdID0gbmV3IE1hcCgpO1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KHRoZW1lTmFtZSk7XG4gICAgICB0aGlzLl9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+KCk7XG4gICAgfVxuICB9XG4gIHNldFVwU3R5bGU8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/EuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgbWVkaWEsIGludmVydE1lZGlhUXVlcnkpO1xuICB9XG4gIHNldFVwU3R5bGVTZWNvbmRhcnk8VD4oXG4gICAga2V5OiBzdHJpbmcsXG4gICAgc3R5bGVzOiBTdHlsZTxUPixcbiAgICBtZWRpYT86IHN0cmluZyxcbiAgICBpbnZlcnRNZWRpYVF1ZXJ5PzogSW52ZXJ0TWVkaWFRdWVyeVxuICApIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5jb25maWcubmFtZTtcbiAgICByZXR1cm4gdGhpcy5jb3JlLl/EuHJlYXRlU3R5bGU8VD4odGhpcy5jb25maWcsIGtleSwgc3R5bGVzLCB0aGlzLl9zdHlsZU1hcCwgbmFtZSwgdGhpcy5jb3JlLnNlY29uZGFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbmV3IGR5bmFtaWMgc3R5bGUsIHVzZSBvbmx5IHdpdGhpbiBASW5wdXQoKVxuICAgKiBAcGFyYW0gaWQgVW5pcXVlIGlkXG4gICAqIEBwYXJhbSBzdHlsZSBTdHlsZXNcbiAgICogQHBhcmFtIGVsIEVsZW1lbnRcbiAgICogQHBhcmFtIGluc3RhbmNlIFRoZSBpbnN0YW5jZSBvZiB0aGlzLCB0aGlzIHJlcGxhY2VzIHRoZSBleGlzdGluZyBzdHlsZSB3aXRoIGEgbmV3IG9uZSB3aGVuIGl0IGNoYW5nZXNcbiAgICovXG4gIGFkZFN0eWxlPFQ+KGlkOiBzdHJpbmcsIHN0eWxlOiBTdHlsZTxUPiwgZWw/OiBhbnksIGluc3RhbmNlPzogc3RyaW5nKSB7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLnNldFVwU3R5bGU8VD4oaWQsIHN0eWxlKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbC5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgY29sb3JPZih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMuY29uZmlnLCB2YWx1ZSk7XG4gIH1cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuY29yZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzbmFtZSwgb2xkQ2xhc3NuYW1lKTtcbiAgfVxuICB1cGRhdGVDbGFzcyhlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzPzogc3RyaW5nKSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgcmVuZGVyZXIsIG5ld0NsYXNzLCBvbGRDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0NsYXNzO1xuICB9XG4gIHNldFRoZW1lKG5hbTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvcmUuZ2V0KG5hbSk7XG4gICAgdGhpcy5fc3R5bGVNYXAyLmZvckVhY2goZGF0YVN0eWxlID0+IHtcbiAgICAgIGRhdGFTdHlsZS5lbC5pbm5lclRleHQgPSB0aGlzLl9jcmVhdGVTdHlsZUNvbnRlbnQyKGRhdGFTdHlsZS5zdHlsZXMsIGRhdGFTdHlsZS5pZCkuY29udGVudDtcbiAgICB9KTtcbiAgICB0aGlzLl9zdHlsZU1hcC5mb3JFYWNoKChkYXRhU3R5bGUpID0+IHtcbiAgICAgIGRhdGFTdHlsZS5zdHlsZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5jb3JlLl9jcmVhdGVTdHlsZUNvbnRlbnQodGhpcy5jb25maWcsIGRhdGFTdHlsZS5zdHlsZSwgZGF0YVN0eWxlLmlkKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQWRkIG5ldyBhZGQgYSBuZXcgc3R5bGUgc2hlZXRcbiAgICogQHBhcmFtIHN0eWxlcyBzdHlsZXNcbiAgICogQHBhcmFtIGlkIHVuaXF1ZSBpZCBmb3IgZ3JvdXBcbiAgICovXG4gIGFkZFN0eWxlU2hlZXQ8VD4oc3R5bGVzOiBTdHlsZXNGbjI8VD4gfCBTdHlsZXMyLCBpZD86IHN0cmluZykge1xuICAgIGNvbnN0IG5ld0lkID0gaWQgfHwgJyc7XG4gICAgY29uc3Qgc3R5bGVDb250ZW50ID0gdGhpcy5fY3JlYXRlU3R5bGVDb250ZW50MihzdHlsZXMsIG5ld0lkKTtcbiAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLmNvcmUucmVuZGVyZXIuY3JlYXRlVGV4dChzdHlsZUNvbnRlbnQuY29udGVudCk7XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5jb3JlLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgdGhpcy5jb3JlLnJlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCwgc3R5bGVUZXh0KTtcbiAgICB0aGlzLmNvcmUucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jb3JlLnByaW1hcnlTdHlsZUNvbnRhaW5lciwgc3R5bGVFbGVtZW50KTtcbiAgICB0aGlzLl9zdHlsZU1hcDIuc2V0KHN0eWxlQ29udGVudC5rZXksIHtcbiAgICAgIGlkOiBuZXdJZCxcbiAgICAgIGVsOiBzdHlsZUVsZW1lbnQsXG4gICAgICBzdHlsZXNcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVTdHlsZUNvbnRlbnQyPFQ+KHN0eWxlczogU3R5bGVzRm4yPFQ+IHwgU3R5bGVzMiwgaWQ6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZ3JvdXBTdHlsZVRvU3RyaW5nKHN0eWxlcyh0aGlzLmNvbmZpZyksIGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdyb3VwU3R5bGVUb1N0cmluZyhzdHlsZXMsIGlkKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMyIHtcbiAgW2tleTogc3RyaW5nXTogU3R5bGVzMiB8IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIFN0eWxlc0ZuMjxUPiA9IChUKSA9PiBTdHlsZXMyO1xuXG5mdW5jdGlvbiBncm91cFN0eWxlVG9TdHJpbmcoc3R5bGVzOiBTdHlsZXMyLCBpZDogc3RyaW5nKSB7XG4gIGxldCBjb250ZW50ID0gJyc7XG4gIGxldCBuZXdLZXkgPSAnJztcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBuZXdLZXkgKz0ga2V5O1xuICAgICAgLy8gaWYgKHN0eWxlTWFwLmhhcyhrZXkpKSB7XG4gICAgICAvLyAgIGNvbnRlbnQgKz0gc3R5bGVNYXAuZ2V0KGtleSk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnN0IGNsYXNzSWQgPSBpZCArIGNhcGl0YWxpemVGaXJzdExldHRlcihrZXkpO1xuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzSWQgaW4gQ0xBU1NFU19NQVBcbiAgICAgICAgICA/IENMQVNTRVNfTUFQW2NsYXNzSWRdXG4gICAgICAgICAgOiBDTEFTU0VTX01BUFtjbGFzc0lkXSA9IGBlJHtuZXh0SWQrK31gO1xuICAgICAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVUb1N0cmluZyh2YWx1ZSBhcyBTdHlsZXMyLCBgLiR7Y2xhc3NOYW1lfWApO1xuICAgICAgICAgIC8vIHN0eWxlTWFwLnNldCgoa2V5KSwgc3R5bGUpO1xuICAgICAgICAgIGNvbnRlbnQgKz0gc3R5bGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIGlzIHN0cmluZycsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgLy8gfVxuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGtleTogaWQgKyBuZXdLZXksXG4gICAgY29udGVudFxuICB9O1xufVxuXG4vKipcbiAqIHtjb2xvcjoncmVkJ30gdG8gLmNsYXNzTmFtZXtjb2xvcjogcmVkfVxuICovXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nKG9iOiBPYmplY3QsIGNsYXNzTmFtZTogc3RyaW5nLCBwYXJlbnRDbGFzc05hbWU/OiBzdHJpbmcpIHtcbiAgbGV0IGNvbnRlbnQgPSAnJztcbiAgbGV0IGtleUFuZFZhbHVlID0gJyc7XG4gIGZvciAoY29uc3Qgc3R5bGVLZXkgaW4gb2IpIHtcbiAgICBpZiAob2IuaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gb2Jbc3R5bGVLZXldO1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb250ZW50ICs9IHN0eWxlVG9TdHJpbmcoZWxlbWVudCBhcyBTdHlsZXMyLCBzdHlsZUtleSwgY2xhc3NOYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleUFuZFZhbHVlICs9IGAke3N0eWxlS2V5fToke2VsZW1lbnR9O2A7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCBuZXdDbGFzc05hbWUgPSAnJztcbiAgaWYgKHBhcmVudENsYXNzTmFtZSkge1xuICAgIG5ld0NsYXNzTmFtZSArPSBjbGFzc05hbWUuaW5kZXhPZignJicpID09PSAwID8gYCR7cGFyZW50Q2xhc3NOYW1lfSR7Y2xhc3NOYW1lLnNsaWNlKDEpfWAgOiBgJHtwYXJlbnRDbGFzc05hbWV9IC4ke2NsYXNzTmFtZX1gO1xuICB9IGVsc2Uge1xuICAgIG5ld0NsYXNzTmFtZSArPSBjbGFzc05hbWU7XG4gIH1cbiAgY29udGVudCArPSBgJHtuZXdDbGFzc05hbWV9eyR7a2V5QW5kVmFsdWV9fWA7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG9ialtfcGF0aFtpXV0gfHwgcGF0aDtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5Q2xhc3NlcyB7XG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiBDTEFTU0VTX01BUDtcbiAgfVxufVxuIl19