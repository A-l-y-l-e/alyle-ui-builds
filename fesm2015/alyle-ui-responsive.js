import { InjectionToken, Directive, Input, Inject, Renderer2, ElementRef, NgModule } from '@angular/core';
import { CoreTheme } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const LY_MEDIA_QUERIES = new InjectionToken('ly·media·queries');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MediaDirective {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} coreTheme
     * @param {?} mediaQueries
     */
    constructor(_renderer, _elementRef, coreTheme, mediaQueries) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.coreTheme = coreTheme;
        this.mediaQueries = mediaQueries;
        this.classes = {
            hide: this.coreTheme.setUpStyle('k-media-hide', 'display:none;', 'all')
        };
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set lyShow(val) {
        this._show = val;
        /** @type {?} */
        const newClass = this.coreTheme.setUpStyle(`k-media-show-${val}`, (`display: block;`), `${this.mediaQueries[val] || val}` // , InvertMediaQuery.Yes
        );
        this.coreTheme.updateClassName(this._elementRef.nativeElement, this._renderer, newClass, this._showClass);
        this._showClass = newClass;
    }
    /**
     * @return {?}
     */
    get lyShow() {
        return this._show;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set lyHide(val) {
        this._hide = val;
        /** @type {?} */
        const newClass = this.coreTheme.setUpStyle(`k-media-hide-${val}`, (`display: none !important;`), `${this.mediaQueries[val] || val}`);
        this.coreTheme.updateClassName(this._elementRef.nativeElement, this._renderer, newClass, this._hideClass);
        this._hideClass = newClass;
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
}
MediaDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lyShow], [lyHide]'
            },] },
];
/** @nocollapse */
MediaDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: CoreTheme },
    { type: undefined, decorators: [{ type: Inject, args: [LY_MEDIA_QUERIES,] }] }
];
MediaDirective.propDecorators = {
    lyShow: [{ type: Input }],
    lyHide: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ResponsiveModule {
}
ResponsiveModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MediaDirective],
                exports: [MediaDirective],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const Breakpoints = {
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
/** @type {?} */
const MediaQueries = {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MediaDirective, ResponsiveModule, LY_MEDIA_QUERIES, Breakpoints, MediaQueries };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzcG9uc2l2ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvdG9rZW5zLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9tZWRpYS9tZWRpYS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9yZXNwb25zaXZlL3Jlc3BvbnNpdmUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9tZWRpYS1xdWVyaWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBMWV9NRURJQV9RVUVSSUVTID0gbmV3IEluamVjdGlvblRva2VuPEx5TWVkaWFRdWVyaWVzPignbHnDgsK3bWVkaWHDgsK3cXVlcmllcycpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5TWVkaWFRdWVyaWVzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTFlfTUVESUFfUVVFUklFUyB9IGZyb20gJy4uL3Rva2Vucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVNob3ddLCBbbHlIaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9zaG93OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nob3dDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oaWRlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGVDbGFzczogc3RyaW5nO1xuICBjbGFzc2VzID0ge1xuICAgIGhpZGU6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ2stbWVkaWEtaGlkZScsICdkaXNwbGF5Om5vbmU7JywgJ2FsbCcpXG4gIH07XG5cbiAgQElucHV0KClcbiAgc2V0IGx5U2hvdyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3Nob3cgPSB2YWw7XG4gICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKGBrLW1lZGlhLXNob3ctJHt2YWx9YCxcbiAgICAoXG4gICAgICBgZGlzcGxheTogYmxvY2s7YFxuICAgIClcbiAgICAsXG4gICAgYCR7dGhpcy5tZWRpYVF1ZXJpZXNbdmFsXSB8fCB2YWx9YC8vICwgSW52ZXJ0TWVkaWFRdWVyeS5ZZXNcbiAgICApO1xuICAgIHRoaXMuY29yZVRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3JlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fc2hvd0NsYXNzKTtcbiAgICB0aGlzLl9zaG93Q2xhc3MgPSBuZXdDbGFzcztcbiAgfVxuXG4gIGdldCBseVNob3coKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBseUhpZGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9oaWRlID0gdmFsO1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShgay1tZWRpYS1oaWRlLSR7dmFsfWAsXG4gICAgKFxuICAgICAgYGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtgXG4gICAgKVxuICAgICxcbiAgICBgJHt0aGlzLm1lZGlhUXVlcmllc1t2YWxdIHx8IHZhbH1gXG4gICAgKTtcbiAgICB0aGlzLmNvcmVUaGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX2hpZGVDbGFzcyk7XG4gICAgdGhpcy5faGlkZUNsYXNzID0gbmV3Q2xhc3M7XG4gIH1cblxuICBnZXQgbHlIaWRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgICBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIHByaXZhdGUgbWVkaWFRdWVyaWVzOiBhbnksIC8vIHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9XG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmx5SGlkZSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBSZXNwb25zaXZlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWRpYURpcmVjdGl2ZSB9IGZyb20gJy4vbWVkaWEvbWVkaWEuZGlyZWN0aXZlJztcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbnNpdmVQcm92aWRlckZhY3RvcnkoXG4vLyAgIHBhcmVudDogUmVzcG9uc2l2ZSwgbmdab25lOiBOZ1pvbmUsIHBsYXRmb3JtSWQ6IE9iamVjdCk6IFJlc3BvbnNpdmUge1xuLy8gcmV0dXJuIHBhcmVudCB8fCBuZXcgUmVzcG9uc2l2ZShuZ1pvbmUsIHBsYXRmb3JtSWQpO1xuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgcmVzcG9uc2l2ZVByb3ZpZGVyOiBQcm92aWRlciA9IHtcbi8vICAgcHJvdmlkZTogUmVzcG9uc2l2ZSxcbi8vICAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFJlc3BvbnNpdmVdLCBOZ1pvbmUsIFBMQVRGT1JNX0lEXSxcbi8vICAgdXNlRmFjdG9yeTogcmVzcG9uc2l2ZVByb3ZpZGVyRmFjdG9yeVxuLy8gfTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWVkaWFEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTWVkaWFEaXJlY3RpdmVdLFxuICAvLyBwcm92aWRlcnM6IFtyZXNwb25zaXZlUHJvdmlkZXJdXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVNb2R1bGUgeyB9XG4iLCJleHBvcnQgY29uc3QgQnJlYWtwb2ludHMgPSB7XG4gIFhTbWFsbDogJyhtYXgtd2lkdGg6IDU5OXB4KScsXG4gIFNtYWxsOiAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknLFxuICBNZWRpdW06ICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCknLFxuICBMYXJnZTogJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCknLFxuICBYTGFyZ2U6ICcobWluLXdpZHRoOiAxOTIwcHgpJyxcblxuICBIYW5kc2V0OiAnKG1heC13aWR0aDogNTk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgJyArXG4gICAgICAgICAgICcobWF4LXdpZHRoOiA5NTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFRhYmxldDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODM5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgJyArXG4gICAgICAgICAgJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgV2ViOiAnKG1pbi13aWR0aDogODQwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgJyArXG4gICAgICAgJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG5cbiAgSGFuZHNldFBvcnRyYWl0OiAnKG1heC13aWR0aDogNTk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gIFRhYmxldFBvcnRyYWl0OiAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MzlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgV2ViUG9ydHJhaXQ6ICcobWluLXdpZHRoOiA4NDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcblxuICBIYW5kc2V0TGFuZHNjYXBlOiAnKG1heC13aWR0aDogOTU5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBUYWJsZXRMYW5kc2NhcGU6ICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFdlYkxhbmRzY2FwZTogJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG59O1xuXG5leHBvcnQgY29uc3QgTWVkaWFRdWVyaWVzID0ge1xuICAneHMnOiAnKG1heC13aWR0aDogNTk5cHgpJyxcbiAgJ3NtJzogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJyxcbiAgJ21kJzogJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KScsXG4gICdsZyc6ICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJyxcbiAgJ3hsJzogJyhtaW4td2lkdGg6IDE5MjBweCkgYW5kIChtYXgtd2lkdGg6IDUwMDBweCknLFxuICAnbHQtc20nOiAnKG1heC13aWR0aDogNTk5cHgpJyxcbiAgJ2x0LW1kJzogJyhtYXgtd2lkdGg6IDk1OXB4KScsXG4gICdsdC1sZyc6ICcobWF4LXdpZHRoOiAxMjc5cHgpJyxcbiAgJ2x0LXhsJzogJyhtYXgtd2lkdGg6IDE5MTlweCknLFxuICAnZ3QteHMnOiAnKG1pbi13aWR0aDogNjAwcHgpJyxcbiAgJ2d0LXNtJzogJyhtaW4td2lkdGg6IDk2MHB4KScsXG4gICdndC1tZCc6ICcobWluLXdpZHRoOiAxMjgwcHgpJyxcbiAgJ2d0LWxnJzogJyhtaW4td2lkdGg6IDE5MjBweCknXG59O1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBLE1BQWEsZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQWlCLGtCQUFrQixDQUFDOzs7Ozs7QUNGdEY7Ozs7Ozs7SUE0REUsWUFDVSxXQUNBLGFBQ0EsV0FDMEIsWUFBaUI7UUFIM0MsY0FBUyxHQUFULFNBQVM7UUFDVCxnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUztRQUNpQixpQkFBWSxHQUFaLFlBQVksQ0FBSzt1QkE1QzNDO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDO1NBQ3hFO0tBMkNJOzs7OztJQXpDTCxJQUNJLE1BQU0sQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDOztRQUNqQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLEdBRTlELGlCQUFpQixHQUduQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFO1NBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFB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