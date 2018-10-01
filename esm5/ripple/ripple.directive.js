/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ElementRef, Input, Directive, NgZone, } from '@angular/core';
import { toBoolean, Platform, LyTheme2 } from '@alyle/ui';
import { Ripple } from './ripple';
import { LyRippleService } from './ripple.service';
var LyRipple = /** @class */ (function () {
    function LyRipple(rippleService, _elementRef, _ngZone, _theme) {
        this.rippleService = rippleService;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._theme = _theme;
        if (Platform.isBrowser) {
            this.rippleContainer = new Ripple(this._theme.config, this._ngZone, this.rippleService.classes, this._elementRef.nativeElement);
        }
    }
    Object.defineProperty(LyRipple.prototype, "lyRippleConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                centered: toBoolean(this.lyRippleCentered),
                disabled: toBoolean(this.lyRippleDisabled),
                sensitive: toBoolean(this.lyRippleSensitive),
                radius: this.lyRippleRadius,
                percentageToIncrease: this.lyRipplePercentageToIncrease,
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyRipple.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._updateRipple();
    };
    /**
     * @return {?}
     */
    LyRipple.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._updateRipple();
    };
    /**
     * @return {?}
     */
    LyRipple.prototype._updateRipple = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
            this.rippleContainer.setConfig(this.lyRippleConfig);
        }
    };
    /**
     * @return {?}
     */
    LyRipple.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.rippleContainer) {
            this.rippleContainer.removeEvents();
        }
    };
    LyRipple.decorators = [
        { type: Directive, args: [{
                    selector: '[lyRipple], [ly-ripple]',
                    exportAs: 'lyRipple'
                },] },
    ];
    /** @nocollapse */
    LyRipple.ctorParameters = function () { return [
        { type: LyRippleService },
        { type: ElementRef },
        { type: NgZone },
        { type: LyTheme2 }
    ]; };
    LyRipple.propDecorators = {
        lyRippleCentered: [{ type: Input }],
        lyRippleDisabled: [{ type: Input }],
        lyRippleSensitive: [{ type: Input }],
        lyRippleRadius: [{ type: Input }],
        lyRipplePercentageToIncrease: [{ type: Input }]
    };
    return LyRipple;
}());
export { LyRipple };
if (false) {
    /** @type {?} */
    LyRipple.prototype.rippleContainer;
    /** @type {?} */
    LyRipple.prototype.lyRippleCentered;
    /** @type {?} */
    LyRipple.prototype.lyRippleDisabled;
    /** @type {?} */
    LyRipple.prototype.lyRippleSensitive;
    /** @type {?} */
    LyRipple.prototype.lyRippleRadius;
    /** @type {?} */
    LyRipple.prototype.lyRipplePercentageToIncrease;
    /** @type {?} */
    LyRipple.prototype.rippleService;
    /** @type {?} */
    LyRipple.prototype._elementRef;
    /** @type {?} */
    LyRipple.prototype._ngZone;
    /** @type {?} */
    LyRipple.prototype._theme;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9yaXBwbGUvIiwic291cmNlcyI6WyJyaXBwbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxHQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFnQixNQUFNLFVBQVUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBc0JqRCxrQkFDVSxlQUNELGFBQ0MsU0FDQTtRQUhBLGtCQUFhLEdBQWIsYUFBYTtRQUNkLGdCQUFXLEdBQVgsV0FBVztRQUNWLFlBQU8sR0FBUCxPQUFPO1FBQ1AsV0FBTSxHQUFOLE1BQU07UUFFZCxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakk7S0FDRjtJQWxCRCxzQkFBSSxvQ0FBYzs7OztRQUFsQjtZQUNFLE9BQU87Z0JBQ0wsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzFDLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2dCQUMxQyxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUMzQixvQkFBb0IsRUFBRSxJQUFJLENBQUMsNEJBQTRCO2FBQ3hELENBQUM7U0FDSDs7O09BQUE7Ozs7SUFZRCwyQkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCw4QkFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFTyxnQ0FBYTs7OztRQUNuQixJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3JEOzs7OztJQUdILDhCQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JDO0tBQ0Y7O2dCQWpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQUxRLGVBQWU7Z0JBVnRCLFVBQVU7Z0JBR1YsTUFBTTtnQkFLc0IsUUFBUTs7O21DQVVuQyxLQUFLO21DQUNMLEtBQUs7b0NBQ0wsS0FBSztpQ0FDTCxLQUFLOytDQUNMLEtBQUs7O21CQXZCUjs7U0FpQmEsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIFBsYXRmb3JtLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIFJpcHBsZUNvbmZpZyB9IGZyb20gJy4vcmlwcGxlJztcbmltcG9ydCB7IEx5UmlwcGxlU2VydmljZSB9IGZyb20gJy4vcmlwcGxlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlSaXBwbGVdLCBbbHktcmlwcGxlXScsXG4gIGV4cG9ydEFzOiAnbHlSaXBwbGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHJpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBASW5wdXQoKSBseVJpcHBsZUNlbnRlcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBseVJpcHBsZURpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBseVJpcHBsZVNlbnNpdGl2ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbHlSaXBwbGVSYWRpdXM6ICdjb250YWluZXJTaXplJyB8IG51bWJlcjtcbiAgQElucHV0KCkgbHlSaXBwbGVQZXJjZW50YWdlVG9JbmNyZWFzZTogbnVtYmVyO1xuICBnZXQgbHlSaXBwbGVDb25maWcoKTogUmlwcGxlQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2VudGVyZWQ6IHRvQm9vbGVhbih0aGlzLmx5UmlwcGxlQ2VudGVyZWQpLFxuICAgICAgZGlzYWJsZWQ6IHRvQm9vbGVhbih0aGlzLmx5UmlwcGxlRGlzYWJsZWQpLFxuICAgICAgc2Vuc2l0aXZlOiB0b0Jvb2xlYW4odGhpcy5seVJpcHBsZVNlbnNpdGl2ZSksXG4gICAgICByYWRpdXM6IHRoaXMubHlSaXBwbGVSYWRpdXMsXG4gICAgICBwZXJjZW50YWdlVG9JbmNyZWFzZTogdGhpcy5seVJpcHBsZVBlcmNlbnRhZ2VUb0luY3JlYXNlLFxuICAgIH07XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUodGhpcy5fdGhlbWUuY29uZmlnLCB0aGlzLl9uZ1pvbmUsIHRoaXMucmlwcGxlU2VydmljZS5jbGFzc2VzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVJpcHBsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlUmlwcGxlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVSaXBwbGUoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yaXBwbGVDb250YWluZXIuc2V0Q29uZmlnKHRoaXMubHlSaXBwbGVDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnJpcHBsZUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yaXBwbGVDb250YWluZXIucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==