(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@alyle/ui'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@alyle/ui/ripple', ['exports', '@alyle/ui', '@angular/core', '@angular/common'], factory) :
    (factory((global.alyle = global.alyle || {}, global.alyle.ui = global.alyle.ui || {}, global.alyle.ui.ripple = {}),global.alyle.ui,global.ng.core,global.ng.common));
}(this, (function (exports,i1,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RippleRef = /** @class */ (function () {
        function RippleRef() {
            this.state = true;
            this.timestamp = -Date.now();
            this.container = document.createElement('span');
        }
        /**
         * @return {?}
         */
        RippleRef.prototype.end = /**
         * @return {?}
         */
            function () {
                this.state = false;
                this.timestamp += Date.now();
            };
        return RippleRef;
    }());
    var Ripple = /** @class */ (function () {
        function Ripple(_ngZone, stylesData, _containerElement, _triggerElement) {
            this._ngZone = _ngZone;
            this.stylesData = stylesData;
            this._containerElement = _containerElement;
            this._triggerElement = _triggerElement;
            this._state = true;
            this._eventHandlers = new Map();
            this.rippleConfig = {};
            this._transitionDuration = '950ms';
            this._eventOptions = /** @type {?} */ ({ passive: true });
            if (i1.Platform.isBrowser) {
                if (typeof TouchEvent === 'function' && !!TouchEvent) {
                    this._eventHandlers.set('pointerdown', this.onPointerDown.bind(this));
                    this._eventHandlers.set('touchend', this.onPointerLeave.bind(this));
                }
                else {
                    this._eventHandlers.set('mousedown', this.onPointerDown.bind(this));
                }
                this._eventHandlers.set('mouseup', this.onPointerLeave.bind(this));
                this._eventHandlers.set('mouseleave', this.onPointerLeave.bind(this));
                if (!_triggerElement) {
                    _triggerElement = _containerElement;
                }
                this.setTriggerElement(_triggerElement);
            }
        }
        /**
         * @param {?} config
         * @return {?}
         */
        Ripple.prototype.setConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                this.rippleConfig = config;
            };
        Object.defineProperty(Ripple.prototype, "_rectContainer", {
            get: /**
             * @return {?}
             */ function () {
                return this._containerElement.getBoundingClientRect();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} element
         * @return {?}
         */
        Ripple.prototype.setTriggerElement = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                var _this = this;
                if (element) {
                    element.classList.add(this.stylesData[0]);
                    // this._renderer.addClass(element, this.stylesData[0].id);
                    this._ngZone.runOutsideAngular(function () {
                        _this._eventHandlers.forEach(function (fn, type) { return element.addEventListener(type, fn, _this._eventOptions); });
                    });
                }
                this._triggerElement = element;
            };
        /**
         * @param {?} styles
         * @return {?}
         */
        Ripple.prototype.createRipple = /**
         * @param {?} styles
         * @return {?}
         */
            function (styles) {
                this._rippleRef = new RippleRef();
                /** @type {?} */
                var container = this._rippleRef.container;
                container.className = this.stylesData[1];
                for (var key in styles) {
                    if (styles.hasOwnProperty(key)) {
                        /** @type {?} */
                        var element = styles[key];
                        if (typeof element === 'number') {
                            container.style[key] = element + "px";
                        }
                        else {
                            container.style[key] = element;
                        }
                    }
                }
                this._containerElement.appendChild(container);
                window.getComputedStyle(container).getPropertyValue('opacity');
                container.style.transform = "scale(1)";
            };
        /**
         * @param {?} event
         * @return {?}
         */
        Ripple.prototype.onPointerDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.rippleConfig.disabled) {
                    /**Destroy previous ripple if exist */
                    this.endRipple();
                    this.startRipple(event, this.rippleConfig);
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        Ripple.prototype.onPointerLeave = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.rippleConfig.disabled) {
                    this.endRipple();
                }
            };
        /**
         * @param {?} event
         * @param {?} rippleConfig
         * @return {?}
         */
        Ripple.prototype.startRipple = /**
         * @param {?} event
         * @param {?} rippleConfig
         * @return {?}
         */
            function (event, rippleConfig) {
                /** @type {?} */
                var containerRect = this._rectContainer;
                /** @type {?} */
                var x = event.clientX;
                /** @type {?} */
                var y = event.clientY;
                if (rippleConfig.centered) {
                    x = containerRect.left + containerRect.width / 2;
                    y = containerRect.top + containerRect.height / 2;
                }
                /** @type {?} */
                var left = x - containerRect.left;
                /** @type {?} */
                var top = y - containerRect.top;
                /** @type {?} */
                var radius = rippleConfig.radius === 'containerSize' ? maxSize(containerRect) / 2 : rippleConfig.radius || rippleRadius(x, y, containerRect);
                if (rippleConfig.percentageToIncrease) {
                    radius += radius * rippleConfig.percentageToIncrease / 100;
                }
                /** @type {?} */
                var ripple = this.createRipple({
                    left: left - radius,
                    top: top - radius,
                    width: radius * 2,
                    height: radius * 2,
                    transitionDuration: this._transitionDuration
                });
            };
        /**
         * @param {?} fn
         * @param {?=} delay
         * @return {?}
         */
        Ripple.prototype.runTimeoutOutsideZone = /**
         * @param {?} fn
         * @param {?=} delay
         * @return {?}
         */
            function (fn, delay) {
                if (delay === void 0) {
                    delay = 0;
                }
                this._ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
            };
        /**
         * @return {?}
         */
        Ripple.prototype.endRipple = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var rippleRef = this._rippleRef || null;
                /** @type {?} */
                var duration = parseFloat(this._transitionDuration);
                if (rippleRef && rippleRef.state) {
                    rippleRef.end();
                    this.runTimeoutOutsideZone(function () {
                        rippleRef.container.style.opacity = '0';
                        rippleRef.container.style.transitionDuration = '200ms';
                        // }, rippleRef.timestamp < duration ? duration : 0);
                        // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) : 0);
                    }, rippleRef.timestamp < duration ? duration * .15 : 0);
                    this.runTimeoutOutsideZone(function () {
                        rippleRef.container.parentNode.removeChild(rippleRef.container);
                        // }, rippleRef.timestamp < duration ? duration * 2 : duration);
                        // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) * 2 : duration);
                    }, rippleRef.timestamp < duration ? duration * 2 : duration);
                }
            };
        /**
         * @return {?}
         */
        Ripple.prototype.removeEvents = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._triggerElement) {
                    this._eventHandlers.forEach(function (fn, type) {
                        _this._triggerElement.removeEventListener(type, fn, _this._eventOptions);
                    });
                }
            };
        return Ripple;
    }());
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} rect
     * @return {?}
     */
    function rippleRadius(x, y, rect) {
        /** @type {?} */
        var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
        /** @type {?} */
        var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
        return Math.sqrt(distX * distX + distY * distY);
    }
    /**
     * @param {?} rect
     * @return {?}
     */
    function maxSize(rect) {
        return Math.max(rect.width, rect.height);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyRippleService = /** @class */ (function () {
        function LyRippleService(coreTheme) {
            this.coreTheme = coreTheme;
            this.stylesData = [];
            this.classes = {
                root: this.coreTheme.setUpStyleSecondary('ripple', {
                    '': function () {
                        return ("z-index: 0;" +
                            "border-radius: inherit;");
                    }
                })
            };
            /** @type {?} */
            var host = this.coreTheme.setUpStyle('ripple', {
                '': function () { return ('position: relative;'); }
            });
            /** @type {?} */
            var rippleContainer = this.coreTheme.setUpStyle('ripple-cont', { '': function () {
                    return ("position: absolute;" +
                        "width: 5px;" +
                        "height: 5px;" +
                        "background: currentColor;" +
                        "opacity: .19;" +
                        "border-radius: 100%;" +
                        "-webkit-transform: scale(0);" +
                        "transform: scale(0);" +
                        "-webkit-transition: opacity ease,-webkit-transform cubic-bezier(.1, 1, 0.5, 1);" +
                        "transition: opacity ease,-webkit-transform cubic-bezier(.1, 1, 0.5, 1);" +
                        "transition: opacity ease,transform cubic-bezier(.1, 1, 0.5, 1);" +
                        "transition: opacity ease,transform cubic-bezier(.1, 1, 0.5, 1);" +
                        "pointer-events: none;");
                } });
            this.stylesData.push(host, rippleContainer);
        }
        LyRippleService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        LyRippleService.ctorParameters = function () {
            return [
                { type: i1.CoreTheme }
            ];
        };
        /** @nocollapse */ LyRippleService.ngInjectableDef = i0.defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(i0.inject(i1.CoreTheme)); }, token: LyRippleService, providedIn: "root" });
        return LyRippleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyRipple = /** @class */ (function () {
        function LyRipple(rippleService, _elementRef, _ngZone, _renderer) {
            this.rippleService = rippleService;
            this._elementRef = _elementRef;
            this._ngZone = _ngZone;
            this._renderer = _renderer;
            if (i1.Platform.isBrowser) {
                this.rippleContainer = new Ripple(this._ngZone, this.rippleService.stylesData, this._elementRef.nativeElement);
            }
        }
        Object.defineProperty(LyRipple.prototype, "lyRippleConfig", {
            get: /**
             * @return {?}
             */ function () {
                return {
                    centered: i1.toBoolean(this.lyRippleCentered),
                    disabled: i1.toBoolean(this.lyRippleDisabled),
                    sensitive: i1.toBoolean(this.lyRippleSensitive),
                    radius: this.lyRippleRadius,
                    percentageToIncrease: this.lyRipplePercentageToIncrease,
                };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LyRipple.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._updateRipple();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        LyRipple.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                this._updateRipple();
            };
        /**
         * @return {?}
         */
        LyRipple.prototype._updateRipple = /**
         * @return {?}
         */
            function () {
                if (i1.Platform.isBrowser) {
                    this.rippleContainer.setConfig(this.lyRippleConfig);
                }
            };
        /**
         * @return {?}
         */
        LyRipple.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.rippleContainer) {
                    this.rippleContainer.removeEvents();
                }
            };
        LyRipple.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[lyRipple], [ly-ripple]',
                        exportAs: 'lyRipple'
                    },] },
        ];
        /** @nocollapse */
        LyRipple.ctorParameters = function () {
            return [
                { type: LyRippleService },
                { type: i0.ElementRef },
                { type: i0.NgZone },
                { type: i0.Renderer2 }
            ];
        };
        LyRipple.propDecorators = {
            lyRippleCentered: [{ type: i0.Input }],
            lyRippleDisabled: [{ type: i0.Input }],
            lyRippleSensitive: [{ type: i0.Input }],
            lyRippleRadius: [{ type: i0.Input }],
            lyRipplePercentageToIncrease: [{ type: i0.Input }]
        };
        return LyRipple;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LyRippleModule = /** @class */ (function () {
        function LyRippleModule() {
        }
        LyRippleModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [LyRipple],
                        exports: [LyRipple]
                    },] },
        ];
        return LyRippleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LyRippleModule = LyRippleModule;
    exports.LyRipple = LyRipple;
    exports.LyRippleService = LyRippleService;
    exports.RippleRef = RippleRef;
    exports.Ripple = Ripple;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmlwcGxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFseWxlL3VpL3JpcHBsZS9yaXBwbGUudHMiLCJuZzovL0BhbHlsZS91aS9yaXBwbGUvcmlwcGxlLnNlcnZpY2UudHMiLCJuZzovL0BhbHlsZS91aS9yaXBwbGUvcmlwcGxlLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGFseWxlL3VpL3JpcHBsZS9yaXBwbGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJpcHBsZUNvbmZpZyB7XG4gIGNlbnRlcmVkPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBzZW5zaXRpdmU/OiBib29sZWFuO1xuICByYWRpdXM/OiAnY29udGFpbmVyU2l6ZScgfCBudW1iZXI7XG4gIHBlcmNlbnRhZ2VUb0luY3JlYXNlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmlwcGxlUmVmIHtcbiAgc3RhdGUgPSB0cnVlO1xuICB0aW1lc3RhbXAgPSAtRGF0ZS5ub3coKTtcbiAgcmVhZG9ubHkgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZW5kKCkge1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWVzdGFtcCArPSBEYXRlLm5vdygpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGUge1xuICBwcml2YXRlIF9yaXBwbGVSZWY6IFJpcHBsZVJlZjtcbiAgcHJpdmF0ZSBfc3RhdGUgPSB0cnVlO1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzOiBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+ID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSByaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZyA9IHt9O1xuICBwcml2YXRlIF90cmFuc2l0aW9uRHVyYXRpb24gPSAnOTUwbXMnO1xuICBwcml2YXRlIF9ldmVudE9wdGlvbnMgPSB7cGFzc2l2ZTogdHJ1ZX0gYXMgYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHN0eWxlc0RhdGE6IHN0cmluZ1tdLFxuICAgIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgX3RyaWdnZXJFbGVtZW50PzogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHR5cGVvZiBUb3VjaEV2ZW50ID09PSAnZnVuY3Rpb24nICYmICEhVG91Y2hFdmVudCkge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgncG9pbnRlcmRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCd0b3VjaGVuZCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2Vkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNldXAnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNlbGVhdmUnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgaWYgKCFfdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgICAgX3RyaWdnZXJFbGVtZW50ID0gX2NvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KF90cmlnZ2VyRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q29uZmlnKGNvbmZpZzogUmlwcGxlQ29uZmlnKSB7XG4gICAgdGhpcy5yaXBwbGVDb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcml2YXRlIGdldCBfcmVjdENvbnRhaW5lcigpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VHJpZ2dlckVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLnN0eWxlc0RhdGFbMF0pO1xuICAgICAgLy8gdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5zdHlsZXNEYXRhWzBdLmlkKTtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl90cmlnZ2VyRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVJpcHBsZShzdHlsZXM6IHtba2V5OiBzdHJpbmddOiBudW1iZXIgfCBzdHJpbmd9KSB7XG4gICAgdGhpcy5fcmlwcGxlUmVmID0gbmV3IFJpcHBsZVJlZigpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZVJlZi5jb250YWluZXI7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHRoaXMuc3R5bGVzRGF0YVsxXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3R5bGVzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBjb250YWluZXIuc3R5bGVba2V5XSA9IGAke2VsZW1lbnR9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdvcGFjaXR5Jyk7XG4gICAgY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgxKWA7XG4gIH1cblxuICBwcml2YXRlIG9uUG9pbnRlckRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMucmlwcGxlQ29uZmlnLmRpc2FibGVkKSB7XG4gICAgICAvKipEZXN0cm95IHByZXZpb3VzIHJpcHBsZSBpZiBleGlzdCAqL1xuICAgICAgdGhpcy5lbmRSaXBwbGUoKTtcbiAgICAgIHRoaXMuc3RhcnRSaXBwbGUoZXZlbnQsIHRoaXMucmlwcGxlQ29uZmlnKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBvblBvaW50ZXJMZWF2ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5yaXBwbGVDb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5kUmlwcGxlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRSaXBwbGUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBQb2ludGVyRXZlbnQsIHJpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuX3JlY3RDb250YWluZXI7XG4gICAgbGV0IHggPSBldmVudC5jbGllbnRYLFxuICAgIHkgPSBldmVudC5jbGllbnRZO1xuICAgIGlmIChyaXBwbGVDb25maWcuY2VudGVyZWQpIHtcbiAgICAgIHggPSBjb250YWluZXJSZWN0LmxlZnQgKyBjb250YWluZXJSZWN0LndpZHRoIC8gMjtcbiAgICAgIHkgPSBjb250YWluZXJSZWN0LnRvcCArIGNvbnRhaW5lclJlY3QuaGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgY29uc3QgbGVmdCA9IHggLSBjb250YWluZXJSZWN0LmxlZnQ7XG4gICAgY29uc3QgdG9wID0geSAtIGNvbnRhaW5lclJlY3QudG9wO1xuICAgIGxldCByYWRpdXMgPSByaXBwbGVDb25maWcucmFkaXVzID09PSAnY29udGFpbmVyU2l6ZScgPyBtYXhTaXplKGNvbnRhaW5lclJlY3QpIC8gMiA6IHJpcHBsZUNvbmZpZy5yYWRpdXMgfHwgcmlwcGxlUmFkaXVzKHgsIHksIGNvbnRhaW5lclJlY3QpO1xuICAgIGlmIChyaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UpIHtcbiAgICAgIHJhZGl1cyArPSByYWRpdXMgKiByaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UgLyAxMDA7XG4gICAgfVxuICAgIGNvbnN0IHJpcHBsZSA9IHRoaXMuY3JlYXRlUmlwcGxlKHtcbiAgICAgIGxlZnQ6IGxlZnQgLSByYWRpdXMsXG4gICAgICB0b3A6IHRvcCAtIHJhZGl1cyxcbiAgICAgIHdpZHRoOiByYWRpdXMgKiAyLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAyLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLl90cmFuc2l0aW9uRHVyYXRpb25cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuVGltZW91dE91dHNpZGVab25lKGZuOiBGdW5jdGlvbiwgZGVsYXkgPSAwKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoZm4sIGRlbGF5KSk7XG4gIH1cblxuICBlbmRSaXBwbGUoKSB7XG4gICAgY29uc3QgcmlwcGxlUmVmOiBSaXBwbGVSZWYgPSB0aGlzLl9yaXBwbGVSZWYgfHwgbnVsbDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlRmxvYXQodGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICBpZiAocmlwcGxlUmVmICYmIHJpcHBsZVJlZi5zdGF0ZSkge1xuICAgICAgcmlwcGxlUmVmLmVuZCgpO1xuICAgICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzIwMG1zJztcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIDogMCk7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAvIChkdXJhdGlvbiAqIC4wMDEgKyAxKSA6IDApO1xuICAgICAgfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAuMTUgOiAwKTtcbiAgICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJpcHBsZVJlZi5jb250YWluZXIpO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAyIDogZHVyYXRpb24pO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gLyAoZHVyYXRpb24gKiAuMDAxICsgMSkgKiAyIDogZHVyYXRpb24pO1xuICAgICAgfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gKiAyIDogZHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiByaXBwbGVSYWRpdXMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJlY3Q6IENsaWVudFJlY3QpIHtcbiAgY29uc3QgZGlzdFggPSBNYXRoLm1heChNYXRoLmFicyh4IC0gcmVjdC5sZWZ0KSwgTWF0aC5hYnMoeCAtIHJlY3QucmlnaHQpKTtcbiAgY29uc3QgZGlzdFkgPSBNYXRoLm1heChNYXRoLmFicyh5IC0gcmVjdC50b3ApLCBNYXRoLmFicyh5IC0gcmVjdC5ib3R0b20pKTtcbiAgcmV0dXJuIE1hdGguc3FydChkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WSk7XG59XG5cbmZ1bmN0aW9uIG1heFNpemUocmVjdDogQ2xpZW50UmVjdCkge1xuICByZXR1cm4gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZVRoZW1lIH0gZnJvbSAnQGFseWxlL3VpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGVTZXJ2aWNlIHtcbiAgc3R5bGVzRGF0YTogc3RyaW5nW10gPSBbXTtcbiAgY2xhc3NlcyA9IHtcbiAgICByb290OiB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlU2Vjb25kYXJ5KFxuICAgICAgJ3JpcHBsZScsIHtcbiAgICAgICAgJyc6ICgpID0+IChcbiAgICAgICAgICBgei1pbmRleDogMDtgICtcbiAgICAgICAgICBgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICApXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29yZVRoZW1lOiBDb3JlVGhlbWVcbiAgKSB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGUoJ3JpcHBsZScsIHtcbiAgICAgICcnOiAoKSA9PiAoICdwb3NpdGlvbjogcmVsYXRpdmU7JyApXG4gICAgfSk7XG4gICAgY29uc3QgcmlwcGxlQ29udGFpbmVyID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgncmlwcGxlLWNvbnQnLCB7Jyc6ICgpID0+IChcbiAgICAgIGBwb3NpdGlvbjogYWJzb2x1dGU7YCArXG4gICAgICBgd2lkdGg6IDVweDtgICtcbiAgICAgIGBoZWlnaHQ6IDVweDtgICtcbiAgICAgIGBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7YCArXG4gICAgICBgb3BhY2l0eTogLjE5O2AgK1xuICAgICAgYGJvcmRlci1yYWRpdXM6IDEwMCU7YCArXG4gICAgICBgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO2AgK1xuICAgICAgYHRyYW5zZm9ybTogc2NhbGUoMCk7YCArXG4gICAgICBgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UsLXdlYmtpdC10cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xLCAxLCAwLjUsIDEpO2AgK1xuICAgICAgYHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gICAgICBgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gICAgICBgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gICAgICBgcG9pbnRlci1ldmVudHM6IG5vbmU7YFxuICAgICl9KTtcbiAgICB0aGlzLnN0eWxlc0RhdGEucHVzaChob3N0LCByaXBwbGVDb250YWluZXIpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCBQbGF0Zm9ybSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIFJpcHBsZUNvbmZpZyB9IGZyb20gJy4vcmlwcGxlJztcbmltcG9ydCB7IEx5UmlwcGxlU2VydmljZSB9IGZyb20gJy4vcmlwcGxlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlSaXBwbGVdLCBbbHktcmlwcGxlXScsXG4gIGV4cG9ydEFzOiAnbHlSaXBwbGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHJpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIEBJbnB1dCgpIGx5UmlwcGxlQ2VudGVyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGx5UmlwcGxlRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGx5UmlwcGxlU2Vuc2l0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBseVJpcHBsZVJhZGl1czogJ2NvbnRhaW5lclNpemUnIHwgbnVtYmVyO1xuICBASW5wdXQoKSBseVJpcHBsZVBlcmNlbnRhZ2VUb0luY3JlYXNlOiBudW1iZXI7XG4gIGdldCBseVJpcHBsZUNvbmZpZygpOiBSaXBwbGVDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBjZW50ZXJlZDogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVDZW50ZXJlZCksXG4gICAgICBkaXNhYmxlZDogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVEaXNhYmxlZCksXG4gICAgICBzZW5zaXRpdmU6IHRvQm9vbGVhbih0aGlzLmx5UmlwcGxlU2Vuc2l0aXZlKSxcbiAgICAgIHJhZGl1czogdGhpcy5seVJpcHBsZVJhZGl1cyxcbiAgICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiB0aGlzLmx5UmlwcGxlUGVyY2VudGFnZVRvSW5jcmVhc2UsXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUodGhpcy5fbmdab25lLCB0aGlzLnJpcHBsZVNlcnZpY2Uuc3R5bGVzRGF0YSwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVSaXBwbGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLl91cGRhdGVSaXBwbGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVJpcHBsZSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lci5zZXRDb25maWcodGhpcy5seVJpcHBsZUNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucmlwcGxlQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVJpcHBsZSB9IGZyb20gJy4vcmlwcGxlLmRpcmVjdGl2ZSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5UmlwcGxlXSxcbiAgZXhwb3J0czogW0x5UmlwcGxlXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJpcHBsZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJQbGF0Zm9ybSIsIkluamVjdGFibGUiLCJDb3JlVGhlbWUiLCJ0b0Jvb2xlYW4iLCJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiTmdab25lIiwiUmVuZGVyZXIyIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLFFBVUE7O3lCQUNVLElBQUk7NkJBQ0EsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFOzZCQUNXLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOzs7OztRQUNoRSx1QkFBRzs7O1lBQUg7Z0JBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQzlCO3dCQWxCSDtRQW1CQyxDQUFBO0FBUkQsUUFVQTtRQU9FLGdCQUNVLFNBQ0EsWUFDQSxtQkFDQTtZQUhBLFlBQU8sR0FBUCxPQUFPO1lBQ1AsZUFBVSxHQUFWLFVBQVU7WUFDVixzQkFBaUIsR0FB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