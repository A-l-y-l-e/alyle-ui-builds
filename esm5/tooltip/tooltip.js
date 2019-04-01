/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyOverlay, LyTheme2, Platform, WinScroll, XPosition, YPosition, Positioning } from '@alyle/ui';
/** @type {?} */
var DEFAULT_PLACEMENT = YPosition.below;
/** @type {?} */
var STYLE_PRIORITY = -2;
/** @type {?} */
var styles = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: tslib_1.__assign({}, LY_COMMON_STYLES.fill, { '&': theme.tooltip ? theme.tooltip.root : null })
}); };
var ɵ0 = styles;
var LyTooltip = /** @class */ (function () {
    function LyTooltip(_theme, _overlay, _el, _renderer, _cd, _focusState, ngZone, scroll) {
        var _this = this;
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
            (/** @type {?} */ (_focusState.listen(element_1))).subscribe(function (ev) {
                if (ev === 'keyboard') {
                    ngZone.run(function () { return _this.show(); });
                }
                else if (ev == null) {
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
        this._focusState.unlisten(this._el);
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
            /** @type {?} */
            var tooltipRef_1 = this.tooltip;
            this._showTimeoutId = (/** @type {?} */ (setTimeout(function () {
                // const rect = this._el.nativeElement.getBoundingClientRect();
                /** @type {?} */
                var tooltip = _this._tooltipOverlay = _this._overlay.create(tooltipRef_1, undefined, {
                    styles: {
                    // top: rect.y,
                    // left: rect.x
                    },
                    onResizeScroll: _this._updatePosition.bind(_this),
                    classes: [
                        _this._theme.addStyle('LyTooltip', function (theme) {
                            var _a;
                            return (tslib_1.__assign({ borderRadius: '4px' }, theme.tooltip.root, (_a = { fontSize: '10px', padding: '6px 8px', opacity: 0, transition: "opacity " + theme.animations.curves.standard + " 300ms" }, _a[theme.getBreakpoint('XSmall')] = {
                                padding: '8px 16px',
                                fontSize: '14px',
                            }, _a)));
                        }, undefined, undefined, STYLE_PRIORITY)
                    ],
                    hasBackdrop: false
                });
                _this._updatePosition();
                // const position = new Positioning(this.placement, this.xPosition, this.yPosition, this._el.nativeElement, tooltip.containerElement, this._theme.variables, 13);
                // tooltip.containerElement.style.transform = `translate3d(${position.x}px,${position.y}px,0)`;
                _this._theme.requestAnimationFrame(function () {
                    _this._theme.addStyle('lyTooltip:open', ({
                        opacity: 1,
                    }), tooltip.containerElement, undefined, STYLE_PRIORITY);
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
     * @private
     * @return {?}
     */
    LyTooltip.prototype._markForCheck = /**
     * @private
     * @return {?}
     */
    function () {
        this._cd.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    LyTooltip.prototype._updatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tooltip = this._tooltipOverlay;
        if (tooltip) {
            /** @type {?} */
            var position = new Positioning(this.placement, this.xPosition, this.yPosition, this._el.nativeElement, tooltip.containerElement, this._theme.variables, 13);
            tooltip.containerElement.style.transform = "translate3d(" + position.x + "px," + position.y + "px,0)";
        }
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
export { LyTooltip };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFDUixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixTQUFTLEVBQ1QsUUFBUSxFQUdSLFFBQVEsRUFFUixTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1YsTUFBTSxXQUFXLENBQUM7O0lBR2YsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUs7O0lBQ25DLGNBQWMsR0FBRyxDQUFDLENBQUM7O0lBQ25CLE1BQU0sR0FBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxDQUFDO0lBQ3pDLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLElBQUksdUJBQ0MsZ0JBQWdCLENBQUMsSUFBSSxJQUN4QixHQUFHLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FDL0M7Q0FDRixDQUFDLEVBTndDLENBTXhDOztBQUVGO0lBMEJFLG1CQUNVLE1BQWdCLEVBQ2hCLFFBQW1CLEVBQ25CLEdBQWUsRUFDZixTQUFvQixFQUNwQixHQUFzQixFQUN0QixXQUF5QixFQUNqQyxNQUFjLEVBQ2QsTUFBaUI7UUFSbkIsaUJBd0NDO1FBdkNTLFdBQU0sR0FBTixNQUFNLENBQVU7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixnQkFBVyxHQUFYLFdBQVcsQ0FBYzs7OztRQTFC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O0lBQzVCLHdCQUE4Qjs7Ozs7SUFDOUIsZ0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIExZX0NPTU1PTl9TVFlMRVMsXG4gIEx5Rm9jdXNTdGF0ZSxcbiAgTHlPdmVybGF5LFxuICBMeVRoZW1lMixcbiAgT3ZlcmxheUZhY3RvcnksXG4gIFBsYWNlbWVudCxcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBXaW5TY3JvbGwsXG4gIFhQb3NpdGlvbixcbiAgWVBvc2l0aW9uLFxuICBQb3NpdGlvbmluZ1xuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuY29uc3QgREVGQVVMVF9QTEFDRU1FTlQgPSBZUG9zaXRpb24uYmVsb3c7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgJHByaW9yaXR5OiBTVFlMRV9QUklPUklUWSxcbiAgcm9vdDoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICAnJic6IHRoZW1lLnRvb2x0aXAgPyB0aGVtZS50b29sdGlwLnJvb3QgOiBudWxsXG4gIH1cbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlUb29sdGlwXScsXG4gIGV4cG9ydEFzOiAnbHlUb29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2x0aXAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG4gIHByaXZhdGUgX3Rvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsO1xuICBwcml2YXRlIF90b29sdGlwT3ZlcmxheTogT3ZlcmxheUZhY3RvcnkgfCBudWxsO1xuICBwcml2YXRlIF9saXN0ZW5lcnMgPSBuZXcgTWFwPHN0cmluZywgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdD4oKTtcbiAgcHJpdmF0ZSBfc2Nyb2xsU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbFZhbCA9IDA7XG4gIHByaXZhdGUgX3Nob3dUaW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2hpZGVUaW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgnbHlUb29sdGlwJylcbiAgc2V0IHRvb2x0aXAodmFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbCkge1xuICAgIHRoaXMuX3Rvb2x0aXAgPSB2YWw7XG4gIH1cbiAgZ2V0IHRvb2x0aXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG4gIH1cbiAgQElucHV0KCkgbHlUb29sdGlwU2hvd0RlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBseVRvb2x0aXBIaWRlRGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnbHlUb29sdGlwUGxhY2VtZW50JykgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG4gIEBJbnB1dCgnbHlUb29sdGlwWFBvc2l0aW9uJykgeFBvc2l0aW9uOiBYUG9zaXRpb247XG4gIEBJbnB1dCgnbHlUb29sdGlwWVBvc2l0aW9uJykgeVBvc2l0aW9uOiBZUG9zaXRpb247XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9vdmVybGF5OiBMeU92ZXJsYXksXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZm9jdXNTdGF0ZTogTHlGb2N1c1N0YXRlLFxuICAgIG5nWm9uZTogTmdab25lLFxuICAgIHNjcm9sbDogV2luU2Nyb2xsXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoIVBsYXRmb3JtLklPUyAmJiAhUGxhdGZvcm0uQU5EUk9JRCkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnNcbiAgICAgICAgICAuc2V0KCdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5zaG93KCkpXG4gICAgICAgICAgLnNldCgnbW91c2VsZWF2ZScsICgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5zZXQoJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lciwgZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpKTtcblxuICAgICAgdGhpcy5fc2Nyb2xsU3ViID0gc2Nyb2xsLnNjcm9sbCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBPdmVybGF5KSB7XG4gICAgICAgICAgdGhpcy5fc2Nyb2xsVmFsKys7XG4gICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZhbCA+IDEwKSB7XG4gICAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuaGlkZSgwKSk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWYWwgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF9mb2N1c1N0YXRlLmxpc3RlbihlbGVtZW50KSEuc3Vic2NyaWJlKGV2ID0+IHtcbiAgICAgICAgaWYgKGV2ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXYgPT0gbnVsbCkge1xuICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucGxhY2VtZW50ICYmICF0aGlzLnhQb3NpdGlvbiAmJiAhdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRoaXMucGxhY2VtZW50ID0gREVGQVVMVF9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5oaWRlKDApO1xuXG4gICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVycyBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4ge1xuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsU3ViKSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c1N0YXRlLnVubGlzdGVuKHRoaXMuX2VsKTtcbiAgfVxuXG4gIHNob3coZGVsYXk/OiBudW1iZXIpIHtcbiAgICBkZWxheSA9IHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgPyBkZWxheSA6IHRoaXMubHlUb29sdGlwU2hvd0RlbGF5O1xuICAgIGlmICh0aGlzLl9oaWRlVGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl90b29sdGlwT3ZlcmxheSAmJiB0aGlzLnRvb2x0aXAgJiYgIXRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcbiAgICAgIGNvbnN0IHRvb2x0aXBSZWYgPSB0aGlzLnRvb2x0aXA7XG5cbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSA8YW55PnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBjb25zdCByZWN0ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodG9vbHRpcFJlZiwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAvLyB0b3A6IHJlY3QueSxcbiAgICAgICAgICAgIC8vIGxlZnQ6IHJlY3QueFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25SZXNpemVTY3JvbGw6IHRoaXMuX3VwZGF0ZVBvc2l0aW9uLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xhc3NlczogW1xuICAgICAgICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ0x5VG9vbHRpcCcsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICAgIC4uLnRoZW1lLnRvb2x0aXAucm9vdCxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCA4cHgnLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke3RoZW1lLmFuaW1hdGlvbnMuY3VydmVzLnN0YW5kYXJkfSAzMDBtc2AsXG4gICAgICAgICAgICAgIFt0aGVtZS5nZXRCcmVha3BvaW50KCdYU21hbGwnKV06IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU1RZTEVfUFJJT1JJVFkpXG4gICAgICAgICAgXSxcbiAgICAgICAgICBoYXNCYWNrZHJvcDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIC8vIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uaW5nKHRoaXMucGxhY2VtZW50LCB0aGlzLnhQb3NpdGlvbiwgdGhpcy55UG9zaXRpb24sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudCwgdGhpcy5fdGhlbWUudmFyaWFibGVzLCAxMyk7XG4gICAgICAgIC8vIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbi54fXB4LCR7cG9zaXRpb24ueX1weCwwKWA7XG5cbiAgICAgICAgdGhpcy5fdGhlbWUucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnbHlUb29sdGlwOm9wZW4nLCAoe1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB9KSwgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LCB1bmRlZmluZWQsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoZGVsYXk/OiBudW1iZXIpIHtcbiAgICBjb25zdCB0b29sdGlwT3ZlcmxheSA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5O1xuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJyA/IGRlbGF5IDogdGhpcy5seVRvb2x0aXBIaWRlRGVsYXk7XG4gICAgaWYgKHRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93VGltZW91dElkKTtcbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodG9vbHRpcE92ZXJsYXkgJiYgIXRoaXMuX2hpZGVUaW1lb3V0SWQpIHtcblxuICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IDxhbnk+c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRvb2x0aXBPdmVybGF5LmNvbnRhaW5lckVsZW1lbnQsIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseVRvb2x0aXA6b3BlbicsIG51bGwpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0b29sdGlwT3ZlcmxheS5kZXN0cm95KCksIDMwMCk7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl90b29sdGlwT3ZlcmxheSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLl90b29sdGlwT3ZlcmxheTtcbiAgICBpZiAodG9vbHRpcCkge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb25pbmcoXG4gICAgICAgIHRoaXMucGxhY2VtZW50LCB0aGlzLnhQb3NpdGlvbixcbiAgICAgICAgdGhpcy55UG9zaXRpb24sXG4gICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudCxcbiAgICAgICAgdGhpcy5fdGhlbWUudmFyaWFibGVzLFxuICAgICAgICAxM1xuICAgICAgKTtcbiAgICAgIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbi54fXB4LCR7cG9zaXRpb24ueX1weCwwKWA7XG4gICAgfVxuICB9XG59XG4iXX0=