(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/responsive', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.responsive = {}),global.ng.core,global.alyle.ui));
}(this, (function (exports,core,ui) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LY_MEDIA_QUERIES = new core.InjectionToken('ly·media·queries');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
             */ function () {
                return this._show;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
             */ function () {
                return this._hide;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
            { type: core.Directive, args: [{
                        selector: '[lyShow], [lyHide]'
                    },] },
        ];
        /** @nocollapse */
        MediaDirective.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: ui.CoreTheme },
                { type: undefined, decorators: [{ type: core.Inject, args: [LY_MEDIA_QUERIES,] }] }
            ];
        };
        MediaDirective.propDecorators = {
            lyShow: [{ type: core.Input }],
            lyHide: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
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

    exports.MediaDirective = MediaDirective;
    exports.ResponsiveModule = ResponsiveModule;
    exports.LY_MEDIA_QUERIES = LY_MEDIA_QUERIES;
    exports.Breakpoints = Breakpoints;
    exports.MediaQueries = MediaQueries;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzcG9uc2l2ZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9yZXNwb25zaXZlL3Rva2Vucy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvbWVkaWEvbWVkaWEuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvbWVkaWEtcXVlcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTFlfTUVESUFfUVVFUklFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMeU1lZGlhUXVlcmllcz4oJ2x5w4LCt21lZGlhw4LCt3F1ZXJpZXMnKTtcblxuZXhwb3J0IGludGVyZmFjZSBMeU1lZGlhUXVlcmllcyB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBJbmplY3QsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IExZX01FRElBX1FVRVJJRVMgfSBmcm9tICcuLi90b2tlbnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlTaG93XSwgW2x5SGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfc2hvdzogc3RyaW5nO1xuICBwcml2YXRlIF9zaG93Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfaGlkZTogc3RyaW5nO1xuICBwcml2YXRlIF9oaWRlQ2xhc3M6IHN0cmluZztcbiAgY2xhc3NlcyA9IHtcbiAgICBoaWRlOiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdrLW1lZGlhLWhpZGUnLCAnZGlzcGxheTpub25lOycsICdhbGwnKVxuICB9O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBseVNob3codmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaG93ID0gdmFsO1xuICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShgay1tZWRpYS1zaG93LSR7dmFsfWAsXG4gICAgKFxuICAgICAgYGRpc3BsYXk6IGJsb2NrO2BcbiAgICApXG4gICAgLFxuICAgIGAke3RoaXMubWVkaWFRdWVyaWVzW3ZhbF0gfHwgdmFsfWAvLyAsIEludmVydE1lZGlhUXVlcnkuWWVzXG4gICAgKTtcbiAgICB0aGlzLmNvcmVUaGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX3Nob3dDbGFzcyk7XG4gICAgdGhpcy5fc2hvd0NsYXNzID0gbmV3Q2xhc3M7XG4gIH1cblxuICBnZXQgbHlTaG93KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3c7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbHlIaWRlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faGlkZSA9IHZhbDtcbiAgICBjb25zdCBuZXdDbGFzcyA9IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoYGstbWVkaWEtaGlkZS0ke3ZhbH1gLFxuICAgIChcbiAgICAgIGBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7YFxuICAgIClcbiAgICAsXG4gICAgYCR7dGhpcy5tZWRpYVF1ZXJpZXNbdmFsXSB8fCB2YWx9YFxuICAgICk7XG4gICAgdGhpcy5jb3JlVGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fcmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9oaWRlQ2xhc3MpO1xuICAgIHRoaXMuX2hpZGVDbGFzcyA9IG5ld0NsYXNzO1xuICB9XG5cbiAgZ2V0IGx5SGlkZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9oaWRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICAgQEluamVjdChMWV9NRURJQV9RVUVSSUVTKSBwcml2YXRlIG1lZGlhUXVlcmllczogYW55LCAvLyB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5seUhpZGUpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLmhpZGUpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgUmVzcG9uc2l2ZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFEaXJlY3RpdmUgfSBmcm9tICcuL21lZGlhL21lZGlhLmRpcmVjdGl2ZSc7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZXNwb25zaXZlUHJvdmlkZXJGYWN0b3J5KFxuLy8gICBwYXJlbnQ6IFJlc3BvbnNpdmUsIG5nWm9uZTogTmdab25lLCBwbGF0Zm9ybUlkOiBPYmplY3QpOiBSZXNwb25zaXZlIHtcbi8vIHJldHVybiBwYXJlbnQgfHwgbmV3IFJlc3BvbnNpdmUobmdab25lLCBwbGF0Zm9ybUlkKTtcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4vLyAgIHByb3ZpZGU6IFJlc3BvbnNpdmUsXG4vLyAgIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBSZXNwb25zaXZlXSwgTmdab25lLCBQTEFURk9STV9JRF0sXG4vLyAgIHVzZUZhY3Rvcnk6IHJlc3BvbnNpdmVQcm92aWRlckZhY3Rvcnlcbi8vIH07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01lZGlhRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW01lZGlhRGlyZWN0aXZlXSxcbiAgLy8gcHJvdmlkZXJzOiBbcmVzcG9uc2l2ZVByb3ZpZGVyXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGNvbnN0IEJyZWFrcG9pbnRzID0ge1xuICBYU21hbGw6ICcobWF4LXdpZHRoOiA1OTlweCknLFxuICBTbWFsbDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJyxcbiAgTWVkaXVtOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJyxcbiAgTGFyZ2U6ICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJyxcbiAgWExhcmdlOiAnKG1pbi13aWR0aDogMTkyMHB4KScsXG5cbiAgSGFuZHNldDogJyhtYXgtd2lkdGg6IDU5OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICAgICAnKG1heC13aWR0aDogOTU5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBUYWJsZXQ6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgzOXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICAgICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFdlYjogJyhtaW4td2lkdGg6IDg0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuXG4gIEhhbmRzZXRQb3J0cmFpdDogJyhtYXgtd2lkdGg6IDU5OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICBUYWJsZXRQb3J0cmFpdDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODM5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gIFdlYlBvcnRyYWl0OiAnKG1pbi13aWR0aDogODQwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG5cbiAgSGFuZHNldExhbmRzY2FwZTogJyhtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgVGFibGV0TGFuZHNjYXBlOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBXZWJMYW5kc2NhcGU6ICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxufTtcblxuZXhwb3J0IGNvbnN0IE1lZGlhUXVlcmllcyA9IHtcbiAgJ3hzJzogJyhtYXgtd2lkdGg6IDU5OXB4KScsXG4gICdzbSc6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KScsXG4gICdtZCc6ICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCknLFxuICAnbGcnOiAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KScsXG4gICd4bCc6ICcobWluLXdpZHRoOiAxOTIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MDAwcHgpJyxcbiAgJ2x0LXNtJzogJyhtYXgtd2lkdGg6IDU5OXB4KScsXG4gICdsdC1tZCc6ICcobWF4LXdpZHRoOiA5NTlweCknLFxuICAnbHQtbGcnOiAnKG1heC13aWR0aDogMTI3OXB4KScsXG4gICdsdC14bCc6ICcobWF4LXdpZHRoOiAxOTE5cHgpJyxcbiAgJ2d0LXhzJzogJyhtaW4td2lkdGg6IDYwMHB4KScsXG4gICdndC1zbSc6ICcobWluLXdpZHRoOiA5NjBweCknLFxuICAnZ3QtbWQnOiAnKG1pbi13aWR0aDogMTI4MHB4KScsXG4gICdndC1sZyc6ICcobWluLXdpZHRoOiAxOTIwcHgpJ1xufTtcbiJdLCJuYW1lcyI6WyJJbmplY3Rpb25Ub2tlbiIsIkRpcmVjdGl2ZSIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJDb3JlVGhlbWUiLCJJbmplY3QiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQSxRQUFhLGdCQUFnQixHQUFHLElBQUlBLG1CQUFjLENBQWlCLGtCQUFrQixDQUFDOzs7Ozs7QUNGdEY7UUE0REUsd0JBQ1UsV0FDQSxhQUNBLFdBQzBCLFlBQWlCO1lBSDNDLGNBQVMsR0FBVCxTQUFTO1lBQ1QsZ0JBQVcsR0FBWCxXQUFXO1lBQ1gsY0FBUyxHQUFULFNBQVM7WUFDaUIsaUJBQVksR0FBWixZQUFZLENBQUs7MkJBNUMzQztnQkFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUM7YUFDeEU7U0EyQ0k7UUF6Q0wsc0JBQ0ksa0NBQU07OztnQkFhVjtnQkFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbkI7Ozs7Z0JBaEJELFVBQ1csR0FBVztnQkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7O2dCQUNqQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxrQkFBZ0IsR0FBSyxHQUU5RCxpQkFBaUIsR0FHbkIsTUFBRyxJQUFJLENBQUMsWUFBWSxD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