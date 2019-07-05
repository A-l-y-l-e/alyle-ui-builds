import * as tslib_1 from "tslib";
import { Injectable, ElementRef, Renderer2 } from '@angular/core';
var LyHostClass = /** @class */ (function () {
    function LyHostClass(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this._set = new Set();
    }
    LyHostClass.prototype.add = function (className) {
        if (!this._set.has(className)) {
            this._set.add(className);
            this._renderer.addClass(this._el.nativeElement, className);
        }
    };
    LyHostClass.prototype.remove = function (className) {
        if (this._set.has(className)) {
            this._set.delete(className);
            this._renderer.removeClass(this._el.nativeElement, className);
        }
    };
    LyHostClass.prototype.toggle = function (className, enabled) {
        if (enabled) {
            this.add(className);
        }
        else {
            this.remove(className);
        }
    };
    LyHostClass = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            Renderer2])
    ], LyHostClass);
    return LyHostClass;
}());
export { LyHostClass };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC1jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9taW5pbWFsL2hvc3QtY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlsRTtJQUVFLHFCQUNVLEdBQWUsRUFDZixTQUFvQjtRQURwQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUhiLFNBQUksR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO0lBSXRDLENBQUM7SUFFTCx5QkFBRyxHQUFILFVBQUksU0FBaUI7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxTQUFpQjtRQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxTQUFpQixFQUFFLE9BQWdCO1FBQ3hDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUEzQlUsV0FBVztRQUR2QixVQUFVLEVBQUU7aURBSUksVUFBVTtZQUNKLFNBQVM7T0FKbkIsV0FBVyxDQTRCdkI7SUFBRCxrQkFBQztDQUFBLEFBNUJELElBNEJDO1NBNUJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTHlIb3N0Q2xhc3Mge1xuICBwcml2YXRlIHJlYWRvbmx5IF9zZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIGFkZChjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5fc2V0LmhhcyhjbGFzc05hbWUpKSB7XG4gICAgICB0aGlzLl9zZXQuYWRkKGNsYXNzTmFtZSk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShjbGFzc05hbWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9zZXQuaGFzKGNsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMuX3NldC5kZWxldGUoY2xhc3NOYW1lKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKGNsYXNzTmFtZTogc3RyaW5nLCBlbmFibGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG59XG4iXX0=