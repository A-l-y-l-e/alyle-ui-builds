/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject, Optional } from '@angular/core';
import { LY_THEME_NAME } from './theme-config';
import { CoreTheme } from './core-theme.service';
export class LyTheme2 {
    /**
     * @param {?} core
     * @param {?} themeName
     */
    constructor(core, themeName) {
        this.core = core;
        if (themeName) {
            this.setUpTheme(themeName);
        }
    }
    /**
     * @param {?} themeName
     * @return {?}
     */
    setUpTheme(themeName) {
        if (!this.config) {
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
        this._styleMap.forEach((dataStyle, key) => {
            dataStyle.styleElement.innerText = this.core._createStyleContent(this.config, dataStyle.style, dataStyle.id);
        });
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
    LyTheme2.prototype.core;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvdGhlbWUyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBTWpELE1BQU07Ozs7O0lBSUosWUFDUyxNQUM0QixTQUFTO1FBRHJDLFNBQUksR0FBSixJQUFJO1FBR1gsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7Ozs7O0lBQ0QsVUFBVSxDQUFDLFNBQWlCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBcUIsQ0FBQztTQUMvQztLQUNGOzs7Ozs7Ozs7SUFDRCxVQUFVLENBQ1IsR0FBVyxFQUNYLE1BQWdCLEVBQ2hCLEtBQWMsRUFDZCxnQkFBbUM7UUFFbkMsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7S0FDNUk7Ozs7Ozs7OztJQUNELG1CQUFtQixDQUNqQixHQUFXLEVBQ1gsTUFBZ0IsRUFDaEIsS0FBYyxFQUNkLGdCQUFtQztRQUVuQyx1QkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztLQUM5STs7Ozs7SUFDRCxPQUFPLENBQUMsS0FBYTtRQUNuQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2hDOzs7Ozs7OztJQUNELGVBQWUsQ0FBQyxPQUFZLEVBQUUsUUFBbUIsRUFBRSxZQUFvQixFQUFFLFlBQXFCO1FBQzVGLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQzFFOzs7Ozs7OztJQUNELFdBQVcsQ0FBQyxPQUFZLEVBQUUsUUFBbUIsRUFBRSxRQUFnQixFQUFFLFFBQWlCO1FBQ2hGLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUQsT0FBTyxRQUFRLENBQUM7S0FDakI7Ozs7O0lBQ0QsUUFBUSxDQUFDLEdBQVc7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN4QyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUcsQ0FBQyxDQUFDO0tBQ0o7OztZQXBERixVQUFVOzs7O1lBTEYsU0FBUzs0Q0FZYixRQUFRLFlBQUksTUFBTSxTQUFDLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRHJDLGFBQWEsR0FBVyxFQUFFLElBQVM7SUFDakMsdUJBQU0sS0FBSyxHQUFhLElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RSxLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7S0FDN0I7SUFDRCxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLG1CQUFDLEdBQWEsRUFBQyxDQUFDLG1CQUFDLEdBQUcsQ0FBQyxTQUFTLENBQVcsQ0FBQSxDQUFDO0NBQzNFOzs7OztBQUVELE1BQU0sdUJBQXVCLEdBQVc7SUFDdEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ2pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUVfTkFNRSB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJy4vY29yZS10aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdHlsZSwgU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IEx5VGhlbWVDb250YWluZXIgfSBmcm9tICcuL3RoZW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJbnZlcnRNZWRpYVF1ZXJ5IH0gZnJvbSAnLi4vbWVkaWEvaW52ZXJ0LW1lZGlhLXF1ZXJ5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5VGhlbWUyIHtcbiAgY29uZmlnOiBUaGVtZUNvbmZpZztcbiAgX3N0eWxlTWFwOiBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb3JlOiBDb3JlVGhlbWUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9OQU1FKSB0aGVtZU5hbWVcbiAgKSB7XG4gICAgaWYgKHRoZW1lTmFtZSkge1xuICAgICAgdGhpcy5zZXRVcFRoZW1lKHRoZW1lTmFtZSk7XG4gICAgfVxuICB9XG4gIHNldFVwVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQodGhlbWVOYW1lKTtcbiAgICAgIHRoaXMuX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBTdHlsZTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPFQ+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgIHJldHVybiB0aGlzLmNvcmUuX8S4cmVhdGVTdHlsZTxUPih0aGlzLmNvbmZpZywga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlTWFwLCBuYW1lLCB0aGlzLmNvcmUucHJpbWFyeVN0eWxlQ29udGFpbmVyLCBtZWRpYSwgaW52ZXJ0TWVkaWFRdWVyeSk7XG4gIH1cbiAgc2V0VXBTdHlsZVNlY29uZGFyeTxUPihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBzdHlsZXM6IFN0eWxlPFQ+LFxuICAgIG1lZGlhPzogc3RyaW5nLFxuICAgIGludmVydE1lZGlhUXVlcnk/OiBJbnZlcnRNZWRpYVF1ZXJ5XG4gICkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbmZpZy5uYW1lO1xuICAgIHJldHVybiB0aGlzLmNvcmUuX8S4cmVhdGVTdHlsZTxUPih0aGlzLmNvbmZpZywga2V5LCBzdHlsZXMsIHRoaXMuX3N0eWxlTWFwLCBuYW1lLCB0aGlzLmNvcmUuc2Vjb25kYXJ5U3R5bGVDb250YWluZXIsIG1lZGlhLCBpbnZlcnRNZWRpYVF1ZXJ5KTtcbiAgfVxuICBjb2xvck9mKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXQodGhpcy5jb25maWcsIHZhbHVlKTtcbiAgfVxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb3JlLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3NuYW1lLCBvbGRDbGFzc25hbWUpO1xuICB9XG4gIHVwZGF0ZUNsYXNzKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3M6IHN0cmluZywgb2xkQ2xhc3M/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCByZW5kZXJlciwgbmV3Q2xhc3MsIG9sZENsYXNzKTtcbiAgICByZXR1cm4gbmV3Q2xhc3M7XG4gIH1cbiAgc2V0VGhlbWUobmFtOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29yZS5nZXQobmFtKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5mb3JFYWNoKChkYXRhU3R5bGUsIGtleSkgPT4ge1xuICAgICAgZGF0YVN0eWxlLnN0eWxlRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmNvcmUuX2NyZWF0ZVN0eWxlQ29udGVudCh0aGlzLmNvbmZpZywgZGF0YVN0eWxlLnN0eWxlLCBkYXRhU3R5bGUuaWQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldChvYmo6IE9iamVjdCwgcGF0aDogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgX3BhdGg6IHN0cmluZ1tdID0gcGF0aCBpbnN0YW5jZW9mIEFycmF5ID8gcGF0aCA6IHBhdGguc3BsaXQoJzonKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIG9iaiA9IG9ialtfcGF0aFtpXV0gfHwgcGF0aDtcbiAgfVxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgPyBvYmogYXMgc3RyaW5nIDogb2JqWydkZWZhdWx0J10gYXMgc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9IeXBoZW5DYXNlKHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAoZykgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKTtcbn1cbiJdfQ==