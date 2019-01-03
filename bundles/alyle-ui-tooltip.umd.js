(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@alyle/ui')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/tooltip', ['exports', '@angular/core', '@alyle/ui'], factory) :
    (factory((global.ly = global.ly || {}, global.ly.tooltip = {}),global.ng.core,global.ly.core));
}(this, (function (exports,core,ui) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_PLACEMENT = ui.YPosition.below;
    /** @type {?} */
    var STYLE_PRIORITY = -2;
    /** @type {?} */
    var styles = ({
        root: __assign({}, ui.LY_COMMON_STYLES.fill)
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
            if (ui.Platform.isBrowser) {
                /** @type {?} */
                var element_1 = _el.nativeElement;
                if (!ui.Platform.IOS && !ui.Platform.ANDROID) {
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
             */ function () {
                return this._tooltip;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
                    this._showTimeoutId = ( /** @type {?} */(setTimeout(function () {
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
                        var position = ui.getPosition(_this.placement, _this.xPosition, _this.yPosition, _this._el.nativeElement, tooltip.containerElement, _this._theme.config, 13);
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
                    this._hideTimeoutId = ( /** @type {?} */(setTimeout(function () {
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
            { type: core.Directive, args: [{
                        selector: '[lyTooltip]',
                        exportAs: 'lyTooltip'
                    },] }
        ];
        /** @nocollapse */
        LyTooltip.ctorParameters = function () {
            return [
                { type: ui.LyTheme2 },
                { type: ui.LyOverlay },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef },
                { type: ui.LyFocusState },
                { type: core.NgZone },
                { type: ui.WinScroll }
            ];
        };
        LyTooltip.propDecorators = {
            tooltip: [{ type: core.Input, args: ['lyTooltip',] }],
            lyTooltipShowDelay: [{ type: core.Input }],
            lyTooltipHideDelay: [{ type: core.Input }],
            placement: [{ type: core.Input, args: ['lyTooltipPlacement',] }],
            xPosition: [{ type: core.Input, args: ['lyTooltipXPosition',] }],
            yPosition: [{ type: core.Input, args: ['lyTooltipYPosition',] }]
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
            { type: core.NgModule, args: [{
                        imports: [ui.LyOverlayModule],
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

    exports.LyTooltip = LyTooltip;
    exports.LyTooltipModule = LyTooltipModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=alyle-ui-tooltip.umd.js.map