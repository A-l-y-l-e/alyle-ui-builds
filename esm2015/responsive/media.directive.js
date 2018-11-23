/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @type {?} */
const MEDIA_PRIORITY = 999;
/** @type {?} */
const styles = {
    hide: {
        display: 'none'
    }
};
export class MediaDirective {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} theme
     */
    constructor(_renderer, _elementRef, theme) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.theme = theme;
        /**
         * Styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles);
    }
    /**
     * Shows the item when the value is resolved as true
     * @return {?}
     */
    get lyShow() {
        return this._show;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set lyShow(val) {
        this._show = val;
        this._showClass = this.theme.addStyle(`lyMedia-show:${val}`, (theme) => ({
            [theme.getBreakpoint(val)]: {
                display: 'block'
            }
        }), this._elementRef.nativeElement, this._showClass, MEDIA_PRIORITY);
    }
    /**
     * Hides the item when the value is resolved as true
     * @param {?} val
     * @return {?}
     */
    set lyHide(val) {
        this._hide = val;
        this._hideClass = this.theme.addStyle(`lyMedia-hide:${val}`, (theme) => ({
            [theme.getBreakpoint(val)]: {
                display: 'none'
            }
        }), this._elementRef.nativeElement, this._hideClass, MEDIA_PRIORITY);
    }
    /**
     * @return {?}
     */
    get lyHide() {
        return this._hide;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.lyHide) {
            this._renderer.addClass(this._elementRef.nativeElement, this.classes.hide);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.lyHide && this.lyShow) {
            throw new Error(`use only \`lyHide\` or \`lyShow\` per element`);
        }
    }
}
MediaDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lyShow], [lyHide]'
            },] }
];
/** @nocollapse */
MediaDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 }
];
MediaDirective.propDecorators = {
    lyShow: [{ type: Input }],
    lyHide: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MediaDirective.prototype._show;
    /** @type {?} */
    MediaDirective.prototype._showClass;
    /** @type {?} */
    MediaDirective.prototype._hide;
    /** @type {?} */
    MediaDirective.prototype._hideClass;
    /**
     * Styles
     * @ignore
     * @type {?}
     */
    MediaDirective.prototype.classes;
    /** @type {?} */
    MediaDirective.prototype._renderer;
    /** @type {?} */
    MediaDirective.prototype._elementRef;
    /** @type {?} */
    MediaDirective.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvIiwic291cmNlcyI6WyJtZWRpYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBa0IsTUFBTSxXQUFXLENBQUM7O01BRS9DLGNBQWMsR0FBRyxHQUFHOztNQUVwQixNQUFNLEdBQUc7SUFDYixJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtLQUNoQjtDQUNGO0FBS0QsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQXVEekIsWUFDVSxTQUFvQixFQUNwQixXQUF1QixFQUN2QixLQUFlO1FBRmYsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFVOzs7OztRQWhEekIsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBaUR2QyxDQUFDOzs7OztJQTVDTCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQ3ZGLENBQUM7WUFDQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLE9BQU87YUFDakI7U0FDRixDQUFDLEVBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQzlCLElBQUksQ0FBQyxVQUFVLEVBQ2YsY0FBYyxDQUNiLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxJQUNJLE1BQU0sQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQ3ZGLENBQUM7WUFDQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxFQUFFLE1BQU07YUFDaEI7U0FDRixDQUFDLEVBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQzlCLElBQUksQ0FBQyxVQUFVLEVBQ2YsY0FBYyxDQUNiLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFRRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RTtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQzs7O1lBMUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1lBaEJDLFNBQVM7WUFDVCxVQUFVO1lBR0gsUUFBUTs7O3FCQTRCZCxLQUFLO3FCQXFCTCxLQUFLOzs7O0lBbkNOLCtCQUFzQjs7SUFDdEIsb0NBQTJCOztJQUMzQiwrQkFBc0I7O0lBQ3RCLG9DQUEyQjs7Ozs7O0lBTTNCLGlDQUEyQzs7SUE4Q3pDLG1DQUE0Qjs7SUFDNUIscUNBQStCOztJQUMvQiwrQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVRoZW1lMiwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5jb25zdCBNRURJQV9QUklPUklUWSA9IDk5OTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoaWRlOiB7XG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH1cbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVNob3ddLCBbbHlIaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3Nob3c6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2hvd0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGlkZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG5cbiAgLyoqXG4gICAqIFNob3dzIHRoZSBpdGVtIHdoZW4gdGhlIHZhbHVlIGlzIHJlc29sdmVkIGFzIHRydWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBseVNob3coKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdztcbiAgfVxuICBzZXQgbHlTaG93KHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2hvdyA9IHZhbDtcbiAgICB0aGlzLl9zaG93Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseU1lZGlhLXNob3c6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT5cbiAgICAoe1xuICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQodmFsKV06IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgfVxuICAgIH0pLFxuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl9zaG93Q2xhc3MsXG4gICAgTUVESUFfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBpdGVtIHdoZW4gdGhlIHZhbHVlIGlzIHJlc29sdmVkIGFzIHRydWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBseUhpZGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9oaWRlID0gdmFsO1xuICAgIHRoaXMuX2hpZGVDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5TWVkaWEtaGlkZToke3ZhbH1gLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PlxuICAgICh7XG4gICAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCh2YWwpXToge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9KSxcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5faGlkZUNsYXNzLFxuICAgIE1FRElBX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIGdldCBseUhpZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5seUhpZGUpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmx5SGlkZSAmJiB0aGlzLmx5U2hvdykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1c2Ugb25seSBcXGBseUhpZGVcXGAgb3IgXFxgbHlTaG93XFxgIHBlciBlbGVtZW50YCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==