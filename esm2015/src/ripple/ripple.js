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
export class RippleRef {
    constructor() {
        this.state = true;
        this.timestamp = -Date.now();
        this.container = document.createElement('span');
    }
    /**
     * @return {?}
     */
    end() {
        this.state = false;
        this.timestamp += Date.now();
    }
}
if (false) {
    /** @type {?} */
    RippleRef.prototype.state;
    /** @type {?} */
    RippleRef.prototype.timestamp;
    /** @type {?} */
    RippleRef.prototype.container;
}
export class Ripple {
    /**
     * @param {?} _themeVariables
     * @param {?} _ngZone
     * @param {?} classes
     * @param {?} _containerElement
     * @param {?=} _triggerElement
     */
    constructor(_themeVariables, _ngZone, classes, _containerElement, _triggerElement) {
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
            if (typeof PointerEvent === 'function' && !!TouchEvent) {
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
    setConfig(config) {
        this.config = config;
    }
    /**
     * @return {?}
     */
    get _rectContainer() {
        return this._containerElement.getBoundingClientRect();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    setTriggerElement(element) {
        if (element) {
            // element.classList.add(this.stylesData[0]);
            // this._renderer.addClass(element, this.stylesData[0].id);
            this._ngZone.runOutsideAngular(() => {
                this._eventHandlers.forEach((fn, type) => element.addEventListener(type, fn, this._eventOptions));
            });
        }
        this._triggerElement = element;
    }
    /**
     * @param {?} styles
     * @return {?}
     */
    createRipple(styles) {
        this._rippleRef = new RippleRef();
        /** @type {?} */
        const container = this._rippleRef.container;
        container.className = this.classes.rippleContainer;
        for (const key in styles) {
            if (styles.hasOwnProperty(key)) {
                /** @type {?} */
                const element = styles[key];
                if (typeof element === 'number') {
                    container.style[key] = `${element}px`;
                }
                else {
                    container.style[key] = element;
                }
            }
        }
        this._containerElement.appendChild(container);
        window.getComputedStyle(container).getPropertyValue('opacity');
        container.style.transform = `scale(1)`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPointerDown(event) {
        if (!this.config.disabled) {
            /**Destroy previous ripple if exist */
            this.endRipple();
            this.startRipple(event, this.config);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPointerLeave(event) {
        if (!this.config.disabled) {
            this.endRipple();
        }
    }
    /**
     * @param {?} event
     * @param {?} rippleConfig
     * @return {?}
     */
    startRipple(event, rippleConfig) {
        /** @type {?} */
        const containerRect = this._rectContainer;
        /** @type {?} */
        let x = event.clientX;
        /** @type {?} */
        let y = event.clientY;
        if (rippleConfig.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        /** @type {?} */
        const left = x - containerRect.left;
        /** @type {?} */
        const top = y - containerRect.top;
        /** @type {?} */
        let radius = rippleConfig.radius === 'containerSize' ? maxSize(containerRect) / 2 : rippleConfig.radius || rippleRadius(x, y, containerRect);
        if (rippleConfig.percentageToIncrease) {
            radius += radius * rippleConfig.percentageToIncrease / 100;
        }
        this.createRipple({
            left: left - radius,
            top: top - radius,
            width: radius * 2,
            height: radius * 2,
            transitionDuration: `${this._transitionDuration}ms`
        });
    }
    /**
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    runTimeoutOutsideZone(fn, delay = 0) {
        this._ngZone.runOutsideAngular(() => setTimeout(fn, delay));
    }
    /**
     * @return {?}
     */
    endRipple() {
        /** @type {?} */
        const rippleRef = this._rippleRef || null;
        /** @type {?} */
        const duration = this._transitionDuration;
        if (rippleRef && rippleRef.state) {
            rippleRef.end();
            this.runTimeoutOutsideZone(() => {
                rippleRef.container.style.opacity = '0';
                rippleRef.container.style.transitionDuration = `${this._transitionDuration / 5}ms`;
                // }, rippleRef.timestamp < duration ? duration : 0);
                // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) : 0);
            }, rippleRef.timestamp < duration ? duration * .15 : 0);
            this.runTimeoutOutsideZone(() => {
                rippleRef.container.parentNode.removeChild(rippleRef.container);
                // }, rippleRef.timestamp < duration ? duration * 2 : duration);
                // }, rippleRef.timestamp < duration ? duration / (duration * .001 + 1) * 2 : duration);
            }, rippleRef.timestamp < duration ? duration * 2 : duration);
        }
    }
    /**
     * @return {?}
     */
    removeEvents() {
        if (this._triggerElement) {
            this._eventHandlers.forEach((fn, type) => {
                this._triggerElement.removeEventListener(type, fn, this._eventOptions);
            });
        }
    }
}
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
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    /** @type {?} */
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}
/**
 * @param {?} rect
 * @return {?}
 */
function maxSize(rect) {
    return Math.max(rect.width, rect.height);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3JpcHBsZS9yaXBwbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFHdkMsa0NBTUM7OztJQUxDLGdDQUFtQjs7SUFDbkIsZ0NBQW1COztJQUNuQixpQ0FBb0I7O0lBQ3BCLDhCQUFrQzs7SUFDbEMsNENBQThCOztBQUdoQyxNQUFNLE9BQU8sU0FBUztJQUF0QjtRQUNFLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixjQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDZixjQUFTLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFLbkUsQ0FBQzs7OztJQUpDLEdBQUc7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7OztJQVBDLDBCQUFhOztJQUNiLDhCQUF3Qjs7SUFDeEIsOEJBQWlFOztBQU9uRSxNQUFNLE9BQU8sTUFBTTs7Ozs7Ozs7SUFNakIsWUFDVSxlQUErQixFQUMvQixPQUFlLEVBQ2YsT0FBWSxFQUNaLGlCQUE4QixFQUM5QixlQUE2QjtRQUo3QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFDWixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWM7UUFUL0IsbUJBQWMsR0FBb0MsSUFBSSxHQUFHLEVBQThCLENBQUM7UUFDaEcsV0FBTSxHQUFpQixFQUFFLENBQUM7UUFDbEIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFN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RCxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztVQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNsRCxDQUFDOzs7OztBQUVELFNBQVMsT0FBTyxDQUFDLElBQWdCO0lBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJy4uL3BsYXRmb3JtJztcbmltcG9ydCB7IFRoZW1lVmFyaWFibGVzIH0gZnJvbSAnLi4vdGhlbWUvdGhlbWUtY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBSaXBwbGVDb25maWcge1xuICBjZW50ZXJlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgc2Vuc2l0aXZlPzogYm9vbGVhbjtcbiAgcmFkaXVzPzogJ2NvbnRhaW5lclNpemUnIHwgbnVtYmVyO1xuICBwZXJjZW50YWdlVG9JbmNyZWFzZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFJpcHBsZVJlZiB7XG4gIHN0YXRlID0gdHJ1ZTtcbiAgdGltZXN0YW1wID0gLURhdGUubm93KCk7XG4gIHJlYWRvbmx5IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGVuZCgpIHtcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy50aW1lc3RhbXAgKz0gRGF0ZS5ub3coKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmlwcGxlIHtcbiAgcHJpdmF0ZSBfcmlwcGxlUmVmOiBSaXBwbGVSZWY7XG4gIHByaXZhdGUgX2V2ZW50SGFuZGxlcnM6IE1hcDxzdHJpbmcsIChlOiBFdmVudCkgPT4gdm9pZD4gPSBuZXcgTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPigpO1xuICBjb25maWc6IFJpcHBsZUNvbmZpZyA9IHt9O1xuICBwcml2YXRlIF90cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLl90aGVtZVZhcmlhYmxlcy5yaXBwbGUuZHVyYXRpb247XG4gIHByaXZhdGUgX2V2ZW50T3B0aW9ucyA9IHtwYXNzaXZlOiB0cnVlfSBhcyBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3RoZW1lVmFyaWFibGVzOiBUaGVtZVZhcmlhYmxlcyxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNsYXNzZXM6IGFueSxcbiAgICBwcml2YXRlIF9jb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBwcml2YXRlIF90cmlnZ2VyRWxlbWVudD86IEhUTUxFbGVtZW50XG4gICkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgUG9pbnRlckV2ZW50ID09PSAnZnVuY3Rpb24nICYmICEhVG91Y2hFdmVudCkge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgncG9pbnRlcmRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2Vkb3duJywgdGhpcy5vblBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3RvdWNoZW5kJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCd0b3VjaGNhbmNlbCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2V1cCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2VsZWF2ZScsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICBpZiAoIV90cmlnZ2VyRWxlbWVudCkge1xuICAgICAgICBfdHJpZ2dlckVsZW1lbnQgPSBfY29udGFpbmVyRWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoX3RyaWdnZXJFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRDb25maWcoY29uZmlnOiBSaXBwbGVDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9yZWN0Q29udGFpbmVyKCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgLy8gZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc3R5bGVzRGF0YVswXSk7XG4gICAgICAvLyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLnN0eWxlc0RhdGFbMF0uaWQpO1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUmlwcGxlKHN0eWxlczoge1trZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZ30pIHtcbiAgICB0aGlzLl9yaXBwbGVSZWYgPSBuZXcgUmlwcGxlUmVmKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fcmlwcGxlUmVmLmNvbnRhaW5lcjtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gdGhpcy5jbGFzc2VzLnJpcHBsZUNvbnRhaW5lcjtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3R5bGVzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBjb250YWluZXIuc3R5bGVba2V5XSA9IGAke2VsZW1lbnR9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdvcGFjaXR5Jyk7XG4gICAgY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgxKWA7XG4gIH1cblxuICBwcml2YXRlIG9uUG9pbnRlckRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLmRpc2FibGVkKSB7XG4gICAgICAvKipEZXN0cm95IHByZXZpb3VzIHJpcHBsZSBpZiBleGlzdCAqL1xuICAgICAgdGhpcy5lbmRSaXBwbGUoKTtcbiAgICAgIHRoaXMuc3RhcnRSaXBwbGUoZXZlbnQsIHRoaXMuY29uZmlnKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBvblBvaW50ZXJMZWF2ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5kUmlwcGxlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRSaXBwbGUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBQb2ludGVyRXZlbnQsIHJpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuX3JlY3RDb250YWluZXI7XG4gICAgbGV0IHggPSBldmVudC5jbGllbnRYLFxuICAgIHkgPSBldmVudC5jbGllbnRZO1xuICAgIGlmIChyaXBwbGVDb25maWcuY2VudGVyZWQpIHtcbiAgICAgIHggPSBjb250YWluZXJSZWN0LmxlZnQgKyBjb250YWluZXJSZWN0LndpZHRoIC8gMjtcbiAgICAgIHkgPSBjb250YWluZXJSZWN0LnRvcCArIGNvbnRhaW5lclJlY3QuaGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgY29uc3QgbGVmdCA9IHggLSBjb250YWluZXJSZWN0LmxlZnQ7XG4gICAgY29uc3QgdG9wID0geSAtIGNvbnRhaW5lclJlY3QudG9wO1xuICAgIGxldCByYWRpdXMgPSByaXBwbGVDb25maWcucmFkaXVzID09PSAnY29udGFpbmVyU2l6ZScgPyBtYXhTaXplKGNvbnRhaW5lclJlY3QpIC8gMiA6IHJpcHBsZUNvbmZpZy5yYWRpdXMgfHwgcmlwcGxlUmFkaXVzKHgsIHksIGNvbnRhaW5lclJlY3QpO1xuICAgIGlmIChyaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UpIHtcbiAgICAgIHJhZGl1cyArPSByYWRpdXMgKiByaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UgLyAxMDA7XG4gICAgfVxuICAgIHRoaXMuY3JlYXRlUmlwcGxlKHtcbiAgICAgIGxlZnQ6IGxlZnQgLSByYWRpdXMsXG4gICAgICB0b3A6IHRvcCAtIHJhZGl1cyxcbiAgICAgIHdpZHRoOiByYWRpdXMgKiAyLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAyLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHt0aGlzLl90cmFuc2l0aW9uRHVyYXRpb259bXNgXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJ1blRpbWVvdXRPdXRzaWRlWm9uZShmbjogRnVuY3Rpb24sIGRlbGF5ID0gMCkge1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KGZuLCBkZWxheSkpO1xuICB9XG5cbiAgZW5kUmlwcGxlKCkge1xuICAgIGNvbnN0IHJpcHBsZVJlZjogUmlwcGxlUmVmID0gdGhpcy5fcmlwcGxlUmVmIHx8IG51bGw7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLl90cmFuc2l0aW9uRHVyYXRpb247XG4gICAgaWYgKHJpcHBsZVJlZiAmJiByaXBwbGVSZWYuc3RhdGUpIHtcbiAgICAgIHJpcHBsZVJlZi5lbmQoKTtcbiAgICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3RoaXMuX3RyYW5zaXRpb25EdXJhdGlvbiAvIDV9bXNgO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gOiAwKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIC8gKGR1cmF0aW9uICogLjAwMSArIDEpIDogMCk7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIC4xNSA6IDApO1xuICAgICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmlwcGxlUmVmLmNvbnRhaW5lcik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAvIChkdXJhdGlvbiAqIC4wMDEgKyAxKSAqIDIgOiBkdXJhdGlvbik7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgfVxuICB9XG4gIHJlbW92ZUV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHJpcHBsZVJhZGl1cyh4OiBudW1iZXIsIHk6IG51bWJlciwgcmVjdDogQ2xpZW50UmVjdCkge1xuICBjb25zdCBkaXN0WCA9IE1hdGgubWF4KE1hdGguYWJzKHggLSByZWN0LmxlZnQpLCBNYXRoLmFicyh4IC0gcmVjdC5yaWdodCkpO1xuICBjb25zdCBkaXN0WSA9IE1hdGgubWF4KE1hdGguYWJzKHkgLSByZWN0LnRvcCksIE1hdGguYWJzKHkgLSByZWN0LmJvdHRvbSkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZKTtcbn1cblxuZnVuY3Rpb24gbWF4U2l6ZShyZWN0OiBDbGllbnRSZWN0KSB7XG4gIHJldHVybiBNYXRoLm1heChyZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG59XG4iXX0=