import * as tslib_1 from "tslib";
import { Component, ElementRef, Renderer2, Inject } from '@angular/core';
import { LyAccordion } from './accordion';
import { LyExpansionPanel } from './expansion-panel';
let LyExpansionPanelHeader = class LyExpansionPanelHeader {
    constructor(el, renderer, _accordion, _expansionPanel) {
        this._accordion = _accordion;
        this._expansionPanel = _expansionPanel;
        /** @docs-private */
        this.classes = this._accordion.classes;
        renderer.addClass(el.nativeElement, this._accordion.classes.panelHeader);
    }
};
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
export { LyExpansionPanelHeader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9leHBhbnNpb24vIiwic291cmNlcyI6WyJleHBhbnNpb24tcGFuZWwtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFTckQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFHakMsWUFDRSxFQUFjLEVBQ2QsUUFBbUIsRUFDVyxVQUF1QixFQUNsQixlQUFpQztRQUR0QyxlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ2xCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQU50RSxvQkFBb0I7UUFDWCxZQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFPekMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Q0FFRixDQUFBO0FBWlksc0JBQXNCO0lBUGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsMldBQTBDO1FBQzFDLElBQUksRUFBRTtZQUNKLFNBQVMsRUFBRSwwQkFBMEI7U0FDdEM7S0FDRixDQUFDO0lBT0csbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ25CLG1CQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBOzZDQUhyQixVQUFVO1FBQ0osU0FBUztRQUN1QixXQUFXO1FBQ0QsZ0JBQWdCO0dBUDNELHNCQUFzQixDQVlsQztTQVpZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5QWNjb3JkaW9uIH0gZnJvbSAnLi9hY2NvcmRpb24nO1xuaW1wb3J0IHsgTHlFeHBhbnNpb25QYW5lbCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbHktZXhwYW5zaW9uLXBhbmVsLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19leHBhbnNpb25QYW5lbC50b2dnbGUoKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBMeUV4cGFuc2lvblBhbmVsSGVhZGVyIHtcbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgcmVhZG9ubHkgY2xhc3NlcyA9IHRoaXMuX2FjY29yZGlvbi5jbGFzc2VzO1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoTHlBY2NvcmRpb24pIHJlYWRvbmx5IF9hY2NvcmRpb246IEx5QWNjb3JkaW9uLFxuICAgIEBJbmplY3QoTHlFeHBhbnNpb25QYW5lbCkgcmVhZG9ubHkgX2V4cGFuc2lvblBhbmVsOiBMeUV4cGFuc2lvblBhbmVsXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2FjY29yZGlvbi5jbGFzc2VzLnBhbmVsSGVhZGVyKTtcbiAgfVxuXG59XG4iXX0=