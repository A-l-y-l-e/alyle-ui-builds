import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { STYLES } from './styles';
/** LyHint */
const STYLE_PRIORITY = -2;
/** Hint text to be shown underneath the field. */
let LyHint = class LyHint {
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.hint);
    }
    set align(val) {
        if (val) {
            if (val === 'after') {
                this._renderer.addClass(this._el.nativeElement, this.classes.hintAfter);
                this._alignClass = this.classes.hintAfter;
            }
            else {
                this._renderer.addClass(this._el.nativeElement, this.classes.hintBefore);
                this._alignClass = this.classes.hintBefore;
            }
        }
        else if (this._alignClass) {
            this._renderer.removeClass(this._el.nativeElement, this._alignClass);
            this._alignClass = undefined;
        }
        this._align = val;
    }
    get align() {
        return this._align;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], LyHint.prototype, "align", null);
LyHint = tslib_1.__decorate([
    Directive({
        selector: 'ly-field > ly-hint'
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2,
        ElementRef,
        LyTheme2])
], LyHint);
export { LyHint };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9maWVsZC8iLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSWxDLGFBQWE7QUFDYixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUUxQixrREFBa0Q7QUFJbEQsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTTtJQXVCakIsWUFDVSxTQUFvQixFQUNwQixHQUFlLEVBQ2YsTUFBZ0I7UUFGaEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQXpCakIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQTJCbkUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQXhCRCxJQUFJLEtBQUssQ0FBQyxHQUFnQjtRQUN4QixJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksR0FBRyxLQUFLLE9BQU8sRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2FBQzVDO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0NBUUYsQ0FBQTtBQXpCQztJQURDLEtBQUssRUFBRTs7O21DQWVQO0FBbkJVLE1BQU07SUFIbEIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtLQUMvQixDQUFDOzZDQXlCcUIsU0FBUztRQUNmLFVBQVU7UUFDUCxRQUFRO0dBMUJmLE1BQU0sQ0E4QmxCO1NBOUJZLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFNUWUxFUyB9IGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgTHlIaW50QWxpZ24gPSAnYmVmb3JlJyB8ICdhZnRlcic7XG5cbi8qKiBMeUhpbnQgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBIaW50IHRleHQgdG8gYmUgc2hvd24gdW5kZXJuZWF0aCB0aGUgZmllbGQuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGx5LWhpbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5SGludCB7XG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9hbGlnbjogTHlIaW50QWxpZ247XG4gIHByaXZhdGUgX2FsaWduQ2xhc3M/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnbih2YWw6IEx5SGludEFsaWduKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgaWYgKHZhbCA9PT0gJ2FmdGVyJykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaGludEFmdGVyKTtcbiAgICAgICAgdGhpcy5fYWxpZ25DbGFzcyA9IHRoaXMuY2xhc3Nlcy5oaW50QWZ0ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaGludEJlZm9yZSk7XG4gICAgICAgIHRoaXMuX2FsaWduQ2xhc3MgPSB0aGlzLmNsYXNzZXMuaGludEJlZm9yZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FsaWduQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FsaWduQ2xhc3MpO1xuICAgICAgdGhpcy5fYWxpZ25DbGFzcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5fYWxpZ24gPSB2YWw7XG4gIH1cbiAgZ2V0IGFsaWduKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbjtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICAgICkge1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmhpbnQpO1xuICB9XG59XG4iXX0=