/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { toBoolean } from '../minimal/is-boolean';
/**
 * @record
 */
export function CanDisable() { }
if (false) {
    /** @type {?} */
    CanDisable.prototype.disabled;
    /**
     * It is only used for common behavior, therefore, it should not be used for other purposes.
     * @type {?}
     */
    CanDisable.prototype._superHyperInternalPropertyDisabled;
}
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinDisabled(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._superHyperInternalPropertyDisabled = false;
        }
        /**
         * @return {?}
         */
        get disabled() { return this._superHyperInternalPropertyDisabled; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disabled(value) { this._superHyperInternalPropertyDisabled = toBoolean(value); }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvY29tbW9uL2Rpc2FibGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFbEQsZ0NBTUM7OztJQUxDLDhCQUFrQjs7Ozs7SUFJbEIseURBQXNEOzs7Ozs7O0FBTXhELE1BQU0sVUFBVSxhQUFhLENBQXdCLElBQU87SUFDMUQsT0FBTyxLQUFNLFNBQVEsSUFBSTs7OztRQU12QixZQUFZLEdBQUcsSUFBVztZQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBTDdDLHdDQUFtQyxHQUFZLEtBQUssQ0FBQztRQUtQLENBQUM7Ozs7UUFIL0MsSUFBSSxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDOzs7OztRQUNuRSxJQUFJLFFBQVEsQ0FBQyxLQUFVLElBQUksSUFBSSxDQUFDLG1DQUFtQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FHMUYsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vbWluaW1hbC9pcy1ib29sZWFuJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5EaXNhYmxlIHtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJdCBpcyBvbmx5IHVzZWQgZm9yIGNvbW1vbiBiZWhhdmlvciwgdGhlcmVmb3JlLCBpdCBzaG91bGQgbm90IGJlIHVzZWQgZm9yIG90aGVyIHB1cnBvc2VzLlxuICAgKi9cbiAgcmVhZG9ubHkgX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5RGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgdHlwZSBDYW5EaXNhYmxlQ3RvciA9IENvbnN0cnVjdG9yPENhbkRpc2FibGU+O1xuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5EaXNhYmxlZDxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KGJhc2U6IFQpOiBDYW5EaXNhYmxlQ3RvciAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBfc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZ2V0IGRpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5fc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlEaXNhYmxlZDsgfVxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX3N1cGVySHlwZXJJbnRlcm5hbFByb3BlcnR5RGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIl19