import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyCarouselItem, LyCarousel } from './carousel';
import { LyCommonModule } from '@alyle/ui';
let LyCarouselModule = class LyCarouselModule {
};
LyCarouselModule = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule, LyCommonModule],
        exports: [LyCarouselItem, LyCarousel, LyCommonModule],
        declarations: [LyCarouselItem, LyCarousel]
    })
], LyCarouselModule);
export { LyCarouselModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpL2Nhcm91c2VsLyIsInNvdXJjZXMiOlsiY2Fyb3VzZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBTzNDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBQUksQ0FBQTtBQUFwQixnQkFBZ0I7SUFMNUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztRQUN2QyxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQztRQUNyRCxZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO0tBQzNDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEx5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCc7XG5pbXBvcnQgeyBMeUNvbW1vbk1vZHVsZSB9IGZyb20gJ0BhbHlsZS91aSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEx5Q29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsLCBMeUNvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0x5Q2Fyb3VzZWxJdGVtLCBMeUNhcm91c2VsXVxufSlcbmV4cG9ydCBjbGFzcyBMeUNhcm91c2VsTW9kdWxlIHsgfVxuIl19