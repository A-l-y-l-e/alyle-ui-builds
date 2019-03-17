/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
var LyExpansionPanelDescription = /** @class */ (function () {
    function LyExpansionPanelDescription(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelDescription);
    }
    LyExpansionPanelDescription.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-panel-description'
                },] }
    ];
    /** @nocollapse */
    LyExpansionPanelDescription.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
    ]; };
    return LyExpansionPanelDescription;
}());
export { LyExpansionPanelDescription };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWRlc2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC1kZXNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDO0lBSUUscUNBQ0UsRUFBYyxFQUNkLFFBQW1CLEVBQ0UsU0FBc0I7UUFFM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxRSxDQUFDOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7Ozs7Z0JBTDJCLFVBQVU7Z0JBQUUsU0FBUztnQkFDeEMsV0FBVyx1QkFTZixNQUFNLFNBQUMsV0FBVzs7SUFJdkIsa0NBQUM7Q0FBQSxBQVhELElBV0M7U0FSWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktcGFuZWwtZGVzY3JpcHRpb24nXG59KVxuZXhwb3J0IGNsYXNzIEx5RXhwYW5zaW9uUGFuZWxEZXNjcmlwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChMeUFjY29yZGlvbikgYWNjb3JkaW9uOiBMeUFjY29yZGlvblxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCBhY2NvcmRpb24uY2xhc3Nlcy5wYW5lbERlc2NyaXB0aW9uKTtcbiAgfVxufVxuIl19