import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { LyTheme2 } from './theme/theme2.service';
import { LY_THEME_NAME } from './theme/theme-config';
import { StyleRenderer } from './minimal/renderer-style';
var LyThemeModule = /** @class */ (function () {
    function LyThemeModule() {
    }
    LyThemeModule_1 = LyThemeModule;
    LyThemeModule.setTheme = function (themeName) {
        return {
            ngModule: LyThemeModule_1,
            providers: [
                [LyTheme2],
                [StyleRenderer],
                { provide: LY_THEME_NAME, useValue: themeName }
            ]
        };
    };
    var LyThemeModule_1;
    LyThemeModule = LyThemeModule_1 = tslib_1.__decorate([
        NgModule()
    ], LyThemeModule);
    return LyThemeModule;
}());
export { LyThemeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHekQ7SUFBQTtJQVdBLENBQUM7c0JBWFksYUFBYTtJQUNqQixzQkFBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQy9CLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsQ0FBRSxRQUFRLENBQUU7Z0JBQ1osQ0FBRSxhQUFhLENBQUU7Z0JBQ2pCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO2FBQ2hEO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBVlUsYUFBYTtRQUR6QixRQUFRLEVBQUU7T0FDRSxhQUFhLENBV3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEx5VGhlbWUyIH0gZnJvbSAnLi90aGVtZS90aGVtZTIuc2VydmljZSc7XG5pbXBvcnQgeyBMWV9USEVNRV9OQU1FIH0gZnJvbSAnLi90aGVtZS90aGVtZS1jb25maWcnO1xuaW1wb3J0IHsgU3R5bGVSZW5kZXJlciB9IGZyb20gJy4vbWluaW1hbC9yZW5kZXJlci1zdHlsZSc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBbIEx5VGhlbWUyIF0sXG4gICAgICAgIFsgU3R5bGVSZW5kZXJlciBdLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==