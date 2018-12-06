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
                                    return (__assign({ borderRadius: '4px' }, theme.tooltip.root, (_a = { fontSize: '10px', padding: '6px 8px' }, _a[theme.getBreakpoint('XSmall')] = {
                                        padding: '8px 16px',
                                        fontSize: '14px',
                                    }, _a)));
                                })
                            ],
                            host: _this._el.nativeElement,
                        });
                        /** @type {?} */
                        var position = ui.getPosition(_this.placement, _this.xPosition, _this.yPosition, _this._el.nativeElement, tooltip.containerElement, _this._theme.config, 7);
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
                    this._hideTimeoutId = ( /** @type {?} */(setTimeout(function () {
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
                { type: core.ChangeDetectorRef },
                { type: ui.LyFocusState },
                { type: core.NgZone },
                { type: ui.WindowScrollService }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktdG9vbHRpcC51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AYWx5bGUvdWkvdG9vbHRpcC90b29sdGlwLnRzIiwibmc6Ly9AYWx5bGUvdWkvdG9vbHRpcC90b29sdGlwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdFxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTFlfQ09NTU9OX1NUWUxFUyxcbiAgTHlGb2N1c1N0YXRlLFxuICBMeU92ZXJsYXksXG4gIEx5VGhlbWUyLFxuICBPdmVybGF5RnJvbVRlbXBsYXRlUmVmLFxuICBQbGFjZW1lbnQsXG4gIFBsYXRmb3JtLFxuICBUaGVtZVZhcmlhYmxlcyxcbiAgV2luZG93U2Nyb2xsU2VydmljZSxcbiAgWFBvc2l0aW9uLFxuICBZUG9zaXRpb24sXG4gIGdldFBvc2l0aW9uXG4gIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBERUZBVUxUX1BMQUNFTUVOVCA9IFlQb3NpdGlvbi5iZWxvdztcbmNvbnN0IFNUWUxFX1BSSU9SSVRZID0gLTI7XG5jb25zdCBzdHlsZXMgPSAoe1xuICByb290OiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsXG4gIH1cbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlUb29sdGlwXScsXG4gIGV4cG9ydEFzOiAnbHlUb29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBMeVRvb2x0aXAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl90aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcywgU1RZTEVfUFJJT1JJVFkpO1xuICBwcml2YXRlIF90b29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbDtcbiAgcHJpdmF0ZSBfdG9vbHRpcE92ZXJsYXk6IE92ZXJsYXlGcm9tVGVtcGxhdGVSZWY7XG4gIHByaXZhdGUgX2xpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0PigpO1xuICBwcml2YXRlIF9zY3JvbGxTdWI6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfc2Nyb2xsVmFsID0gMDtcbiAgcHJpdmF0ZSBfc2hvd1RpbWVvdXRJZDogbnVtYmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBfaGlkZVRpbWVvdXRJZDogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCdseVRvb2x0aXAnKVxuICBzZXQgdG9vbHRpcCh2YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzLl90b29sdGlwID0gdmFsO1xuICB9XG4gIGdldCB0b29sdGlwKCkge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwO1xuICB9XG4gIEBJbnB1dCgpIGx5VG9vbHRpcFNob3dEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgbHlUb29sdGlwSGlkZURlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2x5VG9vbHRpcFBsYWNlbWVudCcpIHBsYWNlbWVudDogUGxhY2VtZW50O1xuICBASW5wdXQoJ2x5VG9vbHRpcFhQb3NpdGlvbicpIHhQb3NpdGlvbjogWFBvc2l0aW9uO1xuICBASW5wdXQoJ2x5VG9vbHRpcFlQb3NpdGlvbicpIHlQb3NpdGlvbjogWVBvc2l0aW9uO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZTogTHlUaGVtZTIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogTHlPdmVybGF5LFxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBmb2N1c1N0YXRlOiBMeUZvY3VzU3RhdGUsXG4gICAgbmdab25lOiBOZ1pvbmUsXG4gICAgc2Nyb2xsOiBXaW5kb3dTY3JvbGxTZXJ2aWNlXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoIVBsYXRmb3JtLklPUyAmJiAhUGxhdGZvcm0uQU5EUk9JRCkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnNcbiAgICAgICAgICAuc2V0KCdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5zaG93KCkpXG4gICAgICAgICAgLnNldCgnbW91c2VsZWF2ZScsICgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5zZXQoJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lciwgZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpKTtcblxuICAgICAgdGhpcy5fc2Nyb2xsU3ViID0gc2Nyb2xsLnNjcm9sbCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBPdmVybGF5KSB7XG4gICAgICAgICAgdGhpcy5fc2Nyb2xsVmFsKys7XG4gICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZhbCA+IDEwKSB7XG4gICAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuaGlkZSgwKSk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWYWwgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGZvY3VzU3RhdGUubGlzdGVuKGVsZW1lbnQpLnN1YnNjcmliZShldiA9PiB7XG4gICAgICAgIGlmIChldi5ieSA9PT0gJ2tleWJvYXJkJyAmJiBldi5ldmVudC50eXBlID09PSAnZm9jdXMnKSB7XG4gICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXYuZXZlbnQudHlwZSA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5wbGFjZW1lbnQgJiYgIXRoaXMueFBvc2l0aW9uICYmICF0aGlzLnlQb3NpdGlvbikge1xuICAgICAgdGhpcy5wbGFjZW1lbnQgPSBERUZBVUxUX1BMQUNFTUVOVDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGUoMCk7XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIHNldCBpbiB0aGUgY29uc3RydWN0b3JcbiAgICB0aGlzLl9saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIsIGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9zY3JvbGxTdWIpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coZGVsYXk/OiBudW1iZXIpIHtcbiAgICBkZWxheSA9IHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgPyBkZWxheSA6IHRoaXMubHlUb29sdGlwU2hvd0RlbGF5O1xuICAgIGlmICh0aGlzLl9oaWRlVGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlkZVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl90b29sdGlwT3ZlcmxheSAmJiB0aGlzLnRvb2x0aXAgJiYgIXRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcblxuICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IDxhbnk+c2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5fdG9vbHRpcE92ZXJsYXkgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLnRvb2x0aXAsIHVuZGVmaW5lZCwge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgdG9wOiByZWN0LnksXG4gICAgICAgICAgICBsZWZ0OiByZWN0LnhcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzZXM6IFtcbiAgICAgICAgICAgIHRoaXMuX3RoZW1lLmFkZFN0eWxlKCdMeVRvb2x0aXAnLCAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgICAgICAgICAuLi50aGVtZS50b29sdGlwLnJvb3QsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcbiAgICAgICAgICAgICAgW3RoZW1lLmdldEJyZWFrcG9pbnQoJ1hTbWFsbCcpXToge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgXSxcbiAgICAgICAgICBob3N0OiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb3NpdGlvbih0aGlzLnBsYWNlbWVudCwgdGhpcy54UG9zaXRpb24sIHRoaXMueVBvc2l0aW9uLCB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCB0b29sdGlwLmNvbnRhaW5lckVsZW1lbnQsIHRoaXMuX3RoZW1lLmNvbmZpZywgNyk7XG4gICAgICAgIHRvb2x0aXAuY29udGFpbmVyRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbi54fXB4LCR7cG9zaXRpb24ueX1weCwwcHgpYDtcblxuICAgICAgICB0aGlzLl9zaG93VGltZW91dElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fbWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZShkZWxheT86IG51bWJlcikge1xuICAgIGNvbnN0IHRvb2x0aXBPdmVybGF5ID0gdGhpcy5fdG9vbHRpcE92ZXJsYXk7XG4gICAgZGVsYXkgPSB0eXBlb2YgZGVsYXkgPT09ICdudW1iZXInID8gZGVsYXkgOiB0aGlzLmx5VG9vbHRpcEhpZGVEZWxheTtcbiAgICBpZiAodGhpcy5fc2hvd1RpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fc2hvd1RpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0b29sdGlwT3ZlcmxheSAmJiAhdGhpcy5faGlkZVRpbWVvdXRJZCkge1xuXG4gICAgICB0aGlzLl9oaWRlVGltZW91dElkID0gPGFueT5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdG9vbHRpcE92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLl90b29sdGlwT3ZlcmxheSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5faGlkZVRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX21hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fdG9vbHRpcE92ZXJsYXkpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRvb2x0aXAgfSBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTHlPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0x5T3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5VG9vbHRpcF0sXG4gIGV4cG9ydHM6IFtMeVRvb2x0aXBdXG59KVxuZXhwb3J0IGNsYXNzIEx5VG9vbHRpcE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJZUG9zaXRpb24iLCJMWV9DT01NT05fU1RZTEVTIiwiUGxhdGZvcm0iLCJnZXRQb3NpdGlvbiIsIkRpcmVjdGl2ZSIsIkx5VGhlbWUyIiwiTHlPdmVybGF5IiwiRWxlbWVudFJlZiIsIkNoYW5nZURldGVjdG9yUmVmIiwiTHlGb2N1c1N0YXRlIiwiTmdab25lIiwiV2luZG93U2Nyb2xsU2VydmljZSIsIklucHV0IiwiTmdNb2R1bGUiLCJMeU92ZXJsYXlNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxRQUFRLEdBQUc7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRjtZQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ1osQ0FBQTtRQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFBOzs7Ozs7O1FDWkssaUJBQWlCLEdBQUdBLFlBQVMsQ0FBQyxLQUFLOztRQUNuQyxjQUFjLEdBQUcsQ0FBQyxDQUFDOztRQUNuQixNQUFNLElBQUk7UUFDZCxJQUFJLGVBQ0ND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