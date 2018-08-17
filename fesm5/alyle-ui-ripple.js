import { Platform, CoreTheme, toBoolean } from '@alyle/ui';
import { Injectable, NgModule, ElementRef, Input, Directive, NgZone, Renderer2, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ container = this._rippleRef.container;
        container.className = this.stylesData[1];
        for (var /** @type {?} */ key in styles) {
            if (styles.hasOwnProperty(key)) {
                var /** @type {?} */ element = styles[key];
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
        var /** @type {?} */ containerRect = this._rectContainer;
        var /** @type {?} */ x = event.clientX, /** @type {?} */
        y = event.clientY;
        if (rippleConfig.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        var /** @type {?} */ left = x - containerRect.left;
        var /** @type {?} */ top = y - containerRect.top;
        var /** @type {?} */ radius = rippleConfig.radius === 'containerSize' ? maxSize(containerRect) / 2 : rippleConfig.radius || rippleRadius(x, y, containerRect);
        if (rippleConfig.percentageToIncrease) {
            radius += radius * rippleConfig.percentageToIncrease / 100;
        }
        var /** @type {?} */ ripple = this.createRipple({
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
        var /** @type {?} */ rippleRef = this._rippleRef || null;
        var /** @type {?} */ duration = parseFloat(this._transitionDuration);
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
    var /** @type {?} */ distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    var /** @type {?} */ distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
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
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ host = this.coreTheme.setUpStyle('ripple', {
            '': function () { return ('position: relative;'); }
        });
        var /** @type {?} */ rippleContainer = this.coreTheme.setUpStyle('ripple-cont', { '': function () {
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    LyRippleService.ctorParameters = function () { return [
        { type: CoreTheme, },
    ]; };
    /** @nocollapse */ LyRippleService.ngInjectableDef = defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(inject(CoreTheme)); }, token: LyRippleService, providedIn: "root" });
    return LyRippleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LyRipple = /** @class */ (function () {
    function LyRipple(rippleService, _elementRef, _ngZone, _renderer) {
        this.rippleService = rippleService;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        if (Platform.isBrowser) {
            this.rippleContainer = new Ripple(this._ngZone, this.rippleService.stylesData, this._elementRef.nativeElement);
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
        { type: LyRippleService, },
        { type: ElementRef, },
        { type: NgZone, },
        { type: Renderer2, },
    ]; };
    LyRipple.propDecorators = {
        "lyRippleCentered": [{ type: Input },],
        "lyRippleDisabled": [{ type: Input },],
        "lyRippleSensitive": [{ type: Input },],
        "lyRippleRadius": [{ type: Input },],
        "lyRipplePercentageToIncrease": [{ type: Input },],
    };
    return LyRipple;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LyRippleModule, LyRipple, LyRippleService, RippleRef, Ripple };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmlwcGxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmlwcGxlL3JpcHBsZS50cyIsIm5nOi8vQGFseWxlL3VpL3JpcHBsZS9yaXBwbGUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3JpcHBsZS9yaXBwbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmlwcGxlL3JpcHBsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgTmdab25lLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFseWxlL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBSaXBwbGVDb25maWcge1xuICBjZW50ZXJlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgc2Vuc2l0aXZlPzogYm9vbGVhbjtcbiAgcmFkaXVzPzogJ2NvbnRhaW5lclNpemUnIHwgbnVtYmVyO1xuICBwZXJjZW50YWdlVG9JbmNyZWFzZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJpcHBsZVJlZiB7XG4gIHN0YXRlID0gdHJ1ZTtcbiAgdGltZXN0YW1wID0gLURhdGUubm93KCk7XG4gIHJlYWRvbmx5IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGVuZCgpIHtcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy50aW1lc3RhbXAgKz0gRGF0ZS5ub3coKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmlwcGxlIHtcbiAgcHJpdmF0ZSBfcmlwcGxlUmVmOiBSaXBwbGVSZWY7XG4gIHByaXZhdGUgX3N0YXRlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZXZlbnRIYW5kbGVyczogTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPiA9IG5ldyBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgcmlwcGxlQ29uZmlnOiBSaXBwbGVDb25maWcgPSB7fTtcbiAgcHJpdmF0ZSBfdHJhbnNpdGlvbkR1cmF0aW9uID0gJzk1MG1zJztcbiAgcHJpdmF0ZSBfZXZlbnRPcHRpb25zID0ge3Bhc3NpdmU6IHRydWV9IGFzIGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBzdHlsZXNEYXRhOiBzdHJpbmdbXSxcbiAgICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIF90cmlnZ2VyRWxlbWVudD86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgVG91Y2hFdmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIVRvdWNoRXZlbnQpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3BvaW50ZXJkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgndG91Y2hlbmQnLCB0aGlzLm9uUG9pbnRlckxlYXZlLmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ21vdXNlZG93bicsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZXVwJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZWxlYXZlJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIGlmICghX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICAgIF90cmlnZ2VyRWxlbWVudCA9IF9jb250YWluZXJFbGVtZW50O1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChfdHJpZ2dlckVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldENvbmZpZyhjb25maWc6IFJpcHBsZUNvbmZpZykge1xuICAgIHRoaXMucmlwcGxlQ29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3JlY3RDb250YWluZXIoKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIHNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5zdHlsZXNEYXRhWzBdKTtcbiAgICAgIC8vIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIHRoaXMuc3R5bGVzRGF0YVswXS5pZCk7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVSaXBwbGUoc3R5bGVzOiB7W2tleTogc3RyaW5nXTogbnVtYmVyIHwgc3RyaW5nfSkge1xuICAgIHRoaXMuX3JpcHBsZVJlZiA9IG5ldyBSaXBwbGVSZWYoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9yaXBwbGVSZWYuY29udGFpbmVyO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSB0aGlzLnN0eWxlc0RhdGFbMV07XG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHN0eWxlc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlW2tleV0gPSBgJHtlbGVtZW50fXB4YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuc3R5bGVba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcikuZ2V0UHJvcGVydHlWYWx1ZSgnb3BhY2l0eScpO1xuICAgIGNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoMSlgO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBvaW50ZXJEb3duKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnJpcHBsZUNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgLyoqRGVzdHJveSBwcmV2aW91cyByaXBwbGUgaWYgZXhpc3QgKi9cbiAgICAgIHRoaXMuZW5kUmlwcGxlKCk7XG4gICAgICB0aGlzLnN0YXJ0UmlwcGxlKGV2ZW50LCB0aGlzLnJpcHBsZUNvbmZpZyk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgb25Qb2ludGVyTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMucmlwcGxlQ29uZmlnLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmVuZFJpcHBsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UmlwcGxlKGV2ZW50OiBNb3VzZUV2ZW50IHwgUG9pbnRlckV2ZW50LCByaXBwbGVDb25maWc6IFJpcHBsZUNvbmZpZykge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLl9yZWN0Q29udGFpbmVyO1xuICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCxcbiAgICB5ID0gZXZlbnQuY2xpZW50WTtcbiAgICBpZiAocmlwcGxlQ29uZmlnLmNlbnRlcmVkKSB7XG4gICAgICB4ID0gY29udGFpbmVyUmVjdC5sZWZ0ICsgY29udGFpbmVyUmVjdC53aWR0aCAvIDI7XG4gICAgICB5ID0gY29udGFpbmVyUmVjdC50b3AgKyBjb250YWluZXJSZWN0LmhlaWdodCAvIDI7XG4gICAgfVxuICAgIGNvbnN0IGxlZnQgPSB4IC0gY29udGFpbmVyUmVjdC5sZWZ0O1xuICAgIGNvbnN0IHRvcCA9IHkgLSBjb250YWluZXJSZWN0LnRvcDtcbiAgICBsZXQgcmFkaXVzID0gcmlwcGxlQ29uZmlnLnJhZGl1cyA9PT0gJ2NvbnRhaW5lclNpemUnID8gbWF4U2l6ZShjb250YWluZXJSZWN0KSAvIDIgOiByaXBwbGVDb25maWcucmFkaXVzIHx8IHJpcHBsZVJhZGl1cyh4LCB5LCBjb250YWluZXJSZWN0KTtcbiAgICBpZiAocmlwcGxlQ29uZmlnLnBlcmNlbnRhZ2VUb0luY3JlYXNlKSB7XG4gICAgICByYWRpdXMgKz0gcmFkaXVzICogcmlwcGxlQ29uZmlnLnBlcmNlbnRhZ2VUb0luY3JlYXNlIC8gMTAwO1xuICAgIH1cbiAgICBjb25zdCByaXBwbGUgPSB0aGlzLmNyZWF0ZVJpcHBsZSh7XG4gICAgICBsZWZ0OiBsZWZ0IC0gcmFkaXVzLFxuICAgICAgdG9wOiB0b3AgLSByYWRpdXMsXG4gICAgICB3aWR0aDogcmFkaXVzICogMixcbiAgICAgIGhlaWdodDogcmFkaXVzICogMixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy5fdHJhbnNpdGlvbkR1cmF0aW9uXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJ1blRpbWVvdXRPdXRzaWRlWm9uZShmbjogRnVuY3Rpb24sIGRlbGF5ID0gMCkge1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KGZuLCBkZWxheSkpO1xuICB9XG5cbiAgZW5kUmlwcGxlKCkge1xuICAgIGNvbnN0IHJpcHBsZVJlZjogUmlwcGxlUmVmID0gdGhpcy5fcmlwcGxlUmVmIHx8IG51bGw7XG4gICAgY29uc3QgZHVyYXRpb24gPSBwYXJzZUZsb2F0KHRoaXMuX3RyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgaWYgKHJpcHBsZVJlZiAmJiByaXBwbGVSZWYuc3RhdGUpIHtcbiAgICAgIHJpcHBsZVJlZi5lbmQoKTtcbiAgICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcyMDBtcyc7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiA6IDApO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gLyAoZHVyYXRpb24gKiAuMDAxICsgMSkgOiAwKTtcbiAgICAgIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogLjE1IDogMCk7XG4gICAgICB0aGlzLnJ1blRpbWVvdXRPdXRzaWRlWm9uZSgoKSA9PiB7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyaXBwbGVSZWYuY29udGFpbmVyKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIC8gKGR1cmF0aW9uICogLjAwMSArIDEpICogMiA6IGR1cmF0aW9uKTtcbiAgICAgIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uICogMiA6IGR1cmF0aW9uKTtcbiAgICB9XG4gIH1cbiAgcmVtb3ZlRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLl90cmlnZ2VyRWxlbWVudCkge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICB0aGlzLl90cmlnZ2VyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gcmlwcGxlUmFkaXVzKHg6IG51bWJlciwgeTogbnVtYmVyLCByZWN0OiBDbGllbnRSZWN0KSB7XG4gIGNvbnN0IGRpc3RYID0gTWF0aC5tYXgoTWF0aC5hYnMoeCAtIHJlY3QubGVmdCksIE1hdGguYWJzKHggLSByZWN0LnJpZ2h0KSk7XG4gIGNvbnN0IGRpc3RZID0gTWF0aC5tYXgoTWF0aC5hYnMoeSAtIHJlY3QudG9wKSwgTWF0aC5hYnMoeSAtIHJlY3QuYm90dG9tKSk7XG4gIHJldHVybiBNYXRoLnNxcnQoZGlzdFggKiBkaXN0WCArIGRpc3RZICogZGlzdFkpO1xufVxuXG5mdW5jdGlvbiBtYXhTaXplKHJlY3Q6IENsaWVudFJlY3QpIHtcbiAgcmV0dXJuIE1hdGgubWF4KHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3JlVGhlbWUgfSBmcm9tICdAYWx5bGUvdWknO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVJpcHBsZVNlcnZpY2Uge1xuICBzdHlsZXNEYXRhOiBzdHJpbmdbXSA9IFtdO1xuICBjbGFzc2VzID0ge1xuICAgIHJvb3Q6IHRoaXMuY29yZVRoZW1lLnNldFVwU3R5bGVTZWNvbmRhcnkoXG4gICAgICAncmlwcGxlJywge1xuICAgICAgICAnJzogKCkgPT4gKFxuICAgICAgICAgIGB6LWluZGV4OiAwO2AgK1xuICAgICAgICAgIGBib3JkZXItcmFkaXVzOiBpbmhlcml0O2BcbiAgICAgICAgKVxuICAgICAgfVxuICAgIClcbiAgfTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb3JlVGhlbWU6IENvcmVUaGVtZVxuICApIHtcbiAgICBjb25zdCBob3N0ID0gdGhpcy5jb3JlVGhlbWUuc2V0VXBTdHlsZSgncmlwcGxlJywge1xuICAgICAgJyc6ICgpID0+ICggJ3Bvc2l0aW9uOiByZWxhdGl2ZTsnIClcbiAgICB9KTtcbiAgICBjb25zdCByaXBwbGVDb250YWluZXIgPSB0aGlzLmNvcmVUaGVtZS5zZXRVcFN0eWxlKCdyaXBwbGUtY29udCcsIHsnJzogKCkgPT4gKFxuICAgICAgYHBvc2l0aW9uOiBhYnNvbHV0ZTtgICtcbiAgICAgIGB3aWR0aDogNXB4O2AgK1xuICAgICAgYGhlaWdodDogNXB4O2AgK1xuICAgICAgYGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtgICtcbiAgICAgIGBvcGFjaXR5OiAuMTk7YCArXG4gICAgICBgYm9yZGVyLXJhZGl1czogMTAwJTtgICtcbiAgICAgIGAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7YCArXG4gICAgICBgdHJhbnNmb3JtOiBzY2FsZSgwKTtgICtcbiAgICAgIGAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSwtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjEsIDEsIDAuNSwgMSk7YCArXG4gICAgICBgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgIGB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UsdHJhbnNmb3JtIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgIGB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UsdHJhbnNmb3JtIGN1YmljLWJlemllciguMSwgMSwgMC41LCAxKTtgICtcbiAgICAgIGBwb2ludGVyLWV2ZW50czogbm9uZTtgXG4gICAgKX0pO1xuICAgIHRoaXMuc3R5bGVzRGF0YS5wdXNoKGhvc3QsIHJpcHBsZUNvbnRhaW5lcik7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgTHlGb2N1c1N0YXRlLCBQbGF0Zm9ybSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIFJpcHBsZUNvbmZpZyB9IGZyb20gJy4vcmlwcGxlJztcbmltcG9ydCB7IEx5UmlwcGxlU2VydmljZSB9IGZyb20gJy4vcmlwcGxlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlSaXBwbGVdLCBbbHktcmlwcGxlXScsXG4gIGV4cG9ydEFzOiAnbHlSaXBwbGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHJpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIEBJbnB1dCgpIGx5UmlwcGxlQ2VudGVyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGx5UmlwcGxlRGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGx5UmlwcGxlU2Vuc2l0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBseVJpcHBsZVJhZGl1czogJ2NvbnRhaW5lclNpemUnIHwgbnVtYmVyO1xuICBASW5wdXQoKSBseVJpcHBsZVBlcmNlbnRhZ2VUb0luY3JlYXNlOiBudW1iZXI7XG4gIGdldCBseVJpcHBsZUNvbmZpZygpOiBSaXBwbGVDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBjZW50ZXJlZDogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVDZW50ZXJlZCksXG4gICAgICBkaXNhYmxlZDogdG9Cb29sZWFuKHRoaXMubHlSaXBwbGVEaXNhYmxlZCksXG4gICAgICBzZW5zaXRpdmU6IHRvQm9vbGVhbih0aGlzLmx5UmlwcGxlU2Vuc2l0aXZlKSxcbiAgICAgIHJhZGl1czogdGhpcy5seVJpcHBsZVJhZGl1cyxcbiAgICAgIHBlcmNlbnRhZ2VUb0luY3JlYXNlOiB0aGlzLmx5UmlwcGxlUGVyY2VudGFnZVRvSW5jcmVhc2UsXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJpcHBsZVNlcnZpY2U6IEx5UmlwcGxlU2VydmljZSxcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUodGhpcy5fbmdab25lLCB0aGlzLnJpcHBsZVNlcnZpY2Uuc3R5bGVzRGF0YSwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl91cGRhdGVSaXBwbGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLl91cGRhdGVSaXBwbGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVJpcHBsZSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lci5zZXRDb25maWcodGhpcy5seVJpcHBsZUNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucmlwcGxlQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lci5yZW1vdmVFdmVudHMoKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeVJpcHBsZSB9IGZyb20gJy4vcmlwcGxlLmRpcmVjdGl2ZSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0x5UmlwcGxlXSxcbiAgZXhwb3J0czogW0x5UmlwcGxlXVxufSlcbmV4cG9ydCBjbGFzcyBMeVJpcHBsZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLElBVUE7O3FCQUNVLElBQUk7eUJBQ0EsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO3lCQUNXLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOzs7OztJQUNoRSx1QkFBRzs7O0lBQUg7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztR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