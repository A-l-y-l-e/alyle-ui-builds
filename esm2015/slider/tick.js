import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { LySlider, гbetween, гvalueToPercent } from './slider';
import { untilComponentDestroyed } from '@alyle/ui';
let LyTick = class LyTick {
    constructor(_slider, _renderer, _el) {
        this._slider = _slider;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._slider.classes;
    }
    ngOnChanges() {
        this._updateTick();
    }
    ngOnInit() {
        this._renderer.addClass(this._getHostElement(), this.classes.tick);
        this._slider._changes.pipe(untilComponentDestroyed(this)).subscribe(() => {
            this._updateTick();
        });
    }
    _updateTick() {
        const min = this._slider._minPercent;
        const max = this._slider._maxPercent;
        const className = this._slider.classes.tickActive;
        const percent = гvalueToPercent(this.value, this._slider.min, this._slider.max);
        const pos = this._slider._calculatePosition(percent);
        if (гbetween(percent, min, max)) {
            this._tickActiveClass = className;
            this._renderer.addClass(this._el.nativeElement, className);
        }
        else if (this._tickActiveClass) {
            this._tickActiveClass = null;
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
    Input(),
    tslib_1.__metadata("design:type", Number)
], LyTick.prototype, "value", void 0);
LyTick = tslib_1.__decorate([
    Directive({
        selector: 'ly-tick'
    }),
    tslib_1.__metadata("design:paramtypes", [LySlider,
        Renderer2,
        ElementRef])
], LyTick);
export { LyTick };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGljay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zbGlkZXIvIiwic291cmNlcyI6WyJ0aWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBS3BELElBQWEsTUFBTSxHQUFuQixNQUFhLE1BQU07SUFRakIsWUFDVSxPQUFpQixFQUNqQixTQUFvQixFQUNwQixHQUFlO1FBRmYsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFWekIsb0JBQW9CO1FBQ1gsWUFBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBVXBDLENBQUM7SUFFTCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4Qix1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FDOUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDckMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFckMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ2xELE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyRCxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDNUQ7YUFBTSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxXQUFXLEtBQUssQ0FBQztJQUVqQixlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDO0NBRUYsQ0FBQTtBQWpEVTtJQUFSLEtBQUssRUFBRTs7cUNBQWU7QUFOWixNQUFNO0lBSGxCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxTQUFTO0tBQ3BCLENBQUM7NkNBVW1CLFFBQVE7UUFDTixTQUFTO1FBQ2YsVUFBVTtHQVhkLE1BQU0sQ0F1RGxCO1NBdkRZLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5U2xpZGVyLCDQs2JldHdlZW4sINCzdmFsdWVUb1BlcmNlbnQgfSBmcm9tICcuL3NsaWRlcic7XG5pbXBvcnQgeyB1bnRpbENvbXBvbmVudERlc3Ryb3llZCB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXRpY2snXG59KVxuZXhwb3J0IGNsYXNzIEx5VGljayBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fc2xpZGVyLmNsYXNzZXM7XG5cbiAgcHJpdmF0ZSBfdGlja0FjdGl2ZUNsYXNzPzogc3RyaW5nIHwgbnVsbDtcblxuICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3NsaWRlcjogTHlTbGlkZXIsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuX3VwZGF0ZVRpY2soKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHRoaXMuY2xhc3Nlcy50aWNrKTtcbiAgICB0aGlzLl9zbGlkZXIuX2NoYW5nZXMucGlwZShcbiAgICAgIHVudGlsQ29tcG9uZW50RGVzdHJveWVkKHRoaXMpXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlVGljaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVGljaygpIHtcbiAgICBjb25zdCBtaW4gPSB0aGlzLl9zbGlkZXIuX21pblBlcmNlbnQ7XG4gICAgY29uc3QgbWF4ID0gdGhpcy5fc2xpZGVyLl9tYXhQZXJjZW50O1xuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5fc2xpZGVyLmNsYXNzZXMudGlja0FjdGl2ZTtcbiAgICBjb25zdCBwZXJjZW50ID0g0LN2YWx1ZVRvUGVyY2VudCh0aGlzLnZhbHVlLCB0aGlzLl9zbGlkZXIubWluLCB0aGlzLl9zbGlkZXIubWF4KTtcbiAgICBjb25zdCBwb3MgPSB0aGlzLl9zbGlkZXIuX2NhbGN1bGF0ZVBvc2l0aW9uKHBlcmNlbnQpO1xuXG4gICAgaWYgKNCzYmV0d2VlbihwZXJjZW50LCBtaW4sIG1heCkpIHtcbiAgICAgIHRoaXMuX3RpY2tBY3RpdmVDbGFzcyA9IGNsYXNzTmFtZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl90aWNrQWN0aXZlQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3RpY2tBY3RpdmVDbGFzcyA9IG51bGw7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2dldEhvc3RFbGVtZW50KCksICdib3R0b20nLCBudWxsKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9nZXRIb3N0RWxlbWVudCgpLCAnbGVmdCcsIG51bGwpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2dldEhvc3RFbGVtZW50KCksICdyaWdodCcsIG51bGwpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2dldEhvc3RFbGVtZW50KCksIHBvcy5zdHlsZSwgcG9zLnZhbHVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkgeyB9XG5cbiAgX2dldEhvc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbn1cbiJdfQ==