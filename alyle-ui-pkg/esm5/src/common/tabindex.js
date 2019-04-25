import * as tslib_1 from "tslib";
var DEFAULT_TAB_INDEX = 0;
export function mixinTabIndex(base) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, tslib_1.__spread(args)) || this;
            _this._tabIndex = DEFAULT_TAB_INDEX;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "tabIndex", {
            get: function () {
                return this.disabled ? -1 : this._tabIndex;
            },
            set: function (value) {
                this._tabIndex = value != null ? value : DEFAULT_TAB_INDEX;
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvY29tbW9uL3RhYmluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxJQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQVU1QixNQUFNLFVBQVUsYUFBYSxDQUFvQyxJQUFPO0lBQ3RFO1FBQXFCLG1DQUFJO1FBVXZCO1lBQVksY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUExQixnREFDVyxJQUFJLFdBQ2Q7WUFYTyxlQUFTLEdBQVcsaUJBQWlCLENBQUM7O1FBVzlDLENBQUM7UUFURCxzQkFBSSw2QkFBUTtpQkFBWjtnQkFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzdDLENBQUM7aUJBQ0QsVUFBYSxLQUFhO2dCQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7WUFDN0QsQ0FBQzs7O1dBSEE7UUFRSCxjQUFDO0lBQUQsQ0FBQyxBQWJNLENBQWMsSUFBSSxHQWF2QjtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgQ2FuRGlzYWJsZSB9IGZyb20gJy4vZGlzYWJsZWQnO1xuXG5jb25zdCBERUZBVUxUX1RBQl9JTkRFWCA9IDA7XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgaW50ZXJmYWNlIEhhc1RhYkluZGV4IHtcbiAgdGFiSW5kZXg6IG51bWJlcjtcbn1cblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCB0eXBlIEhhc1RhYkluZGV4Q3RvciA9IENvbnN0cnVjdG9yPEhhc1RhYkluZGV4PjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1peGluVGFiSW5kZXg8VCBleHRlbmRzIENvbnN0cnVjdG9yPENhbkRpc2FibGU+PihiYXNlOiBUKTogQ29uc3RydWN0b3I8SGFzVGFiSW5kZXg+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX3RhYkluZGV4OiBudW1iZXIgPSBERUZBVUxUX1RBQl9JTkRFWDtcblxuICAgIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAtMSA6IHRoaXMuX3RhYkluZGV4O1xuICAgIH1cbiAgICBzZXQgdGFiSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgdGhpcy5fdGFiSW5kZXggPSB2YWx1ZSAhPSBudWxsID8gdmFsdWUgOiBERUZBVUxUX1RBQl9JTkRFWDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuICB9O1xufVxuIl19