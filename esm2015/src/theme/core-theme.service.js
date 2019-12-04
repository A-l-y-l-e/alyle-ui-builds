import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject, Renderer2, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { LY_THEME, LY_THEME_GLOBAL_VARIABLES } from './theme-config';
import { DOCUMENT } from '@angular/common';
import { Platform } from '../platform';
import { mergeThemes } from '../parse';
import * as i0 from "@angular/core";
import * as i1 from "./theme-config";
import * as i2 from "@angular/common";
let CoreTheme = class CoreTheme {
    constructor(themeConfig, globalVariables, rendererFactory, _document) {
        this.rendererFactory = rendererFactory;
        this.themes = new Set();
        this._themeMap = new Map();
        this._styleMap = new Map();
        this._document = _document;
        if (Platform.isBrowser) {
            // Clean
            const nodes = this._document.body.querySelectorAll('ly-s-c');
            if (nodes.length) {
                for (let index = 0; index < nodes.length; index++) {
                    const element = nodes.item(index);
                    this._document.body.removeChild(element);
                }
            }
        }
        this.firstElement = this._document.body.firstChild;
        this.renderer = this.rendererFactory.createRenderer(null, {
            id: 'ly',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {}
        });
        if (themeConfig) {
            this.initializeTheme(themeConfig, globalVariables);
        }
    }
    initializeTheme(themeConfig, globalVariables) {
        const allThemes = Array.isArray(themeConfig) ? themeConfig : [themeConfig];
        const themes = new Map();
        allThemes.forEach(item => {
            // Do not install themes that are already initialized.
            if (this.hasTheme(item.name)) {
                throw new Error(`Theme '${item.name}' is already initialized.`);
            }
            if (themes.has(item.name)) {
                themes.get(item.name).push(item);
            }
            else {
                themes.set(item.name, [item]);
            }
        });
        themes.forEach((items) => {
            if (globalVariables) {
                items.push(globalVariables);
            }
            if (items.length > 1) {
                mergeThemes(items[0], ...items.slice(1));
            }
            this._add(items[0]);
            this.themes.add(items[0].name);
        });
    }
    /**
     * add new theme
     * @param theme: ThemeVariables
     */
    _add(theme) {
        this._themeMap.set(theme.name, theme);
        this._styleMap.set(theme.name, new Map());
    }
    hasTheme(theme) {
        const name = typeof theme === 'string' ? theme : theme.name;
        return this._themeMap.has(name);
    }
    get(name) {
        return this._themeMap.get(name);
    }
    updateClassName(element, renderer, newClassname, oldClassname) {
        if (oldClassname) {
            renderer.removeClass(element, oldClassname);
        }
        renderer.addClass(element, newClassname);
    }
};
CoreTheme.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_GLOBAL_VARIABLES,] }] },
    { type: RendererFactory2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
CoreTheme.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.ɵɵinject(i1.LY_THEME, 8), i0.ɵɵinject(i1.LY_THEME_GLOBAL_VARIABLES, 8), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i2.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
CoreTheme = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(LY_THEME)),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(LY_THEME_GLOBAL_VARIABLES)),
    tslib_1.__param(3, Inject(DOCUMENT))
], CoreTheme);
export { CoreTheme };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQWUsUUFBUSxFQUFrQix5QkFBeUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFLdkMsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztJQVVwQixZQUNnQyxXQUF3QyxFQUN2QixlQUE0QixFQUNuRSxlQUFpQyxFQUN2QixTQUFjO1FBRHhCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQVBsQyxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUM1QixjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQTBCLENBQUM7UUFDOUMsY0FBUyxHQUFHLElBQUksR0FBRyxFQUFrQyxDQUFDO1FBUTVELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRTNCLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixRQUFRO1lBQ1IsTUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkUsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNoQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxL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O1FBQzVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQVksRUFBRSxRQUFtQixFQUFFLFlBQW9CLEVBQUUsWUFBcUI7UUFDNUYsSUFBSSxZQUFZLEVBQUU7WUFDaEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0M7UUFDRCxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBRUYsQ0FBQTs7NENBdkZJLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs0Q0FDM0IsUUFBUSxZQUFJLE1BQU0sU0FBQyx5QkFBeUI7WUFDcEIsZ0JBQWdCOzRDQUN4QyxNQUFNLFNBQUMsUUFBUTs7O0FBZFAsU0FBUztJQUhyQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBWUcsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDNUIsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUU3QyxtQkFBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7R0FkUixTQUFTLENBa0dyQjtTQWxHWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIExZX1RIRU1FLCBUaGVtZVZhcmlhYmxlcywgTFlfVEhFTUVfR0xPQkFMX1ZBUklBQkxFUyB9IGZyb20gJy4vdGhlbWUtY29uZmlnJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhdGFTdHlsZSB9IGZyb20gJy4uL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBtZXJnZVRoZW1lcyB9IGZyb20gJy4uL3BhcnNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29yZVRoZW1lIHtcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgbWVkaWFTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHByaW1hcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHNlY29uZGFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgZmlyc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcmVhZG9ubHkgdGhlbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX3RoZW1lTWFwID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lVmFyaWFibGVzPigpO1xuICBwcml2YXRlIF9zdHlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBEYXRhU3R5bGU+PigpO1xuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUUpIHRoZW1lQ29uZmlnOiBUaGVtZUNvbmZpZ1tdIHwgVGhlbWVDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTKSBnbG9iYWxWYXJpYWJsZXM6IFRoZW1lQ29uZmlnLFxuICAgIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIHRoaXMuX2RvY3VtZW50ID0gX2RvY3VtZW50O1xuXG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgLy8gQ2xlYW5cbiAgICAgIGNvbnN0IG5vZGVzOiBOb2RlTGlzdCA9IHRoaXMuX2RvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnbHktcy1jJyk7XG4gICAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZXMuaXRlbShpbmRleCkhO1xuICAgICAgICAgICh0aGlzLl9kb2N1bWVudC5ib2R5IGFzIEhUTUxCb2R5RWxlbWVudCkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmZpcnN0RWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCEgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwge1xuICAgICAgaWQ6ICdseScsXG4gICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSk7XG5cbiAgICBpZiAodGhlbWVDb25maWcpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVRoZW1lKHRoZW1lQ29uZmlnLCBnbG9iYWxWYXJpYWJsZXMpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpemVUaGVtZSh0aGVtZUNvbmZpZzogVGhlbWVDb25maWdbXSB8IFRoZW1lQ29uZmlnLCBnbG9iYWxWYXJpYWJsZXM6IFRoZW1lQ29uZmlnKSB7XG5cbiAgICBjb25zdCBhbGxUaGVtZXMgPSBBcnJheS5pc0FycmF5KHRoZW1lQ29uZmlnKSA/IHRoZW1lQ29uZmlnIDogW3RoZW1lQ29uZmlnXTtcblxuICAgIGNvbnN0IHRoZW1lcyA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZUNvbmZpZ1tdPigpO1xuXG4gICAgYWxsVGhlbWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAvLyBEbyBub3QgaW5zdGFsbCB0aGVtZXMgdGhhdCBhcmUgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgICAgIGlmICh0aGlzLmhhc1RoZW1lKGl0ZW0ubmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVtZSAnJHtpdGVtLm5hbWV9JyBpcyBhbHJlYWR5IGluaXRpYWxpemVkLmApO1xuICAgICAgfVxuICAgICAgaWYgKHRoZW1lcy5oYXMoaXRlbS5uYW1lKSkge1xuICAgICAgICB0aGVtZXMuZ2V0KGl0ZW0ubmFtZSkhLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVtZXMuc2V0KGl0ZW0ubmFtZSwgW2l0ZW1dKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoZW1lcy5mb3JFYWNoKChpdGVtcykgPT4ge1xuICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICBpdGVtcy5wdXNoKGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICBtZXJnZVRoZW1lcyhpdGVtc1swXSwgLi4uaXRlbXMuc2xpY2UoMSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWRkKGl0ZW1zWzBdIGFzIGFueSk7XG4gICAgICB0aGlzLnRoZW1lcy5hZGQoaXRlbXNbMF0ubmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogYWRkIG5ldyB0aGVtZVxuICAgKiBAcGFyYW0gdGhlbWU6IFRoZW1lVmFyaWFibGVzXG4gICAqL1xuICBwcml2YXRlIF9hZGQodGhlbWU6IFRoZW1lVmFyaWFibGVzKSB7XG4gICAgdGhpcy5fdGhlbWVNYXAuc2V0KHRoZW1lLm5hbWUsIHRoZW1lKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5zZXQodGhlbWUubmFtZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGhhc1RoZW1lKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyB8IHN0cmluZykge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlb2YgdGhlbWUgPT09ICdzdHJpbmcnID8gdGhlbWUgOiB0aGVtZS5uYW1lO1xuICAgIHJldHVybiB0aGlzLl90aGVtZU1hcC5oYXMobmFtZSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAob2xkQ2xhc3NuYW1lKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvbGRDbGFzc25hbWUpO1xuICAgIH1cbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuZXdDbGFzc25hbWUpO1xuICB9XG5cbn1cbiJdfQ==