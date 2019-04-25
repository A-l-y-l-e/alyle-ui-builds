import * as tslib_1 from "tslib";
import { Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
var LyExpansionPanelDescription = /** @class */ (function () {
    function LyExpansionPanelDescription(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelDescription);
    }
    LyExpansionPanelDescription = tslib_1.__decorate([
        Directive({
            selector: 'ly-panel-description'
        }),
        tslib_1.__param(2, Inject(LyAccordion)),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LyAccordion])
    ], LyExpansionPanelDescription);
    return LyExpansionPanelDescription;
}());
export { LyExpansionPanelDescription };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWRlc2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC1kZXNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSzFDO0lBQ0UscUNBQ0UsRUFBYyxFQUNkLFFBQW1CLEVBQ0UsU0FBc0I7UUFFM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBUFUsMkJBQTJCO1FBSHZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7U0FDakMsQ0FBQztRQUtHLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtpREFGaEIsVUFBVTtZQUNKLFNBQVM7WUFDYSxXQUFXO09BSmxDLDJCQUEyQixDQVF2QztJQUFELGtDQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlBY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LXBhbmVsLWRlc2NyaXB0aW9uJ1xufSlcbmV4cG9ydCBjbGFzcyBMeUV4cGFuc2lvblBhbmVsRGVzY3JpcHRpb24ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoTHlBY2NvcmRpb24pIGFjY29yZGlvbjogTHlBY2NvcmRpb25cbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgYWNjb3JkaW9uLmNsYXNzZXMucGFuZWxEZXNjcmlwdGlvbik7XG4gIH1cbn1cbiJdfQ==