/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LyTheme2 } from './theme/theme2.service';
import { LY_THEME_NAME } from './theme/theme-config';
export class LyThemeModule {
    /**
     * @param {?} themeName
     * @return {?}
     */
    static setTheme(themeName) {
        return {
            ngModule: LyThemeModule,
            providers: [
                [LyTheme2],
                { provide: LY_THEME_NAME, useValue: themeName }
            ]
        };
    }
}
LyThemeModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFseWxlL3VpLyIsInNvdXJjZXMiOlsic3JjL3RoZW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdyRCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFpQjtRQUMvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNULENBQUMsUUFBUSxDQUFDO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO2FBQ2hEO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQVZGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTHlUaGVtZTIgfSBmcm9tICcuL3RoZW1lL3RoZW1lMi5zZXJ2aWNlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUgfSBmcm9tICcuL3RoZW1lL3RoZW1lLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgTHlUaGVtZU1vZHVsZSB7XG4gIHN0YXRpYyBzZXRUaGVtZSh0aGVtZU5hbWU6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTHlUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBbTHlUaGVtZTJdLFxuICAgICAgICB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiB0aGVtZU5hbWUgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==