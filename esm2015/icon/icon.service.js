/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { map, share } from 'rxjs/operators';
import { CoreTheme } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
import * as i3 from "@alyle/ui";
/**
 * @record
 */
export function SvgIcon() { }
/** @type {?} */
SvgIcon.prototype.obs;
/** @type {?|undefined} */
SvgIcon.prototype.loaded;
export class LyIconService {
    /**
     * @param {?} http
     * @param {?} document
     * @param {?} coreTheme
     */
    constructor(http, document, coreTheme) {
        this.http = http;
        this.document = document;
        this.coreTheme = coreTheme;
        this.svgMap = new Map();
        this.classes = {
            svg: this.coreTheme.setUpStyle('_svg', {
                '': () => (`width:inherit;` +
                    `height:inherit;` +
                    `fill:currentColor;`)
            })
        };
    }
    /**
     * @param {?} key
     * @param {?} url
     * @return {?}
     */
    setSvg(key, url) {
        if (!this.svgMap.has(key)) {
            url = `${url}.svg`;
            this.svgMap.set(key, {
                obs: this.http.get(url, { responseType: 'text' })
                    .pipe(share(), map(svgText => this.textToSvg(svgText)))
            });
        }
    }
    /**
     * @param {?} str
     * @return {?}
     */
    textToSvg(str) {
        /** @type {?} */
        const div = this.document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        const svg = /** @type {?} */ (div.querySelector('svg'));
        return svg;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getSvg(key) {
        return this.svgMap.get(key);
    }
}
LyIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyIconService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: CoreTheme }
];
/** @nocollapse */ LyIconService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.inject(i1.HttpClient), i0.inject(i2.DOCUMENT, 8), i0.inject(i3.CoreTheme)); }, token: LyIconService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LyIconService.prototype.svgMap;
    /** @type {?} */
    LyIconService.prototype.classes;
    /** @type {?} */
    LyIconService.prototype.http;
    /** @type {?} */
    LyIconService.prototype.document;
    /** @type {?} */
    LyIconService.prototype.coreTheme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ljb24vIiwic291cmNlcyI6WyJpY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVdEMsTUFBTTs7Ozs7O0lBYUosWUFDVSxNQUM4QixRQUFhLEVBQzNDO1FBRkEsU0FBSSxHQUFKLElBQUk7UUFDMEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMzQyxjQUFTLEdBQVQsU0FBUztzQkFmRixJQUFJLEdBQUcsRUFBbUI7dUJBQ2pDO1lBQ1IsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUM1QixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ1IsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLG9CQUFvQixDQUNyQjthQUNGLENBQ0Y7U0FDRjtLQUtJOzs7Ozs7SUFFTCxNQUFNLENBQUMsR0FBVyxFQUFFLEdBQVc7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFDakI7Z0JBQ0UsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQztxQkFDaEQsSUFBSSxDQUNILEtBQUssRUFBRSxFQUNQLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FDeEM7YUFDRixDQUNGLENBQUM7U0FDSDtLQUNGOzs7OztJQUVELFNBQVMsQ0FBQyxHQUFXOztRQUNuQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzs7UUFDcEIsTUFBTSxHQUFHLHFCQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFlLEVBQUM7UUFDbkQsT0FBTyxHQUFHLENBQUM7S0FDWjs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzdCOzs7WUE5Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBYlEsVUFBVTs0Q0E2QmQsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFRO1lBekJ2QixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb24ge1xuICBvYnM6IE9ic2VydmFibGU8U1ZHRWxlbWVudD47XG4gIGxvYWRlZD86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvblNlcnZpY2Uge1xuICBwcml2YXRlIHN2Z01hcCA9IG5ldyBNYXA8c3RyaW5nLCBTdmdJY29uPigpO1xuICBjbGFzc2VzID0ge1xuICAgIHN2ZzogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdfc3ZnJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGB3aWR0aDppbmhlcml0O2AgK1xuICAgICAgICAgIGBoZWlnaHQ6aW5oZXJpdDtgICtcbiAgICAgICAgICBgZmlsbDpjdXJyZW50Q29sb3I7YFxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICB9O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWVcbiAgKSB7IH1cblxuICBzZXRTdmcoa2V5OiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgdXJsID0gYCR7dXJsfS5zdmdgO1xuICAgICAgdGhpcy5zdmdNYXAuc2V0KGtleSxcbiAgICAgICAge1xuICAgICAgICAgIG9iczogdGhpcy5odHRwLmdldCh1cmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHNoYXJlKCksXG4gICAgICAgICAgICBtYXAoc3ZnVGV4dCA9PiB0aGlzLnRleHRUb1N2ZyhzdmdUZXh0KSksXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHRleHRUb1N2ZyhzdHI6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHN0cjtcbiAgICBjb25zdCBzdmcgPSBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgYXMgU1ZHRWxlbWVudDtcbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgZ2V0U3ZnKGtleTogc3RyaW5nKTogU3ZnSWNvbiB7XG4gICAgcmV0dXJuIHRoaXMuc3ZnTWFwLmdldChrZXkpO1xuICB9XG59XG5cbiJdfQ==