import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
var style = function (theme) { return ({
    display: 'block',
    backgroundColor: theme.divider,
    height: '1px'
}); };
var ɵ0 = style;
var LyDivider = /** @class */ (function () {
    function LyDivider(_el, _theme) {
        this._el = _el;
        this._theme = _theme;
    }
    Object.defineProperty(LyDivider.prototype, "inset", {
        get: function () {
            return this._inset;
        },
        /** Add indentation (72px) */
        set: function (val) {
            this._inset = val;
            this._theme.addStyle("lyDivider.inset", function () { return ({
                marginBefore: '74px'
            }); }, this._el.nativeElement, this._insetClass);
        },
        enumerable: true,
        configurable: true
    });
    LyDivider.prototype.ngOnInit = function () {
        var className = this._theme.addSimpleStyle('lyDivider', style);
        this._el.nativeElement.classList.add(className);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], LyDivider.prototype, "inset", null);
    LyDivider = tslib_1.__decorate([
        Directive({
            selector: 'ly-divider'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            LyTheme2])
    ], LyDivider);
    return LyDivider;
}());
export { LyDivider };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaXZpZGVyLyIsInNvdXJjZXMiOlsiZGl2aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQWtCLE1BQU0sV0FBVyxDQUFDO0FBRXJELElBQU0sS0FBSyxHQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLENBQUM7SUFDeEMsT0FBTyxFQUFFLE9BQU87SUFDaEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxPQUFPO0lBQzlCLE1BQU0sRUFBRSxLQUFLO0NBQ2QsQ0FBQyxFQUp1QyxDQUl2QyxDQUFDOztBQUtIO0lBcUJFLG1CQUNVLEdBQWUsRUFDZixNQUFnQjtRQURoQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUN0QixDQUFDO0lBbEJMLHNCQUFJLDRCQUFLO2FBV1Q7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQWZELDZCQUE2QjthQUU3QixVQUFVLEdBQVk7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLGlCQUFpQixFQUNqQixjQUFNLE9BQUEsQ0FBQztnQkFDTCxZQUFZLEVBQUUsTUFBTTthQUNyQixDQUFDLEVBRkksQ0FFSixFQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixJQUFJLENBQUMsV0FBVyxDQUNqQixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFVRCw0QkFBUSxHQUFSO1FBQ0UsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQXZCRDtRQURDLEtBQUssRUFBRTs7OzBDQVdQO0lBaEJVLFNBQVM7UUFIckIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FBQztpREF1QmUsVUFBVTtZQUNQLFFBQVE7T0F2QmYsU0FBUyxDQThCckI7SUFBRCxnQkFBQztDQUFBLEFBOUJELElBOEJDO1NBOUJZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHN0eWxlID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5kaXZpZGVyLFxuICBoZWlnaHQ6ICcxcHgnXG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGl2aWRlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEaXZpZGVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfaW5zZXQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2luc2V0Q2xhc3M6IHN0cmluZztcblxuICAvKiogQWRkIGluZGVudGF0aW9uICg3MnB4KSAqL1xuICBASW5wdXQoKVxuICBzZXQgaW5zZXQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5zZXQgPSB2YWw7XG4gICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlEaXZpZGVyLmluc2V0YCxcbiAgICAgICgpID0+ICh7XG4gICAgICAgIG1hcmdpbkJlZm9yZTogJzc0cHgnXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9pbnNldENsYXNzXG4gICAgKTtcbiAgfVxuICBnZXQgaW5zZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc2V0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoJ2x5RGl2aWRlcicsIHN0eWxlKTtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxufVxuIl19