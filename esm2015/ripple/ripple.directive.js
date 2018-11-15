/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ElementRef, Input, Directive, NgZone, } from '@angular/core';
import { toBoolean, Platform, LyTheme2 } from '@alyle/ui';
import { Ripple } from './ripple';
import { LyRippleService } from './ripple.service';
export class LyRipple {
    /**
     * @param {?} rippleService
     * @param {?} _elementRef
     * @param {?} _ngZone
     * @param {?} _theme
     */
    constructor(rippleService, _elementRef, _ngZone, _theme) {
        this.rippleService = rippleService;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._theme = _theme;
        if (Platform.isBrowser) {
            this.rippleContainer = new Ripple(this._theme.config, this._ngZone, this.rippleService.classes, this._elementRef.nativeElement);
        }
    }
    /**
     * @return {?}
     */
    get lyRippleConfig() {
        return {
            centered: toBoolean(this.lyRippleCentered),
            disabled: toBoolean(this.lyRippleDisabled),
            sensitive: toBoolean(this.lyRippleSensitive),
            radius: this.lyRippleRadius,
            percentageToIncrease: this.lyRipplePercentageToIncrease,
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateRipple();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._updateRipple();
    }
    /**
     * @return {?}
     */
    _updateRipple() {
        if (Platform.isBrowser) {
            this.rippleContainer.setConfig(this.lyRippleConfig);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.rippleContainer) {
            this.rippleContainer.removeEvents();
        }
    }
}
LyRipple.decorators = [
    { type: Directive, args: [{
                selector: '[lyRipple], [ly-ripple]',
                exportAs: 'lyRipple'
            },] }
];
/** @nocollapse */
LyRipple.ctorParameters = () => [
    { type: LyRippleService },
    { type: ElementRef },
    { type: NgZone },
    { type: LyTheme2 }
];
LyRipple.propDecorators = {
    lyRippleCentered: [{ type: Input }],
    lyRippleDisabled: [{ type: Input }],
    lyRippleSensitive: [{ type: Input }],
    lyRippleRadius: [{ type: Input }],
    lyRipplePercentageToIncrease: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9yaXBwbGUvIiwic291cmNlcyI6WyJyaXBwbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxHQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFnQixNQUFNLFVBQVUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNbkQsTUFBTSxPQUFPLFFBQVE7Ozs7Ozs7SUFnQm5CLFlBQ1UsYUFBOEIsRUFDL0IsV0FBdUIsRUFDdEIsT0FBZSxFQUNmLE1BQWdCO1FBSGhCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUMvQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUV4QixJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakk7SUFDSCxDQUFDOzs7O0lBbEJELElBQUksY0FBYztRQUNoQixPQUFPO1lBQ0wsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDMUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDMUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDNUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQzNCLG9CQUFvQixFQUFFLElBQUksQ0FBQyw0QkFBNEI7U0FDeEQsQ0FBQztJQUNKLENBQUM7Ozs7SUFZRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFTyxhQUFhO1FBQ25CLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQUxRLGVBQWU7WUFWdEIsVUFBVTtZQUdWLE1BQU07WUFLc0IsUUFBUTs7OytCQVVuQyxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzJDQUNMLEtBQUs7Ozs7SUFMTixtQ0FBd0I7O0lBQ3hCLG9DQUFtQzs7SUFDbkMsb0NBQW1DOztJQUNuQyxxQ0FBb0M7O0lBQ3BDLGtDQUFrRDs7SUFDbEQsZ0RBQThDOztJQVc1QyxpQ0FBc0M7O0lBQ3RDLCtCQUE4Qjs7SUFDOUIsMkJBQXVCOztJQUN2QiwwQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCBQbGF0Zm9ybSwgTHlUaGVtZTIgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgUmlwcGxlLCBSaXBwbGVDb25maWcgfSBmcm9tICcuL3JpcHBsZSc7XG5pbXBvcnQgeyBMeVJpcHBsZVNlcnZpY2UgfSBmcm9tICcuL3JpcHBsZS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5UmlwcGxlXSwgW2x5LXJpcHBsZV0nLFxuICBleHBvcnRBczogJ2x5UmlwcGxlJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVJpcHBsZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICByaXBwbGVDb250YWluZXI6IFJpcHBsZTtcbiAgQElucHV0KCkgbHlSaXBwbGVDZW50ZXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbHlSaXBwbGVEaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbHlSaXBwbGVTZW5zaXRpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGx5UmlwcGxlUmFkaXVzOiAnY29udGFpbmVyU2l6ZScgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGx5UmlwcGxlUGVyY2VudGFnZVRvSW5jcmVhc2U6IG51bWJlcjtcbiAgZ2V0IGx5UmlwcGxlQ29uZmlnKCk6IFJpcHBsZUNvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNlbnRlcmVkOiB0b0Jvb2xlYW4odGhpcy5seVJpcHBsZUNlbnRlcmVkKSxcbiAgICAgIGRpc2FibGVkOiB0b0Jvb2xlYW4odGhpcy5seVJpcHBsZURpc2FibGVkKSxcbiAgICAgIHNlbnNpdGl2ZTogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVTZW5zaXRpdmUpLFxuICAgICAgcmFkaXVzOiB0aGlzLmx5UmlwcGxlUmFkaXVzLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IHRoaXMubHlSaXBwbGVQZXJjZW50YWdlVG9JbmNyZWFzZSxcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTJcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yaXBwbGVDb250YWluZXIgPSBuZXcgUmlwcGxlKHRoaXMuX3RoZW1lLmNvbmZpZywgdGhpcy5fbmdab25lLCB0aGlzLnJpcHBsZVNlcnZpY2UuY2xhc3NlcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVSaXBwbGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuX3VwZGF0ZVJpcHBsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUmlwcGxlKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyLnNldENvbmZpZyh0aGlzLmx5UmlwcGxlQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5yaXBwbGVDb250YWluZXIpIHtcbiAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=