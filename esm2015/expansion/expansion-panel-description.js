import * as tslib_1 from "tslib";
import { Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
let LyExpansionPanelDescription = class LyExpansionPanelDescription {
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelDescription);
    }
};
LyExpansionPanelDescription.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
LyExpansionPanelDescription = tslib_1.__decorate([
    Directive({
        selector: 'ly-panel-description'
    }),
    tslib_1.__param(2, Inject(LyAccordion))
], LyExpansionPanelDescription);
export { LyExpansionPanelDescription };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWRlc2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC1kZXNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSzFDLElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBQ3RDLFlBQ0UsRUFBYyxFQUNkLFFBQW1CLEVBQ0UsU0FBc0I7UUFFM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQ0YsQ0FBQTs7WUFOTyxVQUFVO1lBQ0osU0FBUztZQUNhLFdBQVcsdUJBQTFDLE1BQU0sU0FBQyxXQUFXOztBQUpWLDJCQUEyQjtJQUh2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO0tBQ2pDLENBQUM7SUFLRyxtQkFBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7R0FKWCwyQkFBMkIsQ0FRdkM7U0FSWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktcGFuZWwtZGVzY3JpcHRpb24nXG59KVxuZXhwb3J0IGNsYXNzIEx5RXhwYW5zaW9uUGFuZWxEZXNjcmlwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChMeUFjY29yZGlvbikgYWNjb3JkaW9uOiBMeUFjY29yZGlvblxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCBhY2NvcmRpb24uY2xhc3Nlcy5wYW5lbERlc2NyaXB0aW9uKTtcbiAgfVxufVxuIl19