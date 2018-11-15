/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
/** @type {?} */
const MUTATION_OBSERVER_INIT = {
    characterData: true,
    childList: true,
    subtree: true
};
export class MutationObserverFactory {
    /**
     * @param {?} callback
     * @return {?}
     */
    create(callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }
}
MutationObserverFactory.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MutationObserverFactory.ngInjectableDef = i0.defineInjectable({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
export class ElementObserver {
    /**
     * @param {?} _mutationObserverFactory
     */
    constructor(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        this._observedElements = new Map();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._observedElements.forEach((_, element) => this.destroy(element));
    }
    /**
     * @param {?} elementOrRef
     * @param {?} fn
     * @param {?=} options
     * @return {?}
     */
    observe(elementOrRef, fn, options) {
        /** @type {?} */
        const element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
        if (!this._observedElements.has(element)) {
            /** @type {?} */
            const observer = this._mutationObserverFactory.create(fn);
            if (observer) {
                observer.observe(element, options || MUTATION_OBSERVER_INIT);
            }
            this._observedElements.set(element, observer);
        }
        return this._observedElements.get(element);
    }
    /**
     * Destroy Observer
     * @param {?} elementOrRef
     * @return {?}
     */
    destroy(elementOrRef) {
        /** @type {?} */
        const element = elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
        if (this._observedElements.has(element)) {
            this._observedElements.get(element).disconnect();
            this._observedElements.delete(element);
        }
    }
}
ElementObserver.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ElementObserver.ctorParameters = () => [
    { type: MutationObserverFactory }
];
/** @nocollapse */ ElementObserver.ngInjectableDef = i0.defineInjectable({ factory: function ElementObserver_Factory() { return new ElementObserver(i0.inject(MutationObserverFactory)); }, token: ElementObserver, providedIn: "root" });
if (false) {
    /** @type {?} */
    ElementObserver.prototype._observedElements;
    /** @type {?} */
    ElementObserver.prototype._mutationObserverFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb24tb2JzZXJ2ZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS8iLCJzb3VyY2VzIjpbInNyYy9kb20vbXV0YXRpb24tb2JzZXJ2ZXItZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7OztNQUU1RCxzQkFBc0IsR0FBRztJQUM3QixhQUFhLEVBQUUsSUFBSTtJQUNuQixTQUFTLEVBQUUsSUFBSTtJQUNmLE9BQU8sRUFBRSxJQUFJO0NBQ2Q7QUFHRCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUNsQyxNQUFNLENBQUMsUUFBMEI7UUFDL0IsT0FBTyxPQUFPLGdCQUFnQixLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7OztZQUpGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7OztBQVFoQyxNQUFNLE9BQU8sZUFBZTs7OztJQUcxQixZQUNVLHdCQUFpRDtRQUFqRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBSG5ELHNCQUFpQixHQUFHLElBQUksR0FBRyxFQUFvQyxDQUFDO0lBSXBFLENBQUM7Ozs7SUFFTCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7O0lBRUQsT0FBTyxDQUFDLFlBQTJDLEVBQUUsRUFBb0IsRUFBRSxPQUE4Qjs7Y0FDakcsT0FBTyxHQUFHLFlBQVksWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVk7UUFDOUYsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7O2tCQUNsQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDekQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxJQUFJLHNCQUFzQixDQUFDLENBQUM7YUFDOUQ7WUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFLRCxPQUFPLENBQUMsWUFBMkM7O2NBQzNDLE9BQU8sR0FBRyxZQUFZLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZO1FBQzlGLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDOzs7WUFqQ0YsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztZQUtNLHVCQUF1Qjs7Ozs7SUFIM0QsNENBQXdFOztJQUd0RSxtREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCA9IHtcbiAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgY2hpbGRMaXN0OiB0cnVlLFxuICBzdWJ0cmVlOiB0cnVlXG59O1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeSB7XG4gIGNyZWF0ZShjYWxsYmFjazogTXV0YXRpb25DYWxsYmFjayk6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBFbGVtZW50T2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vYnNlcnZlZEVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tdXRhdGlvbk9ic2VydmVyRmFjdG9yeTogTXV0YXRpb25PYnNlcnZlckZhY3RvcnlcbiAgKSB7IH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMuZGVzdHJveShlbGVtZW50KSk7XG4gIH1cblxuICBvYnNlcnZlKGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4sIGZuOiBNdXRhdGlvbkNhbGxiYWNrLCBvcHRpb25zPzogTXV0YXRpb25PYnNlcnZlckluaXQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICghdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5fbXV0YXRpb25PYnNlcnZlckZhY3RvcnkuY3JlYXRlKGZuKTtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9wdGlvbnMgfHwgTVVUQVRJT05fT0JTRVJWRVJfSU5JVCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLnNldChlbGVtZW50LCBvYnNlcnZlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmdldChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IE9ic2VydmVyXG4gICAqL1xuICBkZXN0cm95KGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yUmVmIGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnRPclJlZi5uYXRpdmVFbGVtZW50IDogZWxlbWVudE9yUmVmO1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=