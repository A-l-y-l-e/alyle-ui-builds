/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { toBoolean } from '../minimal/is-boolean';
/**
 * @record
 */
export function CanDisable() { }
if (false) {
    /** @type {?} */
    CanDisable.prototype.disabled;
    /**
     * It is only used for common behavior, therefore, it should not be used for other purposes.
     * @type {?}
     */
    CanDisable.prototype._superHyperInternalPropertyDisabled;
}
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinDisabled(base) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, tslib_1.__spread(args)) || this;
            _this._superHyperInternalPropertyDisabled = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disabled", {
            get: /**
             * @return {?}
             */
            function () { return this._superHyperInternalPropertyDisabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) { this._superHyperInternalPropertyDisabled = toBoolean(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvY29tbW9uL2Rpc2FibGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRWxELGdDQU1DOzs7SUFMQyw4QkFBa0I7Ozs7O0lBSWxCLHlEQUFzRDs7Ozs7OztBQU14RCxNQUFNLFVBQVUsYUFBYSxDQUF3QixJQUFPO0lBQzFEO1FBQXFCLG1DQUFJO1FBTXZCO1lBQVksY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUExQixnREFBdUMsSUFBSSxXQUFJO1lBTC9DLHlDQUFtQyxHQUFZLEtBQUssQ0FBQzs7UUFLUCxDQUFDO1FBSC9DLHNCQUFJLDZCQUFROzs7O1lBQVosY0FBaUIsT0FBTyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDOzs7OztZQUNuRSxVQUFhLEtBQVUsSUFBSSxJQUFJLENBQUMsbUNBQW1DLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1dBRHRCO1FBSXJFLGNBQUM7SUFBRCxDQUFDLEFBUE0sQ0FBYyxJQUFJLEdBT3ZCO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkRpc2FibGUge1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEl0IGlzIG9ubHkgdXNlZCBmb3IgY29tbW9uIGJlaGF2aW9yLCB0aGVyZWZvcmUsIGl0IHNob3VsZCBub3QgYmUgdXNlZCBmb3Igb3RoZXIgcHVycG9zZXMuXG4gICAqL1xuICByZWFkb25seSBfc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlEaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCB0eXBlIENhbkRpc2FibGVDdG9yID0gQ29uc3RydWN0b3I8Q2FuRGlzYWJsZT47XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENhbkRpc2FibGVDdG9yICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eURpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eURpc2FibGVkOyB9XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHsgdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlEaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iXX0=