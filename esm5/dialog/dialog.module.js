import * as tslib_1 from "tslib";
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
    LyDialogModule = tslib_1.__decorate([
        NgModule({
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
        })
    ], LyDialogModule);
    return LyDialogModule;
}());
export { LyDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBNEI3RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQTFCMUIsUUFBUSxDQUFDO1lBQ1IsZUFBZSxFQUFFO2dCQUNmLGlCQUFpQjthQUNsQjtZQUNELFlBQVksRUFBRTtnQkFDWixpQkFBaUI7Z0JBQ2pCLGFBQWE7Z0JBQ2IsZUFBZTtnQkFDZixlQUFlO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxlQUFlO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGNBQWM7Z0JBQ2QsaUJBQWlCO2dCQUNqQixhQUFhO2dCQUNiLGVBQWU7Z0JBQ2YsZUFBZTthQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxRQUFRO2FBQ1Q7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSwgTHlPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuaW1wb3J0IHsgTHlEaWFsb2dDb250YWluZXIgfSBmcm9tICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEx5RGlhbG9nIH0gZnJvbSAnLi9kaWFsb2cnO1xuaW1wb3J0IHsgTHlEaWFsb2dUaXRsZSB9IGZyb20gJy4vZGlhbG9nLXRpdGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeURpYWxvZ0NvbnRlbnQgfSBmcm9tICcuL2RpYWxvZy1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMeURpYWxvZ0FjdGlvbnMgfSBmcm9tICcuL2RpYWxvZy1hY3Rpb25zLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEx5RGlhbG9nQ29udGFpbmVyXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEx5RGlhbG9nQ29udGFpbmVyLFxuICAgIEx5RGlhbG9nVGl0bGUsXG4gICAgTHlEaWFsb2dDb250ZW50LFxuICAgIEx5RGlhbG9nQWN0aW9uc1xuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlLFxuICAgIEx5T3ZlcmxheU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTHlDb21tb25Nb2R1bGUsXG4gICAgTHlEaWFsb2dDb250YWluZXIsXG4gICAgTHlEaWFsb2dUaXRsZSxcbiAgICBMeURpYWxvZ0NvbnRlbnQsXG4gICAgTHlEaWFsb2dBY3Rpb25zXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEx5RGlhbG9nXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTHlEaWFsb2dNb2R1bGUgeyB9XG4iXX0=