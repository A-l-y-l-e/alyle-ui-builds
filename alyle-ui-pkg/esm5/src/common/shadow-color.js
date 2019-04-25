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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LWNvbG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2NvbW1vbi9zaGFkb3ctY29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVVBLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBd0IsSUFBTztJQUM3RDtRQUFxQixtQ0FBSTtRQU12QjtZQUFZLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7dURBQWEsSUFBSTtRQUFHLENBQUM7UUFIL0Msc0JBQUksZ0NBQVc7aUJBQWYsY0FBNEIsT0FBTyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO2lCQUNqRixVQUFnQixLQUFhLElBQUksSUFBSSxDQUFDLHNDQUFzQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztXQUROO1FBSW5GLGNBQUM7SUFBRCxDQUFDLEFBUE0sQ0FBYyxJQUFJLEdBT3ZCO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuU2hhZG93Q29sb3Ige1xuICBzaGFkb3dDb2xvcjogc3RyaW5nO1xuICAvKipcbiAgICogSXQgaXMgb25seSB1c2VkIGZvciBjb21tb24gYmVoYXZpb3IsIHRoZXJlZm9yZSwgaXQgc2hvdWxkIG5vdCBiZSB1c2VkIGZvciBvdGhlciBwdXJwb3Nlcy5cbiAgICovXG4gIHJlYWRvbmx5IF9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eVNoYWRvd0NvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpblNoYWRvd0NvbG9yPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhblNoYWRvd0NvbG9yPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBfc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlTaGFkb3dDb2xvcjogc3RyaW5nO1xuXG4gICAgZ2V0IHNoYWRvd0NvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eVNoYWRvd0NvbG9yOyB9XG4gICAgc2V0IHNoYWRvd0NvbG9yKHZhbHVlOiBzdHJpbmcpIHsgdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlTaGFkb3dDb2xvciA9IHZhbHVlOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIl19