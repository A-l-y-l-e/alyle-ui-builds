/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { LyTheme2, invertPlacement } from '@alyle/ui';
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const STYLES = ({
    root: {
        display: 'block',
        fontSize: '.75em',
        marginTop: '8px'
    }
});
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
        const className = _theme.addStyleSheet(STYLES, STYLE_PRIORITY).root;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9maWVsZC8iLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7O01BR2hELGNBQWMsR0FBRyxDQUFDLENBQUM7O01BQ25CLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE9BQU87UUFDaEIsUUFBUSxFQUFFLE9BQU87UUFDakIsU0FBUyxFQUFFLEtBQUs7S0FDakI7Q0FDRixDQUFDOzs7O0FBTUYsTUFBTSxPQUFPLE1BQU07Ozs7OztJQXlCakIsWUFDVSxTQUFvQixFQUNwQixHQUFlLEVBQ2YsTUFBZ0I7UUFGaEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBVTs7Y0FFbEIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDLElBQUk7UUFDbkUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBN0JELElBQ0ksS0FBSyxDQUFDLEdBQWdCOztjQUNsQixNQUFNLEdBQUcsZUFBZSxDQUFDLG1CQUFBLEdBQUcsRUFBTyxDQUFDO1FBQzFDLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDckMsZ0JBQWdCLEdBQUcsRUFBRSxFQUNyQixHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNMLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU07YUFDN0IsQ0FBQyxFQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixJQUFJLENBQUMsV0FBVyxFQUNoQixjQUFjLENBQ2YsQ0FBQztTQUNIO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1lBaEJtQixTQUFTO1lBQUUsVUFBVTtZQUNoQyxRQUFROzs7b0JBbUJkLEtBQUs7Ozs7SUFGTix3QkFBNEI7O0lBQzVCLDZCQUE0Qjs7SUF3QjFCLDJCQUE0Qjs7SUFDNUIscUJBQXVCOztJQUN2Qix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBpbnZlcnRQbGFjZW1lbnQgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgdHlwZSBMeUhpbnRBbGlnbiA9ICdiZWZvcmUnIHwgJ2FmdGVyJztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBTVFlMRVMgPSAoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogJy43NWVtJyxcbiAgICBtYXJnaW5Ub3A6ICc4cHgnXG4gIH1cbn0pO1xuXG4vKiogSGludCB0ZXh0IHRvIGJlIHNob3duIHVuZGVybmVhdGggdGhlIGZpZWxkLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktZmllbGQgPiBseS1oaW50J1xufSlcbmV4cG9ydCBjbGFzcyBMeUhpbnQge1xuICBwcml2YXRlIF9hbGlnbjogTHlIaW50QWxpZ247XG4gIHByaXZhdGUgX2FsaWduQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGFsaWduKHZhbDogTHlIaW50QWxpZ24pIHtcbiAgICBjb25zdCBuZXdWYWwgPSBpbnZlcnRQbGFjZW1lbnQodmFsIGFzIGFueSk7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy5fYWxpZ25DbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlIaW50LmFsaWduOiR7dmFsfWAsXG4gICAgICAgICgpID0+ICh7XG4gICAgICAgICAgW2BtYXJnaW4tJHtuZXdWYWx9YF06ICdhdXRvJ1xuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fYWxpZ25DbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9hbGlnbkNsYXNzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hbGlnbkNsYXNzKTtcbiAgICAgIHRoaXMuX2FsaWduQ2xhc3MgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9hbGlnbiA9IHZhbDtcbiAgfVxuICBnZXQgYWxpZ24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gICAgKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSkucm9vdDtcbiAgICBfcmVuZGVyZXIuYWRkQ2xhc3MoX2VsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gIH1cbn1cbiJdfQ==