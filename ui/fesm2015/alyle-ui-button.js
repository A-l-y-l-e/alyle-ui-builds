import { CoreTheme, LyCommonModule, Platform, toBoolean, LyTheme2, LyBgColorAndRaised } from '@alyle/ui';
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
     */
    constructor(coreTheme) {
        this.coreTheme = coreTheme;
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
                    `box-sizing: border-box;`) })
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
];
/** @nocollapse */ LyButtonService.ngInjectableDef = defineInjectable({ factory: function LyButtonService_Factory() { return new LyButtonService(inject(CoreTheme)); }, token: LyButtonService, providedIn: "root" });
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
    get classes() {
        return {
            currentConfig: this.theme.setUpStyleSecondary('buttonConfig', {
                '': () => (`font-family:${this.theme.config["typography"].fontFamily};` +
                    `font-size:${this.theme.config["typography"].fontSize}px;` +
                    `color:${this.theme.config["text"].default};`)
            })
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.currentConfig);
        this.renderer.addClass(this.elementRef.nativeElement, this.buttonService.classes.root);
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
                selector: '[ly-button], ly-button',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zZXJ2aWNlLnRzIiwibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEx5VGhlbWUyLCBDb3JlVGhlbWVcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvblNlcnZpY2Uge1xuICBwcml2YXRlIHJvb3RDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSB0aGVtZUNsYXNzTmFtZTogc3RyaW5nO1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAnYnV0dG9uJywge1xuICAgICAgICAnJzogcm9vdFN0eWxlXG4gICAgICB9KSxcbiAgICBvdXRsaW5lZDogdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZShcbiAgICAgICdidG50bG5kJyxcbiAgICAgIHsnJzogKCkgPT4gKFxuICAgICAgICBgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yYFxuICAgICAgKX1cbiAgICApLFxuICAgIGJ1dHRvbkNvbnRlbnQ6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoXG4gICAgICAnYnV0dG9uQ29udGVudCcsXG4gICAgICB7Jyc6ICgpID0+IChcbiAgICAgICAgYHBhZGRpbmc6MDtgICtcbiAgICAgICAgYGRpc3BsYXk6ZmxleDtgICtcbiAgICAgICAgYGp1c3RpZnktY29udGVudDppbmhlcml0O2AgK1xuICAgICAgICBgYWxpZ24taXRlbXM6aW5oZXJpdDtgICtcbiAgICAgICAgYGFsaWduLWNvbnRlbnQ6aW5oZXJpdDtgICtcbiAgICAgICAgYHdpZHRoOiAxMDAlO2AgK1xuICAgICAgICBgaGVpZ2h0OiAxMDAlO2AgK1xuICAgICAgICBgYm94LXNpemluZzogYm9yZGVyLWJveDtgXG4gICAgICApfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHsgfVxufVxuXG5mdW5jdGlvbiByb290U3R5bGUoKSB7XG4gIHJldHVybiAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50OycgK1xuICAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApOycgK1xuICAnYm9yZGVyOjA7JyArXG4gICdwYWRkaW5nOjAgMTZweDsnICtcbiAgJy1tb3otYXBwZWFyYW5jZTpub25lOycgK1xuICAnbWluLWhlaWdodDozNnB4OycgK1xuICAnaGVpZ2h0OjM2cHg7JyArXG4gICdtYXJnaW46MDsnICtcbiAgJ2JvcmRlci1yYWRpdXM6M3B4OycgK1xuICAnb3V0bGluZTpub25lOycgK1xuICAnZm9udC13ZWlnaHQ6NTAwOycgK1xuICAnbWluLXdpZHRoOjg4cHg7JyArXG4gICdib3gtc2l6aW5nOmJvcmRlci1ib3g7JyArXG4gICdwb3NpdGlvbjpyZWxhdGl2ZTsnICtcbiAgYGp1c3RpZnktY29udGVudDpjZW50ZXI7YCArXG4gIGBhbGlnbi1pdGVtczpjZW50ZXI7YCArXG4gIGBhbGlnbi1jb250ZW50OmNlbnRlcjtgICtcbiAgJ2Rpc3BsYXk6aW5saW5lLWZsZXg7JyArXG4gICdjdXJzb3I6cG9pbnRlcjsnICtcbiAgJy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJy1tb3otdXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJy1tcy11c2VyLXNlbGVjdDpub25lOycgK1xuICAndXNlci1zZWxlY3Q6bm9uZTsnICtcbiAgJ3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7JyArXG4gICctd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7JyArXG4gICd0cmFuc2l0aW9uOmFsbCAzNzVtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zOycgK1xuICBgb3ZlcmZsb3c6IGhpZGRlbjtgO1xufVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgSW5qZWN0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIElzQm9vbGVhbixcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIEx5VGhlbWUyLFxuICBMeUJnQ29sb3JBbmRSYWlzZWRcbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5UmlwcGxlLCBSaXBwbGUsIEx5UmlwcGxlU2VydmljZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9idXR0b24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tseS1idXR0b25dLCBseS1idXR0b24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgPHNwYW4gI2NvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L3NwYW4+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX291dGxpbmVkQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBASW5wdXQoKVxuICBzZXQgb3V0bGluZWQodmFsOiBib29sZWFuKSB7XG4gICAgY29uc3QgY2xhc3NuYW1lID0gdG9Cb29sZWFuKHZhbCkgPT09IHRydWUgPyB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5vdXRsaW5lZCA6ICcnO1xuICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBjbGFzc25hbWUsIHRoaXMuX291dGxpbmVkQ2xhc3NOYW1lKTtcbiAgICB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSA9IGNsYXNzbmFtZTtcbiAgfVxuICBASW5wdXQoJ3NlbnNpdGl2ZScpXG4gIGdldCByaXBwbGVTZW5zaXRpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZTtcbiAgfVxuICBzZXQgcmlwcGxlU2Vuc2l0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmlwcGxlU2Vuc2l0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBidXR0b25Db250ZW50OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuYmdBbmRDb2xvciAmJiAodGhpcy5iZ0FuZENvbG9yLnJhaXNlZCB8fCB0aGlzLmJnQW5kQ29sb3IuYmcpID8gJ3InIDogJ2YnO1xuICAgIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lID0gdGhpcy50aGVtZS5zZXRVcFN0eWxlKGBidG4ke2tleX1gLCB7Jyc6IHRoaXMuZGlzYWJsZVN0eWxlLmJpbmQodGhpcyl9KTtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBjbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50Q29uZmlnOiB0aGlzLnRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoJ2J1dHRvbkNvbmZpZycsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgZm9udC1mYW1pbHk6JHt0aGlzLnRoZW1lLmNvbmZpZy50eXBvZ3JhcGh5LmZvbnRGYW1pbHl9O2AgK1xuICAgICAgICAgIGBmb250LXNpemU6JHt0aGlzLnRoZW1lLmNvbmZpZy50eXBvZ3JhcGh5LmZvbnRTaXplfXB4O2AgK1xuICAgICAgICAgIGBjb2xvcjoke3RoaXMudGhlbWUuY29uZmlnLnRleHQuZGVmYXVsdH07YFxuICAgICAgICApXG4gICAgICB9KVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyLFxuICAgIHB1YmxpYyByaXBwbGVTdHlsZXM6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwcml2YXRlIGJ1dHRvblNlcnZpY2U6IEx5QnV0dG9uU2VydmljZSxcbiAgICBfbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBiZ0FuZENvbG9yOiBMeUJnQ29sb3JBbmRSYWlzZWRcbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZShfbmdab25lLCByaXBwbGVTdHlsZXMuc3R5bGVzRGF0YSwgZWwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5jdXJyZW50Q29uZmlnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5yb290KTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1c2VkKCkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzO1xuICAgICAgKHRoaXMuYnV0dG9uQ29udGVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBjbGFzc2VzLmJ1dHRvbkNvbnRlbnRcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRpc2FibGVTdHlsZSgpIHtcbiAgICBsZXQgc3R5bGUgPVxuICAgIGBib3gtc2hhZG93OiAwIDAgMCByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7YCArXG4gICAgYGN1cnNvcjogZGVmYXVsdDtgICtcbiAgICBgY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcudGV4dC5kaXNhYmxlZH0gIWltcG9ydGFudDtgICtcbiAgICBgcG9pbnRlci1ldmVudHM6IG5vbmU7YDtcbiAgICBpZiAodGhpcy5iZ0FuZENvbG9yICYmICh0aGlzLmJnQW5kQ29sb3IucmFpc2VkIHx8IHRoaXMuYmdBbmRDb2xvci5iZykpIHtcbiAgICAgIHN0eWxlICs9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMudGhlbWUuY29uZmlnLmJ1dHRvbi5kaXNhYmxlZH0gIWltcG9ydGFudDtgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yaXBwbGVDb250YWluZXIucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIEFwcFxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IEx5UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBMeUljb25CdXR0b24gfSBmcm9tICdAYWx5bGUvdWkvaWNvbi1idXR0b24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeVJpcHBsZU1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlCdXR0b25dLFxuICBkZWNsYXJhdGlvbnM6IFtMeUJ1dHRvbl1cbn0pXG5leHBvcnQgY2xhc3MgTHlCdXR0b25Nb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztJQXlDRSxZQUNVO1FBQUEsY0FBUyxHQUFULFNBQVM7dUJBMUJUO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQ3RDLFFBQVEsRUFBRTtnQkFDUixFQUFFLEVBQUUsU0FBUzthQUNkLENBQUM7WUFDSixRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQ2pDLFNBQVMsRUFDVCxFQUFDLEVBQUUsRUFBRSxPQUNILGdDQUFnQyxDQUNqQyxFQUFDLENBQ0g7WUFDRCxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQ3RDLGVBQWUsRUFDZixFQUFDLEVBQUUsRUFBRSxPQUNILFlBQVk7b0JBQ1osZUFBZTtvQkFDZiwwQkFBMEI7b0JBQzFCLHNCQUFzQjtvQkFDdEIsd0JBQXdCO29CQUN4QixjQUFjO29CQUNkLGVBQWU7b0JBQ2YseUJBQXlCLENBQzFCLEVBQUMsQ0FDSDtTQUNGO0tBR0k7OztZQWpDTixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFYVyxTQUFTOzs7Ozs7QUE2Q3JCO0lBQ0UsT0FBTywwQ0FBMEM7UUFDakQsb0NBQW9DO1FBQ3BDLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsV0FBVztRQUNYLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsMkJBQTJCO1FBQzNCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLDRCQUE0QjtRQUM1QixvQ0FBb0M7UUFDcEMsMERBQTBEO1FBQzFELG1CQUFtQixDQUFDO0NBQ3JCOzs7Ozs7QUMxRUQ7Ozs7Ozs7Ozs7SUF3RkUsWUFDVSxZQUNBLFVBQ0EsT0FDRCxjQUNDLGVBQ1IsT0FBZSxFQUNLO1FBTlosZUFBVSxHQUFWLFVBQVU7UUFDVixhQUFRLEdBQVIsUUFBUTtRQUNSLFVBQUssR0FBTCxLQUFLO1FBQ04saUJBQVksR0FBWixZQUFZO1FBQ1gsa0JBQWEsR0FBYixhQUFhO1FBRUQsZUFBVSxHQUFWLFVBQVU7eUJBdkRiLEtBQUs7Z0NBQ0csS0FBSztRQXdEOUIsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsdUJBQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFFO0tBQ0Y7Ozs7O1FBMURHLFFBQVEsQ0FBQyxHQUFZO1FBQ3ZCLHVCQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDckYsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQzs7Ozs7UUFHbEMsZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzs7Ozs7O0lBRS9CLElBQUksZUFBZSxDQUFDLEtBQWM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQzs7Ozs7UUFLRyxRQUFRLENBQUMsS0FBYztRQUN6Qix1QkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDMUYsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDbkY7Ozs7O0lBRUgsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRTtnQkFDNUQsRUFBRSxFQUFFLE9BQ0YsZUFBZSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sZUFBWSxVQUFVLEdBQUc7b0JBQ3pELGFBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLGVBQVksUUFBUSxLQUFLO29CQUN2RCxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxTQUFNLE9BQU8sR0FBRyxDQUMzQzthQUNGLENBQUM7U0FDSCxDQUFDO0tBQ0g7Ozs7SUFvQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEY7Ozs7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7O0lBR3hDLGVBQWU7UUFDYix1QkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDekMsbUJBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUE0QixHQUFFLFNBQVMsQ0FBQyxHQUFHLENBQzdELE9BQU8sQ0FBQyxhQUFhLENBQ3RCLENBQUM7S0FDTDs7OztJQUVPLFlBQVk7UUFDbEIscUJBQUksS0FBSyxHQUNULGdEQUFnRDtZQUNoRCxrQkFBa0I7WUFDbEIsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sU0FBTSxRQUFRLGNBQWM7WUFDdkQsdUJBQXVCLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckUsS0FBSyxJQUFJLHFCQUFxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sV0FBUSxRQUFRLGNBQWMsQ0FBQztTQUMvRTtRQUNELE9BQU8sS0FBSyxDQUFDOzs7OztJQUdmLFdBQVc7UUFDVCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3RDO0tBQ0Y7OztZQTdHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBbENDLFVBQVU7WUFLVixTQUFTO1lBY1QsUUFBUTtZQUdpQixlQUFlO1lBQ2pDLGVBQWU7WUFkdEIsTUFBTTtZQVdOLGtCQUFrQix1QkF1RWYsUUFBUTs7O3lCQWxEVixLQUFLO2dDQU1MLEtBQUssU0FBQyxXQUFXOzhCQVFqQixTQUFTLFNBQUMsU0FBUzt5QkFFbkIsS0FBSzs7Ozs7OztBQzVEUjs7O1lBT0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO2dCQUN2RCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ25CLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9