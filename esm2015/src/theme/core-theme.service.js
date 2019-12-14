import * as tslib_1 from "tslib";
import { Injectable, Inject, Renderer2, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '../platform';
import { mergeThemes } from '../style-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
let CoreTheme = class CoreTheme {
    constructor(rendererFactory, _document) {
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
    }
    initializeTheme(themeConfig, globalVariables) {
        const allThemes = Array.isArray(themeConfig) ? themeConfig : [themeConfig];
        const themes = new Map();
        allThemes.forEach(item => {
            // Do not install themes that are already initialized.
            if (this.hasTheme(item.name)) {
                // throw new Error(`Theme '${item.name}' is already initialized.`);
                // }
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
    { type: RendererFactory2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
CoreTheme.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
CoreTheme = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(1, Inject(DOCUMENT))
], CoreTheme);
export { CoreTheme };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSzdDLElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFVcEIsWUFDVSxlQUFpQyxFQUN2QixTQUFjO1FBRHhCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUxsQyxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUM1QixjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQTBCLENBQUM7UUFDOUMsY0FBUyxHQUFHLElBQUksR0FBRyxFQUFrQyxDQUFDO1FBTTVELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRTNCLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixRQUFRO1lBQ1IsTUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkUsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNoQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDakQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFNB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QjtRQUM1RixJQUFJLFlBQVksRUFBRTtZQUNoQixRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztTQUM3QztRQUNELFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FFRixDQUFBOztZQWxGNEIsZ0JBQWdCOzRDQUN4QyxNQUFNLFNBQUMsUUFBUTs7O0FBWlAsU0FBUztJQUhyQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBYUcsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0dBWlIsU0FBUyxDQTZGckI7U0E3RlksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVDb25maWcsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IG1lcmdlVGhlbWVzIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBmaXJzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSB0aGVtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfdGhlbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgVGhlbWVWYXJpYWJsZXM+KCk7XG4gIHByaXZhdGUgX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIERhdGFTdHlsZT4+KCk7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5fZG9jdW1lbnQgPSBfZG9jdW1lbnQ7XG5cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAvLyBDbGVhblxuICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0ID0gdGhpcy5fZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdseS1zLWMnKTtcbiAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2Rlcy5pdGVtKGluZGV4KSE7XG4gICAgICAgICAgKHRoaXMuX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlyc3RFbGVtZW50ID0gdGhpcy5fZG9jdW1lbnQuYm9keS5maXJzdENoaWxkISBhcyBIVE1MRWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCB7XG4gICAgICBpZDogJ2x5JyxcbiAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgZGF0YToge31cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemVUaGVtZSh0aGVtZUNvbmZpZzogVGhlbWVDb25maWdbXSB8IFRoZW1lQ29uZmlnLCBnbG9iYWxWYXJpYWJsZXM6IFRoZW1lQ29uZmlnKSB7XG5cbiAgICBjb25zdCBhbGxUaGVtZXMgPSBBcnJheS5pc0FycmF5KHRoZW1lQ29uZmlnKSA/IHRoZW1lQ29uZmlnIDogW3RoZW1lQ29uZmlnXTtcblxuICAgIGNvbnN0IHRoZW1lcyA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZUNvbmZpZ1tdPigpO1xuXG4gICAgYWxsVGhlbWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAvLyBEbyBub3QgaW5zdGFsbCB0aGVtZXMgdGhhdCBhcmUgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgICAgIGlmICh0aGlzLmhhc1RoZW1lKGl0ZW0ubmFtZSkpIHtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGBUaGVtZSAnJHtpdGVtLm5hbWV9JyBpcyBhbHJlYWR5IGluaXRpYWxpemVkLmApO1xuICAgICAgLy8gfVxuICAgICAgfVxuICAgICAgaWYgKHRoZW1lcy5oYXMoaXRlbS5uYW1lKSkge1xuICAgICAgICB0aGVtZXMuZ2V0KGl0ZW0ubmFtZSkhLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVtZXMuc2V0KGl0ZW0ubmFtZSwgW2l0ZW1dKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoZW1lcy5mb3JFYWNoKChpdGVtcykgPT4ge1xuICAgICAgaWYgKGdsb2JhbFZhcmlhYmxlcykge1xuICAgICAgICBpdGVtcy5wdXNoKGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICBtZXJnZVRoZW1lcyhpdGVtc1swXSwgLi4uaXRlbXMuc2xpY2UoMSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fYWRkKGl0ZW1zWzBdIGFzIGFueSk7XG4gICAgICB0aGlzLnRoZW1lcy5hZGQoaXRlbXNbMF0ubmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogYWRkIG5ldyB0aGVtZVxuICAgKiBAcGFyYW0gdGhlbWU6IFRoZW1lVmFyaWFibGVzXG4gICAqL1xuICBwcml2YXRlIF9hZGQodGhlbWU6IFRoZW1lVmFyaWFibGVzKSB7XG4gICAgdGhpcy5fdGhlbWVNYXAuc2V0KHRoZW1lLm5hbWUsIHRoZW1lKTtcbiAgICB0aGlzLl9zdHlsZU1hcC5zZXQodGhlbWUubmFtZSwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIGhhc1RoZW1lKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyB8IHN0cmluZykge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlb2YgdGhlbWUgPT09ICdzdHJpbmcnID8gdGhlbWUgOiB0aGVtZS5uYW1lO1xuICAgIHJldHVybiB0aGlzLl90aGVtZU1hcC5oYXMobmFtZSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50OiBhbnksIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG5ld0NsYXNzbmFtZTogc3RyaW5nLCBvbGRDbGFzc25hbWU/OiBzdHJpbmcpIHtcbiAgICBpZiAob2xkQ2xhc3NuYW1lKSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvbGRDbGFzc25hbWUpO1xuICAgIH1cbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBuZXdDbGFzc25hbWUpO1xuICB9XG5cbn1cbiJdfQ==