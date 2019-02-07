/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class DynamicInjector {
    /**
     * @param {?} _newInjector
     * @param {?} _parentInjector
     */
    constructor(_newInjector, _parentInjector) {
        this._newInjector = _newInjector;
        this._parentInjector = _parentInjector;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} _flags
     * @return {?}
     */
    get(token, notFoundValue, _flags) {
        /** @type {?} */
        const value = this._newInjector.get(token, notFoundValue);
        if (value) {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DynamicInjector.prototype._newInjector;
    /**
     * @type {?}
     * @private
     */
    DynamicInjector.prototype._parentInjector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkeW5hbWljLWluamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFFMUIsWUFBb0IsWUFBc0IsRUFBVSxlQUF5QjtRQUF6RCxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFVO0lBQUksQ0FBQzs7Ozs7OztJQUlsRixHQUFHLENBQUMsS0FBVSxFQUFFLGFBQW1CLEVBQUUsTUFBWTs7Y0FDekMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUM7UUFFekQsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNGOzs7Ozs7SUFiYSx1Q0FBOEI7Ozs7O0lBQUUsMENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIFR5cGUsIEluamVjdGlvblRva2VuLCBJbmplY3RGbGFncyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRHluYW1pY0luamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25ld0luamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBfcGFyZW50SW5qZWN0b3I6IEluamVjdG9yKSB7IH1cblxuICBnZXQ8VD4odG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPiwgbm90Rm91bmRWYWx1ZT86IFQsIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUO1xuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSk7XG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55LCBfZmxhZ3M/OiBhbnkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX25ld0luamVjdG9yLmdldCh0b2tlbiwgbm90Rm91bmRWYWx1ZSk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcGFyZW50SW5qZWN0b3IuZ2V0PGFueT4odG9rZW4sIG5vdEZvdW5kVmFsdWUpO1xuICB9XG59XG4iXX0=