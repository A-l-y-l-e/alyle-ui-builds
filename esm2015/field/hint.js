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
const STYLE_PRIORITY = -2;
/**
 * Hint text to be shown underneath the field.
 */
export class LyHint {
    /**
     * @param {?} _renderer
     * @param {?} _el
     * @param {?} _theme
     */
    constructor(_renderer, _el, _theme) {
        this._renderer = _renderer;
        this._el = _el;
        this._theme = _theme;
        /** @type {?} */
        const className = _theme.addStyleSheet(STYLES, STYLE_PRIORITY).hint;
        _renderer.addClass(_el.nativeElement, className);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) {
        /** @type {?} */
        const newVal = invertPlacement((/** @type {?} */ (val)));
        if (val) {
            this._alignClass = this._theme.addStyle(`lyHint.align:${val}`, () => ({
                [`margin-${newVal}`]: 'auto'
            }), this._el.nativeElement, this._alignClass, STYLE_PRIORITY);
        }
        else if (this._alignClass) {
            this._renderer.removeClass(this._el.nativeElement, this._alignClass);
            this._alignClass = null;
        }
        this._align = val;
    }
    /**
     * @return {?}
     */
    get align() {
        return this._align;
    }
}
LyHint.decorators = [
    { type: Directive, args: [{
                selector: 'ly-field > ly-hint'
            },] }
];
/** @nocollapse */
LyHint.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
LyHint.propDecorators = {
    align: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9maWVsZC8iLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7TUFLNUIsY0FBYyxHQUFHLENBQUMsQ0FBQzs7OztBQU16QixNQUFNLE9BQU8sTUFBTTs7Ozs7O0lBeUJqQixZQUNVLFNBQW9CLEVBQ3BCLEdBQWUsRUFDZixNQUFnQjtRQUZoQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFVOztjQUVsQixTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSTtRQUNuRSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUE3QkQsSUFDSSxLQUFLLENBQUMsR0FBZ0I7O2NBQ2xCLE1BQU0sR0FBRyxlQUFlLENBQUMsbUJBQUEsR0FBRyxFQUFPLENBQUM7UUFDMUMsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNyQyxnQkFBZ0IsR0FBRyxFQUFFLEVBQ3JCLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTTthQUM3QixDQUFDLEVBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLGNBQWMsQ0FDZixDQUFDO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7OztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7Ozs7WUFabUIsU0FBUztZQUFFLFVBQVU7WUFDaEMsUUFBUTs7O29CQWVkLEtBQUs7Ozs7SUFGTix3QkFBNEI7O0lBQzVCLDZCQUE0Qjs7SUF3QjFCLDJCQUE0Qjs7SUFDNUIscUJBQXVCOztJQUN2Qix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBpbnZlcnRQbGFjZW1lbnQgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU1RZTEVTIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgdHlwZSBMeUhpbnRBbGlnbiA9ICdiZWZvcmUnIHwgJ2FmdGVyJztcblxuLyoqIEx5SGludCAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEhpbnQgdGV4dCB0byBiZSBzaG93biB1bmRlcm5lYXRoIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlIaW50IHtcbiAgcHJpdmF0ZSBfYWxpZ246IEx5SGludEFsaWduO1xuICBwcml2YXRlIF9hbGlnbkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBhbGlnbih2YWw6IEx5SGludEFsaWduKSB7XG4gICAgY29uc3QgbmV3VmFsID0gaW52ZXJ0UGxhY2VtZW50KHZhbCBhcyBhbnkpO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuX2FsaWduQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5SGludC5hbGlnbjoke3ZhbH1gLFxuICAgICAgICAoKSA9PiAoe1xuICAgICAgICAgIFtgbWFyZ2luLSR7bmV3VmFsfWBdOiAnYXV0bydcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuX2FsaWduQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fYWxpZ25DbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWxpZ25DbGFzcyk7XG4gICAgICB0aGlzLl9hbGlnbkNsYXNzID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fYWxpZ24gPSB2YWw7XG4gIH1cbiAgZ2V0IGFsaWduKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbjtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICAgICkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IF90aGVtZS5hZGRTdHlsZVNoZWV0KFNUWUxFUywgU1RZTEVfUFJJT1JJVFkpLmhpbnQ7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICB9XG59XG4iXX0=