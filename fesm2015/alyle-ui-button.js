import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, NgZone, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import { Platform, toBoolean, LyTheme2, LyCommon, LyCommonModule } from '@alyle/ui';
import { Ripple, LyRippleService, LyRippleModule } from '@alyle/ui/ripple';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const styles = theme => {
    const { button, fontFamily } = theme.typography;
    /** @type {?} */
    const _styles = ({
        root: Object.assign({ fontFamily, color: theme.text.default, '-webkit-tap-highlight-color': 'transparent', backgroundColor: `rgba(0, 0, 0, 0)`, border: 0, padding: '0 1em', '-moz-appearance': 'none', margin: 0, borderRadius: '3px', outline: 'none', fontWeight: 500, boxSizing: 'border-box', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'center', display: 'inline-flex', cursor: 'pointer', '-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', userSelect: 'none', textDecorationLine: 'none', '-webkit-text-decoration-line': 'none', transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms' }, button),
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
const DEFAULT_SIZE = 'medium';
/** @type {?} */
const DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
const STYLE_PRIORITY = -2;
const ɵ0 = theme => ({
    padding: '0 8px',
    fontSize: theme.pxToRem(theme.typography.button.fontSize - 1),
    minHeight: '32px',
    minWidth: '64px'
}), ɵ1 = (theme) => ({
    padding: '0 21px',
    fontSize: theme.pxToRem(theme.typography.button.fontSize + 1),
    minHeight: '40px',
    minWidth: '112px'
});
/** *
 * @ignore
  @type {?} */
const Size = {
    small: ɵ0,
    medium: ({
        padding: '0 14px',
        minHeight: '36px',
        minWidth: '88px'
    }),
    large: ɵ1
};
class LyButton {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _theme
     * @param {?} _ngZone
     * @param {?} _rippleService
     * @param {?} bgAndColor
     */
    constructor(_elementRef, _renderer, _theme, _ngZone, _rippleService, bgAndColor) {
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
    /**
     * @ignore
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
     * Whether ripples are disabled.
     * @param {?} val
     * @return {?}
     */
    set disableRipple(val) {
        if (Platform.isBrowser && val !== this._disableRipple) {
            /** @type {?} */
            const newVal = this._disableRipple = toBoolean(val);
            // remove previous ripple if exist
            this.ngOnDestroy();
            if (!newVal) {
                /** @type {?} */
                const rippleContainer = this._rippleContainer.nativeElement;
                /** @type {?} */
                const triggerElement = this._elementRef.nativeElement;
                this._ripple = new Ripple(this._theme.config, this._ngZone, this._rippleService.classes, rippleContainer, triggerElement);
            }
        }
    }
    /**
     * @return {?}
     */
    get disableRipple() {
        return this._disableRipple;
    }
    /**
     * Button size
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set size(val) {
        if (val !== this.size) {
            this._size = val;
            this._sizeClass = this._theme.addStyle(`lyButton-size:${this.size}`, Size[/** @type {?} */ (this.size)], this._elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._elementRef.nativeElement, this.classes.root);
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.disableRipple === null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Platform.isBrowser) {
            if (this._ripple) {
                this._ripple.removeEvents();
                this._ripple = null;
            }
        }
    }
}
LyButton.decorators = [
    { type: Component, args: [{
                selector: '[ly-button]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
  <span [className]="classes.content">
    <ng-content></ng-content>
  </span>
  <div #rippleContainer [className]="_rippleService.classes.container"></div>
  `,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
LyButton.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: NgZone },
    { type: LyRippleService },
    { type: LyCommon, decorators: [{ type: Optional }] }
];
LyButton.propDecorators = {
    _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
    rippleSensitive: [{ type: Input, args: ['sensitive',] }],
    disableRipple: [{ type: Input }],
    size: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyButtonModule {
}
LyButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LyRippleModule, LyCommonModule],
                exports: [LyButton, LyCommonModule],
                declarations: [LyButton]
            },] }
];

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

export { LyButton, LyButtonModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zdHlsZS50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+IHtcbiAgY29uc3QgeyBidXR0b24sIGZvbnRGYW1pbHkgfSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gIGNvbnN0IF9zdHlsZXMgPSAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHksXG4gICAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0LFxuICAgICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsIDAsIDAsIDApYCxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIHBhZGRpbmc6ICcwIDFlbScsXG4gICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnLFxuICAgICAgJy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmUnOiAnbm9uZScsXG4gICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAzNzVtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zLCBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpIDBtcycsXG4gICAgICAuLi5idXR0b25cbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnLFxuICAgICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgICAgYWxpZ25Db250ZW50OiAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB9XG4gIH0pO1xuICBpZiAodHlwZW9mIF9zdHlsZXMucm9vdC5mb250U2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICBfc3R5bGVzLnJvb3QuZm9udFNpemUgPSB0aGVtZS5weFRvUmVtKF9zdHlsZXMucm9vdC5mb250U2l6ZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBfc3R5bGVzLnJvb3QubGV0dGVyU3BhY2luZyA9PT0gJ251bWJlcicpIHtcbiAgICBfc3R5bGVzLnJvb3QubGV0dGVyU3BhY2luZyA9IHRoZW1lLnB4VG9SZW0oX3N0eWxlcy5yb290LmxldHRlclNwYWNpbmcpO1xuICB9XG4gIHJldHVybiBfc3R5bGVzO1xufTtcbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgTHlUaGVtZTIsXG4gIEx5Q29tbW9uXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIEx5UmlwcGxlU2VydmljZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9idXR0b24uc3R5bGUnO1xuY29uc3QgREVGQVVMVF9TSVpFID0gJ21lZGl1bSc7XG5jb25zdCBERUZBVUxUX0RJU0FCTEVfUklQUExFID0gZmFsc2U7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG50eXBlIEx5QnV0dG9uU2l6ZSA9ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG5cbi8qKiBAaWdub3JlICovXG5jb25zdCBTaXplOiBSZWNvcmQ8THlCdXR0b25TaXplLCBhbnk+ID0ge1xuICBzbWFsbDogdGhlbWUgPT4gKHtcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplIC0gMSksXG4gICAgbWluSGVpZ2h0OiAnMzJweCcsXG4gICAgbWluV2lkdGg6ICc2NHB4J1xuICB9KSxcbiAgbWVkaXVtOiAoe1xuICAgIHBhZGRpbmc6ICcwIDE0cHgnLFxuICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgIG1pbldpZHRoOiAnODhweCdcbiAgfSksXG4gIGxhcmdlOiAodGhlbWUpID0+ICh7XG4gICAgcGFkZGluZzogJzAgMjFweCcsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgKyAxKSxcbiAgICBtaW5IZWlnaHQ6ICc0MHB4JyxcbiAgICBtaW5XaWR0aDogJzExMnB4J1xuICB9KVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2x5LWJ1dHRvbl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgPHNwYW4gW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgPGRpdiAjcmlwcGxlQ29udGFpbmVyIFtjbGFzc05hbWVdPVwiX3JpcHBsZVNlcnZpY2UuY2xhc3Nlcy5jb250YWluZXJcIj48L2Rpdj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFN0eWxlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9yaXBwbGVTZW5zaXRpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmlwcGxlOiBSaXBwbGU7XG4gIHByaXZhdGUgX3NpemU6IEx5QnV0dG9uU2l6ZTtcbiAgcHJpdmF0ZSBfc2l6ZUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc2FibGVSaXBwbGU6IGJvb2xlYW4gPSBudWxsO1xuICAvKiogQGlnbm9yZSAqL1xuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIC8qKiBAaWdub3JlICovXG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgcmlwcGxlcyBhcmUgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIHNldCBkaXNhYmxlUmlwcGxlKHZhbDogYm9vbGVhbikge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdmFsICE9PSB0aGlzLl9kaXNhYmxlUmlwcGxlKSB7XG4gICAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9kaXNhYmxlUmlwcGxlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICAvLyByZW1vdmUgcHJldmlvdXMgcmlwcGxlIGlmIGV4aXN0XG4gICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgICAvLyBhZGQgcmlwcGxlXG4gICAgICAgIGNvbnN0IHJpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCB0cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5fcmlwcGxlID0gbmV3IFJpcHBsZSh0aGlzLl90aGVtZS5jb25maWcsIHRoaXMuX25nWm9uZSwgdGhpcy5fcmlwcGxlU2VydmljZS5jbGFzc2VzLCByaXBwbGVDb250YWluZXIsIHRyaWdnZXJFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVSaXBwbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVSaXBwbGU7XG4gIH1cbiAgLyoqIEJ1dHRvbiBzaXplICovXG4gIEBJbnB1dCgpXG4gIGdldCBzaXplKCk6IEx5QnV0dG9uU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cbiAgc2V0IHNpemUodmFsOiBMeUJ1dHRvblNpemUpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5QnV0dG9uLXNpemU6JHt0aGlzLnNpemV9YCxcbiAgICAgICAgU2l6ZVt0aGlzLnNpemUgYXMgYW55XSxcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9zaXplQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgYmdBbmRDb2xvcjogTHlDb21tb25cbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBpZiAodGhpcy5fcmlwcGxlKSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZS5yZW1vdmVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5fcmlwcGxlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiLy8gQXBwXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5QnV0dG9uLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5QnV0dG9uXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbk1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxNQUFhLE1BQU0sR0FBRyxLQUFLO0lBQ3pCLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7SUFDaEQsTUFBTSxPQUFP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