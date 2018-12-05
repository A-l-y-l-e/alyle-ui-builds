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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NuYWNrLWJhci8iLCJzb3VyY2VzIjpbInNuYWNrLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFrQixhQUFhLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBRTFDLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLDJCQUEyQixHQUFHLFNBQVMsQ0FBQyxLQUFLOztJQUM3Qyx5QkFBeUIsR0FBRyxTQUFTLENBQUMsS0FBSzs7Ozs7QUFHakQsdUNBR0M7Ozs7OztJQURDLDhDQUEyQjs7QUFHN0I7SUFTRSxvQkFDVSxZQUE4QixFQUM5QixNQUFnQixFQUNoQixRQUFtQixFQUNuQixnQkFBbUM7UUFIbkMsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBTG5DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7SUFNN0QsQ0FBQzs7OztJQUVMLHlCQUFJOzs7SUFBSjtRQUFBLGlCQTJFQzs7O1lBekVPLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO1FBQ3RELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25COztZQUVLLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTs7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QVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQzs7WUFFRyxHQUFHLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFDN0MsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsdUJBQXVCOzs7OztJQUN2Qiw0QkFBTzs7OztJQUFQOztZQUNRLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO1FBQ2xELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOztnQkFuR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFsQjBCLFdBQVc7Z0JBQzdCLFFBQVE7Z0JBQUUsU0FBUztnQkFDbkIsaUJBQWlCOzs7MkJBa0J2QixLQUFLO3FDQUNMLEtBQUs7bUNBQ0wsS0FBSztpQ0FDTCxNQUFNOztJQTRGVCxpQkFBQztDQUFBLEFBcEdELElBb0dDO1NBaEdZLFVBQVU7OztJQUNyQiw4QkFBMEI7O0lBQzFCLHdDQUFrRDs7SUFDbEQsc0NBQXFDOztJQUNyQyxvQ0FBaUU7O0lBRS9ELGtDQUFzQzs7SUFDdEMsNEJBQXdCOztJQUN4Qiw4QkFBMkI7O0lBQzNCLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIEx5T3ZlcmxheSwgVGhlbWVWYXJpYWJsZXMsIHNoYWRvd0J1aWxkZXIsIFhQb3NpdGlvbiwgWVBvc2l0aW9uIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5U25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zbmFjay1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyUmVmIH0gZnJvbSAnLi9zbmFjay1iYXItcmVmJztcblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfSE9SSVpPTlRBTF9QT1NJVElPTiA9IFhQb3NpdGlvbi5hZnRlcjtcbmNvbnN0IERFRkFVTFRfVkVSVElDQUxfUE9TSVRJT04gPSBZUG9zaXRpb24uYmVsb3c7XG5cbi8qKiBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiBhIHNuYWNrIGJhciBpcyBkaXNtaXNzZWQuICovXG5leHBvcnQgaW50ZXJmYWNlIEx5U25hY2tCYXJEaXNtaXNzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIHNuYWNrIGJhciB3YXMgZGlzbWlzc2VkIHVzaW5nIHRoZSBhY3Rpb24gZm4uICovXG4gIGRpc21pc3NlZEJ5QWN0aW9uOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtseS1zbmFjay1iYXJdJyxcbiAgZXhwb3J0QXM6ICdseVNuYWNrQmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyIHtcbiAgQElucHV0KCkgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KCkgaG9yaXpvbnRhbFBvc2l0aW9uOiAnY2VudGVyJyB8IFhQb3NpdGlvbjtcbiAgQElucHV0KCkgdmVydGljYWxQb3NpdGlvbjogWVBvc2l0aW9uO1xuICBAT3V0cHV0KCkgYWZ0ZXJEaXNtaXNzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEx5U25hY2tCYXJEaXNtaXNzPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX3NuYWNrQmFyU2VydmljZTogTHlTbmFja0JhclNlcnZpY2VcbiAgKSB7IH1cblxuICBvcGVuKCkge1xuICAgIC8vIGNsb3NlIHByZXZpb3VzIHNuYWNrQmFyIGlmIGV4aXN0XG4gICAgY29uc3Qgc2JyUHJldiA9IHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyO1xuICAgIGlmIChzYnJQcmV2KSB7XG4gICAgICBzYnJQcmV2LmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuZHVyYXRpb247XG4gICAgY29uc3QgaG9yaXpvbnRhbFBvc2l0aW9uID0gdGhpcy5ob3Jpem9udGFsUG9zaXRpb24gfHwgREVGQVVMVF9IT1JJWk9OVEFMX1BPU0lUSU9OO1xuICAgIGNvbnN0IHZlcnRpY2FsUG9zaXRpb24gPSB0aGlzLnZlcnRpY2FsUG9zaXRpb24gfHwgREVGQVVMVF9WRVJUSUNBTF9QT1NJVElPTjtcblxuICAgIGNvbnN0IHNuYWNrQmFyID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy5fdGVtcGxhdGVSZWYsIHVuZGVmaW5lZCwge1xuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIC8vIHRoaXMgcmVtb3ZlIHByZXZpb3VzIHN0eWxlXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBudWxsXG4gICAgICB9LFxuICAgICAgY2xhc3NlczogW1xuICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnU25hY2tCYXInLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgbWFyZ2luOiAnOHB4JyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICAgICAgICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAgICAgICAgICBtaW5XaWR0aDogJzMyMHB4JyxcbiAgICAgICAgICBtYXhXaWR0aDogJzMyMHB4JyxcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9IDM1MG1zLCB0cmFuc2Zvcm0gJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5kZWNlbGVyYXRpb259IDM1MG1zYCxcbiAgICAgICAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplKSxcbiAgICAgICAgICBib3hTaGFkb3c6IHNoYWRvd0J1aWxkZXIoNCwgdGhlbWUuc25hY2tCYXIucm9vdC5iYWNrZ3JvdW5kIGFzIHN0cmluZyksXG4gICAgICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSAxNnB4KScsXG4gICAgICAgICAgICBtaW5XaWR0aDogJ2NhbGMoMTAwJSAtIDE2cHgpJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLi4udGhlbWUuc25hY2tCYXIucm9vdCxcbiAgICAgICAgfSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSksXG4gICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBTbmFja0Jhci5ocDoke2hvcml6b250YWxQb3NpdGlvbn0udnA6JHt2ZXJ0aWNhbFBvc2l0aW9ufWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBfX3N0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86ICdhdXRvJyxcbiAgICAgICAgICAgIGxlZnQ/OiAwLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ/OiAnYXV0bycsXG4gICAgICAgICAgICByaWdodD86IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm0/OiBzdHJpbmcsXG4gICAgICAgICAgICB0b3A/OiBudW1iZXJcbiAgICAgICAgICAgIGJvdHRvbT86IG51bWJlclxuICAgICAgICAgIH0gPSB7IH07XG4gICAgICAgICAgaWYgKHZlcnRpY2FsUG9zaXRpb24gPT09IFlQb3NpdGlvbi5hYm92ZSkge1xuICAgICAgICAgICAgX19zdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTE4MCUpJztcbiAgICAgICAgICAgIF9fc3R5bGVzLnRvcCA9IDA7XG4gICAgICAgICAgfSBpZiAodmVydGljYWxQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmJlbG93KSB7XG4gICAgICAgICAgICBfX3N0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgxODAlKSc7XG4gICAgICAgICAgICBfX3N0eWxlcy5ib3R0b20gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaG9yaXpvbnRhbFBvc2l0aW9uID09PSAnY2VudGVyJykge1xuICAgICAgICAgICAgX19zdHlsZXMubWFyZ2luUmlnaHQgPSBfX3N0eWxlcy5tYXJnaW5MZWZ0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgX19zdHlsZXMubGVmdCA9IF9fc3R5bGVzLnJpZ2h0ID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX19zdHlsZXNbdGhlbWUuZ2V0RGlyZWN0aW9uKGhvcml6b250YWxQb3NpdGlvbiBhcyBhbnkpXSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfX3N0eWxlcztcbiAgICAgICAgfSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKVxuICAgICAgXVxuICAgIH0pO1xuXG4gICAgdGhpcy5fdGhlbWUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdTbmFja0JhcjpvcGVuJywgKHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgICAgIH0pLCBzbmFja0Jhci5jb250YWluZXJFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNiciA9IG5ldyBMeVNuYWNrQmFyUmVmKHRoaXMuX3NuYWNrQmFyU2VydmljZSwgc25hY2tCYXIsIHRoaXMuYWZ0ZXJEaXNtaXNzZWQsIGR1cmF0aW9uLCB0aGlzLl90aGVtZSk7XG4gICAgdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXIgPSBzYnI7XG4gICAgcmV0dXJuIHNicjtcbiAgfVxuXG4gIC8qKiBEaXNtaXNzIHNuYWNrQmFyICovXG4gIGRpc21pc3MoKSB7XG4gICAgY29uc3Qgc2JyID0gdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXI7XG4gICAgaWYgKHNicikge1xuICAgICAgc2JyLmRpc21pc3NXaXRoQWN0aW9uKCk7XG4gICAgfVxuICB9XG59XG4iXX0=