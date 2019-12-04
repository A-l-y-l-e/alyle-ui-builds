import * as tslib_1 from "tslib";
import { untilComponentDestroyed } from '@alyle/ui';
import { Component, Input, Renderer2, ElementRef, ChangeDetectionStrategy, ViewChild, OnInit, OnDestroy } from '@angular/core';
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
    LyMark.ctorParameters = function () { return [
        { type: LySlider },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        ViewChild(LyTick, { static: true })
    ], LyMark.prototype, "_tick", void 0);
    tslib_1.__decorate([
        Input()
    ], LyMark.prototype, "value", void 0);
    LyMark = tslib_1.__decorate([
        Component({
            selector: 'ly-mark',
            template: "<ly-tick [value]=\"value\"></ly-tick>\n<ng-content></ng-content>",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], LyMark);
    return LyMark;
}());
export { LyMark };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zbGlkZXIvIiwic291cmNlcyI6WyJtYXJrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQU9oQztJQVlFLGdCQUNVLE9BQWlCLEVBQ2pCLFNBQW9CLEVBQ3BCLEdBQWU7UUFGZixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQWR6QixvQkFBb0I7UUFDWCxZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFldEMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbEUsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDRCQUFXLEdBQW5CO1FBQ0UsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFckMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ2xELElBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEYsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDNUQ7YUFBTSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXhFLENBQUM7SUFFRCw0QkFBVyxHQUFYLGNBQWdCLENBQUM7SUFFVCxnQ0FBZSxHQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQzs7Z0JBekNrQixRQUFRO2dCQUNOLFNBQVM7Z0JBQ2YsVUFBVTs7SUFUVztRQUFuQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO3lDQUFlO0lBR3pDO1FBQVIsS0FBSyxFQUFFO3lDQUFlO0lBVFosTUFBTTtRQUxsQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQiw0RUFBd0I7WUFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLE1BQU0sQ0F1RGxCO0lBQUQsYUFBQztDQUFBLEFBdkRELElBdURDO1NBdkRZLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bnRpbENvbXBvbmVudERlc3Ryb3llZCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVNsaWRlciwg0LN2YWx1ZVRvUGVyY2VudCwg0LNiZXR3ZWVuIH0gZnJvbSAnLi9zbGlkZXInO1xuaW1wb3J0IHsgTHlUaWNrIH0gZnJvbSAnLi90aWNrJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWFyaycsXG4gIHRlbXBsYXRlVXJsOiAnbWFyay5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTHlNYXJrIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fc2xpZGVyLmNsYXNzZXM7XG5cbiAgcHJpdmF0ZSBfbWFya0FjdGl2ZUNsYXNzPzogc3RyaW5nIHwgbnVsbDtcblxuICBAVmlld0NoaWxkKEx5VGljaywgeyBzdGF0aWM6IHRydWV9KSBfdGljazogTHlUaWNrO1xuXG5cbiAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3NsaWRlcjogTHlTbGlkZXIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIF9zbGlkZXIuY2xhc3Nlcy5tYXJrKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9zbGlkZXIuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX3RpY2suX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX3NsaWRlci5fdGlja3NSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fc2xpZGVyLl9jaGFuZ2VzLnBpcGUodW50aWxDb21wb25lbnREZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVNYXJrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVNYXJrKCkge1xuICAgIGNvbnN0IG1pbiA9IHRoaXMuX3NsaWRlci5fbWluUGVyY2VudDtcbiAgICBjb25zdCBtYXggPSB0aGlzLl9zbGlkZXIuX21heFBlcmNlbnQ7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLl9zbGlkZXIuY2xhc3Nlcy5tYXJrQWN0aXZlO1xuICAgIGNvbnN0IHBlcmNlbnQgPSDQs3ZhbHVlVG9QZXJjZW50KHRoaXMudmFsdWUsIHRoaXMuX3NsaWRlci5taW4sIHRoaXMuX3NsaWRlci5tYXgpO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuX3NsaWRlci5fY2FsY3VsYXRlUG9zaXRpb24ocGVyY2VudCk7XG5cbiAgICBpZiAo0LNiZXR3ZWVuKHBlcmNlbnQsIG1pbiwgbWF4KSkge1xuICAgICAgdGhpcy5fbWFya0FjdGl2ZUNsYXNzID0gY2xhc3NOYW1lO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX21hcmtBY3RpdmVDbGFzcykge1xuICAgICAgdGhpcy5fbWFya0FjdGl2ZUNsYXNzID0gbnVsbDtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgJ2JvdHRvbScsIG51bGwpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2dldEhvc3RFbGVtZW50KCksICdsZWZ0JywgbnVsbCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgJ3JpZ2h0JywgbnVsbCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgcG9zLnN0eWxlLCBwb3MudmFsdWUpO1xuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHsgfVxuXG4gIHByaXZhdGUgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbiJdfQ==