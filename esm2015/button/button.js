/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, ViewChild, NgZone, ViewEncapsulation } from '@angular/core';
import { Platform, toBoolean, LyTheme2, LyBgColorAndRaised } from '@alyle/ui';
import { Ripple, LyRippleService } from '@alyle/ui/ripple';
import { LyButtonService } from './button.service';
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
export class LyButton {
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
    LyButton.prototype.buttonContent;
    /** @type {?} */
    LyButton.prototype.elementRef;
    /** @type {?} */
    LyButton.prototype.renderer;
    /** @type {?} */
    LyButton.prototype.theme;
    /** @type {?} */
    LyButton.prototype.rippleStyles;
    /** @type {?} */
    LyButton.prototype.buttonService;
    /** @type {?} */
    LyButton.prototype.bgAndColor;
}
export { ɵ0, ɵ1, ɵ2 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFFBQVEsRUFDUixrQkFBa0IsRUFDbkIsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsdUJBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQztXQUVyQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUc7SUFDbkUsbUJBQW1CO0lBQ25CLGtCQUFrQixDQUNuQixPQUNPLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FDZixpQkFBaUI7SUFDakIsYUFBYSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO0lBQy9ELG1CQUFtQjtJQUNuQixrQkFBa0IsQ0FDbkIsT0FDTSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQ2QsaUJBQWlCO0lBQ2pCLGFBQWEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUc7SUFDbkUsbUJBQW1CO0lBQ25CLG1CQUFtQixD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LENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckUsS0FBSyxJQUFJLHFCQUFxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sV0FBUSxRQUFRLGNBQWMsQ0FBQztTQUMvRTtRQUNELE9BQU8sS0FBSyxDQUFDOzs7Ozs7SUFHUCxnQkFBZ0IsQ0FBQyxHQUFXO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFHdkYsV0FBVztRQUNULElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdEM7S0FDRjs7O1lBN0hGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBakRDLFVBQVU7WUFHVixTQUFTO1lBVVQsUUFBUTtZQUdPLGVBQWU7WUFDdkIsZUFBZTtZQVp0QixNQUFNO1lBU04sa0JBQWtCLHVCQW9HZixRQUFROzs7eUJBeERWLEtBQUs7Z0NBTUwsS0FBSyxTQUFDLFdBQVc7cUJBUWpCLEtBQUs7OEJBa0JMLFNBQVMsU0FBQyxTQUFTO3lCQUVuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybSxcbiAgdG9Cb29sZWFuLFxuICBMeVRoZW1lMixcbiAgTHlCZ0NvbG9yQW5kUmFpc2VkXG59IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIEx5UmlwcGxlU2VydmljZSB9IGZyb20gJ0BhbHlsZS91aS9yaXBwbGUnO1xuaW1wb3J0IHsgTHlCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9idXR0b24uc2VydmljZSc7XG5jb25zdCBERUZBVUxUX1NJWkUgPSAnbWVkaXVtJztcbmNvbnN0IFNpemUgPSB7XG4gIHNtYWxsOiB0aGVtZSA9PiAoXG4gICAgYHBhZGRpbmc6MCA4cHg7YCArXG4gICAgYGZvbnQtc2l6ZToke3RoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgLSAxKX07YCArXG4gICAgYG1pbi1oZWlnaHQ6IDMycHg7YCArXG4gICAgYG1pbi13aWR0aDogNjRweDtgXG4gICksXG4gIG1lZGl1bTogdGhlbWUgPT4gKFxuICAgIGBwYWRkaW5nOjAgMTRweDtgICtcbiAgICBgZm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSl9O2AgK1xuICAgIGBtaW4taGVpZ2h0OiAzNnB4O2AgK1xuICAgIGBtaW4td2lkdGg6IDg4cHg7YFxuICApLFxuICBsYXJnZTogdGhlbWUgPT4gKFxuICAgIGBwYWRkaW5nOjAgMjFweDtgICtcbiAgICBgZm9udC1zaXplOiR7dGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSArIDEpfTtgICtcbiAgICBgbWluLWhlaWdodDogNDBweDtgICtcbiAgICBgbWluLXdpZHRoOiAxMTJweDtgXG4gICksXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbHktYnV0dG9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiAjY29udGVudD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMeUJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9yaXBwbGVTZW5zaXRpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWRDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3V0bGluZWRDbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcmlwcGxlQ29udGFpbmVyOiBSaXBwbGU7XG4gIHByaXZhdGUgX3NpemU6IHN0cmluZztcbiAgcHJpdmF0ZSBfc2l6ZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBvdXRsaW5lZCh2YWw6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjbGFzc25hbWUgPSB0b0Jvb2xlYW4odmFsKSA9PT0gdHJ1ZSA/IHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzLm91dGxpbmVkIDogJyc7XG4gICAgdGhpcy50aGVtZS51cGRhdGVDbGFzc05hbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIGNsYXNzbmFtZSwgdGhpcy5fb3V0bGluZWRDbGFzc05hbWUpO1xuICAgIHRoaXMuX291dGxpbmVkQ2xhc3NOYW1lID0gY2xhc3NuYW1lO1xuICB9XG4gIEBJbnB1dCgnc2Vuc2l0aXZlJylcbiAgZ2V0IHJpcHBsZVNlbnNpdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmlwcGxlU2Vuc2l0aXZlO1xuICB9XG4gIHNldCByaXBwbGVTZW5zaXRpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yaXBwbGVTZW5zaXRpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNpemUodmFsOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIC8vIGNvbnN0IG5ld0NsYXNzID0gdGhpcy5fY3JlYXRlU2l6ZUNsYXNzKHZhbCk7XG4gICAgICAvLyB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLnRoZW1lLnVwZGF0ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCBuZXdDbGFzcywgdGhpcy5fc2l6ZUNsYXNzKTtcbiAgICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgICB0aGlzLl9zaXplQ2xhc3MgPSB0aGlzLnRoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgay1idXR0b24tc2l6ZToke3RoaXMuc2l6ZX1gLFxuICAgICAgICBTaXplW3RoaXMuc2l6ZV0sXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLl9zaXplQ2xhc3NcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudCcpIGJ1dHRvbkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5iZ0FuZENvbG9yICYmICh0aGlzLmJnQW5kQ29sb3IucmFpc2VkIHx8IHRoaXMuYmdBbmRDb2xvci5iZykgPyAncicgOiAnZic7XG4gICAgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUgPSB0aGlzLnRoZW1lLnNldFVwU3R5bGUoYGJ0biR7a2V5fWAsIHsnJzogdGhpcy5kaXNhYmxlU3R5bGUuYmluZCh0aGlzKX0pO1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2Rpc2FibGVkQ2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fZGlzYWJsZWRDbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHRoZW1lOiBMeVRoZW1lMixcbiAgICBwdWJsaWMgcmlwcGxlU3R5bGVzOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBidXR0b25TZXJ2aWNlOiBMeUJ1dHRvblNlcnZpY2UsXG4gICAgX25nWm9uZTogTmdab25lLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYmdBbmRDb2xvcjogTHlCZ0NvbG9yQW5kUmFpc2VkXG4gICkge1xuICAgIGlmIChiZ0FuZENvbG9yKSB7XG4gICAgICBiZ0FuZENvbG9yLnNldEF1dG9Db250cmFzdCgpO1xuICAgIH1cbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuX3JpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUoX25nWm9uZSwgcmlwcGxlU3R5bGVzLnN0eWxlc0RhdGEsIGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5jdXJyZW50Q29uZmlnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1dHRvblNlcnZpY2UuY2xhc3Nlcy5yb290KTtcbiAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5zaXplID0gREVGQVVMVF9TSVpFO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb2N1c2VkKCkge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuYnV0dG9uU2VydmljZS5jbGFzc2VzO1xuICAgICAgKHRoaXMuYnV0dG9uQ29udGVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBjbGFzc2VzLmJ1dHRvbkNvbnRlbnRcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGRpc2FibGVTdHlsZSgpIHtcbiAgICBsZXQgc3R5bGUgPVxuICAgIGBib3gtc2hhZG93OiAwIDAgMCByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7YCArXG4gICAgYGN1cnNvcjogZGVmYXVsdDtgICtcbiAgICBgY29sb3I6ICR7dGhpcy50aGVtZS5jb25maWcudGV4dC5kaXNhYmxlZH0gIWltcG9ydGFudDtgICtcbiAgICBgcG9pbnRlci1ldmVudHM6IG5vbmU7YDtcbiAgICBpZiAodGhpcy5iZ0FuZENvbG9yICYmICh0aGlzLmJnQW5kQ29sb3IucmFpc2VkIHx8IHRoaXMuYmdBbmRDb2xvci5iZykpIHtcbiAgICAgIHN0eWxlICs9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMudGhlbWUuY29uZmlnLmJ1dHRvbi5kaXNhYmxlZH0gIWltcG9ydGFudDtgO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVTaXplQ2xhc3ModmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHRoaXMuX3NpemUgPSB2YWw7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUuc2V0VXBTdHlsZVNlY29uZGFyeShgay1idXR0b24tc2l6ZToke3RoaXMuc2l6ZX1gLCBTaXplW3RoaXMuc2l6ZV0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=