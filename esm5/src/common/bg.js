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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvY29tbW9uL2JnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFXQSxNQUFNLFVBQVUsT0FBTyxDQUF3QixJQUFPO0lBQ3BEO1FBQXFCLG1DQUFJO1FBV3ZCO1lBQVksY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOzt1REFDZixJQUFJO1FBQ2YsQ0FBQztRQVZELHNCQUFJLHVCQUFFO2lCQUFOLGNBQW9DLE9BQU8sSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztpQkFDaEYsVUFBTyxHQUE0QjtnQkFDakMsSUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUN6QixJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUM1QixJQUFJLENBQUMsNkJBQTZCLEdBQUcsWUFBWSxDQUFDO2lCQUNuRDtZQUNILENBQUM7OztXQU4rRTtRQVdsRixjQUFDO0lBQUQsQ0FBQyxBQWRNLENBQWMsSUFBSSxHQWN2QjtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdAYWx5bGUvdWkvY29sb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkJnIHtcbiAgYmc6IHN0cmluZyB8IG51bWJlciB8IENvbG9yO1xuICAvKipcbiAgICogSXQgaXMgb25seSB1c2VkIGZvciBjb21tb24gYmVoYXZpb3IsIHRoZXJlZm9yZSwgaXQgc2hvdWxkIG5vdCBiZSB1c2VkIGZvciBvdGhlciBwdXJwb3Nlcy5cbiAgICovXG4gIHJlYWRvbmx5IF9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUJnOiBzdHJpbmcgfCBudW1iZXIgfCBDb2xvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluQmc8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuQmc+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUJnOiBzdHJpbmcgfCBudW1iZXIgfCBDb2xvcjtcblxuICAgIGdldCBiZygpOiBzdHJpbmcgfCBudW1iZXIgfCBDb2xvciB7IHJldHVybiB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUJnOyB9XG4gICAgc2V0IGJnKHZhbDogc3RyaW5nIHwgbnVtYmVyIHwgQ29sb3IpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IHZhbDtcbiAgICAgIGlmIChkZWZhdWx0Q29sb3IgIT09IHRoaXMuYmcpIHtcbiAgICAgICAgdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlCZyA9IGRlZmF1bHRDb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuICB9O1xufVxuIl19