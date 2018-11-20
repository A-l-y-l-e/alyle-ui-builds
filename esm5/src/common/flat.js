/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { toBoolean } from '../minimal/is-boolean';
/**
 * @record
 */
export function CanFlat() { }
if (false) {
    /** @type {?} */
    CanFlat.prototype.flat;
}
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinFlat(base) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, tslib_1.__spread(args)) || this;
            _this._flat = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "flat", {
            get: /**
             * @return {?}
             */
            function () { return this._flat; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) { this._flat = toBoolean(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9jb21tb24vZmxhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUVsRCw2QkFFQzs7O0lBREMsdUJBQWM7Ozs7Ozs7QUFHaEIsTUFBTSxVQUFVLFNBQVMsQ0FBd0IsSUFBTztJQUN0RDtRQUFxQixtQ0FBSTtRQU12QjtZQUFZLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFBMUIsZ0RBQXVDLElBQUksV0FBSTtZQUx2QyxXQUFLLEdBQVksS0FBSyxDQUFDOztRQUtlLENBQUM7UUFIL0Msc0JBQUkseUJBQUk7Ozs7WUFBUixjQUFhLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7O1lBQ2pDLFVBQVMsS0FBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1dBRHRCO1FBSW5DLGNBQUM7SUFBRCxDQUFDLEFBUE0sQ0FBYyxJQUFJLEdBT3ZCO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkZsYXQge1xuICBmbGF0OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5GbGF0PFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkZsYXQ+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2ZsYXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGdldCBmbGF0KCkgeyByZXR1cm4gdGhpcy5fZmxhdDsgfVxuICAgIHNldCBmbGF0KHZhbHVlOiBhbnkpIHsgdGhpcy5fZmxhdCA9IHRvQm9vbGVhbih2YWx1ZSk7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iXX0=