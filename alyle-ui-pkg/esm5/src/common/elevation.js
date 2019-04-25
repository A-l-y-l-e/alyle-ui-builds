import * as tslib_1 from "tslib";
export function mixinElevation(base) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, tslib_1.__spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "elevation", {
            get: function () { return this._superHyperInternalPropertyElevation; },
            set: function (value) { this._superHyperInternalPropertyElevation = value; },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2NvbW1vbi9lbGV2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVVBLE1BQU0sVUFBVSxjQUFjLENBQXdCLElBQU87SUFDM0Q7UUFBcUIsbUNBQUk7UUFNdkI7WUFBWSxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O3VEQUFhLElBQUk7UUFBRyxDQUFDO1FBSC9DLHNCQUFJLDhCQUFTO2lCQUFiLGNBQWtCLE9BQU8sSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztpQkFDckUsVUFBYyxLQUFVLElBQUksSUFBSSxDQUFDLG9DQUFvQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztXQURYO1FBSXZFLGNBQUM7SUFBRCxDQUFDLEFBUE0sQ0FBYyxJQUFJLEdBT3ZCO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuRWxldmF0aW9uIHtcbiAgZWxldmF0aW9uOiBudW1iZXI7XG4gIC8qKlxuICAgKiBJdCBpcyBvbmx5IHVzZWQgZm9yIGNvbW1vbiBiZWhhdmlvciwgdGhlcmVmb3JlLCBpdCBzaG91bGQgbm90IGJlIHVzZWQgZm9yIG90aGVyIHB1cnBvc2VzLlxuICAgKi9cbiAgcmVhZG9ubHkgX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5RWxldmF0aW9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkVsZXZhdGlvbjxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxDYW5FbGV2YXRpb24+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIF9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUVsZXZhdGlvbjogbnVtYmVyO1xuXG4gICAgZ2V0IGVsZXZhdGlvbigpIHsgcmV0dXJuIHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5RWxldmF0aW9uOyB9XG4gICAgc2V0IGVsZXZhdGlvbih2YWx1ZTogYW55KSB7IHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5RWxldmF0aW9uID0gdmFsdWU7IH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7IHN1cGVyKC4uLmFyZ3MpOyB9XG4gIH07XG59XG4iXX0=