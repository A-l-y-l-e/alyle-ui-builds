import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy, NgModule, ElementRef } from '@angular/core';
let NgTranscludeDirective = class NgTranscludeDirective {
    constructor(_viewRef) {
        this._viewRef = _viewRef;
    }
    set ngTransclude(templateRef) {
        if (templateRef) {
            this._ngTransclude = templateRef;
            this._viewRef.createEmbeddedView(templateRef);
        }
        else {
            this._ngTransclude = null;
            this._viewRef.clear();
        }
    }
    get getNgTransclude() {
        return this._ngTransclude;
    }
    ngOnDestroy() {
        this._viewRef.remove();
    }
};
NgTranscludeDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
tslib_1.__decorate([
    Input()
], NgTranscludeDirective.prototype, "ngTransclude", null);
NgTranscludeDirective = tslib_1.__decorate([
    Directive({
        selector: '[ngTransclude]'
    })
], NgTranscludeDirective);
export { NgTranscludeDirective };
let NgTranscludeModule = class NgTranscludeModule {
};
NgTranscludeModule = tslib_1.__decorate([
    NgModule({
        exports: [NgTranscludeDirective],
        declarations: [NgTranscludeDirective]
    })
], NgTranscludeModule);
export { NgTranscludeModule };
/**
 * @ignore
 */
export function getNativeElement(element) {
    return element instanceof ElementRef ? element.nativeElement : element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL21pbmltYWwvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQ2pGLE1BQU0sZUFBZSxDQUFDO0FBU3ZCLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBbUJoQyxZQUFvQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUFJLENBQUM7SUFkbkQsSUFBSSxZQUFZLENBQUMsV0FBNkI7UUFDNUMsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUdELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRixDQUFBOztZQUorQixnQkFBZ0I7O0FBZDlDO0lBREMsS0FBSyxFQUFFO3lEQVNQO0FBYlUscUJBQXFCO0lBSGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7S0FDM0IsQ0FBQztHQUNXLHFCQUFxQixDQXVCakM7U0F2QlkscUJBQXFCO0FBNEJsQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtDQUU5QixDQUFBO0FBRlksa0JBQWtCO0lBSjlCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ2hDLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ3RDLENBQUM7R0FDVyxrQkFBa0IsQ0FFOUI7U0FGWSxrQkFBa0I7QUFJL0I7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBOEM7SUFDN0UsT0FBTyxPQUFPLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDekUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPbkRlc3Ryb3ksIE5nTW9kdWxlLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEtleUF0dHJpYnV0ZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfbmdUcmFuc2NsdWRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbDtcblxuICBASW5wdXQoKVxuICBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9uZ1RyYW5zY2x1ZGUgPSB0ZW1wbGF0ZVJlZjtcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbmdUcmFuc2NsdWRlID0gbnVsbDtcbiAgICAgIHRoaXMuX3ZpZXdSZWYuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZ2V0TmdUcmFuc2NsdWRlKCkge1xuICAgIHJldHVybiB0aGlzLl9uZ1RyYW5zY2x1ZGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3UmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdmlld1JlZi5yZW1vdmUoKTtcbiAgfVxufVxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW05nVHJhbnNjbHVkZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdUcmFuc2NsdWRlTW9kdWxlIHtcblxufVxuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdGl2ZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik6IEhUTUxFbGVtZW50IHtcbiAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmID8gZWxlbWVudC5uYXRpdmVFbGVtZW50IDogZWxlbWVudDtcbn1cbiJdfQ==