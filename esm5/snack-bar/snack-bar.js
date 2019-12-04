import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { LyTheme2, LyOverlay, ThemeVariables, XPosition, YPosition, styleTemplateToString, StyleTemplate, StyleCollection } from '@alyle/ui';
import { LySnackBarService } from './snack-bar.service';
import { LySnackBarRef } from './snack-bar-ref';
var STYLE_PRIORITY = -2;
var DEFAULT_HORIZONTAL_POSITION = XPosition.after;
var DEFAULT_VERTICAL_POSITION = YPosition.below;
export var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: function (className) { return className + "{border-radius:4px;display:flex;justify-content:space-between;align-items:center;margin:8px;padding:0 16px;min-height:48px;min-width:320px;max-width:320px;opacity:0;transition:opacity " + theme.animations.curves.standard + " 350ms, transform " + theme.animations.curves.deceleration + " 350ms;font-size:" + theme.pxToRem(theme.typography.fontSize) + ";box-sizing:border-box;}" + styleTemplateToString(((theme.snackBar
        && theme.snackBar.root) || null), "" + className) + className + " " + theme.getBreakpoint('XSmall') + "{width:calc(100% - 16px);min-width:calc(100% - 16px);}"; }
}); };
var LySnackBar = /** @class */ (function () {
    function LySnackBar(_templateRef, _theme, _overlay, _snackBarService) {
        this._templateRef = _templateRef;
        this._theme = _theme;
        this._overlay = _overlay;
        this._snackBarService = _snackBarService;
        this.classes = this._theme.renderStyleSheet(STYLES);
        this.afterDismissed = new EventEmitter();
    }
    LySnackBar.prototype.ngOnDestroy = function () {
        this.dismiss();
    };
    LySnackBar.prototype.open = function () {
        var _this = this;
        // close previous snackBar if exist
        var sbrPrev = this._snackBarService._currentSnackBar;
        if (sbrPrev) {
            sbrPrev.dismiss();
        }
        var duration = this.duration;
        var horizontalPosition = this.horizontalPosition || DEFAULT_HORIZONTAL_POSITION;
        var verticalPosition = this.verticalPosition || DEFAULT_VERTICAL_POSITION;
        var snackBar = this._overlay.create(this._templateRef, undefined, {
            styles: {
                // this remove previous style
                justifyContent: null
            },
            hasBackdrop: false,
            classes: [
                this.classes.root,
                this._theme.renderStyle("SnackBar.hp:" + horizontalPosition + ".vp:" + verticalPosition, function (theme) {
                    var marginLeft;
                    var left;
                    var marginRight;
                    var right;
                    var transform;
                    var top;
                    var bottom;
                    var hp;
                    if (verticalPosition === YPosition.above) {
                        transform = 'translateY(-180%)';
                        top = 0;
                    }
                    if (verticalPosition === YPosition.below) {
                        transform = 'translateY(180%)';
                        bottom = 0;
                    }
                    if (horizontalPosition === 'center') {
                        marginRight = marginLeft = 'auto';
                        left = right = 0;
                    }
                    else {
                        hp = theme.getDirection(horizontalPosition);
                    }
                    return function (className) { return className + "{margin-left:" + marginLeft + ";left:" + left + ";margin-right:" + marginRight + ";right:" + right + ";transform:" + transform + ";top:" + top + ";bottom:" + bottom + ";" + hp + ":0;}"; };
                }, STYLE_PRIORITY)
            ]
        });
        this._theme.requestAnimationFrame(function () {
            var newClass = _this._theme.renderStyle('SnackBar:open', function () { return (function (className) { return className + "{opacity:1;transform:translateY(0);}"; }); }, STYLE_PRIORITY);
            snackBar.containerElement.classList.add(newClass);
        });
        window.getComputedStyle(snackBar.containerElement).getPropertyValue('opacity');
        var sbr = new LySnackBarRef(this._snackBarService, snackBar, this.afterDismissed, duration, this._theme);
        this._snackBarService._currentSnackBar = sbr;
        return sbr;
    };
    /** Dismiss snackBar */
    LySnackBar.prototype.dismiss = function () {
        var sbr = this._snackBarService._currentSnackBar;
        if (sbr) {
            sbr.dismissWithAction();
        }
    };
    LySnackBar.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: LyTheme2 },
        { type: LyOverlay },
        { type: LySnackBarService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LySnackBar.prototype, "duration", void 0);
    tslib_1.__decorate([
        Input()
    ], LySnackBar.prototype, "horizontalPosition", void 0);
    tslib_1.__decorate([
        Input()
    ], LySnackBar.prototype, "verticalPosition", void 0);
    tslib_1.__decorate([
        Output()
    ], LySnackBar.prototype, "afterDismissed", void 0);
    LySnackBar = tslib_1.__decorate([
        Directive({
            selector: 'ng-template[ly-snack-bar]',
            exportAs: 'lySnackBar'
        })
    ], LySnackBar);
    return LySnackBar;
}());
export { LySnackBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NuYWNrLWJhci8iLCJzb3VyY2VzIjpbInNuYWNrLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsRUFDZCxTQUFTLEVBQ1QsU0FBUyxFQUNULHFCQUFxQixFQUNyQixhQUFhLEVBQ2IsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVloRCxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFNLDJCQUEyQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDcEQsSUFBTSx5QkFBeUIsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQ2xELE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQTJDLElBQUssT0FBQSxDQUFDO0lBQ3RFLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLElBQUksRUFBRSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLGdNQUEyTCxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLDBCQUFxQixLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLHlCQUFvQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGdDQUEyQixxQkFBcUIsQ0FBQyxDQUNwYSxDQUFDLEtBQUssQ0FBQyxRQUFRO1dBQ1YsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFB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QUp0QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7T0FDVyxVQUFVLENBdUZ0QjtJQUFELGlCQUFDO0NBQUEsQUF2RkQsSUF1RkM7U0F2RlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMeVRoZW1lMixcbiAgTHlPdmVybGF5LFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIHN0eWxlVGVtcGxhdGVUb1N0cmluZyxcbiAgU3R5bGVUZW1wbGF0ZSxcbiAgU3R5bGVDb2xsZWN0aW9uIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5U25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zbmFjay1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyUmVmIH0gZnJvbSAnLi9zbmFjay1iYXItcmVmJztcblxuZXhwb3J0IGludGVyZmFjZSBMeVNuYWNrQmFyVGhlbWUge1xuICAvKiogU3R5bGVzIGZvciBTbmFja0JhciBDb21wb25lbnQgKi9cbiAgcm9vdD86IFN0eWxlVGVtcGxhdGUgfCBTdHlsZUNvbGxlY3Rpb247XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBMeVNuYWNrQmFyVmFyaWFibGVzIHtcbiAgc25hY2tCYXI/OiBMeVNuYWNrQmFyVGhlbWU7XG59XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0hPUklaT05UQUxfUE9TSVRJT04gPSBYUG9zaXRpb24uYWZ0ZXI7XG5jb25zdCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OID0gWVBvc2l0aW9uLmJlbG93O1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMgJiBMeVNuYWNrQmFyVmFyaWFibGVzKSA9PiAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICByb290OiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17Ym9yZGVyLXJhZGl1czo0cHg7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46OHB4O3BhZGRpbmc6MCAxNnB4O21pbi1oZWlnaHQ6NDhweDttaW4td2lkdGg6MzIwcHg7bWF4LXdpZHRoOjMyMHB4O29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH0gMzUwbXMsIHRyYW5zZm9ybSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLmRlY2VsZXJhdGlvbn0gMzUwbXM7Zm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmZvbnRTaXplKX07Ym94LXNpemluZzpib3JkZXItYm94O30ke3N0eWxlVGVtcGxhdGVUb1N0cmluZygoXG4gICAgICAgICh0aGVtZS5zbmFja0JhclxuICAgICAgICAgICYmIHRoZW1lLnNuYWNrQmFyLnJvb3QpIHx8IG51bGwpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9ICR7dGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyl9e3dpZHRoOmNhbGMoMTAwJSAtIDE2cHgpO21pbi13aWR0aDpjYWxjKDEwMCUgLSAxNnB4KTt9YFxufSk7XG5cbi8qKiBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiBhIHNuYWNrIGJhciBpcyBkaXNtaXNzZWQuICovXG5leHBvcnQgaW50ZXJmYWNlIEx5U25hY2tCYXJEaXNtaXNzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIHNuYWNrIGJhciB3YXMgZGlzbWlzc2VkIHVzaW5nIHRoZSBhY3Rpb24gZm4uICovXG4gIGRpc21pc3NlZEJ5QWN0aW9uOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtseS1zbmFjay1iYXJdJyxcbiAgZXhwb3J0QXM6ICdseVNuYWNrQmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyIHwgJ0luZmluaXR5JztcbiAgQElucHV0KCkgaG9yaXpvbnRhbFBvc2l0aW9uOiAnY2VudGVyJyB8IFhQb3NpdGlvbjtcbiAgQElucHV0KCkgdmVydGljYWxQb3NpdGlvbjogWVBvc2l0aW9uO1xuICBAT3V0cHV0KCkgYWZ0ZXJEaXNtaXNzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEx5U25hY2tCYXJEaXNtaXNzPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX3NuYWNrQmFyU2VydmljZTogTHlTbmFja0JhclNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRpc21pc3MoKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgLy8gY2xvc2UgcHJldmlvdXMgc25hY2tCYXIgaWYgZXhpc3RcbiAgICBjb25zdCBzYnJQcmV2ID0gdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXI7XG4gICAgaWYgKHNiclByZXYpIHtcbiAgICAgIHNiclByZXYuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICBjb25zdCBob3Jpem9udGFsUG9zaXRpb24gPSB0aGlzLmhvcml6b250YWxQb3NpdGlvbiB8fCBERUZBVUxUX0hPUklaT05UQUxfUE9TSVRJT047XG4gICAgY29uc3QgdmVydGljYWxQb3NpdGlvbiA9IHRoaXMudmVydGljYWxQb3NpdGlvbiB8fCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OO1xuXG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLl90ZW1wbGF0ZVJlZiwgdW5kZWZpbmVkLCB7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgLy8gdGhpcyByZW1vdmUgcHJldmlvdXMgc3R5bGVcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IG51bGxcbiAgICAgIH0sXG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICBjbGFzc2VzOiBbXG4gICAgICAgIHRoaXMuY2xhc3Nlcy5yb290LFxuICAgICAgICB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZShgU25hY2tCYXIuaHA6JHtob3Jpem9udGFsUG9zaXRpb259LnZwOiR7dmVydGljYWxQb3NpdGlvbn1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgbGV0IG1hcmdpbkxlZnQ6ICdhdXRvJyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBsZXQgbGVmdDogMCB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBsZXQgbWFyZ2luUmlnaHQ6ICdhdXRvJyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBsZXQgcmlnaHQ6IDAgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgbGV0IHRyYW5zZm9ybTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGxldCB0b3A6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBsZXQgYm90dG9tOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgbGV0IGhwOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAodmVydGljYWxQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTgwJSknO1xuICAgICAgICAgICAgdG9wID0gMDtcbiAgICAgICAgICB9IGlmICh2ZXJ0aWNhbFBvc2l0aW9uID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDE4MCUpJztcbiAgICAgICAgICAgIGJvdHRvbSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChob3Jpem9udGFsUG9zaXRpb24gPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBtYXJnaW5SaWdodCA9IG1hcmdpbkxlZnQgPSAnYXV0byc7XG4gICAgICAgICAgICBsZWZ0ID0gcmlnaHQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBocCA9IHRoZW1lLmdldERpcmVjdGlvbihob3Jpem9udGFsUG9zaXRpb24gYXMgYW55KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21hcmdpbi1sZWZ0OiR7bWFyZ2luTGVmdH07bGVmdDoke2xlZnR9O21hcmdpbi1yaWdodDoke21hcmdpblJpZ2h0fTtyaWdodDoke3JpZ2h0fTt0cmFuc2Zvcm06JHt0cmFuc2Zvcm19O3RvcDoke3RvcH07Ym90dG9tOiR7Ym90dG9tfTske2hwfTowO31gO1xuICAgICAgICB9LCBTVFlMRV9QUklPUklUWSlcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIHRoaXMuX3RoZW1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlKCdTbmFja0JhcjpvcGVuJywgKCkgPT4gKFxuICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO31gXG4gICAgICApLCBTVFlMRV9QUklPUklUWSk7XG4gICAgICBzbmFja0Jhci5jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc25hY2tCYXIuY29udGFpbmVyRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnb3BhY2l0eScpO1xuXG4gICAgY29uc3Qgc2JyID0gbmV3IEx5U25hY2tCYXJSZWYodGhpcy5fc25hY2tCYXJTZXJ2aWNlLCBzbmFja0JhciwgdGhpcy5hZnRlckRpc21pc3NlZCwgZHVyYXRpb24sIHRoaXMuX3RoZW1lKTtcbiAgICB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhciA9IHNicjtcbiAgICByZXR1cm4gc2JyO1xuICB9XG5cbiAgLyoqIERpc21pc3Mgc25hY2tCYXIgKi9cbiAgZGlzbWlzcygpIHtcbiAgICBjb25zdCBzYnIgPSB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhcjtcbiAgICBpZiAoc2JyKSB7XG4gICAgICBzYnIuZGlzbWlzc1dpdGhBY3Rpb24oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==