var LyDivider_1;
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { ThemeVariables, StyleRenderer, LyHostClass, toBoolean } from '@alyle/ui';
const STYLES = (theme) => (className) => `${className}{display:block;background-color:${theme.divider};height:1px;}`;
const ɵ0 = STYLES;
let LyDivider = LyDivider_1 = class LyDivider {
    constructor(_styleRenderer, _hostClass) {
        this._styleRenderer = _styleRenderer;
        this._hostClass = _hostClass;
    }
    /** Add indentation (72px) */
    set inset(val) {
        const newVal = this._inset = toBoolean(val);
        if (newVal) {
            this[0x1] = this._styleRenderer.add(`${LyDivider_1.и}--inset`, ({ before }) => (className) => `${className}{margin-${before}:74px;}`, this[0x1]);
        }
        else {
            this._hostClass.remove(this[0x1]);
        }
    }
    get inset() {
        return this._inset;
    }
    ngOnInit() {
        this._styleRenderer.add(STYLES);
    }
};
LyDivider.и = 'LyDivider';
LyDivider.ctorParameters = () => [
    { type: StyleRenderer },
    { type: LyHostClass }
];
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
export { LyDivider };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaXZpZGVyLyIsInNvdXJjZXMiOlsiZGl2aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxjQUFjLEVBQ2QsYUFBYSxFQUNiLFdBQVcsRUFDWCxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFL0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsU0FBUyxtQ0FBbUMsS0FBSyxDQUFDLE9BQU8sZUFBZSxDQUFDOztBQVM3SSxJQUFhLFNBQVMsaUJBQXRCLE1BQWEsU0FBUztJQXVCcEIsWUFDVSxjQUE2QixFQUM3QixVQUF1QjtRQUR2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFhO0lBQzdCLENBQUM7SUF0QkwsNkJBQTZCO0lBRTdCLElBQUksS0FBSyxDQUFDLEdBQVk7UUFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQ2pDLEdBQUcsV0FBUyxDQUFDLENBQUMsU0FBUyxFQUN2QixDQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLFdBQVcsTUFBTSxTQUFTLEVBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDVixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBUUQsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDRixDQUFBO0FBOUJpQixXQUFDLEdBQUcsV0FBVyxDQUFDOztZQXVCTixhQUFhO1lBQ2pCLFdBQVc7O0FBbkJqQztJQURDLEtBQUssRUFBRTtzQ0FZUDtBQWpCVSxTQUFTO0lBUHJCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFNBQVMsRUFBRTtZQUNULFdBQVc7WUFDWCxhQUFhO1NBQ2Q7S0FDRixDQUFDO0dBQ1csU0FBUyxDQStCckI7U0EvQlksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFN0eWxlUmVuZGVyZXIsXG4gIEx5SG9zdENsYXNzLFxuICB0b0Jvb2xlYW4gfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBTVFlMRVMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kLWNvbG9yOiR7dGhlbWUuZGl2aWRlcn07aGVpZ2h0OjFweDt9YDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGl2aWRlcicsXG4gIHByb3ZpZGVyczogW1xuICAgIEx5SG9zdENsYXNzLFxuICAgIFN0eWxlUmVuZGVyZXJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeURpdmlkZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgcmVhZG9ubHkg0LggPSAnTHlEaXZpZGVyJztcbiAgcHJpdmF0ZSBfaW5zZXQ6IGJvb2xlYW47XG5cbiAgLyoqIEFkZCBpbmRlbnRhdGlvbiAoNzJweCkgKi9cbiAgQElucHV0KClcbiAgc2V0IGluc2V0KHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2luc2V0ID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpc1sweDFdID0gdGhpcy5fc3R5bGVSZW5kZXJlci5hZGQoXG4gICAgICAgIGAke0x5RGl2aWRlci7QuH0tLWluc2V0YCxcbiAgICAgICAgKHtiZWZvcmV9KSA9PiAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IGAke2NsYXNzTmFtZX17bWFyZ2luLSR7YmVmb3JlfTo3NHB4O31gLFxuICAgICAgICB0aGlzWzB4MV1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hvc3RDbGFzcy5yZW1vdmUodGhpc1sweDFdKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGluc2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnNldDtcbiAgfVxuICBbMHgxXTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3N0eWxlUmVuZGVyZXI6IFN0eWxlUmVuZGVyZXIsXG4gICAgcHJpdmF0ZSBfaG9zdENsYXNzOiBMeUhvc3RDbGFzc1xuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3N0eWxlUmVuZGVyZXIuYWRkKFNUWUxFUyk7XG4gIH1cbn1cbiJdfQ==