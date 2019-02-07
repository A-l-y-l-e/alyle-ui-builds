/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LyOverlayRef } from '@alyle/ui';
export class LyDialogRef {
    /**
     * @param {?} _overlayRef
     */
    constructor(_overlayRef) {
        this._overlayRef = _overlayRef;
    }
    /**
     * @return {?}
     */
    get afterOpened() {
        return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._afterOpened.asObservable();
    }
    /**
     * @return {?}
     */
    get beforeClosed() {
        return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._beforeClosed.asObservable();
    }
    /**
     * @return {?}
     */
    get afterClosed() {
        return ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)))._afterClosed.asObservable();
    }
    /**
     * \@internal
     * \@docs-private
     * @return {?}
     */
    get result() {
        return this._result;
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        /** @type {?} */
        const dialogContainer = ((/** @type {?} */ ((/** @type {?} */ (this._overlayRef.componentRef)).instance)));
        dialogContainer._beforeClosed.next(result);
        dialogContainer._beforeClosed.complete();
        dialogContainer._startClose();
        this._result = result;
    }
}
LyDialogRef.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LyDialogRef.ctorParameters = () => [
    { type: LyOverlayRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFJekMsTUFBTSxPQUFPLFdBQVc7Ozs7SUF5QnRCLFlBQ1UsV0FBeUI7UUFBekIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7SUFHbkMsQ0FBQzs7OztJQTNCRCxJQUFJLFdBQVc7UUFDYixPQUFPLENBQ0wsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUMsQ0FBQyxRQUFRLEVBQXFCLENBQzdELENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLENBQ0wsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUMsQ0FBQyxRQUFRLEVBQXFCLENBQzdELENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFDRCxJQUFJLFdBQVc7UUFDYixPQUFPLENBQ0wsbUJBQUEsbUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUMsQ0FBQyxRQUFRLEVBQXFCLENBQzdELENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQU1ELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQU1ELEtBQUssQ0FBQyxNQUFZOztjQUNWLGVBQWUsR0FBRyxDQUFDLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFDLENBQUMsUUFBUSxFQUFxQixDQUFDO1FBQ3RGLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7OztZQXJDRixVQUFVOzs7O1lBSEYsWUFBWTs7Ozs7OztJQUtuQiw4QkFBcUI7Ozs7O0lBeUJuQixrQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlSZWYgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlEaWFsb2dDb250YWluZXIgfSBmcm9tICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nUmVmIHtcbiAgcHJpdmF0ZSBfcmVzdWx0OiBhbnk7XG4gIGdldCBhZnRlck9wZW5lZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyXG4gICAgKS5fYWZ0ZXJPcGVuZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgZ2V0IGJlZm9yZUNsb3NlZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyXG4gICAgKS5fYmVmb3JlQ2xvc2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIGdldCBhZnRlckNsb3NlZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyXG4gICAgKS5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGdldCByZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9vdmVybGF5UmVmOiBMeU92ZXJsYXlSZWZcbiAgKSB7XG5cbiAgfVxuICBjbG9zZShyZXN1bHQ/OiBhbnkpIHtcbiAgICBjb25zdCBkaWFsb2dDb250YWluZXIgPSAodGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyKTtcbiAgICBkaWFsb2dDb250YWluZXIuX2JlZm9yZUNsb3NlZC5uZXh0KHJlc3VsdCk7XG4gICAgZGlhbG9nQ29udGFpbmVyLl9iZWZvcmVDbG9zZWQuY29tcGxldGUoKTtcbiAgICBkaWFsb2dDb250YWluZXIuX3N0YXJ0Q2xvc2UoKTtcbiAgICB0aGlzLl9yZXN1bHQgPSByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==