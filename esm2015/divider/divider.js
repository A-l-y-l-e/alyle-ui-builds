/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @type {?} */
const style = (theme) => ({
    display: 'block',
    backgroundColor: theme.divider,
    height: '1px'
});
const ɵ0 = style;
export class LyDivider {
    /**
     * @param {?} _el
     * @param {?} _theme
     */
    constructor(_el, _theme) {
        this._el = _el;
        this._theme = _theme;
    }
    /**
     * Add indentation (72px)
     * @param {?} val
     * @return {?}
     */
    set inset(val) {
        this._inset = val;
        this._theme.addStyle(`lyDivider.inset`, () => ({
            marginBefore: '74px'
        }), this._el.nativeElement, this._insetClass);
    }
    /**
     * @return {?}
     */
    get inset() {
        return this._inset;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const className = this._theme.addSimpleStyle('lyDivider', style);
        this._el.nativeElement.classList.add(className);
    }
}
LyDivider.decorators = [
    { type: Directive, args: [{
                selector: 'ly-divider'
            },] }
];
/** @nocollapse */
LyDivider.ctorParameters = () => [
    { type: ElementRef },
    { type: LyTheme2 }
];
LyDivider.propDecorators = {
    inset: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    LyDivider.prototype._inset;
    /**
     * @type {?}
     * @private
     */
    LyDivider.prototype._insetClass;
    /**
     * @type {?}
     * @private
     */
    LyDivider.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyDivider.prototype._theme;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaXZpZGVyLyIsInNvdXJjZXMiOlsiZGl2aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQWtCLE1BQU0sV0FBVyxDQUFDOztNQUUvQyxLQUFLLEdBQUcsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLGVBQWUsRUFBRSxLQUFLLENBQUMsT0FBTztJQUM5QixNQUFNLEVBQUUsS0FBSztDQUNkLENBQUM7O0FBS0YsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBcUJwQixZQUNVLEdBQWUsRUFDZixNQUFnQjtRQURoQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUN0QixDQUFDOzs7Ozs7SUFuQkwsSUFDSSxLQUFLLENBQUMsR0FBWTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsaUJBQWlCLEVBQ2pCLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDTCxZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUFDLEVBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7SUFDSixDQUFDOzs7O0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFPRCxRQUFROztjQUNBLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztZQVgwQixVQUFVO1lBQzVCLFFBQVE7OztvQkFnQmQsS0FBSzs7Ozs7OztJQUpOLDJCQUF3Qjs7Ozs7SUFDeEIsZ0NBQTRCOzs7OztJQW9CMUIsd0JBQXVCOzs7OztJQUN2QiwyQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHN0eWxlID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5kaXZpZGVyLFxuICBoZWlnaHQ6ICcxcHgnXG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGl2aWRlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEaXZpZGVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfaW5zZXQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2luc2V0Q2xhc3M6IHN0cmluZztcblxuICAvKiogQWRkIGluZGVudGF0aW9uICg3MnB4KSAqL1xuICBASW5wdXQoKVxuICBzZXQgaW5zZXQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5zZXQgPSB2YWw7XG4gICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlEaXZpZGVyLmluc2V0YCxcbiAgICAgICgpID0+ICh7XG4gICAgICAgIG1hcmdpbkJlZm9yZTogJzc0cHgnXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9pbnNldENsYXNzXG4gICAgKTtcbiAgfVxuICBnZXQgaW5zZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc2V0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoJ2x5RGl2aWRlcicsIHN0eWxlKTtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxufVxuIl19