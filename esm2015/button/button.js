/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, NgZone, ViewEncapsulation, ViewChild } from '@angular/core';
import { Platform, toBoolean, LyTheme2, LyCommon } from '@alyle/ui';
import { Ripple, LyRippleService } from '@alyle/ui/ripple';
import { styles } from './button.style';
/** @type {?} */
const DEFAULT_SIZE = 'medium';
/** @type {?} */
const DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @typedef {?} */
var LyButtonSize;
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
export class LyButton {
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
if (false) {
    /**
     * Style
     * @ignore
     * @type {?}
     */
    LyButton.prototype.classes;
    /** @type {?} */
    LyButton.prototype._rippleSensitive;
    /** @type {?} */
    LyButton.prototype._ripple;
    /** @type {?} */
    LyButton.prototype._size;
    /** @type {?} */
    LyButton.prototype._sizeClass;
    /** @type {?} */
    LyButton.prototype._disableRipple;
    /**
     * @ignore
     * @type {?}
     */
    LyButton.prototype._rippleContainer;
    /** @type {?} */
    LyButton.prototype._elementRef;
    /** @type {?} */
    LyButton.prototype._renderer;
    /** @type {?} */
    LyButton.prototype._theme;
    /** @type {?} */
    LyButton.prototype._ngZone;
    /** @type {?} */
    LyButton.prototype._rippleService;
}
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFHTixpQkFBaUIsRUFDakIsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFFBQVEsRUFDUixRQUFRLEVBQ1QsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBQ3hDLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQzs7QUFDOUIsTUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7O0FBQ3JDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7V0FNakIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsT0FBTyxFQUFFLE9BQU87SUFDaEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUM3RCxTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsTUFBTTtDQUNqQixDQUFDLE9BTUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakIsT0FBTyxFQUFFLFFBQVE7SUFDakIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUM3RCxTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsT0FBTztDQUNsQixD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LElBQUksQ0FBQyxhQUFhLEdBQUcsc0JBQXNCLENBQUM7U0FDN0M7S0FDRjs7OztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7SUFHekMsV0FBVztRQUNULElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1NBQ0Y7S0FDRjs7O1lBM0dGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQXhEQyxVQUFVO1lBR1YsU0FBUztZQVdULFFBQVE7WUFWUixNQUFNO1lBYVMsZUFBZTtZQUY5QixRQUFRLHVCQTJHTCxRQUFROzs7K0JBckRWLFNBQVMsU0FBQyxpQkFBaUI7OEJBRzNCLEtBQUssU0FBQyxXQUFXOzRCQVNqQixLQUFLO21CQWtCTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybSxcbiAgdG9Cb29sZWFuLFxuICBMeVRoZW1lMixcbiAgTHlDb21tb25cbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFJpcHBsZSwgTHlSaXBwbGVTZXJ2aWNlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL2J1dHRvbi5zdHlsZSc7XG5jb25zdCBERUZBVUxUX1NJWkUgPSAnbWVkaXVtJztcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbnR5cGUgTHlCdXR0b25TaXplID0gJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcblxuLyoqIEBpZ25vcmUgKi9cbmNvbnN0IFNpemU6IFJlY29yZDxMeUJ1dHRvblNpemUsIGFueT4gPSB7XG4gIHNtYWxsOiB0aGVtZSA9PiAoe1xuICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgLSAxKSxcbiAgICBtaW5IZWlnaHQ6ICczMnB4JyxcbiAgICBtaW5XaWR0aDogJzY0cHgnXG4gIH0pLFxuICBtZWRpdW06ICh7XG4gICAgcGFkZGluZzogJzAgMTRweCcsXG4gICAgbWluSGVpZ2h0OiAnMzZweCcsXG4gICAgbWluV2lkdGg6ICc4OHB4J1xuICB9KSxcbiAgbGFyZ2U6ICh0aGVtZSkgPT4gKHtcbiAgICBwYWRkaW5nOiAnMCAyMXB4JyxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSArIDEpLFxuICAgIG1pbkhlaWdodDogJzQwcHgnLFxuICAgIG1pbldpZHRoOiAnMTEycHgnXG4gIH0pXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbHktYnV0dG9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICA8ZGl2ICNyaXBwbGVDb250YWluZXIgW2NsYXNzTmFtZV09XCJfcmlwcGxlU2VydmljZS5jbGFzc2VzLmNvbnRhaW5lclwiPjwvZGl2PlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogU3R5bGVcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9yaXBwbGU6IFJpcHBsZTtcbiAgcHJpdmF0ZSBfc2l6ZTogTHlCdXR0b25TaXplO1xuICBwcml2YXRlIF9zaXplQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzYWJsZVJpcHBsZTogYm9vbGVhbiA9IG51bGw7XG4gIC8qKiBAaWdub3JlICovXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicpIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgQElucHV0KCdzZW5zaXRpdmUnKVxuICBnZXQgcmlwcGxlU2Vuc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGVTZW5zaXRpdmU7XG4gIH1cbiAgc2V0IHJpcHBsZVNlbnNpdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICAvKiogV2hldGhlciByaXBwbGVzIGFyZSBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVSaXBwbGUodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiB2YWwgIT09IHRoaXMuX2Rpc2FibGVSaXBwbGUpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2Rpc2FibGVSaXBwbGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAgIC8vIHJlbW92ZSBwcmV2aW91cyByaXBwbGUgaWYgZXhpc3RcbiAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICAgIGlmICghbmV3VmFsKSB7XG4gICAgICAgIC8vIGFkZCByaXBwbGVcbiAgICAgICAgY29uc3QgcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fcmlwcGxlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLl9yaXBwbGUgPSBuZXcgUmlwcGxlKHRoaXMuX3RoZW1lLmNvbmZpZywgdGhpcy5fbmdab25lLCB0aGlzLl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIHJpcHBsZUNvbnRhaW5lciwgdHJpZ2dlckVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZVJpcHBsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVJpcHBsZTtcbiAgfVxuICAvKiogQnV0dG9uIHNpemUgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNpemUoKTogTHlCdXR0b25TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuICBzZXQgc2l6ZSh2YWw6IEx5QnV0dG9uU2l6ZSkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5fc2l6ZSA9IHZhbDtcbiAgICAgIHRoaXMuX3NpemVDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlCdXR0b24tc2l6ZToke3RoaXMuc2l6ZX1gLFxuICAgICAgICBTaXplW3RoaXMuc2l6ZSBhcyBhbnldLFxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuX3NpemVDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBiZ0FuZENvbG9yOiBMeUNvbW1vblxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5zaXplID0gREVGQVVMVF9TSVpFO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0aGlzLl9yaXBwbGUpIHtcbiAgICAgICAgdGhpcy5fcmlwcGxlLnJlbW92ZUV2ZW50cygpO1xuICAgICAgICB0aGlzLl9yaXBwbGUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=