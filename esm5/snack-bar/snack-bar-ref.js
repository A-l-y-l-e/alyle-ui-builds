/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/** @type {?} */
var DEFAULT_DURATION = 6e3;
/**
 * @ignore
 * @type {?}
 */
var STYLE_PRIORITY = -2;
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
        this._timer = setTimeout(function () {
            _this.dismiss();
        }, duration || DEFAULT_DURATION);
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
            this._theme.addStyle('SnackBar:close', ({
                opacity: 0
            }), snackBar.containerElement, undefined, STYLE_PRIORITY);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvIiwic291cmNlcyI6WyJzbmFjay1iYXItcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDOztJQUtyQyxnQkFBZ0IsR0FBRyxHQUFHOzs7OztJQUV0QixjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBRXpCO0lBV0UsdUJBQ1UsZ0JBQW1DLEVBQ25DLFFBQWdDLEVBQ2hDLDJCQUE0RCxFQUNwRSxRQUFnQixFQUNSLE1BQWdCO1FBTDFCLGlCQVVDO1FBVFMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUF3QjtRQUNoQyxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQWlDO1FBRTVELFdBQU0sR0FBTixNQUFNLENBQVU7UUFkbEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDOzs7O1FBR2xCLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQWFyRCxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztZQUN2QixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFkRCxrRkFBa0Y7Ozs7O0lBQ2xGLHNDQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7OztJQWFELCtCQUFPOzs7SUFBUDs7WUFDUSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7O1lBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTTtRQUN6QixJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLEtBQUssRUFBRTtnQkFDVCx1QkFBdUI7Z0JBQ3ZCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDMUQsVUFBVSxDQUFDO2dCQUNULFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUNELHlDQUFpQjs7O0lBQWpCOztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtRQUM5QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQzs7OztJQWxEQywrQkFBb0I7O0lBQ3BCLDJDQUFtQzs7Ozs7SUFHbkMsd0NBQXVEOztJQU9yRCx5Q0FBMkM7O0lBQzNDLGlDQUF3Qzs7SUFDeEMsb0RBQW9FOztJQUVwRSwrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYsIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5U25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zbmFjay1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyRGlzbWlzcyB9IGZyb20gJy4vc25hY2stYmFyJztcblxuY29uc3QgREVGQVVMVF9EVVJBVElPTiA9IDZlMztcbi8qKiBAaWdub3JlICovXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5leHBvcnQgY2xhc3MgTHlTbmFja0JhclJlZiB7XG4gIHByaXZhdGUgX3RpbWVyOiBhbnk7XG4gIHByaXZhdGUgX2Rpc21pc3NlZEJ5QWN0aW9uID0gZmFsc2U7XG5cbiAgLyoqIFN1YmplY3QgZm9yIG5vdGlmeWluZyB0aGUgdXNlciB0aGF0IHRoZSBzbmFjayBiYXIgaGFzIGJlZW4gZGlzbWlzc2VkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9hZnRlckRpc21pc3NlZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGlzIG5vdGlmaWVkIHdoZW4gdGhlIHNuYWNrIGJhciBpcyBmaW5pc2hlZCBjbG9zaW5nLiAqL1xuICBhZnRlckRpc21pc3NlZCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fYWZ0ZXJEaXNtaXNzZWQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfc25hY2tCYXJTZXJ2aWNlOiBMeVNuYWNrQmFyU2VydmljZSxcbiAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLFxuICAgIHByaXZhdGUgX2FmdGVyRGlzbWlzc2VkRXZlbnRFbWl0dGVyOiBFdmVudEVtaXR0ZXI8THlTbmFja0JhckRpc21pc3M+LFxuICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9LCBkdXJhdGlvbiB8fCBERUZBVUxUX0RVUkFUSU9OKTtcbiAgfVxuXG4gIGRpc21pc3MoKSB7XG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5O1xuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWRFdmVudEVtaXR0ZXIuZW1pdCh7ZGlzbWlzc2VkQnlBY3Rpb246IHRoaXMuX2Rpc21pc3NlZEJ5QWN0aW9ufSk7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWQubmV4dCgpO1xuICAgIHRoaXMuX2FmdGVyRGlzbWlzc2VkLmNvbXBsZXRlKCk7XG4gICAgaWYgKHNuYWNrQmFyKSB7XG4gICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgLy8gY2xlYXIgcHJldmlvdXMgdGltZXJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdTbmFja0JhcjpjbG9zZScsICh7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pLCBzbmFja0Jhci5jb250YWluZXJFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzbmFja0Jhci5kZXN0cm95KCk7XG4gICAgICB9LCAzNTApO1xuICAgICAgdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXIgPSBudWxsO1xuICAgICAgdGhpcy5fb3ZlcmxheSA9IG51bGw7XG4gICAgfVxuICB9XG4gIGRpc21pc3NXaXRoQWN0aW9uKCkge1xuICAgIGNvbnN0IHNuYWNrQmFyID0gdGhpcy5fb3ZlcmxheTtcbiAgICBpZiAoc25hY2tCYXIpIHtcbiAgICAgIHRoaXMuX2Rpc21pc3NlZEJ5QWN0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxufVxuIl19