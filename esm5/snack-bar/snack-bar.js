import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { LyTheme2, LyOverlay, ThemeVariables, XPosition, YPosition, st2c, StyleTemplate, StyleCollection } from '@alyle/ui';
import { LySnackBarService } from './snack-bar.service';
import { LySnackBarRef } from './snack-bar-ref';
var STYLE_PRIORITY = -2;
var DEFAULT_HORIZONTAL_POSITION = XPosition.after;
var DEFAULT_VERTICAL_POSITION = YPosition.below;
export var STYLES = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: function (className) { return className + "{border-radius:4px;display:flex;justify-content:space-between;align-items:center;margin:8px;padding:0 16px;min-height:48px;min-width:320px;max-width:320px;opacity:0;transition:opacity " + theme.animations.curves.standard + " 350ms, transform " + theme.animations.curves.deceleration + " 350ms;font-size:" + theme.pxToRem(theme.typography.fontSize) + ";box-sizing:border-box;}" + st2c(((theme.snackBar
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NuYWNrLWJhci8iLCJzb3VyY2VzIjpbInNuYWNrLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGNBQWMsRUFDZCxTQUFTLEVBQ1QsU0FBUyxFQUNULElBQUksRUFDSixhQUFhLEVBQ2IsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVloRCxJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMxQixJQUFNLDJCQUEyQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDcEQsSUFBTSx5QkFBeUIsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQ2xELE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQTJDLElBQUssT0FBQSxDQUFDO0lBQ3RFLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLElBQUksRUFBRSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLGdNQUEyTCxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLDBCQUFxQixLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLHlCQUFvQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGdDQUEyQixJQUFJLENBQUMsQ0FDblosQ0FBQyxLQUFLLENBQUMsUUFBUTtXQUNWLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsS0FB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U0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDO09BQ1csVUFBVSxDQXVGdEI7SUFBRCxpQkFBQztDQUFBLEFBdkZELElBdUZDO1NBdkZZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTHlUaGVtZTIsXG4gIEx5T3ZlcmxheSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFhQb3NpdGlvbixcbiAgWVBvc2l0aW9uLFxuICBzdDJjLFxuICBTdHlsZVRlbXBsYXRlLFxuICBTdHlsZUNvbGxlY3Rpb24gfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IEx5U25hY2tCYXJSZWYgfSBmcm9tICcuL3NuYWNrLWJhci1yZWYnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5U25hY2tCYXJUaGVtZSB7XG4gIC8qKiBTdHlsZXMgZm9yIFNuYWNrQmFyIENvbXBvbmVudCAqL1xuICByb290PzogU3R5bGVUZW1wbGF0ZSB8IFN0eWxlQ29sbGVjdGlvbjtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEx5U25hY2tCYXJWYXJpYWJsZXMge1xuICBzbmFja0Jhcj86IEx5U25hY2tCYXJUaGVtZTtcbn1cblxuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IERFRkFVTFRfSE9SSVpPTlRBTF9QT1NJVElPTiA9IFhQb3NpdGlvbi5hZnRlcjtcbmNvbnN0IERFRkFVTFRfVkVSVElDQUxfUE9TSVRJT04gPSBZUG9zaXRpb24uYmVsb3c7XG5leHBvcnQgY29uc3QgU1RZTEVTID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyAmIEx5U25hY2tCYXJWYXJpYWJsZXMpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gIHJvb3Q6IChjbGFzc05hbWU6IHN0cmluZykgPT4gYCR7Y2xhc3NOYW1lfXtib3JkZXItcmFkaXVzOjRweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjo4cHg7cGFkZGluZzowIDE2cHg7bWluLWhlaWdodDo0OHB4O21pbi13aWR0aDozMjBweDttYXgtd2lkdGg6MzIwcHg7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfSAzNTBtcywgdHJhbnNmb3JtICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAzNTBtcztmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuZm9udFNpemUpfTtib3gtc2l6aW5nOmJvcmRlci1ib3g7fSR7c3QyYygoXG4gICAgICAgICh0aGVtZS5zbmFja0JhclxuICAgICAgICAgICYmIHRoZW1lLnNuYWNrQmFyLnJvb3QpIHx8IG51bGwpLCBgJHtjbGFzc05hbWV9YCl9JHtjbGFzc05hbWV9ICR7dGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyl9e3dpZHRoOmNhbGMoMTAwJSAtIDE2cHgpO21pbi13aWR0aDpjYWxjKDEwMCUgLSAxNnB4KTt9YFxufSk7XG5cbi8qKiBFdmVudCB0aGF0IGlzIGVtaXR0ZWQgd2hlbiBhIHNuYWNrIGJhciBpcyBkaXNtaXNzZWQuICovXG5leHBvcnQgaW50ZXJmYWNlIEx5U25hY2tCYXJEaXNtaXNzIHtcbiAgLyoqIFdoZXRoZXIgdGhlIHNuYWNrIGJhciB3YXMgZGlzbWlzc2VkIHVzaW5nIHRoZSBhY3Rpb24gZm4uICovXG4gIGRpc21pc3NlZEJ5QWN0aW9uOiBib29sZWFuO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtseS1zbmFjay1iYXJdJyxcbiAgZXhwb3J0QXM6ICdseVNuYWNrQmFyJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVNuYWNrQmFyIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUucmVuZGVyU3R5bGVTaGVldChTVFlMRVMpO1xuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyIHwgJ0luZmluaXR5JztcbiAgQElucHV0KCkgaG9yaXpvbnRhbFBvc2l0aW9uOiAnY2VudGVyJyB8IFhQb3NpdGlvbjtcbiAgQElucHV0KCkgdmVydGljYWxQb3NpdGlvbjogWVBvc2l0aW9uO1xuICBAT3V0cHV0KCkgYWZ0ZXJEaXNtaXNzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEx5U25hY2tCYXJEaXNtaXNzPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX3NuYWNrQmFyU2VydmljZTogTHlTbmFja0JhclNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRpc21pc3MoKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgLy8gY2xvc2UgcHJldmlvdXMgc25hY2tCYXIgaWYgZXhpc3RcbiAgICBjb25zdCBzYnJQcmV2ID0gdGhpcy5fc25hY2tCYXJTZXJ2aWNlLl9jdXJyZW50U25hY2tCYXI7XG4gICAgaWYgKHNiclByZXYpIHtcbiAgICAgIHNiclByZXYuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbjtcbiAgICBjb25zdCBob3Jpem9udGFsUG9zaXRpb24gPSB0aGlzLmhvcml6b250YWxQb3NpdGlvbiB8fCBERUZBVUxUX0hPUklaT05UQUxfUE9TSVRJT047XG4gICAgY29uc3QgdmVydGljYWxQb3NpdGlvbiA9IHRoaXMudmVydGljYWxQb3NpdGlvbiB8fCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OO1xuXG4gICAgY29uc3Qgc25hY2tCYXIgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLl90ZW1wbGF0ZVJlZiwgdW5kZWZpbmVkLCB7XG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgLy8gdGhpcyByZW1vdmUgcHJldmlvdXMgc3R5bGVcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IG51bGxcbiAgICAgIH0sXG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICBjbGFzc2VzOiBbXG4gICAgICAgIHRoaXMuY2xhc3Nlcy5yb290LFxuICAgICAgICB0aGlzLl90aGVtZS5yZW5kZXJTdHlsZShgU25hY2tCYXIuaHA6JHtob3Jpem9udGFsUG9zaXRpb259LnZwOiR7dmVydGljYWxQb3NpdGlvbn1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiB7XG4gICAgICAgICAgbGV0IG1hcmdpbkxlZnQ6ICdhdXRvJyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBsZXQgbGVmdDogMCB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBsZXQgbWFyZ2luUmlnaHQ6ICdhdXRvJyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBsZXQgcmlnaHQ6IDAgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgbGV0IHRyYW5zZm9ybTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGxldCB0b3A6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBsZXQgYm90dG9tOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgbGV0IGhwOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAodmVydGljYWxQb3NpdGlvbiA9PT0gWVBvc2l0aW9uLmFib3ZlKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTgwJSknO1xuICAgICAgICAgICAgdG9wID0gMDtcbiAgICAgICAgICB9IGlmICh2ZXJ0aWNhbFBvc2l0aW9uID09PSBZUG9zaXRpb24uYmVsb3cpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDE4MCUpJztcbiAgICAgICAgICAgIGJvdHRvbSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChob3Jpem9udGFsUG9zaXRpb24gPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBtYXJnaW5SaWdodCA9IG1hcmdpbkxlZnQgPSAnYXV0byc7XG4gICAgICAgICAgICBsZWZ0ID0gcmlnaHQgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBocCA9IHRoZW1lLmdldERpcmVjdGlvbihob3Jpem9udGFsUG9zaXRpb24gYXMgYW55KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBgJHtjbGFzc05hbWV9e21hcmdpbi1sZWZ0OiR7bWFyZ2luTGVmdH07bGVmdDoke2xlZnR9O21hcmdpbi1yaWdodDoke21hcmdpblJpZ2h0fTtyaWdodDoke3JpZ2h0fTt0cmFuc2Zvcm06JHt0cmFuc2Zvcm19O3RvcDoke3RvcH07Ym90dG9tOiR7Ym90dG9tfTske2hwfTowO31gO1xuICAgICAgICB9LCBTVFlMRV9QUklPUklUWSlcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIHRoaXMuX3RoZW1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX3RoZW1lLnJlbmRlclN0eWxlKCdTbmFja0JhcjpvcGVuJywgKCkgPT4gKFxuICAgICAgICAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO31gXG4gICAgICApLCBTVFlMRV9QUklPUklUWSk7XG4gICAgICBzbmFja0Jhci5jb250YWluZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoc25hY2tCYXIuY29udGFpbmVyRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnb3BhY2l0eScpO1xuXG4gICAgY29uc3Qgc2JyID0gbmV3IEx5U25hY2tCYXJSZWYodGhpcy5fc25hY2tCYXJTZXJ2aWNlLCBzbmFja0JhciwgdGhpcy5hZnRlckRpc21pc3NlZCwgZHVyYXRpb24sIHRoaXMuX3RoZW1lKTtcbiAgICB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhciA9IHNicjtcbiAgICByZXR1cm4gc2JyO1xuICB9XG5cbiAgLyoqIERpc21pc3Mgc25hY2tCYXIgKi9cbiAgZGlzbWlzcygpIHtcbiAgICBjb25zdCBzYnIgPSB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhcjtcbiAgICBpZiAoc2JyKSB7XG4gICAgICBzYnIuZGlzbWlzc1dpdGhBY3Rpb24oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==