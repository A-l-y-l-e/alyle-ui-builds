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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9yaXBwbGUvIiwic291cmNlcyI6WyJyaXBwbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLEtBQUssRUFDTCxTQUFTLEVBRVQsTUFBTSxFQU9OLFNBQVMsRUFLVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBZ0IsTUFBTSxVQUFVLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTW5ELE1BQU07Ozs7Ozs7SUFpQkosWUFDVSxlQUNELGFBQ0MsU0FDQTtRQUhBLGtCQUFhLEdBQWIsYUFBYTtRQUNkLGdCQUFXLEdBQVgsV0FBVztRQUNWLFlBQU8sR0FBUCxPQUFPO1FBQ1AsY0FBUyxHQUFULFNBQVM7UUFFakIsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hIO0tBQ0Y7Ozs7SUFsQkQsSUFBSSxjQUFjO1FBQ2hCLE9BQU87WUFDTCxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxQyxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxQyxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUM1QyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDM0Isb0JBQW9CLEVBQUUsSUFBSSxDQUFDLDRCQUE0QjtTQUN4RCxDQUFDO0tBQ0g7Ozs7SUFZRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFTyxhQUFhO1FBQ25CLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDckQ7Ozs7O0lBR0gsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JDO0tBQ0Y7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFMUSxlQUFlO1lBckJ0QixVQUFVO1lBS1YsTUFBTTtZQU9OLFNBQVM7OzsrQkFrQlIsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQ0FDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgTHlGb2N1c1N0YXRlLCBQbGF0Zm9ybSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIFJpcHBsZUNvbmZpZyB9IGZyb20gJy4vcmlwcGxlJztcbmltcG9ydCB7IEx5UmlwcGxlU2VydmljZSB9IGZyb20gJy4vcmlwcGxlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlSaXBwbGVdLCBbbHktcmlwcGxlXScsXG4gIGV4cG9ydEFzOiAnbHlSaXBwbGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHJpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIEBJbnB1dCgpIGx5UmlwcGxlQ2VudGVyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGx5UmlwcGxlRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGx5UmlwcGxlU2Vuc2l0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBseVJpcHBsZVJhZGl1czogJ2NvbnRhaW5lclNpemUnIHwgbnVtYmVyO1xuICBASW5wdXQoKSBseVJpcHBsZVBlcmNlbnRhZ2VUb0luY3JlYXNlOiBudW1iZXI7XG4gIGdldCBseVJpcHBsZUNvbmZpZygpOiBSaXBwbGVDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBjZW50ZXJlZDogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVDZW50ZXJlZCksXG4gICAgICBkaXNhYmxlZDogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVEaXNhYmxlZCksXG4gICAgICBzZW5zaXRpdmU6IHRvQm9vbGVhbih0aGlzLmx5UmlwcGxlU2Vuc2l0aXZlKSxcbiAgICAgIHJhZGl1czogdGhpcy5seVJpcHBsZVJhZGl1cyxcbiAgICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiB0aGlzLmx5UmlwcGxlUGVyY2VudGFnZVRvSW5jcmVhc2UsXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUodGhpcy5fbmdab25lLCB0aGlzLnJpcHBsZVNlcnZpY2Uuc3R5bGVzRGF0YSwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVSaXBwbGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLl91cGRhdGVSaXBwbGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVJpcHBsZSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lci5zZXRDb25maWcodGhpcy5seVJpcHBsZUNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucmlwcGxlQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIl19