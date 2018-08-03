import { LyTheme2, CoreTheme, LyCommonModule, Platform, toBoolean, LyBgColorAndRaised } from '@alyle/ui';
import { Injectable, NgModule, ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, ViewChild, NgZone, ViewEncapsulation, defineInjectable, inject } from '@angular/core';
import { Ripple, LyRippleService, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyButtonService {
    /**
     * @param {?} coreTheme
     * @param {?} theme
     */
    constructor(coreTheme, theme) {
        this.coreTheme = coreTheme;
        this.theme = theme;
        this.classes = {
            root: this.coreTheme.setUpStyleSecondary('button', {
                '': rootStyle
            }),
            outlined: this.coreTheme.setUpStyle('btntlnd', { '': () => (`border: 1px solid currentColor`) }),
            buttonContent: this.coreTheme.setUpStyle('buttonContent', { '': () => (`padding:0;` +
                    `display:flex;` +
                    `justify-content:inherit;` +
                    `align-items:inherit;` +
                    `align-content:inherit;` +
                    `width: 100%;` +
                    `height: 100%;` +
                    `box-sizing: border-box;`) }),
            currentConfig: this.theme.setUpStyleSecondary('buttonConfig', theme => {
                const { button, fontFamily } = theme.typography;
                let /** @type {?} */ styleButton = (`font-family:${button.fontFamily || fontFamily};` +
                    `font-weight:${button.fontWeight};` +
                    `font-size:${theme.pxToRem(button.fontSize)};` +
                    `color:${theme.text.default};`);
                if (theme.letterSpacing) {
                    styleButton += `letter-spacing:${theme.pxToRem(button.letterSpacing)};`;
                }
                if (button.textTransform) {
                    styleButton += `text-transform:${button.textTransform};`;
                }
                return styleButton;
            })
        };
    }
}
LyButtonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
LyButtonService.ctorParameters = () => [
    { type: CoreTheme, },
    { type: LyTheme2, },
];
/** @nocollapse */ LyButtonService.ngInjectableDef = defineInjectable({ factory: function LyButtonService_Factory() { return new LyButtonService(inject(CoreTheme), inject(LyTheme2)); }, token: LyButtonService, providedIn: "root" });
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
        `justify-content:center;` +
        `align-items:center;` +
        `align-content:center;` +
        'display:inline-flex;' +
        'cursor:pointer;' +
        '-webkit-user-select:none;' +
        '-moz-user-select:none;' +
        '-ms-user-select:none;' +
        'user-select:none;' +
        'text-decoration-line:none;' +
        '-webkit-text-decoration-line:none;' +
        'transition:all 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;' +
        `overflow: hidden;`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ DEFAULT_SIZE = 'medium';
const ɵ0 = theme => (`padding:0 8px;` +
    `font-size:${theme.pxToRem(theme.typography.button.fontSize - 1)};` +
    `min-height: 32px;`), ɵ1 = theme => (`padding:0 14px;` +
    `font-size:${theme.pxToRem(theme.typography.button.fontSize)};` +
    `min-height: 36px;`), ɵ2 = theme => (`padding:0 21px;` +
    `font-size:${theme.pxToRem(theme.typography.button.fontSize + 1)};` +
    `min-height: 40px;`);
const /** @type {?} */ Size = {
    small: ɵ0,
    medium: ɵ1,
    large: ɵ2,
};
class LyButton {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} theme
     * @param {?} rippleStyles
     * @param {?} buttonService
     * @param {?} _ngZone
     * @param {?} bgAndColor
     */
    constructor(elementRef, renderer, theme, rippleStyles, buttonService, _ngZone, bgAndColor) {
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
            const /** @type {?} */ el = elementRef.nativeElement;
            this._rippleContainer = new Ripple(_ngZone, rippleStyles.stylesData, el);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set outlined(val) {
        const /** @type {?} */ classname = toBoolean(val) === true ? this.buttonService.classes.outlined : '';
        this.theme.updateClassName(this.elementRef.nativeElement, this.renderer, classname, this._outlinedClassName);
        this._outlinedClassName = classname;
    }
    /**
     * @return {?}
     */
    get rippleSensitive() {
        return this._rippleSensitive;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set rippleSensitive(value) {
        this._rippleSensitive = toBoolean(value);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set size(val) {
        if (val !== this.size) {
            const /** @type {?} */ newClass = this._createSizeClass(val);
            this._sizeClass = this.theme.updateClass(this.elementRef.nativeElement, this.renderer, newClass, this._sizeClass);
        }
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        const /** @type {?} */ key = this.bgAndColor && (this.bgAndColor.raised || this.bgAndColor.bg) ? 'r' : 'f';
        this._disabledClassName = this.theme.setUpStyle(`btn${key}`, { '': this.disableStyle.bind(this) });
        this._disabled = toBoolean(value);
        if (this._disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, this._disabledClassName);
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, this._disabledClassName);
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, this.buttonService.classes.currentConfig);
        this.renderer.addClass(this.elementRef.nativeElement, this.buttonService.classes.root);
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    }
    /**
     * @return {?}
     */
    focused() {
        this.elementRef.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ classes = this.buttonService.classes;
        (/** @type {?} */ (this.buttonContent.nativeElement)).classList.add(classes.buttonContent);
    }
    /**
     * @return {?}
     */
    disableStyle() {
        let /** @type {?} */ style = `box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;` +
            `cursor: default;` +
            `color: ${this.theme.config["text"].disabled} !important;` +
            `pointer-events: none;`;
        if (this.bgAndColor && (this.bgAndColor.raised || this.bgAndColor.bg)) {
            style += `background-color: ${this.theme.config["button"].disabled} !important;`;
        }
        return style;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _createSizeClass(val) {
        this._size = val;
        return this.theme.setUpStyleSecondary(`k-button-size:${this.size}`, Size[this.size]);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Platform.isBrowser) {
            this._rippleContainer.removeEvents();
        }
    }
}
LyButton.decorators = [
    { type: Component, args: [{
                selector: '[ly-button]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
  <span #content>
    <ng-content></ng-content>
  </span>
  `,
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
LyButton.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LyTheme2, },
    { type: LyRippleService, },
    { type: LyButtonService, },
    { type: NgZone, },
    { type: LyBgColorAndRaised, decorators: [{ type: Optional },] },
];
LyButton.propDecorators = {
    "outlined": [{ type: Input },],
    "rippleSensitive": [{ type: Input, args: ['sensitive',] },],
    "size": [{ type: Input },],
    "buttonContent": [{ type: ViewChild, args: ['content',] },],
    "disabled": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LyButtonModule {
}
LyButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LyRippleModule, LyCommonModule],
                exports: [LyButton],
                declarations: [LyButton]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyButton, LyButtonModule, LyButtonService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5VGhlbWUyLCBDb3JlVGhlbWVcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnYnV0dG9uJywge1xuICAgICAgICAnJzogcm9vdFN0eWxlXG4gICAgICB9KSxcbiAgICBvdXRsaW5lZDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdidG50bG5kJyxcbiAgICAgIHsnJzogKCkgPT4gKFxuICAgICAgICBgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yYFxuICAgICAgKX1cbiAgICApLFxuICAgIGJ1dHRvbkNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnV0dG9uQ29udGVudCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYHBhZGRpbmc6MDtgICtcbiAgICAgICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgICBgYWxpZ24taXRlbXM6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApfVxuICAgICksXG4gICAgY3VycmVudENvbmZpZzogdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueT4oXG4gICAgICAnYnV0dG9uQ29uZmlnJyxcbiAgICAgIHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgeyBidXR0b24sIGZvbnRGYW1pbHkgfSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gICAgICAgIGxldCBzdHlsZUJ1dHRvbiA9IChcbiAgICAgICAgICBgZm9udC1mYW1pbHk6JHtidXR0b24uZm9udEZhbWlseSB8fCBmb250RmFtaWx5fTtgICtcbiAgICAgICAgICBgZm9udC13ZWlnaHQ6JHtidXR0b24uZm9udFdlaWdodH07YCArXG4gICAgICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oYnV0dG9uLmZvbnRTaXplKX07YCArXG4gICAgICAgICAgYGNvbG9yOiR7dGhlbWUudGV4dC5kZWZhdWx0fTtgXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGVtZS5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICAgICAgc3R5bGVCdXR0b24gKz0gYGxldHRlci1zcGFjaW5nOiR7dGhlbWUucHhUb1JlbShidXR0b24ubGV0dGVyU3BhY2luZyl9O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgc3R5bGVCdXR0b24gKz0gYHRleHQtdHJhbnNmb3JtOiR7YnV0dG9uLnRleHRUcmFuc2Zvcm19O2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlQnV0dG9uO1xuICAgICAgfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG5mdW5jdGlvbiByb290U3R5bGUoKSB7XG4gIHJldHVybiAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50OycgK1xuICAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApOycgK1xuICAnYm9yZGVyOjA7JyArXG4gICdwYWRkaW5nOjAgMWVtOycgK1xuICAnLW1vei1hcHBlYXJhbmNlOm5vbmU7JyArXG4gICdtYXJnaW46MDsnICtcbiAgJ2JvcmRlci1yYWRpdXM6M3B4OycgK1xuICAnb3V0bGluZTpub25lOycgK1xuICAnZm9udC13ZWlnaHQ6NTAwOycgK1xuICAnbWluLXdpZHRoOjg4cHg7JyArXG4gICdib3gtc2l6aW5nOmJvcmRlci1ib3g7JyArXG4gICdwb3NpdGlvbjpyZWxhdGl2ZTsnICtcbiAgYGp1c3RpZnktY29udGVudDpjZW50ZXI7YCArXG4gIGBhbGlnbi1pdGVtczpjZW50ZXI7YCArXG4gIGBhbGlnbi1jb250ZW50OmNlbnRlcjtgICtcbiAgJ2Rpc3BsYXk6aW5saW5lLWZsZXg7JyArXG4gICdjdXJzb3I6cG9pbnRlcjsnICtcbiAgJy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJy1tb3otdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJy1tcy11c2VyLXNlbGVjdDpub25lOycgK1xuICAndXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJ3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7JyArXG4gICctd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7JyArXG4gICd0cmFuc2l0aW9uOmFsbCAzNzVtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zOycgK1xuICBgb3ZlcmZsb3c6IGhpZGRlbjtgO1xufVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybSxcbiAgdG9Cb29sZWFuLFxuICBMeVRoZW1lMixcbiAgTHlCZ0NvbG9yQW5kUmFpc2VkXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIEx5UmlwcGxlU2VydmljZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9idXR0b24uc2VydmljZSc7XG5jb25zdCBERUZBVUxUX1NJWkUgPSAnbWVkaXVtJztcbmNvbnN0IFNpemUgPSB7XG4gIHNtYWxsOiB0aGVtZSA9PiAoXG4gICAgYHBhZGRpbmc6MCA4cHg7YCArXG4gICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgLSAxKX07YCArXG4gICAgYG1pbi1oZWlnaHQ6IDMycHg7YFxuICApLFxuICBtZWRpdW06IHRoZW1lID0+IChcbiAgICBgcGFkZGluZzowIDE0cHg7YCArXG4gICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUpfTtgICtcbiAgICBgbWluLWhlaWdodDogMzZweDtgXG4gICksXG4gIGxhcmdlOiB0aGVtZSA9PiAoXG4gICAgYHBhZGRpbmc6MCAyMXB4O2AgK1xuICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplICsgMSl9O2AgK1xuICAgIGBtaW4taGVpZ2h0OiA0MHB4O2BcbiAgKSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tseS1idXR0b25dJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gIDxzcGFuICNjb250ZW50PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9vdXRsaW5lZENsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9yaXBwbGVDb250YWluZXI6IFJpcHBsZTtcbiAgcHJpdmF0ZSBfc2l6ZTogc3RyaW5nO1xuICBwcml2YXRlIF9zaXplQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IG91dGxpbmVkKHZhbDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNsYXNzbmFtZSA9IHRvQm9vbGVhbih2YWwpID09PSB0cnVlID8gdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMub3V0bGluZWQgOiAnJztcbiAgICB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzTmFtZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgY2xhc3NuYW1lLCB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSk7XG4gICAgdGhpcy5fb3V0bGluZWRDbGFzc05hbWUgPSBjbGFzc25hbWU7XG4gIH1cbiAgQElucHV0KCdzZW5zaXRpdmUnKVxuICBnZXQgcmlwcGxlU2Vuc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGVTZW5zaXRpdmU7XG4gIH1cbiAgc2V0IHJpcHBsZVNlbnNpdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWw6IHN0cmluZykge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2l6ZSkge1xuICAgICAgY29uc3QgbmV3Q2xhc3MgPSB0aGlzLl9jcmVhdGVTaXplQ2xhc3ModmFsKTtcbiAgICAgIHRoaXMuX3NpemVDbGFzcyA9IHRoaXMudGhlbWUudXBkYXRlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIG5ld0NsYXNzLCB0aGlzLl9zaXplQ2xhc3MpO1xuICAgIH1cbiAgfVxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBidXR0b25Db250ZW50OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuYmdBbmRDb2xvciAmJiAodGhpcy5iZ0FuZENvbG9yLnJhaXNlZCB8fCB0aGlzLmJnQW5kQ29sb3IuYmcpID8gJ3InIDogJ2YnO1xuICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBidG4ke2tleX1gLCB7Jyc6IHRoaXMuZGlzYWJsZVN0eWxlLmJpbmQodGhpcyl9KTtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIHJpcHBsZVN0eWxlczogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYnV0dG9uU2VydmljZTogTHlCdXR0b25TZXJ2aWNlLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJnQW5kQ29sb3I6IEx5QmdDb2xvckFuZFJhaXNlZFxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSBuZXcgUmlwcGxlKF9uZ1pvbmUsIHJpcHBsZVN0eWxlcy5zdHlsZXNEYXRhLCBlbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMuY3VycmVudENvbmZpZyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXNlZCgpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3NlcztcbiAgICAgICh0aGlzLmJ1dHRvbkNvbnRlbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgY2xhc3Nlcy5idXR0b25Db250ZW50XG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNhYmxlU3R5bGUoKSB7XG4gICAgbGV0IHN0eWxlID1cbiAgICBgYm94LXNoYWRvdzogMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O2AgK1xuICAgIGBjdXJzb3I6IGRlZmF1bHQ7YCArXG4gICAgYGNvbG9yOiAke3RoaXMudGhlbWUuY29uZmlnLnRleHQuZGlzYWJsZWR9ICFpbXBvcnRhbnQ7YCArXG4gICAgYHBvaW50ZXItZXZlbnRzOiBub25lO2A7XG4gICAgaWYgKHRoaXMuYmdBbmRDb2xvciAmJiAodGhpcy5iZ0FuZENvbG9yLnJhaXNlZCB8fCB0aGlzLmJnQW5kQ29sb3IuYmcpKSB7XG4gICAgICBzdHlsZSArPSBgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnRoZW1lLmNvbmZpZy5idXR0b24uZGlzYWJsZWR9ICFpbXBvcnRhbnQ7YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU2l6ZUNsYXNzKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoYGstYnV0dG9uLXNpemU6JHt0aGlzLnNpemV9YCwgU2l6ZVt0aGlzLnNpemVdKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiLy8gQXBwXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvbiB9IGZyb20gJ0BhbHlsZS91aS9pY29uLWJ1dHRvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUJ1dHRvbl0sXG4gIGRlY2xhcmF0aW9uczogW0x5QnV0dG9uXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbk1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztJQXVERSxZQUNVLFdBQ0E7UUFEQSxjQUFTLEdBQVQsU0FBUztRQUNULFVBQUssR0FBTCxLQUFLO3VCQTlDTDtZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUN0QyxRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxFQUFFLFNBQVM7YUFDZCxDQUFDO1lBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUNqQyxTQUFTLEVBQ1QsRUFBQyxFQUFFLEVBQUUsT0FDSCxnQ0FBZ0MsQ0FDakMsRUFBQyxDQUNIO1lBQ0QsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUN0QyxlQUFlLEVBQ2YsRUFBQyxFQUFFLEVBQUUsT0FDSCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsMEJBQTBCO29CQUMx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