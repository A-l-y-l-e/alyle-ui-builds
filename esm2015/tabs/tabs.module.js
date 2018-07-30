/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyTab, LyTabGroupComponent, LyTabContent } from './tabs';
import { LyHeaderPaginationModule } from '@alyle/ui/header-pagination';
import { LyRippleModule } from '@alyle/ui/ripple';
import { NgTranscludeModule } from '@alyle/ui';
import { LyTabLabelDirective } from './tab-label.directive';
export class LyTabsModule {
}
LyTabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LyRippleModule, LyHeaderPaginationModule, NgTranscludeModule],
                exports: [LyTab, LyTabGroupComponent, LyTabLabelDirective, LyTabContent],
                declarations: [LyTab, LyTabGroupComponent, LyTabLabelDirective, LyTabContent]
            },] },
];
function LyTabsModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LyTabsModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LyTabsModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGFicy8iLCJzb3VyY2VzIjpbInRhYnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU81RCxNQUFNOzs7WUFMTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxrQkFBa0IsQ0FBQztnQkFDckYsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFlBQVksQ0FBQztnQkFDeEUsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLFlBQVksQ0FBQzthQUM5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlUYWIsIEx5VGFiR3JvdXBDb21wb25lbnQsIEx5VGFiQ29udGVudCB9IGZyb20gJy4vdGFicyc7XG5pbXBvcnQgeyBMeUhlYWRlclBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvaGVhZGVyLXBhZ2luYXRpb24nO1xuaW1wb3J0IHsgTHlSaXBwbGVNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWkvcmlwcGxlJztcbmltcG9ydCB7IE5nVHJhbnNjbHVkZU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeVRhYkxhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItbGFiZWwuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTHlSaXBwbGVNb2R1bGUsIEx5SGVhZGVyUGFnaW5hdGlvbk1vZHVsZSwgTmdUcmFuc2NsdWRlTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5VGFiLCBMeVRhYkdyb3VwQ29tcG9uZW50LCBMeVRhYkxhYmVsRGlyZWN0aXZlLCBMeVRhYkNvbnRlbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtMeVRhYiwgTHlUYWJHcm91cENvbXBvbmVudCwgTHlUYWJMYWJlbERpcmVjdGl2ZSwgTHlUYWJDb250ZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMeVRhYnNNb2R1bGUgeyB9XG4iXX0=