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
    var /** @type {?} */ DEFAULT_SIZE = 'medium';
    var ɵ0 = function (theme) {
        return ("padding:0 8px;" +
            ("font-size:" + theme.pxToRem(theme.typography.button.fontSize - 1) + ";") +
            "min-height: 32px;");
    }, ɵ1 = function (theme) {
        return ("padding:0 14px;" +
            ("font-size:" + theme.pxToRem(theme.typography.button.fontSize) + ";") +
            "min-height: 36px;");
    }, ɵ2 = function (theme) {
        return ("padding:0 21px;" +
            ("font-size:" + theme.pxToRem(theme.typography.button.fontSize + 1) + ";") +
            "min-height: 40px;");
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
                    var /** @type {?} */ newClass = this._createSizeClass(val);
                    this._sizeClass = this.theme.updateClass(this.elementRef.nativeElement, this.renderer, newClass, this._sizeClass);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMeVRoZW1lMiwgQ29yZVRoZW1lXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25TZXJ2aWNlIHtcbiAgY2xhc3NlcyA9IHtcbiAgICByb290OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2J1dHRvbicsIHtcbiAgICAgICAgJyc6IHJvb3RTdHlsZVxuICAgICAgfSksXG4gICAgb3V0bGluZWQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnRudGxuZCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcmBcbiAgICAgICl9XG4gICAgKSxcbiAgICBidXR0b25Db250ZW50OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2J1dHRvbkNvbnRlbnQnLFxuICAgICAgeycnOiAoKSA9PiAoXG4gICAgICAgIGBwYWRkaW5nOjA7YCArXG4gICAgICAgIGBkaXNwbGF5OmZsZXg7YCArXG4gICAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWl0ZW1zOmluaGVyaXQ7YCArXG4gICAgICAgIGBhbGlnbi1jb250ZW50OmluaGVyaXQ7YCArXG4gICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgYGhlaWdodDogMTAwJTtgICtcbiAgICAgICAgYGJveC1zaXppbmc6IGJvcmRlci1ib3g7YFxuICAgICAgKX1cbiAgICApLFxuICAgIGN1cnJlbnRDb25maWc6IHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeTxhbnk+KFxuICAgICAgJ2J1dHRvbkNvbmZpZycsXG4gICAgICB0aGVtZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYnV0dG9uLCBmb250RmFtaWx5IH0gPSB0aGVtZS50eXBvZ3JhcGh5O1xuICAgICAgICBsZXQgc3R5bGVCdXR0b24gPSAoXG4gICAgICAgICAgYGZvbnQtZmFtaWx5OiR7YnV0dG9uLmZvbnRGYW1pbHkgfHwgZm9udEZhbWlseX07YCArXG4gICAgICAgICAgYGZvbnQtd2VpZ2h0OiR7YnV0dG9uLmZvbnRXZWlnaHR9O2AgK1xuICAgICAgICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKGJ1dHRvbi5mb250U2l6ZSl9O2AgK1xuICAgICAgICAgIGBjb2xvcjoke3RoZW1lLnRleHQuZGVmYXVsdH07YFxuICAgICAgICApO1xuICAgICAgICBpZiAodGhlbWUubGV0dGVyU3BhY2luZykge1xuICAgICAgICAgIHN0eWxlQnV0dG9uICs9IGBsZXR0ZXItc3BhY2luZzoke3RoZW1lLnB4VG9SZW0oYnV0dG9uLmxldHRlclNwYWNpbmcpfTtgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChidXR0b24udGV4dFRyYW5zZm9ybSkge1xuICAgICAgICAgIHN0eWxlQnV0dG9uICs9IGB0ZXh0LXRyYW5zZm9ybToke2J1dHRvbi50ZXh0VHJhbnNmb3JtfTtgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZUJ1dHRvbjtcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWUsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cbn1cblxuZnVuY3Rpb24gcm9vdFN0eWxlKCkge1xuICByZXR1cm4gJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDsnICtcbiAgJ2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTsnICtcbiAgJ2JvcmRlcjowOycgK1xuICAncGFkZGluZzowIDFlbTsnICtcbiAgJy1tb3otYXBwZWFyYW5jZTpub25lOycgK1xuICAnbWFyZ2luOjA7JyArXG4gICdib3JkZXItcmFkaXVzOjNweDsnICtcbiAgJ291dGxpbmU6bm9uZTsnICtcbiAgJ2ZvbnQtd2VpZ2h0OjUwMDsnICtcbiAgJ21pbi13aWR0aDo4OHB4OycgK1xuICAnYm94LXNpemluZzpib3JkZXItYm94OycgK1xuICAncG9zaXRpb246cmVsYXRpdmU7JyArXG4gIGBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2AgK1xuICBgYWxpZ24taXRlbXM6Y2VudGVyO2AgK1xuICBgYWxpZ24tY29udGVudDpjZW50ZXI7YCArXG4gICdkaXNwbGF5OmlubGluZS1mbGV4OycgK1xuICAnY3Vyc29yOnBvaW50ZXI7JyArXG4gICctd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbW96LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbXMtdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJ3VzZXItc2VsZWN0Om5vbmU7JyArXG4gICd0ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAndHJhbnNpdGlvbjphbGwgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtczsnICtcbiAgYG92ZXJmbG93OiBoaWRkZW47YDtcbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgTHlUaGVtZTIsXG4gIEx5QmdDb2xvckFuZFJhaXNlZFxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5QnV0dG9uU2VydmljZSB9IGZyb20gJy4vYnV0dG9uLnNlcnZpY2UnO1xuY29uc3QgREVGQVVMVF9TSVpFID0gJ21lZGl1bSc7XG5jb25zdCBTaXplID0ge1xuICBzbWFsbDogdGhlbWUgPT4gKFxuICAgIGBwYWRkaW5nOjAgOHB4O2AgK1xuICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplIC0gMSl9O2AgK1xuICAgIGBtaW4taGVpZ2h0OiAzMnB4O2BcbiAgKSxcbiAgbWVkaXVtOiB0aGVtZSA9PiAoXG4gICAgYHBhZGRpbmc6MCAxNHB4O2AgK1xuICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplKX07YCArXG4gICAgYG1pbi1oZWlnaHQ6IDM2cHg7YFxuICApLFxuICBsYXJnZTogdGhlbWUgPT4gKFxuICAgIGBwYWRkaW5nOjAgMjFweDtgICtcbiAgICBgZm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSArIDEpfTtgICtcbiAgICBgbWluLWhlaWdodDogNDBweDtgXG4gICksXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbHktYnV0dG9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiAjY29udGVudD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9yaXBwbGVTZW5zaXRpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWRDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3V0bGluZWRDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcmlwcGxlQ29udGFpbmVyOiBSaXBwbGU7XG4gIHByaXZhdGUgX3NpemU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2l6ZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBvdXRsaW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0b0Jvb2xlYW4odmFsKSA9PT0gdHJ1ZSA/IHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzLm91dGxpbmVkIDogJyc7XG4gICAgdGhpcy50aGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIGNsYXNzbmFtZSwgdGhpcy5fb3V0bGluZWRDbGFzc05hbWUpO1xuICAgIHRoaXMuX291dGxpbmVkQ2xhc3NOYW1lID0gY2xhc3NuYW1lO1xuICB9XG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlU2l6ZUNsYXNzKHZhbCk7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fc2l6ZUNsYXNzKTtcbiAgICB9XG4gIH1cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBAVmlld0NoaWxkKCdjb250ZW50JykgYnV0dG9uQ29udGVudDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSA/ICdyJyA6ICdmJztcbiAgICB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgYnRuJHtrZXl9YCwgeycnOiB0aGlzLmRpc2FibGVTdHlsZS5iaW5kKHRoaXMpfSk7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyByaXBwbGVTdHlsZXM6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIGJ1dHRvblNlcnZpY2U6IEx5QnV0dG9uU2VydmljZSxcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiZ0FuZENvbG9yOiBMeUJnQ29sb3JBbmRSYWlzZWRcbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZShfbmdab25lLCByaXBwbGVTdHlsZXMuc3R5bGVzRGF0YSwgZWwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzLmN1cnJlbnRDb25maWcpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzLnJvb3QpO1xuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSBERUZBVUxUX1NJWkU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzZWQoKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXM7XG4gICAgICAodGhpcy5idXR0b25Db250ZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGNsYXNzZXMuYnV0dG9uQ29udGVudFxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzYWJsZVN0eWxlKCkge1xuICAgIGxldCBzdHlsZSA9XG4gICAgYGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtgICtcbiAgICBgY3Vyc29yOiBkZWZhdWx0O2AgK1xuICAgIGBjb2xvcjogJHt0aGlzLnRoZW1lLmNvbmZpZy50ZXh0LmRpc2FibGVkfSAhaW1wb3J0YW50O2AgK1xuICAgIGBwb2ludGVyLWV2ZW50czogbm9uZTtgO1xuICAgIGlmICh0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSkge1xuICAgICAgc3R5bGUgKz0gYGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcuYnV0dG9uLmRpc2FibGVkfSAhaW1wb3J0YW50O2A7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVNpemVDbGFzcyh2YWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbDtcbiAgICByZXR1cm4gdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KGBrLWJ1dHRvbi1zaXplOiR7dGhpcy5zaXplfWAsIFNpemVbdGhpcy5zaXplXSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIEFwcFxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b24gfSBmcm9tICdAYWx5bGUvdWkvaWNvbi1idXR0b24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeVJpcHBsZU1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlCdXR0b25dLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJ1dHRvbl1cbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25Nb2R1bGUge31cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29yZVRoZW1lIiwiTHlUaGVtZTIiLCJQbGF0Zm9ybSIsIlJpcHBsZSIsInRvQm9vbGVhbiIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTHlSaXBwbGVTZXJ2aWNlIiwiTmdab25lIiwiTHlCZ0NvbG9yQW5kUmFpc2VkIiwiT3B0aW9uYWwiLCJJbnB1dCIsIlZpZXdDaGlsZCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTHlSaXBwbGVNb2R1bGUiLCJMeUNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBdURFLHlCQUNVLFdBQ0E7WUFEQSxjQUFTLEdBQVQsU0FBUztZQUNULFVBQUssR0FBTCxLQUFLOzJCQTlDTDtnQkFDUixJ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