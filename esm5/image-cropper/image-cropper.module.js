import * as tslib_1 from "tslib";
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyHammerGestureConfig } from '@alyle/ui';
import { LyImageCropper } from './image-cropper';
var LyImageCropperModule = /** @class */ (function () {
    function LyImageCropperModule() {
    }
    LyImageCropperModule = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule],
            exports: [LyImageCropper],
            providers: [
                { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig }
            ],
            declarations: [LyImageCropper]
        })
    ], LyImageCropperModule);
    return LyImageCropperModule;
}());
export { LyImageCropperModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvaW1hZ2UtY3JvcHBlci8iLCJzb3VyY2VzIjpbImltYWdlLWNyb3BwZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBVWpEO0lBQUE7SUFBbUMsQ0FBQztJQUF2QixvQkFBb0I7UUFSaEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFO2FBQ3BFO1lBQ0QsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1NBQy9CLENBQUM7T0FDVyxvQkFBb0IsQ0FBRztJQUFELDJCQUFDO0NBQUEsQUFBcEMsSUFBb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSEFNTUVSX0dFU1RVUkVfQ09ORklHIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTHlIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFseWxlL3VpJztcblxuaW1wb3J0IHsgTHlJbWFnZUNyb3BwZXIgfSBmcm9tICcuL2ltYWdlLWNyb3BwZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0x5SW1hZ2VDcm9wcGVyXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBMeUhhbW1lckdlc3R1cmVDb25maWcgfVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMeUltYWdlQ3JvcHBlcl1cbn0pXG5leHBvcnQgY2xhc3MgTHlJbWFnZUNyb3BwZXJNb2R1bGUge31cbiJdfQ==