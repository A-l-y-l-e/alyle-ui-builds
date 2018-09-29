import { LY_COMMON_STYLES, Platform, toBoolean, LyTheme2, LyCommon, LyCommonModule } from '@alyle/ui';
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, NgZone, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
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
        },
        rippleContainer: Object.assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' })
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
/** @type {?} */
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
     * @param {?} _rippleService
     * @param {?} _ngZone
     * @param {?} bgAndColor
     */
    constructor(_elementRef, _renderer, _theme, _rippleService, _ngZone, bgAndColor) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._theme = _theme;
        this._rippleService = _rippleService;
        this._ngZone = _ngZone;
        /**
         * Style
         * @ignore
         */
        this.classes = this._theme.addStyleSheet(styles, 'lyButton', STYLE_PRIORITY);
        this._rippleSensitive = false;
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
            this.size = /** @type {?} */ (DEFAULT_SIZE);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (Platform.isBrowser) {
            /** @type {?} */
            const rippleContainer = this._rippleContainer.nativeElement;
            /** @type {?} */
            const triggerElement = this._elementRef.nativeElement;
            this._ripple = new Ripple(this._ngZone, this._rippleService.classes, rippleContainer, triggerElement);
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
            this._ripple.removeEvents();
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
  <div #rippleContainer [className]="classes.rippleContainer"></div>
  `,
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
LyButton.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyTheme2 },
    { type: LyRippleService },
    { type: NgZone },
    { type: LyCommon, decorators: [{ type: Optional }] }
];
LyButton.propDecorators = {
    _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
    rippleSensitive: [{ type: Input, args: ['sensitive',] }],
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
            },] },
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zdHlsZS50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+IHtcbiAgY29uc3QgeyBidXR0b24sIGZvbnRGYW1pbHkgfSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gIGNvbnN0IF9zdHlsZXMgPSAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHksXG4gICAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0LFxuICAgICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsIDAsIDAsIDApYCxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIHBhZGRpbmc6ICcwIDFlbScsXG4gICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnLFxuICAgICAgJy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmUnOiAnbm9uZScsXG4gICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAzNzVtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zLCBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpIDBtcycsXG4gICAgICAuLi5idXR0b25cbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2luaGVyaXQnLFxuICAgICAgYWxpZ25JdGVtczogJ2luaGVyaXQnLFxuICAgICAgYWxpZ25Db250ZW50OiAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB9LFxuICAgIHJpcHBsZUNvbnRhaW5lcjoge1xuICAgICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgICB9XG4gIH0pO1xuICBpZiAodHlwZW9mIF9zdHlsZXMucm9vdC5mb250U2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICBfc3R5bGVzLnJvb3QuZm9udFNpemUgPSB0aGVtZS5weFRvUmVtKF9zdHlsZXMucm9vdC5mb250U2l6ZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBfc3R5bGVzLnJvb3QubGV0dGVyU3BhY2luZyA9PT0gJ251bWJlcicpIHtcbiAgICBfc3R5bGVzLnJvb3QubGV0dGVyU3BhY2luZyA9IHRoZW1lLnB4VG9SZW0oX3N0eWxlcy5yb290LmxldHRlclNwYWNpbmcpO1xuICB9XG4gIHJldHVybiBfc3R5bGVzO1xufTtcbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgTHlUaGVtZTIsXG4gIEx5Q29tbW9uXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIEx5UmlwcGxlU2VydmljZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9idXR0b24uc3R5bGUnO1xuY29uc3QgREVGQVVMVF9TSVpFID0gJ21lZGl1bSc7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuXG5pbnRlcmZhY2UgU2l6ZSB7XG4gIHNtYWxsOiBhbnk7XG4gIG1lZGl1bTogYW55O1xuICBsYXJnZTogYW55O1xufVxuXG5jb25zdCBTaXplID0ge1xuICBzbWFsbDogdGhlbWUgPT4gKHtcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplIC0gMSksXG4gICAgbWluSGVpZ2h0OiAnMzJweCcsXG4gICAgbWluV2lkdGg6ICc2NHB4J1xuICB9KSxcbiAgbWVkaXVtOiAoe1xuICAgIHBhZGRpbmc6ICcwIDE0cHgnLFxuICAgIG1pbkhlaWdodDogJzM2cHgnLFxuICAgIG1pbldpZHRoOiAnODhweCdcbiAgfSksXG4gIGxhcmdlOiAodGhlbWUpID0+ICh7XG4gICAgcGFkZGluZzogJzAgMjFweCcsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgKyAxKSxcbiAgICBtaW5IZWlnaHQ6ICc0MHB4JyxcbiAgICBtaW5XaWR0aDogJzExMnB4J1xuICB9KVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2x5LWJ1dHRvbl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgPHNwYW4gW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgPGRpdiAjcmlwcGxlQ29udGFpbmVyIFtjbGFzc05hbWVdPVwiY2xhc3Nlcy5yaXBwbGVDb250YWluZXJcIj48L2Rpdj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFN0eWxlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5QnV0dG9uJywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9yaXBwbGVTZW5zaXRpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmlwcGxlOiBSaXBwbGU7XG4gIHByaXZhdGUgX3NpemU6IFJlY29yZDxrZXlvZiBTaXplLCBzdHJpbmc+O1xuICBwcml2YXRlIF9zaXplQ2xhc3M6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIC8qKiBAaWdub3JlICovXG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHNpemUoKTogUmVjb3JkPGtleW9mIFNpemUsIHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG4gIHNldCBzaXplKHZhbDogUmVjb3JkPGtleW9mIFNpemUsIHN0cmluZz4pIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5QnV0dG9uLXNpemU6JHt0aGlzLnNpemV9YCxcbiAgICAgICAgU2l6ZVt0aGlzLnNpemUgYXMgYW55XSxcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9zaXplQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIEBPcHRpb25hbCgpIGJnQW5kQ29sb3I6IEx5Q29tbW9uXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jbGFzc2VzLnJvb3QpO1xuICAgIGlmICghdGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemUgPSBERUZBVUxUX1NJWkUgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCByaXBwbGVDb250YWluZXIgPSB0aGlzLl9yaXBwbGVDb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IHRyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5fcmlwcGxlID0gbmV3IFJpcHBsZSh0aGlzLl9uZ1pvbmUsIHRoaXMuX3JpcHBsZVNlcnZpY2UuY2xhc3NlcywgcmlwcGxlQ29udGFpbmVyLCB0cmlnZ2VyRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmlwcGxlLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cbiAgfVxuXG59XG4iLCIvLyBBcHBcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgTHlCdXR0b24gfSBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgeyBMeVJpcHBsZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBMeVJpcHBsZU1vZHVsZSwgTHlDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTHlCdXR0b24sIEx5Q29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlCdXR0b25dXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFhLE1BQU0sR0FBRyxLQUFLO0lBQ3pCLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7SUFDaEQsTUFBTSxPQUFPLElBQUk7UUFDZixJQUFJLGtCQUNGLFVBQVUsRUFDVixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ3pCLDZCQUE2QixFQUFFLGFBQWEsRUFDNUMsZUFBZSxFQUFFLGtCQUFrQixFQUNuQyxNQUFNLEVBQUUsQ0FBQyxFQUNULE9BQU8sRUFBRSxPQUFPLEVBQ2hCLGlCQUFpQixFQUFFLE1BQU0sRUFDekIsTUFBTSxFQUFFLENBQUMsRUFDVCxZQUFZLEVBQUUsS0FBSyxFQUNuQixPQUFPLEVBQUUsTUFBTSxFQUNmLFVBQVUsRUFBRSxHQUFHLEVBQ2YsU0FBUyxFQUFFLFlBQVksRUFDdkIsUUFBUSxFQUFFLFVBQVUsRUFDcEIsY0FBYyxFQUFFLFFBQVEsRUFDeEIsVUFBVSxFQUFFLFFBQVEsRUFDcEIsWUFBWSxFQUFFLFFBQVEsRUFDdEIsT0FBTyxFQUFFLGFBQWEsRUFDdEIsTUFBTSxFQUFFLFNBQVMsRUFDakIscUJBQXFCLEVBQUUsTUFBTSxFQUM3QixrQkFBa0IsRUFBRSxNQUFNLEVBQzFCLGlCQUFpQixFQUFFLE1BQU0sRUFDekIsVUFBVSxFQUFFLE1BQU0sRUFDbEIs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