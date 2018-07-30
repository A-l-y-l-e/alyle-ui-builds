/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ElementRef, Input, Directive, NgZone, Renderer2 } from '@angular/core';
import { toBoolean, Platform } from '@alyle/ui';
import { Ripple } from './ripple';
import { LyRippleService } from './ripple.service';
var LyRipple = /** @class */ (function () {
    function LyRipple(rippleService, _elementRef, _ngZone, _renderer) {
        this.rippleService = rippleService;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        if (Platform.isBrowser) {
            this.rippleContainer = new Ripple(this._ngZone, this.rippleService.stylesData, this._elementRef.nativeElement);
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
     * @param {?} changes
     * @return {?}
     */
    LyRipple.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
        { type: LyRippleService, },
        { type: ElementRef, },
        { type: NgZone, },
        { type: Renderer2, },
    ]; };
    LyRipple.propDecorators = {
        "lyRippleCentered": [{ type: Input },],
        "lyRippleDisabled": [{ type: Input },],
        "lyRippleSensitive": [{ type: Input },],
        "lyRippleRadius": [{ type: Input },],
        "lyRipplePercentageToIncrease": [{ type: Input },],
    };
    return LyRipple;
}());
export { LyRipple };
function LyRipple_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyRipple.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyRipple.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LyRipple.propDecorators;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9yaXBwbGUvIiwic291cmNlcyI6WyJyaXBwbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLEtBQUssRUFDTCxTQUFTLEVBRVQsTUFBTSxFQU9OLFNBQVMsRUFLVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBZ0IsTUFBTSxVQUFVLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQXVCakQsa0JBQ1UsZUFDRCxhQUNDLFNBQ0E7UUFIQSxrQkFBYSxHQUFiLGFBQWE7UUFDZCxnQkFBVyxHQUFYLFdBQVc7UUFDVixZQUFPLEdBQVAsT0FBTztRQUNQLGNBQVMsR0FBVCxTQUFTO1FBRWpCLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoSDtLQUNGO0lBbEJELHNCQUFJLG9DQUFjOzs7O1FBQWxCO1lBQ0UsT0FBTztnQkFDTCxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDMUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzFDLFNBQVMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUM1QyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQzNCLG9CQUFvQixFQUFFLElBQUksQ0FBQyw0QkFBNEI7YUFDeEQsQ0FBQztTQUNIOzs7T0FBQTs7OztJQVlELDJCQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFRCw4QkFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRU8sZ0NBQWE7Ozs7UUFDbkIsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNyRDs7Ozs7SUFHSCw4QkFBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQztLQUNGOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxVQUFVO2lCQUNyQjs7OztnQkFMUSxlQUFlO2dCQXJCdEIsVUFBVTtnQkFLVixNQUFNO2dCQU9OLFNBQVM7OztxQ0FrQlIsS0FBSztxQ0FDTCxLQUFLO3NDQUNMLEtBQUs7bUNBQ0wsS0FBSztpREFDTCxLQUFLOzttQkFuQ1I7O1NBNEJhLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIEFmdGVyVmlld0luaXQsXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lEXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCBMeUZvY3VzU3RhdGUsIFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFJpcHBsZSwgUmlwcGxlQ29uZmlnIH0gZnJvbSAnLi9yaXBwbGUnO1xuaW1wb3J0IHsgTHlSaXBwbGVTZXJ2aWNlIH0gZnJvbSAnLi9yaXBwbGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVJpcHBsZV0sIFtseS1yaXBwbGVdJyxcbiAgZXhwb3J0QXM6ICdseVJpcHBsZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcmlwcGxlQ29udGFpbmVyOiBSaXBwbGU7XG4gIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgQElucHV0KCkgbHlSaXBwbGVDZW50ZXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbHlSaXBwbGVEaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbHlSaXBwbGVTZW5zaXRpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGx5UmlwcGxlUmFkaXVzOiAnY29udGFpbmVyU2l6ZScgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGx5UmlwcGxlUGVyY2VudGFnZVRvSW5jcmVhc2U6IG51bWJlcjtcbiAgZ2V0IGx5UmlwcGxlQ29uZmlnKCk6IFJpcHBsZUNvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNlbnRlcmVkOiB0b0Jvb2xlYW4odGhpcy5seVJpcHBsZUNlbnRlcmVkKSxcbiAgICAgIGRpc2FibGVkOiB0b0Jvb2xlYW4odGhpcy5seVJpcHBsZURpc2FibGVkKSxcbiAgICAgIHNlbnNpdGl2ZTogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVTZW5zaXRpdmUpLFxuICAgICAgcmFkaXVzOiB0aGlzLmx5UmlwcGxlUmFkaXVzLFxuICAgICAgcGVyY2VudGFnZVRvSW5jcmVhc2U6IHRoaXMubHlSaXBwbGVQZXJjZW50YWdlVG9JbmNyZWFzZSxcbiAgICB9O1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmlwcGxlU2VydmljZTogTHlSaXBwbGVTZXJ2aWNlLFxuICAgIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZSh0aGlzLl9uZ1pvbmUsIHRoaXMucmlwcGxlU2VydmljZS5zdHlsZXNEYXRhLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVJpcHBsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuX3VwZGF0ZVJpcHBsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUmlwcGxlKCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyLnNldENvbmZpZyh0aGlzLmx5UmlwcGxlQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5yaXBwbGVDb250YWluZXIpIHtcbiAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyLnJlbW92ZUV2ZW50cygpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=