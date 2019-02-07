/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/** @type {?} */
var DEFAULT_DURATION = 6e3;
var LySnackBarRef = /** @class */ (function () {
    function LySnackBarRef(_snackBarService, _overlay, _afterDismissedEventEmitter, duration, _theme) {
        var _this = this;
        this._snackBarService = _snackBarService;
        this._overlay = _overlay;
        this._afterDismissedEventEmitter = _afterDismissedEventEmitter;
        this._theme = _theme;
        this._dismissedByAction = false;
        /**
         * Subject for notifying the user that the snack bar has been dismissed.
         */
        this._afterDismissed = new Subject();
        if (duration !== 'Infinity') {
            this._timer = setTimeout(function () {
                _this.dismiss();
            }, duration || DEFAULT_DURATION);
        }
    }
    /** Gets an observable that is notified when the snack bar is finished closing. */
    /**
     * Gets an observable that is notified when the snack bar is finished closing.
     * @return {?}
     */
    LySnackBarRef.prototype.afterDismissed = /**
     * Gets an observable that is notified when the snack bar is finished closing.
     * @return {?}
     */
    function () {
        return this._afterDismissed.asObservable();
    };
    /**
     * @return {?}
     */
    LySnackBarRef.prototype.dismiss = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var snackBar = this._overlay;
        /** @type {?} */
        var timer = this._timer;
        this._afterDismissedEventEmitter.emit({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.next();
        this._afterDismissed.complete();
        if (snackBar) {
            if (timer) {
                // clear previous timer
                clearTimeout(timer);
            }
            snackBar.containerElement.classList.remove(this._theme.addStyle('SnackBar:open', null, null, null, null));
            setTimeout(function () {
                snackBar.destroy();
            }, 350);
            this._snackBarService._currentSnackBar = null;
            this._overlay = null;
        }
    };
    /**
     * @return {?}
     */
    LySnackBarRef.prototype.dismissWithAction = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var snackBar = this._overlay;
        if (snackBar) {
            this._dismissedByAction = true;
            this.dismiss();
        }
    };
    return LySnackBarRef;
}());
export { LySnackBarRef };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LySnackBarRef.prototype._timer;
    /**
     * @type {?}
     * @private
     */
    LySnackBarRef.prototype._dismissedByAction;
    /**
     * Subject for notifying the user that the snack bar has been dismissed.
     * @type {?}
     * @private
     */
    LySnackBarRef.prototype._afterDismissed;
    /**
     * @type {?}
     * @private
     */
    LySnackBarRef.prototype._snackBarService;
    /**
     * @type {?}
     * @private
     */
    LySnackBarRef.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    LySnackBarRef.prototype._afterDismissedEventEmitter;
    /**
     * @type {?}
     * @private
     */
    LySnackBarRef.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvIiwic291cmNlcyI6WyJzbmFjay1iYXItcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOztJQUtyQyxnQkFBZ0IsR0FBRyxHQUFHO0FBRTVCO0lBV0UsdUJBQ1UsZ0JBQW1DLEVBQ25DLFFBQStCLEVBQy9CLDJCQUE0RCxFQUNwRSxRQUE2QixFQUNyQixNQUFnQjtRQUwxQixpQkFZQztRQVhTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFDL0IsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUFpQztRQUU1RCxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBZGxCLHVCQUFrQixHQUFHLEtBQUssQ0FBQzs7OztRQUdsQixvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFhckQsSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO2dCQUN2QixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsQ0FBQyxFQUFFLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQWhCRCxrRkFBa0Y7Ozs7O0lBQ2xGLHNDQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7OztJQWVELCtCQUFPOzs7SUFBUDs7WUFDUSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7O1lBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTTtRQUN6QixJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLEtBQUssRUFBRTtnQkFDVCx1QkFBdUI7Z0JBQ3ZCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtZQUVELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFHLFVBQVUsQ0FBQztnQkFDVCxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7SUFDRCx5Q0FBaUI7OztJQUFqQjs7WUFDUSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFDOUIsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFwREQsSUFvREM7Ozs7Ozs7SUFuREMsK0JBQW9COzs7OztJQUNwQiwyQ0FBbUM7Ozs7OztJQUduQyx3Q0FBdUQ7Ozs7O0lBT3JELHlDQUEyQzs7Ozs7SUFDM0MsaUNBQXVDOzs7OztJQUN2QyxvREFBb0U7Ozs7O0lBRXBFLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheUZhY3RvcnksIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5U25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zbmFjay1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyRGlzbWlzcyB9IGZyb20gJy4vc25hY2stYmFyJztcblxuY29uc3QgREVGQVVMVF9EVVJBVElPTiA9IDZlMztcblxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXJSZWYge1xuICBwcml2YXRlIF90aW1lcjogYW55O1xuICBwcml2YXRlIF9kaXNtaXNzZWRCeUFjdGlvbiA9IGZhbHNlO1xuXG4gIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhlIHVzZXIgdGhhdCB0aGUgc25hY2sgYmFyIGhhcyBiZWVuIGRpc21pc3NlZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfYWZ0ZXJEaXNtaXNzZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSBzbmFjayBiYXIgaXMgZmluaXNoZWQgY2xvc2luZy4gKi9cbiAgYWZ0ZXJEaXNtaXNzZWQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2FmdGVyRGlzbWlzc2VkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3NuYWNrQmFyU2VydmljZTogTHlTbmFja0JhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheUZhY3RvcnkgfCBudWxsLFxuICAgIHByaXZhdGUgX2FmdGVyRGlzbWlzc2VkRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8THlTbmFja0JhckRpc21pc3M+LFxuICAgIGR1cmF0aW9uOiBudW1iZXIgfCAnSW5maW5pdHknLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoZHVyYXRpb24gIT09ICdJbmZpbml0eScpIHtcbiAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgfSwgZHVyYXRpb24gfHwgREVGQVVMVF9EVVJBVElPTik7XG4gICAgfVxuICB9XG5cbiAgZGlzbWlzcygpIHtcbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXk7XG4gICAgY29uc3QgdGltZXIgPSB0aGlzLl90aW1lcjtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZEV2ZW50RW1pdHRlci5lbWl0KHtkaXNtaXNzZWRCeUFjdGlvbjogdGhpcy5fZGlzbWlzc2VkQnlBY3Rpb259KTtcbiAgICB0aGlzLl9hZnRlckRpc21pc3NlZC5uZXh0KCk7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWQuY29tcGxldGUoKTtcbiAgICBpZiAoc25hY2tCYXIpIHtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAvLyBjbGVhciBwcmV2aW91cyB0aW1lclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuXG4gICAgICBzbmFja0Jhci5jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyOm9wZW4nLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc25hY2tCYXIuZGVzdHJveSgpO1xuICAgICAgfSwgMzUwKTtcbiAgICAgIHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyID0gbnVsbDtcbiAgICAgIHRoaXMuX292ZXJsYXkgPSBudWxsO1xuICAgIH1cbiAgfVxuICBkaXNtaXNzV2l0aEFjdGlvbigpIHtcbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXk7XG4gICAgaWYgKHNuYWNrQmFyKSB7XG4gICAgICB0aGlzLl9kaXNtaXNzZWRCeUFjdGlvbiA9IHRydWU7XG4gICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==