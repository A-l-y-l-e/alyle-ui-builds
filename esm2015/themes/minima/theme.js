import * as tslib_1 from "tslib";
import { NgModule, Directive } from '@angular/core';
import { LY_THEME_NAME, LyTheme2 } from '@alyle/ui';
let ThemeMinimaLight = class ThemeMinimaLight {
};
ThemeMinimaLight = tslib_1.__decorate([
    Directive({
        selector: '[ly-theme-minima-light]',
        providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-light' }]
    })
], ThemeMinimaLight);
export { ThemeMinimaLight };
let ThemeMinimaDark = class ThemeMinimaDark {
};
ThemeMinimaDark = tslib_1.__decorate([
    Directive({
        selector: '[ly-theme-minima-dark]',
        providers: [LyTheme2, { provide: LY_THEME_NAME, useValue: 'minima-dark' }]
    })
], ThemeMinimaDark);
export { ThemeMinimaDark };
let ThemeMinimaModule = class ThemeMinimaModule {
    constructor() {
        console.warn(`ThemeMinimaModule is deprecated.`);
    }
};
ThemeMinimaModule = tslib_1.__decorate([
    NgModule({
        declarations: [ThemeMinimaDark, ThemeMinimaLight],
        exports: [ThemeMinimaDark, ThemeMinimaLight]
    })
], ThemeMinimaModule);
export { ThemeMinimaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWx5bGUvdWkvdGhlbWVzL21pbmltYS8iLCJzb3VyY2VzIjpbInRoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVFwRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFJLENBQUE7QUFBcEIsZ0JBQWdCO0lBSjVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsU0FBUyxFQUFFLENBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLENBQUU7S0FDOUUsQ0FBQztHQUNXLGdCQUFnQixDQUFJO1NBQXBCLGdCQUFnQjtBQU03QixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUksQ0FBQTtBQUFuQixlQUFlO0lBSjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsU0FBUyxFQUFFLENBQUUsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLENBQUU7S0FDN0UsQ0FBQztHQUNXLGVBQWUsQ0FBSTtTQUFuQixlQUFlO0FBTTVCLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQzVCO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRixDQUFBO0FBSlksaUJBQWlCO0lBSjdCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztRQUNqRCxPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7S0FDN0MsQ0FBQztHQUNXLGlCQUFpQixDQUk3QjtTQUpZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExZX1RIRU1FX05BTUUsIEx5VGhlbWUyIH0gZnJvbSAnQGFseWxlL3VpJztcbmltcG9ydCB7IE1pbmltYUxpZ2h0IH0gZnJvbSAnLi9saWdodCc7XG5pbXBvcnQgeyBNaW5pbWFEYXJrIH0gZnJvbSAnLi9kYXJrJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x5LXRoZW1lLW1pbmltYS1saWdodF0nLFxuICBwcm92aWRlcnM6IFsgTHlUaGVtZTIsIHsgcHJvdmlkZTogTFlfVEhFTUVfTkFNRSwgdXNlVmFsdWU6ICdtaW5pbWEtbGlnaHQnIH0gXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYUxpZ2h0IHsgfVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbHktdGhlbWUtbWluaW1hLWRhcmtdJyxcbiAgcHJvdmlkZXJzOiBbIEx5VGhlbWUyLCB7IHByb3ZpZGU6IExZX1RIRU1FX05BTUUsIHVzZVZhbHVlOiAnbWluaW1hLWRhcmsnIH0gXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZU1pbmltYURhcmsgeyB9XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RoZW1lTWluaW1hRGFyaywgVGhlbWVNaW5pbWFMaWdodF0sXG4gIGV4cG9ydHM6IFtUaGVtZU1pbmltYURhcmssIFRoZW1lTWluaW1hTGlnaHRdXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTWluaW1hTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS53YXJuKGBUaGVtZU1pbmltYU1vZHVsZSBpcyBkZXByZWNhdGVkLmApO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1pbmltYVRoZW1lIGV4dGVuZHMgTWluaW1hTGlnaHQsIE1pbmltYURhcmsgeyB9XG4iXX0=