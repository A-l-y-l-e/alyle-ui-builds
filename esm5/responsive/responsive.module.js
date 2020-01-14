import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MediaDirective } from './media.directive';
import { LyCommonModule } from '@alyle/ui';
/**
 * @deprecated use instead `[display]` or `[lyStyle]`
 */
var ResponsiveModule = /** @class */ (function () {
    function ResponsiveModule() {
    }
    ResponsiveModule = tslib_1.__decorate([
        NgModule({
            declarations: [MediaDirective],
            exports: [MediaDirective, LyCommonModule],
        })
    ], ResponsiveModule);
    return ResponsiveModule;
}());
export { ResponsiveModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvcmVzcG9uc2l2ZS8iLCJzb3VyY2VzIjpbInJlc3BvbnNpdmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDOztHQUVHO0FBS0g7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQztTQUMxQyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWRpYURpcmVjdGl2ZSB9IGZyb20gJy4vbWVkaWEuZGlyZWN0aXZlJztcbmltcG9ydCB7IEx5Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGFseWxlL3VpJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgaW5zdGVhZCBgW2Rpc3BsYXldYCBvciBgW2x5U3R5bGVdYFxuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNZWRpYURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtNZWRpYURpcmVjdGl2ZSwgTHlDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlTW9kdWxlIHsgfVxuIl19