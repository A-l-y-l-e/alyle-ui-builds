import * as tslib_1 from "tslib";
export function mixinBg(base) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, tslib_1.__spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "bg", {
            get: function () { return this._superHyperInternalPropertyBg; },
            set: function (val) {
                var defaultColor = val;
                if (defaultColor !== this.bg) {
                    this._superHyperInternalPropertyBg = defaultColor;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvY29tbW9uL2JnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFVQSxNQUFNLFVBQVUsT0FBTyxDQUF3QixJQUFPO0lBQ3BEO1FBQXFCLG1DQUFJO1FBV3ZCO1lBQVksY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOzt1REFDZixJQUFJO1FBQ2YsQ0FBQztRQVZELHNCQUFJLHVCQUFFO2lCQUFOLGNBQW1CLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztpQkFDL0QsVUFBTyxHQUFXO2dCQUNoQixJQUFNLFlBQVksR0FBRyxHQUFHLENBQUM7Z0JBQ3pCLElBQUksWUFBWSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQUU7b0JBQzVCLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxZQUFZLENBQUM7aUJBQ25EO1lBQ0gsQ0FBQzs7O1dBTjhEO1FBV2pFLGNBQUM7SUFBRCxDQUFDLEFBZE0sQ0FBYyxJQUFJLEdBY3ZCO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuQmcge1xuICBiZzogc3RyaW5nO1xuICAvKipcbiAgICogSXQgaXMgb25seSB1c2VkIGZvciBjb21tb24gYmVoYXZpb3IsIHRoZXJlZm9yZSwgaXQgc2hvdWxkIG5vdCBiZSB1c2VkIGZvciBvdGhlciBwdXJwb3Nlcy5cbiAgICovXG4gIHJlYWRvbmx5IF9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUJnOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkJnPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbkJnPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBfc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlCZzogc3RyaW5nO1xuXG4gICAgZ2V0IGJnKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUJnOyB9XG4gICAgc2V0IGJnKHZhbDogc3RyaW5nKSB7XG4gICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSB2YWw7XG4gICAgICBpZiAoZGVmYXVsdENvbG9yICE9PSB0aGlzLmJnKSB7XG4gICAgICAgIHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5QmcgPSBkZWZhdWx0Q29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==