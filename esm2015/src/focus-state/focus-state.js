/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgZone, Injectable } from '@angular/core';
import { Platform, supportsPassiveEventListeners } from '../platform/index';
import { Subject } from 'rxjs';
import { getNativeElement } from '../minimal/common';
import * as i0 from "@angular/core";
/** @enum {string} */
const FocusStatus = {
    /**mouse and/or touch*/
    DEFAULT: 'default',
    /** keyboard and/or program*/
    KEYBOARD: 'keyboard',
};
export { FocusStatus };
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
export class LyFocusState {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this._elementMap = new Map();
        this._count = 0;
    }
    /**
     * @param {?} element
     * @param {?=} keyElement
     * @return {?}
     */
    listen(element, keyElement) {
        if (!Platform.isBrowser) {
            // return null if it is not browser platform
            return null;
        }
        /** @type {?} */
        const nativeElement = getNativeElement(element);
        /** @type {?} */
        const key = keyElement && getNativeElement(keyElement) || nativeElement;
        if (this._elementMap.has(key)) {
            return this._elementMap.get(key).subject.asObservable();
        }
        /** @type {?} */
        const focusState = {
            unlisten: null,
            subject: new Subject()
        };
        this._incrementCount();
        /** @type {?} */
        const focusListener = (event) => this._on(event, focusState.subject);
        /** @type {?} */
        const blurListener = (event) => this._on(event, focusState.subject);
        focusState.unlisten = () => {
            nativeElement.removeEventListener('focus', focusListener, true);
            nativeElement.removeEventListener('blur', blurListener, true);
        };
        this._elementMap.set(key, focusState);
        this._ngZone.runOutsideAngular(() => {
            nativeElement.addEventListener('focus', focusListener, true);
            nativeElement.addEventListener('blur', blurListener, true);
        });
        return focusState.subject.asObservable();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    unlisten(element) {
        if (!Platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const el = getNativeElement(element);
        /** @type {?} */
        const focusStateInfo = this._elementMap.get(el);
        if (focusStateInfo) {
            focusStateInfo.unlisten();
            this._elementMap.delete(el);
            this._decrementCount();
        }
    }
    /**
     * @param {?} event
     * @param {?} subject
     * @return {?}
     */
    _on(event, subject) {
        this._ngZone.run(() => subject.next({
            event,
            by: this._currentEvent || 'keyboard'
        }));
    }
    /**
     * @return {?}
     */
    _addGlobalListeners() {
        if (!Platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const eventListenerOptions = supportsPassiveEventListeners
            ? {
                passive: true,
                capture: true
            } : false;
        /** @type {?} */
        const documentKeydownListener = () => this._ngZone.runOutsideAngular(() => this._currentEvent = 'keyboard');
        /** @type {?} */
        const documentMousedownListener = () => this._ngZone.runOutsideAngular(() => this._currentEvent = 'mouse');
        this._ngZone.runOutsideAngular(() => {
            document.addEventListener('keydown', documentKeydownListener, eventListenerOptions);
            document.addEventListener('mousedown', documentMousedownListener, eventListenerOptions);
        });
        this._removeGlobalListeners = () => {
            document.removeEventListener('keydown', documentKeydownListener, eventListenerOptions);
            document.removeEventListener('mousedown', documentMousedownListener, eventListenerOptions);
        };
    }
    /**
     * @return {?}
     */
    _incrementCount() {
        if (++this._count === 1) {
            this._addGlobalListeners();
        }
    }
    /**
     * @return {?}
     */
    _decrementCount() {
        if (!--this._count) {
            this._removeGlobalListeners();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._elementMap.forEach((_, element) => this.unlisten(element));
    }
}
LyFocusState.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LyFocusState.ctorParameters = () => [
    { type: NgZone }
];
/** @nocollapse */ LyFocusState.ngInjectableDef = i0.defineInjectable({ factory: function LyFocusState_Factory() { return new LyFocusState(i0.inject(i0.NgZone)); }, token: LyFocusState, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZm9jdXMtc3RhdGUvZm9jdXMtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0lBR25ELHVCQUF1QjtJQUN2QixTQUFVLFNBQVM7SUFDbkIsNkJBQTZCO0lBQzdCLFVBQVcsVUFBVTs7Ozs7O0FBR3ZCLG9DQUdDOzs7SUFGQyxrQ0FBcUI7O0lBQ3JCLGlDQUE2Qjs7Ozs7QUFHL0IsZ0NBR0M7OztJQUZDLDJCQUFrQjs7SUFDbEIsd0JBQXlCOztBQU0zQixNQUFNLE9BQU8sWUFBWTs7OztJQU12QixZQUNVLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBTmpCLGdCQUFXLEdBQUcsSUFBSSxHQUFHLEVBQStCLENBQUM7UUFHckQsV0FBTSxHQUFHLENBQUMsQ0FBQztJQUlmLENBQUM7Ozs7OztJQUVMLE1BQU0sQ0FBQyxPQUE4QyxFQUFFLFVBQWtEO1FBQ3ZHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLDRDQUE0QztZQUM1QyxPQUFPLElBQUksQ0FBQztTQUNiOztjQUVLLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7O2NBQ3pDLEdBQUcsR0FBRyxVQUFVLElBQUksZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksYUFBYTtRQUV2RSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pEOztjQUVLLFVBQVUsR0FBbUI7WUFDakMsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUUsSUFBSSxPQUFPLEVBQWM7U0FDbkM7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7O2NBQ2pCLGFBQWEsR0FBRyxDQUFDLEtBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUM7O2NBQzFFLFlBQVksR0FBRyxDQUFDLEtBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFFL0UsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDekIsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEUsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2xDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdELGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQThDO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLE9BQU87U0FDUjs7Y0FDSyxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDOztjQUM5QixjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQy9DLElBQUksY0FBYyxFQUFFO1lBQ2xCLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7Ozs7SUFFTyxHQUFHLENBQUMsS0FBaUIsRUFBRSxPQUE0QjtRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2xDLEtBQUs7WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsSUFBSSxVQUFVO1NBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7OztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPO1NBQ1I7O2NBRUssb0JBQW9CLEdBQUcsNkJBQTZCO1lBQzFELENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQyxDQUFDLEtBQUs7O2NBRUgsdUJBQXVCLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQzs7Y0FDckcseUJBQXlCLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUUxRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNsQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDcEYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzFGLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsRUFBRTtZQUNqQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDdkYsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQzdGLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFTyxlQUFlO1FBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFTyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7OztZQTFHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUF4Qm9CLE1BQU07Ozs7O0lBMEJ6QixtQ0FBNkQ7O0lBQzdELHFDQUE0Qzs7SUFDNUMsOENBQTJDOztJQUMzQyw4QkFBbUI7O0lBR2pCLCtCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE5nWm9uZSwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICcuLi9wbGF0Zm9ybS9pbmRleCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBnZXROYXRpdmVFbGVtZW50IH0gZnJvbSAnLi4vbWluaW1hbC9jb21tb24nO1xuXG5leHBvcnQgZW51bSBGb2N1c1N0YXR1cyB7XG4gIC8qKm1vdXNlIGFuZC9vciB0b3VjaCovXG4gIERFRkFVTFQgPSAnZGVmYXVsdCcsXG4gIC8qKiBrZXlib2FyZCBhbmQvb3IgcHJvZ3JhbSovXG4gIEtFWUJPQVJEID0gJ2tleWJvYXJkJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c1N0YXRlSW5mbyB7XG4gIHVubGlzdGVuOiAoKSA9PiB2b2lkO1xuICBzdWJqZWN0OiBTdWJqZWN0PEZvY3VzU3RhdGU+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzU3RhdGUge1xuICBldmVudDogRm9jdXNFdmVudDtcbiAgYnk6ICdrZXlib2FyZCcgfCAnbW91c2UnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMeUZvY3VzU3RhdGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9lbGVtZW50TWFwID0gbmV3IE1hcDxIVE1MRWxlbWVudCwgRm9jdXNTdGF0ZUluZm8+KCk7XG4gIHByaXZhdGUgX2N1cnJlbnRFdmVudDogJ21vdXNlJyB8ICdrZXlib2FyZCc7XG4gIHByaXZhdGUgX3JlbW92ZUdsb2JhbExpc3RlbmVyczogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfY291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lXG4gICkgeyB9XG5cbiAgbGlzdGVuKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIGtleUVsZW1lbnQ/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KTogT2JzZXJ2YWJsZTxGb2N1c1N0YXRlPiB8IG51bGwge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAvLyByZXR1cm4gbnVsbCBpZiBpdCBpcyBub3QgYnJvd3NlciBwbGF0Zm9ybVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgY29uc3Qga2V5ID0ga2V5RWxlbWVudCAmJiBnZXROYXRpdmVFbGVtZW50KGtleUVsZW1lbnQpIHx8IG5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudE1hcC5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRNYXAuZ2V0KGtleSkuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb2N1c1N0YXRlOiBGb2N1c1N0YXRlSW5mbyA9IHtcbiAgICAgIHVubGlzdGVuOiBudWxsLFxuICAgICAgc3ViamVjdDogbmV3IFN1YmplY3Q8Rm9jdXNTdGF0ZT4oKVxuICAgIH07XG4gICAgdGhpcy5faW5jcmVtZW50Q291bnQoKTtcbiAgICBjb25zdCBmb2N1c0xpc3RlbmVyID0gKGV2ZW50OiBGb2N1c0V2ZW50KSA9PiB0aGlzLl9vbihldmVudCwgZm9jdXNTdGF0ZS5zdWJqZWN0KTtcbiAgICBjb25zdCBibHVyTGlzdGVuZXIgPSAoZXZlbnQ6IEZvY3VzRXZlbnQpID0+IHRoaXMuX29uKGV2ZW50LCBmb2N1c1N0YXRlLnN1YmplY3QpO1xuXG4gICAgZm9jdXNTdGF0ZS51bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmb2N1c0xpc3RlbmVyLCB0cnVlKTtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGJsdXJMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHRoaXMuX2VsZW1lbnRNYXAuc2V0KGtleSwgZm9jdXNTdGF0ZSk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzTGlzdGVuZXIsIHRydWUpO1xuICAgICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckxpc3RlbmVyLCB0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9jdXNTdGF0ZS5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgdW5saXN0ZW4oZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIGlmICghUGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsID0gZ2V0TmF0aXZlRWxlbWVudChlbGVtZW50KTtcbiAgICBjb25zdCBmb2N1c1N0YXRlSW5mbyA9IHRoaXMuX2VsZW1lbnRNYXAuZ2V0KGVsKTtcbiAgICBpZiAoZm9jdXNTdGF0ZUluZm8pIHtcbiAgICAgIGZvY3VzU3RhdGVJbmZvLnVubGlzdGVuKCk7XG4gICAgICB0aGlzLl9lbGVtZW50TWFwLmRlbGV0ZShlbCk7XG4gICAgICB0aGlzLl9kZWNyZW1lbnRDb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uKGV2ZW50OiBGb2N1c0V2ZW50LCBzdWJqZWN0OiBTdWJqZWN0PEZvY3VzU3RhdGU+KSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiBzdWJqZWN0Lm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBieTogdGhpcy5fY3VycmVudEV2ZW50IHx8ICdrZXlib2FyZCdcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFQbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyT3B0aW9ucyA9IHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzXG4gICAgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0gOiBmYWxzZTtcblxuICAgIGNvbnN0IGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyID0gKCkgPT4gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2N1cnJlbnRFdmVudCA9ICdrZXlib2FyZCcpO1xuICAgIGNvbnN0IGRvY3VtZW50TW91c2Vkb3duTGlzdGVuZXIgPSAoKSA9PiB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY3VycmVudEV2ZW50ID0gJ21vdXNlJyk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfSk7XG4gICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvY3VtZW50S2V5ZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb2N1bWVudE1vdXNlZG93bkxpc3RlbmVyLCBldmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2luY3JlbWVudENvdW50KCkge1xuICAgIGlmICgrK3RoaXMuX2NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLl9hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWNyZW1lbnRDb3VudCgpIHtcbiAgICBpZiAoIS0tdGhpcy5fY291bnQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUdsb2JhbExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VsZW1lbnRNYXAuZm9yRWFjaCgoXywgZWxlbWVudCkgPT4gdGhpcy51bmxpc3RlbihlbGVtZW50KSk7XG4gIH1cbn1cbiJdfQ==