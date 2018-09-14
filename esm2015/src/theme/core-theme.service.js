/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { LY_THEME_CONFIG, LyThemeConfig } from './theme-config';
import { DOCUMENT } from '@angular/common';
import { Platform } from '../platform';
import { mergeDeep } from '../style-utils';
import * as i0 from "@angular/core";
import * as i1 from "./theme-config";
import * as i2 from "@angular/common";
export class CoreTheme {
    /**
     * @param {?} themeConfig
     * @param {?} rendererFactory
     * @param {?} _document
     */
    constructor(themeConfig, rendererFactory, _document) {
        this.rendererFactory = rendererFactory;
        this.themes = new Set();
        this._themeMap = new Map();
        this._styleMap = new Map();
        if (!themeConfig) {
            throw new Error('LY_THEME_CONFIG undefined');
        }
        this.renderer = this.rendererFactory.createRenderer(null, {
            id: 'ly',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {}
        });
        if (Platform.isBrowser) {
            /** @type {?} */
            const nodes = _document.body.querySelectorAll('ly-s-c');
            if (nodes.length) {
                for (let index = 0; index < nodes.length; index++) {
                    /** @type {?} */
                    const element = nodes.item(index);
                    (/** @type {?} */ (_document.body)).removeChild(element);
                }
            }
        }
        this.firstElement = _document.body.firstChild;
        if (themeConfig) {
            /** @type {?} */
            const variables = themeConfig.variables;
            /** @type {?} */
            const newVariables = variables && typeof variables === 'function'
                ? new variables()
                : variables;
            themeConfig.themes.forEach(item => {
                /** @type {?} */
                const newTheme = typeof item === 'function' ? new item() : item;
                if (variables) {
                    mergeDeep(newTheme, newVariables);
                }
                this.add(newTheme);
                this.themes.add(newTheme.name);
            });
        }
    }
    /**
     * add new theme
     * @param {?} theme
     * @return {?}
     */
    add(theme) {
        this._themeMap.set(theme.name, theme);
        this._styleMap.set(theme.name, new Map());
    }
    /**
     * @param {?} name
     * @return {?}
     */
    get(name) {
        return this._themeMap.get(name);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getStyleMap(name) {
        return this._styleMap.get(name);
    }
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} newClassname
     * @param {?=} oldClassname
     * @return {?}
     */
    updateClassName(element, renderer, newClassname, oldClassname) {
        if (oldClassname) {
            renderer.removeClass(element, oldClassname);
        }
        renderer.addClass(element, newClassname);
    }
}
CoreTheme.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
CoreTheme.ctorParameters = () => [
    { type: LyThemeConfig, decorators: [{ type: Optional }, { type: Inject, args: [LY_THEME_CONFIG,] }] },
    { type: RendererFactory2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ CoreTheme.ngInjectableDef = i0.defineInjectable({ factory: function CoreTheme_Factory() { return new CoreTheme(i0.inject(i1.LY_THEME_CONFIG, 8), i0.inject(i0.RendererFactory2), i0.inject(i2.DOCUMENT)); }, token: CoreTheme, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS10aGVtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lL2NvcmUtdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBZSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSzNDLE1BQU07Ozs7OztJQVNKLFlBQ3VDLFdBQTBCLEVBQ3ZELGlCQUNVLFNBQWM7UUFEeEIsb0JBQWUsR0FBZixlQUFlO3NCQUxQLElBQUksR0FBRyxFQUFVO3lCQUNmLElBQUksR0FBRyxFQUF1Qjt5QkFDOUIsSUFBSSxHQUFHLEVBQWtDO1FBTTNELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDeEQsRUFBRSxFQUFFLElBQUk7WUFDUixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFOztZQUN0QixNQUFNLEtBQUssR0FBYSxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7O29CQUNqRCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxtQkFBQyxTQUFTLENBQUMsSUFBdUIsRUFBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDMUQ7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLFdBQVcsRUFBRTs7WUFDZixNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDOztZQUN4QyxNQUFNLFlBQVksR0FBRyxTQUFTLElBQUksT0FBTyxTQUFTLEtBQUssVUFBVTtnQkFDakUsQ0FBQyxDQUFDLElBQUksU0FBUyxFQUFFO2dCQUNqQixDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ1osV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUNoQyxNQUFNLFFBQVEsR0FBRyxPQUFPLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDaEUsSUFBSSxTQUFTLEVBQUU7b0JBQ2IsU0FBUyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztpQkFDbkM7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7OztJQU1ELEdBQUcsQ0FBQyxLQUFrQjtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQzNDOzs7OztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqQzs7Ozs7SUFDRCxXQUFXLENBQUMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pDOzs7Ozs7OztJQUVELGVBQWUsQ0FBQyxPQUFZLEVBQUUsUUFBbUIsRUFBRSxZQUFvQixFQUFFLFlBQXFCO1FBQzVGLElBQUksWUFBWSxFQUFFO1lBQ2hCLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDMUM7OztZQXpFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFSc0MsYUFBYSx1QkFtQi9DLFFBQVEsWUFBSSxNQUFNLFNBQUMsZUFBZTtZQXBCVyxnQkFBZ0I7NENBc0I3RCxNQUFNLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRoZW1lQ29uZmlnLCBMWV9USEVNRV9DT05GSUcsIEx5VGhlbWVDb25maWcgfSBmcm9tICcuL3RoZW1lLWNvbmZpZyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRhU3R5bGUgfSBmcm9tICcuLi90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi4vcGxhdGZvcm0nO1xuaW1wb3J0IHsgbWVyZ2VEZWVwIH0gZnJvbSAnLi4vc3R5bGUtdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb3JlVGhlbWUge1xuICByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBtZWRpYVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHJpbWFyeVN0eWxlQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgc2Vjb25kYXJ5U3R5bGVDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBmaXJzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSB0aGVtZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfdGhlbWVNYXAgPSBuZXcgTWFwPHN0cmluZywgVGhlbWVDb25maWc+KCk7XG4gIHByaXZhdGUgX3N0eWxlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIERhdGFTdHlsZT4+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTFlfVEhFTUVfQ09ORklHKSB0aGVtZUNvbmZpZzogTHlUaGVtZUNvbmZpZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBfZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICBpZiAoIXRoZW1lQ29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xZX1RIRU1FX0NPTkZJRyB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIHtcbiAgICAgIGlkOiAnbHknLFxuICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICAgIHN0eWxlczogW10sXG4gICAgICBkYXRhOiB7fVxuICAgIH0pO1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IG5vZGVzOiBOb2RlTGlzdCA9IF9kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2x5LXMtYycpO1xuICAgICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IG5vZGVzLml0ZW0oaW5kZXgpO1xuICAgICAgICAgIChfZG9jdW1lbnQuYm9keSBhcyBIVE1MQm9keUVsZW1lbnQpLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmlyc3RFbGVtZW50ID0gX2RvY3VtZW50LmJvZHkuZmlyc3RDaGlsZDtcbiAgICBpZiAodGhlbWVDb25maWcpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoZW1lQ29uZmlnLnZhcmlhYmxlcztcbiAgICAgIGNvbnN0IG5ld1ZhcmlhYmxlcyA9IHZhcmlhYmxlcyAmJiB0eXBlb2YgdmFyaWFibGVzID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG5ldyB2YXJpYWJsZXMoKVxuICAgICAgOiB2YXJpYWJsZXM7XG4gICAgICB0aGVtZUNvbmZpZy50aGVtZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGhlbWUgPSB0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBpdGVtKCkgOiBpdGVtO1xuICAgICAgICBpZiAodmFyaWFibGVzKSB7XG4gICAgICAgICAgbWVyZ2VEZWVwKG5ld1RoZW1lLCBuZXdWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkKG5ld1RoZW1lKTtcbiAgICAgICAgdGhpcy50aGVtZXMuYWRkKG5ld1RoZW1lLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGFkZCBuZXcgdGhlbWVcbiAgICogQHBhcmFtIHRoZW1lOiBUaGVtZUNvbmZpZ1xuICAgKi9cbiAgYWRkKHRoZW1lOiBUaGVtZUNvbmZpZykge1xuICAgIHRoaXMuX3RoZW1lTWFwLnNldCh0aGVtZS5uYW1lLCB0aGVtZSk7XG4gICAgdGhpcy5fc3R5bGVNYXAuc2V0KHRoZW1lLm5hbWUsIG5ldyBNYXAoKSk7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lTWFwLmdldChuYW1lKTtcbiAgfVxuICBnZXRTdHlsZU1hcChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVNYXAuZ2V0KG5hbWUpO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQ6IGFueSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgbmV3Q2xhc3NuYW1lOiBzdHJpbmcsIG9sZENsYXNzbmFtZT86IHN0cmluZykge1xuICAgIGlmIChvbGRDbGFzc25hbWUpIHtcbiAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQsIG9sZENsYXNzbmFtZSk7XG4gICAgfVxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIG5ld0NsYXNzbmFtZSk7XG4gIH1cblxufVxuIl19