import * as tslib_1 from "tslib";
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
const STYLE_PRIORITY = -2;
/** The following styles will never be updated */
const styles = {
    svg: {
        width: 'inherit',
        height: 'inherit',
        fill: 'currentColor',
    }
};
let LyIconService = class LyIconService {
    constructor(http, _sanitizer, _document, theme) {
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
        this.defaultSvgIcon = this._textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>');
    }
    get defaultClass() {
        return this._defaultClass;
    }
    get defaultClassPrefix() {
        return this._defaultClassPrefix;
    }
    setSvg(key, url) {
        if (!this.svgMap.has(key)) {
            const urlSanitized = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, url);
            const svgIcon = {
                obs: this.http.get(`${urlSanitized}.svg`, { responseType: 'text' })
                    .pipe(share(), map(svgText => {
                    if (svgIcon.svg) {
                        return svgIcon.svg;
                    }
                    const svg = this._textToSvg(svgText);
                    this._cacheSvgIcon(svg, key);
                    return svg;
                }))
            };
            this.svgMap.set(key, svgIcon);
        }
    }
    addSvgIconLiteral(key, literal) {
        if (!this.svgMap.has(key)) {
            const sanitizedLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
            if (!sanitizedLiteral) {
                throw new Error(`LyIconService: Failed sanitize '${key}'`);
            }
            const svg = this._textToSvg(sanitizedLiteral);
            this.svgMap.set(key, {
                svg
            });
        }
    }
    _textToSvg(str) {
        const div = this._document.createElement('DIV');
        div.innerHTML = str;
        const svg = div.querySelector('svg');
        return svg;
    }
    _cacheSvgIcon(svg, key) {
        const svgIconInfo = this.svgMap.get(key);
        if (!svgIconInfo.svg) {
            this.svgMap.get(key).svg = svg;
        }
    }
    getSvg(key) {
        if (!this.svgMap.has(key)) {
            throw new Error(`LyIconService: Icon ${key} not found`);
        }
        return this.svgMap.get(key);
    }
    /**
     * Set default className for `ly-icon`
     * @param className class name
     * @param prefix Class prefix,
     * For example if you use FontAwesome your prefix would be `fa-`,
     * then in the template it is no longer necessary to use the prefix
     * Example: `<ly-icon fontIcon="alarm">`
     */
    setDefaultClass(className, prefix) {
        this._defaultClass = className;
        this._defaultClassPrefix = prefix;
    }
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
    registerFontClass(opt) {
        this._fontClasses.set(opt.key, opt);
    }
    getFontClass(key) {
        return this._fontClasses.get(key);
    }
};
LyIconService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.DomSanitizer), i0.ɵɵinject(i3.DOCUMENT, 8), i0.ɵɵinject(i4.LyTheme2)); }, token: LyIconService, providedIn: "root" });
LyIconService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(2, Optional()), tslib_1.__param(2, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        DomSanitizer, Object, LyTheme2])
], LyIconService);
export { LyIconService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ljb24vIiwic291cmNlcyI6WyJpY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFZLFlBQVksRUFBbUIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7O0FBRXBGLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBVTFCLGlEQUFpRDtBQUNqRCxNQUFNLE1BQU0sR0FBRztJQUNiLEdBQUcsRUFBRTtRQUNILEtBQUssRUFBRSxTQUFTO1FBQ2hCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLElBQUksRUFBRSxjQUFjO0tBQ3JCO0NBQ0YsQ0FBQztBQVVGLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFrQnhCLFlBQ1UsSUFBZ0IsRUFDaEIsVUFBd0IsRUFDTSxTQUFjLEVBQzVDLEtBQWU7UUFIZixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQWM7UUFDTSxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQzVDLFVBQUssR0FBTCxLQUFLLENBQVU7UUFyQmpCLGtCQUFhLEdBQVksZ0JBQWdCLENBQUM7UUFFMUMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDO1FBQ3BDLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQTRCLENBQUM7UUFDM0Q7OztXQUdHO1FBQ00sWUFB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LE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsR0FBRyxZQUFZLENBQUMsQ0FBQztTQUN6RDtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNEOzs7Ozs7O09BT0c7SUFDSCxlQUFlLENBQUMsU0FBa0IsRUFBRSxNQUFlO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILGlCQUFpQixDQUFDLEdBQXFCO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFXO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGLENBQUE7O0FBL0dZLGFBQWE7SUFIekIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQXNCRyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTs2Q0FGZixVQUFVO1FBQ0osWUFBWSxVQUVqQixRQUFRO0dBdEJkLGFBQWEsQ0ErR3pCO1NBL0dZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU2FmZUh0bWwsIERvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9udENsYXNzT3B0aW9ucyB7XG4gIGtleTogc3RyaW5nO1xuICAvKiogQ2xhc3MgbmFtZSAqL1xuICBjbGFzcz86IHN0cmluZztcbiAgLyoqIEZyZWZpeCBjbGFzcyAqL1xuICBwcmVmaXg/OiBzdHJpbmc7XG59XG5cbi8qKiBUaGUgZm9sbG93aW5nIHN0eWxlcyB3aWxsIG5ldmVyIGJlIHVwZGF0ZWQgKi9cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3ZnOiB7XG4gICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBTdmdJY29uIHtcbiAgb2JzPzogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PjtcbiAgc3ZnPzogU1ZHRWxlbWVudDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uU2VydmljZSB7XG4gIHByaXZhdGUgX2RlZmF1bHRDbGFzcz86IHN0cmluZyA9ICdtYXRlcmlhbC1pY29ucyc7XG4gIHByaXZhdGUgX2RlZmF1bHRDbGFzc1ByZWZpeD86IHN0cmluZztcbiAgcHJpdmF0ZSBzdmdNYXAgPSBuZXcgTWFwPHN0cmluZywgU3ZnSWNvbj4oKTtcbiAgcHJpdmF0ZSBfZm9udENsYXNzZXMgPSBuZXcgTWFwPHN0cmluZywgRm9udENsYXNzT3B0aW9ucz4oKTtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICByZWFkb25seSBkZWZhdWx0U3ZnSWNvbjogU1ZHRWxlbWVudDtcbiAgZ2V0IGRlZmF1bHRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENsYXNzO1xuICB9XG4gIGdldCBkZWZhdWx0Q2xhc3NQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDbGFzc1ByZWZpeDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoaXMuZGVmYXVsdFN2Z0ljb24gPSB0aGlzLl90ZXh0VG9TdmcoJzxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIj48L2NpcmNsZT48L3N2Zz4nKTtcbiAgfVxuXG4gIHNldFN2ZyhrZXk6IHN0cmluZywgdXJsOiBTYWZlUmVzb3VyY2VVcmwpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCB1cmxTYW5pdGl6ZWQgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgdXJsKTtcbiAgICAgIGNvbnN0IHN2Z0ljb246IFN2Z0ljb24gPSB7XG4gICAgICAgIG9iczogdGhpcy5odHRwLmdldChgJHt1cmxTYW5pdGl6ZWR9LnN2Z2AsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgICBtYXAoc3ZnVGV4dCA9PiB7XG4gICAgICAgICAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN2Z0ljb24uc3ZnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fdGV4dFRvU3ZnKHN2Z1RleHQpO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVTdmdJY29uKHN2Zywga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBzdmc7XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LCBzdmdJY29uKTtcbiAgICB9XG4gIH1cblxuICBhZGRTdmdJY29uTGl0ZXJhbChrZXk6IHN0cmluZywgbGl0ZXJhbDogU2FmZUh0bWwpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRMaXRlcmFsID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBsaXRlcmFsKTtcbiAgICAgIGlmICghc2FuaXRpemVkTGl0ZXJhbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEx5SWNvblNlcnZpY2U6IEZhaWxlZCBzYW5pdGl6ZSAnJHtrZXl9J2ApO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fdGV4dFRvU3ZnKHNhbml0aXplZExpdGVyYWwpO1xuICAgICAgdGhpcy5zdmdNYXAuc2V0KGtleSwge1xuICAgICAgICBzdmdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHRUb1N2ZyhzdHI6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdHI7XG4gICAgY29uc3Qgc3ZnID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpIGFzIFNWR0VsZW1lbnQ7XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHByaXZhdGUgX2NhY2hlU3ZnSWNvbihzdmc6IFNWR0VsZW1lbnQsIGtleTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3ZnSWNvbkluZm8gPSB0aGlzLnN2Z01hcC5nZXQoa2V5KTtcbiAgICBpZiAoIXN2Z0ljb25JbmZvIS5zdmcpIHtcbiAgICAgIHRoaXMuc3ZnTWFwLmdldChrZXkpIS5zdmcgPSBzdmc7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3ZnKGtleTogc3RyaW5nKTogU3ZnSWNvbiB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBMeUljb25TZXJ2aWNlOiBJY29uICR7a2V5fSBub3QgZm91bmRgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3ZnTWFwLmdldChrZXkpITtcbiAgfVxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgY2xhc3NOYW1lIGZvciBgbHktaWNvbmBcbiAgICogQHBhcmFtIGNsYXNzTmFtZSBjbGFzcyBuYW1lXG4gICAqIEBwYXJhbSBwcmVmaXggQ2xhc3MgcHJlZml4LFxuICAgKiBGb3IgZXhhbXBsZSBpZiB5b3UgdXNlIEZvbnRBd2Vzb21lIHlvdXIgcHJlZml4IHdvdWxkIGJlIGBmYS1gLFxuICAgKiB0aGVuIGluIHRoZSB0ZW1wbGF0ZSBpdCBpcyBubyBsb25nZXIgbmVjZXNzYXJ5IHRvIHVzZSB0aGUgcHJlZml4XG4gICAqIEV4YW1wbGU6IGA8bHktaWNvbiBmb250SWNvbj1cImFsYXJtXCI+YFxuICAgKi9cbiAgc2V0RGVmYXVsdENsYXNzKGNsYXNzTmFtZT86IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdENsYXNzID0gY2xhc3NOYW1lO1xuICAgIHRoaXMuX2RlZmF1bHRDbGFzc1ByZWZpeCA9IHByZWZpeDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBuZXcgZm9udCBjbGFzcyBhbGlhc1xuICAgKiBkZW1vOlxuICAgKiBGb3IgRm9udEF3ZXNvbWVcbiAgICogcmVnaXN0ZXJGb250Q2xhc3Moe1xuICAgKiAgIGtleTogJ2ZhJyxcbiAgICogICBjbGFzczogJ2ZhJ1xuICAgKiAgIHByZWZpeDogJ2ZhLSdcbiAgICogfSlcbiAgICovXG4gIHJlZ2lzdGVyRm9udENsYXNzKG9wdDogRm9udENsYXNzT3B0aW9ucykge1xuICAgIHRoaXMuX2ZvbnRDbGFzc2VzLnNldChvcHQua2V5LCBvcHQpO1xuICB9XG5cbiAgZ2V0Rm9udENsYXNzKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRDbGFzc2VzLmdldChrZXkpO1xuICB9XG59XG4iXX0=