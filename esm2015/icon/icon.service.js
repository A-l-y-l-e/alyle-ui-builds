/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { map, share } from 'rxjs/operators';
import { LyTheme2 } from '@alyle/ui';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
import * as i4 from "@alyle/ui";
/** @type {?} */
const STYLE_PRIORITY = -2;
/**
 * @record
 */
export function FontClassOptions() { }
if (false) {
    /** @type {?} */
    FontClassOptions.prototype.key;
    /**
     * Class name
     * @type {?|undefined}
     */
    FontClassOptions.prototype.class;
    /**
     * Frefix class
     * @type {?|undefined}
     */
    FontClassOptions.prototype.prefix;
}
/** @type {?} */
const styles = {
    svg: {
        width: 'inherit',
        height: 'inherit',
        fill: 'currentColor',
    }
};
/**
 * @record
 */
export function SvgIcon() { }
if (false) {
    /** @type {?|undefined} */
    SvgIcon.prototype.obs;
    /** @type {?|undefined} */
    SvgIcon.prototype.svg;
}
export class LyIconService {
    /**
     * @param {?} http
     * @param {?} _sanitizer
     * @param {?} document
     * @param {?} theme
     */
    constructor(http, _sanitizer, document, theme) {
        this.http = http;
        this._sanitizer = _sanitizer;
        this.document = document;
        this.theme = theme;
        this._defaultClass = 'material-icons';
        this.svgMap = new Map();
        this._fontClasses = new Map();
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.defaultSvgIcon = this._textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>');
    }
    /**
     * @return {?}
     */
    get defaultClass() {
        return this._defaultClass;
    }
    /**
     * @return {?}
     */
    get defaultClassPrefix() {
        return this._defaultClassPrefix;
    }
    /**
     * @param {?} key
     * @param {?} url
     * @return {?}
     */
    setSvg(key, url) {
        if (!this.svgMap.has(key)) {
            /** @type {?} */
            const urlSanitized = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, url);
            /** @type {?} */
            const svgIcon = {
                obs: this.http.get(`${urlSanitized}.svg`, { responseType: 'text' })
                    .pipe(share(), map(svgText => {
                    if (svgIcon.svg) {
                        return svgIcon.svg;
                    }
                    /** @type {?} */
                    const svg = this._textToSvg(svgText);
                    this._cacheSvgIcon(svg, key);
                    return svg;
                }))
            };
            this.svgMap.set(key, svgIcon);
        }
    }
    /**
     * @param {?} key
     * @param {?} literal
     * @return {?}
     */
    addSvgIconLiteral(key, literal) {
        if (!this.svgMap.has(key)) {
            /** @type {?} */
            const sanitizedLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
            /** @type {?} */
            const svg = this._textToSvg(sanitizedLiteral);
            this.svgMap.set(key, {
                svg
            });
        }
    }
    /**
     * @param {?} str
     * @return {?}
     */
    _textToSvg(str) {
        /** @type {?} */
        const div = this.document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        const svg = (/** @type {?} */ (div.querySelector('svg')));
        return svg;
    }
    /**
     * @param {?} svg
     * @param {?} key
     * @return {?}
     */
    _cacheSvgIcon(svg, key) {
        /** @type {?} */
        const svgIconInfo = this.svgMap.get(key);
        if (!svgIconInfo.svg) {
            this.svgMap.get(key).svg = svg;
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getSvg(key) {
        return this.svgMap.get(key);
    }
    /**
     * Set default className for `ly-icon`
     * @param {?} className class name
     * @param {?=} prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     * @return {?}
     */
    setDefaultClass(className, prefix) {
        this._defaultClass = className;
        this._defaultClassPrefix = prefix;
    }
    /**
     * Register new font class alias
     * demo:
     * For FontAwesome
     * registerFontClass('fa', 'fa', 'fa-')
     * @param {?} opt
     * @return {?}
     */
    registerFontClass(opt) {
        this._fontClasses.set(opt.key, opt);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getFontClass(key) {
        return this._fontClasses.get(key);
    }
}
LyIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyIconService.ctorParameters = () => [
    { type: HttpClient },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: LyTheme2 }
];
/** @nocollapse */ LyIconService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.inject(i1.HttpClient), i0.inject(i2.DomSanitizer), i0.inject(i3.DOCUMENT, 8), i0.inject(i4.LyTheme2)); }, token: LyIconService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LyIconService.prototype._defaultClass;
    /** @type {?} */
    LyIconService.prototype._defaultClassPrefix;
    /** @type {?} */
    LyIconService.prototype.svgMap;
    /** @type {?} */
    LyIconService.prototype._fontClasses;
    /** @type {?} */
    LyIconService.prototype.classes;
    /** @type {?} */
    LyIconService.prototype.defaultSvgIcon;
    /** @type {?} */
    LyIconService.prototype.http;
    /** @type {?} */
    LyIconService.prototype._sanitizer;
    /** @type {?} */
    LyIconService.prototype.document;
    /** @type {?} */
    LyIconService.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ljb24vIiwic291cmNlcyI6WyJpY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFZLFlBQVksRUFBbUIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztNQUU5RSxjQUFjLEdBQUcsQ0FBQyxDQUFDOzs7O0FBRXpCLHNDQU1DOzs7SUFMQywrQkFBWTs7Ozs7SUFFWixpQ0FBZTs7Ozs7SUFFZixrQ0FBZ0I7OztNQUVaLE1BQU0sR0FBRztJQUNiLEdBQUcsRUFBRTtRQUNILEtBQUssRUFBRSxTQUFTO1FBQ2hCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLElBQUksRUFBRSxjQUFjO0tBQ3JCO0NBQ0Y7Ozs7QUFFRCw2QkFHQzs7O0lBRkMsc0JBQTZCOztJQUM3QixzQkFBaUI7O0FBTW5CLE1BQU0sT0FBTyxhQUFhOzs7Ozs7O0lBY3hCLFlBQ1UsSUFBZ0IsRUFDaEIsVUFBd0IsRUFDTSxRQUFhLEVBQzNDLEtBQWU7UUFIZixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQWM7UUFDTSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQzNDLFVBQUssR0FBTCxLQUFLLENBQVU7UUFqQmpCLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7UUFFakMsV0FBTSxHQUFHLElBQUksR0FBRyxF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ZSxDQUFDLFNBQXdCLEVBQUUsTUFBZTtRQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDO0lBQ3BDLENBQUM7Ozs7Ozs7OztJQVdELGlCQUFpQixDQUFDLEdBQXFCO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsR0FBVztRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztZQXRHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUEvQlEsVUFBVTtZQUtBLFlBQVk7NENBNEMxQixRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7WUE3Q3ZCLFFBQVE7Ozs7O0lBNkJmLHNDQUF5Qzs7SUFDekMsNENBQW9DOztJQUNwQywrQkFBNEM7O0lBQzVDLHFDQUEyRDs7SUFDM0QsZ0NBQTJEOztJQUMzRCx1Q0FBb0M7O0lBU2xDLDZCQUF3Qjs7SUFDeEIsbUNBQWdDOztJQUNoQyxpQ0FBbUQ7O0lBQ25ELDhCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFNlY3VyaXR5Q29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTYWZlSHRtbCwgRG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuZXhwb3J0IGludGVyZmFjZSBGb250Q2xhc3NPcHRpb25zIHtcbiAga2V5OiBzdHJpbmc7XG4gIC8qKiBDbGFzcyBuYW1lICovXG4gIGNsYXNzPzogc3RyaW5nO1xuICAvKiogRnJlZml4IGNsYXNzICovXG4gIHByZWZpeD86IHN0cmluZztcbn1cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3ZnOiB7XG4gICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBTdmdJY29uIHtcbiAgb2JzPzogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PjtcbiAgc3ZnPzogU1ZHRWxlbWVudDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uU2VydmljZSB7XG4gIHByaXZhdGUgX2RlZmF1bHRDbGFzcyA9ICdtYXRlcmlhbC1pY29ucyc7XG4gIHByaXZhdGUgX2RlZmF1bHRDbGFzc1ByZWZpeDogc3RyaW5nO1xuICBwcml2YXRlIHN2Z01hcCA9IG5ldyBNYXA8c3RyaW5nLCBTdmdJY29uPigpO1xuICBwcml2YXRlIF9mb250Q2xhc3NlcyA9IG5ldyBNYXA8c3RyaW5nLCBGb250Q2xhc3NPcHRpb25zPigpO1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICByZWFkb25seSBkZWZhdWx0U3ZnSWNvbjogU1ZHRWxlbWVudDtcbiAgZ2V0IGRlZmF1bHRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENsYXNzO1xuICB9XG4gIGdldCBkZWZhdWx0Q2xhc3NQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDbGFzc1ByZWZpeDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhpcy5kZWZhdWx0U3ZnSWNvbiA9IHRoaXMuX3RleHRUb1N2ZygnPHN2ZyB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIxMFwiPjwvY2lyY2xlPjwvc3ZnPicpO1xuICB9XG5cbiAgc2V0U3ZnKGtleTogc3RyaW5nLCB1cmw6IFNhZmVSZXNvdXJjZVVybCkge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IHVybFNhbml0aXplZCA9IHRoaXMuX3Nhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMLCB1cmwpO1xuICAgICAgY29uc3Qgc3ZnSWNvbjogU3ZnSWNvbiA9IHtcbiAgICAgICAgb2JzOiB0aGlzLmh0dHAuZ2V0KGAke3VybFNhbml0aXplZH0uc3ZnYCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzaGFyZSgpLFxuICAgICAgICAgIG1hcChzdmdUZXh0ID0+IHtcbiAgICAgICAgICAgIGlmIChzdmdJY29uLnN2Zykge1xuICAgICAgICAgICAgICByZXR1cm4gc3ZnSWNvbi5zdmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdmcgPSB0aGlzLl90ZXh0VG9Tdmcoc3ZnVGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZVN2Z0ljb24oc3ZnLCBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHN2ZztcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgfTtcbiAgICAgIHRoaXMuc3ZnTWFwLnNldChrZXksIHN2Z0ljb24pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN2Z0ljb25MaXRlcmFsKGtleTogc3RyaW5nLCBsaXRlcmFsOiBTYWZlSHRtbCkge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IHNhbml0aXplZExpdGVyYWwgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIGxpdGVyYWwpO1xuICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fdGV4dFRvU3ZnKHNhbml0aXplZExpdGVyYWwpO1xuICAgICAgdGhpcy5zdmdNYXAuc2V0KGtleSwge1xuICAgICAgICBzdmdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHRUb1N2ZyhzdHI6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHN0cjtcbiAgICBjb25zdCBzdmcgPSBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgYXMgU1ZHRWxlbWVudDtcbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FjaGVTdmdJY29uKHN2ZzogU1ZHRWxlbWVudCwga2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdmdJY29uSW5mbyA9IHRoaXMuc3ZnTWFwLmdldChrZXkpO1xuICAgIGlmICghc3ZnSWNvbkluZm8uc3ZnKSB7XG4gICAgICB0aGlzLnN2Z01hcC5nZXQoa2V5KS5zdmcgPSBzdmc7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3ZnKGtleTogc3RyaW5nKTogU3ZnSWNvbiB7XG4gICAgcmV0dXJuIHRoaXMuc3ZnTWFwLmdldChrZXkpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCBjbGFzc05hbWUgZm9yIGBseS1pY29uYFxuICAgKiBAcGFyYW0gY2xhc3NOYW1lIGNsYXNzIG5hbWVcbiAgICogQHBhcmFtIHByZWZpeCBDbGFzcyBwcmVmaXgsXG4gICAqIEZvciBleGFtcGxlIGlmIHlvdSB1c2UgRm9udEF3ZXNvbWUgeW91ciBwcmVmaXggd291bGQgYmUgYGZhLWAsXG4gICAqIHRoZW4gaW4gdGhlIHRlbXBsYXRlIGl0IGlzIG5vIGxvbmdlciBuZWNlc3NhcnkgdG8gdXNlIHRoZSBwcmVmaXhcbiAgICogRXhhbXBsZTogYDxseS1pY29uIGZvbnRJY29uPVwiYWxhcm1cIj5gXG4gICAqL1xuICBzZXREZWZhdWx0Q2xhc3MoY2xhc3NOYW1lOiBzdHJpbmcgfCBudWxsLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0Q2xhc3MgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5fZGVmYXVsdENsYXNzUHJlZml4ID0gcHJlZml4O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIG5ldyBmb250IGNsYXNzIGFsaWFzXG4gICAqIGRlbW86XG4gICAqIEZvciBGb250QXdlc29tZVxuICAgKiByZWdpc3RlckZvbnRDbGFzcygnZmEnLCAnZmEnLCAnZmEtJylcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcGFyYW0gY2xhc3NOYW1lXG4gICAqIEBwYXJhbSBwcmVmaXggQ2xhc3MgcHJlZml4XG4gICAqL1xuICByZWdpc3RlckZvbnRDbGFzcyhvcHQ6IEZvbnRDbGFzc09wdGlvbnMpIHtcbiAgICB0aGlzLl9mb250Q2xhc3Nlcy5zZXQob3B0LmtleSwgb3B0KTtcbiAgfVxuXG4gIGdldEZvbnRDbGFzcyhrZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9mb250Q2xhc3Nlcy5nZXQoa2V5KTtcbiAgfVxufVxuIl19