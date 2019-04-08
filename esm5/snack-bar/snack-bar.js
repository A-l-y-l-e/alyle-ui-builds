import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { LyTheme2, LyOverlay, XPosition, YPosition } from '@alyle/ui';
import { LySnackBarService } from './snack-bar.service';
import { LySnackBarRef } from './snack-bar-ref';
var STYLE_PRIORITY = -2;
var DEFAULT_HORIZONTAL_POSITION = XPosition.after;
var DEFAULT_VERTICAL_POSITION = YPosition.below;
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
            _a['&'] = theme.snackBar ? theme.snackBar.root : null,
            _a)
    });
};
var LySnackBar = /** @class */ (function () {
    function LySnackBar(_templateRef, _theme, _overlay, _snackBarService) {
        this._templateRef = _templateRef;
        this._theme = _theme;
        this._overlay = _overlay;
        this._snackBarService = _snackBarService;
        this.classes = this._theme.addStyleSheet(STYLES);
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
                this._theme.addStyle("SnackBar.hp:" + horizontalPosition + ".vp:" + verticalPosition, function (theme) {
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
                        __styles[theme.getDirection(horizontalPosition)] = 0;
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LySnackBar.prototype, "duration", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], LySnackBar.prototype, "horizontalPosition", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], LySnackBar.prototype, "verticalPosition", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], LySnackBar.prototype, "afterDismissed", void 0);
    LySnackBar = tslib_1.__decorate([
        Directive({
            selector: 'ng-template[ly-snack-bar]',
            exportAs: 'lySnackBar'
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef,
            LyTheme2,
            LyOverlay,
            LySnackBarService])
    ], LySnackBar);
    return LySnackBar;
}());
export { LySnackBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3NuYWNrLWJhci8iLCJzb3VyY2VzIjpbInNuYWNrLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQWtCLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWhELElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFCLElBQU0sMkJBQTJCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUNwRCxJQUFNLHlCQUF5QixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDbEQsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBcUI7O0lBQUssT0FBQSxDQUFDO1FBQ2hELFNBQVMsRUFBRSxjQUFjO1FBQ3pCLElBQUk7Z0JBQ0YsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBRSxNQUFNO2dCQUNmLGNBQWMsRUFBRSxlQUFlO2dCQUMvQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLFVBQVUsRUFBRSxhQUFXLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsMEJBQXFCLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksV0FBUTtn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WUFDTixTQUFTO1lBQ0QsaUJBQWlCO09BWGxDLFVBQVUsQ0FzRnRCO0lBQUQsaUJBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQXRGWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBMeU92ZXJsYXksIFRoZW1lVmFyaWFibGVzLCBYUG9zaXRpb24sIFlQb3NpdGlvbiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVNuYWNrQmFyU2VydmljZSB9IGZyb20gJy4vc25hY2stYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTHlTbmFja0JhclJlZiB9IGZyb20gJy4vc25hY2stYmFyLXJlZic7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBERUZBVUxUX0hPUklaT05UQUxfUE9TSVRJT04gPSBYUG9zaXRpb24uYWZ0ZXI7XG5jb25zdCBERUZBVUxUX1ZFUlRJQ0FMX1BPU0lUSU9OID0gWVBvc2l0aW9uLmJlbG93O1xuZXhwb3J0IGNvbnN0IFNUWUxFUyA9ICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICRwcmlvcml0eTogU1RZTEVfUFJJT1JJVFksXG4gIHJvb3Q6IHtcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpbjogJzhweCcsXG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgbWluSGVpZ2h0OiAnNDhweCcsXG4gICAgbWluV2lkdGg6ICczMjBweCcsXG4gICAgbWF4V2lkdGg6ICczMjBweCcsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfSAzNTBtcywgdHJhbnNmb3JtICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuZGVjZWxlcmF0aW9ufSAzNTBtc2AsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZSksXG4gICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSAxNnB4KScsXG4gICAgICBtaW5XaWR0aDogJ2NhbGMoMTAwJSAtIDE2cHgpJ1xuICAgIH0sXG4gICAgJyYnOiB0aGVtZS5zbmFja0JhciA/IHRoZW1lLnNuYWNrQmFyIS5yb290IDogbnVsbFxuICB9XG59KTtcblxuLyoqIEV2ZW50IHRoYXQgaXMgZW1pdHRlZCB3aGVuIGEgc25hY2sgYmFyIGlzIGRpc21pc3NlZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTHlTbmFja0JhckRpc21pc3Mge1xuICAvKiogV2hldGhlciB0aGUgc25hY2sgYmFyIHdhcyBkaXNtaXNzZWQgdXNpbmcgdGhlIGFjdGlvbiBmbi4gKi9cbiAgZGlzbWlzc2VkQnlBY3Rpb246IGJvb2xlYW47XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2x5LXNuYWNrLWJhcl0nLFxuICBleHBvcnRBczogJ2x5U25hY2tCYXInXG59KVxuZXhwb3J0IGNsYXNzIEx5U25hY2tCYXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUyk7XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXIgfCAnSW5maW5pdHknO1xuICBASW5wdXQoKSBob3Jpem9udGFsUG9zaXRpb246ICdjZW50ZXInIHwgWFBvc2l0aW9uO1xuICBASW5wdXQoKSB2ZXJ0aWNhbFBvc2l0aW9uOiBZUG9zaXRpb247XG4gIEBPdXRwdXQoKSBhZnRlckRpc21pc3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8THlTbmFja0JhckRpc21pc3M+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9vdmVybGF5OiBMeU92ZXJsYXksXG4gICAgcHJpdmF0ZSBfc25hY2tCYXJTZXJ2aWNlOiBMeVNuYWNrQmFyU2VydmljZVxuICApIHsgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGlzbWlzcygpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICAvLyBjbG9zZSBwcmV2aW91cyBzbmFja0JhciBpZiBleGlzdFxuICAgIGNvbnN0IHNiclByZXYgPSB0aGlzLl9zbmFja0JhclNlcnZpY2UuX2N1cnJlbnRTbmFja0JhcjtcbiAgICBpZiAoc2JyUHJldikge1xuICAgICAgc2JyUHJldi5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgIGNvbnN0IGhvcml6b250YWxQb3NpdGlvbiA9IHRoaXMuaG9yaXpvbnRhbFBvc2l0aW9uIHx8IERFRkFVTFRfSE9SSVpPTlRBTF9QT1NJVElPTjtcbiAgICBjb25zdCB2ZXJ0aWNhbFBvc2l0aW9uID0gdGhpcy52ZXJ0aWNhbFBvc2l0aW9uIHx8IERFRkFVTFRfVkVSVElDQUxfUE9TSVRJT047XG5cbiAgICBjb25zdCBzbmFja0JhciA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMuX3RlbXBsYXRlUmVmLCB1bmRlZmluZWQsIHtcbiAgICAgIHN0eWxlczoge1xuICAgICAgICAvLyB0aGlzIHJlbW92ZSBwcmV2aW91cyBzdHlsZVxuICAgICAgICBqdXN0aWZ5Q29udGVudDogbnVsbFxuICAgICAgfSxcbiAgICAgIGhhc0JhY2tkcm9wOiBmYWxzZSxcbiAgICAgIGNsYXNzZXM6IFtcbiAgICAgICAgdGhpcy5jbGFzc2VzLnJvb3QsXG4gICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKGBTbmFja0Jhci5ocDoke2hvcml6b250YWxQb3NpdGlvbn0udnA6JHt2ZXJ0aWNhbFBvc2l0aW9ufWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBfX3N0eWxlczoge1xuICAgICAgICAgICAgbWFyZ2luTGVmdD86ICdhdXRvJ1xuICAgICAgICAgICAgbGVmdD86IDBcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PzogJ2F1dG8nXG4gICAgICAgICAgICByaWdodD86IDBcbiAgICAgICAgICAgIHRyYW5zZm9ybT86IHN0cmluZ1xuICAgICAgICAgICAgdG9wPzogbnVtYmVyXG4gICAgICAgICAgICBib3R0b20/OiBudW1iZXJcbiAgICAgICAgICB9ID0geyB9O1xuICAgICAgICAgIGlmICh2ZXJ0aWNhbFBvc2l0aW9uID09PSBZUG9zaXRpb24uYWJvdmUpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0xODAlKSc7XG4gICAgICAgICAgICBfX3N0eWxlcy50b3AgPSAwO1xuICAgICAgICAgIH0gaWYgKHZlcnRpY2FsUG9zaXRpb24gPT09IFlQb3NpdGlvbi5iZWxvdykge1xuICAgICAgICAgICAgX19zdHlsZXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMTgwJSknO1xuICAgICAgICAgICAgX19zdHlsZXMuYm90dG9tID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICAgIF9fc3R5bGVzLm1hcmdpblJpZ2h0ID0gX19zdHlsZXMubWFyZ2luTGVmdCA9ICdhdXRvJztcbiAgICAgICAgICAgIF9fc3R5bGVzLmxlZnQgPSBfX3N0eWxlcy5yaWdodCA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9fc3R5bGVzW3RoZW1lLmdldERpcmVjdGlvbihob3Jpem9udGFsUG9zaXRpb24gYXMgYW55KV0gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX19zdHlsZXM7XG4gICAgICAgIH0sIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSlcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIHRoaXMuX3RoZW1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnU25hY2tCYXI6b3BlbicsICh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gICAgICB9KSwgc25hY2tCYXIuY29udGFpbmVyRWxlbWVudCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzbmFja0Jhci5jb250YWluZXJFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdvcGFjaXR5Jyk7XG5cbiAgICBjb25zdCBzYnIgPSBuZXcgTHlTbmFja0JhclJlZih0aGlzLl9zbmFja0JhclNlcnZpY2UsIHNuYWNrQmFyLCB0aGlzLmFmdGVyRGlzbWlzc2VkLCBkdXJhdGlvbiwgdGhpcy5fdGhlbWUpO1xuICAgIHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyID0gc2JyO1xuICAgIHJldHVybiBzYnI7XG4gIH1cblxuICAvKiogRGlzbWlzcyBzbmFja0JhciAqL1xuICBkaXNtaXNzKCkge1xuICAgIGNvbnN0IHNiciA9IHRoaXMuX3NuYWNrQmFyU2VydmljZS5fY3VycmVudFNuYWNrQmFyO1xuICAgIGlmIChzYnIpIHtcbiAgICAgIHNici5kaXNtaXNzV2l0aEFjdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl19