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
        this.defaultSvgIcon = '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>';
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
    /** String to SVG */
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
LyIconService.ctorParameters = () => [
    { type: HttpClient },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: LyTheme2 }
];
LyIconService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.DomSanitizer), i0.ɵɵinject(i3.DOCUMENT, 8), i0.ɵɵinject(i4.LyTheme2)); }, token: LyIconService, providedIn: "root" });
LyIconService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(2, Optional()), tslib_1.__param(2, Inject(DOCUMENT))
], LyIconService);
export { LyIconService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ljb24vIiwic291cmNlcyI6WyJpY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7OztBQUVwRixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQVUxQixpREFBaUQ7QUFDakQsTUFBTSxNQUFNLEdBQUc7SUFDYixHQUFHLEVBQUU7UUFDSCxLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLEVBQUUsU0FBUztRQUNqQixJQUFJLEVBQUUsY0FBYztLQUNyQjtDQUNGLENBQUM7QUFVRixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBa0J4QixZQUNVLElBQWdCLEVBQ2hCLFVBQXdCLEVBQ00sU0FBYyxFQUM1QyxLQUFlO1FBSGYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFjO1FBQ00sY0FBUyxHQUFULFNBQVMsQ0FBSztRQUM1QyxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBckJqQixrQkFBYSxHQUFZLGdCQUFnQixDQUFDO1FBRTFDLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUNwQyxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUE0QixDQUFDO1FB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QUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLEdBQUcsWUFBWSxDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxDQUFDO0lBQy9CLENBQUM7SUFDRDs7Ozs7OztPQU9HO0lBQ0gsZUFBZSxDQUFDLFNBQWtCLEVBQUUsTUFBZTtRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxpQkFBaUIsQ0FBQyxHQUFxQjtRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBVztRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRixDQUFBOztZQTdGaUIsVUFBVTtZQUNKLFlBQVk7NENBQy9CLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTtZQUNiLFFBQVE7OztBQXRCZCxhQUFhO0lBSHpCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFzQkcsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7R0FyQnBCLGFBQWEsQ0FnSHpCO1NBaEhZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU2FmZUh0bWwsIERvbVNhbml0aXplciwgU2FmZVJlc291cmNlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9udENsYXNzT3B0aW9ucyB7XG4gIGtleTogc3RyaW5nO1xuICAvKiogQ2xhc3MgbmFtZSAqL1xuICBjbGFzcz86IHN0cmluZztcbiAgLyoqIEZyZWZpeCBjbGFzcyAqL1xuICBwcmVmaXg/OiBzdHJpbmc7XG59XG5cbi8qKiBUaGUgZm9sbG93aW5nIHN0eWxlcyB3aWxsIG5ldmVyIGJlIHVwZGF0ZWQgKi9cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3ZnOiB7XG4gICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBTdmdJY29uIHtcbiAgb2JzPzogT2JzZXJ2YWJsZTxTVkdFbGVtZW50PjtcbiAgc3ZnPzogU1ZHRWxlbWVudDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlJY29uU2VydmljZSB7XG4gIHByaXZhdGUgX2RlZmF1bHRDbGFzcz86IHN0cmluZyA9ICdtYXRlcmlhbC1pY29ucyc7XG4gIHByaXZhdGUgX2RlZmF1bHRDbGFzc1ByZWZpeD86IHN0cmluZztcbiAgcHJpdmF0ZSBzdmdNYXAgPSBuZXcgTWFwPHN0cmluZywgU3ZnSWNvbj4oKTtcbiAgcHJpdmF0ZSBfZm9udENsYXNzZXMgPSBuZXcgTWFwPHN0cmluZywgRm9udENsYXNzT3B0aW9ucz4oKTtcbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICByZWFkb25seSBkZWZhdWx0U3ZnSWNvbjogc3RyaW5nO1xuICBnZXQgZGVmYXVsdENsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q2xhc3M7XG4gIH1cbiAgZ2V0IGRlZmF1bHRDbGFzc1ByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdENsYXNzUHJlZml4O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhpcy5kZWZhdWx0U3ZnSWNvbiA9ICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCI+PC9jaXJjbGU+PC9zdmc+JztcbiAgfVxuXG4gIHNldFN2ZyhrZXk6IHN0cmluZywgdXJsOiBTYWZlUmVzb3VyY2VVcmwpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCB1cmxTYW5pdGl6ZWQgPSB0aGlzLl9zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlJFU09VUkNFX1VSTCwgdXJsKTtcbiAgICAgIGNvbnN0IHN2Z0ljb246IFN2Z0ljb24gPSB7XG4gICAgICAgIG9iczogdGhpcy5odHRwLmdldChgJHt1cmxTYW5pdGl6ZWR9LnN2Z2AsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgICBtYXAoc3ZnVGV4dCA9PiB7XG4gICAgICAgICAgICBpZiAoc3ZnSWNvbi5zdmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN2Z0ljb24uc3ZnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fdGV4dFRvU3ZnKHN2Z1RleHQpO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVTdmdJY29uKHN2Zywga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBzdmc7XG4gICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgIH07XG4gICAgICB0aGlzLnN2Z01hcC5zZXQoa2V5LCBzdmdJY29uKTtcbiAgICB9XG4gIH1cblxuICBhZGRTdmdJY29uTGl0ZXJhbChrZXk6IHN0cmluZywgbGl0ZXJhbDogU2FmZUh0bWwpIHtcbiAgICBpZiAoIXRoaXMuc3ZnTWFwLmhhcyhrZXkpKSB7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRMaXRlcmFsID0gdGhpcy5fc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBsaXRlcmFsKTtcbiAgICAgIGlmICghc2FuaXRpemVkTGl0ZXJhbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEx5SWNvblNlcnZpY2U6IEZhaWxlZCBzYW5pdGl6ZSAnJHtrZXl9J2ApO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3ZnID0gdGhpcy5fdGV4dFRvU3ZnKHNhbml0aXplZExpdGVyYWwpO1xuICAgICAgdGhpcy5zdmdNYXAuc2V0KGtleSwge1xuICAgICAgICBzdmdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTdHJpbmcgdG8gU1ZHICovXG4gIF90ZXh0VG9Tdmcoc3RyOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gc3RyO1xuICAgIGNvbnN0IHN2ZyA9IGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKSBhcyBTVkdFbGVtZW50O1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBwcml2YXRlIF9jYWNoZVN2Z0ljb24oc3ZnOiBTVkdFbGVtZW50LCBrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IHN2Z0ljb25JbmZvID0gdGhpcy5zdmdNYXAuZ2V0KGtleSk7XG4gICAgaWYgKCFzdmdJY29uSW5mbyEuc3ZnKSB7XG4gICAgICB0aGlzLnN2Z01hcC5nZXQoa2V5KSEuc3ZnID0gc3ZnO1xuICAgIH1cbiAgfVxuXG4gIGdldFN2ZyhrZXk6IHN0cmluZyk6IFN2Z0ljb24ge1xuICAgIGlmICghdGhpcy5zdmdNYXAuaGFzKGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTHlJY29uU2VydmljZTogSWNvbiAke2tleX0gbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN2Z01hcC5nZXQoa2V5KSE7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBkZWZhdWx0IGNsYXNzTmFtZSBmb3IgYGx5LWljb25gXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgY2xhc3MgbmFtZVxuICAgKiBAcGFyYW0gcHJlZml4IENsYXNzIHByZWZpeCxcbiAgICogRm9yIGV4YW1wbGUgaWYgeW91IHVzZSBGb250QXdlc29tZSB5b3VyIHByZWZpeCB3b3VsZCBiZSBgZmEtYCxcbiAgICogdGhlbiBpbiB0aGUgdGVtcGxhdGUgaXQgaXMgbm8gbG9uZ2VyIG5lY2Vzc2FyeSB0byB1c2UgdGhlIHByZWZpeFxuICAgKiBFeGFtcGxlOiBgPGx5LWljb24gZm9udEljb249XCJhbGFybVwiPmBcbiAgICovXG4gIHNldERlZmF1bHRDbGFzcyhjbGFzc05hbWU/OiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHRDbGFzcyA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLl9kZWZhdWx0Q2xhc3NQcmVmaXggPSBwcmVmaXg7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgbmV3IGZvbnQgY2xhc3MgYWxpYXNcbiAgICogZGVtbzpcbiAgICogRm9yIEZvbnRBd2Vzb21lXG4gICAqIHJlZ2lzdGVyRm9udENsYXNzKHtcbiAgICogICBrZXk6ICdmYScsXG4gICAqICAgY2xhc3M6ICdmYSdcbiAgICogICBwcmVmaXg6ICdmYS0nXG4gICAqIH0pXG4gICAqL1xuICByZWdpc3RlckZvbnRDbGFzcyhvcHQ6IEZvbnRDbGFzc09wdGlvbnMpIHtcbiAgICB0aGlzLl9mb250Q2xhc3Nlcy5zZXQob3B0LmtleSwgb3B0KTtcbiAgfVxuXG4gIGdldEZvbnRDbGFzcyhrZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9mb250Q2xhc3Nlcy5nZXQoa2V5KTtcbiAgfVxufVxuIl19