/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { map, share } from 'rxjs/operators';
import { LyTheme2 } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
import * as i3 from "@alyle/ui";
/** @type {?} */
const STYLE_PRIORITY = -2;
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
/** @type {?} */
SvgIcon.prototype.obs;
/** @type {?|undefined} */
SvgIcon.prototype.svg;
export class LyIconService {
    /**
     * @param {?} http
     * @param {?} document
     * @param {?} theme
     */
    constructor(http, document, theme) {
        this.http = http;
        this.document = document;
        this.theme = theme;
        this.svgMap = new Map();
        this.classes = this.theme.addStyleSheet(styles, STYLE_PRIORITY);
        this.defaultSvgIcon = this._textToSvg('<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"></circle></svg>');
    }
    /**
     * @param {?} key
     * @param {?} url
     * @return {?}
     */
    setSvg(key, url) {
        if (!this.svgMap.has(key)) {
            url = `${url}.svg`;
            /** @type {?} */
            const svgIcon = {
                obs: this.http.get(url, { responseType: 'text' })
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
     * @param {?} str
     * @return {?}
     */
    _textToSvg(str) {
        /** @type {?} */
        const div = this.document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        const svg = /** @type {?} */ (div.querySelector('svg'));
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
}
LyIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyIconService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: LyTheme2 }
];
/** @nocollapse */ LyIconService.ngInjectableDef = i0.defineInjectable({ factory: function LyIconService_Factory() { return new LyIconService(i0.inject(i1.HttpClient), i0.inject(i2.DOCUMENT, 8), i0.inject(i3.LyTheme2)); }, token: LyIconService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LyIconService.prototype.svgMap;
    /** @type {?} */
    LyIconService.prototype.classes;
    /** @type {?} */
    LyIconService.prototype.defaultSvgIcon;
    /** @type {?} */
    LyIconService.prototype.http;
    /** @type {?} */
    LyIconService.prototype.document;
    /** @type {?} */
    LyIconService.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2ljb24vIiwic291cmNlcyI6WyJpY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7O0FBRXJDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOztBQUUxQixNQUFNLE1BQU0sR0FBRztJQUNiLEdBQUcsRUFBRTtRQUNILEtBQUssRUFBRSxTQUFTO1FBQ2hCLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLElBQUksRUFBRSxjQUFjO0tBQ3JCO0NBQ0YsQ0FBQzs7Ozs7Ozs7O0FBVUYsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUl4QixZQUNVLE1BQzhCLFFBQWEsRUFDM0M7UUFGQSxTQUFJLEdBQUosSUFBSTtRQUMwQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQzNDLFVBQUssR0FBTCxLQUFLO3NCQU5FLElBQUksR0FBRyxFQUFtQjtRQUMzQyxlQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQU96RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMseUVBQXlFLENBQUMsQ0FBQztLQUNsSDs7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFXO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQzs7WUFDbkIsTUFBTSxPQUFPLEdBQVk7Z0JBQ3ZCLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7cUJBQ2hELElBQUksQ0FDSCxLQUFLLEVBQUUsRUFDUCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1osSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO3dCQUNmLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztxQkFDcEI7O29CQUNELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUM3QixPQUFPLEdBQUcsQ0FBQztpQkFDWixDQUFDLENBQ0g7YUFDRixDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQy9CO0tBQ0Y7Ozs7O0lBRU8sVUFBVSxDQUFDLEdBQVc7O1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDOztRQUNwQixNQUFNLEdBQUcscUJBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQWUsRUFBQztRQUNuRCxPQUFPLEdBQUcsQ0FBQzs7Ozs7OztJQUdMLGFBQWEsQ0FBQyxHQUFlLEVBQUUsR0FBVzs7UUFDaEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQzs7Ozs7O0lBR0gsTUFBTSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM3Qjs7O1lBcERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXZCUSxVQUFVOzRDQThCZCxRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7WUExQnZCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzdmc6IHtcbiAgICB3aWR0aDogJ2luaGVyaXQnLFxuICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb24ge1xuICBvYnM6IE9ic2VydmFibGU8U1ZHRWxlbWVudD47XG4gIHN2Zz86IFNWR0VsZW1lbnQ7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5SWNvblNlcnZpY2Uge1xuICBwcml2YXRlIHN2Z01hcCA9IG5ldyBNYXA8c3RyaW5nLCBTdmdJY29uPigpO1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICByZWFkb25seSBkZWZhdWx0U3ZnSWNvbjogU1ZHRWxlbWVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGlzLmRlZmF1bHRTdmdJY29uID0gdGhpcy5fdGV4dFRvU3ZnKCc8c3ZnIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCI+PC9jaXJjbGU+PC9zdmc+Jyk7XG4gIH1cblxuICBzZXRTdmcoa2V5OiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnN2Z01hcC5oYXMoa2V5KSkge1xuICAgICAgdXJsID0gYCR7dXJsfS5zdmdgO1xuICAgICAgY29uc3Qgc3ZnSWNvbjogU3ZnSWNvbiA9IHtcbiAgICAgICAgb2JzOiB0aGlzLmh0dHAuZ2V0KHVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzaGFyZSgpLFxuICAgICAgICAgIG1hcChzdmdUZXh0ID0+IHtcbiAgICAgICAgICAgIGlmIChzdmdJY29uLnN2Zykge1xuICAgICAgICAgICAgICByZXR1cm4gc3ZnSWNvbi5zdmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdmcgPSB0aGlzLl90ZXh0VG9Tdmcoc3ZnVGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZVN2Z0ljb24oc3ZnLCBrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHN2ZztcbiAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgfTtcbiAgICAgIHRoaXMuc3ZnTWFwLnNldChrZXksIHN2Z0ljb24pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RleHRUb1N2ZyhzdHI6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHN0cjtcbiAgICBjb25zdCBzdmcgPSBkaXYucXVlcnlTZWxlY3Rvcignc3ZnJykgYXMgU1ZHRWxlbWVudDtcbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FjaGVTdmdJY29uKHN2ZzogU1ZHRWxlbWVudCwga2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdmdJY29uSW5mbyA9IHRoaXMuc3ZnTWFwLmdldChrZXkpO1xuICAgIGlmICghc3ZnSWNvbkluZm8uc3ZnKSB7XG4gICAgICB0aGlzLnN2Z01hcC5nZXQoa2V5KS5zdmcgPSBzdmc7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3ZnKGtleTogc3RyaW5nKTogU3ZnSWNvbiB7XG4gICAgcmV0dXJuIHRoaXMuc3ZnTWFwLmdldChrZXkpO1xuICB9XG59XG5cbiJdfQ==