import * as tslib_1 from "tslib";
import { Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
var LyExpansionPanelAction = /** @class */ (function () {
    function LyExpansionPanelAction(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelActionRow);
    }
    LyExpansionPanelAction = tslib_1.__decorate([
        Directive({
            selector: 'ly-action-row'
        }),
        tslib_1.__param(2, Inject(LyAccordion)),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LyAccordion])
    ], LyExpansionPanelAction);
    return LyExpansionPanelAction;
}());
export { LyExpansionPanelAction };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWFjdGlvbi1yb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZXhwYW5zaW9uLyIsInNvdXJjZXMiOlsiZXhwYW5zaW9uLXBhbmVsLWFjdGlvbi1yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUsxQztJQUNFLGdDQUNFLEVBQWMsRUFDZCxRQUFtQixFQUNFLFNBQXNCO1FBRTNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFQVSxzQkFBc0I7UUFIbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7U0FDMUIsQ0FBQztRQUtHLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtpREFGaEIsVUFBVTtZQUNKLFNBQVM7WUFDYSxXQUFXO09BSmxDLHNCQUFzQixDQVFsQztJQUFELDZCQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlBY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2x5LWFjdGlvbi1yb3cnXG59KVxuZXhwb3J0IGNsYXNzIEx5RXhwYW5zaW9uUGFuZWxBY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoTHlBY2NvcmRpb24pIGFjY29yZGlvbjogTHlBY2NvcmRpb25cbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgYWNjb3JkaW9uLmNsYXNzZXMucGFuZWxBY3Rpb25Sb3cpO1xuICB9XG59XG4iXX0=