/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
var /** @type {?} */ styles = {
    root: {
        display: 'block',
        overflow: 'hidden'
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
        this.classes = theme.addStyleSheet(styles, 'lyCard');
    }
    LyCardService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LyCardService.ctorParameters = function () { return [
        { type: LyTheme2, },
    ]; };
    /** @nocollapse */ LyCardService.ngInjectableDef = i0.defineInjectable({ factory: function LyCardService_Factory() { return new LyCardService(i0.inject(i1.LyTheme2)); }, token: LyCardService, providedIn: "root" });
    return LyCardService;
}());
export { LyCardService };
function LyCardService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyCardService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyCardService.ctorParameters;
    /** @type {?} */
    LyCardService.prototype.classes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2NhcmQvIiwic291cmNlcyI6WyJjYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBRXJDLHFCQUFNLE1BQU0sR0FBRztJQUNiLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLE9BQU87UUFDaEIsT0FBTyxFQUFFLFdBQVc7S0FDckI7SUFDRCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsT0FBTztRQUNoQixPQUFPLEVBQUUsVUFBVTtLQUNwQjtJQUNELFdBQVcsRUFBRTtRQUNYLE1BQU0sRUFBRSxPQUFPO0tBQ2hCO0NBQ0YsQ0FBQzs7SUFVQSx1QkFDRSxLQUFlO1FBRWYsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztLQUN0RDs7Z0JBWkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFwQnpCLFFBQVE7Ozt3QkFEakI7O1NBc0JhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICcxNnB4IDI0cHgnXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBhZGRpbmc6ICc4cHggMTJweCdcbiAgfSxcbiAgYWN0aW9uc0l0ZW06IHtcbiAgICBtYXJnaW46ICcwIDRweCdcbiAgfVxufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMeUNhcmRTZXJ2aWNlIHtcbiAgY2xhc3Nlczoge1xuICAgIHJvb3Q6IHN0cmluZyxcbiAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgYWN0aW9uczogc3RyaW5nLFxuICAgIGFjdGlvbnNJdGVtOiBzdHJpbmcsXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGlzLmNsYXNzZXMgPSB0aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5Q2FyZCcpO1xuICB9XG59XG4iXX0=