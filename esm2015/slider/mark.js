import * as tslib_1 from "tslib";
import { untilComponentDestroyed } from '@alyle/ui';
import { Component, Input, Renderer2, ElementRef, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { LySlider, гvalueToPercent, гbetween } from './slider';
import { LyTick } from './tick';
let LyMark = class LyMark {
    constructor(_slider, _renderer, _el) {
        this._slider = _slider;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._slider.classes;
        _renderer.addClass(_el.nativeElement, _slider.classes.mark);
    }
    ngOnInit() {
        this._renderer.insertBefore(this._slider._getHostElement(), this._tick._getHostElement(), this._slider._ticksRef.nativeElement);
        this._slider._changes.pipe(untilComponentDestroyed(this)).subscribe(() => {
            this._updateMark();
        });
    }
    _updateMark() {
        const min = this._slider._minPercent;
        const max = this._slider._maxPercent;
        const className = this._slider.classes.markActive;
        const percent = гvalueToPercent(this.value, this._slider.min, this._slider.max);
        const pos = this._slider._calculatePosition(percent);
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
    }
    ngOnDestroy() { }
    _getHostElement() {
        return this._el.nativeElement;
    }
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
export { LyMark };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zbGlkZXIvIiwic291cmNlcyI6WyJtYXJrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBT2hDLElBQWEsTUFBTSxHQUFuQixNQUFhLE1BQU07SUFZakIsWUFDVSxPQUFpQixFQUNqQixTQUFvQixFQUNwQixHQUFlO1FBRmYsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFkekIsb0JBQW9CO1FBQ1gsWUFBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBZXRDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDckMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFckMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ2xELE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDNUQ7YUFBTSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXhFLENBQUM7SUFFRCxXQUFXLEtBQUssQ0FBQztJQUVULGVBQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTtBQWpEcUM7SUFBbkMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztzQ0FBUSxNQUFNO3FDQUFDO0FBR3pDO0lBQVIsS0FBSyxFQUFFOztxQ0FBZTtBQVRaLE1BQU07SUFMbEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsNEVBQXdCO1FBQ3hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7NkNBY21CLFFBQVE7UUFDTixTQUFTO1FBQ2YsVUFBVTtHQWZkLE1BQU0sQ0F1RGxCO1NBdkRZLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bnRpbENvbXBvbmVudERlc3Ryb3llZCB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVNsaWRlciwg0LN2YWx1ZVRvUGVyY2VudCwg0LNiZXR3ZWVuIH0gZnJvbSAnLi9zbGlkZXInO1xuaW1wb3J0IHsgTHlUaWNrIH0gZnJvbSAnLi90aWNrJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktbWFyaycsXG4gIHRlbXBsYXRlVXJsOiAnbWFyay5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTHlNYXJrIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fc2xpZGVyLmNsYXNzZXM7XG5cbiAgcHJpdmF0ZSBfbWFya0FjdGl2ZUNsYXNzPzogc3RyaW5nIHwgbnVsbDtcblxuICBAVmlld0NoaWxkKEx5VGljaywgeyBzdGF0aWM6IHRydWV9KSBfdGljazogTHlUaWNrO1xuXG5cbiAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3NsaWRlcjogTHlTbGlkZXIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZlxuICApIHtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIF9zbGlkZXIuY2xhc3Nlcy5tYXJrKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLl9zbGlkZXIuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX3RpY2suX2dldEhvc3RFbGVtZW50KCksIHRoaXMuX3NsaWRlci5fdGlja3NSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fc2xpZGVyLl9jaGFuZ2VzLnBpcGUodW50aWxDb21wb25lbnREZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVNYXJrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVNYXJrKCkge1xuICAgIGNvbnN0IG1pbiA9IHRoaXMuX3NsaWRlci5fbWluUGVyY2VudDtcbiAgICBjb25zdCBtYXggPSB0aGlzLl9zbGlkZXIuX21heFBlcmNlbnQ7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLl9zbGlkZXIuY2xhc3Nlcy5tYXJrQWN0aXZlO1xuICAgIGNvbnN0IHBlcmNlbnQgPSDQs3ZhbHVlVG9QZXJjZW50KHRoaXMudmFsdWUsIHRoaXMuX3NsaWRlci5taW4sIHRoaXMuX3NsaWRlci5tYXgpO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuX3NsaWRlci5fY2FsY3VsYXRlUG9zaXRpb24ocGVyY2VudCk7XG5cbiAgICBpZiAo0LNiZXR3ZWVuKHBlcmNlbnQsIG1pbiwgbWF4KSkge1xuICAgICAgdGhpcy5fbWFya0FjdGl2ZUNsYXNzID0gY2xhc3NOYW1lO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX21hcmtBY3RpdmVDbGFzcykge1xuICAgICAgdGhpcy5fbWFya0FjdGl2ZUNsYXNzID0gbnVsbDtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgJ2JvdHRvbScsIG51bGwpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2dldEhvc3RFbGVtZW50KCksICdsZWZ0JywgbnVsbCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgJ3JpZ2h0JywgbnVsbCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgcG9zLnN0eWxlLCBwb3MudmFsdWUpO1xuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHsgfVxuXG4gIHByaXZhdGUgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbiJdfQ==