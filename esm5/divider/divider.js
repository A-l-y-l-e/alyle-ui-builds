/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @type {?} */
var style = function (theme) { return ({
    display: 'block',
    backgroundColor: theme.divider,
    height: '1px'
}); };
var ɵ0 = style;
var LyDivider = /** @class */ (function () {
    function LyDivider(_el, _theme) {
        this._el = _el;
        this._theme = _theme;
    }
    Object.defineProperty(LyDivider.prototype, "inset", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inset;
        },
        /** Add indentation (72px) */
        set: /**
         * Add indentation (72px)
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._inset = val;
            this._theme.addStyle("lyDivider.inset", function () { return ({
                marginBefore: '74px'
            }); }, this._el.nativeElement, this._insetClass);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyDivider.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var className = this._theme.addSimpleStyle('lyDivider', style);
        this._el.nativeElement.classList.add(className);
    };
    LyDivider.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-divider'
                },] }
    ];
    /** @nocollapse */
    LyDivider.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyDivider.propDecorators = {
        inset: [{ type: Input }]
    };
    return LyDivider;
}());
export { LyDivider };
if (false) {
    /** @type {?} */
    LyDivider.prototype._inset;
    /** @type {?} */
    LyDivider.prototype._insetClass;
    /** @type {?} */
    LyDivider.prototype._el;
    /** @type {?} */
    LyDivider.prototype._theme;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl2aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaXZpZGVyLyIsInNvdXJjZXMiOlsiZGl2aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQWtCLE1BQU0sV0FBVyxDQUFDOztJQUUvQyxLQUFLLEdBQUcsVUFBQyxLQUFxQixJQUFLLE9BQUEsQ0FBQztJQUN4QyxPQUFPLEVBQUUsT0FBTztJQUNoQixlQUFlLEVBQUUsS0FBSyxDQUFDLE9BQU87SUFDOUIsTUFBTSxFQUFFLEtBQUs7Q0FDZCxDQUFDLEVBSnVDLENBSXZDOztBQUVGO0lBd0JFLG1CQUNVLEdBQWUsRUFDZixNQUFnQjtRQURoQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUN0QixDQUFDO0lBbkJMLHNCQUNJLDRCQUFLOzs7O1FBV1Q7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQWZELDZCQUE2Qjs7Ozs7O1FBQzdCLFVBQ1UsR0FBWTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsaUJBQWlCLEVBQ2pCLGNBQU0sT0FBQSxDQUFDO2dCQUNMLFlBQVksRUFBRSxNQUFNO2FBQ3JCLENBQUMsRUFGSSxDQUVKLEVBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7OztJQVVELDRCQUFROzs7SUFBUjs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQztRQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQVgwQixVQUFVO2dCQUM1QixRQUFROzs7d0JBZ0JkLEtBQUs7O0lBeUJSLGdCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E5QlksU0FBUzs7O0lBQ3BCLDJCQUF3Qjs7SUFDeEIsZ0NBQTRCOztJQW9CMUIsd0JBQXVCOztJQUN2QiwyQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmNvbnN0IHN0eWxlID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5kaXZpZGVyLFxuICBoZWlnaHQ6ICcxcHgnXG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZGl2aWRlcidcbn0pXG5leHBvcnQgY2xhc3MgTHlEaXZpZGVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfaW5zZXQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2luc2V0Q2xhc3M6IHN0cmluZztcblxuICAvKiogQWRkIGluZGVudGF0aW9uICg3MnB4KSAqL1xuICBASW5wdXQoKVxuICBzZXQgaW5zZXQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5zZXQgPSB2YWw7XG4gICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICBgbHlEaXZpZGVyLmluc2V0YCxcbiAgICAgICgpID0+ICh7XG4gICAgICAgIG1hcmdpbkJlZm9yZTogJzc0cHgnXG4gICAgICB9KSxcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLl9pbnNldENsYXNzXG4gICAgKTtcbiAgfVxuICBnZXQgaW5zZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc2V0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5fdGhlbWUuYWRkU2ltcGxlU3R5bGUoJ2x5RGl2aWRlcicsIHN0eWxlKTtcbiAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxufVxuIl19