/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/** @type {?} */
const DEFAULT_DURATION = 6e3;
export class LySnackBarRef {
    /**
     * @param {?} _snackBarService
     * @param {?} _overlay
     * @param {?} _afterDismissedEventEmitter
     * @param {?} duration
     * @param {?} _theme
     */
    constructor(_snackBarService, _overlay, _afterDismissedEventEmitter, duration, _theme) {
        this._snackBarService = _snackBarService;
        this._overlay = _overlay;
        this._afterDismissedEventEmitter = _afterDismissedEventEmitter;
        this._theme = _theme;
        this._dismissedByAction = false;
        /**
         * Subject for notifying the user that the snack bar has been dismissed.
         */
        this._afterDismissed = new Subject();
        this._timer = setTimeout(() => {
            this.dismiss();
        }, duration || DEFAULT_DURATION);
    }
    /**
     * Gets an observable that is notified when the snack bar is finished closing.
     * @return {?}
     */
    afterDismissed() {
        return this._afterDismissed.asObservable();
    }
    /**
     * @return {?}
     */
    dismiss() {
        /** @type {?} */
        const snackBar = this._overlay;
        /** @type {?} */
        const timer = this._timer;
        this._afterDismissedEventEmitter.emit({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.next();
        this._afterDismissed.complete();
        if (snackBar) {
            if (timer) {
                // clear previous timer
                clearTimeout(timer);
            }
            snackBar.containerElement.classList.remove(this._theme.addStyle('SnackBar:open', null, null, null, null));
            setTimeout(() => {
                snackBar.destroy();
            }, 350);
            this._snackBarService._currentSnackBar = null;
            this._overlay = null;
        }
    }
    /**
     * @return {?}
     */
    dismissWithAction() {
        /** @type {?} */
        const snackBar = this._overlay;
        if (snackBar) {
            this._dismissedByAction = true;
            this.dismiss();
        }
    }
}
if (false) {
    /** @type {?} */
    LySnackBarRef.prototype._timer;
    /** @type {?} */
    LySnackBarRef.prototype._dismissedByAction;
    /**
     * Subject for notifying the user that the snack bar has been dismissed.
     * @type {?}
     */
    LySnackBarRef.prototype._afterDismissed;
    /** @type {?} */
    LySnackBarRef.prototype._snackBarService;
    /** @type {?} */
    LySnackBarRef.prototype._overlay;
    /** @type {?} */
    LySnackBarRef.prototype._afterDismissedEventEmitter;
    /** @type {?} */
    LySnackBarRef.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvIiwic291cmNlcyI6WyJzbmFjay1iYXItcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOztNQUtyQyxnQkFBZ0IsR0FBRyxHQUFHO0FBRTVCLE1BQU0sT0FBTyxhQUFhOzs7Ozs7OztJQVd4QixZQUNVLGdCQUFtQyxFQUNuQyxRQUFnQyxFQUNoQywyQkFBNEQsRUFDcEUsUUFBZ0IsRUFDUixNQUFnQjtRQUpoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQXdCO1FBQ2hDLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBaUM7UUFFNUQsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQWRsQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7Ozs7UUFHbEIsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBYXJELElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBYkQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7O0lBYUQsT0FBTzs7Y0FDQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7O2NBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTTtRQUN6QixJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLEtBQUssRUFBRTtnQkFDVCx1QkFBdUI7Z0JBQ3ZCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtZQUVELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7O0lBQ0QsaUJBQWlCOztjQUNULFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtRQUM5QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztDQUNGOzs7SUFqREMsK0JBQW9COztJQUNwQiwyQ0FBbUM7Ozs7O0lBR25DLHdDQUF1RDs7SUFPckQseUNBQTJDOztJQUMzQyxpQ0FBd0M7O0lBQ3hDLG9EQUFvRTs7SUFFcEUsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyU2VydmljZSB9IGZyb20gJy4vc25hY2stYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlTbmFja0JhckRpc21pc3MgfSBmcm9tICcuL3NuYWNrLWJhcic7XG5cbmNvbnN0IERFRkFVTFRfRFVSQVRJT04gPSA2ZTM7XG5cbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyUmVmIHtcbiAgcHJpdmF0ZSBfdGltZXI6IGFueTtcbiAgcHJpdmF0ZSBfZGlzbWlzc2VkQnlBY3Rpb24gPSBmYWxzZTtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoZSB1c2VyIHRoYXQgdGhlIHNuYWNrIGJhciBoYXMgYmVlbiBkaXNtaXNzZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FmdGVyRGlzbWlzc2VkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgc25hY2sgYmFyIGlzIGZpbmlzaGVkIGNsb3NpbmcuICovXG4gIGFmdGVyRGlzbWlzc2VkKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hZnRlckRpc21pc3NlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zbmFja0JhclNlcnZpY2U6IEx5U25hY2tCYXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYsXG4gICAgcHJpdmF0ZSBfYWZ0ZXJEaXNtaXNzZWRFdmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxMeVNuYWNrQmFyRGlzbWlzcz4sXG4gICAgZHVyYXRpb246IG51bWJlcixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH0sIGR1cmF0aW9uIHx8IERFRkFVTFRfRFVSQVRJT04pO1xuICB9XG5cbiAgZGlzbWlzcygpIHtcbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXk7XG4gICAgY29uc3QgdGltZXIgPSB0aGlzLl90aW1lcjtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZEV2ZW50RW1pdHRlci5lbWl0KHtkaXNtaXNzZWRCeUFjdGlvbjogdGhpcy5fZGlzbWlzc2VkQnlBY3Rpb259KTtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZC5uZXh0KCk7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWQuY29tcGxldGUoKTtcbiAgICBpZiAoc25hY2tCYXIpIHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAvLyBjbGVhciBwcmV2aW91cyB0aW1lclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuXG4gICAgICBzbmFja0Jhci5jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyOm9wZW4nLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc25hY2tCYXIuZGVzdHJveSgpO1xuICAgICAgfSwgMzUwKTtcbiAgICAgIHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyID0gbnVsbDtcbiAgICAgIHRoaXMuX292ZXJsYXkgPSBudWxsO1xuICAgIH1cbiAgfVxuICBkaXNtaXNzV2l0aEFjdGlvbigpIHtcbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXk7XG4gICAgaWYgKHNuYWNrQmFyKSB7XG4gICAgICB0aGlzLl9kaXNtaXNzZWRCeUFjdGlvbiA9IHRydWU7XG4gICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==