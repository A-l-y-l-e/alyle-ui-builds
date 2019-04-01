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
const styles = (theme) => ({
    $priority: STYLE_PRIORITY,
    root: Object.assign({}, LY_COMMON_STYLES.fill, { '&': theme.tooltip ? theme.tooltip.root : null })
});
const ɵ0 = styles;
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
        this.classes = this._theme.addStyleSheet(styles);
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBSU4sU0FBUyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFNBQVMsRUFDVCxRQUFRLEVBR1IsUUFBUSxFQUVSLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDVixNQUFNLFdBQVcsQ0FBQzs7TUFHZixpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSzs7TUFDbkMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsTUFBTSxHQUFHLENBQUMsS0FBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxTQUFTLEVBQUUsY0FBYztJQUN6QixJQUFJLG9CQUNDLGdCQUFnQixDQUFDLElBQUksSUFDeEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQy9DO0NBQ0YsQ0FBQzs7QUFNRixNQUFNLE9BQU8sU0FBUzs7Ozs7Ozs7Ozs7SUFzQnBCLFlBQ1UsTUFBZ0IsRUFDaEIsUUFBbUIsRUFDbkIsR0FBZSxFQUNmLFNBQW9CLEVBQ3BCLEdBQXNCLEVBQ3RCLFdBQXlCLEVBQ2pDLE1BQWMsRUFDZCxNQUFpQjtRQVBULFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixnQkFBVyxHQUFYLFdBQVcsQ0FBYzs7OztR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LElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUN0QixPQUFPLENBQUMsZ0JBQWdCLEVBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUNyQixFQUFFLENBQ0g7WUFDRCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxlQUFlLFFBQVEsQ0FBQyxDQUFDLE1BQU0sUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQzdGO0lBQ0gsQ0FBQzs7O1lBdkxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFdBQVc7YUFDdEI7Ozs7WUF6QkMsUUFBUTtZQURSLFNBQVM7WUFYVCxVQUFVO1lBTVYsU0FBUztZQVJULGlCQUFpQjtZQVlqQixZQUFZO1lBUlosTUFBTTtZQWVOLFNBQVM7OztzQkErQlIsS0FBSyxTQUFDLFdBQVc7aUNBT2pCLEtBQUs7aUNBQ0wsS0FBSzt3QkFDTCxLQUFLLFNBQUMsb0JBQW9CO3dCQUMxQixLQUFLLFNBQUMsb0JBQW9CO3dCQUMxQixLQUFLLFNBQUMsb0JBQW9COzs7Ozs7O0lBbkIzQiw0QkFBcUQ7Ozs7O0lBQ3JELDZCQUFtRDs7Ozs7SUFDbkQsb0NBQStDOzs7OztJQUMvQywrQkFBMkU7Ozs7O0lBQzNFLCtCQUFpQzs7Ozs7SUFDakMsK0JBQXVCOzs7OztJQUN2QixtQ0FBc0M7Ozs7O0lBQ3RDLG1DQUFzQzs7SUFRdEMsdUNBQXdDOztJQUN4Qyx1Q0FBd0M7O0lBQ3hDLDhCQUFrRDs7SUFDbEQsOEJBQWtEOztJQUNsRCw4QkFBa0Q7Ozs7O0lBRWhELDJCQUF3Qjs7Ozs7SUFDeEIsNkJBQTJCOzs7OztJQUMzQix3QkFBdUI7Ozs7O0lBQ3ZCLDhCQUE0Qjs7Ozs7SUFDNUIsd0JBQThCOzs7OztJQUM5QixnQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeU92ZXJsYXksXG4gIEx5VGhlbWUyLFxuICBPdmVybGF5RmFjdG9yeSxcbiAgUGxhY2VtZW50LFxuICBQbGF0Zm9ybSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFdpblNjcm9sbCxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIFBvc2l0aW9uaW5nXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBERUZBVUxUX1BMQUNFTUVOVCA9IFlQb3NpdGlvbi5iZWxvdztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAkcHJpb3JpdHk6IFNUWUxFX1BSSU9SSVRZLFxuICByb290OiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgICcmJzogdGhlbWUudG9vbHRpcCA/IHRoZW1lLnRvb2x0aXAucm9vdCA6IG51bGxcbiAgfVxufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICdseVRvb2x0aXAnXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbHRpcCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzKTtcbiAgcHJpdmF0ZSBfdG9vbHRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB8IG51bGw7XG4gIHByaXZhdGUgX3Rvb2x0aXBPdmVybGF5OiBPdmVybGF5RmFjdG9yeSB8IG51bGw7XG4gIHByaXZhdGUgX2xpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0PigpO1xuICBwcml2YXRlIF9zY3JvbGxTdWI6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfc2Nyb2xsVmFsID0gMDtcbiAgcHJpdmF0ZSBfc2hvd1RpbWVvdXRJZDogbnVtYmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBfaGlkZVRpbWVvdXRJZDogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCdseVRvb2x0aXAnKVxuICBzZXQgdG9vbHRpcCh2YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsKSB7XG4gICAgdGhpcy5fdG9vbHRpcCA9IHZhbDtcbiAgfVxuICBnZXQgdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcDtcbiAgfVxuICBASW5wdXQoKSBseVRvb2x0aXBTaG93RGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGx5VG9vbHRpcEhpZGVEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdseVRvb2x0aXBQbGFjZW1lbnQnKSBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcbiAgQElucHV0KCdseVRvb2x0aXBYUG9zaXRpb24nKSB4UG9zaXRpb246IFhQb3NpdGlvbjtcbiAgQElucHV0KCdseVRvb2x0aXBZUG9zaXRpb24nKSB5UG9zaXRpb246IFlQb3NpdGlvbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9mb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgc2Nyb2xsOiBXaW5TY3JvbGxcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBfZWwubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICghUGxhdGZvcm0uSU9TICYmICFQbGF0Zm9ybS5BTkRST0lEKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyc1xuICAgICAgICAgIC5zZXQoJ21vdXNlZW50ZXInLCAoKSA9PiB0aGlzLnNob3coKSlcbiAgICAgICAgICAuc2V0KCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnNldCgndG91Y2hzdGFydCcsICgpID0+IHRoaXMuc2hvdygpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcikpO1xuXG4gICAgICB0aGlzLl9zY3JvbGxTdWIgPSBzY3JvbGwuc2Nyb2xsJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fdG9vbHRpcE92ZXJsYXkpIHtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxWYWwrKztcbiAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmFsID4gMTApIHtcbiAgICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKDApKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZhbCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX2ZvY3VzU3RhdGUubGlzdGVuKGVsZW1lbnQpIS5zdWJzY3JpYmUoZXYgPT4ge1xuICAgICAgICBpZiAoZXYgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuc2hvdygpKTtcbiAgICAgICAgfSBlbHNlIGlmIChldiA9PSBudWxsKSB7XG4gICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5wbGFjZW1lbnQgJiYgIXRoaXMueFBvc2l0aW9uICYmICF0aGlzLnlQb3NpdGlvbikge1xuICAgICAgdGhpcy5wbGFjZW1lbnQgPSBERUZBVUxUX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGUoMCk7XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIHNldCBpbiB0aGUgY29uc3RydWN0b3JcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIsIGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9zY3JvbGxTdWIpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2ZvY3VzU3RhdGUudW5saXN0ZW4odGhpcy5fZWwpO1xuICB9XG5cbiAgc2hvdyhkZWxheT86IG51bWJlcikge1xuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJyA/IGRlbGF5IDogdGhpcy5seVRvb2x0aXBTaG93RGVsYXk7XG4gICAgaWYgKHRoaXMuX2hpZGVUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaWRlVGltZW91dElkKTtcbiAgICAgIHRoaXMuX2hpZGVUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3Rvb2x0aXBPdmVybGF5ICYmIHRoaXMudG9vbHRpcCAmJiAhdGhpcy5fc2hvd1RpbWVvdXRJZCkge1xuICAgICAgY29uc3QgdG9vbHRpcFJlZiA9IHRoaXMudG9vbHRpcDtcblxuICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IDxhbnk+c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IHJlY3QgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5fdG9vbHRpcE92ZXJsYXkgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0b29sdGlwUmVmLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIC8vIHRvcDogcmVjdC55LFxuICAgICAgICAgICAgLy8gbGVmdDogcmVjdC54XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblJlc2l6ZVNjcm9sbDogdGhpcy5fdXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGFzc2VzOiBbXG4gICAgICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnTHlUb29sdGlwJywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICAgICAgLi4udGhlbWUudG9vbHRpcC5yb290LFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9IDMwMG1zYCxcbiAgICAgICAgICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTVFlMRV9QUklPUklUWSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIGhhc0JhY2tkcm9wOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgLy8gY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb25pbmcodGhpcy5wbGFjZW1lbnQsIHRoaXMueFBvc2l0aW9uLCB0aGlzLnlQb3NpdGlvbiwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LCB0aGlzLl90aGVtZS52YXJpYWJsZXMsIDEzKTtcbiAgICAgICAgLy8gdG9vbHRpcC5jb250YWluZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsJHtwb3NpdGlvbi55fXB4LDApYDtcblxuICAgICAgICB0aGlzLl90aGVtZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseVRvb2x0aXA6b3BlbicsICh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIH0pLCB0b29sdGlwLmNvbnRhaW5lckVsZW1lbnQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zaG93VGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZShkZWxheT86IG51bWJlcikge1xuICAgIGNvbnN0IHRvb2x0aXBPdmVybGF5ID0gdGhpcy5fdG9vbHRpcE92ZXJsYXk7XG4gICAgZGVsYXkgPSB0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInID8gZGVsYXkgOiB0aGlzLmx5VG9vbHRpcEhpZGVEZWxheTtcbiAgICBpZiAodGhpcy5fc2hvd1RpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0b29sdGlwT3ZlcmxheSAmJiAhdGhpcy5faGlkZVRpbWVvdXRJZCkge1xuXG4gICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gPGFueT5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModG9vbHRpcE92ZXJsYXkuY29udGFpbmVyRWxlbWVudCwgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2x5VG9vbHRpcDpvcGVuJywgbnVsbCkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRvb2x0aXBPdmVybGF5LmRlc3Ryb3koKSwgMzAwKTtcbiAgICAgICAgdGhpcy5fdG9vbHRpcE92ZXJsYXkgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2hpZGVUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBPdmVybGF5KSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5O1xuICAgIGlmICh0b29sdGlwKSB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbmluZyhcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQsIHRoaXMueFBvc2l0aW9uLFxuICAgICAgICB0aGlzLnlQb3NpdGlvbixcbiAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LFxuICAgICAgICB0aGlzLl90aGVtZS52YXJpYWJsZXMsXG4gICAgICAgIDEzXG4gICAgICApO1xuICAgICAgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsJHtwb3NpdGlvbi55fXB4LDApYDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==