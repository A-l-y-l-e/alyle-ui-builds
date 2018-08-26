/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
/** @type {?} */
var styles = {
    root: {
        display: 'block',
        overflow: 'hidden',
        borderRadius: '2px'
    },
    content: {
        display: 'block',
        padding: '16px 24px'
    },
    actions: {
        display: 'block',
        padding: '8px 12px'
    },
    actionsItem: {
        margin: '0 4px'
    }
};
var LyCardService = /** @class */ (function () {
    function LyCardService(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'lyCard');
    }
    LyCardService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LyCardService.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyCardService.ngInjectableDef = i0.defineInjectable({ factory: function LyCardService_Factory() { return new LyCardService(i0.inject(i1.LyTheme2)); }, token: LyCardService, providedIn: "root" });
    return LyCardService;
}());
export { LyCardService };
if (false) {
    /** @type {?} */
    LyCardService.prototype.classes;
    /** @type {?} */
    LyCardService.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2NhcmQvIiwic291cmNlcyI6WyJjYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQUVyQyxJQUFNLE1BQU0sR0FBRztJQUNiLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFlBQVksRUFBRSxLQUFLO0tBQ3BCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLE9BQU87UUFDaEIsT0FBTyxFQUFFLFdBQVc7S0FDckI7SUFDRCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsT0FBTztRQUNoQixPQUFPLEVBQUUsVUFBVTtLQUNwQjtJQUNELFdBQVcsRUFBRTtRQUNYLE1BQU0sRUFBRSxPQUFPO0tBQ2hCO0NBQ0YsQ0FBQzs7SUFLQSx1QkFDVTtRQUFBLFVBQUssR0FBTCxLQUFLO3VCQUZMLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7S0FHL0M7O2dCQUxOLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBckJ6QixRQUFROzs7d0JBRGpCOztTQXVCYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICcxNnB4IDI0cHgnXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICc4cHggMTJweCdcbiAgfSxcbiAgYWN0aW9uc0l0ZW06IHtcbiAgICBtYXJnaW46ICcwIDRweCdcbiAgfVxufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRTZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUNhcmQnKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cbiJdfQ==