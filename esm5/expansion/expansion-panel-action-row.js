/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
var LyExpansionPanelAction = /** @class */ (function () {
    function LyExpansionPanelAction(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelActionRow);
    }
    LyExpansionPanelAction.decorators = [
        { type: Directive, args: [{
                    selector: 'ly-action-row'
                },] }
    ];
    /** @nocollapse */
    LyExpansionPanelAction.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
    ]; };
    return LyExpansionPanelAction;
}());
export { LyExpansionPanelAction };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWFjdGlvbi1yb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZXhwYW5zaW9uLyIsInNvdXJjZXMiOlsiZXhwYW5zaW9uLXBhbmVsLWFjdGlvbi1yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQztJQUlFLGdDQUNFLEVBQWMsRUFDZCxRQUFtQixFQUNFLFNBQXNCO1FBRTNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBTDJCLFVBQVU7Z0JBQUUsU0FBUztnQkFDeEMsV0FBVyx1QkFTZixNQUFNLFNBQUMsV0FBVzs7SUFJdkIsNkJBQUM7Q0FBQSxBQVhELElBV0M7U0FSWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktYWN0aW9uLXJvdydcbn0pXG5leHBvcnQgY2xhc3MgTHlFeHBhbnNpb25QYW5lbEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChMeUFjY29yZGlvbikgYWNjb3JkaW9uOiBMeUFjY29yZGlvblxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCBhY2NvcmRpb24uY2xhc3Nlcy5wYW5lbEFjdGlvblJvdyk7XG4gIH1cbn1cbiJdfQ==