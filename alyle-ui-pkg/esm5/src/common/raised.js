import * as tslib_1 from "tslib";
import { toBoolean } from '../minimal/is-boolean';
export function mixinRaised(base) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, tslib_1.__spread(args)) || this;
        }
        Object.defineProperty(class_1.prototype, "raised", {
            get: function () { return this._superHyperInternalPropertyRaised; },
            set: function (value) { this._superHyperInternalPropertyRaised = toBoolean(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFpc2VkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2NvbW1vbi9yYWlzZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVVsRCxNQUFNLFVBQVUsV0FBVyxDQUF3QixJQUFPO0lBQ3hEO1FBQXFCLG1DQUFJO1FBTXZCO1lBQVksY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOzt1REFBYSxJQUFJO1FBQUcsQ0FBQztRQUgvQyxzQkFBSSwyQkFBTTtpQkFBVixjQUFlLE9BQU8sSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztpQkFDL0QsVUFBVyxLQUFVLElBQUksSUFBSSxDQUFDLGlDQUFpQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7OztXQUR0QjtRQUlqRSxjQUFDO0lBQUQsQ0FBQyxBQVBNLENBQWMsSUFBSSxHQU92QjtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5SYWlzZWQge1xuICByYWlzZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJdCBpcyBvbmx5IHVzZWQgZm9yIGNvbW1vbiBiZWhhdmlvciwgdGhlcmVmb3JlLCBpdCBzaG91bGQgbm90IGJlIHVzZWQgZm9yIG90aGVyIHB1cnBvc2VzLlxuICAgKi9cbiAgcmVhZG9ubHkgX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5UmFpc2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5SYWlzZWQ8VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuUmFpc2VkPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBfc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlSYWlzZWQ6IGJvb2xlYW47XG5cbiAgICBnZXQgcmFpc2VkKCkgeyByZXR1cm4gdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlSYWlzZWQ7IH1cbiAgICBzZXQgcmFpc2VkKHZhbHVlOiBhbnkpIHsgdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlSYWlzZWQgPSB0b0Jvb2xlYW4odmFsdWUpOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIl19