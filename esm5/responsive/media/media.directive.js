/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, Inject, Renderer2, ElementRef } from '@angular/core';
import { CoreTheme } from '@alyle/ui';
import { LY_MEDIA_QUERIES } from '../tokens';
var MediaDirective = /** @class */ (function () {
    function MediaDirective(_renderer, _elementRef, coreTheme, mediaQueries) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.coreTheme = coreTheme;
        this.mediaQueries = mediaQueries;
        this.classes = {
            hide: this.coreTheme.setUpStyle('k-media-hide', 'display:none;', 'all')
        };
    }
    Object.defineProperty(MediaDirective.prototype, "lyShow", {
        get: /**
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
            /** @type {?} */
            var newClass = this.coreTheme.setUpStyle("k-media-show-" + val, ("display: block;"), "" + (this.mediaQueries[val] || val) // , InvertMediaQuery.Yes
            );
            this.coreTheme.updateClassName(this._elementRef.nativeElement, this._renderer, newClass, this._showClass);
            this._showClass = newClass;
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
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hide = val;
            /** @type {?} */
            var newClass = this.coreTheme.setUpStyle("k-media-hide-" + val, ("display: none !important;"), "" + (this.mediaQueries[val] || val));
            this.coreTheme.updateClassName(this._elementRef.nativeElement, this._renderer, newClass, this._hideClass);
            this._hideClass = newClass;
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
    MediaDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lyShow], [lyHide]'
                },] },
    ];
    /** @nocollapse */
    MediaDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: CoreTheme },
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
    /** @type {?} */
    MediaDirective.prototype.classes;
    /** @type {?} */
    MediaDirective.prototype._renderer;
    /** @type {?} */
    MediaDirective.prototype._elementRef;
    /** @type {?} */
    MediaDirective.prototype.coreTheme;
    /** @type {?} */
    MediaDirective.prototype.mediaQueries;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvIiwic291cmNlcyI6WyJtZWRpYS9tZWRpYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDOztJQWtEM0Msd0JBQ1UsV0FDQSxhQUNBLFdBQzBCLFlBQWlCO1FBSDNDLGNBQVMsR0FBVCxTQUFTO1FBQ1QsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsY0FBUyxHQUFULFNBQVM7UUFDaUIsaUJBQVksR0FBWixZQUFZLENBQUs7dUJBNUMzQztZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQztTQUN4RTtLQTJDSTtJQXpDTCxzQkFDSSxrQ0FBTTs7OztRQWFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQWhCRCxVQUNXLEdBQVc7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7O1lBQ2pCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGtCQUFnQixHQUFLLEVBQ2hFLENBQ0UsaUJBQWlCLENBQ2xCLEVBRUQsTUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBRSxDQUFBLHlCQUF5QjthQUMxRCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzFHLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1NBQzVCOzs7T0FBQTtJQU1ELHNCQUNJLGtDQUFNOzs7O1FBYVY7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBaEJELFVBQ1csR0FBVztZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzs7WUFDakIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsa0JBQWdCLEdBQUssRUFDaEUsQ0FDRSwyQkFBMkIsQ0FDNUIsRUFFRCxNQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFFLENBQ2pDLENBQUM7WUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7U0FDNUI7OztPQUFBOzs7O0lBYUQsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RTtLQUNGOztnQkEzREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7O2dCQVRDLFNBQVM7Z0JBQ1QsVUFBVTtnQkFHSCxTQUFTO2dEQXVEYixNQUFNLFNBQUMsZ0JBQWdCOzs7eUJBeEN6QixLQUFLO3lCQWtCTCxLQUFLOzt5QkExQ1I7O1NBZWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvcmVUaGVtZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnLi4vdG9rZW5zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5U2hvd10sIFtseUhpZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBNZWRpYURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX3Nob3c6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2hvd0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGlkZUNsYXNzOiBzdHJpbmc7XG4gIGNsYXNzZXMgPSB7XG4gICAgaGlkZTogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgnay1tZWRpYS1oaWRlJywgJ2Rpc3BsYXk6bm9uZTsnLCAnYWxsJylcbiAgfTtcblxuICBASW5wdXQoKVxuICBzZXQgbHlTaG93KHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2hvdyA9IHZhbDtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoYGstbWVkaWEtc2hvdy0ke3ZhbH1gLFxuICAgIChcbiAgICAgIGBkaXNwbGF5OiBibG9jaztgXG4gICAgKVxuICAgICxcbiAgICBgJHt0aGlzLm1lZGlhUXVlcmllc1t2YWxdIHx8IHZhbH1gLy8gLCBJbnZlcnRNZWRpYVF1ZXJ5Llllc1xuICAgICk7XG4gICAgdGhpcy5jb3JlVGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9zaG93Q2xhc3MpO1xuICAgIHRoaXMuX3Nob3dDbGFzcyA9IG5ld0NsYXNzO1xuICB9XG5cbiAgZ2V0IGx5U2hvdygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaG93O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGx5SGlkZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2hpZGUgPSB2YWw7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKGBrLW1lZGlhLWhpZGUtJHt2YWx9YCxcbiAgICAoXG4gICAgICBgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O2BcbiAgICApXG4gICAgLFxuICAgIGAke3RoaXMubWVkaWFRdWVyaWVzW3ZhbF0gfHwgdmFsfWBcbiAgICApO1xuICAgIHRoaXMuY29yZVRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5faGlkZUNsYXNzKTtcbiAgICB0aGlzLl9oaWRlQ2xhc3MgPSBuZXdDbGFzcztcbiAgfVxuXG4gIGdldCBseUhpZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNvcmVUaGVtZTogQ29yZVRoZW1lLFxuICAgIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgcHJpdmF0ZSBtZWRpYVF1ZXJpZXM6IGFueSwgLy8geyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH1cbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubHlIaWRlKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG4gIH1cblxufVxuIl19