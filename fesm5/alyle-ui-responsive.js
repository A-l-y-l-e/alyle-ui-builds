import { InjectionToken, Directive, Input, Inject, Renderer2, ElementRef, NgModule } from '@angular/core';
import { CoreTheme } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LY_MEDIA_QUERIES = new InjectionToken('ly·media·queries');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
            var /** @type {?} */ newClass = this.coreTheme.setUpStyle("k-media-show-" + val, ("display: block;"), "" + (this.mediaQueries[val] || val) // , InvertMediaQuery.Yes
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
            var /** @type {?} */ newClass = this.coreTheme.setUpStyle("k-media-hide-" + val, ("display: none !important;"), "" + (this.mediaQueries[val] || val));
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
        { type: Renderer2, },
        { type: ElementRef, },
        { type: CoreTheme, },
        { type: undefined, decorators: [{ type: Inject, args: [LY_MEDIA_QUERIES,] },] },
    ]; };
    MediaDirective.propDecorators = {
        "lyShow": [{ type: Input },],
        "lyHide": [{ type: Input },],
    };
    return MediaDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResponsiveModule = /** @class */ (function () {
    function ResponsiveModule() {
    }
    ResponsiveModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [MediaDirective],
                    exports: [MediaDirective],
                },] },
    ];
    return ResponsiveModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ Breakpoints = {
    XSmall: '(max-width: 599px)',
    Small: '(min-width: 600px) and (max-width: 959px)',
    Medium: '(min-width: 960px) and (max-width: 1279px)',
    Large: '(min-width: 1280px) and (max-width: 1919px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599px) and (orientation: portrait), ' +
        '(max-width: 959px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};
var /** @type {?} */ MediaQueries = {
    'xs': '(max-width: 599px)',
    'sm': '(min-width: 600px) and (max-width: 959px)',
    'md': '(min-width: 960px) and (max-width: 1279px)',
    'lg': '(min-width: 1280px) and (max-width: 1919px)',
    'xl': '(min-width: 1920px) and (max-width: 5000px)',
    'lt-sm': '(max-width: 599px)',
    'lt-md': '(max-width: 959px)',
    'lt-lg': '(max-width: 1279px)',
    'lt-xl': '(max-width: 1919px)',
    'gt-xs': '(min-width: 600px)',
    'gt-sm': '(min-width: 960px)',
    'gt-md': '(min-width: 1280px)',
    'gt-lg': '(min-width: 1920px)'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MediaDirective, ResponsiveModule, LY_MEDIA_QUERIES, Breakpoints, MediaQueries };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzcG9uc2l2ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvdG9rZW5zLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9tZWRpYS9tZWRpYS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9yZXNwb25zaXZlL3Jlc3BvbnNpdmUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9tZWRpYS1xdWVyaWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBMWV9NRURJQV9RVUVSSUVTID0gbmV3IEluamVjdGlvblRva2VuPEx5TWVkaWFRdWVyaWVzPignbHnDgsK3bWVkaWHDgsK3cXVlcmllcycpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5TWVkaWFRdWVyaWVzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTFlfTUVESUFfUVVFUklFUyB9IGZyb20gJy4uL3Rva2Vucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVNob3ddLCBbbHlIaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9zaG93OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nob3dDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oaWRlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGVDbGFzczogc3RyaW5nO1xuICBjbGFzc2VzID0ge1xuICAgIGhpZGU6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2stbWVkaWEtaGlkZScsICdkaXNwbGF5Om5vbmU7JywgJ2FsbCcpXG4gIH07XG5cbiAgQElucHV0KClcbiAgc2V0IGx5U2hvdyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3Nob3cgPSB2YWw7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKGBrLW1lZGlhLXNob3ctJHt2YWx9YCxcbiAgICAoXG4gICAgICBgZGlzcGxheTogYmxvY2s7YFxuICAgIClcbiAgICAsXG4gICAgYCR7dGhpcy5tZWRpYVF1ZXJpZXNbdmFsXSB8fCB2YWx9YC8vICwgSW52ZXJ0TWVkaWFRdWVyeS5ZZXNcbiAgICApO1xuICAgIHRoaXMuY29yZVRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fc2hvd0NsYXNzKTtcbiAgICB0aGlzLl9zaG93Q2xhc3MgPSBuZXdDbGFzcztcbiAgfVxuXG4gIGdldCBseVNob3coKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBseUhpZGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9oaWRlID0gdmFsO1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShgay1tZWRpYS1oaWRlLSR7dmFsfWAsXG4gICAgKFxuICAgICAgYGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtgXG4gICAgKVxuICAgICxcbiAgICBgJHt0aGlzLm1lZGlhUXVlcmllc1t2YWxdIHx8IHZhbH1gXG4gICAgKTtcbiAgICB0aGlzLmNvcmVUaGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2hpZGVDbGFzcyk7XG4gICAgdGhpcy5faGlkZUNsYXNzID0gbmV3Q2xhc3M7XG4gIH1cblxuICBnZXQgbHlIaWRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIHByaXZhdGUgbWVkaWFRdWVyaWVzOiBhbnksIC8vIHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9XG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmx5SGlkZSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOZ1pvbmUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFNraXBTZWxmLCBPcHRpb25hbCwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IFJlc3BvbnNpdmUgfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lZGlhRGlyZWN0aXZlIH0gZnJvbSAnLi9tZWRpYS9tZWRpYS5kaXJlY3RpdmUnO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gcmVzcG9uc2l2ZVByb3ZpZGVyRmFjdG9yeShcbi8vICAgcGFyZW50OiBSZXNwb25zaXZlLCBuZ1pvbmU6IE5nWm9uZSwgcGxhdGZvcm1JZDogT2JqZWN0KTogUmVzcG9uc2l2ZSB7XG4vLyByZXR1cm4gcGFyZW50IHx8IG5ldyBSZXNwb25zaXZlKG5nWm9uZSwgcGxhdGZvcm1JZCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCByZXNwb25zaXZlUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuLy8gICBwcm92aWRlOiBSZXNwb25zaXZlLFxuLy8gICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgUmVzcG9uc2l2ZV0sIE5nWm9uZSwgUExBVEZPUk1fSURdLFxuLy8gICB1c2VGYWN0b3J5OiByZXNwb25zaXZlUHJvdmlkZXJGYWN0b3J5XG4vLyB9O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNZWRpYURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtNZWRpYURpcmVjdGl2ZV0sXG4gIC8vIHByb3ZpZGVyczogW3Jlc3BvbnNpdmVQcm92aWRlcl1cbn0pXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZU1vZHVsZSB7IH1cbiIsImV4cG9ydCBjb25zdCBCcmVha3BvaW50cyA9IHtcbiAgWFNtYWxsOiAnKG1heC13aWR0aDogNTk5cHgpJyxcbiAgU21hbGw6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KScsXG4gIE1lZGl1bTogJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KScsXG4gIExhcmdlOiAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KScsXG4gIFhMYXJnZTogJyhtaW4td2lkdGg6IDE5MjBweCknLFxuXG4gIEhhbmRzZXQ6ICcobWF4LXdpZHRoOiA1OTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAnICtcbiAgICAgICAgICAgJyhtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgVGFibGV0OiAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MzlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAnICtcbiAgICAgICAgICAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBXZWI6ICcobWluLXdpZHRoOiA4NDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAnICtcbiAgICAgICAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcblxuICBIYW5kc2V0UG9ydHJhaXQ6ICcobWF4LXdpZHRoOiA1OTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgVGFibGV0UG9ydHJhaXQ6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgzOXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICBXZWJQb3J0cmFpdDogJyhtaW4td2lkdGg6IDg0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuXG4gIEhhbmRzZXRMYW5kc2NhcGU6ICcobWF4LXdpZHRoOiA5NTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFRhYmxldExhbmRzY2FwZTogJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgV2ViTGFuZHNjYXBlOiAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbn07XG5cbmV4cG9ydCBjb25zdCBNZWRpYVF1ZXJpZXMgPSB7XG4gICd4cyc6ICcobWF4LXdpZHRoOiA1OTlweCknLFxuICAnc20nOiAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknLFxuICAnbWQnOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJyxcbiAgJ2xnJzogJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCknLFxuICAneGwnOiAnKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KScsXG4gICdsdC1zbSc6ICcobWF4LXdpZHRoOiA1OTlweCknLFxuICAnbHQtbWQnOiAnKG1heC13aWR0aDogOTU5cHgpJyxcbiAgJ2x0LWxnJzogJyhtYXgtd2lkdGg6IDEyNzlweCknLFxuICAnbHQteGwnOiAnKG1heC13aWR0aDogMTkxOXB4KScsXG4gICdndC14cyc6ICcobWluLXdpZHRoOiA2MDBweCknLFxuICAnZ3Qtc20nOiAnKG1pbi13aWR0aDogOTYwcHgpJyxcbiAgJ2d0LW1kJzogJyhtaW4td2lkdGg6IDEyODBweCknLFxuICAnZ3QtbGcnOiAnKG1pbi13aWR0aDogMTkyMHB4KSdcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHFCQUVhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFpQixrQkFBa0IsQ0FBQzs7Ozs7O0FDRnRGO0lBNERFLHdCQUNVLFdBQ0EsYUFDQSxXQUMwQjtRQUgxQixjQUFTLEdBQVQsU0FBUztRQUNULGdCQUFXLEdBQVgsV0FBVztRQUNYLGNBQVMsR0FBVCxTQUFTO1FBQ2lCLGlCQUFZLEdBQVosWUFBWTt1QkE1Q3RDO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDO1NBQ3hFO0tBMkNJOzBCQXhDRCxrQ0FBTTs7OztRQWFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztrQkFmVSxHQUFXO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxrQkFBZ0IsR0FBSyxHQUU5RCxpQkFBaUIsR0FHbkIsTUFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBRTthQUNqQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENB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