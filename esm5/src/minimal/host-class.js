import * as tslib_1 from "tslib";
import { Injectable, ElementRef, Renderer2 } from '@angular/core';
var LyHostClass = /** @class */ (function () {
    function LyHostClass(_el, _renderer) {
        this._renderer = _renderer;
        this._set = new Set();
        this._nEl = _el.nativeElement;
    }
    LyHostClass.prototype.add = function (className) {
        if (!this._set.has(className)) {
            this._set.add(className);
            this._renderer.addClass(this._nEl, className);
        }
    };
    LyHostClass.prototype.remove = function (className) {
        if (className && this._set.has(className)) {
            this._set.delete(className);
            this._renderer.removeClass(this._nEl, className);
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
    LyHostClass.prototype.update = function (newClassName, oldClassName) {
        this.remove(oldClassName);
        this.add(newClassName);
        return newClassName;
    };
    LyHostClass.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LyHostClass = tslib_1.__decorate([
        Injectable()
    ], LyHostClass);
    return LyHostClass;
}());
export { LyHostClass };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC1jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9taW5pbWFsL2hvc3QtY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlsRTtJQUdFLHFCQUNFLEdBQWUsRUFDUCxTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBSmIsU0FBSSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFNeEMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2hDLENBQUM7SUFFRCx5QkFBRyxHQUFILFVBQUksU0FBaUI7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLFNBQXlCO1FBQzlCLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLFNBQWlCLEVBQUUsT0FBZ0I7UUFDeEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxZQUFvQixFQUFFLFlBQXVDO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOztnQkFoQ00sVUFBVTtnQkFDSSxTQUFTOztJQUxuQixXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVcsQ0FxQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXJDWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SG9zdENsYXNzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfc2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX25FbDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMuX25FbCA9IF9lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgYWRkKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLl9zZXQuaGFzKGNsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMuX3NldC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX25FbCwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoY2xhc3NOYW1lPzogc3RyaW5nIHwgbnVsbCkge1xuICAgIGlmIChjbGFzc05hbWUgJiYgdGhpcy5fc2V0LmhhcyhjbGFzc05hbWUpKSB7XG4gICAgICB0aGlzLl9zZXQuZGVsZXRlKGNsYXNzTmFtZSk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9uRWwsIGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKGNsYXNzTmFtZTogc3RyaW5nLCBlbmFibGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIHRoaXMuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG5ld0NsYXNzTmFtZTogc3RyaW5nLCBvbGRDbGFzc05hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnJlbW92ZShvbGRDbGFzc05hbWUpO1xuICAgIHRoaXMuYWRkKG5ld0NsYXNzTmFtZSk7XG4gICAgcmV0dXJuIG5ld0NsYXNzTmFtZTtcbiAgfVxufVxuXG4iXX0=