/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { LyTheme2, LyOverlay, XPosition, YPosition } from '@alyle/ui';
import { LySnackBarService } from './snack-bar.service';
import { LySnackBarRef } from './snack-bar-ref';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var DEFAULT_HORIZONTAL_POSITION = XPosition.after;
/** @type {?} */
var DEFAULT_VERTICAL_POSITION = YPosition.below;
/** @type {?} */
export var STYLES = function (theme) {
    var _a;
    return ({
        $priority: STYLE_PRIORITY,
        root: (_a = {
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '8px',
                padding: '0 16px',
                minHeight: '48px',
                minWidth: '320px',
                maxWidth: '320px',
                opacity: 0,
                transition: "opacity " + theme.animations.curves.standard + " 350ms, transform " + theme.animations.curves.deceleration + " 350ms",
                fontSize: theme.pxToRem(theme.typography.fontSize)
            },
            _a[theme.getBreakpoint('XSmall')] = {
                width: 'calc(100% - 16px)',
                minWidth: 'calc(100% - 16px)'
            },
            _a['&'] = theme.snackBar ? (/** @type {?} */ (theme.snackBar)).root : null,
            _a)
    });
};
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
        this.classes = this._theme.addStyleSheet(STYLES);
        this.afterDismissed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    LySnackBar.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dismiss();
    };
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
            hasBackdrop: false,
            classes: [
                this.classes.root,
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
        window.getComputedStyle(snackBar.containerElement).getPropertyValue('opacity');
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
    LySnackBar.prototype.classes;
    /** @type {?} */
    LySnackBar.prototype.duration;
    /** @type {?} */
    LySnackBar.prototype.horizontalPosition;
    /** @type {?} */
    LySnackBar.prototype.verticalPosition;
    /** @type {?} */
    LySnackBar.prototype.afterDismissed;
    /**
     * @type {?}
     * @private
     */
    LySnackBar.prototype._templateRef;
    /**
     * @type {?}
     * @private
     */
    LySnackBar.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LySnackBar.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    LySnackBar.prototype._snackBarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NuYWNrLWJhci8iLCJzb3VyY2VzIjpbInNuYWNrLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWtCLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUUxQyxjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUNuQiwyQkFBMkIsR0FBRyxTQUFTLENBQUMsS0FBSzs7SUFDN0MseUJBQXlCLEdBQUcsU0FBUyxDQUFDLEtBQUs7O0FBQ2pELE1BQU0sS0FBTyxNQUFNLEdBQUcsVUFBQyxLQUFxQjs7SUFBSyxPQUFBLENBQUM7UUFDaEQsU0FBUyxFQUFFLGNBQWM7UUFDekIsSUFBSTtnQkFDRixZQUFZLEVBQUUsS0FBSztnQkFDbkIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsY0FBYyxFQUFFLGVBQWU7Z0JBQy9CLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsUUFBUTtnQkFDakIsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsT0FBTztnQkFDakIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsVUFBVSxFQUFFLGFBQVcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSwwQkFBcUIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxXQUFRO2dCQUN4SCxRQUFRLEVBQUUsS0FBSyxDQUFDLE9B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Q0FBaUU7Ozs7O0lBRS9ELGtDQUFzQzs7Ozs7SUFDdEMsNEJBQXdCOzs7OztJQUN4Qiw4QkFBMkI7Ozs7O0lBQzNCLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgTHlPdmVybGF5LCBUaGVtZVZhcmlhYmxlcywgWFBvc2l0aW9uLCBZUG9zaXRpb24gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEx5U25hY2tCYXJSZWYgfSBmcm9tICcuL3NuYWNrLWJhci1yZWYnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgREVGQVVMVF9IT1JJWk9OVEFMX1BPU0lUSU9OID0gWFBvc2l0aW9uLmFmdGVyO1xuY29uc3QgREVGQVVMVF9WRVJUSUNBTF9QT1NJVElPTiA9IFlQb3NpdGlvbi5iZWxvdztcbmV4cG9ydCBjb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICByb290OiB7XG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW46ICc4cHgnLFxuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIG1pbkhlaWdodDogJzQ4cHgnLFxuICAgIG1pbldpZHRoOiAnMzIwcHgnLFxuICAgIG1heFdpZHRoOiAnMzIwcHgnLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH0gMzUwbXMsIHRyYW5zZm9ybSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gMzUwbXNgLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUpLFxuICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gMTZweCknLFxuICAgICAgbWluV2lkdGg6ICdjYWxjKDEwMCUgLSAxNnB4KSdcbiAgICB9LFxuICAgICcmJzogdGhlbWUuc25hY2tCYXIgPyB0aGVtZS5zbmFja0JhciEucm9vdCA6IG51bGxcbiAgfVxufSk7XG5cbi8qKiBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiBhIHNuYWNrIGJhciBpcyBkaXNtaXNzZWQuICovXG5leHBvcnQgaW50ZXJmYWNlIEx5U25hY2tCYXJEaXNtaXNzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIHNuYWNrIGJhciB3YXMgZGlzbWlzc2VkIHVzaW5nIHRoZSBhY3Rpb24gZm4uICovXG4gIGRpc21pc3NlZEJ5QWN0aW9uOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtseS1zbmFjay1iYXJdJyxcbiAgZXhwb3J0QXM6ICdseVNuYWNrQmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMpO1xuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyIHwgJ0luZmluaXR5JztcbiAgQElucHV0KCkgaG9yaXpvbnRhbFBvc2l0aW9uOiAnY2VudGVyJyB8IFhQb3NpdGlvbjtcbiAgQElucHV0KCkgdmVydGljYWxQb3NpdGlvbjogWVBvc2l0aW9uO1xuICBAT3V0cHV0KCkgYWZ0ZXJEaXNtaXNzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEx5U25hY2tCYXJEaXNtaXNzPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX3NuYWNrQmFyU2VydmljZTogTHlTbmFja0JhclNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRpc21pc3MoKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgLy8gY2xvc2UgcHJldmlvdXMgc25hY2tCYXIgaWYgZXhpc3RcbiAgICBjb25zdCBzYnJQcmV2ID0gdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXI7XG4gICAgaWYgKHNiclByZXYpIHtcbiAgICAgIHNiclByZXYuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICBjb25zdCBob3Jpem9udGFsUG9zaXRpb24gPSB0aGlzLmhvcml6b250YWxQb3NpdGlvbiB8fCBERUZBVUxUX0hPUklaT05UQUxfUE9TSVRJT047XG4gICAgY29uc3QgdmVydGljYWxQb3NpdGlvbiA9IHRoaXMudmVydGljYWxQb3NpdGlvbiB8fCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OO1xuXG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLl90ZW1wbGF0ZVJlZiwgdW5kZWZpbmVkLCB7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgLy8gdGhpcyByZW1vdmUgcHJldmlvdXMgc3R5bGVcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IG51bGxcbiAgICAgIH0sXG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICBjbGFzc2VzOiBbXG4gICAgICAgIHRoaXMuY2xhc3Nlcy5yb290LFxuICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZShgU25hY2tCYXIuaHA6JHtob3Jpem9udGFsUG9zaXRpb259LnZwOiR7dmVydGljYWxQb3NpdGlvbn1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgX19zdHlsZXM6IHtcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ/OiAnYXV0bydcbiAgICAgICAgICAgIGxlZnQ/OiAwXG4gICAgICAgICAgICBtYXJnaW5SaWdodD86ICdhdXRvJ1xuICAgICAgICAgICAgcmlnaHQ/OiAwXG4gICAgICAgICAgICB0cmFuc2Zvcm0/OiBzdHJpbmdcbiAgICAgICAgICAgIHRvcD86IG51bWJlclxuICAgICAgICAgICAgYm90dG9tPzogbnVtYmVyXG4gICAgICAgICAgfSA9IHsgfTtcbiAgICAgICAgICBpZiAodmVydGljYWxQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgICAgICBfX3N0eWxlcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTgwJSknO1xuICAgICAgICAgICAgX19zdHlsZXMudG9wID0gMDtcbiAgICAgICAgICB9IGlmICh2ZXJ0aWNhbFBvc2l0aW9uID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDE4MCUpJztcbiAgICAgICAgICAgIF9fc3R5bGVzLmJvdHRvbSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChob3Jpem9udGFsUG9zaXRpb24gPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBfX3N0eWxlcy5tYXJnaW5SaWdodCA9IF9fc3R5bGVzLm1hcmdpbkxlZnQgPSAnYXV0byc7XG4gICAgICAgICAgICBfX3N0eWxlcy5sZWZ0ID0gX19zdHlsZXMucmlnaHQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfX3N0eWxlc1t0aGVtZS5nZXREaXJlY3Rpb24oaG9yaXpvbnRhbFBvc2l0aW9uIGFzIGFueSldID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9fc3R5bGVzO1xuICAgICAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpXG4gICAgICBdXG4gICAgfSk7XG5cbiAgICB0aGlzLl90aGVtZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ1NuYWNrQmFyOm9wZW4nLCAoe1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICAgICAgfSksIHNuYWNrQmFyLmNvbnRhaW5lckVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc25hY2tCYXIuY29udGFpbmVyRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnb3BhY2l0eScpO1xuXG4gICAgY29uc3Qgc2JyID0gbmV3IEx5U25hY2tCYXJSZWYodGhpcy5fc25hY2tCYXJTZXJ2aWNlLCBzbmFja0JhciwgdGhpcy5hZnRlckRpc21pc3NlZCwgZHVyYXRpb24sIHRoaXMuX3RoZW1lKTtcbiAgICB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhciA9IHNicjtcbiAgICByZXR1cm4gc2JyO1xuICB9XG5cbiAgLyoqIERpc21pc3Mgc25hY2tCYXIgKi9cbiAgZGlzbWlzcygpIHtcbiAgICBjb25zdCBzYnIgPSB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhcjtcbiAgICBpZiAoc2JyKSB7XG4gICAgICBzYnIuZGlzbWlzc1dpdGhBY3Rpb24oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==