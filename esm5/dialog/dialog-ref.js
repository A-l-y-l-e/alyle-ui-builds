/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyOverlayRef } from '@alyle/ui';
var LyDialogRef = /** @class */ (function () {
    function LyDialogRef(_overlayRef) {
        this._overlayRef = _overlayRef;
    }
    Object.defineProperty(LyDialogRef.prototype, "afterOpened", {
        get: /**
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._afterOpened.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "beforeClosed", {
        get: /**
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._beforeClosed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "afterClosed", {
        get: /**
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._afterClosed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "result", {
        /**
         * @internal
         * @docs-private
         */
        get: /**
         * \@internal
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._result;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} result
     * @return {?}
     */
    LyDialogRef.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        /** @type {?} */
        var dialogContainer = ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)));
        dialogContainer._beforeClosed.next(result);
        dialogContainer._beforeClosed.complete();
        dialogContainer._startClose();
        this._result = result;
    };
    LyDialogRef.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LyDialogRef.ctorParameters = function () { return [
        { type: LyOverlayRef }
    ]; };
    return LyDialogRef;
}());
export { LyDialogRef };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyDialogRef.prototype._result;
    /**
     * @type {?}
     * @private
     */
    LyDialogRef.prototype._overlayRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHekM7SUEwQkUscUJBQ1UsV0FBeUI7UUFBekIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7SUFHbkMsQ0FBQztJQTNCRCxzQkFBSSxvQ0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxDQUNMLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFDLENBQUMsUUFBUSxFQUFxQixDQUM3RCxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHFDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxDQUNMLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFDLENBQUMsUUFBUSxFQUFxQixDQUM3RCxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLG9DQUFXOzs7O1FBQWY7WUFDRSxPQUFPLENBQ0wsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUMsQ0FBQyxRQUFRLEVBQXFCLENBQzdELENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksK0JBQU07UUFKVjs7O1dBR0c7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7OztJQU1ELDJCQUFLOzs7O0lBQUwsVUFBTSxNQUFZOztZQUNWLGVBQWUsR0FBRyxDQUFDLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFDLENBQUMsUUFBUSxFQUFxQixDQUFDO1FBQ3RGLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7O2dCQXJDRixVQUFVOzs7O2dCQUhGLFlBQVk7O0lBeUNyQixrQkFBQztDQUFBLEFBdENELElBc0NDO1NBckNZLFdBQVc7Ozs7OztJQUN0Qiw4QkFBcUI7Ozs7O0lBeUJuQixrQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlSZWYgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlEaWFsb2dDb250YWluZXIgfSBmcm9tICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nUmVmIHtcbiAgcHJpdmF0ZSBfcmVzdWx0OiBhbnk7XG4gIGdldCBhZnRlck9wZW5lZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyXG4gICAgKS5fYWZ0ZXJPcGVuZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgZ2V0IGJlZm9yZUNsb3NlZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyXG4gICAgKS5fYmVmb3JlQ2xvc2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIGdldCBhZnRlckNsb3NlZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyXG4gICAgKS5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGdldCByZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9vdmVybGF5UmVmOiBMeU92ZXJsYXlSZWZcbiAgKSB7XG5cbiAgfVxuICBjbG9zZShyZXN1bHQ/OiBhbnkpIHtcbiAgICBjb25zdCBkaWFsb2dDb250YWluZXIgPSAodGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyKTtcbiAgICBkaWFsb2dDb250YWluZXIuX2JlZm9yZUNsb3NlZC5uZXh0KHJlc3VsdCk7XG4gICAgZGlhbG9nQ29udGFpbmVyLl9iZWZvcmVDbG9zZWQuY29tcGxldGUoKTtcbiAgICBkaWFsb2dDb250YWluZXIuX3N0YXJ0Q2xvc2UoKTtcbiAgICB0aGlzLl9yZXN1bHQgPSByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==