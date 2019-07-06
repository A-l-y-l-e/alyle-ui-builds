import * as tslib_1 from "tslib";
import { untilComponentDestroyed } from '@alyle/ui';
import { Component, Input, Renderer2, ElementRef, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { LySlider, гvalueToPercent, гbetween } from './slider';
import { LyTick } from './tick';
var LyMark = /** @class */ (function () {
    function LyMark(_slider, _renderer, _el) {
        this._slider = _slider;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._slider.classes;
        _renderer.addClass(_el.nativeElement, _slider.classes.mark);
    }
    LyMark.prototype.ngOnInit = function () {
        var _this = this;
        this._renderer.insertBefore(this._slider._getHostElement(), this._tick._getHostElement(), this._slider._ticksRef.nativeElement);
        this._slider._changes.pipe(untilComponentDestroyed(this)).subscribe(function () {
            _this._updateMark();
        });
    };
    LyMark.prototype._updateMark = function () {
        var min = this._slider._minPercent;
        var max = this._slider._maxPercent;
        var className = this._slider.classes.markActive;
        var percent = гvalueToPercent(this.value, this._slider.min, this._slider.max);
        var pos = this._slider._calculatePosition(percent);
        if (гbetween(percent, min, max)) {
            this._markActiveClass = className;
            this._renderer.addClass(this._el.nativeElement, className);
        }
        else if (this._markActiveClass) {
            this._markActiveClass = null;
            this._renderer.removeClass(this._el.nativeElement, className);
        }
        this._renderer.setStyle(this._getHostElement(), 'bottom', null);
        this._renderer.setStyle(this._getHostElement(), 'left', null);
        this._renderer.setStyle(this._getHostElement(), 'right', null);
        this._renderer.setStyle(this._getHostElement(), pos.style, pos.value);
    };
    LyMark.prototype.ngOnDestroy = function () { };
    LyMark.prototype._getHostElement = function () {
        return this._el.nativeElement;
    };
    tslib_1.__decorate([
        ViewChild(LyTick, { static: true }),
        tslib_1.__metadata("design:type", LyTick)
    ], LyMark.prototype, "_tick", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], LyMark.prototype, "value", void 0);
    LyMark = tslib_1.__decorate([
        Component({
            selector: 'ly-mark',
            template: "<ly-tick [value]=\"value\"></ly-tick>\n<ng-content></ng-content>",
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [LySlider,
            Renderer2,
            ElementRef])
    ], LyMark);
    return LyMark;
}());
export { LyMark };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zbGlkZXIvIiwic291cmNlcyI6WyJtYXJrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBT2hDO0lBWUUsZ0JBQ1UsT0FBaUIsRUFDakIsU0FBb0IsRUFDcEIsR0FBZTtRQUZmLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBZHpCLG9CQUFvQjtRQUNYLFlBQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQWV0QyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNsRSxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sNEJBQVcsR0FBbkI7UUFDRSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUVyQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDbEQsSUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJELElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM1RDthQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDL0Q7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEUsQ0FBQztJQUVELDRCQUFXLEdBQVgsY0FBZ0IsQ0FBQztJQUVULGdDQUFlLEdBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDO0lBaERtQztRQUFuQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDOzBDQUFRLE1BQU07eUNBQUM7SUFHekM7UUFBUixLQUFLLEVBQUU7O3lDQUFlO0lBVFosTUFBTTtRQUxsQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQiw0RUFBd0I7WUFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztpREFjbUIsUUFBUTtZQUNOLFNBQVM7WUFDZixVQUFVO09BZmQsTUFBTSxDQXVEbEI7SUFBRCxhQUFDO0NBQUEsQUF2REQsSUF1REM7U0F2RFksTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVudGlsQ29tcG9uZW50RGVzdHJveWVkIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFZpZXdDaGlsZCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5U2xpZGVyLCDQs3ZhbHVlVG9QZXJjZW50LCDQs2JldHdlZW4gfSBmcm9tICcuL3NsaWRlcic7XG5pbXBvcnQgeyBMeVRpY2sgfSBmcm9tICcuL3RpY2snO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1tYXJrJyxcbiAgdGVtcGxhdGVVcmw6ICdtYXJrLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMeU1hcmsgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl9zbGlkZXIuY2xhc3NlcztcblxuICBwcml2YXRlIF9tYXJrQWN0aXZlQ2xhc3M/OiBzdHJpbmcgfCBudWxsO1xuXG4gIEBWaWV3Q2hpbGQoTHlUaWNrLCB7IHN0YXRpYzogdHJ1ZX0pIF90aWNrOiBMeVRpY2s7XG5cblxuICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfc2xpZGVyOiBMeVNsaWRlcixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgX3NsaWRlci5jbGFzc2VzLm1hcmspO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX3NsaWRlci5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fdGljay5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5fc2xpZGVyLl90aWNrc1JlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9zbGlkZXIuX2NoYW5nZXMucGlwZSh1bnRpbENvbXBvbmVudERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZU1hcmsoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU1hcmsoKSB7XG4gICAgY29uc3QgbWluID0gdGhpcy5fc2xpZGVyLl9taW5QZXJjZW50O1xuICAgIGNvbnN0IG1heCA9IHRoaXMuX3NsaWRlci5fbWF4UGVyY2VudDtcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuX3NsaWRlci5jbGFzc2VzLm1hcmtBY3RpdmU7XG4gICAgY29uc3QgcGVyY2VudCA9INCzdmFsdWVUb1BlcmNlbnQodGhpcy52YWx1ZSwgdGhpcy5fc2xpZGVyLm1pbiwgdGhpcy5fc2xpZGVyLm1heCk7XG4gICAgY29uc3QgcG9zID0gdGhpcy5fc2xpZGVyLl9jYWxjdWxhdGVQb3NpdGlvbihwZXJjZW50KTtcblxuICAgIGlmICjQs2JldHdlZW4ocGVyY2VudCwgbWluLCBtYXgpKSB7XG4gICAgICB0aGlzLl9tYXJrQWN0aXZlQ2xhc3MgPSBjbGFzc05hbWU7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbWFya0FjdGl2ZUNsYXNzKSB7XG4gICAgICB0aGlzLl9tYXJrQWN0aXZlQ2xhc3MgPSBudWxsO1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCAnYm90dG9tJywgbnVsbCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgJ2xlZnQnLCBudWxsKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCAncmlnaHQnLCBudWxsKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCBwb3Muc3R5bGUsIHBvcy52YWx1ZSk7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkgeyB9XG5cbiAgcHJpdmF0ZSBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuIl19