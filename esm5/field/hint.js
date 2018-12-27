/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { LyTheme2, invertPlacement } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var STYLES = ({
    root: {
        display: 'block',
        fontSize: '.75em',
        marginTop: '8px'
    }
});
/**
 * Hint text to be shown underneath the field.
 */
var LyHint = /** @class */ (function () {
    function LyHint(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
        /** @type {?} */
        var className = _theme.addStyleSheet(STYLES, STYLE_PRIORITY).root;
        _renderer.addClass(_el.nativeElement, className);
    }
    Object.defineProperty(LyHint.prototype, "align", {
        get: /**
         * @return {?}
         */
        function () {
            return this._align;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var newVal = invertPlacement((/** @type {?} */ (val)));
            if (val) {
                this._alignClass = this._theme.addStyle("lyHint.align:" + val, function () {
                    var _a;
                    return (_a = {},
                        _a["margin-" + newVal] = 'auto',
                        _a);
                }, this._el.nativeElement, this._alignClass, STYLE_PRIORITY);
            }
            else if (this._alignClass) {
                this._renderer.removeClass(this._el.nativeElement, this._alignClass);
                this._alignClass = null;
            }
            this._align = val;
        },
        enumerable: true,
        configurable: true
    });
    LyHint.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-field > ly-hint'
                },] }
    ];
    /** @nocollapse */
    LyHint.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    LyHint.propDecorators = {
        align: [{ type: Input }]
    };
    return LyHint;
}());
export { LyHint };
if (false) {
    /** @type {?} */
    LyHint.prototype._align;
    /** @type {?} */
    LyHint.prototype._alignClass;
    /** @type {?} */
    LyHint.prototype._renderer;
    /** @type {?} */
    LyHint.prototype._el;
    /** @type {?} */
    LyHint.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9maWVsZC8iLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7O0lBR2hELGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLE9BQU87UUFDakIsU0FBUyxFQUFFLEtBQUs7S0FDakI7Q0FDRixDQUFDOzs7O0FBR0Y7SUE0QkUsZ0JBQ1UsU0FBb0IsRUFDcEIsR0FBZSxFQUNmLE1BQWdCO1FBRmhCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVU7O1lBRWxCLFNBQVMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJO1FBQ25FLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBN0JELHNCQUNJLHlCQUFLOzs7O1FBa0JUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBckJELFVBQ1UsR0FBZ0I7O2dCQUNsQixNQUFNLEdBQUcsZUFBZSxDQUFDLG1CQUFBLEdBQUcsRUFBTyxDQUFDO1lBQzFDLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ3JDLGtCQUFnQixHQUFLLEVBQ3JCOztvQkFBTSxPQUFBO3dCQUNKLEdBQUMsWUFBVSxNQUFRLElBQUcsTUFBTTsyQkFDNUI7Z0JBRkksQ0FFSixFQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixJQUFJLENBQUMsV0FBVyxFQUNoQixjQUFjLENBQ2YsQ0FBQzthQUNIO2lCQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN6QjtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7O2dCQWhCbUIsU0FBUztnQkFBRSxVQUFVO2dCQUNoQyxRQUFROzs7d0JBbUJkLEtBQUs7O0lBOEJSLGFBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQWpDWSxNQUFNOzs7SUFDakIsd0JBQTRCOztJQUM1Qiw2QkFBNEI7O0lBd0IxQiwyQkFBNEI7O0lBQzVCLHFCQUF1Qjs7SUFDdkIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgaW52ZXJ0UGxhY2VtZW50IH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IHR5cGUgTHlIaW50QWxpZ24gPSAnYmVmb3JlJyB8ICdhZnRlcic7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3QgU1RZTEVTID0gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6ICcuNzVlbScsXG4gICAgbWFyZ2luVG9wOiAnOHB4J1xuICB9XG59KTtcblxuLyoqIEhpbnQgdGV4dCB0byBiZSBzaG93biB1bmRlcm5lYXRoIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlIaW50IHtcbiAgcHJpdmF0ZSBfYWxpZ246IEx5SGludEFsaWduO1xuICBwcml2YXRlIF9hbGlnbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnbih2YWw6IEx5SGludEFsaWduKSB7XG4gICAgY29uc3QgbmV3VmFsID0gaW52ZXJ0UGxhY2VtZW50KHZhbCBhcyBhbnkpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuX2FsaWduQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5SGludC5hbGlnbjoke3ZhbH1gLFxuICAgICAgICAoKSA9PiAoe1xuICAgICAgICAgIFtgbWFyZ2luLSR7bmV3VmFsfWBdOiAnYXV0bydcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuX2FsaWduQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fYWxpZ25DbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWxpZ25DbGFzcyk7XG4gICAgICB0aGlzLl9hbGlnbkNsYXNzID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fYWxpZ24gPSB2YWw7XG4gIH1cbiAgZ2V0IGFsaWduKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbjtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICAgICkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IF90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpLnJvb3Q7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICB9XG59XG4iXX0=