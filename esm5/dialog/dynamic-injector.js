/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DynamicInjector = /** @class */ (function () {
    function DynamicInjector(_newInjector, _parentInjector) {
        this._newInjector = _newInjector;
        this._parentInjector = _parentInjector;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} _flags
     * @return {?}
     */
    DynamicInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} _flags
     * @return {?}
     */
    function (token, notFoundValue, _flags) {
        /** @type {?} */
        var value = this._newInjector.get(token, notFoundValue);
        if (value) {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return DynamicInjector;
}());
export { DynamicInjector };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DynamicInjector.prototype._newInjector;
    /**
     * @type {?}
     * @private
     */
    DynamicInjector.prototype._parentInjector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkeW5hbWljLWluamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQUVFLHlCQUFvQixZQUFzQixFQUFVLGVBQXlCO1FBQXpELGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQVU7SUFBSSxDQUFDOzs7Ozs7O0lBSWxGLDZCQUFHOzs7Ozs7SUFBSCxVQUFJLEtBQVUsRUFBRSxhQUFtQixFQUFFLE1BQVk7O1lBQ3pDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDO1FBRXpELElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFmRCxJQWVDOzs7Ozs7O0lBYmEsdUNBQThCOzs7OztJQUFFLDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBUeXBlLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0RmxhZ3MgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIER5bmFtaWNJbmplY3RvciBpbXBsZW1lbnRzIEluamVjdG9yIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZXdJbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgX3BhcmVudEluamVjdG9yOiBJbmplY3RvcikgeyB9XG5cbiAgZ2V0PFQ+KHRva2VuOiBUeXBlPFQ+IHwgSW5qZWN0aW9uVG9rZW48VD4sIG5vdEZvdW5kVmFsdWU/OiBULCBmbGFncz86IEluamVjdEZsYWdzKTogVDtcbiAgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU/OiBhbnkpO1xuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSwgX2ZsYWdzPzogYW55KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9uZXdJbmplY3Rvci5nZXQodG9rZW4sIG5vdEZvdW5kVmFsdWUpO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudEluamVjdG9yLmdldDxhbnk+KHRva2VuLCBub3RGb3VuZFZhbHVlKTtcbiAgfVxufVxuIl19