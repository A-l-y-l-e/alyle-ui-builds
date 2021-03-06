import * as tslib_1 from "tslib";
import { Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
let LyExpansionPanelAction = class LyExpansionPanelAction {
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelActionRow);
    }
};
LyExpansionPanelAction.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
LyExpansionPanelAction = tslib_1.__decorate([
    Directive({
        selector: 'ly-action-row'
    }),
    tslib_1.__param(2, Inject(LyAccordion))
], LyExpansionPanelAction);
export { LyExpansionPanelAction };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWFjdGlvbi1yb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZXhwYW5zaW9uLyIsInNvdXJjZXMiOlsiZXhwYW5zaW9uLXBhbmVsLWFjdGlvbi1yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUsxQyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUNqQyxZQUNFLEVBQWMsRUFDZCxRQUFtQixFQUNFLFNBQXNCO1FBRTNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FDRixDQUFBOztZQU5PLFVBQVU7WUFDSixTQUFTO1lBQ2EsV0FBVyx1QkFBMUMsTUFBTSxTQUFDLFdBQVc7O0FBSlYsc0JBQXNCO0lBSGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO0tBQzFCLENBQUM7SUFLRyxtQkFBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7R0FKWCxzQkFBc0IsQ0FRbEM7U0FSWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbHktYWN0aW9uLXJvdydcbn0pXG5leHBvcnQgY2xhc3MgTHlFeHBhbnNpb25QYW5lbEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChMeUFjY29yZGlvbikgYWNjb3JkaW9uOiBMeUFjY29yZGlvblxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCBhY2NvcmRpb24uY2xhc3Nlcy5wYW5lbEFjdGlvblJvdyk7XG4gIH1cbn1cbiJdfQ==