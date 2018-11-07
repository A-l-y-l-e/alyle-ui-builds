import { Platform, LyTheme2, LY_COMMON_STYLES, toBoolean } from '@alyle/ui';
import { Injectable, NgModule, ElementRef, Input, Directive, NgZone, defineInjectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RippleRef {
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
class Ripple {
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
    setConfig(config) {
        this.rippleConfig = config;
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
        if (!this.rippleConfig.disabled) {
            /**Destroy previous ripple if exist */
            this.endRipple();
            this.startRipple(event, this.rippleConfig);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPointerLeave(event) {
        if (!this.rippleConfig.disabled) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const styles = (theme) => ({
    rippleContainer: {
        position: 'absolute',
        width: '5px',
        height: '5px',
        background: 'currentColor',
        opacity: '.19',
        borderRadius: '100%',
        transform: 'scale(0)',
        transition: `opacity ${theme.ripple.transition.opacity},transform ${theme.ripple.transition.transform}`,
        pointerEvents: 'none'
    },
    container: Object.assign({}, LY_COMMON_STYLES.fill, { overflow: 'hidden', pointerEvents: 'none', borderRadius: 'inherit' })
});
class LyRippleService {
    /**
     * @param {?} theme
     */
    constructor(theme) {
        this.theme = theme;
        this.classes = this.theme.addStyleSheet(styles);
    }
}
LyRippleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyRippleService.ctorParameters = () => [
    { type: LyTheme2 }
];
/** @nocollapse */ LyRippleService.ngInjectableDef = defineInjectable({ factory: function LyRippleService_Factory() { return new LyRippleService(inject(LyTheme2)); }, token: LyRippleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyRipple {
    /**
     * @param {?} rippleService
     * @param {?} _elementRef
     * @param {?} _ngZone
     * @param {?} _theme
     */
    constructor(rippleService, _elementRef, _ngZone, _theme) {
        this.rippleService = rippleService;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._theme = _theme;
        if (Platform.isBrowser) {
            this.rippleContainer = new Ripple(this._theme.config, this._ngZone, this.rippleService.classes, this._elementRef.nativeElement);
        }
    }
    /**
     * @return {?}
     */
    get lyRippleConfig() {
        return {
            centered: toBoolean(this.lyRippleCentered),
            disabled: toBoolean(this.lyRippleDisabled),
            sensitive: toBoolean(this.lyRippleSensitive),
            radius: this.lyRippleRadius,
            percentageToIncrease: this.lyRipplePercentageToIncrease,
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._updateRipple();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._updateRipple();
    }
    /**
     * @return {?}
     */
    _updateRipple() {
        if (Platform.isBrowser) {
            this.rippleContainer.setConfig(this.lyRippleConfig);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.rippleContainer) {
            this.rippleContainer.removeEvents();
        }
    }
}
LyRipple.decorators = [
    { type: Directive, args: [{
                selector: '[lyRipple], [ly-ripple]',
                exportAs: 'lyRipple'
            },] }
];
/** @nocollapse */
LyRipple.ctorParameters = () => [
    { type: LyRippleService },
    { type: ElementRef },
    { type: NgZone },
    { type: LyTheme2 }
];
LyRipple.propDecorators = {
    lyRippleCentered: [{ type: Input }],
    lyRippleDisabled: [{ type: Input }],
    lyRippleSensitive: [{ type: Input }],
    lyRippleRadius: [{ type: Input }],
    lyRipplePercentageToIncrease: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LyRippleModule {
}
LyRippleModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [LyRipple],
                exports: [LyRipple]
            },] }
];

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

export { LyRippleModule, LyRipple, styles, LyRippleService, RippleRef, Ripple };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx5bGUtdWktcmlwcGxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYWx5bGUvdWkvcmlwcGxlL3JpcHBsZS50cyIsIm5nOi8vQGFseWxlL3VpL3JpcHBsZS9yaXBwbGUuc2VydmljZS50cyIsIm5nOi8vQGFseWxlL3VpL3JpcHBsZS9yaXBwbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9AYWx5bGUvdWkvcmlwcGxlL3JpcHBsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJpcHBsZUNvbmZpZyB7XG4gIGNlbnRlcmVkPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBzZW5zaXRpdmU/OiBib29sZWFuO1xuICByYWRpdXM/OiAnY29udGFpbmVyU2l6ZScgfCBudW1iZXI7XG4gIHBlcmNlbnRhZ2VUb0luY3JlYXNlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUmlwcGxlUmVmIHtcbiAgc3RhdGUgPSB0cnVlO1xuICB0aW1lc3RhbXAgPSAtRGF0ZS5ub3coKTtcbiAgcmVhZG9ubHkgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZW5kKCkge1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnRpbWVzdGFtcCArPSBEYXRlLm5vdygpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSaXBwbGUge1xuICBwcml2YXRlIF9yaXBwbGVSZWY6IFJpcHBsZVJlZjtcbiAgcHJpdmF0ZSBfZXZlbnRIYW5kbGVyczogTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPiA9IG5ldyBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgcmlwcGxlQ29uZmlnOiBSaXBwbGVDb25maWcgPSB7fTtcbiAgcHJpdmF0ZSBfdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5fdGhlbWVWYXJpYWJsZXMucmlwcGxlLmR1cmF0aW9uO1xuICBwcml2YXRlIF9ldmVudE9wdGlvbnMgPSB7cGFzc2l2ZTogdHJ1ZX0gYXMgYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF90aGVtZVZhcmlhYmxlczogVGhlbWVWYXJpYWJsZXMsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiBhbnksXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgcHJpdmF0ZSBfdHJpZ2dlckVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICBpZiAodHlwZW9mIFRvdWNoRXZlbnQgPT09ICdmdW5jdGlvbicgJiYgISFUb3VjaEV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdwb2ludGVyZG93bicsIHRoaXMub25Qb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5zZXQoJ3RvdWNoZW5kJywgdGhpcy5vblBvaW50ZXJMZWF2ZS5iaW5kKHRoaXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuc2V0KCdtb3VzZWRvd24nLCB0aGlzLm9uUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2V1cCcsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnNldCgnbW91c2VsZWF2ZScsIHRoaXMub25Qb2ludGVyTGVhdmUuYmluZCh0aGlzKSk7XG4gICAgICBpZiAoIV90cmlnZ2VyRWxlbWVudCkge1xuICAgICAgICBfdHJpZ2dlckVsZW1lbnQgPSBfY29udGFpbmVyRWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VHJpZ2dlckVsZW1lbnQoX3RyaWdnZXJFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRDb25maWcoY29uZmlnOiBSaXBwbGVDb25maWcpIHtcbiAgICB0aGlzLnJpcHBsZUNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9yZWN0Q29udGFpbmVyKCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgLy8gZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuc3R5bGVzRGF0YVswXSk7XG4gICAgICAvLyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLnN0eWxlc0RhdGFbMF0uaWQpO1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3RyaWdnZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUmlwcGxlKHN0eWxlczoge1trZXk6IHN0cmluZ106IG51bWJlciB8IHN0cmluZ30pIHtcbiAgICB0aGlzLl9yaXBwbGVSZWYgPSBuZXcgUmlwcGxlUmVmKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fcmlwcGxlUmVmLmNvbnRhaW5lcjtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gdGhpcy5jbGFzc2VzLnJpcHBsZUNvbnRhaW5lcjtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3R5bGVzW2tleV07XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBjb250YWluZXIuc3R5bGVba2V5XSA9IGAke2VsZW1lbnR9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdvcGFjaXR5Jyk7XG4gICAgY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgxKWA7XG4gIH1cblxuICBwcml2YXRlIG9uUG9pbnRlckRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMucmlwcGxlQ29uZmlnLmRpc2FibGVkKSB7XG4gICAgICAvKipEZXN0cm95IHByZXZpb3VzIHJpcHBsZSBpZiBleGlzdCAqL1xuICAgICAgdGhpcy5lbmRSaXBwbGUoKTtcbiAgICAgIHRoaXMuc3RhcnRSaXBwbGUoZXZlbnQsIHRoaXMucmlwcGxlQ29uZmlnKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBvblBvaW50ZXJMZWF2ZShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5yaXBwbGVDb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5kUmlwcGxlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRSaXBwbGUoZXZlbnQ6IE1vdXNlRXZlbnQgfCBQb2ludGVyRXZlbnQsIHJpcHBsZUNvbmZpZzogUmlwcGxlQ29uZmlnKSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuX3JlY3RDb250YWluZXI7XG4gICAgbGV0IHggPSBldmVudC5jbGllbnRYLFxuICAgIHkgPSBldmVudC5jbGllbnRZO1xuICAgIGlmIChyaXBwbGVDb25maWcuY2VudGVyZWQpIHtcbiAgICAgIHggPSBjb250YWluZXJSZWN0LmxlZnQgKyBjb250YWluZXJSZWN0LndpZHRoIC8gMjtcbiAgICAgIHkgPSBjb250YWluZXJSZWN0LnRvcCArIGNvbnRhaW5lclJlY3QuaGVpZ2h0IC8gMjtcbiAgICB9XG4gICAgY29uc3QgbGVmdCA9IHggLSBjb250YWluZXJSZWN0LmxlZnQ7XG4gICAgY29uc3QgdG9wID0geSAtIGNvbnRhaW5lclJlY3QudG9wO1xuICAgIGxldCByYWRpdXMgPSByaXBwbGVDb25maWcucmFkaXVzID09PSAnY29udGFpbmVyU2l6ZScgPyBtYXhTaXplKGNvbnRhaW5lclJlY3QpIC8gMiA6IHJpcHBsZUNvbmZpZy5yYWRpdXMgfHwgcmlwcGxlUmFkaXVzKHgsIHksIGNvbnRhaW5lclJlY3QpO1xuICAgIGlmIChyaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UpIHtcbiAgICAgIHJhZGl1cyArPSByYWRpdXMgKiByaXBwbGVDb25maWcucGVyY2VudGFnZVRvSW5jcmVhc2UgLyAxMDA7XG4gICAgfVxuICAgIHRoaXMuY3JlYXRlUmlwcGxlKHtcbiAgICAgIGxlZnQ6IGxlZnQgLSByYWRpdXMsXG4gICAgICB0b3A6IHRvcCAtIHJhZGl1cyxcbiAgICAgIHdpZHRoOiByYWRpdXMgKiAyLFxuICAgICAgaGVpZ2h0OiByYWRpdXMgKiAyLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHt0aGlzLl90cmFuc2l0aW9uRHVyYXRpb259bXNgXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJ1blRpbWVvdXRPdXRzaWRlWm9uZShmbjogRnVuY3Rpb24sIGRlbGF5ID0gMCkge1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KGZuLCBkZWxheSkpO1xuICB9XG5cbiAgZW5kUmlwcGxlKCkge1xuICAgIGNvbnN0IHJpcHBsZVJlZjogUmlwcGxlUmVmID0gdGhpcy5fcmlwcGxlUmVmIHx8IG51bGw7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLl90cmFuc2l0aW9uRHVyYXRpb247XG4gICAgaWYgKHJpcHBsZVJlZiAmJiByaXBwbGVSZWYuc3RhdGUpIHtcbiAgICAgIHJpcHBsZVJlZi5lbmQoKTtcbiAgICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgICAgcmlwcGxlUmVmLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke3RoaXMuX3RyYW5zaXRpb25EdXJhdGlvbiAvIDV9bXNgO1xuICAgICAgLy8gfSwgcmlwcGxlUmVmLnRpbWVzdGFtcCA8IGR1cmF0aW9uID8gZHVyYXRpb24gOiAwKTtcbiAgICAgIC8vIH0sIHJpcHBsZVJlZi50aW1lc3RhbXAgPCBkdXJhdGlvbiA/IGR1cmF0aW9uIC8gKGR1cmF0aW9uICogLjAwMSArIDEpIDogMCk7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIC4xNSA6IDApO1xuICAgICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgICByaXBwbGVSZWYuY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmlwcGxlUmVmLmNvbnRhaW5lcik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgICAvLyB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAvIChkdXJhdGlvbiAqIC4wMDEgKyAxKSAqIDIgOiBkdXJhdGlvbik7XG4gICAgICB9LCByaXBwbGVSZWYudGltZXN0YW1wIDwgZHVyYXRpb24gPyBkdXJhdGlvbiAqIDIgOiBkdXJhdGlvbik7XG4gICAgfVxuICB9XG4gIHJlbW92ZUV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIHJpcHBsZVJhZGl1cyh4OiBudW1iZXIsIHk6IG51bWJlciwgcmVjdDogQ2xpZW50UmVjdCkge1xuICBjb25zdCBkaXN0WCA9IE1hdGgubWF4KE1hdGguYWJzKHggLSByZWN0LmxlZnQpLCBNYXRoLmFicyh4IC0gcmVjdC5yaWdodCkpO1xuICBjb25zdCBkaXN0WSA9IE1hdGgubWF4KE1hdGguYWJzKHkgLSByZWN0LnRvcCksIE1hdGguYWJzKHkgLSByZWN0LmJvdHRvbSkpO1xuICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZKTtcbn1cblxuZnVuY3Rpb24gbWF4U2l6ZShyZWN0OiBDbGllbnRSZWN0KSB7XG4gIHJldHVybiBNYXRoLm1heChyZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeVRoZW1lMiwgTFlfQ09NTU9OX1NUWUxFUywgVGhlbWVWYXJpYWJsZXMgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gKHRoZW1lOiBUaGVtZVZhcmlhYmxlcykgPT4gKHtcbiAgcmlwcGxlQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICc1cHgnLFxuICAgIGhlaWdodDogJzVweCcsXG4gICAgYmFja2dyb3VuZDogJ2N1cnJlbnRDb2xvcicsXG4gICAgb3BhY2l0eTogJy4xOScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTAwJScsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhlbWUucmlwcGxlLnRyYW5zaXRpb24ub3BhY2l0eX0sdHJhbnNmb3JtICR7dGhlbWUucmlwcGxlLnRyYW5zaXRpb24udHJhbnNmb3JtXG4gICAgfWAsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIC4uLkxZX0NPTU1PTl9TVFlMRVMuZmlsbCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gIH1cbn0pO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeVJpcHBsZVNlcnZpY2Uge1xuICBjbGFzc2VzID0gdGhpcy50aGVtZS5hZGRTdHlsZVNoZWV0KHN0eWxlcyk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGhlbWU6IEx5VGhlbWUyXG4gICkgeyB9XG5cbn1cbiIsImltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIFBsYXRmb3JtLCBMeVRoZW1lMiB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBSaXBwbGUsIFJpcHBsZUNvbmZpZyB9IGZyb20gJy4vcmlwcGxlJztcbmltcG9ydCB7IEx5UmlwcGxlU2VydmljZSB9IGZyb20gJy4vcmlwcGxlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHlSaXBwbGVdLCBbbHktcmlwcGxlXScsXG4gIGV4cG9ydEFzOiAnbHlSaXBwbGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5UmlwcGxlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHJpcHBsZUNvbnRhaW5lcjogUmlwcGxlO1xuICBASW5wdXQoKSBseVJpcHBsZUNlbnRlcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBseVJpcHBsZURpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBseVJpcHBsZVNlbnNpdGl2ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbHlSaXBwbGVSYWRpdXM6ICdjb250YWluZXJTaXplJyB8IG51bWJlcjtcbiAgQElucHV0KCkgbHlSaXBwbGVQZXJjZW50YWdlVG9JbmNyZWFzZTogbnVtYmVyO1xuICBnZXQgbHlSaXBwbGVDb25maWcoKTogUmlwcGxlQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2VudGVyZWQ6IHRvQm9vbGVhbih0aGlzLmx5UmlwcGxlQ2VudGVyZWQpLFxuICAgICAgZGlzYWJsZWQ6IHRvQm9vbGVhbih0aGlzLmx5UmlwcGxlRGlzYWJsZWQpLFxuICAgICAgc2Vuc2l0aXZlOiB0b0Jvb2xlYW4odGhpcy5seVJpcHBsZVNlbnNpdGl2ZSksXG4gICAgICByYWRpdXM6IHRoaXMubHlSaXBwbGVSYWRpdXMsXG4gICAgICBwZXJjZW50YWdlVG9JbmNyZWFzZTogdGhpcy5seVJpcHBsZVBlcmNlbnRhZ2VUb0luY3JlYXNlLFxuICAgIH07XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByaXBwbGVTZXJ2aWNlOiBMeVJpcHBsZVNlcnZpY2UsXG4gICAgcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3RoZW1lOiBMeVRoZW1lMlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lciA9IG5ldyBSaXBwbGUodGhpcy5fdGhlbWUuY29uZmlnLCB0aGlzLl9uZ1pvbmUsIHRoaXMucmlwcGxlU2VydmljZS5jbGFzc2VzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3VwZGF0ZVJpcHBsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlUmlwcGxlKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVSaXBwbGUoKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5yaXBwbGVDb250YWluZXIuc2V0Q29uZmlnKHRoaXMubHlSaXBwbGVDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnJpcHBsZUNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yaXBwbGVDb250YWluZXIucmVtb3ZlRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlSaXBwbGUgfSBmcm9tICcuL3JpcHBsZS5kaXJlY3RpdmUnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVJpcHBsZV0sXG4gIGV4cG9ydHM6IFtMeVJpcHBsZV1cbn0pXG5leHBvcnQgY2xhc3MgTHlSaXBwbGVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxNQVVhLFNBQVM7O1FBQ3BCLGFBQVEsSUFBSSxDQUFDO1FBQ2IsaUJBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEIsaUJBQWtDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7O0lBQ2pFLEdBQUc7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM5QjtDQUNGO01BRVksTUFBTTs7Ozs7Ozs7SUFNakIsWUFDVSxpQkFDQSxTQUNBLFNBQ0EsbUJBQ0E7UUFKQSxvQkFBZSxHQUFmLGVBQWU7UUFDZixZQUFPLEdBQVAsT0FBTztRQUNQLFlBQU8sR0FBUCxPQUFPO1FBQ1Asc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQixvQkFBZSxHQUFmLGVBQWU7OEJBVGlDLElBQUksR0FBRyxFQUE4Qjs0QkFDMUQsRUFBRTttQ0FDVCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxRQUFROytDQUMxQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQVE7UUFRNUMsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNyRTtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3BCLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQzthQUNyQztZQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN6QztLQUNGOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFvQjtRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztLQUM1Qjs7OztRQUVXLGNBQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs7Ozs7O0lBR2hELGlCQUFpQixDQUFDLE9BQTJCO1FBQ25ELElBQUksT0FBTyxFQUFFOzs7WUFHWCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEtBQUssT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDbkcsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQzs7Ozs7O0lBR3pCLFlBQVksQ0FBQyxNQUF3QztRQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7O1FBQ2xDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQzVDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDbkQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztnQkFDOUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtvQkFDL0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLE9BQU8sSUFBSSxDQUFDO2lCQUN2QztxQkFBTTtvQkFDTCxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDaEM7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDOzs7Ozs7SUFHakMsYUFBYSxDQUFDLEtBQWlCO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTs7WUFFL0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM1Qzs7Ozs7O0lBRUssY0FBYyxDQUFDLEtBQWlCO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7Ozs7Ozs7SUFHSCxXQUFXLENBQUMsS0FBZ0MsRUFBRSxZQUEwQjs7UUFDdEUsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7UUFDMUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FDSDs7UUFEbEIsSUFDQSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNsQixJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDekIsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDakQsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDbEQ7O1FBQ0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7O1FBQ3BDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDOztRQUNsQyxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxLQUFLLGVBQWUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDN0ksSUFBSSxZQUFZLENBQUMsb0JBQW9CLEVBQUU7WUFDckMsTUFBTSxJQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixJQUFJLEVBQUUsSUFBSSxHQUFHLE1BQU07WUFDbkIsR0FBRyxFQUFFLEdBQUcsR0FBRyxNQUFNO1lBQ2pCLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQztZQUNqQixNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7WUFDbEIsa0JBQWtCLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLElBQUk7U0FDcEQsQ0FBQyxDQUFDO0tBQ0o7Ozs7OztJQUVPLHFCQUFxQixDQUFDLEVBQVksRUFBRSxLQUFLLEdBQUcsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sVUFBVSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7OztJQUc5RCxTQUFTOztRQUNQLE1BQU0sU0FBUyxHQUFjLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDOztRQUNyRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDMUMsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNoQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2dCQUN6QixTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUN4QyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQzs7O2FBR3BGLEVBQUUsU0FBUyxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMscUJBQXFCLENBQUM7Z0JBQ3pCLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7OzthQUdqRSxFQUFFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7U0FDOUQ7S0FDRjs7OztJQUNELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSTtnQkFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN4RSxDQUFDLENBQUM7U0FDSjtLQUNGO0NBRUY7Ozs7Ozs7QUFFRCxTQUFTLFlBQVksQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLElBQWdCOztJQUMxRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7SUFDMUUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0NBQ2pEOzs7OztBQUVELFNBQVMsT0FBTyxDQUFDLElBQWdCO0lBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUMxQzs7Ozs7O0FDcktEO0FBR0EsTUFBYSxNQUFNLEdBQUcsQ0FBQyxLQUFxQixNQUFNO0lBQ2hELGVBQWUsRUFBRTtRQUNmLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLEtBQUs7UUFDYixVQUFVLEVBQUUsY0FBYztRQUMxQixPQUFPLEVBQUUsS0FBSztRQUNkLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFNBQVMsRUFBRSxVQUFVO1FBQ3JCLFVBQVUsRUFBRSxXQUFXLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sY0FBYyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUM1RixFQUFFO1FBQ0YsYUFBYSxFQUFFLE1BQU07S0FDdEI7SUFDRCxTQUFTLG9CQUNKLGdCQUFnQixDQUFDLElBQUksSUFDeEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsYUFBYSxFQUFFLE1BQU0sRUFDckIsWUFBWSxFQUFFLFNBQVMsR0FDeEI7Q0FDRixDQUFDLENBQUM7QUFLSCxNQUFhLGVBQWU7Ozs7SUFFMUIsWUFDVTtRQUFBLFVBQUssR0FBTCxLQUFLO1FBRmYsZUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUd0Qzs7O1lBUE4sVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBekJRLFFBQVE7Ozs7Ozs7O0FDRGpCLE1BaUJhLFFBQVE7Ozs7Ozs7SUFnQm5CLFlBQ1UsZUFDRCxhQUNDLFNBQ0E7UUFIQSxrQkFBYSxHQUFiLGFBQWE7UUFDZCxnQkFBVyxHQUFYLFdBQVc7UUFDVixZQUFPLEdBQVAsT0FBTztRQUNQLFdBQU0sR0FBTixNQUFNO1FBRWQsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2pJO0tBQ0Y7Ozs7SUFsQkQsSUFBSSxjQUFjO1FBQ2hCLE9BQU87WUFDTCxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxQyxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxQyxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUM1QyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDM0Isb0JBQW9CLEVBQUUsSUFBSSxDQUFDLDRCQUE0QjtTQUN4RCxDQUFDO0tBQ0g7Ozs7SUFZRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN0Qjs7OztJQUVPLGFBQWE7UUFDbkIsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNyRDs7Ozs7SUFHSCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckM7S0FDRjs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQUxRLGVBQWU7WUFWdEIsVUFBVTtZQUdWLE1BQU07WUFLc0IsUUFBUTs7OytCQVVuQyxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzJDQUNMLEtBQUs7Ozs7Ozs7QUN2QlIsTUFVYSxjQUFjOzs7WUFQMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==