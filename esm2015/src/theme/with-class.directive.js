/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
export class LyWithClass {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set withClass(val) {
        if (!val) {
            throw new Error(`'${val}' is not valid className`);
        }
        this.el.nativeElement.classList.add(val);
    }
}
LyWithClass.decorators = [
    { type: Directive, args: [{
                selector: '[withClass]'
            },] }
];
/** @nocollapse */
LyWithClass.ctorParameters = () => [
    { type: ElementRef }
];
LyWithClass.propDecorators = {
    withClass: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LyWithClass.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1jbGFzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvdGhlbWUvd2l0aC1jbGFzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs3RCxNQUFNLE9BQU8sV0FBVzs7OztJQVN0QixZQUNVLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ3BCLENBQUM7Ozs7O0lBVEwsSUFDSSxTQUFTLENBQUMsR0FBVztRQUN2QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsMEJBQTBCLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7O1lBSm1CLFVBQVU7Ozt3QkFPM0IsS0FBSzs7OztJQVFKLHlCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3dpdGhDbGFzc10nXG59KVxuZXhwb3J0IGNsYXNzIEx5V2l0aENsYXNzIHtcblxuICBASW5wdXQoKVxuICBzZXQgd2l0aENsYXNzKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7dmFsfScgaXMgbm90IHZhbGlkIGNsYXNzTmFtZWApO1xuICAgIH1cbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh2YWwpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcbiAgKSB7IH1cbn1cbiJdfQ==