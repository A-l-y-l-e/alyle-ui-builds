(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui'), require('@alyle/ui/ripple'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/button', ['exports', '@angular/core', '@alyle/ui', '@alyle/ui/ripple', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.button = {}),global.ng.core,global.alyle.ui,global.alyle.ui.ripple,global.ng.common));
}(this, (function (exports,core,ui,ripple,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var styles = function (theme) {
        var _a = theme.typography, button = _a.button, fontFamily = _a.fontFamily;
        /** @type {?} */
        var _styles = ({
            root: __assign({ fontFamily: fontFamily, color: theme.text.default, '-webkit-tap-highlight-color': 'transparent', backgroundColor: "rgba(0, 0, 0, 0)", border: 0, padding: '0 1em', '-moz-appearance': 'none', margin: 0, borderRadius: '3px', outline: 'none', fontWeight: 500, boxSizing: 'border-box', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'center', display: 'inline-flex', cursor: 'pointer', '-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', userSelect: 'none', textDecorationLine: 'none', '-webkit-text-decoration-line': 'none', transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms' }, button),
            content: {
                padding: 0,
                display: 'flex',
                justifyContent: 'inherit',
                alignItems: 'inherit',
                alignContent: 'inherit',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
            }
        });
        if (typeof _styles.root.fontSize === 'number') {
            _styles.root.fontSize = theme.pxToRem(_styles.root.fontSize);
        }
        if (typeof _styles.root.letterSpacing === 'number') {
            _styles.root.letterSpacing = theme.pxToRem(_styles.root.letterSpacing);
        }
        return _styles;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_SIZE = 'medium';
    /** @type {?} */
    var DEFAULT_DISABLE_RIPPLE = false;
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    var ɵ0 = function (theme) {
        return ({
            padding: '0 8px',
            fontSize: theme.pxToRem(theme.typography.button.fontSize - 1),
            minHeight: '32px',
            minWidth: '64px'
        });
    }, ɵ1 = function (theme) {
        return ({
            padding: '0 21px',
            fontSize: theme.pxToRem(theme.typography.button.fontSize + 1),
            minHeight: '40px',
            minWidth: '112px'
        });
    };
    /** *
     * @ignore
      @type {?} */
    var Size = {
        small: ɵ0,
        medium: ({
            padding: '0 14px',
            minHeight: '36px',
            minWidth: '88px'
        }),
        large: ɵ1
    };
    var LyButton = /** @class */ (function () {
        function LyButton(_elementRef, _renderer, _theme, _ngZone, _rippleService, bgAndColor) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._theme = _theme;
            this._ngZone = _ngZone;
            this._rippleService = _rippleService;
            /**
             * Style
             * @ignore
             */
            this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
            this._rippleSensitive = false;
            this._disableRipple = null;
            if (bgAndColor) {
                bgAndColor.setAutoContrast();
            }
        }
        Object.defineProperty(LyButton.prototype, "rippleSensitive", {
            /** @ignore */
            get: /**
             * @ignore
             * @return {?}
             */ function () {
                return this._rippleSensitive;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._rippleSensitive = ui.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyButton.prototype, "disableRipple", {
            get: /**
             * @return {?}
             */ function () {
                return this._disableRipple;
            },
            /** Whether ripples are disabled. */
            set: /**
             * Whether ripples are disabled.
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (ui.Platform.isBrowser && val !== this._disableRipple) {
                    /** @type {?} */
                    var newVal = this._disableRipple = ui.toBoolean(val);
                    // remove previous ripple if exist
                    this.ngOnDestroy();
                    if (!newVal) {
                        /** @type {?} */
                        var rippleContainer = this._rippleContainer.nativeElement;
                        /** @type {?} */
                        var triggerElement = this._elementRef.nativeElement;
                        this._ripple = new ripple.Ripple(this._theme.config, this._ngZone, this._rippleService.classes, rippleContainer, triggerElement);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyButton.prototype, "size", {
            /** Button size */
            get: /**
             * Button size
             * @return {?}
             */ function () {
                return this._size;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.size) {
                    this._size = val;
                    this._sizeClass = this._theme.addStyle("lyButton-size:" + this.size, Size[ /** @type {?} */(this.size)], this._elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyButton.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._renderer.addClass(this._elementRef.nativeElement, this.classes.root);
                if (!this.size) {
                    this.size = DEFAULT_SIZE;
                }
            };
        /**
         * @return {?}
         */
        LyButton.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (this.disableRipple === null) {
                    this.disableRipple = DEFAULT_DISABLE_RIPPLE;
                }
            };
        /**
         * @return {?}
         */
        LyButton.prototype.focus = /**
         * @return {?}
         */
            function () {
                this._elementRef.nativeElement.focus();
            };
        /**
         * @return {?}
         */
        LyButton.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (ui.Platform.isBrowser) {
                    if (this._ripple) {
                        this._ripple.removeEvents();
                        this._ripple = null;
                    }
                }
            };
        LyButton.decorators = [
            { type: core.Component, args: [{
                        selector: '[ly-button]',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "\n  <span [className]=\"classes.content\">\n    <ng-content></ng-content>\n  </span>\n  <div #rippleContainer [className]=\"_rippleService.classes.container\"></div>\n  ",
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        LyButton.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ui.LyTheme2 },
                { type: core.NgZone },
                { type: ripple.LyRippleService },
                { type: ui.LyCommon, decorators: [{ type: core.Optional }] }
            ];
        };
        LyButton.propDecorators = {
            _rippleContainer: [{ type: core.ViewChild, args: ['rippleContainer',] }],
            rippleSensitive: [{ type: core.Input, args: ['sensitive',] }],
            disableRipple: [{ type: core.Input }],
            size: [{ type: core.Input }]
        };
        return LyButton;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyButtonModule = /** @class */ (function () {
        function LyButtonModule() {
        }
        LyButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, ripple.LyRippleModule, ui.LyCommonModule],
                        exports: [LyButton, ui.LyCommonModule],
                        declarations: [LyButton]
                    },] }
        ];
        return LyButtonModule;
    }());

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

    exports.LyButton = LyButton;
    exports.LyButtonModule = LyButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLnN0eWxlLnRzIiwibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgTFlfQ09NTU9OX1NUWUxFUyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB0aGVtZSA9PiB7XG4gIGNvbnN0IHsgYnV0dG9uLCBmb250RmFtaWx5IH0gPSB0aGVtZS50eXBvZ3JhcGh5O1xuICBjb25zdCBfc3R5bGVzID0gKHtcbiAgICByb290OiB7XG4gICAgICBmb250RmFtaWx5LFxuICAgICAgY29sb3I6IHRoZW1lLnRleHQuZGVmYXVsdCxcbiAgICAgICctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgwLCAwLCAwLCAwKWAsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBwYWRkaW5nOiAnMCAxZW0nLFxuICAgICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJy13ZWJraXQtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAnLW1vei11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbXMtdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJyxcbiAgICAgICctd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lJzogJ25vbmUnLFxuICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtcywgYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKSAwbXMnLFxuICAgICAgLi4uYnV0dG9uXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduQ29udGVudDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgfVxuICB9KTtcbiAgaWYgKHR5cGVvZiBfc3R5bGVzLnJvb3QuZm9udFNpemUgPT09ICdudW1iZXInKSB7XG4gICAgX3N0eWxlcy5yb290LmZvbnRTaXplID0gdGhlbWUucHhUb1JlbShfc3R5bGVzLnJvb3QuZm9udFNpemUpO1xuICB9XG4gIGlmICh0eXBlb2YgX3N0eWxlcy5yb290LmxldHRlclNwYWNpbmcgPT09ICdudW1iZXInKSB7XG4gICAgX3N0eWxlcy5yb290LmxldHRlclNwYWNpbmcgPSB0aGVtZS5weFRvUmVtKF9zdHlsZXMucm9vdC5sZXR0ZXJTcGFjaW5nKTtcbiAgfVxuICByZXR1cm4gX3N0eWxlcztcbn07XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIEx5VGhlbWUyLFxuICBMeUNvbW1vblxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vYnV0dG9uLnN0eWxlJztcbmNvbnN0IERFRkFVTFRfU0laRSA9ICdtZWRpdW0nO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxudHlwZSBMeUJ1dHRvblNpemUgPSAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4vKiogQGlnbm9yZSAqL1xuY29uc3QgU2l6ZTogUmVjb3JkPEx5QnV0dG9uU2l6ZSwgYW55PiA9IHtcbiAgc21hbGw6IHRoZW1lID0+ICh7XG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSAtIDEpLFxuICAgIG1pbkhlaWdodDogJzMycHgnLFxuICAgIG1pbldpZHRoOiAnNjRweCdcbiAgfSksXG4gIG1lZGl1bTogKHtcbiAgICBwYWRkaW5nOiAnMCAxNHB4JyxcbiAgICBtaW5IZWlnaHQ6ICczNnB4JyxcbiAgICBtaW5XaWR0aDogJzg4cHgnXG4gIH0pLFxuICBsYXJnZTogKHRoZW1lKSA9PiAoe1xuICAgIHBhZGRpbmc6ICcwIDIxcHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplICsgMSksXG4gICAgbWluSGVpZ2h0OiAnNDBweCcsXG4gICAgbWluV2lkdGg6ICcxMTJweCdcbiAgfSlcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tseS1idXR0b25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gIDxzcGFuIFtjbGFzc05hbWVdPVwiY2xhc3Nlcy5jb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L3NwYW4+XG4gIDxkaXYgI3JpcHBsZUNvbnRhaW5lciBbY2xhc3NOYW1lXT1cIl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMuY29udGFpbmVyXCI+PC9kaXY+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBTdHlsZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX3JpcHBsZTogUmlwcGxlO1xuICBwcml2YXRlIF9zaXplOiBMeUJ1dHRvblNpemU7XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nO1xuICBwcml2YXRlIF9kaXNhYmxlUmlwcGxlOiBib29sZWFuID0gbnVsbDtcbiAgLyoqIEBpZ25vcmUgKi9cbiAgQFZpZXdDaGlsZCgncmlwcGxlQ29udGFpbmVyJykgX3JpcHBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAvKiogQGlnbm9yZSAqL1xuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHJpcHBsZXMgYXJlIGRpc2FibGVkLiAqL1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZVJpcHBsZSh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyICYmIHZhbCAhPT0gdGhpcy5fZGlzYWJsZVJpcHBsZSkge1xuICAgICAgY29uc3QgbmV3VmFsID0gdGhpcy5fZGlzYWJsZVJpcHBsZSA9IHRvQm9vbGVhbih2YWwpO1xuICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzIHJpcHBsZSBpZiBleGlzdFxuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgICAgaWYgKCFuZXdWYWwpIHtcbiAgICAgICAgLy8gYWRkIHJpcHBsZVxuICAgICAgICBjb25zdCByaXBwbGVDb250YWluZXIgPSB0aGlzLl9yaXBwbGVDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgdHJpZ2dlckVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX3JpcHBsZSA9IG5ldyBSaXBwbGUodGhpcy5fdGhlbWUuY29uZmlnLCB0aGlzLl9uZ1pvbmUsIHRoaXMuX3JpcHBsZVNlcnZpY2UuY2xhc3NlcywgcmlwcGxlQ29udGFpbmVyLCB0cmlnZ2VyRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlUmlwcGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUmlwcGxlO1xuICB9XG4gIC8qKiBCdXR0b24gc2l6ZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc2l6ZSgpOiBMeUJ1dHRvblNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG4gIHNldCBzaXplKHZhbDogTHlCdXR0b25TaXplKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBseUJ1dHRvbi1zaXplOiR7dGhpcy5zaXplfWAsXG4gICAgICAgIFNpemVbdGhpcy5zaXplIGFzIGFueV0sXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2l6ZUNsYXNzLFxuICAgICAgICBTVFlMRV9QUklPUklUWVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHB1YmxpYyBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIGJnQW5kQ29sb3I6IEx5Q29tbW9uXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSBERUZBVUxUX1NJWkU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVSaXBwbGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJpcHBsZSA9IERFRkFVTFRfRElTQUJMRV9SSVBQTEU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHRoaXMuX3JpcHBsZSkge1xuICAgICAgICB0aGlzLl9yaXBwbGUucmVtb3ZlRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuX3JpcHBsZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIEFwcFxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUJ1dHRvbiwgTHlDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJ1dHRvbl1cbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25Nb2R1bGUge31cbiJdLCJuYW1lcyI6WyJ0b0Jvb2xlYW4iLCJQbGF0Zm9ybSIsIlJpcHBsZSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTHlUaGVtZTIiLCJOZ1pvbmUiLCJMeVJpcHBsZVNlcnZpY2UiLCJMeUNvbW1vbiIsIk9wdGlvbmFsIiwiVmlld0NoaWxkIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkx5UmlwcGxlTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxRQUFRLEdBQUc7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsQ0FBQyxHQUFH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