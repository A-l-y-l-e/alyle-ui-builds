/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
/** @type {?} */
var MEDIA_PRIORITY = 999;
/** @type {?} */
var styles = {
    hide: {
        display: 'none'
    }
};
var MediaDirective = /** @class */ (function () {
    function MediaDirective(_renderer, _elementRef, theme) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.theme = theme;
        /**
         * Styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles);
    }
    Object.defineProperty(MediaDirective.prototype, "lyShow", {
        /**
         * Shows the item when the value is resolved as true
         */
        get: /**
         * Shows the item when the value is resolved as true
         * @return {?}
         */
        function () {
            return this._show;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._show = val;
            this._showClass = this.theme.addStyle("lyMedia-show:" + val, function (theme) {
                var _a;
                return (_a = {},
                    _a[theme.getBreakpoint(val)] = {
                        display: 'block'
                    },
                    _a);
            }, this._elementRef.nativeElement, this._showClass, MEDIA_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaDirective.prototype, "lyHide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hide;
        },
        /**
         * Hides the item when the value is resolved as true
         */
        set: /**
         * Hides the item when the value is resolved as true
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hide = val;
            this._hideClass = this.theme.addStyle("lyMedia-hide:" + val, function (theme) {
                var _a;
                return (_a = {},
                    _a[theme.getBreakpoint(val)] = {
                        display: 'none'
                    },
                    _a);
            }, this._elementRef.nativeElement, this._hideClass, MEDIA_PRIORITY);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MediaDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.lyHide) {
            this._renderer.addClass(this._elementRef.nativeElement, this.classes.hide);
        }
    };
    /**
     * @return {?}
     */
    MediaDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.lyHide && this.lyShow) {
            throw new Error("use only `lyHide` or `lyShow` per element");
        }
    };
    MediaDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lyShow], [lyHide]'
                },] }
    ];
    /** @nocollapse */
    MediaDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 }
    ]; };
    MediaDirective.propDecorators = {
        lyShow: [{ type: Input }],
        lyHide: [{ type: Input }]
    };
    return MediaDirective;
}());
export { MediaDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvIiwic291cmNlcyI6WyJtZWRpYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBa0IsTUFBTSxXQUFXLENBQUM7O0lBRS9DLGNBQWMsR0FBRyxHQUFHOztJQUVwQixNQUFNLEdBQUc7SUFDYixJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsTUFBTTtLQUNoQjtDQUNGO0FBRUQ7SUEwREUsd0JBQ1UsU0FBb0IsRUFDcEIsV0FBdUIsRUFDdkIsS0FBZTtRQUZmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBVTs7Ozs7UUFoRHpCLFlBQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQWlEdkMsQ0FBQztJQTVDTCxzQkFDSSxrQ0FBTTtRQUpWOztXQUVHOzs7OztRQUNIO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBQ0QsVUFBVyxHQUFXO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWdCLEdBQUssRUFBRSxVQUFDLEtBQXFCOztnQkFDbkYsT0FBQTtvQkFDRSxHQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUc7d0JBQzFCLE9BQU8sRUFBRSxPQUFPO3FCQUNqQjt1QkFDRDtZQUpGLENBSUUsRUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFDZixjQUFjLENBQ2IsQ0FBQztRQUNKLENBQUM7OztPQWJBO0lBa0JELHNCQUNJLGtDQUFNOzs7O1FBY1Y7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQztRQXBCRDs7V0FFRzs7Ozs7O1FBQ0gsVUFDVyxHQUFXO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWdCLEdBQUssRUFBRSxVQUFDLEtBQXFCOztnQkFDbkYsT0FBQTtvQkFDRSxHQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUc7d0JBQzFCLE9BQU8sRUFBRSxNQUFNO3FCQUNoQjt1QkFDRDtZQUpGLENBSUUsRUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFDZixjQUFjLENBQ2IsQ0FBQztRQUNKLENBQUM7OztPQUFBOzs7O0lBWUQsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RTtJQUNILENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUErQyxDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDOztnQkExRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7O2dCQWhCQyxTQUFTO2dCQUNULFVBQVU7Z0JBR0gsUUFBUTs7O3lCQTRCZCxLQUFLO3lCQXFCTCxLQUFLOztJQXFDUixxQkFBQztDQUFBLEFBNUVELElBNEVDO1NBekVZLGNBQWM7OztJQUN6QiwrQkFBc0I7O0lBQ3RCLG9DQUEyQjs7SUFDM0IsK0JBQXNCOztJQUN0QixvQ0FBMkI7Ozs7OztJQU0zQixpQ0FBMkM7O0lBOEN6QyxtQ0FBNEI7O0lBQzVCLHFDQUErQjs7SUFDL0IsK0JBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgTUVESUFfUFJJT1JJVFkgPSA5OTk7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGlkZToge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9XG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlTaG93XSwgW2x5SGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9zaG93OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nob3dDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oaWRlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGVDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgaXRlbSB3aGVuIHRoZSB2YWx1ZSBpcyByZXNvbHZlZCBhcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgbHlTaG93KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3c7XG4gIH1cbiAgc2V0IGx5U2hvdyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3Nob3cgPSB2YWw7XG4gICAgdGhpcy5fc2hvd0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlNZWRpYS1zaG93OiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+XG4gICAgKHtcbiAgICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KHZhbCldOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH1cbiAgICB9KSxcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fc2hvd0NsYXNzLFxuICAgIE1FRElBX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgaXRlbSB3aGVuIHRoZSB2YWx1ZSBpcyByZXNvbHZlZCBhcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbHlIaWRlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faGlkZSA9IHZhbDtcbiAgICB0aGlzLl9oaWRlQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseU1lZGlhLWhpZGU6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT5cbiAgICAoe1xuICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQodmFsKV06IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9XG4gICAgfSksXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX2hpZGVDbGFzcyxcbiAgICBNRURJQV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBnZXQgbHlIaWRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubHlIaWRlKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5seUhpZGUgJiYgdGhpcy5seVNob3cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlIG9ubHkgXFxgbHlIaWRlXFxgIG9yIFxcYGx5U2hvd1xcYCBwZXIgZWxlbWVudGApO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=