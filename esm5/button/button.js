/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, NgZone, ViewEncapsulation } from '@angular/core';
import { Platform, toBoolean, LyTheme2, LyCommon } from '@alyle/ui';
import { Ripple, LyRippleService } from '@alyle/ui/ripple';
import { styles } from './button.style';
var /** @type {?} */ DEFAULT_SIZE = 'medium';
var ɵ0 = function (theme) {
    return ({
        padding: '0 8px',
        fontSize: theme.pxToRem(theme.typography.button.fontSize - 1),
        minHeight: '32px',
        minWidth: '64px'
    });
}, ɵ1 = function (theme) {
    return ({
        padding: '0 21px',
        fontSize: theme.pxToRem(theme.typography.button.fontSize + 1),
        minHeight: '40px',
        minWidth: '112px'
    });
};
var /** @type {?} */ Size = {
    small: ɵ0,
    medium: ({
        padding: '0 14px',
        minHeight: '36px',
        minWidth: '88px'
    }),
    large: ɵ1
};
var LyButton = /** @class */ (function () {
    function LyButton(elementRef, renderer, theme, rippleStyles, _ngZone, bgAndColor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.theme = theme;
        this.rippleStyles = rippleStyles;
        this.bgAndColor = bgAndColor;
        this._disabled = false;
        this._rippleSensitive = false;
        this.classes = this.theme.addStyleSheet(styles, 'lyButton');
        if (bgAndColor) {
            bgAndColor.setAutoContrast();
        }
        if (Platform.isBrowser) {
            var /** @type {?} */ el = elementRef.nativeElement;
            this._rippleContainer = new Ripple(_ngZone, rippleStyles.stylesData, el);
        }
    }
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
                this._size = val;
                this._sizeClass = this.theme.addStyle("lyButton-size:" + this.size, Size[this.size], this.elementRef.nativeElement, this._sizeClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "disabled", {
        // @Input()
        // set disabled(value: boolean) {
        //   this._disabled = toBoolean(value);
        //   if (this._disabled) {
        //     const key = this.bgAndColor && (this.bgAndColor.raised || this.bgAndColor.bg) ? 'r' : 'f';
        //     this._disabledClassName = this.theme.addStyle(`lyButton-disabled:${key}`, this.disableStyle.bind(this), this.elementRef.nativeElement, this._disabledClassName);
        //   } else {
        //     this.renderer.removeClass(this.elementRef.nativeElement, this._disabledClassName);
        //   }
        // }
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
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
        this.renderer.addClass(this.elementRef.nativeElement, this.classes.root);
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    };
    /**
     * @return {?}
     */
    LyButton.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
    };
    // private disableStyle() {
    //   let style =
    //   `box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;` +
    //   `cursor: default;` +
    //   `color: ${this.theme.config.text.disabled} !important;` +
    //   `pointer-events: none;`;
    //   if (this.bgAndColor && (this.bgAndColor.raised || this.bgAndColor.bg)) {
    //     style += `background-color: ${this.theme.config.button.disabled} !important;`;
    //   }
    //   return style;
    // }
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
                    template: "\n  <span [className]=\"classes.content\">\n    <ng-content></ng-content>\n  </span>\n  ",
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    LyButton.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: LyTheme2, },
        { type: LyRippleService, },
        { type: NgZone, },
        { type: LyCommon, decorators: [{ type: Optional },] },
    ]; };
    LyButton.propDecorators = {
        "rippleSensitive": [{ type: Input, args: ['sensitive',] },],
        "size": [{ type: Input },],
    };
    return LyButton;
}());
export { LyButton };
function LyButton_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyButton.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyButton.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyButton.propDecorators;
    /** @type {?} */
    LyButton.prototype.classes;
    /** @type {?} */
    LyButton.prototype._disabled;
    /** @type {?} */
    LyButton.prototype._rippleSensitive;
    /** @type {?} */
    LyButton.prototype._rippleContainer;
    /** @type {?} */
    LyButton.prototype._size;
    /** @type {?} */
    LyButton.prototype._sizeClass;
    /** @type {?} */
    LyButton.prototype.elementRef;
    /** @type {?} */
    LyButton.prototype.renderer;
    /** @type {?} */
    LyButton.prototype.theme;
    /** @type {?} */
    LyButton.prototype.rippleStyles;
    /** @type {?} */
    LyButton.prototype.bgAndColor;
}
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLFFBQVEsRUFDVCxNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxxQkFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDO1NBR3JCLFVBQUEsS0FBSztJQUFJLE9BQUEsQ0FBQztRQUNmLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDN0QsU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLE1BQU07S0FDakIsQ0FBQztBQUxjLENBS2QsT0FNSyxVQUFDLEtBQUs7SUFBSyxPQUFBLENBQUM7UUFDakIsT0FBTyxFQUFFLFFBQVE7UUFDakIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM3RCxTQUFTLEVBQUUsTUFBTTtRQUNqQixRQUFRLEVBQUUsT0FBTztLQUNsQixDQUFDO0FBTGdCLENBS2hCO0FBakJKLHFCQUFNLElBQUksR0FBRztJQUNYLEtBQUssSUFLSDtJQUNGLE1BQU0sRUFBRSxDQUFDO1FBQ1As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QUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwwRkFJVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBaERDLFVBQVU7Z0JBR1YsU0FBUztnQkFTVCxRQUFRO2dCQUdPLGVBQWU7Z0JBWDlCLE1BQU07Z0JBU04sUUFBUSx1QkFvR0wsUUFBUTs7O29DQTVDVixLQUFLLFNBQUMsV0FBVzt5QkFRakIsS0FBSzs7bUJBaEZSOztTQW9EYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGxhdGZvcm0sXG4gIHRvQm9vbGVhbixcbiAgTHlUaGVtZTIsXG4gIEx5Q29tbW9uXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIEx5UmlwcGxlU2VydmljZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9idXR0b24uc3R5bGUnO1xuY29uc3QgREVGQVVMVF9TSVpFID0gJ21lZGl1bSc7XG5cbmNvbnN0IFNpemUgPSB7XG4gIHNtYWxsOiB0aGVtZSA9PiAoe1xuICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgLSAxKSxcbiAgICBtaW5IZWlnaHQ6ICczMnB4JyxcbiAgICBtaW5XaWR0aDogJzY0cHgnXG4gIH0pLFxuICBtZWRpdW06ICh7XG4gICAgcGFkZGluZzogJzAgMTRweCcsXG4gICAgbWluSGVpZ2h0OiAnMzZweCcsXG4gICAgbWluV2lkdGg6ICc4OHB4J1xuICB9KSxcbiAgbGFyZ2U6ICh0aGVtZSkgPT4gKHtcbiAgICBwYWRkaW5nOiAnMCAyMXB4JyxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSArIDEpLFxuICAgIG1pbkhlaWdodDogJzQwcHgnLFxuICAgIG1pbldpZHRoOiAnMTEycHgnXG4gIH0pXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbHktYnV0dG9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjbGFzc2VzOiB7XG4gICAgcm9vdDogc3RyaW5nLFxuICAgIG91dGxpbmVkOiBzdHJpbmcsXG4gICAgY29udGVudDogc3RyaW5nXG4gIH07XG4gIHB1YmxpYyBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIC8vIHByaXZhdGUgX291dGxpbmVkQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBwcml2YXRlIF9zaXplOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nO1xuXG4gIC8vIEBJbnB1dCgpXG4gIC8vIHNldCBvdXRsaW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgLy8gICBjb25zdCBjbGFzc25hbWUgPSB0b0Jvb2xlYW4odmFsKSA9PT0gdHJ1ZSA/IHRoaXMuY2xhc3Nlcy5vdXRsaW5lZCA6ICcnO1xuICAvLyAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBjbGFzc25hbWUsIHRoaXMuX291dGxpbmVkQ2xhc3NOYW1lKTtcbiAgLy8gICB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSA9IGNsYXNzbmFtZTtcbiAgLy8gfVxuXG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlCdXR0b24tc2l6ZToke3RoaXMuc2l6ZX1gLFxuICAgICAgICBTaXplW3RoaXMuc2l6ZV0sXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9zaXplQ2xhc3NcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgLy8gQElucHV0KClcbiAgLy8gc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gIC8vICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAvLyAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAvLyAgICAgY29uc3Qga2V5ID0gdGhpcy5iZ0FuZENvbG9yICYmICh0aGlzLmJnQW5kQ29sb3IucmFpc2VkIHx8IHRoaXMuYmdBbmRDb2xvci5iZykgPyAncicgOiAnZic7XG4gIC8vICAgICB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGx5QnV0dG9uLWRpc2FibGVkOiR7a2V5fWAsIHRoaXMuZGlzYWJsZVN0eWxlLmJpbmQodGhpcyksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIHJpcHBsZVN0eWxlczogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJnQW5kQ29sb3I6IEx5Q29tbW9uXG4gICkge1xuICAgIHRoaXMuY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUJ1dHRvbicpO1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUoX25nWm9uZSwgcmlwcGxlU3R5bGVzLnN0eWxlc0RhdGEsIGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIC8vIHByaXZhdGUgZGlzYWJsZVN0eWxlKCkge1xuICAvLyAgIGxldCBzdHlsZSA9XG4gIC8vICAgYGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtgICtcbiAgLy8gICBgY3Vyc29yOiBkZWZhdWx0O2AgK1xuICAvLyAgIGBjb2xvcjogJHt0aGlzLnRoZW1lLmNvbmZpZy50ZXh0LmRpc2FibGVkfSAhaW1wb3J0YW50O2AgK1xuICAvLyAgIGBwb2ludGVyLWV2ZW50czogbm9uZTtgO1xuICAvLyAgIGlmICh0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSkge1xuICAvLyAgICAgc3R5bGUgKz0gYGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcuYnV0dG9uLmRpc2FibGVkfSAhaW1wb3J0YW50O2A7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBzdHlsZTtcbiAgLy8gfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIl19