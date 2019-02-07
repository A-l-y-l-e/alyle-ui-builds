/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyOverlay, LyTheme2, Platform, WinScroll, XPosition, YPosition, Positioning } from '@alyle/ui';
/** @type {?} */
const DEFAULT_PLACEMENT = YPosition.below;
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = ({
    root: Object.assign({}, LY_COMMON_STYLES.fill)
});
export class LyTooltip {
    /**
     * @param {?} _theme
     * @param {?} _overlay
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _cd
     * @param {?} _focusState
     * @param {?} ngZone
     * @param {?} scroll
     */
    constructor(_theme, _overlay, _el, _renderer, _cd, _focusState, ngZone, scroll) {
        this._theme = _theme;
        this._overlay = _overlay;
        this._el = _el;
        this._renderer = _renderer;
        this._cd = _cd;
        this._focusState = _focusState;
        /**
         * \@docs-private
         */
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        this._listeners = new Map();
        this._scrollVal = 0;
        this.lyTooltipShowDelay = 0;
        this.lyTooltipHideDelay = 0;
        if (Platform.isBrowser) {
            /** @type {?} */
            const element = _el.nativeElement;
            if (!Platform.IOS && !Platform.ANDROID) {
                this._listeners
                    .set('mouseenter', () => this.show())
                    .set('mouseleave', () => this.hide());
            }
            else {
                this._listeners.set('touchstart', () => this.show());
            }
            this._listeners.forEach((listener, event) => element.addEventListener(event, listener));
            this._scrollSub = scroll.scroll$.subscribe(() => {
                if (this._tooltipOverlay) {
                    this._scrollVal++;
                    if (this._scrollVal > 10) {
                        ngZone.run(() => this.hide(0));
                        this._scrollVal = 0;
                    }
                }
            });
            (/** @type {?} */ (_focusState.listen(element))).subscribe(ev => {
                if (ev === 'keyboard') {
                    ngZone.run(() => this.show());
                }
                else if (ev == null) {
                    ngZone.run(() => this.hide());
                }
            });
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set tooltip(val) {
        this._tooltip = val;
    }
    /**
     * @return {?}
     */
    get tooltip() {
        return this._tooltip;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.placement && !this.xPosition && !this.yPosition) {
            this.placement = DEFAULT_PLACEMENT;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.hide(0);
        // Clean up the event listeners set in the constructor
        this._listeners.forEach((listener, event) => {
            this._el.nativeElement.removeEventListener(event, listener);
        });
        if (this._scrollSub) {
            this._scrollSub.unsubscribe();
        }
        this._focusState.unlisten(this._el);
    }
    /**
     * @param {?=} delay
     * @return {?}
     */
    show(delay) {
        delay = typeof delay === 'number' ? delay : this.lyTooltipShowDelay;
        if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
            this._hideTimeoutId = null;
        }
        if (!this._tooltipOverlay && this.tooltip && !this._showTimeoutId) {
            /** @type {?} */
            const tooltipRef = this.tooltip;
            this._showTimeoutId = (/** @type {?} */ (setTimeout(() => {
                // const rect = this._el.nativeElement.getBoundingClientRect();
                /** @type {?} */
                const tooltip = this._tooltipOverlay = this._overlay.create(tooltipRef, undefined, {
                    styles: {
                    // top: rect.y,
                    // left: rect.x
                    },
                    onResizeScroll: this._updatePosition.bind(this),
                    classes: [
                        this._theme.addStyle('LyTooltip', (theme) => (Object.assign({ borderRadius: '4px' }, theme.tooltip.root, { fontSize: '10px', padding: '6px 8px', opacity: 0, transition: `opacity ${theme.animations.curves.standard} 300ms`, [theme.getBreakpoint('XSmall')]: {
                                padding: '8px 16px',
                                fontSize: '14px',
                            } })), undefined, undefined, STYLE_PRIORITY)
                    ],
                    hasBackdrop: false
                });
                this._updatePosition();
                // const position = new Positioning(this.placement, this.xPosition, this.yPosition, this._el.nativeElement, tooltip.containerElement, this._theme.variables, 13);
                // tooltip.containerElement.style.transform = `translate3d(${position.x}px,${position.y}px,0)`;
                this._theme.requestAnimationFrame(() => {
                    this._theme.addStyle('lyTooltip:open', ({
                        opacity: 1,
                    }), tooltip.containerElement, undefined, STYLE_PRIORITY);
                });
                this._showTimeoutId = null;
                this._markForCheck();
            }, delay)));
        }
    }
    /**
     * @param {?=} delay
     * @return {?}
     */
    hide(delay) {
        /** @type {?} */
        const tooltipOverlay = this._tooltipOverlay;
        delay = typeof delay === 'number' ? delay : this.lyTooltipHideDelay;
        if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
        }
        if (tooltipOverlay && !this._hideTimeoutId) {
            this._hideTimeoutId = (/** @type {?} */ (setTimeout(() => {
                this._renderer.removeClass(tooltipOverlay.containerElement, this._theme.addStyle('lyTooltip:open', null));
                setTimeout(() => tooltipOverlay.destroy(), 300);
                this._tooltipOverlay = null;
                this._hideTimeoutId = null;
                this._markForCheck();
            }, delay)));
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this._tooltipOverlay) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _markForCheck() {
        this._cd.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    _updatePosition() {
        /** @type {?} */
        const tooltip = this._tooltipOverlay;
        if (tooltip) {
            /** @type {?} */
            const position = new Positioning(this.placement, this.xPosition, this.yPosition, this._el.nativeElement, tooltip.containerElement, this._theme.variables, 13);
            tooltip.containerElement.style.transform = `translate3d(${position.x}px,${position.y}px,0)`;
        }
    }
}
LyTooltip.decorators = [
    { type: Directive, args: [{
                selector: '[lyTooltip]',
                exportAs: 'lyTooltip'
            },] }
];
/** @nocollapse */
LyTooltip.ctorParameters = () => [
    { type: LyTheme2 },
    { type: LyOverlay },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: LyFocusState },
    { type: NgZone },
    { type: WinScroll }
];
LyTooltip.propDecorators = {
    tooltip: [{ type: Input, args: ['lyTooltip',] }],
    lyTooltipShowDelay: [{ type: Input }],
    lyTooltipHideDelay: [{ type: Input }],
    placement: [{ type: Input, args: ['lyTooltipPlacement',] }],
    xPosition: [{ type: Input, args: ['lyTooltipXPosition',] }],
    yPosition: [{ type: Input, args: ['lyTooltipYPosition',] }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyTooltip.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._tooltip;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._tooltipOverlay;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._listeners;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._scrollSub;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._scrollVal;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._showTimeoutId;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._hideTimeoutId;
    /** @type {?} */
    LyTooltip.prototype.lyTooltipShowDelay;
    /** @type {?} */
    LyTooltip.prototype.lyTooltipHideDelay;
    /** @type {?} */
    LyTooltip.prototype.placement;
    /** @type {?} */
    LyTooltip.prototype.xPosition;
    /** @type {?} */
    LyTooltip.prototype.yPosition;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._el;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    LyTooltip.prototype._focusState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBSU4sU0FBUyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFNBQVMsRUFDVCxRQUFRLEVBR1IsUUFBUSxFQUVSLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDVixNQUFNLFdBQVcsQ0FBQzs7TUFHZixpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSzs7TUFDbkMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLG9CQUNDLGdCQUFnQixDQUFDLElBQUksQ0FDekI7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7Ozs7O0lBc0JwQixZQUNVLE1BQWdCLEVBQ2hCLFFBQW1CLEVBQ25CLEdBQWUsRUFDZixTQUFvQixFQUNwQixHQUFzQixFQUN0QixXQUF5QixFQUNqQyxNQUFjLEVBQ2QsTUFBaUI7UUFQVCxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7Ozs7UUExQjFCLFlBQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFHN0QsZUFBVSxHQUFHLElBQUksR0FBRyxFQUE4QyxDQUFDO1FBRW5FLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFVZCx1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QUMsU0FBUyxHQUFHLGVBQWUsUUFBUSxDQUFDLENBQUMsTUFBTSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDN0Y7SUFDSCxDQUFDOzs7WUF2TEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsV0FBVzthQUN0Qjs7OztZQXZCQyxRQUFRO1lBRFIsU0FBUztZQVhULFVBQVU7WUFNVixTQUFTO1lBUlQsaUJBQWlCO1lBWWpCLFlBQVk7WUFSWixNQUFNO1lBZU4sU0FBUzs7O3NCQTZCUixLQUFLLFNBQUMsV0FBVztpQ0FPakIsS0FBSztpQ0FDTCxLQUFLO3dCQUNMLEtBQUssU0FBQyxvQkFBb0I7d0JBQzFCLEtBQUssU0FBQyxvQkFBb0I7d0JBQzFCLEtBQUssU0FBQyxvQkFBb0I7Ozs7Ozs7SUFuQjNCLDRCQUFxRTs7Ozs7SUFDckUsNkJBQW1EOzs7OztJQUNuRCxvQ0FBK0M7Ozs7O0lBQy9DLCtCQUEyRTs7Ozs7SUFDM0UsK0JBQWlDOzs7OztJQUNqQywrQkFBdUI7Ozs7O0lBQ3ZCLG1DQUFzQzs7Ozs7SUFDdEMsbUNBQXNDOztJQVF0Qyx1Q0FBd0M7O0lBQ3hDLHVDQUF3Qzs7SUFDeEMsOEJBQWtEOztJQUNsRCw4QkFBa0Q7O0lBQ2xELDhCQUFrRDs7Ozs7SUFFaEQsMkJBQXdCOzs7OztJQUN4Qiw2QkFBMkI7Ozs7O0lBQzNCLHdCQUF1Qjs7Ozs7SUFDdkIsOEJBQTRCOzs7OztJQUM1Qix3QkFBOEI7Ozs7O0lBQzlCLGdDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMWV9DT01NT05fU1RZTEVTLFxuICBMeUZvY3VzU3RhdGUsXG4gIEx5T3ZlcmxheSxcbiAgTHlUaGVtZTIsXG4gIE92ZXJsYXlGYWN0b3J5LFxuICBQbGFjZW1lbnQsXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgV2luU2Nyb2xsLFxuICBYUG9zaXRpb24sXG4gIFlQb3NpdGlvbixcbiAgUG9zaXRpb25pbmdcbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IERFRkFVTFRfUExBQ0VNRU5UID0gWVBvc2l0aW9uLmJlbG93O1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGxcbiAgfVxufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICdseVRvb2x0aXAnXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbHRpcCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3Rvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsO1xuICBwcml2YXRlIF90b29sdGlwT3ZlcmxheTogT3ZlcmxheUZhY3RvcnkgfCBudWxsO1xuICBwcml2YXRlIF9saXN0ZW5lcnMgPSBuZXcgTWFwPHN0cmluZywgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdD4oKTtcbiAgcHJpdmF0ZSBfc2Nyb2xsU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbFZhbCA9IDA7XG4gIHByaXZhdGUgX3Nob3dUaW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2hpZGVUaW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgnbHlUb29sdGlwJylcbiAgc2V0IHRvb2x0aXAodmFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbCkge1xuICAgIHRoaXMuX3Rvb2x0aXAgPSB2YWw7XG4gIH1cbiAgZ2V0IHRvb2x0aXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG4gIH1cbiAgQElucHV0KCkgbHlUb29sdGlwU2hvd0RlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBseVRvb2x0aXBIaWRlRGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnbHlUb29sdGlwUGxhY2VtZW50JykgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG4gIEBJbnB1dCgnbHlUb29sdGlwWFBvc2l0aW9uJykgeFBvc2l0aW9uOiBYUG9zaXRpb247XG4gIEBJbnB1dCgnbHlUb29sdGlwWVBvc2l0aW9uJykgeVBvc2l0aW9uOiBZUG9zaXRpb247XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9vdmVybGF5OiBMeU92ZXJsYXksXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHNjcm9sbDogV2luU2Nyb2xsXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoIVBsYXRmb3JtLklPUyAmJiAhUGxhdGZvcm0uQU5EUk9JRCkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnNcbiAgICAgICAgICAuc2V0KCdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5zaG93KCkpXG4gICAgICAgICAgLnNldCgnbW91c2VsZWF2ZScsICgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5zZXQoJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lciwgZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpKTtcblxuICAgICAgdGhpcy5fc2Nyb2xsU3ViID0gc2Nyb2xsLnNjcm9sbCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBPdmVybGF5KSB7XG4gICAgICAgICAgdGhpcy5fc2Nyb2xsVmFsKys7XG4gICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZhbCA+IDEwKSB7XG4gICAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuaGlkZSgwKSk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWYWwgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9mb2N1c1N0YXRlLmxpc3RlbihlbGVtZW50KSEuc3Vic2NyaWJlKGV2ID0+IHtcbiAgICAgICAgaWYgKGV2ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXYgPT0gbnVsbCkge1xuICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucGxhY2VtZW50ICYmICF0aGlzLnhQb3NpdGlvbiAmJiAhdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRoaXMucGxhY2VtZW50ID0gREVGQVVMVF9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5oaWRlKDApO1xuXG4gICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVycyBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4ge1xuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsU3ViKSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgfVxuXG4gIHNob3coZGVsYXk/OiBudW1iZXIpIHtcbiAgICBkZWxheSA9IHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgPyBkZWxheSA6IHRoaXMubHlUb29sdGlwU2hvd0RlbGF5O1xuICAgIGlmICh0aGlzLl9oaWRlVGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl90b29sdGlwT3ZlcmxheSAmJiB0aGlzLnRvb2x0aXAgJiYgIXRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcbiAgICAgIGNvbnN0IHRvb2x0aXBSZWYgPSB0aGlzLnRvb2x0aXA7XG5cbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSA8YW55PnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBjb25zdCByZWN0ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodG9vbHRpcFJlZiwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAvLyB0b3A6IHJlY3QueSxcbiAgICAgICAgICAgIC8vIGxlZnQ6IHJlY3QueFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25SZXNpemVTY3JvbGw6IHRoaXMuX3VwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xhc3NlczogW1xuICAgICAgICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ0x5VG9vbHRpcCcsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICAgIC4uLnRoZW1lLnRvb2x0aXAucm9vdCxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCA4cHgnLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfSAzMDBtc2AsXG4gICAgICAgICAgICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpXG4gICAgICAgICAgXSxcbiAgICAgICAgICBoYXNCYWNrZHJvcDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIC8vIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uaW5nKHRoaXMucGxhY2VtZW50LCB0aGlzLnhQb3NpdGlvbiwgdGhpcy55UG9zaXRpb24sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudCwgdGhpcy5fdGhlbWUudmFyaWFibGVzLCAxMyk7XG4gICAgICAgIC8vIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbi54fXB4LCR7cG9zaXRpb24ueX1weCwwKWA7XG5cbiAgICAgICAgdGhpcy5fdGhlbWUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnbHlUb29sdGlwOm9wZW4nLCAoe1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB9KSwgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoZGVsYXk/OiBudW1iZXIpIHtcbiAgICBjb25zdCB0b29sdGlwT3ZlcmxheSA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5O1xuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJyA/IGRlbGF5IDogdGhpcy5seVRvb2x0aXBIaWRlRGVsYXk7XG4gICAgaWYgKHRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93VGltZW91dElkKTtcbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodG9vbHRpcE92ZXJsYXkgJiYgIXRoaXMuX2hpZGVUaW1lb3V0SWQpIHtcblxuICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IDxhbnk+c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRvb2x0aXBPdmVybGF5LmNvbnRhaW5lckVsZW1lbnQsIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseVRvb2x0aXA6b3BlbicsIG51bGwpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0b29sdGlwT3ZlcmxheS5kZXN0cm95KCksIDMwMCk7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl90b29sdGlwT3ZlcmxheSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLl90b29sdGlwT3ZlcmxheTtcbiAgICBpZiAodG9vbHRpcCkge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb25pbmcoXG4gICAgICAgIHRoaXMucGxhY2VtZW50LCB0aGlzLnhQb3NpdGlvbixcbiAgICAgICAgdGhpcy55UG9zaXRpb24sXG4gICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudCxcbiAgICAgICAgdGhpcy5fdGhlbWUudmFyaWFibGVzLFxuICAgICAgICAxM1xuICAgICAgKTtcbiAgICAgIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbi54fXB4LCR7cG9zaXRpb24ueX1weCwwKWA7XG4gICAgfVxuICB9XG59XG4iXX0=