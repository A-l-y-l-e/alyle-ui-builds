import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject, Renderer2, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { LY_THEME, LY_THEME_GLOBAL_VARIABLES } from './theme-config';
import { DOCUMENT } from '@angular/common';
import { Platform } from '../platform';
import { mergeThemes } from '../parse';
import * as i0 from "@angular/core";
import * as i1 from "./theme-config";
import * as i2 from "@angular/common";
var CoreTheme = /** @class */ (function () {
    function CoreTheme(themeConfig, globalVariables, rendererFactory, _document) {
        this.rendererFactory = rendererFactory;
        this.themes = new Set();
        this._themeMap = new Map();
        this._styleMap = new Map();
        this._document = _document;
        if (Platform.isBrowser) {
            // Clean
            var nodes = this._document.body.querySelectorAll('ly-s-c');
            if (nodes.length) {
                for (var index = 0; index < nodes.length; index++) {
                    var element = nodes.item(index);
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
    CoreTheme.prototype.initializeTheme = function (themeConfig, globalVariables) {
        var _this = this;
        var allThemes = Array.isArray(themeConfig) ? themeConfig : [themeConfig];
        var themes = new Map();
        allThemes.forEach(function (item) {
            // Do not install themes that are already initialized.
            if (_this.hasTheme(item.name)) {
                throw new Error("Theme '" + item.name + "' is already initialized.");
            }
            if (themes.has(item.name)) {
                themes.get(item.name).push(item);
            }
            else {
                themes.set(item.name, [item]);
            }
        });
        themes.forEach(function (items) {
            if (globalVariables) {
                items.push(globalVariables);
            }
            if (items.length > 1) {
                mergeThemes.apply(void 0, tslib_1.__spread([items[0]], items.slice(1)));
            }
            _this._add(items[0]);
            _this.themes.add(items[0].name);
        });
    };
    /**
     * add new theme
     * @param theme: ThemeVariables
     */
    CoreTheme.prototype._add = function (theme) {
        this._themeMap.set(theme.name, theme);
        this._styleMap.set(theme.name, new Map());
    };
    CoreTheme.prototype.hasTheme = function (theme) {
        var name = typeof theme === 'string' ? theme : theme.name;
        return this._themeMap.has(name);
    };
    CoreTheme.prototype.get = function (name) {
        return this._themeMap.get(name);
    };
    CoreTheme.prototype.updateClassName = function (element, renderer, newClassname, oldClassname) {
        if (oldClassname) {
            renderer.removeClass(element, oldClassname);
        }
        renderer.addClass(element, newClassname);
    };
    CoreTheme.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_GLOBAL_VARIABLES,] }] },
        { type: RendererFactory2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    CoreTheme.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.ɵɵinject(i1.LY_THEME, 8), i0.ɵɵinject(i1.LY_THEME_GLOBAL_VARIABLES, 8), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i2.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
    CoreTheme = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(LY_THEME)),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(LY_THEME_GLOBAL_VARIABLES)),
        tslib_1.__param(3, Inject(DOCUMENT))
    ], CoreTheme);
    return CoreTheme;
}());
export { CoreTheme };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQWUsUUFBUSxFQUFrQix5QkFBeUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFLdkM7SUFVRSxtQkFDZ0MsV0FBd0MsRUFDdkIsZUFBNEIsRUFDbkUsZUFBaUMsRUFDdkIsU0FBYztRQUR4QixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFQbEMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDNUIsY0FBUyxHQUFHLElBQUksR0FBRyxFQUEwQixDQUFDO1FBQzlDLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztRQVE1RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUUzQixJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsUUFBUTtZQUNSLElBQU0sS0FBSyxHQUFhLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ2pELElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBd0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQy9EO2FBQ0Y7U0FDRjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBMEIsQ0FBQztRQUVuRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtZQUN4RCxFQUFFLEVBQUUsSUFBSTtZQUNSLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDLENBQUM7UUFFSCxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVELG1DQUFlLEdBQWYsVUFBZ0IsV0FBd0MsRUFBRSxlQUE0QjtRQUF0RixpQkE0QkM7UUExQkMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTNFLElBQU0sTUFBTSxHQUFHLElBQUksR0FBRyxFQUF5QixDQUFDO1FBRWhELFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3BCLHNEQUFzRDtZQUN0RCxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLFlBQVUsSUFBSSxDQUFDLElBQUksOEJBQTJCLENBQUMsQ0FBQzthQUNqRTtZQUNELElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUNuQixJQUFJLGVBQWUsRUFBRTtnQkFDbkIsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUM3QjtZQUNELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3BCLFdBQVcsaUNBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUU7YUFDMUM7WUFDRCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQVEsQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSyx3QkFBSSxHQUFaLFVBQWEsS0FBcUI7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLEtBQThCO1FBQ3JDLElBQU0sSUFBSSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHVCQUFHLEdBQUgsVUFBSSxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUNBQWUsR0FBZixVQUFnQixPQUFZLEVBQUUsUUFBbUIsRUFBRSxZQUFvQixFQUFFLFlBQXFCO1FBQzVGLElBQUksWUFBWSxFQUFFO1lBQ2hCLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Z0RBckZFLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTtnREFDM0IsUUFBUSxZQUFJLE1BQU0sU0FBQyx5QkFBeUI7Z0JBQ3BCLGdCQUFnQjtnREFDeEMsTUFBTSxTQUFDLFFBQVE7OztJQWRQLFNBQVM7UUFIckIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQVlHLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzVCLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFFN0MsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO09BZFIsU0FBUyxDQWtHckI7b0JBNUdEO0NBNEdDLEFBbEdELElBa0dDO1NBbEdZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgTFlfVEhFTUUsIFRoZW1lVmFyaWFibGVzLCBMWV9USEVNRV9HTE9CQUxfVkFSSUFCTEVTIH0gZnJvbSAnLi90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YVN0eWxlIH0gZnJvbSAnLi4vdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IG1lcmdlVGhlbWVzIH0gZnJvbSAnLi4vcGFyc2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBmaXJzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSB0aGVtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfdGhlbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgVGhlbWVWYXJpYWJsZXM+KCk7XG4gIHByaXZhdGUgX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIERhdGFTdHlsZT4+KCk7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChMWV9USEVNRSkgdGhlbWVDb25maWc6IFRoZW1lQ29uZmlnW10gfCBUaGVtZUNvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KExZX1RIRU1FX0dMT0JBTF9WQVJJQUJMRVMpIGdsb2JhbFZhcmlhYmxlczogVGhlbWVDb25maWcsXG4gICAgcHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQEluamVjdChET0NVTUVOVCkgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5fZG9jdW1lbnQgPSBfZG9jdW1lbnQ7XG5cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAvLyBDbGVhblxuICAgICAgY29uc3Qgbm9kZXM6IE5vZGVMaXN0ID0gdGhpcy5fZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdseS1zLWMnKTtcbiAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub2Rlcy5pdGVtKGluZGV4KSE7XG4gICAgICAgICAgKHRoaXMuX2RvY3VtZW50LmJvZHkgYXMgSFRNTEJvZHlFbGVtZW50KS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlyc3RFbGVtZW50ID0gdGhpcy5fZG9jdW1lbnQuYm9keS5maXJzdENoaWxkISBhcyBIVE1MRWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCB7XG4gICAgICBpZDogJ2x5JyxcbiAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgICBzdHlsZXM6IFtdLFxuICAgICAgZGF0YToge31cbiAgICB9KTtcblxuICAgIGlmICh0aGVtZUNvbmZpZykge1xuICAgICAgdGhpcy5pbml0aWFsaXplVGhlbWUodGhlbWVDb25maWcsIGdsb2JhbFZhcmlhYmxlcyk7XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGl6ZVRoZW1lKHRoZW1lQ29uZmlnOiBUaGVtZUNvbmZpZ1tdIHwgVGhlbWVDb25maWcsIGdsb2JhbFZhcmlhYmxlczogVGhlbWVDb25maWcpIHtcblxuICAgIGNvbnN0IGFsbFRoZW1lcyA9IEFycmF5LmlzQXJyYXkodGhlbWVDb25maWcpID8gdGhlbWVDb25maWcgOiBbdGhlbWVDb25maWddO1xuXG4gICAgY29uc3QgdGhlbWVzID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lQ29uZmlnW10+KCk7XG5cbiAgICBhbGxUaGVtZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIC8vIERvIG5vdCBpbnN0YWxsIHRoZW1lcyB0aGF0IGFyZSBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgICAgaWYgKHRoaXMuaGFzVGhlbWUoaXRlbS5uYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZW1lICcke2l0ZW0ubmFtZX0nIGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQuYCk7XG4gICAgICB9XG4gICAgICBpZiAodGhlbWVzLmhhcyhpdGVtLm5hbWUpKSB7XG4gICAgICAgIHRoZW1lcy5nZXQoaXRlbS5uYW1lKSEucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW1lcy5zZXQoaXRlbS5uYW1lLCBbaXRlbV0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhlbWVzLmZvckVhY2goKGl0ZW1zKSA9PiB7XG4gICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goZ2xvYmFsVmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIG1lcmdlVGhlbWVzKGl0ZW1zWzBdLCAuLi5pdGVtcy5zbGljZSgxKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hZGQoaXRlbXNbMF0gYXMgYW55KTtcbiAgICAgIHRoaXMudGhlbWVzLmFkZChpdGVtc1swXS5uYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbmV3IHRoZW1lXG4gICAqIEBwYXJhbSB0aGVtZTogVGhlbWVWYXJpYWJsZXNcbiAgICovXG4gIHByaXZhdGUgX2FkZCh0aGVtZTogVGhlbWVWYXJpYWJsZXMpIHtcbiAgICB0aGlzLl90aGVtZU1hcC5zZXQodGhlbWUubmFtZSwgdGhlbWUpO1xuICAgIHRoaXMuX3N0eWxlTWFwLnNldCh0aGVtZS5uYW1lLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgaGFzVGhlbWUodGhlbWU6IFRoZW1lVmFyaWFibGVzIHwgc3RyaW5nKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVvZiB0aGVtZSA9PT0gJ3N0cmluZycgPyB0aGVtZSA6IHRoZW1lLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmhhcyhuYW1lKTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuIl19