import { Platform, LyTheme2, LY_COMMON_STYLES, toBoolean } from '@alyle/ui';
import { __assign } from 'tslib';
import { Injectable, NgModule, ElementRef, Input, Directive, NgZone, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    function Ripple(_themeVariables, _ngZone, classes, _containerElement, _triggerElement) {
        this._themeVariables = _themeVariables;
        this._ngZone = _ngZone;
        this.classes = classes;
        this._containerElement = _containerElement;
        this._triggerElement = _triggerElement;
        this._eventHandlers = new Map();
        this.rippleConfig = {};
        this._transitionDuration = this._themeVariables.ripple.duration;
        this._eventOptions = /** @type {?} */ ({ passive: true });
        if (Platform.isBrowser) {
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
         */
        function () {
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
            // element.classList.add(this.stylesData[0]);
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
        container.className = this.classes.rippleContainer;
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
        this.createRipple({
            left: left - radius,
            top: top - radius,
            width: radius * 2,
            height: radius * 2,
            transitionDuration: this._transitionDuration + "ms"
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
        if (delay === void 0) { delay = 0; }
        this._ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
    };
    /**
     * @return {?}
     */
    Ripple.prototype.endRipple = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var rippleRef = this._rippleRef || null;
        /** @type {?} */
        var duration = this._transitionDuration;
        if (rippleRef && rippleRef.state) {
            rippleRef.end();
            this.runTimeoutOutsideZone(function () {
                rippleRef.container.style.opacity = '0';
                rippleRef.container.style.transitionDuration = _this._transitionDuration / 5 + "ms";
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
/** @type {?} */
var styles = function (theme) { return ({
    rippleContainer: {
        position: 'absolute',
        width: '5px',
        height: '5px',
        background: 'currentColor',
        opacity: '.19',
        borderRadius: '100%',
        transform: 'scale(0)',
        transition: "opacity " + theme.ripple.transition.opacity + ",transform " + theme.ripple.transition.transform,
        pointerEvents: 'none'
    },
    container: __assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' })
}); };
var LyRippleService = /** @class */ (function () {
    function LyRippleService(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles, 'lyRipple');
    }
    LyRippleService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyRippleService.ctorParameters = function () { return [
        { type: LyTheme2 }
    ]; };
    /** @nocollapse */ LyRippleService.ngInjectableDef = defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(inject(LyTheme2)); }, token: LyRippleService, providedIn: "root" });
    return LyRippleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LyRipple = /** @class */ (function () {
    function LyRipple(rippleService, _elementRef, _ngZone, _theme) {
        this.rippleService = rippleService;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._theme = _theme;
        if (Platform.isBrowser) {
            this.rippleContainer = new Ripple(this._theme.config, this._ngZone, this.rippleService.classes, this._elementRef.nativeElement);
        }
    }
    Object.defineProperty(LyRipple.prototype, "lyRippleConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                centered: toBoolean(this.lyRippleCentered),
                disabled: toBoolean(this.lyRippleDisabled),
                sensitive: toBoolean(this.lyRippleSensitive),
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
     * @return {?}
     */
    LyRipple.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._updateRipple();
    };
    /**
     * @return {?}
     */
    LyRipple.prototype._updateRipple = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
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
        { type: Directive, args: [{
                    selector: '[lyRipple], [ly-ripple]',
                    exportAs: 'lyRipple'
                },] },
    ];
    /** @nocollapse */
    LyRipple.ctorParameters = function () { return [
        { type: LyRippleService },
        { type: ElementRef },
        { type: NgZone },
        { type: LyTheme2 }
    ]; };
    LyRipple.propDecorators = {
        lyRippleCentered: [{ type: Input }],
        lyRippleDisabled: [{ type: Input }],
        lyRippleSensitive: [{ type: Input }],
        lyRippleRadius: [{ type: Input }],
        lyRipplePercentageToIncrease: [{ type: Input }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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
/** @type {?} */
var RippleVariables = {
    transition: {
        opacity: 'cubic-bezier(0.4,0.0,1,1)',
        // transform: 'cubic-bezier(.1, 1, 0.5, 1)'
        transform: 'cubic-bezier(0, 1, 0.6, 1)'
    },
    duration: 950
};

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

export { LyRippleModule, LyRipple, styles, LyRippleService, RippleVariables, RippleRef, Ripple };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmlwcGxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmlwcGxlL3JpcHBsZS50cyIsIm5nOi8vQGFseWxlL3VpL3JpcHBsZS9yaXBwbGUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3JpcHBsZS9yaXBwbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmlwcGxlL3JpcHBsZS5tb2R1bGUudHMiLCJuZzovL0BhbHlsZS91aS9yaXBwbGUvcmlwcGxlLnZhcmlhYmxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmlwcGxlQ29uZmlnIHtcbiAgY2VudGVyZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHNlbnNpdGl2ZT86IGJvb2xlYW47XG4gIHJhZGl1cz86ICdjb250YWluZXJTaXplJyB8IG51bWJlcjtcbiAgcGVyY2VudGFnZVRvSW5jcmVhc2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVSZWYge1xuICBzdGF0ZSA9IHRydWU7XG4gIHRpbWVzdGFtcCA9IC1EYXRlLm5vdygpO1xuICByZWFkb25seSBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbmQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMudGltZXN0YW1wICs9IERhdGUubm93KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJpcHBsZSB7XG4gIHByaXZhdGUgX3JpcHBsZVJlZjogUmlwcGxlUmVmO1xuICBwcml2YXRlIF9ldmVudEhhbmRsZXJzOiBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+ID0gbmV3IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4oKTtcbiAgcHJpdmF0ZSByaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZyA9IHt9O1xuICBwcml2YXRlIF90cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLl90aGVtZVZhcmlhYmxlcy5yaXBwbGUuZHVyYXRpb247XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNsYXNzZXM6IGFueSxcbiAgICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIF90cmlnZ2VyRWxlbWVudD86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgVG91Y2hFdmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIVRvdWNoRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3BvaW50ZXJkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgndG91Y2hlbmQnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNlZG93bicsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZXVwJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZWxlYXZlJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIGlmICghX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICAgIF90cmlnZ2VyRWxlbWVudCA9IF9jb250YWluZXJFbGVtZW50O1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChfdHJpZ2dlckVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldENvbmZpZyhjb25maWc6IFJpcHBsZUNvbmZpZykge1xuICAgIHRoaXMucmlwcGxlQ29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3JlY3RDb250YWluZXIoKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIHNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAvLyBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zdHlsZXNEYXRhWzBdKTtcbiAgICAgIC8vIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIHRoaXMuc3R5bGVzRGF0YVswXS5pZCk7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVSaXBwbGUoc3R5bGVzOiB7W2tleTogc3RyaW5nXTogbnVtYmVyIHwgc3RyaW5nfSkge1xuICAgIHRoaXMuX3JpcHBsZVJlZiA9IG5ldyBSaXBwbGVSZWYoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9yaXBwbGVSZWYuY29udGFpbmVyO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSB0aGlzLmNsYXNzZXMucmlwcGxlQ29udGFpbmVyO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gYCR7ZWxlbWVudH1weGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlW2tleV0gPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoJ29wYWNpdHknKTtcbiAgICBjb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKDEpYDtcbiAgfVxuXG4gIHByaXZhdGUgb25Qb2ludGVyRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5yaXBwbGVDb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIC8qKkRlc3Ryb3kgcHJldmlvdXMgcmlwcGxlIGlmIGV4aXN0ICovXG4gICAgICB0aGlzLmVuZFJpcHBsZSgpO1xuICAgICAgdGhpcy5zdGFydFJpcHBsZShldmVudCwgdGhpcy5yaXBwbGVDb25maWcpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIG9uUG9pbnRlckxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnJpcHBsZUNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5lbmRSaXBwbGUoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFJpcHBsZShldmVudDogTW91c2VFdmVudCB8IFBvaW50ZXJFdmVudCwgcmlwcGxlQ29uZmlnOiBSaXBwbGVDb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5fcmVjdENvbnRhaW5lcjtcbiAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFgsXG4gICAgeSA9IGV2ZW50LmNsaWVudFk7XG4gICAgaWYgKHJpcHBsZUNvbmZpZy5jZW50ZXJlZCkge1xuICAgICAgeCA9IGNvbnRhaW5lclJlY3QubGVmdCArIGNvbnRhaW5lclJlY3Qud2lkdGggLyAyO1xuICAgICAgeSA9IGNvbnRhaW5lclJlY3QudG9wICsgY29udGFpbmVyUmVjdC5oZWlnaHQgLyAyO1xuICAgIH1cbiAgICBjb25zdCBsZWZ0ID0geCAtIGNvbnRhaW5lclJlY3QubGVmdDtcbiAgICBjb25zdCB0b3AgPSB5IC0gY29udGFpbmVyUmVjdC50b3A7XG4gICAgbGV0IHJhZGl1cyA9IHJpcHBsZUNvbmZpZy5yYWRpdXMgPT09ICdjb250YWluZXJTaXplJyA/IG1heFNpemUoY29udGFpbmVyUmVjdCkgLyAyIDogcmlwcGxlQ29uZmlnLnJhZGl1cyB8fCByaXBwbGVSYWRpdXMoeCwgeSwgY29udGFpbmVyUmVjdCk7XG4gICAgaWYgKHJpcHBsZUNvbmZpZy5wZXJjZW50YWdlVG9JbmNyZWFzZSkge1xuICAgICAgcmFkaXVzICs9IHJhZGl1cyAqIHJpcHBsZUNvbmZpZy5wZXJjZW50YWdlVG9JbmNyZWFzZSAvIDEwMDtcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVSaXBwbGUoe1xuICAgICAgbGVmdDogbGVmdCAtIHJhZGl1cyxcbiAgICAgIHRvcDogdG9wIC0gcmFkaXVzLFxuICAgICAgd2lkdGg6IHJhZGl1cyAqIDIsXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqIDIsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke3RoaXMuX3RyYW5zaXRpb25EdXJhdGlvbn1tc2BcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuVGltZW91dE91dHNpZGVab25lKGZuOiBGdW5jdGlvbiwgZGVsYXkgPSAwKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoZm4sIGRlbGF5KSk7XG4gIH1cblxuICBlbmRSaXBwbGUoKSB7XG4gICAgY29uc3QgcmlwcGxlUmVmOiBSaXBwbGVSZWYgPSB0aGlzLl9yaXBwbGVSZWYgfHwgbnVsbDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuX3RyYW5zaXRpb25EdXJhdGlvbjtcbiAgICBpZiAocmlwcGxlUmVmICYmIHJpcHBsZVJlZi5zdGF0ZSkge1xuICAgICAgcmlwcGxlUmVmLmVuZCgpO1xuICAgICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9uIC8gNX1tc2A7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiA6IDApO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gLyAoZHVyYXRpb24gKiAuMDAxICsgMSkgOiAwKTtcbiAgICAgIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogLjE1IDogMCk7XG4gICAgICB0aGlzLnJ1blRpbWVvdXRPdXRzaWRlWm9uZSgoKSA9PiB7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyaXBwbGVSZWYuY29udGFpbmVyKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIC8gKGR1cmF0aW9uICogLjAwMSArIDEpICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogMiA6IGR1cmF0aW9uKTtcbiAgICB9XG4gIH1cbiAgcmVtb3ZlRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLl90cmlnZ2VyRWxlbWVudCkge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICB0aGlzLl90cmlnZ2VyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gcmlwcGxlUmFkaXVzKHg6IG51bWJlciwgeTogbnVtYmVyLCByZWN0OiBDbGllbnRSZWN0KSB7XG4gIGNvbnN0IGRpc3RYID0gTWF0aC5tYXgoTWF0aC5hYnMoeCAtIHJlY3QubGVmdCksIE1hdGguYWJzKHggLSByZWN0LnJpZ2h0KSk7XG4gIGNvbnN0IGRpc3RZID0gTWF0aC5tYXgoTWF0aC5hYnMoeSAtIHJlY3QudG9wKSwgTWF0aC5hYnMoeSAtIHJlY3QuYm90dG9tKSk7XG4gIHJldHVybiBNYXRoLnNxcnQoZGlzdFggKiBkaXN0WCArIGRpc3RZICogZGlzdFkpO1xufVxuXG5mdW5jdGlvbiBtYXhTaXplKHJlY3Q6IENsaWVudFJlY3QpIHtcbiAgcmV0dXJuIE1hdGgubWF4KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyLCBMWV9DT01NT05fU1RZTEVTLCBUaGVtZVZhcmlhYmxlcyB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSAodGhlbWU6IFRoZW1lVmFyaWFibGVzKSA9PiAoe1xuICByaXBwbGVDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzVweCcsXG4gICAgaGVpZ2h0OiAnNXB4JyxcbiAgICBiYWNrZ3JvdW5kOiAnY3VycmVudENvbG9yJyxcbiAgICBvcGFjaXR5OiAnLjE5JyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGVtZS5yaXBwbGUudHJhbnNpdGlvbi5vcGFjaXR5fSx0cmFuc2Zvcm0gJHt0aGVtZS5yaXBwbGUudHJhbnNpdGlvbi50cmFuc2Zvcm1cbiAgICB9YCxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgLi4uTFlfQ09NTU9OX1NUWUxFUy5maWxsLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCdcbiAgfVxufSk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlU2VydmljZSB7XG4gIGNsYXNzZXMgPSB0aGlzLnRoZW1lLmFkZFN0eWxlU2hlZXQoc3R5bGVzLCAnbHlSaXBwbGUnKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0aGVtZTogTHlUaGVtZTJcbiAgKSB7IH1cblxufVxuIiwiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgUGxhdGZvcm0sIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IFJpcHBsZSwgUmlwcGxlQ29uZmlnIH0gZnJvbSAnLi9yaXBwbGUnO1xuaW1wb3J0IHsgTHlSaXBwbGVTZXJ2aWNlIH0gZnJvbSAnLi9yaXBwbGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseVJpcHBsZV0sIFtseS1yaXBwbGVdJyxcbiAgZXhwb3J0QXM6ICdseVJpcHBsZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcmlwcGxlQ29udGFpbmVyOiBSaXBwbGU7XG4gIEBJbnB1dCgpIGx5UmlwcGxlQ2VudGVyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGx5UmlwcGxlRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGx5UmlwcGxlU2Vuc2l0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBseVJpcHBsZVJhZGl1czogJ2NvbnRhaW5lclNpemUnIHwgbnVtYmVyO1xuICBASW5wdXQoKSBseVJpcHBsZVBlcmNlbnRhZ2VUb0luY3JlYXNlOiBudW1iZXI7XG4gIGdldCBseVJpcHBsZUNvbmZpZygpOiBSaXBwbGVDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBjZW50ZXJlZDogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVDZW50ZXJlZCksXG4gICAgICBkaXNhYmxlZDogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVEaXNhYmxlZCksXG4gICAgICBzZW5zaXRpdmU6IHRvQm9vbGVhbih0aGlzLmx5UmlwcGxlU2Vuc2l0aXZlKSxcbiAgICAgIHJhZGl1czogdGhpcy5seVJpcHBsZVJhZGl1cyxcbiAgICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiB0aGlzLmx5UmlwcGxlUGVyY2VudGFnZVRvSW5jcmVhc2UsXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfdGhlbWU6IEx5VGhlbWUyXG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyID0gbmV3IFJpcHBsZSh0aGlzLl90aGVtZS5jb25maWcsIHRoaXMuX25nWm9uZSwgdGhpcy5yaXBwbGVTZXJ2aWNlLmNsYXNzZXMsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlUmlwcGxlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl91cGRhdGVSaXBwbGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVJpcHBsZSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lci5zZXRDb25maWcodGhpcy5seVJpcHBsZUNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucmlwcGxlQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVJpcHBsZSB9IGZyb20gJy4vcmlwcGxlLmRpcmVjdGl2ZSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5UmlwcGxlXSxcbiAgZXhwb3J0czogW0x5UmlwcGxlXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJpcHBsZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IElSaXBwbGVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgY29uc3QgUmlwcGxlVmFyaWFibGVzOiBJUmlwcGxlVmFyaWFibGVzID0ge1xuICB0cmFuc2l0aW9uOiB7XG4gICAgb3BhY2l0eTogJ2N1YmljLWJlemllcigwLjQsMC4wLDEsMSknLFxuICAgIC8vIHRyYW5zZm9ybTogJ2N1YmljLWJlemllciguMSwgMSwgMC41LCAxKSdcbiAgICB0cmFuc2Zvcm06ICdjdWJpYy1iZXppZXIoMCwgMSwgMC42LCAxKSdcbiAgfSxcbiAgZHVyYXRpb246IDk1MFxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxJQVVBOztxQkFDVSxJQUFJO3lCQUNBLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTt5QkFDVyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7Ozs7SUFDaEUsdUJBQUc7OztJQUFIO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDOUI7b0JBbEJIO0lBbUJDLENBQUE7QUFSRCxJQVVBO0lBTUUsZ0JBQ1UsaUJBQ0EsU0FDQSxTQUNBLG1CQUNBO1FBSkEsb0JBQWUsR0FBZixlQUFlO1FBQ2YsWUFBTyxHQUFQLE9BQU87UUFDUCxZQUFPLEdBQVAsT0FBTztRQUNQLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsb0JBQWUsR0FBZixlQUFlOzhCQVRpQyxJQUFJLEdBQUcsRUFBOEI7NEJBQzFELEVBQUU7bUNBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUTsrQ0FDMUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFRO1FBUTVDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLE9BQU8sVUFBVSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUNwRCxJ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