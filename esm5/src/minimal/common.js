/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef, NgModule, ElementRef } from '@angular/core';
/**
 * @record
 */
export function KeyAttribute() { }
var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(_viewRef) {
        this._viewRef = _viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngTransclude;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            if (templateRef) {
                this._ngTransclude = templateRef;
                this._viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgTranscludeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._viewRef.remove();
    };
    NgTranscludeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngTransclude]'
                },] }
    ];
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NgTranscludeDirective.propDecorators = {
        ngTransclude: [{ type: Input }]
    };
    return NgTranscludeDirective;
}());
export { NgTranscludeDirective };
if (false) {
    /** @type {?} */
    NgTranscludeDirective.prototype._ngTransclude;
    /** @type {?} */
    NgTranscludeDirective.prototype._viewRef;
}
var NgTranscludeModule = /** @class */ (function () {
    function NgTranscludeModule() {
    }
    NgTranscludeModule.decorators = [
        { type: NgModule, args: [{
                    exports: [NgTranscludeDirective],
                    declarations: [NgTranscludeDirective]
                },] }
    ];
    return NgTranscludeModule;
}());
export { NgTranscludeModule };
/**
 * @ignore
 * @param {?} element
 * @return {?}
 */
export function getNativeElement(element) {
    return element instanceof ElementRef ? element.nativeElement : element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL21pbmltYWwvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQWEsUUFBUSxFQUFFLFVBQVUsRUFDakYsTUFBTSxlQUFlLENBQUM7Ozs7QUFFdkIsa0NBRUM7QUFFRDtJQW1CRSwrQkFBb0IsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBSSxDQUFDO0lBWm5ELHNCQUNJLCtDQUFZOzs7O1FBT2hCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBVkQsVUFDaUIsV0FBNkI7WUFDNUMsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDOzs7T0FBQTs7OztJQU9ELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFUZ0MsZ0JBQWdCOzs7K0JBYzlDLEtBQUs7O0lBZ0JSLDRCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FwQlkscUJBQXFCOzs7SUFFaEMsOENBQXdDOztJQWM1Qix5Q0FBa0M7O0FBS2hEO0lBQUE7SUFNQSxDQUFDOztnQkFOQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7b0JBQ2hDLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUN0Qzs7SUFHRCx5QkFBQztDQUFBLEFBTkQsSUFNQztTQUZZLGtCQUFrQjs7Ozs7O0FBTy9CLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxPQUE4QztJQUM3RSxPQUFPLE9BQU8sWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN6RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgT25EZXN0cm95LCBOZ01vZHVsZSwgRWxlbWVudFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbmdUcmFuc2NsdWRlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gdGVtcGxhdGVSZWY7XHJcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl92aWV3UmVmLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtOZ1RyYW5zY2x1ZGVEaXJlY3RpdmVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZU1vZHVsZSB7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik6IEhUTUxFbGVtZW50IHtcclxuICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYgPyBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBlbGVtZW50O1xyXG59XHJcbiJdfQ==