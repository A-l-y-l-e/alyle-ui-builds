import * as tslib_1 from "tslib";
function same(o) {
    return o;
}
var LySelectionModel = /** @class */ (function () {
    function LySelectionModel(opts) {
        this._selectionMap = new Map();
        this._getKeyFn = same;
        if (!opts) {
            return;
        }
        var multiple = opts.multiple, getKey = opts.getKey;
        if (getKey) {
            this._getKeyFn = getKey;
        }
        if (multiple === true) {
            this._multiple = true;
            var selecteds = opts.selecteds;
            if (Array.isArray(selecteds) && selecteds.length) {
                this.select.apply(this, tslib_1.__spread(selecteds));
            }
        }
        else {
            var selecteds = opts.selecteds;
            if (selecteds) {
                this._markSelected(selecteds);
            }
        }
    }
    Object.defineProperty(LySelectionModel.prototype, "selected", {
        /** Selected values. */
        get: function () {
            if (!this._selected) {
                this._selected = Array.from(this._selectionMap.values());
            }
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggles a value between selected and deselected.
     */
    LySelectionModel.prototype.toggle = function (value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    };
    /**
     * Selects one or several values.
     */
    LySelectionModel.prototype.select = function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        values.forEach(function (value) { return _this._markSelected(value); });
        this._clearSelectedValues();
    };
    /**
     * Deselects a value or an array of values.
     */
    LySelectionModel.prototype.deselect = function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        values.forEach(function (value) { return _this._unmarkSelected(value); });
        this._clearSelectedValues();
    };
    /**
     * Determines whether a value is selected.
     */
    LySelectionModel.prototype.isSelected = function (value) {
        var key = this._getKeyFn(value);
        return this._selectionMap.has(key);
    };
    /**
     * Determines whether the model does not have a value.
     */
    LySelectionModel.prototype.isEmpty = function () {
        return this._selectionMap.size === 0;
    };
    /**
     * Determines whether the model has a value.
     */
    LySelectionModel.prototype.hasValue = function () {
        return this._selectionMap.size !== 0;
    };
    /**
     * Gets whether multiple values can be selected.
     */
    LySelectionModel.prototype.isMultipleSelection = function () {
        return this._multiple;
    };
    /**
     * Clears all of the selected values.
     */
    LySelectionModel.prototype.clear = function () {
        this._unmarkAll();
        this._clearSelectedValues();
    };
    /** Selects a value. */
    LySelectionModel.prototype._markSelected = function (value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            var key = this._getKeyFn(value);
            this._selectionMap.set(key, value);
        }
    };
    /** Deselects a value. */
    LySelectionModel.prototype._unmarkSelected = function (value) {
        if (this.isSelected(value)) {
            var key = this._getKeyFn(value);
            this._selectionMap.delete(key);
        }
    };
    /** Clears out the selected values. */
    LySelectionModel.prototype._unmarkAll = function () {
        if (!this.isEmpty()) {
            this._selectionMap.clear();
        }
    };
    /** Clear the selected values so they can be re-cached. */
    LySelectionModel.prototype._clearSelectedValues = function () {
        this._selected = null;
    };
    return LySelectionModel;
}());
export { LySelectionModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3NlbGVjdGlvbi9zZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVdBLFNBQVMsSUFBSSxDQUFDLENBQU07SUFDbEIsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQ7SUFpQkUsMEJBQVksSUFBdUI7UUFoQjFCLGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQWMsQ0FBQztRQUV2QyxjQUFTLEdBQXNCLElBQUksQ0FBQztRQWUxQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTztTQUNSO1FBQ08sSUFBQSx3QkFBUSxFQUFFLG9CQUFNLENBQVU7UUFDbEMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUN6QjtRQUNELElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNkLElBQUEsMEJBQVMsQ0FBVTtZQUMzQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDaEQsSUFBSSxDQUFDLE1BQU0sT0FBWCxJQUFJLG1CQUFXLFNBQVMsR0FBRTthQUMzQjtTQUNGO2FBQU07WUFDRyxJQUFBLDBCQUFTLENBQThCO1lBQy9DLElBQUksU0FBUyxFQUFFO2dCQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0I7U0FDRjtJQUNILENBQUM7SUE1QkQsc0JBQUksc0NBQVE7UUFEWix1QkFBdUI7YUFDdkI7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUMxRDtZQUVE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LEtBQUssRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNELDBEQUEwRDtJQUNsRCwrQ0FBb0IsR0FBNUI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBbElELElBa0lDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25PcHRzPFQgPSBhbnk+IHtcbiAgbXVsdGlwbGU/OiB0cnVlO1xuICAvKipcbiAgICogSW5pdGlhbGx5IHNlbGVjdGVkIHZhbHVlc1xuICAgKiBOb3RlOiBpZiBgbXVsdGlwbGVgID09PSBgdHJ1ZWAgdGhlbiBgc2VsZWN0ZWRzYCBzaG91bGQgYmUgb2YgdHlwZSBgVFtdYFxuICAgKiBlbHNlIGl0IHNob3VsZCBiZSBvZiB0eXBlIGBUYFxuICAgKi9cbiAgc2VsZWN0ZWRzPzogVCB8IFRbXTtcbiAgZ2V0S2V5PzogKG86IFQpID0+IHVua25vd247XG59XG5cbmZ1bmN0aW9uIHNhbWUobzogYW55KTogdW5rbm93biB7XG4gIHJldHVybiBvO1xufVxuXG5leHBvcnQgY2xhc3MgTHlTZWxlY3Rpb25Nb2RlbDxUID0gYW55PiB7XG4gIHJlYWRvbmx5IF9zZWxlY3Rpb25NYXAgPSBuZXcgTWFwPHVua25vd24sIFQ+KCk7XG4gIHByaXZhdGUgX211bHRpcGxlPzogdHJ1ZTtcbiAgcHJpdmF0ZSBfZ2V0S2V5Rm46IChvOiBUKSA9PiB1bmtub3duID0gc2FtZTtcblxuICAvKiogQ2FjaGUgZm9yIHRoZSBhcnJheSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgaXRlbXMuICovXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBUW10gfCBudWxsO1xuXG4gIC8qKiBTZWxlY3RlZCB2YWx1ZXMuICovXG4gIGdldCBzZWxlY3RlZCgpOiBUW10ge1xuICAgIGlmICghdGhpcy5fc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gQXJyYXkuZnJvbSh0aGlzLl9zZWxlY3Rpb25NYXAudmFsdWVzKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdHM/OiBTZWxlY3Rpb25PcHRzPFQ+KSB7XG4gICAgaWYgKCFvcHRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgbXVsdGlwbGUsIGdldEtleSB9ID0gb3B0cztcbiAgICBpZiAoZ2V0S2V5KSB7XG4gICAgICB0aGlzLl9nZXRLZXlGbiA9IGdldEtleTtcbiAgICB9XG4gICAgaWYgKG11bHRpcGxlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9tdWx0aXBsZSA9IHRydWU7XG4gICAgICBjb25zdCB7IHNlbGVjdGVkcyB9ID0gb3B0cztcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdGVkcykgJiYgc2VsZWN0ZWRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNlbGVjdCguLi5zZWxlY3RlZHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IHNlbGVjdGVkcyB9ID0gb3B0cyBhcyB7IHNlbGVjdGVkczogVCB9O1xuICAgICAgaWYgKHNlbGVjdGVkcykge1xuICAgICAgICB0aGlzLl9tYXJrU2VsZWN0ZWQoc2VsZWN0ZWRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhIHZhbHVlIGJldHdlZW4gc2VsZWN0ZWQgYW5kIGRlc2VsZWN0ZWQuXG4gICAqL1xuICB0b2dnbGUodmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2VsZWN0ZWQodmFsdWUpID8gdGhpcy5kZXNlbGVjdCh2YWx1ZSkgOiB0aGlzLnNlbGVjdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBvbmUgb3Igc2V2ZXJhbCB2YWx1ZXMuXG4gICAqL1xuICBzZWxlY3QoLi4udmFsdWVzOiBUW10pOiB2b2lkIHtcbiAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB0aGlzLl9tYXJrU2VsZWN0ZWQodmFsdWUpKTtcbiAgICB0aGlzLl9jbGVhclNlbGVjdGVkVmFsdWVzKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzZWxlY3RzIGEgdmFsdWUgb3IgYW4gYXJyYXkgb2YgdmFsdWVzLlxuICAgKi9cbiAgZGVzZWxlY3QoLi4udmFsdWVzOiBUW10pOiB2b2lkIHtcbiAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB0aGlzLl91bm1hcmtTZWxlY3RlZCh2YWx1ZSkpO1xuICAgIHRoaXMuX2NsZWFyU2VsZWN0ZWRWYWx1ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBzZWxlY3RlZC5cbiAgICovXG4gIGlzU2VsZWN0ZWQodmFsdWU6IFQpOiBib29sZWFuIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLl9nZXRLZXlGbih2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbk1hcC5oYXMoa2V5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZGVsIGRvZXMgbm90IGhhdmUgYSB2YWx1ZS5cbiAgICovXG4gIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbk1hcC5zaXplID09PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kZWwgaGFzIGEgdmFsdWUuXG4gICAqL1xuICBoYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uTWFwLnNpemUgIT09IDA7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB3aGV0aGVyIG11bHRpcGxlIHZhbHVlcyBjYW4gYmUgc2VsZWN0ZWQuXG4gICAqL1xuICBpc011bHRpcGxlU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIG9mIHRoZSBzZWxlY3RlZCB2YWx1ZXMuXG4gICAqL1xuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLl91bm1hcmtBbGwoKTtcbiAgICB0aGlzLl9jbGVhclNlbGVjdGVkVmFsdWVzKCk7XG4gIH1cblxuICAvKiogU2VsZWN0cyBhIHZhbHVlLiAqL1xuICBwcml2YXRlIF9tYXJrU2VsZWN0ZWQodmFsdWU6IFQpIHtcbiAgICBpZiAoIXRoaXMuaXNTZWxlY3RlZCh2YWx1ZSkpIHtcbiAgICAgIGlmICghdGhpcy5fbXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5fdW5tYXJrQWxsKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2dldEtleUZuKHZhbHVlKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbk1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIERlc2VsZWN0cyBhIHZhbHVlLiAqL1xuICBwcml2YXRlIF91bm1hcmtTZWxlY3RlZCh2YWx1ZTogVCkge1xuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQodmFsdWUpKSB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLl9nZXRLZXlGbih2YWx1ZSk7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25NYXAuZGVsZXRlKGtleSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENsZWFycyBvdXQgdGhlIHNlbGVjdGVkIHZhbHVlcy4gKi9cbiAgcHJpdmF0ZSBfdW5tYXJrQWxsKCkge1xuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbk1hcC5jbGVhcigpO1xuICAgIH1cbiAgfVxuICAvKiogQ2xlYXIgdGhlIHNlbGVjdGVkIHZhbHVlcyBzbyB0aGV5IGNhbiBiZSByZS1jYWNoZWQuICovXG4gIHByaXZhdGUgX2NsZWFyU2VsZWN0ZWRWYWx1ZXMoKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBudWxsO1xuICB9XG5cbn1cbiJdfQ==