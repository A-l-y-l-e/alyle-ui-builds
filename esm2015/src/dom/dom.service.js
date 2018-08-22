/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { LyOverlayContainer } from './overlay-container.component';
export class DomService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} overlayContainer
     */
    constructor(componentFactoryResolver, overlayContainer) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.overlayContainer = overlayContainer;
    }
    /**
     * @template T
     * @param {?} _hostViewContainerRef
     * @param {?} component
     * @param {?} template
     * @return {?}
     */
    attach(_hostViewContainerRef, component, template) {
        /** @type {?} */
        const viewRef = _hostViewContainerRef.createEmbeddedView(template);
        viewRef.detectChanges();
        this._viewContainerRef = _hostViewContainerRef;
        viewRef.rootNodes.forEach(rootNode => this.addChild(rootNode));
    }
    /**
     * @param {?} child
     * @return {?}
     */
    addChild(child) {
        this.overlayContainer.containerElement.appendChild(child);
    }
    /**
     * @param {?} componentRef
     * @return {?}
     */
    getDomElementFromComponentRef(componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView))
            .rootNodes[0]);
    }
    /**
     * @param {?} componentRef
     * @param {?} delay
     * @return {?}
     */
    destroyRef(componentRef, delay) {
        setTimeout(() => {
            if (this._viewContainerRef) {
                this._viewContainerRef.detach();
                this._viewContainerRef.clear();
            }
        }, delay);
    }
}
DomService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DomService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: LyOverlayContainer }
];
if (false) {
    /** @type {?} */
    DomService.prototype._viewContainerRef;
    /** @type {?} */
    DomService.prototype._viewRef;
    /** @type {?} */
    DomService.prototype.componentFactoryResolver;
    /** @type {?} */
    DomService.prototype.overlayContainer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvIiwic291cmNlcyI6WyJzcmMvZG9tL2RvbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUVWLHdCQUF3QixFQU96QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUduRSxNQUFNOzs7OztJQUdKLFlBQ1UsMEJBQ0E7UUFEQSw2QkFBd0IsR0FBeEIsd0JBQXdCO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0I7S0FDckI7Ozs7Ozs7O0lBRUwsTUFBTSxDQUFJLHFCQUF1QyxFQUFFLFNBQWMsRUFBRSxRQUEwQjs7UUFDekYsTUFBTSxPQUFPLEdBQUcscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQztRQUMvQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUNsRTs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBa0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzRDs7Ozs7SUFFRCw2QkFBNkIsQ0FBQyxZQUErQjtRQUMzRCx5QkFBTyxtQkFBQyxZQUFZLENBQUMsUUFBZ0MsRUFBQzthQUNyRCxTQUFTLENBQUMsQ0FBQyxDQUFnQixFQUFDO0tBQzlCOzs7Ozs7SUFFRCxVQUFVLENBQUMsWUFBK0IsRUFBRSxLQUFhO1FBQ3ZELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEM7U0FDRixFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ1g7OztZQWhDRixVQUFVOzs7O1lBVlQsd0JBQXdCO1lBUWpCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQXBwbGljYXRpb25SZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeU92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb21TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSBfdmlld1JlZjogVmlld1JlZjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIG92ZXJsYXlDb250YWluZXI6IEx5T3ZlcmxheUNvbnRhaW5lclxuICApIHsgfVxuXG4gIGF0dGFjaDxUPihfaG9zdFZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsIGNvbXBvbmVudDogYW55LCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgY29uc3Qgdmlld1JlZiA9IF9ob3N0Vmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUpO1xuICAgICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmID0gX2hvc3RWaWV3Q29udGFpbmVyUmVmO1xuICAgICAgdmlld1JlZi5yb290Tm9kZXMuZm9yRWFjaChyb290Tm9kZSA9PiB0aGlzLmFkZENoaWxkKHJvb3ROb2RlKSk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLm92ZXJsYXlDb250YWluZXIuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBnZXREb21FbGVtZW50RnJvbUNvbXBvbmVudFJlZihjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBkZXN0cm95UmVmKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4sIGRlbGF5OiBudW1iZXIpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gIH1cbn1cbiJdfQ==