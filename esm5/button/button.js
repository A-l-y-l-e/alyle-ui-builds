/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Optional, Renderer2, NgZone, ViewEncapsulation, ViewChild } from '@angular/core';
import { Platform, toBoolean, LyTheme2, LyCommon } from '@alyle/ui';
import { Ripple, LyRippleService } from '@alyle/ui/ripple';
import { styles } from './button.style';
/** @type {?} */
var DEFAULT_SIZE = 'medium';
/** @type {?} */
var DEFAULT_DISABLE_RIPPLE = false;
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @typedef {?} */
var LyButtonSize;
var ɵ0 = function (theme) { return ({
    padding: '0 8px',
    fontSize: theme.pxToRem(theme.typography.button.fontSize - 1),
    minHeight: '32px',
    minWidth: '64px'
}); }, ɵ1 = function (theme) { return ({
    padding: '0 21px',
    fontSize: theme.pxToRem(theme.typography.button.fontSize + 1),
    minHeight: '40px',
    minWidth: '112px'
}); };
/** *
 * @ignore
  @type {?} */
var Size = {
    small: ɵ0,
    medium: ({
        padding: '0 14px',
        minHeight: '36px',
        minWidth: '88px'
    }),
    large: ɵ1
};
var LyButton = /** @class */ (function () {
    function LyButton(_elementRef, _renderer, _theme, _ngZone, _rippleService, bgAndColor) {
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
    Object.defineProperty(LyButton.prototype, "rippleSensitive", {
        /** @ignore */
        get: /**
         * @ignore
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
    Object.defineProperty(LyButton.prototype, "disableRipple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disableRipple;
        },
        /** Whether ripples are disabled. */
        set: /**
         * Whether ripples are disabled.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (Platform.isBrowser && val !== this._disableRipple) {
                /** @type {?} */
                var newVal = this._disableRipple = toBoolean(val);
                // remove previous ripple if exist
                this.ngOnDestroy();
                if (!newVal) {
                    /** @type {?} */
                    var rippleContainer = this._rippleContainer.nativeElement;
                    /** @type {?} */
                    var triggerElement = this._elementRef.nativeElement;
                    this._ripple = new Ripple(this._theme.config, this._ngZone, this._rippleService.classes, rippleContainer, triggerElement);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LyButton.prototype, "size", {
        /** Button size */
        get: /**
         * Button size
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
                this._sizeClass = this._theme.addStyle("lyButton-size:" + this.size, Size[/** @type {?} */ (this.size)], this._elementRef.nativeElement, this._sizeClass, STYLE_PRIORITY);
            }
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
        this._renderer.addClass(this._elementRef.nativeElement, this.classes.root);
        if (!this.size) {
            this.size = DEFAULT_SIZE;
        }
    };
    /**
     * @return {?}
     */
    LyButton.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.disableRipple === null) {
            this.disableRipple = DEFAULT_DISABLE_RIPPLE;
        }
    };
    /**
     * @return {?}
     */
    LyButton.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    LyButton.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
            if (this._ripple) {
                this._ripple.removeEvents();
                this._ripple = null;
            }
        }
    };
    LyButton.decorators = [
        { type: Component, args: [{
                    selector: '[ly-button]',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n  <span [className]=\"classes.content\">\n    <ng-content></ng-content>\n  </span>\n  <div #rippleContainer [className]=\"_rippleService.classes.container\"></div>\n  ",
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    LyButton.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyTheme2 },
        { type: NgZone },
        { type: LyRippleService },
        { type: LyCommon, decorators: [{ type: Optional }] }
    ]; };
    LyButton.propDecorators = {
        _rippleContainer: [{ type: ViewChild, args: ['rippleContainer',] }],
        rippleSensitive: [{ type: Input, args: ['sensitive',] }],
        disableRipple: [{ type: Input }],
        size: [{ type: Input }]
    };
    return LyButton;
}());
export { LyButton };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2J1dHRvbi8iLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULE1BQU0sRUFHTixpQkFBaUIsRUFDakIsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFFBQVEsRUFDUixRQUFRLEVBQ1QsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBQ3hDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQzs7QUFDOUIsSUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7O0FBQ3JDLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7U0FNakIsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDO0lBQ2YsT0FBTyxFQUFFLE9BQU87SUFDaEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUM3RCxTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsTUFBTTtDQUNqQixDQUFDLEVBTGMsQ0FLZCxPQU1LLFVBQUMsS0FBSyxJQUFLLE9BQUEsQ0FBQztJQUNqQixPQUFPLEVBQUUsUUFBUTtJQUNqQixRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzdELFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxPQUFPO0NB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RCxrQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsc0JBQXNCLENBQUM7U0FDN0M7S0FDRjs7OztJQUVNLHdCQUFLOzs7O1FBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Ozs7O0lBR3pDLDhCQUFXOzs7SUFBWDtRQUNFLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1NBQ0Y7S0FDRjs7Z0JBM0dGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSwyS0FLVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBeERDLFVBQVU7Z0JBR1YsU0FBUztnQkFXVCxRQUFRO2dCQVZSLE1BQU07Z0JBYVMsZUFBZTtnQkFGOUIsUUFBUSx1QkEyR0wsUUFBUTs7O21DQXJEVixTQUFTLFNBQUMsaUJBQWlCO2tDQUczQixLQUFLLFNBQUMsV0FBVztnQ0FTakIsS0FBSzt1QkFrQkwsS0FBSzs7bUJBdEdSOztTQTREYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybSxcbiAgdG9Cb29sZWFuLFxuICBMeVRoZW1lMixcbiAgTHlDb21tb25cbn0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFJpcHBsZSwgTHlSaXBwbGVTZXJ2aWNlIH0gZnJvbSAnQGFseWxlL3VpL3JpcHBsZSc7XG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICcuL2J1dHRvbi5zdHlsZSc7XG5jb25zdCBERUZBVUxUX1NJWkUgPSAnbWVkaXVtJztcbmNvbnN0IERFRkFVTFRfRElTQUJMRV9SSVBQTEUgPSBmYWxzZTtcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5cbnR5cGUgTHlCdXR0b25TaXplID0gJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcblxuLyoqIEBpZ25vcmUgKi9cbmNvbnN0IFNpemU6IFJlY29yZDxMeUJ1dHRvblNpemUsIGFueT4gPSB7XG4gIHNtYWxsOiB0aGVtZSA9PiAoe1xuICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgZm9udFNpemU6IHRoZW1lLnB4VG9SZW0odGhlbWUudHlwb2dyYXBoeS5idXR0b24uZm9udFNpemUgLSAxKSxcbiAgICBtaW5IZWlnaHQ6ICczMnB4JyxcbiAgICBtaW5XaWR0aDogJzY0cHgnXG4gIH0pLFxuICBtZWRpdW06ICh7XG4gICAgcGFkZGluZzogJzAgMTRweCcsXG4gICAgbWluSGVpZ2h0OiAnMzZweCcsXG4gICAgbWluV2lkdGg6ICc4OHB4J1xuICB9KSxcbiAgbGFyZ2U6ICh0aGVtZSkgPT4gKHtcbiAgICBwYWRkaW5nOiAnMCAyMXB4JyxcbiAgICBmb250U2l6ZTogdGhlbWUucHhUb1JlbSh0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbi5mb250U2l6ZSArIDEpLFxuICAgIG1pbkhlaWdodDogJzQwcHgnLFxuICAgIG1pbldpZHRoOiAnMTEycHgnXG4gIH0pXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbHktYnV0dG9uXScsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiBbY2xhc3NOYW1lXT1cImNsYXNzZXMuY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICA8ZGl2ICNyaXBwbGVDb250YWluZXIgW2NsYXNzTmFtZV09XCJfcmlwcGxlU2VydmljZS5jbGFzc2VzLmNvbnRhaW5lclwiPjwvZGl2PlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEx5QnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogU3R5bGVcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3JpcHBsZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9yaXBwbGU6IFJpcHBsZTtcbiAgcHJpdmF0ZSBfc2l6ZTogTHlCdXR0b25TaXplO1xuICBwcml2YXRlIF9zaXplQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzYWJsZVJpcHBsZTogYm9vbGVhbiA9IG51bGw7XG4gIC8qKiBAaWdub3JlICovXG4gIEBWaWV3Q2hpbGQoJ3JpcHBsZUNvbnRhaW5lcicpIF9yaXBwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgQElucHV0KCdzZW5zaXRpdmUnKVxuICBnZXQgcmlwcGxlU2Vuc2l0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGVTZW5zaXRpdmU7XG4gIH1cbiAgc2V0IHJpcHBsZVNlbnNpdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JpcHBsZVNlbnNpdGl2ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICAvKiogV2hldGhlciByaXBwbGVzIGFyZSBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVSaXBwbGUodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3NlciAmJiB2YWwgIT09IHRoaXMuX2Rpc2FibGVSaXBwbGUpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMuX2Rpc2FibGVSaXBwbGUgPSB0b0Jvb2xlYW4odmFsKTtcbiAgICAgIC8vIHJlbW92ZSBwcmV2aW91cyByaXBwbGUgaWYgZXhpc3RcbiAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcbiAgICAgIGlmICghbmV3VmFsKSB7XG4gICAgICAgIC8vIGFkZCByaXBwbGVcbiAgICAgICAgY29uc3QgcmlwcGxlQ29udGFpbmVyID0gdGhpcy5fcmlwcGxlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRyaWdnZXJFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLl9yaXBwbGUgPSBuZXcgUmlwcGxlKHRoaXMuX3RoZW1lLmNvbmZpZywgdGhpcy5fbmdab25lLCB0aGlzLl9yaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIHJpcHBsZUNvbnRhaW5lciwgdHJpZ2dlckVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXQgZGlzYWJsZVJpcHBsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZVJpcHBsZTtcbiAgfVxuICAvKiogQnV0dG9uIHNpemUgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNpemUoKTogTHlCdXR0b25TaXplIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuICBzZXQgc2l6ZSh2YWw6IEx5QnV0dG9uU2l6ZSkge1xuICAgIGlmICh2YWwgIT09IHRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5fc2l6ZSA9IHZhbDtcbiAgICAgIHRoaXMuX3NpemVDbGFzcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlKFxuICAgICAgICBgbHlCdXR0b24tc2l6ZToke3RoaXMuc2l6ZX1gLFxuICAgICAgICBTaXplW3RoaXMuc2l6ZSBhcyBhbnldLFxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMuX3NpemVDbGFzcyxcbiAgICAgICAgU1RZTEVfUFJJT1JJVFlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgX3JpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBiZ0FuZENvbG9yOiBMeUNvbW1vblxuICApIHtcbiAgICBpZiAoYmdBbmRDb2xvcikge1xuICAgICAgYmdBbmRDb2xvci5zZXRBdXRvQ29udHJhc3QoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY2xhc3Nlcy5yb290KTtcbiAgICBpZiAoIXRoaXMuc2l6ZSkge1xuICAgICAgdGhpcy5zaXplID0gREVGQVVMVF9TSVpFO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlUmlwcGxlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRpc2FibGVSaXBwbGUgPSBERUZBVUxUX0RJU0FCTEVfUklQUExFO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0aGlzLl9yaXBwbGUpIHtcbiAgICAgICAgdGhpcy5fcmlwcGxlLnJlbW92ZUV2ZW50cygpO1xuICAgICAgICB0aGlzLl9yaXBwbGUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=