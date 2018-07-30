(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui'), require('@angular/core'), require('@alyle/ui/ripple'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/button', ['exports', '@alyle/ui', '@angular/core', '@alyle/ui/ripple', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.button = {}),global.alyle.ui,global.ng.core,global.alyle.ui.ripple,global.ng.common));
}(this, (function (exports,i1,i0,ripple,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyButtonService = /** @class */ (function () {
        function LyButtonService(coreTheme, theme) {
            this.coreTheme = coreTheme;
            this.theme = theme;
            this.classes = {
                root: this.coreTheme.setUpStyleSecondary('button', {
                    '': rootStyle
                }),
                outlined: this.coreTheme.setUpStyle('btntlnd', { '': function () {
                        return ("border: 1px solid currentColor");
                    } }),
                buttonContent: this.coreTheme.setUpStyle('buttonContent', { '': function () {
                        return ("padding:0;" +
                            "display:flex;" +
                            "justify-content:inherit;" +
                            "align-items:inherit;" +
                            "align-content:inherit;" +
                            "width: 100%;" +
                            "height: 100%;" +
                            "box-sizing: border-box;");
                    } }),
                currentConfig: this.theme.setUpStyleSecondary('buttonConfig', function (theme) {
                    var _a = theme.typography, button = _a.button, fontFamily = _a.fontFamily;
                    var /** @type {?} */ styleButton = ("font-family:" + (button.fontFamily || fontFamily) + ";" +
                        ("font-weight:" + button.fontWeight + ";") +
                        ("font-size:" + theme.pxToRem(button.fontSize) + ";") +
                        ("color:" + theme.text.default + ";"));
                    if (theme.letterSpacing) {
                        styleButton += "letter-spacing:" + theme.pxToRem(button.letterSpacing) + ";";
                    }
                    if (button.textTransform) {
                        styleButton += "text-transform:" + button.textTransform + ";";
                    }
                    return styleButton;
                })
            };
        }
        LyButtonService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LyButtonService.ctorParameters = function () {
            return [
                { type: i1.CoreTheme, },
                { type: i1.LyTheme2, },
            ];
        };
        /** @nocollapse */ LyButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyButtonService_Factory() { return new LyButtonService(i0.inject(i1.CoreTheme), i0.inject(i1.LyTheme2)); }, token: LyButtonService, providedIn: "root" });
        return LyButtonService;
    }());
    /**
     * @return {?}
     */
    function rootStyle() {
        return '-webkit-tap-highlight-color:transparent;' +
            'background-color:rgba(0, 0, 0, 0);' +
            'border:0;' +
            'padding:0 16px;' +
            '-moz-appearance:none;' +
            'min-height:36px;' +
            'height:36px;' +
            'margin:0;' +
            'border-radius:3px;' +
            'outline:none;' +
            'font-weight:500;' +
            'min-width:88px;' +
            'box-sizing:border-box;' +
            'position:relative;' +
            "justify-content:center;" +
            "align-items:center;" +
            "align-content:center;" +
            'display:inline-flex;' +
            'cursor:pointer;' +
            '-webkit-user-select:none;' +
            '-moz-user-select:none;' +
            '-ms-user-select:none;' +
            'user-select:none;' +
            'text-decoration-line:none;' +
            '-webkit-text-decoration-line:none;' +
            'transition:all 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;' +
            "overflow: hidden;";
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyButton = /** @class */ (function () {
        function LyButton(elementRef, renderer, theme, rippleStyles, buttonService, _ngZone, bgAndColor) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.theme = theme;
            this.rippleStyles = rippleStyles;
            this.buttonService = buttonService;
            this.bgAndColor = bgAndColor;
            this._disabled = false;
            this._rippleSensitive = false;
            if (bgAndColor) {
                bgAndColor.setAutoContrast();
            }
            if (i1.Platform.isBrowser) {
                var /** @type {?} */ el = elementRef.nativeElement;
                this._rippleContainer = new ripple.Ripple(_ngZone, rippleStyles.stylesData, el);
            }
        }
        Object.defineProperty(LyButton.prototype, "outlined", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                var /** @type {?} */ classname = i1.toBoolean(val) === true ? this.buttonService.classes.outlined : '';
                this.theme.updateClassName(this.elementRef.nativeElement, this.renderer, classname, this._outlinedClassName);
                this._outlinedClassName = classname;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyButton.prototype, "rippleSensitive", {
            get: /**
             * @return {?}
             */ function () {
                return this._rippleSensitive;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._rippleSensitive = i1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LyButton.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                var /** @type {?} */ key = this.bgAndColor && (this.bgAndColor.raised || this.bgAndColor.bg) ? 'r' : 'f';
                this._disabledClassName = this.theme.setUpStyle("btn" + key, { '': this.disableStyle.bind(this) });
                this._disabled = i1.toBoolean(value);
                if (this._disabled) {
                    this.renderer.addClass(this.elementRef.nativeElement, this._disabledClassName);
                }
                else {
                    this.renderer.removeClass(this.elementRef.nativeElement, this._disabledClassName);
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
                this.renderer.addClass(this.elementRef.nativeElement, this.buttonService.classes.currentConfig);
                this.renderer.addClass(this.elementRef.nativeElement, this.buttonService.classes.root);
            };
        /**
         * @return {?}
         */
        LyButton.prototype.focused = /**
         * @return {?}
         */
            function () {
                this.elementRef.nativeElement.focus();
            };
        /**
         * @return {?}
         */
        LyButton.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ classes = this.buttonService.classes;
                ( /** @type {?} */(this.buttonContent.nativeElement)).classList.add(classes.buttonContent);
            };
        /**
         * @return {?}
         */
        LyButton.prototype.disableStyle = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ style = "box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;" +
                    "cursor: default;" +
                    ("color: " + this.theme.config["text"].disabled + " !important;") +
                    "pointer-events: none;";
                if (this.bgAndColor && (this.bgAndColor.raised || this.bgAndColor.bg)) {
                    style += "background-color: " + this.theme.config["button"].disabled + " !important;";
                }
                return style;
            };
        /**
         * @return {?}
         */
        LyButton.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (i1.Platform.isBrowser) {
                    this._rippleContainer.removeEvents();
                }
            };
        LyButton.decorators = [
            { type: i0.Component, args: [{
                        selector: '[ly-button]',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n  <span #content>\n    <ng-content></ng-content>\n  </span>\n  ",
                        encapsulation: i0.ViewEncapsulation.None
                    },] },
        ];
        /** @nocollapse */
        LyButton.ctorParameters = function () {
            return [
                { type: i0.ElementRef, },
                { type: i0.Renderer2, },
                { type: i1.LyTheme2, },
                { type: ripple.LyRippleService, },
                { type: LyButtonService, },
                { type: i0.NgZone, },
                { type: i1.LyBgColorAndRaised, decorators: [{ type: i0.Optional },] },
            ];
        };
        LyButton.propDecorators = {
            "outlined": [{ type: i0.Input },],
            "rippleSensitive": [{ type: i0.Input, args: ['sensitive',] },],
            "buttonContent": [{ type: i0.ViewChild, args: ['content',] },],
            "disabled": [{ type: i0.Input },],
        };
        return LyButton;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LyButtonModule = /** @class */ (function () {
        function LyButtonModule() {
        }
        LyButtonModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule, ripple.LyRippleModule, i1.LyCommonModule],
                        exports: [LyButton],
                        declarations: [LyButton]
                    },] },
        ];
        return LyButtonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.LyButton = LyButton;
    exports.LyButtonModule = LyButtonModule;
    exports.ɵa = LyButtonService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMeVRoZW1lMiwgQ29yZVRoZW1lXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25TZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHtcbiAgICByb290OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2J1dHRvbicsIHtcbiAgICAgICAgJyc6IHJvb3RTdHlsZVxuICAgICAgfSksXG4gICAgb3V0bGluZWQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnRudGxuZCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcmBcbiAgICAgICl9XG4gICAgKSxcbiAgICBidXR0b25Db250ZW50OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2J1dHRvbkNvbnRlbnQnLFxuICAgICAgeycnOiAoKSA9PiAoXG4gICAgICAgIGBwYWRkaW5nOjA7YCArXG4gICAgICAgIGBkaXNwbGF5OmZsZXg7YCArXG4gICAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWl0ZW1zOmluaGVyaXQ7YCArXG4gICAgICAgIGBhbGlnbi1jb250ZW50OmluaGVyaXQ7YCArXG4gICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgYGhlaWdodDogMTAwJTtgICtcbiAgICAgICAgYGJveC1zaXppbmc6IGJvcmRlci1ib3g7YFxuICAgICAgKX1cbiAgICApLFxuICAgIGN1cnJlbnRDb25maWc6IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeTxhbnk+KFxuICAgICAgJ2J1dHRvbkNvbmZpZycsXG4gICAgICB0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYnV0dG9uLCBmb250RmFtaWx5IH0gPSB0aGVtZS50eXBvZ3JhcGh5O1xuICAgICAgICBsZXQgc3R5bGVCdXR0b24gPSAoXG4gICAgICAgICAgYGZvbnQtZmFtaWx5OiR7YnV0dG9uLmZvbnRGYW1pbHkgfHwgZm9udEZhbWlseX07YCArXG4gICAgICAgICAgYGZvbnQtd2VpZ2h0OiR7YnV0dG9uLmZvbnRXZWlnaHR9O2AgK1xuICAgICAgICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKGJ1dHRvbi5mb250U2l6ZSl9O2AgK1xuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLnRleHQuZGVmYXVsdH07YFxuICAgICAgICApO1xuICAgICAgICBpZiAodGhlbWUubGV0dGVyU3BhY2luZykge1xuICAgICAgICAgIHN0eWxlQnV0dG9uICs9IGBsZXR0ZXItc3BhY2luZzoke3RoZW1lLnB4VG9SZW0oYnV0dG9uLmxldHRlclNwYWNpbmcpfTtgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChidXR0b24udGV4dFRyYW5zZm9ybSkge1xuICAgICAgICAgIHN0eWxlQnV0dG9uICs9IGB0ZXh0LXRyYW5zZm9ybToke2J1dHRvbi50ZXh0VHJhbnNmb3JtfTtgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZUJ1dHRvbjtcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuZnVuY3Rpb24gcm9vdFN0eWxlKCkge1xuICByZXR1cm4gJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDsnICtcbiAgJ2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTsnICtcbiAgJ2JvcmRlcjowOycgK1xuICAncGFkZGluZzowIDE2cHg7JyArXG4gICctbW96LWFwcGVhcmFuY2U6bm9uZTsnICtcbiAgJ21pbi1oZWlnaHQ6MzZweDsnICtcbiAgJ2hlaWdodDozNnB4OycgK1xuICAnbWFyZ2luOjA7JyArXG4gICdib3JkZXItcmFkaXVzOjNweDsnICtcbiAgJ291dGxpbmU6bm9uZTsnICtcbiAgJ2ZvbnQtd2VpZ2h0OjUwMDsnICtcbiAgJ21pbi13aWR0aDo4OHB4OycgK1xuICAnYm94LXNpemluZzpib3JkZXItYm94OycgK1xuICAncG9zaXRpb246cmVsYXRpdmU7JyArXG4gIGBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2AgK1xuICBgYWxpZ24taXRlbXM6Y2VudGVyO2AgK1xuICBgYWxpZ24tY29udGVudDpjZW50ZXI7YCArXG4gICdkaXNwbGF5OmlubGluZS1mbGV4OycgK1xuICAnY3Vyc29yOnBvaW50ZXI7JyArXG4gICctd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbW96LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbXMtdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJ3VzZXItc2VsZWN0Om5vbmU7JyArXG4gICd0ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAndHJhbnNpdGlvbjphbGwgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtczsnICtcbiAgYG92ZXJmbG93OiBoaWRkZW47YDtcbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgTHlUaGVtZTIsXG4gIEx5QmdDb2xvckFuZFJhaXNlZFxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5QnV0dG9uU2VydmljZSB9IGZyb20gJy4vYnV0dG9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbHktYnV0dG9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiAjY29udGVudD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9yaXBwbGVTZW5zaXRpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWRDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3V0bGluZWRDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcmlwcGxlQ29udGFpbmVyOiBSaXBwbGU7XG4gIEBJbnB1dCgpXG4gIHNldCBvdXRsaW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0b0Jvb2xlYW4odmFsKSA9PT0gdHJ1ZSA/IHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzLm91dGxpbmVkIDogJyc7XG4gICAgdGhpcy50aGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIGNsYXNzbmFtZSwgdGhpcy5fb3V0bGluZWRDbGFzc05hbWUpO1xuICAgIHRoaXMuX291dGxpbmVkQ2xhc3NOYW1lID0gY2xhc3NuYW1lO1xuICB9XG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudCcpIGJ1dHRvbkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5iZ0FuZENvbG9yICYmICh0aGlzLmJnQW5kQ29sb3IucmFpc2VkIHx8IHRoaXMuYmdBbmRDb2xvci5iZykgPyAncicgOiAnZic7XG4gICAgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGJ0biR7a2V5fWAsIHsnJzogdGhpcy5kaXNhYmxlU3R5bGUuYmluZCh0aGlzKX0pO1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgcmlwcGxlU3R5bGVzOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBidXR0b25TZXJ2aWNlOiBMeUJ1dHRvblNlcnZpY2UsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYmdBbmRDb2xvcjogTHlCZ0NvbG9yQW5kUmFpc2VkXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUoX25nWm9uZSwgcmlwcGxlU3R5bGVzLnN0eWxlc0RhdGEsIGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5jdXJyZW50Q29uZmlnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1c2VkKCkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzO1xuICAgICAgKHRoaXMuYnV0dG9uQ29udGVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBjbGFzc2VzLmJ1dHRvbkNvbnRlbnRcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRpc2FibGVTdHlsZSgpIHtcbiAgICBsZXQgc3R5bGUgPVxuICAgIGBib3gtc2hhZG93OiAwIDAgMCByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7YCArXG4gICAgYGN1cnNvcjogZGVmYXVsdDtgICtcbiAgICBgY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcudGV4dC5kaXNhYmxlZH0gIWltcG9ydGFudDtgICtcbiAgICBgcG9pbnRlci1ldmVudHM6IG5vbmU7YDtcbiAgICBpZiAodGhpcy5iZ0FuZENvbG9yICYmICh0aGlzLmJnQW5kQ29sb3IucmFpc2VkIHx8IHRoaXMuYmdBbmRDb2xvci5iZykpIHtcbiAgICAgIHN0eWxlICs9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMudGhlbWUuY29uZmlnLmJ1dHRvbi5kaXNhYmxlZH0gIWltcG9ydGFudDtgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIEFwcFxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b24gfSBmcm9tICdAYWx5bGUvdWkvaWNvbi1idXR0b24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeVJpcHBsZU1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlCdXR0b25dLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJ1dHRvbl1cbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25Nb2R1bGUge31cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29yZVRoZW1lIiwiTHlUaGVtZTIiLCJQbGF0Zm9ybSIsIlJpcHBsZSIsInRvQm9vbGVhbiIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTHlSaXBwbGVTZXJ2aWNlIiwiTmdab25lIiwiTHlCZ0NvbG9yQW5kUmFpc2VkIiwiT3B0aW9uYWwiLCJJbnB1dCIsIlZpZXdDaGlsZCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlSaXBwbGVNb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBdURFLHlCQUNVLFdBQ0E7WUFEQSxjQUFTLEdBQVQsU0FBUztZQUNULFVBQUssR0FBTCxLQUFLOzJCQTlDTDtnQkFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDdEMsUUFBUSxFQUFFO29CQUNSLEVBQUUsRUFBRSxTQUFTO2lCQUNkLENBQUM7Z0JBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUNqQyxTQUFTLEVBQ1QsRUFBQyxFQUFFLEVB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