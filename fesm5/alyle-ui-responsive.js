import { InjectionToken, Directive, Input, Inject, Renderer2, ElementRef, NgModule } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var LY_MEDIA_QUERIES = new InjectionToken('ly·media·queries');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var Breakpoints = {
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
var MediaQueries = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzcG9uc2l2ZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvdG9rZW5zLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9tZWRpYS9tZWRpYS5kaXJlY3RpdmUudHMiLCJuZzovL0BhbHlsZS91aS9yZXNwb25zaXZlL3Jlc3BvbnNpdmUubW9kdWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9tZWRpYS1xdWVyaWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBMWV9NRURJQV9RVUVSSUVTID0gbmV3IEluamVjdGlvblRva2VuPEx5TWVkaWFRdWVyaWVzPignbHnDgsK3bWVkaWHDgsK3cXVlcmllcycpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEx5TWVkaWFRdWVyaWVzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICcuLi90b2tlbnMnO1xuXG5jb25zdCBNRURJQV9QUklPUklUWSA9IDk5OTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoaWRlOiB7XG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH1cbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVNob3ddLCBbbHlIaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3Nob3c6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2hvd0NsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGlkZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFN0eWxlc1xuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5TWVkaWEnKTtcblxuICAvKipcbiAgICogU2hvd3MgdGhlIGl0ZW0gd2hlbiB0aGUgdmFsdWUgaXMgcmVzb2x2ZWQgYXMgdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGx5U2hvdygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaG93O1xuICB9XG4gIHNldCBseVNob3codmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaG93ID0gdmFsO1xuICAgIHRoaXMuX3Nob3dDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5TWVkaWEtc2hvdzoke3ZhbH1gLFxuICAgIHtcbiAgICAgIFtgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbdmFsXSB8fCB2YWx9YF06IHtcbiAgICAgICAgZGlzcGxheTogYGJsb2NrYFxuICAgICAgfVxuICAgIH0sXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX3Nob3dDbGFzcyxcbiAgICBNRURJQV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgdGhlIGl0ZW0gd2hlbiB0aGUgdmFsdWUgaXMgcmVzb2x2ZWQgYXMgdHJ1ZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGx5SGlkZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2hpZGUgPSB2YWw7XG4gICAgdGhpcy5faGlkZUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlNZWRpYS1oaWRlOiR7dmFsfWAsXG4gICAge1xuICAgICAgW2BAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc1t2YWxdIHx8IHZhbH1gXToge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl9oaWRlQ2xhc3MsXG4gICAgTUVESUFfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgZ2V0IGx5SGlkZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9oaWRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIEBJbmplY3QoTFlfTUVESUFfUVVFUklFUykgcHJpdmF0ZSBtZWRpYVF1ZXJpZXM6IGFueSwgLy8geyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH1cbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubHlIaWRlKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5seUhpZGUgJiYgdGhpcy5seVNob3cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlIG9ubHkgXFxgbHlIaWRlXFxgIG9yIFxcYGx5U2hvd1xcYCBwZXIgZWxlbWVudGApO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgUmVzcG9uc2l2ZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFEaXJlY3RpdmUgfSBmcm9tICcuL21lZGlhL21lZGlhLmRpcmVjdGl2ZSc7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZXNwb25zaXZlUHJvdmlkZXJGYWN0b3J5KFxuLy8gICBwYXJlbnQ6IFJlc3BvbnNpdmUsIG5nWm9uZTogTmdab25lLCBwbGF0Zm9ybUlkOiBPYmplY3QpOiBSZXNwb25zaXZlIHtcbi8vIHJldHVybiBwYXJlbnQgfHwgbmV3IFJlc3BvbnNpdmUobmdab25lLCBwbGF0Zm9ybUlkKTtcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4vLyAgIHByb3ZpZGU6IFJlc3BvbnNpdmUsXG4vLyAgIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBSZXNwb25zaXZlXSwgTmdab25lLCBQTEFURk9STV9JRF0sXG4vLyAgIHVzZUZhY3Rvcnk6IHJlc3BvbnNpdmVQcm92aWRlckZhY3Rvcnlcbi8vIH07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01lZGlhRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW01lZGlhRGlyZWN0aXZlXSxcbiAgLy8gcHJvdmlkZXJzOiBbcmVzcG9uc2l2ZVByb3ZpZGVyXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGNvbnN0IEJyZWFrcG9pbnRzID0ge1xuICBYU21hbGw6ICcobWF4LXdpZHRoOiA1OTlweCknLFxuICBTbWFsbDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJyxcbiAgTWVkaXVtOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJyxcbiAgTGFyZ2U6ICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJyxcbiAgWExhcmdlOiAnKG1pbi13aWR0aDogMTkyMHB4KScsXG5cbiAgSGFuZHNldDogJyhtYXgtd2lkdGg6IDU5OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICAgICAnKG1heC13aWR0aDogOTU5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBUYWJsZXQ6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgzOXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICAgICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFdlYjogJyhtaW4td2lkdGg6IDg0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuXG4gIEhhbmRzZXRQb3J0cmFpdDogJyhtYXgtd2lkdGg6IDU5OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICBUYWJsZXRQb3J0cmFpdDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODM5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gIFdlYlBvcnRyYWl0OiAnKG1pbi13aWR0aDogODQwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG5cbiAgSGFuZHNldExhbmRzY2FwZTogJyhtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgVGFibGV0TGFuZHNjYXBlOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBXZWJMYW5kc2NhcGU6ICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxufTtcblxuZXhwb3J0IGNvbnN0IE1lZGlhUXVlcmllcyA9IHtcbiAgJ3hzJzogJyhtYXgtd2lkdGg6IDU5OXB4KScsXG4gICdzbSc6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KScsXG4gICdtZCc6ICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCknLFxuICAnbGcnOiAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KScsXG4gICd4bCc6ICcobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpJyxcbiAgJ2x0LXNtJzogJyhtYXgtd2lkdGg6IDU5OXB4KScsXG4gICdsdC1tZCc6ICcobWF4LXdpZHRoOiA5NTlweCknLFxuICAnbHQtbGcnOiAnKG1heC13aWR0aDogMTI3OXB4KScsXG4gICdsdC14bCc6ICcobWF4LXdpZHRoOiAxOTE5cHgpJyxcbiAgJ2d0LXhzJzogJyhtaW4td2lkdGg6IDYwMHB4KScsXG4gICdndC1zbSc6ICcobWluLXdpZHRoOiA5NjBweCknLFxuICAnZ3QtbWQnOiAnKG1pbi13aWR0aDogMTI4MHB4KScsXG4gICdndC1sZyc6ICcobWluLXdpZHRoOiAxOTIwcHgpJ1xufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSxJQUFhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFpQixrQkFBa0IsQ0FBQzs7Ozs7O0FDRnRGO0FBYUEsSUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDOztBQUUzQixJQUFNLE1BQU0sR0FBRztJQUNiLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO0tBQ2hCO0NBQ0YsQ0FBQzs7SUE0REEsd0JBQ1UsV0FDQSxhQUNBLE9BQzBCLFlBQWlCO1FBSDNDLGNBQVMsR0FBVCxTQUFTO1FBQ1QsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsVUFBSyxHQUFMLEtBQUs7UUFDcUIsaUJBQVksR0FBWixZQUFZLENBQUs7Ozs7O3VCQWpEM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FB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