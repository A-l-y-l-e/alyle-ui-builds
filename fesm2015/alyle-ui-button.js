import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, NgZone, ViewEncapsulation, NgModule } from '@angular/core';
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
        root: Object.assign({ fontFamily, color: theme.text.default, '-webkit-tap-highlight-color': 'transparent', backgroundColor: `rgba(0, 0, 0, 0)`, border: 0, padding: '0 1em', '-moz-appearance': 'none', margin: 0, borderRadius: '3px', outline: 'none', fontWeight: 500, boxSizing: 'border-box', position: 'relative', justifyContent: 'center', alignItems: 'center', alignContent: 'center', display: 'inline-flex', cursor: 'pointer', '-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', userSelect: 'none', textDecorationLine: 'none', '-webkit-text-decoration-line': 'none', transition: 'background 375ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, box-shadow 280ms cubic-bezier(.4,0,.2,1) 0ms', overflow: 'hidden' }, button),
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
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} theme
     * @param {?} rippleStyles
     * @param {?} _ngZone
     * @param {?} bgAndColor
     */
    constructor(elementRef, renderer, theme, rippleStyles, _ngZone, bgAndColor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.theme = theme;
        this.rippleStyles = rippleStyles;
        this.bgAndColor = bgAndColor;
        this.classes = this.theme.addStyleSheet(styles, 'lyButton');
        this._disabled = false;
        this._rippleSensitive = false;
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
        if (Platform.isBrowser) {
            /** @type {?} */
            const el = elementRef.nativeElement;
            this._rippleContainer = new Ripple(_ngZone, rippleStyles.stylesData, el);
        }
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
            this._size = val;
            this._sizeClass = this.theme.addStyle(`lyButton-size:${this.size}`, Size[this.size], this.elementRef.nativeElement, this._sizeClass);
        }
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
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
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.root);
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.elementRef.nativeElement.focus();
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
  <span [className]="classes.content">
    <ng-content></ng-content>
  </span>
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
                exports: [LyButton],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktYnV0dG9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvYnV0dG9uL2J1dHRvbi5zdHlsZS50cyIsIm5nOi8vQGFseWxlL3VpL2J1dHRvbi9idXR0b24udHMiLCJuZzovL0BhbHlsZS91aS9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4ge1xuICBjb25zdCB7IGJ1dHRvbiwgZm9udEZhbWlseSB9ID0gdGhlbWUudHlwb2dyYXBoeTtcbiAgY29uc3QgX3N0eWxlcyA9ICh7XG4gICAgcm9vdDoge1xuICAgICAgZm9udEZhbWlseSxcbiAgICAgIGNvbG9yOiB0aGVtZS50ZXh0LmRlZmF1bHQsXG4gICAgICAnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwgMCwgMCwgMClgLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgcGFkZGluZzogJzAgMWVtJyxcbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICctd2Via2l0LXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgJy1tb3otdXNlci1zZWxlY3QnOiAnbm9uZScsXG4gICAgICAnLW1zLXVzZXItc2VsZWN0JzogJ25vbmUnLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZScsXG4gICAgICAnLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZSc6ICdub25lJyxcbiAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kIDM3NW1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSAwbXMsIGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSkgMG1zJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIC4uLmJ1dHRvblxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnaW5oZXJpdCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnaW5oZXJpdCcsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdpbmhlcml0JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIH1cbiAgfSk7XG4gIGlmICh0eXBlb2YgX3N0eWxlcy5yb290LmZvbnRTaXplID09PSAnbnVtYmVyJykge1xuICAgIF9zdHlsZXMucm9vdC5mb250U2l6ZSA9IHRoZW1lLnB4VG9SZW0oX3N0eWxlcy5yb290LmZvbnRTaXplKTtcbiAgfVxuICBpZiAodHlwZW9mIF9zdHlsZXMucm9vdC5sZXR0ZXJTcGFjaW5nID09PSAnbnVtYmVyJykge1xuICAgIF9zdHlsZXMucm9vdC5sZXR0ZXJTcGFjaW5nID0gdGhlbWUucHhUb1JlbShfc3R5bGVzLnJvb3QubGV0dGVyU3BhY2luZyk7XG4gIH1cbiAgcmV0dXJuIF9zdHlsZXM7XG59O1xuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgTHlUaGVtZTIsXG4gIEx5Q29tbW9uXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIEx5UmlwcGxlU2VydmljZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9idXR0b24uc3R5bGUnO1xuY29uc3QgREVGQVVMVF9TSVpFID0gJ21lZGl1bSc7XG5cbmNvbnN0IFNpemUgPSB7XG4gIHNtYWxsOiB0aGVtZSA9PiAoe1xuICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgLSAxKSxcbiAgICBtaW5IZWlnaHQ6ICczMnB4JyxcbiAgICBtaW5XaWR0aDogJzY0cHgnXG4gIH0pLFxuICBtZWRpdW06ICh7XG4gICAgcGFkZGluZzogJzAgMTRweCcsXG4gICAgbWluSGVpZ2h0OiAnMzZweCcsXG4gICAgbWluV2lkdGg6ICc4OHB4J1xuICB9KSxcbiAgbGFyZ2U6ICh0aGVtZSkgPT4gKHtcbiAgICBwYWRkaW5nOiAnMCAyMXB4JyxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSArIDEpLFxuICAgIG1pbkhlaWdodDogJzQwcHgnLFxuICAgIG1pbldpZHRoOiAnMTEycHgnXG4gIH0pXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbHktYnV0dG9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgJ2x5QnV0dG9uJyk7XG4gIHB1YmxpYyBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIC8vIHByaXZhdGUgX291dGxpbmVkQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBwcml2YXRlIF9zaXplOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nO1xuXG4gIC8vIEBJbnB1dCgpXG4gIC8vIHNldCBvdXRsaW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgLy8gICBjb25zdCBjbGFzc25hbWUgPSB0b0Jvb2xlYW4odmFsKSA9PT0gdHJ1ZSA/IHRoaXMuY2xhc3Nlcy5vdXRsaW5lZCA6ICcnO1xuICAvLyAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBjbGFzc25hbWUsIHRoaXMuX291dGxpbmVkQ2xhc3NOYW1lKTtcbiAgLy8gICB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSA9IGNsYXNzbmFtZTtcbiAgLy8gfVxuXG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlCdXR0b24tc2l6ZToke3RoaXMuc2l6ZX1gLFxuICAgICAgICBTaXplW3RoaXMuc2l6ZV0sXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9zaXplQ2xhc3NcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgLy8gQElucHV0KClcbiAgLy8gc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gIC8vICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAvLyAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAvLyAgICAgY29uc3Qga2V5ID0gdGhpcy5iZ0FuZENvbG9yICYmICh0aGlzLmJnQW5kQ29sb3IucmFpc2VkIHx8IHRoaXMuYmdBbmRDb2xvci5iZykgPyAncicgOiAnZic7XG4gIC8vICAgICB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5QnV0dG9uLWRpc2FibGVkOiR7a2V5fWAsIHRoaXMuZGlzYWJsZVN0eWxlLmJpbmQodGhpcyksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIHJpcHBsZVN0eWxlczogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJnQW5kQ29sb3I6IEx5Q29tbW9uXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUoX25nWm9uZSwgcmlwcGxlU3R5bGVzLnN0eWxlc0RhdGEsIGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgZGlzYWJsZVN0eWxlKCkge1xuICAvLyAgIGxldCBzdHlsZSA9XG4gIC8vICAgYGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtgICtcbiAgLy8gICBgY3Vyc29yOiBkZWZhdWx0O2AgK1xuICAvLyAgIGBjb2xvcjogJHt0aGlzLnRoZW1lLmNvbmZpZy50ZXh0LmRpc2FibGVkfSAhaW1wb3J0YW50O2AgK1xuICAvLyAgIGBwb2ludGVyLWV2ZW50czogbm9uZTtgO1xuICAvLyAgIGlmICh0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSkge1xuICAvLyAgICAgc3R5bGUgKz0gYGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcuYnV0dG9uLmRpc2FibGVkfSAhaW1wb3J0YW50O2A7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBzdHlsZTtcbiAgLy8gfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiLy8gQXBwXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IEx5QnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5QnV0dG9uXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlCdXR0b25dXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7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