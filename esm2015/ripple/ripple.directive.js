/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ElementRef, Input, Directive, NgZone, Renderer2 } from '@angular/core';
import { toBoolean, Platform } from '@alyle/ui';
import { Ripple } from './ripple';
import { LyRippleService } from './ripple.service';
export class LyRipple {
    /**
     * @param {?} rippleService
     * @param {?} _elementRef
     * @param {?} _ngZone
     * @param {?} _renderer
     */
    constructor(rippleService, _elementRef, _ngZone, _renderer) {
        this.rippleService = rippleService;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        if (Platform.isBrowser) {
            this.rippleContainer = new Ripple(this._ngZone, this.rippleService.stylesData, this._elementRef.nativeElement);
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
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
            },] },
];
/** @nocollapse */
LyRipple.ctorParameters = () => [
    { type: LyRippleService },
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 }
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
    LyRipple.prototype._containerElement;
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
    LyRipple.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9yaXBwbGUvIiwic291cmNlcyI6WyJyaXBwbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUdOLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFnQixNQUFNLFVBQVUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNbkQsTUFBTTs7Ozs7OztJQWlCSixZQUNVLGVBQ0QsYUFDQyxTQUNBO1FBSEEsa0JBQWEsR0FBYixhQUFhO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXO1FBQ1YsWUFBTyxHQUFQLE9BQU87UUFDUCxjQUFTLEdBQVQsU0FBUztRQUVqQixJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEg7S0FDRjs7OztJQWxCRCxJQUFJLGNBQWM7UUFDaEIsT0FBTztZQUNMLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzFDLFFBQVEsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzFDLFNBQVMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQzVDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYztZQUMzQixvQkFBb0IsRUFBRSxJQUFJLENBQUMsNEJBQTRCO1NBQ3hELENBQUM7S0FDSDs7OztJQVlELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN0Qjs7OztJQUVPLGFBQWE7UUFDbkIsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNyRDs7Ozs7SUFHSCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckM7S0FDRjs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQUxRLGVBQWU7WUFadEIsVUFBVTtZQUdWLE1BQU07WUFHTixTQUFTOzs7K0JBZVIsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQ0FDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFJpcHBsZSwgUmlwcGxlQ29uZmlnIH0gZnJvbSAnLi9yaXBwbGUnO1xuaW1wb3J0IHsgTHlSaXBwbGVTZXJ2aWNlIH0gZnJvbSAnLi9yaXBwbGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVJpcHBsZV0sIFtseS1yaXBwbGVdJyxcbiAgZXhwb3J0QXM6ICdseVJpcHBsZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcmlwcGxlQ29udGFpbmVyOiBSaXBwbGU7XG4gIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgQElucHV0KCkgbHlSaXBwbGVDZW50ZXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbHlSaXBwbGVEaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbHlSaXBwbGVTZW5zaXRpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGx5UmlwcGxlUmFkaXVzOiAnY29udGFpbmVyU2l6ZScgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGx5UmlwcGxlUGVyY2VudGFnZVRvSW5jcmVhc2U6IG51bWJlcjtcbiAgZ2V0IGx5UmlwcGxlQ29uZmlnKCk6IFJpcHBsZUNvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNlbnRlcmVkOiB0b0Jvb2xlYW4odGhpcy5seVJpcHBsZUNlbnRlcmVkKSxcbiAgICAgIGRpc2FibGVkOiB0b0Jvb2xlYW4odGhpcy5seVJpcHBsZURpc2FibGVkKSxcbiAgICAgIHNlbnNpdGl2ZTogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVTZW5zaXRpdmUpLFxuICAgICAgcmFkaXVzOiB0aGlzLmx5UmlwcGxlUmFkaXVzLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IHRoaXMubHlSaXBwbGVQZXJjZW50YWdlVG9JbmNyZWFzZSxcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZSh0aGlzLl9uZ1pvbmUsIHRoaXMucmlwcGxlU2VydmljZS5zdHlsZXNEYXRhLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVJpcHBsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuX3VwZGF0ZVJpcHBsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUmlwcGxlKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyLnNldENvbmZpZyh0aGlzLmx5UmlwcGxlQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5yaXBwbGVDb250YWluZXIpIHtcbiAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=