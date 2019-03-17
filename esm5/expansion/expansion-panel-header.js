/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, Inject } from '@angular/core';
import { LyAccordion } from './accordion';
import { LyExpansionPanel } from './expansion-panel';
var LyExpansionPanelHeader = /** @class */ (function () {
    function LyExpansionPanelHeader(el, renderer, _accordion, _expansionPanel) {
        this._accordion = _accordion;
        this._expansionPanel = _expansionPanel;
        /**
         * \@docs-private
         */
        this.classes = this._accordion.classes;
        renderer.addClass(el.nativeElement, this._accordion.classes.panelHeader);
    }
    LyExpansionPanelHeader.decorators = [
        { type: Component, args: [{
                    selector: 'ly-expansion-panel-header',
                    template: "<span [className]=\"classes.panelHeaderContent\">\n  <ng-content select=\"ly-panel-title\"></ng-content>\n  <ng-content select=\"ly-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<ly-expansion-icon\n  *ngIf=\"!_expansionPanel.disabled && _expansionPanel.hasToggle\"\n  [up]=\"_expansionPanel.expanded\"\n></ly-expansion-icon>",
                    host: {
                        '(click)': '_expansionPanel.toggle()'
                    }
                }] }
    ];
    /** @nocollapse */
    LyExpansionPanelHeader.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] },
        { type: LyExpansionPanel, decorators: [{ type: Inject, args: [LyExpansionPanel,] }] }
    ]; };
    return LyExpansionPanelHeader;
}());
export { LyExpansionPanelHeader };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    LyExpansionPanelHeader.prototype.classes;
    /** @type {?} */
    LyExpansionPanelHeader.prototype._accordion;
    /** @type {?} */
    LyExpansionPanelHeader.prototype._expansionPanel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9leHBhbnNpb24vIiwic291cmNlcyI6WyJleHBhbnNpb24tcGFuZWwtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFckQ7SUFVRSxnQ0FDRSxFQUFjLEVBQ2QsUUFBbUIsRUFDVyxVQUF1QixFQUNsQixlQUFpQztRQUR0QyxlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ2xCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjs7OztRQUw3RCxZQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFPekMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNFLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsMldBQTBDO29CQUMxQyxJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLDBCQUEwQjtxQkFDdEM7aUJBQ0Y7Ozs7Z0JBVm1CLFVBQVU7Z0JBQUUsU0FBUztnQkFDaEMsV0FBVyx1QkFnQmYsTUFBTSxTQUFDLFdBQVc7Z0JBZmQsZ0JBQWdCLHVCQWdCcEIsTUFBTSxTQUFDLGdCQUFnQjs7SUFLNUIsNkJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQVpZLHNCQUFzQjs7Ozs7O0lBRWpDLHlDQUEyQzs7SUFJekMsNENBQXFEOztJQUNyRCxpREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMeUFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IEx5RXhwYW5zaW9uUGFuZWwgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2x5LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1wYW5lbC1oZWFkZXIuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfZXhwYW5zaW9uUGFuZWwudG9nZ2xlKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTHlFeHBhbnNpb25QYW5lbEhlYWRlciB7XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHJlYWRvbmx5IGNsYXNzZXMgPSB0aGlzLl9hY2NvcmRpb24uY2xhc3NlcztcbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KEx5QWNjb3JkaW9uKSByZWFkb25seSBfYWNjb3JkaW9uOiBMeUFjY29yZGlvbixcbiAgICBASW5qZWN0KEx5RXhwYW5zaW9uUGFuZWwpIHJlYWRvbmx5IF9leHBhbnNpb25QYW5lbDogTHlFeHBhbnNpb25QYW5lbFxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCB0aGlzLl9hY2NvcmRpb24uY2xhc3Nlcy5wYW5lbEhlYWRlcik7XG4gIH1cblxufVxuIl19