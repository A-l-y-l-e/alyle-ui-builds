/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { shadowBuilder } from '../shadow';
import * as i0 from "@angular/core";
export class LyShadowService {
    constructor() {
        /**
         * Default elevation
         */
        this.elevation = 1;
    }
    /**
     * demo: setShadow(...[elevation, color]...)
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} val
     * @param {?=} oldClassName
     * @return {?}
     */
    setShadow(theme, elementRef, renderer, val, oldClassName) {
        let /** @type {?} */ keys;
        let /** @type {?} */ elevation;
        let /** @type {?} */ color = 'colorShadow';
        if (val) {
            keys = val.join('');
            elevation = val[0];
            color = val[1] || color;
        }
        else {
            keys = `${this.elevation}${color}`;
            elevation = this.elevation;
        }
        const /** @type {?} */ classname = theme.setUpStyle(`shadow${keys}`, { '': () => {
                return `${shadowBuilder(elevation, theme.colorOf(color))}`;
            } });
        theme.updateClassName(elementRef.nativeElement, renderer, classname, oldClassName);
        return classname;
    }
}
LyShadowService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ LyShadowService.ngInjectableDef = i0.defineInjectable({ factory: function LyShadowService_Factory() { return new LyShadowService(); }, token: LyShadowService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvc2hhZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBTTFDLE1BQU07Ozs7O3lCQUVRLENBQUM7Ozs7Ozs7Ozs7O0lBRWIsU0FBUyxDQUFDLEtBQWUsRUFBRSxVQUFzQixFQUFFLFFBQW1CLEVBQUUsR0FBcUIsRUFBRSxZQUFxQjtRQUNsSCxxQkFBSSxJQUFZLENBQUM7UUFDakIscUJBQUksU0FBaUIsQ0FBQztRQUN0QixxQkFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDO1FBQzFCLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEIsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztTQUN6QjthQUFNO1lBQ0wsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUNuQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM1QjtRQUNELHVCQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFO2dCQUM1RCxPQUFPLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUM1RCxFQUFDLENBQUMsQ0FBQztRQUNKLEtBQUssQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ25GLE9BQU8sU0FBUyxDQUFDO0tBQ2xCOzs7WUF4QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNoYWRvd0J1aWxkZXIgfSBmcm9tICcuLi9zaGFkb3cnO1xyXG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJy4vdGhlbWUyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTHlTaGFkb3dTZXJ2aWNlIHtcclxuICAvKiogRGVmYXVsdCBlbGV2YXRpb24gKi9cclxuICBlbGV2YXRpb24gPSAxO1xyXG4gIC8qKiBkZW1vOiBzZXRTaGFkb3coLi4uW2VsZXZhdGlvbiwgY29sb3JdLi4uKSAqL1xyXG4gIHNldFNoYWRvdyh0aGVtZTogTHlUaGVtZTIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHZhbDogW251bWJlciwgc3RyaW5nXSwgb2xkQ2xhc3NOYW1lPzogc3RyaW5nKSB7XHJcbiAgICBsZXQga2V5czogc3RyaW5nO1xyXG4gICAgbGV0IGVsZXZhdGlvbjogbnVtYmVyO1xyXG4gICAgbGV0IGNvbG9yID0gJ2NvbG9yU2hhZG93JztcclxuICAgIGlmICh2YWwpIHtcclxuICAgICAga2V5cyA9IHZhbC5qb2luKCcnKTtcclxuICAgICAgZWxldmF0aW9uID0gdmFsWzBdO1xyXG4gICAgICBjb2xvciA9IHZhbFsxXSB8fCBjb2xvcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGtleXMgPSBgJHt0aGlzLmVsZXZhdGlvbn0ke2NvbG9yfWA7XHJcbiAgICAgIGVsZXZhdGlvbiA9IHRoaXMuZWxldmF0aW9uO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xhc3NuYW1lID0gdGhlbWUuc2V0VXBTdHlsZShgc2hhZG93JHtrZXlzfWAsIHsnJzogKCkgPT4ge1xyXG4gICAgICByZXR1cm4gYCR7c2hhZG93QnVpbGRlcihlbGV2YXRpb24sIHRoZW1lLmNvbG9yT2YoY29sb3IpKX1gO1xyXG4gICAgfX0pO1xyXG4gICAgdGhlbWUudXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIGNsYXNzbmFtZSwgb2xkQ2xhc3NOYW1lKTtcclxuICAgIHJldHVybiBjbGFzc25hbWU7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=