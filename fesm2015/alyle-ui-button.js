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
    `min-height: 32px;` +
    `min-width: 64px;`), ɵ1 = theme => (`padding:0 14px;` +
    `font-size:${theme.pxToRem(theme.typography.button.fontSize)};` +
    `min-height: 36px;` +
    `min-width: 88px;`), ɵ2 = theme => (`padding:0 21px;` +
    `font-size:${theme.pxToRem(theme.typography.button.fontSize + 1)};` +
    `min-height: 40px;` +
    `min-width: 112px;`);
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
            // const newClass = this._createSizeClass(val);
            // this._sizeClass = this.theme.updateClass(this.elementRef.nativeElement, this.renderer, newClass, this._sizeClass);
            this._size = val;
            this._sizeClass = this.theme.addStyle(`k-button-size:${this.size}`, Size[this.size], this.elementRef.nativeElement, this._sizeClass);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5VGhlbWUyLCBDb3JlVGhlbWVcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvblNlcnZpY2Uge1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnYnV0dG9uJywge1xuICAgICAgICAnJzogcm9vdFN0eWxlXG4gICAgICB9KSxcbiAgICBvdXRsaW5lZDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdidG50bG5kJyxcbiAgICAgIHsnJzogKCkgPT4gKFxuICAgICAgICBgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yYFxuICAgICAgKX1cbiAgICApLFxuICAgIGJ1dHRvbkNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnV0dG9uQ29udGVudCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYHBhZGRpbmc6MDtgICtcbiAgICAgICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgICBgYWxpZ24taXRlbXM6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApfVxuICAgICksXG4gICAgY3VycmVudENvbmZpZzogdGhpcy50aGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5PGFueT4oXG4gICAgICAnYnV0dG9uQ29uZmlnJyxcbiAgICAgIHRoZW1lID0+IHtcbiAgICAgICAgY29uc3QgeyBidXR0b24sIGZvbnRGYW1pbHkgfSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gICAgICAgIGxldCBzdHlsZUJ1dHRvbiA9IChcbiAgICAgICAgICBgZm9udC1mYW1pbHk6JHtidXR0b24uZm9udEZhbWlseSB8fCBmb250RmFtaWx5fTtgICtcbiAgICAgICAgICBgZm9udC13ZWlnaHQ6JHtidXR0b24uZm9udFdlaWdodH07YCArXG4gICAgICAgICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0oYnV0dG9uLmZvbnRTaXplKX07YCArXG4gICAgICAgICAgYGNvbG9yOiR7dGhlbWUudGV4dC5kZWZhdWx0fTtgXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0aGVtZS5sZXR0ZXJTcGFjaW5nKSB7XG4gICAgICAgICAgc3R5bGVCdXR0b24gKz0gYGxldHRlci1zcGFjaW5nOiR7dGhlbWUucHhUb1JlbShidXR0b24ubGV0dGVyU3BhY2luZyl9O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgc3R5bGVCdXR0b24gKz0gYHRleHQtdHJhbnNmb3JtOiR7YnV0dG9uLnRleHRUcmFuc2Zvcm19O2A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlQnV0dG9uO1xuICAgICAgfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZSxcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMlxuICApIHsgfVxufVxuXG5mdW5jdGlvbiByb290U3R5bGUoKSB7XG4gIHJldHVybiAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50OycgK1xuICAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApOycgK1xuICAnYm9yZGVyOjA7JyArXG4gICdwYWRkaW5nOjAgMWVtOycgK1xuICAnLW1vei1hcHBlYXJhbmNlOm5vbmU7JyArXG4gICdtYXJnaW46MDsnICtcbiAgJ2JvcmRlci1yYWRpdXM6M3B4OycgK1xuICAnb3V0bGluZTpub25lOycgK1xuICAnZm9udC13ZWlnaHQ6NTAwOycgK1xuICAnYm94LXNpemluZzpib3JkZXItYm94OycgK1xuICAncG9zaXRpb246cmVsYXRpdmU7JyArXG4gIGBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2AgK1xuICBgYWxpZ24taXRlbXM6Y2VudGVyO2AgK1xuICBgYWxpZ24tY29udGVudDpjZW50ZXI7YCArXG4gICdkaXNwbGF5OmlubGluZS1mbGV4OycgK1xuICAnY3Vyc29yOnBvaW50ZXI7JyArXG4gICctd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbW96LXVzZXItc2VsZWN0Om5vbmU7JyArXG4gICctbXMtdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJ3VzZXItc2VsZWN0Om5vbmU7JyArXG4gICd0ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTpub25lOycgK1xuICAndHJhbnNpdGlvbjphbGwgMzc1bXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtczsnICtcbiAgYG92ZXJmbG93OiBoaWRkZW47YDtcbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgTHlUaGVtZTIsXG4gIEx5QmdDb2xvckFuZFJhaXNlZFxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5QnV0dG9uU2VydmljZSB9IGZyb20gJy4vYnV0dG9uLnNlcnZpY2UnO1xuY29uc3QgREVGQVVMVF9TSVpFID0gJ21lZGl1bSc7XG5jb25zdCBTaXplID0ge1xuICBzbWFsbDogdGhlbWUgPT4gKFxuICAgIGBwYWRkaW5nOjAgOHB4O2AgK1xuICAgIGBmb250LXNpemU6JHt0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplIC0gMSl9O2AgK1xuICAgIGBtaW4taGVpZ2h0OiAzMnB4O2AgK1xuICAgIGBtaW4td2lkdGg6IDY0cHg7YFxuICApLFxuICBtZWRpdW06IHRoZW1lID0+IChcbiAgICBgcGFkZGluZzowIDE0cHg7YCArXG4gICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUpfTtgICtcbiAgICBgbWluLWhlaWdodDogMzZweDtgICtcbiAgICBgbWluLXdpZHRoOiA4OHB4O2BcbiAgKSxcbiAgbGFyZ2U6IHRoZW1lID0+IChcbiAgICBgcGFkZGluZzowIDIxcHg7YCArXG4gICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgKyAxKX07YCArXG4gICAgYG1pbi1oZWlnaHQ6IDQwcHg7YCArXG4gICAgYG1pbi13aWR0aDogMTEycHg7YFxuICApLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2x5LWJ1dHRvbl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgPHNwYW4gI2NvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L3NwYW4+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX291dGxpbmVkQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBwcml2YXRlIF9zaXplOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgb3V0bGluZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgY2xhc3NuYW1lID0gdG9Cb29sZWFuKHZhbCkgPT09IHRydWUgPyB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5vdXRsaW5lZCA6ICcnO1xuICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBjbGFzc25hbWUsIHRoaXMuX291dGxpbmVkQ2xhc3NOYW1lKTtcbiAgICB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSA9IGNsYXNzbmFtZTtcbiAgfVxuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbDogc3RyaW5nKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5zaXplKSB7XG4gICAgICAvLyBjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NyZWF0ZVNpemVDbGFzcyh2YWwpO1xuICAgICAgLy8gdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy50aGVtZS51cGRhdGVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwgbmV3Q2xhc3MsIHRoaXMuX3NpemVDbGFzcyk7XG4gICAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgICAgdGhpcy5fc2l6ZUNsYXNzID0gdGhpcy50aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGstYnV0dG9uLXNpemU6JHt0aGlzLnNpemV9YCxcbiAgICAgICAgU2l6ZVt0aGlzLnNpemVdLFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5fc2l6ZUNsYXNzXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBidXR0b25Db250ZW50OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuYmdBbmRDb2xvciAmJiAodGhpcy5iZ0FuZENvbG9yLnJhaXNlZCB8fCB0aGlzLmJnQW5kQ29sb3IuYmcpID8gJ3InIDogJ2YnO1xuICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBidG4ke2tleX1gLCB7Jyc6IHRoaXMuZGlzYWJsZVN0eWxlLmJpbmQodGhpcyl9KTtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIHJpcHBsZVN0eWxlczogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYnV0dG9uU2VydmljZTogTHlCdXR0b25TZXJ2aWNlLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJnQW5kQ29sb3I6IEx5QmdDb2xvckFuZFJhaXNlZFxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSBuZXcgUmlwcGxlKF9uZ1pvbmUsIHJpcHBsZVN0eWxlcy5zdHlsZXNEYXRhLCBlbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMuY3VycmVudENvbmZpZyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5idXR0b25TZXJ2aWNlLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXNlZCgpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3NlcztcbiAgICAgICh0aGlzLmJ1dHRvbkNvbnRlbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgY2xhc3Nlcy5idXR0b25Db250ZW50XG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNhYmxlU3R5bGUoKSB7XG4gICAgbGV0IHN0eWxlID1cbiAgICBgYm94LXNoYWRvdzogMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O2AgK1xuICAgIGBjdXJzb3I6IGRlZmF1bHQ7YCArXG4gICAgYGNvbG9yOiAke3RoaXMudGhlbWUuY29uZmlnLnRleHQuZGlzYWJsZWR9ICFpbXBvcnRhbnQ7YCArXG4gICAgYHBvaW50ZXItZXZlbnRzOiBub25lO2A7XG4gICAgaWYgKHRoaXMuYmdBbmRDb2xvciAmJiAodGhpcy5iZ0FuZENvbG9yLnJhaXNlZCB8fCB0aGlzLmJnQW5kQ29sb3IuYmcpKSB7XG4gICAgICBzdHlsZSArPSBgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnRoZW1lLmNvbmZpZy5idXR0b24uZGlzYWJsZWR9ICFpbXBvcnRhbnQ7YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlU2l6ZUNsYXNzKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB0aGlzLl9zaXplID0gdmFsO1xuICAgIHJldHVybiB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoYGstYnV0dG9uLXNpemU6JHt0aGlzLnNpemV9YCwgU2l6ZVt0aGlzLnNpemVdKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiLy8gQXBwXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IEx5SWNvbkJ1dHRvbiB9IGZyb20gJ0BhbHlsZS91aS9pY29uLWJ1dHRvbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5UmlwcGxlTW9kdWxlLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtMeUJ1dHRvbl0sXG4gIGRlY2xhcmF0aW9uczogW0x5QnV0dG9uXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbk1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztJQXVERSxZQUNVLFdBQ0E7UUFEQSxjQUFTLEdBQVQsU0FBUztRQUNULFVBQUssR0FBTCxLQUFLO3VCQTlDTDtZQUNSLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUN0QyxRQUFRLEVBQUU7Z0JBQ1IsRUFBRSxFQUFFLFNBQVM7YUFDZCxDQUFDO1lBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUNqQyxTQUFTLEVBQ1QsRUFBQyxFQUFFLEVBQUUsT0FDSCxnQ0FBZ0MsQ0FDakMsRUFBQyxDQUNIO1lBQ0QsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUN0QyxlQUFlLEVBQ2YsRUFBQyxFQUFFLEVBQUUsT0FDSCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLHdCQUF3QjtvQkFDeEIsY0FBYztvQkFDZCxlQUFlO29CQUNmLHlCQUF5QixDQUMxQixFQUFDLENBQ0g7WUFDRCxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FDM0MsY0FBYyxFQUNkLEtBQUs7Z0JBQ0gsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO2dCQUNoRCxxQkFBSSxXQUFXLElBQ2IsZUFBZSxNQUFNLENBQUMsVUFBVSxJQUFJLFVBQVUsR0FBRztvQkFDakQsZUFBZSxNQUFNLENBQUMsVUFBVSxHQUFHO29CQUNuQyxhQUFhLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUM5QyxTQUFTLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQy9CLENBQUM7Z0JBQ0YsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO29CQUN2QixXQUFXLElBQUksa0JBQWtCLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7aUJBQ3pFO2dCQUNELElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtvQkFDeEIsV0FBVyxJQUFJLGtCQUFrQixNQUFNLENBQUMsYUFBYSxHQUFHLENBQUM7aUJBQzFEO2dCQUNELE9BQU8sV0FBVyxDQUFDO2FBQ3BCLENBQ0Y7U0FDRjtLQUlJOzs7WUFuRE4sVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUlcsU0FBUztZQUFuQixRQUFROzs7Ozs7QUE0RFY7SUFDRSxPQUFPLDBDQUEwQztRQUNqRCxvQ0FBb0M7UUFDcEMsV0FBVztRQUNYLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsNEJBQTRCO1FBQzVCLG9DQUFvQztRQUNwQywwREFBMEQ7UUFDMUQsbUJBQW1CLENBQUM7Q0FDckI7Ozs7OztBQ3RGRCxBQXNCQSx1QkFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDO1dBRXJCLEtBQUssS0FDVixnQkFBZ0I7SUFDaEIsYUFBYSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRztJQUNuRSxtQkFBbUI7SUFDbkIsa0JBQWtCLENBQ25CLE9BQ08sS0FBSyxLQUNYLGlCQUFpQjtJQUNqQixhQUFhLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUc7SUFDL0QsbUJBQW1CO0lBQ25CLGtCQUFrQixDQUNuQixPQUNNLEtBQUssS0FDVixpQkFBaUI7SUFDakIsYUFBYSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRztJQUNuRSxtQkFBbUI7SUFDbkIsbUJBQW1CLENBQ3BCO0FBbEJILHVCQUFNLElBQUksR0FBRztJQUNYLEtBQUssSUFLSjtJQUNELE1BQU0sSUFLTDtJQUNELEtBQUssSUFLSjtDQUNGLENBQUM7QUFZRjs7Ozs7Ozs7OztJQXlERSxZQUNVLFlBQ0EsVUFDQSxPQUNELGNBQ0MsZUFDUixPQUFlLEVBQ0s7UUFOWixlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFRO1FBQ1IsVUFBSyxHQUFMLEtBQUs7UUFDTixpQkFBWSxHQUFaLFlBQVk7UUFDWCxrQkFBYSxHQUFiLGFBQWE7UUFFRCxlQUFVLEdBQVYsVUFBVTt5QkEvRGIsS0FBSztnQ0FDRyxLQUFLO1FBZ0U5QixJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM5QjtRQUNELElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0Qix1QkFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDMUU7S0FDRjs7Ozs7UUFoRUcsUUFBUSxDQUFDLEdBQVk7UUFDdkIsdUJBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDOzs7OztRQUdsQyxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDOzs7Ozs7SUFFL0IsSUFBSSxlQUFlLENBQUMsS0FBYztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFDOzs7OztRQUdHLElBQUksQ0FBQyxHQUFXO1FBQ2xCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7OztZQUdyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNuQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksRUFBRSxFQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixJQUFJLENBQUMsVUFBVSxDQUNoQixDQUFDO1NBQ0g7Ozs7O0lBRUgsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztRQUtHLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLHVCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMxRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2hGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNuRjs7Ozs7SUFFSCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7SUFvQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7U0FDMUI7S0FDRjs7OztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7SUFHeEMsZUFBZTtRQUNiLHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxtQkFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQTRCLEdBQUUsU0FBUyxDQUFDLEdBQUcsQ0FDN0QsT0FBTyxDQUFDLGFBQWEsQ0FDdEIsQ0FBQztLQUNMOzs7O0lBRU8sWUFBWTtRQUNsQixxQkFBSSxLQUFLLEdBQ1QsZ0RBQWdEO1lBQ2hELGtCQUFrQjtZQUNsQixVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxTQUFNLFFBQVEsY0FBYztZQUN2RCx1QkFBdUIsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNyRSxLQUFLLElBQUkscUJBQXFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxXQUFRLFFBQVEsY0FBYyxDQUFDO1NBQy9FO1FBQ0QsT0FBTyxLQUFLLENBQUM7Ozs7OztJQUdQLGdCQUFnQixDQUFDLEdBQVc7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztJQUd2RixXQUFXO1FBQ1QsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN0QztLQUNGOzs7WUE3SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFqREMsVUFBVTtZQUdWLFNBQVM7WUFVVCxRQUFRO1lBR08sZUFBZTtZQUN2QixlQUFlO1lBWnRCLE1BQU07WUFTTixrQkFBa0IsdUJBb0dmLFFBQVE7Ozt5QkF4RFYsS0FBSztnQ0FNTCxLQUFLLFNBQUMsV0FBVztxQkFRakIsS0FBSzs4QkFrQkwsU0FBUyxTQUFDLFNBQVM7eUJBRW5CLEtBQUs7Ozs7Ozs7QUMvRlI7OztZQU9DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztnQkFDdkQsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNuQixZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDekI7Ozs7Ozs7Ozs7Ozs7OzsifQ==