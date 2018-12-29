import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, Renderer2, NgModule } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyOverlay, LyTheme2, Platform, WinScroll, YPosition, getPosition, LyOverlayModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_PLACEMENT = YPosition.below;
/** @type {?} */
const STYLE_PRIORITY = -2;
/** @type {?} */
const styles = ({
    root: Object.assign({}, LY_COMMON_STYLES.fill)
});
class LyTooltip {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyTooltipModule {
}
LyTooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [LyOverlayModule],
                declarations: [LyTooltip],
                exports: [LyTooltip]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LyTooltip, LyTooltipModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbHRpcC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Rvb2x0aXAvdG9vbHRpcC50cyIsIm5nOi8vQGFseWxlL3VpL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlPdmVybGF5LFxuICBMeVRoZW1lMixcbiAgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZixcbiAgUGxhY2VtZW50LFxuICBQbGF0Zm9ybSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFdpblNjcm9sbCxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIGdldFBvc2l0aW9uXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBERUZBVUxUX1BMQUNFTUVOVCA9IFlQb3NpdGlvbi5iZWxvdztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsXG4gIH1cbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlUb29sdGlwXScsXG4gIGV4cG9ydEFzOiAnbHlUb29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2x0aXAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF90b29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbDtcbiAgcHJpdmF0ZSBfdG9vbHRpcE92ZXJsYXk6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWY7XG4gIHByaXZhdGUgX2xpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0PigpO1xuICBwcml2YXRlIF9zY3JvbGxTdWI6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfc2Nyb2xsVmFsID0gMDtcbiAgcHJpdmF0ZSBfc2hvd1RpbWVvdXRJZDogbnVtYmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBfaGlkZVRpbWVvdXRJZDogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCdseVRvb2x0aXAnKVxuICBzZXQgdG9vbHRpcCh2YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzLl90b29sdGlwID0gdmFsO1xuICB9XG4gIGdldCB0b29sdGlwKCkge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwO1xuICB9XG4gIEBJbnB1dCgpIGx5VG9vbHRpcFNob3dEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbHlUb29sdGlwSGlkZURlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2x5VG9vbHRpcFBsYWNlbWVudCcpIHBsYWNlbWVudDogUGxhY2VtZW50O1xuICBASW5wdXQoJ2x5VG9vbHRpcFhQb3NpdGlvbicpIHhQb3NpdGlvbjogWFBvc2l0aW9uO1xuICBASW5wdXQoJ2x5VG9vbHRpcFlQb3NpdGlvbicpIHlQb3NpdGlvbjogWVBvc2l0aW9uO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBzY3JvbGw6IFdpblNjcm9sbFxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IF9lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgaWYgKCFQbGF0Zm9ybS5JT1MgJiYgIVBsYXRmb3JtLkFORFJPSUQpIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzXG4gICAgICAgICAgLnNldCgnbW91c2VlbnRlcicsICgpID0+IHRoaXMuc2hvdygpKVxuICAgICAgICAgIC5zZXQoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMuc2V0KCd0b3VjaHN0YXJ0JywgKCkgPT4gdGhpcy5zaG93KCkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIsIGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKSk7XG5cbiAgICAgIHRoaXMuX3Njcm9sbFN1YiA9IHNjcm9sbC5zY3JvbGwkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl90b29sdGlwT3ZlcmxheSkge1xuICAgICAgICAgIHRoaXMuX3Njcm9sbFZhbCsrO1xuICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWYWwgPiAxMCkge1xuICAgICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLmhpZGUoMCkpO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmFsID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmb2N1c1N0YXRlLmxpc3RlbihlbGVtZW50KS5zdWJzY3JpYmUoZXYgPT4ge1xuICAgICAgICBpZiAoZXYgPT09ICdrZXlib2FyZCcpIHtcbiAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuc2hvdygpKTtcbiAgICAgICAgfSBlbHNlIGlmIChldiA9PSBudWxsKSB7XG4gICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5wbGFjZW1lbnQgJiYgIXRoaXMueFBvc2l0aW9uICYmICF0aGlzLnlQb3NpdGlvbikge1xuICAgICAgdGhpcy5wbGFjZW1lbnQgPSBERUZBVUxUX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGUoMCk7XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIHNldCBpbiB0aGUgY29uc3RydWN0b3JcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIsIGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9zY3JvbGxTdWIpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coZGVsYXk/OiBudW1iZXIpIHtcbiAgICBkZWxheSA9IHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgPyBkZWxheSA6IHRoaXMubHlUb29sdGlwU2hvd0RlbGF5O1xuICAgIGlmICh0aGlzLl9oaWRlVGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl90b29sdGlwT3ZlcmxheSAmJiB0aGlzLnRvb2x0aXAgJiYgIXRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcblxuICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IDxhbnk+c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5fdG9vbHRpcE92ZXJsYXkgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLnRvb2x0aXAsIHVuZGVmaW5lZCwge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnksXG4gICAgICAgICAgICBsZWZ0OiByZWN0LnhcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzZXM6IFtcbiAgICAgICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdMeVRvb2x0aXAnLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgICAuLi50aGVtZS50b29sdGlwLnJvb3QsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGVtZS5hbmltYXRpb25zLmN1cnZlcy5zdGFuZGFyZH0gMzAwbXNgLFxuICAgICAgICAgICAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSwgbnVsbCwgbnVsbCwgU1RZTEVfUFJJT1JJVFkpXG4gICAgICAgICAgXSxcbiAgICAgICAgICBob3N0OiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb3NpdGlvbih0aGlzLnBsYWNlbWVudCwgdGhpcy54UG9zaXRpb24sIHRoaXMueVBvc2l0aW9uLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0b29sdGlwLmNvbnRhaW5lckVsZW1lbnQsIHRoaXMuX3RoZW1lLmNvbmZpZywgMTMpO1xuICAgICAgICB0b29sdGlwLmNvbnRhaW5lckVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7cG9zaXRpb24ueH1weCwke3Bvc2l0aW9uLnl9cHgsMClgO1xuXG4gICAgICAgIHRoaXMuX3RoZW1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2x5VG9vbHRpcDpvcGVuJywgKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgfSksIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudCwgbnVsbCwgU1RZTEVfUFJJT1JJVFkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9zaG93VGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZShkZWxheT86IG51bWJlcikge1xuICAgIGNvbnN0IHRvb2x0aXBPdmVybGF5ID0gdGhpcy5fdG9vbHRpcE92ZXJsYXk7XG4gICAgZGVsYXkgPSB0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInID8gZGVsYXkgOiB0aGlzLmx5VG9vbHRpcEhpZGVEZWxheTtcbiAgICBpZiAodGhpcy5fc2hvd1RpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0b29sdGlwT3ZlcmxheSAmJiAhdGhpcy5faGlkZVRpbWVvdXRJZCkge1xuXG4gICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gPGFueT5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModG9vbHRpcE92ZXJsYXkuY29udGFpbmVyRWxlbWVudCwgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ2x5VG9vbHRpcDpvcGVuJywgbnVsbCkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRvb2x0aXBPdmVybGF5LmRlc3Ryb3koKSwgMzAwKTtcbiAgICAgICAgdGhpcy5fdG9vbHRpcE92ZXJsYXkgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2hpZGVUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBPdmVybGF5KSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUb29sdGlwIH0gZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCB7IEx5T3ZlcmxheU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtMeU92ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVRvb2x0aXBdLFxuICBleHBvcnRzOiBbTHlUb29sdGlwXVxufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2x0aXBNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJt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