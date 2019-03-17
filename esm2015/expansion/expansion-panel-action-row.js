/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Inject, ElementRef, Renderer2 } from '@angular/core';
import { LyAccordion } from './accordion';
export class LyExpansionPanelAction {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} accordion
     */
    constructor(el, renderer, accordion) {
        renderer.addClass(el.nativeElement, accordion.classes.panelActionRow);
    }
}
LyExpansionPanelAction.decorators = [
    { type: Directive, args: [{
                selector: 'ly-action-row'
            },] }
];
/** @nocollapse */
LyExpansionPanelAction.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LyAccordion, decorators: [{ type: Inject, args: [LyAccordion,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWFjdGlvbi1yb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvZXhwYW5zaW9uLyIsInNvdXJjZXMiOlsiZXhwYW5zaW9uLXBhbmVsLWFjdGlvbi1yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUsxQyxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFDakMsWUFDRSxFQUFjLEVBQ2QsUUFBbUIsRUFDRSxTQUFzQjtRQUUzQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7Ozs7WUFMMkIsVUFBVTtZQUFFLFNBQVM7WUFDeEMsV0FBVyx1QkFTZixNQUFNLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5QWNjb3JkaW9uIH0gZnJvbSAnLi9hY2NvcmRpb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdseS1hY3Rpb24tcm93J1xufSlcbmV4cG9ydCBjbGFzcyBMeUV4cGFuc2lvblBhbmVsQWN0aW9uIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KEx5QWNjb3JkaW9uKSBhY2NvcmRpb246IEx5QWNjb3JkaW9uXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIGFjY29yZGlvbi5jbGFzc2VzLnBhbmVsQWN0aW9uUm93KTtcbiAgfVxufVxuIl19