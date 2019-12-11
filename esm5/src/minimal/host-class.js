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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC1jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9taW5pbWFsL2hvc3QtY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlsRTtJQUlFLHFCQUNFLEdBQWUsRUFDUCxTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBTGIsU0FBSSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFPeEMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2hDLENBQUM7SUFFRCx5QkFBRyxHQUFILFVBQUksU0FBaUI7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLFNBQXlCO1FBQzlCLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLFNBQWlCLEVBQUUsT0FBZ0I7UUFDeEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxZQUFvQixFQUFFLFlBQXVDO1FBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOztnQkFoQ00sVUFBVTtnQkFDSSxTQUFTOztJQU5uQixXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVcsQ0FzQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXRDWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEx5SG9zdENsYXNzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfc2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX25FbDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5fbkVsID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBhZGQoY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX3NldC5oYXMoY2xhc3NOYW1lKSkge1xuICAgICAgdGhpcy5fc2V0LmFkZChjbGFzc05hbWUpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fbkVsLCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShjbGFzc05hbWU/OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgaWYgKGNsYXNzTmFtZSAmJiB0aGlzLl9zZXQuaGFzKGNsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMuX3NldC5kZWxldGUoY2xhc3NOYW1lKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX25FbCwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoY2xhc3NOYW1lOiBzdHJpbmcsIGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgdGhpcy5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUobmV3Q2xhc3NOYW1lOiBzdHJpbmcsIG9sZENsYXNzTmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMucmVtb3ZlKG9sZENsYXNzTmFtZSk7XG4gICAgdGhpcy5hZGQobmV3Q2xhc3NOYW1lKTtcbiAgICByZXR1cm4gbmV3Q2xhc3NOYW1lO1xuICB9XG59XG5cbiJdfQ==