/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Platform } from '../platform';
/**
 * @record
 */
export function RippleConfig() { }
if (false) {
    /** @type {?|undefined} */
    RippleConfig.prototype.centered;
    /** @type {?|undefined} */
    RippleConfig.prototype.disabled;
    /** @type {?|undefined} */
    RippleConfig.prototype.sensitive;
    /** @type {?|undefined} */
    RippleConfig.prototype.radius;
    /** @type {?|undefined} */
    RippleConfig.prototype.percentageToIncrease;
}
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
export { RippleRef };
if (false) {
    /** @type {?} */
    RippleRef.prototype.state;
    /** @type {?} */
    RippleRef.prototype.timestamp;
    /** @type {?} */
    RippleRef.prototype.container;
}
var Ripple = /** @class */ (function () {
    function Ripple(_themeVariables, _ngZone, classes, _containerElement, _triggerElement) {
        this._themeVariables = _themeVariables;
        this._ngZone = _ngZone;
        this.classes = classes;
        this._containerElement = _containerElement;
        this._triggerElement = _triggerElement;
        this._eventHandlers = new Map();
        this.config = {};
        this._transitionDuration = this._themeVariables.ripple.duration;
        this._eventOptions = (/** @type {?} */ ({ passive: true }));
        if (Platform.isBrowser) {
            if (typeof PointerEvent === 'function' && typeof TouchEvent === 'function') {
                this._eventHandlers.set('pointerdown', this.onPointerDown.bind(this));
            }
            else {
                this._eventHandlers.set('mousedown', this.onPointerDown.bind(this));
            }
            this._eventHandlers.set('touchend', this.onPointerLeave.bind(this));
            this._eventHandlers.set('touchcancel', this.onPointerLeave.bind(this));
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
        this.config = config;
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
        if (!this.config.disabled) {
            /**Destroy previous ripple if exist */
            this.endRipple();
            this.startRipple(event, this.config);
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
        if (!this.config.disabled) {
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
            this._rippleRef = null;
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
export { Ripple };
if (false) {
    /** @type {?} */
    Ripple.prototype._rippleRef;
    /** @type {?} */
    Ripple.prototype._eventHandlers;
    /** @type {?} */
    Ripple.prototype.config;
    /** @type {?} */
    Ripple.prototype._transitionDuration;
    /** @type {?} */
    Ripple.prototype._eventOptions;
    /** @type {?} */
    Ripple.prototype._themeVariables;
    /** @type {?} */
    Ripple.prototype._ngZone;
    /** @type {?} */
    Ripple.prototype.classes;
    /** @type {?} */
    Ripple.prototype._containerElement;
    /** @type {?} */
    Ripple.prototype._triggerElement;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3JpcHBsZS9yaXBwbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFHdkMsa0NBTUM7OztJQUxDLGdDQUFtQjs7SUFDbkIsZ0NBQW1COztJQUNuQixpQ0FBb0I7O0lBQ3BCLDhCQUFrQzs7SUFDbEMsNENBQThCOztBQUdoQztJQUFBO1FBQ0UsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUtuRSxDQUFDOzs7O0lBSkMsdUJBQUc7OztJQUFIO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQQywwQkFBYTs7SUFDYiw4QkFBd0I7O0lBQ3hCLDhCQUFpRTs7QUFPbkU7SUFNRSxnQkFDVSxlQUErQixFQUMvQixPQUFlLEVBQ2YsT0FBWSxFQUNaLGlCQUE4QixFQUM5QixlQUE2QjtRQUo3QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFDWixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWM7UUFUL0IsbUJBQWMsR0FBb0MsSUFBSSxHQUFHLEVBQThCLENBQUM7UUFDaEcsV0FBTSxHQUFpQixFQUFFLENBQUM7UUFDbEIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENB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Rzs7SUFDaEcsd0JBQTBCOztJQUMxQixxQ0FBbUU7O0lBQ25FLCtCQUErQzs7SUFFN0MsaUNBQXVDOztJQUN2Qyx5QkFBdUI7O0lBQ3ZCLHlCQUFvQjs7SUFDcEIsbUNBQXNDOztJQUN0QyxpQ0FBcUM7Ozs7Ozs7O0FBK0h6QyxTQUFTLFlBQVksQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLElBQWdCOztRQUNwRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNsRCxDQUFDOzs7OztBQUVELFNBQVMsT0FBTyxDQUFDLElBQWdCO0lBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBSaXBwbGVDb25maWcge1xuICBjZW50ZXJlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgc2Vuc2l0aXZlPzogYm9vbGVhbjtcbiAgcmFkaXVzPzogJ2NvbnRhaW5lclNpemUnIHwgbnVtYmVyO1xuICBwZXJjZW50YWdlVG9JbmNyZWFzZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJpcHBsZVJlZiB7XG4gIHN0YXRlID0gdHJ1ZTtcbiAgdGltZXN0YW1wID0gLURhdGUubm93KCk7XG4gIHJlYWRvbmx5IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGVuZCgpIHtcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy50aW1lc3RhbXAgKz0gRGF0ZS5ub3coKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmlwcGxlIHtcbiAgcHJpdmF0ZSBfcmlwcGxlUmVmOiBSaXBwbGVSZWY7XG4gIHByaXZhdGUgX2V2ZW50SGFuZGxlcnM6IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4gPSBuZXcgTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPigpO1xuICBjb25maWc6IFJpcHBsZUNvbmZpZyA9IHt9O1xuICBwcml2YXRlIF90cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLl90aGVtZVZhcmlhYmxlcy5yaXBwbGUuZHVyYXRpb247XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNsYXNzZXM6IGFueSxcbiAgICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIF90cmlnZ2VyRWxlbWVudD86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBUb3VjaEV2ZW50ICA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgncG9pbnRlcmRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2Vkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3RvdWNoZW5kJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCd0b3VjaGNhbmNlbCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2V1cCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2VsZWF2ZScsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICBpZiAoIV90cmlnZ2VyRWxlbWVudCkge1xuICAgICAgICBfdHJpZ2dlckVsZW1lbnQgPSBfY29udGFpbmVyRWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoX3RyaWdnZXJFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRDb25maWcoY29uZmlnOiBSaXBwbGVDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9yZWN0Q29udGFpbmVyKCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgLy8gZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc3R5bGVzRGF0YVswXSk7XG4gICAgICAvLyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLnN0eWxlc0RhdGFbMF0uaWQpO1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUmlwcGxlKHN0eWxlczoge1trZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZ30pIHtcbiAgICB0aGlzLl9yaXBwbGVSZWYgPSBuZXcgUmlwcGxlUmVmKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fcmlwcGxlUmVmLmNvbnRhaW5lcjtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gdGhpcy5jbGFzc2VzLnJpcHBsZUNvbnRhaW5lcjtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3R5bGVzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBjb250YWluZXIuc3R5bGVba2V5XSA9IGAke2VsZW1lbnR9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdvcGFjaXR5Jyk7XG4gICAgY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgxKWA7XG4gIH1cblxuICBwcml2YXRlIG9uUG9pbnRlckRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICAvKipEZXN0cm95IHByZXZpb3VzIHJpcHBsZSBpZiBleGlzdCAqL1xuICAgICAgdGhpcy5lbmRSaXBwbGUoKTtcbiAgICAgIHRoaXMuc3RhcnRSaXBwbGUoZXZlbnQsIHRoaXMuY29uZmlnKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBvblBvaW50ZXJMZWF2ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5kUmlwcGxlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRSaXBwbGUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBQb2ludGVyRXZlbnQsIHJpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuX3JlY3RDb250YWluZXI7XG4gICAgbGV0IHggPSBldmVudC5jbGllbnRYLFxuICAgIHkgPSBldmVudC5jbGllbnRZO1xuICAgIGlmIChyaXBwbGVDb25maWcuY2VudGVyZWQpIHtcbiAgICAgIHggPSBjb250YWluZXJSZWN0LmxlZnQgKyBjb250YWluZXJSZWN0LndpZHRoIC8gMjtcbiAgICAgIHkgPSBjb250YWluZXJSZWN0LnRvcCArIGNvbnRhaW5lclJlY3QuaGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgY29uc3QgbGVmdCA9IHggLSBjb250YWluZXJSZWN0LmxlZnQ7XG4gICAgY29uc3QgdG9wID0geSAtIGNvbnRhaW5lclJlY3QudG9wO1xuICAgIGxldCByYWRpdXMgPSByaXBwbGVDb25maWcucmFkaXVzID09PSAnY29udGFpbmVyU2l6ZScgPyBtYXhTaXplKGNvbnRhaW5lclJlY3QpIC8gMiA6IHJpcHBsZUNvbmZpZy5yYWRpdXMgfHwgcmlwcGxlUmFkaXVzKHgsIHksIGNvbnRhaW5lclJlY3QpO1xuICAgIGlmIChyaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UpIHtcbiAgICAgIHJhZGl1cyArPSByYWRpdXMgKiByaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UgLyAxMDA7XG4gICAgfVxuICAgIHRoaXMuY3JlYXRlUmlwcGxlKHtcbiAgICAgIGxlZnQ6IGxlZnQgLSByYWRpdXMsXG4gICAgICB0b3A6IHRvcCAtIHJhZGl1cyxcbiAgICAgIHdpZHRoOiByYWRpdXMgKiAyLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAyLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHt0aGlzLl90cmFuc2l0aW9uRHVyYXRpb259bXNgXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJ1blRpbWVvdXRPdXRzaWRlWm9uZShmbjogRnVuY3Rpb24sIGRlbGF5ID0gMCkge1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KGZuLCBkZWxheSkpO1xuICB9XG5cbiAgZW5kUmlwcGxlKCkge1xuICAgIGNvbnN0IHJpcHBsZVJlZjogUmlwcGxlUmVmID0gdGhpcy5fcmlwcGxlUmVmIHx8IG51bGw7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLl90cmFuc2l0aW9uRHVyYXRpb247XG4gICAgaWYgKHJpcHBsZVJlZiAmJiByaXBwbGVSZWYuc3RhdGUpIHtcbiAgICAgIHJpcHBsZVJlZi5lbmQoKTtcbiAgICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3RoaXMuX3RyYW5zaXRpb25EdXJhdGlvbiAvIDV9bXNgO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gOiAwKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIC8gKGR1cmF0aW9uICogLjAwMSArIDEpIDogMCk7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIC4xNSA6IDApO1xuICAgICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmlwcGxlUmVmLmNvbnRhaW5lcik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAvIChkdXJhdGlvbiAqIC4wMDEgKyAxKSAqIDIgOiBkdXJhdGlvbik7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgICB0aGlzLl9yaXBwbGVSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3RyaWdnZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG5mdW5jdGlvbiByaXBwbGVSYWRpdXMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJlY3Q6IENsaWVudFJlY3QpIHtcbiAgY29uc3QgZGlzdFggPSBNYXRoLm1heChNYXRoLmFicyh4IC0gcmVjdC5sZWZ0KSwgTWF0aC5hYnMoeCAtIHJlY3QucmlnaHQpKTtcbiAgY29uc3QgZGlzdFkgPSBNYXRoLm1heChNYXRoLmFicyh5IC0gcmVjdC50b3ApLCBNYXRoLmFicyh5IC0gcmVjdC5ib3R0b20pKTtcbiAgcmV0dXJuIE1hdGguc3FydChkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WSk7XG59XG5cbmZ1bmN0aW9uIG1heFNpemUocmVjdDogQ2xpZW50UmVjdCkge1xuICByZXR1cm4gTWF0aC5tYXgocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xufVxuIl19