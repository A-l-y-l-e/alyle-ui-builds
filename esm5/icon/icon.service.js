/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var STYLE_PRIORITY = -2;
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
/**
 * The following styles will never be updated
 * @type {?}
 */
var styles = {
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
var LyIconService = /** @class */ (function () {
    function LyIconService(http, _sanitizer, _document, theme) {
        this.http = http;
        this._sanitizer = _sanitizer;
        this._document = _document;
        this.theme = theme;
        this._defaultClass = 'material-icons';
        this.svgMap = new Map();
        this._fontClasses = new Map();
        /**
         * Styles
         * \@docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.defaultSvgIcon = this._textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>');
    }
    Object.defineProperty(LyIconService.prototype, "defaultClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIconService.prototype, "defaultClassPrefix", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultClassPrefix;
        },
        enumerable: true,
        configurable: true
    });
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
            /** @type {?} */
            var urlSanitized = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, url);
            /** @type {?} */
            var svgIcon_1 = {
                obs: this.http.get(urlSanitized + ".svg", { responseType: 'text' })
                    .pipe(share(), map(function (svgText) {
                    if (svgIcon_1.svg) {
                        return svgIcon_1.svg;
                    }
                    /** @type {?} */
                    var svg = _this._textToSvg(svgText);
                    _this._cacheSvgIcon(svg, key);
                    return svg;
                }))
            };
            this.svgMap.set(key, svgIcon_1);
        }
    };
    /**
     * @param {?} key
     * @param {?} literal
     * @return {?}
     */
    LyIconService.prototype.addSvgIconLiteral = /**
     * @param {?} key
     * @param {?} literal
     * @return {?}
     */
    function (key, literal) {
        if (!this.svgMap.has(key)) {
            /** @type {?} */
            var sanitizedLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
            if (!sanitizedLiteral) {
                throw new Error("LyIconService: Failed sanitize '" + key + "'");
            }
            /** @type {?} */
            var svg = this._textToSvg(sanitizedLiteral);
            this.svgMap.set(key, {
                svg: svg
            });
        }
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    LyIconService.prototype._textToSvg = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var div = this._document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        var svg = (/** @type {?} */ (div.querySelector('svg')));
        return svg;
    };
    /**
     * @private
     * @param {?} svg
     * @param {?} key
     * @return {?}
     */
    LyIconService.prototype._cacheSvgIcon = /**
     * @private
     * @param {?} svg
     * @param {?} key
     * @return {?}
     */
    function (svg, key) {
        /** @type {?} */
        var svgIconInfo = this.svgMap.get(key);
        if (!(/** @type {?} */ (svgIconInfo)).svg) {
            (/** @type {?} */ (this.svgMap.get(key))).svg = svg;
        }
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
        if (!this.svgMap.has(key)) {
            throw new Error("LyIconService: Icon " + key + " not found");
        }
        return (/** @type {?} */ (this.svgMap.get(key)));
    };
    /**
     * Set default className for `ly-icon`
     * @param className class name
     * @param prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     */
    /**
     * Set default className for `ly-icon`
     * @param {?=} className class name
     * @param {?=} prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     * @return {?}
     */
    LyIconService.prototype.setDefaultClass = /**
     * Set default className for `ly-icon`
     * @param {?=} className class name
     * @param {?=} prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     * @return {?}
     */
    function (className, prefix) {
        this._defaultClass = className;
        this._defaultClassPrefix = prefix;
    };
    /**
     * Register new font class alias
     * demo:
     * For FontAwesome
     * registerFontClass({
     *   key: 'fa',
     *   class: 'fa'
     *   prefix: 'fa-'
     * })
     */
    /**
     * Register new font class alias
     * demo:
     * For FontAwesome
     * registerFontClass({
     *   key: 'fa',
     *   class: 'fa'
     *   prefix: 'fa-'
     * })
     * @param {?} opt
     * @return {?}
     */
    LyIconService.prototype.registerFontClass = /**
     * Register new font class alias
     * demo:
     * For FontAwesome
     * registerFontClass({
     *   key: 'fa',
     *   class: 'fa'
     *   prefix: 'fa-'
     * })
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        this._fontClasses.set(opt.key, opt);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LyIconService.prototype.getFontClass = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._fontClasses.get(key);
    };
    LyIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyIconService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: DomSanitizer },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyIconService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.inject(i1.HttpClient), i0.inject(i2.DomSanitizer), i0.inject(i3.DOCUMENT, 8), i0.inject(i4.LyTheme2)); }, token: LyIconService, providedIn: "root" });
    return LyIconService;
}());
export { LyIconService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyIconService.prototype._defaultClass;
    /**
     * @type {?}
     * @private
     */
    LyIconService.prototype._defaultClassPrefix;
    /**
     * @type {?}
     * @private
     */
    LyIconService.prototype.svgMap;
    /**
     * @type {?}
     * @private
     */
    LyIconService.prototype._fontClasses;
    /**
     * Styles
     * \@docs-private
     * @type {?}
     */
    LyIconService.prototype.classes;
    /** @type {?} */
    LyIconService.prototype.defaultSvgIcon;
    /**
     * @type {?}
     * @private
     */
    LyIconService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    LyIconService.prototype._sanitizer;
    /**
     * @type {?}
     * @private
     */
    LyIconService.prototype._document;
    /**
     * @type {?}
     * @private
     */
    LyIconService.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ljb24vIiwic291cmNlcyI6WyJpY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFZLFlBQVksRUFBbUIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztJQUU5RSxjQUFjLEdBQUcsQ0FBQyxDQUFDOzs7O0FBRXpCLHNDQU1DOzs7SUFMQywrQkFBWTs7Ozs7SUFFWixpQ0FBZTs7Ozs7SUFFZixrQ0FBZ0I7Ozs7OztJQUlaLE1BQU0sR0FBRztJQUNiLEdBQUcsRUFBRTtRQUNILEtBQUssRUFBRSxTQUFTO1FBQ2hCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLElBQUksRUFBRSxjQUFjO0tBQ3JCO0NBQ0Y7Ozs7QUFFRCw2QkFHQzs7O0lBRkMsc0JBQTZCOztJQUM3QixzQkFBaUI7O0FBR25CO0lBcUJFLHVCQUNVLElBQWdCLEVBQ2hCLFVBQXdCLEVBQ00sU0FBYyxFQUM1QyxLQUFlO1FBSGYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFjO1FBQ00sY0FBUyxHQUFULFNBQVMsQ0FBSztRQUM1QyxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBckJqQixrQkFBYSxHQUFZLGdCQUFnQixDQUFDO1FBRTFDLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUNwQyxp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Qzs7Ozs7SUFDckMsK0JBQTRDOzs7OztJQUM1QyxxQ0FBMkQ7Ozs7OztJQUszRCxnQ0FBb0U7O0lBQ3BFLHVDQUFvQzs7Ozs7SUFTbEMsNkJBQXdCOzs7OztJQUN4QixtQ0FBZ0M7Ozs7O0lBQ2hDLGtDQUFvRDs7Ozs7SUFDcEQsOEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFNhZmVIdG1sLCBEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvbnRDbGFzc09wdGlvbnMge1xuICBrZXk6IHN0cmluZztcbiAgLyoqIENsYXNzIG5hbWUgKi9cbiAgY2xhc3M/OiBzdHJpbmc7XG4gIC8qKiBGcmVmaXggY2xhc3MgKi9cbiAgcHJlZml4Pzogc3RyaW5nO1xufVxuXG4vKiogVGhlIGZvbGxvd2luZyBzdHlsZXMgd2lsbCBuZXZlciBiZSB1cGRhdGVkICovXG5jb25zdCBzdHlsZXMgPSB7XG4gIHN2Zzoge1xuICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvbiB7XG4gIG9icz86IE9ic2VydmFibGU8U1ZHRWxlbWVudD47XG4gIHN2Zz86IFNWR0VsZW1lbnQ7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvblNlcnZpY2Uge1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3M/OiBzdHJpbmcgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3NQcmVmaXg/OiBzdHJpbmc7XG4gIHByaXZhdGUgc3ZnTWFwID0gbmV3IE1hcDxzdHJpbmcsIFN2Z0ljb24+KCk7XG4gIHByaXZhdGUgX2ZvbnRDbGFzc2VzID0gbmV3IE1hcDxzdHJpbmcsIEZvbnRDbGFzc09wdGlvbnM+KCk7XG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcmVhZG9ubHkgZGVmYXVsdFN2Z0ljb246IFNWR0VsZW1lbnQ7XG4gIGdldCBkZWZhdWx0Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDbGFzcztcbiAgfVxuICBnZXQgZGVmYXVsdENsYXNzUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q2xhc3NQcmVmaXg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGlzLmRlZmF1bHRTdmdJY29uID0gdGhpcy5fdGV4dFRvU3ZnKCc8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCI+PC9jaXJjbGU+PC9zdmc+Jyk7XG4gIH1cblxuICBzZXRTdmcoa2V5OiBzdHJpbmcsIHVybDogU2FmZVJlc291cmNlVXJsKSB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgY29uc3QgdXJsU2FuaXRpemVkID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5SRVNPVVJDRV9VUkwsIHVybCk7XG4gICAgICBjb25zdCBzdmdJY29uOiBTdmdJY29uID0ge1xuICAgICAgICBvYnM6IHRoaXMuaHR0cC5nZXQoYCR7dXJsU2FuaXRpemVkfS5zdmdgLCB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHNoYXJlKCksXG4gICAgICAgICAgbWFwKHN2Z1RleHQgPT4ge1xuICAgICAgICAgICAgaWYgKHN2Z0ljb24uc3ZnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdmdJY29uLnN2ZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3RleHRUb1N2ZyhzdmdUZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlU3ZnSWNvbihzdmcsIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gc3ZnO1xuICAgICAgICAgIH0pLFxuICAgICAgICApXG4gICAgICB9O1xuICAgICAgdGhpcy5zdmdNYXAuc2V0KGtleSwgc3ZnSWNvbik7XG4gICAgfVxuICB9XG5cbiAgYWRkU3ZnSWNvbkxpdGVyYWwoa2V5OiBzdHJpbmcsIGxpdGVyYWw6IFNhZmVIdG1sKSB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgY29uc3Qgc2FuaXRpemVkTGl0ZXJhbCA9IHRoaXMuX3Nhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgbGl0ZXJhbCk7XG4gICAgICBpZiAoIXNhbml0aXplZExpdGVyYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMeUljb25TZXJ2aWNlOiBGYWlsZWQgc2FuaXRpemUgJyR7a2V5fSdgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3RleHRUb1N2ZyhzYW5pdGl6ZWRMaXRlcmFsKTtcbiAgICAgIHRoaXMuc3ZnTWFwLnNldChrZXksIHtcbiAgICAgICAgc3ZnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90ZXh0VG9Tdmcoc3RyOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gc3RyO1xuICAgIGNvbnN0IHN2ZyA9IGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKSBhcyBTVkdFbGVtZW50O1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBwcml2YXRlIF9jYWNoZVN2Z0ljb24oc3ZnOiBTVkdFbGVtZW50LCBrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IHN2Z0ljb25JbmZvID0gdGhpcy5zdmdNYXAuZ2V0KGtleSk7XG4gICAgaWYgKCFzdmdJY29uSW5mbyEuc3ZnKSB7XG4gICAgICB0aGlzLnN2Z01hcC5nZXQoa2V5KSEuc3ZnID0gc3ZnO1xuICAgIH1cbiAgfVxuXG4gIGdldFN2ZyhrZXk6IHN0cmluZyk6IFN2Z0ljb24ge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTHlJY29uU2VydmljZTogSWNvbiAke2tleX0gbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN2Z01hcC5nZXQoa2V5KSE7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBkZWZhdWx0IGNsYXNzTmFtZSBmb3IgYGx5LWljb25gXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgY2xhc3MgbmFtZVxuICAgKiBAcGFyYW0gcHJlZml4IENsYXNzIHByZWZpeCxcbiAgICogRm9yIGV4YW1wbGUgaWYgeW91IHVzZSBGb250QXdlc29tZSB5b3VyIHByZWZpeCB3b3VsZCBiZSBgZmEtYCxcbiAgICogdGhlbiBpbiB0aGUgdGVtcGxhdGUgaXQgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeSB0byB1c2UgdGhlIHByZWZpeFxuICAgKiBFeGFtcGxlOiBgPGx5LWljb24gZm9udEljb249XCJhbGFybVwiPmBcbiAgICovXG4gIHNldERlZmF1bHRDbGFzcyhjbGFzc05hbWU/OiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRDbGFzcyA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLl9kZWZhdWx0Q2xhc3NQcmVmaXggPSBwcmVmaXg7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgbmV3IGZvbnQgY2xhc3MgYWxpYXNcbiAgICogZGVtbzpcbiAgICogRm9yIEZvbnRBd2Vzb21lXG4gICAqIHJlZ2lzdGVyRm9udENsYXNzKHtcbiAgICogICBrZXk6ICdmYScsXG4gICAqICAgY2xhc3M6ICdmYSdcbiAgICogICBwcmVmaXg6ICdmYS0nXG4gICAqIH0pXG4gICAqL1xuICByZWdpc3RlckZvbnRDbGFzcyhvcHQ6IEZvbnRDbGFzc09wdGlvbnMpIHtcbiAgICB0aGlzLl9mb250Q2xhc3Nlcy5zZXQob3B0LmtleSwgb3B0KTtcbiAgfVxuXG4gIGdldEZvbnRDbGFzcyhrZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9mb250Q2xhc3Nlcy5nZXQoa2V5KTtcbiAgfVxufVxuIl19