/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LyTheme2, LY_COMMON_STYLES } from '@alyle/ui';
import * as i0 from "@angular/core";
import * as i1 from "@alyle/ui";
/** @type {?} */
export var styles = function (theme) { return ({
    rippleContainer: {
        position: 'absolute',
        width: '5px',
        height: '5px',
        background: 'currentColor',
        opacity: '.19',
        borderRadius: '100%',
        transform: 'scale(0)',
        transition: "opacity " + theme.ripple.transition.opacity + ",transform " + theme.ripple.transition.transform,
        pointerEvents: 'none'
    },
    container: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' })
}); };
var LyRippleService = /** @class */ (function () {
    function LyRippleService(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'lyRipple');
    }
    LyRippleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyRippleService.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyRippleService.ngInjectableDef = i0.defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(i0.inject(i1.LyTheme2)); }, token: LyRippleService, providedIn: "root" });
    return LyRippleService;
}());
export { LyRippleService };
if (false) {
    /** @type {?} */
    LyRippleService.prototype.classes;
    /** @type {?} */
    LyRippleService.prototype.theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmlwcGxlLyIsInNvdXJjZXMiOlsicmlwcGxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQWtCLE1BQU0sV0FBVyxDQUFDOzs7O0FBRXZFLFdBQWEsTUFBTSxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDaEQsZUFBZSxFQUFFO1FBQ2YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLEtBQUs7UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLFVBQVUsRUFBRSxjQUFjO1FBQzFCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsWUFBWSxFQUFFLE1BQU07UUFDcEIsU0FBUyxFQUFFLFVBQVU7UUFDckIsVUFBVSxFQUFFLGFBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxtQkFBYyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUMxRjtRQUNGLGFBQWEsRUFBRSxNQUFNO0tBQ3RCO0lBQ0QsU0FBUyx1QkFDSixnQkFBZ0IsQ0FBQyxJQUFJLElBQ3hCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLGFBQWEsRUFBRSxNQUFNLEVBQ3JCLFlBQVksRUFBRSxTQUFTLEdBQ3hCO0NBQ0YsQ0FBQyxFQW5CK0MsQ0FtQi9DLENBQUM7O0lBT0QseUJBQ1U7UUFBQSxVQUFLLEdBQUwsS0FBSzt1QkFGTCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO0tBR2pEOztnQkFQTixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXpCUSxRQUFROzs7MEJBRGpCOztTQTJCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIExZX0NPTU1PTl9TVFlMRVMsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gIHJpcHBsZUNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnNXB4JyxcbiAgICBoZWlnaHQ6ICc1cHgnLFxuICAgIGJhY2tncm91bmQ6ICdjdXJyZW50Q29sb3InLFxuICAgIG9wYWNpdHk6ICcuMTknLFxuICAgIGJvcmRlclJhZGl1czogJzEwMCUnLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLm9wYWNpdHl9LHRyYW5zZm9ybSAke3RoZW1lLnJpcHBsZS50cmFuc2l0aW9uLnRyYW5zZm9ybVxuICAgIH1gLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICB9LFxuICBjb250YWluZXI6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGwsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICB9XG59KTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGVTZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseVJpcHBsZScpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG59XG4iXX0=