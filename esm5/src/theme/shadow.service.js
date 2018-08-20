/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { shadowBuilderDeprecated } from '../shadow';
import * as i0 from "@angular/core";
var LyShadowService = /** @class */ (function () {
    function LyShadowService() {
        /**
         * Default elevation
         */
        this.elevation = 1;
    }
    /** demo: setShadow(...[elevation, color]...) */
    /**
     * demo: setShadow(...[elevation, color]...)
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} val
     * @param {?=} oldClassName
     * @return {?}
     */
    LyShadowService.prototype.setShadow = /**
     * demo: setShadow(...[elevation, color]...)
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} val
     * @param {?=} oldClassName
     * @return {?}
     */
    function (theme, elementRef, renderer, val, oldClassName) {
        var /** @type {?} */ keys;
        var /** @type {?} */ elevation;
        var /** @type {?} */ color = 'colorShadow';
        if (val) {
            keys = val.join('');
            elevation = val[0];
            color = val[1] || color;
        }
        else {
            keys = "" + this.elevation + color;
            elevation = this.elevation;
        }
        var /** @type {?} */ classname = theme.setUpStyle("shadow" + keys, { '': function () {
                return "" + shadowBuilderDeprecated(elevation, theme.colorOf(color));
            } });
        theme.updateClassName(elementRef.nativeElement, renderer, classname, oldClassName);
        return classname;
    };
    LyShadowService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */ LyShadowService.ngInjectableDef = i0.defineInjectable({ factory: function LyShadowService_Factory() { return new LyShadowService(); }, token: LyShadowService, providedIn: "root" });
    return LyShadowService;
}());
export { LyShadowService };
function LyShadowService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyShadowService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyShadowService.ctorParameters;
    /**
     * Default elevation
     * @type {?}
     */
    LyShadowService.prototype.elevation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvc2hhZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozt5QkFRdEMsQ0FBQzs7SUFDYixnREFBZ0Q7Ozs7Ozs7Ozs7SUFDaEQsbUNBQVM7Ozs7Ozs7OztJQUFULFVBQVUsS0FBZSxFQUFFLFVBQXNCLEVBQUUsUUFBbUIsRUFBRSxHQUFxQixFQUFFLFlBQXFCO1FBQ2xILHFCQUFJLElBQVksQ0FBQztRQUNqQixxQkFBSSxTQUFpQixDQUFDO1FBQ3RCLHFCQUFJLEtBQUssR0FBRyxhQUFhLENBQUM7UUFDMUIsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQixTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLEdBQUcsS0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQU8sQ0FBQztZQUNuQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QjtRQUNELHFCQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVMsSUFBTSxFQUFFLEVBQUMsRUFBRSxFQUFFO2dCQUN2RCxPQUFPLEtBQUcsdUJBQXVCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUcsQ0FBQzthQUN0RSxFQUFDLENBQUMsQ0FBQztRQUNKLEtBQUssQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ25GLE9BQU8sU0FBUyxDQUFDO0tBQ2xCOztnQkF4QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzBCQU5EOztTQU9hLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2hhZG93QnVpbGRlckRlcHJlY2F0ZWQgfSBmcm9tICcuLi9zaGFkb3cnO1xyXG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTHlTaGFkb3dTZXJ2aWNlIHtcclxuICAvKiogRGVmYXVsdCBlbGV2YXRpb24gKi9cclxuICBlbGV2YXRpb24gPSAxO1xyXG4gIC8qKiBkZW1vOiBzZXRTaGFkb3coLi4uW2VsZXZhdGlvbiwgY29sb3JdLi4uKSAqL1xyXG4gIHNldFNoYWRvdyh0aGVtZTogTHlUaGVtZTIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHZhbDogW251bWJlciwgc3RyaW5nXSwgb2xkQ2xhc3NOYW1lPzogc3RyaW5nKSB7XHJcbiAgICBsZXQga2V5czogc3RyaW5nO1xyXG4gICAgbGV0IGVsZXZhdGlvbjogbnVtYmVyO1xyXG4gICAgbGV0IGNvbG9yID0gJ2NvbG9yU2hhZG93JztcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAga2V5cyA9IHZhbC5qb2luKCcnKTtcclxuICAgICAgZWxldmF0aW9uID0gdmFsWzBdO1xyXG4gICAgICBjb2xvciA9IHZhbFsxXSB8fCBjb2xvcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGtleXMgPSBgJHt0aGlzLmVsZXZhdGlvbn0ke2NvbG9yfWA7XHJcbiAgICAgIGVsZXZhdGlvbiA9IHRoaXMuZWxldmF0aW9uO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xhc3NuYW1lID0gdGhlbWUuc2V0VXBTdHlsZShgc2hhZG93JHtrZXlzfWAsIHsnJzogKCkgPT4ge1xyXG4gICAgICByZXR1cm4gYCR7c2hhZG93QnVpbGRlckRlcHJlY2F0ZWQoZWxldmF0aW9uLCB0aGVtZS5jb2xvck9mKGNvbG9yKSl9YDtcclxuICAgIH19KTtcclxuICAgIHRoZW1lLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCBjbGFzc25hbWUsIG9sZENsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gY2xhc3NuYW1lO1xyXG4gIH1cclxufVxyXG5cclxuIl19