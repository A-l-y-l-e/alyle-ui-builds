/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/** @type {?} */
const DEFAULT_DURATION = 6e3;
/**
 * @ignore
 * @type {?}
 */
const STYLE_PRIORITY = -2;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvIiwic291cmNlcyI6WyJzbmFjay1iYXItcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOztNQUtyQyxnQkFBZ0IsR0FBRyxHQUFHOzs7OztNQUV0QixjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRXpCLE1BQU0sT0FBTyxhQUFhOzs7Ozs7OztJQVd4QixZQUNVLGdCQUFtQyxFQUNuQyxRQUFnQyxFQUNoQywyQkFBNEQsRUFDcEUsUUFBZ0IsRUFDUixNQUFnQjtRQUpoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQXdCO1FBQ2hDLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBaUM7UUFFNUQsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQWRsQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7Ozs7UUFHbEIsb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBYXJELElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBYkQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7O0lBYUQsT0FBTzs7Y0FDQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7O2NBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTTtRQUN6QixJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLEtBQUssRUFBRTtnQkFDVCx1QkFBdUI7Z0JBQ3ZCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtZQUVELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7O0lBQ0QsaUJBQWlCOztjQUNULFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtRQUM5QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztDQUNGOzs7SUFqREMsK0JBQW9COztJQUNwQiwyQ0FBbUM7Ozs7O0lBR25DLHdDQUF1RDs7SUFPckQseUNBQTJDOztJQUMzQyxpQ0FBd0M7O0lBQ3hDLG9EQUFvRTs7SUFFcEUsK0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyU2VydmljZSB9IGZyb20gJy4vc25hY2stYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlTbmFja0JhckRpc21pc3MgfSBmcm9tICcuL3NuYWNrLWJhcic7XG5cbmNvbnN0IERFRkFVTFRfRFVSQVRJT04gPSA2ZTM7XG4vKiogQGlnbm9yZSAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXJSZWYge1xuICBwcml2YXRlIF90aW1lcjogYW55O1xuICBwcml2YXRlIF9kaXNtaXNzZWRCeUFjdGlvbiA9IGZhbHNlO1xuXG4gIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhlIHVzZXIgdGhhdCB0aGUgc25hY2sgYmFyIGhhcyBiZWVuIGRpc21pc3NlZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfYWZ0ZXJEaXNtaXNzZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSBzbmFjayBiYXIgaXMgZmluaXNoZWQgY2xvc2luZy4gKi9cbiAgYWZ0ZXJEaXNtaXNzZWQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FmdGVyRGlzbWlzc2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3NuYWNrQmFyU2VydmljZTogTHlTbmFja0JhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZixcbiAgICBwcml2YXRlIF9hZnRlckRpc21pc3NlZEV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPEx5U25hY2tCYXJEaXNtaXNzPixcbiAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfSwgZHVyYXRpb24gfHwgREVGQVVMVF9EVVJBVElPTik7XG4gIH1cblxuICBkaXNtaXNzKCkge1xuICAgIGNvbnN0IHNuYWNrQmFyID0gdGhpcy5fb3ZlcmxheTtcbiAgICBjb25zdCB0aW1lciA9IHRoaXMuX3RpbWVyO1xuICAgIHRoaXMuX2FmdGVyRGlzbWlzc2VkRXZlbnRFbWl0dGVyLmVtaXQoe2Rpc21pc3NlZEJ5QWN0aW9uOiB0aGlzLl9kaXNtaXNzZWRCeUFjdGlvbn0pO1xuICAgIHRoaXMuX2FmdGVyRGlzbWlzc2VkLm5leHQoKTtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZC5jb21wbGV0ZSgpO1xuICAgIGlmIChzbmFja0Jhcikge1xuICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgIC8vIGNsZWFyIHByZXZpb3VzIHRpbWVyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG5cbiAgICAgIHNuYWNrQmFyLmNvbnRhaW5lckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl90aGVtZS5hZGRTdHlsZSgnU25hY2tCYXI6b3BlbicsIG51bGwsIG51bGwsIG51bGwsIG51bGwpKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzbmFja0Jhci5kZXN0cm95KCk7XG4gICAgICB9LCAzNTApO1xuICAgICAgdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXIgPSBudWxsO1xuICAgICAgdGhpcy5fb3ZlcmxheSA9IG51bGw7XG4gICAgfVxuICB9XG4gIGRpc21pc3NXaXRoQWN0aW9uKCkge1xuICAgIGNvbnN0IHNuYWNrQmFyID0gdGhpcy5fb3ZlcmxheTtcbiAgICBpZiAoc25hY2tCYXIpIHtcbiAgICAgIHRoaXMuX2Rpc21pc3NlZEJ5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxufVxuIl19