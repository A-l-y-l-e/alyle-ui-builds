import * as tslib_1 from "tslib";
import { Component, ElementRef, Renderer2, Inject } from '@angular/core';
import { LyAccordion } from './accordion';
import { LyExpansionPanel } from './expansion-panel';
var LyExpansionPanelHeader = /** @class */ (function () {
    function LyExpansionPanelHeader(el, renderer, _accordion, _expansionPanel) {
        this._accordion = _accordion;
        this._expansionPanel = _expansionPanel;
        /** @docs-private */
        this.classes = this._accordion.classes;
        renderer.addClass(el.nativeElement, this._accordion.classes.panelHeader);
    }
    LyExpansionPanelHeader = tslib_1.__decorate([
        Component({
            selector: 'ly-expansion-panel-header',
            template: "<span [className]=\"classes.panelHeaderContent\">\n  <ng-content select=\"ly-panel-title\"></ng-content>\n  <ng-content select=\"ly-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<ly-expansion-icon\n  *ngIf=\"!_expansionPanel.disabled && _expansionPanel.hasToggle\"\n  [up]=\"_expansionPanel.expanded\"\n></ly-expansion-icon>",
            host: {
                '(click)': '_expansionPanel.toggle()'
            }
        }),
        tslib_1.__param(2, Inject(LyAccordion)),
        tslib_1.__param(3, Inject(LyExpansionPanel)),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            Renderer2,
            LyAccordion,
            LyExpansionPanel])
    ], LyExpansionPanelHeader);
    return LyExpansionPanelHeader;
}());
export { LyExpansionPanelHeader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9leHBhbnNpb24vIiwic291cmNlcyI6WyJleHBhbnNpb24tcGFuZWwtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFTckQ7SUFHRSxnQ0FDRSxFQUFjLEVBQ2QsUUFBbUIsRUFDVyxVQUF1QixFQUNsQixlQUFpQztRQUR0QyxlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ2xCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQU50RSxvQkFBb0I7UUFDWCxZQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFPekMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFWVSxzQkFBc0I7UUFQbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQywyV0FBMEM7WUFDMUMsSUFBSSxFQUFFO2dCQUNKLFNBQVMsRUFBRSwwQkFBMEI7YUFDdEM7U0FDRixDQUFDO1FBT0csbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ25CLG1CQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO2lEQUhyQixVQUFVO1lBQ0osU0FBUztZQUN1QixXQUFXO1lBQ0QsZ0JBQWdCO09BUDNELHNCQUFzQixDQVlsQztJQUFELDZCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlBY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5pbXBvcnQgeyBMeUV4cGFuc2lvblBhbmVsIH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdseS1leHBhbnNpb24tcGFuZWwtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdleHBhbnNpb24tcGFuZWwtaGVhZGVyLmh0bWwnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2V4cGFuc2lvblBhbmVsLnRvZ2dsZSgpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEx5RXhwYW5zaW9uUGFuZWxIZWFkZXIge1xuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICByZWFkb25seSBjbGFzc2VzID0gdGhpcy5fYWNjb3JkaW9uLmNsYXNzZXM7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChMeUFjY29yZGlvbikgcmVhZG9ubHkgX2FjY29yZGlvbjogTHlBY2NvcmRpb24sXG4gICAgQEluamVjdChMeUV4cGFuc2lvblBhbmVsKSByZWFkb25seSBfZXhwYW5zaW9uUGFuZWw6IEx5RXhwYW5zaW9uUGFuZWxcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudCwgdGhpcy5fYWNjb3JkaW9uLmNsYXNzZXMucGFuZWxIZWFkZXIpO1xuICB9XG5cbn1cbiJdfQ==