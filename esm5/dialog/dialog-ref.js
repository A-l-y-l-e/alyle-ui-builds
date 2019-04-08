import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LyOverlayRef } from '@alyle/ui';
var LyDialogRef = /** @class */ (function () {
    function LyDialogRef(_overlayRef) {
        this._overlayRef = _overlayRef;
    }
    Object.defineProperty(LyDialogRef.prototype, "afterOpened", {
        get: function () {
            return this._overlayRef.componentRef.instance._afterOpened.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "beforeClosed", {
        get: function () {
            return this._overlayRef.componentRef.instance._beforeClosed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "afterClosed", {
        get: function () {
            return this._overlayRef.componentRef.instance._afterClosed.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyDialogRef.prototype, "result", {
        /**
         * @internal
         * @docs-private
         */
        get: function () {
            return this._result;
        },
        enumerable: true,
        configurable: true
    });
    LyDialogRef.prototype.close = function (result) {
        var dialogContainer = this._overlayRef.componentRef.instance;
        dialogContainer._beforeClosed.next(result);
        dialogContainer._beforeClosed.complete();
        dialogContainer._startClose();
        this._result = result;
    };
    LyDialogRef = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [LyOverlayRef])
    ], LyDialogRef);
    return LyDialogRef;
}());
export { LyDialogRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFJekM7SUF5QkUscUJBQ1UsV0FBeUI7UUFBekIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7SUFHbkMsQ0FBQztJQTNCRCxzQkFBSSxvQ0FBVzthQUFmO1lBQ0UsT0FDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQWEsQ0FBQyxRQUNoQyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHFDQUFZO2FBQWhCO1lBQ0UsT0FDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQWEsQ0FBQyxRQUNoQyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLG9DQUFXO2FBQWY7WUFDRSxPQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBYSxDQUFDLFFBQ2hDLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksK0JBQU07UUFKVjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQU1ELDJCQUFLLEdBQUwsVUFBTSxNQUFZO1FBQ2hCLElBQU0sZUFBZSxHQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBYSxDQUFDLFFBQThCLENBQUM7UUFDdkYsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsZUFBZSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQztJQXBDVSxXQUFXO1FBRHZCLFVBQVUsRUFBRTtpREEyQlksWUFBWTtPQTFCeEIsV0FBVyxDQXFDdkI7SUFBRCxrQkFBQztDQUFBLEFBckNELElBcUNDO1NBckNZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlSZWYgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlEaWFsb2dDb250YWluZXIgfSBmcm9tICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nUmVmIHtcbiAgcHJpdmF0ZSBfcmVzdWx0OiBhbnk7XG4gIGdldCBhZnRlck9wZW5lZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyXG4gICAgKS5fYWZ0ZXJPcGVuZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgZ2V0IGJlZm9yZUNsb3NlZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyXG4gICAgKS5fYmVmb3JlQ2xvc2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIGdldCBhZnRlckNsb3NlZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyXG4gICAgKS5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIGdldCByZXN1bHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdDtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9vdmVybGF5UmVmOiBMeU92ZXJsYXlSZWZcbiAgKSB7XG5cbiAgfVxuICBjbG9zZShyZXN1bHQ/OiBhbnkpIHtcbiAgICBjb25zdCBkaWFsb2dDb250YWluZXIgPSAodGhpcy5fb3ZlcmxheVJlZi5jb21wb25lbnRSZWYhLmluc3RhbmNlIGFzIEx5RGlhbG9nQ29udGFpbmVyKTtcbiAgICBkaWFsb2dDb250YWluZXIuX2JlZm9yZUNsb3NlZC5uZXh0KHJlc3VsdCk7XG4gICAgZGlhbG9nQ29udGFpbmVyLl9iZWZvcmVDbG9zZWQuY29tcGxldGUoKTtcbiAgICBkaWFsb2dDb250YWluZXIuX3N0YXJ0Q2xvc2UoKTtcbiAgICB0aGlzLl9yZXN1bHQgPSByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==