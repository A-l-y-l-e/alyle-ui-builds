import { Directive, Input, ElementRef, NgZone, ChangeDetectorRef, NgModule } from '@angular/core';
import { LyTheme2, LY_COMMON_STYLES, LyOverlay, Platform, LyFocusState, WindowScrollService } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
     * @param {?} _cd
     * @param {?} focusState
     * @param {?} ngZone
     * @param {?} scroll
     */
    constructor(_theme, _overlay, _el, _cd, focusState, ngZone, scroll) {
        this._theme = _theme;
        this._overlay = _overlay;
        this._el = _el;
        this._cd = _cd;
        this.classes = this._theme.addStyleSheet(styles, STYLE_PRIORITY);
        this._listeners = new Map();
        this.lyTooltipShowDelay = 0;
        this.lyTooltipHideDelay = 1000;
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
                    // this._scrollVal++;
                    // if (this._scrollVal > 10) {
                    ngZone.run(() => this.hide(0));
                    // this._scrollVal = 0;
                    // }
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
                        left: rect.x,
                        pointerEvents: null
                    },
                    classes: [
                        this._theme.addStyle('LyTooltip', (theme) => (Object.assign({ borderRadius: '4px' }, theme.tooltip.root, { fontSize: '10px', padding: '6px 8px', [theme.getBreakpoint('XSmall')]: {
                                padding: '8px 16px',
                                fontSize: '14px',
                            } })))
                    ]
                });
                /** @type {?} */
                const tooltipRect = tooltip.containerElement.getBoundingClientRect();
                tooltip.containerElement.style.transform = `translate3d(${Math.round(rect.width / 2 - tooltipRect.width / 2)}px,${Math.round(rect.height * .2 + rect.height)}px,0px)`;
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
                tooltipOverlay.destroy();
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
    { type: ChangeDetectorRef },
    { type: LyFocusState },
    { type: NgZone },
    { type: WindowScrollService }
];
LyTooltip.propDecorators = {
    tooltip: [{ type: Input, args: ['lyTooltip',] }],
    lyTooltipShowDelay: [{ type: Input }],
    lyTooltipHideDelay: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LyTooltipModule {
}
LyTooltipModule.decorators = [
    { type: NgModule, args: [{
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbHRpcC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Rvb2x0aXAvdG9vbHRpcC50cyIsIm5nOi8vQGFseWxlL3VpL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIE9uRGVzdHJveSwgRWxlbWVudFJlZiwgTmdab25lLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIsIExZX0NPTU1PTl9TVFlMRVMsIEx5T3ZlcmxheSwgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZiwgUGxhdGZvcm0sIEx5Rm9jdXNTdGF0ZSwgVGhlbWVWYXJpYWJsZXMsIFdpbmRvd1Njcm9sbFNlcnZpY2UgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsXG4gIH1cbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlUb29sdGlwXScsXG4gIGV4cG9ydEFzOiAnbHlUb29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2x0aXAgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfdG9vbHRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB8IG51bGw7XG4gIHByaXZhdGUgX3Rvb2x0aXBPdmVybGF5OiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmO1xuICBwcml2YXRlIF9saXN0ZW5lcnMgPSBuZXcgTWFwPHN0cmluZywgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdD4oKTtcbiAgcHJpdmF0ZSBfc2Nyb2xsU3ViOiBTdWJzY3JpcHRpb247XG4gIC8vIHByaXZhdGUgX3Njcm9sbFZhbCA9IDA7XG4gIHByaXZhdGUgX3Nob3dUaW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2hpZGVUaW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgnbHlUb29sdGlwJylcbiAgc2V0IHRvb2x0aXAodmFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fdG9vbHRpcCA9IHZhbDtcbiAgfVxuICBnZXQgdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcDtcbiAgfVxuICBASW5wdXQoKSBseVRvb2x0aXBTaG93RGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGx5VG9vbHRpcEhpZGVEZWxheTogbnVtYmVyID0gMTAwMDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHNjcm9sbDogV2luZG93U2Nyb2xsU2VydmljZVxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IF9lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgaWYgKCFQbGF0Zm9ybS5JT1MgJiYgIVBsYXRmb3JtLkFORFJPSUQpIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzXG4gICAgICAgICAgLnNldCgnbW91c2VlbnRlcicsICgpID0+IHRoaXMuc2hvdygpKVxuICAgICAgICAgIC5zZXQoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMuc2V0KCd0b3VjaHN0YXJ0JywgKCkgPT4gdGhpcy5zaG93KCkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIsIGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKSk7XG5cbiAgICAgIHRoaXMuX3Njcm9sbFN1YiA9IHNjcm9sbC5zY3JvbGwkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl90b29sdGlwT3ZlcmxheSkge1xuICAgICAgICAgIC8vIHRoaXMuX3Njcm9sbFZhbCsrO1xuICAgICAgICAgIC8vIGlmICh0aGlzLl9zY3JvbGxWYWwgPiAxMCkge1xuICAgICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLmhpZGUoMCkpO1xuICAgICAgICAgICAgLy8gdGhpcy5fc2Nyb2xsVmFsID0gMDtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmb2N1c1N0YXRlLmxpc3RlbihlbGVtZW50KS5zdWJzY3JpYmUoZXYgPT4ge1xuICAgICAgICBpZiAoZXYuYnkgPT09ICdrZXlib2FyZCcgJiYgZXYuZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5zaG93KCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2LmV2ZW50LnR5cGUgPT09ICdibHVyJykge1xuICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGUoMCk7XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIHNldCBpbiB0aGUgY29uc3RydWN0b3JcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIsIGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9zY3JvbGxTdWIpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coZGVsYXk/OiBudW1iZXIpIHtcbiAgICBkZWxheSA9IHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgPyBkZWxheSA6IHRoaXMubHlUb29sdGlwU2hvd0RlbGF5O1xuICAgIGlmICh0aGlzLl9oaWRlVGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl90b29sdGlwT3ZlcmxheSAmJiB0aGlzLnRvb2x0aXAgJiYgIXRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcblxuICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IDxhbnk+c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5fdG9vbHRpcE92ZXJsYXkgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLnRvb2x0aXAsIHVuZGVmaW5lZCwge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnksXG4gICAgICAgICAgICBsZWZ0OiByZWN0LngsXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc2VzOiBbXG4gICAgICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnTHlUb29sdGlwJywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICAgICAgLi4udGhlbWUudG9vbHRpcC5yb290LFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXG4gICAgICAgICAgICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRvb2x0aXBSZWN0ID0gdG9vbHRpcC5jb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0b29sdGlwLmNvbnRhaW5lckVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7TWF0aC5yb3VuZChyZWN0LndpZHRoIC8gMiAtIHRvb2x0aXBSZWN0LndpZHRoIC8gMil9cHgsJHtNYXRoLnJvdW5kKHJlY3QuaGVpZ2h0ICogLjIgKyByZWN0LmhlaWdodCl9cHgsMHB4KWA7XG5cbiAgICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoZGVsYXk/OiBudW1iZXIpIHtcbiAgICBjb25zdCB0b29sdGlwT3ZlcmxheSA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5O1xuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJyA/IGRlbGF5IDogdGhpcy5seVRvb2x0aXBIaWRlRGVsYXk7XG4gICAgaWYgKHRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93VGltZW91dElkKTtcbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodG9vbHRpcE92ZXJsYXkgJiYgIXRoaXMuX2hpZGVUaW1lb3V0SWQpIHtcblxuICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IDxhbnk+c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRvb2x0aXBPdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fdG9vbHRpcE92ZXJsYXkgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2hpZGVUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX3Rvb2x0aXBPdmVybGF5KSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0ZvckNoZWNrKCkge1xuICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUb29sdGlwIH0gZnJvbSAnLi90b29sdGlwJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTHlUb29sdGlwXSxcbiAgZXhwb3J0czogW0x5VG9vbHRpcF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sdGlwTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtNQUlNLGNBQWMsR0FBRyxDQUFDLENBQUM7O01BQ25CLE1BQU0sSUFBSTtJQUNkLElBQUksb0JBQ0MsZ0JBQWdCLENBQUMsSUFBSSxDQUN6QjtDQUNGLENBQUM7QUFNRixNQUFhLFNBQVM7Ozs7Ozs7Ozs7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