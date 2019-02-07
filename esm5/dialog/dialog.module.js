/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { LyDialogContainer } from './dialog-container.component';
import { LyDialog } from './dialog';
import { LyDialogTitle } from './dialog-title.directive';
import { LyDialogContent } from './dialog-content.directive';
import { LyDialogActions } from './dialog-actions.directive';
var LyDialogModule = /** @class */ (function () {
    function LyDialogModule() {
    }
    LyDialogModule.decorators = [
        { type: NgModule, args: [{
                    entryComponents: [
                        LyDialogContainer
                    ],
                    declarations: [
                        LyDialogContainer,
                        LyDialogTitle,
                        LyDialogContent,
                        LyDialogActions
                    ],
                    imports: [
                        CommonModule,
                        LyCommonModule,
                        LyOverlayModule
                    ],
                    exports: [
                        LyCommonModule,
                        LyDialogContainer,
                        LyDialogTitle,
                        LyDialogContent,
                        LyDialogActions
                    ],
                    providers: [
                        LyDialog
                    ]
                },] }
    ];
    return LyDialogModule;
}());
export { LyDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTdEO0lBQUE7SUEwQjhCLENBQUM7O2dCQTFCOUIsUUFBUSxTQUFDO29CQUNSLGVBQWUsRUFBRTt3QkFDZixpQkFBaUI7cUJBQ2xCO29CQUNELFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGVBQWU7cUJBQ2hCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxRQUFRO3FCQUNUO2lCQUNGOztJQUM2QixxQkFBQztDQUFBLEFBMUIvQixJQTBCK0I7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5T3ZlcmxheU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbmltcG9ydCB7IEx5RGlhbG9nQ29udGFpbmVyIH0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMeURpYWxvZyB9IGZyb20gJy4vZGlhbG9nJztcbmltcG9ydCB7IEx5RGlhbG9nVGl0bGUgfSBmcm9tICcuL2RpYWxvZy10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlEaWFsb2dDb250ZW50IH0gZnJvbSAnLi9kaWFsb2ctY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTHlEaWFsb2dBY3Rpb25zIH0gZnJvbSAnLi9kaWFsb2ctYWN0aW9ucy5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBMeURpYWxvZ0NvbnRhaW5lclxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMeURpYWxvZ0NvbnRhaW5lcixcbiAgICBMeURpYWxvZ1RpdGxlLFxuICAgIEx5RGlhbG9nQ29udGVudCxcbiAgICBMeURpYWxvZ0FjdGlvbnNcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMeUNvbW1vbk1vZHVsZSxcbiAgICBMeU92ZXJsYXlNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEx5Q29tbW9uTW9kdWxlLFxuICAgIEx5RGlhbG9nQ29udGFpbmVyLFxuICAgIEx5RGlhbG9nVGl0bGUsXG4gICAgTHlEaWFsb2dDb250ZW50LFxuICAgIEx5RGlhbG9nQWN0aW9uc1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBMeURpYWxvZ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEx5RGlhbG9nTW9kdWxlIHsgfVxuIl19