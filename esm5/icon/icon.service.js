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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ljb24vIiwic291cmNlcyI6WyJpY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBdUJwQyx1QkFDVSxNQUM4QixRQUFhLEVBQzNDO1FBRkEsU0FBSSxHQUFKLElBQUk7UUFDMEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMzQyxjQUFTLEdBQVQsU0FBUztzQkFmRixJQUFJLEdBQUcsRUFBbUI7dUJBQ2pDO1lBQ1IsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUM1QixNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLGNBQU0sT0FBQSxDQUNSLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixvQkFBb0IsQ0FDckIsRUFKUyxDQUlUO2FBQ0YsQ0FDRjtTQUNGO0tBS0k7Ozs7OztJQUVMLDhCQUFNOzs7OztJQUFOLFVBQU8sR0FBVyxFQUFFLEdBQVc7UUFBL0IsaUJBYUM7UUFaQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekIsR0FBRyxHQUFNLEdBQUcsU0FBTSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFDakI7Z0JBQ0UsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQztxQkFDaEQsSUFBSSxDQUNILEtBQUssRUFBRSxFQUNQLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FDeEM7YUFDRixDQUNGLENBQUM7U0FDSDtLQUNGOzs7OztJQUVELGlDQUFTOzs7O0lBQVQsVUFBVSxHQUFXOztRQUNuQixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQzs7UUFDcEIsSUFBTSxHQUFHLHFCQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFlLEVBQUM7UUFDbkQsT0FBTyxHQUFHLENBQUM7S0FDWjs7Ozs7SUFFRCw4QkFBTTs7OztJQUFOLFVBQU8sR0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzdCOztnQkE5Q0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFiUSxVQUFVO2dEQTZCZCxRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7Z0JBekJ2QixTQUFTOzs7d0JBTGxCOztTQWVhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvbiB7XG4gIG9iczogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PjtcbiAgbG9hZGVkPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uU2VydmljZSB7XG4gIHByaXZhdGUgc3ZnTWFwID0gbmV3IE1hcDxzdHJpbmcsIFN2Z0ljb24+KCk7XG4gIGNsYXNzZXMgPSB7XG4gICAgc3ZnOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ19zdmcnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYHdpZHRoOmluaGVyaXQ7YCArXG4gICAgICAgICAgYGhlaWdodDppbmhlcml0O2AgK1xuICAgICAgICAgIGBmaWxsOmN1cnJlbnRDb2xvcjtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHsgfVxuXG4gIHNldFN2ZyhrZXk6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICB1cmwgPSBgJHt1cmx9LnN2Z2A7XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LFxuICAgICAgICB7XG4gICAgICAgICAgb2JzOiB0aGlzLmh0dHAuZ2V0KHVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgICAgIG1hcChzdmdUZXh0ID0+IHRoaXMudGV4dFRvU3ZnKHN2Z1RleHQpKSxcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgdGV4dFRvU3ZnKHN0cjogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gc3RyO1xuICAgIGNvbnN0IHN2ZyA9IGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKSBhcyBTVkdFbGVtZW50O1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBnZXRTdmcoa2V5OiBzdHJpbmcpOiBTdmdJY29uIHtcbiAgICByZXR1cm4gdGhpcy5zdmdNYXAuZ2V0KGtleSk7XG4gIH1cbn1cblxuIl19