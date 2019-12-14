import * as tslib_1 from "tslib";
import { Injectable, Inject, Renderer2, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '../platform';
import { mergeThemes } from '../style-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var CoreTheme = /** @class */ (function () {
    function CoreTheme(rendererFactory, _document) {
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
    }
    CoreTheme.prototype.initializeTheme = function (themeConfig, globalVariables) {
        var _this = this;
        var allThemes = Array.isArray(themeConfig) ? themeConfig : [themeConfig];
        var themes = new Map();
        allThemes.forEach(function (item) {
            // Do not install themes that are already initialized.
            if (_this.hasTheme(item.name)) {
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
        { type: RendererFactory2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    CoreTheme.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
    CoreTheme = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject(DOCUMENT))
    ], CoreTheme);
    return CoreTheme;
}());
export { CoreTheme };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSzdDO0lBVUUsbUJBQ1UsZUFBaUMsRUFDdkIsU0FBYztRQUR4QixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFMbEMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDNUIsY0FBUyxHQUFHLElBQUksR0FBRyxFQUEwQixDQUFDO1FBQzlDLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztRQU01RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUUzQixJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsUUFBUTtZQUNSLElBQU0sS0FBSyxHQUFhLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ2pELElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBd0IsQ0FBQyxXQUFXLENB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NUYsSUFBSSxZQUFZLEVBQUU7WUFDaEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0M7UUFDRCxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQyxDQUFDOztnQkFoRjBCLGdCQUFnQjtnREFDeEMsTUFBTSxTQUFDLFFBQVE7OztJQVpQLFNBQVM7UUFIckIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQWFHLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtPQVpSLFNBQVMsQ0E2RnJCO29CQXZHRDtDQXVHQyxBQTdGRCxJQTZGQztTQTdGWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZUNvbmZpZywgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbWVyZ2VUaGVtZXMgfSBmcm9tICcuLi9zdHlsZS11dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVUaGVtZSB7XG4gIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIG1lZGlhU3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwcmltYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBzZWNvbmRhcnlTdHlsZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIGZpcnN0RWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHJlYWRvbmx5IHRoZW1lcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcml2YXRlIF90aGVtZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUaGVtZVZhcmlhYmxlcz4oKTtcbiAgcHJpdmF0ZSBfc3R5bGVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgRGF0YVN0eWxlPj4oKTtcbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICB0aGlzLl9kb2N1bWVudCA9IF9kb2N1bWVudDtcblxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIC8vIENsZWFuXG4gICAgICBjb25zdCBub2RlczogTm9kZUxpc3QgPSB0aGlzLl9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2x5LXMtYycpO1xuICAgICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IG5vZGVzLml0ZW0oaW5kZXgpITtcbiAgICAgICAgICAodGhpcy5fZG9jdW1lbnQuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQpLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maXJzdEVsZW1lbnQgPSB0aGlzLl9kb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQhIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIHtcbiAgICAgIGlkOiAnbHknLFxuICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICAgIHN0eWxlczogW10sXG4gICAgICBkYXRhOiB7fVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGl6ZVRoZW1lKHRoZW1lQ29uZmlnOiBUaGVtZUNvbmZpZ1tdIHwgVGhlbWVDb25maWcsIGdsb2JhbFZhcmlhYmxlczogVGhlbWVDb25maWcpIHtcblxuICAgIGNvbnN0IGFsbFRoZW1lcyA9IEFycmF5LmlzQXJyYXkodGhlbWVDb25maWcpID8gdGhlbWVDb25maWcgOiBbdGhlbWVDb25maWddO1xuXG4gICAgY29uc3QgdGhlbWVzID0gbmV3IE1hcDxzdHJpbmcsIFRoZW1lQ29uZmlnW10+KCk7XG5cbiAgICBhbGxUaGVtZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIC8vIERvIG5vdCBpbnN0YWxsIHRoZW1lcyB0aGF0IGFyZSBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgICAgaWYgKHRoaXMuaGFzVGhlbWUoaXRlbS5uYW1lKSkge1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYFRoZW1lICcke2l0ZW0ubmFtZX0nIGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQuYCk7XG4gICAgICAvLyB9XG4gICAgICB9XG4gICAgICBpZiAodGhlbWVzLmhhcyhpdGVtLm5hbWUpKSB7XG4gICAgICAgIHRoZW1lcy5nZXQoaXRlbS5uYW1lKSEucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW1lcy5zZXQoaXRlbS5uYW1lLCBbaXRlbV0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhlbWVzLmZvckVhY2goKGl0ZW1zKSA9PiB7XG4gICAgICBpZiAoZ2xvYmFsVmFyaWFibGVzKSB7XG4gICAgICAgIGl0ZW1zLnB1c2goZ2xvYmFsVmFyaWFibGVzKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIG1lcmdlVGhlbWVzKGl0ZW1zWzBdLCAuLi5pdGVtcy5zbGljZSgxKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hZGQoaXRlbXNbMF0gYXMgYW55KTtcbiAgICAgIHRoaXMudGhlbWVzLmFkZChpdGVtc1swXS5uYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbmV3IHRoZW1lXG4gICAqIEBwYXJhbSB0aGVtZTogVGhlbWVWYXJpYWJsZXNcbiAgICovXG4gIHByaXZhdGUgX2FkZCh0aGVtZTogVGhlbWVWYXJpYWJsZXMpIHtcbiAgICB0aGlzLl90aGVtZU1hcC5zZXQodGhlbWUubmFtZSwgdGhlbWUpO1xuICAgIHRoaXMuX3N0eWxlTWFwLnNldCh0aGVtZS5uYW1lLCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgaGFzVGhlbWUodGhlbWU6IFRoZW1lVmFyaWFibGVzIHwgc3RyaW5nKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVvZiB0aGVtZSA9PT0gJ3N0cmluZycgPyB0aGVtZSA6IHRoZW1lLm5hbWU7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmhhcyhuYW1lKTtcbiAgfVxuXG4gIGdldChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbWVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuIl19