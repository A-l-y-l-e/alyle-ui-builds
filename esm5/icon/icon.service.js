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
            /** @type {?} */
            var svg = this._textToSvg(sanitizedLiteral);
            this.svgMap.set(key, {
                svg: svg
            });
        }
    };
    /**
     * @param {?} str
     * @return {?}
     */
    LyIconService.prototype._textToSvg = /**
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
     * @param {?} svg
     * @param {?} key
     * @return {?}
     */
    LyIconService.prototype._cacheSvgIcon = /**
     * @param {?} svg
     * @param {?} key
     * @return {?}
     */
    function (svg, key) {
        /** @type {?} */
        var svgIconInfo = this.svgMap.get(key);
        if (!svgIconInfo.svg) {
            this.svgMap.get(key).svg = svg;
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
        return this.svgMap.get(key);
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
     * @param {?} className class name
     * @param {?=} prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     * @return {?}
     */
    LyIconService.prototype.setDefaultClass = /**
     * Set default className for `ly-icon`
     * @param {?} className class name
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
    /** @type {?} */
    LyIconService.prototype._defaultClass;
    /** @type {?} */
    LyIconService.prototype._defaultClassPrefix;
    /** @type {?} */
    LyIconService.prototype.svgMap;
    /** @type {?} */
    LyIconService.prototype._fontClasses;
    /**
     * Styles
     * \@docs-private
     * @type {?}
     */
    LyIconService.prototype.classes;
    /** @type {?} */
    LyIconService.prototype.defaultSvgIcon;
    /** @type {?} */
    LyIconService.prototype.http;
    /** @type {?} */
    LyIconService.prototype._sanitizer;
    /** @type {?} */
    LyIconService.prototype._document;
    /** @type {?} */
    LyIconService.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ljb24vIiwic291cmNlcyI6WyJpY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFZLFlBQVksRUFBbUIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7OztJQUU5RSxjQUFjLEdBQUcsQ0FBQyxDQUFDOzs7O0FBRXpCLHNDQU1DOzs7SUFMQywrQkFBWTs7Ozs7SUFFWixpQ0FBZTs7Ozs7SUFFZixrQ0FBZ0I7Ozs7OztJQUlaLE1BQU0sR0FBRztJQUNiLEdBQUcsRUFBRTtRQUNILEtBQUssRUFBRSxTQUFTO1FBQ2hCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLElBQUksRUFBRSxjQUFjO0tBQ3JCO0NBQ0Y7Ozs7QUFFRCw2QkFHQzs7O0lBRkMsc0JBQTZCOztJQUM3QixzQkFBaUI7O0FBR25CO0lBcUJFLHVCQUNVLElBQWdCLEVBQ2hCLFVBQXdCLEVBQ00sU0FBYyxFQUM1QyxLQUFlO1FBSGYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFjO1FBQ00sY0FBUyxHQUFULFNBQVMsQ0FBSztRQUM1QyxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBckJqQixrQkFBYSxHQUFHLGdCQUFnQixDQUFDO1FBRWpDLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUNwQyxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUE0QixDQUFDOzs7OztRQUtsRCxZQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBZWxFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO0lBQ25ILENBQUM7SUFkRCxzQkFBSSx1Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDZDQUFrQjs7OztRQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ2xDLENBQUM7OztPQUFBOzs7Ozs7SUFXRCw4QkFBTTs7Ozs7SUFBTixVQUFPLEdBQVcsRUFBRSxHQUFvQjtRQUF4QyxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztnQkFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDOztnQkFDMUUsU0FBTyxHQUFZO2dCQUN2QixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksWUFBWSxTQUFNLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7cUJBQ2xFLElBQUksQ0FDSCxLQUFLLEVBQUUsRUFDUCxHQUFHLENBQUMsVUFBQSxPQUFPO29CQUNULElBQUksU0FBTyxDQUFDLEdBQUcsRUFBRTt3QkFDZixPQUFPLFNBQU8sQ0FBQyxHQUFHLENBQUM7cUJBQ3BCOzt3QkFDSyxHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ3BDLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM3QixPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDLENBQUMsQ0FDSDthQUNGO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQU8sQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQseUNBQWlCOzs7OztJQUFqQixVQUFrQixHQUFXLEVBQUUsT0FBaUI7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztnQkFDbkIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7O2dCQUMxRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ25CLEdBQUcsS0FBQTthQUNKLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxrQ0FBVTs7OztJQUFsQixVQUFtQixHQUFXOztZQUN0QixHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDOztZQUNkLEdBQUcsR0FBRyxtQkFBQSxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFjO1FBQ2xELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7O0lBRU8scUNBQWE7Ozs7O0lBQXJCLFVBQXNCLEdBQWUsRUFBRSxHQUFXOztZQUMxQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7OztJQUVELDhCQUFNOzs7O0lBQU4sVUFBTyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNEOzs7Ozs7O09BT0c7Ozs7Ozs7Ozs7SUFDSCx1Q0FBZTs7Ozs7Ozs7O0lBQWYsVUFBZ0IsU0FBd0IsRUFBRSxNQUFlO1FBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRzs7Ozs7Ozs7Ozs7OztJQUNILHlDQUFpQjs7Ozs7Ozs7Ozs7O0lBQWpCLFVBQWtCLEdBQXFCO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxvQ0FBWTs7OztJQUFaLFVBQWEsR0FBVztRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQTNHRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWpDUSxVQUFVO2dCQUtBLFlBQVk7Z0RBa0QxQixRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7Z0JBbkR2QixRQUFROzs7d0JBTGpCO0NBNElDLEFBNUdELElBNEdDO1NBekdZLGFBQWE7OztJQUN4QixzQ0FBeUM7O0lBQ3pDLDRDQUFvQzs7SUFDcEMsK0JBQTRDOztJQUM1QyxxQ0FBMkQ7Ozs7OztJQUszRCxnQ0FBb0U7O0lBQ3BFLHVDQUFvQzs7SUFTbEMsNkJBQXdCOztJQUN4QixtQ0FBZ0M7O0lBQ2hDLGtDQUFvRDs7SUFDcEQsOEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFNhZmVIdG1sLCBEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvbnRDbGFzc09wdGlvbnMge1xuICBrZXk6IHN0cmluZztcbiAgLyoqIENsYXNzIG5hbWUgKi9cbiAgY2xhc3M/OiBzdHJpbmc7XG4gIC8qKiBGcmVmaXggY2xhc3MgKi9cbiAgcHJlZml4Pzogc3RyaW5nO1xufVxuXG4vKiogVGhlIGZvbGxvd2luZyBzdHlsZXMgd2lsbCBuZXZlciBiZSB1cGRhdGVkICovXG5jb25zdCBzdHlsZXMgPSB7XG4gIHN2Zzoge1xuICAgIHdpZHRoOiAnaW5oZXJpdCcsXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvbiB7XG4gIG9icz86IE9ic2VydmFibGU8U1ZHRWxlbWVudD47XG4gIHN2Zz86IFNWR0VsZW1lbnQ7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvblNlcnZpY2Uge1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3MgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICBwcml2YXRlIF9kZWZhdWx0Q2xhc3NQcmVmaXg6IHN0cmluZztcbiAgcHJpdmF0ZSBzdmdNYXAgPSBuZXcgTWFwPHN0cmluZywgU3ZnSWNvbj4oKTtcbiAgcHJpdmF0ZSBfZm9udENsYXNzZXMgPSBuZXcgTWFwPHN0cmluZywgRm9udENsYXNzT3B0aW9ucz4oKTtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICByZWFkb25seSBkZWZhdWx0U3ZnSWNvbjogU1ZHRWxlbWVudDtcbiAgZ2V0IGRlZmF1bHRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENsYXNzO1xuICB9XG4gIGdldCBkZWZhdWx0Q2xhc3NQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDbGFzc1ByZWZpeDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoaXMuZGVmYXVsdFN2Z0ljb24gPSB0aGlzLl90ZXh0VG9TdmcoJzxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIj48L2NpcmNsZT48L3N2Zz4nKTtcbiAgfVxuXG4gIHNldFN2ZyhrZXk6IHN0cmluZywgdXJsOiBTYWZlUmVzb3VyY2VVcmwpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCB1cmxTYW5pdGl6ZWQgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgdXJsKTtcbiAgICAgIGNvbnN0IHN2Z0ljb246IFN2Z0ljb24gPSB7XG4gICAgICAgIG9iczogdGhpcy5odHRwLmdldChgJHt1cmxTYW5pdGl6ZWR9LnN2Z2AsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgICBtYXAoc3ZnVGV4dCA9PiB7XG4gICAgICAgICAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN2Z0ljb24uc3ZnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fdGV4dFRvU3ZnKHN2Z1RleHQpO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVTdmdJY29uKHN2Zywga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBzdmc7XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LCBzdmdJY29uKTtcbiAgICB9XG4gIH1cblxuICBhZGRTdmdJY29uTGl0ZXJhbChrZXk6IHN0cmluZywgbGl0ZXJhbDogU2FmZUh0bWwpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRMaXRlcmFsID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBsaXRlcmFsKTtcbiAgICAgIGNvbnN0IHN2ZyA9IHRoaXMuX3RleHRUb1N2ZyhzYW5pdGl6ZWRMaXRlcmFsKTtcbiAgICAgIHRoaXMuc3ZnTWFwLnNldChrZXksIHtcbiAgICAgICAgc3ZnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90ZXh0VG9Tdmcoc3RyOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gc3RyO1xuICAgIGNvbnN0IHN2ZyA9IGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKSBhcyBTVkdFbGVtZW50O1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBwcml2YXRlIF9jYWNoZVN2Z0ljb24oc3ZnOiBTVkdFbGVtZW50LCBrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IHN2Z0ljb25JbmZvID0gdGhpcy5zdmdNYXAuZ2V0KGtleSk7XG4gICAgaWYgKCFzdmdJY29uSW5mby5zdmcpIHtcbiAgICAgIHRoaXMuc3ZnTWFwLmdldChrZXkpLnN2ZyA9IHN2ZztcbiAgICB9XG4gIH1cblxuICBnZXRTdmcoa2V5OiBzdHJpbmcpOiBTdmdJY29uIHtcbiAgICByZXR1cm4gdGhpcy5zdmdNYXAuZ2V0KGtleSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBkZWZhdWx0IGNsYXNzTmFtZSBmb3IgYGx5LWljb25gXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgY2xhc3MgbmFtZVxuICAgKiBAcGFyYW0gcHJlZml4IENsYXNzIHByZWZpeCxcbiAgICogRm9yIGV4YW1wbGUgaWYgeW91IHVzZSBGb250QXdlc29tZSB5b3VyIHByZWZpeCB3b3VsZCBiZSBgZmEtYCxcbiAgICogdGhlbiBpbiB0aGUgdGVtcGxhdGUgaXQgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeSB0byB1c2UgdGhlIHByZWZpeFxuICAgKiBFeGFtcGxlOiBgPGx5LWljb24gZm9udEljb249XCJhbGFybVwiPmBcbiAgICovXG4gIHNldERlZmF1bHRDbGFzcyhjbGFzc05hbWU6IHN0cmluZyB8IG51bGwsIHByZWZpeD86IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRDbGFzcyA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLl9kZWZhdWx0Q2xhc3NQcmVmaXggPSBwcmVmaXg7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgbmV3IGZvbnQgY2xhc3MgYWxpYXNcbiAgICogZGVtbzpcbiAgICogRm9yIEZvbnRBd2Vzb21lXG4gICAqIHJlZ2lzdGVyRm9udENsYXNzKHtcbiAgICogICBrZXk6ICdmYScsXG4gICAqICAgY2xhc3M6ICdmYSdcbiAgICogICBwcmVmaXg6ICdmYS0nXG4gICAqIH0pXG4gICAqL1xuICByZWdpc3RlckZvbnRDbGFzcyhvcHQ6IEZvbnRDbGFzc09wdGlvbnMpIHtcbiAgICB0aGlzLl9mb250Q2xhc3Nlcy5zZXQob3B0LmtleSwgb3B0KTtcbiAgfVxuXG4gIGdldEZvbnRDbGFzcyhrZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9mb250Q2xhc3Nlcy5nZXQoa2V5KTtcbiAgfVxufVxuIl19