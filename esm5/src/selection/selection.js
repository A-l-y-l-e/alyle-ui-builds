/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @record
 * @template T
 */
export function SelectionOpts() { }
if (false) {
    /** @type {?|undefined} */
    SelectionOpts.prototype.multiple;
    /**
     * Initially selected values
     * Note: if `multiple` === `true` then `selecteds` should be of type `T[]`
     * else it should be of type `T`
     * @type {?|undefined}
     */
    SelectionOpts.prototype.selecteds;
    /** @type {?|undefined} */
    SelectionOpts.prototype.getKey;
}
/**
 * @param {?} o
 * @return {?}
 */
function same(o) {
    return o;
}
/**
 * @template T
 */
var /**
 * @template T
 */
LySelectionModel = /** @class */ (function () {
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
            var selecteds = (/** @type {?} */ (opts)).selecteds;
            if (selecteds) {
                this._markSelected(selecteds);
            }
        }
    }
    Object.defineProperty(LySelectionModel.prototype, "selected", {
        /** Selected values. */
        get: /**
         * Selected values.
         * @return {?}
         */
        function () {
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
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    LySelectionModel.prototype.toggle = /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    };
    /**
     * Selects one or several values.
     */
    /**
     * Selects one or several values.
     * @param {...?} values
     * @return {?}
     */
    LySelectionModel.prototype.select = /**
     * Selects one or several values.
     * @param {...?} values
     * @return {?}
     */
    function () {
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
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    LySelectionModel.prototype.deselect = /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
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
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    LySelectionModel.prototype.isSelected = /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var key = this._getKeyFn(value);
        return this._selectionMap.has(key);
    };
    /**
     * Determines whether the model does not have a value.
     */
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    LySelectionModel.prototype.isEmpty = /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    function () {
        return this._selectionMap.size === 0;
    };
    /**
     * Determines whether the model has a value.
     */
    /**
     * Determines whether the model has a value.
     * @return {?}
     */
    LySelectionModel.prototype.hasValue = /**
     * Determines whether the model has a value.
     * @return {?}
     */
    function () {
        return this._selectionMap.size !== 0;
    };
    /**
     * Gets whether multiple values can be selected.
     */
    /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    LySelectionModel.prototype.isMultipleSelection = /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    function () {
        return this._multiple;
    };
    /**
     * Clears all of the selected values.
     */
    /**
     * Clears all of the selected values.
     * @return {?}
     */
    LySelectionModel.prototype.clear = /**
     * Clears all of the selected values.
     * @return {?}
     */
    function () {
        this._unmarkAll();
        this._clearSelectedValues();
    };
    /** Selects a value. */
    /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    LySelectionModel.prototype._markSelected = /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            /** @type {?} */
            var key = this._getKeyFn(value);
            this._selectionMap.set(key, value);
        }
    };
    /** Deselects a value. */
    /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    LySelectionModel.prototype._unmarkSelected = /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isSelected(value)) {
            /** @type {?} */
            var key = this._getKeyFn(value);
            this._selectionMap.delete(key);
        }
    };
    /** Clears out the selected values. */
    /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    LySelectionModel.prototype._unmarkAll = /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    function () {
        if (!this.isEmpty()) {
            this._selectionMap.clear();
        }
    };
    /** Clear the selected values so they can be re-cached. */
    /**
     * Clear the selected values so they can be re-cached.
     * @private
     * @return {?}
     */
    LySelectionModel.prototype._clearSelectedValues = /**
     * Clear the selected values so they can be re-cached.
     * @private
     * @return {?}
     */
    function () {
        this._selected = null;
    };
    return LySelectionModel;
}());
/**
 * @template T
 */
