/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { LyTheme2, LY_COMMON_STYLES, LyOverlay, Platform, LyFocusState, WindowScrollService } from '@alyle/ui';
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = ({
    root: tslib_1.__assign({}, LY_COMMON_STYLES.fill)
});
var LyTooltip = /** @class */ (function () {
    function LyTooltip(_theme, _overlay, _el, _cd, focusState, ngZone, scroll) {
        var _this = this;
        this._theme = _theme;
        this._overlay = _overlay;
        this._el = _el;
        this._cd = _cd;
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        this._listeners = new Map();
        this.lyTooltipShowDelay = 0;
        this.lyTooltipHideDelay = 0;
        if (Platform.isBrowser) {
            /** @type {?} */
            var element_1 = _el.nativeElement;
            if (!Platform.IOS && !Platform.ANDROID) {
                this._listeners
                    .set('mouseenter', function () { return _this.show(); })
                    .set('mouseleave', function () { return _this.hide(); });
            }
            else {
                this._listeners.set('touchstart', function () { return _this.show(); });
            }
            this._listeners.forEach(function (listener, event) { return element_1.addEventListener(event, listener); });
            this._scrollSub = scroll.scroll$.subscribe(function () {
                if (_this._tooltipOverlay) {
                    // this._scrollVal++;
                    // if (this._scrollVal > 10) {
                    ngZone.run(function () { return _this.hide(0); });
                    // this._scrollVal = 0;
                    // }
                }
            });
            focusState.listen(element_1).subscribe(function (ev) {
                if (ev.by === 'keyboard' && ev.event.type === 'focus') {
                    ngZone.run(function () { return _this.show(); });
                }
                else if (ev.event.type === 'blur') {
                    ngZone.run(function () { return _this.hide(); });
                }
            });
        }
    }
    Object.defineProperty(LyTooltip.prototype, "tooltip", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tooltip;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._tooltip = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LyTooltip.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hide(0);
        // Clean up the event listeners set in the constructor
        this._listeners.forEach(function (listener, event) {
            _this._el.nativeElement.removeEventListener(event, listener);
        });
        if (this._scrollSub) {
            this._scrollSub.unsubscribe();
        }
    };
    /**
     * @param {?=} delay
     * @return {?}
     */
    LyTooltip.prototype.show = /**
     * @param {?=} delay
     * @return {?}
     */
    function (delay) {
        var _this = this;
        delay = typeof delay === 'number' ? delay : this.lyTooltipShowDelay;
        if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
            this._hideTimeoutId = null;
        }
        if (!this._tooltipOverlay && this.tooltip && !this._showTimeoutId) {
            this._showTimeoutId = (/** @type {?} */ (setTimeout(function () {
                /** @type {?} */
                var rect = _this._el.nativeElement.getBoundingClientRect();
                /** @type {?} */
                var tooltip = _this._tooltipOverlay = _this._overlay.create(_this.tooltip, undefined, {
                    styles: {
                        top: rect.y,
                        left: rect.x,
                        pointerEvents: null
                    },
                    classes: [
                        _this._theme.addStyle('LyTooltip', function (theme) {
                            var _a;
                            return (tslib_1.__assign({ borderRadius: '4px' }, theme.tooltip.root, (_a = { fontSize: '10px', padding: '6px 8px' }, _a[theme.getBreakpoint('XSmall')] = {
                                padding: '8px 16px',
                                fontSize: '14px',
                            }, _a)));
                        })
                    ]
                });
                /** @type {?} */
                var tooltipRect = tooltip.containerElement.getBoundingClientRect();
                tooltip.containerElement.style.transform = "translate3d(" + Math.round(rect.width / 2 - tooltipRect.width / 2) + "px," + Math.round(rect.height * .2 + rect.height) + "px,0px)";
                _this._showTimeoutId = null;
                _this._markForCheck();
            }, delay)));
        }
    };
    /**
     * @param {?=} delay
     * @return {?}
     */
    LyTooltip.prototype.hide = /**
     * @param {?=} delay
     * @return {?}
     */
    function (delay) {
        var _this = this;
        /** @type {?} */
        var tooltipOverlay = this._tooltipOverlay;
        delay = typeof delay === 'number' ? delay : this.lyTooltipHideDelay;
        if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
        }
        if (tooltipOverlay && !this._hideTimeoutId) {
            this._hideTimeoutId = (/** @type {?} */ (setTimeout(function () {
                tooltipOverlay.destroy();
                _this._tooltipOverlay = null;
                _this._hideTimeoutId = null;
                _this._markForCheck();
            }, delay)));
        }
    };
    /**
     * @return {?}
     */
    LyTooltip.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this._tooltipOverlay) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    LyTooltip.prototype._markForCheck = /**
     * @return {?}
     */
    function () {
        this._cd.markForCheck();
    };
    LyTooltip.decorators = [
        { type: Directive, args: [{
                    selector: '[lyTooltip]',
                    exportAs: 'lyTooltip'
                },] }
    ];
    /** @nocollapse */
    LyTooltip.ctorParameters = function () { return [
        { type: LyTheme2 },
        { type: LyOverlay },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: LyFocusState },
        { type: NgZone },
        { type: WindowScrollService }
    ]; };
    LyTooltip.propDecorators = {
        tooltip: [{ type: Input, args: ['lyTooltip',] }],
        lyTooltipShowDelay: [{ type: Input }],
        lyTooltipHideDelay: [{ type: Input }]
    };
    return LyTooltip;
}());
export { LyTooltip };
if (false) {
    /** @type {?} */
    LyTooltip.prototype.classes;
    /** @type {?} */
    LyTooltip.prototype._tooltip;
    /** @type {?} */
    LyTooltip.prototype._tooltipOverlay;
    /** @type {?} */
    LyTooltip.prototype._listeners;
    /** @type {?} */
    LyTooltip.prototype._scrollSub;
    /** @type {?} */
    LyTooltip.prototype._showTimeoutId;
    /** @type {?} */
    LyTooltip.prototype._hideTimeoutId;
    /** @type {?} */
    LyTooltip.prototype.lyTooltipShowDelay;
    /** @type {?} */
    LyTooltip.prototype.lyTooltipHideDelay;
    /** @type {?} */
    LyTooltip.prototype._theme;
    /** @type {?} */
    LyTooltip.prototype._overlay;
    /** @type {?} */
    LyTooltip.prototype._el;
    /** @type {?} */
    LyTooltip.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUEwQixVQUFVLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUEwQixRQUFRLEVBQUUsWUFBWSxFQUFrQixtQkFBbUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7SUFHakosY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFDbkIsTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLHVCQUNDLGdCQUFnQixDQUFDLElBQUksQ0FDekI7Q0FDRixDQUFDO0FBRUY7SUFzQkUsbUJBQ1UsTUFBZ0IsRUFDaEIsUUFBbUIsRUFDbkIsR0FBZSxFQUNmLEdBQXNCLEVBQzlCLFVBQXdCLEVBQ3hCLE1BQWMsRUFDZCxNQUEyQjtRQVA3QixpQkF1Q0M7UUF0Q1MsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXJCdkIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUc3RCxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQThDLENBQUM7UUFZbEUsdUJBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBQy9CLHVCQUFrQixHQUFXLENBQUMsQ0FBQztRQVV0QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7O2dCQUNoQixTQUFPLEdBQWdCLEdBQUcsQ0FBQyxhQUFhO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFVBQVU7cUJBQ1osR0FBRyxDQUFDLFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQztxQkFDcEMsR0FBRyxDQUFDLFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO2FBQ3REO1lBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLEVBQUUsS0FBSyxJQUFLLE9BQUEsU0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO1lBRXhGLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQ3pDLElBQUksS0FBSSxDQUFDLGVBQWUsRUFBRTtvQkFDeEIscUJBQXFCO29CQUNyQiw4QkFBOEI7b0JBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQVosQ0FBWSxDQUFDLENBQUM7b0JBQy9CLHVCQUF1QjtvQkFDekIsSUFBSTtpQkFDTDtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxFQUFFO2dCQUNyQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssVUFBVSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO2lCQUMvQjtxQkFBTSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtvQkFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO2lCQUMvQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBaERELHNCQUNJLDhCQUFPOzs7O1FBR1g7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFORCxVQUNZLEdBQThCO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7O0lBK0NELCtCQUFXOzs7SUFBWDtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUViLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsRUFBRSxLQUFLO1lBQ3RDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx3QkFBSTs7OztJQUFKLFVBQUssS0FBYztRQUFuQixpQkFvQ0M7UUFuQ0MsS0FBSyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDcEUsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUVqRSxJQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFLLFVBQVUsQ0FBQzs7b0JBQzlCLElBQUksR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRTs7b0JBQ3JELE9BQU8sR0FBRyxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFO29CQUNuRixNQUFNLEVBQUU7d0JBQ04sR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNYLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDWixhQUFhLEVBQUUsSUFBSTtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQXFCOzs0QkFBSyxPQUFBLG9CQUMzRCxZQUFZLEVBQUUsS0FBSyxJQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksVUFDckIsUUFBUSxFQUFFLE1BQU0sRUFDaEIsT0FBTyxFQUFFLFNBQVMsT0FDakIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBRztnQ0FDL0IsT0FBTyxFQUFFLFVBQVU7Z0NBQ25CLFFBQVEsRUFBRSxNQUFNOzZCQUNqQixPQUNEO3dCQVQyRCxDQVMzRCxDQUFDO3FCQUNKO2lCQUNGLENBQUM7O29CQUNJLFdBQVcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUU7Z0JBQ3BFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGlCQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBUyxDQUFDO2dCQUV0SyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBQSxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7OztJQUVELHdCQUFJOzs7O0lBQUosVUFBSyxLQUFjO1FBQW5CLGlCQWlCQzs7WUFoQk8sY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlO1FBQzNDLEtBQUssR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3BFLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBRTFDLElBQUksQ0FBQyxjQUFjLEdBQUcsbUJBQUssVUFBVSxDQUFDO2dCQUNwQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUU1QixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBQSxDQUFDO1NBQ1g7SUFDSCxDQUFDOzs7O0lBRUQsMEJBQU07OztJQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7SUFFTyxpQ0FBYTs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkEvSUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsV0FBVztpQkFDdEI7Ozs7Z0JBYlEsUUFBUTtnQkFBb0IsU0FBUztnQkFESyxVQUFVO2dCQUFVLGlCQUFpQjtnQkFDTixZQUFZO2dCQUQvQixNQUFNO2dCQUMyQyxtQkFBbUI7OzswQkF1QmhJLEtBQUssU0FBQyxXQUFXO3FDQU9qQixLQUFLO3FDQUNMLEtBQUs7O0lBMkhSLGdCQUFDO0NBQUEsQUFoSkQsSUFnSkM7U0E1SVksU0FBUzs7O0lBQ3BCLDRCQUFxRTs7SUFDckUsNkJBQW1EOztJQUNuRCxvQ0FBZ0Q7O0lBQ2hELCtCQUEyRTs7SUFDM0UsK0JBQWlDOztJQUVqQyxtQ0FBc0M7O0lBQ3RDLG1DQUFzQzs7SUFRdEMsdUNBQXdDOztJQUN4Qyx1Q0FBd0M7O0lBRXRDLDJCQUF3Qjs7SUFDeEIsNkJBQTJCOztJQUMzQix3QkFBdUI7O0lBQ3ZCLHdCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBMWV9DT01NT05fU1RZTEVTLCBMeU92ZXJsYXksIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYsIFBsYXRmb3JtLCBMeUZvY3VzU3RhdGUsIFRoZW1lVmFyaWFibGVzLCBXaW5kb3dTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbFxuICB9XG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5VG9vbHRpcF0nLFxuICBleHBvcnRBczogJ2x5VG9vbHRpcCdcbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sdGlwIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3Rvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsO1xuICBwcml2YXRlIF90b29sdGlwT3ZlcmxheTogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZjtcbiAgcHJpdmF0ZSBfbGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q+KCk7XG4gIHByaXZhdGUgX3Njcm9sbFN1YjogU3Vic2NyaXB0aW9uO1xuICAvLyBwcml2YXRlIF9zY3JvbGxWYWwgPSAwO1xuICBwcml2YXRlIF9zaG93VGltZW91dElkOiBudW1iZXIgfCBudWxsO1xuICBwcml2YXRlIF9oaWRlVGltZW91dElkOiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoJ2x5VG9vbHRpcCcpXG4gIHNldCB0b29sdGlwKHZhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuX3Rvb2x0aXAgPSB2YWw7XG4gIH1cbiAgZ2V0IHRvb2x0aXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG4gIH1cbiAgQElucHV0KCkgbHlUb29sdGlwU2hvd0RlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBseVRvb2x0aXBIaWRlRGVsYXk6IG51bWJlciA9IDA7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9vdmVybGF5OiBMeU92ZXJsYXksXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBzY3JvbGw6IFdpbmRvd1Njcm9sbFNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBfZWwubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICghUGxhdGZvcm0uSU9TICYmICFQbGF0Zm9ybS5BTkRST0lEKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyc1xuICAgICAgICAgIC5zZXQoJ21vdXNlZW50ZXInLCAoKSA9PiB0aGlzLnNob3coKSlcbiAgICAgICAgICAuc2V0KCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnNldCgndG91Y2hzdGFydCcsICgpID0+IHRoaXMuc2hvdygpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcikpO1xuXG4gICAgICB0aGlzLl9zY3JvbGxTdWIgPSBzY3JvbGwuc2Nyb2xsJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fdG9vbHRpcE92ZXJsYXkpIHtcbiAgICAgICAgICAvLyB0aGlzLl9zY3JvbGxWYWwrKztcbiAgICAgICAgICAvLyBpZiAodGhpcy5fc2Nyb2xsVmFsID4gMTApIHtcbiAgICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKDApKTtcbiAgICAgICAgICAgIC8vIHRoaXMuX3Njcm9sbFZhbCA9IDA7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZm9jdXNTdGF0ZS5saXN0ZW4oZWxlbWVudCkuc3Vic2NyaWJlKGV2ID0+IHtcbiAgICAgICAgaWYgKGV2LmJ5ID09PSAna2V5Ym9hcmQnICYmIGV2LmV2ZW50LnR5cGUgPT09ICdmb2N1cycpIHtcbiAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuc2hvdygpKTtcbiAgICAgICAgfSBlbHNlIGlmIChldi5ldmVudC50eXBlID09PSAnYmx1cicpIHtcbiAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5oaWRlKDApO1xuXG4gICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVycyBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4ge1xuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsU3ViKSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KGRlbGF5PzogbnVtYmVyKSB7XG4gICAgZGVsYXkgPSB0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInID8gZGVsYXkgOiB0aGlzLmx5VG9vbHRpcFNob3dEZWxheTtcbiAgICBpZiAodGhpcy5faGlkZVRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy5fdG9vbHRpcE92ZXJsYXkgJiYgdGhpcy50b29sdGlwICYmICF0aGlzLl9zaG93VGltZW91dElkKSB7XG5cbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSA8YW55PnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy50b29sdGlwLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHRvcDogcmVjdC55LFxuICAgICAgICAgICAgbGVmdDogcmVjdC54LFxuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhc3NlczogW1xuICAgICAgICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ0x5VG9vbHRpcCcsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICAgIC4uLnRoZW1lLnRvb2x0aXAucm9vdCxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCA4cHgnLFxuICAgICAgICAgICAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b29sdGlwUmVjdCA9IHRvb2x0aXAuY29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke01hdGgucm91bmQocmVjdC53aWR0aCAvIDIgLSB0b29sdGlwUmVjdC53aWR0aCAvIDIpfXB4LCR7TWF0aC5yb3VuZChyZWN0LmhlaWdodCAqIC4yICsgcmVjdC5oZWlnaHQpfXB4LDBweClgO1xuXG4gICAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG4gIH1cblxuICBoaWRlKGRlbGF5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgdG9vbHRpcE92ZXJsYXkgPSB0aGlzLl90b29sdGlwT3ZlcmxheTtcbiAgICBkZWxheSA9IHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgPyBkZWxheSA6IHRoaXMubHlUb29sdGlwSGlkZURlbGF5O1xuICAgIGlmICh0aGlzLl9zaG93VGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd1RpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9zaG93VGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRvb2x0aXBPdmVybGF5ICYmICF0aGlzLl9oaWRlVGltZW91dElkKSB7XG5cbiAgICAgIHRoaXMuX2hpZGVUaW1lb3V0SWQgPSA8YW55PnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0b29sdGlwT3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl90b29sdGlwT3ZlcmxheSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19