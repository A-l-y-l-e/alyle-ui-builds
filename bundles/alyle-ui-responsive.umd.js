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
             */ function () {
                return this._show;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
             */ function () {
                return this._hide;
            },
            /**
             * Hides the item when the value is resolved as true
             */
            set: /**
             * Hides the item when the value is resolved as true
             * @param {?} val
             * @return {?}
             */ function (val) {
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
            { type: core.Directive, args: [{
                        selector: '[lyShow], [lyHide]'
                    },] },
        ];
        /** @nocollapse */
        MediaDirective.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: ui.LyTheme2 },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzcG9uc2l2ZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9yZXNwb25zaXZlL3Rva2Vucy50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvbWVkaWEvbWVkaWEuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLm1vZHVsZS50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvbWVkaWEtcXVlcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTFlfTUVESUFfUVVFUklFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMeU1lZGlhUXVlcmllcz4oJ2x5w4LCt21lZGlhw4LCt3F1ZXJpZXMnKTtcblxuZXhwb3J0IGludGVyZmFjZSBMeU1lZGlhUXVlcmllcyB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMWV9NRURJQV9RVUVSSUVTIH0gZnJvbSAnLi4vdG9rZW5zJztcblxuY29uc3QgTUVESUFfUFJJT1JJVFkgPSA5OTk7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGlkZToge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9XG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlTaG93XSwgW2x5SGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9zaG93OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nob3dDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oaWRlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGVDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseU1lZGlhJyk7XG5cbiAgLyoqXG4gICAqIFNob3dzIHRoZSBpdGVtIHdoZW4gdGhlIHZhbHVlIGlzIHJlc29sdmVkIGFzIHRydWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBseVNob3coKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvdztcbiAgfVxuICBzZXQgbHlTaG93KHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2hvdyA9IHZhbDtcbiAgICB0aGlzLl9zaG93Q2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseU1lZGlhLXNob3c6JHt2YWx9YCxcbiAgICB7XG4gICAgICBbYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzW3ZhbF0gfHwgdmFsfWBdOiB7XG4gICAgICAgIGRpc3BsYXk6IGBibG9ja2BcbiAgICAgIH1cbiAgICB9LFxuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICB0aGlzLl9zaG93Q2xhc3MsXG4gICAgTUVESUFfUFJJT1JJVFlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBpdGVtIHdoZW4gdGhlIHZhbHVlIGlzIHJlc29sdmVkIGFzIHRydWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBseUhpZGUodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9oaWRlID0gdmFsO1xuICAgIHRoaXMuX2hpZGVDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5TWVkaWEtaGlkZToke3ZhbH1gLFxuICAgIHtcbiAgICAgIFtgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXNbdmFsXSB8fCB2YWx9YF06IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9XG4gICAgfSxcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5faGlkZUNsYXNzLFxuICAgIE1FRElBX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIGdldCBseUhpZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBASW5qZWN0KExZX01FRElBX1FVRVJJRVMpIHByaXZhdGUgbWVkaWFRdWVyaWVzOiBhbnksIC8vIHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9XG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmx5SGlkZSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuaGlkZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMubHlIaWRlICYmIHRoaXMubHlTaG93KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZSBvbmx5IFxcYGx5SGlkZVxcYCBvciBcXGBseVNob3dcXGAgcGVyIGVsZW1lbnRgKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IFJlc3BvbnNpdmUgfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lZGlhRGlyZWN0aXZlIH0gZnJvbSAnLi9tZWRpYS9tZWRpYS5kaXJlY3RpdmUnO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gcmVzcG9uc2l2ZVByb3ZpZGVyRmFjdG9yeShcbi8vICAgcGFyZW50OiBSZXNwb25zaXZlLCBuZ1pvbmU6IE5nWm9uZSwgcGxhdGZvcm1JZDogT2JqZWN0KTogUmVzcG9uc2l2ZSB7XG4vLyByZXR1cm4gcGFyZW50IHx8IG5ldyBSZXNwb25zaXZlKG5nWm9uZSwgcGxhdGZvcm1JZCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBjb25zdCByZXNwb25zaXZlUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuLy8gICBwcm92aWRlOiBSZXNwb25zaXZlLFxuLy8gICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgUmVzcG9uc2l2ZV0sIE5nWm9uZSwgUExBVEZPUk1fSURdLFxuLy8gICB1c2VGYWN0b3J5OiByZXNwb25zaXZlUHJvdmlkZXJGYWN0b3J5XG4vLyB9O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNZWRpYURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtNZWRpYURpcmVjdGl2ZV0sXG4gIC8vIHByb3ZpZGVyczogW3Jlc3BvbnNpdmVQcm92aWRlcl1cbn0pXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZU1vZHVsZSB7IH1cbiIsImV4cG9ydCBjb25zdCBCcmVha3BvaW50cyA9IHtcbiAgWFNtYWxsOiAnKG1heC13aWR0aDogNTk5cHgpJyxcbiAgU21hbGw6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KScsXG4gIE1lZGl1bTogJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KScsXG4gIExhcmdlOiAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KScsXG4gIFhMYXJnZTogJyhtaW4td2lkdGg6IDE5MjBweCknLFxuXG4gIEhhbmRzZXQ6ICcobWF4LXdpZHRoOiA1OTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAnICtcbiAgICAgICAgICAgJyhtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgVGFibGV0OiAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MzlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAnICtcbiAgICAgICAgICAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBXZWI6ICcobWluLXdpZHRoOiA4NDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAnICtcbiAgICAgICAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcblxuICBIYW5kc2V0UG9ydHJhaXQ6ICcobWF4LXdpZHRoOiA1OTlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgVGFibGV0UG9ydHJhaXQ6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgzOXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICBXZWJQb3J0cmFpdDogJyhtaW4td2lkdGg6IDg0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuXG4gIEhhbmRzZXRMYW5kc2NhcGU6ICcobWF4LXdpZHRoOiA5NTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFRhYmxldExhbmRzY2FwZTogJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgV2ViTGFuZHNjYXBlOiAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbn07XG5cbmV4cG9ydCBjb25zdCBNZWRpYVF1ZXJpZXMgPSB7XG4gICd4cyc6ICcobWF4LXdpZHRoOiA1OTlweCknLFxuICAnc20nOiAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknLFxuICAnbWQnOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJyxcbiAgJ2xnJzogJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCknLFxuICAneGwnOiAnKG1pbi13aWR0aDogMTkyMHB4KSBhbmQgKG1heC13aWR0aDogNTAwMHB4KScsXG4gICdsdC1zbSc6ICcobWF4LXdpZHRoOiA1OTlweCknLFxuICAnbHQtbWQnOiAnKG1heC13aWR0aDogOTU5cHgpJyxcbiAgJ2x0LWxnJzogJyhtYXgtd2lkdGg6IDEyNzlweCknLFxuICAnbHQteGwnOiAnKG1heC13aWR0aDogMTkxOXB4KScsXG4gICdndC14cyc6ICcobWluLXdpZHRoOiA2MDBweCknLFxuICAnZ3Qtc20nOiAnKG1pbi13aWR0aDogOTYwcHgpJyxcbiAgJ2d0LW1kJzogJyhtaW4td2lkdGg6IDEyODBweCknLFxuICAnZ3QtbGcnOiAnKG1pbi13aWR0aDogMTkyMHB4KSdcbn07XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJEaXJlY3RpdmUiLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiTHlUaGVtZTIiLCJJbmplY3QiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQSxRQUFhLGdCQUFnQixHQUFHLElBQUlBLG1CQUFjLENBQWlCLGtCQUFrQixDQUFDOzs7Ozs7QUNGdEY7SUFhQSxJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7O0lBRTNCLElBQU0sTUFBTSxHQUFHO1FBQ2IsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLE1BQU07U0FDaEI7S0FDRixDQUFDOztRQTREQSx3QkFDVSxXQUNBLGFBQ0EsT0FDMEIsWUFBaUI7WUFIM0MsY0FBUyxHQUFULFNBQVM7WUFDVCxnQkFBVyxHQUFYLFdBQVc7WUFDWCxV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