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
        function LyButtonService(coreTheme) {
            this.coreTheme = coreTheme;
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
                    } })
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
            ];
        };
        /** @nocollapse */ LyButtonService.ngInjectableDef = i0.defineInjectable({ factory: function LyButtonService_Factory() { return new LyButtonService(i0.inject(i1.CoreTheme)); }, token: LyButtonService, providedIn: "root" });
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
        Object.defineProperty(LyButton.prototype, "classes", {
            get: /**
             * @return {?}
             */ function () {
                var _this = this;
                return {
                    currentConfig: this.theme.setUpStyleSecondary('buttonConfig', {
                        '': function () {
                            return ("font-family:" + _this.theme.config["typography"].fontFamily + ";" +
                                ("font-size:" + _this.theme.config["typography"].fontSize + "px;") +
                                ("color:" + _this.theme.config["text"].default + ";"));
                        }
                    })
                };
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
                this.renderer.addClass(this.elementRef.nativeElement, this.classes.currentConfig);
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
                        selector: '[ly-button], ly-button',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24uc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMeVRoZW1lMiwgQ29yZVRoZW1lXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSByb290Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgdGhlbWVDbGFzc05hbWU6IHN0cmluZztcbiAgY2xhc3NlcyA9IHtcbiAgICByb290OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ2J1dHRvbicsIHtcbiAgICAgICAgJyc6IHJvb3RTdHlsZVxuICAgICAgfSksXG4gICAgb3V0bGluZWQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnRudGxuZCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcmBcbiAgICAgICl9XG4gICAgKSxcbiAgICBidXR0b25Db250ZW50OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKFxuICAgICAgJ2J1dHRvbkNvbnRlbnQnLFxuICAgICAgeycnOiAoKSA9PiAoXG4gICAgICAgIGBwYWRkaW5nOjA7YCArXG4gICAgICAgIGBkaXNwbGF5OmZsZXg7YCArXG4gICAgICAgIGBqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWl0ZW1zOmluaGVyaXQ7YCArXG4gICAgICAgIGBhbGlnbi1jb250ZW50OmluaGVyaXQ7YCArXG4gICAgICAgIGB3aWR0aDogMTAwJTtgICtcbiAgICAgICAgYGhlaWdodDogMTAwJTtgICtcbiAgICAgICAgYGJveC1zaXppbmc6IGJvcmRlci1ib3g7YFxuICAgICAgKX1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWVcbiAgKSB7IH1cbn1cblxuZnVuY3Rpb24gcm9vdFN0eWxlKCkge1xuICByZXR1cm4gJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDsnICtcbiAgJ2JhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTsnICtcbiAgJ2JvcmRlcjowOycgK1xuICAncGFkZGluZzowIDE2cHg7JyArXG4gICctbW96LWFwcGVhcmFuY2U6bm9uZTsnICtcbiAgJ21pbi1oZWlnaHQ6MzZweDsnICtcbiAgJ2hlaWdodDozNnB4OycgK1xuICAnbWFyZ2luOjA7JyArXG4gICdib3JkZXItcmFkaXVzOjNweDsnICtcbiAgJ291dGxpbmU6bm9uZTsnICtcbiAgJ2ZvbnQtd2VpZ2h0OjUwMDsnICtcbiAgJ21pbi13aWR0aDo4OHB4OycgK1xuICAnYm94LXNpemluZzpib3JkZXItYm94OycgK1xuICAncG9zaXRpb246cmVsYXRpdmU7JyArXG4gIGBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2AgK1xuICBgYWxpZ24taXRlbXM6Y2VudGVyO2AgK1xuICBgYWxpZ24tY29udGVudDpjZW50ZXI7YCArXG4gICdkaXNwbGF5OmlubGluZS1mbGV4OycgK1xuICAnY3Vyc29yOnBvaW50ZXI7JyArXG4gICctd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbW96LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbXMtdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJ3VzZXItc2VsZWN0Om5vbmU7JyArXG4gICd0ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAndHJhbnNpdGlvbjphbGwgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtczsnICtcbiAgYG92ZXJmbG93OiBoaWRkZW47YDtcbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIEluamVjdCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBJc0Jvb2xlYW4sXG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBMeVRoZW1lMixcbiAgTHlCZ0NvbG9yQW5kUmFpc2VkXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVJpcHBsZSwgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5QnV0dG9uU2VydmljZSB9IGZyb20gJy4vYnV0dG9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbHktYnV0dG9uXSwgbHktYnV0dG9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gIDxzcGFuICNjb250ZW50PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9vdXRsaW5lZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9yaXBwbGVDb250YWluZXI6IFJpcHBsZTtcbiAgQElucHV0KClcbiAgc2V0IG91dGxpbmVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRvQm9vbGVhbih2YWwpID09PSB0cnVlID8gdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMub3V0bGluZWQgOiAnJztcbiAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgY2xhc3NuYW1lLCB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSk7XG4gICAgdGhpcy5fb3V0bGluZWRDbGFzc05hbWUgPSBjbGFzc25hbWU7XG4gIH1cbiAgQElucHV0KCdzZW5zaXRpdmUnKVxuICBnZXQgcmlwcGxlU2Vuc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGVTZW5zaXRpdmU7XG4gIH1cbiAgc2V0IHJpcHBsZVNlbnNpdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBAVmlld0NoaWxkKCdjb250ZW50JykgYnV0dG9uQ29udGVudDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSA/ICdyJyA6ICdmJztcbiAgICB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgYnRuJHtrZXl9YCwgeycnOiB0aGlzLmRpc2FibGVTdHlsZS5iaW5kKHRoaXMpfSk7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgY2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudENvbmZpZzogdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KCdidXR0b25Db25maWcnLCB7XG4gICAgICAgICcnOiAoKSA9PiAoXG4gICAgICAgICAgYGZvbnQtZmFtaWx5OiR7dGhpcy50aGVtZS5jb25maWcudHlwb2dyYXBoeS5mb250RmFtaWx5fTtgICtcbiAgICAgICAgICBgZm9udC1zaXplOiR7dGhpcy50aGVtZS5jb25maWcudHlwb2dyYXBoeS5mb250U2l6ZX1weDtgICtcbiAgICAgICAgICBgY29sb3I6JHt0aGlzLnRoZW1lLmNvbmZpZy50ZXh0LmRlZmF1bHR9O2BcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgcmlwcGxlU3R5bGVzOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBidXR0b25TZXJ2aWNlOiBMeUJ1dHRvblNlcnZpY2UsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYmdBbmRDb2xvcjogTHlCZ0NvbG9yQW5kUmFpc2VkXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUoX25nWm9uZSwgcmlwcGxlU3R5bGVzLnN0eWxlc0RhdGEsIGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMuY3VycmVudENvbmZpZyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gIH1cblxuICBwdWJsaWMgZm9jdXNlZCgpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3NlcztcbiAgICAgICh0aGlzLmJ1dHRvbkNvbnRlbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgY2xhc3Nlcy5idXR0b25Db250ZW50XG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNhYmxlU3R5bGUoKSB7XG4gICAgbGV0IHN0eWxlID1cbiAgICBgYm94LXNoYWRvdzogMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O2AgK1xuICAgIGBjdXJzb3I6IGRlZmF1bHQ7YCArXG4gICAgYGNvbG9yOiAke3RoaXMudGhlbWUuY29uZmlnLnRleHQuZGlzYWJsZWR9ICFpbXBvcnRhbnQ7YCArXG4gICAgYHBvaW50ZXItZXZlbnRzOiBub25lO2A7XG4gICAgaWYgKHRoaXMuYmdBbmRDb2xvciAmJiAodGhpcy5iZ0FuZENvbG9yLnJhaXNlZCB8fCB0aGlzLmJnQW5kQ29sb3IuYmcpKSB7XG4gICAgICBzdHlsZSArPSBgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnRoZW1lLmNvbmZpZy5idXR0b24uZGlzYWJsZWR9ICFpbXBvcnRhbnQ7YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cbiAgfVxuXG59XG4iLCIvLyBBcHBcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCdXR0b24gfSBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlJY29uQnV0dG9uIH0gZnJvbSAnQGFseWxlL3VpL2ljb24tYnV0dG9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5QnV0dG9uXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlCdXR0b25dXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvcmVUaGVtZSIsIlBsYXRmb3JtIiwiUmlwcGxlIiwidG9Cb29sZWFuIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJWaWV3RW5jYXBzdWxhdGlvbiIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJMeVRoZW1lMiIsIkx5UmlwcGxlU2VydmljZSIsIk5nWm9uZSIsIkx5QmdDb2xvckFuZFJhaXNlZCIsIk9wdGlvbmFsIiwiSW5wdXQiLCJWaWV3Q2hpbGQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkx5UmlwcGxlTW9kdWxlIiwiTHlDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQXlDRSx5QkFDVTtZQUFBLGNBQVMsR0FBVCxTQUFTOzJCQTFCVDtnQkFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDdEMsUUFBUSxFQUFFO29CQUNSLEVBQUUsRUFBRSxTQUFTO2lCQUNkLENBQUM7Z0JBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUNqQyxTQUFTLEVBQ1QsRUFBQyxFQUFFLEVBQUU7d0JBQU0sUUFDVCxnQ0FBZ0M7cUJBQ2pDLEVBQUMsQ0FDSDtnQkFDRCxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQ3RDLGVBQWUsRUFDZixFQUFDLEVBQUUsRUFBRTt3QkFBTSxRQUNULFlBQVk7NEJBQ1osZUFBZTs0QkFDZiwwQkFBMEI7NEJBQzFCLHNCQUFzQjs0QkFDdEIsd0JBQXdCOzRCQUN4QixjQUFjOzRCQUNkLGVB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