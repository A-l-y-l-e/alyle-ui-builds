import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LyOverlayRef } from '@alyle/ui';
let LyDialogRef = class LyDialogRef {
    constructor(_overlayRef) {
        this._overlayRef = _overlayRef;
    }
    get afterOpened() {
        return this._overlayRef.componentRef.instance._afterOpened.asObservable();
    }
    get beforeClosed() {
        return this._overlayRef.componentRef.instance._beforeClosed.asObservable();
    }
    get afterClosed() {
        return this._overlayRef.componentRef.instance._afterClosed.asObservable();
    }
    /**
     * @internal
     * @docs-private
     */
    get result() {
        return this._result;
    }
    close(result) {
        const dialogContainer = this._overlayRef.componentRef.instance;
        dialogContainer._beforeClosed.next(result);
        dialogContainer._beforeClosed.complete();
        dialogContainer._startClose();
        this._result = result;
    }
};
LyDialogRef.ctorParameters = () => [
    { type: LyOverlayRef }
];
LyDialogRef = tslib_1.__decorate([
    Injectable()
], LyDialogRef);
export { LyDialogRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFJekMsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQXlCdEIsWUFDVSxXQUF5QjtRQUF6QixnQkFBVyxHQUFYLFdBQVcsQ0FBYztJQUduQyxDQUFDO0lBM0JELElBQUksV0FBVztRQUNiLE9BQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFhLENBQUMsUUFDaEMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFhLENBQUMsUUFDaEMsQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFhLENBQUMsUUFDaEMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBTUQsS0FBSyxDQUFDLE1BQVk7UUFDaEIsTUFBTSxlQUFlLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFhLENBQUMsUUFBOEIsQ0FBQztRQUN2RixlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxlQUFlLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTs7WUFYd0IsWUFBWTs7QUExQnhCLFdBQVc7SUFEdkIsVUFBVSxFQUFFO0dBQ0EsV0FBVyxDQXFDdkI7U0FyQ1ksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5T3ZlcmxheVJlZiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeURpYWxvZ0NvbnRhaW5lciB9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dSZWYge1xuICBwcml2YXRlIF9yZXN1bHQ6IGFueTtcbiAgZ2V0IGFmdGVyT3BlbmVkKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmNvbXBvbmVudFJlZiEuaW5zdGFuY2UgYXMgTHlEaWFsb2dDb250YWluZXJcbiAgICApLl9hZnRlck9wZW5lZC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBnZXQgYmVmb3JlQ2xvc2VkKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmNvbXBvbmVudFJlZiEuaW5zdGFuY2UgYXMgTHlEaWFsb2dDb250YWluZXJcbiAgICApLl9iZWZvcmVDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgZ2V0IGFmdGVyQ2xvc2VkKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmNvbXBvbmVudFJlZiEuaW5zdGFuY2UgYXMgTHlEaWFsb2dDb250YWluZXJcbiAgICApLl9hZnRlckNsb3NlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IHJlc3VsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX292ZXJsYXlSZWY6IEx5T3ZlcmxheVJlZlxuICApIHtcblxuICB9XG4gIGNsb3NlKHJlc3VsdD86IGFueSkge1xuICAgIGNvbnN0IGRpYWxvZ0NvbnRhaW5lciA9ICh0aGlzLl9vdmVybGF5UmVmLmNvbXBvbmVudFJlZiEuaW5zdGFuY2UgYXMgTHlEaWFsb2dDb250YWluZXIpO1xuICAgIGRpYWxvZ0NvbnRhaW5lci5fYmVmb3JlQ2xvc2VkLm5leHQocmVzdWx0KTtcbiAgICBkaWFsb2dDb250YWluZXIuX2JlZm9yZUNsb3NlZC5jb21wbGV0ZSgpO1xuICAgIGRpYWxvZ0NvbnRhaW5lci5fc3RhcnRDbG9zZSgpO1xuICAgIHRoaXMuX3Jlc3VsdCA9IHJlc3VsdDtcbiAgfVxufVxuIl19