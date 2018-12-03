(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/responsive', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.responsive = {}),global.ng.core,global.ly.core));
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
    var ResponsiveModule = /** @class */ (function () {
        function ResponsiveModule() {
        }
        ResponsiveModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MediaDirective],
                        exports: [MediaDirective, ui.LyCommonModule],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmVzcG9uc2l2ZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BhbHlsZS91aS9yZXNwb25zaXZlL21lZGlhLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3Jlc3BvbnNpdmUvcmVzcG9uc2l2ZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9yZXNwb25zaXZlL21lZGlhLXF1ZXJpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTHlUaGVtZTIsIFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnQGFseWxlL3VpJztcblxuY29uc3QgTUVESUFfUFJJT1JJVFkgPSA5OTk7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGlkZToge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9XG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlTaG93XSwgW2x5SGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIF9zaG93OiBzdHJpbmc7XG4gIHByaXZhdGUgX3Nob3dDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9oaWRlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2hpZGVDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTdHlsZXNcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMpO1xuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgaXRlbSB3aGVuIHRoZSB2YWx1ZSBpcyByZXNvbHZlZCBhcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgbHlTaG93KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3c7XG4gIH1cbiAgc2V0IGx5U2hvdyh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3Nob3cgPSB2YWw7XG4gICAgdGhpcy5fc2hvd0NsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShgbHlNZWRpYS1zaG93OiR7dmFsfWAsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+XG4gICAgKHtcbiAgICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KHZhbCldOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH1cbiAgICB9KSxcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgdGhpcy5fc2hvd0NsYXNzLFxuICAgIE1FRElBX1BSSU9SSVRZXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgaXRlbSB3aGVuIHRoZSB2YWx1ZSBpcyByZXNvbHZlZCBhcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbHlIaWRlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faGlkZSA9IHZhbDtcbiAgICB0aGlzLl9oaWRlQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKGBseU1lZGlhLWhpZGU6JHt2YWx9YCwgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT5cbiAgICAoe1xuICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQodmFsKV06IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9XG4gICAgfSksXG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgIHRoaXMuX2hpZGVDbGFzcyxcbiAgICBNRURJQV9QUklPUklUWVxuICAgICk7XG4gIH1cblxuICBnZXQgbHlIaWRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMubHlIaWRlKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5oaWRlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5seUhpZGUgJiYgdGhpcy5seVNob3cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXNlIG9ubHkgXFxgbHlIaWRlXFxgIG9yIFxcYGx5U2hvd1xcYCBwZXIgZWxlbWVudGApO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFEaXJlY3RpdmUgfSBmcm9tICcuL21lZGlhLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01lZGlhRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW01lZGlhRGlyZWN0aXZlLCBMeUNvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVNb2R1bGUgeyB9XG4iLCJleHBvcnQgY29uc3QgQnJlYWtwb2ludHMgPSB7XG4gIFhTbWFsbDogJyhtYXgtd2lkdGg6IDU5OXB4KScsXG4gIFNtYWxsOiAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknLFxuICBNZWRpdW06ICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCknLFxuICBMYXJnZTogJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCknLFxuICBYTGFyZ2U6ICcobWluLXdpZHRoOiAxOTIwcHgpJyxcblxuICBIYW5kc2V0OiAnKG1heC13aWR0aDogNTk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgJyArXG4gICAgICAgICAgICcobWF4LXdpZHRoOiA5NTlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFRhYmxldDogJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODM5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgJyArXG4gICAgICAgICAgJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgV2ViOiAnKG1pbi13aWR0aDogODQwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgJyArXG4gICAgICAgJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG5cbiAgSGFuZHNldFBvcnRyYWl0OiAnKG1heC13aWR0aDogNTk5cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gIFRhYmxldFBvcnRyYWl0OiAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4MzlweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgV2ViUG9ydHJhaXQ6ICcobWluLXdpZHRoOiA4NDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcblxuICBIYW5kc2V0TGFuZHNjYXBlOiAnKG1heC13aWR0aDogOTU5cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICBUYWJsZXRMYW5kc2NhcGU6ICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gIFdlYkxhbmRzY2FwZTogJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG59O1xuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIlJlbmRlcmVyMiIsIkVsZW1lbnRSZWYiLCJMeVRoZW1lMiIsIklucHV0IiwiTmdNb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBV00sY0FBYyxHQUFHLEdBQUc7O1FBRXBCLE1BQU0sR0FBRztRQUNiLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxNQUFNO1NBQ2hCO0tBQ0Y7QUFFRDtRQTBERSx3QkFDVSxTQUFvQixFQUNwQixXQUF1QixFQUN2QixLQUFlO1lBRmYsY0FBUyxHQUFULFNBQVMsQ0FBVztZQUNwQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtZQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFVOzs7OztZQWhEekIsWUFBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBaUR0QztRQTVDTCxzQkFDSSxrQ0FBTTs7Ozs7OztnQkFEVjtnQkFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbkI7Ozs7Z0JBQ0QsVUFBVyxHQUFXO2dCQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBZ0IsR0FBSyxFQUFFLFVBQUMsS0FBcUI7O29CQUNuRjt3QkFDRSxHQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUc7NEJBQzFCLE9BQU8sRUFBRSxPQUFPO3lCQUNqQjs7aUJBQ0QsRUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLFVBQVUsRUFDZixjQUFjLENBQ2IsQ0FBQzthQUNIOzs7V0FiQTtRQWtCRCxzQkFDSSxrQ0FBTTs7O2dCQWNWO2dCQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQjs7Ozs7Ozs7Z0JBakJELFVBQ1csR0FBVztnQkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWdCLEdBQUssRUFBRSxVQUFDLEtBQXFCOztvQkFDbkY7d0JBQ0UsR0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFHOzRCQUMxQixPQUFPLEVBQUUsTUFBTTt5QkFDaEI7O2lCQUNELEVBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQzlCLElBQUksQ0FBQyxVQUFVLEVBQ2YsY0FBYyxDQUNiLENBQUM7YUFDSDs7O1dBQUE7Ozs7UUFZRCxpQ0FBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzVFO2FBQ0Y7Ozs7UUFFRCxvQ0FBVzs7O1lBQVg7Z0JBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQStDLENBQUMsQ0FBQztpQkFDbEU7YUFDRjs7b0JBMUVGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtxQkFDL0I7Ozs7O3dCQWhCQ0MsY0FBUzt3QkFDVEMsZUFBVTt3QkFHSEMsV0FBUTs7Ozs2QkE0QmRDLFVBQUs7NkJBcUJMQSxVQUFLOztRQXFDUixxQkFBQztLQTVFRDs7Ozs7O0FDbkJBO1FBSUE7U0FJaUM7O29CQUpoQ0MsYUFBUSxTQUFDO3dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQzt3QkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFQyxpQkFBYyxDQUFDO3FCQUMxQzs7UUFDK0IsdUJBQUM7S0FKakM7Ozs7Ozs7QUNKQSxRQUFhLFdBQVcsR0FBRztRQUN6QixNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLEtBQUssRUFBRSwyQ0FBMkM7UUFDbEQsTUFBTSxFQUFFLDRDQUE0QztRQUNwRCxLQUFLLEVBQUUsNkNBQTZDO1FBQ3BELE1BQU0sRUFBRSxxQkFBcUI7UUFFN0IsT0FBTyxFQUFFLGtEQUFrRDtZQUNsRCxpREFBaUQ7UUFDMUQsTUFBTSxFQUFFLHlFQUF5RTtZQUN6RSx5RUFBeUU7UUFDakYsR0FBRyxFQUFFLGtEQUFrRDtZQUNsRCxrREFBa0Q7UUFFdkQsZUFBZSxFQUFFLGdEQUFnRDtRQUNqRSxjQUFjLEVBQUUsdUVBQXVFO1FBQ3ZGLFdBQVcsRUFBRSxnREFBZ0Q7UUFFN0QsZ0JBQWdCLEVBQUUsaURBQWlEO1FBQ25FLGVBQWUsRUFBRSx5RUFBeUU7UUFDMUYsWUFBWSxFQUFFLGtEQUFrRDtLQUNqRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=