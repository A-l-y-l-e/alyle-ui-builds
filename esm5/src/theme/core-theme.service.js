/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { LY_THEME, LY_THEME_GLOBAL_VARIABLES } from './theme-config';
import { DOCUMENT } from '@angular/common';
import { Platform } from '../platform';
import { mergeDeep } from '../style-utils';
import * as i0 from "@angular/core";
import * as i1 from "./theme-config";
import * as i2 from "@angular/common";
var CoreTheme = /** @class */ (function () {
    function CoreTheme(themeConfig, globalVariables, rendererFactory, _document) {
        var _this = this;
        this.rendererFactory = rendererFactory;
        this.themes = new Set();
        this._themeMap = new Map();
        this._styleMap = new Map();
        if (!themeConfig) {
            throw new Error('LY_THEME undefined');
        }
        this.renderer = this.rendererFactory.createRenderer(null, {
            id: 'ly',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {}
        });
        if (Platform.isBrowser) {
            /** @type {?} */
            var nodes = _document.body.querySelectorAll('ly-s-c');
            if (nodes.length) {
                for (var index = 0; index < nodes.length; index++) {
                    /** @type {?} */
                    var element = nodes.item(index);
                    ((/** @type {?} */ (_document.body))).removeChild(element);
                }
            }
        }
        this.firstElement = _document.body.firstChild;
        if (Array.isArray(themeConfig)) {
            themeConfig.forEach(function (item) {
                if (globalVariables) {
                    mergeDeep(item, globalVariables);
                }
                _this.add((/** @type {?} */ (item)));
                _this.themes.add(item.name);
            });
        }
        else {
            if (globalVariables) {
                mergeDeep(themeConfig, globalVariables);
            }
            this.add((/** @type {?} */ (themeConfig)));
            this.themes.add(themeConfig.name);
        }
    }
    /**
     * add new theme
     * @param theme: ThemeVariables
     */
    /**
     * add new theme
     * @param {?} theme
     * @return {?}
     */
    CoreTheme.prototype.add = /**
     * add new theme
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this._themeMap.set(theme.name, theme);
        this._styleMap.set(theme.name, new Map());
    };
    /**
     * @param {?} name
     * @return {?}
     */
    CoreTheme.prototype.get = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this._themeMap.get(name);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    CoreTheme.prototype.getStyleMap = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this._styleMap.get(name);
    };
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClassname
     * @param {?=} oldClassname
     * @return {?}
     */
    CoreTheme.prototype.updateClassName = /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClassname
     * @param {?=} oldClassname
     * @return {?}
     */
    function (element, renderer, newClassname, oldClassname) {
        if (oldClassname) {
            renderer.removeClass(element, oldClassname);
        }
        renderer.addClass(element, newClassname);
    };
    CoreTheme.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CoreTheme.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_GLOBAL_VARIABLES,] }] },
        { type: RendererFactory2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ CoreTheme.ngInjectableDef = i0.defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.inject(i1.LY_THEME, 8), i0.inject(i1.LY_THEME_GLOBAL_VARIABLES, 8), i0.inject(i0.RendererFactory2), i0.inject(i2.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
    return CoreTheme;
}());
export { CoreTheme };
if (false) {
    /** @type {?} */
    CoreTheme.prototype.renderer;
    /** @type {?} */
    CoreTheme.prototype.mediaStyleContainer;
    /** @type {?} */
    CoreTheme.prototype.primaryStyleContainer;
    /** @type {?} */
    CoreTheme.prototype.secondaryStyleContainer;
    /** @type {?} */
    CoreTheme.prototype.firstElement;
    /** @type {?} */
    CoreTheme.prototype.themes;
    /** @type {?} */
    CoreTheme.prototype._themeMap;
    /** @type {?} */
    CoreTheme.prototype._styleMap;
    /** @type {?} */
    CoreTheme.prototype.rendererFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBZSxRQUFRLEVBQWtCLHlCQUF5QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTNDO0lBWUUsbUJBQ2dDLFdBQXdDLEVBQ3ZCLGVBQTRCLEVBQ25FLGVBQWlDLEVBQ3ZCLFNBQWM7UUFKbEMsaUJBd0NDO1FBckNTLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQU5sQyxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUM1QixjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQTBCLENBQUM7UUFDOUMsY0FBUyxHQUFHLElBQUksR0FBRyxFQUFrQyxDQUFDO1FBTzVELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDeEQsRUFBRSxFQUFFLElBQUk7WUFDUixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxRQUFRLENBQUMsU0FB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b0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIExZX1RIRU1FLCBUaGVtZVZhcmlhYmxlcywgTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBtZXJnZURlZXAgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVUaGVtZSB7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIG1lZGlhU3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcmltYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIGZpcnN0RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHJlYWRvbmx5IHRoZW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIF90aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZVZhcmlhYmxlcz4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgRGF0YVN0eWxlPj4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRSkgdGhlbWVDb25maWc6IFRoZW1lQ29uZmlnW10gfCBUaGVtZUNvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMpIGdsb2JhbFZhcmlhYmxlczogVGhlbWVDb25maWcsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgaWYgKCF0aGVtZUNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMWV9USEVNRSB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIHtcbiAgICAgIGlkOiAnbHknLFxuICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICAgIHN0eWxlczogW10sXG4gICAgICBkYXRhOiB7fVxuICAgIH0pO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IG5vZGVzOiBOb2RlTGlzdCA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2x5LXMtYycpO1xuICAgICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IG5vZGVzLml0ZW0oaW5kZXgpO1xuICAgICAgICAgIChfZG9jdW1lbnQuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQpLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmlyc3RFbGVtZW50ID0gX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGVtZUNvbmZpZykpIHtcbiAgICAgIHRoZW1lQ29uZmlnLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMpIHtcbiAgICAgICAgICBtZXJnZURlZXAoaXRlbSwgZ2xvYmFsVmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZChpdGVtIGFzIGFueSk7XG4gICAgICAgIHRoaXMudGhlbWVzLmFkZChpdGVtLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChnbG9iYWxWYXJpYWJsZXMpIHtcbiAgICAgICAgbWVyZ2VEZWVwKHRoZW1lQ29uZmlnLCBnbG9iYWxWYXJpYWJsZXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5hZGQodGhlbWVDb25maWcgYXMgYW55KTtcbiAgICAgIHRoaXMudGhlbWVzLmFkZCh0aGVtZUNvbmZpZy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYWRkIG5ldyB0aGVtZVxuICAgKiBAcGFyYW0gdGhlbWU6IFRoZW1lVmFyaWFibGVzXG4gICAqL1xuICBhZGQodGhlbWU6IFRoZW1lVmFyaWFibGVzKSB7XG4gICAgdGhpcy5fdGhlbWVNYXAuc2V0KHRoZW1lLm5hbWUsIHRoZW1lKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5zZXQodGhlbWUubmFtZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVNYXAuZ2V0KG5hbWUpO1xuICB9XG4gIGdldFN0eWxlTWFwKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZU1hcC5nZXQobmFtZSk7XG4gIH1cblxuICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudDogYW55LCByZW5kZXJlcjogUmVuZGVyZXIyLCBuZXdDbGFzc25hbWU6IHN0cmluZywgb2xkQ2xhc3NuYW1lPzogc3RyaW5nKSB7XG4gICAgaWYgKG9sZENsYXNzbmFtZSkge1xuICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb2xkQ2xhc3NuYW1lKTtcbiAgICB9XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgbmV3Q2xhc3NuYW1lKTtcbiAgfVxuXG59XG4iXX0=