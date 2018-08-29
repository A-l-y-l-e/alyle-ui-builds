import { InjectionToken, Directive, Input, Inject, Renderer2, ElementRef, NgModule } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

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
/** @type {?} */
const MEDIA_PRIORITY = 999;
/** @type {?} */
const styles = {
    hide: {
        display: 'none'
    }
};
class MediaDirective {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} theme
     * @param {?} mediaQueries
     */
    constructor(_renderer, _elementRef, theme, mediaQueries) {
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
        this._showClass = this.theme.addStyle(`lyMedia-show:${val}`, {
            [`@media ${this.mediaQueries[val] || val}`]: {
                display: `block`
            }
        }, this._elementRef.nativeElement, this._showClass, MEDIA_PRIORITY);
    }
    /**
     * Hides the item when the value is resolved as true
     * @param {?} val
     * @return {?}
     */
    set lyHide(val) {
        this._hide = val;
        this._hideClass = this.theme.addStyle(`lyMedia-hide:${val}`, {
            [`@media ${this.mediaQueries[val] || val}`]: {
                display: 'none'
            }
        }, this._elementRef.nativeElement, this._hideClass, MEDIA_PRIORITY);
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
            },] },
];
/** @nocollapse */
MediaDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: LyTheme2 },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzcG9uc2l2ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvdG9rZW5zLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9tZWRpYS9tZWRpYS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9yZXNwb25zaXZlL3Jlc3BvbnNpdmUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9tZWRpYS1xdWVyaWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBMWV9NRURJQV9RVUVSSUVTID0gbmV3IEluamVjdGlvblRva2VuPEx5TWVkaWFRdWVyaWVzPignbHnDgsK3bWVkaWHDgsK3cXVlcmllcycpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5TWVkaWFRdWVyaWVzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICcuLi90b2tlbnMnO1xuXG5jb25zdCBNRURJQV9QUklPUklUWSA9IDk5OTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoaWRlOiB7XG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH1cbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVNob3ddLCBbbHlIaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3Nob3c6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2hvd0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGlkZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5TWVkaWEnKTtcblxuICAvKipcbiAgICogU2hvd3MgdGhlIGl0ZW0gd2hlbiB0aGUgdmFsdWUgaXMgcmVzb2x2ZWQgYXMgdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGx5U2hvdygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaG93O1xuICB9XG4gIHNldCBseVNob3codmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaG93ID0gdmFsO1xuICAgIHRoaXMuX3Nob3dDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5TWVkaWEtc2hvdzoke3ZhbH1gLFxuICAgIHtcbiAgICAgIFtgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbdmFsXSB8fCB2YWx9YF06IHtcbiAgICAgICAgZGlzcGxheTogYGJsb2NrYFxuICAgICAgfVxuICAgIH0sXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX3Nob3dDbGFzcyxcbiAgICBNRURJQV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgdGhlIGl0ZW0gd2hlbiB0aGUgdmFsdWUgaXMgcmVzb2x2ZWQgYXMgdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGx5SGlkZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2hpZGUgPSB2YWw7XG4gICAgdGhpcy5faGlkZUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlNZWRpYS1oaWRlOiR7dmFsfWAsXG4gICAge1xuICAgICAgW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1t2YWxdIHx8IHZhbH1gXToge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl9oaWRlQ2xhc3MsXG4gICAgTUVESUFfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgZ2V0IGx5SGlkZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9oaWRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgcHJpdmF0ZSBtZWRpYVF1ZXJpZXM6IGFueSwgLy8geyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH1cbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubHlIaWRlKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5seUhpZGUgJiYgdGhpcy5seVNob3cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlIG9ubHkgXFxgbHlIaWRlXFxgIG9yIFxcYGx5U2hvd1xcYCBwZXIgZWxlbWVudGApO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgUmVzcG9uc2l2ZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFEaXJlY3RpdmUgfSBmcm9tICcuL21lZGlhL21lZGlhLmRpcmVjdGl2ZSc7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZXNwb25zaXZlUHJvdmlkZXJGYWN0b3J5KFxuLy8gICBwYXJlbnQ6IFJlc3BvbnNpdmUsIG5nWm9uZTogTmdab25lLCBwbGF0Zm9ybUlkOiBPYmplY3QpOiBSZXNwb25zaXZlIHtcbi8vIHJldHVybiBwYXJlbnQgfHwgbmV3IFJlc3BvbnNpdmUobmdab25lLCBwbGF0Zm9ybUlkKTtcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4vLyAgIHByb3ZpZGU6IFJlc3BvbnNpdmUsXG4vLyAgIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBSZXNwb25zaXZlXSwgTmdab25lLCBQTEFURk9STV9JRF0sXG4vLyAgIHVzZUZhY3Rvcnk6IHJlc3BvbnNpdmVQcm92aWRlckZhY3Rvcnlcbi8vIH07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01lZGlhRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW01lZGlhRGlyZWN0aXZlXSxcbiAgLy8gcHJvdmlkZXJzOiBbcmVzcG9uc2l2ZVByb3ZpZGVyXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGNvbnN0IEJyZWFrcG9pbnRzID0ge1xuICBYU21hbGw6ICcobWF4LXdpZHRoOiA1OTlweCknLFxuICBTbWFsbDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJyxcbiAgTWVkaXVtOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJyxcbiAgTGFyZ2U6ICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJyxcbiAgWExhcmdlOiAnKG1pbi13aWR0aDogMTkyMHB4KScsXG5cbiAgSGFuZHNldDogJyhtYXgtd2lkdGg6IDU5OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICAgICAnKG1heC13aWR0aDogOTU5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBUYWJsZXQ6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgzOXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICAgICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFdlYjogJyhtaW4td2lkdGg6IDg0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuXG4gIEhhbmRzZXRQb3J0cmFpdDogJyhtYXgtd2lkdGg6IDU5OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICBUYWJsZXRQb3J0cmFpdDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODM5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gIFdlYlBvcnRyYWl0OiAnKG1pbi13aWR0aDogODQwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG5cbiAgSGFuZHNldExhbmRzY2FwZTogJyhtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgVGFibGV0TGFuZHNjYXBlOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBXZWJMYW5kc2NhcGU6ICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxufTtcblxuZXhwb3J0IGNvbnN0IE1lZGlhUXVlcmllcyA9IHtcbiAgJ3hzJzogJyhtYXgtd2lkdGg6IDU5OXB4KScsXG4gICdzbSc6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KScsXG4gICdtZCc6ICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCknLFxuICAnbGcnOiAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KScsXG4gICd4bCc6ICcobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpJyxcbiAgJ2x0LXNtJzogJyhtYXgtd2lkdGg6IDU5OXB4KScsXG4gICdsdC1tZCc6ICcobWF4LXdpZHRoOiA5NTlweCknLFxuICAnbHQtbGcnOiAnKG1heC13aWR0aDogMTI3OXB4KScsXG4gICdsdC14bCc6ICcobWF4LXdpZHRoOiAxOTE5cHgpJyxcbiAgJ2d0LXhzJzogJyhtaW4td2lkdGg6IDYwMHB4KScsXG4gICdndC1zbSc6ICcobWluLXdpZHRoOiA5NjBweCknLFxuICAnZ3QtbWQnOiAnKG1pbi13aWR0aDogMTI4MHB4KScsXG4gICdndC1sZyc6ICcobWluLXdpZHRoOiAxOTIwcHgpJ1xufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSxNQUFhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFpQixrQkFBa0IsQ0FBQzs7Ozs7O0FDRnRGO0FBYUEsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDOztBQUUzQixNQUFNLE1BQU0sR0FBRztJQUNiLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO0tBQ2hCO0NBQ0YsQ0FBQztBQUtGOzs7Ozs7O0lBdURFLFlBQ1UsV0FDQSxhQUNBLE9BQzBCLFlBQWlCO1FBSDNDLGNBQVMsR0FBVCxTQUFTO1FBQ1QsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsVUFBSyxHQUFMLEtBQUs7UUFDcUIsaUJBQVksR0FBWixZQUFZLENBQUs7Ozs7O3VCQWpEM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQztLQWtEaEQ7Ozs7O0lBN0NMLElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjs7Ozs7SUFDRCxJQUFJLE1BQU0sQ0FBQyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxFQUMzRDtZQUNFLENBQUMsVUFBVSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHO2dCQUMzQyxPQUFPLEVBQUUsT0FBTzthQUNqQjtTQUNGLEVBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQzlCLElBQUksQ0FBQyxVQUFVLEVBQ2YsY0FBYyxDQUNiLENBQUM7S0FDSDs7Ozs7O0lBS0QsSUFDSSxNQUFNLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsRUFDM0Q7WUFDRSxDQUFDLFVBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRztnQkFDM0MsT0FBTyxFQUFFLE1BQU07YUFDaEI7U0FDRixFQUNELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixJQUFJLENBQUMsVUFBVSxFQUNmLGNBQWMsQ0FDYixDQUFDO0tBQ0g7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7SUFTRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RTtLQUNGOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztTQUNsRTtLQUNGOzs7WUEzRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7Ozs7WUFqQkMsU0FBUztZQUNULFVBQVU7WUFHSCxRQUFROzRDQXlFWixNQUFNLFNBQUMsZ0JBQWdCOzs7cUJBNUN6QixLQUFLO3FCQXFCTCxLQUFLOzs7Ozs7O0FDNURSOzs7WUFnQkMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBRTFCOzs7Ozs7OztBQ3BCRCxNQUFhLFdBQVcsR0FBRztJQUN6QixNQUFNLEVBQUUsb0JBQW9CO0lBQzVCLEtBQUssRUFBRSwyQ0FBMkM7SUFDbEQsTUFBTSxFQUFFLDRDQUE0QztJQUNwRCxLQUFLLEVBQUUsNkNBQTZDO0lBQ3BELE1BQU0sRUFBRSxxQkFBcUI7SUFFN0IsT0FBTyxFQUFFLGtEQUFrRDtRQUNsRCxpREFBaUQ7SUFDMUQsTUFBTSxFQUFFLHlFQUF5RTtRQUN6RSx5RUFBeUU7SUFDakYsR0FBRyxFQUFFLGtEQUFrRDtRQUNsRCxrREFBa0Q7SUFFdkQsZUFBZSxFQUFFLGdEQUFnRDtJQUNqRSxjQUFjLEVBQUUsdUVBQXVFO0lBQ3ZGLFdBQVcsRUFBRSxnREFBZ0Q7SUFFN0QsZ0JBQWdCLEVBQUUsaURBQWlEO0lBQ25FLGVBQWUsRUFBRSx5RUFBeUU7SUFDMUYsWUFBWSxFQUFFLGtEQUFrRDtDQUNqRSxDQUFDOztBQUVGLE1BQWEsWUFBWSxHQUFHO0lBQzFCLElBQUksRUFBRSxvQkFBb0I7SUFDMUIsSUFBSSxFQUFFLDJDQUEyQztJQUNqRCxJQUFJLEVBQUUsNENBQTRDO0lBQ2xELElBQUksRUFBRSw2Q0FBNkM7SUFDbkQsSUFBSSxFQUFFLDZDQUE2QztJQUNuRCxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0IsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixPQUFPLEVBQUUscUJBQXFCO0lBQzlCLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0IsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixPQUFPLEVBQUUscUJBQXFCO0lBQzlCLE9BQU8sRUFBRSxxQkFBcUI7Q0FDL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=