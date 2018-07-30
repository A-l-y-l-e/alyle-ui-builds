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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5VGhlbWUyLCBDb3JlVGhlbWVcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnYnV0dG9uJywge1xuICAgICAgICAnJzogcm9vdFN0eWxlXG4gICAgICB9KSxcbiAgICBvdXRsaW5lZDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdidG50bG5kJyxcbiAgICAgIHsnJzogKCkgPT4gKFxuICAgICAgICBgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yYFxuICAgICAgKX1cbiAgICApLFxuICAgIGJ1dHRvbkNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnV0dG9uQ29udGVudCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYHBhZGRpbmc6MDtgICtcbiAgICAgICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgICBgYWxpZ24taXRlbXM6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApfVxuICAgICksXG4gICAgY3VycmVudENvbmZpZzogdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueT4oXG4gICAgICAnYnV0dG9uQ29uZmlnJyxcbiAgICAgIHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgeyBidXR0b24sIGZvbnRGYW1pbHkgfSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gICAgICAgIGxldCBzdHlsZUJ1dHRvbiA9IChcbiAgICAgICAgICBgZm9udC1mYW1pbHk6JHtidXR0b24uZm9udEZhbWlseSB8fCBmb250RmFtaWx5fTtgICtcbiAgICAgICAgICBgZm9udC13ZWlnaHQ6JHtidXR0b24uZm9udFdlaWdodH07YCArXG4gICAgICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oYnV0dG9uLmZvbnRTaXplKX07YCArXG4gICAgICAgICAgYGNvbG9yOiR7dGhlbWUudGV4dC5kZWZhdWx0fTtgXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGVtZS5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICAgICAgc3R5bGVCdXR0b24gKz0gYGxldHRlci1zcGFjaW5nOiR7dGhlbWUucHhUb1JlbShidXR0b24ubGV0dGVyU3BhY2luZyl9O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgc3R5bGVCdXR0b24gKz0gYHRleHQtdHJhbnNmb3JtOiR7YnV0dG9uLnRleHRUcmFuc2Zvcm19O2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlQnV0dG9uO1xuICAgICAgfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG5mdW5jdGlvbiByb290U3R5bGUoKSB7XG4gIHJldHVybiAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50OycgK1xuICAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApOycgK1xuICAnYm9yZGVyOjA7JyArXG4gICdwYWRkaW5nOjAgMTZweDsnICtcbiAgJy1tb3otYXBwZWFyYW5jZTpub25lOycgK1xuICAnbWluLWhlaWdodDozNnB4OycgK1xuICAnaGVpZ2h0OjM2cHg7JyArXG4gICdtYXJnaW46MDsnICtcbiAgJ2JvcmRlci1yYWRpdXM6M3B4OycgK1xuICAnb3V0bGluZTpub25lOycgK1xuICAnZm9udC13ZWlnaHQ6NTAwOycgK1xuICAnbWluLXdpZHRoOjg4cHg7JyArXG4gICdib3gtc2l6aW5nOmJvcmRlci1ib3g7JyArXG4gICdwb3NpdGlvbjpyZWxhdGl2ZTsnICtcbiAgYGp1c3RpZnktY29udGVudDpjZW50ZXI7YCArXG4gIGBhbGlnbi1pdGVtczpjZW50ZXI7YCArXG4gIGBhbGlnbi1jb250ZW50OmNlbnRlcjtgICtcbiAgJ2Rpc3BsYXk6aW5saW5lLWZsZXg7JyArXG4gICdjdXJzb3I6cG9pbnRlcjsnICtcbiAgJy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJy1tb3otdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJy1tcy11c2VyLXNlbGVjdDpub25lOycgK1xuICAndXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJ3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7JyArXG4gICctd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7JyArXG4gICd0cmFuc2l0aW9uOmFsbCAzNzVtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zOycgK1xuICBgb3ZlcmZsb3c6IGhpZGRlbjtgO1xufVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybSxcbiAgdG9Cb29sZWFuLFxuICBMeVRoZW1lMixcbiAgTHlCZ0NvbG9yQW5kUmFpc2VkXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIEx5UmlwcGxlU2VydmljZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tseS1idXR0b25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gIDxzcGFuICNjb250ZW50PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9vdXRsaW5lZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9yaXBwbGVDb250YWluZXI6IFJpcHBsZTtcbiAgQElucHV0KClcbiAgc2V0IG91dGxpbmVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRvQm9vbGVhbih2YWwpID09PSB0cnVlID8gdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMub3V0bGluZWQgOiAnJztcbiAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgY2xhc3NuYW1lLCB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSk7XG4gICAgdGhpcy5fb3V0bGluZWRDbGFzc05hbWUgPSBjbGFzc25hbWU7XG4gIH1cbiAgQElucHV0KCdzZW5zaXRpdmUnKVxuICBnZXQgcmlwcGxlU2Vuc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGVTZW5zaXRpdmU7XG4gIH1cbiAgc2V0IHJpcHBsZVNlbnNpdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBAVmlld0NoaWxkKCdjb250ZW50JykgYnV0dG9uQ29udGVudDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSA/ICdyJyA6ICdmJztcbiAgICB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSA9IHRoaXMudGhlbWUuc2V0VXBTdHlsZShgYnRuJHtrZXl9YCwgeycnOiB0aGlzLmRpc2FibGVTdHlsZS5iaW5kKHRoaXMpfSk7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gICAgfVxuICB9XG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyByaXBwbGVTdHlsZXM6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIGJ1dHRvblNlcnZpY2U6IEx5QnV0dG9uU2VydmljZSxcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiZ0FuZENvbG9yOiBMeUJnQ29sb3JBbmRSYWlzZWRcbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZShfbmdab25lLCByaXBwbGVTdHlsZXMuc3R5bGVzRGF0YSwgZWwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzLmN1cnJlbnRDb25maWcpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzLnJvb3QpO1xuICB9XG5cbiAgcHVibGljIGZvY3VzZWQoKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXM7XG4gICAgICAodGhpcy5idXR0b25Db250ZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIGNsYXNzZXMuYnV0dG9uQ29udGVudFxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzYWJsZVN0eWxlKCkge1xuICAgIGxldCBzdHlsZSA9XG4gICAgYGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtgICtcbiAgICBgY3Vyc29yOiBkZWZhdWx0O2AgK1xuICAgIGBjb2xvcjogJHt0aGlzLnRoZW1lLmNvbmZpZy50ZXh0LmRpc2FibGVkfSAhaW1wb3J0YW50O2AgK1xuICAgIGBwb2ludGVyLWV2ZW50czogbm9uZTtgO1xuICAgIGlmICh0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSkge1xuICAgICAgc3R5bGUgKz0gYGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcuYnV0dG9uLmRpc2FibGVkfSAhaW1wb3J0YW50O2A7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiLy8gQXBwXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvbiB9IGZyb20gJ0BhbHlsZS91aS9pY29uLWJ1dHRvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUJ1dHRvbl0sXG4gIGRlY2xhcmF0aW9uczogW0x5QnV0dG9uXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbk1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBdURFLHlCQUNVLFdBQ0E7UUFEQSxjQUFTLEdBQVQsU0FBUztRQUNULFVBQUssR0FBTCxLQUFLO3VCQTlDTDtZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUN0QyxRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxFQUFFLFNBQVM7YUFDZCxDQUFDO1lBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUNqQyxTQUFTLEVBQ1QsRUFBQyxFQUFFLEVBQUU7b0JBQU0sUUFDVCxnQ0FBZ0M7aUJBQ2pDLEVBQUMsQ0FDSDtZQUNELGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FDdEMsZUFBZSxFQUNmLEVBQUMsRUFBRSxFQUFFO29CQUFNLFFBQ1QsWUFBWTt3QkFDWixlQUFlO3dCQUNmLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7d0JBQ3hCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZix5QkFBeUI7aUJBQzFCLEVBQUMsQ0FDSDtZQUNELGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUMzQyxjQUFjLEVBQ2QsVUFBQSxLQUFL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