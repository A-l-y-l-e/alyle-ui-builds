/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyOverlay, LyTheme2, Platform, WinScroll, XPosition, YPosition, getPosition } from '@alyle/ui';
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
     * @param {?} focusState
     * @param {?} ngZone
     * @param {?} scroll
     */
    constructor(_theme, _overlay, _el, _renderer, _cd, focusState, ngZone, scroll) {
        this._theme = _theme;
        this._overlay = _overlay;
        this._el = _el;
        this._renderer = _renderer;
        this._cd = _cd;
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
            focusState.listen(element).subscribe(ev => {
                if (ev.by === 'keyboard' && ev.event.type === 'focus') {
                    ngZone.run(() => this.show());
                }
                else if (ev.event.type === 'blur') {
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
            this._showTimeoutId = (/** @type {?} */ (setTimeout(() => {
                /** @type {?} */
                const rect = this._el.nativeElement.getBoundingClientRect();
                /** @type {?} */
                const tooltip = this._tooltipOverlay = this._overlay.create(this.tooltip, undefined, {
                    styles: {
                        top: rect.y,
                        left: rect.x
                    },
                    classes: [
                        this._theme.addStyle('LyTooltip', (theme) => (Object.assign({ borderRadius: '4px' }, theme.tooltip.root, { fontSize: '10px', padding: '6px 8px', opacity: 0, transition: `opacity ${theme.animations.curves.standard} 300ms`, [theme.getBreakpoint('XSmall')]: {
                                padding: '8px 16px',
                                fontSize: '14px',
                            } })), null, null, STYLE_PRIORITY)
                    ],
                    host: this._el.nativeElement,
                });
                /** @type {?} */
                const position = getPosition(this.placement, this.xPosition, this.yPosition, this._el.nativeElement, tooltip.containerElement, this._theme.config, 13);
                tooltip.containerElement.style.transform = `translate3d(${position.x}px,${position.y}px,0)`;
                this._theme.requestAnimationFrame(() => {
                    this._theme.addStyle('lyTooltip:open', ({
                        opacity: 1,
                    }), tooltip.containerElement, null, STYLE_PRIORITY);
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
     * @return {?}
     */
    _markForCheck() {
        this._cd.markForCheck();
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
    /** @type {?} */
    LyTooltip.prototype._tooltip;
    /** @type {?} */
    LyTooltip.prototype._tooltipOverlay;
    /** @type {?} */
    LyTooltip.prototype._listeners;
    /** @type {?} */
    LyTooltip.prototype._scrollSub;
    /** @type {?} */
    LyTooltip.prototype._scrollVal;
    /** @type {?} */
    LyTooltip.prototype._showTimeoutId;
    /** @type {?} */
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
    /** @type {?} */
    LyTooltip.prototype._theme;
    /** @type {?} */
    LyTooltip.prototype._overlay;
    /** @type {?} */
    LyTooltip.prototype._el;
    /** @type {?} */
    LyTooltip.prototype._renderer;
    /** @type {?} */
    LyTooltip.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBSU4sU0FBUyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFNBQVMsRUFDVCxRQUFRLEVBR1IsUUFBUSxFQUVSLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDVixNQUFNLFdBQVcsQ0FBQzs7TUFHZixpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSzs7TUFDbkMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLG9CQUNDLGdCQUFnQixDQUFDLElBQUksQ0FDekI7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7Ozs7O0lBc0JwQixZQUNVLE1BQWdCLEVBQ2hCLFFBQW1CLEVBQ25CLEdBQWUsRUFDZixTQUFvQixFQUNwQixHQUFzQixFQUM5QixVQUF3QixFQUN4QixNQUFjLEVBQ2QsTUFBaUI7UUFQVCxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUF6QnZCLFlBQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFHN0QsZUFBVSxHQUFHLElBQUksR0FBRyxFQUE4QyxDQUFDO1FBRW5FLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFVZCx1QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFDL0Is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QUN0Qjs7OztZQXZCQyxRQUFRO1lBRFIsU0FBUztZQVhULFVBQVU7WUFNVixTQUFTO1lBUlQsaUJBQWlCO1lBWWpCLFlBQVk7WUFSWixNQUFNO1lBZU4sU0FBUzs7O3NCQTZCUixLQUFLLFNBQUMsV0FBVztpQ0FPakIsS0FBSztpQ0FDTCxLQUFLO3dCQUNMLEtBQUssU0FBQyxvQkFBb0I7d0JBQzFCLEtBQUssU0FBQyxvQkFBb0I7d0JBQzFCLEtBQUssU0FBQyxvQkFBb0I7Ozs7Ozs7SUFuQjNCLDRCQUFxRTs7SUFDckUsNkJBQW1EOztJQUNuRCxvQ0FBZ0Q7O0lBQ2hELCtCQUEyRTs7SUFDM0UsK0JBQWlDOztJQUNqQywrQkFBdUI7O0lBQ3ZCLG1DQUFzQzs7SUFDdEMsbUNBQXNDOztJQVF0Qyx1Q0FBd0M7O0lBQ3hDLHVDQUF3Qzs7SUFDeEMsOEJBQWtEOztJQUNsRCw4QkFBa0Q7O0lBQ2xELDhCQUFrRDs7SUFFaEQsMkJBQXdCOztJQUN4Qiw2QkFBMkI7O0lBQzNCLHdCQUF1Qjs7SUFDdkIsOEJBQTRCOztJQUM1Qix3QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeU92ZXJsYXksXG4gIEx5VGhlbWUyLFxuICBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLFxuICBQbGFjZW1lbnQsXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgV2luU2Nyb2xsLFxuICBYUG9zaXRpb24sXG4gIFlQb3NpdGlvbixcbiAgZ2V0UG9zaXRpb25cbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IERFRkFVTFRfUExBQ0VNRU5UID0gWVBvc2l0aW9uLmJlbG93O1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGxcbiAgfVxufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICdseVRvb2x0aXAnXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbHRpcCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3Rvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsO1xuICBwcml2YXRlIF90b29sdGlwT3ZlcmxheTogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZjtcbiAgcHJpdmF0ZSBfbGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q+KCk7XG4gIHByaXZhdGUgX3Njcm9sbFN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zY3JvbGxWYWwgPSAwO1xuICBwcml2YXRlIF9zaG93VGltZW91dElkOiBudW1iZXIgfCBudWxsO1xuICBwcml2YXRlIF9oaWRlVGltZW91dElkOiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoJ2x5VG9vbHRpcCcpXG4gIHNldCB0b29sdGlwKHZhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuX3Rvb2x0aXAgPSB2YWw7XG4gIH1cbiAgZ2V0IHRvb2x0aXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG4gIH1cbiAgQElucHV0KCkgbHlUb29sdGlwU2hvd0RlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBseVRvb2x0aXBIaWRlRGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnbHlUb29sdGlwUGxhY2VtZW50JykgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG4gIEBJbnB1dCgnbHlUb29sdGlwWFBvc2l0aW9uJykgeFBvc2l0aW9uOiBYUG9zaXRpb247XG4gIEBJbnB1dCgnbHlUb29sdGlwWVBvc2l0aW9uJykgeVBvc2l0aW9uOiBZUG9zaXRpb247XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9vdmVybGF5OiBMeU92ZXJsYXksXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHNjcm9sbDogV2luU2Nyb2xsXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoIVBsYXRmb3JtLklPUyAmJiAhUGxhdGZvcm0uQU5EUk9JRCkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnNcbiAgICAgICAgICAuc2V0KCdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5zaG93KCkpXG4gICAgICAgICAgLnNldCgnbW91c2VsZWF2ZScsICgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5zZXQoJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lciwgZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpKTtcblxuICAgICAgdGhpcy5fc2Nyb2xsU3ViID0gc2Nyb2xsLnNjcm9sbCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBPdmVybGF5KSB7XG4gICAgICAgICAgdGhpcy5fc2Nyb2xsVmFsKys7XG4gICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZhbCA+IDEwKSB7XG4gICAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuaGlkZSgwKSk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWYWwgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGZvY3VzU3RhdGUubGlzdGVuKGVsZW1lbnQpLnN1YnNjcmliZShldiA9PiB7XG4gICAgICAgIGlmIChldi5ieSA9PT0gJ2tleWJvYXJkJyAmJiBldi5ldmVudC50eXBlID09PSAnZm9jdXMnKSB7XG4gICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXYuZXZlbnQudHlwZSA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5wbGFjZW1lbnQgJiYgIXRoaXMueFBvc2l0aW9uICYmICF0aGlzLnlQb3NpdGlvbikge1xuICAgICAgdGhpcy5wbGFjZW1lbnQgPSBERUZBVUxUX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGUoMCk7XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIHNldCBpbiB0aGUgY29uc3RydWN0b3JcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIsIGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9zY3JvbGxTdWIpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coZGVsYXk/OiBudW1iZXIpIHtcbiAgICBkZWxheSA9IHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgPyBkZWxheSA6IHRoaXMubHlUb29sdGlwU2hvd0RlbGF5O1xuICAgIGlmICh0aGlzLl9oaWRlVGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl90b29sdGlwT3ZlcmxheSAmJiB0aGlzLnRvb2x0aXAgJiYgIXRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcblxuICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IDxhbnk+c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5fdG9vbHRpcE92ZXJsYXkgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLnRvb2x0aXAsIHVuZGVmaW5lZCwge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnksXG4gICAgICAgICAgICBsZWZ0OiByZWN0LnhcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzZXM6IFtcbiAgICAgICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdMeVRvb2x0aXAnLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgICAuLi50aGVtZS50b29sdGlwLnJvb3QsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH0gMzAwbXNgLFxuICAgICAgICAgICAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSwgbnVsbCwgbnVsbCwgU1RZTEVfUFJJT1JJVFkpXG4gICAgICAgICAgXSxcbiAgICAgICAgICBob3N0OiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb3NpdGlvbih0aGlzLnBsYWNlbWVudCwgdGhpcy54UG9zaXRpb24sIHRoaXMueVBvc2l0aW9uLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0b29sdGlwLmNvbnRhaW5lckVsZW1lbnQsIHRoaXMuX3RoZW1lLmNvbmZpZywgMTMpO1xuICAgICAgICB0b29sdGlwLmNvbnRhaW5lckVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7cG9zaXRpb24ueH1weCwke3Bvc2l0aW9uLnl9cHgsMClgO1xuXG4gICAgICAgIHRoaXMuX3RoZW1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2x5VG9vbHRpcDpvcGVuJywgKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgfSksIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudCwgbnVsbCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zaG93VGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZShkZWxheT86IG51bWJlcikge1xuICAgIGNvbnN0IHRvb2x0aXBPdmVybGF5ID0gdGhpcy5fdG9vbHRpcE92ZXJsYXk7XG4gICAgZGVsYXkgPSB0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInID8gZGVsYXkgOiB0aGlzLmx5VG9vbHRpcEhpZGVEZWxheTtcbiAgICBpZiAodGhpcy5fc2hvd1RpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0b29sdGlwT3ZlcmxheSAmJiAhdGhpcy5faGlkZVRpbWVvdXRJZCkge1xuXG4gICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gPGFueT5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModG9vbHRpcE92ZXJsYXkuY29udGFpbmVyRWxlbWVudCwgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2x5VG9vbHRpcDpvcGVuJywgbnVsbCkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRvb2x0aXBPdmVybGF5LmRlc3Ryb3koKSwgMzAwKTtcbiAgICAgICAgdGhpcy5fdG9vbHRpcE92ZXJsYXkgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2hpZGVUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBPdmVybGF5KSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=