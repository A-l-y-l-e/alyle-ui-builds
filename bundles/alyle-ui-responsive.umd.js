(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/responsive', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.responsive = {}),global.ng.core,global.alyle.ui));
}(this, (function (exports,core,ui) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
             */ function () {
                return this._show;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
            { type: core.Directive, args: [{
                        selector: '[lyShow], [lyHide]'
                    },] }
        ];
        /** @nocollapse */
        MediaDirective.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: ui.LyTheme2 }
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    // export function responsiveProviderFactory(
    //   parent: Responsive, ngZone: NgZone, platformId: Object): Responsive {
    // return parent || new Responsive(ngZone, platformId);
    // }
    // export const responsiveProvider: Provider = {
    //   provide: Responsive,
    //   deps: [[new Optional(), new SkipSelf(), Responsive], NgZone, PLATFORM_ID],
    //   useFactory: responsiveProviderFactory
    // };
    var ResponsiveModule = /** @class */ (function () {
        function ResponsiveModule() {
        }
        ResponsiveModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MediaDirective],
                        exports: [MediaDirective],
                    },] }
        ];
        return ResponsiveModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.MediaDirective = MediaDirective;
    exports.ResponsiveModule = ResponsiveModule;
    exports.Breakpoints = Breakpoints;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzcG9uc2l2ZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9yZXNwb25zaXZlL21lZGlhLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvcmVzcG9uc2l2ZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9yZXNwb25zaXZlL21lZGlhLXF1ZXJpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgTUVESUFfUFJJT1JJVFkgPSA5OTk7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGlkZToge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9XG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlTaG93XSwgW2x5SGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9zaG93OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nob3dDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oaWRlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGVDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgaXRlbSB3aGVuIHRoZSB2YWx1ZSBpcyByZXNvbHZlZCBhcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgbHlTaG93KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3c7XG4gIH1cbiAgc2V0IGx5U2hvdyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3Nob3cgPSB2YWw7XG4gICAgdGhpcy5fc2hvd0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlNZWRpYS1zaG93OiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+XG4gICAgKHtcbiAgICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KHZhbCldOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH1cbiAgICB9KSxcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fc2hvd0NsYXNzLFxuICAgIE1FRElBX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgaXRlbSB3aGVuIHRoZSB2YWx1ZSBpcyByZXNvbHZlZCBhcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbHlIaWRlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faGlkZSA9IHZhbDtcbiAgICB0aGlzLl9oaWRlQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseU1lZGlhLWhpZGU6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT5cbiAgICAoe1xuICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQodmFsKV06IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9XG4gICAgfSksXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX2hpZGVDbGFzcyxcbiAgICBNRURJQV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBnZXQgbHlIaWRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubHlIaWRlKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5seUhpZGUgJiYgdGhpcy5seVNob3cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlIG9ubHkgXFxgbHlIaWRlXFxgIG9yIFxcYGx5U2hvd1xcYCBwZXIgZWxlbWVudGApO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgUmVzcG9uc2l2ZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG4vLyBpbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFEaXJlY3RpdmUgfSBmcm9tICcuL21lZGlhLmRpcmVjdGl2ZSc7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZXNwb25zaXZlUHJvdmlkZXJGYWN0b3J5KFxuLy8gICBwYXJlbnQ6IFJlc3BvbnNpdmUsIG5nWm9uZTogTmdab25lLCBwbGF0Zm9ybUlkOiBPYmplY3QpOiBSZXNwb25zaXZlIHtcbi8vIHJldHVybiBwYXJlbnQgfHwgbmV3IFJlc3BvbnNpdmUobmdab25lLCBwbGF0Zm9ybUlkKTtcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4vLyAgIHByb3ZpZGU6IFJlc3BvbnNpdmUsXG4vLyAgIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBSZXNwb25zaXZlXSwgTmdab25lLCBQTEFURk9STV9JRF0sXG4vLyAgIHVzZUZhY3Rvcnk6IHJlc3BvbnNpdmVQcm92aWRlckZhY3Rvcnlcbi8vIH07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01lZGlhRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW01lZGlhRGlyZWN0aXZlXSxcbiAgLy8gcHJvdmlkZXJzOiBbcmVzcG9uc2l2ZVByb3ZpZGVyXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlTW9kdWxlIHsgfVxuIiwiZXhwb3J0IGNvbnN0IEJyZWFrcG9pbnRzID0ge1xuICBYU21hbGw6ICcobWF4LXdpZHRoOiA1OTlweCknLFxuICBTbWFsbDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJyxcbiAgTWVkaXVtOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJyxcbiAgTGFyZ2U6ICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJyxcbiAgWExhcmdlOiAnKG1pbi13aWR0aDogMTkyMHB4KScsXG5cbiAgSGFuZHNldDogJyhtYXgtd2lkdGg6IDU5OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICAgICAnKG1heC13aWR0aDogOTU5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBUYWJsZXQ6ICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgzOXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICAgICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFdlYjogJyhtaW4td2lkdGg6IDg0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksICcgK1xuICAgICAgICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuXG4gIEhhbmRzZXRQb3J0cmFpdDogJyhtYXgtd2lkdGg6IDU5OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICBUYWJsZXRQb3J0cmFpdDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODM5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gIFdlYlBvcnRyYWl0OiAnKG1pbi13aWR0aDogODQwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG5cbiAgSGFuZHNldExhbmRzY2FwZTogJyhtYXgtd2lkdGg6IDk1OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgVGFibGV0TGFuZHNjYXBlOiAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBXZWJMYW5kc2NhcGU6ICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxufTtcbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiTHlUaGVtZTIiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFXTSxjQUFjLEdBQUcsR0FBRzs7UUFFcEIsTUFBTSxHQUFHO1FBQ2IsSUFBSSxFQUFFO1lBQ0osT0FBTyxFQUFFLE1BQU07U0FDaEI7S0FDRjtBQUVEO1FBMERFLHdCQUNVLFNBQW9CLEVBQ3BCLFdBQXVCLEVBQ3ZCLEtBQWU7WUFGZixjQUFTLEdBQVQsU0FBUyxDQUFXO1lBQ3BCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1lBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQVU7Ozs7O1lBaER6QixZQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FpRHRDO1FBNUNMLHNCQUNJLGtDQUFNOzs7Ozs7O2dCQURWO2dCQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQjs7OztnQkFDRCxVQUFXLEdBQVc7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFnQixHQUFLLEVBQUUsVUFBQyxLQUFxQjs7b0JBQ25GO3dCQUNFLEdBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBRzs0QkFDMUIsT0FBTyxFQUFFLE9BQU87eUJBQ2pCOztpQkFDRCxFQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixJQUFJLENBQUMsVUFBVSxFQUNmLGNBQWMsQ0FDYixDQUFDO2FBQ0g7OztXQWJBO1FBa0JELHNCQUNJLGtDQUFNOzs7Z0JBY1Y7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25COzs7Ozs7OztnQkFqQkQsVUFDVyxHQUFXO2dCQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBZ0IsR0FBSyxFQUFFLFVBQUMsS0FBcUI7O29CQUNuRjt3QkFDRSxHQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUc7NEJBQzFCLE9BQU8sRUFBRSxNQUFNO3lCQUNoQjs7aUJBQ0QsRUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFDZixjQUFjLENBQ2IsQ0FBQzthQUNIOzs7V0FBQTs7OztRQVlELGlDQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUU7YUFDRjs7OztRQUVELG9DQUFXOzs7WUFBWDtnQkFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBK0MsQ0FBQyxDQUFDO2lCQUNsRTthQUNGOztvQkExRUZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsb0JBQW9CO3FCQUMvQjs7Ozs7d0JBaEJDQyxjQUFTO3dCQUNUQyxlQUFVO3dCQUdIQyxXQUFROzs7OzZCQTRCZEMsVUFBSzs2QkFxQkxBLFVBQUs7O1FBcUNSLHFCQUFDO0tBNUVEOzs7Ozs7QUNuQkE7Ozs7Ozs7OztBQWdCQTtRQUFBO1NBS2lDOztvQkFMaENDLGFBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7d0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztxQkFFMUI7O1FBQytCLHVCQUFDO0tBTGpDOzs7Ozs7O0FDaEJBLFFBQWEsV0FBVyxHQUFHO1FBQ3pCLE1BQU0sRUFBRSxvQkFBb0I7UUFDNUIsS0FBSyxFQUFFLDJDQUEyQztRQUNsRCxNQUFNLEVBQUUsNENBQTRDO1FBQ3BELEtBQUssRUFBRSw2Q0FBNkM7UUFDcEQsTUFBTSxFQUFFLHFCQUFxQjtRQUU3QixPQUFPLEVBQUUsa0RBQWtEO1lBQ2xELGlEQUFpRDtRQUMxRCxNQUFNLEVBQUUseUVBQXlFO1lBQ3pFLHlFQUF5RTtRQUNqRixHQUFHLEVBQUUsa0RBQWtEO1lBQ2xELGtEQUFrRDtRQUV2RCxlQUFlLEVBQUUsZ0RBQWdEO1FBQ2pFLGNBQWMsRUFBRSx1RUFBdUU7UUFDdkYsV0FBVyxFQUFFLGdEQUFnRDtRQUU3RCxnQkFBZ0IsRUFBRSxpREFBaUQ7UUFDbkUsZUFBZSxFQUFFLHlFQUF5RTtRQUMxRixZQUFZLEVBQUUsa0RBQWtEO0tBQ2pFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==