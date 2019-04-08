import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { LyDialogContainer } from './dialog-container.component';
import { LyDialog } from './dialog';
import { LyDialogTitle } from './dialog-title.directive';
import { LyDialogContent } from './dialog-content.directive';
import { LyDialogActions } from './dialog-actions.directive';
let LyDialogModule = class LyDialogModule {
};
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
export { LyDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBNEI3RCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUksQ0FBQTtBQUFsQixjQUFjO0lBMUIxQixRQUFRLENBQUM7UUFDUixlQUFlLEVBQUU7WUFDZixpQkFBaUI7U0FDbEI7UUFDRCxZQUFZLEVBQUU7WUFDWixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLGVBQWU7WUFDZixlQUFlO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGNBQWM7WUFDZCxlQUFlO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsZUFBZTtZQUNmLGVBQWU7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxRQUFRO1NBQ1Q7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUFJO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlLCBMeU92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYWx5bGUvdWknO1xuXG5pbXBvcnQgeyBMeURpYWxvZ0NvbnRhaW5lciB9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTHlEaWFsb2cgfSBmcm9tICcuL2RpYWxvZyc7XG5pbXBvcnQgeyBMeURpYWxvZ1RpdGxlIH0gZnJvbSAnLi9kaWFsb2ctdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5RGlhbG9nQ29udGVudCB9IGZyb20gJy4vZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5RGlhbG9nQWN0aW9ucyB9IGZyb20gJy4vZGlhbG9nLWFjdGlvbnMuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTHlEaWFsb2dDb250YWluZXJcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTHlEaWFsb2dDb250YWluZXIsXG4gICAgTHlEaWFsb2dUaXRsZSxcbiAgICBMeURpYWxvZ0NvbnRlbnQsXG4gICAgTHlEaWFsb2dBY3Rpb25zXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTHlDb21tb25Nb2R1bGUsXG4gICAgTHlPdmVybGF5TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMeUNvbW1vbk1vZHVsZSxcbiAgICBMeURpYWxvZ0NvbnRhaW5lcixcbiAgICBMeURpYWxvZ1RpdGxlLFxuICAgIEx5RGlhbG9nQ29udGVudCxcbiAgICBMeURpYWxvZ0FjdGlvbnNcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTHlEaWFsb2dcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMeURpYWxvZ01vZHVsZSB7IH1cbiJdfQ==