import * as tslib_1 from "tslib";
import { toBoolean } from '../minimal/is-boolean';
export function mixinOutlined(base) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, tslib_1.__spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "outlined", {
            get: function () { return this._superHyperInternalPropertyOutlined; },
            set: function (value) { this._superHyperInternalPropertyOutlined = toBoolean(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGluZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvY29tbW9uL291dGxpbmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFVbEQsTUFBTSxVQUFVLGFBQWEsQ0FBd0IsSUFBTztJQUMxRDtRQUFxQixtQ0FBSTtRQU12QjtZQUFZLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7dURBQWEsSUFBSTtRQUFHLENBQUM7UUFIL0Msc0JBQUksNkJBQVE7aUJBQVosY0FBaUIsT0FBTyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO2lCQUNuRSxVQUFhLEtBQVUsSUFBSSxJQUFJLENBQUMsbUNBQW1DLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1dBRHRCO1FBSXJFLGNBQUM7SUFBRCxDQUFDLEFBUE0sQ0FBYyxJQUFJLEdBT3ZCO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9taW5pbWFsL2lzLWJvb2xlYW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbk91dGxpbmVkIHtcbiAgb3V0bGluZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJdCBpcyBvbmx5IHVzZWQgZm9yIGNvbW1vbiBiZWhhdmlvciwgdGhlcmVmb3JlLCBpdCBzaG91bGQgbm90IGJlIHVzZWQgZm9yIG90aGVyIHB1cnBvc2VzLlxuICAgKi9cbiAgcmVhZG9ubHkgX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5T3V0bGluZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbk91dGxpbmVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oYmFzZTogVCk6IENvbnN0cnVjdG9yPENhbk91dGxpbmVkPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBfc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlPdXRsaW5lZDogYm9vbGVhbjtcblxuICAgIGdldCBvdXRsaW5lZCgpIHsgcmV0dXJuIHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5T3V0bGluZWQ7IH1cbiAgICBzZXQgb3V0bGluZWQodmFsdWU6IGFueSkgeyB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eU91dGxpbmVkID0gdG9Cb29sZWFuKHZhbHVlKTsgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiJdfQ==