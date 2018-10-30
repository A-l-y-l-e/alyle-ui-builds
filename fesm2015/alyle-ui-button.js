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
        root: Object.assign({ fontFamily, color: theme.text.default, '-webkit-tap-highlight-color': 'transparent', backgroundColor: `rgba(0, 0, 0, 0)`, border: 0, padding: '0 1em', '-moz-appearance': 'none', margin: 0, borderRadius: '3px', outline: 'none', fontWeight: 500, boxSizing: 'border-box', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'center', display: 'inline-flex', cursor: 'pointer', '-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', userSelect: 'none', textDecorationLine: 'none', '-webkit-text-decoration-line': 'none', transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms', '&::-moz-focus-inner, &::-moz-focus-inner': {
                border: 0
            } }, button),
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
    minWidth: '48px'
}), ɵ1 = (theme) => ({
    padding: '0 21px',
    fontSize: theme.pxToRem(theme.typography.button.fontSize + 1),
    minHeight: '40px',
    minWidth: '96px'
});
/** *
 * @ignore
  @type {?} */
const Size = {
    small: ɵ0,
    medium: ({
        padding: '0 14px',
        minHeight: '36px',
        minWidth: '64px'
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
     * @return {?}
     */
    get disableRipple() {
        return this._disableRipple;
    }
    /**
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zdHlsZS50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMWV9DT01NT05fU1RZTEVTIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+IHtcbiAgY29uc3QgeyBidXR0b24sIGZvbnRGYW1pbHkgfSA9IHRoZW1lLnR5cG9ncmFwaHk7XG4gIGNvbnN0IF9zdHlsZXMgPSAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHksXG4gICAgICBjb2xvcjogdGhlbWUudGV4dC5kZWZhdWx0LFxuICAgICAgJy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsIDAsIDAsIDApYCxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIHBhZGRpbmc6ICcwIDFlbScsXG4gICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAnLXdlYmtpdC11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tcy11c2VyLXNlbGVjdCc6ICdub25lJyxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnLFxuICAgICAgJy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmUnOiAnbm9uZScsXG4gICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAzNzVtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zLCBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllciguNCwwLC4yLDEpIDBtcycsXG4gICAgICAnJjo6LW1vei1mb2N1cy1pbm5lciwgJjo6LW1vei1mb2N1cy1pbm5lcic6IHtcbiAgICAgICAgYm9yZGVyOiAwXG4gICAgICB9LFxuICAgICAgLi4uYnV0dG9uXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduSXRlbXM6ICdpbmhlcml0JyxcbiAgICAgIGFsaWduQ29udGVudDogJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgfVxuICB9KTtcbiAgaWYgKHR5cGVvZiBfc3R5bGVzLnJvb3QuZm9udFNpemUgPT09ICdudW1iZXInKSB7XG4gICAgX3N0eWxlcy5yb290LmZvbnRTaXplID0gdGhlbWUucHhUb1JlbShfc3R5bGVzLnJvb3QuZm9udFNpemUpO1xuICB9XG4gIGlmICh0eXBlb2YgX3N0eWxlcy5yb290LmxldHRlclNwYWNpbmcgPT09ICdudW1iZXInKSB7XG4gICAgX3N0eWxlcy5yb290LmxldHRlclNwYWNpbmcgPSB0aGVtZS5weFRvUmVtKF9zdHlsZXMucm9vdC5sZXR0ZXJTcGFjaW5nKTtcbiAgfVxuICByZXR1cm4gX3N0eWxlcztcbn07XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIEx5VGhlbWUyLFxuICBMeUNvbW1vblxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vYnV0dG9uLnN0eWxlJztcbmNvbnN0IERFRkFVTFRfU0laRSA9ICdtZWRpdW0nO1xuY29uc3QgREVGQVVMVF9ESVNBQkxFX1JJUFBMRSA9IGZhbHNlO1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcblxudHlwZSBMeUJ1dHRvblNpemUgPSAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuXG4vKiogQGlnbm9yZSAqL1xuY29uc3QgU2l6ZTogUmVjb3JkPEx5QnV0dG9uU2l6ZSwgYW55PiA9IHtcbiAgc21hbGw6IHRoZW1lID0+ICh7XG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSAtIDEpLFxuICAgIG1pbkhlaWdodDogJzMycHgnLFxuICAgIG1pbldpZHRoOiAnNDhweCdcbiAgfSksXG4gIG1lZGl1bTogKHtcbiAgICBwYWRkaW5nOiAnMCAxNHB4JyxcbiAgICBtaW5IZWlnaHQ6ICczNnB4JyxcbiAgICBtaW5XaWR0aDogJzY0cHgnXG4gIH0pLFxuICBsYXJnZTogKHRoZW1lKSA9PiAoe1xuICAgIHBhZGRpbmc6ICcwIDIxcHgnLFxuICAgIGZvbnRTaXplOiB0aGVtZS5weFRvUmVtKHRoZW1lLnR5cG9ncmFwaHkuYnV0dG9uLmZvbnRTaXplICsgMSksXG4gICAgbWluSGVpZ2h0OiAnNDBweCcsXG4gICAgbWluV2lkdGg6ICc5NnB4J1xuICB9KVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2x5LWJ1dHRvbl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgPHNwYW4gW2NsYXNzTmFtZV09XCJjbGFzc2VzLmNvbnRlbnRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgPGRpdiAjcmlwcGxlQ29udGFpbmVyIFtjbGFzc05hbWVdPVwiX3JpcHBsZVNlcnZpY2UuY2xhc3Nlcy5jb250YWluZXJcIj48L2Rpdj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFN0eWxlXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF9yaXBwbGVTZW5zaXRpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmlwcGxlOiBSaXBwbGU7XG4gIHByaXZhdGUgX3NpemU6IEx5QnV0dG9uU2l6ZTtcbiAgcHJpdmF0ZSBfc2l6ZUNsYXNzOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc2FibGVSaXBwbGU6IGJvb2xlYW4gPSBudWxsO1xuICAvKiogQGlnbm9yZSAqL1xuICBAVmlld0NoaWxkKCdyaXBwbGVDb250YWluZXInKSBfcmlwcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIC8qKiBAaWdub3JlICovXG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgcmlwcGxlcyBhcmUgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlUmlwcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUmlwcGxlO1xuICB9XG4gIHNldCBkaXNhYmxlUmlwcGxlKHZhbDogYm9vbGVhbikge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdmFsICE9PSB0aGlzLl9kaXNhYmxlUmlwcGxlKSB7XG4gICAgICBjb25zdCBuZXdWYWwgPSB0aGlzLl9kaXNhYmxlUmlwcGxlID0gdG9Cb29sZWFuKHZhbCk7XG4gICAgICAvLyByZW1vdmUgcHJldmlvdXMgcmlwcGxlIGlmIGV4aXN0XG4gICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgICAvLyBhZGQgcmlwcGxlXG4gICAgICAgIGNvbnN0IHJpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCB0cmlnZ2VyRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5fcmlwcGxlID0gbmV3IFJpcHBsZSh0aGlzLl90aGVtZS5jb25maWcsIHRoaXMuX25nWm9uZSwgdGhpcy5fcmlwcGxlU2VydmljZS5jbGFzc2VzLCByaXBwbGVDb250YWluZXIsIHRyaWdnZXJFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqIEJ1dHRvbiBzaXplICovXG4gIEBJbnB1dCgpXG4gIGdldCBzaXplKCk6IEx5QnV0dG9uU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cbiAgc2V0IHNpemUodmFsOiBMeUJ1dHRvblNpemUpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLl90aGVtZS5hZGRTdHlsZShcbiAgICAgICAgYGx5QnV0dG9uLXNpemU6JHt0aGlzLnNpemV9YCxcbiAgICAgICAgU2l6ZVt0aGlzLnNpemUgYXMgYW55XSxcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9zaXplQ2xhc3MsXG4gICAgICAgIFNUWUxFX1BSSU9SSVRZXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHVibGljIF9yaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgYmdBbmRDb2xvcjogTHlDb21tb25cbiAgKSB7XG4gICAgaWYgKGJnQW5kQ29sb3IpIHtcbiAgICAgIGJnQW5kQ29sb3Iuc2V0QXV0b0NvbnRyYXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZVJpcHBsZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5kaXNhYmxlUmlwcGxlID0gREVGQVVMVF9ESVNBQkxFX1JJUFBMRTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBpZiAodGhpcy5fcmlwcGxlKSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZS5yZW1vdmVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5fcmlwcGxlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIiwiLy8gQXBwXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5QnV0dG9uLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5QnV0dG9uXVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbk1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxNQUFhLE1B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