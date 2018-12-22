import { __assign } from 'tslib';
import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, Renderer2, NgModule } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyOverlay, LyTheme2, Platform, WinScroll, YPosition, getPosition, LyOverlayModule } from '@alyle/ui';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_PLACEMENT = YPosition.below;
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = ({
    root: __assign({}, LY_COMMON_STYLES.fill)
});
var LyTooltip = /** @class */ (function () {
    function LyTooltip(_theme, _overlay, _el, _renderer, _cd, focusState, ngZone, scroll) {
        var _this = this;
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
                    _this._scrollVal++;
                    if (_this._scrollVal > 10) {
                        ngZone.run(function () { return _this.hide(0); });
                        _this._scrollVal = 0;
                    }
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
    LyTooltip.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.placement && !this.xPosition && !this.yPosition) {
            this.placement = DEFAULT_PLACEMENT;
        }
    };
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
                        left: rect.x
                    },
                    classes: [
                        _this._theme.addStyle('LyTooltip', function (theme) {
                            var _a;
                            return (__assign({ borderRadius: '4px' }, theme.tooltip.root, (_a = { fontSize: '10px', padding: '6px 8px', opacity: 0, transition: "opacity " + theme.animations.curves.standard + " 300ms" }, _a[theme.getBreakpoint('XSmall')] = {
                                padding: '8px 16px',
                                fontSize: '14px',
                            }, _a)));
                        }, null, null, STYLE_PRIORITY)
                    ],
                    host: _this._el.nativeElement,
                });
                /** @type {?} */
                var position = getPosition(_this.placement, _this.xPosition, _this.yPosition, _this._el.nativeElement, tooltip.containerElement, _this._theme.config, 13);
                tooltip.containerElement.style.transform = "translate3d(" + position.x + "px," + position.y + "px,0)";
                _this._theme.requestAnimationFrame(function () {
                    _this._theme.addStyle('lyTooltip:open', ({
                        opacity: 1,
                    }), tooltip.containerElement, null, STYLE_PRIORITY);
                });
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
                _this._renderer.removeClass(tooltipOverlay.containerElement, _this._theme.addStyle('lyTooltip:open', null));
                setTimeout(function () { return tooltipOverlay.destroy(); }, 300);
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
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: LyFocusState },
        { type: NgZone },
        { type: WinScroll }
    ]; };
    LyTooltip.propDecorators = {
        tooltip: [{ type: Input, args: ['lyTooltip',] }],
        lyTooltipShowDelay: [{ type: Input }],
        lyTooltipHideDelay: [{ type: Input }],
        placement: [{ type: Input, args: ['lyTooltipPlacement',] }],
        xPosition: [{ type: Input, args: ['lyTooltipXPosition',] }],
        yPosition: [{ type: Input, args: ['lyTooltipYPosition',] }]
    };
    return LyTooltip;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LyTooltipModule = /** @class */ (function () {
    function LyTooltipModule() {
    }
    LyTooltipModule.decorators = [
        { type: NgModule, args: [{
                    imports: [LyOverlayModule],
                    declarations: [LyTooltip],
                    exports: [LyTooltip]
                },] }
    ];
    return LyTooltipModule;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbHRpcC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Rvb2x0aXAvdG9vbHRpcC50cyIsIm5nOi8vQGFseWxlL3VpL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlPdmVybGF5LFxuICBMeVRoZW1lMixcbiAgT3ZlcmxheUZyb21UZW1wbGF0ZVJlZixcbiAgUGxhY2VtZW50LFxuICBQbGF0Zm9ybSxcbiAgVGhlbWVWYXJpYWJsZXMsXG4gIFdpblNjcm9sbCxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIGdldFBvc2l0aW9uXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBERUZBVUxUX1BMQUNFTUVOVCA9IFlQb3NpdGlvbi5iZWxvdztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsXG4gIH1cbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlUb29sdGlwXScsXG4gIGV4cG9ydEFzOiAnbHlUb29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2x0aXAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF90b29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbDtcbiAgcHJpdmF0ZSBfdG9vbHRpcE92ZXJsYXk6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWY7XG4gIHByaXZhdGUgX2xpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0PigpO1xuICBwcml2YXRlIF9zY3JvbGxTdWI6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfc2Nyb2xsVmFsID0gMDtcbiAgcHJpdmF0ZSBfc2hvd1RpbWVvdXRJZDogbnVtYmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBfaGlkZVRpbWVvdXRJZDogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCdseVRvb2x0aXAnKVxuICBzZXQgdG9vbHRpcCh2YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzLl90b29sdGlwID0gdmFsO1xuICB9XG4gIGdldCB0b29sdGlwKCkge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwO1xuICB9XG4gIEBJbnB1dCgpIGx5VG9vbHRpcFNob3dEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbHlUb29sdGlwSGlkZURlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2x5VG9vbHRpcFBsYWNlbWVudCcpIHBsYWNlbWVudDogUGxhY2VtZW50O1xuICBASW5wdXQoJ2x5VG9vbHRpcFhQb3NpdGlvbicpIHhQb3NpdGlvbjogWFBvc2l0aW9uO1xuICBASW5wdXQoJ2x5VG9vbHRpcFlQb3NpdGlvbicpIHlQb3NpdGlvbjogWVBvc2l0aW9uO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBzY3JvbGw6IFdpblNjcm9sbFxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IF9lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgaWYgKCFQbGF0Zm9ybS5JT1MgJiYgIVBsYXRmb3JtLkFORFJPSUQpIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzXG4gICAgICAgICAgLnNldCgnbW91c2VlbnRlcicsICgpID0+IHRoaXMuc2hvdygpKVxuICAgICAgICAgIC5zZXQoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMuc2V0KCd0b3VjaHN0YXJ0JywgKCkgPT4gdGhpcy5zaG93KCkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIsIGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKSk7XG5cbiAgICAgIHRoaXMuX3Njcm9sbFN1YiA9IHNjcm9sbC5zY3JvbGwkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl90b29sdGlwT3ZlcmxheSkge1xuICAgICAgICAgIHRoaXMuX3Njcm9sbFZhbCsrO1xuICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWYWwgPiAxMCkge1xuICAgICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLmhpZGUoMCkpO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmFsID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmb2N1c1N0YXRlLmxpc3RlbihlbGVtZW50KS5zdWJzY3JpYmUoZXYgPT4ge1xuICAgICAgICBpZiAoZXYuYnkgPT09ICdrZXlib2FyZCcgJiYgZXYuZXZlbnQudHlwZSA9PT0gJ2ZvY3VzJykge1xuICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5zaG93KCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2LmV2ZW50LnR5cGUgPT09ICdibHVyJykge1xuICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucGxhY2VtZW50ICYmICF0aGlzLnhQb3NpdGlvbiAmJiAhdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRoaXMucGxhY2VtZW50ID0gREVGQVVMVF9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5oaWRlKDApO1xuXG4gICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVycyBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4ge1xuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsU3ViKSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KGRlbGF5PzogbnVtYmVyKSB7XG4gICAgZGVsYXkgPSB0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInID8gZGVsYXkgOiB0aGlzLmx5VG9vbHRpcFNob3dEZWxheTtcbiAgICBpZiAodGhpcy5faGlkZVRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy5fdG9vbHRpcE92ZXJsYXkgJiYgdGhpcy50b29sdGlwICYmICF0aGlzLl9zaG93VGltZW91dElkKSB7XG5cbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSA8YW55PnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy50b29sdGlwLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHRvcDogcmVjdC55LFxuICAgICAgICAgICAgbGVmdDogcmVjdC54XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc2VzOiBbXG4gICAgICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnTHlUb29sdGlwJywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICAgICAgLi4udGhlbWUudG9vbHRpcC5yb290LFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9IDMwMG1zYCxcbiAgICAgICAgICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIG51bGwsIG51bGwsIFNUWUxFX1BSSU9SSVRZKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgaG9zdDogdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9zaXRpb24odGhpcy5wbGFjZW1lbnQsIHRoaXMueFBvc2l0aW9uLCB0aGlzLnlQb3NpdGlvbiwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LCB0aGlzLl90aGVtZS5jb25maWcsIDEzKTtcbiAgICAgICAgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsJHtwb3NpdGlvbi55fXB4LDApYDtcblxuICAgICAgICB0aGlzLl90aGVtZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseVRvb2x0aXA6b3BlbicsICh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIH0pLCB0b29sdGlwLmNvbnRhaW5lckVsZW1lbnQsIG51bGwsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoZGVsYXk/OiBudW1iZXIpIHtcbiAgICBjb25zdCB0b29sdGlwT3ZlcmxheSA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5O1xuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJyA/IGRlbGF5IDogdGhpcy5seVRvb2x0aXBIaWRlRGVsYXk7XG4gICAgaWYgKHRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93VGltZW91dElkKTtcbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodG9vbHRpcE92ZXJsYXkgJiYgIXRoaXMuX2hpZGVUaW1lb3V0SWQpIHtcblxuICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IDxhbnk+c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRvb2x0aXBPdmVybGF5LmNvbnRhaW5lckVsZW1lbnQsIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseVRvb2x0aXA6b3BlbicsIG51bGwpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0b29sdGlwT3ZlcmxheS5kZXN0cm95KCksIDMwMCk7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl90b29sdGlwT3ZlcmxheSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VG9vbHRpcCB9IGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgeyBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTHlPdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUb29sdGlwXSxcbiAgZXhwb3J0czogW0x5VG9vbHRpcF1cbn0pXG5leHBv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