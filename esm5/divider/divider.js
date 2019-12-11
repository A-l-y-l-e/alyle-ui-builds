import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { ThemeVariables, StyleRenderer, LyHostClass, toBoolean } from '@alyle/ui';
var STYLES = function (theme) { return function (className) { return className + "{display:block;background-color:" + theme.divider + ";height:1px;}"; }; };
var ɵ0 = STYLES;
var LyDivider = /** @class */ (function () {
    function LyDivider(_styleRenderer, _hostClass) {
        this._styleRenderer = _styleRenderer;
        this._hostClass = _hostClass;
    }
    LyDivider_1 = LyDivider;
    Object.defineProperty(LyDivider.prototype, "inset", {
        get: function () {
            return this._inset;
        },
        /** Add indentation (72px) */
        set: function (val) {
            var newVal = this._inset = toBoolean(val);
            if (newVal) {
                this[0x1] = this._styleRenderer.add(LyDivider_1.и + "--inset", function (_a) {
                    var before = _a.before;
                    return function (className) { return className + "{margin-" + before + ":74px;}"; };
                }, this[0x1]);
            }
            else {
                this._hostClass.remove(this[0x1]);
            }
        },
        enumerable: true,
        configurable: true
    });
    LyDivider.prototype.ngOnInit = function () {
        this._styleRenderer.add(STYLES);
    };
    var LyDivider_1;
    LyDivider.и = 'LyDivider';
    LyDivider.ctorParameters = function () { return [
        { type: StyleRenderer },
        { type: LyHostClass }
    ]; };
    tslib_1.__decorate([
        Input()
    ], LyDivider.prototype, "inset", null);
    LyDivider = LyDivider_1 = tslib_1.__decorate([
        Directive({
            selector: 'ly-divider',
            providers: [
                LyHostClass,
                StyleRenderer
            ]
        })
    ], LyDivider);
    return LyDivider;
}());
export { LyDivider };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaXZpZGVyLyIsInNvdXJjZXMiOlsiZGl2aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUNMLGNBQWMsRUFDZCxhQUFhLEVBQ2IsV0FBVyxFQUNYLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUvQixJQUFNLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxVQUFDLFNBQWlCLElBQUssT0FBRyxTQUFTLHdDQUFtQyxLQUFLLENBQUMsT0FBTyxrQkFBZSxFQUEzRSxDQUEyRSxFQUFsRyxDQUFrRyxDQUFDOztBQVM3STtJQXVCRSxtQkFDVSxjQUE2QixFQUM3QixVQUF1QjtRQUR2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFhO0lBQzdCLENBQUM7a0JBMUJNLFNBQVM7SUFNcEIsc0JBQUksNEJBQUs7YUFZVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO1FBaEJELDZCQUE2QjthQUU3QixVQUFVLEdBQVk7WUFDcEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUM5QixXQUFTLENBQUMsQ0FBQyxZQUFTLEVBQ3ZCLFVBQUMsRUFBUTt3QkFBUCxrQkFBTTtvQkFBTSxPQUFBLFVBQUMsU0FBaUIsSUFBSyxPQUFHLFNBQVMsZ0JBQVcsTUFBTSxZQUFTLEVBQXRDLENBQXNDO2dCQUE3RCxDQUE2RCxFQUMzRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQ1YsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQzs7O09BQUE7SUFXRCw0QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7SUE3QmUsV0FBQyxHQUFHLFdBQVcsQ0FBQzs7Z0JBdUJOLGFBQWE7Z0JBQ2pCLFdBQVc7O0lBbkJqQztRQURDLEtBQUssRUFBRTswQ0FZUDtJQWpCVSxTQUFTO1FBUHJCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxXQUFXO2dCQUNYLGFBQWE7YUFDZDtTQUNGLENBQUM7T0FDVyxTQUFTLENBK0JyQjtJQUFELGdCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EvQlksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFN0eWxlUmVuZGVyZXIsXG4gIEx5SG9zdENsYXNzLFxuICB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuZGl2aWRlcn07aGVpZ2h0OjFweDt9YDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGl2aWRlcicsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeURpdmlkZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlEaXZpZGVyJztcbiAgcHJpdmF0ZSBfaW5zZXQ6IGJvb2xlYW47XG5cbiAgLyoqIEFkZCBpbmRlbnRhdGlvbiAoNzJweCkgKi9cbiAgQElucHV0KClcbiAgc2V0IGluc2V0KHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2luc2V0ID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpc1sweDFdID0gdGhpcy5fc3R5bGVSZW5kZXJlci5hZGQoXG4gICAgICAgIGAke0x5RGl2aWRlci7QuH0tLWluc2V0YCxcbiAgICAgICAgKHtiZWZvcmV9KSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWFyZ2luLSR7YmVmb3JlfTo3NHB4O31gLFxuICAgICAgICB0aGlzWzB4MV1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hvc3RDbGFzcy5yZW1vdmUodGhpc1sweDFdKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGluc2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnNldDtcbiAgfVxuICBbMHgxXTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3N0eWxlUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXIsXG4gICAgcHJpdmF0ZSBfaG9zdENsYXNzOiBMeUhvc3RDbGFzc1xuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3N0eWxlUmVuZGVyZXIuYWRkKFNUWUxFUyk7XG4gIH1cbn1cbiJdfQ==