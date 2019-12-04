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
    LyDialogRef.ctorParameters = function () { return [
        { type: LyOverlayRef }
    ]; };
    LyDialogRef = tslib_1.__decorate([
        Injectable()
    ], LyDialogRef);
    return LyDialogRef;
}());
export { LyDialogRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFJekM7SUF5QkUscUJBQ1UsV0FBeUI7UUFBekIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7SUFHbkMsQ0FBQztJQTNCRCxzQkFBSSxvQ0FBVzthQUFmO1lBQ0UsT0FDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQWEsQ0FBQyxRQUNoQyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHFDQUFZO2FBQWhCO1lBQ0UsT0FDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQWEsQ0FBQyxRQUNoQyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLG9DQUFXO2FBQWY7WUFDRSxPQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBYSxDQUFDLFFBQ2hDLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksK0JBQU07UUFKVjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQU1ELDJCQUFLLEdBQUwsVUFBTSxNQUFZO1FBQ2hCLElBQU0sZUFBZSxHQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBYSxDQUFDLFFBQThCLENBQUM7UUFDdkYsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsZUFBZSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7Z0JBVnNCLFlBQVk7O0lBMUJ4QixXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVcsQ0FxQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXJDWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlPdmVybGF5UmVmIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5RGlhbG9nQ29udGFpbmVyIH0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMeURpYWxvZ1JlZiB7XG4gIHByaXZhdGUgX3Jlc3VsdDogYW55O1xuICBnZXQgYWZ0ZXJPcGVuZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuY29tcG9uZW50UmVmIS5pbnN0YW5jZSBhcyBMeURpYWxvZ0NvbnRhaW5lclxuICAgICkuX2FmdGVyT3BlbmVkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIGdldCBiZWZvcmVDbG9zZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuY29tcG9uZW50UmVmIS5pbnN0YW5jZSBhcyBMeURpYWxvZ0NvbnRhaW5lclxuICAgICkuX2JlZm9yZUNsb3NlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBnZXQgYWZ0ZXJDbG9zZWQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuY29tcG9uZW50UmVmIS5pbnN0YW5jZSBhcyBMeURpYWxvZ0NvbnRhaW5lclxuICAgICkuX2FmdGVyQ2xvc2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAZG9jcy1wcml2YXRlXG4gICAqL1xuICBnZXQgcmVzdWx0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHQ7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogTHlPdmVybGF5UmVmXG4gICkge1xuXG4gIH1cbiAgY2xvc2UocmVzdWx0PzogYW55KSB7XG4gICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gKHRoaXMuX292ZXJsYXlSZWYuY29tcG9uZW50UmVmIS5pbnN0YW5jZSBhcyBMeURpYWxvZ0NvbnRhaW5lcik7XG4gICAgZGlhbG9nQ29udGFpbmVyLl9iZWZvcmVDbG9zZWQubmV4dChyZXN1bHQpO1xuICAgIGRpYWxvZ0NvbnRhaW5lci5fYmVmb3JlQ2xvc2VkLmNvbXBsZXRlKCk7XG4gICAgZGlhbG9nQ29udGFpbmVyLl9zdGFydENsb3NlKCk7XG4gICAgdGhpcy5fcmVzdWx0ID0gcmVzdWx0O1xuICB9XG59XG4iXX0=