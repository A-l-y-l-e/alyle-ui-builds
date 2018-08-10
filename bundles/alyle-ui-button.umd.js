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
            'padding:0 1em;' +
            '-moz-appearance:none;' +
            'margin:0;' +
            'border-radius:3px;' +
            'outline:none;' +
            'font-weight:500;' +
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
    var /** @type {?} */ DEFAULT_SIZE = 'medium';
    var ɵ0 = function (theme) {
        return ("padding:0 8px;" +
            ("font-size:" + theme.pxToRem(theme.typography.button.fontSize - 1) + ";") +
            "min-height: 32px;" +
            "min-width: 64px;");
    }, ɵ1 = function (theme) {
        return ("padding:0 14px;" +
            ("font-size:" + theme.pxToRem(theme.typography.button.fontSize) + ";") +
            "min-height: 36px;" +
            "min-width: 88px;");
    }, ɵ2 = function (theme) {
        return ("padding:0 21px;" +
            ("font-size:" + theme.pxToRem(theme.typography.button.fontSize + 1) + ";") +
            "min-height: 40px;" +
            "min-width: 112px;");
    };
    var /** @type {?} */ Size = {
        small: ɵ0,
        medium: ɵ1,
        large: ɵ2,
    };
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
        Object.defineProperty(LyButton.prototype, "size", {
            get: /**
             * @return {?}
             */ function () {
                return this._size;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                if (val !== this.size) {
                    // const newClass = this._createSizeClass(val);
                    // this._sizeClass = this.theme.updateClass(this.elementRef.nativeElement, this.renderer, newClass, this._sizeClass);
                    this._size = val;
                    this._sizeClass = this.theme.addStyle("k-button-size:" + this.size, Size[this.size], this.elementRef.nativeElement, this._sizeClass);
                }
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
                if (!this.size) {
                    this.size = DEFAULT_SIZE;
                }
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
         * @param {?} val
         * @return {?}
         */
        LyButton.prototype._createSizeClass = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this._size = val;
                return this.theme.setUpStyleSecondary("k-button-size:" + this.size, Size[this.size]);
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
            "size": [{ type: i0.Input },],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMeVRoZW1lMiwgQ29yZVRoZW1lXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25TZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHtcbiAgICByb290OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2J1dHRvbicsIHtcbiAgICAgICAgJyc6IHJvb3RTdHlsZVxuICAgICAgfSksXG4gICAgb3V0bGluZWQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnRudGxuZCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcmBcbiAgICAgICl9XG4gICAgKSxcbiAgICBidXR0b25Db250ZW50OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2J1dHRvbkNvbnRlbnQnLFxuICAgICAgeycnOiAoKSA9PiAoXG4gICAgICAgIGBwYWRkaW5nOjA7YCArXG4gICAgICAgIGBkaXNwbGF5OmZsZXg7YCArXG4gICAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWl0ZW1zOmluaGVyaXQ7YCArXG4gICAgICAgIGBhbGlnbi1jb250ZW50OmluaGVyaXQ7YCArXG4gICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgYGhlaWdodDogMTAwJTtgICtcbiAgICAgICAgYGJveC1zaXppbmc6IGJvcmRlci1ib3g7YFxuICAgICAgKX1cbiAgICApLFxuICAgIGN1cnJlbnRDb25maWc6IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeTxhbnk+KFxuICAgICAgJ2J1dHRvbkNvbmZpZycsXG4gICAgICB0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYnV0dG9uLCBmb250RmFtaWx5IH0gPSB0aGVtZS50eXBvZ3JhcGh5O1xuICAgICAgICBsZXQgc3R5bGVCdXR0b24gPSAoXG4gICAgICAgICAgYGZvbnQtZmFtaWx5OiR7YnV0dG9uLmZvbnRGYW1pbHkgfHwgZm9udEZhbWlseX07YCArXG4gICAgICAgICAgYGZvbnQtd2VpZ2h0OiR7YnV0dG9uLmZvbnRXZWlnaHR9O2AgK1xuICAgICAgICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKGJ1dHRvbi5mb250U2l6ZSl9O2AgK1xuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLnRleHQuZGVmYXVsdH07YFxuICAgICAgICApO1xuICAgICAgICBpZiAodGhlbWUubGV0dGVyU3BhY2luZykge1xuICAgICAgICAgIHN0eWxlQnV0dG9uICs9IGBsZXR0ZXItc3BhY2luZzoke3RoZW1lLnB4VG9SZW0oYnV0dG9uLmxldHRlclNwYWNpbmcpfTtgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChidXR0b24udGV4dFRyYW5zZm9ybSkge1xuICAgICAgICAgIHN0eWxlQnV0dG9uICs9IGB0ZXh0LXRyYW5zZm9ybToke2J1dHRvbi50ZXh0VHJhbnNmb3JtfTtgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZUJ1dHRvbjtcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuZnVuY3Rpb24gcm9vdFN0eWxlKCkge1xuICByZXR1cm4gJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDsnICtcbiAgJ2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTsnICtcbiAgJ2JvcmRlcjowOycgK1xuICAncGFkZGluZzowIDFlbTsnICtcbiAgJy1tb3otYXBwZWFyYW5jZTpub25lOycgK1xuICAnbWFyZ2luOjA7JyArXG4gICdib3JkZXItcmFkaXVzOjNweDsnICtcbiAgJ291dGxpbmU6bm9uZTsnICtcbiAgJ2ZvbnQtd2VpZ2h0OjUwMDsnICtcbiAgJ2JveC1zaXppbmc6Ym9yZGVyLWJveDsnICtcbiAgJ3Bvc2l0aW9uOnJlbGF0aXZlOycgK1xuICBganVzdGlmeS1jb250ZW50OmNlbnRlcjtgICtcbiAgYGFsaWduLWl0ZW1zOmNlbnRlcjtgICtcbiAgYGFsaWduLWNvbnRlbnQ6Y2VudGVyO2AgK1xuICAnZGlzcGxheTppbmxpbmUtZmxleDsnICtcbiAgJ2N1cnNvcjpwb2ludGVyOycgK1xuICAnLXdlYmtpdC11c2VyLXNlbGVjdDpub25lOycgK1xuICAnLW1vei11c2VyLXNlbGVjdDpub25lOycgK1xuICAnLW1zLXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICd1c2VyLXNlbGVjdDpub25lOycgK1xuICAndGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTsnICtcbiAgJy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTsnICtcbiAgJ3RyYW5zaXRpb246YWxsIDM3NW1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSAwbXM7JyArXG4gIGBvdmVyZmxvdzogaGlkZGVuO2A7XG59XG4iLCJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIEx5VGhlbWUyLFxuICBMeUJnQ29sb3JBbmRSYWlzZWRcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFJpcHBsZSwgTHlSaXBwbGVTZXJ2aWNlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUJ1dHRvblNlcnZpY2UgfSBmcm9tICcuL2J1dHRvbi5zZXJ2aWNlJztcbmNvbnN0IERFRkFVTFRfU0laRSA9ICdtZWRpdW0nO1xuY29uc3QgU2l6ZSA9IHtcbiAgc21hbGw6IHRoZW1lID0+IChcbiAgICBgcGFkZGluZzowIDhweDtgICtcbiAgICBgZm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSAtIDEpfTtgICtcbiAgICBgbWluLWhlaWdodDogMzJweDtgICtcbiAgICBgbWluLXdpZHRoOiA2NHB4O2BcbiAgKSxcbiAgbWVkaXVtOiB0aGVtZSA9PiAoXG4gICAgYHBhZGRpbmc6MCAxNHB4O2AgK1xuICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplKX07YCArXG4gICAgYG1pbi1oZWlnaHQ6IDM2cHg7YCArXG4gICAgYG1pbi13aWR0aDogODhweDtgXG4gICksXG4gIGxhcmdlOiB0aGVtZSA9PiAoXG4gICAgYHBhZGRpbmc6MCAyMXB4O2AgK1xuICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplICsgMSl9O2AgK1xuICAgIGBtaW4taGVpZ2h0OiA0MHB4O2AgK1xuICAgIGBtaW4td2lkdGg6IDExMnB4O2BcbiAgKSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tseS1idXR0b25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gIDxzcGFuICNjb250ZW50PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9vdXRsaW5lZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9yaXBwbGVDb250YWluZXI6IFJpcHBsZTtcbiAgcHJpdmF0ZSBfc2l6ZTogc3RyaW5nO1xuICBwcml2YXRlIF9zaXplQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IG91dGxpbmVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRvQm9vbGVhbih2YWwpID09PSB0cnVlID8gdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMub3V0bGluZWQgOiAnJztcbiAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgY2xhc3NuYW1lLCB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSk7XG4gICAgdGhpcy5fb3V0bGluZWRDbGFzc05hbWUgPSBjbGFzc25hbWU7XG4gIH1cbiAgQElucHV0KCdzZW5zaXRpdmUnKVxuICBnZXQgcmlwcGxlU2Vuc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGVTZW5zaXRpdmU7XG4gIH1cbiAgc2V0IHJpcHBsZVNlbnNpdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2l6ZSkge1xuICAgICAgLy8gY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVTaXplQ2xhc3ModmFsKTtcbiAgICAgIC8vIHRoaXMuX3NpemVDbGFzcyA9IHRoaXMudGhlbWUudXBkYXRlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9zaXplQ2xhc3MpO1xuICAgICAgdGhpcy5fc2l6ZSA9IHZhbDtcbiAgICAgIHRoaXMuX3NpemVDbGFzcyA9IHRoaXMudGhlbWUuYWRkU3R5bGUoXG4gICAgICAgIGBrLWJ1dHRvbi1zaXplOiR7dGhpcy5zaXplfWAsXG4gICAgICAgIFNpemVbdGhpcy5zaXplXSxcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuX3NpemVDbGFzc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBAVmlld0NoaWxkKCdjb250ZW50JykgYnV0dG9uQ29udGVudDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSA/ICdyJyA6ICdmJztcbiAgICB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgYnRuJHtrZXl9YCwgeycnOiB0aGlzLmRpc2FibGVTdHlsZS5iaW5kKHRoaXMpfSk7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyByaXBwbGVTdHlsZXM6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIGJ1dHRvblNlcnZpY2U6IEx5QnV0dG9uU2VydmljZSxcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiZ0FuZENvbG9yOiBMeUJnQ29sb3JBbmRSYWlzZWRcbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZShfbmdab25lLCByaXBwbGVTdHlsZXMuc3R5bGVzRGF0YSwgZWwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzLmN1cnJlbnRDb25maWcpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzLnJvb3QpO1xuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSBERUZBVUxUX1NJWkU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzZWQoKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXM7XG4gICAgICAodGhpcy5idXR0b25Db250ZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGNsYXNzZXMuYnV0dG9uQ29udGVudFxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzYWJsZVN0eWxlKCkge1xuICAgIGxldCBzdHlsZSA9XG4gICAgYGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtgICtcbiAgICBgY3Vyc29yOiBkZWZhdWx0O2AgK1xuICAgIGBjb2xvcjogJHt0aGlzLnRoZW1lLmNvbmZpZy50ZXh0LmRpc2FibGVkfSAhaW1wb3J0YW50O2AgK1xuICAgIGBwb2ludGVyLWV2ZW50czogbm9uZTtgO1xuICAgIGlmICh0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSkge1xuICAgICAgc3R5bGUgKz0gYGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcuYnV0dG9uLmRpc2FibGVkfSAhaW1wb3J0YW50O2A7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVNpemVDbGFzcyh2YWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbDtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KGBrLWJ1dHRvbi1zaXplOiR7dGhpcy5zaXplfWAsIFNpemVbdGhpcy5zaXplXSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIEFwcFxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b24gfSBmcm9tICdAYWx5bGUvdWkvaWNvbi1idXR0b24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeVJpcHBsZU1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlCdXR0b25dLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJ1dHRvbl1cbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25Nb2R1bGUge31cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29yZVRoZW1lIiwiTHlUaGVtZTIiLCJQbGF0Zm9ybSIsIlJpcHBsZSIsInRvQm9vbGVhbiIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTHlSaXBwbGVTZXJ2aWNlIiwiTmdab25lIiwiTHlCZ0NvbG9yQW5kUmFpc2VkIiwiT3B0aW9uYWwiLCJJbnB1dCIsIlZpZXdDaGlsZCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlSaXBwbGVNb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBdURFLHlCQUNVLFdBQ0E7WUFEQSxjQUFTLEdBQVQsU0FBUztZQUNULFVBQUssR0FBTCxLQUFLOzJCQTlDTDtnQkFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDdEMsUUFBUSxFQUFFO29CQUNSLEVBQUUsRUFBRSxTQUFTO2lCQUNkLENBQUM7Z0JBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUNqQyxTQUFTLEVBQ1QsRUFBQyxFQUFFLEVBQUU7d0JBQU0sUUFDVCxnQ0FBZ0M7cUJBQ2pDLEVBQUMsQ0FDSDtnQkFDRCxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQ3RDLGVBQWUsRUFDZixFQUFDLEVBQUUsRUFBRTt3QkFBTSxRQUNULFlBQVk7NEJBQ1osZUFBZTs0QkFDZiwwQkFBMEI7NEJBQzFCLHNCQUFzQjs0QkFDdEIsd0JBQXdCOzRCQUN4QixjQUFjOzRCQUNkLGVBQWU7NEJBQ2YseUJBQXlCO3FCQUMxQixFQUFDLENBQ0g7Z0JBQ0QsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQzNDLGNBQWMsRUFDZCxVQUFBLEtBQUs7b0JBQ0gsMkJBQVEsa0JBQU0sRUFBRSwwQkFBVSxDQUFzQjtvQkFDaEQscUJBQUksV0FBVyxJQUNiLGtCQUFlLE1BQU0sQ0FBQyxVQUFVLElBQUksVUFBVSxPQUFHO3lCQUNqRCxpQkFBZSxNQUFNLENBQUMsVUFBVSxNQUFHLENBQUE7eUJBQ25DLGVBQWEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMs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