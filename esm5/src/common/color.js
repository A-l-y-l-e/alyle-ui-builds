/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, tslib_1.__spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () { return this._superHyperInternalPropertyColor; },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                /** @type {?} */
                var defaultColor = val;
                if (defaultColor !== this.color) {
                    this._superHyperInternalPropertyColor = defaultColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvY29tbW9uL2NvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsOEJBTUM7OztJQUxDLHlCQUFjOzs7OztJQUlkLG9EQUFrRDs7Ozs7OztBQUdwRCxNQUFNLFVBQVUsVUFBVSxDQUF3QixJQUFPO0lBQ3ZEO1FBQXFCLG1DQUFJO1FBV3ZCO1lBQVksY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOzt1REFDZixJQUFJO1FBQ2YsQ0FBQztRQVZELHNCQUFJLDBCQUFLOzs7O1lBQVQsY0FBc0IsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDOzs7OztZQUNyRSxVQUFVLEdBQVc7O29CQUNiLFlBQVksR0FBRyxHQUFHO2dCQUN4QixJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUMvQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsWUFBWSxDQUFDO2lCQUN0RDtZQUNILENBQUM7OztXQU5vRTtRQVd2RSxjQUFDO0lBQUQsQ0FBQyxBQWRNLENBQWMsSUFBSSxHQWN2QjtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkNvbG9yIHtcbiAgY29sb3I6IHN0cmluZztcbiAgLyoqXG4gICAqIEl0IGlzIG9ubHkgdXNlZCBmb3IgY29tbW9uIGJlaGF2aW9yLCB0aGVyZWZvcmUsIGl0IHNob3VsZCBub3QgYmUgdXNlZCBmb3Igb3RoZXIgcHVycG9zZXMuXG4gICAqL1xuICByZWFkb25seSBfc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlDb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5Db2xvcjxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5Db2xvcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5Q29sb3I6IHN0cmluZztcblxuICAgIGdldCBjb2xvcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlDb2xvcjsgfVxuICAgIHNldCBjb2xvcih2YWw6IHN0cmluZykge1xuICAgICAgY29uc3QgZGVmYXVsdENvbG9yID0gdmFsO1xuICAgICAgaWYgKGRlZmF1bHRDb2xvciAhPT0gdGhpcy5jb2xvcikge1xuICAgICAgICB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUNvbG9yID0gZGVmYXVsdENvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG4gIH07XG59XG4iXX0=