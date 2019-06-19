import { __assign, __decorate, __metadata } from 'tslib';
import { Input, Directive, ElementRef, Renderer2, ChangeDetectorRef, NgZone, NgModule } from '@angular/core';
import { YPosition, Positioning, LyTheme2, LyOverlay, LyFocusState, WinScroll, LY_COMMON_STYLES, Platform, LyOverlayModule } from '@alyle/ui';

var DEFAULT_PLACEMENT = YPosition.below;
var STYLE_PRIORITY = -2;
var styles = function (theme) { return ({
    $priority: STYLE_PRIORITY,
    root: __assign({}, LY_COMMON_STYLES.fill, { '&': theme.tooltip ? theme.tooltip.root : null })
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
        /** @docs-private */
        this.classes = this._theme.addStyleSheet(styles);
        this._listeners = new Map();
        this._scrollVal = 0;
        this.lyTooltipShowDelay = 0;
        this.lyTooltipHideDelay = 0;
        if (Platform.isBrowser) {
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
            _focusState.listen(element_1).subscribe(function (ev) {
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
        get: function () {
            return this._tooltip;
        },
        set: function (val) {
            this._tooltip = val;
        },
        enumerable: true,
        configurable: true
    });
    LyTooltip.prototype.ngOnInit = function () {
        if (!this.placement && !this.xPosition && !this.yPosition) {
            this.placement = DEFAULT_PLACEMENT;
        }
    };
    LyTooltip.prototype.ngOnDestroy = function () {
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
    LyTooltip.prototype.show = function (delay) {
        var _this = this;
        delay = typeof delay === 'number' ? delay : this.lyTooltipShowDelay;
        if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
            this._hideTimeoutId = null;
        }
        if (!this._tooltipOverlay && this.tooltip && !this._showTimeoutId) {
            var tooltipRef_1 = this.tooltip;
            this._showTimeoutId = setTimeout(function () {
                // const rect = this._el.nativeElement.getBoundingClientRect();
                var tooltip = _this._tooltipOverlay = _this._overlay.create(tooltipRef_1, undefined, {
                    styles: {
                    // top: rect.y,
                    // left: rect.x
                    },
                    onResizeScroll: _this._updatePosition.bind(_this),
                    classes: [
                        _this._theme.addStyle('LyTooltip', function (theme) {
                            var _a;
                            return (__assign({ borderRadius: '4px' }, theme.tooltip.root, (_a = { fontSize: '10px', padding: '6px 8px', opacity: 0, transition: "opacity " + theme.animations.curves.standard + " 300ms", left: 0 }, _a[theme.getBreakpoint('XSmall')] = {
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
            }, delay);
        }
    };
    LyTooltip.prototype.hide = function (delay) {
        var _this = this;
        // return;
        var tooltipOverlay = this._tooltipOverlay;
        delay = typeof delay === 'number' ? delay : this.lyTooltipHideDelay;
        if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
        }
        if (tooltipOverlay && !this._hideTimeoutId) {
            this._hideTimeoutId = setTimeout(function () {
                _this._renderer.removeClass(tooltipOverlay.containerElement, _this._theme.addStyle('lyTooltip:open', null));
                setTimeout(function () { return tooltipOverlay.destroy(); }, 300);
                _this._tooltipOverlay = null;
                _this._hideTimeoutId = null;
                _this._markForCheck();
            }, delay);
        }
    };
    LyTooltip.prototype.toggle = function () {
        if (this._tooltipOverlay) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    LyTooltip.prototype._markForCheck = function () {
        this._cd.markForCheck();
    };
    LyTooltip.prototype._updatePosition = function () {
        var tooltip = this._tooltipOverlay;
        if (tooltip) {
            var position = new Positioning(this.placement, this.xPosition, this.yPosition, this._el.nativeElement, tooltip.containerElement, this._theme.variables, 13);
            tooltip.containerElement.style.transform = "translate3d(" + position.x + "px," + position.y + "px,0)";
        }
    };
    __decorate([
        Input('lyTooltip'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LyTooltip.prototype, "tooltip", null);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], LyTooltip.prototype, "lyTooltipShowDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], LyTooltip.prototype, "lyTooltipHideDelay", void 0);
    __decorate([
        Input('lyTooltipPlacement'),
        __metadata("design:type", String)
    ], LyTooltip.prototype, "placement", void 0);
    __decorate([
        Input('lyTooltipXPosition'),
        __metadata("design:type", String)
    ], LyTooltip.prototype, "xPosition", void 0);
    __decorate([
        Input('lyTooltipYPosition'),
        __metadata("design:type", String)
    ], LyTooltip.prototype, "yPosition", void 0);
    LyTooltip = __decorate([
        Directive({
            selector: '[lyTooltip]',
            exportAs: 'lyTooltip'
        }),
        __metadata("design:paramtypes", [LyTheme2,
            LyOverlay,
            ElementRef,
            Renderer2,
            ChangeDetectorRef,
            LyFocusState,
            NgZone,
            WinScroll])
    ], LyTooltip);
    return LyTooltip;
}());

var LyTooltipModule = /** @class */ (function () {
    function LyTooltipModule() {
    }
    LyTooltipModule = __decorate([
        NgModule({
            imports: [LyOverlayModule],
            declarations: [LyTooltip],
            exports: [LyTooltip]
        })
    ], LyTooltipModule);
    return LyTooltipModule;
}());

export { LyTooltip, LyTooltipModule, ɵ0 };
//# sourceMappingURL=alyle-ui-tooltip.js.map
