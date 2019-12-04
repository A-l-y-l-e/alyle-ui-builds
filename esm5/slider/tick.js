import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { LySlider, гbetween, гvalueToPercent } from './slider';
import { untilComponentDestroyed } from '@alyle/ui';
var LyTick = /** @class */ (function () {
    function LyTick(_slider, _renderer, _el) {
        this._slider = _slider;
        this._renderer = _renderer;
        this._el = _el;
        /** @docs-private */
        this.classes = this._slider.classes;
    }
    LyTick.prototype.ngOnChanges = function () {
        this._updateTick();
    };
    LyTick.prototype.ngOnInit = function () {
        var _this = this;
        this._renderer.addClass(this._getHostElement(), this.classes.tick);
        this._slider._changes.pipe(untilComponentDestroyed(this)).subscribe(function () {
            _this._updateTick();
        });
    };
    LyTick.prototype._updateTick = function () {
        var min = this._slider._minPercent;
        var max = this._slider._maxPercent;
        var className = this._slider.classes.tickActive;
        var percent = гvalueToPercent(this.value, this._slider.min, this._slider.max);
        var pos = this._slider._calculatePosition(percent);
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
    };
    LyTick.prototype.ngOnDestroy = function () { };
    LyTick.prototype._getHostElement = function () {
        return this._el.nativeElement;
    };
    LyTick.ctorParameters = function () { return [
        { type: LySlider },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyTick.prototype, "value", void 0);
    LyTick = tslib_1.__decorate([
        Directive({
            selector: 'ly-tick'
        })
    ], LyTick);
    return LyTick;
}());
export { LyTick };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGljay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zbGlkZXIvIiwic291cmNlcyI6WyJ0aWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFLcEQ7SUFRRSxnQkFDVSxPQUFpQixFQUNqQixTQUFvQixFQUNwQixHQUFlO1FBRmYsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFWekIsb0JBQW9CO1FBQ1gsWUFBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBVXBDLENBQUM7SUFFTCw0QkFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3hCLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUM5QixDQUFDLFNBQVMsQ0FBQztZQUNWLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyw0QkFBVyxHQUFuQjtRQUNFLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBRXJDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNsRCxJQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hGLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckQsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO2FBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsNEJBQVcsR0FBWCxjQUFnQixDQUFDO0lBRWpCLGdDQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2hDLENBQUM7O2dCQTVDa0IsUUFBUTtnQkFDTixTQUFTO2dCQUNmLFVBQVU7O0lBTGhCO1FBQVIsS0FBSyxFQUFFO3lDQUFlO0lBTlosTUFBTTtRQUhsQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztTQUNwQixDQUFDO09BQ1csTUFBTSxDQXVEbEI7SUFBRCxhQUFDO0NBQUEsQUF2REQsSUF1REM7U0F2RFksTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlTbGlkZXIsINCzYmV0d2Vlbiwg0LN2YWx1ZVRvUGVyY2VudCB9IGZyb20gJy4vc2xpZGVyJztcbmltcG9ydCB7IHVudGlsQ29tcG9uZW50RGVzdHJveWVkIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktdGljaydcbn0pXG5leHBvcnQgY2xhc3MgTHlUaWNrIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl9zbGlkZXIuY2xhc3NlcztcblxuICBwcml2YXRlIF90aWNrQWN0aXZlQ2xhc3M/OiBzdHJpbmcgfCBudWxsO1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfc2xpZGVyOiBMeVNsaWRlcixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlVGljaygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgdGhpcy5jbGFzc2VzLnRpY2spO1xuICAgIHRoaXMuX3NsaWRlci5fY2hhbmdlcy5waXBlKFxuICAgICAgdW50aWxDb21wb25lbnREZXN0cm95ZWQodGhpcylcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVUaWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUaWNrKCkge1xuICAgIGNvbnN0IG1pbiA9IHRoaXMuX3NsaWRlci5fbWluUGVyY2VudDtcbiAgICBjb25zdCBtYXggPSB0aGlzLl9zbGlkZXIuX21heFBlcmNlbnQ7XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLl9zbGlkZXIuY2xhc3Nlcy50aWNrQWN0aXZlO1xuICAgIGNvbnN0IHBlcmNlbnQgPSDQs3ZhbHVlVG9QZXJjZW50KHRoaXMudmFsdWUsIHRoaXMuX3NsaWRlci5taW4sIHRoaXMuX3NsaWRlci5tYXgpO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuX3NsaWRlci5fY2FsY3VsYXRlUG9zaXRpb24ocGVyY2VudCk7XG5cbiAgICBpZiAo0LNiZXR3ZWVuKHBlcmNlbnQsIG1pbiwgbWF4KSkge1xuICAgICAgdGhpcy5fdGlja0FjdGl2ZUNsYXNzID0gY2xhc3NOYW1lO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3RpY2tBY3RpdmVDbGFzcykge1xuICAgICAgdGhpcy5fdGlja0FjdGl2ZUNsYXNzID0gbnVsbDtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgJ2JvdHRvbScsIG51bGwpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2dldEhvc3RFbGVtZW50KCksICdsZWZ0JywgbnVsbCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgJ3JpZ2h0JywgbnVsbCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZ2V0SG9zdEVsZW1lbnQoKSwgcG9zLnN0eWxlLCBwb3MudmFsdWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7IH1cblxuICBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxufVxuIl19