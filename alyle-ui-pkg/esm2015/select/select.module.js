import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { LySelect, LyOption } from './select';
let LySelectModule = class LySelectModule {
};
LySelectModule = tslib_1.__decorate([
    NgModule({
        declarations: [LySelect, LyOption],
        imports: [
            CommonModule,
            LyCommonModule,
            LyCheckboxModule,
            LyOverlayModule
        ],
        exports: [LySelect, LyOption, LyCommonModule]
    })
], LySelectModule);
export { LySelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zZWxlY3QvIiwic291cmNlcyI6WyJzZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVk5QyxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUksQ0FBQTtBQUFsQixjQUFjO0lBVjFCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDbEMsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsZUFBZTtTQUNoQjtRQUNELE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDO0tBQzlDLENBQUM7R0FDVyxjQUFjLENBQUk7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5T3ZlcmxheU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUNoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL2NoZWNrYm94JztcblxuaW1wb3J0IHsgTHlTZWxlY3QsIEx5T3B0aW9uIH0gZnJvbSAnLi9zZWxlY3QnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMeVNlbGVjdCwgTHlPcHRpb25dLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEx5Q29tbW9uTW9kdWxlLFxuICAgIEx5Q2hlY2tib3hNb2R1bGUsXG4gICAgTHlPdmVybGF5TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtMeVNlbGVjdCwgTHlPcHRpb24sIEx5Q29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBMeVNlbGVjdE1vZHVsZSB7IH1cbiJdfQ==