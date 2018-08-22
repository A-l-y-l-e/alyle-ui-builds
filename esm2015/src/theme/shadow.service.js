/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { shadowBuilderDeprecated } from '../shadow';
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
        /** @type {?} */
        let keys;
        /** @type {?} */
        let elevation;
        /** @type {?} */
        let color = 'colorShadow';
        if (val) {
            keys = val.join('');
            elevation = val[0];
            color = val[1] || color;
        }
        else {
            keys = `${this.elevation}${color}`;
            elevation = this.elevation;
        }
        /** @type {?} */
        const classname = theme.setUpStyle(`shadow${keys}`, { '': () => {
                return `${shadowBuilderDeprecated(elevation, theme.colorOf(color))}`;
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
if (false) {
    /**
     * Default elevation
     * @type {?}
     */
    LyShadowService.prototype.elevation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvc2hhZG93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFNcEQsTUFBTTs7Ozs7eUJBRVEsQ0FBQzs7Ozs7Ozs7Ozs7SUFFYixTQUFTLENBQUMsS0FBZSxFQUFFLFVBQXNCLEVBQUUsUUFBbUIsRUFBRSxHQUFxQixFQUFFLFlBQXFCOztRQUNsSCxJQUFJLElBQUksQ0FBUzs7UUFDakIsSUFBSSxTQUFTLENBQVM7O1FBQ3RCLElBQUksS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUMxQixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFDbkMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDNUI7O1FBQ0QsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRTtnQkFDNUQsT0FBTyxHQUFHLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUN0RSxFQUFDLENBQUMsQ0FBQztRQUNKLEtBQUssQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ25GLE9BQU8sU0FBUyxDQUFDO0tBQ2xCOzs7WUF4QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNoYWRvd0J1aWxkZXJEZXByZWNhdGVkIH0gZnJvbSAnLi4vc2hhZG93JztcclxuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEx5U2hhZG93U2VydmljZSB7XHJcbiAgLyoqIERlZmF1bHQgZWxldmF0aW9uICovXHJcbiAgZWxldmF0aW9uID0gMTtcclxuICAvKiogZGVtbzogc2V0U2hhZG93KC4uLltlbGV2YXRpb24sIGNvbG9yXS4uLikgKi9cclxuICBzZXRTaGFkb3codGhlbWU6IEx5VGhlbWUyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCB2YWw6IFtudW1iZXIsIHN0cmluZ10sIG9sZENsYXNzTmFtZT86IHN0cmluZykge1xyXG4gICAgbGV0IGtleXM6IHN0cmluZztcclxuICAgIGxldCBlbGV2YXRpb246IG51bWJlcjtcclxuICAgIGxldCBjb2xvciA9ICdjb2xvclNoYWRvdyc7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGtleXMgPSB2YWwuam9pbignJyk7XHJcbiAgICAgIGVsZXZhdGlvbiA9IHZhbFswXTtcclxuICAgICAgY29sb3IgPSB2YWxbMV0gfHwgY29sb3I7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBrZXlzID0gYCR7dGhpcy5lbGV2YXRpb259JHtjb2xvcn1gO1xyXG4gICAgICBlbGV2YXRpb24gPSB0aGlzLmVsZXZhdGlvbjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRoZW1lLnNldFVwU3R5bGUoYHNoYWRvdyR7a2V5c31gLCB7Jyc6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGAke3NoYWRvd0J1aWxkZXJEZXByZWNhdGVkKGVsZXZhdGlvbiwgdGhlbWUuY29sb3JPZihjb2xvcikpfWA7XHJcbiAgICB9fSk7XHJcbiAgICB0aGVtZS51cGRhdGVDbGFzc05hbWUoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCByZW5kZXJlciwgY2xhc3NuYW1lLCBvbGRDbGFzc05hbWUpO1xyXG4gICAgcmV0dXJuIGNsYXNzbmFtZTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==