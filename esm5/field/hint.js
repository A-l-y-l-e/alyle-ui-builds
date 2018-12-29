/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { LyTheme2, invertPlacement } from '@alyle/ui';
import { STYLES } from './styles';
/**
 * LyHint
 * @type {?}
 */
var STYLE_PRIORITY = -2;
/**
 * Hint text to be shown underneath the field.
 */
var LyHint = /** @class */ (function () {
    function LyHint(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
        /** @type {?} */
        var className = _theme.addStyleSheet(STYLES, STYLE_PRIORITY).hint;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9maWVsZC8iLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7SUFLNUIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7OztBQUd6QjtJQTRCRSxnQkFDVSxTQUFvQixFQUNwQixHQUFlLEVBQ2YsTUFBZ0I7UUFGaEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBVTs7WUFFbEIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLElBQUk7UUFDbkUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUE3QkQsc0JBQ0kseUJBQUs7Ozs7UUFrQlQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFyQkQsVUFDVSxHQUFnQjs7Z0JBQ2xCLE1BQU0sR0FBRyxlQUFlLENBQUMsbUJBQUEsR0FBRyxFQUFPLENBQUM7WUFDMUMsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDckMsa0JBQWdCLEdBQUssRUFDckI7O29CQUFNLE9BQUE7d0JBQ0osR0FBQyxZQUFVLE1BQVEsSUFBRyxNQUFNOzJCQUM1QjtnQkFGSSxDQUVKLEVBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLGNBQWMsQ0FDZixDQUFDO2FBQ0g7aUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7Ozs7Z0JBWm1CLFNBQVM7Z0JBQUUsVUFBVTtnQkFDaEMsUUFBUTs7O3dCQWVkLEtBQUs7O0lBOEJSLGFBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQWpDWSxNQUFNOzs7SUFDakIsd0JBQTRCOztJQUM1Qiw2QkFBNEI7O0lBd0IxQiwyQkFBNEI7O0lBQzVCLHFCQUF1Qjs7SUFDdkIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgaW52ZXJ0UGxhY2VtZW50IH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFNUWUxFUyB9IGZyb20gJy4vc3R5bGVzJztcblxuZXhwb3J0IHR5cGUgTHlIaW50QWxpZ24gPSAnYmVmb3JlJyB8ICdhZnRlcic7XG5cbi8qKiBMeUhpbnQgKi9cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbi8qKiBIaW50IHRleHQgdG8gYmUgc2hvd24gdW5kZXJuZWF0aCB0aGUgZmllbGQuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1maWVsZCA+IGx5LWhpbnQnXG59KVxuZXhwb3J0IGNsYXNzIEx5SGludCB7XG4gIHByaXZhdGUgX2FsaWduOiBMeUhpbnRBbGlnbjtcbiAgcHJpdmF0ZSBfYWxpZ25DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgYWxpZ24odmFsOiBMeUhpbnRBbGlnbikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGludmVydFBsYWNlbWVudCh2YWwgYXMgYW55KTtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLl9hbGlnbkNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseUhpbnQuYWxpZ246JHt2YWx9YCxcbiAgICAgICAgKCkgPT4gKHtcbiAgICAgICAgICBbYG1hcmdpbi0ke25ld1ZhbH1gXTogJ2F1dG8nXG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9hbGlnbkNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FsaWduQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FsaWduQ2xhc3MpO1xuICAgICAgdGhpcy5fYWxpZ25DbGFzcyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX2FsaWduID0gdmFsO1xuICB9XG4gIGdldCBhbGlnbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ247XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTJcbiAgICApIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBfdGhlbWUuYWRkU3R5bGVTaGVldChTVFlMRVMsIFNUWUxFX1BSSU9SSVRZKS5oaW50O1xuICAgIF9yZW5kZXJlci5hZGRDbGFzcyhfZWwubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfVxufVxuIl19