/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { LyShadowService } from './shadow.service';
import { LyTheme2 } from './theme2.service';
export class LyNewRaised {
    /**
     * @param {?} theme
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} shadow
     */
    constructor(theme, elementRef, renderer, shadow) {
        this.theme = theme;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.shadow = shadow;
        this.elevation = 3;
    }
    /**
     * Default raised
     * @param {?} value
     * @return {?}
     */
    set newRaised(value) {
        this.currentClassName = this.shadow.setShadow(this.theme, this.elementRef, this.renderer, [value[0] || this.elevation, value[1]], this.currentClassName);
    }
}
LyNewRaised.decorators = [
    { type: Directive, args: [{ selector: ':not([raised])[newRaised]' },] },
];
/** @nocollapse */
LyNewRaised.ctorParameters = () => [
    { type: LyTheme2 },
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyShadowService }
];
LyNewRaised.propDecorators = {
    newRaised: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyNewRaised.prototype.elevation;
    /** @type {?} */
    LyNewRaised.prototype.currentClassName;
    /** @type {?} */
    LyNewRaised.prototype.theme;
    /** @type {?} */
    LyNewRaised.prototype.elementRef;
    /** @type {?} */
    LyNewRaised.prototype.renderer;
    /** @type {?} */
    LyNewRaised.prototype.shadow;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFpc2VkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy90aGVtZS9yYWlzZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsVUFBVSxFQUFFLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc1QyxNQUFNOzs7Ozs7O0lBU0osWUFDVSxPQUNBLFlBQ0EsVUFDQTtRQUhBLFVBQUssR0FBTCxLQUFLO1FBQ0wsZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtRQUNSLFdBQU0sR0FBTixNQUFNO3lCQVpKLENBQUM7S0FhUjs7Ozs7O0lBVkwsSUFDSSxTQUFTLENBQUMsS0FBdUI7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDNUo7OztZQVJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRTs7OztZQUYzQyxRQUFRO1lBSG9DLFVBQVU7WUFBRSxTQUFTO1lBQ2pFLGVBQWU7Ozt3QkFTckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVNoYWRvd1NlcnZpY2UgfSBmcm9tICcuL3NoYWRvdy5zZXJ2aWNlJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vYWx5bGUtY29uZmlnLXNlcnZpY2UnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lMi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnOm5vdChbcmFpc2VkXSlbbmV3UmFpc2VkXScgfSlcbmV4cG9ydCBjbGFzcyBMeU5ld1JhaXNlZCB7XG4gIGVsZXZhdGlvbiA9IDM7XG4gIHByaXZhdGUgY3VycmVudENsYXNzTmFtZTogc3RyaW5nO1xuICAvKiogRGVmYXVsdCByYWlzZWQgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuZXdSYWlzZWQodmFsdWU6IFtudW1iZXIsIHN0cmluZ10pIHtcbiAgICB0aGlzLmN1cnJlbnRDbGFzc05hbWUgPSB0aGlzLnNoYWRvdy5zZXRTaGFkb3codGhpcy50aGVtZSwgdGhpcy5lbGVtZW50UmVmLCB0aGlzLnJlbmRlcmVyLCBbIHZhbHVlWzBdIHx8IHRoaXMuZWxldmF0aW9uLCB2YWx1ZVsxXSBdLCB0aGlzLmN1cnJlbnRDbGFzc05hbWUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNoYWRvdzogTHlTaGFkb3dTZXJ2aWNlXG4gICkgeyB9XG59XG4iXX0=