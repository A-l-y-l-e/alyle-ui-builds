import * as tslib_1 from "tslib";
import { Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
let LyExpansionPanelTitle = class LyExpansionPanelTitle {
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelTitle);
    }
};
LyExpansionPanelTitle.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
LyExpansionPanelTitle = tslib_1.__decorate([
    Directive({
        selector: 'ly-panel-title'
    }),
    tslib_1.__param(2, Inject(LyAccordion))
], LyExpansionPanelTitle);
export { LyExpansionPanelTitle };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLXRpdGxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC10aXRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSzFDLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBQ2hDLFlBQ0UsRUFBYyxFQUNkLFFBQW1CLEVBQ0UsU0FBc0I7UUFFM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUNGLENBQUE7O1lBTk8sVUFBVTtZQUNKLFNBQVM7WUFDYSxXQUFXLHVCQUExQyxNQUFNLFNBQUMsV0FBVzs7QUFKVixxQkFBcUI7SUFIakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtLQUMzQixDQUFDO0lBS0csbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0dBSlgscUJBQXFCLENBUWpDO1NBUlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlBY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXBhbmVsLXRpdGxlJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUV4cGFuc2lvblBhbmVsVGl0bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoTHlBY2NvcmRpb24pIGFjY29yZGlvbjogTHlBY2NvcmRpb25cbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgYWNjb3JkaW9uLmNsYXNzZXMucGFuZWxUaXRsZSk7XG4gIH1cbn1cbiJdfQ==