export { LySelectionModel };
if (false) {
    /** @type {?} */
    LySelectionModel.prototype._selectionMap;
    /**
     * @type {?}
     * @private
     */
    LySelectionModel.prototype._multiple;
    /**
     * @type {?}
     * @private
     */
    LySelectionModel.prototype._getKeyFn;
    /**
     * Cache for the array value of the selected items.
     * @type {?}
     * @private
     */
    LySelectionModel.prototype._selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3NlbGVjdGlvbi9zZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbUNBU0M7OztJQVJDLGlDQUFnQjs7Ozs7OztJQU1oQixrQ0FBb0I7O0lBQ3BCLCtCQUEyQjs7Ozs7O0FBRzdCLFNBQVMsSUFBSSxDQUFDLENBQU07SUFDbEIsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDOzs7O0FBRUQ7Ozs7SUFpQkUsMEJBQVksSUFBdUI7UUFoQjFCLGtCQUFhLEdBQUcsSUFBSSxHQUFHLEVBQWMsQ0FBQztRQUV2QyxjQUFTLEdBQXNCLElBQUksQ0FBQztRQWUxQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTztTQUNSO1FBQ08sSUFBQSx3QkFBUSxFQUFFLG9CQUFNO1FBQ3hCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDekI7UUFDRCxJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFBLDBCQUFTO1lBQ2pCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNoRCxJQUFJLENBQUMsTUFBTSxPQUFYLElBQUksbUJBQVcsU0FBUyxHQUFFO2FBQzNCO1NBQ0Y7YUFBTTtZQUNHLElBQUEsK0NBQVM7WUFDakIsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvQjtTQUNGO0lBQ0gsQ0FBQztJQTVCRCxzQkFBSSxzQ0FBUTtRQURaLHVCQUF1Qjs7Ozs7UUFDdkI7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFL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R0FBRyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsc0NBQXNDOzs7Ozs7SUFDOUIscUNBQVU7Ozs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNELDBEQUEwRDs7Ozs7O0lBQ2xELCtDQUFvQjs7Ozs7SUFBNUI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBbElELElBa0lDOzs7Ozs7O0lBaklDLHlDQUErQzs7Ozs7SUFDL0MscUNBQXlCOzs7OztJQUN6QixxQ0FBNEM7Ozs7OztJQUc1QyxxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvbk9wdHM8VCA9IGFueT4ge1xuICBtdWx0aXBsZT86IHRydWU7XG4gIC8qKlxuICAgKiBJbml0aWFsbHkgc2VsZWN0ZWQgdmFsdWVzXG4gICAqIE5vdGU6IGlmIGBtdWx0aXBsZWAgPT09IGB0cnVlYCB0aGVuIGBzZWxlY3RlZHNgIHNob3VsZCBiZSBvZiB0eXBlIGBUW11gXG4gICAqIGVsc2UgaXQgc2hvdWxkIGJlIG9mIHR5cGUgYFRgXG4gICAqL1xuICBzZWxlY3RlZHM/OiBUIHwgVFtdO1xuICBnZXRLZXk/OiAobzogVCkgPT4gdW5rbm93bjtcbn1cblxuZnVuY3Rpb24gc2FtZShvOiBhbnkpOiB1bmtub3duIHtcbiAgcmV0dXJuIG87XG59XG5cbmV4cG9ydCBjbGFzcyBMeVNlbGVjdGlvbk1vZGVsPFQgPSBhbnk+IHtcbiAgcmVhZG9ubHkgX3NlbGVjdGlvbk1hcCA9IG5ldyBNYXA8dW5rbm93biwgVD4oKTtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU/OiB0cnVlO1xuICBwcml2YXRlIF9nZXRLZXlGbjogKG86IFQpID0+IHVua25vd24gPSBzYW1lO1xuXG4gIC8qKiBDYWNoZSBmb3IgdGhlIGFycmF5IHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBpdGVtcy4gKi9cbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IFRbXSB8IG51bGw7XG5cbiAgLyoqIFNlbGVjdGVkIHZhbHVlcy4gKi9cbiAgZ2V0IHNlbGVjdGVkKCk6IFRbXSB7XG4gICAgaWYgKCF0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBBcnJheS5mcm9tKHRoaXMuX3NlbGVjdGlvbk1hcC52YWx1ZXMoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0cz86IFNlbGVjdGlvbk9wdHM8VD4pIHtcbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBtdWx0aXBsZSwgZ2V0S2V5IH0gPSBvcHRzO1xuICAgIGlmIChnZXRLZXkpIHtcbiAgICAgIHRoaXMuX2dldEtleUZuID0gZ2V0S2V5O1xuICAgIH1cbiAgICBpZiAobXVsdGlwbGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX211bHRpcGxlID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHsgc2VsZWN0ZWRzIH0gPSBvcHRzO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0ZWRzKSAmJiBzZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KC4uLnNlbGVjdGVkcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0ZWRzIH0gPSBvcHRzIGFzIHsgc2VsZWN0ZWRzOiBUIH07XG4gICAgICBpZiAoc2VsZWN0ZWRzKSB7XG4gICAgICAgIHRoaXMuX21hcmtTZWxlY3RlZChzZWxlY3RlZHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGEgdmFsdWUgYmV0d2VlbiBzZWxlY3RlZCBhbmQgZGVzZWxlY3RlZC5cbiAgICovXG4gIHRvZ2dsZSh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuaXNTZWxlY3RlZCh2YWx1ZSkgPyB0aGlzLmRlc2VsZWN0KHZhbHVlKSA6IHRoaXMuc2VsZWN0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9uZSBvciBzZXZlcmFsIHZhbHVlcy5cbiAgICovXG4gIHNlbGVjdCguLi52YWx1ZXM6IFRbXSk6IHZvaWQge1xuICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHRoaXMuX21hcmtTZWxlY3RlZCh2YWx1ZSkpO1xuICAgIHRoaXMuX2NsZWFyU2VsZWN0ZWRWYWx1ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlbGVjdHMgYSB2YWx1ZSBvciBhbiBhcnJheSBvZiB2YWx1ZXMuXG4gICAqL1xuICBkZXNlbGVjdCguLi52YWx1ZXM6IFRbXSk6IHZvaWQge1xuICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHRoaXMuX3VubWFya1NlbGVjdGVkKHZhbHVlKSk7XG4gICAgdGhpcy5fY2xlYXJTZWxlY3RlZFZhbHVlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgaXNTZWxlY3RlZCh2YWx1ZTogVCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuX2dldEtleUZuKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uTWFwLmhhcyhrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kZWwgZG9lcyBub3QgaGF2ZSBhIHZhbHVlLlxuICAgKi9cbiAgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uTWFwLnNpemUgPT09IDA7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2RlbCBoYXMgYSB2YWx1ZS5cbiAgICovXG4gIGhhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25NYXAuc2l6ZSAhPT0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHdoZXRoZXIgbXVsdGlwbGUgdmFsdWVzIGNhbiBiZSBzZWxlY3RlZC5cbiAgICovXG4gIGlzTXVsdGlwbGVTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgb2YgdGhlIHNlbGVjdGVkIHZhbHVlcy5cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuX3VubWFya0FsbCgpO1xuICAgIHRoaXMuX2NsZWFyU2VsZWN0ZWRWYWx1ZXMoKTtcbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGEgdmFsdWUuICovXG4gIHByaXZhdGUgX21hcmtTZWxlY3RlZCh2YWx1ZTogVCkge1xuICAgIGlmICghdGhpcy5pc1NlbGVjdGVkKHZhbHVlKSkge1xuICAgICAgaWYgKCF0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLl91bm1hcmtBbGwoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5ID0gdGhpcy5fZ2V0S2V5Rm4odmFsdWUpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uTWFwLnNldChrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKiogRGVzZWxlY3RzIGEgdmFsdWUuICovXG4gIHByaXZhdGUgX3VubWFya1NlbGVjdGVkKHZhbHVlOiBUKSB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RlZCh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2dldEtleUZuKHZhbHVlKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbk1hcC5kZWxldGUoa2V5KTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYXJzIG91dCB0aGUgc2VsZWN0ZWQgdmFsdWVzLiAqL1xuICBwcml2YXRlIF91bm1hcmtBbGwoKSB7XG4gICAgaWYgKCF0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uTWFwLmNsZWFyKCk7XG4gICAgfVxuICB9XG4gIC8qKiBDbGVhciB0aGUgc2VsZWN0ZWQgdmFsdWVzIHNvIHRoZXkgY2FuIGJlIHJlLWNhY2hlZC4gKi9cbiAgcHJpdmF0ZSBfY2xlYXJTZWxlY3RlZFZhbHVlcygpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XG4gIH1cblxufVxuIl19