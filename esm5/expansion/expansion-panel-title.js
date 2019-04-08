import * as tslib_1 from "tslib";
import { Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
var LyExpansionPanelTitle = /** @class */ (function () {
    function LyExpansionPanelTitle(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelTitle);
    }
    LyExpansionPanelTitle = tslib_1.__decorate([
        Directive({
            selector: 'ly-panel-title'
        }),
        tslib_1.__param(2, Inject(LyAccordion)),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LyAccordion])
    ], LyExpansionPanelTitle);
    return LyExpansionPanelTitle;
}());
export { LyExpansionPanelTitle };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLXRpdGxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC10aXRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSzFDO0lBQ0UsK0JBQ0UsRUFBYyxFQUNkLFFBQW1CLEVBQ0UsU0FBc0I7UUFFM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQVBVLHFCQUFxQjtRQUhqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7UUFLRyxtQkFBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7aURBRmhCLFVBQVU7WUFDSixTQUFTO1lBQ2EsV0FBVztPQUpsQyxxQkFBcUIsQ0FRakM7SUFBRCw0QkFBQztDQUFBLEFBUkQsSUFRQztTQVJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5QWNjb3JkaW9uIH0gZnJvbSAnLi9hY2NvcmRpb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1wYW5lbC10aXRsZSdcbn0pXG5leHBvcnQgY2xhc3MgTHlFeHBhbnNpb25QYW5lbFRpdGxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KEx5QWNjb3JkaW9uKSBhY2NvcmRpb246IEx5QWNjb3JkaW9uXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIGFjY29yZGlvbi5jbGFzc2VzLnBhbmVsVGl0bGUpO1xuICB9XG59XG4iXX0=