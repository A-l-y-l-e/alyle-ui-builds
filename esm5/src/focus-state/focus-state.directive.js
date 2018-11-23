/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, ChangeDetectorRef, NgZone, Renderer2, EventEmitter, Output, Injectable } from '@angular/core';
import { Platform, supportsPassiveEventListeners } from '../platform/index';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { getNativeElement } from '../minimal/common';
import * as i0 from "@angular/core";
/** @enum {string} */
var FocusStatus = {
    /**mouse and/or touch*/
    DEFAULT: 'default',
    /** keyboard and/or program*/
    KEYBOARD: 'keyboard',
};
export { FocusStatus };
var LyFocusStateDeprecated = /** @class */ (function () {
    function LyFocusStateDeprecated(elementRef, _ngZone, _renderer, _cd) {
        var _this = this;
        this._ngZone = _ngZone;
        this._renderer = _renderer;
        this.stateMap = new Map();
        this._eventHandlers = new Map();
        this._stateSubject = new Subject();
        this.lyFocusChange = new EventEmitter();
        this._eventOptions = (/** @type {?} */ ({ passive: true }));
        if (Platform.isBrowser) {
            this._eventHandlers
                .set('focus', this.on.bind(this))
                .set('blur', this.on.bind(this))
                .set('touchstart', this.on.bind(this))
                .set('mousedown', this.on.bind(this));
            /** @type {?} */
            var element = elementRef.nativeElement;
            this.setTriggerElement(element);
            /** @type {?} */
            var on = function (event) {
                _this.stateMap.set(event.type, true);
                _this._updateState();
            };
            /** @type {?} */
            var ob = this._stateSubject.asObservable();
            this._stateSubscription = ob
                // .debounceTime(111)
                .pipe(debounceTime(111))
                .subscribe(function (e) {
                _this.state = e;
                _this._updateClass();
                _this.lyFocusChange.emit(e);
            });
        }
    }
    /**
     * @return {?}
     */
    LyFocusStateDeprecated.prototype._updateState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var state;
        if (this.stateMap.has('blur')) {
            this.stateMap.clear();
        }
        else if (this.stateMap.has('focus') && this.stateMap.has('mousedown') || this.stateMap.has('focus') && this.stateMap.has('touchstart')) {
            state = FocusStatus.DEFAULT;
        }
        else if (this.stateMap.has('focus')) {
            state = FocusStatus.KEYBOARD;
        }
        this._stateSubject.next(state);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    LyFocusStateDeprecated.prototype.on = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.stateMap.set(event.type, true);
        this._updateState();
    };
    /**
     * @return {?}
     */
    LyFocusStateDeprecated.prototype._updateClass = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var element = this._containerElement;
        /** @type {?} */
        var state = this.state;
        /** @type {?} */
        var toggleClass = function (className, shouldSet) { return shouldSet ? _this._renderer.addClass(element, className) : _this._renderer.removeClass(element, className); };
        toggleClass("ly-focused", !!state);
        for (var key in FocusStatus) {
            if (FocusStatus.hasOwnProperty(key)) {
                /** @type {?} */
                var className = FocusStatus[key];
                toggleClass("ly-" + className + "-focused", state === className);
            }
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    LyFocusStateDeprecated.prototype.setTriggerElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        if (this._containerElement) {
            this._eventHandlers.forEach(function (fn, type) {
                _this._containerElement.removeEventListener(type, fn, _this._eventOptions);
            });
        }
        if (element) {
            this._ngZone.runOutsideAngular(function () {
                return _this._eventHandlers.forEach(function (fn, type) {
                    return element.addEventListener(type, fn, _this._eventOptions);
                });
            });
        }
        this._containerElement = element;
    };
    /**
     * @return {?}
     */
    LyFocusStateDeprecated.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Platform.isBrowser) {
            this._stateSubscription.unsubscribe();
            this.setTriggerElement(null);
        }
    };
    LyFocusStateDeprecated.decorators = [
        { type: Directive, args: [{
                    selector: '[lyFocusState]',
                    exportAs: 'lyFocusState'
                },] }
    ];
    /** @nocollapse */
    LyFocusStateDeprecated.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    LyFocusStateDeprecated.propDecorators = {
        lyFocusChange: [{ type: Output }]
    };
    return LyFocusStateDeprecated;
}());
export { LyFocusStateDeprecated };
if (false) {
    /** @type {?} */
    LyFocusStateDeprecated.prototype.state;
    /** @type {?} */
    LyFocusStateDeprecated.prototype.stateMap;
    /** @type {?} */
    LyFocusStateDeprecated.prototype._containerElement;
    /** @type {?} */
    LyFocusStateDeprecated.prototype._eventHandlers;
    /** @type {?} */
    LyFocusStateDeprecated.prototype._stateSubject;
    /** @type {?} */
    LyFocusStateDeprecated.prototype._stateSubscription;
    /** @type {?} */
    LyFocusStateDeprecated.prototype.lyFocusChange;
    /** @type {?} */
    LyFocusStateDeprecated.prototype._eventOptions;
    /** @type {?} */
    LyFocusStateDeprecated.prototype._ngZone;
    /** @type {?} */
    LyFocusStateDeprecated.prototype._renderer;
}
/**
 * @record
 */
