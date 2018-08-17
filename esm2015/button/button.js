/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, NgZone, ViewEncapsulation } from '@angular/core';
import { Platform, toBoolean, LyTheme2, LyCommon } from '@alyle/ui';
import { Ripple, LyRippleService } from '@alyle/ui/ripple';
import { styles } from './button.style';
const /** @type {?} */ DEFAULT_SIZE = 'medium';
const ɵ0 = theme => (`padding:0 8px;` +
    `font-size:${theme.pxToRem(theme.typography.button.fontSize - 1)};` +
    `min-height: 32px;` +
    `min-width: 64px;`), ɵ1 = theme => (`padding:0 14px;` +
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
export class LyButton {
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
        this._disabled = false;
        this._rippleSensitive = false;
        this.classes = this.theme.addStyleSheet(styles, 'lyButton');
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
        const /** @type {?} */ classname = toBoolean(val) === true ? this.classes.outlined : '';
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
        this._disabled = toBoolean(value);
        if (this._disabled) {
            const /** @type {?} */ key = this.bgAndColor && (this.bgAndColor.raised || this.bgAndColor.bg) ? 'r' : 'f';
            this._disabledClassName = this.theme.addStyle(`btn${key}`, this.disableStyle.bind(this), this.elementRef.nativeElement, this._disabledClassName);
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
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LyTheme2, },
    { type: LyRippleService, },
    { type: NgZone, },
    { type: LyCommon, decorators: [{ type: Optional },] },
];
LyButton.propDecorators = {
    "outlined": [{ type: Input },],
    "rippleSensitive": [{ type: Input, args: ['sensitive',] },],
    "size": [{ type: Input },],
    "disabled": [{ type: Input },],
};
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
    LyButton.prototype._disabledClassName;
    /** @type {?} */
    LyButton.prototype._outlinedClassName;
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
export { ɵ0, ɵ1, ɵ2 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUVULE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLFFBQVEsRUFDVCxNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4Qyx1QkFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDO1dBRXJCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FDZCxnQkFBZ0I7SUFDaEIsYUFBYSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRztJQUNuRSxtQkFBbUI7SUFDbkIsa0JBQWtCLENBQ25CLE9BQ08sS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCLENBQ25CLE9BQ00sS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUNkLGlCQUFpQjtJQUNqQixhQUFhLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHO0lBQ25FLG1CQUFtQjtJQUNuQixtQkFBbUIsQ0FDcEI7QUFqQkgsdUJBQU0sSUFBSSxHQUFHO0lBQ1gsS0FBSyxJQUtKO0lBQ0QsTUFBTSxJQUlMO0lBQ0QsS0FBSyxJQUtKO0NBQ0YsQ0FBQztBQVlGLE1B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O1lBR1YsU0FBUztZQVVULFFBQVE7WUFHTyxlQUFlO1lBWDlCLE1BQU07WUFTTixRQUFRLHVCQW9HTCxRQUFROzs7eUJBbkRWLEtBQUs7Z0NBT0wsS0FBSyxTQUFDLFdBQVc7cUJBUWpCLEtBQUs7eUJBZ0JMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFBsYXRmb3JtLFxuICB0b0Jvb2xlYW4sXG4gIEx5VGhlbWUyLFxuICBMeUNvbW1vblxufSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgUmlwcGxlLCBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vYnV0dG9uLnN0eWxlJztcbmNvbnN0IERFRkFVTFRfU0laRSA9ICdtZWRpdW0nO1xuY29uc3QgU2l6ZSA9IHtcbiAgc21hbGw6IHRoZW1lID0+IChcbiAgICBgcGFkZGluZzowIDhweDtgICtcbiAgICBgZm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSAtIDEpfTtgICtcbiAgICBgbWluLWhlaWdodDogMzJweDtgICtcbiAgICBgbWluLXdpZHRoOiA2NHB4O2BcbiAgKSxcbiAgbWVkaXVtOiB0aGVtZSA9PiAoXG4gICAgYHBhZGRpbmc6MCAxNHB4O2AgK1xuICAgIGBtaW4taGVpZ2h0OiAzNnB4O2AgK1xuICAgIGBtaW4td2lkdGg6IDg4cHg7YFxuICApLFxuICBsYXJnZTogdGhlbWUgPT4gKFxuICAgIGBwYWRkaW5nOjAgMjFweDtgICtcbiAgICBgZm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSArIDEpfTtgICtcbiAgICBgbWluLWhlaWdodDogNDBweDtgICtcbiAgICBgbWluLXdpZHRoOiAxMTJweDtgXG4gICksXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbHktYnV0dG9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjbGFzc2VzOiB7XG4gICAgcm9vdDogc3RyaW5nLFxuICAgIG91dGxpbmVkOiBzdHJpbmcsXG4gICAgY29udGVudDogc3RyaW5nXG4gIH07XG4gIHB1YmxpYyBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmlwcGxlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX291dGxpbmVkQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBwcml2YXRlIF9zaXplOiBzdHJpbmc7XG4gIHByaXZhdGUgX3NpemVDbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBvdXRsaW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0b0Jvb2xlYW4odmFsKSA9PT0gdHJ1ZSA/IHRoaXMuY2xhc3Nlcy5vdXRsaW5lZCA6ICcnO1xuICAgIHRoaXMudGhlbWUudXBkYXRlQ2xhc3NOYW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBjbGFzc25hbWUsIHRoaXMuX291dGxpbmVkQ2xhc3NOYW1lKTtcbiAgICB0aGlzLl9vdXRsaW5lZENsYXNzTmFtZSA9IGNsYXNzbmFtZTtcbiAgfVxuXG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgay1idXR0b24tc2l6ZToke3RoaXMuc2l6ZX1gLFxuICAgICAgICBTaXplW3RoaXMuc2l6ZV0sXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9zaXplQ2xhc3NcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5iZ0FuZENvbG9yICYmICh0aGlzLmJnQW5kQ29sb3IucmFpc2VkIHx8IHRoaXMuYmdBbmRDb2xvci5iZykgPyAncicgOiAnZic7XG4gICAgICB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSA9IHRoaXMudGhlbWUuYWRkU3R5bGUoYGJ0biR7a2V5fWAsIHRoaXMuZGlzYWJsZVN0eWxlLmJpbmQodGhpcyksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9kaXNhYmxlZENsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTIsXG4gICAgcHVibGljIHJpcHBsZVN0eWxlczogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGJnQW5kQ29sb3I6IEx5Q29tbW9uXG4gICkge1xuICAgIHRoaXMuY2xhc3NlcyA9IHRoaXMudGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsICdseUJ1dHRvbicpO1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUoX25nWm9uZSwgcmlwcGxlU3R5bGVzLnN0eWxlc0RhdGEsIGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmNsYXNzZXMucm9vdCk7XG4gICAgaWYgKCF0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IERFRkFVTFRfU0laRTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXMoKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZGlzYWJsZVN0eWxlKCkge1xuICAgIGxldCBzdHlsZSA9XG4gICAgYGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtgICtcbiAgICBgY3Vyc29yOiBkZWZhdWx0O2AgK1xuICAgIGBjb2xvcjogJHt0aGlzLnRoZW1lLmNvbmZpZy50ZXh0LmRpc2FibGVkfSAhaW1wb3J0YW50O2AgK1xuICAgIGBwb2ludGVyLWV2ZW50czogbm9uZTtgO1xuICAgIGlmICh0aGlzLmJnQW5kQ29sb3IgJiYgKHRoaXMuYmdBbmRDb2xvci5yYWlzZWQgfHwgdGhpcy5iZ0FuZENvbG9yLmJnKSkge1xuICAgICAgc3R5bGUgKz0gYGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcuYnV0dG9uLmRpc2FibGVkfSAhaW1wb3J0YW50O2A7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIl19