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
var LyIconService = /** @class */ (function () {
    function LyIconService(http, document, coreTheme) {
        this.http = http;
        this.document = document;
        this.coreTheme = coreTheme;
        this.svgMap = new Map();
        this.classes = {
            svg: this.coreTheme.setUpStyle('_svg', {
                '': function () { return ("width:inherit;" +
                    "height:inherit;" +
                    "fill:currentColor;"); }
            })
        };
    }
    /**
     * @param {?} key
     * @param {?} url
     * @return {?}
     */
    LyIconService.prototype.setSvg = /**
     * @param {?} key
     * @param {?} url
     * @return {?}
     */
    function (key, url) {
        var _this = this;
        if (!this.svgMap.has(key)) {
            url = url + ".svg";
            this.svgMap.set(key, {
                obs: this.http.get(url, { responseType: 'text' })
                    .pipe(share(), map(function (svgText) { return _this.textToSvg(svgText); }))
            });
        }
    };
    /**
     * @param {?} str
     * @return {?}
     */
    LyIconService.prototype.textToSvg = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var div = this.document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        var svg = /** @type {?} */ (div.querySelector('svg'));
        return svg;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LyIconService.prototype.getSvg = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.svgMap.get(key);
    };
    LyIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyIconService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: CoreTheme }
    ]; };
    /** @nocollapse */ LyIconService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.inject(i1.HttpClient), i0.inject(i2.DOCUMENT, 8), i0.inject(i3.CoreTheme)); }, token: LyIconService, providedIn: "root" });
    return LyIconService;
}());
export { LyIconService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ljb24vIiwic291cmNlcyI6WyJpY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUF1QnBDLHVCQUNVLE1BQzhCLFFBQWEsRUFDM0M7UUFGQSxTQUFJLEdBQUosSUFBSTtRQUMwQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQzNDLGNBQVMsR0FBVCxTQUFTO3NCQWZGLElBQUksR0FBRyxFQUFtQjt1QkFDakM7WUFDUixHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQzVCLE1BQU0sRUFBRTtnQkFDTixFQUFFLEVBQUUsY0FBTSxPQUFBLENBQ1IsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLG9CQUFvQixDQUNyQixFQUpTLENBSVQ7YUFDRixDQUNGO1NBQ0Y7S0FLSTs7Ozs7O0lBRUwsOEJBQU07Ozs7O0lBQU4sVUFBTyxHQUFXLEVBQUUsR0FBVztRQUEvQixpQkFhQztRQVpDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixHQUFHLEdBQU0sR0FBRyxTQUFNLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUNqQjtnQkFDRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDO3FCQUNoRCxJQUFJLENBQ0gsS0FBSyxFQUFFLEVBQ1AsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUN4QzthQUNGLENBQ0YsQ0FBQztTQUNIO0tBQ0Y7Ozs7O0lBRUQsaUNBQVM7Ozs7SUFBVCxVQUFVLEdBQVc7O1FBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDOztRQUNwQixJQUFNLEdBQUcscUJBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQWUsRUFBQztRQUNuRCxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7OztJQUVELDhCQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDN0I7O2dCQTlDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWJRLFVBQVU7Z0RBNkJkLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTtnQkF6QnZCLFNBQVM7Ozt3QkFMbEI7O1NBZWEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTdmdJY29uIHtcbiAgb2JzOiBPYnNlcnZhYmxlPFNWR0VsZW1lbnQ+O1xuICBsb2FkZWQ/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdmdNYXAgPSBuZXcgTWFwPHN0cmluZywgU3ZnSWNvbj4oKTtcbiAgY2xhc3NlcyA9IHtcbiAgICBzdmc6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnX3N2ZycsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgd2lkdGg6aW5oZXJpdDtgICtcbiAgICAgICAgICBgaGVpZ2h0OmluaGVyaXQ7YCArXG4gICAgICAgICAgYGZpbGw6Y3VycmVudENvbG9yO2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lXG4gICkgeyB9XG5cbiAgc2V0U3ZnKGtleTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIHVybCA9IGAke3VybH0uc3ZnYDtcbiAgICAgIHRoaXMuc3ZnTWFwLnNldChrZXksXG4gICAgICAgIHtcbiAgICAgICAgICBvYnM6IHRoaXMuaHR0cC5nZXQodXJsLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzaGFyZSgpLFxuICAgICAgICAgICAgbWFwKHN2Z1RleHQgPT4gdGhpcy50ZXh0VG9Tdmcoc3ZnVGV4dCkpLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB0ZXh0VG9Tdmcoc3RyOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdHI7XG4gICAgY29uc3Qgc3ZnID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIGFzIFNWR0VsZW1lbnQ7XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIGdldFN2ZyhrZXk6IHN0cmluZyk6IFN2Z0ljb24ge1xuICAgIHJldHVybiB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgfVxufVxuXG4iXX0=