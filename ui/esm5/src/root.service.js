/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from './platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var LyRootService = /** @class */ (function () {
    function LyRootService(_document, rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.themeRootMap = new Map();
        this.themeMap = new Map();
        this.themes = new Map();
        this._styleMap = new Map();
        this.renderer = this.rendererFactory.createRenderer(null, null);
        var /** @type {?} */ container;
        if (Platform.isBrowser && (container = _document.querySelector('ly-core-theme'))) {
            this.rootContainer = container;
            // this._setUpStylesIfExist();
        }
        else {
            this.rootContainer = this.renderer.createElement('ly-core-theme');
            this.renderer.insertBefore(_document.body, this.rootContainer, _document.body.firstElementChild);
        }
        // setTimeout(() => this._setUpStylesIfExist(), 10000);
    }
    /**
     * @param {?} palette
     * @return {?}
     */
    LyRootService.prototype.registerTheme = /**
     * @param {?} palette
     * @return {?}
     */
    function (palette) {
        if (!this.themeMap.has(palette.name)) {
            this.themeMap.set(palette.name, new Map());
            this.themes.set(palette.name, palette);
        }
        return {
            map: this.themeMap.get(palette.name),
            palette: this.themes.get(palette.name)
        };
    };
    /**
     * @param {?} name
     * @return {?}
     */
    LyRootService.prototype.getTheme = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.themes.get(name);
    };
    LyRootService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    // private _setUpStylesIfExist() {
    //   console.time('init');
    //   const list = this.rootContainer.childNodes;
    //   let index = 0;
    //   let styleElement: HTMLStyleElement;
    //   while (styleElement = list[index] as HTMLStyleElement) {
    //     const attribute = styleElement.attributes.item(0);
    //     const name = attribute.name;
    //     const id = attribute.value;
    //     this._styleMap.set(name, {
    //       id,
    //       styleElement
    //     });
    //     index++;
    //   }
    //   console.timeEnd('init');
    //   console.log(this._styleMap);
    // }
    /** @nocollapse */
    LyRootService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
        { type: RendererFactory2, },
    ]; };
    /** @nocollapse */ LyRootService.ngInjectableDef = i0.defineInjectable({ factory: function LyRootService_Factory() { return new LyRootService(i0.inject(i1.DOCUMENT), i0.inject(i0.RendererFactory2)); }, token: LyRootService, providedIn: "root" });
    return LyRootService;
}());
export { LyRootService };
function LyRootService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyRootService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyRootService.ctorParameters;
    /**
     * Style Container
     * @type {?}
     */
    LyRootService.prototype.rootContainer;
    /** @type {?} */
    LyRootService.prototype.renderer;
    /** @type {?} */
    LyRootService.prototype.themeRootMap;
    /** @type {?} */
    LyRootService.prototype.themeMap;
    /** @type {?} */
    LyRootService.prototype.themes;
    /** @type {?} */
    LyRootService.prototype._styleMap;
    /** @type {?} */
    LyRootService.prototype.rendererFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3Jvb3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBeUIsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0lBY3BDLHVCQUNvQixXQUNWO1FBQUEsb0JBQWUsR0FBZixlQUFlOzRCQU5WLElBQUksR0FBRyxFQUFxQjt3QkFDeEIsSUFBSSxHQUFHLEVBQWtDO3NCQUMzQyxJQUFJLEdBQUcsRUFBZ0M7eUJBQ3BDLElBQUksR0FBRyxFQUFxQjtRQUs5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxxQkFBSSxTQUFjLENBQUM7UUFDbkIsSUFBSSxRQUFRLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRTtZQUNoRixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzs7U0FFaEM7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNsRzs7S0FHRjs7Ozs7SUFDRCxxQ0FBYTs7OztJQUFiLFVBQWMsT0FBWTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDcEMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDdkMsQ0FBQztLQUNIOzs7OztJQUVELGdDQUFROzs7O0lBQVIsVUFBUyxJQUFZO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7O2dCQXhDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQVVJLE1BQU0sU0FBQyxRQUFRO2dCQWpCZ0MsZ0JBQWdCOzs7d0JBQXBFOztTQVFhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEluamVjdCwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuL3BsYXRmb3JtJztcbmltcG9ydCB7IFN0eWxlRGF0YSwgRGF0YVN0eWxlIH0gZnJvbSAnLi90aGVtZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSb290U2VydmljZSB7XG4gIC8qKiBTdHlsZSBDb250YWluZXIgKi9cbiAgcm9vdENvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIHRoZW1lUm9vdE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBTdHlsZURhdGE+KCk7XG4gIHByaXZhdGUgdGhlbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgU3R5bGVEYXRhPj4oKTtcbiAgcHJpdmF0ZSB0aGVtZXMgPSBuZXcgTWFwPHN0cmluZywge1trZXk6IHN0cmluZ106IGFueX0+KCk7XG4gIHByaXZhdGUgX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIERhdGFTdHlsZT4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTJcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICAgIGxldCBjb250YWluZXI6IGFueTtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIChjb250YWluZXIgPSBfZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbHktY29yZS10aGVtZScpKSkge1xuICAgICAgdGhpcy5yb290Q29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgLy8gdGhpcy5fc2V0VXBTdHlsZXNJZkV4aXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm9vdENvbnRhaW5lciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbHktY29yZS10aGVtZScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUoX2RvY3VtZW50LmJvZHksIHRoaXMucm9vdENvbnRhaW5lciwgX2RvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fc2V0VXBTdHlsZXNJZkV4aXN0KCksIDEwMDAwKTtcbiAgfVxuICByZWdpc3RlclRoZW1lKHBhbGV0dGU6IGFueSkge1xuICAgIGlmICghdGhpcy50aGVtZU1hcC5oYXMocGFsZXR0ZS5uYW1lKSkge1xuICAgICAgdGhpcy50aGVtZU1hcC5zZXQocGFsZXR0ZS5uYW1lLCBuZXcgTWFwKCkpO1xuICAgICAgdGhpcy50aGVtZXMuc2V0KHBhbGV0dGUubmFtZSwgcGFsZXR0ZSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBtYXA6IHRoaXMudGhlbWVNYXAuZ2V0KHBhbGV0dGUubmFtZSksXG4gICAgICBwYWxldHRlOiB0aGlzLnRoZW1lcy5nZXQocGFsZXR0ZS5uYW1lKVxuICAgIH07XG4gIH1cblxuICBnZXRUaGVtZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZXMuZ2V0KG5hbWUpO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBfc2V0VXBTdHlsZXNJZkV4aXN0KCkge1xuICAvLyAgIGNvbnNvbGUudGltZSgnaW5pdCcpO1xuICAvLyAgIGNvbnN0IGxpc3QgPSB0aGlzLnJvb3RDb250YWluZXIuY2hpbGROb2RlcztcbiAgLy8gICBsZXQgaW5kZXggPSAwO1xuICAvLyAgIGxldCBzdHlsZUVsZW1lbnQ6IEhUTUxTdHlsZUVsZW1lbnQ7XG4gIC8vICAgd2hpbGUgKHN0eWxlRWxlbWVudCA9IGxpc3RbaW5kZXhdIGFzIEhUTUxTdHlsZUVsZW1lbnQpIHtcbiAgLy8gICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHN0eWxlRWxlbWVudC5hdHRyaWJ1dGVzLml0ZW0oMCk7XG4gIC8vICAgICBjb25zdCBuYW1lID0gYXR0cmlidXRlLm5hbWU7XG4gIC8vICAgICBjb25zdCBpZCA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgLy8gICAgIHRoaXMuX3N0eWxlTWFwLnNldChuYW1lLCB7XG4gIC8vICAgICAgIGlkLFxuICAvLyAgICAgICBzdHlsZUVsZW1lbnRcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgaW5kZXgrKztcbiAgLy8gICB9XG4gIC8vICAgY29uc29sZS50aW1lRW5kKCdpbml0Jyk7XG4gIC8vICAgY29uc29sZS5sb2codGhpcy5fc3R5bGVNYXApO1xuICAvLyB9XG5cbn1cbiJdfQ==