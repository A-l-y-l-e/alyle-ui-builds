import { LyTheme2, CoreTheme, LyCommonModule, Platform, toBoolean, LyBgColorAndRaised } from '@alyle/ui';
import { Injectable, NgModule, ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, ViewChild, NgZone, ViewEncapsulation, defineInjectable, inject } from '@angular/core';
import { Ripple, LyRippleService, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyButtonService.ctorParameters = function () { return [
        { type: CoreTheme, },
        { type: LyTheme2, },
    ]; };
    /** @nocollapse */ LyButtonService.ngInjectableDef = defineInjectable({ factory: function LyButtonService_Factory() { return new LyButtonService(inject(CoreTheme), inject(LyTheme2)); }, token: LyButtonService, providedIn: "root" });
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
        if (Platform.isBrowser) {
            var /** @type {?} */ el = elementRef.nativeElement;
            this._rippleContainer = new Ripple(_ngZone, rippleStyles.stylesData, el);
        }
    }
    Object.defineProperty(LyButton.prototype, "outlined", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ classname = toBoolean(val) === true ? this.buttonService.classes.outlined : '';
            this.theme.updateClassName(this.elementRef.nativeElement, this.renderer, classname, this._outlinedClassName);
            this._outlinedClassName = classname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "rippleSensitive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rippleSensitive;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._rippleSensitive = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ key = this.bgAndColor && (this.bgAndColor.raised || this.bgAndColor.bg) ? 'r' : 'f';
            this._disabledClassName = this.theme.setUpStyle("btn" + key, { '': this.disableStyle.bind(this) });
            this._disabled = toBoolean(value);
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
        (/** @type {?} */ (this.buttonContent.nativeElement)).classList.add(classes.buttonContent);
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
        if (Platform.isBrowser) {
            this._rippleContainer.removeEvents();
        }
    };
    LyButton.decorators = [
        { type: Component, args: [{
                    selector: '[ly-button]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n  <span #content>\n    <ng-content></ng-content>\n  </span>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    LyButton.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyTheme2, },
        { type: LyRippleService, },
        { type: LyButtonService, },
        { type: NgZone, },
        { type: LyBgColorAndRaised, decorators: [{ type: Optional },] },
    ]; };
    LyButton.propDecorators = {
        "outlined": [{ type: Input },],
        "rippleSensitive": [{ type: Input, args: ['sensitive',] },],
        "size": [{ type: Input },],
        "buttonContent": [{ type: ViewChild, args: ['content',] },],
        "disabled": [{ type: Input },],
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
        { type: NgModule, args: [{
                    imports: [CommonModule, LyRippleModule, LyCommonModule],
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

export { LyButton, LyButtonModule, LyButtonService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5VGhlbWUyLCBDb3JlVGhlbWVcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnYnV0dG9uJywge1xuICAgICAgICAnJzogcm9vdFN0eWxlXG4gICAgICB9KSxcbiAgICBvdXRsaW5lZDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdidG50bG5kJyxcbiAgICAgIHsnJzogKCkgPT4gKFxuICAgICAgICBgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yYFxuICAgICAgKX1cbiAgICApLFxuICAgIGJ1dHRvbkNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnV0dG9uQ29udGVudCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYHBhZGRpbmc6MDtgICtcbiAgICAgICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgICBgYWxpZ24taXRlbXM6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApfVxuICAgICksXG4gICAgY3VycmVudENvbmZpZzogdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueT4oXG4gICAgICAnYnV0dG9uQ29uZmlnJyxcbiAgICAgIHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgeyBidXR0b24sIGZvbnRGYW1pbHkgfSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gICAgICAgIGxldCBzdHlsZUJ1dHRvbiA9IChcbiAgICAgICAgICBgZm9udC1mYW1pbHk6JHtidXR0b24uZm9udEZhbWlseSB8fCBmb250RmFtaWx5fTtgICtcbiAgICAgICAgICBgZm9udC13ZWlnaHQ6JHtidXR0b24uZm9udFdlaWdodH07YCArXG4gICAgICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oYnV0dG9uLmZvbnRTaXplKX07YCArXG4gICAgICAgICAgYGNvbG9yOiR7dGhlbWUudGV4dC5kZWZhdWx0fTtgXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGVtZS5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICAgICAgc3R5bGVCdXR0b24gKz0gYGxldHRlci1zcGFjaW5nOiR7dGhlbWUucHhUb1JlbShidXR0b24ubGV0dGVyU3BhY2luZyl9O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgc3R5bGVCdXR0b24gKz0gYHRleHQtdHJhbnNmb3JtOiR7YnV0dG9uLnRleHRUcmFuc2Zvcm19O2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlQnV0dG9uO1xuICAgICAgfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG5mdW5jdGlvbiByb290U3R5bGUoKSB7XG4gIHJldHVybiAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50OycgK1xuICAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApOycgK1xuICAnYm9yZGVyOjA7JyArXG4gICdwYWRkaW5nOjAgMWVtOycgK1xuICAnLW1vei1hcHBlYXJhbmNlOm5vbmU7JyArXG4gICdtYXJnaW46MDsnICtcbiAgJ2JvcmRlci1yYWRpdXM6M3B4OycgK1xuICAnb3V0bGluZTpub25lOycgK1xuICAnZm9udC13ZWlnaHQ6NTAwOycgK1xuICAnYm94LXNpemluZzpib3JkZXItYm94OycgK1xuICAncG9zaXRpb246cmVsYXRpdmU7JyArXG4gIGBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2AgK1xuICBgYWxpZ24taXRlbXM6Y2VudGVyO2AgK1xuICBgYWxpZ24tY29udGVudDpjZW50ZXI7YCArXG4gICdkaXNwbGF5OmlubGluZS1mbGV4OycgK1xuICAnY3Vyc29yOnBvaW50ZXI7JyArXG4gICctd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbW96LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbXMtdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJ3VzZXItc2VsZWN0Om5vbmU7JyArXG4gICd0ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAndHJhbnNpdGlvbjphbGwgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtczsnICtcbiAgYG92ZXJmbG93OiBoaWRkZW47YDtcbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgTHlUaGVtZTIsXG4gIEx5QmdDb2xvckFuZFJhaXNlZFxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5QnV0dG9uU2VydmljZSB9IGZyb20gJy4vYnV0dG9uLnNlcnZpY2UnO1xuY29uc3QgREVGQVVMVF9TSVpFID0gJ21lZGl1bSc7XG5jb25zdCBTaXplID0ge1xuICBzbWFsbDogdGhlbWUgPT4gKFxuICAgIGBwYWRkaW5nOjAgOHB4O2AgK1xuICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplIC0gMSl9O2AgK1xuICAgIGBtaW4taGVpZ2h0OiAzMnB4O2AgK1xuICAgIGBtaW4td2lkdGg6IDY0cHg7YFxuICApLFxuICBtZWRpdW06IHRoZW1lID0+IChcbiAgICBgcGFkZGluZzowIDE0cHg7YCArXG4gICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUpfTtgICtcbiAgICBgbWluLWhlaWdodDogMzZweDtgICtcbiAgICBgbWluLXdpZHRoOiA4OHB4O2BcbiAgKSxcbiAgbGFyZ2U6IHRoZW1lID0+IChcbiAgICBgcGFkZGluZzowIDIxcHg7YCArXG4gICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgKyAxKX07YCArXG4gICAgYG1pbi1oZWlnaHQ6IDQwcHg7YCArXG4gICAgYG1pbi13aWR0aDogMTEycHg7YFxuICApLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2x5LWJ1dHRvbl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgPHNwYW4gI2NvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L3NwYW4+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX291dGxpbmVkQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBwcml2YXRlIF9zaXplOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgb3V0bGluZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgY2xhc3NuYW1lID0gdG9Cb29sZWFuKHZhbCkgPT09IHRydWUgPyB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5vdXRsaW5lZCA6ICcnO1xuICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBjbGFzc25hbWUsIHRoaXMuX291dGxpbmVkQ2xhc3NOYW1lKTtcbiAgICB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSA9IGNsYXNzbmFtZTtcbiAgfVxuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICAvLyBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVNpemVDbGFzcyh2YWwpO1xuICAgICAgLy8gdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX3NpemVDbGFzcyk7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGstYnV0dG9uLXNpemU6JHt0aGlzLnNpemV9YCxcbiAgICAgICAgU2l6ZVt0aGlzLnNpemVdLFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2l6ZUNsYXNzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBidXR0b25Db250ZW50OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuYmdBbmRDb2xvciAmJiAodGhpcy5iZ0FuZENvbG9yLnJhaXNlZCB8fCB0aGlzLmJnQW5kQ29sb3IuYmcpID8gJ3InIDogJ2YnO1xuICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBidG4ke2tleX1gLCB7Jyc6IHRoaXMuZGlzYWJsZVN0eWxlLmJpbmQodGhpcyl9KTtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIHJpcHBsZVN0eWxlczogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYnV0dG9uU2VydmljZTogTHlCdXR0b25TZXJ2aWNlLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJnQW5kQ29sb3I6IEx5QmdDb2xvckFuZFJhaXNlZFxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSBuZXcgUmlwcGxlKF9uZ1pvbmUsIHJpcHBsZVN0eWxlcy5zdHlsZXNEYXRhLCBlbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMuY3VycmVudENvbmZpZyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXNlZCgpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3NlcztcbiAgICAgICh0aGlzLmJ1dHRvbkNvbnRlbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgY2xhc3Nlcy5idXR0b25Db250ZW50XG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNhYmxlU3R5bGUoKSB7XG4gICAgbGV0IHN0eWxlID1cbiAgICBgYm94LXNoYWRvdzogMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O2AgK1xuICAgIGBjdXJzb3I6IGRlZmF1bHQ7YCArXG4gICAgYGNvbG9yOiAke3RoaXMudGhlbWUuY29uZmlnLnRleHQuZGlzYWJsZWR9ICFpbXBvcnRhbnQ7YCArXG4gICAgYHBvaW50ZXItZXZlbnRzOiBub25lO2A7XG4gICAgaWYgKHRoaXMuYmdBbmRDb2xvciAmJiAodGhpcy5iZ0FuZENvbG9yLnJhaXNlZCB8fCB0aGlzLmJnQW5kQ29sb3IuYmcpKSB7XG4gICAgICBzdHlsZSArPSBgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnRoZW1lLmNvbmZpZy5idXR0b24uZGlzYWJsZWR9ICFpbXBvcnRhbnQ7YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU2l6ZUNsYXNzKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoYGstYnV0dG9uLXNpemU6JHt0aGlzLnNpemV9YCwgU2l6ZVt0aGlzLnNpemVdKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiLy8gQXBwXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvbiB9IGZyb20gJ0BhbHlsZS91aS9pY29uLWJ1dHRvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUJ1dHRvbl0sXG4gIGRlY2xhcmF0aW9uczogW0x5QnV0dG9uXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbk1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBdURFLHlCQUNVLFdBQ0E7UUFEQSxjQUFTLEdBQVQsU0FBUztRQUNULFVBQUssR0FBTCxLQUFLO3VCQTlDTDtZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUN0QyxRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxFQUFFLFNBQVM7YUFDZCxDQUFDO1lBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUNqQyxTQUFTLEVBQ1QsRUFBQyxFQUFFLEVBQUU7b0JBQU0sUUFDVCxnQ0FBZ0M7aUJBQ2pDLEVBQUMsQ0FDSDtZQUNELGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDdEMsZUFBZSxFQUNmLEVBQUMsRUFBRSxFQUFFO29CQUFNLFFBQ1QsWUFBWTt3QkFDWixlQUFlO3dCQUNmLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZix5QkFBeUI7aUJBQzFCLEVBQUMsQ0FDSDtZQUNELGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUMzQyxjQUFjLEVBQ2QsVUFBQSxLQUFLO2dCQUNILDJCQUFRLGtCQUFNLEVBQUUsMEJBQVUsQ0FBc0I7Z0JBQ2hELHFCQUFJLFdBQVcsSUFDYixrQkFBZSxNQUFNLENBQUMsVUFBVSxJQUFJLFVBQVUsT0FBRztxQkFDakQsaUJBQWUsTUFBTSxDQUFDLFVBQVUsTUFBRyxDQUFBO3FCQUNuQyxlQUFhLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFHLENBQUE7cUJBQzlDLFdBQVMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLE1BQUcsQ0FBQSxDQUMvQixDQUFDO2dCQUNGLElBQUksS0FBSyxDQUFDLGFBQWEsRUFBRTtvQkFDdkIsV0FBVyxJQUFJLG9CQUFrQixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBRyxDQUFDO2lCQUN6RTtnQkFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7b0JBQ3hCLFdBQVcsSUFBSSxvQkFBa0IsTUFBTSxDQUFDLGFBQWEsTUFBRyxDQUFDO2lCQUMxRDtnQkFDRCxPQUFPLFdBQVcsQ0FBQzthQUNwQixDQUNGO1NBQ0Y7S0FJSTs7Z0JBbkROLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUlcsU0FBUztnQkFBbkIsUUFBUTs7OzBCQURWOzs7OztBQTZEQTtJQUNFLE9BQU8sMENBQTBDO1FBQ2pELG9DQUFvQztRQUNwQyxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQiw0QkFBNEI7UUFDNUIsb0NBQW9DO1FBQ3BDLDBEQUEwRDtRQUMxRCxtQkFBbUIsQ0FBQztDQUNyQjs7Ozs7O0FDdEZELEFBc0JBLHFCQUFNLFlBQVksR0FBRyxRQUFRLENBQUM7U0FFckIsVUFBQSxLQUFLO0lBQUksUUFDZCxnQkFBZ0I7U0FDaEIsZUFBYSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBRyxDQUFBO1FBQ25FLG1CQUFtQjtRQUNuQixrQkFBa0I7Q0FDbkIsT0FDTyxVQUFBLEtBQUs7SUFBSSxRQUNmLGlCQUFpQjtTQUNqQixlQUFhLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQUcsQ0FBQTtRQUMvRCxtQkFBbUI7UUFDbkIsa0JBQWtCO0NBQ25CLE9BQ00sVUFBQSxLQUFLO0lBQUksUUFDZCxpQkFBaUI7U0FDakIsZUFBYSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBRyxDQUFBO1FBQ25FLG1CQUFtQjtRQUNuQixtQkFBbUI7Q0FDcEI7QUFsQkgscUJBQU0sSUFBSSxHQUFHO0lBQ1gsS0FBSyxJQUtKO0lBQ0QsTUFBTSxJQUtMO0lBQ0QsS0FBSyxJQUtKO0NBQ0YsQ0FBQzs7SUFxRUEsa0JBQ1UsWUFDQSxVQUNBLE9BQ0QsY0FDQyxlQUNSLE9BQWUsRUFDSztRQU5aLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7UUFDUixVQUFLLEdBQUwsS0FBSztRQUNOLGlCQUFZLEdBQVosWUFBWTtRQUNYLGtCQUFhLEdBQWIsYUFBYTtRQUVELGVBQVUsR0FBVixVQUFVO3lCQS9EYixLQUFLO2dDQUNHLEtBQUs7UUFnRTlCLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLHFCQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMxRTtLQUNGOzBCQWhFRyw4QkFBUTs7Ozs7a0JBQUMsR0FBWTtZQUN2QixxQkFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3JGLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzdHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7Ozs7OzBCQUdsQyxxQ0FBZTs7Ozs7WUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Ozs7OztRQUUvQixVQUFvQixLQUFjO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUM7Ozs7MEJBR0csMEJBQUk7Ozs7UUFhUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7Ozs7a0JBZlEsR0FBVztZQUNsQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFOzs7Z0JBR3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNuQyxtQkFBaUIsSUFBSSxDQUFDLElBQU0sRUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FDaEIsQ0FBQzthQUNIOzs7OzswQkFTQyw4QkFBUTs7OztRQVVaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztrQkFaWSxLQUFjO1lBQ3pCLHFCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUMxRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBTSxHQUFLLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBQ2pHLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDaEY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDbkY7Ozs7Ozs7O0lBd0JILDJCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7U0FDMUI7S0FDRjs7OztJQUVNLDBCQUFPOzs7O1FBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7O0lBR3hDLGtDQUFlOzs7SUFBZjtRQUNFLHFCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxtQkFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQTRCLEdBQUUsU0FBUyxDQUFDLEdBQUcsQ0FDN0QsT0FBTyxDQUFDLGFBQWEsQ0FDdEIsQ0FBQztLQUNMOzs7O0lBRU8sK0JBQVk7Ozs7UUFDbEIscUJBQUksS0FBSyxHQUNULGdEQUFnRDtZQUNoRCxrQkFBa0I7YUFDbEIsWUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sU0FBTSxRQUFRLGlCQUFjLENBQUE7WUFDdkQsdUJBQXVCLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckUsS0FBSyxJQUFJLHVCQUFxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sV0FBUSxRQUFRLGlCQUFjLENBQUM7U0FDL0U7UUFDRCxPQUFPLEtBQUssQ0FBQzs7Ozs7O0lBR1AsbUNBQWdCOzs7O2NBQUMsR0FBVztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsbUJBQWlCLElBQUksQ0FBQyxJQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztJQUd2Riw4QkFBVzs7O0lBQVg7UUFDRSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3RDO0tBQ0Y7O2dCQTdIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsbUVBSVQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQWpEQyxVQUFVO2dCQUdWLFNBQVM7Z0JBVVQsUUFBUTtnQkFHTyxlQUFlO2dCQUN2QixlQUFlO2dCQVp0QixNQUFNO2dCQVNOLGtCQUFrQix1QkFvR2YsUUFBUTs7OzZCQXhEVixLQUFLO29DQU1MLEtBQUssU0FBQyxXQUFXO3lCQVFqQixLQUFLO2tDQWtCTCxTQUFTLFNBQUMsU0FBUzs2QkFFbkIsS0FBSzs7bUJBaEdSOzs7Ozs7O0FDQ0E7Ozs7Z0JBT0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO29CQUN2RCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ25CLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztpQkFDekI7O3lCQVpEOzs7Ozs7Ozs7Ozs7Ozs7In0=