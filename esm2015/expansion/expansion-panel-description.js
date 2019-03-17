/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
export class LyExpansionPanelDescription {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} accordion
     */
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelDescription);
    }
}
LyExpansionPanelDescription.decorators = [
    { type: Directive, args: [{
                selector: 'ly-panel-description'
            },] }
];
/** @nocollapse */
LyExpansionPanelDescription.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWRlc2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC1kZXNjcmlwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSzFDLE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQUN0QyxZQUNFLEVBQWMsRUFDZCxRQUFtQixFQUNFLFNBQXNCO1FBRTNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUUsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7YUFDakM7Ozs7WUFMMkIsVUFBVTtZQUFFLFNBQVM7WUFDeEMsV0FBVyx1QkFTZixNQUFNLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5QWNjb3JkaW9uIH0gZnJvbSAnLi9hY2NvcmRpb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1wYW5lbC1kZXNjcmlwdGlvbidcbn0pXG5leHBvcnQgY2xhc3MgTHlFeHBhbnNpb25QYW5lbERlc2NyaXB0aW9uIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KEx5QWNjb3JkaW9uKSBhY2NvcmRpb246IEx5QWNjb3JkaW9uXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIGFjY29yZGlvbi5jbGFzc2VzLnBhbmVsRGVzY3JpcHRpb24pO1xuICB9XG59XG4iXX0=