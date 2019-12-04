import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { map, share } from 'rxjs/operators';
import { LyTheme2 } from '@alyle/ui';
import { SafeHtml, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
import * as i4 from "@alyle/ui";
var STYLE_PRIORITY = -2;
/** The following styles will never be updated */
var styles = {
    svg: {
        width: 'inherit',
        height: 'inherit',
        fill: 'currentColor',
    }
};
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
         * @docs-private
         */
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.defaultSvgIcon = '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>';
    }
    Object.defineProperty(LyIconService.prototype, "defaultClass", {
        get: function () {
            return this._defaultClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyIconService.prototype, "defaultClassPrefix", {
        get: function () {
            return this._defaultClassPrefix;
        },
        enumerable: true,
        configurable: true
    });
    LyIconService.prototype.setSvg = function (key, url) {
        var _this = this;
        if (!this.svgMap.has(key)) {
            var urlSanitized = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, url);
            var svgIcon_1 = {
                obs: this.http.get(urlSanitized + ".svg", { responseType: 'text' })
                    .pipe(share(), map(function (svgText) {
                    if (svgIcon_1.svg) {
                        return svgIcon_1.svg;
                    }
                    var svg = _this._textToSvg(svgText);
                    _this._cacheSvgIcon(svg, key);
                    return svg;
                }))
            };
            this.svgMap.set(key, svgIcon_1);
        }
    };
    LyIconService.prototype.addSvgIconLiteral = function (key, literal) {
        if (!this.svgMap.has(key)) {
            var sanitizedLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
            if (!sanitizedLiteral) {
                throw new Error("LyIconService: Failed sanitize '" + key + "'");
            }
            var svg = this._textToSvg(sanitizedLiteral);
            this.svgMap.set(key, {
                svg: svg
            });
        }
    };
    /** String to SVG */
    LyIconService.prototype._textToSvg = function (str) {
        var div = this._document.createElement('DIV');
        div.innerHTML = str;
        var svg = div.querySelector('svg');
        return svg;
    };
    LyIconService.prototype._cacheSvgIcon = function (svg, key) {
        var svgIconInfo = this.svgMap.get(key);
        if (!svgIconInfo.svg) {
            this.svgMap.get(key).svg = svg;
        }
    };
    LyIconService.prototype.getSvg = function (key) {
        if (!this.svgMap.has(key)) {
            throw new Error("LyIconService: Icon " + key + " not found");
        }
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
    LyIconService.prototype.setDefaultClass = function (className, prefix) {
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
    LyIconService.prototype.registerFontClass = function (opt) {
        this._fontClasses.set(opt.key, opt);
    };
    LyIconService.prototype.getFontClass = function (key) {
        return this._fontClasses.get(key);
    };
    LyIconService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: DomSanitizer },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: LyTheme2 }
    ]; };
    LyIconService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.DomSanitizer), i0.ɵɵinject(i3.DOCUMENT, 8), i0.ɵɵinject(i4.LyTheme2)); }, token: LyIconService, providedIn: "root" });
    LyIconService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(2, Optional()), tslib_1.__param(2, Inject(DOCUMENT))
    ], LyIconService);
    return LyIconService;
}());
export { LyIconService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ljb24vIiwic291cmNlcyI6WyJpY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7OztBQUVwRixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQVUxQixpREFBaUQ7QUFDakQsSUFBTSxNQUFNLEdBQUc7SUFDYixHQUFHLEVBQUU7UUFDSCxLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsY0FBYztLQUNyQjtDQUNGLENBQUM7QUFVRjtJQWtCRSx1QkFDVSxJQUFnQixFQUNoQixVQUF3QixFQUNNLFNBQWMsRUFDNUMsS0FBZTtRQUhmLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQUNNLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFDNUMsVUFBSyxHQUFMLEtBQUssQ0FBVTtRQXJCakIsa0JBQWEsR0FBWSxnQkFBZ0IsQ0FBQztRQUUxQyxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7UUFDcEMsaUJBQVksR0FBRyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztRQUMzRDs7O1dBR0c7UUFDTSxZQUFPLEdBQUcs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QUVELDhCQUFNLEdBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF1QixHQUFHLGVBQVksQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRztJQUNILHVDQUFlLEdBQWYsVUFBZ0IsU0FBa0IsRUFBRSxNQUFlO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILHlDQUFpQixHQUFqQixVQUFrQixHQUFxQjtRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsR0FBVztRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQTVGZSxVQUFVO2dCQUNKLFlBQVk7Z0RBQy9CLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTtnQkFDYixRQUFROzs7SUF0QmQsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBc0JHLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO09BckJwQixhQUFhLENBZ0h6Qjt3QkFuSkQ7Q0FtSkMsQUFoSEQsSUFnSEM7U0FoSFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIFNlY3VyaXR5Q29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTYWZlSHRtbCwgRG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuZXhwb3J0IGludGVyZmFjZSBGb250Q2xhc3NPcHRpb25zIHtcbiAga2V5OiBzdHJpbmc7XG4gIC8qKiBDbGFzcyBuYW1lICovXG4gIGNsYXNzPzogc3RyaW5nO1xuICAvKiogRnJlZml4IGNsYXNzICovXG4gIHByZWZpeD86IHN0cmluZztcbn1cblxuLyoqIFRoZSBmb2xsb3dpbmcgc3R5bGVzIHdpbGwgbmV2ZXIgYmUgdXBkYXRlZCAqL1xuY29uc3Qgc3R5bGVzID0ge1xuICBzdmc6IHtcbiAgICB3aWR0aDogJ2luaGVyaXQnLFxuICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb24ge1xuICBvYnM/OiBPYnNlcnZhYmxlPFNWR0VsZW1lbnQ+O1xuICBzdmc/OiBTVkdFbGVtZW50O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUljb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZGVmYXVsdENsYXNzPzogc3RyaW5nID0gJ21hdGVyaWFsLWljb25zJztcbiAgcHJpdmF0ZSBfZGVmYXVsdENsYXNzUHJlZml4Pzogc3RyaW5nO1xuICBwcml2YXRlIHN2Z01hcCA9IG5ldyBNYXA8c3RyaW5nLCBTdmdJY29uPigpO1xuICBwcml2YXRlIF9mb250Q2xhc3NlcyA9IG5ldyBNYXA8c3RyaW5nLCBGb250Q2xhc3NPcHRpb25zPigpO1xuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHJlYWRvbmx5IGRlZmF1bHRTdmdJY29uOiBzdHJpbmc7XG4gIGdldCBkZWZhdWx0Q2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDbGFzcztcbiAgfVxuICBnZXQgZGVmYXVsdENsYXNzUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q2xhc3NQcmVmaXg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGlzLmRlZmF1bHRTdmdJY29uID0gJzxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIj48L2NpcmNsZT48L3N2Zz4nO1xuICB9XG5cbiAgc2V0U3ZnKGtleTogc3RyaW5nLCB1cmw6IFNhZmVSZXNvdXJjZVVybCkge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IHVybFNhbml0aXplZCA9IHRoaXMuX3Nhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuUkVTT1VSQ0VfVVJMLCB1cmwpO1xuICAgICAgY29uc3Qgc3ZnSWNvbjogU3ZnSWNvbiA9IHtcbiAgICAgICAgb2JzOiB0aGlzLmh0dHAuZ2V0KGAke3VybFNhbml0aXplZH0uc3ZnYCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzaGFyZSgpLFxuICAgICAgICAgIG1hcChzdmdUZXh0ID0+IHtcbiAgICAgICAgICAgIGlmIChzdmdJY29uLnN2Zykge1xuICAgICAgICAgICAgICByZXR1cm4gc3ZnSWNvbi5zdmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdmcgPSB0aGlzLl90ZXh0VG9Tdmcoc3ZnVGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZVN2Z0ljb24oc3ZnLCBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHN2ZztcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgfTtcbiAgICAgIHRoaXMuc3ZnTWFwLnNldChrZXksIHN2Z0ljb24pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN2Z0ljb25MaXRlcmFsKGtleTogc3RyaW5nLCBsaXRlcmFsOiBTYWZlSHRtbCkge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IHNhbml0aXplZExpdGVyYWwgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIGxpdGVyYWwpO1xuICAgICAgaWYgKCFzYW5pdGl6ZWRMaXRlcmFsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTHlJY29uU2VydmljZTogRmFpbGVkIHNhbml0aXplICcke2tleX0nYCk7XG4gICAgICB9XG4gICAgICBjb25zdCBzdmcgPSB0aGlzLl90ZXh0VG9Tdmcoc2FuaXRpemVkTGl0ZXJhbCk7XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LCB7XG4gICAgICAgIHN2Z1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFN0cmluZyB0byBTVkcgKi9cbiAgX3RleHRUb1N2ZyhzdHI6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdHI7XG4gICAgY29uc3Qgc3ZnID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIGFzIFNWR0VsZW1lbnQ7XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHByaXZhdGUgX2NhY2hlU3ZnSWNvbihzdmc6IFNWR0VsZW1lbnQsIGtleTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3ZnSWNvbkluZm8gPSB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgICBpZiAoIXN2Z0ljb25JbmZvIS5zdmcpIHtcbiAgICAgIHRoaXMuc3ZnTWFwLmdldChrZXkpIS5zdmcgPSBzdmc7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3ZnKGtleTogc3RyaW5nKTogU3ZnSWNvbiB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBMeUljb25TZXJ2aWNlOiBJY29uICR7a2V5fSBub3QgZm91bmRgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3ZnTWFwLmdldChrZXkpITtcbiAgfVxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgY2xhc3NOYW1lIGZvciBgbHktaWNvbmBcbiAgICogQHBhcmFtIGNsYXNzTmFtZSBjbGFzcyBuYW1lXG4gICAqIEBwYXJhbSBwcmVmaXggQ2xhc3MgcHJlZml4LFxuICAgKiBGb3IgZXhhbXBsZSBpZiB5b3UgdXNlIEZvbnRBd2Vzb21lIHlvdXIgcHJlZml4IHdvdWxkIGJlIGBmYS1gLFxuICAgKiB0aGVuIGluIHRoZSB0ZW1wbGF0ZSBpdCBpcyBubyBsb25nZXIgbmVjZXNzYXJ5IHRvIHVzZSB0aGUgcHJlZml4XG4gICAqIEV4YW1wbGU6IGA8bHktaWNvbiBmb250SWNvbj1cImFsYXJtXCI+YFxuICAgKi9cbiAgc2V0RGVmYXVsdENsYXNzKGNsYXNzTmFtZT86IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdENsYXNzID0gY2xhc3NOYW1lO1xuICAgIHRoaXMuX2RlZmF1bHRDbGFzc1ByZWZpeCA9IHByZWZpeDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBuZXcgZm9udCBjbGFzcyBhbGlhc1xuICAgKiBkZW1vOlxuICAgKiBGb3IgRm9udEF3ZXNvbWVcbiAgICogcmVnaXN0ZXJGb250Q2xhc3Moe1xuICAgKiAgIGtleTogJ2ZhJyxcbiAgICogICBjbGFzczogJ2ZhJ1xuICAgKiAgIHByZWZpeDogJ2ZhLSdcbiAgICogfSlcbiAgICovXG4gIHJlZ2lzdGVyRm9udENsYXNzKG9wdDogRm9udENsYXNzT3B0aW9ucykge1xuICAgIHRoaXMuX2ZvbnRDbGFzc2VzLnNldChvcHQua2V5LCBvcHQpO1xuICB9XG5cbiAgZ2V0Rm9udENsYXNzKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRDbGFzc2VzLmdldChrZXkpO1xuICB9XG59XG4iXX0=