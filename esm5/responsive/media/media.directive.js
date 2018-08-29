/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, Inject, Renderer2, ElementRef } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '../tokens';
/** @type {?} */
var MEDIA_PRIORITY = 999;
/** @type {?} */
var styles = {
    hide: {
        display: 'none'
    }
};
var MediaDirective = /** @class */ (function () {
    function MediaDirective(_renderer, _elementRef, theme, mediaQueries) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.theme = theme;
        this.mediaQueries = mediaQueries;
        /**
         * Styles
         * @ignore
         */
        this.classes = this.theme.addStyleSheet(styles, 'lyMedia');
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
            var _a;
            this._show = val;
            this._showClass = this.theme.addStyle("lyMedia-show:" + val, (_a = {},
                _a["@media " + (this.mediaQueries[val] || val)] = {
                    display: "block"
                },
                _a), this._elementRef.nativeElement, this._showClass, MEDIA_PRIORITY);
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
            var _a;
            this._hide = val;
            this._hideClass = this.theme.addStyle("lyMedia-hide:" + val, (_a = {},
                _a["@media " + (this.mediaQueries[val] || val)] = {
                    display: 'none'
                },
                _a), this._elementRef.nativeElement, this._hideClass, MEDIA_PRIORITY);
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
                },] },
    ];
    /** @nocollapse */
    MediaDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: LyTheme2 },
        { type: undefined, decorators: [{ type: Inject, args: [LY_MEDIA_QUERIES,] }] }
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
    /** @type {?} */
    MediaDirective.prototype.mediaQueries;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvIiwic291cmNlcyI6WyJtZWRpYS9tZWRpYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUU3QyxJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7O0FBRTNCLElBQU0sTUFBTSxHQUFHO0lBQ2IsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07S0FDaEI7Q0FDRixDQUFDOztJQTREQSx3QkFDVSxXQUNBLGFBQ0EsT0FDMEIsWUFBaUI7UUFIM0MsY0FBUyxHQUFULFNBQVM7UUFDVCxnQkFBVyxHQUFYLFdBQVc7UUFDWCxVQUFLLEdBQUwsS0FBSztRQUNxQixpQkFBWSxHQUFaLFlBQVksQ0FBSzs7Ozs7dUJBakQzQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO0tBa0RoRDtJQTdDTCxzQkFDSSxrQ0FBTTtRQUpWOztXQUVHOzs7OztRQUNIO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQUNELFVBQVcsR0FBVzs7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBZ0IsR0FBSztnQkFFekQsR0FBQyxhQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFFLElBQUc7b0JBQzNDLE9BQU8sRUFBRSxPQUFPO2lCQUNqQjtxQkFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFDZixjQUFjLENBQ2IsQ0FBQztTQUNIOzs7T0FiQTtJQWtCRCxzQkFDSSxrQ0FBTTs7OztRQWNWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25CO1FBcEJEOztXQUVHOzs7Ozs7UUFDSCxVQUNXLEdBQVc7O1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWdCLEdBQUs7Z0JBRXpELEdBQUMsYUFBVSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBRSxJQUFHO29CQUMzQyxPQUFPLEVBQUUsTUFBTTtpQkFDaEI7cUJBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQzlCLElBQUksQ0FBQyxVQUFVLEVBQ2YsY0FBYyxDQUNiLENBQUM7U0FDSDs7O09BQUE7Ozs7SUFhRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVFO0tBQ0Y7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUErQyxDQUFDLENBQUM7U0FDbEU7S0FDRjs7Z0JBM0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjs7OztnQkFqQkMsU0FBUztnQkFDVCxVQUFVO2dCQUdILFFBQVE7Z0RBeUVaLE1BQU0sU0FBQyxnQkFBZ0I7Ozt5QkE1Q3pCLEtBQUs7eUJBcUJMLEtBQUs7O3lCQTVEUjs7U0F3QmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBJbmplY3QsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTFlfTUVESUFfUVVFUklFUyB9IGZyb20gJy4uL3Rva2Vucyc7XG5cbmNvbnN0IE1FRElBX1BSSU9SSVRZID0gOTk5O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhpZGU6IHtcbiAgICBkaXNwbGF5OiAnbm9uZSdcbiAgfVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5U2hvd10sIFtseUhpZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBNZWRpYURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfc2hvdzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG93Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGlkZTogc3RyaW5nO1xuICBwcml2YXRlIF9oaWRlQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogU3R5bGVzXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlNZWRpYScpO1xuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgaXRlbSB3aGVuIHRoZSB2YWx1ZSBpcyByZXNvbHZlZCBhcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgbHlTaG93KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3c7XG4gIH1cbiAgc2V0IGx5U2hvdyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3Nob3cgPSB2YWw7XG4gICAgdGhpcy5fc2hvd0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlNZWRpYS1zaG93OiR7dmFsfWAsXG4gICAge1xuICAgICAgW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1t2YWxdIHx8IHZhbH1gXToge1xuICAgICAgICBkaXNwbGF5OiBgYmxvY2tgXG4gICAgICB9XG4gICAgfSxcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fc2hvd0NsYXNzLFxuICAgIE1FRElBX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgaXRlbSB3aGVuIHRoZSB2YWx1ZSBpcyByZXNvbHZlZCBhcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbHlIaWRlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faGlkZSA9IHZhbDtcbiAgICB0aGlzLl9oaWRlQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseU1lZGlhLWhpZGU6JHt2YWx9YCxcbiAgICB7XG4gICAgICBbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW3ZhbF0gfHwgdmFsfWBdOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfVxuICAgIH0sXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX2hpZGVDbGFzcyxcbiAgICBNRURJQV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBnZXQgbHlIaWRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBwcml2YXRlIG1lZGlhUXVlcmllczogYW55LCAvLyB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5seUhpZGUpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmx5SGlkZSAmJiB0aGlzLmx5U2hvdykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1c2Ugb25seSBcXGBseUhpZGVcXGAgb3IgXFxgbHlTaG93XFxgIHBlciBlbGVtZW50YCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==