export function FocusStateInfo() { }
if (false) {
    /** @type {?} */
    FocusStateInfo.prototype.unlisten;
    /** @type {?} */
    FocusStateInfo.prototype.subject;
}
/**
 * @record
 */
export function FocusState() { }
if (false) {
    /** @type {?} */
    FocusState.prototype.event;
    /** @type {?} */
    FocusState.prototype.by;
}
var LyFocusState = /** @class */ (function () {
    function LyFocusState(_ngZone) {
        this._ngZone = _ngZone;
        this._elementMap = new Map();
        this._count = 0;
    }
    /**
     * @param {?} element
     * @param {?=} keyElement
     * @return {?}
     */
    LyFocusState.prototype.listen = /**
     * @param {?} element
     * @param {?=} keyElement
     * @return {?}
     */
    function (element, keyElement) {
        var _this = this;
        if (!Platform.isBrowser) {
            // return null if it is not browser platform
            return null;
        }
        /** @type {?} */
        var nativeElement = getNativeElement(element);
        /** @type {?} */
        var key = keyElement && getNativeElement(keyElement) || nativeElement;
        if (this._elementMap.has(key)) {
            return this._elementMap.get(key).subject.asObservable();
        }
        /** @type {?} */
        var focusState = {
            unlisten: null,
            subject: new Subject()
        };
        this._incrementCount();
        /** @type {?} */
        var focusListener = function (event) { return _this._on(event, focusState.subject); };
        /** @type {?} */
        var blurListener = function (event) { return _this._on(event, focusState.subject); };
        focusState.unlisten = function () {
            nativeElement.removeEventListener('focus', focusListener, true);
            nativeElement.removeEventListener('blur', blurListener, true);
        };
        this._elementMap.set(key, focusState);
        this._ngZone.runOutsideAngular(function () {
            nativeElement.addEventListener('focus', focusListener, true);
            nativeElement.addEventListener('blur', blurListener, true);
        });
        return focusState.subject.asObservable();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    LyFocusState.prototype.unlisten = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!Platform.isBrowser) {
            return;
        }
        /** @type {?} */
        var focusStateInfo = this._elementMap.get(getNativeElement(element));
        if (focusStateInfo) {
            focusStateInfo.unlisten();
            this._decrementCount();
        }
    };
    /**
     * @param {?} event
     * @param {?} subject
     * @return {?}
     */
    LyFocusState.prototype._on = /**
     * @param {?} event
     * @param {?} subject
     * @return {?}
     */
    function (event, subject) {
        var _this = this;
        this._ngZone.run(function () { return subject.next({
            event: event,
            by: _this._currentEvent || 'keyboard'
        }); });
    };
    /**
     * @return {?}
     */
    LyFocusState.prototype._addGlobalListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!Platform.isBrowser) {
            return;
        }
        /** @type {?} */
        var eventListenerOptions = supportsPassiveEventListeners
            ? {
                passive: true,
                capture: true
            } : false;
        /** @type {?} */
        var documentKeydownListener = function () { return _this._ngZone.runOutsideAngular(function () { return _this._currentEvent = 'keyboard'; }); };
        /** @type {?} */
        var documentMousedownListener = function () { return _this._ngZone.runOutsideAngular(function () { return _this._currentEvent = 'mouse'; }); };
        this._ngZone.runOutsideAngular(function () {
            document.addEventListener('keydown', documentKeydownListener, eventListenerOptions);
            document.addEventListener('mousedown', documentMousedownListener, eventListenerOptions);
        });
        this._removeGlobalListeners = function () {
            document.removeEventListener('keydown', documentKeydownListener, eventListenerOptions);
            document.removeEventListener('mousedown', documentMousedownListener, eventListenerOptions);
        };
    };
    /**
     * @return {?}
     */
    LyFocusState.prototype._incrementCount = /**
     * @return {?}
     */
    function () {
        if (++this._count === 1) {
            this._addGlobalListeners();
        }
    };
    /**
     * @return {?}
     */
    LyFocusState.prototype._decrementCount = /**
     * @return {?}
     */
    function () {
        if (!--this._count) {
            this._removeGlobalListeners();
        }
    };
    /**
     * @return {?}
     */
    LyFocusState.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._elementMap.forEach(function (_, element) { return _this.unlisten(element); });
    };
    LyFocusState.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LyFocusState.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    /** @nocollapse */ LyFocusState.ngInjectableDef = i0.defineInjectable({ factory: function LyFocusState_Factory() { return new LyFocusState(i0.inject(i0.NgZone)); }, token: LyFocusState, providedIn: "root" });
    return LyFocusState;
}());
export { LyFocusState };
if (false) {
    /** @type {?} */
    LyFocusState.prototype._elementMap;
    /** @type {?} */
    LyFocusState.prototype._currentEvent;
    /** @type {?} */
    LyFocusState.prototype._removeGlobalListeners;
    /** @type {?} */
    LyFocusState.prototype._count;
    /** @type {?} */
    LyFocusState.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtc3RhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2ZvY3VzLXN0YXRlL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBYSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SSxPQUFPLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUUsT0FBTyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0lBR25ELHVCQUF1QjtJQUN2QixTQUFVLFNBQVM7SUFDbkIsNkJBQTZCO0lBQzdCLFVBQVcsVUFBVTs7O0FBR3ZCO0lBYUUsZ0NBQ0UsVUFBc0IsRUFDZCxPQUFlLEVBQ2YsU0FBb0IsRUFDNUIsR0FBc0I7UUFKeEIsaUJBOEJDO1FBNUJTLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBVjlCLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUU5QixtQkFBYyxHQUFHLElBQUksR0FBRyxFQUE4QixDQUFDO1FBQ3ZELGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUV6QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDbEQsa0JBQWEsR0FBRyxtQkFBQSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsRUFBTyxDQUFDO1FBTzdDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsY0FBYztp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Q29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBOZ1pvbmUsIFJlbmRlcmVyMiwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi4vcGxhdGZvcm0vaW5kZXgnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBnZXROYXRpdmVFbGVtZW50IH0gZnJvbSAnLi4vbWluaW1hbC9jb21tb24nO1xuXG5leHBvcnQgZW51bSBGb2N1c1N0YXR1cyB7XG4gIC8qKm1vdXNlIGFuZC9vciB0b3VjaCovXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIC8qKiBrZXlib2FyZCBhbmQvb3IgcHJvZ3JhbSovXG4gIEtFWUJPQVJEID0gJ2tleWJvYXJkJyxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5Rm9jdXNTdGF0ZV0nLFxuICBleHBvcnRBczogJ2x5Rm9jdXNTdGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlGb2N1c1N0YXRlRGVwcmVjYXRlZCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHN0YXRlOiBGb2N1c1N0YXR1cztcbiAgc3RhdGVNYXAgPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogRWxlbWVudDtcbiAgcHJpdmF0ZSBfZXZlbnRIYW5kbGVycyA9IG5ldyBNYXA8c3RyaW5nLCAoZTogRXZlbnQpID0+IHZvaWQ+KCk7XG4gIHByaXZhdGUgX3N0YXRlU3ViamVjdCA9IG5ldyBTdWJqZWN0PEZvY3VzU3RhdHVzPigpO1xuICBfc3RhdGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgQE91dHB1dCgpIGx5Rm9jdXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzU3RhdHVzPigpO1xuICBwcml2YXRlIF9ldmVudE9wdGlvbnMgPSB7cGFzc2l2ZTogdHJ1ZX0gYXMgYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzXG4gICAgICAuc2V0KCdmb2N1cycsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ2JsdXInLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCd0b3VjaHN0YXJ0JywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgnbW91c2Vkb3duJywgdGhpcy5vbi5iaW5kKHRoaXMpKTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY29uc3Qgb24gPSAoZXZlbnQ6IEZvY3VzRXZlbnQgfCBUb3VjaEV2ZW50IHwgTW91c2VFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlTWFwLnNldChldmVudC50eXBlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBvYjogT2JzZXJ2YWJsZTxGb2N1c1N0YXR1cz4gPSB0aGlzLl9zdGF0ZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbiA9IG9iXG4gICAgICAvLyAuZGVib3VuY2VUaW1lKDExMSlcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTExKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZTogRm9jdXNTdGF0dXMpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzKCk7XG4gICAgICAgIHRoaXMubHlGb2N1c0NoYW5nZS5lbWl0KGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3RhdGUoKSB7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnYmx1cicpKSB7XG4gICAgICB0aGlzLnN0YXRlTWFwLmNsZWFyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlTWFwLmhhcygnZm9jdXMnKSAmJiB0aGlzLnN0YXRlTWFwLmhhcygnbW91c2Vkb3duJykgfHwgdGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykgJiYgdGhpcy5zdGF0ZU1hcC5oYXMoJ3RvdWNoc3RhcnQnKSkge1xuICAgICAgc3RhdGUgPSBGb2N1c1N0YXR1cy5ERUZBVUxUO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykpIHtcbiAgICAgIHN0YXRlID0gRm9jdXNTdGF0dXMuS0VZQk9BUkQ7XG4gICAgfVxuICAgIHRoaXMuX3N0YXRlU3ViamVjdC5uZXh0KHN0YXRlKTtcbiAgfVxuXG4gIG9uKGV2ZW50OiBGb2N1c0V2ZW50IHwgVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLnN0YXRlTWFwLnNldChldmVudC50eXBlLCB0cnVlKTtcbiAgICB0aGlzLl91cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2xhc3MoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRvZ2dsZUNsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nLCBzaG91bGRTZXQ6IGJvb2xlYW4pID0+IHNob3VsZFNldCA/IHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkgOiB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIHRvZ2dsZUNsYXNzKGBseS1mb2N1c2VkYCwgISFzdGF0ZSk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gRm9jdXNTdGF0dXMpIHtcbiAgICAgIGlmIChGb2N1c1N0YXR1cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IEZvY3VzU3RhdHVzW2tleV07XG4gICAgICAgIHRvZ2dsZUNsYXNzKGBseS0ke2NsYXNzTmFtZX0tZm9jdXNlZGAsIHN0YXRlID09PSBjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFRyaWdnZXJFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50SGFuZGxlcnMuZm9yRWFjaCgoZm4sIHR5cGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB0aGlzLl9ldmVudE9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3N0YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnNldFRyaWdnZXJFbGVtZW50KG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzU3RhdGVJbmZvIHtcbiAgdW5saXN0ZW46ICgpID0+IHZvaWQ7XG4gIHN1YmplY3Q6IFN1YmplY3Q8Rm9jdXNTdGF0ZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXNTdGF0ZSB7XG4gIGV2ZW50OiBGb2N1c0V2ZW50O1xuICBieTogJ2tleWJvYXJkJyB8ICdtb3VzZSc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2VsZW1lbnRNYXAgPSBuZXcgTWFwPEhUTUxFbGVtZW50LCBGb2N1c1N0YXRlSW5mbz4oKTtcbiAgcHJpdmF0ZSBfY3VycmVudEV2ZW50OiAnbW91c2UnIHwgJ2tleWJvYXJkJztcbiAgcHJpdmF0ZSBfcmVtb3ZlR2xvYmFsTGlzdGVuZXJzOiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9jb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7IH1cblxuICBsaXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwga2V5RWxlbWVudD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pOiBPYnNlcnZhYmxlPEZvY3VzU3RhdGU+IHwgbnVsbCB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIC8vIHJldHVybiBudWxsIGlmIGl0IGlzIG5vdCBicm93c2VyIHBsYXRmb3JtXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KTtcbiAgICBjb25zdCBrZXkgPSBrZXlFbGVtZW50ICYmIGdldE5hdGl2ZUVsZW1lbnQoa2V5RWxlbWVudCkgfHwgbmF0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLl9lbGVtZW50TWFwLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudE1hcC5nZXQoa2V5KS5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvY3VzU3RhdGU6IEZvY3VzU3RhdGVJbmZvID0ge1xuICAgICAgdW5saXN0ZW46IG51bGwsXG4gICAgICBzdWJqZWN0OiBuZXcgU3ViamVjdDxGb2N1c1N0YXRlPigpXG4gICAgfTtcbiAgICB0aGlzLl9pbmNyZW1lbnRDb3VudCgpO1xuICAgIGNvbnN0IGZvY3VzTGlzdGVuZXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHRoaXMuX29uKGV2ZW50LCBmb2N1c1N0YXRlLnN1YmplY3QpO1xuICAgIGNvbnN0IGJsdXJMaXN0ZW5lciA9IChldmVudDogRm9jdXNFdmVudCkgPT4gdGhpcy5fb24oZXZlbnQsIGZvY3VzU3RhdGUuc3ViamVjdCk7XG5cbiAgICBmb2N1c1N0YXRlLnVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzTGlzdGVuZXIsIHRydWUpO1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fZWxlbWVudE1hcC5zZXQoa2V5LCBmb2N1c1N0YXRlKTtcblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZm9jdXNMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICBuYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVyTGlzdGVuZXIsIHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBmb2N1c1N0YXRlLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICB1bmxpc3RlbihlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZm9jdXNTdGF0ZUluZm8gPSB0aGlzLl9lbGVtZW50TWFwLmdldChnZXROYXRpdmVFbGVtZW50KGVsZW1lbnQpKTtcbiAgICBpZiAoZm9jdXNTdGF0ZUluZm8pIHtcbiAgICAgIGZvY3VzU3RhdGVJbmZvLnVubGlzdGVuKCk7XG4gICAgICB0aGlzLl9kZWNyZW1lbnRDb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uKGV2ZW50OiBGb2N1c0V2ZW50LCBzdWJqZWN0OiBTdWJqZWN0PEZvY3VzU3RhdGU+KSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiBzdWJqZWN0Lm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBieTogdGhpcy5fY3VycmVudEV2ZW50IHx8ICdrZXlib2FyZCdcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyT3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzXG4gICAgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0gOiBmYWxzZTtcblxuICAgIGNvbnN0IGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyID0gKCkgPT4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2N1cnJlbnRFdmVudCA9ICdrZXlib2FyZCcpO1xuICAgIGNvbnN0IGRvY3VtZW50TW91c2Vkb3duTGlzdGVuZXIgPSAoKSA9PiB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY3VycmVudEV2ZW50ID0gJ21vdXNlJyk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfSk7XG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2luY3JlbWVudENvdW50KCkge1xuICAgIGlmICgrK3RoaXMuX2NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLl9hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWNyZW1lbnRDb3VudCgpIHtcbiAgICBpZiAoIS0tdGhpcy5fY291bnQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnRNYXAuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy51bmxpc3RlbihlbGVtZW50KSk7XG4gIH1cbn1cbiJdfQ==