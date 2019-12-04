import { Subject } from 'rxjs';
var DEFAULT_DURATION = 6e3;
var LySnackBarRef = /** @class */ (function () {
    function LySnackBarRef(_snackBarService, _overlay, _afterDismissedEventEmitter, duration, _theme) {
        var _this = this;
        this._snackBarService = _snackBarService;
        this._overlay = _overlay;
        this._afterDismissedEventEmitter = _afterDismissedEventEmitter;
        this._theme = _theme;
        this._dismissedByAction = false;
        /** Subject for notifying the user that the snack bar has been dismissed. */
        this._afterDismissed = new Subject();
        if (duration !== 'Infinity') {
            this._timer = setTimeout(function () {
                _this.dismiss();
            }, duration || DEFAULT_DURATION);
        }
    }
    /** Gets an observable that is notified when the snack bar is finished closing. */
    LySnackBarRef.prototype.afterDismissed = function () {
        return this._afterDismissed.asObservable();
    };
    LySnackBarRef.prototype.dismiss = function () {
        var snackBar = this._overlay;
        var timer = this._timer;
        this._afterDismissedEventEmitter.emit({ dismissedByAction: this._dismissedByAction });
        this._afterDismissed.next();
        this._afterDismissed.complete();
        if (snackBar) {
            if (timer) {
                // clear previous timer
                clearTimeout(timer);
            }
            snackBar.containerElement.classList.remove(this._theme.getClass('SnackBar:open'));
            setTimeout(function () {
                snackBar.destroy();
            }, 350);
            this._snackBarService._currentSnackBar = null;
            this._overlay = null;
        }
    };
    LySnackBarRef.prototype.dismissWithAction = function () {
        var snackBar = this._overlay;
        if (snackBar) {
            this._dismissedByAction = true;
            this.dismiss();
        }
    };
    return LySnackBarRef;
}());
export { LySnackBarRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zbmFjay1iYXIvIiwic291cmNlcyI6WyJzbmFjay1iYXItcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFLM0MsSUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7QUFFN0I7SUFXRSx1QkFDVSxnQkFBbUMsRUFDbkMsUUFBK0IsRUFDL0IsMkJBQTRELEVBQ3BFLFFBQTZCLEVBQ3JCLE1BQWdCO1FBTDFCLGlCQVlDO1FBWFMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQUMvQixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQWlDO1FBRTVELFdBQU0sR0FBTixNQUFNLENBQVU7UUFkbEIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRW5DLDRFQUE0RTtRQUMzRCxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFhckQsSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO2dCQUN2QixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsQ0FBQyxFQUFFLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQWhCRCxrRkFBa0Y7SUFDbEYsc0NBQWMsR0FBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBZUQsK0JBQU8sR0FBUDtRQUNFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLEtBQUssRUFBRTtnQkFDVCx1QkFBdUI7Z0JBQ3ZCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtZQUVELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDbEYsVUFBVSxDQUFDO2dCQUNULFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUNELHlDQUFpQixHQUFqQjtRQUNFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFwREQsSUFvREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE92ZXJsYXlGYWN0b3J5LCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyU2VydmljZSB9IGZyb20gJy4vc25hY2stYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlTbmFja0JhckRpc21pc3MgfSBmcm9tICcuL3NuYWNrLWJhcic7XG5cbmNvbnN0IERFRkFVTFRfRFVSQVRJT04gPSA2ZTM7XG5cbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyUmVmIHtcbiAgcHJpdmF0ZSBfdGltZXI6IGFueTtcbiAgcHJpdmF0ZSBfZGlzbWlzc2VkQnlBY3Rpb24gPSBmYWxzZTtcblxuICAvKiogU3ViamVjdCBmb3Igbm90aWZ5aW5nIHRoZSB1c2VyIHRoYXQgdGhlIHNuYWNrIGJhciBoYXMgYmVlbiBkaXNtaXNzZWQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FmdGVyRGlzbWlzc2VkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgaXMgbm90aWZpZWQgd2hlbiB0aGUgc25hY2sgYmFyIGlzIGZpbmlzaGVkIGNsb3NpbmcuICovXG4gIGFmdGVyRGlzbWlzc2VkKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hZnRlckRpc21pc3NlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9zbmFja0JhclNlcnZpY2U6IEx5U25hY2tCYXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXlGYWN0b3J5IHwgbnVsbCxcbiAgICBwcml2YXRlIF9hZnRlckRpc21pc3NlZEV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPEx5U25hY2tCYXJEaXNtaXNzPixcbiAgICBkdXJhdGlvbjogbnVtYmVyIHwgJ0luZmluaXR5JyxcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKGR1cmF0aW9uICE9PSAnSW5maW5pdHknKSB7XG4gICAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgIH0sIGR1cmF0aW9uIHx8IERFRkFVTFRfRFVSQVRJT04pO1xuICAgIH1cbiAgfVxuXG4gIGRpc21pc3MoKSB7XG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5O1xuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5fdGltZXI7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWRFdmVudEVtaXR0ZXIuZW1pdCh7ZGlzbWlzc2VkQnlBY3Rpb246IHRoaXMuX2Rpc21pc3NlZEJ5QWN0aW9ufSk7XG4gICAgdGhpcy5fYWZ0ZXJEaXNtaXNzZWQubmV4dCgpO1xuICAgIHRoaXMuX2FmdGVyRGlzbWlzc2VkLmNvbXBsZXRlKCk7XG4gICAgaWYgKHNuYWNrQmFyKSB7XG4gICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgLy8gY2xlYXIgcHJldmlvdXMgdGltZXJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgc25hY2tCYXIuY29udGFpbmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3RoZW1lLmdldENsYXNzKCdTbmFja0JhcjpvcGVuJykpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNuYWNrQmFyLmRlc3Ryb3koKTtcbiAgICAgIH0sIDM1MCk7XG4gICAgICB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhciA9IG51bGw7XG4gICAgICB0aGlzLl9vdmVybGF5ID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgZGlzbWlzc1dpdGhBY3Rpb24oKSB7XG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5O1xuICAgIGlmIChzbmFja0Jhcikge1xuICAgICAgdGhpcy5fZGlzbWlzc2VkQnlBY3Rpb24gPSB0cnVlO1xuICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=