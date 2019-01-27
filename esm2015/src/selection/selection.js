/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class LySelectionModel {
    /**
     * @param {?=} opts
     */
    constructor(opts) {
        this._selectionMap = new Map();
        this._getKeyFn = same;
        if (!opts) {
            return;
        }
        const { multiple, getKey } = opts;
        if (getKey) {
            this._getKeyFn = getKey;
        }
        if (multiple === true) {
            this._multiple = true;
            const { selecteds } = opts;
            if (Array.isArray(selecteds) && selecteds.length) {
                this.select(...selecteds);
            }
        }
        else {
            const { selecteds } = (/** @type {?} */ (opts));
            if (selecteds) {
                this._markSelected(selecteds);
            }
        }
    }
    /**
     * Selected values.
     * @return {?}
     */
    get selected() {
        if (!this._selected) {
            this._selected = Array.from(this._selectionMap.values());
        }
        return this._selected;
    }
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    toggle(value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    }
    /**
     * Selects one or several values.
     * @param {...?} values
     * @return {?}
     */
    select(...values) {
        values.forEach(value => this._markSelected(value));
        this._clearSelectedValues();
    }
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    deselect(...values) {
        values.forEach(value => this._unmarkSelected(value));
        this._clearSelectedValues();
    }
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    isSelected(value) {
        /** @type {?} */
        const key = this._getKeyFn(value);
        return this._selectionMap.has(key);
    }
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    isEmpty() {
        return this._selectionMap.size === 0;
    }
    /**
     * Determines whether the model has a value.
     * @return {?}
     */
    hasValue() {
        return this._selectionMap.size !== 0;
    }
    /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    isMultipleSelection() {
        return this._multiple;
    }
    /**
     * Clears all of the selected values.
     * @return {?}
     */
    clear() {
        this._unmarkAll();
        this._clearSelectedValues();
    }
    /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    _markSelected(value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            /** @type {?} */
            const key = this._getKeyFn(value);
            this._selectionMap.set(key, value);
        }
    }
    /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    _unmarkSelected(value) {
        if (this.isSelected(value)) {
            /** @type {?} */
            const key = this._getKeyFn(value);
            this._selectionMap.delete(key);
        }
    }
    /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    _unmarkAll() {
        if (!this.isEmpty()) {
            this._selectionMap.clear();
        }
    }
    /**
     * Clear the selected values so they can be re-cached.
     * @private
     * @return {?}
     */
    _clearSelectedValues() {
        this._selected = null;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3NlbGVjdGlvbi9zZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxtQ0FTQzs7O0lBUkMsaUNBQWdCOzs7Ozs7O0lBTWhCLGtDQUFvQjs7SUFDcEIsK0JBQTJCOzs7Ozs7QUFHN0IsU0FBUyxJQUFJLENBQUMsQ0FBTTtJQUNsQixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7Ozs7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBaUIzQixZQUFZLElBQXVCO1FBaEIxQixrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFjLENBQUM7UUFFdkMsY0FBUyxHQUFzQixJQUFJLENBQUM7UUFlMUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU87U0FDUjtjQUNLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUk7UUFDakMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUN6QjtRQUNELElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztrQkFDaEIsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJO1lBQzFCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDM0I7U0FDRjthQUFNO2tCQUNDLEVBQUUsU0FBUyxFQUFFLEdBQUcsbUJBQUEsSUFBSSxFQUFvQjtZQUM5QyxJQUFJLFNBQVMsRUFBRTtnQkFDYixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQTVCRCxJQUFJLFFBQVE7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQTJCRCxNQUFNLENBQUMsS0FBUTtRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFDLEdBQUcsTUFBVztRQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUtELFFBQVEsQ0FBQyxHQUFHLE1BQVc7UUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFLRCxVQUFVLENBQUMsS0FBUTs7Y0FDWCxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUtELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUtELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUtELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFLRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFHTyxhQUFhLENBQUMsS0FBUTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25COztrQkFFSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7OztJQUdPLGVBQWUsQ0FBQyxLQUFRO1FBQzlCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTs7a0JBQ3BCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7OztJQUdPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7Q0FFRjs7O0lBaklDLHlDQUErQzs7Ozs7SUFDL0MscUNBQXlCOzs7OztJQUN6QixxQ0FBNEM7Ozs7OztJQUc1QyxxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvbk9wdHM8VCA9IGFueT4ge1xuICBtdWx0aXBsZT86IHRydWU7XG4gIC8qKlxuICAgKiBJbml0aWFsbHkgc2VsZWN0ZWQgdmFsdWVzXG4gICAqIE5vdGU6IGlmIGBtdWx0aXBsZWAgPT09IGB0cnVlYCB0aGVuIGBzZWxlY3RlZHNgIHNob3VsZCBiZSBvZiB0eXBlIGBUW11gXG4gICAqIGVsc2UgaXQgc2hvdWxkIGJlIG9mIHR5cGUgYFRgXG4gICAqL1xuICBzZWxlY3RlZHM/OiBUIHwgVFtdO1xuICBnZXRLZXk/OiAobzogVCkgPT4gdW5rbm93bjtcbn1cblxuZnVuY3Rpb24gc2FtZShvOiBhbnkpOiB1bmtub3duIHtcbiAgcmV0dXJuIG87XG59XG5cbmV4cG9ydCBjbGFzcyBMeVNlbGVjdGlvbk1vZGVsPFQgPSBhbnk+IHtcbiAgcmVhZG9ubHkgX3NlbGVjdGlvbk1hcCA9IG5ldyBNYXA8dW5rbm93biwgVD4oKTtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU/OiB0cnVlO1xuICBwcml2YXRlIF9nZXRLZXlGbjogKG86IFQpID0+IHVua25vd24gPSBzYW1lO1xuXG4gIC8qKiBDYWNoZSBmb3IgdGhlIGFycmF5IHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBpdGVtcy4gKi9cbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IFRbXSB8IG51bGw7XG5cbiAgLyoqIFNlbGVjdGVkIHZhbHVlcy4gKi9cbiAgZ2V0IHNlbGVjdGVkKCk6IFRbXSB7XG4gICAgaWYgKCF0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBBcnJheS5mcm9tKHRoaXMuX3NlbGVjdGlvbk1hcC52YWx1ZXMoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0cz86IFNlbGVjdGlvbk9wdHM8VD4pIHtcbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBtdWx0aXBsZSwgZ2V0S2V5IH0gPSBvcHRzO1xuICAgIGlmIChnZXRLZXkpIHtcbiAgICAgIHRoaXMuX2dldEtleUZuID0gZ2V0S2V5O1xuICAgIH1cbiAgICBpZiAobXVsdGlwbGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX211bHRpcGxlID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHsgc2VsZWN0ZWRzIH0gPSBvcHRzO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0ZWRzKSAmJiBzZWxlY3RlZHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KC4uLnNlbGVjdGVkcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0ZWRzIH0gPSBvcHRzIGFzIHsgc2VsZWN0ZWRzOiBUIH07XG4gICAgICBpZiAoc2VsZWN0ZWRzKSB7XG4gICAgICAgIHRoaXMuX21hcmtTZWxlY3RlZChzZWxlY3RlZHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGEgdmFsdWUgYmV0d2VlbiBzZWxlY3RlZCBhbmQgZGVzZWxlY3RlZC5cbiAgICovXG4gIHRvZ2dsZSh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuaXNTZWxlY3RlZCh2YWx1ZSkgPyB0aGlzLmRlc2VsZWN0KHZhbHVlKSA6IHRoaXMuc2VsZWN0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9uZSBvciBzZXZlcmFsIHZhbHVlcy5cbiAgICovXG4gIHNlbGVjdCguLi52YWx1ZXM6IFRbXSk6IHZvaWQge1xuICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHRoaXMuX21hcmtTZWxlY3RlZCh2YWx1ZSkpO1xuICAgIHRoaXMuX2NsZWFyU2VsZWN0ZWRWYWx1ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNlbGVjdHMgYSB2YWx1ZSBvciBhbiBhcnJheSBvZiB2YWx1ZXMuXG4gICAqL1xuICBkZXNlbGVjdCguLi52YWx1ZXM6IFRbXSk6IHZvaWQge1xuICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHRoaXMuX3VubWFya1NlbGVjdGVkKHZhbHVlKSk7XG4gICAgdGhpcy5fY2xlYXJTZWxlY3RlZFZhbHVlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgaXNTZWxlY3RlZCh2YWx1ZTogVCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuX2dldEtleUZuKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uTWFwLmhhcyhrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kZWwgZG9lcyBub3QgaGF2ZSBhIHZhbHVlLlxuICAgKi9cbiAgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uTWFwLnNpemUgPT09IDA7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2RlbCBoYXMgYSB2YWx1ZS5cbiAgICovXG4gIGhhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25NYXAuc2l6ZSAhPT0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHdoZXRoZXIgbXVsdGlwbGUgdmFsdWVzIGNhbiBiZSBzZWxlY3RlZC5cbiAgICovXG4gIGlzTXVsdGlwbGVTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgb2YgdGhlIHNlbGVjdGVkIHZhbHVlcy5cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuX3VubWFya0FsbCgpO1xuICAgIHRoaXMuX2NsZWFyU2VsZWN0ZWRWYWx1ZXMoKTtcbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGEgdmFsdWUuICovXG4gIHByaXZhdGUgX21hcmtTZWxlY3RlZCh2YWx1ZTogVCkge1xuICAgIGlmICghdGhpcy5pc1NlbGVjdGVkKHZhbHVlKSkge1xuICAgICAgaWYgKCF0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLl91bm1hcmtBbGwoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga2V5ID0gdGhpcy5fZ2V0S2V5Rm4odmFsdWUpO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uTWFwLnNldChrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKiogRGVzZWxlY3RzIGEgdmFsdWUuICovXG4gIHByaXZhdGUgX3VubWFya1NlbGVjdGVkKHZhbHVlOiBUKSB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RlZCh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2dldEtleUZuKHZhbHVlKTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbk1hcC5kZWxldGUoa2V5KTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYXJzIG91dCB0aGUgc2VsZWN0ZWQgdmFsdWVzLiAqL1xuICBwcml2YXRlIF91bm1hcmtBbGwoKSB7XG4gICAgaWYgKCF0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uTWFwLmNsZWFyKCk7XG4gICAgfVxuICB9XG4gIC8qKiBDbGVhciB0aGUgc2VsZWN0ZWQgdmFsdWVzIHNvIHRoZXkgY2FuIGJlIHJlLWNhY2hlZC4gKi9cbiAgcHJpdmF0ZSBfY2xlYXJTZWxlY3RlZFZhbHVlcygpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XG4gIH1cblxufVxuIl19