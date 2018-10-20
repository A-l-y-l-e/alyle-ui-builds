/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvIiwic291cmNlcyI6WyJtZWRpYS9tZWRpYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBa0IsTUFBTSxXQUFXLENBQUM7O0FBRXJELE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQzs7QUFFM0IsTUFBTSxNQUFNLEdBQUc7SUFDYixJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtLQUNoQjtDQUNGLENBQUM7QUFLRixNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBdUR6QixZQUNVLFdBQ0EsYUFDQTtRQUZBLGNBQVMsR0FBVCxTQUFTO1FBQ1QsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsVUFBSyxHQUFMLEtBQUs7Ozs7O1FBaERmLGVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FpRHRDOzs7OztJQTVDTCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsRUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUN2RixDQUFDO1lBQ0MsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1NBQ0YsQ0FBQyxFQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixJQUFJLENBQUMsVUFBVSxFQUNmLGNBQWMsQ0FDYixDQUFDO0tBQ0g7Ozs7OztJQUtELElBQ0ksTUFBTSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FDdkYsQ0FBQztZQUNDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUMxQixPQUFPLEVBQUUsTUFBTTthQUNoQjtTQUNGLENBQUMsRUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFDZixjQUFjLENBQ2IsQ0FBQztLQUNIOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7O0lBUUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUU7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7U0FDbEU7S0FDRjs7O1lBMUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1lBaEJDLFNBQVM7WUFDVCxVQUFVO1lBR0gsUUFBUTs7O3FCQTRCZCxLQUFLO3FCQXFCTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgTUVESUFfUFJJT1JJVFkgPSA5OTk7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGlkZToge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9XG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlTaG93XSwgW2x5SGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9zaG93OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nob3dDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oaWRlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGVDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgaXRlbSB3aGVuIHRoZSB2YWx1ZSBpcyByZXNvbHZlZCBhcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgbHlTaG93KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3c7XG4gIH1cbiAgc2V0IGx5U2hvdyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3Nob3cgPSB2YWw7XG4gICAgdGhpcy5fc2hvd0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlNZWRpYS1zaG93OiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+XG4gICAgKHtcbiAgICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KHZhbCldOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH1cbiAgICB9KSxcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fc2hvd0NsYXNzLFxuICAgIE1FRElBX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgaXRlbSB3aGVuIHRoZSB2YWx1ZSBpcyByZXNvbHZlZCBhcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbHlIaWRlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faGlkZSA9IHZhbDtcbiAgICB0aGlzLl9oaWRlQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseU1lZGlhLWhpZGU6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT5cbiAgICAoe1xuICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQodmFsKV06IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9XG4gICAgfSksXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX2hpZGVDbGFzcyxcbiAgICBNRURJQV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBnZXQgbHlIaWRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubHlIaWRlKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5seUhpZGUgJiYgdGhpcy5seVNob3cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlIG9ubHkgXFxgbHlIaWRlXFxgIG9yIFxcYGx5U2hvd1xcYCBwZXIgZWxlbWVudGApO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=