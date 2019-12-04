import * as tslib_1 from "tslib";
export function mixinShadowColor(base) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, tslib_1.__spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "shadowColor", {
            get: function () { return this._superHyperInternalPropertyShadowColor; },
            set: function (value) { this._superHyperInternalPropertyShadowColor = value; },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LWNvbG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2NvbW1vbi9zaGFkb3ctY29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVdBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBd0IsSUFBTztJQUM3RDtRQUFxQixtQ0FBSTtRQU12QjtZQUFZLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7dURBQWEsSUFBSTtRQUFHLENBQUM7UUFIL0Msc0JBQUksZ0NBQVc7aUJBQWYsY0FBNkMsT0FBTyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO2lCQUNsRyxVQUFnQixLQUE4QixJQUFJLElBQUksQ0FBQyxzQ0FBc0MsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7V0FETjtRQUlwRyxjQUFDO0lBQUQsQ0FBQyxBQVBNLENBQWMsSUFBSSxHQU92QjtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhblNoYWRvd0NvbG9yIHtcbiAgc2hhZG93Q29sb3I6IHN0cmluZyB8IG51bWJlciB8IENvbG9yO1xuICAvKipcbiAgICogSXQgaXMgb25seSB1c2VkIGZvciBjb21tb24gYmVoYXZpb3IsIHRoZXJlZm9yZSwgaXQgc2hvdWxkIG5vdCBiZSB1c2VkIGZvciBvdGhlciBwdXJwb3Nlcy5cbiAgICovXG4gIHJlYWRvbmx5IF9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eVNoYWRvd0NvbG9yOiBzdHJpbmcgfCBudW1iZXIgfCBDb2xvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluU2hhZG93Q29sb3I8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuU2hhZG93Q29sb3I+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eVNoYWRvd0NvbG9yOiBzdHJpbmcgfCBudW1iZXIgfCBDb2xvcjtcblxuICAgIGdldCBzaGFkb3dDb2xvcigpOiBzdHJpbmcgfCBudW1iZXIgfCBDb2xvciB7IHJldHVybiB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eVNoYWRvd0NvbG9yOyB9XG4gICAgc2V0IHNoYWRvd0NvbG9yKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBDb2xvcikgeyB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eVNoYWRvd0NvbG9yID0gdmFsdWU7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iXX0=