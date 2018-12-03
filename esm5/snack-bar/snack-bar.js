/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { LyTheme2, LyOverlay, shadowBuilder, XPosition, YPosition } from '@alyle/ui';
import { LySnackBarService } from './snack-bar.service';
import { LySnackBarRef } from './snack-bar-ref';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_HORIZONTAL_POSITION = XPosition.after;
/** @type {?} */
var DEFAULT_VERTICAL_POSITION = YPosition.below;
/**
 * Event that is emitted when a snack bar is dismissed.
 * @record
 */
export function LySnackBarDismiss() { }
if (false) {
    /**
     * Whether the snack bar was dismissed using the action fn.
     * @type {?}
     */
    LySnackBarDismiss.prototype.dismissedByAction;
}
var LySnackBar = /** @class */ (function () {
    function LySnackBar(_templateRef, _theme, _overlay, _snackBarService) {
        this._templateRef = _templateRef;
        this._theme = _theme;
        this._overlay = _overlay;
        this._snackBarService = _snackBarService;
        this.afterDismissed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    LySnackBar.prototype.open = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // close previous snackBar if exist
        /** @type {?} */
        var sbrPrev = this._snackBarService._currentSnackBar;
        if (sbrPrev) {
            sbrPrev.dismiss();
        }
        /** @type {?} */
        var duration = this.duration;
        /** @type {?} */
        var horizontalPosition = this.horizontalPosition || DEFAULT_HORIZONTAL_POSITION;
        /** @type {?} */
        var verticalPosition = this.verticalPosition || DEFAULT_VERTICAL_POSITION;
        /** @type {?} */
        var snackBar = this._overlay.create(this._templateRef, undefined, {
            styles: {
                // this remove previous style
                justifyContent: null
            },
            classes: [
                this._theme.addStyle('SnackBar', function (theme) {
                    var _a;
                    return (tslib_1.__assign((_a = { borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px', padding: '0 16px', minHeight: '48px', minWidth: '320px', maxWidth: '320px', opacity: 0, transition: "opacity " + theme.animations.curves.standard + " 350ms, transform " + theme.animations.curves.deceleration + " 350ms", fontSize: theme.pxToRem(theme.typography.fontSize), boxShadow: shadowBuilder(4, (/** @type {?} */ (theme.snackBar.root.background))) }, _a[theme.getBreakpoint('XSmall')] = {
                        width: 'calc(100% - 16px)',
                        minWidth: 'calc(100% - 16px)'
                    }, _a), theme.snackBar.root));
                }, undefined, undefined, STYLE_PRIORITY),
                this._theme.addStyle("SnackBar.hp:" + horizontalPosition + ".vp:" + verticalPosition, function (theme) {
                    /** @type {?} */
                    var __styles = {};
                    if (verticalPosition === YPosition.above) {
                        __styles.transform = 'translateY(-180%)';
                        __styles.top = 0;
                    }
                    if (verticalPosition === YPosition.below) {
                        __styles.transform = 'translateY(180%)';
                        __styles.bottom = 0;
                    }
                    if (horizontalPosition === 'center') {
                        __styles.marginRight = __styles.marginLeft = 'auto';
                        __styles.left = __styles.right = 0;
                    }
                    else {
                        __styles[theme.getDirection((/** @type {?} */ (horizontalPosition)))] = 0;
                    }
                    return __styles;
                }, undefined, undefined, STYLE_PRIORITY)
            ]
        });
        this._theme.requestAnimationFrame(function () {
            _this._theme.addStyle('SnackBar:open', ({
                opacity: 1,
                transform: 'translateY(0)'
            }), snackBar.containerElement, undefined, STYLE_PRIORITY);
        });
        /** @type {?} */
        var sbr = new LySnackBarRef(this._snackBarService, snackBar, this.afterDismissed, duration, this._theme);
        this._snackBarService._currentSnackBar = sbr;
        return sbr;
    };
    /** Dismiss snackBar */
    /**
     * Dismiss snackBar
     * @return {?}
     */
    LySnackBar.prototype.dismiss = /**
     * Dismiss snackBar
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sbr = this._snackBarService._currentSnackBar;
        if (sbr) {
            sbr.dismissWithAction();
        }
    };
    LySnackBar.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[ly-snack-bar]',
                    exportAs: 'lySnackBar'
                },] }
    ];
    /** @nocollapse */
    LySnackBar.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: LyTheme2 },
        { type: LyOverlay },
        { type: LySnackBarService }
    ]; };
    LySnackBar.propDecorators = {
        duration: [{ type: Input }],
        horizontalPosition: [{ type: Input }],
        verticalPosition: [{ type: Input }],
        afterDismissed: [{ type: Output }]
    };
    return LySnackBar;
}());
export { LySnackBar };
if (false) {
    /** @type {?} */
    LySnackBar.prototype.duration;
    /** @type {?} */
    LySnackBar.prototype.horizontalPosition;
    /** @type {?} */
    LySnackBar.prototype.verticalPosition;
    /** @type {?} */
    LySnackBar.prototype.afterDismissed;
    /** @type {?} */
    LySnackBar.prototype._templateRef;
    /** @type {?} */
    LySnackBar.prototype._theme;
    /** @type {?} */
    LySnackBar.prototype._overlay;
    /** @type {?} */
    LySnackBar.prototype._snackBarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NuYWNrLWJhci8iLCJzb3VyY2VzIjpbInNuYWNrLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFrQixhQUFhLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBRTFDLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLDJCQUEyQixHQUFHLFNBQVMsQ0FBQyxLQUFLOztJQUM3Qyx5QkFBeUIsR0FBRyxTQUFTLENBQUMsS0FBSzs7Ozs7QUFHakQsdUNBR0M7Ozs7OztJQURDLDhDQUEyQjs7QUFHN0I7SUFTRSxvQkFDVSxZQUE4QixFQUM5QixNQUFnQixFQUNoQixRQUFtQixFQUNuQixnQkFBbUM7UUFIbkMsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBTG5DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7SUFNN0QsQ0FBQzs7OztJQUVMLHlCQUFJOzs7SUFBSjtRQUFBLGlCQTJFQzs7O1lBekVPLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO1FBQ3RELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25COztZQUVLLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTs7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QVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQzs7WUFFRyxHQUFHLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFDN0MsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsdUJBQXVCOzs7OztJQUN2Qiw0QkFBTzs7OztJQUFQOztZQUNRLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO1FBQ2xELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOztnQkFuR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFsQjBCLFdBQVc7Z0JBQzdCLFFBQVE7Z0JBQUUsU0FBUztnQkFDbkIsaUJBQWlCOzs7MkJBa0J2QixLQUFLO3FDQUNMLEtBQUs7bUNBQ0wsS0FBSztpQ0FDTCxNQUFNOztJQTRGVCxpQkFBQztDQUFBLEFBcEdELElBb0dDO1NBaEdZLFVBQVU7OztJQUNyQiw4QkFBMEI7O0lBQzFCLHdDQUF1Rjs7SUFDdkYsc0NBQXFDOztJQUNyQyxvQ0FBaUU7O0lBRS9ELGtDQUFzQzs7SUFDdEMsNEJBQXdCOztJQUN4Qiw4QkFBMkI7O0lBQzNCLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIEx5T3ZlcmxheSwgVGhlbWVWYXJpYWJsZXMsIHNoYWRvd0J1aWxkZXIsIFhQb3NpdGlvbiwgWVBvc2l0aW9uIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5U25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zbmFjay1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyUmVmIH0gZnJvbSAnLi9zbmFjay1iYXItcmVmJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfSE9SSVpPTlRBTF9QT1NJVElPTiA9IFhQb3NpdGlvbi5hZnRlcjtcbmNvbnN0IERFRkFVTFRfVkVSVElDQUxfUE9TSVRJT04gPSBZUG9zaXRpb24uYmVsb3c7XG5cbi8qKiBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiBhIHNuYWNrIGJhciBpcyBkaXNtaXNzZWQuICovXG5leHBvcnQgaW50ZXJmYWNlIEx5U25hY2tCYXJEaXNtaXNzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIHNuYWNrIGJhciB3YXMgZGlzbWlzc2VkIHVzaW5nIHRoZSBhY3Rpb24gZm4uICovXG4gIGRpc21pc3NlZEJ5QWN0aW9uOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtseS1zbmFjay1iYXJdJyxcbiAgZXhwb3J0QXM6ICdseVNuYWNrQmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyIHtcbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KCkgaG9yaXpvbnRhbFBvc2l0aW9uOiAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCBYUG9zaXRpb247XG4gIEBJbnB1dCgpIHZlcnRpY2FsUG9zaXRpb246IFlQb3NpdGlvbjtcbiAgQE91dHB1dCgpIGFmdGVyRGlzbWlzc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxMeVNuYWNrQmFyRGlzbWlzcz4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICBwcml2YXRlIF9zbmFja0JhclNlcnZpY2U6IEx5U25hY2tCYXJTZXJ2aWNlXG4gICkgeyB9XG5cbiAgb3BlbigpIHtcbiAgICAvLyBjbG9zZSBwcmV2aW91cyBzbmFja0JhciBpZiBleGlzdFxuICAgIGNvbnN0IHNiclByZXYgPSB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhcjtcbiAgICBpZiAoc2JyUHJldikge1xuICAgICAgc2JyUHJldi5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgIGNvbnN0IGhvcml6b250YWxQb3NpdGlvbiA9IHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uIHx8IERFRkFVTFRfSE9SSVpPTlRBTF9QT1NJVElPTjtcbiAgICBjb25zdCB2ZXJ0aWNhbFBvc2l0aW9uID0gdGhpcy52ZXJ0aWNhbFBvc2l0aW9uIHx8IERFRkFVTFRfVkVSVElDQUxfUE9TSVRJT047XG5cbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMuX3RlbXBsYXRlUmVmLCB1bmRlZmluZWQsIHtcbiAgICAgIHN0eWxlczoge1xuICAgICAgICAvLyB0aGlzIHJlbW92ZSBwcmV2aW91cyBzdHlsZVxuICAgICAgICBqdXN0aWZ5Q29udGVudDogbnVsbFxuICAgICAgfSxcbiAgICAgIGNsYXNzZXM6IFtcbiAgICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyJywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIG1hcmdpbjogJzhweCcsXG4gICAgICAgICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgICAgICAgbWluSGVpZ2h0OiAnNDhweCcsXG4gICAgICAgICAgbWluV2lkdGg6ICczMjBweCcsXG4gICAgICAgICAgbWF4V2lkdGg6ICczMjBweCcsXG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfSAzNTBtcywgdHJhbnNmb3JtICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAzNTBtc2AsXG4gICAgICAgICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSksXG4gICAgICAgICAgYm94U2hhZG93OiBzaGFkb3dCdWlsZGVyKDQsIHRoZW1lLnNuYWNrQmFyLnJvb3QuYmFja2dyb3VuZCBhcyBzdHJpbmcpLFxuICAgICAgICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgICAgICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gMTZweCknLFxuICAgICAgICAgICAgbWluV2lkdGg6ICdjYWxjKDEwMCUgLSAxNnB4KSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLnRoZW1lLnNuYWNrQmFyLnJvb3QsXG4gICAgICAgIH0pLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpLFxuICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgU25hY2tCYXIuaHA6JHtob3Jpem9udGFsUG9zaXRpb259LnZwOiR7dmVydGljYWxQb3NpdGlvbn1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgX19zdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ/OiAnYXV0bycsXG4gICAgICAgICAgICBsZWZ0PzogMCxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PzogJ2F1dG8nLFxuICAgICAgICAgICAgcmlnaHQ/OiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtPzogc3RyaW5nLFxuICAgICAgICAgICAgdG9wPzogbnVtYmVyXG4gICAgICAgICAgICBib3R0b20/OiBudW1iZXJcbiAgICAgICAgICB9ID0geyB9O1xuICAgICAgICAgIGlmICh2ZXJ0aWNhbFBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0xODAlKSc7XG4gICAgICAgICAgICBfX3N0eWxlcy50b3AgPSAwO1xuICAgICAgICAgIH0gaWYgKHZlcnRpY2FsUG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgICAgX19zdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMTgwJSknO1xuICAgICAgICAgICAgX19zdHlsZXMuYm90dG9tID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLm1hcmdpblJpZ2h0ID0gX19zdHlsZXMubWFyZ2luTGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgIF9fc3R5bGVzLmxlZnQgPSBfX3N0eWxlcy5yaWdodCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9fc3R5bGVzW3RoZW1lLmdldERpcmVjdGlvbihob3Jpem9udGFsUG9zaXRpb24gYXMgYW55KV0gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX19zdHlsZXM7XG4gICAgICAgIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSlcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIHRoaXMuX3RoZW1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnU25hY2tCYXI6b3BlbicsICh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gICAgICB9KSwgc25hY2tCYXIuY29udGFpbmVyRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzYnIgPSBuZXcgTHlTbmFja0JhclJlZih0aGlzLl9zbmFja0JhclNlcnZpY2UsIHNuYWNrQmFyLCB0aGlzLmFmdGVyRGlzbWlzc2VkLCBkdXJhdGlvbiwgdGhpcy5fdGhlbWUpO1xuICAgIHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyID0gc2JyO1xuICAgIHJldHVybiBzYnI7XG4gIH1cblxuICAvKiogRGlzbWlzcyBzbmFja0JhciAqL1xuICBkaXNtaXNzKCkge1xuICAgIGNvbnN0IHNiciA9IHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyO1xuICAgIGlmIChzYnIpIHtcbiAgICAgIHNici5kaXNtaXNzV2l0aEFjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl19