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

//# sourceMappingURL=alyle-ui-responsive.umd.js.map