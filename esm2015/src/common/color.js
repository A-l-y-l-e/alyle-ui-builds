/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function CanColor() { }
if (false) {
    /** @type {?} */
    CanColor.prototype.color;
    /**
     * It is only used for common behavior, therefore, it should not be used for other purposes.
     * @type {?}
     */
    CanColor.prototype._superHyperInternalPropertyColor;
}
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinColor(base) {
    return class extends base {
        /**
         * @return {?}
         */
        get color() { return this._superHyperInternalPropertyColor; }
        /**
         * @param {?} val
         * @return {?}
         */
        set color(val) {
            /** @type {?} */
            const defaultColor = val;
            if (defaultColor !== this.color) {
                this._superHyperInternalPropertyColor = defaultColor;
            }
        }
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvY29tbW9uL2NvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSw4QkFNQzs7O0lBTEMseUJBQWM7Ozs7O0lBSWQsb0RBQWtEOzs7Ozs7O0FBR3BELE1BQU0sVUFBVSxVQUFVLENBQXdCLElBQU87SUFDdkQsT0FBTyxLQUFNLFNBQVEsSUFBSTs7OztRQUd2QixJQUFJLEtBQUssS0FBYSxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ3JFLElBQUksS0FBSyxDQUFDLEdBQVc7O2tCQUNiLFlBQVksR0FBRyxHQUFHO1lBQ3hCLElBQUksWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxZQUFZLENBQUM7YUFDdEQ7UUFDSCxDQUFDOzs7O1FBRUQsWUFBWSxHQUFHLElBQVc7WUFDeEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5Db2xvciB7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBJdCBpcyBvbmx5IHVzZWQgZm9yIGNvbW1vbiBiZWhhdmlvciwgdGhlcmVmb3JlLCBpdCBzaG91bGQgbm90IGJlIHVzZWQgZm9yIG90aGVyIHB1cnBvc2VzLlxuICAgKi9cbiAgcmVhZG9ubHkgX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5Q29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluQ29sb3I8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuQ29sb3I+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUNvbG9yOiBzdHJpbmc7XG5cbiAgICBnZXQgY29sb3IoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5Q29sb3I7IH1cbiAgICBzZXQgY29sb3IodmFsOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHZhbDtcbiAgICAgIGlmIChkZWZhdWx0Q29sb3IgIT09IHRoaXMuY29sb3IpIHtcbiAgICAgICAgdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlDb2xvciA9IGRlZmF1bHRDb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuICB9O1xufVxuIl19