/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { shadowBuilder } from '../shadow';
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
                return "" + shadowBuilder(elevation, theme.colorOf(color));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvc2hhZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7eUJBUTVCLENBQUM7O0lBQ2IsZ0RBQWdEOzs7Ozs7Ozs7O0lBQ2hELG1DQUFTOzs7Ozs7Ozs7SUFBVCxVQUFVLEtBQWUsRUFBRSxVQUFzQixFQUFFLFFBQW1CLEVBQUUsR0FBcUIsRUFBRSxZQUFxQjtRQUNsSCxxQkFBSSxJQUFZLENBQUM7UUFDakIscUJBQUksU0FBaUIsQ0FBQztRQUN0QixxQkFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDO1FBQzFCLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEIsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztTQUN6QjthQUFNO1lBQ0wsSUFBSSxHQUFHLEtBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFPLENBQUM7WUFDbkMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDNUI7UUFDRCxxQkFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFTLElBQU0sRUFBRSxFQUFDLEVBQUUsRUFBRTtnQkFDdkQsT0FBTyxLQUFHLGFBQWEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBRyxDQUFDO2FBQzVELEVBQUMsQ0FBQyxDQUFDO1FBQ0osS0FBSyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDbkYsT0FBTyxTQUFTLENBQUM7S0FDbEI7O2dCQXhCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7MEJBTkQ7O1NBT2EsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzaGFkb3dCdWlsZGVyIH0gZnJvbSAnLi4vc2hhZG93JztcclxuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEx5U2hhZG93U2VydmljZSB7XHJcbiAgLyoqIERlZmF1bHQgZWxldmF0aW9uICovXHJcbiAgZWxldmF0aW9uID0gMTtcclxuICAvKiogZGVtbzogc2V0U2hhZG93KC4uLltlbGV2YXRpb24sIGNvbG9yXS4uLikgKi9cclxuICBzZXRTaGFkb3codGhlbWU6IEx5VGhlbWUyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCB2YWw6IFtudW1iZXIsIHN0cmluZ10sIG9sZENsYXNzTmFtZT86IHN0cmluZykge1xyXG4gICAgbGV0IGtleXM6IHN0cmluZztcclxuICAgIGxldCBlbGV2YXRpb246IG51bWJlcjtcclxuICAgIGxldCBjb2xvciA9ICdjb2xvclNoYWRvdyc7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGtleXMgPSB2YWwuam9pbignJyk7XHJcbiAgICAgIGVsZXZhdGlvbiA9IHZhbFswXTtcclxuICAgICAgY29sb3IgPSB2YWxbMV0gfHwgY29sb3I7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBrZXlzID0gYCR7dGhpcy5lbGV2YXRpb259JHtjb2xvcn1gO1xyXG4gICAgICBlbGV2YXRpb24gPSB0aGlzLmVsZXZhdGlvbjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoZW1lLnNldFVwU3R5bGUoYHNoYWRvdyR7a2V5c31gLCB7Jyc6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGAke3NoYWRvd0J1aWxkZXIoZWxldmF0aW9uLCB0aGVtZS5jb2xvck9mKGNvbG9yKSl9YDtcclxuICAgIH19KTtcclxuICAgIHRoZW1lLnVwZGF0ZUNsYXNzTmFtZShlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCBjbGFzc25hbWUsIG9sZENsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gY2xhc3NuYW1lO1xyXG4gIH1cclxufVxyXG5cclxuIl19