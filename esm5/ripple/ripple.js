/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Platform } from '@alyle/ui';
/**
 * @record
 */
export function RippleConfig() { }
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
export { Ripple };
if (false) {
    /** @type {?} */
    Ripple.prototype._rippleRef;
    /** @type {?} */
    Ripple.prototype._state;
    /** @type {?} */
    Ripple.prototype._eventHandlers;
    /** @type {?} */
    Ripple.prototype.rippleConfig;
    /** @type {?} */
    Ripple.prototype._transitionDuration;
    /** @type {?} */
    Ripple.prototype._eventOptions;
    /** @type {?} */
    Ripple.prototype._ngZone;
    /** @type {?} */
    Ripple.prototype.stylesData;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL3JpcHBsZS8iLCJzb3VyY2VzIjpbInJpcHBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBVXJDLElBQUE7O3FCQUNVLElBQUk7eUJBQ0EsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO3lCQUNXLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOzs7OztJQUNoRSx1QkFBRzs7O0lBQUg7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM5QjtvQkFsQkg7SUFtQkMsQ0FBQTtBQVJELHFCQVFDOzs7Ozs7Ozs7QUFFRCxJQUFBO0lBT0UsZ0JBQ1UsU0FDQSxZQUNBLG1CQUNBO1FBSEEsWUFBTyxHQUFQLE9BQU87UUFDUCxlQUFVLEdBQVYsVUFBVTtRQUNWLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsb0JBQWUsR0FBZixlQUFlO3NCQVRSLElBQUk7OEJBQ3FDLElBQUksR0FBRyxFQUE4Qjs0QkFDMUQsRUFBRTttQ0FDVCxPQUFPOytDQUNiLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBUTtRQU81QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JFO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDcEIsZUFBZSxHQUFHLGlCQUFpQixDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7Ozs7O0lBRUQsMEJBQVM7Ozs7SUFBVCxVQUFVLE1BQW9CO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0tBQzVCOzBCQUVXLGtDQUFjOzs7OztZQUN4QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOzs7Ozs7Ozs7SUFHaEQsa0NBQWlCOzs7O2NBQUMsT0FBMkI7O1FBQ25ELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUUxQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUM3QixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQUUsRUFBRSxJQUFJLElBQUssT0FBQSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQzthQUNuRyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDOzs7Ozs7SUFHekIsNkJBQVk7Ozs7Y0FBQyxNQUF3QztRQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7O1FBQ2xDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQzVDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxLQUFLLElBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUN4QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7O2dCQUM5QixJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO29CQUMvQixTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFNLE9BQU8sT0FBSSxDQUFDO2lCQUN2QztxQkFBTTtvQkFDTCxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDaEM7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDOzs7Ozs7SUFHakMsOEJBQWE7Ozs7Y0FBQyxLQUFpQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7O1lBRS9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUM7Ozs7OztJQUVLLCtCQUFjOzs7O2NBQUMsS0FBaUI7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjs7Ozs7OztJQUdILDRCQUFXOzs7OztJQUFYLFVBQVksS0FBZ0MsRUFBRSxZQUEwQjs7UUFDdEUsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7UUFDMUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FDSDs7UUFEbEIsSUFDQSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNsQixJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDekIsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDakQsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDbEQ7O1FBQ0QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7O1FBQ3BDLElBQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDOztRQUNsQyxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM3SSxJQUFJLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTtZQUNyQyxNQUFNLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUM7U0FDNUQ7O1FBQ0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUMvQixJQUFJLEVBQUUsSUFBSSxHQUFHLE1BQU07WUFDbkIsR0FBRyxFQUFFLEdBQUcsR0FBRyxNQUFNO1lBQ2pCLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQztZQUNqQixNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7WUFDbEIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtTQUM3QyxDQUFDLENBQUM7S0FDSjs7Ozs7O0lBRU8sc0NBQXFCOzs7OztjQUFDLEVBQVksRUFBRSxLQUFTO1FBQVQsc0JBQUEsRUFBQSxTQUFTO1FBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsY0FBTSxPQUFBLFVBQVUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQzs7Ozs7SUFHOUQsMEJBQVM7OztJQUFUOztRQUNFLElBQU0sU0FBUyxHQUFjLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDOztRQUNyRCxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdEQsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNoQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2dCQUN6QixTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUN4QyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUM7OzthQUd4RCxFQUFFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMscUJBQXFCLENBQUM7Z0JBQ3pCLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7OzthQUdqRSxFQUFFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5RDtLQUNGOzs7O0lBQ0QsNkJBQVk7OztJQUFaO1FBQUEsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFLEVBQUUsSUFBSTtnQkFDbkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN4RSxDQUFDLENBQUM7U0FDSjtLQUNGO2lCQXpKSDtJQTJKQyxDQUFBO0FBdElELGtCQXNJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxzQkFBc0IsQ0FBUyxFQUFFLENBQVMsRUFBRSxJQUFnQjs7SUFDMUQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O0lBQzFFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztDQUNqRDs7Ozs7QUFFRCxpQkFBaUIsSUFBZ0I7SUFDL0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmlwcGxlQ29uZmlnIHtcbiAgY2VudGVyZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHNlbnNpdGl2ZT86IGJvb2xlYW47XG4gIHJhZGl1cz86ICdjb250YWluZXJTaXplJyB8IG51bWJlcjtcbiAgcGVyY2VudGFnZVRvSW5jcmVhc2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGVSZWYge1xuICBzdGF0ZSA9IHRydWU7XG4gIHRpbWVzdGFtcCA9IC1EYXRlLm5vdygpO1xuICByZWFkb25seSBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbmQoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMudGltZXN0YW1wICs9IERhdGUubm93KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJpcHBsZSB7XG4gIHByaXZhdGUgX3JpcHBsZVJlZjogUmlwcGxlUmVmO1xuICBwcml2YXRlIF9zdGF0ZSA9IHRydWU7XG4gIHByaXZhdGUgX2V2ZW50SGFuZGxlcnM6IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4gPSBuZXcgTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIHJpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnID0ge307XG4gIHByaXZhdGUgX3RyYW5zaXRpb25EdXJhdGlvbiA9ICc5NTBtcyc7XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgc3R5bGVzRGF0YTogc3RyaW5nW10sXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBfdHJpZ2dlckVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBpZiAodHlwZW9mIFRvdWNoRXZlbnQgPT09ICdmdW5jdGlvbicgJiYgISFUb3VjaEV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdwb2ludGVyZG93bicsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3RvdWNoZW5kJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2V1cCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2VsZWF2ZScsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICBpZiAoIV90cmlnZ2VyRWxlbWVudCkge1xuICAgICAgICBfdHJpZ2dlckVsZW1lbnQgPSBfY29udGFpbmVyRWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoX3RyaWdnZXJFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRDb25maWcoY29uZmlnOiBSaXBwbGVDb25maWcpIHtcbiAgICB0aGlzLnJpcHBsZUNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9yZWN0Q29udGFpbmVyKCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc3R5bGVzRGF0YVswXSk7XG4gICAgICAvLyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLnN0eWxlc0RhdGFbMF0uaWQpO1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUmlwcGxlKHN0eWxlczoge1trZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZ30pIHtcbiAgICB0aGlzLl9yaXBwbGVSZWYgPSBuZXcgUmlwcGxlUmVmKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fcmlwcGxlUmVmLmNvbnRhaW5lcjtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gdGhpcy5zdHlsZXNEYXRhWzFdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdHlsZXNba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gYCR7ZWxlbWVudH1weGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLnN0eWxlW2tleV0gPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoJ29wYWNpdHknKTtcbiAgICBjb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKDEpYDtcbiAgfVxuXG4gIHByaXZhdGUgb25Qb2ludGVyRG93bihldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5yaXBwbGVDb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIC8qKkRlc3Ryb3kgcHJldmlvdXMgcmlwcGxlIGlmIGV4aXN0ICovXG4gICAgICB0aGlzLmVuZFJpcHBsZSgpO1xuICAgICAgdGhpcy5zdGFydFJpcHBsZShldmVudCwgdGhpcy5yaXBwbGVDb25maWcpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIG9uUG9pbnRlckxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnJpcHBsZUNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5lbmRSaXBwbGUoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFJpcHBsZShldmVudDogTW91c2VFdmVudCB8IFBvaW50ZXJFdmVudCwgcmlwcGxlQ29uZmlnOiBSaXBwbGVDb25maWcpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5fcmVjdENvbnRhaW5lcjtcbiAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFgsXG4gICAgeSA9IGV2ZW50LmNsaWVudFk7XG4gICAgaWYgKHJpcHBsZUNvbmZpZy5jZW50ZXJlZCkge1xuICAgICAgeCA9IGNvbnRhaW5lclJlY3QubGVmdCArIGNvbnRhaW5lclJlY3Qud2lkdGggLyAyO1xuICAgICAgeSA9IGNvbnRhaW5lclJlY3QudG9wICsgY29udGFpbmVyUmVjdC5oZWlnaHQgLyAyO1xuICAgIH1cbiAgICBjb25zdCBsZWZ0ID0geCAtIGNvbnRhaW5lclJlY3QubGVmdDtcbiAgICBjb25zdCB0b3AgPSB5IC0gY29udGFpbmVyUmVjdC50b3A7XG4gICAgbGV0IHJhZGl1cyA9IHJpcHBsZUNvbmZpZy5yYWRpdXMgPT09ICdjb250YWluZXJTaXplJyA/IG1heFNpemUoY29udGFpbmVyUmVjdCkgLyAyIDogcmlwcGxlQ29uZmlnLnJhZGl1cyB8fCByaXBwbGVSYWRpdXMoeCwgeSwgY29udGFpbmVyUmVjdCk7XG4gICAgaWYgKHJpcHBsZUNvbmZpZy5wZXJjZW50YWdlVG9JbmNyZWFzZSkge1xuICAgICAgcmFkaXVzICs9IHJhZGl1cyAqIHJpcHBsZUNvbmZpZy5wZXJjZW50YWdlVG9JbmNyZWFzZSAvIDEwMDtcbiAgICB9XG4gICAgY29uc3QgcmlwcGxlID0gdGhpcy5jcmVhdGVSaXBwbGUoe1xuICAgICAgbGVmdDogbGVmdCAtIHJhZGl1cyxcbiAgICAgIHRvcDogdG9wIC0gcmFkaXVzLFxuICAgICAgd2lkdGg6IHJhZGl1cyAqIDIsXG4gICAgICBoZWlnaHQ6IHJhZGl1cyAqIDIsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHRoaXMuX3RyYW5zaXRpb25EdXJhdGlvblxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5UaW1lb3V0T3V0c2lkZVpvbmUoZm46IEZ1bmN0aW9uLCBkZWxheSA9IDApIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dChmbiwgZGVsYXkpKTtcbiAgfVxuXG4gIGVuZFJpcHBsZSgpIHtcbiAgICBjb25zdCByaXBwbGVSZWY6IFJpcHBsZVJlZiA9IHRoaXMuX3JpcHBsZVJlZiB8fCBudWxsO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VGbG9hdCh0aGlzLl90cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIGlmIChyaXBwbGVSZWYgJiYgcmlwcGxlUmVmLnN0YXRlKSB7XG4gICAgICByaXBwbGVSZWYuZW5kKCk7XG4gICAgICB0aGlzLnJ1blRpbWVvdXRPdXRzaWRlWm9uZSgoKSA9PiB7XG4gICAgICAgIHJpcHBsZVJlZi5jb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMjAwbXMnO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gOiAwKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIC8gKGR1cmF0aW9uICogLjAwMSArIDEpIDogMCk7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIC4xNSA6IDApO1xuICAgICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmlwcGxlUmVmLmNvbnRhaW5lcik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAvIChkdXJhdGlvbiAqIC4wMDEgKyAxKSAqIDIgOiBkdXJhdGlvbik7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgfVxuICB9XG4gIHJlbW92ZUV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHJpcHBsZVJhZGl1cyh4OiBudW1iZXIsIHk6IG51bWJlciwgcmVjdDogQ2xpZW50UmVjdCkge1xuICBjb25zdCBkaXN0WCA9IE1hdGgubWF4KE1hdGguYWJzKHggLSByZWN0LmxlZnQpLCBNYXRoLmFicyh4IC0gcmVjdC5yaWdodCkpO1xuICBjb25zdCBkaXN0WSA9IE1hdGgubWF4KE1hdGguYWJzKHkgLSByZWN0LnRvcCksIE1hdGguYWJzKHkgLSByZWN0LmJvdHRvbSkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZKTtcbn1cblxuZnVuY3Rpb24gbWF4U2l6ZShyZWN0OiBDbGllbnRSZWN0KSB7XG4gIHJldHVybiBNYXRoLm1heChyZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG59XG4iXX0=