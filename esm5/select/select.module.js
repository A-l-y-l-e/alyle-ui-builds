import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyCommonModule, LyOverlayModule } from '@alyle/ui';
import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { LySelect, LyOption, LySelectTrigger } from './select';
var LySelectModule = /** @class */ (function () {
    function LySelectModule() {
    }
    LySelectModule = tslib_1.__decorate([
        NgModule({
            declarations: [LySelect, LyOption, LySelectTrigger],
            imports: [
                CommonModule,
                LyCommonModule,
                LyCheckboxModule,
                LyOverlayModule
            ],
            exports: [LySelect, LyOption, LySelectTrigger, LyCommonModule]
        })
    ], LySelectModule);
    return LySelectModule;
}());
export { LySelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbHlsZS91aS9zZWxlY3QvIiwic291cmNlcyI6WyJzZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFZL0Q7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFWMUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUM7WUFDbkQsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLGVBQWU7YUFDaEI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUM7U0FDL0QsQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7U0FBbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTHlDb21tb25Nb2R1bGUsIEx5T3ZlcmxheU1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5pbXBvcnQgeyBMeUNoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpL2NoZWNrYm94JztcblxuaW1wb3J0IHsgTHlTZWxlY3QsIEx5T3B0aW9uLCBMeVNlbGVjdFRyaWdnZXIgfSBmcm9tICcuL3NlbGVjdCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0x5U2VsZWN0LCBMeU9wdGlvbiwgTHlTZWxlY3RUcmlnZ2VyXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMeUNvbW1vbk1vZHVsZSxcbiAgICBMeUNoZWNrYm94TW9kdWxlLFxuICAgIEx5T3ZlcmxheU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTHlTZWxlY3QsIEx5T3B0aW9uLCBMeVNlbGVjdFRyaWdnZXIsIEx5Q29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBMeVNlbGVjdE1vZHVsZSB7IH1cbiJdfQ==