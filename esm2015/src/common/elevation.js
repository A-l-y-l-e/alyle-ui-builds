/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function CanElevation() { }
if (false) {
    /** @type {?} */
    CanElevation.prototype.elevation;
    /**
     * It is only used for common behavior, therefore, it should not be used for other purposes.
     * @type {?}
     */
    CanElevation.prototype._superHyperInternalPropertyElevation;
}
/**
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinElevation(base) {
    return class extends base {
        /**
         * @return {?}
         */
        get elevation() { return this._superHyperInternalPropertyElevation; }
        /**
         * @param {?} value
         * @return {?}
         */
        set elevation(value) { this._superHyperInternalPropertyElevation = value; }
        /**
         * @param {...?} args
         */
        constructor(...args) { super(...args); }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2NvbW1vbi9lbGV2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLGtDQU1DOzs7SUFMQyxpQ0FBa0I7Ozs7O0lBSWxCLDREQUFzRDs7Ozs7OztBQUd4RCxNQUFNLFVBQVUsY0FBYyxDQUF3QixJQUFPO0lBQzNELE9BQU8sS0FBTSxTQUFRLElBQUk7Ozs7UUFHdkIsSUFBSSxTQUFTLEtBQUssT0FBTyxJQUFJLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDOzs7OztRQUNyRSxJQUFJLFNBQVMsQ0FBQyxLQUFVLElBQUksSUFBSSxDQUFDLG9DQUFvQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7UUFFaEYsWUFBWSxHQUFHLElBQVcsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEQsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbkVsZXZhdGlvbiB7XG4gIGVsZXZhdGlvbjogbnVtYmVyO1xuICAvKipcbiAgICogSXQgaXMgb25seSB1c2VkIGZvciBjb21tb24gYmVoYXZpb3IsIHRoZXJlZm9yZSwgaXQgc2hvdWxkIG5vdCBiZSB1c2VkIGZvciBvdGhlciBwdXJwb3Nlcy5cbiAgICovXG4gIHJlYWRvbmx5IF9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUVsZXZhdGlvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5FbGV2YXRpb248VCBleHRlbmRzIENvbnN0cnVjdG9yPihiYXNlOiBUKTogQ29uc3RydWN0b3I8Q2FuRWxldmF0aW9uPiAmIFQge1xuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBiYXNlIHtcbiAgICBfc3VwZXJIeXBlckludGVybmFsUHJvcGVydHlFbGV2YXRpb246IG51bWJlcjtcblxuICAgIGdldCBlbGV2YXRpb24oKSB7IHJldHVybiB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUVsZXZhdGlvbjsgfVxuICAgIHNldCBlbGV2YXRpb24odmFsdWU6IGFueSkgeyB0aGlzLl9zdXBlckh5cGVySW50ZXJuYWxQcm9wZXJ0eUVsZXZhdGlvbiA9IHZhbHVlOyB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkgeyBzdXBlciguLi5hcmdzKTsgfVxuICB9O1xufVxuIl19