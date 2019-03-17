/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
export class LyExpansionPanelTitle {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} accordion
     */
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelTitle);
    }
}
LyExpansionPanelTitle.decorators = [
    { type: Directive, args: [{
                selector: 'ly-panel-title'
            },] }
];
/** @nocollapse */
LyExpansionPanelTitle.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLXRpdGxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2V4cGFuc2lvbi8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC10aXRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSzFDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUNoQyxZQUNFLEVBQWMsRUFDZCxRQUFtQixFQUNFLFNBQXNCO1FBRTNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBTDJCLFVBQVU7WUFBRSxTQUFTO1lBQ3hDLFdBQVcsdUJBU2YsTUFBTSxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktcGFuZWwtdGl0bGUnXG59KVxuZXhwb3J0IGNsYXNzIEx5RXhwYW5zaW9uUGFuZWxUaXRsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChMeUFjY29yZGlvbikgYWNjb3JkaW9uOiBMeUFjY29yZGlvblxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCBhY2NvcmRpb24uY2xhc3Nlcy5wYW5lbFRpdGxlKTtcbiAgfVxufVxuIl19