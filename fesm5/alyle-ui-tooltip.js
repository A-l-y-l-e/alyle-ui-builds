import { __assign } from 'tslib';
import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, NgModule } from '@angular/core';
import { LY_COMMON_STYLES, LyFocusState, LyOverlay, LyTheme2, Platform, WindowScrollService, YPosition, getPosition, LyOverlayModule } from '@alyle/ui';

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
    function LyTooltip(_theme, _overlay, _el, _cd, focusState, ngZone, scroll) {
        var _this = this;
        this._theme = _theme;
        this._overlay = _overlay;
        this._el = _el;
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
                            return (__assign({ borderRadius: '4px' }, theme.tooltip.root, (_a = { fontSize: '10px', padding: '6px 8px' }, _a[theme.getBreakpoint('XSmall')] = {
                                padding: '8px 16px',
                                fontSize: '14px',
                            }, _a)));
                        })
                    ],
                    host: _this._el.nativeElement,
                });
                /** @type {?} */
                var position = getPosition(_this.placement, _this.xPosition, _this.yPosition, _this._el.nativeElement, tooltip.containerElement, _this._theme.config, 7);
                tooltip.containerElement.style.transform = "translate3d(" + position.x + "px," + position.y + "px,0px)";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbHRpcC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3Rvb2x0aXAvdG9vbHRpcC50cyIsIm5nOi8vQGFseWxlL3VpL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0XG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMWV9DT01NT05fU1RZTEVTLFxuICBMeUZvY3VzU3RhdGUsXG4gIEx5T3ZlcmxheSxcbiAgTHlUaGVtZTIsXG4gIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYsXG4gIFBsYWNlbWVudCxcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBXaW5kb3dTY3JvbGxTZXJ2aWNlLFxuICBYUG9zaXRpb24sXG4gIFlQb3NpdGlvbixcbiAgZ2V0UG9zaXRpb25cbiAgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IERFRkFVTFRfUExBQ0VNRU5UID0gWVBvc2l0aW9uLmJlbG93O1xuY29uc3QgU1RZTEVfUFJJT1JJVFkgPSAtMjtcbmNvbnN0IHN0eWxlcyA9ICh7XG4gIHJvb3Q6IHtcbiAgICAuLi5MWV9DT01NT05fU1RZTEVTLmZpbGxcbiAgfVxufSk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICdseVRvb2x0aXAnXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbHRpcCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX3RoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCBTVFlMRV9QUklPUklUWSk7XG4gIHByaXZhdGUgX3Rvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsO1xuICBwcml2YXRlIF90b29sdGlwT3ZlcmxheTogT3ZlcmxheUZyb21UZW1wbGF0ZVJlZjtcbiAgcHJpdmF0ZSBfbGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3Q+KCk7XG4gIHByaXZhdGUgX3Njcm9sbFN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9zY3JvbGxWYWwgPSAwO1xuICBwcml2YXRlIF9zaG93VGltZW91dElkOiBudW1iZXIgfCBudWxsO1xuICBwcml2YXRlIF9oaWRlVGltZW91dElkOiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoJ2x5VG9vbHRpcCcpXG4gIHNldCB0b29sdGlwKHZhbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMuX3Rvb2x0aXAgPSB2YWw7XG4gIH1cbiAgZ2V0IHRvb2x0aXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG4gIH1cbiAgQElucHV0KCkgbHlUb29sdGlwU2hvd0RlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBseVRvb2x0aXBIaWRlRGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnbHlUb29sdGlwUGxhY2VtZW50JykgcGxhY2VtZW50OiBQbGFjZW1lbnQ7XG4gIEBJbnB1dCgnbHlUb29sdGlwWFBvc2l0aW9uJykgeFBvc2l0aW9uOiBYUG9zaXRpb247XG4gIEBJbnB1dCgnbHlUb29sdGlwWVBvc2l0aW9uJykgeVBvc2l0aW9uOiBZUG9zaXRpb247XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMixcbiAgICBwcml2YXRlIF9vdmVybGF5OiBMeU92ZXJsYXksXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGZvY3VzU3RhdGU6IEx5Rm9jdXNTdGF0ZSxcbiAgICBuZ1pvbmU6IE5nWm9uZSxcbiAgICBzY3JvbGw6IFdpbmRvd1Njcm9sbFNlcnZpY2VcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBfZWwubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICghUGxhdGZvcm0uSU9TICYmICFQbGF0Zm9ybS5BTkRST0lEKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyc1xuICAgICAgICAgIC5zZXQoJ21vdXNlZW50ZXInLCAoKSA9PiB0aGlzLnNob3coKSlcbiAgICAgICAgICAuc2V0KCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnNldCgndG91Y2hzdGFydCcsICgpID0+IHRoaXMuc2hvdygpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcikpO1xuXG4gICAgICB0aGlzLl9zY3JvbGxTdWIgPSBzY3JvbGwuc2Nyb2xsJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fdG9vbHRpcE92ZXJsYXkpIHtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxWYWwrKztcbiAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmFsID4gMTApIHtcbiAgICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKDApKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZhbCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZm9jdXNTdGF0ZS5saXN0ZW4oZWxlbWVudCkuc3Vic2NyaWJlKGV2ID0+IHtcbiAgICAgICAgaWYgKGV2LmJ5ID09PSAna2V5Ym9hcmQnICYmIGV2LmV2ZW50LnR5cGUgPT09ICdmb2N1cycpIHtcbiAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuc2hvdygpKTtcbiAgICAgICAgfSBlbHNlIGlmIChldi5ldmVudC50eXBlID09PSAnYmx1cicpIHtcbiAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnBsYWNlbWVudCAmJiAhdGhpcy54UG9zaXRpb24gJiYgIXRoaXMueVBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnBsYWNlbWVudCA9IERFRkFVTFRfUExBQ0VNRU5UO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaGlkZSgwKTtcblxuICAgIC8vIENsZWFuIHVwIHRoZSBldmVudCBsaXN0ZW5lcnMgc2V0IGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lciwgZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX3Njcm9sbFN1Yikge1xuICAgICAgdGhpcy5fc2Nyb2xsU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhkZWxheT86IG51bWJlcikge1xuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJyA/IGRlbGF5IDogdGhpcy5seVRvb2x0aXBTaG93RGVsYXk7XG4gICAgaWYgKHRoaXMuX2hpZGVUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaWRlVGltZW91dElkKTtcbiAgICAgIHRoaXMuX2hpZGVUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3Rvb2x0aXBPdmVybGF5ICYmIHRoaXMudG9vbHRpcCAmJiAhdGhpcy5fc2hvd1RpbWVvdXRJZCkge1xuXG4gICAgICB0aGlzLl9zaG93VGltZW91dElkID0gPGFueT5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLl90b29sdGlwT3ZlcmxheSA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMudG9vbHRpcCwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICB0b3A6IHJlY3QueSxcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QueFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhc3NlczogW1xuICAgICAgICAgICAgdGhpcy5fdGhlbWUuYWRkU3R5bGUoJ0x5VG9vbHRpcCcsICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpID0+ICh7XG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgICAgIC4uLnRoZW1lLnRvb2x0aXAucm9vdCxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCA4cHgnLFxuICAgICAgICAgICAgICBbdGhlbWUuZ2V0QnJlYWtwb2ludCgnWFNtYWxsJyldOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIGhvc3Q6IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvc2l0aW9uKHRoaXMucGxhY2VtZW50LCB0aGlzLnhQb3NpdGlvbiwgdGhpcy55UG9zaXRpb24sIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudCwgdGhpcy5fdGhlbWUuY29uZmlnLCA3KTtcbiAgICAgICAgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsJHtwb3NpdGlvbi55fXB4LDBweClgO1xuXG4gICAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG4gIH1cblxuICBoaWRlKGRlbGF5PzogbnVtYmVyKSB7XG4gICAgY29uc3QgdG9vbHRpcE92ZXJsYXkgPSB0aGlzLl90b29sdGlwT3ZlcmxheTtcbiAgICBkZWxheSA9IHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgPyBkZWxheSA6IHRoaXMubHlUb29sdGlwSGlkZURlbGF5O1xuICAgIGlmICh0aGlzLl9zaG93VGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd1RpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9zaG93VGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRvb2x0aXBPdmVybGF5ICYmICF0aGlzLl9oaWRlVGltZW91dElkKSB7XG5cbiAgICAgIHRoaXMuX2hpZGVUaW1lb3V0SWQgPSA8YW55PnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0b29sdGlwT3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl90b29sdGlwT3ZlcmxheSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VG9vbHRpcCB9IGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgeyBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTHlPdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUb29sdGlwXSxcbiAgZXhwb3J0czogW0x5VG9vbHRpcF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sdGlwTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQTBCTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsS0FBSzs7SUFDbkMsY0FBYyxHQUFHLENBQUMsQ0FBQzs7SUFDbkIsTUFBTSxJQUFJO0lBQ2QsSUFBSSxlQUNDLGdCQUFnQixDQUFDLElBQUksQ0FDekI7Q0FDRixDQUFDO0FBRUY7SUEwQkUsbUJBQ1UsTUFBZ0IsRUFDaEIsUUFBbUIsRUFDbkIsR0FBZSxFQUNmLEdBQXNCLEVBQzlCLFVBQXdCLEVBQ3hCLE1BQWMsRUFDZCxNQUEyQjtRQVA3QixpQkF1Q0M7UUF0Q1MsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQXhCdkIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUc3RCxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQThDLENBQUM7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