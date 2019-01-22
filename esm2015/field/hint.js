/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Input } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
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
        this.classes = this._theme.addStyleSheet(STYLES, STYLE_PRIORITY);
        _renderer.addClass(_el.nativeElement, this.classes.hint);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set align(val) {
        if (val) {
            if (val === 'after') {
                this._renderer.addClass(this._el.nativeElement, this.classes.hintAfter);
                this._alignClass = this.classes.hintAfter;
            }
            else {
                this._renderer.addClass(this._el.nativeElement, this.classes.hintBefore);
                this._alignClass = this.classes.hintBefore;
            }
        }
        else if (this._alignClass) {
            this._renderer.removeClass(this._el.nativeElement, this._alignClass);
            this._alignClass = undefined;
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
    LyHint.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyHint.prototype._align;
    /**
     * @type {?}
     * @private
     */
    LyHint.prototype._alignClass;
    /**
     * @type {?}
     * @private
     */
    LyHint.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyHint.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyHint.prototype._theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9maWVsZC8iLCJzb3VyY2VzIjpbImhpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7OztNQUs1QixjQUFjLEdBQUcsQ0FBQyxDQUFDOzs7O0FBTXpCLE1BQU0sT0FBTyxNQUFNOzs7Ozs7SUF1QmpCLFlBQ1UsU0FBb0IsRUFDcEIsR0FBZSxFQUNmLE1BQWdCO1FBRmhCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVU7UUF6QmpCLFlBQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUEyQm5FLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBekJELElBQ0ksS0FBSyxDQUFDLEdBQWdCO1FBQ3hCLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxHQUFHLEtBQUssT0FBTyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7YUFDNUM7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDOzs7O0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7OztZQVptQixTQUFTO1lBQUUsVUFBVTtZQUNoQyxRQUFROzs7b0JBZ0JkLEtBQUs7Ozs7SUFITix5QkFBcUU7Ozs7O0lBQ3JFLHdCQUE0Qjs7Ozs7SUFDNUIsNkJBQTZCOzs7OztJQXFCM0IsMkJBQTRCOzs7OztJQUM1QixxQkFBdUI7Ozs7O0lBQ3ZCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU1RZTEVTIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5leHBvcnQgdHlwZSBMeUhpbnRBbGlnbiA9ICdiZWZvcmUnIHwgJ2FmdGVyJztcblxuLyoqIEx5SGludCAqL1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxuLyoqIEhpbnQgdGV4dCB0byBiZSBzaG93biB1bmRlcm5lYXRoIHRoZSBmaWVsZC4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWZpZWxkID4gbHktaGludCdcbn0pXG5leHBvcnQgY2xhc3MgTHlIaW50IHtcbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoU1RZTEVTLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX2FsaWduOiBMeUhpbnRBbGlnbjtcbiAgcHJpdmF0ZSBfYWxpZ25DbGFzcz86IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGFsaWduKHZhbDogTHlIaW50QWxpZ24pIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICBpZiAodmFsID09PSAnYWZ0ZXInKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5oaW50QWZ0ZXIpO1xuICAgICAgICB0aGlzLl9hbGlnbkNsYXNzID0gdGhpcy5jbGFzc2VzLmhpbnRBZnRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5oaW50QmVmb3JlKTtcbiAgICAgICAgdGhpcy5fYWxpZ25DbGFzcyA9IHRoaXMuY2xhc3Nlcy5oaW50QmVmb3JlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fYWxpZ25DbGFzcykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWxpZ25DbGFzcyk7XG4gICAgICB0aGlzLl9hbGlnbkNsYXNzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLl9hbGlnbiA9IHZhbDtcbiAgfVxuICBnZXQgYWxpZ24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gICAgKSB7XG4gICAgX3JlbmRlcmVyLmFkZENsYXNzKF9lbC5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaGludCk7XG4gIH1cbn1cbiJdfQ==