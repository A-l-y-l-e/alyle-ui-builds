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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbHRpcC51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvdG9vbHRpcC90b29sdGlwLnRzIiwibmc6Ly9AYWx5bGUvdWkvdG9vbHRpcC90b29sdGlwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBMWV9DT01NT05fU1RZTEVTLFxuICBMeUZvY3VzU3RhdGUsXG4gIEx5T3ZlcmxheSxcbiAgTHlUaGVtZTIsXG4gIE92ZXJsYXlGcm9tVGVtcGxhdGVSZWYsXG4gIFBsYWNlbWVudCxcbiAgUGxhdGZvcm0sXG4gIFRoZW1lVmFyaWFibGVzLFxuICBXaW5TY3JvbGwsXG4gIFhQb3NpdGlvbixcbiAgWVBvc2l0aW9uLFxuICBnZXRQb3NpdGlvblxuICB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuY29uc3QgREVGQVVMVF9QTEFDRU1FTlQgPSBZUG9zaXRpb24uYmVsb3c7XG5jb25zdCBTVFlMRV9QUklPUklUWSA9IC0yO1xuY29uc3Qgc3R5bGVzID0gKHtcbiAgcm9vdDoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbFxuICB9XG59KTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5VG9vbHRpcF0nLFxuICBleHBvcnRBczogJ2x5VG9vbHRpcCdcbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sdGlwIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fdGhlbWUuYWRkU3R5bGVTaGVldChzdHlsZXMsIFNUWUxFX1BSSU9SSVRZKTtcbiAgcHJpdmF0ZSBfdG9vbHRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB8IG51bGw7XG4gIHByaXZhdGUgX3Rvb2x0aXBPdmVybGF5OiBPdmVybGF5RnJvbVRlbXBsYXRlUmVmO1xuICBwcml2YXRlIF9saXN0ZW5lcnMgPSBuZXcgTWFwPHN0cmluZywgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdD4oKTtcbiAgcHJpdmF0ZSBfc2Nyb2xsU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3Njcm9sbFZhbCA9IDA7XG4gIHByaXZhdGUgX3Nob3dUaW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG4gIHByaXZhdGUgX2hpZGVUaW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgnbHlUb29sdGlwJylcbiAgc2V0IHRvb2x0aXAodmFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5fdG9vbHRpcCA9IHZhbDtcbiAgfVxuICBnZXQgdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcDtcbiAgfVxuICBASW5wdXQoKSBseVRvb2x0aXBTaG93RGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGx5VG9vbHRpcEhpZGVEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdseVRvb2x0aXBQbGFjZW1lbnQnKSBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcbiAgQElucHV0KCdseVRvb2x0aXBYUG9zaXRpb24nKSB4UG9zaXRpb246IFhQb3NpdGlvbjtcbiAgQElucHV0KCdseVRvb2x0aXBZUG9zaXRpb24nKSB5UG9zaXRpb246IFlQb3NpdGlvbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyLFxuICAgIHByaXZhdGUgX292ZXJsYXk6IEx5T3ZlcmxheSxcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBmb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgc2Nyb2xsOiBXaW5TY3JvbGxcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBfZWwubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICghUGxhdGZvcm0uSU9TICYmICFQbGF0Zm9ybS5BTkRST0lEKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyc1xuICAgICAgICAgIC5zZXQoJ21vdXNlZW50ZXInLCAoKSA9PiB0aGlzLnNob3coKSlcbiAgICAgICAgICAuc2V0KCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnNldCgndG91Y2hzdGFydCcsICgpID0+IHRoaXMuc2hvdygpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcikpO1xuXG4gICAgICB0aGlzLl9zY3JvbGxTdWIgPSBzY3JvbGwuc2Nyb2xsJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fdG9vbHRpcE92ZXJsYXkpIHtcbiAgICAgICAgICB0aGlzLl9zY3JvbGxWYWwrKztcbiAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmFsID4gMTApIHtcbiAgICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKDApKTtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZhbCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgZm9jdXNTdGF0ZS5saXN0ZW4oZWxlbWVudCkuc3Vic2NyaWJlKGV2ID0+IHtcbiAgICAgICAgaWYgKGV2ID09PSAna2V5Ym9hcmQnKSB7XG4gICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXYgPT0gbnVsbCkge1xuICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucGxhY2VtZW50ICYmICF0aGlzLnhQb3NpdGlvbiAmJiAhdGhpcy55UG9zaXRpb24pIHtcbiAgICAgIHRoaXMucGxhY2VtZW50ID0gREVGQVVMVF9QTEFDRU1FTlQ7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5oaWRlKDApO1xuXG4gICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVycyBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyLCBldmVudCkgPT4ge1xuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsU3ViKSB7XG4gICAgICB0aGlzLl9zY3JvbGxTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBzaG93KGRlbGF5PzogbnVtYmVyKSB7XG4gICAgZGVsYXkgPSB0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInID8gZGVsYXkgOiB0aGlzLmx5VG9vbHRpcFNob3dEZWxheTtcbiAgICBpZiAodGhpcy5faGlkZVRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpZGVUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy5fdG9vbHRpcE92ZXJsYXkgJiYgdGhpcy50b29sdGlwICYmICF0aGlzLl9zaG93VGltZW91dElkKSB7XG5cbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSA8YW55PnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUodGhpcy50b29sdGlwLCB1bmRlZmluZWQsIHtcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHRvcDogcmVjdC55LFxuICAgICAgICAgICAgbGVmdDogcmVjdC54XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc2VzOiBbXG4gICAgICAgICAgICB0aGlzLl90aGVtZS5hZGRTdHlsZSgnTHlUb29sdGlwJywgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICAgICAgLi4udGhlbWUudG9vbHRpcC5yb290LFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhlbWUuYW5pbWF0aW9ucy5jdXJ2ZXMuc3RhbmRhcmR9IDMwMG1zYCxcbiAgICAgICAgICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIG51bGwsIG51bGwsIFNUWUxFX1BSSU9SSVRZKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgaG9zdDogdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9zaXRpb24odGhpcy5wbGFjZW1lbnQsIHRoaXMueFBvc2l0aW9uLCB0aGlzLnlQb3NpdGlvbiwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LCB0aGlzLl90aGVtZS5jb25maWcsIDEzKTtcbiAgICAgICAgdG9vbHRpcC5jb250YWluZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9uLnh9cHgsJHtwb3NpdGlvbi55fXB4LDApYDtcblxuICAgICAgICB0aGlzLl90aGVtZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseVRvb2x0aXA6b3BlbicsICh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIH0pLCB0b29sdGlwLmNvbnRhaW5lckVsZW1lbnQsIG51bGwsIFNUWUxFX1BSSU9SSVRZKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoZGVsYXk/OiBudW1iZXIpIHtcbiAgICBjb25zdCB0b29sdGlwT3ZlcmxheSA9IHRoaXMuX3Rvb2x0aXBPdmVybGF5O1xuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJyA/IGRlbGF5IDogdGhpcy5seVRvb2x0aXBIaWRlRGVsYXk7XG4gICAgaWYgKHRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zaG93VGltZW91dElkKTtcbiAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodG9vbHRpcE92ZXJsYXkgJiYgIXRoaXMuX2hpZGVUaW1lb3V0SWQpIHtcblxuICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IDxhbnk+c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRvb2x0aXBPdmVybGF5LmNvbnRhaW5lckVsZW1lbnQsIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdseVRvb2x0aXA6b3BlbicsIG51bGwpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0b29sdGlwT3ZlcmxheS5kZXN0cm95KCksIDMwMCk7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBPdmVybGF5ID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl90b29sdGlwT3ZlcmxheSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hcmtGb3JDaGVjaygpIHtcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VG9vbHRpcCB9IGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgeyBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTHlPdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTHlUb29sdGlwXSxcbiAgZXhwb3J0czogW0x5VG9vbHRpcF1cbn0pXG5leHBvcnQgY2xhc3MgTHlUb29sdGlwTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIllQb3NpdGlvbiIsIkxZX0NPTU1PTl9TVFlMRVMiLCJQbGF0Zm9ybSIsImdldFBvc2l0aW9uIiwiRGlyZWN0aXZlIiwiTHlUaGVtZTIiLCJMeU92ZXJsYXkiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJMeUZvY3VzU3RhdGUiLCJOZ1pvbmUiLCJXaW5TY3JvbGwiLCJJbnB1dCIsIk5nTW9kdWxlIiwiTHlPdmVybGF5TW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMs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