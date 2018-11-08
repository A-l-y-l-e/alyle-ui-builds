/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this._eventOptions = /** @type {?} */ ({ passive: true });
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
/** @type {?} */
FocusStateInfo.prototype.unlisten;
/** @type {?} */
FocusStateInfo.prototype.subject;
/**
 * @record
 */
export function FocusState() { }
/** @type {?} */
FocusState.prototype.event;
/** @type {?} */
FocusState.prototype.by;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtc3RhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL2ZvY3VzLXN0YXRlL2ZvY3VzLXN0YXRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBYSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SSxPQUFPLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUUsT0FBTyxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztJQUluRCxTQUFVLFNBQVM7O0lBRW5CLFVBQVcsVUFBVTs7OztJQWdCckIsZ0NBQ0UsVUFBc0IsRUFDZCxTQUNBLFdBQ1IsR0FBc0I7UUFKeEIsaUJBOEJDO1FBNUJTLFlBQU8sR0FBUCxPQUFPO1FBQ1AsY0FBUyxHQUFULFNBQVM7UUFWbkIsZ0JBQVcsSUFBSSxHQUFHLEVBQW1CLENBQUM7OEJBRWIsSUFBSSxHQUFHLEVBQThCOzZCQUN0QyxJQUFJLE9BQU8sRUFBZTtRQUVsRCxxQkFBMEIsSUFBSSxZQUFZLEVBQWUsQ0FBQzsrQ0FDbEMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFRO1FBTzVDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsY0FBYztpQkFDbEIsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDaEMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0IsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDckMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztZQUN0QyxJQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFDaEMsSUFBTSxFQUFFLEdBQUcsVUFBQyxLQUEyQztnQkFDckQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCLENBQUM7O1lBQ0YsSUFBTSxFQUFFLEdBQTRCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUU7Z0JBQzVCLHFCQUFxQjtpQkFDcEIsSUFBSSxDQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEI7aUJBQ0EsU0FBUyxDQUFDLFVBQUMsQ0FBYztnQkFDeEIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QixDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBRU8sNkNBQVk7Ozs7O1FBQ2xCLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN4SSxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztTQUM3QjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O0lBR2pDLG1DQUFFOzs7O0lBQUYsVUFBRyxLQUEyQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVPLDZDQUFZOzs7Ozs7UUFDbEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDOztRQUN2QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztRQUN6QixJQUFNLFdBQVcsR0FBRyxVQUFDLFNBQWlCLEVBQUUsU0FBa0IsSUFBSyxPQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLEVBQXhHLENBQXdHLENBQUM7UUFDeEssV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsS0FBSyxJQUFNLEdBQUcsSUFBSSxXQUFXLEVBQUU7WUFDN0IsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztnQkFDbkMsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxXQUFXLENBQUMsUUFBTSxTQUFTLGFBQVUsRUFBRSxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUM7YUFDN0Q7U0FDRjs7Ozs7O0lBR0gsa0RBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQTJCO1FBQTdDLGlCQWNDO1FBYkMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFLEVBQUUsSUFBSTtnQkFDbkMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzFFLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO2dCQUM3QixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBRSxFQUFFLElBQUk7b0JBQzFDLE9BQU8sT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUMvRCxDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUM7S0FDbEM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtLQUNGOztnQkFoR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFoQm1CLFVBQVU7Z0JBQXFCLE1BQU07Z0JBQUUsU0FBUztnQkFBcEMsaUJBQWlCOzs7Z0NBd0I5QyxNQUFNOztpQ0F4QlQ7O1NBaUJhLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtIakMsc0JBQ1U7UUFBQSxZQUFPLEdBQVAsT0FBTzsyQkFOSyxJQUFJLEdBQUcsRUFBK0I7c0JBRzNDLENBQUM7S0FJYjs7Ozs7O0lBRUwsNkJBQU07Ozs7O0lBQU4sVUFBTyxPQUE4QyxFQUFFLFVBQWtEO1FBQXpHLGlCQWlDQztRQWhDQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTs7WUFFdkIsT0FBTyxJQUFJLENBQUM7U0FDYjs7UUFFRCxJQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFDaEQsSUFBTSxHQUFHLEdBQUcsVUFBVSxJQUFJLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLGFBQWEsQ0FBQztRQUV4RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pEOztRQUVELElBQU0sVUFBVSxHQUFtQjtZQUNqQyxRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRSxJQUFJLE9BQU8sRUFBYztTQUNuQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOztRQUN2QixJQUFNLGFBQWEsR0FBRyxVQUFDLEtBQWlCLElBQUssT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQW5DLENBQW1DLENBQUM7O1FBQ2pGLElBQU0sWUFBWSxHQUFHLFVBQUMsS0FBaUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQztRQUVoRixVQUFVLENBQUMsUUFBUSxHQUFHO1lBQ3BCLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQy9ELENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUM3QixhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3RCxhQUFhLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1RCxDQUFDLENBQUM7UUFDSCxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDMUM7Ozs7O0lBRUQsK0JBQVE7Ozs7SUFBUixVQUFTLE9BQThDOztRQUNyRCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksY0FBYyxFQUFFO1lBQ2xCLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7S0FDRjs7Ozs7O0lBRU8sMEJBQUc7Ozs7O2NBQUMsS0FBaUIsRUFBRSxPQUE0Qjs7UUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDbEMsS0FBSyxPQUFBO1lBQ0wsRUFBRSxFQUFFLEtBQUksQ0FBQyxhQUFhLElBQUksVUFBVTtTQUNyQyxDQUFDLEVBSHFCLENBR3JCLENBQUMsQ0FBQzs7Ozs7SUFHRSwwQ0FBbUI7Ozs7O1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU87U0FDUjs7UUFFRCxJQUFNLG9CQUFvQixHQUFHLDZCQUE2QjtZQUMxRCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O1FBRVYsSUFBTSx1QkFBdUIsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLEVBQS9CLENBQStCLENBQUMsRUFBckUsQ0FBcUUsQ0FBQzs7UUFDNUcsSUFBTSx5QkFBeUIsR0FBRyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLEVBQTVCLENBQTRCLENBQUMsRUFBbEUsQ0FBa0UsQ0FBQztRQUUzRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQzdCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUNwRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLHlCQUF5QixFQUFFLG9CQUFvQixDQUFDLENBQUM7U0FDekYsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHNCQUFzQixHQUFHO1lBQzVCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUN2RixRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLHlCQUF5QixFQUFFLG9CQUFvQixDQUFDLENBQUM7U0FDNUYsQ0FBQzs7Ozs7SUFHSSxzQ0FBZTs7OztRQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7Ozs7O0lBR0ssc0NBQWU7Ozs7UUFDckIsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjs7Ozs7SUFHSCxrQ0FBVzs7O0lBQVg7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztLQUNsRTs7Z0JBckdGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBNUhrRCxNQUFNOzs7dUJBQXpEOztTQTZIYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lLCBSZW5kZXJlcjIsIE9uRGVzdHJveSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyB9IGZyb20gJy4uL3BsYXRmb3JtL2luZGV4JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZ2V0TmF0aXZlRWxlbWVudCB9IGZyb20gJy4uL21pbmltYWwvY29tbW9uJztcblxuZXhwb3J0IGVudW0gRm9jdXNTdGF0dXMge1xuICAvKiptb3VzZSBhbmQvb3IgdG91Y2gqL1xuICBERUZBVUxUID0gJ2RlZmF1bHQnLFxuICAvKioga2V5Ym9hcmQgYW5kL29yIHByb2dyYW0qL1xuICBLRVlCT0FSRCA9ICdrZXlib2FyZCcsXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tseUZvY3VzU3RhdGVdJyxcbiAgZXhwb3J0QXM6ICdseUZvY3VzU3RhdGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5Rm9jdXNTdGF0ZURlcHJlY2F0ZWQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBzdGF0ZTogRm9jdXNTdGF0dXM7XG4gIHN0YXRlTWFwID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHByaXZhdGUgX2V2ZW50SGFuZGxlcnMgPSBuZXcgTWFwPHN0cmluZywgKGU6IEV2ZW50KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIF9zdGF0ZVN1YmplY3QgPSBuZXcgU3ViamVjdDxGb2N1c1N0YXR1cz4oKTtcbiAgX3N0YXRlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIEBPdXRwdXQoKSBseUZvY3VzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c1N0YXR1cz4oKTtcbiAgcHJpdmF0ZSBfZXZlbnRPcHRpb25zID0ge3Bhc3NpdmU6IHRydWV9IGFzIGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgaWYgKFBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVyc1xuICAgICAgLnNldCgnZm9jdXMnLCB0aGlzLm9uLmJpbmQodGhpcykpXG4gICAgICAuc2V0KCdibHVyJywgdGhpcy5vbi5iaW5kKHRoaXMpKVxuICAgICAgLnNldCgndG91Y2hzdGFydCcsIHRoaXMub24uYmluZCh0aGlzKSlcbiAgICAgIC5zZXQoJ21vdXNlZG93bicsIHRoaXMub24uYmluZCh0aGlzKSk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNvbnN0IG9uID0gKGV2ZW50OiBGb2N1c0V2ZW50IHwgVG91Y2hFdmVudCB8IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0ZU1hcC5zZXQoZXZlbnQudHlwZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlKCk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgb2I6IE9ic2VydmFibGU8Rm9jdXNTdGF0dXM+ID0gdGhpcy5fc3RhdGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5fc3RhdGVTdWJzY3JpcHRpb24gPSBvYlxuICAgICAgLy8gLmRlYm91bmNlVGltZSgxMTEpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDExMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGU6IEZvY3VzU3RhdHVzKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBlO1xuICAgICAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICAgICAgICB0aGlzLmx5Rm9jdXNDaGFuZ2UuZW1pdChlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0YXRlKCkge1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2JsdXInKSkge1xuICAgICAgdGhpcy5zdGF0ZU1hcC5jbGVhcigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZU1hcC5oYXMoJ2ZvY3VzJykgJiYgdGhpcy5zdGF0ZU1hcC5oYXMoJ21vdXNlZG93bicpIHx8IHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpICYmIHRoaXMuc3RhdGVNYXAuaGFzKCd0b3VjaHN0YXJ0JykpIHtcbiAgICAgIHN0YXRlID0gRm9jdXNTdGF0dXMuREVGQVVMVDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVNYXAuaGFzKCdmb2N1cycpKSB7XG4gICAgICBzdGF0ZSA9IEZvY3VzU3RhdHVzLktFWUJPQVJEO1xuICAgIH1cbiAgICB0aGlzLl9zdGF0ZVN1YmplY3QubmV4dChzdGF0ZSk7XG4gIH1cblxuICBvbihldmVudDogRm9jdXNFdmVudCB8IFRvdWNoRXZlbnQgfCBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5zdGF0ZU1hcC5zZXQoZXZlbnQudHlwZSwgdHJ1ZSk7XG4gICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUNsYXNzKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50O1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0b2dnbGVDbGFzcyA9IChjbGFzc05hbWU6IHN0cmluZywgc2hvdWxkU2V0OiBib29sZWFuKSA9PiBzaG91bGRTZXQgPyB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIDogdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB0b2dnbGVDbGFzcyhgbHktZm9jdXNlZGAsICEhc3RhdGUpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIEZvY3VzU3RhdHVzKSB7XG4gICAgICBpZiAoRm9jdXNTdGF0dXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBGb2N1c1N0YXR1c1trZXldO1xuICAgICAgICB0b2dnbGVDbGFzcyhgbHktJHtjbGFzc05hbWV9LWZvY3VzZWRgLCBzdGF0ZSA9PT0gY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRUcmlnZ2VyRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyRWxlbWVudCkge1xuICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5mb3JFYWNoKChmbiwgdHlwZSkgPT4ge1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHRoaXMuX2V2ZW50T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudEhhbmRsZXJzLmZvckVhY2goKGZuLCB0eXBlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgdGhpcy5fZXZlbnRPcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAoUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9zdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyRWxlbWVudChudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c1N0YXRlSW5mbyB7XG4gIHVubGlzdGVuOiAoKSA9PiB2b2lkO1xuICBzdWJqZWN0OiBTdWJqZWN0PEZvY3VzU3RhdGU+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzU3RhdGUge1xuICBldmVudDogRm9jdXNFdmVudDtcbiAgYnk6ICdrZXlib2FyZCcgfCAnbW91c2UnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9lbGVtZW50TWFwID0gbmV3IE1hcDxIVE1MRWxlbWVudCwgRm9jdXNTdGF0ZUluZm8+KCk7XG4gIHByaXZhdGUgX2N1cnJlbnRFdmVudDogJ21vdXNlJyB8ICdrZXlib2FyZCc7XG4gIHByaXZhdGUgX3JlbW92ZUdsb2JhbExpc3RlbmVyczogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfY291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG5cbiAgbGlzdGVuKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIGtleUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KTogT2JzZXJ2YWJsZTxGb2N1c1N0YXRlPiB8IG51bGwge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAvLyByZXR1cm4gbnVsbCBpZiBpdCBpcyBub3QgYnJvd3NlciBwbGF0Zm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgY29uc3Qga2V5ID0ga2V5RWxlbWVudCAmJiBnZXROYXRpdmVFbGVtZW50KGtleUVsZW1lbnQpIHx8IG5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudE1hcC5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRNYXAuZ2V0KGtleSkuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb2N1c1N0YXRlOiBGb2N1c1N0YXRlSW5mbyA9IHtcbiAgICAgIHVubGlzdGVuOiBudWxsLFxuICAgICAgc3ViamVjdDogbmV3IFN1YmplY3Q8Rm9jdXNTdGF0ZT4oKVxuICAgIH07XG4gICAgdGhpcy5faW5jcmVtZW50Q291bnQoKTtcbiAgICBjb25zdCBmb2N1c0xpc3RlbmVyID0gKGV2ZW50OiBGb2N1c0V2ZW50KSA9PiB0aGlzLl9vbihldmVudCwgZm9jdXNTdGF0ZS5zdWJqZWN0KTtcbiAgICBjb25zdCBibHVyTGlzdGVuZXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHRoaXMuX29uKGV2ZW50LCBmb2N1c1N0YXRlLnN1YmplY3QpO1xuXG4gICAgZm9jdXNTdGF0ZS51bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmb2N1c0xpc3RlbmVyLCB0cnVlKTtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXJMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHRoaXMuX2VsZW1lbnRNYXAuc2V0KGtleSwgZm9jdXNTdGF0ZSk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzTGlzdGVuZXIsIHRydWUpO1xuICAgICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckxpc3RlbmVyLCB0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9jdXNTdGF0ZS5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgdW5saXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIGNvbnN0IGZvY3VzU3RhdGVJbmZvID0gdGhpcy5fZWxlbWVudE1hcC5nZXQoZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KSk7XG4gICAgaWYgKGZvY3VzU3RhdGVJbmZvKSB7XG4gICAgICBmb2N1c1N0YXRlSW5mby51bmxpc3RlbigpO1xuICAgICAgdGhpcy5fZGVjcmVtZW50Q291bnQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vbihldmVudDogRm9jdXNFdmVudCwgc3ViamVjdDogU3ViamVjdDxGb2N1c1N0YXRlPikge1xuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gc3ViamVjdC5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgYnk6IHRoaXMuX2N1cnJlbnRFdmVudCB8fCAna2V5Ym9hcmQnXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkR2xvYmFsTGlzdGVuZXJzKCkge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lck9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVyc1xuICAgID8ge1xuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IHRydWVcbiAgICB9IDogZmFsc2U7XG5cbiAgICBjb25zdCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciA9ICgpID0+IHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jdXJyZW50RXZlbnQgPSAna2V5Ym9hcmQnKTtcbiAgICBjb25zdCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyID0gKCkgPT4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2N1cnJlbnRFdmVudCA9ICdtb3VzZScpO1xuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb2N1bWVudEtleWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG9jdW1lbnRNb3VzZWRvd25MaXN0ZW5lciwgZXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9pbmNyZW1lbnRDb3VudCgpIHtcbiAgICBpZiAoKyt0aGlzLl9jb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5fYWRkR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVjcmVtZW50Q291bnQoKSB7XG4gICAgaWYgKCEtLXRoaXMuX2NvdW50KSB7XG4gICAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9lbGVtZW50TWFwLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMudW5saXN0ZW4oZWxlbWVudCkpO1xuICB9XG59XG4iXX0=