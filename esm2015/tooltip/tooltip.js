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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBSU4sU0FBUyxFQUNSLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFNBQVMsRUFDVCxRQUFRLEVBR1IsUUFBUSxFQUVSLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDVixNQUFNLFdBQVcsQ0FBQzs7TUFHZixpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSzs7TUFDbkMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7TUFDbkIsTUFBTSxHQUFHLENBQUM7SUFDZCxJQUFJLG9CQUNDLGdCQUFnQixDQUFDLElBQUksQ0FDekI7Q0FDRixDQUFDO0FBTUYsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7Ozs7O0lBc0JwQixZQUNVLE1BQWdCLEVBQ2hCLFFBQW1CLEVBQ25CLEdBQWUsRUFDZixTQUFvQixFQUNwQixHQUFzQixFQUM5QixVQUF3QixFQUN4QixNQUFjLEVBQ2QsTUFBaUI7UUFQVCxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUF6QnZCLFlBQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFHN0QsZUFBVSxHQUFHLElBQUksR0FBRyxFQUE4QyxDQUFDO1FBRW5FLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFVZCx1QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFDL0Is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WTtZQVJaLE1BQU07WUFlTixTQUFTOzs7c0JBNkJSLEtBQUssU0FBQyxXQUFXO2lDQU9qQixLQUFLO2lDQUNMLEtBQUs7d0JBQ0wsS0FBSyxTQUFDLG9CQUFvQjt3QkFDMUIsS0FBSyxTQUFDLG9CQUFvQjt3QkFDMUIsS0FBSyxTQUFDLG9CQUFvQjs7Ozs7OztJQW5CM0IsNEJBQXFFOztJQUNyRSw2QkFBbUQ7O0lBQ25ELG9DQUFnRDs7SUFDaEQsK0JBQTJFOztJQUMzRSwrQkFBaUM7O0lBQ2pDLCtCQUF1Qjs7SUFDdkIsbUNBQXNDOztJQUN0QyxtQ0FBc0M7O0lBUXRDLHVDQUF3Qzs7SUFDeEMsdUNBQXdDOztJQUN4Qyw4QkFBa0Q7O0lBQ2xELDhCQUFrRDs7SUFDbEQsOEJBQWtEOztJQUVoRCwyQkFBd0I7O0lBQ3hCLDZCQUEyQjs7SUFDM0Isd0JBQXVCOztJQUN2Qiw4QkFBNEI7O0lBQzVCLHdCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMWV9DT01NT05fU1RZTEVTLFxuICBMeUZvY3VzU3RhdGUsXG4gIEx5T3ZlcmxheSxcbiAgTHlUaGVtZTIsXG4gIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYsXG4gIFBsYWNlbWVudCxcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBXaW5TY3JvbGwsXG4gIFhQb3NpdGlvbixcbiAgWVBvc2l0aW9uLFxuICBnZXRQb3NpdGlvblxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuY29uc3QgREVGQVVMVF9QTEFDRU1FTlQgPSBZUG9zaXRpb24uYmVsb3c7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbFxuICB9XG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5VG9vbHRpcF0nLFxuICBleHBvcnRBczogJ2x5VG9vbHRpcCdcbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sdGlwIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfdG9vbHRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB8IG51bGw7XG4gIHByaXZhdGUgX3Rvb2x0aXBPdmVybGF5OiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmO1xuICBwcml2YXRlIF9saXN0ZW5lcnMgPSBuZXcgTWFwPHN0cmluZywgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdD4oKTtcbiAgcHJpdmF0ZSBfc2Nyb2xsU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbFZhbCA9IDA7XG4gIHByaXZhdGUgX3Nob3dUaW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2hpZGVUaW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgnbHlUb29sdGlwJylcbiAgc2V0IHRvb2x0aXAodmFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fdG9vbHRpcCA9IHZhbDtcbiAgfVxuICBnZXQgdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcDtcbiAgfVxuICBASW5wdXQoKSBseVRvb2x0aXBTaG93RGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGx5VG9vbHRpcEhpZGVEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdseVRvb2x0aXBQbGFjZW1lbnQnKSBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcbiAgQElucHV0KCdseVRvb2x0aXBYUG9zaXRpb24nKSB4UG9zaXRpb246IFhQb3NpdGlvbjtcbiAgQElucHV0KCdseVRvb2x0aXBZUG9zaXRpb24nKSB5UG9zaXRpb246IFlQb3NpdGlvbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBmb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgc2Nyb2xsOiBXaW5TY3JvbGxcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBfZWwubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICghUGxhdGZvcm0uSU9TICYmICFQbGF0Zm9ybS5BTkRST0lEKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyc1xuICAgICAgICAgIC5zZXQoJ21vdXNlZW50ZXInLCAoKSA9PiB0aGlzLnNob3coKSlcbiAgICAgICAgICAuc2V0KCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnNldCgndG91Y2hzdGFydCcsICgpID0+IHRoaXMuc2hvdygpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcikpO1xuXG4gICAgICB0aGlzLl9zY3JvbGxTdWIgPSBzY3JvbGwuc2Nyb2xsJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fdG9vbHRpcE92ZXJsYXkpIHtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxWYWwrKztcbiAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmFsID4gMTApIHtcbiAgICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKDApKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZhbCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZm9jdXNTdGF0ZS5saXN0ZW4oZWxlbWVudCkuc3Vic2NyaWJlKGV2ID0+IHtcbiAgICAgICAgaWYgKGV2ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXYgPT0gbnVsbCkge1xuICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucGxhY2VtZW50ICYmICF0aGlzLnhQb3NpdGlvbiAmJiAhdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRoaXMucGxhY2VtZW50ID0gREVGQVVMVF9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5oaWRlKDApO1xuXG4gICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVycyBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4ge1xuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsU3ViKSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KGRlbGF5PzogbnVtYmVyKSB7XG4gICAgZGVsYXkgPSB0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInID8gZGVsYXkgOiB0aGlzLmx5VG9vbHRpcFNob3dEZWxheTtcbiAgICBpZiAodGhpcy5faGlkZVRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy5fdG9vbHRpcE92ZXJsYXkgJiYgdGhpcy50b29sdGlwICYmICF0aGlzLl9zaG93VGltZW91dElkKSB7XG5cbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSA8YW55PnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy50b29sdGlwLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHRvcDogcmVjdC55LFxuICAgICAgICAgICAgbGVmdDogcmVjdC54XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc2VzOiBbXG4gICAgICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnTHlUb29sdGlwJywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICAgICAgLi4udGhlbWUudG9vbHRpcC5yb290LFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9IDMwMG1zYCxcbiAgICAgICAgICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIG51bGwsIG51bGwsIFNUWUxFX1BSSU9SSVRZKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgaG9zdDogdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9zaXRpb24odGhpcy5wbGFjZW1lbnQsIHRoaXMueFBvc2l0aW9uLCB0aGlzLnlQb3NpdGlvbiwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LCB0aGlzLl90aGVtZS5jb25maWcsIDEzKTtcbiAgICAgICAgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsJHtwb3NpdGlvbi55fXB4LDApYDtcblxuICAgICAgICB0aGlzLl90aGVtZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseVRvb2x0aXA6b3BlbicsICh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIH0pLCB0b29sdGlwLmNvbnRhaW5lckVsZW1lbnQsIG51bGwsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoZGVsYXk/OiBudW1iZXIpIHtcbiAgICBjb25zdCB0b29sdGlwT3ZlcmxheSA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5O1xuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJyA/IGRlbGF5IDogdGhpcy5seVRvb2x0aXBIaWRlRGVsYXk7XG4gICAgaWYgKHRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93VGltZW91dElkKTtcbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodG9vbHRpcE92ZXJsYXkgJiYgIXRoaXMuX2hpZGVUaW1lb3V0SWQpIHtcblxuICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IDxhbnk+c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRvb2x0aXBPdmVybGF5LmNvbnRhaW5lckVsZW1lbnQsIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseVRvb2x0aXA6b3BlbicsIG51bGwpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0b29sdGlwT3ZlcmxheS5kZXN0cm95KCksIDMwMCk7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl90b29sdGlwT3ZlcmxheSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19